// Reverted script 18/3/24 --- 8 Mar 2024
// Feature update testing
// Add limit to recurring form and recurring input

const _0x270fbf = _0x2393;
(function (_0x101b39, _0x5f552b) {
  const _0x424a1a = _0x2393,
    _0x537fcf = _0x101b39();
  while (!![]) {
    try {
      const _0x5f4da7 =
        (-parseInt(_0x424a1a(0x171)) / 0x1) *
          (-parseInt(_0x424a1a(0xdc)) / 0x2) +
        -parseInt(_0x424a1a(0x15f)) / 0x3 +
        -parseInt(_0x424a1a(0x22f)) / 0x4 +
        parseInt(_0x424a1a(0x16e)) / 0x5 +
        (-parseInt(_0x424a1a(0xf7)) / 0x6) *
          (-parseInt(_0x424a1a(0xfe)) / 0x7) +
        -parseInt(_0x424a1a(0x19a)) / 0x8 +
        -parseInt(_0x424a1a(0xf4)) / 0x9;
      if (_0x5f4da7 === _0x5f552b) break;
      else _0x537fcf["push"](_0x537fcf["shift"]());
    } catch (_0x1d37d8) {
      _0x537fcf["push"](_0x537fcf["shift"]());
    }
  }
})(_0x289b, 0xb92c9);
let x = 0x0,
  lastStep = 0x0,
  curStep = 0x0,
  countCard = !![],
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
  empReqTel = [],
  textareaLength = 0x0,
  textInputLength = 0x0,
  emailInputLength = 0x0,
  selectInputLength = 0x0,
  checkboxInputLength = 0x0,
  filledInput = [],
  savedFilledInput = [],
  progress = 0x0,
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
  successCard = "",
  redirectTo = "",
  totalSteps = 0x0,
  checkCount = 0x0,
  newTab = !![],
  unfilledArr = [],
  notRobot = !![],
  all_data = [];
var ogCloneArr = [];
let steps = $("[data-form=\x22step\x22]"),
  progressbarClone = $(_0x270fbf(0x17e))[_0x270fbf(0x160)](),
  progressbar,
  weightedSelection = $("[data-weighted-selection]")[_0x270fbf(0x21e)](
    "weighted-selection",
  ),
  weightedSelectionRange = $("[data-weighted-selection-range]")[
    _0x270fbf(0x21e)
  ](_0x270fbf(0x203)),
  selectMultiple = $("[data-select-multiple]")["data"](_0x270fbf(0x13c)),
  customError = $(_0x270fbf(0xd3))[_0x270fbf(0x21e)]("custom-error-message"),
  reinitIX = $(_0x270fbf(0x138))[_0x270fbf(0x21e)](_0x270fbf(0x11b)),
  memory = $(_0x270fbf(0x1fc))[_0x270fbf(0x21e)](_0x270fbf(0x182)),
  quiz = $("[data-quiz]")[_0x270fbf(0x21e)](_0x270fbf(0x135));
const urlFormly = new URL(window[_0x270fbf(0x18c)][_0x270fbf(0x1af)]);
let _params = $(_0x270fbf(0x19f))[_0x270fbf(0x21e)](_0x270fbf(0x197)),
  logicExtra = $(_0x270fbf(0x1d8))["data"](_0x270fbf(0x1cb)),
  oldSubmitText = $(_0x270fbf(0x1f9))[_0x270fbf(0x16c)](),
  oldResetText = $(_0x270fbf(0x148))[_0x270fbf(0x18b)](),
  formReset = $(_0x270fbf(0x1d8))[_0x270fbf(0x21e)](_0x270fbf(0x11c)),
  resetDelay = $(_0x270fbf(0x129))[_0x270fbf(0x21e)](_0x270fbf(0xca))
    ? $(_0x270fbf(0x129))[_0x270fbf(0x21e)](_0x270fbf(0xca))
    : 0x7d0,
  redirectDelay = $(_0x270fbf(0xf1))[_0x270fbf(0x21e)](_0x270fbf(0x1ed))
    ? $("[data-redirect-delay]")[_0x270fbf(0x21e)](_0x270fbf(0x1ed))
    : 0x7d0,
  phoneFormat = $(_0x270fbf(0x1d8))[_0x270fbf(0x21e)](_0x270fbf(0x1e2)),
  scrollToTop = $(_0x270fbf(0x1d8))[_0x270fbf(0x21e)](_0x270fbf(0x1c5)),
  trackLastStep = $(_0x270fbf(0x1a6))[_0x270fbf(0x21e)](_0x270fbf(0x1f4)),
  conditionalResult =
    $(_0x270fbf(0xc6))[_0x270fbf(0x21e)](_0x270fbf(0x236)) === _0x270fbf(0x1b0),
  scrollTopOffset = parseInt(
    $(_0x270fbf(0x1d8))[_0x270fbf(0x21e)](_0x270fbf(0x1e7)),
  );
const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
(savedFilledInput = JSON[_0x270fbf(0x19e)](
  localStorage["getItem"]("filledInput"),
)),
  (formlyLastStep = JSON[_0x270fbf(0x19e)](
    localStorage[_0x270fbf(0x224)](_0x270fbf(0x18f)),
  )),
  (formlyLastStepAnswer = JSON["parse"](
    localStorage[_0x270fbf(0x224)](_0x270fbf(0x23c)),
  ));
trackLastStep &&
  (formlyLastStep > x && (x = formlyLastStep),
  formlyLastStepAnswer && (selections = formlyLastStepAnswer));
$(_0x270fbf(0x200))[_0x270fbf(0x194)](function () {
  const _0x46c76b = _0x270fbf;
  ogCloneArr["push"]({
    name: $(this)["data"](_0x46c76b(0x160)),
    element: $(this)[_0x46c76b(0x160)](!![]),
    display: $(_0x46c76b(0x206) + $(this)["data"]("clone") + "\x22]")
      ["eq"](0x0)
      ["clone"](!![]),
  });
});
$(_0x270fbf(0x112))[_0x270fbf(0x225)] > 0x0 && (notRobot = ![]);

function recaptcha(_0x592297) {
  notRobot = !![];
}
$(_0x270fbf(0x139))[_0x270fbf(0x225)] > 0x0 &&
  (countCard = $(_0x270fbf(0x139))[_0x270fbf(0x21e)](_0x270fbf(0xfa)));
$(_0x270fbf(0x216))[_0x270fbf(0x22a)](),
  $(progressbarClone)[_0x270fbf(0x159)]("current"),
  $("[data-form=\x22progress\x22]")[_0x270fbf(0x14f)]()["remove"](),
  $(_0x270fbf(0x1f9))[_0x270fbf(0x22a)](),
  $(_0x270fbf(0x1f1))[_0x270fbf(0x22a)](),
  steps[_0x270fbf(0x194)](function () {
    const _0x314520 = _0x270fbf;
    $(_0x314520(0x1db))[_0x314520(0x12b)](
      progressbarClone["clone"](!![], !![]),
    );
  }),
  $(_0x270fbf(0x202))[_0x270fbf(0x22a)]();
countCard
  ? ((curStep = curStep + 0x1),
    (totalSteps = steps["length"]),
    $(_0x270fbf(0xf5))[_0x270fbf(0x18b)](totalSteps))
  : ($(steps[x])["data"](_0x270fbf(0x19b))
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    (totalSteps = $("[data-form=\x22step\x22]:not([data-card=\x22true\x22])")[
      _0x270fbf(0x225)
    ]),
    $(_0x270fbf(0xf5))[_0x270fbf(0x18b)](totalSteps),
    $(_0x270fbf(0xde))["each"](function () {
      const _0x224e9d = _0x270fbf;
      $($(_0x224e9d(0x17e))[$(this)[_0x224e9d(0x20f)]()])[_0x224e9d(0x22a)]();
    }));
(progressbar = $(_0x270fbf(0x1db))["children"]()),
  $(_0x270fbf(0x17e))["on"]("click", clickableIndicator),
  $(_0x270fbf(0x153))[_0x270fbf(0x18b)](curStep),
  steps["hide"](),
  $(_0x270fbf(0x222))[_0x270fbf(0x22a)](),
  $("[data-form=\x22next-btn\x22][type=\x22submit\x22]")[_0x270fbf(0x194)](
    function () {
      const _0x4b67ed = _0x270fbf;
      $(this)["attr"](_0x4b67ed(0x109), _0x4b67ed(0x242));
    },
  );

function getParams() {
  const _0x2c2f28 = _0x270fbf;
  urlFormly[_0x2c2f28(0x12a)][_0x2c2f28(0x143)](function (_0x2ffbab, _0x24321) {
    const _0x4121a7 = _0x2c2f28;
    searchQ[_0x4121a7(0x172)]({ val: _0x2ffbab, key: _0x24321 });
  });
}

function getSafe(_0x37dcda, _0x45c672) {
  try {
    return _0x37dcda();
  } catch (_0x1c0c0a) {
    return _0x45c672;
  }
}

function phoneAutoFormat(_0x4d1cae) {
  var _0xe3ce59 = "";
  return function (_0x44974f) {
    const _0x5c1e09 = _0x2393;
    var _0x107232 = "",
      _0x4ca728 = _0x44974f[_0x5c1e09(0xff)](/\D/g, ""),
      _0x17af18 = 0x0,
      _0x532aea = 0x0;
    while (
      _0x17af18 < _0x4ca728[_0x5c1e09(0x225)] &&
      _0x532aea < _0x4d1cae[_0x5c1e09(0x225)]
    ) {
      _0x4d1cae[_0x532aea] === "x"
        ? ((_0x107232 += _0x4ca728[_0x17af18]), _0x17af18++)
        : (_0x107232 += _0x4d1cae[_0x532aea]),
        _0x532aea++;
    }
    if (_0x44974f["length"] < _0xe3ce59[_0x5c1e09(0x225)]) {
      var _0x460aed = _0x4d1cae[_0x5c1e09(0x146)](_0x532aea);
      _0x107232 += _0x460aed["replace"](/x/g, "");
    }
    return (_0xe3ce59 = _0x107232), _0x107232;
  };
}

function validateURL(_0x1e0b2c) {
  return urlPattern["test"](_0x1e0b2c) ? !![] : ![];
}
quiz &&
  steps[_0x270fbf(0x194)](function () {
    const _0x475e2c = _0x270fbf;
    $(this)[_0x475e2c(0x14f)]()["attr"](_0x475e2c(0x1ae), !![]),
      $(this)[_0x475e2c(0x14f)]()["attr"](_0x475e2c(0x198), 0xfa);
  });

function disableBtn(_0x502180) {
  const _0x1193b8 = _0x270fbf;
  (fill = ![]),
    !customError &&
      ($(_0x1193b8(0xe8))[_0x1193b8(0x17f)]({
        opacity: _0x1193b8(0xf8),
        "pointer-events": _0x1193b8(0x1ca),
      }),
      $(_0x1193b8(0xe8))[_0x1193b8(0xce)](_0x1193b8(0x122)),
      $("[data-form=\x22submit-btn\x22]")[_0x1193b8(0x17f)]({
        opacity: _0x1193b8(0xf8),
        "pointer-events": _0x1193b8(0x1ca),
      }),
      $(_0x1193b8(0x1f9))[_0x1193b8(0xce)]("disabled"),
      $(_0x1193b8(0x1f1))[_0x1193b8(0x17f)]({
        opacity: _0x1193b8(0xf8),
        "pointer-events": _0x1193b8(0x1ca),
      }),
      $("[data-form-ms=\x22submit-btn\x22]")[_0x1193b8(0xce)](
        _0x1193b8(0x122),
      ));
}

function enableBtn() {
  const _0x142378 = _0x270fbf;
  (fill = !![]),
    $(_0x142378(0xe8))[_0x142378(0x17f)]({
      "pointer-events": _0x142378(0x157),
      opacity: "1",
    }),
    $("[data-form=\x22next-btn\x22]")[_0x142378(0x159)](_0x142378(0x122)),
    $(_0x142378(0x1f9))[_0x142378(0x17f)]({
      "pointer-events": "auto",
      opacity: "1",
    }),
    $(_0x142378(0x1f9))[_0x142378(0x159)](_0x142378(0x122)),
    $(_0x142378(0x1f1))[_0x142378(0x17f)]({
      "pointer-events": _0x142378(0x157),
      opacity: "1",
    }),
    $(_0x142378(0x1f1))["removeClass"](_0x142378(0x122));
}

function saveLastAnswer(_0x21319e) {
  const _0x452fe1 = _0x270fbf;
  localStorage["removeItem"](_0x452fe1(0x23c)),
    localStorage[_0x452fe1(0x136)](
      _0x452fe1(0x23c),
      JSON[_0x452fe1(0x12d)](_0x21319e),
    );
}

function saveFilledInput() {
  const _0x276b87 = _0x270fbf;
  $(_0x276b87(0x170))
    ["not"](_0x276b87(0x149))
    [_0x276b87(0x194)](function () {
      const _0x45e4ca = _0x276b87;
      $(this)[_0x45e4ca(0x164)](_0x45e4ca(0x109)) === "checkbox" ||
      $(this)[_0x45e4ca(0x164)](_0x45e4ca(0x109)) === "radio"
        ? $(this)[_0x45e4ca(0x1a9)](_0x45e4ca(0x1ad)) &&
          (filledInput["some"](
            (_0x2c896c) =>
              _0x2c896c[_0x45e4ca(0x106)] === $(this)["attr"](_0x45e4ca(0x14b)),
          )
            ? ((filledInput = filledInput[_0x45e4ca(0x150)](
                (_0x5098e9) =>
                  _0x5098e9[_0x45e4ca(0x106)] !== $(this)["attr"]("name"),
              )),
              $(this)[_0x45e4ca(0x16c)]() !== "" &&
                filledInput[_0x45e4ca(0x172)]({
                  inputName: $(this)[_0x45e4ca(0x164)](_0x45e4ca(0x14b)),
                  value: $(this)[_0x45e4ca(0x16c)](),
                }))
            : $(this)[_0x45e4ca(0x16c)]() !== "" &&
              filledInput[_0x45e4ca(0x172)]({
                inputName: $(this)[_0x45e4ca(0x164)](_0x45e4ca(0x14b)),
                value: $(this)[_0x45e4ca(0x16c)](),
              }))
        : filledInput[_0x45e4ca(0x1e8)](
              (_0x45b801) =>
                _0x45b801[_0x45e4ca(0x106)] ===
                $(this)[_0x45e4ca(0x164)](_0x45e4ca(0x14b)),
            )
          ? ((filledInput = filledInput["filter"](
              (_0x3e59fa) =>
                _0x3e59fa[_0x45e4ca(0x106)] !==
                $(this)[_0x45e4ca(0x164)](_0x45e4ca(0x14b)),
            )),
            $(this)[_0x45e4ca(0x16c)]() !== "" &&
              filledInput[_0x45e4ca(0x172)]({
                inputName: $(this)[_0x45e4ca(0x164)](_0x45e4ca(0x14b)),
                value: $(this)[_0x45e4ca(0x16c)](),
              }))
          : $(this)["val"]() !== "" &&
            filledInput[_0x45e4ca(0x172)]({
              inputName: $(this)["attr"](_0x45e4ca(0x14b)),
              value: $(this)[_0x45e4ca(0x16c)](),
            });
    }),
    trackLastStep &&
      (formlyLastStep > x ? (lastStep = formlyLastStep) : (lastStep = x),
      localStorage["removeItem"]("formlyLastStep"),
      localStorage[_0x276b87(0x136)](_0x276b87(0x18f), lastStep)),
    localStorage[_0x276b87(0x1c0)](_0x276b87(0x187)),
    localStorage[_0x276b87(0x136)](
      _0x276b87(0x187),
      JSON[_0x276b87(0x12d)](filledInput),
    );
}

function scrollTop() {
  const _0xc5a364 = _0x270fbf;
  scrollToTop &&
    $(_0xc5a364(0xfb))[_0xc5a364(0xd6)](
      {
        scrollTop:
          $(_0xc5a364(0x1d8))[_0xc5a364(0x20c)]()["top"] - scrollTopOffset,
      },
      0x3e8,
    );
}

function updateStep() {
  const _0x223afe = _0x270fbf;
  scrollTop(),
    (skip = ![]),
    $("[data-form=\x22custom-progress-indicator\x22]")[_0x223afe(0x159)](
      _0x223afe(0x122),
    );
  $("[data-clickable]")["data"](_0x223afe(0x11f)) &&
    (steps["find"](_0x223afe(0xf6))["each"](function () {
      const _0xd756f0 = _0x223afe;
      $(
        $(_0xd756f0(0x188))[
          $(this)
            [_0xd756f0(0x10d)]("[data-form=\x22step\x22]")
            [_0xd756f0(0x20f)]()
        ],
      ),
        $(this)[_0xd756f0(0x16c)]() === "" && emptyInput++;
    }),
    emptyInput > 0x0
      ? $("input[type=\x22submit\x22]")[_0x223afe(0xce)](_0x223afe(0x122))
      : $("input[type=\x22submit\x22]")[_0x223afe(0x159)](_0x223afe(0x122)));
  $(_0x223afe(0x188))[_0x223afe(0x159)](_0x223afe(0x1f8)),
    $("[data-form=\x22custom-progress-indicator\x22]")[_0x223afe(0xce)](
      _0x223afe(0x122),
    ),
    $($(_0x223afe(0x188))[x])[_0x223afe(0xce)]("current"),
    (selection = selections[_0x223afe(0x150)](
      (_0x518f90) => _0x518f90[_0x223afe(0x21c)] === x - 0x1,
    )),
    console["log"](_0x223afe(0x125), x);
  next &&
    (x = getSafe(() => selection[0x0][_0x223afe(0x1cf)])
      ? parseInt(getSafe(() => selection[0x0][_0x223afe(0x1cf)]))
      : x);
  $(_0x223afe(0x1f5))[_0x223afe(0x22a)](), steps[_0x223afe(0x22a)]();
  reinitIX === !![] && window[_0x223afe(0x213)]["destroy"]();
  $(progressbar)[_0x223afe(0x159)](_0x223afe(0x1f8));
  for (i = 0x0; i <= x; i++) {
    countCard
      ? $(progressbar[i])[_0x223afe(0xce)](_0x223afe(0x1f8))
      : !$(steps[i])["data"]("card") &&
        $(progressbar[i])[_0x223afe(0xce)](_0x223afe(0x1f8));
  }
  reinitIX === !![]
    ? (window[_0x223afe(0x213)] &&
        window["Webflow"][_0x223afe(0x124)](_0x223afe(0x1b1))["init"](),
      document[_0x223afe(0x1b5)](new Event(_0x223afe(0xe0))),
      $(steps[x])[_0x223afe(0x180)]())
    : $(steps[x])[_0x223afe(0x1da)](_0x223afe(0x1d3));
  $(_0x223afe(0xe7))["removeClass"](_0x223afe(0x210));
  x === 0x0 &&
    !$(steps[x])[_0x223afe(0x21e)](_0x223afe(0x19b)) &&
    ($(steps[x])[_0x223afe(0x1a4)](_0x223afe(0x1f5))[_0x223afe(0x180)](),
    $(steps[x])
      [_0x223afe(0x1a4)](_0x223afe(0x1f5))
      [_0x223afe(0xce)]("active-answer-card"));
  selection["length"] > 0x0
    ? ($(steps[x])
        [_0x223afe(0x1a4)](
          _0x223afe(0x22c) + selection[0x0][_0x223afe(0x13f)] + "\x22]",
        )
        ["show"](),
      $(steps[x])
        [_0x223afe(0x1a4)](
          _0x223afe(0x22c) + selection[0x0][_0x223afe(0x13f)] + "\x22]",
        )
        [_0x223afe(0xce)](_0x223afe(0x210)))
    : ($(steps[x])
        [_0x223afe(0x1a4)](_0x223afe(0x22c) + answer + "\x22]")
        [_0x223afe(0x180)](),
      $(steps[x])
        ["find"]("[data-answer=\x22" + answer + "\x22]")
        [_0x223afe(0xce)](_0x223afe(0x210)));
  if (x === 0x0)
    $("[data-form=\x22back-btn\x22]")[_0x223afe(0x22a)](),
      $(_0x223afe(0xe8))[_0x223afe(0x180)](),
      $(_0x223afe(0x1f9))[_0x223afe(0x22a)]();
  else {
    if (
      x === steps[_0x223afe(0x225)] - 0x1 ||
      $(steps[x])[_0x223afe(0x1a4)](_0x223afe(0xe4))["length"] > 0x0
    ) {
      $(_0x223afe(0xe8))[_0x223afe(0x22a)]();
      if (
        $(steps[x])
          [_0x223afe(0x1a4)]("[data-form=\x22next-btn\x22][data-submit-show]")
          ["data"](_0x223afe(0x158))
      )
        $(steps[x])[_0x223afe(0x1a4)](_0x223afe(0x21f))[_0x223afe(0x180)]();
      else
        $("[data-form=\x22next-btn\x22]")[_0x223afe(0x21e)](_0x223afe(0x158)) &&
          $(_0x223afe(0xe8))[_0x223afe(0x180)]();
      $(_0x223afe(0x1f9))[_0x223afe(0x180)](),
        $("[data-form-ms=\x22submit-btn\x22]")[_0x223afe(0x180)](),
        $(_0x223afe(0x147))[_0x223afe(0x180)]();
    } else
      $("[data-form=\x22next-btn\x22]")[_0x223afe(0x180)](),
        $(_0x223afe(0x147))[_0x223afe(0x180)](),
        $("[data-form=\x22submit-btn\x22]")["hide"](),
        $(_0x223afe(0x1f1))[_0x223afe(0x22a)]();
  }
  $($(steps[x])["find"](_0x223afe(0x16a))[0x0])["focus"](),
    $($(steps[x])[_0x223afe(0x1a4)](_0x223afe(0x237))[0x0])[_0x223afe(0x1a1)](),
    validation();
  for (idx = 0x0; idx <= x; idx++) {
    $($(_0x223afe(0x188))[idx])[_0x223afe(0x159)](_0x223afe(0x122));
  }
}

function validateEmail(_0x6b3f3, _0x4eda2a, _0x3fb0a1) {
  const _0x52c059 = _0x270fbf;
  let _0x258b75 = _0x6b3f3["includes"]("@")
    ? _0x6b3f3["split"]("@")[0x1][_0x52c059(0x228)](".")[0x0]
    : [];
  dom = [];
  _0x4eda2a !== undefined &&
    _0x4eda2a[_0x52c059(0x228)](",")[_0x52c059(0x143)](function (_0x23b01b) {
      const _0x4f5023 = _0x52c059;
      _0x23b01b[_0x4f5023(0xd8)](_0x258b75) && dom[_0x4f5023(0x172)](_0x258b75);
    });
  dom[_0x52c059(0x225)] > 0x0 ? (domainAllowed = ![]) : (domainAllowed = !![]);
  var _0x4a88a8 = /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,20})?$/;
  !_0x4a88a8[_0x52c059(0x240)](_0x6b3f3) || !domainAllowed
    ? ((emailFilled = ![]), unfilledArr["push"]({ input: _0x3fb0a1 }))
    : (emailFilled = !![]);
}

function phoneValidation(_0x37f9f4, _0x3ce261, _0x3d8356) {
  if (phoneFormat) return _0x3ce261 >= _0x3d8356 ? !![] : ![];
  else {
    if (_0x3ce261 >= _0x3d8356) return !![];
  }
}

function validation() {
  const _0x605ee8 = _0x270fbf;
  $(steps[x])["data"](_0x605ee8(0x19b)) && enableBtn();
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
      "length"
    ]),
    (textInputLength = $(steps[x])["find"](_0x605ee8(0xea))[_0x605ee8(0x225)]),
    (selectInputLength = $(steps[x])[_0x605ee8(0x1a4)](_0x605ee8(0x1eb))[
      "length"
    ]),
    (emailInputLength = $(steps[x])[_0x605ee8(0x1a4)](_0x605ee8(0x14d))[
      _0x605ee8(0x225)
    ]),
    (checkboxInputLength = $(steps[x])["find"](_0x605ee8(0x14e))["length"]);
  textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0
    ? disableBtn()
    : enableBtn();
  checkCount = $(steps[x])["data"](_0x605ee8(0x15e))
    ? $(steps[x])[_0x605ee8(0x21e)](_0x605ee8(0x15e))
    : $(steps[x])[_0x605ee8(0x1a4)]("[data-checkbox]")[_0x605ee8(0x225)] > 0x0
      ? $(steps[x])
          [_0x605ee8(0x1a4)](_0x605ee8(0x1ee))
          [_0x605ee8(0x21e)](_0x605ee8(0x15e))
      : 0x0;
  if (!logicExtra)
    $(steps[x])["find"](":input")["is"]("[type=\x22checkbox\x22]") &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])[_0x605ee8(0x1a4)](":input[type=\x22checkbox\x22]")[
          _0x605ee8(0x225)
        ]
        ? $(steps[x])
            ["find"](_0x605ee8(0x1c7))
            ["each"](function () {
              const _0xacfc8 = _0x605ee8;
              $(this)["is"](":checked")
                ? $(steps[x])[_0xacfc8(0x1a4)](_0xacfc8(0x128))["length"] <
                    0x1 &&
                  ((checkboxFilled = !![]),
                  resetInputErrorMessage(
                    $(this)[_0xacfc8(0x164)](_0xacfc8(0x14b)),
                  ))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0xacfc8(0x172)]({
                    input: $(this)[_0xacfc8(0x164)](_0xacfc8(0x14b)),
                  }));
            })
        : $(steps[x])[_0x605ee8(0x1a4)](_0x605ee8(0x1bf))[_0x605ee8(0x225)] >=
            checkCount
          ? $(steps[x])["find"](_0x605ee8(0x128))["length"] > 0x0
            ? $(steps[x])
                [_0x605ee8(0x1a4)](_0x605ee8(0x128))
                [_0x605ee8(0x194)](function () {
                  const _0x5068e5 = _0x605ee8;
                  checkboxFilled = ![];
                  let _0x1f0241 = $(steps[x])[_0x5068e5(0x1a4)](
                      ":input[type=\x22checkbox\x22][required]",
                    )[_0x5068e5(0x225)],
                    _0x4231b6 = $(steps[x])[_0x5068e5(0x1a4)](_0x5068e5(0x177))[
                      _0x5068e5(0x225)
                    ];
                  _0x1f0241 - _0x4231b6 === 0x0
                    ? ((checkboxFilled = !![]),
                      resetInputErrorMessage(
                        $(steps[x])
                          [_0x5068e5(0x1a4)](_0x5068e5(0x1c7))
                          [_0x5068e5(0x164)]("name"),
                      ))
                    : ((checkboxFilled = ![]),
                      $(steps[x])
                        ["find"](_0x5068e5(0x10f))
                        [_0x5068e5(0x194)](function () {
                          const _0x5846b8 = _0x5068e5;
                          unfilledArr[_0x5846b8(0x172)]({
                            input: $(this)[_0x5846b8(0x164)]("name"),
                          });
                        }));
                })
            : ((checkboxFilled = !![]),
              resetInputErrorMessage(
                $(steps[x])
                  [_0x605ee8(0x1a4)](_0x605ee8(0x1c7))
                  ["attr"](_0x605ee8(0x14b)),
              ))
          : ((checkboxFilled = ![]),
            $(steps[x])
              [_0x605ee8(0x1a4)](_0x605ee8(0x128))
              [_0x605ee8(0x194)](function () {
                const _0x21137f = _0x605ee8;
                $(this)[_0x21137f(0x1b9)](_0x21137f(0x132)) &&
                  unfilledArr[_0x21137f(0x172)]({
                    input: $(this)[_0x21137f(0x164)]("name"),
                  });
              }),
            unfilledArr[_0x605ee8(0x172)]({
              input: $(steps[x])
                [_0x605ee8(0x1a4)](_0x605ee8(0x1c7))
                [_0x605ee8(0x164)]("name"),
            }))),
      $(steps[x])
        [_0x605ee8(0x1a4)](_0x605ee8(0x105))
        [_0x605ee8(0x194)](function (_0x4fb850) {
          const _0x250dd8 = _0x605ee8;
          var _0x37190e = $(this)[_0x250dd8(0x164)](_0x250dd8(0x14b));
          $("input:radio[name=\x22" + _0x37190e + _0x250dd8(0x204))["length"] ==
          0x0
            ? (!empReqRadio[_0x250dd8(0x1a4)](
                (_0x1249eb) => _0x1249eb[_0x250dd8(0x17a)] === _0x4fb850,
              ) && empReqRadio[_0x250dd8(0x172)]({ input: _0x4fb850 }),
              unfilledArr[_0x250dd8(0x172)]({
                input: $(this)[_0x250dd8(0x164)](_0x250dd8(0x14b)),
              }))
            : (empReqRadio = empReqRadio[_0x250dd8(0x150)](
                (_0x2d50c3) => _0x2d50c3["input"] !== _0x4fb850,
              )),
            empReqRadio[_0x250dd8(0x225)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0x605ee8(0x1a4)](":input[type=\x22text\x22][required]")
        [_0x605ee8(0x194)](function (_0x3f2f08) {
          const _0x5f3a3e = _0x605ee8;
          let _0x4a50a6 = $(this)[_0x5f3a3e(0x16c)]()[_0x5f3a3e(0x225)],
            _0x2bd78f = $(this)[_0x5f3a3e(0x21e)](_0x5f3a3e(0x16d))
              ? $(this)[_0x5f3a3e(0x21e)](_0x5f3a3e(0x16d))
              : 0x0;
          $(this)[_0x5f3a3e(0x16c)]() !== "" && _0x4a50a6 >= _0x2bd78f
            ? (empReqInput = empReqInput["filter"](
                (_0x18c801) => _0x18c801[_0x5f3a3e(0x17a)] !== _0x3f2f08,
              ))
            : (!empReqInput["find"](
                (_0x54b388) => _0x54b388[_0x5f3a3e(0x17a)] === _0x3f2f08,
              ) && empReqInput[_0x5f3a3e(0x172)]({ input: _0x3f2f08 }),
              unfilledArr[_0x5f3a3e(0x172)]({
                input: $(this)["attr"](_0x5f3a3e(0x14b)),
              })),
            empReqInput[_0x5f3a3e(0x225)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x605ee8(0x10a))
        [_0x605ee8(0x194)](function (_0x4c40eb) {
          const _0x4e3e48 = _0x605ee8;
          let _0x4296ee = $(this)["val"]()["length"],
            _0x5ef3c9 = $(this)[_0x4e3e48(0x21e)](_0x4e3e48(0x16d))
              ? $(this)[_0x4e3e48(0x21e)]("min-character")
              : 0x0;
          $(this)[_0x4e3e48(0x16c)]() !== "" && _0x4296ee >= _0x5ef3c9
            ? (empReqPassword = empReqPassword[_0x4e3e48(0x150)](
                (_0x3a840a) => _0x3a840a["input"] !== _0x4c40eb,
              ))
            : (!empReqPassword[_0x4e3e48(0x1a4)](
                (_0x1250c2) => _0x1250c2[_0x4e3e48(0x17a)] === _0x4c40eb,
              ) && empReqPassword[_0x4e3e48(0x172)]({ input: _0x4c40eb }),
              unfilledArr[_0x4e3e48(0x172)]({
                input: $(this)[_0x4e3e48(0x164)]("name"),
              })),
            empReqPassword[_0x4e3e48(0x225)] === 0x0
              ? (passwordFilled = !![])
              : (passwordFilled = ![]);
        }),
      $(steps[x])
        [_0x605ee8(0x1a4)](":input[type=\x22url\x22][required]")
        ["each"](function (_0x479730) {
          const _0x2cf8d8 = _0x605ee8;
          let _0x5177d0 = $(this)[_0x2cf8d8(0x16c)]()[_0x2cf8d8(0x225)],
            _0x5dcb6f = $(this)[_0x2cf8d8(0x21e)](_0x2cf8d8(0x16d))
              ? $(this)[_0x2cf8d8(0x21e)](_0x2cf8d8(0x16d))
              : 0x0;
          $(this)[_0x2cf8d8(0x16c)]() !== "" && _0x5177d0 >= _0x5dcb6f
            ? (empReqUrl = empReqUrl["filter"](
                (_0x11f74c) => _0x11f74c[_0x2cf8d8(0x17a)] !== _0x479730,
              ))
            : (!empReqTime[_0x2cf8d8(0x1a4)](
                (_0x182cb8) => _0x182cb8[_0x2cf8d8(0x17a)] === _0x479730,
              ) && empReqUrl[_0x2cf8d8(0x172)]({ input: _0x479730 }),
              unfilledArr[_0x2cf8d8(0x172)]({
                input: $(this)[_0x2cf8d8(0x164)]("name"),
              })),
            empReqUrl[_0x2cf8d8(0x225)] === 0x0 &&
            validateURL($(this)[_0x2cf8d8(0x16c)]())
              ? (urlFilled = !![])
              : (urlFilled = ![]);
        }),
      $(steps[x])
        [_0x605ee8(0x1a4)](_0x605ee8(0x144))
        [_0x605ee8(0x194)](function (_0x513c96) {
          const _0x5b7bd7 = _0x605ee8;
          let _0x523b22 = $(this)[_0x5b7bd7(0x16c)]()[_0x5b7bd7(0x225)],
            _0x2381cd = $(this)["data"](_0x5b7bd7(0x16d))
              ? $(this)[_0x5b7bd7(0x21e)]("min-character")
              : 0x0;
          $(this)[_0x5b7bd7(0x16c)]() !== "" && _0x523b22 >= _0x2381cd
            ? (empReqTime = empReqTime["filter"](
                (_0x3db90b) => _0x3db90b["input"] !== _0x513c96,
              ))
            : (!empReqTime[_0x5b7bd7(0x1a4)](
                (_0x3625b7) => _0x3625b7[_0x5b7bd7(0x17a)] === _0x513c96,
              ) && empReqTime["push"]({ input: _0x513c96 }),
              unfilledArr[_0x5b7bd7(0x172)]({
                input: $(this)[_0x5b7bd7(0x164)](_0x5b7bd7(0x14b)),
              })),
            empReqTime["length"] === 0x0
              ? (timeFilled = !![])
              : (timeFilled = ![]);
        }),
      $(steps[x])
        [_0x605ee8(0x1a4)](":input[type=\x22date\x22][required]")
        [_0x605ee8(0x194)](function (_0x51b2db) {
          const _0x128015 = _0x605ee8;
          $(this)[_0x128015(0x16c)]() !== ""
            ? (empReqDate = empReqDate["filter"](
                (_0x1eef29) => _0x1eef29[_0x128015(0x17a)] !== _0x51b2db,
              ))
            : (!empReqDate[_0x128015(0x1a4)](
                (_0x384d00) => _0x384d00[_0x128015(0x17a)] === _0x51b2db,
              ) && empReqDate[_0x128015(0x172)]({ input: _0x51b2db }),
              unfilledArr[_0x128015(0x172)]({
                input: $(this)["attr"]("name"),
              })),
            empReqDate["length"] === 0x0
              ? (dateFilled = !![])
              : (dateFilled = ![]);
        }),
      $(steps[x])
        [_0x605ee8(0x1a4)](_0x605ee8(0x1c1))
        [_0x605ee8(0x194)](function (_0x4bfddb) {
          const _0x5f37c9 = _0x605ee8;
          if ($(this)[_0x5f37c9(0x16c)]() !== "") {
            let _0x46458c = $(this)["val"]()[_0x5f37c9(0x225)],
              _0x591ba3 = $(this)[_0x5f37c9(0x21e)]("min-character")
                ? $(this)["data"](_0x5f37c9(0x16d))
                : 0x0;
            if ($(this)[_0x5f37c9(0x21e)](_0x5f37c9(0x100))) {
              var _0x4dc578 = phoneAutoFormat(
                $(this)[_0x5f37c9(0x21e)]("phone-autoformat"),
              );
              $(this)["val"](_0x4dc578($(this)[_0x5f37c9(0x16c)]()));
            }
            phoneValidation($(this)["val"](), _0x46458c, _0x591ba3)
              ? (empReqTel = empReqTel[_0x5f37c9(0x150)](
                  (_0x556ddc) => _0x556ddc[_0x5f37c9(0x17a)] !== _0x4bfddb,
                ))
              : empReqTel[_0x5f37c9(0x172)]({ input: _0x4bfddb });
          } else
            !empReqTel[_0x5f37c9(0x1a4)](
              (_0x1a2266) => _0x1a2266[_0x5f37c9(0x17a)] === _0x4bfddb,
            ) && empReqTel["push"]({ input: _0x4bfddb }),
              unfilledArr[_0x5f37c9(0x172)]({
                input: $(this)[_0x5f37c9(0x164)](_0x5f37c9(0x14b)),
              });
          empReqTel[_0x5f37c9(0x225)] === 0x0
            ? (telFilled = !![])
            : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x605ee8(0x1a4)](_0x605ee8(0x176))
        [_0x605ee8(0x194)](function (_0x5f541d) {
          const _0x466cd1 = _0x605ee8;
          $(this)["val"]() !== ""
            ? (empReqFile = empReqFile[_0x466cd1(0x150)](
                (_0x5ba1e7) => _0x5ba1e7[_0x466cd1(0x17a)] !== _0x5f541d,
              ))
            : (!empReqFile["find"](
                (_0x1e7adb) => _0x1e7adb["input"] === _0x5f541d,
              ) && empReqFile[_0x466cd1(0x172)]({ input: _0x5f541d }),
              unfilledArr[_0x466cd1(0x172)]({
                input: $(this)[_0x466cd1(0x164)](_0x466cd1(0x14b)),
              })),
            empReqFile["length"] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x605ee8(0x1a4)](_0x605ee8(0x1f0))
        [_0x605ee8(0x194)](function (_0x548164) {
          const _0x4404fd = _0x605ee8;
          let _0x3f422f = $(this)[_0x4404fd(0x16c)]()[_0x4404fd(0x225)],
            _0x3a6102 = $(this)[_0x4404fd(0x21e)](_0x4404fd(0x16d))
              ? $(this)["data"](_0x4404fd(0x16d))
              : 0x0;
          $(this)[_0x4404fd(0x16c)]() !== "" && _0x3f422f >= _0x3a6102
            ? (empReqNum = empReqNum[_0x4404fd(0x150)](
                (_0x30c977) => _0x30c977[_0x4404fd(0x17a)] !== _0x548164,
              ))
            : (!empReqNum[_0x4404fd(0x1a4)](
                (_0x278a49) => _0x278a49["input"] === _0x548164,
              ) && empReqNum["push"]({ input: _0x548164 }),
              unfilledArr[_0x4404fd(0x172)]({
                input: $(this)[_0x4404fd(0x164)](_0x4404fd(0x14b)),
              })),
            empReqNum["length"] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x605ee8(0x1a4)](_0x605ee8(0x15a))
        [_0x605ee8(0x194)](function (_0x1b0f4e) {
          const _0x191aff = _0x605ee8;
          let _0x378b57 = $(this)["val"]();
          _0x378b57 === "" && (_0x378b57 = null),
            _0x378b57 != null
              ? (empReqSelect = empReqSelect["filter"](
                  (_0x4c8924) => _0x4c8924[_0x191aff(0x17a)] !== _0x1b0f4e,
                ))
              : (!empReqSelect["find"](
                  (_0x31ecab) => _0x31ecab[_0x191aff(0x17a)] === _0x1b0f4e,
                ) && empReqSelect["push"]({ input: _0x1b0f4e }),
                unfilledArr[_0x191aff(0x172)]({
                  input: $(this)["attr"](_0x191aff(0x14b)),
                })),
            empReqSelect[_0x191aff(0x225)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x605ee8(0x1a4)](_0x605ee8(0x1bc))
        ["each"](function (_0xbc07ca) {
          const _0x3a07e8 = _0x605ee8;
          let _0x1b5541 = $(this)[_0x3a07e8(0x16c)]()[_0x3a07e8(0x225)],
            _0x4f694c = $(this)[_0x3a07e8(0x21e)]("min-character")
              ? $(this)[_0x3a07e8(0x21e)](_0x3a07e8(0x16d))
              : 0x0;
          $(this)["val"]() !== "" && _0x1b5541 >= _0x4f694c
            ? (empReqTextarea = empReqTextarea["filter"](
                (_0x2069a9) => _0x2069a9[_0x3a07e8(0x17a)] !== _0xbc07ca,
              ))
            : (!empReqTextarea[_0x3a07e8(0x1a4)](
                (_0x20daa4) => _0x20daa4[_0x3a07e8(0x17a)] === _0xbc07ca,
              ) && empReqTextarea[_0x3a07e8(0x172)]({ input: _0xbc07ca }),
              unfilledArr[_0x3a07e8(0x172)]({
                input: $(this)["attr"](_0x3a07e8(0x14b)),
              })),
            empReqTextarea[_0x3a07e8(0x225)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x605ee8(0x1a4)](_0x605ee8(0xf2))
        [_0x605ee8(0x194)](function () {
          const _0x8bb515 = _0x605ee8;
          $(this)["val"]() !== ""
            ? validateEmail(
                $(this)[_0x8bb515(0x16c)](),
                $(this)["data"]("block-domain"),
                $(this)["attr"]("name"),
              )
            : ((emailFilled = ![]),
              unfilledArr[_0x8bb515(0x172)]({
                input: $(this)[_0x8bb515(0x164)](_0x8bb515(0x14b)),
              }));
        });
  else {
    if ($(steps[x])[_0x605ee8(0x21e)](_0x605ee8(0x19b)))
      (answer = $(steps[x])
        [_0x605ee8(0x1a4)](_0x605ee8(0x1fe))
        [_0x605ee8(0x21e)]("go-to")),
        (selections = selections[_0x605ee8(0x150)](
          (_0x573896) => _0x573896["step"] !== x,
        )),
        selections[_0x605ee8(0x172)]({ step: x, selected: answer });
    else
      $(steps[x])
        [_0x605ee8(0x1a4)](_0x605ee8(0xe7))
        ["data"](_0x605ee8(0x19b)) &&
        ((answer = $(steps[x])
          [_0x605ee8(0x1a4)](_0x605ee8(0xe7))
          ["data"](_0x605ee8(0x156))),
        (selections = selections[_0x605ee8(0x150)](
          (_0x4614f7) => _0x4614f7[_0x605ee8(0x21c)] !== x,
        )),
        selections["push"]({ step: x, selected: answer }));
    $(steps[x])
      [_0x605ee8(0x1a4)](".active-answer-card")
      [_0x605ee8(0x1a4)](":input")
      ["is"](_0x605ee8(0x123)) &&
      (checkCount === "*" ||
      checkCount > $(steps[x])[_0x605ee8(0x1a4)](_0x605ee8(0x1c7))["length"]
        ? $(steps[x])
            ["find"](":input[type=\x22checkbox\x22]")
            ["each"](function () {
              const _0x28d75f = _0x605ee8;
              $(this)["is"](_0x28d75f(0x132))
                ? $(steps[x])[_0x28d75f(0x1a4)](_0x28d75f(0xf6))[
                    _0x28d75f(0x225)
                  ] < 0x1 &&
                  ((skipTo = undefined),
                  $(this)
                    [_0x28d75f(0x10d)](_0x28d75f(0x1a3))
                    [_0x28d75f(0x21e)]("skip-to") &&
                    (skipTo = $(this)
                      [_0x28d75f(0x10d)](_0x28d75f(0x1a3))
                      [_0x28d75f(0x21e)](_0x28d75f(0x212))),
                  $(this)
                    ["parents"](_0x28d75f(0x1fe))
                    ["attr"](_0x28d75f(0x1ac)) &&
                    ((answer = $(this)
                      [_0x28d75f(0x10d)](_0x28d75f(0x1fe))
                      ["attr"](_0x28d75f(0x1ac))),
                    (selections = selections[_0x28d75f(0x150)](
                      (_0x4f88cb) => _0x4f88cb["step"] !== x,
                    )),
                    selections[_0x28d75f(0x172)]({ step: x, selected: answer }),
                    skipTo &&
                      (selections[_0x28d75f(0x172)]({
                        step: skipTo - 0x2,
                        selected: answer,
                      }),
                      (objIndex = selections[_0x28d75f(0xc5)](
                        (_0x350f18) => _0x350f18["step"] === x,
                      )),
                      (selections[objIndex][_0x28d75f(0x1cf)] =
                        parseInt(skipTo) - 0x1),
                      (selections[objIndex][_0x28d75f(0x230)] = x))),
                  (checkboxFilled = !![]),
                  $(steps[x])[_0x28d75f(0x1a4)](_0x28d75f(0x177))[
                    _0x28d75f(0x225)
                  ] >=
                    $(steps[x])[_0x28d75f(0x1a4)](_0x28d75f(0x128))["length"] &&
                    resetInputErrorMessage(
                      $(steps[x])
                        [_0x28d75f(0x1a4)](_0x28d75f(0x1c7))
                        ["attr"]("name"),
                    ))
                : ((checkboxFilled = ![]),
                  unfilledArr["push"]({
                    input: $(this)[_0x28d75f(0x164)]("name"),
                  }));
            })
        : $(steps[x])
              [_0x605ee8(0x1a4)](_0x605ee8(0xe7))
              [_0x605ee8(0x1a4)](_0x605ee8(0x1bf))[_0x605ee8(0x225)] >=
            checkCount
          ? ($(steps[x])
              ["find"](_0x605ee8(0xe7))
              [_0x605ee8(0x1a4)](":input[type=\x22checkbox\x22]")
              [_0x605ee8(0x10d)](_0x605ee8(0x1fe))
              [_0x605ee8(0x164)](_0x605ee8(0x1ac)) &&
              ((skipTo = undefined),
              $(steps[x])
                [_0x605ee8(0x1a4)](_0x605ee8(0xe7))
                [_0x605ee8(0x1a4)](_0x605ee8(0x1c7))
                ["parents"](_0x605ee8(0x1a3))
                [_0x605ee8(0x164)](_0x605ee8(0x209)) &&
                (skipTo = $(steps[x])
                  ["find"](".active-answer-card")
                  [_0x605ee8(0x1a4)](_0x605ee8(0x1bf))
                  [_0x605ee8(0x10d)](_0x605ee8(0x1a3))
                  [_0x605ee8(0x164)](_0x605ee8(0x209))),
              (answer = $(steps[x])
                [_0x605ee8(0x1a4)](".active-answer-card")
                [_0x605ee8(0x1a4)](_0x605ee8(0x1c7))
                [_0x605ee8(0x10d)](_0x605ee8(0x1fe))
                [_0x605ee8(0x164)](_0x605ee8(0x1ac))),
              (selections = selections[_0x605ee8(0x150)](
                (_0x3fb351) => _0x3fb351["step"] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                ((selections = selections[_0x605ee8(0x150)](
                  (_0x852a4) => _0x852a4[_0x605ee8(0x21c)] !== skipTo - 0x2,
                )),
                selections[_0x605ee8(0x172)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x605ee8(0xc5)](
                  (_0x54b7e0) => _0x54b7e0[_0x605ee8(0x21c)] === x,
                )),
                (selections[objIndex][_0x605ee8(0x1cf)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x605ee8(0x230)] = x))),
            (checkboxFilled = !![]),
            $(steps[x])[_0x605ee8(0x1a4)](_0x605ee8(0x177))[_0x605ee8(0x225)] >=
              $(steps[x])[_0x605ee8(0x1a4)](_0x605ee8(0x128))[
                _0x605ee8(0x225)
              ] &&
              resetInputErrorMessage(
                $(steps[x])
                  [_0x605ee8(0x1a4)](_0x605ee8(0x1c7))
                  [_0x605ee8(0x164)](_0x605ee8(0x14b)),
              ))
          : ((checkboxFilled = ![]),
            $(steps[x])
              [_0x605ee8(0x1a4)](_0x605ee8(0x128))
              [_0x605ee8(0x194)](function () {
                const _0x2cd43c = _0x605ee8;
                $(this)[_0x2cd43c(0x1b9)](":checked") &&
                  unfilledArr["push"]({
                    input: $(this)[_0x2cd43c(0x164)]("name"),
                  });
              }))),
      $(steps[x])
        [_0x605ee8(0x1a4)](_0x605ee8(0xe7))
        [_0x605ee8(0x1a4)]("input:radio[required]")
        [_0x605ee8(0x194)](function (_0xdb6472) {
          const _0x1403c2 = _0x605ee8;
          var _0x122719 = $(this)["attr"](_0x1403c2(0x14b));
          $("input:radio[name=\x22" + _0x122719 + _0x1403c2(0x204))["length"] ==
          0x0
            ? (!empReqRadio[_0x1403c2(0x1a4)](
                (_0x43985d) => _0x43985d[_0x1403c2(0x17a)] === _0xdb6472,
              ) && empReqRadio[_0x1403c2(0x172)]({ input: _0xdb6472 }),
              unfilledArr[_0x1403c2(0x172)]({
                input: $(this)["attr"](_0x1403c2(0x14b)),
              }))
            : (empReqRadio = empReqRadio[_0x1403c2(0x150)](
                (_0xf2f721) => _0xf2f721[_0x1403c2(0x17a)] !== _0xdb6472,
              )),
            empReqRadio[_0x1403c2(0x225)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0x605ee8(0x1a4)](_0x605ee8(0xe7))
        [_0x605ee8(0x1a4)](_0x605ee8(0xfd))
        [_0x605ee8(0x194)](function (_0x1edc60) {
          const _0x1203de = _0x605ee8;
          let _0x537fd6 = $(this)[_0x1203de(0x16c)]()["length"],
            _0x5e955c = $(this)["data"](_0x1203de(0x16d))
              ? $(this)[_0x1203de(0x21e)](_0x1203de(0x16d))
              : 0x0;
          $(this)["val"]() !== "" && _0x537fd6 >= _0x5e955c
            ? (empReqInput = empReqInput["filter"](
                (_0x5d75c2) => _0x5d75c2[_0x1203de(0x17a)] !== _0x1edc60,
              ))
            : (!empReqInput["find"](
                (_0x56660d) => _0x56660d["input"] === _0x1edc60,
              ) && empReqInput[_0x1203de(0x172)]({ input: _0x1edc60 }),
              unfilledArr[_0x1203de(0x172)]({
                input: $(this)[_0x1203de(0x164)](_0x1203de(0x14b)),
              })),
            empReqInput[_0x1203de(0x225)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x605ee8(0x1a4)](_0x605ee8(0xe7))
        [_0x605ee8(0x1a4)](_0x605ee8(0x1e1))
        [_0x605ee8(0x194)](function (_0x587945) {
          const _0x44020b = _0x605ee8;
          (skipTo = undefined),
            $(this)
              [_0x44020b(0x10d)](_0x44020b(0x1a3))
              [_0x44020b(0x21e)](_0x44020b(0x212)) !== "" &&
              (skipTo = $(this)
                [_0x44020b(0x10d)](_0x44020b(0x1a3))
                [_0x44020b(0x21e)]("skip-to")),
            $(this)
              [_0x44020b(0x10d)]("[data-go-to]")
              [_0x44020b(0x164)](_0x44020b(0x1ac)) &&
              ((answer = $(this)
                [_0x44020b(0x10d)](_0x44020b(0x1fe))
                [_0x44020b(0x164)](_0x44020b(0x1ac))),
              (selections = selections[_0x44020b(0x150)](
                (_0x40c08c) => _0x40c08c[_0x44020b(0x21c)] !== x,
              )),
              selections[_0x44020b(0x172)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x44020b(0xc5)](
                  (_0x34de0d) => _0x34de0d[_0x44020b(0x21c)] === x,
                )),
                (selections[objIndex][_0x44020b(0x1cf)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x605ee8(0x1a4)](_0x605ee8(0xe7))
        [_0x605ee8(0x1a4)](":input[type=\x22password\x22][required]")
        ["each"](function (_0x461894) {
          const _0x154f5c = _0x605ee8;
          let _0x165633 = $(this)[_0x154f5c(0x16c)]()[_0x154f5c(0x225)],
            _0x54d17b = $(this)[_0x154f5c(0x21e)]("min-character")
              ? $(this)[_0x154f5c(0x21e)](_0x154f5c(0x16d))
              : 0x0;
          $(this)[_0x154f5c(0x16c)]() !== "" && _0x165633 >= _0x54d17b
            ? (empReqPassword = empReqPassword["filter"](
                (_0x57f91c) => _0x57f91c[_0x154f5c(0x17a)] !== _0x461894,
              ))
            : (!empReqPassword[_0x154f5c(0x1a4)](
                (_0x48ef42) => _0x48ef42[_0x154f5c(0x17a)] === _0x461894,
              ) && empReqPassword[_0x154f5c(0x172)]({ input: _0x461894 }),
              unfilledArr[_0x154f5c(0x172)]({
                input: $(this)[_0x154f5c(0x164)]("name"),
              })),
            empReqPassword[_0x154f5c(0x225)] === 0x0
              ? (passwordFilled = !![])
              : (passwordFilled = ![]);
        }),
      $(steps[x])
        [_0x605ee8(0x1a4)](_0x605ee8(0xe7))
        [_0x605ee8(0x1a4)](_0x605ee8(0x168))
        [_0x605ee8(0x194)](function (_0x1e9d30) {
          const _0x32ec9a = _0x605ee8;
          (skipTo = undefined),
            $(this)
              [_0x32ec9a(0x10d)]("[data-skip-to]")
              [_0x32ec9a(0x21e)](_0x32ec9a(0x212)) !== "" &&
              (skipTo = $(this)
                [_0x32ec9a(0x10d)](_0x32ec9a(0x1a3))
                [_0x32ec9a(0x21e)]("skip-to")),
            $(this)["parents"]("[data-go-to]")["attr"](_0x32ec9a(0x1ac)) &&
              ((answer = $(this)
                [_0x32ec9a(0x10d)](_0x32ec9a(0x1fe))
                ["attr"](_0x32ec9a(0x1ac))),
              (selections = selections[_0x32ec9a(0x150)](
                (_0x1d2310) => _0x1d2310["step"] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x32ec9a(0x172)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x32ec9a(0xc5)](
                  (_0x205b87) => _0x205b87[_0x32ec9a(0x21c)] === x,
                )),
                (selections[objIndex][_0x32ec9a(0x1cf)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        ["find"](_0x605ee8(0xe7))
        [_0x605ee8(0x1a4)](":input[type=\x22url\x22][required]")
        ["each"](function (_0x137e43) {
          const _0x39a2d7 = _0x605ee8;
          let _0x5d8f3d = $(this)["val"]()[_0x39a2d7(0x225)],
            _0x1c836f = $(this)[_0x39a2d7(0x21e)](_0x39a2d7(0x16d))
              ? $(this)[_0x39a2d7(0x21e)]("min-character")
              : 0x0;
          $(this)[_0x39a2d7(0x16c)]() !== "" && _0x5d8f3d >= _0x1c836f
            ? (empReqUrl = empReqUrl[_0x39a2d7(0x150)](
                (_0x22a9ed) => _0x22a9ed[_0x39a2d7(0x17a)] !== _0x137e43,
              ))
            : (!empReqUrl[_0x39a2d7(0x1a4)](
                (_0x5a0b07) => _0x5a0b07["input"] === _0x137e43,
              ) && empReqUrl["push"]({ input: _0x137e43 }),
              unfilledArr[_0x39a2d7(0x172)]({
                input: $(this)[_0x39a2d7(0x164)]("name"),
              })),
            empReqUrl[_0x39a2d7(0x225)] === 0x0 &&
            validateURL($(this)[_0x39a2d7(0x16c)]())
              ? (urlFilled = !![])
              : (urlFilled = ![]);
        }),
      $(steps[x])
        [_0x605ee8(0x1a4)](_0x605ee8(0xe7))
        [_0x605ee8(0x1a4)](_0x605ee8(0x21a))
        ["each"](function (_0x30d288) {
          const _0xb9216a = _0x605ee8;
          (skipTo = undefined),
            $(this)
              [_0xb9216a(0x10d)](_0xb9216a(0x1a3))
              [_0xb9216a(0x21e)](_0xb9216a(0x212)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0xb9216a(0x1a3))
                [_0xb9216a(0x21e)](_0xb9216a(0x212))),
            $(this)
              [_0xb9216a(0x10d)](_0xb9216a(0x1fe))
              ["attr"](_0xb9216a(0x1ac)) &&
              ((answer = $(this)
                ["parents"](_0xb9216a(0x1fe))
                ["attr"](_0xb9216a(0x1ac))),
              (selections = selections[_0xb9216a(0x150)](
                (_0x1cc2a9) => _0x1cc2a9[_0xb9216a(0x21c)] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0xb9216a(0xc5)](
                  (_0x24e763) => _0x24e763["step"] === x,
                )),
                (selections[objIndex][_0xb9216a(0x1cf)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0xb9216a(0x230)] = x)));
        }),
      $(steps[x])
        [_0x605ee8(0x1a4)](".active-answer-card")
        [_0x605ee8(0x1a4)](":input[type=\x22date\x22][required]")
        [_0x605ee8(0x194)](function (_0x195600) {
          const _0x50ac14 = _0x605ee8;
          $(this)["val"]() !== ""
            ? (empReqDate = empReqDate[_0x50ac14(0x150)](
                (_0x56571b) => _0x56571b[_0x50ac14(0x17a)] !== _0x195600,
              ))
            : (!empReqDate[_0x50ac14(0x1a4)](
                (_0x1643f2) => _0x1643f2[_0x50ac14(0x17a)] === _0x195600,
              ) && empReqDate[_0x50ac14(0x172)]({ input: _0x195600 }),
              unfilledArr[_0x50ac14(0x172)]({
                input: $(this)[_0x50ac14(0x164)](_0x50ac14(0x14b)),
              })),
            empReqDate[_0x50ac14(0x225)] === 0x0
              ? (dateFilled = !![])
              : (dateFilled = ![]);
        }),
      $(steps[x])
        [_0x605ee8(0x1a4)](".active-answer-card")
        [_0x605ee8(0x1a4)](_0x605ee8(0x193))
        [_0x605ee8(0x194)](function (_0x1eb667) {
          const _0x50c27b = _0x605ee8;
          (skipTo = undefined),
            $(this)
              [_0x50c27b(0x10d)](_0x50c27b(0x1a3))
              [_0x50c27b(0x21e)](_0x50c27b(0x212)) !== "" &&
              (skipTo = $(this)
                [_0x50c27b(0x10d)](_0x50c27b(0x1a3))
                [_0x50c27b(0x21e)](_0x50c27b(0x212))),
            $(this)
              ["parents"]("[data-go-to]")
              [_0x50c27b(0x164)](_0x50c27b(0x1ac)) &&
              ((answer = $(this)
                ["parents"]("[data-go-to]")
                [_0x50c27b(0x164)](_0x50c27b(0x1ac))),
              (selections = selections[_0x50c27b(0x150)](
                (_0x5e7742) => _0x5e7742[_0x50c27b(0x21c)] !== x,
              )),
              selections[_0x50c27b(0x172)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x50c27b(0x172)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x50c27b(0xc5)](
                  (_0x544192) => _0x544192[_0x50c27b(0x21c)] === x,
                )),
                (selections[objIndex][_0x50c27b(0x1cf)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x605ee8(0x1a4)](_0x605ee8(0xe7))
        [_0x605ee8(0x1a4)](_0x605ee8(0x144))
        ["each"](function (_0x2208e2) {
          const _0x5885bc = _0x605ee8;
          $(this)[_0x5885bc(0x16c)]() !== ""
            ? (empReqTime = empReqTime["filter"](
                (_0x41f58a) => _0x41f58a[_0x5885bc(0x17a)] !== _0x2208e2,
              ))
            : (!empReqTime["find"](
                (_0x269d57) => _0x269d57[_0x5885bc(0x17a)] === _0x2208e2,
              ) && empReqTime[_0x5885bc(0x172)]({ input: _0x2208e2 }),
              unfilledArr[_0x5885bc(0x172)]({
                input: $(this)[_0x5885bc(0x164)](_0x5885bc(0x14b)),
              })),
            empReqTime[_0x5885bc(0x225)] === 0x0
              ? (timeFilled = !![])
              : (timeFilled = ![]);
        }),
      $(steps[x])
        [_0x605ee8(0x1a4)](_0x605ee8(0xe7))
        ["find"](":input[type=\x22time\x22]")
        ["each"](function (_0x2fefad) {
          const _0x16878c = _0x605ee8;
          (skipTo = undefined),
            $(this)
              [_0x16878c(0x10d)](_0x16878c(0x1a3))
              ["data"](_0x16878c(0x212)) !== "" &&
              (skipTo = $(this)
                [_0x16878c(0x10d)](_0x16878c(0x1a3))
                ["data"](_0x16878c(0x212))),
            $(this)
              [_0x16878c(0x10d)](_0x16878c(0x1fe))
              ["attr"](_0x16878c(0x1ac)) &&
              ((answer = $(this)
                [_0x16878c(0x10d)](_0x16878c(0x1fe))
                [_0x16878c(0x164)](_0x16878c(0x1ac))),
              (selections = selections[_0x16878c(0x150)](
                (_0x1ebe79) => _0x1ebe79[_0x16878c(0x21c)] !== x,
              )),
              selections[_0x16878c(0x172)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x16878c(0xc5)](
                  (_0x126346) => _0x126346[_0x16878c(0x21c)] === x,
                )),
                (selections[objIndex][_0x16878c(0x1cf)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x16878c(0x230)] = x)));
        }),
      $(steps[x])
        [_0x605ee8(0x1a4)](".active-answer-card")
        [_0x605ee8(0x1a4)](_0x605ee8(0x1f0))
        [_0x605ee8(0x194)](function (_0x37a126) {
          const _0x1a9737 = _0x605ee8;
          let _0x31b5d7 = $(this)[_0x1a9737(0x16c)]()["length"],
            _0x137e88 = $(this)[_0x1a9737(0x21e)]("min-character")
              ? $(this)["data"]("min-character")
              : 0x0;
          $(this)[_0x1a9737(0x16c)]() !== "" && _0x31b5d7 >= _0x137e88
            ? (empReqNum = empReqNum["filter"](
                (_0x559695) => _0x559695["input"] !== _0x37a126,
              ))
            : (!empReqNum["find"](
                (_0x2838b9) => _0x2838b9[_0x1a9737(0x17a)] === _0x37a126,
              ) && empReqNum[_0x1a9737(0x172)]({ input: _0x37a126 }),
              unfilledArr[_0x1a9737(0x172)]({
                input: $(this)[_0x1a9737(0x164)]("name"),
              })),
            empReqNum["length"] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x605ee8(0x1a4)](_0x605ee8(0xe7))
        ["find"](_0x605ee8(0x185))
        [_0x605ee8(0x194)](function (_0x1375d4) {
          const _0x22da20 = _0x605ee8;
          (skipTo = undefined),
            $(this)
              [_0x22da20(0x10d)](_0x22da20(0x1a3))
              ["data"](_0x22da20(0x212)) !== "" &&
              (skipTo = $(this)
                [_0x22da20(0x10d)](_0x22da20(0x1a3))
                ["data"](_0x22da20(0x212))),
            $(this)
              ["parents"](_0x22da20(0x1fe))
              [_0x22da20(0x164)]("data-go-to") &&
              ((answer = $(this)
                [_0x22da20(0x10d)]("[data-go-to]")
                [_0x22da20(0x164)](_0x22da20(0x1ac))),
              (selections = selections[_0x22da20(0x150)](
                (_0x9b4d0a) => _0x9b4d0a[_0x22da20(0x21c)] !== x,
              )),
              selections[_0x22da20(0x172)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x22da20(0x172)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x22da20(0xc5)](
                  (_0x1ae7c1) => _0x1ae7c1[_0x22da20(0x21c)] === x,
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x605ee8(0x1a4)](_0x605ee8(0xe7))
        [_0x605ee8(0x1a4)](_0x605ee8(0x1c1))
        [_0x605ee8(0x194)](function (_0x50840a) {
          const _0x2271b7 = _0x605ee8;
          if ($(this)["val"]() !== "") {
            let _0xcd2873 = $(this)[_0x2271b7(0x16c)]()[_0x2271b7(0x225)],
              _0x50d63b = $(this)[_0x2271b7(0x21e)](_0x2271b7(0x16d))
                ? $(this)[_0x2271b7(0x21e)](_0x2271b7(0x16d))
                : 0x0;
            if ($(this)["data"](_0x2271b7(0x100))) {
              var _0x39e344 = phoneAutoFormat(
                $(this)[_0x2271b7(0x21e)](_0x2271b7(0x100)),
              );
              $(this)["val"](_0x39e344($(this)["val"]()));
            }
            phoneValidation($(this)[_0x2271b7(0x16c)](), _0xcd2873, _0x50d63b)
              ? (empReqTel = empReqTel[_0x2271b7(0x150)](
                  (_0x754763) => _0x754763[_0x2271b7(0x17a)] !== _0x50840a,
                ))
              : empReqTel[_0x2271b7(0x172)]({ input: _0x50840a });
          } else
            !empReqTel[_0x2271b7(0x1a4)](
              (_0xc2ec90) => _0xc2ec90[_0x2271b7(0x17a)] === _0x50840a,
            ) && empReqTel["push"]({ input: _0x50840a }),
              unfilledArr[_0x2271b7(0x172)]({
                input: $(this)["attr"](_0x2271b7(0x14b)),
              });
          empReqTel["length"] === 0x0 ? (telFilled = !![]) : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x605ee8(0x1a4)](".active-answer-card")
        ["find"](_0x605ee8(0x192))
        [_0x605ee8(0x194)](function (_0x53a308) {
          const _0x36e359 = _0x605ee8;
          (skipTo = undefined),
            $(this)
              ["parents"](_0x36e359(0x1a3))
              [_0x36e359(0x21e)](_0x36e359(0x212)) !== "" &&
              (skipTo = $(this)
                [_0x36e359(0x10d)](_0x36e359(0x1a3))
                [_0x36e359(0x21e)](_0x36e359(0x212))),
            $(this)
              [_0x36e359(0x10d)](_0x36e359(0x1fe))
              [_0x36e359(0x164)](_0x36e359(0x1ac)) &&
              ((answer = $(this)
                [_0x36e359(0x10d)](_0x36e359(0x1fe))
                [_0x36e359(0x164)](_0x36e359(0x1ac))),
              (selections = selections[_0x36e359(0x150)](
                (_0x532ae6) => _0x532ae6[_0x36e359(0x21c)] !== x,
              )),
              selections[_0x36e359(0x172)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x36e359(0xc5)](
                  (_0x190627) => _0x190627[_0x36e359(0x21c)] === x,
                )),
                (selections[objIndex][_0x36e359(0x1cf)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x36e359(0x230)] = x)));
        }),
      $(steps[x])
        ["find"](".active-answer-card")
        ["find"](_0x605ee8(0x176))
        [_0x605ee8(0x194)](function (_0x3a6bb8) {
          const _0x35f8de = _0x605ee8;
          $(this)[_0x35f8de(0x16c)]() !== ""
            ? (empReqFile = empReqFile["filter"](
                (_0xfa90b2) => _0xfa90b2["input"] !== _0x3a6bb8,
              ))
            : (!empReqFile[_0x35f8de(0x1a4)](
                (_0x1442a0) => _0x1442a0[_0x35f8de(0x17a)] === _0x3a6bb8,
              ) && empReqFile[_0x35f8de(0x172)]({ input: _0x3a6bb8 }),
              unfilledArr[_0x35f8de(0x172)]({
                input: $(this)[_0x35f8de(0x164)](_0x35f8de(0x14b)),
              })),
            empReqFile[_0x35f8de(0x225)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x605ee8(0x1a4)](_0x605ee8(0xe7))
        [_0x605ee8(0x1a4)](":input[type=\x22file\x22]")
        [_0x605ee8(0x194)](function (_0x3d9e60) {
          const _0x5202b2 = _0x605ee8;
          (skipTo = undefined),
            $(this)
              [_0x5202b2(0x10d)](_0x5202b2(0x1a3))
              ["data"](_0x5202b2(0x212)) !== "" &&
              (skipTo = $(this)
                [_0x5202b2(0x10d)](_0x5202b2(0x1a3))
                [_0x5202b2(0x21e)](_0x5202b2(0x212))),
            $(this)
              [_0x5202b2(0x10d)](_0x5202b2(0x1fe))
              [_0x5202b2(0x164)](_0x5202b2(0x1ac)) &&
              ((answer = $(this)
                ["parents"]("[data-go-to]")
                ["attr"](_0x5202b2(0x1ac))),
              (selections = selections[_0x5202b2(0x150)](
                (_0x50325f) => _0x50325f[_0x5202b2(0x21c)] !== x,
              )),
              selections[_0x5202b2(0x172)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x5202b2(0xc5)](
                  (_0x5a8dba) => _0x5a8dba[_0x5202b2(0x21c)] === x,
                )),
                (selections[objIndex][_0x5202b2(0x1cf)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x605ee8(0x1a4)](".active-answer-card")
        [_0x605ee8(0x1a4)]("select[required]")
        ["each"](function (_0x3d83a6) {
          const _0x1e2969 = _0x605ee8;
          $(this)["val"]() !== null && $(this)[_0x1e2969(0x16c)]() !== ""
            ? (empReqSelect = empReqSelect[_0x1e2969(0x150)](
                (_0x46c989) => _0x46c989[_0x1e2969(0x17a)] !== _0x3d83a6,
              ))
            : (!empReqSelect[_0x1e2969(0x1a4)](
                (_0x9ace09) => _0x9ace09[_0x1e2969(0x17a)] === _0x3d83a6,
              ) && empReqSelect[_0x1e2969(0x172)]({ input: _0x3d83a6 }),
              unfilledArr["push"]({
                input: $(this)[_0x1e2969(0x164)](_0x1e2969(0x14b)),
              })),
            empReqSelect[_0x1e2969(0x225)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x605ee8(0xe7))
        [_0x605ee8(0x1a4)]("select")
        ["each"](function (_0xdc392b) {
          const _0x27437f = _0x605ee8;
          (skipTo = undefined),
            $(this)
              ["parents"](_0x27437f(0x1a3))
              [_0x27437f(0x21e)]("skip-to") !== "" &&
              (skipTo = $(this)
                ["parents"](_0x27437f(0x1a3))
                [_0x27437f(0x21e)](_0x27437f(0x212))),
            $(this)
              [_0x27437f(0x10d)](_0x27437f(0x1fe))
              [_0x27437f(0x164)](_0x27437f(0x1ac)) &&
              ((answer = $(this)
                ["parents"](_0x27437f(0x1fe))
                [_0x27437f(0x164)]("data-go-to")),
              (selections = selections[_0x27437f(0x150)](
                (_0x2f28db) => _0x2f28db[_0x27437f(0x21c)] !== x,
              )),
              selections[_0x27437f(0x172)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x27437f(0x172)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x27437f(0xc5)](
                  (_0x21ff50) => _0x21ff50[_0x27437f(0x21c)] === x,
                )),
                (selections[objIndex][_0x27437f(0x1cf)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x27437f(0x230)] = x)));
        }),
      $(steps[x])
        [_0x605ee8(0x1a4)](".active-answer-card")
        [_0x605ee8(0x1a4)]("textarea[required]")
        [_0x605ee8(0x194)](function (_0x329fe2) {
          const _0x2e5df1 = _0x605ee8;
          let _0x5e715a = $(this)[_0x2e5df1(0x16c)]()["length"],
            _0x57c054 = $(this)[_0x2e5df1(0x21e)](_0x2e5df1(0x16d))
              ? $(this)[_0x2e5df1(0x21e)](_0x2e5df1(0x16d))
              : 0x0;
          $(this)[_0x2e5df1(0x16c)]() !== "" && _0x5e715a >= _0x57c054
            ? (empReqTextarea = empReqTextarea[_0x2e5df1(0x150)](
                (_0x2e9ed8) => _0x2e9ed8[_0x2e5df1(0x17a)] !== _0x329fe2,
              ))
            : (!empReqTextarea["find"](
                (_0x374628) => _0x374628[_0x2e5df1(0x17a)] === _0x329fe2,
              ) && empReqTextarea["push"]({ input: _0x329fe2 }),
              unfilledArr[_0x2e5df1(0x172)]({
                input: $(this)[_0x2e5df1(0x164)](_0x2e5df1(0x14b)),
              })),
            empReqTextarea[_0x2e5df1(0x225)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x605ee8(0x1a4)](_0x605ee8(0xe7))
        [_0x605ee8(0x1a4)](_0x605ee8(0x1aa))
        [_0x605ee8(0x194)](function (_0x2834f9) {
          const _0x4920d4 = _0x605ee8;
          (skipTo = undefined),
            $(this)
              [_0x4920d4(0x10d)](_0x4920d4(0x1a3))
              [_0x4920d4(0x21e)](_0x4920d4(0x212)) !== "" &&
              (skipTo = $(this)
                [_0x4920d4(0x10d)](_0x4920d4(0x1a3))
                [_0x4920d4(0x21e)](_0x4920d4(0x212))),
            $(this)
              [_0x4920d4(0x10d)](_0x4920d4(0x1fe))
              [_0x4920d4(0x164)](_0x4920d4(0x1ac)) &&
              ((answer = $(this)
                [_0x4920d4(0x10d)]("[data-go-to]")
                [_0x4920d4(0x164)](_0x4920d4(0x1ac))),
              (selections = selections[_0x4920d4(0x150)](
                (_0x3207a5) => _0x3207a5[_0x4920d4(0x21c)] !== x,
              )),
              selections[_0x4920d4(0x172)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x4920d4(0x172)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x358d71) => _0x358d71[_0x4920d4(0x21c)] === x,
                )),
                (selections[objIndex][_0x4920d4(0x1cf)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x4920d4(0x230)] = x)));
        }),
      $(steps[x])
        [_0x605ee8(0x1a4)](".active-answer-card")
        [_0x605ee8(0x1a4)](_0x605ee8(0xf2))
        [_0x605ee8(0x194)](function (_0x4ed40c) {
          const _0xc6a5c1 = _0x605ee8;
          $(this)[_0xc6a5c1(0x16c)]() !== ""
            ? validateEmail(
                $(this)["val"](),
                $(this)["data"](_0xc6a5c1(0x217)),
                $(this)["attr"](_0xc6a5c1(0x14b)),
              )
            : ((emailFilled = ![]),
              unfilledArr[_0xc6a5c1(0x172)]({
                input: $(this)[_0xc6a5c1(0x164)](_0xc6a5c1(0x14b)),
              }));
        }),
      $(steps[x])
        [_0x605ee8(0x1a4)](_0x605ee8(0xe7))
        [_0x605ee8(0x1a4)](_0x605ee8(0xdb))
        [_0x605ee8(0x194)](function (_0xf2d769) {
          const _0x1b0a99 = _0x605ee8;
          (skipTo = undefined),
            $(this)
              ["parents"](_0x1b0a99(0x1a3))
              [_0x1b0a99(0x21e)](_0x1b0a99(0x212)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0x1b0a99(0x1a3))
                [_0x1b0a99(0x21e)](_0x1b0a99(0x212))),
            $(this)
              ["parents"](_0x1b0a99(0x1fe))
              [_0x1b0a99(0x164)](_0x1b0a99(0x1ac)) &&
              ((answer = $(this)
                [_0x1b0a99(0x10d)](_0x1b0a99(0x1fe))
                [_0x1b0a99(0x164)](_0x1b0a99(0x1ac))),
              (selections = selections["filter"](
                (_0x46320) => _0x46320[_0x1b0a99(0x21c)] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x1b0a99(0x172)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x1b0a99(0xc5)](
                  (_0x195bff) => _0x195bff[_0x1b0a99(0x21c)] === x,
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x1b0a99(0x230)] = x)));
        });
  }
  $(steps[x])[_0x605ee8(0x1a4)](_0x605ee8(0xcd))["is"](":checked") &&
    ((selArr = []),
    $(steps)
      ["find"](_0x605ee8(0x195))
      ["each"](function (_0x31fe11, _0x44f9f2) {
        const _0x1fbc49 = _0x605ee8;
        selArr[_0x1fbc49(0x172)]({
          selected: $(this)[_0x1fbc49(0x21e)](_0x1fbc49(0x13f)),
        });
      }),
    (selString = []),
    selArr[_0x605ee8(0x143)]((_0x4225cf) =>
      selString[_0x605ee8(0x172)](_0x4225cf[_0x605ee8(0x13f)]),
    ),
    $(steps[x])
      [_0x605ee8(0x1a4)](_0x605ee8(0xe7))
      ["find"](":input[type=\x27radio\x27]:checked")
      [_0x605ee8(0x194)](function () {
        const _0x484860 = _0x605ee8;
        skipTo = undefined;
        if ($(this)[_0x484860(0x10d)](_0x484860(0x1a3))["data"]("skip-to"))
          skipTo = $(this)
            ["parents"](_0x484860(0x1a3))
            [_0x484860(0x21e)]("skip-to");
        else
          $(this)[_0x484860(0x21e)]("skip-to") &&
            (skipTo = $(this)["data"]("skip-to"));
        selections = selections[_0x484860(0x150)](
          (_0x14fabf) => _0x14fabf["step"] !== x,
        );
        if ($(this)[_0x484860(0x21e)](_0x484860(0x156)))
          (answer = $(this)[_0x484860(0x164)]("data-go-to")),
            selections["push"]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0x484860(0x172)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0x484860(0xc5)](
                (_0x12eed2) => _0x12eed2[_0x484860(0x21c)] === x,
              )),
              (selections[objIndex][_0x484860(0x1cf)] = parseInt(skipTo) - 0x1),
              (selections[objIndex]["backTo"] = x));
        else
          $(this)
            [_0x484860(0x10d)](_0x484860(0x1fe))
            [_0x484860(0x21e)](_0x484860(0x156)) &&
            ((answer = $(this)
              [_0x484860(0x10d)](_0x484860(0x1fe))
              ["data"]("go-to")),
            selections[_0x484860(0x172)]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0x484860(0x172)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0x484860(0xc5)](
                (_0x3aacea) => _0x3aacea[_0x484860(0x21c)] === x,
              )),
              (selections[objIndex][_0x484860(0x1cf)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x484860(0x230)] = x)));
      }),
    logicExtra
      ? ($(steps[x])
          [_0x605ee8(0x1a4)](_0x605ee8(0xe7))
          [_0x605ee8(0x1a4)]("[data-radio-skip]:visible")
          [_0x605ee8(0x21e)]("radio-skip") === !![] ||
          $(steps[x])
            [_0x605ee8(0x1a4)](_0x605ee8(0x184))
            [_0x605ee8(0x21e)](_0x605ee8(0x239)) === !![]) &&
        skip &&
        selections["filter"]((_0x3bbc68) => _0x3bbc68["step"] === x)["length"] >
          0x0 &&
        textareaLength === 0x0 &&
        textInputLength === 0x0 &&
        emailInputLength === 0x0 &&
        checkboxInputLength === 0x0 &&
        setTimeout(
          function () {
            (next = !![]), nextStep(), selectionQuiz();
          },
          $(steps[x])
            ["find"](_0x605ee8(0x137))
            [_0x605ee8(0x21e)]("radio-delay"),
        )
      : $(steps[x])
          [_0x605ee8(0x1a4)]("[data-radio-skip]:visible")
          [_0x605ee8(0x21e)]("radio-skip") === !![] &&
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
            [_0x605ee8(0x1a4)](_0x605ee8(0x137))
            [_0x605ee8(0x21e)](_0x605ee8(0x1ef)),
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
  const _0x40563f = _0x270fbf;
  $(_0x40563f(0x216))[_0x40563f(0x22a)](),
    unfilledArr[_0x40563f(0x225)] > 0x0 &&
      unfilledArr[_0x40563f(0x143)](function (_0x1b8049) {
        const _0x311412 = _0x40563f;
        $(_0x311412(0x167) + _0x1b8049[_0x311412(0x17a)] + "\x22]")
          [_0x311412(0x102)]("[data-text=\x22error-message\x22]")
          [_0x311412(0x1da)](),
          $(_0x311412(0x167) + _0x1b8049["input"] + "\x22]")
            [_0x311412(0x10d)]()
            ["children"](_0x311412(0x216))
            [_0x311412(0x1da)](),
          $(_0x311412(0xcb) + _0x1b8049[_0x311412(0x17a)] + "\x22]")
            ["siblings"](_0x311412(0x216))
            [_0x311412(0x1da)](),
          $(_0x311412(0xeb) + _0x1b8049[_0x311412(0x17a)] + "\x22]")
            [_0x311412(0x102)]("[data-text=\x22error-message\x22]")
            ["fadeIn"]();
      });
}

function resetInputErrorMessage(_0x52886f) {
  const _0x4ae45b = _0x270fbf;
  $(_0x4ae45b(0x167) + _0x52886f + "\x22]")
    [_0x4ae45b(0x102)](_0x4ae45b(0x216))
    [_0x4ae45b(0x22a)](),
    $(_0x4ae45b(0x167) + _0x52886f + "\x22]")
      [_0x4ae45b(0x10d)]()
      [_0x4ae45b(0x14f)]("[data-text=\x22error-message\x22]")
      [_0x4ae45b(0x22a)](),
    $(_0x4ae45b(0xcb) + _0x52886f + "\x22]")
      [_0x4ae45b(0x102)](_0x4ae45b(0x216))
      [_0x4ae45b(0x22a)](),
    $("select[name=\x22" + _0x52886f + "\x22]")
      [_0x4ae45b(0x102)]("[data-text=\x22error-message\x22]")
      [_0x4ae45b(0x22a)]();
}

function increaseCurstep() {
  const _0xc4eb1d = _0x270fbf;
  countCard
    ? ((curStep = curStep + 0x1),
      $(_0xc4eb1d(0xf5))[_0xc4eb1d(0x18b)](steps[_0xc4eb1d(0x225)]))
    : $(steps[x])["data"]("card")
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    $(_0xc4eb1d(0x153))["text"](curStep);
}

function decreaseCurstep() {
  const _0x78b34f = _0x270fbf;
  countCard
    ? ((curStep = curStep - 0x1),
      $(_0x78b34f(0xf5))["text"](steps[_0x78b34f(0x225)]))
    : $(steps[x])[_0x78b34f(0x21e)](_0x78b34f(0x19b))
      ? (curStep = curStep - 0x0)
      : (curStep = curStep - 0x1),
    $("[data-text=\x22current-step\x22]")[_0x78b34f(0x18b)](curStep);
}
$(_0x270fbf(0x1f9))["on"]("click", function (_0x1b2003) {
  const _0x24448c = _0x270fbf;
  $(this)[_0x24448c(0x21e)](_0x24448c(0x116)) &&
    (redirectTo = $(this)[_0x24448c(0x21e)](_0x24448c(0x116))),
    !$(this)["data"](_0x24448c(0x211)) &&
      (newTab = $(this)[_0x24448c(0x21e)](_0x24448c(0x211))),
    (successCard = $(this)[_0x24448c(0x21e)](_0x24448c(0x1b6))),
    _0x1b2003["preventDefault"](),
    _0x1b2003[_0x24448c(0x1f2)](),
    logicExtra &&
      ($(this)[_0x24448c(0x1a9)](_0x24448c(0x1d7), !![]),
      $(steps)
        [_0x24448c(0x1a4)](_0x24448c(0xd7))
        [_0x24448c(0x1a9)](_0x24448c(0x1a7), ![])),
    localStorage["removeItem"]("filledInput"),
    fill
      ? ($(this)[_0x24448c(0x21e)](_0x24448c(0x1cc))
          ? (console[_0x24448c(0xe3)](
              $(this)[_0x24448c(0x21e)](_0x24448c(0x1cc)),
            ),
            $(this)["text"]($(this)[_0x24448c(0x21e)](_0x24448c(0x1cc))))
          : $(this)
              [_0x24448c(0x16c)](_0x24448c(0x235))
              [_0x24448c(0x18b)]("Please\x20wait..."),
        $(_0x24448c(0x1d8))[_0x24448c(0x130)](),
        $(_0x24448c(0x112))[_0x24448c(0x225)] > 0x0 &&
          grecaptcha["getResponse"]()[_0x24448c(0x225)] === 0x0 &&
          (form[_0x24448c(0x1a4)](_0x24448c(0x1f9))["text"](oldSubmitText),
          form[_0x24448c(0x1a4)](_0x24448c(0x1f9))["val"](oldSubmitText)),
        customError && $("[data-text=\x22error-message\x22]")["hide"]())
      : customError && displayErrorMessage();
});

function nextStep() {
  const _0x4223fd = _0x270fbf;
  customError
    ? ($(_0x4223fd(0x216))[_0x4223fd(0x22a)](),
      fill
        ? (x++,
          increaseCurstep(),
          (progress = x),
          x <= steps[_0x4223fd(0x225)] - 0x1 &&
            (updateStep(), memory && saveFilledInput()))
        : displayErrorMessage())
    : (x++,
      increaseCurstep(),
      x > progress && (progress = x),
      x <= steps[_0x4223fd(0x225)] - 0x1 &&
        (updateStep(), memory && saveFilledInput())),
    andLogic();
}

function backStep() {
  const _0x3e906a = _0x270fbf;
  customError && $(_0x3e906a(0x216))[_0x3e906a(0x22a)](),
    decreaseCurstep(),
    x > 0x0 &&
      ($(progressbar[x])[_0x3e906a(0x159)](_0x3e906a(0x1f8)),
      selections[_0x3e906a(0x150)](
        (_0x3a61d9) => _0x3a61d9[_0x3e906a(0x1cf)] === x,
      )[_0x3e906a(0x225)] > 0x0
        ? (x = parseInt(
            getSafe(
              () =>
                selections[_0x3e906a(0x150)](
                  (_0x2e0f37) => _0x2e0f37[_0x3e906a(0x1cf)] === x,
                )[0x0][_0x3e906a(0x230)],
            ),
          ))
        : x--,
      updateStep()),
    ($(steps[x])
      [_0x3e906a(0x1a4)](_0x3e906a(0x165))
      [_0x3e906a(0x21e)](_0x3e906a(0x239)) === !![] ||
      $(steps[x])
        [_0x3e906a(0x1a4)](_0x3e906a(0xe7))
        [_0x3e906a(0x1a4)]("[data-radio-skip]:visible")
        [_0x3e906a(0x21e)]("radio-skip") === !![] ||
      $(steps[x])
        [_0x3e906a(0x1a4)](_0x3e906a(0x184))
        [_0x3e906a(0x21e)](_0x3e906a(0x239)) === !![]) &&
      ((all_data = all_data["filter"](
        (_0x492e21) =>
          _0x492e21["field"] !==
          $(steps[x])
            [_0x3e906a(0x1a4)](_0x3e906a(0x223))
            [_0x3e906a(0x164)](_0x3e906a(0x14b)),
      )),
      $(
        "[data-input-field=\x22" +
          $(steps[x])
            [_0x3e906a(0x1a4)]("input[type=\x22radio\x22]:checked")
            [_0x3e906a(0x164)](_0x3e906a(0x14b)) +
          "\x22]",
      )["hide"](),
      $(steps[x])
        [_0x3e906a(0x1a4)]("input[type=\x22radio\x22]")
        [_0x3e906a(0x1a9)](_0x3e906a(0x1ad), ![]),
      $(steps[x])
        [_0x3e906a(0x1a4)](_0x3e906a(0x126))
        [_0x3e906a(0x159)](_0x3e906a(0x1d6)),
      validation());
}
weightedSelectionRange &&
  $(_0x270fbf(0x10e))["each"](function () {
    const _0x424b6e = _0x270fbf;
    $(this)[_0x424b6e(0x12b)](
      _0x424b6e(0x179) +
        $(this)[_0x424b6e(0x21e)]("selection") +
        _0x424b6e(0x1cd),
    );
  });

function selectionQuiz() {
  const _0x499db3 = _0x270fbf;
  if ($(this)[_0x499db3(0x1a4)](_0x499db3(0x1ce))) {
    $(_0x499db3(0x10e))[_0x499db3(0x22a)](),
      $(_0x499db3(0x16f))[_0x499db3(0x22a)]();
    if (weightedSelection) {
      (selTotal = 0x0),
        selArr[_0x499db3(0x143)](function (_0x2451d0) {
          const _0x3fd935 = _0x499db3;
          selTotal = selTotal + _0x2451d0[_0x3fd935(0x13f)];
        }),
        $(_0x499db3(0x1d2))[_0x499db3(0x18b)](selTotal);
      if ($(_0x499db3(0x22b) + selTotal + "\x22]")[_0x499db3(0x225)] > 0x0)
        $("[data-selection=\x22" + selTotal + "\x22]")["fadeIn"]();
      else
        $(_0x499db3(0x10c) + selTotal + ")")
          ? $(_0x499db3(0x10c) + selTotal + ")")
              [_0x499db3(0x163)](_0x499db3(0x10e))
              ["eq"](0x0)
              [_0x499db3(0x180)]()
          : $(_0x499db3(0x101))[_0x499db3(0x1da)]();
    } else {
      let _0x366e7d = -0x1;
      $(_0x499db3(0x10e))["each"](function (_0x4023e6) {
        const _0x47cea2 = _0x499db3;
        $($(_0x47cea2(0x10e))[_0x4023e6])
          ["data"](_0x47cea2(0xda))
          ["includes"](selString[_0x47cea2(0x119)]()) &&
          (_0x366e7d = _0x4023e6);
      }),
        _0x366e7d > -0x1
          ? $($(_0x499db3(0x10e))[_0x366e7d])[_0x499db3(0x1da)]()
          : $("[data-selection=\x22other\x22]")[_0x499db3(0x1da)]();
    }
  }
}

function triggerInputAllData() {
  const _0x3505d8 = _0x270fbf;
  if (savedFilledInput && memory)
    savedFilledInput["forEach"]((_0xd20a37) => {
      const _0x24d1ed = _0x2393;
      var _0x4ee529 = $(
          _0x24d1ed(0x167) +
            _0xd20a37[_0x24d1ed(0x106)] +
            _0x24d1ed(0x1de) +
            _0xd20a37[_0x24d1ed(0x10b)] +
            _0x24d1ed(0x23a),
        ),
        _0x1214eb = $(
          _0x24d1ed(0x167) +
            _0xd20a37[_0x24d1ed(0x106)] +
            "\x22]:not([data-prefill=\x22false\x22])",
        ),
        _0x3bd825 = $(
          _0x24d1ed(0xcb) + _0xd20a37[_0x24d1ed(0x106)] + _0x24d1ed(0x23a),
        ),
        _0x377218 = $(_0x24d1ed(0x1b3) + _0xd20a37["inputName"] + "\x22]"),
        _0x389efe = $(
          _0x24d1ed(0x162) +
            _0xd20a37[_0x24d1ed(0x106)] +
            "\x22][value=\x22" +
            _0xd20a37[_0x24d1ed(0x10b)] +
            _0x24d1ed(0x23a),
        );
      if (_0x4ee529[_0x24d1ed(0x164)](_0x24d1ed(0x109)) !== _0x24d1ed(0x133)) {
        if (
          _0x4ee529[_0x24d1ed(0x164)](_0x24d1ed(0x109)) === _0x24d1ed(0x1c8) &&
          !_0x4ee529[_0x24d1ed(0x10d)]("[data-radio-skip]")[_0x24d1ed(0x21e)](
            "radio-skip",
          )
        )
          _0x4ee529[_0x24d1ed(0x1bd)](),
            _0x4ee529["siblings"](_0x24d1ed(0xec))[_0x24d1ed(0xce)](
              _0x24d1ed(0x1d6),
            ),
            _0x4ee529[_0x24d1ed(0xc7)]("input");
        else
          _0xd20a37[_0x24d1ed(0x10b)] === "on"
            ? (_0x1214eb["click"](),
              _0x1214eb[_0x24d1ed(0x102)](_0x24d1ed(0x1b8))[_0x24d1ed(0xce)](
                _0x24d1ed(0x1d6),
              ),
              _0x1214eb["trigger"](_0x24d1ed(0x17a)))
            : (_0x1214eb[_0x24d1ed(0x16c)](_0xd20a37[_0x24d1ed(0x10b)]),
              _0x3bd825[_0x24d1ed(0x16c)](_0xd20a37["value"]),
              $(_0x24d1ed(0xd4))
                [_0x24d1ed(0x1a4)](
                  _0x24d1ed(0x227) + _0xd20a37[_0x24d1ed(0x10b)] + "\x22]",
                )
                [_0x24d1ed(0x1a9)](_0x24d1ed(0x13f), !![]),
              _0x1214eb[_0x24d1ed(0xc7)](_0x24d1ed(0x17a)),
              _0x1214eb[_0x24d1ed(0xc7)]("change"));
        const _0xc9bc68 = _0x389efe[_0x24d1ed(0x21e)](_0x24d1ed(0x18a)),
          _0xb8c314 = _0x377218[_0x24d1ed(0x21e)](_0x24d1ed(0x18a));
        _0x389efe[_0x24d1ed(0x163)]()["addClass"](_0xc9bc68),
          _0x377218[_0x24d1ed(0x163)]()[_0x24d1ed(0xce)](_0xb8c314);
      }
    });
  else
    _params &&
      (getParams(),
      searchQ[_0x3505d8(0x143)]((_0xa86a2) => {
        const _0x17ab22 = _0x3505d8;
        if (
          $(
            _0x17ab22(0x167) +
              _0xa86a2["inputName"] +
              _0x17ab22(0x1de) +
              _0xa86a2[_0x17ab22(0x10b)] +
              _0x17ab22(0x23a),
          )[_0x17ab22(0x164)](_0x17ab22(0x109)) !== "file"
        ) {
          if (
            $(
              _0x17ab22(0x167) +
                _0xa86a2[_0x17ab22(0x226)] +
                _0x17ab22(0x1de) +
                _0xa86a2[_0x17ab22(0x16c)] +
                _0x17ab22(0x23a),
            )[_0x17ab22(0x164)](_0x17ab22(0x109)) === _0x17ab22(0x1c8)
          )
            $(
              "input[name=\x22" +
                _0xa86a2[_0x17ab22(0x226)] +
                _0x17ab22(0x1de) +
                _0xa86a2[_0x17ab22(0x16c)] +
                _0x17ab22(0x23a),
            )[_0x17ab22(0x1bd)](),
              $(
                _0x17ab22(0x167) +
                  _0xa86a2[_0x17ab22(0x226)] +
                  "\x22][value=\x22" +
                  _0xa86a2[_0x17ab22(0x16c)] +
                  _0x17ab22(0x23a),
              )
                [_0x17ab22(0x102)](_0x17ab22(0xec))
                [_0x17ab22(0xce)](_0x17ab22(0x1d6)),
              $(
                _0x17ab22(0x167) +
                  _0xa86a2[_0x17ab22(0x226)] +
                  _0x17ab22(0x1de) +
                  _0xa86a2[_0x17ab22(0x16c)] +
                  _0x17ab22(0x23a),
              )[_0x17ab22(0xc7)](_0x17ab22(0x17a));
          else
            _0xa86a2["val"] === "on"
              ? ($(
                  "input[name=\x22" +
                    _0xa86a2[_0x17ab22(0x226)] +
                    "\x22]:not([data-prefill=\x22false\x22])",
                )[_0x17ab22(0x1bd)](),
                $(
                  _0x17ab22(0x167) +
                    _0xa86a2[_0x17ab22(0x226)] +
                    "\x22]:not([data-prefill=\x22false\x22])",
                )
                  [_0x17ab22(0x102)](_0x17ab22(0x1b8))
                  [_0x17ab22(0xce)](_0x17ab22(0x1d6)),
                $(_0x17ab22(0x167) + _0xa86a2[_0x17ab22(0x226)] + "\x22]")[
                  _0x17ab22(0xc7)
                ](_0x17ab22(0x17a)))
              : ($(
                  _0x17ab22(0x167) +
                    _0xa86a2[_0x17ab22(0x226)] +
                    _0x17ab22(0x23a),
                )["val"](_0xa86a2[_0x17ab22(0x16c)]),
                $(
                  "textarea[name=\x22" +
                    _0xa86a2[_0x17ab22(0x226)] +
                    _0x17ab22(0x23a),
                )["val"](_0xa86a2[_0x17ab22(0x16c)]),
                $(_0x17ab22(0xeb) + _0xa86a2["key"] + _0x17ab22(0x23a))
                  [_0x17ab22(0x1a4)](
                    _0x17ab22(0x227) + _0xa86a2[_0x17ab22(0x16c)] + "\x22]",
                  )
                  [_0x17ab22(0x1a9)](_0x17ab22(0x13f), !![]),
                $(
                  "input[name=\x22" +
                    _0xa86a2[_0x17ab22(0x226)] +
                    _0x17ab22(0x23a),
                )[_0x17ab22(0xc7)](_0x17ab22(0x17a)),
                $(_0x17ab22(0x167) + _0xa86a2["key"] + _0x17ab22(0x23a))[
                  _0x17ab22(0xc7)
                ]("change"));
        }
      }));
}
$(_0x270fbf(0xe8))["on"](_0x270fbf(0x1bd), function () {
  (next = !![]), nextStep(), selectionQuiz();
}),
  $(_0x270fbf(0x147))["on"](_0x270fbf(0x1bd), function () {
    (next = ![]), (back = !![]), backStep();
  }),
  $(steps)
    [_0x270fbf(0x1a4)](_0x270fbf(0xd7))
    ["not"](_0x270fbf(0x111))
    ["on"](_0x270fbf(0x17a), function (_0x47dae7) {
      validation(), andLogic(), addClickClass();
    }),
  $(steps)
    [_0x270fbf(0x1a4)](_0x270fbf(0x208))
    ["on"]("click", function () {
      (skip = !![]), validation(), addClickClass();
    });
$("[data-clickable-all]")["data"](_0x270fbf(0xe2))
  ? $(_0x270fbf(0x188))["removeClass"](_0x270fbf(0x122))
  : $("[data-form=\x22custom-progress-indicator\x22]")["addClass"](
      _0x270fbf(0x122),
    );

function clickableIndicator() {
  const _0x198791 = _0x270fbf;
  $("[data-clickable]")[_0x198791(0x21e)](_0x198791(0x11f)) &&
    ($(_0x198791(0x17e))[_0x198791(0x159)](_0x198791(0x1f8)),
    $(_0x198791(0x20a))[_0x198791(0x21e)]("clickable-all")
      ? ((x = $(this)[_0x198791(0x20f)]()), updateStep())
      : $(this)["index"]() <= progress &&
        ((x = $(this)["index"]()), updateStep())),
    $(_0x198791(0x153))["text"](x + 0x1);
}
$("[data-form=\x22custom-progress-indicator\x22]")["on"](
  _0x270fbf(0x1bd),
  clickableIndicator,
);
$(_0x270fbf(0x1d8))[_0x270fbf(0x21e)](_0x270fbf(0x21d)) &&
  ($(_0x270fbf(0x1fe))[_0x270fbf(0x194)](function () {
    const _0x5b78d6 = _0x270fbf;
    $(this)[_0x5b78d6(0x12b)](
      _0x5b78d6(0xc9),
      $(this)["data"](_0x5b78d6(0x156)),
    );
  }),
  $("[data-answer]")[_0x270fbf(0x194)](function () {
    const _0x1f6286 = _0x270fbf;
    $(this)[_0x1f6286(0x12b)](
      "<br>Data\x20Answer\x20=\x20",
      $(this)[_0x1f6286(0x21e)](_0x1f6286(0x18e)),
    );
  }));

function resetFormly() {
  const _0x1677c6 = _0x270fbf;
  $("[data-form=\x22multistep\x22]")[_0x1677c6(0xc7)](_0x1677c6(0x11c)),
    $(_0x1677c6(0x1d8))[_0x1677c6(0x10d)]()["find"](".w-form-done")["hide"](),
    (x = 0x0),
    updateStep(),
    $(_0x1677c6(0x1d8))[_0x1677c6(0x180)](),
    $(_0x1677c6(0x1f9))["text"](oldSubmitText),
    $(_0x1677c6(0x1f9))[_0x1677c6(0x16c)](oldSubmitText),
    $("[data-text=\x22current-step\x22]")[_0x1677c6(0x18b)](0x1),
    $("[data-form=\x22multistep\x22]")
      [_0x1677c6(0x1a4)](_0x1677c6(0x1ea))
      [_0x1677c6(0x102)](_0x1677c6(0x1b8))
      [_0x1677c6(0x159)](_0x1677c6(0x1d6));
}
$(document)[_0x270fbf(0x214)](function (_0x21b42a, _0x296fc5, _0x93cca4) {
  const _0x25c821 = _0x270fbf;
  if (_0x93cca4[_0x25c821(0x141)]["includes"](_0x25c821(0x110))) {
    const _0x3b3dbe = _0x296fc5["status"] === 0xc8,
      _0x59a7ee = _0x25c821(0x12e);
    redirectTo &&
      _0x3b3dbe &&
      (newTab
        ? window[_0x25c821(0xf0)](redirectTo, "_blank")
        : setTimeout(() => {
            location["href"] = redirectTo;
          }, redirectDelay)),
      _0x3b3dbe &&
        successCard !== "" &&
        $(_0x25c821(0x1fa) + successCard + "\x22]")["fadeIn"](),
      _0x3b3dbe &&
        formReset &&
        setTimeout(() => {
          resetFormly();
        }, resetDelay),
      !_0x3b3dbe &&
        ($(_0x25c821(0x1f9))[_0x25c821(0x16c)](_0x25c821(0x235)),
        $(_0x25c821(0x1f9))[_0x25c821(0x18b)](_0x25c821(0x235)));
  }
}),
  $(_0x270fbf(0xef))["on"]("click", function () {
    const _0x522d10 = _0x270fbf;
    var _0x14a4c1 = $(this)
      [_0x522d10(0x163)]()
      [_0x522d10(0x1a4)]("[data-input-field]")
      [_0x522d10(0x21e)]("input-field");
    setTimeout(function () {
      const _0xf71081 = _0x522d10;
      $(_0xf71081(0x167) + _0x14a4c1 + "\x22]")[_0xf71081(0x1a1)]();
    }, 0x64),
      (back = !![]),
      (x = $(this)["data"]("edit-step") - 0x1),
      updateStep(),
      countCard
        ? ((curStep = x + 0x1),
          $("[data-text=\x22total-steps\x22]")["text"](steps[_0x522d10(0x225)]))
        : $(steps[x])[_0x522d10(0x21e)](_0x522d10(0x19b))
          ? (curStep = x + 0x0)
          : (curStep = x + 0x1),
      $(_0x522d10(0x153))[_0x522d10(0x18b)](curStep),
      (back = ![]);
  }),
  $(_0x270fbf(0x148))["on"](_0x270fbf(0x1bd), function () {
    const _0x5156ea = _0x270fbf;
    $(_0x5156ea(0x1d8))[_0x5156ea(0xc7)](_0x5156ea(0x11c));
    let _0x15db69 = $(this);
    $(this)[_0x5156ea(0x18b)](_0x5156ea(0x235)),
      setTimeout(function () {
        const _0x37e0a7 = _0x5156ea;
        $(_0x15db69)[_0x37e0a7(0x18b)](oldResetText),
          $(_0x15db69)["parents"](_0x37e0a7(0x1dc))[_0x37e0a7(0x22a)](),
          (x = 0x0),
          updateStep(),
          $(_0x37e0a7(0x1d8))["show"](),
          $(_0x37e0a7(0x1f9))["text"](oldSubmitText),
          $(_0x37e0a7(0x1f9))["val"](oldSubmitText),
          $(_0x15db69)[_0x37e0a7(0x16c)](oldSubmitText),
          $("[data-text=\x22current-step\x22]")["text"](0x1),
          $(_0x37e0a7(0x1d8))
            ["find"]("input:checkbox")
            [_0x37e0a7(0x102)](_0x37e0a7(0x1b8))
            [_0x37e0a7(0x159)](_0x37e0a7(0x1d6));
      }, resetDelay);
  }),
  $(_0x270fbf(0x234))["on"]("keypress", function (_0x2e458a) {
    const _0x220581 = _0x270fbf;
    if (_0x2e458a["keyCode"] === 0xd) {
      _0x2e458a[_0x220581(0x215)](), _0x2e458a[_0x220581(0x1f2)]();
      if ($(steps[x])[_0x220581(0x1a4)](_0x220581(0x1aa))["is"](":focus"))
        $(steps[x])
          [_0x220581(0x1a4)](_0x220581(0x11e))
          [_0x220581(0x16c)](
            $(steps[x])
              [_0x220581(0x1a4)](_0x220581(0x11e))
              [_0x220581(0x16c)]() + "\x0a",
          );
      else
        $(_0x220581(0x14a))["data"]("enter") &&
          fill &&
          totalSteps > curStep &&
          $(_0x220581(0xe8))[0x0][_0x220581(0x1bd)]();
    }
  }),
  $(_0x270fbf(0x234))[_0x270fbf(0x1e5)](function (_0x47804b) {
    const _0x531612 = _0x270fbf;
    (_0x47804b[_0x531612(0x1f7)] || _0x47804b["ctrlKey"]) &&
      _0x47804b[_0x531612(0x18d)] == 0xd &&
      (x >= steps["length"] - 0x1 && fill
        ? $(steps[x])[_0x531612(0x1a4)](_0x531612(0x178))["click"]()
        : (_0x47804b[_0x531612(0x215)](), _0x47804b[_0x531612(0x1f2)]()));
  }),
  $(_0x270fbf(0x1d8))
    ["find"](_0x270fbf(0xd7))
    ["on"](_0x270fbf(0x15b), function () {
      const _0x284969 = _0x270fbf;
      (all_data = all_data["filter"](
        (_0x1b55f2) =>
          _0x1b55f2[_0x284969(0x19d)] !== $(this)[_0x284969(0x164)]("name"),
      )),
        $(this)[_0x284969(0x164)](_0x284969(0x109)) === _0x284969(0x15e)
          ? $(this)["is"](":checked")
            ? all_data[_0x284969(0x172)]({
                field: $(this)[_0x284969(0x164)](_0x284969(0x14b)),
                value: $(this)["siblings"]("span")[_0x284969(0x18b)](),
              })
            : $(_0x284969(0x221) + $(this)[_0x284969(0x164)]("name") + "\x22]")[
                _0x284969(0x22a)
              ]()
          : (all_data[_0x284969(0x172)]({
              field: $(this)["attr"](_0x284969(0x14b)),
              value: $(this)[_0x284969(0x16c)](),
            }),
            $(this)[_0x284969(0x16c)]() !== "" &&
              resetInputErrorMessage(
                $(this)[_0x284969(0x164)](_0x284969(0x14b)),
              )),
        all_data["forEach"](function (_0x4fcf5f) {
          const _0x3fcda2 = _0x284969;
          $(_0x3fcda2(0x221) + _0x4fcf5f["field"] + "\x22]")[
            _0x3fcda2(0x180)
          ](),
            $(_0x3fcda2(0x221) + _0x4fcf5f["field"] + "\x22]")["text"](
              _0x4fcf5f[_0x3fcda2(0x10b)],
            );
        });
    }),
  $(_0x270fbf(0x1d8))
    [_0x270fbf(0x1a4)](_0x270fbf(0x1aa))
    ["on"](_0x270fbf(0x15b), function () {
      const _0x5a290e = _0x270fbf;
      $(this)[_0x5a290e(0x16c)]() !== "" &&
        resetInputErrorMessage($(this)[_0x5a290e(0x164)](_0x5a290e(0x14b))),
        (all_data = all_data[_0x5a290e(0x150)](
          (_0x52a5b8) =>
            _0x52a5b8[_0x5a290e(0x19d)] !==
            $(this)[_0x5a290e(0x164)](_0x5a290e(0x14b)),
        )),
        all_data[_0x5a290e(0x172)]({
          field: $(this)[_0x5a290e(0x164)](_0x5a290e(0x14b)),
          value: $(this)[_0x5a290e(0x16c)](),
        }),
        all_data["forEach"](function (_0x5575db) {
          const _0x24e660 = _0x5a290e;
          $("[data-input-field=\x22" + _0x5575db[_0x24e660(0x19d)] + "\x22]")[
            _0x24e660(0x180)
          ](),
            $("[data-input-field=\x22" + _0x5575db["field"] + "\x22]")[
              _0x24e660(0x18b)
            ](_0x5575db[_0x24e660(0x10b)]);
        });
    }),
  $("[data-form=\x22multistep\x22]")
    ["find"](_0x270fbf(0x191))
    ["on"](_0x270fbf(0x15b), function () {
      const _0x1712c8 = _0x270fbf;
      $(this)[_0x1712c8(0x16c)]() !== "" &&
        resetInputErrorMessage($(this)["attr"](_0x1712c8(0x14b)));
      var _0x1efeef = $(this)[_0x1712c8(0x21e)](_0x1712c8(0x1e3));
      (all_data = all_data[_0x1712c8(0x150)](
        (_0x9067ae) =>
          _0x9067ae[_0x1712c8(0x19d)] !==
          $(this)[_0x1712c8(0x164)](_0x1712c8(0x14b)),
      )),
        all_data["push"]({
          field: $(this)[_0x1712c8(0x164)](_0x1712c8(0x14b)),
          value: _0x1efeef
            ? $(this)[_0x1712c8(0x1a4)](_0x1712c8(0x241))[_0x1712c8(0x18b)]()
            : $(this)[_0x1712c8(0x16c)](),
        }),
        all_data[_0x1712c8(0x143)](function (_0x38c945) {
          const _0x2828d1 = _0x1712c8;
          $(_0x2828d1(0x221) + _0x38c945[_0x2828d1(0x19d)] + "\x22]")[
            _0x2828d1(0x180)
          ](),
            $("[data-input-field=\x22" + _0x38c945[_0x2828d1(0x19d)] + "\x22]")[
              _0x2828d1(0x18b)
            ](_0x38c945[_0x2828d1(0x10b)]);
        });
    }),
  updateStep(),
  triggerInputAllData(),
  $("[data-cms-select=cms]")[_0x270fbf(0x194)](function () {
    const _0x2bf508 = _0x270fbf,
      _0x43fbfa = $(this)["find"](_0x2bf508(0xed)),
      _0x2544c3 = [];
    _0x43fbfa[_0x2bf508(0x194)](function () {
      const _0x1a616a = _0x2bf508;
      _0x2544c3[_0x1a616a(0x172)](
        $(this)[_0x1a616a(0x18b)]()[_0x1a616a(0x20d)](),
      );
    });
    const _0xda9792 = $(this)[_0x2bf508(0x102)]("[data-cms-select=input]");
    $[_0x2bf508(0x194)](_0x2544c3, function (_0x972ac6, _0x3edc3b) {
      const _0x22c6ae = _0x2bf508,
        _0x2b9d45 = $("<option>")
          [_0x22c6ae(0x16c)](_0x3edc3b)
          [_0x22c6ae(0x18b)](_0x3edc3b);
      _0xda9792[_0x22c6ae(0x12b)](_0x2b9d45);
    });
  });

function cloneRemove() {
  const _0x2878e5 = _0x270fbf;
  $(_0x2878e5(0x238))[_0x2878e5(0x194)](function () {
    const _0x476cb7 = _0x2878e5;
    $(this)[_0x476cb7(0x1a4)](_0x476cb7(0x200))["length"] < 0x2
      ? $(this)[_0x476cb7(0x1a4)](_0x476cb7(0x1be))[_0x476cb7(0x22a)]()
      : $(this)[_0x476cb7(0x1a4)](_0x476cb7(0x1be))[_0x476cb7(0x180)]();
  });
}

function cloneRemoveInput() {
  const _0x45707d = _0x270fbf;
  $("[data-clone-input-wrapper]")[_0x45707d(0x194)](function () {
    const _0x4d1a30 = _0x45707d;
    console[_0x4d1a30(0xe3)](
      $(this)[_0x4d1a30(0x1a4)](_0x4d1a30(0x218))[_0x4d1a30(0x225)],
    ),
      $(this)["find"]("[data-clone-input]")[_0x4d1a30(0x225)] < 0x2
        ? $(this)
            [_0x4d1a30(0x1a4)]("[data-form=\x22remove-input-clone\x22]")
            ["hide"]()
        : $(this)
            ["find"]("[data-form=\x22remove-input-clone\x22]")
            [_0x4d1a30(0x180)]();
  });
}
$("[data-form=\x22remove-clone\x22]")["on"](_0x270fbf(0x1bd), function () {
  const _0x433c53 = _0x270fbf,
    _0x5293b2 =
      $(this)[_0x433c53(0x10d)](_0x433c53(0x200))[_0x433c53(0x225)] > 0x0
        ? $(this)["parents"](_0x433c53(0x200))[_0x433c53(0x20f)]()
        : $(this)[_0x433c53(0x10d)](_0x433c53(0x107))[_0x433c53(0x20f)](),
    _0x37aa87 =
      $(this)["parents"](_0x433c53(0x200))["length"] > 0x0
        ? $(this)[_0x433c53(0x10d)]("[data-clone]")[_0x433c53(0x21e)]("clone")
        : $(this)
            [_0x433c53(0x10d)](_0x433c53(0x107))
            [_0x433c53(0x21e)](_0x433c53(0xd0));
  $(_0x433c53(0x173) + _0x37aa87 + "\x22]")
    ["eq"](_0x5293b2)
    ["remove"](),
    $("[data-display=\x22" + _0x37aa87 + "\x22]")
      ["eq"](_0x5293b2)
      [_0x433c53(0x199)](),
    cloneRemove();
  let _0x1d14c5 = $(_0x433c53(0x1a0) + _0x37aa87 + "\x22]")[_0x433c53(0x21e)](
      "add-new-limit",
    ),
    _0x4cb0d3 = $(_0x433c53(0x173) + _0x37aa87 + "\x22]")[_0x433c53(0x225)];
  console[_0x433c53(0xe3)](_0x4cb0d3, _0x1d14c5),
    _0x4cb0d3 < _0x1d14c5 &&
      (console[_0x433c53(0xe3)](_0x433c53(0x180)),
      $(_0x433c53(0x1a0) + _0x37aa87 + "\x22]")[_0x433c53(0x180)]()),
    validation();
}),
  $("[data-form=\x22remove-input-clone\x22]")["on"](
    _0x270fbf(0x1bd),
    function () {
      const _0x40fdd9 = _0x270fbf;
      let _0x2030c7 = $(this)
          [_0x40fdd9(0x102)]()
          [_0x40fdd9(0x164)](_0x40fdd9(0x14b)),
        _0x24059f = $(this)
          ["parents"](_0x40fdd9(0x218))
          [_0x40fdd9(0x21e)](_0x40fdd9(0xf9));
      $(this)[_0x40fdd9(0x163)](_0x40fdd9(0x218))[_0x40fdd9(0x199)](),
        $(_0x40fdd9(0x221) + _0x2030c7 + "\x22]")
          [_0x40fdd9(0x163)](_0x40fdd9(0x121))
          [_0x40fdd9(0x199)]();
      let _0x40bce4 = $(_0x40fdd9(0x23e) + _0x24059f + "\x22]")[
          _0x40fdd9(0x21e)
        ](_0x40fdd9(0x1ec)),
        _0x198f2a = $(_0x40fdd9(0x1fd) + _0x24059f + "\x22]")["length"];
      _0x198f2a < _0x40bce4 &&
        $(_0x40fdd9(0x23e) + _0x24059f + "\x22]")["show"](),
        validation();
    },
  ),
  $(_0x270fbf(0x16b))["on"]("click", function () {
    const _0x5c02f0 = _0x270fbf;
    let _0x1b6369 = $(this)["data"](_0x5c02f0(0x155)),
      _0x309cde = $(this)[_0x5c02f0(0x21e)](_0x5c02f0(0x104));
    var _0x553840 = $(_0x5c02f0(0x173) + _0x1b6369 + "\x22]")
        ["eq"](0x0)
        [_0x5c02f0(0x160)](!![]),
      _0x4acfd8 = $(_0x5c02f0(0x206) + _0x1b6369 + "\x22]")
        ["eq"](0x0)
        ["clone"](!![]);
    let _0x924980 = "";
    $(this)["find"](_0x5c02f0(0x1be))[_0x5c02f0(0x180)](),
      cloneRemove(),
      _0x553840[_0x5c02f0(0x1a4)]("[data-clone-input]")
        [_0x5c02f0(0x1a4)](_0x5c02f0(0x17a))
        [_0x5c02f0(0x16c)](""),
      _0x553840[_0x5c02f0(0x1a4)](_0x5c02f0(0x218))
        ["find"](_0x5c02f0(0x191))
        [_0x5c02f0(0x16c)](""),
      _0x553840[_0x5c02f0(0x1a4)](_0x5c02f0(0x218))
        [_0x5c02f0(0x1a4)](_0x5c02f0(0x1aa))
        [_0x5c02f0(0x16c)](""),
      _0x553840["find"]("[data-clone-input]")
        [_0x5c02f0(0x1b9)](":first")
        [_0x5c02f0(0x199)](),
      _0x553840[_0x5c02f0(0x1a4)](_0x5c02f0(0x218))
        [_0x5c02f0(0x1a4)](_0x5c02f0(0x175))
        ["click"](),
      _0x4acfd8[_0x5c02f0(0x1a4)](_0x5c02f0(0x121))
        ["not"](_0x5c02f0(0x17c))
        [_0x5c02f0(0x199)](),
      _0x553840[_0x5c02f0(0x1a4)](_0x5c02f0(0x17a))["each"](function () {
        const _0x50384d = _0x5c02f0;
        if (
          $(this)[_0x50384d(0x1bb)](_0x50384d(0x218))[_0x50384d(0x225)] > 0x0
        ) {
          let _0x5a5b2d = 0x0;
          const _0x4a6b8a = $(this)
            [_0x50384d(0x1bb)](_0x50384d(0x218))
            [_0x50384d(0x21e)](_0x50384d(0xf9));
          $(_0x50384d(0x1fd) + _0x4a6b8a + _0x50384d(0x131))[_0x50384d(0x194)](
            function () {
              const _0xd9868b = _0x50384d,
                _0x556d7f = $(this)[_0xd9868b(0x164)](_0xd9868b(0x14b));
              if (_0x556d7f && _0x556d7f["startsWith"](_0xd9868b(0xd2))) {
                const _0xaede20 = parseInt(
                  _0x556d7f[_0xd9868b(0x228)]("-")[0x1],
                );
                !isNaN(_0xaede20) &&
                  _0xaede20 > _0x5a5b2d &&
                  (_0x5a5b2d = _0xaede20);
              }
            },
          ),
            _0x5a5b2d++,
            (_0x924980 = this["name"] + "-" + _0x5a5b2d);
        } else
          _0x924980 =
            this[_0x50384d(0x14b)] +
            "-" +
            (parseInt(
              $("[data-clone=\x22" + _0x1b6369 + "\x22]")
                [_0x50384d(0x201)]()
                [_0x50384d(0x20f)](),
            ) +
              0x1);
        $(this)["val"](""),
          $(this)[_0x50384d(0x164)](_0x50384d(0x14b), _0x924980),
          $(this)[_0x50384d(0x164)](_0x50384d(0x183), _0x924980);
      }),
      _0x553840["find"](_0x5c02f0(0x1aa))[_0x5c02f0(0x194)](function () {
        const _0x1c5f58 = _0x5c02f0;
        if (
          $(this)[_0x1c5f58(0x1bb)]("[data-clone-input]")[_0x1c5f58(0x225)] >
          0x0
        ) {
          let _0x44868f = 0x0;
          const _0x3d5506 = $(this)
            ["closest"](_0x1c5f58(0x218))
            [_0x1c5f58(0x21e)](_0x1c5f58(0xf9));
          $(_0x1c5f58(0x1fd) + _0x3d5506 + "\x22]\x20textarea")[
            _0x1c5f58(0x194)
          ](function () {
            const _0x4b915f = _0x1c5f58,
              _0x361da8 = $(this)["attr"]("name");
            if (_0x361da8 && _0x361da8[_0x4b915f(0xe9)]("relationship-")) {
              const _0x107a97 = parseInt(_0x361da8["split"]("-")[0x1]);
              !isNaN(_0x107a97) &&
                _0x107a97 > _0x44868f &&
                (_0x44868f = _0x107a97);
            }
          }),
            _0x44868f++,
            (_0x924980 = this[_0x1c5f58(0x14b)] + "-" + _0x44868f);
        } else
          _0x924980 =
            this[_0x1c5f58(0x14b)] +
            "-" +
            (parseInt(
              $("[data-clone=\x22" + _0x1b6369 + "\x22]")
                [_0x1c5f58(0x201)]()
                ["index"](),
            ) +
              0x1);
        $(this)[_0x1c5f58(0x16c)](""),
          $(this)["attr"](_0x1c5f58(0x14b), _0x924980),
          $(this)[_0x1c5f58(0x164)]("data-name", _0x924980);
      }),
      _0x553840[_0x5c02f0(0x1a4)](_0x5c02f0(0x191))["each"](function () {
        const _0x16952b = _0x5c02f0;
        if (
          $(this)[_0x16952b(0x1bb)]("[data-clone-input]")[_0x16952b(0x225)] >
          0x0
        ) {
          let _0x1b21f3 = 0x0;
          const _0x289aa6 = $(this)
            [_0x16952b(0x1bb)](_0x16952b(0x218))
            [_0x16952b(0x21e)]("clone-input");
          $("[data-clone-input=\x22" + _0x289aa6 + "\x22]\x20select")[
            _0x16952b(0x194)
          ](function () {
            const _0x5425af = _0x16952b,
              _0x425c2b = $(this)["attr"](_0x5425af(0x14b));
            if (_0x425c2b && _0x425c2b[_0x5425af(0xe9)](_0x5425af(0xd2))) {
              const _0xd97249 = parseInt(_0x425c2b["split"]("-")[0x1]);
              !isNaN(_0xd97249) &&
                _0xd97249 > _0x1b21f3 &&
                (_0x1b21f3 = _0xd97249);
            }
          }),
            _0x1b21f3++,
            (_0x924980 = this[_0x16952b(0x14b)] + "-" + _0x1b21f3);
        } else
          _0x924980 =
            this[_0x16952b(0x14b)] +
            "-" +
            (parseInt(
              $("[data-clone=\x22" + _0x1b6369 + "\x22]")
                [_0x16952b(0x201)]()
                [_0x16952b(0x20f)](),
            ) +
              0x1);
        $(this)[_0x16952b(0x16c)](""),
          $(this)["attr"](_0x16952b(0x14b), _0x924980),
          $(this)[_0x16952b(0x164)](_0x16952b(0x183), _0x924980);
      }),
      _0x4acfd8[_0x5c02f0(0x1a4)](_0x5c02f0(0x202))[_0x5c02f0(0x194)](
        function () {
          const _0x39e92c = _0x5c02f0;
          if ($(this)[_0x39e92c(0x21e)](_0x39e92c(0x20e))) {
            let _0x250922 = 0x0;
            const _0x5a894a = $(this)
              [_0x39e92c(0x21e)](_0x39e92c(0x20e))
              [_0x39e92c(0x228)]("-")[0x0];
            $(
              _0x39e92c(0x206) +
                _0x1b6369 +
                _0x39e92c(0x15d) +
                _0x5a894a +
                "\x22]",
            )[_0x39e92c(0x194)](function () {
              const _0x53a03f = _0x39e92c,
                _0x3471af = $(this)["attr"](_0x53a03f(0xcc)),
                _0x855ce2 = parseInt(_0x3471af[_0x53a03f(0x228)]("-")[0x1]);
              !isNaN(_0x855ce2) &&
                _0x855ce2 > _0x250922 &&
                (_0x250922 = _0x855ce2);
            }),
              _0x250922++;
            const _0x31941b = _0x5a894a + "-" + _0x250922;
            $(this)[_0x39e92c(0x164)](_0x39e92c(0xcc), _0x31941b);
          }
        },
      ),
      $("[data-clone-wrapper=\x22" + _0x1b6369 + "\x22]")[_0x5c02f0(0x12b)](
        _0x553840,
      ),
      $(_0x5c02f0(0xee) + _0x1b6369 + "\x22]")["append"](_0x4acfd8),
      $("[data-index=\x22" + _0x1b6369 + "\x22]")["each"](function () {
        const _0x5b45b6 = _0x5c02f0;
        $(this)[_0x5b45b6(0x18b)](
          $(this)
            [_0x5b45b6(0x10d)](_0x5b45b6(0x173) + _0x1b6369 + "\x22]")
            [_0x5b45b6(0x20f)]() + 0x1,
        );
      }),
      $(_0x5c02f0(0xe5) + _0x1b6369 + "\x22]")["each"](function () {
        const _0x137e21 = _0x5c02f0;
        $(this)[_0x137e21(0x18b)](
          $(this)
            ["parents"](_0x137e21(0x206) + _0x1b6369 + "\x22]")
            [_0x137e21(0x20f)]() + 0x1,
        );
      });
    let _0x30a4f1 = $(
      _0x5c02f0(0x1c2) + _0x1b6369 + _0x5c02f0(0x1ba) + _0x1b6369 + "\x22]",
    )[_0x5c02f0(0x225)];
    if (_0x30a4f1 >= _0x309cde) {
      $(this)["hide"]();
      return;
    }
    $(this)["show"](), validation();
  }),
  $(_0x270fbf(0x154))["on"](_0x270fbf(0x1bd), function () {
    const _0x4919bd = _0x270fbf,
      _0x5ea66d = $(this)
        [_0x4919bd(0x10d)](_0x4919bd(0x200))
        [_0x4919bd(0x20f)]();
    let _0x4fe739 = $(this)["data"](_0x4919bd(0x13b));
    var _0x199f82 = $(_0x4919bd(0x1fd) + _0x4fe739 + "\x22]")
        ["eq"](0x0)
        ["clone"](!![]),
      _0x574119 = $(_0x4919bd(0x142) + _0x4fe739 + "\x22]")
        ["eq"](0x0)
        [_0x4919bd(0x160)](!![]);
    let _0x4a4ad8 = $(this)["data"](_0x4919bd(0x1ec)),
      _0x1a39f4 = 0x0;
    $(_0x4919bd(0x1fd) + _0x4fe739 + _0x4919bd(0x131))["each"](function () {
      const _0x4306b8 = $(this)["attr"]("name");
      if (_0x4306b8) {
        const _0x3106dc = parseInt(_0x4306b8["split"]("-")[0x1]);
        !isNaN(_0x3106dc) && _0x3106dc > _0x1a39f4 && (_0x1a39f4 = _0x3106dc);
      }
    }),
      $("[data-clone-input=\x22" + _0x4fe739 + _0x4919bd(0x21b))[
        _0x4919bd(0x194)
      ](function () {
        const _0x432843 = _0x4919bd,
          _0x3630fc = $(this)[_0x432843(0x164)](_0x432843(0x14b));
        if (_0x3630fc) {
          const _0x357047 = parseInt(_0x3630fc[_0x432843(0x228)]("-")[0x1]);
          !isNaN(_0x357047) && _0x357047 > _0x1a39f4 && (_0x1a39f4 = _0x357047);
        }
      }),
      $(_0x4919bd(0x1fd) + _0x4fe739 + _0x4919bd(0x11d))[_0x4919bd(0x194)](
        function () {
          const _0x390231 = _0x4919bd,
            _0x339dd8 = $(this)[_0x390231(0x164)](_0x390231(0x14b));
          if (_0x339dd8) {
            const _0x359a73 = parseInt(_0x339dd8["split"]("-")[0x1]);
            !isNaN(_0x359a73) &&
              _0x359a73 > _0x1a39f4 &&
              (_0x1a39f4 = _0x359a73);
          }
        },
      ),
      _0x1a39f4++,
      _0x199f82[_0x4919bd(0x1a4)](_0x4919bd(0x17a))["each"](function () {
        const _0x339253 = _0x4919bd,
          _0x41d407 = $(this)[_0x339253(0x164)](_0x339253(0x14b));
        let _0x1cc80c = _0x41d407 + "-" + _0x1a39f4;
        $(this)[_0x339253(0x16c)](""),
          $(this)[_0x339253(0x164)](_0x339253(0x14b), _0x1cc80c),
          $(this)["attr"](_0x339253(0x183), _0x1cc80c);
      }),
      _0x199f82["find"](_0x4919bd(0x191))[_0x4919bd(0x194)](function () {
        const _0x5f2b11 = _0x4919bd,
          _0x1881ed = $(this)[_0x5f2b11(0x164)](_0x5f2b11(0x14b));
        let _0x42db1b = _0x1881ed + "-" + _0x1a39f4;
        $(this)[_0x5f2b11(0x16c)](""),
          $(this)["attr"](_0x5f2b11(0x14b), _0x42db1b),
          $(this)["attr"](_0x5f2b11(0x183), _0x42db1b);
      }),
      _0x199f82["find"](_0x4919bd(0x1aa))[_0x4919bd(0x194)](function () {
        const _0x333a6b = _0x4919bd,
          _0x7b5d5 = $(this)[_0x333a6b(0x164)]("name");
        let _0xb1c7bd = _0x7b5d5 + "-" + _0x1a39f4;
        $(this)[_0x333a6b(0x16c)](""),
          $(this)[_0x333a6b(0x164)](_0x333a6b(0x14b), _0xb1c7bd),
          $(this)[_0x333a6b(0x164)](_0x333a6b(0x183), _0xb1c7bd);
      }),
      _0x574119[_0x4919bd(0x1a4)]("[data-input-field]")[_0x4919bd(0x194)](
        function () {
          const _0x316026 = _0x4919bd;
          $(this)[_0x316026(0x164)](
            "data-input-field",
            "relationship-" + _0x1a39f4,
          );
        },
      ),
      $(this)
        [_0x4919bd(0x102)](_0x4919bd(0x1a8) + _0x4fe739 + "\x22]")
        ["append"](_0x199f82),
      $(_0x4919bd(0x107))
        ["eq"](_0x5ea66d)
        [_0x4919bd(0x1a4)](_0x4919bd(0xdf) + _0x4fe739 + "\x22]")
        ["append"](_0x574119),
      $(_0x4919bd(0x1df) + _0x4fe739 + "\x22]")["each"](function () {
        const _0xd5d6cb = _0x4919bd;
        $(this)[_0xd5d6cb(0x18b)](
          $(this)
            ["parents"](_0xd5d6cb(0x1fd) + _0x4fe739 + "\x22]")
            [_0xd5d6cb(0x20f)]() + 0x1,
        );
      }),
      $(_0x4919bd(0x1b7) + _0x4fe739 + "\x22]")["each"](function () {
        const _0x4052af = _0x4919bd;
        $(this)["text"](
          $(this)
            [_0x4052af(0x10d)]("[data-display-input=\x22" + _0x4fe739 + "\x22]")
            [_0x4052af(0x20f)]() + 0x1,
        );
      });
    let _0xc539c3 = $(
      "[data-clone-input-wrapper=\x22" +
        _0x4fe739 +
        _0x4919bd(0x189) +
        _0x4fe739 +
        "\x22]",
    )[_0x4919bd(0x225)];
    if (_0xc539c3 >= _0x4a4ad8) {
      $(this)[_0x4919bd(0x22a)]();
      return;
    }
    $(this)[_0x4919bd(0x180)](), cloneRemoveInput(), validation();
  }),
  $(_0x270fbf(0x181))["on"](_0x270fbf(0x1bd), function () {
    const _0x166d3a = _0x270fbf,
      _0x1ac166 = $(this)[_0x166d3a(0x21e)](_0x166d3a(0xd9));
    $(_0x166d3a(0x167) + _0x1ac166 + "\x22]")["val"](""), validation();
  });

function andLogic() {
  const _0x1f7ac6 = _0x270fbf;
  conditionalResult &&
    (steps["eq"](x)[_0x1f7ac6(0x1a4)](_0x1f7ac6(0x17d))[_0x1f7ac6(0x22a)](),
    steps["eq"](x)
      ["find"]("[data-show-if]")
      [_0x1f7ac6(0x194)](function () {
        const _0x4b26aa = _0x1f7ac6;

        function _0x577de0(_0x416694) {
          const _0x26f1cf = _0x2393,
            _0x47371e = _0x416694[_0x26f1cf(0x228)]("&"),
            _0xcce9e5 = [];
          return (
            _0x47371e[_0x26f1cf(0x143)]((_0x23b6e8) => {
              const _0x27de75 = _0x26f1cf,
                [_0x3e59d0, _0x485b70] = _0x23b6e8[_0x27de75(0x228)]("=");
              _0xcce9e5[_0x27de75(0x172)]({
                field: _0x3e59d0,
                value: _0x485b70,
              });
            }),
            _0xcce9e5
          );
        }
        const _0x12384c = $(this)[_0x4b26aa(0x164)](_0x4b26aa(0x207)),
          _0x24303f = _0x577de0(_0x12384c);

        function _0x36a4a8(_0x35517a, _0x154660) {
          const _0x1c9381 = _0x4b26aa;
          return _0x154660[_0x1c9381(0x1e8)]((_0x45079b, _0x2c80d5) => {
            const _0x373279 = _0x1c9381;
            if (
              _0x35517a[0x0] &&
              _0x45079b[_0x373279(0x19d)] === _0x35517a[0x0][_0x373279(0x19d)]
            )
              return _0x35517a[_0x373279(0x1c9)](
                (_0x4b3e6a, _0x5add03) =>
                  _0x154660[_0x2c80d5 + _0x5add03] &&
                  _0x154660[_0x2c80d5 + _0x5add03][_0x373279(0x19d)] ===
                    _0x4b3e6a[_0x373279(0x19d)] &&
                  _0x154660[_0x2c80d5 + _0x5add03][_0x373279(0x10b)] ===
                    _0x4b3e6a[_0x373279(0x10b)],
              );
            return ![];
          });
        }
        const _0x302f22 = _0x36a4a8(_0x24303f, all_data);
        _0x302f22 ? $(this)["show"]() : $(this)[_0x4b26aa(0x22a)]();
      }));
}
$(_0x270fbf(0x108))[_0x270fbf(0xce)](_0x270fbf(0x22a)),
  $(_0x270fbf(0xe1))["on"](_0x270fbf(0x17a), function () {
    const _0x199d59 = _0x270fbf,
      _0x3492cc = $(this)["data"]("progressive-input"),
      _0x42a586 = $(this)["val"](),
      _0x54e134 = $(_0x199d59(0x196) + _0x3492cc + "\x22]")[_0x199d59(0x21e)](
        "progressive-input-value",
      );
    let _0x581102 = $(
        _0x199d59(0x196) + _0x3492cc + _0x199d59(0x22e) + _0x42a586 + "\x22]",
      ),
      _0x27d9c1 = $(
        _0x199d59(0x196) +
          _0x3492cc +
          "\x22][data-progressive-input-value=\x22*\x22]",
      );
    $(_0x199d59(0x196) + _0x3492cc + "\x22]")[_0x199d59(0xce)](
      _0x199d59(0x22a),
    ),
      $(_0x199d59(0x196) + _0x3492cc + "\x22]")["removeClass"]("show");
    _0x42a586 !== "" &&
      (_0x54e134 === "*" && _0x42a586 !== ""
        ? (_0x27d9c1[_0x199d59(0x159)](_0x199d59(0x22a)),
          _0x27d9c1[_0x199d59(0xce)](_0x199d59(0x180)))
        : (_0x581102[_0x199d59(0x159)](_0x199d59(0x22a)),
          _0x581102[_0x199d59(0xce)]("show")));

    function _0x1aeb91(_0x1424df) {
      const _0x40c4d5 = _0x199d59;
      _0x1424df &&
        $("[data-progressive-input=\x22" + _0x1424df + "\x22]")[
          _0x40c4d5(0x16c)
        ]() !== "" &&
        $("[data-progressive-input=\x22" + _0x1424df + "\x22]")[
          _0x40c4d5(0xc7)
        ](_0x40c4d5(0x17a));
    }
    let _0x8ad13a = $("[data-progressive-target=\x22" + _0x3492cc + "\x22]")
      ["find"](_0x199d59(0xe1))
      [_0x199d59(0x21e)]("progressive-input");
    _0x1aeb91(_0x8ad13a),
      $(_0x199d59(0x127))["each"](function () {
        const _0x1131c9 = _0x199d59,
          _0x25a105 = $(this)[_0x1131c9(0x21e)](_0x1131c9(0x117));
        $(_0x1131c9(0x196) + _0x25a105 + "\x22]")[_0x1131c9(0x159)](
          _0x1131c9(0x180),
        ),
          $("[data-progressive-target=\x22" + _0x25a105 + "\x22]")[
            _0x1131c9(0xce)
          ](_0x1131c9(0x22a));
      });
  });

function addClickClass() {
  const _0x117ec8 = _0x270fbf,
    _0x4f0639 = $(this)[_0x117ec8(0x21e)]("click-addclass"),
    _0x309114 = $(this)[_0x117ec8(0x164)](_0x117ec8(0x14b));
  $(_0x117ec8(0x167) + _0x309114 + "\x22]")
    [_0x117ec8(0x163)]()
    [_0x117ec8(0x159)](_0x4f0639),
    $(this)["is"](_0x117ec8(0x132)) &&
      $(this)[_0x117ec8(0x163)]()[_0x117ec8(0xce)](_0x4f0639);
}
$("[data-click-addclass]")["on"](_0x270fbf(0x15b), addClickClass);
const GET_COUNTER_URL = _0x270fbf(0x1e4),
  UPDATE_COUNTER_URL = _0x270fbf(0x1e4),
  GET_LIVE_COUNTER_URL =
    "https://x8ki-letl-twmt.n7.xano.io/api:EbCCRNhB/counter/2",
  UPDATE_LIVE_COUNTER_URL = _0x270fbf(0x219);

function getCounter() {
  const _0x3f97a2 = _0x270fbf;
  $[_0x3f97a2(0xc8)](GET_COUNTER_URL, function (_0x55f66b) {
    const _0x487b18 = _0x3f97a2;
    if (_0x55f66b) {
      const _0x2b7109 = _0x55f66b[_0x487b18(0x1b2)];
      updateCounter(_0x2b7109 + 0x1);
    } else console[_0x487b18(0x233)](_0x487b18(0x12f));
  });
}

function updateCounter(_0x12d159) {
  const _0x183e24 = _0x270fbf;
  var _0x1b74bd = new Date(),
    _0x4cf3a8 = _0x1b74bd["getMonth"](),
    _0x4b336a = btoa(_0x183e24(0x140)),
    _0x4571fc = btoa(_0x4cf3a8[_0x183e24(0x134)]()),
    _0x43a4dd = getCookie(_0x4b336a);
  if (!_0x43a4dd || _0x43a4dd !== _0x4571fc)
    $["ajax"]({
      url: UPDATE_COUNTER_URL,
      type: _0x183e24(0x118),
      contentType: _0x183e24(0x1f3),
      data: JSON[_0x183e24(0x12d)]({ Total: _0x12d159 }),
      success: function (_0x4938f4) {
        const _0xeacde3 = _0x183e24;
        document[_0xeacde3(0x13a)] = _0x4b336a + "=" + _0x4571fc;
      },
      error: function (_0x5291ae, _0xa70e0d, _0xa2f065) {},
    });
  else {
  }
}

function getCookie(_0x7186ee) {
  const _0x3aa71c = _0x270fbf;
  var _0x303cc = null;
  if (document[_0x3aa71c(0x13a)] && document["cookie"] !== "") {
    var _0x1279fa = document[_0x3aa71c(0x13a)]["split"](";");
    for (
      var _0x4a6055 = 0x0;
      _0x4a6055 < _0x1279fa[_0x3aa71c(0x225)];
      _0x4a6055++
    ) {
      var _0x103dce = _0x1279fa[_0x4a6055][_0x3aa71c(0x20d)]();
      if (
        _0x103dce[_0x3aa71c(0x190)](0x0, _0x7186ee[_0x3aa71c(0x225)] + 0x1) ===
        _0x7186ee + "="
      ) {
        _0x303cc = decodeURIComponent(
          _0x103dce[_0x3aa71c(0x190)](_0x7186ee[_0x3aa71c(0x225)] + 0x1),
        );
        break;
      }
    }
  }
  return _0x303cc;
}
getCounter(), scrollTop(), cloneRemove(), cloneRemoveInput();
const formlyUrlParams = new URLSearchParams(
    window[_0x270fbf(0x18c)][_0x270fbf(0x1c6)],
  ),
  formlySupportParam = formlyUrlParams[_0x270fbf(0xc8)](_0x270fbf(0x220)),
  showButton = formlySupportParam === _0x270fbf(0x1b4),
  passIcon = _0x270fbf(0x1e0),
  failIcon = _0x270fbf(0x20b);
let isScriptLoaded = !![],
  scriptLocation = "head",
  isMultistepAttributePresent = !![],
  isMultistepOnFormElement = !![],
  areButtonsPresent = !![],
  isNextBtnOnSubmit = ![],
  isSubmitBtnOnSubmit = !![],
  isBackBtnOnSubmit = ![],
  formType = logicExtra ? _0x270fbf(0x23d) : _0x270fbf(0x166),
  resultStatus = _0x270fbf(0x1d5),
  scriptSrcAdded = "";

function isElementPresent(_0x4b8d69, _0x2ad3ab) {
  const _0x4866b1 = _0x270fbf;
  return (
    document[_0x4866b1(0x1a5)](
      "[" + _0x2ad3ab + "=\x22" + _0x4b8d69 + "\x22]",
    ) !== null
  );
}
isMultistepAttributePresent = isElementPresent(
  _0x270fbf(0x1ff),
  _0x270fbf(0x161),
);
const multistepForm = document[_0x270fbf(0x1a5)](
    "form[data-form=\x22multistep\x22]",
  ),
  formStepLength = multistepForm[_0x270fbf(0x232)](_0x270fbf(0x13d))[
    _0x270fbf(0x225)
  ];
isMultistepOnFormElement = multistepForm !== null;
const multistepContainer = document[_0x270fbf(0x1a5)](_0x270fbf(0x1d8)),
  nextBtnExist = multistepContainer[_0x270fbf(0x1a5)](
    "[data-form=\x22next-btn\x22]",
  ),
  backBtnExist = multistepContainer[_0x270fbf(0x1a5)](_0x270fbf(0x147)),
  submitBtnExist = multistepContainer["querySelector"](
    "[data-form=\x22submit-btn\x22]",
  );
(areButtonsPresent =
  nextBtnExist !== null && backBtnExist !== null && submitBtnExist !== null),
  (isNextBtnOnSubmit =
    nextBtnExist &&
    nextBtnExist[_0x270fbf(0x1e9)]["toLowerCase"]() === _0x270fbf(0x17a)),
  (isSubmitBtnOnSubmit =
    submitBtnExist &&
    submitBtnExist[_0x270fbf(0x1e9)][_0x270fbf(0x1fb)]() === _0x270fbf(0x17a) &&
    submitBtnExist["type"][_0x270fbf(0x1fb)]() === _0x270fbf(0x130)),
  (isBackBtnOnSubmit =
    backBtnExist &&
    backBtnExist[_0x270fbf(0x1e9)][_0x270fbf(0x1fb)]() === _0x270fbf(0x17a));

function _0x289b() {
  const _0x52b555 = [
    "select-multiple",
    "[data-form=\x22step\x22]",
    "f-mySidenav",
    "selected",
    "counter",
    "url",
    "[data-display-input=\x22",
    "forEach",
    ":input[type=\x22time\x22][required]",
    "</strong>",
    "slice",
    "[data-form=\x22back-btn\x22]",
    "[data-btn=\x22reset\x22]",
    "[type=\x22submit\x22]",
    "[data-enter]",
    "name",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Submit\x20button\x20attribute\x20IS\x20on\x20Form\x20Submit\x20Button\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "input[type=\x22email\x22]:visible",
    "input[type=\x22checkbox\x22]:visible",
    "children",
    "filter",
    "FAIL",
    "<strong\x20class=\x22f-text-white\x22>Checkboxes\x20",
    "[data-text=\x22current-step\x22]",
    "[data-add-new-input]",
    "add-new",
    "go-to",
    "auto",
    "submit-show",
    "removeClass",
    "select[required]",
    "change",
    "appendChild",
    "\x22]\x20[data-input-field^=\x22",
    "checkbox",
    "1424832ViPYcQ",
    "clone",
    "data-form",
    "input[type=\x22radio\x22][name=\x22",
    "parent",
    "attr",
    "[data-radio-skip]:visible",
    "Basic\x20(No\x20Formly\x20Logic)",
    "input[name=\x22",
    ":input[type=\x22password\x22]",
    "innerHTML",
    "input[autofocus]",
    "[data-add-new]",
    "val",
    "min-character",
    "1809355hNpazj",
    "[data-selection-weight]",
    "form[data-form=\x22multistep\x22]\x20:input",
    "1glXyEi",
    "push",
    "[data-clone=\x22",
    "<strong\x20class=\x22f-text-white\x22>Automatic\x20Progress\x20Indicators\x20",
    "[aria-label=\x22Remove\x20file\x22]",
    ":input[type=\x22file\x22][required]",
    ":input[type=\x22checkbox\x22][required]:checked",
    "[data-form=\x22submit-btn\x22]:visible",
    "<div\x20data-range=\x22selection\x22\x20style=\x22display:none\x20!important\x22>",
    "input",
    "<strong\x20class=\x22f-text-white\x22>Press\x20\x22Enter\x22\x20To\x20Progress\x20",
    ":first",
    "[data-show-if]",
    "[data-form=\x22progress-indicator\x22]",
    "css",
    "show",
    "[data-remove-upload]",
    "memory",
    "data-name",
    "[data-answer][data-radio-skip]:visible",
    ":input[type=\x22number\x22]",
    "[data-radio-skip=\x22true\x22]",
    "filledInput",
    "[data-form=\x22custom-progress-indicator\x22]",
    "\x22]\x20[data-clone-input=\x22",
    "click-addclass",
    "text",
    "location",
    "keyCode",
    "answer",
    "formlyLastStep",
    "substring",
    "select",
    ":input[type=\x22tel\x22]",
    ":input[type=\x22date\x22]",
    "each",
    "[data-selected]:checked",
    "[data-progressive-target=\x22",
    "query-param",
    "data-radio-delay",
    "remove",
    "1900848vkgAVU",
    "card",
    "div",
    "field",
    "parse",
    "[data-query-param]",
    "[data-add-new=\x22",
    "focus",
    "\x0a\x20\x20<button\x20class=\x22f-openbtn\x22\x20onclick=\x22openNav()\x22>\x0a\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x2220px\x22\x20height=\x2220px\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M11\x2021h-1l1-7H7.5c-.88\x200-.33-.75-.31-.78C8.48\x2010.94\x2010.42\x207.54\x2013.01\x203h1l-1\x207h3.51c.4\x200\x20.62.19.4.66C12.97\x2017.55\x2011\x2021\x2011\x2021\x22></path>\x0a\x20\x20\x20\x20</svg>\x20Check\x20Form\x0a\x20\x20</button>\x0a\x20\x20<div\x20id=\x22f-mySidenav\x22\x20class=\x22f-sidenav\x22>\x0a\x20\x20\x20\x20<a\x20href=\x22javascript:void(0)\x22\x20class=\x22f-closebtn\x22\x20onclick=\x22closeNav()\x22>&times;</a>\x0a\x20\x20\x20\x20<div\x20class=\x22f-fc-main-content\x22>\x0a\x20\x20\x20\x20\x20\x20<h4\x20class=\x22f-text-header\x22>Formly\x20Support</h4>\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20If\x20you\x20have\x20spotted\x20a\x20bug\x20or\x20require\x20extra\x20support,\x20please\x20reach\x20out\x20to\x20us\x20via\x20Slack\x20or\x20email\x20us\x20at\x20developer@videsigns.uk.\x0a\x20\x20\x20\x20\x20\x20</p>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Form\x20Type</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>",
    "[data-skip-to]",
    "find",
    "querySelector",
    "[data-last-step]",
    "required",
    "[data-clone-input-wrapper=\x22",
    "prop",
    "textarea",
    "head",
    "data-go-to",
    "checked",
    "data-radio-skip",
    "href",
    "AND",
    "ix2",
    "Total",
    "input[type=\x22checkbox\x22][name=\x22",
    "true",
    "dispatchEvent",
    "success",
    "[data-display-input-index=\x22",
    ".w-checkbox-input",
    "not",
    "\x22]\x20[data-clone=\x22",
    "closest",
    "textarea[required]",
    "click",
    "[data-form=\x22remove-clone\x22]",
    ":input[type=\x22checkbox\x22]:checked",
    "removeItem",
    ":input[type=\x22tel\x22][required]",
    "[data-clone-wrapper=\x22",
    "getElementsByTagName",
    "<strong\x20class=\x22f-text-white\x22>ReCAPTCHA\x20",
    "scroll-top",
    "search",
    ":input[type=\x22checkbox\x22]",
    "radio",
    "every",
    "none",
    "logic-extra",
    "wait",
    "</div>",
    "[data-btn=\x22check\x22]",
    "skipTo",
    "videsigns",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "[data-text=\x22total-weight\x22]",
    "slow",
    "No\x20Formly\x20script\x20added\x20to\x20the\x20page!",
    "PASS",
    "w--redirected-checked",
    "novalidate",
    "[data-form=\x22multistep\x22]",
    "getElementById",
    "fadeIn",
    "[data-form=\x22progress\x22]",
    ".w-form-done",
    "35%",
    "\x22][value=\x22",
    "[data-input-index=\x22",
    "<span\x20class=\x22f-icon-embed-xxsmall\x20w-embed\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010s10-4.48\x2010-10S17.52\x202\x2012\x202m-2\x2015l-5-5l1.41-1.41L10\x2014.17l7.59-7.59L19\x208z\x22></path></svg></span>",
    ":input[type=\x22text\x22]",
    "phone-validation",
    "ms-field",
    "https://x8ki-letl-twmt.n7.xano.io/api:EbCCRNhB/counter/1",
    "keydown",
    "Before\x20&lt;/body&gt;\x20tag",
    "scroll-top-offset",
    "some",
    "tagName",
    "input:checkbox",
    "select[required]:visible",
    "add-new-input-limit",
    "redirect-delay",
    "[data-checkbox]",
    "radio-delay",
    ":input[type=\x22number\x22][required]",
    "[data-form-ms=\x22submit-btn\x22]",
    "stopPropagation",
    "application/json",
    "last-step",
    "[data-answer]",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>3.\x20Next\x20Buttons:\x20data-form=back-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Next\x20button\x20present?\x20",
    "metaKey",
    "current",
    "[data-form=\x22submit-btn\x22]",
    "[data-success-card=\x22",
    "toLowerCase",
    "[data-memory]",
    "[data-clone-input=\x22",
    "[data-go-to]",
    "multistep",
    "[data-clone]",
    "last",
    "[data-input-field]",
    "weighted-selection-range",
    "\x22]:checked",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>Script\x20Location:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>",
    "[data-display=\x22",
    "data-show-if",
    "input[type=\x22radio\x22]",
    "data-skip-to",
    "[data-clickable]",
    "<span\x20class=\x22f-icon-embed-xxsmall-2\x20w-embed\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--carbon\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2032\x2032\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M16\x202C8.2\x202\x202\x208.2\x202\x2016s6.2\x2014\x2014\x2014s14-6.2\x2014-14S23.8\x202\x2016\x202m5.4\x2021L16\x2017.6L10.6\x2023L9\x2021.4l5.4-5.4L9\x2010.6L10.6\x209l5.4\x205.4L21.4\x209l1.6\x201.6l-5.4\x205.4l5.4\x205.4z\x22></path></svg></span>",
    "offset",
    "trim",
    "input-field",
    "index",
    "active-answer-card",
    "new-tab",
    "skip-to",
    "Webflow",
    "ajaxComplete",
    "preventDefault",
    "[data-text=\x22error-message\x22]",
    "block-domain",
    "[data-clone-input]",
    "https://x8ki-letl-twmt.n7.xano.io/api:EbCCRNhB/counter/2",
    ":input[type=\x22url\x22]",
    "\x22]\x20select",
    "step",
    "debug-mode",
    "data",
    "[data-form=\x22next-btn\x22][data-submit-show]",
    "formly-support",
    "[data-input-field=\x22",
    "[data-success-card]",
    "input[type=\x22radio\x22]:checked",
    "getItem",
    "length",
    "key",
    "option[value=\x22",
    "split",
    "[data-card=\x22true\x22]",
    "hide",
    "[data-selection=\x22",
    "[data-answer=\x22",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Next\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button\x20",
    "\x22][data-progressive-input-value=\x22",
    "494464QMehuP",
    "backTo",
    "<strong\x20class=\x22f-text-white\x22>Total\x20Step\x20Text\x20",
    "querySelectorAll",
    "error",
    "body",
    "Please\x20wait...",
    "conditional-result",
    "textarea[autofocus]",
    "[data-clone-wrapper]",
    "radio-skip",
    "\x22]:not([data-prefill=\x22false\x22])",
    "<strong\x20class=\x22f-text-white\x22>Custom\x20Progress\x20Indicators\x20",
    "formlyLastStepAnswer",
    "FormlyLogic\x20enabled",
    "[data-add-new-input=\x22",
    "<strong\x20class=\x22f-text-white\x22>Radio\x20Inputs\x20",
    "test",
    "option[value=\x22$(this).val()\x22]",
    "button",
    "findIndex",
    "[data-conditional-result]",
    "trigger",
    "get",
    "<br>Data\x20Go\x20To\x20=\x20",
    "reset-delay",
    "textarea[name=\x22",
    "data-input-field",
    ":input[type=\x22radio\x22]",
    "addClass",
    "style",
    "display",
    "</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Formly\x20Script\x20Info</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>Script\x20URL:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>",
    "relationship-",
    "[data-custom-error-message]",
    "select:not([data-prefill=\x22false\x22])",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Number\x20of\x20steps:\x20",
    "animate",
    ":input",
    "includes",
    "remove-upload",
    "selection",
    ":input[type=\x22email\x22]",
    "1687422ssYzBR",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>4.\x20Back\x20Buttons:\x20data-form=next-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Back\x20button\x20present?\x20",
    "[data-form=\x22step\x22][data-card]",
    "[data-display-input-wrapper=\x22",
    "readystatechange",
    "[data-progressive-input]",
    "clickable-all",
    "log",
    "[data-form=\x22submit\x22]:visible",
    "[data-display-index=\x22",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a",
    ".active-answer-card",
    "[data-form=\x22next-btn\x22]",
    "startsWith",
    "input[type=\x22text\x22][required]:visible",
    "select[name=\x22",
    ".w-radio-input",
    "[data-cms-select=text]",
    "[data-display-wrapper=\x22",
    "[data-btn=\x22edit\x22]",
    "open",
    "[data-redirect-delay]",
    ":input[type=\x22email\x22][required]",
    "0px",
    "5993334zfsCHT",
    "[data-text=\x22total-steps\x22]",
    ":input[required]",
    "6329898xuCsny",
    "0.4",
    "clone-input",
    "count-card",
    "html,\x20body",
    "BODY",
    ":input[type=\x22text\x22][required]",
    "7CTpeMM",
    "replace",
    "phone-autoformat",
    "[data-selection=\x22other\x22]",
    "siblings",
    "padding",
    "add-new-limit",
    "input:radio[required]",
    "inputName",
    "[data-display]",
    "[data-progressive-target]",
    "type",
    ":input[type=\x22password\x22][required]",
    "value",
    "[data-range]:contains(",
    "parents",
    "[data-selection]",
    ":input[type=\x22checkbox\x22][required]:not(:checked)",
    "https://webflow.com/api/v1/form/",
    "[type=\x22radio\x22]",
    "div.g-recaptcha",
    "parentNode",
    "<strong\x20class=\x22f-text-white\x22>Current\x20Step\x20Text\x20",
    "formly",
    "redirect",
    "progressive-input",
    "PATCH",
    "join",
    "width",
    "reinit",
    "reset",
    "\x22]\x20textarea",
    "textarea:focus",
    "clickable",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Powerups</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "[data-display-input]",
    "disabled",
    "[type=\x22checkbox\x22]",
    "require",
    "sfte",
    ".w-form-formradioinput",
    "[data-progressive-input]:not(:visible)",
    ":input[type=\x22checkbox\x22][required]",
    "[data-reset-delay]",
    "searchParams",
    "append",
    "<strong\x20class=\x22f-text-white\x22>Press\x20\x22⌘\x20+\x20Enter\x20\x22\x20To\x20Submit\x20",
    "stringify",
    "redirect-form-hehexd",
    "Failed\x20to\x20get\x20counter\x20value",
    "submit",
    "\x22]\x20input",
    ":checked",
    "file",
    "toString",
    "quiz",
    "setItem",
    "[data-radio-delay]",
    "[data-reinit]",
    "[data-count-card]",
    "cookie",
    "add-new-input",
  ];
  _0x289b = function () {
    return _0x52b555;
  };
  return _0x289b();
}
const checkPowerup = (_0x2e5784) =>
    document[_0x270fbf(0x1a5)](_0x2e5784) !== null,
  progressBarAttr = checkPowerup(_0x270fbf(0x1db)),
  progressIndicatorAttr = checkPowerup(
    "[data-form=\x22progress-indicator\x22]",
  ),
  customProgressAttr = checkPowerup("[data-form=\x22progress-indicator\x22]"),
  cardDivAttr = checkPowerup(_0x270fbf(0x229)),
  currentStepAttr = checkPowerup(_0x270fbf(0x153)),
  totalStepAttr = checkPowerup(_0x270fbf(0xf5)),
  enterAttr = checkPowerup("[data-enter=\x22true\x22]"),
  submitAttr = checkPowerup("[data-submit=\x22true\x22]"),
  radioSkipAttr = checkPowerup(_0x270fbf(0x186)),
  customCheckboxAttr = checkPowerup(_0x270fbf(0x1ee)),
  recapatchaAttr = checkPowerup("[data-callback=\x22recaptcha\x22]");
(!isScriptLoaded ||
  scriptLocation !== _0x270fbf(0x1ab) ||
  !isMultistepAttributePresent ||
  !isMultistepOnFormElement ||
  !areButtonsPresent ||
  isNextBtnOnSubmit ||
  !isSubmitBtnOnSubmit ||
  isBackBtnOnSubmit) &&
  (resultStatus = _0x270fbf(0x151));

function isScriptUrlMatch(_0x10ccae, _0x335115) {
  const _0x58f852 = _0x270fbf;
  for (
    var _0x3f82b0 = 0x0;
    _0x3f82b0 < _0x335115[_0x58f852(0x225)];
    _0x3f82b0++
  ) {
    if (_0x10ccae[_0x58f852(0xd8)](_0x335115[_0x3f82b0])) return !![];
  }
  return ![];
}
var keywordsToCheck = [_0x270fbf(0x1d0), _0x270fbf(0x115)],
  scripts = document[_0x270fbf(0x1c3)]("script"),
  matchedScripts = [];

function _0x2393(_0x586be5, _0x1b47ec) {
  const _0x289b88 = _0x289b();
  return (
    (_0x2393 = function (_0x2393ec, _0x3151cf) {
      _0x2393ec = _0x2393ec - 0xc5;
      let _0x46f8b6 = _0x289b88[_0x2393ec];
      return _0x46f8b6;
    }),
    _0x2393(_0x586be5, _0x1b47ec)
  );
}
for (var i = 0x0; i < scripts[_0x270fbf(0x225)]; i++) {
  var scriptSrcs = scripts[i]["src"];
  isScriptUrlMatch(scriptSrcs, keywordsToCheck) &&
    matchedScripts[_0x270fbf(0x172)](scriptSrcs);
}
if (matchedScripts[_0x270fbf(0x225)] > 0x0) {
  scriptSrcAdded = matchedScripts;
  const script = document["querySelector"](
    "script[src=\x22" + scriptSrcAdded + "\x22]",
  );
  script &&
    (scriptLocation =
      script[_0x270fbf(0x113)][_0x270fbf(0x1e9)] === _0x270fbf(0xfc)
        ? _0x270fbf(0x1e6)
        : "Inside\x20<head>\x20tag");
} else scriptSrcAdded = _0x270fbf(0x1d4) + failIcon;
const newElement = document["createElement"](_0x270fbf(0x19c)),
  newStyle = document["createElement"](_0x270fbf(0xcf));
(newStyle[_0x270fbf(0x169)] =
  "\x0a\x20\x20.f-icon-embed-xxsmall-2\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#ff3232\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x20\x20.f-icon-embed-xxsmall\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#57ff4b\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20{\x0a\x20\x20\x20\x20height:\x20100%\x20!important;\x0a\x20\x20\x20\x20width:\x200;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20z-index:\x20999999999999\x20!important;\x0a\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20background-color:\x20#081019\x20!important;\x0a\x20\x20\x20\x20overflow-x:\x20hidden\x20!important;\x0a\x20\x20\x20\x20padding-top:\x2060px\x20!important;\x0a\x20\x20\x20\x20transition:\x200.5s\x20!important;\x0a\x20\x20\x20\x20font-size:\x2015px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73)\x20!important;\x0a\x20\x20\x20\x20font-family:system-ui\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-section-title-text,\x20.f-support-text,\x20.f-openbtn{\x0a\x20\x20\x20\x20font-size:\x2015px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73);\x0a\x20\x20\x20\x20font-family:system-ui\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20p,\x20.f-sidenav\x20strong\x20{\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20space-between\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x204px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73);\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20.f-closebtn\x20{\x0a\x20\x20\x20\x20position:\x20absolute\x20!important;\x0a\x20\x20\x20\x20top:\x2025px\x20!important;\x0a\x20\x20\x20\x20right:\x2025px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2036px\x20!important;\x0a\x20\x20\x20\x20margin-left:\x2050px\x20!important;\x0a\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20color:\x20#e7e7e7\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-core-setup\x20{\x0a\x20\x20\x20\x20padding:\x2012px\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x2011px\x20!important;\x0a\x20\x20\x20\x20border-radius:\x206px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20#f-main\x20{\x0a\x20\x20\x20\x20transition:\x20margin-left\x20.5s\x20!important;\x0a\x20\x20\x20\x20padding:\x2020px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-main-content\x20{\x0a\x20\x20\x20\x20transition:\x20margin-left\x20.5s\x20!important;\x0a\x20\x20\x20\x20padding:\x2020px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-form-step\x20{\x0a\x20\x20\x20\x20padding-left:\x2010px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-openbtn\x20{\x0a\x20\x20\x20\x20white-space:\x20nowrap\x20!important;\x0a\x20\x20\x20\x20cursor:\x20pointer\x20!important;\x0a\x20\x20\x20\x20box-shadow:\x200\x200\x200\x201px\x20rgba(0,\x200,\x200,\x20.1),\x200\x201px\x203px\x20rgba(0,\x200,\x200,\x20.1)\x20!important;\x0a\x20\x20\x20\x20visibility:\x20visible\x20!important;\x0a\x20\x20\x20\x20z-index:\x2099\x20!important;\x0a\x20\x20\x20\x20color:\x20#e7e7e7\x20!important;\x0a\x20\x20\x20\x20opacity:\x201\x20!important;\x0a\x20\x20\x20\x20width:\x20auto\x20!important;\x0a\x20\x20\x20\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20background-color:\x20#1e1e1e\x20!important;\x0a\x20\x20\x20\x20border-radius:\x203px\x20!important;\x0a\x20\x20\x20\x20margin:\x200\x20!important;\x0a\x20\x20\x20\x20padding:\x206px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2013px\x20!important;\x0a\x20\x20\x20\x20line-height:\x2014px\x20!important;\x0a\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20top:\x20auto\x20!important;\x0a\x20\x20\x20\x20bottom:\x2012px\x20!important;\x0a\x20\x20\x20\x20left:\x2012px\x20!important;\x0a\x20\x20\x20\x20right:\x20auto\x20!important;\x0a\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20transform:\x20none\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-text-header{\x0a\x20\x20\x20\x20color:\x20#fff\x20!important;\x0a\x20\x20\x20\x20font-size:\x201.8rem\x20!important;\x0a\x20\x20\x20\x20font-weight:\x20600\x20!important;\x0a\x20\x20\x20\x20line-height:\x201.2\x20!important;\x0a\x20\x20\x20\x20margin-bottom:4px\x0a\x20\x20}\x0a\x0a\x20\x20@media\x20screen\x20and\x20(max-height:\x20450px)\x20{\x0a\x20\x20\x20\x20.sidenav\x20{\x20padding-top:\x2015px\x20!important;\x20}\x0a\x20\x20\x20\x20.sidenav\x20a\x20{\x20font-size:\x2018px\x20!important;\x20}\x0a\x20\x20}\x0a\x0a\x20\x20.f-section-title-text{\x0a\x20\x20\x20\x20color:\x20#fff\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x2010px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2018px\x20!important;\x0a\x20\x20\x20\x20font-weight:\x20700\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-div-support-section{\x0a\x20\x20\x20\x20padding-top:1rem\x20!important;\x0a\x20\x20\x20\x20padding-bottom:1rem\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-text-white{\x0a\x20\x20\x20\x20color:\x20white\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-spacer{\x0a\x20\x20\x20\x20padding-top:8px\x20!important;\x0a\x20\x20}\x0a"),
  document[_0x270fbf(0x1ab)][_0x270fbf(0x15c)](newStyle);
showButton && document[_0x270fbf(0x234)]["appendChild"](newElement);
newElement[_0x270fbf(0x169)] =
  _0x270fbf(0x1a2) +
  formType +
  _0x270fbf(0xd1) +
  scriptSrcAdded +
  _0x270fbf(0x205) +
  scriptLocation +
  "</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Attributes</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>1.\x20Form:\x20data-form=multistep\x20" +
  (isMultistepOnFormElement ? passIcon : failIcon) +
  "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Multistep\x20form\x20attribute\x20is\x20on\x20Form\x20element\x20and\x20not\x20on\x20Form\x20Block\x20element\x0a\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>2.\x20Form\x20Steps:\x20data-form=step\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
  (formStepLength > 0x0 ? passIcon : failIcon) +
  _0x270fbf(0xd5) +
  formStepLength +
  _0x270fbf(0x1f6) +
  (nextBtnExist ? passIcon : failIcon) +
  _0x270fbf(0x22d) +
  (isNextBtnOnSubmit ? failIcon : passIcon) +
  _0x270fbf(0xdd) +
  (backBtnExist ? passIcon : failIcon) +
  "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Back\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button" +
  (isBackBtnOnSubmit ? failIcon : passIcon) +
  "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>5.\x20Submit\x20Buttons:\x20data-form=next-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Submit\x20button\x20present?\x20" +
  (backBtnExist ? passIcon : failIcon) +
  _0x270fbf(0x14c) +
  (isSubmitBtnOnSubmit ? passIcon : failIcon) +
  _0x270fbf(0x120) +
  (progressBarAttr && progressIndicatorAttr
    ? _0x270fbf(0x174) + passIcon + "</strong>"
    : "") +
  "\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
  (customProgressAttr ? _0x270fbf(0x23b) + passIcon + _0x270fbf(0x145) : "") +
  _0x270fbf(0x1d1) +
  (cardDivAttr
    ? "<strong\x20class=\x22f-text-white\x22>Intro\x20Cards\x20Or\x20Steps\x20Without\x20Inputs\x20" +
      passIcon +
      _0x270fbf(0x145)
    : "") +
  _0x270fbf(0x1d1) +
  (currentStepAttr ? _0x270fbf(0x114) + passIcon + _0x270fbf(0x145) : "") +
  _0x270fbf(0x1d1) +
  (totalStepAttr ? _0x270fbf(0x231) + passIcon + _0x270fbf(0x145) : "") +
  _0x270fbf(0x1d1) +
  (enterAttr ? _0x270fbf(0x17b) + passIcon + _0x270fbf(0x145) : "") +
  _0x270fbf(0x1d1) +
  (submitAttr ? _0x270fbf(0x12c) + passIcon + "</strong>" : "") +
  _0x270fbf(0x1d1) +
  (radioSkipAttr ? _0x270fbf(0x23f) + passIcon + "</strong>" : "") +
  _0x270fbf(0x1d1) +
  (customCheckboxAttr ? _0x270fbf(0x152) + passIcon + "</strong>" : "") +
  _0x270fbf(0x1d1) +
  (recapatchaAttr ? _0x270fbf(0x1c4) + passIcon + _0x270fbf(0x145) : "") +
  _0x270fbf(0xe6);

function openNav() {
  const _0x1e4e7d = _0x270fbf;
  (document[_0x1e4e7d(0x1d9)](_0x1e4e7d(0x13e))["style"][_0x1e4e7d(0x11a)] =
    _0x1e4e7d(0x1dd)),
    (document[_0x1e4e7d(0x1d9)](_0x1e4e7d(0x13e))[_0x1e4e7d(0xcf)][
      _0x1e4e7d(0x103)
    ] = "12px");
}

function closeNav() {
  const _0x45764c = _0x270fbf;
  (document[_0x45764c(0x1d9)](_0x45764c(0x13e))[_0x45764c(0xcf)][
    _0x45764c(0x11a)
  ] = "0"),
    (document["getElementById"](_0x45764c(0x13e))[_0x45764c(0xcf)][
      _0x45764c(0x103)
    ] = _0x45764c(0xf3));
}
