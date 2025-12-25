---
layout: single
title: "Gemini Gem – Seating Chart Generator"
excerpt: "Generates classroom seating charts from constraints (class size, behavior dynamics, teacher preferences)."
date: 2025-01-01
portfolio_category: AI
tags: [ai, gemini, education, classroom]

header:
  teaser: /assets/images/portfolio/gemini-gem-seating-chart-placeholder.png
  overlay_image: /assets/images/portfolio/gemini-gem-seating-chart-placeholder.png
  overlay_filter: 0.25

gem_url: https://gemini.google.com/gem/1xVSuAXLgEiXNQXdCRYwHse1MfAxjZSsd?usp=sharing
# code_url: https://github.com/hwberry2/<repo>
# demo_url: https://<live-demo>

classes: wide
toc: true
toc_sticky: true
---

{% include notice.html type="primary" text="**Quick link:** [Open the Seating Chart Generator Gem]({{ page.gem_url }}){: .btn .btn--primary .btn--large}" %}

## What it does
This Gemini Gem generates classroom seating charts from structured inputs and constraints so you can produce a workable chart quickly and iterate when student dynamics change.

## Best use cases
- Start-of-term seating for new rosters  
- Mid-quarter resets after behavior or social dynamics shift  
- Designing seating to support specific instructional routines (partner talk, lab groups, etc.)

## Inputs
Provide as much as you want—the Gem works with minimal inputs, but performs best with constraints.

### Roster
- Student names (one per line)

### Room and layout
- Rows × columns (or total seats)
- Any blocked/unused seats (if applicable)

### Constraints
- Keep-apart pairs (e.g., A not near B)
- Keep-together groups (e.g., reading support group)
- Front-row requirements (vision, attention, accommodations)
- “Teacher zone” proximity requirements
- Balance constraints (mix of personalities, support needs, etc.)

## Outputs
- A readable grid-style seating chart (row/seat)
- A numbered list version (if requested)
- Optional alternate charts if you ask for multiple drafts

## Recommended prompt pattern
Copy/paste and fill in:

```text
Layout: 5 rows × 6 columns (30 seats)

Roster:
- Name 1
- Name 2
- Name 3

Keep apart:
- Name 1 / Name 2

Keep together:
- Name 3 / Name 4 / Name 5

Front row:
- Name 6
- Name 7

Notes:
- Avoid pairing close friends.
- Prefer quiet students near the front.

Output: grid + numbered list
