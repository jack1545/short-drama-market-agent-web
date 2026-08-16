const works = [
  ["The Senator's Son", "ReelShort", "中"],
  ["Kingsley", "ReelShort", "中"],
  ["King or Clown", "ReelShort", "中"],
  ["Harper Reeves", "ReelShort", "中"],
  ["Fated to My Forbidden Alpha", "多平台", "中"],
  ["Divorced at the Wedding Day", "DramaBox", "中"],
  ["The Princess of His Heart", "DramaBox", "中"],
  ["Not the Bride He Wanted", "多平台", "低-中"],
  ["Rejected Luna Is the Alpha Queen", "多平台", "低-中"],
  ["My Cold Revenge", "多平台", "低"],
];

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
let showAllWorks = false;

function showState(activeState) {
  [idleState, loadingState, errorState, resultState].forEach((state) => {
    state.hidden = state !== activeState;
  });
}

function renderWorks() {
  workGrid.replaceChildren();
  works.slice(0, showAllWorks ? 10 : 4).forEach(([title, platform, confidence]) => {
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
  toggleWorks.textContent = showAllWorks ? "收起" : "查看全部 10 部";
  toggleWorks.setAttribute("aria-expanded", String(showAllWorks));
}

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
    renderWorks();
    showState(resultState);
    runButton.disabled = false;
    runButton.textContent = "再次运行";
  }, 1100);
});

toggleWorks.addEventListener("click", () => {
  showAllWorks = !showAllWorks;
  renderWorks();
});
