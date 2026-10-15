# MarketCast / SearchTribes — 猎头初聊问答卡

**用途：**配合[自我介绍与三段项目故事](recruiter-call-2026-10-16.md)练习；先回答问题，不抢着把所有故事讲完。预计通话 2026-10-16 17:45，**时区仍需按邀请核实**。以下英文是备稿，不是已发生的对话。岗位条件来自[猎头 JD](../role/DS%20I%20DSaaS.pdf)；个人事实来自[一页简历](../source/WentworthLiu_MarketCast_Data_Scientist.tex)、[证据索引](../../../evidence/README.md)及本人此次补充。

## 标准筛选问题：先用 1–3 句回答

### 1. Why are you looking, and why now?

> I'm based in Beijing and plan to move to London in December. I've enjoyed leading data science projects at Li Auto, but I'd like to apply what I've learned to a broader range of business questions. The marketing-measurement focus here also connects with the Fanqie project I enjoyed at ByteDance.

**可能追问：Why December? / Could you start earlier?** 搬迁月份已确定，具体日期与合同通知期未提供；回答：“December is my planned relocation month. I can confirm an exact start date once I've checked my notice period and the practical arrangements.” 不承诺未核实的提前到岗。

### 2. Why this role / MarketCast?

> The JD's mix of marketing measurement, varied data and applied modelling stood out to me. At ByteDance I saw a marketing team use a multi-source measurement tool to decide which IPs to keep promoting; at Li Auto I built more rigorous modelling and reusable ML workflows. This role brings those two sides together.

**可能追问：Have you measured advertising's causal impact?** “I supported content-promotion decisions with observational signals; I wouldn't call that an incrementality experiment. I'd be interested in learning how this team links advertising to business outcomes.” 不把番茄 40% 前后对比当增量实验。

### 3. What is your experience with Python, SQL and large datasets?

> I use Python and SQL in my data science work, and built PySpark pipelines and a Feature Store for vehicle-behaviour features at Li Auto. I've also integrated data from multiple sources into a daily model and dashboard at ByteDance. I'm happy to walk through one of those workflows.

**可能追问：How strong are you in pandas?** CV 未单列 pandas 的实战例子；按本人实际使用经验回答，**不要从 Python/PySpark 自动推断 pandas 熟练程度**。

### 4. Can you lead projects or mentor others?

> Yes. I've led several projects at Li Auto, including risk-ranking and Feature Store work, taking them from the initial question through to something teams could use. I've also shared my tool-development experience with newer colleagues in my group.

**可能追问：How many direct reports / what mentoring did you do?** 可描述实际分享过的工具设计与开发方法；**正式汇报关系、人数和活动频率均未提供**，不要编数字或把带项目说成担任团队经理。若 NG 指应届生且属实，再用 *new graduates*。

### 5. Are you comfortable presenting to clients and non-technical stakeholders?

> I've explained modelling results and decision tools to engineering, quality, after-sales and marketing colleagues. My experience so far has been mainly with internal stakeholders, not direct external-client delivery. I'd be keen to develop that client-facing side of the role.

**可能追问：Give me one example.** “For Fanqie, the result was a daily measure and dashboard the marketing team could use to compare IPs, not just a model score. At Li Auto, an explainable ranking helped teams decide which cases to investigate first.”

### 6. Have you worked with surveys, TV viewership, card spend, AWS or Streamlit?

> I haven't worked directly with those datasets or tools in the experience described on my CV. My closest experience is integrating signals with different definitions, building data-quality checks and delivering models through repeatable pipelines. I'd be ready to learn the team's specific data and stack.

**可能追问：Would the learning curve be a problem?** “The domain and tools would be new to me, but the process of checking data definitions, validating models and making outputs usable is familiar.” 不声称 AWS/Streamlit 已投入生产。

### 7. Where are you based, do you need sponsorship, and when can you start?

> I'm currently in Beijing and plan to move to London in December 2026. I hold a UK dependant visa valid until January 2031 and don't need sponsorship. I can confirm an exact start date once I've checked my notice period and relocation arrangements.

**可能追问：Can you be in Reading / London three days a week?** “I'd like to confirm which office the three days would be based in and the practical arrangements around my December move before committing to a specific schedule.” 签证**具体到期日以本人证件为准**；不引用旧 Fuse 材料的 2032 年日期。

### 8. What compensation are you looking for?

> I saw the JD mentions up to £55k plus benefits. Could you confirm the base-salary range and whether there is a bonus or other compensation? I'd like to understand the scope and location before settling on a figure.

**可能追问：I need a number now.** 提前填写本人真实可接受范围：**[目标 £____–£____；底线 £____]**。不要把 JD 的 “up to £55k” 当作已确认的报价，也不要临时编数字。

### 9. Where else are you interviewing? Do you have other offers?

> I'm exploring roles that fit my move to London and the kind of data science work I want to do. For any active interview process or offer, I can give you an accurate update on its stage and timing.

**会前补齐：**正在面试的公司／阶段 **[本人填写]**；是否有 offer **[本人填写]**。不要把尚未投递的工作稿说成已在面试，也不要凭空宣称有 offer。

### 10. What would you need to know before going forward?

> I'd like to understand whether my CV has already been shared with MarketCast, what this role would own in the first few months, and whether the three office days would be in Reading or London. It would also help to know the interview stages and salary structure.

**可能追问：May I submit your CV now?** “Could you confirm the exact role, location and version of my CV you'd submit? I'd like us to be aligned before it goes to MarketCast.” 本人已把简历发给猎头，**不等于已确认雇主收到**。

## 项目追问：挑一条讲，别把三个项目串成技术报告

**Fanqie — How did the model influence a decision?**

> I combined consumption, dissemination and search signals into a daily popularity measure. I used PCA-derived statistical weights alongside weights agreed with the business team, and the dashboard helped them compare IPs and adjust which ones received continued promotion. The marketing team made the spending decisions; I built the measurement tool.

**Fanqie — Did your model cause the roughly 40% increase on your CV?**

> No. That figure came from a business retrospective comparing the team's anchor-tracked app downloads across promoted videos before and after it changed priorities. It's an observational month-on-month comparison, not a causal lift attributable to my model or an increase in total app downloads.

**Li Auto — Why ranking rather than a binary classifier?**

> The failure events were extremely rare, and the real decision was which vehicles to investigate first, not whether I could claim a precise probability of failure. I built an explainable relative-risk ranking; in the evaluation, 93% of cases were within the top-ranked 2% of vehicles. That isn't a calibrated failure probability.

**Li Auto — What did you personally build in the Feature Store?**

> I designed the feature definitions and Git-managed YAML registry, and built PySpark transformations with temporal alignment, validation and model-ready export. The point was to reuse consistent features across analysis, training and batch scoring. Feature-development time fell by about 85%; that's not an overall productivity or model-accuracy figure.

**Li Auto — How do these projects translate to this consulting role?**

> Fanqie gave me a real marketing decision to support; Li Auto taught me how to make modelling explainable and data work repeatable. I would bring those habits to new questions and datasets, while being clear that external-client delivery is an area I'd grow into.

## 会前必填 / 核对

1. 合同通知期、12 月具体搬迁安排、最早可到岗日期：**[本人填写]**。
2. 薪酬目标及底线、是否接受 Reading 通勤：**[本人填写]**。
3. 目前其他面试／offer 的真实阶段：**[本人填写]**。
4. 签证到期的**具体日**与工作资格表述：核对本人证件；本稿仅按本人提供的 **2031 年 1 月**记月份。
5. 确认会议邀请的日期、17:45 所属时区、会议链接及实际发送给猎头的附件版本。
