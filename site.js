const FIT_DATA = {
  single: {
    label: "一个人（没有孩子）",
    stages: [
      {
        id: "s1", name: "起步期", age: "约 22–28 岁", ageMin: 20, ageMax: 28,
        why: "收入刚立住、责任不大。这一段的核心是别被一次突发住院或意外打回借贷。",
        fits: [
          { l: "p", t: "百万医疗险（社保之上）", w: "管大额住院账单，社保目录外与大额自付才是真缺口。" },
          { l: "p", t: "一年期意外险", w: "保费最低、杠杆最高，对冲通勤与运动高频意外。" },
          { l: "s", t: "重疾险（基础保额）", w: "20 多岁核保最宽松、费率最低，先占住入口。",
            money: { tight: { w: "先做消费型或定期保额占住健康窗口，不求一次买满。" }, ample: { w: "按 3–5 年收入配齐保额，仍与储蓄分账。" } } },
          { l: "c", t: "定期寿险", w: "有助学贷款或父母需你兜底时再配，无负债可缓。" },
          { l: "h", t: "长期储蓄 / 年金", w: "应急金未满 3–6 个月刚需前，不锁死长期流动性。" }
        ]
      },
      {
        id: "s2", name: "自立期", age: "约 28–35 岁", ageMin: 28, ageMax: 35,
        why: "收入上台阶，你自己仍是家里唯一的现金流机器。优先守住未来几十年的赚钱能力。",
        fits: [
          { l: "p", t: "重疾险（对齐 3–5 年收入）", w: "补偿康复期 2–3 年无法全职工作的收入中断，不靠存款硬扛。" },
          { l: "p", t: "医疗险（普通部或中端特需）", w: "账单报销与就医体验分开看，收入稳后可考虑含公立特需。",
            money: { tight: { w: "先把 20 年保证续保的普通部百万医疗做稳。" } } },
          { l: "s", t: "定期寿险", w: "一旦背上首套房贷或赡养责任，按「剩余负债 + 5 年父母生活费」补齐。" },
          { l: "c", t: "长期储蓄 / 养老专款", w: "保障闭环且有 10 年不动用的余钱时再启动。",
            money: { tight: { l: "h", w: "预算紧时全部让位给重疾与医疗保额。" }, ample: { l: "s", w: "可独立建仓，与日常周转账户隔离。" } } }
        ]
      },
      {
        id: "s3", name: "责任初显", age: "约 35–45 岁", ageMin: 35, ageMax: 45,
        why: "房贷、父母高龄与职业平台期叠加；同时 40 岁前后是健康核保的重要分水岭。",
        fits: [
          { l: "p", t: "定期寿险（覆盖负债与赡养）", w: "先回答：万一主要收入停了，房贷和父母谁顶。" },
          { l: "p", t: "重疾 / 医疗（趁核保窗口补齐）", w: "体检异常增多前，把保额与续保稳定性锁住。" },
          { l: "s", t: "意外险（含伤残失能）", w: "按伤残等级比例赔付，是低成本补失能敞口的一层。" },
          { l: "c", t: "长期储蓄 / 养老现金流", w: "在保障预算之外单独记账，不用储蓄保单顶替保障缺口。",
            money: { tight: { l: "h", w: "暂停高保费储蓄计划，保费先对准扛冲击。" }, ample: { l: "s", w: "可锁定长期确定现金流，应对未来降薪或转岗。" } } }
        ]
      },
      {
        id: "s4", name: "蓄力期", age: "约 45–55 岁", ageMin: 45, ageMax: 55,
        why: "离退休约 10–15 年，开始把「活得久」与「晚年护理」放在同一张账本上。",
        fits: [
          { l: "p", t: "医疗险续保检视", w: "账单风险随年龄抬升，重点是保证续保与不断档。" },
          { l: "p", t: "重疾缺口最后窗口", w: "50 岁后重疾杠杆明显下降，趁仍可标准体承保做最后补齐。" },
          { l: "s", t: "养老年金 / 长期储蓄", w: "进入长寿筹备窗，把未来固定开支换成确定现金流。",
            money: { tight: { l: "c", w: "先保医疗不断档与手头现金，年金量力而行。" } } },
          { l: "h", t: "应急钱、保障、养老混在一仓", w: "混仓的结果往往是急用钱时被迫低点拆单。" }
        ]
      },
      {
        id: "s5", name: "过渡退休", age: "约 55–65 岁", ageMin: 55, ageMax: 65,
        why: "从赚钱转向用钱，确定性与医疗延续高于收益率。",
        fits: [
          { l: "p", t: "医疗险 / 防癌医疗延续", w: "退休后单位补充医保消失，个人医疗底子不能空。" },
          { l: "p", t: "高龄意外险（含骨折/住院护工）", w: "跌倒与陪护成本往往比医药费更伤现金流。" },
          { l: "s", t: "年金 / 确定现金流兑现", w: "核对开始领取的年龄与方式，稳住每月现金流。" },
          { l: "h", t: "新购高保费重疾险", w: "常常保费倒挂，不如留作医疗与护理专款。" }
        ]
      },
      {
        id: "s6", name: "长寿期", age: "约 65 岁以后", ageMin: 65, ageMax: 120,
        why: "主线是医疗、长期护理与保单受益人交接清楚。",
        fits: [
          { l: "p", t: "医疗与护理资金池", w: "把失能陪护与慢病开支做成可预期的专款。" },
          { l: "s", t: "既有保单理赔路径与受益人检视", w: "让家人知道保单在哪、触发什么条件、找谁理赔。" },
          { l: "h", t: "再堆复杂新条款", w: "重在兑现已有安排，而非新买产品。" }
        ]
      }
    ]
  },
  couple: {
    label: "夫妻二人（没有孩子）",
    stages: [
      {
        id: "c1", name: "成家初期", age: "约 25–32 岁", ageMin: 23, ageMax: 32,
        why: "两人没有孩子，账户与责任刚开始合并。最常见漏洞是只给一人配齐、另一人空窗。",
        fits: [
          { l: "p", t: "双方百万医疗 + 意外险", w: "两人共同生活的第一道底，防止一方住院拖垮共同储蓄。" },
          { l: "p", t: "双方重疾险（按各自收入比例）", w: "谁收入停了都会影响家庭总现金流，双方都要有独立保额。" },
          { l: "c", t: "定期寿险（共同房贷出现后）", w: "领证本身不产生寿险需求，背上共同债务才需要。" },
          { l: "h", t: "只给一方配齐、另一方裸奔", w: "双人无孩家庭后期互为唯一照护人，保障不能偏科。" }
        ]
      },
      {
        id: "c2", name: "置业与事业期", age: "约 30–40 岁", ageMin: 30, ageMax: 40,
        why: "房贷把未来十几年的现金流绑在一起，且双方父母开始进入慢病高发期。",
        fits: [
          { l: "p", t: "定期寿险（双方合计覆盖房贷 + 赡养）", w: "先回答：任一方突发极端风险，另一方能否独自还清房贷。" },
          { l: "p", t: "重疾险 + 医疗险（趁 40 岁前锁定）", w: "避免一人大病，另一人既要停工陪护又要独自扛月供。" },
          { l: "c", t: "二人中长期储蓄 / 养老种子", w: "没有教育金支出，更容易存下钱，但须与保障预算分账。",
            money: { tight: { l: "h", w: "储蓄让位给月供、应急金与双方基础保额。" }, ample: { l: "s", w: "没有子女教育挤压，可更早锁定两人未来的养老现金流。" } } }
        ]
      },
      {
        id: "c3", name: "责任叠加期", age: "约 38–50 岁", ageMin: 38, ageMax: 50,
        why: "四位老人进入高龄、房贷仍在、工作进入平台期——两人要顶住四位长辈与自己的未来。",
        fits: [
          { l: "p", t: "双方重疾与医疗保额复盘", w: "十年前买的 30 万保额，已盖不住现在的收入与护理成本。" },
          { l: "p", t: "定期寿险 + 父母防癌/意外医疗", w: "自己守住收入中断；父母能上百万医疗就上，上不了用防癌医疗与惠民保托底。" },
          { l: "s", t: "二人养老与护理专款启动", w: "无子女家庭晚年更依赖市场化照护，筹备窗比有娃家庭更早开启。",
            money: { tight: { l: "c", w: "先堵住双方大病与老人医疗敞口，养老专款小步快跑。" }, ample: { l: "p", w: "把两人 60 岁后的固定现金流与高端医疗/护理通道提前锁死。" } } }
        ]
      },
      {
        id: "c4", name: "转向自己", age: "约 50–60 岁", ageMin: 50, ageMax: 60,
        why: "房贷渐清，没有子女抚养尾声，核心议题直接切换到「两人以后谁照顾谁」。",
        fits: [
          { l: "p", t: "医疗险续保稳定性与特需/直付检视", w: "晚年就医没人跑腿时，医疗险的续保条件与医院服务同样重要。" },
          { l: "p", t: "养老年金 / 长期护理资金池", w: "把未来请护工、住养老社区的刚性开支做成确定给付。" },
          { l: "s", t: "互为受益人与保单托管检视", w: "核对双方保单受益人顺位，避免理赔金变成繁琐遗产手续。" },
          { l: "h", t: "临近退休仍把养老钱放在高波动资产", w: "用钱窗口临近，确定性优先于博高收益。" }
        ]
      },
      {
        id: "c5", name: "共同退休", age: "约 60 岁以后", ageMin: 60, ageMax: 120,
        why: "两人一起用钱的阶段：最怕一方长期卧床护理，把另一方的养老金掏空。",
        fits: [
          { l: "p", t: "医疗险持续有效 + 长期照护专款", w: "把两个人的医疗账单与护理支出隔离开，保住健康一方的生活质量。" },
          { l: "p", t: "高龄意外险（跌倒/骨折/住院津贴）", w: "高龄骨折往往是长期失能的起点。" },
          { l: "s", t: "受益人与紧急联系人清单更新", w: "明确若一方失智或身故，保单与账户如何无障碍兑现。" }
        ]
      }
    ]
  },
  family: {
    label: "有孩子家庭",
    stages: [
      {
        id: "f1", name: "备孕 / 初为人父母", age: "约 28–35 岁", ageMin: 26, ageMax: 36, matchBy: "adult", childMin: 0, childMax: 0.5,
        why: "家庭责任陡增。有娃之后，保险第一顺位保护的是大人的人力资本，而不是先给刚出生的孩子买大额储蓄。",
        fits: [
          { l: "p", t: "大人：百万医疗 + 重疾险 + 定期寿险", w: "大人是孩子的印钞机。寿险保额按「房贷 + 孩子到 22 岁的生活教育费」粗算。" },
          { l: "p", t: "孩子：少儿医保 + 百万医疗 + 少儿意外", w: "每年几百到一千多，先把高频住院与意外账单接住。" },
          { l: "s", t: "孩子：少儿重疾险", w: "儿童重疾保费极低，可在大人配齐后补上白血病等特疾保额。" },
          { l: "c", t: "教育金长期专款", w: "应急金与大人三件套闭环后，再用闲钱启动。",
            money: { tight: { l: "h", w: "手头紧时停掉一切少儿储蓄险，保费全留给大人保额。" }, ample: { l: "s", w: "大人保额做足后，可把 15–18 年后要用的学费独立锁仓。" } } },
          { l: "h", t: "只给孩子买几万块教育金、大人裸奔", w: "这是有娃家庭最常见、也最致命的顺序颠倒。" }
        ]
      },
      {
        id: "f2", name: "育儿前期", age: "孩子约 0–6 岁", ageMin: 28, ageMax: 42, matchBy: "child", childMin: 0, childMax: 6,
        why: "托育、房贷、吃住叠在一起，容错率最低。顺序错了，再好看的教育金计划书也像在沙上盖楼。",
        fits: [
          { l: "p", t: "夫妻双方：重疾 + 医疗 + 定期寿险", w: "任一方收入中断，整个育儿与供房计划都会停摆。" },
          { l: "p", t: "孩子：少儿医保 + 医疗（或中端门急诊）+ 意外", w: "0–6 岁呼吸道与急诊高频，挂钩就医体验与大病兜底。" },
          { l: "c", t: "教育金专款（10–15 年期）", w: "孩子 0–6 岁是留给复利时间最长的一段，但前提是这笔钱中途绝不用来周转。",
            money: { tight: { l: "h", w: "应急金 → 大人保障 → 止。教育金先记账，不锁流动性。" }, ample: { l: "s", w: "保障闭环后启动，专款专用，不与股票或日常活期混放。" } } },
          { l: "h", t: "用教育金名义跳过应急金与大人寿险", w: "大人一旦出事，没交完的储蓄险反而变成现金流负担。" }
        ]
      },
      {
        id: "f3", name: "义务教育期", age: "孩子约 6–15 岁", ageMin: 32, ageMax: 50, matchBy: "child", childMin: 6, childMax: 15,
        why: "课外投入与家庭责任同步抬升，同时家长逼近 40 岁健康核保窗口尾声。",
        fits: [
          { l: "p", t: "家长保额复盘（趁 40 岁健康锁定窗前）", w: "换房或二孩后责任变大，趁体况仍好把重疾与医疗续保锁死。" },
          { l: "p", t: "全家医疗险续保不断档", w: "哪怕当年课外开支再紧，也不能拿保障保费去凑兴趣班。" },
          { l: "c", t: "高等教育 / 留学专款", w: "距离 18 岁仅剩 5–10 年，看重确定性与回本时间，而非远期高演示。",
            money: { tight: { l: "h", w: "周期已短、手头又紧时，优先银行定存/国债，不硬上长期保单。" }, ample: { l: "s", w: "对照孩子是否留学、何时用钱，匹配币种与回笼节点。" } } },
          { l: "h", t: "用短期教育补习挤掉家长重疾/寿险", w: "本金机器一旦停转，后面的升学规划都会失去支点。" }
        ]
      },
      {
        id: "f4", name: "教育高峰", age: "孩子约 15–22 岁", ageMin: 40, ageMax: 58, matchBy: "child", childMin: 15, childMax: 22,
        why: "大学与留学学费集中兑现，而家长正处在 45–55 岁大病高发带。",
        fits: [
          { l: "p", t: "家长重疾与医疗绝对不断档", w: "学费支出最高峰时，最怕家长大病把学费和养老钱一起吞掉。" },
          { l: "s", t: "既有教育金保单按期提取", w: "按合同节奏拿钱交学费，避免临时卖房或低点赎回权益资产。" },
          { l: "c", t: "家长自己的养老筹备启动", w: "孩子一毕业，家长就临近退休；不能把养老底子全垫进学费。" },
          { l: "h", t: "拆父母养老本金去硬凑超额留学开支", w: "教育可以贷款或选性价比路径，晚年护理没有贷款可借。" }
        ]
      },
      {
        id: "f5", name: "责任释放期", age: "孩子独立前后", ageMin: 48, ageMax: 62, matchBy: "adult", childMin: 22, childMax: 30,
        why: "抚养责任卸下，焦点从护航孩子转回护航夫妻二人的晚年。",
        fits: [
          { l: "p", t: "家长医疗延续 + 养老年金兑现规划", w: "把原来花在孩子身上的现金流，转入自己的医疗与退休池。" },
          { l: "s", t: "下调与抚养挂钩的定期寿险保额", w: "房贷清、孩子立，定期寿险已完成历史任务，可自然到期。" },
          { l: "c", t: "保单受益人与资产隔离检视", w: "孩子成家前后，核对既有保单投被保人与受益人安排。" }
        ]
      },
      {
        id: "f6", name: "退休与长寿", age: "约 60 岁以后", ageMin: 60, ageMax: 120, matchBy: "adult",
        why: "让自己的晚年医疗与护理开支自给自足，不成为下一代小家庭的突发重担。",
        fits: [
          { l: "p", t: "医疗 + 护理资金池持续有效", w: "用确定制度接住住院与失能陪护，少动用子女的育儿现金流。" },
          { l: "p", t: "高龄意外险", w: "跌倒骨折高发期的低成本防线。" },
          { l: "c", t: "传承与受益人安排（合规咨询内评估）", w: "先把老两口自己的现金流留足，再谈定向交接。" }
        ]
      }
    ]
  }
};

const TAG_LABEL = { p: "优先", s: "补充", c: "视情况", h: "暂缓" };
const TAG_ORDER = { p: 0, s: 1, c: 2, h: 3 };

function locateStage(profileKey, age, child) {
  const stages = FIT_DATA[profileKey].stages;
  if (profileKey === "family" && child !== "" && child != null) {
    const c = Number(child);
    if (c <= 0.5 && age >= 24 && age <= 38) return stages[0];
    const byChild = stages.filter((s) => s.matchBy === "child" && c >= s.childMin && c <= s.childMax);
    if (byChild.length) return byChild[byChild.length - 1];
    if (c > 22) return age >= 60 ? stages[5] : stages[4];
  }
  const byAdult = stages.filter((s) => age >= s.ageMin && age <= s.ageMax);
  if (byAdult.length) return byAdult[0];
  return age < stages[0].ageMin ? stages[0] : stages[stages.length - 1];
}

function applyMoney(item, money) {
  const ov = item.money && money !== "skip" && item.money[money];
  return {
    l: (ov && ov.l) || item.l,
    t: (ov && ov.t) || item.t,
    w: (ov && ov.w) || item.w
  };
}

function initStageBench() {
  const root = document.querySelector("[data-bench]");
  if (!root) return;
  const profileBtns = [...root.querySelectorAll("[data-profile]")];
  const moneyBtns = [...root.querySelectorAll("[data-money]")];
  const ageInput = root.querySelector("#age");
  const childInput = root.querySelector("#child");
  const childField = root.querySelector("#child-field");
  const out = root.querySelector("[data-stage-out]");

  let profile = "family";
  let money = "skip";

  function render() {
    profileBtns.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.profile === profile)));
    moneyBtns.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.money === money)));
    const showChild = profile === "family";
    childField.hidden = !showChild;
    childField.classList.toggle("is-hidden", !showChild);
    childField.style.display = showChild ? "" : "none";

    const age = Number(ageInput.value) || 35;
    const child = profile === "family" ? childInput.value : "";
    const stage = locateStage(profile, age, child);
    const fits = stage.fits.map((f) => applyMoney(f, money)).sort((a, b) => TAG_ORDER[a.l] - TAG_ORDER[b.l]);

    const q = new URLSearchParams({ profile, age: String(age) });
    if (profile === "family" && child !== "") q.set("child", String(child));
    if (money !== "skip") q.set("money", money);

    out.innerHTML = `
      <div class="stage-banner">
        <div>
          <div class="name">${stage.name}</div>
          <div class="meta">${FIT_DATA[profile].label} · ${stage.age}${money !== "skip" ? " · 已按预算松紧调整优先级" : ""}</div>
        </div>
        <span class="badge">当前定位</span>
        <p class="why">${stage.why}</p>
      </div>
      <div class="fit-list">
        ${fits.map((f) => `
          <div class="fit-row">
            <span class="tag ${f.l}">${TAG_LABEL[f.l]}</span>
            <div><strong>${f.t}</strong><span> · ${f.w}</span></div>
          </div>
        `).join("")}
      </div>
      <div class="tool-Jump">
        <a class="btn" href="lifecycle-map/index.html?${q.toString()}">打开生命周期地图（看风险与准备点）</a>
        <a class="btn ghost" href="lifecycle-map/fit/index.html?${q.toString()}">看全部阶段适配表</a>
      </div>
    `;
  }

  profileBtns.forEach((b) => b.addEventListener("click", () => { profile = b.dataset.profile; render(); }));
  moneyBtns.forEach((b) => b.addEventListener("click", () => { money = b.dataset.money; render(); }));
  ageInput.addEventListener("input", render);
  childInput.addEventListener("input", render);
  root.querySelector("form").addEventListener("submit", (e) => { e.preventDefault(); render(); });
  render();
}

const PROB_BASIS = {
  cn_cancer: {
    label: "中国人群终生患癌（约 27.6%）",
    src: "国家癌症中心团队 · Science China Life Sciences 2025 (GLOBOCAN 2022)",
    self: 0.2761,
    spouse: 0.2761,
    elder: 0.32
  },
  hk_75: {
    label: "香港 75 岁前患癌（男约 25% / 女约 20%）",
    src: "香港癌症资料统计中心 · 2023 统计概览",
    self: 0.25,
    spouse: 0.20,
    elder: 0.28
  },
  cn_stroke: {
    label: "中国 25 岁起终生卒中（约 39.3%）",
    src: "NEJM · GBD 2016 Lifetime Risk of Stroke",
    self: 0.393,
    spouse: 0.393,
    elder: 0.42
  }
};

function initProbCalc() {
  const root = document.querySelector("[data-prob]");
  if (!root) return;
  const basisSel = root.querySelector("#prob-basis");
  const membersSel = root.querySelector("#prob-members");
  const out = root.querySelector("[data-prob-out]");

  function update() {
    const b = PROB_BASIS[basisSel.value];
    const m = membersSel.value;
    let ps = [b.self];
    let desc = "1 位成年人";
    if (m === "couple") { ps = [b.self, b.spouse]; desc = "夫妻 2 人"; }
    else if (m === "plus1") { ps = [b.self, b.spouse, b.elder]; desc = "夫妻 + 1 位长辈"; }
    else if (m === "plus2") { ps = [b.self, b.spouse, b.elder, b.elder]; desc = "夫妻 + 2 位长辈"; }

    const none = ps.reduce((acc, p) => acc * (1 - p), 1);
    const any = 1 - none;
    const pct = (any * 100).toFixed(1);
    const expr = "1 - " + ps.map((p) => `(1 - ${(p * 100).toFixed(0)}%)`).join(" × ");

    out.innerHTML = `
      <div class="prob-num">
        <strong>${pct}%</strong>
        <span>${desc} · 家中至少 1 人发生</span>
      </div>
      <div class="prob-bar"><i style="width:${Math.min(100, any * 100)}%"></i></div>
      <div class="formula">${expr} = ${pct}%</div>
      <p class="fine" style="margin-top:8px">基线出处：${b.src}。按成员相互独立粗算；未把癌症与卒中简单相加（避免重复计入同一人）。</p>
    `;
  }

  basisSel.addEventListener("change", update);
  membersSel.addEventListener("change", update);
  update();
}

function initBudgetCalc() {
  const root = document.querySelector("[data-budget]");
  if (!root) return;
  const incEl = root.querySelector("#b-income");
  const fixEl = root.querySelector("#b-fixed");
  const cashEl = root.querySelector("#b-cash");
  const debtEl = root.querySelector("#b-debt");
  const out = root.querySelector("[data-budget-out]");

  function calc() {
    const inc = Math.max(1, Number(incEl.value) || 40);
    const fix = Math.max(0, Number(fixEl.value) || 20);
    const cash = Math.max(0, Number(cashEl.value) || 15);
    const debt = Math.max(0, Number(debtEl.value) || 150);

    const fixRatio = Math.round((fix / inc) * 100);
    const runway = fix > 0 ? (cash / (fix / 12)).toFixed(1) : "—";
    const ciTarget = Math.round(inc * 3);
    const lifeTarget = Math.round(debt + fix * 5);

    let verdict = "账面有余量，可以把保障与长期专款分开建仓";
    let tone = "green";
    if (Number(runway) < 3 || fixRatio >= 70) {
      verdict = "刚需锁死较高或应急金不足 3 个月：先补医疗/意外/定寿底线，暂缓长期储蓄险";
      tone = "amber";
    } else if (Number(runway) < 6) {
      verdict = "应急金在 3–6 个月区间：优先配齐大人重疾与定期寿险，教育金/养老金小步启动";
    }

    out.innerHTML = `
      <div class="stage-banner" style="background:${tone === "amber" ? "var(--amber-soft)" : "var(--green-soft)"}">
        <div>
          <div class="name" style="color:${tone === "amber" ? "var(--amber)" : "var(--green-2)"}">${verdict}</div>
          <div class="meta">刚性支出占年收入 <strong>${fixRatio}%</strong> · 现金可撑刚需约 <strong>${runway} 个月</strong></div>
        </div>
      </div>
      <div class="fit-list" style="margin-top:12px">
        <div class="fit-row">
          <span class="tag p">重疾锚点</span>
          <div><strong>约 ${ciTarget} 万（家庭 3 年收入量级）</strong><span> · 大病康复期通常 2–3 年，用来替补停工期间的收入中断与护理费，按双方收入比例拆分。</span></div>
        </div>
        <div class="fit-row">
          <span class="tag s">寿险锚点</span>
          <div><strong>约 ${lifeTarget} 万（剩余负债 ${debt} 万 + 5 年刚性支出）</strong><span> · 仅针对背负房贷与抚养责任的阶段，确保极端情况下房子不被收回、家人生活不降级。</span></div>
        </div>
        <div class="fit-row">
          <span class="tag c">保费边界</span>
          <div><strong>保障型年保费宜控制在约 ${Math.round(inc * 0.05)}–${Math.round(inc * 0.08)} 万以内</strong><span> · 保障是支出而不是储蓄；保费过高会反过来变成新的刚性负担。</span></div>
        </div>
      </div>
    `;
  }

  [incEl, fixEl, cashEl, debtEl].forEach((el) => el.addEventListener("input", calc));
  calc();
}

initStageBench();
initProbCalc();
initBudgetCalc();

function initHatChart() {
  const root = document.querySelector("[data-hat]");
  if (!root) return;
  const btns = [...root.querySelectorAll("[data-hat-mode]")];
  const normalG = root.querySelector("#hat-normal-group");
  const shockG = root.querySelector("#hat-shock-group");
  const desc = root.querySelector("[data-hat-desc]");

  function setMode(mode) {
    btns.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.hatMode === mode)));
    const isShock = mode === "shock";
    normalG.style.display = isShock ? "none" : "block";
    shockG.style.display = isShock ? "block" : "none";

    if (isShock) {
      desc.innerHTML = `
        <div class="stage-banner" style="background:var(--red-soft)">
          <div>
            <div class="name" style="color:var(--red)">当帽顶在 38 岁突然塌陷：双重剪刀差</div>
            <p class="why">一场大病或意外，会让家庭账本同时挨两刀：<strong>支出线因自费特药与护工陡然上翘，而主动收入线因停工康复瞬间断崖</strong>。</p>
          </div>
        </div>
        <div class="fit-list" style="margin-top:10px">
          <div class="fit-row">
            <span class="tag h">第 1 刀</span>
            <div><strong>医疗险：压平上翘的医疗峰值</strong><span> · 把几十万的住院与院外靶向药报销掉，让支出线回到正常轨道。</span></div>
          </div>
          <div class="fit-row">
            <span class="tag p">第 2 刀</span>
            <div><strong>重疾险 + 定期寿险：填平塌陷的帽顶</strong><span> · 确诊即赔一笔 3–5 年收入的现金，顶替停工期间的房贷、学费与日常刚需，保住原本留给右帽檐的养老金不被拆掉。</span></div>
          </div>
        </div>
      `;
    } else {
      desc.innerHTML = `
        <div class="stage-banner" style="background:var(--green-soft)">
          <div>
            <div class="name">草帽图第一定律：挣钱一阵子，花钱一辈子</div>
            <p class="why">人的支出从出生一直画到终老（整条帽檐），但主动挣钱往往只集中在 25–60 岁这三十多年（中间隆起的帽顶）。</p>
          </div>
        </div>
        <div class="fit-list" style="margin-top:10px">
          <div class="fit-row">
            <span class="tag p">保障作用</span>
            <div><strong>给「帽顶」加装防塌支架</strong><span> · 30–50 岁正是帽顶最高、家里老小全靠这条线撑着的时候。医疗、重疾、定寿的作用，是万一发生疾病或意外，不让收入线断崖。</span></div>
          </div>
          <div class="fit-row">
            <span class="tag s">储蓄作用</span>
            <div><strong>把「帽顶盈余」跨时间搬到「右帽檐」</strong><span> · 年金与长期储蓄险不追求暴富，而是用契约锁住奋斗期的结余，防止年轻时随手花光或投资亏损，确保 60 岁后有持续现金流。</span></div>
          </div>
        </div>
      `;
    }
  }

  btns.forEach((b) => b.addEventListener("click", () => setMode(b.dataset.hatMode)));
}

initHatChart();

