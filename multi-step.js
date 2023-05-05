//5/5/23 Update

const _0x3afa5d = _0x3e90;
(function (_0x373cc4, _0x55e120) {
  const _0x5edfdb = _0x3e90,
    _0x59de56 = _0x373cc4();
  while (!![]) {
    try {
      const _0x44f331 =
        parseInt(_0x5edfdb(0x23f)) / 0x1 +
        parseInt(_0x5edfdb(0x224)) / 0x2 +
        (parseInt(_0x5edfdb(0x260)) / 0x3) *
          (-parseInt(_0x5edfdb(0x1dd)) / 0x4) +
        (parseInt(_0x5edfdb(0x287)) / 0x5) *
          (-parseInt(_0x5edfdb(0x22c)) / 0x6) +
        -parseInt(_0x5edfdb(0x275)) / 0x7 +
        parseInt(_0x5edfdb(0x289)) / 0x8 +
        parseInt(_0x5edfdb(0x20e)) / 0x9;
      if (_0x44f331 === _0x55e120) break;
      else _0x59de56["push"](_0x59de56["shift"]());
    } catch (_0x38aa5c) {
      _0x59de56["push"](_0x59de56["shift"]());
    }
  }
})(_0x142c, 0x2267a);
let x = 0x0,
  curStep = 0x0,
  steps = $(_0x3afa5d(0x207)),
  progressbarClone = $("[data-form=\x22progress-indicator\x22]")[
    _0x3afa5d(0x1e7)
  ](),
  progressbar,
  countCard = !![],
  weightedSelection = $(_0x3afa5d(0x1ef))["data"](_0x3afa5d(0x29a)),
  selectMultiple = $(_0x3afa5d(0x28a))[_0x3afa5d(0x214)]("select-multiple"),
  customError = $(_0x3afa5d(0x256))[_0x3afa5d(0x214)](_0x3afa5d(0x250)),
  fill = ![],
  inputFilled = !![],
  selectFilled = !![],
  radioFilled = !![],
  checkboxFilled = !![],
  emailFilled = !![],
  textareaFilled = !![],
  telFilled = !![],
  fileFilled = !![],
  numFilled = !![],
  answer = "",
  selections = [],
  selection = [],
  empReqInput = [],
  empReqRadio = [],
  empReqSelect = [],
  empReqTextarea = [],
  empReqFile = [],
  empReqNum = [],
  empReqEmail = [],
  empReqTel = [],
  reinitIX = $("[data-reinit]")["data"]("reinit"),
  textareaLength = 0x0,
  textInputLength = 0x0,
  emailInputLength = 0x0,
  selectInputLength = 0x0,
  checkboxInputLength = 0x0,
  filledInput = [],
  savedFilledInput = JSON[_0x3afa5d(0x1e8)](
    localStorage[_0x3afa5d(0x1dc)](_0x3afa5d(0x1f9))
  ),
  memory = $(_0x3afa5d(0x26f))[_0x3afa5d(0x214)](_0x3afa5d(0x268)),
  quiz = $("[data-quiz]")[_0x3afa5d(0x214)](_0x3afa5d(0x21c)),
  progress = 0x0;
const urlFormly = new URL(window[_0x3afa5d(0x27d)][_0x3afa5d(0x259)]);
let params = $("[data-query-param]")["data"](_0x3afa5d(0x298)),
  skipTo = 0x0,
  next = ![],
  back = ![],
  selArr = [],
  selString = [],
  emptyInput = 0x0,
  searchQ = [],
  domainAllowed = !![],
  dom = [],
  logicExtra = $(_0x3afa5d(0x23a))[_0x3afa5d(0x214)](_0x3afa5d(0x20d)),
  oldSubmitText = $("[data-form=\x22submit-btn\x22]")["val"](),
  oldResetText = $("[data-btn=\x22reset\x22]")[_0x3afa5d(0x28e)](),
  formReset = $(_0x3afa5d(0x23a))[_0x3afa5d(0x214)]("reset"),
  successCard = "",
  redirectTo = "",
  totalSteps = 0x0;
var checkCount = 0x0;
let resetDelay = $("[data-reset-delay]")[_0x3afa5d(0x214)](_0x3afa5d(0x2a1))
    ? $(_0x3afa5d(0x211))[_0x3afa5d(0x214)](_0x3afa5d(0x2a1))
    : 0x7d0,
  redirectDelay = $("[data-redirect-delay]")[_0x3afa5d(0x214)](_0x3afa5d(0x1db))
    ? $("[data-redirect-delay]")[_0x3afa5d(0x214)](_0x3afa5d(0x1db))
    : 0x7d0,
  newTab = !![],
  unfilledArr = [];
all_data = [];
$("[data-count-card]")["length"] > 0x0 &&
  (countCard = $("[data-count-card]")[_0x3afa5d(0x214)](_0x3afa5d(0x285)));
$(_0x3afa5d(0x27c))[_0x3afa5d(0x292)](),
  $(progressbarClone)[_0x3afa5d(0x242)](_0x3afa5d(0x25a)),
  $("[data-form=\x22progress\x22]")["children"]()["remove"](),
  $(_0x3afa5d(0x283))[_0x3afa5d(0x292)](),
  steps[_0x3afa5d(0x1f8)](function () {
    const _0x1e3ab9 = _0x3afa5d;
    $(_0x1e3ab9(0x20c))[_0x1e3ab9(0x227)](
      progressbarClone[_0x1e3ab9(0x1e7)](!![], !![])
    );
  }),
  $("[data-input-field]")[_0x3afa5d(0x292)]();
countCard
  ? ((curStep = curStep + 0x1),
    (totalSteps = steps["length"]),
    $(_0x3afa5d(0x28f))[_0x3afa5d(0x28e)](totalSteps))
  : ($(steps[x])[_0x3afa5d(0x214)]("card")
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    (totalSteps = $(_0x3afa5d(0x1de))[_0x3afa5d(0x276)]),
    $(_0x3afa5d(0x28f))[_0x3afa5d(0x28e)](totalSteps),
    $(_0x3afa5d(0x1eb))[_0x3afa5d(0x1f8)](function () {
      const _0x31b641 = _0x3afa5d;
      $(
        $("[data-form=\x22progress-indicator\x22]")[$(this)[_0x31b641(0x1f7)]()]
      )[_0x31b641(0x292)]();
    }));
(progressbar = $(_0x3afa5d(0x20c))[_0x3afa5d(0x24e)]()),
  $(_0x3afa5d(0x21f))["on"](_0x3afa5d(0x258), clickableIndicator),
  $(_0x3afa5d(0x200))[_0x3afa5d(0x28e)](curStep),
  steps[_0x3afa5d(0x292)](),
  $(_0x3afa5d(0x1f2))[_0x3afa5d(0x292)](),
  $(_0x3afa5d(0x1d3))[_0x3afa5d(0x1f8)](function () {
    const _0x508dc3 = _0x3afa5d;
    $(this)["attr"]("type", _0x508dc3(0x213));
  });
function getParams() {
  const _0x35dc80 = _0x3afa5d;
  urlFormly[_0x35dc80(0x1e6)][_0x35dc80(0x26b)](function (
    _0x4fcbd8,
    _0x29ae2e
  ) {
    const _0x383422 = _0x35dc80;
    searchQ[_0x383422(0x248)]({ val: _0x4fcbd8, key: _0x29ae2e });
  });
}
function getSafe(_0x1f64a3, _0x381fe2) {
  try {
    return _0x1f64a3();
  } catch (_0x5095e2) {
    return _0x381fe2;
  }
}
savedFilledInput &&
  memory &&
  savedFilledInput["forEach"]((_0x26ed5f) => {
    const _0x3478e1 = _0x3afa5d;
    if (
      $(
        _0x3478e1(0x204) +
          _0x26ed5f[_0x3478e1(0x290)] +
          "\x22][value=\x22" +
          _0x26ed5f[_0x3478e1(0x261)] +
          "\x22]"
      )[_0x3478e1(0x1e9)](_0x3478e1(0x2a0)) === "radio"
    )
      $(
        _0x3478e1(0x204) +
          _0x26ed5f[_0x3478e1(0x290)] +
          _0x3478e1(0x1df) +
          _0x26ed5f["value"] +
          "\x22]"
      )[_0x3478e1(0x258)](),
        $(
          _0x3478e1(0x204) +
            _0x26ed5f[_0x3478e1(0x290)] +
            "\x22][value=\x22" +
            _0x26ed5f["value"] +
            "\x22]"
        )
          ["siblings"](".w-radio-input")
          ["addClass"]("w--redirected-checked");
    else
      _0x26ed5f["value"] === "on"
        ? ($(_0x3478e1(0x204) + _0x26ed5f[_0x3478e1(0x290)] + "\x22]")[
            _0x3478e1(0x258)
          ](),
          $(_0x3478e1(0x204) + _0x26ed5f[_0x3478e1(0x290)] + "\x22]")
            ["siblings"](_0x3478e1(0x1d0))
            [_0x3478e1(0x1e2)](_0x3478e1(0x218)))
        : ($(_0x3478e1(0x204) + _0x26ed5f[_0x3478e1(0x290)] + "\x22]")[
            _0x3478e1(0x222)
          ](_0x26ed5f[_0x3478e1(0x261)]),
          $(_0x3478e1(0x2a3) + _0x26ed5f[_0x3478e1(0x290)] + "\x22]")[
            _0x3478e1(0x222)
          ](_0x26ed5f[_0x3478e1(0x261)]),
          $(_0x3478e1(0x239) + _0x26ed5f[_0x3478e1(0x290)] + "\x22]")
            [_0x3478e1(0x29d)](
              _0x3478e1(0x220) + _0x26ed5f[_0x3478e1(0x261)] + "\x22]"
            )
            ["prop"](_0x3478e1(0x217), !![]));
  });
params &&
  (getParams(),
  searchQ[_0x3afa5d(0x26b)]((_0x512259) => {
    const _0x187290 = _0x3afa5d;
    if (
      $(
        _0x187290(0x204) +
          _0x512259["key"] +
          _0x187290(0x1df) +
          _0x512259["val"] +
          "\x22]"
      )["attr"](_0x187290(0x2a0)) === _0x187290(0x1f4)
    )
      $(
        _0x187290(0x204) +
          _0x512259[_0x187290(0x23b)] +
          _0x187290(0x1df) +
          _0x512259[_0x187290(0x222)] +
          "\x22]"
      )[_0x187290(0x258)](),
        $(
          "input[name=\x22" +
            _0x512259[_0x187290(0x23b)] +
            "\x22][value=\x22" +
            _0x512259["val"] +
            "\x22]"
        )
          [_0x187290(0x26d)](_0x187290(0x1f6))
          ["addClass"]("w--redirected-checked"),
        $(
          _0x187290(0x204) +
            _0x512259[_0x187290(0x23b)] +
            "\x22][value=\x22" +
            _0x512259[_0x187290(0x222)] +
            "\x22]"
        )[_0x187290(0x20f)](_0x187290(0x270));
    else
      _0x512259[_0x187290(0x222)] === "on"
        ? ($(_0x187290(0x204) + _0x512259[_0x187290(0x23b)] + "\x22]")[
            "click"
          ](),
          $(_0x187290(0x204) + _0x512259[_0x187290(0x23b)] + "\x22]")
            ["siblings"](".w-checkbox-input")
            [_0x187290(0x1e2)](_0x187290(0x218)),
          $(_0x187290(0x204) + _0x512259[_0x187290(0x23b)] + "\x22]")[
            _0x187290(0x20f)
          ]("input"))
        : ($(_0x187290(0x204) + _0x512259[_0x187290(0x23b)] + "\x22]")["val"](
            _0x512259[_0x187290(0x222)]
          ),
          $(_0x187290(0x2a3) + _0x512259["key"] + "\x22]")[_0x187290(0x222)](
            _0x512259[_0x187290(0x222)]
          ),
          $("select[name=\x22" + _0x512259[_0x187290(0x23b)] + "\x22]")
            [_0x187290(0x29d)](
              _0x187290(0x220) + _0x512259[_0x187290(0x222)] + "\x22]"
            )
            ["prop"](_0x187290(0x217), !![]),
          $(_0x187290(0x204) + _0x512259[_0x187290(0x23b)] + "\x22]")[
            _0x187290(0x20f)
          ](_0x187290(0x270)),
          $(_0x187290(0x204) + _0x512259[_0x187290(0x23b)] + "\x22]")[
            _0x187290(0x20f)
          ](_0x187290(0x277)));
  }));
quiz &&
  steps[_0x3afa5d(0x1f8)](function () {
    const _0x31f222 = _0x3afa5d;
    $(this)["children"]()[_0x31f222(0x1e9)](_0x31f222(0x1fc), !![]),
      $(this)[_0x31f222(0x24e)]()[_0x31f222(0x1e9)](_0x31f222(0x1da), 0xfa);
  });
function disableBtn(_0xf73f95) {
  const _0x3ed85f = _0x3afa5d;
  (fill = ![]),
    !customError &&
      ($(_0x3ed85f(0x281))["css"]({ opacity: "0.4", "pointer-events": "none" }),
      $("[data-form=\x22next-btn\x22]")["addClass"](_0x3ed85f(0x25e)),
      $(_0x3ed85f(0x283))[_0x3ed85f(0x29b)]({
        opacity: _0x3ed85f(0x1d7),
        "pointer-events": _0x3ed85f(0x24b),
      }),
      $("[data-form=\x22submit-btn\x22]")[_0x3ed85f(0x1e2)]("disabled"));
}
function enableBtn() {
  const _0x5e8ab0 = _0x3afa5d;
  (fill = !![]),
    $(_0x5e8ab0(0x281))[_0x5e8ab0(0x29b)]({
      "pointer-events": _0x5e8ab0(0x1d5),
      opacity: "1",
    }),
    $(_0x5e8ab0(0x281))[_0x5e8ab0(0x242)](_0x5e8ab0(0x25e)),
    $(_0x5e8ab0(0x283))[_0x5e8ab0(0x29b)]({
      "pointer-events": _0x5e8ab0(0x1d5),
      opacity: "1",
    }),
    $(_0x5e8ab0(0x283))["removeClass"]("disabled");
}
function saveFilledInput() {
  const _0x449509 = _0x3afa5d;
  $(_0x449509(0x29f))
    ["not"](_0x449509(0x1e5))
    [_0x449509(0x1f8)](function () {
      const _0x56880b = _0x449509;
      $(this)[_0x56880b(0x1e9)](_0x56880b(0x2a0)) === _0x56880b(0x24d) ||
      $(this)["attr"](_0x56880b(0x2a0)) === _0x56880b(0x1f4)
        ? $(this)["prop"](_0x56880b(0x1ce)) &&
          (filledInput["some"](
            (_0x4a9a89) =>
              _0x4a9a89[_0x56880b(0x290)] ===
              $(this)[_0x56880b(0x1e9)](_0x56880b(0x271))
          )
            ? ((filledInput = filledInput[_0x56880b(0x28b)](
                (_0x31f549) =>
                  _0x31f549[_0x56880b(0x290)] !==
                  $(this)[_0x56880b(0x1e9)](_0x56880b(0x271))
              )),
              $(this)[_0x56880b(0x222)]() !== "" &&
                filledInput[_0x56880b(0x248)]({
                  inputName: $(this)[_0x56880b(0x1e9)](_0x56880b(0x271)),
                  value: $(this)[_0x56880b(0x222)](),
                }))
            : $(this)["val"]() !== "" &&
              filledInput["push"]({
                inputName: $(this)["attr"]("name"),
                value: $(this)[_0x56880b(0x222)](),
              }))
        : filledInput["some"](
            (_0x386f23) =>
              _0x386f23[_0x56880b(0x290)] === $(this)[_0x56880b(0x1e9)]("name")
          )
        ? ((filledInput = filledInput[_0x56880b(0x28b)](
            (_0x2fe193) =>
              _0x2fe193[_0x56880b(0x290)] !== $(this)["attr"](_0x56880b(0x271))
          )),
          $(this)[_0x56880b(0x222)]() !== "" &&
            filledInput[_0x56880b(0x248)]({
              inputName: $(this)[_0x56880b(0x1e9)](_0x56880b(0x271)),
              value: $(this)[_0x56880b(0x222)](),
            }))
        : $(this)[_0x56880b(0x222)]() !== "" &&
          filledInput[_0x56880b(0x248)]({
            inputName: $(this)[_0x56880b(0x1e9)]("name"),
            value: $(this)[_0x56880b(0x222)](),
          });
    }),
    filledInput &&
      filledInput["forEach"]((_0x25c05c) => {
        const _0x2637a1 = _0x449509;
        urlFormly["searchParams"][_0x2637a1(0x257)](
          _0x25c05c[_0x2637a1(0x290)]
        ),
          urlFormly[_0x2637a1(0x1e6)][_0x2637a1(0x1ee)](
            _0x25c05c[_0x2637a1(0x290)],
            _0x25c05c["value"]
          ),
          window["history"]["replaceState"](null, null, urlFormly);
      }),
    localStorage["removeItem"](_0x449509(0x1f9)),
    localStorage["setItem"]("filledInput", JSON[_0x449509(0x24f)](filledInput));
}
function scrollTop() {}
function updateStep() {
  const _0x456d40 = _0x3afa5d;
  (skip = ![]),
    (inputFilled = !![]),
    (radioFilled = !![]),
    (checkboxFilled = !![]),
    (numFilled = !![]),
    (selectFilled = !![]),
    (textareaFilled = !![]),
    (telFilled = !![]),
    (emailFilled = !![]),
    (emptyInput = 0x0),
    (empReqInput = []),
    (empReqSelect = []),
    (empReqTextarea = []),
    (empReqNum = []),
    (empReqRadio = []),
    $(_0x456d40(0x221))[_0x456d40(0x242)](_0x456d40(0x25e));
  $("[data-clickable]")[_0x456d40(0x214)]("clickable") &&
    (steps[_0x456d40(0x29d)](_0x456d40(0x299))["each"](function () {
      const _0x55af6f = _0x456d40;
      $(
        $(_0x55af6f(0x221))[
          $(this)[_0x55af6f(0x28c)](_0x55af6f(0x207))[_0x55af6f(0x1f7)]()
        ]
      ),
        $(this)["val"]() === "" && emptyInput++;
    }),
    emptyInput > 0x0
      ? $(_0x456d40(0x284))[_0x456d40(0x1e2)](_0x456d40(0x25e))
      : $(_0x456d40(0x284))[_0x456d40(0x242)]("disabled"));
  $(_0x456d40(0x221))[_0x456d40(0x242)]("current"),
    $(_0x456d40(0x221))[_0x456d40(0x1e2)](_0x456d40(0x25e)),
    $($("[data-form=\x22custom-progress-indicator\x22]")[x])[_0x456d40(0x1e2)](
      "current"
    ),
    (selection = selections["filter"](
      (_0x429e7b) => _0x429e7b[_0x456d40(0x23c)] === x - 0x1
    ));
  next &&
    (x = getSafe(() => selection[0x0][_0x456d40(0x240)])
      ? parseInt(getSafe(() => selection[0x0][_0x456d40(0x240)]))
      : x);
  $("[data-answer]")[_0x456d40(0x292)](), steps["hide"]();
  reinitIX === !![] && window["Webflow"][_0x456d40(0x288)]();
  $(progressbar)["removeClass"](_0x456d40(0x25a));
  for (i = 0x0; i <= x; i++) {
    countCard
      ? $(progressbar[i])[_0x456d40(0x1e2)]("current")
      : !$(steps[i])[_0x456d40(0x214)](_0x456d40(0x272)) &&
        $(progressbar[i])[_0x456d40(0x1e2)](_0x456d40(0x25a));
  }
  reinitIX === !![]
    ? (window[_0x456d40(0x1cd)] &&
        window[_0x456d40(0x1cd)]
          [_0x456d40(0x29e)](_0x456d40(0x20b))
          [_0x456d40(0x234)](),
      document[_0x456d40(0x203)](new Event("readystatechange")),
      $(steps[x])[_0x456d40(0x20a)]())
    : $(steps[x])[_0x456d40(0x295)](_0x456d40(0x1cc));
  x === 0x0 &&
    !$(steps[x])["data"]("card") &&
    $(steps[x])["find"](_0x456d40(0x236))["show"]();
  selection[_0x456d40(0x276)] > 0x0
    ? $(steps[x])
        [_0x456d40(0x29d)](
          _0x456d40(0x255) + selection[0x0][_0x456d40(0x217)] + "\x22]"
        )
        ["show"]()
    : $(steps[x])
        ["find"]("[data-answer=\x22" + answer + "\x22]")
        ["show"]();
  if (x === 0x0)
    $(_0x456d40(0x24a))[_0x456d40(0x292)](),
      $(_0x456d40(0x281))[_0x456d40(0x20a)]();
  else {
    if (
      x === steps[_0x456d40(0x276)] - 0x1 ||
      $(steps[x])["find"](_0x456d40(0x229))[_0x456d40(0x276)] > 0x0
    ) {
      $("[data-form=\x22next-btn\x22]")[_0x456d40(0x292)]();
      if ($(steps[x])["find"](_0x456d40(0x1ec))["data"](_0x456d40(0x279)))
        $(steps[x])[_0x456d40(0x29d)](_0x456d40(0x1ec))[_0x456d40(0x20a)]();
      else
        $(_0x456d40(0x281))["data"]("submit-show") &&
          $(_0x456d40(0x281))[_0x456d40(0x20a)]();
      $(_0x456d40(0x283))[_0x456d40(0x20a)](), $(_0x456d40(0x24a))["show"]();
    } else
      $(_0x456d40(0x281))[_0x456d40(0x20a)](),
        $(_0x456d40(0x24a))[_0x456d40(0x20a)](),
        $(_0x456d40(0x283))[_0x456d40(0x292)]();
  }
  $($(steps[x])[_0x456d40(0x29d)](_0x456d40(0x26c))[0x0])[_0x456d40(0x266)](),
    $($(steps[x])["find"](_0x456d40(0x22a))[0x0])[_0x456d40(0x266)](),
    validation();
  for (idx = 0x0; idx <= x; idx++) {
    $($(_0x456d40(0x221))[idx])[_0x456d40(0x242)](_0x456d40(0x25e));
  }
}
function validateEmail(_0x2e0798, _0x1401fe, _0x2a7b5f) {
  const _0x768ad3 = _0x3afa5d;
  let _0x3b5ae4 = _0x2e0798["includes"]("@")
    ? _0x2e0798["split"]("@")[0x1]["split"](".")[0x0]
    : [];
  dom = [];
  _0x1401fe !== undefined &&
    _0x1401fe[_0x768ad3(0x269)](",")["forEach"](function (_0x44ec95) {
      const _0x124177 = _0x768ad3;
      _0x44ec95[_0x124177(0x278)](_0x3b5ae4) &&
        dom[_0x124177(0x248)](_0x3b5ae4);
    });
  dom[_0x768ad3(0x276)] > 0x0 ? (domainAllowed = ![]) : (domainAllowed = !![]);
  var _0x10dad9 = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,20})?$/;
  !_0x10dad9[_0x768ad3(0x205)](_0x2e0798)
    ? ((emailFilled = ![]), unfilledArr[_0x768ad3(0x248)]({ input: _0x2a7b5f }))
    : (emailFilled = !![]);
}
function validation() {
  const _0x46c330 = _0x3afa5d;
  $(steps[x])[_0x46c330(0x214)]("card") && enableBtn();
  (unfilledArr = []),
    (textareaLength = $(steps[x])[_0x46c330(0x29d)](_0x46c330(0x1f1))[
      _0x46c330(0x276)
    ]),
    (textInputLength = $(steps[x])[_0x46c330(0x29d)](_0x46c330(0x274))[
      "length"
    ]),
    (selectInputLength = $(steps[x])[_0x46c330(0x29d)](
      "select[required]:visible"
    )[_0x46c330(0x276)]),
    (emailInputLength = $(steps[x])["find"](_0x46c330(0x297))["length"]),
    (checkboxInputLength = $(steps[x])[_0x46c330(0x29d)](
      "input[type=\x22checkbox\x22]:visible"
    )[_0x46c330(0x276)]);
  textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0
    ? disableBtn()
    : enableBtn();
  (checkCount = $(steps[x])[_0x46c330(0x214)](_0x46c330(0x24d))
    ? $(steps[x])[_0x46c330(0x214)]("checkbox")
    : $(steps[x])[_0x46c330(0x29d)](_0x46c330(0x1cf))
    ? $(steps[x])
        [_0x46c330(0x29d)]("[data-checkbox]")
        [_0x46c330(0x214)](_0x46c330(0x24d))
    : 0x0),
    console[_0x46c330(0x21d)](checkCount);
  if (!logicExtra)
    $(steps[x])
      [_0x46c330(0x29d)](_0x46c330(0x27b))
      ["is"]("[type=\x22checkbox\x22]") &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])[_0x46c330(0x29d)](":input[type=\x22checkbox\x22]")[
          _0x46c330(0x276)
        ]
        ? $(steps[x])
            [_0x46c330(0x29d)](_0x46c330(0x26a))
            ["each"](function () {
              const _0x106106 = _0x46c330;
              $(this)["is"](_0x106106(0x1d6))
                ? $(steps[x])["find"](
                    ":input[type=\x22checkbox\x22][required]"
                  )[_0x106106(0x276)] < 0x1 &&
                  ((checkboxFilled = !![]),
                  resetInputErrorMessage($(this)["attr"](_0x106106(0x271))))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0x106106(0x248)]({
                    input: $(this)[_0x106106(0x1e9)](_0x106106(0x271)),
                  }));
            })
        : $(steps[x])["find"](_0x46c330(0x1fd))[_0x46c330(0x276)] >= checkCount
        ? $(steps[x])[_0x46c330(0x29d)](_0x46c330(0x225))[_0x46c330(0x276)] >
          0x0
          ? $(steps[x])
              [_0x46c330(0x29d)](_0x46c330(0x225))
              [_0x46c330(0x1f8)](function () {
                const _0x3013ef = _0x46c330;
                !$(this)["is"](_0x3013ef(0x1d6))
                  ? ((checkboxFilled = ![]),
                    unfilledArr[_0x3013ef(0x248)]({
                      input: $(this)["attr"](_0x3013ef(0x271)),
                    }))
                  : ((checkboxFilled = !![]),
                    $(steps[x])[_0x3013ef(0x29d)](_0x3013ef(0x1ed))[
                      _0x3013ef(0x276)
                    ] >=
                      $(steps[x])[_0x3013ef(0x29d)](_0x3013ef(0x225))[
                        "length"
                      ] &&
                      resetInputErrorMessage(
                        $(steps[x])
                          [_0x3013ef(0x29d)](_0x3013ef(0x26a))
                          ["attr"]("name")
                      ));
              })
          : ((checkboxFilled = !![]),
            resetInputErrorMessage(
              $(steps[x])
                [_0x46c330(0x29d)](":input[type=\x22checkbox\x22]")
                ["attr"](_0x46c330(0x271))
            ))
        : ((checkboxFilled = ![]),
          $(steps[x])
            [_0x46c330(0x29d)](_0x46c330(0x225))
            [_0x46c330(0x1f8)](function () {
              const _0xb1e39f = _0x46c330;
              $(this)[_0xb1e39f(0x230)](":checked") &&
                unfilledArr["push"]({
                  input: $(this)[_0xb1e39f(0x1e9)](_0xb1e39f(0x271)),
                });
            }),
          unfilledArr["push"]({
            input: $(steps[x])
              [_0x46c330(0x29d)](":input[type=\x22checkbox\x22]")
              [_0x46c330(0x1e9)](_0x46c330(0x271)),
          }))),
      $(steps[x])
        ["find"]("input:radio[required]")
        ["each"](function (_0x44b869) {
          const _0x391428 = _0x46c330;
          var _0x35437e = $(this)["attr"](_0x391428(0x271));
          $(_0x391428(0x293) + _0x35437e + "\x22]:checked")["length"] == 0x0
            ? (!empReqRadio["find"](
                (_0x45f088) => _0x45f088["input"] === _0x44b869
              ) && empReqRadio["push"]({ input: _0x44b869 }),
              unfilledArr[_0x391428(0x248)]({
                input: $(this)[_0x391428(0x1e9)]("name"),
              }))
            : (empReqRadio = empReqRadio[_0x391428(0x28b)](
                (_0x2b4047) => _0x2b4047[_0x391428(0x270)] !== _0x44b869
              )),
            empReqRadio["length"] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0x46c330(0x29d)](":input[type=\x22text\x22][required]")
        [_0x46c330(0x1f8)](function (_0x353af6) {
          const _0x3027d0 = _0x46c330;
          $(this)[_0x3027d0(0x222)]() !== ""
            ? (empReqInput = empReqInput[_0x3027d0(0x28b)](
                (_0x230fb2) => _0x230fb2[_0x3027d0(0x270)] !== _0x353af6
              ))
            : (!empReqInput[_0x3027d0(0x29d)](
                (_0x3fd4b2) => _0x3fd4b2[_0x3027d0(0x270)] === _0x353af6
              ) && empReqInput[_0x3027d0(0x248)]({ input: _0x353af6 }),
              unfilledArr["push"]({
                input: $(this)[_0x3027d0(0x1e9)](_0x3027d0(0x271)),
              })),
            empReqInput[_0x3027d0(0x276)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        ["find"](":input[type=\x22tel\x22][required]")
        ["each"](function (_0x433ec1) {
          const _0x1a3239 = _0x46c330;
          $(this)[_0x1a3239(0x222)]() !== ""
            ? (empReqTel = empReqTel[_0x1a3239(0x28b)](
                (_0x3d850b) => _0x3d850b["input"] !== _0x433ec1
              ))
            : (!empReqTel["find"](
                (_0x5ed71e) => _0x5ed71e[_0x1a3239(0x270)] === _0x433ec1
              ) && empReqTel[_0x1a3239(0x248)]({ input: _0x433ec1 }),
              unfilledArr[_0x1a3239(0x248)]({
                input: $(this)[_0x1a3239(0x1e9)](_0x1a3239(0x271)),
              })),
            empReqTel[_0x1a3239(0x276)] === 0x0
              ? (telFilled = !![])
              : (telFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x46c330(0x237))
        [_0x46c330(0x1f8)](function (_0x593b85) {
          const _0x3f5f65 = _0x46c330;
          $(this)[_0x3f5f65(0x222)]() !== ""
            ? (empReqFile = empReqFile[_0x3f5f65(0x28b)](
                (_0x13e9a9) => _0x13e9a9[_0x3f5f65(0x270)] !== _0x593b85
              ))
            : (!empReqFile[_0x3f5f65(0x29d)](
                (_0x1a55a2) => _0x1a55a2["input"] === _0x593b85
              ) && empReqFile[_0x3f5f65(0x248)]({ input: _0x593b85 }),
              unfilledArr[_0x3f5f65(0x248)]({
                input: $(this)[_0x3f5f65(0x1e9)](_0x3f5f65(0x271)),
              })),
            empReqFile[_0x3f5f65(0x276)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x46c330(0x29d)](_0x46c330(0x210))
        [_0x46c330(0x1f8)](function (_0x309987) {
          const _0x2c6df5 = _0x46c330;
          $(this)[_0x2c6df5(0x222)]() !== ""
            ? (empReqNum = empReqNum[_0x2c6df5(0x28b)](
                (_0x3c928d) => _0x3c928d[_0x2c6df5(0x270)] !== _0x309987
              ))
            : (!empReqNum["find"](
                (_0x4eaed6) => _0x4eaed6["input"] === _0x309987
              ) && empReqNum[_0x2c6df5(0x248)]({ input: _0x309987 }),
              unfilledArr[_0x2c6df5(0x248)]({
                input: $(this)[_0x2c6df5(0x1e9)](_0x2c6df5(0x271)),
              })),
            empReqNum["length"] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x46c330(0x29d)](_0x46c330(0x267))
        [_0x46c330(0x1f8)](function (_0x4b510b) {
          const _0x57f95b = _0x46c330;
          let _0x1f4f85 = $(this)["val"]();
          _0x1f4f85 === "" && (_0x1f4f85 = null),
            _0x1f4f85 != null
              ? (empReqSelect = empReqSelect["filter"](
                  (_0x19d991) => _0x19d991[_0x57f95b(0x270)] !== _0x4b510b
                ))
              : (!empReqSelect["find"](
                  (_0x58db65) => _0x58db65[_0x57f95b(0x270)] === _0x4b510b
                ) && empReqSelect[_0x57f95b(0x248)]({ input: _0x4b510b }),
                unfilledArr["push"]({
                  input: $(this)[_0x57f95b(0x1e9)]("name"),
                })),
            empReqSelect[_0x57f95b(0x276)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x46c330(0x1d9))
        [_0x46c330(0x1f8)](function (_0x1bd060) {
          const _0x21e2ba = _0x46c330;
          $(this)[_0x21e2ba(0x222)]() !== ""
            ? (empReqTextarea = empReqTextarea[_0x21e2ba(0x28b)](
                (_0x235b3d) => _0x235b3d[_0x21e2ba(0x270)] !== _0x1bd060
              ))
            : (!empReqTextarea[_0x21e2ba(0x29d)](
                (_0x53651a) => _0x53651a["input"] === _0x1bd060
              ) && empReqTextarea["push"]({ input: _0x1bd060 }),
              unfilledArr[_0x21e2ba(0x248)]({
                input: $(this)[_0x21e2ba(0x1e9)](_0x21e2ba(0x271)),
              })),
            empReqTextarea[_0x21e2ba(0x276)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x46c330(0x29d)](_0x46c330(0x23d))
        [_0x46c330(0x1f8)](function () {
          const _0x4c6558 = _0x46c330;
          $(this)[_0x4c6558(0x222)]() !== ""
            ? validateEmail(
                $(this)[_0x4c6558(0x222)](),
                $(this)[_0x4c6558(0x214)]("block-domain"),
                $(this)[_0x4c6558(0x1e9)](_0x4c6558(0x271))
              )
            : ((emailFilled = ![]),
              unfilledArr[_0x4c6558(0x248)]({
                input: $(this)[_0x4c6558(0x1e9)](_0x4c6558(0x271)),
              }));
        });
  else {
    if ($(steps[x])[_0x46c330(0x214)](_0x46c330(0x272)))
      (answer = $(steps[x])
        [_0x46c330(0x29d)](_0x46c330(0x228))
        [_0x46c330(0x214)](_0x46c330(0x232))),
        (selections = selections[_0x46c330(0x28b)](
          (_0xe8e4d8) => _0xe8e4d8[_0x46c330(0x23c)] !== x
        )),
        selections[_0x46c330(0x248)]({ step: x, selected: answer });
    else
      $(steps[x])["find"](_0x46c330(0x29c))["data"]("card") &&
        ((answer = $(steps[x])
          [_0x46c330(0x29d)]("[data-answer]:visible")
          [_0x46c330(0x214)](_0x46c330(0x232))),
        (selections = selections["filter"](
          (_0x38b536) => _0x38b536[_0x46c330(0x23c)] !== x
        )),
        selections[_0x46c330(0x248)]({ step: x, selected: answer }));
    $(steps[x])
      [_0x46c330(0x29d)]("[data-answer]:visible")
      [_0x46c330(0x29d)](":input")
      ["is"]("[type=\x22checkbox\x22]") &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])[_0x46c330(0x29d)](":input[type=\x22checkbox\x22]")["length"]
        ? $(steps[x])
            [_0x46c330(0x29d)](_0x46c330(0x26a))
            [_0x46c330(0x1f8)](function () {
              const _0x30f166 = _0x46c330;
              $(this)["is"](_0x30f166(0x1d6))
                ? $(steps[x])[_0x30f166(0x29d)](_0x30f166(0x299))[
                    _0x30f166(0x276)
                  ] < 0x1 &&
                  ((skipTo = undefined),
                  $(this)
                    [_0x30f166(0x28c)](_0x30f166(0x21e))
                    [_0x30f166(0x214)](_0x30f166(0x263)) &&
                    (skipTo = $(this)
                      [_0x30f166(0x28c)]("[data-skip-to]")
                      ["data"](_0x30f166(0x263))),
                  $(this)
                    [_0x30f166(0x28c)](_0x30f166(0x228))
                    [_0x30f166(0x1e9)](_0x30f166(0x1ff)) &&
                    ((answer = $(this)
                      ["parents"](_0x30f166(0x228))
                      [_0x30f166(0x1e9)](_0x30f166(0x1ff))),
                    (selections = selections[_0x30f166(0x28b)](
                      (_0x65bab8) => _0x65bab8[_0x30f166(0x23c)] !== x
                    )),
                    selections[_0x30f166(0x248)]({ step: x, selected: answer }),
                    skipTo &&
                      (selections[_0x30f166(0x248)]({
                        step: skipTo - 0x2,
                        selected: answer,
                      }),
                      (objIndex = selections[_0x30f166(0x1ea)](
                        (_0x5e0526) => _0x5e0526[_0x30f166(0x23c)] === x
                      )),
                      (selections[objIndex][_0x30f166(0x240)] =
                        parseInt(skipTo) - 0x1),
                      (selections[objIndex][_0x30f166(0x247)] = x))),
                  (checkboxFilled = !![]),
                  $(steps[x])[_0x30f166(0x29d)](
                    ":input[type=\x22checkbox\x22][required]:checked"
                  )[_0x30f166(0x276)] >=
                    $(steps[x])[_0x30f166(0x29d)](_0x30f166(0x225))[
                      _0x30f166(0x276)
                    ] &&
                    resetInputErrorMessage(
                      $(steps[x])
                        [_0x30f166(0x29d)](":input[type=\x22checkbox\x22]")
                        [_0x30f166(0x1e9)]("name")
                    ))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0x30f166(0x248)]({
                    input: $(this)[_0x30f166(0x1e9)]("name"),
                  }));
            })
        : $(steps[x])
            ["find"]("[data-answer]:visible")
            [_0x46c330(0x29d)](":input[type=\x22checkbox\x22]:checked")[
            "length"
          ] >= checkCount
        ? ($(steps[x])
            ["find"](_0x46c330(0x29c))
            [_0x46c330(0x29d)](_0x46c330(0x1fd))
            ["parents"](_0x46c330(0x228))
            ["attr"](_0x46c330(0x1ff)) &&
            ((skipTo = undefined),
            $(steps[x])
              [_0x46c330(0x29d)](_0x46c330(0x29c))
              ["find"](":input[type=\x22checkbox\x22]:checked")
              [_0x46c330(0x28c)](_0x46c330(0x21e))
              [_0x46c330(0x1e9)](_0x46c330(0x264)) &&
              (skipTo = $(steps[x])
                [_0x46c330(0x29d)](_0x46c330(0x29c))
                [_0x46c330(0x29d)](_0x46c330(0x1fd))
                [_0x46c330(0x28c)](_0x46c330(0x21e))
                [_0x46c330(0x1e9)](_0x46c330(0x264))),
            (answer = $(steps[x])
              [_0x46c330(0x29d)](_0x46c330(0x29c))
              [_0x46c330(0x29d)](_0x46c330(0x1fd))
              ["parents"](_0x46c330(0x228))
              [_0x46c330(0x1e9)](_0x46c330(0x1ff))),
            (selections = selections["filter"](
              (_0xef1de6) => _0xef1de6[_0x46c330(0x23c)] !== x
            )),
            selections[_0x46c330(0x248)]({ step: x, selected: answer }),
            skipTo &&
              (selections["push"]({ step: skipTo - 0x2, selected: answer }),
              (objIndex = selections[_0x46c330(0x1ea)](
                (_0x534b10) => _0x534b10["step"] === x
              )),
              (selections[objIndex][_0x46c330(0x240)] = parseInt(skipTo) - 0x1),
              (selections[objIndex]["backTo"] = x))),
          (selections = selections["filter"](
            (_0x30d577) => _0x30d577[_0x46c330(0x23c)] !== x
          )),
          selections[_0x46c330(0x248)]({ step: x, selected: answer }),
          (checkboxFilled = !![]),
          $(steps[x])[_0x46c330(0x29d)](_0x46c330(0x1ed))[_0x46c330(0x276)] >=
            $(steps[x])[_0x46c330(0x29d)](_0x46c330(0x225))[_0x46c330(0x276)] &&
            resetInputErrorMessage(
              $(steps[x])["find"](_0x46c330(0x26a))["attr"](_0x46c330(0x271))
            ))
        : ((checkboxFilled = ![]),
          $(steps[x])
            [_0x46c330(0x29d)](_0x46c330(0x225))
            [_0x46c330(0x1f8)](function () {
              const _0x6403ef = _0x46c330;
              $(this)[_0x6403ef(0x230)](_0x6403ef(0x1d6)) &&
                unfilledArr[_0x6403ef(0x248)]({
                  input: $(this)[_0x6403ef(0x1e9)](_0x6403ef(0x271)),
                });
            }))),
      $(steps[x])
        [_0x46c330(0x29d)](_0x46c330(0x29c))
        [_0x46c330(0x29d)](_0x46c330(0x299))
        ["is"](_0x46c330(0x1fa))
        ? $(steps[x])
            [_0x46c330(0x29d)](_0x46c330(0x29c))
            [_0x46c330(0x29d)](_0x46c330(0x286))
            ["is"](":checked")
          ? (radioFilled = !![])
          : (radioFilled = ![])
        : (radioFilled = !![]),
      $(steps[x])
        [_0x46c330(0x29d)](_0x46c330(0x29c))
        [_0x46c330(0x29d)](_0x46c330(0x1d8))
        [_0x46c330(0x1f8)](function (_0x1cce7c) {
          const _0x29af8a = _0x46c330;
          $(this)["val"]() !== ""
            ? (empReqInput = empReqInput[_0x29af8a(0x28b)](
                (_0x42f86a) => _0x42f86a["input"] !== _0x1cce7c
              ))
            : (!empReqInput[_0x29af8a(0x29d)](
                (_0x24bb7f) => _0x24bb7f[_0x29af8a(0x270)] === _0x1cce7c
              ) && empReqInput[_0x29af8a(0x248)]({ input: _0x1cce7c }),
              unfilledArr[_0x29af8a(0x248)]({
                input: $(this)[_0x29af8a(0x1e9)](_0x29af8a(0x271)),
              })),
            empReqInput[_0x29af8a(0x276)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x46c330(0x29c))
        [_0x46c330(0x29d)](_0x46c330(0x1fe))
        [_0x46c330(0x1f8)](function (_0x31032d) {
          const _0x4ec130 = _0x46c330;
          (skipTo = undefined),
            $(this)[_0x4ec130(0x28c)](_0x4ec130(0x21e))["data"]("skip-to") !==
              "" &&
              (skipTo = $(this)
                [_0x4ec130(0x28c)]("[data-skip-to]")
                [_0x4ec130(0x214)]("skip-to")),
            $(this)
              [_0x4ec130(0x28c)]("[data-go-to]")
              [_0x4ec130(0x1e9)]("data-go-to") &&
              ((answer = $(this)
                [_0x4ec130(0x28c)]("[data-go-to]")
                [_0x4ec130(0x1e9)]("data-go-to")),
              (selections = selections[_0x4ec130(0x28b)](
                (_0x1671bd) => _0x1671bd[_0x4ec130(0x23c)] !== x
              )),
              selections[_0x4ec130(0x248)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x4ec130(0x248)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x415ff9) => _0x415ff9["step"] === x
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x4ec130(0x247)] = x)));
        }),
      $(steps[x])
        [_0x46c330(0x29d)](_0x46c330(0x29c))
        [_0x46c330(0x29d)](_0x46c330(0x210))
        ["each"](function (_0x1fb8a8) {
          const _0x2efbf3 = _0x46c330;
          $(this)[_0x2efbf3(0x222)]() !== ""
            ? (empReqNum = empReqNum[_0x2efbf3(0x28b)](
                (_0x1447e4) => _0x1447e4[_0x2efbf3(0x270)] !== _0x1fb8a8
              ))
            : (!empReqNum[_0x2efbf3(0x29d)](
                (_0x12b4f5) => _0x12b4f5[_0x2efbf3(0x270)] === _0x1fb8a8
              ) && empReqNum["push"]({ input: _0x1fb8a8 }),
              unfilledArr[_0x2efbf3(0x248)]({
                input: $(this)[_0x2efbf3(0x1e9)](_0x2efbf3(0x271)),
              })),
            empReqNum[_0x2efbf3(0x276)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x46c330(0x29d)](_0x46c330(0x29c))
        [_0x46c330(0x29d)](":input[type=\x22number\x22]")
        [_0x46c330(0x1f8)](function (_0x1916a2) {
          const _0x2e93c3 = _0x46c330;
          (skipTo = undefined),
            $(this)
              [_0x2e93c3(0x28c)]("[data-skip-to]")
              [_0x2e93c3(0x214)](_0x2e93c3(0x263)) !== "" &&
              (skipTo = $(this)
                [_0x2e93c3(0x28c)]("[data-skip-to]")
                [_0x2e93c3(0x214)](_0x2e93c3(0x263))),
            $(this)
              [_0x2e93c3(0x28c)]("[data-go-to]")
              [_0x2e93c3(0x1e9)]("data-go-to") &&
              ((answer = $(this)
                [_0x2e93c3(0x28c)]("[data-go-to]")
                [_0x2e93c3(0x1e9)](_0x2e93c3(0x1ff))),
              (selections = selections[_0x2e93c3(0x28b)](
                (_0x150f42) => _0x150f42[_0x2e93c3(0x23c)] !== x
              )),
              selections[_0x2e93c3(0x248)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0x2e93c3(0x1ea)](
                  (_0x16b5a5) => _0x16b5a5[_0x2e93c3(0x23c)] === x
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x46c330(0x29d)](_0x46c330(0x29c))
        [_0x46c330(0x29d)](_0x46c330(0x25d))
        [_0x46c330(0x1f8)](function (_0x6e3ff9) {
          const _0x1e1f56 = _0x46c330;
          $(this)["val"]() !== ""
            ? (empReqTel = empReqTel["filter"](
                (_0xfb3af1) => _0xfb3af1[_0x1e1f56(0x270)] !== _0x6e3ff9
              ))
            : (!empReqTel[_0x1e1f56(0x29d)](
                (_0x4b9833) => _0x4b9833[_0x1e1f56(0x270)] === _0x6e3ff9
              ) && empReqTel["push"]({ input: _0x6e3ff9 }),
              unfilledArr["push"]({
                input: $(this)[_0x1e1f56(0x1e9)](_0x1e1f56(0x271)),
              })),
            empReqTel["length"] === 0x0
              ? (telFilled = !![])
              : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x46c330(0x29d)](_0x46c330(0x29c))
        [_0x46c330(0x29d)](_0x46c330(0x22f))
        [_0x46c330(0x1f8)](function (_0x173fb7) {
          const _0x2d318e = _0x46c330;
          (skipTo = undefined),
            $(this)
              [_0x2d318e(0x28c)](_0x2d318e(0x21e))
              [_0x2d318e(0x214)](_0x2d318e(0x263)) !== "" &&
              (skipTo = $(this)
                [_0x2d318e(0x28c)]("[data-skip-to]")
                ["data"](_0x2d318e(0x263))),
            $(this)
              [_0x2d318e(0x28c)]("[data-go-to]")
              [_0x2d318e(0x1e9)](_0x2d318e(0x1ff)) &&
              ((answer = $(this)
                ["parents"]("[data-go-to]")
                [_0x2d318e(0x1e9)](_0x2d318e(0x1ff))),
              (selections = selections[_0x2d318e(0x28b)](
                (_0x4110ab) => _0x4110ab[_0x2d318e(0x23c)] !== x
              )),
              selections[_0x2d318e(0x248)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0x2d318e(0x1ea)](
                  (_0x36792b) => _0x36792b["step"] === x
                )),
                (selections[objIndex][_0x2d318e(0x240)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x2d318e(0x247)] = x)));
        }),
      $(steps[x])
        [_0x46c330(0x29d)](_0x46c330(0x29c))
        [_0x46c330(0x29d)](":input[type=\x22file\x22][required]")
        [_0x46c330(0x1f8)](function (_0x5b223d) {
          const _0x34317a = _0x46c330;
          $(this)["val"]() !== ""
            ? (empReqfile = empReqfile[_0x34317a(0x28b)](
                (_0x527814) => _0x527814[_0x34317a(0x270)] !== _0x5b223d
              ))
            : (!empReqfile[_0x34317a(0x29d)](
                (_0x5bdab1) => _0x5bdab1[_0x34317a(0x270)] === _0x5b223d
              ) && empReqfile[_0x34317a(0x248)]({ input: _0x5b223d }),
              unfilledArr["push"]({
                input: $(this)["attr"](_0x34317a(0x271)),
              })),
            empReqfile[_0x34317a(0x276)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x46c330(0x29d)](_0x46c330(0x29c))
        [_0x46c330(0x29d)](":input[type=\x22file\x22]")
        [_0x46c330(0x1f8)](function (_0xe7cabf) {
          const _0x4e06be = _0x46c330;
          (skipTo = undefined),
            $(this)
              [_0x4e06be(0x28c)](_0x4e06be(0x21e))
              ["data"](_0x4e06be(0x263)) !== "" &&
              (skipTo = $(this)
                [_0x4e06be(0x28c)](_0x4e06be(0x21e))
                ["data"](_0x4e06be(0x263))),
            $(this)
              [_0x4e06be(0x28c)](_0x4e06be(0x228))
              [_0x4e06be(0x1e9)](_0x4e06be(0x1ff)) &&
              ((answer = $(this)
                [_0x4e06be(0x28c)](_0x4e06be(0x228))
                [_0x4e06be(0x1e9)](_0x4e06be(0x1ff))),
              (selections = selections[_0x4e06be(0x28b)](
                (_0x5ef3e5) => _0x5ef3e5[_0x4e06be(0x23c)] !== x
              )),
              selections[_0x4e06be(0x248)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections["findIndex"](
                  (_0xb17a56) => _0xb17a56[_0x4e06be(0x23c)] === x
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x46c330(0x29d)](_0x46c330(0x29c))
        [_0x46c330(0x29d)](_0x46c330(0x267))
        [_0x46c330(0x1f8)](function (_0x4b2ee0) {
          const _0x57af92 = _0x46c330;
          $(this)["val"]() !== ""
            ? (empReqSelect = empReqSelect[_0x57af92(0x28b)](
                (_0x547e12) => _0x547e12[_0x57af92(0x270)] !== _0x4b2ee0
              ))
            : (!empReqSelect[_0x57af92(0x29d)](
                (_0x468cbb) => _0x468cbb[_0x57af92(0x270)] === _0x4b2ee0
              ) && empReqSelect["push"]({ input: _0x4b2ee0 }),
              unfilledArr["push"]({
                input: $(this)[_0x57af92(0x1e9)](_0x57af92(0x271)),
              })),
            empReqSelect[_0x57af92(0x276)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x46c330(0x29d)](_0x46c330(0x29c))
        [_0x46c330(0x29d)]("select")
        ["each"](function (_0x2a56c0) {
          const _0x55c6bd = _0x46c330;
          (skipTo = undefined),
            $(this)
              [_0x55c6bd(0x28c)]("[data-skip-to]")
              [_0x55c6bd(0x214)](_0x55c6bd(0x263)) !== "" &&
              (skipTo = $(this)
                [_0x55c6bd(0x28c)](_0x55c6bd(0x21e))
                [_0x55c6bd(0x214)](_0x55c6bd(0x263))),
            $(this)
              [_0x55c6bd(0x28c)](_0x55c6bd(0x228))
              [_0x55c6bd(0x1e9)](_0x55c6bd(0x1ff)) &&
              ((answer = $(this)
                ["parents"](_0x55c6bd(0x228))
                ["attr"](_0x55c6bd(0x1ff))),
              (selections = selections[_0x55c6bd(0x28b)](
                (_0x4ef6e9) => _0x4ef6e9[_0x55c6bd(0x23c)] !== x
              )),
              selections[_0x55c6bd(0x248)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0x55c6bd(0x1ea)](
                  (_0x51f89a) => _0x51f89a[_0x55c6bd(0x23c)] === x
                )),
                (selections[objIndex][_0x55c6bd(0x240)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x55c6bd(0x247)] = x)));
        }),
      $(steps[x])
        [_0x46c330(0x29d)](_0x46c330(0x29c))
        [_0x46c330(0x29d)](_0x46c330(0x1d9))
        [_0x46c330(0x1f8)](function (_0x20889f) {
          const _0x2d5496 = _0x46c330;
          $(this)["val"]() !== ""
            ? (empReqTextarea = empReqTextarea["filter"](
                (_0x7be463) => _0x7be463[_0x2d5496(0x270)] !== _0x20889f
              ))
            : (!empReqTextarea[_0x2d5496(0x29d)](
                (_0x583880) => _0x583880[_0x2d5496(0x270)] === _0x20889f
              ) && empReqTextarea[_0x2d5496(0x248)]({ input: _0x20889f }),
              unfilledArr[_0x2d5496(0x248)]({
                input: $(this)[_0x2d5496(0x1e9)](_0x2d5496(0x271)),
              })),
            empReqTextarea[_0x2d5496(0x276)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x46c330(0x29d)]("[data-answer]:visible")
        [_0x46c330(0x29d)](_0x46c330(0x1d4))
        [_0x46c330(0x1f8)](function (_0x36bf02) {
          const _0x5bef47 = _0x46c330;
          (skipTo = undefined),
            $(this)
              [_0x5bef47(0x28c)](_0x5bef47(0x21e))
              [_0x5bef47(0x214)]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0x5bef47(0x28c)](_0x5bef47(0x21e))
                ["data"](_0x5bef47(0x263))),
            $(this)
              [_0x5bef47(0x28c)]("[data-go-to]")
              ["attr"](_0x5bef47(0x1ff)) &&
              ((answer = $(this)
                ["parents"](_0x5bef47(0x228))
                [_0x5bef47(0x1e9)](_0x5bef47(0x1ff))),
              (selections = selections["filter"](
                (_0x2feaa8) => _0x2feaa8[_0x5bef47(0x23c)] !== x
              )),
              selections[_0x5bef47(0x248)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x5bef47(0x248)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x5bef47(0x1ea)](
                  (_0x161dcd) => _0x161dcd[_0x5bef47(0x23c)] === x
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x5bef47(0x247)] = x)));
        }),
      $(steps[x])
        [_0x46c330(0x29d)]("[data-answer]:visible")
        ["find"](_0x46c330(0x23d))
        [_0x46c330(0x1f8)](function (_0x2208b6) {
          const _0x186af9 = _0x46c330;
          $(this)["val"]() !== ""
            ? validateEmail(
                $(this)[_0x186af9(0x222)](),
                $(this)[_0x186af9(0x214)]("block-domain"),
                $(this)["attr"]("name")
              )
            : ((emailFilled = ![]),
              unfilledArr[_0x186af9(0x248)]({
                input: $(this)[_0x186af9(0x1e9)](_0x186af9(0x271)),
              }));
        }),
      $(steps[x])
        [_0x46c330(0x29d)](_0x46c330(0x29c))
        [_0x46c330(0x29d)](_0x46c330(0x246))
        [_0x46c330(0x1f8)](function (_0x4e4b92) {
          const _0x59a4be = _0x46c330;
          (skipTo = undefined),
            $(this)
              [_0x59a4be(0x28c)]("[data-skip-to]")
              [_0x59a4be(0x214)](_0x59a4be(0x263)) !== "" &&
              (skipTo = $(this)
                [_0x59a4be(0x28c)](_0x59a4be(0x21e))
                [_0x59a4be(0x214)](_0x59a4be(0x263))),
            $(this)
              ["parents"](_0x59a4be(0x228))
              [_0x59a4be(0x1e9)]("data-go-to") &&
              ((answer = $(this)
                [_0x59a4be(0x28c)](_0x59a4be(0x228))
                [_0x59a4be(0x1e9)]("data-go-to")),
              (selections = selections[_0x59a4be(0x28b)](
                (_0xc37800) => _0xc37800[_0x59a4be(0x23c)] !== x
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x59a4be(0x248)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x59a4be(0x1ea)](
                  (_0x51e30c) => _0x51e30c[_0x59a4be(0x23c)] === x
                )),
                (selections[objIndex][_0x59a4be(0x240)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x59a4be(0x247)] = x)));
        });
  }
  $(steps[x])
    [_0x46c330(0x29d)](":input[type=\x22radio\x22]")
    ["is"](_0x46c330(0x1d6)) &&
    ((selArr = []),
    $(steps)
      [_0x46c330(0x29d)]("[data-selected]:checked")
      [_0x46c330(0x1f8)](function (_0x2d0e6d, _0x36f260) {
        const _0x124d9f = _0x46c330;
        selArr[_0x124d9f(0x248)]({
          selected: $(this)[_0x124d9f(0x214)]("selected"),
        });
      }),
    (selString = []),
    selArr["forEach"]((_0x371588) =>
      selString[_0x46c330(0x248)](_0x371588[_0x46c330(0x217)])
    ),
    (selections = selections[_0x46c330(0x28b)](
      (_0x21ce94) => _0x21ce94[_0x46c330(0x23c)] !== x
    )),
    $(steps[x])
      ["find"]("[data-answer]:visible")
      ["find"](":input[type=\x27radio\x27]:checked")
      ["each"](function () {
        const _0x541e77 = _0x46c330;
        skipTo = undefined;
        if (
          $(this)[_0x541e77(0x28c)](_0x541e77(0x21e))["data"](_0x541e77(0x263))
        )
          skipTo = $(this)
            [_0x541e77(0x28c)](_0x541e77(0x21e))
            [_0x541e77(0x214)](_0x541e77(0x263));
        else
          $(this)["data"](_0x541e77(0x263)) &&
            (skipTo = $(this)[_0x541e77(0x214)](_0x541e77(0x263)));
        if ($(this)[_0x541e77(0x214)](_0x541e77(0x232)))
          (answer = $(this)[_0x541e77(0x1e9)](_0x541e77(0x1ff))),
            selections[_0x541e77(0x248)]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0x541e77(0x248)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0x541e77(0x1ea)](
                (_0x2b1f7b) => _0x2b1f7b[_0x541e77(0x23c)] === x
              )),
              (selections[objIndex][_0x541e77(0x240)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x541e77(0x247)] = x));
        else
          $(this)
            [_0x541e77(0x28c)]("[data-go-to]")
            [_0x541e77(0x214)](_0x541e77(0x232)) &&
            ((answer = $(this)
              [_0x541e77(0x28c)](_0x541e77(0x228))
              [_0x541e77(0x214)]("go-to")),
            selections[_0x541e77(0x248)]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0x541e77(0x248)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0x541e77(0x1ea)](
                (_0x47e138) => _0x47e138[_0x541e77(0x23c)] === x
              )),
              (selections[objIndex][_0x541e77(0x240)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x541e77(0x247)] = x)));
      }),
    logicExtra
      ? ($(steps[x])
          [_0x46c330(0x29d)](_0x46c330(0x29c))
          [_0x46c330(0x29d)]("[data-radio-skip]:visible")
          [_0x46c330(0x214)](_0x46c330(0x206)) === !![] ||
          $(steps[x])
            [_0x46c330(0x29d)](_0x46c330(0x1f5))
            [_0x46c330(0x214)]("radio-skip") === !![]) &&
        skip &&
        selections[_0x46c330(0x28b)](
          (_0x473386) => _0x473386[_0x46c330(0x23c)] === x
        )[_0x46c330(0x276)] > 0x0 &&
        textareaLength === 0x0 &&
        textInputLength === 0x0 &&
        emailInputLength === 0x0 &&
        checkboxInputLength === 0x0 &&
        setTimeout(function () {
          (next = !![]), nextStep(), selectionQuiz();
        }, $(steps[x])
          [_0x46c330(0x29d)](_0x46c330(0x25f))
          [_0x46c330(0x214)](_0x46c330(0x235)))
      : $(steps[x])
          ["find"](_0x46c330(0x226))
          [_0x46c330(0x214)](_0x46c330(0x206)) === !![] &&
        skip &&
        textareaLength === 0x0 &&
        textInputLength === 0x0 &&
        emailInputLength === 0x0 &&
        checkboxInputLength === 0x0 &&
        setTimeout(function () {
          (next = !![]), nextStep(), selectionQuiz();
        }, $(steps[x])
          [_0x46c330(0x29d)](_0x46c330(0x25f))
          [_0x46c330(0x214)](_0x46c330(0x235)))),
    inputFilled &&
    numFilled &&
    checkboxFilled &&
    telFilled &&
    radioFilled &&
    emailFilled &&
    domainAllowed &&
    selectFilled &&
    textareaFilled
      ? enableBtn()
      : disableBtn();
}
function displayErrorMessage() {
  const _0x5df963 = _0x3afa5d;
  $(_0x5df963(0x27c))[_0x5df963(0x292)](),
    unfilledArr[_0x5df963(0x276)] > 0x0 &&
      unfilledArr[_0x5df963(0x26b)](function (_0x127369) {
        const _0x1d0250 = _0x5df963;
        $(_0x1d0250(0x204) + _0x127369["input"] + "\x22]")
          [_0x1d0250(0x26d)](_0x1d0250(0x27c))
          [_0x1d0250(0x295)](),
          $(_0x1d0250(0x204) + _0x127369[_0x1d0250(0x270)] + "\x22]")
            [_0x1d0250(0x28c)]()
            [_0x1d0250(0x24e)](_0x1d0250(0x27c))
            [_0x1d0250(0x295)](),
          $(_0x1d0250(0x2a3) + _0x127369["input"] + "\x22]")
            [_0x1d0250(0x26d)](_0x1d0250(0x27c))
            ["fadeIn"](),
          $(_0x1d0250(0x239) + _0x127369[_0x1d0250(0x270)] + "\x22]")
            [_0x1d0250(0x26d)](_0x1d0250(0x27c))
            [_0x1d0250(0x295)]();
      });
}
function resetInputErrorMessage(_0x5d07e9) {
  const _0xc4f9a4 = _0x3afa5d;
  $(_0xc4f9a4(0x204) + _0x5d07e9 + "\x22]")
    [_0xc4f9a4(0x26d)]("[data-text=\x22error-message\x22]")
    ["hide"](),
    $(_0xc4f9a4(0x204) + _0x5d07e9 + "\x22]")
      [_0xc4f9a4(0x28c)]()
      [_0xc4f9a4(0x24e)](_0xc4f9a4(0x27c))
      [_0xc4f9a4(0x292)](),
    $(_0xc4f9a4(0x2a3) + _0x5d07e9 + "\x22]")
      [_0xc4f9a4(0x26d)](_0xc4f9a4(0x27c))
      [_0xc4f9a4(0x292)](),
    $(_0xc4f9a4(0x239) + _0x5d07e9 + "\x22]")
      [_0xc4f9a4(0x26d)]("[data-text=\x22error-message\x22]")
      [_0xc4f9a4(0x292)]();
}
function nextStep() {
  const _0x58aa89 = _0x3afa5d;
  customError
    ? ($(_0x58aa89(0x27c))["hide"](),
      fill
        ? (x++,
          countCard
            ? ((curStep = curStep + 0x1),
              $(_0x58aa89(0x28f))[_0x58aa89(0x28e)](steps[_0x58aa89(0x276)]))
            : $(steps[x])[_0x58aa89(0x214)](_0x58aa89(0x272))
            ? (curStep = curStep + 0x0)
            : (curStep = curStep + 0x1),
          $("[data-text=\x22current-step\x22]")[_0x58aa89(0x28e)](curStep),
          (progress = x),
          x <= steps[_0x58aa89(0x276)] - 0x1 &&
            (updateStep(), memory && saveFilledInput()))
        : displayErrorMessage())
    : (x++,
      countCard
        ? ((curStep = curStep + 0x1),
          $(_0x58aa89(0x28f))[_0x58aa89(0x28e)](steps[_0x58aa89(0x276)]))
        : $(steps[x])["data"](_0x58aa89(0x272))
        ? (curStep = curStep + 0x0)
        : (curStep = curStep + 0x1),
      $(_0x58aa89(0x200))["text"](curStep),
      x > progress && (progress = x),
      x <= steps[_0x58aa89(0x276)] - 0x1 &&
        (updateStep(), memory && saveFilledInput()));
}
function backStep() {
  const _0x27034c = _0x3afa5d;
  customError && $(_0x27034c(0x27c))[_0x27034c(0x292)](),
    countCard
      ? ((curStep = curStep - 0x1),
        $(_0x27034c(0x28f))["text"](steps[_0x27034c(0x276)]))
      : $(steps[x])[_0x27034c(0x214)](_0x27034c(0x272))
      ? (curStep = curStep - 0x0)
      : (curStep = curStep - 0x1),
    $(_0x27034c(0x200))[_0x27034c(0x28e)](curStep),
    x > 0x0 &&
      ($(progressbar[x])["removeClass"](_0x27034c(0x25a)),
      selections[_0x27034c(0x28b)](
        (_0x4f8617) => _0x4f8617[_0x27034c(0x240)] === x
      )[_0x27034c(0x276)] > 0x0
        ? (x = parseInt(
            getSafe(
              () =>
                selections[_0x27034c(0x28b)](
                  (_0x560c0d) => _0x560c0d[_0x27034c(0x240)] === x
                )[0x0][_0x27034c(0x247)]
            )
          ))
        : x--,
      updateStep()),
    $(steps[x])["find"](_0x27034c(0x1d1))[_0x27034c(0x26e)]("checked", ![]);
}
function selectionQuiz() {
  const _0x4823c5 = _0x3afa5d;
  if ($(this)[_0x4823c5(0x29d)](_0x4823c5(0x2a2))) {
    $("[data-selection]")[_0x4823c5(0x292)]();
    if (weightedSelection) {
      let _0x36428f = 0x0;
      selArr[_0x4823c5(0x26b)](function (_0x4d5dde) {
        const _0x397a85 = _0x4823c5;
        _0x36428f = _0x36428f + _0x4d5dde[_0x397a85(0x217)];
      }),
        $("[data-selection=\x22" + _0x36428f + "\x22]")[_0x4823c5(0x276)] > 0x0
          ? $(_0x4823c5(0x238) + _0x36428f + "\x22]")["fadeIn"]()
          : $(_0x4823c5(0x25c))[_0x4823c5(0x295)]();
    } else {
      let _0x536f03 = -0x1;
      $(_0x4823c5(0x273))["each"](function (_0x18f264) {
        const _0x284321 = _0x4823c5;
        $($(_0x284321(0x273))[_0x18f264])
          [_0x284321(0x214)]("selection")
          [_0x284321(0x278)](selString[_0x284321(0x21b)]()) &&
          (_0x536f03 = _0x18f264);
      }),
        _0x536f03 > -0x1
          ? $($("[data-selection]")[_0x536f03])[_0x4823c5(0x295)]()
          : $(_0x4823c5(0x25c))[_0x4823c5(0x295)]();
    }
  }
}
function triggerInputAllData() {
  const _0x1b3834 = _0x3afa5d;
  savedFilledInput &&
    memory &&
    savedFilledInput[_0x1b3834(0x26b)]((_0x4cb697) => {
      const _0x5c9551 = _0x1b3834;
      if (
        $(
          _0x5c9551(0x204) +
            _0x4cb697[_0x5c9551(0x290)] +
            _0x5c9551(0x1df) +
            _0x4cb697[_0x5c9551(0x261)] +
            "\x22]"
        )[_0x5c9551(0x1e9)](_0x5c9551(0x2a0)) === "radio"
      )
        $(
          _0x5c9551(0x204) +
            _0x4cb697[_0x5c9551(0x290)] +
            _0x5c9551(0x1df) +
            _0x4cb697["value"] +
            "\x22]"
        )["trigger"](_0x5c9551(0x270));
      else
        _0x4cb697["value"] === "on"
          ? $("input[name=\x22" + _0x4cb697[_0x5c9551(0x290)] + "\x22]")[
              _0x5c9551(0x20f)
            ](_0x5c9551(0x270))
          : ($(_0x5c9551(0x204) + _0x4cb697[_0x5c9551(0x290)] + "\x22]")[
              _0x5c9551(0x20f)
            ](_0x5c9551(0x270)),
            $(_0x5c9551(0x204) + _0x4cb697[_0x5c9551(0x290)] + "\x22]")[
              "trigger"
            ](_0x5c9551(0x277)));
    });
}
$("[data-form=\x22next-btn\x22]")["on"](_0x3afa5d(0x258), function () {
  scrollTop(), (next = !![]), nextStep(), selectionQuiz();
}),
  $("[data-form=\x22back-btn\x22]")["on"](_0x3afa5d(0x258), function () {
    scrollTop(), (next = ![]), (back = !![]), backStep();
  }),
  $(steps)
    [_0x3afa5d(0x29d)](":input")
    ["on"](_0x3afa5d(0x270), function (_0x518eff) {
      const _0x2c17ad = _0x3afa5d;
      $(this)[_0x2c17ad(0x1e9)](_0x2c17ad(0x2a0)) === _0x2c17ad(0x1f4) &&
        (skip = !![]),
        validation();
    });
$("[data-clickable-all]")["data"](_0x3afa5d(0x21a))
  ? $(_0x3afa5d(0x221))["removeClass"](_0x3afa5d(0x25e))
  : $(_0x3afa5d(0x221))[_0x3afa5d(0x1e2)](_0x3afa5d(0x25e));
function _0x3e90(_0x556d98, _0x59cf9f) {
  const _0x142c4b = _0x142c();
  return (
    (_0x3e90 = function (_0x3e9034, _0x581731) {
      _0x3e9034 = _0x3e9034 - 0x1cc;
      let _0x16245c = _0x142c4b[_0x3e9034];
      return _0x16245c;
    }),
    _0x3e90(_0x556d98, _0x59cf9f)
  );
}
function clickableIndicator() {
  const _0x57e94f = _0x3afa5d;
  $(_0x57e94f(0x21f))[_0x57e94f(0x242)]("current"),
    $(_0x57e94f(0x25b))["data"](_0x57e94f(0x244)) &&
      ($(_0x57e94f(0x25b))[_0x57e94f(0x214)](_0x57e94f(0x21a))
        ? ((x = $(this)[_0x57e94f(0x1f7)]()), updateStep())
        : $(this)[_0x57e94f(0x1f7)]() <= progress &&
          ((x = $(this)[_0x57e94f(0x1f7)]()), updateStep()));
}
$(_0x3afa5d(0x221))["on"](_0x3afa5d(0x258), clickableIndicator);
$(_0x3afa5d(0x23a))["data"]("debug-mode") &&
  ($(_0x3afa5d(0x228))[_0x3afa5d(0x1f8)](function () {
    const _0x3a4d0d = _0x3afa5d;
    $(this)[_0x3a4d0d(0x227)](
      _0x3a4d0d(0x265),
      $(this)[_0x3a4d0d(0x214)]("go-to")
    );
  }),
  $(_0x3afa5d(0x236))[_0x3afa5d(0x1f8)](function () {
    const _0x380957 = _0x3afa5d;
    $(this)[_0x380957(0x227)](
      _0x380957(0x1e4),
      $(this)[_0x380957(0x214)](_0x380957(0x223))
    );
  }));
$(_0x3afa5d(0x283))["on"](_0x3afa5d(0x258), function (_0x30ee9a) {
  const _0x583e57 = _0x3afa5d;
  $(this)[_0x583e57(0x214)](_0x583e57(0x1fb)) &&
    (redirectTo = $(this)[_0x583e57(0x214)](_0x583e57(0x1fb))),
    !$(this)["data"]("new-tab") &&
      (newTab = $(this)[_0x583e57(0x214)]("new-tab")),
    (successCard = $(this)["data"](_0x583e57(0x202))),
    _0x30ee9a[_0x583e57(0x282)](),
    _0x30ee9a[_0x583e57(0x1d2)](),
    logicExtra &&
      ($(this)[_0x583e57(0x26e)](_0x583e57(0x23e), !![]),
      $(steps)
        [_0x583e57(0x29d)](_0x583e57(0x27b))
        [_0x583e57(0x26e)](_0x583e57(0x24c), ![])),
    localStorage[_0x583e57(0x208)](_0x583e57(0x1f9)),
    fill &&
      ($(this)[_0x583e57(0x214)](_0x583e57(0x212))
        ? $(this)[_0x583e57(0x222)]($(this)[_0x583e57(0x214)](_0x583e57(0x212)))
        : ($(this)[_0x583e57(0x222)](_0x583e57(0x27e)),
          $(this)[_0x583e57(0x28e)]("Please\x20wait...")),
      $("[data-form=\x22multistep\x22]")[_0x583e57(0x243)]());
});
function resetFormly() {
  const _0x26788d = _0x3afa5d;
  $("[data-form=\x22multistep\x22]")[_0x26788d(0x20f)](_0x26788d(0x262)),
    $(_0x26788d(0x23a))
      ["parents"]()
      [_0x26788d(0x29d)](_0x26788d(0x1e0))
      [_0x26788d(0x292)](),
    (x = 0x0),
    updateStep(),
    $(_0x26788d(0x23a))[_0x26788d(0x20a)](),
    $(_0x26788d(0x283))[_0x26788d(0x28e)](oldSubmitText),
    $("[data-form=\x22submit-btn\x22]")[_0x26788d(0x222)](oldSubmitText),
    $("[data-text=\x22current-step\x22]")[_0x26788d(0x28e)](0x1),
    $(_0x26788d(0x23a))
      [_0x26788d(0x29d)]("input:checkbox")
      [_0x26788d(0x26d)](_0x26788d(0x1d0))
      [_0x26788d(0x242)]("w--redirected-checked");
}
$(document)["ajaxComplete"](function (_0x644a3e, _0x492a1c, _0x5306e8) {
  const _0x353554 = _0x3afa5d;
  if (_0x5306e8[_0x353554(0x294)][_0x353554(0x278)](_0x353554(0x22d))) {
    const _0x573fcb = _0x492a1c[_0x353554(0x27a)] === 0xc8,
      _0xa18a80 = _0x353554(0x1f0);
    redirectTo &&
      _0x573fcb &&
      (newTab
        ? window[_0x353554(0x253)](redirectTo, _0x353554(0x1e3))
        : setTimeout(() => {
            location["href"] = redirectTo;
          }, redirectDelay)),
      _0x573fcb &&
        successCard !== "" &&
        $(_0x353554(0x233) + successCard + "\x22]")["fadeIn"](),
      _0x573fcb &&
        formReset &&
        setTimeout(() => {
          resetFormly();
        }, resetDelay);
  }
}),
  $(_0x3afa5d(0x291))["on"](_0x3afa5d(0x258), function () {
    const _0x5869d6 = _0x3afa5d;
    (back = !![]),
      (x = $(this)[_0x5869d6(0x214)](_0x5869d6(0x241)) - 0x1),
      updateStep(),
      countCard
        ? ((curStep = x + 0x1),
          $(_0x5869d6(0x28f))[_0x5869d6(0x28e)](steps["length"]))
        : $(steps[x])[_0x5869d6(0x214)](_0x5869d6(0x272))
        ? (curStep = x + 0x0)
        : (curStep = x + 0x1),
      $(_0x5869d6(0x200))["text"](curStep),
      (back = ![]);
  }),
  $(_0x3afa5d(0x216))["on"](_0x3afa5d(0x258), function () {
    const _0x10b8fd = _0x3afa5d;
    $("[data-form=\x22multistep\x22]")[_0x10b8fd(0x20f)]("reset");
    let _0x4b12e1 = $(this);
    $(this)[_0x10b8fd(0x28e)]("Please\x20wait..."),
      setTimeout(function () {
        const _0x4b3801 = _0x10b8fd;
        $(_0x4b12e1)[_0x4b3801(0x28e)](oldResetText),
          $(_0x4b12e1)[_0x4b3801(0x28c)](_0x4b3801(0x1e0))[_0x4b3801(0x292)](),
          (x = 0x0),
          updateStep(),
          $("[data-form=\x22multistep\x22]")[_0x4b3801(0x20a)](),
          $(_0x4b3801(0x283))[_0x4b3801(0x28e)](oldSubmitText),
          $(_0x4b3801(0x283))["val"](oldSubmitText),
          $(_0x4b12e1)["val"](oldSubmitText),
          $("[data-text=\x22current-step\x22]")[_0x4b3801(0x28e)](0x1),
          $(_0x4b3801(0x23a))
            [_0x4b3801(0x29d)](_0x4b3801(0x254))
            [_0x4b3801(0x26d)](".w-checkbox-input")
            ["removeClass"](_0x4b3801(0x218));
      }, resetDelay);
  }),
  $(_0x3afa5d(0x22e))["on"]("keypress", function (_0x119d8c) {
    const _0x3dcbd0 = _0x3afa5d;
    _0x119d8c["keyCode"] === 0xd &&
      fill &&
      ($(_0x3dcbd0(0x249))["data"](_0x3dcbd0(0x245))
        ? (totalSteps > curStep &&
            $("[data-form=\x22next-btn\x22]")[0x0][_0x3dcbd0(0x258)](),
          _0x119d8c[_0x3dcbd0(0x282)](),
          _0x119d8c["stopPropagation"]())
        : (_0x119d8c[_0x3dcbd0(0x282)](), _0x119d8c[_0x3dcbd0(0x1d2)]()));
  }),
  $("body")[_0x3afa5d(0x209)](function (_0x3e494d) {
    const _0x229dd8 = _0x3afa5d;
    (_0x3e494d[_0x229dd8(0x296)] || _0x3e494d["ctrlKey"]) &&
      _0x3e494d[_0x229dd8(0x1f3)] == 0xd &&
      (x >= steps[_0x229dd8(0x276)] - 0x1 && fill
        ? $(steps[x])
            [_0x229dd8(0x29d)]("[data-form=\x22submit-btn\x22]:visible")
            [_0x229dd8(0x258)]()
        : (event[_0x229dd8(0x282)](), event[_0x229dd8(0x1d2)]()));
  }),
  $(_0x3afa5d(0x1d4))[_0x3afa5d(0x28d)](function (_0x4f81a5) {
    const _0x45300f = _0x3afa5d;
    $(this)[_0x45300f(0x266)](),
      _0x4f81a5[_0x45300f(0x23b)] == _0x45300f(0x251) &&
        (_0x4f81a5[_0x45300f(0x282)](), _0x4f81a5[_0x45300f(0x1d2)]()),
      _0x4f81a5[_0x45300f(0x215)] &&
        _0x4f81a5["key"] == _0x45300f(0x251) &&
        $(this)["val"]($(this)[_0x45300f(0x222)]() + "\x0a");
  }),
  $(_0x3afa5d(0x23a))
    [_0x3afa5d(0x29d)](_0x3afa5d(0x27b))
    ["on"](_0x3afa5d(0x270), function () {
      const _0x514433 = _0x3afa5d;
      (all_data = all_data[_0x514433(0x28b)](
        (_0x389521) =>
          _0x389521[_0x514433(0x27f)] !==
          $(this)[_0x514433(0x214)](_0x514433(0x271))
      )),
        $(this)[_0x514433(0x1e9)](_0x514433(0x2a0)) === _0x514433(0x24d)
          ? $(this)["is"](_0x514433(0x1d6)) &&
            all_data[_0x514433(0x248)]({
              field: $(this)[_0x514433(0x1e9)](_0x514433(0x271)),
              value: $(this)["siblings"](_0x514433(0x231))[_0x514433(0x28e)](),
            })
          : (all_data[_0x514433(0x248)]({
              field: $(this)["attr"](_0x514433(0x271)),
              value: $(this)[_0x514433(0x222)](),
            }),
            $(this)["val"]() !== "" &&
              resetInputErrorMessage(
                $(this)[_0x514433(0x1e9)](_0x514433(0x271))
              )),
        all_data[_0x514433(0x26b)](function (_0xed3142) {
          const _0x594e49 = _0x514433;
          $(_0x594e49(0x1e1) + _0xed3142["field"] + "\x22]")[
            _0x594e49(0x295)
          ](),
            $("[data-input-field=\x22" + _0xed3142[_0x594e49(0x27f)] + "\x22]")[
              _0x594e49(0x28e)
            ](_0xed3142[_0x594e49(0x261)]);
        });
    }),
  $(_0x3afa5d(0x23a))
    [_0x3afa5d(0x29d)](_0x3afa5d(0x1d4))
    ["on"]("input", function () {
      const _0x4bb8e6 = _0x3afa5d;
      $(this)[_0x4bb8e6(0x222)]() !== "" &&
        resetInputErrorMessage($(this)[_0x4bb8e6(0x1e9)](_0x4bb8e6(0x271))),
        (all_data = all_data[_0x4bb8e6(0x28b)](
          (_0x4c408e) =>
            _0x4c408e[_0x4bb8e6(0x27f)] !==
            $(this)[_0x4bb8e6(0x1e9)](_0x4bb8e6(0x271))
        )),
        all_data[_0x4bb8e6(0x248)]({
          field: $(this)[_0x4bb8e6(0x1e9)](_0x4bb8e6(0x271)),
          value: $(this)[_0x4bb8e6(0x222)](),
        }),
        all_data[_0x4bb8e6(0x26b)](function (_0x54ffcb) {
          const _0x40181e = _0x4bb8e6;
          $("[data-input-field=\x22" + _0x54ffcb[_0x40181e(0x27f)] + "\x22]")[
            "fadeIn"
          ](),
            $("[data-input-field=\x22" + _0x54ffcb["field"] + "\x22]")[
              _0x40181e(0x28e)
            ](_0x54ffcb["value"]);
        });
    }),
  $(_0x3afa5d(0x23a))
    [_0x3afa5d(0x29d)](_0x3afa5d(0x22b))
    ["on"]("change", function () {
      const _0x4ebede = _0x3afa5d;
      $(this)[_0x4ebede(0x222)]() !== "" &&
        resetInputErrorMessage($(this)[_0x4ebede(0x1e9)]("name")),
        (all_data = all_data[_0x4ebede(0x28b)](
          (_0x3353b4) =>
            _0x3353b4[_0x4ebede(0x27f)] !== $(this)[_0x4ebede(0x1e9)]("name")
        )),
        all_data[_0x4ebede(0x248)]({
          field: $(this)[_0x4ebede(0x1e9)](_0x4ebede(0x271)),
          value: $(this)[_0x4ebede(0x222)](),
        }),
        all_data[_0x4ebede(0x26b)](function (_0xa63a4c) {
          const _0x1b33bb = _0x4ebede;
          $(_0x1b33bb(0x1e1) + _0xa63a4c["field"] + "\x22]")[
            _0x1b33bb(0x295)
          ](),
            $("[data-input-field=\x22" + _0xa63a4c[_0x1b33bb(0x27f)] + "\x22]")[
              _0x1b33bb(0x28e)
            ](_0xa63a4c["value"]);
        });
    }),
  updateStep(),
  triggerInputAllData(),
  $(_0x3afa5d(0x252))["each"](function () {
    const _0x340a09 = _0x3afa5d,
      _0xaa71da = $(this)["find"](_0x340a09(0x219)),
      _0x1cfd33 = [];
    console[_0x340a09(0x21d)](_0x1cfd33),
      _0xaa71da["each"](function () {
        const _0x2ae7d3 = _0x340a09;
        _0x1cfd33["push"]($(this)["text"]()[_0x2ae7d3(0x2a4)]());
      });
    const _0x2ec8a8 = $(this)[_0x340a09(0x26d)](_0x340a09(0x201));
    $[_0x340a09(0x1f8)](_0x1cfd33, function (_0x8fbcf, _0x143c48) {
      const _0x22809e = _0x340a09,
        _0x11b3f1 = $(_0x22809e(0x280))
          ["val"](_0x143c48)
          [_0x22809e(0x28e)](_0x143c48);
      _0x2ec8a8[_0x22809e(0x227)](_0x11b3f1);
    });
  });
function _0x142c() {
  const _0xa56180 = [
    "card",
    "[data-selection]",
    "input[type=\x22text\x22][required]:visible",
    "1930054yuGMhj",
    "length",
    "change",
    "includes",
    "submit-show",
    "status",
    ":input",
    "[data-text=\x22error-message\x22]",
    "location",
    "Please\x20wait...",
    "field",
    "<option>",
    "[data-form=\x22next-btn\x22]",
    "preventDefault",
    "[data-form=\x22submit-btn\x22]",
    "input[type=\x22submit\x22]",
    "count-card",
    ":input[type=\x22radio\x22][required]",
    "79015XVEzbf",
    "destroy",
    "949944eQmgmN",
    "[data-select-multiple]",
    "filter",
    "parents",
    "keypress",
    "text",
    "[data-text=\x22total-steps\x22]",
    "inputName",
    "[data-btn=\x22edit\x22]",
    "hide",
    "input:radio[name=\x22",
    "url",
    "fadeIn",
    "metaKey",
    "input[type=\x22email\x22]:visible",
    "query-param",
    ":input[required]",
    "weighted-selection",
    "css",
    "[data-answer]:visible",
    "find",
    "require",
    "form[data-form=\x22multistep\x22]\x20:input",
    "type",
    "reset-delay",
    "[data-btn=\x22check\x22]",
    "textarea[name=\x22",
    "trim",
    "slow",
    "Webflow",
    "checked",
    "[data-checkbox]",
    ".w-checkbox-input",
    "input[type=\x22radio\x22]",
    "stopPropagation",
    "[data-form=\x22next-btn\x22][type=\x22submit\x22]",
    "textarea",
    "auto",
    ":checked",
    "0.4",
    ":input[type=\x22text\x22][required]",
    "textarea[required]",
    "data-radio-delay",
    "redirect-delay",
    "getItem",
    "260TuCjqc",
    "[data-form=\x22step\x22]:not([data-card=\x22true\x22])",
    "\x22][value=\x22",
    ".w-form-done",
    "[data-input-field=\x22",
    "addClass",
    "_blank",
    "<br>Data\x20Answer\x20=\x20",
    "[type=\x22submit\x22]",
    "searchParams",
    "clone",
    "parse",
    "attr",
    "findIndex",
    "[data-form=\x22step\x22][data-card]",
    "[data-form=\x22next-btn\x22][data-submit-show]",
    ":input[type=\x22checkbox\x22][required]:checked",
    "set",
    "[data-weighted-selection]",
    "redirect-form-hehexd",
    "textarea[required]:visible",
    "[data-success-card]",
    "keyCode",
    "radio",
    "[data-answer][data-radio-skip]:visible",
    ".w-radio-input",
    "index",
    "each",
    "filledInput",
    "[type=\x22radio\x22]",
    "redirect",
    "data-radio-skip",
    ":input[type=\x22checkbox\x22]:checked",
    ":input[type=\x22text\x22]",
    "data-go-to",
    "[data-text=\x22current-step\x22]",
    "[data-cms-select=input]",
    "success",
    "dispatchEvent",
    "input[name=\x22",
    "test",
    "radio-skip",
    "[data-form=\x22step\x22]",
    "removeItem",
    "keydown",
    "show",
    "ix2",
    "[data-form=\x22progress\x22]",
    "logic-extra",
    "3589551aebmNU",
    "trigger",
    ":input[type=\x22number\x22][required]",
    "[data-reset-delay]",
    "wait",
    "button",
    "data",
    "shiftKey",
    "[data-btn=\x22reset\x22]",
    "selected",
    "w--redirected-checked",
    "[data-cms-select=text]",
    "clickable-all",
    "join",
    "quiz",
    "log",
    "[data-skip-to]",
    "[data-form=\x22progress-indicator\x22]",
    "option[value=\x22",
    "[data-form=\x22custom-progress-indicator\x22]",
    "val",
    "answer",
    "263904DiDATc",
    ":input[type=\x22checkbox\x22][required]",
    "[data-radio-skip]:visible",
    "append",
    "[data-go-to]",
    "[data-form=\x22submit\x22]:visible",
    "textarea[autofocus]",
    "select",
    "42xAaFot",
    "https://webflow.com/api/v1/form/",
    "body",
    ":input[type=\x22tel\x22]",
    "not",
    "span",
    "go-to",
    "[data-success-card=\x22",
    "init",
    "radio-delay",
    "[data-answer]",
    ":input[type=\x22file\x22][required]",
    "[data-selection=\x22",
    "select[name=\x22",
    "[data-form=\x22multistep\x22]",
    "key",
    "step",
    ":input[type=\x22email\x22][required]",
    "novalidate",
    "139356yCqJra",
    "skipTo",
    "edit-step",
    "removeClass",
    "submit",
    "clickable",
    "enter",
    ":input[type=\x22email\x22]",
    "backTo",
    "push",
    "[data-enter]",
    "[data-form=\x22back-btn\x22]",
    "none",
    "required",
    "checkbox",
    "children",
    "stringify",
    "custom-error-message",
    "Enter",
    "[data-cms-select=cms]",
    "open",
    "input:checkbox",
    "[data-answer=\x22",
    "[data-custom-error-message]",
    "delete",
    "click",
    "href",
    "current",
    "[data-clickable]",
    "[data-selection=\x22other\x22]",
    ":input[type=\x22tel\x22][required]",
    "disabled",
    "[data-radio-delay]",
    "12075oXeCTV",
    "value",
    "reset",
    "skip-to",
    "data-skip-to",
    "<br>Data\x20Go\x20To\x20=\x20",
    "focus",
    "select[required]",
    "memory",
    "split",
    ":input[type=\x22checkbox\x22]",
    "forEach",
    "input[autofocus]",
    "siblings",
    "prop",
    "[data-memory]",
    "input",
    "name",
  ];
  _0x142c = function () {
    return _0xa56180;
  };
  return _0x142c();
}
