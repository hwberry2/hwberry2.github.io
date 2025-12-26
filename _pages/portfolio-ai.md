---
title: AI
permalink: /portfolio/ai/
layout: single
classes: wide
author_profile: false
sidebar:
  nav: "portfolio"
---

## Overview
A collection of custom AI tools and experiments designed to augment workflows, reasoning, and productivity.

## Examples
- Custom GPTs
- Prompt-driven tools
- Domain-specific assistants

## Projects

{% assign items = site.portfolio | where: "portfolio_category", "AI" | sort: "date" | reverse %}
<div class="grid__wrapper">
{% for p in items %}
  {% include project-card.html project=p %}
{% endfor %}
</div>
