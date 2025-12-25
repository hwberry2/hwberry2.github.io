---
layout: single
title: "Gemini Gem – Seating Chart Generator"
excerpt: "Generates classroom seating charts from constraints (class size, behavior dynamics, teacher preferences)."
date: 2025-01-01
portfolio_category: AI
tags: [ai, gemini, education, classroom]

classes: wide

header:
  teaser: /assets/images/portfolio/gemini-gem-seating-chart-placeholder.png
  overlay_image: /assets/images/portfolio/gemini-gem-seating-chart-placeholder.png
  overlay_filter: 0.45

gem_url: https://gemini.google.com/gem/1xVSuAXLgEiXNQXdCRYwHse1MfAxjZSsd?usp=sharing
code_url:
demo_url:

toc: true
toc_sticky: true
---
<div style="max-width: 900px; margin: 0 auto;">
<div style="margin-bottom:1.5rem;">
  <!-- button row -->
  <p style="text-align:left; margin-bottom: 0.75rem;">
    <a class="btn btn--primary btn--large" href="{{ page.gem_url }}" target="_blank" rel="noopener">
      Open the Seating Chart Generator Gem
    </a>
  
    {% if page.code_url %}
      <a class="btn btn--large" href="{{ page.code_url }}" target="_blank" rel="noopener">Code</a>
    {% endif %}
  
    {% if page.demo_url %}
      <a class="btn btn--large" href="{{ page.demo_url }}" target="_blank" rel="noopener">Demo</a>
    {% endif %}
  </p>


  <div class="notice--primary">
    <strong>At a glance</strong>
    <ul>
      <li><strong>Goal:</strong> Generate workable seating charts fast from constraints.</li>
      <li><strong>Best for:</strong> New rosters, mid-quarter resets, and routine-driven seating.</li>
      <li><strong>Output:</strong> Grid chart + optional numbered list.</li>
    </ul>
  </div>
</div>
</div>

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
