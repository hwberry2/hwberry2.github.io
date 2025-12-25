---
title: Portfolio
permalink: /portfolio/
layout: single
classes: wide
author_profile: false

feature_row:
  - image_path: /assets/images/portfolio/ai-placeholder.png
    alt: "AI"
    title: "AI Projects"
    excerpt: "Custom GPTs, prompt-driven tools, and domain-specific assistants."
    url: /portfolio/ai/
    btn_label: "View"
    btn_class: "btn--primary"
  - image_path: /assets/images/portfolio/code-placeholder.png
    alt: "Code"
    title: "Coding Experiments"
    excerpt: "Reusable utilities, automation, and modular tooling examples."
    url: /portfolio/code/
    btn_label: "View"
    btn_class: "btn--primary"
  - image_path: /assets/images/portfolio/docs-placeholder.png
    alt: "Docs"
    title: "Training Docs"
    excerpt: "Guides, documentation, and structured reference materials."
    url: /portfolio/docs/
    btn_label: "View"
    btn_class: "btn--primary"
---

A curated selection of digital assets including code, documents, AI tools, experiments, and prototypes.

{% include feature_row %}

<hr>

<h2>All Projects</h2>

{% assign items = site.portfolio | sort: "date" | reverse %}
<div class="grid__wrapper">
{% for p in items %}
  {% include project-card.html project=p %}
{% endfor %}
</div>
