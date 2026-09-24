# WENTWORTH LIU

Relocating to London | Authorised to work in the UK
gzliu0705@gmail.com | linkedin.com/in/wentworth-liu-4a4a02413

Data Scientist | User Behaviour | Targeting & Prioritisation | Statistical & Predictive Modelling | Decision Science

## SUMMARY

Data Scientist with 2+ years of experience turning large-scale behavioural data into targeting, prioritisation, and intervention decisions that improve user experience and deliver business impact. Owns solutions across the full model lifecycle, from problem framing and feature engineering through explainable modelling and production deployment to monitoring model performance and iteration. At Li Auto and ByteDance, partnered with engineering, quality, after-sales, and marketing teams to translate predictive-model outputs into actionable decisions.

## EXPERIENCE

### Li Auto | Data Scientist, Battery Intelligence Department

Jul 2024 - Present

- **Behavioural Risk Scoring & MLOps.** Built from the ground up an explainable thermal-runaway targeting system using 1.5k+ user vehicle-behaviour features under approximately 1:40,000 class imbalance. Applied Mann-Whitney U screening, clustering-based redundancy control, custom normalisation, and CDF-based directional scoring. Captured 93% of historical cases within the top-ranked 2% of vehicles, narrowing investigation and replacement candidates from tens of thousands to thousands. Productionised the solution as a Docker-packaged monthly batch pipeline with API delivery, automated validation, performance monitoring, and case-driven model refresh.

- **Causal Inference & Cohort-targeted Longevity Strategy.** Built a decision system to identify causal user-behaviour drivers of battery degradation and deploy cohort-specific interventions. Applied domain-led confounder and multicollinearity control, propensity-score matching with balance diagnostics, and ATT and dose-response estimation. Identified warranty-risk cohorts by fitting early-life battery state-of-health (SOH) degradation slopes and recursively projecting future trajectories. Partnered with performance-engineering teams to map drivers to strategies, simulate cohort-level effects, and launch over-the-air (OTA) interventions. Six-month evaluation using matched-cohort comparisons and within-vehicle counterfactual trajectories projected tens of millions of RMB in avoided warranty costs for one vehicle model.

- **User Behaviour Profiling Feature Store.** Designed and built a department-wide offline Feature Store covering 1.5k+ user-behaviour features at vehicle-cycle level. Developed schema-driven PySpark ETL pipelines and internal APIs for validated ingestion, reusable storage, historical backfills, monitoring, and model-ready export. Enabled the full team to maintain feature definitions through Git and reproduce the same features across analysis, model training, and batch scoring, reducing duplicated computation and storage while cutting feature-development time by approximately 85%.

- **Risk Intelligence & Investigation Platform.** Designed and launched a cloud-based product that enabled battery, quality, and after-sales teams to query fleet risk, evaluate model-selected cohorts, and investigate individual high-risk vehicles. Combined risk rankings with cohort benchmarks, vehicle-level replay, behavioural explanations, similarity analysis, and historical-failure evidence. Used Codex-assisted development to deliver a secure Web/API workflow with asynchronous analysis, governed access, and versioned results for reproducible fleet-scale investigation.

- **Automated Work-order Classification.** Built a human-in-the-loop NLP system to replace routine manual classification of 50k+ noisy after-sales work orders across 30+ categories. Partnered with quality teams to standardise labels, construct a domain lexicon using TF-IDF and keyword-level F1 evaluation, and train a tree-based classifier. Routed low-confidence cases for review and fed verified labels into weekly retraining. Automated over 93% of labelled samples, raising accuracy from 83% to 96% within three months and achieving weighted F1 above 0.90.

### ByteDance | Data Analytics Intern, Douyin Market Strategy

May 2023 - Sep 2023

- **Fanqie IP Popularity Model & Dashboard.** Built a daily measurement product to monitor leading Fanqie IPs, identify organic momentum, benchmark market position, and evaluate creator and marketing campaigns. Developed automated ETL pipelines across internal and external sources, combining PCA-derived statistical weights with cross-functionally agreed AHP weights into a comparable popularity score, then cloud-deployed the scoring pipeline and dashboard. Reached approximately 60% internal adoption and informed a key IP campaign that delivered approximately 40% higher downloads than the previous strategy.

- **Qishui Music Audience Saturation & Acquisition Targeting.** Diagnosed a decline in activation-to-registration conversion and distinguished high-engagement audiences from those with genuine incremental-user potential. Analysed cross-product audience overlap and Qishui installation penetration to measure creator-level saturation, then built a rule-based targeting matrix combining acquisition volume, registration conversion, and existing-user penetration. The marketing team adopted the resulting strategy, materially reducing routine investment in content verticals whose audiences had already become saturated.

### Dongwu Securities | Equity Research Intern, Mechanical Sector

Dec 2021 - Mar 2022

- Combined company fundamentals, competitive positioning, operating performance, and market conditions with quantitative stock-price modelling to produce short-, medium-, and long-term investment recommendations for Harmonic Drive Systems.

## EDUCATION

### Nanjing University | MSc Computational Materials Science

Sep 2021 - Jun 2024

- Developed Skeaf, a 3D Fermi-surface analysis and visualisation tool combining numerical computation, HDBSCAN clustering, and quantum-oscillation data; first author, *Physical Review B* (2024), with two further co-authored publications and Patent CN115795266A.

### Nanjing University | BSc Materials Science & Engineering

Sep 2017 - Jul 2021

- Outstanding Graduate; GPA 4.6/5.0; top 1% of cohort; National Scholarship (top 0.15%); MCM/ICM Honorable Mention as team captain.

## SKILLS

- **Programming & Data:** Python | SQL / HiveSQL | PySpark | Git | Docker | Linux | Hadoop
- **Statistical & Machine Learning:** Statistical Modelling | Predictive Modelling | Causal Inference | Propensity Score Matching | Treatment-effect Estimation | User Segmentation | Risk Ranking | Feature Engineering | NLP | Random Forest | LightGBM | scikit-learn
- **ML Delivery:** End-to-end ML Lifecycle | Batch ML Pipelines | API Deployment | Data and Model Validation | Model Monitoring | Explainability | Feature Store | Versioning and Reproducibility
- **Product & Decision Science:** Behavioural Measurement | Targeting & Prioritisation | Funnel Analysis | Cohort Analysis | Resource Allocation | Stakeholder Communication
- **Languages:** English (TOEFL 104) | Mandarin and Cantonese (Native) | Japanese (JLPT N1)
