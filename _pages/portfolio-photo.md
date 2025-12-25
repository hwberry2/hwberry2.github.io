---
title: Photography
permalink: /portfolio/photography/
layout: single
classes: wide
author_profile: false
---

## Overview
A collection of photography work organized by style and theme.

## Examples
- Street / candid
- Landscapes
- Architecture
- Portraits

## Projects

{% assign items = site.portfolio | where: "portfolio_category", "Photography" | sort: "date" | reverse %}
<div class="grid__wrapper">
{% for p in items %}
  {% include project-card.html project=p %}
{% endfor %}
</div>
