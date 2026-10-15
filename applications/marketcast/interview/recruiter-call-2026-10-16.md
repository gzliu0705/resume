# MarketCast / SearchTribes — 猎头初聊备忘

**安排：**2026-10-16（周五）17:45；这是根据本人 2026-10-15 所说“明天 17:45”记录的。**时区、会议链接／电话、预计时长待核实。**目前确认的是与猎头约谈，不是 MarketCast 面试。  
**依据：**[猎头 JD 原 PDF](../role/DS%20I%20DSaaS.pdf)、[当前一页简历源文件](../source/WentworthLiu_MarketCast_Data_Scientist.tex)、[项目证据索引](../../../evidence/README.md)及本人新增确认的地点、签证与带项目／分享经验。以下公司和岗位描述仅依据猎头 JD，未独立验证；不添加调查／电视数据、AWS、Streamlit、外部客户交付或正式团队管理经历。

## 会前 5 分钟：准备好这些答案

- 目前在**北京**，计划**2026 年 12 月搬到伦敦**；Reading / London 每周到岗 3 天的具体安排仍需和猎头核实。
- 可开始日期／合同通知期：搬迁月份已确认，但**具体搬迁日、通知期及最早入职日尚待本人填写**，别临场编数字。
- 薪资预期：JD 写最高约 **£55k + benefits**；想清楚自己的目标和底线，先核实薪资构成与岗位级别，不把上限当保底。
- 工作资格：本人确认持有**英国 dependant visa，到期月份为 2031 年 1 月**，无需雇主担保；通话前按签证记录核对具体到期日，不引用旧 Fuse 面试稿中的 2032 年日期。
- 确认实际发送的简历文件／渠道、猎头是否已将资料转交 MarketCast；档案中同内容的 PDF 文件名不能证明实际邮件附件名。

## 自我介绍：一条主线，三个可追问的项目

**表达顺序：**我是谁／现在做什么 → 我的研究背景 → ByteDance 番茄 IP 热度模型 → Li Auto 风险排序及 Feature Store → 为什么申请这份工作。初聊控制在约 60–75 秒；始终以“我”的经历为中心，别用抽象观点开场，也别一口气报完项目指标。

**主版本（约 60–75 秒）：**

> Hi Alaric, I'm Wentworth Liu, a Data Scientist at Li Auto. My background is in computational materials research, and I've always been interested in how we turn imperfect data into useful decisions. At ByteDance, I built Fanqie's daily IP popularity model, combining consumption, dissemination and search signals to help the marketing team compare IPs and decide what to keep promoting. At Li Auto, I work on a very different problem: battery safety. I built an explainable risk-ranking system to help prioritise investigations when failures are extremely rare. I also built an offline Feature Store so vehicle-behaviour features could be reused across analysis and modelling rather than rebuilt each time. This MarketCast role appeals to me because it brings me back to marketing questions, now with stronger experience in modelling and making ML work reliably in practice.

**短版本（约 30–40 秒，时间紧或被打断时用）：**

> Hi, I'm Wentworth Liu, a Data Scientist at Li Auto. My background is in research, and at ByteDance I built Fanqie's IP popularity model to support marketing decisions. At Li Auto, I've built an explainable battery-safety risk-ranking system and an offline Feature Store to make modelling more reusable. This role interests me because it connects the marketing questions I enjoyed at ByteDance with the modelling and delivery work I've done since.

**三个有意留下的“钩子”：**番茄模型“如何整合不同来源的热度信号，帮助团队决定续投？”；风险排序“为什么罕见安全事件不直接做普通二分类？”；Feature Store“如何让上千个特征可复用？”按对方追问的方向深入，不必主动把三个项目全部讲完。

**如果只问“为什么感兴趣”：**

> I enjoyed seeing the marketing team use Fanqie's popularity model to inform promotion decisions. I'd like to bring that decision-focused approach, together with the risk modelling and Feature Store work I've done at Li Auto, to the range of data and questions described in this role.

不要把 ByteDance 的营销**内容/IP 推广**说成已做过广告效果增量实验；JD 的调查、电视收视、刷卡数据是目标岗位的数据源，不是个人既有经历。

## 三个可讲的项目（每个 40–60 秒；被追问再展开）

### 1. ByteDance：番茄 IP 热度模型（优先讲）

> At ByteDance, the Fanqie marketing team needed a more consistent way to decide which IPs to continue promoting. I built a daily IP popularity model combining consumption, dissemination and search signals, with automated ETL and data-quality checks. The dashboard reached about 60% adoption among its target internal users. The marketing team used it to compare IPs and adjust promotion priorities; I built the measurement tool, not the advertising policy itself. What stayed with me was how important comparable data definitions are when a model is meant to inform a real decision.

**若追问简历的 40%：**业务复盘显示调整推广方向后，团队负责推广视频的**锚点链路 App 下载合计**较此前一个月约高 40%；这是观察性前后对比，不是模型独立造成的增量，更不是全 App 下载增长。不要自称负责投放决策或掌握未经核实的预算／归因日志。

### 2. Li Auto：可解释风险排序

> At Li Auto, battery thermal-runaway events are extremely rare, so a standard binary classifier could create a misleading impression of precise failure probabilities. I built an explainable relative-risk ranking to help teams prioritise which vehicles to investigate. It captured 93% of evaluated cases within the top-ranked 2% of vehicles; the ranking isn't a calibrated failure probability. I also turned the scoring into a monthly workflow with validation, monitoring and API delivery. The key was fitting the model to the investigation decision, rather than presenting a metric in isolation.

### 3. Li Auto：离线 Feature Store

> At Li Auto, repeated feature work made modelling slower and harder to reproduce. I built a department-wide offline Feature Store for more than 1,500 vehicle-behaviour features, with a Git-managed YAML registry and PySpark pipelines for consistent definitions, temporal alignment and validation. Features could then be reused across analysis, training and batch scoring. This cut feature-development time by approximately 85%; that figure refers specifically to feature development, not overall modelling time. The project showed me that good data infrastructure matters as much as the model when you need repeatable results.

**指标边界：**风险排序的 93% / 前 2% 只针对已评估案例，风险分不是故障概率；Feature Store 的约 85% 只指特征开发时间。番茄的约 40% 是业务复盘中的观察性前后差异，不是个人模型的因果增量。这些故事不隐含调查／收视数据、外部客户交付或正式团队管理经历；组内向新人分享工具开发经验由本人另行确认，可作为带教例子。

## 常见筛选问题：短句回答

更完整的标准问题、猎头可能的二次追问及三个项目的可复述答案，见[猎头问答卡](recruiter-qa-2026-10-16.md)；以下表格只用于通话前快速扫一眼。

| 可能问题 | 建议回答 / 边界 |
| --- | --- |
| Why are you looking? | “I'm currently based in Beijing and planning to move to London in December. I've enjoyed the end-to-end work at Li Auto, and I'm looking for a role where I can apply that experience to a broader range of business questions. The marketing-measurement side of this role also connects with the work I enjoyed at ByteDance.” 如追问年份：2026 年 12 月；不抱怨现雇主。 |
| Have you worked with surveys / TV / card data? | “Not directly. I have integrated differently defined consumption, dissemination and search signals for marketing decisions, and I'd be keen to learn the survey and media datasets here.” |
| AWS / Streamlit / client-facing experience? | “I haven't used those specific tools in the work described on my CV. My closest experience is building cloud-deployed analytics, dashboards and pipelines, and presenting results to internal cross-functional teams.” 如本人另有可证实实践，再按真实情况补充。 |
| Can you lead projects / mentor people? | “Yes. I've led several projects, including risk-ranking and Feature Store work at Li Auto. I've also shared my tool-development experience with newer colleagues in my group.” NG 暂按“组内新人”表达；如特指应届生可改成 “new graduates”。不声称正式管理下属或独立交付外部客户项目。 |
| UK work rights / location / start? | “I'm currently based in Beijing and plan to move to London in December. I hold a UK dependant visa valid until January 2031, so I don't require sponsorship. I can confirm a realistic start date once I've checked my notice period and relocation arrangements.” 请用本人证件核对签证到期日；不承诺未经确认的到岗日期或每周三天通勤。 |
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
