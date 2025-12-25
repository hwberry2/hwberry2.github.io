---
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

## What it does
This Gemini Gem generates classroom seating charts from structured inputs and constraints, so you can produce a workable chart quickly and iterate when student dynamics change.

## Open the Gem
- [Launch the Seating Chart Generator Gem]({{ page.gem_url }})

## Best use cases
- Start-of-term seating for new rosters
- Mid-quarter resets after behavior or social dynamics shift
- Designing seating to support specific instructional routines (partner talk, lab groups, etc.)

## What to provide (inputs)
Copy/paste your roster and include any constraints you want the Gem to respect.

**Roster**
- Student names (one per line)

**Room / layout**
- Rows × columns (or number of seats)
- Any “blocked” seats (if applicable)

**Constraints (optional, but where the Gem shines)**
- Keep-apart pairs (e.g., A not near B)
- Keep-together groups (e.g., reading support group)
- Front-row placements (vision, attention, accommodations)
- “Teacher zone” proximity requirements
- Balance constraints (mix of personalities, support needs, etc.)

## What you get back (outputs)
- A clear grid-style seating chart (by row/seat)
- A numbered or labeled list version (if requested)
- Optional alternate versions if you ask for multiple drafts

## Recommended prompt pattern
Use this format to get consistent results:

> **Layout:** 5 rows × 6 columns (30 seats)  
> **Roster:** (paste names)  
> **Keep apart:** (pairs)  
> **Keep together:** (groups)  
> **Front row:** (names)  
> **Notes:** (anything else)  
> **Output:** grid + numbered list

## Notes
This is part of a growing set of Gemini Gems focused on classroom workflow automation. As you add more Gems, keep the naming pattern: **“Gemini Gem – …”** so they group cleanly in your portfolio.
