---
title: Coding
permalink: /portfolio/code/
layout: single
classes: wide
author_profile: false
sidebar:
  nav: "portfolio"
---

## Overview
Reusable utilities, automation, and small coding experiments.

## Examples
- Scripts and tooling
- Automation helpers
- Prototypes and proofs of concept

## Projects

{% assign code_items = site.portfolio | where: "portfolio_category", "Code" %}
{% assign tagged_items = site.portfolio | where_exp: "p", "p.tags contains 'code'" %}
{% assign items = code_items | concat: tagged_items | uniq | sort: "date" | reverse %}
<div class="grid__wrapper">
{% for p in items %}
  {% include project-card.html project=p %}
{% endfor %}
</div>