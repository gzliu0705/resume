# Ocado Logistics & Fulfilment Data Scientist — Interview Q&A

> 基于 Wentworth Liu 的真实经历。重点展示复杂运营数据、预测/排序、数据产品化和可迁移的工程意识；不虚构需求预测、配送时间预测、地理空间建模或完整生产 MLOps ownership。

## 核心叙事 / Core narrative

**CN：** 我在复杂运营系统中做过预测、风险排序与数据产品化工作，使用大规模遥测数据、可复用特征工作流和可解释模型输出支持资源优先级决策。我希望把这套能力迁移到物流与履约场景，并深化需求预测、地理空间建模和生产 ML 工程能力。

**EN:** I have worked on predictive, ranking, and data-product problems in complex operational systems, using high-volume telemetry, reusable feature workflows, and explainable outputs to support prioritised actions. I now want to apply this foundation to logistics and fulfilment while deepening forecasting, geospatial modelling, and production ML engineering.

---

## 8 key questions

### 1. Explain your thermal-runaway risk-ranking project end to end.

**考察 / Tests:** 端到端 DS、运营价值、模型解释。

**框架 / Framework:** business constraint → ranking formulation → outputs → metric → action.

**CN：**

项目面对的是极端类别不平衡和有限检查资源：真正高风险车辆很少，因此业务问题不是单纯提高二分类准确率，而是在只能优先检查少量车辆时，能否把真正高风险对象排在最前面。我将问题建模为可解释风险排序，构建跨电池平台的 ML workflow，输出车辆级风险评分和特征级驱动信息。核心指标是 Recall@2%：只聚焦风险最高的 2% 车辆，能覆盖多少事后验证高风险案例；结果为 93%。价值在于把离线模型输出转化为有限运营资源下的检查优先级，这与履约异常或供应商风险优先处置的逻辑相通。

**EN:**

The project had extreme class imbalance and limited inspection capacity. The business question was not simply maximising binary-classification accuracy, but whether genuinely high-risk vehicles could be ranked near the top when only a small cohort could be reviewed. I built an explainable cross-platform ranking workflow with vehicle-level risk scores and feature-level drivers. The key operating metric was Recall@2%: among the highest-risk 2% of vehicles, how many retrospectively validated high-risk cases were captured? The result was 93%. The value was turning an offline model into an operational prioritisation decision, which is transferable to fulfilment exceptions or supplier-risk triage.

### 2. Why Recall@2% rather than accuracy or AUC? How would you choose metrics at Ocado?

**考察 / Tests:** 模型评估、业务指标、资源约束。

**框架 / Framework:** imbalance → why global metrics are insufficient → operating metric → decision-specific metric.

**CN：**

Accuracy 在极端不平衡中会误导：即使几乎全部预测为低风险，也可能很高。AUC 可作为整体区分能力的辅助指标，但并不直接回答有限检查容量下能覆盖多少真实风险。Recall@2% 将模型效果与资源约束连接起来。对 Ocado，我会先从模型服务的决策反推指标：需求预测可关注 MAE/WAPE、缺货与浪费成本；配送时间可看 MAE、P90 误差和承诺时段准确性；供应商可靠性或异常优先级可看 Precision@K、Recall@K、校准度和实际干预结果。指标必须同时反映统计表现和错误的业务成本。

**EN:**

Accuracy is misleading under extreme imbalance: predicting nearly everything as low risk can still look accurate. AUC is useful as a global discrimination metric, but does not answer how much true risk is covered under limited capacity. Recall@2% connects model performance to that operating constraint. At Ocado, I would choose metrics from the decision: demand forecasting may require MAE/WAPE plus stockout and waste cost; drive-time prediction may require MAE, P90 error, and promised-window accuracy; supplier reliability or exception triage may require Precision@K, Recall@K, calibration, and observed intervention outcomes. Metrics should reflect both statistical performance and business cost of error.

### 3. What did you own in the internal ML-platform workflow? How would you think about monitoring?

**考察 / Tests:** 生产化真实性、MLOps 意识、边界感。

**框架 / Framework:** direct ownership → reusable system → impact → explicit boundary → monitoring concepts.

**CN：**

我直接负责的重点是配置化、可复用的特征工作流：自定义事件定义、多算子聚合和跨平台归一化，使不同电池平台和任务能复用特征逻辑；相关 workflow 部署到内部 ML 平台，特征迭代效率提升约 85%。我会明确区分这与完整 production MLOps ownership 的差别：我不会无依据地声称独立负责高可用 serving、on-call 或全自动 retraining。对生产模型，我认为至少需要监控输入新鲜度/完整性/schema、特征和预测漂移、延迟标签上的模型表现、业务结果及版本可追溯性，并准备告警、fallback 或 rollback。

**EN:**

My direct ownership focused on configurable, reusable feature workflows: custom event definitions, multi-operator aggregations, and cross-platform normalisation, allowing feature logic to be reused across platforms and tasks. The workflows were deployed to an internal ML platform and improved feature-iteration efficiency by about 85%. I distinguish this from complete production-MLOps ownership; I would not claim sole ownership of high-availability serving, on-call support, or automated retraining without evidence. For production models, I would monitor input freshness/completeness/schema, feature and prediction drift, performance once delayed labels arrive, business outcomes, and traceable versions, with alerts, fallback, or rollback.

### 4. Without direct logistics experience, how would you approach demand forecasting, drive-time prediction, or supplier reliability?

**考察 / Tests:** 学习能力、行业认知、问题定义。

**框架 / Framework:** acknowledge gap → define decision point → validate data → baseline → iterate.

**CN：**

我不会假装已经做过这些生产项目。首先会与产品、运营、数据工程和软件工程梳理决策点：预测在何时使用、影响什么动作、错误的成本是什么。然后明确预测对象、预测窗口、标签、预测时点可用的特征和数据延迟。接着先做数据质量与时间对齐检查，建立透明 baseline，确认离线指标与业务目标一致后，再测试更复杂的时间序列、深度学习或地理空间方法。Li Auto 和 ByteDance 的经历证明我能在复杂数据系统中建立指标、发现质量问题、分层诊断并形成优先级；我需要补充的是物流领域的具体知识。

**EN:**

I would not pretend to have already built these production use cases. I would first map the decision point with product, operations, data engineering, and software engineering: when the prediction is used, which action it affects, and what errors cost. I would define the prediction object, horizon, label, features available at prediction time, and data delay. Next I would validate quality and temporal alignment, build a transparent baseline, and only then test more complex time-series, deep-learning, or geospatial methods once metrics align with business objectives. My Li Auto and ByteDance work shows I can establish metrics, detect quality issues, diagnose by segment, and form priorities in complex data systems; the gap I need to close is logistics-specific knowledge.

### 5. A production demand-forecast model suddenly deteriorates. What do you do?

**考察 / Tests:** 生产排障、时间序列、监控。

**框架 / Framework:** validate issue → slice error → check drift/events → compare baseline → mitigate.

**CN：**

先确认是否真的退化：检查标签延迟、数据管道、特征口径和监控报表。确认后，按时间、商品、区域、履约节点、促销状态和预测窗口切分误差，找出退化集中位置；比较训练期与当前的输入、特征、预测和残差分布，检查 drift。再结合价格、促销、节假日、断货、供应中断或商品替换等运营事件，并与简单 baseline 或旧版本比较。应对方式可包括局部回退、对异常分组使用 baseline/规则、补充特征、缩短重训周期或重新分层。我没有生产需求预测维护经验，但这是我会采用的排查框架。

**EN:**

First validate that deterioration is real by checking label delay, pipelines, feature definitions, and monitoring calculations. Then slice error by time, product, region, fulfilment node, promotion state, and forecast horizon; compare current inputs, features, predictions, and residuals with the training period for drift. I would also assess operational events such as pricing changes, promotions, holidays, stockouts, supply disruption, or substitutions, and compare with a simple baseline or previous version. Responses may include a local rollback, baseline or rule-based fallback for affected slices, feature improvements, shorter retraining cycles, or revised segmentation. I have not maintained a production demand forecast, but this is the framework I would use.

### 6. Give a real example of managing unstable multi-source data.

**考察 / Tests:** 数据质量、工程严谨性、真实案例。

**框架 / Framework:** ByteDance context → risk → controls → transferable lesson.

**CN：**

在 ByteDance 的 IP 热度度量项目中，我整合了多个平台的消费、传播和搜索信号。不同来源有不同刷新节奏、完整性和波动模式，若不先验证稳定性，指标变化可能被错误解释为内容或用户行为变化。我先明确指标粒度、时间窗口、来源和聚合逻辑，并加入自动化监控，关注记录量、延迟、缺失和异常波动。对 Ocado，同样需要先验证订单、库存、仓内、供应商和配送系统的事件时间、状态定义、延迟和对账关系，再让模型或运营团队使用数据。

**EN:**

At ByteDance, I worked on an IP-popularity system combining consumption, dissemination, and search signals from multiple platforms. Sources had different refresh cadences, completeness, and fluctuation patterns, so a metric movement could be mistakenly interpreted as a content or user-behaviour change. I clarified metric grain, time window, sources, and aggregation logic, then added automated monitoring for volume, latency, missingness, and unusual movements. At Ocado, the same discipline is needed before using order, inventory, warehouse, supplier, and delivery data: validate event time, status definitions, latency, and reconciliation across systems.

### 7. How would you work with software engineers, data engineers, and product managers to make a model reliable?

**考察 / Tests:** 跨职能协作、软实力、工程交付意识。

**框架 / Framework:** decision → data contract → interface/failure modes → delivery discipline.

**CN：**

我会把模型看作端到端产品能力。先与产品和运营对齐模型服务的决策、使用者、成功指标、错误成本和流程变化；与数据工程确认数据契约，包括粒度、刷新频率、事件时间、字段定义、质量检查和特征可用性；与软件工程明确输入输出接口、批/实时方式、延迟要求、异常与 fallback。交付过程中使用版本控制、代码评审、测试、文档和可复现配置降低维护风险。我的真实基础包括可配置特征 workflow、内部 ML 平台和多源监控；我会在 Ocado 的工程规范下将 Git、Docker、CI/CD、GCP、Spark 和 PyTorch 技能深化为可靠的生产实践。

**EN:**

I view a model as an end-to-end product capability. I would align with product and operations on the decision, users, success metric, error cost, and workflow change; with data engineering on the data contract—grain, refresh cadence, event time, definitions, quality checks, and feature availability; and with software engineering on interfaces, batch versus real-time mode, latency, failure cases, and fallback. I would use version control, code review, testing, documentation, and reproducible configurations to reduce maintenance risk. My direct foundation includes configurable feature workflows, an internal ML platform, and multi-source monitoring; within Ocado’s engineering standards, I would deepen my Git, Docker, CI/CD, GCP, Spark, and PyTorch skills into reliable production practice.

### 8. Why Ocado logistics and fulfilment ML after battery intelligence and internet analytics?

**考察 / Tests:** 动机、行业认知、职业叙事。

**框架 / Framework:** continuous problem type → connection to Ocado → honest growth area.

**CN：**

我想延续的是复杂、高影响运营系统中的数据科学，而不是简单换行业。Li Auto 的车队遥测项目让我做预测、排序、特征系统和决策支持；ByteDance 让我做多源度量、监控、分层分析和资源配置。我最有兴趣的是模型能真实影响效率和用户体验的工作。Ocado 的需求预测、配送时间和供应商可靠性直接影响履约效率、客户体验与合作伙伴收入；其机器人、AI、IoT 与真实物流运营的结合，也与我的材料计算和 EV 复杂系统背景自然衔接。我希望用已有基础进入该领域，并系统补齐零售履约、空间预测和生产 ML 工程能力。

**EN:**

I want to continue data science in complex, high-impact operational systems rather than simply switch industries. Li Auto gave me experience in prediction, ranking, feature systems, and decision support on fleet telemetry; ByteDance gave me multi-source measurement, monitoring, segmentation, and resource allocation. I am most interested in work where models genuinely affect efficiency and user experience. At Ocado, demand forecasting, drive-time prediction, and supplier reliability directly affect fulfilment, customers, and partner revenue. Its combination of robotics, AI, IoT, and logistics also connects naturally to my computational-materials and complex EV-system background. I want to enter the field with my current strengths and systematically deepen retail fulfilment, spatial prediction, and production ML engineering.

---

## 12 follow-up / deep-dive questions

### 9. You list GCP, Docker, CI/CD, Git, Spark, and PyTorch. What have you used each for?

**Framework / 答法：** 按真实场景逐项说明：生产、工作辅助、个人项目、研究或学习。明确具体操作与熟练度。不要将学习经历说成 production ownership。

**Safe answer / 安全句式：**

> I distinguish working knowledge from production ownership. My experience with [tool] is [real context]; I am comfortable with [specific tasks], and I would learn the team’s production conventions for [advanced scope].

> 我会区分实际可用能力和生产环境独立负责经验。[工具] 我主要在【真实场景】中使用，能够完成【具体任务】；涉及【高级生产能力】时，我会遵循团队规范并继续补足。

### 10. How would you define a baseline for drive-time prediction?

**CN：** 先定对象和时点：单次配送/路线/订单，以及下单、出库或司机出发时预测。明确标签是纯行驶、出库到到门，还是全链路时长。先建立按区域、时段和历史路线表现的统计或简单回归 baseline，再测试距离、时段、订单密度、路线、历史拥堵、天气等特征。除 MAE 外看 P90 误差与承诺时段准确性，并考虑 ETA 高估/低估的不同业务成本。

**EN:** Define the object and timestamp first: delivery, route, or order; at order placement, dispatch, or driver departure. Define whether the label is driving time, dispatch-to-door time, or end-to-end duration. Start with grouped historical statistics or simple regression by region, time, and route history, then test distance, time, order density, route, congestion, and weather. Beyond MAE, assess P90 error and promised-window accuracy, including different costs of over- and under-estimating ETA.

### 11. When is a model good enough to replace a rule or manual process?

**CN：** 不只看离线指标。与现有规则/人工流程比较总体与关键分层效果、错误类型和错误成本；用 shadow mode 或灰度验证上线后的运营结果；保留 fallback 和人工兜底。只有业务收益超过工程、维护和风险成本时才替换。

**EN:** Do not rely only on offline metrics. Compare with the current rule/manual process overall and in critical slices, including error type and cost; validate in shadow mode or controlled rollout; retain fallback and human safeguards. Replace only when business benefit exceeds engineering, maintenance, and risk cost.

### 12. Why did you use rules + TF-IDF + Random Forest for work-order classification?

**CN：** 有些故障类别存在稳定文本规则，规则快速且可解释；其他案例表达多样，需要 TF-IDF 与 Random Forest 进行统计分类。混合方案平衡可解释性、速度、维护成本和效果，在 30+ 类别上达到 Weighted F1 > 0.90，并通过置信度路由让人工审核聚焦模糊样本。

**EN:** Some fault classes had stable text patterns, so rules were fast and interpretable; other cases had varied language, so TF-IDF and Random Forest provided statistical classification. The hybrid balanced interpretability, speed, maintenance cost, and performance, achieving Weighted F1 > 0.90 across 30+ classes and routing ambiguous samples to human review by confidence.

### 13. How do you prevent leakage in time-series or operational prediction?

**CN：** 严格定义 prediction timestamp；特征只能使用当时真实可得信息；按时间切分 train/validation/test；聚合、编码和归一化统计量只基于训练期或历史窗口；确认数据表中存在的字段是否在实际预测时已生成。

**EN:** Define the prediction timestamp strictly; use only information genuinely available then; split train/validation/test by time; compute aggregations, encodings, and normalisation using only training or historical windows; verify that fields present in the final table truly exist at inference time.

### 14. What if overall model performance is good but critical suppliers, regions, or products perform badly?

**CN：** 做 slice analysis，不只看平均值；检查数据稀疏、标签质量、特征缺失、业务机制差异和异常事件；可加入分组特征、调整权重、使用分层模型/分组阈值，或对关键低样本场景采用规则与人工兜底。目标是业务关键对象可靠，而不仅总体指标漂亮。

**EN:** Run slice analysis rather than relying on averages; investigate sparsity, label quality, missing features, different mechanisms, and exceptional events. Add group features, adjust weighting, use hierarchical models or group thresholds, or apply rules and human safeguards for critical low-volume slices. Aim for reliability on business-critical entities, not only a good overall score.

### 15. How does your Li Auto feature system compare with a feature store?

**CN：** feature store 的目标是让特征可发现、复用、治理，并保持训练/推理一致；成熟系统还会有版本、在线/离线一致、元数据、权限、质量和 serving。Li Auto 系统是配置化可复用特征 workflow，包含自定义事件、多算子聚合和跨平台归一化；它相似于统一逻辑和加快迭代，但我不会无依据称其为完整 feature store。

**EN:** A feature store makes features discoverable, reusable, and governed, ideally with train-inference consistency; mature systems also include versioning, online/offline consistency, metadata, permissions, quality controls, and serving. The Li Auto system was a configurable reusable workflow with custom events, multi-operator aggregations, and cross-platform normalisation. It is similar in unifying logic and accelerating iteration, but I would not label it a full feature store without the mature capabilities above.

### 16. What should happen if input data is delayed or partly missing?

**CN：** 检测 freshness、完整性、schema 与异常值；按严重程度告警、标记可靠性、延迟预测、使用最后有效值/简单 baseline/规则 fallback，或停止不可信输出。记录质量状态、影响范围和版本，防止下游将低质量预测当正常结果。

**EN:** Detect freshness, completeness, schema changes, and anomalies; depending on severity, alert, flag reliability, delay prediction, use last valid values/simple baseline/rule fallback, or stop untrustworthy output. Record quality state, impact scope, and version so downstream users do not treat poor-quality predictions as normal.

### 17. How would you design a testable ML pipeline?

**CN：** 五层：数据 schema/空值/范围/时间完整性；特征聚合与边界/泄漏单测；训练推理转换一致性；模型性能回归、输出范围和 artifact 兼容性；端到端和 fallback 测试。用 Git、review、CI/CD、Docker 规范变更和环境。

**EN:** Five layers: data schema/null/range/temporal checks; feature aggregation, edge-case, and leakage unit tests; train-inference transform consistency; model performance regression, output-range, and artifact compatibility checks; end-to-end and fallback testing. Use Git, review, CI/CD, and Docker to standardise change and environment.

### 18. How would you explain model degradation or uncertainty to non-technical stakeholders?

**CN：** 先讲业务影响：例如某区域/商品预测误差变大，交付承诺或库存决策可靠性下降；再讲范围、可能原因、当前风险和建议动作。把不确定性解释为哪些预测可靠、哪些应保守处理，并转化成运行优先级。

**EN:** Start with business impact: for example, error has increased for certain regions/products, reducing confidence in delivery promises or inventory decisions. Then explain scope, likely cause, risk, and recommended action. Explain uncertainty as which predictions are reliable and which need conservative handling, turning it into operational priorities.

### 19. Is a more complex model worth the additional engineering cost?

**CN：** 先看改进是否稳定且在关键分层成立，再转换为缺货、浪费、人工处理、ETA 或资源利用等业务增益；同时评估计算、延迟、数据依赖、可解释性、维护、失败和扩展风险。简单 baseline 若已获得大部分价值，应优先保持简单。

**EN:** Check whether improvement is stable and holds in key slices, then translate it into business value—stockouts, waste, manual effort, ETA quality, or resource use. Also assess compute, latency, dependencies, interpretability, maintenance, failure, and scale risk. If a simple baseline captures most value, prefer simplicity.

### 20. How do you keep up with ML research without using complexity for its own sake?

**CN：** 科研背景帮助我阅读论文、理解假设和验证方法，但新方法必须先匹配问题与数据约束，再通过 baseline、离线实验和成本收益评估证明在性能、稳定性、维护性或业务价值上有实质增益。学习是扩展工具箱，不替代工程判断。

**EN:** My research background helps me read papers, understand assumptions, and validate methods, but a new method must first fit the problem and data constraints, then show material value through baselines, offline experiments, and cost-benefit assessment in performance, stability, maintainability, or business impact. Learning expands the toolkit; it does not replace engineering judgement.

---

## 必须守住的边界 / Non-negotiable boundaries

1. **Skills are not automatically production ownership.** 被问 GCP、Docker、CI/CD、Git、Spark、PyTorch 时，按真实的工作、项目、研究或学习背景说明。
2. **Internal ML platform is not automatically full MLOps.** 可以说 `I deployed reusable workflows to an internal ML platform`; 不要无依据声称 owning serving, high availability, on-call, or automated retraining。
3. **Logistics questions: give a strong framework, not a fictional project.**

> I have not yet built a demand-forecasting or drive-time model in production. However, I would begin by defining the decision point, prediction horizon, business cost of error, available-at-prediction-time features, and a strong baseline before moving to more complex architectures.

> 我目前还没有在生产环境中完成需求预测或配送时间模型；但我会先定义决策点、预测窗口、错误业务成本、预测时点可用特征，并建立可靠 baseline，再评估更复杂的架构。

4. **Always return technical answers to operational value.**

> This allows operations to focus limited capacity on the cases where intervention is most valuable.

> 这使运营团队能够将有限能力优先投入最值得干预的对象。
