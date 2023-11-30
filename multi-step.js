//29th Nov 2023
//Bug fix
//1. Logic extra checkbox issue when pressing back button

const _0x1169c3 = _0x5e9f;
(function (_0x4966ba, _0x38a874) {
  const _0x317c35 = _0x5e9f,
    _0x41f5b8 = _0x4966ba();
  while (!![]) {
    try {
      const _0x13273a =
        -parseInt(_0x317c35(0x1ef)) / 0x1 +
        (parseInt(_0x317c35(0x1fe)) / 0x2) *
          (-parseInt(_0x317c35(0x1cd)) / 0x3) +
        (parseInt(_0x317c35(0x291)) / 0x4) *
          (parseInt(_0x317c35(0x238)) / 0x5) +
        (parseInt(_0x317c35(0x272)) / 0x6) *
          (parseInt(_0x317c35(0x2b6)) / 0x7) +
        (parseInt(_0x317c35(0x1c6)) / 0x8) *
          (parseInt(_0x317c35(0x264)) / 0x9) +
        parseInt(_0x317c35(0x2ac)) / 0xa +
        (-parseInt(_0x317c35(0x269)) / 0xb) *
          (parseInt(_0x317c35(0x221)) / 0xc);
      if (_0x13273a === _0x38a874) break;
      else _0x41f5b8["push"](_0x41f5b8["shift"]());
    } catch (_0x1e4b02) {
      _0x41f5b8["push"](_0x41f5b8["shift"]());
    }
  }
})(_0x3c05, 0xf3102);
let x = 0x0,
  curStep = 0x0,
  steps = $(_0x1169c3(0x29d)),
  progressbarClone = $(_0x1169c3(0x249))[_0x1169c3(0x1ea)](),
  progressbar,
  countCard = !![],
  weightedSelection = $(_0x1169c3(0x25d))[_0x1169c3(0x2a4)](_0x1169c3(0x270)),
  weightedSelectionRange = $("[data-weighted-selection-range]")[
    _0x1169c3(0x2a4)
  ](_0x1169c3(0x24b)),
  selectMultiple = $(_0x1169c3(0x19c))[_0x1169c3(0x2a4)](_0x1169c3(0x281)),
  customError = $(_0x1169c3(0x23d))[_0x1169c3(0x2a4)](_0x1169c3(0x20b)),
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
  reinitIX = $("[data-reinit]")[_0x1169c3(0x2a4)]("reinit"),
  textareaLength = 0x0,
  textInputLength = 0x0,
  emailInputLength = 0x0,
  selectInputLength = 0x0,
  checkboxInputLength = 0x0,
  filledInput = [],
  savedFilledInput = [],
  memory = $("[data-memory]")["data"](_0x1169c3(0x25a)),
  quiz = $(_0x1169c3(0x1d7))["data"]("quiz"),
  progress = 0x0;
const urlFormly = new URL(window["location"][_0x1169c3(0x229)]);
let _params = $(_0x1169c3(0x22e))[_0x1169c3(0x2a4)](_0x1169c3(0x1a8)),
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
  logicExtra = $(_0x1169c3(0x2a7))[_0x1169c3(0x2a4)](_0x1169c3(0x1f1)),
  oldSubmitText = $(_0x1169c3(0x1fb))[_0x1169c3(0x240)](),
  oldResetText = $("[data-btn=\x22reset\x22]")[_0x1169c3(0x2a0)](),
  formReset = $("[data-form=\x22multistep\x22]")[_0x1169c3(0x2a4)]("reset"),
  successCard = "",
  redirectTo = "",
  totalSteps = 0x0,
  checkCount = 0x0,
  resetDelay = $("[data-reset-delay]")[_0x1169c3(0x2a4)](_0x1169c3(0x274))
    ? $("[data-reset-delay]")[_0x1169c3(0x2a4)](_0x1169c3(0x274))
    : 0x7d0,
  redirectDelay = $(_0x1169c3(0x2a2))[_0x1169c3(0x2a4)](_0x1169c3(0x266))
    ? $("[data-redirect-delay]")["data"]("redirect-delay")
    : 0x7d0,
  newTab = !![],
  unfilledArr = [],
  phoneFormat = $(_0x1169c3(0x2a7))[_0x1169c3(0x2a4)](_0x1169c3(0x219)),
  scrollToTop = $(_0x1169c3(0x2a7))[_0x1169c3(0x2a4)](_0x1169c3(0x2a5)),
  conditionalResult =
    $(_0x1169c3(0x289))[_0x1169c3(0x2a4)](_0x1169c3(0x273)) ===
    _0x1169c3(0x242),
  scrollTopOffset = parseInt($(_0x1169c3(0x2a7))["data"](_0x1169c3(0x28a))),
  notRobot = !![],
  all_data = [];
const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
savedFilledInput = JSON[_0x1169c3(0x279)](
  localStorage["getItem"](_0x1169c3(0x1c8)),
);
var ogCloneArr = [];
$("[data-clone]")["each"](function () {
  const _0x1afd27 = _0x1169c3;
  ogCloneArr[_0x1afd27(0x28f)]({
    name: $(this)[_0x1afd27(0x2a4)]("clone"),
    element: $(this)["clone"](!![]),
    display: $(_0x1afd27(0x225) + $(this)[_0x1afd27(0x2a4)]("clone") + "\x22]")
      ["eq"](0x0)
      ["clone"](!![]),
  });
});
$(_0x1169c3(0x20e))["length"] > 0x0 && (notRobot = ![]);
function recaptcha(_0x56e2bf) {
  notRobot = !![];
}
$(_0x1169c3(0x1f0))[_0x1169c3(0x218)] > 0x0 &&
  (countCard = $(_0x1169c3(0x1f0))[_0x1169c3(0x2a4)](_0x1169c3(0x210)));
function _0x5e9f(_0x445770, _0x58f678) {
  const _0x3c0544 = _0x3c05();
  return (
    (_0x5e9f = function (_0x5e9fae, _0x5e70bf) {
      _0x5e9fae = _0x5e9fae - 0x19b;
      let _0x13299c = _0x3c0544[_0x5e9fae];
      return _0x13299c;
    }),
    _0x5e9f(_0x445770, _0x58f678)
  );
}
$(_0x1169c3(0x1cf))["hide"](),
  $(progressbarClone)[_0x1169c3(0x211)](_0x1169c3(0x1b4)),
  $(_0x1169c3(0x1ed))[_0x1169c3(0x1a9)]()[_0x1169c3(0x237)](),
  $(_0x1169c3(0x1fb))[_0x1169c3(0x295)](),
  $(_0x1169c3(0x293))[_0x1169c3(0x295)](),
  steps[_0x1169c3(0x21d)](function () {
    const _0x558f0b = _0x1169c3;
    $(_0x558f0b(0x1ed))["append"](
      progressbarClone[_0x558f0b(0x1ea)](!![], !![]),
    );
  }),
  $("[data-input-field]")[_0x1169c3(0x295)]();
countCard
  ? ((curStep = curStep + 0x1),
    (totalSteps = steps["length"]),
    $(_0x1169c3(0x223))[_0x1169c3(0x2a0)](totalSteps))
  : ($(steps[x])[_0x1169c3(0x2a4)]("card")
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    (totalSteps = $("[data-form=\x22step\x22]:not([data-card=\x22true\x22])")[
      "length"
    ]),
    $(_0x1169c3(0x223))["text"](totalSteps),
    $(_0x1169c3(0x267))[_0x1169c3(0x21d)](function () {
      const _0x492d35 = _0x1169c3;
      $($(_0x492d35(0x249))[$(this)[_0x492d35(0x2b4)]()])[_0x492d35(0x295)]();
    }));
(progressbar = $(_0x1169c3(0x1ed))["children"]()),
  $(_0x1169c3(0x249))["on"](_0x1169c3(0x1b1), clickableIndicator),
  $(_0x1169c3(0x271))["text"](curStep),
  steps["hide"](),
  $(_0x1169c3(0x288))["hide"](),
  $(_0x1169c3(0x1de))[_0x1169c3(0x21d)](function () {
    const _0x5e8a86 = _0x1169c3;
    $(this)[_0x5e8a86(0x1ab)]("type", _0x5e8a86(0x1a5));
  });
function getParams() {
  const _0x26c2e3 = _0x1169c3;
  urlFormly["searchParams"][_0x26c2e3(0x263)](function (_0x525b23, _0x14c323) {
    const _0x30d1fd = _0x26c2e3;
    searchQ[_0x30d1fd(0x28f)]({ val: _0x525b23, key: _0x14c323 });
  });
}
function getSafe(_0x6abf9d, _0x874b94) {
  try {
    return _0x6abf9d();
  } catch (_0x4af857) {
    return _0x874b94;
  }
}
function phoneAutoFormat(_0x362878) {
  var _0x2fd8b2 = "";
  return function (_0x36f3bb) {
    const _0x38e1b6 = _0x5e9f;
    var _0x1b1fc8 = "",
      _0x19df8f = _0x36f3bb[_0x38e1b6(0x1f9)](/\D/g, ""),
      _0x302758 = 0x0,
      _0x184310 = 0x0;
    while (
      _0x302758 < _0x19df8f[_0x38e1b6(0x218)] &&
      _0x184310 < _0x362878["length"]
    ) {
      _0x362878[_0x184310] === "x"
        ? ((_0x1b1fc8 += _0x19df8f[_0x302758]), _0x302758++)
        : (_0x1b1fc8 += _0x362878[_0x184310]),
        _0x184310++;
    }
    if (_0x36f3bb[_0x38e1b6(0x218)] < _0x2fd8b2[_0x38e1b6(0x218)]) {
      var _0x31a263 = _0x362878[_0x38e1b6(0x25e)](_0x184310);
      _0x1b1fc8 += _0x31a263[_0x38e1b6(0x1f9)](/x/g, "");
    }
    return (_0x2fd8b2 = _0x1b1fc8), _0x1b1fc8;
  };
}
function validateURL(_0x308284) {
  const _0x2c47ca = _0x1169c3;
  return urlPattern[_0x2c47ca(0x205)](_0x308284) ? !![] : ![];
}
quiz &&
  steps[_0x1169c3(0x21d)](function () {
    const _0x595a7e = _0x1169c3;
    $(this)[_0x595a7e(0x1a9)]()[_0x595a7e(0x1ab)](_0x595a7e(0x243), !![]),
      $(this)[_0x595a7e(0x1a9)]()[_0x595a7e(0x1ab)](_0x595a7e(0x1e2), 0xfa);
  });
function disableBtn(_0x23c27d) {
  const _0x521132 = _0x1169c3;
  (fill = ![]),
    !customError &&
      ($(_0x521132(0x245))[_0x521132(0x1d4)]({
        opacity: _0x521132(0x214),
        "pointer-events": _0x521132(0x1a0),
      }),
      $(_0x521132(0x245))[_0x521132(0x262)](_0x521132(0x2b2)),
      $(_0x521132(0x1fb))[_0x521132(0x1d4)]({
        opacity: _0x521132(0x214),
        "pointer-events": _0x521132(0x1a0),
      }),
      $(_0x521132(0x1fb))[_0x521132(0x262)]("disabled"),
      $(_0x521132(0x293))[_0x521132(0x1d4)]({
        opacity: _0x521132(0x214),
        "pointer-events": _0x521132(0x1a0),
      }),
      $(_0x521132(0x293))["addClass"](_0x521132(0x2b2)));
}
function enableBtn() {
  const _0x498426 = _0x1169c3;
  (fill = !![]),
    $(_0x498426(0x245))[_0x498426(0x1d4)]({
      "pointer-events": _0x498426(0x23f),
      opacity: "1",
    }),
    $(_0x498426(0x245))[_0x498426(0x211)](_0x498426(0x2b2)),
    $("[data-form=\x22submit-btn\x22]")[_0x498426(0x1d4)]({
      "pointer-events": _0x498426(0x23f),
      opacity: "1",
    }),
    $(_0x498426(0x1fb))[_0x498426(0x211)](_0x498426(0x2b2)),
    $(_0x498426(0x293))[_0x498426(0x1d4)]({
      "pointer-events": _0x498426(0x23f),
      opacity: "1",
    }),
    $(_0x498426(0x293))[_0x498426(0x211)](_0x498426(0x2b2));
}
function saveFilledInput() {
  const _0x34bbbe = _0x1169c3;
  $("form[data-form=\x22multistep\x22]\x20:input")
    [_0x34bbbe(0x268)](_0x34bbbe(0x282))
    ["each"](function () {
      const _0x2d05da = _0x34bbbe;
      $(this)["attr"]("type") === "checkbox" ||
      $(this)[_0x2d05da(0x1ab)](_0x2d05da(0x1f5)) === "radio"
        ? $(this)[_0x2d05da(0x22a)](_0x2d05da(0x1a1)) &&
          (filledInput[_0x2d05da(0x26f)](
            (_0x45bf4f) =>
              _0x45bf4f[_0x2d05da(0x213)] ===
              $(this)[_0x2d05da(0x1ab)](_0x2d05da(0x26a)),
          )
            ? ((filledInput = filledInput[_0x2d05da(0x236)](
                (_0x5afde9) =>
                  _0x5afde9[_0x2d05da(0x213)] !== $(this)["attr"]("name"),
              )),
              $(this)["val"]() !== "" &&
                filledInput[_0x2d05da(0x28f)]({
                  inputName: $(this)[_0x2d05da(0x1ab)]("name"),
                  value: $(this)["val"](),
                }))
            : $(this)["val"]() !== "" &&
              filledInput[_0x2d05da(0x28f)]({
                inputName: $(this)[_0x2d05da(0x1ab)](_0x2d05da(0x26a)),
                value: $(this)[_0x2d05da(0x240)](),
              }))
        : filledInput[_0x2d05da(0x26f)](
              (_0x24bce7) =>
                _0x24bce7["inputName"] ===
                $(this)[_0x2d05da(0x1ab)](_0x2d05da(0x26a)),
            )
          ? ((filledInput = filledInput[_0x2d05da(0x236)](
              (_0x379f25) =>
                _0x379f25[_0x2d05da(0x213)] !==
                $(this)[_0x2d05da(0x1ab)](_0x2d05da(0x26a)),
            )),
            $(this)["val"]() !== "" &&
              filledInput[_0x2d05da(0x28f)]({
                inputName: $(this)["attr"](_0x2d05da(0x26a)),
                value: $(this)["val"](),
              }))
          : $(this)["val"]() !== "" &&
            filledInput[_0x2d05da(0x28f)]({
              inputName: $(this)[_0x2d05da(0x1ab)](_0x2d05da(0x26a)),
              value: $(this)["val"](),
            });
    }),
    localStorage[_0x34bbbe(0x1c4)](_0x34bbbe(0x1c8)),
    localStorage[_0x34bbbe(0x212)](
      "filledInput",
      JSON[_0x34bbbe(0x1bd)](filledInput),
    );
}
function scrollTop() {
  const _0x25c656 = _0x1169c3;
  scrollToTop &&
    $("html,\x20body")[_0x25c656(0x1c9)](
      {
        scrollTop:
          $("[data-form=\x22multistep\x22]")["offset"]()["top"] -
          scrollTopOffset,
      },
      0x3e8,
    );
}
function updateStep() {
  const _0x35be9d = _0x1169c3;
  scrollTop(),
    (skip = ![]),
    $("[data-form=\x22custom-progress-indicator\x22]")["removeClass"](
      _0x35be9d(0x2b2),
    );
  $(_0x35be9d(0x261))[_0x35be9d(0x2a4)](_0x35be9d(0x2ad)) &&
    (steps["find"](_0x35be9d(0x1cc))[_0x35be9d(0x21d)](function () {
      const _0x316b27 = _0x35be9d;
      $(
        $(_0x316b27(0x26e))[
          $(this)[_0x316b27(0x1b9)](_0x316b27(0x29d))[_0x316b27(0x2b4)]()
        ],
      ),
        $(this)[_0x316b27(0x240)]() === "" && emptyInput++;
    }),
    emptyInput > 0x0
      ? $(_0x35be9d(0x1df))[_0x35be9d(0x262)]("disabled")
      : $(_0x35be9d(0x1df))[_0x35be9d(0x211)]("disabled"));
  $(_0x35be9d(0x26e))[_0x35be9d(0x211)]("current"),
    $(_0x35be9d(0x26e))[_0x35be9d(0x262)](_0x35be9d(0x2b2)),
    $($(_0x35be9d(0x26e))[x])[_0x35be9d(0x262)](_0x35be9d(0x1b4)),
    (selection = selections[_0x35be9d(0x236)](
      (_0x563b77) => _0x563b77["step"] === x - 0x1,
    ));
  next &&
    (x = getSafe(() => selection[0x0][_0x35be9d(0x227)])
      ? parseInt(getSafe(() => selection[0x0][_0x35be9d(0x227)]))
      : x);
  $(_0x35be9d(0x1d1))[_0x35be9d(0x295)](), steps[_0x35be9d(0x295)]();
  reinitIX === !![] && window[_0x35be9d(0x285)]["destroy"]();
  $(progressbar)[_0x35be9d(0x211)]("current");
  for (i = 0x0; i <= x; i++) {
    countCard
      ? $(progressbar[i])[_0x35be9d(0x262)]("current")
      : !$(steps[i])[_0x35be9d(0x2a4)](_0x35be9d(0x1a4)) &&
        $(progressbar[i])[_0x35be9d(0x262)](_0x35be9d(0x1b4));
  }
  reinitIX === !![]
    ? (window["Webflow"] &&
        window[_0x35be9d(0x285)]
          ["require"](_0x35be9d(0x23c))
          [_0x35be9d(0x292)](),
      document[_0x35be9d(0x25c)](new Event(_0x35be9d(0x28b))),
      $(steps[x])[_0x35be9d(0x234)]())
    : $(steps[x])[_0x35be9d(0x250)]("slow");
  $(_0x35be9d(0x231))[_0x35be9d(0x211)](_0x35be9d(0x299));
  x === 0x0 &&
    !$(steps[x])[_0x35be9d(0x2a4)](_0x35be9d(0x1a4)) &&
    ($(steps[x])[_0x35be9d(0x1bf)]("[data-answer]")["show"](),
    $(steps[x])
      [_0x35be9d(0x1bf)](_0x35be9d(0x1d1))
      ["addClass"](_0x35be9d(0x299)));
  selection[_0x35be9d(0x218)] > 0x0
    ? ($(steps[x])
        [_0x35be9d(0x1bf)](
          _0x35be9d(0x280) + selection[0x0][_0x35be9d(0x22c)] + "\x22]",
        )
        ["show"](),
      $(steps[x])
        [_0x35be9d(0x1bf)](
          _0x35be9d(0x280) + selection[0x0]["selected"] + "\x22]",
        )
        [_0x35be9d(0x262)](_0x35be9d(0x299)))
    : ($(steps[x])
        ["find"](_0x35be9d(0x280) + answer + "\x22]")
        ["show"](),
      $(steps[x])
        [_0x35be9d(0x1bf)](_0x35be9d(0x280) + answer + "\x22]")
        [_0x35be9d(0x262)]("active-answer-card"));
  if (x === 0x0)
    $(_0x35be9d(0x1ae))[_0x35be9d(0x295)](),
      $(_0x35be9d(0x245))[_0x35be9d(0x234)](),
      $(_0x35be9d(0x1fb))[_0x35be9d(0x295)]();
  else {
    if (
      x === steps[_0x35be9d(0x218)] - 0x1 ||
      $(steps[x])[_0x35be9d(0x1bf)](_0x35be9d(0x1b6))[_0x35be9d(0x218)] > 0x0
    ) {
      $(_0x35be9d(0x245))[_0x35be9d(0x295)]();
      if (
        $(steps[x])
          ["find"](_0x35be9d(0x1f2))
          [_0x35be9d(0x2a4)](_0x35be9d(0x27e))
      )
        $(steps[x])[_0x35be9d(0x1bf)](_0x35be9d(0x1f2))[_0x35be9d(0x234)]();
      else
        $(_0x35be9d(0x245))["data"](_0x35be9d(0x27e)) &&
          $(_0x35be9d(0x245))[_0x35be9d(0x234)]();
      $("[data-form=\x22submit-btn\x22]")[_0x35be9d(0x234)](),
        $(_0x35be9d(0x293))["show"](),
        $("[data-form=\x22back-btn\x22]")[_0x35be9d(0x234)]();
    } else
      $(_0x35be9d(0x245))[_0x35be9d(0x234)](),
        $(_0x35be9d(0x1ae))[_0x35be9d(0x234)](),
        $(_0x35be9d(0x1fb))["hide"](),
        $(_0x35be9d(0x293))[_0x35be9d(0x295)]();
  }
  $($(steps[x])[_0x35be9d(0x1bf)](_0x35be9d(0x21c))[0x0])[_0x35be9d(0x2a3)](),
    $($(steps[x])[_0x35be9d(0x1bf)](_0x35be9d(0x27c))[0x0])[_0x35be9d(0x2a3)](),
    validation();
  for (idx = 0x0; idx <= x; idx++) {
    $($(_0x35be9d(0x26e))[idx])["removeClass"](_0x35be9d(0x2b2));
  }
}
function validateEmail(_0x5d92a9, _0x1bcee2, _0x3f37a3) {
  const _0x479390 = _0x1169c3;
  let _0x3e7ea1 = _0x5d92a9[_0x479390(0x20f)]("@")
    ? _0x5d92a9[_0x479390(0x208)]("@")[0x1][_0x479390(0x208)](".")[0x0]
    : [];
  dom = [];
  _0x1bcee2 !== undefined &&
    _0x1bcee2[_0x479390(0x208)](",")["forEach"](function (_0x2dbedf) {
      const _0x268a23 = _0x479390;
      _0x2dbedf[_0x268a23(0x20f)](_0x3e7ea1) &&
        dom[_0x268a23(0x28f)](_0x3e7ea1);
    });
  dom["length"] > 0x0 ? (domainAllowed = ![]) : (domainAllowed = !![]);
  var _0x6c236c = /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,20})?$/;
  console[_0x479390(0x1be)](_0x6c236c[_0x479390(0x205)](_0x5d92a9)),
    !_0x6c236c[_0x479390(0x205)](_0x5d92a9) || !domainAllowed
      ? ((emailFilled = ![]), unfilledArr["push"]({ input: _0x3f37a3 }))
      : (emailFilled = !![]);
}
function _0x3c05() {
  const _0x23e9fe = [
    "each",
    "new-tab",
    ":input[type=\x22url\x22][required]",
    "[data-range]:contains(",
    "7538688PNKbNO",
    "\x22][value=\x22",
    "[data-text=\x22total-steps\x22]",
    "input-field",
    "[data-display=\x22",
    ".w-form-done",
    "skipTo",
    "[data-selection]",
    "href",
    "prop",
    "[data-clone-input-wrapper=\x22",
    "selected",
    "min-character",
    "[data-query-param]",
    "trim",
    "[data-cms-select=text]",
    ".active-answer-card",
    "[data-cms-select=cms]",
    "key",
    "show",
    "redirect-form-hehexd",
    "filter",
    "remove",
    "988085LHDaup",
    "preventDefault",
    ":input",
    "data-go-to",
    "ix2",
    "[data-custom-error-message]",
    "input[type=\x22radio\x22]",
    "auto",
    "val",
    "last",
    "AND",
    "data-radio-skip",
    ":input[type=\x22text\x22][required]",
    "[data-form=\x22next-btn\x22]",
    ":input[type=\x22checkbox\x22][required]",
    "[data-index=\x22",
    "match",
    "[data-form=\x22progress-indicator\x22]",
    "[data-form=\x22remove-clone\x22]",
    "weighted-selection-range",
    "[data-clone-input]",
    "input[name=\x22",
    "display",
    "[data-success-card=\x22",
    "fadeIn",
    "siblings",
    ":checked",
    "add-new-input",
    "relationship-",
    "data-input-field",
    "[data-remove-upload]",
    "data-show-if",
    "open",
    "body",
    "memory",
    ":input[type=\x22date\x22][required]",
    "dispatchEvent",
    "[data-weighted-selection]",
    "slice",
    ":input[type=\x22date\x22]",
    "edit-step",
    "[data-clickable]",
    "addClass",
    "forEach",
    "17700219ZvVMBj",
    "[type=\x22checkbox\x22]",
    "redirect-delay",
    "[data-form=\x22step\x22][data-card]",
    "not",
    "33VnTHRE",
    "name",
    "<br>Data\x20Answer\x20=\x20",
    ":input[type=\x22number\x22][required]",
    "radio",
    "[data-form=\x22custom-progress-indicator\x22]",
    "some",
    "weighted-selection",
    "[data-text=\x22current-step\x22]",
    "695616nvUblE",
    "conditional-result",
    "reset-delay",
    "[data-text=\x22total-weight\x22]",
    "value",
    "[data-clone-input-wrapper]",
    ":input[type=\x22number\x22]",
    "parse",
    "backTo",
    "trigger",
    "textarea[autofocus]",
    "debug-mode",
    "submit-show",
    "wait",
    "[data-answer=\x22",
    "select-multiple",
    "[type=\x22submit\x22]",
    "url",
    ":first",
    "Webflow",
    "input:radio[name=\x22",
    "[data-clone=\x22",
    "[data-success-card]",
    "[data-conditional-result]",
    "scroll-top-offset",
    "readystatechange",
    "[data-form=\x22submit-btn\x22]:visible",
    "change",
    "skip-to",
    "push",
    "reset",
    "4fXoNsu",
    "init",
    "[data-form-ms=\x22submit-btn\x22]",
    "block-domain",
    "hide",
    "w--redirected-checked",
    "select[required]",
    "parent",
    "active-answer-card",
    "[data-display-wrapper=\x22",
    "input",
    "radio-delay",
    "[data-form=\x22step\x22]",
    "[data-clone-input=\x22",
    "[data-radio-delay]",
    "text",
    "answer",
    "[data-redirect-delay]",
    "focus",
    "data",
    "scroll-top",
    ".w-radio-input",
    "[data-form=\x22multistep\x22]",
    "keyCode",
    "select[name=\x22",
    "textarea",
    ":input[type=\x22file\x22]",
    "17171720PCrLlC",
    "clickable",
    "data-name",
    ":input[type=\x22file\x22][required]",
    "[data-answer][data-radio-skip]:visible",
    "textarea[required]",
    "disabled",
    "every",
    "index",
    ":input[type=\x22email\x22]",
    "14DgDVMM",
    ".w-checkbox-input",
    "required",
    "data-skip-to",
    "[data-select-multiple]",
    ":input[type=\x22email\x22][required]",
    "status",
    "running",
    "none",
    "checked",
    "stopPropagation",
    "clicked",
    "card",
    "button",
    "[data-enter]",
    "enter",
    "query-param",
    "children",
    "\x22]\x20[data-input-field^=\x22",
    "attr",
    "ms-field",
    "startsWith",
    "[data-form=\x22back-btn\x22]",
    "input:radio[required]",
    ":input[type=\x22checkbox\x22]:checked",
    "click",
    "option[value=\x22",
    "novalidate",
    "current",
    "checkbox",
    "[data-form=\x22submit\x22]:visible",
    "Please\x20wait...",
    "append",
    "parents",
    "[data-input-index=\x22",
    "[data-go-to]",
    "[data-selection=\x22",
    "stringify",
    "log",
    "find",
    ":input[type=\x22checkbox\x22]",
    "[data-selected]:checked",
    "[data-clone]",
    ":input[type=\x22tel\x22][required]",
    "removeItem",
    "clickable-all",
    "8EnLyMN",
    "remove-upload",
    "filledInput",
    "animate",
    "success",
    "\x22]:checked",
    ":input[required]",
    "2051547OCWSjp",
    "findIndex",
    "[data-text=\x22error-message\x22]",
    "[data-display-input]",
    "[data-answer]",
    "input[type=\x22radio\x22]:checked",
    "[data-add-new-input]",
    "css",
    "Enter",
    "add-new",
    "[data-quiz]",
    "_blank",
    "selection",
    "select",
    "go-to",
    "textarea[required]:visible",
    "[data-clone-wrapper]",
    "[data-form=\x22next-btn\x22][type=\x22submit\x22]",
    "input[type=\x22submit\x22]",
    "radio-skip",
    "field",
    "data-radio-delay",
    "file",
    "[data-radio-skip]",
    ":input[type=\x22password\x22]",
    "keypress",
    "[data-selection=\x22other\x22]",
    "phone-autoformat",
    "[data-display-input=\x22",
    "clone",
    "[data-form=\x22remove-input-clone\x22]",
    "[data-show-if]",
    "[data-form=\x22progress\x22]",
    "submit",
    "549245tXLvVu",
    "[data-count-card]",
    "logic-extra",
    "[data-form=\x22next-btn\x22][data-submit-show]",
    "[data-btn=\x22check\x22]",
    ":input[type=\x22url\x22]",
    "type",
    "<br>Data\x20Go\x20To\x20=\x20",
    "input[type=\x22checkbox\x22]:visible",
    "textarea[name=\x22",
    "replace",
    "select[required]:visible",
    "[data-form=\x22submit-btn\x22]",
    "[data-skip-to]",
    "[data-clone-wrapper=\x22",
    "2TWTTAr",
    "input[type=\x22text\x22][required]:visible",
    "metaKey",
    ":input[type=\x22checkbox\x22][required]:checked",
    "step",
    "[data-cms-select=input]",
    "</div>",
    "test",
    "input:checkbox",
    "[data-checkbox]",
    "split",
    "redirect",
    "[data-input-field=\x22",
    "custom-error-message",
    "clicked\x20enter",
    "keydown",
    "div.g-recaptcha",
    "includes",
    "count-card",
    "removeClass",
    "setItem",
    "inputName",
    "0.4",
    "<div\x20data-range=\x22selection\x22\x20style=\x22display:none\x20!important\x22>",
    "<option>",
    "clone-input",
    "length",
    "phone-validation",
    "[data-radio-skip]:visible",
    ".w-form-formradioinput",
    "input[autofocus]",
  ];
  _0x3c05 = function () {
    return _0x23e9fe;
  };
  return _0x3c05();
}
function phoneValidation(_0x189303, _0x3a8017, _0x4957c0) {
  const _0x321054 = _0x1169c3;
  if (phoneFormat)
    return _0x189303[_0x321054(0x248)](
      new RegExp(phoneFormat[_0x321054(0x25e)](0x1, -0x1)),
    ) && _0x3a8017 >= _0x4957c0
      ? !![]
      : ![];
  else {
    if (_0x3a8017 >= _0x4957c0) return !![];
  }
}
function validation() {
  const _0xe03288 = _0x1169c3;
  $(steps[x])[_0xe03288(0x2a4)](_0xe03288(0x1a4)) && enableBtn();
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
    (textareaLength = $(steps[x])[_0xe03288(0x1bf)](_0xe03288(0x1dc))[
      _0xe03288(0x218)
    ]),
    (textInputLength = $(steps[x])[_0xe03288(0x1bf)](_0xe03288(0x1ff))[
      _0xe03288(0x218)
    ]),
    (selectInputLength = $(steps[x])[_0xe03288(0x1bf)](_0xe03288(0x1fa))[
      _0xe03288(0x218)
    ]),
    (emailInputLength = $(steps[x])[_0xe03288(0x1bf)](
      "input[type=\x22email\x22]:visible",
    )[_0xe03288(0x218)]),
    (checkboxInputLength = $(steps[x])["find"](_0xe03288(0x1f7))[
      _0xe03288(0x218)
    ]);
  textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0
    ? disableBtn()
    : enableBtn();
  checkCount = $(steps[x])[_0xe03288(0x2a4)](_0xe03288(0x1b5))
    ? $(steps[x])[_0xe03288(0x2a4)](_0xe03288(0x1b5))
    : $(steps[x])[_0xe03288(0x1bf)](_0xe03288(0x207))[_0xe03288(0x218)] > 0x0
      ? $(steps[x])
          [_0xe03288(0x1bf)](_0xe03288(0x207))
          [_0xe03288(0x2a4)](_0xe03288(0x1b5))
      : 0x0;
  if (!logicExtra)
    $(steps[x])[_0xe03288(0x1bf)](_0xe03288(0x23a))["is"](_0xe03288(0x265)) &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])["find"](":input[type=\x22checkbox\x22]")[_0xe03288(0x218)]
        ? $(steps[x])
            [_0xe03288(0x1bf)](_0xe03288(0x1c0))
            [_0xe03288(0x21d)](function () {
              const _0x557845 = _0xe03288;
              $(this)["is"](_0x557845(0x252))
                ? $(steps[x])["find"](_0x557845(0x246))["length"] < 0x1 &&
                  ((checkboxFilled = !![]),
                  resetInputErrorMessage($(this)[_0x557845(0x1ab)]("name")))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0x557845(0x28f)]({
                    input: $(this)["attr"](_0x557845(0x26a)),
                  }));
            })
        : $(steps[x])["find"](_0xe03288(0x1b0))[_0xe03288(0x218)] >= checkCount
          ? $(steps[x])[_0xe03288(0x1bf)](_0xe03288(0x246))[_0xe03288(0x218)] >
            0x0
            ? $(steps[x])
                [_0xe03288(0x1bf)](_0xe03288(0x246))
                [_0xe03288(0x21d)](function () {
                  const _0x1f99f0 = _0xe03288;
                  !$(this)["is"](_0x1f99f0(0x252))
                    ? ((checkboxFilled = ![]),
                      unfilledArr["push"]({
                        input: $(this)[_0x1f99f0(0x1ab)]("name"),
                      }))
                    : ((checkboxFilled = !![]),
                      $(steps[x])["find"](_0x1f99f0(0x201))[_0x1f99f0(0x218)] >=
                        $(steps[x])["find"](_0x1f99f0(0x246))[
                          _0x1f99f0(0x218)
                        ] &&
                        resetInputErrorMessage(
                          $(steps[x])
                            [_0x1f99f0(0x1bf)](_0x1f99f0(0x1c0))
                            [_0x1f99f0(0x1ab)]("name"),
                        ));
                })
            : ((checkboxFilled = !![]),
              resetInputErrorMessage(
                $(steps[x])["find"](_0xe03288(0x1c0))[_0xe03288(0x1ab)]("name"),
              ))
          : ((checkboxFilled = ![]),
            $(steps[x])
              [_0xe03288(0x1bf)](_0xe03288(0x246))
              ["each"](function () {
                const _0x1bae20 = _0xe03288;
                $(this)[_0x1bae20(0x268)](":checked") &&
                  unfilledArr[_0x1bae20(0x28f)]({
                    input: $(this)[_0x1bae20(0x1ab)]("name"),
                  });
              }),
            unfilledArr[_0xe03288(0x28f)]({
              input: $(steps[x])
                [_0xe03288(0x1bf)](_0xe03288(0x1c0))
                [_0xe03288(0x1ab)](_0xe03288(0x26a)),
            }))),
      $(steps[x])
        [_0xe03288(0x1bf)](_0xe03288(0x1af))
        [_0xe03288(0x21d)](function (_0x4a8edb) {
          const _0x31fc42 = _0xe03288;
          var _0x4ff462 = $(this)[_0x31fc42(0x1ab)]("name");
          $(_0x31fc42(0x286) + _0x4ff462 + _0x31fc42(0x1cb))[
            _0x31fc42(0x218)
          ] == 0x0
            ? (!empReqRadio["find"](
                (_0x56845f) => _0x56845f[_0x31fc42(0x29b)] === _0x4a8edb,
              ) && empReqRadio[_0x31fc42(0x28f)]({ input: _0x4a8edb }),
              unfilledArr["push"]({
                input: $(this)[_0x31fc42(0x1ab)](_0x31fc42(0x26a)),
              }))
            : (empReqRadio = empReqRadio[_0x31fc42(0x236)](
                (_0x55bbca) => _0x55bbca[_0x31fc42(0x29b)] !== _0x4a8edb,
              )),
            empReqRadio[_0x31fc42(0x218)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0xe03288(0x1bf)](_0xe03288(0x244))
        [_0xe03288(0x21d)](function (_0x53296a) {
          const _0x54f9ff = _0xe03288;
          let _0x3c5491 = $(this)["val"]()["length"],
            _0x3d633f = $(this)[_0x54f9ff(0x2a4)]("min-character")
              ? $(this)[_0x54f9ff(0x2a4)]("min-character")
              : 0x0;
          $(this)["val"]() !== "" && _0x3c5491 >= _0x3d633f
            ? (empReqInput = empReqInput[_0x54f9ff(0x236)](
                (_0x4e2690) => _0x4e2690[_0x54f9ff(0x29b)] !== _0x53296a,
              ))
            : (!empReqInput[_0x54f9ff(0x1bf)](
                (_0x3c0599) => _0x3c0599[_0x54f9ff(0x29b)] === _0x53296a,
              ) && empReqInput["push"]({ input: _0x53296a }),
              unfilledArr[_0x54f9ff(0x28f)]({
                input: $(this)["attr"](_0x54f9ff(0x26a)),
              })),
            empReqInput[_0x54f9ff(0x218)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        ["find"](":input[type=\x22password\x22][required]")
        [_0xe03288(0x21d)](function (_0x59a06e) {
          const _0x1228ad = _0xe03288;
          let _0x725eaf = $(this)[_0x1228ad(0x240)]()[_0x1228ad(0x218)],
            _0x539f3f = $(this)[_0x1228ad(0x2a4)](_0x1228ad(0x22d))
              ? $(this)["data"](_0x1228ad(0x22d))
              : 0x0;
          $(this)[_0x1228ad(0x240)]() !== "" && _0x725eaf >= _0x539f3f
            ? (empReqPassword = empReqPassword[_0x1228ad(0x236)](
                (_0x34af78) => _0x34af78[_0x1228ad(0x29b)] !== _0x59a06e,
              ))
            : (!empReqPassword[_0x1228ad(0x1bf)](
                (_0x2bec9e) => _0x2bec9e[_0x1228ad(0x29b)] === _0x59a06e,
              ) && empReqPassword[_0x1228ad(0x28f)]({ input: _0x59a06e }),
              unfilledArr["push"]({
                input: $(this)[_0x1228ad(0x1ab)](_0x1228ad(0x26a)),
              })),
            empReqPassword[_0x1228ad(0x218)] === 0x0
              ? (passwordFilled = !![])
              : (passwordFilled = ![]);
        }),
      $(steps[x])
        [_0xe03288(0x1bf)](_0xe03288(0x21f))
        ["each"](function (_0x3550f1) {
          const _0x1b9800 = _0xe03288;
          let _0x25c54a = $(this)[_0x1b9800(0x240)]()[_0x1b9800(0x218)],
            _0x5a62ef = $(this)["data"]("min-character")
              ? $(this)[_0x1b9800(0x2a4)](_0x1b9800(0x22d))
              : 0x0;
          $(this)[_0x1b9800(0x240)]() !== "" && _0x25c54a >= _0x5a62ef
            ? (empReqUrl = empReqUrl[_0x1b9800(0x236)](
                (_0x34cb91) => _0x34cb91[_0x1b9800(0x29b)] !== _0x3550f1,
              ))
            : (!empReqUrl["find"](
                (_0x1de1af) => _0x1de1af[_0x1b9800(0x29b)] === _0x3550f1,
              ) && empReqUrl[_0x1b9800(0x28f)]({ input: _0x3550f1 }),
              unfilledArr[_0x1b9800(0x28f)]({
                input: $(this)[_0x1b9800(0x1ab)](_0x1b9800(0x26a)),
              })),
            empReqUrl["length"] === 0x0 &&
            validateURL($(this)[_0x1b9800(0x240)]())
              ? ((urlFilled = !![]), console["log"](urlFilled))
              : (urlFilled = ![]);
        }),
      $(steps[x])
        [_0xe03288(0x1bf)](_0xe03288(0x25b))
        [_0xe03288(0x21d)](function (_0xe2a7af) {
          const _0x9c711f = _0xe03288;
          $(this)["val"]() !== ""
            ? (empReqDate = empReqDate[_0x9c711f(0x236)](
                (_0x27c300) => _0x27c300[_0x9c711f(0x29b)] !== _0xe2a7af,
              ))
            : (!empReqDate[_0x9c711f(0x1bf)](
                (_0xee809) => _0xee809["input"] === _0xe2a7af,
              ) && empReqDate[_0x9c711f(0x28f)]({ input: _0xe2a7af }),
              unfilledArr[_0x9c711f(0x28f)]({
                input: $(this)[_0x9c711f(0x1ab)](_0x9c711f(0x26a)),
              })),
            empReqDate[_0x9c711f(0x218)] === 0x0
              ? (dateFilled = !![])
              : (dateFilled = ![]);
        }),
      $(steps[x])
        [_0xe03288(0x1bf)](_0xe03288(0x1c3))
        [_0xe03288(0x21d)](function (_0x5c0920) {
          const _0x39d1eb = _0xe03288;
          if ($(this)["val"]() !== "") {
            let _0x55deb5 = $(this)[_0x39d1eb(0x240)]()[_0x39d1eb(0x218)],
              _0x15f193 = $(this)[_0x39d1eb(0x2a4)](_0x39d1eb(0x22d))
                ? $(this)["data"](_0x39d1eb(0x22d))
                : 0x0;
            if ($(this)[_0x39d1eb(0x2a4)](_0x39d1eb(0x1e8))) {
              var _0x83e20f = phoneAutoFormat(
                $(this)[_0x39d1eb(0x2a4)](_0x39d1eb(0x1e8)),
              );
              $(this)[_0x39d1eb(0x240)](_0x83e20f($(this)[_0x39d1eb(0x240)]()));
            }
            phoneValidation($(this)[_0x39d1eb(0x240)](), _0x55deb5, _0x15f193)
              ? (empReqTel = empReqTel[_0x39d1eb(0x236)](
                  (_0x2caf2f) => _0x2caf2f[_0x39d1eb(0x29b)] !== _0x5c0920,
                ))
              : empReqTel[_0x39d1eb(0x28f)]({ input: _0x5c0920 });
          } else
            !empReqTel["find"](
              (_0x2f1e8c) => _0x2f1e8c[_0x39d1eb(0x29b)] === _0x5c0920,
            ) && empReqTel[_0x39d1eb(0x28f)]({ input: _0x5c0920 }),
              unfilledArr["push"]({ input: $(this)[_0x39d1eb(0x1ab)]("name") });
          empReqTel[_0x39d1eb(0x218)] === 0x0
            ? (telFilled = !![])
            : (telFilled = ![]);
        }),
      $(steps[x])
        [_0xe03288(0x1bf)](_0xe03288(0x2af))
        ["each"](function (_0x46031d) {
          const _0x24c094 = _0xe03288;
          $(this)[_0x24c094(0x240)]() !== ""
            ? (empReqFile = empReqFile["filter"](
                (_0x137d6d) => _0x137d6d[_0x24c094(0x29b)] !== _0x46031d,
              ))
            : (!empReqFile[_0x24c094(0x1bf)](
                (_0x346212) => _0x346212["input"] === _0x46031d,
              ) && empReqFile[_0x24c094(0x28f)]({ input: _0x46031d }),
              unfilledArr[_0x24c094(0x28f)]({
                input: $(this)[_0x24c094(0x1ab)](_0x24c094(0x26a)),
              })),
            empReqFile[_0x24c094(0x218)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0xe03288(0x1bf)](":input[type=\x22number\x22][required]")
        [_0xe03288(0x21d)](function (_0x5d6a66) {
          const _0x4f6c30 = _0xe03288;
          let _0x43c78f = $(this)["val"]()[_0x4f6c30(0x218)],
            _0x56a10f = $(this)[_0x4f6c30(0x2a4)](_0x4f6c30(0x22d))
              ? $(this)[_0x4f6c30(0x2a4)](_0x4f6c30(0x22d))
              : 0x0;
          $(this)[_0x4f6c30(0x240)]() !== "" && _0x43c78f >= _0x56a10f
            ? (empReqNum = empReqNum[_0x4f6c30(0x236)](
                (_0x47a9da) => _0x47a9da[_0x4f6c30(0x29b)] !== _0x5d6a66,
              ))
            : (!empReqNum[_0x4f6c30(0x1bf)](
                (_0x28a0af) => _0x28a0af[_0x4f6c30(0x29b)] === _0x5d6a66,
              ) && empReqNum["push"]({ input: _0x5d6a66 }),
              unfilledArr["push"]({
                input: $(this)[_0x4f6c30(0x1ab)]("name"),
              })),
            empReqNum["length"] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0xe03288(0x297))
        ["each"](function (_0x775933) {
          const _0x525cf5 = _0xe03288;
          let _0x43bb23 = $(this)["val"]();
          _0x43bb23 === "" && (_0x43bb23 = null),
            _0x43bb23 != null
              ? (empReqSelect = empReqSelect["filter"](
                  (_0x42305a) => _0x42305a[_0x525cf5(0x29b)] !== _0x775933,
                ))
              : (!empReqSelect[_0x525cf5(0x1bf)](
                  (_0x45889f) => _0x45889f[_0x525cf5(0x29b)] === _0x775933,
                ) && empReqSelect[_0x525cf5(0x28f)]({ input: _0x775933 }),
                unfilledArr[_0x525cf5(0x28f)]({
                  input: $(this)[_0x525cf5(0x1ab)](_0x525cf5(0x26a)),
                })),
            empReqSelect["length"] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0xe03288(0x1bf)](_0xe03288(0x2b1))
        ["each"](function (_0x5b6323) {
          const _0x55d225 = _0xe03288;
          let _0x5ed3c4 = $(this)[_0x55d225(0x240)]()[_0x55d225(0x218)],
            _0x5de678 = $(this)["data"](_0x55d225(0x22d))
              ? $(this)["data"](_0x55d225(0x22d))
              : 0x0;
          $(this)[_0x55d225(0x240)]() !== "" && _0x5ed3c4 >= _0x5de678
            ? (empReqTextarea = empReqTextarea[_0x55d225(0x236)](
                (_0x43a77b) => _0x43a77b[_0x55d225(0x29b)] !== _0x5b6323,
              ))
            : (!empReqTextarea["find"](
                (_0x4b6fde) => _0x4b6fde[_0x55d225(0x29b)] === _0x5b6323,
              ) && empReqTextarea["push"]({ input: _0x5b6323 }),
              unfilledArr[_0x55d225(0x28f)]({
                input: $(this)[_0x55d225(0x1ab)](_0x55d225(0x26a)),
              })),
            empReqTextarea[_0x55d225(0x218)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0xe03288(0x19d))
        [_0xe03288(0x21d)](function () {
          const _0x3dcc8d = _0xe03288;
          $(this)[_0x3dcc8d(0x240)]() !== ""
            ? validateEmail(
                $(this)[_0x3dcc8d(0x240)](),
                $(this)[_0x3dcc8d(0x2a4)](_0x3dcc8d(0x294)),
                $(this)[_0x3dcc8d(0x1ab)]("name"),
              )
            : ((emailFilled = ![]),
              unfilledArr["push"]({
                input: $(this)["attr"](_0x3dcc8d(0x26a)),
              }));
        });
  else {
    if ($(steps[x])["data"](_0xe03288(0x1a4)))
      (answer = $(steps[x])
        [_0xe03288(0x1bf)](_0xe03288(0x1bb))
        [_0xe03288(0x2a4)](_0xe03288(0x1db))),
        (selections = selections[_0xe03288(0x236)](
          (_0x2202bf) => _0x2202bf[_0xe03288(0x202)] !== x,
        )),
        selections[_0xe03288(0x28f)]({ step: x, selected: answer });
    else
      $(steps[x])
        [_0xe03288(0x1bf)](_0xe03288(0x231))
        [_0xe03288(0x2a4)]("card") &&
        ((answer = $(steps[x])
          [_0xe03288(0x1bf)](_0xe03288(0x231))
          [_0xe03288(0x2a4)](_0xe03288(0x1db))),
        (selections = selections[_0xe03288(0x236)](
          (_0xf666ce) => _0xf666ce[_0xe03288(0x202)] !== x,
        )),
        selections[_0xe03288(0x28f)]({ step: x, selected: answer }));
    $(steps[x])
      [_0xe03288(0x1bf)](".active-answer-card")
      [_0xe03288(0x1bf)](":input")
      ["is"](_0xe03288(0x265)) &&
      (checkCount === "*" ||
      checkCount > $(steps[x])[_0xe03288(0x1bf)](_0xe03288(0x1c0))["length"]
        ? (console["log"](_0xe03288(0x205)),
          $(steps[x])
            [_0xe03288(0x1bf)](":input[type=\x22checkbox\x22]")
            [_0xe03288(0x21d)](function () {
              const _0x3a128c = _0xe03288;
              $(this)["is"](_0x3a128c(0x252))
                ? $(steps[x])[_0x3a128c(0x1bf)](":input[required]")["length"] <
                    0x1 &&
                  ((skipTo = undefined),
                  $(this)
                    [_0x3a128c(0x1b9)](_0x3a128c(0x1fc))
                    ["data"](_0x3a128c(0x28e)) &&
                    (skipTo = $(this)
                      ["parents"](_0x3a128c(0x1fc))
                      [_0x3a128c(0x2a4)]("skip-to")),
                  $(this)
                    [_0x3a128c(0x1b9)](_0x3a128c(0x1bb))
                    [_0x3a128c(0x1ab)]("data-go-to") &&
                    ((answer = $(this)
                      [_0x3a128c(0x1b9)](_0x3a128c(0x1bb))
                      [_0x3a128c(0x1ab)](_0x3a128c(0x23b))),
                    (selections = selections[_0x3a128c(0x236)](
                      (_0x3129b6) => _0x3129b6[_0x3a128c(0x202)] !== x,
                    )),
                    selections[_0x3a128c(0x28f)]({ step: x, selected: answer }),
                    skipTo &&
                      (selections[_0x3a128c(0x28f)]({
                        step: skipTo - 0x2,
                        selected: answer,
                      }),
                      (objIndex = selections[_0x3a128c(0x1ce)](
                        (_0x2ded48) => _0x2ded48[_0x3a128c(0x202)] === x,
                      )),
                      (selections[objIndex][_0x3a128c(0x227)] =
                        parseInt(skipTo) - 0x1),
                      (selections[objIndex][_0x3a128c(0x27a)] = x))),
                  (checkboxFilled = !![]),
                  $(steps[x])[_0x3a128c(0x1bf)](_0x3a128c(0x201))[
                    _0x3a128c(0x218)
                  ] >=
                    $(steps[x])[_0x3a128c(0x1bf)](_0x3a128c(0x246))[
                      _0x3a128c(0x218)
                    ] &&
                    resetInputErrorMessage(
                      $(steps[x])
                        [_0x3a128c(0x1bf)](":input[type=\x22checkbox\x22]")
                        [_0x3a128c(0x1ab)](_0x3a128c(0x26a)),
                    ))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0x3a128c(0x28f)]({
                    input: $(this)["attr"](_0x3a128c(0x26a)),
                  }));
            }))
        : $(steps[x])
              ["find"](_0xe03288(0x231))
              [_0xe03288(0x1bf)](":input[type=\x22checkbox\x22]:checked")[
              _0xe03288(0x218)
            ] >= checkCount
          ? ($(steps[x])
              [_0xe03288(0x1bf)](".active-answer-card")
              ["find"](_0xe03288(0x1c0))
              [_0xe03288(0x1b9)]("[data-go-to]")
              [_0xe03288(0x1ab)](_0xe03288(0x23b)) &&
              ((skipTo = undefined),
              $(steps[x])
                [_0xe03288(0x1bf)](_0xe03288(0x231))
                [_0xe03288(0x1bf)](_0xe03288(0x1c0))
                ["parents"]("[data-skip-to]")
                ["attr"](_0xe03288(0x19b)) &&
                (skipTo = $(steps[x])
                  ["find"](_0xe03288(0x231))
                  [_0xe03288(0x1bf)](":input[type=\x22checkbox\x22]:checked")
                  ["parents"]("[data-skip-to]")
                  [_0xe03288(0x1ab)]("data-skip-to")),
              (answer = $(steps[x])
                ["find"](_0xe03288(0x231))
                ["find"](_0xe03288(0x1c0))
                ["parents"]("[data-go-to]")
                [_0xe03288(0x1ab)](_0xe03288(0x23b))),
              (selections = selections["filter"](
                (_0xe249b8) => _0xe249b8[_0xe03288(0x202)] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                ((selections = selections["filter"](
                  (_0x4618e8) => _0x4618e8[_0xe03288(0x202)] !== skipTo - 0x2,
                )),
                selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0xe03288(0x1ce)](
                  (_0x4de907) => _0x4de907[_0xe03288(0x202)] === x,
                )),
                console[_0xe03288(0x1be)](objIndex),
                (selections[objIndex][_0xe03288(0x227)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x),
                console[_0xe03288(0x1be)](_0xe03288(0x19f)))),
            (checkboxFilled = !![]),
            $(steps[x])[_0xe03288(0x1bf)](
              ":input[type=\x22checkbox\x22][required]:checked",
            )[_0xe03288(0x218)] >=
              $(steps[x])[_0xe03288(0x1bf)](_0xe03288(0x246))[
                _0xe03288(0x218)
              ] &&
              resetInputErrorMessage(
                $(steps[x])
                  [_0xe03288(0x1bf)](_0xe03288(0x1c0))
                  ["attr"](_0xe03288(0x26a)),
              ))
          : ((checkboxFilled = ![]),
            $(steps[x])
              [_0xe03288(0x1bf)](_0xe03288(0x246))
              [_0xe03288(0x21d)](function () {
                const _0x354eb1 = _0xe03288;
                $(this)[_0x354eb1(0x268)](_0x354eb1(0x252)) &&
                  unfilledArr[_0x354eb1(0x28f)]({
                    input: $(this)[_0x354eb1(0x1ab)]("name"),
                  });
              }))),
      $(steps[x])
        [_0xe03288(0x1bf)](_0xe03288(0x231))
        [_0xe03288(0x1bf)](_0xe03288(0x1af))
        ["each"](function (_0x2d5db2) {
          const _0x19d527 = _0xe03288;
          var _0x527e11 = $(this)[_0x19d527(0x1ab)](_0x19d527(0x26a));
          $(_0x19d527(0x286) + _0x527e11 + "\x22]:checked")[_0x19d527(0x218)] ==
          0x0
            ? (!empReqRadio[_0x19d527(0x1bf)](
                (_0x14bc07) => _0x14bc07["input"] === _0x2d5db2,
              ) && empReqRadio[_0x19d527(0x28f)]({ input: _0x2d5db2 }),
              unfilledArr[_0x19d527(0x28f)]({
                input: $(this)[_0x19d527(0x1ab)](_0x19d527(0x26a)),
              }))
            : (empReqRadio = empReqRadio[_0x19d527(0x236)](
                (_0x3dfb36) => _0x3dfb36[_0x19d527(0x29b)] !== _0x2d5db2,
              )),
            empReqRadio[_0x19d527(0x218)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0xe03288(0x1bf)](_0xe03288(0x231))
        [_0xe03288(0x1bf)](_0xe03288(0x244))
        ["each"](function (_0x47e3f3) {
          const _0x3e47a8 = _0xe03288;
          let _0x313bc7 = $(this)[_0x3e47a8(0x240)]()[_0x3e47a8(0x218)],
            _0x1c33d8 = $(this)[_0x3e47a8(0x2a4)](_0x3e47a8(0x22d))
              ? $(this)[_0x3e47a8(0x2a4)](_0x3e47a8(0x22d))
              : 0x0;
          $(this)[_0x3e47a8(0x240)]() !== "" && _0x313bc7 >= _0x1c33d8
            ? (empReqInput = empReqInput[_0x3e47a8(0x236)](
                (_0x3fd146) => _0x3fd146[_0x3e47a8(0x29b)] !== _0x47e3f3,
              ))
            : (!empReqInput["find"](
                (_0x246d21) => _0x246d21[_0x3e47a8(0x29b)] === _0x47e3f3,
              ) && empReqInput[_0x3e47a8(0x28f)]({ input: _0x47e3f3 }),
              unfilledArr[_0x3e47a8(0x28f)]({
                input: $(this)[_0x3e47a8(0x1ab)](_0x3e47a8(0x26a)),
              })),
            empReqInput[_0x3e47a8(0x218)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0xe03288(0x1bf)](_0xe03288(0x231))
        ["find"](":input[type=\x22text\x22]")
        [_0xe03288(0x21d)](function (_0x2a5a65) {
          const _0x464943 = _0xe03288;
          (skipTo = undefined),
            $(this)
              [_0x464943(0x1b9)]("[data-skip-to]")
              [_0x464943(0x2a4)](_0x464943(0x28e)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0x464943(0x1fc))
                [_0x464943(0x2a4)](_0x464943(0x28e))),
            $(this)
              [_0x464943(0x1b9)]("[data-go-to]")
              [_0x464943(0x1ab)](_0x464943(0x23b)) &&
              ((answer = $(this)
                [_0x464943(0x1b9)](_0x464943(0x1bb))
                ["attr"]("data-go-to")),
              (selections = selections["filter"](
                (_0x15ab1d) => _0x15ab1d["step"] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x464943(0x28f)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x464943(0x1ce)](
                  (_0x50a8f2) => _0x50a8f2[_0x464943(0x202)] === x,
                )),
                (selections[objIndex][_0x464943(0x227)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x464943(0x27a)] = x)));
        }),
      $(steps[x])
        [_0xe03288(0x1bf)](_0xe03288(0x231))
        [_0xe03288(0x1bf)](":input[type=\x22password\x22][required]")
        [_0xe03288(0x21d)](function (_0x2717c8) {
          const _0xeff2da = _0xe03288;
          let _0x383d22 = $(this)[_0xeff2da(0x240)]()[_0xeff2da(0x218)],
            _0xb8abc6 = $(this)[_0xeff2da(0x2a4)]("min-character")
              ? $(this)["data"](_0xeff2da(0x22d))
              : 0x0;
          $(this)[_0xeff2da(0x240)]() !== "" && _0x383d22 >= _0xb8abc6
            ? (empReqPassword = empReqPassword[_0xeff2da(0x236)](
                (_0x4305e7) => _0x4305e7[_0xeff2da(0x29b)] !== _0x2717c8,
              ))
            : (!empReqPassword[_0xeff2da(0x1bf)](
                (_0x3b1a98) => _0x3b1a98[_0xeff2da(0x29b)] === _0x2717c8,
              ) && empReqPassword[_0xeff2da(0x28f)]({ input: _0x2717c8 }),
              unfilledArr[_0xeff2da(0x28f)]({
                input: $(this)[_0xeff2da(0x1ab)](_0xeff2da(0x26a)),
              })),
            empReqPassword[_0xeff2da(0x218)] === 0x0
              ? (passwordFilled = !![])
              : (passwordFilled = ![]);
        }),
      $(steps[x])
        [_0xe03288(0x1bf)](".active-answer-card")
        ["find"](_0xe03288(0x1e5))
        [_0xe03288(0x21d)](function (_0x394a45) {
          const _0x5a0224 = _0xe03288;
          (skipTo = undefined),
            $(this)
              [_0x5a0224(0x1b9)]("[data-skip-to]")
              [_0x5a0224(0x2a4)]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0x5a0224(0x1b9)](_0x5a0224(0x1fc))
                [_0x5a0224(0x2a4)](_0x5a0224(0x28e))),
            $(this)
              ["parents"](_0x5a0224(0x1bb))
              [_0x5a0224(0x1ab)](_0x5a0224(0x23b)) &&
              ((answer = $(this)
                [_0x5a0224(0x1b9)](_0x5a0224(0x1bb))
                [_0x5a0224(0x1ab)](_0x5a0224(0x23b))),
              (selections = selections["filter"](
                (_0xf5c52d) => _0xf5c52d[_0x5a0224(0x202)] !== x,
              )),
              selections[_0x5a0224(0x28f)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0x5a0224(0x1ce)](
                  (_0x2568ee) => _0x2568ee["step"] === x,
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x5a0224(0x27a)] = x)));
        }),
      $(steps[x])
        [_0xe03288(0x1bf)](_0xe03288(0x231))
        [_0xe03288(0x1bf)](_0xe03288(0x21f))
        ["each"](function (_0x4900f5) {
          const _0x28cd04 = _0xe03288;
          let _0x51f750 = $(this)[_0x28cd04(0x240)]()[_0x28cd04(0x218)],
            _0xf5e7ca = $(this)["data"](_0x28cd04(0x22d))
              ? $(this)[_0x28cd04(0x2a4)]("min-character")
              : 0x0;
          $(this)[_0x28cd04(0x240)]() !== "" && _0x51f750 >= _0xf5e7ca
            ? (empReqUrl = empReqUrl[_0x28cd04(0x236)](
                (_0x864df8) => _0x864df8[_0x28cd04(0x29b)] !== _0x4900f5,
              ))
            : (!empReqUrl["find"](
                (_0x2c0ece) => _0x2c0ece[_0x28cd04(0x29b)] === _0x4900f5,
              ) && empReqUrl[_0x28cd04(0x28f)]({ input: _0x4900f5 }),
              unfilledArr[_0x28cd04(0x28f)]({
                input: $(this)[_0x28cd04(0x1ab)]("name"),
              })),
            empReqUrl["length"] === 0x0 &&
            validateURL($(this)[_0x28cd04(0x240)]())
              ? (urlFilled = !![])
              : (urlFilled = ![]);
        }),
      $(steps[x])
        [_0xe03288(0x1bf)](_0xe03288(0x231))
        [_0xe03288(0x1bf)](_0xe03288(0x1f4))
        [_0xe03288(0x21d)](function (_0x3fb818) {
          const _0x486f52 = _0xe03288;
          (skipTo = undefined),
            $(this)
              [_0x486f52(0x1b9)]("[data-skip-to]")
              [_0x486f52(0x2a4)](_0x486f52(0x28e)) !== "" &&
              (skipTo = $(this)
                [_0x486f52(0x1b9)]("[data-skip-to]")
                [_0x486f52(0x2a4)](_0x486f52(0x28e))),
            $(this)
              [_0x486f52(0x1b9)](_0x486f52(0x1bb))
              [_0x486f52(0x1ab)](_0x486f52(0x23b)) &&
              ((answer = $(this)
                [_0x486f52(0x1b9)](_0x486f52(0x1bb))
                ["attr"](_0x486f52(0x23b))),
              (selections = selections[_0x486f52(0x236)](
                (_0x1c3f95) => _0x1c3f95[_0x486f52(0x202)] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0x486f52(0x1ce)](
                  (_0x39542f) => _0x39542f[_0x486f52(0x202)] === x,
                )),
                (selections[objIndex][_0x486f52(0x227)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        ["find"](".active-answer-card")
        ["find"](_0xe03288(0x25b))
        [_0xe03288(0x21d)](function (_0x569171) {
          const _0x55ec1b = _0xe03288;
          $(this)[_0x55ec1b(0x240)]() !== ""
            ? (empReqDate = empReqDate[_0x55ec1b(0x236)](
                (_0x1ca613) => _0x1ca613["input"] !== _0x569171,
              ))
            : (!empReqDate["find"](
                (_0x31b29f) => _0x31b29f[_0x55ec1b(0x29b)] === _0x569171,
              ) && empReqDate[_0x55ec1b(0x28f)]({ input: _0x569171 }),
              unfilledArr["push"]({
                input: $(this)[_0x55ec1b(0x1ab)](_0x55ec1b(0x26a)),
              })),
            empReqDate[_0x55ec1b(0x218)] === 0x0
              ? (dateFilled = !![])
              : (dateFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0xe03288(0x231))
        ["find"](_0xe03288(0x25f))
        [_0xe03288(0x21d)](function (_0x1fc8d9) {
          const _0x3e89f2 = _0xe03288;
          (skipTo = undefined),
            $(this)
              [_0x3e89f2(0x1b9)](_0x3e89f2(0x1fc))
              [_0x3e89f2(0x2a4)](_0x3e89f2(0x28e)) !== "" &&
              (skipTo = $(this)
                [_0x3e89f2(0x1b9)](_0x3e89f2(0x1fc))
                [_0x3e89f2(0x2a4)](_0x3e89f2(0x28e))),
            $(this)[_0x3e89f2(0x1b9)](_0x3e89f2(0x1bb))["attr"]("data-go-to") &&
              ((answer = $(this)
                ["parents"](_0x3e89f2(0x1bb))
                [_0x3e89f2(0x1ab)](_0x3e89f2(0x23b))),
              (selections = selections["filter"](
                (_0xcf4a15) => _0xcf4a15["step"] !== x,
              )),
              selections[_0x3e89f2(0x28f)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x3e89f2(0x28f)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x3e89f2(0x1ce)](
                  (_0x43c277) => _0x43c277["step"] === x,
                )),
                (selections[objIndex][_0x3e89f2(0x227)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0xe03288(0x1bf)](".active-answer-card")
        [_0xe03288(0x1bf)](_0xe03288(0x26c))
        [_0xe03288(0x21d)](function (_0x2502e0) {
          const _0x408638 = _0xe03288;
          let _0x622adc = $(this)["val"]()[_0x408638(0x218)],
            _0x563cbe = $(this)["data"]("min-character")
              ? $(this)[_0x408638(0x2a4)]("min-character")
              : 0x0;
          $(this)[_0x408638(0x240)]() !== "" && _0x622adc >= _0x563cbe
            ? (empReqNum = empReqNum["filter"](
                (_0x133e9d) => _0x133e9d[_0x408638(0x29b)] !== _0x2502e0,
              ))
            : (!empReqNum["find"](
                (_0x454bac) => _0x454bac[_0x408638(0x29b)] === _0x2502e0,
              ) && empReqNum["push"]({ input: _0x2502e0 }),
              unfilledArr[_0x408638(0x28f)]({
                input: $(this)[_0x408638(0x1ab)](_0x408638(0x26a)),
              })),
            empReqNum["length"] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        ["find"](".active-answer-card")
        [_0xe03288(0x1bf)](_0xe03288(0x278))
        [_0xe03288(0x21d)](function (_0x2fbfde) {
          const _0x5d45b9 = _0xe03288;
          (skipTo = undefined),
            $(this)
              ["parents"](_0x5d45b9(0x1fc))
              [_0x5d45b9(0x2a4)](_0x5d45b9(0x28e)) !== "" &&
              (skipTo = $(this)
                [_0x5d45b9(0x1b9)](_0x5d45b9(0x1fc))
                [_0x5d45b9(0x2a4)](_0x5d45b9(0x28e))),
            $(this)
              [_0x5d45b9(0x1b9)](_0x5d45b9(0x1bb))
              [_0x5d45b9(0x1ab)](_0x5d45b9(0x23b)) &&
              ((answer = $(this)
                [_0x5d45b9(0x1b9)]("[data-go-to]")
                [_0x5d45b9(0x1ab)](_0x5d45b9(0x23b))),
              (selections = selections[_0x5d45b9(0x236)](
                (_0x1be7f7) => _0x1be7f7[_0x5d45b9(0x202)] !== x,
              )),
              selections[_0x5d45b9(0x28f)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x5d45b9(0x28f)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x5d45b9(0x1ce)](
                  (_0x173396) => _0x173396[_0x5d45b9(0x202)] === x,
                )),
                (selections[objIndex][_0x5d45b9(0x227)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x5d45b9(0x27a)] = x)));
        }),
      $(steps[x])
        [_0xe03288(0x1bf)](_0xe03288(0x231))
        ["find"](_0xe03288(0x1c3))
        [_0xe03288(0x21d)](function (_0x16369c) {
          const _0x590719 = _0xe03288;
          if ($(this)[_0x590719(0x240)]() !== "") {
            let _0x3eb8c6 = $(this)[_0x590719(0x240)]()["length"],
              _0x297305 = $(this)[_0x590719(0x2a4)](_0x590719(0x22d))
                ? $(this)[_0x590719(0x2a4)]("min-character")
                : 0x0;
            if ($(this)["data"](_0x590719(0x1e8))) {
              var _0x15c229 = phoneAutoFormat(
                $(this)["data"](_0x590719(0x1e8)),
              );
              $(this)["val"](_0x15c229($(this)["val"]()));
            }
            phoneValidation($(this)[_0x590719(0x240)](), _0x3eb8c6, _0x297305)
              ? (empReqTel = empReqTel[_0x590719(0x236)](
                  (_0xf83bbd) => _0xf83bbd["input"] !== _0x16369c,
                ))
              : empReqTel[_0x590719(0x28f)]({ input: _0x16369c });
          } else
            !empReqTel[_0x590719(0x1bf)](
              (_0x1128e1) => _0x1128e1[_0x590719(0x29b)] === _0x16369c,
            ) && empReqTel[_0x590719(0x28f)]({ input: _0x16369c }),
              unfilledArr["push"]({ input: $(this)[_0x590719(0x1ab)]("name") });
          empReqTel[_0x590719(0x218)] === 0x0
            ? (telFilled = !![])
            : (telFilled = ![]);
        }),
      $(steps[x])
        [_0xe03288(0x1bf)](_0xe03288(0x231))
        [_0xe03288(0x1bf)](":input[type=\x22tel\x22]")
        ["each"](function (_0x413657) {
          const _0x208ab8 = _0xe03288;
          (skipTo = undefined),
            $(this)
              [_0x208ab8(0x1b9)]("[data-skip-to]")
              [_0x208ab8(0x2a4)](_0x208ab8(0x28e)) !== "" &&
              (skipTo = $(this)
                [_0x208ab8(0x1b9)](_0x208ab8(0x1fc))
                [_0x208ab8(0x2a4)](_0x208ab8(0x28e))),
            $(this)[_0x208ab8(0x1b9)](_0x208ab8(0x1bb))["attr"]("data-go-to") &&
              ((answer = $(this)
                ["parents"](_0x208ab8(0x1bb))
                [_0x208ab8(0x1ab)]("data-go-to")),
              (selections = selections[_0x208ab8(0x236)](
                (_0x1cfcfb) => _0x1cfcfb[_0x208ab8(0x202)] !== x,
              )),
              selections[_0x208ab8(0x28f)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x208ab8(0x28f)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x208ab8(0x1ce)](
                  (_0x28ddc6) => _0x28ddc6["step"] === x,
                )),
                (selections[objIndex][_0x208ab8(0x227)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x208ab8(0x27a)] = x)));
        }),
      $(steps[x])
        [_0xe03288(0x1bf)](".active-answer-card")
        [_0xe03288(0x1bf)](_0xe03288(0x2af))
        [_0xe03288(0x21d)](function (_0xb7d086) {
          const _0x423232 = _0xe03288;
          $(this)[_0x423232(0x240)]() !== ""
            ? (empReqFile = empReqFile["filter"](
                (_0x2a4a5f) => _0x2a4a5f[_0x423232(0x29b)] !== _0xb7d086,
              ))
            : (!empReqFile[_0x423232(0x1bf)](
                (_0x1c6719) => _0x1c6719[_0x423232(0x29b)] === _0xb7d086,
              ) && empReqFile[_0x423232(0x28f)]({ input: _0xb7d086 }),
              unfilledArr[_0x423232(0x28f)]({
                input: $(this)[_0x423232(0x1ab)](_0x423232(0x26a)),
              })),
            empReqFile["length"] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0xe03288(0x1bf)](_0xe03288(0x231))
        [_0xe03288(0x1bf)](_0xe03288(0x2ab))
        [_0xe03288(0x21d)](function (_0x3b3c12) {
          const _0x22470d = _0xe03288;
          (skipTo = undefined),
            $(this)
              [_0x22470d(0x1b9)](_0x22470d(0x1fc))
              [_0x22470d(0x2a4)](_0x22470d(0x28e)) !== "" &&
              (skipTo = $(this)
                [_0x22470d(0x1b9)]("[data-skip-to]")
                [_0x22470d(0x2a4)](_0x22470d(0x28e))),
            $(this)
              [_0x22470d(0x1b9)](_0x22470d(0x1bb))
              ["attr"](_0x22470d(0x23b)) &&
              ((answer = $(this)
                [_0x22470d(0x1b9)](_0x22470d(0x1bb))
                [_0x22470d(0x1ab)]("data-go-to")),
              (selections = selections[_0x22470d(0x236)](
                (_0x38d213) => _0x38d213[_0x22470d(0x202)] !== x,
              )),
              selections[_0x22470d(0x28f)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x22470d(0x28f)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x22470d(0x1ce)](
                  (_0x3a7380) => _0x3a7380["step"] === x,
                )),
                (selections[objIndex][_0x22470d(0x227)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x22470d(0x27a)] = x)));
        }),
      $(steps[x])
        [_0xe03288(0x1bf)](".active-answer-card")
        [_0xe03288(0x1bf)](_0xe03288(0x297))
        [_0xe03288(0x21d)](function (_0x574e5e) {
          const _0x643552 = _0xe03288;
          console[_0x643552(0x1be)]($(this)[_0x643552(0x240)]()),
            $(this)[_0x643552(0x240)]() !== null &&
            $(this)[_0x643552(0x240)]() !== ""
              ? (empReqSelect = empReqSelect["filter"](
                  (_0x3a1324) => _0x3a1324[_0x643552(0x29b)] !== _0x574e5e,
                ))
              : (!empReqSelect[_0x643552(0x1bf)](
                  (_0x5f082e) => _0x5f082e["input"] === _0x574e5e,
                ) && empReqSelect[_0x643552(0x28f)]({ input: _0x574e5e }),
                unfilledArr[_0x643552(0x28f)]({
                  input: $(this)[_0x643552(0x1ab)](_0x643552(0x26a)),
                })),
            empReqSelect[_0x643552(0x218)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0xe03288(0x1bf)](".active-answer-card")
        [_0xe03288(0x1bf)](_0xe03288(0x1da))
        [_0xe03288(0x21d)](function (_0x2bfce0) {
          const _0x51e1f3 = _0xe03288;
          (skipTo = undefined),
            $(this)
              ["parents"]("[data-skip-to]")
              [_0x51e1f3(0x2a4)](_0x51e1f3(0x28e)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0x51e1f3(0x1fc))
                [_0x51e1f3(0x2a4)]("skip-to")),
            $(this)
              [_0x51e1f3(0x1b9)](_0x51e1f3(0x1bb))
              [_0x51e1f3(0x1ab)](_0x51e1f3(0x23b)) &&
              ((answer = $(this)
                [_0x51e1f3(0x1b9)]("[data-go-to]")
                [_0x51e1f3(0x1ab)](_0x51e1f3(0x23b))),
              (selections = selections["filter"](
                (_0x1819d9) => _0x1819d9["step"] !== x,
              )),
              selections[_0x51e1f3(0x28f)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x51e1f3(0x28f)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x187951) => _0x187951[_0x51e1f3(0x202)] === x,
                )),
                (selections[objIndex][_0x51e1f3(0x227)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x51e1f3(0x27a)] = x)));
        }),
      $(steps[x])
        [_0xe03288(0x1bf)](_0xe03288(0x231))
        [_0xe03288(0x1bf)](_0xe03288(0x2b1))
        [_0xe03288(0x21d)](function (_0x3339f) {
          const _0x4e6662 = _0xe03288;
          let _0xad0bed = $(this)[_0x4e6662(0x240)]()[_0x4e6662(0x218)],
            _0x37e70f = $(this)[_0x4e6662(0x2a4)]("min-character")
              ? $(this)[_0x4e6662(0x2a4)](_0x4e6662(0x22d))
              : 0x0;
          $(this)["val"]() !== "" && _0xad0bed >= _0x37e70f
            ? (empReqTextarea = empReqTextarea["filter"](
                (_0x5edda5) => _0x5edda5[_0x4e6662(0x29b)] !== _0x3339f,
              ))
            : (!empReqTextarea[_0x4e6662(0x1bf)](
                (_0x595cd0) => _0x595cd0[_0x4e6662(0x29b)] === _0x3339f,
              ) && empReqTextarea[_0x4e6662(0x28f)]({ input: _0x3339f }),
              unfilledArr[_0x4e6662(0x28f)]({
                input: $(this)["attr"](_0x4e6662(0x26a)),
              })),
            empReqTextarea["length"] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        ["find"](".active-answer-card")
        [_0xe03288(0x1bf)](_0xe03288(0x2aa))
        ["each"](function (_0x107eff) {
          const _0x336abb = _0xe03288;
          (skipTo = undefined),
            $(this)
              ["parents"](_0x336abb(0x1fc))
              [_0x336abb(0x2a4)](_0x336abb(0x28e)) !== "" &&
              (skipTo = $(this)
                [_0x336abb(0x1b9)]("[data-skip-to]")
                [_0x336abb(0x2a4)](_0x336abb(0x28e))),
            $(this)
              [_0x336abb(0x1b9)](_0x336abb(0x1bb))
              ["attr"](_0x336abb(0x23b)) &&
              ((answer = $(this)
                [_0x336abb(0x1b9)](_0x336abb(0x1bb))
                [_0x336abb(0x1ab)](_0x336abb(0x23b))),
              (selections = selections[_0x336abb(0x236)](
                (_0x43ee29) => _0x43ee29[_0x336abb(0x202)] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0x336abb(0x1ce)](
                  (_0x183142) => _0x183142["step"] === x,
                )),
                (selections[objIndex][_0x336abb(0x227)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x336abb(0x27a)] = x)));
        }),
      $(steps[x])
        [_0xe03288(0x1bf)](_0xe03288(0x231))
        ["find"](":input[type=\x22email\x22][required]")
        [_0xe03288(0x21d)](function (_0x274938) {
          const _0x15cd29 = _0xe03288;
          $(this)[_0x15cd29(0x240)]() !== ""
            ? validateEmail(
                $(this)[_0x15cd29(0x240)](),
                $(this)[_0x15cd29(0x2a4)](_0x15cd29(0x294)),
                $(this)[_0x15cd29(0x1ab)]("name"),
              )
            : ((emailFilled = ![]),
              unfilledArr["push"]({
                input: $(this)[_0x15cd29(0x1ab)](_0x15cd29(0x26a)),
              }));
        }),
      $(steps[x])
        [_0xe03288(0x1bf)](_0xe03288(0x231))
        ["find"](_0xe03288(0x2b5))
        ["each"](function (_0x526c97) {
          const _0x1b33ca = _0xe03288;
          (skipTo = undefined),
            $(this)
              [_0x1b33ca(0x1b9)]("[data-skip-to]")
              [_0x1b33ca(0x2a4)]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0x1b33ca(0x1b9)](_0x1b33ca(0x1fc))
                [_0x1b33ca(0x2a4)](_0x1b33ca(0x28e))),
            $(this)[_0x1b33ca(0x1b9)](_0x1b33ca(0x1bb))["attr"]("data-go-to") &&
              ((answer = $(this)
                ["parents"](_0x1b33ca(0x1bb))
                [_0x1b33ca(0x1ab)](_0x1b33ca(0x23b))),
              (selections = selections[_0x1b33ca(0x236)](
                (_0x48e0f8) => _0x48e0f8[_0x1b33ca(0x202)] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x1b33ca(0x28f)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x1b33ca(0x1ce)](
                  (_0x51f20a) => _0x51f20a[_0x1b33ca(0x202)] === x,
                )),
                (selections[objIndex][_0x1b33ca(0x227)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        });
  }
  $(steps[x])
    [_0xe03288(0x1bf)](_0xe03288(0x231))
    [_0xe03288(0x1bf)](":input[type=\x22radio\x22]")
    ["is"](_0xe03288(0x252)) &&
    ((selArr = []),
    $(steps)
      ["find"](_0xe03288(0x1c1))
      [_0xe03288(0x21d)](function (_0x5a254b, _0x96dd06) {
        const _0x3fd580 = _0xe03288;
        selArr[_0x3fd580(0x28f)]({ selected: $(this)["data"]("selected") });
      }),
    (selString = []),
    selArr[_0xe03288(0x263)]((_0x4a0ba5) =>
      selString[_0xe03288(0x28f)](_0x4a0ba5[_0xe03288(0x22c)]),
    ),
    (selections = selections["filter"](
      (_0x3a9214) => _0x3a9214[_0xe03288(0x202)] !== x,
    )),
    $(steps[x])
      ["find"](_0xe03288(0x231))
      [_0xe03288(0x1bf)](":input[type=\x27radio\x27]:checked")
      [_0xe03288(0x21d)](function () {
        const _0x3455a9 = _0xe03288;
        skipTo = undefined;
        if (
          $(this)
            [_0x3455a9(0x1b9)](_0x3455a9(0x1fc))
            [_0x3455a9(0x2a4)](_0x3455a9(0x28e))
        )
          skipTo = $(this)
            [_0x3455a9(0x1b9)](_0x3455a9(0x1fc))
            [_0x3455a9(0x2a4)](_0x3455a9(0x28e));
        else
          $(this)[_0x3455a9(0x2a4)](_0x3455a9(0x28e)) &&
            (skipTo = $(this)["data"]("skip-to"));
        if ($(this)[_0x3455a9(0x2a4)]("go-to"))
          (answer = $(this)[_0x3455a9(0x1ab)](_0x3455a9(0x23b))),
            console[_0x3455a9(0x1be)](answer, selections),
            selections[_0x3455a9(0x28f)]({ step: x, selected: answer }),
            skipTo &&
              (selections["push"]({ step: skipTo - 0x2, selected: answer }),
              (objIndex = selections["findIndex"](
                (_0x540336) => _0x540336[_0x3455a9(0x202)] === x,
              )),
              (selections[objIndex][_0x3455a9(0x227)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x3455a9(0x27a)] = x));
        else
          $(this)
            [_0x3455a9(0x1b9)](_0x3455a9(0x1bb))
            ["data"](_0x3455a9(0x1db)) &&
            ((answer = $(this)
              [_0x3455a9(0x1b9)](_0x3455a9(0x1bb))
              [_0x3455a9(0x2a4)]("go-to")),
            selections["push"]({ step: x, selected: answer }),
            skipTo &&
              (selections["push"]({ step: skipTo - 0x2, selected: answer }),
              (objIndex = selections["findIndex"](
                (_0x5a876e) => _0x5a876e[_0x3455a9(0x202)] === x,
              )),
              (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x3455a9(0x27a)] = x)));
      }),
    logicExtra
      ? ($(steps[x])
          [_0xe03288(0x1bf)](".active-answer-card")
          [_0xe03288(0x1bf)](_0xe03288(0x21a))
          [_0xe03288(0x2a4)](_0xe03288(0x1e0)) === !![] ||
          $(steps[x])["find"](_0xe03288(0x2b0))["data"](_0xe03288(0x1e0)) ===
            !![]) &&
        skip &&
        selections[_0xe03288(0x236)]((_0x8349da) => _0x8349da["step"] === x)[
          _0xe03288(0x218)
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
            ["find"](_0xe03288(0x29f))
            [_0xe03288(0x2a4)]("radio-delay"),
        )
      : $(steps[x])["find"](_0xe03288(0x21a))["data"](_0xe03288(0x1e0)) ===
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
            [_0xe03288(0x1bf)]("[data-radio-delay]")
            [_0xe03288(0x2a4)](_0xe03288(0x29c)),
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
    cloneRemoveInput(),
    console[_0xe03288(0x1be)](selections);
}
function displayErrorMessage() {
  const _0x7e520b = _0x1169c3;
  $("[data-text=\x22error-message\x22]")[_0x7e520b(0x295)](),
    unfilledArr[_0x7e520b(0x218)] > 0x0 &&
      unfilledArr[_0x7e520b(0x263)](function (_0x1104a4) {
        const _0x54fbb1 = _0x7e520b;
        $(_0x54fbb1(0x24d) + _0x1104a4[_0x54fbb1(0x29b)] + "\x22]")
          ["siblings"](_0x54fbb1(0x1cf))
          [_0x54fbb1(0x250)](),
          $("input[name=\x22" + _0x1104a4[_0x54fbb1(0x29b)] + "\x22]")
            [_0x54fbb1(0x1b9)]()
            [_0x54fbb1(0x1a9)](_0x54fbb1(0x1cf))
            ["fadeIn"](),
          $(_0x54fbb1(0x1f8) + _0x1104a4[_0x54fbb1(0x29b)] + "\x22]")
            ["siblings"](_0x54fbb1(0x1cf))
            ["fadeIn"](),
          $(_0x54fbb1(0x2a9) + _0x1104a4[_0x54fbb1(0x29b)] + "\x22]")
            [_0x54fbb1(0x251)](_0x54fbb1(0x1cf))
            [_0x54fbb1(0x250)]();
      });
}
function resetInputErrorMessage(_0x3c0465) {
  const _0x55360c = _0x1169c3;
  $(_0x55360c(0x24d) + _0x3c0465 + "\x22]")
    ["siblings"](_0x55360c(0x1cf))
    ["hide"](),
    $(_0x55360c(0x24d) + _0x3c0465 + "\x22]")
      [_0x55360c(0x1b9)]()
      ["children"](_0x55360c(0x1cf))
      ["hide"](),
    $(_0x55360c(0x1f8) + _0x3c0465 + "\x22]")
      [_0x55360c(0x251)](_0x55360c(0x1cf))
      [_0x55360c(0x295)](),
    $(_0x55360c(0x2a9) + _0x3c0465 + "\x22]")
      ["siblings"]("[data-text=\x22error-message\x22]")
      ["hide"]();
}
function increaseCurstep() {
  const _0x2b8280 = _0x1169c3;
  countCard
    ? ((curStep = curStep + 0x1),
      $("[data-text=\x22total-steps\x22]")[_0x2b8280(0x2a0)](steps["length"]))
    : $(steps[x])[_0x2b8280(0x2a4)](_0x2b8280(0x1a4))
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    $(_0x2b8280(0x271))["text"](curStep);
}
function decreaseCurstep() {
  const _0x4e4384 = _0x1169c3;
  countCard
    ? ((curStep = curStep - 0x1),
      $(_0x4e4384(0x223))[_0x4e4384(0x2a0)](steps["length"]))
    : $(steps[x])["data"](_0x4e4384(0x1a4))
      ? (curStep = curStep - 0x0)
      : (curStep = curStep - 0x1),
    $("[data-text=\x22current-step\x22]")["text"](curStep);
}
$(_0x1169c3(0x1fb))["on"](_0x1169c3(0x1b1), function (_0x3d1383) {
  const _0x17e5d0 = _0x1169c3;
  console[_0x17e5d0(0x1be)](_0x17e5d0(0x20c)),
    $(this)[_0x17e5d0(0x2a4)](_0x17e5d0(0x209)) &&
      (redirectTo = $(this)[_0x17e5d0(0x2a4)]("redirect")),
    !$(this)[_0x17e5d0(0x2a4)](_0x17e5d0(0x21e)) &&
      (newTab = $(this)[_0x17e5d0(0x2a4)](_0x17e5d0(0x21e))),
    (successCard = $(this)["data"](_0x17e5d0(0x1ca))),
    _0x3d1383[_0x17e5d0(0x239)](),
    _0x3d1383[_0x17e5d0(0x1a2)](),
    logicExtra &&
      ($(this)["prop"](_0x17e5d0(0x1b3), !![]),
      $(steps)
        [_0x17e5d0(0x1bf)](_0x17e5d0(0x23a))
        ["prop"](_0x17e5d0(0x2b8), ![])),
    localStorage["removeItem"](_0x17e5d0(0x1c8)),
    fill
      ? ($(this)[_0x17e5d0(0x2a4)](_0x17e5d0(0x27f))
          ? $(this)[_0x17e5d0(0x240)](
              $(this)[_0x17e5d0(0x2a4)](_0x17e5d0(0x27f)),
            )
          : ($(this)[_0x17e5d0(0x240)]("Please\x20wait..."),
            $(this)[_0x17e5d0(0x2a0)]("Please\x20wait...")),
        $(_0x17e5d0(0x2a7))[_0x17e5d0(0x1ee)](),
        $(_0x17e5d0(0x20e))[_0x17e5d0(0x218)] > 0x0 &&
          grecaptcha["getResponse"]()["length"] === 0x0 &&
          (form[_0x17e5d0(0x1bf)]("[data-form=\x22submit-btn\x22]")[
            _0x17e5d0(0x2a0)
          ](oldSubmitText),
          form["find"](_0x17e5d0(0x1fb))[_0x17e5d0(0x240)](oldSubmitText)),
        customError &&
          $("[data-text=\x22error-message\x22]")[_0x17e5d0(0x295)]())
      : customError && displayErrorMessage();
});
function nextStep() {
  const _0x35389a = _0x1169c3;
  customError
    ? ($("[data-text=\x22error-message\x22]")[_0x35389a(0x295)](),
      fill
        ? (x++,
          increaseCurstep(),
          (progress = x),
          x <= steps[_0x35389a(0x218)] - 0x1 &&
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
  const _0x1b94e1 = _0x1169c3;
  customError && $(_0x1b94e1(0x1cf))[_0x1b94e1(0x295)](),
    decreaseCurstep(),
    x > 0x0 &&
      ($(progressbar[x])[_0x1b94e1(0x211)]("current"),
      selections[_0x1b94e1(0x236)](
        (_0xb0edfd) => _0xb0edfd[_0x1b94e1(0x227)] === x,
      )["length"] > 0x0
        ? (x = parseInt(
            getSafe(
              () =>
                selections[_0x1b94e1(0x236)](
                  (_0x49dd70) => _0x49dd70["skipTo"] === x,
                )[0x0][_0x1b94e1(0x27a)],
            ),
          ))
        : x--,
      updateStep()),
    ($(steps[x])
      [_0x1b94e1(0x1bf)](_0x1b94e1(0x21a))
      [_0x1b94e1(0x2a4)](_0x1b94e1(0x1e0)) === !![] ||
      $(steps[x])
        [_0x1b94e1(0x1bf)](_0x1b94e1(0x231))
        [_0x1b94e1(0x1bf)](_0x1b94e1(0x21a))
        [_0x1b94e1(0x2a4)](_0x1b94e1(0x1e0)) === !![] ||
      $(steps[x])[_0x1b94e1(0x1bf)](_0x1b94e1(0x2b0))["data"]("radio-skip") ===
        !![]) &&
      ((all_data = all_data["filter"](
        (_0x19c45c) =>
          _0x19c45c[_0x1b94e1(0x1e1)] !==
          $(steps[x])
            [_0x1b94e1(0x1bf)](_0x1b94e1(0x1d2))
            ["attr"](_0x1b94e1(0x26a)),
      )),
      $(
        _0x1b94e1(0x20a) +
          $(steps[x])
            [_0x1b94e1(0x1bf)](_0x1b94e1(0x1d2))
            [_0x1b94e1(0x1ab)]("name") +
          "\x22]",
      )[_0x1b94e1(0x295)](),
      $(steps[x])
        ["find"](_0x1b94e1(0x23e))
        [_0x1b94e1(0x22a)](_0x1b94e1(0x1a1), ![]),
      $(steps[x])
        [_0x1b94e1(0x1bf)](_0x1b94e1(0x21b))
        ["removeClass"](_0x1b94e1(0x296)),
      validation());
}
weightedSelectionRange &&
  $(_0x1169c3(0x228))["each"](function () {
    const _0x16d806 = _0x1169c3;
    $(this)["append"](
      _0x16d806(0x215) +
        $(this)[_0x16d806(0x2a4)]("selection") +
        _0x16d806(0x204),
    );
  });
function selectionQuiz() {
  const _0x5d8dc0 = _0x1169c3;
  if ($(this)["find"](_0x5d8dc0(0x1f3))) {
    $(_0x5d8dc0(0x228))["hide"](),
      $("[data-selection-weight]")[_0x5d8dc0(0x295)]();
    if (weightedSelection) {
      (selTotal = 0x0),
        selArr[_0x5d8dc0(0x263)](function (_0x101b8f) {
          const _0x1dfdec = _0x5d8dc0;
          selTotal = selTotal + _0x101b8f[_0x1dfdec(0x22c)];
        }),
        $(_0x5d8dc0(0x275))["text"](selTotal);
      if ($(_0x5d8dc0(0x1bc) + selTotal + "\x22]")[_0x5d8dc0(0x218)] > 0x0)
        $(_0x5d8dc0(0x1bc) + selTotal + "\x22]")[_0x5d8dc0(0x250)]();
      else
        $(_0x5d8dc0(0x220) + selTotal + ")")
          ? $("[data-range]:contains(" + selTotal + ")")
              [_0x5d8dc0(0x298)]("[data-selection]")
              ["eq"](0x0)
              ["show"]()
          : $(_0x5d8dc0(0x1e7))["fadeIn"]();
    } else {
      let _0x3a66c9 = -0x1;
      $(_0x5d8dc0(0x228))[_0x5d8dc0(0x21d)](function (_0x16f8e2) {
        const _0x279384 = _0x5d8dc0;
        $($("[data-selection]")[_0x16f8e2])
          [_0x279384(0x2a4)](_0x279384(0x1d9))
          ["includes"](selString["join"]()) && (_0x3a66c9 = _0x16f8e2);
      }),
        _0x3a66c9 > -0x1
          ? $($(_0x5d8dc0(0x228))[_0x3a66c9])[_0x5d8dc0(0x250)]()
          : $(_0x5d8dc0(0x1e7))[_0x5d8dc0(0x250)]();
    }
  }
}
function triggerInputAllData() {
  const _0x3e3b7f = _0x1169c3;
  if (savedFilledInput && memory)
    savedFilledInput["forEach"]((_0x2e89cb) => {
      const _0x5237fb = _0x5e9f;
      var _0x1d6c94 = $(
          "input[name=\x22" +
            _0x2e89cb[_0x5237fb(0x213)] +
            _0x5237fb(0x222) +
            _0x2e89cb[_0x5237fb(0x276)] +
            "\x22]",
        ),
        _0x2ef34f = $(_0x5237fb(0x24d) + _0x2e89cb[_0x5237fb(0x213)] + "\x22]");
      console[_0x5237fb(0x1be)](
        _0x1d6c94[_0x5237fb(0x1b9)](_0x5237fb(0x1e4))[_0x5237fb(0x2a4)](
          _0x5237fb(0x1e0),
        ),
      );
      if (_0x1d6c94["attr"]("type") !== _0x5237fb(0x1e3)) {
        if (
          _0x1d6c94[_0x5237fb(0x1ab)](_0x5237fb(0x1f5)) === _0x5237fb(0x26d) &&
          !_0x1d6c94[_0x5237fb(0x1b9)]("[data-radio-skip]")[_0x5237fb(0x2a4)](
            _0x5237fb(0x1e0),
          )
        )
          _0x1d6c94[_0x5237fb(0x1b1)](),
            _0x1d6c94[_0x5237fb(0x251)](_0x5237fb(0x2a6))[_0x5237fb(0x262)](
              _0x5237fb(0x296),
            ),
            _0x1d6c94["trigger"]("input");
        else
          _0x2e89cb[_0x5237fb(0x276)] === "on"
            ? (_0x2ef34f[_0x5237fb(0x1b1)](),
              _0x2ef34f[_0x5237fb(0x251)](_0x5237fb(0x2b7))[_0x5237fb(0x262)](
                _0x5237fb(0x296),
              ),
              _0x2ef34f[_0x5237fb(0x27b)](_0x5237fb(0x29b)))
            : (console[_0x5237fb(0x1be)](
                _0x2e89cb[_0x5237fb(0x213)],
                _0x2e89cb[_0x5237fb(0x276)],
              ),
              _0x2ef34f[_0x5237fb(0x240)](_0x2e89cb[_0x5237fb(0x276)]),
              _0x2ef34f[_0x5237fb(0x240)](_0x2e89cb[_0x5237fb(0x276)]),
              $(_0x5237fb(0x1b2) + _0x2e89cb[_0x5237fb(0x276)] + "\x22]")[
                _0x5237fb(0x22a)
              ]("selected", !![]),
              _0x2ef34f[_0x5237fb(0x27b)](_0x5237fb(0x29b)),
              _0x2ef34f[_0x5237fb(0x27b)](_0x5237fb(0x28d)));
      }
    });
  else
    _params &&
      (getParams(),
      searchQ[_0x3e3b7f(0x263)]((_0x3f1d59) => {
        const _0x57cc7e = _0x3e3b7f;
        if (
          $(
            _0x57cc7e(0x24d) +
              _0x3f1d59[_0x57cc7e(0x213)] +
              _0x57cc7e(0x222) +
              _0x3f1d59[_0x57cc7e(0x276)] +
              "\x22]",
          )["attr"](_0x57cc7e(0x1f5)) !== _0x57cc7e(0x1e3)
        ) {
          if (
            $(
              _0x57cc7e(0x24d) +
                _0x3f1d59[_0x57cc7e(0x233)] +
                "\x22][value=\x22" +
                _0x3f1d59[_0x57cc7e(0x240)] +
                "\x22]",
            )[_0x57cc7e(0x1ab)](_0x57cc7e(0x1f5)) === _0x57cc7e(0x26d)
          )
            $(
              _0x57cc7e(0x24d) +
                _0x3f1d59[_0x57cc7e(0x233)] +
                _0x57cc7e(0x222) +
                _0x3f1d59[_0x57cc7e(0x240)] +
                "\x22]",
            )[_0x57cc7e(0x1b1)](),
              $(
                _0x57cc7e(0x24d) +
                  _0x3f1d59[_0x57cc7e(0x233)] +
                  _0x57cc7e(0x222) +
                  _0x3f1d59["val"] +
                  "\x22]",
              )
                [_0x57cc7e(0x251)](_0x57cc7e(0x2a6))
                [_0x57cc7e(0x262)](_0x57cc7e(0x296)),
              $(
                "input[name=\x22" +
                  _0x3f1d59[_0x57cc7e(0x233)] +
                  "\x22][value=\x22" +
                  _0x3f1d59["val"] +
                  "\x22]",
              )[_0x57cc7e(0x27b)](_0x57cc7e(0x29b));
          else
            _0x3f1d59[_0x57cc7e(0x240)] === "on"
              ? ($(_0x57cc7e(0x24d) + _0x3f1d59[_0x57cc7e(0x233)] + "\x22]")[
                  _0x57cc7e(0x1b1)
                ](),
                $(_0x57cc7e(0x24d) + _0x3f1d59[_0x57cc7e(0x233)] + "\x22]")
                  ["siblings"](_0x57cc7e(0x2b7))
                  ["addClass"](_0x57cc7e(0x296)),
                $(_0x57cc7e(0x24d) + _0x3f1d59[_0x57cc7e(0x233)] + "\x22]")[
                  "trigger"
                ](_0x57cc7e(0x29b)))
              : ($(_0x57cc7e(0x24d) + _0x3f1d59[_0x57cc7e(0x233)] + "\x22]")[
                  "val"
                ](_0x3f1d59[_0x57cc7e(0x240)]),
                $("textarea[name=\x22" + _0x3f1d59[_0x57cc7e(0x233)] + "\x22]")[
                  _0x57cc7e(0x240)
                ](_0x3f1d59["val"]),
                $(_0x57cc7e(0x2a9) + _0x3f1d59[_0x57cc7e(0x233)] + "\x22]")
                  [_0x57cc7e(0x1bf)](
                    "option[value=\x22" + _0x3f1d59["val"] + "\x22]",
                  )
                  ["prop"](_0x57cc7e(0x22c), !![]),
                $(_0x57cc7e(0x24d) + _0x3f1d59[_0x57cc7e(0x233)] + "\x22]")[
                  _0x57cc7e(0x27b)
                ](_0x57cc7e(0x29b)),
                $(_0x57cc7e(0x24d) + _0x3f1d59["key"] + "\x22]")["trigger"](
                  _0x57cc7e(0x28d),
                ));
        }
      }));
}
$(_0x1169c3(0x245))["on"](_0x1169c3(0x1b1), function () {
  (next = !![]), nextStep(), selectionQuiz();
}),
  $("[data-form=\x22back-btn\x22]")["on"](_0x1169c3(0x1b1), function () {
    (next = ![]), (back = !![]), backStep();
  }),
  $(steps)
    [_0x1169c3(0x1bf)](":input")
    [_0x1169c3(0x268)]("[type=\x22radio\x22]")
    ["on"](_0x1169c3(0x29b), function (_0x4e5b06) {
      validation(), andLogic();
    }),
  $(steps)
    [_0x1169c3(0x1bf)](_0x1169c3(0x23e))
    ["on"](_0x1169c3(0x1b1), function () {
      (skip = !![]), validation();
    });
$("[data-clickable-all]")["data"]("clickable-all")
  ? $("[data-form=\x22custom-progress-indicator\x22]")["removeClass"](
      _0x1169c3(0x2b2),
    )
  : $(_0x1169c3(0x26e))["addClass"](_0x1169c3(0x2b2));
function clickableIndicator() {
  const _0x483e05 = _0x1169c3;
  $(_0x483e05(0x261))[_0x483e05(0x2a4)]("clickable") &&
    ($("[data-form=\x22progress-indicator\x22]")[_0x483e05(0x211)]("current"),
    $("[data-clickable]")[_0x483e05(0x2a4)](_0x483e05(0x1c5))
      ? ((x = $(this)[_0x483e05(0x2b4)]()), updateStep())
      : $(this)[_0x483e05(0x2b4)]() <= progress &&
        ((x = $(this)[_0x483e05(0x2b4)]()), updateStep())),
    $(_0x483e05(0x271))[_0x483e05(0x2a0)](x + 0x1);
}
$(_0x1169c3(0x26e))["on"](_0x1169c3(0x1b1), clickableIndicator);
$(_0x1169c3(0x2a7))[_0x1169c3(0x2a4)](_0x1169c3(0x27d)) &&
  ($(_0x1169c3(0x1bb))[_0x1169c3(0x21d)](function () {
    const _0x3c24c6 = _0x1169c3;
    $(this)["append"](
      _0x3c24c6(0x1f6),
      $(this)[_0x3c24c6(0x2a4)](_0x3c24c6(0x1db)),
    );
  }),
  $("[data-answer]")[_0x1169c3(0x21d)](function () {
    const _0x175d8f = _0x1169c3;
    $(this)[_0x175d8f(0x1b8)](
      _0x175d8f(0x26b),
      $(this)[_0x175d8f(0x2a4)](_0x175d8f(0x2a1)),
    );
  }));
function resetFormly() {
  const _0x32c60b = _0x1169c3;
  $(_0x32c60b(0x2a7))[_0x32c60b(0x27b)](_0x32c60b(0x290)),
    $(_0x32c60b(0x2a7))
      [_0x32c60b(0x1b9)]()
      [_0x32c60b(0x1bf)](_0x32c60b(0x226))
      [_0x32c60b(0x295)](),
    (x = 0x0),
    updateStep(),
    $(_0x32c60b(0x2a7))["show"](),
    $(_0x32c60b(0x1fb))[_0x32c60b(0x2a0)](oldSubmitText),
    $(_0x32c60b(0x1fb))[_0x32c60b(0x240)](oldSubmitText),
    $(_0x32c60b(0x271))[_0x32c60b(0x2a0)](0x1),
    $("[data-form=\x22multistep\x22]")
      [_0x32c60b(0x1bf)](_0x32c60b(0x206))
      ["siblings"](".w-checkbox-input")
      [_0x32c60b(0x211)](_0x32c60b(0x296));
}
$(document)["ajaxComplete"](function (_0x3d5178, _0x11350e, _0x1f76a5) {
  const _0x15accf = _0x1169c3;
  if (
    _0x1f76a5[_0x15accf(0x283)]["includes"]("https://webflow.com/api/v1/form/")
  ) {
    const _0x4bf9a7 = _0x11350e[_0x15accf(0x19e)] === 0xc8,
      _0x4e4e21 = _0x15accf(0x235);
    redirectTo &&
      _0x4bf9a7 &&
      (newTab
        ? window[_0x15accf(0x258)](redirectTo, _0x15accf(0x1d8))
        : setTimeout(() => {
            const _0x3f03fd = _0x15accf;
            location[_0x3f03fd(0x229)] = redirectTo;
          }, redirectDelay)),
      _0x4bf9a7 &&
        successCard !== "" &&
        $(_0x15accf(0x24f) + successCard + "\x22]")[_0x15accf(0x250)](),
      _0x4bf9a7 &&
        formReset &&
        setTimeout(() => {
          resetFormly();
        }, resetDelay),
      !_0x4bf9a7 &&
        ($(_0x15accf(0x1fb))[_0x15accf(0x240)](_0x15accf(0x1b7)),
        $("[data-form=\x22submit-btn\x22]")[_0x15accf(0x2a0)](
          _0x15accf(0x1b7),
        ));
  }
}),
  $("[data-btn=\x22edit\x22]")["on"](_0x1169c3(0x1b1), function () {
    const _0x2834ea = _0x1169c3;
    var _0x50f77c = $(this)
      [_0x2834ea(0x298)]()
      [_0x2834ea(0x1bf)]("[data-input-field]")
      ["data"](_0x2834ea(0x224));
    setTimeout(function () {
      const _0x5c2783 = _0x2834ea;
      $(_0x5c2783(0x24d) + _0x50f77c + "\x22]")[_0x5c2783(0x2a3)]();
    }, 0x64),
      (back = !![]),
      (x = $(this)[_0x2834ea(0x2a4)](_0x2834ea(0x260)) - 0x1),
      updateStep(),
      countCard
        ? ((curStep = x + 0x1),
          $(_0x2834ea(0x223))["text"](steps[_0x2834ea(0x218)]))
        : $(steps[x])[_0x2834ea(0x2a4)](_0x2834ea(0x1a4))
          ? (curStep = x + 0x0)
          : (curStep = x + 0x1),
      $("[data-text=\x22current-step\x22]")["text"](curStep),
      (back = ![]);
  }),
  $("[data-btn=\x22reset\x22]")["on"]("click", function () {
    const _0x244806 = _0x1169c3;
    $("[data-form=\x22multistep\x22]")[_0x244806(0x27b)](_0x244806(0x290));
    let _0x135032 = $(this);
    $(this)["text"](_0x244806(0x1b7)),
      setTimeout(function () {
        const _0x566c6d = _0x244806;
        $(_0x135032)[_0x566c6d(0x2a0)](oldResetText),
          $(_0x135032)["parents"](".w-form-done")[_0x566c6d(0x295)](),
          (x = 0x0),
          updateStep(),
          $(_0x566c6d(0x2a7))[_0x566c6d(0x234)](),
          $(_0x566c6d(0x1fb))[_0x566c6d(0x2a0)](oldSubmitText),
          $("[data-form=\x22submit-btn\x22]")[_0x566c6d(0x240)](oldSubmitText),
          $(_0x135032)[_0x566c6d(0x240)](oldSubmitText),
          $(_0x566c6d(0x271))[_0x566c6d(0x2a0)](0x1),
          $("[data-form=\x22multistep\x22]")
            [_0x566c6d(0x1bf)](_0x566c6d(0x206))
            [_0x566c6d(0x251)](_0x566c6d(0x2b7))
            [_0x566c6d(0x211)](_0x566c6d(0x296));
      }, resetDelay);
  }),
  $(_0x1169c3(0x259))["on"](_0x1169c3(0x1e6), function (_0x34c3e4) {
    const _0x5a732d = _0x1169c3;
    _0x34c3e4[_0x5a732d(0x2a8)] === 0xd &&
      ($(_0x5a732d(0x1a6))[_0x5a732d(0x2a4)](_0x5a732d(0x1a7)) && fill
        ? (totalSteps > curStep && $(_0x5a732d(0x245))[0x0][_0x5a732d(0x1b1)](),
          _0x34c3e4[_0x5a732d(0x239)](),
          _0x34c3e4[_0x5a732d(0x1a2)]())
        : (_0x34c3e4[_0x5a732d(0x239)](), _0x34c3e4[_0x5a732d(0x1a2)]()));
  }),
  $(_0x1169c3(0x259))[_0x1169c3(0x20d)](function (_0x104819) {
    const _0x13cbb5 = _0x1169c3;
    (_0x104819[_0x13cbb5(0x200)] || _0x104819["ctrlKey"]) &&
      _0x104819[_0x13cbb5(0x2a8)] == 0xd &&
      (x >= steps["length"] - 0x1 && fill
        ? $(steps[x])[_0x13cbb5(0x1bf)](_0x13cbb5(0x28c))[_0x13cbb5(0x1b1)]()
        : (event["preventDefault"](), event[_0x13cbb5(0x1a2)]()));
  }),
  $("textarea")[_0x1169c3(0x1e6)](function (_0x5c6b95) {
    const _0x3d0aee = _0x1169c3;
    $(this)["focus"](),
      _0x5c6b95[_0x3d0aee(0x233)] == _0x3d0aee(0x1d5) &&
        (_0x5c6b95[_0x3d0aee(0x239)](), _0x5c6b95["stopPropagation"]()),
      _0x5c6b95["shiftKey"] &&
        _0x5c6b95[_0x3d0aee(0x233)] == "Enter" &&
        $(this)[_0x3d0aee(0x240)]($(this)[_0x3d0aee(0x240)]() + "\x0a");
  }),
  $(_0x1169c3(0x2a7))
    ["find"](_0x1169c3(0x23a))
    ["on"]("change", function () {
      const _0x56c14a = _0x1169c3;
      (all_data = all_data["filter"](
        (_0x393766) => _0x393766[_0x56c14a(0x1e1)] !== $(this)["attr"]("name"),
      )),
        $(this)[_0x56c14a(0x1ab)](_0x56c14a(0x1f5)) === _0x56c14a(0x1b5)
          ? $(this)["is"](_0x56c14a(0x252))
            ? all_data[_0x56c14a(0x28f)]({
                field: $(this)["attr"](_0x56c14a(0x26a)),
                value: $(this)[_0x56c14a(0x251)]("span")["text"](),
              })
            : $(
                _0x56c14a(0x20a) +
                  $(this)[_0x56c14a(0x1ab)](_0x56c14a(0x26a)) +
                  "\x22]",
              )[_0x56c14a(0x295)]()
          : (all_data[_0x56c14a(0x28f)]({
              field: $(this)[_0x56c14a(0x1ab)](_0x56c14a(0x26a)),
              value: $(this)[_0x56c14a(0x240)](),
            }),
            $(this)[_0x56c14a(0x240)]() !== "" &&
              resetInputErrorMessage(
                $(this)[_0x56c14a(0x1ab)](_0x56c14a(0x26a)),
              )),
        all_data[_0x56c14a(0x263)](function (_0x11cfd0) {
          const _0x35c4d3 = _0x56c14a;
          $(_0x35c4d3(0x20a) + _0x11cfd0[_0x35c4d3(0x1e1)] + "\x22]")["show"](),
            $("[data-input-field=\x22" + _0x11cfd0["field"] + "\x22]")[
              _0x35c4d3(0x2a0)
            ](_0x11cfd0[_0x35c4d3(0x276)]);
        });
    }),
  $(_0x1169c3(0x2a7))
    [_0x1169c3(0x1bf)](_0x1169c3(0x2aa))
    ["on"](_0x1169c3(0x28d), function () {
      const _0x5779c2 = _0x1169c3;
      $(this)["val"]() !== "" &&
        resetInputErrorMessage($(this)["attr"](_0x5779c2(0x26a))),
        (all_data = all_data[_0x5779c2(0x236)](
          (_0x138b33) =>
            _0x138b33[_0x5779c2(0x1e1)] !==
            $(this)[_0x5779c2(0x1ab)](_0x5779c2(0x26a)),
        )),
        all_data[_0x5779c2(0x28f)]({
          field: $(this)[_0x5779c2(0x1ab)](_0x5779c2(0x26a)),
          value: $(this)[_0x5779c2(0x240)](),
        }),
        all_data[_0x5779c2(0x263)](function (_0x413a17) {
          const _0x20acea = _0x5779c2;
          $(_0x20acea(0x20a) + _0x413a17[_0x20acea(0x1e1)] + "\x22]")[
            _0x20acea(0x234)
          ](),
            $(_0x20acea(0x20a) + _0x413a17["field"] + "\x22]")[
              _0x20acea(0x2a0)
            ](_0x413a17[_0x20acea(0x276)]);
        });
    }),
  $(_0x1169c3(0x2a7))
    [_0x1169c3(0x1bf)](_0x1169c3(0x1da))
    ["on"]("change", function () {
      const _0x11afda = _0x1169c3;
      $(this)[_0x11afda(0x240)]() !== "" &&
        resetInputErrorMessage($(this)[_0x11afda(0x1ab)]("name"));
      var _0x7d232b = $(this)["data"](_0x11afda(0x1ac));
      (all_data = all_data[_0x11afda(0x236)](
        (_0x1e4eeb) =>
          _0x1e4eeb[_0x11afda(0x1e1)] !==
          $(this)[_0x11afda(0x1ab)](_0x11afda(0x26a)),
      )),
        all_data["push"]({
          field: $(this)[_0x11afda(0x1ab)](_0x11afda(0x26a)),
          value: _0x7d232b
            ? $(this)
                ["find"]("option[value=\x22$(this).val()\x22]")
                [_0x11afda(0x2a0)]()
            : $(this)[_0x11afda(0x240)](),
        }),
        all_data[_0x11afda(0x263)](function (_0x3385d3) {
          const _0x34e6b8 = _0x11afda;
          $(_0x34e6b8(0x20a) + _0x3385d3[_0x34e6b8(0x1e1)] + "\x22]")["show"](),
            $("[data-input-field=\x22" + _0x3385d3["field"] + "\x22]")["text"](
              _0x3385d3[_0x34e6b8(0x276)],
            );
        });
    }),
  updateStep(),
  triggerInputAllData(),
  $(_0x1169c3(0x232))["each"](function () {
    const _0x1a00d3 = _0x1169c3,
      _0x49fcaf = $(this)["find"](_0x1a00d3(0x230)),
      _0x4dd53c = [];
    console[_0x1a00d3(0x1be)](_0x4dd53c),
      _0x49fcaf[_0x1a00d3(0x21d)](function () {
        const _0x28ad99 = _0x1a00d3;
        _0x4dd53c[_0x28ad99(0x28f)](
          $(this)[_0x28ad99(0x2a0)]()[_0x28ad99(0x22f)](),
        );
      });
    const _0x137160 = $(this)[_0x1a00d3(0x251)](_0x1a00d3(0x203));
    $[_0x1a00d3(0x21d)](_0x4dd53c, function (_0x110a8c, _0x26b553) {
      const _0x2adaad = _0x1a00d3,
        _0x531c9c = $(_0x2adaad(0x216))
          [_0x2adaad(0x240)](_0x26b553)
          [_0x2adaad(0x2a0)](_0x26b553);
      _0x137160[_0x2adaad(0x1b8)](_0x531c9c);
    });
  });
function cloneRemove() {
  const _0xf745c4 = _0x1169c3;
  $(_0xf745c4(0x1dd))[_0xf745c4(0x21d)](function () {
    const _0x39aab2 = _0xf745c4;
    $(this)[_0x39aab2(0x1bf)](_0x39aab2(0x1c2))["length"] < 0x2
      ? $(this)["find"](_0x39aab2(0x24a))[_0x39aab2(0x295)]()
      : $(this)[_0x39aab2(0x1bf)](_0x39aab2(0x24a))[_0x39aab2(0x234)]();
  });
}
function cloneRemoveInput() {
  const _0x29cd11 = _0x1169c3;
  $(_0x29cd11(0x277))[_0x29cd11(0x21d)](function () {
    const _0x240009 = _0x29cd11;
    $(this)["find"]("[data-clone-input]")["length"] < 0x2
      ? $(this)[_0x240009(0x1bf)](_0x240009(0x1eb))[_0x240009(0x295)]()
      : $(this)[_0x240009(0x1bf)](_0x240009(0x1eb))[_0x240009(0x234)]();
  });
}
$(_0x1169c3(0x24a))["on"](_0x1169c3(0x1b1), function () {
  const _0x128850 = _0x1169c3,
    _0x1b4776 =
      $(this)["parents"](_0x128850(0x1c2))[_0x128850(0x218)] > 0x0
        ? $(this)[_0x128850(0x1b9)](_0x128850(0x1c2))[_0x128850(0x2b4)]()
        : $(this)["parents"]("[data-display]")[_0x128850(0x2b4)](),
    _0x58f14c =
      $(this)[_0x128850(0x1b9)](_0x128850(0x1c2))["length"] > 0x0
        ? $(this)[_0x128850(0x1b9)](_0x128850(0x1c2))[_0x128850(0x2a4)]("clone")
        : $(this)
            ["parents"]("[data-display]")
            [_0x128850(0x2a4)](_0x128850(0x24e));
  $(_0x128850(0x287) + _0x58f14c + "\x22]")
    ["eq"](_0x1b4776)
    [_0x128850(0x237)](),
    $(_0x128850(0x225) + _0x58f14c + "\x22]")
      ["eq"](_0x1b4776)
      ["remove"](),
    cloneRemove(),
    validation();
}),
  $(_0x1169c3(0x1eb))["on"](_0x1169c3(0x1b1), function () {
    const _0x5a8fa4 = _0x1169c3;
    let _0x3d5113 = $(this)[_0x5a8fa4(0x251)]()["attr"](_0x5a8fa4(0x26a));
    $(this)[_0x5a8fa4(0x298)](_0x5a8fa4(0x24c))[_0x5a8fa4(0x237)](),
      $(_0x5a8fa4(0x20a) + _0x3d5113 + "\x22]")
        [_0x5a8fa4(0x298)](_0x5a8fa4(0x1d0))
        [_0x5a8fa4(0x237)](),
      cloneRemove(),
      validation();
  }),
  $("[data-add-new]")["on"](_0x1169c3(0x1b1), function () {
    const _0x362214 = _0x1169c3;
    let _0x1c4acf = $(this)[_0x362214(0x2a4)](_0x362214(0x1d6));
    var _0x12b202 = $(_0x362214(0x287) + _0x1c4acf + "\x22]")
        ["eq"](0x0)
        [_0x362214(0x1ea)](!![]),
      _0x5bec32 = $(_0x362214(0x225) + _0x1c4acf + "\x22]")
        ["eq"](0x0)
        [_0x362214(0x1ea)](!![]);
    let _0x4b26ee = "";
    $(this)[_0x362214(0x1bf)](_0x362214(0x24a))[_0x362214(0x234)](),
      cloneRemove(),
      _0x12b202[_0x362214(0x1bf)](_0x362214(0x24c))
        [_0x362214(0x1bf)]("input")
        [_0x362214(0x240)](""),
      _0x12b202["find"](_0x362214(0x24c))
        [_0x362214(0x268)](_0x362214(0x284))
        [_0x362214(0x237)](),
      _0x5bec32[_0x362214(0x1bf)](_0x362214(0x1d0))
        [_0x362214(0x268)](_0x362214(0x284))
        [_0x362214(0x237)](),
      _0x12b202[_0x362214(0x1bf)](_0x362214(0x29b))["each"](function () {
        const _0x3a430b = _0x362214;
        if ($(this)["closest"](_0x3a430b(0x24c))["length"] > 0x0) {
          let _0x39e153 = 0x0;
          const _0x6d2683 = $(this)
            ["closest"](_0x3a430b(0x24c))
            [_0x3a430b(0x2a4)]("clone-input");
          console[_0x3a430b(0x1be)](
            $(this)
              ["closest"](_0x3a430b(0x24c))
              [_0x3a430b(0x2a4)](_0x3a430b(0x217)),
            this[_0x3a430b(0x26a)],
          ),
            $(_0x3a430b(0x29e) + _0x6d2683 + "\x22]\x20input")["each"](
              function () {
                const _0x473c58 = _0x3a430b,
                  _0x467023 = $(this)[_0x473c58(0x1ab)](_0x473c58(0x26a));
                if (
                  _0x467023 &&
                  _0x467023[_0x473c58(0x1ad)](_0x473c58(0x254))
                ) {
                  const _0x282d47 = parseInt(
                    _0x467023[_0x473c58(0x208)]("-")[0x1],
                  );
                  !isNaN(_0x282d47) &&
                    _0x282d47 > _0x39e153 &&
                    (_0x39e153 = _0x282d47);
                }
              },
            ),
            _0x39e153++,
            (_0x4b26ee = this[_0x3a430b(0x26a)] + "-" + _0x39e153),
            console[_0x3a430b(0x1be)](_0x6d2683, _0x4b26ee);
        } else
          _0x4b26ee =
            this[_0x3a430b(0x26a)] +
            "-" +
            (parseInt(
              $("[data-clone=\x22" + _0x1c4acf + "\x22]")
                [_0x3a430b(0x241)]()
                [_0x3a430b(0x2b4)](),
            ) +
              0x1);
        $(this)[_0x3a430b(0x240)](""),
          $(this)[_0x3a430b(0x1ab)](_0x3a430b(0x26a), _0x4b26ee),
          $(this)[_0x3a430b(0x1ab)](_0x3a430b(0x2ae), _0x4b26ee);
      }),
      _0x5bec32[_0x362214(0x1bf)]("[data-input-field]")["each"](function () {
        const _0x127795 = _0x362214;
        if ($(this)["data"](_0x127795(0x224))) {
          let _0x5392f6 = 0x0;
          const _0x51a321 = $(this)
            [_0x127795(0x2a4)](_0x127795(0x224))
            [_0x127795(0x208)]("-")[0x0];
          $(
            _0x127795(0x225) +
              _0x1c4acf +
              _0x127795(0x1aa) +
              _0x51a321 +
              "\x22]",
          )[_0x127795(0x21d)](function () {
            const _0x2ba001 = _0x127795,
              _0x4cbe45 = $(this)[_0x2ba001(0x1ab)]("data-input-field"),
              _0x384a0c = parseInt(_0x4cbe45["split"]("-")[0x1]);
            !isNaN(_0x384a0c) &&
              _0x384a0c > _0x5392f6 &&
              (_0x5392f6 = _0x384a0c);
          }),
            _0x5392f6++;
          const _0x1fa272 = _0x51a321 + "-" + _0x5392f6;
          console[_0x127795(0x1be)](_0x1fa272),
            $(this)[_0x127795(0x1ab)](_0x127795(0x255), _0x1fa272);
        }
      }),
      $(_0x362214(0x1fd) + _0x1c4acf + "\x22]")["append"](_0x12b202),
      $(_0x362214(0x29a) + _0x1c4acf + "\x22]")[_0x362214(0x1b8)](_0x5bec32),
      $(_0x362214(0x247) + _0x1c4acf + "\x22]")["each"](function () {
        const _0x279d0c = _0x362214;
        $(this)["text"](
          $(this)
            [_0x279d0c(0x1b9)](_0x279d0c(0x287) + _0x1c4acf + "\x22]")
            [_0x279d0c(0x2b4)]() + 0x1,
        );
      }),
      $("[data-display-index=\x22" + _0x1c4acf + "\x22]")[_0x362214(0x21d)](
        function () {
          const _0xfe1da5 = _0x362214;
          $(this)["text"](
            $(this)
              [_0xfe1da5(0x1b9)](_0xfe1da5(0x225) + _0x1c4acf + "\x22]")
              [_0xfe1da5(0x2b4)]() + 0x1,
          );
        },
      ),
      validation();
  }),
  $(_0x1169c3(0x1d3))["on"](_0x1169c3(0x1b1), function () {
    const _0x1ba32b = _0x1169c3,
      _0x82bd3c = $(this)
        [_0x1ba32b(0x1b9)](_0x1ba32b(0x1c2))
        [_0x1ba32b(0x2b4)]();
    let _0x4f7957 = $(this)[_0x1ba32b(0x2a4)](_0x1ba32b(0x253));
    var _0x311fc4 = $(_0x1ba32b(0x29e) + _0x4f7957 + "\x22]")
        ["eq"](0x0)
        [_0x1ba32b(0x1ea)](!![]),
      _0x1f7fe7 = $("[data-display-input=\x22" + _0x4f7957 + "\x22]")
        ["eq"](0x0)
        [_0x1ba32b(0x1ea)](!![]);
    $(this)
      [_0x1ba32b(0x1bf)]("[data-form=\x22remove-input-clone\x22]")
      ["show"](),
      cloneRemoveInput();
    let _0x19878e = 0x0;
    $(_0x1ba32b(0x29e) + _0x4f7957 + "\x22]\x20input")[_0x1ba32b(0x21d)](
      function () {
        const _0x3a82e0 = _0x1ba32b,
          _0x54ffc3 = $(this)["attr"](_0x3a82e0(0x26a));
        if (_0x54ffc3 && _0x54ffc3[_0x3a82e0(0x1ad)](_0x3a82e0(0x254))) {
          const _0x1ff062 = parseInt(_0x54ffc3[_0x3a82e0(0x208)]("-")[0x1]);
          !isNaN(_0x1ff062) && _0x1ff062 > _0x19878e && (_0x19878e = _0x1ff062);
        }
      },
    ),
      _0x19878e++,
      _0x311fc4["find"](_0x1ba32b(0x29b))[_0x1ba32b(0x21d)](function () {
        const _0x13f858 = _0x1ba32b;
        let _0x2866e2 = _0x13f858(0x254) + _0x19878e;
        $(this)[_0x13f858(0x240)](""),
          $(this)["attr"](_0x13f858(0x26a), _0x2866e2),
          $(this)["attr"](_0x13f858(0x2ae), _0x2866e2);
      }),
      _0x1f7fe7["find"]("[data-input-field]")[_0x1ba32b(0x21d)](function () {
        const _0x41bb2a = _0x1ba32b;
        $(this)[_0x41bb2a(0x1ab)](
          "data-input-field",
          _0x41bb2a(0x254) + _0x19878e,
        );
      }),
      $(this)
        ["siblings"](_0x1ba32b(0x22b) + _0x4f7957 + "\x22]")
        [_0x1ba32b(0x1b8)](_0x311fc4),
      $("[data-display]")
        ["eq"](_0x82bd3c)
        ["find"]("[data-display-input-wrapper=\x22" + _0x4f7957 + "\x22]")
        ["append"](_0x1f7fe7),
      $(_0x1ba32b(0x1ba) + _0x4f7957 + "\x22]")[_0x1ba32b(0x21d)](function () {
        const _0x49fd0e = _0x1ba32b;
        $(this)[_0x49fd0e(0x2a0)](
          $(this)
            ["parents"]("[data-clone-input=\x22" + _0x4f7957 + "\x22]")
            [_0x49fd0e(0x2b4)]() + 0x1,
        );
      }),
      $("[data-display-input-index=\x22" + _0x4f7957 + "\x22]")[
        _0x1ba32b(0x21d)
      ](function () {
        const _0xabee4a = _0x1ba32b;
        $(this)[_0xabee4a(0x2a0)](
          $(this)
            [_0xabee4a(0x1b9)](_0xabee4a(0x1e9) + _0x4f7957 + "\x22]")
            [_0xabee4a(0x2b4)]() + 0x1,
        );
      }),
      validation();
  }),
  $(_0x1169c3(0x256))["on"](_0x1169c3(0x1b1), function () {
    const _0x18ec9c = _0x1169c3,
      _0x1e5845 = $(this)[_0x18ec9c(0x2a4)](_0x18ec9c(0x1c7));
    $(_0x18ec9c(0x24d) + _0x1e5845 + "\x22]")["val"](""), validation();
  });
function andLogic() {
  const _0x281789 = _0x1169c3;
  conditionalResult &&
    (steps["eq"](x)[_0x281789(0x1bf)](_0x281789(0x1ec))[_0x281789(0x295)](),
    console["log"](_0x281789(0x1a3)),
    steps["eq"](x)
      [_0x281789(0x1bf)]("[data-show-if]")
      [_0x281789(0x21d)](function () {
        const _0x107085 = _0x281789;
        function _0x4f7074(_0x5a64b4) {
          const _0x1c8455 = _0x5e9f,
            _0x416861 = _0x5a64b4["split"]("&"),
            _0x45f34d = [];
          return (
            _0x416861[_0x1c8455(0x263)]((_0x59e8ad) => {
              const _0x5752a2 = _0x1c8455,
                [_0xd95123, _0x40e595] = _0x59e8ad[_0x5752a2(0x208)]("=");
              _0x45f34d[_0x5752a2(0x28f)]({
                field: _0xd95123,
                value: _0x40e595,
              });
            }),
            _0x45f34d
          );
        }
        const _0x456da0 = $(this)[_0x107085(0x1ab)](_0x107085(0x257));
        console[_0x107085(0x1be)](_0x456da0);
        const _0x701330 = _0x4f7074(_0x456da0);
        function _0x262e24(_0x56f70a, _0x5aa902) {
          const _0x2eb786 = _0x107085;
          return _0x5aa902[_0x2eb786(0x26f)]((_0x1fb4cf, _0x200b96) => {
            const _0x2fef26 = _0x2eb786;
            if (
              _0x56f70a[0x0] &&
              _0x1fb4cf[_0x2fef26(0x1e1)] === _0x56f70a[0x0][_0x2fef26(0x1e1)]
            )
              return _0x56f70a[_0x2fef26(0x2b3)](
                (_0x1d08cf, _0x5d8e6b) =>
                  _0x5aa902[_0x200b96 + _0x5d8e6b] &&
                  _0x5aa902[_0x200b96 + _0x5d8e6b][_0x2fef26(0x1e1)] ===
                    _0x1d08cf[_0x2fef26(0x1e1)] &&
                  _0x5aa902[_0x200b96 + _0x5d8e6b][_0x2fef26(0x276)] ===
                    _0x1d08cf[_0x2fef26(0x276)],
              );
            return ![];
          });
        }
        const _0x5ed517 = _0x262e24(_0x701330, all_data);
        _0x5ed517 ? $(this)[_0x107085(0x234)]() : $(this)[_0x107085(0x295)]();
      }));
}
scrollTop(), cloneRemove(), cloneRemoveInput();
