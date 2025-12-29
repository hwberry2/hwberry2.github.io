---
layout: single
title: "OpenAI API Integration – Python Smoke Test"
excerpt: "Secure OpenAI API integration in Python with environment-based key management, a connectivity smoke test, and a minimal summarization example."
date: 2025-12-29
portfolio_category: AI
tags: [ai, openai, api, python, security]

# If your URL differs, set it explicitly (recommended)
permalink: /portfolio/openai-api-integration-demo/

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
# NOTE: overlay_image behaves differently than header.image: it reads as a hero/cover with title overlay.
header:
  overlay_image: /assets/images/portfolio/projects/openai-api-integration/hero.png
  overlay_filter: 0.45
  teaser: /assets/images/portfolio/projects/openai-api-integration/teaser.png
  caption: "OpenAI API Integration – Python Smoke Test"
  actions:
    - label: "Code"
      url: "https://github.com/hwberry2/open-ai-smoke-test"

code_url: https://github.com/hwberry2/open-ai-smoke-test
demo_url:
gem_url:
---
<div class="page__title">OpenAI API Integration – Python Smoke Test</div>

### What it does
This project demonstrates secure, production-style usage of the OpenAI API in Python using an environment variable–based API key and the OpenAI Responses API. It includes a minimal pass/fail smoke test plus a small summarization example to show how validated API access extends into application logic.

### Best use cases
- Verifying authenticated OpenAI API access in a new environment
- Establishing secure key handling patterns (environment variables / `.env`)
- Providing a clean baseline repo for future AI features (tools, agents, tutoring workflows, etc.)

### What’s included

#### 1) API connectivity smoke test (`smoke_test.py`)
- Confirms `OPENAI_API_KEY` is present
- Sends a minimal request to the Responses API
- Returns a clean success signal (or fails fast)

#### 2) Example summarization script (`summarize.py`)
- Runs a simple “3 bullet points” summarization task
- Demonstrates response parsing and output handling
- Uses the same authenticated client configuration

### Security / hygiene
- API keys are not committed to source control
- `.env` and `.venv/` are ignored via `.gitignore`
- Dependencies are explicitly listed in `requirements.txt`

### How to run

#### Setup
```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt