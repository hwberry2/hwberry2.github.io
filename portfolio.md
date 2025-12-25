---
title: Portfolio
permalink: /portfolio/
layout: single
classes: wide
author_profile: false
---

A curated selection of digital assets including code, documents, AI tools, experiments, and prototypes.

<div class="feature__wrapper">

  <div class="feature__item">
    <div class="archive__item-teaser">
      <a href="{{ '/portfolio/ai/' | relative_url }}">
        <img src="{{ '/assets/images/portfolio/ai-placeholder.png' | relative_url }}" alt="AI">
      </a>
    </div>
    <h2 class="archive__item-title">
      <a href="{{ '/portfolio/ai/' | relative_url }}">AI</a>
    </h2>
    <p class="archive__item-excerpt">
      Custom GPTs, prompt-driven tools, and domain-specific assistants.
    </p>
  </div>

  <div class="feature__item">
    <div class="archive__item-teaser">
      <a href="{{ '/portfolio/code/' | relative_url }}">
        <img src="{{ '/assets/images/portfolio/code-placeholder.png' | relative_url }}" alt="Code">
      </a>
    </div>
    <h2 class="archive__item-title">
      <a href="{{ '/portfolio/code/' | relative_url }}">Code</a>
    </h2>
    <p class="archive__item-excerpt">
      Reusable utilities, automation, and modular tooling examples.
    </p>
  </div>

  <div class="feature__item">
    <div class="archive__item-teaser">
      <a href="{{ '/portfolio/docs/' | relative_url }}">
        <img src="{{ '/assets/images/portfolio/docs-placeholder.png' | relative_url }}" alt="Docs">
      </a>
    </div>
    <h2 class="archive__item-title">
      <a href="{{ '/portfolio/docs/' | relative_url }}">Docs</a>
    </h2>
    <p class="archive__item-excerpt">
      Guides, documentation, and structured reference materials.
    </p>
  </div>

</div>

<hr>

<h2>All Projects</h2>

{% assign items = site.portfolio | sort: "date" | reverse %}
<div class="grid__wrapper">
{% for p in items %}
  {% include project-card.html project=p %}
{% endfor %}
</div>
