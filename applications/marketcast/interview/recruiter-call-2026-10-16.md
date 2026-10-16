# MarketCast / SearchTribes — Recruiter Call Speaking Guide

**Use:** Start here. The bold keyword chains are silent prompts; the quoted text is what you can say. Follow the recruiter's questions rather than delivering every story. This is preparation for the call arranged for October 16, 2026, at 17:45, not a call transcript. Confirm the time zone and meeting link.

## 1. Opening

**Keyword chain: Greet → Thank → Hand over.**

> Hi Alaric, it's nice to meet you. Thanks for making time to speak with me.

If asked how you are: “I'm doing well, thanks. How about you?” If there's a pause: “I've read through the role, and I'm looking forward to hearing more about the team.” If the recruiter immediately asks for an introduction, skip the extra small talk and start with “Of course. I'm Wentworth Liu...”

## 2. Self-introduction (about one minute)

**Keyword chain: Current role → Research mindset → Fanqie → Li Auto → Why this role.** Read this as *one* introduction, not five separate answers.

> I'm Wentworth Liu, a Data Scientist in Li Auto's Battery Intelligence team. I lead projects across battery health, safety and after-sales. Before moving into industry, I worked in computational materials research. That taught me to break down a complex and abstract physical problem, work out what I could measure, and use those measurements to find a practical answer. At ByteDance, I applied that mindset to a marketing question: which IPs should Fanqie's team keep promoting? I built an IP popularity model to help them compare the options and design promoting strategies. Now at Li Auto, the stakes are different, but the approach is similar. I've built an explainable risk ranking model to help teams decide which vehicles to investigate first, as well as data systems they can reuse. And what drew me to this role in MarketCast is that it brings me back to marketing questions but with stronger modelling and delivery experience.

**If time is short:**

> I'm Wentworth Liu, a Data Scientist at Li Auto, where I lead battery safety and health projects. My research background taught me how to turn a difficult question into something measurable. At ByteDance, I used that approach to help Fanqie's marketing team decide which stories to promote. At Li Auto, I've used it to prioritise safety investigations and build reusable data systems. This role brings those two sides of my experience together.

**Leave hooks, don't explain them all:** Fanqie popularity; why risk *ranking* rather than classification; the Feature Store. Pause and let the interviewer pick one.

## 3. Project stories — tell only the one they ask for

### Fanqie: which IPs should the team promote? (about 75 seconds)

**Keyword chain: Early app → Slower acquisition → Inconsistent choices → Wider signals → Daily product → Adoption → Observed change.**

> Most of my work at ByteDance was on Fanqie. It's now a widely used online fiction app in China, but when I joined, it was still at an early stage. The team needed to bring in new users, yet downloads tracked through its promoted videos weren't gaining momentum. The practical question was which IPs to keep promoting. People had video views and likes, but they also relied heavily on personal judgement. That made it hard to tell which IPs were gaining interest and how best to promote each one. So I built a daily popularity model using watching, sharing and searching signals from internal and external sources. I automated the data pipeline, deployed the model in the cloud, and built a dashboard the team could use to compare IPs and adjust its priorities. Right before I left, about 60% of the targeting internal users adopted the dashboard. And in a later business review, downloads tracked through the team's promoted videos were about 40% higher in the following month than in the preceding one which haven't changed much for a long time.

If asked about the signals, validation, impact or your personal contribution, use the [Fanqie follow-ups](fanqie-hiring-manager-followups.md).

### Li Auto: which vehicles should we investigate first? (about 80 seconds)

**Keyword chain: Rare but serious → Who needs attention? → My Feature Store → Explainable ranking → Later cases → Human decision.**

> At Li Auto, one of the hardest questions was how to spot potential battery safety problems before something serious happened. And thermal runaway is one of the cases. It is very rare, but it can lead to smoke or fire. So with so few confirmed cases, I didn't think it was credible to say, “This car will fail, and that one won't.” The more useful question was: which vehicles should we investigate first? I built an explainable risk ranking using patterns from past cases and vehicle-behaviour features from the Feature Store I'd built. When we later looked at evaluated vehicles that went on to fail, 93% had been in the top 2% of an earlier monthly ranking. I made the scoring a monthly workflow and deploy in cloud and built a web-workbench where specialists could examine the reasons behind each score. The model didn't make safety decisions for them; it helped them focus their investigations and decide what to check next.

For the evaluation, stakeholder process and difficult follow-ups, use the [risk-ranking follow-ups](li-auto-risk-ranking-followups.md).

### Li Auto: reusable features (about 40 seconds)

**Keyword chain: Risk-ranking data → Shared definitions → PySpark pipelines → Reuse → Time saved.**

> The risk-ranking model drew on another system I built: a department-wide offline Feature Store. Different projects had been rebuilding the same vehicle-behaviour features, so I put more than 1,500 of them in one reusable place. It uses shared definitions in a Git-managed YAML registry and PySpark pipelines to keep the features consistent and aligned in time. Teams can reuse them for analysis, training and monthly scoring. Feature-development time fell by about 85%, which made new projects much quicker to get started.

## 4. Recruiter questions and a natural close

**Keyword chain: Move → Fit → Experience gaps → Leadership → Logistics.** For short answers to why you're looking, work rights, salary, client work and tools, use the [screening Q&A](recruiter-qa-2026-10-16.md). Don't recite a second project story unless asked.

Choose two or three questions to ask:

1. “What would this person work on first, and who would they work with?”
2. “Would the three office days be in Reading, London, or either location?”
3. “Has my CV been shared with MarketCast yet?”
4. “What are the next stages, and is there a technical exercise?”
5. “Could you clarify the salary range and overall package?”

**Closing chain: Thank → Interest → Next step.**

> Thanks, this has been really helpful. The mix of marketing measurement and applied modelling sounds interesting. What would the next step look like?

## Private preparation — not lines to speak

- Based in Beijing; planning to move to London in **December 2026**. Exact date, notice period and earliest start are unconfirmed. Check the office and three-day on-site arrangement.
- Candidate reports a UK dependant visa valid until **January 2031** and no sponsorship requirement; verify the exact expiry on the visa record. JD states **up to £55k plus benefits**, not an offer. Decide your own salary range before the call.
- Confirm what CV was actually sent, whether MarketCast has received it, and the time zone/link for the arranged call. Record what the recruiter says afterwards; this document is not a transcript.
- **Fanqie:** ~40% is an observational comparison of anchor-tracked downloads across the team's promoted videos in two consecutive months. It is neither all app downloads nor a measured causal lift. The marketing team, not the model, made promotion and budget decisions.
- **Risk ranking:** 93% means coverage among *evaluated later-failure cases* that ranked within the top 2% at an earlier monthly scoring snapshot. Those cases had not yet failed at that snapshot. Confirm model version, training membership, feature cutoff and cohort before calling this a formal holdout. It is not a per-vehicle failure probability or evidence of prevented incidents.
- **Feature Store:** ~85% applies to feature-development time only. No documented claim of formal direct reports, external-client delivery, survey/TV/card datasets, AWS or Streamlit. Do not present workbench AI assistance as automated safety decisions.

**Reference material:** [recruiter JD](../role/DS%20I%20DSaaS.pdf) · [one-page CV source](../source/WentworthLiu_MarketCast_Data_Scientist.tex) · [evidence index](../../../evidence/README.md).