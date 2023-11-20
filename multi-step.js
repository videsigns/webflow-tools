//20th Nov 2023
//Bug fix
//1. Logic extra not removing the required input attribute on unselected steps

const _0x2b8fa1 = _0x3165;
(function (_0x2c7a49, _0x207883) {
  const _0x47599c = _0x3165,
    _0xdebb24 = _0x2c7a49();
  while (!![]) {
    try {
      const _0x43cd1d =
        (parseInt(_0x47599c(0x18e)) / 0x1) *
          (-parseInt(_0x47599c(0x155)) / 0x2) +
        -parseInt(_0x47599c(0x183)) / 0x3 +
        (parseInt(_0x47599c(0x213)) / 0x4) *
          (-parseInt(_0x47599c(0x1ec)) / 0x5) +
        -parseInt(_0x47599c(0x1f3)) / 0x6 +
        (parseInt(_0x47599c(0x19f)) / 0x7) *
          (-parseInt(_0x47599c(0x18c)) / 0x8) +
        (-parseInt(_0x47599c(0x15d)) / 0x9) *
          (parseInt(_0x47599c(0x1d3)) / 0xa) +
        parseInt(_0x47599c(0x13d)) / 0xb;
      if (_0x43cd1d === _0x207883) break;
      else _0xdebb24["push"](_0xdebb24["shift"]());
    } catch (_0x3b8f2f) {
      _0xdebb24["push"](_0xdebb24["shift"]());
    }
  }
})(_0x530e, 0x631aa);
let x = 0x0,
  curStep = 0x0,
  steps = $(_0x2b8fa1(0x137)),
  progressbarClone = $(_0x2b8fa1(0x1ce))["clone"](),
  progressbar,
  countCard = !![],
  weightedSelection = $("[data-weighted-selection]")[_0x2b8fa1(0x142)](
    _0x2b8fa1(0x16e),
  ),
  weightedSelectionRange = $(_0x2b8fa1(0x161))["data"](_0x2b8fa1(0x1ba)),
  selectMultiple = $(_0x2b8fa1(0x20b))[_0x2b8fa1(0x142)](_0x2b8fa1(0x199)),
  customError = $(_0x2b8fa1(0x13e))[_0x2b8fa1(0x142)](_0x2b8fa1(0x13c)),
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
  reinitIX = $(_0x2b8fa1(0x17c))["data"]("reinit"),
  textareaLength = 0x0,
  textInputLength = 0x0,
  emailInputLength = 0x0,
  selectInputLength = 0x0,
  checkboxInputLength = 0x0,
  filledInput = [],
  savedFilledInput = [],
  memory = $(_0x2b8fa1(0x189))[_0x2b8fa1(0x142)]("memory"),
  quiz = $(_0x2b8fa1(0x1ea))[_0x2b8fa1(0x142)](_0x2b8fa1(0x232)),
  progress = 0x0;
const urlFormly = new URL(window[_0x2b8fa1(0x22b)][_0x2b8fa1(0x1b4)]);
let _params = $("[data-query-param]")["data"](_0x2b8fa1(0x164)),
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
  logicExtra = $("[data-form=\x22multistep\x22]")[_0x2b8fa1(0x142)](
    _0x2b8fa1(0x132),
  ),
  oldSubmitText = $(_0x2b8fa1(0x182))["val"](),
  oldResetText = $("[data-btn=\x22reset\x22]")[_0x2b8fa1(0x143)](),
  formReset = $(_0x2b8fa1(0x171))[_0x2b8fa1(0x142)](_0x2b8fa1(0x1b7)),
  successCard = "",
  redirectTo = "",
  totalSteps = 0x0,
  checkCount = 0x0,
  resetDelay = $(_0x2b8fa1(0x186))[_0x2b8fa1(0x142)](_0x2b8fa1(0x196))
    ? $(_0x2b8fa1(0x186))[_0x2b8fa1(0x142)](_0x2b8fa1(0x196))
    : 0x7d0,
  redirectDelay = $(_0x2b8fa1(0x230))["data"](_0x2b8fa1(0x154))
    ? $("[data-redirect-delay]")[_0x2b8fa1(0x142)](_0x2b8fa1(0x154))
    : 0x7d0,
  newTab = !![],
  unfilledArr = [],
  phoneFormat = $(_0x2b8fa1(0x171))[_0x2b8fa1(0x142)](_0x2b8fa1(0x1f7)),
  scrollToTop = $("[data-form=\x22multistep\x22]")[_0x2b8fa1(0x142)](
    "scroll-top",
  ),
  conditionalResult =
    $(_0x2b8fa1(0x1ff))[_0x2b8fa1(0x142)](_0x2b8fa1(0x235)) === "AND",
  scrollTopOffset = parseInt(
    $("[data-form=\x22multistep\x22]")["data"](_0x2b8fa1(0x1a0)),
  ),
  notRobot = !![],
  all_data = [];
const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
savedFilledInput = JSON[_0x2b8fa1(0x1a6)](
  localStorage[_0x2b8fa1(0x24b)](_0x2b8fa1(0x1f1)),
);
var ogCloneArr = [];
$("[data-clone]")["each"](function () {
  const _0x4c35cb = _0x2b8fa1;
  ogCloneArr[_0x4c35cb(0x12e)]({
    name: $(this)[_0x4c35cb(0x142)](_0x4c35cb(0x23c)),
    element: $(this)[_0x4c35cb(0x23c)](!![]),
    display: $(_0x4c35cb(0x1e1) + $(this)["data"](_0x4c35cb(0x23c)) + "\x22]")
      ["eq"](0x0)
      [_0x4c35cb(0x23c)](!![]),
  });
});
$(_0x2b8fa1(0x133))[_0x2b8fa1(0x231)] > 0x0 && (notRobot = ![]);
function recaptcha(_0x21ce78) {
  notRobot = !![];
}
$(_0x2b8fa1(0x134))[_0x2b8fa1(0x231)] > 0x0 &&
  (countCard = $(_0x2b8fa1(0x134))[_0x2b8fa1(0x142)](_0x2b8fa1(0x239)));
$(_0x2b8fa1(0x1fe))[_0x2b8fa1(0x23f)](),
  $(progressbarClone)[_0x2b8fa1(0x24a)](_0x2b8fa1(0x144)),
  $("[data-form=\x22progress\x22]")["children"]()["remove"](),
  $(_0x2b8fa1(0x182))["hide"](),
  $(_0x2b8fa1(0x24c))[_0x2b8fa1(0x23f)](),
  steps["each"](function () {
    const _0xc33e8 = _0x2b8fa1;
    $(_0xc33e8(0x225))[_0xc33e8(0x1b6)](
      progressbarClone[_0xc33e8(0x23c)](!![], !![]),
    );
  }),
  $(_0x2b8fa1(0x216))[_0x2b8fa1(0x23f)]();
countCard
  ? ((curStep = curStep + 0x1),
    (totalSteps = steps[_0x2b8fa1(0x231)]),
    $(_0x2b8fa1(0x162))[_0x2b8fa1(0x143)](totalSteps))
  : ($(steps[x])[_0x2b8fa1(0x142)](_0x2b8fa1(0x1d8))
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    (totalSteps = $("[data-form=\x22step\x22]:not([data-card=\x22true\x22])")[
      _0x2b8fa1(0x231)
    ]),
    $("[data-text=\x22total-steps\x22]")[_0x2b8fa1(0x143)](totalSteps),
    $(_0x2b8fa1(0x179))[_0x2b8fa1(0x21f)](function () {
      const _0x20e9a7 = _0x2b8fa1;
      $($(_0x20e9a7(0x1ce))[$(this)[_0x20e9a7(0x147)]()])[_0x20e9a7(0x23f)]();
    }));
(progressbar = $(_0x2b8fa1(0x225))[_0x2b8fa1(0x21d)]()),
  $(_0x2b8fa1(0x1ce))["on"](_0x2b8fa1(0x1ee), clickableIndicator),
  $(_0x2b8fa1(0x22d))[_0x2b8fa1(0x143)](curStep),
  steps[_0x2b8fa1(0x23f)](),
  $(_0x2b8fa1(0x1de))[_0x2b8fa1(0x23f)](),
  $(_0x2b8fa1(0x181))[_0x2b8fa1(0x21f)](function () {
    const _0x184452 = _0x2b8fa1;
    $(this)[_0x184452(0x243)]("type", _0x184452(0x203));
  });
function getParams() {
  const _0x300bd8 = _0x2b8fa1;
  urlFormly["searchParams"][_0x300bd8(0x172)](function (_0x2e74b2, _0x19b751) {
    const _0x626670 = _0x300bd8;
    searchQ[_0x626670(0x12e)]({ val: _0x2e74b2, key: _0x19b751 });
  });
}
function getSafe(_0x2502a9, _0x1ebaf8) {
  try {
    return _0x2502a9();
  } catch (_0x207d0f) {
    return _0x1ebaf8;
  }
}
function phoneAutoFormat(_0x5d9361) {
  var _0x2a36b8 = "";
  return function (_0x495f93) {
    const _0x7ebf93 = _0x3165;
    var _0x1df332 = "",
      _0x56ffbe = _0x495f93["replace"](/\D/g, ""),
      _0x4b0e4c = 0x0,
      _0x56482d = 0x0;
    while (
      _0x4b0e4c < _0x56ffbe["length"] &&
      _0x56482d < _0x5d9361[_0x7ebf93(0x231)]
    ) {
      _0x5d9361[_0x56482d] === "x"
        ? ((_0x1df332 += _0x56ffbe[_0x4b0e4c]), _0x4b0e4c++)
        : (_0x1df332 += _0x5d9361[_0x56482d]),
        _0x56482d++;
    }
    if (_0x495f93[_0x7ebf93(0x231)] < _0x2a36b8[_0x7ebf93(0x231)]) {
      var _0x567e9d = _0x5d9361[_0x7ebf93(0x1a5)](_0x56482d);
      _0x1df332 += _0x567e9d[_0x7ebf93(0x246)](/x/g, "");
    }
    return (_0x2a36b8 = _0x1df332), _0x1df332;
  };
}
function validateURL(_0x58e0af) {
  return urlPattern["test"](_0x58e0af) ? !![] : ![];
}
quiz &&
  steps[_0x2b8fa1(0x21f)](function () {
    const _0x2c7b7a = _0x2b8fa1;
    $(this)[_0x2c7b7a(0x21d)]()["attr"](_0x2c7b7a(0x151), !![]),
      $(this)[_0x2c7b7a(0x21d)]()["attr"](_0x2c7b7a(0x190), 0xfa);
  });
function disableBtn(_0x1c9221) {
  const _0x4ef872 = _0x2b8fa1;
  (fill = ![]),
    !customError &&
      ($(_0x4ef872(0x234))[_0x4ef872(0x14c)]({
        opacity: _0x4ef872(0x165),
        "pointer-events": _0x4ef872(0x229),
      }),
      $(_0x4ef872(0x234))[_0x4ef872(0x146)](_0x4ef872(0x23a)),
      $(_0x4ef872(0x182))[_0x4ef872(0x14c)]({
        opacity: _0x4ef872(0x165),
        "pointer-events": _0x4ef872(0x229),
      }),
      $(_0x4ef872(0x182))[_0x4ef872(0x146)](_0x4ef872(0x23a)),
      $(_0x4ef872(0x24c))[_0x4ef872(0x14c)]({
        opacity: "0.4",
        "pointer-events": _0x4ef872(0x229),
      }),
      $(_0x4ef872(0x24c))["addClass"](_0x4ef872(0x23a)));
}
function enableBtn() {
  const _0x5763e9 = _0x2b8fa1;
  (fill = !![]),
    $("[data-form=\x22next-btn\x22]")[_0x5763e9(0x14c)]({
      "pointer-events": _0x5763e9(0x169),
      opacity: "1",
    }),
    $(_0x5763e9(0x234))["removeClass"](_0x5763e9(0x23a)),
    $("[data-form=\x22submit-btn\x22]")[_0x5763e9(0x14c)]({
      "pointer-events": _0x5763e9(0x169),
      opacity: "1",
    }),
    $(_0x5763e9(0x182))[_0x5763e9(0x24a)]("disabled"),
    $(_0x5763e9(0x24c))[_0x5763e9(0x14c)]({
      "pointer-events": _0x5763e9(0x169),
      opacity: "1",
    }),
    $(_0x5763e9(0x24c))[_0x5763e9(0x24a)](_0x5763e9(0x23a));
}
function _0x3165(_0x52f397, _0x5e2775) {
  const _0x530e4e = _0x530e();
  return (
    (_0x3165 = function (_0x3165a6, _0x2cf915) {
      _0x3165a6 = _0x3165a6 - 0x12d;
      let _0x5b4035 = _0x530e4e[_0x3165a6];
      return _0x5b4035;
    }),
    _0x3165(_0x52f397, _0x5e2775)
  );
}
function saveFilledInput() {
  const _0x3095d8 = _0x2b8fa1;
  $(_0x3095d8(0x1df))
    [_0x3095d8(0x1db)]("[type=\x22submit\x22]")
    [_0x3095d8(0x21f)](function () {
      const _0x55ba98 = _0x3095d8;
      $(this)[_0x55ba98(0x243)](_0x55ba98(0x1eb)) === "checkbox" ||
      $(this)[_0x55ba98(0x243)](_0x55ba98(0x1eb)) === _0x55ba98(0x15e)
        ? $(this)["prop"](_0x55ba98(0x173)) &&
          (filledInput[_0x55ba98(0x153)](
            (_0x3df7f0) =>
              _0x3df7f0[_0x55ba98(0x1d6)] ===
              $(this)[_0x55ba98(0x243)](_0x55ba98(0x16c)),
          )
            ? ((filledInput = filledInput["filter"](
                (_0x3ae5d5) =>
                  _0x3ae5d5[_0x55ba98(0x1d6)] !== $(this)["attr"]("name"),
              )),
              $(this)[_0x55ba98(0x17b)]() !== "" &&
                filledInput[_0x55ba98(0x12e)]({
                  inputName: $(this)["attr"]("name"),
                  value: $(this)[_0x55ba98(0x17b)](),
                }))
            : $(this)[_0x55ba98(0x17b)]() !== "" &&
              filledInput["push"]({
                inputName: $(this)["attr"](_0x55ba98(0x16c)),
                value: $(this)["val"](),
              }))
        : filledInput["some"](
              (_0x35379c) =>
                _0x35379c[_0x55ba98(0x1d6)] ===
                $(this)["attr"](_0x55ba98(0x16c)),
            )
          ? ((filledInput = filledInput[_0x55ba98(0x205)](
              (_0x3c67dd) =>
                _0x3c67dd[_0x55ba98(0x1d6)] !==
                $(this)[_0x55ba98(0x243)]("name"),
            )),
            $(this)[_0x55ba98(0x17b)]() !== "" &&
              filledInput[_0x55ba98(0x12e)]({
                inputName: $(this)[_0x55ba98(0x243)]("name"),
                value: $(this)[_0x55ba98(0x17b)](),
              }))
          : $(this)[_0x55ba98(0x17b)]() !== "" &&
            filledInput[_0x55ba98(0x12e)]({
              inputName: $(this)["attr"](_0x55ba98(0x16c)),
              value: $(this)[_0x55ba98(0x17b)](),
            });
    }),
    localStorage[_0x3095d8(0x152)](_0x3095d8(0x1f1)),
    localStorage["setItem"](
      _0x3095d8(0x1f1),
      JSON[_0x3095d8(0x1ae)](filledInput),
    );
}
function scrollTop() {
  const _0x35c7d6 = _0x2b8fa1;
  scrollToTop &&
    $(_0x35c7d6(0x188))[_0x35c7d6(0x1d4)](
      {
        scrollTop:
          $("[data-form=\x22multistep\x22]")[_0x35c7d6(0x17e)]()[
            _0x35c7d6(0x209)
          ] - scrollTopOffset,
      },
      0x3e8,
    );
}
function updateStep() {
  const _0x3c1b0f = _0x2b8fa1;
  scrollTop(),
    (skip = ![]),
    $(_0x3c1b0f(0x15a))[_0x3c1b0f(0x24a)](_0x3c1b0f(0x23a));
  $(_0x3c1b0f(0x227))[_0x3c1b0f(0x142)]("clickable") &&
    (steps["find"](":input[required]")["each"](function () {
      const _0x13cdfd = _0x3c1b0f;
      $(
        $(_0x13cdfd(0x15a))[
          $(this)[_0x13cdfd(0x12f)](_0x13cdfd(0x137))[_0x13cdfd(0x147)]()
        ],
      ),
        $(this)[_0x13cdfd(0x17b)]() === "" && emptyInput++;
    }),
    emptyInput > 0x0
      ? $(_0x3c1b0f(0x166))[_0x3c1b0f(0x146)]("disabled")
      : $(_0x3c1b0f(0x166))[_0x3c1b0f(0x24a)]("disabled"));
  $(_0x3c1b0f(0x15a))[_0x3c1b0f(0x24a)]("current"),
    $(_0x3c1b0f(0x15a))[_0x3c1b0f(0x146)](_0x3c1b0f(0x23a)),
    $($(_0x3c1b0f(0x15a))[x])[_0x3c1b0f(0x146)](_0x3c1b0f(0x144)),
    (selection = selections[_0x3c1b0f(0x205)](
      (_0x2ea8bb) => _0x2ea8bb[_0x3c1b0f(0x1bb)] === x - 0x1,
    ));
  next &&
    (x = getSafe(() => selection[0x0]["skipTo"])
      ? parseInt(getSafe(() => selection[0x0][_0x3c1b0f(0x1f2)]))
      : x);
  $(_0x3c1b0f(0x20a))[_0x3c1b0f(0x23f)](), steps[_0x3c1b0f(0x23f)]();
  reinitIX === !![] && window["Webflow"][_0x3c1b0f(0x22a)]();
  $(progressbar)[_0x3c1b0f(0x24a)](_0x3c1b0f(0x144));
  for (i = 0x0; i <= x; i++) {
    countCard
      ? $(progressbar[i])[_0x3c1b0f(0x146)](_0x3c1b0f(0x144))
      : !$(steps[i])["data"](_0x3c1b0f(0x1d8)) &&
        $(progressbar[i])[_0x3c1b0f(0x146)](_0x3c1b0f(0x144));
  }
  reinitIX === !![]
    ? (window[_0x3c1b0f(0x1d0)] &&
        window[_0x3c1b0f(0x1d0)]
          ["require"](_0x3c1b0f(0x135))
          [_0x3c1b0f(0x248)](),
      document[_0x3c1b0f(0x224)](new Event(_0x3c1b0f(0x19b))),
      $(steps[x])["show"]())
    : $(steps[x])["fadeIn"](_0x3c1b0f(0x184));
  $(_0x3c1b0f(0x1e0))["removeClass"](_0x3c1b0f(0x242));
  x === 0x0 &&
    !$(steps[x])[_0x3c1b0f(0x142)](_0x3c1b0f(0x1d8)) &&
    ($(steps[x])["find"](_0x3c1b0f(0x20a))[_0x3c1b0f(0x201)](),
    $(steps[x])
      ["find"](_0x3c1b0f(0x20a))
      [_0x3c1b0f(0x146)]("active-answer-card"));
  selection[_0x3c1b0f(0x231)] > 0x0
    ? ($(steps[x])
        ["find"]("[data-answer=\x22" + selection[0x0]["selected"] + "\x22]")
        ["show"](),
      $(steps[x])
        [_0x3c1b0f(0x23d)](
          _0x3c1b0f(0x1d5) + selection[0x0]["selected"] + "\x22]",
        )
        [_0x3c1b0f(0x146)](_0x3c1b0f(0x242)))
    : ($(steps[x])
        [_0x3c1b0f(0x23d)](_0x3c1b0f(0x1d5) + answer + "\x22]")
        [_0x3c1b0f(0x201)](),
      $(steps[x])
        ["find"](_0x3c1b0f(0x1d5) + answer + "\x22]")
        [_0x3c1b0f(0x146)](_0x3c1b0f(0x242)));
  if (x === 0x0)
    $(_0x3c1b0f(0x1e2))["hide"](),
      $(_0x3c1b0f(0x234))[_0x3c1b0f(0x201)](),
      $(_0x3c1b0f(0x182))["hide"]();
  else {
    if (
      x === steps["length"] - 0x1 ||
      $(steps[x])[_0x3c1b0f(0x23d)](_0x3c1b0f(0x1b0))["length"] > 0x0
    ) {
      $("[data-form=\x22next-btn\x22]")[_0x3c1b0f(0x23f)]();
      if (
        $(steps[x])
          [_0x3c1b0f(0x23d)]("[data-form=\x22next-btn\x22][data-submit-show]")
          [_0x3c1b0f(0x142)](_0x3c1b0f(0x13f))
      )
        $(steps[x])["find"](_0x3c1b0f(0x177))[_0x3c1b0f(0x201)]();
      else
        $(_0x3c1b0f(0x234))[_0x3c1b0f(0x142)](_0x3c1b0f(0x13f)) &&
          $(_0x3c1b0f(0x234))[_0x3c1b0f(0x201)]();
      $(_0x3c1b0f(0x182))["show"](),
        $(_0x3c1b0f(0x24c))["show"](),
        $(_0x3c1b0f(0x1e2))["show"]();
    } else
      $(_0x3c1b0f(0x234))[_0x3c1b0f(0x201)](),
        $("[data-form=\x22back-btn\x22]")[_0x3c1b0f(0x201)](),
        $("[data-form=\x22submit-btn\x22]")[_0x3c1b0f(0x23f)](),
        $("[data-form-ms=\x22submit-btn\x22]")[_0x3c1b0f(0x23f)]();
  }
  $($(steps[x])[_0x3c1b0f(0x23d)](_0x3c1b0f(0x223))[0x0])[_0x3c1b0f(0x1f0)](),
    $($(steps[x])[_0x3c1b0f(0x23d)](_0x3c1b0f(0x17d))[0x0])["focus"](),
    validation();
  for (idx = 0x0; idx <= x; idx++) {
    $($(_0x3c1b0f(0x15a))[idx])["removeClass"](_0x3c1b0f(0x23a));
  }
}
function validateEmail(_0x49775c, _0x70bd5f, _0xd240bd) {
  const _0x51ebc4 = _0x2b8fa1;
  let _0x260bea = _0x49775c[_0x51ebc4(0x1ca)]("@")
    ? _0x49775c[_0x51ebc4(0x1fd)]("@")[0x1][_0x51ebc4(0x1fd)](".")[0x0]
    : [];
  dom = [];
  _0x70bd5f !== undefined &&
    _0x70bd5f[_0x51ebc4(0x1fd)](",")[_0x51ebc4(0x172)](function (_0x3bebd6) {
      const _0x1a764a = _0x51ebc4;
      _0x3bebd6["includes"](_0x260bea) && dom[_0x1a764a(0x12e)](_0x260bea);
    });
  dom[_0x51ebc4(0x231)] > 0x0 ? (domainAllowed = ![]) : (domainAllowed = !![]);
  var _0x45349a = /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,20})?$/;
  console[_0x51ebc4(0x22f)](_0x45349a[_0x51ebc4(0x1c7)](_0x49775c)),
    !_0x45349a[_0x51ebc4(0x1c7)](_0x49775c) || !domainAllowed
      ? ((emailFilled = ![]), unfilledArr["push"]({ input: _0xd240bd }))
      : (emailFilled = !![]);
}
function phoneValidation(_0x38cfd8, _0x3fc7ce, _0x1a064e) {
  const _0x16e3c3 = _0x2b8fa1;
  if (phoneFormat)
    return _0x38cfd8[_0x16e3c3(0x220)](
      new RegExp(phoneFormat[_0x16e3c3(0x1a5)](0x1, -0x1)),
    ) && _0x3fc7ce >= _0x1a064e
      ? !![]
      : ![];
  else {
    if (_0x3fc7ce >= _0x1a064e) return !![];
  }
}
function validation() {
  const _0x2f6028 = _0x2b8fa1;
  $(steps[x])[_0x2f6028(0x142)](_0x2f6028(0x1d8)) && enableBtn();
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
    (textareaLength = $(steps[x])[_0x2f6028(0x23d)](_0x2f6028(0x160))[
      _0x2f6028(0x231)
    ]),
    (textInputLength = $(steps[x])["find"](_0x2f6028(0x168))[_0x2f6028(0x231)]),
    (selectInputLength = $(steps[x])[_0x2f6028(0x23d)](_0x2f6028(0x1d2))[
      _0x2f6028(0x231)
    ]),
    (emailInputLength = $(steps[x])[_0x2f6028(0x23d)](_0x2f6028(0x19e))[
      _0x2f6028(0x231)
    ]),
    (checkboxInputLength = $(steps[x])[_0x2f6028(0x23d)](_0x2f6028(0x228))[
      _0x2f6028(0x231)
    ]);
  textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0
    ? disableBtn()
    : enableBtn();
  checkCount = $(steps[x])["data"](_0x2f6028(0x14b))
    ? $(steps[x])["data"](_0x2f6028(0x14b))
    : $(steps[x])[_0x2f6028(0x23d)](_0x2f6028(0x1e7))[_0x2f6028(0x231)] > 0x0
      ? $(steps[x])
          [_0x2f6028(0x23d)](_0x2f6028(0x1e7))
          [_0x2f6028(0x142)](_0x2f6028(0x14b))
      : 0x0;
  if (!logicExtra)
    $(steps[x])[_0x2f6028(0x23d)](_0x2f6028(0x14a))["is"](_0x2f6028(0x19c)) &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])[_0x2f6028(0x23d)](":input[type=\x22checkbox\x22]")[
          _0x2f6028(0x231)
        ]
        ? $(steps[x])
            ["find"](":input[type=\x22checkbox\x22]")
            [_0x2f6028(0x21f)](function () {
              const _0x227134 = _0x2f6028;
              $(this)["is"](_0x227134(0x1dd))
                ? $(steps[x])[_0x227134(0x23d)](_0x227134(0x1e6))[
                    _0x227134(0x231)
                  ] < 0x1 &&
                  ((checkboxFilled = !![]),
                  resetInputErrorMessage($(this)["attr"](_0x227134(0x16c))))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0x227134(0x12e)]({
                    input: $(this)[_0x227134(0x243)]("name"),
                  }));
            })
        : $(steps[x])[_0x2f6028(0x23d)](
              ":input[type=\x22checkbox\x22]:checked",
            )[_0x2f6028(0x231)] >= checkCount
          ? $(steps[x])[_0x2f6028(0x23d)](
              ":input[type=\x22checkbox\x22][required]",
            )[_0x2f6028(0x231)] > 0x0
            ? $(steps[x])
                ["find"](_0x2f6028(0x1e6))
                [_0x2f6028(0x21f)](function () {
                  const _0xf3cd3c = _0x2f6028;
                  !$(this)["is"](":checked")
                    ? ((checkboxFilled = ![]),
                      unfilledArr["push"]({
                        input: $(this)[_0xf3cd3c(0x243)]("name"),
                      }))
                    : ((checkboxFilled = !![]),
                      $(steps[x])[_0xf3cd3c(0x23d)](_0xf3cd3c(0x1c2))[
                        _0xf3cd3c(0x231)
                      ] >=
                        $(steps[x])[_0xf3cd3c(0x23d)](
                          ":input[type=\x22checkbox\x22][required]",
                        )[_0xf3cd3c(0x231)] &&
                        resetInputErrorMessage(
                          $(steps[x])
                            [_0xf3cd3c(0x23d)](_0xf3cd3c(0x1d9))
                            ["attr"](_0xf3cd3c(0x16c)),
                        ));
                })
            : ((checkboxFilled = !![]),
              resetInputErrorMessage(
                $(steps[x])
                  ["find"](_0x2f6028(0x1d9))
                  [_0x2f6028(0x243)](_0x2f6028(0x16c)),
              ))
          : ((checkboxFilled = ![]),
            $(steps[x])
              [_0x2f6028(0x23d)](":input[type=\x22checkbox\x22][required]")
              [_0x2f6028(0x21f)](function () {
                const _0x50440c = _0x2f6028;
                $(this)[_0x50440c(0x1db)](_0x50440c(0x1dd)) &&
                  unfilledArr["push"]({
                    input: $(this)[_0x50440c(0x243)]("name"),
                  });
              }),
            unfilledArr[_0x2f6028(0x12e)]({
              input: $(steps[x])
                ["find"](":input[type=\x22checkbox\x22]")
                [_0x2f6028(0x243)](_0x2f6028(0x16c)),
            }))),
      $(steps[x])
        [_0x2f6028(0x23d)](_0x2f6028(0x1a9))
        [_0x2f6028(0x21f)](function (_0x11d9fd) {
          const _0x5bb296 = _0x2f6028;
          var _0x2d81e8 = $(this)["attr"](_0x5bb296(0x16c));
          $(_0x5bb296(0x20e) + _0x2d81e8 + _0x5bb296(0x139))[
            _0x5bb296(0x231)
          ] == 0x0
            ? (!empReqRadio["find"](
                (_0x3ec9e5) => _0x3ec9e5[_0x5bb296(0x16a)] === _0x11d9fd,
              ) && empReqRadio[_0x5bb296(0x12e)]({ input: _0x11d9fd }),
              unfilledArr[_0x5bb296(0x12e)]({
                input: $(this)[_0x5bb296(0x243)]("name"),
              }))
            : (empReqRadio = empReqRadio[_0x5bb296(0x205)](
                (_0x2cc285) => _0x2cc285["input"] !== _0x11d9fd,
              )),
            empReqRadio[_0x5bb296(0x231)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x2f6028(0x204))
        ["each"](function (_0xa392ba) {
          const _0x1c2a74 = _0x2f6028;
          let _0x5193a8 = $(this)[_0x1c2a74(0x17b)]()[_0x1c2a74(0x231)],
            _0x259151 = $(this)[_0x1c2a74(0x142)]("min-character")
              ? $(this)[_0x1c2a74(0x142)](_0x1c2a74(0x16f))
              : 0x0;
          $(this)["val"]() !== "" && _0x5193a8 >= _0x259151
            ? (empReqInput = empReqInput["filter"](
                (_0x2f1611) => _0x2f1611[_0x1c2a74(0x16a)] !== _0xa392ba,
              ))
            : (!empReqInput[_0x1c2a74(0x23d)](
                (_0x372980) => _0x372980[_0x1c2a74(0x16a)] === _0xa392ba,
              ) && empReqInput[_0x1c2a74(0x12e)]({ input: _0xa392ba }),
              unfilledArr[_0x1c2a74(0x12e)]({
                input: $(this)["attr"]("name"),
              })),
            empReqInput[_0x1c2a74(0x231)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x2f6028(0x23d)](_0x2f6028(0x141))
        ["each"](function (_0x5c5a7b) {
          const _0x41d11a = _0x2f6028;
          let _0x524413 = $(this)[_0x41d11a(0x17b)]()[_0x41d11a(0x231)],
            _0x29e91a = $(this)[_0x41d11a(0x142)]("min-character")
              ? $(this)["data"]("min-character")
              : 0x0;
          $(this)[_0x41d11a(0x17b)]() !== "" && _0x524413 >= _0x29e91a
            ? (empReqPassword = empReqPassword[_0x41d11a(0x205)](
                (_0x56da89) => _0x56da89[_0x41d11a(0x16a)] !== _0x5c5a7b,
              ))
            : (!empReqPassword[_0x41d11a(0x23d)](
                (_0xaec6e0) => _0xaec6e0[_0x41d11a(0x16a)] === _0x5c5a7b,
              ) && empReqPassword[_0x41d11a(0x12e)]({ input: _0x5c5a7b }),
              unfilledArr[_0x41d11a(0x12e)]({
                input: $(this)["attr"](_0x41d11a(0x16c)),
              })),
            empReqPassword[_0x41d11a(0x231)] === 0x0
              ? (passwordFilled = !![])
              : (passwordFilled = ![]);
        }),
      $(steps[x])
        [_0x2f6028(0x23d)](":input[type=\x22url\x22][required]")
        ["each"](function (_0x35cf89) {
          const _0x2a9710 = _0x2f6028;
          let _0x3e5725 = $(this)["val"]()[_0x2a9710(0x231)],
            _0x457137 = $(this)[_0x2a9710(0x142)](_0x2a9710(0x16f))
              ? $(this)[_0x2a9710(0x142)]("min-character")
              : 0x0;
          $(this)[_0x2a9710(0x17b)]() !== "" && _0x3e5725 >= _0x457137
            ? (empReqUrl = empReqUrl[_0x2a9710(0x205)](
                (_0x53789d) => _0x53789d[_0x2a9710(0x16a)] !== _0x35cf89,
              ))
            : (!empReqUrl[_0x2a9710(0x23d)](
                (_0x3a0881) => _0x3a0881[_0x2a9710(0x16a)] === _0x35cf89,
              ) && empReqUrl[_0x2a9710(0x12e)]({ input: _0x35cf89 }),
              unfilledArr[_0x2a9710(0x12e)]({
                input: $(this)["attr"]("name"),
              })),
            empReqUrl[_0x2a9710(0x231)] === 0x0 &&
            validateURL($(this)[_0x2a9710(0x17b)]())
              ? ((urlFilled = !![]), console[_0x2a9710(0x22f)](urlFilled))
              : (urlFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x2f6028(0x1c8))
        [_0x2f6028(0x21f)](function (_0x1ce9d0) {
          const _0x5dfae5 = _0x2f6028;
          $(this)[_0x5dfae5(0x17b)]() !== ""
            ? (empReqDate = empReqDate["filter"](
                (_0x5eb1e3) => _0x5eb1e3[_0x5dfae5(0x16a)] !== _0x1ce9d0,
              ))
            : (!empReqDate[_0x5dfae5(0x23d)](
                (_0x2e7b55) => _0x2e7b55[_0x5dfae5(0x16a)] === _0x1ce9d0,
              ) && empReqDate[_0x5dfae5(0x12e)]({ input: _0x1ce9d0 }),
              unfilledArr["push"]({
                input: $(this)[_0x5dfae5(0x243)](_0x5dfae5(0x16c)),
              })),
            empReqDate[_0x5dfae5(0x231)] === 0x0
              ? (dateFilled = !![])
              : (dateFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x2f6028(0x167))
        ["each"](function (_0xfb2b5d) {
          const _0x5b920c = _0x2f6028;
          if ($(this)[_0x5b920c(0x17b)]() !== "") {
            let _0xb598eb = $(this)[_0x5b920c(0x17b)]()[_0x5b920c(0x231)],
              _0x25f4ff = $(this)["data"]("min-character")
                ? $(this)[_0x5b920c(0x142)](_0x5b920c(0x16f))
                : 0x0;
            if ($(this)[_0x5b920c(0x142)](_0x5b920c(0x149))) {
              var _0x345c04 = phoneAutoFormat(
                $(this)[_0x5b920c(0x142)](_0x5b920c(0x149)),
              );
              $(this)[_0x5b920c(0x17b)](_0x345c04($(this)["val"]()));
            }
            phoneValidation($(this)[_0x5b920c(0x17b)](), _0xb598eb, _0x25f4ff)
              ? (empReqTel = empReqTel[_0x5b920c(0x205)](
                  (_0x3f6272) => _0x3f6272[_0x5b920c(0x16a)] !== _0xfb2b5d,
                ))
              : empReqTel[_0x5b920c(0x12e)]({ input: _0xfb2b5d });
          } else
            !empReqTel[_0x5b920c(0x23d)](
              (_0x52aa57) => _0x52aa57["input"] === _0xfb2b5d,
            ) && empReqTel["push"]({ input: _0xfb2b5d }),
              unfilledArr[_0x5b920c(0x12e)]({
                input: $(this)[_0x5b920c(0x243)](_0x5b920c(0x16c)),
              });
          empReqTel[_0x5b920c(0x231)] === 0x0
            ? (telFilled = !![])
            : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x2f6028(0x23d)](":input[type=\x22file\x22][required]")
        [_0x2f6028(0x21f)](function (_0x433ce3) {
          const _0x4f2bdc = _0x2f6028;
          $(this)[_0x4f2bdc(0x17b)]() !== ""
            ? (empReqFile = empReqFile[_0x4f2bdc(0x205)](
                (_0x2fdc97) => _0x2fdc97[_0x4f2bdc(0x16a)] !== _0x433ce3,
              ))
            : (!empReqFile[_0x4f2bdc(0x23d)](
                (_0x4fa153) => _0x4fa153[_0x4f2bdc(0x16a)] === _0x433ce3,
              ) && empReqFile[_0x4f2bdc(0x12e)]({ input: _0x433ce3 }),
              unfilledArr[_0x4f2bdc(0x12e)]({
                input: $(this)[_0x4f2bdc(0x243)](_0x4f2bdc(0x16c)),
              })),
            empReqFile["length"] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x2f6028(0x23d)](_0x2f6028(0x19a))
        [_0x2f6028(0x21f)](function (_0x5db12b) {
          const _0x5f2955 = _0x2f6028;
          let _0x3d3abc = $(this)[_0x5f2955(0x17b)]()[_0x5f2955(0x231)],
            _0x5e9a86 = $(this)[_0x5f2955(0x142)](_0x5f2955(0x16f))
              ? $(this)[_0x5f2955(0x142)](_0x5f2955(0x16f))
              : 0x0;
          $(this)["val"]() !== "" && _0x3d3abc >= _0x5e9a86
            ? (empReqNum = empReqNum[_0x5f2955(0x205)](
                (_0xb54361) => _0xb54361[_0x5f2955(0x16a)] !== _0x5db12b,
              ))
            : (!empReqNum[_0x5f2955(0x23d)](
                (_0x381db4) => _0x381db4[_0x5f2955(0x16a)] === _0x5db12b,
              ) && empReqNum["push"]({ input: _0x5db12b }),
              unfilledArr[_0x5f2955(0x12e)]({
                input: $(this)["attr"](_0x5f2955(0x16c)),
              })),
            empReqNum["length"] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x2f6028(0x23d)](_0x2f6028(0x1b2))
        [_0x2f6028(0x21f)](function (_0x36ec66) {
          const _0x56d4f6 = _0x2f6028;
          let _0x28f745 = $(this)["val"]();
          _0x28f745 === "" && (_0x28f745 = null),
            _0x28f745 != null
              ? (empReqSelect = empReqSelect["filter"](
                  (_0x3550e1) => _0x3550e1["input"] !== _0x36ec66,
                ))
              : (!empReqSelect["find"](
                  (_0x305d96) => _0x305d96[_0x56d4f6(0x16a)] === _0x36ec66,
                ) && empReqSelect["push"]({ input: _0x36ec66 }),
                unfilledArr[_0x56d4f6(0x12e)]({
                  input: $(this)[_0x56d4f6(0x243)]("name"),
                })),
            empReqSelect[_0x56d4f6(0x231)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x2f6028(0x23d)](_0x2f6028(0x1ac))
        [_0x2f6028(0x21f)](function (_0xa3baac) {
          const _0x4bea69 = _0x2f6028;
          let _0x124371 = $(this)[_0x4bea69(0x17b)]()[_0x4bea69(0x231)],
            _0x7d43c0 = $(this)[_0x4bea69(0x142)]("min-character")
              ? $(this)[_0x4bea69(0x142)]("min-character")
              : 0x0;
          $(this)["val"]() !== "" && _0x124371 >= _0x7d43c0
            ? (empReqTextarea = empReqTextarea[_0x4bea69(0x205)](
                (_0x4b1634) => _0x4b1634[_0x4bea69(0x16a)] !== _0xa3baac,
              ))
            : (!empReqTextarea["find"](
                (_0x1104c1) => _0x1104c1["input"] === _0xa3baac,
              ) && empReqTextarea["push"]({ input: _0xa3baac }),
              unfilledArr[_0x4bea69(0x12e)]({
                input: $(this)[_0x4bea69(0x243)](_0x4bea69(0x16c)),
              })),
            empReqTextarea[_0x4bea69(0x231)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x2f6028(0x23d)](_0x2f6028(0x1a7))
        [_0x2f6028(0x21f)](function () {
          const _0x3290b6 = _0x2f6028;
          $(this)[_0x3290b6(0x17b)]() !== ""
            ? validateEmail(
                $(this)["val"](),
                $(this)[_0x3290b6(0x142)]("block-domain"),
                $(this)[_0x3290b6(0x243)](_0x3290b6(0x16c)),
              )
            : ((emailFilled = ![]),
              unfilledArr[_0x3290b6(0x12e)]({
                input: $(this)[_0x3290b6(0x243)](_0x3290b6(0x16c)),
              }));
        });
  else {
    if ($(steps[x])[_0x2f6028(0x142)]("card"))
      (answer = $(steps[x])
        [_0x2f6028(0x23d)](_0x2f6028(0x237))
        [_0x2f6028(0x142)](_0x2f6028(0x20f))),
        (selections = selections["filter"](
          (_0x1e777d) => _0x1e777d[_0x2f6028(0x1bb)] !== x,
        )),
        selections[_0x2f6028(0x12e)]({ step: x, selected: answer });
    else
      $(steps[x])
        [_0x2f6028(0x23d)](_0x2f6028(0x1e0))
        [_0x2f6028(0x142)](_0x2f6028(0x1d8)) &&
        ((answer = $(steps[x])
          [_0x2f6028(0x23d)](".active-answer-card")
          [_0x2f6028(0x142)](_0x2f6028(0x20f))),
        (selections = selections[_0x2f6028(0x205)](
          (_0x23421c) => _0x23421c[_0x2f6028(0x1bb)] !== x,
        )),
        selections[_0x2f6028(0x12e)]({ step: x, selected: answer }));
    $(steps[x])
      [_0x2f6028(0x23d)](".active-answer-card")
      ["find"](":input")
      ["is"](_0x2f6028(0x19c)) &&
      (checkCount === "*" ||
      checkCount > $(steps[x])[_0x2f6028(0x23d)](_0x2f6028(0x1d9))["length"]
        ? $(steps[x])
            [_0x2f6028(0x23d)](":input[type=\x22checkbox\x22]")
            ["each"](function () {
              const _0x58c87e = _0x2f6028;
              $(this)["is"](":checked")
                ? $(steps[x])[_0x58c87e(0x23d)](_0x58c87e(0x21c))["length"] <
                    0x1 &&
                  ((skipTo = undefined),
                  $(this)
                    ["parents"](_0x58c87e(0x1ad))
                    [_0x58c87e(0x142)](_0x58c87e(0x148)) &&
                    (skipTo = $(this)
                      [_0x58c87e(0x12f)]("[data-skip-to]")
                      [_0x58c87e(0x142)](_0x58c87e(0x148))),
                  $(this)
                    [_0x58c87e(0x12f)](_0x58c87e(0x237))
                    [_0x58c87e(0x243)](_0x58c87e(0x1fb)) &&
                    ((answer = $(this)
                      [_0x58c87e(0x12f)](_0x58c87e(0x237))
                      [_0x58c87e(0x243)](_0x58c87e(0x1fb))),
                    (selections = selections["filter"](
                      (_0x3a0cce) => _0x3a0cce[_0x58c87e(0x1bb)] !== x,
                    )),
                    selections["push"]({ step: x, selected: answer }),
                    skipTo &&
                      (selections[_0x58c87e(0x12e)]({
                        step: skipTo - 0x2,
                        selected: answer,
                      }),
                      (objIndex = selections[_0x58c87e(0x21e)](
                        (_0x140a3a) => _0x140a3a[_0x58c87e(0x1bb)] === x,
                      )),
                      (selections[objIndex][_0x58c87e(0x1f2)] =
                        parseInt(skipTo) - 0x1),
                      (selections[objIndex]["backTo"] = x))),
                  (checkboxFilled = !![]),
                  $(steps[x])[_0x58c87e(0x23d)](_0x58c87e(0x1c2))[
                    _0x58c87e(0x231)
                  ] >=
                    $(steps[x])[_0x58c87e(0x23d)](_0x58c87e(0x1e6))["length"] &&
                    resetInputErrorMessage(
                      $(steps[x])
                        [_0x58c87e(0x23d)](_0x58c87e(0x1d9))
                        ["attr"](_0x58c87e(0x16c)),
                    ))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0x58c87e(0x12e)]({
                    input: $(this)[_0x58c87e(0x243)](_0x58c87e(0x16c)),
                  }));
            })
        : $(steps[x])
              [_0x2f6028(0x23d)](".active-answer-card")
              ["find"](_0x2f6028(0x1e4))[_0x2f6028(0x231)] >= checkCount
          ? ($(steps[x])
              ["find"](".active-answer-card")
              [_0x2f6028(0x23d)](":input[type=\x22checkbox\x22]")
              ["parents"](_0x2f6028(0x237))
              [_0x2f6028(0x243)]("data-go-to") &&
              ((skipTo = undefined),
              $(steps[x])
                ["find"](_0x2f6028(0x1e0))
                [_0x2f6028(0x23d)](":input[type=\x22checkbox\x22]")
                [_0x2f6028(0x12f)](_0x2f6028(0x1ad))
                [_0x2f6028(0x243)](_0x2f6028(0x197)) &&
                (skipTo = $(steps[x])
                  [_0x2f6028(0x23d)](_0x2f6028(0x1e0))
                  [_0x2f6028(0x23d)](":input[type=\x22checkbox\x22]:checked")
                  [_0x2f6028(0x12f)](_0x2f6028(0x1ad))
                  [_0x2f6028(0x243)](_0x2f6028(0x197))),
              (answer = $(steps[x])
                [_0x2f6028(0x23d)](".active-answer-card")
                [_0x2f6028(0x23d)](_0x2f6028(0x1d9))
                [_0x2f6028(0x12f)](_0x2f6028(0x237))
                [_0x2f6028(0x243)](_0x2f6028(0x1fb))),
              (selections = selections["filter"](
                (_0x202716) => _0x202716[_0x2f6028(0x1bb)] !== x,
              )),
              selections[_0x2f6028(0x12e)]({ step: x, selected: answer }),
              console["log"](_0x2f6028(0x1af), selections),
              skipTo &&
                ((selections = selections[_0x2f6028(0x205)](
                  (_0x86f661) => _0x86f661["step"] !== skipTo - 0x2,
                )),
                selections[_0x2f6028(0x12e)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x2f6028(0x21e)](
                  (_0x3ac3cf) => _0x3ac3cf[_0x2f6028(0x1bb)] === x,
                )),
                console["log"](objIndex),
                (selections[objIndex][_0x2f6028(0x1f2)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x2f6028(0x12d)] = x),
                console[_0x2f6028(0x22f)](_0x2f6028(0x1e5)))),
            (checkboxFilled = !![]),
            $(steps[x])[_0x2f6028(0x23d)](_0x2f6028(0x1c2))["length"] >=
              $(steps[x])[_0x2f6028(0x23d)](_0x2f6028(0x1e6))[
                _0x2f6028(0x231)
              ] &&
              resetInputErrorMessage(
                $(steps[x])
                  [_0x2f6028(0x23d)](_0x2f6028(0x1d9))
                  [_0x2f6028(0x243)](_0x2f6028(0x16c)),
              ))
          : ((checkboxFilled = ![]),
            $(steps[x])
              [_0x2f6028(0x23d)](_0x2f6028(0x1e6))
              [_0x2f6028(0x21f)](function () {
                const _0x324542 = _0x2f6028;
                $(this)[_0x324542(0x1db)](_0x324542(0x1dd)) &&
                  unfilledArr[_0x324542(0x12e)]({
                    input: $(this)["attr"](_0x324542(0x16c)),
                  });
              }))),
      $(steps[x])
        [_0x2f6028(0x23d)](_0x2f6028(0x1e0))
        ["find"](_0x2f6028(0x1a9))
        [_0x2f6028(0x21f)](function (_0xaffb00) {
          const _0x3189fd = _0x2f6028;
          var _0x4c0eb4 = $(this)[_0x3189fd(0x243)](_0x3189fd(0x16c));
          $(_0x3189fd(0x20e) + _0x4c0eb4 + _0x3189fd(0x139))["length"] == 0x0
            ? (!empReqRadio["find"](
                (_0x4cad93) => _0x4cad93[_0x3189fd(0x16a)] === _0xaffb00,
              ) && empReqRadio[_0x3189fd(0x12e)]({ input: _0xaffb00 }),
              unfilledArr[_0x3189fd(0x12e)]({
                input: $(this)[_0x3189fd(0x243)](_0x3189fd(0x16c)),
              }))
            : (empReqRadio = empReqRadio[_0x3189fd(0x205)](
                (_0x2dd85f) => _0x2dd85f[_0x3189fd(0x16a)] !== _0xaffb00,
              )),
            empReqRadio[_0x3189fd(0x231)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        ["find"](".active-answer-card")
        [_0x2f6028(0x23d)](_0x2f6028(0x204))
        [_0x2f6028(0x21f)](function (_0x5dcc54) {
          const _0x9d5f2 = _0x2f6028;
          let _0x5d5b63 = $(this)["val"]()[_0x9d5f2(0x231)],
            _0x329f5e = $(this)["data"]("min-character")
              ? $(this)[_0x9d5f2(0x142)](_0x9d5f2(0x16f))
              : 0x0;
          $(this)[_0x9d5f2(0x17b)]() !== "" && _0x5d5b63 >= _0x329f5e
            ? (empReqInput = empReqInput[_0x9d5f2(0x205)](
                (_0xe4798b) => _0xe4798b[_0x9d5f2(0x16a)] !== _0x5dcc54,
              ))
            : (!empReqInput[_0x9d5f2(0x23d)](
                (_0x4f3e69) => _0x4f3e69["input"] === _0x5dcc54,
              ) && empReqInput[_0x9d5f2(0x12e)]({ input: _0x5dcc54 }),
              unfilledArr[_0x9d5f2(0x12e)]({
                input: $(this)["attr"](_0x9d5f2(0x16c)),
              })),
            empReqInput[_0x9d5f2(0x231)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x2f6028(0x23d)](".active-answer-card")
        [_0x2f6028(0x23d)](":input[type=\x22text\x22]")
        ["each"](function (_0x32999b) {
          const _0x467a68 = _0x2f6028;
          (skipTo = undefined),
            $(this)
              ["parents"](_0x467a68(0x1ad))
              [_0x467a68(0x142)]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0x467a68(0x12f)](_0x467a68(0x1ad))
                ["data"](_0x467a68(0x148))),
            $(this)
              [_0x467a68(0x12f)](_0x467a68(0x237))
              [_0x467a68(0x243)]("data-go-to") &&
              ((answer = $(this)
                ["parents"](_0x467a68(0x237))
                [_0x467a68(0x243)]("data-go-to")),
              (selections = selections[_0x467a68(0x205)](
                (_0x1bcc4e) => _0x1bcc4e[_0x467a68(0x1bb)] !== x,
              )),
              selections[_0x467a68(0x12e)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections["findIndex"](
                  (_0x39aa16) => _0x39aa16[_0x467a68(0x1bb)] === x,
                )),
                (selections[objIndex][_0x467a68(0x1f2)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x467a68(0x12d)] = x)));
        }),
      $(steps[x])
        [_0x2f6028(0x23d)](_0x2f6028(0x1e0))
        ["find"](":input[type=\x22password\x22][required]")
        ["each"](function (_0x2adf01) {
          const _0x12f8d0 = _0x2f6028;
          let _0x40ee5a = $(this)[_0x12f8d0(0x17b)]()[_0x12f8d0(0x231)],
            _0x32564c = $(this)[_0x12f8d0(0x142)]("min-character")
              ? $(this)[_0x12f8d0(0x142)](_0x12f8d0(0x16f))
              : 0x0;
          $(this)[_0x12f8d0(0x17b)]() !== "" && _0x40ee5a >= _0x32564c
            ? (empReqPassword = empReqPassword[_0x12f8d0(0x205)](
                (_0x22d675) => _0x22d675[_0x12f8d0(0x16a)] !== _0x2adf01,
              ))
            : (!empReqPassword["find"](
                (_0x326298) => _0x326298[_0x12f8d0(0x16a)] === _0x2adf01,
              ) && empReqPassword[_0x12f8d0(0x12e)]({ input: _0x2adf01 }),
              unfilledArr[_0x12f8d0(0x12e)]({
                input: $(this)[_0x12f8d0(0x243)](_0x12f8d0(0x16c)),
              })),
            empReqPassword[_0x12f8d0(0x231)] === 0x0
              ? (passwordFilled = !![])
              : (passwordFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x2f6028(0x1e0))
        [_0x2f6028(0x23d)](":input[type=\x22password\x22]")
        ["each"](function (_0x16e434) {
          const _0x516e2e = _0x2f6028;
          (skipTo = undefined),
            $(this)
              [_0x516e2e(0x12f)]("[data-skip-to]")
              [_0x516e2e(0x142)]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0x516e2e(0x12f)](_0x516e2e(0x1ad))
                [_0x516e2e(0x142)]("skip-to")),
            $(this)
              [_0x516e2e(0x12f)](_0x516e2e(0x237))
              [_0x516e2e(0x243)](_0x516e2e(0x1fb)) &&
              ((answer = $(this)
                ["parents"](_0x516e2e(0x237))
                [_0x516e2e(0x243)]("data-go-to")),
              (selections = selections[_0x516e2e(0x205)](
                (_0x523489) => _0x523489[_0x516e2e(0x1bb)] !== x,
              )),
              selections[_0x516e2e(0x12e)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x516e2e(0x12e)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x4da015) => _0x4da015[_0x516e2e(0x1bb)] === x,
                )),
                (selections[objIndex][_0x516e2e(0x1f2)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        ["find"](".active-answer-card")
        [_0x2f6028(0x23d)](_0x2f6028(0x1e9))
        [_0x2f6028(0x21f)](function (_0x5ae525) {
          const _0x28970d = _0x2f6028;
          let _0x5786f4 = $(this)["val"]()[_0x28970d(0x231)],
            _0x454c90 = $(this)[_0x28970d(0x142)]("min-character")
              ? $(this)[_0x28970d(0x142)]("min-character")
              : 0x0;
          $(this)["val"]() !== "" && _0x5786f4 >= _0x454c90
            ? (empReqUrl = empReqUrl[_0x28970d(0x205)](
                (_0x56bc3e) => _0x56bc3e[_0x28970d(0x16a)] !== _0x5ae525,
              ))
            : (!empReqUrl[_0x28970d(0x23d)](
                (_0x11268d) => _0x11268d[_0x28970d(0x16a)] === _0x5ae525,
              ) && empReqUrl[_0x28970d(0x12e)]({ input: _0x5ae525 }),
              unfilledArr[_0x28970d(0x12e)]({
                input: $(this)[_0x28970d(0x243)](_0x28970d(0x16c)),
              })),
            empReqUrl[_0x28970d(0x231)] === 0x0 &&
            validateURL($(this)[_0x28970d(0x17b)]())
              ? (urlFilled = !![])
              : (urlFilled = ![]);
        }),
      $(steps[x])
        [_0x2f6028(0x23d)](_0x2f6028(0x1e0))
        [_0x2f6028(0x23d)](_0x2f6028(0x218))
        [_0x2f6028(0x21f)](function (_0x3d3164) {
          const _0x5824d3 = _0x2f6028;
          (skipTo = undefined),
            $(this)
              [_0x5824d3(0x12f)](_0x5824d3(0x1ad))
              [_0x5824d3(0x142)](_0x5824d3(0x148)) !== "" &&
              (skipTo = $(this)
                [_0x5824d3(0x12f)](_0x5824d3(0x1ad))
                [_0x5824d3(0x142)](_0x5824d3(0x148))),
            $(this)
              [_0x5824d3(0x12f)]("[data-go-to]")
              [_0x5824d3(0x243)]("data-go-to") &&
              ((answer = $(this)
                [_0x5824d3(0x12f)](_0x5824d3(0x237))
                [_0x5824d3(0x243)](_0x5824d3(0x1fb))),
              (selections = selections[_0x5824d3(0x205)](
                (_0x45bea0) => _0x45bea0["step"] !== x,
              )),
              selections[_0x5824d3(0x12e)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0x5824d3(0x21e)](
                  (_0x3b8707) => _0x3b8707[_0x5824d3(0x1bb)] === x,
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x5824d3(0x12d)] = x)));
        }),
      $(steps[x])
        [_0x2f6028(0x23d)](".active-answer-card")
        [_0x2f6028(0x23d)](_0x2f6028(0x1c8))
        [_0x2f6028(0x21f)](function (_0x22f7a8) {
          const _0x32eebc = _0x2f6028;
          $(this)[_0x32eebc(0x17b)]() !== ""
            ? (empReqDate = empReqDate[_0x32eebc(0x205)](
                (_0x497369) => _0x497369[_0x32eebc(0x16a)] !== _0x22f7a8,
              ))
            : (!empReqDate[_0x32eebc(0x23d)](
                (_0x4ee524) => _0x4ee524[_0x32eebc(0x16a)] === _0x22f7a8,
              ) && empReqDate["push"]({ input: _0x22f7a8 }),
              unfilledArr[_0x32eebc(0x12e)]({
                input: $(this)[_0x32eebc(0x243)](_0x32eebc(0x16c)),
              })),
            empReqDate[_0x32eebc(0x231)] === 0x0
              ? (dateFilled = !![])
              : (dateFilled = ![]);
        }),
      $(steps[x])
        [_0x2f6028(0x23d)](_0x2f6028(0x1e0))
        ["find"](":input[type=\x22date\x22]")
        [_0x2f6028(0x21f)](function (_0x3c82d8) {
          const _0x16e2fa = _0x2f6028;
          (skipTo = undefined),
            $(this)
              ["parents"](_0x16e2fa(0x1ad))
              [_0x16e2fa(0x142)]("skip-to") !== "" &&
              (skipTo = $(this)
                ["parents"](_0x16e2fa(0x1ad))
                [_0x16e2fa(0x142)]("skip-to")),
            $(this)
              [_0x16e2fa(0x12f)]("[data-go-to]")
              ["attr"](_0x16e2fa(0x1fb)) &&
              ((answer = $(this)
                [_0x16e2fa(0x12f)](_0x16e2fa(0x237))
                [_0x16e2fa(0x243)]("data-go-to")),
              (selections = selections[_0x16e2fa(0x205)](
                (_0x3d069f) => _0x3d069f["step"] !== x,
              )),
              selections[_0x16e2fa(0x12e)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x16e2fa(0x12e)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x16e2fa(0x21e)](
                  (_0x47f481) => _0x47f481[_0x16e2fa(0x1bb)] === x,
                )),
                (selections[objIndex][_0x16e2fa(0x1f2)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x2f6028(0x23d)](_0x2f6028(0x1e0))
        [_0x2f6028(0x23d)](_0x2f6028(0x19a))
        ["each"](function (_0x1fbe9d) {
          const _0x4ae8b5 = _0x2f6028;
          let _0x57c179 = $(this)[_0x4ae8b5(0x17b)]()[_0x4ae8b5(0x231)],
            _0x2242a0 = $(this)[_0x4ae8b5(0x142)](_0x4ae8b5(0x16f))
              ? $(this)[_0x4ae8b5(0x142)](_0x4ae8b5(0x16f))
              : 0x0;
          $(this)[_0x4ae8b5(0x17b)]() !== "" && _0x57c179 >= _0x2242a0
            ? (empReqNum = empReqNum[_0x4ae8b5(0x205)](
                (_0x3106c4) => _0x3106c4[_0x4ae8b5(0x16a)] !== _0x1fbe9d,
              ))
            : (!empReqNum[_0x4ae8b5(0x23d)](
                (_0x36b317) => _0x36b317[_0x4ae8b5(0x16a)] === _0x1fbe9d,
              ) && empReqNum[_0x4ae8b5(0x12e)]({ input: _0x1fbe9d }),
              unfilledArr[_0x4ae8b5(0x12e)]({
                input: $(this)[_0x4ae8b5(0x243)](_0x4ae8b5(0x16c)),
              })),
            empReqNum[_0x4ae8b5(0x231)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x2f6028(0x23d)](_0x2f6028(0x1e0))
        [_0x2f6028(0x23d)](":input[type=\x22number\x22]")
        [_0x2f6028(0x21f)](function (_0x4adf42) {
          const _0x59ba5f = _0x2f6028;
          (skipTo = undefined),
            $(this)
              ["parents"](_0x59ba5f(0x1ad))
              [_0x59ba5f(0x142)](_0x59ba5f(0x148)) !== "" &&
              (skipTo = $(this)
                [_0x59ba5f(0x12f)](_0x59ba5f(0x1ad))
                [_0x59ba5f(0x142)]("skip-to")),
            $(this)
              [_0x59ba5f(0x12f)](_0x59ba5f(0x237))
              [_0x59ba5f(0x243)]("data-go-to") &&
              ((answer = $(this)
                [_0x59ba5f(0x12f)](_0x59ba5f(0x237))
                [_0x59ba5f(0x243)](_0x59ba5f(0x1fb))),
              (selections = selections[_0x59ba5f(0x205)](
                (_0x52c88e) => _0x52c88e[_0x59ba5f(0x1bb)] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x59ba5f(0x12e)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x59ba5f(0x21e)](
                  (_0x4f8c3c) => _0x4f8c3c[_0x59ba5f(0x1bb)] === x,
                )),
                (selections[objIndex][_0x59ba5f(0x1f2)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x59ba5f(0x12d)] = x)));
        }),
      $(steps[x])
        ["find"](_0x2f6028(0x1e0))
        [_0x2f6028(0x23d)](_0x2f6028(0x167))
        [_0x2f6028(0x21f)](function (_0x24a003) {
          const _0x1f1252 = _0x2f6028;
          if ($(this)[_0x1f1252(0x17b)]() !== "") {
            let _0x47d89e = $(this)[_0x1f1252(0x17b)]()[_0x1f1252(0x231)],
              _0x260c10 = $(this)["data"](_0x1f1252(0x16f))
                ? $(this)[_0x1f1252(0x142)](_0x1f1252(0x16f))
                : 0x0;
            if ($(this)["data"](_0x1f1252(0x149))) {
              var _0x2f8840 = phoneAutoFormat(
                $(this)[_0x1f1252(0x142)](_0x1f1252(0x149)),
              );
              $(this)[_0x1f1252(0x17b)](_0x2f8840($(this)[_0x1f1252(0x17b)]()));
            }
            phoneValidation($(this)["val"](), _0x47d89e, _0x260c10)
              ? (empReqTel = empReqTel[_0x1f1252(0x205)](
                  (_0x36a79a) => _0x36a79a[_0x1f1252(0x16a)] !== _0x24a003,
                ))
              : empReqTel[_0x1f1252(0x12e)]({ input: _0x24a003 });
          } else
            !empReqTel["find"](
              (_0x28c38b) => _0x28c38b[_0x1f1252(0x16a)] === _0x24a003,
            ) && empReqTel["push"]({ input: _0x24a003 }),
              unfilledArr[_0x1f1252(0x12e)]({
                input: $(this)["attr"](_0x1f1252(0x16c)),
              });
          empReqTel["length"] === 0x0 ? (telFilled = !![]) : (telFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x2f6028(0x1e0))
        [_0x2f6028(0x23d)](_0x2f6028(0x21a))
        ["each"](function (_0x5b7cf7) {
          const _0x116727 = _0x2f6028;
          (skipTo = undefined),
            $(this)
              ["parents"](_0x116727(0x1ad))
              [_0x116727(0x142)](_0x116727(0x148)) !== "" &&
              (skipTo = $(this)
                [_0x116727(0x12f)](_0x116727(0x1ad))
                [_0x116727(0x142)](_0x116727(0x148))),
            $(this)
              [_0x116727(0x12f)](_0x116727(0x237))
              [_0x116727(0x243)](_0x116727(0x1fb)) &&
              ((answer = $(this)
                ["parents"](_0x116727(0x237))
                [_0x116727(0x243)](_0x116727(0x1fb))),
              (selections = selections["filter"](
                (_0x326873) => _0x326873[_0x116727(0x1bb)] !== x,
              )),
              selections[_0x116727(0x12e)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x116727(0x12e)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x116727(0x21e)](
                  (_0x4ed8a2) => _0x4ed8a2[_0x116727(0x1bb)] === x,
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x116727(0x12d)] = x)));
        }),
      $(steps[x])
        ["find"](".active-answer-card")
        [_0x2f6028(0x23d)](_0x2f6028(0x178))
        [_0x2f6028(0x21f)](function (_0x1a0e38) {
          const _0x55f4c4 = _0x2f6028;
          $(this)[_0x55f4c4(0x17b)]() !== ""
            ? (empReqFile = empReqFile[_0x55f4c4(0x205)](
                (_0x137934) => _0x137934[_0x55f4c4(0x16a)] !== _0x1a0e38,
              ))
            : (!empReqFile[_0x55f4c4(0x23d)](
                (_0x52fb9b) => _0x52fb9b[_0x55f4c4(0x16a)] === _0x1a0e38,
              ) && empReqFile[_0x55f4c4(0x12e)]({ input: _0x1a0e38 }),
              unfilledArr[_0x55f4c4(0x12e)]({
                input: $(this)[_0x55f4c4(0x243)](_0x55f4c4(0x16c)),
              })),
            empReqFile[_0x55f4c4(0x231)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x2f6028(0x23d)](_0x2f6028(0x1e0))
        [_0x2f6028(0x23d)](":input[type=\x22file\x22]")
        [_0x2f6028(0x21f)](function (_0xf01846) {
          const _0x5e16b9 = _0x2f6028;
          (skipTo = undefined),
            $(this)
              [_0x5e16b9(0x12f)](_0x5e16b9(0x1ad))
              ["data"](_0x5e16b9(0x148)) !== "" &&
              (skipTo = $(this)
                ["parents"]("[data-skip-to]")
                [_0x5e16b9(0x142)](_0x5e16b9(0x148))),
            $(this)
              [_0x5e16b9(0x12f)](_0x5e16b9(0x237))
              ["attr"](_0x5e16b9(0x1fb)) &&
              ((answer = $(this)
                [_0x5e16b9(0x12f)](_0x5e16b9(0x237))
                ["attr"](_0x5e16b9(0x1fb))),
              (selections = selections[_0x5e16b9(0x205)](
                (_0xc3f780) => _0xc3f780[_0x5e16b9(0x1bb)] !== x,
              )),
              selections[_0x5e16b9(0x12e)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x5e16b9(0x12e)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x21f734) => _0x21f734["step"] === x,
                )),
                (selections[objIndex][_0x5e16b9(0x1f2)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x5e16b9(0x12d)] = x)));
        }),
      $(steps[x])
        [_0x2f6028(0x23d)](_0x2f6028(0x1e0))
        [_0x2f6028(0x23d)]("select[required]")
        [_0x2f6028(0x21f)](function (_0xced959) {
          const _0x5b690f = _0x2f6028;
          console[_0x5b690f(0x22f)]($(this)[_0x5b690f(0x17b)]()),
            $(this)[_0x5b690f(0x17b)]() !== null && $(this)["val"]() !== ""
              ? (empReqSelect = empReqSelect[_0x5b690f(0x205)](
                  (_0x483201) => _0x483201["input"] !== _0xced959,
                ))
              : (!empReqSelect[_0x5b690f(0x23d)](
                  (_0x28b583) => _0x28b583["input"] === _0xced959,
                ) && empReqSelect[_0x5b690f(0x12e)]({ input: _0xced959 }),
                unfilledArr[_0x5b690f(0x12e)]({
                  input: $(this)["attr"](_0x5b690f(0x16c)),
                })),
            empReqSelect[_0x5b690f(0x231)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        ["find"](".active-answer-card")
        [_0x2f6028(0x23d)](_0x2f6028(0x140))
        [_0x2f6028(0x21f)](function (_0x4ab015) {
          const _0xb38493 = _0x2f6028;
          (skipTo = undefined),
            $(this)
              [_0xb38493(0x12f)]("[data-skip-to]")
              [_0xb38493(0x142)](_0xb38493(0x148)) !== "" &&
              (skipTo = $(this)
                [_0xb38493(0x12f)](_0xb38493(0x1ad))
                [_0xb38493(0x142)](_0xb38493(0x148))),
            $(this)
              ["parents"]("[data-go-to]")
              [_0xb38493(0x243)]("data-go-to") &&
              ((answer = $(this)
                [_0xb38493(0x12f)](_0xb38493(0x237))
                [_0xb38493(0x243)](_0xb38493(0x1fb))),
              (selections = selections["filter"](
                (_0xd5a227) => _0xd5a227[_0xb38493(0x1bb)] !== x,
              )),
              selections[_0xb38493(0x12e)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0xb38493(0x12e)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x264fb9) => _0x264fb9[_0xb38493(0x1bb)] === x,
                )),
                (selections[objIndex][_0xb38493(0x1f2)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0xb38493(0x12d)] = x)));
        }),
      $(steps[x])
        [_0x2f6028(0x23d)](_0x2f6028(0x1e0))
        [_0x2f6028(0x23d)](_0x2f6028(0x1ac))
        ["each"](function (_0x16fc4e) {
          const _0x217df4 = _0x2f6028;
          let _0x425dce = $(this)[_0x217df4(0x17b)]()[_0x217df4(0x231)],
            _0x268752 = $(this)[_0x217df4(0x142)]("min-character")
              ? $(this)[_0x217df4(0x142)](_0x217df4(0x16f))
              : 0x0;
          $(this)[_0x217df4(0x17b)]() !== "" && _0x425dce >= _0x268752
            ? (empReqTextarea = empReqTextarea[_0x217df4(0x205)](
                (_0x384dd4) => _0x384dd4[_0x217df4(0x16a)] !== _0x16fc4e,
              ))
            : (!empReqTextarea[_0x217df4(0x23d)](
                (_0x25b7dd) => _0x25b7dd["input"] === _0x16fc4e,
              ) && empReqTextarea[_0x217df4(0x12e)]({ input: _0x16fc4e }),
              unfilledArr[_0x217df4(0x12e)]({
                input: $(this)[_0x217df4(0x243)](_0x217df4(0x16c)),
              })),
            empReqTextarea["length"] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x2f6028(0x23d)](".active-answer-card")
        [_0x2f6028(0x23d)](_0x2f6028(0x22e))
        [_0x2f6028(0x21f)](function (_0x315191) {
          const _0x3334fa = _0x2f6028;
          (skipTo = undefined),
            $(this)
              ["parents"](_0x3334fa(0x1ad))
              [_0x3334fa(0x142)](_0x3334fa(0x148)) !== "" &&
              (skipTo = $(this)
                ["parents"]("[data-skip-to]")
                ["data"](_0x3334fa(0x148))),
            $(this)
              [_0x3334fa(0x12f)](_0x3334fa(0x237))
              ["attr"](_0x3334fa(0x1fb)) &&
              ((answer = $(this)
                ["parents"](_0x3334fa(0x237))
                [_0x3334fa(0x243)](_0x3334fa(0x1fb))),
              (selections = selections[_0x3334fa(0x205)](
                (_0x6c6da3) => _0x6c6da3["step"] !== x,
              )),
              selections[_0x3334fa(0x12e)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x3334fa(0x12e)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x3334fa(0x21e)](
                  (_0xedb3dd) => _0xedb3dd[_0x3334fa(0x1bb)] === x,
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x2f6028(0x23d)](_0x2f6028(0x1e0))
        [_0x2f6028(0x23d)](_0x2f6028(0x1a7))
        [_0x2f6028(0x21f)](function (_0xf3e9fe) {
          const _0x352f09 = _0x2f6028;
          $(this)[_0x352f09(0x17b)]() !== ""
            ? validateEmail(
                $(this)[_0x352f09(0x17b)](),
                $(this)[_0x352f09(0x142)](_0x352f09(0x194)),
                $(this)[_0x352f09(0x243)](_0x352f09(0x16c)),
              )
            : ((emailFilled = ![]),
              unfilledArr[_0x352f09(0x12e)]({
                input: $(this)[_0x352f09(0x243)](_0x352f09(0x16c)),
              }));
        }),
      $(steps[x])
        [_0x2f6028(0x23d)](_0x2f6028(0x1e0))
        [_0x2f6028(0x23d)](":input[type=\x22email\x22]")
        [_0x2f6028(0x21f)](function (_0x331bc8) {
          const _0x4cc537 = _0x2f6028;
          (skipTo = undefined),
            $(this)[_0x4cc537(0x12f)](_0x4cc537(0x1ad))["data"]("skip-to") !==
              "" &&
              (skipTo = $(this)
                [_0x4cc537(0x12f)](_0x4cc537(0x1ad))
                [_0x4cc537(0x142)](_0x4cc537(0x148))),
            $(this)
              [_0x4cc537(0x12f)](_0x4cc537(0x237))
              [_0x4cc537(0x243)](_0x4cc537(0x1fb)) &&
              ((answer = $(this)
                [_0x4cc537(0x12f)](_0x4cc537(0x237))
                [_0x4cc537(0x243)](_0x4cc537(0x1fb))),
              (selections = selections[_0x4cc537(0x205)](
                (_0x48c2aa) => _0x48c2aa["step"] !== x,
              )),
              selections[_0x4cc537(0x12e)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0x4cc537(0x21e)](
                  (_0x4a5c38) => _0x4a5c38["step"] === x,
                )),
                (selections[objIndex][_0x4cc537(0x1f2)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        });
  }
  $(steps[x])[_0x2f6028(0x23d)](_0x2f6028(0x14e))["is"](_0x2f6028(0x1dd)) &&
    ((selArr = []),
    $(steps)
      [_0x2f6028(0x23d)](_0x2f6028(0x247))
      [_0x2f6028(0x21f)](function (_0x3a6b2e, _0x1621e3) {
        const _0x7c66f1 = _0x2f6028;
        selArr[_0x7c66f1(0x12e)]({
          selected: $(this)["data"](_0x7c66f1(0x1af)),
        });
      }),
    (selString = []),
    selArr["forEach"]((_0x4bfc68) =>
      selString[_0x2f6028(0x12e)](_0x4bfc68["selected"]),
    ),
    (selections = selections[_0x2f6028(0x205)](
      (_0x6854b7) => _0x6854b7[_0x2f6028(0x1bb)] !== x,
    )),
    $(steps[x])
      [_0x2f6028(0x23d)](_0x2f6028(0x1e0))
      ["find"](_0x2f6028(0x13a))
      [_0x2f6028(0x21f)](function () {
        const _0x298c53 = _0x2f6028;
        skipTo = undefined;
        if (
          $(this)
            ["parents"](_0x298c53(0x1ad))
            [_0x298c53(0x142)](_0x298c53(0x148))
        )
          skipTo = $(this)
            [_0x298c53(0x12f)](_0x298c53(0x1ad))
            ["data"](_0x298c53(0x148));
        else
          $(this)["data"](_0x298c53(0x148)) &&
            (skipTo = $(this)[_0x298c53(0x142)](_0x298c53(0x148)));
        if ($(this)[_0x298c53(0x142)](_0x298c53(0x20f)))
          (answer = $(this)[_0x298c53(0x243)](_0x298c53(0x1fb))),
            console[_0x298c53(0x22f)](answer, selections),
            selections["push"]({ step: x, selected: answer }),
            skipTo &&
              (selections["push"]({ step: skipTo - 0x2, selected: answer }),
              (objIndex = selections[_0x298c53(0x21e)](
                (_0x13b198) => _0x13b198[_0x298c53(0x1bb)] === x,
              )),
              (selections[objIndex][_0x298c53(0x1f2)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x298c53(0x12d)] = x));
        else
          $(this)
            [_0x298c53(0x12f)](_0x298c53(0x237))
            [_0x298c53(0x142)]("go-to") &&
            ((answer = $(this)
              [_0x298c53(0x12f)](_0x298c53(0x237))
              [_0x298c53(0x142)](_0x298c53(0x20f))),
            selections["push"]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0x298c53(0x12e)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0x298c53(0x21e)](
                (_0x4373a7) => _0x4373a7[_0x298c53(0x1bb)] === x,
              )),
              (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
              (selections[objIndex]["backTo"] = x)));
      }),
    logicExtra
      ? ($(steps[x])
          [_0x2f6028(0x23d)](_0x2f6028(0x1e0))
          [_0x2f6028(0x23d)](_0x2f6028(0x1bc))
          [_0x2f6028(0x142)](_0x2f6028(0x1d7)) === !![] ||
          $(steps[x])
            [_0x2f6028(0x23d)]("[data-answer][data-radio-skip]:visible")
            ["data"](_0x2f6028(0x1d7)) === !![]) &&
        skip &&
        selections[_0x2f6028(0x205)]((_0x5a23c8) => _0x5a23c8["step"] === x)[
          _0x2f6028(0x231)
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
            [_0x2f6028(0x23d)](_0x2f6028(0x1cf))
            [_0x2f6028(0x142)](_0x2f6028(0x21b)),
        )
      : $(steps[x])
          [_0x2f6028(0x23d)]("[data-radio-skip]:visible")
          ["data"](_0x2f6028(0x1d7)) === !![] &&
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
            [_0x2f6028(0x23d)](_0x2f6028(0x1cf))
            [_0x2f6028(0x142)](_0x2f6028(0x21b)),
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
  const _0x4ca254 = _0x2b8fa1;
  $("[data-text=\x22error-message\x22]")[_0x4ca254(0x23f)](),
    unfilledArr[_0x4ca254(0x231)] > 0x0 &&
      unfilledArr[_0x4ca254(0x172)](function (_0x247cc7) {
        const _0x350583 = _0x4ca254;
        $(_0x350583(0x241) + _0x247cc7[_0x350583(0x16a)] + "\x22]")
          [_0x350583(0x1bf)](_0x350583(0x1fe))
          ["fadeIn"](),
          $(_0x350583(0x241) + _0x247cc7[_0x350583(0x16a)] + "\x22]")
            [_0x350583(0x12f)]()
            [_0x350583(0x21d)](_0x350583(0x1fe))
            [_0x350583(0x159)](),
          $(_0x350583(0x18f) + _0x247cc7["input"] + "\x22]")
            [_0x350583(0x1bf)](_0x350583(0x1fe))
            ["fadeIn"](),
          $(_0x350583(0x175) + _0x247cc7["input"] + "\x22]")
            ["siblings"](_0x350583(0x1fe))
            [_0x350583(0x159)]();
      });
}
function resetInputErrorMessage(_0x6e3406) {
  const _0x545683 = _0x2b8fa1;
  $("input[name=\x22" + _0x6e3406 + "\x22]")
    ["siblings"](_0x545683(0x1fe))
    [_0x545683(0x23f)](),
    $(_0x545683(0x241) + _0x6e3406 + "\x22]")
      [_0x545683(0x12f)]()
      ["children"](_0x545683(0x1fe))
      [_0x545683(0x23f)](),
    $(_0x545683(0x18f) + _0x6e3406 + "\x22]")
      ["siblings"](_0x545683(0x1fe))
      [_0x545683(0x23f)](),
    $("select[name=\x22" + _0x6e3406 + "\x22]")
      [_0x545683(0x1bf)](_0x545683(0x1fe))
      [_0x545683(0x23f)]();
}
function increaseCurstep() {
  const _0x238cc0 = _0x2b8fa1;
  countCard
    ? ((curStep = curStep + 0x1),
      $(_0x238cc0(0x162))[_0x238cc0(0x143)](steps[_0x238cc0(0x231)]))
    : $(steps[x])[_0x238cc0(0x142)]("card")
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    $("[data-text=\x22current-step\x22]")["text"](curStep);
}
function decreaseCurstep() {
  const _0x91c01e = _0x2b8fa1;
  countCard
    ? ((curStep = curStep - 0x1),
      $("[data-text=\x22total-steps\x22]")[_0x91c01e(0x143)](
        steps[_0x91c01e(0x231)],
      ))
    : $(steps[x])[_0x91c01e(0x142)](_0x91c01e(0x1d8))
      ? (curStep = curStep - 0x0)
      : (curStep = curStep - 0x1),
    $(_0x91c01e(0x22d))[_0x91c01e(0x143)](curStep);
}
$("[data-form=\x22submit-btn\x22]")["on"]("click", function (_0x5ba5b8) {
  const _0x55e5b0 = _0x2b8fa1;
  console[_0x55e5b0(0x22f)](_0x55e5b0(0x219)),
    $(this)[_0x55e5b0(0x142)]("redirect") &&
      (redirectTo = $(this)[_0x55e5b0(0x142)](_0x55e5b0(0x207))),
    !$(this)["data"]("new-tab") &&
      (newTab = $(this)[_0x55e5b0(0x142)]("new-tab")),
    (successCard = $(this)[_0x55e5b0(0x142)](_0x55e5b0(0x1ef))),
    _0x5ba5b8[_0x55e5b0(0x176)](),
    _0x5ba5b8["stopPropagation"](),
    logicExtra &&
      ($(this)[_0x55e5b0(0x210)]("novalidate", !![]),
      $(steps)[_0x55e5b0(0x23d)](_0x55e5b0(0x14a))["prop"]("required", ![])),
    localStorage[_0x55e5b0(0x152)](_0x55e5b0(0x1f1)),
    fill
      ? ($(this)[_0x55e5b0(0x142)](_0x55e5b0(0x1dc))
          ? $(this)[_0x55e5b0(0x17b)](
              $(this)[_0x55e5b0(0x142)](_0x55e5b0(0x1dc)),
            )
          : ($(this)[_0x55e5b0(0x17b)](_0x55e5b0(0x238)),
            $(this)["text"](_0x55e5b0(0x238))),
        $(_0x55e5b0(0x171))[_0x55e5b0(0x22c)](),
        $(_0x55e5b0(0x133))[_0x55e5b0(0x231)] > 0x0 &&
          grecaptcha["getResponse"]()[_0x55e5b0(0x231)] === 0x0 &&
          (form[_0x55e5b0(0x23d)](_0x55e5b0(0x182))[_0x55e5b0(0x143)](
            oldSubmitText,
          ),
          form[_0x55e5b0(0x23d)](_0x55e5b0(0x182))["val"](oldSubmitText)),
        customError &&
          $("[data-text=\x22error-message\x22]")[_0x55e5b0(0x23f)]())
      : customError && displayErrorMessage();
});
function nextStep() {
  const _0xa34147 = _0x2b8fa1;
  customError
    ? ($(_0xa34147(0x1fe))[_0xa34147(0x23f)](),
      fill
        ? (x++,
          increaseCurstep(),
          (progress = x),
          x <= steps["length"] - 0x1 &&
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
  const _0x2ed45b = _0x2b8fa1;
  customError && $(_0x2ed45b(0x1fe))["hide"](),
    decreaseCurstep(),
    x > 0x0 &&
      ($(progressbar[x])[_0x2ed45b(0x24a)](_0x2ed45b(0x144)),
      selections["filter"]((_0x21bccd) => _0x21bccd[_0x2ed45b(0x1f2)] === x)[
        _0x2ed45b(0x231)
      ] > 0x0
        ? (x = parseInt(
            getSafe(
              () =>
                selections[_0x2ed45b(0x205)](
                  (_0x38250d) => _0x38250d[_0x2ed45b(0x1f2)] === x,
                )[0x0][_0x2ed45b(0x12d)],
            ),
          ))
        : x--,
      updateStep()),
    ($(steps[x])
      ["find"]("[data-radio-skip]:visible")
      ["data"](_0x2ed45b(0x1d7)) === !![] ||
      $(steps[x])
        [_0x2ed45b(0x23d)](_0x2ed45b(0x1e0))
        [_0x2ed45b(0x23d)](_0x2ed45b(0x1bc))
        ["data"](_0x2ed45b(0x1d7)) === !![] ||
      $(steps[x])["find"](_0x2ed45b(0x1bd))["data"](_0x2ed45b(0x1d7)) ===
        !![]) &&
      ((all_data = all_data[_0x2ed45b(0x205)](
        (_0x2015b4) =>
          _0x2015b4["field"] !==
          $(steps[x])
            [_0x2ed45b(0x23d)](_0x2ed45b(0x1e3))
            [_0x2ed45b(0x243)]("name"),
      )),
      $(
        _0x2ed45b(0x1c6) +
          $(steps[x])
            ["find"](_0x2ed45b(0x1e3))
            [_0x2ed45b(0x243)](_0x2ed45b(0x16c)) +
          "\x22]",
      )[_0x2ed45b(0x23f)](),
      $(steps[x])
        [_0x2ed45b(0x23d)]("input[type=\x22radio\x22]")
        [_0x2ed45b(0x210)](_0x2ed45b(0x173), ![]),
      $(steps[x])
        [_0x2ed45b(0x23d)](".w-form-formradioinput")
        [_0x2ed45b(0x24a)](_0x2ed45b(0x16b)),
      validation());
}
weightedSelectionRange &&
  $(_0x2b8fa1(0x20c))[_0x2b8fa1(0x21f)](function () {
    const _0x30cc9c = _0x2b8fa1;
    $(this)[_0x30cc9c(0x1b6)](
      _0x30cc9c(0x1fa) +
        $(this)[_0x30cc9c(0x142)](_0x30cc9c(0x1f5)) +
        _0x30cc9c(0x208),
    );
  });
function selectionQuiz() {
  const _0x42e656 = _0x2b8fa1;
  if ($(this)[_0x42e656(0x23d)]("[data-btn=\x22check\x22]")) {
    $(_0x42e656(0x20c))[_0x42e656(0x23f)](),
      $(_0x42e656(0x1f8))[_0x42e656(0x23f)]();
    if (weightedSelection) {
      (selTotal = 0x0),
        selArr[_0x42e656(0x172)](function (_0x42a460) {
          const _0x62eacf = _0x42e656;
          selTotal = selTotal + _0x42a460[_0x62eacf(0x1af)];
        }),
        $(_0x42e656(0x1b3))[_0x42e656(0x143)](selTotal);
      if ($(_0x42e656(0x244) + selTotal + "\x22]")[_0x42e656(0x231)] > 0x0)
        $("[data-selection=\x22" + selTotal + "\x22]")["fadeIn"]();
      else
        $(_0x42e656(0x249) + selTotal + ")")
          ? $(_0x42e656(0x249) + selTotal + ")")
              [_0x42e656(0x1c1)](_0x42e656(0x20c))
              ["eq"](0x0)
              ["show"]()
          : $(_0x42e656(0x1c9))[_0x42e656(0x159)]();
    } else {
      let _0x39551c = -0x1;
      $(_0x42e656(0x20c))[_0x42e656(0x21f)](function (_0x1ea786) {
        const _0x1536a7 = _0x42e656;
        $($(_0x1536a7(0x20c))[_0x1ea786])
          [_0x1536a7(0x142)]("selection")
          [_0x1536a7(0x1ca)](selString[_0x1536a7(0x157)]()) &&
          (_0x39551c = _0x1ea786);
      }),
        _0x39551c > -0x1
          ? $($(_0x42e656(0x20c))[_0x39551c])[_0x42e656(0x159)]()
          : $(_0x42e656(0x1c9))["fadeIn"]();
    }
  }
}
function triggerInputAllData() {
  const _0x172855 = _0x2b8fa1;
  if (savedFilledInput && memory)
    savedFilledInput[_0x172855(0x172)]((_0x34130f) => {
      const _0x344ecc = _0x172855;
      var _0xbe58a7 = $(
          _0x344ecc(0x241) +
            _0x34130f[_0x344ecc(0x1d6)] +
            _0x344ecc(0x1cc) +
            _0x34130f[_0x344ecc(0x20d)] +
            "\x22]",
        ),
        _0x5a853a = $(_0x344ecc(0x241) + _0x34130f[_0x344ecc(0x1d6)] + "\x22]");
      console[_0x344ecc(0x22f)](
        _0xbe58a7[_0x344ecc(0x12f)](_0x344ecc(0x1f9))["data"]("radio-skip"),
      );
      if (_0xbe58a7[_0x344ecc(0x243)](_0x344ecc(0x1eb)) !== "file") {
        if (
          _0xbe58a7[_0x344ecc(0x243)](_0x344ecc(0x1eb)) === "radio" &&
          !_0xbe58a7[_0x344ecc(0x12f)]("[data-radio-skip]")[_0x344ecc(0x142)](
            "radio-skip",
          )
        )
          _0xbe58a7["click"](),
            _0xbe58a7[_0x344ecc(0x1bf)](".w-radio-input")[_0x344ecc(0x146)](
              "w--redirected-checked",
            ),
            _0xbe58a7[_0x344ecc(0x18d)](_0x344ecc(0x16a));
        else
          _0x34130f["value"] === "on"
            ? (_0x5a853a["click"](),
              _0x5a853a[_0x344ecc(0x1bf)](_0x344ecc(0x15c))[_0x344ecc(0x146)](
                "w--redirected-checked",
              ),
              _0x5a853a["trigger"](_0x344ecc(0x16a)))
            : (console[_0x344ecc(0x22f)](
                _0x34130f[_0x344ecc(0x1d6)],
                _0x34130f[_0x344ecc(0x20d)],
              ),
              _0x5a853a[_0x344ecc(0x17b)](_0x34130f[_0x344ecc(0x20d)]),
              _0x5a853a[_0x344ecc(0x17b)](_0x34130f[_0x344ecc(0x20d)]),
              $(_0x344ecc(0x145) + _0x34130f[_0x344ecc(0x20d)] + "\x22]")[
                _0x344ecc(0x210)
              ](_0x344ecc(0x1af), !![]),
              _0x5a853a["trigger"]("input"),
              _0x5a853a[_0x344ecc(0x18d)](_0x344ecc(0x245)));
      }
    });
  else
    _params &&
      (getParams(),
      searchQ[_0x172855(0x172)]((_0x426ac2) => {
        const _0x4ed0d6 = _0x172855;
        if (
          $(
            _0x4ed0d6(0x241) +
              _0x426ac2[_0x4ed0d6(0x1d6)] +
              "\x22][value=\x22" +
              _0x426ac2[_0x4ed0d6(0x20d)] +
              "\x22]",
          )[_0x4ed0d6(0x243)](_0x4ed0d6(0x1eb)) !== _0x4ed0d6(0x1c3)
        ) {
          if (
            $(
              _0x4ed0d6(0x241) +
                _0x426ac2[_0x4ed0d6(0x1c4)] +
                _0x4ed0d6(0x1cc) +
                _0x426ac2[_0x4ed0d6(0x17b)] +
                "\x22]",
            )[_0x4ed0d6(0x243)]("type") === _0x4ed0d6(0x15e)
          )
            $(
              _0x4ed0d6(0x241) +
                _0x426ac2[_0x4ed0d6(0x1c4)] +
                _0x4ed0d6(0x1cc) +
                _0x426ac2["val"] +
                "\x22]",
            )["click"](),
              $(
                _0x4ed0d6(0x241) +
                  _0x426ac2["key"] +
                  _0x4ed0d6(0x1cc) +
                  _0x426ac2["val"] +
                  "\x22]",
              )
                ["siblings"](_0x4ed0d6(0x1b5))
                [_0x4ed0d6(0x146)](_0x4ed0d6(0x16b)),
              $(
                _0x4ed0d6(0x241) +
                  _0x426ac2[_0x4ed0d6(0x1c4)] +
                  "\x22][value=\x22" +
                  _0x426ac2[_0x4ed0d6(0x17b)] +
                  "\x22]",
              )[_0x4ed0d6(0x18d)](_0x4ed0d6(0x16a));
          else
            _0x426ac2[_0x4ed0d6(0x17b)] === "on"
              ? ($(_0x4ed0d6(0x241) + _0x426ac2[_0x4ed0d6(0x1c4)] + "\x22]")[
                  _0x4ed0d6(0x1ee)
                ](),
                $(_0x4ed0d6(0x241) + _0x426ac2[_0x4ed0d6(0x1c4)] + "\x22]")
                  ["siblings"](_0x4ed0d6(0x15c))
                  [_0x4ed0d6(0x146)](_0x4ed0d6(0x16b)),
                $("input[name=\x22" + _0x426ac2[_0x4ed0d6(0x1c4)] + "\x22]")[
                  _0x4ed0d6(0x18d)
                ](_0x4ed0d6(0x16a)))
              : ($("input[name=\x22" + _0x426ac2[_0x4ed0d6(0x1c4)] + "\x22]")[
                  _0x4ed0d6(0x17b)
                ](_0x426ac2[_0x4ed0d6(0x17b)]),
                $(_0x4ed0d6(0x18f) + _0x426ac2[_0x4ed0d6(0x1c4)] + "\x22]")[
                  "val"
                ](_0x426ac2[_0x4ed0d6(0x17b)]),
                $(_0x4ed0d6(0x175) + _0x426ac2[_0x4ed0d6(0x1c4)] + "\x22]")
                  [_0x4ed0d6(0x23d)](
                    "option[value=\x22" + _0x426ac2["val"] + "\x22]",
                  )
                  [_0x4ed0d6(0x210)](_0x4ed0d6(0x1af), !![]),
                $(_0x4ed0d6(0x241) + _0x426ac2[_0x4ed0d6(0x1c4)] + "\x22]")[
                  _0x4ed0d6(0x18d)
                ]("input"),
                $("input[name=\x22" + _0x426ac2[_0x4ed0d6(0x1c4)] + "\x22]")[
                  "trigger"
                ](_0x4ed0d6(0x245)));
        }
      }));
}
$("[data-form=\x22next-btn\x22]")["on"]("click", function () {
  (next = !![]), nextStep(), selectionQuiz();
}),
  $(_0x2b8fa1(0x1e2))["on"](_0x2b8fa1(0x1ee), function () {
    (next = ![]), (back = !![]), backStep();
  }),
  $(steps)
    [_0x2b8fa1(0x23d)](_0x2b8fa1(0x14a))
    [_0x2b8fa1(0x1db)](_0x2b8fa1(0x1cd))
    ["on"](_0x2b8fa1(0x16a), function (_0x3fe067) {
      validation(), andLogic();
    }),
  $(steps)
    ["find"]("input[type=\x22radio\x22]")
    ["on"](_0x2b8fa1(0x1ee), function () {
      (skip = !![]), validation();
    });
function _0x530e() {
  const _0x22f8a2 = [
    "input:checkbox",
    "[data-success-card=\x22",
    "metaKey",
    "slice",
    "parse",
    ":input[type=\x22email\x22][required]",
    "field",
    "input:radio[required]",
    "[data-clickable-all]",
    "[data-add-new-input]",
    "textarea[required]",
    "[data-skip-to]",
    "stringify",
    "selected",
    "[data-form=\x22submit\x22]:visible",
    "[data-show-if]",
    "select[required]",
    "[data-text=\x22total-weight\x22]",
    "href",
    ".w-radio-input",
    "append",
    "reset",
    "[data-form=\x22submit-btn\x22]:visible",
    "add-new-input",
    "weighted-selection-range",
    "step",
    "[data-radio-skip]:visible",
    "[data-answer][data-radio-skip]:visible",
    "span",
    "siblings",
    "startsWith",
    "parent",
    ":input[type=\x22checkbox\x22][required]:checked",
    "file",
    "key",
    "shiftKey",
    "[data-input-field=\x22",
    "test",
    ":input[type=\x22date\x22][required]",
    "[data-selection=\x22other\x22]",
    "includes",
    "_blank",
    "\x22][value=\x22",
    "[type=\x22radio\x22]",
    "[data-form=\x22progress-indicator\x22]",
    "[data-radio-delay]",
    "Webflow",
    "keyCode",
    "select[required]:visible",
    "11030RmQrGl",
    "animate",
    "[data-answer=\x22",
    "inputName",
    "radio-skip",
    "card",
    ":input[type=\x22checkbox\x22]",
    "closest",
    "not",
    "wait",
    ":checked",
    "[data-success-card]",
    "form[data-form=\x22multistep\x22]\x20:input",
    ".active-answer-card",
    "[data-display=\x22",
    "[data-form=\x22back-btn\x22]",
    "input[type=\x22radio\x22]:checked",
    ":input[type=\x22checkbox\x22]:checked",
    "running",
    ":input[type=\x22checkbox\x22][required]",
    "[data-checkbox]",
    "body",
    ":input[type=\x22url\x22][required]",
    "[data-quiz]",
    "type",
    "685SzBZYO",
    "remove-upload",
    "click",
    "success",
    "focus",
    "filledInput",
    "skipTo",
    "94554PCPDIf",
    "clicked",
    "selection",
    "[data-display-input=\x22",
    "phone-validation",
    "[data-selection-weight]",
    "[data-radio-skip]",
    "<div\x20data-range=\x22selection\x22\x20style=\x22display:none\x20!important\x22>",
    "data-go-to",
    "\x22]\x20[data-input-field^=\x22",
    "split",
    "[data-text=\x22error-message\x22]",
    "[data-conditional-result]",
    "data-input-field",
    "show",
    "every",
    "button",
    ":input[type=\x22text\x22][required]",
    "filter",
    "stopPropagation",
    "redirect",
    "</div>",
    "top",
    "[data-answer]",
    "[data-select-multiple]",
    "[data-selection]",
    "value",
    "input:radio[name=\x22",
    "go-to",
    "prop",
    "Enter",
    "data-name",
    "3512PdcwKS",
    "[data-input-index=\x22",
    "[data-add-new]",
    "[data-input-field]",
    "edit-step",
    ":input[type=\x22url\x22]",
    "clicked\x20enter",
    ":input[type=\x22tel\x22]",
    "radio-delay",
    ":input[required]",
    "children",
    "findIndex",
    "each",
    "match",
    "ms-field",
    "\x22]\x20input",
    "input[autofocus]",
    "dispatchEvent",
    "[data-form=\x22progress\x22]",
    ":first",
    "[data-clickable]",
    "input[type=\x22checkbox\x22]:visible",
    "none",
    "destroy",
    "location",
    "submit",
    "[data-text=\x22current-step\x22]",
    "textarea",
    "log",
    "[data-redirect-delay]",
    "length",
    "quiz",
    "https://webflow.com/api/v1/form/",
    "[data-form=\x22next-btn\x22]",
    "conditional-result",
    "[data-clone]",
    "[data-go-to]",
    "Please\x20wait...",
    "count-card",
    "disabled",
    "remove",
    "clone",
    "find",
    "[data-clone-input]",
    "hide",
    "answer",
    "input[name=\x22",
    "active-answer-card",
    "attr",
    "[data-selection=\x22",
    "change",
    "replace",
    "[data-selected]:checked",
    "init",
    "[data-range]:contains(",
    "removeClass",
    "getItem",
    "[data-form-ms=\x22submit-btn\x22]",
    "backTo",
    "push",
    "parents",
    "option[value=\x22$(this).val()\x22]",
    "keypress",
    "logic-extra",
    "div.g-recaptcha",
    "[data-count-card]",
    "ix2",
    "relationship-",
    "[data-form=\x22step\x22]",
    "[data-form=\x22remove-input-clone\x22]",
    "\x22]:checked",
    ":input[type=\x27radio\x27]:checked",
    "[data-clone-input=\x22",
    "custom-error-message",
    "31155179lrdlsE",
    "[data-custom-error-message]",
    "submit-show",
    "select",
    ":input[type=\x22password\x22][required]",
    "data",
    "text",
    "current",
    "option[value=\x22",
    "addClass",
    "index",
    "skip-to",
    "phone-autoformat",
    ":input",
    "checkbox",
    "css",
    "[data-display]",
    ":input[type=\x22radio\x22]",
    "[data-clone=\x22",
    "open",
    "data-radio-skip",
    "removeItem",
    "some",
    "redirect-delay",
    "33406FvlMnG",
    "[data-clone-wrapper=\x22",
    "join",
    "[data-display-input-index=\x22",
    "fadeIn",
    "[data-form=\x22custom-progress-indicator\x22]",
    "display",
    ".w-checkbox-input",
    "3672zGqMaG",
    "radio",
    "enter",
    "textarea[required]:visible",
    "[data-weighted-selection-range]",
    "[data-text=\x22total-steps\x22]",
    "[data-enter]",
    "query-param",
    "0.4",
    "input[type=\x22submit\x22]",
    ":input[type=\x22tel\x22][required]",
    "input[type=\x22text\x22][required]:visible",
    "auto",
    "input",
    "w--redirected-checked",
    "name",
    "input-field",
    "weighted-selection",
    "min-character",
    "data-show-if",
    "[data-form=\x22multistep\x22]",
    "forEach",
    "checked",
    "[data-form=\x22remove-clone\x22]",
    "select[name=\x22",
    "preventDefault",
    "[data-form=\x22next-btn\x22][data-submit-show]",
    ":input[type=\x22file\x22][required]",
    "[data-form=\x22step\x22][data-card]",
    "ctrlKey",
    "val",
    "[data-reinit]",
    "textarea[autofocus]",
    "offset",
    "clickable-all",
    "clone-input",
    "[data-form=\x22next-btn\x22][type=\x22submit\x22]",
    "[data-form=\x22submit-btn\x22]",
    "1583514ylaWAG",
    "slow",
    "keydown",
    "[data-reset-delay]",
    "debug-mode",
    "html,\x20body",
    "[data-memory]",
    "[data-display-input]",
    "[data-btn=\x22reset\x22]",
    "8EePbhE",
    "trigger",
    "37TcJZwm",
    "textarea[name=\x22",
    "data-radio-delay",
    "trim",
    "[data-display-input-wrapper=\x22",
    "add-new",
    "block-domain",
    "[data-display-wrapper=\x22",
    "reset-delay",
    "data-skip-to",
    "[data-display-index=\x22",
    "select-multiple",
    ":input[type=\x22number\x22][required]",
    "readystatechange",
    "[type=\x22checkbox\x22]",
    "[data-cms-select=input]",
    "input[type=\x22email\x22]:visible",
    "4861087bvUdWd",
    "scroll-top-offset",
    "clickable",
  ];
  _0x530e = function () {
    return _0x22f8a2;
  };
  return _0x530e();
}
$(_0x2b8fa1(0x1aa))[_0x2b8fa1(0x142)](_0x2b8fa1(0x17f))
  ? $(_0x2b8fa1(0x15a))[_0x2b8fa1(0x24a)](_0x2b8fa1(0x23a))
  : $(_0x2b8fa1(0x15a))["addClass"]("disabled");
function clickableIndicator() {
  const _0x1778e1 = _0x2b8fa1;
  $(_0x1778e1(0x227))[_0x1778e1(0x142)](_0x1778e1(0x1a1)) &&
    ($(_0x1778e1(0x1ce))[_0x1778e1(0x24a)]("current"),
    $(_0x1778e1(0x227))[_0x1778e1(0x142)](_0x1778e1(0x17f))
      ? ((x = $(this)["index"]()), updateStep())
      : $(this)["index"]() <= progress &&
        ((x = $(this)[_0x1778e1(0x147)]()), updateStep())),
    $(_0x1778e1(0x22d))["text"](x + 0x1);
}
$("[data-form=\x22custom-progress-indicator\x22]")["on"](
  _0x2b8fa1(0x1ee),
  clickableIndicator,
);
$(_0x2b8fa1(0x171))[_0x2b8fa1(0x142)](_0x2b8fa1(0x187)) &&
  ($("[data-go-to]")[_0x2b8fa1(0x21f)](function () {
    const _0x3c45a6 = _0x2b8fa1;
    $(this)[_0x3c45a6(0x1b6)](
      "<br>Data\x20Go\x20To\x20=\x20",
      $(this)["data"](_0x3c45a6(0x20f)),
    );
  }),
  $(_0x2b8fa1(0x20a))[_0x2b8fa1(0x21f)](function () {
    const _0x5140ef = _0x2b8fa1;
    $(this)["append"](
      "<br>Data\x20Answer\x20=\x20",
      $(this)["data"](_0x5140ef(0x240)),
    );
  }));
function resetFormly() {
  const _0xe15481 = _0x2b8fa1;
  $("[data-form=\x22multistep\x22]")["trigger"](_0xe15481(0x1b7)),
    $(_0xe15481(0x171))
      [_0xe15481(0x12f)]()
      [_0xe15481(0x23d)](".w-form-done")
      ["hide"](),
    (x = 0x0),
    updateStep(),
    $(_0xe15481(0x171))["show"](),
    $(_0xe15481(0x182))[_0xe15481(0x143)](oldSubmitText),
    $(_0xe15481(0x182))[_0xe15481(0x17b)](oldSubmitText),
    $(_0xe15481(0x22d))[_0xe15481(0x143)](0x1),
    $(_0xe15481(0x171))
      [_0xe15481(0x23d)](_0xe15481(0x1a2))
      ["siblings"](".w-checkbox-input")
      [_0xe15481(0x24a)]("w--redirected-checked");
}
$(document)["ajaxComplete"](function (_0xcb36b, _0x24bb48, _0x349405) {
  const _0x2edcfa = _0x2b8fa1;
  if (_0x349405["url"]["includes"](_0x2edcfa(0x233))) {
    const _0x39fdda = _0x24bb48["status"] === 0xc8,
      _0x528722 = "redirect-form-hehexd";
    redirectTo &&
      _0x39fdda &&
      (newTab
        ? window[_0x2edcfa(0x150)](redirectTo, _0x2edcfa(0x1cb))
        : setTimeout(() => {
            const _0xea0d87 = _0x2edcfa;
            location[_0xea0d87(0x1b4)] = redirectTo;
          }, redirectDelay)),
      _0x39fdda &&
        successCard !== "" &&
        $(_0x2edcfa(0x1a3) + successCard + "\x22]")[_0x2edcfa(0x159)](),
      _0x39fdda &&
        formReset &&
        setTimeout(() => {
          resetFormly();
        }, resetDelay),
      !_0x39fdda &&
        ($(_0x2edcfa(0x182))[_0x2edcfa(0x17b)](_0x2edcfa(0x238)),
        $(_0x2edcfa(0x182))[_0x2edcfa(0x143)](_0x2edcfa(0x238)));
  }
}),
  $("[data-btn=\x22edit\x22]")["on"](_0x2b8fa1(0x1ee), function () {
    const _0x3b0cdc = _0x2b8fa1;
    var _0x3173f8 = $(this)
      ["parent"]()
      [_0x3b0cdc(0x23d)]("[data-input-field]")
      [_0x3b0cdc(0x142)](_0x3b0cdc(0x16d));
    setTimeout(function () {
      const _0x34ef91 = _0x3b0cdc;
      $(_0x34ef91(0x241) + _0x3173f8 + "\x22]")[_0x34ef91(0x1f0)]();
    }, 0x64),
      (back = !![]),
      (x = $(this)["data"](_0x3b0cdc(0x217)) - 0x1),
      updateStep(),
      countCard
        ? ((curStep = x + 0x1),
          $(_0x3b0cdc(0x162))[_0x3b0cdc(0x143)](steps[_0x3b0cdc(0x231)]))
        : $(steps[x])[_0x3b0cdc(0x142)](_0x3b0cdc(0x1d8))
          ? (curStep = x + 0x0)
          : (curStep = x + 0x1),
      $("[data-text=\x22current-step\x22]")[_0x3b0cdc(0x143)](curStep),
      (back = ![]);
  }),
  $(_0x2b8fa1(0x18b))["on"]("click", function () {
    const _0x3c05de = _0x2b8fa1;
    $(_0x3c05de(0x171))[_0x3c05de(0x18d)](_0x3c05de(0x1b7));
    let _0x9e03c = $(this);
    $(this)[_0x3c05de(0x143)]("Please\x20wait..."),
      setTimeout(function () {
        const _0x89add2 = _0x3c05de;
        $(_0x9e03c)[_0x89add2(0x143)](oldResetText),
          $(_0x9e03c)["parents"](".w-form-done")["hide"](),
          (x = 0x0),
          updateStep(),
          $(_0x89add2(0x171))[_0x89add2(0x201)](),
          $(_0x89add2(0x182))[_0x89add2(0x143)](oldSubmitText),
          $(_0x89add2(0x182))["val"](oldSubmitText),
          $(_0x9e03c)[_0x89add2(0x17b)](oldSubmitText),
          $("[data-text=\x22current-step\x22]")[_0x89add2(0x143)](0x1),
          $(_0x89add2(0x171))
            [_0x89add2(0x23d)](_0x89add2(0x1a2))
            [_0x89add2(0x1bf)](_0x89add2(0x15c))
            [_0x89add2(0x24a)](_0x89add2(0x16b));
      }, resetDelay);
  }),
  $(_0x2b8fa1(0x1e8))["on"](_0x2b8fa1(0x131), function (_0x4929be) {
    const _0x2e30fc = _0x2b8fa1;
    _0x4929be[_0x2e30fc(0x1d1)] === 0xd &&
      ($(_0x2e30fc(0x163))[_0x2e30fc(0x142)](_0x2e30fc(0x15f)) && fill
        ? (totalSteps > curStep && $(_0x2e30fc(0x234))[0x0][_0x2e30fc(0x1ee)](),
          _0x4929be[_0x2e30fc(0x176)](),
          _0x4929be[_0x2e30fc(0x206)]())
        : (_0x4929be[_0x2e30fc(0x176)](), _0x4929be[_0x2e30fc(0x206)]()));
  }),
  $(_0x2b8fa1(0x1e8))[_0x2b8fa1(0x185)](function (_0x5242cd) {
    const _0x9cb278 = _0x2b8fa1;
    (_0x5242cd[_0x9cb278(0x1a4)] || _0x5242cd[_0x9cb278(0x17a)]) &&
      _0x5242cd[_0x9cb278(0x1d1)] == 0xd &&
      (x >= steps[_0x9cb278(0x231)] - 0x1 && fill
        ? $(steps[x])["find"](_0x9cb278(0x1b8))["click"]()
        : (event["preventDefault"](), event[_0x9cb278(0x206)]()));
  }),
  $("textarea")[_0x2b8fa1(0x131)](function (_0x14a1f5) {
    const _0x2d602c = _0x2b8fa1;
    $(this)[_0x2d602c(0x1f0)](),
      _0x14a1f5[_0x2d602c(0x1c4)] == _0x2d602c(0x211) &&
        (_0x14a1f5[_0x2d602c(0x176)](), _0x14a1f5[_0x2d602c(0x206)]()),
      _0x14a1f5[_0x2d602c(0x1c5)] &&
        _0x14a1f5[_0x2d602c(0x1c4)] == _0x2d602c(0x211) &&
        $(this)[_0x2d602c(0x17b)]($(this)[_0x2d602c(0x17b)]() + "\x0a");
  }),
  $(_0x2b8fa1(0x171))
    [_0x2b8fa1(0x23d)](_0x2b8fa1(0x14a))
    ["on"](_0x2b8fa1(0x245), function () {
      const _0x42d342 = _0x2b8fa1;
      (all_data = all_data[_0x42d342(0x205)](
        (_0x39b3d6) =>
          _0x39b3d6["field"] !== $(this)[_0x42d342(0x243)](_0x42d342(0x16c)),
      )),
        $(this)[_0x42d342(0x243)](_0x42d342(0x1eb)) === "checkbox"
          ? $(this)["is"](_0x42d342(0x1dd))
            ? all_data["push"]({
                field: $(this)[_0x42d342(0x243)](_0x42d342(0x16c)),
                value: $(this)
                  [_0x42d342(0x1bf)](_0x42d342(0x1be))
                  [_0x42d342(0x143)](),
              })
            : $(
                _0x42d342(0x1c6) +
                  $(this)[_0x42d342(0x243)](_0x42d342(0x16c)) +
                  "\x22]",
              )[_0x42d342(0x23f)]()
          : (all_data["push"]({
              field: $(this)[_0x42d342(0x243)](_0x42d342(0x16c)),
              value: $(this)[_0x42d342(0x17b)](),
            }),
            $(this)[_0x42d342(0x17b)]() !== "" &&
              resetInputErrorMessage($(this)["attr"](_0x42d342(0x16c)))),
        all_data["forEach"](function (_0x51d4d1) {
          const _0x3b14e2 = _0x42d342;
          $(_0x3b14e2(0x1c6) + _0x51d4d1[_0x3b14e2(0x1a8)] + "\x22]")["show"](),
            $("[data-input-field=\x22" + _0x51d4d1[_0x3b14e2(0x1a8)] + "\x22]")[
              _0x3b14e2(0x143)
            ](_0x51d4d1[_0x3b14e2(0x20d)]);
        });
    }),
  $(_0x2b8fa1(0x171))
    [_0x2b8fa1(0x23d)](_0x2b8fa1(0x22e))
    ["on"](_0x2b8fa1(0x245), function () {
      const _0x5ab7c6 = _0x2b8fa1;
      $(this)[_0x5ab7c6(0x17b)]() !== "" &&
        resetInputErrorMessage($(this)[_0x5ab7c6(0x243)](_0x5ab7c6(0x16c))),
        (all_data = all_data[_0x5ab7c6(0x205)](
          (_0x198a7a) =>
            _0x198a7a["field"] !== $(this)[_0x5ab7c6(0x243)](_0x5ab7c6(0x16c)),
        )),
        all_data[_0x5ab7c6(0x12e)]({
          field: $(this)[_0x5ab7c6(0x243)](_0x5ab7c6(0x16c)),
          value: $(this)[_0x5ab7c6(0x17b)](),
        }),
        all_data[_0x5ab7c6(0x172)](function (_0xa60d8f) {
          const _0xa47ec7 = _0x5ab7c6;
          $(_0xa47ec7(0x1c6) + _0xa60d8f[_0xa47ec7(0x1a8)] + "\x22]")[
            _0xa47ec7(0x201)
          ](),
            $("[data-input-field=\x22" + _0xa60d8f[_0xa47ec7(0x1a8)] + "\x22]")[
              _0xa47ec7(0x143)
            ](_0xa60d8f["value"]);
        });
    }),
  $("[data-form=\x22multistep\x22]")
    [_0x2b8fa1(0x23d)]("select")
    ["on"]("change", function () {
      const _0x2d26a6 = _0x2b8fa1;
      $(this)[_0x2d26a6(0x17b)]() !== "" &&
        resetInputErrorMessage($(this)[_0x2d26a6(0x243)](_0x2d26a6(0x16c)));
      var _0x1ea4e9 = $(this)[_0x2d26a6(0x142)](_0x2d26a6(0x221));
      (all_data = all_data[_0x2d26a6(0x205)](
        (_0x278113) =>
          _0x278113[_0x2d26a6(0x1a8)] !==
          $(this)[_0x2d26a6(0x243)](_0x2d26a6(0x16c)),
      )),
        all_data[_0x2d26a6(0x12e)]({
          field: $(this)[_0x2d26a6(0x243)](_0x2d26a6(0x16c)),
          value: _0x1ea4e9
            ? $(this)["find"](_0x2d26a6(0x130))[_0x2d26a6(0x143)]()
            : $(this)[_0x2d26a6(0x17b)](),
        }),
        all_data[_0x2d26a6(0x172)](function (_0x31f659) {
          const _0x4e399b = _0x2d26a6;
          $(_0x4e399b(0x1c6) + _0x31f659[_0x4e399b(0x1a8)] + "\x22]")[
            _0x4e399b(0x201)
          ](),
            $(_0x4e399b(0x1c6) + _0x31f659["field"] + "\x22]")["text"](
              _0x31f659[_0x4e399b(0x20d)],
            );
        });
    }),
  updateStep(),
  triggerInputAllData(),
  $("[data-cms-select=cms]")[_0x2b8fa1(0x21f)](function () {
    const _0x1759a9 = _0x2b8fa1,
      _0x356564 = $(this)[_0x1759a9(0x23d)]("[data-cms-select=text]"),
      _0x45b3dd = [];
    console[_0x1759a9(0x22f)](_0x45b3dd),
      _0x356564["each"](function () {
        const _0x37c665 = _0x1759a9;
        _0x45b3dd["push"]($(this)["text"]()[_0x37c665(0x191)]());
      });
    const _0x4dfb29 = $(this)[_0x1759a9(0x1bf)](_0x1759a9(0x19d));
    $[_0x1759a9(0x21f)](_0x45b3dd, function (_0x368ad7, _0x2c3b90) {
      const _0xdb8c53 = _0x1759a9,
        _0x33ab56 = $("<option>")
          [_0xdb8c53(0x17b)](_0x2c3b90)
          [_0xdb8c53(0x143)](_0x2c3b90);
      _0x4dfb29["append"](_0x33ab56);
    });
  });
function cloneRemove() {
  $("[data-clone-wrapper]")["each"](function () {
    const _0x3785c5 = _0x3165;
    $(this)[_0x3785c5(0x23d)](_0x3785c5(0x236))[_0x3785c5(0x231)] < 0x2
      ? $(this)["find"](_0x3785c5(0x174))[_0x3785c5(0x23f)]()
      : $(this)[_0x3785c5(0x23d)](_0x3785c5(0x174))["show"]();
  });
}
function cloneRemoveInput() {
  $("[data-clone-input-wrapper]")["each"](function () {
    const _0x35bc13 = _0x3165;
    $(this)[_0x35bc13(0x23d)](_0x35bc13(0x23e))[_0x35bc13(0x231)] < 0x2
      ? $(this)
          [_0x35bc13(0x23d)]("[data-form=\x22remove-input-clone\x22]")
          [_0x35bc13(0x23f)]()
      : $(this)
          [_0x35bc13(0x23d)]("[data-form=\x22remove-input-clone\x22]")
          ["show"]();
  });
}
$(_0x2b8fa1(0x174))["on"](_0x2b8fa1(0x1ee), function () {
  const _0x1c809c = _0x2b8fa1,
    _0x35a265 =
      $(this)[_0x1c809c(0x12f)](_0x1c809c(0x236))[_0x1c809c(0x231)] > 0x0
        ? $(this)[_0x1c809c(0x12f)](_0x1c809c(0x236))[_0x1c809c(0x147)]()
        : $(this)[_0x1c809c(0x12f)](_0x1c809c(0x14d))[_0x1c809c(0x147)](),
    _0x1a609f =
      $(this)[_0x1c809c(0x12f)](_0x1c809c(0x236))[_0x1c809c(0x231)] > 0x0
        ? $(this)
            [_0x1c809c(0x12f)]("[data-clone]")
            [_0x1c809c(0x142)](_0x1c809c(0x23c))
        : $(this)[_0x1c809c(0x12f)](_0x1c809c(0x14d))["data"](_0x1c809c(0x15b));
  $("[data-clone=\x22" + _0x1a609f + "\x22]")
    ["eq"](_0x35a265)
    [_0x1c809c(0x23b)](),
    $("[data-display=\x22" + _0x1a609f + "\x22]")
      ["eq"](_0x35a265)
      ["remove"](),
    cloneRemove(),
    validation();
}),
  $(_0x2b8fa1(0x138))["on"](_0x2b8fa1(0x1ee), function () {
    const _0x4d5ed6 = _0x2b8fa1;
    let _0x5a4062 = $(this)
      [_0x4d5ed6(0x1bf)]()
      [_0x4d5ed6(0x243)](_0x4d5ed6(0x16c));
    $(this)[_0x4d5ed6(0x1c1)](_0x4d5ed6(0x23e))[_0x4d5ed6(0x23b)](),
      $(_0x4d5ed6(0x1c6) + _0x5a4062 + "\x22]")
        [_0x4d5ed6(0x1c1)](_0x4d5ed6(0x18a))
        [_0x4d5ed6(0x23b)](),
      cloneRemove(),
      validation();
  }),
  $(_0x2b8fa1(0x215))["on"](_0x2b8fa1(0x1ee), function () {
    const _0x31f657 = _0x2b8fa1;
    let _0x3db750 = $(this)["data"](_0x31f657(0x193));
    var _0x332031 = $(_0x31f657(0x14f) + _0x3db750 + "\x22]")
        ["eq"](0x0)
        ["clone"](!![]),
      _0x97ec39 = $(_0x31f657(0x1e1) + _0x3db750 + "\x22]")
        ["eq"](0x0)
        ["clone"](!![]);
    let _0xd1a9e8 = "";
    $(this)["find"](_0x31f657(0x174))["show"](),
      cloneRemove(),
      _0x332031[_0x31f657(0x23d)]("[data-clone-input]")
        [_0x31f657(0x23d)]("input")
        [_0x31f657(0x17b)](""),
      _0x332031["find"](_0x31f657(0x23e))
        [_0x31f657(0x1db)](_0x31f657(0x226))
        [_0x31f657(0x23b)](),
      _0x97ec39["find"](_0x31f657(0x18a))
        [_0x31f657(0x1db)](_0x31f657(0x226))
        [_0x31f657(0x23b)](),
      _0x332031[_0x31f657(0x23d)](_0x31f657(0x16a))[_0x31f657(0x21f)](
        function () {
          const _0x4c579e = _0x31f657;
          if ($(this)["closest"](_0x4c579e(0x23e))[_0x4c579e(0x231)] > 0x0) {
            let _0x2a5a10 = 0x0;
            const _0x4a6ba6 = $(this)
              [_0x4c579e(0x1da)](_0x4c579e(0x23e))
              [_0x4c579e(0x142)]("clone-input");
            console["log"](
              $(this)
                [_0x4c579e(0x1da)](_0x4c579e(0x23e))
                ["data"](_0x4c579e(0x180)),
              this[_0x4c579e(0x16c)],
            ),
              $("[data-clone-input=\x22" + _0x4a6ba6 + _0x4c579e(0x222))[
                _0x4c579e(0x21f)
              ](function () {
                const _0x26cce3 = _0x4c579e,
                  _0x2a375b = $(this)[_0x26cce3(0x243)](_0x26cce3(0x16c));
                if (
                  _0x2a375b &&
                  _0x2a375b[_0x26cce3(0x1c0)](_0x26cce3(0x136))
                ) {
                  const _0x279a64 = parseInt(
                    _0x2a375b[_0x26cce3(0x1fd)]("-")[0x1],
                  );
                  !isNaN(_0x279a64) &&
                    _0x279a64 > _0x2a5a10 &&
                    (_0x2a5a10 = _0x279a64);
                }
              }),
              _0x2a5a10++,
              (_0xd1a9e8 = this[_0x4c579e(0x16c)] + "-" + _0x2a5a10),
              console[_0x4c579e(0x22f)](_0x4a6ba6, _0xd1a9e8);
          } else
            _0xd1a9e8 =
              this[_0x4c579e(0x16c)] +
              "-" +
              (parseInt(
                $(_0x4c579e(0x14f) + _0x3db750 + "\x22]")
                  ["last"]()
                  [_0x4c579e(0x147)](),
              ) +
                0x1);
          $(this)[_0x4c579e(0x17b)](""),
            $(this)[_0x4c579e(0x243)]("name", _0xd1a9e8),
            $(this)[_0x4c579e(0x243)](_0x4c579e(0x212), _0xd1a9e8);
        },
      ),
      _0x97ec39[_0x31f657(0x23d)](_0x31f657(0x216))[_0x31f657(0x21f)](
        function () {
          const _0x241d14 = _0x31f657;
          if ($(this)[_0x241d14(0x142)](_0x241d14(0x16d))) {
            let _0x424b6d = 0x0;
            const _0x294ff6 = $(this)
              [_0x241d14(0x142)](_0x241d14(0x16d))
              [_0x241d14(0x1fd)]("-")[0x0];
            $(
              "[data-display=\x22" +
                _0x3db750 +
                _0x241d14(0x1fc) +
                _0x294ff6 +
                "\x22]",
            )["each"](function () {
              const _0x4981cb = _0x241d14,
                _0x520af4 = $(this)[_0x4981cb(0x243)](_0x4981cb(0x200)),
                _0x4bf0d1 = parseInt(_0x520af4[_0x4981cb(0x1fd)]("-")[0x1]);
              !isNaN(_0x4bf0d1) &&
                _0x4bf0d1 > _0x424b6d &&
                (_0x424b6d = _0x4bf0d1);
            }),
              _0x424b6d++;
            const _0x2ed0d8 = _0x294ff6 + "-" + _0x424b6d;
            console[_0x241d14(0x22f)](_0x2ed0d8),
              $(this)["attr"](_0x241d14(0x200), _0x2ed0d8);
          }
        },
      ),
      $(_0x31f657(0x156) + _0x3db750 + "\x22]")[_0x31f657(0x1b6)](_0x332031),
      $(_0x31f657(0x195) + _0x3db750 + "\x22]")["append"](_0x97ec39),
      $("[data-index=\x22" + _0x3db750 + "\x22]")["each"](function () {
        const _0x4a9e93 = _0x31f657;
        $(this)[_0x4a9e93(0x143)](
          $(this)
            [_0x4a9e93(0x12f)](_0x4a9e93(0x14f) + _0x3db750 + "\x22]")
            ["index"]() + 0x1,
        );
      }),
      $(_0x31f657(0x198) + _0x3db750 + "\x22]")[_0x31f657(0x21f)](function () {
        const _0x5b5851 = _0x31f657;
        $(this)[_0x5b5851(0x143)](
          $(this)
            [_0x5b5851(0x12f)](_0x5b5851(0x1e1) + _0x3db750 + "\x22]")
            ["index"]() + 0x1,
        );
      }),
      validation();
  }),
  $(_0x2b8fa1(0x1ab))["on"](_0x2b8fa1(0x1ee), function () {
    const _0x3cf597 = _0x2b8fa1,
      _0x5da17a = $(this)["parents"](_0x3cf597(0x236))[_0x3cf597(0x147)]();
    let _0x2d14b0 = $(this)[_0x3cf597(0x142)](_0x3cf597(0x1b9));
    var _0x38479c = $(_0x3cf597(0x13b) + _0x2d14b0 + "\x22]")
        ["eq"](0x0)
        [_0x3cf597(0x23c)](!![]),
      _0x704a02 = $(_0x3cf597(0x1f6) + _0x2d14b0 + "\x22]")
        ["eq"](0x0)
        [_0x3cf597(0x23c)](!![]);
    $(this)["find"](_0x3cf597(0x138))[_0x3cf597(0x201)](), cloneRemoveInput();
    let _0x13a848 = 0x0;
    $("[data-clone-input=\x22" + _0x2d14b0 + _0x3cf597(0x222))["each"](
      function () {
        const _0x528b11 = _0x3cf597,
          _0x3ab512 = $(this)[_0x528b11(0x243)](_0x528b11(0x16c));
        if (_0x3ab512 && _0x3ab512[_0x528b11(0x1c0)](_0x528b11(0x136))) {
          const _0x1252f8 = parseInt(_0x3ab512[_0x528b11(0x1fd)]("-")[0x1]);
          !isNaN(_0x1252f8) && _0x1252f8 > _0x13a848 && (_0x13a848 = _0x1252f8);
        }
      },
    ),
      _0x13a848++,
      _0x38479c[_0x3cf597(0x23d)](_0x3cf597(0x16a))[_0x3cf597(0x21f)](
        function () {
          const _0x2adde6 = _0x3cf597;
          let _0x86e091 = "relationship-" + _0x13a848;
          $(this)[_0x2adde6(0x17b)](""),
            $(this)["attr"](_0x2adde6(0x16c), _0x86e091),
            $(this)[_0x2adde6(0x243)]("data-name", _0x86e091);
        },
      ),
      _0x704a02[_0x3cf597(0x23d)](_0x3cf597(0x216))["each"](function () {
        const _0x5c8dee = _0x3cf597;
        $(this)[_0x5c8dee(0x243)](
          "data-input-field",
          _0x5c8dee(0x136) + _0x13a848,
        );
      }),
      $(this)
        [_0x3cf597(0x1bf)](
          "[data-clone-input-wrapper=\x22" + _0x2d14b0 + "\x22]",
        )
        [_0x3cf597(0x1b6)](_0x38479c),
      $(_0x3cf597(0x14d))
        ["eq"](_0x5da17a)
        [_0x3cf597(0x23d)](_0x3cf597(0x192) + _0x2d14b0 + "\x22]")
        [_0x3cf597(0x1b6)](_0x704a02),
      $(_0x3cf597(0x214) + _0x2d14b0 + "\x22]")[_0x3cf597(0x21f)](function () {
        const _0x137a8b = _0x3cf597;
        $(this)["text"](
          $(this)
            ["parents"](_0x137a8b(0x13b) + _0x2d14b0 + "\x22]")
            ["index"]() + 0x1,
        );
      }),
      $(_0x3cf597(0x158) + _0x2d14b0 + "\x22]")[_0x3cf597(0x21f)](function () {
        const _0x2d17d2 = _0x3cf597;
        $(this)[_0x2d17d2(0x143)](
          $(this)
            [_0x2d17d2(0x12f)]("[data-display-input=\x22" + _0x2d14b0 + "\x22]")
            [_0x2d17d2(0x147)]() + 0x1,
        );
      }),
      validation();
  }),
  $("[data-remove-upload]")["on"](_0x2b8fa1(0x1ee), function () {
    const _0x454462 = _0x2b8fa1,
      _0x35f884 = $(this)[_0x454462(0x142)](_0x454462(0x1ed));
    $(_0x454462(0x241) + _0x35f884 + "\x22]")[_0x454462(0x17b)](""),
      validation();
  });
function andLogic() {
  const _0x2b877f = _0x2b8fa1;
  conditionalResult &&
    (steps["eq"](x)[_0x2b877f(0x23d)](_0x2b877f(0x1b1))["hide"](),
    console[_0x2b877f(0x22f)](_0x2b877f(0x1f4)),
    steps["eq"](x)
      ["find"]("[data-show-if]")
      [_0x2b877f(0x21f)](function () {
        const _0x5dfef4 = _0x2b877f;
        function _0x43c9cb(_0x24982d) {
          const _0x17b0de = _0x3165,
            _0x4f4d69 = _0x24982d[_0x17b0de(0x1fd)]("&"),
            _0x11f9dd = [];
          return (
            _0x4f4d69[_0x17b0de(0x172)]((_0x2011fe) => {
              const _0x4b9063 = _0x17b0de,
                [_0x2b93c2, _0x5cdb44] = _0x2011fe[_0x4b9063(0x1fd)]("=");
              _0x11f9dd[_0x4b9063(0x12e)]({
                field: _0x2b93c2,
                value: _0x5cdb44,
              });
            }),
            _0x11f9dd
          );
        }
        const _0x23aa97 = $(this)[_0x5dfef4(0x243)](_0x5dfef4(0x170));
        console[_0x5dfef4(0x22f)](_0x23aa97);
        const _0x36b335 = _0x43c9cb(_0x23aa97);
        function _0x324591(_0x32af3a, _0xbf07d0) {
          const _0x44665c = _0x5dfef4;
          return _0xbf07d0[_0x44665c(0x153)]((_0x2a9800, _0x4cc62f) => {
            const _0x5ddc74 = _0x44665c;
            if (
              _0x32af3a[0x0] &&
              _0x2a9800[_0x5ddc74(0x1a8)] === _0x32af3a[0x0][_0x5ddc74(0x1a8)]
            )
              return _0x32af3a[_0x5ddc74(0x202)](
                (_0x150289, _0x4997ea) =>
                  _0xbf07d0[_0x4cc62f + _0x4997ea] &&
                  _0xbf07d0[_0x4cc62f + _0x4997ea][_0x5ddc74(0x1a8)] ===
                    _0x150289[_0x5ddc74(0x1a8)] &&
                  _0xbf07d0[_0x4cc62f + _0x4997ea]["value"] ===
                    _0x150289["value"],
              );
            return ![];
          });
        }
        const _0x26a89a = _0x324591(_0x36b335, all_data);
        _0x26a89a ? $(this)[_0x5dfef4(0x201)]() : $(this)[_0x5dfef4(0x23f)]();
      }));
}
scrollTop(), cloneRemove(), cloneRemoveInput();
