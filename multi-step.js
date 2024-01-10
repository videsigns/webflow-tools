//8th Jan 2023
//Bug fix
//1. Form support font and color

const _0x412a42 = _0x1b30;
(function (_0x8a8f6e, _0x3fb275) {
  const _0x434ca4 = _0x1b30,
    _0x5c5a3c = _0x8a8f6e();
  while (!![]) {
    try {
      const _0x22b13f =
        -parseInt(_0x434ca4(0x13b)) / 0x1 +
        parseInt(_0x434ca4(0x116)) / 0x2 +
        parseInt(_0x434ca4(0x1b8)) / 0x3 +
        (parseInt(_0x434ca4(0x23d)) / 0x4) *
          (-parseInt(_0x434ca4(0x18e)) / 0x5) +
        (parseInt(_0x434ca4(0x113)) / 0x6) *
          (-parseInt(_0x434ca4(0x221)) / 0x7) +
        (-parseInt(_0x434ca4(0x127)) / 0x8) *
          (parseInt(_0x434ca4(0x1cf)) / 0x9) +
        parseInt(_0x434ca4(0x236)) / 0xa;
      if (_0x22b13f === _0x3fb275) break;
      else _0x5c5a3c["push"](_0x5c5a3c["shift"]());
    } catch (_0x27eabf) {
      _0x5c5a3c["push"](_0x5c5a3c["shift"]());
    }
  }
})(_0x3526, 0x30328);
let x = 0x0,
  curStep = 0x0,
  steps = $(_0x412a42(0x144)),
  progressbarClone = $(_0x412a42(0x154))[_0x412a42(0x1c5)](),
  progressbar,
  countCard = !![],
  weightedSelection = $(_0x412a42(0x135))[_0x412a42(0x1c7)](_0x412a42(0x1c1)),
  weightedSelectionRange = $(_0x412a42(0x247))[_0x412a42(0x1c7)](
    _0x412a42(0x22d),
  ),
  selectMultiple = $(_0x412a42(0x120))[_0x412a42(0x1c7)](_0x412a42(0x1b9)),
  customError = $("[data-custom-error-message]")[_0x412a42(0x1c7)](
    _0x412a42(0x227),
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
  reinitIX = $("[data-reinit]")[_0x412a42(0x1c7)](_0x412a42(0x25c)),
  textareaLength = 0x0,
  textInputLength = 0x0,
  emailInputLength = 0x0,
  selectInputLength = 0x0,
  checkboxInputLength = 0x0,
  filledInput = [],
  savedFilledInput = [],
  memory = $(_0x412a42(0x197))[_0x412a42(0x1c7)](_0x412a42(0x153)),
  quiz = $(_0x412a42(0x1a2))[_0x412a42(0x1c7)]("quiz"),
  progress = 0x0;
const urlFormly = new URL(window[_0x412a42(0x243)][_0x412a42(0x24b)]);
let _params = $("[data-query-param]")["data"](_0x412a42(0x12b)),
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
  logicExtra = $(_0x412a42(0x241))["data"](_0x412a42(0x170)),
  oldSubmitText = $(_0x412a42(0x239))["val"](),
  oldResetText = $(_0x412a42(0x149))["text"](),
  formReset = $("[data-form=\x22multistep\x22]")[_0x412a42(0x1c7)]("reset"),
  successCard = "",
  redirectTo = "",
  totalSteps = 0x0,
  checkCount = 0x0,
  resetDelay = $(_0x412a42(0x11c))[_0x412a42(0x1c7)](_0x412a42(0x24d))
    ? $("[data-reset-delay]")[_0x412a42(0x1c7)](_0x412a42(0x24d))
    : 0x7d0,
  redirectDelay = $(_0x412a42(0x180))[_0x412a42(0x1c7)](_0x412a42(0x15a))
    ? $(_0x412a42(0x180))[_0x412a42(0x1c7)](_0x412a42(0x15a))
    : 0x7d0,
  newTab = !![],
  unfilledArr = [],
  phoneFormat = $(_0x412a42(0x241))[_0x412a42(0x1c7)](_0x412a42(0x11e)),
  scrollToTop = $("[data-form=\x22multistep\x22]")[_0x412a42(0x1c7)](
    _0x412a42(0x1ec),
  ),
  conditionalResult = $(_0x412a42(0x1cb))["data"](_0x412a42(0x1d8)) === "AND",
  scrollTopOffset = parseInt(
    $("[data-form=\x22multistep\x22]")["data"]("scroll-top-offset"),
  ),
  notRobot = !![],
  all_data = [];
const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
savedFilledInput = JSON[_0x412a42(0x233)](
  localStorage[_0x412a42(0x1b1)](_0x412a42(0x106)),
);
var ogCloneArr = [];
$(_0x412a42(0x119))[_0x412a42(0x1d7)](function () {
  const _0x3e45af = _0x412a42;
  ogCloneArr[_0x3e45af(0x107)]({
    name: $(this)[_0x3e45af(0x1c7)](_0x3e45af(0x1c5)),
    element: $(this)[_0x3e45af(0x1c5)](!![]),
    display: $(
      _0x3e45af(0x1ee) + $(this)[_0x3e45af(0x1c7)](_0x3e45af(0x1c5)) + "\x22]",
    )
      ["eq"](0x0)
      [_0x3e45af(0x1c5)](!![]),
  });
});
$(_0x412a42(0x173))["length"] > 0x0 && (notRobot = ![]);
function recaptcha(_0x3a578c) {
  notRobot = !![];
}
$(_0x412a42(0x1ae))[_0x412a42(0x1e5)] > 0x0 &&
  (countCard = $("[data-count-card]")[_0x412a42(0x1c7)](_0x412a42(0x220)));
$(_0x412a42(0x11f))["hide"](),
  $(progressbarClone)[_0x412a42(0x147)](_0x412a42(0x190)),
  $("[data-form=\x22progress\x22]")[_0x412a42(0x130)]()[_0x412a42(0x204)](),
  $(_0x412a42(0x239))["hide"](),
  $("[data-form-ms=\x22submit-btn\x22]")[_0x412a42(0x210)](),
  steps[_0x412a42(0x1d7)](function () {
    const _0xe5a822 = _0x412a42;
    $(_0xe5a822(0x156))[_0xe5a822(0xfd)](
      progressbarClone[_0xe5a822(0x1c5)](!![], !![]),
    );
  }),
  $(_0x412a42(0x188))[_0x412a42(0x210)]();
countCard
  ? ((curStep = curStep + 0x1),
    (totalSteps = steps[_0x412a42(0x1e5)]),
    $(_0x412a42(0x10f))[_0x412a42(0x22e)](totalSteps))
  : ($(steps[x])[_0x412a42(0x1c7)](_0x412a42(0x258))
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    (totalSteps = $("[data-form=\x22step\x22]:not([data-card=\x22true\x22])")[
      _0x412a42(0x1e5)
    ]),
    $(_0x412a42(0x10f))[_0x412a42(0x22e)](totalSteps),
    $(_0x412a42(0x1ca))[_0x412a42(0x1d7)](function () {
      const _0x3f9d3a = _0x412a42;
      $(
        $("[data-form=\x22progress-indicator\x22]")[
          $(this)[_0x3f9d3a(0x24f)]()
        ],
      )["hide"]();
    }));
(progressbar = $(_0x412a42(0x156))[_0x412a42(0x130)]()),
  $(_0x412a42(0x154))["on"](_0x412a42(0x1c3), clickableIndicator),
  $("[data-text=\x22current-step\x22]")["text"](curStep),
  steps[_0x412a42(0x210)](),
  $(_0x412a42(0x1dc))[_0x412a42(0x210)](),
  $(_0x412a42(0x1f2))[_0x412a42(0x1d7)](function () {
    const _0x190473 = _0x412a42;
    $(this)[_0x190473(0x150)]("type", _0x190473(0x17f));
  });
function getParams() {
  const _0x4f385e = _0x412a42;
  urlFormly["searchParams"][_0x4f385e(0x13c)](function (_0x11789d, _0x2a0250) {
    searchQ["push"]({ val: _0x11789d, key: _0x2a0250 });
  });
}
function getSafe(_0x14b115, _0x30a3bf) {
  try {
    return _0x14b115();
  } catch (_0x2d543b) {
    return _0x30a3bf;
  }
}
function phoneAutoFormat(_0xacb2d9) {
  var _0x39057e = "";
  return function (_0x29bb1c) {
    const _0x21bb41 = _0x1b30;
    var _0x28892d = "",
      _0x3f9d7f = _0x29bb1c[_0x21bb41(0x21d)](/\D/g, ""),
      _0xb73d42 = 0x0,
      _0xc6c909 = 0x0;
    while (
      _0xb73d42 < _0x3f9d7f[_0x21bb41(0x1e5)] &&
      _0xc6c909 < _0xacb2d9[_0x21bb41(0x1e5)]
    ) {
      _0xacb2d9[_0xc6c909] === "x"
        ? ((_0x28892d += _0x3f9d7f[_0xb73d42]), _0xb73d42++)
        : (_0x28892d += _0xacb2d9[_0xc6c909]),
        _0xc6c909++;
    }
    if (_0x29bb1c[_0x21bb41(0x1e5)] < _0x39057e[_0x21bb41(0x1e5)]) {
      var _0x130f45 = _0xacb2d9[_0x21bb41(0x103)](_0xc6c909);
      _0x28892d += _0x130f45["replace"](/x/g, "");
    }
    return (_0x39057e = _0x28892d), _0x28892d;
  };
}
function validateURL(_0x1d34c7) {
  const _0x480311 = _0x412a42;
  return urlPattern[_0x480311(0x15e)](_0x1d34c7) ? !![] : ![];
}
quiz &&
  steps[_0x412a42(0x1d7)](function () {
    const _0x14357 = _0x412a42;
    $(this)[_0x14357(0x130)]()[_0x14357(0x150)]("data-radio-skip", !![]),
      $(this)["children"]()[_0x14357(0x150)]("data-radio-delay", 0xfa);
  });
function disableBtn(_0x2a8178) {
  const _0x4b4eaa = _0x412a42;
  (fill = ![]),
    !customError &&
      ($("[data-form=\x22next-btn\x22]")["css"]({
        opacity: _0x4b4eaa(0x122),
        "pointer-events": _0x4b4eaa(0x101),
      }),
      $(_0x4b4eaa(0x169))[_0x4b4eaa(0x13a)]("disabled"),
      $(_0x4b4eaa(0x239))[_0x4b4eaa(0x139)]({
        opacity: "0.4",
        "pointer-events": _0x4b4eaa(0x101),
      }),
      $("[data-form=\x22submit-btn\x22]")[_0x4b4eaa(0x13a)](_0x4b4eaa(0x1d4)),
      $("[data-form-ms=\x22submit-btn\x22]")[_0x4b4eaa(0x139)]({
        opacity: _0x4b4eaa(0x122),
        "pointer-events": _0x4b4eaa(0x101),
      }),
      $(_0x4b4eaa(0x207))[_0x4b4eaa(0x13a)](_0x4b4eaa(0x1d4)));
}
function enableBtn() {
  const _0x54b4b3 = _0x412a42;
  (fill = !![]),
    $(_0x54b4b3(0x169))[_0x54b4b3(0x139)]({
      "pointer-events": _0x54b4b3(0x1d3),
      opacity: "1",
    }),
    $(_0x54b4b3(0x169))["removeClass"](_0x54b4b3(0x1d4)),
    $(_0x54b4b3(0x239))[_0x54b4b3(0x139)]({
      "pointer-events": _0x54b4b3(0x1d3),
      opacity: "1",
    }),
    $("[data-form=\x22submit-btn\x22]")[_0x54b4b3(0x147)]("disabled"),
    $("[data-form-ms=\x22submit-btn\x22]")[_0x54b4b3(0x139)]({
      "pointer-events": "auto",
      opacity: "1",
    }),
    $("[data-form-ms=\x22submit-btn\x22]")[_0x54b4b3(0x147)]("disabled");
}
function saveFilledInput() {
  const _0x58463d = _0x412a42;
  $(_0x58463d(0x1e1))
    ["not"](_0x58463d(0x24c))
    [_0x58463d(0x1d7)](function () {
      const _0x107039 = _0x58463d;
      $(this)[_0x107039(0x150)](_0x107039(0x14a)) === _0x107039(0x231) ||
      $(this)["attr"](_0x107039(0x14a)) === "radio"
        ? $(this)["prop"]("checked") &&
          (filledInput[_0x107039(0x18f)](
            (_0x3bc571) =>
              _0x3bc571[_0x107039(0x20e)] === $(this)["attr"](_0x107039(0x16e)),
          )
            ? ((filledInput = filledInput[_0x107039(0x166)](
                (_0x55808f) =>
                  _0x55808f[_0x107039(0x20e)] !==
                  $(this)[_0x107039(0x150)](_0x107039(0x16e)),
              )),
              $(this)[_0x107039(0x176)]() !== "" &&
                filledInput[_0x107039(0x107)]({
                  inputName: $(this)[_0x107039(0x150)](_0x107039(0x16e)),
                  value: $(this)[_0x107039(0x176)](),
                }))
            : $(this)[_0x107039(0x176)]() !== "" &&
              filledInput[_0x107039(0x107)]({
                inputName: $(this)[_0x107039(0x150)](_0x107039(0x16e)),
                value: $(this)[_0x107039(0x176)](),
              }))
        : filledInput[_0x107039(0x18f)](
              (_0x451216) =>
                _0x451216["inputName"] === $(this)["attr"](_0x107039(0x16e)),
            )
          ? ((filledInput = filledInput[_0x107039(0x166)](
              (_0x359de0) =>
                _0x359de0[_0x107039(0x20e)] !==
                $(this)["attr"](_0x107039(0x16e)),
            )),
            $(this)[_0x107039(0x176)]() !== "" &&
              filledInput[_0x107039(0x107)]({
                inputName: $(this)[_0x107039(0x150)](_0x107039(0x16e)),
                value: $(this)[_0x107039(0x176)](),
              }))
          : $(this)[_0x107039(0x176)]() !== "" &&
            filledInput[_0x107039(0x107)]({
              inputName: $(this)[_0x107039(0x150)]("name"),
              value: $(this)[_0x107039(0x176)](),
            });
    }),
    localStorage["removeItem"]("filledInput"),
    localStorage[_0x58463d(0x15c)](
      "filledInput",
      JSON["stringify"](filledInput),
    );
}
function scrollTop() {
  const _0x4cc263 = _0x412a42;
  scrollToTop &&
    $(_0x4cc263(0x143))["animate"](
      {
        scrollTop:
          $(_0x4cc263(0x241))[_0x4cc263(0x21a)]()[_0x4cc263(0x198)] -
          scrollTopOffset,
      },
      0x3e8,
    );
}
function updateStep() {
  const _0x1994af = _0x412a42;
  scrollTop(),
    (skip = ![]),
    $("[data-form=\x22custom-progress-indicator\x22]")[_0x1994af(0x147)](
      _0x1994af(0x1d4),
    );
  $("[data-clickable]")["data"](_0x1994af(0x15d)) &&
    (steps[_0x1994af(0x208)](_0x1994af(0x165))["each"](function () {
      const _0x21c661 = _0x1994af;
      $(
        $(_0x21c661(0x256))[
          $(this)["parents"](_0x21c661(0x144))[_0x21c661(0x24f)]()
        ],
      ),
        $(this)[_0x21c661(0x176)]() === "" && emptyInput++;
    }),
    emptyInput > 0x0
      ? $(_0x1994af(0x1b4))[_0x1994af(0x13a)]("disabled")
      : $(_0x1994af(0x1b4))[_0x1994af(0x147)](_0x1994af(0x1d4)));
  $("[data-form=\x22custom-progress-indicator\x22]")["removeClass"](
    _0x1994af(0x190),
  ),
    $(_0x1994af(0x256))[_0x1994af(0x13a)](_0x1994af(0x1d4)),
    $($(_0x1994af(0x256))[x])[_0x1994af(0x13a)]("current"),
    (selection = selections[_0x1994af(0x166)](
      (_0x5072d1) => _0x5072d1[_0x1994af(0x196)] === x - 0x1,
    ));
  next &&
    (x = getSafe(() => selection[0x0][_0x1994af(0x104)])
      ? parseInt(getSafe(() => selection[0x0]["skipTo"]))
      : x);
  $(_0x1994af(0x1ba))[_0x1994af(0x210)](), steps[_0x1994af(0x210)]();
  reinitIX === !![] && window[_0x1994af(0x11d)][_0x1994af(0x161)]();
  $(progressbar)[_0x1994af(0x147)](_0x1994af(0x190));
  for (i = 0x0; i <= x; i++) {
    countCard
      ? $(progressbar[i])[_0x1994af(0x13a)]("current")
      : !$(steps[i])["data"](_0x1994af(0x258)) &&
        $(progressbar[i])["addClass"](_0x1994af(0x190));
  }
  reinitIX === !![]
    ? (window[_0x1994af(0x11d)] &&
        window[_0x1994af(0x11d)]
          [_0x1994af(0x1d6)](_0x1994af(0x160))
          [_0x1994af(0x235)](),
      document[_0x1994af(0x1ab)](new Event(_0x1994af(0x110))),
      $(steps[x])["show"]())
    : $(steps[x])[_0x1994af(0x131)]("slow");
  $(".active-answer-card")[_0x1994af(0x147)](_0x1994af(0x1f1));
  x === 0x0 &&
    !$(steps[x])[_0x1994af(0x1c7)](_0x1994af(0x258)) &&
    ($(steps[x])["find"](_0x1994af(0x1ba))[_0x1994af(0x250)](),
    $(steps[x])
      [_0x1994af(0x208)]("[data-answer]")
      ["addClass"]("active-answer-card"));
  selection[_0x1994af(0x1e5)] > 0x0
    ? ($(steps[x])
        ["find"](_0x1994af(0x1aa) + selection[0x0][_0x1994af(0x174)] + "\x22]")
        [_0x1994af(0x250)](),
      $(steps[x])
        [_0x1994af(0x208)](
          _0x1994af(0x1aa) + selection[0x0][_0x1994af(0x174)] + "\x22]",
        )
        ["addClass"](_0x1994af(0x1f1)))
    : ($(steps[x])
        [_0x1994af(0x208)](_0x1994af(0x1aa) + answer + "\x22]")
        [_0x1994af(0x250)](),
      $(steps[x])
        ["find"](_0x1994af(0x1aa) + answer + "\x22]")
        [_0x1994af(0x13a)](_0x1994af(0x1f1)));
  if (x === 0x0)
    $(_0x1994af(0x1a0))[_0x1994af(0x210)](),
      $("[data-form=\x22next-btn\x22]")["show"](),
      $(_0x1994af(0x239))[_0x1994af(0x210)]();
  else {
    if (
      x === steps[_0x1994af(0x1e5)] - 0x1 ||
      $(steps[x])[_0x1994af(0x208)](_0x1994af(0x242))[_0x1994af(0x1e5)] > 0x0
    ) {
      $(_0x1994af(0x169))[_0x1994af(0x210)]();
      if (
        $(steps[x])
          [_0x1994af(0x208)]("[data-form=\x22next-btn\x22][data-submit-show]")
          [_0x1994af(0x1c7)](_0x1994af(0x10d))
      )
        $(steps[x])["find"](_0x1994af(0x1bb))[_0x1994af(0x250)]();
      else
        $(_0x1994af(0x169))["data"](_0x1994af(0x10d)) &&
          $(_0x1994af(0x169))[_0x1994af(0x250)]();
      $(_0x1994af(0x239))[_0x1994af(0x250)](),
        $(_0x1994af(0x207))["show"](),
        $(_0x1994af(0x1a0))[_0x1994af(0x250)]();
    } else
      $(_0x1994af(0x169))["show"](),
        $("[data-form=\x22back-btn\x22]")[_0x1994af(0x250)](),
        $("[data-form=\x22submit-btn\x22]")["hide"](),
        $("[data-form-ms=\x22submit-btn\x22]")[_0x1994af(0x210)]();
  }
  $($(steps[x])[_0x1994af(0x208)](_0x1994af(0x229))[0x0])["focus"](),
    $($(steps[x])["find"]("textarea[autofocus]")[0x0])["focus"](),
    validation();
  for (idx = 0x0; idx <= x; idx++) {
    $($(_0x1994af(0x256))[idx])[_0x1994af(0x147)](_0x1994af(0x1d4));
  }
}
function validateEmail(_0x377026, _0x3eb76f, _0x476a72) {
  const _0x2d2d65 = _0x412a42;
  let _0x588d6a = _0x377026["includes"]("@")
    ? _0x377026[_0x2d2d65(0x25e)]("@")[0x1]["split"](".")[0x0]
    : [];
  dom = [];
  _0x3eb76f !== undefined &&
    _0x3eb76f[_0x2d2d65(0x25e)](",")[_0x2d2d65(0x13c)](function (_0x5d5491) {
      const _0x1e90e1 = _0x2d2d65;
      _0x5d5491[_0x1e90e1(0x152)](_0x588d6a) &&
        dom[_0x1e90e1(0x107)](_0x588d6a);
    });
  dom[_0x2d2d65(0x1e5)] > 0x0 ? (domainAllowed = ![]) : (domainAllowed = !![]);
  var _0x5541c5 = /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,20})?$/;
  console["log"](_0x5541c5["test"](_0x377026)),
    !_0x5541c5[_0x2d2d65(0x15e)](_0x377026) || !domainAllowed
      ? ((emailFilled = ![]), unfilledArr["push"]({ input: _0x476a72 }))
      : (emailFilled = !![]);
}
function phoneValidation(_0x54f322, _0x5be29d, _0x274ace) {
  if (phoneFormat) return _0x5be29d >= _0x274ace ? !![] : ![];
  else {
    if (_0x5be29d >= _0x274ace) return !![];
  }
}
function validation() {
  const _0x15c59c = _0x412a42;
  $(steps[x])[_0x15c59c(0x1c7)](_0x15c59c(0x258)) && enableBtn();
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
    (textareaLength = $(steps[x])[_0x15c59c(0x208)](_0x15c59c(0x1a5))[
      _0x15c59c(0x1e5)
    ]),
    (textInputLength = $(steps[x])[_0x15c59c(0x208)](_0x15c59c(0x17c))[
      _0x15c59c(0x1e5)
    ]),
    (selectInputLength = $(steps[x])["find"](_0x15c59c(0x125))[
      _0x15c59c(0x1e5)
    ]),
    (emailInputLength = $(steps[x])[_0x15c59c(0x208)](
      "input[type=\x22email\x22]:visible",
    )["length"]),
    (checkboxInputLength = $(steps[x])[_0x15c59c(0x208)](_0x15c59c(0x148))[
      "length"
    ]);
  textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0
    ? disableBtn()
    : enableBtn();
  checkCount = $(steps[x])[_0x15c59c(0x1c7)]("checkbox")
    ? $(steps[x])[_0x15c59c(0x1c7)](_0x15c59c(0x231))
    : $(steps[x])[_0x15c59c(0x208)](_0x15c59c(0x1e9))["length"] > 0x0
      ? $(steps[x])
          [_0x15c59c(0x208)]("[data-checkbox]")
          [_0x15c59c(0x1c7)](_0x15c59c(0x231))
      : 0x0;
  if (!logicExtra)
    $(steps[x])[_0x15c59c(0x208)](_0x15c59c(0x224))["is"](_0x15c59c(0x164)) &&
      (checkCount === "*" ||
      checkCount > $(steps[x])[_0x15c59c(0x208)](_0x15c59c(0x109))["length"]
        ? $(steps[x])
            [_0x15c59c(0x208)](_0x15c59c(0x109))
            ["each"](function () {
              const _0x5901cb = _0x15c59c;
              $(this)["is"](_0x5901cb(0x14e))
                ? $(steps[x])["find"](_0x5901cb(0x1c9))["length"] < 0x1 &&
                  ((checkboxFilled = !![]),
                  resetInputErrorMessage(
                    $(this)[_0x5901cb(0x150)](_0x5901cb(0x16e)),
                  ))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0x5901cb(0x107)]({
                    input: $(this)[_0x5901cb(0x150)](_0x5901cb(0x16e)),
                  }));
            })
        : $(steps[x])[_0x15c59c(0x208)](
              ":input[type=\x22checkbox\x22]:checked",
            )[_0x15c59c(0x1e5)] >= checkCount
          ? $(steps[x])[_0x15c59c(0x208)](_0x15c59c(0x1c9))[_0x15c59c(0x1e5)] >
            0x0
            ? $(steps[x])
                [_0x15c59c(0x208)](_0x15c59c(0x1c9))
                [_0x15c59c(0x1d7)](function () {
                  const _0x391769 = _0x15c59c;
                  checkboxFilled = ![];
                  let _0x5c7818 = $(steps[x])["find"](
                      ":input[type=\x22checkbox\x22][required]",
                    )["length"],
                    _0x20f62b = $(steps[x])["find"](_0x391769(0x10b))[
                      _0x391769(0x1e5)
                    ];
                  console[_0x391769(0x100)](_0x5c7818 - _0x20f62b),
                    _0x5c7818 - _0x20f62b === 0x0
                      ? ((checkboxFilled = !![]),
                        resetInputErrorMessage(
                          $(steps[x])
                            [_0x391769(0x208)](":input[type=\x22checkbox\x22]")
                            ["attr"](_0x391769(0x16e)),
                        ))
                      : ((checkboxFilled = ![]),
                        $(steps[x])
                          [_0x391769(0x208)](
                            ":input[type=\x22checkbox\x22][required]:not(:checked)",
                          )
                          [_0x391769(0x1d7)](function () {
                            const _0x43b4ed = _0x391769;
                            unfilledArr[_0x43b4ed(0x107)]({
                              input: $(this)["attr"](_0x43b4ed(0x16e)),
                            });
                          }));
                })
            : ((checkboxFilled = !![]),
              resetInputErrorMessage(
                $(steps[x])
                  [_0x15c59c(0x208)](_0x15c59c(0x109))
                  ["attr"](_0x15c59c(0x16e)),
              ))
          : ((checkboxFilled = ![]),
            $(steps[x])
              ["find"](_0x15c59c(0x1c9))
              [_0x15c59c(0x1d7)](function () {
                const _0x225c9f = _0x15c59c;
                $(this)["not"](":checked") &&
                  unfilledArr[_0x225c9f(0x107)]({
                    input: $(this)[_0x225c9f(0x150)](_0x225c9f(0x16e)),
                  });
              }),
            unfilledArr["push"]({
              input: $(steps[x])
                [_0x15c59c(0x208)](":input[type=\x22checkbox\x22]")
                [_0x15c59c(0x150)]("name"),
            }))),
      $(steps[x])
        [_0x15c59c(0x208)](_0x15c59c(0x124))
        [_0x15c59c(0x1d7)](function (_0x57eb25) {
          const _0x1a3086 = _0x15c59c;
          var _0x43fa3a = $(this)[_0x1a3086(0x150)](_0x1a3086(0x16e));
          $(_0x1a3086(0x216) + _0x43fa3a + _0x1a3086(0x18d))[
            _0x1a3086(0x1e5)
          ] == 0x0
            ? (!empReqRadio["find"](
                (_0x46aec8) => _0x46aec8[_0x1a3086(0x17d)] === _0x57eb25,
              ) && empReqRadio[_0x1a3086(0x107)]({ input: _0x57eb25 }),
              unfilledArr["push"]({
                input: $(this)[_0x1a3086(0x150)](_0x1a3086(0x16e)),
              }))
            : (empReqRadio = empReqRadio[_0x1a3086(0x166)](
                (_0x188a06) => _0x188a06[_0x1a3086(0x17d)] !== _0x57eb25,
              )),
            empReqRadio[_0x1a3086(0x1e5)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0x15c59c(0x208)](":input[type=\x22text\x22][required]")
        [_0x15c59c(0x1d7)](function (_0x14c716) {
          const _0x542dee = _0x15c59c;
          let _0x1efb29 = $(this)[_0x542dee(0x176)]()[_0x542dee(0x1e5)],
            _0x18adb4 = $(this)[_0x542dee(0x1c7)](_0x542dee(0x117))
              ? $(this)[_0x542dee(0x1c7)](_0x542dee(0x117))
              : 0x0;
          $(this)[_0x542dee(0x176)]() !== "" && _0x1efb29 >= _0x18adb4
            ? (empReqInput = empReqInput[_0x542dee(0x166)](
                (_0x74cdd4) => _0x74cdd4[_0x542dee(0x17d)] !== _0x14c716,
              ))
            : (!empReqInput[_0x542dee(0x208)](
                (_0x1dc91e) => _0x1dc91e["input"] === _0x14c716,
              ) && empReqInput[_0x542dee(0x107)]({ input: _0x14c716 }),
              unfilledArr[_0x542dee(0x107)]({
                input: $(this)[_0x542dee(0x150)]("name"),
              })),
            empReqInput[_0x542dee(0x1e5)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x15c59c(0x208)](_0x15c59c(0x230))
        [_0x15c59c(0x1d7)](function (_0xeef576) {
          const _0x278e0b = _0x15c59c;
          let _0x472e5d = $(this)[_0x278e0b(0x176)]()[_0x278e0b(0x1e5)],
            _0x44cf81 = $(this)[_0x278e0b(0x1c7)](_0x278e0b(0x117))
              ? $(this)[_0x278e0b(0x1c7)](_0x278e0b(0x117))
              : 0x0;
          $(this)[_0x278e0b(0x176)]() !== "" && _0x472e5d >= _0x44cf81
            ? (empReqPassword = empReqPassword[_0x278e0b(0x166)](
                (_0x3e613c) => _0x3e613c[_0x278e0b(0x17d)] !== _0xeef576,
              ))
            : (!empReqPassword[_0x278e0b(0x208)](
                (_0x109606) => _0x109606[_0x278e0b(0x17d)] === _0xeef576,
              ) && empReqPassword[_0x278e0b(0x107)]({ input: _0xeef576 }),
              unfilledArr[_0x278e0b(0x107)]({
                input: $(this)[_0x278e0b(0x150)](_0x278e0b(0x16e)),
              })),
            empReqPassword["length"] === 0x0
              ? (passwordFilled = !![])
              : (passwordFilled = ![]);
        }),
      $(steps[x])
        [_0x15c59c(0x208)](_0x15c59c(0x1da))
        [_0x15c59c(0x1d7)](function (_0x2b8998) {
          const _0x4cf317 = _0x15c59c;
          let _0xbb8fc2 = $(this)["val"]()["length"],
            _0x2c2ea7 = $(this)[_0x4cf317(0x1c7)](_0x4cf317(0x117))
              ? $(this)["data"](_0x4cf317(0x117))
              : 0x0;
          $(this)[_0x4cf317(0x176)]() !== "" && _0xbb8fc2 >= _0x2c2ea7
            ? (empReqTime = empReqTime["filter"](
                (_0x3e3847) => _0x3e3847[_0x4cf317(0x17d)] !== _0x2b8998,
              ))
            : (!empReqTime[_0x4cf317(0x208)](
                (_0x4c52f0) => _0x4c52f0[_0x4cf317(0x17d)] === _0x2b8998,
              ) && empReqUrl[_0x4cf317(0x107)]({ input: _0x2b8998 }),
              unfilledArr[_0x4cf317(0x107)]({
                input: $(this)[_0x4cf317(0x150)](_0x4cf317(0x16e)),
              })),
            empReqTime["length"] === 0x0 &&
            validateURL($(this)[_0x4cf317(0x176)]())
              ? ((timeFilled = !![]), console["log"](timeFilled))
              : (timeFilled = ![]);
        }),
      $(steps[x])
        [_0x15c59c(0x208)](_0x15c59c(0x1c4))
        [_0x15c59c(0x1d7)](function (_0x6926db) {
          const _0x2bdbeb = _0x15c59c;
          let _0x5d1850 = $(this)[_0x2bdbeb(0x176)]()["length"],
            _0x45b7b3 = $(this)[_0x2bdbeb(0x1c7)](_0x2bdbeb(0x117))
              ? $(this)[_0x2bdbeb(0x1c7)](_0x2bdbeb(0x117))
              : 0x0;
          $(this)[_0x2bdbeb(0x176)]() !== "" && _0x5d1850 >= _0x45b7b3
            ? (empReqUrl = empReqUrl[_0x2bdbeb(0x166)](
                (_0xf7a21f) => _0xf7a21f["input"] !== _0x6926db,
              ))
            : (!empReqUrl["find"](
                (_0x558a6b) => _0x558a6b[_0x2bdbeb(0x17d)] === _0x6926db,
              ) && empReqUrl["push"]({ input: _0x6926db }),
              unfilledArr[_0x2bdbeb(0x107)]({
                input: $(this)[_0x2bdbeb(0x150)]("name"),
              })),
            empReqUrl["length"] === 0x0 &&
            validateURL($(this)[_0x2bdbeb(0x176)]())
              ? ((urlFilled = !![]), console[_0x2bdbeb(0x100)](urlFilled))
              : (urlFilled = ![]);
        }),
      $(steps[x])
        [_0x15c59c(0x208)](_0x15c59c(0x206))
        ["each"](function (_0x3b025e) {
          const _0x253cee = _0x15c59c;
          $(this)[_0x253cee(0x176)]() !== ""
            ? (empReqDate = empReqDate["filter"](
                (_0x2f5f9d) => _0x2f5f9d[_0x253cee(0x17d)] !== _0x3b025e,
              ))
            : (!empReqDate["find"](
                (_0x3d44c5) => _0x3d44c5[_0x253cee(0x17d)] === _0x3b025e,
              ) && empReqDate[_0x253cee(0x107)]({ input: _0x3b025e }),
              unfilledArr[_0x253cee(0x107)]({
                input: $(this)["attr"](_0x253cee(0x16e)),
              })),
            empReqDate["length"] === 0x0
              ? (dateFilled = !![])
              : (dateFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x15c59c(0x178))
        ["each"](function (_0x5ed15d) {
          const _0x3012fb = _0x15c59c;
          if ($(this)[_0x3012fb(0x176)]() !== "") {
            let _0x502684 = $(this)[_0x3012fb(0x176)]()[_0x3012fb(0x1e5)],
              _0x2a9047 = $(this)[_0x3012fb(0x1c7)](_0x3012fb(0x117))
                ? $(this)[_0x3012fb(0x1c7)](_0x3012fb(0x117))
                : 0x0;
            if ($(this)[_0x3012fb(0x1c7)](_0x3012fb(0x20b))) {
              var _0x3c29de = phoneAutoFormat(
                $(this)[_0x3012fb(0x1c7)](_0x3012fb(0x20b)),
              );
              $(this)["val"](_0x3c29de($(this)[_0x3012fb(0x176)]()));
            }
            phoneValidation($(this)[_0x3012fb(0x176)](), _0x502684, _0x2a9047)
              ? (empReqTel = empReqTel[_0x3012fb(0x166)](
                  (_0x5ccdfc) => _0x5ccdfc[_0x3012fb(0x17d)] !== _0x5ed15d,
                ))
              : empReqTel[_0x3012fb(0x107)]({ input: _0x5ed15d });
          } else
            !empReqTel[_0x3012fb(0x208)](
              (_0x2b2526) => _0x2b2526[_0x3012fb(0x17d)] === _0x5ed15d,
            ) && empReqTel[_0x3012fb(0x107)]({ input: _0x5ed15d }),
              unfilledArr[_0x3012fb(0x107)]({
                input: $(this)[_0x3012fb(0x150)](_0x3012fb(0x16e)),
              });
          empReqTel[_0x3012fb(0x1e5)] === 0x0
            ? (telFilled = !![])
            : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x15c59c(0x208)](_0x15c59c(0x215))
        [_0x15c59c(0x1d7)](function (_0x58de50) {
          const _0x59f6f1 = _0x15c59c;
          $(this)[_0x59f6f1(0x176)]() !== ""
            ? (empReqFile = empReqFile[_0x59f6f1(0x166)](
                (_0x40a7fe) => _0x40a7fe["input"] !== _0x58de50,
              ))
            : (!empReqFile[_0x59f6f1(0x208)](
                (_0x22bba2) => _0x22bba2["input"] === _0x58de50,
              ) && empReqFile["push"]({ input: _0x58de50 }),
              unfilledArr["push"]({
                input: $(this)[_0x59f6f1(0x150)](_0x59f6f1(0x16e)),
              })),
            empReqFile[_0x59f6f1(0x1e5)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x15c59c(0x208)](_0x15c59c(0x1fd))
        [_0x15c59c(0x1d7)](function (_0x257757) {
          const _0x3f7ec5 = _0x15c59c;
          let _0x348511 = $(this)["val"]()[_0x3f7ec5(0x1e5)],
            _0xfb66b = $(this)["data"]("min-character")
              ? $(this)[_0x3f7ec5(0x1c7)](_0x3f7ec5(0x117))
              : 0x0;
          $(this)[_0x3f7ec5(0x176)]() !== "" && _0x348511 >= _0xfb66b
            ? (empReqNum = empReqNum[_0x3f7ec5(0x166)](
                (_0x11ddbf) => _0x11ddbf[_0x3f7ec5(0x17d)] !== _0x257757,
              ))
            : (!empReqNum[_0x3f7ec5(0x208)](
                (_0x48ddad) => _0x48ddad[_0x3f7ec5(0x17d)] === _0x257757,
              ) && empReqNum[_0x3f7ec5(0x107)]({ input: _0x257757 }),
              unfilledArr[_0x3f7ec5(0x107)]({
                input: $(this)[_0x3f7ec5(0x150)](_0x3f7ec5(0x16e)),
              })),
            empReqNum[_0x3f7ec5(0x1e5)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x15c59c(0x1a7))
        ["each"](function (_0x53d54e) {
          const _0x51ae35 = _0x15c59c;
          let _0x304ccb = $(this)["val"]();
          _0x304ccb === "" && (_0x304ccb = null),
            _0x304ccb != null
              ? (empReqSelect = empReqSelect["filter"](
                  (_0x47cb4e) => _0x47cb4e[_0x51ae35(0x17d)] !== _0x53d54e,
                ))
              : (!empReqSelect[_0x51ae35(0x208)](
                  (_0x3b4a75) => _0x3b4a75[_0x51ae35(0x17d)] === _0x53d54e,
                ) && empReqSelect[_0x51ae35(0x107)]({ input: _0x53d54e }),
                unfilledArr["push"]({
                  input: $(this)[_0x51ae35(0x150)](_0x51ae35(0x16e)),
                })),
            empReqSelect[_0x51ae35(0x1e5)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x15c59c(0x208)](_0x15c59c(0x1a9))
        [_0x15c59c(0x1d7)](function (_0x505beb) {
          const _0x1736e4 = _0x15c59c;
          let _0xf0dee9 = $(this)["val"]()["length"],
            _0x33b414 = $(this)[_0x1736e4(0x1c7)](_0x1736e4(0x117))
              ? $(this)["data"](_0x1736e4(0x117))
              : 0x0;
          $(this)[_0x1736e4(0x176)]() !== "" && _0xf0dee9 >= _0x33b414
            ? (empReqTextarea = empReqTextarea[_0x1736e4(0x166)](
                (_0x1a603f) => _0x1a603f[_0x1736e4(0x17d)] !== _0x505beb,
              ))
            : (!empReqTextarea[_0x1736e4(0x208)](
                (_0x717514) => _0x717514[_0x1736e4(0x17d)] === _0x505beb,
              ) && empReqTextarea[_0x1736e4(0x107)]({ input: _0x505beb }),
              unfilledArr[_0x1736e4(0x107)]({
                input: $(this)[_0x1736e4(0x150)](_0x1736e4(0x16e)),
              })),
            empReqTextarea[_0x1736e4(0x1e5)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x15c59c(0x208)](_0x15c59c(0x1c2))
        [_0x15c59c(0x1d7)](function () {
          const _0x419b2d = _0x15c59c;
          $(this)[_0x419b2d(0x176)]() !== ""
            ? validateEmail(
                $(this)[_0x419b2d(0x176)](),
                $(this)["data"]("block-domain"),
                $(this)[_0x419b2d(0x150)](_0x419b2d(0x16e)),
              )
            : ((emailFilled = ![]),
              unfilledArr[_0x419b2d(0x107)]({
                input: $(this)[_0x419b2d(0x150)]("name"),
              }));
        });
  else {
    if ($(steps[x])["data"](_0x15c59c(0x258)))
      (answer = $(steps[x])
        [_0x15c59c(0x208)](_0x15c59c(0x240))
        [_0x15c59c(0x1c7)](_0x15c59c(0x21f))),
        (selections = selections[_0x15c59c(0x166)](
          (_0x1ee2ec) => _0x1ee2ec["step"] !== x,
        )),
        selections[_0x15c59c(0x107)]({ step: x, selected: answer });
    else
      $(steps[x])[_0x15c59c(0x208)](".active-answer-card")["data"]("card") &&
        ((answer = $(steps[x])
          [_0x15c59c(0x208)](_0x15c59c(0x19f))
          [_0x15c59c(0x1c7)](_0x15c59c(0x21f))),
        (selections = selections["filter"](
          (_0x2e4eca) => _0x2e4eca[_0x15c59c(0x196)] !== x,
        )),
        selections["push"]({ step: x, selected: answer }));
    $(steps[x])
      [_0x15c59c(0x208)](_0x15c59c(0x19f))
      [_0x15c59c(0x208)](_0x15c59c(0x224))
      ["is"](_0x15c59c(0x164)) &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])[_0x15c59c(0x208)](_0x15c59c(0x109))[_0x15c59c(0x1e5)]
        ? (console[_0x15c59c(0x100)]("test"),
          $(steps[x])
            [_0x15c59c(0x208)](_0x15c59c(0x109))
            [_0x15c59c(0x1d7)](function () {
              const _0x3b2a16 = _0x15c59c;
              $(this)["is"](":checked")
                ? $(steps[x])[_0x3b2a16(0x208)](_0x3b2a16(0x165))[
                    _0x3b2a16(0x1e5)
                  ] < 0x1 &&
                  ((skipTo = undefined),
                  $(this)
                    [_0x3b2a16(0x1a4)](_0x3b2a16(0x1b0))
                    [_0x3b2a16(0x1c7)](_0x3b2a16(0x1bf)) &&
                    (skipTo = $(this)
                      ["parents"](_0x3b2a16(0x1b0))
                      [_0x3b2a16(0x1c7)]("skip-to")),
                  $(this)
                    ["parents"]("[data-go-to]")
                    ["attr"](_0x3b2a16(0x202)) &&
                    ((answer = $(this)
                      [_0x3b2a16(0x1a4)]("[data-go-to]")
                      ["attr"](_0x3b2a16(0x202))),
                    (selections = selections[_0x3b2a16(0x166)](
                      (_0x2ae6a7) => _0x2ae6a7["step"] !== x,
                    )),
                    selections[_0x3b2a16(0x107)]({ step: x, selected: answer }),
                    skipTo &&
                      (selections[_0x3b2a16(0x107)]({
                        step: skipTo - 0x2,
                        selected: answer,
                      }),
                      (objIndex = selections["findIndex"](
                        (_0x2f9aa6) => _0x2f9aa6[_0x3b2a16(0x196)] === x,
                      )),
                      (selections[objIndex][_0x3b2a16(0x104)] =
                        parseInt(skipTo) - 0x1),
                      (selections[objIndex][_0x3b2a16(0x19e)] = x))),
                  (checkboxFilled = !![]),
                  $(steps[x])[_0x3b2a16(0x208)](_0x3b2a16(0x10b))[
                    _0x3b2a16(0x1e5)
                  ] >=
                    $(steps[x])[_0x3b2a16(0x208)](_0x3b2a16(0x1c9))[
                      _0x3b2a16(0x1e5)
                    ] &&
                    resetInputErrorMessage(
                      $(steps[x])
                        [_0x3b2a16(0x208)](_0x3b2a16(0x109))
                        [_0x3b2a16(0x150)](_0x3b2a16(0x16e)),
                    ))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0x3b2a16(0x107)]({
                    input: $(this)[_0x3b2a16(0x150)](_0x3b2a16(0x16e)),
                  }));
            }))
        : $(steps[x])
              [_0x15c59c(0x208)](_0x15c59c(0x19f))
              ["find"](_0x15c59c(0x1b6))[_0x15c59c(0x1e5)] >= checkCount
          ? ($(steps[x])
              [_0x15c59c(0x208)](".active-answer-card")
              [_0x15c59c(0x208)](":input[type=\x22checkbox\x22]")
              [_0x15c59c(0x1a4)]("[data-go-to]")
              ["attr"](_0x15c59c(0x202)) &&
              ((skipTo = undefined),
              $(steps[x])
                [_0x15c59c(0x208)](_0x15c59c(0x19f))
                [_0x15c59c(0x208)](_0x15c59c(0x109))
                [_0x15c59c(0x1a4)]("[data-skip-to]")
                [_0x15c59c(0x150)](_0x15c59c(0x102)) &&
                (skipTo = $(steps[x])
                  ["find"](_0x15c59c(0x19f))
                  ["find"](_0x15c59c(0x1b6))
                  [_0x15c59c(0x1a4)](_0x15c59c(0x1b0))
                  [_0x15c59c(0x150)](_0x15c59c(0x102))),
              (answer = $(steps[x])
                [_0x15c59c(0x208)](_0x15c59c(0x19f))
                ["find"](_0x15c59c(0x109))
                [_0x15c59c(0x1a4)](_0x15c59c(0x240))
                ["attr"](_0x15c59c(0x202))),
              (selections = selections[_0x15c59c(0x166)](
                (_0x58a694) => _0x58a694[_0x15c59c(0x196)] !== x,
              )),
              selections[_0x15c59c(0x107)]({ step: x, selected: answer }),
              skipTo &&
                ((selections = selections["filter"](
                  (_0x4f2fbf) => _0x4f2fbf[_0x15c59c(0x196)] !== skipTo - 0x2,
                )),
                selections[_0x15c59c(0x107)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x4adfd1) => _0x4adfd1[_0x15c59c(0x196)] === x,
                )),
                console[_0x15c59c(0x100)](objIndex),
                (selections[objIndex][_0x15c59c(0x104)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x),
                console["log"](_0x15c59c(0x163)))),
            (checkboxFilled = !![]),
            $(steps[x])[_0x15c59c(0x208)](_0x15c59c(0x10b))[_0x15c59c(0x1e5)] >=
              $(steps[x])["find"](":input[type=\x22checkbox\x22][required]")[
                _0x15c59c(0x1e5)
              ] &&
              resetInputErrorMessage(
                $(steps[x])
                  [_0x15c59c(0x208)](_0x15c59c(0x109))
                  [_0x15c59c(0x150)]("name"),
              ))
          : ((checkboxFilled = ![]),
            $(steps[x])
              ["find"](_0x15c59c(0x1c9))
              [_0x15c59c(0x1d7)](function () {
                const _0x2b82b1 = _0x15c59c;
                $(this)[_0x2b82b1(0x1db)](_0x2b82b1(0x14e)) &&
                  unfilledArr["push"]({
                    input: $(this)[_0x2b82b1(0x150)](_0x2b82b1(0x16e)),
                  });
              }))),
      $(steps[x])
        [_0x15c59c(0x208)](_0x15c59c(0x19f))
        [_0x15c59c(0x208)]("input:radio[required]")
        [_0x15c59c(0x1d7)](function (_0x2caf80) {
          const _0x23deee = _0x15c59c;
          var _0x43b8df = $(this)[_0x23deee(0x150)](_0x23deee(0x16e));
          $(_0x23deee(0x216) + _0x43b8df + _0x23deee(0x18d))[
            _0x23deee(0x1e5)
          ] == 0x0
            ? (!empReqRadio["find"](
                (_0xdcd06c) => _0xdcd06c[_0x23deee(0x17d)] === _0x2caf80,
              ) && empReqRadio[_0x23deee(0x107)]({ input: _0x2caf80 }),
              unfilledArr[_0x23deee(0x107)]({
                input: $(this)[_0x23deee(0x150)](_0x23deee(0x16e)),
              }))
            : (empReqRadio = empReqRadio["filter"](
                (_0xdcb189) => _0xdcb189["input"] !== _0x2caf80,
              )),
            empReqRadio[_0x23deee(0x1e5)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0x15c59c(0x208)](_0x15c59c(0x19f))
        [_0x15c59c(0x208)](_0x15c59c(0x20d))
        [_0x15c59c(0x1d7)](function (_0x5d3962) {
          const _0xd9a710 = _0x15c59c;
          let _0x17ccbd = $(this)[_0xd9a710(0x176)]()[_0xd9a710(0x1e5)],
            _0x286f3d = $(this)[_0xd9a710(0x1c7)]("min-character")
              ? $(this)[_0xd9a710(0x1c7)]("min-character")
              : 0x0;
          $(this)[_0xd9a710(0x176)]() !== "" && _0x17ccbd >= _0x286f3d
            ? (empReqInput = empReqInput["filter"](
                (_0x57fe16) => _0x57fe16[_0xd9a710(0x17d)] !== _0x5d3962,
              ))
            : (!empReqInput[_0xd9a710(0x208)](
                (_0x4ed6ce) => _0x4ed6ce[_0xd9a710(0x17d)] === _0x5d3962,
              ) && empReqInput["push"]({ input: _0x5d3962 }),
              unfilledArr[_0xd9a710(0x107)]({
                input: $(this)[_0xd9a710(0x150)]("name"),
              })),
            empReqInput[_0xd9a710(0x1e5)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x15c59c(0x208)](".active-answer-card")
        [_0x15c59c(0x208)](_0x15c59c(0x23e))
        [_0x15c59c(0x1d7)](function (_0xce2ee6) {
          const _0x45127c = _0x15c59c;
          (skipTo = undefined),
            $(this)
              [_0x45127c(0x1a4)](_0x45127c(0x1b0))
              ["data"](_0x45127c(0x1bf)) !== "" &&
              (skipTo = $(this)
                [_0x45127c(0x1a4)]("[data-skip-to]")
                [_0x45127c(0x1c7)](_0x45127c(0x1bf))),
            $(this)
              [_0x45127c(0x1a4)](_0x45127c(0x240))
              [_0x45127c(0x150)]("data-go-to") &&
              ((answer = $(this)
                [_0x45127c(0x1a4)](_0x45127c(0x240))
                [_0x45127c(0x150)](_0x45127c(0x202))),
              (selections = selections[_0x45127c(0x166)](
                (_0x1d8a16) => _0x1d8a16[_0x45127c(0x196)] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x45127c(0x107)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x45127c(0x137)](
                  (_0x310757) => _0x310757[_0x45127c(0x196)] === x,
                )),
                (selections[objIndex][_0x45127c(0x104)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x45127c(0x19e)] = x)));
        }),
      $(steps[x])
        [_0x15c59c(0x208)](_0x15c59c(0x19f))
        [_0x15c59c(0x208)](":input[type=\x22password\x22][required]")
        [_0x15c59c(0x1d7)](function (_0x5278bc) {
          const _0x21895a = _0x15c59c;
          let _0x408ccf = $(this)[_0x21895a(0x176)]()[_0x21895a(0x1e5)],
            _0x473369 = $(this)["data"](_0x21895a(0x117))
              ? $(this)[_0x21895a(0x1c7)](_0x21895a(0x117))
              : 0x0;
          $(this)[_0x21895a(0x176)]() !== "" && _0x408ccf >= _0x473369
            ? (empReqPassword = empReqPassword[_0x21895a(0x166)](
                (_0x325959) => _0x325959["input"] !== _0x5278bc,
              ))
            : (!empReqPassword[_0x21895a(0x208)](
                (_0x11d588) => _0x11d588[_0x21895a(0x17d)] === _0x5278bc,
              ) && empReqPassword["push"]({ input: _0x5278bc }),
              unfilledArr[_0x21895a(0x107)]({
                input: $(this)[_0x21895a(0x150)](_0x21895a(0x16e)),
              })),
            empReqPassword["length"] === 0x0
              ? (passwordFilled = !![])
              : (passwordFilled = ![]);
        }),
      $(steps[x])
        ["find"](".active-answer-card")
        [_0x15c59c(0x208)](_0x15c59c(0x211))
        ["each"](function (_0x27518c) {
          const _0x3c806e = _0x15c59c;
          (skipTo = undefined),
            $(this)
              [_0x3c806e(0x1a4)](_0x3c806e(0x1b0))
              ["data"](_0x3c806e(0x1bf)) !== "" &&
              (skipTo = $(this)
                [_0x3c806e(0x1a4)](_0x3c806e(0x1b0))
                [_0x3c806e(0x1c7)]("skip-to")),
            $(this)
              ["parents"](_0x3c806e(0x240))
              [_0x3c806e(0x150)](_0x3c806e(0x202)) &&
              ((answer = $(this)
                ["parents"](_0x3c806e(0x240))
                [_0x3c806e(0x150)](_0x3c806e(0x202))),
              (selections = selections[_0x3c806e(0x166)](
                (_0x17dc11) => _0x17dc11["step"] !== x,
              )),
              selections[_0x3c806e(0x107)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x3c806e(0x107)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x3c806e(0x137)](
                  (_0x57062f) => _0x57062f[_0x3c806e(0x196)] === x,
                )),
                (selections[objIndex][_0x3c806e(0x104)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x3c806e(0x19e)] = x)));
        }),
      $(steps[x])
        [_0x15c59c(0x208)](_0x15c59c(0x19f))
        [_0x15c59c(0x208)](_0x15c59c(0x1da))
        ["each"](function (_0x22a720) {
          const _0x11e248 = _0x15c59c;
          let _0x23394c = $(this)[_0x11e248(0x176)]()["length"],
            _0x33046a = $(this)[_0x11e248(0x1c7)](_0x11e248(0x117))
              ? $(this)[_0x11e248(0x1c7)](_0x11e248(0x117))
              : 0x0;
          $(this)["val"]() !== "" && _0x23394c >= _0x33046a
            ? (empReqUrl = empReqUrl[_0x11e248(0x166)](
                (_0x1d4374) => _0x1d4374[_0x11e248(0x17d)] !== _0x22a720,
              ))
            : (!empReqUrl[_0x11e248(0x208)](
                (_0x2547dd) => _0x2547dd[_0x11e248(0x17d)] === _0x22a720,
              ) && empReqUrl[_0x11e248(0x107)]({ input: _0x22a720 }),
              unfilledArr[_0x11e248(0x107)]({
                input: $(this)[_0x11e248(0x150)](_0x11e248(0x16e)),
              })),
            empReqUrl[_0x11e248(0x1e5)] === 0x0 && validateURL($(this)["val"]())
              ? (urlFilled = !![])
              : (urlFilled = ![]);
        }),
      $(steps[x])
        ["find"](".active-answer-card")
        [_0x15c59c(0x208)](":input[type=\x22url\x22]")
        [_0x15c59c(0x1d7)](function (_0x281320) {
          const _0x804383 = _0x15c59c;
          (skipTo = undefined),
            $(this)
              [_0x804383(0x1a4)](_0x804383(0x1b0))
              [_0x804383(0x1c7)]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0x804383(0x1a4)](_0x804383(0x1b0))
                ["data"](_0x804383(0x1bf))),
            $(this)
              [_0x804383(0x1a4)]("[data-go-to]")
              [_0x804383(0x150)](_0x804383(0x202)) &&
              ((answer = $(this)
                [_0x804383(0x1a4)](_0x804383(0x240))
                [_0x804383(0x150)]("data-go-to")),
              (selections = selections[_0x804383(0x166)](
                (_0x344b20) => _0x344b20["step"] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections["findIndex"](
                  (_0x3e81bc) => _0x3e81bc[_0x804383(0x196)] === x,
                )),
                (selections[objIndex][_0x804383(0x104)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x804383(0x19e)] = x)));
        }),
      $(steps[x])
        [_0x15c59c(0x208)](_0x15c59c(0x19f))
        [_0x15c59c(0x208)](_0x15c59c(0x206))
        [_0x15c59c(0x1d7)](function (_0x3eba3d) {
          const _0x49c75f = _0x15c59c;
          $(this)["val"]() !== ""
            ? (empReqDate = empReqDate["filter"](
                (_0xb2bcc5) => _0xb2bcc5[_0x49c75f(0x17d)] !== _0x3eba3d,
              ))
            : (!empReqDate[_0x49c75f(0x208)](
                (_0x10345e) => _0x10345e[_0x49c75f(0x17d)] === _0x3eba3d,
              ) && empReqDate[_0x49c75f(0x107)]({ input: _0x3eba3d }),
              unfilledArr[_0x49c75f(0x107)]({
                input: $(this)[_0x49c75f(0x150)](_0x49c75f(0x16e)),
              })),
            empReqDate[_0x49c75f(0x1e5)] === 0x0
              ? (dateFilled = !![])
              : (dateFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x15c59c(0x19f))
        [_0x15c59c(0x208)](_0x15c59c(0x203))
        ["each"](function (_0x191ea2) {
          const _0x3c8b66 = _0x15c59c;
          (skipTo = undefined),
            $(this)
              ["parents"]("[data-skip-to]")
              [_0x3c8b66(0x1c7)](_0x3c8b66(0x1bf)) !== "" &&
              (skipTo = $(this)
                [_0x3c8b66(0x1a4)]("[data-skip-to]")
                ["data"](_0x3c8b66(0x1bf))),
            $(this)
              [_0x3c8b66(0x1a4)](_0x3c8b66(0x240))
              [_0x3c8b66(0x150)](_0x3c8b66(0x202)) &&
              ((answer = $(this)
                ["parents"]("[data-go-to]")
                [_0x3c8b66(0x150)](_0x3c8b66(0x202))),
              (selections = selections[_0x3c8b66(0x166)](
                (_0x5d66b8) => _0x5d66b8[_0x3c8b66(0x196)] !== x,
              )),
              selections[_0x3c8b66(0x107)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x3c8b66(0x107)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x3c8b66(0x137)](
                  (_0x45ec45) => _0x45ec45[_0x3c8b66(0x196)] === x,
                )),
                (selections[objIndex][_0x3c8b66(0x104)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        ["find"](".active-answer-card")
        [_0x15c59c(0x208)](_0x15c59c(0x1c4))
        [_0x15c59c(0x1d7)](function (_0x1cbb64) {
          const _0x451e13 = _0x15c59c;
          $(this)["val"]() !== ""
            ? (empReqTime = empReqTime[_0x451e13(0x166)](
                (_0x200cf6) => _0x200cf6["input"] !== _0x1cbb64,
              ))
            : (!empReqTime["find"](
                (_0x1ed091) => _0x1ed091[_0x451e13(0x17d)] === _0x1cbb64,
              ) && empReqTime[_0x451e13(0x107)]({ input: _0x1cbb64 }),
              unfilledArr[_0x451e13(0x107)]({
                input: $(this)[_0x451e13(0x150)]("name"),
              })),
            empReqTime[_0x451e13(0x1e5)] === 0x0
              ? (timeFilled = !![])
              : (timeFilled = ![]);
        }),
      $(steps[x])
        [_0x15c59c(0x208)](_0x15c59c(0x19f))
        ["find"](":input[type=\x22time\x22]")
        ["each"](function (_0x42980b) {
          const _0x4cdc05 = _0x15c59c;
          (skipTo = undefined),
            $(this)
              [_0x4cdc05(0x1a4)](_0x4cdc05(0x1b0))
              [_0x4cdc05(0x1c7)](_0x4cdc05(0x1bf)) !== "" &&
              (skipTo = $(this)
                [_0x4cdc05(0x1a4)](_0x4cdc05(0x1b0))
                [_0x4cdc05(0x1c7)](_0x4cdc05(0x1bf))),
            $(this)
              [_0x4cdc05(0x1a4)](_0x4cdc05(0x240))
              ["attr"](_0x4cdc05(0x202)) &&
              ((answer = $(this)
                [_0x4cdc05(0x1a4)](_0x4cdc05(0x240))
                [_0x4cdc05(0x150)](_0x4cdc05(0x202))),
              (selections = selections[_0x4cdc05(0x166)](
                (_0x142c0a) => _0x142c0a[_0x4cdc05(0x196)] !== x,
              )),
              selections[_0x4cdc05(0x107)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x4cdc05(0x107)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x4cdc05(0x137)](
                  (_0x1bb71e) => _0x1bb71e["step"] === x,
                )),
                (selections[objIndex][_0x4cdc05(0x104)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x4cdc05(0x19e)] = x)));
        }),
      $(steps[x])
        ["find"](_0x15c59c(0x19f))
        ["find"](_0x15c59c(0x1fd))
        [_0x15c59c(0x1d7)](function (_0x7b983) {
          const _0x238f34 = _0x15c59c;
          let _0x21cebf = $(this)[_0x238f34(0x176)]()[_0x238f34(0x1e5)],
            _0x21dc73 = $(this)[_0x238f34(0x1c7)](_0x238f34(0x117))
              ? $(this)[_0x238f34(0x1c7)](_0x238f34(0x117))
              : 0x0;
          $(this)[_0x238f34(0x176)]() !== "" && _0x21cebf >= _0x21dc73
            ? (empReqNum = empReqNum[_0x238f34(0x166)](
                (_0x9abe2e) => _0x9abe2e["input"] !== _0x7b983,
              ))
            : (!empReqNum[_0x238f34(0x208)](
                (_0x52e3c5) => _0x52e3c5[_0x238f34(0x17d)] === _0x7b983,
              ) && empReqNum[_0x238f34(0x107)]({ input: _0x7b983 }),
              unfilledArr["push"]({
                input: $(this)["attr"](_0x238f34(0x16e)),
              })),
            empReqNum[_0x238f34(0x1e5)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x15c59c(0x208)](_0x15c59c(0x19f))
        [_0x15c59c(0x208)](_0x15c59c(0x1af))
        [_0x15c59c(0x1d7)](function (_0x2fbf3a) {
          const _0x2b1d47 = _0x15c59c;
          (skipTo = undefined),
            $(this)
              ["parents"](_0x2b1d47(0x1b0))
              [_0x2b1d47(0x1c7)](_0x2b1d47(0x1bf)) !== "" &&
              (skipTo = $(this)
                [_0x2b1d47(0x1a4)](_0x2b1d47(0x1b0))
                [_0x2b1d47(0x1c7)](_0x2b1d47(0x1bf))),
            $(this)
              [_0x2b1d47(0x1a4)](_0x2b1d47(0x240))
              [_0x2b1d47(0x150)](_0x2b1d47(0x202)) &&
              ((answer = $(this)
                ["parents"](_0x2b1d47(0x240))
                ["attr"](_0x2b1d47(0x202))),
              (selections = selections[_0x2b1d47(0x166)](
                (_0x5c2a27) => _0x5c2a27["step"] !== x,
              )),
              selections[_0x2b1d47(0x107)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x2b1d47(0x107)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x2b1d47(0x137)](
                  (_0x22a537) => _0x22a537[_0x2b1d47(0x196)] === x,
                )),
                (selections[objIndex][_0x2b1d47(0x104)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x2b1d47(0x19e)] = x)));
        }),
      $(steps[x])
        [_0x15c59c(0x208)](".active-answer-card")
        [_0x15c59c(0x208)](_0x15c59c(0x178))
        [_0x15c59c(0x1d7)](function (_0x4c1233) {
          const _0x2a61dc = _0x15c59c;
          if ($(this)[_0x2a61dc(0x176)]() !== "") {
            let _0x5d9077 = $(this)[_0x2a61dc(0x176)]()["length"],
              _0x1f5c7b = $(this)["data"](_0x2a61dc(0x117))
                ? $(this)["data"](_0x2a61dc(0x117))
                : 0x0;
            if ($(this)[_0x2a61dc(0x1c7)]("phone-autoformat")) {
              var _0x209b0e = phoneAutoFormat(
                $(this)[_0x2a61dc(0x1c7)](_0x2a61dc(0x20b)),
              );
              $(this)["val"](_0x209b0e($(this)[_0x2a61dc(0x176)]()));
            }
            phoneValidation($(this)[_0x2a61dc(0x176)](), _0x5d9077, _0x1f5c7b)
              ? (empReqTel = empReqTel[_0x2a61dc(0x166)](
                  (_0x5dabcb) => _0x5dabcb[_0x2a61dc(0x17d)] !== _0x4c1233,
                ))
              : empReqTel["push"]({ input: _0x4c1233 });
          } else
            !empReqTel["find"](
              (_0x56c554) => _0x56c554[_0x2a61dc(0x17d)] === _0x4c1233,
            ) && empReqTel[_0x2a61dc(0x107)]({ input: _0x4c1233 }),
              unfilledArr[_0x2a61dc(0x107)]({
                input: $(this)[_0x2a61dc(0x150)](_0x2a61dc(0x16e)),
              });
          empReqTel[_0x2a61dc(0x1e5)] === 0x0
            ? (telFilled = !![])
            : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x15c59c(0x208)](_0x15c59c(0x19f))
        [_0x15c59c(0x208)](_0x15c59c(0x187))
        ["each"](function (_0x19aa73) {
          const _0x19ddfc = _0x15c59c;
          (skipTo = undefined),
            $(this)["parents"]("[data-skip-to]")["data"]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0x19ddfc(0x1a4)](_0x19ddfc(0x1b0))
                ["data"](_0x19ddfc(0x1bf))),
            $(this)
              ["parents"](_0x19ddfc(0x240))
              [_0x19ddfc(0x150)](_0x19ddfc(0x202)) &&
              ((answer = $(this)
                [_0x19ddfc(0x1a4)](_0x19ddfc(0x240))
                [_0x19ddfc(0x150)](_0x19ddfc(0x202))),
              (selections = selections[_0x19ddfc(0x166)](
                (_0x384004) => _0x384004["step"] !== x,
              )),
              selections[_0x19ddfc(0x107)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x19ddfc(0x107)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x19ddfc(0x137)](
                  (_0x1a40bf) => _0x1a40bf[_0x19ddfc(0x196)] === x,
                )),
                (selections[objIndex][_0x19ddfc(0x104)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x15c59c(0x208)](_0x15c59c(0x19f))
        ["find"](_0x15c59c(0x215))
        ["each"](function (_0x568f5f) {
          const _0x2f07f3 = _0x15c59c;
          $(this)[_0x2f07f3(0x176)]() !== ""
            ? (empReqFile = empReqFile[_0x2f07f3(0x166)](
                (_0x169ed6) => _0x169ed6[_0x2f07f3(0x17d)] !== _0x568f5f,
              ))
            : (!empReqFile["find"](
                (_0x4e9e2f) => _0x4e9e2f[_0x2f07f3(0x17d)] === _0x568f5f,
              ) && empReqFile[_0x2f07f3(0x107)]({ input: _0x568f5f }),
              unfilledArr[_0x2f07f3(0x107)]({
                input: $(this)[_0x2f07f3(0x150)]("name"),
              })),
            empReqFile["length"] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x15c59c(0x208)](".active-answer-card")
        [_0x15c59c(0x208)](_0x15c59c(0x16b))
        [_0x15c59c(0x1d7)](function (_0x2588b5) {
          const _0x483dc4 = _0x15c59c;
          (skipTo = undefined),
            $(this)
              [_0x483dc4(0x1a4)](_0x483dc4(0x1b0))
              [_0x483dc4(0x1c7)]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0x483dc4(0x1a4)](_0x483dc4(0x1b0))
                ["data"](_0x483dc4(0x1bf))),
            $(this)
              [_0x483dc4(0x1a4)](_0x483dc4(0x240))
              [_0x483dc4(0x150)]("data-go-to") &&
              ((answer = $(this)
                [_0x483dc4(0x1a4)](_0x483dc4(0x240))
                [_0x483dc4(0x150)](_0x483dc4(0x202))),
              (selections = selections[_0x483dc4(0x166)](
                (_0x591c00) => _0x591c00[_0x483dc4(0x196)] !== x,
              )),
              selections[_0x483dc4(0x107)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x483dc4(0x107)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x483dc4(0x137)](
                  (_0x5d3406) => _0x5d3406[_0x483dc4(0x196)] === x,
                )),
                (selections[objIndex][_0x483dc4(0x104)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x483dc4(0x19e)] = x)));
        }),
      $(steps[x])
        [_0x15c59c(0x208)](_0x15c59c(0x19f))
        ["find"](_0x15c59c(0x1a7))
        [_0x15c59c(0x1d7)](function (_0x3a0c21) {
          const _0x599499 = _0x15c59c;
          console[_0x599499(0x100)]($(this)[_0x599499(0x176)]()),
            $(this)[_0x599499(0x176)]() !== null && $(this)["val"]() !== ""
              ? (empReqSelect = empReqSelect[_0x599499(0x166)](
                  (_0x16aea4) => _0x16aea4[_0x599499(0x17d)] !== _0x3a0c21,
                ))
              : (!empReqSelect["find"](
                  (_0x10db3c) => _0x10db3c[_0x599499(0x17d)] === _0x3a0c21,
                ) && empReqSelect[_0x599499(0x107)]({ input: _0x3a0c21 }),
                unfilledArr["push"]({
                  input: $(this)[_0x599499(0x150)](_0x599499(0x16e)),
                })),
            empReqSelect["length"] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x15c59c(0x208)](_0x15c59c(0x19f))
        [_0x15c59c(0x208)]("select")
        [_0x15c59c(0x1d7)](function (_0x415f26) {
          const _0x9e9894 = _0x15c59c;
          (skipTo = undefined),
            $(this)
              ["parents"](_0x9e9894(0x1b0))
              [_0x9e9894(0x1c7)](_0x9e9894(0x1bf)) !== "" &&
              (skipTo = $(this)
                [_0x9e9894(0x1a4)](_0x9e9894(0x1b0))
                ["data"](_0x9e9894(0x1bf))),
            $(this)["parents"](_0x9e9894(0x240))["attr"](_0x9e9894(0x202)) &&
              ((answer = $(this)
                [_0x9e9894(0x1a4)](_0x9e9894(0x240))
                [_0x9e9894(0x150)](_0x9e9894(0x202))),
              (selections = selections[_0x9e9894(0x166)](
                (_0x418a30) => _0x418a30[_0x9e9894(0x196)] !== x,
              )),
              selections[_0x9e9894(0x107)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x9e9894(0x107)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x9e9894(0x137)](
                  (_0x1e638a) => _0x1e638a["step"] === x,
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x9e9894(0x19e)] = x)));
        }),
      $(steps[x])
        [_0x15c59c(0x208)](_0x15c59c(0x19f))
        [_0x15c59c(0x208)](_0x15c59c(0x1a9))
        [_0x15c59c(0x1d7)](function (_0x83dd41) {
          const _0x87705c = _0x15c59c;
          let _0x28381e = $(this)[_0x87705c(0x176)]()[_0x87705c(0x1e5)],
            _0x359c7a = $(this)[_0x87705c(0x1c7)](_0x87705c(0x117))
              ? $(this)[_0x87705c(0x1c7)](_0x87705c(0x117))
              : 0x0;
          $(this)[_0x87705c(0x176)]() !== "" && _0x28381e >= _0x359c7a
            ? (empReqTextarea = empReqTextarea[_0x87705c(0x166)](
                (_0x211793) => _0x211793["input"] !== _0x83dd41,
              ))
            : (!empReqTextarea[_0x87705c(0x208)](
                (_0x39e55d) => _0x39e55d[_0x87705c(0x17d)] === _0x83dd41,
              ) && empReqTextarea[_0x87705c(0x107)]({ input: _0x83dd41 }),
              unfilledArr[_0x87705c(0x107)]({
                input: $(this)[_0x87705c(0x150)](_0x87705c(0x16e)),
              })),
            empReqTextarea["length"] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x15c59c(0x208)](_0x15c59c(0x19f))
        [_0x15c59c(0x208)](_0x15c59c(0x1ce))
        [_0x15c59c(0x1d7)](function (_0x353d64) {
          const _0x1fb7fd = _0x15c59c;
          (skipTo = undefined),
            $(this)
              [_0x1fb7fd(0x1a4)](_0x1fb7fd(0x1b0))
              [_0x1fb7fd(0x1c7)]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0x1fb7fd(0x1a4)](_0x1fb7fd(0x1b0))
                ["data"](_0x1fb7fd(0x1bf))),
            $(this)
              ["parents"](_0x1fb7fd(0x240))
              [_0x1fb7fd(0x150)](_0x1fb7fd(0x202)) &&
              ((answer = $(this)
                [_0x1fb7fd(0x1a4)](_0x1fb7fd(0x240))
                [_0x1fb7fd(0x150)](_0x1fb7fd(0x202))),
              (selections = selections[_0x1fb7fd(0x166)](
                (_0x4428df) => _0x4428df[_0x1fb7fd(0x196)] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x1fb7fd(0x107)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x1fb7fd(0x137)](
                  (_0x4a415f) => _0x4a415f["step"] === x,
                )),
                (selections[objIndex][_0x1fb7fd(0x104)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x15c59c(0x208)](_0x15c59c(0x19f))
        [_0x15c59c(0x208)](_0x15c59c(0x1c2))
        ["each"](function (_0x18bee0) {
          const _0x1fa448 = _0x15c59c;
          $(this)[_0x1fa448(0x176)]() !== ""
            ? validateEmail(
                $(this)[_0x1fa448(0x176)](),
                $(this)[_0x1fa448(0x1c7)](_0x1fa448(0x177)),
                $(this)[_0x1fa448(0x150)](_0x1fa448(0x16e)),
              )
            : ((emailFilled = ![]),
              unfilledArr[_0x1fa448(0x107)]({
                input: $(this)[_0x1fa448(0x150)](_0x1fa448(0x16e)),
              }));
        }),
      $(steps[x])
        [_0x15c59c(0x208)](_0x15c59c(0x19f))
        [_0x15c59c(0x208)](":input[type=\x22email\x22]")
        ["each"](function (_0xb878ed) {
          const _0x3f21d1 = _0x15c59c;
          (skipTo = undefined),
            $(this)
              [_0x3f21d1(0x1a4)]("[data-skip-to]")
              [_0x3f21d1(0x1c7)](_0x3f21d1(0x1bf)) !== "" &&
              (skipTo = $(this)
                ["parents"]("[data-skip-to]")
                [_0x3f21d1(0x1c7)](_0x3f21d1(0x1bf))),
            $(this)
              [_0x3f21d1(0x1a4)](_0x3f21d1(0x240))
              [_0x3f21d1(0x150)]("data-go-to") &&
              ((answer = $(this)
                ["parents"]("[data-go-to]")
                [_0x3f21d1(0x150)](_0x3f21d1(0x202))),
              (selections = selections["filter"](
                (_0x4d07a6) => _0x4d07a6[_0x3f21d1(0x196)] !== x,
              )),
              selections[_0x3f21d1(0x107)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x3f21d1(0x107)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x3f21d1(0x137)](
                  (_0x3cf16e) => _0x3cf16e[_0x3f21d1(0x196)] === x,
                )),
                (selections[objIndex][_0x3f21d1(0x104)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x3f21d1(0x19e)] = x)));
        });
  }
  $(steps[x])[_0x15c59c(0x208)](_0x15c59c(0x18c))["is"](_0x15c59c(0x14e)) &&
    ((selArr = []),
    $(steps)
      [_0x15c59c(0x208)](_0x15c59c(0x186))
      [_0x15c59c(0x1d7)](function (_0x1f8627, _0x45c969) {
        const _0x2ff099 = _0x15c59c;
        selArr[_0x2ff099(0x107)]({
          selected: $(this)[_0x2ff099(0x1c7)](_0x2ff099(0x174)),
        });
      }),
    (selString = []),
    selArr[_0x15c59c(0x13c)]((_0x53b2b5) =>
      selString["push"](_0x53b2b5[_0x15c59c(0x174)]),
    ),
    $(steps[x])
      [_0x15c59c(0x208)](".active-answer-card")
      [_0x15c59c(0x208)](":input[type=\x27radio\x27]:checked")
      [_0x15c59c(0x1d7)](function () {
        const _0x5cd0a5 = _0x15c59c;
        skipTo = undefined;
        if (
          $(this)
            [_0x5cd0a5(0x1a4)](_0x5cd0a5(0x1b0))
            [_0x5cd0a5(0x1c7)](_0x5cd0a5(0x1bf))
        )
          skipTo = $(this)
            ["parents"](_0x5cd0a5(0x1b0))
            [_0x5cd0a5(0x1c7)](_0x5cd0a5(0x1bf));
        else
          $(this)["data"]("skip-to") && (skipTo = $(this)["data"]("skip-to"));
        selections = selections[_0x5cd0a5(0x166)](
          (_0x189872) => _0x189872[_0x5cd0a5(0x196)] !== x,
        );
        if ($(this)[_0x5cd0a5(0x1c7)](_0x5cd0a5(0x21f)))
          (answer = $(this)[_0x5cd0a5(0x150)](_0x5cd0a5(0x202))),
            console[_0x5cd0a5(0x100)](answer, selections),
            selections[_0x5cd0a5(0x107)]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0x5cd0a5(0x107)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections["findIndex"](
                (_0x580e23) => _0x580e23["step"] === x,
              )),
              (selections[objIndex][_0x5cd0a5(0x104)] = parseInt(skipTo) - 0x1),
              (selections[objIndex]["backTo"] = x));
        else
          $(this)
            [_0x5cd0a5(0x1a4)](_0x5cd0a5(0x240))
            [_0x5cd0a5(0x1c7)]("go-to") &&
            ((answer = $(this)
              [_0x5cd0a5(0x1a4)](_0x5cd0a5(0x240))
              [_0x5cd0a5(0x1c7)](_0x5cd0a5(0x21f))),
            selections[_0x5cd0a5(0x107)]({ step: x, selected: answer }),
            skipTo &&
              (selections["push"]({ step: skipTo - 0x2, selected: answer }),
              (objIndex = selections[_0x5cd0a5(0x137)](
                (_0x9ba799) => _0x9ba799[_0x5cd0a5(0x196)] === x,
              )),
              (selections[objIndex][_0x5cd0a5(0x104)] = parseInt(skipTo) - 0x1),
              (selections[objIndex]["backTo"] = x)));
      }),
    logicExtra
      ? ($(steps[x])
          ["find"](_0x15c59c(0x19f))
          ["find"](_0x15c59c(0x19a))
          [_0x15c59c(0x1c7)]("radio-skip") === !![] ||
          $(steps[x])
            [_0x15c59c(0x208)](_0x15c59c(0x17b))
            [_0x15c59c(0x1c7)](_0x15c59c(0x1e4)) === !![]) &&
        skip &&
        selections["filter"]((_0xe633cd) => _0xe633cd[_0x15c59c(0x196)] === x)[
          _0x15c59c(0x1e5)
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
            [_0x15c59c(0x208)](_0x15c59c(0x13d))
            [_0x15c59c(0x1c7)](_0x15c59c(0x141)),
        )
      : $(steps[x])
          [_0x15c59c(0x208)](_0x15c59c(0x19a))
          [_0x15c59c(0x1c7)](_0x15c59c(0x1e4)) === !![] &&
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
            [_0x15c59c(0x208)](_0x15c59c(0x13d))
            [_0x15c59c(0x1c7)]("radio-delay"),
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
  const _0x1224e3 = _0x412a42;
  $(_0x1224e3(0x11f))["hide"](),
    unfilledArr[_0x1224e3(0x1e5)] > 0x0 &&
      unfilledArr["forEach"](function (_0x3293c4) {
        const _0x2639b6 = _0x1224e3;
        $(_0x2639b6(0x212) + _0x3293c4[_0x2639b6(0x17d)] + "\x22]")
          [_0x2639b6(0x218)]("[data-text=\x22error-message\x22]")
          ["fadeIn"](),
          $("input[name=\x22" + _0x3293c4[_0x2639b6(0x17d)] + "\x22]")
            [_0x2639b6(0x1a4)]()
            [_0x2639b6(0x130)](_0x2639b6(0x11f))
            [_0x2639b6(0x131)](),
          $(_0x2639b6(0x140) + _0x3293c4[_0x2639b6(0x17d)] + "\x22]")
            ["siblings"](_0x2639b6(0x11f))
            [_0x2639b6(0x131)](),
          $(_0x2639b6(0x209) + _0x3293c4[_0x2639b6(0x17d)] + "\x22]")
            [_0x2639b6(0x218)](_0x2639b6(0x11f))
            [_0x2639b6(0x131)]();
      });
}
function resetInputErrorMessage(_0x2a2d49) {
  const _0x17335a = _0x412a42;
  $("input[name=\x22" + _0x2a2d49 + "\x22]")
    [_0x17335a(0x218)]("[data-text=\x22error-message\x22]")
    [_0x17335a(0x210)](),
    $("input[name=\x22" + _0x2a2d49 + "\x22]")
      [_0x17335a(0x1a4)]()
      [_0x17335a(0x130)](_0x17335a(0x11f))
      [_0x17335a(0x210)](),
    $(_0x17335a(0x140) + _0x2a2d49 + "\x22]")
      [_0x17335a(0x218)](_0x17335a(0x11f))
      ["hide"](),
    $(_0x17335a(0x209) + _0x2a2d49 + "\x22]")
      [_0x17335a(0x218)](_0x17335a(0x11f))
      [_0x17335a(0x210)]();
}
function increaseCurstep() {
  const _0x2ff2ba = _0x412a42;
  countCard
    ? ((curStep = curStep + 0x1),
      $("[data-text=\x22total-steps\x22]")[_0x2ff2ba(0x22e)](steps["length"]))
    : $(steps[x])["data"](_0x2ff2ba(0x258))
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    $("[data-text=\x22current-step\x22]")[_0x2ff2ba(0x22e)](curStep);
}
function decreaseCurstep() {
  const _0x1ca999 = _0x412a42;
  countCard
    ? ((curStep = curStep - 0x1),
      $(_0x1ca999(0x10f))[_0x1ca999(0x22e)](steps[_0x1ca999(0x1e5)]))
    : $(steps[x])["data"]("card")
      ? (curStep = curStep - 0x0)
      : (curStep = curStep - 0x1),
    $(_0x1ca999(0x24a))[_0x1ca999(0x22e)](curStep);
}
$(_0x412a42(0x239))["on"](_0x412a42(0x1c3), function (_0x586187) {
  const _0x57f3af = _0x412a42;
  console[_0x57f3af(0x100)](_0x57f3af(0x24e)),
    $(this)[_0x57f3af(0x1c7)]("redirect") &&
      (redirectTo = $(this)["data"](_0x57f3af(0x171))),
    !$(this)[_0x57f3af(0x1c7)](_0x57f3af(0x159)) &&
      (newTab = $(this)[_0x57f3af(0x1c7)](_0x57f3af(0x159))),
    (successCard = $(this)[_0x57f3af(0x1c7)](_0x57f3af(0x146))),
    _0x586187["preventDefault"](),
    _0x586187[_0x57f3af(0x1d0)](),
    logicExtra &&
      ($(this)[_0x57f3af(0x168)](_0x57f3af(0xfe), !![]),
      $(steps)
        ["find"](_0x57f3af(0x224))
        [_0x57f3af(0x168)](_0x57f3af(0x1bd), ![])),
    localStorage["removeItem"]("filledInput"),
    fill
      ? ($(this)["data"](_0x57f3af(0x185))
          ? (console["log"]($(this)[_0x57f3af(0x1c7)](_0x57f3af(0x185))),
            $(this)[_0x57f3af(0x22e)]($(this)[_0x57f3af(0x1c7)]("wait")))
          : $(this)
              [_0x57f3af(0x176)]("Please\x20wait...")
              [_0x57f3af(0x22e)](_0x57f3af(0x1e2)),
        $(_0x57f3af(0x241))[_0x57f3af(0x13e)](),
        $("div.g-recaptcha")[_0x57f3af(0x1e5)] > 0x0 &&
          grecaptcha[_0x57f3af(0x1bc)]()["length"] === 0x0 &&
          (form[_0x57f3af(0x208)](_0x57f3af(0x239))["text"](oldSubmitText),
          form[_0x57f3af(0x208)](_0x57f3af(0x239))[_0x57f3af(0x176)](
            oldSubmitText,
          )),
        customError && $(_0x57f3af(0x11f))[_0x57f3af(0x210)]())
      : customError && displayErrorMessage();
});
function nextStep() {
  const _0x3fa4d7 = _0x412a42;
  customError
    ? ($(_0x3fa4d7(0x11f))[_0x3fa4d7(0x210)](),
      fill
        ? (x++,
          increaseCurstep(),
          (progress = x),
          x <= steps[_0x3fa4d7(0x1e5)] - 0x1 &&
            (updateStep(), memory && saveFilledInput()))
        : displayErrorMessage())
    : (x++,
      increaseCurstep(),
      x > progress && (progress = x),
      x <= steps[_0x3fa4d7(0x1e5)] - 0x1 &&
        (updateStep(), memory && saveFilledInput())),
    andLogic();
}
function backStep() {
  const _0x9db173 = _0x412a42;
  customError && $(_0x9db173(0x11f))[_0x9db173(0x210)](),
    decreaseCurstep(),
    x > 0x0 &&
      ($(progressbar[x])[_0x9db173(0x147)](_0x9db173(0x190)),
      selections["filter"]((_0x15a923) => _0x15a923[_0x9db173(0x104)] === x)[
        "length"
      ] > 0x0
        ? (x = parseInt(
            getSafe(
              () =>
                selections[_0x9db173(0x166)](
                  (_0x1ef271) => _0x1ef271[_0x9db173(0x104)] === x,
                )[0x0][_0x9db173(0x19e)],
            ),
          ))
        : x--,
      updateStep()),
    ($(steps[x])
      [_0x9db173(0x208)](_0x9db173(0x19a))
      ["data"](_0x9db173(0x1e4)) === !![] ||
      $(steps[x])
        [_0x9db173(0x208)](_0x9db173(0x19f))
        [_0x9db173(0x208)](_0x9db173(0x19a))
        [_0x9db173(0x1c7)](_0x9db173(0x1e4)) === !![] ||
      $(steps[x])
        ["find"](_0x9db173(0x17b))
        [_0x9db173(0x1c7)](_0x9db173(0x1e4)) === !![]) &&
      ((all_data = all_data[_0x9db173(0x166)](
        (_0x4842d4) =>
          _0x4842d4["field"] !==
          $(steps[x])
            [_0x9db173(0x208)](_0x9db173(0x114))
            ["attr"](_0x9db173(0x16e)),
      )),
      $(
        _0x9db173(0x1ac) +
          $(steps[x])
            [_0x9db173(0x208)](_0x9db173(0x114))
            ["attr"](_0x9db173(0x16e)) +
          "\x22]",
      )["hide"](),
      $(steps[x])
        [_0x9db173(0x208)](_0x9db173(0x14f))
        ["prop"](_0x9db173(0x142), ![]),
      $(steps[x])
        [_0x9db173(0x208)](_0x9db173(0x1d5))
        [_0x9db173(0x147)]("w--redirected-checked"),
      validation());
}
weightedSelectionRange &&
  $(_0x412a42(0x1b5))[_0x412a42(0x1d7)](function () {
    const _0x1c1607 = _0x412a42;
    $(this)[_0x1c1607(0xfd)](
      _0x1c1607(0x112) + $(this)["data"](_0x1c1607(0x1e8)) + _0x1c1607(0x21b),
    );
  });
function selectionQuiz() {
  const _0xe55fb = _0x412a42;
  if ($(this)[_0xe55fb(0x208)](_0xe55fb(0x1ff))) {
    $(_0xe55fb(0x1b5))[_0xe55fb(0x210)](),
      $(_0xe55fb(0x232))[_0xe55fb(0x210)]();
    if (weightedSelection) {
      (selTotal = 0x0),
        selArr[_0xe55fb(0x13c)](function (_0x20c4e3) {
          const _0x5e0130 = _0xe55fb;
          selTotal = selTotal + _0x20c4e3[_0x5e0130(0x174)];
        }),
        $(_0xe55fb(0x252))[_0xe55fb(0x22e)](selTotal);
      if ($(_0xe55fb(0x12f) + selTotal + "\x22]")["length"] > 0x0)
        $("[data-selection=\x22" + selTotal + "\x22]")["fadeIn"]();
      else
        $(_0xe55fb(0x219) + selTotal + ")")
          ? $("[data-range]:contains(" + selTotal + ")")
              [_0xe55fb(0x22c)]("[data-selection]")
              ["eq"](0x0)
              [_0xe55fb(0x250)]()
          : $(_0xe55fb(0x189))[_0xe55fb(0x131)]();
    } else {
      let _0x36af72 = -0x1;
      $(_0xe55fb(0x1b5))[_0xe55fb(0x1d7)](function (_0xecb014) {
        const _0x18f68f = _0xe55fb;
        $($(_0x18f68f(0x1b5))[_0xecb014])
          [_0x18f68f(0x1c7)](_0x18f68f(0x1e8))
          [_0x18f68f(0x152)](selString[_0x18f68f(0x1f3)]()) &&
          (_0x36af72 = _0xecb014);
      }),
        _0x36af72 > -0x1
          ? $($(_0xe55fb(0x1b5))[_0x36af72])["fadeIn"]()
          : $(_0xe55fb(0x189))[_0xe55fb(0x131)]();
    }
  }
}
function triggerInputAllData() {
  const _0x5f29a8 = _0x412a42;
  if (savedFilledInput && memory)
    console[_0x5f29a8(0x100)](savedFilledInput),
      savedFilledInput["forEach"]((_0x2fa32f) => {
        const _0x5e4ea1 = _0x5f29a8;
        var _0x5127cc = $(
            _0x5e4ea1(0x212) +
              _0x2fa32f[_0x5e4ea1(0x20e)] +
              _0x5e4ea1(0x1d2) +
              _0x2fa32f[_0x5e4ea1(0x237)] +
              "\x22]",
          ),
          _0x347a5a = $("input[name=\x22" + _0x2fa32f["inputName"] + "\x22]"),
          _0x38b948 = $(
            _0x5e4ea1(0x140) + _0x2fa32f[_0x5e4ea1(0x20e)] + "\x22]",
          );
        if (_0x5127cc[_0x5e4ea1(0x150)]("type") !== _0x5e4ea1(0x1b3)) {
          if (
            _0x5127cc[_0x5e4ea1(0x150)](_0x5e4ea1(0x14a)) ===
              _0x5e4ea1(0x1de) &&
            !_0x5127cc[_0x5e4ea1(0x1a4)](_0x5e4ea1(0x12c))[_0x5e4ea1(0x1c7)](
              _0x5e4ea1(0x1e4),
            )
          )
            _0x5127cc[_0x5e4ea1(0x1c3)](),
              _0x5127cc[_0x5e4ea1(0x218)](_0x5e4ea1(0x128))[_0x5e4ea1(0x13a)](
                _0x5e4ea1(0x18b),
              ),
              _0x5127cc["trigger"](_0x5e4ea1(0x17d));
          else
            _0x2fa32f[_0x5e4ea1(0x237)] === "on"
              ? (_0x347a5a[_0x5e4ea1(0x1c3)](),
                _0x347a5a[_0x5e4ea1(0x218)](_0x5e4ea1(0x17a))[_0x5e4ea1(0x13a)](
                  "w--redirected-checked",
                ),
                _0x347a5a[_0x5e4ea1(0x11a)]("input"))
              : (_0x347a5a[_0x5e4ea1(0x176)](_0x2fa32f["value"]),
                _0x38b948[_0x5e4ea1(0x176)](_0x2fa32f[_0x5e4ea1(0x237)]),
                $(_0x5e4ea1(0x246) + _0x2fa32f[_0x5e4ea1(0x237)] + "\x22]")[
                  _0x5e4ea1(0x168)
                ](_0x5e4ea1(0x174), !![]),
                _0x347a5a[_0x5e4ea1(0x11a)](_0x5e4ea1(0x17d)),
                _0x347a5a[_0x5e4ea1(0x11a)]("change"));
        }
      });
  else
    _params &&
      (getParams(),
      searchQ["forEach"]((_0x592bd5) => {
        const _0x37fccf = _0x5f29a8;
        if (
          $(
            _0x37fccf(0x212) +
              _0x592bd5[_0x37fccf(0x20e)] +
              _0x37fccf(0x1d2) +
              _0x592bd5["value"] +
              "\x22]",
          )[_0x37fccf(0x150)](_0x37fccf(0x14a)) !== _0x37fccf(0x1b3)
        ) {
          if (
            $(
              _0x37fccf(0x212) +
                _0x592bd5[_0x37fccf(0x1d9)] +
                "\x22][value=\x22" +
                _0x592bd5[_0x37fccf(0x176)] +
                "\x22]",
            )[_0x37fccf(0x150)](_0x37fccf(0x14a)) === "radio"
          )
            $(
              _0x37fccf(0x212) +
                _0x592bd5[_0x37fccf(0x1d9)] +
                _0x37fccf(0x1d2) +
                _0x592bd5["val"] +
                "\x22]",
            )[_0x37fccf(0x1c3)](),
              $(
                _0x37fccf(0x212) +
                  _0x592bd5["key"] +
                  _0x37fccf(0x1d2) +
                  _0x592bd5["val"] +
                  "\x22]",
              )
                ["siblings"](_0x37fccf(0x128))
                [_0x37fccf(0x13a)]("w--redirected-checked"),
              $(
                _0x37fccf(0x212) +
                  _0x592bd5[_0x37fccf(0x1d9)] +
                  _0x37fccf(0x1d2) +
                  _0x592bd5[_0x37fccf(0x176)] +
                  "\x22]",
              )[_0x37fccf(0x11a)](_0x37fccf(0x17d));
          else
            _0x592bd5[_0x37fccf(0x176)] === "on"
              ? ($("input[name=\x22" + _0x592bd5[_0x37fccf(0x1d9)] + "\x22]")[
                  "click"
                ](),
                $(_0x37fccf(0x212) + _0x592bd5["key"] + "\x22]")
                  [_0x37fccf(0x218)](_0x37fccf(0x17a))
                  [_0x37fccf(0x13a)]("w--redirected-checked"),
                $(_0x37fccf(0x212) + _0x592bd5["key"] + "\x22]")[
                  _0x37fccf(0x11a)
                ](_0x37fccf(0x17d)))
              : ($("input[name=\x22" + _0x592bd5[_0x37fccf(0x1d9)] + "\x22]")[
                  _0x37fccf(0x176)
                ](_0x592bd5[_0x37fccf(0x176)]),
                $(_0x37fccf(0x140) + _0x592bd5[_0x37fccf(0x1d9)] + "\x22]")[
                  _0x37fccf(0x176)
                ](_0x592bd5[_0x37fccf(0x176)]),
                $("select[name=\x22" + _0x592bd5[_0x37fccf(0x1d9)] + "\x22]")
                  [_0x37fccf(0x208)](
                    _0x37fccf(0x246) + _0x592bd5["val"] + "\x22]",
                  )
                  ["prop"](_0x37fccf(0x174), !![]),
                $(_0x37fccf(0x212) + _0x592bd5["key"] + "\x22]")[
                  _0x37fccf(0x11a)
                ]("input"),
                $(_0x37fccf(0x212) + _0x592bd5[_0x37fccf(0x1d9)] + "\x22]")[
                  "trigger"
                ](_0x37fccf(0x151)));
        }
      }));
}
$(_0x412a42(0x169))["on"](_0x412a42(0x1c3), function () {
  (next = !![]), nextStep(), selectionQuiz();
}),
  $("[data-form=\x22back-btn\x22]")["on"](_0x412a42(0x1c3), function () {
    (next = ![]), (back = !![]), backStep();
  }),
  $(steps)
    ["find"](":input")
    [_0x412a42(0x1db)](_0x412a42(0x249))
    ["on"](_0x412a42(0x17d), function (_0x173fba) {
      validation(), andLogic();
    }),
  $(steps)
    ["find"](_0x412a42(0x14f))
    ["on"](_0x412a42(0x1c3), function () {
      (skip = !![]), validation();
    });
$(_0x412a42(0x25d))[_0x412a42(0x1c7)](_0x412a42(0x155))
  ? $("[data-form=\x22custom-progress-indicator\x22]")[_0x412a42(0x147)](
      _0x412a42(0x1d4),
    )
  : $("[data-form=\x22custom-progress-indicator\x22]")["addClass"]("disabled");
function clickableIndicator() {
  const _0x48853f = _0x412a42;
  $(_0x48853f(0x1f4))["data"](_0x48853f(0x15d)) &&
    ($(_0x48853f(0x154))[_0x48853f(0x147)](_0x48853f(0x190)),
    $(_0x48853f(0x1f4))["data"]("clickable-all")
      ? ((x = $(this)[_0x48853f(0x24f)]()), updateStep())
      : $(this)[_0x48853f(0x24f)]() <= progress &&
        ((x = $(this)["index"]()), updateStep())),
    $(_0x48853f(0x24a))[_0x48853f(0x22e)](x + 0x1);
}
$(_0x412a42(0x256))["on"](_0x412a42(0x1c3), clickableIndicator);
function _0x3526() {
  const _0xe18963 = [
    "[data-weighted-selection-range]",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22support-text\x22>Multistep\x20form\x20attribute\x20is\x20on\x20Form\x20element\x20and\x20not\x20on\x20Form\x20Block\x20element\x0a\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-white\x22>2.\x20Form\x20Steps:\x20data-form=step\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "[type=\x22radio\x22]",
    "[data-text=\x22current-step\x22]",
    "href",
    "[type=\x22submit\x22]",
    "reset-delay",
    "clicked\x20enter",
    "index",
    "show",
    "<span\x20class=\x22icon-embed-xxsmall-2\x20w-embed\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--carbon\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2032\x2032\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M16\x202C8.2\x202\x202\x208.2\x202\x2016s6.2\x2014\x2014\x2014s14-6.2\x2014-14S23.8\x202\x2016\x202m5.4\x2021L16\x2017.6L10.6\x2023L9\x2021.4l5.4-5.4L9\x2010.6L10.6\x209l5.4\x205.4L21.4\x209l1.6\x201.6l-5.4\x205.4l5.4\x205.4z\x22></path></svg></span>",
    "[data-text=\x22total-weight\x22]",
    "style",
    "[data-cms-select=cms]",
    "div",
    "[data-form=\x22custom-progress-indicator\x22]",
    "tagName",
    "card",
    "metaKey",
    "answer",
    "add-new",
    "reinit",
    "[data-clickable-all]",
    "split",
    "innerHTML",
    "append",
    "novalidate",
    "option[value=\x22$(this).val()\x22]",
    "log",
    "none",
    "data-skip-to",
    "slice",
    "skipTo",
    "Inside\x20<head>\x20tag",
    "filledInput",
    "push",
    "\x0a\x20\x20<button\x20class=\x22openbtn\x22\x20onclick=\x22openNav()\x22>\x0a\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x2220px\x22\x20height=\x2220px\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M11\x2021h-1l1-7H7.5c-.88\x200-.33-.75-.31-.78C8.48\x2010.94\x2010.42\x207.54\x2013.01\x203h1l-1\x207h3.51c.4\x200\x20.62.19.4.66C12.97\x2017.55\x2011\x2021\x2011\x2021\x22></path>\x0a\x20\x20\x20\x20</svg>\x20Check\x20Form\x0a\x20\x20</button>\x0a\x20\x20<div\x20id=\x22mySidenav\x22\x20class=\x22sidenav\x22>\x0a\x20\x20\x20\x20<a\x20href=\x22javascript:void(0)\x22\x20class=\x22closebtn\x22\x20onclick=\x22closeNav()\x22>&times;</a>\x0a\x20\x20\x20\x20<div\x20class=\x22fc-main-content\x22>\x0a\x20\x20\x20\x20\x20\x20<h4\x20class=\x22text-header\x22>Formly\x20Support</h4>\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22support-text\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20If\x20you\x20have\x20spotted\x20a\x20bug\x20or\x20require\x20extra\x20support,\x20please\x20reach\x20out\x20to\x20us\x20via\x20Slack\x20or\x20email\x20us\x20at\x20developer@videsigns.uk.\x0a\x20\x20\x20\x20\x20\x20</p>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22section-title-text\x22>Form\x20Type</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22support-text\x22>",
    ":input[type=\x22checkbox\x22]",
    "[data-clone-wrapper]",
    ":input[type=\x22checkbox\x22][required]:checked",
    "enter",
    "submit-show",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-white\x22>5.\x20Submit\x20Buttons:\x20data-form=next-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22support-text\x22>Submit\x20button\x20present?\x20",
    "[data-text=\x22total-steps\x22]",
    "readystatechange",
    "[data-display]",
    "<div\x20data-range=\x22selection\x22\x20style=\x22display:none\x20!important\x22>",
    "295578eulFxd",
    "input[type=\x22radio\x22]:checked",
    "data-name",
    "385584XablFU",
    "min-character",
    "<br>Data\x20Answer\x20=\x20",
    "[data-clone]",
    "trigger",
    "35%",
    "[data-reset-delay]",
    "Webflow",
    "phone-validation",
    "[data-text=\x22error-message\x22]",
    "[data-select-multiple]",
    "relationship-",
    "0.4",
    "padding",
    "input:radio[required]",
    "select[required]:visible",
    "every",
    "3368ZlgMta",
    ".w-radio-input",
    "ctrlKey",
    "No\x20Formly\x20script\x20added\x20to\x20the\x20page!",
    "query-param",
    "[data-radio-skip]",
    "[data-display-wrapper=\x22",
    "textarea:focus",
    "[data-selection=\x22",
    "children",
    "fadeIn",
    "[data-display-input-index=\x22",
    "getElementsByTagName",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a",
    "[data-weighted-selection]",
    "redirect-form-hehexd",
    "findIndex",
    "head",
    "css",
    "addClass",
    "300518CzAYVm",
    "forEach",
    "[data-radio-delay]",
    "submit",
    "ms-field",
    "textarea[name=\x22",
    "radio-delay",
    "checked",
    "html,\x20body",
    "[data-form=\x22step\x22]",
    "[data-clone=\x22",
    "success",
    "removeClass",
    "input[type=\x22checkbox\x22]:visible",
    "[data-btn=\x22reset\x22]",
    "type",
    "script",
    "formly-support",
    ":first",
    ":checked",
    "input[type=\x22radio\x22]",
    "attr",
    "change",
    "includes",
    "memory",
    "[data-form=\x22progress-indicator\x22]",
    "clickable-all",
    "[data-form=\x22progress\x22]",
    "focus",
    "FAIL",
    "new-tab",
    "redirect-delay",
    "data-input-field",
    "setItem",
    "clickable",
    "test",
    "clone-input",
    "ix2",
    "destroy",
    "[data-success-card=\x22",
    "running",
    "[type=\x22checkbox\x22]",
    ":input[required]",
    "filter",
    "trim",
    "prop",
    "[data-form=\x22next-btn\x22]",
    "data-form",
    ":input[type=\x22file\x22]",
    "display",
    "true",
    "name",
    "span",
    "logic-extra",
    "redirect",
    "[data-add-new-input]",
    "div.g-recaptcha",
    "selected",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22support-text\x22>Submit\x20button\x20attribute\x20IS\x20on\x20Form\x20Submit\x20Button\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "val",
    "block-domain",
    ":input[type=\x22tel\x22][required]",
    "keypress",
    ".w-checkbox-input",
    "[data-answer][data-radio-skip]:visible",
    "input[type=\x22text\x22][required]:visible",
    "input",
    "[data-remove-upload]",
    "button",
    "[data-redirect-delay]",
    "remove-upload",
    "[data-radio-skip=\x22true\x22]",
    "Before\x20&lt;/body&gt;\x20tag",
    "appendChild",
    "wait",
    "[data-selected]:checked",
    ":input[type=\x22tel\x22]",
    "[data-input-field]",
    "[data-selection=\x22other\x22]",
    "[data-clone-input=\x22",
    "w--redirected-checked",
    ":input[type=\x22radio\x22]",
    "\x22]:checked",
    "5sTsxpn",
    "some",
    "current",
    "input:checkbox",
    "BODY",
    "Basic\x20(No\x20Formly\x20Logic)",
    "closest",
    "<strong\x20class=\x22text-white\x22>Checkboxes\x20",
    "step",
    "[data-memory]",
    "top",
    "open",
    "[data-radio-skip]:visible",
    "ajaxComplete",
    "[data-clone-input-wrapper]",
    "debug-mode",
    "backTo",
    ".active-answer-card",
    "[data-form=\x22back-btn\x22]",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22support-text\x22>Number\x20of\x20steps:\x20",
    "[data-quiz]",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "parents",
    "textarea[required]:visible",
    "field",
    "select[required]",
    "parentNode",
    "textarea[required]",
    "[data-answer=\x22",
    "dispatchEvent",
    "[data-input-field=\x22",
    "[data-display-input=\x22",
    "[data-count-card]",
    ":input[type=\x22number\x22]",
    "[data-skip-to]",
    "getItem",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spacer\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-white\x22>Script\x20Location:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22support-text\x22>",
    "file",
    "input[type=\x22submit\x22]",
    "[data-selection]",
    ":input[type=\x22checkbox\x22]:checked",
    ":focus",
    "365667WOttad",
    "select-multiple",
    "[data-answer]",
    "[data-form=\x22next-btn\x22][data-submit-show]",
    "getResponse",
    "required",
    "last",
    "skip-to",
    "script[src=\x22",
    "weighted-selection",
    ":input[type=\x22email\x22][required]",
    "click",
    ":input[type=\x22time\x22][required]",
    "clone",
    "[data-clone-wrapper=\x22",
    "data",
    "[data-btn=\x22edit\x22]",
    ":input[type=\x22checkbox\x22][required]",
    "[data-form=\x22step\x22][data-card]",
    "[data-conditional-result]",
    "\x0a\x20\x20.icon-embed-xxsmall-2\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#ff3232\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x20\x20.icon-embed-xxsmall\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#57ff4b\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.sidenav\x20{\x0a\x20\x20\x20\x20height:\x20100%\x20!important;\x0a\x20\x20\x20\x20width:\x200;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20z-index:\x20999999999999\x20!important;\x0a\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20background-color:\x20#081019\x20!important;\x0a\x20\x20\x20\x20overflow-x:\x20hidden\x20!important;\x0a\x20\x20\x20\x20padding-top:\x2060px\x20!important;\x0a\x20\x20\x20\x20transition:\x200.5s\x20!important;\x0a\x20\x20\x20\x20font-size:\x2015px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73)\x20!important;\x0a\x20\x20\x20\x20font-family:system-ui\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.section-title-text,\x20.support-text,\x20.openbtn{\x0a\x20\x20\x20\x20font-size:\x2015px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73);\x0a\x20\x20\x20\x20font-family:system-ui\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.sidenav\x20p,\x20.sidenav\x20strong\x20{\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20space-between\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x204px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73);\x0a\x20\x20}\x0a\x0a\x20\x20.sidenav\x20.closebtn\x20{\x0a\x20\x20\x20\x20position:\x20absolute\x20!important;\x0a\x20\x20\x20\x20top:\x2025px\x20!important;\x0a\x20\x20\x20\x20right:\x2025px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2036px\x20!important;\x0a\x20\x20\x20\x20margin-left:\x2050px\x20!important;\x0a\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20color:\x20#e7e7e7\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.fc-core-setup\x20{\x0a\x20\x20\x20\x20padding:\x2012px\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x2011px\x20!important;\x0a\x20\x20\x20\x20border-radius:\x206px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20#main\x20{\x0a\x20\x20\x20\x20transition:\x20margin-left\x20.5s\x20!important;\x0a\x20\x20\x20\x20padding:\x2020px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.fc-main-content\x20{\x0a\x20\x20\x20\x20transition:\x20margin-left\x20.5s\x20!important;\x0a\x20\x20\x20\x20padding:\x2020px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.fc-form-step\x20{\x0a\x20\x20\x20\x20padding-left:\x2010px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.openbtn\x20{\x0a\x20\x20\x20\x20white-space:\x20nowrap\x20!important;\x0a\x20\x20\x20\x20cursor:\x20pointer\x20!important;\x0a\x20\x20\x20\x20box-shadow:\x200\x200\x200\x201px\x20rgba(0,\x200,\x200,\x20.1),\x200\x201px\x203px\x20rgba(0,\x200,\x200,\x20.1)\x20!important;\x0a\x20\x20\x20\x20visibility:\x20visible\x20!important;\x0a\x20\x20\x20\x20z-index:\x2099\x20!important;\x0a\x20\x20\x20\x20color:\x20#e7e7e7\x20!important;\x0a\x20\x20\x20\x20opacity:\x201\x20!important;\x0a\x20\x20\x20\x20width:\x20auto\x20!important;\x0a\x20\x20\x20\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20background-color:\x20#1e1e1e\x20!important;\x0a\x20\x20\x20\x20border-radius:\x203px\x20!important;\x0a\x20\x20\x20\x20margin:\x200\x20!important;\x0a\x20\x20\x20\x20padding:\x206px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2013px\x20!important;\x0a\x20\x20\x20\x20line-height:\x2014px\x20!important;\x0a\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20top:\x20auto\x20!important;\x0a\x20\x20\x20\x20bottom:\x2012px\x20!important;\x0a\x20\x20\x20\x20left:\x2012px\x20!important;\x0a\x20\x20\x20\x20right:\x20auto\x20!important;\x0a\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20transform:\x20none\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.text-header{\x0a\x20\x20\x20\x20color:\x20#fff\x20!important;\x0a\x20\x20\x20\x20font-size:\x201.8rem\x20!important;\x0a\x20\x20\x20\x20font-weight:\x20600\x20!important;\x0a\x20\x20\x20\x20line-height:\x201.2\x20!important;\x0a\x20\x20\x20\x20margin-bottom:4px\x0a\x20\x20}\x0a\x0a\x20\x20@media\x20screen\x20and\x20(max-height:\x20450px)\x20{\x0a\x20\x20\x20\x20.sidenav\x20{\x20padding-top:\x2015px\x20!important;\x20}\x0a\x20\x20\x20\x20.sidenav\x20a\x20{\x20font-size:\x2018px\x20!important;\x20}\x0a\x20\x20}\x0a\x0a\x20\x20.section-title-text{\x0a\x20\x20\x20\x20color:\x20#fff\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x2010px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2018px\x20!important;\x0a\x20\x20\x20\x20font-weight:\x20700\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.div-support-section{\x0a\x20\x20\x20\x20padding-top:1rem\x20!important;\x0a\x20\x20\x20\x20padding-bottom:1rem\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.text-white{\x0a\x20\x20\x20\x20color:\x20white\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.spacer{\x0a\x20\x20\x20\x20padding-top:8px\x20!important;\x0a\x20\x20}\x0a",
    "startsWith",
    "textarea",
    "6507HVwQNi",
    "stopPropagation",
    "https://webflow.com/api/v1/form/",
    "\x22][value=\x22",
    "auto",
    "disabled",
    ".w-form-formradioinput",
    "require",
    "each",
    "conditional-result",
    "key",
    ":input[type=\x22url\x22][required]",
    "not",
    "[data-success-card]",
    "<strong\x20class=\x22text-white\x22>Press\x20\x22⌘\x20+\x20Enter\x20\x22\x20To\x20Submit\x20",
    "radio",
    "[data-display-input]",
    "url",
    "form[data-form=\x22multistep\x22]\x20:input",
    "Please\x20wait...",
    "data-show-if",
    "radio-skip",
    "length",
    "<strong\x20class=\x22text-white\x22>Automatic\x20Progress\x20Indicators\x20",
    "keydown",
    "selection",
    "[data-checkbox]",
    "getElementById",
    "createElement",
    "scroll-top",
    "reset",
    "[data-display=\x22",
    "[data-input-index=\x22",
    "[data-display-index=\x22",
    "active-answer-card",
    "[data-form=\x22next-btn\x22][type=\x22submit\x22]",
    "join",
    "[data-clickable]",
    "<strong\x20class=\x22text-white\x22>Custom\x20Progress\x20Indicators\x20",
    "body",
    "[data-show-if]",
    "formly",
    "_blank",
    "preventDefault",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22support-text\x22>Next\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button\x20",
    "search",
    ":input[type=\x22number\x22][required]",
    "src",
    "[data-btn=\x22check\x22]",
    "[data-cms-select=text]",
    "[data-callback=\x22recaptcha\x22]",
    "data-go-to",
    ":input[type=\x22date\x22]",
    "remove",
    "[data-cms-select=input]",
    ":input[type=\x22date\x22][required]",
    "[data-form-ms=\x22submit-btn\x22]",
    "find",
    "select[name=\x22",
    "querySelectorAll",
    "phone-autoformat",
    "[data-form=\x22remove-clone\x22]",
    ":input[type=\x22text\x22][required]",
    "inputName",
    "select",
    "hide",
    ":input[type=\x22password\x22]",
    "input[name=\x22",
    "toLowerCase",
    "</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22section-title-text\x22>Attributes</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-white\x22>1.\x20Form:\x20data-form=multistep\x20",
    ":input[type=\x22file\x22][required]",
    "input:radio[name=\x22",
    "videsigns",
    "siblings",
    "[data-range]:contains(",
    "offset",
    "</div>",
    "input-field",
    "replace",
    "mySidenav",
    "go-to",
    "count-card",
    "21EcRoon",
    "[data-form=\x22submit-btn\x22]:visible",
    "[data-form=\x22remove-input-clone\x22]",
    ":input",
    "[data-submit=\x22true\x22]",
    "<strong\x20class=\x22text-white\x22>Total\x20Step\x20Text\x20",
    "custom-error-message",
    "[data-clone-input]",
    "input[autofocus]",
    "width",
    "status",
    "parent",
    "weighted-selection-range",
    "text",
    "querySelector",
    ":input[type=\x22password\x22][required]",
    "checkbox",
    "[data-selection-weight]",
    "parse",
    "<strong\x20class=\x22text-white\x22>Radio\x20Inputs\x20",
    "init",
    "7699480NxcTtL",
    "value",
    "[data-enter=\x22true\x22]",
    "[data-form=\x22submit-btn\x22]",
    "</strong>",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22support-text\x22>Back\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button",
    "add-new-input",
    "538092fhDrvS",
    ":input[type=\x22text\x22]",
    "<br>Data\x20Go\x20To\x20=\x20",
    "[data-go-to]",
    "[data-form=\x22multistep\x22]",
    "[data-form=\x22submit\x22]:visible",
    "location",
    "\x22]\x20input",
    "keyCode",
    "option[value=\x22",
  ];
  _0x3526 = function () {
    return _0xe18963;
  };
  return _0x3526();
}
$(_0x412a42(0x241))[_0x412a42(0x1c7)](_0x412a42(0x19d)) &&
  ($("[data-go-to]")["each"](function () {
    const _0x447171 = _0x412a42;
    $(this)["append"](
      _0x447171(0x23f),
      $(this)[_0x447171(0x1c7)](_0x447171(0x21f)),
    );
  }),
  $(_0x412a42(0x1ba))[_0x412a42(0x1d7)](function () {
    const _0x57fb92 = _0x412a42;
    $(this)[_0x57fb92(0xfd)](
      _0x57fb92(0x118),
      $(this)["data"](_0x57fb92(0x25a)),
    );
  }));
function resetFormly() {
  const _0x1f59d9 = _0x412a42;
  $("[data-form=\x22multistep\x22]")[_0x1f59d9(0x11a)]("reset"),
    $(_0x1f59d9(0x241))
      [_0x1f59d9(0x1a4)]()
      ["find"](".w-form-done")
      [_0x1f59d9(0x210)](),
    (x = 0x0),
    updateStep(),
    $(_0x1f59d9(0x241))[_0x1f59d9(0x250)](),
    $(_0x1f59d9(0x239))["text"](oldSubmitText),
    $(_0x1f59d9(0x239))[_0x1f59d9(0x176)](oldSubmitText),
    $("[data-text=\x22current-step\x22]")[_0x1f59d9(0x22e)](0x1),
    $(_0x1f59d9(0x241))
      [_0x1f59d9(0x208)](_0x1f59d9(0x191))
      ["siblings"](".w-checkbox-input")
      [_0x1f59d9(0x147)](_0x1f59d9(0x18b));
}
$(document)[_0x412a42(0x19b)](function (_0x26e756, _0x1bea64, _0xb0c9fe) {
  const _0x50cc91 = _0x412a42;
  if (_0xb0c9fe[_0x50cc91(0x1e0)][_0x50cc91(0x152)](_0x50cc91(0x1d1))) {
    const _0x594a1d = _0x1bea64[_0x50cc91(0x22b)] === 0xc8,
      _0x519c60 = _0x50cc91(0x136);
    redirectTo &&
      _0x594a1d &&
      (newTab
        ? window[_0x50cc91(0x199)](redirectTo, _0x50cc91(0x1f9))
        : setTimeout(() => {
            const _0x592524 = _0x50cc91;
            location[_0x592524(0x24b)] = redirectTo;
          }, redirectDelay)),
      _0x594a1d &&
        successCard !== "" &&
        $(_0x50cc91(0x162) + successCard + "\x22]")[_0x50cc91(0x131)](),
      _0x594a1d &&
        formReset &&
        setTimeout(() => {
          resetFormly();
        }, resetDelay),
      !_0x594a1d &&
        ($(_0x50cc91(0x239))["val"](_0x50cc91(0x1e2)),
        $(_0x50cc91(0x239))[_0x50cc91(0x22e)](_0x50cc91(0x1e2)));
  }
}),
  $(_0x412a42(0x1c8))["on"](_0x412a42(0x1c3), function () {
    const _0x14be27 = _0x412a42;
    var _0x3fc9a3 = $(this)
      [_0x14be27(0x22c)]()
      [_0x14be27(0x208)](_0x14be27(0x188))
      ["data"](_0x14be27(0x21c));
    setTimeout(function () {
      const _0x3cff29 = _0x14be27;
      $(_0x3cff29(0x212) + _0x3fc9a3 + "\x22]")[_0x3cff29(0x157)]();
    }, 0x64),
      (back = !![]),
      (x = $(this)[_0x14be27(0x1c7)]("edit-step") - 0x1),
      updateStep(),
      countCard
        ? ((curStep = x + 0x1),
          $(_0x14be27(0x10f))[_0x14be27(0x22e)](steps[_0x14be27(0x1e5)]))
        : $(steps[x])[_0x14be27(0x1c7)](_0x14be27(0x258))
          ? (curStep = x + 0x0)
          : (curStep = x + 0x1),
      $(_0x14be27(0x24a))[_0x14be27(0x22e)](curStep),
      (back = ![]);
  }),
  $(_0x412a42(0x149))["on"](_0x412a42(0x1c3), function () {
    const _0x38f14d = _0x412a42;
    $(_0x38f14d(0x241))[_0x38f14d(0x11a)](_0x38f14d(0x1ed));
    let _0x2c49e8 = $(this);
    $(this)[_0x38f14d(0x22e)](_0x38f14d(0x1e2)),
      setTimeout(function () {
        const _0x79b5ce = _0x38f14d;
        $(_0x2c49e8)[_0x79b5ce(0x22e)](oldResetText),
          $(_0x2c49e8)[_0x79b5ce(0x1a4)](".w-form-done")["hide"](),
          (x = 0x0),
          updateStep(),
          $("[data-form=\x22multistep\x22]")[_0x79b5ce(0x250)](),
          $(_0x79b5ce(0x239))["text"](oldSubmitText),
          $(_0x79b5ce(0x239))["val"](oldSubmitText),
          $(_0x2c49e8)[_0x79b5ce(0x176)](oldSubmitText),
          $("[data-text=\x22current-step\x22]")[_0x79b5ce(0x22e)](0x1),
          $("[data-form=\x22multistep\x22]")
            [_0x79b5ce(0x208)]("input:checkbox")
            [_0x79b5ce(0x218)](_0x79b5ce(0x17a))
            ["removeClass"](_0x79b5ce(0x18b));
      }, resetDelay);
  }),
  $(_0x412a42(0x1f6))["on"](_0x412a42(0x179), function (_0x4085a6) {
    const _0x92adc3 = _0x412a42;
    if (_0x4085a6[_0x92adc3(0x245)] === 0xd) {
      _0x4085a6["preventDefault"](), _0x4085a6["stopPropagation"]();
      if (
        $(steps[x])[_0x92adc3(0x208)](_0x92adc3(0x1ce))["is"](_0x92adc3(0x1b7))
      )
        $(steps[x])
          [_0x92adc3(0x208)](_0x92adc3(0x12e))
          [_0x92adc3(0x176)](
            $(steps[x])["find"](_0x92adc3(0x12e))[_0x92adc3(0x176)]() + "\x0a",
          );
      else
        $("[data-enter]")[_0x92adc3(0x1c7)](_0x92adc3(0x10c)) &&
          fill &&
          totalSteps > curStep &&
          $("[data-form=\x22next-btn\x22]")[0x0]["click"]();
    }
  }),
  $(_0x412a42(0x1f6))[_0x412a42(0x1e7)](function (_0x49da11) {
    const _0x460998 = _0x412a42;
    (_0x49da11[_0x460998(0x259)] || _0x49da11[_0x460998(0x129)]) &&
      _0x49da11[_0x460998(0x245)] == 0xd &&
      (x >= steps[_0x460998(0x1e5)] - 0x1 && fill
        ? $(steps[x])[_0x460998(0x208)](_0x460998(0x222))["click"]()
        : (_0x49da11[_0x460998(0x1fa)](), _0x49da11[_0x460998(0x1d0)]()));
  }),
  $(_0x412a42(0x241))
    [_0x412a42(0x208)](":input")
    ["on"]("change", function () {
      const _0x2c1fd0 = _0x412a42;
      (all_data = all_data[_0x2c1fd0(0x166)](
        (_0x238877) =>
          _0x238877[_0x2c1fd0(0x1a6)] !==
          $(this)[_0x2c1fd0(0x150)](_0x2c1fd0(0x16e)),
      )),
        $(this)[_0x2c1fd0(0x150)](_0x2c1fd0(0x14a)) === _0x2c1fd0(0x231)
          ? $(this)["is"](_0x2c1fd0(0x14e))
            ? all_data["push"]({
                field: $(this)[_0x2c1fd0(0x150)](_0x2c1fd0(0x16e)),
                value: $(this)[_0x2c1fd0(0x218)](_0x2c1fd0(0x16f))["text"](),
              })
            : $(
                "[data-input-field=\x22" +
                  $(this)["attr"](_0x2c1fd0(0x16e)) +
                  "\x22]",
              )["hide"]()
          : (all_data[_0x2c1fd0(0x107)]({
              field: $(this)["attr"](_0x2c1fd0(0x16e)),
              value: $(this)[_0x2c1fd0(0x176)](),
            }),
            $(this)[_0x2c1fd0(0x176)]() !== "" &&
              resetInputErrorMessage(
                $(this)[_0x2c1fd0(0x150)](_0x2c1fd0(0x16e)),
              )),
        all_data[_0x2c1fd0(0x13c)](function (_0x1ba6ea) {
          const _0x2b6c32 = _0x2c1fd0;
          $(_0x2b6c32(0x1ac) + _0x1ba6ea["field"] + "\x22]")[
            _0x2b6c32(0x250)
          ](),
            $(_0x2b6c32(0x1ac) + _0x1ba6ea["field"] + "\x22]")[
              _0x2b6c32(0x22e)
            ](_0x1ba6ea[_0x2b6c32(0x237)]);
        });
    }),
  $(_0x412a42(0x241))
    [_0x412a42(0x208)](_0x412a42(0x1ce))
    ["on"](_0x412a42(0x151), function () {
      const _0x516d7e = _0x412a42;
      $(this)[_0x516d7e(0x176)]() !== "" &&
        resetInputErrorMessage($(this)[_0x516d7e(0x150)](_0x516d7e(0x16e))),
        (all_data = all_data[_0x516d7e(0x166)](
          (_0x35a5c4) =>
            _0x35a5c4[_0x516d7e(0x1a6)] !==
            $(this)[_0x516d7e(0x150)](_0x516d7e(0x16e)),
        )),
        all_data[_0x516d7e(0x107)]({
          field: $(this)["attr"](_0x516d7e(0x16e)),
          value: $(this)["val"](),
        }),
        all_data[_0x516d7e(0x13c)](function (_0x2ab2e9) {
          const _0x1bf93f = _0x516d7e;
          $(_0x1bf93f(0x1ac) + _0x2ab2e9[_0x1bf93f(0x1a6)] + "\x22]")[
            _0x1bf93f(0x250)
          ](),
            $("[data-input-field=\x22" + _0x2ab2e9[_0x1bf93f(0x1a6)] + "\x22]")[
              _0x1bf93f(0x22e)
            ](_0x2ab2e9[_0x1bf93f(0x237)]);
        });
    }),
  $(_0x412a42(0x241))
    ["find"](_0x412a42(0x20f))
    ["on"](_0x412a42(0x151), function () {
      const _0xd85ea2 = _0x412a42;
      $(this)[_0xd85ea2(0x176)]() !== "" &&
        resetInputErrorMessage($(this)[_0xd85ea2(0x150)](_0xd85ea2(0x16e)));
      var _0x2a5020 = $(this)[_0xd85ea2(0x1c7)](_0xd85ea2(0x13f));
      (all_data = all_data[_0xd85ea2(0x166)](
        (_0x23751a) => _0x23751a["field"] !== $(this)["attr"](_0xd85ea2(0x16e)),
      )),
        all_data[_0xd85ea2(0x107)]({
          field: $(this)[_0xd85ea2(0x150)](_0xd85ea2(0x16e)),
          value: _0x2a5020
            ? $(this)[_0xd85ea2(0x208)](_0xd85ea2(0xff))[_0xd85ea2(0x22e)]()
            : $(this)[_0xd85ea2(0x176)](),
        }),
        all_data[_0xd85ea2(0x13c)](function (_0x5a40d4) {
          const _0xe7fac8 = _0xd85ea2;
          $(_0xe7fac8(0x1ac) + _0x5a40d4[_0xe7fac8(0x1a6)] + "\x22]")[
            _0xe7fac8(0x250)
          ](),
            $(_0xe7fac8(0x1ac) + _0x5a40d4[_0xe7fac8(0x1a6)] + "\x22]")[
              _0xe7fac8(0x22e)
            ](_0x5a40d4[_0xe7fac8(0x237)]);
        });
    }),
  updateStep(),
  triggerInputAllData(),
  $(_0x412a42(0x254))[_0x412a42(0x1d7)](function () {
    const _0x361975 = _0x412a42,
      _0xf2c090 = $(this)[_0x361975(0x208)](_0x361975(0x200)),
      _0x2a29cb = [];
    console["log"](_0x2a29cb),
      _0xf2c090[_0x361975(0x1d7)](function () {
        const _0x51ee29 = _0x361975;
        _0x2a29cb[_0x51ee29(0x107)](
          $(this)[_0x51ee29(0x22e)]()[_0x51ee29(0x167)](),
        );
      });
    const _0x4295c2 = $(this)["siblings"](_0x361975(0x205));
    $[_0x361975(0x1d7)](_0x2a29cb, function (_0x3c2391, _0x2f4d4e) {
      const _0x423d08 = _0x361975,
        _0x25bfe7 = $("<option>")
          [_0x423d08(0x176)](_0x2f4d4e)
          [_0x423d08(0x22e)](_0x2f4d4e);
      _0x4295c2[_0x423d08(0xfd)](_0x25bfe7);
    });
  });
function cloneRemove() {
  const _0x38a87e = _0x412a42;
  $(_0x38a87e(0x10a))[_0x38a87e(0x1d7)](function () {
    const _0x4d38fc = _0x38a87e;
    $(this)[_0x4d38fc(0x208)](_0x4d38fc(0x119))[_0x4d38fc(0x1e5)] < 0x2
      ? $(this)
          [_0x4d38fc(0x208)]("[data-form=\x22remove-clone\x22]")
          [_0x4d38fc(0x210)]()
      : $(this)[_0x4d38fc(0x208)](_0x4d38fc(0x20c))[_0x4d38fc(0x250)]();
  });
}
function cloneRemoveInput() {
  const _0x1db4fb = _0x412a42;
  $(_0x1db4fb(0x19c))[_0x1db4fb(0x1d7)](function () {
    const _0x509ddb = _0x1db4fb;
    $(this)[_0x509ddb(0x208)](_0x509ddb(0x228))[_0x509ddb(0x1e5)] < 0x2
      ? $(this)["find"](_0x509ddb(0x223))[_0x509ddb(0x210)]()
      : $(this)
          [_0x509ddb(0x208)]("[data-form=\x22remove-input-clone\x22]")
          [_0x509ddb(0x250)]();
  });
}
$(_0x412a42(0x20c))["on"](_0x412a42(0x1c3), function () {
  const _0x6f48aa = _0x412a42,
    _0x5bf9d4 =
      $(this)[_0x6f48aa(0x1a4)](_0x6f48aa(0x119))[_0x6f48aa(0x1e5)] > 0x0
        ? $(this)[_0x6f48aa(0x1a4)](_0x6f48aa(0x119))["index"]()
        : $(this)[_0x6f48aa(0x1a4)](_0x6f48aa(0x111))[_0x6f48aa(0x24f)](),
    _0x144b67 =
      $(this)[_0x6f48aa(0x1a4)](_0x6f48aa(0x119))[_0x6f48aa(0x1e5)] > 0x0
        ? $(this)
            [_0x6f48aa(0x1a4)](_0x6f48aa(0x119))
            [_0x6f48aa(0x1c7)](_0x6f48aa(0x1c5))
        : $(this)[_0x6f48aa(0x1a4)](_0x6f48aa(0x111))["data"](_0x6f48aa(0x16c));
  $(_0x6f48aa(0x145) + _0x144b67 + "\x22]")
    ["eq"](_0x5bf9d4)
    [_0x6f48aa(0x204)](),
    $(_0x6f48aa(0x1ee) + _0x144b67 + "\x22]")
      ["eq"](_0x5bf9d4)
      ["remove"](),
    cloneRemove(),
    validation();
}),
  $(_0x412a42(0x223))["on"](_0x412a42(0x1c3), function () {
    const _0x9e7f5c = _0x412a42;
    let _0x167f3d = $(this)["siblings"]()[_0x9e7f5c(0x150)](_0x9e7f5c(0x16e));
    $(this)[_0x9e7f5c(0x22c)](_0x9e7f5c(0x228))[_0x9e7f5c(0x204)](),
      $(_0x9e7f5c(0x1ac) + _0x167f3d + "\x22]")
        [_0x9e7f5c(0x22c)](_0x9e7f5c(0x1df))
        [_0x9e7f5c(0x204)](),
      cloneRemove(),
      validation();
  }),
  $("[data-add-new]")["on"](_0x412a42(0x1c3), function () {
    const _0x98a414 = _0x412a42;
    let _0x2702d5 = $(this)[_0x98a414(0x1c7)](_0x98a414(0x25b));
    var _0x35327d = $("[data-clone=\x22" + _0x2702d5 + "\x22]")
        ["eq"](0x0)
        [_0x98a414(0x1c5)](!![]),
      _0x5ed24e = $("[data-display=\x22" + _0x2702d5 + "\x22]")
        ["eq"](0x0)
        [_0x98a414(0x1c5)](!![]);
    let _0x4a5362 = "";
    $(this)[_0x98a414(0x208)](_0x98a414(0x20c))[_0x98a414(0x250)](),
      cloneRemove(),
      _0x35327d[_0x98a414(0x208)]("[data-clone-input]")
        [_0x98a414(0x208)](_0x98a414(0x17d))
        [_0x98a414(0x176)](""),
      _0x35327d[_0x98a414(0x208)](_0x98a414(0x228))
        [_0x98a414(0x1db)](_0x98a414(0x14d))
        [_0x98a414(0x204)](),
      _0x5ed24e[_0x98a414(0x208)](_0x98a414(0x1df))
        ["not"](_0x98a414(0x14d))
        [_0x98a414(0x204)](),
      _0x35327d["find"]("input")[_0x98a414(0x1d7)](function () {
        const _0x3a4fcb = _0x98a414;
        if (
          $(this)[_0x3a4fcb(0x194)](_0x3a4fcb(0x228))[_0x3a4fcb(0x1e5)] > 0x0
        ) {
          let _0x4f7684 = 0x0;
          const _0x4d8fa7 = $(this)
            ["closest"]("[data-clone-input]")
            [_0x3a4fcb(0x1c7)](_0x3a4fcb(0x15f));
          console[_0x3a4fcb(0x100)](
            $(this)
              [_0x3a4fcb(0x194)](_0x3a4fcb(0x228))
              [_0x3a4fcb(0x1c7)](_0x3a4fcb(0x15f)),
            this[_0x3a4fcb(0x16e)],
          ),
            $(_0x3a4fcb(0x18a) + _0x4d8fa7 + _0x3a4fcb(0x244))["each"](
              function () {
                const _0x5e2dd3 = _0x3a4fcb,
                  _0x5ea255 = $(this)[_0x5e2dd3(0x150)](_0x5e2dd3(0x16e));
                if (_0x5ea255 && _0x5ea255["startsWith"](_0x5e2dd3(0x121))) {
                  const _0x3794a5 = parseInt(
                    _0x5ea255[_0x5e2dd3(0x25e)]("-")[0x1],
                  );
                  !isNaN(_0x3794a5) &&
                    _0x3794a5 > _0x4f7684 &&
                    (_0x4f7684 = _0x3794a5);
                }
              },
            ),
            _0x4f7684++,
            (_0x4a5362 = this[_0x3a4fcb(0x16e)] + "-" + _0x4f7684),
            console[_0x3a4fcb(0x100)](_0x4d8fa7, _0x4a5362);
        } else
          _0x4a5362 =
            this[_0x3a4fcb(0x16e)] +
            "-" +
            (parseInt(
              $(_0x3a4fcb(0x145) + _0x2702d5 + "\x22]")
                [_0x3a4fcb(0x1be)]()
                [_0x3a4fcb(0x24f)](),
            ) +
              0x1);
        $(this)[_0x3a4fcb(0x176)](""),
          $(this)["attr"](_0x3a4fcb(0x16e), _0x4a5362),
          $(this)[_0x3a4fcb(0x150)](_0x3a4fcb(0x115), _0x4a5362);
      }),
      _0x5ed24e[_0x98a414(0x208)](_0x98a414(0x188))[_0x98a414(0x1d7)](
        function () {
          const _0x20d8cd = _0x98a414;
          if ($(this)[_0x20d8cd(0x1c7)]("input-field")) {
            let _0x228533 = 0x0;
            const _0x4b987c = $(this)
              [_0x20d8cd(0x1c7)](_0x20d8cd(0x21c))
              ["split"]("-")[0x0];
            $(
              "[data-display=\x22" +
                _0x2702d5 +
                "\x22]\x20[data-input-field^=\x22" +
                _0x4b987c +
                "\x22]",
            )[_0x20d8cd(0x1d7)](function () {
              const _0x4f0303 = _0x20d8cd,
                _0x48b118 = $(this)[_0x4f0303(0x150)](_0x4f0303(0x15b)),
                _0x4a5775 = parseInt(_0x48b118[_0x4f0303(0x25e)]("-")[0x1]);
              !isNaN(_0x4a5775) &&
                _0x4a5775 > _0x228533 &&
                (_0x228533 = _0x4a5775);
            }),
              _0x228533++;
            const _0x1854da = _0x4b987c + "-" + _0x228533;
            console[_0x20d8cd(0x100)](_0x1854da),
              $(this)[_0x20d8cd(0x150)](_0x20d8cd(0x15b), _0x1854da);
          }
        },
      ),
      $(_0x98a414(0x1c6) + _0x2702d5 + "\x22]")[_0x98a414(0xfd)](_0x35327d),
      $(_0x98a414(0x12d) + _0x2702d5 + "\x22]")[_0x98a414(0xfd)](_0x5ed24e),
      $("[data-index=\x22" + _0x2702d5 + "\x22]")[_0x98a414(0x1d7)](
        function () {
          const _0xdde06e = _0x98a414;
          $(this)["text"](
            $(this)
              [_0xdde06e(0x1a4)]("[data-clone=\x22" + _0x2702d5 + "\x22]")
              [_0xdde06e(0x24f)]() + 0x1,
          );
        },
      ),
      $(_0x98a414(0x1f0) + _0x2702d5 + "\x22]")["each"](function () {
        const _0x3682e1 = _0x98a414;
        $(this)[_0x3682e1(0x22e)](
          $(this)
            ["parents"]("[data-display=\x22" + _0x2702d5 + "\x22]")
            [_0x3682e1(0x24f)]() + 0x1,
        );
      }),
      validation();
  }),
  $(_0x412a42(0x172))["on"](_0x412a42(0x1c3), function () {
    const _0x138c2c = _0x412a42,
      _0x2797d4 = $(this)[_0x138c2c(0x1a4)](_0x138c2c(0x119))["index"]();
    let _0x4f90b5 = $(this)[_0x138c2c(0x1c7)](_0x138c2c(0x23c));
    var _0x357f20 = $("[data-clone-input=\x22" + _0x4f90b5 + "\x22]")
        ["eq"](0x0)
        [_0x138c2c(0x1c5)](!![]),
      _0x2c083e = $("[data-display-input=\x22" + _0x4f90b5 + "\x22]")
        ["eq"](0x0)
        [_0x138c2c(0x1c5)](!![]);
    $(this)[_0x138c2c(0x208)](_0x138c2c(0x223))[_0x138c2c(0x250)](),
      cloneRemoveInput();
    let _0x478663 = 0x0;
    $("[data-clone-input=\x22" + _0x4f90b5 + _0x138c2c(0x244))[
      _0x138c2c(0x1d7)
    ](function () {
      const _0x2c47e1 = _0x138c2c,
        _0x26fb03 = $(this)["attr"](_0x2c47e1(0x16e));
      if (_0x26fb03 && _0x26fb03[_0x2c47e1(0x1cd)](_0x2c47e1(0x121))) {
        const _0x1ba5ec = parseInt(_0x26fb03[_0x2c47e1(0x25e)]("-")[0x1]);
        !isNaN(_0x1ba5ec) && _0x1ba5ec > _0x478663 && (_0x478663 = _0x1ba5ec);
      }
    }),
      _0x478663++,
      _0x357f20["find"](_0x138c2c(0x17d))["each"](function () {
        const _0x26b646 = _0x138c2c;
        let _0x4be4f3 = _0x26b646(0x121) + _0x478663;
        $(this)[_0x26b646(0x176)](""),
          $(this)[_0x26b646(0x150)](_0x26b646(0x16e), _0x4be4f3),
          $(this)[_0x26b646(0x150)]("data-name", _0x4be4f3);
      }),
      _0x2c083e[_0x138c2c(0x208)]("[data-input-field]")[_0x138c2c(0x1d7)](
        function () {
          const _0x70c833 = _0x138c2c;
          $(this)[_0x70c833(0x150)](
            _0x70c833(0x15b),
            "relationship-" + _0x478663,
          );
        },
      ),
      $(this)
        [_0x138c2c(0x218)](
          "[data-clone-input-wrapper=\x22" + _0x4f90b5 + "\x22]",
        )
        [_0x138c2c(0xfd)](_0x357f20),
      $("[data-display]")
        ["eq"](_0x2797d4)
        [_0x138c2c(0x208)](
          "[data-display-input-wrapper=\x22" + _0x4f90b5 + "\x22]",
        )
        [_0x138c2c(0xfd)](_0x2c083e),
      $(_0x138c2c(0x1ef) + _0x4f90b5 + "\x22]")[_0x138c2c(0x1d7)](function () {
        const _0x565068 = _0x138c2c;
        $(this)[_0x565068(0x22e)](
          $(this)
            [_0x565068(0x1a4)](_0x565068(0x18a) + _0x4f90b5 + "\x22]")
            [_0x565068(0x24f)]() + 0x1,
        );
      }),
      $(_0x138c2c(0x132) + _0x4f90b5 + "\x22]")[_0x138c2c(0x1d7)](function () {
        const _0x254e55 = _0x138c2c;
        $(this)[_0x254e55(0x22e)](
          $(this)
            [_0x254e55(0x1a4)](_0x254e55(0x1ad) + _0x4f90b5 + "\x22]")
            [_0x254e55(0x24f)]() + 0x1,
        );
      }),
      validation();
  }),
  $(_0x412a42(0x17e))["on"]("click", function () {
    const _0x46a1b3 = _0x412a42,
      _0x46577b = $(this)[_0x46a1b3(0x1c7)](_0x46a1b3(0x181));
    $(_0x46a1b3(0x212) + _0x46577b + "\x22]")[_0x46a1b3(0x176)](""),
      validation();
  });
function andLogic() {
  const _0x17e902 = _0x412a42;
  conditionalResult &&
    (steps["eq"](x)[_0x17e902(0x208)](_0x17e902(0x1f7))[_0x17e902(0x210)](),
    console[_0x17e902(0x100)]("clicked"),
    steps["eq"](x)
      [_0x17e902(0x208)](_0x17e902(0x1f7))
      [_0x17e902(0x1d7)](function () {
        const _0x516085 = _0x17e902;
        function _0x7d99ac(_0x31db9a) {
          const _0x4e3e1a = _0x31db9a["split"]("&"),
            _0x28e6ff = [];
          return (
            _0x4e3e1a["forEach"]((_0x4a52bb) => {
              const [_0x53a319, _0x156c21] = _0x4a52bb["split"]("=");
              _0x28e6ff["push"]({ field: _0x53a319, value: _0x156c21 });
            }),
            _0x28e6ff
          );
        }
        const _0x46a263 = $(this)[_0x516085(0x150)](_0x516085(0x1e3));
        console[_0x516085(0x100)](_0x46a263);
        const _0x3015a0 = _0x7d99ac(_0x46a263);
        function _0x1e309d(_0x20c77d, _0x412179) {
          const _0x1d2b86 = _0x516085;
          return _0x412179[_0x1d2b86(0x18f)]((_0x43773e, _0x1f6f97) => {
            const _0x4db443 = _0x1d2b86;
            if (
              _0x20c77d[0x0] &&
              _0x43773e[_0x4db443(0x1a6)] === _0x20c77d[0x0][_0x4db443(0x1a6)]
            )
              return _0x20c77d[_0x4db443(0x126)](
                (_0x45c49b, _0x4a390b) =>
                  _0x412179[_0x1f6f97 + _0x4a390b] &&
                  _0x412179[_0x1f6f97 + _0x4a390b][_0x4db443(0x1a6)] ===
                    _0x45c49b["field"] &&
                  _0x412179[_0x1f6f97 + _0x4a390b][_0x4db443(0x237)] ===
                    _0x45c49b[_0x4db443(0x237)],
              );
            return ![];
          });
        }
        const _0x17cbd1 = _0x1e309d(_0x3015a0, all_data);
        _0x17cbd1 ? $(this)[_0x516085(0x250)]() : $(this)[_0x516085(0x210)]();
      }));
}
scrollTop(), cloneRemove(), cloneRemoveInput();
const formlyUrlParams = new URLSearchParams(
    window[_0x412a42(0x243)][_0x412a42(0x1fc)],
  ),
  formlySupportParam = formlyUrlParams["get"](_0x412a42(0x14c)),
  showButton = formlySupportParam === _0x412a42(0x16d),
  passIcon =
    "<span\x20class=\x22icon-embed-xxsmall\x20w-embed\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010s10-4.48\x2010-10S17.52\x202\x2012\x202m-2\x2015l-5-5l1.41-1.41L10\x2014.17l7.59-7.59L19\x208z\x22></path></svg></span>",
  failIcon = _0x412a42(0x251);
function _0x1b30(_0xe726db, _0x28723f) {
  const _0x35269c = _0x3526();
  return (
    (_0x1b30 = function (_0x1b30c5, _0x3fd430) {
      _0x1b30c5 = _0x1b30c5 - 0xfd;
      let _0x47f4b4 = _0x35269c[_0x1b30c5];
      return _0x47f4b4;
    }),
    _0x1b30(_0xe726db, _0x28723f)
  );
}
let isScriptLoaded = !![],
  scriptLocation = _0x412a42(0x138),
  isMultistepAttributePresent = !![],
  isMultistepOnFormElement = !![],
  areButtonsPresent = !![],
  isNextBtnOnSubmit = ![],
  isSubmitBtnOnSubmit = !![],
  isBackBtnOnSubmit = ![],
  formType = logicExtra ? "FormlyLogic\x20enabled" : _0x412a42(0x193),
  resultStatus = "PASS",
  scriptSrcAdded = "";
function isElementPresent(_0xe5b4d8, _0x57d462) {
  const _0x203472 = _0x412a42;
  return (
    document[_0x203472(0x22f)](
      "[" + _0x57d462 + "=\x22" + _0xe5b4d8 + "\x22]",
    ) !== null
  );
}
isMultistepAttributePresent = isElementPresent("multistep", _0x412a42(0x16a));
const multistepForm = document[_0x412a42(0x22f)](
    "form[data-form=\x22multistep\x22]",
  ),
  formStepLength = multistepForm[_0x412a42(0x20a)](_0x412a42(0x144))[
    _0x412a42(0x1e5)
  ];
isMultistepOnFormElement = multistepForm !== null;
const multistepContainer = document[_0x412a42(0x22f)](_0x412a42(0x241)),
  nextBtn = multistepContainer[_0x412a42(0x22f)](
    "[data-form=\x22next-btn\x22]",
  ),
  backBtn = multistepContainer[_0x412a42(0x22f)](_0x412a42(0x1a0)),
  submitBtn = multistepContainer[_0x412a42(0x22f)](_0x412a42(0x239));
(areButtonsPresent =
  nextBtn !== null && backBtn !== null && submitBtn !== null),
  (isNextBtnOnSubmit =
    nextBtn && nextBtn[_0x412a42(0x257)]["toLowerCase"]() === "input"),
  (isSubmitBtnOnSubmit =
    submitBtn &&
    submitBtn[_0x412a42(0x257)][_0x412a42(0x213)]() === _0x412a42(0x17d) &&
    submitBtn[_0x412a42(0x14a)]["toLowerCase"]() === "submit"),
  (isBackBtnOnSubmit =
    backBtn &&
    backBtn[_0x412a42(0x257)][_0x412a42(0x213)]() === _0x412a42(0x17d));
const checkPowerup = (_0x4b1693) =>
    document[_0x412a42(0x22f)](_0x4b1693) !== null,
  progressBarAttr = checkPowerup(_0x412a42(0x156)),
  progressIndicatorAttr = checkPowerup(_0x412a42(0x154)),
  customProgressAttr = checkPowerup("[data-form=\x22progress-indicator\x22]"),
  cardDivAttr = checkPowerup("[data-card=\x22true\x22]"),
  currentStepAttr = checkPowerup(_0x412a42(0x24a)),
  totalStepAttr = checkPowerup("[data-text=\x22total-steps\x22]"),
  enterAttr = checkPowerup(_0x412a42(0x238)),
  submitAttr = checkPowerup(_0x412a42(0x225)),
  radioSkipAttr = checkPowerup(_0x412a42(0x182)),
  customCheckboxAttr = checkPowerup("[data-checkbox]"),
  recapatchaAttr = checkPowerup(_0x412a42(0x201));
(!isScriptLoaded ||
  scriptLocation !== _0x412a42(0x138) ||
  !isMultistepAttributePresent ||
  !isMultistepOnFormElement ||
  !areButtonsPresent ||
  isNextBtnOnSubmit ||
  !isSubmitBtnOnSubmit ||
  isBackBtnOnSubmit) &&
  (resultStatus = _0x412a42(0x158));
function isScriptUrlMatch(_0x4ba5ff, _0x53a16c) {
  const _0x3ebece = _0x412a42;
  for (
    var _0x2c4386 = 0x0;
    _0x2c4386 < _0x53a16c[_0x3ebece(0x1e5)];
    _0x2c4386++
  ) {
    if (_0x4ba5ff["includes"](_0x53a16c[_0x2c4386])) return !![];
  }
  return ![];
}
var keywordsToCheck = [_0x412a42(0x217), _0x412a42(0x1f8)],
  scripts = document[_0x412a42(0x133)](_0x412a42(0x14b)),
  matchedScripts = [];
for (var i = 0x0; i < scripts["length"]; i++) {
  var scriptSrcs = scripts[i][_0x412a42(0x1fe)];
  isScriptUrlMatch(scriptSrcs, keywordsToCheck) &&
    matchedScripts["push"](scriptSrcs);
}
if (matchedScripts["length"] > 0x0) {
  scriptSrcAdded = matchedScripts;
  const script = document[_0x412a42(0x22f)](
    _0x412a42(0x1c0) + scriptSrcAdded + "\x22]",
  );
  script &&
    (scriptLocation =
      script[_0x412a42(0x1a8)][_0x412a42(0x257)] === _0x412a42(0x192)
        ? _0x412a42(0x183)
        : _0x412a42(0x105));
} else scriptSrcAdded = _0x412a42(0x12a) + failIcon;
const newElement = document["createElement"](_0x412a42(0x255)),
  newStyle = document[_0x412a42(0x1eb)](_0x412a42(0x253));
(newStyle[_0x412a42(0x25f)] = _0x412a42(0x1cc)),
  document["head"]["appendChild"](newStyle);
showButton && document[_0x412a42(0x1f6)][_0x412a42(0x184)](newElement);
newElement[_0x412a42(0x25f)] =
  _0x412a42(0x108) +
  formType +
  "</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22section-title-text\x22>Formly\x20Script\x20Info</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-white\x22>Script\x20URL:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22support-text\x22>" +
  scriptSrcAdded +
  _0x412a42(0x1b2) +
  scriptLocation +
  _0x412a42(0x214) +
  (isMultistepOnFormElement ? passIcon : failIcon) +
  _0x412a42(0x248) +
  (formStepLength > 0x0 ? passIcon : failIcon) +
  _0x412a42(0x1a1) +
  formStepLength +
  "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-white\x22>3.\x20Next\x20Buttons:\x20data-form=back-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22support-text\x22>Next\x20button\x20present?\x20" +
  (nextBtn ? passIcon : failIcon) +
  _0x412a42(0x1fb) +
  (isNextBtnOnSubmit ? failIcon : passIcon) +
  "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-white\x22>4.\x20Back\x20Buttons:\x20data-form=next-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22support-text\x22>Back\x20button\x20present?\x20" +
  (backBtn ? passIcon : failIcon) +
  _0x412a42(0x23b) +
  (isBackBtnOnSubmit ? failIcon : passIcon) +
  _0x412a42(0x10e) +
  (backBtn ? passIcon : failIcon) +
  _0x412a42(0x175) +
  (isSubmitBtnOnSubmit ? passIcon : failIcon) +
  "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spacer\x22></div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22section-title-text\x22>Powerups</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
  (progressBarAttr && progressIndicatorAttr
    ? _0x412a42(0x1e6) + passIcon + _0x412a42(0x23a)
    : "") +
  _0x412a42(0x1a3) +
  (customProgressAttr ? _0x412a42(0x1f5) + passIcon + "</strong>" : "") +
  _0x412a42(0x1a3) +
  (cardDivAttr
    ? "<strong\x20class=\x22text-white\x22>Intro\x20Cards\x20Or\x20Steps\x20Without\x20Inputs\x20" +
      passIcon +
      _0x412a42(0x23a)
    : "") +
  _0x412a42(0x1a3) +
  (currentStepAttr
    ? "<strong\x20class=\x22text-white\x22>Current\x20Step\x20Text\x20" +
      passIcon +
      _0x412a42(0x23a)
    : "") +
  "\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
  (totalStepAttr ? _0x412a42(0x226) + passIcon + _0x412a42(0x23a) : "") +
  _0x412a42(0x1a3) +
  (enterAttr
    ? "<strong\x20class=\x22text-white\x22>Press\x20\x22Enter\x22\x20To\x20Progress\x20" +
      passIcon +
      _0x412a42(0x23a)
    : "") +
  _0x412a42(0x1a3) +
  (submitAttr ? _0x412a42(0x1dd) + passIcon + _0x412a42(0x23a) : "") +
  _0x412a42(0x1a3) +
  (radioSkipAttr ? _0x412a42(0x234) + passIcon + _0x412a42(0x23a) : "") +
  _0x412a42(0x1a3) +
  (customCheckboxAttr ? _0x412a42(0x195) + passIcon + _0x412a42(0x23a) : "") +
  _0x412a42(0x1a3) +
  (recapatchaAttr
    ? "<strong\x20class=\x22text-white\x22>ReCAPTCHA\x20" +
      passIcon +
      "</strong>"
    : "") +
  _0x412a42(0x134);
function openNav() {
  const _0x491aa4 = _0x412a42;
  (document[_0x491aa4(0x1ea)]("mySidenav")[_0x491aa4(0x253)][_0x491aa4(0x22a)] =
    _0x491aa4(0x11b)),
    (document[_0x491aa4(0x1ea)](_0x491aa4(0x21e))[_0x491aa4(0x253)][
      _0x491aa4(0x123)
    ] = "12px");
}
function closeNav() {
  const _0x3ead2a = _0x412a42;
  (document[_0x3ead2a(0x1ea)](_0x3ead2a(0x21e))["style"][_0x3ead2a(0x22a)] =
    "0"),
    (document[_0x3ead2a(0x1ea)](_0x3ead2a(0x21e))[_0x3ead2a(0x253)][
      _0x3ead2a(0x123)
    ] = "0px");
}
