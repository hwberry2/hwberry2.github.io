---
layout: single
title: "Gemini Gem – Seating Chart Generator"
excerpt: "Generates classroom seating charts from constraints (class size, behavior dynamics, teacher preferences)."
date: 2025-01-01
portfolio_category: AI
tags: [ai, gemini, education, classroom]

# If your URL differs, set it explicitly (recommended)
permalink: /portfolio/gemini-gem-seating-chart/

# Left docs-style sidebar
sidebar:
  nav: "portfolio"

# Right “On this page”
toc: true
toc_label: "On this page"
toc_sticky: true

# Optional docs polish
breadcrumbs: false
share: false
related: false

# DOCS-STYLE HERO (title over image + overlay)
header:
  overlay_image: /assets/images/portfolio/gemini-gem-seating-chart-placeholder.png
  overlay_filter: 0.45
  teaser: /assets/images/portfolio/gemini-gem-seating-chart-placeholder.png
  caption: "Gemini Gem – Seating Chart Generator"
  actions:
    - label: "Open Gem"
      url: "https://gemini.google.com/gem/1xVSuAXLgEiXNQXdCRYwHse1MfAxjZSsd?usp=sharing"
    # Uncomment when you have links
    # - label: "Code"
    #   url: "https://github.com/..."
    # - label: "Demo"
    #   url: "https://..."

gem_url: https://gemini.google.com/gem/1xVSuAXLgEiXNQXdCRYwHse1MfAxjZSsd?usp=sharing
code_url:
demo_url:
---
<h1>Gemini Gem – Seating Chart Generator</h1>
## What it does
This Gemini Gem generates classroom seating charts from structured inputs and constraints so you can produce a workable chart quickly and iterate when student dynamics change.

## Best use cases
- Start-of-term seating for new rosters
- Mid-quarter resets after behavior or social dynamics shift
- Designing seating to support specific instructional routines (partner talk, lab groups, etc.)

## Inputs

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
