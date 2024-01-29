//29th Jan 2023
//Bug fix
//2. click to add class not working with form memory

const _0x548ec2 = _0x5c6d;
(function (_0x34fcdd, _0x347da9) {
  const _0x143781 = _0x5c6d,
    _0x1f608a = _0x34fcdd();
  while (!![]) {
    try {
      const _0x310721 =
        (parseInt(_0x143781(0xde)) / 0x1) * (-parseInt(_0x143781(0xb1)) / 0x2) +
        -parseInt(_0x143781(0xd2)) / 0x3 +
        parseInt(_0x143781(0x14b)) / 0x4 +
        (-parseInt(_0x143781(0x1ce)) / 0x5) *
          (parseInt(_0x143781(0x1a5)) / 0x6) +
        (parseInt(_0x143781(0x134)) / 0x7) *
          (-parseInt(_0x143781(0x190)) / 0x8) +
        parseInt(_0x143781(0x16a)) / 0x9 +
        (-parseInt(_0x143781(0x17f)) / 0xa) *
          (-parseInt(_0x143781(0x1ed)) / 0xb);
      if (_0x310721 === _0x347da9) break;
      else _0x1f608a["push"](_0x1f608a["shift"]());
    } catch (_0x33de2e) {
      _0x1f608a["push"](_0x1f608a["shift"]());
    }
  }
})(_0x1251, 0x7bfeb);
let x = 0x0,
  lastStep = 0x0,
  curStep = 0x0,
  steps = $(_0x548ec2(0x19f)),
  progressbarClone = $(_0x548ec2(0xc4))[_0x548ec2(0xd3)](),
  progressbar,
  countCard = !![],
  weightedSelection = $(_0x548ec2(0x1ac))[_0x548ec2(0x122)](
    "weighted-selection",
  ),
  weightedSelectionRange = $(_0x548ec2(0x1ef))["data"](_0x548ec2(0xbb)),
  selectMultiple = $(_0x548ec2(0x201))["data"](_0x548ec2(0x210)),
  customError = $(_0x548ec2(0x11e))[_0x548ec2(0x122)](_0x548ec2(0x1e7)),
  fill = ![],
  inputFilled = !![],
  skip,
  urlFilled = !![],
  selectFilled = !![],
  radioFilled = !![],
  dateFilled = !![],
  timeFilled = !![],
  checkboxFilled = !![],
  emailFilled = !![],
  textareaFilled = !![],
  telFilled = !![],
  passwordFilled = !![],
  fileFilled = !![],
  numFilled = !![],
  answer = "",
  selections = [],
  selection = [],
  empReqInput = [],
  empReqUrl = [],
  empReqDate = [],
  empReqTime = [],
  empReqRadio = [],
  empReqSelect = [],
  empReqTextarea = [],
  empReqFile = [],
  empReqPassword = [],
  empReqNum = [],
  empReqEmail = [],
  empReqTel = [],
  reinitIX = $(_0x548ec2(0x14f))[_0x548ec2(0x122)](_0x548ec2(0xdd)),
  textareaLength = 0x0,
  textInputLength = 0x0,
  emailInputLength = 0x0,
  selectInputLength = 0x0,
  checkboxInputLength = 0x0,
  filledInput = [],
  savedFilledInput = [],
  memory = $(_0x548ec2(0x13d))[_0x548ec2(0x122)]("memory"),
  quiz = $(_0x548ec2(0x203))[_0x548ec2(0x122)](_0x548ec2(0x20d)),
  progress = 0x0;
const urlFormly = new URL(window[_0x548ec2(0x188)]["href"]);
let _params = $(_0x548ec2(0x159))[_0x548ec2(0x122)](_0x548ec2(0x1e1)),
  skipTo = 0x0,
  next = ![],
  back = ![],
  selArr = [],
  selString = [],
  emptyInput = 0x0,
  selTotal = 0x0,
  searchQ = [],
  domainAllowed = !![],
  dom = [],
  logicExtra = $(_0x548ec2(0x115))[_0x548ec2(0x122)](_0x548ec2(0x1d5)),
  oldSubmitText = $(_0x548ec2(0x136))[_0x548ec2(0x174)](),
  oldResetText = $("[data-btn=\x22reset\x22]")[_0x548ec2(0x150)](),
  formReset = $(_0x548ec2(0x115))[_0x548ec2(0x122)](_0x548ec2(0x1e8)),
  successCard = "",
  redirectTo = "",
  totalSteps = 0x0,
  checkCount = 0x0,
  resetDelay = $(_0x548ec2(0x1f5))["data"](_0x548ec2(0xcf))
    ? $(_0x548ec2(0x1f5))[_0x548ec2(0x122)]("reset-delay")
    : 0x7d0,
  redirectDelay = $(_0x548ec2(0xaf))[_0x548ec2(0x122)](_0x548ec2(0xe9))
    ? $(_0x548ec2(0xaf))[_0x548ec2(0x122)](_0x548ec2(0xe9))
    : 0x7d0,
  newTab = !![],
  unfilledArr = [],
  phoneFormat = $(_0x548ec2(0x115))["data"](_0x548ec2(0xb7)),
  scrollToTop = $("[data-form=\x22multistep\x22]")["data"](_0x548ec2(0x187)),
  trackLastStep = $(_0x548ec2(0x101))[_0x548ec2(0x122)]("last-step"),
  conditionalResult =
    $(_0x548ec2(0xb0))[_0x548ec2(0x122)](_0x548ec2(0x131)) === _0x548ec2(0xb9),
  scrollTopOffset = parseInt(
    $("[data-form=\x22multistep\x22]")[_0x548ec2(0x122)](_0x548ec2(0x123)),
  ),
  notRobot = !![],
  all_data = [];
const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
(savedFilledInput = JSON[_0x548ec2(0x107)](
  localStorage[_0x548ec2(0x1b6)](_0x548ec2(0x12e)),
)),
  (formlyLastStep = JSON[_0x548ec2(0x107)](
    localStorage[_0x548ec2(0x1b6)](_0x548ec2(0x171)),
  )),
  (formlyLastStepAnswer = JSON["parse"](
    localStorage[_0x548ec2(0x1b6)](_0x548ec2(0x102)),
  ));
var ogCloneArr = [];
trackLastStep &&
  (formlyLastStep > x && (x = formlyLastStep),
  formlyLastStepAnswer && (selections = formlyLastStepAnswer));
$(_0x548ec2(0x1bf))[_0x548ec2(0xae)](function () {
  const _0x471538 = _0x548ec2;
  ogCloneArr[_0x471538(0x15b)]({
    name: $(this)[_0x471538(0x122)](_0x471538(0xd3)),
    element: $(this)[_0x471538(0xd3)](!![]),
    display: $(
      _0x471538(0x1aa) + $(this)[_0x471538(0x122)](_0x471538(0xd3)) + "\x22]",
    )
      ["eq"](0x0)
      ["clone"](!![]),
  });
});
$(_0x548ec2(0x18c))[_0x548ec2(0xe8)] > 0x0 && (notRobot = ![]);
function recaptcha(_0x4d066f) {
  notRobot = !![];
}
$(_0x548ec2(0xfa))[_0x548ec2(0xe8)] > 0x0 &&
  (countCard = $(_0x548ec2(0xfa))[_0x548ec2(0x122)](_0x548ec2(0x15a)));
$(_0x548ec2(0x1f7))[_0x548ec2(0x1ba)](),
  $(progressbarClone)[_0x548ec2(0x120)](_0x548ec2(0x207)),
  $(_0x548ec2(0x1d1))["children"]()["remove"](),
  $(_0x548ec2(0x136))["hide"](),
  $("[data-form-ms=\x22submit-btn\x22]")[_0x548ec2(0x1ba)](),
  steps[_0x548ec2(0xae)](function () {
    const _0x2bb62d = _0x548ec2;
    $(_0x2bb62d(0x1d1))["append"](
      progressbarClone[_0x2bb62d(0xd3)](!![], !![]),
    );
  }),
  $(_0x548ec2(0xed))[_0x548ec2(0x1ba)]();
countCard
  ? ((curStep = curStep + 0x1),
    (totalSteps = steps["length"]),
    $(_0x548ec2(0x1d7))[_0x548ec2(0x150)](totalSteps))
  : ($(steps[x])[_0x548ec2(0x122)](_0x548ec2(0x152))
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    (totalSteps = $(_0x548ec2(0xe4))[_0x548ec2(0xe8)]),
    $(_0x548ec2(0x1d7))["text"](totalSteps),
    $("[data-form=\x22step\x22][data-card]")["each"](function () {
      const _0x5beb80 = _0x548ec2;
      $($(_0x5beb80(0xc4))[$(this)["index"]()])[_0x5beb80(0x1ba)]();
    }));
(progressbar = $(_0x548ec2(0x1d1))["children"]()),
  $("[data-form=\x22progress-indicator\x22]")["on"](
    _0x548ec2(0xd1),
    clickableIndicator,
  ),
  $(_0x548ec2(0x20e))[_0x548ec2(0x150)](curStep),
  steps[_0x548ec2(0x1ba)](),
  $(_0x548ec2(0xf7))[_0x548ec2(0x1ba)](),
  $(_0x548ec2(0x133))[_0x548ec2(0xae)](function () {
    const _0x44cc7b = _0x548ec2;
    $(this)[_0x44cc7b(0x198)]("type", "button");
  });
function getParams() {
  const _0x1aeb44 = _0x548ec2;
  urlFormly[_0x1aeb44(0x1fd)][_0x1aeb44(0xc1)](function (_0x148481, _0x17a56b) {
    searchQ["push"]({ val: _0x148481, key: _0x17a56b });
  });
}
function getSafe(_0x408597, _0xf812cf) {
  try {
    return _0x408597();
  } catch (_0x58e3fb) {
    return _0xf812cf;
  }
}
function phoneAutoFormat(_0x389ddc) {
  var _0x6d164e = "";
  return function (_0x112463) {
    const _0xea2b26 = _0x5c6d;
    var _0x2743c6 = "",
      _0x1a41c8 = _0x112463[_0xea2b26(0x18a)](/\D/g, ""),
      _0x18377c = 0x0,
      _0xbd4162 = 0x0;
    while (
      _0x18377c < _0x1a41c8[_0xea2b26(0xe8)] &&
      _0xbd4162 < _0x389ddc[_0xea2b26(0xe8)]
    ) {
      _0x389ddc[_0xbd4162] === "x"
        ? ((_0x2743c6 += _0x1a41c8[_0x18377c]), _0x18377c++)
        : (_0x2743c6 += _0x389ddc[_0xbd4162]),
        _0xbd4162++;
    }
    if (_0x112463[_0xea2b26(0xe8)] < _0x6d164e[_0xea2b26(0xe8)]) {
      var _0x2513bd = _0x389ddc["slice"](_0xbd4162);
      _0x2743c6 += _0x2513bd[_0xea2b26(0x18a)](/x/g, "");
    }
    return (_0x6d164e = _0x2743c6), _0x2743c6;
  };
}
function validateURL(_0x19c424) {
  return urlPattern["test"](_0x19c424) ? !![] : ![];
}
quiz &&
  steps[_0x548ec2(0xae)](function () {
    const _0x1ce905 = _0x548ec2;
    $(this)[_0x1ce905(0xf3)]()[_0x1ce905(0x198)]("data-radio-skip", !![]),
      $(this)[_0x1ce905(0xf3)]()["attr"](_0x1ce905(0xea), 0xfa);
  });
function disableBtn(_0x3136d0) {
  const _0x18e4be = _0x548ec2;
  (fill = ![]),
    !customError &&
      ($(_0x18e4be(0x14a))[_0x18e4be(0x116)]({
        opacity: "0.4",
        "pointer-events": _0x18e4be(0xca),
      }),
      $(_0x18e4be(0x14a))[_0x18e4be(0x1dd)](_0x18e4be(0x178)),
      $("[data-form=\x22submit-btn\x22]")["css"]({
        opacity: _0x18e4be(0x1c8),
        "pointer-events": _0x18e4be(0xca),
      }),
      $(_0x18e4be(0x136))[_0x18e4be(0x1dd)](_0x18e4be(0x178)),
      $(_0x18e4be(0x119))[_0x18e4be(0x116)]({
        opacity: _0x18e4be(0x1c8),
        "pointer-events": _0x18e4be(0xca),
      }),
      $("[data-form-ms=\x22submit-btn\x22]")["addClass"]("disabled"));
}
function enableBtn() {
  const _0x5347d2 = _0x548ec2;
  (fill = !![]),
    $("[data-form=\x22next-btn\x22]")["css"]({
      "pointer-events": _0x5347d2(0x1d3),
      opacity: "1",
    }),
    $(_0x5347d2(0x14a))[_0x5347d2(0x120)](_0x5347d2(0x178)),
    $(_0x5347d2(0x136))[_0x5347d2(0x116)]({
      "pointer-events": _0x5347d2(0x1d3),
      opacity: "1",
    }),
    $(_0x5347d2(0x136))[_0x5347d2(0x120)](_0x5347d2(0x178)),
    $("[data-form-ms=\x22submit-btn\x22]")[_0x5347d2(0x116)]({
      "pointer-events": "auto",
      opacity: "1",
    }),
    $(_0x5347d2(0x119))["removeClass"]("disabled");
}
function saveLastAnswer(_0x3d599e) {
  const _0x4930a9 = _0x548ec2;
  console[_0x4930a9(0xd5)](_0x3d599e),
    localStorage[_0x4930a9(0xd4)](_0x4930a9(0x102)),
    localStorage[_0x4930a9(0xc2)](
      "formlyLastStepAnswer",
      JSON["stringify"](_0x3d599e),
    );
}
function saveFilledInput() {
  const _0x4d7e3a = _0x548ec2;
  $("form[data-form=\x22multistep\x22]\x20:input")
    [_0x4d7e3a(0x1f4)]("[type=\x22submit\x22]")
    [_0x4d7e3a(0xae)](function () {
      const _0x392bb5 = _0x4d7e3a;
      $(this)[_0x392bb5(0x198)](_0x392bb5(0x1ee)) === _0x392bb5(0xfc) ||
      $(this)[_0x392bb5(0x198)]("type") === _0x392bb5(0x15d)
        ? $(this)[_0x392bb5(0x13a)](_0x392bb5(0x18f)) &&
          (filledInput[_0x392bb5(0x13b)](
            (_0x19a720) =>
              _0x19a720["inputName"] === $(this)[_0x392bb5(0x198)]("name"),
          )
            ? ((filledInput = filledInput[_0x392bb5(0x17b)](
                (_0x1d1dda) =>
                  _0x1d1dda[_0x392bb5(0x19a)] !==
                  $(this)[_0x392bb5(0x198)](_0x392bb5(0x121)),
              )),
              $(this)[_0x392bb5(0x174)]() !== "" &&
                filledInput[_0x392bb5(0x15b)]({
                  inputName: $(this)["attr"](_0x392bb5(0x121)),
                  value: $(this)[_0x392bb5(0x174)](),
                }))
            : $(this)["val"]() !== "" &&
              filledInput[_0x392bb5(0x15b)]({
                inputName: $(this)["attr"](_0x392bb5(0x121)),
                value: $(this)[_0x392bb5(0x174)](),
              }))
        : filledInput[_0x392bb5(0x13b)](
              (_0x54f19c) =>
                _0x54f19c[_0x392bb5(0x19a)] ===
                $(this)[_0x392bb5(0x198)](_0x392bb5(0x121)),
            )
          ? ((filledInput = filledInput[_0x392bb5(0x17b)](
              (_0x21e567) =>
                _0x21e567[_0x392bb5(0x19a)] !==
                $(this)[_0x392bb5(0x198)](_0x392bb5(0x121)),
            )),
            $(this)[_0x392bb5(0x174)]() !== "" &&
              filledInput[_0x392bb5(0x15b)]({
                inputName: $(this)["attr"](_0x392bb5(0x121)),
                value: $(this)["val"](),
              }))
          : $(this)[_0x392bb5(0x174)]() !== "" &&
            filledInput[_0x392bb5(0x15b)]({
              inputName: $(this)["attr"](_0x392bb5(0x121)),
              value: $(this)["val"](),
            });
    }),
    trackLastStep &&
      (console[_0x4d7e3a(0xd5)](_0x4d7e3a(0x204)),
      formlyLastStep > x ? (lastStep = formlyLastStep) : (lastStep = x),
      localStorage[_0x4d7e3a(0xd4)]("formlyLastStep"),
      localStorage[_0x4d7e3a(0xc2)](_0x4d7e3a(0x171), lastStep)),
    localStorage[_0x4d7e3a(0xd4)](_0x4d7e3a(0x12e)),
    localStorage[_0x4d7e3a(0xc2)](
      _0x4d7e3a(0x12e),
      JSON[_0x4d7e3a(0x148)](filledInput),
    );
}
function scrollTop() {
  const _0x556826 = _0x548ec2;
  scrollToTop &&
    $(_0x556826(0x209))[_0x556826(0xd7)](
      {
        scrollTop:
          $(_0x556826(0x115))["offset"]()[_0x556826(0x160)] - scrollTopOffset,
      },
      0x3e8,
    );
}
function _0x5c6d(_0x2fe81a, _0x7c69a8) {
  const _0x125154 = _0x1251();
  return (
    (_0x5c6d = function (_0x5c6d56, _0x2fc2e7) {
      _0x5c6d56 = _0x5c6d56 - 0xa4;
      let _0xfc7972 = _0x125154[_0x5c6d56];
      return _0xfc7972;
    }),
    _0x5c6d(_0x2fe81a, _0x7c69a8)
  );
}
function updateStep() {
  const _0x446cec = _0x548ec2;
  scrollTop(), (skip = ![]), $(_0x446cec(0x1fc))["removeClass"]("disabled");
  $(_0x446cec(0x1a9))[_0x446cec(0x122)](_0x446cec(0x156)) &&
    (steps["find"](":input[required]")[_0x446cec(0xae)](function () {
      const _0x449f50 = _0x446cec;
      $(
        $("[data-form=\x22custom-progress-indicator\x22]")[
          $(this)[_0x449f50(0xcb)]("[data-form=\x22step\x22]")["index"]()
        ],
      ),
        $(this)["val"]() === "" && emptyInput++;
    }),
    emptyInput > 0x0
      ? $(_0x446cec(0x169))[_0x446cec(0x1dd)](_0x446cec(0x178))
      : $(_0x446cec(0x169))[_0x446cec(0x120)]("disabled"));
  $(_0x446cec(0x1fc))[_0x446cec(0x120)](_0x446cec(0x207)),
    $(_0x446cec(0x1fc))[_0x446cec(0x1dd)](_0x446cec(0x178)),
    $($(_0x446cec(0x1fc))[x])[_0x446cec(0x1dd)](_0x446cec(0x207)),
    (selection = selections[_0x446cec(0x17b)](
      (_0x432005) => _0x432005[_0x446cec(0x16b)] === x - 0x1,
    ));
  next &&
    (x = getSafe(() => selection[0x0][_0x446cec(0xe0)])
      ? parseInt(getSafe(() => selection[0x0][_0x446cec(0xe0)]))
      : x);
  $("[data-answer]")[_0x446cec(0x1ba)](), steps[_0x446cec(0x1ba)]();
  reinitIX === !![] && window[_0x446cec(0x17d)][_0x446cec(0x1de)]();
  $(progressbar)[_0x446cec(0x120)](_0x446cec(0x207));
  for (i = 0x0; i <= x; i++) {
    countCard
      ? $(progressbar[i])[_0x446cec(0x1dd)](_0x446cec(0x207))
      : !$(steps[i])[_0x446cec(0x122)]("card") &&
        $(progressbar[i])[_0x446cec(0x1dd)](_0x446cec(0x207));
  }
  reinitIX === !![]
    ? (window["Webflow"] &&
        window[_0x446cec(0x17d)]
          [_0x446cec(0x196)](_0x446cec(0x132))
          [_0x446cec(0x205)](),
      document[_0x446cec(0xa7)](new Event("readystatechange")),
      $(steps[x])["show"]())
    : $(steps[x])["fadeIn"]("slow");
  $(_0x446cec(0x1d9))[_0x446cec(0x120)](_0x446cec(0xc5));
  x === 0x0 &&
    !$(steps[x])["data"](_0x446cec(0x152)) &&
    ($(steps[x])[_0x446cec(0x12c)](_0x446cec(0x162))[_0x446cec(0x179)](),
    $(steps[x])
      [_0x446cec(0x12c)](_0x446cec(0x162))
      [_0x446cec(0x1dd)]("active-answer-card"));
  selection[_0x446cec(0xe8)] > 0x0
    ? ($(steps[x])
        ["find"](_0x446cec(0xf9) + selection[0x0]["selected"] + "\x22]")
        [_0x446cec(0x179)](),
      $(steps[x])
        ["find"](
          "[data-answer=\x22" + selection[0x0][_0x446cec(0x145)] + "\x22]",
        )
        [_0x446cec(0x1dd)](_0x446cec(0xc5)))
    : ($(steps[x])
        [_0x446cec(0x12c)](_0x446cec(0xf9) + answer + "\x22]")
        ["show"](),
      $(steps[x])
        [_0x446cec(0x12c)]("[data-answer=\x22" + answer + "\x22]")
        [_0x446cec(0x1dd)]("active-answer-card"));
  if (x === 0x0)
    $(_0x446cec(0x1bc))[_0x446cec(0x1ba)](),
      $(_0x446cec(0x14a))[_0x446cec(0x179)](),
      $(_0x446cec(0x136))[_0x446cec(0x1ba)]();
  else {
    if (
      x === steps[_0x446cec(0xe8)] - 0x1 ||
      $(steps[x])[_0x446cec(0x12c)](_0x446cec(0x144))["length"] > 0x0
    ) {
      $("[data-form=\x22next-btn\x22]")[_0x446cec(0x1ba)]();
      if (
        $(steps[x])
          [_0x446cec(0x12c)](_0x446cec(0x130))
          ["data"](_0x446cec(0x191))
      )
        $(steps[x])
          [_0x446cec(0x12c)]("[data-form=\x22next-btn\x22][data-submit-show]")
          [_0x446cec(0x179)]();
      else
        $(_0x446cec(0x14a))[_0x446cec(0x122)](_0x446cec(0x191)) &&
          $(_0x446cec(0x14a))[_0x446cec(0x179)]();
      $("[data-form=\x22submit-btn\x22]")[_0x446cec(0x179)](),
        $("[data-form-ms=\x22submit-btn\x22]")["show"](),
        $(_0x446cec(0x1bc))["show"]();
    } else
      $(_0x446cec(0x14a))[_0x446cec(0x179)](),
        $(_0x446cec(0x1bc))[_0x446cec(0x179)](),
        $(_0x446cec(0x136))[_0x446cec(0x1ba)](),
        $("[data-form-ms=\x22submit-btn\x22]")[_0x446cec(0x1ba)]();
  }
  $($(steps[x])[_0x446cec(0x12c)](_0x446cec(0x112))[0x0])[_0x446cec(0x16e)](),
    $($(steps[x])[_0x446cec(0x12c)](_0x446cec(0x186))[0x0])[_0x446cec(0x16e)](),
    validation();
  for (idx = 0x0; idx <= x; idx++) {
    $($(_0x446cec(0x1fc))[idx])[_0x446cec(0x120)](_0x446cec(0x178));
  }
}
function validateEmail(_0x15ee80, _0x444729, _0x35fa42) {
  const _0x4a5a8e = _0x548ec2;
  let _0x2493c4 = _0x15ee80[_0x4a5a8e(0x110)]("@")
    ? _0x15ee80["split"]("@")[0x1][_0x4a5a8e(0x192)](".")[0x0]
    : [];
  dom = [];
  _0x444729 !== undefined &&
    _0x444729["split"](",")[_0x4a5a8e(0xc1)](function (_0x3b849e) {
      const _0x3c60d6 = _0x4a5a8e;
      _0x3b849e[_0x3c60d6(0x110)](_0x2493c4) &&
        dom[_0x3c60d6(0x15b)](_0x2493c4);
    });
  dom[_0x4a5a8e(0xe8)] > 0x0 ? (domainAllowed = ![]) : (domainAllowed = !![]);
  var _0x320676 = /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,20})?$/;
  console["log"](_0x320676[_0x4a5a8e(0x1c5)](_0x15ee80)),
    !_0x320676[_0x4a5a8e(0x1c5)](_0x15ee80) || !domainAllowed
      ? ((emailFilled = ![]),
        unfilledArr[_0x4a5a8e(0x15b)]({ input: _0x35fa42 }))
      : (emailFilled = !![]);
}
function phoneValidation(_0x2dda04, _0x126da0, _0x1b7d9e) {
  if (phoneFormat) return _0x126da0 >= _0x1b7d9e ? !![] : ![];
  else {
    if (_0x126da0 >= _0x1b7d9e) return !![];
  }
}
function validation() {
  const _0x2283ba = _0x548ec2;
  $(steps[x])[_0x2283ba(0x122)](_0x2283ba(0x152)) && enableBtn();
  (unfilledArr = []),
    (inputFilled = !![]),
    (radioFilled = !![]),
    (checkboxFilled = !![]),
    (numFilled = !![]),
    (fileFilled = !![]),
    (dateFilled = !![]),
    (timeFilled = !![]),
    (selectFilled = !![]),
    (textareaFilled = !![]),
    (telFilled = !![]),
    (emailFilled = !![]),
    (passwordFilled = !![]),
    (emptyInput = 0x0),
    (empReqInput = []),
    (empReqDate = []),
    (empReqTime = []),
    (empReqSelect = []),
    (empReqTextarea = []),
    (empReqNum = []),
    (empReqFile = []),
    (empReqRadio = []),
    (textareaLength = $(steps[x])[_0x2283ba(0x12c)](
      "textarea[required]:visible",
    )[_0x2283ba(0xe8)]),
    (textInputLength = $(steps[x])["find"](_0x2283ba(0xaa))[_0x2283ba(0xe8)]),
    (selectInputLength = $(steps[x])[_0x2283ba(0x12c)](_0x2283ba(0x18d))[
      _0x2283ba(0xe8)
    ]),
    (emailInputLength = $(steps[x])[_0x2283ba(0x12c)](_0x2283ba(0xc7))[
      _0x2283ba(0xe8)
    ]),
    (checkboxInputLength = $(steps[x])[_0x2283ba(0x12c)](_0x2283ba(0x18e))[
      _0x2283ba(0xe8)
    ]);
  textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0
    ? disableBtn()
    : enableBtn();
  checkCount = $(steps[x])[_0x2283ba(0x122)](_0x2283ba(0xfc))
    ? $(steps[x])[_0x2283ba(0x122)](_0x2283ba(0xfc))
    : $(steps[x])["find"](_0x2283ba(0xb6))[_0x2283ba(0xe8)] > 0x0
      ? $(steps[x])
          [_0x2283ba(0x12c)]("[data-checkbox]")
          ["data"](_0x2283ba(0xfc))
      : 0x0;
  if (!logicExtra)
    $(steps[x])[_0x2283ba(0x12c)](_0x2283ba(0xc6))["is"](_0x2283ba(0x1d6)) &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])[_0x2283ba(0x12c)](_0x2283ba(0x105))[_0x2283ba(0xe8)]
        ? $(steps[x])
            [_0x2283ba(0x12c)](_0x2283ba(0x105))
            ["each"](function () {
              const _0x442a50 = _0x2283ba;
              $(this)["is"](_0x442a50(0x1f3))
                ? $(steps[x])[_0x442a50(0x12c)](
                    ":input[type=\x22checkbox\x22][required]",
                  )[_0x442a50(0xe8)] < 0x1 &&
                  ((checkboxFilled = !![]),
                  resetInputErrorMessage($(this)["attr"](_0x442a50(0x121))))
                : ((checkboxFilled = ![]),
                  unfilledArr["push"]({
                    input: $(this)[_0x442a50(0x198)]("name"),
                  }));
            })
        : $(steps[x])[_0x2283ba(0x12c)](_0x2283ba(0xdf))["length"] >= checkCount
          ? $(steps[x])["find"](_0x2283ba(0x135))["length"] > 0x0
            ? $(steps[x])
                [_0x2283ba(0x12c)](_0x2283ba(0x135))
                [_0x2283ba(0xae)](function () {
                  const _0x14fabf = _0x2283ba;
                  checkboxFilled = ![];
                  let _0x4096a6 = $(steps[x])[_0x14fabf(0x12c)](
                      _0x14fabf(0x135),
                    )["length"],
                    _0x596b66 = $(steps[x])["find"](_0x14fabf(0x12d))[
                      _0x14fabf(0xe8)
                    ];
                  console[_0x14fabf(0xd5)](_0x4096a6 - _0x596b66),
                    _0x4096a6 - _0x596b66 === 0x0
                      ? ((checkboxFilled = !![]),
                        resetInputErrorMessage(
                          $(steps[x])
                            [_0x14fabf(0x12c)](_0x14fabf(0x105))
                            [_0x14fabf(0x198)](_0x14fabf(0x121)),
                        ))
                      : ((checkboxFilled = ![]),
                        $(steps[x])
                          [_0x14fabf(0x12c)](_0x14fabf(0x138))
                          ["each"](function () {
                            const _0x16c942 = _0x14fabf;
                            unfilledArr[_0x16c942(0x15b)]({
                              input: $(this)[_0x16c942(0x198)]("name"),
                            });
                          }));
                })
            : ((checkboxFilled = !![]),
              resetInputErrorMessage(
                $(steps[x])
                  [_0x2283ba(0x12c)](_0x2283ba(0x105))
                  ["attr"](_0x2283ba(0x121)),
              ))
          : ((checkboxFilled = ![]),
            $(steps[x])
              [_0x2283ba(0x12c)](_0x2283ba(0x135))
              [_0x2283ba(0xae)](function () {
                const _0x3538c8 = _0x2283ba;
                $(this)[_0x3538c8(0x1f4)](_0x3538c8(0x1f3)) &&
                  unfilledArr["push"]({
                    input: $(this)["attr"](_0x3538c8(0x121)),
                  });
              }),
            unfilledArr[_0x2283ba(0x15b)]({
              input: $(steps[x])
                ["find"](":input[type=\x22checkbox\x22]")
                [_0x2283ba(0x198)](_0x2283ba(0x121)),
            }))),
      $(steps[x])
        [_0x2283ba(0x12c)](_0x2283ba(0x216))
        [_0x2283ba(0xae)](function (_0x2f966f) {
          const _0x304d52 = _0x2283ba;
          var _0x597a83 = $(this)[_0x304d52(0x198)](_0x304d52(0x121));
          $(_0x304d52(0xcd) + _0x597a83 + "\x22]:checked")[_0x304d52(0xe8)] ==
          0x0
            ? (!empReqRadio[_0x304d52(0x12c)](
                (_0x5b0abe) => _0x5b0abe[_0x304d52(0x1df)] === _0x2f966f,
              ) && empReqRadio[_0x304d52(0x15b)]({ input: _0x2f966f }),
              unfilledArr[_0x304d52(0x15b)]({
                input: $(this)[_0x304d52(0x198)](_0x304d52(0x121)),
              }))
            : (empReqRadio = empReqRadio[_0x304d52(0x17b)](
                (_0x1c1c1e) => _0x1c1c1e["input"] !== _0x2f966f,
              )),
            empReqRadio["length"] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0x2283ba(0x12c)](_0x2283ba(0x149))
        [_0x2283ba(0xae)](function (_0xe4b2e1) {
          const _0x2783ef = _0x2283ba;
          let _0x34e6ec = $(this)[_0x2783ef(0x174)]()[_0x2783ef(0xe8)],
            _0x3583e3 = $(this)[_0x2783ef(0x122)]("min-character")
              ? $(this)["data"]("min-character")
              : 0x0;
          $(this)["val"]() !== "" && _0x34e6ec >= _0x3583e3
            ? (empReqInput = empReqInput[_0x2783ef(0x17b)](
                (_0x5a454c) => _0x5a454c[_0x2783ef(0x1df)] !== _0xe4b2e1,
              ))
            : (!empReqInput[_0x2783ef(0x12c)](
                (_0xcd554e) => _0xcd554e[_0x2783ef(0x1df)] === _0xe4b2e1,
              ) && empReqInput[_0x2783ef(0x15b)]({ input: _0xe4b2e1 }),
              unfilledArr[_0x2783ef(0x15b)]({
                input: $(this)[_0x2783ef(0x198)]("name"),
              })),
            empReqInput["length"] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x2283ba(0x208))
        [_0x2283ba(0xae)](function (_0x4ca867) {
          const _0x361280 = _0x2283ba;
          let _0x462a6e = $(this)[_0x361280(0x174)]()[_0x361280(0xe8)],
            _0x137d4a = $(this)[_0x361280(0x122)](_0x361280(0x218))
              ? $(this)[_0x361280(0x122)](_0x361280(0x218))
              : 0x0;
          $(this)["val"]() !== "" && _0x462a6e >= _0x137d4a
            ? (empReqPassword = empReqPassword[_0x361280(0x17b)](
                (_0x2feae4) => _0x2feae4[_0x361280(0x1df)] !== _0x4ca867,
              ))
            : (!empReqPassword[_0x361280(0x12c)](
                (_0x569622) => _0x569622[_0x361280(0x1df)] === _0x4ca867,
              ) && empReqPassword[_0x361280(0x15b)]({ input: _0x4ca867 }),
              unfilledArr[_0x361280(0x15b)]({
                input: $(this)[_0x361280(0x198)](_0x361280(0x121)),
              })),
            empReqPassword[_0x361280(0xe8)] === 0x0
              ? (passwordFilled = !![])
              : (passwordFilled = ![]);
        }),
      $(steps[x])
        [_0x2283ba(0x12c)](_0x2283ba(0x168))
        [_0x2283ba(0xae)](function (_0x45a352) {
          const _0x16cb7e = _0x2283ba;
          let _0x38eb38 = $(this)[_0x16cb7e(0x174)]()["length"],
            _0x1931b0 = $(this)[_0x16cb7e(0x122)](_0x16cb7e(0x218))
              ? $(this)[_0x16cb7e(0x122)](_0x16cb7e(0x218))
              : 0x0;
          $(this)[_0x16cb7e(0x174)]() !== "" && _0x38eb38 >= _0x1931b0
            ? (empReqTime = empReqTime["filter"](
                (_0x67a3b1) => _0x67a3b1["input"] !== _0x45a352,
              ))
            : (!empReqTime[_0x16cb7e(0x12c)](
                (_0x238199) => _0x238199["input"] === _0x45a352,
              ) && empReqUrl["push"]({ input: _0x45a352 }),
              unfilledArr["push"]({
                input: $(this)[_0x16cb7e(0x198)]("name"),
              })),
            empReqTime["length"] === 0x0 &&
            validateURL($(this)[_0x16cb7e(0x174)]())
              ? ((timeFilled = !![]), console[_0x16cb7e(0xd5)](timeFilled))
              : (timeFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x2283ba(0x206))
        [_0x2283ba(0xae)](function (_0x40061b) {
          const _0x7651c0 = _0x2283ba;
          let _0x1277ed = $(this)["val"]()[_0x7651c0(0xe8)],
            _0x598fd1 = $(this)[_0x7651c0(0x122)]("min-character")
              ? $(this)["data"]("min-character")
              : 0x0;
          $(this)[_0x7651c0(0x174)]() !== "" && _0x1277ed >= _0x598fd1
            ? (empReqUrl = empReqUrl[_0x7651c0(0x17b)](
                (_0x2453c7) => _0x2453c7[_0x7651c0(0x1df)] !== _0x40061b,
              ))
            : (!empReqUrl[_0x7651c0(0x12c)](
                (_0x47c0fa) => _0x47c0fa[_0x7651c0(0x1df)] === _0x40061b,
              ) && empReqUrl["push"]({ input: _0x40061b }),
              unfilledArr[_0x7651c0(0x15b)]({
                input: $(this)[_0x7651c0(0x198)](_0x7651c0(0x121)),
              })),
            empReqUrl[_0x7651c0(0xe8)] === 0x0 &&
            validateURL($(this)[_0x7651c0(0x174)]())
              ? ((urlFilled = !![]), console["log"](urlFilled))
              : (urlFilled = ![]);
        }),
      $(steps[x])
        ["find"](":input[type=\x22date\x22][required]")
        [_0x2283ba(0xae)](function (_0x6a4fd7) {
          const _0x2b4d95 = _0x2283ba;
          $(this)["val"]() !== ""
            ? (empReqDate = empReqDate[_0x2b4d95(0x17b)](
                (_0x27ba89) => _0x27ba89[_0x2b4d95(0x1df)] !== _0x6a4fd7,
              ))
            : (!empReqDate[_0x2b4d95(0x12c)](
                (_0x589d9e) => _0x589d9e[_0x2b4d95(0x1df)] === _0x6a4fd7,
              ) && empReqDate[_0x2b4d95(0x15b)]({ input: _0x6a4fd7 }),
              unfilledArr[_0x2b4d95(0x15b)]({
                input: $(this)[_0x2b4d95(0x198)]("name"),
              })),
            empReqDate[_0x2b4d95(0xe8)] === 0x0
              ? (dateFilled = !![])
              : (dateFilled = ![]);
        }),
      $(steps[x])
        [_0x2283ba(0x12c)](":input[type=\x22tel\x22][required]")
        ["each"](function (_0x19ec48) {
          const _0x24f514 = _0x2283ba;
          if ($(this)[_0x24f514(0x174)]() !== "") {
            let _0x303875 = $(this)[_0x24f514(0x174)]()[_0x24f514(0xe8)],
              _0x29d13f = $(this)[_0x24f514(0x122)]("min-character")
                ? $(this)["data"](_0x24f514(0x218))
                : 0x0;
            if ($(this)[_0x24f514(0x122)]("phone-autoformat")) {
              var _0x2d2fbb = phoneAutoFormat(
                $(this)[_0x24f514(0x122)](_0x24f514(0x1cc)),
              );
              $(this)["val"](_0x2d2fbb($(this)[_0x24f514(0x174)]()));
            }
            phoneValidation($(this)["val"](), _0x303875, _0x29d13f)
              ? (empReqTel = empReqTel[_0x24f514(0x17b)](
                  (_0x4c94d0) => _0x4c94d0["input"] !== _0x19ec48,
                ))
              : empReqTel["push"]({ input: _0x19ec48 });
          } else
            !empReqTel[_0x24f514(0x12c)](
              (_0x18a6be) => _0x18a6be["input"] === _0x19ec48,
            ) && empReqTel[_0x24f514(0x15b)]({ input: _0x19ec48 }),
              unfilledArr["push"]({
                input: $(this)[_0x24f514(0x198)](_0x24f514(0x121)),
              });
          empReqTel["length"] === 0x0 ? (telFilled = !![]) : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x2283ba(0x12c)](_0x2283ba(0x19e))
        [_0x2283ba(0xae)](function (_0xbc1ce3) {
          const _0x1a20ef = _0x2283ba;
          $(this)[_0x1a20ef(0x174)]() !== ""
            ? (empReqFile = empReqFile[_0x1a20ef(0x17b)](
                (_0x5a9b37) => _0x5a9b37[_0x1a20ef(0x1df)] !== _0xbc1ce3,
              ))
            : (!empReqFile[_0x1a20ef(0x12c)](
                (_0x22543e) => _0x22543e[_0x1a20ef(0x1df)] === _0xbc1ce3,
              ) && empReqFile[_0x1a20ef(0x15b)]({ input: _0xbc1ce3 }),
              unfilledArr["push"]({
                input: $(this)[_0x1a20ef(0x198)](_0x1a20ef(0x121)),
              })),
            empReqFile[_0x1a20ef(0xe8)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x2283ba(0x12c)](_0x2283ba(0x1c0))
        [_0x2283ba(0xae)](function (_0x42d348) {
          const _0x5d93ef = _0x2283ba;
          let _0x267901 = $(this)[_0x5d93ef(0x174)]()[_0x5d93ef(0xe8)],
            _0x3b5ee2 = $(this)[_0x5d93ef(0x122)](_0x5d93ef(0x218))
              ? $(this)[_0x5d93ef(0x122)](_0x5d93ef(0x218))
              : 0x0;
          $(this)[_0x5d93ef(0x174)]() !== "" && _0x267901 >= _0x3b5ee2
            ? (empReqNum = empReqNum[_0x5d93ef(0x17b)](
                (_0x3d49a6) => _0x3d49a6[_0x5d93ef(0x1df)] !== _0x42d348,
              ))
            : (!empReqNum[_0x5d93ef(0x12c)](
                (_0x2bed75) => _0x2bed75[_0x5d93ef(0x1df)] === _0x42d348,
              ) && empReqNum[_0x5d93ef(0x15b)]({ input: _0x42d348 }),
              unfilledArr["push"]({
                input: $(this)[_0x5d93ef(0x198)](_0x5d93ef(0x121)),
              })),
            empReqNum[_0x5d93ef(0xe8)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x2283ba(0x12c)]("select[required]")
        [_0x2283ba(0xae)](function (_0x2558cc) {
          const _0x4aa866 = _0x2283ba;
          let _0xfd2d3c = $(this)["val"]();
          _0xfd2d3c === "" && (_0xfd2d3c = null),
            _0xfd2d3c != null
              ? (empReqSelect = empReqSelect["filter"](
                  (_0x322786) => _0x322786["input"] !== _0x2558cc,
                ))
              : (!empReqSelect[_0x4aa866(0x12c)](
                  (_0x584a3e) => _0x584a3e[_0x4aa866(0x1df)] === _0x2558cc,
                ) && empReqSelect["push"]({ input: _0x2558cc }),
                unfilledArr[_0x4aa866(0x15b)]({
                  input: $(this)["attr"]("name"),
                })),
            empReqSelect[_0x4aa866(0xe8)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x2283ba(0x12c)]("textarea[required]")
        ["each"](function (_0x5d8aef) {
          const _0x2ff3c7 = _0x2283ba;
          let _0x38328f = $(this)[_0x2ff3c7(0x174)]()["length"],
            _0x2b6800 = $(this)[_0x2ff3c7(0x122)](_0x2ff3c7(0x218))
              ? $(this)[_0x2ff3c7(0x122)](_0x2ff3c7(0x218))
              : 0x0;
          $(this)[_0x2ff3c7(0x174)]() !== "" && _0x38328f >= _0x2b6800
            ? (empReqTextarea = empReqTextarea[_0x2ff3c7(0x17b)](
                (_0x38e848) => _0x38e848["input"] !== _0x5d8aef,
              ))
            : (!empReqTextarea[_0x2ff3c7(0x12c)](
                (_0x2b878d) => _0x2b878d[_0x2ff3c7(0x1df)] === _0x5d8aef,
              ) && empReqTextarea[_0x2ff3c7(0x15b)]({ input: _0x5d8aef }),
              unfilledArr[_0x2ff3c7(0x15b)]({
                input: $(this)[_0x2ff3c7(0x198)](_0x2ff3c7(0x121)),
              })),
            empReqTextarea["length"] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x2283ba(0x12c)](_0x2283ba(0x19b))
        [_0x2283ba(0xae)](function () {
          const _0x58b1f2 = _0x2283ba;
          $(this)[_0x58b1f2(0x174)]() !== ""
            ? validateEmail(
                $(this)["val"](),
                $(this)[_0x58b1f2(0x122)](_0x58b1f2(0x180)),
                $(this)[_0x58b1f2(0x198)]("name"),
              )
            : ((emailFilled = ![]),
              unfilledArr["push"]({
                input: $(this)["attr"](_0x58b1f2(0x121)),
              }));
        });
  else {
    if ($(steps[x])[_0x2283ba(0x122)](_0x2283ba(0x152)))
      (answer = $(steps[x])
        [_0x2283ba(0x12c)](_0x2283ba(0xac))
        [_0x2283ba(0x122)](_0x2283ba(0xe6))),
        (selections = selections[_0x2283ba(0x17b)](
          (_0x1a49e2) => _0x1a49e2[_0x2283ba(0x16b)] !== x,
        )),
        selections[_0x2283ba(0x15b)]({ step: x, selected: answer });
    else
      $(steps[x])
        [_0x2283ba(0x12c)](".active-answer-card")
        [_0x2283ba(0x122)](_0x2283ba(0x152)) &&
        ((answer = $(steps[x])
          [_0x2283ba(0x12c)](".active-answer-card")
          [_0x2283ba(0x122)](_0x2283ba(0xe6))),
        (selections = selections["filter"](
          (_0x5db0b0) => _0x5db0b0["step"] !== x,
        )),
        selections["push"]({ step: x, selected: answer }));
    $(steps[x])
      ["find"](".active-answer-card")
      [_0x2283ba(0x12c)](_0x2283ba(0xc6))
      ["is"]("[type=\x22checkbox\x22]") &&
      (checkCount === "*" ||
      checkCount > $(steps[x])[_0x2283ba(0x12c)](_0x2283ba(0x105))["length"]
        ? (console[_0x2283ba(0xd5)](_0x2283ba(0x1c5)),
          $(steps[x])
            [_0x2283ba(0x12c)](_0x2283ba(0x105))
            [_0x2283ba(0xae)](function () {
              const _0x43031a = _0x2283ba;
              $(this)["is"](_0x43031a(0x1f3))
                ? $(steps[x])[_0x43031a(0x12c)](_0x43031a(0x127))[
                    _0x43031a(0xe8)
                  ] < 0x1 &&
                  ((skipTo = undefined),
                  $(this)
                    [_0x43031a(0xcb)](_0x43031a(0x11f))
                    ["data"](_0x43031a(0x1cf)) &&
                    (skipTo = $(this)
                      [_0x43031a(0xcb)]("[data-skip-to]")
                      ["data"]("skip-to")),
                  $(this)
                    [_0x43031a(0xcb)](_0x43031a(0xac))
                    ["attr"](_0x43031a(0x1f9)) &&
                    ((answer = $(this)
                      [_0x43031a(0xcb)](_0x43031a(0xac))
                      [_0x43031a(0x198)](_0x43031a(0x1f9))),
                    (selections = selections[_0x43031a(0x17b)](
                      (_0x29b57d) => _0x29b57d[_0x43031a(0x16b)] !== x,
                    )),
                    selections["push"]({ step: x, selected: answer }),
                    skipTo &&
                      (selections[_0x43031a(0x15b)]({
                        step: skipTo - 0x2,
                        selected: answer,
                      }),
                      (objIndex = selections[_0x43031a(0x104)](
                        (_0x522008) => _0x522008[_0x43031a(0x16b)] === x,
                      )),
                      (selections[objIndex][_0x43031a(0xe0)] =
                        parseInt(skipTo) - 0x1),
                      (selections[objIndex][_0x43031a(0x1af)] = x))),
                  (checkboxFilled = !![]),
                  $(steps[x])[_0x43031a(0x12c)](_0x43031a(0x12d))[
                    _0x43031a(0xe8)
                  ] >=
                    $(steps[x])[_0x43031a(0x12c)](_0x43031a(0x135))[
                      _0x43031a(0xe8)
                    ] &&
                    resetInputErrorMessage(
                      $(steps[x])
                        [_0x43031a(0x12c)](":input[type=\x22checkbox\x22]")
                        ["attr"]("name"),
                    ))
                : ((checkboxFilled = ![]),
                  unfilledArr["push"]({
                    input: $(this)[_0x43031a(0x198)](_0x43031a(0x121)),
                  }));
            }))
        : $(steps[x])
              [_0x2283ba(0x12c)](".active-answer-card")
              [_0x2283ba(0x12c)](":input[type=\x22checkbox\x22]:checked")[
              "length"
            ] >= checkCount
          ? ($(steps[x])
              ["find"](_0x2283ba(0x1d9))
              ["find"](_0x2283ba(0x105))
              [_0x2283ba(0xcb)](_0x2283ba(0xac))
              [_0x2283ba(0x198)]("data-go-to") &&
              ((skipTo = undefined),
              $(steps[x])
                ["find"](_0x2283ba(0x1d9))
                ["find"](":input[type=\x22checkbox\x22]")
                [_0x2283ba(0xcb)](_0x2283ba(0x11f))
                [_0x2283ba(0x198)]("data-skip-to") &&
                (skipTo = $(steps[x])
                  [_0x2283ba(0x12c)](_0x2283ba(0x1d9))
                  [_0x2283ba(0x12c)](_0x2283ba(0xdf))
                  [_0x2283ba(0xcb)](_0x2283ba(0x11f))
                  [_0x2283ba(0x198)](_0x2283ba(0x19d))),
              (answer = $(steps[x])
                [_0x2283ba(0x12c)](".active-answer-card")
                [_0x2283ba(0x12c)](":input[type=\x22checkbox\x22]")
                [_0x2283ba(0xcb)]("[data-go-to]")
                ["attr"]("data-go-to")),
              (selections = selections[_0x2283ba(0x17b)](
                (_0x1fa2c8) => _0x1fa2c8["step"] !== x,
              )),
              selections[_0x2283ba(0x15b)]({ step: x, selected: answer }),
              skipTo &&
                ((selections = selections["filter"](
                  (_0x2d9964) => _0x2d9964[_0x2283ba(0x16b)] !== skipTo - 0x2,
                )),
                selections[_0x2283ba(0x15b)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x5a1483) => _0x5a1483[_0x2283ba(0x16b)] === x,
                )),
                console[_0x2283ba(0xd5)](objIndex),
                (selections[objIndex][_0x2283ba(0xe0)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x),
                console[_0x2283ba(0xd5)](_0x2283ba(0x170)))),
            (checkboxFilled = !![]),
            $(steps[x])["find"](_0x2283ba(0x12d))[_0x2283ba(0xe8)] >=
              $(steps[x])[_0x2283ba(0x12c)](_0x2283ba(0x135))[
                _0x2283ba(0xe8)
              ] &&
              resetInputErrorMessage(
                $(steps[x])
                  [_0x2283ba(0x12c)](":input[type=\x22checkbox\x22]")
                  [_0x2283ba(0x198)](_0x2283ba(0x121)),
              ))
          : ((checkboxFilled = ![]),
            $(steps[x])
              [_0x2283ba(0x12c)](_0x2283ba(0x135))
              [_0x2283ba(0xae)](function () {
                const _0x7f3d61 = _0x2283ba;
                $(this)[_0x7f3d61(0x1f4)](_0x7f3d61(0x1f3)) &&
                  unfilledArr["push"]({
                    input: $(this)[_0x7f3d61(0x198)](_0x7f3d61(0x121)),
                  });
              }))),
      $(steps[x])
        [_0x2283ba(0x12c)](".active-answer-card")
        [_0x2283ba(0x12c)](_0x2283ba(0x216))
        ["each"](function (_0x1f52a5) {
          const _0x3e10d1 = _0x2283ba;
          var _0x8409e = $(this)[_0x3e10d1(0x198)](_0x3e10d1(0x121));
          $(_0x3e10d1(0xcd) + _0x8409e + _0x3e10d1(0x1e3))[_0x3e10d1(0xe8)] ==
          0x0
            ? (!empReqRadio[_0x3e10d1(0x12c)](
                (_0x334bb1) => _0x334bb1[_0x3e10d1(0x1df)] === _0x1f52a5,
              ) && empReqRadio[_0x3e10d1(0x15b)]({ input: _0x1f52a5 }),
              unfilledArr[_0x3e10d1(0x15b)]({
                input: $(this)[_0x3e10d1(0x198)]("name"),
              }))
            : (empReqRadio = empReqRadio[_0x3e10d1(0x17b)](
                (_0x4e4a82) => _0x4e4a82[_0x3e10d1(0x1df)] !== _0x1f52a5,
              )),
            empReqRadio["length"] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0x2283ba(0x12c)](_0x2283ba(0x1d9))
        [_0x2283ba(0x12c)](_0x2283ba(0x149))
        [_0x2283ba(0xae)](function (_0x2aee65) {
          const _0x342c4a = _0x2283ba;
          let _0x306c3 = $(this)["val"]()[_0x342c4a(0xe8)],
            _0x4bfbd6 = $(this)[_0x342c4a(0x122)]("min-character")
              ? $(this)["data"](_0x342c4a(0x218))
              : 0x0;
          $(this)[_0x342c4a(0x174)]() !== "" && _0x306c3 >= _0x4bfbd6
            ? (empReqInput = empReqInput[_0x342c4a(0x17b)](
                (_0x1ab741) => _0x1ab741[_0x342c4a(0x1df)] !== _0x2aee65,
              ))
            : (!empReqInput[_0x342c4a(0x12c)](
                (_0x2c3266) => _0x2c3266[_0x342c4a(0x1df)] === _0x2aee65,
              ) && empReqInput[_0x342c4a(0x15b)]({ input: _0x2aee65 }),
              unfilledArr[_0x342c4a(0x15b)]({
                input: $(this)["attr"](_0x342c4a(0x121)),
              })),
            empReqInput[_0x342c4a(0xe8)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x2283ba(0x1d9))
        ["find"](_0x2283ba(0xfe))
        [_0x2283ba(0xae)](function (_0x3c54c5) {
          const _0x33f799 = _0x2283ba;
          (skipTo = undefined),
            $(this)
              [_0x33f799(0xcb)](_0x33f799(0x11f))
              [_0x33f799(0x122)](_0x33f799(0x1cf)) !== "" &&
              (skipTo = $(this)
                [_0x33f799(0xcb)](_0x33f799(0x11f))
                [_0x33f799(0x122)](_0x33f799(0x1cf))),
            $(this)
              [_0x33f799(0xcb)](_0x33f799(0xac))
              [_0x33f799(0x198)](_0x33f799(0x1f9)) &&
              ((answer = $(this)
                [_0x33f799(0xcb)](_0x33f799(0xac))
                [_0x33f799(0x198)](_0x33f799(0x1f9))),
              (selections = selections[_0x33f799(0x17b)](
                (_0x117423) => _0x117423["step"] !== x,
              )),
              selections[_0x33f799(0x15b)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x33f799(0x15b)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x33f799(0x104)](
                  (_0x3ce02e) => _0x3ce02e[_0x33f799(0x16b)] === x,
                )),
                (selections[objIndex][_0x33f799(0xe0)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x33f799(0x1af)] = x)));
        }),
      $(steps[x])
        [_0x2283ba(0x12c)](_0x2283ba(0x1d9))
        [_0x2283ba(0x12c)](_0x2283ba(0x208))
        ["each"](function (_0x1ca39a) {
          const _0x52fe2f = _0x2283ba;
          let _0x37f6f9 = $(this)["val"]()[_0x52fe2f(0xe8)],
            _0x36be6a = $(this)[_0x52fe2f(0x122)](_0x52fe2f(0x218))
              ? $(this)[_0x52fe2f(0x122)](_0x52fe2f(0x218))
              : 0x0;
          $(this)[_0x52fe2f(0x174)]() !== "" && _0x37f6f9 >= _0x36be6a
            ? (empReqPassword = empReqPassword[_0x52fe2f(0x17b)](
                (_0x171e07) => _0x171e07["input"] !== _0x1ca39a,
              ))
            : (!empReqPassword["find"](
                (_0x126500) => _0x126500[_0x52fe2f(0x1df)] === _0x1ca39a,
              ) && empReqPassword[_0x52fe2f(0x15b)]({ input: _0x1ca39a }),
              unfilledArr[_0x52fe2f(0x15b)]({
                input: $(this)["attr"](_0x52fe2f(0x121)),
              })),
            empReqPassword[_0x52fe2f(0xe8)] === 0x0
              ? (passwordFilled = !![])
              : (passwordFilled = ![]);
        }),
      $(steps[x])
        [_0x2283ba(0x12c)](_0x2283ba(0x1d9))
        ["find"](_0x2283ba(0x10f))
        ["each"](function (_0x2a4025) {
          const _0x1e9139 = _0x2283ba;
          (skipTo = undefined),
            $(this)
              [_0x1e9139(0xcb)](_0x1e9139(0x11f))
              [_0x1e9139(0x122)]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0x1e9139(0xcb)](_0x1e9139(0x11f))
                [_0x1e9139(0x122)](_0x1e9139(0x1cf))),
            $(this)
              [_0x1e9139(0xcb)](_0x1e9139(0xac))
              [_0x1e9139(0x198)]("data-go-to") &&
              ((answer = $(this)
                [_0x1e9139(0xcb)](_0x1e9139(0xac))
                ["attr"](_0x1e9139(0x1f9))),
              (selections = selections[_0x1e9139(0x17b)](
                (_0x4ed8ea) => _0x4ed8ea["step"] !== x,
              )),
              selections[_0x1e9139(0x15b)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x1e9139(0x15b)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x32b8b6) => _0x32b8b6[_0x1e9139(0x16b)] === x,
                )),
                (selections[objIndex][_0x1e9139(0xe0)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x1e9139(0x1af)] = x)));
        }),
      $(steps[x])
        [_0x2283ba(0x12c)](_0x2283ba(0x1d9))
        [_0x2283ba(0x12c)](_0x2283ba(0x168))
        [_0x2283ba(0xae)](function (_0x33a878) {
          const _0x568f17 = _0x2283ba;
          let _0x25382b = $(this)[_0x568f17(0x174)]()["length"],
            _0x3fdd48 = $(this)[_0x568f17(0x122)](_0x568f17(0x218))
              ? $(this)[_0x568f17(0x122)](_0x568f17(0x218))
              : 0x0;
          $(this)[_0x568f17(0x174)]() !== "" && _0x25382b >= _0x3fdd48
            ? (empReqUrl = empReqUrl["filter"](
                (_0x587124) => _0x587124[_0x568f17(0x1df)] !== _0x33a878,
              ))
            : (!empReqUrl[_0x568f17(0x12c)](
                (_0x553ecb) => _0x553ecb[_0x568f17(0x1df)] === _0x33a878,
              ) && empReqUrl["push"]({ input: _0x33a878 }),
              unfilledArr["push"]({
                input: $(this)[_0x568f17(0x198)](_0x568f17(0x121)),
              })),
            empReqUrl[_0x568f17(0xe8)] === 0x0 &&
            validateURL($(this)[_0x568f17(0x174)]())
              ? (urlFilled = !![])
              : (urlFilled = ![]);
        }),
      $(steps[x])
        [_0x2283ba(0x12c)](_0x2283ba(0x1d9))
        [_0x2283ba(0x12c)](_0x2283ba(0x1b5))
        [_0x2283ba(0xae)](function (_0x3ab99f) {
          const _0x54b936 = _0x2283ba;
          (skipTo = undefined),
            $(this)
              [_0x54b936(0xcb)](_0x54b936(0x11f))
              [_0x54b936(0x122)](_0x54b936(0x1cf)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0x54b936(0x11f))
                [_0x54b936(0x122)](_0x54b936(0x1cf))),
            $(this)[_0x54b936(0xcb)](_0x54b936(0xac))["attr"]("data-go-to") &&
              ((answer = $(this)
                ["parents"](_0x54b936(0xac))
                [_0x54b936(0x198)](_0x54b936(0x1f9))),
              (selections = selections[_0x54b936(0x17b)](
                (_0x12d4bc) => _0x12d4bc["step"] !== x,
              )),
              selections[_0x54b936(0x15b)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x54b936(0x15b)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x54b936(0x104)](
                  (_0x1ae4d5) => _0x1ae4d5["step"] === x,
                )),
                (selections[objIndex][_0x54b936(0xe0)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x54b936(0x1af)] = x)));
        }),
      $(steps[x])
        [_0x2283ba(0x12c)](_0x2283ba(0x1d9))
        [_0x2283ba(0x12c)](_0x2283ba(0x1f6))
        ["each"](function (_0x440ef1) {
          const _0x57e033 = _0x2283ba;
          $(this)["val"]() !== ""
            ? (empReqDate = empReqDate[_0x57e033(0x17b)](
                (_0xb2f852) => _0xb2f852[_0x57e033(0x1df)] !== _0x440ef1,
              ))
            : (!empReqDate[_0x57e033(0x12c)](
                (_0x807ee7) => _0x807ee7[_0x57e033(0x1df)] === _0x440ef1,
              ) && empReqDate[_0x57e033(0x15b)]({ input: _0x440ef1 }),
              unfilledArr[_0x57e033(0x15b)]({
                input: $(this)["attr"]("name"),
              })),
            empReqDate["length"] === 0x0
              ? (dateFilled = !![])
              : (dateFilled = ![]);
        }),
      $(steps[x])
        [_0x2283ba(0x12c)](_0x2283ba(0x1d9))
        [_0x2283ba(0x12c)](_0x2283ba(0xc8))
        [_0x2283ba(0xae)](function (_0x3b702a) {
          const _0xa9c49f = _0x2283ba;
          (skipTo = undefined),
            $(this)
              ["parents"](_0xa9c49f(0x11f))
              [_0xa9c49f(0x122)]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0xa9c49f(0xcb)](_0xa9c49f(0x11f))
                ["data"](_0xa9c49f(0x1cf))),
            $(this)
              [_0xa9c49f(0xcb)](_0xa9c49f(0xac))
              [_0xa9c49f(0x198)](_0xa9c49f(0x1f9)) &&
              ((answer = $(this)
                [_0xa9c49f(0xcb)](_0xa9c49f(0xac))
                [_0xa9c49f(0x198)](_0xa9c49f(0x1f9))),
              (selections = selections[_0xa9c49f(0x17b)](
                (_0x50510a) => _0x50510a[_0xa9c49f(0x16b)] !== x,
              )),
              selections[_0xa9c49f(0x15b)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0xa9c49f(0x15b)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x2a0445) => _0x2a0445[_0xa9c49f(0x16b)] === x,
                )),
                (selections[objIndex][_0xa9c49f(0xe0)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x2283ba(0x12c)](_0x2283ba(0x1d9))
        [_0x2283ba(0x12c)](_0x2283ba(0x206))
        [_0x2283ba(0xae)](function (_0x54da02) {
          const _0x3f56b9 = _0x2283ba;
          $(this)["val"]() !== ""
            ? (empReqTime = empReqTime["filter"](
                (_0x1ff669) => _0x1ff669[_0x3f56b9(0x1df)] !== _0x54da02,
              ))
            : (!empReqTime[_0x3f56b9(0x12c)](
                (_0x467c71) => _0x467c71[_0x3f56b9(0x1df)] === _0x54da02,
              ) && empReqTime["push"]({ input: _0x54da02 }),
              unfilledArr["push"]({
                input: $(this)[_0x3f56b9(0x198)]("name"),
              })),
            empReqTime[_0x3f56b9(0xe8)] === 0x0
              ? (timeFilled = !![])
              : (timeFilled = ![]);
        }),
      $(steps[x])
        [_0x2283ba(0x12c)](_0x2283ba(0x1d9))
        [_0x2283ba(0x12c)](_0x2283ba(0x11b))
        [_0x2283ba(0xae)](function (_0x5dcfef) {
          const _0x4a2fa2 = _0x2283ba;
          (skipTo = undefined),
            $(this)
              [_0x4a2fa2(0xcb)](_0x4a2fa2(0x11f))
              ["data"](_0x4a2fa2(0x1cf)) !== "" &&
              (skipTo = $(this)
                ["parents"]("[data-skip-to]")
                [_0x4a2fa2(0x122)]("skip-to")),
            $(this)
              [_0x4a2fa2(0xcb)]("[data-go-to]")
              [_0x4a2fa2(0x198)](_0x4a2fa2(0x1f9)) &&
              ((answer = $(this)
                [_0x4a2fa2(0xcb)](_0x4a2fa2(0xac))
                [_0x4a2fa2(0x198)](_0x4a2fa2(0x1f9))),
              (selections = selections[_0x4a2fa2(0x17b)](
                (_0x58d084) => _0x58d084["step"] !== x,
              )),
              selections[_0x4a2fa2(0x15b)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x4a2fa2(0x15b)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x4a2fa2(0x104)](
                  (_0x2360db) => _0x2360db["step"] === x,
                )),
                (selections[objIndex][_0x4a2fa2(0xe0)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x2283ba(0x12c)](_0x2283ba(0x1d9))
        [_0x2283ba(0x12c)](_0x2283ba(0x1c0))
        [_0x2283ba(0xae)](function (_0x19f6dd) {
          const _0x3cb4d4 = _0x2283ba;
          let _0x50dc7d = $(this)[_0x3cb4d4(0x174)]()[_0x3cb4d4(0xe8)],
            _0x595edb = $(this)["data"]("min-character")
              ? $(this)["data"](_0x3cb4d4(0x218))
              : 0x0;
          $(this)["val"]() !== "" && _0x50dc7d >= _0x595edb
            ? (empReqNum = empReqNum["filter"](
                (_0x3bd520) => _0x3bd520["input"] !== _0x19f6dd,
              ))
            : (!empReqNum[_0x3cb4d4(0x12c)](
                (_0x175c08) => _0x175c08["input"] === _0x19f6dd,
              ) && empReqNum[_0x3cb4d4(0x15b)]({ input: _0x19f6dd }),
              unfilledArr[_0x3cb4d4(0x15b)]({
                input: $(this)["attr"]("name"),
              })),
            empReqNum[_0x3cb4d4(0xe8)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x2283ba(0x12c)](_0x2283ba(0x1d9))
        [_0x2283ba(0x12c)](_0x2283ba(0xd0))
        [_0x2283ba(0xae)](function (_0x3a3abd) {
          const _0x3bcdc2 = _0x2283ba;
          (skipTo = undefined),
            $(this)
              [_0x3bcdc2(0xcb)]("[data-skip-to]")
              [_0x3bcdc2(0x122)](_0x3bcdc2(0x1cf)) !== "" &&
              (skipTo = $(this)
                [_0x3bcdc2(0xcb)](_0x3bcdc2(0x11f))
                [_0x3bcdc2(0x122)](_0x3bcdc2(0x1cf))),
            $(this)
              [_0x3bcdc2(0xcb)]("[data-go-to]")
              [_0x3bcdc2(0x198)](_0x3bcdc2(0x1f9)) &&
              ((answer = $(this)
                [_0x3bcdc2(0xcb)]("[data-go-to]")
                [_0x3bcdc2(0x198)](_0x3bcdc2(0x1f9))),
              (selections = selections[_0x3bcdc2(0x17b)](
                (_0xba170) => _0xba170[_0x3bcdc2(0x16b)] !== x,
              )),
              selections[_0x3bcdc2(0x15b)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x3bcdc2(0x15b)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x3bcdc2(0x104)](
                  (_0x315b6b) => _0x315b6b[_0x3bcdc2(0x16b)] === x,
                )),
                (selections[objIndex][_0x3bcdc2(0xe0)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x3bcdc2(0x1af)] = x)));
        }),
      $(steps[x])
        [_0x2283ba(0x12c)](".active-answer-card")
        [_0x2283ba(0x12c)](_0x2283ba(0x1b7))
        [_0x2283ba(0xae)](function (_0x11e4be) {
          const _0x4f428c = _0x2283ba;
          if ($(this)[_0x4f428c(0x174)]() !== "") {
            let _0x34abfb = $(this)["val"]()[_0x4f428c(0xe8)],
              _0x4c5205 = $(this)[_0x4f428c(0x122)]("min-character")
                ? $(this)["data"](_0x4f428c(0x218))
                : 0x0;
            if ($(this)["data"](_0x4f428c(0x1cc))) {
              var _0x4f7759 = phoneAutoFormat(
                $(this)[_0x4f428c(0x122)]("phone-autoformat"),
              );
              $(this)["val"](_0x4f7759($(this)[_0x4f428c(0x174)]()));
            }
            phoneValidation($(this)[_0x4f428c(0x174)](), _0x34abfb, _0x4c5205)
              ? (empReqTel = empReqTel[_0x4f428c(0x17b)](
                  (_0x4e50d1) => _0x4e50d1[_0x4f428c(0x1df)] !== _0x11e4be,
                ))
              : empReqTel["push"]({ input: _0x11e4be });
          } else
            !empReqTel[_0x4f428c(0x12c)](
              (_0x12f714) => _0x12f714[_0x4f428c(0x1df)] === _0x11e4be,
            ) && empReqTel[_0x4f428c(0x15b)]({ input: _0x11e4be }),
              unfilledArr[_0x4f428c(0x15b)]({
                input: $(this)[_0x4f428c(0x198)](_0x4f428c(0x121)),
              });
          empReqTel[_0x4f428c(0xe8)] === 0x0
            ? (telFilled = !![])
            : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x2283ba(0x12c)](".active-answer-card")
        [_0x2283ba(0x12c)](_0x2283ba(0xc9))
        ["each"](function (_0x49d8f3) {
          const _0x10caec = _0x2283ba;
          (skipTo = undefined),
            $(this)
              [_0x10caec(0xcb)]("[data-skip-to]")
              [_0x10caec(0x122)](_0x10caec(0x1cf)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0x10caec(0x11f))
                [_0x10caec(0x122)]("skip-to")),
            $(this)
              [_0x10caec(0xcb)](_0x10caec(0xac))
              [_0x10caec(0x198)](_0x10caec(0x1f9)) &&
              ((answer = $(this)
                [_0x10caec(0xcb)]("[data-go-to]")
                [_0x10caec(0x198)]("data-go-to")),
              (selections = selections["filter"](
                (_0xc4ffa0) => _0xc4ffa0[_0x10caec(0x16b)] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0x10caec(0x104)](
                  (_0x4dfb86) => _0x4dfb86["step"] === x,
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x10caec(0x1af)] = x)));
        }),
      $(steps[x])
        [_0x2283ba(0x12c)](".active-answer-card")
        [_0x2283ba(0x12c)](_0x2283ba(0x19e))
        ["each"](function (_0x5c8195) {
          const _0x5800f5 = _0x2283ba;
          $(this)[_0x5800f5(0x174)]() !== ""
            ? (empReqFile = empReqFile[_0x5800f5(0x17b)](
                (_0x3d60f1) => _0x3d60f1["input"] !== _0x5c8195,
              ))
            : (!empReqFile[_0x5800f5(0x12c)](
                (_0x17dae5) => _0x17dae5[_0x5800f5(0x1df)] === _0x5c8195,
              ) && empReqFile[_0x5800f5(0x15b)]({ input: _0x5c8195 }),
              unfilledArr[_0x5800f5(0x15b)]({
                input: $(this)[_0x5800f5(0x198)](_0x5800f5(0x121)),
              })),
            empReqFile[_0x5800f5(0xe8)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x2283ba(0x1d9))
        [_0x2283ba(0x12c)](_0x2283ba(0x1c7))
        [_0x2283ba(0xae)](function (_0x566a4b) {
          const _0x25d06a = _0x2283ba;
          (skipTo = undefined),
            $(this)["parents"]("[data-skip-to]")["data"](_0x25d06a(0x1cf)) !==
              "" &&
              (skipTo = $(this)
                [_0x25d06a(0xcb)](_0x25d06a(0x11f))
                ["data"](_0x25d06a(0x1cf))),
            $(this)["parents"](_0x25d06a(0xac))["attr"](_0x25d06a(0x1f9)) &&
              ((answer = $(this)
                [_0x25d06a(0xcb)](_0x25d06a(0xac))
                [_0x25d06a(0x198)](_0x25d06a(0x1f9))),
              (selections = selections["filter"](
                (_0x1457e3) => _0x1457e3["step"] !== x,
              )),
              selections[_0x25d06a(0x15b)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0x25d06a(0x104)](
                  (_0x4021ef) => _0x4021ef[_0x25d06a(0x16b)] === x,
                )),
                (selections[objIndex][_0x25d06a(0xe0)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x25d06a(0x1af)] = x)));
        }),
      $(steps[x])
        [_0x2283ba(0x12c)](".active-answer-card")
        [_0x2283ba(0x12c)](_0x2283ba(0x1ec))
        ["each"](function (_0x4b9899) {
          const _0x900bb3 = _0x2283ba;
          console[_0x900bb3(0xd5)]($(this)["val"]()),
            $(this)["val"]() !== null && $(this)["val"]() !== ""
              ? (empReqSelect = empReqSelect[_0x900bb3(0x17b)](
                  (_0x374b00) => _0x374b00[_0x900bb3(0x1df)] !== _0x4b9899,
                ))
              : (!empReqSelect[_0x900bb3(0x12c)](
                  (_0x34e42d) => _0x34e42d["input"] === _0x4b9899,
                ) && empReqSelect["push"]({ input: _0x4b9899 }),
                unfilledArr["push"]({
                  input: $(this)[_0x900bb3(0x198)]("name"),
                })),
            empReqSelect[_0x900bb3(0xe8)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x2283ba(0x1d9))
        [_0x2283ba(0x12c)](_0x2283ba(0x1c4))
        [_0x2283ba(0xae)](function (_0x3b15b2) {
          const _0x1660b2 = _0x2283ba;
          (skipTo = undefined),
            $(this)
              [_0x1660b2(0xcb)](_0x1660b2(0x11f))
              [_0x1660b2(0x122)]("skip-to") !== "" &&
              (skipTo = $(this)
                ["parents"](_0x1660b2(0x11f))
                [_0x1660b2(0x122)]("skip-to")),
            $(this)
              [_0x1660b2(0xcb)](_0x1660b2(0xac))
              [_0x1660b2(0x198)]("data-go-to") &&
              ((answer = $(this)
                [_0x1660b2(0xcb)](_0x1660b2(0xac))
                [_0x1660b2(0x198)](_0x1660b2(0x1f9))),
              (selections = selections[_0x1660b2(0x17b)](
                (_0x82facb) => _0x82facb[_0x1660b2(0x16b)] !== x,
              )),
              selections[_0x1660b2(0x15b)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0x1660b2(0x104)](
                  (_0x535781) => _0x535781[_0x1660b2(0x16b)] === x,
                )),
                (selections[objIndex][_0x1660b2(0xe0)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x1660b2(0x1af)] = x)));
        }),
      $(steps[x])
        [_0x2283ba(0x12c)](".active-answer-card")
        [_0x2283ba(0x12c)](_0x2283ba(0xfb))
        [_0x2283ba(0xae)](function (_0xaef61f) {
          const _0x8ce3c3 = _0x2283ba;
          let _0x7ec552 = $(this)["val"]()[_0x8ce3c3(0xe8)],
            _0x167ec8 = $(this)[_0x8ce3c3(0x122)]("min-character")
              ? $(this)[_0x8ce3c3(0x122)](_0x8ce3c3(0x218))
              : 0x0;
          $(this)[_0x8ce3c3(0x174)]() !== "" && _0x7ec552 >= _0x167ec8
            ? (empReqTextarea = empReqTextarea[_0x8ce3c3(0x17b)](
                (_0x36b1c7) => _0x36b1c7[_0x8ce3c3(0x1df)] !== _0xaef61f,
              ))
            : (!empReqTextarea["find"](
                (_0x522a8f) => _0x522a8f["input"] === _0xaef61f,
              ) && empReqTextarea[_0x8ce3c3(0x15b)]({ input: _0xaef61f }),
              unfilledArr[_0x8ce3c3(0x15b)]({
                input: $(this)[_0x8ce3c3(0x198)](_0x8ce3c3(0x121)),
              })),
            empReqTextarea[_0x8ce3c3(0xe8)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x2283ba(0x12c)](_0x2283ba(0x1d9))
        [_0x2283ba(0x12c)](_0x2283ba(0x1c1))
        [_0x2283ba(0xae)](function (_0x3ee030) {
          const _0x14ed5e = _0x2283ba;
          (skipTo = undefined),
            $(this)
              [_0x14ed5e(0xcb)](_0x14ed5e(0x11f))
              [_0x14ed5e(0x122)](_0x14ed5e(0x1cf)) !== "" &&
              (skipTo = $(this)
                [_0x14ed5e(0xcb)](_0x14ed5e(0x11f))
                [_0x14ed5e(0x122)](_0x14ed5e(0x1cf))),
            $(this)
              [_0x14ed5e(0xcb)]("[data-go-to]")
              [_0x14ed5e(0x198)](_0x14ed5e(0x1f9)) &&
              ((answer = $(this)
                [_0x14ed5e(0xcb)]("[data-go-to]")
                [_0x14ed5e(0x198)](_0x14ed5e(0x1f9))),
              (selections = selections[_0x14ed5e(0x17b)](
                (_0x2d4e92) => _0x2d4e92[_0x14ed5e(0x16b)] !== x,
              )),
              selections[_0x14ed5e(0x15b)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x14ed5e(0x15b)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x14ed5e(0x104)](
                  (_0x526929) => _0x526929[_0x14ed5e(0x16b)] === x,
                )),
                (selections[objIndex][_0x14ed5e(0xe0)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x14ed5e(0x1af)] = x)));
        }),
      $(steps[x])
        ["find"](".active-answer-card")
        [_0x2283ba(0x12c)](_0x2283ba(0x19b))
        ["each"](function (_0x5a0627) {
          const _0x40564d = _0x2283ba;
          $(this)[_0x40564d(0x174)]() !== ""
            ? validateEmail(
                $(this)[_0x40564d(0x174)](),
                $(this)[_0x40564d(0x122)](_0x40564d(0x180)),
                $(this)[_0x40564d(0x198)](_0x40564d(0x121)),
              )
            : ((emailFilled = ![]),
              unfilledArr[_0x40564d(0x15b)]({
                input: $(this)[_0x40564d(0x198)](_0x40564d(0x121)),
              }));
        }),
      $(steps[x])
        [_0x2283ba(0x12c)](_0x2283ba(0x1d9))
        ["find"](_0x2283ba(0x172))
        [_0x2283ba(0xae)](function (_0x141e24) {
          const _0x2d2650 = _0x2283ba;
          (skipTo = undefined),
            $(this)
              ["parents"](_0x2d2650(0x11f))
              [_0x2d2650(0x122)]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0x2d2650(0xcb)]("[data-skip-to]")
                [_0x2d2650(0x122)]("skip-to")),
            $(this)
              [_0x2d2650(0xcb)]("[data-go-to]")
              ["attr"](_0x2d2650(0x1f9)) &&
              ((answer = $(this)
                [_0x2d2650(0xcb)](_0x2d2650(0xac))
                [_0x2d2650(0x198)](_0x2d2650(0x1f9))),
              (selections = selections[_0x2d2650(0x17b)](
                (_0xb05ff7) => _0xb05ff7["step"] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x2d2650(0x15b)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x2d2650(0x104)](
                  (_0x2a6b5c) => _0x2a6b5c[_0x2d2650(0x16b)] === x,
                )),
                (selections[objIndex][_0x2d2650(0xe0)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x2d2650(0x1af)] = x)));
        }),
      trackLastStep && saveLastAnswer(selections);
  }
  $(steps[x])[_0x2283ba(0x12c)](_0x2283ba(0x10e))["is"](_0x2283ba(0x1f3)) &&
    ((selArr = []),
    $(steps)
      [_0x2283ba(0x12c)](_0x2283ba(0x1d4))
      [_0x2283ba(0xae)](function (_0x35b104, _0x157aab) {
        const _0x5e9525 = _0x2283ba;
        selArr[_0x5e9525(0x15b)]({
          selected: $(this)[_0x5e9525(0x122)](_0x5e9525(0x145)),
        });
      }),
    (selString = []),
    selArr["forEach"]((_0xa473b5) =>
      selString[_0x2283ba(0x15b)](_0xa473b5[_0x2283ba(0x145)]),
    ),
    $(steps[x])
      ["find"](_0x2283ba(0x1d9))
      ["find"](_0x2283ba(0xb3))
      [_0x2283ba(0xae)](function () {
        const _0x1ce066 = _0x2283ba;
        skipTo = undefined;
        if (
          $(this)
            [_0x1ce066(0xcb)](_0x1ce066(0x11f))
            [_0x1ce066(0x122)](_0x1ce066(0x1cf))
        )
          skipTo = $(this)
            ["parents"](_0x1ce066(0x11f))
            [_0x1ce066(0x122)](_0x1ce066(0x1cf));
        else
          $(this)[_0x1ce066(0x122)](_0x1ce066(0x1cf)) &&
            (skipTo = $(this)[_0x1ce066(0x122)]("skip-to"));
        selections = selections[_0x1ce066(0x17b)](
          (_0x5401a7) => _0x5401a7["step"] !== x,
        );
        if ($(this)[_0x1ce066(0x122)](_0x1ce066(0xe6)))
          (answer = $(this)["attr"](_0x1ce066(0x1f9))),
            console[_0x1ce066(0xd5)](answer, selections),
            selections[_0x1ce066(0x15b)]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0x1ce066(0x15b)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections["findIndex"](
                (_0x5d71c2) => _0x5d71c2[_0x1ce066(0x16b)] === x,
              )),
              (selections[objIndex][_0x1ce066(0xe0)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x1ce066(0x1af)] = x));
        else
          $(this)
            [_0x1ce066(0xcb)](_0x1ce066(0xac))
            [_0x1ce066(0x122)](_0x1ce066(0xe6)) &&
            ((answer = $(this)
              [_0x1ce066(0xcb)](_0x1ce066(0xac))
              [_0x1ce066(0x122)]("go-to")),
            selections[_0x1ce066(0x15b)]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0x1ce066(0x15b)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0x1ce066(0x104)](
                (_0x10624a) => _0x10624a[_0x1ce066(0x16b)] === x,
              )),
              (selections[objIndex][_0x1ce066(0xe0)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x1ce066(0x1af)] = x)));
      }),
    logicExtra
      ? ($(steps[x])
          [_0x2283ba(0x12c)](".active-answer-card")
          [_0x2283ba(0x12c)](_0x2283ba(0x167))
          [_0x2283ba(0x122)](_0x2283ba(0x177)) === !![] ||
          $(steps[x])
            [_0x2283ba(0x12c)]("[data-answer][data-radio-skip]:visible")
            [_0x2283ba(0x122)](_0x2283ba(0x177)) === !![]) &&
        skip &&
        selections[_0x2283ba(0x17b)](
          (_0x452354) => _0x452354[_0x2283ba(0x16b)] === x,
        )[_0x2283ba(0xe8)] > 0x0 &&
        textareaLength === 0x0 &&
        textInputLength === 0x0 &&
        emailInputLength === 0x0 &&
        checkboxInputLength === 0x0 &&
        setTimeout(function () {
          (next = !![]), nextStep(), selectionQuiz();
        }, $(steps[x])[_0x2283ba(0x12c)]("[data-radio-delay]")[_0x2283ba(0x122)]("radio-delay"))
      : $(steps[x])
          [_0x2283ba(0x12c)](_0x2283ba(0x167))
          [_0x2283ba(0x122)](_0x2283ba(0x177)) === !![] &&
        skip &&
        textareaLength === 0x0 &&
        textInputLength === 0x0 &&
        emailInputLength === 0x0 &&
        checkboxInputLength === 0x0 &&
        setTimeout(
          function () {
            (next = !![]), nextStep(), selectionQuiz();
          },
          $(steps[x])
            [_0x2283ba(0x12c)](_0x2283ba(0x17e))
            [_0x2283ba(0x122)](_0x2283ba(0x173)),
        )),
    inputFilled &&
    fileFilled &&
    numFilled &&
    checkboxFilled &&
    telFilled &&
    radioFilled &&
    emailFilled &&
    domainAllowed &&
    selectFilled &&
    textareaFilled &&
    passwordFilled &&
    urlFilled
      ? enableBtn()
      : disableBtn(),
    andLogic(),
    cloneRemove(),
    cloneRemoveInput();
}
function displayErrorMessage() {
  const _0x21348e = _0x548ec2;
  $("[data-text=\x22error-message\x22]")["hide"](),
    unfilledArr[_0x21348e(0xe8)] > 0x0 &&
      unfilledArr[_0x21348e(0xc1)](function (_0x3473d7) {
        const _0x22bf12 = _0x21348e;
        $(_0x22bf12(0x1c9) + _0x3473d7[_0x22bf12(0x1df)] + "\x22]")
          ["siblings"](_0x22bf12(0x1f7))
          [_0x22bf12(0x1ea)](),
          $(_0x22bf12(0x1c9) + _0x3473d7[_0x22bf12(0x1df)] + "\x22]")
            [_0x22bf12(0xcb)]()
            [_0x22bf12(0xf3)](_0x22bf12(0x1f7))
            ["fadeIn"](),
          $(_0x22bf12(0x166) + _0x3473d7[_0x22bf12(0x1df)] + "\x22]")
            [_0x22bf12(0x151)](_0x22bf12(0x1f7))
            [_0x22bf12(0x1ea)](),
          $("select[name=\x22" + _0x3473d7["input"] + "\x22]")
            ["siblings"]("[data-text=\x22error-message\x22]")
            ["fadeIn"]();
      });
}
function resetInputErrorMessage(_0x5738f2) {
  const _0x590230 = _0x548ec2;
  $("input[name=\x22" + _0x5738f2 + "\x22]")
    [_0x590230(0x151)](_0x590230(0x1f7))
    [_0x590230(0x1ba)](),
    $("input[name=\x22" + _0x5738f2 + "\x22]")
      [_0x590230(0xcb)]()
      [_0x590230(0xf3)](_0x590230(0x1f7))
      [_0x590230(0x1ba)](),
    $(_0x590230(0x166) + _0x5738f2 + "\x22]")
      [_0x590230(0x151)](_0x590230(0x1f7))
      [_0x590230(0x1ba)](),
    $(_0x590230(0x17c) + _0x5738f2 + "\x22]")
      [_0x590230(0x151)](_0x590230(0x1f7))
      ["hide"]();
}
function increaseCurstep() {
  const _0x676786 = _0x548ec2;
  countCard
    ? ((curStep = curStep + 0x1),
      $(_0x676786(0x1d7))[_0x676786(0x150)](steps[_0x676786(0xe8)]))
    : $(steps[x])[_0x676786(0x122)](_0x676786(0x152))
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    $(_0x676786(0x20e))[_0x676786(0x150)](curStep);
}
function decreaseCurstep() {
  const _0x294391 = _0x548ec2;
  countCard
    ? ((curStep = curStep - 0x1),
      $("[data-text=\x22total-steps\x22]")[_0x294391(0x150)](steps["length"]))
    : $(steps[x])[_0x294391(0x122)](_0x294391(0x152))
      ? (curStep = curStep - 0x0)
      : (curStep = curStep - 0x1),
    $("[data-text=\x22current-step\x22]")["text"](curStep);
}
$(_0x548ec2(0x136))["on"](_0x548ec2(0xd1), function (_0x1739d5) {
  const _0x209677 = _0x548ec2;
  console[_0x209677(0xd5)](_0x209677(0xf4)),
    $(this)["data"](_0x209677(0x139)) &&
      (redirectTo = $(this)[_0x209677(0x122)](_0x209677(0x139))),
    !$(this)[_0x209677(0x122)](_0x209677(0x1b1)) &&
      (newTab = $(this)[_0x209677(0x122)]("new-tab")),
    (successCard = $(this)[_0x209677(0x122)]("success")),
    _0x1739d5[_0x209677(0x20b)](),
    _0x1739d5[_0x209677(0x142)](),
    logicExtra &&
      ($(this)["prop"]("novalidate", !![]),
      $(steps)
        [_0x209677(0x12c)](_0x209677(0xc6))
        [_0x209677(0x13a)](_0x209677(0x153), ![])),
    localStorage[_0x209677(0xd4)](_0x209677(0x12e)),
    fill
      ? ($(this)[_0x209677(0x122)](_0x209677(0x14c))
          ? (console[_0x209677(0xd5)](
              $(this)[_0x209677(0x122)](_0x209677(0x14c)),
            ),
            $(this)[_0x209677(0x150)](
              $(this)[_0x209677(0x122)](_0x209677(0x14c)),
            ))
          : $(this)
              ["val"](_0x209677(0x1cd))
              [_0x209677(0x150)](_0x209677(0x1cd)),
        $(_0x209677(0x115))[_0x209677(0x124)](),
        $(_0x209677(0x18c))[_0x209677(0xe8)] > 0x0 &&
          grecaptcha[_0x209677(0xc0)]()[_0x209677(0xe8)] === 0x0 &&
          (form[_0x209677(0x12c)](_0x209677(0x136))[_0x209677(0x150)](
            oldSubmitText,
          ),
          form["find"](_0x209677(0x136))[_0x209677(0x174)](oldSubmitText)),
        customError && $(_0x209677(0x1f7))[_0x209677(0x1ba)]())
      : customError && displayErrorMessage();
});
function nextStep() {
  const _0x5a09fd = _0x548ec2;
  customError
    ? ($("[data-text=\x22error-message\x22]")[_0x5a09fd(0x1ba)](),
      fill
        ? (x++,
          increaseCurstep(),
          (progress = x),
          x <= steps[_0x5a09fd(0xe8)] - 0x1 &&
            (updateStep(), memory && saveFilledInput()))
        : displayErrorMessage())
    : (x++,
      increaseCurstep(),
      x > progress && (progress = x),
      x <= steps["length"] - 0x1 &&
        (updateStep(), memory && saveFilledInput())),
    andLogic();
}
function backStep() {
  const _0x2b2453 = _0x548ec2;
  customError && $("[data-text=\x22error-message\x22]")[_0x2b2453(0x1ba)](),
    decreaseCurstep(),
    x > 0x0 &&
      ($(progressbar[x])["removeClass"](_0x2b2453(0x207)),
      selections["filter"]((_0x400e45) => _0x400e45[_0x2b2453(0xe0)] === x)[
        _0x2b2453(0xe8)
      ] > 0x0
        ? (x = parseInt(
            getSafe(
              () =>
                selections["filter"](
                  (_0x575054) => _0x575054[_0x2b2453(0xe0)] === x,
                )[0x0]["backTo"],
            ),
          ))
        : x--,
      updateStep()),
    ($(steps[x])
      [_0x2b2453(0x12c)](_0x2b2453(0x167))
      [_0x2b2453(0x122)](_0x2b2453(0x177)) === !![] ||
      $(steps[x])
        [_0x2b2453(0x12c)](".active-answer-card")
        [_0x2b2453(0x12c)](_0x2b2453(0x167))
        [_0x2b2453(0x122)](_0x2b2453(0x177)) === !![] ||
      $(steps[x])
        [_0x2b2453(0x12c)](_0x2b2453(0x146))
        [_0x2b2453(0x122)]("radio-skip") === !![]) &&
      ((all_data = all_data["filter"](
        (_0x249312) =>
          _0x249312["field"] !==
          $(steps[x])
            [_0x2b2453(0x12c)](_0x2b2453(0x14e))
            [_0x2b2453(0x198)](_0x2b2453(0x121)),
      )),
      $(
        _0x2b2453(0x114) +
          $(steps[x])
            [_0x2b2453(0x12c)](_0x2b2453(0x14e))
            [_0x2b2453(0x198)](_0x2b2453(0x121)) +
          "\x22]",
      )["hide"](),
      $(steps[x])
        [_0x2b2453(0x12c)](_0x2b2453(0xbd))
        [_0x2b2453(0x13a)](_0x2b2453(0x18f), ![]),
      $(steps[x])
        [_0x2b2453(0x12c)](_0x2b2453(0x14d))
        [_0x2b2453(0x120)](_0x2b2453(0xe7)),
      validation());
}
weightedSelectionRange &&
  $("[data-selection]")[_0x548ec2(0xae)](function () {
    const _0x54a989 = _0x548ec2;
    $(this)["append"](
      _0x54a989(0x1c2) +
        $(this)[_0x54a989(0x122)](_0x54a989(0xbf)) +
        _0x54a989(0x1b0),
    );
  });
function selectionQuiz() {
  const _0x3c48ab = _0x548ec2;
  if ($(this)[_0x3c48ab(0x12c)](_0x3c48ab(0xf6))) {
    $(_0x3c48ab(0x16f))[_0x3c48ab(0x1ba)](),
      $("[data-selection-weight]")[_0x3c48ab(0x1ba)]();
    if (weightedSelection) {
      (selTotal = 0x0),
        selArr["forEach"](function (_0x33b180) {
          const _0xaca4f3 = _0x3c48ab;
          selTotal = selTotal + _0x33b180[_0xaca4f3(0x145)];
        }),
        $(_0x3c48ab(0xc3))[_0x3c48ab(0x150)](selTotal);
      if ($(_0x3c48ab(0x147) + selTotal + "\x22]")[_0x3c48ab(0xe8)] > 0x0)
        $("[data-selection=\x22" + selTotal + "\x22]")["fadeIn"]();
      else
        $(_0x3c48ab(0x140) + selTotal + ")")
          ? $("[data-range]:contains(" + selTotal + ")")
              [_0x3c48ab(0x20c)](_0x3c48ab(0x16f))
              ["eq"](0x0)
              [_0x3c48ab(0x179)]()
          : $(_0x3c48ab(0x195))["fadeIn"]();
    } else {
      let _0x5bd1da = -0x1;
      $(_0x3c48ab(0x16f))[_0x3c48ab(0xae)](function (_0x292c03) {
        const _0x33f447 = _0x3c48ab;
        $($(_0x33f447(0x16f))[_0x292c03])
          [_0x33f447(0x122)](_0x33f447(0xbf))
          [_0x33f447(0x110)](selString["join"]()) && (_0x5bd1da = _0x292c03);
      }),
        _0x5bd1da > -0x1
          ? $($(_0x3c48ab(0x16f))[_0x5bd1da])[_0x3c48ab(0x1ea)]()
          : $(_0x3c48ab(0x195))["fadeIn"]();
    }
  }
}
function triggerInputAllData() {
  const _0x3052fb = _0x548ec2;
  if (savedFilledInput && memory)
    console["log"](savedFilledInput),
      savedFilledInput[_0x3052fb(0xc1)]((_0x575db1) => {
        const _0x5627bf = _0x3052fb;
        var _0x2308de = $(
            _0x5627bf(0x1c9) +
              _0x575db1[_0x5627bf(0x19a)] +
              _0x5627bf(0x106) +
              _0x575db1["value"] +
              "\x22]:not([data-prefill=\x22false\x22])",
          ),
          _0x51cfdf = $(
            _0x5627bf(0x1c9) + _0x575db1[_0x5627bf(0x19a)] + _0x5627bf(0x1be),
          ),
          _0x5bc189 = $(
            _0x5627bf(0x166) + _0x575db1["inputName"] + _0x5627bf(0x1be),
          ),
          _0x394a39 = $(_0x5627bf(0x1db) + _0x575db1["inputName"] + "\x22]"),
          _0x2a8346 = $(
            _0x5627bf(0xcc) +
              _0x575db1[_0x5627bf(0x19a)] +
              "\x22][value=\x22" +
              _0x575db1[_0x5627bf(0x16c)] +
              "\x22]:not([data-prefill=\x22false\x22])",
          );
        if (
          _0x2308de[_0x5627bf(0x198)](_0x5627bf(0x1ee)) !== _0x5627bf(0x137)
        ) {
          if (
            _0x2308de["attr"](_0x5627bf(0x1ee)) === "radio" &&
            !_0x2308de[_0x5627bf(0xcb)](_0x5627bf(0x157))[_0x5627bf(0x122)](
              _0x5627bf(0x177),
            )
          )
            _0x2308de[_0x5627bf(0xd1)](),
              _0x2308de[_0x5627bf(0x151)](".w-radio-input")[_0x5627bf(0x1dd)](
                _0x5627bf(0xe7),
              ),
              _0x2308de[_0x5627bf(0x1fb)]("input");
          else
            _0x575db1[_0x5627bf(0x16c)] === "on"
              ? (_0x51cfdf["click"](),
                _0x51cfdf["siblings"](_0x5627bf(0x18b))[_0x5627bf(0x1dd)](
                  _0x5627bf(0xe7),
                ),
                _0x51cfdf[_0x5627bf(0x1fb)]("input"),
                console[_0x5627bf(0xd5)](_0x2308de))
              : (_0x51cfdf[_0x5627bf(0x174)](_0x575db1["value"]),
                _0x5bc189[_0x5627bf(0x174)](_0x575db1["value"]),
                $(_0x5627bf(0x15c))
                  ["find"](
                    _0x5627bf(0x103) + _0x575db1[_0x5627bf(0x16c)] + "\x22]",
                  )
                  [_0x5627bf(0x13a)](_0x5627bf(0x145), !![]),
                _0x51cfdf[_0x5627bf(0x1fb)](_0x5627bf(0x1df)),
                _0x51cfdf[_0x5627bf(0x1fb)]("change"));
          const _0x504aad = _0x2a8346[_0x5627bf(0x122)](_0x5627bf(0xe1)),
            _0x16c7dc = _0x394a39[_0x5627bf(0x122)]("click-addclass");
          _0x2a8346["parent"]()[_0x5627bf(0x1dd)](_0x504aad),
            _0x394a39[_0x5627bf(0x20c)]()[_0x5627bf(0x1dd)](_0x16c7dc);
        }
      });
  else
    _params &&
      (getParams(),
      searchQ["forEach"]((_0x5e8cdb) => {
        const _0x58f17e = _0x3052fb;
        if (
          $(
            _0x58f17e(0x1c9) +
              _0x5e8cdb[_0x58f17e(0x19a)] +
              _0x58f17e(0x106) +
              _0x5e8cdb[_0x58f17e(0x16c)] +
              _0x58f17e(0x1be),
          )[_0x58f17e(0x198)](_0x58f17e(0x1ee)) !== "file"
        ) {
          if (
            $(
              _0x58f17e(0x1c9) +
                _0x5e8cdb[_0x58f17e(0x175)] +
                _0x58f17e(0x106) +
                _0x5e8cdb["val"] +
                _0x58f17e(0x1be),
            )[_0x58f17e(0x198)](_0x58f17e(0x1ee)) === _0x58f17e(0x15d)
          )
            $(
              _0x58f17e(0x1c9) +
                _0x5e8cdb[_0x58f17e(0x175)] +
                "\x22][value=\x22" +
                _0x5e8cdb[_0x58f17e(0x174)] +
                _0x58f17e(0x1be),
            )[_0x58f17e(0xd1)](),
              $(
                _0x58f17e(0x1c9) +
                  _0x5e8cdb[_0x58f17e(0x175)] +
                  _0x58f17e(0x106) +
                  _0x5e8cdb[_0x58f17e(0x174)] +
                  "\x22]:not([data-prefill=\x22false\x22])",
              )
                [_0x58f17e(0x151)](".w-radio-input")
                [_0x58f17e(0x1dd)](_0x58f17e(0xe7)),
              $(
                _0x58f17e(0x1c9) +
                  _0x5e8cdb["key"] +
                  _0x58f17e(0x106) +
                  _0x5e8cdb["val"] +
                  _0x58f17e(0x1be),
              )[_0x58f17e(0x1fb)](_0x58f17e(0x1df));
          else
            _0x5e8cdb[_0x58f17e(0x174)] === "on"
              ? ($(
                  "input[name=\x22" +
                    _0x5e8cdb[_0x58f17e(0x175)] +
                    _0x58f17e(0x1be),
                )["click"](),
                $(
                  "input[name=\x22" +
                    _0x5e8cdb[_0x58f17e(0x175)] +
                    _0x58f17e(0x1be),
                )
                  [_0x58f17e(0x151)](_0x58f17e(0x18b))
                  ["addClass"](_0x58f17e(0xe7)),
                $(_0x58f17e(0x1c9) + _0x5e8cdb[_0x58f17e(0x175)] + "\x22]")[
                  _0x58f17e(0x1fb)
                ]("input"))
              : ($(
                  "input[name=\x22" +
                    _0x5e8cdb[_0x58f17e(0x175)] +
                    _0x58f17e(0x1be),
                )["val"](_0x5e8cdb[_0x58f17e(0x174)]),
                $(
                  _0x58f17e(0x166) +
                    _0x5e8cdb[_0x58f17e(0x175)] +
                    _0x58f17e(0x1be),
                )["val"](_0x5e8cdb[_0x58f17e(0x174)]),
                $(
                  _0x58f17e(0x17c) +
                    _0x5e8cdb[_0x58f17e(0x175)] +
                    _0x58f17e(0x1be),
                )
                  [_0x58f17e(0x12c)](
                    _0x58f17e(0x103) + _0x5e8cdb[_0x58f17e(0x174)] + "\x22]",
                  )
                  [_0x58f17e(0x13a)]("selected", !![]),
                $(
                  _0x58f17e(0x1c9) +
                    _0x5e8cdb[_0x58f17e(0x175)] +
                    _0x58f17e(0x1be),
                )[_0x58f17e(0x1fb)](_0x58f17e(0x1df)),
                $(_0x58f17e(0x1c9) + _0x5e8cdb["key"] + _0x58f17e(0x1be))[
                  _0x58f17e(0x1fb)
                ]("change"));
        }
      }));
}
function _0x1251() {
  const _0x53ce87 = [
    ":input[type=\x22tel\x22][required]",
    "[data-index=\x22",
    "add-new",
    "hide",
    "formly-support",
    "[data-form=\x22back-btn\x22]",
    "[data-clone=\x22",
    "\x22]:not([data-prefill=\x22false\x22])",
    "[data-clone]",
    ":input[type=\x22number\x22][required]",
    "textarea",
    "<div\x20data-range=\x22selection\x22\x20style=\x22display:none\x20!important\x22>",
    "relationship-",
    "select",
    "test",
    "keyCode",
    ":input[type=\x22file\x22]",
    "0.4",
    "input[name=\x22",
    "<strong\x20class=\x22f-text-white\x22>Automatic\x20Progress\x20Indicators\x20",
    "\x22][data-progressive-input-value=\x22",
    "phone-autoformat",
    "Please\x20wait...",
    "10tGuOOj",
    "skip-to",
    "innerHTML",
    "[data-form=\x22progress\x22]",
    "\x0a\x20\x20<button\x20class=\x22f-openbtn\x22\x20onclick=\x22openNav()\x22>\x0a\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x2220px\x22\x20height=\x2220px\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M11\x2021h-1l1-7H7.5c-.88\x200-.33-.75-.31-.78C8.48\x2010.94\x2010.42\x207.54\x2013.01\x203h1l-1\x207h3.51c.4\x200\x20.62.19.4.66C12.97\x2017.55\x2011\x2021\x2011\x2021\x22></path>\x0a\x20\x20\x20\x20</svg>\x20Check\x20Form\x0a\x20\x20</button>\x0a\x20\x20<div\x20id=\x22f-mySidenav\x22\x20class=\x22f-sidenav\x22>\x0a\x20\x20\x20\x20<a\x20href=\x22javascript:void(0)\x22\x20class=\x22f-closebtn\x22\x20onclick=\x22closeNav()\x22>&times;</a>\x0a\x20\x20\x20\x20<div\x20class=\x22f-fc-main-content\x22>\x0a\x20\x20\x20\x20\x20\x20<h4\x20class=\x22f-text-header\x22>Formly\x20Support</h4>\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20If\x20you\x20have\x20spotted\x20a\x20bug\x20or\x20require\x20extra\x20support,\x20please\x20reach\x20out\x20to\x20us\x20via\x20Slack\x20or\x20email\x20us\x20at\x20developer@videsigns.uk.\x0a\x20\x20\x20\x20\x20\x20</p>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Form\x20Type</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>",
    "auto",
    "[data-selected]:checked",
    "logic-extra",
    "[type=\x22checkbox\x22]",
    "[data-text=\x22total-steps\x22]",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Number\x20of\x20steps:\x20",
    ".active-answer-card",
    "<strong\x20class=\x22f-text-white\x22>ReCAPTCHA\x20",
    "input[type=\x22checkbox\x22][name=\x22",
    "querySelector",
    "addClass",
    "destroy",
    "input",
    "option[value=\x22$(this).val()\x22]",
    "query-param",
    "enter",
    "\x22]:checked",
    "redirect-form-hehexd",
    "_blank",
    "[data-progressive-target]",
    "custom-error-message",
    "reset",
    "[data-enter]",
    "fadeIn",
    "[data-clone-input-wrapper=\x22",
    "select[required]",
    "5824841zpQzSH",
    "type",
    "[data-weighted-selection-range]",
    "[data-form=\x22remove-input-clone\x22]",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Powerups</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "src",
    ":checked",
    "not",
    "[data-reset-delay]",
    ":input[type=\x22date\x22][required]",
    "[data-text=\x22error-message\x22]",
    "12px",
    "data-go-to",
    "input-field",
    "trigger",
    "[data-form=\x22custom-progress-indicator\x22]",
    "searchParams",
    "FAIL",
    "span",
    "[data-input-index=\x22",
    "[data-select-multiple]",
    "querySelectorAll",
    "[data-quiz]",
    "last\x20step",
    "init",
    ":input[type=\x22time\x22][required]",
    "current",
    ":input[type=\x22password\x22][required]",
    "html,\x20body",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Multistep\x20form\x20attribute\x20is\x20on\x20Form\x20element\x20and\x20not\x20on\x20Form\x20Block\x20element\x0a\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>2.\x20Form\x20Steps:\x20data-form=step\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "preventDefault",
    "parent",
    "quiz",
    "[data-text=\x22current-step\x22]",
    "progressive-input",
    "select-multiple",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>3.\x20Next\x20Buttons:\x20data-form=back-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Next\x20button\x20present?\x20",
    "search",
    "every",
    "<strong\x20class=\x22f-text-white\x22>Current\x20Step\x20Text\x20",
    "<span\x20class=\x22f-icon-embed-xxsmall\x20w-embed\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010s10-4.48\x2010-10S17.52\x202\x2012\x202m-2\x2015l-5-5l1.41-1.41L10\x2014.17l7.59-7.59L19\x208z\x22></path></svg></span>",
    "input:radio[required]",
    "[data-display-input-wrapper=\x22",
    "min-character",
    "Before\x20&lt;/body&gt;\x20tag",
    "div",
    "remove",
    "dispatchEvent",
    "data-show-if",
    "keydown",
    "input[type=\x22text\x22][required]:visible",
    "\x22]\x20select",
    "[data-go-to]",
    "\x22]\x20[data-input-field^=\x22",
    "each",
    "[data-redirect-delay]",
    "[data-conditional-result]",
    "594aeJAtZ",
    "tagName",
    ":input[type=\x27radio\x27]:checked",
    "<strong\x20class=\x22f-text-white\x22>Radio\x20Inputs\x20",
    "No\x20Formly\x20script\x20added\x20to\x20the\x20page!",
    "[data-checkbox]",
    "phone-validation",
    ".w-form-done",
    "AND",
    "clickable-all",
    "weighted-selection-range",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Next\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button\x20",
    "input[type=\x22radio\x22]",
    "data-name",
    "selection",
    "getResponse",
    "forEach",
    "setItem",
    "[data-text=\x22total-weight\x22]",
    "[data-form=\x22progress-indicator\x22]",
    "active-answer-card",
    ":input",
    "input[type=\x22email\x22]:visible",
    ":input[type=\x22date\x22]",
    ":input[type=\x22tel\x22]",
    "none",
    "parents",
    "input[type=\x22radio\x22][name=\x22",
    "input:radio[name=\x22",
    "form[data-form=\x22multistep\x22]",
    "reset-delay",
    ":input[type=\x22number\x22]",
    "click",
    "888780vtuLVP",
    "clone",
    "removeItem",
    "log",
    "url",
    "animate",
    "<option>",
    "<br>Data\x20Answer\x20=\x20",
    "debug-mode",
    "body",
    "<strong\x20class=\x22f-text-white\x22>Checkboxes\x20",
    "reinit",
    "1057FubHXR",
    ":input[type=\x22checkbox\x22]:checked",
    "skipTo",
    "click-addclass",
    "toLowerCase",
    "add-new-input",
    "[data-form=\x22step\x22]:not([data-card=\x22true\x22])",
    "append",
    "go-to",
    "w--redirected-checked",
    "length",
    "redirect-delay",
    "data-radio-delay",
    "[data-clickable-all]",
    "[data-submit=\x22true\x22]",
    "[data-input-field]",
    "[data-clone-input]",
    "display",
    "clicked",
    "[data-display-input]",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a",
    "children",
    "clicked\x20enter",
    "ctrlKey",
    "[data-btn=\x22check\x22]",
    "[data-success-card]",
    "</strong>",
    "[data-answer=\x22",
    "[data-count-card]",
    "textarea[required]",
    "checkbox",
    "input:checkbox",
    ":input[type=\x22text\x22]",
    "35%",
    "\x22]\x20textarea",
    "[data-last-step]",
    "formlyLastStepAnswer",
    "option[value=\x22",
    "findIndex",
    ":input[type=\x22checkbox\x22]",
    "\x22][value=\x22",
    "parse",
    "status",
    "head",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>4.\x20Back\x20Buttons:\x20data-form=next-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Back\x20button\x20present?\x20",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>Script\x20Location:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>",
    "[data-card=\x22true\x22]",
    "Inside\x20<head>\x20tag",
    ":input[type=\x22radio\x22]",
    ":input[type=\x22password\x22]",
    "includes",
    "FormlyLogic\x20enabled",
    "input[autofocus]",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Back\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button",
    "[data-input-field=\x22",
    "[data-form=\x22multistep\x22]",
    "css",
    "progressive-input-value",
    "[data-form=\x22remove-clone\x22]",
    "[data-form-ms=\x22submit-btn\x22]",
    "<strong\x20class=\x22f-text-white\x22>Press\x20\x22⌘\x20+\x20Enter\x20\x22\x20To\x20Submit\x20",
    ":input[type=\x22time\x22]",
    "createElement",
    "width",
    "[data-custom-error-message]",
    "[data-skip-to]",
    "removeClass",
    "name",
    "data",
    "scroll-top-offset",
    "submit",
    "script",
    "ms-field",
    ":input[required]",
    "[data-progressive-target=\x22",
    "parentNode",
    "textarea:focus",
    "[data-btn=\x22edit\x22]",
    "find",
    ":input[type=\x22checkbox\x22][required]:checked",
    "filledInput",
    "clone-input",
    "[data-form=\x22next-btn\x22][data-submit-show]",
    "conditional-result",
    "ix2",
    "[data-form=\x22next-btn\x22][type=\x22submit\x22]",
    "49SIhLXB",
    ":input[type=\x22checkbox\x22][required]",
    "[data-form=\x22submit-btn\x22]",
    "file",
    ":input[type=\x22checkbox\x22][required]:not(:checked)",
    "redirect",
    "prop",
    "some",
    "[data-progressive-input]",
    "[data-memory]",
    "edit-step",
    "script[src=\x22",
    "[data-range]:contains(",
    "answer",
    "stopPropagation",
    "<strong\x20class=\x22f-text-white\x22>Press\x20\x22Enter\x22\x20To\x20Progress\x20",
    "[data-form=\x22submit\x22]:visible",
    "selected",
    "[data-answer][data-radio-skip]:visible",
    "[data-selection=\x22",
    "stringify",
    ":input[type=\x22text\x22][required]",
    "[data-form=\x22next-btn\x22]",
    "2296236CjFJFL",
    "wait",
    ".w-form-formradioinput",
    "input[type=\x22radio\x22]:checked",
    "[data-reinit]",
    "text",
    "siblings",
    "card",
    "required",
    "BODY",
    "startsWith",
    "clickable",
    "[data-radio-skip]",
    "[data-display]",
    "[data-query-param]",
    "count-card",
    "push",
    "select:not([data-prefill=\x22false\x22])",
    "radio",
    "appendChild",
    "last",
    "top",
    "[data-radio-skip=\x22true\x22]",
    "[data-answer]",
    "[data-callback=\x22recaptcha\x22]",
    "style",
    "[data-cms-select=input]",
    "textarea[name=\x22",
    "[data-radio-skip]:visible",
    ":input[type=\x22url\x22][required]",
    "input[type=\x22submit\x22]",
    "5482593JCbuhn",
    "step",
    "value",
    "index",
    "focus",
    "[data-selection]",
    "running",
    "formlyLastStep",
    ":input[type=\x22email\x22]",
    "radio-delay",
    "val",
    "key",
    "[data-add-new-input]",
    "radio-skip",
    "disabled",
    "show",
    "[data-display-input=\x22",
    "filter",
    "select[name=\x22",
    "Webflow",
    "[data-radio-delay]",
    "10MvKoET",
    "block-domain",
    "field",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "[data-clone-wrapper]",
    "open",
    "\x22]\x20input",
    "textarea[autofocus]",
    "scroll-top",
    "location",
    "[type=\x22radio\x22]",
    "replace",
    ".w-checkbox-input",
    "div.g-recaptcha",
    "select[required]:visible",
    "input[type=\x22checkbox\x22]:visible",
    "checked",
    "235544qFetqt",
    "submit-show",
    "split",
    "getElementById",
    "change",
    "[data-selection=\x22other\x22]",
    "require",
    "<span\x20class=\x22f-icon-embed-xxsmall-2\x20w-embed\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--carbon\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2032\x2032\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M16\x202C8.2\x202\x202\x208.2\x202\x2016s6.2\x2014\x2014\x2014s14-6.2\x2014-14S23.8\x202\x2016\x202m5.4\x2021L16\x2017.6L10.6\x2023L9\x2021.4l5.4-5.4L9\x2010.6L10.6\x209l5.4\x205.4L21.4\x209l1.6\x201.6l-5.4\x205.4l5.4\x205.4z\x22></path></svg></span>",
    "attr",
    "[data-add-new]",
    "inputName",
    ":input[type=\x22email\x22][required]",
    ":focus",
    "data-skip-to",
    ":input[type=\x22file\x22][required]",
    "[data-form=\x22step\x22]",
    "<br>Data\x20Go\x20To\x20=\x20",
    "<strong\x20class=\x22f-text-white\x22>Intro\x20Cards\x20Or\x20Steps\x20Without\x20Inputs\x20",
    "padding",
    "[data-btn=\x22reset\x22]",
    "[data-clone-input=\x22",
    "1165782wNJqgP",
    "[data-display-input-index=\x22",
    "<strong\x20class=\x22f-text-white\x22>Custom\x20Progress\x20Indicators\x20",
    "closest",
    "[data-clickable]",
    "[data-display=\x22",
    "[data-form=\x22submit-btn\x22]:visible",
    "[data-weighted-selection]",
    "[data-clone-input-wrapper]",
    "[data-show-if]",
    "backTo",
    "</div>",
    "new-tab",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Submit\x20button\x20attribute\x20IS\x20on\x20Form\x20Submit\x20Button\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "f-mySidenav",
    "data-input-field",
    ":input[type=\x22url\x22]",
    "getItem",
  ];
  _0x1251 = function () {
    return _0x53ce87;
  };
  return _0x1251();
}
$(_0x548ec2(0x14a))["on"](_0x548ec2(0xd1), function () {
  (next = !![]), nextStep(), selectionQuiz();
}),
  $(_0x548ec2(0x1bc))["on"](_0x548ec2(0xd1), function () {
    (next = ![]), (back = !![]), backStep();
  }),
  $(steps)
    [_0x548ec2(0x12c)](_0x548ec2(0xc6))
    ["not"](_0x548ec2(0x189))
    ["on"](_0x548ec2(0x1df), function (_0x4ad5a6) {
      validation(), andLogic(), addClickClass();
    }),
  $(steps)
    [_0x548ec2(0x12c)](_0x548ec2(0xbd))
    ["on"](_0x548ec2(0xd1), function () {
      (skip = !![]), validation(), addClickClass();
    });
$(_0x548ec2(0xeb))[_0x548ec2(0x122)](_0x548ec2(0xba))
  ? $(_0x548ec2(0x1fc))[_0x548ec2(0x120)](_0x548ec2(0x178))
  : $(_0x548ec2(0x1fc))[_0x548ec2(0x1dd)](_0x548ec2(0x178));
function clickableIndicator() {
  const _0xde881f = _0x548ec2;
  $(_0xde881f(0x1a9))[_0xde881f(0x122)](_0xde881f(0x156)) &&
    ($(_0xde881f(0xc4))[_0xde881f(0x120)]("current"),
    $(_0xde881f(0x1a9))[_0xde881f(0x122)](_0xde881f(0xba))
      ? ((x = $(this)["index"]()), updateStep())
      : $(this)[_0xde881f(0x16d)]() <= progress &&
        ((x = $(this)[_0xde881f(0x16d)]()), updateStep())),
    $(_0xde881f(0x20e))[_0xde881f(0x150)](x + 0x1);
}
$(_0x548ec2(0x1fc))["on"](_0x548ec2(0xd1), clickableIndicator);
$("[data-form=\x22multistep\x22]")[_0x548ec2(0x122)](_0x548ec2(0xda)) &&
  ($(_0x548ec2(0xac))[_0x548ec2(0xae)](function () {
    const _0x486fb0 = _0x548ec2;
    $(this)["append"](_0x486fb0(0x1a0), $(this)["data"](_0x486fb0(0xe6)));
  }),
  $(_0x548ec2(0x162))[_0x548ec2(0xae)](function () {
    const _0xa4fdfd = _0x548ec2;
    $(this)[_0xa4fdfd(0xe5)](
      _0xa4fdfd(0xd9),
      $(this)[_0xa4fdfd(0x122)](_0xa4fdfd(0x141)),
    );
  }));
function resetFormly() {
  const _0x324450 = _0x548ec2;
  $(_0x324450(0x115))[_0x324450(0x1fb)](_0x324450(0x1e8)),
    $(_0x324450(0x115))[_0x324450(0xcb)]()["find"](_0x324450(0xb8))["hide"](),
    (x = 0x0),
    updateStep(),
    $("[data-form=\x22multistep\x22]")[_0x324450(0x179)](),
    $("[data-form=\x22submit-btn\x22]")[_0x324450(0x150)](oldSubmitText),
    $(_0x324450(0x136))[_0x324450(0x174)](oldSubmitText),
    $(_0x324450(0x20e))[_0x324450(0x150)](0x1),
    $(_0x324450(0x115))
      ["find"](_0x324450(0xfd))
      [_0x324450(0x151)](".w-checkbox-input")
      [_0x324450(0x120)]("w--redirected-checked");
}
$(document)["ajaxComplete"](function (_0x54b862, _0x2f04f5, _0xe2a986) {
  const _0x30bb98 = _0x548ec2;
  if (
    _0xe2a986[_0x30bb98(0xd6)]["includes"]("https://webflow.com/api/v1/form/")
  ) {
    const _0x4c3fb6 = _0x2f04f5[_0x30bb98(0x108)] === 0xc8,
      _0x17267a = _0x30bb98(0x1e4);
    redirectTo &&
      _0x4c3fb6 &&
      (newTab
        ? window[_0x30bb98(0x184)](redirectTo, _0x30bb98(0x1e5))
        : setTimeout(() => {
            location["href"] = redirectTo;
          }, redirectDelay)),
      _0x4c3fb6 &&
        successCard !== "" &&
        $("[data-success-card=\x22" + successCard + "\x22]")[
          _0x30bb98(0x1ea)
        ](),
      _0x4c3fb6 &&
        formReset &&
        setTimeout(() => {
          resetFormly();
        }, resetDelay),
      !_0x4c3fb6 &&
        ($("[data-form=\x22submit-btn\x22]")[_0x30bb98(0x174)](
          _0x30bb98(0x1cd),
        ),
        $("[data-form=\x22submit-btn\x22]")["text"](_0x30bb98(0x1cd)));
  }
}),
  $(_0x548ec2(0x12b))["on"](_0x548ec2(0xd1), function () {
    const _0xa50b43 = _0x548ec2;
    var _0x31b138 = $(this)
      [_0xa50b43(0x20c)]()
      ["find"](_0xa50b43(0xed))
      [_0xa50b43(0x122)](_0xa50b43(0x1fa));
    setTimeout(function () {
      const _0x59644d = _0xa50b43;
      $(_0x59644d(0x1c9) + _0x31b138 + "\x22]")[_0x59644d(0x16e)]();
    }, 0x64),
      (back = !![]),
      (x = $(this)[_0xa50b43(0x122)](_0xa50b43(0x13e)) - 0x1),
      updateStep(),
      countCard
        ? ((curStep = x + 0x1),
          $(_0xa50b43(0x1d7))[_0xa50b43(0x150)](steps[_0xa50b43(0xe8)]))
        : $(steps[x])[_0xa50b43(0x122)](_0xa50b43(0x152))
          ? (curStep = x + 0x0)
          : (curStep = x + 0x1),
      $(_0xa50b43(0x20e))["text"](curStep),
      (back = ![]);
  }),
  $(_0x548ec2(0x1a3))["on"]("click", function () {
    const _0x353e63 = _0x548ec2;
    $("[data-form=\x22multistep\x22]")[_0x353e63(0x1fb)](_0x353e63(0x1e8));
    let _0x3e80ce = $(this);
    $(this)[_0x353e63(0x150)](_0x353e63(0x1cd)),
      setTimeout(function () {
        const _0x2ce156 = _0x353e63;
        $(_0x3e80ce)["text"](oldResetText),
          $(_0x3e80ce)["parents"](_0x2ce156(0xb8))["hide"](),
          (x = 0x0),
          updateStep(),
          $(_0x2ce156(0x115))[_0x2ce156(0x179)](),
          $(_0x2ce156(0x136))[_0x2ce156(0x150)](oldSubmitText),
          $("[data-form=\x22submit-btn\x22]")["val"](oldSubmitText),
          $(_0x3e80ce)["val"](oldSubmitText),
          $(_0x2ce156(0x20e))[_0x2ce156(0x150)](0x1),
          $(_0x2ce156(0x115))
            ["find"](_0x2ce156(0xfd))
            [_0x2ce156(0x151)](_0x2ce156(0x18b))
            [_0x2ce156(0x120)](_0x2ce156(0xe7));
      }, resetDelay);
  }),
  $("body")["on"]("keypress", function (_0x591524) {
    const _0x3a41ea = _0x548ec2;
    if (_0x591524[_0x3a41ea(0x1c6)] === 0xd) {
      _0x591524[_0x3a41ea(0x20b)](), _0x591524[_0x3a41ea(0x142)]();
      if ($(steps[x])["find"](_0x3a41ea(0x1c1))["is"](_0x3a41ea(0x19c)))
        $(steps[x])
          [_0x3a41ea(0x12c)](_0x3a41ea(0x12a))
          ["val"](
            $(steps[x])
              [_0x3a41ea(0x12c)](_0x3a41ea(0x12a))
              [_0x3a41ea(0x174)]() + "\x0a",
          );
      else
        $(_0x3a41ea(0x1e9))["data"](_0x3a41ea(0x1e2)) &&
          fill &&
          totalSteps > curStep &&
          $(_0x3a41ea(0x14a))[0x0][_0x3a41ea(0xd1)]();
    }
  }),
  $(_0x548ec2(0xdb))[_0x548ec2(0xa9)](function (_0x4ed4c0) {
    const _0x11302b = _0x548ec2;
    (_0x4ed4c0["metaKey"] || _0x4ed4c0[_0x11302b(0xf5)]) &&
      _0x4ed4c0[_0x11302b(0x1c6)] == 0xd &&
      (x >= steps[_0x11302b(0xe8)] - 0x1 && fill
        ? $(steps[x])[_0x11302b(0x12c)](_0x11302b(0x1ab))[_0x11302b(0xd1)]()
        : (_0x4ed4c0[_0x11302b(0x20b)](), _0x4ed4c0["stopPropagation"]()));
  }),
  $(_0x548ec2(0x115))
    [_0x548ec2(0x12c)](":input")
    ["on"](_0x548ec2(0x194), function () {
      const _0x1bee69 = _0x548ec2;
      (all_data = all_data[_0x1bee69(0x17b)](
        (_0x118e51) => _0x118e51[_0x1bee69(0x181)] !== $(this)["attr"]("name"),
      )),
        $(this)[_0x1bee69(0x198)](_0x1bee69(0x1ee)) === _0x1bee69(0xfc)
          ? $(this)["is"](":checked")
            ? all_data["push"]({
                field: $(this)[_0x1bee69(0x198)](_0x1bee69(0x121)),
                value: $(this)
                  [_0x1bee69(0x151)](_0x1bee69(0x1ff))
                  [_0x1bee69(0x150)](),
              })
            : $(
                _0x1bee69(0x114) +
                  $(this)[_0x1bee69(0x198)](_0x1bee69(0x121)) +
                  "\x22]",
              )["hide"]()
          : (all_data["push"]({
              field: $(this)["attr"](_0x1bee69(0x121)),
              value: $(this)[_0x1bee69(0x174)](),
            }),
            $(this)[_0x1bee69(0x174)]() !== "" &&
              resetInputErrorMessage(
                $(this)[_0x1bee69(0x198)](_0x1bee69(0x121)),
              )),
        all_data[_0x1bee69(0xc1)](function (_0x599545) {
          const _0x94c4db = _0x1bee69;
          $(_0x94c4db(0x114) + _0x599545["field"] + "\x22]")[
            _0x94c4db(0x179)
          ](),
            $(_0x94c4db(0x114) + _0x599545[_0x94c4db(0x181)] + "\x22]")[
              _0x94c4db(0x150)
            ](_0x599545[_0x94c4db(0x16c)]);
        });
    }),
  $("[data-form=\x22multistep\x22]")
    [_0x548ec2(0x12c)](_0x548ec2(0x1c1))
    ["on"]("change", function () {
      const _0x3eb4f2 = _0x548ec2;
      $(this)[_0x3eb4f2(0x174)]() !== "" &&
        resetInputErrorMessage($(this)[_0x3eb4f2(0x198)](_0x3eb4f2(0x121))),
        (all_data = all_data[_0x3eb4f2(0x17b)](
          (_0xb0e6f6) =>
            _0xb0e6f6["field"] !== $(this)[_0x3eb4f2(0x198)](_0x3eb4f2(0x121)),
        )),
        all_data["push"]({
          field: $(this)[_0x3eb4f2(0x198)](_0x3eb4f2(0x121)),
          value: $(this)[_0x3eb4f2(0x174)](),
        }),
        all_data[_0x3eb4f2(0xc1)](function (_0x1ae5e1) {
          const _0x377dc3 = _0x3eb4f2;
          $(_0x377dc3(0x114) + _0x1ae5e1[_0x377dc3(0x181)] + "\x22]")[
            _0x377dc3(0x179)
          ](),
            $(_0x377dc3(0x114) + _0x1ae5e1[_0x377dc3(0x181)] + "\x22]")[
              _0x377dc3(0x150)
            ](_0x1ae5e1[_0x377dc3(0x16c)]);
        });
    }),
  $(_0x548ec2(0x115))
    [_0x548ec2(0x12c)](_0x548ec2(0x1c4))
    ["on"](_0x548ec2(0x194), function () {
      const _0x595005 = _0x548ec2;
      $(this)[_0x595005(0x174)]() !== "" &&
        resetInputErrorMessage($(this)[_0x595005(0x198)](_0x595005(0x121)));
      var _0x4ebad6 = $(this)["data"](_0x595005(0x126));
      (all_data = all_data[_0x595005(0x17b)](
        (_0x18620e) =>
          _0x18620e[_0x595005(0x181)] !== $(this)[_0x595005(0x198)]("name"),
      )),
        all_data[_0x595005(0x15b)]({
          field: $(this)[_0x595005(0x198)](_0x595005(0x121)),
          value: _0x4ebad6
            ? $(this)[_0x595005(0x12c)](_0x595005(0x1e0))[_0x595005(0x150)]()
            : $(this)[_0x595005(0x174)](),
        }),
        all_data[_0x595005(0xc1)](function (_0x45d40d) {
          const _0x16e13a = _0x595005;
          $(_0x16e13a(0x114) + _0x45d40d["field"] + "\x22]")[
            _0x16e13a(0x179)
          ](),
            $(_0x16e13a(0x114) + _0x45d40d[_0x16e13a(0x181)] + "\x22]")[
              _0x16e13a(0x150)
            ](_0x45d40d["value"]);
        });
    }),
  updateStep(),
  triggerInputAllData(),
  $("[data-cms-select=cms]")[_0x548ec2(0xae)](function () {
    const _0x40cb62 = _0x548ec2,
      _0x3b9d87 = $(this)["find"]("[data-cms-select=text]"),
      _0x1d9698 = [];
    console[_0x40cb62(0xd5)](_0x1d9698),
      _0x3b9d87[_0x40cb62(0xae)](function () {
        const _0x1dc289 = _0x40cb62;
        _0x1d9698[_0x1dc289(0x15b)]($(this)[_0x1dc289(0x150)]()["trim"]());
      });
    const _0x1acc84 = $(this)[_0x40cb62(0x151)](_0x40cb62(0x165));
    $[_0x40cb62(0xae)](_0x1d9698, function (_0x9d1a1d, _0x49f84) {
      const _0x5a28cd = _0x40cb62,
        _0x21c94c = $(_0x5a28cd(0xd8))
          [_0x5a28cd(0x174)](_0x49f84)
          [_0x5a28cd(0x150)](_0x49f84);
      _0x1acc84[_0x5a28cd(0xe5)](_0x21c94c);
    });
  });
function cloneRemove() {
  const _0x49591c = _0x548ec2;
  $(_0x49591c(0x183))[_0x49591c(0xae)](function () {
    const _0x875bc0 = _0x49591c;
    $(this)["find"](_0x875bc0(0x1bf))["length"] < 0x2
      ? $(this)["find"](_0x875bc0(0x118))[_0x875bc0(0x1ba)]()
      : $(this)[_0x875bc0(0x12c)](_0x875bc0(0x118))[_0x875bc0(0x179)]();
  });
}
function cloneRemoveInput() {
  const _0x5e175f = _0x548ec2;
  $(_0x5e175f(0x1ad))["each"](function () {
    const _0x2b7d41 = _0x5e175f;
    $(this)[_0x2b7d41(0x12c)](_0x2b7d41(0xee))["length"] < 0x2
      ? $(this)[_0x2b7d41(0x12c)](_0x2b7d41(0x1f0))[_0x2b7d41(0x1ba)]()
      : $(this)[_0x2b7d41(0x12c)](_0x2b7d41(0x1f0))[_0x2b7d41(0x179)]();
  });
}
$(_0x548ec2(0x118))["on"](_0x548ec2(0xd1), function () {
  const _0x2191da = _0x548ec2,
    _0x20c06d =
      $(this)[_0x2191da(0xcb)](_0x2191da(0x1bf))["length"] > 0x0
        ? $(this)["parents"](_0x2191da(0x1bf))[_0x2191da(0x16d)]()
        : $(this)["parents"](_0x2191da(0x158))[_0x2191da(0x16d)](),
    _0x350a44 =
      $(this)[_0x2191da(0xcb)](_0x2191da(0x1bf))[_0x2191da(0xe8)] > 0x0
        ? $(this)
            ["parents"](_0x2191da(0x1bf))
            [_0x2191da(0x122)](_0x2191da(0xd3))
        : $(this)
            [_0x2191da(0xcb)](_0x2191da(0x158))
            [_0x2191da(0x122)](_0x2191da(0xef));
  $(_0x2191da(0x1bd) + _0x350a44 + "\x22]")
    ["eq"](_0x20c06d)
    [_0x2191da(0xa6)](),
    $(_0x2191da(0x1aa) + _0x350a44 + "\x22]")
      ["eq"](_0x20c06d)
      ["remove"](),
    cloneRemove(),
    validation();
}),
  $(_0x548ec2(0x1f0))["on"]("click", function () {
    const _0x5125fa = _0x548ec2;
    let _0x552a5a = $(this)["siblings"]()[_0x5125fa(0x198)](_0x5125fa(0x121));
    $(this)[_0x5125fa(0x20c)]("[data-clone-input]")[_0x5125fa(0xa6)](),
      $("[data-input-field=\x22" + _0x552a5a + "\x22]")
        [_0x5125fa(0x20c)](_0x5125fa(0xf1))
        [_0x5125fa(0xa6)](),
      cloneRemove(),
      validation();
  }),
  $(_0x548ec2(0x199))["on"]("click", function () {
    const _0x5c11a6 = _0x548ec2;
    let _0x37e150 = $(this)[_0x5c11a6(0x122)](_0x5c11a6(0x1b9));
    var _0x25ae48 = $(_0x5c11a6(0x1bd) + _0x37e150 + "\x22]")
        ["eq"](0x0)
        [_0x5c11a6(0xd3)](!![]),
      _0x45a583 = $("[data-display=\x22" + _0x37e150 + "\x22]")
        ["eq"](0x0)
        [_0x5c11a6(0xd3)](!![]);
    let _0x486398 = "";
    $(this)[_0x5c11a6(0x12c)](_0x5c11a6(0x118))[_0x5c11a6(0x179)](),
      cloneRemove(),
      _0x25ae48[_0x5c11a6(0x12c)](_0x5c11a6(0xee))
        [_0x5c11a6(0x12c)](_0x5c11a6(0x1df))
        [_0x5c11a6(0x174)](""),
      _0x25ae48[_0x5c11a6(0x12c)]("[data-clone-input]")
        [_0x5c11a6(0x12c)]("select")
        [_0x5c11a6(0x174)](""),
      _0x25ae48[_0x5c11a6(0x12c)](_0x5c11a6(0xee))
        ["find"](_0x5c11a6(0x1c1))
        [_0x5c11a6(0x174)](""),
      _0x25ae48[_0x5c11a6(0x12c)](_0x5c11a6(0xee))
        [_0x5c11a6(0x1f4)](":first")
        [_0x5c11a6(0xa6)](),
      _0x45a583[_0x5c11a6(0x12c)](_0x5c11a6(0xf1))
        [_0x5c11a6(0x1f4)](":first")
        [_0x5c11a6(0xa6)](),
      _0x25ae48[_0x5c11a6(0x12c)](_0x5c11a6(0x1df))["each"](function () {
        const _0xb359da = _0x5c11a6;
        if ($(this)["closest"]("[data-clone-input]")[_0xb359da(0xe8)] > 0x0) {
          let _0x2b981f = 0x0;
          const _0x3787bc = $(this)
            [_0xb359da(0x1a8)](_0xb359da(0xee))
            [_0xb359da(0x122)]("clone-input");
          console[_0xb359da(0xd5)](
            $(this)
              [_0xb359da(0x1a8)](_0xb359da(0xee))
              [_0xb359da(0x122)](_0xb359da(0x12f)),
            this[_0xb359da(0x121)],
          ),
            $(_0xb359da(0x1a4) + _0x3787bc + _0xb359da(0x185))[_0xb359da(0xae)](
              function () {
                const _0x1b0192 = _0xb359da,
                  _0x1ebda6 = $(this)[_0x1b0192(0x198)]("name");
                if (_0x1ebda6 && _0x1ebda6["startsWith"](_0x1b0192(0x1c3))) {
                  const _0x33ac1d = parseInt(_0x1ebda6["split"]("-")[0x1]);
                  !isNaN(_0x33ac1d) &&
                    _0x33ac1d > _0x2b981f &&
                    (_0x2b981f = _0x33ac1d);
                }
              },
            ),
            _0x2b981f++,
            (_0x486398 = this[_0xb359da(0x121)] + "-" + _0x2b981f),
            console[_0xb359da(0xd5)](_0x3787bc, _0x486398);
        } else
          _0x486398 =
            this[_0xb359da(0x121)] +
            "-" +
            (parseInt(
              $(_0xb359da(0x1bd) + _0x37e150 + "\x22]")
                ["last"]()
                [_0xb359da(0x16d)](),
            ) +
              0x1);
        $(this)[_0xb359da(0x174)](""),
          $(this)["attr"](_0xb359da(0x121), _0x486398),
          $(this)[_0xb359da(0x198)](_0xb359da(0xbe), _0x486398);
      }),
      _0x25ae48[_0x5c11a6(0x12c)](_0x5c11a6(0x1c1))[_0x5c11a6(0xae)](
        function () {
          const _0x2068f8 = _0x5c11a6;
          if ($(this)[_0x2068f8(0x1a8)](_0x2068f8(0xee))["length"] > 0x0) {
            let _0x565f1e = 0x0;
            const _0x13aaa0 = $(this)
              [_0x2068f8(0x1a8)](_0x2068f8(0xee))
              [_0x2068f8(0x122)](_0x2068f8(0x12f));
            console["log"](
              $(this)
                ["closest"](_0x2068f8(0xee))
                [_0x2068f8(0x122)](_0x2068f8(0x12f)),
              this["name"],
            ),
              $("[data-clone-input=\x22" + _0x13aaa0 + _0x2068f8(0x100))[
                _0x2068f8(0xae)
              ](function () {
                const _0x3cc2a0 = _0x2068f8,
                  _0x28ef92 = $(this)[_0x3cc2a0(0x198)](_0x3cc2a0(0x121));
                if (_0x28ef92 && _0x28ef92[_0x3cc2a0(0x155)]("relationship-")) {
                  const _0xd2f9a0 = parseInt(
                    _0x28ef92[_0x3cc2a0(0x192)]("-")[0x1],
                  );
                  !isNaN(_0xd2f9a0) &&
                    _0xd2f9a0 > _0x565f1e &&
                    (_0x565f1e = _0xd2f9a0);
                }
              }),
              _0x565f1e++,
              (_0x486398 = this[_0x2068f8(0x121)] + "-" + _0x565f1e),
              console[_0x2068f8(0xd5)](_0x13aaa0, _0x486398);
          } else
            _0x486398 =
              this[_0x2068f8(0x121)] +
              "-" +
              (parseInt(
                $(_0x2068f8(0x1bd) + _0x37e150 + "\x22]")
                  ["last"]()
                  ["index"](),
              ) +
                0x1);
          $(this)[_0x2068f8(0x174)](""),
            $(this)["attr"]("name", _0x486398),
            $(this)[_0x2068f8(0x198)](_0x2068f8(0xbe), _0x486398);
        },
      ),
      _0x25ae48[_0x5c11a6(0x12c)]("select")[_0x5c11a6(0xae)](function () {
        const _0x22e4ac = _0x5c11a6;
        if ($(this)[_0x22e4ac(0x1a8)](_0x22e4ac(0xee))[_0x22e4ac(0xe8)] > 0x0) {
          let _0x46f531 = 0x0;
          const _0x44a876 = $(this)
            [_0x22e4ac(0x1a8)]("[data-clone-input]")
            [_0x22e4ac(0x122)](_0x22e4ac(0x12f));
          console["log"](
            $(this)[_0x22e4ac(0x1a8)](_0x22e4ac(0xee))["data"]("clone-input"),
            this[_0x22e4ac(0x121)],
          ),
            $(_0x22e4ac(0x1a4) + _0x44a876 + _0x22e4ac(0xab))["each"](
              function () {
                const _0x58fb5b = _0x22e4ac,
                  _0x24517d = $(this)[_0x58fb5b(0x198)](_0x58fb5b(0x121));
                if (_0x24517d && _0x24517d["startsWith"]("relationship-")) {
                  const _0x1ef704 = parseInt(_0x24517d["split"]("-")[0x1]);
                  !isNaN(_0x1ef704) &&
                    _0x1ef704 > _0x46f531 &&
                    (_0x46f531 = _0x1ef704);
                }
              },
            ),
            _0x46f531++,
            (_0x486398 = this[_0x22e4ac(0x121)] + "-" + _0x46f531),
            console["log"](_0x44a876, _0x486398);
        } else
          _0x486398 =
            this[_0x22e4ac(0x121)] +
            "-" +
            (parseInt(
              $(_0x22e4ac(0x1bd) + _0x37e150 + "\x22]")
                [_0x22e4ac(0x15f)]()
                [_0x22e4ac(0x16d)](),
            ) +
              0x1);
        $(this)[_0x22e4ac(0x174)](""),
          $(this)[_0x22e4ac(0x198)](_0x22e4ac(0x121), _0x486398),
          $(this)[_0x22e4ac(0x198)](_0x22e4ac(0xbe), _0x486398);
      }),
      _0x45a583[_0x5c11a6(0x12c)]("[data-input-field]")[_0x5c11a6(0xae)](
        function () {
          const _0x2c18da = _0x5c11a6;
          if ($(this)["data"](_0x2c18da(0x1fa))) {
            let _0x3b5697 = 0x0;
            const _0x5bba08 = $(this)
              [_0x2c18da(0x122)](_0x2c18da(0x1fa))
              [_0x2c18da(0x192)]("-")[0x0];
            $(
              "[data-display=\x22" +
                _0x37e150 +
                _0x2c18da(0xad) +
                _0x5bba08 +
                "\x22]",
            )[_0x2c18da(0xae)](function () {
              const _0x416386 = _0x2c18da,
                _0x11d685 = $(this)[_0x416386(0x198)](_0x416386(0x1b4)),
                _0x165b49 = parseInt(_0x11d685[_0x416386(0x192)]("-")[0x1]);
              !isNaN(_0x165b49) &&
                _0x165b49 > _0x3b5697 &&
                (_0x3b5697 = _0x165b49);
            }),
              _0x3b5697++;
            const _0x39498d = _0x5bba08 + "-" + _0x3b5697;
            console[_0x2c18da(0xd5)](_0x39498d),
              $(this)["attr"](_0x2c18da(0x1b4), _0x39498d);
          }
        },
      ),
      $("[data-clone-wrapper=\x22" + _0x37e150 + "\x22]")[_0x5c11a6(0xe5)](
        _0x25ae48,
      ),
      $("[data-display-wrapper=\x22" + _0x37e150 + "\x22]")[_0x5c11a6(0xe5)](
        _0x45a583,
      ),
      $(_0x5c11a6(0x1b8) + _0x37e150 + "\x22]")["each"](function () {
        const _0x3f1d31 = _0x5c11a6;
        $(this)[_0x3f1d31(0x150)](
          $(this)
            [_0x3f1d31(0xcb)](_0x3f1d31(0x1bd) + _0x37e150 + "\x22]")
            [_0x3f1d31(0x16d)]() + 0x1,
        );
      }),
      $("[data-display-index=\x22" + _0x37e150 + "\x22]")[_0x5c11a6(0xae)](
        function () {
          const _0x491ba5 = _0x5c11a6;
          $(this)["text"](
            $(this)
              ["parents"](_0x491ba5(0x1aa) + _0x37e150 + "\x22]")
              [_0x491ba5(0x16d)]() + 0x1,
          );
        },
      ),
      validation();
  }),
  $(_0x548ec2(0x176))["on"](_0x548ec2(0xd1), function () {
    const _0x36dd66 = _0x548ec2,
      _0x5ab8b8 = $(this)["parents"](_0x36dd66(0x1bf))["index"]();
    let _0x376cc2 = $(this)["data"](_0x36dd66(0xe3));
    var _0x9227c1 = $("[data-clone-input=\x22" + _0x376cc2 + "\x22]")
        ["eq"](0x0)
        [_0x36dd66(0xd3)](!![]),
      _0x57c64f = $(_0x36dd66(0x17a) + _0x376cc2 + "\x22]")
        ["eq"](0x0)
        [_0x36dd66(0xd3)](!![]);
    $(this)[_0x36dd66(0x12c)](_0x36dd66(0x1f0))[_0x36dd66(0x179)](),
      cloneRemoveInput();
    let _0x36cbc8 = 0x0;
    $(_0x36dd66(0x1a4) + _0x376cc2 + _0x36dd66(0x185))[_0x36dd66(0xae)](
      function () {
        const _0x527555 = _0x36dd66,
          _0x3efff2 = $(this)[_0x527555(0x198)](_0x527555(0x121));
        if (_0x3efff2) {
          const _0x5339b9 = parseInt(_0x3efff2[_0x527555(0x192)]("-")[0x1]);
          !isNaN(_0x5339b9) && _0x5339b9 > _0x36cbc8 && (_0x36cbc8 = _0x5339b9);
        }
      },
    ),
      $("[data-clone-input=\x22" + _0x376cc2 + _0x36dd66(0xab))[
        _0x36dd66(0xae)
      ](function () {
        const _0x493917 = _0x36dd66,
          _0xed8492 = $(this)[_0x493917(0x198)](_0x493917(0x121));
        if (_0xed8492) {
          const _0x2e80ff = parseInt(_0xed8492[_0x493917(0x192)]("-")[0x1]);
          !isNaN(_0x2e80ff) && _0x2e80ff > _0x36cbc8 && (_0x36cbc8 = _0x2e80ff);
        }
      }),
      $(_0x36dd66(0x1a4) + _0x376cc2 + "\x22]\x20textarea")[_0x36dd66(0xae)](
        function () {
          const _0x461471 = _0x36dd66,
            _0x66b66b = $(this)[_0x461471(0x198)](_0x461471(0x121));
          if (_0x66b66b) {
            const _0x1a4ff4 = parseInt(_0x66b66b["split"]("-")[0x1]);
            !isNaN(_0x1a4ff4) &&
              _0x1a4ff4 > _0x36cbc8 &&
              (_0x36cbc8 = _0x1a4ff4);
          }
        },
      ),
      _0x36cbc8++,
      _0x9227c1[_0x36dd66(0x12c)]("input")[_0x36dd66(0xae)](function () {
        const _0x21f4e7 = _0x36dd66,
          _0x1c9285 = $(this)[_0x21f4e7(0x198)](_0x21f4e7(0x121));
        let _0x5814f6 = _0x1c9285 + "-" + _0x36cbc8;
        $(this)["val"](""),
          $(this)[_0x21f4e7(0x198)](_0x21f4e7(0x121), _0x5814f6),
          $(this)[_0x21f4e7(0x198)](_0x21f4e7(0xbe), _0x5814f6);
      }),
      _0x9227c1[_0x36dd66(0x12c)]("select")["each"](function () {
        const _0x433aa6 = _0x36dd66,
          _0xd1cd97 = $(this)[_0x433aa6(0x198)](_0x433aa6(0x121));
        let _0x1efb71 = _0xd1cd97 + "-" + _0x36cbc8;
        $(this)[_0x433aa6(0x174)](""),
          $(this)["attr"]("name", _0x1efb71),
          $(this)["attr"](_0x433aa6(0xbe), _0x1efb71);
      }),
      _0x9227c1[_0x36dd66(0x12c)]("textarea")[_0x36dd66(0xae)](function () {
        const _0x4e892c = _0x36dd66,
          _0x17915c = $(this)["attr"]("name");
        let _0x499e17 = _0x17915c + "-" + _0x36cbc8;
        $(this)[_0x4e892c(0x174)](""),
          $(this)[_0x4e892c(0x198)](_0x4e892c(0x121), _0x499e17),
          $(this)[_0x4e892c(0x198)]("data-name", _0x499e17);
      }),
      _0x57c64f["find"](_0x36dd66(0xed))[_0x36dd66(0xae)](function () {
        const _0x4e41a3 = _0x36dd66;
        $(this)[_0x4e41a3(0x198)](
          _0x4e41a3(0x1b4),
          "relationship-" + _0x36cbc8,
        );
      }),
      $(this)
        ["siblings"](_0x36dd66(0x1eb) + _0x376cc2 + "\x22]")
        [_0x36dd66(0xe5)](_0x9227c1),
      $(_0x36dd66(0x158))
        ["eq"](_0x5ab8b8)
        [_0x36dd66(0x12c)](_0x36dd66(0x217) + _0x376cc2 + "\x22]")
        [_0x36dd66(0xe5)](_0x57c64f),
      $(_0x36dd66(0x200) + _0x376cc2 + "\x22]")[_0x36dd66(0xae)](function () {
        const _0x32f974 = _0x36dd66;
        $(this)[_0x32f974(0x150)](
          $(this)
            [_0x32f974(0xcb)](_0x32f974(0x1a4) + _0x376cc2 + "\x22]")
            [_0x32f974(0x16d)]() + 0x1,
        );
      }),
      $(_0x36dd66(0x1a6) + _0x376cc2 + "\x22]")[_0x36dd66(0xae)](function () {
        const _0x27a632 = _0x36dd66;
        $(this)[_0x27a632(0x150)](
          $(this)
            [_0x27a632(0xcb)]("[data-display-input=\x22" + _0x376cc2 + "\x22]")
            ["index"]() + 0x1,
        );
      }),
      validation();
  }),
  $("[data-remove-upload]")["on"]("click", function () {
    const _0x14512c = _0x548ec2,
      _0x529865 = $(this)[_0x14512c(0x122)]("remove-upload");
    $(_0x14512c(0x1c9) + _0x529865 + "\x22]")[_0x14512c(0x174)](""),
      validation();
  });
function andLogic() {
  const _0x352281 = _0x548ec2;
  conditionalResult &&
    (steps["eq"](x)["find"](_0x352281(0x1ae))["hide"](),
    console[_0x352281(0xd5)](_0x352281(0xf0)),
    steps["eq"](x)
      ["find"](_0x352281(0x1ae))
      [_0x352281(0xae)](function () {
        const _0x14ae1f = _0x352281;
        function _0x375073(_0x505377) {
          const _0x2a479f = _0x5c6d,
            _0x2917c1 = _0x505377[_0x2a479f(0x192)]("&"),
            _0x456c2d = [];
          return (
            _0x2917c1[_0x2a479f(0xc1)]((_0x5674b1) => {
              const _0x47a330 = _0x2a479f,
                [_0x347e91, _0xa8b6bf] = _0x5674b1[_0x47a330(0x192)]("=");
              _0x456c2d[_0x47a330(0x15b)]({
                field: _0x347e91,
                value: _0xa8b6bf,
              });
            }),
            _0x456c2d
          );
        }
        const _0x79429f = $(this)[_0x14ae1f(0x198)](_0x14ae1f(0xa8));
        console[_0x14ae1f(0xd5)](_0x79429f);
        const _0x57d794 = _0x375073(_0x79429f);
        function _0x465f55(_0x135d18, _0x3415e6) {
          return _0x3415e6["some"]((_0x1bf78f, _0x287744) => {
            const _0x297de6 = _0x5c6d;
            if (
              _0x135d18[0x0] &&
              _0x1bf78f[_0x297de6(0x181)] === _0x135d18[0x0]["field"]
            )
              return _0x135d18[_0x297de6(0x213)](
                (_0x18a397, _0x60a5c5) =>
                  _0x3415e6[_0x287744 + _0x60a5c5] &&
                  _0x3415e6[_0x287744 + _0x60a5c5][_0x297de6(0x181)] ===
                    _0x18a397[_0x297de6(0x181)] &&
                  _0x3415e6[_0x287744 + _0x60a5c5][_0x297de6(0x16c)] ===
                    _0x18a397["value"],
              );
            return ![];
          });
        }
        const _0x16610d = _0x465f55(_0x57d794, all_data);
        _0x16610d ? $(this)[_0x14ae1f(0x179)]() : $(this)[_0x14ae1f(0x1ba)]();
      }));
}
$(_0x548ec2(0x1e6))[_0x548ec2(0x1dd)](_0x548ec2(0x1ba)),
  $(_0x548ec2(0x13c))["on"](_0x548ec2(0x1df), function () {
    const _0x550054 = _0x548ec2,
      _0x47280e = $(this)["data"]("progressive-input"),
      _0xcd8894 = $(this)[_0x550054(0x174)](),
      _0x1fd066 = $(_0x550054(0x128) + _0x47280e + "\x22]")[_0x550054(0x122)](
        _0x550054(0x117),
      );
    let _0xfbc059 = $(
        _0x550054(0x128) + _0x47280e + _0x550054(0x1cb) + _0xcd8894 + "\x22]",
      ),
      _0x41c589 = $(
        _0x550054(0x128) +
          _0x47280e +
          "\x22][data-progressive-input-value=\x22*\x22]",
      );
    $("[data-progressive-target=\x22" + _0x47280e + "\x22]")[_0x550054(0x1dd)](
      "hide",
    ),
      $(_0x550054(0x128) + _0x47280e + "\x22]")[_0x550054(0x120)]("show");
    _0xcd8894 !== "" &&
      (_0x1fd066 === "*" && _0xcd8894 !== ""
        ? (_0x41c589[_0x550054(0x120)](_0x550054(0x1ba)),
          _0x41c589[_0x550054(0x1dd)]("show"))
        : (_0xfbc059[_0x550054(0x120)]("hide"),
          _0xfbc059[_0x550054(0x1dd)](_0x550054(0x179))));
    function _0x1cee25(_0x35726b) {
      const _0x4b7130 = _0x550054;
      _0x35726b &&
        $("[data-progressive-input=\x22" + _0x35726b + "\x22]")[
          _0x4b7130(0x174)
        ]() !== "" &&
        $("[data-progressive-input=\x22" + _0x35726b + "\x22]")["trigger"](
          _0x4b7130(0x1df),
        );
    }
    let _0x40eb03 = $(_0x550054(0x128) + _0x47280e + "\x22]")
      [_0x550054(0x12c)](_0x550054(0x13c))
      [_0x550054(0x122)]("progressive-input");
    _0x1cee25(_0x40eb03),
      $("[data-progressive-input]:not(:visible)")["each"](function () {
        const _0x25f76c = _0x550054,
          _0x58cb6f = $(this)["data"](_0x25f76c(0x20f));
        $(_0x25f76c(0x128) + _0x58cb6f + "\x22]")[_0x25f76c(0x120)](
          _0x25f76c(0x179),
        ),
          $(_0x25f76c(0x128) + _0x58cb6f + "\x22]")[_0x25f76c(0x1dd)](
            _0x25f76c(0x1ba),
          );
      });
  });
function addClickClass() {
  const _0x12031b = _0x548ec2,
    _0x4e03c1 = $(this)[_0x12031b(0x122)](_0x12031b(0xe1)),
    _0xcb5c43 = $(this)[_0x12031b(0x198)](_0x12031b(0x1ee)),
    _0x5d6d24 = $(this)[_0x12031b(0x198)](_0x12031b(0x121));
  console["log"](
    "radio",
    $(this)["is"](":checked"),
    $(this)["attr"](_0x12031b(0x121)),
  ),
    $(_0x12031b(0x1c9) + _0x5d6d24 + "\x22]")
      [_0x12031b(0x20c)]()
      [_0x12031b(0x120)](_0x4e03c1),
    $(this)["is"](_0x12031b(0x1f3)) &&
      $(this)["parent"]()[_0x12031b(0x1dd)](_0x4e03c1);
}
$("[data-click-addclass]")["on"](_0x548ec2(0x194), addClickClass),
  scrollTop(),
  cloneRemove(),
  cloneRemoveInput();
const formlyUrlParams = new URLSearchParams(
    window[_0x548ec2(0x188)][_0x548ec2(0x212)],
  ),
  formlySupportParam = formlyUrlParams["get"](_0x548ec2(0x1bb)),
  showButton = formlySupportParam === "true",
  passIcon = _0x548ec2(0x215),
  failIcon = _0x548ec2(0x197);
let isScriptLoaded = !![],
  scriptLocation = _0x548ec2(0x109),
  isMultistepAttributePresent = !![],
  isMultistepOnFormElement = !![],
  areButtonsPresent = !![],
  isNextBtnOnSubmit = ![],
  isSubmitBtnOnSubmit = !![],
  isBackBtnOnSubmit = ![],
  formType = logicExtra ? _0x548ec2(0x111) : "Basic\x20(No\x20Formly\x20Logic)",
  resultStatus = "PASS",
  scriptSrcAdded = "";
function isElementPresent(_0x2fb009, _0x5088fe) {
  return (
    document["querySelector"](
      "[" + _0x5088fe + "=\x22" + _0x2fb009 + "\x22]",
    ) !== null
  );
}
isMultistepAttributePresent = isElementPresent("multistep", "data-form");
const multistepForm = document[_0x548ec2(0x1dc)](_0x548ec2(0xce)),
  formStepLength = multistepForm[_0x548ec2(0x202)](_0x548ec2(0x19f))[
    _0x548ec2(0xe8)
  ];
isMultistepOnFormElement = multistepForm !== null;
const multistepContainer = document["querySelector"](_0x548ec2(0x115)),
  nextBtn = multistepContainer[_0x548ec2(0x1dc)](_0x548ec2(0x14a)),
  backBtn = multistepContainer[_0x548ec2(0x1dc)](_0x548ec2(0x1bc)),
  submitBtn = multistepContainer[_0x548ec2(0x1dc)](
    "[data-form=\x22submit-btn\x22]",
  );
(areButtonsPresent =
  nextBtn !== null && backBtn !== null && submitBtn !== null),
  (isNextBtnOnSubmit =
    nextBtn &&
    nextBtn[_0x548ec2(0xb2)][_0x548ec2(0xe2)]() === _0x548ec2(0x1df)),
  (isSubmitBtnOnSubmit =
    submitBtn &&
    submitBtn[_0x548ec2(0xb2)][_0x548ec2(0xe2)]() === _0x548ec2(0x1df) &&
    submitBtn[_0x548ec2(0x1ee)][_0x548ec2(0xe2)]() === _0x548ec2(0x124)),
  (isBackBtnOnSubmit =
    backBtn && backBtn[_0x548ec2(0xb2)]["toLowerCase"]() === _0x548ec2(0x1df));
const checkPowerup = (_0x567e96) =>
    document[_0x548ec2(0x1dc)](_0x567e96) !== null,
  progressBarAttr = checkPowerup(_0x548ec2(0x1d1)),
  progressIndicatorAttr = checkPowerup(_0x548ec2(0xc4)),
  customProgressAttr = checkPowerup(_0x548ec2(0xc4)),
  cardDivAttr = checkPowerup(_0x548ec2(0x10c)),
  currentStepAttr = checkPowerup(_0x548ec2(0x20e)),
  totalStepAttr = checkPowerup(_0x548ec2(0x1d7)),
  enterAttr = checkPowerup("[data-enter=\x22true\x22]"),
  submitAttr = checkPowerup(_0x548ec2(0xec)),
  radioSkipAttr = checkPowerup(_0x548ec2(0x161)),
  customCheckboxAttr = checkPowerup(_0x548ec2(0xb6)),
  recapatchaAttr = checkPowerup(_0x548ec2(0x163));
(!isScriptLoaded ||
  scriptLocation !== _0x548ec2(0x109) ||
  !isMultistepAttributePresent ||
  !isMultistepOnFormElement ||
  !areButtonsPresent ||
  isNextBtnOnSubmit ||
  !isSubmitBtnOnSubmit ||
  isBackBtnOnSubmit) &&
  (resultStatus = _0x548ec2(0x1fe));
function isScriptUrlMatch(_0x4fd4b2, _0x31678b) {
  const _0x2f1d9c = _0x548ec2;
  for (
    var _0x2c8834 = 0x0;
    _0x2c8834 < _0x31678b[_0x2f1d9c(0xe8)];
    _0x2c8834++
  ) {
    if (_0x4fd4b2["includes"](_0x31678b[_0x2c8834])) return !![];
  }
  return ![];
}
var keywordsToCheck = ["videsigns", "formly"],
  scripts = document["getElementsByTagName"](_0x548ec2(0x125)),
  matchedScripts = [];
for (var i = 0x0; i < scripts[_0x548ec2(0xe8)]; i++) {
  var scriptSrcs = scripts[i][_0x548ec2(0x1f2)];
  isScriptUrlMatch(scriptSrcs, keywordsToCheck) &&
    matchedScripts[_0x548ec2(0x15b)](scriptSrcs);
}
if (matchedScripts["length"] > 0x0) {
  scriptSrcAdded = matchedScripts;
  const script = document[_0x548ec2(0x1dc)](
    _0x548ec2(0x13f) + scriptSrcAdded + "\x22]",
  );
  script &&
    (scriptLocation =
      script[_0x548ec2(0x129)][_0x548ec2(0xb2)] === _0x548ec2(0x154)
        ? _0x548ec2(0xa4)
        : _0x548ec2(0x10d));
} else scriptSrcAdded = _0x548ec2(0xb5) + failIcon;
const newElement = document[_0x548ec2(0x11c)](_0x548ec2(0xa5)),
  newStyle = document[_0x548ec2(0x11c)](_0x548ec2(0x164));
(newStyle[_0x548ec2(0x1d0)] =
  "\x0a\x20\x20.f-icon-embed-xxsmall-2\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#ff3232\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x20\x20.f-icon-embed-xxsmall\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#57ff4b\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20{\x0a\x20\x20\x20\x20height:\x20100%\x20!important;\x0a\x20\x20\x20\x20width:\x200;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20z-index:\x20999999999999\x20!important;\x0a\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20background-color:\x20#081019\x20!important;\x0a\x20\x20\x20\x20overflow-x:\x20hidden\x20!important;\x0a\x20\x20\x20\x20padding-top:\x2060px\x20!important;\x0a\x20\x20\x20\x20transition:\x200.5s\x20!important;\x0a\x20\x20\x20\x20font-size:\x2015px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73)\x20!important;\x0a\x20\x20\x20\x20font-family:system-ui\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-section-title-text,\x20.f-support-text,\x20.f-openbtn{\x0a\x20\x20\x20\x20font-size:\x2015px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73);\x0a\x20\x20\x20\x20font-family:system-ui\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20p,\x20.f-sidenav\x20strong\x20{\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20space-between\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x204px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73);\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20.f-closebtn\x20{\x0a\x20\x20\x20\x20position:\x20absolute\x20!important;\x0a\x20\x20\x20\x20top:\x2025px\x20!important;\x0a\x20\x20\x20\x20right:\x2025px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2036px\x20!important;\x0a\x20\x20\x20\x20margin-left:\x2050px\x20!important;\x0a\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20color:\x20#e7e7e7\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-core-setup\x20{\x0a\x20\x20\x20\x20padding:\x2012px\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x2011px\x20!important;\x0a\x20\x20\x20\x20border-radius:\x206px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20#f-main\x20{\x0a\x20\x20\x20\x20transition:\x20margin-left\x20.5s\x20!important;\x0a\x20\x20\x20\x20padding:\x2020px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-main-content\x20{\x0a\x20\x20\x20\x20transition:\x20margin-left\x20.5s\x20!important;\x0a\x20\x20\x20\x20padding:\x2020px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-form-step\x20{\x0a\x20\x20\x20\x20padding-left:\x2010px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-openbtn\x20{\x0a\x20\x20\x20\x20white-space:\x20nowrap\x20!important;\x0a\x20\x20\x20\x20cursor:\x20pointer\x20!important;\x0a\x20\x20\x20\x20box-shadow:\x200\x200\x200\x201px\x20rgba(0,\x200,\x200,\x20.1),\x200\x201px\x203px\x20rgba(0,\x200,\x200,\x20.1)\x20!important;\x0a\x20\x20\x20\x20visibility:\x20visible\x20!important;\x0a\x20\x20\x20\x20z-index:\x2099\x20!important;\x0a\x20\x20\x20\x20color:\x20#e7e7e7\x20!important;\x0a\x20\x20\x20\x20opacity:\x201\x20!important;\x0a\x20\x20\x20\x20width:\x20auto\x20!important;\x0a\x20\x20\x20\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20background-color:\x20#1e1e1e\x20!important;\x0a\x20\x20\x20\x20border-radius:\x203px\x20!important;\x0a\x20\x20\x20\x20margin:\x200\x20!important;\x0a\x20\x20\x20\x20padding:\x206px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2013px\x20!important;\x0a\x20\x20\x20\x20line-height:\x2014px\x20!important;\x0a\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20top:\x20auto\x20!important;\x0a\x20\x20\x20\x20bottom:\x2012px\x20!important;\x0a\x20\x20\x20\x20left:\x2012px\x20!important;\x0a\x20\x20\x20\x20right:\x20auto\x20!important;\x0a\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20transform:\x20none\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-text-header{\x0a\x20\x20\x20\x20color:\x20#fff\x20!important;\x0a\x20\x20\x20\x20font-size:\x201.8rem\x20!important;\x0a\x20\x20\x20\x20font-weight:\x20600\x20!important;\x0a\x20\x20\x20\x20line-height:\x201.2\x20!important;\x0a\x20\x20\x20\x20margin-bottom:4px\x0a\x20\x20}\x0a\x0a\x20\x20@media\x20screen\x20and\x20(max-height:\x20450px)\x20{\x0a\x20\x20\x20\x20.sidenav\x20{\x20padding-top:\x2015px\x20!important;\x20}\x0a\x20\x20\x20\x20.sidenav\x20a\x20{\x20font-size:\x2018px\x20!important;\x20}\x0a\x20\x20}\x0a\x0a\x20\x20.f-section-title-text{\x0a\x20\x20\x20\x20color:\x20#fff\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x2010px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2018px\x20!important;\x0a\x20\x20\x20\x20font-weight:\x20700\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-div-support-section{\x0a\x20\x20\x20\x20padding-top:1rem\x20!important;\x0a\x20\x20\x20\x20padding-bottom:1rem\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-text-white{\x0a\x20\x20\x20\x20color:\x20white\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-spacer{\x0a\x20\x20\x20\x20padding-top:8px\x20!important;\x0a\x20\x20}\x0a"),
  document[_0x548ec2(0x109)][_0x548ec2(0x15e)](newStyle);
showButton && document[_0x548ec2(0xdb)][_0x548ec2(0x15e)](newElement);
newElement[_0x548ec2(0x1d0)] =
  _0x548ec2(0x1d2) +
  formType +
  "</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Formly\x20Script\x20Info</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>Script\x20URL:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>" +
  scriptSrcAdded +
  _0x548ec2(0x10b) +
  scriptLocation +
  "</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Attributes</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>1.\x20Form:\x20data-form=multistep\x20" +
  (isMultistepOnFormElement ? passIcon : failIcon) +
  _0x548ec2(0x20a) +
  (formStepLength > 0x0 ? passIcon : failIcon) +
  _0x548ec2(0x1d8) +
  formStepLength +
  _0x548ec2(0x211) +
  (nextBtn ? passIcon : failIcon) +
  _0x548ec2(0xbc) +
  (isNextBtnOnSubmit ? failIcon : passIcon) +
  _0x548ec2(0x10a) +
  (backBtn ? passIcon : failIcon) +
  _0x548ec2(0x113) +
  (isBackBtnOnSubmit ? failIcon : passIcon) +
  "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>5.\x20Submit\x20Buttons:\x20data-form=next-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Submit\x20button\x20present?\x20" +
  (backBtn ? passIcon : failIcon) +
  _0x548ec2(0x1b2) +
  (isSubmitBtnOnSubmit ? passIcon : failIcon) +
  _0x548ec2(0x1f1) +
  (progressBarAttr && progressIndicatorAttr
    ? _0x548ec2(0x1ca) + passIcon + _0x548ec2(0xf8)
    : "") +
  _0x548ec2(0x182) +
  (customProgressAttr ? _0x548ec2(0x1a7) + passIcon + _0x548ec2(0xf8) : "") +
  _0x548ec2(0x182) +
  (cardDivAttr ? _0x548ec2(0x1a1) + passIcon + _0x548ec2(0xf8) : "") +
  "\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
  (currentStepAttr ? _0x548ec2(0x214) + passIcon + "</strong>" : "") +
  _0x548ec2(0x182) +
  (totalStepAttr
    ? "<strong\x20class=\x22f-text-white\x22>Total\x20Step\x20Text\x20" +
      passIcon +
      _0x548ec2(0xf8)
    : "") +
  _0x548ec2(0x182) +
  (enterAttr ? _0x548ec2(0x143) + passIcon + _0x548ec2(0xf8) : "") +
  _0x548ec2(0x182) +
  (submitAttr ? _0x548ec2(0x11a) + passIcon + _0x548ec2(0xf8) : "") +
  _0x548ec2(0x182) +
  (radioSkipAttr ? _0x548ec2(0xb4) + passIcon + _0x548ec2(0xf8) : "") +
  _0x548ec2(0x182) +
  (customCheckboxAttr ? _0x548ec2(0xdc) + passIcon + _0x548ec2(0xf8) : "") +
  _0x548ec2(0x182) +
  (recapatchaAttr ? _0x548ec2(0x1da) + passIcon + _0x548ec2(0xf8) : "") +
  _0x548ec2(0xf2);
function openNav() {
  const _0x22c678 = _0x548ec2;
  (document[_0x22c678(0x193)](_0x22c678(0x1b3))[_0x22c678(0x164)][
    _0x22c678(0x11d)
  ] = _0x22c678(0xff)),
    (document[_0x22c678(0x193)](_0x22c678(0x1b3))["style"][_0x22c678(0x1a2)] =
      _0x22c678(0x1f8));
}
function closeNav() {
  const _0x56db86 = _0x548ec2;
  (document[_0x56db86(0x193)]("f-mySidenav")["style"]["width"] = "0"),
    (document[_0x56db86(0x193)](_0x56db86(0x1b3))[_0x56db86(0x164)][
      _0x56db86(0x1a2)
    ] = "0px");
}
