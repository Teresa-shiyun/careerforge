# CareerForge MVP

CareerForge 是一个本地化职业项目规划器：用户粘贴自己的简历/经历和目标岗位 JD，系统会在浏览器内完成技能抽取、岗位匹配、缺口排序、项目建议和 CV bullet 生成。MVP 不依赖真实 API，适合后续接入 LLM、RAG、向量数据库或招聘平台数据。

## 项目亮点

- Local-first：所有分析都在浏览器中完成，无后端、无 API key。
- Portfolio-ready：输出可写进 GitHub README 和 CV 的项目方案与经历描述。
- Explainable scoring：使用技能词典和岗位需求权重生成可解释的匹配度。
- Extendable：可以很自然地扩展到真实 LLM API、简历 PDF 解析、向量检索和用户账户系统。

## 功能

- 简历与岗位描述输入
- 技能雷达与综合匹配度
- 技能缺口优先级排序
- 3 种项目生成模式：平衡、技术深度、产品表达
- CV bullet 自动生成
- JSON 分析报告导出

## 如何运行

直接用浏览器打开 `index.html` 即可。

## 适合写进 CV 的描述

- 设计并实现 CareerForge 本地化职业分析 MVP，将简历与岗位描述解析为多类技能信号，输出可解释的岗位匹配度。
- 构建技能缺口优先级算法，根据目标岗位自动生成项目路线图、技术栈建议和 CV bullet。
- 完成无后端、无真实 API 的前端产品闭环，支持示例数据、实时分析、模式切换和 JSON 报告导出。

## 后续迭代方向

- 接入 OpenAI API 或本地 LLM，生成更自然的项目方案和简历表述。
- 支持 PDF/Word 简历解析。
- 加入向量数据库，做真实 RAG 项目证据检索。
- 生成 GitHub README、项目 Kanban 和学习计划。
- 加入登录、多版本简历管理和岗位投递追踪。
