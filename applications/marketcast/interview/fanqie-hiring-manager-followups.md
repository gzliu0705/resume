# Fanqie IP Popularity Model — Spoken Follow-ups

**Use:** Start with the [short Fanqie story](recruiter-call-2026-10-16.md). Use these answers only when asked to go deeper. Each bold chain is a silent memory cue; speak the paragraph, then pause. This page draws on the candidate's account and the [ByteDance evidence](../../../evidence/projects/bytedance/bytedance_project_answers.md).

## Technical and decision questions

### 1. Why weren't views and likes enough?

**Keyword chain: Promotion decision → Paid versus organic → Wider story interest.**

> The decision wasn't just which video looked popular. We needed to know whether the story behind it was gaining interest, and whether more promotion was worth considering. A video can get views because we paid to show it. Views and likes alone don't tell us if people then search for the story, start reading it or share it. They also don't tell us whether a story is already spreading without extra promotion. So I wanted to put video performance next to wider signs of IP popularity. That gave the marketing team a better starting point for deciding what to support next.

### 2. Why consumption, search and sharing?

**Keyword chain: Discover → Search → Read → Share → Measure.**

> I thought about what someone might do after seeing a short video about a story. They might search for the title, start reading, and then share it if they like it. That gave me three useful angles on popularity: search shows curiosity, reading shows engagement, and sharing shows whether interest is spreading. I mapped the internal and external data we had onto those angles. No single signal tells the whole story, but together they give a much better view than a video's metrics alone.

### If asked: how did you combine the signals into one score?

**Keyword chain: Comparable features → Statistical weights → Business judgement → Daily index.**

> First I made the data comparable across IPs and sources. I used PCA to get a statistical view of how the signals varied together, then combined that with weights agreed with the business team using AHP. That gave us a daily index we could compare across stories and follow over time. I treated the weights as a practical measurement choice, not as proof that we had found the one true definition of popularity.

### 3. How did you know the index made sense?

**Keyword chain: No single truth → Compare with context → Explain spikes → Trace sources.**

> There's no single number you can use as the true popularity of a story. I checked whether the rankings and trends made sense against what the team knew and what we could see online. When the index jumped, I asked whether there was a real event behind it or a data issue. I also watched for missing values, late updates and unusual spikes, then went back to the source when something looked wrong. That didn't make the index perfect, but it made it much more reliable for a daily conversation about priorities.

### 4. Did you decide how the marketing budget was spent?

**Keyword chain: Show wider trend → Discuss options → Marketers decide.**

> No. I built a decision tool, not an automatic spending rule. The dashboard let the team compare video results with the story's wider popularity. If views were high but searches and reading weren't moving, that was a reason to look more closely. If a story was already gaining interest on its own, we'd ask what an extra push would add. The marketers brought their own category knowledge and made the spending decisions. I helped them see the signals more clearly and discuss which IPs to keep promoting.

### 5. What does the 40% figure mean?

**Keyword chain: Team's promoted videos → Tracked links → Two months → Observed difference.**

> It comes from a business review, not a controlled experiment. We compared app downloads tracked through the links on all the videos the team was promoting in the month before and the month after it changed IP priorities. The later month's tracked total was about 40% higher. That's across the team's videos; it isn't a 40% rise in all Fanqie downloads. The dashboard was one input into the team's decisions, but that comparison can't tell us how much of the difference it caused. Videos, budget, exposure and timing could also have changed.

**If asked what would establish impact:** “I'd first check that the links and reporting windows were consistent, then look at budget, exposure and campaign mix. For incremental impact, we'd need a suitable holdout or controlled test.” Do not imply that test took place.

### 6. What did you build yourself?

**Keyword chain: Define signals → Daily PySpark ETL → Cloud model → Dashboard → Monitoring.**

> I worked on the product end to end. I defined the feature framework around consumption, search and sharing, and built daily PySpark ETL jobs on our internal data platform. Then I built cloud-side Python jobs for preprocessing, training, validation and delivery, and deployed the model there. Finally, I built the dashboard so marketers could compare IPs and track changes, while we could keep an eye on the data and model. The key was making it a daily tool the team could actually use, not just a one-time score.

## Three behavioural answers

### 1. How did you influence marketers without owning the budget?

**Keyword chain: Shared acquisition problem → Common view → Marketers' judgement → Partial adoption.**

> The marketing team already knew they needed a better way to grow new-user acquisition. I didn't come in saying their experience was wrong. I gave them a common daily view of how different stories were gaining attention, so they could put that alongside their video results and category knowledge. They used the dashboard when deciding which IPs to keep backing, and about 60% of the intended internal users adopted it. I wouldn't claim that everybody used it or that one score worked equally well in every category. For me, the win was giving the team a shared starting point without taking the decision away from them.

### 2. Tell me about a time you challenged an established metric.

**Keyword chain: Odd swings → Check definition together → Repeated value → Review code → Lesson.**

> While exploring the data, I noticed that a consumption indicator from one external platform swung sharply from day to day across IPs. The definition had been agreed before I joined, so I first checked it with marketing and data engineering rather than assuming someone had got it wrong. The teams agreed on what the metric was supposed to mean. I then looked at the values again and saw that the indicator sometimes returned to the same unusual number. That gave us something concrete to trace. I went back to the data engineers, and we reviewed the upstream job together. As I remember it, we found a mistake in how an integer and a string were handled in the code. It reminded me to check both the business definition and the implementation before trusting a familiar metric.

### 3. How did you turn an analysis into something people used?

**Keyword chain: Daily decision → Reliable ETL → Deployed model → Dashboard → Scope and adoption.**

> I knew a one-off popularity score wouldn't help much if marketers needed to make the same decision the next day. So I designed the daily feature pipeline first, then built the cloud model workflow and a dashboard that showed IP comparisons and trends. That gave the team something they could return to, rather than a slide from one analysis. We focused on making that daily tool dependable. A wider index linked to in-app distribution was an idea for later, not part of what I delivered then. The dashboard reached about 60% adoption among the people it was intended for. What I learned is that delivery and usability are part of the model, not work you do after it.

## Further behavioural prompts (answer with a real incident)

1. When statistical weights and business judgement differed, how did you reach a definition the team could use?
2. When a source was late or a spike looked wrong, how did you flag the risk to marketers?
3. What did you prioritise across the ETL, cloud model and dashboard, and what did you defer?
4. What specific feedback, if any, changed the dashboard? What did you learn from non-users?
5. Have you had to correct someone who read a causal effect into a before-and-after number?
6. When another team owned a broken data source, how did you work with them to resolve it?
7. What's one decision on Fanqie you would make differently now?

Use a true situation → your action → result → lesson. If no such incident happened, don't invent one. A hypothetical question about a client claiming the model *caused* the 40% rise should be answered as a hypothetical, not a past event.

## Verification notes — not spoken answers

- Video examples are diagnostic questions, not proven paid/organic stop-go rules or proof of incremental promotional lift. The behavioural user journey is a design model, not evidence that individual people were tracked across platforms.
- The 40% is an observational month-before/after change in **anchor-tracked app downloads across the team's promoted videos**; not total app growth, a controlled effect or a result for one IP. Verify tracking, mix and budget before interpreting it further.
- Check the exact weighting method and business input against project notes if asked for formula detail. Confirm ETL versus model retraining frequency, personal ownership and dashboard monitoring before a technical interview; daily ETL does not imply daily retraining.
- For the metric incident, verify the value and exact type-handling mechanism and whether/how it was fixed; do not say you personally fixed or reprocessed the data without confirmation. For a full adoption example, find a specific discussion or feedback change; category differences alone do not explain each non-user.