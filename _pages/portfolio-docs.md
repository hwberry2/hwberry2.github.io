---
title: Docs
permalink: /portfolio/docs/
layout: single
classes: wide
author_profile: false
---

## Overview
Structured technical documentation, guides, references, and written artifacts.

## Examples
- Technical guides
- Architecture notes
- Reference documentation

## Projects

{% assign items = site.portfolio | where: "portfolio_category", "Docs" | sort: "date" | reverse %}
<div class="grid__wrapper">
{% for p in items %}
  {% include project-card.html project=p %}
{% endfor %}
</div>
