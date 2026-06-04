# CareerForge

CareerForge is a local-first browser prototype for comparing a CV or experience summary with a target job description. It highlights skill signals, ranks gaps, suggests portfolio project ideas and drafts CV bullets that the user can edit.

## Why I Built It

I built this while preparing job-application materials. I wanted a small tool that connects job descriptions with concrete project planning, instead of only giving broad career advice.

## What It Does

- Accepts pasted CV / experience text and a target job description.
- Extracts skill signals with a local rule-based dictionary.
- Shows a match score and skill radar.
- Ranks skill gaps by relevance to the job description.
- Generates project suggestions in balanced, technical-depth and product-focused modes.
- Drafts editable CV bullet points.
- Exports the analysis as JSON.

## Tech Stack

- HTML
- CSS
- Vanilla JavaScript
- Browser local execution, no backend

## Current Status

MVP / frontend prototype. It runs directly in the browser and does not call a real model. The analysis is rule-based, so it is useful for planning but should not be treated as a formal hiring assessment.

## How to Run

Open `index.html` in a browser.

No package installation is required.

## Screenshot

![CareerForge dashboard](docs/assets/careerforge-dashboard.png)

## Limitations

- No PDF or Word CV parsing yet.
- Skill matching depends on the built-in keyword dictionary.
- No backend, database or real LLM integration.
- Generated CV bullets still need manual editing.

## Future Improvements

- Add PDF / Word CV parsing.
- Improve the skill dictionary and matching rules.
- Add optional LLM support for more natural project descriptions.
- Save multiple target roles and compare results.
- Generate a study plan from selected gaps.

## What I Learned

This project helped me turn job descriptions into more concrete project requirements. It also showed me that a local rule-based tool can already be useful before adding a backend or an LLM.

## 中文简介

CareerForge 是一个求职准备辅助工具。用户可以粘贴自己的简历经历和目标岗位 JD，页面会在本地分析技能匹配度、技能缺口，并给出作品集项目建议和 CV bullet 草稿。当前版本是浏览器端 MVP，不是正式招聘评估工具。

作者：Shiyun Ni

## License

MIT. See [LICENSE](LICENSE).
