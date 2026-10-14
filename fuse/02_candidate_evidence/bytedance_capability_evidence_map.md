# ByteDance capability evidence map

This document converts the detailed ByteDance project evidence into defensible CV claims and interview themes.

## 1. Fanqie IP Popularity Model & Dashboard

### Verified contribution

- Built a daily measurement product to monitor and grow the influence of leading Fanqie titles, identify IPs showing organic momentum, benchmark market position, and evaluate creator and marketing campaigns.
- Defined a common measurement framework across consumption, dissemination, and search signals collected from internal systems and external data platforms.
- Built automated ETL pipelines across internal and external sources, combining PCA-derived statistical weights with cross-functionally agreed AHP weights to produce a comparable IP-level popularity score.
- Established automated data-quality monitoring and anomaly attribution across heterogeneous sources, correcting source definitions, entity matching, granularity, joins, missingness, and update logic.
- Replaced several manual data updates with automated online workflows and correction checks, reducing manual maintenance and improving metric stability.
- Cloud-deployed the daily scoring pipeline and dashboard, supporting cross-IP and cross-publisher benchmarking, longitudinal trend monitoring, high-potential IP discovery, and post-campaign evaluation.
- Reached approximately 60% internal adoption; after the business team began using IP popularity to inform promotion, a business retrospective recorded approximately 40% more anchor-tracked app downloads across all team-promoted videos in the following month versus the preceding month. This is an observational before/after comparison, not a causal estimate.

### Decision loop

Early-stage continuation decisions based on video VV/likes and business judgement → comparable consumption/dissemination/search signals with common definitions and quality checks → PCA/AHP-weighted daily IP popularity score and cloud dashboard → business team changes which IPs receive continued promotion → higher observed combined exposure and anchor-tracked app downloads across the team's promoted videos in a before/after business retrospective. Data anomalies are investigated and definitions corrected to maintain the daily score; the before/after result is not a causal lift estimate.

### Capabilities demonstrated

Behavioural and content measurement; metric-system design; ETL pipeline development; PCA; AHP; composite scoring; multi-source data integration; cloud deployment; data-quality monitoring; anomaly attribution; missing-data handling; workflow automation; competitor benchmarking; time-series trend analysis; dashboard delivery; campaign measurement; cross-functional decision support.

### Safe CV wording

Use `Fanqie IP Popularity Model & Dashboard` as the project name. It is safe to name the ETL → PCA/AHP scoring → cloud deployment → dashboard process. The approximately 60% figure refers to internal adoption. The business team used the IP heat reference to change which IPs received continued promotion; the user did not set a formal allocation strategy or execute the spend. The approximately 40% figure is an approximate business-retrospective comparison of total anchor-tracked app downloads from all team-promoted videos across the month before versus the month after IP-heat-informed promotion; most weeks were reportedly at a higher, relatively stable level, but the weekly source data have not yet been checked. Promoted video counts were reportedly similar and total budget unchanged, while total views (paid and organic combined) increased; this does not establish a paid-exposure or per-view conversion lift. Do not describe this as one key IP, every week rising 40%, overall app growth, activity-adjusted incremental installs or a causal dashboard effect. Do not claim the long-term in-app distribution integration as delivered.

## 2. Qishui Music Audience Saturation & Acquisition Targeting

### Verified contribution

- Investigated declining anchor-linked new-user activations from promoted videos; the app-store download itself was not observable. The earlier CV/LinkedIn claim about declining activation-to-registration conversion conflicts with the user's clarified funnel and must be revised.
- Analysed deduplicated Douyin viewers against Qishui installation status, using the installed-user share to quantify saturation at creator and content-vertical level.
- Used new-user activations associated with the promotion anchor to assess acquisition potential among uninstalled viewers and built a four-quadrant saturation-versus-activation analysis to guide vertical-level investment; exact attribution rules, thresholds and rate denominators should be checked against the original reporting.
- Classified creators and content verticals by remaining new-user potential rather than treating engagement alone as evidence of acquisition value.
- Converted the analysis into differentiated investment guidance adopted by the marketing team.
- Reduced routine promotion in content verticals whose audiences had become saturated and tested or increased promotion in higher-potential verticals. The user did not stay for the final performance review.

### Decision loop

Declining anchor-linked new-user activations → review observable promotion funnel → growing installed-user share among deduplicated viewers → compare vertical-level saturation with new-user activation performance → four-quadrant analysis → marketing reduces saturated-vertical promotion and tests or increases higher-potential verticals; no final post-adjustment performance results were verified.

### Capabilities demonstrated

Acquisition-funnel diagnosis; cross-product audience analysis; user-level data linkage; audience saturation measurement; rule-based segmentation; creator and content-vertical targeting; incremental-user prioritisation; resource allocation; stakeholder adoption.

### Safe CV wording

Use `Qishui Music Audience Saturation & Acquisition Targeting`. The observed problem was a decline in anchor-linked new-user activations; app-store downloads were not directly measured, and the prior activation-to-registration-decline wording must not be reused. Marketing adopted the analysis, reducing routine promotion in saturated verticals and testing or increasing promotion in higher-potential verticals. Keep the actual four-quadrant tool in project evidence or interview discussion rather than presenting it as a sophisticated DS model; emphasise funnel diagnosis, deduplicated audience measurement, activation signals and decisions instead. Do not claim activation uplift, CAC reduction, ROI improvement or incremental-user volume without a confirmed final review.
