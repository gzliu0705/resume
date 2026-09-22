(() => {
  class CatField {
    constructor(canvas, content, options = {}) {
      this.canvas = canvas;
      this.ctx = canvas.getContext("2d");
      this.content = content;
      this.options = {
        interactionRadius: 140,
        repulsionStrength: 0.22,
        springStrength: 0.055,
        damping: 0.85,
        floatAmplitude: 0.28,
        fontFamily: '"IBM Plex Mono", monospace',
        color: "#1f1f1f",
        rowStep: 1,
        maxParticles: 0,
        // compress horizontal spacing so the cat looks portrait-like
        // (terminal fonts are ~0.5 wide:tall; 0.65 squeezes columns closer)
        aspectScale: 0.82,
        ...options
      };

      this.pointer = { x: 0, y: 0, active: false };
      this.prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
      this.particles = [];
      this.metrics = { width: 0, height: 0, dpr: 1, cellX: 0, cellY: 0, cell: 0 };
      this.animationFrame = null;
      this.scrollRatio = 0;

      this.handlePointerMove = this.handlePointerMove.bind(this);
      this.handlePointerLeave = this.handlePointerLeave.bind(this);
      this.handleResize = this.handleResize.bind(this);
      this.handleMotionPreference = this.handleMotionPreference.bind(this);
      this.loop = this.loop.bind(this);
    }

    init() {
      this.buildParticles();
      this.attachEvents();
      this.loop();
    }

    attachEvents() {
      window.addEventListener("resize", this.handleResize);
      this.canvas.addEventListener("pointermove", this.handlePointerMove);
      this.canvas.addEventListener("pointerleave", this.handlePointerLeave);
      this.prefersReducedMotion.addEventListener("change", this.handleMotionPreference);
    }

    destroy() {
      window.removeEventListener("resize", this.handleResize);
      this.canvas.removeEventListener("pointermove", this.handlePointerMove);
      this.canvas.removeEventListener("pointerleave", this.handlePointerLeave);
      this.prefersReducedMotion.removeEventListener("change", this.handleMotionPreference);
      if (this.animationFrame) cancelAnimationFrame(this.animationFrame);
    }

    setScrollRatio(ratio) {
      this.scrollRatio = Math.max(0, Math.min(1, ratio));
    }

    handlePointerMove(event) {
      const rect = this.canvas.getBoundingClientRect();
      this.pointer.x = event.clientX - rect.left;
      this.pointer.y = event.clientY - rect.top;
      this.pointer.active = true;
    }

    handlePointerLeave() { this.pointer.active = false; }
    handleResize() { this.buildParticles(); }
    handleMotionPreference() { this.buildParticles(); }

    buildParticles() {
      const rect = this.canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      const width = Math.max(rect.width, 1);
      const height = Math.max(rect.height, 1);
      this.canvas.width = width * dpr;
      this.canvas.height = height * dpr;
      this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const { rowStep: step, aspectScale: scaleH } = this.options;
      const rows = this.content.silhouette.length;
      const cols = Math.max(...this.content.silhouette.map((r) => r.length));
      const effectiveRows = Math.ceil(rows / step);

      // +1 padding → slightly larger render than +4
      const cellX = width / (cols + 1);
      const cellY = height / (effectiveRows + 1);

      const catW = cols * cellX * scaleH;
      const catH = effectiveRows * cellY;
      const offsetX = (width - catW) / 2;
      const offsetY = (height - catH) / 2;

      this.metrics = { width, height, dpr, cellX, cellY, cell: Math.min(cellX, cellY) };
      this.particles = [];

      this.content.silhouette.forEach((row, rowIndex) => {
        if (rowIndex % step !== 0) return;
        const effRow = Math.floor(rowIndex / step);
        row.split("").forEach((marker, colIndex) => {
          if (marker === " ") return;
          const homeX = offsetX + colIndex * cellX * scaleH;
          const homeY = offsetY + effRow * cellY;
          this.particles.push({
            glyph: marker,
            homeX, homeY,
            _homeX: homeX, _homeY: homeY,
            x: homeX, y: homeY,
            vx: 0, vy: 0,
            seed: (rowIndex + 1) * (colIndex + 3)
          });
        });
      });

      if (this.prefersReducedMotion.matches) {
        this.particles.forEach((p) => { p.x = p.homeX; p.y = p.homeY; p.vx = 0; p.vy = 0; });
      }

      const maxP = this.options.maxParticles;
      if (maxP > 0 && this.particles.length > maxP) {
        const s = this.particles.length / maxP;
        this.particles = Array.from({ length: maxP }, (_, i) => this.particles[Math.round(i * s)]);
      }

      this._assignBallTargets();
    }

    // All particles converge to a dense yarn-ball cluster at canvas centre.
    // Golden-angle distribution keeps them from piling exactly on one point.
    _assignBallTargets() {
      const { width, height } = this.metrics;
      const cx = width * 0.5;
      const cy = height * 0.5;
      this.particles.forEach((p, i) => {
        const angle = i * 137.508 * (Math.PI / 180);
        // Larger spread → bigger visual yarn ball
        const r = (p.seed % 24) * 2.6; // 0–60 px spread
        p.timelineX = cx + Math.cos(angle) * r;
        p.timelineY = cy + Math.sin(angle) * r;
      });
    }

    updateParticle(particle, time) {
      if (this.prefersReducedMotion.matches) {
        particle.x = particle.homeX; particle.y = particle.homeY;
        particle.vx = 0; particle.vy = 0;
        return;
      }

      const tr = this.scrollRatio;
      const tx = particle._homeX * (1 - tr) + particle.timelineX * tr;
      const ty = particle._homeY * (1 - tr) + particle.timelineY * tr;

      let ax = (tx - particle.x) * this.options.springStrength;
      let ay = (ty - particle.y) * this.options.springStrength;

      // Float fades out as cat condenses into ball
      const floatScale = 1 - tr * 0.95;
      ay += Math.sin(time * 0.0012 + particle.seed * 0.07) * this.options.floatAmplitude * floatScale;

      if (this.pointer.active) {
        const dx = particle.x - this.pointer.x;
        const dy = particle.y - this.pointer.y;
        const dist = Math.hypot(dx, dy);
        if (dist < this.options.interactionRadius) {
          const force = (1 - dist / this.options.interactionRadius) * this.options.repulsionStrength;
          ax += (dx / (dist || 1)) * force * 14;
          ay += (dy / (dist || 1)) * force * 14;
        }
      }

      particle.vx = (particle.vx + ax) * this.options.damping;
      particle.vy = (particle.vy + ay) * this.options.damping;
      particle.x += particle.vx;
      particle.y += particle.vy;
    }

    draw() {
      const { width, height, cellX, cellY } = this.metrics;
      this.ctx.clearRect(0, 0, width, height);

      // Cat fades as it condenses
      const catOpacity = 1 - this.scrollRatio * 0.65;
      this.ctx.globalAlpha = Math.max(catOpacity, 0);
      this.ctx.fillStyle = this.options.color;

      // Font: sized to the compressed column width so chars don't visually smear
      const scaleH = this.options.aspectScale;
      const fontSize = Math.max(Math.min(cellX * scaleH * 1.9, cellY * 0.9), 7);
      this.ctx.font = `${fontSize}px ${this.options.fontFamily}`;
      this.ctx.textAlign = "center";
      this.ctx.textBaseline = "middle";

      this.particles.forEach((p) => this.ctx.fillText(p.glyph, p.x, p.y));

      this.ctx.globalAlpha = 1;

      // Thread: thick wavy line, drifts from ball-centre toward canvas right as it falls
      if (this.scrollRatio > 0.42) {
        const thr    = (this.scrollRatio - 0.42) / 0.58;
        const startX = width * 0.5;         // ball sits at canvas centre
        const exitX  = width * 0.60;        // thread drifts toward right edge to connect with path section
        const ballY  = height * 0.5;
        const threadEnd = ballY + thr * (height * 0.54);

        this.ctx.strokeStyle = `rgba(239, 231, 207, ${thr * 0.65})`;
        this.ctx.lineWidth = 3.5;
        this.ctx.setLineDash([4, 6]);
        this.ctx.beginPath();
        this.ctx.moveTo(startX, ballY);

        const freq = 0.055;
        const amp  = 10;
        for (let y = ballY; y <= threadEnd; y += 3) {
          const t    = (y - ballY) / (threadEnd - ballY || 1);
          const baseX = startX + (exitX - startX) * t;
          const x = baseX + Math.sin((y - ballY) * freq) * amp * Math.min(thr * 2, 1);
          this.ctx.lineTo(x, y);
        }
        this.ctx.stroke();
        this.ctx.setLineDash([]);
      }
    }

    loop(time = 0) {
      this.particles.forEach((p) => this.updateParticle(p, time));
      this.draw();
      this.animationFrame = requestAnimationFrame(this.loop);
    }
  }

  window.CatField = CatField;
})();
