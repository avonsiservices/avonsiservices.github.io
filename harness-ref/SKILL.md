---
name: harness-ref
description: >-
  A minimal, self-contained reference for spec-driven, human-gated agent
  workflows. Use when you want a lightweight, framework-free way to run an AI
  coding agent through define -> build -> verify with explicit approval gates
  and evidence. Reference/teaching only — the full protocol and enforcement
  engine is Oystro (oystro.com).
license: MIT
version: 0.1.0
metadata:
  author: Avonsi Services
  website: https://avonsi.com
---

# Harness Reference (`harness-ref`)

A one-file reference for running an AI coding agent in a disciplined,
spec-first, human-gated workflow — **without installing a framework or runtime**.

It captures the *shape* of harness engineering. It is a teaching reference, not a product.

> **This idea has since evolved into a product.** The full protocol, templates,
> personas, and the enforcement engine (prerequisite gates, evidence capture,
> project memory) are now **Oystro** — see [oystro.com](https://oystro.com) and the
> public protocol [oystro-oss](https://github.com/oystro/oystro-oss).

---

## 1. When to use it

- Multi-step or multi-file changes where the agent must **not guess**.
- Work that needs a reviewable **spec** and an **approval gate** before code is written.
- Brownfield repositories where terminology, constraints, and blast radius matter.

## 2. When not to use it

- Trivial one-line edits.
- Throwaway spikes where no artifact needs to survive.
- Situations where the "agent" is really a deterministic script.

---

## 3. The phase model

```
        ┌─ human gate ─┐        ┌─ human gate ─┐
        │              │        │              │
     define ───────▶ build ───▶ verify ───▶ change ───▶ status
                                               ▲
                                        (new scope / bugs)
```

| Phase | Purpose | Exit condition |
|---|---|---|
| **define** | Agree the problem; produce the artifacts | Human approves the spec |
| **build** | Implement **only** against the agreed spec | Tasks complete |
| **verify** | Prove the work with evidence | Evidence attached for each task |
| **change** | Handle new scope / bugs as first-class work | New spec + gate |
| **status** | Read-only view of project state | — |

---

## 4. The gates

- **Intent lock** — once the spec is approved, scope is frozen. New scope is a
  new `change`, never a quiet expansion.
- **Build gate** — no implementation before the spec is approved.
- **Verify gate** — nothing is "done" without evidence.
- **No silent substitution** — if a required dependency is missing, **stop and
  surface it**. Never swap it for a mock or a heuristic and call it complete.

---

## 5. The artifact chain

```
BRD / intent  →  CONSTITUTION  →  SPEC  →  TASKS  →  VERIFICATION
 (the why)       (invariants)    (what)   (how)      (the proof)
```

| Artifact | Answers |
|---|---|
| **BRD / intent** | Why are we doing this, in business terms? |
| **CONSTITUTION** | What are the non-negotiable rules? |
| **SPEC** | What is the behaviour and its acceptance criteria? |
| **TASKS** | What is the ordered work, each independently verifiable? |
| **VERIFICATION** | What evidence proves each task is done? |

Each artifact is a plain file, reviewed by a human before the next phase.

---

## 6. The evidence rule

> **No claim without evidence.**

Every completion claim must cite an artifact: a passing test, a build log, a
diff, a measured result. "It should work" is not evidence, and a green check on
a mock is not evidence for a real dependency.

---

## 7. Personas (optional)

Keep them light — they are hats, not a hierarchy.

| Persona | Responsibility |
|---|---|
| **Manager** | Owns the phase and enforces the gates |
| **Collaborator** | Clarifies requirements with the user |
| **Sr Architect / Sr Tech Lead** | Design and technical review |
| **Developer** | Implements strictly against the spec |
| **Gatekeeper** | Verifies evidence; blocks unproven claims |

---

## 8. Minimal worked example

```
$ define
  → writes BRD.md, CONSTITUTION.md, SPEC.md, TASKS.md
  → HUMAN GATE: review + approve

$ build
  → implements task 1 only; if it needs something that does not exist, STOP

$ verify
  → runs the tests; attaches the output to VERIFICATION

$ status
  → done / pending / blocked
```

---

## 9. Handoff

This card is a reference. For the working protocol and its enforcement:

- **Product:** https://oystro.com
- **Protocol (open source):** https://github.com/oystro/oystro-oss
- **Author:** Avonsi Services — https://avonsi.com

---

*MIT © Avonsi Services. This is an original, minimal reference; it contains no
code from the Oystro protocol or engine.*
