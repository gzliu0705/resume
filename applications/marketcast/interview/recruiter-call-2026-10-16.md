# MarketCast / SearchTribes — 猎头初聊备忘

**安排：**2026-10-16（周五）17:45；这是根据本人 2026-10-15 所说“明天 17:45”记录的。**时区、会议链接／电话、预计时长待核实。**目前确认的是与猎头约谈，不是 MarketCast 面试。  
**依据：**[猎头 JD 原 PDF](../role/DS%20I%20DSaaS.pdf)、[当前一页简历源文件](../source/WentworthLiu_MarketCast_Data_Scientist.tex)、[项目证据索引](../../../evidence/README.md)。以下公司和岗位描述仅依据猎头 JD，未独立验证；回答个人经历按已记录的本人陈述，不添加调查／电视数据、AWS、Streamlit、外部客户交付或带教经历。

## 会前 5 分钟：准备好这些答案

- 目前居住城市、能否在 Reading / London 每周到岗 3 天、可能的搬迁安排：**本人填写真实情况**，不从英国工作资格推断现在住在英国。
- 可开始日期／合同通知期：**本人填写**，别临场编数字。
- 薪资预期：JD 写最高约 **£55k + benefits**；想清楚自己的目标和底线，先核实薪资构成与岗位级别，不把上限当保底。
- 工作资格：本人已确认 **right to work in the UK without sponsorship**；签证类别与有效期只在能核对本人证件后说明，不引用旧面试稿中的日期。
- 确认实际发送的简历文件／渠道、猎头是否已将资料转交 MarketCast；档案中同内容的 PDF 文件名不能证明实际邮件附件名。

## 30 秒介绍（先练熟这段）

> I'm Wentworth, a Data Scientist at Li Auto. I build ML and data workflows that help engineering and business teams make decisions, from feature engineering and model evaluation to monitored delivery. Before that, at ByteDance I built a multi-source measurement model to support marketing promotion decisions. This role caught my attention because it combines applied modelling, varied data and decision-focused work.

**如果只问“为什么感兴趣”：**

> I enjoyed seeing marketing teams use the measurement work I built at ByteDance. I'd like to bring that decision-focused approach, together with my modelling and pipeline experience at Li Auto, to the broader range of data and questions described in this role.

不要把 ByteDance 的营销**内容/IP 推广**说成已做过广告效果增量实验；JD 的调查、电视收视、刷卡数据是目标岗位的数据源，不是个人既有经历。

## 两个可讲的项目（每个 40–60 秒；被追问再展开）

### 1. ByteDance：多源营销测量（优先讲）

> At ByteDance, the marketing team needed a more consistent way to decide which content to continue promoting. I combined consumption, dissemination and search signals into a daily IP popularity model, with automated ETL and data-quality checks. The dashboard reached about 60% adoption among its target internal users and helped the team compare IPs and adjust promotion priorities. What I learned was that data definitions and measurement quality matter as much as the model if people are going to use the result.

**若追问简历的 40%：**业务复盘显示调整推广方向后，团队负责推广视频的**锚点链路 App 下载合计**较此前一个月约高 40%；这是观察性前后对比，不是模型独立造成的增量，更不是全 App 下载增长。不要自称负责投放决策或掌握未经核实的预算／归因日志。

### 2. Li Auto：分类 / 交付能力（备选）

> At Li Auto, I worked on classifying noisy after-sales work orders. I combined domain-informed text features with a Random Forest, added confidence-based routing so uncertain cases went to expert review, and retrained using verified labels. This turned modelling into a workflow people could actually use. I also built reusable data features and monitored scoring pipelines, which is relevant to the role's emphasis on reliable ML delivery.

**若聊罕见事件模型：**另可讲风险**排序**：已评估案例的 93% 位于评分前 2% 的车辆中，评分不是校准后的事故概率。**若聊特征库 85%：**只指特征开发时间缩短约 85%。**若聊寿命策略：**“数千万元人民币”是单一车型的质保避免额**预测**，非已实现节省。

## 常见筛选问题：短句回答

| 可能问题 | 建议回答 / 边界 |
| --- | --- |
| Why are you looking? | “I value the end-to-end work at Li Auto, and I'm looking to apply it to a broader range of business questions. My ByteDance experience made the marketing-measurement side of this role especially interesting.” 不抱怨现雇主。 |
| Have you worked with surveys / TV / card data? | “Not directly. I have integrated differently defined consumption, dissemination and search signals for marketing decisions, and I'd be keen to learn the survey and media datasets here.” |
| AWS / Streamlit / client-facing experience? | “I haven't used those specific tools in the work described on my CV. My closest experience is building cloud-deployed analytics, dashboards and pipelines, and presenting results to internal cross-functional teams.” 如本人另有可证实实践，再按真实情况补充。 |
| Can you lead projects / mentor people? | “I've owned modelling and data-product work end to end and collaborated with several internal teams. I'd want to understand the scope of client ownership and mentoring in this role.” 不把跨团队协作说成已独立交付外部客户项目或管理下属。 |
| UK work rights / location / start? | “I have the right to work in the UK without sponsorship. I'm currently based in **[真实城市]**, and my realistic start date would be **[按通知期和搬迁安排填写]**.” 不承诺未经确认的三天到岗安排。 |
| Salary expectations? | “I saw the JD mentions up to £55k. Could you confirm the base-salary range and overall package for this level? I'd like to understand the responsibilities and location before giving a precise figure.” 若对方坚持要数字，按自己事先确定的目标范围回答。 |

## 反问猎头：优先挑 3–4 个

1. **“Has my CV already been shared with MarketCast, and have they given any initial feedback?”** 核对当前是猎头筛选还是已进入雇主流程。
2. **“What would this person own in the first few months: client scoping, modelling, reporting, or pipeline work?”** 核对 Data Scientist I 职级与独立带项目预期。
3. **“Is the three-day office requirement based in Reading, London, or either location?”** 同时问可否在搬迁阶段灵活安排。
4. **“What is the budgeted base-salary range and are there bonus or other benefits?”** JD 只有上限。
5. **“What are the next interview stages, who will I meet, and is there a technical exercise?”** 提前准备后续流程。

**结束语：**“Thanks, this has been really helpful. The mix of measurement and applied ML sounds interesting. What would be the next step, and when should I expect to hear back?”

## 会后立即补记

面试官姓名／机构、会议时间及时区、已转交 MarketCast 与否、地点／到岗条件、薪资结构、工作许可沟通情况、下一轮内容与预计回复时间；这些是**会后才可确认**的事实。不要把本备忘里的问题或示范答案当成实际通话记录。
