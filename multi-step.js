// Update:24/4/23 Reverted 9/5/23

const _0x2978e0 = _0x10b3;
(function (_0x1964a5, _0x15db36) {
  const _0x2710ea = _0x10b3,
    _0xef5bfd = _0x1964a5();
  while (!![]) {
    try {
      const _0xcc9670 =
        (-parseInt(_0x2710ea(0x1be)) / 0x1) *
          (-parseInt(_0x2710ea(0x1ba)) / 0x2) +
        (parseInt(_0x2710ea(0x19e)) / 0x3) *
          (parseInt(_0x2710ea(0x164)) / 0x4) +
        parseInt(_0x2710ea(0x1fe)) / 0x5 +
        parseInt(_0x2710ea(0x1fa)) / 0x6 +
        -parseInt(_0x2710ea(0x1a5)) / 0x7 +
        parseInt(_0x2710ea(0x1c4)) / 0x8 +
        -parseInt(_0x2710ea(0x1f3)) / 0x9;
      if (_0xcc9670 === _0x15db36) break;
      else _0xef5bfd["push"](_0xef5bfd["shift"]());
    } catch (_0x5a8051) {
      _0xef5bfd["push"](_0xef5bfd["shift"]());
    }
  }
})(_0x1ab6, 0xf11eb);
let x = 0x0,
  curStep = 0x0,
  steps = $(_0x2978e0(0x179)),
  progressbarClone = $(_0x2978e0(0x221))["clone"](),
  progressbar,
  countCard = !![],
  weightedSelection = $("[data-weighted-selection]")[_0x2978e0(0x15b)](
    "weighted-selection"
  ),
  selectMultiple = $(_0x2978e0(0x165))["data"](_0x2978e0(0x1a1)),
  customError = $("[data-custom-error-message]")["data"](_0x2978e0(0x1f0)),
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
  empReqTel = [],
  reinitIX = $(_0x2978e0(0x156))[_0x2978e0(0x15b)](_0x2978e0(0x1bb)),
  textareaLength = 0x0,
  textInputLength = 0x0,
  emailInputLength = 0x0,
  selectInputLength = 0x0,
  checkboxInputLength = 0x0,
  filledInput = [],
  savedFilledInput = JSON[_0x2978e0(0x17a)](
    localStorage[_0x2978e0(0x1ac)]("filledInput")
  ),
  memory = $("[data-memory]")["data"]("memory"),
  quiz = $(_0x2978e0(0x163))[_0x2978e0(0x15b)](_0x2978e0(0x1af)),
  progress = 0x0;
const urlFormly = new URL(window[_0x2978e0(0x1e5)]["href"]);
function _0x10b3(_0x134154, _0x5e20b2) {
  const _0x1ab67f = _0x1ab6();
  return (
    (_0x10b3 = function (_0x10b3df, _0x396468) {
      _0x10b3df = _0x10b3df - 0x155;
      let _0x4a9339 = _0x1ab67f[_0x10b3df];
      return _0x4a9339;
    }),
    _0x10b3(_0x134154, _0x5e20b2)
  );
}
let params = $(_0x2978e0(0x1e0))[_0x2978e0(0x15b)](_0x2978e0(0x1d1)),
  skipTo = 0x0,
  next = ![],
  back = ![],
  selArr = [],
  selString = [],
  emptyInput = 0x0,
  searchQ = [],
  domainAllowed = !![],
  dom = [],
  logicExtra = $(_0x2978e0(0x1b9))[_0x2978e0(0x15b)](_0x2978e0(0x1fc)),
  oldSubmitText = $(_0x2978e0(0x1df))[_0x2978e0(0x222)](),
  oldResetText = $("[data-btn=\x22reset\x22]")[_0x2978e0(0x1a0)](),
  formReset = $(_0x2978e0(0x1b9))[_0x2978e0(0x15b)](_0x2978e0(0x1c8)),
  successCard = "",
  redirectTo = "",
  totalSteps = 0x0,
  resetDelay = $(_0x2978e0(0x225))["data"](_0x2978e0(0x21b))
    ? $("[data-reset-delay]")["data"](_0x2978e0(0x21b))
    : 0x7d0,
  newTab = !![];
all_data = [];
$(_0x2978e0(0x1c0))["length"] > 0x0 &&
  (countCard = $(_0x2978e0(0x1c0))["data"](_0x2978e0(0x212)));
$(progressbarClone)[_0x2978e0(0x1e6)](_0x2978e0(0x1d6)),
  $("[data-form=\x22progress\x22]")["children"]()["remove"](),
  $("[data-form=\x22submit-btn\x22]")[_0x2978e0(0x196)](),
  steps[_0x2978e0(0x1cb)](function () {
    const _0x2528de = _0x2978e0;
    $(_0x2528de(0x181))["append"](
      progressbarClone[_0x2528de(0x1f2)](!![], !![])
    );
  }),
  $(_0x2978e0(0x1f8))[_0x2978e0(0x196)]();
countCard
  ? ((curStep = curStep + 0x1),
    (totalSteps = steps[_0x2978e0(0x1c7)]),
    $(_0x2978e0(0x1ae))[_0x2978e0(0x1a0)](totalSteps))
  : ($(steps[x])[_0x2978e0(0x15b)](_0x2978e0(0x192))
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    (totalSteps = $(_0x2978e0(0x17b))[_0x2978e0(0x1c7)]),
    $(_0x2978e0(0x1ae))[_0x2978e0(0x1a0)](totalSteps),
    $(_0x2978e0(0x187))[_0x2978e0(0x1cb)](function () {
      const _0x36dc57 = _0x2978e0;
      $($(_0x36dc57(0x221))[$(this)[_0x36dc57(0x1f9)]()])[_0x36dc57(0x196)]();
    }));
(progressbar = $("[data-form=\x22progress\x22]")[_0x2978e0(0x1ec)]()),
  $(_0x2978e0(0x221))["on"]("click", clickableIndicator),
  $(_0x2978e0(0x228))[_0x2978e0(0x1a0)](curStep),
  steps["hide"](),
  $("[data-success-card]")[_0x2978e0(0x196)](),
  $(_0x2978e0(0x1aa))[_0x2978e0(0x1cb)](function () {
    const _0x44d51d = _0x2978e0;
    $(this)[_0x44d51d(0x1a9)]("type", "button");
  });
function getParams() {
  const _0x4e81ca = _0x2978e0;
  urlFormly[_0x4e81ca(0x199)][_0x4e81ca(0x1f7)](function (
    _0xb0709b,
    _0x2d772b
  ) {
    const _0x382925 = _0x4e81ca;
    searchQ[_0x382925(0x1b7)]({ val: _0xb0709b, key: _0x2d772b });
  });
}
function getSafe(_0x1ef8aa, _0x512b67) {
  try {
    return _0x1ef8aa();
  } catch (_0x3d1d50) {
    return _0x512b67;
  }
}
savedFilledInput &&
  memory &&
  savedFilledInput[_0x2978e0(0x1f7)]((_0x5a7c18) => {
    const _0x26d3fd = _0x2978e0;
    if (
      $(
        _0x26d3fd(0x20d) +
          _0x5a7c18[_0x26d3fd(0x1f4)] +
          _0x26d3fd(0x1db) +
          _0x5a7c18[_0x26d3fd(0x168)] +
          "\x22]"
      )["attr"](_0x26d3fd(0x1d4)) === _0x26d3fd(0x1e7)
    )
      $(
        _0x26d3fd(0x20d) +
          _0x5a7c18[_0x26d3fd(0x1f4)] +
          _0x26d3fd(0x1db) +
          _0x5a7c18[_0x26d3fd(0x168)] +
          "\x22]"
      )[_0x26d3fd(0x1e2)](),
        $(
          _0x26d3fd(0x20d) +
            _0x5a7c18[_0x26d3fd(0x1f4)] +
            _0x26d3fd(0x1db) +
            _0x5a7c18[_0x26d3fd(0x168)] +
            "\x22]"
        )
          [_0x26d3fd(0x1b1)](".w-radio-input")
          ["addClass"](_0x26d3fd(0x226));
    else
      _0x5a7c18[_0x26d3fd(0x168)] === "on"
        ? ($("input[name=\x22" + _0x5a7c18[_0x26d3fd(0x1f4)] + "\x22]")[
            _0x26d3fd(0x1e2)
          ](),
          $(_0x26d3fd(0x20d) + _0x5a7c18[_0x26d3fd(0x1f4)] + "\x22]")
            [_0x26d3fd(0x1b1)](".w-checkbox-input")
            [_0x26d3fd(0x202)](_0x26d3fd(0x226)))
        : ($("input[name=\x22" + _0x5a7c18[_0x26d3fd(0x1f4)] + "\x22]")[
            _0x26d3fd(0x222)
          ](_0x5a7c18[_0x26d3fd(0x168)]),
          $(_0x26d3fd(0x21d) + _0x5a7c18[_0x26d3fd(0x1f4)] + "\x22]")[
            _0x26d3fd(0x222)
          ](_0x5a7c18[_0x26d3fd(0x168)]),
          $(_0x26d3fd(0x21c) + _0x5a7c18[_0x26d3fd(0x1f4)] + "\x22]")
            [_0x26d3fd(0x210)](
              _0x26d3fd(0x16c) + _0x5a7c18[_0x26d3fd(0x168)] + "\x22]"
            )
            [_0x26d3fd(0x213)](_0x26d3fd(0x21a), !![]));
  });
params &&
  (getParams(),
  searchQ[_0x2978e0(0x1f7)]((_0x3ab88f) => {
    const _0x5e22d0 = _0x2978e0;
    if (
      $(
        _0x5e22d0(0x20d) +
          _0x3ab88f[_0x5e22d0(0x1e8)] +
          "\x22][value=\x22" +
          _0x3ab88f["val"] +
          "\x22]"
      )[_0x5e22d0(0x1a9)](_0x5e22d0(0x1d4)) === _0x5e22d0(0x1e7)
    )
      $(
        _0x5e22d0(0x20d) +
          _0x3ab88f[_0x5e22d0(0x1e8)] +
          _0x5e22d0(0x1db) +
          _0x3ab88f[_0x5e22d0(0x222)] +
          "\x22]"
      )[_0x5e22d0(0x1e2)](),
        $(
          _0x5e22d0(0x20d) +
            _0x3ab88f["key"] +
            "\x22][value=\x22" +
            _0x3ab88f["val"] +
            "\x22]"
        )
          [_0x5e22d0(0x1b1)](_0x5e22d0(0x1cd))
          [_0x5e22d0(0x202)](_0x5e22d0(0x226)),
        $(
          "input[name=\x22" +
            _0x3ab88f[_0x5e22d0(0x1e8)] +
            _0x5e22d0(0x1db) +
            _0x3ab88f["val"] +
            "\x22]"
        )[_0x5e22d0(0x1b0)]("input");
    else
      _0x3ab88f[_0x5e22d0(0x222)] === "on"
        ? ($(_0x5e22d0(0x20d) + _0x3ab88f[_0x5e22d0(0x1e8)] + "\x22]")[
            _0x5e22d0(0x1e2)
          ](),
          $(_0x5e22d0(0x20d) + _0x3ab88f["key"] + "\x22]")
            ["siblings"](_0x5e22d0(0x172))
            ["addClass"](_0x5e22d0(0x226)),
          $(_0x5e22d0(0x20d) + _0x3ab88f[_0x5e22d0(0x1e8)] + "\x22]")[
            _0x5e22d0(0x1b0)
          ](_0x5e22d0(0x19a)))
        : ($(_0x5e22d0(0x20d) + _0x3ab88f[_0x5e22d0(0x1e8)] + "\x22]")["val"](
            _0x3ab88f["val"]
          ),
          $(_0x5e22d0(0x21d) + _0x3ab88f[_0x5e22d0(0x1e8)] + "\x22]")[
            _0x5e22d0(0x222)
          ](_0x3ab88f[_0x5e22d0(0x222)]),
          $(_0x5e22d0(0x21c) + _0x3ab88f[_0x5e22d0(0x1e8)] + "\x22]")
            [_0x5e22d0(0x210)](
              _0x5e22d0(0x16c) + _0x3ab88f[_0x5e22d0(0x222)] + "\x22]"
            )
            [_0x5e22d0(0x213)](_0x5e22d0(0x21a), !![]),
          $(_0x5e22d0(0x20d) + _0x3ab88f[_0x5e22d0(0x1e8)] + "\x22]")[
            _0x5e22d0(0x1b0)
          ](_0x5e22d0(0x19a)),
          $("input[name=\x22" + _0x3ab88f[_0x5e22d0(0x1e8)] + "\x22]")[
            "trigger"
          ]("change"));
  }));
quiz &&
  steps[_0x2978e0(0x1cb)](function () {
    const _0x18a6d1 = _0x2978e0;
    $(this)[_0x18a6d1(0x1ec)]()[_0x18a6d1(0x1a9)](_0x18a6d1(0x20b), !![]),
      $(this)[_0x18a6d1(0x1ec)]()[_0x18a6d1(0x1a9)](_0x18a6d1(0x205), 0xfa);
  });
function disableBtn(_0x17f6e6) {
  const _0x4d6930 = _0x2978e0;
  fill = ![];
  if (customError) {
  } else
    $(_0x4d6930(0x220))["css"]({
      opacity: _0x4d6930(0x1b4),
      "pointer-events": _0x4d6930(0x1a8),
    }),
      $(_0x4d6930(0x220))[_0x4d6930(0x202)](_0x4d6930(0x1ce)),
      $(_0x4d6930(0x1df))[_0x4d6930(0x211)]({
        opacity: _0x4d6930(0x1b4),
        "pointer-events": "none",
      }),
      $(_0x4d6930(0x1df))[_0x4d6930(0x202)](_0x4d6930(0x1ce));
}
function enableBtn() {
  const _0xbc4374 = _0x2978e0;
  (fill = !![]),
    $(_0xbc4374(0x220))[_0xbc4374(0x211)]({
      "pointer-events": _0xbc4374(0x1d8),
      opacity: "1",
    }),
    $(_0xbc4374(0x220))[_0xbc4374(0x1e6)](_0xbc4374(0x1ce)),
    $(_0xbc4374(0x1df))[_0xbc4374(0x211)]({
      "pointer-events": "auto",
      opacity: "1",
    }),
    $(_0xbc4374(0x1df))["removeClass"](_0xbc4374(0x1ce));
}
function saveFilledInput() {
  const _0x1e5d7d = _0x2978e0;
  $("form[data-form=\x22multistep\x22]\x20:input")
    [_0x1e5d7d(0x19f)](_0x1e5d7d(0x18a))
    [_0x1e5d7d(0x1cb)](function () {
      const _0x37ed81 = _0x1e5d7d;
      $(this)[_0x37ed81(0x1a9)](_0x37ed81(0x1d4)) === _0x37ed81(0x1ef) ||
      $(this)["attr"](_0x37ed81(0x1d4)) === _0x37ed81(0x1e7)
        ? $(this)[_0x37ed81(0x213)](_0x37ed81(0x15f)) &&
          (filledInput[_0x37ed81(0x209)](
            (_0x217d58) =>
              _0x217d58[_0x37ed81(0x1f4)] ===
              $(this)[_0x37ed81(0x1a9)](_0x37ed81(0x1d5))
          )
            ? ((filledInput = filledInput[_0x37ed81(0x20e)](
                (_0x11714d) =>
                  _0x11714d[_0x37ed81(0x1f4)] !==
                  $(this)[_0x37ed81(0x1a9)]("name")
              )),
              $(this)["val"]() !== "" &&
                filledInput[_0x37ed81(0x1b7)]({
                  inputName: $(this)[_0x37ed81(0x1a9)]("name"),
                  value: $(this)[_0x37ed81(0x222)](),
                }))
            : $(this)[_0x37ed81(0x222)]() !== "" &&
              filledInput[_0x37ed81(0x1b7)]({
                inputName: $(this)[_0x37ed81(0x1a9)](_0x37ed81(0x1d5)),
                value: $(this)["val"](),
              }))
        : filledInput[_0x37ed81(0x209)](
            (_0x3a75d8) =>
              _0x3a75d8[_0x37ed81(0x1f4)] === $(this)["attr"](_0x37ed81(0x1d5))
          )
        ? ((filledInput = filledInput["filter"](
            (_0x525c7a) =>
              _0x525c7a["inputName"] !==
              $(this)[_0x37ed81(0x1a9)](_0x37ed81(0x1d5))
          )),
          $(this)[_0x37ed81(0x222)]() !== "" &&
            filledInput["push"]({
              inputName: $(this)[_0x37ed81(0x1a9)](_0x37ed81(0x1d5)),
              value: $(this)[_0x37ed81(0x222)](),
            }))
        : $(this)[_0x37ed81(0x222)]() !== "" &&
          filledInput[_0x37ed81(0x1b7)]({
            inputName: $(this)[_0x37ed81(0x1a9)](_0x37ed81(0x1d5)),
            value: $(this)[_0x37ed81(0x222)](),
          });
    }),
    filledInput &&
      filledInput["forEach"]((_0x4dccb3) => {
        const _0x27715a = _0x1e5d7d;
        urlFormly["searchParams"]["delete"](_0x4dccb3[_0x27715a(0x1f4)]),
          urlFormly[_0x27715a(0x199)]["set"](
            _0x4dccb3[_0x27715a(0x1f4)],
            _0x4dccb3[_0x27715a(0x168)]
          ),
          window[_0x27715a(0x176)]["replaceState"](null, null, urlFormly);
      }),
    localStorage[_0x1e5d7d(0x158)](_0x1e5d7d(0x19b)),
    localStorage[_0x1e5d7d(0x1ff)](
      _0x1e5d7d(0x19b),
      JSON[_0x1e5d7d(0x1da)](filledInput)
    );
}
function scrollTop() {}
function updateStep() {
  const _0x47653e = _0x2978e0;
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
    (empReqRadio = []);
  $(_0x47653e(0x223))[_0x47653e(0x15b)](_0x47653e(0x1d0)) &&
    (steps["find"](_0x47653e(0x18e))["each"](function () {
      const _0x54934f = _0x47653e;
      $(
        $(_0x54934f(0x1ab))[
          $(this)
            [_0x54934f(0x15e)]("[data-form=\x22step\x22]")
            [_0x54934f(0x1f9)]()
        ]
      ),
        $(this)["val"]() === "" && emptyInput++;
    }),
    emptyInput > 0x0
      ? $(_0x47653e(0x16d))[_0x47653e(0x202)](_0x47653e(0x1ce))
      : $("input[type=\x22submit\x22]")[_0x47653e(0x1e6)](_0x47653e(0x1ce)));
  $(_0x47653e(0x1ab))[_0x47653e(0x1e6)](_0x47653e(0x1d6)),
    $($(_0x47653e(0x1ab))[x])["addClass"](_0x47653e(0x1d6)),
    (selection = selections[_0x47653e(0x20e)](
      (_0x58ed3e) => _0x58ed3e["step"] === x - 0x1
    ));
  next &&
    (x = getSafe(() => selection[0x0]["skipTo"])
      ? parseInt(getSafe(() => selection[0x0][_0x47653e(0x1c6)]))
      : x);
  $(_0x47653e(0x174))["hide"](), steps["hide"]();
  reinitIX === !![] && window[_0x47653e(0x1e3)][_0x47653e(0x189)]();
  $(progressbar)["removeClass"](_0x47653e(0x1d6));
  for (i = 0x0; i <= x; i++) {
    countCard
      ? $(progressbar[i])[_0x47653e(0x202)](_0x47653e(0x1d6))
      : !$(steps[i])[_0x47653e(0x15b)](_0x47653e(0x192)) &&
        $(progressbar[i])["addClass"]("current");
  }
  reinitIX === !![]
    ? (window["Webflow"] &&
        window[_0x47653e(0x1e3)]
          [_0x47653e(0x21f)](_0x47653e(0x219))
          [_0x47653e(0x167)](),
      document[_0x47653e(0x1ee)](new Event(_0x47653e(0x1a3))),
      $(steps[x])[_0x47653e(0x1cf)]())
    : $(steps[x])[_0x47653e(0x18b)]("slow");
  x === 0x0 &&
    !$(steps[x])[_0x47653e(0x15b)](_0x47653e(0x192)) &&
    $(steps[x])[_0x47653e(0x210)](_0x47653e(0x174))[_0x47653e(0x1cf)]();
  selection[_0x47653e(0x1c7)] > 0x0
    ? $(steps[x])
        [_0x47653e(0x210)](
          _0x47653e(0x204) + selection[0x0][_0x47653e(0x21a)] + "\x22]"
        )
        [_0x47653e(0x1cf)]()
    : $(steps[x])
        ["find"]("[data-answer=\x22" + answer + "\x22]")
        ["show"]();
  if (x === 0x0)
    $("[data-form=\x22back-btn\x22]")["hide"](),
      $(_0x47653e(0x220))[_0x47653e(0x1cf)]();
  else {
    if (
      x === steps[_0x47653e(0x1c7)] - 0x1 ||
      $(steps[x])[_0x47653e(0x210)](_0x47653e(0x214))["length"] > 0x0
    ) {
      $(_0x47653e(0x220))[_0x47653e(0x196)]();
      if (
        $(steps[x])
          [_0x47653e(0x210)](_0x47653e(0x1bc))
          [_0x47653e(0x15b)]("submit-show")
      )
        $(steps[x])["find"](_0x47653e(0x1bc))[_0x47653e(0x1cf)]();
      else
        $(_0x47653e(0x220))[_0x47653e(0x15b)]("submit-show") &&
          $("[data-form=\x22next-btn\x22]")["show"]();
      $(_0x47653e(0x1df))[_0x47653e(0x1cf)](),
        $(_0x47653e(0x18c))[_0x47653e(0x1cf)]();
    } else
      $(_0x47653e(0x220))[_0x47653e(0x1cf)](),
        $("[data-form=\x22back-btn\x22]")[_0x47653e(0x1cf)](),
        $("[data-form=\x22submit-btn\x22]")[_0x47653e(0x196)]();
  }
  $($(steps[x])[_0x47653e(0x210)](_0x47653e(0x1a2))[0x0])["focus"](),
    $($(steps[x])[_0x47653e(0x210)](_0x47653e(0x17e))[0x0])[_0x47653e(0x1f5)](),
    validation();
  for (idx = 0x0; idx <= progress; idx++) {
    $($(_0x47653e(0x1ab))[idx])[_0x47653e(0x1e6)](_0x47653e(0x1ce));
  }
}
function validateEmail(_0x4262a7, _0x2f6cc4) {
  const _0x278b47 = _0x2978e0;
  let _0x558b1b = _0x4262a7["includes"]("@")
    ? _0x4262a7[_0x278b47(0x161)]("@")[0x1][_0x278b47(0x161)](".")[0x0]
    : [];
  dom = [];
  _0x2f6cc4 !== undefined &&
    _0x2f6cc4[_0x278b47(0x161)](",")[_0x278b47(0x1f7)](function (_0x20ffa2) {
      const _0x5525c6 = _0x278b47;
      _0x20ffa2[_0x5525c6(0x1c3)](_0x558b1b) &&
        dom[_0x5525c6(0x1b7)](_0x558b1b);
    });
  dom[_0x278b47(0x1c7)] > 0x0 ? (domainAllowed = ![]) : (domainAllowed = !![]);
  var _0x33e29b = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,20})?$/;
  !_0x33e29b[_0x278b47(0x1c5)](_0x4262a7)
    ? (emailFilled = ![])
    : (emailFilled = !![]);
}
function validation() {
  const _0x4671d9 = _0x2978e0;
  $(steps[x])[_0x4671d9(0x15b)]("card") && enableBtn();
  (textareaLength = $(steps[x])[_0x4671d9(0x210)](_0x4671d9(0x178))["length"]),
    (textInputLength = $(steps[x])[_0x4671d9(0x210)](
      "input[type=\x22text\x22][required]:visible"
    )[_0x4671d9(0x1c7)]),
    (selectInputLength = $(steps[x])[_0x4671d9(0x210)](_0x4671d9(0x1cc))[
      "length"
    ]),
    (emailInputLength = $(steps[x])["find"](_0x4671d9(0x17c))[
      _0x4671d9(0x1c7)
    ]),
    (checkboxInputLength = $(steps[x])[_0x4671d9(0x210)](_0x4671d9(0x229))[
      _0x4671d9(0x1c7)
    ]);
  textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0
    ? disableBtn()
    : enableBtn();
  var _0x2e549b = $(steps[x])[_0x4671d9(0x15b)](_0x4671d9(0x1ef))
    ? $(steps[x])[_0x4671d9(0x15b)](_0x4671d9(0x1ef))
    : 0x0;
  if (!logicExtra)
    $(steps[x])
      [_0x4671d9(0x210)](_0x4671d9(0x1a6))
      ["is"]("[type=\x22checkbox\x22]") &&
      (_0x2e549b === "*" ||
      _0x2e549b > $(steps[x])["find"](_0x4671d9(0x1a7))[_0x4671d9(0x1c7)]
        ? $(steps[x])
            [_0x4671d9(0x210)](_0x4671d9(0x1a7))
            ["each"](function () {
              const _0xdec00a = _0x4671d9;
              $(this)["is"](_0xdec00a(0x1d3))
                ? $(steps[x])["find"](_0xdec00a(0x18e))[_0xdec00a(0x1c7)] <
                    0x1 && (checkboxFilled = !![])
                : (checkboxFilled = ![]);
            })
        : $(steps[x])[_0x4671d9(0x210)](
            ":input[type=\x22checkbox\x22]:checked"
          )["length"] >= _0x2e549b
        ? (checkboxFilled = !![])
        : (checkboxFilled = ![])),
      $(steps[x])
        [_0x4671d9(0x210)]("input:radio[required]")
        [_0x4671d9(0x1cb)](function (_0x45ce03) {
          const _0x371ae5 = _0x4671d9;
          var _0x1409f3 = $(this)[_0x371ae5(0x1a9)]("name");
          $(_0x371ae5(0x1b2) + _0x1409f3 + _0x371ae5(0x197))[
            _0x371ae5(0x1c7)
          ] == 0x0
            ? !empReqRadio[_0x371ae5(0x210)](
                (_0x1d60cc) => _0x1d60cc[_0x371ae5(0x19a)] === _0x45ce03
              ) && empReqRadio[_0x371ae5(0x1b7)]({ input: _0x45ce03 })
            : (empReqRadio = empReqRadio["filter"](
                (_0x174877) => _0x174877[_0x371ae5(0x19a)] !== _0x45ce03
              )),
            empReqRadio["length"] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0x4671d9(0x210)](_0x4671d9(0x215))
        [_0x4671d9(0x1cb)](function (_0x34c755) {
          const _0x2cfb0e = _0x4671d9;
          $(this)[_0x2cfb0e(0x222)]() !== ""
            ? (empReqInput = empReqInput[_0x2cfb0e(0x20e)](
                (_0x5adb28) => _0x5adb28[_0x2cfb0e(0x19a)] !== _0x34c755
              ))
            : !empReqInput[_0x2cfb0e(0x210)](
                (_0x8ccd79) => _0x8ccd79["input"] === _0x34c755
              ) && empReqInput[_0x2cfb0e(0x1b7)]({ input: _0x34c755 }),
            empReqInput[_0x2cfb0e(0x1c7)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x4671d9(0x20a))
        [_0x4671d9(0x1cb)](function (_0x4e48f4) {
          const _0x10e962 = _0x4671d9;
          $(this)["val"]() !== ""
            ? (empReqTel = empReqTel[_0x10e962(0x20e)](
                (_0x7ce260) => _0x7ce260["input"] !== _0x4e48f4
              ))
            : !empReqTel[_0x10e962(0x210)](
                (_0x29d00f) => _0x29d00f[_0x10e962(0x19a)] === _0x4e48f4
              ) && empReqTel["push"]({ input: _0x4e48f4 }),
            empReqTel[_0x10e962(0x1c7)] === 0x0
              ? (telFilled = !![])
              : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x4671d9(0x210)](_0x4671d9(0x16f))
        [_0x4671d9(0x1cb)](function (_0x28f07f) {
          const _0x5b293f = _0x4671d9;
          $(this)[_0x5b293f(0x222)]() !== ""
            ? (empReqFile = empReqFile[_0x5b293f(0x20e)](
                (_0x4f303a) => _0x4f303a[_0x5b293f(0x19a)] !== _0x28f07f
              ))
            : !empReqFile[_0x5b293f(0x210)](
                (_0x3e90ad) => _0x3e90ad[_0x5b293f(0x19a)] === _0x28f07f
              ) && empReqFile[_0x5b293f(0x1b7)]({ input: _0x28f07f }),
            empReqFile[_0x5b293f(0x1c7)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x4671d9(0x210)](_0x4671d9(0x207))
        ["each"](function (_0x4434c7) {
          const _0x451aa8 = _0x4671d9;
          $(this)[_0x451aa8(0x222)]() !== ""
            ? (empReqNum = empReqNum[_0x451aa8(0x20e)](
                (_0x1be9a7) => _0x1be9a7[_0x451aa8(0x19a)] !== _0x4434c7
              ))
            : !empReqNum[_0x451aa8(0x210)](
                (_0x1978f8) => _0x1978f8[_0x451aa8(0x19a)] === _0x4434c7
              ) && empReqNum[_0x451aa8(0x1b7)]({ input: _0x4434c7 }),
            empReqNum[_0x451aa8(0x1c7)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x4671d9(0x210)](_0x4671d9(0x17f))
        [_0x4671d9(0x1cb)](function (_0x402bde) {
          const _0x307f27 = _0x4671d9;
          let _0x1fbff0 = $(this)[_0x307f27(0x222)]();
          _0x1fbff0 === "" && (_0x1fbff0 = null),
            _0x1fbff0 != null
              ? (empReqSelect = empReqSelect[_0x307f27(0x20e)](
                  (_0xa2f107) => _0xa2f107[_0x307f27(0x19a)] !== _0x402bde
                ))
              : !empReqSelect[_0x307f27(0x210)](
                  (_0x4c52e3) => _0x4c52e3["input"] === _0x402bde
                ) && empReqSelect[_0x307f27(0x1b7)]({ input: _0x402bde }),
            empReqSelect[_0x307f27(0x1c7)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x4671d9(0x210)](_0x4671d9(0x160))
        ["each"](function (_0x2d1f73) {
          const _0x2eaf76 = _0x4671d9;
          $(this)[_0x2eaf76(0x222)]() !== ""
            ? (empReqTextarea = empReqTextarea[_0x2eaf76(0x20e)](
                (_0x25414d) => _0x25414d[_0x2eaf76(0x19a)] !== _0x2d1f73
              ))
            : !empReqTextarea["find"](
                (_0x192295) => _0x192295[_0x2eaf76(0x19a)] === _0x2d1f73
              ) && empReqTextarea[_0x2eaf76(0x1b7)]({ input: _0x2d1f73 }),
            empReqTextarea[_0x2eaf76(0x1c7)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x4671d9(0x210)](_0x4671d9(0x1dc))
        ["each"](function () {
          const _0x5d61da = _0x4671d9;
          $(this)[_0x5d61da(0x222)]() !== ""
            ? validateEmail(
                $(this)[_0x5d61da(0x222)](),
                $(this)["data"](_0x5d61da(0x1fb))
              )
            : (emailFilled = ![]);
        });
  else {
    if ($(steps[x])["data"](_0x4671d9(0x192)))
      (answer = $(steps[x])
        [_0x4671d9(0x210)](_0x4671d9(0x155))
        [_0x4671d9(0x15b)](_0x4671d9(0x20f))),
        (selections = selections[_0x4671d9(0x20e)](
          (_0x2bcbc1) => _0x2bcbc1[_0x4671d9(0x159)] !== x
        )),
        selections[_0x4671d9(0x1b7)]({ step: x, selected: answer });
    else
      $(steps[x])
        [_0x4671d9(0x210)](_0x4671d9(0x1f1))
        [_0x4671d9(0x15b)](_0x4671d9(0x192)) &&
        ((answer = $(steps[x])
          [_0x4671d9(0x210)](_0x4671d9(0x1f1))
          [_0x4671d9(0x15b)]("go-to")),
        (selections = selections[_0x4671d9(0x20e)](
          (_0x2c3146) => _0x2c3146["step"] !== x
        )),
        selections[_0x4671d9(0x1b7)]({ step: x, selected: answer }));
    $(steps[x])
      ["find"](_0x4671d9(0x1f1))
      [_0x4671d9(0x210)](_0x4671d9(0x1a6))
      ["is"](_0x4671d9(0x1b6)) &&
      (_0x2e549b === "*" ||
      _0x2e549b >
        $(steps[x])[_0x4671d9(0x210)](_0x4671d9(0x1a7))[_0x4671d9(0x1c7)]
        ? $(steps[x])
            ["find"](_0x4671d9(0x1a7))
            [_0x4671d9(0x1cb)](function () {
              const _0x3fae47 = _0x4671d9;
              $(this)["is"](_0x3fae47(0x1d3))
                ? $(steps[x])[_0x3fae47(0x210)](_0x3fae47(0x18e))[
                    _0x3fae47(0x1c7)
                  ] < 0x1 &&
                  ((skipTo = undefined),
                  $(this)
                    [_0x3fae47(0x15e)]("[data-skip-to]")
                    ["data"](_0x3fae47(0x185)) &&
                    (skipTo = $(this)
                      [_0x3fae47(0x15e)]("[data-skip-to]")
                      [_0x3fae47(0x15b)](_0x3fae47(0x185))),
                  $(this)
                    [_0x3fae47(0x15e)](_0x3fae47(0x155))
                    [_0x3fae47(0x1a9)](_0x3fae47(0x195)) &&
                    ((answer = $(this)
                      ["parents"](_0x3fae47(0x155))
                      [_0x3fae47(0x1a9)](_0x3fae47(0x195))),
                    (selections = selections[_0x3fae47(0x20e)](
                      (_0x5bc63c) => _0x5bc63c[_0x3fae47(0x159)] !== x
                    )),
                    selections[_0x3fae47(0x1b7)]({ step: x, selected: answer }),
                    skipTo &&
                      (selections[_0x3fae47(0x1b7)]({
                        step: skipTo - 0x2,
                        selected: answer,
                      }),
                      (objIndex = selections[_0x3fae47(0x216)](
                        (_0x5f53b3) => _0x5f53b3[_0x3fae47(0x159)] === x
                      )),
                      (selections[objIndex][_0x3fae47(0x1c6)] =
                        parseInt(skipTo) - 0x1),
                      (selections[objIndex][_0x3fae47(0x1e9)] = x))),
                  (checkboxFilled = !![]))
                : (checkboxFilled = ![]);
            })
        : $(steps[x])
            [_0x4671d9(0x210)](_0x4671d9(0x1f1))
            [_0x4671d9(0x210)](":input[type=\x22checkbox\x22]:checked")[
            _0x4671d9(0x1c7)
          ] >= _0x2e549b
        ? ($(steps[x])
            ["find"](_0x4671d9(0x1f1))
            [_0x4671d9(0x210)](_0x4671d9(0x15d))
            [_0x4671d9(0x15e)]("[data-go-to]")
            ["attr"](_0x4671d9(0x195)) &&
            ((skipTo = undefined),
            $(steps[x])
              [_0x4671d9(0x210)](_0x4671d9(0x1f1))
              ["find"](":input[type=\x22checkbox\x22]:checked")
              [_0x4671d9(0x15e)](_0x4671d9(0x190))
              [_0x4671d9(0x1a9)](_0x4671d9(0x1ed)) &&
              (skipTo = $(steps[x])
                [_0x4671d9(0x210)](_0x4671d9(0x1f1))
                [_0x4671d9(0x210)](_0x4671d9(0x15d))
                ["parents"]("[data-skip-to]")
                [_0x4671d9(0x1a9)](_0x4671d9(0x1ed))),
            (answer = $(steps[x])
              [_0x4671d9(0x210)](_0x4671d9(0x1f1))
              [_0x4671d9(0x210)](":input[type=\x22checkbox\x22]:checked")
              [_0x4671d9(0x15e)](_0x4671d9(0x155))
              [_0x4671d9(0x1a9)](_0x4671d9(0x195))),
            (selections = selections[_0x4671d9(0x20e)](
              (_0x115c17) => _0x115c17[_0x4671d9(0x159)] !== x
            )),
            selections["push"]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0x4671d9(0x1b7)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0x4671d9(0x216)](
                (_0x3765e7) => _0x3765e7[_0x4671d9(0x159)] === x
              )),
              (selections[objIndex][_0x4671d9(0x1c6)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x4671d9(0x1e9)] = x))),
          (selections = selections[_0x4671d9(0x20e)](
            (_0x5729aa) => _0x5729aa[_0x4671d9(0x159)] !== x
          )),
          selections[_0x4671d9(0x1b7)]({ step: x, selected: answer }),
          (checkboxFilled = !![]))
        : (checkboxFilled = ![])),
      $(steps[x])
        ["find"]("[data-answer]:visible")
        [_0x4671d9(0x210)](":input[required]")
        ["is"](_0x4671d9(0x1d9))
        ? $(steps[x])
            ["find"](_0x4671d9(0x1f1))
            [_0x4671d9(0x210)](_0x4671d9(0x200))
            ["is"](":checked")
          ? (radioFilled = !![])
          : (radioFilled = ![])
        : (radioFilled = !![]),
      $(steps[x])
        ["find"]("[data-answer]:visible")
        [_0x4671d9(0x210)](":input[type=\x22text\x22][required]")
        [_0x4671d9(0x1cb)](function (_0x34efd9) {
          const _0x2ea6de = _0x4671d9;
          $(this)["val"]() !== ""
            ? (empReqInput = empReqInput["filter"](
                (_0x5b2334) => _0x5b2334[_0x2ea6de(0x19a)] !== _0x34efd9
              ))
            : !empReqInput["find"](
                (_0x57353f) => _0x57353f[_0x2ea6de(0x19a)] === _0x34efd9
              ) && empReqInput["push"]({ input: _0x34efd9 }),
            empReqInput[_0x2ea6de(0x1c7)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x4671d9(0x1f1))
        [_0x4671d9(0x210)](_0x4671d9(0x1ea))
        [_0x4671d9(0x1cb)](function (_0x264415) {
          const _0x1b4126 = _0x4671d9;
          (skipTo = undefined),
            $(this)[_0x1b4126(0x15e)]("[data-skip-to]")["data"]("skip-to") !==
              "" &&
              (skipTo = $(this)
                [_0x1b4126(0x15e)](_0x1b4126(0x190))
                [_0x1b4126(0x15b)]("skip-to")),
            $(this)
              [_0x1b4126(0x15e)](_0x1b4126(0x155))
              ["attr"](_0x1b4126(0x195)) &&
              ((answer = $(this)
                ["parents"](_0x1b4126(0x155))
                [_0x1b4126(0x1a9)](_0x1b4126(0x195))),
              (selections = selections[_0x1b4126(0x20e)](
                (_0x42266e) => _0x42266e[_0x1b4126(0x159)] !== x
              )),
              selections[_0x1b4126(0x1b7)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections["findIndex"](
                  (_0x56d0ef) => _0x56d0ef[_0x1b4126(0x159)] === x
                )),
                (selections[objIndex][_0x1b4126(0x1c6)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x4671d9(0x210)](_0x4671d9(0x1f1))
        [_0x4671d9(0x210)](_0x4671d9(0x207))
        ["each"](function (_0x420696) {
          const _0x3a073e = _0x4671d9;
          $(this)[_0x3a073e(0x222)]() !== ""
            ? (empReqNum = empReqNum[_0x3a073e(0x20e)](
                (_0x18e84b) => _0x18e84b[_0x3a073e(0x19a)] !== _0x420696
              ))
            : !empReqNum[_0x3a073e(0x210)](
                (_0x456a45) => _0x456a45[_0x3a073e(0x19a)] === _0x420696
              ) && empReqNum[_0x3a073e(0x1b7)]({ input: _0x420696 }),
            empReqNum[_0x3a073e(0x1c7)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x4671d9(0x1f1))
        ["find"](":input[type=\x22number\x22]")
        ["each"](function (_0x3ce35d) {
          const _0x54a0dd = _0x4671d9;
          (skipTo = undefined),
            $(this)
              [_0x54a0dd(0x15e)]("[data-skip-to]")
              [_0x54a0dd(0x15b)](_0x54a0dd(0x185)) !== "" &&
              (skipTo = $(this)
                ["parents"]("[data-skip-to]")
                [_0x54a0dd(0x15b)](_0x54a0dd(0x185))),
            $(this)
              [_0x54a0dd(0x15e)](_0x54a0dd(0x155))
              [_0x54a0dd(0x1a9)](_0x54a0dd(0x195)) &&
              ((answer = $(this)
                [_0x54a0dd(0x15e)](_0x54a0dd(0x155))
                [_0x54a0dd(0x1a9)](_0x54a0dd(0x195))),
              (selections = selections[_0x54a0dd(0x20e)](
                (_0x2cd69b) => _0x2cd69b["step"] !== x
              )),
              selections[_0x54a0dd(0x1b7)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x54a0dd(0x1b7)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x54a0dd(0x216)](
                  (_0x753b97) => _0x753b97["step"] === x
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x4671d9(0x210)](_0x4671d9(0x1f1))
        [_0x4671d9(0x210)](":input[type=\x22tel\x22][required]")
        ["each"](function (_0xa99974) {
          const _0x441523 = _0x4671d9;
          $(this)[_0x441523(0x222)]() !== ""
            ? (empReqTel = empReqTel[_0x441523(0x20e)](
                (_0x462ac0) => _0x462ac0["input"] !== _0xa99974
              ))
            : !empReqTel[_0x441523(0x210)](
                (_0x375401) => _0x375401["input"] === _0xa99974
              ) && empReqTel[_0x441523(0x1b7)]({ input: _0xa99974 }),
            empReqTel[_0x441523(0x1c7)] === 0x0
              ? (telFilled = !![])
              : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x4671d9(0x210)](_0x4671d9(0x1f1))
        [_0x4671d9(0x210)](_0x4671d9(0x19c))
        [_0x4671d9(0x1cb)](function (_0x51f7f7) {
          const _0x5b4607 = _0x4671d9;
          (skipTo = undefined),
            $(this)
              [_0x5b4607(0x15e)](_0x5b4607(0x190))
              [_0x5b4607(0x15b)](_0x5b4607(0x185)) !== "" &&
              (skipTo = $(this)
                [_0x5b4607(0x15e)]("[data-skip-to]")
                [_0x5b4607(0x15b)](_0x5b4607(0x185))),
            $(this)
              [_0x5b4607(0x15e)](_0x5b4607(0x155))
              ["attr"](_0x5b4607(0x195)) &&
              ((answer = $(this)
                [_0x5b4607(0x15e)](_0x5b4607(0x155))
                [_0x5b4607(0x1a9)](_0x5b4607(0x195))),
              (selections = selections[_0x5b4607(0x20e)](
                (_0x67cf99) => _0x67cf99["step"] !== x
              )),
              selections[_0x5b4607(0x1b7)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x5b4607(0x1b7)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x5b4607(0x216)](
                  (_0x4def3b) => _0x4def3b[_0x5b4607(0x159)] === x
                )),
                (selections[objIndex][_0x5b4607(0x1c6)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        ["find"](_0x4671d9(0x1f1))
        [_0x4671d9(0x210)](_0x4671d9(0x16f))
        [_0x4671d9(0x1cb)](function (_0x31ee82) {
          const _0x3cc22b = _0x4671d9;
          $(this)[_0x3cc22b(0x222)]() !== ""
            ? (empReqfile = empReqfile[_0x3cc22b(0x20e)](
                (_0x259a97) => _0x259a97[_0x3cc22b(0x19a)] !== _0x31ee82
              ))
            : !empReqfile[_0x3cc22b(0x210)](
                (_0x519751) => _0x519751[_0x3cc22b(0x19a)] === _0x31ee82
              ) && empReqfile[_0x3cc22b(0x1b7)]({ input: _0x31ee82 }),
            empReqfile[_0x3cc22b(0x1c7)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x4671d9(0x210)](_0x4671d9(0x1f1))
        [_0x4671d9(0x210)](_0x4671d9(0x191))
        ["each"](function (_0x830826) {
          const _0x27dd4c = _0x4671d9;
          (skipTo = undefined),
            $(this)
              ["parents"]("[data-skip-to]")
              [_0x27dd4c(0x15b)](_0x27dd4c(0x185)) !== "" &&
              (skipTo = $(this)
                [_0x27dd4c(0x15e)](_0x27dd4c(0x190))
                [_0x27dd4c(0x15b)](_0x27dd4c(0x185))),
            $(this)
              [_0x27dd4c(0x15e)](_0x27dd4c(0x155))
              [_0x27dd4c(0x1a9)](_0x27dd4c(0x195)) &&
              ((answer = $(this)
                [_0x27dd4c(0x15e)](_0x27dd4c(0x155))
                ["attr"]("data-go-to")),
              (selections = selections["filter"](
                (_0x41cd0f) => _0x41cd0f["step"] !== x
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0x27dd4c(0x216)](
                  (_0x460df3) => _0x460df3[_0x27dd4c(0x159)] === x
                )),
                (selections[objIndex][_0x27dd4c(0x1c6)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x27dd4c(0x1e9)] = x)));
        }),
      $(steps[x])
        ["find"]("[data-answer]:visible")
        [_0x4671d9(0x210)](_0x4671d9(0x17f))
        [_0x4671d9(0x1cb)](function (_0x38e3ea) {
          const _0x229193 = _0x4671d9;
          $(this)[_0x229193(0x222)]() !== ""
            ? (empReqSelect = empReqSelect[_0x229193(0x20e)](
                (_0x11eb7c) => _0x11eb7c[_0x229193(0x19a)] !== _0x38e3ea
              ))
            : !empReqSelect["find"](
                (_0x5ca4ec) => _0x5ca4ec[_0x229193(0x19a)] === _0x38e3ea
              ) && empReqSelect["push"]({ input: _0x38e3ea }),
            empReqSelect["length"] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x4671d9(0x210)]("[data-answer]:visible")
        [_0x4671d9(0x210)]("select")
        [_0x4671d9(0x1cb)](function (_0x5d1049) {
          const _0x1dc9d8 = _0x4671d9;
          (skipTo = undefined),
            $(this)
              [_0x1dc9d8(0x15e)]("[data-skip-to]")
              [_0x1dc9d8(0x15b)](_0x1dc9d8(0x185)) !== "" &&
              (skipTo = $(this)
                [_0x1dc9d8(0x15e)]("[data-skip-to]")
                [_0x1dc9d8(0x15b)]("skip-to")),
            $(this)
              [_0x1dc9d8(0x15e)](_0x1dc9d8(0x155))
              [_0x1dc9d8(0x1a9)](_0x1dc9d8(0x195)) &&
              ((answer = $(this)
                [_0x1dc9d8(0x15e)](_0x1dc9d8(0x155))
                ["attr"](_0x1dc9d8(0x195))),
              (selections = selections["filter"](
                (_0x6648fd) => _0x6648fd[_0x1dc9d8(0x159)] !== x
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0x1dc9d8(0x216)](
                  (_0xa2050c) => _0xa2050c[_0x1dc9d8(0x159)] === x
                )),
                (selections[objIndex][_0x1dc9d8(0x1c6)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x1dc9d8(0x1e9)] = x)));
        }),
      $(steps[x])
        ["find"](_0x4671d9(0x1f1))
        ["find"](_0x4671d9(0x160))
        [_0x4671d9(0x1cb)](function (_0x3c8a64) {
          const _0x38f118 = _0x4671d9;
          $(this)[_0x38f118(0x222)]() !== ""
            ? (empReqTextarea = empReqTextarea[_0x38f118(0x20e)](
                (_0x54b5e2) => _0x54b5e2[_0x38f118(0x19a)] !== _0x3c8a64
              ))
            : !empReqTextarea[_0x38f118(0x210)](
                (_0x224822) => _0x224822[_0x38f118(0x19a)] === _0x3c8a64
              ) && empReqTextarea["push"]({ input: _0x3c8a64 }),
            empReqTextarea[_0x38f118(0x1c7)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x4671d9(0x210)]("[data-answer]:visible")
        [_0x4671d9(0x210)]("textarea")
        [_0x4671d9(0x1cb)](function (_0x5df98c) {
          const _0x5cb319 = _0x4671d9;
          (skipTo = undefined),
            $(this)["parents"](_0x5cb319(0x190))["data"]("skip-to") !== "" &&
              (skipTo = $(this)
                ["parents"](_0x5cb319(0x190))
                [_0x5cb319(0x15b)](_0x5cb319(0x185))),
            $(this)
              [_0x5cb319(0x15e)](_0x5cb319(0x155))
              [_0x5cb319(0x1a9)](_0x5cb319(0x195)) &&
              ((answer = $(this)
                [_0x5cb319(0x15e)](_0x5cb319(0x155))
                [_0x5cb319(0x1a9)](_0x5cb319(0x195))),
              (selections = selections[_0x5cb319(0x20e)](
                (_0x543a72) => _0x543a72[_0x5cb319(0x159)] !== x
              )),
              selections[_0x5cb319(0x1b7)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0x5cb319(0x216)](
                  (_0x137910) => _0x137910[_0x5cb319(0x159)] === x
                )),
                (selections[objIndex][_0x5cb319(0x1c6)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x4671d9(0x210)]("[data-answer]:visible")
        [_0x4671d9(0x210)](_0x4671d9(0x1dc))
        ["each"](function (_0x3af519) {
          const _0x16432a = _0x4671d9;
          $(this)[_0x16432a(0x222)]() !== ""
            ? validateEmail(
                $(this)[_0x16432a(0x222)](),
                $(this)["data"](_0x16432a(0x1fb))
              )
            : (emailFilled = ![]);
        }),
      $(steps[x])
        [_0x4671d9(0x210)]("[data-answer]:visible")
        ["find"](":input[type=\x22email\x22]")
        [_0x4671d9(0x1cb)](function (_0x40338e) {
          const _0x581632 = _0x4671d9;
          (skipTo = undefined),
            $(this)["parents"](_0x581632(0x190))["data"](_0x581632(0x185)) !==
              "" &&
              (skipTo = $(this)
                [_0x581632(0x15e)](_0x581632(0x190))
                [_0x581632(0x15b)](_0x581632(0x185))),
            $(this)
              [_0x581632(0x15e)](_0x581632(0x155))
              [_0x581632(0x1a9)](_0x581632(0x195)) &&
              ((answer = $(this)
                [_0x581632(0x15e)](_0x581632(0x155))
                [_0x581632(0x1a9)](_0x581632(0x195))),
              (selections = selections[_0x581632(0x20e)](
                (_0x1b3c66) => _0x1b3c66[_0x581632(0x159)] !== x
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x581632(0x1b7)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x581632(0x216)](
                  (_0x45cce3) => _0x45cce3[_0x581632(0x159)] === x
                )),
                (selections[objIndex][_0x581632(0x1c6)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x581632(0x1e9)] = x)));
        });
  }
  $(steps[x])[_0x4671d9(0x210)](_0x4671d9(0x182))["is"](_0x4671d9(0x1d3)) &&
    ((selArr = []),
    $(steps)
      [_0x4671d9(0x210)](_0x4671d9(0x186))
      ["each"](function (_0x3a7285, _0x21cab7) {
        const _0x53b5b7 = _0x4671d9;
        selArr[_0x53b5b7(0x1b7)]({
          selected: $(this)[_0x53b5b7(0x15b)](_0x53b5b7(0x21a)),
        });
      }),
    (selString = []),
    selArr["forEach"]((_0x2c3ed8) =>
      selString[_0x4671d9(0x1b7)](_0x2c3ed8[_0x4671d9(0x21a)])
    ),
    (selections = selections["filter"](
      (_0x5f36cc) => _0x5f36cc[_0x4671d9(0x159)] !== x
    )),
    $(steps[x])
      ["find"]("[data-answer]:visible")
      [_0x4671d9(0x210)](_0x4671d9(0x1c9))
      [_0x4671d9(0x1cb)](function () {
        const _0x3f6a4d = _0x4671d9;
        skipTo = undefined;
        if (
          $(this)
            [_0x3f6a4d(0x15e)](_0x3f6a4d(0x190))
            [_0x3f6a4d(0x15b)](_0x3f6a4d(0x185))
        )
          skipTo = $(this)
            [_0x3f6a4d(0x15e)](_0x3f6a4d(0x190))
            [_0x3f6a4d(0x15b)](_0x3f6a4d(0x185));
        else
          $(this)[_0x3f6a4d(0x15b)](_0x3f6a4d(0x185)) &&
            (skipTo = $(this)[_0x3f6a4d(0x15b)](_0x3f6a4d(0x185)));
        if ($(this)[_0x3f6a4d(0x15b)](_0x3f6a4d(0x20f)))
          (answer = $(this)["attr"](_0x3f6a4d(0x195))),
            selections["push"]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0x3f6a4d(0x1b7)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0x3f6a4d(0x216)](
                (_0x1fd058) => _0x1fd058[_0x3f6a4d(0x159)] === x
              )),
              (selections[objIndex][_0x3f6a4d(0x1c6)] = parseInt(skipTo) - 0x1),
              (selections[objIndex]["backTo"] = x));
        else
          $(this)["parents"]("[data-go-to]")[_0x3f6a4d(0x15b)]("go-to") &&
            ((answer = $(this)
              [_0x3f6a4d(0x15e)](_0x3f6a4d(0x155))
              [_0x3f6a4d(0x15b)](_0x3f6a4d(0x20f))),
            selections[_0x3f6a4d(0x1b7)]({ step: x, selected: answer }),
            skipTo &&
              (selections["push"]({ step: skipTo - 0x2, selected: answer }),
              (objIndex = selections[_0x3f6a4d(0x216)](
                (_0x2211b6) => _0x2211b6["step"] === x
              )),
              (selections[objIndex][_0x3f6a4d(0x1c6)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x3f6a4d(0x1e9)] = x)));
      }),
    logicExtra
      ? ($(steps[x])
          [_0x4671d9(0x210)](_0x4671d9(0x1f1))
          [_0x4671d9(0x210)](_0x4671d9(0x1ca))
          [_0x4671d9(0x15b)](_0x4671d9(0x16e)) === !![] ||
          $(steps[x])
            [_0x4671d9(0x210)]("[data-answer][data-radio-skip]:visible")
            [_0x4671d9(0x15b)](_0x4671d9(0x16e)) === !![]) &&
        skip &&
        selections[_0x4671d9(0x20e)](
          (_0x1f2f3d) => _0x1f2f3d[_0x4671d9(0x159)] === x
        )["length"] > 0x0 &&
        textareaLength === 0x0 &&
        textInputLength === 0x0 &&
        emailInputLength === 0x0 &&
        checkboxInputLength === 0x0 &&
        setTimeout(function () {
          (next = !![]), nextStep(), selectionQuiz();
        }, $(steps[x])
          [_0x4671d9(0x210)](_0x4671d9(0x21e))
          ["data"](_0x4671d9(0x1de)))
      : $(steps[x])
          [_0x4671d9(0x210)](_0x4671d9(0x1ca))
          ["data"](_0x4671d9(0x16e)) === !![] &&
        skip &&
        textareaLength === 0x0 &&
        textInputLength === 0x0 &&
        emailInputLength === 0x0 &&
        checkboxInputLength === 0x0 &&
        setTimeout(function () {
          (next = !![]), nextStep(), selectionQuiz();
        }, $(steps[x])
          [_0x4671d9(0x210)]("[data-radio-delay]")
          ["data"]("radio-delay"))),
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
function nextStep() {
  const _0x4fbc82 = _0x2978e0;
  x++,
    countCard
      ? ((curStep = curStep + 0x1),
        $(_0x4fbc82(0x1ae))["text"](steps[_0x4fbc82(0x1c7)]))
      : $(steps[x])[_0x4fbc82(0x15b)](_0x4fbc82(0x192))
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    $(_0x4fbc82(0x228))["text"](curStep),
    x > progress && (progress = x),
    x <= steps["length"] - 0x1 && (updateStep(), memory && saveFilledInput());
}
function backStep() {
  const _0x528ba3 = _0x2978e0;
  countCard
    ? ((curStep = curStep - 0x1),
      $(_0x528ba3(0x1ae))["text"](steps[_0x528ba3(0x1c7)]))
    : $(steps[x])[_0x528ba3(0x15b)]("card")
    ? (curStep = curStep - 0x0)
    : (curStep = curStep - 0x1),
    $("[data-text=\x22current-step\x22]")[_0x528ba3(0x1a0)](curStep),
    x > 0x0 &&
      ($(progressbar[x])[_0x528ba3(0x1e6)](_0x528ba3(0x1d6)),
      selections[_0x528ba3(0x20e)]((_0x20c9de) => _0x20c9de["skipTo"] === x)[
        _0x528ba3(0x1c7)
      ] > 0x0
        ? (x = parseInt(
            getSafe(
              () =>
                selections["filter"](
                  (_0x3efa83) => _0x3efa83[_0x528ba3(0x1c6)] === x
                )[0x0][_0x528ba3(0x1e9)]
            )
          ))
        : x--,
      updateStep());
}
function selectionQuiz() {
  const _0x40c930 = _0x2978e0;
  if ($(this)["find"](_0x40c930(0x1c1))) {
    $(_0x40c930(0x218))[_0x40c930(0x196)]();
    if (weightedSelection) {
      let _0x5f06ea = 0x0;
      selArr[_0x40c930(0x1f7)](function (_0xcbcd5) {
        _0x5f06ea = _0x5f06ea + _0xcbcd5["selected"];
      }),
        $("[data-selection=\x22" + _0x5f06ea + "\x22]")[_0x40c930(0x1c7)] > 0x0
          ? $(_0x40c930(0x1fd) + _0x5f06ea + "\x22]")[_0x40c930(0x18b)]()
          : $(_0x40c930(0x169))["fadeIn"]();
    } else {
      let _0x437050 = -0x1;
      $(_0x40c930(0x218))[_0x40c930(0x1cb)](function (_0x1b1320) {
        const _0x281add = _0x40c930;
        $($("[data-selection]")[_0x1b1320])
          [_0x281add(0x15b)](_0x281add(0x170))
          [_0x281add(0x1c3)](selString[_0x281add(0x1c2)]()) &&
          (_0x437050 = _0x1b1320);
      }),
        _0x437050 > -0x1
          ? $($(_0x40c930(0x218))[_0x437050])["fadeIn"]()
          : $(_0x40c930(0x169))[_0x40c930(0x18b)]();
    }
  }
}
function triggerInputAllData() {
  const _0x298e07 = _0x2978e0;
  savedFilledInput &&
    memory &&
    savedFilledInput[_0x298e07(0x1f7)]((_0xacc213) => {
      const _0x3ba04f = _0x298e07;
      if (
        $(
          _0x3ba04f(0x20d) +
            _0xacc213[_0x3ba04f(0x1f4)] +
            "\x22][value=\x22" +
            _0xacc213[_0x3ba04f(0x168)] +
            "\x22]"
        )[_0x3ba04f(0x1a9)](_0x3ba04f(0x1d4)) === _0x3ba04f(0x1e7)
      )
        $(
          "input[name=\x22" +
            _0xacc213[_0x3ba04f(0x1f4)] +
            _0x3ba04f(0x1db) +
            _0xacc213[_0x3ba04f(0x168)] +
            "\x22]"
        )[_0x3ba04f(0x1b0)](_0x3ba04f(0x19a));
      else
        _0xacc213["value"] === "on"
          ? $(_0x3ba04f(0x20d) + _0xacc213[_0x3ba04f(0x1f4)] + "\x22]")[
              _0x3ba04f(0x1b0)
            ](_0x3ba04f(0x19a))
          : ($("input[name=\x22" + _0xacc213["inputName"] + "\x22]")[
              _0x3ba04f(0x1b0)
            ](_0x3ba04f(0x19a)),
            $(_0x3ba04f(0x20d) + _0xacc213[_0x3ba04f(0x1f4)] + "\x22]")[
              "trigger"
            ](_0x3ba04f(0x1d7)));
    });
}
$(_0x2978e0(0x220))["on"](_0x2978e0(0x1e2), function () {
  scrollTop(), (next = !![]), nextStep(), selectionQuiz();
}),
  $(_0x2978e0(0x18c))["on"](_0x2978e0(0x1e2), function () {
    scrollTop(), (next = ![]), (back = !![]), backStep();
  }),
  $(steps)
    ["find"](":input")
    ["on"](_0x2978e0(0x19a), function (_0x5832d1) {
      validation();
    }),
  $(steps)
    [_0x2978e0(0x210)](_0x2978e0(0x224))
    ["on"](_0x2978e0(0x1e2), () => {
      skip = !![];
    }),
  $(steps)[_0x2978e0(0x210)](_0x2978e0(0x224))["on"]("click", validation());
$(_0x2978e0(0x177))[_0x2978e0(0x15b)]("clickable-all")
  ? $(_0x2978e0(0x1ab))[_0x2978e0(0x1e6)]("disabled")
  : $(_0x2978e0(0x1ab))[_0x2978e0(0x202)](_0x2978e0(0x1ce));
function clickableIndicator() {
  const _0x5b09fa = _0x2978e0;
  $(_0x5b09fa(0x221))[_0x5b09fa(0x1e6)](_0x5b09fa(0x1d6)),
    $(_0x5b09fa(0x223))[_0x5b09fa(0x15b)](_0x5b09fa(0x1d0)) &&
      ($(_0x5b09fa(0x223))[_0x5b09fa(0x15b)]("clickable-all")
        ? ((x = $(this)[_0x5b09fa(0x1f9)]()), updateStep())
        : $(this)[_0x5b09fa(0x1f9)]() <= progress &&
          ((x = $(this)[_0x5b09fa(0x1f9)]()), updateStep()));
}
$("[data-form=\x22custom-progress-indicator\x22]")["on"](
  _0x2978e0(0x1e2),
  clickableIndicator
);
$(_0x2978e0(0x1b9))["data"](_0x2978e0(0x180)) &&
  ($(_0x2978e0(0x155))[_0x2978e0(0x1cb)](function () {
    const _0xc4d6b4 = _0x2978e0;
    $(this)[_0xc4d6b4(0x173)](
      _0xc4d6b4(0x19d),
      $(this)[_0xc4d6b4(0x15b)](_0xc4d6b4(0x20f))
    );
  }),
  $(_0x2978e0(0x174))["each"](function () {
    const _0x19fde9 = _0x2978e0;
    $(this)[_0x19fde9(0x173)](
      _0x19fde9(0x198),
      $(this)[_0x19fde9(0x15b)](_0x19fde9(0x18f))
    );
  }));
$(_0x2978e0(0x1df))["on"](_0x2978e0(0x1e2), function (_0x5d06e9) {
  const _0x46ab24 = _0x2978e0;
  $(this)["data"]("redirect") &&
    (redirectTo = $(this)[_0x46ab24(0x15b)](_0x46ab24(0x183))),
    !$(this)[_0x46ab24(0x15b)](_0x46ab24(0x201)) &&
      (newTab = $(this)[_0x46ab24(0x15b)](_0x46ab24(0x201))),
    (successCard = $(this)[_0x46ab24(0x15b)]("success")),
    _0x5d06e9[_0x46ab24(0x184)](),
    _0x5d06e9["stopPropagation"](),
    logicExtra &&
      ($(this)["prop"](_0x46ab24(0x157), !![]),
      $(steps)["find"](_0x46ab24(0x1a6))["prop"](_0x46ab24(0x16a), ![])),
    localStorage[_0x46ab24(0x158)](_0x46ab24(0x19b)),
    fill &&
      ($(this)[_0x46ab24(0x15b)]("wait")
        ? $(this)[_0x46ab24(0x222)]($(this)[_0x46ab24(0x15b)](_0x46ab24(0x1eb)))
        : ($(this)["val"](_0x46ab24(0x1e1)), $(this)["text"](_0x46ab24(0x1e1))),
      $(_0x46ab24(0x1b9))[_0x46ab24(0x227)]());
});
function resetFormly() {
  const _0x15c155 = _0x2978e0;
  $("[data-form=\x22multistep\x22]")[_0x15c155(0x1b0)](_0x15c155(0x1c8)),
    $("[data-form=\x22multistep\x22]")
      [_0x15c155(0x15e)]()
      [_0x15c155(0x210)](_0x15c155(0x203))
      [_0x15c155(0x196)](),
    (x = 0x0),
    updateStep(),
    $(_0x15c155(0x1b9))[_0x15c155(0x1cf)](),
    $("[data-form=\x22submit-btn\x22]")["text"](oldSubmitText),
    $(_0x15c155(0x1df))["val"](oldSubmitText),
    $(_0x15c155(0x228))["text"](0x1),
    $(_0x15c155(0x1b9))
      [_0x15c155(0x210)](_0x15c155(0x1f6))
      ["siblings"](_0x15c155(0x172))
      [_0x15c155(0x1e6)]("w--redirected-checked");
}
$(document)["ajaxComplete"](function (_0x3f3da6, _0x2b49b0, _0x2ed622) {
  const _0x2e7540 = _0x2978e0;
  if (_0x2ed622["url"][_0x2e7540(0x1c3)]("https://webflow.com/api/v1/form/")) {
    const _0x3752bd = _0x2b49b0["status"] === 0xc8,
      _0x27e02a = _0x2e7540(0x1a4);
    redirectTo &&
      _0x3752bd &&
      (newTab
        ? window[_0x2e7540(0x1b3)](redirectTo, "_blank")
        : (location["href"] = redirectTo)),
      _0x3752bd &&
        successCard !== "" &&
        $(_0x2e7540(0x18d) + successCard + "\x22]")["fadeIn"](),
      _0x3752bd &&
        formReset &&
        setTimeout(() => {
          resetFormly();
        }, resetDelay);
  }
}),
  $(_0x2978e0(0x217))["on"]("click", function () {
    const _0x38e44a = _0x2978e0;
    (back = !![]),
      (x = $(this)[_0x38e44a(0x15b)](_0x38e44a(0x1dd)) - 0x1),
      updateStep(),
      countCard
        ? ((curStep = x + 0x1),
          $(_0x38e44a(0x1ae))[_0x38e44a(0x1a0)](steps[_0x38e44a(0x1c7)]))
        : $(steps[x])[_0x38e44a(0x15b)](_0x38e44a(0x192))
        ? (curStep = x + 0x0)
        : (curStep = x + 0x1),
      $(_0x38e44a(0x228))[_0x38e44a(0x1a0)](curStep),
      (back = ![]);
  }),
  $(_0x2978e0(0x194))["on"](_0x2978e0(0x1e2), function () {
    const _0x3d33d2 = _0x2978e0;
    $(_0x3d33d2(0x1b9))[_0x3d33d2(0x1b0)](_0x3d33d2(0x1c8));
    let _0x50f988 = $(this);
    $(this)[_0x3d33d2(0x1a0)](_0x3d33d2(0x1e1)),
      setTimeout(function () {
        const _0x4518d5 = _0x3d33d2;
        $(_0x50f988)["text"](oldResetText),
          $(_0x50f988)[_0x4518d5(0x15e)](_0x4518d5(0x203))[_0x4518d5(0x196)](),
          (x = 0x0),
          updateStep(),
          $(_0x4518d5(0x1b9))["show"](),
          $(_0x4518d5(0x1df))[_0x4518d5(0x1a0)](oldSubmitText),
          $(_0x4518d5(0x1df))[_0x4518d5(0x222)](oldSubmitText),
          $(_0x50f988)[_0x4518d5(0x222)](oldSubmitText),
          $(_0x4518d5(0x228))[_0x4518d5(0x1a0)](0x1),
          $(_0x4518d5(0x1b9))
            ["find"](_0x4518d5(0x1f6))
            [_0x4518d5(0x1b1)](_0x4518d5(0x172))
            ["removeClass"]("w--redirected-checked");
      }, resetDelay);
  }),
  $(_0x2978e0(0x162))["on"]("keypress", function (_0xbc352d) {
    const _0x39f6b6 = _0x2978e0;
    _0xbc352d[_0x39f6b6(0x1e4)] === 0xd &&
      fill &&
      ($(_0x39f6b6(0x16b))[_0x39f6b6(0x15b)](_0x39f6b6(0x15c))
        ? (totalSteps > curStep &&
            $("[data-form=\x22next-btn\x22]")[0x0]["click"](),
          _0xbc352d[_0x39f6b6(0x184)](),
          _0xbc352d[_0x39f6b6(0x1b5)]())
        : (_0xbc352d[_0x39f6b6(0x184)](), _0xbc352d[_0x39f6b6(0x1b5)]()));
  }),
  $(_0x2978e0(0x162))[_0x2978e0(0x206)](function (_0x2119d9) {
    const _0x5e4b92 = _0x2978e0;
    (_0x2119d9[_0x5e4b92(0x166)] || _0x2119d9[_0x5e4b92(0x20c)]) &&
      _0x2119d9["keyCode"] == 0xd &&
      (x >= steps[_0x5e4b92(0x1c7)] - 0x1 && fill
        ? $(steps[x])["find"](_0x5e4b92(0x15a))[_0x5e4b92(0x1e2)]()
        : (event[_0x5e4b92(0x184)](), event[_0x5e4b92(0x1b5)]()));
  }),
  $(_0x2978e0(0x208))["keypress"](function (_0x373681) {
    const _0x5d3309 = _0x2978e0;
    $(this)[_0x5d3309(0x1f5)](),
      _0x373681["key"] == "Enter" &&
        (_0x373681[_0x5d3309(0x184)](), _0x373681[_0x5d3309(0x1b5)]()),
      _0x373681[_0x5d3309(0x175)] &&
        _0x373681[_0x5d3309(0x1e8)] == "Enter" &&
        $(this)[_0x5d3309(0x222)]($(this)["val"]() + "\x0a");
  }),
  $(_0x2978e0(0x1b9))
    ["find"](_0x2978e0(0x1a6))
    ["on"](_0x2978e0(0x19a), function () {
      const _0x470b73 = _0x2978e0;
      (all_data = all_data[_0x470b73(0x20e)](
        (_0x57dafa) =>
          _0x57dafa[_0x470b73(0x1bd)] !==
          $(this)[_0x470b73(0x15b)](_0x470b73(0x1d5))
      )),
        $(this)[_0x470b73(0x1a9)]("type") === _0x470b73(0x1ef)
          ? all_data[_0x470b73(0x1b7)]({
              field: $(this)[_0x470b73(0x1a9)]("name"),
              value: $(this)
                [_0x470b73(0x1b1)](_0x470b73(0x171))
                [_0x470b73(0x1a0)](),
            })
          : all_data[_0x470b73(0x1b7)]({
              field: $(this)["attr"](_0x470b73(0x1d5)),
              value: $(this)[_0x470b73(0x222)](),
            }),
        all_data[_0x470b73(0x1f7)](function (_0x342c74) {
          const _0x111976 = _0x470b73;
          $("[data-input-field=\x22" + _0x342c74[_0x111976(0x1bd)] + "\x22]")[
            _0x111976(0x18b)
          ](),
            $(_0x111976(0x1b8) + _0x342c74[_0x111976(0x1bd)] + "\x22]")[
              _0x111976(0x1a0)
            ](_0x342c74[_0x111976(0x168)]);
        });
    }),
  $("[data-form=\x22multistep\x22]")
    [_0x2978e0(0x210)](_0x2978e0(0x208))
    ["on"](_0x2978e0(0x19a), function () {
      const _0x331e0e = _0x2978e0;
      (all_data = all_data[_0x331e0e(0x20e)](
        (_0x1a755f) =>
          _0x1a755f[_0x331e0e(0x1bd)] !==
          $(this)[_0x331e0e(0x1a9)](_0x331e0e(0x1d5))
      )),
        all_data[_0x331e0e(0x1b7)]({
          field: $(this)[_0x331e0e(0x1a9)](_0x331e0e(0x1d5)),
          value: $(this)[_0x331e0e(0x222)](),
        }),
        all_data[_0x331e0e(0x1f7)](function (_0x4aba0) {
          const _0x304543 = _0x331e0e;
          $("[data-input-field=\x22" + _0x4aba0[_0x304543(0x1bd)] + "\x22]")[
            _0x304543(0x18b)
          ](),
            $(_0x304543(0x1b8) + _0x4aba0["field"] + "\x22]")[_0x304543(0x1a0)](
              _0x4aba0[_0x304543(0x168)]
            );
        });
    }),
  $(_0x2978e0(0x1b9))
    ["find"]("select")
    ["on"](_0x2978e0(0x1d7), function () {
      const _0x201f04 = _0x2978e0;
      (all_data = all_data[_0x201f04(0x20e)](
        (_0x441b2e) =>
          _0x441b2e[_0x201f04(0x1bd)] !==
          $(this)[_0x201f04(0x1a9)](_0x201f04(0x1d5))
      )),
        all_data["push"]({
          field: $(this)[_0x201f04(0x1a9)](_0x201f04(0x1d5)),
          value: $(this)[_0x201f04(0x222)](),
        }),
        all_data[_0x201f04(0x1f7)](function (_0x137555) {
          const _0x5c0eac = _0x201f04;
          $(_0x5c0eac(0x1b8) + _0x137555["field"] + "\x22]")[
            _0x5c0eac(0x18b)
          ](),
            $(_0x5c0eac(0x1b8) + _0x137555[_0x5c0eac(0x1bd)] + "\x22]")[
              _0x5c0eac(0x1a0)
            ](_0x137555[_0x5c0eac(0x168)]);
        });
    }),
  updateStep(),
  triggerInputAllData(),
  $(_0x2978e0(0x1bf))[_0x2978e0(0x1cb)](function () {
    const _0x539220 = _0x2978e0,
      _0x3ddd15 = $(this)["find"](_0x539220(0x188)),
      _0x5db7c1 = [];
    console[_0x539220(0x193)](_0x5db7c1),
      _0x3ddd15[_0x539220(0x1cb)](function () {
        const _0x4a5961 = _0x539220;
        _0x5db7c1[_0x4a5961(0x1b7)](
          $(this)[_0x4a5961(0x1a0)]()[_0x4a5961(0x17d)]()
        );
      });
    const _0x4b9725 = $(this)["siblings"](_0x539220(0x1ad));
    $["each"](_0x5db7c1, function (_0x1b09ac, _0x537f89) {
      const _0x25cc3e = _0x539220,
        _0x159bcb = $(_0x25cc3e(0x1d2))
          [_0x25cc3e(0x222)](_0x537f89)
          [_0x25cc3e(0x1a0)](_0x537f89);
      _0x4b9725["append"](_0x159bcb);
    });
  });
function _0x1ab6() {
  const _0x198ed7 = [
    "field",
    "15819rUJNrt",
    "[data-cms-select=cms]",
    "[data-count-card]",
    "[data-btn=\x22check\x22]",
    "join",
    "includes",
    "9103616tutxBZ",
    "test",
    "skipTo",
    "length",
    "reset",
    ":input[type=\x27radio\x27]:checked",
    "[data-radio-skip]:visible",
    "each",
    "select[required]:visible",
    ".w-radio-input",
    "disabled",
    "show",
    "clickable",
    "query-param",
    "<option>",
    ":checked",
    "type",
    "name",
    "current",
    "change",
    "auto",
    "[type=\x22radio\x22]",
    "stringify",
    "\x22][value=\x22",
    ":input[type=\x22email\x22][required]",
    "edit-step",
    "radio-delay",
    "[data-form=\x22submit-btn\x22]",
    "[data-query-param]",
    "Please\x20wait...",
    "click",
    "Webflow",
    "keyCode",
    "location",
    "removeClass",
    "radio",
    "key",
    "backTo",
    ":input[type=\x22text\x22]",
    "wait",
    "children",
    "data-skip-to",
    "dispatchEvent",
    "checkbox",
    "custom-error-message",
    "[data-answer]:visible",
    "clone",
    "12364119LTneKw",
    "inputName",
    "focus",
    "input:checkbox",
    "forEach",
    "[data-input-field]",
    "index",
    "7856688ITWfTL",
    "block-domain",
    "logic-extra",
    "[data-selection=\x22",
    "2363515YjBAlL",
    "setItem",
    ":input[type=\x22radio\x22][required]",
    "new-tab",
    "addClass",
    ".w-form-done",
    "[data-answer=\x22",
    "data-radio-delay",
    "keydown",
    ":input[type=\x22number\x22][required]",
    "textarea",
    "some",
    ":input[type=\x22tel\x22][required]",
    "data-radio-skip",
    "ctrlKey",
    "input[name=\x22",
    "filter",
    "go-to",
    "find",
    "css",
    "count-card",
    "prop",
    "[data-form=\x22submit\x22]:visible",
    ":input[type=\x22text\x22][required]",
    "findIndex",
    "[data-btn=\x22edit\x22]",
    "[data-selection]",
    "ix2",
    "selected",
    "reset-delay",
    "select[name=\x22",
    "textarea[name=\x22",
    "[data-radio-delay]",
    "require",
    "[data-form=\x22next-btn\x22]",
    "[data-form=\x22progress-indicator\x22]",
    "val",
    "[data-clickable]",
    ":radio",
    "[data-reset-delay]",
    "w--redirected-checked",
    "submit",
    "[data-text=\x22current-step\x22]",
    "input[type=\x22checkbox\x22]:visible",
    "[data-go-to]",
    "[data-reinit]",
    "novalidate",
    "removeItem",
    "step",
    "[data-form=\x22submit-btn\x22]:visible",
    "data",
    "enter",
    ":input[type=\x22checkbox\x22]:checked",
    "parents",
    "checked",
    "textarea[required]",
    "split",
    "body",
    "[data-quiz]",
    "2160708JHZGMb",
    "[data-select-multiple]",
    "metaKey",
    "init",
    "value",
    "[data-selection=\x22other\x22]",
    "required",
    "[data-enter]",
    "option[value=\x22",
    "input[type=\x22submit\x22]",
    "radio-skip",
    ":input[type=\x22file\x22][required]",
    "selection",
    "span",
    ".w-checkbox-input",
    "append",
    "[data-answer]",
    "shiftKey",
    "history",
    "[data-clickable-all]",
    "textarea[required]:visible",
    "[data-form=\x22step\x22]",
    "parse",
    "[data-form=\x22step\x22]:not([data-card=\x22true\x22])",
    "input[type=\x22email\x22]:visible",
    "trim",
    "textarea[autofocus]",
    "select[required]",
    "debug-mode",
    "[data-form=\x22progress\x22]",
    ":input[type=\x22radio\x22]",
    "redirect",
    "preventDefault",
    "skip-to",
    "[data-selected]:checked",
    "[data-form=\x22step\x22][data-card]",
    "[data-cms-select=text]",
    "destroy",
    "[type=\x22submit\x22]",
    "fadeIn",
    "[data-form=\x22back-btn\x22]",
    "[data-success-card=\x22",
    ":input[required]",
    "answer",
    "[data-skip-to]",
    ":input[type=\x22file\x22]",
    "card",
    "log",
    "[data-btn=\x22reset\x22]",
    "data-go-to",
    "hide",
    "\x22]:checked",
    "<br>Data\x20Answer\x20=\x20",
    "searchParams",
    "input",
    "filledInput",
    ":input[type=\x22tel\x22]",
    "<br>Data\x20Go\x20To\x20=\x20",
    "3yEpKUw",
    "not",
    "text",
    "select-multiple",
    "input[autofocus]",
    "readystatechange",
    "redirect-form-hehexd",
    "8024233XTFMAQ",
    ":input",
    ":input[type=\x22checkbox\x22]",
    "none",
    "attr",
    "[data-form=\x22next-btn\x22][type=\x22submit\x22]",
    "[data-form=\x22custom-progress-indicator\x22]",
    "getItem",
    "[data-cms-select=input]",
    "[data-text=\x22total-steps\x22]",
    "quiz",
    "trigger",
    "siblings",
    "input:radio[name=\x22",
    "open",
    "0.4",
    "stopPropagation",
    "[type=\x22checkbox\x22]",
    "push",
    "[data-input-field=\x22",
    "[data-form=\x22multistep\x22]",
    "6ZtfOUz",
    "reinit",
    "[data-form=\x22next-btn\x22][data-submit-show]",
  ];
  _0x1ab6 = function () {
    return _0x198ed7;
  };
  return _0x1ab6();
}
