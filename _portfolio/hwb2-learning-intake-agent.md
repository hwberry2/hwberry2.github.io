---
title: hwb2 Learning Intake Agent
layout: single
permalink: /portfolio/hwb2-learning-intake-agent/
portfolio_category: AI
date: 2026-01-04
excerpt: "Paste an intake JSON payload and see the agent generate the correct routed response (ChatKit embed)."
header:
  teaser: /assets/images/teasers/hwb2-intake-agent.png
# Optional buttons (only add if you want them)
# demo_url: /portfolio/hwb2-learning-intake-agent/
# code_url: https://github.com/<you>/<repo>
# gem_url: https://<link-if-relevant>
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