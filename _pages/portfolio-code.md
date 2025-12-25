---
title: Code
permalink: /portfolio/code/
layout: single
classes: wide
author_profile: false
---

## Overview
Reusable, well-structured code samples, utilities, and tooling projects.

## Examples
- Modular tooling
- Automation scripts
- Reusable libraries and helpers

## Projects

{% assign items = site.portfolio | where: "portfolio_category", "Code" | sort: "date" | reverse %}
<div class="grid__wrapper">
{% for p in items %}
  {% include project-card.html project=p %}
{% endfor %}
</div>
