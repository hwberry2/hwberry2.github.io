---
layout: single
title: "MT5 Forex.com Trading Bot"
excerpt: "An MQL5 Expert Advisor built for Forex.com/MetaTrader 5 with modular trade execution and signal logic."
date: 2025-01-03
portfolio_category: Code
tags: [code, mql5, mt5, trading, forex]

permalink: /portfolio/code/mt5-forex-bot/

header:
  teaser: /assets/images/portfolio/projects/code-forex-bot/teaser.png
  overlay_image: /assets/images/portfolio/projects/code-forex-bot/hero.png
  overlay_filter: 0.45
  caption: "MT5 Forex.com Trading Bot"

# Optional external links (project-card.html already supports these)
gem_url:
code_url:
demo_url:
---

## Overview
MT5 Forex.com Trading Bot is an MQL5 Expert Advisor for MetaTrader 5 (Forex.com-compatible) designed to automate trade management using clean, modular architecture. It separates signal generation, trade execution, and logging/notifications so strategies can be iterated safely without rewriting the plumbing.

## What it does
- Runs as a MetaTrader 5 Expert Advisor (MQL5) built specifically to work with Forex.com’s MT5 environment (including netting-mode constraints).
- Uses a modular design (signal → confirmation → execution → monitoring) to keep strategy logic and order-handling decoupled.
- Supports indicator-driven entries/exits (e.g., MACD/RSI-style logic) with optional next-candle confirmation to reduce false triggers.
- Includes risk and trade safeguards (spread checks, cooldowns, optional stop models/trailing logic depending on configuration).
- Provides observability via structured logging (e.g., CSV/event logs) plus optional runtime debug output for faster iteration.
- Sends actionable notifications on key events (signal detected, trade opened/closed, exits triggered), depending on configuration.
- Designed for incremental strategy development: adjust rules and parameters without changing the execution layer.

## Implementation notes
- Platform: MetaTrader 5 (MQL5)
- Broker: Forex.com
- Key features: modular request/notification/logging, signal confirmation, etc.

## Code
Example Code:
- link via `code_url`.