(() => {
  const canvas = document.getElementById("cat-field");
  if (!canvas || !window.CatField || !window.HERO_CONTENT) return;

  const field = new window.CatField(canvas, window.HERO_CONTENT, {
    color: "rgba(239, 231, 207, 0.82)",
    rowStep: 1,
    maxParticles: 0,
    aspectScale: 0.82,
    interactionRadius: 140,
    repulsionStrength: 0.22,
    floatAmplitude: 0.28
  });
  field.init();

  // ─── Canvas-based path thread (grows progressively with scroll) ────────
  class PathThread {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext("2d");
      this.particles = [];
      this.progress = 0;
      this.time = 0;
      this.frameId = null;
      this.w = 32;
      this.h = 400;
    }

    build() {
      const rect = this.canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      const w = Math.max(rect.width, 1);
      const h = Math.max(rect.height, 1);
      this.canvas.width = w * dpr;
      this.canvas.height = h * dpr;
      this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      this.w = w;
      this.h = h;

      // Same character vocabulary as the cat silhouette
      const chars = ["+", ".", "-", "+", "~", ".", "|", ":", "+", "-", ".", "+"];
      const spacing = 13;
      const cx = w / 2;
      this.particles = [];

      for (let y = 4; y < h; y += spacing) {
        const idx = Math.floor(y / spacing);
        this.particles.push({
          y,
          char: chars[idx % chars.length],
          seed: idx * 17.3,
          baseX: cx,
        });
      }
    }

    setProgress(p) {
      this.progress = Math.max(0, Math.min(1, p));
    }

    draw() {
      const { w, h, ctx, particles, progress, time } = this;
      ctx.clearRect(0, 0, w, h);

      const revealY = progress * h;
      ctx.font = `10px "IBM Plex Mono", monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      particles.forEach(p => {
        if (p.y > revealY) return;
        // Characters fade in as the reveal front passes over them
        const alpha = Math.min((revealY - p.y) / 30, 1) * 0.62;
        if (alpha < 0.01) return;
        ctx.globalAlpha = alpha;
        ctx.fillStyle = "rgba(239, 231, 207, 1)";
        // Gentle horizontal float — same family as cat particle float
        const x = p.baseX + Math.sin(time * 0.0009 + p.seed * 0.04) * 2.8;
        ctx.fillText(p.char, x, p.y);
      });
      ctx.globalAlpha = 1;
    }

    loop(t) {
      this.time = t;
      this.draw();
      this.frameId = requestAnimationFrame(ts => this.loop(ts));
    }

    start() {
      if (!this.frameId) this.frameId = requestAnimationFrame(ts => this.loop(ts));
    }
  }

  const pathThreadCanvas = document.getElementById("path-thread-canvas");
  const pathSection = document.querySelector(".path-section");
  let pathThread = null;

  if (pathThreadCanvas) {
    pathThread = new PathThread(pathThreadCanvas);
    pathThread.build();
    pathThread.start();
    window.addEventListener("resize", () => pathThread.build());
  }

  // ─── Path section sway elements ────────────────────────────────────────
  const pathHeaders = [...document.querySelectorAll(".path-event__header")];
  const pathDescs   = [...document.querySelectorAll(".path-event__desc")];

  // ─── Single combined scroll handler ───────────────────────────────────
  window.addEventListener("scroll", () => {
    const sy = window.scrollY;

    // 1. Cat yarn-ball collapse
    field.setScrollRatio(Math.min(sy / window.innerHeight, 1));

    // 2. Path thread grows progressively as user scrolls into section
    if (pathThread && pathSection) {
      const sectionTop = pathSection.offsetTop;
      const sectionH   = pathSection.offsetHeight;
      // Start revealing when section is 40% into viewport, finish at bottom of section
      const progress = (sy + window.innerHeight * 0.6 - sectionTop) / (sectionH * 0.95);
      pathThread.setProgress(progress);
    }

    // 3. Headers and descs sway with larger amplitude, opposite phases
    pathHeaders.forEach((el, i) => {
      const sway = (Math.sin(sy * 0.007 + i * 1.3) * 20).toFixed(2);
      el.style.transform = `translateX(${sway}px)`;
    });
    pathDescs.forEach((el, i) => {
      const sway = (Math.sin(sy * 0.007 + i * 1.3 + 0.9) * 14).toFixed(2);
      el.style.transform = `translateX(${sway}px)`;
    });
  }, { passive: true });

  // ─── Reveal each path-event as it enters the viewport ─────────────────
  const pathEvents = document.querySelectorAll(".path-event");
  if (pathEvents.length && "IntersectionObserver" in window) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("path-event--visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    pathEvents.forEach(el => obs.observe(el));
  }
})();
