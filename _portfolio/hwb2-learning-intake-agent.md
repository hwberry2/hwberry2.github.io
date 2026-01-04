---
layout: single
title: "hwb2 Learning Intake Agent"
excerpt: "Paste an intake JSON payload and get a routed, production-style response via a live ChatKit embed."
date: 2026-01-04
portfolio_category: AI
tags: [ai, openai, agents, chatkit, tutoring, intake, automation]

permalink: /portfolio/hwb2-learning-intake-agent/

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
  overlay_image: /assets/images/portfolio/projects/hwb2-learning-intake-agent/hero.png
  overlay_filter: 0.45
  teaser: /assets/images/portfolio/projects/hwb2-learning-intake-agent/teaser.png
  caption: "hwb2 Learning Intake Agent"
  actions:
    - label: "Open Intake Agent"
      url: "/portfolio/hwb2-learning-intake-agent/"

# Optional buttons used by your project-card include
code_url:
demo_url: /portfolio/hwb2-learning-intake-agent/

# ChatKit scripts (page-only)
page_js:
  - https://cdn.platform.openai.com/deployments/chatkit/chatkit.js
  - /assets/js/chatkit-init.js
  - /assets/js/json-example.js
---
<openai-chatkit
  id="hwb2-chat"
  style="display:block;width:100%;height:500px;"
></openai-chatkit>

<h2>Example Intake JSON (copy/paste)</h2>

<p>Copy this JSON and paste it into the chat to see the agent output.</p>

<div class="json-example">
  <button type="button" class="json-copy" data-copy-json>Copy</button>
  <textarea id="json-example-text" readonly rows="14">
{
  "form_json": {
    "timestamp": "2026-01-03T19:20:00Z",
    "submitter_name": "Jordan Lee",
    "recipient_email": "jordan.lee@example.com",
    "relationship_to_student": "Parent / Guardian",
    "student_first_name": "Ava",
    "student_grade_level": "7th",
    "primary_subject": "Math",
    "has_google_accounts": false,
    "help_description": "We don’t have Google accounts set up yet. Can we still do tutoring? My student needs help with proportions.",
    "acknowledgement": "Yes"
  }
}
  </textarea>
</div>