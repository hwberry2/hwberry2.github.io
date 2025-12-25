---
title: Coding
permalink: /portfolio/code/
layout: single
classes: wide
author_profile: false
---

## Overview
Reusable utilities, automation, and small coding experiments.

## Examples
- Scripts and tooling
- Automation helpers
- Prototypes and proofs of concept

## Projects

{% assign items = site.portfolio | where: "portfolio_category", "Code" | sort: "date" | reverse %}
<div class="grid__wrapper">
{% for p in items %}
  {% include project-card.html project=p %}
{% endfor %}
</div>
