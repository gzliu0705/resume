# LinkedIn 个人主页完整工作稿

更新日期：2026-10-13  
对照材料：`snapshots/linkedin_1010.pdf`、`applications/fuse/submitted/WentworthLiu_CV.pdf`、`applications/clearscore/submitted/WentworthLiu_ClearScore_Data_Scientist_Final_2026-09-24.pdf`。

**2026-10-14 本人补充：**2026-10-13 的 LinkedIn 修改已发布。下方“建议稿”“尚未核实已发布”“待确认”等是写作当时的历史注记，不能据此断言目前未发布；但发布与项目数字、任职日期、所在地等事实已经核实是两回事。2026-10-10 导出 PDF 早于这些修改，不能拿它验证修改后的线上栏目细节。

**使用方式：**这是唯一的最新版工作稿，不保存历史版本。除明确标为「建议稿」或「待确认」的地方外，正文来自 2026-10-10 导出的 LinkedIn PDF；PDF 不等于实时在线页面。讨论后的确定内容直接更新到相应栏目，尚未决定的修改意见留在栏目下，不覆盖现有事实。

## 个人信息 / Intro

- **Name:** Wentworth LIU
- **Headline:** Data Scientist | Applied ML, Statistical Modelling & Decision Science | Li Auto · ByteDance | Open to London Opportunities
- **Location (导出显示):** London Area, United Kingdom
- **Email:** gzliu0705@gmail.com
- **LinkedIn URL:** www.linkedin.com/in/wentworth-liu-4a4a02413

> **已决定：**保留现有 Headline，不把 ByteDance 改为 `ex-ByteDance`。
>
> **待确认：**Location 应与实际居住／搬迁状态一致；本文件不根据简历的 `Relocating to London` 擅自修改线上位置。

## About / Summary

**状态：最新建议稿；已同意「定位 + 解决的问题 + 有成果的证据」这一方向，尚未核实已发布。**

I’m a Data Scientist who combines statistical inference, applied machine learning and engineering to turn complex, ambiguous business problems and data into decisions teams can use. My work connects rigorous analysis with production delivery, particularly where rare outcomes, observational data or fragmented signals make straightforward modelling inadequate.

At Li Auto, I used causal analysis to distinguish actionable battery-longevity drivers from confounding and inform strategies with tens of millions of RMB in projected warranty savings for a single vehicle model. To help teams investigate rare safety failures, I built an explainable risk-ranking workflow that captured 93% of evaluated cases within the highest-risk 2% of vehicles, focusing after-sales review where it matters most. I also built department-wide offline feature infrastructure that reduced feature-development time by approximately 85% and made analysis and scoring reusable across battery platforms.

At ByteDance, I built multi-source content measurement tools that reached approximately 60% internal dashboard adoption and informed campaign and resource-allocation decisions. I bring a computational materials science research background and experience taking statistical models and data systems into cross-functional use.

I’m seeking Data Scientist opportunities in London and am authorised to work in the UK without employer sponsorship.

> **待确认：**两份定制简历对 93% 指标的样本口径分别写为「新观察到的」与「历史」案例。当前草稿仅写 `evaluated cases`，定稿时应核实准确口径。Fuse 的项目证据没有给出安全风险项目可单独量化的财务节省额；ClearScore 草稿只提到减少不必要的电池更换成本，不能把寿命项目的**单车型预测节省**套用到安全项目。约 85% 指特征开发时间／周期，约 60% 指 ByteDance 内部看板采用率。英国工作资格措辞依据 `applications/fuse/role/application_brief.md` 和 ClearScore 简历；发布前请核对实际 UKVI 状态与当前签证条件，不公开签证类型或到期日。

## Experience

### Li Auto — Data Scientist

- **Time:** July 2024 – Present
- **Location:** Beijing, China
- **Department (按简历补充背景，PDF 职位栏未显示):** Battery Intelligence Department

**状态：以已优化 CV 为母版，尚未更新到 LinkedIn。**

> **工作原则（已确认）：**Experience 不另行“再创作”。以已定稿的 CV bullet 为事实和措辞母版，但按 LinkedIn 阅读顺序重排为：**业务问题／目标 → 方案与关键方法 → 结果与业务价值**。只做这一必要的结构化处理、统一英式拼写和控制单条长度；不改变项目问题、技术路径、成果逻辑或公开口径。
>
> **建议的母版优先级：**以 `applications/clearscore/working/WentworthLiu_ClearScore_Data_Scientist_Final.md` 的 Li Auto 5 条为主；当 Fuse 简历在保密口径或系统架构表述上更完整时，只补充其已明确写出的内容。任何两个版本之间的数字或验证口径差异，先标注并由用户确认，不能由助手自行折中改写。

**第 1 条：Behavioural Risk Scoring & MLOps — LinkedIn 结构化稿，待确认**

▎**Behavioural Risk Scoring & MLOps.** Built an explainable relative-risk scoring system for thermal-runaway prioritisation under an approximately 1:40,000 class imbalance. Captured 93% of historical cases within the top-ranked 2% of vehicles, narrowing investigation and replacement candidates from tens of thousands to thousands. Used statistical feature selection and redundancy control across 1.5k+ vehicle-behaviour features, then built a decomposable, distribution-based risk score with cross-platform normalisation; productionised monthly scoring in a Docker-packaged pipeline with API delivery, validation, monitoring and case-driven refresh.

> **来源与待确认：**上述内容以 ClearScore 定稿中的问题、方法、交付形式和结果为依据；risk score 是相对风险排序，不是故障概率。`approximately 1:40,000` 来自 ClearScore 定稿；如该比例不适合公开，请改回 `extreme class imbalance`。Fuse 的对应版本将 `93%` 写成 newly observed failure cases，ClearScore 写 historical cases；当前保留 ClearScore 的 `historical cases`。若你确认这个口径，LinkedIn 可直接粘贴这一整条。

**第 2 条：Causal Inference & Cohort-targeted Longevity Strategy — LinkedIn 结构化稿，待确认**

▎**Causal Inference & Cohort-targeted Longevity Strategy.** Turned observational behaviour data into cohort-targeted interventions by linking causal effect estimation, degradation forecasting and OTA strategy evaluation. Six-month matched-cohort and within-vehicle counterfactual evaluations supported a projection of tens of millions of RMB in avoided warranty costs for one vehicle model. Used confounder control, propensity-score matching, ATT and dose-response estimation to isolate actionable behaviour drivers, then projected warranty-risk cohorts from early-life battery state-of-health trajectories to inform OTA strategies.

**第 3 条：End-to-End Offline Feature Store — LinkedIn 结构化稿，待确认**

▎**End-to-End Offline Feature Store.** Designed a 1.5k+ vehicle-cycle behaviour feature system and built a department-wide offline Feature Store in-house, cutting feature-development time by approximately 85% and reducing duplicated computation and storage. Implemented the feature lifecycle—from Git-managed definitions and schema-driven PySpark ETL to validated ingestion, historical backfills, monitoring and model-ready export through internal APIs—making features reproducible across analysis, model training and batch scoring.

**第 4 条：AI-Assisted Risk Intelligence & Investigation Product — LinkedIn 结构化稿，待确认**

▎**AI-Assisted Risk Intelligence & Investigation Product.** Turned a rare-event risk ranking into an evidence-based investigation product used by 20+ internal users to analyse 1k+ vehicles each month. Designed cohort benchmarking, vehicle-level replay, feature-level explanations and historical-failure comparisons for evidence-backed case assessment. Led end-to-end product design and cloud delivery with AI coding assistance, building a Web/API architecture with StarRocks-backed analytics, asynchronous analysis, access controls and versioned outputs for reproducible investigations.

> **数据口径待确认：**`20+` 用户、`1k+` 车辆／月由本人补充；`analyse` 指平台分析覆盖量，不暗示每台车都完成了深入调查或据此更换电池。对外发布前核对内部统计及公开权限。

**第 5 条：Confidence-Aware NLP Work-Order Classification — LinkedIn 结构化稿，待确认**

▎**Confidence-Aware NLP Work-Order Classification.** Built a confidence-aware NLP classification system for 50k+ noisy after-sales work orders across 30+ categories, routing low-confidence cases to expert review. Automated over 93% of labelled samples, raising accuracy from 83% to 96% within three months (weighted F1 >0.90) and replacing roughly 12 person-hours of weekly manual classification. Co-designed the label taxonomy, engineered domain-informed TF-IDF features and trained a Random Forest classifier, using expert-verified labels for weekly retraining.

**Skills 建议关联到 Li Auto 职位（未确认线上已添加）：** Machine Learning · Feature Engineering · Causal Inference · MLOps · Python (Programming Language)

### ByteDance — Data Analytics

- **Time:** May 2023 – September 2023
- **Location:** Beijing, China

**状态：以 ClearScore 定稿 CV 为技术母版、结合新确认的番茄业务口径调整的 LinkedIn 结构化稿，待确认；未核实已发布。**

▎**Fanqie IP Popularity Model for Promotion Prioritisation.** Built a daily IP popularity model to inform marketing's continued-promotion decisions. The dashboard reached approximately 60% internal adoption; a business retrospective recorded approximately 40% higher anchor-tracked app downloads from team-promoted videos after adoption. Integrated consumption, dissemination and search signals via automated ETL and data-quality monitoring, combining PCA-derived statistical weights with business-agreed AHP weights; deployed the model and dashboard to the cloud.

> **标题定位与指标口径待核实：**标题突出本人建造的 IP 热度模型及其服务的续投优先级判断，不暗示本人构建了自动投流优化算法。产品早期尚无固定数据投流策略；业务方参考看板改变的是哪些 IP 获得续投，决策与执行不属于本人。`约 40%` 是业务复盘中的近似数字，比较调整前后各一个月、同一团队负责的全部推广视频的锚点链路 App 下载合计。调整前周度数据相对平稳，调整后多数周保持在更高、相对平稳的水平；尚无原始周数据核验，不能说每周都提升 40%。这不是单个关键 IP 的结果、全 App 下载增长或看板的已验证因果效果。视频总量据本人回忆相近、总预算没有增加，总曝光（未区分付费和自然）增加；活动、周期、视频组合和自然扩散等影响尚未被证实已排除，发布前应核对原始记录。试投后的判断机制是合理解释，不写成已核实的固定阈值或本人制定的投流策略；后续固化策略未写作已交付成果。

▎**Qishui Music Audience Saturation & Acquisition Targeting.** Diagnosed falling new-user activations as an audience-saturation problem in video-led acquisition. Marketing shifted promotion from saturated to higher-potential content verticals. Used funnel-stage analysis and cross-product audience matching to compare installed-user penetration with anchor-linked new-user activation rates by vertical.

> **待确认：**本人新确认原稿 `activation-to-registration conversion` 下降与真实问题不符；应用商店下载不可直接观测，可观察的是锚点链路关联的新用户激活。四象限分析已做，但仅保留在项目语料库和面试细节，正文突出漏斗诊断、受众测量及业务实际调投。本人未参与最终复盘，不写激活 uplift、成本改善或其他未经验证结果；旧简历仍需按新口径另行更新。

> **待确认：**两份新简历均写 `Data Analytics Intern`，现有 LinkedIn 写 `Data Analytics`；请按真实职位决定是否统一。

**Skills 建议关联到 ByteDance 职位（未确认线上已添加）：** Data Analysis · Statistical Modeling · User Segmentation · Marketing Analytics · SQL

### Dongwu Securities Co. — Equity Research Analyst

- **Time:** December 2021 – May 2022
- **Location:** Nanjing, Jiangsu, China

**状态：以 ClearScore 定稿 CV 为母版的 LinkedIn 结构化稿，待确认。**

▎**Equity Research & Investment Recommendations.** Supported short-, medium- and long-term investment recommendations for Harmonic Drive Systems through an evidence-based equity-research assessment. Synthesised company fundamentals, competitive positioning, operating performance and market conditions with quantitative stock-price modelling to translate disparate market signals into a structured investment view.

> **待确认：**当前 LinkedIn 的职位和结束时间与两份新简历不一致；新简历均写 `Equity Research Intern`、`Dec 2021 – Mar 2022`。按任职记录确认后统一，不先替换现有内容。

**Skills 建议关联到 Dongwu Securities 职位（未确认线上已添加）：** Equity Research · Financial Modeling · Financial Analysis · Market Research · Quantitative Analysis

## Education

### Nanjing University — Master of Science, Computational Materials Science

September 2021 – June 2024

**Education description — 建议稿，待确认：**

Developed an open-source 3D analysis tool that connected calculated quantum-oscillation orbits to their Fermi-surface regions, making complex results easier to inspect. Reconstructed surfaces from energy grids with marching cubes, used HDBSCAN to group spatial regions, and mapped selected orbits to the corresponding surfaces. Separately published first-author research in *Physical Review B* (2024) and co-first-author research in *Physical Review Materials* (2023); named inventor on a related patent granted in 2025.

**Skills 建议关联到 MSc（未确认线上已添加）：** Python (Programming Language) · Unsupervised Learning · Data Visualization · Numerical Analysis · Scientific Computing

> **归属与技术口径：**本人已确认 `wentmil0705` 名下的三维分析工具是本人开发。已核对其公开仓库 `dHvA_3d_analysis` 与 `dhva_skeaf_fermi_surface_mayavi` 的 `mayavi_show.py`：`plot_primitive`／`plot_bz` 用 marching cubes 重建费米面；`calc_seperate_fermi_surface` 对三维表面顶点聚类；`calc_seperate_orbit` 以所选轨道坐标的均值预测所属聚类并高亮对应表面区域。本人将其概括为在三维空间中区分闭合区域；代码未见显式的拓扑闭合性检测，因此对外暂用 `regions`，不写成“严格判定闭合口袋”。原版 SKEAF 的开发不归于本人。论文与专利在本段只作为成果点到为止，具体信息保留在独立栏目；2025 年授权不意味着硕士在读时已经获授权。

### Nanjing University — Bachelor of Science, Materials Science & Engineering

September 2017 – July 2021

**Education description — 建议稿，待确认：**

Graduated in the top 1% of my cohort (GPA: 4.6/5.0), earning the National Scholarship and Outstanding Graduate honour. Captained a team that received an Honorable Mention in the 2020 Mathematical Contest in Modeling (MCM/ICM).

**Skills 建议关联到 BSc（未确认线上已添加）：** Mathematical Modeling · Quantitative Analysis · Materials Science · Team Leadership

> **口径与取舍：**本科成绩排名由本人确认是 `top 1%`，旧工作稿中的 `Top 2%` 不再使用。National Scholarship 与 Outstanding Graduate 虽已在独立 Honors & Awards 栏目列出，此处只简短点出以体现本科成果。樱花科技计划与学生社团领导经历可在后续单独讨论是否值得展示，不将其硬凑进面向 DS/MLE 的本科简介。

## Skills

**已更新到 LinkedIn 的置顶 5 项（按顺序）：**

1. Python (Programming Language)
2. Feature Engineering
3. Machine Learning
4. MLOps
5. Causal Inference

> **已确认：**以上 5 项已在 LinkedIn 更新。SQL、Statistical Modeling、PySpark、NLP、Risk Analytics 等仍保留在完整 Skills 列表和 Experience 中。
>
> **逐条关联口径：**上面的置顶 5 项是个人资料顶部 Skills，Li Auto、ByteDance、Dongwu Securities、MSc 与 BSc 各自的 `Skills 建议关联` 是待添加到对应条目的技能，不代表已经在线关联；按 LinkedIn 编辑器提供的现有技能名称选择最接近选项。技能标签不加入职位描述正文，也不计入文末 Experience 的 2,000 字符粘贴版。

## Honors & Awards

- National Scholarship
- Outstanding Graduate
- Jiangsu Province Outstanding Student

> **核对结论：**以上三项均见于 LinkedIn 导出，保留现有条目，不臆补获奖年份、授予机构或未经核实的评选口径。`MCM/ICM 2020 Honorable Mention` 目前放在本科 Education 建议稿中，暂不在本栏目重复；若要独立展示竞赛奖项，应将它移至此处并精简本科描述。

## Publications

- Crystal growth, transport, and magnetic properties of antiferromagnetic semimetal Ni₃In₂Se₂
- First-principles studies on the crystal structure and electronic properties of two-dimensional RuO₂ and OsO₂
- Mode-selective anharmonicity induced by lone-pair electrons in layered oxyselenides

> **出版社核对与待更新：**上面三条保留 LinkedIn PDF 的现有文字，不表示已在线修改。APS 正式标题中，2023 年 Ni₃In₂Se₂ 论文末尾还有 `crystals`；该文出版社补充材料注明 Lin Cao 与 Guanzhang Liu **equal contribution**，可准确标为 `co-first author`，而非仅笼统的 `co-author`。RuO₂ / OsO₂ 论文为第一作者；层状氧硒化物论文为共同作者。仅在论文条目或介绍中使用准确署名，不推断本人在各篇中的具体工作分工。

**出版信息补充建议（尚未核实已更新到 LinkedIn）：**

1. First-principles studies on the crystal structure and electronic properties of two-dimensional RuO₂ and OsO₂ — *Physical Review B* 109, 075411 (2024); first author; DOI: `10.1103/PhysRevB.109.075411`.
2. Crystal growth, transport, and magnetic properties of antiferromagnetic semimetal Ni₃In₂Se₂ crystals — *Physical Review Materials* 7, 084203 (2023); co-first author (equal contribution); DOI: `10.1103/PhysRevMaterials.7.084203`.
3. Mode-selective anharmonicity induced by lone-pair electrons in layered oxyselenides — *Physical Review B* 109, 024302 (2024); co-author; DOI: `10.1103/PhysRevB.109.024302`.
4. Fermiology and Zeeman splitting of the topological metal β-ReO₂ probed by de Haas–van Alphen quantum oscillations under high magnetic fields — *Physical Review B* 110, 205109 (2024); co-author; DOI: `10.1103/PhysRevB.110.205109`.

> **第四篇已确认归属：**本人确认 β-ReO₂ 论文也是本人论文；已纳入拟添加到 LinkedIn 的论文清单，但当前 LinkedIn PDF 尚未展示，不能标为已发布。两份目标简历原来概括为第一作者论文加两篇共同作者论文；若今后需要统一简历论文数量，应据第四篇重新核对措辞，本次不修改简历。

## Patents

- Analysis System and Method Based on First-Principles and Quantum Oscillation Testing

**LinkedIn 专利条目建议稿（尚未核实线上已更新）：**

- **Title:** Analysis System and Method Based on First-Principles and Quantum Oscillation Testing
- **Patent number:** CN115795266B (granted 24 October 2025; application CN202211526031.1; earlier publication CN115795266A on 14 March 2023)
- **Inventors:** Liu Guanzhang, Zhou Jian, Lü Yangyang, Cao Lin; **Patent holder:** Nanjing University
- **Short description (optional):** Co-invented a 3D analysis system to locate calculated quantum-oscillation orbits on complex Fermi surfaces and reduce redundant calculations. Combined marching-cubes reconstruction, SKEAF-based orbit matching and HDBSCAN-based surface-region selection.

> **核对口径：**现有 LinkedIn PDF 只有英文标题，保留为已导出原文，不把建议稿写成已在线修改。公开文本 `CN115795266A` 与授权公告文本 `CN115795266B` 属同一申请，不能计为两项专利；发明人署名并不等于专利权归本人，申请人／专利权人为南京大学。授权公告时间及发明人名单参照公开专利记录；不作专利技术商业化或定量性能提升的推断。

## Featured / 其他栏目

`snapshots/linkedin_1010.pdf` 未展示 Featured、志愿经历、语言等栏目的完整在线状态，**不能据此认定这些栏目不存在**。待查看实际页面后，再把已发布内容补进本工作稿；公开论文、专利及 Skeaf 项目可作为 Featured 候选，但目前不标为已展示。

**Featured 建议稿（优先展示公开可核验的成果，未核实线上已添加）：**

1. **Open-source 3D analysis tool | Python · HDBSCAN · Mayavi** — `https://github.com/wentmil0705/dHvA_3d_analysis`。说明：`Built an interactive tool that groups 3D Fermi-surface regions and locates quantum-oscillation orbits within them. Explore the code and visual examples.` 此项证明本人可交付代码与可视化工具，不冒称开发原版 SKEAF。
2. **First-author research | Computational modelling in Physical Review B** — `https://doi.org/10.1103/PhysRevB.109.075411`。说明：`First-author research on the electronic structure of 2D RuO₂ and OsO₂. Read the published paper.` 此项作为研究严谨性证据，不强行描述成商业 DS 成果。

> **备选而非必加：**已在 Patents 栏的 `CN115795266B` 与开源项目在研究领域上重叠，若以 DS/MLE 求职为主，不必同时将所有论文与专利置顶。将来如有经授权可公开的、脱敏或合成数据的 DS 项目案例，可优先于第二项展示；目前没有现成公开链接，不标为已具备的 Featured 成果。
>
> **发布前核对：**两个目标分别指向公开仓库和第一作者论文；仓库 `README.md` 的演示截图可见，但仍写有 `Rotate: it doesn't work now`、旧学校与 QQ 邮箱，置顶前应核对项目状态、说明及联系方式是否适合公开展示。LinkedIn PDF 无法证明线上是否已有 Featured；标题、缩略图与排序须以实际编辑界面为准。

## Languages（建议稿，未确认线上状态）

**LinkedIn 建议填写：**

- English — Professional working proficiency (TOEFL 104)。
- Mandarin Chinese — Native or bilingual proficiency。
- Cantonese Chinese — Native or bilingual proficiency。
- Japanese — Professional working proficiency (JLPT N1)。

> **口径：**本人确认英语、日语均非常熟练，能够适应职场沟通；因此建议选择 `Professional working proficiency`，而非仅凭 TOEFL / JLPT 成绩推定，也不擅自提高为母语或 `Full professional proficiency`。普通话、粤语母语口径来自本人简历。分数与证书用于工作稿佐证，不要求硬塞进 LinkedIn Languages 的语言名称；`snapshots/linkedin_1010.pdf` 未展示完整语言栏目，不能假定线上尚未填写。

## Volunteer Experience（建议稿，未确认线上状态）

- **Organisation:** Learning Enterprises China (LEChina) — NJU Chapter
- **Role:** Volunteer English Teacher
- **Location:** Jiagedaqi, China（本人已确认）
- **Dates:** July–August 2018（一段约一个月的志愿活动，跨 7—8 月；确切起止日期待确认，不表示连续两个月）。

**Description:** Co-taught English with international volunteers at a primary school in Jiagedaqi, supporting local pupils and cross-cultural exchange.

**Skills 建议关联到志愿经历（未确认线上已添加）：** English Teaching · Cross-cultural Communication

> **取舍：**公益经历可简短呈现跨文化协作与教学实践，不硬凑成 DS 项目、不虚构课时、学生人数或学习成效。本人确认 2018 年 7—8 月间在加格达奇参加一个月；若 LinkedIn 要求填写具体起止月，按实际日期选择，不把跨月活动写成整整两个月。旧稿中的 `Harvard-founded` 是机构背景而非本人贡献，正文删去。LinkedIn PDF 未展示完整志愿经历栏目，不能认定线上没有此条。

## LinkedIn ver — Li Auto Experience（2,000 字符以内）

以下为独立的纯文本粘贴版；上文五条完整工作稿不因字数限制而删改。

```text
▎Behavioural Risk Scoring & MLOps: Prioritised rare thermal-runaway investigations under ~1:40,000 class imbalance. Captured 93% of historical cases in the top 2% of vehicles, narrowing review from tens of thousands to thousands. Built an explainable ranker from 1.5k+ behaviour features via statistical screening, redundancy control and distribution-based scoring; deployed monthly Docker scoring with APIs and monitoring.

▎Causal Inference & Cohort-targeted Longevity Strategy: Identified battery-degradation drivers to target cohort-specific OTA interventions. Six-month matched-cohort and within-vehicle evaluations projected tens of millions of RMB in avoided warranty costs for one model. Used confounder control, propensity-score matching, ATT/dose-response estimation and SOH forecasts.

▎End-to-End Offline Feature Store: Replaced fragmented feature engineering with an in-house, department-wide Feature Store of 1.5k+ vehicle-cycle features, cutting development time by ~85%. Git-managed definitions and schema-driven PySpark ETL supported backfills, validation and reusable APIs across analysis, training and scoring.

▎AI-Assisted Risk Intelligence & Investigation Product: Made rare-event risk rankings usable for vehicle investigations: 20+ users analysed 1k+ vehicles monthly. Built cohort benchmarks, vehicle replay and feature explanations into a cloud Web/API with StarRocks analytics, async analysis, access controls and versioned outputs, using AI coding assistance.

▎Confidence-Aware NLP Work-Order Classification: To cut manual classification of 50k+ noisy after-sales work orders across 30+ categories, built a classifier with expert review for uncertain cases. Automated >93% of labelled samples, lifting accuracy 83%→96% in three months (weighted F1 >0.90) and saving ~12 manual hours weekly. Used domain TF-IDF, Random Forest and weekly retraining on verified labels.
```

## LinkedIn ver — ByteDance Experience（2,000 字符以内）

以下为独立的纯文本粘贴版；上文完整工作稿及指标口径说明不删改。

```text
▎Fanqie IP Popularity Model for Promotion Prioritisation: To inform which IPs warranted continued promotion beyond video-level engagement, built a daily popularity model. The dashboard reached ~60% internal adoption; a business retrospective recorded ~40% higher anchor-tracked app downloads from team-promoted videos after adoption. Integrated consumption, dissemination and search signals through automated ETL and data-quality monitoring, combining PCA-derived statistical weights with business-agreed AHP weights; cloud-deployed the model and dashboard.

▎Qishui Music Audience Saturation & Acquisition Targeting: Diagnosed falling new-user activations as an audience-saturation problem in video-led acquisition. Marketing shifted promotion from saturated to higher-potential content verticals. Used funnel-stage analysis and cross-product audience matching to compare installed-user penetration with anchor-linked new-user activation rates by vertical.
```
