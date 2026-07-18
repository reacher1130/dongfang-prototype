const materials = [
  {
    id: 1,
    name: "小叶紫檀圆珠",
    category: "main_bead",
    spec: "10mm",
    diameter: 10,
    price: 28,
    stock: 500,
    bg: "radial-gradient(circle at 30% 24%, #d87965 0 8%, #7e241f 28%, #3e1112 68%, #190909 100%)"
  },
  {
    id: 2,
    name: "星月菩提",
    category: "main_bead",
    spec: "10mm",
    diameter: 10,
    price: 18,
    stock: 500,
    bg: "radial-gradient(circle at 31% 24%, #fffdf1 0 9%, #e6dec3 35%, #b7a989 76%, #776d59 100%)"
  },
  {
    id: 3,
    name: "凤眼菩提",
    category: "main_bead",
    spec: "10mm",
    diameter: 10,
    price: 22,
    stock: 500,
    bg: "repeating-radial-gradient(circle at 28% 22%, #8c6b45 0 3px, #4e3828 5px 8px, #251a15 10px 14px)"
  },
  {
    id: 6,
    name: "南红玛瑙",
    category: "main_bead",
    spec: "8mm",
    diameter: 8,
    price: 32,
    stock: 300,
    bg: "radial-gradient(circle at 28% 22%, #ff9b7f 0 7%, #d84435 32%, #8d1e1c 69%, #3c090c 100%)"
  },
  {
    id: 4,
    name: "白玉",
    category: "main_bead",
    spec: "8mm",
    diameter: 8,
    price: 35,
    stock: 300,
    bg: "radial-gradient(circle at 29% 21%, #ffffff 0 8%, #dcecf0 24%, #8ba7ae 58%, #43545a 100%)"
  },
  {
    id: 5,
    name: "青金石",
    category: "main_bead",
    spec: "10mm",
    diameter: 10,
    price: 25,
    stock: 300,
    bg: "radial-gradient(circle at 28% 22%, #9eb8ef 0 7%, #4f70b8 30%, #203f82 68%, #091633 100%)"
  },
  {
    id: 7,
    name: "蜜蜡",
    category: "main_bead",
    spec: "10mm",
    diameter: 10,
    price: 45,
    stock: 260,
    bg: "radial-gradient(circle at 30% 23%, #fff4b2 0 8%, #efbd42 36%, #bd7311 72%, #5c2b05 100%)"
  },
  {
    id: 8,
    name: "黑曜石",
    category: "main_bead",
    spec: "10mm",
    diameter: 10,
    price: 12,
    stock: 500,
    bg: "radial-gradient(circle at 28% 22%, #78817c 0 5%, #2e3332 28%, #111414 70%, #030404 100%)"
  },
  {
    id: 10,
    name: "蜜蜡佛头",
    category: "buddha_head",
    spec: "12mm",
    diameter: 12,
    price: 68,
    stock: 120,
    bg: "radial-gradient(circle at 30% 23%, #ffe58a 0 8%, #e9a721 37%, #a75c0b 72%, #5c2b05 100%)"
  },
  {
    id: 9,
    name: "藏银三通",
    category: "three_way",
    spec: "10mm",
    diameter: 10,
    price: 48,
    stock: 120,
    bg: "linear-gradient(135deg, #ffffff 0%, #8f999d 24%, #eef4f5 46%, #687176 69%, #d8e0e1 100%)"
  },
  {
    id: 12,
    name: "白水晶隔片",
    category: "spacer",
    spec: "6mm",
    diameter: 6,
    price: 2.5,
    stock: 1000,
    shape: "spacer",
    bg: "radial-gradient(circle at 28% 22%, #ffffff 0 8%, #dcecf0 24%, #8ba7ae 58%, #43545a 100%)"
  },
  {
    id: 11,
    name: "花丝莲花吊坠",
    category: "pendant",
    spec: "15mm",
    diameter: 15,
    price: 20,
    stock: 200,
    bg: "linear-gradient(135deg, #fff0a8 0%, #a97519 25%, #f6d374 48%, #795013 70%, #e8b841 100%)"
  },
  {
    id: 13,
    name: "流苏配饰",
    category: "tassel",
    spec: "",
    diameter: 14,
    price: 28,
    stock: 180,
    bg: "radial-gradient(circle at 30% 24%, #ec9a82 0 8%, #b84636 34%, #6d1d1c 72%, #2d090b 100%)"
  },
  {
    id: 14,
    name: "弹力绳",
    category: "cord",
    spec: "",
    diameter: 0,
    price: 2,
    stock: 1000,
    shape: "cord",
    bg: "linear-gradient(135deg, #d8c797, #8b7952 48%, #e2d6ad)"
  }
];

const starterMaterialIds = [
  2, 2, 6, 2, 2, 2, 6, 2,
  2, 10, 2, 2, 6, 2, 2, 6
];

const elements = {
  beadLayer: document.querySelector("#beadLayer"),
  braceletScene: document.querySelector("#braceletScene"),
  materialGrid: document.querySelector("#materialGrid"),
  categoryTabs: document.querySelector("#categoryTabs"),
  materialSearch: document.querySelector("#materialSearch"),
  wristSize: document.querySelector("#wristSize"),
  fitStatus: document.querySelector("#fitStatus"),
  totalPrice: document.querySelector("#totalPrice"),
  beadCount: document.querySelector("#beadCount"),
  footerCount: document.querySelector("#footerCount"),
  lengthReadout: document.querySelector("#lengthReadout"),
  selectedSwatch: document.querySelector("#selectedSwatch"),
  selectedName: document.querySelector("#selectedName"),
  duplicateButton: document.querySelector("#duplicateButton"),
  removeButton: document.querySelector("#removeButton"),
  undoButton: document.querySelector("#undoButton"),
  redoButton: document.querySelector("#redoButton"),
  clearButton: document.querySelector("#clearButton"),
  saveButton: document.querySelector("#saveButton"),
  finishButton: document.querySelector("#finishButton"),
  saveState: document.querySelector("#saveState"),
  deleteZone: document.querySelector("#deleteZone"),
  toast: document.querySelector("#toast")
};

let uidSequence = 0;
let beads = starterMaterialIds.map(materialId => createBead(materialId));
let selectedCord = 14;
let selectedUid = beads[2].uid;
let activeCategory = "all";
let rotation = -Math.PI / 2;
let undoStack = [];
let redoStack = [];
let toastTimer;
let autoSaveTimer;
let stageDrag;
let wristValueBeforeChange = elements.wristSize.value;

function createBead(materialId) {
  uidSequence += 1;
  return { uid: `bead-${Date.now()}-${uidSequence}`, materialId };
}

function getMaterial(materialId) {
  return materials.find(material => material.id === materialId);
}

function takeSnapshot() {
  return JSON.stringify({
    version: 2,
    wristSizeMm: Number(elements.wristSize.value),
    selectedCord,
    beads: beads.map(bead => ({ ...bead }))
  });
}

function restoreSnapshot(snapshot) {
  const value = JSON.parse(snapshot);
  beads = value.beads;
  selectedCord = value.selectedCord || null;
  elements.wristSize.value = String(value.wristSizeMm);
  selectedUid = beads.some(bead => bead.uid === selectedUid) ? selectedUid : beads[0]?.uid;
  renderAll();
  markDirty();
}

function pushHistory() {
  undoStack.push(takeSnapshot());
  if (undoStack.length > 50) undoStack.shift();
  redoStack = [];
  updateHistoryButtons();
}

function undo() {
  if (!undoStack.length) return;
  redoStack.push(takeSnapshot());
  restoreSnapshot(undoStack.pop());
  showToast("已撤销上一步");
}

function redo() {
  if (!redoStack.length) return;
  undoStack.push(takeSnapshot());
  restoreSnapshot(redoStack.pop());
  showToast("已恢复操作");
}

function updateHistoryButtons() {
  elements.undoButton.disabled = undoStack.length === 0;
  elements.redoButton.disabled = redoStack.length === 0;
}

function renderAll() {
  renderBracelet();
  updateSummary();
  updateSelectedToolbar();
  updateHistoryButtons();
}

function renderBracelet() {
  const sceneSize = elements.braceletScene.clientWidth || 320;
  const radiusX = sceneSize * 0.39;
  const radiusY = sceneSize * 0.36;
  const count = beads.length;
  elements.beadLayer.replaceChildren();

  beads.forEach((bead, index) => {
    const material = getMaterial(bead.materialId);
    const angle = rotation + (index / Math.max(count, 1)) * Math.PI * 2;
    const x = Math.cos(angle) * radiusX;
    const y = Math.sin(angle) * radiusY;
    const depth = 0.86 + ((Math.sin(angle) + 1) / 2) * 0.19;
    const beadSize = 27 + (material.diameter - 8) * 2.1;
    const button = document.createElement("button");
    button.type = "button";
    button.className = `bead${bead.uid === selectedUid ? " selected" : ""}`;
    button.dataset.uid = bead.uid;
    button.dataset.shape = material.shape || "round";
    button.title = `${material.name} · 第 ${index + 1} 位`;
    button.setAttribute("aria-label", `${material.name}，第 ${index + 1} 位`);
    button.style.setProperty("--x", `${x}px`);
    button.style.setProperty("--y", `${y}px`);
    button.style.setProperty("--depth-scale", depth.toFixed(3));
    button.style.setProperty("--bead-size", `${beadSize}px`);
    button.style.setProperty("--bead-bg", material.bg);
    button.style.zIndex = String(Math.round((y + radiusY) * 10));
    button.addEventListener("pointerdown", startBeadDrag);
    elements.beadLayer.append(button);
  });
}

function renderMaterials() {
  const query = elements.materialSearch.value.trim().toLowerCase();
  const visible = materials.filter(material => {
    const categoryMatches = activeCategory === "all" || material.category === activeCategory;
    return categoryMatches && material.name.toLowerCase().includes(query);
  });

  elements.materialGrid.replaceChildren();
  visible.forEach(material => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "material-card";
    card.dataset.materialId = material.id;
    card.dataset.category = material.category;
    card.title = `${material.name}，${material.spec}，库存 ${material.stock}`;
    card.innerHTML = `
      <span class="material-bead" style="--bead-bg:${material.bg}"></span>
      <strong>${material.name}</strong>
      <small>${material.spec}</small>
      <b>¥${material.price}</b>
      ${material.stock < 15 ? '<span class="stock-low">库存紧张</span>' : ""}
    `;
    card.addEventListener("click", () => addMaterial(material, card));
    elements.materialGrid.append(card);
  });
}

function updateSummary() {
  const usedLength = beads.reduce((sum, bead) => sum + getMaterial(bead.materialId).diameter, 0);
  const cordPrice = selectedCord ? getMaterial(selectedCord).price : 0;
  const total = beads.reduce((sum, bead) => sum + getMaterial(bead.materialId).price, cordPrice);
  const targetLength = Number(elements.wristSize.value) + 5;
  const difference = usedLength - targetLength;
  let state = "good";
  let label = "松紧合适";
  if (difference < -12) {
    state = "loose";
    label = `还可加入约 ${Math.ceil(Math.abs(difference) / 10)} 颗`;
  } else if (difference > 8) {
    state = "tight";
    label = "尺寸偏紧";
  }
  elements.fitStatus.dataset.state = state;
  elements.fitStatus.querySelector("span").textContent = label;
  elements.totalPrice.textContent = `¥${total}`;
  elements.beadCount.textContent = String(beads.length);
  elements.footerCount.textContent = String(beads.length + (selectedCord ? 1 : 0));
  elements.lengthReadout.textContent = `已用 ${usedLength} mm`;
}

function updateSelectedToolbar() {
  const selected = beads.find(bead => bead.uid === selectedUid);
  const material = selected && getMaterial(selected.materialId);
  elements.duplicateButton.disabled = !material;
  elements.removeButton.disabled = !material;
  elements.selectedName.textContent = material ? material.name : "未选择珠子";
  elements.selectedSwatch.style.background = material ? material.bg : "#3b423c";
}

function addMaterial(material, sourceCard) {
  if (material.category === "cord") {
    pushHistory();
    selectedCord = material.id;
    renderAll();
    markDirty();
    showToast("已选择弹力绳");
    return;
  }
  if (beads.length >= 30) {
    showToast("设计器最多容纳 30 颗珠子");
    return;
  }
  pushHistory();
  const bead = createBead(material.id);
  beads.push(bead);
  selectedUid = bead.uid;
  animateBeadFlight(material, sourceCard);
  renderAll();
  markDirty();
  vibrate(12);
}

function animateBeadFlight(material, sourceCard) {
  const sourceRect = sourceCard.querySelector(".material-bead").getBoundingClientRect();
  const targetRect = elements.braceletScene.getBoundingClientRect();
  const flyer = document.createElement("span");
  flyer.className = "fly-bead";
  flyer.style.setProperty("--bead-bg", material.bg);
  flyer.style.left = `${sourceRect.left}px`;
  flyer.style.top = `${sourceRect.top}px`;
  document.body.append(flyer);
  requestAnimationFrame(() => {
    const dx = targetRect.left + targetRect.width / 2 - sourceRect.left - 19;
    const dy = targetRect.top + targetRect.height / 2 - sourceRect.top - 19;
    flyer.style.transform = `translate(${dx}px, ${dy}px) scale(.65)`;
    flyer.style.opacity = "0";
  });
  window.setTimeout(() => flyer.remove(), 460);
}

function startBeadDrag(event) {
  event.stopPropagation();
  const element = event.currentTarget;
  const uid = element.dataset.uid;
  const originalIndex = beads.findIndex(bead => bead.uid === uid);
  const startX = event.clientX;
  const startY = event.clientY;
  let moved = false;
  let shouldDelete = false;
  selectedUid = uid;
  updateSelectedToolbar();
  element.classList.add("selected", "dragging");
  element.setPointerCapture(event.pointerId);

  function onMove(moveEvent) {
    const sceneRect = elements.braceletScene.getBoundingClientRect();
    const x = moveEvent.clientX - sceneRect.left - sceneRect.width / 2;
    const y = moveEvent.clientY - sceneRect.top - sceneRect.height / 2;
    moved ||= Math.hypot(moveEvent.clientX - startX, moveEvent.clientY - startY) > 5;
    element.style.setProperty("--x", `${x}px`);
    element.style.setProperty("--y", `${y}px`);
    element.style.setProperty("--depth-scale", "1.08");
    const normalizedRadius = Math.sqrt((x / (sceneRect.width * .39)) ** 2 + (y / (sceneRect.width * .36)) ** 2);
    shouldDelete = normalizedRadius > 1.38;
    elements.deleteZone.classList.toggle("visible", shouldDelete);
  }

  function onEnd(endEvent) {
    element.removeEventListener("pointermove", onMove);
    element.removeEventListener("pointerup", onEnd);
    element.removeEventListener("pointercancel", onCancel);
    elements.deleteZone.classList.remove("visible");

    if (!moved) {
      renderAll();
      return;
    }

    pushHistory();
    if (shouldDelete) {
      element.classList.add("removing");
      vibrate(20);
      window.setTimeout(() => {
        beads.splice(originalIndex, 1);
        selectedUid = beads[originalIndex]?.uid || beads[originalIndex - 1]?.uid;
        renderAll();
        markDirty();
      }, 280);
      return;
    }

    const sceneRect = elements.braceletScene.getBoundingClientRect();
    const relativeX = endEvent.clientX - sceneRect.left - sceneRect.width / 2;
    const relativeY = endEvent.clientY - sceneRect.top - sceneRect.height / 2;
    let angle = Math.atan2(relativeY / .36, relativeX / .39) - rotation;
    angle = (angle + Math.PI * 2) % (Math.PI * 2);
    const targetIndex = Math.min(beads.length - 1, Math.round(angle / (Math.PI * 2) * beads.length));
    const [movedBead] = beads.splice(originalIndex, 1);
    beads.splice(targetIndex, 0, movedBead);
    renderAll();
    markDirty();
    vibrate(8);
  }

  function onCancel() {
    elements.deleteZone.classList.remove("visible");
    renderAll();
  }

  element.addEventListener("pointermove", onMove);
  element.addEventListener("pointerup", onEnd);
  element.addEventListener("pointercancel", onCancel);
}

function removeSelected() {
  const index = beads.findIndex(bead => bead.uid === selectedUid);
  if (index < 0) return;
  pushHistory();
  beads.splice(index, 1);
  selectedUid = beads[index]?.uid || beads[index - 1]?.uid;
  renderAll();
  markDirty();
  showToast("已移除珠子");
}

function duplicateSelected() {
  const index = beads.findIndex(bead => bead.uid === selectedUid);
  if (index < 0 || beads.length >= 30) return;
  pushHistory();
  const copy = createBead(beads[index].materialId);
  beads.splice(index + 1, 0, copy);
  selectedUid = copy.uid;
  renderAll();
  markDirty();
  showToast("已复制到相邻位置");
}

function markDirty() {
  elements.saveState.textContent = "有未保存修改";
  window.clearTimeout(autoSaveTimer);
  autoSaveTimer = window.setTimeout(() => saveDraft(false), 700);
}

function saveDraft(showMessage = true) {
  const payload = createDesignPayload();
  localStorage.setItem("askxuan-diy-designer-demo", JSON.stringify(payload));
  elements.saveState.textContent = "草稿已保存在本机";
  if (showMessage) showToast("设计草稿已保存");
  return payload;
}

function createDesignPayload() {
  const groupedItems = [];
  for (const bead of beads) {
    const material = getMaterial(bead.materialId);
    const current = groupedItems.find(item => item.materialId === material.id);
    if (current) {
      current.quantity += 1;
    } else {
      groupedItems.push({
        materialId: material.id,
        skuId: null,
        materialName: material.name,
        spec: material.spec,
        unitPrice: material.price,
        quantity: 1,
        subtype: material.category
      });
    }
  }
  const cord = selectedCord ? getMaterial(selectedCord) : null;
  const cordItem = cord ? {
    materialId: cord.id,
    skuId: null,
    materialName: cord.name,
    spec: cord.spec,
    unitPrice: cord.price,
    quantity: 1,
    subtype: cord.category
  } : null;
  if (cordItem) groupedItems.push(cordItem);
  return {
    version: 2,
    wristSizeMm: Number(elements.wristSize.value),
    fitAllowanceMm: 5,
    cord: cordItem,
    beads: beads.map((bead, position) => {
      const material = getMaterial(bead.materialId);
      return {
        slotId: bead.uid,
        position,
        materialId: material.id,
        skuId: null,
        materialName: material.name,
        spec: material.spec,
        unitPrice: material.price,
        subtype: material.category,
        image: "",
        diameterMm: material.diameter
      };
    }),
    items: groupedItems
  };
}

function restoreDraft() {
  try {
    const payload = JSON.parse(localStorage.getItem("askxuan-diy-designer-demo"));
    if (payload?.version !== 2 || !Array.isArray(payload.beads)) return;
    const restored = payload.beads
      .filter(bead => getMaterial(bead.materialId))
      .sort((left, right) => left.position - right.position)
      .map(bead => ({ uid: bead.slotId || createBead(bead.materialId).uid, materialId: bead.materialId }));
    if (!restored.length) return;
    beads = restored;
    selectedCord = payload.cord?.materialId && getMaterial(payload.cord.materialId)
      ? payload.cord.materialId
      : null;
    selectedUid = beads[0].uid;
    if (payload.wristSizeMm) elements.wristSize.value = String(payload.wristSizeMm);
    wristValueBeforeChange = elements.wristSize.value;
    elements.saveState.textContent = "已恢复本机草稿";
  } catch {
    localStorage.removeItem("askxuan-diy-designer-demo");
  }
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  elements.toast.textContent = message;
  elements.toast.classList.add("show");
  toastTimer = window.setTimeout(() => elements.toast.classList.remove("show"), 1800);
}

function vibrate(duration) {
  if (navigator.vibrate) navigator.vibrate(duration);
}

elements.categoryTabs.addEventListener("click", event => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  elements.categoryTabs.querySelectorAll("button").forEach(tab => tab.classList.toggle("active", tab === button));
  renderMaterials();
});

elements.materialSearch.addEventListener("input", renderMaterials);
elements.wristSize.addEventListener("focus", () => {
  wristValueBeforeChange = elements.wristSize.value;
});
elements.wristSize.addEventListener("change", () => {
  const nextValue = elements.wristSize.value;
  elements.wristSize.value = wristValueBeforeChange;
  pushHistory();
  elements.wristSize.value = nextValue;
  wristValueBeforeChange = nextValue;
  updateSummary();
  markDirty();
});
elements.undoButton.addEventListener("click", undo);
elements.redoButton.addEventListener("click", redo);
elements.duplicateButton.addEventListener("click", duplicateSelected);
elements.removeButton.addEventListener("click", removeSelected);
elements.clearButton.addEventListener("click", () => {
  if (!beads.length && !selectedCord) return;
  pushHistory();
  beads = [];
  selectedCord = null;
  selectedUid = undefined;
  renderAll();
  markDirty();
  showToast("设计已清空，可重新选珠");
});
elements.saveButton.addEventListener("click", () => saveDraft());
elements.finishButton.addEventListener("click", () => {
  if (!beads.length) {
    showToast("请先加入珠子");
    return;
  }
  const payload = saveDraft(false);
  console.info("AskXuan DIY ordered snapshot", payload);
  showToast("有序设计快照已生成，可进入订单确认");
});

elements.braceletScene.addEventListener("pointerdown", event => {
  if (event.target.closest(".bead")) return;
  stageDrag = { pointerId: event.pointerId, startX: event.clientX, initialRotation: rotation };
  elements.braceletScene.setPointerCapture(event.pointerId);
});

elements.braceletScene.addEventListener("pointermove", event => {
  if (!stageDrag || stageDrag.pointerId !== event.pointerId) return;
  rotation = stageDrag.initialRotation + (event.clientX - stageDrag.startX) / 110;
  renderBracelet();
});

elements.braceletScene.addEventListener("pointerup", event => {
  if (stageDrag?.pointerId === event.pointerId) stageDrag = undefined;
});

elements.braceletScene.addEventListener("pointercancel", () => {
  stageDrag = undefined;
});

window.addEventListener("resize", renderBracelet);

restoreDraft();
renderMaterials();
renderAll();
