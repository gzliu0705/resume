# WENTWORTH LIU

Beijing, China | Open to relocate to London | Authorised to work in the UK without sponsorship
gzliu0705@gmail.com | linkedin.com/in/guanzhang-liu-4a4a02413

**DATA SCIENTIST**
User Behaviour | Targeting & Prioritisation | Statistical Modelling | Decision Science

## SUMMARY

Data Scientist with 2+ years of experience owning machine learning and decision-science work from problem definition through production use. Built behavioural measurement systems, explainable ranking models, causal studies, reusable feature infrastructure, and analyst-facing products using Python, SQL, PySpark, and fleet-scale data. At Li Auto, translated driving and charging behaviour into safety, longevity, and after-sales decisions; at ByteDance, analysed consumer journeys, content demand, conversion, and audience saturation to guide targeting and marketing investment.

## EXPERIENCE

### Li Auto | Data Scientist, Battery Intelligence Department

Beijing, China | Jul 2024 - Present

- **0-1 Behavioural Risk Scoring & MLOps.** Owned the end-to-end development of a thermal-runaway targeting system built on a 1.5k+ user vehicle-behaviour feature framework under approximately 1:40,000 class imbalance. Developed an explainable relative-risk model using Mann-Whitney U testing, clustering-based redundancy control, custom cross-platform normalisation, and CDF-based directional risk scoring. Achieved 93% Recall@2%, narrowing the investigation and replacement candidate pool from tens of thousands of vehicles to thousands and substantially reducing unnecessary battery-replacement costs. Productionised the solution as a Docker-packaged monthly batch pipeline on Li Auto's internal ML platform, with API-based result consumption, automated data and model validation, performance monitoring, and a model-refresh mechanism that automatically incorporates newly confirmed failure cases into subsequent training, scoring, and risk-list generation.

- **Causal Inference & Simulation-optimised Longevity Strategy.** Built an end-to-end system to identify causal user-behaviour drivers of battery degradation and deploy cohort-specific OTA interventions. Applied domain-led confounder control, VIF screening, continuous-treatment segmentation, propensity-score matching with balance diagnostics, and interval-level ATT and dose-response estimation to isolate actionable drivers. Identified warranty-risk cohorts by fitting early-life SOH degradation slopes and recursively converting predicted slopes into future SOH trajectories. Partnered with performance-engineering teams to build a driver-to-strategy map, simulate and fit intervention effects across cohorts, and launch targeted OTA strategies. Evaluated six-month impact through propensity-matched cohort comparisons and within-vehicle actual-versus-counterfactual SOH trajectories, then projected tens of millions of RMB in avoided warranty costs for one vehicle model.

- **User Behaviour Profiling Feature Store.** Designed and built a department-wide offline Feature Store covering 1.5k+ user-behaviour features at vehicle-cycle level. Built schema-driven PySpark ETL pipelines and internal APIs to take raw fleet data through validated ingestion, reusable storage, historical backfills, monitoring, and model-ready export. Enabled the full team to maintain and iterate feature definitions through Git, making changes traceable and ensuring the same features could be reproduced across analysis, model training, and batch scoring. Reduced duplicated computation and storage while cutting feature-development time by approximately 85%.

- **Risk Intelligence & Investigation Platform.** Designed and launched a cloud-based internal platform for battery, quality, and after-sales teams to query fleet risk, evaluate model-selected cohorts, and investigate individual high-risk vehicles. Unified risk rankings with cohort benchmarking, vehicle-level replay, behavioural-driver explanations, similarity analysis, and historical-failure evidence, helping users move from a model score to an investigation decision. Owned the Codex-assisted end-to-end system design and delivery, implementing a StarRocks-backed Web/API/asynchronous-worker architecture with governed IDaaS access, retryable analysis tasks, and versioned results for secure, reproducible investigation at fleet scale.

- **Automated Work-order Classification.** Built a human-in-the-loop NLP system to replace routine manual classification of 50k+ noisy after-sales work orders across 30+ categories. Partnered with quality teams to standardise labels, build a domain lexicon through TF-IDF and keyword-level F1 evaluation, and train a tree-based classifier. Automatically routed low-confidence cases for review, exposed keyword scores and linked samples through an online dashboard, and fed verified labels into weekly retraining. Automated over 93% of labelled samples, raising accuracy from 83% to 96% within three months and achieving Weighted F1 above 0.90.

### ByteDance | Data Analytics Intern, Douyin Market Strategy

Beijing, China | May 2023 - Sep 2023

- **Fanqie IP Popularity Model & Dashboard.** Built a daily measurement product to monitor and grow leading Fanqie IPs, identify organic momentum, benchmark market position, and evaluate creator and marketing campaigns. Developed automated ETL pipelines across internal and external sources, combining PCA-derived statistical weights with cross-functionally agreed AHP weights into a comparable popularity score, then cloud-deployed the scoring pipeline and dashboard. Reached approximately 60% internal adoption and informed resource allocation for a key IP campaign that delivered approximately 40% higher downloads than the previous strategy.

- **Qishui Music Audience Saturation & Acquisition Targeting.** Diagnosed a decline in activation-to-registration conversion and distinguished high-engagement audiences from those with genuine headroom for incremental-user acquisition. Linked creator audiences with Qishui installation status to measure cross-product audience saturation, then built a rule-based targeting matrix combining acquisition volume, registration conversion, and existing-user penetration to classify creators and content verticals by incremental potential. The resulting strategy was adopted by the marketing team, materially reducing routine investment in content verticals whose audiences had already become saturated.

### Dongwu Securities | Equity Research Intern, Mechanical Sector

China | Dec 2021 - Mar 2022

- Combined company fundamentals, competitive positioning, operating performance, and market conditions with quantitative stock-price modelling to produce short-, medium-, and long-term investment recommendations for Harmonic Drive Systems.

## EDUCATION

### Nanjing University | MSc Computational Materials Science

Sep 2021 - Jun 2024

- Developed Skeaf, a 3D Fermi-surface analysis and visualisation tool combining numerical computation, HDBSCAN clustering, and quantum-oscillation data; first author, *Physical Review B* (2024), with two further co-authored publications and Patent CN115795266A.

### Nanjing University | BSc Materials Science & Engineering

Sep 2017 - Jul 2021

- Outstanding Graduate; GPA 4.6/5.0; top 1% of cohort; National Scholarship (top 0.15%); MCM/ICM Honorable Mention as team captain.

## SKILLS

- **Programming & Data:** Python | SQL / HiveSQL | PySpark | Git | Linux | Hadoop
- **Statistical & Machine Learning:** Statistical Modelling | Causal Inference | Propensity Score Matching | Treatment-effect Estimation | User Segmentation | Risk Ranking | Feature Engineering | NLP | Random Forest | LightGBM | scikit-learn
- **ML Delivery:** Batch ML Pipelines | Model Evaluation | Data-quality Gates | Model Monitoring | Explainability | Feature Store | Metadata & Lineage | Versioning | Auditability
- **Product & Decision Science:** Behavioural Measurement | Targeting & Prioritisation | Funnel Analysis | Cohort Analysis | Content Measurement | Resource Allocation | Stakeholder Communication
- **Languages:** English (TOEFL 104) | Mandarin and Cantonese (Native) | Japanese (JLPT N1)

## FACTS TO CONFIRM BEFORE FINALISING

- Confirm whether any public-safe Qishui conversion uplift, acquisition-volume, CAC, or ROI result is available; the current draft claims only the confirmed investment change.
- Confirm whether the approximately 1:40,000 class-imbalance ratio is suitable for external use; remove it if confidentiality requires only qualitative wording.
