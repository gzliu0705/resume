# 个人求职资料库

2026-10-14 先在独立桌面副本中逐文件核对并归类，再依据 `FILE-MAP.tsv` 整理原目录。以下路径均以本目录为根。文件日期只说明本地保存/修改时间；十个岗位最新 PDF 的投递状态以及 LinkedIn 发布状态由本人于 2026-10-14 另外确认。

| 去哪里找 | 用途 | 维护原则 |
| --- | --- | --- |
| [profile/](profile/README.md) | [简历母版 MASTER](profile/resumes/MASTER.md)、一页通用版、LinkedIn 整理稿与历史快照 | 从母版复制再定制；一页版与已投递文件不反向覆盖母版 |
| [evidence/](evidence/README.md) | 第一人称陈述、项目答复、派生能力映射与关键主张核对清单 | 确认的事实、推断、待核实分开 |
| [applications/](applications/INDEX.md) | 十个既有岗位及新增的 Breathe、Elysia、AESC 申请档案，含已知 JD、PDF、稿件和面试准备 | [统一结构](applications/STRUCTURE.md)，已投递文件与草稿分开记录；无 JD 的申请不虚构岗位 |
| [website/](website/docs/source-of-truth.md) | 网站内容、设计与演示 | 项目内结构不变，引用改为仓库相对路径 |
| [references/](references/README.md) | 逐文件索引的历史简历、汇总 JD、写法样本、求职指南和学习笔记 | 仅供参考，不能当作当前有效简历或个人事实依据 |
| [archive/](archive/README.md) | 根目录原有的 LaTeX 构建日志 | 只归档，未删除 |
| `career-ops/` | 独立求职工具及其本地用户数据 | 不重排源码；其 `data/applications.md` 是工具内状态记录，当前被 Git 忽略 |

## 事实与时间顺序

先查 [evidence/README.md](evidence/README.md) 和本人原始陈述，再查具体项目证据，最后比较简历/LinkedIn/网站的公开表述。较新的文件可以提出修正，**不会自动覆写**旧文件所记录的当时交付版本。

| 文件节点 | 本地时间 | 解释 |
| --- | --- | --- |
| `profile/linkedin/archive/linkedin_profile_backup.md` | 2026-09-07 | 历史 LinkedIn 整理稿，网站初稿原先引用它 |
| `career-ops/data/applications.md` | 2026-09-10 | 工具内 Axle Energy 跟踪记录；未覆盖这里的所有岗位 |
| `applications/fuse/interview/Fuse_HR_Intro_Call_Prep.md` | 2026-09-22 左右 | 一次面试准备材料，不证明面试实际发生 |
| `applications/clearscore/working/*` | 2026-09-24 | 内容稿及评估；最新 PDF 已确认投递，不能反推文字稿也曾外发 |
| `profile/linkedin/snapshots/linkedin_1010.pdf` | 2026-10-10 | LinkedIn 页面导出快照，不代表现在的线上内容 |
| `evidence/projects/bytedance/bytedance_project_answers.md` | 2026-10-13 | 新补充了 ByteDance 项目指标的归因边界 |
| `profile/linkedin/linkedin_profile.md` | 2026-10-13 | 最新本地整理稿；本人确认 10 月 13 日的修改已发布，文内旧的草拟标签需和事实待核验备注区分 |

## 迁移记录与本地文件边界

整理副本最初包含原目录的 1,596 个需保留文件（含 `career-ops/` 下被 Git 忽略的个人数据），复制后逐个 SHA-256 校验一致。迁移时不覆盖原目录的 `.git/`、`career-ops/node_modules/`、`career-ops/data/cache/`、临时 `.tmp` 文件和可能含凭据的 `.codex/config.toml`。上传个人求职资料不等于取消 `career-ops/` 对本地运行数据的忽略规则；Git 暂存前单独核对范围。

最初 152 个个人材料文件的迁移快照见 [FILE-MAP.tsv](FILE-MAP.tsv)，后续岗位统一重排见 [applications/MOVE-MAP.tsv](applications/MOVE-MAP.tsv)；前者是历史记录，不再作为全部文件的现行路径索引。工具源码未移动。

需本人确认的版本和披露问题见 [ORGANIZATION-DECISIONS.md](ORGANIZATION-DECISIONS.md)。
