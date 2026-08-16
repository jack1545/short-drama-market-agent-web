const cases = {
  market: {
    kind: "CASE 01 · 真实飞书任务复盘",
    title: "每日海外短剧行情全景监控",
    task: "生成今日海外短剧行情试运行报告，并给出三条建议",
    process: "采集 6+ 类公开来源 → 统一平台、作品、题材与指标口径 → 按官方/媒体/社区分级 → 交叉验证并记录失败渠道 → 生成报告、JSON 与 CSV。",
    output: "1 份全景报告、1 份结构化快照、3 份榜单 CSV，以及可执行的选题与数据采购建议。",
    findings: [
      ["市场", "中", "头部平台继续扩大规模", "公开报告指向 Q1 2026 全球短剧 App 约 8.5 亿下载与 7.5 亿美元内购。"],
      ["题材", "中-高", "狼人和复仇仍是稳定钩子", "狼人保持 Western 市场强势，重生复仇与女性觉醒信号继续上升。"],
      ["增量", "中", "AI 短剧进入快速扩张期", "NetShort、DramaWave 等平台的 AI 内容和素材投放形成新增观察线。"],
    ],
    detailTitle: "热门作品观察名单",
    details: [
      ["The Senator's Son", "ReelShort", "中"], ["Kingsley", "ReelShort", "中"],
      ["King or Clown", "ReelShort", "中"], ["Harper Reeves", "ReelShort", "中"],
      ["Fated to My Forbidden Alpha", "多平台", "中"], ["Divorced at the Wedding Day", "DramaBox", "中"],
      ["The Princess of His Heart", "DramaBox", "中"], ["Not the Bride He Wanted", "多平台", "低-中"],
      ["Rejected Luna Is the Alpha Queen", "多平台", "低-中"], ["My Cold Revenge", "多平台", "低"],
    ],
    limit: "这是首次采集；缺少付费数据商原始榜单和稳定的一手社交热榜。作品只列为观察名单，收入与名次不能当作确定事实。",
    downloads: [
      ["下载完整报告", "/downloads/2026-08-16-short-drama-market-report.md"],
      ["下载 JSON 快照", "/downloads/2026-08-16-short-drama-snapshot.json"],
    ],
  },
  genre: {
    kind: "CASE 02 · 基于已验证快照的专题分析",
    title: "狼人 × 重生复仇题材机会评估",
    task: "判断‘狼人 + 重生复仇’是否值得作为下一批海外短剧的优先立项方向，并给出验证方案",
    process: "筛选 6 类题材信号 → 对照 10 部作品观察名单 → 区分稳定母题与上升钩子 → 检查跨平台出现情况 → 将结论拆成可执行的小成本验证。",
    output: "形成‘值得进入小样测试、暂不直接重投’的中等置信度判断，并给出角色、开场和投放素材三项验证动作。",
    findings: [
      ["母题", "高", "狼人仍是 Western 市场稳定受众盘", "Alpha、Rejected Luna、Fated Mate 在多平台持续出现，适合作为用户熟悉的世界观入口。"],
      ["钩子", "中", "重生复仇与女性觉醒信号上升", "被拒、背叛、身份翻转能增强前 30 秒冲突，但当前证据不足以证明组合后一定提升付费。"],
      ["决策", "中", "先做三版开场素材，再决定是否立项", "分别测试公开羞辱、死亡重生和 Alpha 身份揭露，比较完播、点击与付费前置指标。"],
    ],
    detailTitle: "建议验证的六个创作变量",
    details: [
      ["开场冲突", "婚礼被弃 / 公开奖惩", "优先"], ["身份翻转", "Rejected Luna → Alpha Queen", "优先"],
      ["情感关系", "Fated Mate 与复仇目标冲突", "验证"], ["生产方式", "真人基线 vs AI 小样", "验证"],
      ["核心地区", "美国英语市场", "先测"], ["成功指标", "3 秒留存 / 完播 / 付费点击", "必测"],
    ],
    limit: "结论来自单日快照和搜索摘要层证据，没有投放后台、完播率或付费转化数据；只能支持小规模内容测试，不能直接支持大额投放。",
    downloads: [["下载题材机会实例", "/downloads/case-02-genre-opportunity.md"], ["下载题材趋势 CSV", "/downloads/2026-08-16-genre-trends.csv"]],
  },
  competitor: {
    kind: "CASE 03 · 基于已验证快照的决策分析",
    title: "ReelShort × DramaBox 平台竞品对比",
    task: "比较 ReelShort 与 DramaBox 的市场位置、内容机会和数据风险，给出新项目的差异化切入建议",
    process: "抽取平台级指标 → 分开年收入预测、季度 IAP、月收入估算与 MAU → 标注来源数量和口径 → 对照内容题材与社区付费情绪 → 输出可行动差异。",
    output: "确认双寡头格局，但拒绝用混合口径强行排名；建议从强女主、复仇混合题材和更透明的付费体验切入。",
    findings: [
      ["规模", "中-高", "ReelShort 的收入路径证据更强", "$1.05B 年收入预测由 8 个媒体来源共同指向 MPA；DramaBox 月收入约 $20M 仍是单源估算。"],
      ["竞争", "中", "两者在 Q1 IAP 层面接近", "现有摘要均指向约 $140M，但统计周期与地区口径仍需原始榜单复核。"],
      ["切入", "中", "内容差异和付费信任比复制榜单更重要", "优先测试女性觉醒与复仇混合题材，同时减少社区频繁提到的金币墙和计费不透明。"],
    ],
    detailTitle: "竞品决策对照",
    details: [
      ["ReelShort", "收入路径 / 狼人标杆", "证据较强"], ["DramaBox", "强女主 / 复仇方向", "继续观察"],
      ["共同优势", "MAU 与 IAP 双寡头", "中"], ["共同风险", "付费墙与计费信任", "社区信号"],
      ["新项目机会", "混合题材 + 透明付费", "建议测试"], ["待采购数据", "原始榜单 / 分区收入", "高优先级"],
    ],
    limit: "两家公司的公开数字混有预测、估算和不同周期，不能计算精确市场份额；本实例给的是竞争框架，不是财务尽调。",
    downloads: [["下载竞品对比实例", "/downloads/case-03-platform-competition.md"], ["下载平台数据 CSV", "/downloads/2026-08-16-app-market.csv"]],
  },
};

const form = document.querySelector("#demo-form");
const task = document.querySelector("#task");
const runButton = document.querySelector("#run-button");
const formError = document.querySelector("#form-error");
const idleState = document.querySelector("#idle-state");
const loadingState = document.querySelector("#loading-state");
const errorState = document.querySelector("#error-state");
const resultState = document.querySelector("#result-state");
const toggleWorks = document.querySelector("#toggle-works");
const workGrid = document.querySelector("#work-grid");
const caseTabs = [...document.querySelectorAll(".case-tab")];
const resultKind = document.querySelector("#result-kind");
const resultTitle = document.querySelector("#result-title");
const resultInput = document.querySelector("#result-input");
const resultProcess = document.querySelector("#result-process");
const resultOutput = document.querySelector("#result-output");
const resultFindings = document.querySelector("#result-findings");
const resultLimit = document.querySelector("#result-limit");
const resultActions = document.querySelector("#result-actions");
const detailTitle = document.querySelector("#detail-title");
let showAllWorks = false;
let activeCase = "market";

function showState(activeState) {
  [idleState, loadingState, errorState, resultState].forEach((state) => {
    state.hidden = state !== activeState;
  });
}

function renderWorks() {
  const selected = cases[activeCase];
  workGrid.replaceChildren();
  selected.details.slice(0, showAllWorks ? selected.details.length : 4).forEach(([title, platform, confidence]) => {
    const item = document.createElement("div");
    item.className = "work-item";
    const name = document.createElement("strong");
    const source = document.createElement("span");
    const level = document.createElement("small");
    name.textContent = title;
    source.textContent = platform;
    level.textContent = `置信度 ${confidence}`;
    item.append(name, source, level);
    workGrid.append(item);
  });
  toggleWorks.textContent = showAllWorks ? "收起" : `查看全部 ${selected.details.length} 项`;
  toggleWorks.setAttribute("aria-expanded", String(showAllWorks));
}

function renderResult() {
  const selected = cases[activeCase];
  resultKind.textContent = selected.kind;
  resultTitle.textContent = selected.title;
  resultInput.textContent = task.value.trim();
  resultProcess.textContent = selected.process;
  resultOutput.textContent = selected.output;
  resultLimit.textContent = selected.limit;
  detailTitle.textContent = selected.detailTitle;
  resultFindings.replaceChildren();
  selected.findings.forEach(([label, confidence, title, description]) => {
    const article = document.createElement("article");
    const meta = document.createElement("div");
    const category = document.createElement("span");
    const level = document.createElement("b");
    const heading = document.createElement("h4");
    const copy = document.createElement("p");
    category.textContent = label;
    level.textContent = `置信度 ${confidence}`;
    heading.textContent = title;
    copy.textContent = description;
    meta.append(category, level);
    article.append(meta, heading, copy);
    resultFindings.append(article);
  });
  resultActions.replaceChildren();
  selected.downloads.forEach(([label, href]) => {
    const link = document.createElement("a");
    link.href = href;
    link.download = "";
    link.textContent = label;
    resultActions.append(link);
  });
  renderWorks();
}

caseTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    activeCase = tab.dataset.case;
    showAllWorks = false;
    caseTabs.forEach((item) => {
      const selected = item === tab;
      item.classList.toggle("is-active", selected);
      item.setAttribute("aria-selected", String(selected));
    });
    task.value = cases[activeCase].task;
    formError.hidden = true;
    runButton.disabled = false;
    runButton.textContent = "运行此实例";
    showState(idleState);
    idleState.querySelector("h3").textContent = cases[activeCase].title;
    idleState.querySelector("p").textContent = "点击开始运行，查看该实例的输入、处理过程、结论、限制和下载产出。";
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!task.value.trim()) {
    formError.hidden = false;
    runButton.disabled = false;
    showState(errorState);
    return;
  }
  formError.hidden = true;
  runButton.disabled = true;
  runButton.textContent = "正在读取证据";
  showState(loadingState);
  window.setTimeout(() => {
    renderResult();
    showState(resultState);
    runButton.disabled = false;
    runButton.textContent = "再次运行";
  }, 1100);
});

toggleWorks.addEventListener("click", () => {
  showAllWorks = !showAllWorks;
  renderWorks();
});
