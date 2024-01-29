//29th Jan 2023
//New feature
//1. Go to last selected step

const _0xd17637 = _0x2283;
(function (_0x190933, _0x277cce) {
  const _0x1fe999 = _0x2283,
    _0x16b4d3 = _0x190933();
  while (!![]) {
    try {
      const _0x4f066c =
        -parseInt(_0x1fe999(0x303)) / 0x1 +
        (parseInt(_0x1fe999(0x243)) / 0x2) *
          (parseInt(_0x1fe999(0x2f8)) / 0x3) +
        parseInt(_0x1fe999(0x2f7)) / 0x4 +
        (-parseInt(_0x1fe999(0x2f9)) / 0x5) *
          (parseInt(_0x1fe999(0x2aa)) / 0x6) +
        parseInt(_0x1fe999(0x2e0)) / 0x7 +
        (parseInt(_0x1fe999(0x1d5)) / 0x8) *
          (parseInt(_0x1fe999(0x31e)) / 0x9) +
        -parseInt(_0x1fe999(0x25d)) / 0xa;
      if (_0x4f066c === _0x277cce) break;
      else _0x16b4d3["push"](_0x16b4d3["shift"]());
    } catch (_0x2cfe20) {
      _0x16b4d3["push"](_0x16b4d3["shift"]());
    }
  }
})(_0x5a7a, 0x8f6cc);
let x = 0x0,
  lastStep = 0x0,
  curStep = 0x0,
  steps = $(_0xd17637(0x324)),
  progressbarClone = $(_0xd17637(0x264))[_0xd17637(0x258)](),
  progressbar,
  countCard = !![],
  weightedSelection = $(_0xd17637(0x308))[_0xd17637(0x32b)](
    "weighted-selection",
  ),
  weightedSelectionRange = $(_0xd17637(0x2c2))[_0xd17637(0x32b)](
    _0xd17637(0x24b),
  ),
  selectMultiple = $(_0xd17637(0x2c8))["data"](_0xd17637(0x2b4)),
  customError = $(_0xd17637(0x2e4))[_0xd17637(0x32b)](_0xd17637(0x21b)),
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
  reinitIX = $("[data-reinit]")[_0xd17637(0x32b)](_0xd17637(0x29e)),
  textareaLength = 0x0,
  textInputLength = 0x0,
  emailInputLength = 0x0,
  selectInputLength = 0x0,
  checkboxInputLength = 0x0,
  filledInput = [],
  savedFilledInput = [],
  memory = $(_0xd17637(0x2d9))[_0xd17637(0x32b)]("memory"),
  quiz = $(_0xd17637(0x224))[_0xd17637(0x32b)](_0xd17637(0x26a)),
  progress = 0x0;
const urlFormly = new URL(window[_0xd17637(0x256)][_0xd17637(0x241)]);
let _params = $(_0xd17637(0x239))["data"](_0xd17637(0x25c)),
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
  logicExtra = $(_0xd17637(0x2df))[_0xd17637(0x32b)](_0xd17637(0x25a)),
  oldSubmitText = $(_0xd17637(0x30b))[_0xd17637(0x1fb)](),
  oldResetText = $(_0xd17637(0x331))[_0xd17637(0x2db)](),
  formReset = $(_0xd17637(0x2df))["data"]("reset"),
  successCard = "",
  redirectTo = "",
  totalSteps = 0x0,
  checkCount = 0x0,
  resetDelay = $("[data-reset-delay]")[_0xd17637(0x32b)]("reset-delay")
    ? $(_0xd17637(0x269))[_0xd17637(0x32b)]("reset-delay")
    : 0x7d0,
  redirectDelay = $("[data-redirect-delay]")[_0xd17637(0x32b)](_0xd17637(0x21d))
    ? $(_0xd17637(0x21a))["data"]("redirect-delay")
    : 0x7d0,
  newTab = !![],
  unfilledArr = [],
  phoneFormat = $(_0xd17637(0x2df))["data"]("phone-validation"),
  scrollToTop = $(_0xd17637(0x2df))["data"]("scroll-top"),
  trackLastStep = $(_0xd17637(0x2c9))[_0xd17637(0x32b)](_0xd17637(0x1f3)),
  conditionalResult =
    $(_0xd17637(0x21e))[_0xd17637(0x32b)](_0xd17637(0x22b)) ===
    _0xd17637(0x1fd),
  scrollTopOffset = parseInt($(_0xd17637(0x2df))["data"](_0xd17637(0x1cb))),
  notRobot = !![],
  all_data = [];
const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
(savedFilledInput = JSON[_0xd17637(0x305)](
  localStorage[_0xd17637(0x2f6)](_0xd17637(0x31d)),
)),
  (formlyLastStep = JSON[_0xd17637(0x305)](
    localStorage[_0xd17637(0x2f6)](_0xd17637(0x300)),
  )),
  (formlyLastStepAnswer = JSON[_0xd17637(0x305)](
    localStorage["getItem"]("formlyLastStepAnswer"),
  ));
var ogCloneArr = [];
trackLastStep &&
  (formlyLastStep > x && (x = formlyLastStep),
  formlyLastStepAnswer && (selections = formlyLastStepAnswer));
$("[data-clone]")["each"](function () {
  const _0x3dfbcd = _0xd17637;
  ogCloneArr[_0x3dfbcd(0x2a0)]({
    name: $(this)[_0x3dfbcd(0x32b)](_0x3dfbcd(0x258)),
    element: $(this)[_0x3dfbcd(0x258)](!![]),
    display: $(
      _0x3dfbcd(0x2e7) + $(this)[_0x3dfbcd(0x32b)](_0x3dfbcd(0x258)) + "\x22]",
    )
      ["eq"](0x0)
      ["clone"](!![]),
  });
});
$(_0xd17637(0x22e))[_0xd17637(0x2fe)] > 0x0 && (notRobot = ![]);
function recaptcha(_0x245019) {
  notRobot = !![];
}
$(_0xd17637(0x20e))["length"] > 0x0 &&
  (countCard = $("[data-count-card]")["data"](_0xd17637(0x2b6)));
$("[data-text=\x22error-message\x22]")[_0xd17637(0x203)](),
  $(progressbarClone)[_0xd17637(0x20c)](_0xd17637(0x28c)),
  $(_0xd17637(0x1d2))["children"]()[_0xd17637(0x296)](),
  $(_0xd17637(0x30b))[_0xd17637(0x203)](),
  $(_0xd17637(0x1e5))["hide"](),
  steps["each"](function () {
    const _0x352562 = _0xd17637;
    $("[data-form=\x22progress\x22]")[_0x352562(0x30c)](
      progressbarClone[_0x352562(0x258)](!![], !![]),
    );
  }),
  $("[data-input-field]")[_0xd17637(0x203)]();
countCard
  ? ((curStep = curStep + 0x1),
    (totalSteps = steps["length"]),
    $(_0xd17637(0x248))[_0xd17637(0x2db)](totalSteps))
  : ($(steps[x])[_0xd17637(0x32b)](_0xd17637(0x227))
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    (totalSteps = $(_0xd17637(0x1e9))[_0xd17637(0x2fe)]),
    $(_0xd17637(0x248))[_0xd17637(0x2db)](totalSteps),
    $(_0xd17637(0x312))["each"](function () {
      const _0x4af86d = _0xd17637;
      $(
        $("[data-form=\x22progress-indicator\x22]")[
          $(this)[_0x4af86d(0x2d0)]()
        ],
      )[_0x4af86d(0x203)]();
    }));
(progressbar = $(_0xd17637(0x1d2))[_0xd17637(0x31b)]()),
  $(_0xd17637(0x264))["on"]("click", clickableIndicator),
  $(_0xd17637(0x2bf))["text"](curStep),
  steps[_0xd17637(0x203)](),
  $("[data-success-card]")["hide"](),
  $(_0xd17637(0x2fd))[_0xd17637(0x28d)](function () {
    const _0x23522e = _0xd17637;
    $(this)[_0x23522e(0x214)](_0x23522e(0x1cc), _0x23522e(0x1ee));
  });
function getParams() {
  const _0x4924a0 = _0xd17637;
  urlFormly[_0x4924a0(0x2a5)]["forEach"](function (_0x3ff2e9, _0x5f5386) {
    searchQ["push"]({ val: _0x3ff2e9, key: _0x5f5386 });
  });
}
function getSafe(_0x4fce1d, _0x5cb637) {
  try {
    return _0x4fce1d();
  } catch (_0x3eefff) {
    return _0x5cb637;
  }
}
function _0x2283(_0x5eefba, _0xab0371) {
  const _0x5a7a2c = _0x5a7a();
  return (
    (_0x2283 = function (_0x2283aa, _0x1e8636) {
      _0x2283aa = _0x2283aa - 0x1c8;
      let _0xddb3ed = _0x5a7a2c[_0x2283aa];
      return _0xddb3ed;
    }),
    _0x2283(_0x5eefba, _0xab0371)
  );
}
function phoneAutoFormat(_0x4227a0) {
  var _0x1c0dcd = "";
  return function (_0x20be66) {
    const _0x5f3342 = _0x2283;
    var _0x5708e6 = "",
      _0x37de21 = _0x20be66[_0x5f3342(0x23e)](/\D/g, ""),
      _0x20569c = 0x0,
      _0x160fef = 0x0;
    while (
      _0x20569c < _0x37de21[_0x5f3342(0x2fe)] &&
      _0x160fef < _0x4227a0[_0x5f3342(0x2fe)]
    ) {
      _0x4227a0[_0x160fef] === "x"
        ? ((_0x5708e6 += _0x37de21[_0x20569c]), _0x20569c++)
        : (_0x5708e6 += _0x4227a0[_0x160fef]),
        _0x160fef++;
    }
    if (_0x20be66[_0x5f3342(0x2fe)] < _0x1c0dcd[_0x5f3342(0x2fe)]) {
      var _0x29d277 = _0x4227a0[_0x5f3342(0x2c0)](_0x160fef);
      _0x5708e6 += _0x29d277[_0x5f3342(0x23e)](/x/g, "");
    }
    return (_0x1c0dcd = _0x5708e6), _0x5708e6;
  };
}
function validateURL(_0x42270f) {
  const _0x108d34 = _0xd17637;
  return urlPattern[_0x108d34(0x280)](_0x42270f) ? !![] : ![];
}
quiz &&
  steps["each"](function () {
    const _0xecc216 = _0xd17637;
    $(this)["children"]()[_0xecc216(0x214)](_0xecc216(0x2d6), !![]),
      $(this)[_0xecc216(0x31b)]()[_0xecc216(0x214)]("data-radio-delay", 0xfa);
  });
function disableBtn(_0x37756a) {
  const _0x3ad966 = _0xd17637;
  (fill = ![]),
    !customError &&
      ($(_0x3ad966(0x236))["css"]({
        opacity: _0x3ad966(0x1f1),
        "pointer-events": _0x3ad966(0x242),
      }),
      $(_0x3ad966(0x236))["addClass"](_0x3ad966(0x2e9)),
      $("[data-form=\x22submit-btn\x22]")[_0x3ad966(0x20d)]({
        opacity: _0x3ad966(0x1f1),
        "pointer-events": _0x3ad966(0x242),
      }),
      $("[data-form=\x22submit-btn\x22]")[_0x3ad966(0x28b)](_0x3ad966(0x2e9)),
      $(_0x3ad966(0x1e5))["css"]({
        opacity: _0x3ad966(0x1f1),
        "pointer-events": _0x3ad966(0x242),
      }),
      $(_0x3ad966(0x1e5))[_0x3ad966(0x28b)](_0x3ad966(0x2e9)));
}
function enableBtn() {
  const _0x38a5b3 = _0xd17637;
  (fill = !![]),
    $(_0x38a5b3(0x236))[_0x38a5b3(0x20d)]({
      "pointer-events": _0x38a5b3(0x309),
      opacity: "1",
    }),
    $(_0x38a5b3(0x236))[_0x38a5b3(0x20c)](_0x38a5b3(0x2e9)),
    $(_0x38a5b3(0x30b))[_0x38a5b3(0x20d)]({
      "pointer-events": _0x38a5b3(0x309),
      opacity: "1",
    }),
    $(_0x38a5b3(0x30b))["removeClass"](_0x38a5b3(0x2e9)),
    $(_0x38a5b3(0x1e5))[_0x38a5b3(0x20d)]({
      "pointer-events": "auto",
      opacity: "1",
    }),
    $(_0x38a5b3(0x1e5))["removeClass"]("disabled");
}
function saveLastAnswer(_0x155273) {
  const _0x2534e4 = _0xd17637;
  console[_0x2534e4(0x233)](_0x155273),
    localStorage[_0x2534e4(0x1da)]("formlyLastStepAnswer"),
    localStorage["setItem"](
      _0x2534e4(0x2bb),
      JSON[_0x2534e4(0x25e)](_0x155273),
    );
}
function saveFilledInput() {
  const _0x1cef8a = _0xd17637;
  $(_0x1cef8a(0x209))
    ["not"](_0x1cef8a(0x277))
    [_0x1cef8a(0x28d)](function () {
      const _0x5870cb = _0x1cef8a;
      $(this)[_0x5870cb(0x214)](_0x5870cb(0x1cc)) === _0x5870cb(0x26d) ||
      $(this)[_0x5870cb(0x214)](_0x5870cb(0x1cc)) === _0x5870cb(0x22d)
        ? $(this)[_0x5870cb(0x317)]("checked") &&
          (filledInput[_0x5870cb(0x2ea)](
            (_0x215f7f) =>
              _0x215f7f[_0x5870cb(0x1fc)] ===
              $(this)[_0x5870cb(0x214)](_0x5870cb(0x225)),
          )
            ? ((filledInput = filledInput[_0x5870cb(0x29d)](
                (_0x4802db) =>
                  _0x4802db[_0x5870cb(0x1fc)] !==
                  $(this)[_0x5870cb(0x214)](_0x5870cb(0x225)),
              )),
              $(this)[_0x5870cb(0x1fb)]() !== "" &&
                filledInput[_0x5870cb(0x2a0)]({
                  inputName: $(this)[_0x5870cb(0x214)](_0x5870cb(0x225)),
                  value: $(this)[_0x5870cb(0x1fb)](),
                }))
            : $(this)[_0x5870cb(0x1fb)]() !== "" &&
              filledInput["push"]({
                inputName: $(this)[_0x5870cb(0x214)](_0x5870cb(0x225)),
                value: $(this)[_0x5870cb(0x1fb)](),
              }))
        : filledInput[_0x5870cb(0x2ea)](
              (_0x3aaa61) =>
                _0x3aaa61[_0x5870cb(0x1fc)] ===
                $(this)[_0x5870cb(0x214)]("name"),
            )
          ? ((filledInput = filledInput[_0x5870cb(0x29d)](
              (_0x2d7c26) =>
                _0x2d7c26[_0x5870cb(0x1fc)] !==
                $(this)["attr"](_0x5870cb(0x225)),
            )),
            $(this)[_0x5870cb(0x1fb)]() !== "" &&
              filledInput[_0x5870cb(0x2a0)]({
                inputName: $(this)["attr"](_0x5870cb(0x225)),
                value: $(this)[_0x5870cb(0x1fb)](),
              }))
          : $(this)["val"]() !== "" &&
            filledInput[_0x5870cb(0x2a0)]({
              inputName: $(this)[_0x5870cb(0x214)](_0x5870cb(0x225)),
              value: $(this)[_0x5870cb(0x1fb)](),
            });
    }),
    trackLastStep &&
      (console[_0x1cef8a(0x233)](_0x1cef8a(0x320)),
      formlyLastStep > x ? (lastStep = formlyLastStep) : (lastStep = x),
      localStorage[_0x1cef8a(0x1da)](_0x1cef8a(0x300)),
      localStorage["setItem"](_0x1cef8a(0x300), lastStep)),
    localStorage[_0x1cef8a(0x1da)]("filledInput"),
    localStorage["setItem"](
      _0x1cef8a(0x31d),
      JSON[_0x1cef8a(0x25e)](filledInput),
    );
}
function scrollTop() {
  const _0x2ab3a5 = _0xd17637;
  scrollToTop &&
    $(_0x2ab3a5(0x30f))["animate"](
      {
        scrollTop:
          $(_0x2ab3a5(0x2df))[_0x2ab3a5(0x25b)]()[_0x2ab3a5(0x23d)] -
          scrollTopOffset,
      },
      0x3e8,
    );
}
function updateStep() {
  const _0x192890 = _0xd17637;
  scrollTop(),
    (skip = ![]),
    $(_0x192890(0x283))[_0x192890(0x20c)](_0x192890(0x2e9));
  $(_0x192890(0x301))[_0x192890(0x32b)](_0x192890(0x29c)) &&
    (steps[_0x192890(0x295)](_0x192890(0x1d4))[_0x192890(0x28d)](function () {
      const _0x219626 = _0x192890;
      $(
        $(_0x219626(0x283))[
          $(this)[_0x219626(0x254)](_0x219626(0x324))["index"]()
        ],
      ),
        $(this)[_0x219626(0x1fb)]() === "" && emptyInput++;
    }),
    emptyInput > 0x0
      ? $("input[type=\x22submit\x22]")[_0x192890(0x28b)](_0x192890(0x2e9))
      : $("input[type=\x22submit\x22]")[_0x192890(0x20c)](_0x192890(0x2e9)));
  $(_0x192890(0x283))[_0x192890(0x20c)](_0x192890(0x28c)),
    $(_0x192890(0x283))["addClass"](_0x192890(0x2e9)),
    $($("[data-form=\x22custom-progress-indicator\x22]")[x])[_0x192890(0x28b)](
      _0x192890(0x28c),
    ),
    (selection = selections["filter"](
      (_0x2e9f60) => _0x2e9f60[_0x192890(0x2d1)] === x - 0x1,
    ));
  next &&
    (x = getSafe(() => selection[0x0][_0x192890(0x2d7)])
      ? parseInt(getSafe(() => selection[0x0][_0x192890(0x2d7)]))
      : x);
  $("[data-answer]")["hide"](), steps[_0x192890(0x203)]();
  reinitIX === !![] && window[_0x192890(0x27b)][_0x192890(0x220)]();
  $(progressbar)[_0x192890(0x20c)]("current");
  for (i = 0x0; i <= x; i++) {
    countCard
      ? $(progressbar[i])[_0x192890(0x28b)](_0x192890(0x28c))
      : !$(steps[i])[_0x192890(0x32b)](_0x192890(0x227)) &&
        $(progressbar[i])["addClass"](_0x192890(0x28c));
  }
  reinitIX === !![]
    ? (window["Webflow"] &&
        window[_0x192890(0x27b)]
          [_0x192890(0x24c)](_0x192890(0x266))
          [_0x192890(0x1df)](),
      document[_0x192890(0x31c)](new Event(_0x192890(0x23a))),
      $(steps[x])["show"]())
    : $(steps[x])["fadeIn"](_0x192890(0x247));
  $(_0x192890(0x2e1))[_0x192890(0x20c)]("active-answer-card");
  x === 0x0 &&
    !$(steps[x])[_0x192890(0x32b)](_0x192890(0x227)) &&
    ($(steps[x])[_0x192890(0x295)]("[data-answer]")[_0x192890(0x218)](),
    $(steps[x])
      [_0x192890(0x295)](_0x192890(0x1fe))
      ["addClass"](_0x192890(0x1e0)));
  selection[_0x192890(0x2fe)] > 0x0
    ? ($(steps[x])
        [_0x192890(0x295)](
          _0x192890(0x2cc) + selection[0x0][_0x192890(0x32d)] + "\x22]",
        )
        [_0x192890(0x218)](),
      $(steps[x])
        ["find"](_0x192890(0x2cc) + selection[0x0][_0x192890(0x32d)] + "\x22]")
        [_0x192890(0x28b)]("active-answer-card"))
    : ($(steps[x])
        [_0x192890(0x295)]("[data-answer=\x22" + answer + "\x22]")
        [_0x192890(0x218)](),
      $(steps[x])
        [_0x192890(0x295)](_0x192890(0x2cc) + answer + "\x22]")
        [_0x192890(0x28b)](_0x192890(0x1e0)));
  if (x === 0x0)
    $(_0x192890(0x2c4))[_0x192890(0x203)](),
      $(_0x192890(0x236))[_0x192890(0x218)](),
      $(_0x192890(0x30b))["hide"]();
  else {
    if (
      x === steps[_0x192890(0x2fe)] - 0x1 ||
      $(steps[x])[_0x192890(0x295)]("[data-form=\x22submit\x22]:visible")[
        _0x192890(0x2fe)
      ] > 0x0
    ) {
      $(_0x192890(0x236))[_0x192890(0x203)]();
      if (
        $(steps[x])
          ["find"](_0x192890(0x2da))
          [_0x192890(0x32b)](_0x192890(0x262))
      )
        $(steps[x])[_0x192890(0x295)](_0x192890(0x2da))[_0x192890(0x218)]();
      else
        $(_0x192890(0x236))["data"](_0x192890(0x262)) &&
          $("[data-form=\x22next-btn\x22]")[_0x192890(0x218)]();
      $(_0x192890(0x30b))[_0x192890(0x218)](),
        $(_0x192890(0x1e5))["show"](),
        $(_0x192890(0x2c4))[_0x192890(0x218)]();
    } else
      $("[data-form=\x22next-btn\x22]")["show"](),
        $(_0x192890(0x2c4))[_0x192890(0x218)](),
        $("[data-form=\x22submit-btn\x22]")[_0x192890(0x203)](),
        $(_0x192890(0x1e5))[_0x192890(0x203)]();
  }
  $($(steps[x])[_0x192890(0x295)]("input[autofocus]")[0x0])[_0x192890(0x2b5)](),
    $($(steps[x])[_0x192890(0x295)](_0x192890(0x1f2))[0x0])[_0x192890(0x2b5)](),
    validation();
  for (idx = 0x0; idx <= x; idx++) {
    $($(_0x192890(0x283))[idx])[_0x192890(0x20c)]("disabled");
  }
}
function validateEmail(_0x49703a, _0x5bad34, _0x3f2de5) {
  const _0x421852 = _0xd17637;
  let _0x53b5b9 = _0x49703a["includes"]("@")
    ? _0x49703a[_0x421852(0x270)]("@")[0x1]["split"](".")[0x0]
    : [];
  dom = [];
  _0x5bad34 !== undefined &&
    _0x5bad34[_0x421852(0x270)](",")[_0x421852(0x2b3)](function (_0x5e0bcf) {
      const _0x5553f0 = _0x421852;
      _0x5e0bcf[_0x5553f0(0x2dd)](_0x53b5b9) &&
        dom[_0x5553f0(0x2a0)](_0x53b5b9);
    });
  dom[_0x421852(0x2fe)] > 0x0 ? (domainAllowed = ![]) : (domainAllowed = !![]);
  var _0x28dc47 = /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,20})?$/;
  console[_0x421852(0x233)](_0x28dc47["test"](_0x49703a)),
    !_0x28dc47[_0x421852(0x280)](_0x49703a) || !domainAllowed
      ? ((emailFilled = ![]),
        unfilledArr[_0x421852(0x2a0)]({ input: _0x3f2de5 }))
      : (emailFilled = !![]);
}
function phoneValidation(_0x59a4c1, _0x70d65d, _0x3ec4f7) {
  if (phoneFormat) return _0x70d65d >= _0x3ec4f7 ? !![] : ![];
  else {
    if (_0x70d65d >= _0x3ec4f7) return !![];
  }
}
function validation() {
  const _0x36843b = _0xd17637;
  $(steps[x])[_0x36843b(0x32b)](_0x36843b(0x227)) && enableBtn();
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
    (textareaLength = $(steps[x])[_0x36843b(0x295)](_0x36843b(0x1f4))[
      _0x36843b(0x2fe)
    ]),
    (textInputLength = $(steps[x])[_0x36843b(0x295)](_0x36843b(0x278))[
      _0x36843b(0x2fe)
    ]),
    (selectInputLength = $(steps[x])[_0x36843b(0x295)](_0x36843b(0x297))[
      "length"
    ]),
    (emailInputLength = $(steps[x])[_0x36843b(0x295)](_0x36843b(0x2ac))[
      _0x36843b(0x2fe)
    ]),
    (checkboxInputLength = $(steps[x])[_0x36843b(0x295)](_0x36843b(0x2f1))[
      _0x36843b(0x2fe)
    ]);
  textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0
    ? disableBtn()
    : enableBtn();
  checkCount = $(steps[x])[_0x36843b(0x32b)](_0x36843b(0x26d))
    ? $(steps[x])[_0x36843b(0x32b)](_0x36843b(0x26d))
    : $(steps[x])["find"](_0x36843b(0x2f0))[_0x36843b(0x2fe)] > 0x0
      ? $(steps[x])
          [_0x36843b(0x295)]("[data-checkbox]")
          [_0x36843b(0x32b)](_0x36843b(0x26d))
      : 0x0;
  if (!logicExtra)
    $(steps[x])[_0x36843b(0x295)](_0x36843b(0x22f))["is"](_0x36843b(0x20a)) &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])[_0x36843b(0x295)](_0x36843b(0x304))[_0x36843b(0x2fe)]
        ? $(steps[x])
            [_0x36843b(0x295)](":input[type=\x22checkbox\x22]")
            [_0x36843b(0x28d)](function () {
              const _0x2d9a4b = _0x36843b;
              $(this)["is"](_0x2d9a4b(0x328))
                ? $(steps[x])["find"](_0x2d9a4b(0x20b))[_0x2d9a4b(0x2fe)] <
                    0x1 &&
                  ((checkboxFilled = !![]),
                  resetInputErrorMessage(
                    $(this)[_0x2d9a4b(0x214)](_0x2d9a4b(0x225)),
                  ))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0x2d9a4b(0x2a0)]({
                    input: $(this)["attr"](_0x2d9a4b(0x225)),
                  }));
            })
        : $(steps[x])[_0x36843b(0x295)](_0x36843b(0x1ff))[_0x36843b(0x2fe)] >=
            checkCount
          ? $(steps[x])[_0x36843b(0x295)](
              ":input[type=\x22checkbox\x22][required]",
            )["length"] > 0x0
            ? $(steps[x])
                [_0x36843b(0x295)](_0x36843b(0x20b))
                [_0x36843b(0x28d)](function () {
                  const _0x39dc41 = _0x36843b;
                  checkboxFilled = ![];
                  let _0x4f6506 = $(steps[x])[_0x39dc41(0x295)](
                      _0x39dc41(0x20b),
                    )[_0x39dc41(0x2fe)],
                    _0x42a9ff = $(steps[x])[_0x39dc41(0x295)](_0x39dc41(0x310))[
                      _0x39dc41(0x2fe)
                    ];
                  console[_0x39dc41(0x233)](_0x4f6506 - _0x42a9ff),
                    _0x4f6506 - _0x42a9ff === 0x0
                      ? ((checkboxFilled = !![]),
                        resetInputErrorMessage(
                          $(steps[x])
                            [_0x39dc41(0x295)](_0x39dc41(0x304))
                            [_0x39dc41(0x214)](_0x39dc41(0x225)),
                        ))
                      : ((checkboxFilled = ![]),
                        $(steps[x])
                          [_0x39dc41(0x295)](_0x39dc41(0x1d7))
                          [_0x39dc41(0x28d)](function () {
                            const _0x4db7f8 = _0x39dc41;
                            unfilledArr[_0x4db7f8(0x2a0)]({
                              input: $(this)[_0x4db7f8(0x214)](
                                _0x4db7f8(0x225),
                              ),
                            });
                          }));
                })
            : ((checkboxFilled = !![]),
              resetInputErrorMessage(
                $(steps[x])
                  [_0x36843b(0x295)](_0x36843b(0x304))
                  [_0x36843b(0x214)](_0x36843b(0x225)),
              ))
          : ((checkboxFilled = ![]),
            $(steps[x])
              [_0x36843b(0x295)](_0x36843b(0x20b))
              [_0x36843b(0x28d)](function () {
                const _0x3b752a = _0x36843b;
                $(this)["not"](":checked") &&
                  unfilledArr[_0x3b752a(0x2a0)]({
                    input: $(this)[_0x3b752a(0x214)]("name"),
                  });
              }),
            unfilledArr[_0x36843b(0x2a0)]({
              input: $(steps[x])["find"](_0x36843b(0x304))["attr"]("name"),
            }))),
      $(steps[x])
        [_0x36843b(0x295)](_0x36843b(0x208))
        [_0x36843b(0x28d)](function (_0x4877bd) {
          const _0x2e5b22 = _0x36843b;
          var _0x271085 = $(this)[_0x2e5b22(0x214)](_0x2e5b22(0x225));
          $("input:radio[name=\x22" + _0x271085 + _0x2e5b22(0x230))["length"] ==
          0x0
            ? (!empReqRadio[_0x2e5b22(0x295)](
                (_0x38a289) => _0x38a289[_0x2e5b22(0x1ed)] === _0x4877bd,
              ) && empReqRadio[_0x2e5b22(0x2a0)]({ input: _0x4877bd }),
              unfilledArr["push"]({
                input: $(this)[_0x2e5b22(0x214)](_0x2e5b22(0x225)),
              }))
            : (empReqRadio = empReqRadio[_0x2e5b22(0x29d)](
                (_0x24c225) => _0x24c225[_0x2e5b22(0x1ed)] !== _0x4877bd,
              )),
            empReqRadio[_0x2e5b22(0x2fe)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x36843b(0x260))
        [_0x36843b(0x28d)](function (_0x5eb7df) {
          const _0x5e562a = _0x36843b;
          let _0xc06062 = $(this)[_0x5e562a(0x1fb)]()[_0x5e562a(0x2fe)],
            _0x158417 = $(this)[_0x5e562a(0x32b)](_0x5e562a(0x1f6))
              ? $(this)[_0x5e562a(0x32b)](_0x5e562a(0x1f6))
              : 0x0;
          $(this)[_0x5e562a(0x1fb)]() !== "" && _0xc06062 >= _0x158417
            ? (empReqInput = empReqInput[_0x5e562a(0x29d)](
                (_0x3c46f3) => _0x3c46f3[_0x5e562a(0x1ed)] !== _0x5eb7df,
              ))
            : (!empReqInput[_0x5e562a(0x295)](
                (_0x4185fd) => _0x4185fd[_0x5e562a(0x1ed)] === _0x5eb7df,
              ) && empReqInput["push"]({ input: _0x5eb7df }),
              unfilledArr[_0x5e562a(0x2a0)]({
                input: $(this)["attr"](_0x5e562a(0x225)),
              })),
            empReqInput[_0x5e562a(0x2fe)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x36843b(0x295)](_0x36843b(0x2a8))
        [_0x36843b(0x28d)](function (_0x43d6f6) {
          const _0x1565ca = _0x36843b;
          let _0x3d7c6c = $(this)[_0x1565ca(0x1fb)]()[_0x1565ca(0x2fe)],
            _0x42eef7 = $(this)[_0x1565ca(0x32b)](_0x1565ca(0x1f6))
              ? $(this)[_0x1565ca(0x32b)]("min-character")
              : 0x0;
          $(this)[_0x1565ca(0x1fb)]() !== "" && _0x3d7c6c >= _0x42eef7
            ? (empReqPassword = empReqPassword[_0x1565ca(0x29d)](
                (_0xde51ad) => _0xde51ad[_0x1565ca(0x1ed)] !== _0x43d6f6,
              ))
            : (!empReqPassword[_0x1565ca(0x295)](
                (_0x5b93a1) => _0x5b93a1[_0x1565ca(0x1ed)] === _0x43d6f6,
              ) && empReqPassword[_0x1565ca(0x2a0)]({ input: _0x43d6f6 }),
              unfilledArr[_0x1565ca(0x2a0)]({
                input: $(this)[_0x1565ca(0x214)](_0x1565ca(0x225)),
              })),
            empReqPassword[_0x1565ca(0x2fe)] === 0x0
              ? (passwordFilled = !![])
              : (passwordFilled = ![]);
        }),
      $(steps[x])
        [_0x36843b(0x295)](":input[type=\x22url\x22][required]")
        [_0x36843b(0x28d)](function (_0x46ac18) {
          const _0x5cc536 = _0x36843b;
          let _0x489e32 = $(this)[_0x5cc536(0x1fb)]()[_0x5cc536(0x2fe)],
            _0x4760c3 = $(this)[_0x5cc536(0x32b)](_0x5cc536(0x1f6))
              ? $(this)[_0x5cc536(0x32b)](_0x5cc536(0x1f6))
              : 0x0;
          $(this)["val"]() !== "" && _0x489e32 >= _0x4760c3
            ? (empReqTime = empReqTime["filter"](
                (_0x2605f6) => _0x2605f6[_0x5cc536(0x1ed)] !== _0x46ac18,
              ))
            : (!empReqTime["find"](
                (_0x25dce6) => _0x25dce6[_0x5cc536(0x1ed)] === _0x46ac18,
              ) && empReqUrl[_0x5cc536(0x2a0)]({ input: _0x46ac18 }),
              unfilledArr[_0x5cc536(0x2a0)]({
                input: $(this)["attr"]("name"),
              })),
            empReqTime[_0x5cc536(0x2fe)] === 0x0 &&
            validateURL($(this)[_0x5cc536(0x1fb)]())
              ? ((timeFilled = !![]), console["log"](timeFilled))
              : (timeFilled = ![]);
        }),
      $(steps[x])
        [_0x36843b(0x295)](_0x36843b(0x313))
        [_0x36843b(0x28d)](function (_0x489d1d) {
          const _0x2348cd = _0x36843b;
          let _0x41e198 = $(this)[_0x2348cd(0x1fb)]()[_0x2348cd(0x2fe)],
            _0x4fe347 = $(this)[_0x2348cd(0x32b)](_0x2348cd(0x1f6))
              ? $(this)["data"](_0x2348cd(0x1f6))
              : 0x0;
          $(this)["val"]() !== "" && _0x41e198 >= _0x4fe347
            ? (empReqUrl = empReqUrl[_0x2348cd(0x29d)](
                (_0x16a496) => _0x16a496["input"] !== _0x489d1d,
              ))
            : (!empReqUrl[_0x2348cd(0x295)](
                (_0x3c3200) => _0x3c3200["input"] === _0x489d1d,
              ) && empReqUrl[_0x2348cd(0x2a0)]({ input: _0x489d1d }),
              unfilledArr[_0x2348cd(0x2a0)]({
                input: $(this)[_0x2348cd(0x214)]("name"),
              })),
            empReqUrl[_0x2348cd(0x2fe)] === 0x0 &&
            validateURL($(this)[_0x2348cd(0x1fb)]())
              ? ((urlFilled = !![]), console[_0x2348cd(0x233)](urlFilled))
              : (urlFilled = ![]);
        }),
      $(steps[x])
        [_0x36843b(0x295)](_0x36843b(0x206))
        [_0x36843b(0x28d)](function (_0x1e90ec) {
          const _0x483b47 = _0x36843b;
          $(this)[_0x483b47(0x1fb)]() !== ""
            ? (empReqDate = empReqDate[_0x483b47(0x29d)](
                (_0x3ac839) => _0x3ac839[_0x483b47(0x1ed)] !== _0x1e90ec,
              ))
            : (!empReqDate[_0x483b47(0x295)](
                (_0x1829af) => _0x1829af[_0x483b47(0x1ed)] === _0x1e90ec,
              ) && empReqDate[_0x483b47(0x2a0)]({ input: _0x1e90ec }),
              unfilledArr[_0x483b47(0x2a0)]({
                input: $(this)[_0x483b47(0x214)](_0x483b47(0x225)),
              })),
            empReqDate["length"] === 0x0
              ? (dateFilled = !![])
              : (dateFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x36843b(0x2b7))
        [_0x36843b(0x28d)](function (_0x3e18c2) {
          const _0x446824 = _0x36843b;
          if ($(this)[_0x446824(0x1fb)]() !== "") {
            let _0xe21f9a = $(this)["val"]()["length"],
              _0x57ee2 = $(this)[_0x446824(0x32b)]("min-character")
                ? $(this)[_0x446824(0x32b)]("min-character")
                : 0x0;
            if ($(this)[_0x446824(0x32b)](_0x446824(0x1c8))) {
              var _0xb5483b = phoneAutoFormat(
                $(this)["data"](_0x446824(0x1c8)),
              );
              $(this)[_0x446824(0x1fb)](_0xb5483b($(this)["val"]()));
            }
            phoneValidation($(this)[_0x446824(0x1fb)](), _0xe21f9a, _0x57ee2)
              ? (empReqTel = empReqTel["filter"](
                  (_0x295368) => _0x295368[_0x446824(0x1ed)] !== _0x3e18c2,
                ))
              : empReqTel[_0x446824(0x2a0)]({ input: _0x3e18c2 });
          } else
            !empReqTel[_0x446824(0x295)](
              (_0x1615d0) => _0x1615d0[_0x446824(0x1ed)] === _0x3e18c2,
            ) && empReqTel[_0x446824(0x2a0)]({ input: _0x3e18c2 }),
              unfilledArr["push"]({ input: $(this)["attr"](_0x446824(0x225)) });
          empReqTel[_0x446824(0x2fe)] === 0x0
            ? (telFilled = !![])
            : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x36843b(0x295)](_0x36843b(0x253))
        [_0x36843b(0x28d)](function (_0x236d56) {
          const _0x54b554 = _0x36843b;
          $(this)[_0x54b554(0x1fb)]() !== ""
            ? (empReqFile = empReqFile["filter"](
                (_0x511213) => _0x511213[_0x54b554(0x1ed)] !== _0x236d56,
              ))
            : (!empReqFile[_0x54b554(0x295)](
                (_0x3fcb7d) => _0x3fcb7d["input"] === _0x236d56,
              ) && empReqFile[_0x54b554(0x2a0)]({ input: _0x236d56 }),
              unfilledArr[_0x54b554(0x2a0)]({
                input: $(this)[_0x54b554(0x214)](_0x54b554(0x225)),
              })),
            empReqFile[_0x54b554(0x2fe)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x36843b(0x26c))
        [_0x36843b(0x28d)](function (_0x5eb295) {
          const _0x3599e4 = _0x36843b;
          let _0x4a2b13 = $(this)[_0x3599e4(0x1fb)]()["length"],
            _0x2f7f62 = $(this)["data"](_0x3599e4(0x1f6))
              ? $(this)[_0x3599e4(0x32b)](_0x3599e4(0x1f6))
              : 0x0;
          $(this)["val"]() !== "" && _0x4a2b13 >= _0x2f7f62
            ? (empReqNum = empReqNum[_0x3599e4(0x29d)](
                (_0x385708) => _0x385708[_0x3599e4(0x1ed)] !== _0x5eb295,
              ))
            : (!empReqNum["find"](
                (_0x3dc817) => _0x3dc817[_0x3599e4(0x1ed)] === _0x5eb295,
              ) && empReqNum["push"]({ input: _0x5eb295 }),
              unfilledArr["push"]({
                input: $(this)["attr"](_0x3599e4(0x225)),
              })),
            empReqNum["length"] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x36843b(0x226))
        [_0x36843b(0x28d)](function (_0x1db493) {
          const _0x117d93 = _0x36843b;
          let _0x30664a = $(this)["val"]();
          _0x30664a === "" && (_0x30664a = null),
            _0x30664a != null
              ? (empReqSelect = empReqSelect[_0x117d93(0x29d)](
                  (_0x1d0dec) => _0x1d0dec[_0x117d93(0x1ed)] !== _0x1db493,
                ))
              : (!empReqSelect[_0x117d93(0x295)](
                  (_0x4245a8) => _0x4245a8["input"] === _0x1db493,
                ) && empReqSelect[_0x117d93(0x2a0)]({ input: _0x1db493 }),
                unfilledArr[_0x117d93(0x2a0)]({
                  input: $(this)[_0x117d93(0x214)](_0x117d93(0x225)),
                })),
            empReqSelect["length"] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x36843b(0x295)](_0x36843b(0x21c))
        ["each"](function (_0x389ac7) {
          const _0x52de93 = _0x36843b;
          let _0x236377 = $(this)[_0x52de93(0x1fb)]()[_0x52de93(0x2fe)],
            _0x5d6313 = $(this)[_0x52de93(0x32b)](_0x52de93(0x1f6))
              ? $(this)[_0x52de93(0x32b)](_0x52de93(0x1f6))
              : 0x0;
          $(this)["val"]() !== "" && _0x236377 >= _0x5d6313
            ? (empReqTextarea = empReqTextarea[_0x52de93(0x29d)](
                (_0x1469ae) => _0x1469ae[_0x52de93(0x1ed)] !== _0x389ac7,
              ))
            : (!empReqTextarea["find"](
                (_0x4ac9e0) => _0x4ac9e0["input"] === _0x389ac7,
              ) && empReqTextarea[_0x52de93(0x2a0)]({ input: _0x389ac7 }),
              unfilledArr["push"]({
                input: $(this)[_0x52de93(0x214)](_0x52de93(0x225)),
              })),
            empReqTextarea[_0x52de93(0x2fe)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x36843b(0x295)](_0x36843b(0x2fa))
        ["each"](function () {
          const _0x13f7a2 = _0x36843b;
          $(this)[_0x13f7a2(0x1fb)]() !== ""
            ? validateEmail(
                $(this)[_0x13f7a2(0x1fb)](),
                $(this)[_0x13f7a2(0x32b)](_0x13f7a2(0x24f)),
                $(this)[_0x13f7a2(0x214)](_0x13f7a2(0x225)),
              )
            : ((emailFilled = ![]),
              unfilledArr[_0x13f7a2(0x2a0)]({
                input: $(this)["attr"]("name"),
              }));
        });
  else {
    if ($(steps[x])[_0x36843b(0x32b)](_0x36843b(0x227)))
      (answer = $(steps[x])["find"]("[data-go-to]")[_0x36843b(0x32b)]("go-to")),
        (selections = selections[_0x36843b(0x29d)](
          (_0x5a21ab) => _0x5a21ab[_0x36843b(0x2d1)] !== x,
        )),
        selections[_0x36843b(0x2a0)]({ step: x, selected: answer });
    else
      $(steps[x])
        ["find"](".active-answer-card")
        [_0x36843b(0x32b)](_0x36843b(0x227)) &&
        ((answer = $(steps[x])
          ["find"](_0x36843b(0x2e1))
          [_0x36843b(0x32b)](_0x36843b(0x276))),
        (selections = selections[_0x36843b(0x29d)](
          (_0x41fc8f) => _0x41fc8f[_0x36843b(0x2d1)] !== x,
        )),
        selections[_0x36843b(0x2a0)]({ step: x, selected: answer }));
    $(steps[x])
      [_0x36843b(0x295)](_0x36843b(0x2e1))
      [_0x36843b(0x295)](":input")
      ["is"]("[type=\x22checkbox\x22]") &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])[_0x36843b(0x295)](_0x36843b(0x304))[_0x36843b(0x2fe)]
        ? (console[_0x36843b(0x233)](_0x36843b(0x280)),
          $(steps[x])
            [_0x36843b(0x295)](_0x36843b(0x304))
            [_0x36843b(0x28d)](function () {
              const _0x5af392 = _0x36843b;
              $(this)["is"](_0x5af392(0x328))
                ? $(steps[x])[_0x5af392(0x295)](_0x5af392(0x1d4))[
                    _0x5af392(0x2fe)
                  ] < 0x1 &&
                  ((skipTo = undefined),
                  $(this)
                    [_0x5af392(0x254)](_0x5af392(0x2d5))
                    ["data"]("skip-to") &&
                    (skipTo = $(this)
                      [_0x5af392(0x254)](_0x5af392(0x2d5))
                      [_0x5af392(0x32b)](_0x5af392(0x2c3))),
                  $(this)
                    [_0x5af392(0x254)](_0x5af392(0x2dc))
                    [_0x5af392(0x214)]("data-go-to") &&
                    ((answer = $(this)
                      [_0x5af392(0x254)]("[data-go-to]")
                      [_0x5af392(0x214)]("data-go-to")),
                    (selections = selections[_0x5af392(0x29d)](
                      (_0x31cb97) => _0x31cb97[_0x5af392(0x2d1)] !== x,
                    )),
                    selections[_0x5af392(0x2a0)]({ step: x, selected: answer }),
                    skipTo &&
                      (selections[_0x5af392(0x2a0)]({
                        step: skipTo - 0x2,
                        selected: answer,
                      }),
                      (objIndex = selections[_0x5af392(0x289)](
                        (_0x344bd7) => _0x344bd7[_0x5af392(0x2d1)] === x,
                      )),
                      (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                      (selections[objIndex][_0x5af392(0x1fa)] = x))),
                  (checkboxFilled = !![]),
                  $(steps[x])[_0x5af392(0x295)](_0x5af392(0x310))[
                    _0x5af392(0x2fe)
                  ] >=
                    $(steps[x])["find"](_0x5af392(0x20b))[_0x5af392(0x2fe)] &&
                    resetInputErrorMessage(
                      $(steps[x])
                        ["find"](_0x5af392(0x304))
                        [_0x5af392(0x214)](_0x5af392(0x225)),
                    ))
                : ((checkboxFilled = ![]),
                  unfilledArr["push"]({
                    input: $(this)["attr"](_0x5af392(0x225)),
                  }));
            }))
        : $(steps[x])
              [_0x36843b(0x295)](_0x36843b(0x2e1))
              [_0x36843b(0x295)](_0x36843b(0x1ff))["length"] >= checkCount
          ? ($(steps[x])
              [_0x36843b(0x295)](_0x36843b(0x2e1))
              [_0x36843b(0x295)](":input[type=\x22checkbox\x22]")
              [_0x36843b(0x254)](_0x36843b(0x2dc))
              [_0x36843b(0x214)]("data-go-to") &&
              ((skipTo = undefined),
              $(steps[x])
                [_0x36843b(0x295)](_0x36843b(0x2e1))
                [_0x36843b(0x295)](_0x36843b(0x304))
                [_0x36843b(0x254)](_0x36843b(0x2d5))
                [_0x36843b(0x214)]("data-skip-to") &&
                (skipTo = $(steps[x])
                  [_0x36843b(0x295)](_0x36843b(0x2e1))
                  [_0x36843b(0x295)](":input[type=\x22checkbox\x22]:checked")
                  [_0x36843b(0x254)](_0x36843b(0x2d5))
                  ["attr"]("data-skip-to")),
              (answer = $(steps[x])
                [_0x36843b(0x295)](_0x36843b(0x2e1))
                [_0x36843b(0x295)](":input[type=\x22checkbox\x22]")
                [_0x36843b(0x254)](_0x36843b(0x2dc))
                [_0x36843b(0x214)](_0x36843b(0x2d3))),
              (selections = selections[_0x36843b(0x29d)](
                (_0x358953) => _0x358953[_0x36843b(0x2d1)] !== x,
              )),
              selections[_0x36843b(0x2a0)]({ step: x, selected: answer }),
              skipTo &&
                ((selections = selections[_0x36843b(0x29d)](
                  (_0x808f54) => _0x808f54[_0x36843b(0x2d1)] !== skipTo - 0x2,
                )),
                selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0x36843b(0x289)](
                  (_0x9b5dca) => _0x9b5dca[_0x36843b(0x2d1)] === x,
                )),
                console[_0x36843b(0x233)](objIndex),
                (selections[objIndex][_0x36843b(0x2d7)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x36843b(0x1fa)] = x),
                console["log"](_0x36843b(0x32e)))),
            (checkboxFilled = !![]),
            $(steps[x])[_0x36843b(0x295)](
              ":input[type=\x22checkbox\x22][required]:checked",
            )[_0x36843b(0x2fe)] >=
              $(steps[x])[_0x36843b(0x295)](_0x36843b(0x20b))[
                _0x36843b(0x2fe)
              ] &&
              resetInputErrorMessage(
                $(steps[x])
                  [_0x36843b(0x295)](":input[type=\x22checkbox\x22]")
                  ["attr"]("name"),
              ))
          : ((checkboxFilled = ![]),
            $(steps[x])
              [_0x36843b(0x295)](_0x36843b(0x20b))
              [_0x36843b(0x28d)](function () {
                const _0xc63e4c = _0x36843b;
                $(this)[_0xc63e4c(0x1e6)](_0xc63e4c(0x328)) &&
                  unfilledArr[_0xc63e4c(0x2a0)]({
                    input: $(this)[_0xc63e4c(0x214)]("name"),
                  });
              }))),
      $(steps[x])
        [_0x36843b(0x295)](_0x36843b(0x2e1))
        ["find"](_0x36843b(0x208))
        [_0x36843b(0x28d)](function (_0x29292e) {
          const _0x119067 = _0x36843b;
          var _0x36070d = $(this)[_0x119067(0x214)](_0x119067(0x225));
          $(_0x119067(0x1db) + _0x36070d + _0x119067(0x230))[
            _0x119067(0x2fe)
          ] == 0x0
            ? (!empReqRadio["find"](
                (_0x1abe20) => _0x1abe20[_0x119067(0x1ed)] === _0x29292e,
              ) && empReqRadio["push"]({ input: _0x29292e }),
              unfilledArr[_0x119067(0x2a0)]({
                input: $(this)[_0x119067(0x214)]("name"),
              }))
            : (empReqRadio = empReqRadio["filter"](
                (_0x146887) => _0x146887[_0x119067(0x1ed)] !== _0x29292e,
              )),
            empReqRadio[_0x119067(0x2fe)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0x36843b(0x295)](_0x36843b(0x2e1))
        ["find"](_0x36843b(0x260))
        [_0x36843b(0x28d)](function (_0x276054) {
          const _0x377b60 = _0x36843b;
          let _0xfb89c8 = $(this)[_0x377b60(0x1fb)]()[_0x377b60(0x2fe)],
            _0x52ecd1 = $(this)[_0x377b60(0x32b)](_0x377b60(0x1f6))
              ? $(this)["data"](_0x377b60(0x1f6))
              : 0x0;
          $(this)[_0x377b60(0x1fb)]() !== "" && _0xfb89c8 >= _0x52ecd1
            ? (empReqInput = empReqInput[_0x377b60(0x29d)](
                (_0x2978cb) => _0x2978cb[_0x377b60(0x1ed)] !== _0x276054,
              ))
            : (!empReqInput[_0x377b60(0x295)](
                (_0x518d64) => _0x518d64[_0x377b60(0x1ed)] === _0x276054,
              ) && empReqInput[_0x377b60(0x2a0)]({ input: _0x276054 }),
              unfilledArr["push"]({
                input: $(this)["attr"](_0x377b60(0x225)),
              })),
            empReqInput["length"] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x36843b(0x295)](".active-answer-card")
        [_0x36843b(0x295)](_0x36843b(0x27c))
        [_0x36843b(0x28d)](function (_0xb78ad) {
          const _0x1798ab = _0x36843b;
          (skipTo = undefined),
            $(this)[_0x1798ab(0x254)](_0x1798ab(0x2d5))["data"]("skip-to") !==
              "" &&
              (skipTo = $(this)
                [_0x1798ab(0x254)]("[data-skip-to]")
                [_0x1798ab(0x32b)](_0x1798ab(0x2c3))),
            $(this)
              [_0x1798ab(0x254)](_0x1798ab(0x2dc))
              [_0x1798ab(0x214)](_0x1798ab(0x2d3)) &&
              ((answer = $(this)
                [_0x1798ab(0x254)](_0x1798ab(0x2dc))
                [_0x1798ab(0x214)](_0x1798ab(0x2d3))),
              (selections = selections[_0x1798ab(0x29d)](
                (_0x2b521f) => _0x2b521f[_0x1798ab(0x2d1)] !== x,
              )),
              selections[_0x1798ab(0x2a0)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x1798ab(0x2a0)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x1798ab(0x289)](
                  (_0x462b9c) => _0x462b9c[_0x1798ab(0x2d1)] === x,
                )),
                (selections[objIndex][_0x1798ab(0x2d7)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x36843b(0x295)](_0x36843b(0x2e1))
        [_0x36843b(0x295)](_0x36843b(0x2a8))
        [_0x36843b(0x28d)](function (_0xba7373) {
          const _0x1dd18c = _0x36843b;
          let _0x967be = $(this)[_0x1dd18c(0x1fb)]()["length"],
            _0x13cac0 = $(this)["data"](_0x1dd18c(0x1f6))
              ? $(this)[_0x1dd18c(0x32b)]("min-character")
              : 0x0;
          $(this)["val"]() !== "" && _0x967be >= _0x13cac0
            ? (empReqPassword = empReqPassword[_0x1dd18c(0x29d)](
                (_0x3b2df1) => _0x3b2df1["input"] !== _0xba7373,
              ))
            : (!empReqPassword[_0x1dd18c(0x295)](
                (_0x45158b) => _0x45158b[_0x1dd18c(0x1ed)] === _0xba7373,
              ) && empReqPassword[_0x1dd18c(0x2a0)]({ input: _0xba7373 }),
              unfilledArr["push"]({
                input: $(this)[_0x1dd18c(0x214)](_0x1dd18c(0x225)),
              })),
            empReqPassword[_0x1dd18c(0x2fe)] === 0x0
              ? (passwordFilled = !![])
              : (passwordFilled = ![]);
        }),
      $(steps[x])
        [_0x36843b(0x295)](".active-answer-card")
        ["find"](":input[type=\x22password\x22]")
        ["each"](function (_0x38d566) {
          const _0x52a8e6 = _0x36843b;
          (skipTo = undefined),
            $(this)
              [_0x52a8e6(0x254)](_0x52a8e6(0x2d5))
              ["data"](_0x52a8e6(0x2c3)) !== "" &&
              (skipTo = $(this)
                [_0x52a8e6(0x254)](_0x52a8e6(0x2d5))
                ["data"](_0x52a8e6(0x2c3))),
            $(this)
              [_0x52a8e6(0x254)](_0x52a8e6(0x2dc))
              [_0x52a8e6(0x214)](_0x52a8e6(0x2d3)) &&
              ((answer = $(this)
                ["parents"](_0x52a8e6(0x2dc))
                [_0x52a8e6(0x214)](_0x52a8e6(0x2d3))),
              (selections = selections[_0x52a8e6(0x29d)](
                (_0x2ed106) => _0x2ed106["step"] !== x,
              )),
              selections[_0x52a8e6(0x2a0)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x52a8e6(0x2a0)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x52a8e6(0x289)](
                  (_0x3f4f43) => _0x3f4f43[_0x52a8e6(0x2d1)] === x,
                )),
                (selections[objIndex][_0x52a8e6(0x2d7)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x52a8e6(0x1fa)] = x)));
        }),
      $(steps[x])
        ["find"](_0x36843b(0x2e1))
        [_0x36843b(0x295)](_0x36843b(0x1f9))
        [_0x36843b(0x28d)](function (_0x17bbd1) {
          const _0xa10074 = _0x36843b;
          let _0x13c3d5 = $(this)[_0xa10074(0x1fb)]()["length"],
            _0x58b5bb = $(this)["data"](_0xa10074(0x1f6))
              ? $(this)[_0xa10074(0x32b)]("min-character")
              : 0x0;
          $(this)[_0xa10074(0x1fb)]() !== "" && _0x13c3d5 >= _0x58b5bb
            ? (empReqUrl = empReqUrl[_0xa10074(0x29d)](
                (_0x592c05) => _0x592c05["input"] !== _0x17bbd1,
              ))
            : (!empReqUrl[_0xa10074(0x295)](
                (_0xe6a24c) => _0xe6a24c[_0xa10074(0x1ed)] === _0x17bbd1,
              ) && empReqUrl[_0xa10074(0x2a0)]({ input: _0x17bbd1 }),
              unfilledArr[_0xa10074(0x2a0)]({
                input: $(this)["attr"](_0xa10074(0x225)),
              })),
            empReqUrl[_0xa10074(0x2fe)] === 0x0 &&
            validateURL($(this)[_0xa10074(0x1fb)]())
              ? (urlFilled = !![])
              : (urlFilled = ![]);
        }),
      $(steps[x])
        [_0x36843b(0x295)](".active-answer-card")
        [_0x36843b(0x295)](_0x36843b(0x2ec))
        [_0x36843b(0x28d)](function (_0xe13402) {
          const _0x237db8 = _0x36843b;
          (skipTo = undefined),
            $(this)
              [_0x237db8(0x254)]("[data-skip-to]")
              ["data"](_0x237db8(0x2c3)) !== "" &&
              (skipTo = $(this)
                [_0x237db8(0x254)]("[data-skip-to]")
                [_0x237db8(0x32b)](_0x237db8(0x2c3))),
            $(this)
              [_0x237db8(0x254)](_0x237db8(0x2dc))
              [_0x237db8(0x214)](_0x237db8(0x2d3)) &&
              ((answer = $(this)
                [_0x237db8(0x254)](_0x237db8(0x2dc))
                [_0x237db8(0x214)](_0x237db8(0x2d3))),
              (selections = selections[_0x237db8(0x29d)](
                (_0x5e674d) => _0x5e674d[_0x237db8(0x2d1)] !== x,
              )),
              selections[_0x237db8(0x2a0)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x237db8(0x2a0)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x237db8(0x289)](
                  (_0x15df2f) => _0x15df2f["step"] === x,
                )),
                (selections[objIndex][_0x237db8(0x2d7)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        ["find"](_0x36843b(0x2e1))
        [_0x36843b(0x295)](_0x36843b(0x206))
        [_0x36843b(0x28d)](function (_0x70f5d1) {
          const _0x356ed5 = _0x36843b;
          $(this)[_0x356ed5(0x1fb)]() !== ""
            ? (empReqDate = empReqDate[_0x356ed5(0x29d)](
                (_0x48a02d) => _0x48a02d[_0x356ed5(0x1ed)] !== _0x70f5d1,
              ))
            : (!empReqDate[_0x356ed5(0x295)](
                (_0x4643f1) => _0x4643f1[_0x356ed5(0x1ed)] === _0x70f5d1,
              ) && empReqDate[_0x356ed5(0x2a0)]({ input: _0x70f5d1 }),
              unfilledArr[_0x356ed5(0x2a0)]({
                input: $(this)["attr"](_0x356ed5(0x225)),
              })),
            empReqDate[_0x356ed5(0x2fe)] === 0x0
              ? (dateFilled = !![])
              : (dateFilled = ![]);
        }),
      $(steps[x])
        [_0x36843b(0x295)](".active-answer-card")
        [_0x36843b(0x295)](_0x36843b(0x311))
        [_0x36843b(0x28d)](function (_0x3daa9a) {
          const _0x555746 = _0x36843b;
          (skipTo = undefined),
            $(this)
              [_0x555746(0x254)](_0x555746(0x2d5))
              [_0x555746(0x32b)](_0x555746(0x2c3)) !== "" &&
              (skipTo = $(this)
                [_0x555746(0x254)](_0x555746(0x2d5))
                [_0x555746(0x32b)](_0x555746(0x2c3))),
            $(this)
              [_0x555746(0x254)](_0x555746(0x2dc))
              [_0x555746(0x214)](_0x555746(0x2d3)) &&
              ((answer = $(this)
                [_0x555746(0x254)](_0x555746(0x2dc))
                [_0x555746(0x214)](_0x555746(0x2d3))),
              (selections = selections[_0x555746(0x29d)](
                (_0x740e8b) => _0x740e8b["step"] !== x,
              )),
              selections[_0x555746(0x2a0)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x555746(0x2a0)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x555746(0x289)](
                  (_0x498226) => _0x498226["step"] === x,
                )),
                (selections[objIndex][_0x555746(0x2d7)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x555746(0x1fa)] = x)));
        }),
      $(steps[x])
        ["find"](_0x36843b(0x2e1))
        ["find"](_0x36843b(0x313))
        ["each"](function (_0x3cafff) {
          const _0x5cf035 = _0x36843b;
          $(this)[_0x5cf035(0x1fb)]() !== ""
            ? (empReqTime = empReqTime["filter"](
                (_0x30ba34) => _0x30ba34[_0x5cf035(0x1ed)] !== _0x3cafff,
              ))
            : (!empReqTime["find"](
                (_0xe1f1e9) => _0xe1f1e9["input"] === _0x3cafff,
              ) && empReqTime["push"]({ input: _0x3cafff }),
              unfilledArr[_0x5cf035(0x2a0)]({
                input: $(this)["attr"](_0x5cf035(0x225)),
              })),
            empReqTime["length"] === 0x0
              ? (timeFilled = !![])
              : (timeFilled = ![]);
        }),
      $(steps[x])
        ["find"](".active-answer-card")
        [_0x36843b(0x295)](_0x36843b(0x273))
        ["each"](function (_0x758266) {
          const _0x2c26fc = _0x36843b;
          (skipTo = undefined),
            $(this)
              [_0x2c26fc(0x254)](_0x2c26fc(0x2d5))
              [_0x2c26fc(0x32b)](_0x2c26fc(0x2c3)) !== "" &&
              (skipTo = $(this)
                [_0x2c26fc(0x254)](_0x2c26fc(0x2d5))
                ["data"](_0x2c26fc(0x2c3))),
            $(this)
              [_0x2c26fc(0x254)]("[data-go-to]")
              [_0x2c26fc(0x214)](_0x2c26fc(0x2d3)) &&
              ((answer = $(this)
                [_0x2c26fc(0x254)](_0x2c26fc(0x2dc))
                [_0x2c26fc(0x214)](_0x2c26fc(0x2d3))),
              (selections = selections[_0x2c26fc(0x29d)](
                (_0x17b103) => _0x17b103[_0x2c26fc(0x2d1)] !== x,
              )),
              selections[_0x2c26fc(0x2a0)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x2c26fc(0x2a0)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x2c26fc(0x289)](
                  (_0x22a0f2) => _0x22a0f2[_0x2c26fc(0x2d1)] === x,
                )),
                (selections[objIndex][_0x2c26fc(0x2d7)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x2c26fc(0x1fa)] = x)));
        }),
      $(steps[x])
        [_0x36843b(0x295)](_0x36843b(0x2e1))
        [_0x36843b(0x295)](":input[type=\x22number\x22][required]")
        [_0x36843b(0x28d)](function (_0x58637c) {
          const _0x303039 = _0x36843b;
          let _0x2eb311 = $(this)[_0x303039(0x1fb)]()["length"],
            _0x545f9c = $(this)[_0x303039(0x32b)]("min-character")
              ? $(this)["data"](_0x303039(0x1f6))
              : 0x0;
          $(this)[_0x303039(0x1fb)]() !== "" && _0x2eb311 >= _0x545f9c
            ? (empReqNum = empReqNum["filter"](
                (_0x1973f3) => _0x1973f3["input"] !== _0x58637c,
              ))
            : (!empReqNum[_0x303039(0x295)](
                (_0x43a35d) => _0x43a35d[_0x303039(0x1ed)] === _0x58637c,
              ) && empReqNum[_0x303039(0x2a0)]({ input: _0x58637c }),
              unfilledArr[_0x303039(0x2a0)]({
                input: $(this)["attr"](_0x303039(0x225)),
              })),
            empReqNum[_0x303039(0x2fe)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x36843b(0x295)](".active-answer-card")
        [_0x36843b(0x295)](_0x36843b(0x2c5))
        ["each"](function (_0x205811) {
          const _0x2f438a = _0x36843b;
          (skipTo = undefined),
            $(this)
              ["parents"](_0x2f438a(0x2d5))
              [_0x2f438a(0x32b)](_0x2f438a(0x2c3)) !== "" &&
              (skipTo = $(this)
                [_0x2f438a(0x254)](_0x2f438a(0x2d5))
                ["data"](_0x2f438a(0x2c3))),
            $(this)
              [_0x2f438a(0x254)](_0x2f438a(0x2dc))
              [_0x2f438a(0x214)](_0x2f438a(0x2d3)) &&
              ((answer = $(this)
                ["parents"](_0x2f438a(0x2dc))
                [_0x2f438a(0x214)](_0x2f438a(0x2d3))),
              (selections = selections[_0x2f438a(0x29d)](
                (_0x4c07bf) => _0x4c07bf[_0x2f438a(0x2d1)] !== x,
              )),
              selections[_0x2f438a(0x2a0)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x2f438a(0x2a0)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x2f438a(0x289)](
                  (_0x437a3c) => _0x437a3c[_0x2f438a(0x2d1)] === x,
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x2f438a(0x1fa)] = x)));
        }),
      $(steps[x])
        [_0x36843b(0x295)](_0x36843b(0x2e1))
        [_0x36843b(0x295)](_0x36843b(0x2b7))
        ["each"](function (_0x1c4009) {
          const _0x277794 = _0x36843b;
          if ($(this)[_0x277794(0x1fb)]() !== "") {
            let _0x4a9497 = $(this)[_0x277794(0x1fb)]()[_0x277794(0x2fe)],
              _0x275011 = $(this)["data"](_0x277794(0x1f6))
                ? $(this)[_0x277794(0x32b)]("min-character")
                : 0x0;
            if ($(this)["data"]("phone-autoformat")) {
              var _0x397825 = phoneAutoFormat(
                $(this)[_0x277794(0x32b)](_0x277794(0x1c8)),
              );
              $(this)[_0x277794(0x1fb)](_0x397825($(this)["val"]()));
            }
            phoneValidation($(this)[_0x277794(0x1fb)](), _0x4a9497, _0x275011)
              ? (empReqTel = empReqTel[_0x277794(0x29d)](
                  (_0x14ad40) => _0x14ad40["input"] !== _0x1c4009,
                ))
              : empReqTel["push"]({ input: _0x1c4009 });
          } else
            !empReqTel[_0x277794(0x295)](
              (_0x10d803) => _0x10d803["input"] === _0x1c4009,
            ) && empReqTel[_0x277794(0x2a0)]({ input: _0x1c4009 }),
              unfilledArr[_0x277794(0x2a0)]({
                input: $(this)[_0x277794(0x214)](_0x277794(0x225)),
              });
          empReqTel[_0x277794(0x2fe)] === 0x0
            ? (telFilled = !![])
            : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x36843b(0x295)](_0x36843b(0x2e1))
        [_0x36843b(0x295)](_0x36843b(0x333))
        [_0x36843b(0x28d)](function (_0x44b874) {
          const _0x1bf08f = _0x36843b;
          (skipTo = undefined),
            $(this)
              [_0x1bf08f(0x254)]("[data-skip-to]")
              [_0x1bf08f(0x32b)](_0x1bf08f(0x2c3)) !== "" &&
              (skipTo = $(this)
                [_0x1bf08f(0x254)](_0x1bf08f(0x2d5))
                [_0x1bf08f(0x32b)](_0x1bf08f(0x2c3))),
            $(this)["parents"](_0x1bf08f(0x2dc))["attr"]("data-go-to") &&
              ((answer = $(this)
                [_0x1bf08f(0x254)](_0x1bf08f(0x2dc))
                [_0x1bf08f(0x214)](_0x1bf08f(0x2d3))),
              (selections = selections[_0x1bf08f(0x29d)](
                (_0x1ebefb) => _0x1ebefb[_0x1bf08f(0x2d1)] !== x,
              )),
              selections[_0x1bf08f(0x2a0)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0x1bf08f(0x289)](
                  (_0x14cbd8) => _0x14cbd8[_0x1bf08f(0x2d1)] === x,
                )),
                (selections[objIndex][_0x1bf08f(0x2d7)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x1bf08f(0x1fa)] = x)));
        }),
      $(steps[x])
        [_0x36843b(0x295)](_0x36843b(0x2e1))
        [_0x36843b(0x295)](_0x36843b(0x253))
        [_0x36843b(0x28d)](function (_0x3577fe) {
          const _0x5e68f9 = _0x36843b;
          $(this)["val"]() !== ""
            ? (empReqFile = empReqFile["filter"](
                (_0x4e1654) => _0x4e1654["input"] !== _0x3577fe,
              ))
            : (!empReqFile[_0x5e68f9(0x295)](
                (_0x325a75) => _0x325a75[_0x5e68f9(0x1ed)] === _0x3577fe,
              ) && empReqFile["push"]({ input: _0x3577fe }),
              unfilledArr[_0x5e68f9(0x2a0)]({
                input: $(this)[_0x5e68f9(0x214)](_0x5e68f9(0x225)),
              })),
            empReqFile[_0x5e68f9(0x2fe)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x36843b(0x295)](_0x36843b(0x2e1))
        [_0x36843b(0x295)](_0x36843b(0x2bd))
        [_0x36843b(0x28d)](function (_0x560dcf) {
          const _0x3302d0 = _0x36843b;
          (skipTo = undefined),
            $(this)
              [_0x3302d0(0x254)](_0x3302d0(0x2d5))
              [_0x3302d0(0x32b)]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0x3302d0(0x254)](_0x3302d0(0x2d5))
                [_0x3302d0(0x32b)]("skip-to")),
            $(this)[_0x3302d0(0x254)](_0x3302d0(0x2dc))["attr"]("data-go-to") &&
              ((answer = $(this)
                [_0x3302d0(0x254)](_0x3302d0(0x2dc))
                [_0x3302d0(0x214)](_0x3302d0(0x2d3))),
              (selections = selections[_0x3302d0(0x29d)](
                (_0x19b2ab) => _0x19b2ab["step"] !== x,
              )),
              selections[_0x3302d0(0x2a0)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x3302d0(0x2a0)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x4fe437) => _0x4fe437["step"] === x,
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x3302d0(0x1fa)] = x)));
        }),
      $(steps[x])
        [_0x36843b(0x295)](_0x36843b(0x2e1))
        [_0x36843b(0x295)](_0x36843b(0x226))
        [_0x36843b(0x28d)](function (_0x410ca3) {
          const _0x17b9e6 = _0x36843b;
          console[_0x17b9e6(0x233)]($(this)["val"]()),
            $(this)[_0x17b9e6(0x1fb)]() !== null &&
            $(this)[_0x17b9e6(0x1fb)]() !== ""
              ? (empReqSelect = empReqSelect[_0x17b9e6(0x29d)](
                  (_0x2ab63d) => _0x2ab63d["input"] !== _0x410ca3,
                ))
              : (!empReqSelect[_0x17b9e6(0x295)](
                  (_0x134475) => _0x134475["input"] === _0x410ca3,
                ) && empReqSelect[_0x17b9e6(0x2a0)]({ input: _0x410ca3 }),
                unfilledArr[_0x17b9e6(0x2a0)]({
                  input: $(this)["attr"](_0x17b9e6(0x225)),
                })),
            empReqSelect["length"] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x36843b(0x295)](_0x36843b(0x2e1))
        ["find"](_0x36843b(0x1ef))
        ["each"](function (_0x4d5158) {
          const _0x49a4bc = _0x36843b;
          (skipTo = undefined),
            $(this)
              [_0x49a4bc(0x254)]("[data-skip-to]")
              ["data"](_0x49a4bc(0x2c3)) !== "" &&
              (skipTo = $(this)
                ["parents"]("[data-skip-to]")
                ["data"](_0x49a4bc(0x2c3))),
            $(this)
              [_0x49a4bc(0x254)](_0x49a4bc(0x2dc))
              [_0x49a4bc(0x214)]("data-go-to") &&
              ((answer = $(this)
                ["parents"](_0x49a4bc(0x2dc))
                [_0x49a4bc(0x214)]("data-go-to")),
              (selections = selections[_0x49a4bc(0x29d)](
                (_0x11cdd0) => _0x11cdd0[_0x49a4bc(0x2d1)] !== x,
              )),
              selections[_0x49a4bc(0x2a0)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x49a4bc(0x2a0)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x4b24e1) => _0x4b24e1["step"] === x,
                )),
                (selections[objIndex][_0x49a4bc(0x2d7)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x36843b(0x295)](_0x36843b(0x2e1))
        [_0x36843b(0x295)](_0x36843b(0x21c))
        ["each"](function (_0x12b501) {
          const _0x4e37ad = _0x36843b;
          let _0x5a6cfb = $(this)[_0x4e37ad(0x1fb)]()[_0x4e37ad(0x2fe)],
            _0xae8103 = $(this)["data"]("min-character")
              ? $(this)[_0x4e37ad(0x32b)](_0x4e37ad(0x1f6))
              : 0x0;
          $(this)[_0x4e37ad(0x1fb)]() !== "" && _0x5a6cfb >= _0xae8103
            ? (empReqTextarea = empReqTextarea[_0x4e37ad(0x29d)](
                (_0x1f335d) => _0x1f335d["input"] !== _0x12b501,
              ))
            : (!empReqTextarea[_0x4e37ad(0x295)](
                (_0x4e71b4) => _0x4e71b4[_0x4e37ad(0x1ed)] === _0x12b501,
              ) && empReqTextarea[_0x4e37ad(0x2a0)]({ input: _0x12b501 }),
              unfilledArr[_0x4e37ad(0x2a0)]({
                input: $(this)["attr"](_0x4e37ad(0x225)),
              })),
            empReqTextarea[_0x4e37ad(0x2fe)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x36843b(0x295)](_0x36843b(0x2e1))
        [_0x36843b(0x295)](_0x36843b(0x2af))
        [_0x36843b(0x28d)](function (_0x307f92) {
          const _0x15fc0b = _0x36843b;
          (skipTo = undefined),
            $(this)
              [_0x15fc0b(0x254)]("[data-skip-to]")
              [_0x15fc0b(0x32b)](_0x15fc0b(0x2c3)) !== "" &&
              (skipTo = $(this)
                [_0x15fc0b(0x254)](_0x15fc0b(0x2d5))
                [_0x15fc0b(0x32b)](_0x15fc0b(0x2c3))),
            $(this)
              [_0x15fc0b(0x254)]("[data-go-to]")
              ["attr"](_0x15fc0b(0x2d3)) &&
              ((answer = $(this)
                ["parents"](_0x15fc0b(0x2dc))
                ["attr"]("data-go-to")),
              (selections = selections[_0x15fc0b(0x29d)](
                (_0x52720c) => _0x52720c[_0x15fc0b(0x2d1)] !== x,
              )),
              selections[_0x15fc0b(0x2a0)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x15fc0b(0x2a0)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x15fc0b(0x289)](
                  (_0x1cddea) => _0x1cddea[_0x15fc0b(0x2d1)] === x,
                )),
                (selections[objIndex][_0x15fc0b(0x2d7)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x15fc0b(0x1fa)] = x)));
        }),
      $(steps[x])
        [_0x36843b(0x295)](".active-answer-card")
        [_0x36843b(0x295)](":input[type=\x22email\x22][required]")
        [_0x36843b(0x28d)](function (_0x5da283) {
          const _0x526102 = _0x36843b;
          $(this)[_0x526102(0x1fb)]() !== ""
            ? validateEmail(
                $(this)[_0x526102(0x1fb)](),
                $(this)[_0x526102(0x32b)](_0x526102(0x24f)),
                $(this)[_0x526102(0x214)](_0x526102(0x225)),
              )
            : ((emailFilled = ![]),
              unfilledArr[_0x526102(0x2a0)]({
                input: $(this)["attr"](_0x526102(0x225)),
              }));
        }),
      $(steps[x])
        ["find"](".active-answer-card")
        [_0x36843b(0x295)](_0x36843b(0x2b2))
        [_0x36843b(0x28d)](function (_0x31cb3f) {
          const _0x24bca1 = _0x36843b;
          (skipTo = undefined),
            $(this)
              [_0x24bca1(0x254)](_0x24bca1(0x2d5))
              [_0x24bca1(0x32b)](_0x24bca1(0x2c3)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0x24bca1(0x2d5))
                [_0x24bca1(0x32b)](_0x24bca1(0x2c3))),
            $(this)
              [_0x24bca1(0x254)](_0x24bca1(0x2dc))
              [_0x24bca1(0x214)](_0x24bca1(0x2d3)) &&
              ((answer = $(this)
                [_0x24bca1(0x254)](_0x24bca1(0x2dc))
                [_0x24bca1(0x214)](_0x24bca1(0x2d3))),
              (selections = selections[_0x24bca1(0x29d)](
                (_0x3fc6df) => _0x3fc6df[_0x24bca1(0x2d1)] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x24bca1(0x2a0)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x24bca1(0x289)](
                  (_0x39a431) => _0x39a431[_0x24bca1(0x2d1)] === x,
                )),
                (selections[objIndex][_0x24bca1(0x2d7)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x24bca1(0x1fa)] = x)));
        }),
      trackLastStep && saveLastAnswer(selections);
  }
  $(steps[x])[_0x36843b(0x295)](_0x36843b(0x261))["is"](_0x36843b(0x328)) &&
    ((selArr = []),
    $(steps)
      [_0x36843b(0x295)]("[data-selected]:checked")
      [_0x36843b(0x28d)](function (_0x10b851, _0x3665a0) {
        const _0x22b07b = _0x36843b;
        selArr[_0x22b07b(0x2a0)]({
          selected: $(this)[_0x22b07b(0x32b)]("selected"),
        });
      }),
    (selString = []),
    selArr[_0x36843b(0x2b3)]((_0x47855b) =>
      selString[_0x36843b(0x2a0)](_0x47855b[_0x36843b(0x32d)]),
    ),
    $(steps[x])
      [_0x36843b(0x295)](".active-answer-card")
      [_0x36843b(0x295)](_0x36843b(0x271))
      ["each"](function () {
        const _0x537668 = _0x36843b;
        skipTo = undefined;
        if (
          $(this)
            [_0x537668(0x254)](_0x537668(0x2d5))
            [_0x537668(0x32b)](_0x537668(0x2c3))
        )
          skipTo = $(this)
            ["parents"](_0x537668(0x2d5))
            [_0x537668(0x32b)](_0x537668(0x2c3));
        else
          $(this)[_0x537668(0x32b)]("skip-to") &&
            (skipTo = $(this)["data"](_0x537668(0x2c3)));
        selections = selections[_0x537668(0x29d)](
          (_0x25bf7e) => _0x25bf7e[_0x537668(0x2d1)] !== x,
        );
        if ($(this)[_0x537668(0x32b)](_0x537668(0x276)))
          (answer = $(this)[_0x537668(0x214)](_0x537668(0x2d3))),
            console[_0x537668(0x233)](answer, selections),
            selections[_0x537668(0x2a0)]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0x537668(0x2a0)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections["findIndex"](
                (_0x3631b0) => _0x3631b0[_0x537668(0x2d1)] === x,
              )),
              (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
              (selections[objIndex]["backTo"] = x));
        else
          $(this)
            [_0x537668(0x254)]("[data-go-to]")
            [_0x537668(0x32b)]("go-to") &&
            ((answer = $(this)
              [_0x537668(0x254)](_0x537668(0x2dc))
              [_0x537668(0x32b)](_0x537668(0x276))),
            selections["push"]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0x537668(0x2a0)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0x537668(0x289)](
                (_0x3dc682) => _0x3dc682[_0x537668(0x2d1)] === x,
              )),
              (selections[objIndex][_0x537668(0x2d7)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x537668(0x1fa)] = x)));
      }),
    logicExtra
      ? ($(steps[x])
          [_0x36843b(0x295)](_0x36843b(0x2e1))
          [_0x36843b(0x295)](_0x36843b(0x26b))
          [_0x36843b(0x32b)](_0x36843b(0x1cf)) === !![] ||
          $(steps[x])
            [_0x36843b(0x295)](_0x36843b(0x201))
            [_0x36843b(0x32b)](_0x36843b(0x1cf)) === !![]) &&
        skip &&
        selections["filter"]((_0x6d4be4) => _0x6d4be4[_0x36843b(0x2d1)] === x)[
          _0x36843b(0x2fe)
        ] > 0x0 &&
        textareaLength === 0x0 &&
        textInputLength === 0x0 &&
        emailInputLength === 0x0 &&
        checkboxInputLength === 0x0 &&
        setTimeout(
          function () {
            (next = !![]), nextStep(), selectionQuiz();
          },
          $(steps[x])
            [_0x36843b(0x295)](_0x36843b(0x1ca))
            ["data"](_0x36843b(0x26f)),
        )
      : $(steps[x])
          [_0x36843b(0x295)](_0x36843b(0x26b))
          [_0x36843b(0x32b)](_0x36843b(0x1cf)) === !![] &&
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
            [_0x36843b(0x295)]("[data-radio-delay]")
            [_0x36843b(0x32b)](_0x36843b(0x26f)),
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
  const _0x4f355e = _0xd17637;
  $("[data-text=\x22error-message\x22]")[_0x4f355e(0x203)](),
    unfilledArr["length"] > 0x0 &&
      unfilledArr[_0x4f355e(0x2b3)](function (_0x5869e5) {
        const _0x124244 = _0x4f355e;
        $(_0x124244(0x223) + _0x5869e5[_0x124244(0x1ed)] + "\x22]")
          [_0x124244(0x23c)]("[data-text=\x22error-message\x22]")
          [_0x124244(0x2d8)](),
          $(_0x124244(0x223) + _0x5869e5[_0x124244(0x1ed)] + "\x22]")
            [_0x124244(0x254)]()
            ["children"]("[data-text=\x22error-message\x22]")
            [_0x124244(0x2d8)](),
          $(_0x124244(0x292) + _0x5869e5[_0x124244(0x1ed)] + "\x22]")
            [_0x124244(0x23c)](_0x124244(0x319))
            ["fadeIn"](),
          $("select[name=\x22" + _0x5869e5[_0x124244(0x1ed)] + "\x22]")
            ["siblings"](_0x124244(0x319))
            ["fadeIn"]();
      });
}
function resetInputErrorMessage(_0x4375b9) {
  const _0x4c7a5d = _0xd17637;
  $(_0x4c7a5d(0x223) + _0x4375b9 + "\x22]")
    ["siblings"](_0x4c7a5d(0x319))
    [_0x4c7a5d(0x203)](),
    $(_0x4c7a5d(0x223) + _0x4375b9 + "\x22]")
      ["parents"]()
      [_0x4c7a5d(0x31b)](_0x4c7a5d(0x319))
      [_0x4c7a5d(0x203)](),
    $(_0x4c7a5d(0x292) + _0x4375b9 + "\x22]")
      [_0x4c7a5d(0x23c)](_0x4c7a5d(0x319))
      [_0x4c7a5d(0x203)](),
    $("select[name=\x22" + _0x4375b9 + "\x22]")
      [_0x4c7a5d(0x23c)](_0x4c7a5d(0x319))
      [_0x4c7a5d(0x203)]();
}
function increaseCurstep() {
  const _0x111cc3 = _0xd17637;
  countCard
    ? ((curStep = curStep + 0x1), $(_0x111cc3(0x248))["text"](steps["length"]))
    : $(steps[x])[_0x111cc3(0x32b)](_0x111cc3(0x227))
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    $(_0x111cc3(0x2bf))[_0x111cc3(0x2db)](curStep);
}
function decreaseCurstep() {
  const _0x51a16e = _0xd17637;
  countCard
    ? ((curStep = curStep - 0x1),
      $("[data-text=\x22total-steps\x22]")[_0x51a16e(0x2db)](steps["length"]))
    : $(steps[x])["data"](_0x51a16e(0x227))
      ? (curStep = curStep - 0x0)
      : (curStep = curStep - 0x1),
    $(_0x51a16e(0x2bf))["text"](curStep);
}
$(_0xd17637(0x30b))["on"]("click", function (_0x2bdf4a) {
  const _0x2a5287 = _0xd17637;
  console[_0x2a5287(0x233)](_0x2a5287(0x1e2)),
    $(this)[_0x2a5287(0x32b)](_0x2a5287(0x2b0)) &&
      (redirectTo = $(this)["data"](_0x2a5287(0x2b0))),
    !$(this)[_0x2a5287(0x32b)](_0x2a5287(0x29a)) &&
      (newTab = $(this)[_0x2a5287(0x32b)](_0x2a5287(0x29a))),
    (successCard = $(this)["data"]("success")),
    _0x2bdf4a[_0x2a5287(0x213)](),
    _0x2bdf4a[_0x2a5287(0x21f)](),
    logicExtra &&
      ($(this)[_0x2a5287(0x317)]("novalidate", !![]),
      $(steps)
        [_0x2a5287(0x295)](_0x2a5287(0x22f))
        [_0x2a5287(0x317)]("required", ![])),
    localStorage[_0x2a5287(0x1da)](_0x2a5287(0x31d)),
    fill
      ? ($(this)[_0x2a5287(0x32b)]("wait")
          ? (console[_0x2a5287(0x233)]($(this)[_0x2a5287(0x32b)]("wait")),
            $(this)["text"]($(this)["data"](_0x2a5287(0x1e3))))
          : $(this)
              ["val"](_0x2a5287(0x2ae))
              [_0x2a5287(0x2db)]("Please\x20wait..."),
        $(_0x2a5287(0x2df))[_0x2a5287(0x2a7)](),
        $(_0x2a5287(0x22e))[_0x2a5287(0x2fe)] > 0x0 &&
          grecaptcha["getResponse"]()[_0x2a5287(0x2fe)] === 0x0 &&
          (form["find"](_0x2a5287(0x30b))[_0x2a5287(0x2db)](oldSubmitText),
          form[_0x2a5287(0x295)](_0x2a5287(0x30b))["val"](oldSubmitText)),
        customError && $(_0x2a5287(0x319))["hide"]())
      : customError && displayErrorMessage();
});
function nextStep() {
  const _0x5cd83a = _0xd17637;
  customError
    ? ($("[data-text=\x22error-message\x22]")[_0x5cd83a(0x203)](),
      fill
        ? (x++,
          increaseCurstep(),
          (progress = x),
          x <= steps[_0x5cd83a(0x2fe)] - 0x1 &&
            (updateStep(), memory && saveFilledInput()))
        : displayErrorMessage())
    : (x++,
      increaseCurstep(),
      x > progress && (progress = x),
      x <= steps[_0x5cd83a(0x2fe)] - 0x1 &&
        (updateStep(), memory && saveFilledInput())),
    andLogic();
}
function backStep() {
  const _0x1416a8 = _0xd17637;
  customError && $(_0x1416a8(0x319))[_0x1416a8(0x203)](),
    decreaseCurstep(),
    x > 0x0 &&
      ($(progressbar[x])[_0x1416a8(0x20c)](_0x1416a8(0x28c)),
      selections[_0x1416a8(0x29d)]((_0x2f1cf8) => _0x2f1cf8["skipTo"] === x)[
        _0x1416a8(0x2fe)
      ] > 0x0
        ? (x = parseInt(
            getSafe(
              () =>
                selections[_0x1416a8(0x29d)](
                  (_0x1b7401) => _0x1b7401["skipTo"] === x,
                )[0x0][_0x1416a8(0x1fa)],
            ),
          ))
        : x--,
      updateStep()),
    ($(steps[x])
      ["find"]("[data-radio-skip]:visible")
      [_0x1416a8(0x32b)](_0x1416a8(0x1cf)) === !![] ||
      $(steps[x])
        [_0x1416a8(0x295)](_0x1416a8(0x2e1))
        [_0x1416a8(0x295)](_0x1416a8(0x26b))
        [_0x1416a8(0x32b)](_0x1416a8(0x1cf)) === !![] ||
      $(steps[x])
        [_0x1416a8(0x295)](_0x1416a8(0x201))
        [_0x1416a8(0x32b)](_0x1416a8(0x1cf)) === !![]) &&
      ((all_data = all_data[_0x1416a8(0x29d)](
        (_0x260db2) =>
          _0x260db2[_0x1416a8(0x235)] !==
          $(steps[x])
            [_0x1416a8(0x295)]("input[type=\x22radio\x22]:checked")
            [_0x1416a8(0x214)](_0x1416a8(0x225)),
      )),
      $(
        "[data-input-field=\x22" +
          $(steps[x])
            [_0x1416a8(0x295)](_0x1416a8(0x1de))
            [_0x1416a8(0x214)](_0x1416a8(0x225)) +
          "\x22]",
      )[_0x1416a8(0x203)](),
      $(steps[x])
        [_0x1416a8(0x295)](_0x1416a8(0x1d1))
        [_0x1416a8(0x317)]("checked", ![]),
      $(steps[x])
        [_0x1416a8(0x295)](_0x1416a8(0x244))
        [_0x1416a8(0x20c)]("w--redirected-checked"),
      validation());
}
weightedSelectionRange &&
  $(_0xd17637(0x2f2))[_0xd17637(0x28d)](function () {
    const _0x2cd62d = _0xd17637;
    $(this)["append"](
      _0x2cd62d(0x322) +
        $(this)[_0x2cd62d(0x32b)]("selection") +
        _0x2cd62d(0x263),
    );
  });
function selectionQuiz() {
  const _0xcd107b = _0xd17637;
  if ($(this)[_0xcd107b(0x295)](_0xcd107b(0x315))) {
    $("[data-selection]")[_0xcd107b(0x203)](), $(_0xcd107b(0x29b))["hide"]();
    if (weightedSelection) {
      (selTotal = 0x0),
        selArr[_0xcd107b(0x2b3)](function (_0x413559) {
          const _0x20458d = _0xcd107b;
          selTotal = selTotal + _0x413559[_0x20458d(0x32d)];
        }),
        $(_0xcd107b(0x245))[_0xcd107b(0x2db)](selTotal);
      if ($(_0xcd107b(0x221) + selTotal + "\x22]")[_0xcd107b(0x2fe)] > 0x0)
        $(_0xcd107b(0x221) + selTotal + "\x22]")[_0xcd107b(0x2d8)]();
      else
        $("[data-range]:contains(" + selTotal + ")")
          ? $(_0xcd107b(0x2cb) + selTotal + ")")
              [_0xcd107b(0x2c6)](_0xcd107b(0x2f2))
              ["eq"](0x0)
              [_0xcd107b(0x218)]()
          : $("[data-selection=\x22other\x22]")[_0xcd107b(0x2d8)]();
    } else {
      let _0x384dac = -0x1;
      $(_0xcd107b(0x2f2))[_0xcd107b(0x28d)](function (_0x2429a5) {
        const _0x4cfabe = _0xcd107b;
        $($(_0x4cfabe(0x2f2))[_0x2429a5])
          [_0x4cfabe(0x32b)](_0x4cfabe(0x2b1))
          [_0x4cfabe(0x2dd)](selString[_0x4cfabe(0x216)]()) &&
          (_0x384dac = _0x2429a5);
      }),
        _0x384dac > -0x1
          ? $($(_0xcd107b(0x2f2))[_0x384dac])["fadeIn"]()
          : $(_0xcd107b(0x215))[_0xcd107b(0x2d8)]();
    }
  }
}
function triggerInputAllData() {
  const _0xa432a3 = _0xd17637;
  if (savedFilledInput && memory)
    console[_0xa432a3(0x233)](savedFilledInput),
      savedFilledInput["forEach"]((_0x3338c2) => {
        const _0x13c43d = _0xa432a3;
        var _0xd82b69 = $(
            _0x13c43d(0x223) +
              _0x3338c2[_0x13c43d(0x1fc)] +
              _0x13c43d(0x24e) +
              _0x3338c2["value"] +
              _0x13c43d(0x1dd),
          ),
          _0x23547e = $(
            "input[name=\x22" +
              _0x3338c2[_0x13c43d(0x1fc)] +
              "\x22]:not([data-prefill=\x22false\x22])",
          ),
          _0x3cb29a = $(
            _0x13c43d(0x292) + _0x3338c2[_0x13c43d(0x1fc)] + _0x13c43d(0x1dd),
          );
        if (_0xd82b69[_0x13c43d(0x214)](_0x13c43d(0x1cc)) !== "file") {
          if (
            _0xd82b69[_0x13c43d(0x214)]("type") === _0x13c43d(0x22d) &&
            !_0xd82b69[_0x13c43d(0x254)]("[data-radio-skip]")[_0x13c43d(0x32b)](
              _0x13c43d(0x1cf),
            )
          )
            _0xd82b69[_0x13c43d(0x211)](),
              addClickClass(),
              _0xd82b69[_0x13c43d(0x23c)](_0x13c43d(0x307))["addClass"](
                _0x13c43d(0x299),
              ),
              _0xd82b69[_0x13c43d(0x2bc)](_0x13c43d(0x1ed));
          else
            _0x3338c2[_0x13c43d(0x250)] === "on"
              ? (_0x23547e[_0x13c43d(0x211)](),
                _0x23547e[_0x13c43d(0x23c)](_0x13c43d(0x2a1))[_0x13c43d(0x28b)](
                  _0x13c43d(0x299),
                ),
                _0x23547e[_0x13c43d(0x2bc)](_0x13c43d(0x1ed)))
              : (_0x23547e["val"](_0x3338c2[_0x13c43d(0x250)]),
                _0x3cb29a["val"](_0x3338c2["value"]),
                $(_0x13c43d(0x2f3))
                  ["find"](
                    _0x13c43d(0x284) + _0x3338c2[_0x13c43d(0x250)] + "\x22]",
                  )
                  ["prop"](_0x13c43d(0x32d), !![]),
                _0x23547e[_0x13c43d(0x2bc)]("input"),
                _0x23547e[_0x13c43d(0x2bc)]("change"));
        }
      });
  else
    _params &&
      (getParams(),
      searchQ[_0xa432a3(0x2b3)]((_0x1bb377) => {
        const _0x27ee16 = _0xa432a3;
        if (
          $(
            _0x27ee16(0x223) +
              _0x1bb377[_0x27ee16(0x1fc)] +
              "\x22][value=\x22" +
              _0x1bb377["value"] +
              _0x27ee16(0x1dd),
          )[_0x27ee16(0x214)](_0x27ee16(0x1cc)) !== "file"
        ) {
          if (
            $(
              _0x27ee16(0x223) +
                _0x1bb377[_0x27ee16(0x2b8)] +
                _0x27ee16(0x24e) +
                _0x1bb377["val"] +
                _0x27ee16(0x1dd),
            )[_0x27ee16(0x214)](_0x27ee16(0x1cc)) === _0x27ee16(0x22d)
          )
            $(
              _0x27ee16(0x223) +
                _0x1bb377[_0x27ee16(0x2b8)] +
                _0x27ee16(0x24e) +
                _0x1bb377[_0x27ee16(0x1fb)] +
                _0x27ee16(0x1dd),
            )[_0x27ee16(0x211)](),
              $(
                _0x27ee16(0x223) +
                  _0x1bb377[_0x27ee16(0x2b8)] +
                  "\x22][value=\x22" +
                  _0x1bb377[_0x27ee16(0x1fb)] +
                  _0x27ee16(0x1dd),
              )
                [_0x27ee16(0x23c)](_0x27ee16(0x307))
                [_0x27ee16(0x28b)]("w--redirected-checked"),
              $(
                "input[name=\x22" +
                  _0x1bb377[_0x27ee16(0x2b8)] +
                  "\x22][value=\x22" +
                  _0x1bb377[_0x27ee16(0x1fb)] +
                  _0x27ee16(0x1dd),
              )["trigger"](_0x27ee16(0x1ed));
          else
            _0x1bb377[_0x27ee16(0x1fb)] === "on"
              ? ($(
                  "input[name=\x22" +
                    _0x1bb377[_0x27ee16(0x2b8)] +
                    "\x22]:not([data-prefill=\x22false\x22])",
                )[_0x27ee16(0x211)](),
                $(
                  _0x27ee16(0x223) +
                    _0x1bb377[_0x27ee16(0x2b8)] +
                    _0x27ee16(0x1dd),
                )
                  [_0x27ee16(0x23c)](_0x27ee16(0x2a1))
                  [_0x27ee16(0x28b)](_0x27ee16(0x299)),
                $(_0x27ee16(0x223) + _0x1bb377[_0x27ee16(0x2b8)] + "\x22]")[
                  _0x27ee16(0x2bc)
                ](_0x27ee16(0x1ed)))
              : ($(
                  "input[name=\x22" +
                    _0x1bb377[_0x27ee16(0x2b8)] +
                    _0x27ee16(0x1dd),
                )[_0x27ee16(0x1fb)](_0x1bb377[_0x27ee16(0x1fb)]),
                $(
                  _0x27ee16(0x292) +
                    _0x1bb377["key"] +
                    "\x22]:not([data-prefill=\x22false\x22])",
                )[_0x27ee16(0x1fb)](_0x1bb377[_0x27ee16(0x1fb)]),
                $(
                  _0x27ee16(0x31f) +
                    _0x1bb377[_0x27ee16(0x2b8)] +
                    _0x27ee16(0x1dd),
                )
                  [_0x27ee16(0x295)](
                    _0x27ee16(0x284) + _0x1bb377[_0x27ee16(0x1fb)] + "\x22]",
                  )
                  ["prop"](_0x27ee16(0x32d), !![]),
                $(
                  _0x27ee16(0x223) +
                    _0x1bb377[_0x27ee16(0x2b8)] +
                    "\x22]:not([data-prefill=\x22false\x22])",
                )[_0x27ee16(0x2bc)](_0x27ee16(0x1ed)),
                $(
                  "input[name=\x22" +
                    _0x1bb377["key"] +
                    "\x22]:not([data-prefill=\x22false\x22])",
                )[_0x27ee16(0x2bc)](_0x27ee16(0x2ad)));
        }
      }));
}
$(_0xd17637(0x236))["on"]("click", function () {
  (next = !![]), nextStep(), selectionQuiz();
}),
  $(_0xd17637(0x2c4))["on"](_0xd17637(0x211), function () {
    (next = ![]), (back = !![]), backStep();
  }),
  $(steps)
    [_0xd17637(0x295)](":input")
    [_0xd17637(0x1e6)](_0xd17637(0x1d9))
    ["on"](_0xd17637(0x1ed), function (_0x218b0d) {
      validation(), andLogic(), addClickClass();
    }),
  $(steps)
    ["find"](_0xd17637(0x1d1))
    ["on"](_0xd17637(0x211), function () {
      (skip = !![]), validation(), addClickClass();
    });
$(_0xd17637(0x205))[_0xd17637(0x32b)](_0xd17637(0x316))
  ? $(_0xd17637(0x283))[_0xd17637(0x20c)](_0xd17637(0x2e9))
  : $(_0xd17637(0x283))[_0xd17637(0x28b)](_0xd17637(0x2e9));
function clickableIndicator() {
  const _0x1d9de8 = _0xd17637;
  $(_0x1d9de8(0x301))[_0x1d9de8(0x32b)](_0x1d9de8(0x29c)) &&
    ($(_0x1d9de8(0x264))[_0x1d9de8(0x20c)](_0x1d9de8(0x28c)),
    $(_0x1d9de8(0x301))["data"](_0x1d9de8(0x316))
      ? ((x = $(this)[_0x1d9de8(0x2d0)]()), updateStep())
      : $(this)[_0x1d9de8(0x2d0)]() <= progress &&
        ((x = $(this)[_0x1d9de8(0x2d0)]()), updateStep())),
    $(_0x1d9de8(0x2bf))[_0x1d9de8(0x2db)](x + 0x1);
}
$(_0xd17637(0x283))["on"]("click", clickableIndicator);
$(_0xd17637(0x2df))[_0xd17637(0x32b)](_0xd17637(0x217)) &&
  ($(_0xd17637(0x2dc))[_0xd17637(0x28d)](function () {
    const _0x2118e4 = _0xd17637;
    $(this)[_0x2118e4(0x30c)](
      "<br>Data\x20Go\x20To\x20=\x20",
      $(this)[_0x2118e4(0x32b)](_0x2118e4(0x276)),
    );
  }),
  $("[data-answer]")[_0xd17637(0x28d)](function () {
    const _0x34aea7 = _0xd17637;
    $(this)[_0x34aea7(0x30c)](
      "<br>Data\x20Answer\x20=\x20",
      $(this)[_0x34aea7(0x32b)](_0x34aea7(0x298)),
    );
  }));
function resetFormly() {
  const _0x177203 = _0xd17637;
  $(_0x177203(0x2df))["trigger"](_0x177203(0x2e6)),
    $(_0x177203(0x2df))
      ["parents"]()
      [_0x177203(0x295)](".w-form-done")
      [_0x177203(0x203)](),
    (x = 0x0),
    updateStep(),
    $("[data-form=\x22multistep\x22]")[_0x177203(0x218)](),
    $("[data-form=\x22submit-btn\x22]")["text"](oldSubmitText),
    $(_0x177203(0x30b))[_0x177203(0x1fb)](oldSubmitText),
    $(_0x177203(0x2bf))[_0x177203(0x2db)](0x1),
    $(_0x177203(0x2df))
      [_0x177203(0x295)]("input:checkbox")
      ["siblings"](_0x177203(0x2a1))
      [_0x177203(0x20c)]("w--redirected-checked");
}
$(document)[_0xd17637(0x293)](function (_0x36fa14, _0x12eadb, _0x3c5337) {
  const _0x4d091a = _0xd17637;
  if (_0x3c5337["url"][_0x4d091a(0x2dd)]("https://webflow.com/api/v1/form/")) {
    const _0x2b3074 = _0x12eadb["status"] === 0xc8,
      _0x65ca9b = "redirect-form-hehexd";
    redirectTo &&
      _0x2b3074 &&
      (newTab
        ? window[_0x4d091a(0x2a6)](redirectTo, _0x4d091a(0x1ea))
        : setTimeout(() => {
            location["href"] = redirectTo;
          }, redirectDelay)),
      _0x2b3074 &&
        successCard !== "" &&
        $("[data-success-card=\x22" + successCard + "\x22]")["fadeIn"](),
      _0x2b3074 &&
        formReset &&
        setTimeout(() => {
          resetFormly();
        }, resetDelay),
      !_0x2b3074 &&
        ($(_0x4d091a(0x30b))[_0x4d091a(0x1fb)](_0x4d091a(0x2ae)),
        $(_0x4d091a(0x30b))[_0x4d091a(0x2db)](_0x4d091a(0x2ae)));
  }
}),
  $(_0xd17637(0x2cf))["on"](_0xd17637(0x211), function () {
    const _0xb9abdf = _0xd17637;
    var _0x70d1ac = $(this)
      [_0xb9abdf(0x2c6)]()
      [_0xb9abdf(0x295)](_0xb9abdf(0x314))
      [_0xb9abdf(0x32b)](_0xb9abdf(0x285));
    setTimeout(function () {
      const _0x5a8242 = _0xb9abdf;
      $(_0x5a8242(0x223) + _0x70d1ac + "\x22]")[_0x5a8242(0x2b5)]();
    }, 0x64),
      (back = !![]),
      (x = $(this)["data"]("edit-step") - 0x1),
      updateStep(),
      countCard
        ? ((curStep = x + 0x1),
          $(_0xb9abdf(0x248))["text"](steps[_0xb9abdf(0x2fe)]))
        : $(steps[x])[_0xb9abdf(0x32b)](_0xb9abdf(0x227))
          ? (curStep = x + 0x0)
          : (curStep = x + 0x1),
      $("[data-text=\x22current-step\x22]")[_0xb9abdf(0x2db)](curStep),
      (back = ![]);
  }),
  $(_0xd17637(0x331))["on"](_0xd17637(0x211), function () {
    const _0xd89717 = _0xd17637;
    $(_0xd89717(0x2df))[_0xd89717(0x2bc)](_0xd89717(0x2e6));
    let _0x5b0787 = $(this);
    $(this)[_0xd89717(0x2db)](_0xd89717(0x2ae)),
      setTimeout(function () {
        const _0x4087e9 = _0xd89717;
        $(_0x5b0787)["text"](oldResetText),
          $(_0x5b0787)[_0x4087e9(0x254)](".w-form-done")["hide"](),
          (x = 0x0),
          updateStep(),
          $(_0x4087e9(0x2df))[_0x4087e9(0x218)](),
          $(_0x4087e9(0x30b))[_0x4087e9(0x2db)](oldSubmitText),
          $(_0x4087e9(0x30b))["val"](oldSubmitText),
          $(_0x5b0787)[_0x4087e9(0x1fb)](oldSubmitText),
          $(_0x4087e9(0x2bf))[_0x4087e9(0x2db)](0x1),
          $(_0x4087e9(0x2df))
            ["find"](_0x4087e9(0x2ee))
            ["siblings"](_0x4087e9(0x2a1))
            [_0x4087e9(0x20c)](_0x4087e9(0x299));
      }, resetDelay);
  }),
  $(_0xd17637(0x27a))["on"](_0xd17637(0x2eb), function (_0x4333d1) {
    const _0x3f0e84 = _0xd17637;
    if (_0x4333d1["keyCode"] === 0xd) {
      _0x4333d1[_0x3f0e84(0x213)](), _0x4333d1[_0x3f0e84(0x21f)]();
      if ($(steps[x])[_0x3f0e84(0x295)]("textarea")["is"](":focus"))
        $(steps[x])
          [_0x3f0e84(0x295)](_0x3f0e84(0x1c9))
          ["val"](
            $(steps[x])[_0x3f0e84(0x295)]("textarea:focus")["val"]() + "\x0a",
          );
      else
        $(_0x3f0e84(0x28e))[_0x3f0e84(0x32b)](_0x3f0e84(0x288)) &&
          fill &&
          totalSteps > curStep &&
          $(_0x3f0e84(0x236))[0x0]["click"]();
    }
  }),
  $(_0xd17637(0x27a))[_0xd17637(0x259)](function (_0x42b7e7) {
    const _0x558bea = _0xd17637;
    (_0x42b7e7[_0x558bea(0x1e8)] || _0x42b7e7[_0x558bea(0x1e7)]) &&
      _0x42b7e7[_0x558bea(0x200)] == 0xd &&
      (x >= steps[_0x558bea(0x2fe)] - 0x1 && fill
        ? $(steps[x])[_0x558bea(0x295)](_0x558bea(0x2ff))[_0x558bea(0x211)]()
        : (_0x42b7e7[_0x558bea(0x213)](), _0x42b7e7["stopPropagation"]()));
  }),
  $(_0xd17637(0x2df))
    ["find"](":input")
    ["on"](_0xd17637(0x2ad), function () {
      const _0x132974 = _0xd17637;
      (all_data = all_data[_0x132974(0x29d)](
        (_0x2e441f) =>
          _0x2e441f[_0x132974(0x235)] !==
          $(this)[_0x132974(0x214)](_0x132974(0x225)),
      )),
        $(this)[_0x132974(0x214)](_0x132974(0x1cc)) === _0x132974(0x26d)
          ? $(this)["is"](_0x132974(0x328))
            ? all_data[_0x132974(0x2a0)]({
                field: $(this)[_0x132974(0x214)](_0x132974(0x225)),
                value: $(this)
                  [_0x132974(0x23c)](_0x132974(0x30a))
                  [_0x132974(0x2db)](),
              })
            : $(
                _0x132974(0x219) +
                  $(this)[_0x132974(0x214)](_0x132974(0x225)) +
                  "\x22]",
              )[_0x132974(0x203)]()
          : (all_data[_0x132974(0x2a0)]({
              field: $(this)[_0x132974(0x214)](_0x132974(0x225)),
              value: $(this)[_0x132974(0x1fb)](),
            }),
            $(this)[_0x132974(0x1fb)]() !== "" &&
              resetInputErrorMessage(
                $(this)[_0x132974(0x214)](_0x132974(0x225)),
              )),
        all_data["forEach"](function (_0x5b441e) {
          const _0x25bf48 = _0x132974;
          $("[data-input-field=\x22" + _0x5b441e[_0x25bf48(0x235)] + "\x22]")[
            _0x25bf48(0x218)
          ](),
            $("[data-input-field=\x22" + _0x5b441e[_0x25bf48(0x235)] + "\x22]")[
              "text"
            ](_0x5b441e[_0x25bf48(0x250)]);
        });
    }),
  $(_0xd17637(0x2df))
    [_0xd17637(0x295)]("textarea")
    ["on"](_0xd17637(0x2ad), function () {
      const _0x12bb9e = _0xd17637;
      $(this)["val"]() !== "" &&
        resetInputErrorMessage($(this)[_0x12bb9e(0x214)](_0x12bb9e(0x225))),
        (all_data = all_data["filter"](
          (_0xa7f293) =>
            _0xa7f293[_0x12bb9e(0x235)] !== $(this)["attr"](_0x12bb9e(0x225)),
        )),
        all_data[_0x12bb9e(0x2a0)]({
          field: $(this)[_0x12bb9e(0x214)]("name"),
          value: $(this)[_0x12bb9e(0x1fb)](),
        }),
        all_data[_0x12bb9e(0x2b3)](function (_0x36654c) {
          const _0x4b572e = _0x12bb9e;
          $("[data-input-field=\x22" + _0x36654c["field"] + "\x22]")["show"](),
            $(_0x4b572e(0x219) + _0x36654c["field"] + "\x22]")[
              _0x4b572e(0x2db)
            ](_0x36654c[_0x4b572e(0x250)]);
        });
    }),
  $(_0xd17637(0x2df))
    [_0xd17637(0x295)](_0xd17637(0x1ef))
    ["on"](_0xd17637(0x2ad), function () {
      const _0x316369 = _0xd17637;
      $(this)[_0x316369(0x1fb)]() !== "" &&
        resetInputErrorMessage($(this)[_0x316369(0x214)](_0x316369(0x225)));
      var _0x3c01eb = $(this)[_0x316369(0x32b)]("ms-field");
      (all_data = all_data[_0x316369(0x29d)](
        (_0x2c43d8) =>
          _0x2c43d8[_0x316369(0x235)] !==
          $(this)[_0x316369(0x214)](_0x316369(0x225)),
      )),
        all_data[_0x316369(0x2a0)]({
          field: $(this)["attr"]("name"),
          value: _0x3c01eb
            ? $(this)[_0x316369(0x295)](_0x316369(0x329))[_0x316369(0x2db)]()
            : $(this)["val"](),
        }),
        all_data[_0x316369(0x2b3)](function (_0x196a82) {
          const _0x1d8249 = _0x316369;
          $(_0x1d8249(0x219) + _0x196a82[_0x1d8249(0x235)] + "\x22]")[
            _0x1d8249(0x218)
          ](),
            $(_0x1d8249(0x219) + _0x196a82[_0x1d8249(0x235)] + "\x22]")[
              _0x1d8249(0x2db)
            ](_0x196a82[_0x1d8249(0x250)]);
        });
    }),
  updateStep(),
  triggerInputAllData(),
  $(_0xd17637(0x332))["each"](function () {
    const _0x5b2ddc = _0xd17637,
      _0x1ecb70 = $(this)[_0x5b2ddc(0x295)](_0x5b2ddc(0x2fc)),
      _0x71c552 = [];
    console["log"](_0x71c552),
      _0x1ecb70[_0x5b2ddc(0x28d)](function () {
        const _0x3d24bc = _0x5b2ddc;
        _0x71c552[_0x3d24bc(0x2a0)]($(this)["text"]()[_0x3d24bc(0x212)]());
      });
    const _0x1e8750 = $(this)[_0x5b2ddc(0x23c)](_0x5b2ddc(0x290));
    $[_0x5b2ddc(0x28d)](_0x71c552, function (_0x4c87d5, _0x2a4ff8) {
      const _0x388dca = _0x5b2ddc,
        _0x50f938 = $(_0x388dca(0x207))
          [_0x388dca(0x1fb)](_0x2a4ff8)
          [_0x388dca(0x2db)](_0x2a4ff8);
      _0x1e8750[_0x388dca(0x30c)](_0x50f938);
    });
  });
function cloneRemove() {
  const _0x28287b = _0xd17637;
  $(_0x28287b(0x1d8))["each"](function () {
    const _0x47c211 = _0x28287b;
    $(this)[_0x47c211(0x295)](_0x47c211(0x25f))[_0x47c211(0x2fe)] < 0x2
      ? $(this)[_0x47c211(0x295)](_0x47c211(0x1e4))["hide"]()
      : $(this)
          [_0x47c211(0x295)]("[data-form=\x22remove-clone\x22]")
          [_0x47c211(0x218)]();
  });
}
function cloneRemoveInput() {
  const _0x11d027 = _0xd17637;
  $(_0x11d027(0x1d6))[_0x11d027(0x28d)](function () {
    const _0x343307 = _0x11d027;
    $(this)["find"](_0x343307(0x2a4))[_0x343307(0x2fe)] < 0x2
      ? $(this)[_0x343307(0x295)](_0x343307(0x2c1))[_0x343307(0x203)]()
      : $(this)
          [_0x343307(0x295)]("[data-form=\x22remove-input-clone\x22]")
          [_0x343307(0x218)]();
  });
}
$(_0xd17637(0x1e4))["on"](_0xd17637(0x211), function () {
  const _0x3f8154 = _0xd17637,
    _0x491fc9 =
      $(this)[_0x3f8154(0x254)](_0x3f8154(0x25f))[_0x3f8154(0x2fe)] > 0x0
        ? $(this)[_0x3f8154(0x254)](_0x3f8154(0x25f))["index"]()
        : $(this)[_0x3f8154(0x254)](_0x3f8154(0x306))[_0x3f8154(0x2d0)](),
    _0x3bc352 =
      $(this)[_0x3f8154(0x254)](_0x3f8154(0x25f))[_0x3f8154(0x2fe)] > 0x0
        ? $(this)[_0x3f8154(0x254)](_0x3f8154(0x25f))[_0x3f8154(0x32b)]("clone")
        : $(this)
            [_0x3f8154(0x254)](_0x3f8154(0x306))
            [_0x3f8154(0x32b)](_0x3f8154(0x234));
  $(_0x3f8154(0x2b9) + _0x3bc352 + "\x22]")
    ["eq"](_0x491fc9)
    [_0x3f8154(0x296)](),
    $(_0x3f8154(0x2e7) + _0x3bc352 + "\x22]")
      ["eq"](_0x491fc9)
      ["remove"](),
    cloneRemove(),
    validation();
}),
  $(_0xd17637(0x2c1))["on"](_0xd17637(0x211), function () {
    const _0x364a9e = _0xd17637;
    let _0x3750c6 = $(this)["siblings"]()[_0x364a9e(0x214)](_0x364a9e(0x225));
    $(this)[_0x364a9e(0x2c6)](_0x364a9e(0x2a4))[_0x364a9e(0x296)](),
      $(_0x364a9e(0x219) + _0x3750c6 + "\x22]")
        [_0x364a9e(0x2c6)](_0x364a9e(0x2d2))
        [_0x364a9e(0x296)](),
      cloneRemove(),
      validation();
  }),
  $(_0xd17637(0x22a))["on"](_0xd17637(0x211), function () {
    const _0x49e5cf = _0xd17637;
    let _0x2a469d = $(this)[_0x49e5cf(0x32b)](_0x49e5cf(0x238));
    var _0x27037d = $("[data-clone=\x22" + _0x2a469d + "\x22]")
        ["eq"](0x0)
        [_0x49e5cf(0x258)](!![]),
      _0x393b23 = $(_0x49e5cf(0x2e7) + _0x2a469d + "\x22]")
        ["eq"](0x0)
        [_0x49e5cf(0x258)](!![]);
    let _0x3813eb = "";
    $(this)["find"]("[data-form=\x22remove-clone\x22]")[_0x49e5cf(0x218)](),
      cloneRemove(),
      _0x27037d[_0x49e5cf(0x295)](_0x49e5cf(0x2a4))
        [_0x49e5cf(0x295)]("input")
        [_0x49e5cf(0x1fb)](""),
      _0x27037d[_0x49e5cf(0x295)](_0x49e5cf(0x2a4))
        [_0x49e5cf(0x295)](_0x49e5cf(0x1ef))
        [_0x49e5cf(0x1fb)](""),
      _0x27037d[_0x49e5cf(0x295)](_0x49e5cf(0x2a4))
        [_0x49e5cf(0x295)]("textarea")
        [_0x49e5cf(0x1fb)](""),
      _0x27037d[_0x49e5cf(0x295)](_0x49e5cf(0x2a4))
        [_0x49e5cf(0x1e6)](":first")
        [_0x49e5cf(0x296)](),
      _0x393b23[_0x49e5cf(0x295)](_0x49e5cf(0x2d2))
        [_0x49e5cf(0x1e6)](_0x49e5cf(0x232))
        [_0x49e5cf(0x296)](),
      _0x27037d[_0x49e5cf(0x295)](_0x49e5cf(0x1ed))[_0x49e5cf(0x28d)](
        function () {
          const _0x3b9ed0 = _0x49e5cf;
          if (
            $(this)[_0x3b9ed0(0x1cd)]("[data-clone-input]")[_0x3b9ed0(0x2fe)] >
            0x0
          ) {
            let _0x21af2a = 0x0;
            const _0x15a5f1 = $(this)
              [_0x3b9ed0(0x1cd)](_0x3b9ed0(0x2a4))
              ["data"](_0x3b9ed0(0x246));
            console["log"](
              $(this)
                ["closest"](_0x3b9ed0(0x2a4))
                [_0x3b9ed0(0x32b)]("clone-input"),
              this["name"],
            ),
              $(_0x3b9ed0(0x23f) + _0x15a5f1 + _0x3b9ed0(0x237))[
                _0x3b9ed0(0x28d)
              ](function () {
                const _0xa8347b = _0x3b9ed0,
                  _0x2994cd = $(this)[_0xa8347b(0x214)]("name");
                if (
                  _0x2994cd &&
                  _0x2994cd[_0xa8347b(0x325)](_0xa8347b(0x1f5))
                ) {
                  const _0x2d57dd = parseInt(
                    _0x2994cd[_0xa8347b(0x270)]("-")[0x1],
                  );
                  !isNaN(_0x2d57dd) &&
                    _0x2d57dd > _0x21af2a &&
                    (_0x21af2a = _0x2d57dd);
                }
              }),
              _0x21af2a++,
              (_0x3813eb = this[_0x3b9ed0(0x225)] + "-" + _0x21af2a),
              console[_0x3b9ed0(0x233)](_0x15a5f1, _0x3813eb);
          } else
            _0x3813eb =
              this[_0x3b9ed0(0x225)] +
              "-" +
              (parseInt(
                $(_0x3b9ed0(0x2b9) + _0x2a469d + "\x22]")
                  ["last"]()
                  ["index"](),
              ) +
                0x1);
          $(this)[_0x3b9ed0(0x1fb)](""),
            $(this)[_0x3b9ed0(0x214)](_0x3b9ed0(0x225), _0x3813eb),
            $(this)[_0x3b9ed0(0x214)]("data-name", _0x3813eb);
        },
      ),
      _0x27037d[_0x49e5cf(0x295)](_0x49e5cf(0x2af))[_0x49e5cf(0x28d)](
        function () {
          const _0x4994c8 = _0x49e5cf;
          if ($(this)[_0x4994c8(0x1cd)](_0x4994c8(0x2a4))["length"] > 0x0) {
            let _0x5465c2 = 0x0;
            const _0x4784a4 = $(this)
              [_0x4994c8(0x1cd)]("[data-clone-input]")
              [_0x4994c8(0x32b)](_0x4994c8(0x246));
            console[_0x4994c8(0x233)](
              $(this)
                ["closest"](_0x4994c8(0x2a4))
                [_0x4994c8(0x32b)](_0x4994c8(0x246)),
              this["name"],
            ),
              $("[data-clone-input=\x22" + _0x4784a4 + _0x4994c8(0x31a))[
                _0x4994c8(0x28d)
              ](function () {
                const _0x5f4daa = _0x4994c8,
                  _0x466ee9 = $(this)[_0x5f4daa(0x214)](_0x5f4daa(0x225));
                if (
                  _0x466ee9 &&
                  _0x466ee9[_0x5f4daa(0x325)](_0x5f4daa(0x1f5))
                ) {
                  const _0x1f0013 = parseInt(
                    _0x466ee9[_0x5f4daa(0x270)]("-")[0x1],
                  );
                  !isNaN(_0x1f0013) &&
                    _0x1f0013 > _0x5465c2 &&
                    (_0x5465c2 = _0x1f0013);
                }
              }),
              _0x5465c2++,
              (_0x3813eb = this[_0x4994c8(0x225)] + "-" + _0x5465c2),
              console[_0x4994c8(0x233)](_0x4784a4, _0x3813eb);
          } else
            _0x3813eb =
              this["name"] +
              "-" +
              (parseInt(
                $(_0x4994c8(0x2b9) + _0x2a469d + "\x22]")
                  [_0x4994c8(0x291)]()
                  [_0x4994c8(0x2d0)](),
              ) +
                0x1);
          $(this)[_0x4994c8(0x1fb)](""),
            $(this)["attr"](_0x4994c8(0x225), _0x3813eb),
            $(this)[_0x4994c8(0x214)](_0x4994c8(0x202), _0x3813eb);
        },
      ),
      _0x27037d[_0x49e5cf(0x295)](_0x49e5cf(0x1ef))[_0x49e5cf(0x28d)](
        function () {
          const _0x7eb3bc = _0x49e5cf;
          if ($(this)["closest"]("[data-clone-input]")["length"] > 0x0) {
            let _0x546031 = 0x0;
            const _0x42bdbe = $(this)
              [_0x7eb3bc(0x1cd)](_0x7eb3bc(0x2a4))
              [_0x7eb3bc(0x32b)](_0x7eb3bc(0x246));
            console[_0x7eb3bc(0x233)](
              $(this)
                [_0x7eb3bc(0x1cd)](_0x7eb3bc(0x2a4))
                [_0x7eb3bc(0x32b)](_0x7eb3bc(0x246)),
              this[_0x7eb3bc(0x225)],
            ),
              $(_0x7eb3bc(0x23f) + _0x42bdbe + _0x7eb3bc(0x2f5))["each"](
                function () {
                  const _0x3d8f66 = _0x7eb3bc,
                    _0x596bc = $(this)[_0x3d8f66(0x214)](_0x3d8f66(0x225));
                  if (
                    _0x596bc &&
                    _0x596bc[_0x3d8f66(0x325)](_0x3d8f66(0x1f5))
                  ) {
                    const _0x858c1b = parseInt(
                      _0x596bc[_0x3d8f66(0x270)]("-")[0x1],
                    );
                    !isNaN(_0x858c1b) &&
                      _0x858c1b > _0x546031 &&
                      (_0x546031 = _0x858c1b);
                  }
                },
              ),
              _0x546031++,
              (_0x3813eb = this[_0x7eb3bc(0x225)] + "-" + _0x546031),
              console[_0x7eb3bc(0x233)](_0x42bdbe, _0x3813eb);
          } else
            _0x3813eb =
              this[_0x7eb3bc(0x225)] +
              "-" +
              (parseInt(
                $(_0x7eb3bc(0x2b9) + _0x2a469d + "\x22]")
                  [_0x7eb3bc(0x291)]()
                  [_0x7eb3bc(0x2d0)](),
              ) +
                0x1);
          $(this)["val"](""),
            $(this)["attr"](_0x7eb3bc(0x225), _0x3813eb),
            $(this)[_0x7eb3bc(0x214)](_0x7eb3bc(0x202), _0x3813eb);
        },
      ),
      _0x393b23[_0x49e5cf(0x295)](_0x49e5cf(0x314))[_0x49e5cf(0x28d)](
        function () {
          const _0x10747e = _0x49e5cf;
          if ($(this)[_0x10747e(0x32b)](_0x10747e(0x285))) {
            let _0x223fdd = 0x0;
            const _0xc2910 = $(this)
              [_0x10747e(0x32b)](_0x10747e(0x285))
              [_0x10747e(0x270)]("-")[0x0];
            $(
              _0x10747e(0x2e7) +
                _0x2a469d +
                "\x22]\x20[data-input-field^=\x22" +
                _0xc2910 +
                "\x22]",
            )[_0x10747e(0x28d)](function () {
              const _0x495143 = _0x10747e,
                _0x49abef = $(this)[_0x495143(0x214)]("data-input-field"),
                _0x6b92cd = parseInt(_0x49abef[_0x495143(0x270)]("-")[0x1]);
              !isNaN(_0x6b92cd) &&
                _0x6b92cd > _0x223fdd &&
                (_0x223fdd = _0x6b92cd);
            }),
              _0x223fdd++;
            const _0x259102 = _0xc2910 + "-" + _0x223fdd;
            console[_0x10747e(0x233)](_0x259102),
              $(this)[_0x10747e(0x214)](_0x10747e(0x229), _0x259102);
          }
        },
      ),
      $(_0x49e5cf(0x2f4) + _0x2a469d + "\x22]")["append"](_0x27037d),
      $(_0x49e5cf(0x240) + _0x2a469d + "\x22]")[_0x49e5cf(0x30c)](_0x393b23),
      $(_0x49e5cf(0x286) + _0x2a469d + "\x22]")[_0x49e5cf(0x28d)](function () {
        const _0x4ec655 = _0x49e5cf;
        $(this)[_0x4ec655(0x2db)](
          $(this)
            ["parents"]("[data-clone=\x22" + _0x2a469d + "\x22]")
            [_0x4ec655(0x2d0)]() + 0x1,
        );
      }),
      $("[data-display-index=\x22" + _0x2a469d + "\x22]")[_0x49e5cf(0x28d)](
        function () {
          const _0x1dbce9 = _0x49e5cf;
          $(this)[_0x1dbce9(0x2db)](
            $(this)
              [_0x1dbce9(0x254)](_0x1dbce9(0x2e7) + _0x2a469d + "\x22]")
              ["index"]() + 0x1,
          );
        },
      ),
      validation();
  }),
  $(_0xd17637(0x1f7))["on"](_0xd17637(0x211), function () {
    const _0x3e1b6d = _0xd17637,
      _0x36d639 = $(this)
        [_0x3e1b6d(0x254)](_0x3e1b6d(0x25f))
        [_0x3e1b6d(0x2d0)]();
    let _0x204b00 = $(this)[_0x3e1b6d(0x32b)]("add-new-input");
    var _0x32e30c = $(_0x3e1b6d(0x23f) + _0x204b00 + "\x22]")
        ["eq"](0x0)
        ["clone"](!![]),
      _0x315b75 = $("[data-display-input=\x22" + _0x204b00 + "\x22]")
        ["eq"](0x0)
        ["clone"](!![]);
    $(this)
      [_0x3e1b6d(0x295)]("[data-form=\x22remove-input-clone\x22]")
      [_0x3e1b6d(0x218)](),
      cloneRemoveInput();
    let _0x32f4e9 = 0x0;
    $("[data-clone-input=\x22" + _0x204b00 + _0x3e1b6d(0x237))[
      _0x3e1b6d(0x28d)
    ](function () {
      const _0x5dfaad = _0x3e1b6d,
        _0xedf702 = $(this)[_0x5dfaad(0x214)](_0x5dfaad(0x225));
      if (_0xedf702) {
        const _0x51c580 = parseInt(_0xedf702[_0x5dfaad(0x270)]("-")[0x1]);
        !isNaN(_0x51c580) && _0x51c580 > _0x32f4e9 && (_0x32f4e9 = _0x51c580);
      }
    }),
      $(_0x3e1b6d(0x23f) + _0x204b00 + _0x3e1b6d(0x2f5))[_0x3e1b6d(0x28d)](
        function () {
          const _0x34385a = _0x3e1b6d,
            _0x1c3079 = $(this)[_0x34385a(0x214)](_0x34385a(0x225));
          if (_0x1c3079) {
            const _0x4fa293 = parseInt(_0x1c3079[_0x34385a(0x270)]("-")[0x1]);
            !isNaN(_0x4fa293) &&
              _0x4fa293 > _0x32f4e9 &&
              (_0x32f4e9 = _0x4fa293);
          }
        },
      ),
      $(_0x3e1b6d(0x23f) + _0x204b00 + _0x3e1b6d(0x31a))[_0x3e1b6d(0x28d)](
        function () {
          const _0x52d3c4 = _0x3e1b6d,
            _0x4a44ce = $(this)[_0x52d3c4(0x214)](_0x52d3c4(0x225));
          if (_0x4a44ce) {
            const _0x1efc30 = parseInt(_0x4a44ce[_0x52d3c4(0x270)]("-")[0x1]);
            !isNaN(_0x1efc30) &&
              _0x1efc30 > _0x32f4e9 &&
              (_0x32f4e9 = _0x1efc30);
          }
        },
      ),
      _0x32f4e9++,
      _0x32e30c[_0x3e1b6d(0x295)](_0x3e1b6d(0x1ed))[_0x3e1b6d(0x28d)](
        function () {
          const _0x108890 = _0x3e1b6d,
            _0x5457b9 = $(this)[_0x108890(0x214)](_0x108890(0x225));
          let _0x48fefe = _0x5457b9 + "-" + _0x32f4e9;
          $(this)[_0x108890(0x1fb)](""),
            $(this)["attr"](_0x108890(0x225), _0x48fefe),
            $(this)[_0x108890(0x214)](_0x108890(0x202), _0x48fefe);
        },
      ),
      _0x32e30c[_0x3e1b6d(0x295)](_0x3e1b6d(0x1ef))[_0x3e1b6d(0x28d)](
        function () {
          const _0x16f5d2 = _0x3e1b6d,
            _0x4bf4b5 = $(this)[_0x16f5d2(0x214)]("name");
          let _0x168f8c = _0x4bf4b5 + "-" + _0x32f4e9;
          $(this)[_0x16f5d2(0x1fb)](""),
            $(this)[_0x16f5d2(0x214)](_0x16f5d2(0x225), _0x168f8c),
            $(this)[_0x16f5d2(0x214)](_0x16f5d2(0x202), _0x168f8c);
        },
      ),
      _0x32e30c[_0x3e1b6d(0x295)](_0x3e1b6d(0x2af))[_0x3e1b6d(0x28d)](
        function () {
          const _0x448a1d = _0x3e1b6d,
            _0x3b0d52 = $(this)[_0x448a1d(0x214)](_0x448a1d(0x225));
          let _0x4eb19d = _0x3b0d52 + "-" + _0x32f4e9;
          $(this)["val"](""),
            $(this)[_0x448a1d(0x214)](_0x448a1d(0x225), _0x4eb19d),
            $(this)[_0x448a1d(0x214)](_0x448a1d(0x202), _0x4eb19d);
        },
      ),
      _0x315b75[_0x3e1b6d(0x295)](_0x3e1b6d(0x314))[_0x3e1b6d(0x28d)](
        function () {
          const _0x1093db = _0x3e1b6d;
          $(this)[_0x1093db(0x214)](
            _0x1093db(0x229),
            _0x1093db(0x1f5) + _0x32f4e9,
          );
        },
      ),
      $(this)
        [_0x3e1b6d(0x23c)](_0x3e1b6d(0x1dc) + _0x204b00 + "\x22]")
        ["append"](_0x32e30c),
      $(_0x3e1b6d(0x306))
        ["eq"](_0x36d639)
        [_0x3e1b6d(0x295)](_0x3e1b6d(0x1f8) + _0x204b00 + "\x22]")
        ["append"](_0x315b75),
      $("[data-input-index=\x22" + _0x204b00 + "\x22]")["each"](function () {
        const _0x4b6d7d = _0x3e1b6d;
        $(this)[_0x4b6d7d(0x2db)](
          $(this)
            ["parents"](_0x4b6d7d(0x23f) + _0x204b00 + "\x22]")
            [_0x4b6d7d(0x2d0)]() + 0x1,
        );
      }),
      $(_0x3e1b6d(0x32a) + _0x204b00 + "\x22]")[_0x3e1b6d(0x28d)](function () {
        const _0x5322e3 = _0x3e1b6d;
        $(this)[_0x5322e3(0x2db)](
          $(this)
            [_0x5322e3(0x254)]("[data-display-input=\x22" + _0x204b00 + "\x22]")
            ["index"]() + 0x1,
        );
      }),
      validation();
  }),
  $("[data-remove-upload]")["on"](_0xd17637(0x211), function () {
    const _0x1423a4 = _0xd17637,
      _0x146d6f = $(this)["data"](_0x1423a4(0x2ca));
    $(_0x1423a4(0x223) + _0x146d6f + "\x22]")[_0x1423a4(0x1fb)](""),
      validation();
  });
function andLogic() {
  const _0x3bdf0d = _0xd17637;
  conditionalResult &&
    (steps["eq"](x)[_0x3bdf0d(0x295)]("[data-show-if]")[_0x3bdf0d(0x203)](),
    console[_0x3bdf0d(0x233)](_0x3bdf0d(0x287)),
    steps["eq"](x)
      ["find"](_0x3bdf0d(0x327))
      ["each"](function () {
        const _0x2512e2 = _0x3bdf0d;
        function _0x3a2945(_0x213fe9) {
          const _0x484861 = _0x2283,
            _0x1a507d = _0x213fe9[_0x484861(0x270)]("&"),
            _0x54e92c = [];
          return (
            _0x1a507d[_0x484861(0x2b3)]((_0x4c7658) => {
              const _0x4a2e88 = _0x484861,
                [_0x135b1f, _0x877fda] = _0x4c7658["split"]("=");
              _0x54e92c[_0x4a2e88(0x2a0)]({
                field: _0x135b1f,
                value: _0x877fda,
              });
            }),
            _0x54e92c
          );
        }
        const _0x167401 = $(this)["attr"](_0x2512e2(0x323));
        console[_0x2512e2(0x233)](_0x167401);
        const _0x20b3e4 = _0x3a2945(_0x167401);
        function _0x147786(_0x16f74d, _0x2ebfd3) {
          const _0x26005d = _0x2512e2;
          return _0x2ebfd3[_0x26005d(0x2ea)]((_0x1de430, _0x58ebb3) => {
            const _0x1d6ebe = _0x26005d;
            if (
              _0x16f74d[0x0] &&
              _0x1de430[_0x1d6ebe(0x235)] === _0x16f74d[0x0][_0x1d6ebe(0x235)]
            )
              return _0x16f74d[_0x1d6ebe(0x22c)](
                (_0x2d71e2, _0x359fb0) =>
                  _0x2ebfd3[_0x58ebb3 + _0x359fb0] &&
                  _0x2ebfd3[_0x58ebb3 + _0x359fb0][_0x1d6ebe(0x235)] ===
                    _0x2d71e2[_0x1d6ebe(0x235)] &&
                  _0x2ebfd3[_0x58ebb3 + _0x359fb0][_0x1d6ebe(0x250)] ===
                    _0x2d71e2[_0x1d6ebe(0x250)],
              );
            return ![];
          });
        }
        const _0x369cf3 = _0x147786(_0x20b3e4, all_data);
        _0x369cf3 ? $(this)[_0x2512e2(0x218)]() : $(this)[_0x2512e2(0x203)]();
      }));
}
$(_0xd17637(0x279))[_0xd17637(0x28b)](_0xd17637(0x203)),
  $("[data-progressive-input]")["on"](_0xd17637(0x1ed), function () {
    const _0x4549bb = _0xd17637,
      _0x532bc3 = $(this)[_0x4549bb(0x32b)](_0x4549bb(0x281)),
      _0x2bd51b = $(this)["val"](),
      _0x108083 = $("[data-progressive-target=\x22" + _0x532bc3 + "\x22]")[
        _0x4549bb(0x32b)
      ]("progressive-input-value");
    let _0xa4c5b1 = $(
        _0x4549bb(0x24d) +
          _0x532bc3 +
          "\x22][data-progressive-input-value=\x22" +
          _0x2bd51b +
          "\x22]",
      ),
      _0x563cf1 = $(_0x4549bb(0x24d) + _0x532bc3 + _0x4549bb(0x2e5));
    $("[data-progressive-target=\x22" + _0x532bc3 + "\x22]")[_0x4549bb(0x28b)](
      _0x4549bb(0x203),
    ),
      $("[data-progressive-target=\x22" + _0x532bc3 + "\x22]")[
        _0x4549bb(0x20c)
      ]("show");
    _0x2bd51b !== "" &&
      (_0x108083 === "*" && _0x2bd51b !== ""
        ? (_0x563cf1[_0x4549bb(0x20c)](_0x4549bb(0x203)),
          _0x563cf1[_0x4549bb(0x28b)]("show"))
        : (_0xa4c5b1[_0x4549bb(0x20c)]("hide"),
          _0xa4c5b1[_0x4549bb(0x28b)](_0x4549bb(0x218))));
    function _0x124880(_0x4ba3e7) {
      const _0x2ee4e1 = _0x4549bb;
      _0x4ba3e7 &&
        $("[data-progressive-input=\x22" + _0x4ba3e7 + "\x22]")[
          _0x2ee4e1(0x1fb)
        ]() !== "" &&
        $("[data-progressive-input=\x22" + _0x4ba3e7 + "\x22]")["trigger"](
          "input",
        );
    }
    let _0x43daf3 = $(_0x4549bb(0x24d) + _0x532bc3 + "\x22]")
      ["find"]("[data-progressive-input]")
      [_0x4549bb(0x32b)](_0x4549bb(0x281));
    _0x124880(_0x43daf3),
      $("[data-progressive-input]:not(:visible)")[_0x4549bb(0x28d)](
        function () {
          const _0x1fdc28 = _0x4549bb,
            _0x45fabb = $(this)[_0x1fdc28(0x32b)]("progressive-input");
          $(_0x1fdc28(0x24d) + _0x45fabb + "\x22]")[_0x1fdc28(0x20c)](
            _0x1fdc28(0x218),
          ),
            $(_0x1fdc28(0x24d) + _0x45fabb + "\x22]")["addClass"]("hide");
        },
      );
  });
function addClickClass() {
  const _0x425ec1 = _0xd17637,
    _0x1ef754 = $(this)[_0x425ec1(0x32b)](_0x425ec1(0x330)),
    _0x153480 = $(this)["attr"](_0x425ec1(0x1cc)),
    _0x17acdb = $(this)[_0x425ec1(0x214)](_0x425ec1(0x225));
  console[_0x425ec1(0x233)](
    "radio",
    $(this)["is"](_0x425ec1(0x328)),
    $(this)["attr"](_0x425ec1(0x225)),
  ),
    $(_0x425ec1(0x223) + _0x17acdb + "\x22]")
      [_0x425ec1(0x2c6)]()
      ["removeClass"](_0x1ef754),
    $(this)["is"](_0x425ec1(0x328)) &&
      $(this)["parent"]()[_0x425ec1(0x28b)](_0x1ef754);
}
$(_0xd17637(0x228))["on"]("change", addClickClass),
  scrollTop(),
  cloneRemove(),
  cloneRemoveInput();
const formlyUrlParams = new URLSearchParams(window[_0xd17637(0x256)]["search"]),
  formlySupportParam = formlyUrlParams[_0xd17637(0x32f)](_0xd17637(0x2a9)),
  showButton = formlySupportParam === _0xd17637(0x2ba),
  passIcon =
    "<span\x20class=\x22f-icon-embed-xxsmall\x20w-embed\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010s10-4.48\x2010-10S17.52\x202\x2012\x202m-2\x2015l-5-5l1.41-1.41L10\x2014.17l7.59-7.59L19\x208z\x22></path></svg></span>",
  failIcon = _0xd17637(0x2a3);
let isScriptLoaded = !![],
  scriptLocation = _0xd17637(0x204),
  isMultistepAttributePresent = !![],
  isMultistepOnFormElement = !![],
  areButtonsPresent = !![],
  isNextBtnOnSubmit = ![],
  isSubmitBtnOnSubmit = !![],
  isBackBtnOnSubmit = ![],
  formType = logicExtra ? _0xd17637(0x1e1) : _0xd17637(0x1d3),
  resultStatus = _0xd17637(0x2d4),
  scriptSrcAdded = "";
function isElementPresent(_0xbe221f, _0x2c1f92) {
  const _0x3e4bd4 = _0xd17637;
  return (
    document[_0x3e4bd4(0x231)](
      "[" + _0x2c1f92 + "=\x22" + _0xbe221f + "\x22]",
    ) !== null
  );
}
isMultistepAttributePresent = isElementPresent(_0xd17637(0x27f), "data-form");
const multistepForm = document["querySelector"](_0xd17637(0x318)),
  formStepLength = multistepForm[_0xd17637(0x30e)](_0xd17637(0x324))[
    _0xd17637(0x2fe)
  ];
isMultistepOnFormElement = multistepForm !== null;
const multistepContainer = document["querySelector"](_0xd17637(0x2df)),
  nextBtn = multistepContainer["querySelector"]("[data-form=\x22next-btn\x22]"),
  backBtn = multistepContainer[_0xd17637(0x231)](_0xd17637(0x2c4)),
  submitBtn = multistepContainer["querySelector"](_0xd17637(0x30b));
(areButtonsPresent =
  nextBtn !== null && backBtn !== null && submitBtn !== null),
  (isNextBtnOnSubmit =
    nextBtn && nextBtn[_0xd17637(0x294)]["toLowerCase"]() === _0xd17637(0x1ed)),
  (isSubmitBtnOnSubmit =
    submitBtn &&
    submitBtn[_0xd17637(0x294)][_0xd17637(0x1ce)]() === "input" &&
    submitBtn["type"][_0xd17637(0x1ce)]() === _0xd17637(0x2a7)),
  (isBackBtnOnSubmit =
    backBtn && backBtn[_0xd17637(0x294)][_0xd17637(0x1ce)]() === "input");
const checkPowerup = (_0x508abc) =>
    document[_0xd17637(0x231)](_0x508abc) !== null,
  progressBarAttr = checkPowerup(_0xd17637(0x1d2)),
  progressIndicatorAttr = checkPowerup(_0xd17637(0x264)),
  customProgressAttr = checkPowerup(_0xd17637(0x264)),
  cardDivAttr = checkPowerup(_0xd17637(0x27d)),
  currentStepAttr = checkPowerup(_0xd17637(0x2bf)),
  totalStepAttr = checkPowerup("[data-text=\x22total-steps\x22]"),
  enterAttr = checkPowerup(_0xd17637(0x265)),
  submitAttr = checkPowerup("[data-submit=\x22true\x22]"),
  radioSkipAttr = checkPowerup(_0xd17637(0x2ed)),
  customCheckboxAttr = checkPowerup(_0xd17637(0x2f0)),
  recapatchaAttr = checkPowerup("[data-callback=\x22recaptcha\x22]");
function _0x5a7a() {
  const _0x2d5c6b = [
    "wait",
    "[data-form=\x22remove-clone\x22]",
    "[data-form-ms=\x22submit-btn\x22]",
    "not",
    "ctrlKey",
    "metaKey",
    "[data-form=\x22step\x22]:not([data-card=\x22true\x22])",
    "_blank",
    "<strong\x20class=\x22f-text-white\x22>Radio\x20Inputs\x20",
    "<strong\x20class=\x22f-text-white\x22>Custom\x20Progress\x20Indicators\x20",
    "input",
    "button",
    "select",
    "\x0a\x20\x20.f-icon-embed-xxsmall-2\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#ff3232\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x20\x20.f-icon-embed-xxsmall\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#57ff4b\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20{\x0a\x20\x20\x20\x20height:\x20100%\x20!important;\x0a\x20\x20\x20\x20width:\x200;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20z-index:\x20999999999999\x20!important;\x0a\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20background-color:\x20#081019\x20!important;\x0a\x20\x20\x20\x20overflow-x:\x20hidden\x20!important;\x0a\x20\x20\x20\x20padding-top:\x2060px\x20!important;\x0a\x20\x20\x20\x20transition:\x200.5s\x20!important;\x0a\x20\x20\x20\x20font-size:\x2015px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73)\x20!important;\x0a\x20\x20\x20\x20font-family:system-ui\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-section-title-text,\x20.f-support-text,\x20.f-openbtn{\x0a\x20\x20\x20\x20font-size:\x2015px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73);\x0a\x20\x20\x20\x20font-family:system-ui\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20p,\x20.f-sidenav\x20strong\x20{\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20space-between\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x204px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73);\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20.f-closebtn\x20{\x0a\x20\x20\x20\x20position:\x20absolute\x20!important;\x0a\x20\x20\x20\x20top:\x2025px\x20!important;\x0a\x20\x20\x20\x20right:\x2025px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2036px\x20!important;\x0a\x20\x20\x20\x20margin-left:\x2050px\x20!important;\x0a\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20color:\x20#e7e7e7\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-core-setup\x20{\x0a\x20\x20\x20\x20padding:\x2012px\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x2011px\x20!important;\x0a\x20\x20\x20\x20border-radius:\x206px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20#f-main\x20{\x0a\x20\x20\x20\x20transition:\x20margin-left\x20.5s\x20!important;\x0a\x20\x20\x20\x20padding:\x2020px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-main-content\x20{\x0a\x20\x20\x20\x20transition:\x20margin-left\x20.5s\x20!important;\x0a\x20\x20\x20\x20padding:\x2020px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-form-step\x20{\x0a\x20\x20\x20\x20padding-left:\x2010px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-openbtn\x20{\x0a\x20\x20\x20\x20white-space:\x20nowrap\x20!important;\x0a\x20\x20\x20\x20cursor:\x20pointer\x20!important;\x0a\x20\x20\x20\x20box-shadow:\x200\x200\x200\x201px\x20rgba(0,\x200,\x200,\x20.1),\x200\x201px\x203px\x20rgba(0,\x200,\x200,\x20.1)\x20!important;\x0a\x20\x20\x20\x20visibility:\x20visible\x20!important;\x0a\x20\x20\x20\x20z-index:\x2099\x20!important;\x0a\x20\x20\x20\x20color:\x20#e7e7e7\x20!important;\x0a\x20\x20\x20\x20opacity:\x201\x20!important;\x0a\x20\x20\x20\x20width:\x20auto\x20!important;\x0a\x20\x20\x20\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20background-color:\x20#1e1e1e\x20!important;\x0a\x20\x20\x20\x20border-radius:\x203px\x20!important;\x0a\x20\x20\x20\x20margin:\x200\x20!important;\x0a\x20\x20\x20\x20padding:\x206px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2013px\x20!important;\x0a\x20\x20\x20\x20line-height:\x2014px\x20!important;\x0a\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20top:\x20auto\x20!important;\x0a\x20\x20\x20\x20bottom:\x2012px\x20!important;\x0a\x20\x20\x20\x20left:\x2012px\x20!important;\x0a\x20\x20\x20\x20right:\x20auto\x20!important;\x0a\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20transform:\x20none\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-text-header{\x0a\x20\x20\x20\x20color:\x20#fff\x20!important;\x0a\x20\x20\x20\x20font-size:\x201.8rem\x20!important;\x0a\x20\x20\x20\x20font-weight:\x20600\x20!important;\x0a\x20\x20\x20\x20line-height:\x201.2\x20!important;\x0a\x20\x20\x20\x20margin-bottom:4px\x0a\x20\x20}\x0a\x0a\x20\x20@media\x20screen\x20and\x20(max-height:\x20450px)\x20{\x0a\x20\x20\x20\x20.sidenav\x20{\x20padding-top:\x2015px\x20!important;\x20}\x0a\x20\x20\x20\x20.sidenav\x20a\x20{\x20font-size:\x2018px\x20!important;\x20}\x0a\x20\x20}\x0a\x0a\x20\x20.f-section-title-text{\x0a\x20\x20\x20\x20color:\x20#fff\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x2010px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2018px\x20!important;\x0a\x20\x20\x20\x20font-weight:\x20700\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-div-support-section{\x0a\x20\x20\x20\x20padding-top:1rem\x20!important;\x0a\x20\x20\x20\x20padding-bottom:1rem\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-text-white{\x0a\x20\x20\x20\x20color:\x20white\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-spacer{\x0a\x20\x20\x20\x20padding-top:8px\x20!important;\x0a\x20\x20}\x0a",
    "0.4",
    "textarea[autofocus]",
    "last-step",
    "textarea[required]:visible",
    "relationship-",
    "min-character",
    "[data-add-new-input]",
    "[data-display-input-wrapper=\x22",
    ":input[type=\x22url\x22][required]",
    "backTo",
    "val",
    "inputName",
    "AND",
    "[data-answer]",
    ":input[type=\x22checkbox\x22]:checked",
    "keyCode",
    "[data-answer][data-radio-skip]:visible",
    "data-name",
    "hide",
    "head",
    "[data-clickable-all]",
    ":input[type=\x22date\x22][required]",
    "<option>",
    "input:radio[required]",
    "form[data-form=\x22multistep\x22]\x20:input",
    "[type=\x22checkbox\x22]",
    ":input[type=\x22checkbox\x22][required]",
    "removeClass",
    "css",
    "[data-count-card]",
    "getElementsByTagName",
    "FAIL",
    "click",
    "trim",
    "preventDefault",
    "attr",
    "[data-selection=\x22other\x22]",
    "join",
    "debug-mode",
    "show",
    "[data-input-field=\x22",
    "[data-redirect-delay]",
    "custom-error-message",
    "textarea[required]",
    "redirect-delay",
    "[data-conditional-result]",
    "stopPropagation",
    "destroy",
    "[data-selection=\x22",
    "No\x20Formly\x20script\x20added\x20to\x20the\x20page!",
    "input[name=\x22",
    "[data-quiz]",
    "name",
    "select[required]",
    "card",
    "[data-click-addclass]",
    "data-input-field",
    "[data-add-new]",
    "conditional-result",
    "every",
    "radio",
    "div.g-recaptcha",
    ":input",
    "\x22]:checked",
    "querySelector",
    ":first",
    "log",
    "display",
    "field",
    "[data-form=\x22next-btn\x22]",
    "\x22]\x20input",
    "add-new",
    "[data-query-param]",
    "readystatechange",
    "padding",
    "siblings",
    "top",
    "replace",
    "[data-clone-input=\x22",
    "[data-display-wrapper=\x22",
    "href",
    "none",
    "14QVomQk",
    ".w-form-formradioinput",
    "[data-text=\x22total-weight\x22]",
    "clone-input",
    "slow",
    "[data-text=\x22total-steps\x22]",
    "Before\x20&lt;/body&gt;\x20tag",
    "videsigns",
    "weighted-selection-range",
    "require",
    "[data-progressive-target=\x22",
    "\x22][value=\x22",
    "block-domain",
    "value",
    "<strong\x20class=\x22f-text-white\x22>Checkboxes\x20",
    "innerHTML",
    ":input[type=\x22file\x22][required]",
    "parents",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Powerups</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "location",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a",
    "clone",
    "keydown",
    "logic-extra",
    "offset",
    "query-param",
    "3950070uLNaxH",
    "stringify",
    "[data-clone]",
    ":input[type=\x22text\x22][required]",
    ":input[type=\x22radio\x22]",
    "submit-show",
    "</div>",
    "[data-form=\x22progress-indicator\x22]",
    "[data-enter=\x22true\x22]",
    "ix2",
    "src",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>5.\x20Submit\x20Buttons:\x20data-form=next-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Submit\x20button\x20present?\x20",
    "[data-reset-delay]",
    "quiz",
    "[data-radio-skip]:visible",
    ":input[type=\x22number\x22][required]",
    "checkbox",
    "</strong>",
    "radio-delay",
    "split",
    ":input[type=\x27radio\x27]:checked",
    "appendChild",
    ":input[type=\x22time\x22]",
    "width",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>4.\x20Back\x20Buttons:\x20data-form=next-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Back\x20button\x20present?\x20",
    "go-to",
    "[type=\x22submit\x22]",
    "input[type=\x22text\x22][required]:visible",
    "[data-progressive-target]",
    "body",
    "Webflow",
    ":input[type=\x22text\x22]",
    "[data-card=\x22true\x22]",
    "formly",
    "multistep",
    "test",
    "progressive-input",
    "script",
    "[data-form=\x22custom-progress-indicator\x22]",
    "option[value=\x22",
    "input-field",
    "[data-index=\x22",
    "clicked",
    "enter",
    "findIndex",
    "script[src=\x22",
    "addClass",
    "current",
    "each",
    "[data-enter]",
    "<strong\x20class=\x22f-text-white\x22>Press\x20\x22Enter\x22\x20To\x20Progress\x20",
    "[data-cms-select=input]",
    "last",
    "textarea[name=\x22",
    "ajaxComplete",
    "tagName",
    "find",
    "remove",
    "select[required]:visible",
    "answer",
    "w--redirected-checked",
    "new-tab",
    "[data-selection-weight]",
    "clickable",
    "filter",
    "reinit",
    "<strong\x20class=\x22f-text-white\x22>Intro\x20Cards\x20Or\x20Steps\x20Without\x20Inputs\x20",
    "push",
    ".w-checkbox-input",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Next\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button\x20",
    "<span\x20class=\x22f-icon-embed-xxsmall-2\x20w-embed\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--carbon\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2032\x2032\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M16\x202C8.2\x202\x202\x208.2\x202\x2016s6.2\x2014\x2014\x2014s14-6.2\x2014-14S23.8\x202\x2016\x202m5.4\x2021L16\x2017.6L10.6\x2023L9\x2021.4l5.4-5.4L9\x2010.6L10.6\x209l5.4\x205.4L21.4\x209l1.6\x201.6l-5.4\x205.4l5.4\x205.4z\x22></path></svg></span>",
    "[data-clone-input]",
    "searchParams",
    "open",
    "submit",
    ":input[type=\x22password\x22][required]",
    "formly-support",
    "6gGlNjH",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>3.\x20Next\x20Buttons:\x20data-form=back-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Next\x20button\x20present?\x20",
    "input[type=\x22email\x22]:visible",
    "change",
    "Please\x20wait...",
    "textarea",
    "redirect",
    "selection",
    ":input[type=\x22email\x22]",
    "forEach",
    "select-multiple",
    "focus",
    "count-card",
    ":input[type=\x22tel\x22][required]",
    "key",
    "[data-clone=\x22",
    "true",
    "formlyLastStepAnswer",
    "trigger",
    ":input[type=\x22file\x22]",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Submit\x20button\x20attribute\x20IS\x20on\x20Form\x20Submit\x20Button\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "[data-text=\x22current-step\x22]",
    "slice",
    "[data-form=\x22remove-input-clone\x22]",
    "[data-weighted-selection-range]",
    "skip-to",
    "[data-form=\x22back-btn\x22]",
    ":input[type=\x22number\x22]",
    "parent",
    "35%",
    "[data-select-multiple]",
    "[data-last-step]",
    "remove-upload",
    "[data-range]:contains(",
    "[data-answer=\x22",
    "12px",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Back\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button",
    "[data-btn=\x22edit\x22]",
    "index",
    "step",
    "[data-display-input]",
    "data-go-to",
    "PASS",
    "[data-skip-to]",
    "data-radio-skip",
    "skipTo",
    "fadeIn",
    "[data-memory]",
    "[data-form=\x22next-btn\x22][data-submit-show]",
    "text",
    "[data-go-to]",
    "includes",
    "<strong\x20class=\x22f-text-white\x22>Automatic\x20Progress\x20Indicators\x20",
    "[data-form=\x22multistep\x22]",
    "3936954GdZdau",
    ".active-answer-card",
    "0px",
    "<strong\x20class=\x22f-text-white\x22>Press\x20\x22⌘\x20+\x20Enter\x20\x22\x20To\x20Submit\x20",
    "[data-custom-error-message]",
    "\x22][data-progressive-input-value=\x22*\x22]",
    "reset",
    "[data-display=\x22",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "disabled",
    "some",
    "keypress",
    ":input[type=\x22url\x22]",
    "[data-radio-skip=\x22true\x22]",
    "input:checkbox",
    "style",
    "[data-checkbox]",
    "input[type=\x22checkbox\x22]:visible",
    "[data-selection]",
    "select:not([data-prefill=\x22false\x22])",
    "[data-clone-wrapper=\x22",
    "\x22]\x20select",
    "getItem",
    "1898024zsdAwm",
    "140517IFNchj",
    "2802455eAYKOT",
    ":input[type=\x22email\x22][required]",
    "getElementById",
    "[data-cms-select=text]",
    "[data-form=\x22next-btn\x22][type=\x22submit\x22]",
    "length",
    "[data-form=\x22submit-btn\x22]:visible",
    "formlyLastStep",
    "[data-clickable]",
    "createElement",
    "55817rfTwgF",
    ":input[type=\x22checkbox\x22]",
    "parse",
    "[data-display]",
    ".w-radio-input",
    "[data-weighted-selection]",
    "auto",
    "span",
    "[data-form=\x22submit-btn\x22]",
    "append",
    "<strong\x20class=\x22f-text-white\x22>Total\x20Step\x20Text\x20",
    "querySelectorAll",
    "html,\x20body",
    ":input[type=\x22checkbox\x22][required]:checked",
    ":input[type=\x22date\x22]",
    "[data-form=\x22step\x22][data-card]",
    ":input[type=\x22time\x22][required]",
    "[data-input-field]",
    "[data-btn=\x22check\x22]",
    "clickable-all",
    "prop",
    "form[data-form=\x22multistep\x22]",
    "[data-text=\x22error-message\x22]",
    "\x22]\x20textarea",
    "children",
    "dispatchEvent",
    "filledInput",
    "1701USXmfJ",
    "select[name=\x22",
    "last\x20step",
    "f-mySidenav",
    "<div\x20data-range=\x22selection\x22\x20style=\x22display:none\x20!important\x22>",
    "data-show-if",
    "[data-form=\x22step\x22]",
    "startsWith",
    "Inside\x20<head>\x20tag",
    "[data-show-if]",
    ":checked",
    "option[value=\x22$(this).val()\x22]",
    "[data-display-input-index=\x22",
    "data",
    "</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Formly\x20Script\x20Info</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>Script\x20URL:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>",
    "selected",
    "running",
    "get",
    "click-addclass",
    "[data-btn=\x22reset\x22]",
    "[data-cms-select=cms]",
    ":input[type=\x22tel\x22]",
    "phone-autoformat",
    "textarea:focus",
    "[data-radio-delay]",
    "scroll-top-offset",
    "type",
    "closest",
    "toLowerCase",
    "radio-skip",
    "BODY",
    "input[type=\x22radio\x22]",
    "[data-form=\x22progress\x22]",
    "Basic\x20(No\x20Formly\x20Logic)",
    ":input[required]",
    "9904Kqxusf",
    "[data-clone-input-wrapper]",
    ":input[type=\x22checkbox\x22][required]:not(:checked)",
    "[data-clone-wrapper]",
    "[type=\x22radio\x22]",
    "removeItem",
    "input:radio[name=\x22",
    "[data-clone-input-wrapper=\x22",
    "\x22]:not([data-prefill=\x22false\x22])",
    "input[type=\x22radio\x22]:checked",
    "init",
    "active-answer-card",
    "FormlyLogic\x20enabled",
    "clicked\x20enter",
  ];
  _0x5a7a = function () {
    return _0x2d5c6b;
  };
  return _0x5a7a();
}
(!isScriptLoaded ||
  scriptLocation !== _0xd17637(0x204) ||
  !isMultistepAttributePresent ||
  !isMultistepOnFormElement ||
  !areButtonsPresent ||
  isNextBtnOnSubmit ||
  !isSubmitBtnOnSubmit ||
  isBackBtnOnSubmit) &&
  (resultStatus = _0xd17637(0x210));
function isScriptUrlMatch(_0xc68a49, _0x5bd4c3) {
  const _0x170fb8 = _0xd17637;
  for (
    var _0x2dd29f = 0x0;
    _0x2dd29f < _0x5bd4c3[_0x170fb8(0x2fe)];
    _0x2dd29f++
  ) {
    if (_0xc68a49[_0x170fb8(0x2dd)](_0x5bd4c3[_0x2dd29f])) return !![];
  }
  return ![];
}
var keywordsToCheck = [_0xd17637(0x24a), _0xd17637(0x27e)],
  scripts = document[_0xd17637(0x20f)](_0xd17637(0x282)),
  matchedScripts = [];
for (var i = 0x0; i < scripts[_0xd17637(0x2fe)]; i++) {
  var scriptSrcs = scripts[i][_0xd17637(0x267)];
  isScriptUrlMatch(scriptSrcs, keywordsToCheck) &&
    matchedScripts[_0xd17637(0x2a0)](scriptSrcs);
}
if (matchedScripts[_0xd17637(0x2fe)] > 0x0) {
  scriptSrcAdded = matchedScripts;
  const script = document["querySelector"](
    _0xd17637(0x28a) + scriptSrcAdded + "\x22]",
  );
  script &&
    (scriptLocation =
      script["parentNode"][_0xd17637(0x294)] === _0xd17637(0x1d0)
        ? _0xd17637(0x249)
        : _0xd17637(0x326));
} else scriptSrcAdded = _0xd17637(0x222) + failIcon;
const newElement = document[_0xd17637(0x302)]("div"),
  newStyle = document[_0xd17637(0x302)](_0xd17637(0x2ef));
(newStyle[_0xd17637(0x252)] = _0xd17637(0x1f0)),
  document[_0xd17637(0x204)][_0xd17637(0x272)](newStyle);
showButton && document["body"][_0xd17637(0x272)](newElement);
newElement[_0xd17637(0x252)] =
  "\x0a\x20\x20<button\x20class=\x22f-openbtn\x22\x20onclick=\x22openNav()\x22>\x0a\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x2220px\x22\x20height=\x2220px\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M11\x2021h-1l1-7H7.5c-.88\x200-.33-.75-.31-.78C8.48\x2010.94\x2010.42\x207.54\x2013.01\x203h1l-1\x207h3.51c.4\x200\x20.62.19.4.66C12.97\x2017.55\x2011\x2021\x2011\x2021\x22></path>\x0a\x20\x20\x20\x20</svg>\x20Check\x20Form\x0a\x20\x20</button>\x0a\x20\x20<div\x20id=\x22f-mySidenav\x22\x20class=\x22f-sidenav\x22>\x0a\x20\x20\x20\x20<a\x20href=\x22javascript:void(0)\x22\x20class=\x22f-closebtn\x22\x20onclick=\x22closeNav()\x22>&times;</a>\x0a\x20\x20\x20\x20<div\x20class=\x22f-fc-main-content\x22>\x0a\x20\x20\x20\x20\x20\x20<h4\x20class=\x22f-text-header\x22>Formly\x20Support</h4>\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20If\x20you\x20have\x20spotted\x20a\x20bug\x20or\x20require\x20extra\x20support,\x20please\x20reach\x20out\x20to\x20us\x20via\x20Slack\x20or\x20email\x20us\x20at\x20developer@videsigns.uk.\x0a\x20\x20\x20\x20\x20\x20</p>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Form\x20Type</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>" +
  formType +
  _0xd17637(0x32c) +
  scriptSrcAdded +
  "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>Script\x20Location:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>" +
  scriptLocation +
  "</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Attributes</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>1.\x20Form:\x20data-form=multistep\x20" +
  (isMultistepOnFormElement ? passIcon : failIcon) +
  "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Multistep\x20form\x20attribute\x20is\x20on\x20Form\x20element\x20and\x20not\x20on\x20Form\x20Block\x20element\x0a\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>2.\x20Form\x20Steps:\x20data-form=step\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
  (formStepLength > 0x0 ? passIcon : failIcon) +
  "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Number\x20of\x20steps:\x20" +
  formStepLength +
  _0xd17637(0x2ab) +
  (nextBtn ? passIcon : failIcon) +
  _0xd17637(0x2a2) +
  (isNextBtnOnSubmit ? failIcon : passIcon) +
  _0xd17637(0x275) +
  (backBtn ? passIcon : failIcon) +
  _0xd17637(0x2ce) +
  (isBackBtnOnSubmit ? failIcon : passIcon) +
  _0xd17637(0x268) +
  (backBtn ? passIcon : failIcon) +
  _0xd17637(0x2be) +
  (isSubmitBtnOnSubmit ? passIcon : failIcon) +
  _0xd17637(0x255) +
  (progressBarAttr && progressIndicatorAttr
    ? _0xd17637(0x2de) + passIcon + _0xd17637(0x26e)
    : "") +
  "\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
  (customProgressAttr ? _0xd17637(0x1ec) + passIcon + "</strong>" : "") +
  _0xd17637(0x2e8) +
  (cardDivAttr ? _0xd17637(0x29f) + passIcon + _0xd17637(0x26e) : "") +
  _0xd17637(0x2e8) +
  (currentStepAttr
    ? "<strong\x20class=\x22f-text-white\x22>Current\x20Step\x20Text\x20" +
      passIcon +
      "</strong>"
    : "") +
  _0xd17637(0x2e8) +
  (totalStepAttr ? _0xd17637(0x30d) + passIcon + _0xd17637(0x26e) : "") +
  _0xd17637(0x2e8) +
  (enterAttr ? _0xd17637(0x28f) + passIcon + _0xd17637(0x26e) : "") +
  "\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
  (submitAttr ? _0xd17637(0x2e3) + passIcon + _0xd17637(0x26e) : "") +
  _0xd17637(0x2e8) +
  (radioSkipAttr ? _0xd17637(0x1eb) + passIcon + _0xd17637(0x26e) : "") +
  _0xd17637(0x2e8) +
  (customCheckboxAttr ? _0xd17637(0x251) + passIcon + _0xd17637(0x26e) : "") +
  _0xd17637(0x2e8) +
  (recapatchaAttr
    ? "<strong\x20class=\x22f-text-white\x22>ReCAPTCHA\x20" +
      passIcon +
      _0xd17637(0x26e)
    : "") +
  _0xd17637(0x257);
function openNav() {
  const _0x4c2f17 = _0xd17637;
  (document["getElementById"](_0x4c2f17(0x321))[_0x4c2f17(0x2ef)][
    _0x4c2f17(0x274)
  ] = _0x4c2f17(0x2c7)),
    (document[_0x4c2f17(0x2fb)](_0x4c2f17(0x321))["style"][_0x4c2f17(0x23b)] =
      _0x4c2f17(0x2cd));
}
function closeNav() {
  const _0x564182 = _0xd17637;
  (document[_0x564182(0x2fb)](_0x564182(0x321))[_0x564182(0x2ef)]["width"] =
    "0"),
    (document["getElementById"](_0x564182(0x321))[_0x564182(0x2ef)]["padding"] =
      _0x564182(0x2e2));
}
