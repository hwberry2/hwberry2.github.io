---
layout: single
title: "OpenAI API Integration – Python Smoke Test"
excerpt: "Secure OpenAI API integration in Python with environment-based key management, a connectivity smoke test, and a minimal summarization example."
date: 2025-12-29
portfolio_category: AI
tags: [ai, openai, api, python, security]

header:
  teaser: /assets/images/portfolio/projects/openai-api-integration/teaser.png
  image: /assets/images/portfolio/projects/openai-api-integration/teaser.png
  image_description: "OpenAI API Integration Demo"
classes: wide
---

## Overview

This repository demonstrates secure, production-style usage of the OpenAI API in Python using an environment variable–based API key and the OpenAI Responses API. It includes a pass/fail smoke test and a minimal summarization example.

## What it demonstrates
- Secure API key handling via environment variables (no secrets in source control)
- Authenticated API calls using the official OpenAI Python client
- A minimal smoke test to confirm end-to-end connectivity
- A small, concrete example use case (text summarization)
- Reproducible setup suitable for extension

## Links
- **View Code on GitHub:** https://github.com/hwberry2/open-ai-smoke-test