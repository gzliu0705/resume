# Fuse Energy application

This directory follows a lightweight career-ops-style separation between role evidence, candidate evidence, and candidate-facing application assets.

```text
fuse/
├── 01_role/                 # Job, company, recruiter and application context
├── 02_candidate_evidence/   # Source-of-truth project evidence for factual claims
└── 03_application/          # Final submission-ready assets only
    ├── resume/
    └── communication/
```

## Use order

1. Read `01_role/application_brief.md` for the target role, positioning, and work-authorisation statement.
2. Use `02_candidate_evidence/` to verify or tailor any experience claim.
3. The later PDF in `03_application/resume/WentworthLiu_CV.pdf` is the submitted resume, per the candidate's 2026-10-14 confirmation that the latest PDF was used. The earlier text-equivalent export is retained in `work/older-exports/`.

## Maintenance rule

Keep only the current submission-ready resume and message in `03_application/`. Iteration files, LaTeX build outputs (`.aux`, `.log`, `.out`), superseded drafts, and temporary code clones should not be retained here.
