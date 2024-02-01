//1st Feb 2023
//Bug fix
//2. Recurring form issue

const _0x16b068 = _0x1e6f;
(function (_0x12c3e0, _0x9bb2f4) {
  const _0x57a8c7 = _0x1e6f,
    _0xad2623 = _0x12c3e0();
  while (!![]) {
    try {
      const _0x29f385 =
        parseInt(_0x57a8c7(0x24b)) / 0x1 +
        parseInt(_0x57a8c7(0x1a8)) / 0x2 +
        (parseInt(_0x57a8c7(0x278)) / 0x3) *
          (-parseInt(_0x57a8c7(0x269)) / 0x4) +
        -parseInt(_0x57a8c7(0x279)) / 0x5 +
        -parseInt(_0x57a8c7(0x151)) / 0x6 +
        -parseInt(_0x57a8c7(0x19d)) / 0x7 +
        (parseInt(_0x57a8c7(0x192)) / 0x8) * (parseInt(_0x57a8c7(0x23f)) / 0x9);
      if (_0x29f385 === _0x9bb2f4) break;
      else _0xad2623["push"](_0xad2623["shift"]());
    } catch (_0x36fed7) {
      _0xad2623["push"](_0xad2623["shift"]());
    }
  }
})(_0x556c, 0xcfdb7);
let x = 0x0,
  lastStep = 0x0,
  curStep = 0x0,
  steps = $(_0x16b068(0x169)),
  progressbarClone = $("[data-form=\x22progress-indicator\x22]")["clone"](),
  progressbar,
  countCard = !![],
  weightedSelection = $("[data-weighted-selection]")[_0x16b068(0x1be)](
    _0x16b068(0x201),
  ),
  weightedSelectionRange = $(_0x16b068(0x24a))[_0x16b068(0x1be)](
    _0x16b068(0x1f4),
  ),
  selectMultiple = $(_0x16b068(0x251))[_0x16b068(0x1be)](_0x16b068(0x143)),
  customError = $("[data-custom-error-message]")[_0x16b068(0x1be)](
    _0x16b068(0x1b0),
  ),
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
  reinitIX = $(_0x16b068(0x1d7))[_0x16b068(0x1be)](_0x16b068(0x1bc)),
  textareaLength = 0x0,
  textInputLength = 0x0,
  emailInputLength = 0x0,
  selectInputLength = 0x0,
  checkboxInputLength = 0x0,
  filledInput = [],
  savedFilledInput = [],
  memory = $("[data-memory]")["data"]("memory"),
  quiz = $(_0x16b068(0x21f))[_0x16b068(0x1be)](_0x16b068(0x1d8)),
  progress = 0x0;
const urlFormly = new URL(window[_0x16b068(0x181)][_0x16b068(0x204)]);
let _params = $(_0x16b068(0x128))[_0x16b068(0x1be)]("query-param"),
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
  logicExtra = $(_0x16b068(0x1ca))[_0x16b068(0x1be)](_0x16b068(0x240)),
  oldSubmitText = $("[data-form=\x22submit-btn\x22]")["val"](),
  oldResetText = $(_0x16b068(0x175))[_0x16b068(0x1c5)](),
  formReset = $("[data-form=\x22multistep\x22]")[_0x16b068(0x1be)]("reset"),
  successCard = "",
  redirectTo = "",
  totalSteps = 0x0,
  checkCount = 0x0,
  resetDelay = $("[data-reset-delay]")["data"](_0x16b068(0x258))
    ? $(_0x16b068(0x172))["data"]("reset-delay")
    : 0x7d0,
  redirectDelay = $("[data-redirect-delay]")[_0x16b068(0x1be)](_0x16b068(0x17e))
    ? $(_0x16b068(0x22a))["data"](_0x16b068(0x17e))
    : 0x7d0,
  newTab = !![],
  unfilledArr = [],
  phoneFormat = $(_0x16b068(0x1ca))[_0x16b068(0x1be)](_0x16b068(0x139)),
  scrollToTop = $("[data-form=\x22multistep\x22]")[_0x16b068(0x1be)](
    "scroll-top",
  ),
  trackLastStep = $(_0x16b068(0x1d1))[_0x16b068(0x1be)](_0x16b068(0x271)),
  conditionalResult =
    $(_0x16b068(0x158))[_0x16b068(0x1be)](_0x16b068(0x13c)) ===
    _0x16b068(0x254),
  scrollTopOffset = parseInt(
    $(_0x16b068(0x1ca))[_0x16b068(0x1be)](_0x16b068(0x1b2)),
  ),
  notRobot = !![],
  all_data = [];
const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
(savedFilledInput = JSON[_0x16b068(0x1da)](
  localStorage[_0x16b068(0x1aa)](_0x16b068(0x1ad)),
)),
  (formlyLastStep = JSON[_0x16b068(0x1da)](
    localStorage["getItem"]("formlyLastStep"),
  )),
  (formlyLastStepAnswer = JSON[_0x16b068(0x1da)](
    localStorage[_0x16b068(0x1aa)](_0x16b068(0x1d9)),
  ));
var ogCloneArr = [];
trackLastStep &&
  (formlyLastStep > x && (x = formlyLastStep),
  formlyLastStepAnswer && (selections = formlyLastStepAnswer));
$(_0x16b068(0x26b))["each"](function () {
  const _0x527157 = _0x16b068;
  ogCloneArr[_0x527157(0x215)]({
    name: $(this)[_0x527157(0x1be)](_0x527157(0x1e9)),
    element: $(this)["clone"](!![]),
    display: $(
      "[data-display=\x22" +
        $(this)[_0x527157(0x1be)](_0x527157(0x1e9)) +
        "\x22]",
    )
      ["eq"](0x0)
      [_0x527157(0x1e9)](!![]),
  });
});
$(_0x16b068(0x1f8))[_0x16b068(0x17c)] > 0x0 && (notRobot = ![]);
function recaptcha(_0x5c0499) {
  notRobot = !![];
}
$(_0x16b068(0x228))[_0x16b068(0x17c)] > 0x0 &&
  (countCard = $(_0x16b068(0x228))[_0x16b068(0x1be)](_0x16b068(0x147)));
$(_0x16b068(0x1eb))[_0x16b068(0x198)](),
  $(progressbarClone)[_0x16b068(0x1e7)](_0x16b068(0x16f)),
  $(_0x16b068(0x182))[_0x16b068(0x25b)]()[_0x16b068(0x21b)](),
  $(_0x16b068(0x184))[_0x16b068(0x198)](),
  $(_0x16b068(0x141))[_0x16b068(0x198)](),
  steps[_0x16b068(0x1bd)](function () {
    const _0xabc0f7 = _0x16b068;
    $(_0xabc0f7(0x182))["append"](
      progressbarClone[_0xabc0f7(0x1e9)](!![], !![]),
    );
  }),
  $(_0x16b068(0x170))[_0x16b068(0x198)]();
countCard
  ? ((curStep = curStep + 0x1),
    (totalSteps = steps[_0x16b068(0x17c)]),
    $(_0x16b068(0x167))[_0x16b068(0x1c5)](totalSteps))
  : ($(steps[x])[_0x16b068(0x1be)](_0x16b068(0x236))
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    (totalSteps = $(_0x16b068(0x207))[_0x16b068(0x17c)]),
    $(_0x16b068(0x167))["text"](totalSteps),
    $(_0x16b068(0x1cf))[_0x16b068(0x1bd)](function () {
      const _0xdefae = _0x16b068;
      $($(_0xdefae(0x16d))[$(this)[_0xdefae(0x187)]()])[_0xdefae(0x198)]();
    }));
(progressbar = $(_0x16b068(0x182))[_0x16b068(0x25b)]()),
  $(_0x16b068(0x16d))["on"](_0x16b068(0x274), clickableIndicator),
  $(_0x16b068(0x266))[_0x16b068(0x1c5)](curStep),
  steps[_0x16b068(0x198)](),
  $("[data-success-card]")["hide"](),
  $("[data-form=\x22next-btn\x22][type=\x22submit\x22]")[_0x16b068(0x1bd)](
    function () {
      const _0x5067c3 = _0x16b068;
      $(this)[_0x5067c3(0x1dc)](_0x5067c3(0x189), "button");
    },
  );
function getParams() {
  const _0x4b17a5 = _0x16b068;
  urlFormly[_0x4b17a5(0x241)]["forEach"](function (_0x218e86, _0x184699) {
    searchQ["push"]({ val: _0x218e86, key: _0x184699 });
  });
}
function getSafe(_0x53eb5c, _0x12205c) {
  try {
    return _0x53eb5c();
  } catch (_0x46af79) {
    return _0x12205c;
  }
}
function phoneAutoFormat(_0x15a61c) {
  var _0x51e58d = "";
  return function (_0xca7823) {
    const _0x2041d8 = _0x1e6f;
    var _0x6fb3ed = "",
      _0x258004 = _0xca7823[_0x2041d8(0x1ae)](/\D/g, ""),
      _0x130493 = 0x0,
      _0x126735 = 0x0;
    while (
      _0x130493 < _0x258004[_0x2041d8(0x17c)] &&
      _0x126735 < _0x15a61c[_0x2041d8(0x17c)]
    ) {
      _0x15a61c[_0x126735] === "x"
        ? ((_0x6fb3ed += _0x258004[_0x130493]), _0x130493++)
        : (_0x6fb3ed += _0x15a61c[_0x126735]),
        _0x126735++;
    }
    if (_0xca7823[_0x2041d8(0x17c)] < _0x51e58d[_0x2041d8(0x17c)]) {
      var _0x1b41cf = _0x15a61c[_0x2041d8(0x14b)](_0x126735);
      _0x6fb3ed += _0x1b41cf["replace"](/x/g, "");
    }
    return (_0x51e58d = _0x6fb3ed), _0x6fb3ed;
  };
}
function validateURL(_0x4cad94) {
  return urlPattern["test"](_0x4cad94) ? !![] : ![];
}
quiz &&
  steps["each"](function () {
    const _0x48f116 = _0x16b068;
    $(this)[_0x48f116(0x25b)]()[_0x48f116(0x1dc)](_0x48f116(0x20e), !![]),
      $(this)["children"]()[_0x48f116(0x1dc)](_0x48f116(0x1fe), 0xfa);
  });
function disableBtn(_0x27d54e) {
  const _0x455692 = _0x16b068;
  (fill = ![]),
    !customError &&
      ($("[data-form=\x22next-btn\x22]")["css"]({
        opacity: "0.4",
        "pointer-events": _0x455692(0x162),
      }),
      $("[data-form=\x22next-btn\x22]")[_0x455692(0x156)](_0x455692(0x253)),
      $(_0x455692(0x184))["css"]({
        opacity: "0.4",
        "pointer-events": _0x455692(0x162),
      }),
      $(_0x455692(0x184))[_0x455692(0x156)](_0x455692(0x253)),
      $(_0x455692(0x141))[_0x455692(0x154)]({
        opacity: _0x455692(0x1b3),
        "pointer-events": _0x455692(0x162),
      }),
      $(_0x455692(0x141))["addClass"](_0x455692(0x253)));
}
function enableBtn() {
  const _0x3fff3e = _0x16b068;
  (fill = !![]),
    $(_0x3fff3e(0x275))[_0x3fff3e(0x154)]({
      "pointer-events": _0x3fff3e(0x1bb),
      opacity: "1",
    }),
    $("[data-form=\x22next-btn\x22]")[_0x3fff3e(0x1e7)](_0x3fff3e(0x253)),
    $(_0x3fff3e(0x184))[_0x3fff3e(0x154)]({
      "pointer-events": "auto",
      opacity: "1",
    }),
    $(_0x3fff3e(0x184))[_0x3fff3e(0x1e7)]("disabled"),
    $(_0x3fff3e(0x141))["css"]({
      "pointer-events": _0x3fff3e(0x1bb),
      opacity: "1",
    }),
    $(_0x3fff3e(0x141))[_0x3fff3e(0x1e7)](_0x3fff3e(0x253));
}
function saveLastAnswer(_0x2aae7a) {
  const _0xc6be15 = _0x16b068;
  localStorage["removeItem"]("formlyLastStepAnswer"),
    localStorage[_0xc6be15(0x1a4)](
      "formlyLastStepAnswer",
      JSON[_0xc6be15(0x155)](_0x2aae7a),
    );
}
function saveFilledInput() {
  const _0x41ed0d = _0x16b068;
  $(_0x41ed0d(0x19b))
    [_0x41ed0d(0x212)](_0x41ed0d(0x242))
    [_0x41ed0d(0x1bd)](function () {
      const _0x5654d0 = _0x41ed0d;
      $(this)["attr"](_0x5654d0(0x189)) === "checkbox" ||
      $(this)["attr"](_0x5654d0(0x189)) === "radio"
        ? $(this)[_0x5654d0(0x163)]("checked") &&
          (filledInput[_0x5654d0(0x12e)](
            (_0x20a468) =>
              _0x20a468[_0x5654d0(0x13d)] ===
              $(this)[_0x5654d0(0x1dc)](_0x5654d0(0x265)),
          )
            ? ((filledInput = filledInput[_0x5654d0(0x142)](
                (_0xb9f4c5) =>
                  _0xb9f4c5["inputName"] !== $(this)[_0x5654d0(0x1dc)]("name"),
              )),
              $(this)[_0x5654d0(0x27a)]() !== "" &&
                filledInput[_0x5654d0(0x215)]({
                  inputName: $(this)[_0x5654d0(0x1dc)](_0x5654d0(0x265)),
                  value: $(this)[_0x5654d0(0x27a)](),
                }))
            : $(this)[_0x5654d0(0x27a)]() !== "" &&
              filledInput[_0x5654d0(0x215)]({
                inputName: $(this)[_0x5654d0(0x1dc)](_0x5654d0(0x265)),
                value: $(this)[_0x5654d0(0x27a)](),
              }))
        : filledInput[_0x5654d0(0x12e)](
              (_0x4fb415) =>
                _0x4fb415[_0x5654d0(0x13d)] ===
                $(this)["attr"](_0x5654d0(0x265)),
            )
          ? ((filledInput = filledInput[_0x5654d0(0x142)](
              (_0x321f9a) =>
                _0x321f9a[_0x5654d0(0x13d)] !==
                $(this)["attr"](_0x5654d0(0x265)),
            )),
            $(this)[_0x5654d0(0x27a)]() !== "" &&
              filledInput["push"]({
                inputName: $(this)[_0x5654d0(0x1dc)]("name"),
                value: $(this)[_0x5654d0(0x27a)](),
              }))
          : $(this)[_0x5654d0(0x27a)]() !== "" &&
            filledInput[_0x5654d0(0x215)]({
              inputName: $(this)[_0x5654d0(0x1dc)](_0x5654d0(0x265)),
              value: $(this)[_0x5654d0(0x27a)](),
            });
    }),
    trackLastStep &&
      (formlyLastStep > x ? (lastStep = formlyLastStep) : (lastStep = x),
      localStorage["removeItem"]("formlyLastStep"),
      localStorage[_0x41ed0d(0x1a4)](_0x41ed0d(0x1f1), lastStep)),
    localStorage["removeItem"](_0x41ed0d(0x1ad)),
    localStorage[_0x41ed0d(0x1a4)](
      _0x41ed0d(0x1ad),
      JSON[_0x41ed0d(0x155)](filledInput),
    );
}
function scrollTop() {
  const _0x10b07b = _0x16b068;
  scrollToTop &&
    $(_0x10b07b(0x166))["animate"](
      {
        scrollTop:
          $(_0x10b07b(0x1ca))[_0x10b07b(0x18f)]()[_0x10b07b(0x213)] -
          scrollTopOffset,
      },
      0x3e8,
    );
}
function updateStep() {
  const _0x9a14f8 = _0x16b068;
  scrollTop(),
    (skip = ![]),
    $(_0x9a14f8(0x1db))["removeClass"](_0x9a14f8(0x253));
  $("[data-clickable]")["data"]("clickable") &&
    (steps[_0x9a14f8(0x133)](":input[required]")["each"](function () {
      const _0x2b317f = _0x9a14f8;
      $(
        $(_0x2b317f(0x1db))[
          $(this)
            [_0x2b317f(0x26a)]("[data-form=\x22step\x22]")
            [_0x2b317f(0x187)]()
        ],
      ),
        $(this)["val"]() === "" && emptyInput++;
    }),
    emptyInput > 0x0
      ? $("input[type=\x22submit\x22]")[_0x9a14f8(0x156)](_0x9a14f8(0x253))
      : $(_0x9a14f8(0x1dd))[_0x9a14f8(0x1e7)](_0x9a14f8(0x253)));
  $(_0x9a14f8(0x1db))["removeClass"]("current"),
    $("[data-form=\x22custom-progress-indicator\x22]")[_0x9a14f8(0x156)](
      _0x9a14f8(0x253),
    ),
    $($("[data-form=\x22custom-progress-indicator\x22]")[x])[_0x9a14f8(0x156)](
      _0x9a14f8(0x16f),
    ),
    (selection = selections[_0x9a14f8(0x142)](
      (_0x24b752) => _0x24b752[_0x9a14f8(0x183)] === x - 0x1,
    ));
  next &&
    (x = getSafe(() => selection[0x0]["skipTo"])
      ? parseInt(getSafe(() => selection[0x0]["skipTo"]))
      : x);
  $(_0x9a14f8(0x197))[_0x9a14f8(0x198)](), steps[_0x9a14f8(0x198)]();
  reinitIX === !![] && window["Webflow"][_0x9a14f8(0x186)]();
  $(progressbar)[_0x9a14f8(0x1e7)](_0x9a14f8(0x16f));
  for (i = 0x0; i <= x; i++) {
    countCard
      ? $(progressbar[i])["addClass"](_0x9a14f8(0x16f))
      : !$(steps[i])["data"](_0x9a14f8(0x236)) &&
        $(progressbar[i])[_0x9a14f8(0x156)]("current");
  }
  reinitIX === !![]
    ? (window["Webflow"] &&
        window[_0x9a14f8(0x18c)]["require"]("ix2")[_0x9a14f8(0x206)](),
      document[_0x9a14f8(0x193)](new Event("readystatechange")),
      $(steps[x])[_0x9a14f8(0x1b5)]())
    : $(steps[x])[_0x9a14f8(0x15e)]("slow");
  $(_0x9a14f8(0x1e3))[_0x9a14f8(0x1e7)](_0x9a14f8(0x247));
  x === 0x0 &&
    !$(steps[x])["data"](_0x9a14f8(0x236)) &&
    ($(steps[x])["find"]("[data-answer]")[_0x9a14f8(0x1b5)](),
    $(steps[x])
      [_0x9a14f8(0x133)]("[data-answer]")
      [_0x9a14f8(0x156)]("active-answer-card"));
  selection[_0x9a14f8(0x17c)] > 0x0
    ? ($(steps[x])
        [_0x9a14f8(0x133)](
          _0x9a14f8(0x20c) + selection[0x0][_0x9a14f8(0x1df)] + "\x22]",
        )
        ["show"](),
      $(steps[x])
        [_0x9a14f8(0x133)](
          _0x9a14f8(0x20c) + selection[0x0][_0x9a14f8(0x1df)] + "\x22]",
        )
        [_0x9a14f8(0x156)](_0x9a14f8(0x247)))
    : ($(steps[x])
        [_0x9a14f8(0x133)]("[data-answer=\x22" + answer + "\x22]")
        [_0x9a14f8(0x1b5)](),
      $(steps[x])
        ["find"](_0x9a14f8(0x20c) + answer + "\x22]")
        ["addClass"]("active-answer-card"));
  if (x === 0x0)
    $("[data-form=\x22back-btn\x22]")["hide"](),
      $(_0x9a14f8(0x275))[_0x9a14f8(0x1b5)](),
      $("[data-form=\x22submit-btn\x22]")["hide"]();
  else {
    if (
      x === steps[_0x9a14f8(0x17c)] - 0x1 ||
      $(steps[x])["find"](_0x9a14f8(0x165))[_0x9a14f8(0x17c)] > 0x0
    ) {
      $("[data-form=\x22next-btn\x22]")[_0x9a14f8(0x198)]();
      if (
        $(steps[x])
          ["find"](_0x9a14f8(0x1e8))
          [_0x9a14f8(0x1be)](_0x9a14f8(0x16e))
      )
        $(steps[x])["find"](_0x9a14f8(0x1e8))[_0x9a14f8(0x1b5)]();
      else
        $(_0x9a14f8(0x275))[_0x9a14f8(0x1be)](_0x9a14f8(0x16e)) &&
          $(_0x9a14f8(0x275))[_0x9a14f8(0x1b5)]();
      $("[data-form=\x22submit-btn\x22]")[_0x9a14f8(0x1b5)](),
        $("[data-form-ms=\x22submit-btn\x22]")[_0x9a14f8(0x1b5)](),
        $(_0x9a14f8(0x209))[_0x9a14f8(0x1b5)]();
    } else
      $(_0x9a14f8(0x275))[_0x9a14f8(0x1b5)](),
        $(_0x9a14f8(0x209))[_0x9a14f8(0x1b5)](),
        $("[data-form=\x22submit-btn\x22]")[_0x9a14f8(0x198)](),
        $(_0x9a14f8(0x141))[_0x9a14f8(0x198)]();
  }
  $($(steps[x])["find"]("input[autofocus]")[0x0])[_0x9a14f8(0x231)](),
    $($(steps[x])[_0x9a14f8(0x133)](_0x9a14f8(0x19f))[0x0])["focus"](),
    validation();
  for (idx = 0x0; idx <= x; idx++) {
    $($(_0x9a14f8(0x1db))[idx])[_0x9a14f8(0x1e7)](_0x9a14f8(0x253));
  }
}
function validateEmail(_0x478383, _0x56c1de, _0x213aba) {
  const _0x357b73 = _0x16b068;
  let _0x4061d6 = _0x478383[_0x357b73(0x226)]("@")
    ? _0x478383[_0x357b73(0x1a9)]("@")[0x1]["split"](".")[0x0]
    : [];
  dom = [];
  _0x56c1de !== undefined &&
    _0x56c1de[_0x357b73(0x1a9)](",")[_0x357b73(0x26f)](function (_0xc1d564) {
      const _0x56e85d = _0x357b73;
      _0xc1d564["includes"](_0x4061d6) && dom[_0x56e85d(0x215)](_0x4061d6);
    });
  dom[_0x357b73(0x17c)] > 0x0 ? (domainAllowed = ![]) : (domainAllowed = !![]);
  var _0x4dbe10 = /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,20})?$/;
  !_0x4dbe10[_0x357b73(0x24e)](_0x478383) || !domainAllowed
    ? ((emailFilled = ![]), unfilledArr[_0x357b73(0x215)]({ input: _0x213aba }))
    : (emailFilled = !![]);
}
function phoneValidation(_0x33b238, _0x10b027, _0x9652d9) {
  if (phoneFormat) return _0x10b027 >= _0x9652d9 ? !![] : ![];
  else {
    if (_0x10b027 >= _0x9652d9) return !![];
  }
}
function validation() {
  const _0x1b3562 = _0x16b068;
  $(steps[x])[_0x1b3562(0x1be)](_0x1b3562(0x236)) && enableBtn();
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
    (empReqTel = []),
    (empReqTextarea = []),
    (empReqNum = []),
    (empReqFile = []),
    (empReqRadio = []),
    (textareaLength = $(steps[x])["find"]("textarea[required]:visible")[
      _0x1b3562(0x17c)
    ]),
    (textInputLength = $(steps[x])[_0x1b3562(0x133)](_0x1b3562(0x20a))[
      _0x1b3562(0x17c)
    ]),
    (selectInputLength = $(steps[x])[_0x1b3562(0x133)](
      "select[required]:visible",
    )[_0x1b3562(0x17c)]),
    (emailInputLength = $(steps[x])[_0x1b3562(0x133)](_0x1b3562(0x200))[
      _0x1b3562(0x17c)
    ]),
    (checkboxInputLength = $(steps[x])[_0x1b3562(0x133)](
      "input[type=\x22checkbox\x22]:visible",
    )[_0x1b3562(0x17c)]);
  textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0
    ? disableBtn()
    : enableBtn();
  checkCount = $(steps[x])[_0x1b3562(0x1be)](_0x1b3562(0x21c))
    ? $(steps[x])[_0x1b3562(0x1be)](_0x1b3562(0x21c))
    : $(steps[x])[_0x1b3562(0x133)](_0x1b3562(0x15a))[_0x1b3562(0x17c)] > 0x0
      ? $(steps[x])
          [_0x1b3562(0x133)]("[data-checkbox]")
          [_0x1b3562(0x1be)]("checkbox")
      : 0x0;
  if (!logicExtra)
    $(steps[x])["find"](":input")["is"]("[type=\x22checkbox\x22]") &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])["find"](":input[type=\x22checkbox\x22]")[_0x1b3562(0x17c)]
        ? $(steps[x])
            [_0x1b3562(0x133)](_0x1b3562(0x127))
            ["each"](function () {
              const _0x18baed = _0x1b3562;
              $(this)["is"](_0x18baed(0x203))
                ? $(steps[x])[_0x18baed(0x133)](_0x18baed(0x264))[
                    _0x18baed(0x17c)
                  ] < 0x1 &&
                  ((checkboxFilled = !![]),
                  resetInputErrorMessage($(this)["attr"]("name")))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0x18baed(0x215)]({
                    input: $(this)["attr"](_0x18baed(0x265)),
                  }));
            })
        : $(steps[x])["find"](_0x1b3562(0x1b4))[_0x1b3562(0x17c)] >= checkCount
          ? $(steps[x])[_0x1b3562(0x133)](_0x1b3562(0x264))[_0x1b3562(0x17c)] >
            0x0
            ? $(steps[x])
                [_0x1b3562(0x133)](_0x1b3562(0x264))
                ["each"](function () {
                  const _0x1e4853 = _0x1b3562;
                  checkboxFilled = ![];
                  let _0x15ab54 = $(steps[x])[_0x1e4853(0x133)](
                      _0x1e4853(0x264),
                    )["length"],
                    _0x4575dc = $(steps[x])[_0x1e4853(0x133)](_0x1e4853(0x23b))[
                      _0x1e4853(0x17c)
                    ];
                  _0x15ab54 - _0x4575dc === 0x0
                    ? ((checkboxFilled = !![]),
                      resetInputErrorMessage(
                        $(steps[x])
                          [_0x1e4853(0x133)](":input[type=\x22checkbox\x22]")
                          [_0x1e4853(0x1dc)](_0x1e4853(0x265)),
                      ))
                    : ((checkboxFilled = ![]),
                      $(steps[x])
                        [_0x1e4853(0x133)](_0x1e4853(0x262))
                        ["each"](function () {
                          const _0x5dfbf6 = _0x1e4853;
                          unfilledArr[_0x5dfbf6(0x215)]({
                            input: $(this)[_0x5dfbf6(0x1dc)](_0x5dfbf6(0x265)),
                          });
                        }));
                })
            : ((checkboxFilled = !![]),
              resetInputErrorMessage(
                $(steps[x])
                  [_0x1b3562(0x133)](_0x1b3562(0x127))
                  [_0x1b3562(0x1dc)](_0x1b3562(0x265)),
              ))
          : ((checkboxFilled = ![]),
            $(steps[x])
              [_0x1b3562(0x133)](_0x1b3562(0x264))
              ["each"](function () {
                const _0x1aaad4 = _0x1b3562;
                $(this)[_0x1aaad4(0x212)](_0x1aaad4(0x203)) &&
                  unfilledArr[_0x1aaad4(0x215)]({
                    input: $(this)[_0x1aaad4(0x1dc)]("name"),
                  });
              }),
            unfilledArr[_0x1b3562(0x215)]({
              input: $(steps[x])
                [_0x1b3562(0x133)](_0x1b3562(0x127))
                [_0x1b3562(0x1dc)]("name"),
            }))),
      $(steps[x])
        [_0x1b3562(0x133)](_0x1b3562(0x15d))
        ["each"](function (_0xb808ab) {
          const _0x2f3141 = _0x1b3562;
          var _0x33f9e5 = $(this)[_0x2f3141(0x1dc)]("name");
          $(_0x2f3141(0x22e) + _0x33f9e5 + _0x2f3141(0x218))[
            _0x2f3141(0x17c)
          ] == 0x0
            ? (!empReqRadio[_0x2f3141(0x133)](
                (_0x469258) => _0x469258[_0x2f3141(0x14a)] === _0xb808ab,
              ) && empReqRadio["push"]({ input: _0xb808ab }),
              unfilledArr["push"]({ input: $(this)[_0x2f3141(0x1dc)]("name") }))
            : (empReqRadio = empReqRadio[_0x2f3141(0x142)](
                (_0x1a8c87) => _0x1a8c87[_0x2f3141(0x14a)] !== _0xb808ab,
              )),
            empReqRadio["length"] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0x1b3562(0x133)](_0x1b3562(0x15b))
        [_0x1b3562(0x1bd)](function (_0x46c5f9) {
          const _0x46ae18 = _0x1b3562;
          let _0x492d51 = $(this)[_0x46ae18(0x27a)]()[_0x46ae18(0x17c)],
            _0x50dea6 = $(this)[_0x46ae18(0x1be)](_0x46ae18(0x132))
              ? $(this)[_0x46ae18(0x1be)]("min-character")
              : 0x0;
          $(this)[_0x46ae18(0x27a)]() !== "" && _0x492d51 >= _0x50dea6
            ? (empReqInput = empReqInput[_0x46ae18(0x142)](
                (_0x3cb2eb) => _0x3cb2eb[_0x46ae18(0x14a)] !== _0x46c5f9,
              ))
            : (!empReqInput["find"](
                (_0x587b25) => _0x587b25["input"] === _0x46c5f9,
              ) && empReqInput["push"]({ input: _0x46c5f9 }),
              unfilledArr[_0x46ae18(0x215)]({
                input: $(this)[_0x46ae18(0x1dc)](_0x46ae18(0x265)),
              })),
            empReqInput[_0x46ae18(0x17c)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x1b3562(0x133)](_0x1b3562(0x24f))
        ["each"](function (_0x5cb852) {
          const _0x136382 = _0x1b3562;
          let _0x44b591 = $(this)[_0x136382(0x27a)]()[_0x136382(0x17c)],
            _0x1e5e91 = $(this)["data"](_0x136382(0x132))
              ? $(this)[_0x136382(0x1be)](_0x136382(0x132))
              : 0x0;
          $(this)[_0x136382(0x27a)]() !== "" && _0x44b591 >= _0x1e5e91
            ? (empReqPassword = empReqPassword[_0x136382(0x142)](
                (_0x392e20) => _0x392e20["input"] !== _0x5cb852,
              ))
            : (!empReqPassword[_0x136382(0x133)](
                (_0x544a6a) => _0x544a6a[_0x136382(0x14a)] === _0x5cb852,
              ) && empReqPassword[_0x136382(0x215)]({ input: _0x5cb852 }),
              unfilledArr[_0x136382(0x215)]({
                input: $(this)[_0x136382(0x1dc)](_0x136382(0x265)),
              })),
            empReqPassword[_0x136382(0x17c)] === 0x0
              ? (passwordFilled = !![])
              : (passwordFilled = ![]);
        }),
      $(steps[x])
        [_0x1b3562(0x133)](_0x1b3562(0x244))
        [_0x1b3562(0x1bd)](function (_0x43247d) {
          const _0x116ca2 = _0x1b3562;
          let _0xb06383 = $(this)[_0x116ca2(0x27a)]()[_0x116ca2(0x17c)],
            _0x38d5d7 = $(this)[_0x116ca2(0x1be)](_0x116ca2(0x132))
              ? $(this)[_0x116ca2(0x1be)](_0x116ca2(0x132))
              : 0x0;
          $(this)["val"]() !== "" && _0xb06383 >= _0x38d5d7
            ? (empReqTime = empReqTime["filter"](
                (_0xac2760) => _0xac2760[_0x116ca2(0x14a)] !== _0x43247d,
              ))
            : (!empReqTime[_0x116ca2(0x133)](
                (_0x4f6f63) => _0x4f6f63[_0x116ca2(0x14a)] === _0x43247d,
              ) && empReqUrl[_0x116ca2(0x215)]({ input: _0x43247d }),
              unfilledArr[_0x116ca2(0x215)]({
                input: $(this)[_0x116ca2(0x1dc)](_0x116ca2(0x265)),
              })),
            empReqTime["length"] === 0x0 &&
            validateURL($(this)[_0x116ca2(0x27a)]())
              ? (timeFilled = !![])
              : (timeFilled = ![]);
        }),
      $(steps[x])
        [_0x1b3562(0x133)](_0x1b3562(0x22c))
        ["each"](function (_0x2b652d) {
          const _0x1174ca = _0x1b3562;
          let _0x3b2eea = $(this)[_0x1174ca(0x27a)]()[_0x1174ca(0x17c)],
            _0x1dcf27 = $(this)[_0x1174ca(0x1be)]("min-character")
              ? $(this)[_0x1174ca(0x1be)](_0x1174ca(0x132))
              : 0x0;
          $(this)[_0x1174ca(0x27a)]() !== "" && _0x3b2eea >= _0x1dcf27
            ? (empReqUrl = empReqUrl[_0x1174ca(0x142)](
                (_0x486b1f) => _0x486b1f[_0x1174ca(0x14a)] !== _0x2b652d,
              ))
            : (!empReqUrl["find"](
                (_0x65ab15) => _0x65ab15[_0x1174ca(0x14a)] === _0x2b652d,
              ) && empReqUrl[_0x1174ca(0x215)]({ input: _0x2b652d }),
              unfilledArr[_0x1174ca(0x215)]({
                input: $(this)[_0x1174ca(0x1dc)](_0x1174ca(0x265)),
              })),
            empReqUrl[_0x1174ca(0x17c)] === 0x0 &&
            validateURL($(this)[_0x1174ca(0x27a)]())
              ? (urlFilled = !![])
              : (urlFilled = ![]);
        }),
      $(steps[x])
        [_0x1b3562(0x133)](_0x1b3562(0x144))
        [_0x1b3562(0x1bd)](function (_0x4ac2f7) {
          const _0x1eb1ac = _0x1b3562;
          $(this)[_0x1eb1ac(0x27a)]() !== ""
            ? (empReqDate = empReqDate[_0x1eb1ac(0x142)](
                (_0x5eb68a) => _0x5eb68a[_0x1eb1ac(0x14a)] !== _0x4ac2f7,
              ))
            : (!empReqDate[_0x1eb1ac(0x133)](
                (_0x19e49c) => _0x19e49c[_0x1eb1ac(0x14a)] === _0x4ac2f7,
              ) && empReqDate[_0x1eb1ac(0x215)]({ input: _0x4ac2f7 }),
              unfilledArr[_0x1eb1ac(0x215)]({
                input: $(this)[_0x1eb1ac(0x1dc)](_0x1eb1ac(0x265)),
              })),
            empReqDate[_0x1eb1ac(0x17c)] === 0x0
              ? (dateFilled = !![])
              : (dateFilled = ![]);
        }),
      $(steps[x])
        [_0x1b3562(0x133)](_0x1b3562(0x243))
        ["each"](function (_0x3fb4f7) {
          const _0x12538c = _0x1b3562;
          if ($(this)[_0x12538c(0x27a)]() !== "") {
            let _0x164bd8 = $(this)[_0x12538c(0x27a)]()[_0x12538c(0x17c)],
              _0x467e69 = $(this)[_0x12538c(0x1be)](_0x12538c(0x132))
                ? $(this)["data"](_0x12538c(0x132))
                : 0x0;
            if ($(this)[_0x12538c(0x1be)](_0x12538c(0x208))) {
              var _0x60e71f = phoneAutoFormat(
                $(this)[_0x12538c(0x1be)](_0x12538c(0x208)),
              );
              $(this)[_0x12538c(0x27a)](_0x60e71f($(this)[_0x12538c(0x27a)]()));
            }
            phoneValidation($(this)[_0x12538c(0x27a)](), _0x164bd8, _0x467e69)
              ? ((empReqTel = empReqTel[_0x12538c(0x142)](
                  (_0x1c2e4c) => _0x1c2e4c[_0x12538c(0x14a)] !== _0x3fb4f7,
                )),
                console[_0x12538c(0x1d3)](empReqTel))
              : empReqTel["push"]({ input: _0x3fb4f7 });
          } else
            !empReqTel[_0x12538c(0x133)](
              (_0x285c27) => _0x285c27[_0x12538c(0x14a)] === _0x3fb4f7,
            ) && empReqTel["push"]({ input: _0x3fb4f7 }),
              unfilledArr[_0x12538c(0x215)]({ input: $(this)["attr"]("name") });
          empReqTel[_0x12538c(0x17c)] === 0x0
            ? (telFilled = !![])
            : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x1b3562(0x133)](_0x1b3562(0x1f7))
        [_0x1b3562(0x1bd)](function (_0xd2b58a) {
          const _0x23bd2a = _0x1b3562;
          $(this)["val"]() !== ""
            ? (empReqFile = empReqFile[_0x23bd2a(0x142)](
                (_0x3e60f1) => _0x3e60f1[_0x23bd2a(0x14a)] !== _0xd2b58a,
              ))
            : (!empReqFile[_0x23bd2a(0x133)](
                (_0x516df8) => _0x516df8["input"] === _0xd2b58a,
              ) && empReqFile[_0x23bd2a(0x215)]({ input: _0xd2b58a }),
              unfilledArr[_0x23bd2a(0x215)]({
                input: $(this)[_0x23bd2a(0x1dc)](_0x23bd2a(0x265)),
              })),
            empReqFile["length"] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x1b3562(0x17b))
        [_0x1b3562(0x1bd)](function (_0x2c40de) {
          const _0x29966f = _0x1b3562;
          let _0x3f0607 = $(this)[_0x29966f(0x27a)]()["length"],
            _0xc54963 = $(this)[_0x29966f(0x1be)](_0x29966f(0x132))
              ? $(this)["data"](_0x29966f(0x132))
              : 0x0;
          $(this)[_0x29966f(0x27a)]() !== "" && _0x3f0607 >= _0xc54963
            ? (empReqNum = empReqNum[_0x29966f(0x142)](
                (_0x30ab6f) => _0x30ab6f["input"] !== _0x2c40de,
              ))
            : (!empReqNum[_0x29966f(0x133)](
                (_0x222026) => _0x222026["input"] === _0x2c40de,
              ) && empReqNum[_0x29966f(0x215)]({ input: _0x2c40de }),
              unfilledArr[_0x29966f(0x215)]({
                input: $(this)["attr"](_0x29966f(0x265)),
              })),
            empReqNum[_0x29966f(0x17c)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x1b3562(0x133)](_0x1b3562(0x230))
        [_0x1b3562(0x1bd)](function (_0x393a30) {
          const _0x423373 = _0x1b3562;
          let _0x49ffce = $(this)[_0x423373(0x27a)]();
          _0x49ffce === "" && (_0x49ffce = null),
            _0x49ffce != null
              ? (empReqSelect = empReqSelect[_0x423373(0x142)](
                  (_0x515b2c) => _0x515b2c[_0x423373(0x14a)] !== _0x393a30,
                ))
              : (!empReqSelect[_0x423373(0x133)](
                  (_0x37e117) => _0x37e117["input"] === _0x393a30,
                ) && empReqSelect[_0x423373(0x215)]({ input: _0x393a30 }),
                unfilledArr[_0x423373(0x215)]({
                  input: $(this)[_0x423373(0x1dc)](_0x423373(0x265)),
                })),
            empReqSelect[_0x423373(0x17c)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x1b3562(0x133)](_0x1b3562(0x20f))
        [_0x1b3562(0x1bd)](function (_0x142b12) {
          const _0x3973a8 = _0x1b3562;
          let _0x38635b = $(this)[_0x3973a8(0x27a)]()[_0x3973a8(0x17c)],
            _0x4b1032 = $(this)[_0x3973a8(0x1be)](_0x3973a8(0x132))
              ? $(this)[_0x3973a8(0x1be)](_0x3973a8(0x132))
              : 0x0;
          $(this)["val"]() !== "" && _0x38635b >= _0x4b1032
            ? (empReqTextarea = empReqTextarea[_0x3973a8(0x142)](
                (_0x24325a) => _0x24325a[_0x3973a8(0x14a)] !== _0x142b12,
              ))
            : (!empReqTextarea[_0x3973a8(0x133)](
                (_0x5c7f2f) => _0x5c7f2f[_0x3973a8(0x14a)] === _0x142b12,
              ) && empReqTextarea["push"]({ input: _0x142b12 }),
              unfilledArr[_0x3973a8(0x215)]({
                input: $(this)["attr"]("name"),
              })),
            empReqTextarea[_0x3973a8(0x17c)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x1b3562(0x133)](_0x1b3562(0x286))
        [_0x1b3562(0x1bd)](function () {
          const _0x57cd11 = _0x1b3562;
          $(this)[_0x57cd11(0x27a)]() !== ""
            ? validateEmail(
                $(this)[_0x57cd11(0x27a)](),
                $(this)[_0x57cd11(0x1be)](_0x57cd11(0x284)),
                $(this)[_0x57cd11(0x1dc)](_0x57cd11(0x265)),
              )
            : ((emailFilled = ![]),
              unfilledArr[_0x57cd11(0x215)]({
                input: $(this)[_0x57cd11(0x1dc)](_0x57cd11(0x265)),
              }));
        });
  else {
    if ($(steps[x])[_0x1b3562(0x1be)](_0x1b3562(0x236)))
      (answer = $(steps[x])
        ["find"](_0x1b3562(0x129))
        [_0x1b3562(0x1be)](_0x1b3562(0x1ff))),
        (selections = selections[_0x1b3562(0x142)](
          (_0x1f5bfe) => _0x1f5bfe["step"] !== x,
        )),
        selections[_0x1b3562(0x215)]({ step: x, selected: answer });
    else
      $(steps[x])
        [_0x1b3562(0x133)](_0x1b3562(0x1e3))
        [_0x1b3562(0x1be)](_0x1b3562(0x236)) &&
        ((answer = $(steps[x])
          [_0x1b3562(0x133)](".active-answer-card")
          [_0x1b3562(0x1be)](_0x1b3562(0x1ff))),
        (selections = selections[_0x1b3562(0x142)](
          (_0x2f3ca0) => _0x2f3ca0[_0x1b3562(0x183)] !== x,
        )),
        selections["push"]({ step: x, selected: answer }));
    $(steps[x])
      [_0x1b3562(0x133)](_0x1b3562(0x1e3))
      [_0x1b3562(0x133)](_0x1b3562(0x13b))
      ["is"](_0x1b3562(0x1d6)) &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])[_0x1b3562(0x133)](_0x1b3562(0x127))[_0x1b3562(0x17c)]
        ? $(steps[x])
            [_0x1b3562(0x133)](_0x1b3562(0x127))
            ["each"](function () {
              const _0x2b1bb0 = _0x1b3562;
              $(this)["is"](_0x2b1bb0(0x203))
                ? $(steps[x])["find"](":input[required]")[_0x2b1bb0(0x17c)] <
                    0x1 &&
                  ((skipTo = undefined),
                  $(this)
                    ["parents"](_0x2b1bb0(0x1e4))
                    ["data"](_0x2b1bb0(0x1a2)) &&
                    (skipTo = $(this)
                      [_0x2b1bb0(0x26a)](_0x2b1bb0(0x1e4))
                      [_0x2b1bb0(0x1be)](_0x2b1bb0(0x1a2))),
                  $(this)
                    [_0x2b1bb0(0x26a)]("[data-go-to]")
                    [_0x2b1bb0(0x1dc)](_0x2b1bb0(0x150)) &&
                    ((answer = $(this)
                      [_0x2b1bb0(0x26a)](_0x2b1bb0(0x129))
                      ["attr"]("data-go-to")),
                    (selections = selections["filter"](
                      (_0x15cad0) => _0x15cad0["step"] !== x,
                    )),
                    selections["push"]({ step: x, selected: answer }),
                    skipTo &&
                      (selections[_0x2b1bb0(0x215)]({
                        step: skipTo - 0x2,
                        selected: answer,
                      }),
                      (objIndex = selections["findIndex"](
                        (_0x3e533f) => _0x3e533f[_0x2b1bb0(0x183)] === x,
                      )),
                      (selections[objIndex][_0x2b1bb0(0x17d)] =
                        parseInt(skipTo) - 0x1),
                      (selections[objIndex][_0x2b1bb0(0x179)] = x))),
                  (checkboxFilled = !![]),
                  $(steps[x])[_0x2b1bb0(0x133)](_0x2b1bb0(0x23b))[
                    _0x2b1bb0(0x17c)
                  ] >=
                    $(steps[x])[_0x2b1bb0(0x133)](_0x2b1bb0(0x264))[
                      _0x2b1bb0(0x17c)
                    ] &&
                    resetInputErrorMessage(
                      $(steps[x])
                        [_0x2b1bb0(0x133)](":input[type=\x22checkbox\x22]")
                        [_0x2b1bb0(0x1dc)]("name"),
                    ))
                : ((checkboxFilled = ![]),
                  unfilledArr["push"]({
                    input: $(this)[_0x2b1bb0(0x1dc)]("name"),
                  }));
            })
        : $(steps[x])
              ["find"](".active-answer-card")
              ["find"](":input[type=\x22checkbox\x22]:checked")[
              _0x1b3562(0x17c)
            ] >= checkCount
          ? ($(steps[x])
              [_0x1b3562(0x133)](_0x1b3562(0x1e3))
              [_0x1b3562(0x133)](_0x1b3562(0x127))
              [_0x1b3562(0x26a)](_0x1b3562(0x129))
              [_0x1b3562(0x1dc)](_0x1b3562(0x150)) &&
              ((skipTo = undefined),
              $(steps[x])
                [_0x1b3562(0x133)](_0x1b3562(0x1e3))
                ["find"](_0x1b3562(0x127))
                [_0x1b3562(0x26a)](_0x1b3562(0x1e4))
                [_0x1b3562(0x1dc)](_0x1b3562(0x1f0)) &&
                (skipTo = $(steps[x])
                  [_0x1b3562(0x133)](".active-answer-card")
                  ["find"](_0x1b3562(0x1b4))
                  [_0x1b3562(0x26a)](_0x1b3562(0x1e4))
                  [_0x1b3562(0x1dc)](_0x1b3562(0x1f0))),
              (answer = $(steps[x])
                [_0x1b3562(0x133)](_0x1b3562(0x1e3))
                [_0x1b3562(0x133)](_0x1b3562(0x127))
                [_0x1b3562(0x26a)](_0x1b3562(0x129))
                [_0x1b3562(0x1dc)](_0x1b3562(0x150))),
              (selections = selections["filter"](
                (_0x3281db) => _0x3281db[_0x1b3562(0x183)] !== x,
              )),
              selections[_0x1b3562(0x215)]({ step: x, selected: answer }),
              skipTo &&
                ((selections = selections[_0x1b3562(0x142)](
                  (_0x537e6e) => _0x537e6e[_0x1b3562(0x183)] !== skipTo - 0x2,
                )),
                selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0x1b3562(0x138)](
                  (_0x36e926) => _0x36e926[_0x1b3562(0x183)] === x,
                )),
                (selections[objIndex][_0x1b3562(0x17d)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x1b3562(0x179)] = x))),
            (checkboxFilled = !![]),
            $(steps[x])[_0x1b3562(0x133)](_0x1b3562(0x23b))["length"] >=
              $(steps[x])[_0x1b3562(0x133)](
                ":input[type=\x22checkbox\x22][required]",
              )["length"] &&
              resetInputErrorMessage(
                $(steps[x])
                  [_0x1b3562(0x133)](_0x1b3562(0x127))
                  [_0x1b3562(0x1dc)](_0x1b3562(0x265)),
              ))
          : ((checkboxFilled = ![]),
            $(steps[x])
              ["find"](_0x1b3562(0x264))
              [_0x1b3562(0x1bd)](function () {
                const _0xf2ac0d = _0x1b3562;
                $(this)[_0xf2ac0d(0x212)](_0xf2ac0d(0x203)) &&
                  unfilledArr[_0xf2ac0d(0x215)]({
                    input: $(this)["attr"]("name"),
                  });
              }))),
      $(steps[x])
        ["find"](".active-answer-card")
        [_0x1b3562(0x133)]("input:radio[required]")
        [_0x1b3562(0x1bd)](function (_0x94deaa) {
          const _0x563386 = _0x1b3562;
          var _0x55ac3f = $(this)[_0x563386(0x1dc)](_0x563386(0x265));
          $("input:radio[name=\x22" + _0x55ac3f + _0x563386(0x218))[
            _0x563386(0x17c)
          ] == 0x0
            ? (!empReqRadio[_0x563386(0x133)](
                (_0x1ecf77) => _0x1ecf77[_0x563386(0x14a)] === _0x94deaa,
              ) && empReqRadio[_0x563386(0x215)]({ input: _0x94deaa }),
              unfilledArr[_0x563386(0x215)]({
                input: $(this)[_0x563386(0x1dc)](_0x563386(0x265)),
              }))
            : (empReqRadio = empReqRadio["filter"](
                (_0x2a7f3c) => _0x2a7f3c["input"] !== _0x94deaa,
              )),
            empReqRadio[_0x563386(0x17c)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0x1b3562(0x133)](_0x1b3562(0x1e3))
        ["find"](_0x1b3562(0x15b))
        [_0x1b3562(0x1bd)](function (_0x2bcb50) {
          const _0x20039b = _0x1b3562;
          let _0x47b4c5 = $(this)[_0x20039b(0x27a)]()[_0x20039b(0x17c)],
            _0x2bd306 = $(this)[_0x20039b(0x1be)](_0x20039b(0x132))
              ? $(this)["data"](_0x20039b(0x132))
              : 0x0;
          $(this)["val"]() !== "" && _0x47b4c5 >= _0x2bd306
            ? (empReqInput = empReqInput["filter"](
                (_0xbf52af) => _0xbf52af[_0x20039b(0x14a)] !== _0x2bcb50,
              ))
            : (!empReqInput[_0x20039b(0x133)](
                (_0x3f3a84) => _0x3f3a84[_0x20039b(0x14a)] === _0x2bcb50,
              ) && empReqInput["push"]({ input: _0x2bcb50 }),
              unfilledArr[_0x20039b(0x215)]({
                input: $(this)[_0x20039b(0x1dc)]("name"),
              })),
            empReqInput[_0x20039b(0x17c)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x1b3562(0x1e3))
        ["find"](_0x1b3562(0x14e))
        [_0x1b3562(0x1bd)](function (_0x2c632b) {
          const _0x38ac27 = _0x1b3562;
          (skipTo = undefined),
            $(this)
              ["parents"](_0x38ac27(0x1e4))
              [_0x38ac27(0x1be)]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0x38ac27(0x26a)](_0x38ac27(0x1e4))
                [_0x38ac27(0x1be)](_0x38ac27(0x1a2))),
            $(this)
              [_0x38ac27(0x26a)]("[data-go-to]")
              [_0x38ac27(0x1dc)]("data-go-to") &&
              ((answer = $(this)
                ["parents"](_0x38ac27(0x129))
                [_0x38ac27(0x1dc)](_0x38ac27(0x150))),
              (selections = selections[_0x38ac27(0x142)](
                (_0x5a3b96) => _0x5a3b96[_0x38ac27(0x183)] !== x,
              )),
              selections[_0x38ac27(0x215)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections["findIndex"](
                  (_0x2b70f7) => _0x2b70f7[_0x38ac27(0x183)] === x,
                )),
                (selections[objIndex][_0x38ac27(0x17d)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x38ac27(0x179)] = x)));
        }),
      $(steps[x])
        [_0x1b3562(0x133)](_0x1b3562(0x1e3))
        [_0x1b3562(0x133)](":input[type=\x22password\x22][required]")
        [_0x1b3562(0x1bd)](function (_0x311122) {
          const _0x4d0efa = _0x1b3562;
          let _0x13a972 = $(this)["val"]()["length"],
            _0x5a3b37 = $(this)[_0x4d0efa(0x1be)](_0x4d0efa(0x132))
              ? $(this)["data"]("min-character")
              : 0x0;
          $(this)[_0x4d0efa(0x27a)]() !== "" && _0x13a972 >= _0x5a3b37
            ? (empReqPassword = empReqPassword[_0x4d0efa(0x142)](
                (_0x69f409) => _0x69f409["input"] !== _0x311122,
              ))
            : (!empReqPassword[_0x4d0efa(0x133)](
                (_0x1494c9) => _0x1494c9["input"] === _0x311122,
              ) && empReqPassword[_0x4d0efa(0x215)]({ input: _0x311122 }),
              unfilledArr[_0x4d0efa(0x215)]({
                input: $(this)[_0x4d0efa(0x1dc)](_0x4d0efa(0x265)),
              })),
            empReqPassword["length"] === 0x0
              ? (passwordFilled = !![])
              : (passwordFilled = ![]);
        }),
      $(steps[x])
        [_0x1b3562(0x133)](_0x1b3562(0x1e3))
        [_0x1b3562(0x133)](_0x1b3562(0x252))
        [_0x1b3562(0x1bd)](function (_0x315bcf) {
          const _0x21f27a = _0x1b3562;
          (skipTo = undefined),
            $(this)
              [_0x21f27a(0x26a)](_0x21f27a(0x1e4))
              ["data"](_0x21f27a(0x1a2)) !== "" &&
              (skipTo = $(this)
                ["parents"]("[data-skip-to]")
                [_0x21f27a(0x1be)](_0x21f27a(0x1a2))),
            $(this)
              [_0x21f27a(0x26a)](_0x21f27a(0x129))
              ["attr"](_0x21f27a(0x150)) &&
              ((answer = $(this)
                [_0x21f27a(0x26a)]("[data-go-to]")
                [_0x21f27a(0x1dc)]("data-go-to")),
              (selections = selections[_0x21f27a(0x142)](
                (_0x18cbb5) => _0x18cbb5[_0x21f27a(0x183)] !== x,
              )),
              selections[_0x21f27a(0x215)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0x21f27a(0x138)](
                  (_0x2879d7) => _0x2879d7[_0x21f27a(0x183)] === x,
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        ["find"](_0x1b3562(0x1e3))
        [_0x1b3562(0x133)](":input[type=\x22url\x22][required]")
        [_0x1b3562(0x1bd)](function (_0x8cb54) {
          const _0x2267f8 = _0x1b3562;
          let _0x90b96 = $(this)[_0x2267f8(0x27a)]()[_0x2267f8(0x17c)],
            _0x2c15d6 = $(this)[_0x2267f8(0x1be)]("min-character")
              ? $(this)[_0x2267f8(0x1be)]("min-character")
              : 0x0;
          $(this)["val"]() !== "" && _0x90b96 >= _0x2c15d6
            ? (empReqUrl = empReqUrl[_0x2267f8(0x142)](
                (_0x3f1ca3) => _0x3f1ca3["input"] !== _0x8cb54,
              ))
            : (!empReqUrl[_0x2267f8(0x133)](
                (_0x53ac0a) => _0x53ac0a[_0x2267f8(0x14a)] === _0x8cb54,
              ) && empReqUrl[_0x2267f8(0x215)]({ input: _0x8cb54 }),
              unfilledArr[_0x2267f8(0x215)]({
                input: $(this)["attr"](_0x2267f8(0x265)),
              })),
            empReqUrl[_0x2267f8(0x17c)] === 0x0 && validateURL($(this)["val"]())
              ? (urlFilled = !![])
              : (urlFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x1b3562(0x1e3))
        ["find"](_0x1b3562(0x18b))
        [_0x1b3562(0x1bd)](function (_0x59b7dc) {
          const _0x3854ac = _0x1b3562;
          (skipTo = undefined),
            $(this)
              [_0x3854ac(0x26a)](_0x3854ac(0x1e4))
              ["data"](_0x3854ac(0x1a2)) !== "" &&
              (skipTo = $(this)
                [_0x3854ac(0x26a)](_0x3854ac(0x1e4))
                [_0x3854ac(0x1be)](_0x3854ac(0x1a2))),
            $(this)
              ["parents"](_0x3854ac(0x129))
              [_0x3854ac(0x1dc)]("data-go-to") &&
              ((answer = $(this)
                ["parents"](_0x3854ac(0x129))
                [_0x3854ac(0x1dc)]("data-go-to")),
              (selections = selections["filter"](
                (_0x2a01a7) => _0x2a01a7[_0x3854ac(0x183)] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x3854ac(0x215)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x3854ac(0x138)](
                  (_0x438caf) => _0x438caf[_0x3854ac(0x183)] === x,
                )),
                (selections[objIndex][_0x3854ac(0x17d)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x3854ac(0x179)] = x)));
        }),
      $(steps[x])
        [_0x1b3562(0x133)](_0x1b3562(0x1e3))
        [_0x1b3562(0x133)](":input[type=\x22date\x22][required]")
        [_0x1b3562(0x1bd)](function (_0x558aa3) {
          const _0x2c8e55 = _0x1b3562;
          $(this)[_0x2c8e55(0x27a)]() !== ""
            ? (empReqDate = empReqDate[_0x2c8e55(0x142)](
                (_0x2ad1c0) => _0x2ad1c0[_0x2c8e55(0x14a)] !== _0x558aa3,
              ))
            : (!empReqDate[_0x2c8e55(0x133)](
                (_0x2dbdec) => _0x2dbdec[_0x2c8e55(0x14a)] === _0x558aa3,
              ) && empReqDate["push"]({ input: _0x558aa3 }),
              unfilledArr["push"]({
                input: $(this)[_0x2c8e55(0x1dc)](_0x2c8e55(0x265)),
              })),
            empReqDate[_0x2c8e55(0x17c)] === 0x0
              ? (dateFilled = !![])
              : (dateFilled = ![]);
        }),
      $(steps[x])
        [_0x1b3562(0x133)](_0x1b3562(0x1e3))
        [_0x1b3562(0x133)](_0x1b3562(0x1a1))
        [_0x1b3562(0x1bd)](function (_0x4fb3e7) {
          const _0x5e6d55 = _0x1b3562;
          (skipTo = undefined),
            $(this)
              [_0x5e6d55(0x26a)](_0x5e6d55(0x1e4))
              ["data"](_0x5e6d55(0x1a2)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0x5e6d55(0x1e4))
                ["data"]("skip-to")),
            $(this)
              [_0x5e6d55(0x26a)](_0x5e6d55(0x129))
              [_0x5e6d55(0x1dc)](_0x5e6d55(0x150)) &&
              ((answer = $(this)
                [_0x5e6d55(0x26a)](_0x5e6d55(0x129))
                [_0x5e6d55(0x1dc)](_0x5e6d55(0x150))),
              (selections = selections[_0x5e6d55(0x142)](
                (_0x6e2e28) => _0x6e2e28[_0x5e6d55(0x183)] !== x,
              )),
              selections[_0x5e6d55(0x215)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections["findIndex"](
                  (_0x1c4e67) => _0x1c4e67["step"] === x,
                )),
                (selections[objIndex][_0x5e6d55(0x17d)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x1b3562(0x133)](_0x1b3562(0x1e3))
        ["find"](_0x1b3562(0x22c))
        [_0x1b3562(0x1bd)](function (_0x263ed2) {
          const _0x986ff0 = _0x1b3562;
          $(this)["val"]() !== ""
            ? (empReqTime = empReqTime[_0x986ff0(0x142)](
                (_0x5ddf03) => _0x5ddf03[_0x986ff0(0x14a)] !== _0x263ed2,
              ))
            : (!empReqTime[_0x986ff0(0x133)](
                (_0x47c929) => _0x47c929["input"] === _0x263ed2,
              ) && empReqTime["push"]({ input: _0x263ed2 }),
              unfilledArr["push"]({
                input: $(this)[_0x986ff0(0x1dc)](_0x986ff0(0x265)),
              })),
            empReqTime["length"] === 0x0
              ? (timeFilled = !![])
              : (timeFilled = ![]);
        }),
      $(steps[x])
        [_0x1b3562(0x133)](_0x1b3562(0x1e3))
        [_0x1b3562(0x133)](_0x1b3562(0x145))
        [_0x1b3562(0x1bd)](function (_0x100574) {
          const _0x513946 = _0x1b3562;
          (skipTo = undefined),
            $(this)
              [_0x513946(0x26a)]("[data-skip-to]")
              [_0x513946(0x1be)](_0x513946(0x1a2)) !== "" &&
              (skipTo = $(this)
                [_0x513946(0x26a)]("[data-skip-to]")
                [_0x513946(0x1be)](_0x513946(0x1a2))),
            $(this)
              [_0x513946(0x26a)](_0x513946(0x129))
              [_0x513946(0x1dc)](_0x513946(0x150)) &&
              ((answer = $(this)
                [_0x513946(0x26a)](_0x513946(0x129))
                [_0x513946(0x1dc)](_0x513946(0x150))),
              (selections = selections[_0x513946(0x142)](
                (_0x42cf36) => _0x42cf36[_0x513946(0x183)] !== x,
              )),
              selections[_0x513946(0x215)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x513946(0x215)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x513946(0x138)](
                  (_0x279536) => _0x279536[_0x513946(0x183)] === x,
                )),
                (selections[objIndex][_0x513946(0x17d)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x1b3562(0x133)](_0x1b3562(0x1e3))
        [_0x1b3562(0x133)](_0x1b3562(0x17b))
        ["each"](function (_0x197f83) {
          const _0x1f474a = _0x1b3562;
          let _0x18fe64 = $(this)["val"]()[_0x1f474a(0x17c)],
            _0x4d28b0 = $(this)["data"](_0x1f474a(0x132))
              ? $(this)[_0x1f474a(0x1be)](_0x1f474a(0x132))
              : 0x0;
          $(this)[_0x1f474a(0x27a)]() !== "" && _0x18fe64 >= _0x4d28b0
            ? (empReqNum = empReqNum["filter"](
                (_0x58709a) => _0x58709a[_0x1f474a(0x14a)] !== _0x197f83,
              ))
            : (!empReqNum[_0x1f474a(0x133)](
                (_0x201858) => _0x201858["input"] === _0x197f83,
              ) && empReqNum["push"]({ input: _0x197f83 }),
              unfilledArr[_0x1f474a(0x215)]({
                input: $(this)[_0x1f474a(0x1dc)](_0x1f474a(0x265)),
              })),
            empReqNum[_0x1f474a(0x17c)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x1b3562(0x1e3))
        [_0x1b3562(0x133)](":input[type=\x22number\x22]")
        ["each"](function (_0x226822) {
          const _0x2e144c = _0x1b3562;
          (skipTo = undefined),
            $(this)
              [_0x2e144c(0x26a)]("[data-skip-to]")
              [_0x2e144c(0x1be)](_0x2e144c(0x1a2)) !== "" &&
              (skipTo = $(this)
                [_0x2e144c(0x26a)](_0x2e144c(0x1e4))
                [_0x2e144c(0x1be)](_0x2e144c(0x1a2))),
            $(this)
              [_0x2e144c(0x26a)]("[data-go-to]")
              [_0x2e144c(0x1dc)](_0x2e144c(0x150)) &&
              ((answer = $(this)
                [_0x2e144c(0x26a)](_0x2e144c(0x129))
                ["attr"](_0x2e144c(0x150))),
              (selections = selections["filter"](
                (_0x5285a3) => _0x5285a3[_0x2e144c(0x183)] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x2e144c(0x215)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x2e144c(0x138)](
                  (_0x1c8ad8) => _0x1c8ad8[_0x2e144c(0x183)] === x,
                )),
                (selections[objIndex][_0x2e144c(0x17d)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x2e144c(0x179)] = x)));
        }),
      $(steps[x])
        [_0x1b3562(0x133)](_0x1b3562(0x1e3))
        [_0x1b3562(0x133)](_0x1b3562(0x243))
        [_0x1b3562(0x1bd)](function (_0x432cb7) {
          const _0x4c9497 = _0x1b3562;
          if ($(this)[_0x4c9497(0x27a)]() !== "") {
            let _0x1e3eb7 = $(this)[_0x4c9497(0x27a)]()[_0x4c9497(0x17c)],
              _0xa5424f = $(this)[_0x4c9497(0x1be)](_0x4c9497(0x132))
                ? $(this)[_0x4c9497(0x1be)](_0x4c9497(0x132))
                : 0x0;
            if ($(this)[_0x4c9497(0x1be)](_0x4c9497(0x208))) {
              var _0x3e1938 = phoneAutoFormat(
                $(this)[_0x4c9497(0x1be)](_0x4c9497(0x208)),
              );
              $(this)[_0x4c9497(0x27a)](_0x3e1938($(this)["val"]()));
            }
            phoneValidation($(this)[_0x4c9497(0x27a)](), _0x1e3eb7, _0xa5424f)
              ? (empReqTel = empReqTel["filter"](
                  (_0x557623) => _0x557623[_0x4c9497(0x14a)] !== _0x432cb7,
                ))
              : empReqTel[_0x4c9497(0x215)]({ input: _0x432cb7 });
          } else
            !empReqTel[_0x4c9497(0x133)](
              (_0x15756f) => _0x15756f[_0x4c9497(0x14a)] === _0x432cb7,
            ) && empReqTel[_0x4c9497(0x215)]({ input: _0x432cb7 }),
              unfilledArr["push"]({
                input: $(this)[_0x4c9497(0x1dc)](_0x4c9497(0x265)),
              });
          empReqTel[_0x4c9497(0x17c)] === 0x0
            ? (telFilled = !![])
            : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x1b3562(0x133)](".active-answer-card")
        [_0x1b3562(0x133)](":input[type=\x22tel\x22]")
        ["each"](function (_0x295c64) {
          const _0x15e82c = _0x1b3562;
          (skipTo = undefined),
            $(this)
              [_0x15e82c(0x26a)]("[data-skip-to]")
              ["data"](_0x15e82c(0x1a2)) !== "" &&
              (skipTo = $(this)
                ["parents"]("[data-skip-to]")
                [_0x15e82c(0x1be)](_0x15e82c(0x1a2))),
            $(this)
              [_0x15e82c(0x26a)](_0x15e82c(0x129))
              [_0x15e82c(0x1dc)](_0x15e82c(0x150)) &&
              ((answer = $(this)
                [_0x15e82c(0x26a)](_0x15e82c(0x129))
                [_0x15e82c(0x1dc)](_0x15e82c(0x150))),
              (selections = selections[_0x15e82c(0x142)](
                (_0x16ed1b) => _0x16ed1b[_0x15e82c(0x183)] !== x,
              )),
              selections[_0x15e82c(0x215)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x15e82c(0x215)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x15e82c(0x138)](
                  (_0x17b6bc) => _0x17b6bc["step"] === x,
                )),
                (selections[objIndex][_0x15e82c(0x17d)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x15e82c(0x179)] = x)));
        }),
      $(steps[x])
        ["find"](_0x1b3562(0x1e3))
        [_0x1b3562(0x133)](_0x1b3562(0x1f7))
        [_0x1b3562(0x1bd)](function (_0x117f1b) {
          const _0x5c8eee = _0x1b3562;
          $(this)[_0x5c8eee(0x27a)]() !== ""
            ? (empReqFile = empReqFile["filter"](
                (_0x715842) => _0x715842["input"] !== _0x117f1b,
              ))
            : (!empReqFile[_0x5c8eee(0x133)](
                (_0x5aa784) => _0x5aa784["input"] === _0x117f1b,
              ) && empReqFile["push"]({ input: _0x117f1b }),
              unfilledArr[_0x5c8eee(0x215)]({
                input: $(this)[_0x5c8eee(0x1dc)](_0x5c8eee(0x265)),
              })),
            empReqFile[_0x5c8eee(0x17c)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x1b3562(0x133)](".active-answer-card")
        [_0x1b3562(0x133)](_0x1b3562(0x18e))
        [_0x1b3562(0x1bd)](function (_0x17555b) {
          const _0x1ea82d = _0x1b3562;
          (skipTo = undefined),
            $(this)
              ["parents"]("[data-skip-to]")
              [_0x1ea82d(0x1be)](_0x1ea82d(0x1a2)) !== "" &&
              (skipTo = $(this)
                [_0x1ea82d(0x26a)](_0x1ea82d(0x1e4))
                [_0x1ea82d(0x1be)](_0x1ea82d(0x1a2))),
            $(this)
              [_0x1ea82d(0x26a)]("[data-go-to]")
              [_0x1ea82d(0x1dc)](_0x1ea82d(0x150)) &&
              ((answer = $(this)
                [_0x1ea82d(0x26a)]("[data-go-to]")
                ["attr"](_0x1ea82d(0x150))),
              (selections = selections["filter"](
                (_0x31421f) => _0x31421f["step"] !== x,
              )),
              selections[_0x1ea82d(0x215)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0x1ea82d(0x138)](
                  (_0xc1849b) => _0xc1849b[_0x1ea82d(0x183)] === x,
                )),
                (selections[objIndex][_0x1ea82d(0x17d)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x1ea82d(0x179)] = x)));
        }),
      $(steps[x])
        [_0x1b3562(0x133)](_0x1b3562(0x1e3))
        [_0x1b3562(0x133)](_0x1b3562(0x230))
        ["each"](function (_0x382ce0) {
          const _0xf7d81a = _0x1b3562;
          $(this)[_0xf7d81a(0x27a)]() !== null &&
          $(this)[_0xf7d81a(0x27a)]() !== ""
            ? (empReqSelect = empReqSelect[_0xf7d81a(0x142)](
                (_0x83734d) => _0x83734d[_0xf7d81a(0x14a)] !== _0x382ce0,
              ))
            : (!empReqSelect[_0xf7d81a(0x133)](
                (_0x9a5d5) => _0x9a5d5[_0xf7d81a(0x14a)] === _0x382ce0,
              ) && empReqSelect[_0xf7d81a(0x215)]({ input: _0x382ce0 }),
              unfilledArr[_0xf7d81a(0x215)]({
                input: $(this)[_0xf7d81a(0x1dc)](_0xf7d81a(0x265)),
              })),
            empReqSelect["length"] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x1b3562(0x133)](_0x1b3562(0x1e3))
        [_0x1b3562(0x133)](_0x1b3562(0x234))
        [_0x1b3562(0x1bd)](function (_0x21f875) {
          const _0x2da912 = _0x1b3562;
          (skipTo = undefined),
            $(this)
              ["parents"](_0x2da912(0x1e4))
              [_0x2da912(0x1be)](_0x2da912(0x1a2)) !== "" &&
              (skipTo = $(this)
                [_0x2da912(0x26a)]("[data-skip-to]")
                [_0x2da912(0x1be)]("skip-to")),
            $(this)
              [_0x2da912(0x26a)](_0x2da912(0x129))
              [_0x2da912(0x1dc)]("data-go-to") &&
              ((answer = $(this)
                [_0x2da912(0x26a)](_0x2da912(0x129))
                ["attr"]("data-go-to")),
              (selections = selections[_0x2da912(0x142)](
                (_0x2c0eb8) => _0x2c0eb8["step"] !== x,
              )),
              selections[_0x2da912(0x215)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x2da912(0x215)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x2da912(0x138)](
                  (_0x2d0f65) => _0x2d0f65[_0x2da912(0x183)] === x,
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x2da912(0x179)] = x)));
        }),
      $(steps[x])
        [_0x1b3562(0x133)](".active-answer-card")
        [_0x1b3562(0x133)]("textarea[required]")
        [_0x1b3562(0x1bd)](function (_0x8a4662) {
          const _0x220e3e = _0x1b3562;
          let _0xfde7c1 = $(this)[_0x220e3e(0x27a)]()[_0x220e3e(0x17c)],
            _0x1d1da2 = $(this)[_0x220e3e(0x1be)](_0x220e3e(0x132))
              ? $(this)["data"](_0x220e3e(0x132))
              : 0x0;
          $(this)[_0x220e3e(0x27a)]() !== "" && _0xfde7c1 >= _0x1d1da2
            ? (empReqTextarea = empReqTextarea[_0x220e3e(0x142)](
                (_0x45d2f0) => _0x45d2f0[_0x220e3e(0x14a)] !== _0x8a4662,
              ))
            : (!empReqTextarea["find"](
                (_0x48eebe) => _0x48eebe["input"] === _0x8a4662,
              ) && empReqTextarea["push"]({ input: _0x8a4662 }),
              unfilledArr[_0x220e3e(0x215)]({
                input: $(this)["attr"]("name"),
              })),
            empReqTextarea[_0x220e3e(0x17c)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x1b3562(0x133)](_0x1b3562(0x1e3))
        [_0x1b3562(0x133)]("textarea")
        [_0x1b3562(0x1bd)](function (_0x59c914) {
          const _0x4ef0cb = _0x1b3562;
          (skipTo = undefined),
            $(this)
              [_0x4ef0cb(0x26a)](_0x4ef0cb(0x1e4))
              [_0x4ef0cb(0x1be)](_0x4ef0cb(0x1a2)) !== "" &&
              (skipTo = $(this)
                [_0x4ef0cb(0x26a)](_0x4ef0cb(0x1e4))
                ["data"](_0x4ef0cb(0x1a2))),
            $(this)
              [_0x4ef0cb(0x26a)](_0x4ef0cb(0x129))
              [_0x4ef0cb(0x1dc)](_0x4ef0cb(0x150)) &&
              ((answer = $(this)
                [_0x4ef0cb(0x26a)]("[data-go-to]")
                [_0x4ef0cb(0x1dc)](_0x4ef0cb(0x150))),
              (selections = selections[_0x4ef0cb(0x142)](
                (_0x1e672b) => _0x1e672b["step"] !== x,
              )),
              selections[_0x4ef0cb(0x215)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x4ef0cb(0x215)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x4ef0cb(0x138)](
                  (_0x3a37a3) => _0x3a37a3[_0x4ef0cb(0x183)] === x,
                )),
                (selections[objIndex][_0x4ef0cb(0x17d)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x4ef0cb(0x179)] = x)));
        }),
      $(steps[x])
        [_0x1b3562(0x133)](_0x1b3562(0x1e3))
        [_0x1b3562(0x133)](":input[type=\x22email\x22][required]")
        [_0x1b3562(0x1bd)](function (_0x313d6c) {
          const _0x312a0c = _0x1b3562;
          $(this)[_0x312a0c(0x27a)]() !== ""
            ? validateEmail(
                $(this)["val"](),
                $(this)[_0x312a0c(0x1be)](_0x312a0c(0x284)),
                $(this)[_0x312a0c(0x1dc)](_0x312a0c(0x265)),
              )
            : ((emailFilled = ![]),
              unfilledArr[_0x312a0c(0x215)]({
                input: $(this)[_0x312a0c(0x1dc)](_0x312a0c(0x265)),
              }));
        }),
      $(steps[x])
        ["find"](_0x1b3562(0x1e3))
        [_0x1b3562(0x133)](_0x1b3562(0x25f))
        [_0x1b3562(0x1bd)](function (_0x572d52) {
          const _0x20ab46 = _0x1b3562;
          (skipTo = undefined),
            $(this)
              [_0x20ab46(0x26a)](_0x20ab46(0x1e4))
              [_0x20ab46(0x1be)]("skip-to") !== "" &&
              (skipTo = $(this)
                ["parents"]("[data-skip-to]")
                [_0x20ab46(0x1be)]("skip-to")),
            $(this)
              [_0x20ab46(0x26a)](_0x20ab46(0x129))
              [_0x20ab46(0x1dc)]("data-go-to") &&
              ((answer = $(this)
                [_0x20ab46(0x26a)](_0x20ab46(0x129))
                [_0x20ab46(0x1dc)](_0x20ab46(0x150))),
              (selections = selections[_0x20ab46(0x142)](
                (_0x2806c9) => _0x2806c9[_0x20ab46(0x183)] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x20ab46(0x215)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x20ab46(0x138)](
                  (_0x3537ca) => _0x3537ca[_0x20ab46(0x183)] === x,
                )),
                (selections[objIndex][_0x20ab46(0x17d)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x20ab46(0x179)] = x)));
        }),
      trackLastStep && saveLastAnswer(selections);
  }
  $(steps[x])[_0x1b3562(0x133)](_0x1b3562(0x282))["is"](_0x1b3562(0x203)) &&
    ((selArr = []),
    $(steps)
      [_0x1b3562(0x133)]("[data-selected]:checked")
      ["each"](function (_0x20abf3, _0x71f148) {
        const _0x45e52c = _0x1b3562;
        selArr[_0x45e52c(0x215)]({
          selected: $(this)["data"](_0x45e52c(0x1df)),
        });
      }),
    (selString = []),
    selArr[_0x1b3562(0x26f)]((_0x57d649) =>
      selString[_0x1b3562(0x215)](_0x57d649[_0x1b3562(0x1df)]),
    ),
    $(steps[x])
      [_0x1b3562(0x133)](_0x1b3562(0x1e3))
      [_0x1b3562(0x133)](_0x1b3562(0x1b9))
      [_0x1b3562(0x1bd)](function () {
        const _0x57dd53 = _0x1b3562;
        skipTo = undefined;
        if (
          $(this)
            [_0x57dd53(0x26a)](_0x57dd53(0x1e4))
            [_0x57dd53(0x1be)](_0x57dd53(0x1a2))
        )
          skipTo = $(this)
            [_0x57dd53(0x26a)](_0x57dd53(0x1e4))
            [_0x57dd53(0x1be)](_0x57dd53(0x1a2));
        else
          $(this)[_0x57dd53(0x1be)](_0x57dd53(0x1a2)) &&
            (skipTo = $(this)["data"](_0x57dd53(0x1a2)));
        selections = selections[_0x57dd53(0x142)](
          (_0x4672da) => _0x4672da[_0x57dd53(0x183)] !== x,
        );
        if ($(this)["data"]("go-to"))
          (answer = $(this)["attr"](_0x57dd53(0x150))),
            selections[_0x57dd53(0x215)]({ step: x, selected: answer }),
            skipTo &&
              (selections["push"]({ step: skipTo - 0x2, selected: answer }),
              (objIndex = selections["findIndex"](
                (_0x30915a) => _0x30915a["step"] === x,
              )),
              (selections[objIndex][_0x57dd53(0x17d)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x57dd53(0x179)] = x));
        else
          $(this)["parents"](_0x57dd53(0x129))[_0x57dd53(0x1be)]("go-to") &&
            ((answer = $(this)
              [_0x57dd53(0x26a)](_0x57dd53(0x129))
              [_0x57dd53(0x1be)]("go-to")),
            selections[_0x57dd53(0x215)]({ step: x, selected: answer }),
            skipTo &&
              (selections["push"]({ step: skipTo - 0x2, selected: answer }),
              (objIndex = selections[_0x57dd53(0x138)](
                (_0x44b02c) => _0x44b02c[_0x57dd53(0x183)] === x,
              )),
              (selections[objIndex][_0x57dd53(0x17d)] = parseInt(skipTo) - 0x1),
              (selections[objIndex]["backTo"] = x)));
      }),
    logicExtra
      ? ($(steps[x])
          [_0x1b3562(0x133)](".active-answer-card")
          [_0x1b3562(0x133)](_0x1b3562(0x180))
          [_0x1b3562(0x1be)]("radio-skip") === !![] ||
          $(steps[x])
            [_0x1b3562(0x133)](_0x1b3562(0x233))
            [_0x1b3562(0x1be)](_0x1b3562(0x281)) === !![]) &&
        skip &&
        selections[_0x1b3562(0x142)](
          (_0x35015c) => _0x35015c[_0x1b3562(0x183)] === x,
        )[_0x1b3562(0x17c)] > 0x0 &&
        textareaLength === 0x0 &&
        textInputLength === 0x0 &&
        emailInputLength === 0x0 &&
        checkboxInputLength === 0x0 &&
        setTimeout(
          function () {
            (next = !![]), nextStep(), selectionQuiz();
          },
          $(steps[x])
            [_0x1b3562(0x133)](_0x1b3562(0x238))
            [_0x1b3562(0x1be)](_0x1b3562(0x1af)),
        )
      : $(steps[x])
          [_0x1b3562(0x133)](_0x1b3562(0x180))
          ["data"](_0x1b3562(0x281)) === !![] &&
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
            [_0x1b3562(0x133)](_0x1b3562(0x238))
            ["data"](_0x1b3562(0x1af)),
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
  const _0x5e379f = _0x16b068;
  $(_0x5e379f(0x1eb))[_0x5e379f(0x198)](),
    unfilledArr[_0x5e379f(0x17c)] > 0x0 &&
      unfilledArr[_0x5e379f(0x26f)](function (_0x581b88) {
        const _0x3852ca = _0x5e379f;
        $(_0x3852ca(0x1d5) + _0x581b88["input"] + "\x22]")
          [_0x3852ca(0x12c)](_0x3852ca(0x1eb))
          [_0x3852ca(0x15e)](),
          $("input[name=\x22" + _0x581b88["input"] + "\x22]")
            [_0x3852ca(0x26a)]()
            [_0x3852ca(0x25b)](_0x3852ca(0x1eb))
            [_0x3852ca(0x15e)](),
          $(_0x3852ca(0x21d) + _0x581b88[_0x3852ca(0x14a)] + "\x22]")
            ["siblings"](_0x3852ca(0x1eb))
            [_0x3852ca(0x15e)](),
          $(_0x3852ca(0x195) + _0x581b88["input"] + "\x22]")
            [_0x3852ca(0x12c)](_0x3852ca(0x1eb))
            [_0x3852ca(0x15e)]();
      });
}
function resetInputErrorMessage(_0x4378c9) {
  const _0x52cb6a = _0x16b068;
  $(_0x52cb6a(0x1d5) + _0x4378c9 + "\x22]")
    [_0x52cb6a(0x12c)](_0x52cb6a(0x1eb))
    [_0x52cb6a(0x198)](),
    $(_0x52cb6a(0x1d5) + _0x4378c9 + "\x22]")
      [_0x52cb6a(0x26a)]()
      [_0x52cb6a(0x25b)]("[data-text=\x22error-message\x22]")
      [_0x52cb6a(0x198)](),
    $(_0x52cb6a(0x21d) + _0x4378c9 + "\x22]")
      [_0x52cb6a(0x12c)](_0x52cb6a(0x1eb))
      [_0x52cb6a(0x198)](),
    $(_0x52cb6a(0x195) + _0x4378c9 + "\x22]")
      [_0x52cb6a(0x12c)](_0x52cb6a(0x1eb))
      [_0x52cb6a(0x198)]();
}
function increaseCurstep() {
  const _0x46b487 = _0x16b068;
  countCard
    ? ((curStep = curStep + 0x1),
      $(_0x46b487(0x167))[_0x46b487(0x1c5)](steps[_0x46b487(0x17c)]))
    : $(steps[x])["data"](_0x46b487(0x236))
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    $("[data-text=\x22current-step\x22]")["text"](curStep);
}
function decreaseCurstep() {
  const _0x4dda97 = _0x16b068;
  countCard
    ? ((curStep = curStep - 0x1),
      $(_0x4dda97(0x167))[_0x4dda97(0x1c5)](steps[_0x4dda97(0x17c)]))
    : $(steps[x])[_0x4dda97(0x1be)]("card")
      ? (curStep = curStep - 0x0)
      : (curStep = curStep - 0x1),
    $("[data-text=\x22current-step\x22]")[_0x4dda97(0x1c5)](curStep);
}
$(_0x16b068(0x184))["on"]("click", function (_0x560e89) {
  const _0x5e60e6 = _0x16b068;
  $(this)["data"]("redirect") &&
    (redirectTo = $(this)[_0x5e60e6(0x1be)]("redirect")),
    !$(this)[_0x5e60e6(0x1be)](_0x5e60e6(0x174)) &&
      (newTab = $(this)[_0x5e60e6(0x1be)](_0x5e60e6(0x174))),
    (successCard = $(this)[_0x5e60e6(0x1be)](_0x5e60e6(0x1c1))),
    _0x560e89[_0x5e60e6(0x1e2)](),
    _0x560e89["stopPropagation"](),
    logicExtra &&
      ($(this)[_0x5e60e6(0x163)](_0x5e60e6(0x211), !![]),
      $(steps)
        [_0x5e60e6(0x133)](_0x5e60e6(0x13b))
        ["prop"](_0x5e60e6(0x13f), ![])),
    localStorage["removeItem"](_0x5e60e6(0x1ad)),
    fill
      ? ($(this)["data"]("wait")
          ? (console[_0x5e60e6(0x1d3)]($(this)["data"](_0x5e60e6(0x1ac))),
            $(this)[_0x5e60e6(0x1c5)](
              $(this)[_0x5e60e6(0x1be)](_0x5e60e6(0x1ac)),
            ))
          : $(this)
              ["val"](_0x5e60e6(0x23c))
              [_0x5e60e6(0x1c5)](_0x5e60e6(0x23c)),
        $(_0x5e60e6(0x1ca))[_0x5e60e6(0x255)](),
        $(_0x5e60e6(0x1f8))[_0x5e60e6(0x17c)] > 0x0 &&
          grecaptcha["getResponse"]()[_0x5e60e6(0x17c)] === 0x0 &&
          (form[_0x5e60e6(0x133)](_0x5e60e6(0x184))["text"](oldSubmitText),
          form["find"](_0x5e60e6(0x184))[_0x5e60e6(0x27a)](oldSubmitText)),
        customError && $(_0x5e60e6(0x1eb))[_0x5e60e6(0x198)]())
      : customError && displayErrorMessage();
});
function nextStep() {
  const _0x500bba = _0x16b068;
  customError
    ? ($("[data-text=\x22error-message\x22]")[_0x500bba(0x198)](),
      fill
        ? (x++,
          increaseCurstep(),
          (progress = x),
          x <= steps[_0x500bba(0x17c)] - 0x1 &&
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
  const _0x48a993 = _0x16b068;
  customError && $(_0x48a993(0x1eb))[_0x48a993(0x198)](),
    decreaseCurstep(),
    x > 0x0 &&
      ($(progressbar[x])[_0x48a993(0x1e7)](_0x48a993(0x16f)),
      selections[_0x48a993(0x142)](
        (_0x15fdef) => _0x15fdef[_0x48a993(0x17d)] === x,
      )[_0x48a993(0x17c)] > 0x0
        ? (x = parseInt(
            getSafe(
              () =>
                selections[_0x48a993(0x142)](
                  (_0x55c9f4) => _0x55c9f4[_0x48a993(0x17d)] === x,
                )[0x0][_0x48a993(0x179)],
            ),
          ))
        : x--,
      updateStep()),
    ($(steps[x])
      [_0x48a993(0x133)](_0x48a993(0x180))
      [_0x48a993(0x1be)](_0x48a993(0x281)) === !![] ||
      $(steps[x])
        ["find"](_0x48a993(0x1e3))
        ["find"](_0x48a993(0x180))
        [_0x48a993(0x1be)](_0x48a993(0x281)) === !![] ||
      $(steps[x])
        [_0x48a993(0x133)](_0x48a993(0x233))
        [_0x48a993(0x1be)](_0x48a993(0x281)) === !![]) &&
      ((all_data = all_data[_0x48a993(0x142)](
        (_0x28c7d2) =>
          _0x28c7d2[_0x48a993(0x237)] !==
          $(steps[x])
            [_0x48a993(0x133)](_0x48a993(0x1c0))
            ["attr"](_0x48a993(0x265)),
      )),
      $(
        _0x48a993(0x27f) +
          $(steps[x])
            [_0x48a993(0x133)](_0x48a993(0x1c0))
            [_0x48a993(0x1dc)](_0x48a993(0x265)) +
          "\x22]",
      )["hide"](),
      $(steps[x])[_0x48a993(0x133)](_0x48a993(0x199))["prop"]("checked", ![]),
      $(steps[x])
        [_0x48a993(0x133)](".w-form-formradioinput")
        [_0x48a993(0x1e7)](_0x48a993(0x126)),
      validation());
}
weightedSelectionRange &&
  $("[data-selection]")[_0x16b068(0x1bd)](function () {
    const _0x13d6b2 = _0x16b068;
    $(this)[_0x13d6b2(0x1fa)](
      "<div\x20data-range=\x22selection\x22\x20style=\x22display:none\x20!important\x22>" +
        $(this)["data"](_0x13d6b2(0x1cd)) +
        "</div>",
    );
  });
function selectionQuiz() {
  const _0x3a67e1 = _0x16b068;
  if ($(this)[_0x3a67e1(0x133)]("[data-btn=\x22check\x22]")) {
    $(_0x3a67e1(0x1c4))[_0x3a67e1(0x198)](), $(_0x3a67e1(0x168))["hide"]();
    if (weightedSelection) {
      (selTotal = 0x0),
        selArr[_0x3a67e1(0x26f)](function (_0x4ea04b) {
          selTotal = selTotal + _0x4ea04b["selected"];
        }),
        $(_0x3a67e1(0x272))[_0x3a67e1(0x1c5)](selTotal);
      if ($(_0x3a67e1(0x1a0) + selTotal + "\x22]")[_0x3a67e1(0x17c)] > 0x0)
        $("[data-selection=\x22" + selTotal + "\x22]")["fadeIn"]();
      else
        $(_0x3a67e1(0x267) + selTotal + ")")
          ? $(_0x3a67e1(0x267) + selTotal + ")")
              [_0x3a67e1(0x1d2)](_0x3a67e1(0x1c4))
              ["eq"](0x0)
              [_0x3a67e1(0x1b5)]()
          : $("[data-selection=\x22other\x22]")["fadeIn"]();
    } else {
      let _0x16b6e8 = -0x1;
      $(_0x3a67e1(0x1c4))[_0x3a67e1(0x1bd)](function (_0x1e48ee) {
        const _0x5ebae2 = _0x3a67e1;
        $($(_0x5ebae2(0x1c4))[_0x1e48ee])
          [_0x5ebae2(0x1be)](_0x5ebae2(0x1cd))
          [_0x5ebae2(0x226)](selString["join"]()) && (_0x16b6e8 = _0x1e48ee);
      }),
        _0x16b6e8 > -0x1
          ? $($("[data-selection]")[_0x16b6e8])[_0x3a67e1(0x15e)]()
          : $(_0x3a67e1(0x13e))[_0x3a67e1(0x15e)]();
    }
  }
}
function triggerInputAllData() {
  const _0x53f7da = _0x16b068;
  if (savedFilledInput && memory)
    savedFilledInput[_0x53f7da(0x26f)]((_0x5c4947) => {
      const _0x14c1d6 = _0x53f7da;
      var _0x49fd37 = $(
          _0x14c1d6(0x1d5) +
            _0x5c4947[_0x14c1d6(0x13d)] +
            "\x22][value=\x22" +
            _0x5c4947[_0x14c1d6(0x232)] +
            _0x14c1d6(0x171),
        ),
        _0x3bf7c6 = $(
          _0x14c1d6(0x1d5) + _0x5c4947["inputName"] + _0x14c1d6(0x171),
        ),
        _0x112142 = $(
          _0x14c1d6(0x21d) +
            _0x5c4947[_0x14c1d6(0x13d)] +
            "\x22]:not([data-prefill=\x22false\x22])",
        ),
        _0x5d9e1e = $(_0x14c1d6(0x12b) + _0x5c4947[_0x14c1d6(0x13d)] + "\x22]"),
        _0x4af8da = $(
          _0x14c1d6(0x205) +
            _0x5c4947[_0x14c1d6(0x13d)] +
            "\x22][value=\x22" +
            _0x5c4947[_0x14c1d6(0x232)] +
            _0x14c1d6(0x171),
        );
      if (_0x49fd37["attr"](_0x14c1d6(0x189)) !== _0x14c1d6(0x24c)) {
        if (
          _0x49fd37[_0x14c1d6(0x1dc)](_0x14c1d6(0x189)) === "radio" &&
          !_0x49fd37[_0x14c1d6(0x26a)](_0x14c1d6(0x27e))[_0x14c1d6(0x1be)](
            _0x14c1d6(0x281),
          )
        )
          _0x49fd37[_0x14c1d6(0x274)](),
            _0x49fd37[_0x14c1d6(0x12c)](".w-radio-input")[_0x14c1d6(0x156)](
              _0x14c1d6(0x126),
            ),
            _0x49fd37["trigger"](_0x14c1d6(0x14a));
        else
          _0x5c4947[_0x14c1d6(0x232)] === "on"
            ? (_0x3bf7c6["click"](),
              _0x3bf7c6[_0x14c1d6(0x12c)](_0x14c1d6(0x277))[_0x14c1d6(0x156)](
                _0x14c1d6(0x126),
              ),
              _0x3bf7c6["trigger"](_0x14c1d6(0x14a)))
            : (_0x3bf7c6["val"](_0x5c4947["value"]),
              _0x112142[_0x14c1d6(0x27a)](_0x5c4947[_0x14c1d6(0x232)]),
              $(_0x14c1d6(0x131))
                [_0x14c1d6(0x133)](
                  _0x14c1d6(0x160) + _0x5c4947["value"] + "\x22]",
                )
                ["prop"]("selected", !![]),
              _0x3bf7c6["trigger"]("input"),
              _0x3bf7c6["trigger"]("change"));
        const _0x1d7095 = _0x4af8da["data"](_0x14c1d6(0x26d)),
          _0x485246 = _0x5d9e1e["data"]("click-addclass");
        _0x4af8da["parent"]()["addClass"](_0x1d7095),
          _0x5d9e1e[_0x14c1d6(0x1d2)]()[_0x14c1d6(0x156)](_0x485246);
      }
    });
  else
    _params &&
      (getParams(),
      searchQ[_0x53f7da(0x26f)]((_0x27049b) => {
        const _0x4c9fa6 = _0x53f7da;
        if (
          $(
            _0x4c9fa6(0x1d5) +
              _0x27049b["inputName"] +
              _0x4c9fa6(0x1c2) +
              _0x27049b[_0x4c9fa6(0x232)] +
              _0x4c9fa6(0x171),
          )[_0x4c9fa6(0x1dc)](_0x4c9fa6(0x189)) !== "file"
        ) {
          if (
            $(
              "input[name=\x22" +
                _0x27049b[_0x4c9fa6(0x1de)] +
                "\x22][value=\x22" +
                _0x27049b[_0x4c9fa6(0x27a)] +
                "\x22]:not([data-prefill=\x22false\x22])",
            )["attr"]("type") === _0x4c9fa6(0x259)
          )
            $(
              _0x4c9fa6(0x1d5) +
                _0x27049b[_0x4c9fa6(0x1de)] +
                "\x22][value=\x22" +
                _0x27049b["val"] +
                _0x4c9fa6(0x171),
            )[_0x4c9fa6(0x274)](),
              $(
                "input[name=\x22" +
                  _0x27049b[_0x4c9fa6(0x1de)] +
                  _0x4c9fa6(0x1c2) +
                  _0x27049b[_0x4c9fa6(0x27a)] +
                  "\x22]:not([data-prefill=\x22false\x22])",
              )
                ["siblings"](".w-radio-input")
                [_0x4c9fa6(0x156)]("w--redirected-checked"),
              $(
                _0x4c9fa6(0x1d5) +
                  _0x27049b["key"] +
                  _0x4c9fa6(0x1c2) +
                  _0x27049b[_0x4c9fa6(0x27a)] +
                  _0x4c9fa6(0x171),
              )["trigger"](_0x4c9fa6(0x14a));
          else
            _0x27049b["val"] === "on"
              ? ($(
                  _0x4c9fa6(0x1d5) +
                    _0x27049b[_0x4c9fa6(0x1de)] +
                    _0x4c9fa6(0x171),
                )["click"](),
                $(
                  "input[name=\x22" +
                    _0x27049b[_0x4c9fa6(0x1de)] +
                    _0x4c9fa6(0x171),
                )
                  ["siblings"](_0x4c9fa6(0x277))
                  ["addClass"](_0x4c9fa6(0x126)),
                $("input[name=\x22" + _0x27049b[_0x4c9fa6(0x1de)] + "\x22]")[
                  _0x4c9fa6(0x214)
                ](_0x4c9fa6(0x14a)))
              : ($(_0x4c9fa6(0x1d5) + _0x27049b["key"] + _0x4c9fa6(0x171))[
                  _0x4c9fa6(0x27a)
                ](_0x27049b[_0x4c9fa6(0x27a)]),
                $(
                  _0x4c9fa6(0x21d) +
                    _0x27049b[_0x4c9fa6(0x1de)] +
                    _0x4c9fa6(0x171),
                )[_0x4c9fa6(0x27a)](_0x27049b[_0x4c9fa6(0x27a)]),
                $(
                  _0x4c9fa6(0x195) +
                    _0x27049b[_0x4c9fa6(0x1de)] +
                    "\x22]:not([data-prefill=\x22false\x22])",
                )
                  [_0x4c9fa6(0x133)](
                    "option[value=\x22" + _0x27049b[_0x4c9fa6(0x27a)] + "\x22]",
                  )
                  [_0x4c9fa6(0x163)](_0x4c9fa6(0x1df), !![]),
                $(
                  "input[name=\x22" +
                    _0x27049b["key"] +
                    "\x22]:not([data-prefill=\x22false\x22])",
                )[_0x4c9fa6(0x214)](_0x4c9fa6(0x14a)),
                $(
                  _0x4c9fa6(0x1d5) +
                    _0x27049b[_0x4c9fa6(0x1de)] +
                    _0x4c9fa6(0x171),
                )[_0x4c9fa6(0x214)](_0x4c9fa6(0x26e)));
        }
      }));
}
$("[data-form=\x22next-btn\x22]")["on"](_0x16b068(0x274), function () {
  (next = !![]), nextStep(), selectionQuiz();
}),
  $(_0x16b068(0x209))["on"]("click", function () {
    (next = ![]), (back = !![]), backStep();
  }),
  $(steps)
    ["find"](_0x16b068(0x13b))
    [_0x16b068(0x212)](_0x16b068(0x194))
    ["on"](_0x16b068(0x14a), function (_0x4f03a0) {
      validation(), andLogic(), addClickClass();
    }),
  $(steps)
    [_0x16b068(0x133)]("input[type=\x22radio\x22]")
    ["on"]("click", function () {
      (skip = !![]), validation(), addClickClass();
    });
$(_0x16b068(0x1ed))[_0x16b068(0x1be)](_0x16b068(0x239))
  ? $("[data-form=\x22custom-progress-indicator\x22]")["removeClass"](
      _0x16b068(0x253),
    )
  : $("[data-form=\x22custom-progress-indicator\x22]")[_0x16b068(0x156)](
      _0x16b068(0x253),
    );
function clickableIndicator() {
  const _0x5e3e87 = _0x16b068;
  $(_0x5e3e87(0x1f9))[_0x5e3e87(0x1be)](_0x5e3e87(0x268)) &&
    ($(_0x5e3e87(0x16d))[_0x5e3e87(0x1e7)](_0x5e3e87(0x16f)),
    $(_0x5e3e87(0x1f9))[_0x5e3e87(0x1be)](_0x5e3e87(0x239))
      ? ((x = $(this)[_0x5e3e87(0x187)]()), updateStep())
      : $(this)[_0x5e3e87(0x187)]() <= progress &&
        ((x = $(this)[_0x5e3e87(0x187)]()), updateStep())),
    $(_0x5e3e87(0x266))[_0x5e3e87(0x1c5)](x + 0x1);
}
$("[data-form=\x22custom-progress-indicator\x22]")["on"](
  _0x16b068(0x274),
  clickableIndicator,
);
$(_0x16b068(0x1ca))[_0x16b068(0x1be)](_0x16b068(0x152)) &&
  ($(_0x16b068(0x129))[_0x16b068(0x1bd)](function () {
    const _0x441654 = _0x16b068;
    $(this)[_0x441654(0x1fa)](
      _0x441654(0x16c),
      $(this)[_0x441654(0x1be)]("go-to"),
    );
  }),
  $(_0x16b068(0x197))[_0x16b068(0x1bd)](function () {
    const _0x33699a = _0x16b068;
    $(this)[_0x33699a(0x1fa)](
      _0x33699a(0x245),
      $(this)["data"](_0x33699a(0x1b6)),
    );
  }));
function resetFormly() {
  const _0x474180 = _0x16b068;
  $("[data-form=\x22multistep\x22]")[_0x474180(0x214)]("reset"),
    $(_0x474180(0x1ca))
      ["parents"]()
      [_0x474180(0x133)](_0x474180(0x125))
      ["hide"](),
    (x = 0x0),
    updateStep(),
    $(_0x474180(0x1ca))[_0x474180(0x1b5)](),
    $(_0x474180(0x184))[_0x474180(0x1c5)](oldSubmitText),
    $(_0x474180(0x184))["val"](oldSubmitText),
    $(_0x474180(0x266))[_0x474180(0x1c5)](0x1),
    $(_0x474180(0x1ca))
      ["find"](_0x474180(0x16b))
      [_0x474180(0x12c)](_0x474180(0x277))
      [_0x474180(0x1e7)](_0x474180(0x126));
}
function _0x556c() {
  const _0x4a8c34 = [
    "data-radio-skip",
    "textarea[required]",
    "display",
    "novalidate",
    "not",
    "top",
    "trigger",
    "push",
    "script[src=\x22",
    "\x22][data-progressive-input-value=\x22",
    "\x22]:checked",
    "<strong\x20class=\x22f-text-white\x22>Checkboxes\x20",
    "get",
    "remove",
    "checkbox",
    "textarea[name=\x22",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Next\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button\x20",
    "[data-quiz]",
    "FAIL",
    "parentNode",
    "appendChild",
    "url",
    "\x22]\x20input",
    "trim",
    "includes",
    "keypress",
    "[data-count-card]",
    "[data-enter=\x22true\x22]",
    "[data-redirect-delay]",
    "closest",
    ":input[type=\x22time\x22][required]",
    "<option>",
    "input:radio[name=\x22",
    "[data-form=\x22remove-input-clone\x22]",
    "select[required]",
    "focus",
    "value",
    "[data-answer][data-radio-skip]:visible",
    "select",
    "data-input-field",
    "card",
    "field",
    "[data-radio-delay]",
    "clickable-all",
    "[data-progressive-input]:not(:visible)",
    ":input[type=\x22checkbox\x22][required]:checked",
    "Please\x20wait...",
    "[data-clone=\x22",
    "[data-display]",
    "10782AFmRUU",
    "logic-extra",
    "searchParams",
    "[type=\x22submit\x22]",
    ":input[type=\x22tel\x22][required]",
    ":input[type=\x22url\x22][required]",
    "<br>Data\x20Answer\x20=\x20",
    "f-mySidenav",
    "active-answer-card",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Multistep\x20form\x20attribute\x20is\x20on\x20Form\x20element\x20and\x20not\x20on\x20Form\x20Block\x20element\x0a\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>2.\x20Form\x20Steps:\x20data-form=step\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "textarea:focus",
    "[data-weighted-selection-range]",
    "376444zjbRUu",
    "file",
    "[data-btn=\x22edit\x22]",
    "test",
    ":input[type=\x22password\x22][required]",
    "tagName",
    "[data-select-multiple]",
    ":input[type=\x22password\x22]",
    "disabled",
    "AND",
    "submit",
    "</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Attributes</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>1.\x20Form:\x20data-form=multistep\x20",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>4.\x20Back\x20Buttons:\x20data-form=next-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Back\x20button\x20present?\x20",
    "reset-delay",
    "radio",
    "option[value=\x22$(this).val()\x22]",
    "children",
    "[data-cms-select=text]",
    ":first",
    "[data-success-card=\x22",
    ":input[type=\x22email\x22]",
    "\x22]\x20textarea",
    "[data-display-input=\x22",
    ":input[type=\x22checkbox\x22][required]:not(:checked)",
    "toLowerCase",
    ":input[type=\x22checkbox\x22][required]",
    "name",
    "[data-text=\x22current-step\x22]",
    "[data-range]:contains(",
    "clickable",
    "4ruzhyR",
    "parents",
    "[data-clone]",
    "head",
    "click-addclass",
    "change",
    "forEach",
    "reset",
    "last-step",
    "[data-text=\x22total-weight\x22]",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>3.\x20Next\x20Buttons:\x20data-form=back-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Next\x20button\x20present?\x20",
    "click",
    "[data-form=\x22next-btn\x22]",
    "<strong\x20class=\x22f-text-white\x22>Total\x20Step\x20Text\x20",
    ".w-checkbox-input",
    "1517754SjfxuB",
    "3863795eUibXd",
    "val",
    "[data-progressive-input=\x22",
    "script",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Powerups</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "[data-radio-skip]",
    "[data-input-field=\x22",
    "form[data-form=\x22multistep\x22]",
    "radio-skip",
    ":input[type=\x22radio\x22]",
    "querySelectorAll",
    "block-domain",
    "<span\x20class=\x22f-icon-embed-xxsmall-2\x20w-embed\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--carbon\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2032\x2032\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M16\x202C8.2\x202\x202\x208.2\x202\x2016s6.2\x2014\x2014\x2014s14-6.2\x2014-14S23.8\x202\x2016\x202m5.4\x2021L16\x2017.6L10.6\x2023L9\x2021.4l5.4-5.4L9\x2010.6L10.6\x209l5.4\x205.4L21.4\x209l1.6\x201.6l-5.4\x205.4l5.4\x205.4z\x22></path></svg></span>",
    ":input[type=\x22email\x22][required]",
    ".w-form-done",
    "w--redirected-checked",
    ":input[type=\x22checkbox\x22]",
    "[data-query-param]",
    "[data-go-to]",
    "[data-progressive-target]",
    "input[type=\x22checkbox\x22][name=\x22",
    "siblings",
    "[data-form=\x22remove-clone\x22]",
    "some",
    "add-new-input",
    "\x0a\x20\x20.f-icon-embed-xxsmall-2\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#ff3232\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x20\x20.f-icon-embed-xxsmall\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#57ff4b\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20{\x0a\x20\x20\x20\x20height:\x20100%\x20!important;\x0a\x20\x20\x20\x20width:\x200;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20z-index:\x20999999999999\x20!important;\x0a\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20background-color:\x20#081019\x20!important;\x0a\x20\x20\x20\x20overflow-x:\x20hidden\x20!important;\x0a\x20\x20\x20\x20padding-top:\x2060px\x20!important;\x0a\x20\x20\x20\x20transition:\x200.5s\x20!important;\x0a\x20\x20\x20\x20font-size:\x2015px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73)\x20!important;\x0a\x20\x20\x20\x20font-family:system-ui\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-section-title-text,\x20.f-support-text,\x20.f-openbtn{\x0a\x20\x20\x20\x20font-size:\x2015px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73);\x0a\x20\x20\x20\x20font-family:system-ui\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20p,\x20.f-sidenav\x20strong\x20{\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20space-between\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x204px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73);\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20.f-closebtn\x20{\x0a\x20\x20\x20\x20position:\x20absolute\x20!important;\x0a\x20\x20\x20\x20top:\x2025px\x20!important;\x0a\x20\x20\x20\x20right:\x2025px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2036px\x20!important;\x0a\x20\x20\x20\x20margin-left:\x2050px\x20!important;\x0a\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20color:\x20#e7e7e7\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-core-setup\x20{\x0a\x20\x20\x20\x20padding:\x2012px\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x2011px\x20!important;\x0a\x20\x20\x20\x20border-radius:\x206px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20#f-main\x20{\x0a\x20\x20\x20\x20transition:\x20margin-left\x20.5s\x20!important;\x0a\x20\x20\x20\x20padding:\x2020px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-main-content\x20{\x0a\x20\x20\x20\x20transition:\x20margin-left\x20.5s\x20!important;\x0a\x20\x20\x20\x20padding:\x2020px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-form-step\x20{\x0a\x20\x20\x20\x20padding-left:\x2010px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-openbtn\x20{\x0a\x20\x20\x20\x20white-space:\x20nowrap\x20!important;\x0a\x20\x20\x20\x20cursor:\x20pointer\x20!important;\x0a\x20\x20\x20\x20box-shadow:\x200\x200\x200\x201px\x20rgba(0,\x200,\x200,\x20.1),\x200\x201px\x203px\x20rgba(0,\x200,\x200,\x20.1)\x20!important;\x0a\x20\x20\x20\x20visibility:\x20visible\x20!important;\x0a\x20\x20\x20\x20z-index:\x2099\x20!important;\x0a\x20\x20\x20\x20color:\x20#e7e7e7\x20!important;\x0a\x20\x20\x20\x20opacity:\x201\x20!important;\x0a\x20\x20\x20\x20width:\x20auto\x20!important;\x0a\x20\x20\x20\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20background-color:\x20#1e1e1e\x20!important;\x0a\x20\x20\x20\x20border-radius:\x203px\x20!important;\x0a\x20\x20\x20\x20margin:\x200\x20!important;\x0a\x20\x20\x20\x20padding:\x206px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2013px\x20!important;\x0a\x20\x20\x20\x20line-height:\x2014px\x20!important;\x0a\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20top:\x20auto\x20!important;\x0a\x20\x20\x20\x20bottom:\x2012px\x20!important;\x0a\x20\x20\x20\x20left:\x2012px\x20!important;\x0a\x20\x20\x20\x20right:\x20auto\x20!important;\x0a\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20transform:\x20none\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-text-header{\x0a\x20\x20\x20\x20color:\x20#fff\x20!important;\x0a\x20\x20\x20\x20font-size:\x201.8rem\x20!important;\x0a\x20\x20\x20\x20font-weight:\x20600\x20!important;\x0a\x20\x20\x20\x20line-height:\x201.2\x20!important;\x0a\x20\x20\x20\x20margin-bottom:4px\x0a\x20\x20}\x0a\x0a\x20\x20@media\x20screen\x20and\x20(max-height:\x20450px)\x20{\x0a\x20\x20\x20\x20.sidenav\x20{\x20padding-top:\x2015px\x20!important;\x20}\x0a\x20\x20\x20\x20.sidenav\x20a\x20{\x20font-size:\x2018px\x20!important;\x20}\x0a\x20\x20}\x0a\x0a\x20\x20.f-section-title-text{\x0a\x20\x20\x20\x20color:\x20#fff\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x2010px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2018px\x20!important;\x0a\x20\x20\x20\x20font-weight:\x20700\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-div-support-section{\x0a\x20\x20\x20\x20padding-top:1rem\x20!important;\x0a\x20\x20\x20\x20padding-bottom:1rem\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-text-white{\x0a\x20\x20\x20\x20color:\x20white\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-spacer{\x0a\x20\x20\x20\x20padding-top:8px\x20!important;\x0a\x20\x20}\x0a",
    "select:not([data-prefill=\x22false\x22])",
    "min-character",
    "find",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>5.\x20Submit\x20Buttons:\x20data-form=next-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Submit\x20button\x20present?\x20",
    "edit-step",
    "[data-add-new]",
    "metaKey",
    "findIndex",
    "phone-validation",
    "[data-cms-select=input]",
    ":input",
    "conditional-result",
    "inputName",
    "[data-selection=\x22other\x22]",
    "required",
    "getElementById",
    "[data-form-ms=\x22submit-btn\x22]",
    "filter",
    "select-multiple",
    ":input[type=\x22date\x22][required]",
    ":input[type=\x22time\x22]",
    "span",
    "count-card",
    "[data-input-index=\x22",
    "ms-field",
    "input",
    "slice",
    "data-name",
    "formly-support",
    ":input[type=\x22text\x22]",
    "keyCode",
    "data-go-to",
    "6362814vToYDQ",
    "debug-mode",
    "[data-progressive-input]",
    "css",
    "stringify",
    "addClass",
    "padding",
    "[data-conditional-result]",
    "[data-clone-wrapper=\x22",
    "[data-checkbox]",
    ":input[type=\x22text\x22][required]",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a",
    "input:radio[required]",
    "fadeIn",
    "[data-clone-wrapper]",
    "option[value=\x22",
    "[data-remove-upload]",
    "none",
    "prop",
    "<strong\x20class=\x22f-text-white\x22>Custom\x20Progress\x20Indicators\x20",
    "[data-form=\x22submit\x22]:visible",
    "html,\x20body",
    "[data-text=\x22total-steps\x22]",
    "[data-selection-weight]",
    "[data-form=\x22step\x22]",
    "open",
    "input:checkbox",
    "<br>Data\x20Go\x20To\x20=\x20",
    "[data-form=\x22progress-indicator\x22]",
    "submit-show",
    "current",
    "[data-input-field]",
    "\x22]:not([data-prefill=\x22false\x22])",
    "[data-reset-delay]",
    "last",
    "new-tab",
    "[data-btn=\x22reset\x22]",
    "src",
    "style",
    "[data-form=\x22submit-btn\x22]:visible",
    "backTo",
    "stopPropagation",
    ":input[type=\x22number\x22][required]",
    "length",
    "skipTo",
    "redirect-delay",
    "getElementsByTagName",
    "[data-radio-skip]:visible",
    "location",
    "[data-form=\x22progress\x22]",
    "step",
    "[data-form=\x22submit-btn\x22]",
    ":focus",
    "destroy",
    "index",
    "[data-click-addclass]",
    "type",
    "<strong\x20class=\x22f-text-white\x22>Current\x20Step\x20Text\x20",
    ":input[type=\x22url\x22]",
    "Webflow",
    "<strong\x20class=\x22f-text-white\x22>Press\x20\x22⌘\x20+\x20Enter\x20\x22\x20To\x20Submit\x20",
    ":input[type=\x22file\x22]",
    "offset",
    "querySelector",
    "[data-clone-input=\x22",
    "24152gwCsHO",
    "dispatchEvent",
    "[type=\x22radio\x22]",
    "select[name=\x22",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "[data-answer]",
    "hide",
    "input[type=\x22radio\x22]",
    "\x22]\x20[data-input-field^=\x22",
    "form[data-form=\x22multistep\x22]\x20:input",
    "remove-upload",
    "9560663XgpFwi",
    "textarea",
    "textarea[autofocus]",
    "[data-selection=\x22",
    ":input[type=\x22date\x22]",
    "skip-to",
    "[data-callback=\x22recaptcha\x22]",
    "setItem",
    "_blank",
    "35%",
    "width",
    "1126264ohqvyk",
    "split",
    "getItem",
    "[data-display-input-wrapper=\x22",
    "wait",
    "filledInput",
    "replace",
    "radio-delay",
    "custom-error-message",
    "data-form",
    "scroll-top-offset",
    "0.4",
    ":input[type=\x22checkbox\x22]:checked",
    "show",
    "answer",
    "clone-input",
    "\x22]\x20select",
    ":input[type=\x27radio\x27]:checked",
    "\x22][data-progressive-input-value=\x22*\x22]",
    "auto",
    "reinit",
    "each",
    "data",
    "[data-clone-input]",
    "input[type=\x22radio\x22]:checked",
    "success",
    "\x22][value=\x22",
    "Before\x20&lt;/body&gt;\x20tag",
    "[data-selection]",
    "text",
    "formly",
    "search",
    "div",
    "progressive-input",
    "[data-form=\x22multistep\x22]",
    "<span\x20class=\x22f-icon-embed-xxsmall\x20w-embed\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010s10-4.48\x2010-10S17.52\x202\x2012\x202m-2\x2015l-5-5l1.41-1.41L10\x2014.17l7.59-7.59L19\x208z\x22></path></svg></span>",
    "body",
    "selection",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Submit\x20button\x20attribute\x20IS\x20on\x20Form\x20Submit\x20Button\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "[data-form=\x22step\x22][data-card]",
    "[data-show-if]",
    "[data-last-step]",
    "parent",
    "log",
    "startsWith",
    "input[name=\x22",
    "[type=\x22checkbox\x22]",
    "[data-reinit]",
    "quiz",
    "formlyLastStepAnswer",
    "parse",
    "[data-form=\x22custom-progress-indicator\x22]",
    "attr",
    "input[type=\x22submit\x22]",
    "key",
    "selected",
    "[data-radio-skip=\x22true\x22]",
    "[data-index=\x22",
    "preventDefault",
    ".active-answer-card",
    "[data-skip-to]",
    "</strong>",
    "[data-display-wrapper=\x22",
    "removeClass",
    "[data-form=\x22next-btn\x22][data-submit-show]",
    "clone",
    "multistep",
    "[data-text=\x22error-message\x22]",
    "true",
    "[data-clickable-all]",
    "[data-display=\x22",
    "FormlyLogic\x20enabled",
    "data-skip-to",
    "formlyLastStep",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Back\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button",
    "[data-enter]",
    "weighted-selection-range",
    "[data-progressive-target=\x22",
    "<strong\x20class=\x22f-text-white\x22>Radio\x20Inputs\x20",
    ":input[type=\x22file\x22][required]",
    "div.g-recaptcha",
    "[data-clickable]",
    "append",
    "[data-display-input-index=\x22",
    "ctrlKey",
    "[data-add-new-input]",
    "data-radio-delay",
    "go-to",
    "input[type=\x22email\x22]:visible",
    "weighted-selection",
    "PASS",
    ":checked",
    "href",
    "input[type=\x22radio\x22][name=\x22",
    "init",
    "[data-form=\x22step\x22]:not([data-card=\x22true\x22])",
    "phone-autoformat",
    "[data-form=\x22back-btn\x22]",
    "input[type=\x22text\x22][required]:visible",
    "status",
    "[data-answer=\x22",
    "relationship-",
  ];
  _0x556c = function () {
    return _0x4a8c34;
  };
  return _0x556c();
}
$(document)["ajaxComplete"](function (_0x295a69, _0x5deccf, _0x254d55) {
  const _0x47c47a = _0x16b068;
  if (
    _0x254d55[_0x47c47a(0x223)][_0x47c47a(0x226)](
      "https://webflow.com/api/v1/form/",
    )
  ) {
    const _0x5ec8a1 = _0x5deccf[_0x47c47a(0x20b)] === 0xc8,
      _0x1db09c = "redirect-form-hehexd";
    redirectTo &&
      _0x5ec8a1 &&
      (newTab
        ? window[_0x47c47a(0x16a)](redirectTo, _0x47c47a(0x1a5))
        : setTimeout(() => {
            const _0x494811 = _0x47c47a;
            location[_0x494811(0x204)] = redirectTo;
          }, redirectDelay)),
      _0x5ec8a1 &&
        successCard !== "" &&
        $(_0x47c47a(0x25e) + successCard + "\x22]")[_0x47c47a(0x15e)](),
      _0x5ec8a1 &&
        formReset &&
        setTimeout(() => {
          resetFormly();
        }, resetDelay),
      !_0x5ec8a1 &&
        ($(_0x47c47a(0x184))[_0x47c47a(0x27a)](_0x47c47a(0x23c)),
        $("[data-form=\x22submit-btn\x22]")["text"](_0x47c47a(0x23c)));
  }
}),
  $(_0x16b068(0x24d))["on"](_0x16b068(0x274), function () {
    const _0x25ea39 = _0x16b068;
    var _0x9aa108 = $(this)
      [_0x25ea39(0x1d2)]()
      [_0x25ea39(0x133)]("[data-input-field]")
      [_0x25ea39(0x1be)]("input-field");
    setTimeout(function () {
      const _0x1be24e = _0x25ea39;
      $(_0x1be24e(0x1d5) + _0x9aa108 + "\x22]")["focus"]();
    }, 0x64),
      (back = !![]),
      (x = $(this)[_0x25ea39(0x1be)](_0x25ea39(0x135)) - 0x1),
      updateStep(),
      countCard
        ? ((curStep = x + 0x1),
          $(_0x25ea39(0x167))[_0x25ea39(0x1c5)](steps[_0x25ea39(0x17c)]))
        : $(steps[x])[_0x25ea39(0x1be)]("card")
          ? (curStep = x + 0x0)
          : (curStep = x + 0x1),
      $(_0x25ea39(0x266))[_0x25ea39(0x1c5)](curStep),
      (back = ![]);
  }),
  $(_0x16b068(0x175))["on"](_0x16b068(0x274), function () {
    const _0x475511 = _0x16b068;
    $("[data-form=\x22multistep\x22]")[_0x475511(0x214)](_0x475511(0x270));
    let _0x583fa1 = $(this);
    $(this)[_0x475511(0x1c5)]("Please\x20wait..."),
      setTimeout(function () {
        const _0x311f90 = _0x475511;
        $(_0x583fa1)[_0x311f90(0x1c5)](oldResetText),
          $(_0x583fa1)["parents"](_0x311f90(0x125))[_0x311f90(0x198)](),
          (x = 0x0),
          updateStep(),
          $("[data-form=\x22multistep\x22]")["show"](),
          $(_0x311f90(0x184))[_0x311f90(0x1c5)](oldSubmitText),
          $(_0x311f90(0x184))[_0x311f90(0x27a)](oldSubmitText),
          $(_0x583fa1)[_0x311f90(0x27a)](oldSubmitText),
          $(_0x311f90(0x266))[_0x311f90(0x1c5)](0x1),
          $(_0x311f90(0x1ca))
            ["find"](_0x311f90(0x16b))
            [_0x311f90(0x12c)](_0x311f90(0x277))
            [_0x311f90(0x1e7)](_0x311f90(0x126));
      }, resetDelay);
  }),
  $("body")["on"](_0x16b068(0x227), function (_0x26df19) {
    const _0x52aef8 = _0x16b068;
    if (_0x26df19[_0x52aef8(0x14f)] === 0xd) {
      _0x26df19[_0x52aef8(0x1e2)](), _0x26df19[_0x52aef8(0x17a)]();
      if (
        $(steps[x])[_0x52aef8(0x133)](_0x52aef8(0x19e))["is"](_0x52aef8(0x185))
      )
        $(steps[x])
          [_0x52aef8(0x133)](_0x52aef8(0x249))
          [_0x52aef8(0x27a)](
            $(steps[x])
              [_0x52aef8(0x133)](_0x52aef8(0x249))
              [_0x52aef8(0x27a)]() + "\x0a",
          );
      else
        $(_0x52aef8(0x1f3))[_0x52aef8(0x1be)]("enter") &&
          fill &&
          totalSteps > curStep &&
          $("[data-form=\x22next-btn\x22]")[0x0][_0x52aef8(0x274)]();
    }
  }),
  $(_0x16b068(0x1cc))["keydown"](function (_0x24e833) {
    const _0x33dc5d = _0x16b068;
    (_0x24e833[_0x33dc5d(0x137)] || _0x24e833[_0x33dc5d(0x1fc)]) &&
      _0x24e833["keyCode"] == 0xd &&
      (x >= steps[_0x33dc5d(0x17c)] - 0x1 && fill
        ? $(steps[x])["find"](_0x33dc5d(0x178))[_0x33dc5d(0x274)]()
        : (_0x24e833[_0x33dc5d(0x1e2)](), _0x24e833["stopPropagation"]()));
  }),
  $(_0x16b068(0x1ca))
    ["find"](_0x16b068(0x13b))
    ["on"]("change", function () {
      const _0x5cb4a4 = _0x16b068;
      (all_data = all_data[_0x5cb4a4(0x142)](
        (_0x130675) =>
          _0x130675["field"] !== $(this)[_0x5cb4a4(0x1dc)](_0x5cb4a4(0x265)),
      )),
        $(this)[_0x5cb4a4(0x1dc)](_0x5cb4a4(0x189)) === "checkbox"
          ? $(this)["is"](_0x5cb4a4(0x203))
            ? all_data["push"]({
                field: $(this)[_0x5cb4a4(0x1dc)](_0x5cb4a4(0x265)),
                value: $(this)
                  [_0x5cb4a4(0x12c)](_0x5cb4a4(0x146))
                  [_0x5cb4a4(0x1c5)](),
              })
            : $(_0x5cb4a4(0x27f) + $(this)[_0x5cb4a4(0x1dc)]("name") + "\x22]")[
                _0x5cb4a4(0x198)
              ]()
          : (all_data[_0x5cb4a4(0x215)]({
              field: $(this)["attr"]("name"),
              value: $(this)[_0x5cb4a4(0x27a)](),
            }),
            $(this)[_0x5cb4a4(0x27a)]() !== "" &&
              resetInputErrorMessage(
                $(this)[_0x5cb4a4(0x1dc)](_0x5cb4a4(0x265)),
              )),
        all_data[_0x5cb4a4(0x26f)](function (_0x12fc5a) {
          const _0x540622 = _0x5cb4a4;
          $(_0x540622(0x27f) + _0x12fc5a[_0x540622(0x237)] + "\x22]")[
            _0x540622(0x1b5)
          ](),
            $(_0x540622(0x27f) + _0x12fc5a[_0x540622(0x237)] + "\x22]")[
              _0x540622(0x1c5)
            ](_0x12fc5a[_0x540622(0x232)]);
        });
    }),
  $(_0x16b068(0x1ca))
    [_0x16b068(0x133)](_0x16b068(0x19e))
    ["on"](_0x16b068(0x26e), function () {
      const _0x116c00 = _0x16b068;
      $(this)[_0x116c00(0x27a)]() !== "" &&
        resetInputErrorMessage($(this)[_0x116c00(0x1dc)](_0x116c00(0x265))),
        (all_data = all_data["filter"](
          (_0x16048b) =>
            _0x16048b[_0x116c00(0x237)] !==
            $(this)[_0x116c00(0x1dc)](_0x116c00(0x265)),
        )),
        all_data[_0x116c00(0x215)]({
          field: $(this)[_0x116c00(0x1dc)](_0x116c00(0x265)),
          value: $(this)[_0x116c00(0x27a)](),
        }),
        all_data[_0x116c00(0x26f)](function (_0x251fe7) {
          const _0x3bd56a = _0x116c00;
          $("[data-input-field=\x22" + _0x251fe7[_0x3bd56a(0x237)] + "\x22]")[
            _0x3bd56a(0x1b5)
          ](),
            $(_0x3bd56a(0x27f) + _0x251fe7[_0x3bd56a(0x237)] + "\x22]")[
              _0x3bd56a(0x1c5)
            ](_0x251fe7[_0x3bd56a(0x232)]);
        });
    }),
  $(_0x16b068(0x1ca))
    [_0x16b068(0x133)](_0x16b068(0x234))
    ["on"](_0x16b068(0x26e), function () {
      const _0x4d4491 = _0x16b068;
      $(this)[_0x4d4491(0x27a)]() !== "" &&
        resetInputErrorMessage($(this)[_0x4d4491(0x1dc)](_0x4d4491(0x265)));
      var _0xe28258 = $(this)[_0x4d4491(0x1be)](_0x4d4491(0x149));
      (all_data = all_data["filter"](
        (_0x275a48) =>
          _0x275a48["field"] !== $(this)[_0x4d4491(0x1dc)](_0x4d4491(0x265)),
      )),
        all_data[_0x4d4491(0x215)]({
          field: $(this)["attr"](_0x4d4491(0x265)),
          value: _0xe28258
            ? $(this)["find"](_0x4d4491(0x25a))[_0x4d4491(0x1c5)]()
            : $(this)["val"](),
        }),
        all_data[_0x4d4491(0x26f)](function (_0x133f94) {
          const _0x2887a0 = _0x4d4491;
          $(_0x2887a0(0x27f) + _0x133f94[_0x2887a0(0x237)] + "\x22]")[
            _0x2887a0(0x1b5)
          ](),
            $(_0x2887a0(0x27f) + _0x133f94[_0x2887a0(0x237)] + "\x22]")[
              _0x2887a0(0x1c5)
            ](_0x133f94[_0x2887a0(0x232)]);
        });
    }),
  updateStep(),
  triggerInputAllData(),
  $("[data-cms-select=cms]")["each"](function () {
    const _0x5a087a = _0x16b068,
      _0xe91320 = $(this)[_0x5a087a(0x133)](_0x5a087a(0x25c)),
      _0x40811c = [];
    _0xe91320["each"](function () {
      const _0x6c567 = _0x5a087a;
      _0x40811c["push"]($(this)["text"]()[_0x6c567(0x225)]());
    });
    const _0x3311d2 = $(this)[_0x5a087a(0x12c)](_0x5a087a(0x13a));
    $[_0x5a087a(0x1bd)](_0x40811c, function (_0x1f3599, _0x62f5ff) {
      const _0x2dee70 = _0x5a087a,
        _0x4e2101 = $(_0x2dee70(0x22d))
          ["val"](_0x62f5ff)
          [_0x2dee70(0x1c5)](_0x62f5ff);
      _0x3311d2["append"](_0x4e2101);
    });
  });
function cloneRemove() {
  const _0x59b4c1 = _0x16b068;
  $(_0x59b4c1(0x15f))[_0x59b4c1(0x1bd)](function () {
    const _0x2edadc = _0x59b4c1;
    $(this)[_0x2edadc(0x133)]("[data-clone]")[_0x2edadc(0x17c)] < 0x2
      ? $(this)[_0x2edadc(0x133)](_0x2edadc(0x12d))[_0x2edadc(0x198)]()
      : $(this)["find"](_0x2edadc(0x12d))["show"]();
  });
}
function cloneRemoveInput() {
  const _0x30ca23 = _0x16b068;
  $("[data-clone-input-wrapper]")[_0x30ca23(0x1bd)](function () {
    const _0x473052 = _0x30ca23;
    $(this)["find"](_0x473052(0x1bf))["length"] < 0x2
      ? $(this)
          [_0x473052(0x133)]("[data-form=\x22remove-input-clone\x22]")
          [_0x473052(0x198)]()
      : $(this)["find"](_0x473052(0x22f))[_0x473052(0x1b5)]();
  });
}
$("[data-form=\x22remove-clone\x22]")["on"](_0x16b068(0x274), function () {
  const _0x3cb186 = _0x16b068,
    _0x20fc0d =
      $(this)[_0x3cb186(0x26a)](_0x3cb186(0x26b))[_0x3cb186(0x17c)] > 0x0
        ? $(this)[_0x3cb186(0x26a)](_0x3cb186(0x26b))["index"]()
        : $(this)["parents"]("[data-display]")[_0x3cb186(0x187)](),
    _0x2f398d =
      $(this)[_0x3cb186(0x26a)](_0x3cb186(0x26b))[_0x3cb186(0x17c)] > 0x0
        ? $(this)
            [_0x3cb186(0x26a)]("[data-clone]")
            [_0x3cb186(0x1be)](_0x3cb186(0x1e9))
        : $(this)
            ["parents"](_0x3cb186(0x23e))
            [_0x3cb186(0x1be)](_0x3cb186(0x210));
  $(_0x3cb186(0x23d) + _0x2f398d + "\x22]")
    ["eq"](_0x20fc0d)
    [_0x3cb186(0x21b)](),
    $(_0x3cb186(0x1ee) + _0x2f398d + "\x22]")
      ["eq"](_0x20fc0d)
      [_0x3cb186(0x21b)](),
    cloneRemove(),
    validation();
}),
  $(_0x16b068(0x22f))["on"]("click", function () {
    const _0x213512 = _0x16b068;
    let _0x57af96 = $(this)
      [_0x213512(0x12c)]()
      [_0x213512(0x1dc)](_0x213512(0x265));
    $(this)[_0x213512(0x1d2)](_0x213512(0x1bf))["remove"](),
      $(_0x213512(0x27f) + _0x57af96 + "\x22]")
        [_0x213512(0x1d2)]("[data-display-input]")
        [_0x213512(0x21b)](),
      cloneRemove(),
      validation();
  }),
  $(_0x16b068(0x136))["on"]("click", function () {
    const _0x3a15fa = _0x16b068;
    let _0x2a24f6 = $(this)["data"]("add-new");
    var _0x34b08e = $(_0x3a15fa(0x23d) + _0x2a24f6 + "\x22]")
        ["eq"](0x0)
        ["clone"](!![]),
      _0x403a0f = $(_0x3a15fa(0x1ee) + _0x2a24f6 + "\x22]")
        ["eq"](0x0)
        [_0x3a15fa(0x1e9)](!![]);
    let _0x3e88a9 = "";
    $(this)[_0x3a15fa(0x133)](_0x3a15fa(0x12d))[_0x3a15fa(0x1b5)](),
      cloneRemove(),
      _0x34b08e[_0x3a15fa(0x133)](_0x3a15fa(0x1bf))
        ["find"](_0x3a15fa(0x14a))
        [_0x3a15fa(0x27a)](""),
      _0x34b08e["find"](_0x3a15fa(0x1bf))
        [_0x3a15fa(0x133)](_0x3a15fa(0x234))
        ["val"](""),
      _0x34b08e[_0x3a15fa(0x133)]("[data-clone-input]")
        [_0x3a15fa(0x133)]("textarea")
        [_0x3a15fa(0x27a)](""),
      _0x34b08e["find"]("[data-clone-input]")
        [_0x3a15fa(0x212)](_0x3a15fa(0x25d))
        [_0x3a15fa(0x21b)](),
      _0x403a0f["find"]("[data-display-input]")
        [_0x3a15fa(0x212)](_0x3a15fa(0x25d))
        ["remove"](),
      _0x34b08e[_0x3a15fa(0x133)](_0x3a15fa(0x14a))[_0x3a15fa(0x1bd)](
        function () {
          const _0x958026 = _0x3a15fa;
          if (
            $(this)["closest"]("[data-clone-input]")[_0x958026(0x17c)] > 0x0
          ) {
            let _0x343021 = 0x0;
            const _0x547d53 = $(this)
              ["closest"]("[data-clone-input]")
              [_0x958026(0x1be)](_0x958026(0x1b7));
            $(_0x958026(0x191) + _0x547d53 + _0x958026(0x224))[
              _0x958026(0x1bd)
            ](function () {
              const _0x17383f = _0x958026,
                _0x10f9bd = $(this)[_0x17383f(0x1dc)](_0x17383f(0x265));
              if (_0x10f9bd && _0x10f9bd["startsWith"](_0x17383f(0x20d))) {
                const _0x18821d = parseInt(
                  _0x10f9bd[_0x17383f(0x1a9)]("-")[0x1],
                );
                !isNaN(_0x18821d) &&
                  _0x18821d > _0x343021 &&
                  (_0x343021 = _0x18821d);
              }
            }),
              _0x343021++,
              (_0x3e88a9 = this[_0x958026(0x265)] + "-" + _0x343021);
          } else
            _0x3e88a9 =
              this[_0x958026(0x265)] +
              "-" +
              (parseInt(
                $(_0x958026(0x23d) + _0x2a24f6 + "\x22]")
                  [_0x958026(0x173)]()
                  ["index"](),
              ) +
                0x1);
          $(this)[_0x958026(0x27a)](""),
            $(this)[_0x958026(0x1dc)]("name", _0x3e88a9),
            $(this)[_0x958026(0x1dc)](_0x958026(0x14c), _0x3e88a9);
        },
      ),
      _0x34b08e["find"](_0x3a15fa(0x19e))["each"](function () {
        const _0x5342b5 = _0x3a15fa;
        if (
          $(this)[_0x5342b5(0x22b)](_0x5342b5(0x1bf))[_0x5342b5(0x17c)] > 0x0
        ) {
          let _0x57737a = 0x0;
          const _0x4d954a = $(this)
            [_0x5342b5(0x22b)](_0x5342b5(0x1bf))
            [_0x5342b5(0x1be)](_0x5342b5(0x1b7));
          $(_0x5342b5(0x191) + _0x4d954a + _0x5342b5(0x260))["each"](
            function () {
              const _0x26909c = _0x5342b5,
                _0x24ec56 = $(this)[_0x26909c(0x1dc)](_0x26909c(0x265));
              if (_0x24ec56 && _0x24ec56[_0x26909c(0x1d4)]("relationship-")) {
                const _0x3723ec = parseInt(_0x24ec56["split"]("-")[0x1]);
                !isNaN(_0x3723ec) &&
                  _0x3723ec > _0x57737a &&
                  (_0x57737a = _0x3723ec);
              }
            },
          ),
            _0x57737a++,
            (_0x3e88a9 = this["name"] + "-" + _0x57737a);
        } else
          _0x3e88a9 =
            this[_0x5342b5(0x265)] +
            "-" +
            (parseInt(
              $(_0x5342b5(0x23d) + _0x2a24f6 + "\x22]")
                [_0x5342b5(0x173)]()
                [_0x5342b5(0x187)](),
            ) +
              0x1);
        $(this)[_0x5342b5(0x27a)](""),
          $(this)["attr"]("name", _0x3e88a9),
          $(this)[_0x5342b5(0x1dc)](_0x5342b5(0x14c), _0x3e88a9);
      }),
      _0x34b08e["find"]("select")[_0x3a15fa(0x1bd)](function () {
        const _0x11e64e = _0x3a15fa;
        if (
          $(this)[_0x11e64e(0x22b)](_0x11e64e(0x1bf))[_0x11e64e(0x17c)] > 0x0
        ) {
          let _0x5e85ed = 0x0;
          const _0x4da99f = $(this)
            ["closest"](_0x11e64e(0x1bf))
            ["data"](_0x11e64e(0x1b7));
          $(_0x11e64e(0x191) + _0x4da99f + _0x11e64e(0x1b8))[_0x11e64e(0x1bd)](
            function () {
              const _0x554b21 = _0x11e64e,
                _0x16aa3a = $(this)[_0x554b21(0x1dc)]("name");
              if (_0x16aa3a && _0x16aa3a[_0x554b21(0x1d4)](_0x554b21(0x20d))) {
                const _0xf7ddc7 = parseInt(_0x16aa3a["split"]("-")[0x1]);
                !isNaN(_0xf7ddc7) &&
                  _0xf7ddc7 > _0x5e85ed &&
                  (_0x5e85ed = _0xf7ddc7);
              }
            },
          ),
            _0x5e85ed++,
            (_0x3e88a9 = this[_0x11e64e(0x265)] + "-" + _0x5e85ed);
        } else
          _0x3e88a9 =
            this[_0x11e64e(0x265)] +
            "-" +
            (parseInt(
              $(_0x11e64e(0x23d) + _0x2a24f6 + "\x22]")
                ["last"]()
                [_0x11e64e(0x187)](),
            ) +
              0x1);
        $(this)[_0x11e64e(0x27a)](""),
          $(this)["attr"](_0x11e64e(0x265), _0x3e88a9),
          $(this)[_0x11e64e(0x1dc)](_0x11e64e(0x14c), _0x3e88a9);
      }),
      _0x403a0f[_0x3a15fa(0x133)](_0x3a15fa(0x170))[_0x3a15fa(0x1bd)](
        function () {
          const _0x540a32 = _0x3a15fa;
          if ($(this)[_0x540a32(0x1be)]("input-field")) {
            let _0x1dd039 = 0x0;
            const _0x21b247 = $(this)
              [_0x540a32(0x1be)]("input-field")
              [_0x540a32(0x1a9)]("-")[0x0];
            $(
              _0x540a32(0x1ee) +
                _0x2a24f6 +
                _0x540a32(0x19a) +
                _0x21b247 +
                "\x22]",
            )["each"](function () {
              const _0x2d841e = _0x540a32,
                _0x41d189 = $(this)[_0x2d841e(0x1dc)](_0x2d841e(0x235)),
                _0x55410b = parseInt(_0x41d189["split"]("-")[0x1]);
              !isNaN(_0x55410b) &&
                _0x55410b > _0x1dd039 &&
                (_0x1dd039 = _0x55410b);
            }),
              _0x1dd039++;
            const _0x8a41a1 = _0x21b247 + "-" + _0x1dd039;
            $(this)[_0x540a32(0x1dc)](_0x540a32(0x235), _0x8a41a1);
          }
        },
      ),
      $(_0x3a15fa(0x159) + _0x2a24f6 + "\x22]")[_0x3a15fa(0x1fa)](_0x34b08e),
      $(_0x3a15fa(0x1e6) + _0x2a24f6 + "\x22]")[_0x3a15fa(0x1fa)](_0x403a0f),
      $(_0x3a15fa(0x1e1) + _0x2a24f6 + "\x22]")[_0x3a15fa(0x1bd)](function () {
        const _0x30d1bb = _0x3a15fa;
        $(this)[_0x30d1bb(0x1c5)](
          $(this)
            [_0x30d1bb(0x26a)]("[data-clone=\x22" + _0x2a24f6 + "\x22]")
            [_0x30d1bb(0x187)]() + 0x1,
        );
      }),
      $("[data-display-index=\x22" + _0x2a24f6 + "\x22]")["each"](function () {
        const _0x3f6681 = _0x3a15fa;
        $(this)[_0x3f6681(0x1c5)](
          $(this)
            [_0x3f6681(0x26a)](_0x3f6681(0x1ee) + _0x2a24f6 + "\x22]")
            [_0x3f6681(0x187)]() + 0x1,
        );
      }),
      validation();
  }),
  $(_0x16b068(0x1fd))["on"](_0x16b068(0x274), function () {
    const _0x4ef18e = _0x16b068,
      _0x52efcb = $(this)["parents"](_0x4ef18e(0x26b))[_0x4ef18e(0x187)]();
    let _0x1632a3 = $(this)[_0x4ef18e(0x1be)](_0x4ef18e(0x12f));
    var _0x176eeb = $("[data-clone-input=\x22" + _0x1632a3 + "\x22]")
        ["eq"](0x0)
        [_0x4ef18e(0x1e9)](!![]),
      _0x59ebc6 = $(_0x4ef18e(0x261) + _0x1632a3 + "\x22]")
        ["eq"](0x0)
        [_0x4ef18e(0x1e9)](!![]);
    $(this)["find"]("[data-form=\x22remove-input-clone\x22]")["show"](),
      cloneRemoveInput();
    let _0x595768 = 0x0;
    $("[data-clone-input=\x22" + _0x1632a3 + _0x4ef18e(0x224))[
      _0x4ef18e(0x1bd)
    ](function () {
      const _0x32b287 = _0x4ef18e,
        _0x1e857c = $(this)[_0x32b287(0x1dc)](_0x32b287(0x265));
      if (_0x1e857c) {
        const _0xd86baa = parseInt(_0x1e857c["split"]("-")[0x1]);
        !isNaN(_0xd86baa) && _0xd86baa > _0x595768 && (_0x595768 = _0xd86baa);
      }
    }),
      $(_0x4ef18e(0x191) + _0x1632a3 + "\x22]\x20select")[_0x4ef18e(0x1bd)](
        function () {
          const _0x5895f7 = _0x4ef18e,
            _0x1b99a3 = $(this)[_0x5895f7(0x1dc)](_0x5895f7(0x265));
          if (_0x1b99a3) {
            const _0x486058 = parseInt(_0x1b99a3[_0x5895f7(0x1a9)]("-")[0x1]);
            !isNaN(_0x486058) &&
              _0x486058 > _0x595768 &&
              (_0x595768 = _0x486058);
          }
        },
      ),
      $("[data-clone-input=\x22" + _0x1632a3 + _0x4ef18e(0x260))[
        _0x4ef18e(0x1bd)
      ](function () {
        const _0xa96ff = _0x4ef18e,
          _0x389b27 = $(this)[_0xa96ff(0x1dc)](_0xa96ff(0x265));
        if (_0x389b27) {
          const _0x576884 = parseInt(_0x389b27[_0xa96ff(0x1a9)]("-")[0x1]);
          !isNaN(_0x576884) && _0x576884 > _0x595768 && (_0x595768 = _0x576884);
        }
      }),
      _0x595768++,
      _0x176eeb[_0x4ef18e(0x133)](_0x4ef18e(0x14a))["each"](function () {
        const _0x4817a1 = _0x4ef18e,
          _0xaea56f = $(this)[_0x4817a1(0x1dc)](_0x4817a1(0x265));
        let _0x3a9459 = _0xaea56f + "-" + _0x595768;
        $(this)[_0x4817a1(0x27a)](""),
          $(this)[_0x4817a1(0x1dc)](_0x4817a1(0x265), _0x3a9459),
          $(this)[_0x4817a1(0x1dc)]("data-name", _0x3a9459);
      }),
      _0x176eeb[_0x4ef18e(0x133)]("select")[_0x4ef18e(0x1bd)](function () {
        const _0x2c5875 = _0x4ef18e,
          _0x40a4f3 = $(this)["attr"]("name");
        let _0x43c4c4 = _0x40a4f3 + "-" + _0x595768;
        $(this)["val"](""),
          $(this)[_0x2c5875(0x1dc)]("name", _0x43c4c4),
          $(this)[_0x2c5875(0x1dc)]("data-name", _0x43c4c4);
      }),
      _0x176eeb[_0x4ef18e(0x133)]("textarea")["each"](function () {
        const _0x20e00f = _0x4ef18e,
          _0x4dd42d = $(this)[_0x20e00f(0x1dc)](_0x20e00f(0x265));
        let _0xad92f0 = _0x4dd42d + "-" + _0x595768;
        $(this)[_0x20e00f(0x27a)](""),
          $(this)[_0x20e00f(0x1dc)]("name", _0xad92f0),
          $(this)[_0x20e00f(0x1dc)]("data-name", _0xad92f0);
      }),
      _0x59ebc6[_0x4ef18e(0x133)](_0x4ef18e(0x170))[_0x4ef18e(0x1bd)](
        function () {
          const _0x4a1be2 = _0x4ef18e;
          $(this)[_0x4a1be2(0x1dc)](
            _0x4a1be2(0x235),
            _0x4a1be2(0x20d) + _0x595768,
          );
        },
      ),
      $(this)
        ["siblings"]("[data-clone-input-wrapper=\x22" + _0x1632a3 + "\x22]")
        [_0x4ef18e(0x1fa)](_0x176eeb),
      $("[data-display]")
        ["eq"](_0x52efcb)
        [_0x4ef18e(0x133)](_0x4ef18e(0x1ab) + _0x1632a3 + "\x22]")
        [_0x4ef18e(0x1fa)](_0x59ebc6),
      $(_0x4ef18e(0x148) + _0x1632a3 + "\x22]")[_0x4ef18e(0x1bd)](function () {
        const _0x1276f1 = _0x4ef18e;
        $(this)[_0x1276f1(0x1c5)](
          $(this)
            [_0x1276f1(0x26a)](_0x1276f1(0x191) + _0x1632a3 + "\x22]")
            [_0x1276f1(0x187)]() + 0x1,
        );
      }),
      $(_0x4ef18e(0x1fb) + _0x1632a3 + "\x22]")[_0x4ef18e(0x1bd)](function () {
        const _0x335832 = _0x4ef18e;
        $(this)[_0x335832(0x1c5)](
          $(this)
            ["parents"](_0x335832(0x261) + _0x1632a3 + "\x22]")
            [_0x335832(0x187)]() + 0x1,
        );
      }),
      validation();
  }),
  $(_0x16b068(0x161))["on"](_0x16b068(0x274), function () {
    const _0x448cc6 = _0x16b068,
      _0x2607b9 = $(this)[_0x448cc6(0x1be)](_0x448cc6(0x19c));
    $(_0x448cc6(0x1d5) + _0x2607b9 + "\x22]")[_0x448cc6(0x27a)](""),
      validation();
  });
function andLogic() {
  const _0x47dc27 = _0x16b068;
  conditionalResult &&
    (steps["eq"](x)["find"](_0x47dc27(0x1d0))[_0x47dc27(0x198)](),
    steps["eq"](x)
      [_0x47dc27(0x133)](_0x47dc27(0x1d0))
      [_0x47dc27(0x1bd)](function () {
        const _0x57d5d8 = _0x47dc27;
        function _0x48b09c(_0x1fa336) {
          const _0xd2d5f2 = _0x1e6f,
            _0xbd2cd8 = _0x1fa336[_0xd2d5f2(0x1a9)]("&"),
            _0x34febc = [];
          return (
            _0xbd2cd8[_0xd2d5f2(0x26f)]((_0x19c759) => {
              const _0x5b264f = _0xd2d5f2,
                [_0x1187e5, _0xa5b544] = _0x19c759[_0x5b264f(0x1a9)]("=");
              _0x34febc[_0x5b264f(0x215)]({
                field: _0x1187e5,
                value: _0xa5b544,
              });
            }),
            _0x34febc
          );
        }
        const _0x4d79aa = $(this)[_0x57d5d8(0x1dc)]("data-show-if"),
          _0x4f618b = _0x48b09c(_0x4d79aa);
        function _0x2239a2(_0x581b06, _0x5c0710) {
          return _0x5c0710["some"]((_0x422b29, _0x3c222b) => {
            const _0x1b3e4c = _0x1e6f;
            if (
              _0x581b06[0x0] &&
              _0x422b29[_0x1b3e4c(0x237)] === _0x581b06[0x0]["field"]
            )
              return _0x581b06["every"](
                (_0x1a1f06, _0x23fb69) =>
                  _0x5c0710[_0x3c222b + _0x23fb69] &&
                  _0x5c0710[_0x3c222b + _0x23fb69][_0x1b3e4c(0x237)] ===
                    _0x1a1f06[_0x1b3e4c(0x237)] &&
                  _0x5c0710[_0x3c222b + _0x23fb69][_0x1b3e4c(0x232)] ===
                    _0x1a1f06[_0x1b3e4c(0x232)],
              );
            return ![];
          });
        }
        const _0x13949f = _0x2239a2(_0x4f618b, all_data);
        _0x13949f ? $(this)[_0x57d5d8(0x1b5)]() : $(this)["hide"]();
      }));
}
$(_0x16b068(0x12a))[_0x16b068(0x156)]("hide"),
  $(_0x16b068(0x153))["on"](_0x16b068(0x14a), function () {
    const _0x1d5d68 = _0x16b068,
      _0x3da2b3 = $(this)["data"](_0x1d5d68(0x1c9)),
      _0x3404c1 = $(this)[_0x1d5d68(0x27a)](),
      _0x19a2cc = $(_0x1d5d68(0x1f5) + _0x3da2b3 + "\x22]")[_0x1d5d68(0x1be)](
        "progressive-input-value",
      );
    let _0x1e17a7 = $(
        "[data-progressive-target=\x22" +
          _0x3da2b3 +
          _0x1d5d68(0x217) +
          _0x3404c1 +
          "\x22]",
      ),
      _0x121d1c = $(_0x1d5d68(0x1f5) + _0x3da2b3 + _0x1d5d68(0x1ba));
    $(_0x1d5d68(0x1f5) + _0x3da2b3 + "\x22]")[_0x1d5d68(0x156)]("hide"),
      $("[data-progressive-target=\x22" + _0x3da2b3 + "\x22]")[
        _0x1d5d68(0x1e7)
      ](_0x1d5d68(0x1b5));
    _0x3404c1 !== "" &&
      (_0x19a2cc === "*" && _0x3404c1 !== ""
        ? (_0x121d1c[_0x1d5d68(0x1e7)](_0x1d5d68(0x198)),
          _0x121d1c[_0x1d5d68(0x156)]("show"))
        : (_0x1e17a7[_0x1d5d68(0x1e7)](_0x1d5d68(0x198)),
          _0x1e17a7[_0x1d5d68(0x156)](_0x1d5d68(0x1b5))));
    function _0x565454(_0x58405a) {
      const _0x98bec7 = _0x1d5d68;
      _0x58405a &&
        $(_0x98bec7(0x27b) + _0x58405a + "\x22]")["val"]() !== "" &&
        $(_0x98bec7(0x27b) + _0x58405a + "\x22]")[_0x98bec7(0x214)](
          _0x98bec7(0x14a),
        );
    }
    let _0x395eda = $(_0x1d5d68(0x1f5) + _0x3da2b3 + "\x22]")
      [_0x1d5d68(0x133)](_0x1d5d68(0x153))
      ["data"]("progressive-input");
    _0x565454(_0x395eda),
      $(_0x1d5d68(0x23a))[_0x1d5d68(0x1bd)](function () {
        const _0x27ab65 = _0x1d5d68,
          _0x565ac4 = $(this)[_0x27ab65(0x1be)](_0x27ab65(0x1c9));
        $(_0x27ab65(0x1f5) + _0x565ac4 + "\x22]")[_0x27ab65(0x1e7)](
          _0x27ab65(0x1b5),
        ),
          $("[data-progressive-target=\x22" + _0x565ac4 + "\x22]")["addClass"](
            _0x27ab65(0x198),
          );
      });
  });
function addClickClass() {
  const _0x4c9492 = _0x16b068,
    _0x3910a9 = $(this)[_0x4c9492(0x1be)](_0x4c9492(0x26d)),
    _0x666e4f = $(this)[_0x4c9492(0x1dc)](_0x4c9492(0x189)),
    _0x18fbcf = $(this)[_0x4c9492(0x1dc)]("name");
  $(_0x4c9492(0x1d5) + _0x18fbcf + "\x22]")
    [_0x4c9492(0x1d2)]()
    [_0x4c9492(0x1e7)](_0x3910a9),
    $(this)["is"](_0x4c9492(0x203)) &&
      $(this)["parent"]()[_0x4c9492(0x156)](_0x3910a9);
}
$(_0x16b068(0x188))["on"](_0x16b068(0x26e), addClickClass),
  scrollTop(),
  cloneRemove(),
  cloneRemoveInput();
const formlyUrlParams = new URLSearchParams(
    window[_0x16b068(0x181)][_0x16b068(0x1c7)],
  ),
  formlySupportParam = formlyUrlParams[_0x16b068(0x21a)](_0x16b068(0x14d)),
  showButton = formlySupportParam === _0x16b068(0x1ec),
  passIcon = _0x16b068(0x1cb),
  failIcon = _0x16b068(0x285);
let isScriptLoaded = !![],
  scriptLocation = _0x16b068(0x26c),
  isMultistepAttributePresent = !![],
  isMultistepOnFormElement = !![],
  areButtonsPresent = !![],
  isNextBtnOnSubmit = ![],
  isSubmitBtnOnSubmit = !![],
  isBackBtnOnSubmit = ![],
  formType = logicExtra ? _0x16b068(0x1ef) : "Basic\x20(No\x20Formly\x20Logic)",
  resultStatus = _0x16b068(0x202),
  scriptSrcAdded = "";
function isElementPresent(_0xdf63f, _0x3efa3e) {
  const _0x3ce83b = _0x16b068;
  return (
    document[_0x3ce83b(0x190)](
      "[" + _0x3efa3e + "=\x22" + _0xdf63f + "\x22]",
    ) !== null
  );
}
function _0x1e6f(_0x213fea, _0x240978) {
  const _0x556c67 = _0x556c();
  return (
    (_0x1e6f = function (_0x1e6f53, _0x83956) {
      _0x1e6f53 = _0x1e6f53 - 0x125;
      let _0x461f75 = _0x556c67[_0x1e6f53];
      return _0x461f75;
    }),
    _0x1e6f(_0x213fea, _0x240978)
  );
}
isMultistepAttributePresent = isElementPresent(
  _0x16b068(0x1ea),
  _0x16b068(0x1b1),
);
const multistepForm = document[_0x16b068(0x190)](_0x16b068(0x280)),
  formStepLength = multistepForm[_0x16b068(0x283)](_0x16b068(0x169))[
    _0x16b068(0x17c)
  ];
isMultistepOnFormElement = multistepForm !== null;
const multistepContainer = document["querySelector"](_0x16b068(0x1ca)),
  nextBtn = multistepContainer[_0x16b068(0x190)](_0x16b068(0x275)),
  backBtn = multistepContainer[_0x16b068(0x190)](_0x16b068(0x209)),
  submitBtn = multistepContainer[_0x16b068(0x190)](_0x16b068(0x184));
(areButtonsPresent =
  nextBtn !== null && backBtn !== null && submitBtn !== null),
  (isNextBtnOnSubmit =
    nextBtn && nextBtn["tagName"]["toLowerCase"]() === _0x16b068(0x14a)),
  (isSubmitBtnOnSubmit =
    submitBtn &&
    submitBtn[_0x16b068(0x250)][_0x16b068(0x263)]() === _0x16b068(0x14a) &&
    submitBtn["type"][_0x16b068(0x263)]() === _0x16b068(0x255)),
  (isBackBtnOnSubmit =
    backBtn && backBtn[_0x16b068(0x250)][_0x16b068(0x263)]() === "input");
const checkPowerup = (_0x41b92f) =>
    document[_0x16b068(0x190)](_0x41b92f) !== null,
  progressBarAttr = checkPowerup("[data-form=\x22progress\x22]"),
  progressIndicatorAttr = checkPowerup(_0x16b068(0x16d)),
  customProgressAttr = checkPowerup(_0x16b068(0x16d)),
  cardDivAttr = checkPowerup("[data-card=\x22true\x22]"),
  currentStepAttr = checkPowerup(_0x16b068(0x266)),
  totalStepAttr = checkPowerup(_0x16b068(0x167)),
  enterAttr = checkPowerup(_0x16b068(0x229)),
  submitAttr = checkPowerup("[data-submit=\x22true\x22]"),
  radioSkipAttr = checkPowerup(_0x16b068(0x1e0)),
  customCheckboxAttr = checkPowerup(_0x16b068(0x15a)),
  recapatchaAttr = checkPowerup(_0x16b068(0x1a3));
(!isScriptLoaded ||
  scriptLocation !== _0x16b068(0x26c) ||
  !isMultistepAttributePresent ||
  !isMultistepOnFormElement ||
  !areButtonsPresent ||
  isNextBtnOnSubmit ||
  !isSubmitBtnOnSubmit ||
  isBackBtnOnSubmit) &&
  (resultStatus = _0x16b068(0x220));
function isScriptUrlMatch(_0x10a06d, _0x4f4896) {
  for (var _0x5144e0 = 0x0; _0x5144e0 < _0x4f4896["length"]; _0x5144e0++) {
    if (_0x10a06d["includes"](_0x4f4896[_0x5144e0])) return !![];
  }
  return ![];
}
var keywordsToCheck = ["videsigns", _0x16b068(0x1c6)],
  scripts = document[_0x16b068(0x17f)](_0x16b068(0x27c)),
  matchedScripts = [];
for (var i = 0x0; i < scripts[_0x16b068(0x17c)]; i++) {
  var scriptSrcs = scripts[i][_0x16b068(0x176)];
  isScriptUrlMatch(scriptSrcs, keywordsToCheck) &&
    matchedScripts[_0x16b068(0x215)](scriptSrcs);
}
if (matchedScripts[_0x16b068(0x17c)] > 0x0) {
  scriptSrcAdded = matchedScripts;
  const script = document[_0x16b068(0x190)](
    _0x16b068(0x216) + scriptSrcAdded + "\x22]",
  );
  script &&
    (scriptLocation =
      script[_0x16b068(0x221)][_0x16b068(0x250)] === "BODY"
        ? _0x16b068(0x1c3)
        : "Inside\x20<head>\x20tag");
} else
  scriptSrcAdded =
    "No\x20Formly\x20script\x20added\x20to\x20the\x20page!" + failIcon;
const newElement = document["createElement"](_0x16b068(0x1c8)),
  newStyle = document["createElement"](_0x16b068(0x177));
(newStyle["innerHTML"] = _0x16b068(0x130)),
  document[_0x16b068(0x26c)][_0x16b068(0x222)](newStyle);
showButton && document[_0x16b068(0x1cc)][_0x16b068(0x222)](newElement);
newElement["innerHTML"] =
  "\x0a\x20\x20<button\x20class=\x22f-openbtn\x22\x20onclick=\x22openNav()\x22>\x0a\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x2220px\x22\x20height=\x2220px\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M11\x2021h-1l1-7H7.5c-.88\x200-.33-.75-.31-.78C8.48\x2010.94\x2010.42\x207.54\x2013.01\x203h1l-1\x207h3.51c.4\x200\x20.62.19.4.66C12.97\x2017.55\x2011\x2021\x2011\x2021\x22></path>\x0a\x20\x20\x20\x20</svg>\x20Check\x20Form\x0a\x20\x20</button>\x0a\x20\x20<div\x20id=\x22f-mySidenav\x22\x20class=\x22f-sidenav\x22>\x0a\x20\x20\x20\x20<a\x20href=\x22javascript:void(0)\x22\x20class=\x22f-closebtn\x22\x20onclick=\x22closeNav()\x22>&times;</a>\x0a\x20\x20\x20\x20<div\x20class=\x22f-fc-main-content\x22>\x0a\x20\x20\x20\x20\x20\x20<h4\x20class=\x22f-text-header\x22>Formly\x20Support</h4>\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20If\x20you\x20have\x20spotted\x20a\x20bug\x20or\x20require\x20extra\x20support,\x20please\x20reach\x20out\x20to\x20us\x20via\x20Slack\x20or\x20email\x20us\x20at\x20developer@videsigns.uk.\x0a\x20\x20\x20\x20\x20\x20</p>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Form\x20Type</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>" +
  formType +
  "</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Formly\x20Script\x20Info</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>Script\x20URL:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>" +
  scriptSrcAdded +
  "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>Script\x20Location:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>" +
  scriptLocation +
  _0x16b068(0x256) +
  (isMultistepOnFormElement ? passIcon : failIcon) +
  _0x16b068(0x248) +
  (formStepLength > 0x0 ? passIcon : failIcon) +
  "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Number\x20of\x20steps:\x20" +
  formStepLength +
  _0x16b068(0x273) +
  (nextBtn ? passIcon : failIcon) +
  _0x16b068(0x21e) +
  (isNextBtnOnSubmit ? failIcon : passIcon) +
  _0x16b068(0x257) +
  (backBtn ? passIcon : failIcon) +
  _0x16b068(0x1f2) +
  (isBackBtnOnSubmit ? failIcon : passIcon) +
  _0x16b068(0x134) +
  (backBtn ? passIcon : failIcon) +
  _0x16b068(0x1ce) +
  (isSubmitBtnOnSubmit ? passIcon : failIcon) +
  _0x16b068(0x27d) +
  (progressBarAttr && progressIndicatorAttr
    ? "<strong\x20class=\x22f-text-white\x22>Automatic\x20Progress\x20Indicators\x20" +
      passIcon +
      _0x16b068(0x1e5)
    : "") +
  _0x16b068(0x196) +
  (customProgressAttr ? _0x16b068(0x164) + passIcon + _0x16b068(0x1e5) : "") +
  "\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
  (cardDivAttr
    ? "<strong\x20class=\x22f-text-white\x22>Intro\x20Cards\x20Or\x20Steps\x20Without\x20Inputs\x20" +
      passIcon +
      "</strong>"
    : "") +
  _0x16b068(0x196) +
  (currentStepAttr ? _0x16b068(0x18a) + passIcon + _0x16b068(0x1e5) : "") +
  _0x16b068(0x196) +
  (totalStepAttr ? _0x16b068(0x276) + passIcon + _0x16b068(0x1e5) : "") +
  _0x16b068(0x196) +
  (enterAttr
    ? "<strong\x20class=\x22f-text-white\x22>Press\x20\x22Enter\x22\x20To\x20Progress\x20" +
      passIcon +
      _0x16b068(0x1e5)
    : "") +
  _0x16b068(0x196) +
  (submitAttr ? _0x16b068(0x18d) + passIcon + "</strong>" : "") +
  "\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
  (radioSkipAttr ? _0x16b068(0x1f6) + passIcon + _0x16b068(0x1e5) : "") +
  "\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
  (customCheckboxAttr ? _0x16b068(0x219) + passIcon + _0x16b068(0x1e5) : "") +
  _0x16b068(0x196) +
  (recapatchaAttr
    ? "<strong\x20class=\x22f-text-white\x22>ReCAPTCHA\x20" +
      passIcon +
      _0x16b068(0x1e5)
    : "") +
  _0x16b068(0x15c);
function openNav() {
  const _0x344594 = _0x16b068;
  (document["getElementById"](_0x344594(0x246))[_0x344594(0x177)]["width"] =
    _0x344594(0x1a6)),
    (document[_0x344594(0x140)](_0x344594(0x246))["style"][_0x344594(0x157)] =
      "12px");
}
function closeNav() {
  const _0x57ae99 = _0x16b068;
  (document[_0x57ae99(0x140)]("f-mySidenav")[_0x57ae99(0x177)][
    _0x57ae99(0x1a7)
  ] = "0"),
    (document[_0x57ae99(0x140)](_0x57ae99(0x246))[_0x57ae99(0x177)][
      _0x57ae99(0x157)
    ] = "0px");
}
