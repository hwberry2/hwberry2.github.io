---
title: "hwb2 Learning"
permalink: /portfolio/hwb2-learning/
layout: single
classes: wide
author_profile: false
sidebar:
  nav: "portfolio"
excerpt: >
  AI-augmented math tutoring that scales human instruction without replacing it.
header:
  image: /assets/images/portfolio/projects/hwb2-learning/hero.png
  image_description: "hwb2 Learning"
---

## What It Is

**hwb2 Learning** is an AI-augmented math tutoring platform I am actively building.
It automates intake, first-pass feedback, and progress tracking so that **human tutoring time is reserved for diagnosis, strategy, and explanation**.

This is not “AI tutoring instead of a teacher.” The goal is to **scale responsible, human-led instruction** by removing repetitive overhead.

---

## Problem → Insight → Solution

### Problem
- One-to-one tutoring does not scale
- Administrative overhead consumes instructional time
- Feedback can be delayed and inconsistent

### Insight
A large portion of tutoring effort is repetitive cognitive labor that does not require human judgment:
intake triage, rubric-like feedback patterns, and progress summaries.

AI is best used **before and after** sessions—not during—so the live session stays human and high-trust.

### Solution
- Standardized Google-based intake
- AI-generated first-pass feedback (structured, reviewable)
- Human-led tutoring focused on the highest leverage moments

---

## Live Demo (v0)

**Status:** Limited scope, intentionally constrained.

**Demo link:** _Coming soon_
(When ready, I will link a public v0 workflow here—likely an interest/intake form or a constrained “submit response → receive structured feedback” demo.)

**What is real today**
- Repeatable ingestion workflow (intake → structured processing)
- Feedback generation using a consistent template
- Foundations for progress tracking and follow-up

**What is still manual / in progress**
- Human review loop and refinement
- Classroom-scale workflows and dashboards
- Image/PDF ingestion

---

## Architecture Snapshot

### Current Stack
- **Google Forms → Google Sheets** for intake
- **Python backend** for processing and orchestration
- **OpenAI Responses API** for structured feedback generation
- **Human review loop** (manual at v0)

### Planned Extensions
- Image and PDF ingestion (including handwritten work)
- Workflow automation (parent/student onboarding + follow-ups)
- Student progress dashboards and reporting
- Classroom-scale routines and data exports

---

## Development Status

- v0 ingestion pipeline: **in active development**
- Building and iterating: **weekly**
- Initial private alpha: **planned**
- Public beta: **TBD**

---

## Technical Details

**Repository:** _Link coming soon_
(I will publish a clean repo once the v0 demo workflow is stable and appropriately scoped for public viewing.)

What the implementation emphasizes:
- Secure API usage (keys, environments, minimal exposure)
- Structured prompt design (repeatable, testable outputs)
- Small-scope v0 iteration before scaling features

---

## Build Log

- **Dec 2025** — Product framing + workflow planning
- **Jan 2026** — v0 ingestion + structured feedback iteration
- **Feb 2026** — Demo hardening + automation hooks (planned)
- **Spring 2026** — Image/PDF ingestion exploration (planned)