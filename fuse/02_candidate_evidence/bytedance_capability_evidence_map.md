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
- Reached approximately 60% internal adoption and informed resource allocation for a key IP campaign that delivered approximately 40% higher downloads than the previous strategy.

### Decision loop

External and internal signals → common definitions and quality controls → consumption/dissemination/search metrics → composite popularity score → daily dashboard → campaign and IP-prioritisation decisions → anomaly investigation and definition correction → refreshed score.

### Capabilities demonstrated

Behavioural and content measurement; metric-system design; ETL pipeline development; PCA; AHP; composite scoring; multi-source data integration; cloud deployment; data-quality monitoring; anomaly attribution; missing-data handling; workflow automation; competitor benchmarking; time-series trend analysis; dashboard delivery; campaign measurement; cross-functional decision support.

### Safe CV wording

Use `Fanqie IP Popularity Model & Dashboard` as the project name. It is safe to name the ETL → PCA/AHP scoring → cloud deployment → dashboard workflow. The approximately 60% figure refers to internal adoption. The approximately 40% result refers specifically to download uplift for one key-IP resource-allocation campaign versus the previous strategy; do not generalise it to all campaigns or overall product growth. Do not list every source-specific repair in the CV or claim the long-term in-app distribution integration as delivered.

## 2. Qishui Music Audience Saturation & Acquisition Targeting

### Verified contribution

- Diagnosed a decline at the activation-to-registration stage of the new-user funnel.
- Linked Douyin creator audiences with Qishui installation status through cross-product user matching, using the installed-user share to quantify audience saturation.
- Built a rule-based targeting matrix combining acquisition volume, activation-to-registration conversion, and existing-user penetration.
- Classified creators and content verticals by remaining incremental-user potential rather than treating engagement alone as evidence of acquisition value.
- Converted the analysis into differentiated investment guidance adopted by the marketing team.
- Materially reduced routine investment in content verticals whose audiences had already become saturated.

### Decision loop

Activation-to-registration decline → creator-level cross-product audience matching → installed-user penetration → acquisition-volume / conversion / saturation matrix → creator and vertical prioritisation → marketing investment adjustment.

### Capabilities demonstrated

Acquisition-funnel diagnosis; cross-product audience analysis; user-level data linkage; audience saturation measurement; rule-based segmentation; creator and content-vertical targeting; incremental-user prioritisation; resource allocation; stakeholder adoption.

### Safe CV wording

Use `Qishui Music Audience Saturation & Acquisition Targeting`. Describe the measured conversion step as activation to registration. The segmentation was a rule-based matrix, not clustering or a predictive model. It is safe to state that the marketing team adopted the strategy and materially reduced routine investment in saturated verticals. Do not claim conversion uplift, CAC reduction, ROI improvement, or incremental-user volume until a public-safe result is confirmed.
