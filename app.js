const resumeInput = document.querySelector("#resumeInput");
const jobInput = document.querySelector("#jobInput");
const resumeCount = document.querySelector("#resumeCount");
const jobCount = document.querySelector("#jobCount");
const analyzeBtn = document.querySelector("#analyzeBtn");
const loadDemo = document.querySelector("#loadDemo");
const exportBtn = document.querySelector("#exportBtn");
const matchScore = document.querySelector("#matchScore");
const scoreMeter = document.querySelector("#scoreMeter");
const skillRadar = document.querySelector("#skillRadar");
const gapList = document.querySelector("#gapList");
const projectList = document.querySelector("#projectList");
const bulletList = document.querySelector("#bulletList");
const segments = document.querySelectorAll(".segment");

const skillTaxonomy = [
  {
    name: "前端工程",
    keywords: ["react", "vue", "typescript", "javascript", "前端", "组件", "css", "html", "可视化"],
  },
  {
    name: "后端工程",
    keywords: ["node", "express", "python", "fastapi", "django", "java", "spring", "api", "数据库"],
  },
  {
    name: "AI 应用",
    keywords: ["ai", "llm", "prompt", "rag", "向量", "机器学习", "模型", "nlp", "智能体"],
  },
  {
    name: "云计算",
    keywords: ["cloud", "aws", "azure", "gcp", "docker", "kubernetes", "serverless", "云", "容器"],
  },
  {
    name: "数据分析",
    keywords: ["sql", "tableau", "power bi", "pandas", "数据", "指标", "分析", "实验", "ab test"],
  },
  {
    name: "产品设计",
    keywords: ["产品", "用户", "需求", "原型", "figma", "roadmap", "增长", "体验", "策略"],
  },
  {
    name: "工程质量",
    keywords: ["test", "测试", "ci", "cd", "监控", "性能", "安全", "日志", "可观测"],
  },
];

const demoResume = `本科计算机科学，做过 React + Node.js 校园二手交易平台，负责商品发布、搜索过滤和订单状态。
课程项目使用 Python 和 pandas 分析电商数据，输出转化漏斗和用户分群。
了解 Docker、Linux、SQL，参加过云计算课程，部署过简单的 Flask 服务。
希望申请 AI 应用开发或全栈工程师实习。`;

const demoJob = `AI 应用开发实习生：需要熟悉 React、TypeScript、Python，理解 LLM 应用开发、Prompt Engineering、RAG 或向量数据库。
能够设计用户工作流，搭建可演示的 MVP，具备 API 集成、数据处理、测试和部署经验。
加分项：Docker、云服务、可观测性、良好的项目文档和 GitHub 展示。`;

let lastResult = null;
let currentMode = "balanced";

function normalize(text) {
  return text.toLowerCase().replace(/\s+/g, " ");
}

function scoreCategory(text, category) {
  const source = normalize(text);
  const hits = category.keywords.filter((keyword) => source.includes(keyword.toLowerCase()));
  return {
    name: category.name,
    hits,
    score: Math.min(100, Math.round((hits.length / Math.max(3, category.keywords.length * 0.55)) * 100)),
  };
}

function analyze() {
  const resume = resumeInput.value.trim();
  const job = jobInput.value.trim();
  const resumeSkills = skillTaxonomy.map((category) => scoreCategory(resume, category));
  const jobSkills = skillTaxonomy.map((category) => scoreCategory(job, category));

  const merged = skillTaxonomy.map((category, index) => {
    const owned = resumeSkills[index];
    const required = jobSkills[index];
    const gap = Math.max(0, required.score - owned.score);
    return {
      name: category.name,
      owned: owned.score,
      required: required.score,
      gap,
      evidence: [...new Set([...owned.hits, ...required.hits])],
    };
  });

  const requiredSkills = merged.filter((item) => item.required > 0);
  const totalRequired = requiredSkills.reduce((sum, item) => sum + item.required, 0) || 1;
  const weightedFit = requiredSkills.reduce((sum, item) => {
    return sum + Math.min(item.owned, item.required);
  }, 0);
  const score = Math.round((weightedFit / totalRequired) * 100);

  lastResult = {
    score,
    generatedAt: new Date().toISOString(),
    skills: merged,
    gaps: merged.filter((item) => item.gap > 0).sort((a, b) => b.gap - a.gap),
    projects: generateProjects(merged, currentMode),
    bullets: generateBullets(merged, score),
  };

  localStorage.setItem("careerforge:last", JSON.stringify(lastResult));
  render(lastResult);
}

function generateProjects(skills, mode) {
  const topGaps = skills.filter((item) => item.gap > 0).sort((a, b) => b.gap - a.gap).slice(0, 3);
  const focus = topGaps.map((item) => item.name);
  const style = {
    balanced: "兼顾工程实现、产品闭环和可展示性",
    technical: "强调架构、性能、测试和工程深度",
    product: "强调用户场景、指标体系和交互体验",
  }[mode];

  return [
    {
      title: "Local RAG Career Copilot",
      summary: `构建一个无需真实 API 的 RAG 职业助手模拟器，围绕 ${focus.join("、") || "目标岗位"} 补齐项目证据，${style}。`,
      stack: ["React", "TypeScript", "Vector Mock", "LocalStorage"],
      deliverables: ["简历/JD 解析", "知识库检索模拟", "匹配评分", "一键导出报告"],
    },
    {
      title: "SkillGraph Portfolio Engine",
      summary: "把个人经历转换成技能图谱和项目路线图，自动生成 GitHub README、CV bullet 和学习优先级。",
      stack: ["JavaScript", "Graph Model", "CSS Dashboard", "JSON Export"],
      deliverables: ["技能雷达", "缺口排序", "项目推荐", "CV 表述生成"],
    },
    {
      title: "Cloud Resume Observability Lab",
      summary: "设计一个云端简历服务的可观测性实验室，用模拟日志展示部署、监控、告警和性能优化能力。",
      stack: ["Docker Mock", "Node.js", "Metrics UI", "Synthetic Logs"],
      deliverables: ["监控面板", "异常检测", "部署文档", "性能复盘"],
    },
  ];
}

function generateBullets(skills, score) {
  const strongest = [...skills].sort((a, b) => b.owned - a.owned).slice(0, 2);
  const gaps = [...skills].sort((a, b) => b.gap - a.gap).slice(0, 2);
  return [
    `设计并实现 CareerForge 本地化职业分析 MVP，将简历与岗位描述解析为 ${skills.length} 类技能信号，输出 ${score}% 综合匹配度。`,
    `构建技能缺口优先级算法，结合 ${gaps.map((item) => item.name).join("、")} 生成可执行项目路线图和 CV 表述。`,
    `完成无后端、无真实 API 的前端产品闭环，覆盖 ${strongest.map((item) => item.name).join("、")} 等能力展示，并支持 JSON 报告导出。`,
  ];
}

function render(result) {
  matchScore.textContent = `${result.score}%`;
  scoreMeter.style.width = `${result.score}%`;

  skillRadar.classList.remove("empty-state");
  skillRadar.innerHTML = result.skills
    .map(
      (skill) => `
        <div class="skill-row">
          <strong>${skill.name}</strong>
          <div class="bar" aria-label="${skill.name} 掌握度">
            <div style="width: ${skill.owned}%"></div>
          </div>
          <span>${skill.owned}%</span>
        </div>
      `,
    )
    .join("");

  gapList.classList.remove("empty-state");
  gapList.innerHTML = result.gaps.length
    ? result.gaps
        .map(
          (gap) => `
          <div class="gap-item">
            <strong>${gap.name}</strong>
            <p class="muted">岗位需求高于当前证据 ${gap.gap} 分，建议用一个可演示项目补足。</p>
            <div class="gap-meta">
              <span class="tag ${gap.gap > 55 ? "high" : "medium"}">${gap.gap > 55 ? "高优先级" : "中优先级"}</span>
              ${gap.evidence.slice(0, 4).map((item) => `<span class="tag">${item}</span>`).join("")}
            </div>
          </div>
        `,
        )
        .join("")
    : `<div class="gap-item"><strong>匹配良好</strong><p class="muted">当前输入没有明显技能缺口，可以强化项目指标和部署证据。</p></div>`;

  renderProjects(result.projects);

  bulletList.classList.remove("empty-state");
  bulletList.innerHTML = result.bullets.map((bullet) => `<div class="bullet-item">${bullet}</div>`).join("");
}

function renderProjects(projects) {
  projectList.classList.remove("empty-state");
  projectList.innerHTML = projects
    .map(
      (project) => `
        <article class="project-card">
          <strong>${project.title}</strong>
          <p class="muted">${project.summary}</p>
          <div class="project-meta">
            ${project.stack.map((item) => `<span class="tag">${item}</span>`).join("")}
          </div>
          <div class="project-meta">
            ${project.deliverables.map((item) => `<span class="tag">${item}</span>`).join("")}
          </div>
        </article>
      `,
    )
    .join("");
}

function updateCounts() {
  resumeCount.textContent = `${resumeInput.value.length} 字`;
  jobCount.textContent = `${jobInput.value.length} 字`;
}

function exportReport() {
  const result = lastResult || JSON.parse(localStorage.getItem("careerforge:last") || "null");
  if (!result) {
    analyze();
  }
  const payload = JSON.stringify(lastResult, null, 2);
  const blob = new Blob([payload], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "careerforge-report.json";
  link.click();
  URL.revokeObjectURL(url);
}

resumeInput.addEventListener("input", updateCounts);
jobInput.addEventListener("input", updateCounts);
analyzeBtn.addEventListener("click", analyze);
loadDemo.addEventListener("click", () => {
  resumeInput.value = demoResume;
  jobInput.value = demoJob;
  updateCounts();
  analyze();
});
exportBtn.addEventListener("click", exportReport);

segments.forEach((button) => {
  button.addEventListener("click", () => {
    segments.forEach((segment) => segment.classList.remove("active"));
    button.classList.add("active");
    currentMode = button.dataset.mode;
    if (lastResult) {
      lastResult.projects = generateProjects(lastResult.skills, currentMode);
      renderProjects(lastResult.projects);
    }
  });
});

updateCounts();
