# MarketCast — Recruiter Screening Answers

**Use:** Keep these answers conversational. The keyword chains are prompts to remember silently; don't read them aloud. The [call guide](recruiter-call-2026-10-16.md) has the opening, introduction, stories and closing. These are draft answers, not a record of the call.

## Motivation and fit

### Why are you looking now?

**Keyword chain: London move → Li Auto experience → New questions.**

> I'm currently based in Beijing, and I'm planning to move to London in December. I've enjoyed leading data science projects at Li Auto. For my next step, I'd like to apply that experience to a wider range of business questions, especially marketing questions like the ones I worked on at ByteDance.

**If asked when you can start:** “December is when I'm planning to move. I can give you a firm start date once I've checked my notice period and relocation arrangements.”

### Why this role?

**Keyword chain: Marketing again → Varied data → Models people use.**

> The mix of marketing measurement and applied modelling caught my attention. At ByteDance, I built a tool that helped marketers compare what to promote. At Li Auto, I learned a lot about making models explainable and reliable enough for teams to use regularly. I'd like to bring those experiences together here.

**If asked about advertising incrementality:** “My Fanqie work supported content-promotion choices using observational signals; it wasn't an experiment measuring advertising lift. I'd be interested in learning how this team evaluates impact.”

## Experience

### How technical is your data work?

**Keyword chain: Python and SQL → PySpark → Daily products.**

> I use Python and SQL in my data science work. At Li Auto, I built PySpark feature pipelines and an offline Feature Store. At ByteDance, I brought multiple data sources into a daily model and dashboard. I'm happy to walk through either example.

### Have you led or mentored others?

**Keyword chain: Project ownership → Shared tools → Newer colleagues.**

> I've led several projects at Li Auto from the initial problem through to delivery, including risk ranking and the Feature Store. I've also shared what I've learned about building tools with newer colleagues in the group. That was project leadership and knowledge-sharing, rather than formal people management.

**If asked for a headcount or a mentoring example:** Give an actual number or specific tool-sharing session only if you can verify it; do not invent direct reports.

### Are you comfortable with clients and non-technical stakeholders?

**Keyword chain: Internal partners → Decision tool → Client-facing growth.**

> I've worked closely with marketing, engineering, quality and after-sales colleagues, and I try to explain a model in terms of the decision it helps them make. Most of that experience has been with internal teams. Working directly with external clients is something I'd like to develop.

**If asked for an example:** “For Fanqie, I turned the index into a dashboard the marketing team could use to compare IPs. At Li Auto, I made risk scores explainable so specialists could decide which vehicles to investigate.”

### Have you used surveys, TV data, card data, AWS or Streamlit?

**Keyword chain: Honest gap → Transferable workflow → Learn the stack.**

> I haven't worked directly with those datasets or tools in the projects on my CV. I have combined data from different sources, checked definitions and quality, and delivered cloud-deployed models and dashboards. The datasets and tools would be new, but that way of working is familiar.

Answer questions about specific tools such as pandas from your actual experience; Python or PySpark alone does not establish it.

## Logistics

### Where are you based, and can you work in the UK?

**Keyword chain: Beijing → London in December → Dependant visa → Start date.**

> I'm in Beijing now and planning to move to London in December 2026. I hold a UK dependant visa valid until January 2031, so I don't need sponsorship. I'll confirm an exact start date once I've checked my notice period and moving plans.

**If asked about three days in the office:** “Could you clarify whether that would be in Reading or London? I'd like to check the practical arrangement around my move before committing to a schedule.”

### What salary are you looking for?

**Keyword chain: JD ceiling → Full package → Your range.**

> I saw the role is advertised at up to £55k plus benefits. Could you tell me the range for this level and what else is included? I'd like to understand the role and location before giving you a precise figure.

**If pressed for a number:** Give a range you've actually decided you would accept. Write it down beforehand: **[target £____–£____; minimum £____]**.

### Where else are you interviewing?

**Keyword chain: Relevant search → Actual stages → Timelines.**

> I'm looking at data science roles that fit my move and the kind of work I want to do. I can give you an accurate update on any active processes and their timelines.

Only name real applications, interview stages or offers; don't present unsent drafts as active processes.

### What do you need to know before moving forward?

**Keyword chain: Scope → Office → Process → CV status.**

> I'd like to understand what I'd own in the first few months, whether the office days are in Reading or London, and what the interview process looks like. Has my CV already been shared with MarketCast?

**If asked to submit your CV:** “Could we confirm the exact role, location and version of my CV you'd send?” Sending a CV to a recruiter does not establish that the employer received it.

## Short project follow-ups

For a fuller story, choose the relevant [Fanqie](fanqie-hiring-manager-followups.md) or [Li Auto](li-auto-risk-ranking-followups.md) page rather than answering every technical question at once.

**Fanqie — What was your contribution?** **Chain: Signals → Pipeline and cloud model → Dashboard → Marketers decide.**

> I defined the popularity signals, built the daily data pipeline and cloud-deployed model, and put the results into a dashboard. It helped marketers compare IPs. They made the final promotion decisions.

**Fanqie — Did the model cause 40% growth?** **Chain: Tracked downloads → Before/after → Not causal.**

> I wouldn't claim that. A business review found about 40% more anchor-tracked downloads across the team's promoted videos in the month after it changed priorities than in the previous month. That's an observed difference, not a measured effect of my model or a change in total app downloads.

**Li Auto — Why ranking?** **Chain: Rare cases → My Feature Store → Investigate first → Explain reasons.**

> With such rare events, a yes-or-no answer would suggest more certainty than we have. The real decision is which vehicles to investigate first. I used vehicle-behaviour features from the Feature Store I built to create a ranking that specialists can inspect and challenge.

**Li Auto — What does 93% mean?** **Chain: Earlier ranking → Later failures → Coverage, not probability.**

> Looking back at evaluated vehicles that failed later, 93% had been in the top 2% of an earlier monthly ranking. It tells us how many of those later cases the shortlist covered, not how likely any top-ranked vehicle was to fail.

**Feature Store — What did you build?** **Chain: Shared features → Risk ranking → Reuse → Time saved.**

> I built a shared source of vehicle-behaviour features, including ones I used in the risk-ranking model. I managed their definitions in Git and used PySpark to produce consistent, time-aligned data. Teams could reuse the features for analysis, training and scoring. Feature-development time dropped by about 85%.

## Check privately before speaking

- Exact visa expiry date, relocation date, notice period and earliest possible start; feasibility of commuting to Reading.
- Target salary and minimum; true stages of other interviews and offers; version of the CV actually sent.
- Confirm the meeting's time zone and link. The JD gives “up to £55k”; it is not a promised offer.
- Treat the ~40% as an observational tracked-download comparison and 93% as coverage of evaluated later-failure cases in an earlier ranking. Neither is a causal lift or an individual failure probability.