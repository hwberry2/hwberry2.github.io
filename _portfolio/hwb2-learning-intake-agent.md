---
title: hwb2 Learning Intake Agent
layout: single
permalink: /portfolio/hwb2-learning-intake-agent/
page_js:
  - https://cdn.platform.openai.com/deployments/chatkit/chatkit.js
  - /assets/js/chatkit-init.js
---
<h2>Example Intake JSON (copy/paste)</h2>

<p>Copy this JSON and paste it into the chat to see the agent output.</p>

<div class="json-example">
  <button type="button" class="json-copy" onclick="copyJsonExample()">Copy</button>
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

<script>
  function copyJsonExample() {
    const el = document.getElementById("json-example-text");
    el.focus();
    el.select();
    document.execCommand("copy");
  }
</script>
<openai-chatkit
  id="hwb2-chat"
  style="display:block;width:100%"
></openai-chatkit>