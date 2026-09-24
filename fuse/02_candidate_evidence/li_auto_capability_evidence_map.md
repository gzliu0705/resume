# Li Auto capability evidence map

This document turns the detailed project answers in `answer.md` into defensible resume claims and interview themes. It separates established evidence from claims that should be phrased carefully.

## 1. Battery-longevity causal decision system

### Verified contribution

- Owned the end-to-end analysis: problem framing, data/label design, causal modelling, driver interpretation, feature extraction and monitoring, internal-platform productisation, and business communication.
- Used a one-year observation window and quality-controlled SOH labels computed by a cloud-deployed algorithm using K-means, point-count checks, and window-average smoothing.
- Defined treatment/control groups for charging-temperature and average-SOC behaviours; used logistic-regression propensity scores, KNN matching with caliper 1, SMD plus distributional tests for balance, and ATT after binning continuous values.
- Tested whether candidate drivers were confounders or intermediate variables by re-running PSM with factors introduced as covariates and inspecting distributional changes.
- Built a forecasting layer by fitting early-life SOH-degradation slopes, recursively converting predicted slopes into future SOH values, and identifying cohorts likely to cross the warranty threshold.
- Partnered with performance-engineering teams to translate the identified drivers into controllable strategy parameters. Simulated the post-intervention driver distribution under candidate thresholds, propagated the cumulative effect through future SOH trajectories, and built a driver-to-strategy effect map across parameter settings and combinations.
- Fitted strategies by cohort and used staged, one-strategy-at-a-time OTA rollout so each intervention could be assessed before combining strategies. Findings also informed cell-design boundary testing.
- Evaluated six-month impact using two complementary counterfactuals: SOH-distribution and trajectory comparisons against PSM-matched control cohorts, and each treated vehicle's observed SOH trajectory against its pre-intervention fitted no-strategy trajectory.
- Fed observed rollout effects back into the warranty-horizon simulation, projecting tens of millions of RMB in avoided warranty costs for one vehicle model. This is a projected impact, not a realised accounting saving.

### Capabilities demonstrated

Causal problem framing; observational-study design; pre-treatment confounder selection; VIF-based multicollinearity checks; PSM; SMD and distributional balance diagnostics; interval-level ATT estimation; dose-response fitting; recursive degradation forecasting; cohort construction; simulation-based strategy mapping; cohort-level strategy fitting; staged OTA experimentation; matched-cohort evaluation; counterfactual trajectory validation; cross-functional decision making; battery domain judgement; R&D and after-sales decision support.

### Safe wording

Use “projecting” or “estimated” for warranty savings and life extension. Refer externally to the “warranty threshold” without disclosing the exact threshold. The identified drivers may be retained in the internal evidence record, but CV wording should use “actionable user-behaviour drivers” unless disclosure is explicitly approved. Do not call the within-vehicle actual-versus-fitted comparison difference-in-differences: it is a model-based counterfactual trajectory comparison. Use PSM-DiD only if both treated and matched-control groups are compared before and after rollout.

## 2. Thermal-runaway risk model and monthly MLOps pipeline

### Verified contribution

- Recognised that 10s of failure cases against 100k--700k normal vehicles made a conventional binary classifier unsuitable, both statistically and operationally.
- Reframed the task as explainable ranking: find vehicles showing patterns most similar to historical failure cases, rather than claim an absolute failure probability.
- Built the pipeline from partitioned raw data, benchmark statistics, and historical TR events through transformation, training eligibility, feature selection, risk scoring, ranking, contribution generation, Gray-dimension calibration, publication, and workbench consumption.
- Used Mann--Whitney feature selection, effect-size and coverage thresholds, correlation clustering, directional rules, weighted contributions, and normal-pool ranking. A score is a relative risk-pattern score, not a calibrated probability.
- For each retained feature, learned a risk direction, rule weight, and normal-population reference distribution. Scoring supports Gaussian-CDF, ECDF, and robust-ECDF mappings: each observed value is converted into a direction-aware tail-risk contribution, clipped where required, then combined through normalised weighted aggregation. The final score is exactly decomposable into feature-level contributions.
- Designed a monthly MLOps workflow with upstream checks, data-quality gates, training, offline validation, batch scoring, publishing, read-back checks, and audit metadata. Each stage records partitions, code/model versions, feature/sample/rule counts, output row counts, and validation state.
- Production delivery includes Docker-packaged components and API access for published results and case-level rescoring. The monthly pipeline monitors downstream performance and automatically incorporates newly confirmed failure cases into subsequent model training, scoring, and risk-list generation.
- Achieved 93% Recall@2% on validation: 93% of observed failures appeared in the top 2% ranked samples.
- Diagnosed cross-platform and feature-normalisation failure modes, including ratio/sum zero-value distortion under z-scoring; introduced median-based quasi-z-score treatment. Identified a remaining unvalidated quantile-projection approach for an X-to-W migration with no W-platform failures.

### Capabilities demonstrated

Rare-event ML; interpretable risk scoring; CDF-based directional scoring; Mann--Whitney feature selection; clustering-based redundancy control; custom cross-platform normalisation; Docker packaging; API design; MLOps pipeline design; automated model refresh; batch deployment; monitoring; reproducibility; auditability; data-quality controls; model debugging; platform adaptation; explainability aligned to business decisions.

### Safe wording

Do not call the score a “thermal-runaway probability.” Say “explainable relative risk score” or “risk ranking.” Do not claim independent time-split generalisation metrics; the current validation is pipeline/replay/published-result consistency plus observed-case ranking performance.

## 3. Department Feature Store

### Verified contribution

- Replaced scattered, notebook-specific features with a department feature store used by the group for condition-analysis work.
- Uses a Git-managed YAML catalogue at VIN-cycle grain, including each feature's window, aggregation, source, code, schema and metadata.
- Applies PySpark transformation from ODS to DM, with event definitions, lag/lead alignment, start--end joins, group-by calculations, time-weighted aggregation, and cross-signal features.
- Supports the lifecycle of feature construction, retrieval, monitoring, modification and review. Model users can pull configured features; mature model features can be materialised to accelerate reading.
- Standardises feature definitions and makes them traceable and reusable, avoiding inconsistent logic across training, scoring and diagnosis. Estimated feature-development time decreased by about 85%.

### Capabilities demonstrated

Feature-store design; feature governance; data contracts; metadata/lineage; PySpark feature engineering; configuration-driven systems; reusable ML infrastructure; training--scoring consistency; team-scale platform design.

### Safe wording

“Department Feature Store” is supported. Avoid claiming an online low-latency feature serving system unless you actually have one; the current system is a batch/offline feature platform with selective materialisation.

## 4. Cloud-deployed Risk Analysis Workbench

### Verified contribution

- Internal users include after-sales and battery teams investigating thermal-runaway and high-risk cases.
- Solves the gap between raw data/model outputs and battery-domain reasoning by enabling cohort comparison, single-vehicle replay, condition distribution analysis, similarity analysis, feature visualisation, historical TR comparison, and model evidence review.
- Designed three separable components: Web for presentation and interaction, API for authentication and data transfer, and asynchronous analysis/worker services for StarRocks-backed retrieval and potentially lengthy data preparation, scoring and replay.
- Uses asynchronous processing to avoid gateway timeouts, prevent duplicate expensive computation, preserve task state, record model/data versions and diagnostics, support retries, and scale to future multi-VIN analysis.
- Uses IDaaS-based access control; credentials are not exposed in the browser and data/result access is constrained by user permissions.
- Developed with AI coding assistance while owning product decomposition, architecture decisions, review, design, deployment, testing, acceptance and fixes. Cloud deployed and actively used internally.

### Capabilities demonstrated

AI-native product delivery; system and product design; analyst workflow design; asynchronous-system reasoning; data-access boundaries; secure internal product thinking; StarRocks/Hive analytical retrieval; cloud deployment coordination; AI-assisted implementation governance.

### Safe wording

Use “designed and AI-assisted-developed” rather than “led full-stack engineering.” This accurately centres your ownership of the problem, product, architecture, validation and delivery decisions.

## 5. NLP work-order automation

### Verified contribution

- Co-defined and corrected a 30+ class taxonomy with after-sales experts.
- Built a hybrid rules, TF-IDF and Random Forest classifier for 50k+ free-text work orders with typos, inconsistent terminology and class imbalance.
- Chose the hybrid approach after BERT was less effective and less compatible with expert knowledge and interpretation.
- Used expert-term F1 evaluation to curate a lexicon; weighted F1 aggregates class-specific performance by class weight.
- Built a human-in-the-loop retraining loop: low-confidence cases go to after-sales review, verified labels return to training, and error cases are jointly diagnosed by business experts and the model owner.
- Replaced roughly 4 hours x 3 people of weekly manual classification work.

### Capabilities demonstrated

Applied NLP; model selection under operational constraints; taxonomy design; expert-in-the-loop ML; active-learning-style feedback loops; error analysis; operational automation; cross-functional collaboration.

## Suggested interview narrative

> At Li Auto, I did not treat models as isolated analyses. I built the chain from domain question and feature infrastructure through interpretable model pipelines, monthly risk outputs, and internal tools that analysts can use to investigate a single vehicle. The most representative example is thermal-runaway risk: given only tens of known failures among hundreds of thousands of vehicles, I deliberately chose an explainable ranking and evidence system over an opaque classifier. That made the output auditable, useful for diagnosis, and deployable as a monthly risk workflow rather than merely producing an offline model metric.
