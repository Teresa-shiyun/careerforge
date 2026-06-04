# CareerForge / 职业项目规划工具

## Overview / 项目简介

CareerForge is a local-first browser prototype for comparing a CV or experience summary with a target job description. It highlights skill signals, ranks gaps, suggests portfolio project ideas and drafts CV bullets that the user can edit.

CareerForge 是一个本地运行的求职准备工具。用户可以粘贴自己的简历经历和目标岗位 JD，页面会分析技能信号、排序技能缺口，并给出作品集项目建议和可编辑的 CV bullet 草稿。

## Why I Built It / 项目背景

I built this while preparing job-application materials. I wanted a small tool that connects job descriptions with concrete project planning, instead of only giving broad career advice.

我做这个项目是为了整理求职材料时更清楚地看出“目标岗位需要什么”和“我还缺什么项目证据”。它不是泛泛的职业建议工具，而是把 JD 需求转成更具体的项目规划。

## Features / 功能

- Paste CV / experience text and a target job description.
- Extract skill signals with a local rule-based dictionary.
- Show a match score and skill radar.
- Rank skill gaps by relevance to the job description.
- Generate project suggestions in balanced, technical-depth and product-focused modes.
- Draft editable CV bullet points.
- Export the analysis as JSON.

- 粘贴简历、项目经历或个人背景文本，以及目标岗位 JD。
- 使用本地规则词典提取技能信号。
- 显示匹配分数和技能雷达。
- 根据岗位相关性排序技能缺口。
- 支持平衡、技术深度、产品表达三种项目建议模式。
- 生成可继续手动修改的 CV bullet 草稿。
- 支持把分析结果导出为 JSON。

## Tech Stack / 技术栈

- HTML
- CSS
- Vanilla JavaScript
- Browser local execution, no backend

## Current Status / 当前状态

MVP / frontend prototype. It runs directly in the browser and does not call a real model. The analysis is rule-based, so it is useful for planning but should not be treated as a formal hiring assessment.

当前是浏览器端 MVP 和前端原型，可以直接打开运行，不调用真实模型。分析逻辑基于规则词典，适合做求职准备辅助，不适合作为正式招聘评估工具。

## How to Run / 本地运行

Open `index.html` in a browser.

No package installation is required.

直接用浏览器打开 `index.html` 即可运行，不需要安装依赖，也不需要后端或 API key。

## Screenshots / 项目截图

![CareerForge dashboard](docs/assets/careerforge-dashboard.png)

## Limitations / 当前限制

- No PDF or Word CV parsing yet.
- Skill matching depends on the built-in keyword dictionary.
- No backend, database or real LLM integration.
- Generated CV bullets still need manual editing.

- 还没有 PDF 或 Word 简历解析。
- 技能匹配依赖内置关键词词典。
- 没有后端、数据库或真实 LLM 调用。
- 生成的 CV bullet 仍然需要人工修改。

## Roadmap / 后续计划

- Add PDF / Word CV parsing.
- Improve the skill dictionary and matching rules.
- Add optional LLM support for more natural project descriptions.
- Save multiple target roles and compare results.
- Generate a study plan from selected gaps.

- 增加 PDF / Word 简历解析。
- 改进技能词典和匹配规则。
- 可选接入 LLM，让项目描述更自然。
- 保存多个目标岗位并做对比。
- 根据技能缺口生成学习计划。

## What I Learned / 我的收获

This project helped me turn job descriptions into more concrete project requirements. It also showed me that a local rule-based tool can already be useful before adding a backend or an LLM.

这个项目让我练习了把 JD 中的技能要求拆成更具体的项目任务。它也让我看到，在没有后端和 LLM 的情况下，本地规则工具也能完成一部分求职准备工作。

## License / 许可证

MIT. See [LICENSE](LICENSE).
