# Li Auto Risk Ranking — Spoken Follow-ups

**Use:** Start with the [short risk-ranking story](recruiter-call-2026-10-16.md). Speak only the answer you are asked for. The chains are silent memory cues; verification notes at the end are not lines for the interview. These drafts draw on the candidate's account and the [Li Auto evidence](../../../evidence/projects/li-auto/li_auto_project_answers.md).

## Three technical questions

### 1. Why a ranking rather than a binary classifier?

**Keyword chain: Decision → Few cases → Feature Store → Explainable priorities.**

> I started with what the teams needed to decide: which vehicles should we investigate first? Thermal runaway is very rare, so there are very few confirmed failures to learn from. And a car that hasn't failed yet isn't necessarily a true negative forever. A yes-or-no prediction could give a false sense of certainty. I used known cases and vehicle-behaviour features from the Feature Store I built, but the output is a relative-risk ranking rather than a verdict on each car. It's explainable, so engineering and after-sales colleagues can see why a vehicle is high on the list and decide what to check next.

### 2. What does 93% in the top 2% mean?

**Keyword chain: Earlier monthly snapshot → Vehicles still operating → Later failures → Look back → Coverage.**

> Each month, the model uses the failures already known and ranks vehicles that haven't failed. Some of those vehicles fail later. We look back at where they appeared in the earlier monthly ranking, before the failure. Among the later-failure cases we evaluated, 93% were in the top 2% of that earlier ranking. That tells us the shortlist covered a large share of those evaluated cases. It doesn't mean that 93% of the cars in the top 2% went on to fail, or that any individual car has a 93% chance of failure.

**If asked about training membership:** “Those later failures weren't known failures in the training history of the earlier snapshot we evaluated; they could enter training in a later monthly run.” Verify against archived runs before claiming a formal temporal holdout.

### 3. What happens after a car ranks highly?

**Keyword chain: Queue → Vehicle evidence → Compare cases → Specialists review → Next step.**

> A high score doesn't automatically trigger a battery replacement. It gives the teams a place to start. In the workbench, they can see which battery and usage signals contributed to the score and compare that car with other vehicles and known failure cases. Then specialists bring in their own knowledge. They may check supplier or manufacturing records, monitor a group of similar vehicles, or decide whether a closer inspection is justified. My job was to make the reasons behind the ranking easy to trace; the decision about what happens to a customer vehicle stays with the specialist teams.

## Behavioural questions

### 1. How did you get after-sales colleagues to trust the ranking?

**Keyword chain: Score isn't enough → Battery mechanism → Supplier and cohort evidence → Agree what to check.**

> I learned quickly that a risk score on its own wasn't enough for after-sales colleagues. A pack inspection can be expensive and disruptive, so they needed to understand why a vehicle was flagged. We looked at the model's signals alongside what we knew about battery behaviour. When a batch issue seemed possible, we also checked manufacturing information with the supplier and compared vehicles in the same cohort. If the evidence wasn't strong enough, we agreed on what to monitor or test next rather than treating the score as a diagnosis. That made the model a useful starting point for a shared investigation, not something they had to accept on faith.

**To turn this into a specific interview example:** Add a real batch or vehicle, the colleague's actual concern, what you showed, and the decision that followed. Do not invent one or claim a model-led action prevented a failure.

### 2. Tell me about a surprising score or a data-quality problem.

**Keyword chain to prepare: What looked wrong → How I traced it → What changed → How I checked.**

**Answer pending:** The project notes mention unexpectedly high scores linked to handling of ratio/sum features during normalisation and a cross-platform comparison issue. Choose one incident you personally investigated before drafting a spoken answer. Which vehicle or cohort was involved? What check exposed the issue? What did you change, and how did you verify the result? Don't present a general note as a personal incident.

### 3. What was hardest about getting the results used?

**Keyword chain: Ranked list isn't enough → Ask after-sales what they need → Workbench → Human decision.**

> The hardest part was turning the ranking into something after-sales colleagues could actually work with. We talked about what they'd need to see before deciding to investigate a high-scoring vehicle. A list of scores wasn't enough: they needed the main signals, comparisons with other cars and links to patterns in known cases. So I brought that evidence into an internal workbench where they could query a vehicle and explore why it ranked highly. It became part of their analysis workflow, and we're gradually adding AI-agent assistance to that workflow. But the score and the tools don't decide whether to intervene; the specialist teams do. For me, that's the important step between delivering a model and delivering something useful.

**To make this answer concrete:** Add a real request from an after-sales colleague and the exact change it led to. Confirm what AI-agent features are live versus planned before describing them in an interview.

## Verification notes — not spoken answers

- 93% is **coverage of evaluated vehicles that failed after an earlier monthly scoring snapshot within that snapshot's top 2%**. Check archived model versions, training membership, feature cutoffs, failure dates, evaluation cohort and whether a case was counted more than once. The current notes do not establish a formally independent holdout.
- The ranking is a relative priority score, not a calibrated probability, diagnosis, guaranteed warning or proof of prevented incidents. Do not use “one in 400,000” until its denominator and time window are confirmed. The monthly workflow is batch scoring, not real-time prediction.
- Similarity to an earlier case does not prove the same root cause or justify an automatic pack change. Cohort and supplier checks inform human review; do not present two or three batch cases as a validated trigger.
- AI assistance used to *develop* the workbench and gradually integrating AI-agent tools *into* the analysis workflow are different claims. Neither establishes an autonomous safety decision or automatically validated report. Confirm what has actually shipped.