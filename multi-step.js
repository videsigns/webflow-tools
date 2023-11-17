//16th Nov 2023
//Bug fix
//1. Logic validation not working

const _0x346856 = _0x1965;
(function (_0x46cc80, _0xd7c43b) {
  const _0x17e936 = _0x1965,
    _0xcdeef5 = _0x46cc80();
  while (!![]) {
    try {
      const _0x1f32c9 =
        -parseInt(_0x17e936(0x1c6)) / 0x1 +
        (-parseInt(_0x17e936(0x162)) / 0x2) *
          (-parseInt(_0x17e936(0xdb)) / 0x3) +
        parseInt(_0x17e936(0x103)) / 0x4 +
        (-parseInt(_0x17e936(0x170)) / 0x5) *
          (parseInt(_0x17e936(0x11c)) / 0x6) +
        (-parseInt(_0x17e936(0xd9)) / 0x7) *
          (-parseInt(_0x17e936(0x1a4)) / 0x8) +
        -parseInt(_0x17e936(0x1a5)) / 0x9 +
        -parseInt(_0x17e936(0x154)) / 0xa;
      if (_0x1f32c9 === _0xd7c43b) break;
      else _0xcdeef5["push"](_0xcdeef5["shift"]());
    } catch (_0x2148e7) {
      _0xcdeef5["push"](_0xcdeef5["shift"]());
    }
  }
})(_0x5d66, 0x77ff8);
let x = 0x0,
  curStep = 0x0,
  steps = $("[data-form=\x22step\x22]"),
  progressbarClone = $("[data-form=\x22progress-indicator\x22]")[
    _0x346856(0x140)
  ](),
  progressbar,
  countCard = !![],
  weightedSelection = $("[data-weighted-selection]")[_0x346856(0x14a)](
    _0x346856(0x148),
  ),
  weightedSelectionRange = $(_0x346856(0x1bc))[_0x346856(0x14a)](
    _0x346856(0x1cc),
  ),
  selectMultiple = $(_0x346856(0x114))[_0x346856(0x14a)](_0x346856(0x14e)),
  customError = $("[data-custom-error-message]")[_0x346856(0x14a)](
    _0x346856(0xc0),
  ),
  fill = ![],
  inputFilled = !![],
  skip,
  urlFilled = !![],
  selectFilled = !![],
  radioFilled = !![],
  dateFilled = !![],
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
  empReqRadio = [],
  empReqSelect = [],
  empReqTextarea = [],
  empReqFile = [],
  empReqPassword = [],
  empReqNum = [],
  empReqEmail = [],
  empReqTel = [],
  reinitIX = $(_0x346856(0x1a1))["data"](_0x346856(0x102)),
  textareaLength = 0x0,
  textInputLength = 0x0,
  emailInputLength = 0x0,
  selectInputLength = 0x0,
  checkboxInputLength = 0x0,
  filledInput = [],
  savedFilledInput = [],
  memory = $(_0x346856(0x195))[_0x346856(0x14a)](_0x346856(0xbd)),
  quiz = $(_0x346856(0x13e))[_0x346856(0x14a)](_0x346856(0x130)),
  progress = 0x0;
const urlFormly = new URL(window[_0x346856(0x117)][_0x346856(0xd6)]);
let _params = $("[data-query-param]")[_0x346856(0x14a)](_0x346856(0xf3)),
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
  logicExtra = $(_0x346856(0x163))[_0x346856(0x14a)](_0x346856(0x19c)),
  oldSubmitText = $(_0x346856(0xbf))[_0x346856(0x19b)](),
  oldResetText = $("[data-btn=\x22reset\x22]")[_0x346856(0x1c4)](),
  formReset = $(_0x346856(0x163))[_0x346856(0x14a)](_0x346856(0x1bb)),
  successCard = "",
  redirectTo = "",
  totalSteps = 0x0,
  checkCount = 0x0,
  resetDelay = $(_0x346856(0x1c9))[_0x346856(0x14a)]("reset-delay")
    ? $(_0x346856(0x1c9))[_0x346856(0x14a)]("reset-delay")
    : 0x7d0,
  redirectDelay = $(_0x346856(0x16e))[_0x346856(0x14a)](_0x346856(0x151))
    ? $("[data-redirect-delay]")["data"](_0x346856(0x151))
    : 0x7d0,
  newTab = !![],
  unfilledArr = [],
  phoneFormat = $(_0x346856(0x163))[_0x346856(0x14a)]("phone-validation"),
  scrollToTop = $(_0x346856(0x163))["data"](_0x346856(0xf9)),
  conditionalResult =
    $(_0x346856(0x178))[_0x346856(0x14a)]("conditional-result") ===
    _0x346856(0x13a),
  scrollTopOffset = parseInt(
    $(_0x346856(0x163))[_0x346856(0x14a)](_0x346856(0xef)),
  ),
  notRobot = !![],
  all_data = [];
const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
savedFilledInput = JSON[_0x346856(0x14b)](
  localStorage[_0x346856(0xdd)](_0x346856(0x15c)),
);
var ogCloneArr = [];
$(_0x346856(0x1ce))["each"](function () {
  const _0x3e64bd = _0x346856;
  ogCloneArr[_0x3e64bd(0x198)]({
    name: $(this)[_0x3e64bd(0x14a)]("clone"),
    element: $(this)[_0x3e64bd(0x140)](!![]),
    display: $(_0x3e64bd(0x171) + $(this)["data"]("clone") + "\x22]")
      ["eq"](0x0)
      [_0x3e64bd(0x140)](!![]),
  });
});
$(_0x346856(0x194))[_0x346856(0x1af)] > 0x0 && (notRobot = ![]);
function recaptcha(_0x37d77e) {
  notRobot = !![];
}
$("[data-count-card]")[_0x346856(0x1af)] > 0x0 &&
  (countCard = $(_0x346856(0x115))[_0x346856(0x14a)](_0x346856(0x169)));
$(_0x346856(0x1be))[_0x346856(0x11d)](),
  $(progressbarClone)[_0x346856(0x136)](_0x346856(0x1b2)),
  $(_0x346856(0x1d4))[_0x346856(0x190)]()[_0x346856(0x1b0)](),
  $(_0x346856(0xbf))[_0x346856(0x11d)](),
  $(_0x346856(0x143))[_0x346856(0x11d)](),
  steps["each"](function () {
    const _0xda2f12 = _0x346856;
    $(_0xda2f12(0x1d4))[_0xda2f12(0x180)](
      progressbarClone[_0xda2f12(0x140)](!![], !![]),
    );
  }),
  $("[data-input-field]")["hide"]();
countCard
  ? ((curStep = curStep + 0x1),
    (totalSteps = steps[_0x346856(0x1af)]),
    $(_0x346856(0x18a))["text"](totalSteps))
  : ($(steps[x])["data"](_0x346856(0x1a3))
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    (totalSteps = $(_0x346856(0x127))[_0x346856(0x1af)]),
    $(_0x346856(0x18a))[_0x346856(0x1c4)](totalSteps),
    $("[data-form=\x22step\x22][data-card]")[_0x346856(0x16b)](function () {
      const _0x17f033 = _0x346856;
      $($(_0x17f033(0x11a))[$(this)[_0x17f033(0xc7)]()])[_0x17f033(0x11d)]();
    }));
(progressbar = $(_0x346856(0x1d4))[_0x346856(0x190)]()),
  $(_0x346856(0x11a))["on"]("click", clickableIndicator),
  $("[data-text=\x22current-step\x22]")[_0x346856(0x1c4)](curStep),
  steps[_0x346856(0x11d)](),
  $(_0x346856(0x187))[_0x346856(0x11d)](),
  $(_0x346856(0xf2))[_0x346856(0x16b)](function () {
    const _0x590eed = _0x346856;
    $(this)[_0x590eed(0xd7)]("type", "button");
  });
function getParams() {
  const _0x3552a4 = _0x346856;
  urlFormly[_0x3552a4(0xf1)][_0x3552a4(0xfb)](function (_0x546d9f, _0x15c041) {
    searchQ["push"]({ val: _0x546d9f, key: _0x15c041 });
  });
}
function getSafe(_0x41e7be, _0x1f2f90) {
  try {
    return _0x41e7be();
  } catch (_0xf4a2c6) {
    return _0x1f2f90;
  }
}
function phoneAutoFormat(_0x1da9b2) {
  var _0x14a1dc = "";
  return function (_0x8d3305) {
    const _0x40f1fa = _0x1965;
    var _0x44a025 = "",
      _0x5745ac = _0x8d3305["replace"](/\D/g, ""),
      _0x301fce = 0x0,
      _0x5d116f = 0x0;
    while (_0x301fce < _0x5745ac["length"] && _0x5d116f < _0x1da9b2["length"]) {
      _0x1da9b2[_0x5d116f] === "x"
        ? ((_0x44a025 += _0x5745ac[_0x301fce]), _0x301fce++)
        : (_0x44a025 += _0x1da9b2[_0x5d116f]),
        _0x5d116f++;
    }
    if (_0x8d3305[_0x40f1fa(0x1af)] < _0x14a1dc[_0x40f1fa(0x1af)]) {
      var _0x590e0e = _0x1da9b2[_0x40f1fa(0xfa)](_0x5d116f);
      _0x44a025 += _0x590e0e["replace"](/x/g, "");
    }
    return (_0x14a1dc = _0x44a025), _0x44a025;
  };
}
function validateURL(_0x373592) {
  const _0x219a72 = _0x346856;
  return urlPattern[_0x219a72(0x1aa)](_0x373592) ? !![] : ![];
}
quiz &&
  steps["each"](function () {
    const _0x3dbe74 = _0x346856;
    $(this)[_0x3dbe74(0x190)]()[_0x3dbe74(0xd7)](_0x3dbe74(0x1ca), !![]),
      $(this)[_0x3dbe74(0x190)]()[_0x3dbe74(0xd7)](_0x3dbe74(0x157), 0xfa);
  });
function disableBtn(_0x13cf1c) {
  const _0x4a28ef = _0x346856;
  (fill = ![]),
    !customError &&
      ($(_0x4a28ef(0x147))[_0x4a28ef(0x113)]({
        opacity: "0.4",
        "pointer-events": _0x4a28ef(0xf8),
      }),
      $(_0x4a28ef(0x147))["addClass"](_0x4a28ef(0xe1)),
      $("[data-form=\x22submit-btn\x22]")[_0x4a28ef(0x113)]({
        opacity: _0x4a28ef(0x16f),
        "pointer-events": _0x4a28ef(0xf8),
      }),
      $(_0x4a28ef(0xbf))[_0x4a28ef(0xbc)]("disabled"),
      $(_0x4a28ef(0x143))[_0x4a28ef(0x113)]({
        opacity: _0x4a28ef(0x16f),
        "pointer-events": _0x4a28ef(0xf8),
      }),
      $("[data-form-ms=\x22submit-btn\x22]")[_0x4a28ef(0xbc)](_0x4a28ef(0xe1)));
}
function enableBtn() {
  const _0x5543f4 = _0x346856;
  (fill = !![]),
    $(_0x5543f4(0x147))[_0x5543f4(0x113)]({
      "pointer-events": _0x5543f4(0xd5),
      opacity: "1",
    }),
    $(_0x5543f4(0x147))[_0x5543f4(0x136)](_0x5543f4(0xe1)),
    $(_0x5543f4(0xbf))[_0x5543f4(0x113)]({
      "pointer-events": _0x5543f4(0xd5),
      opacity: "1",
    }),
    $(_0x5543f4(0xbf))[_0x5543f4(0x136)](_0x5543f4(0xe1)),
    $(_0x5543f4(0x143))[_0x5543f4(0x113)]({
      "pointer-events": _0x5543f4(0xd5),
      opacity: "1",
    }),
    $("[data-form-ms=\x22submit-btn\x22]")[_0x5543f4(0x136)]("disabled");
}
function saveFilledInput() {
  const _0x100815 = _0x346856;
  $(_0x100815(0x1b9))
    [_0x100815(0xfe)](_0x100815(0x168))
    [_0x100815(0x16b)](function () {
      const _0x20a780 = _0x100815;
      $(this)[_0x20a780(0xd7)](_0x20a780(0x14c)) === "checkbox" ||
      $(this)[_0x20a780(0xd7)]("type") === "radio"
        ? $(this)[_0x20a780(0x16a)](_0x20a780(0x13f)) &&
          (filledInput[_0x20a780(0x146)](
            (_0xc97ba) =>
              _0xc97ba["inputName"] === $(this)["attr"](_0x20a780(0x1b6)),
          )
            ? ((filledInput = filledInput[_0x20a780(0x10f)](
                (_0x345773) =>
                  _0x345773[_0x20a780(0x19e)] !==
                  $(this)[_0x20a780(0xd7)](_0x20a780(0x1b6)),
              )),
              $(this)[_0x20a780(0x19b)]() !== "" &&
                filledInput[_0x20a780(0x198)]({
                  inputName: $(this)[_0x20a780(0xd7)](_0x20a780(0x1b6)),
                  value: $(this)[_0x20a780(0x19b)](),
                }))
            : $(this)[_0x20a780(0x19b)]() !== "" &&
              filledInput[_0x20a780(0x198)]({
                inputName: $(this)[_0x20a780(0xd7)](_0x20a780(0x1b6)),
                value: $(this)["val"](),
              }))
        : filledInput["some"](
              (_0x100602) =>
                _0x100602[_0x20a780(0x19e)] ===
                $(this)[_0x20a780(0xd7)](_0x20a780(0x1b6)),
            )
          ? ((filledInput = filledInput["filter"](
              (_0x608b0a) =>
                _0x608b0a[_0x20a780(0x19e)] !==
                $(this)[_0x20a780(0xd7)]("name"),
            )),
            $(this)["val"]() !== "" &&
              filledInput[_0x20a780(0x198)]({
                inputName: $(this)[_0x20a780(0xd7)]("name"),
                value: $(this)[_0x20a780(0x19b)](),
              }))
          : $(this)[_0x20a780(0x19b)]() !== "" &&
            filledInput[_0x20a780(0x198)]({
              inputName: $(this)[_0x20a780(0xd7)](_0x20a780(0x1b6)),
              value: $(this)[_0x20a780(0x19b)](),
            });
    }),
    localStorage[_0x100815(0x172)](_0x100815(0x15c)),
    localStorage["setItem"]("filledInput", JSON[_0x100815(0x19a)](filledInput));
}
function scrollTop() {
  const _0x5346b4 = _0x346856;
  scrollToTop &&
    $(_0x5346b4(0x133))[_0x5346b4(0xe9)](
      {
        scrollTop:
          $(_0x5346b4(0x163))[_0x5346b4(0x155)]()[_0x5346b4(0x1c1)] -
          scrollTopOffset,
      },
      0x3e8,
    );
}
function updateStep() {
  const _0x4a0a6e = _0x346856;
  scrollTop(),
    (skip = ![]),
    $("[data-form=\x22custom-progress-indicator\x22]")["removeClass"](
      _0x4a0a6e(0xe1),
    );
  $("[data-clickable]")[_0x4a0a6e(0x14a)](_0x4a0a6e(0x109)) &&
    (steps["find"](_0x4a0a6e(0xe2))[_0x4a0a6e(0x16b)](function () {
      const _0x4f4a5c = _0x4a0a6e;
      $(
        $("[data-form=\x22custom-progress-indicator\x22]")[
          $(this)
            [_0x4f4a5c(0xc9)]("[data-form=\x22step\x22]")
            [_0x4f4a5c(0xc7)]()
        ],
      ),
        $(this)[_0x4f4a5c(0x19b)]() === "" && emptyInput++;
    }),
    emptyInput > 0x0
      ? $("input[type=\x22submit\x22]")["addClass"](_0x4a0a6e(0xe1))
      : $(_0x4a0a6e(0x1cd))[_0x4a0a6e(0x136)]("disabled"));
  $("[data-form=\x22custom-progress-indicator\x22]")["removeClass"](
    _0x4a0a6e(0x1b2),
  ),
    $(_0x4a0a6e(0x128))[_0x4a0a6e(0xbc)](_0x4a0a6e(0xe1)),
    $($(_0x4a0a6e(0x128))[x])[_0x4a0a6e(0xbc)](_0x4a0a6e(0x1b2)),
    (selection = selections[_0x4a0a6e(0x10f)](
      (_0x1f8659) => _0x1f8659["step"] === x - 0x1,
    ));
  next &&
    (x = getSafe(() => selection[0x0][_0x4a0a6e(0xeb)])
      ? parseInt(getSafe(() => selection[0x0][_0x4a0a6e(0xeb)]))
      : x);
  $(_0x4a0a6e(0x1c0))[_0x4a0a6e(0x11d)](), steps["hide"]();
  reinitIX === !![] && window[_0x4a0a6e(0x1b1)][_0x4a0a6e(0x177)]();
  $(progressbar)[_0x4a0a6e(0x136)](_0x4a0a6e(0x1b2));
  for (i = 0x0; i <= x; i++) {
    countCard
      ? $(progressbar[i])["addClass"](_0x4a0a6e(0x1b2))
      : !$(steps[i])["data"]("card") &&
        $(progressbar[i])[_0x4a0a6e(0xbc)](_0x4a0a6e(0x1b2));
  }
  reinitIX === !![]
    ? (window[_0x4a0a6e(0x1b1)] &&
        window["Webflow"][_0x4a0a6e(0x107)](_0x4a0a6e(0x17d))["init"](),
      document["dispatchEvent"](new Event(_0x4a0a6e(0x184))),
      $(steps[x])[_0x4a0a6e(0x17f)]())
    : $(steps[x])[_0x4a0a6e(0x11e)](_0x4a0a6e(0x12d));
  $(".active-answer-card")["removeClass"](_0x4a0a6e(0x14d));
  x === 0x0 &&
    !$(steps[x])["data"](_0x4a0a6e(0x1a3)) &&
    ($(steps[x])[_0x4a0a6e(0xe7)](_0x4a0a6e(0x1c0))[_0x4a0a6e(0x17f)](),
    $(steps[x])
      [_0x4a0a6e(0xe7)](_0x4a0a6e(0x1c0))
      ["addClass"](_0x4a0a6e(0x14d)));
  selection[_0x4a0a6e(0x1af)] > 0x0
    ? ($(steps[x])
        [_0x4a0a6e(0xe7)](
          _0x4a0a6e(0x125) + selection[0x0][_0x4a0a6e(0x139)] + "\x22]",
        )
        [_0x4a0a6e(0x17f)](),
      $(steps[x])
        ["find"](
          "[data-answer=\x22" + selection[0x0][_0x4a0a6e(0x139)] + "\x22]",
        )
        [_0x4a0a6e(0xbc)](_0x4a0a6e(0x14d)))
    : ($(steps[x])
        [_0x4a0a6e(0xe7)]("[data-answer=\x22" + answer + "\x22]")
        [_0x4a0a6e(0x17f)](),
      $(steps[x])
        [_0x4a0a6e(0xe7)]("[data-answer=\x22" + answer + "\x22]")
        ["addClass"]("active-answer-card"));
  if (x === 0x0)
    $(_0x4a0a6e(0xe4))[_0x4a0a6e(0x11d)](),
      $(_0x4a0a6e(0x147))[_0x4a0a6e(0x17f)](),
      $(_0x4a0a6e(0xbf))["hide"]();
  else {
    if (
      x === steps[_0x4a0a6e(0x1af)] - 0x1 ||
      $(steps[x])["find"](_0x4a0a6e(0x1b7))[_0x4a0a6e(0x1af)] > 0x0
    ) {
      $(_0x4a0a6e(0x147))[_0x4a0a6e(0x11d)]();
      if (
        $(steps[x])
          [_0x4a0a6e(0xe7)](_0x4a0a6e(0x1ad))
          [_0x4a0a6e(0x14a)](_0x4a0a6e(0x112))
      )
        $(steps[x])[_0x4a0a6e(0xe7)](_0x4a0a6e(0x1ad))[_0x4a0a6e(0x17f)]();
      else
        $("[data-form=\x22next-btn\x22]")[_0x4a0a6e(0x14a)]("submit-show") &&
          $(_0x4a0a6e(0x147))[_0x4a0a6e(0x17f)]();
      $(_0x4a0a6e(0xbf))[_0x4a0a6e(0x17f)](),
        $("[data-form-ms=\x22submit-btn\x22]")["show"](),
        $(_0x4a0a6e(0xe4))[_0x4a0a6e(0x17f)]();
    } else
      $(_0x4a0a6e(0x147))[_0x4a0a6e(0x17f)](),
        $("[data-form=\x22back-btn\x22]")[_0x4a0a6e(0x17f)](),
        $(_0x4a0a6e(0xbf))["hide"](),
        $(_0x4a0a6e(0x143))[_0x4a0a6e(0x11d)]();
  }
  $($(steps[x])[_0x4a0a6e(0xe7)](_0x4a0a6e(0x119))[0x0])[_0x4a0a6e(0xde)](),
    $($(steps[x])["find"](_0x4a0a6e(0x19d))[0x0])[_0x4a0a6e(0xde)](),
    validation();
  for (idx = 0x0; idx <= x; idx++) {
    $($(_0x4a0a6e(0x128))[idx])[_0x4a0a6e(0x136)](_0x4a0a6e(0xe1));
  }
}
function validateEmail(_0x1edd92, _0x24cf04, _0x3c7af1) {
  const _0x406b61 = _0x346856;
  let _0x2001fd = _0x1edd92[_0x406b61(0x13b)]("@")
    ? _0x1edd92["split"]("@")[0x1][_0x406b61(0xe8)](".")[0x0]
    : [];
  dom = [];
  _0x24cf04 !== undefined &&
    _0x24cf04["split"](",")[_0x406b61(0xfb)](function (_0x3575a2) {
      const _0x10c1c8 = _0x406b61;
      _0x3575a2["includes"](_0x2001fd) && dom[_0x10c1c8(0x198)](_0x2001fd);
    });
  dom[_0x406b61(0x1af)] > 0x0 ? (domainAllowed = ![]) : (domainAllowed = !![]);
  var _0x78e301 = /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,20})?$/;
  console["log"](_0x78e301[_0x406b61(0x1aa)](_0x1edd92)),
    !_0x78e301[_0x406b61(0x1aa)](_0x1edd92) || !domainAllowed
      ? ((emailFilled = ![]),
        unfilledArr[_0x406b61(0x198)]({ input: _0x3c7af1 }))
      : (emailFilled = !![]);
}
function phoneValidation(_0x5db3c1, _0xcc9764, _0x17c980) {
  const _0xa950e8 = _0x346856;
  if (phoneFormat)
    return _0x5db3c1[_0xa950e8(0x10a)](
      new RegExp(phoneFormat[_0xa950e8(0xfa)](0x1, -0x1)),
    ) && _0xcc9764 >= _0x17c980
      ? !![]
      : ![];
  else {
    if (_0xcc9764 >= _0x17c980) return !![];
  }
}
function validation() {
  const _0x1e592f = _0x346856;
  $(steps[x])["data"](_0x1e592f(0x1a3)) && enableBtn();
  (unfilledArr = []),
    (inputFilled = !![]),
    (radioFilled = !![]),
    (checkboxFilled = !![]),
    (numFilled = !![]),
    (fileFilled = !![]),
    (dateFilled = !![]),
    (selectFilled = !![]),
    (textareaFilled = !![]),
    (telFilled = !![]),
    (emailFilled = !![]),
    (passwordFilled = !![]),
    (emptyInput = 0x0),
    (empReqInput = []),
    (empReqDate = []),
    (empReqSelect = []),
    (empReqTextarea = []),
    (empReqNum = []),
    (empReqFile = []),
    (empReqRadio = []),
    (textareaLength = $(steps[x])[_0x1e592f(0xe7)](_0x1e592f(0xed))[
      _0x1e592f(0x1af)
    ]),
    (textInputLength = $(steps[x])[_0x1e592f(0xe7)](_0x1e592f(0xd1))[
      _0x1e592f(0x1af)
    ]),
    (selectInputLength = $(steps[x])["find"](_0x1e592f(0x15b))[
      _0x1e592f(0x1af)
    ]),
    (emailInputLength = $(steps[x])[_0x1e592f(0xe7)](_0x1e592f(0x15a))[
      "length"
    ]),
    (checkboxInputLength = $(steps[x])[_0x1e592f(0xe7)](
      "input[type=\x22checkbox\x22]:visible",
    )["length"]);
  textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0
    ? disableBtn()
    : enableBtn();
  checkCount = $(steps[x])[_0x1e592f(0x14a)](_0x1e592f(0xee))
    ? $(steps[x])["data"](_0x1e592f(0xee))
    : $(steps[x])[_0x1e592f(0xe7)](_0x1e592f(0x1a2))[_0x1e592f(0x1af)] > 0x0
      ? $(steps[x])
          [_0x1e592f(0xe7)](_0x1e592f(0x1a2))
          [_0x1e592f(0x14a)](_0x1e592f(0xee))
      : 0x0;
  if (!logicExtra)
    $(steps[x])["find"](_0x1e592f(0x197))["is"](_0x1e592f(0x188)) &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])[_0x1e592f(0xe7)](_0x1e592f(0x166))[_0x1e592f(0x1af)]
        ? $(steps[x])
            [_0x1e592f(0xe7)](_0x1e592f(0x166))
            ["each"](function () {
              const _0x267ec6 = _0x1e592f;
              $(this)["is"](_0x267ec6(0x1c8))
                ? $(steps[x])[_0x267ec6(0xe7)](_0x267ec6(0x175))["length"] <
                    0x1 &&
                  ((checkboxFilled = !![]),
                  resetInputErrorMessage($(this)[_0x267ec6(0xd7)]("name")))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0x267ec6(0x198)]({
                    input: $(this)[_0x267ec6(0xd7)](_0x267ec6(0x1b6)),
                  }));
            })
        : $(steps[x])[_0x1e592f(0xe7)](_0x1e592f(0x17a))[_0x1e592f(0x1af)] >=
            checkCount
          ? $(steps[x])["find"](_0x1e592f(0x175))[_0x1e592f(0x1af)] > 0x0
            ? $(steps[x])
                [_0x1e592f(0xe7)](_0x1e592f(0x175))
                ["each"](function () {
                  const _0x5d7eb7 = _0x1e592f;
                  !$(this)["is"](_0x5d7eb7(0x1c8))
                    ? ((checkboxFilled = ![]),
                      unfilledArr["push"]({
                        input: $(this)[_0x5d7eb7(0xd7)](_0x5d7eb7(0x1b6)),
                      }))
                    : ((checkboxFilled = !![]),
                      $(steps[x])["find"](
                        ":input[type=\x22checkbox\x22][required]:checked",
                      )["length"] >=
                        $(steps[x])["find"](_0x5d7eb7(0x175))[
                          _0x5d7eb7(0x1af)
                        ] &&
                        resetInputErrorMessage(
                          $(steps[x])
                            [_0x5d7eb7(0xe7)](_0x5d7eb7(0x166))
                            [_0x5d7eb7(0xd7)](_0x5d7eb7(0x1b6)),
                        ));
                })
            : ((checkboxFilled = !![]),
              resetInputErrorMessage(
                $(steps[x])
                  [_0x1e592f(0xe7)](_0x1e592f(0x166))
                  [_0x1e592f(0xd7)](_0x1e592f(0x1b6)),
              ))
          : ((checkboxFilled = ![]),
            $(steps[x])
              [_0x1e592f(0xe7)](":input[type=\x22checkbox\x22][required]")
              [_0x1e592f(0x16b)](function () {
                const _0x33fd60 = _0x1e592f;
                $(this)[_0x33fd60(0xfe)](":checked") &&
                  unfilledArr[_0x33fd60(0x198)]({
                    input: $(this)[_0x33fd60(0xd7)]("name"),
                  });
              }),
            unfilledArr["push"]({
              input: $(steps[x])
                [_0x1e592f(0xe7)](_0x1e592f(0x166))
                ["attr"](_0x1e592f(0x1b6)),
            }))),
      $(steps[x])
        [_0x1e592f(0xe7)](_0x1e592f(0x1c3))
        [_0x1e592f(0x16b)](function (_0x5e44bc) {
          const _0x55aed3 = _0x1e592f;
          var _0x525fec = $(this)["attr"](_0x55aed3(0x1b6));
          $(_0x55aed3(0x12b) + _0x525fec + _0x55aed3(0xfd))[_0x55aed3(0x1af)] ==
          0x0
            ? (!empReqRadio[_0x55aed3(0xe7)](
                (_0x3ef427) => _0x3ef427[_0x55aed3(0x193)] === _0x5e44bc,
              ) && empReqRadio["push"]({ input: _0x5e44bc }),
              unfilledArr[_0x55aed3(0x198)]({
                input: $(this)[_0x55aed3(0xd7)]("name"),
              }))
            : (empReqRadio = empReqRadio[_0x55aed3(0x10f)](
                (_0x3eaa52) => _0x3eaa52["input"] !== _0x5e44bc,
              )),
            empReqRadio[_0x55aed3(0x1af)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0x1e592f(0xe7)](":input[type=\x22text\x22][required]")
        [_0x1e592f(0x16b)](function (_0x1d4f86) {
          const _0x5147b7 = _0x1e592f;
          let _0x427f0e = $(this)[_0x5147b7(0x19b)]()[_0x5147b7(0x1af)],
            _0x48cae0 = $(this)[_0x5147b7(0x14a)](_0x5147b7(0x11b))
              ? $(this)[_0x5147b7(0x14a)]("min-character")
              : 0x0;
          $(this)[_0x5147b7(0x19b)]() !== "" && _0x427f0e >= _0x48cae0
            ? (empReqInput = empReqInput["filter"](
                (_0x467af2) => _0x467af2[_0x5147b7(0x193)] !== _0x1d4f86,
              ))
            : (!empReqInput[_0x5147b7(0xe7)](
                (_0x2c6247) => _0x2c6247[_0x5147b7(0x193)] === _0x1d4f86,
              ) && empReqInput[_0x5147b7(0x198)]({ input: _0x1d4f86 }),
              unfilledArr["push"]({
                input: $(this)[_0x5147b7(0xd7)](_0x5147b7(0x1b6)),
              })),
            empReqInput[_0x5147b7(0x1af)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x1e592f(0xe7)](_0x1e592f(0x131))
        [_0x1e592f(0x16b)](function (_0x335d36) {
          const _0x321869 = _0x1e592f;
          let _0x302490 = $(this)["val"]()[_0x321869(0x1af)],
            _0x3d1124 = $(this)[_0x321869(0x14a)](_0x321869(0x11b))
              ? $(this)[_0x321869(0x14a)](_0x321869(0x11b))
              : 0x0;
          $(this)[_0x321869(0x19b)]() !== "" && _0x302490 >= _0x3d1124
            ? (empReqPassword = empReqPassword[_0x321869(0x10f)](
                (_0x244ba8) => _0x244ba8[_0x321869(0x193)] !== _0x335d36,
              ))
            : (!empReqPassword[_0x321869(0xe7)](
                (_0x585dee) => _0x585dee["input"] === _0x335d36,
              ) && empReqPassword["push"]({ input: _0x335d36 }),
              unfilledArr[_0x321869(0x198)]({
                input: $(this)[_0x321869(0xd7)](_0x321869(0x1b6)),
              })),
            empReqPassword[_0x321869(0x1af)] === 0x0
              ? (passwordFilled = !![])
              : (passwordFilled = ![]);
        }),
      $(steps[x])
        [_0x1e592f(0xe7)](_0x1e592f(0x1d0))
        [_0x1e592f(0x16b)](function (_0x2973ba) {
          const _0x2972fd = _0x1e592f;
          let _0x8a7dbc = $(this)[_0x2972fd(0x19b)]()[_0x2972fd(0x1af)],
            _0x1eedb0 = $(this)[_0x2972fd(0x14a)](_0x2972fd(0x11b))
              ? $(this)[_0x2972fd(0x14a)](_0x2972fd(0x11b))
              : 0x0;
          $(this)[_0x2972fd(0x19b)]() !== "" && _0x8a7dbc >= _0x1eedb0
            ? (empReqUrl = empReqUrl[_0x2972fd(0x10f)](
                (_0x165eb6) => _0x165eb6[_0x2972fd(0x193)] !== _0x2973ba,
              ))
            : (!empReqUrl["find"](
                (_0x291926) => _0x291926[_0x2972fd(0x193)] === _0x2973ba,
              ) && empReqUrl["push"]({ input: _0x2973ba }),
              unfilledArr["push"]({
                input: $(this)[_0x2972fd(0xd7)](_0x2972fd(0x1b6)),
              })),
            empReqUrl[_0x2972fd(0x1af)] === 0x0 &&
            validateURL($(this)[_0x2972fd(0x19b)]())
              ? ((urlFilled = !![]), console["log"](urlFilled))
              : (urlFilled = ![]);
        }),
      $(steps[x])
        ["find"](":input[type=\x22date\x22][required]")
        ["each"](function (_0x12ede7) {
          const _0x3df1ad = _0x1e592f;
          $(this)[_0x3df1ad(0x19b)]() !== ""
            ? (empReqDate = empReqDate[_0x3df1ad(0x10f)](
                (_0x54f205) => _0x54f205[_0x3df1ad(0x193)] !== _0x12ede7,
              ))
            : (!empReqDate[_0x3df1ad(0xe7)](
                (_0x58edc3) => _0x58edc3["input"] === _0x12ede7,
              ) && empReqDate[_0x3df1ad(0x198)]({ input: _0x12ede7 }),
              unfilledArr[_0x3df1ad(0x198)]({
                input: $(this)[_0x3df1ad(0xd7)](_0x3df1ad(0x1b6)),
              })),
            empReqDate["length"] === 0x0
              ? (dateFilled = !![])
              : (dateFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x1e592f(0x17e))
        [_0x1e592f(0x16b)](function (_0x1ec190) {
          const _0x7a6b0a = _0x1e592f;
          if ($(this)["val"]() !== "") {
            let _0x5c2a13 = $(this)[_0x7a6b0a(0x19b)]()["length"],
              _0x2b838b = $(this)[_0x7a6b0a(0x14a)](_0x7a6b0a(0x11b))
                ? $(this)[_0x7a6b0a(0x14a)](_0x7a6b0a(0x11b))
                : 0x0;
            if ($(this)[_0x7a6b0a(0x14a)]("phone-autoformat")) {
              var _0x18930e = phoneAutoFormat(
                $(this)[_0x7a6b0a(0x14a)](_0x7a6b0a(0xfc)),
              );
              $(this)[_0x7a6b0a(0x19b)](_0x18930e($(this)[_0x7a6b0a(0x19b)]()));
            }
            phoneValidation($(this)["val"](), _0x5c2a13, _0x2b838b)
              ? (empReqTel = empReqTel[_0x7a6b0a(0x10f)](
                  (_0x107555) => _0x107555[_0x7a6b0a(0x193)] !== _0x1ec190,
                ))
              : empReqTel[_0x7a6b0a(0x198)]({ input: _0x1ec190 });
          } else
            !empReqTel[_0x7a6b0a(0xe7)](
              (_0x1774df) => _0x1774df[_0x7a6b0a(0x193)] === _0x1ec190,
            ) && empReqTel[_0x7a6b0a(0x198)]({ input: _0x1ec190 }),
              unfilledArr["push"]({
                input: $(this)[_0x7a6b0a(0xd7)](_0x7a6b0a(0x1b6)),
              });
          empReqTel[_0x7a6b0a(0x1af)] === 0x0
            ? (telFilled = !![])
            : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x1e592f(0xe7)](_0x1e592f(0x1c2))
        [_0x1e592f(0x16b)](function (_0x17e161) {
          const _0x1d2ac5 = _0x1e592f;
          $(this)[_0x1d2ac5(0x19b)]() !== ""
            ? (empReqFile = empReqFile["filter"](
                (_0x3f8c1a) => _0x3f8c1a[_0x1d2ac5(0x193)] !== _0x17e161,
              ))
            : (!empReqFile[_0x1d2ac5(0xe7)](
                (_0x69b5b1) => _0x69b5b1[_0x1d2ac5(0x193)] === _0x17e161,
              ) && empReqFile["push"]({ input: _0x17e161 }),
              unfilledArr[_0x1d2ac5(0x198)]({
                input: $(this)[_0x1d2ac5(0xd7)](_0x1d2ac5(0x1b6)),
              })),
            empReqFile[_0x1d2ac5(0x1af)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x1e592f(0xe7)](":input[type=\x22number\x22][required]")
        [_0x1e592f(0x16b)](function (_0x430ba8) {
          const _0xd139c4 = _0x1e592f;
          let _0x5d1937 = $(this)[_0xd139c4(0x19b)]()[_0xd139c4(0x1af)],
            _0x32f92d = $(this)[_0xd139c4(0x14a)](_0xd139c4(0x11b))
              ? $(this)["data"](_0xd139c4(0x11b))
              : 0x0;
          $(this)[_0xd139c4(0x19b)]() !== "" && _0x5d1937 >= _0x32f92d
            ? (empReqNum = empReqNum[_0xd139c4(0x10f)](
                (_0x49efb1) => _0x49efb1[_0xd139c4(0x193)] !== _0x430ba8,
              ))
            : (!empReqNum[_0xd139c4(0xe7)](
                (_0x2c528f) => _0x2c528f["input"] === _0x430ba8,
              ) && empReqNum[_0xd139c4(0x198)]({ input: _0x430ba8 }),
              unfilledArr[_0xd139c4(0x198)]({
                input: $(this)[_0xd139c4(0xd7)](_0xd139c4(0x1b6)),
              })),
            empReqNum[_0xd139c4(0x1af)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x1e592f(0x173))
        ["each"](function (_0x2e25c5) {
          const _0xe8b7f9 = _0x1e592f;
          let _0x330f20 = $(this)[_0xe8b7f9(0x19b)]();
          _0x330f20 === "" && (_0x330f20 = null),
            _0x330f20 != null
              ? (empReqSelect = empReqSelect[_0xe8b7f9(0x10f)](
                  (_0x86a668) => _0x86a668[_0xe8b7f9(0x193)] !== _0x2e25c5,
                ))
              : (!empReqSelect[_0xe8b7f9(0xe7)](
                  (_0x1e4cbd) => _0x1e4cbd[_0xe8b7f9(0x193)] === _0x2e25c5,
                ) && empReqSelect[_0xe8b7f9(0x198)]({ input: _0x2e25c5 }),
                unfilledArr[_0xe8b7f9(0x198)]({
                  input: $(this)[_0xe8b7f9(0xd7)](_0xe8b7f9(0x1b6)),
                })),
            empReqSelect[_0xe8b7f9(0x1af)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x1e592f(0xe7)](_0x1e592f(0x158))
        [_0x1e592f(0x16b)](function (_0x1c2d37) {
          const _0x49c77e = _0x1e592f;
          let _0x57fe8f = $(this)[_0x49c77e(0x19b)]()["length"],
            _0x1337a8 = $(this)[_0x49c77e(0x14a)](_0x49c77e(0x11b))
              ? $(this)["data"](_0x49c77e(0x11b))
              : 0x0;
          $(this)[_0x49c77e(0x19b)]() !== "" && _0x57fe8f >= _0x1337a8
            ? (empReqTextarea = empReqTextarea[_0x49c77e(0x10f)](
                (_0x186dee) => _0x186dee[_0x49c77e(0x193)] !== _0x1c2d37,
              ))
            : (!empReqTextarea[_0x49c77e(0xe7)](
                (_0x1b0524) => _0x1b0524[_0x49c77e(0x193)] === _0x1c2d37,
              ) && empReqTextarea[_0x49c77e(0x198)]({ input: _0x1c2d37 }),
              unfilledArr[_0x49c77e(0x198)]({
                input: $(this)["attr"](_0x49c77e(0x1b6)),
              })),
            empReqTextarea["length"] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x1e592f(0xe7)](_0x1e592f(0x18e))
        ["each"](function () {
          const _0x27be32 = _0x1e592f;
          $(this)[_0x27be32(0x19b)]() !== ""
            ? validateEmail(
                $(this)[_0x27be32(0x19b)](),
                $(this)[_0x27be32(0x14a)]("block-domain"),
                $(this)[_0x27be32(0xd7)]("name"),
              )
            : ((emailFilled = ![]),
              unfilledArr[_0x27be32(0x198)]({
                input: $(this)[_0x27be32(0xd7)](_0x27be32(0x1b6)),
              }));
        });
  else {
    if ($(steps[x])[_0x1e592f(0x14a)](_0x1e592f(0x1a3)))
      (answer = $(steps[x])
        ["find"]("[data-go-to]")
        [_0x1e592f(0x14a)](_0x1e592f(0xd2))),
        (selections = selections[_0x1e592f(0x10f)](
          (_0x47e613) => _0x47e613[_0x1e592f(0xce)] !== x,
        )),
        selections[_0x1e592f(0x198)]({ step: x, selected: answer });
    else
      $(steps[x])
        ["find"](".active-answer-card")
        [_0x1e592f(0x14a)](_0x1e592f(0x1a3)) &&
        ((answer = $(steps[x])
          ["find"](".active-answer-card")
          [_0x1e592f(0x14a)](_0x1e592f(0xd2))),
        (selections = selections[_0x1e592f(0x10f)](
          (_0x2e3cde) => _0x2e3cde[_0x1e592f(0xce)] !== x,
        )),
        selections[_0x1e592f(0x198)]({ step: x, selected: answer }));
    $(steps[x])
      [_0x1e592f(0xe7)](_0x1e592f(0x167))
      [_0x1e592f(0xe7)](_0x1e592f(0x197))
      ["is"](_0x1e592f(0x188)) &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])[_0x1e592f(0xe7)](":input[type=\x22checkbox\x22]")[
          _0x1e592f(0x1af)
        ]
        ? $(steps[x])
            [_0x1e592f(0xe7)](":input[type=\x22checkbox\x22]")
            [_0x1e592f(0x16b)](function () {
              const _0x38fb0a = _0x1e592f;
              $(this)["is"](_0x38fb0a(0x1c8))
                ? $(steps[x])[_0x38fb0a(0xe7)](_0x38fb0a(0xe2))[
                    _0x38fb0a(0x1af)
                  ] < 0x1 &&
                  ((skipTo = undefined),
                  $(this)
                    [_0x38fb0a(0xc9)](_0x38fb0a(0x1c5))
                    [_0x38fb0a(0x14a)](_0x38fb0a(0x118)) &&
                    (skipTo = $(this)
                      [_0x38fb0a(0xc9)]("[data-skip-to]")
                      [_0x38fb0a(0x14a)](_0x38fb0a(0x118))),
                  $(this)
                    [_0x38fb0a(0xc9)](_0x38fb0a(0x121))
                    ["attr"](_0x38fb0a(0x110)) &&
                    ((answer = $(this)
                      ["parents"](_0x38fb0a(0x121))
                      ["attr"](_0x38fb0a(0x110))),
                    (selections = selections[_0x38fb0a(0x10f)](
                      (_0x34d004) => _0x34d004[_0x38fb0a(0xce)] !== x,
                    )),
                    selections["push"]({ step: x, selected: answer }),
                    skipTo &&
                      (selections[_0x38fb0a(0x198)]({
                        step: skipTo - 0x2,
                        selected: answer,
                      }),
                      (objIndex = selections[_0x38fb0a(0x135)](
                        (_0x2c2e3c) => _0x2c2e3c[_0x38fb0a(0xce)] === x,
                      )),
                      (selections[objIndex][_0x38fb0a(0xeb)] =
                        parseInt(skipTo) - 0x1),
                      (selections[objIndex]["backTo"] = x))),
                  (checkboxFilled = !![]),
                  $(steps[x])["find"](_0x38fb0a(0xda))[_0x38fb0a(0x1af)] >=
                    $(steps[x])[_0x38fb0a(0xe7)](_0x38fb0a(0x175))[
                      _0x38fb0a(0x1af)
                    ] &&
                    resetInputErrorMessage(
                      $(steps[x])
                        [_0x38fb0a(0xe7)](_0x38fb0a(0x166))
                        [_0x38fb0a(0xd7)](_0x38fb0a(0x1b6)),
                    ))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0x38fb0a(0x198)]({
                    input: $(this)["attr"](_0x38fb0a(0x1b6)),
                  }));
            })
        : $(steps[x])
              ["find"](_0x1e592f(0x167))
              [_0x1e592f(0xe7)](_0x1e592f(0x17a))["length"] >= checkCount
          ? ($(steps[x])
              [_0x1e592f(0xe7)](".active-answer-card")
              ["find"](_0x1e592f(0x166))
              [_0x1e592f(0xc9)](_0x1e592f(0x121))
              ["attr"](_0x1e592f(0x110)) &&
              ((skipTo = undefined),
              $(steps[x])
                ["find"](".active-answer-card")
                [_0x1e592f(0xe7)](_0x1e592f(0x166))
                [_0x1e592f(0xc9)](_0x1e592f(0x1c5))
                ["attr"]("data-skip-to") &&
                (skipTo = $(steps[x])
                  ["find"](_0x1e592f(0x167))
                  [_0x1e592f(0xe7)](_0x1e592f(0x17a))
                  ["parents"]("[data-skip-to]")
                  ["attr"]("data-skip-to")),
              (answer = $(steps[x])
                ["find"](_0x1e592f(0x167))
                [_0x1e592f(0xe7)](_0x1e592f(0x166))
                [_0x1e592f(0xc9)]("[data-go-to]")
                [_0x1e592f(0xd7)](_0x1e592f(0x110))),
              (selections = selections[_0x1e592f(0x10f)](
                (_0x511918) => _0x511918[_0x1e592f(0xce)] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              console["log"]("selected", selections),
              skipTo &&
                ((selections = selections[_0x1e592f(0x10f)](
                  (_0x12ec32) => _0x12ec32[_0x1e592f(0xce)] !== skipTo - 0x2,
                )),
                selections[_0x1e592f(0x198)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x1e592f(0x135)](
                  (_0x42cf8a) => _0x42cf8a["step"] === x,
                )),
                console[_0x1e592f(0x11f)](objIndex),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x1e592f(0xbb)] = x),
                console["log"](_0x1e592f(0xc5)))),
            (checkboxFilled = !![]),
            $(steps[x])["find"](
              ":input[type=\x22checkbox\x22][required]:checked",
            )[_0x1e592f(0x1af)] >=
              $(steps[x])["find"](_0x1e592f(0x175))[_0x1e592f(0x1af)] &&
              resetInputErrorMessage(
                $(steps[x])
                  ["find"](_0x1e592f(0x166))
                  [_0x1e592f(0xd7)](_0x1e592f(0x1b6)),
              ))
          : ((checkboxFilled = ![]),
            $(steps[x])
              [_0x1e592f(0xe7)](":input[type=\x22checkbox\x22][required]")
              [_0x1e592f(0x16b)](function () {
                const _0xfee21a = _0x1e592f;
                $(this)[_0xfee21a(0xfe)](_0xfee21a(0x1c8)) &&
                  unfilledArr[_0xfee21a(0x198)]({
                    input: $(this)[_0xfee21a(0xd7)]("name"),
                  });
              }))),
      $(steps[x])
        ["find"](".active-answer-card")
        [_0x1e592f(0xe7)](_0x1e592f(0x1c3))
        ["each"](function (_0x556fc7) {
          const _0x27264e = _0x1e592f;
          var _0x1e7806 = $(this)["attr"](_0x27264e(0x1b6));
          $(_0x27264e(0x12b) + _0x1e7806 + _0x27264e(0xfd))[_0x27264e(0x1af)] ==
          0x0
            ? (!empReqRadio[_0x27264e(0xe7)](
                (_0x3c8e3e) => _0x3c8e3e[_0x27264e(0x193)] === _0x556fc7,
              ) && empReqRadio["push"]({ input: _0x556fc7 }),
              unfilledArr[_0x27264e(0x198)]({
                input: $(this)[_0x27264e(0xd7)](_0x27264e(0x1b6)),
              }))
            : (empReqRadio = empReqRadio["filter"](
                (_0x22595a) => _0x22595a[_0x27264e(0x193)] !== _0x556fc7,
              )),
            empReqRadio[_0x27264e(0x1af)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0x1e592f(0xe7)](_0x1e592f(0x167))
        [_0x1e592f(0xe7)](_0x1e592f(0x186))
        ["each"](function (_0x33f0ee) {
          const _0xe6b7e6 = _0x1e592f;
          let _0x40be12 = $(this)[_0xe6b7e6(0x19b)]()[_0xe6b7e6(0x1af)],
            _0x343f9a = $(this)[_0xe6b7e6(0x14a)](_0xe6b7e6(0x11b))
              ? $(this)[_0xe6b7e6(0x14a)]("min-character")
              : 0x0;
          $(this)["val"]() !== "" && _0x40be12 >= _0x343f9a
            ? (empReqInput = empReqInput["filter"](
                (_0x42a0aa) => _0x42a0aa[_0xe6b7e6(0x193)] !== _0x33f0ee,
              ))
            : (!empReqInput[_0xe6b7e6(0xe7)](
                (_0x41d4dd) => _0x41d4dd[_0xe6b7e6(0x193)] === _0x33f0ee,
              ) && empReqInput[_0xe6b7e6(0x198)]({ input: _0x33f0ee }),
              unfilledArr[_0xe6b7e6(0x198)]({
                input: $(this)[_0xe6b7e6(0xd7)](_0xe6b7e6(0x1b6)),
              })),
            empReqInput[_0xe6b7e6(0x1af)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        ["find"](".active-answer-card")
        [_0x1e592f(0xe7)](_0x1e592f(0xba))
        [_0x1e592f(0x16b)](function (_0x1e35b1) {
          const _0x55e291 = _0x1e592f;
          (skipTo = undefined),
            $(this)
              [_0x55e291(0xc9)](_0x55e291(0x1c5))
              ["data"](_0x55e291(0x118)) !== "" &&
              (skipTo = $(this)
                [_0x55e291(0xc9)](_0x55e291(0x1c5))
                [_0x55e291(0x14a)](_0x55e291(0x118))),
            $(this)
              ["parents"](_0x55e291(0x121))
              [_0x55e291(0xd7)](_0x55e291(0x110)) &&
              ((answer = $(this)
                ["parents"]("[data-go-to]")
                ["attr"](_0x55e291(0x110))),
              (selections = selections[_0x55e291(0x10f)](
                (_0x3f6469) => _0x3f6469[_0x55e291(0xce)] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x55e291(0x198)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x2cf344) => _0x2cf344[_0x55e291(0xce)] === x,
                )),
                (selections[objIndex][_0x55e291(0xeb)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x55e291(0xbb)] = x)));
        }),
      $(steps[x])
        [_0x1e592f(0xe7)](_0x1e592f(0x167))
        ["find"](_0x1e592f(0x131))
        [_0x1e592f(0x16b)](function (_0x4ae957) {
          const _0x3d4eff = _0x1e592f;
          let _0x9184b7 = $(this)["val"]()[_0x3d4eff(0x1af)],
            _0x4a6cf1 = $(this)[_0x3d4eff(0x14a)](_0x3d4eff(0x11b))
              ? $(this)[_0x3d4eff(0x14a)]("min-character")
              : 0x0;
          $(this)[_0x3d4eff(0x19b)]() !== "" && _0x9184b7 >= _0x4a6cf1
            ? (empReqPassword = empReqPassword["filter"](
                (_0x5ec687) => _0x5ec687[_0x3d4eff(0x193)] !== _0x4ae957,
              ))
            : (!empReqPassword[_0x3d4eff(0xe7)](
                (_0x2ab40a) => _0x2ab40a[_0x3d4eff(0x193)] === _0x4ae957,
              ) && empReqPassword[_0x3d4eff(0x198)]({ input: _0x4ae957 }),
              unfilledArr[_0x3d4eff(0x198)]({
                input: $(this)["attr"](_0x3d4eff(0x1b6)),
              })),
            empReqPassword[_0x3d4eff(0x1af)] === 0x0
              ? (passwordFilled = !![])
              : (passwordFilled = ![]);
        }),
      $(steps[x])
        [_0x1e592f(0xe7)](_0x1e592f(0x167))
        [_0x1e592f(0xe7)](":input[type=\x22password\x22]")
        [_0x1e592f(0x16b)](function (_0x3fae94) {
          const _0xaaae7 = _0x1e592f;
          (skipTo = undefined),
            $(this)[_0xaaae7(0xc9)](_0xaaae7(0x1c5))["data"]("skip-to") !==
              "" &&
              (skipTo = $(this)
                [_0xaaae7(0xc9)]("[data-skip-to]")
                [_0xaaae7(0x14a)](_0xaaae7(0x118))),
            $(this)
              ["parents"](_0xaaae7(0x121))
              [_0xaaae7(0xd7)](_0xaaae7(0x110)) &&
              ((answer = $(this)
                [_0xaaae7(0xc9)](_0xaaae7(0x121))
                [_0xaaae7(0xd7)](_0xaaae7(0x110))),
              (selections = selections[_0xaaae7(0x10f)](
                (_0x340b4d) => _0x340b4d["step"] !== x,
              )),
              selections[_0xaaae7(0x198)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0xaaae7(0x135)](
                  (_0x35d60a) => _0x35d60a["step"] === x,
                )),
                (selections[objIndex][_0xaaae7(0xeb)] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0xaaae7(0xbb)] = x)));
        }),
      $(steps[x])
        [_0x1e592f(0xe7)](_0x1e592f(0x167))
        [_0x1e592f(0xe7)](_0x1e592f(0x1d0))
        [_0x1e592f(0x16b)](function (_0x38ef24) {
          const _0x18bd19 = _0x1e592f;
          let _0x25aa81 = $(this)["val"]()[_0x18bd19(0x1af)],
            _0x2d0ffc = $(this)[_0x18bd19(0x14a)](_0x18bd19(0x11b))
              ? $(this)[_0x18bd19(0x14a)]("min-character")
              : 0x0;
          $(this)[_0x18bd19(0x19b)]() !== "" && _0x25aa81 >= _0x2d0ffc
            ? (empReqUrl = empReqUrl[_0x18bd19(0x10f)](
                (_0x35dea9) => _0x35dea9[_0x18bd19(0x193)] !== _0x38ef24,
              ))
            : (!empReqUrl["find"](
                (_0x17dfa9) => _0x17dfa9[_0x18bd19(0x193)] === _0x38ef24,
              ) && empReqUrl["push"]({ input: _0x38ef24 }),
              unfilledArr[_0x18bd19(0x198)]({
                input: $(this)[_0x18bd19(0xd7)](_0x18bd19(0x1b6)),
              })),
            empReqUrl[_0x18bd19(0x1af)] === 0x0 &&
            validateURL($(this)[_0x18bd19(0x19b)]())
              ? (urlFilled = !![])
              : (urlFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x1e592f(0x167))
        [_0x1e592f(0xe7)](_0x1e592f(0x138))
        ["each"](function (_0x404c43) {
          const _0x592aac = _0x1e592f;
          (skipTo = undefined),
            $(this)
              [_0x592aac(0xc9)](_0x592aac(0x1c5))
              ["data"](_0x592aac(0x118)) !== "" &&
              (skipTo = $(this)
                [_0x592aac(0xc9)](_0x592aac(0x1c5))
                [_0x592aac(0x14a)](_0x592aac(0x118))),
            $(this)
              ["parents"](_0x592aac(0x121))
              [_0x592aac(0xd7)]("data-go-to") &&
              ((answer = $(this)
                [_0x592aac(0xc9)](_0x592aac(0x121))
                [_0x592aac(0xd7)](_0x592aac(0x110))),
              (selections = selections[_0x592aac(0x10f)](
                (_0x5bcd25) => _0x5bcd25["step"] !== x,
              )),
              selections[_0x592aac(0x198)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x592aac(0x198)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x592aac(0x135)](
                  (_0x18c7b4) => _0x18c7b4[_0x592aac(0xce)] === x,
                )),
                (selections[objIndex][_0x592aac(0xeb)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x592aac(0xbb)] = x)));
        }),
      $(steps[x])
        [_0x1e592f(0xe7)](_0x1e592f(0x167))
        [_0x1e592f(0xe7)](_0x1e592f(0x19f))
        [_0x1e592f(0x16b)](function (_0x4bdc1e) {
          const _0x521dcc = _0x1e592f;
          $(this)[_0x521dcc(0x19b)]() !== ""
            ? (empReqDate = empReqDate["filter"](
                (_0x3c49db) => _0x3c49db[_0x521dcc(0x193)] !== _0x4bdc1e,
              ))
            : (!empReqDate[_0x521dcc(0xe7)](
                (_0x4cebb6) => _0x4cebb6[_0x521dcc(0x193)] === _0x4bdc1e,
              ) && empReqDate[_0x521dcc(0x198)]({ input: _0x4bdc1e }),
              unfilledArr[_0x521dcc(0x198)]({
                input: $(this)["attr"](_0x521dcc(0x1b6)),
              })),
            empReqDate["length"] === 0x0
              ? (dateFilled = !![])
              : (dateFilled = ![]);
        }),
      $(steps[x])
        [_0x1e592f(0xe7)](_0x1e592f(0x167))
        [_0x1e592f(0xe7)](":input[type=\x22date\x22]")
        ["each"](function (_0x44ec11) {
          const _0x8f9c36 = _0x1e592f;
          (skipTo = undefined),
            $(this)
              [_0x8f9c36(0xc9)](_0x8f9c36(0x1c5))
              [_0x8f9c36(0x14a)](_0x8f9c36(0x118)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0x8f9c36(0x1c5))
                [_0x8f9c36(0x14a)](_0x8f9c36(0x118))),
            $(this)
              [_0x8f9c36(0xc9)](_0x8f9c36(0x121))
              [_0x8f9c36(0xd7)](_0x8f9c36(0x110)) &&
              ((answer = $(this)
                [_0x8f9c36(0xc9)](_0x8f9c36(0x121))
                [_0x8f9c36(0xd7)]("data-go-to")),
              (selections = selections["filter"](
                (_0x3a86f6) => _0x3a86f6["step"] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x8f9c36(0x198)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x8f9c36(0x135)](
                  (_0x4a3503) => _0x4a3503[_0x8f9c36(0xce)] === x,
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x1e592f(0xe7)](_0x1e592f(0x167))
        [_0x1e592f(0xe7)](_0x1e592f(0x1a6))
        ["each"](function (_0x4f4347) {
          const _0x1a9773 = _0x1e592f;
          let _0x50224c = $(this)[_0x1a9773(0x19b)]()[_0x1a9773(0x1af)],
            _0x2704b3 = $(this)["data"](_0x1a9773(0x11b))
              ? $(this)[_0x1a9773(0x14a)](_0x1a9773(0x11b))
              : 0x0;
          $(this)["val"]() !== "" && _0x50224c >= _0x2704b3
            ? (empReqNum = empReqNum[_0x1a9773(0x10f)](
                (_0x184cb8) => _0x184cb8[_0x1a9773(0x193)] !== _0x4f4347,
              ))
            : (!empReqNum[_0x1a9773(0xe7)](
                (_0x60a7b4) => _0x60a7b4["input"] === _0x4f4347,
              ) && empReqNum[_0x1a9773(0x198)]({ input: _0x4f4347 }),
              unfilledArr[_0x1a9773(0x198)]({
                input: $(this)[_0x1a9773(0xd7)](_0x1a9773(0x1b6)),
              })),
            empReqNum[_0x1a9773(0x1af)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x1e592f(0xe7)](_0x1e592f(0x167))
        [_0x1e592f(0xe7)](_0x1e592f(0x152))
        [_0x1e592f(0x16b)](function (_0x503c70) {
          const _0x13cf26 = _0x1e592f;
          (skipTo = undefined),
            $(this)
              [_0x13cf26(0xc9)]("[data-skip-to]")
              [_0x13cf26(0x14a)]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0x13cf26(0xc9)]("[data-skip-to]")
                [_0x13cf26(0x14a)](_0x13cf26(0x118))),
            $(this)
              [_0x13cf26(0xc9)](_0x13cf26(0x121))
              ["attr"](_0x13cf26(0x110)) &&
              ((answer = $(this)
                [_0x13cf26(0xc9)](_0x13cf26(0x121))
                [_0x13cf26(0xd7)](_0x13cf26(0x110))),
              (selections = selections[_0x13cf26(0x10f)](
                (_0x17449b) => _0x17449b[_0x13cf26(0xce)] !== x,
              )),
              selections[_0x13cf26(0x198)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x13cf26(0x198)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x13cf26(0x135)](
                  (_0x2cd340) => _0x2cd340[_0x13cf26(0xce)] === x,
                )),
                (selections[objIndex][_0x13cf26(0xeb)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x13cf26(0xbb)] = x)));
        }),
      $(steps[x])
        [_0x1e592f(0xe7)](".active-answer-card")
        ["find"](_0x1e592f(0x17e))
        [_0x1e592f(0x16b)](function (_0x10f74f) {
          const _0x43f359 = _0x1e592f;
          if ($(this)[_0x43f359(0x19b)]() !== "") {
            let _0x4b9e23 = $(this)[_0x43f359(0x19b)]()["length"],
              _0x1fbd12 = $(this)[_0x43f359(0x14a)](_0x43f359(0x11b))
                ? $(this)[_0x43f359(0x14a)](_0x43f359(0x11b))
                : 0x0;
            if ($(this)["data"](_0x43f359(0xfc))) {
              var _0x548c59 = phoneAutoFormat(
                $(this)["data"]("phone-autoformat"),
              );
              $(this)[_0x43f359(0x19b)](_0x548c59($(this)[_0x43f359(0x19b)]()));
            }
            phoneValidation($(this)[_0x43f359(0x19b)](), _0x4b9e23, _0x1fbd12)
              ? (empReqTel = empReqTel[_0x43f359(0x10f)](
                  (_0x4377de) => _0x4377de[_0x43f359(0x193)] !== _0x10f74f,
                ))
              : empReqTel["push"]({ input: _0x10f74f });
          } else
            !empReqTel[_0x43f359(0xe7)](
              (_0x416162) => _0x416162[_0x43f359(0x193)] === _0x10f74f,
            ) && empReqTel[_0x43f359(0x198)]({ input: _0x10f74f }),
              unfilledArr[_0x43f359(0x198)]({
                input: $(this)["attr"](_0x43f359(0x1b6)),
              });
          empReqTel["length"] === 0x0 ? (telFilled = !![]) : (telFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x1e592f(0x167))
        [_0x1e592f(0xe7)](_0x1e592f(0x165))
        ["each"](function (_0x42b24d) {
          const _0x1ca78a = _0x1e592f;
          (skipTo = undefined),
            $(this)
              [_0x1ca78a(0xc9)]("[data-skip-to]")
              [_0x1ca78a(0x14a)](_0x1ca78a(0x118)) !== "" &&
              (skipTo = $(this)
                [_0x1ca78a(0xc9)](_0x1ca78a(0x1c5))
                [_0x1ca78a(0x14a)](_0x1ca78a(0x118))),
            $(this)
              [_0x1ca78a(0xc9)]("[data-go-to]")
              [_0x1ca78a(0xd7)](_0x1ca78a(0x110)) &&
              ((answer = $(this)
                [_0x1ca78a(0xc9)](_0x1ca78a(0x121))
                ["attr"](_0x1ca78a(0x110))),
              (selections = selections[_0x1ca78a(0x10f)](
                (_0x49a9f5) => _0x49a9f5[_0x1ca78a(0xce)] !== x,
              )),
              selections[_0x1ca78a(0x198)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x1ca78a(0x198)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x1ca78a(0x135)](
                  (_0x4556ff) => _0x4556ff[_0x1ca78a(0xce)] === x,
                )),
                (selections[objIndex][_0x1ca78a(0xeb)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x1ca78a(0xbb)] = x)));
        }),
      $(steps[x])
        ["find"](".active-answer-card")
        [_0x1e592f(0xe7)](_0x1e592f(0x1c2))
        [_0x1e592f(0x16b)](function (_0x424b77) {
          const _0x24e4fc = _0x1e592f;
          $(this)[_0x24e4fc(0x19b)]() !== ""
            ? (empReqFile = empReqFile[_0x24e4fc(0x10f)](
                (_0x477ca3) => _0x477ca3[_0x24e4fc(0x193)] !== _0x424b77,
              ))
            : (!empReqFile[_0x24e4fc(0xe7)](
                (_0x23fd31) => _0x23fd31[_0x24e4fc(0x193)] === _0x424b77,
              ) && empReqFile[_0x24e4fc(0x198)]({ input: _0x424b77 }),
              unfilledArr[_0x24e4fc(0x198)]({
                input: $(this)[_0x24e4fc(0xd7)]("name"),
              })),
            empReqFile[_0x24e4fc(0x1af)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x1e592f(0xe7)](_0x1e592f(0x167))
        [_0x1e592f(0xe7)](":input[type=\x22file\x22]")
        [_0x1e592f(0x16b)](function (_0x176689) {
          const _0x347c0a = _0x1e592f;
          (skipTo = undefined),
            $(this)
              [_0x347c0a(0xc9)](_0x347c0a(0x1c5))
              [_0x347c0a(0x14a)](_0x347c0a(0x118)) !== "" &&
              (skipTo = $(this)
                [_0x347c0a(0xc9)]("[data-skip-to]")
                [_0x347c0a(0x14a)]("skip-to")),
            $(this)
              [_0x347c0a(0xc9)]("[data-go-to]")
              [_0x347c0a(0xd7)](_0x347c0a(0x110)) &&
              ((answer = $(this)
                [_0x347c0a(0xc9)](_0x347c0a(0x121))
                ["attr"](_0x347c0a(0x110))),
              (selections = selections[_0x347c0a(0x10f)](
                (_0x54ef12) => _0x54ef12[_0x347c0a(0xce)] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x347c0a(0x198)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x347c0a(0x135)](
                  (_0x119e2a) => _0x119e2a["step"] === x,
                )),
                (selections[objIndex][_0x347c0a(0xeb)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x347c0a(0xbb)] = x)));
        }),
      $(steps[x])
        ["find"](".active-answer-card")
        [_0x1e592f(0xe7)](_0x1e592f(0x173))
        ["each"](function (_0x6b59d4) {
          const _0x1bf883 = _0x1e592f;
          $(this)[_0x1bf883(0x19b)]() !== ""
            ? (empReqSelect = empReqSelect[_0x1bf883(0x10f)](
                (_0x1366e7) => _0x1366e7[_0x1bf883(0x193)] !== _0x6b59d4,
              ))
            : (!empReqSelect[_0x1bf883(0xe7)](
                (_0x53fa7f) => _0x53fa7f[_0x1bf883(0x193)] === _0x6b59d4,
              ) && empReqSelect[_0x1bf883(0x198)]({ input: _0x6b59d4 }),
              unfilledArr["push"]({ input: $(this)[_0x1bf883(0xd7)]("name") })),
            empReqSelect[_0x1bf883(0x1af)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x1e592f(0xe7)](_0x1e592f(0x167))
        [_0x1e592f(0xe7)]("select")
        ["each"](function (_0x49b156) {
          const _0x372939 = _0x1e592f;
          (skipTo = undefined),
            $(this)
              ["parents"](_0x372939(0x1c5))
              [_0x372939(0x14a)](_0x372939(0x118)) !== "" &&
              (skipTo = $(this)
                [_0x372939(0xc9)]("[data-skip-to]")
                ["data"](_0x372939(0x118))),
            $(this)
              [_0x372939(0xc9)]("[data-go-to]")
              [_0x372939(0xd7)](_0x372939(0x110)) &&
              ((answer = $(this)
                [_0x372939(0xc9)]("[data-go-to]")
                [_0x372939(0xd7)](_0x372939(0x110))),
              (selections = selections[_0x372939(0x10f)](
                (_0x3ed47c) => _0x3ed47c[_0x372939(0xce)] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x372939(0x198)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x372939(0x135)](
                  (_0x583815) => _0x583815["step"] === x,
                )),
                (selections[objIndex][_0x372939(0xeb)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x372939(0xbb)] = x)));
        }),
      $(steps[x])
        ["find"](_0x1e592f(0x167))
        [_0x1e592f(0xe7)](_0x1e592f(0x158))
        [_0x1e592f(0x16b)](function (_0x16894f) {
          const _0x159502 = _0x1e592f;
          let _0x4f234a = $(this)[_0x159502(0x19b)]()["length"],
            _0x595d57 = $(this)[_0x159502(0x14a)]("min-character")
              ? $(this)[_0x159502(0x14a)](_0x159502(0x11b))
              : 0x0;
          $(this)[_0x159502(0x19b)]() !== "" && _0x4f234a >= _0x595d57
            ? (empReqTextarea = empReqTextarea[_0x159502(0x10f)](
                (_0xabef79) => _0xabef79[_0x159502(0x193)] !== _0x16894f,
              ))
            : (!empReqTextarea[_0x159502(0xe7)](
                (_0x26a6dc) => _0x26a6dc["input"] === _0x16894f,
              ) && empReqTextarea[_0x159502(0x198)]({ input: _0x16894f }),
              unfilledArr["push"]({
                input: $(this)["attr"](_0x159502(0x1b6)),
              })),
            empReqTextarea[_0x159502(0x1af)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x1e592f(0xe7)](_0x1e592f(0x167))
        [_0x1e592f(0xe7)]("textarea")
        [_0x1e592f(0x16b)](function (_0xe93366) {
          const _0x5da068 = _0x1e592f;
          (skipTo = undefined),
            $(this)
              [_0x5da068(0xc9)](_0x5da068(0x1c5))
              [_0x5da068(0x14a)](_0x5da068(0x118)) !== "" &&
              (skipTo = $(this)
                ["parents"]("[data-skip-to]")
                [_0x5da068(0x14a)](_0x5da068(0x118))),
            $(this)
              ["parents"](_0x5da068(0x121))
              [_0x5da068(0xd7)](_0x5da068(0x110)) &&
              ((answer = $(this)
                [_0x5da068(0xc9)](_0x5da068(0x121))
                [_0x5da068(0xd7)](_0x5da068(0x110))),
              (selections = selections[_0x5da068(0x10f)](
                (_0x3d092b) => _0x3d092b[_0x5da068(0xce)] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections["findIndex"](
                  (_0x7739e0) => _0x7739e0["step"] === x,
                )),
                (selections[objIndex][_0x5da068(0xeb)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x5da068(0xbb)] = x)));
        }),
      $(steps[x])
        [_0x1e592f(0xe7)](".active-answer-card")
        [_0x1e592f(0xe7)](_0x1e592f(0x18e))
        [_0x1e592f(0x16b)](function (_0x321d47) {
          const _0x2a7a05 = _0x1e592f;
          $(this)[_0x2a7a05(0x19b)]() !== ""
            ? validateEmail(
                $(this)["val"](),
                $(this)["data"](_0x2a7a05(0xf5)),
                $(this)["attr"](_0x2a7a05(0x1b6)),
              )
            : ((emailFilled = ![]),
              unfilledArr[_0x2a7a05(0x198)]({
                input: $(this)[_0x2a7a05(0xd7)](_0x2a7a05(0x1b6)),
              }));
        }),
      $(steps[x])
        [_0x1e592f(0xe7)](".active-answer-card")
        [_0x1e592f(0xe7)](":input[type=\x22email\x22]")
        [_0x1e592f(0x16b)](function (_0xad5b5f) {
          const _0x56fd44 = _0x1e592f;
          (skipTo = undefined),
            $(this)
              [_0x56fd44(0xc9)](_0x56fd44(0x1c5))
              [_0x56fd44(0x14a)](_0x56fd44(0x118)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0x56fd44(0x1c5))
                [_0x56fd44(0x14a)](_0x56fd44(0x118))),
            $(this)
              [_0x56fd44(0xc9)](_0x56fd44(0x121))
              [_0x56fd44(0xd7)]("data-go-to") &&
              ((answer = $(this)
                [_0x56fd44(0xc9)]("[data-go-to]")
                [_0x56fd44(0xd7)]("data-go-to")),
              (selections = selections["filter"](
                (_0x242923) => _0x242923[_0x56fd44(0xce)] !== x,
              )),
              selections[_0x56fd44(0x198)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x56fd44(0x198)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x56fd44(0x135)](
                  (_0xe550ce) => _0xe550ce["step"] === x,
                )),
                (selections[objIndex][_0x56fd44(0xeb)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x56fd44(0xbb)] = x)));
        });
  }
  $(steps[x])[_0x1e592f(0xe7)](_0x1e592f(0x185))["is"](_0x1e592f(0x1c8)) &&
    ((selArr = []),
    $(steps)
      ["find"](_0x1e592f(0x134))
      ["each"](function (_0x4cc88a, _0x19f233) {
        const _0x1a47b5 = _0x1e592f;
        selArr[_0x1a47b5(0x198)]({
          selected: $(this)[_0x1a47b5(0x14a)](_0x1a47b5(0x139)),
        });
      }),
    (selString = []),
    selArr["forEach"]((_0x1a2e8b) => selString["push"](_0x1a2e8b["selected"])),
    (selections = selections[_0x1e592f(0x10f)](
      (_0x2559c9) => _0x2559c9[_0x1e592f(0xce)] !== x,
    )),
    $(steps[x])
      [_0x1e592f(0xe7)](_0x1e592f(0x167))
      [_0x1e592f(0xe7)](_0x1e592f(0x161))
      ["each"](function () {
        const _0x4a7af4 = _0x1e592f;
        skipTo = undefined;
        if ($(this)[_0x4a7af4(0xc9)](_0x4a7af4(0x1c5))["data"]("skip-to"))
          skipTo = $(this)
            [_0x4a7af4(0xc9)](_0x4a7af4(0x1c5))
            [_0x4a7af4(0x14a)](_0x4a7af4(0x118));
        else
          $(this)[_0x4a7af4(0x14a)]("skip-to") &&
            (skipTo = $(this)["data"](_0x4a7af4(0x118)));
        if ($(this)["data"](_0x4a7af4(0xd2)))
          (answer = $(this)[_0x4a7af4(0xd7)](_0x4a7af4(0x110))),
            console[_0x4a7af4(0x11f)](answer, selections),
            selections[_0x4a7af4(0x198)]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0x4a7af4(0x198)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0x4a7af4(0x135)](
                (_0x78cf64) => _0x78cf64["step"] === x,
              )),
              (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
              (selections[objIndex]["backTo"] = x));
        else
          $(this)
            [_0x4a7af4(0xc9)](_0x4a7af4(0x121))
            [_0x4a7af4(0x14a)](_0x4a7af4(0xd2)) &&
            ((answer = $(this)
              ["parents"]("[data-go-to]")
              [_0x4a7af4(0x14a)]("go-to")),
            selections[_0x4a7af4(0x198)]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0x4a7af4(0x198)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0x4a7af4(0x135)](
                (_0x5d54cd) => _0x5d54cd[_0x4a7af4(0xce)] === x,
              )),
              (selections[objIndex][_0x4a7af4(0xeb)] = parseInt(skipTo) - 0x1),
              (selections[objIndex]["backTo"] = x)));
      }),
    logicExtra
      ? ($(steps[x])
          ["find"](_0x1e592f(0x167))
          [_0x1e592f(0xe7)](_0x1e592f(0xc2))
          [_0x1e592f(0x14a)]("radio-skip") === !![] ||
          $(steps[x])
            [_0x1e592f(0xe7)]("[data-answer][data-radio-skip]:visible")
            [_0x1e592f(0x14a)](_0x1e592f(0x1cf)) === !![]) &&
        skip &&
        selections[_0x1e592f(0x10f)](
          (_0x34d94f) => _0x34d94f[_0x1e592f(0xce)] === x,
        )["length"] > 0x0 &&
        textareaLength === 0x0 &&
        textInputLength === 0x0 &&
        emailInputLength === 0x0 &&
        checkboxInputLength === 0x0 &&
        setTimeout(
          function () {
            (next = !![]), nextStep(), selectionQuiz();
          },
          $(steps[x])
            ["find"](_0x1e592f(0x189))
            [_0x1e592f(0x14a)](_0x1e592f(0x18d)),
        )
      : $(steps[x])["find"](_0x1e592f(0xc2))["data"](_0x1e592f(0x1cf)) ===
          !![] &&
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
            [_0x1e592f(0xe7)](_0x1e592f(0x189))
            ["data"](_0x1e592f(0x18d)),
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
  const _0x288a9b = _0x346856;
  $("[data-text=\x22error-message\x22]")[_0x288a9b(0x11d)](),
    unfilledArr[_0x288a9b(0x1af)] > 0x0 &&
      unfilledArr[_0x288a9b(0xfb)](function (_0xbe45f4) {
        const _0x13ad51 = _0x288a9b;
        $("input[name=\x22" + _0xbe45f4[_0x13ad51(0x193)] + "\x22]")
          [_0x13ad51(0x153)](_0x13ad51(0x1be))
          [_0x13ad51(0x11e)](),
          $(_0x13ad51(0x17c) + _0xbe45f4[_0x13ad51(0x193)] + "\x22]")
            [_0x13ad51(0xc9)]()
            [_0x13ad51(0x190)](_0x13ad51(0x1be))
            ["fadeIn"](),
          $(_0x13ad51(0x181) + _0xbe45f4[_0x13ad51(0x193)] + "\x22]")
            [_0x13ad51(0x153)](_0x13ad51(0x1be))
            [_0x13ad51(0x11e)](),
          $(_0x13ad51(0x12a) + _0xbe45f4[_0x13ad51(0x193)] + "\x22]")
            [_0x13ad51(0x153)](_0x13ad51(0x1be))
            [_0x13ad51(0x11e)]();
      });
}
function resetInputErrorMessage(_0x5dd5ad) {
  const _0x5b27ab = _0x346856;
  $(_0x5b27ab(0x17c) + _0x5dd5ad + "\x22]")
    [_0x5b27ab(0x153)]("[data-text=\x22error-message\x22]")
    [_0x5b27ab(0x11d)](),
    $(_0x5b27ab(0x17c) + _0x5dd5ad + "\x22]")
      ["parents"]()
      ["children"]("[data-text=\x22error-message\x22]")
      [_0x5b27ab(0x11d)](),
    $(_0x5b27ab(0x181) + _0x5dd5ad + "\x22]")
      [_0x5b27ab(0x153)]("[data-text=\x22error-message\x22]")
      [_0x5b27ab(0x11d)](),
    $(_0x5b27ab(0x12a) + _0x5dd5ad + "\x22]")
      ["siblings"](_0x5b27ab(0x1be))
      [_0x5b27ab(0x11d)]();
}
function increaseCurstep() {
  const _0x46c6c6 = _0x346856;
  countCard
    ? ((curStep = curStep + 0x1),
      $("[data-text=\x22total-steps\x22]")[_0x46c6c6(0x1c4)](
        steps[_0x46c6c6(0x1af)],
      ))
    : $(steps[x])["data"](_0x46c6c6(0x1a3))
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    $(_0x46c6c6(0x13d))[_0x46c6c6(0x1c4)](curStep);
}
function decreaseCurstep() {
  const _0x1676bc = _0x346856;
  countCard
    ? ((curStep = curStep - 0x1),
      $("[data-text=\x22total-steps\x22]")[_0x1676bc(0x1c4)](
        steps[_0x1676bc(0x1af)],
      ))
    : $(steps[x])["data"](_0x1676bc(0x1a3))
      ? (curStep = curStep - 0x0)
      : (curStep = curStep - 0x1),
    $(_0x1676bc(0x13d))[_0x1676bc(0x1c4)](curStep);
}
$(_0x346856(0xbf))["on"](_0x346856(0x176), function (_0x43cd60) {
  const _0x412d72 = _0x346856;
  fill
    ? ($(this)[_0x412d72(0x14a)]("wait")
        ? $(this)["val"]($(this)["data"](_0x412d72(0x100)))
        : ($(this)["val"]("Please\x20wait..."),
          $(this)["text"](_0x412d72(0x159))),
      $(_0x412d72(0x163))[_0x412d72(0x1a0)](),
      $(_0x412d72(0x194))[_0x412d72(0x1af)] > 0x0 &&
        grecaptcha[_0x412d72(0xec)]()[_0x412d72(0x1af)] === 0x0 &&
        (form[_0x412d72(0xe7)](_0x412d72(0xbf))["text"](oldSubmitText),
        form[_0x412d72(0xe7)]("[data-form=\x22submit-btn\x22]")[
          _0x412d72(0x19b)
        ](oldSubmitText)),
      customError && $(_0x412d72(0x1be))[_0x412d72(0x11d)]())
    : customError && displayErrorMessage();
}),
  $(_0x346856(0xbf))["on"](_0x346856(0x176), function (_0x3a6b0a) {
    const _0x24435e = _0x346856;
    $(this)[_0x24435e(0x14a)](_0x24435e(0xb7)) &&
      (redirectTo = $(this)["data"](_0x24435e(0xb7))),
      !$(this)[_0x24435e(0x14a)]("new-tab") &&
        (newTab = $(this)[_0x24435e(0x14a)]("new-tab")),
      (successCard = $(this)[_0x24435e(0x14a)]("success")),
      _0x3a6b0a[_0x24435e(0x123)](),
      _0x3a6b0a[_0x24435e(0x1ba)](),
      logicExtra &&
        ($(this)[_0x24435e(0x16a)](_0x24435e(0x105), !![]),
        $(steps)
          [_0x24435e(0xe7)](":input")
          [_0x24435e(0x16a)](_0x24435e(0x129), ![])),
      localStorage[_0x24435e(0x172)](_0x24435e(0x15c)),
      fill
        ? ($(this)["data"](_0x24435e(0x100))
            ? $(this)[_0x24435e(0x19b)](
                $(this)[_0x24435e(0x14a)](_0x24435e(0x100)),
              )
            : ($(this)[_0x24435e(0x19b)](_0x24435e(0x159)),
              $(this)[_0x24435e(0x1c4)](_0x24435e(0x159))),
          $(_0x24435e(0x163))[_0x24435e(0x1a0)](),
          $(_0x24435e(0x194))["length"] > 0x0 &&
            grecaptcha[_0x24435e(0xec)]()[_0x24435e(0x1af)] === 0x0 &&
            (form[_0x24435e(0xe7)](_0x24435e(0xbf))["text"](oldSubmitText),
            form[_0x24435e(0xe7)](_0x24435e(0xbf))[_0x24435e(0x19b)](
              oldSubmitText,
            )),
          customError && $("[data-text=\x22error-message\x22]")["hide"]())
        : customError && displayErrorMessage();
  });
function nextStep() {
  const _0x1fbb42 = _0x346856;
  customError
    ? ($(_0x1fbb42(0x1be))[_0x1fbb42(0x11d)](),
      fill
        ? (x++,
          increaseCurstep(),
          (progress = x),
          x <= steps[_0x1fbb42(0x1af)] - 0x1 &&
            (updateStep(), memory && saveFilledInput()))
        : displayErrorMessage())
    : (x++,
      increaseCurstep(),
      x > progress && (progress = x),
      x <= steps[_0x1fbb42(0x1af)] - 0x1 &&
        (updateStep(), memory && saveFilledInput())),
    andLogic();
}
function backStep() {
  const _0x29df46 = _0x346856;
  customError && $(_0x29df46(0x1be))[_0x29df46(0x11d)](),
    decreaseCurstep(),
    x > 0x0 &&
      ($(progressbar[x])[_0x29df46(0x136)](_0x29df46(0x1b2)),
      selections[_0x29df46(0x10f)](
        (_0x420651) => _0x420651[_0x29df46(0xeb)] === x,
      )[_0x29df46(0x1af)] > 0x0
        ? (x = parseInt(
            getSafe(
              () =>
                selections[_0x29df46(0x10f)](
                  (_0xe054bb) => _0xe054bb[_0x29df46(0xeb)] === x,
                )[0x0][_0x29df46(0xbb)],
            ),
          ))
        : x--,
      updateStep()),
    ($(steps[x])
      ["find"](_0x29df46(0xc2))
      [_0x29df46(0x14a)](_0x29df46(0x1cf)) === !![] ||
      $(steps[x])
        ["find"](".active-answer-card")
        [_0x29df46(0xe7)](_0x29df46(0xc2))
        [_0x29df46(0x14a)](_0x29df46(0x1cf)) === !![] ||
      $(steps[x])["find"](_0x29df46(0x124))["data"]("radio-skip") === !![]) &&
      ((all_data = all_data[_0x29df46(0x10f)](
        (_0xeea37f) =>
          _0xeea37f["field"] !==
          $(steps[x])
            [_0x29df46(0xe7)]("input[type=\x22radio\x22]:checked")
            [_0x29df46(0xd7)](_0x29df46(0x1b6)),
      )),
      $(
        "[data-input-field=\x22" +
          $(steps[x])
            [_0x29df46(0xe7)](_0x29df46(0x10d))
            [_0x29df46(0xd7)](_0x29df46(0x1b6)) +
          "\x22]",
      )[_0x29df46(0x11d)](),
      $(steps[x])
        [_0x29df46(0xe7)]("input[type=\x22radio\x22]")
        [_0x29df46(0x16a)](_0x29df46(0x13f), ![]),
      $(steps[x])
        [_0x29df46(0xe7)](_0x29df46(0x1ab))
        [_0x29df46(0x136)]("w--redirected-checked"),
      validation());
}
weightedSelectionRange &&
  $(_0x346856(0x132))[_0x346856(0x16b)](function () {
    const _0x56936b = _0x346856;
    $(this)["append"](
      _0x56936b(0xc8) + $(this)[_0x56936b(0x14a)](_0x56936b(0x18b)) + "</div>",
    );
  });
function selectionQuiz() {
  const _0x1b93f6 = _0x346856;
  if ($(this)[_0x1b93f6(0xe7)](_0x1b93f6(0x1bd))) {
    $(_0x1b93f6(0x132))["hide"](),
      $("[data-selection-weight]")[_0x1b93f6(0x11d)]();
    if (weightedSelection) {
      (selTotal = 0x0),
        selArr[_0x1b93f6(0xfb)](function (_0x51d9d9) {
          const _0x411200 = _0x1b93f6;
          selTotal = selTotal + _0x51d9d9[_0x411200(0x139)];
        }),
        $(_0x1b93f6(0xcf))[_0x1b93f6(0x1c4)](selTotal);
      if (
        $("[data-selection=\x22" + selTotal + "\x22]")[_0x1b93f6(0x1af)] > 0x0
      )
        $(_0x1b93f6(0xe6) + selTotal + "\x22]")[_0x1b93f6(0x11e)]();
      else
        $(_0x1b93f6(0x12c) + selTotal + ")")
          ? $(_0x1b93f6(0x12c) + selTotal + ")")
              ["parent"](_0x1b93f6(0x132))
              ["eq"](0x0)
              [_0x1b93f6(0x17f)]()
          : $(_0x1b93f6(0x1b5))[_0x1b93f6(0x11e)]();
    } else {
      let _0x39c30d = -0x1;
      $("[data-selection]")[_0x1b93f6(0x16b)](function (_0x14e38a) {
        const _0x3ec8ea = _0x1b93f6;
        $($(_0x3ec8ea(0x132))[_0x14e38a])
          ["data"](_0x3ec8ea(0x18b))
          [_0x3ec8ea(0x13b)](selString[_0x3ec8ea(0xe0)]()) &&
          (_0x39c30d = _0x14e38a);
      }),
        _0x39c30d > -0x1
          ? $($("[data-selection]")[_0x39c30d])[_0x1b93f6(0x11e)]()
          : $(_0x1b93f6(0x1b5))["fadeIn"]();
    }
  }
}
function triggerInputAllData() {
  const _0x7bfaec = _0x346856;
  if (savedFilledInput && memory)
    savedFilledInput[_0x7bfaec(0xfb)]((_0x31c0b5) => {
      const _0x5b7306 = _0x7bfaec;
      var _0x127991 = $(
          _0x5b7306(0x17c) +
            _0x31c0b5[_0x5b7306(0x19e)] +
            _0x5b7306(0x142) +
            _0x31c0b5[_0x5b7306(0x1d1)] +
            "\x22]",
        ),
        _0x3ad4b5 = $(_0x5b7306(0x17c) + _0x31c0b5["inputName"] + "\x22]");
      console[_0x5b7306(0x11f)](
        _0x127991[_0x5b7306(0xc9)](_0x5b7306(0xe5))[_0x5b7306(0x14a)](
          _0x5b7306(0x1cf),
        ),
      );
      if (_0x127991["attr"](_0x5b7306(0x14c)) !== _0x5b7306(0x191)) {
        if (
          _0x127991[_0x5b7306(0xd7)](_0x5b7306(0x14c)) === "radio" &&
          !_0x127991[_0x5b7306(0xc9)](_0x5b7306(0xe5))[_0x5b7306(0x14a)](
            _0x5b7306(0x1cf),
          )
        )
          _0x127991[_0x5b7306(0x176)](),
            _0x127991[_0x5b7306(0x153)](_0x5b7306(0xd3))["addClass"](
              _0x5b7306(0x196),
            ),
            _0x127991["trigger"](_0x5b7306(0x193));
        else
          _0x31c0b5["value"] === "on"
            ? (_0x3ad4b5["click"](),
              _0x3ad4b5[_0x5b7306(0x153)](_0x5b7306(0x1cb))[_0x5b7306(0xbc)](
                "w--redirected-checked",
              ),
              _0x3ad4b5[_0x5b7306(0x122)](_0x5b7306(0x193)))
            : (console[_0x5b7306(0x11f)](
                _0x31c0b5[_0x5b7306(0x19e)],
                _0x31c0b5[_0x5b7306(0x1d1)],
              ),
              _0x3ad4b5[_0x5b7306(0x19b)](_0x31c0b5[_0x5b7306(0x1d1)]),
              _0x3ad4b5["val"](_0x31c0b5[_0x5b7306(0x1d1)]),
              $("option[value=\x22" + _0x31c0b5["value"] + "\x22]")["prop"](
                _0x5b7306(0x139),
                !![],
              ),
              _0x3ad4b5[_0x5b7306(0x122)](_0x5b7306(0x193)),
              _0x3ad4b5[_0x5b7306(0x122)](_0x5b7306(0x1a7)));
      }
    });
  else
    _params &&
      (getParams(),
      searchQ["forEach"]((_0x35f6a0) => {
        const _0x22f2e7 = _0x7bfaec;
        if (
          $(
            _0x22f2e7(0x17c) +
              _0x35f6a0[_0x22f2e7(0x19e)] +
              _0x22f2e7(0x142) +
              _0x35f6a0["value"] +
              "\x22]",
          )["attr"]("type") !== _0x22f2e7(0x191)
        ) {
          if (
            $(
              _0x22f2e7(0x17c) +
                _0x35f6a0[_0x22f2e7(0x1d3)] +
                "\x22][value=\x22" +
                _0x35f6a0[_0x22f2e7(0x19b)] +
                "\x22]",
            )[_0x22f2e7(0xd7)]("type") === _0x22f2e7(0x141)
          )
            $(
              _0x22f2e7(0x17c) +
                _0x35f6a0[_0x22f2e7(0x1d3)] +
                "\x22][value=\x22" +
                _0x35f6a0[_0x22f2e7(0x19b)] +
                "\x22]",
            )[_0x22f2e7(0x176)](),
              $(
                _0x22f2e7(0x17c) +
                  _0x35f6a0[_0x22f2e7(0x1d3)] +
                  "\x22][value=\x22" +
                  _0x35f6a0["val"] +
                  "\x22]",
              )
                ["siblings"](_0x22f2e7(0xd3))
                ["addClass"](_0x22f2e7(0x196)),
              $(
                _0x22f2e7(0x17c) +
                  _0x35f6a0[_0x22f2e7(0x1d3)] +
                  _0x22f2e7(0x142) +
                  _0x35f6a0[_0x22f2e7(0x19b)] +
                  "\x22]",
              )[_0x22f2e7(0x122)]("input");
          else
            _0x35f6a0[_0x22f2e7(0x19b)] === "on"
              ? ($(_0x22f2e7(0x17c) + _0x35f6a0["key"] + "\x22]")[
                  _0x22f2e7(0x176)
                ](),
                $(_0x22f2e7(0x17c) + _0x35f6a0[_0x22f2e7(0x1d3)] + "\x22]")
                  [_0x22f2e7(0x153)](_0x22f2e7(0x1cb))
                  [_0x22f2e7(0xbc)](_0x22f2e7(0x196)),
                $(_0x22f2e7(0x17c) + _0x35f6a0[_0x22f2e7(0x1d3)] + "\x22]")[
                  "trigger"
                ](_0x22f2e7(0x193)))
              : ($("input[name=\x22" + _0x35f6a0[_0x22f2e7(0x1d3)] + "\x22]")[
                  "val"
                ](_0x35f6a0[_0x22f2e7(0x19b)]),
                $(_0x22f2e7(0x181) + _0x35f6a0[_0x22f2e7(0x1d3)] + "\x22]")[
                  _0x22f2e7(0x19b)
                ](_0x35f6a0[_0x22f2e7(0x19b)]),
                $(_0x22f2e7(0x12a) + _0x35f6a0["key"] + "\x22]")
                  [_0x22f2e7(0xe7)](
                    _0x22f2e7(0x1b4) + _0x35f6a0[_0x22f2e7(0x19b)] + "\x22]",
                  )
                  [_0x22f2e7(0x16a)](_0x22f2e7(0x139), !![]),
                $(_0x22f2e7(0x17c) + _0x35f6a0["key"] + "\x22]")[
                  _0x22f2e7(0x122)
                ](_0x22f2e7(0x193)),
                $(_0x22f2e7(0x17c) + _0x35f6a0[_0x22f2e7(0x1d3)] + "\x22]")[
                  _0x22f2e7(0x122)
                ](_0x22f2e7(0x1a7)));
        }
      }));
}
$(_0x346856(0x147))["on"]("click", function () {
  (next = !![]), nextStep(), selectionQuiz();
}),
  $(_0x346856(0xe4))["on"]("click", function () {
    (next = ![]), (back = !![]), backStep();
  }),
  $(steps)
    [_0x346856(0xe7)](":input")
    [_0x346856(0xfe)](_0x346856(0xc4))
    ["on"]("input", function (_0x121e6b) {
      validation(), andLogic();
    }),
  $(steps)
    ["find"](_0x346856(0x1ae))
    ["on"](_0x346856(0x176), function () {
      (skip = !![]), validation();
    });
$(_0x346856(0x183))[_0x346856(0x14a)](_0x346856(0x10b))
  ? $(_0x346856(0x128))[_0x346856(0x136)]("disabled")
  : $("[data-form=\x22custom-progress-indicator\x22]")[_0x346856(0xbc)](
      _0x346856(0xe1),
    );
function clickableIndicator() {
  const _0x25f714 = _0x346856;
  $(_0x25f714(0xbe))[_0x25f714(0x14a)](_0x25f714(0x109)) &&
    ($(_0x25f714(0x11a))[_0x25f714(0x136)](_0x25f714(0x1b2)),
    $("[data-clickable]")[_0x25f714(0x14a)](_0x25f714(0x10b))
      ? ((x = $(this)["index"]()), updateStep())
      : $(this)[_0x25f714(0xc7)]() <= progress &&
        ((x = $(this)["index"]()), updateStep())),
    $("[data-text=\x22current-step\x22]")["text"](x + 0x1);
}
$(_0x346856(0x128))["on"](_0x346856(0x176), clickableIndicator);
function _0x5d66() {
  const _0x204eba = [
    "input[type=\x22email\x22]:visible",
    "select[required]:visible",
    "filledInput",
    "[data-enter]",
    "clicked",
    "parent",
    "[data-input-index=\x22",
    ":input[type=\x27radio\x27]:checked",
    "424RHAszd",
    "[data-form=\x22multistep\x22]",
    "[data-clone-input-wrapper=\x22",
    ":input[type=\x22tel\x22]",
    ":input[type=\x22checkbox\x22]",
    ".active-answer-card",
    "[type=\x22submit\x22]",
    "count-card",
    "prop",
    "each",
    "ajaxComplete",
    "closest",
    "[data-redirect-delay]",
    "0.4",
    "100rMOKql",
    "[data-display=\x22",
    "removeItem",
    "select[required]",
    "[data-display-input-index=\x22",
    ":input[type=\x22checkbox\x22][required]",
    "click",
    "destroy",
    "[data-conditional-result]",
    "[data-clone-input]",
    ":input[type=\x22checkbox\x22]:checked",
    "metaKey",
    "input[name=\x22",
    "ix2",
    ":input[type=\x22tel\x22][required]",
    "show",
    "append",
    "textarea[name=\x22",
    "textarea",
    "[data-clickable-all]",
    "readystatechange",
    ":input[type=\x22radio\x22]",
    ":input[type=\x22text\x22][required]",
    "[data-success-card]",
    "[type=\x22checkbox\x22]",
    "[data-radio-delay]",
    "[data-text=\x22total-steps\x22]",
    "selection",
    "[data-display]",
    "radio-delay",
    ":input[type=\x22email\x22][required]",
    "option[value=\x22$(this).val()\x22]",
    "children",
    "file",
    "https://webflow.com/api/v1/form/",
    "input",
    "div.g-recaptcha",
    "[data-memory]",
    "w--redirected-checked",
    ":input",
    "push",
    "[data-form=\x22remove-clone\x22]",
    "stringify",
    "val",
    "logic-extra",
    "textarea[autofocus]",
    "inputName",
    ":input[type=\x22date\x22][required]",
    "submit",
    "[data-reinit]",
    "[data-checkbox]",
    "card",
    "88nDrJLK",
    "2501856WRbqEN",
    ":input[type=\x22number\x22][required]",
    "change",
    "[data-clone-wrapper]",
    "redirect-form-hehexd",
    "test",
    ".w-form-formradioinput",
    "keyCode",
    "[data-form=\x22next-btn\x22][data-submit-show]",
    "input[type=\x22radio\x22]",
    "length",
    "remove",
    "Webflow",
    "current",
    "keypress",
    "option[value=\x22",
    "[data-selection=\x22other\x22]",
    "name",
    "[data-form=\x22submit\x22]:visible",
    "[data-clone-input=\x22",
    "form[data-form=\x22multistep\x22]\x20:input",
    "stopPropagation",
    "reset",
    "[data-weighted-selection-range]",
    "[data-btn=\x22check\x22]",
    "[data-text=\x22error-message\x22]",
    "[data-clone=\x22",
    "[data-answer]",
    "top",
    ":input[type=\x22file\x22][required]",
    "input:radio[required]",
    "text",
    "[data-skip-to]",
    "775631ziPJHo",
    "<br>Data\x20Answer\x20=\x20",
    ":checked",
    "[data-reset-delay]",
    "data-radio-skip",
    ".w-checkbox-input",
    "weighted-selection-range",
    "input[type=\x22submit\x22]",
    "[data-clone]",
    "radio-skip",
    ":input[type=\x22url\x22][required]",
    "value",
    "last",
    "key",
    "[data-form=\x22progress\x22]",
    "select",
    "clone-input",
    "[data-input-field]",
    "redirect",
    "field",
    "ctrlKey",
    ":input[type=\x22text\x22]",
    "backTo",
    "addClass",
    "memory",
    "[data-clickable]",
    "[data-form=\x22submit-btn\x22]",
    "custom-error-message",
    "trim",
    "[data-radio-skip]:visible",
    "[data-cms-select=input]",
    "[type=\x22radio\x22]",
    "running",
    "[data-form=\x22submit-btn\x22]:visible",
    "index",
    "<div\x20data-range=\x22selection\x22\x20style=\x22display:none\x20!important\x22>",
    "parents",
    "data-input-field",
    "[data-show-if]",
    "[data-btn=\x22reset\x22]",
    "[data-success-card=\x22",
    "step",
    "[data-text=\x22total-weight\x22]",
    "edit-step",
    "input[type=\x22text\x22][required]:visible",
    "go-to",
    ".w-radio-input",
    "[data-form=\x22remove-input-clone\x22]",
    "auto",
    "href",
    "attr",
    "[data-display-wrapper=\x22",
    "461104BtCERp",
    ":input[type=\x22checkbox\x22][required]:checked",
    "9180NEmYRb",
    "open",
    "getItem",
    "focus",
    "data-name",
    "join",
    "disabled",
    ":input[required]",
    "url",
    "[data-form=\x22back-btn\x22]",
    "[data-radio-skip]",
    "[data-selection=\x22",
    "find",
    "split",
    "animate",
    "[data-display-input-wrapper=\x22",
    "skipTo",
    "getResponse",
    "textarea[required]:visible",
    "checkbox",
    "scroll-top-offset",
    "\x22]\x20input",
    "searchParams",
    "[data-form=\x22next-btn\x22][type=\x22submit\x22]",
    "query-param",
    "input-field",
    "block-domain",
    ".w-form-done",
    "relationship-",
    "none",
    "scroll-top",
    "slice",
    "forEach",
    "phone-autoformat",
    "\x22]:checked",
    "not",
    "[data-cms-select=text]",
    "wait",
    "startsWith",
    "reinit",
    "2588608gnzCPP",
    "span",
    "novalidate",
    "shiftKey",
    "require",
    "Enter",
    "clickable",
    "match",
    "clickable-all",
    "_blank",
    "input[type=\x22radio\x22]:checked",
    "add-new",
    "filter",
    "data-go-to",
    "[data-display-input=\x22",
    "submit-show",
    "css",
    "[data-select-multiple]",
    "[data-count-card]",
    "[data-remove-upload]",
    "location",
    "skip-to",
    "input[autofocus]",
    "[data-form=\x22progress-indicator\x22]",
    "min-character",
    "64392jmiEOJ",
    "hide",
    "fadeIn",
    "log",
    "[data-index=\x22",
    "[data-go-to]",
    "trigger",
    "preventDefault",
    "[data-answer][data-radio-skip]:visible",
    "[data-answer=\x22",
    "<option>",
    "[data-form=\x22step\x22]:not([data-card=\x22true\x22])",
    "[data-form=\x22custom-progress-indicator\x22]",
    "required",
    "select[name=\x22",
    "input:radio[name=\x22",
    "[data-range]:contains(",
    "slow",
    "[data-clone-input-wrapper]",
    "[data-btn=\x22edit\x22]",
    "quiz",
    ":input[type=\x22password\x22][required]",
    "[data-selection]",
    "html,\x20body",
    "[data-selected]:checked",
    "findIndex",
    "removeClass",
    ":first",
    ":input[type=\x22url\x22]",
    "selected",
    "AND",
    "includes",
    "\x22]\x20[data-input-field^=\x22",
    "[data-text=\x22current-step\x22]",
    "[data-quiz]",
    "checked",
    "clone",
    "radio",
    "\x22][value=\x22",
    "[data-form-ms=\x22submit-btn\x22]",
    "[data-input-field=\x22",
    "[data-display-index=\x22",
    "some",
    "[data-form=\x22next-btn\x22]",
    "weighted-selection",
    "debug-mode",
    "data",
    "parse",
    "type",
    "active-answer-card",
    "select-multiple",
    "enter",
    "[data-display-input]",
    "redirect-delay",
    ":input[type=\x22number\x22]",
    "siblings",
    "2606970rjNtLd",
    "offset",
    "input:checkbox",
    "data-radio-delay",
    "textarea[required]",
    "Please\x20wait...",
  ];
  _0x5d66 = function () {
    return _0x204eba;
  };
  return _0x5d66();
}
$(_0x346856(0x163))[_0x346856(0x14a)](_0x346856(0x149)) &&
  ($("[data-go-to]")[_0x346856(0x16b)](function () {
    const _0x13a6e1 = _0x346856;
    $(this)[_0x13a6e1(0x180)](
      "<br>Data\x20Go\x20To\x20=\x20",
      $(this)["data"](_0x13a6e1(0xd2)),
    );
  }),
  $(_0x346856(0x1c0))["each"](function () {
    const _0x5c6cd4 = _0x346856;
    $(this)[_0x5c6cd4(0x180)](
      _0x5c6cd4(0x1c7),
      $(this)[_0x5c6cd4(0x14a)]("answer"),
    );
  }));
function resetFormly() {
  const _0x2615a9 = _0x346856;
  $(_0x2615a9(0x163))[_0x2615a9(0x122)](_0x2615a9(0x1bb)),
    $(_0x2615a9(0x163))
      [_0x2615a9(0xc9)]()
      [_0x2615a9(0xe7)](_0x2615a9(0xf6))
      [_0x2615a9(0x11d)](),
    (x = 0x0),
    updateStep(),
    $(_0x2615a9(0x163))[_0x2615a9(0x17f)](),
    $(_0x2615a9(0xbf))[_0x2615a9(0x1c4)](oldSubmitText),
    $(_0x2615a9(0xbf))[_0x2615a9(0x19b)](oldSubmitText),
    $(_0x2615a9(0x13d))["text"](0x1),
    $(_0x2615a9(0x163))
      [_0x2615a9(0xe7)](_0x2615a9(0x156))
      [_0x2615a9(0x153)](_0x2615a9(0x1cb))
      [_0x2615a9(0x136)]("w--redirected-checked");
}
function _0x1965(_0x443428, _0x673702) {
  const _0x5d66f9 = _0x5d66();
  return (
    (_0x1965 = function (_0x1965eb, _0xeb83af) {
      _0x1965eb = _0x1965eb - 0xb7;
      let _0x1f0838 = _0x5d66f9[_0x1965eb];
      return _0x1f0838;
    }),
    _0x1965(_0x443428, _0x673702)
  );
}
$(document)[_0x346856(0x16c)](function (_0x461b69, _0x3bc0c7, _0x3927b8) {
  const _0x5d1316 = _0x346856;
  if (_0x3927b8[_0x5d1316(0xe3)][_0x5d1316(0x13b)](_0x5d1316(0x192))) {
    const _0x1c7fa5 = _0x3bc0c7["status"] === 0xc8,
      _0x5353a1 = _0x5d1316(0x1a9);
    redirectTo &&
      _0x1c7fa5 &&
      (newTab
        ? window[_0x5d1316(0xdc)](redirectTo, _0x5d1316(0x10c))
        : setTimeout(() => {
            const _0x43f3a5 = _0x5d1316;
            location[_0x43f3a5(0xd6)] = redirectTo;
          }, redirectDelay)),
      _0x1c7fa5 &&
        successCard !== "" &&
        $(_0x5d1316(0xcd) + successCard + "\x22]")["fadeIn"](),
      _0x1c7fa5 &&
        formReset &&
        setTimeout(() => {
          resetFormly();
        }, resetDelay),
      !_0x1c7fa5 &&
        ($(_0x5d1316(0xbf))["val"](_0x5d1316(0x159)),
        $(_0x5d1316(0xbf))[_0x5d1316(0x1c4)](_0x5d1316(0x159)));
  }
}),
  $(_0x346856(0x12f))["on"](_0x346856(0x176), function () {
    const _0x4c2aac = _0x346856;
    var _0x1e256f = $(this)
      ["parent"]()
      ["find"](_0x4c2aac(0x1d7))
      [_0x4c2aac(0x14a)](_0x4c2aac(0xf4));
    setTimeout(function () {
      const _0x296be0 = _0x4c2aac;
      $(_0x296be0(0x17c) + _0x1e256f + "\x22]")[_0x296be0(0xde)]();
    }, 0x64),
      (back = !![]),
      (x = $(this)[_0x4c2aac(0x14a)](_0x4c2aac(0xd0)) - 0x1),
      updateStep(),
      countCard
        ? ((curStep = x + 0x1),
          $("[data-text=\x22total-steps\x22]")[_0x4c2aac(0x1c4)](
            steps[_0x4c2aac(0x1af)],
          ))
        : $(steps[x])[_0x4c2aac(0x14a)](_0x4c2aac(0x1a3))
          ? (curStep = x + 0x0)
          : (curStep = x + 0x1),
      $(_0x4c2aac(0x13d))[_0x4c2aac(0x1c4)](curStep),
      (back = ![]);
  }),
  $(_0x346856(0xcc))["on"]("click", function () {
    const _0x5dd8a2 = _0x346856;
    $(_0x5dd8a2(0x163))[_0x5dd8a2(0x122)](_0x5dd8a2(0x1bb));
    let _0x396eb2 = $(this);
    $(this)["text"]("Please\x20wait..."),
      setTimeout(function () {
        const _0xc7e96e = _0x5dd8a2;
        $(_0x396eb2)[_0xc7e96e(0x1c4)](oldResetText),
          $(_0x396eb2)[_0xc7e96e(0xc9)](".w-form-done")[_0xc7e96e(0x11d)](),
          (x = 0x0),
          updateStep(),
          $(_0xc7e96e(0x163))["show"](),
          $(_0xc7e96e(0xbf))[_0xc7e96e(0x1c4)](oldSubmitText),
          $(_0xc7e96e(0xbf))[_0xc7e96e(0x19b)](oldSubmitText),
          $(_0x396eb2)[_0xc7e96e(0x19b)](oldSubmitText),
          $(_0xc7e96e(0x13d))[_0xc7e96e(0x1c4)](0x1),
          $(_0xc7e96e(0x163))
            [_0xc7e96e(0xe7)](_0xc7e96e(0x156))
            [_0xc7e96e(0x153)](_0xc7e96e(0x1cb))
            [_0xc7e96e(0x136)](_0xc7e96e(0x196));
      }, resetDelay);
  }),
  $("body")["on"](_0x346856(0x1b3), function (_0x3f9a6d) {
    const _0x138a0a = _0x346856;
    _0x3f9a6d[_0x138a0a(0x1ac)] === 0xd &&
      fill &&
      ($(_0x138a0a(0x15d))["data"](_0x138a0a(0x14f))
        ? (totalSteps > curStep && $(_0x138a0a(0x147))[0x0]["click"](),
          _0x3f9a6d["preventDefault"](),
          _0x3f9a6d[_0x138a0a(0x1ba)]())
        : (_0x3f9a6d[_0x138a0a(0x123)](), _0x3f9a6d[_0x138a0a(0x1ba)]()));
  }),
  $("body")["keydown"](function (_0xd77f8f) {
    const _0x455ef4 = _0x346856;
    (_0xd77f8f[_0x455ef4(0x17b)] || _0xd77f8f[_0x455ef4(0xb9)]) &&
      _0xd77f8f[_0x455ef4(0x1ac)] == 0xd &&
      (x >= steps[_0x455ef4(0x1af)] - 0x1 && fill
        ? $(steps[x])[_0x455ef4(0xe7)](_0x455ef4(0xc6))[_0x455ef4(0x176)]()
        : (event[_0x455ef4(0x123)](), event["stopPropagation"]()));
  }),
  $(_0x346856(0x182))[_0x346856(0x1b3)](function (_0x4f3712) {
    const _0x2f6548 = _0x346856;
    $(this)[_0x2f6548(0xde)](),
      _0x4f3712[_0x2f6548(0x1d3)] == _0x2f6548(0x108) &&
        (_0x4f3712[_0x2f6548(0x123)](), _0x4f3712["stopPropagation"]()),
      _0x4f3712[_0x2f6548(0x106)] &&
        _0x4f3712[_0x2f6548(0x1d3)] == _0x2f6548(0x108) &&
        $(this)["val"]($(this)[_0x2f6548(0x19b)]() + "\x0a");
  }),
  $(_0x346856(0x163))
    ["find"](_0x346856(0x197))
    ["on"]("change", function () {
      const _0x27f43a = _0x346856;
      (all_data = all_data["filter"](
        (_0x2259e5) =>
          _0x2259e5[_0x27f43a(0xb8)] !== $(this)["attr"](_0x27f43a(0x1b6)),
      )),
        $(this)[_0x27f43a(0xd7)]("type") === _0x27f43a(0xee)
          ? $(this)["is"](":checked")
            ? all_data["push"]({
                field: $(this)[_0x27f43a(0xd7)](_0x27f43a(0x1b6)),
                value: $(this)[_0x27f43a(0x153)](_0x27f43a(0x104))["text"](),
              })
            : $(
                _0x27f43a(0x144) +
                  $(this)[_0x27f43a(0xd7)](_0x27f43a(0x1b6)) +
                  "\x22]",
              )[_0x27f43a(0x11d)]()
          : (all_data[_0x27f43a(0x198)]({
              field: $(this)["attr"]("name"),
              value: $(this)["val"](),
            }),
            $(this)[_0x27f43a(0x19b)]() !== "" &&
              resetInputErrorMessage(
                $(this)[_0x27f43a(0xd7)](_0x27f43a(0x1b6)),
              )),
        all_data[_0x27f43a(0xfb)](function (_0x52d34a) {
          const _0x313964 = _0x27f43a;
          $(_0x313964(0x144) + _0x52d34a[_0x313964(0xb8)] + "\x22]")["show"](),
            $(_0x313964(0x144) + _0x52d34a[_0x313964(0xb8)] + "\x22]")[
              _0x313964(0x1c4)
            ](_0x52d34a[_0x313964(0x1d1)]);
        });
    }),
  $(_0x346856(0x163))
    [_0x346856(0xe7)](_0x346856(0x182))
    ["on"](_0x346856(0x1a7), function () {
      const _0x39212c = _0x346856;
      $(this)[_0x39212c(0x19b)]() !== "" &&
        resetInputErrorMessage($(this)[_0x39212c(0xd7)]("name")),
        (all_data = all_data[_0x39212c(0x10f)](
          (_0x43b5ce) =>
            _0x43b5ce[_0x39212c(0xb8)] !==
            $(this)[_0x39212c(0xd7)](_0x39212c(0x1b6)),
        )),
        all_data["push"]({
          field: $(this)["attr"](_0x39212c(0x1b6)),
          value: $(this)["val"](),
        }),
        all_data[_0x39212c(0xfb)](function (_0x3576e6) {
          const _0x3d49fe = _0x39212c;
          $("[data-input-field=\x22" + _0x3576e6["field"] + "\x22]")[
            _0x3d49fe(0x17f)
          ](),
            $(_0x3d49fe(0x144) + _0x3576e6[_0x3d49fe(0xb8)] + "\x22]")[
              _0x3d49fe(0x1c4)
            ](_0x3576e6[_0x3d49fe(0x1d1)]);
        });
    }),
  $(_0x346856(0x163))
    [_0x346856(0xe7)](_0x346856(0x1d5))
    ["on"]("change", function () {
      const _0x15303a = _0x346856;
      $(this)[_0x15303a(0x19b)]() !== "" &&
        resetInputErrorMessage($(this)[_0x15303a(0xd7)](_0x15303a(0x1b6)));
      var _0x550f03 = $(this)["data"]("ms-field");
      (all_data = all_data[_0x15303a(0x10f)](
        (_0x4986eb) =>
          _0x4986eb[_0x15303a(0xb8)] !== $(this)["attr"](_0x15303a(0x1b6)),
      )),
        all_data["push"]({
          field: $(this)["attr"](_0x15303a(0x1b6)),
          value: _0x550f03
            ? $(this)[_0x15303a(0xe7)](_0x15303a(0x18f))[_0x15303a(0x1c4)]()
            : $(this)[_0x15303a(0x19b)](),
        }),
        all_data["forEach"](function (_0x231af9) {
          const _0x10e6bd = _0x15303a;
          $("[data-input-field=\x22" + _0x231af9[_0x10e6bd(0xb8)] + "\x22]")[
            _0x10e6bd(0x17f)
          ](),
            $(_0x10e6bd(0x144) + _0x231af9[_0x10e6bd(0xb8)] + "\x22]")[
              _0x10e6bd(0x1c4)
            ](_0x231af9["value"]);
        });
    }),
  updateStep(),
  triggerInputAllData(),
  $("[data-cms-select=cms]")[_0x346856(0x16b)](function () {
    const _0x2a393a = _0x346856,
      _0x39cf3f = $(this)["find"](_0x2a393a(0xff)),
      _0x3dc2c9 = [];
    console[_0x2a393a(0x11f)](_0x3dc2c9),
      _0x39cf3f["each"](function () {
        const _0x39e8a3 = _0x2a393a;
        _0x3dc2c9[_0x39e8a3(0x198)](
          $(this)[_0x39e8a3(0x1c4)]()[_0x39e8a3(0xc1)](),
        );
      });
    const _0x4f7803 = $(this)[_0x2a393a(0x153)](_0x2a393a(0xc3));
    $["each"](_0x3dc2c9, function (_0x9682b8, _0x506c64) {
      const _0x19e4b9 = _0x2a393a,
        _0x575091 = $(_0x19e4b9(0x126))
          [_0x19e4b9(0x19b)](_0x506c64)
          [_0x19e4b9(0x1c4)](_0x506c64);
      _0x4f7803[_0x19e4b9(0x180)](_0x575091);
    });
  });
function cloneRemove() {
  const _0x177ea8 = _0x346856;
  $(_0x177ea8(0x1a8))["each"](function () {
    const _0x411adb = _0x177ea8;
    $(this)[_0x411adb(0xe7)]("[data-clone]")["length"] < 0x2
      ? $(this)[_0x411adb(0xe7)](_0x411adb(0x199))[_0x411adb(0x11d)]()
      : $(this)[_0x411adb(0xe7)](_0x411adb(0x199))["show"]();
  });
}
function cloneRemoveInput() {
  const _0x4aad4e = _0x346856;
  $(_0x4aad4e(0x12e))["each"](function () {
    const _0xed50de = _0x4aad4e;
    $(this)[_0xed50de(0xe7)](_0xed50de(0x179))["length"] < 0x2
      ? $(this)[_0xed50de(0xe7)](_0xed50de(0xd4))["hide"]()
      : $(this)[_0xed50de(0xe7)](_0xed50de(0xd4))[_0xed50de(0x17f)]();
  });
}
$(_0x346856(0x199))["on"](_0x346856(0x176), function () {
  const _0x37bbcb = _0x346856,
    _0x4ff781 =
      $(this)[_0x37bbcb(0xc9)](_0x37bbcb(0x1ce))[_0x37bbcb(0x1af)] > 0x0
        ? $(this)[_0x37bbcb(0xc9)](_0x37bbcb(0x1ce))[_0x37bbcb(0xc7)]()
        : $(this)[_0x37bbcb(0xc9)](_0x37bbcb(0x18c))[_0x37bbcb(0xc7)](),
    _0x4d91f6 =
      $(this)[_0x37bbcb(0xc9)]("[data-clone]")[_0x37bbcb(0x1af)] > 0x0
        ? $(this)["parents"]("[data-clone]")[_0x37bbcb(0x14a)]("clone")
        : $(this)[_0x37bbcb(0xc9)](_0x37bbcb(0x18c))["data"]("display");
  $(_0x37bbcb(0x1bf) + _0x4d91f6 + "\x22]")
    ["eq"](_0x4ff781)
    [_0x37bbcb(0x1b0)](),
    $(_0x37bbcb(0x171) + _0x4d91f6 + "\x22]")
      ["eq"](_0x4ff781)
      [_0x37bbcb(0x1b0)](),
    cloneRemove(),
    validation();
}),
  $(_0x346856(0xd4))["on"](_0x346856(0x176), function () {
    const _0x26edb3 = _0x346856;
    let _0x382a0a = $(this)[_0x26edb3(0x153)]()["attr"](_0x26edb3(0x1b6));
    $(this)[_0x26edb3(0x15f)](_0x26edb3(0x179))[_0x26edb3(0x1b0)](),
      $(_0x26edb3(0x144) + _0x382a0a + "\x22]")
        [_0x26edb3(0x15f)](_0x26edb3(0x150))
        ["remove"](),
      cloneRemove(),
      validation();
  }),
  $("[data-add-new]")["on"](_0x346856(0x176), function () {
    const _0x4abbe3 = _0x346856;
    let _0x4b02b2 = $(this)["data"](_0x4abbe3(0x10e));
    var _0x2498ed = $("[data-clone=\x22" + _0x4b02b2 + "\x22]")
        ["eq"](0x0)
        [_0x4abbe3(0x140)](!![]),
      _0x875bc3 = $("[data-display=\x22" + _0x4b02b2 + "\x22]")
        ["eq"](0x0)
        [_0x4abbe3(0x140)](!![]);
    let _0x32e1aa = "";
    $(this)
      [_0x4abbe3(0xe7)]("[data-form=\x22remove-clone\x22]")
      [_0x4abbe3(0x17f)](),
      cloneRemove(),
      _0x2498ed[_0x4abbe3(0xe7)](_0x4abbe3(0x179))
        ["find"](_0x4abbe3(0x193))
        [_0x4abbe3(0x19b)](""),
      _0x2498ed[_0x4abbe3(0xe7)](_0x4abbe3(0x179))
        ["not"](_0x4abbe3(0x137))
        ["remove"](),
      _0x875bc3["find"](_0x4abbe3(0x150))
        [_0x4abbe3(0xfe)](_0x4abbe3(0x137))
        [_0x4abbe3(0x1b0)](),
      _0x2498ed[_0x4abbe3(0xe7)](_0x4abbe3(0x193))[_0x4abbe3(0x16b)](
        function () {
          const _0x262637 = _0x4abbe3;
          if (
            $(this)[_0x262637(0x16d)](_0x262637(0x179))[_0x262637(0x1af)] > 0x0
          ) {
            let _0x33446b = 0x0;
            const _0x358c42 = $(this)
              [_0x262637(0x16d)](_0x262637(0x179))
              [_0x262637(0x14a)]("clone-input");
            console[_0x262637(0x11f)](
              $(this)
                ["closest"](_0x262637(0x179))
                [_0x262637(0x14a)](_0x262637(0x1d6)),
              this[_0x262637(0x1b6)],
            ),
              $("[data-clone-input=\x22" + _0x358c42 + "\x22]\x20input")[
                _0x262637(0x16b)
              ](function () {
                const _0x1a9fa8 = _0x262637,
                  _0x4c0d85 = $(this)["attr"](_0x1a9fa8(0x1b6));
                if (_0x4c0d85 && _0x4c0d85[_0x1a9fa8(0x101)](_0x1a9fa8(0xf7))) {
                  const _0x290a54 = parseInt(
                    _0x4c0d85[_0x1a9fa8(0xe8)]("-")[0x1],
                  );
                  !isNaN(_0x290a54) &&
                    _0x290a54 > _0x33446b &&
                    (_0x33446b = _0x290a54);
                }
              }),
              _0x33446b++,
              (_0x32e1aa = this["name"] + "-" + _0x33446b),
              console[_0x262637(0x11f)](_0x358c42, _0x32e1aa);
          } else
            _0x32e1aa =
              this[_0x262637(0x1b6)] +
              "-" +
              (parseInt(
                $(_0x262637(0x1bf) + _0x4b02b2 + "\x22]")
                  [_0x262637(0x1d2)]()
                  [_0x262637(0xc7)](),
              ) +
                0x1);
          $(this)[_0x262637(0x19b)](""),
            $(this)[_0x262637(0xd7)]("name", _0x32e1aa),
            $(this)[_0x262637(0xd7)](_0x262637(0xdf), _0x32e1aa);
        },
      ),
      _0x875bc3[_0x4abbe3(0xe7)](_0x4abbe3(0x1d7))[_0x4abbe3(0x16b)](
        function () {
          const _0x155c07 = _0x4abbe3;
          if ($(this)[_0x155c07(0x14a)]("input-field")) {
            let _0x12336c = 0x0;
            const _0x4cf6f1 = $(this)
              ["data"](_0x155c07(0xf4))
              [_0x155c07(0xe8)]("-")[0x0];
            $(
              "[data-display=\x22" +
                _0x4b02b2 +
                _0x155c07(0x13c) +
                _0x4cf6f1 +
                "\x22]",
            )[_0x155c07(0x16b)](function () {
              const _0x5096e3 = _0x155c07,
                _0x57a263 = $(this)[_0x5096e3(0xd7)](_0x5096e3(0xca)),
                _0x423dc4 = parseInt(_0x57a263[_0x5096e3(0xe8)]("-")[0x1]);
              !isNaN(_0x423dc4) &&
                _0x423dc4 > _0x12336c &&
                (_0x12336c = _0x423dc4);
            }),
              _0x12336c++;
            const _0x4987e1 = _0x4cf6f1 + "-" + _0x12336c;
            console["log"](_0x4987e1),
              $(this)[_0x155c07(0xd7)]("data-input-field", _0x4987e1);
          }
        },
      ),
      $("[data-clone-wrapper=\x22" + _0x4b02b2 + "\x22]")[_0x4abbe3(0x180)](
        _0x2498ed,
      ),
      $(_0x4abbe3(0xd8) + _0x4b02b2 + "\x22]")[_0x4abbe3(0x180)](_0x875bc3),
      $(_0x4abbe3(0x120) + _0x4b02b2 + "\x22]")["each"](function () {
        const _0x4d5592 = _0x4abbe3;
        $(this)[_0x4d5592(0x1c4)](
          $(this)
            [_0x4d5592(0xc9)](_0x4d5592(0x1bf) + _0x4b02b2 + "\x22]")
            [_0x4d5592(0xc7)]() + 0x1,
        );
      }),
      $(_0x4abbe3(0x145) + _0x4b02b2 + "\x22]")[_0x4abbe3(0x16b)](function () {
        const _0x12437f = _0x4abbe3;
        $(this)[_0x12437f(0x1c4)](
          $(this)
            [_0x12437f(0xc9)](_0x12437f(0x171) + _0x4b02b2 + "\x22]")
            ["index"]() + 0x1,
        );
      }),
      validation();
  }),
  $("[data-add-new-input]")["on"](_0x346856(0x176), function () {
    const _0x4ca00d = _0x346856,
      _0x35d2ab = $(this)[_0x4ca00d(0xc9)](_0x4ca00d(0x1ce))["index"]();
    let _0x15e3d3 = $(this)["data"]("add-new-input");
    var _0x98ab04 = $("[data-clone-input=\x22" + _0x15e3d3 + "\x22]")
        ["eq"](0x0)
        ["clone"](!![]),
      _0x45c15c = $(_0x4ca00d(0x111) + _0x15e3d3 + "\x22]")
        ["eq"](0x0)
        ["clone"](!![]);
    $(this)[_0x4ca00d(0xe7)](_0x4ca00d(0xd4))[_0x4ca00d(0x17f)](),
      cloneRemoveInput();
    let _0x146237 = 0x0;
    $("[data-clone-input=\x22" + _0x15e3d3 + _0x4ca00d(0xf0))[_0x4ca00d(0x16b)](
      function () {
        const _0x28ab1d = _0x4ca00d,
          _0x17b765 = $(this)[_0x28ab1d(0xd7)](_0x28ab1d(0x1b6));
        if (_0x17b765 && _0x17b765[_0x28ab1d(0x101)]("relationship-")) {
          const _0x4f9c42 = parseInt(_0x17b765[_0x28ab1d(0xe8)]("-")[0x1]);
          !isNaN(_0x4f9c42) && _0x4f9c42 > _0x146237 && (_0x146237 = _0x4f9c42);
        }
      },
    ),
      _0x146237++,
      _0x98ab04["find"]("input")["each"](function () {
        const _0x43cb85 = _0x4ca00d;
        let _0x5d9d65 = _0x43cb85(0xf7) + _0x146237;
        $(this)[_0x43cb85(0x19b)](""),
          $(this)["attr"](_0x43cb85(0x1b6), _0x5d9d65),
          $(this)["attr"](_0x43cb85(0xdf), _0x5d9d65);
      }),
      _0x45c15c[_0x4ca00d(0xe7)](_0x4ca00d(0x1d7))[_0x4ca00d(0x16b)](
        function () {
          const _0x3745e3 = _0x4ca00d;
          $(this)[_0x3745e3(0xd7)](
            _0x3745e3(0xca),
            _0x3745e3(0xf7) + _0x146237,
          );
        },
      ),
      $(this)
        [_0x4ca00d(0x153)](_0x4ca00d(0x164) + _0x15e3d3 + "\x22]")
        [_0x4ca00d(0x180)](_0x98ab04),
      $(_0x4ca00d(0x18c))
        ["eq"](_0x35d2ab)
        [_0x4ca00d(0xe7)](_0x4ca00d(0xea) + _0x15e3d3 + "\x22]")
        [_0x4ca00d(0x180)](_0x45c15c),
      $(_0x4ca00d(0x160) + _0x15e3d3 + "\x22]")[_0x4ca00d(0x16b)](function () {
        const _0x184dfd = _0x4ca00d;
        $(this)["text"](
          $(this)
            [_0x184dfd(0xc9)](_0x184dfd(0x1b8) + _0x15e3d3 + "\x22]")
            [_0x184dfd(0xc7)]() + 0x1,
        );
      }),
      $(_0x4ca00d(0x174) + _0x15e3d3 + "\x22]")[_0x4ca00d(0x16b)](function () {
        const _0x5e8f78 = _0x4ca00d;
        $(this)[_0x5e8f78(0x1c4)](
          $(this)
            [_0x5e8f78(0xc9)]("[data-display-input=\x22" + _0x15e3d3 + "\x22]")
            [_0x5e8f78(0xc7)]() + 0x1,
        );
      }),
      validation();
  }),
  $(_0x346856(0x116))["on"](_0x346856(0x176), function () {
    const _0x1ddfad = _0x346856,
      _0x54aead = $(this)[_0x1ddfad(0x14a)]("remove-upload");
    $(_0x1ddfad(0x17c) + _0x54aead + "\x22]")[_0x1ddfad(0x19b)](""),
      validation();
  });
function andLogic() {
  const _0x480211 = _0x346856;
  conditionalResult &&
    (steps["eq"](x)[_0x480211(0xe7)](_0x480211(0xcb))["hide"](),
    console["log"](_0x480211(0x15e)),
    steps["eq"](x)
      [_0x480211(0xe7)]("[data-show-if]")
      [_0x480211(0x16b)](function () {
        const _0x1d3ecd = _0x480211;
        function _0x183b21(_0x56bdd8) {
          const _0x5a760e = _0x1965,
            _0x215b10 = _0x56bdd8[_0x5a760e(0xe8)]("&"),
            _0x4be915 = [];
          return (
            _0x215b10["forEach"]((_0x4c445a) => {
              const _0x51161e = _0x5a760e,
                [_0x2cfa7a, _0x22ba2c] = _0x4c445a[_0x51161e(0xe8)]("=");
              _0x4be915[_0x51161e(0x198)]({
                field: _0x2cfa7a,
                value: _0x22ba2c,
              });
            }),
            _0x4be915
          );
        }
        const _0x38724b = $(this)["attr"]("data-show-if");
        console[_0x1d3ecd(0x11f)](_0x38724b);
        const _0x2a2e48 = _0x183b21(_0x38724b);
        function _0xb78762(_0x88384c, _0x2fafee) {
          const _0x32b33d = _0x1d3ecd;
          return _0x2fafee[_0x32b33d(0x146)]((_0xbf26a7, _0x106e15) => {
            const _0x34e376 = _0x32b33d;
            if (
              _0x88384c[0x0] &&
              _0xbf26a7[_0x34e376(0xb8)] === _0x88384c[0x0]["field"]
            )
              return _0x88384c["every"](
                (_0x174534, _0x66402d) =>
                  _0x2fafee[_0x106e15 + _0x66402d] &&
                  _0x2fafee[_0x106e15 + _0x66402d][_0x34e376(0xb8)] ===
                    _0x174534[_0x34e376(0xb8)] &&
                  _0x2fafee[_0x106e15 + _0x66402d]["value"] ===
                    _0x174534["value"],
              );
            return ![];
          });
        }
        const _0x5f0fab = _0xb78762(_0x2a2e48, all_data);
        _0x5f0fab ? $(this)[_0x1d3ecd(0x17f)]() : $(this)[_0x1d3ecd(0x11d)]();
      }));
}
scrollTop(), cloneRemove(), cloneRemoveInput();
