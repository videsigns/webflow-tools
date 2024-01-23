//23rd Jan 2023
//Bug fix
//1. Recurring form issue on select and textarea

const _0x3d075f = _0x2ff9;
(function (_0x2698b5, _0xc09c79) {
  const _0x2fb9ef = _0x2ff9,
    _0x36f359 = _0x2698b5();
  while (!![]) {
    try {
      const _0x5e5bbc =
        (parseInt(_0x2fb9ef(0x87)) / 0x1) * (parseInt(_0x2fb9ef(0x151)) / 0x2) +
        (parseInt(_0x2fb9ef(0xa6)) / 0x3) * (parseInt(_0x2fb9ef(0x105)) / 0x4) +
        -parseInt(_0x2fb9ef(0x1b7)) / 0x5 +
        (parseInt(_0x2fb9ef(0x123)) / 0x6) * (parseInt(_0x2fb9ef(0xab)) / 0x7) +
        parseInt(_0x2fb9ef(0x1ab)) / 0x8 +
        (-parseInt(_0x2fb9ef(0x9f)) / 0x9) *
          (-parseInt(_0x2fb9ef(0x1c9)) / 0xa) +
        (parseInt(_0x2fb9ef(0xd8)) / 0xb) * (-parseInt(_0x2fb9ef(0x166)) / 0xc);
      if (_0x5e5bbc === _0xc09c79) break;
      else _0x36f359["push"](_0x36f359["shift"]());
    } catch (_0x55f3e9) {
      _0x36f359["push"](_0x36f359["shift"]());
    }
  }
})(_0x5f4d, 0x573f6);
let x = 0x0,
  curStep = 0x0,
  steps = $("[data-form=\x22step\x22]"),
  progressbarClone = $(_0x3d075f(0x133))[_0x3d075f(0x14e)](),
  progressbar,
  countCard = !![],
  weightedSelection = $(_0x3d075f(0x99))["data"]("weighted-selection"),
  weightedSelectionRange = $("[data-weighted-selection-range]")["data"](
    _0x3d075f(0x1d0),
  ),
  selectMultiple = $("[data-select-multiple]")["data"](_0x3d075f(0xed)),
  customError = $(_0x3d075f(0x94))[_0x3d075f(0x1d9)](_0x3d075f(0xf3)),
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
  reinitIX = $(_0x3d075f(0xf4))[_0x3d075f(0x1d9)](_0x3d075f(0xe0)),
  textareaLength = 0x0,
  textInputLength = 0x0,
  emailInputLength = 0x0,
  selectInputLength = 0x0,
  checkboxInputLength = 0x0,
  filledInput = [],
  savedFilledInput = [],
  memory = $(_0x3d075f(0x1a3))[_0x3d075f(0x1d9)](_0x3d075f(0x83)),
  quiz = $(_0x3d075f(0x7a))[_0x3d075f(0x1d9)]("quiz"),
  progress = 0x0;
const urlFormly = new URL(window["location"][_0x3d075f(0xbd)]);
let _params = $(_0x3d075f(0x162))[_0x3d075f(0x1d9)]("query-param"),
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
  logicExtra = $(_0x3d075f(0xaf))[_0x3d075f(0x1d9)](_0x3d075f(0x128)),
  oldSubmitText = $(_0x3d075f(0x194))["val"](),
  oldResetText = $("[data-btn=\x22reset\x22]")["text"](),
  formReset = $(_0x3d075f(0xaf))[_0x3d075f(0x1d9)](_0x3d075f(0x161)),
  successCard = "",
  redirectTo = "",
  totalSteps = 0x0,
  checkCount = 0x0,
  resetDelay = $(_0x3d075f(0xf8))[_0x3d075f(0x1d9)](_0x3d075f(0x115))
    ? $("[data-reset-delay]")[_0x3d075f(0x1d9)](_0x3d075f(0x115))
    : 0x7d0,
  redirectDelay = $("[data-redirect-delay]")["data"](_0x3d075f(0xc1))
    ? $("[data-redirect-delay]")[_0x3d075f(0x1d9)]("redirect-delay")
    : 0x7d0,
  newTab = !![],
  unfilledArr = [],
  phoneFormat = $(_0x3d075f(0xaf))[_0x3d075f(0x1d9)](_0x3d075f(0x18e)),
  scrollToTop = $("[data-form=\x22multistep\x22]")[_0x3d075f(0x1d9)](
    "scroll-top",
  ),
  conditionalResult =
    $(_0x3d075f(0x16c))[_0x3d075f(0x1d9)]("conditional-result") ===
    _0x3d075f(0x18a),
  scrollTopOffset = parseInt(
    $(_0x3d075f(0xaf))[_0x3d075f(0x1d9)](_0x3d075f(0xb5)),
  ),
  notRobot = !![],
  all_data = [];
const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
savedFilledInput = JSON[_0x3d075f(0x150)](
  localStorage[_0x3d075f(0x11a)](_0x3d075f(0x175)),
);
var ogCloneArr = [];
$("[data-clone]")["each"](function () {
  const _0x3e5b9a = _0x3d075f;
  ogCloneArr["push"]({
    name: $(this)[_0x3e5b9a(0x1d9)](_0x3e5b9a(0x14e)),
    element: $(this)[_0x3e5b9a(0x14e)](!![]),
    display: $(_0x3e5b9a(0xc5) + $(this)["data"]("clone") + "\x22]")
      ["eq"](0x0)
      [_0x3e5b9a(0x14e)](!![]),
  });
});
$("div.g-recaptcha")["length"] > 0x0 && (notRobot = ![]);
function recaptcha(_0x17d102) {
  notRobot = !![];
}
$(_0x3d075f(0x182))[_0x3d075f(0x1c8)] > 0x0 &&
  (countCard = $("[data-count-card]")["data"]("count-card"));
$(_0x3d075f(0x167))["hide"](),
  $(progressbarClone)[_0x3d075f(0xa1)](_0x3d075f(0x17e)),
  $(_0x3d075f(0xe6))[_0x3d075f(0x184)]()[_0x3d075f(0xee)](),
  $(_0x3d075f(0x194))[_0x3d075f(0xa2)](),
  $(_0x3d075f(0x1be))[_0x3d075f(0xa2)](),
  steps[_0x3d075f(0xfd)](function () {
    const _0x28ea64 = _0x3d075f;
    $(_0x28ea64(0xe6))[_0x28ea64(0x1b8)](
      progressbarClone[_0x28ea64(0x14e)](!![], !![]),
    );
  }),
  $("[data-input-field]")[_0x3d075f(0xa2)]();
countCard
  ? ((curStep = curStep + 0x1),
    (totalSteps = steps[_0x3d075f(0x1c8)]),
    $(_0x3d075f(0xf0))["text"](totalSteps))
  : ($(steps[x])["data"](_0x3d075f(0x9b))
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    (totalSteps = $(_0x3d075f(0x82))[_0x3d075f(0x1c8)]),
    $(_0x3d075f(0xf0))[_0x3d075f(0x8f)](totalSteps),
    $(_0x3d075f(0x114))["each"](function () {
      const _0x146873 = _0x3d075f;
      $($(_0x146873(0x133))[$(this)[_0x146873(0x103)]()])[_0x146873(0xa2)]();
    }));
(progressbar = $(_0x3d075f(0xe6))[_0x3d075f(0x184)]()),
  $("[data-form=\x22progress-indicator\x22]")["on"](
    _0x3d075f(0x13b),
    clickableIndicator,
  ),
  $(_0x3d075f(0x183))["text"](curStep),
  steps[_0x3d075f(0xa2)](),
  $("[data-success-card]")[_0x3d075f(0xa2)](),
  $(_0x3d075f(0xc6))[_0x3d075f(0xfd)](function () {
    const _0x555cde = _0x3d075f;
    $(this)[_0x555cde(0x1cb)](_0x555cde(0xcd), _0x555cde(0x92));
  });
function getParams() {
  const _0x971d10 = _0x3d075f;
  urlFormly[_0x971d10(0x18c)][_0x971d10(0xde)](function (_0x26bbdc, _0x22bc79) {
    searchQ["push"]({ val: _0x26bbdc, key: _0x22bc79 });
  });
}
function getSafe(_0x17539f, _0x523dfe) {
  try {
    return _0x17539f();
  } catch (_0x45876c) {
    return _0x523dfe;
  }
}
function phoneAutoFormat(_0x55857a) {
  var _0x3d4ead = "";
  return function (_0x25e5fa) {
    const _0x3e2b7c = _0x2ff9;
    var _0x71f891 = "",
      _0x38cc20 = _0x25e5fa[_0x3e2b7c(0xca)](/\D/g, ""),
      _0x12e5bf = 0x0,
      _0x23b36f = 0x0;
    while (
      _0x12e5bf < _0x38cc20[_0x3e2b7c(0x1c8)] &&
      _0x23b36f < _0x55857a[_0x3e2b7c(0x1c8)]
    ) {
      _0x55857a[_0x23b36f] === "x"
        ? ((_0x71f891 += _0x38cc20[_0x12e5bf]), _0x12e5bf++)
        : (_0x71f891 += _0x55857a[_0x23b36f]),
        _0x23b36f++;
    }
    if (_0x25e5fa[_0x3e2b7c(0x1c8)] < _0x3d4ead[_0x3e2b7c(0x1c8)]) {
      var _0x5d4414 = _0x55857a["slice"](_0x23b36f);
      _0x71f891 += _0x5d4414["replace"](/x/g, "");
    }
    return (_0x3d4ead = _0x71f891), _0x71f891;
  };
}
function validateURL(_0x33a123) {
  const _0x18aa4b = _0x3d075f;
  return urlPattern[_0x18aa4b(0xe5)](_0x33a123) ? !![] : ![];
}
quiz &&
  steps["each"](function () {
    const _0xa3bca6 = _0x3d075f;
    $(this)[_0xa3bca6(0x184)]()[_0xa3bca6(0x1cb)](_0xa3bca6(0x118), !![]),
      $(this)["children"]()[_0xa3bca6(0x1cb)](_0xa3bca6(0x91), 0xfa);
  });
function disableBtn(_0x184fa2) {
  const _0x1d9169 = _0x3d075f;
  (fill = ![]),
    !customError &&
      ($(_0x1d9169(0xa4))[_0x1d9169(0xd1)]({
        opacity: _0x1d9169(0x1c3),
        "pointer-events": _0x1d9169(0x1d2),
      }),
      $(_0x1d9169(0xa4))[_0x1d9169(0x85)](_0x1d9169(0x1c4)),
      $(_0x1d9169(0x194))["css"]({
        opacity: _0x1d9169(0x1c3),
        "pointer-events": "none",
      }),
      $("[data-form=\x22submit-btn\x22]")[_0x1d9169(0x85)]("disabled"),
      $("[data-form-ms=\x22submit-btn\x22]")[_0x1d9169(0xd1)]({
        opacity: _0x1d9169(0x1c3),
        "pointer-events": _0x1d9169(0x1d2),
      }),
      $(_0x1d9169(0x1be))[_0x1d9169(0x85)](_0x1d9169(0x1c4)));
}
function enableBtn() {
  const _0x4fdf78 = _0x3d075f;
  (fill = !![]),
    $(_0x4fdf78(0xa4))["css"]({
      "pointer-events": _0x4fdf78(0x1bd),
      opacity: "1",
    }),
    $("[data-form=\x22next-btn\x22]")[_0x4fdf78(0xa1)]("disabled"),
    $("[data-form=\x22submit-btn\x22]")["css"]({
      "pointer-events": _0x4fdf78(0x1bd),
      opacity: "1",
    }),
    $("[data-form=\x22submit-btn\x22]")[_0x4fdf78(0xa1)](_0x4fdf78(0x1c4)),
    $("[data-form-ms=\x22submit-btn\x22]")[_0x4fdf78(0xd1)]({
      "pointer-events": _0x4fdf78(0x1bd),
      opacity: "1",
    }),
    $(_0x4fdf78(0x1be))["removeClass"](_0x4fdf78(0x1c4));
}
function saveFilledInput() {
  const _0x33b1a1 = _0x3d075f;
  $(_0x33b1a1(0x100))
    [_0x33b1a1(0x1ae)](_0x33b1a1(0x14a))
    [_0x33b1a1(0xfd)](function () {
      const _0x5cce4a = _0x33b1a1;
      $(this)[_0x5cce4a(0x1cb)](_0x5cce4a(0xcd)) === _0x5cce4a(0x125) ||
      $(this)["attr"](_0x5cce4a(0xcd)) === "radio"
        ? $(this)[_0x5cce4a(0x86)](_0x5cce4a(0x198)) &&
          (filledInput[_0x5cce4a(0x19c)](
            (_0x291a54) =>
              _0x291a54[_0x5cce4a(0x97)] === $(this)["attr"](_0x5cce4a(0xea)),
          )
            ? ((filledInput = filledInput[_0x5cce4a(0x12f)](
                (_0x50b7c6) =>
                  _0x50b7c6[_0x5cce4a(0x97)] !==
                  $(this)[_0x5cce4a(0x1cb)](_0x5cce4a(0xea)),
              )),
              $(this)[_0x5cce4a(0x88)]() !== "" &&
                filledInput["push"]({
                  inputName: $(this)[_0x5cce4a(0x1cb)](_0x5cce4a(0xea)),
                  value: $(this)["val"](),
                }))
            : $(this)[_0x5cce4a(0x88)]() !== "" &&
              filledInput["push"]({
                inputName: $(this)["attr"]("name"),
                value: $(this)["val"](),
              }))
        : filledInput[_0x5cce4a(0x19c)](
              (_0x7d55b6) =>
                _0x7d55b6[_0x5cce4a(0x97)] ===
                $(this)[_0x5cce4a(0x1cb)](_0x5cce4a(0xea)),
            )
          ? ((filledInput = filledInput["filter"](
              (_0x455ad6) =>
                _0x455ad6[_0x5cce4a(0x97)] !==
                $(this)[_0x5cce4a(0x1cb)](_0x5cce4a(0xea)),
            )),
            $(this)["val"]() !== "" &&
              filledInput[_0x5cce4a(0xad)]({
                inputName: $(this)[_0x5cce4a(0x1cb)]("name"),
                value: $(this)[_0x5cce4a(0x88)](),
              }))
          : $(this)["val"]() !== "" &&
            filledInput[_0x5cce4a(0xad)]({
              inputName: $(this)[_0x5cce4a(0x1cb)](_0x5cce4a(0xea)),
              value: $(this)["val"](),
            });
    }),
    localStorage[_0x33b1a1(0xc9)](_0x33b1a1(0x175)),
    localStorage["setItem"](
      _0x33b1a1(0x175),
      JSON[_0x33b1a1(0x7c)](filledInput),
    );
}
function scrollTop() {
  const _0x26935f = _0x3d075f;
  scrollToTop &&
    $("html,\x20body")[_0x26935f(0x15d)](
      {
        scrollTop:
          $("[data-form=\x22multistep\x22]")["offset"]()[_0x26935f(0x16f)] -
          scrollTopOffset,
      },
      0x3e8,
    );
}
function updateStep() {
  const _0x2503f9 = _0x3d075f;
  scrollTop(),
    (skip = ![]),
    $("[data-form=\x22custom-progress-indicator\x22]")["removeClass"](
      _0x2503f9(0x1c4),
    );
  $("[data-clickable]")[_0x2503f9(0x1d9)](_0x2503f9(0x186)) &&
    (steps[_0x2503f9(0x104)](_0x2503f9(0x112))["each"](function () {
      const _0x4c3477 = _0x2503f9;
      $(
        $(_0x4c3477(0x1b6))[
          $(this)[_0x4c3477(0xa3)](_0x4c3477(0x17a))[_0x4c3477(0x103)]()
        ],
      ),
        $(this)[_0x4c3477(0x88)]() === "" && emptyInput++;
    }),
    emptyInput > 0x0
      ? $(_0x2503f9(0xf2))[_0x2503f9(0x85)](_0x2503f9(0x1c4))
      : $("input[type=\x22submit\x22]")["removeClass"](_0x2503f9(0x1c4)));
  $(_0x2503f9(0x1b6))[_0x2503f9(0xa1)](_0x2503f9(0x17e)),
    $("[data-form=\x22custom-progress-indicator\x22]")[_0x2503f9(0x85)](
      "disabled",
    ),
    $($(_0x2503f9(0x1b6))[x])[_0x2503f9(0x85)]("current"),
    (selection = selections[_0x2503f9(0x12f)](
      (_0x4495e6) => _0x4495e6[_0x2503f9(0x1ac)] === x - 0x1,
    ));
  next &&
    (x = getSafe(() => selection[0x0]["skipTo"])
      ? parseInt(getSafe(() => selection[0x0][_0x2503f9(0xb6)]))
      : x);
  $(_0x2503f9(0x1b4))[_0x2503f9(0xa2)](), steps[_0x2503f9(0xa2)]();
  reinitIX === !![] && window[_0x2503f9(0x12a)]["destroy"]();
  $(progressbar)[_0x2503f9(0xa1)]("current");
  for (i = 0x0; i <= x; i++) {
    countCard
      ? $(progressbar[i])["addClass"](_0x2503f9(0x17e))
      : !$(steps[i])[_0x2503f9(0x1d9)](_0x2503f9(0x9b)) &&
        $(progressbar[i])["addClass"]("current");
  }
  reinitIX === !![]
    ? (window["Webflow"] &&
        window["Webflow"]
          [_0x2503f9(0x1a0)](_0x2503f9(0x96))
          [_0x2503f9(0x155)](),
      document[_0x2503f9(0x1c6)](new Event(_0x2503f9(0x15f))),
      $(steps[x])[_0x2503f9(0x169)]())
    : $(steps[x])["fadeIn"]("slow");
  $(_0x2503f9(0x7b))["removeClass"](_0x2503f9(0xa7));
  x === 0x0 &&
    !$(steps[x])[_0x2503f9(0x1d9)]("card") &&
    ($(steps[x])[_0x2503f9(0x104)](_0x2503f9(0x1b4))[_0x2503f9(0x169)](),
    $(steps[x])
      [_0x2503f9(0x104)](_0x2503f9(0x1b4))
      [_0x2503f9(0x85)](_0x2503f9(0xa7)));
  selection[_0x2503f9(0x1c8)] > 0x0
    ? ($(steps[x])
        [_0x2503f9(0x104)](
          _0x2503f9(0x106) + selection[0x0][_0x2503f9(0xe8)] + "\x22]",
        )
        [_0x2503f9(0x169)](),
      $(steps[x])
        [_0x2503f9(0x104)](
          "[data-answer=\x22" + selection[0x0][_0x2503f9(0xe8)] + "\x22]",
        )
        ["addClass"](_0x2503f9(0xa7)))
    : ($(steps[x])
        [_0x2503f9(0x104)](_0x2503f9(0x106) + answer + "\x22]")
        [_0x2503f9(0x169)](),
      $(steps[x])
        [_0x2503f9(0x104)](_0x2503f9(0x106) + answer + "\x22]")
        [_0x2503f9(0x85)](_0x2503f9(0xa7)));
  if (x === 0x0)
    $(_0x2503f9(0x7f))[_0x2503f9(0xa2)](),
      $(_0x2503f9(0xa4))["show"](),
      $(_0x2503f9(0x194))[_0x2503f9(0xa2)]();
  else {
    if (
      x === steps[_0x2503f9(0x1c8)] - 0x1 ||
      $(steps[x])[_0x2503f9(0x104)]("[data-form=\x22submit\x22]:visible")[
        _0x2503f9(0x1c8)
      ] > 0x0
    ) {
      $("[data-form=\x22next-btn\x22]")["hide"]();
      if (
        $(steps[x])
          [_0x2503f9(0x104)](_0x2503f9(0x158))
          [_0x2503f9(0x1d9)](_0x2503f9(0x13d))
      )
        $(steps[x])[_0x2503f9(0x104)](_0x2503f9(0x158))[_0x2503f9(0x169)]();
      else
        $(_0x2503f9(0xa4))["data"](_0x2503f9(0x13d)) &&
          $(_0x2503f9(0xa4))[_0x2503f9(0x169)]();
      $(_0x2503f9(0x194))[_0x2503f9(0x169)](),
        $(_0x2503f9(0x1be))[_0x2503f9(0x169)](),
        $("[data-form=\x22back-btn\x22]")["show"]();
    } else
      $(_0x2503f9(0xa4))["show"](),
        $("[data-form=\x22back-btn\x22]")[_0x2503f9(0x169)](),
        $(_0x2503f9(0x194))[_0x2503f9(0xa2)](),
        $(_0x2503f9(0x1be))[_0x2503f9(0xa2)]();
  }
  $($(steps[x])[_0x2503f9(0x104)]("input[autofocus]")[0x0])[_0x2503f9(0xda)](),
    $($(steps[x])[_0x2503f9(0x104)]("textarea[autofocus]")[0x0])[
      _0x2503f9(0xda)
    ](),
    validation();
  for (idx = 0x0; idx <= x; idx++) {
    $($(_0x2503f9(0x1b6))[idx])[_0x2503f9(0xa1)]("disabled");
  }
}
function validateEmail(_0x5be8be, _0xdab9a4, _0x2c6d9e) {
  const _0x43326b = _0x3d075f;
  let _0x54088a = _0x5be8be["includes"]("@")
    ? _0x5be8be[_0x43326b(0x189)]("@")[0x1][_0x43326b(0x189)](".")[0x0]
    : [];
  dom = [];
  _0xdab9a4 !== undefined &&
    _0xdab9a4[_0x43326b(0x189)](",")[_0x43326b(0xde)](function (_0x5d8b48) {
      const _0x37ce71 = _0x43326b;
      _0x5d8b48[_0x37ce71(0x108)](_0x54088a) && dom[_0x37ce71(0xad)](_0x54088a);
    });
  dom["length"] > 0x0 ? (domainAllowed = ![]) : (domainAllowed = !![]);
  var _0x598b02 = /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,20})?$/;
  console["log"](_0x598b02[_0x43326b(0xe5)](_0x5be8be)),
    !_0x598b02["test"](_0x5be8be) || !domainAllowed
      ? ((emailFilled = ![]),
        unfilledArr[_0x43326b(0xad)]({ input: _0x2c6d9e }))
      : (emailFilled = !![]);
}
function phoneValidation(_0x45ab9d, _0x315d0a, _0x3e3623) {
  if (phoneFormat) return _0x315d0a >= _0x3e3623 ? !![] : ![];
  else {
    if (_0x315d0a >= _0x3e3623) return !![];
  }
}
function validation() {
  const _0xf8dbd9 = _0x3d075f;
  $(steps[x])[_0xf8dbd9(0x1d9)](_0xf8dbd9(0x9b)) && enableBtn();
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
    (textareaLength = $(steps[x])["find"](_0xf8dbd9(0x17c))[_0xf8dbd9(0x1c8)]),
    (textInputLength = $(steps[x])[_0xf8dbd9(0x104)](_0xf8dbd9(0x109))[
      "length"
    ]),
    (selectInputLength = $(steps[x])[_0xf8dbd9(0x104)](_0xf8dbd9(0x1b2))[
      _0xf8dbd9(0x1c8)
    ]),
    (emailInputLength = $(steps[x])[_0xf8dbd9(0x104)](
      "input[type=\x22email\x22]:visible",
    )["length"]),
    (checkboxInputLength = $(steps[x])[_0xf8dbd9(0x104)](_0xf8dbd9(0x1c1))[
      _0xf8dbd9(0x1c8)
    ]);
  textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0
    ? disableBtn()
    : enableBtn();
  checkCount = $(steps[x])[_0xf8dbd9(0x1d9)](_0xf8dbd9(0x125))
    ? $(steps[x])[_0xf8dbd9(0x1d9)]("checkbox")
    : $(steps[x])[_0xf8dbd9(0x104)](_0xf8dbd9(0xbc))[_0xf8dbd9(0x1c8)] > 0x0
      ? $(steps[x])["find"](_0xf8dbd9(0xbc))["data"](_0xf8dbd9(0x125))
      : 0x0;
  if (!logicExtra)
    $(steps[x])[_0xf8dbd9(0x104)](_0xf8dbd9(0x1ba))["is"](_0xf8dbd9(0x139)) &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])[_0xf8dbd9(0x104)](_0xf8dbd9(0xdd))[_0xf8dbd9(0x1c8)]
        ? $(steps[x])
            [_0xf8dbd9(0x104)](_0xf8dbd9(0xdd))
            ["each"](function () {
              const _0xe58499 = _0xf8dbd9;
              $(this)["is"](_0xe58499(0x1aa))
                ? $(steps[x])["find"](_0xe58499(0x191))[_0xe58499(0x1c8)] <
                    0x1 &&
                  ((checkboxFilled = !![]),
                  resetInputErrorMessage(
                    $(this)[_0xe58499(0x1cb)](_0xe58499(0xea)),
                  ))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0xe58499(0xad)]({
                    input: $(this)[_0xe58499(0x1cb)](_0xe58499(0xea)),
                  }));
            })
        : $(steps[x])["find"](":input[type=\x22checkbox\x22]:checked")[
              "length"
            ] >= checkCount
          ? $(steps[x])["find"](":input[type=\x22checkbox\x22][required]")[
              _0xf8dbd9(0x1c8)
            ] > 0x0
            ? $(steps[x])
                [_0xf8dbd9(0x104)](_0xf8dbd9(0x191))
                [_0xf8dbd9(0xfd)](function () {
                  const _0x5e87dd = _0xf8dbd9;
                  checkboxFilled = ![];
                  let _0x111c5f = $(steps[x])[_0x5e87dd(0x104)](
                      ":input[type=\x22checkbox\x22][required]",
                    )[_0x5e87dd(0x1c8)],
                    _0x225354 = $(steps[x])[_0x5e87dd(0x104)](_0x5e87dd(0x193))[
                      _0x5e87dd(0x1c8)
                    ];
                  console[_0x5e87dd(0xdb)](_0x111c5f - _0x225354),
                    _0x111c5f - _0x225354 === 0x0
                      ? ((checkboxFilled = !![]),
                        resetInputErrorMessage(
                          $(steps[x])
                            ["find"](_0x5e87dd(0xdd))
                            ["attr"](_0x5e87dd(0xea)),
                        ))
                      : ((checkboxFilled = ![]),
                        $(steps[x])
                          [_0x5e87dd(0x104)](_0x5e87dd(0xb1))
                          [_0x5e87dd(0xfd)](function () {
                            const _0x31f781 = _0x5e87dd;
                            unfilledArr[_0x31f781(0xad)]({
                              input: $(this)[_0x31f781(0x1cb)](_0x31f781(0xea)),
                            });
                          }));
                })
            : ((checkboxFilled = !![]),
              resetInputErrorMessage(
                $(steps[x])
                  [_0xf8dbd9(0x104)](_0xf8dbd9(0xdd))
                  [_0xf8dbd9(0x1cb)](_0xf8dbd9(0xea)),
              ))
          : ((checkboxFilled = ![]),
            $(steps[x])
              [_0xf8dbd9(0x104)](":input[type=\x22checkbox\x22][required]")
              [_0xf8dbd9(0xfd)](function () {
                const _0x41c1e1 = _0xf8dbd9;
                $(this)[_0x41c1e1(0x1ae)](":checked") &&
                  unfilledArr["push"]({
                    input: $(this)[_0x41c1e1(0x1cb)](_0x41c1e1(0xea)),
                  });
              }),
            unfilledArr[_0xf8dbd9(0xad)]({
              input: $(steps[x])
                ["find"](_0xf8dbd9(0xdd))
                [_0xf8dbd9(0x1cb)](_0xf8dbd9(0xea)),
            }))),
      $(steps[x])
        [_0xf8dbd9(0x104)](_0xf8dbd9(0x120))
        [_0xf8dbd9(0xfd)](function (_0x3855f5) {
          const _0x1e8954 = _0xf8dbd9;
          var _0x3a230c = $(this)[_0x1e8954(0x1cb)](_0x1e8954(0xea));
          $(_0x1e8954(0x153) + _0x3a230c + _0x1e8954(0x159))["length"] == 0x0
            ? (!empReqRadio["find"](
                (_0x3f2d4a) => _0x3f2d4a[_0x1e8954(0x1bb)] === _0x3855f5,
              ) && empReqRadio[_0x1e8954(0xad)]({ input: _0x3855f5 }),
              unfilledArr[_0x1e8954(0xad)]({
                input: $(this)[_0x1e8954(0x1cb)](_0x1e8954(0xea)),
              }))
            : (empReqRadio = empReqRadio[_0x1e8954(0x12f)](
                (_0x449d6c) => _0x449d6c[_0x1e8954(0x1bb)] !== _0x3855f5,
              )),
            empReqRadio[_0x1e8954(0x1c8)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0xf8dbd9(0xc3))
        ["each"](function (_0x51d55d) {
          const _0x310925 = _0xf8dbd9;
          let _0x42e06b = $(this)[_0x310925(0x88)]()[_0x310925(0x1c8)],
            _0x551d54 = $(this)[_0x310925(0x1d9)](_0x310925(0x13f))
              ? $(this)[_0x310925(0x1d9)](_0x310925(0x13f))
              : 0x0;
          $(this)["val"]() !== "" && _0x42e06b >= _0x551d54
            ? (empReqInput = empReqInput[_0x310925(0x12f)](
                (_0x582f02) => _0x582f02[_0x310925(0x1bb)] !== _0x51d55d,
              ))
            : (!empReqInput[_0x310925(0x104)](
                (_0x2859a4) => _0x2859a4[_0x310925(0x1bb)] === _0x51d55d,
              ) && empReqInput[_0x310925(0xad)]({ input: _0x51d55d }),
              unfilledArr[_0x310925(0xad)]({
                input: $(this)["attr"](_0x310925(0xea)),
              })),
            empReqInput[_0x310925(0x1c8)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        ["find"](":input[type=\x22password\x22][required]")
        [_0xf8dbd9(0xfd)](function (_0xb42de2) {
          const _0x11b4ab = _0xf8dbd9;
          let _0x8fd554 = $(this)[_0x11b4ab(0x88)]()["length"],
            _0x4618fe = $(this)[_0x11b4ab(0x1d9)](_0x11b4ab(0x13f))
              ? $(this)[_0x11b4ab(0x1d9)]("min-character")
              : 0x0;
          $(this)["val"]() !== "" && _0x8fd554 >= _0x4618fe
            ? (empReqPassword = empReqPassword[_0x11b4ab(0x12f)](
                (_0x3a5dc0) => _0x3a5dc0[_0x11b4ab(0x1bb)] !== _0xb42de2,
              ))
            : (!empReqPassword[_0x11b4ab(0x104)](
                (_0xcebc03) => _0xcebc03[_0x11b4ab(0x1bb)] === _0xb42de2,
              ) && empReqPassword[_0x11b4ab(0xad)]({ input: _0xb42de2 }),
              unfilledArr[_0x11b4ab(0xad)]({
                input: $(this)[_0x11b4ab(0x1cb)](_0x11b4ab(0xea)),
              })),
            empReqPassword[_0x11b4ab(0x1c8)] === 0x0
              ? (passwordFilled = !![])
              : (passwordFilled = ![]);
        }),
      $(steps[x])
        [_0xf8dbd9(0x104)](":input[type=\x22url\x22][required]")
        [_0xf8dbd9(0xfd)](function (_0x5ca892) {
          const _0x1bacac = _0xf8dbd9;
          let _0x5493be = $(this)[_0x1bacac(0x88)]()[_0x1bacac(0x1c8)],
            _0x3a5c19 = $(this)[_0x1bacac(0x1d9)]("min-character")
              ? $(this)[_0x1bacac(0x1d9)]("min-character")
              : 0x0;
          $(this)[_0x1bacac(0x88)]() !== "" && _0x5493be >= _0x3a5c19
            ? (empReqTime = empReqTime[_0x1bacac(0x12f)](
                (_0x9ba3ca) => _0x9ba3ca["input"] !== _0x5ca892,
              ))
            : (!empReqTime[_0x1bacac(0x104)](
                (_0x3255cc) => _0x3255cc[_0x1bacac(0x1bb)] === _0x5ca892,
              ) && empReqUrl[_0x1bacac(0xad)]({ input: _0x5ca892 }),
              unfilledArr[_0x1bacac(0xad)]({
                input: $(this)[_0x1bacac(0x1cb)](_0x1bacac(0xea)),
              })),
            empReqTime[_0x1bacac(0x1c8)] === 0x0 &&
            validateURL($(this)[_0x1bacac(0x88)]())
              ? ((timeFilled = !![]), console["log"](timeFilled))
              : (timeFilled = ![]);
        }),
      $(steps[x])
        [_0xf8dbd9(0x104)](_0xf8dbd9(0x18d))
        ["each"](function (_0x2f0ffa) {
          const _0x31ded7 = _0xf8dbd9;
          let _0x45ca6e = $(this)[_0x31ded7(0x88)]()[_0x31ded7(0x1c8)],
            _0x5ccc4f = $(this)[_0x31ded7(0x1d9)](_0x31ded7(0x13f))
              ? $(this)[_0x31ded7(0x1d9)](_0x31ded7(0x13f))
              : 0x0;
          $(this)[_0x31ded7(0x88)]() !== "" && _0x45ca6e >= _0x5ccc4f
            ? (empReqUrl = empReqUrl[_0x31ded7(0x12f)](
                (_0xf1738e) => _0xf1738e[_0x31ded7(0x1bb)] !== _0x2f0ffa,
              ))
            : (!empReqUrl[_0x31ded7(0x104)](
                (_0x5f36c1) => _0x5f36c1[_0x31ded7(0x1bb)] === _0x2f0ffa,
              ) && empReqUrl["push"]({ input: _0x2f0ffa }),
              unfilledArr[_0x31ded7(0xad)]({
                input: $(this)[_0x31ded7(0x1cb)](_0x31ded7(0xea)),
              })),
            empReqUrl["length"] === 0x0 &&
            validateURL($(this)[_0x31ded7(0x88)]())
              ? ((urlFilled = !![]), console[_0x31ded7(0xdb)](urlFilled))
              : (urlFilled = ![]);
        }),
      $(steps[x])
        [_0xf8dbd9(0x104)](_0xf8dbd9(0x143))
        [_0xf8dbd9(0xfd)](function (_0x2f3199) {
          const _0x16cb51 = _0xf8dbd9;
          $(this)["val"]() !== ""
            ? (empReqDate = empReqDate[_0x16cb51(0x12f)](
                (_0x5ce437) => _0x5ce437[_0x16cb51(0x1bb)] !== _0x2f3199,
              ))
            : (!empReqDate[_0x16cb51(0x104)](
                (_0x4c7044) => _0x4c7044["input"] === _0x2f3199,
              ) && empReqDate[_0x16cb51(0xad)]({ input: _0x2f3199 }),
              unfilledArr[_0x16cb51(0xad)]({
                input: $(this)[_0x16cb51(0x1cb)]("name"),
              })),
            empReqDate[_0x16cb51(0x1c8)] === 0x0
              ? (dateFilled = !![])
              : (dateFilled = ![]);
        }),
      $(steps[x])
        [_0xf8dbd9(0x104)](_0xf8dbd9(0xaa))
        [_0xf8dbd9(0xfd)](function (_0x526d9) {
          const _0x4e5b56 = _0xf8dbd9;
          if ($(this)["val"]() !== "") {
            let _0x3ae182 = $(this)[_0x4e5b56(0x88)]()[_0x4e5b56(0x1c8)],
              _0x4523f6 = $(this)["data"](_0x4e5b56(0x13f))
                ? $(this)["data"](_0x4e5b56(0x13f))
                : 0x0;
            if ($(this)["data"](_0x4e5b56(0x89))) {
              var _0x5f5159 = phoneAutoFormat(
                $(this)[_0x4e5b56(0x1d9)](_0x4e5b56(0x89)),
              );
              $(this)[_0x4e5b56(0x88)](_0x5f5159($(this)[_0x4e5b56(0x88)]()));
            }
            phoneValidation($(this)[_0x4e5b56(0x88)](), _0x3ae182, _0x4523f6)
              ? (empReqTel = empReqTel[_0x4e5b56(0x12f)](
                  (_0x56c100) => _0x56c100["input"] !== _0x526d9,
                ))
              : empReqTel[_0x4e5b56(0xad)]({ input: _0x526d9 });
          } else
            !empReqTel[_0x4e5b56(0x104)](
              (_0x3705fb) => _0x3705fb[_0x4e5b56(0x1bb)] === _0x526d9,
            ) && empReqTel[_0x4e5b56(0xad)]({ input: _0x526d9 }),
              unfilledArr["push"]({
                input: $(this)[_0x4e5b56(0x1cb)](_0x4e5b56(0xea)),
              });
          empReqTel[_0x4e5b56(0x1c8)] === 0x0
            ? (telFilled = !![])
            : (telFilled = ![]);
        }),
      $(steps[x])
        [_0xf8dbd9(0x104)](_0xf8dbd9(0x95))
        [_0xf8dbd9(0xfd)](function (_0x16d111) {
          const _0x2cc501 = _0xf8dbd9;
          $(this)[_0x2cc501(0x88)]() !== ""
            ? (empReqFile = empReqFile["filter"](
                (_0x35ed6a) => _0x35ed6a[_0x2cc501(0x1bb)] !== _0x16d111,
              ))
            : (!empReqFile[_0x2cc501(0x104)](
                (_0x1e8432) => _0x1e8432["input"] === _0x16d111,
              ) && empReqFile[_0x2cc501(0xad)]({ input: _0x16d111 }),
              unfilledArr[_0x2cc501(0xad)]({
                input: $(this)[_0x2cc501(0x1cb)](_0x2cc501(0xea)),
              })),
            empReqFile["length"] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0xf8dbd9(0x104)](_0xf8dbd9(0x132))
        [_0xf8dbd9(0xfd)](function (_0x260ccb) {
          const _0x568442 = _0xf8dbd9;
          let _0x37e92e = $(this)[_0x568442(0x88)]()[_0x568442(0x1c8)],
            _0x5105e4 = $(this)["data"]("min-character")
              ? $(this)["data"]("min-character")
              : 0x0;
          $(this)[_0x568442(0x88)]() !== "" && _0x37e92e >= _0x5105e4
            ? (empReqNum = empReqNum[_0x568442(0x12f)](
                (_0x2a6d01) => _0x2a6d01[_0x568442(0x1bb)] !== _0x260ccb,
              ))
            : (!empReqNum[_0x568442(0x104)](
                (_0x32c647) => _0x32c647[_0x568442(0x1bb)] === _0x260ccb,
              ) && empReqNum["push"]({ input: _0x260ccb }),
              unfilledArr[_0x568442(0xad)]({
                input: $(this)[_0x568442(0x1cb)](_0x568442(0xea)),
              })),
            empReqNum[_0x568442(0x1c8)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0xf8dbd9(0x104)](_0xf8dbd9(0x137))
        [_0xf8dbd9(0xfd)](function (_0x41e840) {
          const _0x403bc6 = _0xf8dbd9;
          let _0x210721 = $(this)[_0x403bc6(0x88)]();
          _0x210721 === "" && (_0x210721 = null),
            _0x210721 != null
              ? (empReqSelect = empReqSelect[_0x403bc6(0x12f)](
                  (_0x5a320e) => _0x5a320e["input"] !== _0x41e840,
                ))
              : (!empReqSelect[_0x403bc6(0x104)](
                  (_0x3081ea) => _0x3081ea["input"] === _0x41e840,
                ) && empReqSelect[_0x403bc6(0xad)]({ input: _0x41e840 }),
                unfilledArr[_0x403bc6(0xad)]({
                  input: $(this)[_0x403bc6(0x1cb)](_0x403bc6(0xea)),
                })),
            empReqSelect["length"] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0xf8dbd9(0x104)](_0xf8dbd9(0x10f))
        ["each"](function (_0x5c0c4d) {
          const _0xa4b09c = _0xf8dbd9;
          let _0x1e2e88 = $(this)[_0xa4b09c(0x88)]()[_0xa4b09c(0x1c8)],
            _0xbe642b = $(this)[_0xa4b09c(0x1d9)]("min-character")
              ? $(this)[_0xa4b09c(0x1d9)]("min-character")
              : 0x0;
          $(this)["val"]() !== "" && _0x1e2e88 >= _0xbe642b
            ? (empReqTextarea = empReqTextarea[_0xa4b09c(0x12f)](
                (_0xa5e257) => _0xa5e257[_0xa4b09c(0x1bb)] !== _0x5c0c4d,
              ))
            : (!empReqTextarea["find"](
                (_0x365cab) => _0x365cab[_0xa4b09c(0x1bb)] === _0x5c0c4d,
              ) && empReqTextarea[_0xa4b09c(0xad)]({ input: _0x5c0c4d }),
              unfilledArr[_0xa4b09c(0xad)]({
                input: $(this)["attr"](_0xa4b09c(0xea)),
              })),
            empReqTextarea[_0xa4b09c(0x1c8)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0xf8dbd9(0x104)](":input[type=\x22email\x22][required]")
        ["each"](function () {
          const _0x183d1c = _0xf8dbd9;
          $(this)["val"]() !== ""
            ? validateEmail(
                $(this)[_0x183d1c(0x88)](),
                $(this)[_0x183d1c(0x1d9)](_0x183d1c(0xf1)),
                $(this)[_0x183d1c(0x1cb)](_0x183d1c(0xea)),
              )
            : ((emailFilled = ![]),
              unfilledArr["push"]({
                input: $(this)[_0x183d1c(0x1cb)]("name"),
              }));
        });
  else {
    if ($(steps[x])[_0xf8dbd9(0x1d9)](_0xf8dbd9(0x9b)))
      (answer = $(steps[x])
        [_0xf8dbd9(0x104)](_0xf8dbd9(0x101))
        [_0xf8dbd9(0x1d9)]("go-to")),
        (selections = selections[_0xf8dbd9(0x12f)](
          (_0x4138ae) => _0x4138ae[_0xf8dbd9(0x1ac)] !== x,
        )),
        selections[_0xf8dbd9(0xad)]({ step: x, selected: answer });
    else
      $(steps[x])
        [_0xf8dbd9(0x104)](".active-answer-card")
        [_0xf8dbd9(0x1d9)](_0xf8dbd9(0x9b)) &&
        ((answer = $(steps[x])
          [_0xf8dbd9(0x104)](_0xf8dbd9(0x7b))
          [_0xf8dbd9(0x1d9)]("go-to")),
        (selections = selections[_0xf8dbd9(0x12f)](
          (_0x402835) => _0x402835[_0xf8dbd9(0x1ac)] !== x,
        )),
        selections[_0xf8dbd9(0xad)]({ step: x, selected: answer }));
    $(steps[x])
      [_0xf8dbd9(0x104)](_0xf8dbd9(0x7b))
      [_0xf8dbd9(0x104)](_0xf8dbd9(0x1ba))
      ["is"](_0xf8dbd9(0x139)) &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])[_0xf8dbd9(0x104)](_0xf8dbd9(0xdd))[_0xf8dbd9(0x1c8)]
        ? (console[_0xf8dbd9(0xdb)](_0xf8dbd9(0xe5)),
          $(steps[x])
            ["find"](_0xf8dbd9(0xdd))
            [_0xf8dbd9(0xfd)](function () {
              const _0x501483 = _0xf8dbd9;
              $(this)["is"](":checked")
                ? $(steps[x])[_0x501483(0x104)](_0x501483(0x112))[
                    _0x501483(0x1c8)
                  ] < 0x1 &&
                  ((skipTo = undefined),
                  $(this)
                    [_0x501483(0xa3)](_0x501483(0x16d))
                    [_0x501483(0x1d9)](_0x501483(0xb9)) &&
                    (skipTo = $(this)
                      [_0x501483(0xa3)](_0x501483(0x16d))
                      [_0x501483(0x1d9)](_0x501483(0xb9))),
                  $(this)
                    [_0x501483(0xa3)](_0x501483(0x101))
                    [_0x501483(0x1cb)](_0x501483(0x1c5)) &&
                    ((answer = $(this)
                      [_0x501483(0xa3)](_0x501483(0x101))
                      [_0x501483(0x1cb)]("data-go-to")),
                    (selections = selections[_0x501483(0x12f)](
                      (_0x5647a1) => _0x5647a1["step"] !== x,
                    )),
                    selections[_0x501483(0xad)]({ step: x, selected: answer }),
                    skipTo &&
                      (selections["push"]({
                        step: skipTo - 0x2,
                        selected: answer,
                      }),
                      (objIndex = selections[_0x501483(0xfa)](
                        (_0x49068a) => _0x49068a["step"] === x,
                      )),
                      (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                      (selections[objIndex][_0x501483(0x122)] = x))),
                  (checkboxFilled = !![]),
                  $(steps[x])[_0x501483(0x104)](_0x501483(0x193))[
                    _0x501483(0x1c8)
                  ] >=
                    $(steps[x])[_0x501483(0x104)](_0x501483(0x191))["length"] &&
                    resetInputErrorMessage(
                      $(steps[x])
                        [_0x501483(0x104)](_0x501483(0xdd))
                        ["attr"]("name"),
                    ))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0x501483(0xad)]({
                    input: $(this)["attr"](_0x501483(0xea)),
                  }));
            }))
        : $(steps[x])["find"](".active-answer-card")["find"](_0xf8dbd9(0xbb))[
              _0xf8dbd9(0x1c8)
            ] >= checkCount
          ? ($(steps[x])
              [_0xf8dbd9(0x104)](_0xf8dbd9(0x7b))
              [_0xf8dbd9(0x104)](_0xf8dbd9(0xdd))
              [_0xf8dbd9(0xa3)](_0xf8dbd9(0x101))
              ["attr"](_0xf8dbd9(0x1c5)) &&
              ((skipTo = undefined),
              $(steps[x])
                [_0xf8dbd9(0x104)](".active-answer-card")
                [_0xf8dbd9(0x104)](_0xf8dbd9(0xdd))
                [_0xf8dbd9(0xa3)](_0xf8dbd9(0x16d))
                ["attr"](_0xf8dbd9(0xdf)) &&
                (skipTo = $(steps[x])
                  [_0xf8dbd9(0x104)](".active-answer-card")
                  ["find"](_0xf8dbd9(0xbb))
                  [_0xf8dbd9(0xa3)](_0xf8dbd9(0x16d))
                  ["attr"](_0xf8dbd9(0xdf))),
              (answer = $(steps[x])
                [_0xf8dbd9(0x104)](_0xf8dbd9(0x7b))
                [_0xf8dbd9(0x104)](_0xf8dbd9(0xdd))
                [_0xf8dbd9(0xa3)](_0xf8dbd9(0x101))
                [_0xf8dbd9(0x1cb)](_0xf8dbd9(0x1c5))),
              (selections = selections[_0xf8dbd9(0x12f)](
                (_0x10f0cb) => _0x10f0cb["step"] !== x,
              )),
              selections[_0xf8dbd9(0xad)]({ step: x, selected: answer }),
              skipTo &&
                ((selections = selections["filter"](
                  (_0x329ae5) => _0x329ae5["step"] !== skipTo - 0x2,
                )),
                selections[_0xf8dbd9(0xad)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0xf8dbd9(0xfa)](
                  (_0x55d701) => _0x55d701[_0xf8dbd9(0x1ac)] === x,
                )),
                console["log"](objIndex),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0xf8dbd9(0x122)] = x),
                console[_0xf8dbd9(0xdb)](_0xf8dbd9(0xb7)))),
            (checkboxFilled = !![]),
            $(steps[x])["find"](_0xf8dbd9(0x193))[_0xf8dbd9(0x1c8)] >=
              $(steps[x])["find"](_0xf8dbd9(0x191))[_0xf8dbd9(0x1c8)] &&
              resetInputErrorMessage(
                $(steps[x])
                  [_0xf8dbd9(0x104)](_0xf8dbd9(0xdd))
                  [_0xf8dbd9(0x1cb)]("name"),
              ))
          : ((checkboxFilled = ![]),
            $(steps[x])
              [_0xf8dbd9(0x104)](_0xf8dbd9(0x191))
              [_0xf8dbd9(0xfd)](function () {
                const _0x1b7196 = _0xf8dbd9;
                $(this)[_0x1b7196(0x1ae)](_0x1b7196(0x1aa)) &&
                  unfilledArr[_0x1b7196(0xad)]({
                    input: $(this)["attr"](_0x1b7196(0xea)),
                  });
              }))),
      $(steps[x])
        ["find"](_0xf8dbd9(0x7b))
        [_0xf8dbd9(0x104)](_0xf8dbd9(0x120))
        [_0xf8dbd9(0xfd)](function (_0x50ea4b) {
          const _0x59cf8d = _0xf8dbd9;
          var _0x5acda1 = $(this)["attr"]("name");
          $(_0x59cf8d(0x153) + _0x5acda1 + _0x59cf8d(0x159))[
            _0x59cf8d(0x1c8)
          ] == 0x0
            ? (!empReqRadio["find"](
                (_0x5f0b81) => _0x5f0b81["input"] === _0x50ea4b,
              ) && empReqRadio[_0x59cf8d(0xad)]({ input: _0x50ea4b }),
              unfilledArr[_0x59cf8d(0xad)]({
                input: $(this)[_0x59cf8d(0x1cb)]("name"),
              }))
            : (empReqRadio = empReqRadio[_0x59cf8d(0x12f)](
                (_0x57e1f8) => _0x57e1f8[_0x59cf8d(0x1bb)] !== _0x50ea4b,
              )),
            empReqRadio[_0x59cf8d(0x1c8)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0xf8dbd9(0x104)](_0xf8dbd9(0x7b))
        ["find"](_0xf8dbd9(0xc3))
        [_0xf8dbd9(0xfd)](function (_0x1f5b3c) {
          const _0x41d43b = _0xf8dbd9;
          let _0x390c5f = $(this)[_0x41d43b(0x88)]()[_0x41d43b(0x1c8)],
            _0x15d7ca = $(this)[_0x41d43b(0x1d9)](_0x41d43b(0x13f))
              ? $(this)[_0x41d43b(0x1d9)](_0x41d43b(0x13f))
              : 0x0;
          $(this)[_0x41d43b(0x88)]() !== "" && _0x390c5f >= _0x15d7ca
            ? (empReqInput = empReqInput[_0x41d43b(0x12f)](
                (_0x283876) => _0x283876[_0x41d43b(0x1bb)] !== _0x1f5b3c,
              ))
            : (!empReqInput[_0x41d43b(0x104)](
                (_0x24e784) => _0x24e784[_0x41d43b(0x1bb)] === _0x1f5b3c,
              ) && empReqInput[_0x41d43b(0xad)]({ input: _0x1f5b3c }),
              unfilledArr[_0x41d43b(0xad)]({
                input: $(this)[_0x41d43b(0x1cb)](_0x41d43b(0xea)),
              })),
            empReqInput[_0x41d43b(0x1c8)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0xf8dbd9(0x7b))
        [_0xf8dbd9(0x104)](_0xf8dbd9(0x1cf))
        [_0xf8dbd9(0xfd)](function (_0x2d7a94) {
          const _0x2ccb27 = _0xf8dbd9;
          (skipTo = undefined),
            $(this)
              [_0x2ccb27(0xa3)]("[data-skip-to]")
              [_0x2ccb27(0x1d9)](_0x2ccb27(0xb9)) !== "" &&
              (skipTo = $(this)
                [_0x2ccb27(0xa3)](_0x2ccb27(0x16d))
                ["data"](_0x2ccb27(0xb9))),
            $(this)
              ["parents"](_0x2ccb27(0x101))
              [_0x2ccb27(0x1cb)]("data-go-to") &&
              ((answer = $(this)
                [_0x2ccb27(0xa3)](_0x2ccb27(0x101))
                [_0x2ccb27(0x1cb)](_0x2ccb27(0x1c5))),
              (selections = selections[_0x2ccb27(0x12f)](
                (_0x231010) => _0x231010[_0x2ccb27(0x1ac)] !== x,
              )),
              selections[_0x2ccb27(0xad)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections["findIndex"](
                  (_0x2ad4ca) => _0x2ad4ca["step"] === x,
                )),
                (selections[objIndex][_0x2ccb27(0xb6)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x2ccb27(0x122)] = x)));
        }),
      $(steps[x])
        [_0xf8dbd9(0x104)](_0xf8dbd9(0x7b))
        [_0xf8dbd9(0x104)](_0xf8dbd9(0xa0))
        [_0xf8dbd9(0xfd)](function (_0x453db8) {
          const _0x367c96 = _0xf8dbd9;
          let _0x31cbce = $(this)[_0x367c96(0x88)]()[_0x367c96(0x1c8)],
            _0x44d2fd = $(this)[_0x367c96(0x1d9)](_0x367c96(0x13f))
              ? $(this)[_0x367c96(0x1d9)](_0x367c96(0x13f))
              : 0x0;
          $(this)["val"]() !== "" && _0x31cbce >= _0x44d2fd
            ? (empReqPassword = empReqPassword["filter"](
                (_0x6c20fe) => _0x6c20fe[_0x367c96(0x1bb)] !== _0x453db8,
              ))
            : (!empReqPassword[_0x367c96(0x104)](
                (_0xed92c1) => _0xed92c1[_0x367c96(0x1bb)] === _0x453db8,
              ) && empReqPassword["push"]({ input: _0x453db8 }),
              unfilledArr["push"]({
                input: $(this)[_0x367c96(0x1cb)]("name"),
              })),
            empReqPassword[_0x367c96(0x1c8)] === 0x0
              ? (passwordFilled = !![])
              : (passwordFilled = ![]);
        }),
      $(steps[x])
        [_0xf8dbd9(0x104)](_0xf8dbd9(0x7b))
        ["find"](_0xf8dbd9(0x1c2))
        [_0xf8dbd9(0xfd)](function (_0x474393) {
          const _0x46e688 = _0xf8dbd9;
          (skipTo = undefined),
            $(this)
              [_0x46e688(0xa3)](_0x46e688(0x16d))
              [_0x46e688(0x1d9)](_0x46e688(0xb9)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0x46e688(0x16d))
                [_0x46e688(0x1d9)](_0x46e688(0xb9))),
            $(this)
              [_0x46e688(0xa3)]("[data-go-to]")
              [_0x46e688(0x1cb)](_0x46e688(0x1c5)) &&
              ((answer = $(this)
                [_0x46e688(0xa3)]("[data-go-to]")
                ["attr"](_0x46e688(0x1c5))),
              (selections = selections[_0x46e688(0x12f)](
                (_0x24aded) => _0x24aded[_0x46e688(0x1ac)] !== x,
              )),
              selections[_0x46e688(0xad)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x46e688(0xad)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x12e76c) => _0x12e76c["step"] === x,
                )),
                (selections[objIndex][_0x46e688(0xb6)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x46e688(0x122)] = x)));
        }),
      $(steps[x])
        [_0xf8dbd9(0x104)](_0xf8dbd9(0x7b))
        [_0xf8dbd9(0x104)](_0xf8dbd9(0xe9))
        ["each"](function (_0x44fc07) {
          const _0x13d8c6 = _0xf8dbd9;
          let _0xf507e9 = $(this)[_0x13d8c6(0x88)]()[_0x13d8c6(0x1c8)],
            _0x32d8ff = $(this)[_0x13d8c6(0x1d9)]("min-character")
              ? $(this)["data"](_0x13d8c6(0x13f))
              : 0x0;
          $(this)[_0x13d8c6(0x88)]() !== "" && _0xf507e9 >= _0x32d8ff
            ? (empReqUrl = empReqUrl[_0x13d8c6(0x12f)](
                (_0x2c6fcf) => _0x2c6fcf[_0x13d8c6(0x1bb)] !== _0x44fc07,
              ))
            : (!empReqUrl[_0x13d8c6(0x104)](
                (_0x4598aa) => _0x4598aa[_0x13d8c6(0x1bb)] === _0x44fc07,
              ) && empReqUrl["push"]({ input: _0x44fc07 }),
              unfilledArr[_0x13d8c6(0xad)]({
                input: $(this)[_0x13d8c6(0x1cb)]("name"),
              })),
            empReqUrl["length"] === 0x0 &&
            validateURL($(this)[_0x13d8c6(0x88)]())
              ? (urlFilled = !![])
              : (urlFilled = ![]);
        }),
      $(steps[x])
        [_0xf8dbd9(0x104)](_0xf8dbd9(0x7b))
        [_0xf8dbd9(0x104)](_0xf8dbd9(0xbf))
        [_0xf8dbd9(0xfd)](function (_0xe77b8d) {
          const _0xeed148 = _0xf8dbd9;
          (skipTo = undefined),
            $(this)
              [_0xeed148(0xa3)](_0xeed148(0x16d))
              [_0xeed148(0x1d9)](_0xeed148(0xb9)) !== "" &&
              (skipTo = $(this)
                [_0xeed148(0xa3)](_0xeed148(0x16d))
                [_0xeed148(0x1d9)](_0xeed148(0xb9))),
            $(this)
              [_0xeed148(0xa3)](_0xeed148(0x101))
              [_0xeed148(0x1cb)](_0xeed148(0x1c5)) &&
              ((answer = $(this)
                [_0xeed148(0xa3)]("[data-go-to]")
                ["attr"]("data-go-to")),
              (selections = selections[_0xeed148(0x12f)](
                (_0x2892c5) => _0x2892c5[_0xeed148(0x1ac)] !== x,
              )),
              selections[_0xeed148(0xad)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0xeed148(0xfa)](
                  (_0x148cf0) => _0x148cf0[_0xeed148(0x1ac)] === x,
                )),
                (selections[objIndex][_0xeed148(0xb6)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0xeed148(0x122)] = x)));
        }),
      $(steps[x])
        [_0xf8dbd9(0x104)](_0xf8dbd9(0x7b))
        [_0xf8dbd9(0x104)](_0xf8dbd9(0x143))
        ["each"](function (_0x3d718a) {
          const _0x43a3bd = _0xf8dbd9;
          $(this)[_0x43a3bd(0x88)]() !== ""
            ? (empReqDate = empReqDate[_0x43a3bd(0x12f)](
                (_0x4fd5d7) => _0x4fd5d7[_0x43a3bd(0x1bb)] !== _0x3d718a,
              ))
            : (!empReqDate["find"](
                (_0x17a5df) => _0x17a5df["input"] === _0x3d718a,
              ) && empReqDate[_0x43a3bd(0xad)]({ input: _0x3d718a }),
              unfilledArr[_0x43a3bd(0xad)]({
                input: $(this)[_0x43a3bd(0x1cb)]("name"),
              })),
            empReqDate["length"] === 0x0
              ? (dateFilled = !![])
              : (dateFilled = ![]);
        }),
      $(steps[x])
        [_0xf8dbd9(0x104)](_0xf8dbd9(0x7b))
        ["find"](":input[type=\x22date\x22]")
        [_0xf8dbd9(0xfd)](function (_0x391575) {
          const _0x19b87f = _0xf8dbd9;
          (skipTo = undefined),
            $(this)
              [_0x19b87f(0xa3)](_0x19b87f(0x16d))
              [_0x19b87f(0x1d9)](_0x19b87f(0xb9)) !== "" &&
              (skipTo = $(this)
                [_0x19b87f(0xa3)](_0x19b87f(0x16d))
                [_0x19b87f(0x1d9)](_0x19b87f(0xb9))),
            $(this)["parents"]("[data-go-to]")["attr"]("data-go-to") &&
              ((answer = $(this)
                [_0x19b87f(0xa3)]("[data-go-to]")
                [_0x19b87f(0x1cb)]("data-go-to")),
              (selections = selections[_0x19b87f(0x12f)](
                (_0x4463f3) => _0x4463f3[_0x19b87f(0x1ac)] !== x,
              )),
              selections[_0x19b87f(0xad)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x19b87f(0xad)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x19b87f(0xfa)](
                  (_0x29f56b) => _0x29f56b[_0x19b87f(0x1ac)] === x,
                )),
                (selections[objIndex][_0x19b87f(0xb6)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0xf8dbd9(0x104)](_0xf8dbd9(0x7b))
        ["find"](_0xf8dbd9(0x18d))
        [_0xf8dbd9(0xfd)](function (_0x162e61) {
          const _0x396e59 = _0xf8dbd9;
          $(this)[_0x396e59(0x88)]() !== ""
            ? (empReqTime = empReqTime[_0x396e59(0x12f)](
                (_0x20ff9f) => _0x20ff9f[_0x396e59(0x1bb)] !== _0x162e61,
              ))
            : (!empReqTime["find"](
                (_0x403a63) => _0x403a63[_0x396e59(0x1bb)] === _0x162e61,
              ) && empReqTime[_0x396e59(0xad)]({ input: _0x162e61 }),
              unfilledArr[_0x396e59(0xad)]({ input: $(this)["attr"]("name") })),
            empReqTime["length"] === 0x0
              ? (timeFilled = !![])
              : (timeFilled = ![]);
        }),
      $(steps[x])
        [_0xf8dbd9(0x104)](_0xf8dbd9(0x7b))
        [_0xf8dbd9(0x104)](_0xf8dbd9(0x142))
        [_0xf8dbd9(0xfd)](function (_0x2ec858) {
          const _0x100ae3 = _0xf8dbd9;
          (skipTo = undefined),
            $(this)
              [_0x100ae3(0xa3)](_0x100ae3(0x16d))
              [_0x100ae3(0x1d9)]("skip-to") !== "" &&
              (skipTo = $(this)
                ["parents"](_0x100ae3(0x16d))
                [_0x100ae3(0x1d9)](_0x100ae3(0xb9))),
            $(this)
              ["parents"](_0x100ae3(0x101))
              [_0x100ae3(0x1cb)](_0x100ae3(0x1c5)) &&
              ((answer = $(this)
                ["parents"](_0x100ae3(0x101))
                ["attr"](_0x100ae3(0x1c5))),
              (selections = selections[_0x100ae3(0x12f)](
                (_0x2379d9) => _0x2379d9["step"] !== x,
              )),
              selections[_0x100ae3(0xad)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x100ae3(0xad)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x100ae3(0xfa)](
                  (_0x24aa93) => _0x24aa93[_0x100ae3(0x1ac)] === x,
                )),
                (selections[objIndex][_0x100ae3(0xb6)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x100ae3(0x122)] = x)));
        }),
      $(steps[x])
        ["find"](_0xf8dbd9(0x7b))
        [_0xf8dbd9(0x104)](_0xf8dbd9(0x132))
        [_0xf8dbd9(0xfd)](function (_0x2d462c) {
          const _0x143fa1 = _0xf8dbd9;
          let _0x5c9f23 = $(this)[_0x143fa1(0x88)]()[_0x143fa1(0x1c8)],
            _0x50617d = $(this)[_0x143fa1(0x1d9)](_0x143fa1(0x13f))
              ? $(this)[_0x143fa1(0x1d9)]("min-character")
              : 0x0;
          $(this)[_0x143fa1(0x88)]() !== "" && _0x5c9f23 >= _0x50617d
            ? (empReqNum = empReqNum[_0x143fa1(0x12f)](
                (_0x5c5953) => _0x5c5953[_0x143fa1(0x1bb)] !== _0x2d462c,
              ))
            : (!empReqNum[_0x143fa1(0x104)](
                (_0x15f6b9) => _0x15f6b9[_0x143fa1(0x1bb)] === _0x2d462c,
              ) && empReqNum[_0x143fa1(0xad)]({ input: _0x2d462c }),
              unfilledArr[_0x143fa1(0xad)]({
                input: $(this)[_0x143fa1(0x1cb)](_0x143fa1(0xea)),
              })),
            empReqNum[_0x143fa1(0x1c8)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        ["find"](".active-answer-card")
        [_0xf8dbd9(0x104)](_0xf8dbd9(0x148))
        [_0xf8dbd9(0xfd)](function (_0x184c80) {
          const _0x194d67 = _0xf8dbd9;
          (skipTo = undefined),
            $(this)
              ["parents"](_0x194d67(0x16d))
              [_0x194d67(0x1d9)](_0x194d67(0xb9)) !== "" &&
              (skipTo = $(this)
                [_0x194d67(0xa3)]("[data-skip-to]")
                [_0x194d67(0x1d9)]("skip-to")),
            $(this)
              ["parents"](_0x194d67(0x101))
              [_0x194d67(0x1cb)]("data-go-to") &&
              ((answer = $(this)
                [_0x194d67(0xa3)]("[data-go-to]")
                [_0x194d67(0x1cb)](_0x194d67(0x1c5))),
              (selections = selections[_0x194d67(0x12f)](
                (_0x185e92) => _0x185e92[_0x194d67(0x1ac)] !== x,
              )),
              selections[_0x194d67(0xad)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x194d67(0xad)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x194d67(0xfa)](
                  (_0x38fc91) => _0x38fc91["step"] === x,
                )),
                (selections[objIndex][_0x194d67(0xb6)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x194d67(0x122)] = x)));
        }),
      $(steps[x])
        ["find"](_0xf8dbd9(0x7b))
        [_0xf8dbd9(0x104)](_0xf8dbd9(0xaa))
        [_0xf8dbd9(0xfd)](function (_0x381639) {
          const _0x6aaddc = _0xf8dbd9;
          if ($(this)[_0x6aaddc(0x88)]() !== "") {
            let _0x4c0b86 = $(this)[_0x6aaddc(0x88)]()["length"],
              _0x565214 = $(this)["data"](_0x6aaddc(0x13f))
                ? $(this)[_0x6aaddc(0x1d9)](_0x6aaddc(0x13f))
                : 0x0;
            if ($(this)[_0x6aaddc(0x1d9)](_0x6aaddc(0x89))) {
              var _0x5bfb0a = phoneAutoFormat($(this)["data"](_0x6aaddc(0x89)));
              $(this)[_0x6aaddc(0x88)](_0x5bfb0a($(this)[_0x6aaddc(0x88)]()));
            }
            phoneValidation($(this)[_0x6aaddc(0x88)](), _0x4c0b86, _0x565214)
              ? (empReqTel = empReqTel["filter"](
                  (_0x3850e8) => _0x3850e8[_0x6aaddc(0x1bb)] !== _0x381639,
                ))
              : empReqTel[_0x6aaddc(0xad)]({ input: _0x381639 });
          } else
            !empReqTel[_0x6aaddc(0x104)](
              (_0x36400a) => _0x36400a[_0x6aaddc(0x1bb)] === _0x381639,
            ) && empReqTel["push"]({ input: _0x381639 }),
              unfilledArr["push"]({ input: $(this)["attr"]("name") });
          empReqTel[_0x6aaddc(0x1c8)] === 0x0
            ? (telFilled = !![])
            : (telFilled = ![]);
        }),
      $(steps[x])
        [_0xf8dbd9(0x104)](_0xf8dbd9(0x7b))
        [_0xf8dbd9(0x104)](_0xf8dbd9(0xeb))
        [_0xf8dbd9(0xfd)](function (_0x30a93a) {
          const _0x57159a = _0xf8dbd9;
          (skipTo = undefined),
            $(this)
              [_0x57159a(0xa3)](_0x57159a(0x16d))
              [_0x57159a(0x1d9)]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0x57159a(0xa3)](_0x57159a(0x16d))
                [_0x57159a(0x1d9)]("skip-to")),
            $(this)
              [_0x57159a(0xa3)](_0x57159a(0x101))
              [_0x57159a(0x1cb)](_0x57159a(0x1c5)) &&
              ((answer = $(this)
                [_0x57159a(0xa3)](_0x57159a(0x101))
                [_0x57159a(0x1cb)](_0x57159a(0x1c5))),
              (selections = selections["filter"](
                (_0x450c36) => _0x450c36[_0x57159a(0x1ac)] !== x,
              )),
              selections[_0x57159a(0xad)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0x57159a(0xfa)](
                  (_0x358698) => _0x358698[_0x57159a(0x1ac)] === x,
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0xf8dbd9(0x104)](_0xf8dbd9(0x7b))
        [_0xf8dbd9(0x104)](_0xf8dbd9(0x95))
        [_0xf8dbd9(0xfd)](function (_0x546c1d) {
          const _0x2b63e5 = _0xf8dbd9;
          $(this)["val"]() !== ""
            ? (empReqFile = empReqFile[_0x2b63e5(0x12f)](
                (_0x1da862) => _0x1da862[_0x2b63e5(0x1bb)] !== _0x546c1d,
              ))
            : (!empReqFile["find"](
                (_0x259d7f) => _0x259d7f[_0x2b63e5(0x1bb)] === _0x546c1d,
              ) && empReqFile[_0x2b63e5(0xad)]({ input: _0x546c1d }),
              unfilledArr["push"]({
                input: $(this)[_0x2b63e5(0x1cb)]("name"),
              })),
            empReqFile["length"] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0xf8dbd9(0x104)](".active-answer-card")
        [_0xf8dbd9(0x104)](_0xf8dbd9(0x126))
        [_0xf8dbd9(0xfd)](function (_0x5083ff) {
          const _0x381d23 = _0xf8dbd9;
          (skipTo = undefined),
            $(this)["parents"](_0x381d23(0x16d))["data"]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0x381d23(0xa3)](_0x381d23(0x16d))
                [_0x381d23(0x1d9)](_0x381d23(0xb9))),
            $(this)
              [_0x381d23(0xa3)](_0x381d23(0x101))
              [_0x381d23(0x1cb)](_0x381d23(0x1c5)) &&
              ((answer = $(this)
                ["parents"]("[data-go-to]")
                [_0x381d23(0x1cb)]("data-go-to")),
              (selections = selections[_0x381d23(0x12f)](
                (_0xc8c934) => _0xc8c934[_0x381d23(0x1ac)] !== x,
              )),
              selections[_0x381d23(0xad)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x381d23(0xad)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x329092) => _0x329092[_0x381d23(0x1ac)] === x,
                )),
                (selections[objIndex][_0x381d23(0xb6)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x381d23(0x122)] = x)));
        }),
      $(steps[x])
        [_0xf8dbd9(0x104)](".active-answer-card")
        [_0xf8dbd9(0x104)](_0xf8dbd9(0x137))
        ["each"](function (_0x582bc3) {
          const _0x49c96c = _0xf8dbd9;
          console[_0x49c96c(0xdb)]($(this)[_0x49c96c(0x88)]()),
            $(this)[_0x49c96c(0x88)]() !== null &&
            $(this)[_0x49c96c(0x88)]() !== ""
              ? (empReqSelect = empReqSelect[_0x49c96c(0x12f)](
                  (_0x4bd7e7) => _0x4bd7e7["input"] !== _0x582bc3,
                ))
              : (!empReqSelect[_0x49c96c(0x104)](
                  (_0x5683f6) => _0x5683f6["input"] === _0x582bc3,
                ) && empReqSelect[_0x49c96c(0xad)]({ input: _0x582bc3 }),
                unfilledArr[_0x49c96c(0xad)]({
                  input: $(this)[_0x49c96c(0x1cb)](_0x49c96c(0xea)),
                })),
            empReqSelect[_0x49c96c(0x1c8)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0xf8dbd9(0x104)](_0xf8dbd9(0x7b))
        [_0xf8dbd9(0x104)]("select")
        [_0xf8dbd9(0xfd)](function (_0x5e5969) {
          const _0x2ee1e9 = _0xf8dbd9;
          (skipTo = undefined),
            $(this)
              [_0x2ee1e9(0xa3)](_0x2ee1e9(0x16d))
              [_0x2ee1e9(0x1d9)]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0x2ee1e9(0xa3)](_0x2ee1e9(0x16d))
                ["data"](_0x2ee1e9(0xb9))),
            $(this)
              [_0x2ee1e9(0xa3)](_0x2ee1e9(0x101))
              [_0x2ee1e9(0x1cb)](_0x2ee1e9(0x1c5)) &&
              ((answer = $(this)
                [_0x2ee1e9(0xa3)](_0x2ee1e9(0x101))
                [_0x2ee1e9(0x1cb)]("data-go-to")),
              (selections = selections["filter"](
                (_0x1335a6) => _0x1335a6["step"] !== x,
              )),
              selections[_0x2ee1e9(0xad)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x2ee1e9(0xad)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x2ee1e9(0xfa)](
                  (_0x3381e0) => _0x3381e0["step"] === x,
                )),
                (selections[objIndex][_0x2ee1e9(0xb6)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0xf8dbd9(0x104)](".active-answer-card")
        [_0xf8dbd9(0x104)](_0xf8dbd9(0x10f))
        [_0xf8dbd9(0xfd)](function (_0x37e049) {
          const _0x50c536 = _0xf8dbd9;
          let _0x3e1ccd = $(this)[_0x50c536(0x88)]()[_0x50c536(0x1c8)],
            _0x22db17 = $(this)[_0x50c536(0x1d9)](_0x50c536(0x13f))
              ? $(this)[_0x50c536(0x1d9)](_0x50c536(0x13f))
              : 0x0;
          $(this)[_0x50c536(0x88)]() !== "" && _0x3e1ccd >= _0x22db17
            ? (empReqTextarea = empReqTextarea[_0x50c536(0x12f)](
                (_0x4bf4c1) => _0x4bf4c1[_0x50c536(0x1bb)] !== _0x37e049,
              ))
            : (!empReqTextarea[_0x50c536(0x104)](
                (_0x6c6741) => _0x6c6741[_0x50c536(0x1bb)] === _0x37e049,
              ) && empReqTextarea["push"]({ input: _0x37e049 }),
              unfilledArr[_0x50c536(0xad)]({
                input: $(this)[_0x50c536(0x1cb)]("name"),
              })),
            empReqTextarea[_0x50c536(0x1c8)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0xf8dbd9(0x104)](_0xf8dbd9(0x7b))
        [_0xf8dbd9(0x104)](_0xf8dbd9(0x11e))
        ["each"](function (_0x4f8b82) {
          const _0x4c2f01 = _0xf8dbd9;
          (skipTo = undefined),
            $(this)
              [_0x4c2f01(0xa3)](_0x4c2f01(0x16d))
              [_0x4c2f01(0x1d9)](_0x4c2f01(0xb9)) !== "" &&
              (skipTo = $(this)
                ["parents"]("[data-skip-to]")
                [_0x4c2f01(0x1d9)](_0x4c2f01(0xb9))),
            $(this)
              [_0x4c2f01(0xa3)]("[data-go-to]")
              [_0x4c2f01(0x1cb)](_0x4c2f01(0x1c5)) &&
              ((answer = $(this)
                [_0x4c2f01(0xa3)]("[data-go-to]")
                [_0x4c2f01(0x1cb)]("data-go-to")),
              (selections = selections[_0x4c2f01(0x12f)](
                (_0x1c3ead) => _0x1c3ead["step"] !== x,
              )),
              selections[_0x4c2f01(0xad)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x4c2f01(0xad)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x4c2f01(0xfa)](
                  (_0x409025) => _0x409025[_0x4c2f01(0x1ac)] === x,
                )),
                (selections[objIndex][_0x4c2f01(0xb6)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x4c2f01(0x122)] = x)));
        }),
      $(steps[x])
        [_0xf8dbd9(0x104)](_0xf8dbd9(0x7b))
        [_0xf8dbd9(0x104)](_0xf8dbd9(0x18f))
        [_0xf8dbd9(0xfd)](function (_0x3b182f) {
          const _0x75d223 = _0xf8dbd9;
          $(this)["val"]() !== ""
            ? validateEmail(
                $(this)[_0x75d223(0x88)](),
                $(this)[_0x75d223(0x1d9)](_0x75d223(0xf1)),
                $(this)["attr"](_0x75d223(0xea)),
              )
            : ((emailFilled = ![]),
              unfilledArr[_0x75d223(0xad)]({
                input: $(this)["attr"](_0x75d223(0xea)),
              }));
        }),
      $(steps[x])
        ["find"](_0xf8dbd9(0x7b))
        ["find"](_0xf8dbd9(0x135))
        ["each"](function (_0x5e8267) {
          const _0x3c8926 = _0xf8dbd9;
          (skipTo = undefined),
            $(this)[_0x3c8926(0xa3)](_0x3c8926(0x16d))["data"]("skip-to") !==
              "" &&
              (skipTo = $(this)
                [_0x3c8926(0xa3)](_0x3c8926(0x16d))
                ["data"](_0x3c8926(0xb9))),
            $(this)
              [_0x3c8926(0xa3)](_0x3c8926(0x101))
              [_0x3c8926(0x1cb)]("data-go-to") &&
              ((answer = $(this)
                [_0x3c8926(0xa3)](_0x3c8926(0x101))
                [_0x3c8926(0x1cb)]("data-go-to")),
              (selections = selections[_0x3c8926(0x12f)](
                (_0x5c1128) => _0x5c1128[_0x3c8926(0x1ac)] !== x,
              )),
              selections[_0x3c8926(0xad)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x3c8926(0xad)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x3c8926(0xfa)](
                  (_0x46f11d) => _0x46f11d[_0x3c8926(0x1ac)] === x,
                )),
                (selections[objIndex][_0x3c8926(0xb6)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        });
  }
  $(steps[x])[_0xf8dbd9(0x104)](_0xf8dbd9(0x136))["is"](":checked") &&
    ((selArr = []),
    $(steps)
      [_0xf8dbd9(0x104)](_0xf8dbd9(0x127))
      [_0xf8dbd9(0xfd)](function (_0x17f6d6, _0xa7b497) {
        const _0x7b161e = _0xf8dbd9;
        selArr[_0x7b161e(0xad)]({
          selected: $(this)[_0x7b161e(0x1d9)](_0x7b161e(0xe8)),
        });
      }),
    (selString = []),
    selArr["forEach"]((_0x542230) =>
      selString[_0xf8dbd9(0xad)](_0x542230[_0xf8dbd9(0xe8)]),
    ),
    $(steps[x])
      [_0xf8dbd9(0x104)](_0xf8dbd9(0x7b))
      [_0xf8dbd9(0x104)](_0xf8dbd9(0x1bf))
      [_0xf8dbd9(0xfd)](function () {
        const _0x4a47a0 = _0xf8dbd9;
        skipTo = undefined;
        if (
          $(this)
            [_0x4a47a0(0xa3)](_0x4a47a0(0x16d))
            [_0x4a47a0(0x1d9)](_0x4a47a0(0xb9))
        )
          skipTo = $(this)
            [_0x4a47a0(0xa3)](_0x4a47a0(0x16d))
            [_0x4a47a0(0x1d9)](_0x4a47a0(0xb9));
        else
          $(this)[_0x4a47a0(0x1d9)](_0x4a47a0(0xb9)) &&
            (skipTo = $(this)["data"](_0x4a47a0(0xb9)));
        selections = selections[_0x4a47a0(0x12f)](
          (_0x14f974) => _0x14f974["step"] !== x,
        );
        if ($(this)[_0x4a47a0(0x1d9)](_0x4a47a0(0x179)))
          (answer = $(this)[_0x4a47a0(0x1cb)](_0x4a47a0(0x1c5))),
            console[_0x4a47a0(0xdb)](answer, selections),
            selections["push"]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0x4a47a0(0xad)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0x4a47a0(0xfa)](
                (_0x56e4f9) => _0x56e4f9[_0x4a47a0(0x1ac)] === x,
              )),
              (selections[objIndex][_0x4a47a0(0xb6)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x4a47a0(0x122)] = x));
        else
          $(this)
            ["parents"](_0x4a47a0(0x101))
            [_0x4a47a0(0x1d9)](_0x4a47a0(0x179)) &&
            ((answer = $(this)
              [_0x4a47a0(0xa3)](_0x4a47a0(0x101))
              [_0x4a47a0(0x1d9)](_0x4a47a0(0x179))),
            selections[_0x4a47a0(0xad)]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0x4a47a0(0xad)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections["findIndex"](
                (_0x425fd4) => _0x425fd4[_0x4a47a0(0x1ac)] === x,
              )),
              (selections[objIndex][_0x4a47a0(0xb6)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x4a47a0(0x122)] = x)));
      }),
    logicExtra
      ? ($(steps[x])
          ["find"](_0xf8dbd9(0x7b))
          [_0xf8dbd9(0x104)](_0xf8dbd9(0x15c))
          ["data"]("radio-skip") === !![] ||
          $(steps[x])
            [_0xf8dbd9(0x104)](_0xf8dbd9(0xe1))
            ["data"](_0xf8dbd9(0xfb)) === !![]) &&
        skip &&
        selections[_0xf8dbd9(0x12f)](
          (_0x3a949d) => _0x3a949d[_0xf8dbd9(0x1ac)] === x,
        )[_0xf8dbd9(0x1c8)] > 0x0 &&
        textareaLength === 0x0 &&
        textInputLength === 0x0 &&
        emailInputLength === 0x0 &&
        checkboxInputLength === 0x0 &&
        setTimeout(
          function () {
            (next = !![]), nextStep(), selectionQuiz();
          },
          $(steps[x])
            [_0xf8dbd9(0x104)](_0xf8dbd9(0x102))
            ["data"](_0xf8dbd9(0xa8)),
        )
      : $(steps[x])
          ["find"](_0xf8dbd9(0x15c))
          [_0xf8dbd9(0x1d9)](_0xf8dbd9(0xfb)) === !![] &&
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
            [_0xf8dbd9(0x104)](_0xf8dbd9(0x102))
            [_0xf8dbd9(0x1d9)](_0xf8dbd9(0xa8)),
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
  const _0x47a769 = _0x3d075f;
  $(_0x47a769(0x167))[_0x47a769(0xa2)](),
    unfilledArr[_0x47a769(0x1c8)] > 0x0 &&
      unfilledArr[_0x47a769(0xde)](function (_0x220042) {
        const _0x99ecb3 = _0x47a769;
        $(_0x99ecb3(0x10a) + _0x220042[_0x99ecb3(0x1bb)] + "\x22]")
          ["siblings"]("[data-text=\x22error-message\x22]")
          [_0x99ecb3(0x13e)](),
          $(_0x99ecb3(0x10a) + _0x220042[_0x99ecb3(0x1bb)] + "\x22]")
            [_0x99ecb3(0xa3)]()
            [_0x99ecb3(0x184)]("[data-text=\x22error-message\x22]")
            [_0x99ecb3(0x13e)](),
          $(_0x99ecb3(0x13c) + _0x220042["input"] + "\x22]")
            ["siblings"](_0x99ecb3(0x167))
            [_0x99ecb3(0x13e)](),
          $(_0x99ecb3(0x144) + _0x220042["input"] + "\x22]")
            [_0x99ecb3(0x199)](_0x99ecb3(0x167))
            [_0x99ecb3(0x13e)]();
      });
}
function resetInputErrorMessage(_0x59f83d) {
  const _0x37a4de = _0x3d075f;
  $(_0x37a4de(0x10a) + _0x59f83d + "\x22]")
    [_0x37a4de(0x199)](_0x37a4de(0x167))
    ["hide"](),
    $(_0x37a4de(0x10a) + _0x59f83d + "\x22]")
      [_0x37a4de(0xa3)]()
      [_0x37a4de(0x184)](_0x37a4de(0x167))
      ["hide"](),
    $("textarea[name=\x22" + _0x59f83d + "\x22]")
      [_0x37a4de(0x199)](_0x37a4de(0x167))
      [_0x37a4de(0xa2)](),
    $(_0x37a4de(0x144) + _0x59f83d + "\x22]")
      [_0x37a4de(0x199)](_0x37a4de(0x167))
      [_0x37a4de(0xa2)]();
}
function increaseCurstep() {
  const _0x4879d9 = _0x3d075f;
  countCard
    ? ((curStep = curStep + 0x1),
      $(_0x4879d9(0xf0))[_0x4879d9(0x8f)](steps["length"]))
    : $(steps[x])[_0x4879d9(0x1d9)](_0x4879d9(0x9b))
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    $("[data-text=\x22current-step\x22]")["text"](curStep);
}
function decreaseCurstep() {
  const _0x43db6c = _0x3d075f;
  countCard
    ? ((curStep = curStep - 0x1),
      $(_0x43db6c(0xf0))["text"](steps[_0x43db6c(0x1c8)]))
    : $(steps[x])["data"](_0x43db6c(0x9b))
      ? (curStep = curStep - 0x0)
      : (curStep = curStep - 0x1),
    $(_0x43db6c(0x183))[_0x43db6c(0x8f)](curStep);
}
$(_0x3d075f(0x194))["on"]("click", function (_0x419a33) {
  const _0x8eaa6a = _0x3d075f;
  console["log"](_0x8eaa6a(0x1d7)),
    $(this)["data"]("redirect") &&
      (redirectTo = $(this)["data"](_0x8eaa6a(0x165))),
    !$(this)[_0x8eaa6a(0x1d9)]("new-tab") &&
      (newTab = $(this)["data"](_0x8eaa6a(0x1b1))),
    (successCard = $(this)[_0x8eaa6a(0x1d9)]("success")),
    _0x419a33[_0x8eaa6a(0xe3)](),
    _0x419a33[_0x8eaa6a(0x171)](),
    logicExtra &&
      ($(this)["prop"]("novalidate", !![]),
      $(steps)["find"](":input")[_0x8eaa6a(0x86)](_0x8eaa6a(0x10d), ![])),
    localStorage[_0x8eaa6a(0xc9)]("filledInput"),
    fill
      ? ($(this)[_0x8eaa6a(0x1d9)]("wait")
          ? (console[_0x8eaa6a(0xdb)]($(this)["data"](_0x8eaa6a(0x14d))),
            $(this)[_0x8eaa6a(0x8f)](
              $(this)[_0x8eaa6a(0x1d9)](_0x8eaa6a(0x14d)),
            ))
          : $(this)["val"](_0x8eaa6a(0x124))[_0x8eaa6a(0x8f)](_0x8eaa6a(0x124)),
        $(_0x8eaa6a(0xaf))[_0x8eaa6a(0x1a8)](),
        $("div.g-recaptcha")["length"] > 0x0 &&
          grecaptcha[_0x8eaa6a(0x17d)]()["length"] === 0x0 &&
          (form["find"](_0x8eaa6a(0x194))["text"](oldSubmitText),
          form[_0x8eaa6a(0x104)](_0x8eaa6a(0x194))["val"](oldSubmitText)),
        customError && $(_0x8eaa6a(0x167))[_0x8eaa6a(0xa2)]())
      : customError && displayErrorMessage();
});
function nextStep() {
  const _0x1f6070 = _0x3d075f;
  customError
    ? ($(_0x1f6070(0x167))[_0x1f6070(0xa2)](),
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
      x <= steps[_0x1f6070(0x1c8)] - 0x1 &&
        (updateStep(), memory && saveFilledInput())),
    andLogic();
}
function backStep() {
  const _0x53db1c = _0x3d075f;
  customError && $(_0x53db1c(0x167))[_0x53db1c(0xa2)](),
    decreaseCurstep(),
    x > 0x0 &&
      ($(progressbar[x])["removeClass"](_0x53db1c(0x17e)),
      selections["filter"]((_0x3f4d71) => _0x3f4d71["skipTo"] === x)["length"] >
      0x0
        ? (x = parseInt(
            getSafe(
              () =>
                selections[_0x53db1c(0x12f)](
                  (_0x523d27) => _0x523d27[_0x53db1c(0xb6)] === x,
                )[0x0][_0x53db1c(0x122)],
            ),
          ))
        : x--,
      updateStep()),
    ($(steps[x])
      [_0x53db1c(0x104)]("[data-radio-skip]:visible")
      [_0x53db1c(0x1d9)](_0x53db1c(0xfb)) === !![] ||
      $(steps[x])
        [_0x53db1c(0x104)](_0x53db1c(0x7b))
        ["find"](_0x53db1c(0x15c))
        [_0x53db1c(0x1d9)]("radio-skip") === !![] ||
      $(steps[x])
        [_0x53db1c(0x104)](_0x53db1c(0xe1))
        [_0x53db1c(0x1d9)](_0x53db1c(0xfb)) === !![]) &&
      ((all_data = all_data[_0x53db1c(0x12f)](
        (_0x5e418e) =>
          _0x5e418e[_0x53db1c(0x1b0)] !==
          $(steps[x])
            ["find"](_0x53db1c(0xd9))
            [_0x53db1c(0x1cb)](_0x53db1c(0xea)),
      )),
      $(
        _0x53db1c(0x93) +
          $(steps[x])
            ["find"]("input[type=\x22radio\x22]:checked")
            [_0x53db1c(0x1cb)](_0x53db1c(0xea)) +
          "\x22]",
      )[_0x53db1c(0xa2)](),
      $(steps[x])
        [_0x53db1c(0x104)]("input[type=\x22radio\x22]")
        [_0x53db1c(0x86)](_0x53db1c(0x198), ![]),
      $(steps[x])
        [_0x53db1c(0x104)](".w-form-formradioinput")
        ["removeClass"](_0x53db1c(0x117)),
      validation());
}
weightedSelectionRange &&
  $(_0x3d075f(0x80))[_0x3d075f(0xfd)](function () {
    const _0x18e05e = _0x3d075f;
    $(this)[_0x18e05e(0x1b8)](
      _0x18e05e(0xc2) +
        $(this)[_0x18e05e(0x1d9)](_0x18e05e(0x1a2)) +
        _0x18e05e(0x1d1),
    );
  });
function selectionQuiz() {
  const _0x388352 = _0x3d075f;
  if ($(this)["find"](_0x388352(0xb3))) {
    $(_0x388352(0x80))[_0x388352(0xa2)](),
      $("[data-selection-weight]")[_0x388352(0xa2)]();
    if (weightedSelection) {
      (selTotal = 0x0),
        selArr[_0x388352(0xde)](function (_0x2aebfd) {
          selTotal = selTotal + _0x2aebfd["selected"];
        }),
        $("[data-text=\x22total-weight\x22]")[_0x388352(0x8f)](selTotal);
      if (
        $("[data-selection=\x22" + selTotal + "\x22]")[_0x388352(0x1c8)] > 0x0
      )
        $("[data-selection=\x22" + selTotal + "\x22]")[_0x388352(0x13e)]();
      else
        $(_0x388352(0x14c) + selTotal + ")")
          ? $(_0x388352(0x14c) + selTotal + ")")
              [_0x388352(0xc4)](_0x388352(0x80))
              ["eq"](0x0)
              [_0x388352(0x169)]()
          : $(_0x388352(0x134))["fadeIn"]();
    } else {
      let _0x36d680 = -0x1;
      $(_0x388352(0x80))["each"](function (_0x3aeb01) {
        const _0x500abe = _0x388352;
        $($(_0x500abe(0x80))[_0x3aeb01])
          [_0x500abe(0x1d9)]("selection")
          ["includes"](selString["join"]()) && (_0x36d680 = _0x3aeb01);
      }),
        _0x36d680 > -0x1
          ? $($(_0x388352(0x80))[_0x36d680])["fadeIn"]()
          : $(_0x388352(0x134))[_0x388352(0x13e)]();
    }
  }
}
function triggerInputAllData() {
  const _0x24fbdc = _0x3d075f;
  if (savedFilledInput && memory)
    console[_0x24fbdc(0xdb)](savedFilledInput),
      savedFilledInput[_0x24fbdc(0xde)]((_0x185ac6) => {
        const _0x5ea996 = _0x24fbdc;
        var _0x1dc02a = $(
            "input[name=\x22" +
              _0x185ac6[_0x5ea996(0x97)] +
              _0x5ea996(0x176) +
              _0x185ac6[_0x5ea996(0x111)] +
              _0x5ea996(0xf5),
          ),
          _0x1b832f = $(
            "input[name=\x22" + _0x185ac6[_0x5ea996(0x97)] + _0x5ea996(0xf5),
          ),
          _0x5cd347 = $(
            _0x5ea996(0x13c) + _0x185ac6[_0x5ea996(0x97)] + _0x5ea996(0xf5),
          );
        if (_0x1dc02a[_0x5ea996(0x1cb)](_0x5ea996(0xcd)) !== _0x5ea996(0xec)) {
          if (
            _0x1dc02a["attr"](_0x5ea996(0xcd)) === "radio" &&
            !_0x1dc02a[_0x5ea996(0xa3)](_0x5ea996(0x1d5))[_0x5ea996(0x1d9)](
              "radio-skip",
            )
          )
            _0x1dc02a[_0x5ea996(0x13b)](),
              addClickClass(),
              _0x1dc02a["siblings"](_0x5ea996(0xb2))["addClass"](
                _0x5ea996(0x117),
              ),
              _0x1dc02a[_0x5ea996(0x1d8)](_0x5ea996(0x1bb));
          else
            _0x185ac6[_0x5ea996(0x111)] === "on"
              ? (_0x1b832f[_0x5ea996(0x13b)](),
                _0x1b832f["siblings"](_0x5ea996(0x1a7))[_0x5ea996(0x85)](
                  _0x5ea996(0x117),
                ),
                _0x1b832f[_0x5ea996(0x1d8)](_0x5ea996(0x1bb)))
              : (_0x1b832f[_0x5ea996(0x88)](_0x185ac6[_0x5ea996(0x111)]),
                _0x5cd347[_0x5ea996(0x88)](_0x185ac6["value"]),
                $("select:not([data-prefill=\x22false\x22])")
                  ["find"](
                    _0x5ea996(0x140) + _0x185ac6[_0x5ea996(0x111)] + "\x22]",
                  )
                  [_0x5ea996(0x86)]("selected", !![]),
                _0x1b832f["trigger"](_0x5ea996(0x1bb)),
                _0x1b832f[_0x5ea996(0x1d8)]("change"));
        }
      });
  else
    _params &&
      (getParams(),
      searchQ["forEach"]((_0x2e8452) => {
        const _0x319718 = _0x24fbdc;
        if (
          $(
            "input[name=\x22" +
              _0x2e8452["inputName"] +
              _0x319718(0x176) +
              _0x2e8452[_0x319718(0x111)] +
              _0x319718(0xf5),
          )[_0x319718(0x1cb)](_0x319718(0xcd)) !== _0x319718(0xec)
        ) {
          if (
            $(
              "input[name=\x22" +
                _0x2e8452[_0x319718(0x9e)] +
                _0x319718(0x176) +
                _0x2e8452[_0x319718(0x88)] +
                _0x319718(0xf5),
            )["attr"]("type") === _0x319718(0xac)
          )
            $(
              _0x319718(0x10a) +
                _0x2e8452[_0x319718(0x9e)] +
                _0x319718(0x176) +
                _0x2e8452["val"] +
                _0x319718(0xf5),
            )[_0x319718(0x13b)](),
              $(
                _0x319718(0x10a) +
                  _0x2e8452["key"] +
                  _0x319718(0x176) +
                  _0x2e8452[_0x319718(0x88)] +
                  "\x22]:not([data-prefill=\x22false\x22])",
              )
                [_0x319718(0x199)](_0x319718(0xb2))
                [_0x319718(0x85)](_0x319718(0x117)),
              $(
                _0x319718(0x10a) +
                  _0x2e8452["key"] +
                  "\x22][value=\x22" +
                  _0x2e8452["val"] +
                  _0x319718(0xf5),
              )[_0x319718(0x1d8)](_0x319718(0x1bb));
          else
            _0x2e8452[_0x319718(0x88)] === "on"
              ? ($(
                  "input[name=\x22" +
                    _0x2e8452[_0x319718(0x9e)] +
                    "\x22]:not([data-prefill=\x22false\x22])",
                )[_0x319718(0x13b)](),
                $(
                  _0x319718(0x10a) +
                    _0x2e8452[_0x319718(0x9e)] +
                    "\x22]:not([data-prefill=\x22false\x22])",
                )
                  [_0x319718(0x199)](_0x319718(0x1a7))
                  ["addClass"](_0x319718(0x117)),
                $(_0x319718(0x10a) + _0x2e8452[_0x319718(0x9e)] + "\x22]")[
                  _0x319718(0x1d8)
                ]("input"))
              : ($(_0x319718(0x10a) + _0x2e8452["key"] + _0x319718(0xf5))[
                  _0x319718(0x88)
                ](_0x2e8452["val"]),
                $(
                  _0x319718(0x13c) +
                    _0x2e8452[_0x319718(0x9e)] +
                    _0x319718(0xf5),
                )[_0x319718(0x88)](_0x2e8452["val"]),
                $(_0x319718(0x144) + _0x2e8452["key"] + _0x319718(0xf5))
                  [_0x319718(0x104)](
                    "option[value=\x22" + _0x2e8452[_0x319718(0x88)] + "\x22]",
                  )
                  [_0x319718(0x86)](_0x319718(0xe8), !![]),
                $(
                  "input[name=\x22" +
                    _0x2e8452[_0x319718(0x9e)] +
                    _0x319718(0xf5),
                )["trigger"](_0x319718(0x1bb)),
                $("input[name=\x22" + _0x2e8452["key"] + _0x319718(0xf5))[
                  "trigger"
                ](_0x319718(0x18b)));
        }
      }));
}
$("[data-form=\x22next-btn\x22]")["on"](_0x3d075f(0x13b), function () {
  (next = !![]), nextStep(), selectionQuiz();
}),
  $("[data-form=\x22back-btn\x22]")["on"](_0x3d075f(0x13b), function () {
    (next = ![]), (back = !![]), backStep();
  }),
  $(steps)
    [_0x3d075f(0x104)](_0x3d075f(0x1ba))
    ["not"](_0x3d075f(0x10c))
    ["on"](_0x3d075f(0x1bb), function (_0x236d74) {
      validation(), andLogic(), addClickClass();
    }),
  $(steps)
    [_0x3d075f(0x104)]("input[type=\x22radio\x22]")
    ["on"](_0x3d075f(0x13b), function () {
      (skip = !![]), validation(), addClickClass();
    });
$(_0x3d075f(0x172))[_0x3d075f(0x1d9)](_0x3d075f(0x146))
  ? $(_0x3d075f(0x1b6))[_0x3d075f(0xa1)](_0x3d075f(0x1c4))
  : $("[data-form=\x22custom-progress-indicator\x22]")["addClass"](
      _0x3d075f(0x1c4),
    );
function clickableIndicator() {
  const _0x47d818 = _0x3d075f;
  $(_0x47d818(0x12d))[_0x47d818(0x1d9)](_0x47d818(0x186)) &&
    ($("[data-form=\x22progress-indicator\x22]")[_0x47d818(0xa1)](
      _0x47d818(0x17e),
    ),
    $(_0x47d818(0x12d))[_0x47d818(0x1d9)](_0x47d818(0x146))
      ? ((x = $(this)["index"]()), updateStep())
      : $(this)[_0x47d818(0x103)]() <= progress &&
        ((x = $(this)["index"]()), updateStep())),
    $(_0x47d818(0x183))[_0x47d818(0x8f)](x + 0x1);
}
$(_0x3d075f(0x1b6))["on"](_0x3d075f(0x13b), clickableIndicator);
function _0x2ff9(_0x58fc68, _0x1025b5) {
  const _0x5f4d4e = _0x5f4d();
  return (
    (_0x2ff9 = function (_0x2ff93e, _0x2d5513) {
      _0x2ff93e = _0x2ff93e - 0x78;
      let _0x587fd0 = _0x5f4d4e[_0x2ff93e];
      return _0x587fd0;
    }),
    _0x2ff9(_0x58fc68, _0x1025b5)
  );
}
$(_0x3d075f(0xaf))["data"](_0x3d075f(0x1a4)) &&
  ($(_0x3d075f(0x101))[_0x3d075f(0xfd)](function () {
    const _0xe36574 = _0x3d075f;
    $(this)[_0xe36574(0x1b8)](_0xe36574(0x130), $(this)["data"]("go-to"));
  }),
  $(_0x3d075f(0x1b4))[_0x3d075f(0xfd)](function () {
    const _0x4fe7d2 = _0x3d075f;
    $(this)[_0x4fe7d2(0x1b8)](
      _0x4fe7d2(0x147),
      $(this)[_0x4fe7d2(0x1d9)](_0x4fe7d2(0xd0)),
    );
  }));
function resetFormly() {
  const _0x54548d = _0x3d075f;
  $(_0x54548d(0xaf))[_0x54548d(0x1d8)](_0x54548d(0x161)),
    $(_0x54548d(0xaf))
      [_0x54548d(0xa3)]()
      [_0x54548d(0x104)](_0x54548d(0x129))
      [_0x54548d(0xa2)](),
    (x = 0x0),
    updateStep(),
    $(_0x54548d(0xaf))[_0x54548d(0x169)](),
    $(_0x54548d(0x194))[_0x54548d(0x8f)](oldSubmitText),
    $(_0x54548d(0x194))[_0x54548d(0x88)](oldSubmitText),
    $(_0x54548d(0x183))[_0x54548d(0x8f)](0x1),
    $(_0x54548d(0xaf))
      ["find"](_0x54548d(0x157))
      [_0x54548d(0x199)](_0x54548d(0x1a7))
      ["removeClass"](_0x54548d(0x117));
}
$(document)["ajaxComplete"](function (_0x3761e5, _0x420af9, _0x374b8d) {
  const _0x23eaca = _0x3d075f;
  if (_0x374b8d["url"][_0x23eaca(0x108)](_0x23eaca(0x90))) {
    const _0x615800 = _0x420af9[_0x23eaca(0xf7)] === 0xc8,
      _0x3d023a = _0x23eaca(0x121);
    redirectTo &&
      _0x615800 &&
      (newTab
        ? window[_0x23eaca(0x1cd)](redirectTo, _0x23eaca(0x14b))
        : setTimeout(() => {
            const _0x1eb6a8 = _0x23eaca;
            location[_0x1eb6a8(0xbd)] = redirectTo;
          }, redirectDelay)),
      _0x615800 &&
        successCard !== "" &&
        $(_0x23eaca(0x8a) + successCard + "\x22]")[_0x23eaca(0x13e)](),
      _0x615800 &&
        formReset &&
        setTimeout(() => {
          resetFormly();
        }, resetDelay),
      !_0x615800 &&
        ($(_0x23eaca(0x194))[_0x23eaca(0x88)](_0x23eaca(0x124)),
        $(_0x23eaca(0x194))[_0x23eaca(0x8f)](_0x23eaca(0x124)));
  }
}),
  $(_0x3d075f(0x1a5))["on"](_0x3d075f(0x13b), function () {
    const _0x331cec = _0x3d075f;
    var _0x586116 = $(this)
      [_0x331cec(0xc4)]()
      ["find"](_0x331cec(0x98))
      [_0x331cec(0x1d9)]("input-field");
    setTimeout(function () {
      $("input[name=\x22" + _0x586116 + "\x22]")["focus"]();
    }, 0x64),
      (back = !![]),
      (x = $(this)[_0x331cec(0x1d9)](_0x331cec(0x19b)) - 0x1),
      updateStep(),
      countCard
        ? ((curStep = x + 0x1), $(_0x331cec(0xf0))["text"](steps["length"]))
        : $(steps[x])[_0x331cec(0x1d9)]("card")
          ? (curStep = x + 0x0)
          : (curStep = x + 0x1),
      $(_0x331cec(0x183))["text"](curStep),
      (back = ![]);
  }),
  $("[data-btn=\x22reset\x22]")["on"](_0x3d075f(0x13b), function () {
    const _0x5a5f1c = _0x3d075f;
    $("[data-form=\x22multistep\x22]")[_0x5a5f1c(0x1d8)](_0x5a5f1c(0x161));
    let _0x733391 = $(this);
    $(this)[_0x5a5f1c(0x8f)](_0x5a5f1c(0x124)),
      setTimeout(function () {
        const _0x59f07a = _0x5a5f1c;
        $(_0x733391)[_0x59f07a(0x8f)](oldResetText),
          $(_0x733391)[_0x59f07a(0xa3)](_0x59f07a(0x129))[_0x59f07a(0xa2)](),
          (x = 0x0),
          updateStep(),
          $(_0x59f07a(0xaf))[_0x59f07a(0x169)](),
          $("[data-form=\x22submit-btn\x22]")[_0x59f07a(0x8f)](oldSubmitText),
          $(_0x59f07a(0x194))[_0x59f07a(0x88)](oldSubmitText),
          $(_0x733391)[_0x59f07a(0x88)](oldSubmitText),
          $("[data-text=\x22current-step\x22]")[_0x59f07a(0x8f)](0x1),
          $("[data-form=\x22multistep\x22]")
            [_0x59f07a(0x104)]("input:checkbox")
            ["siblings"](_0x59f07a(0x1a7))
            [_0x59f07a(0xa1)](_0x59f07a(0x117));
      }, resetDelay);
  }),
  $(_0x3d075f(0x81))["on"](_0x3d075f(0x8e), function (_0x237f86) {
    const _0x4c7ab1 = _0x3d075f;
    if (_0x237f86[_0x4c7ab1(0xcb)] === 0xd) {
      _0x237f86["preventDefault"](), _0x237f86["stopPropagation"]();
      if (
        $(steps[x])[_0x4c7ab1(0x104)](_0x4c7ab1(0x11e))["is"](_0x4c7ab1(0x164))
      )
        $(steps[x])
          [_0x4c7ab1(0x104)]("textarea:focus")
          [_0x4c7ab1(0x88)](
            $(steps[x])[_0x4c7ab1(0x104)]("textarea:focus")[_0x4c7ab1(0x88)]() +
              "\x0a",
          );
      else
        $(_0x4c7ab1(0x1ca))[_0x4c7ab1(0x1d9)]("enter") &&
          fill &&
          totalSteps > curStep &&
          $(_0x4c7ab1(0xa4))[0x0][_0x4c7ab1(0x13b)]();
    }
  }),
  $("body")[_0x3d075f(0x174)](function (_0x266fb0) {
    const _0x3112f4 = _0x3d075f;
    (_0x266fb0["metaKey"] || _0x266fb0[_0x3112f4(0x15a)]) &&
      _0x266fb0[_0x3112f4(0xcb)] == 0xd &&
      (x >= steps[_0x3112f4(0x1c8)] - 0x1 && fill
        ? $(steps[x])
            ["find"]("[data-form=\x22submit-btn\x22]:visible")
            [_0x3112f4(0x13b)]()
        : (_0x266fb0[_0x3112f4(0xe3)](), _0x266fb0["stopPropagation"]()));
  }),
  $(_0x3d075f(0xaf))
    ["find"](_0x3d075f(0x1ba))
    ["on"]("change", function () {
      const _0x63842a = _0x3d075f;
      (all_data = all_data[_0x63842a(0x12f)](
        (_0x4bcc7f) =>
          _0x4bcc7f[_0x63842a(0x1b0)] !== $(this)["attr"](_0x63842a(0xea)),
      )),
        $(this)["attr"](_0x63842a(0xcd)) === _0x63842a(0x125)
          ? $(this)["is"](_0x63842a(0x1aa))
            ? all_data[_0x63842a(0xad)]({
                field: $(this)[_0x63842a(0x1cb)](_0x63842a(0xea)),
                value: $(this)
                  [_0x63842a(0x199)](_0x63842a(0x192))
                  [_0x63842a(0x8f)](),
              })
            : $(
                _0x63842a(0x93) +
                  $(this)[_0x63842a(0x1cb)](_0x63842a(0xea)) +
                  "\x22]",
              )[_0x63842a(0xa2)]()
          : (all_data[_0x63842a(0xad)]({
              field: $(this)[_0x63842a(0x1cb)](_0x63842a(0xea)),
              value: $(this)["val"](),
            }),
            $(this)[_0x63842a(0x88)]() !== "" &&
              resetInputErrorMessage(
                $(this)[_0x63842a(0x1cb)](_0x63842a(0xea)),
              )),
        all_data["forEach"](function (_0x44f818) {
          const _0xe2a6cd = _0x63842a;
          $(_0xe2a6cd(0x93) + _0x44f818[_0xe2a6cd(0x1b0)] + "\x22]")[
            _0xe2a6cd(0x169)
          ](),
            $(_0xe2a6cd(0x93) + _0x44f818["field"] + "\x22]")[_0xe2a6cd(0x8f)](
              _0x44f818["value"],
            );
        });
    }),
  $(_0x3d075f(0xaf))
    [_0x3d075f(0x104)](_0x3d075f(0x11e))
    ["on"]("change", function () {
      const _0x13c2c4 = _0x3d075f;
      $(this)[_0x13c2c4(0x88)]() !== "" &&
        resetInputErrorMessage($(this)[_0x13c2c4(0x1cb)](_0x13c2c4(0xea))),
        (all_data = all_data[_0x13c2c4(0x12f)](
          (_0xbe979a) =>
            _0xbe979a[_0x13c2c4(0x1b0)] !== $(this)[_0x13c2c4(0x1cb)]("name"),
        )),
        all_data[_0x13c2c4(0xad)]({
          field: $(this)[_0x13c2c4(0x1cb)](_0x13c2c4(0xea)),
          value: $(this)["val"](),
        }),
        all_data[_0x13c2c4(0xde)](function (_0x31feb0) {
          const _0x2e2914 = _0x13c2c4;
          $(_0x2e2914(0x93) + _0x31feb0[_0x2e2914(0x1b0)] + "\x22]")[
            _0x2e2914(0x169)
          ](),
            $(_0x2e2914(0x93) + _0x31feb0[_0x2e2914(0x1b0)] + "\x22]")[
              _0x2e2914(0x8f)
            ](_0x31feb0[_0x2e2914(0x111)]);
        });
    }),
  $(_0x3d075f(0xaf))
    [_0x3d075f(0x104)](_0x3d075f(0x160))
    ["on"](_0x3d075f(0x18b), function () {
      const _0xb1a4ee = _0x3d075f;
      $(this)[_0xb1a4ee(0x88)]() !== "" &&
        resetInputErrorMessage($(this)[_0xb1a4ee(0x1cb)](_0xb1a4ee(0xea)));
      var _0x5b1976 = $(this)[_0xb1a4ee(0x1d9)](_0xb1a4ee(0x170));
      (all_data = all_data[_0xb1a4ee(0x12f)](
        (_0x2ef5c9) => _0x2ef5c9["field"] !== $(this)["attr"](_0xb1a4ee(0xea)),
      )),
        all_data[_0xb1a4ee(0xad)]({
          field: $(this)[_0xb1a4ee(0x1cb)]("name"),
          value: _0x5b1976
            ? $(this)[_0xb1a4ee(0x104)](_0xb1a4ee(0x1b5))[_0xb1a4ee(0x8f)]()
            : $(this)[_0xb1a4ee(0x88)](),
        }),
        all_data[_0xb1a4ee(0xde)](function (_0x283cf7) {
          const _0x4ffc9c = _0xb1a4ee;
          $(_0x4ffc9c(0x93) + _0x283cf7[_0x4ffc9c(0x1b0)] + "\x22]")[
            _0x4ffc9c(0x169)
          ](),
            $(_0x4ffc9c(0x93) + _0x283cf7[_0x4ffc9c(0x1b0)] + "\x22]")[
              _0x4ffc9c(0x8f)
            ](_0x283cf7["value"]);
        });
    }),
  updateStep(),
  triggerInputAllData(),
  $("[data-cms-select=cms]")[_0x3d075f(0xfd)](function () {
    const _0x47bf19 = _0x3d075f,
      _0x496da7 = $(this)[_0x47bf19(0x104)](_0x47bf19(0x1c7)),
      _0x529274 = [];
    console[_0x47bf19(0xdb)](_0x529274),
      _0x496da7["each"](function () {
        const _0x1fd721 = _0x47bf19;
        _0x529274["push"]($(this)[_0x1fd721(0x8f)]()[_0x1fd721(0x16a)]());
      });
    const _0x9833ba = $(this)["siblings"](_0x47bf19(0x119));
    $["each"](_0x529274, function (_0x85338, _0x322d22) {
      const _0x39700a = _0x47bf19,
        _0x5d4cd3 = $(_0x39700a(0x1cc))
          [_0x39700a(0x88)](_0x322d22)
          ["text"](_0x322d22);
      _0x9833ba[_0x39700a(0x1b8)](_0x5d4cd3);
    });
  });
function cloneRemove() {
  const _0xae60e3 = _0x3d075f;
  $(_0xae60e3(0x10b))[_0xae60e3(0xfd)](function () {
    const _0x4c70ad = _0xae60e3;
    $(this)[_0x4c70ad(0x104)](_0x4c70ad(0xbe))[_0x4c70ad(0x1c8)] < 0x2
      ? $(this)[_0x4c70ad(0x104)](_0x4c70ad(0x1bc))[_0x4c70ad(0xa2)]()
      : $(this)["find"](_0x4c70ad(0x1bc))[_0x4c70ad(0x169)]();
  });
}
function cloneRemoveInput() {
  const _0x46ad74 = _0x3d075f;
  $(_0x46ad74(0x19d))[_0x46ad74(0xfd)](function () {
    const _0x10fe7e = _0x46ad74;
    $(this)[_0x10fe7e(0x104)](_0x10fe7e(0x13a))[_0x10fe7e(0x1c8)] < 0x2
      ? $(this)[_0x10fe7e(0x104)](_0x10fe7e(0x173))[_0x10fe7e(0xa2)]()
      : $(this)[_0x10fe7e(0x104)](_0x10fe7e(0x173))[_0x10fe7e(0x169)]();
  });
}
$("[data-form=\x22remove-clone\x22]")["on"](_0x3d075f(0x13b), function () {
  const _0x3559c1 = _0x3d075f,
    _0x56df83 =
      $(this)[_0x3559c1(0xa3)](_0x3559c1(0xbe))[_0x3559c1(0x1c8)] > 0x0
        ? $(this)[_0x3559c1(0xa3)](_0x3559c1(0xbe))[_0x3559c1(0x103)]()
        : $(this)["parents"]("[data-display]")[_0x3559c1(0x103)](),
    _0x4bd2a4 =
      $(this)[_0x3559c1(0xa3)](_0x3559c1(0xbe))[_0x3559c1(0x1c8)] > 0x0
        ? $(this)["parents"](_0x3559c1(0xbe))["data"](_0x3559c1(0x14e))
        : $(this)
            [_0x3559c1(0xa3)](_0x3559c1(0x1af))
            [_0x3559c1(0x1d9)](_0x3559c1(0xa9));
  $(_0x3559c1(0x107) + _0x4bd2a4 + "\x22]")
    ["eq"](_0x56df83)
    [_0x3559c1(0xee)](),
    $(_0x3559c1(0xc5) + _0x4bd2a4 + "\x22]")
      ["eq"](_0x56df83)
      ["remove"](),
    cloneRemove(),
    validation();
}),
  $("[data-form=\x22remove-input-clone\x22]")["on"](
    _0x3d075f(0x13b),
    function () {
      const _0x181baa = _0x3d075f;
      let _0x128e5f = $(this)
        [_0x181baa(0x199)]()
        [_0x181baa(0x1cb)](_0x181baa(0xea));
      $(this)["parent"]("[data-clone-input]")["remove"](),
        $(_0x181baa(0x93) + _0x128e5f + "\x22]")
          [_0x181baa(0xc4)](_0x181baa(0x12c))
          [_0x181baa(0xee)](),
        cloneRemove(),
        validation();
    },
  ),
  $(_0x3d075f(0x12e))["on"](_0x3d075f(0x13b), function () {
    const _0x27f87d = _0x3d075f;
    let _0x22ecfa = $(this)[_0x27f87d(0x1d9)]("add-new");
    var _0x1e2918 = $(_0x27f87d(0x107) + _0x22ecfa + "\x22]")
        ["eq"](0x0)
        [_0x27f87d(0x14e)](!![]),
      _0x3c55f5 = $(_0x27f87d(0xc5) + _0x22ecfa + "\x22]")
        ["eq"](0x0)
        [_0x27f87d(0x14e)](!![]);
    let _0x1fd82d = "";
    $(this)["find"](_0x27f87d(0x1bc))[_0x27f87d(0x169)](),
      cloneRemove(),
      _0x1e2918[_0x27f87d(0x104)](_0x27f87d(0x13a))
        [_0x27f87d(0x104)](_0x27f87d(0x1bb))
        [_0x27f87d(0x88)](""),
      _0x1e2918["find"](_0x27f87d(0x13a))
        ["find"](_0x27f87d(0x160))
        [_0x27f87d(0x88)](""),
      _0x1e2918["find"](_0x27f87d(0x13a))
        [_0x27f87d(0x104)](_0x27f87d(0x11e))
        ["val"](""),
      _0x1e2918["find"](_0x27f87d(0x13a))
        [_0x27f87d(0x1ae)](_0x27f87d(0xd2))
        ["remove"](),
      _0x3c55f5[_0x27f87d(0x104)](_0x27f87d(0x12c))
        [_0x27f87d(0x1ae)](_0x27f87d(0xd2))
        ["remove"](),
      _0x1e2918["find"](_0x27f87d(0x1bb))["each"](function () {
        const _0x124871 = _0x27f87d;
        if (
          $(this)[_0x124871(0x79)](_0x124871(0x13a))[_0x124871(0x1c8)] > 0x0
        ) {
          let _0x2e9c36 = 0x0;
          const _0x3cab6e = $(this)
            [_0x124871(0x79)](_0x124871(0x13a))
            [_0x124871(0x1d9)](_0x124871(0xf6));
          console[_0x124871(0xdb)](
            $(this)[_0x124871(0x79)](_0x124871(0x13a))["data"](_0x124871(0xf6)),
            this[_0x124871(0xea)],
          ),
            $(_0x124871(0x181) + _0x3cab6e + _0x124871(0xc7))["each"](
              function () {
                const _0x42c476 = _0x124871,
                  _0x10acc8 = $(this)["attr"](_0x42c476(0xea));
                if (_0x10acc8 && _0x10acc8[_0x42c476(0x84)](_0x42c476(0x19a))) {
                  const _0x55d919 = parseInt(_0x10acc8["split"]("-")[0x1]);
                  !isNaN(_0x55d919) &&
                    _0x55d919 > _0x2e9c36 &&
                    (_0x2e9c36 = _0x55d919);
                }
              },
            ),
            _0x2e9c36++,
            (_0x1fd82d = this[_0x124871(0xea)] + "-" + _0x2e9c36),
            console[_0x124871(0xdb)](_0x3cab6e, _0x1fd82d);
        } else
          _0x1fd82d =
            this[_0x124871(0xea)] +
            "-" +
            (parseInt(
              $(_0x124871(0x107) + _0x22ecfa + "\x22]")
                [_0x124871(0x188)]()
                [_0x124871(0x103)](),
            ) +
              0x1);
        $(this)[_0x124871(0x88)](""),
          $(this)[_0x124871(0x1cb)]("name", _0x1fd82d),
          $(this)[_0x124871(0x1cb)](_0x124871(0xb4), _0x1fd82d);
      }),
      _0x1e2918[_0x27f87d(0x104)](_0x27f87d(0x11e))[_0x27f87d(0xfd)](
        function () {
          const _0x1e3ac6 = _0x27f87d;
          if (
            $(this)[_0x1e3ac6(0x79)]("[data-clone-input]")[_0x1e3ac6(0x1c8)] >
            0x0
          ) {
            let _0x51ed42 = 0x0;
            const _0x1bb83a = $(this)
              ["closest"](_0x1e3ac6(0x13a))
              [_0x1e3ac6(0x1d9)](_0x1e3ac6(0xf6));
            console["log"](
              $(this)
                [_0x1e3ac6(0x79)](_0x1e3ac6(0x13a))
                [_0x1e3ac6(0x1d9)](_0x1e3ac6(0xf6)),
              this[_0x1e3ac6(0xea)],
            ),
              $(_0x1e3ac6(0x181) + _0x1bb83a + _0x1e3ac6(0xae))[
                _0x1e3ac6(0xfd)
              ](function () {
                const _0x12edb0 = _0x1e3ac6,
                  _0x4e8649 = $(this)[_0x12edb0(0x1cb)]("name");
                if (_0x4e8649 && _0x4e8649[_0x12edb0(0x84)](_0x12edb0(0x19a))) {
                  const _0x33d8c4 = parseInt(
                    _0x4e8649[_0x12edb0(0x189)]("-")[0x1],
                  );
                  !isNaN(_0x33d8c4) &&
                    _0x33d8c4 > _0x51ed42 &&
                    (_0x51ed42 = _0x33d8c4);
                }
              }),
              _0x51ed42++,
              (_0x1fd82d = this[_0x1e3ac6(0xea)] + "-" + _0x51ed42),
              console[_0x1e3ac6(0xdb)](_0x1bb83a, _0x1fd82d);
          } else
            _0x1fd82d =
              this[_0x1e3ac6(0xea)] +
              "-" +
              (parseInt(
                $(_0x1e3ac6(0x107) + _0x22ecfa + "\x22]")
                  ["last"]()
                  [_0x1e3ac6(0x103)](),
              ) +
                0x1);
          $(this)[_0x1e3ac6(0x88)](""),
            $(this)[_0x1e3ac6(0x1cb)]("name", _0x1fd82d),
            $(this)[_0x1e3ac6(0x1cb)]("data-name", _0x1fd82d);
        },
      ),
      _0x1e2918["find"](_0x27f87d(0x160))[_0x27f87d(0xfd)](function () {
        const _0x10e640 = _0x27f87d;
        if (
          $(this)[_0x10e640(0x79)]("[data-clone-input]")[_0x10e640(0x1c8)] > 0x0
        ) {
          let _0x483413 = 0x0;
          const _0xf2c349 = $(this)
            [_0x10e640(0x79)](_0x10e640(0x13a))
            [_0x10e640(0x1d9)](_0x10e640(0xf6));
          console[_0x10e640(0xdb)](
            $(this)
              [_0x10e640(0x79)](_0x10e640(0x13a))
              [_0x10e640(0x1d9)](_0x10e640(0xf6)),
            this[_0x10e640(0xea)],
          ),
            $(_0x10e640(0x181) + _0xf2c349 + "\x22]\x20select")[
              _0x10e640(0xfd)
            ](function () {
              const _0x43e262 = _0x10e640,
                _0x50290a = $(this)[_0x43e262(0x1cb)](_0x43e262(0xea));
              if (_0x50290a && _0x50290a[_0x43e262(0x84)](_0x43e262(0x19a))) {
                const _0x14f643 = parseInt(
                  _0x50290a[_0x43e262(0x189)]("-")[0x1],
                );
                !isNaN(_0x14f643) &&
                  _0x14f643 > _0x483413 &&
                  (_0x483413 = _0x14f643);
              }
            }),
            _0x483413++,
            (_0x1fd82d = this[_0x10e640(0xea)] + "-" + _0x483413),
            console[_0x10e640(0xdb)](_0xf2c349, _0x1fd82d);
        } else
          _0x1fd82d =
            this[_0x10e640(0xea)] +
            "-" +
            (parseInt(
              $("[data-clone=\x22" + _0x22ecfa + "\x22]")
                [_0x10e640(0x188)]()
                [_0x10e640(0x103)](),
            ) +
              0x1);
        $(this)["val"](""),
          $(this)[_0x10e640(0x1cb)](_0x10e640(0xea), _0x1fd82d),
          $(this)[_0x10e640(0x1cb)](_0x10e640(0xb4), _0x1fd82d);
      }),
      _0x3c55f5[_0x27f87d(0x104)](_0x27f87d(0x98))[_0x27f87d(0xfd)](
        function () {
          const _0x1e9b64 = _0x27f87d;
          if ($(this)[_0x1e9b64(0x1d9)](_0x1e9b64(0x9a))) {
            let _0x382d79 = 0x0;
            const _0x48b745 = $(this)
              [_0x1e9b64(0x1d9)](_0x1e9b64(0x9a))
              ["split"]("-")[0x0];
            $(
              _0x1e9b64(0xc5) +
                _0x22ecfa +
                "\x22]\x20[data-input-field^=\x22" +
                _0x48b745 +
                "\x22]",
            )[_0x1e9b64(0xfd)](function () {
              const _0x4573b3 = _0x1e9b64,
                _0x1050d9 = $(this)[_0x4573b3(0x1cb)](_0x4573b3(0xba)),
                _0x148793 = parseInt(_0x1050d9[_0x4573b3(0x189)]("-")[0x1]);
              !isNaN(_0x148793) &&
                _0x148793 > _0x382d79 &&
                (_0x382d79 = _0x148793);
            }),
              _0x382d79++;
            const _0x47c8e8 = _0x48b745 + "-" + _0x382d79;
            console[_0x1e9b64(0xdb)](_0x47c8e8),
              $(this)[_0x1e9b64(0x1cb)](_0x1e9b64(0xba), _0x47c8e8);
          }
        },
      ),
      $(_0x27f87d(0x110) + _0x22ecfa + "\x22]")[_0x27f87d(0x1b8)](_0x1e2918),
      $(_0x27f87d(0x19f) + _0x22ecfa + "\x22]")["append"](_0x3c55f5),
      $(_0x27f87d(0x9d) + _0x22ecfa + "\x22]")[_0x27f87d(0xfd)](function () {
        const _0x576390 = _0x27f87d;
        $(this)[_0x576390(0x8f)](
          $(this)
            [_0x576390(0xa3)]("[data-clone=\x22" + _0x22ecfa + "\x22]")
            [_0x576390(0x103)]() + 0x1,
        );
      }),
      $(_0x27f87d(0x1a1) + _0x22ecfa + "\x22]")["each"](function () {
        const _0x316974 = _0x27f87d;
        $(this)["text"](
          $(this)
            [_0x316974(0xa3)]("[data-display=\x22" + _0x22ecfa + "\x22]")
            ["index"]() + 0x1,
        );
      }),
      validation();
  }),
  $(_0x3d075f(0x1ce))["on"](_0x3d075f(0x13b), function () {
    const _0x4b1c26 = _0x3d075f,
      _0x23ea65 = $(this)["parents"]("[data-clone]")[_0x4b1c26(0x103)]();
    let _0x30953a = $(this)["data"](_0x4b1c26(0xe2));
    var _0x5c9dad = $("[data-clone-input=\x22" + _0x30953a + "\x22]")
        ["eq"](0x0)
        ["clone"](!![]),
      _0x1c1bb6 = $(_0x4b1c26(0x154) + _0x30953a + "\x22]")
        ["eq"](0x0)
        [_0x4b1c26(0x14e)](!![]);
    $(this)["find"](_0x4b1c26(0x173))[_0x4b1c26(0x169)](), cloneRemoveInput();
    let _0x1ace36 = 0x0;
    $(_0x4b1c26(0x181) + _0x30953a + "\x22]\x20input")["each"](function () {
      const _0x8c4121 = _0x4b1c26,
        _0x77b813 = $(this)["attr"](_0x8c4121(0xea));
      if (_0x77b813 && _0x77b813[_0x8c4121(0x84)](_0x8c4121(0x19a))) {
        const _0x2a9366 = parseInt(_0x77b813[_0x8c4121(0x189)]("-")[0x1]);
        !isNaN(_0x2a9366) && _0x2a9366 > _0x1ace36 && (_0x1ace36 = _0x2a9366);
      }
    }),
      $(_0x4b1c26(0x181) + _0x30953a + _0x4b1c26(0x11f))["each"](function () {
        const _0x521fc1 = _0x4b1c26,
          _0x259261 = $(this)[_0x521fc1(0x1cb)](_0x521fc1(0xea));
        if (_0x259261 && _0x259261["startsWith"](_0x521fc1(0x19a))) {
          const _0x35765a = parseInt(_0x259261[_0x521fc1(0x189)]("-")[0x1]);
          !isNaN(_0x35765a) && _0x35765a > _0x1ace36 && (_0x1ace36 = _0x35765a);
        }
      }),
      _0x1ace36++,
      _0x5c9dad[_0x4b1c26(0x104)](_0x4b1c26(0x1bb))["each"](function () {
        const _0x4df6be = _0x4b1c26;
        let _0x178918 = "relationship-" + _0x1ace36;
        $(this)[_0x4df6be(0x88)](""),
          $(this)[_0x4df6be(0x1cb)](_0x4df6be(0xea), _0x178918),
          $(this)[_0x4df6be(0x1cb)]("data-name", _0x178918);
      }),
      _0x5c9dad[_0x4b1c26(0x104)](_0x4b1c26(0x160))[_0x4b1c26(0xfd)](
        function () {
          const _0x613bfe = _0x4b1c26;
          let _0x1acf1f = "relationship-" + _0x1ace36;
          $(this)[_0x613bfe(0x88)](""),
            $(this)[_0x613bfe(0x1cb)]("name", _0x1acf1f),
            $(this)[_0x613bfe(0x1cb)](_0x613bfe(0xb4), _0x1acf1f);
        },
      ),
      _0x1c1bb6["find"](_0x4b1c26(0x98))[_0x4b1c26(0xfd)](function () {
        const _0x373c60 = _0x4b1c26;
        $(this)["attr"](_0x373c60(0xba), "relationship-" + _0x1ace36);
      }),
      $(this)
        [_0x4b1c26(0x199)](_0x4b1c26(0xd3) + _0x30953a + "\x22]")
        [_0x4b1c26(0x1b8)](_0x5c9dad),
      $("[data-display]")
        ["eq"](_0x23ea65)
        ["find"](_0x4b1c26(0xb8) + _0x30953a + "\x22]")
        [_0x4b1c26(0x1b8)](_0x1c1bb6),
      $(_0x4b1c26(0x1b9) + _0x30953a + "\x22]")[_0x4b1c26(0xfd)](function () {
        const _0x14b5a1 = _0x4b1c26;
        $(this)["text"](
          $(this)
            [_0x14b5a1(0xa3)]("[data-clone-input=\x22" + _0x30953a + "\x22]")
            [_0x14b5a1(0x103)]() + 0x1,
        );
      }),
      $(_0x4b1c26(0xf9) + _0x30953a + "\x22]")[_0x4b1c26(0xfd)](function () {
        const _0x105400 = _0x4b1c26;
        $(this)["text"](
          $(this)
            [_0x105400(0xa3)](_0x105400(0x154) + _0x30953a + "\x22]")
            [_0x105400(0x103)]() + 0x1,
        );
      }),
      validation();
  }),
  $("[data-remove-upload]")["on"]("click", function () {
    const _0x2bc2da = _0x3d075f,
      _0x521e71 = $(this)[_0x2bc2da(0x1d9)]("remove-upload");
    $(_0x2bc2da(0x10a) + _0x521e71 + "\x22]")["val"](""), validation();
  });
function andLogic() {
  const _0x2b785f = _0x3d075f;
  conditionalResult &&
    (steps["eq"](x)[_0x2b785f(0x104)](_0x2b785f(0x152))[_0x2b785f(0xa2)](),
    console[_0x2b785f(0xdb)](_0x2b785f(0x8c)),
    steps["eq"](x)
      [_0x2b785f(0x104)](_0x2b785f(0x152))
      [_0x2b785f(0xfd)](function () {
        const _0xeab11 = _0x2b785f;
        function _0x4f450e(_0x114e92) {
          const _0x3177f2 = _0x114e92["split"]("&"),
            _0x13a5a3 = [];
          return (
            _0x3177f2["forEach"]((_0x33fb60) => {
              const _0x1d4e1d = _0x2ff9,
                [_0x1259fc, _0x2d2873] = _0x33fb60["split"]("=");
              _0x13a5a3[_0x1d4e1d(0xad)]({
                field: _0x1259fc,
                value: _0x2d2873,
              });
            }),
            _0x13a5a3
          );
        }
        const _0x4a0638 = $(this)["attr"](_0xeab11(0x180));
        console[_0xeab11(0xdb)](_0x4a0638);
        const _0x442441 = _0x4f450e(_0x4a0638);
        function _0x161382(_0x1a2e69, _0x19476b) {
          const _0x4048d0 = _0xeab11;
          return _0x19476b[_0x4048d0(0x19c)]((_0x52f0e2, _0xc6b98e) => {
            const _0x2f2a58 = _0x4048d0;
            if (
              _0x1a2e69[0x0] &&
              _0x52f0e2[_0x2f2a58(0x1b0)] === _0x1a2e69[0x0][_0x2f2a58(0x1b0)]
            )
              return _0x1a2e69[_0x2f2a58(0x1a9)](
                (_0x3e2104, _0x53799e) =>
                  _0x19476b[_0xc6b98e + _0x53799e] &&
                  _0x19476b[_0xc6b98e + _0x53799e][_0x2f2a58(0x1b0)] ===
                    _0x3e2104["field"] &&
                  _0x19476b[_0xc6b98e + _0x53799e][_0x2f2a58(0x111)] ===
                    _0x3e2104["value"],
              );
            return ![];
          });
        }
        const _0x39d74b = _0x161382(_0x442441, all_data);
        _0x39d74b ? $(this)[_0xeab11(0x169)]() : $(this)[_0xeab11(0xa2)]();
      }));
}
$(_0x3d075f(0xfe))[_0x3d075f(0x85)](_0x3d075f(0xa2)),
  $(_0x3d075f(0x8b))["on"](_0x3d075f(0x1bb), function () {
    const _0x7aff8a = _0x3d075f,
      _0x167119 = $(this)[_0x7aff8a(0x1d9)]("progressive-input"),
      _0x4a78b2 = $(this)["val"](),
      _0xc98d1b = $(_0x7aff8a(0xe7) + _0x167119 + "\x22]")[_0x7aff8a(0x1d9)](
        "progressive-input-value",
      );
    let _0x9e532d = $(
        _0x7aff8a(0xe7) + _0x167119 + _0x7aff8a(0xc8) + _0x4a78b2 + "\x22]",
      ),
      _0x759e55 = $(
        _0x7aff8a(0xe7) +
          _0x167119 +
          "\x22][data-progressive-input-value=\x22*\x22]",
      );
    $(_0x7aff8a(0xe7) + _0x167119 + "\x22]")[_0x7aff8a(0x85)]("hide"),
      $("[data-progressive-target=\x22" + _0x167119 + "\x22]")[_0x7aff8a(0xa1)](
        _0x7aff8a(0x169),
      );
    _0x4a78b2 !== "" &&
      (_0xc98d1b === "*" && _0x4a78b2 !== ""
        ? (_0x759e55["removeClass"](_0x7aff8a(0xa2)),
          _0x759e55["addClass"](_0x7aff8a(0x169)))
        : (_0x9e532d["removeClass"]("hide"), _0x9e532d["addClass"]("show")));
    function _0x90719e(_0x391242) {
      const _0x78b22b = _0x7aff8a;
      _0x391242 &&
        $("[data-progressive-input=\x22" + _0x391242 + "\x22]")["val"]() !==
          "" &&
        $(_0x78b22b(0xd4) + _0x391242 + "\x22]")[_0x78b22b(0x1d8)](
          _0x78b22b(0x1bb),
        );
    }
    let _0x407fb2 = $(_0x7aff8a(0xe7) + _0x167119 + "\x22]")
      [_0x7aff8a(0x104)](_0x7aff8a(0x8b))
      ["data"]("progressive-input");
    _0x90719e(_0x407fb2),
      $(_0x7aff8a(0xfc))[_0x7aff8a(0xfd)](function () {
        const _0x2c2074 = _0x7aff8a,
          _0x3a9009 = $(this)[_0x2c2074(0x1d9)]("progressive-input");
        $(_0x2c2074(0xe7) + _0x3a9009 + "\x22]")[_0x2c2074(0xa1)](
          _0x2c2074(0x169),
        ),
          $(_0x2c2074(0xe7) + _0x3a9009 + "\x22]")[_0x2c2074(0x85)](
            _0x2c2074(0xa2),
          );
      });
  });
function addClickClass() {
  const _0x11e82a = _0x3d075f,
    _0x4b6156 = $(this)[_0x11e82a(0x1d9)](_0x11e82a(0x168)),
    _0x2d5024 = $(this)[_0x11e82a(0x1cb)](_0x11e82a(0xcd)),
    _0x3a7657 = $(this)["attr"](_0x11e82a(0xea));
  console[_0x11e82a(0xdb)](
    "radio",
    $(this)["is"](_0x11e82a(0x1aa)),
    $(this)[_0x11e82a(0x1cb)]("name"),
  ),
    $(_0x11e82a(0x10a) + _0x3a7657 + "\x22]")
      ["parent"]()
      ["removeClass"](_0x4b6156),
    $(this)["is"](":checked") &&
      $(this)[_0x11e82a(0xc4)]()[_0x11e82a(0x85)](_0x4b6156);
}
$("[data-click-addclass]")["on"](_0x3d075f(0x18b), addClickClass),
  scrollTop(),
  cloneRemove(),
  cloneRemoveInput();
const formlyUrlParams = new URLSearchParams(window[_0x3d075f(0x138)]["search"]),
  formlySupportParam = formlyUrlParams["get"](_0x3d075f(0x1c0)),
  showButton = formlySupportParam === _0x3d075f(0xd7),
  passIcon =
    "<span\x20class=\x22f-icon-embed-xxsmall\x20w-embed\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010s10-4.48\x2010-10S17.52\x202\x2012\x202m-2\x2015l-5-5l1.41-1.41L10\x2014.17l7.59-7.59L19\x208z\x22></path></svg></span>",
  failIcon = _0x3d075f(0x116);
let isScriptLoaded = !![],
  scriptLocation = "head",
  isMultistepAttributePresent = !![],
  isMultistepOnFormElement = !![],
  areButtonsPresent = !![],
  isNextBtnOnSubmit = ![],
  isSubmitBtnOnSubmit = !![],
  isBackBtnOnSubmit = ![],
  formType = logicExtra
    ? "FormlyLogic\x20enabled"
    : "Basic\x20(No\x20Formly\x20Logic)",
  resultStatus = _0x3d075f(0x197),
  scriptSrcAdded = "";
function isElementPresent(_0x608aac, _0x28077e) {
  const _0x2dc508 = _0x3d075f;
  return (
    document[_0x2dc508(0xcc)](
      "[" + _0x28077e + "=\x22" + _0x608aac + "\x22]",
    ) !== null
  );
}
isMultistepAttributePresent = isElementPresent(
  _0x3d075f(0x113),
  _0x3d075f(0xce),
);
const multistepForm = document[_0x3d075f(0xcc)](_0x3d075f(0x163)),
  formStepLength = multistepForm[_0x3d075f(0x187)](_0x3d075f(0x17a))[
    _0x3d075f(0x1c8)
  ];
isMultistepOnFormElement = multistepForm !== null;
const multistepContainer = document["querySelector"](_0x3d075f(0xaf)),
  nextBtn = multistepContainer["querySelector"](_0x3d075f(0xa4)),
  backBtn = multistepContainer[_0x3d075f(0xcc)](_0x3d075f(0x7f)),
  submitBtn = multistepContainer[_0x3d075f(0xcc)](
    "[data-form=\x22submit-btn\x22]",
  );
(areButtonsPresent =
  nextBtn !== null && backBtn !== null && submitBtn !== null),
  (isNextBtnOnSubmit =
    nextBtn &&
    nextBtn[_0x3d075f(0x190)][_0x3d075f(0x141)]() === _0x3d075f(0x1bb)),
  (isSubmitBtnOnSubmit =
    submitBtn &&
    submitBtn[_0x3d075f(0x190)][_0x3d075f(0x141)]() === _0x3d075f(0x1bb) &&
    submitBtn[_0x3d075f(0xcd)][_0x3d075f(0x141)]() === "submit"),
  (isBackBtnOnSubmit =
    backBtn &&
    backBtn[_0x3d075f(0x190)][_0x3d075f(0x141)]() === _0x3d075f(0x1bb));
const checkPowerup = (_0x22eb41) =>
    document[_0x3d075f(0xcc)](_0x22eb41) !== null,
  progressBarAttr = checkPowerup(_0x3d075f(0xe6)),
  progressIndicatorAttr = checkPowerup(_0x3d075f(0x133)),
  customProgressAttr = checkPowerup(_0x3d075f(0x133)),
  cardDivAttr = checkPowerup(_0x3d075f(0x12b)),
  currentStepAttr = checkPowerup(_0x3d075f(0x183)),
  totalStepAttr = checkPowerup(_0x3d075f(0xf0)),
  enterAttr = checkPowerup(_0x3d075f(0x11d)),
  submitAttr = checkPowerup(_0x3d075f(0x14f)),
  radioSkipAttr = checkPowerup("[data-radio-skip=\x22true\x22]"),
  customCheckboxAttr = checkPowerup(_0x3d075f(0xbc)),
  recapatchaAttr = checkPowerup(_0x3d075f(0x1d4));
(!isScriptLoaded ||
  scriptLocation !== "head" ||
  !isMultistepAttributePresent ||
  !isMultistepOnFormElement ||
  !areButtonsPresent ||
  isNextBtnOnSubmit ||
  !isSubmitBtnOnSubmit ||
  isBackBtnOnSubmit) &&
  (resultStatus = _0x3d075f(0xc0));
function isScriptUrlMatch(_0x1cb120, _0x44ba11) {
  const _0x1b509e = _0x3d075f;
  for (
    var _0x3fe1f1 = 0x0;
    _0x3fe1f1 < _0x44ba11[_0x1b509e(0x1c8)];
    _0x3fe1f1++
  ) {
    if (_0x1cb120[_0x1b509e(0x108)](_0x44ba11[_0x3fe1f1])) return !![];
  }
  return ![];
}
var keywordsToCheck = [_0x3d075f(0x1b3), "formly"],
  scripts = document[_0x3d075f(0x78)]("script"),
  matchedScripts = [];
for (var i = 0x0; i < scripts[_0x3d075f(0x1c8)]; i++) {
  var scriptSrcs = scripts[i][_0x3d075f(0x1d3)];
  isScriptUrlMatch(scriptSrcs, keywordsToCheck) &&
    matchedScripts[_0x3d075f(0xad)](scriptSrcs);
}
if (matchedScripts["length"] > 0x0) {
  scriptSrcAdded = matchedScripts;
  const script = document["querySelector"](
    "script[src=\x22" + scriptSrcAdded + "\x22]",
  );
  script &&
    (scriptLocation =
      script["parentNode"]["tagName"] === _0x3d075f(0x196)
        ? "Before\x20&lt;/body&gt;\x20tag"
        : _0x3d075f(0x178));
} else scriptSrcAdded = _0x3d075f(0xef) + failIcon;
const newElement = document[_0x3d075f(0x7d)](_0x3d075f(0xff)),
  newStyle = document[_0x3d075f(0x7d)]("style");
(newStyle[_0x3d075f(0x7e)] = _0x3d075f(0xdc)),
  document[_0x3d075f(0x11b)][_0x3d075f(0x145)](newStyle);
showButton && document["body"][_0x3d075f(0x145)](newElement);
newElement[_0x3d075f(0x7e)] =
  "\x0a\x20\x20<button\x20class=\x22f-openbtn\x22\x20onclick=\x22openNav()\x22>\x0a\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x2220px\x22\x20height=\x2220px\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M11\x2021h-1l1-7H7.5c-.88\x200-.33-.75-.31-.78C8.48\x2010.94\x2010.42\x207.54\x2013.01\x203h1l-1\x207h3.51c.4\x200\x20.62.19.4.66C12.97\x2017.55\x2011\x2021\x2011\x2021\x22></path>\x0a\x20\x20\x20\x20</svg>\x20Check\x20Form\x0a\x20\x20</button>\x0a\x20\x20<div\x20id=\x22f-mySidenav\x22\x20class=\x22f-sidenav\x22>\x0a\x20\x20\x20\x20<a\x20href=\x22javascript:void(0)\x22\x20class=\x22f-closebtn\x22\x20onclick=\x22closeNav()\x22>&times;</a>\x0a\x20\x20\x20\x20<div\x20class=\x22f-fc-main-content\x22>\x0a\x20\x20\x20\x20\x20\x20<h4\x20class=\x22f-text-header\x22>Formly\x20Support</h4>\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20If\x20you\x20have\x20spotted\x20a\x20bug\x20or\x20require\x20extra\x20support,\x20please\x20reach\x20out\x20to\x20us\x20via\x20Slack\x20or\x20email\x20us\x20at\x20developer@videsigns.uk.\x0a\x20\x20\x20\x20\x20\x20</p>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Form\x20Type</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>" +
  formType +
  "</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Formly\x20Script\x20Info</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>Script\x20URL:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>" +
  scriptSrcAdded +
  _0x3d075f(0x16e) +
  scriptLocation +
  "</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Attributes</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>1.\x20Form:\x20data-form=multistep\x20" +
  (isMultistepOnFormElement ? passIcon : failIcon) +
  "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Multistep\x20form\x20attribute\x20is\x20on\x20Form\x20element\x20and\x20not\x20on\x20Form\x20Block\x20element\x0a\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>2.\x20Form\x20Steps:\x20data-form=step\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
  (formStepLength > 0x0 ? passIcon : failIcon) +
  "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Number\x20of\x20steps:\x20" +
  formStepLength +
  _0x3d075f(0x11c) +
  (nextBtn ? passIcon : failIcon) +
  _0x3d075f(0x15e) +
  (isNextBtnOnSubmit ? failIcon : passIcon) +
  _0x3d075f(0xd5) +
  (backBtn ? passIcon : failIcon) +
  _0x3d075f(0x1d6) +
  (isBackBtnOnSubmit ? failIcon : passIcon) +
  _0x3d075f(0x177) +
  (backBtn ? passIcon : failIcon) +
  _0x3d075f(0x10e) +
  (isSubmitBtnOnSubmit ? passIcon : failIcon) +
  _0x3d075f(0xb0) +
  (progressBarAttr && progressIndicatorAttr
    ? _0x3d075f(0x131) + passIcon + "</strong>"
    : "") +
  "\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
  (customProgressAttr ? _0x3d075f(0x16b) + passIcon + _0x3d075f(0xcf) : "") +
  _0x3d075f(0x19e) +
  (cardDivAttr ? _0x3d075f(0x156) + passIcon + "</strong>" : "") +
  _0x3d075f(0x19e) +
  (currentStepAttr ? _0x3d075f(0x9c) + passIcon + _0x3d075f(0xcf) : "") +
  _0x3d075f(0x19e) +
  (totalStepAttr ? _0x3d075f(0xa5) + passIcon + _0x3d075f(0xcf) : "") +
  _0x3d075f(0x19e) +
  (enterAttr
    ? "<strong\x20class=\x22f-text-white\x22>Press\x20\x22Enter\x22\x20To\x20Progress\x20" +
      passIcon +
      _0x3d075f(0xcf)
    : "") +
  _0x3d075f(0x19e) +
  (submitAttr ? _0x3d075f(0x17f) + passIcon + _0x3d075f(0xcf) : "") +
  _0x3d075f(0x19e) +
  (radioSkipAttr ? _0x3d075f(0xd6) + passIcon + _0x3d075f(0xcf) : "") +
  "\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
  (customCheckboxAttr
    ? "<strong\x20class=\x22f-text-white\x22>Checkboxes\x20" +
      passIcon +
      "</strong>"
    : "") +
  _0x3d075f(0x19e) +
  (recapatchaAttr
    ? "<strong\x20class=\x22f-text-white\x22>ReCAPTCHA\x20" +
      passIcon +
      _0x3d075f(0xcf)
    : "") +
  _0x3d075f(0x185);
function openNav() {
  const _0x18f50e = _0x3d075f;
  (document[_0x18f50e(0x1ad)](_0x18f50e(0x1a6))["style"][_0x18f50e(0xe4)] =
    _0x18f50e(0x8d)),
    (document[_0x18f50e(0x1ad)](_0x18f50e(0x1a6))[_0x18f50e(0x15b)][
      _0x18f50e(0x149)
    ] = _0x18f50e(0x195));
}
function closeNav() {
  const _0xb5a183 = _0x3d075f;
  (document["getElementById"]("f-mySidenav")[_0xb5a183(0x15b)][
    _0xb5a183(0xe4)
  ] = "0"),
    (document["getElementById"](_0xb5a183(0x1a6))[_0xb5a183(0x15b)]["padding"] =
      _0xb5a183(0x17b));
}
function _0x5f4d() {
  const _0x31fbc6 = [
    ":input[type=\x22checkbox\x22][required]",
    "span",
    ":input[type=\x22checkbox\x22][required]:checked",
    "[data-form=\x22submit-btn\x22]",
    "12px",
    "BODY",
    "PASS",
    "checked",
    "siblings",
    "relationship-",
    "edit-step",
    "some",
    "[data-clone-input-wrapper]",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "[data-display-wrapper=\x22",
    "require",
    "[data-display-index=\x22",
    "selection",
    "[data-memory]",
    "debug-mode",
    "[data-btn=\x22edit\x22]",
    "f-mySidenav",
    ".w-checkbox-input",
    "submit",
    "every",
    ":checked",
    "4313616jmAuxG",
    "step",
    "getElementById",
    "not",
    "[data-display]",
    "field",
    "new-tab",
    "select[required]:visible",
    "videsigns",
    "[data-answer]",
    "option[value=\x22$(this).val()\x22]",
    "[data-form=\x22custom-progress-indicator\x22]",
    "3500795mdxjJK",
    "append",
    "[data-input-index=\x22",
    ":input",
    "input",
    "[data-form=\x22remove-clone\x22]",
    "auto",
    "[data-form-ms=\x22submit-btn\x22]",
    ":input[type=\x27radio\x27]:checked",
    "formly-support",
    "input[type=\x22checkbox\x22]:visible",
    ":input[type=\x22password\x22]",
    "0.4",
    "disabled",
    "data-go-to",
    "dispatchEvent",
    "[data-cms-select=text]",
    "length",
    "300890OmNMfp",
    "[data-enter]",
    "attr",
    "<option>",
    "open",
    "[data-add-new-input]",
    ":input[type=\x22text\x22]",
    "weighted-selection-range",
    "</div>",
    "none",
    "src",
    "[data-callback=\x22recaptcha\x22]",
    "[data-radio-skip]",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Back\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button",
    "clicked\x20enter",
    "trigger",
    "data",
    "getElementsByTagName",
    "closest",
    "[data-quiz]",
    ".active-answer-card",
    "stringify",
    "createElement",
    "innerHTML",
    "[data-form=\x22back-btn\x22]",
    "[data-selection]",
    "body",
    "[data-form=\x22step\x22]:not([data-card=\x22true\x22])",
    "memory",
    "startsWith",
    "addClass",
    "prop",
    "4882ptliaw",
    "val",
    "phone-autoformat",
    "[data-success-card=\x22",
    "[data-progressive-input]",
    "clicked",
    "35%",
    "keypress",
    "text",
    "https://webflow.com/api/v1/form/",
    "data-radio-delay",
    "button",
    "[data-input-field=\x22",
    "[data-custom-error-message]",
    ":input[type=\x22file\x22][required]",
    "ix2",
    "inputName",
    "[data-input-field]",
    "[data-weighted-selection]",
    "input-field",
    "card",
    "<strong\x20class=\x22f-text-white\x22>Current\x20Step\x20Text\x20",
    "[data-index=\x22",
    "key",
    "90QShPhd",
    ":input[type=\x22password\x22][required]",
    "removeClass",
    "hide",
    "parents",
    "[data-form=\x22next-btn\x22]",
    "<strong\x20class=\x22f-text-white\x22>Total\x20Step\x20Text\x20",
    "3hxyMXc",
    "active-answer-card",
    "radio-delay",
    "display",
    ":input[type=\x22tel\x22][required]",
    "4263903LEjxTG",
    "radio",
    "push",
    "\x22]\x20textarea",
    "[data-form=\x22multistep\x22]",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Powerups</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    ":input[type=\x22checkbox\x22][required]:not(:checked)",
    ".w-radio-input",
    "[data-btn=\x22check\x22]",
    "data-name",
    "scroll-top-offset",
    "skipTo",
    "running",
    "[data-display-input-wrapper=\x22",
    "skip-to",
    "data-input-field",
    ":input[type=\x22checkbox\x22]:checked",
    "[data-checkbox]",
    "href",
    "[data-clone]",
    ":input[type=\x22url\x22]",
    "FAIL",
    "redirect-delay",
    "<div\x20data-range=\x22selection\x22\x20style=\x22display:none\x20!important\x22>",
    ":input[type=\x22text\x22][required]",
    "parent",
    "[data-display=\x22",
    "[data-form=\x22next-btn\x22][type=\x22submit\x22]",
    "\x22]\x20input",
    "\x22][data-progressive-input-value=\x22",
    "removeItem",
    "replace",
    "keyCode",
    "querySelector",
    "type",
    "data-form",
    "</strong>",
    "answer",
    "css",
    ":first",
    "[data-clone-input-wrapper=\x22",
    "[data-progressive-input=\x22",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>4.\x20Back\x20Buttons:\x20data-form=next-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Back\x20button\x20present?\x20",
    "<strong\x20class=\x22f-text-white\x22>Radio\x20Inputs\x20",
    "true",
    "11978549omLKIY",
    "input[type=\x22radio\x22]:checked",
    "focus",
    "log",
    "\x0a\x20\x20.f-icon-embed-xxsmall-2\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#ff3232\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x20\x20.f-icon-embed-xxsmall\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#57ff4b\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20{\x0a\x20\x20\x20\x20height:\x20100%\x20!important;\x0a\x20\x20\x20\x20width:\x200;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20z-index:\x20999999999999\x20!important;\x0a\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20background-color:\x20#081019\x20!important;\x0a\x20\x20\x20\x20overflow-x:\x20hidden\x20!important;\x0a\x20\x20\x20\x20padding-top:\x2060px\x20!important;\x0a\x20\x20\x20\x20transition:\x200.5s\x20!important;\x0a\x20\x20\x20\x20font-size:\x2015px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73)\x20!important;\x0a\x20\x20\x20\x20font-family:system-ui\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-section-title-text,\x20.f-support-text,\x20.f-openbtn{\x0a\x20\x20\x20\x20font-size:\x2015px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73);\x0a\x20\x20\x20\x20font-family:system-ui\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20p,\x20.f-sidenav\x20strong\x20{\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20space-between\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x204px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73);\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20.f-closebtn\x20{\x0a\x20\x20\x20\x20position:\x20absolute\x20!important;\x0a\x20\x20\x20\x20top:\x2025px\x20!important;\x0a\x20\x20\x20\x20right:\x2025px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2036px\x20!important;\x0a\x20\x20\x20\x20margin-left:\x2050px\x20!important;\x0a\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20color:\x20#e7e7e7\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-core-setup\x20{\x0a\x20\x20\x20\x20padding:\x2012px\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x2011px\x20!important;\x0a\x20\x20\x20\x20border-radius:\x206px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20#f-main\x20{\x0a\x20\x20\x20\x20transition:\x20margin-left\x20.5s\x20!important;\x0a\x20\x20\x20\x20padding:\x2020px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-main-content\x20{\x0a\x20\x20\x20\x20transition:\x20margin-left\x20.5s\x20!important;\x0a\x20\x20\x20\x20padding:\x2020px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-form-step\x20{\x0a\x20\x20\x20\x20padding-left:\x2010px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-openbtn\x20{\x0a\x20\x20\x20\x20white-space:\x20nowrap\x20!important;\x0a\x20\x20\x20\x20cursor:\x20pointer\x20!important;\x0a\x20\x20\x20\x20box-shadow:\x200\x200\x200\x201px\x20rgba(0,\x200,\x200,\x20.1),\x200\x201px\x203px\x20rgba(0,\x200,\x200,\x20.1)\x20!important;\x0a\x20\x20\x20\x20visibility:\x20visible\x20!important;\x0a\x20\x20\x20\x20z-index:\x2099\x20!important;\x0a\x20\x20\x20\x20color:\x20#e7e7e7\x20!important;\x0a\x20\x20\x20\x20opacity:\x201\x20!important;\x0a\x20\x20\x20\x20width:\x20auto\x20!important;\x0a\x20\x20\x20\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20background-color:\x20#1e1e1e\x20!important;\x0a\x20\x20\x20\x20border-radius:\x203px\x20!important;\x0a\x20\x20\x20\x20margin:\x200\x20!important;\x0a\x20\x20\x20\x20padding:\x206px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2013px\x20!important;\x0a\x20\x20\x20\x20line-height:\x2014px\x20!important;\x0a\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20top:\x20auto\x20!important;\x0a\x20\x20\x20\x20bottom:\x2012px\x20!important;\x0a\x20\x20\x20\x20left:\x2012px\x20!important;\x0a\x20\x20\x20\x20right:\x20auto\x20!important;\x0a\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20transform:\x20none\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-text-header{\x0a\x20\x20\x20\x20color:\x20#fff\x20!important;\x0a\x20\x20\x20\x20font-size:\x201.8rem\x20!important;\x0a\x20\x20\x20\x20font-weight:\x20600\x20!important;\x0a\x20\x20\x20\x20line-height:\x201.2\x20!important;\x0a\x20\x20\x20\x20margin-bottom:4px\x0a\x20\x20}\x0a\x0a\x20\x20@media\x20screen\x20and\x20(max-height:\x20450px)\x20{\x0a\x20\x20\x20\x20.sidenav\x20{\x20padding-top:\x2015px\x20!important;\x20}\x0a\x20\x20\x20\x20.sidenav\x20a\x20{\x20font-size:\x2018px\x20!important;\x20}\x0a\x20\x20}\x0a\x0a\x20\x20.f-section-title-text{\x0a\x20\x20\x20\x20color:\x20#fff\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x2010px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2018px\x20!important;\x0a\x20\x20\x20\x20font-weight:\x20700\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-div-support-section{\x0a\x20\x20\x20\x20padding-top:1rem\x20!important;\x0a\x20\x20\x20\x20padding-bottom:1rem\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-text-white{\x0a\x20\x20\x20\x20color:\x20white\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-spacer{\x0a\x20\x20\x20\x20padding-top:8px\x20!important;\x0a\x20\x20}\x0a",
    ":input[type=\x22checkbox\x22]",
    "forEach",
    "data-skip-to",
    "reinit",
    "[data-answer][data-radio-skip]:visible",
    "add-new-input",
    "preventDefault",
    "width",
    "test",
    "[data-form=\x22progress\x22]",
    "[data-progressive-target=\x22",
    "selected",
    ":input[type=\x22url\x22][required]",
    "name",
    ":input[type=\x22tel\x22]",
    "file",
    "select-multiple",
    "remove",
    "No\x20Formly\x20script\x20added\x20to\x20the\x20page!",
    "[data-text=\x22total-steps\x22]",
    "block-domain",
    "input[type=\x22submit\x22]",
    "custom-error-message",
    "[data-reinit]",
    "\x22]:not([data-prefill=\x22false\x22])",
    "clone-input",
    "status",
    "[data-reset-delay]",
    "[data-display-input-index=\x22",
    "findIndex",
    "radio-skip",
    "[data-progressive-input]:not(:visible)",
    "each",
    "[data-progressive-target]",
    "div",
    "form[data-form=\x22multistep\x22]\x20:input",
    "[data-go-to]",
    "[data-radio-delay]",
    "index",
    "find",
    "426164zCXuVy",
    "[data-answer=\x22",
    "[data-clone=\x22",
    "includes",
    "input[type=\x22text\x22][required]:visible",
    "input[name=\x22",
    "[data-clone-wrapper]",
    "[type=\x22radio\x22]",
    "required",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Submit\x20button\x20attribute\x20IS\x20on\x20Form\x20Submit\x20Button\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "textarea[required]",
    "[data-clone-wrapper=\x22",
    "value",
    ":input[required]",
    "multistep",
    "[data-form=\x22step\x22][data-card]",
    "reset-delay",
    "<span\x20class=\x22f-icon-embed-xxsmall-2\x20w-embed\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--carbon\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2032\x2032\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M16\x202C8.2\x202\x202\x208.2\x202\x2016s6.2\x2014\x2014\x2014s14-6.2\x2014-14S23.8\x202\x2016\x202m5.4\x2021L16\x2017.6L10.6\x2023L9\x2021.4l5.4-5.4L9\x2010.6L10.6\x209l5.4\x205.4L21.4\x209l1.6\x201.6l-5.4\x205.4l5.4\x205.4z\x22></path></svg></span>",
    "w--redirected-checked",
    "data-radio-skip",
    "[data-cms-select=input]",
    "getItem",
    "head",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>3.\x20Next\x20Buttons:\x20data-form=back-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Next\x20button\x20present?\x20",
    "[data-enter=\x22true\x22]",
    "textarea",
    "\x22]\x20select",
    "input:radio[required]",
    "redirect-form-hehexd",
    "backTo",
    "6JKefSb",
    "Please\x20wait...",
    "checkbox",
    ":input[type=\x22file\x22]",
    "[data-selected]:checked",
    "logic-extra",
    ".w-form-done",
    "Webflow",
    "[data-card=\x22true\x22]",
    "[data-display-input]",
    "[data-clickable]",
    "[data-add-new]",
    "filter",
    "<br>Data\x20Go\x20To\x20=\x20",
    "<strong\x20class=\x22f-text-white\x22>Automatic\x20Progress\x20Indicators\x20",
    ":input[type=\x22number\x22][required]",
    "[data-form=\x22progress-indicator\x22]",
    "[data-selection=\x22other\x22]",
    ":input[type=\x22email\x22]",
    ":input[type=\x22radio\x22]",
    "select[required]",
    "location",
    "[type=\x22checkbox\x22]",
    "[data-clone-input]",
    "click",
    "textarea[name=\x22",
    "submit-show",
    "fadeIn",
    "min-character",
    "option[value=\x22",
    "toLowerCase",
    ":input[type=\x22time\x22]",
    ":input[type=\x22date\x22][required]",
    "select[name=\x22",
    "appendChild",
    "clickable-all",
    "<br>Data\x20Answer\x20=\x20",
    ":input[type=\x22number\x22]",
    "padding",
    "[type=\x22submit\x22]",
    "_blank",
    "[data-range]:contains(",
    "wait",
    "clone",
    "[data-submit=\x22true\x22]",
    "parse",
    "242eBmLKD",
    "[data-show-if]",
    "input:radio[name=\x22",
    "[data-display-input=\x22",
    "init",
    "<strong\x20class=\x22f-text-white\x22>Intro\x20Cards\x20Or\x20Steps\x20Without\x20Inputs\x20",
    "input:checkbox",
    "[data-form=\x22next-btn\x22][data-submit-show]",
    "\x22]:checked",
    "ctrlKey",
    "style",
    "[data-radio-skip]:visible",
    "animate",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Next\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button\x20",
    "readystatechange",
    "select",
    "reset",
    "[data-query-param]",
    "form[data-form=\x22multistep\x22]",
    ":focus",
    "redirect",
    "12ymkwrg",
    "[data-text=\x22error-message\x22]",
    "click-addclass",
    "show",
    "trim",
    "<strong\x20class=\x22f-text-white\x22>Custom\x20Progress\x20Indicators\x20",
    "[data-conditional-result]",
    "[data-skip-to]",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>Script\x20Location:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>",
    "top",
    "ms-field",
    "stopPropagation",
    "[data-clickable-all]",
    "[data-form=\x22remove-input-clone\x22]",
    "keydown",
    "filledInput",
    "\x22][value=\x22",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>5.\x20Submit\x20Buttons:\x20data-form=next-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Submit\x20button\x20present?\x20",
    "Inside\x20<head>\x20tag",
    "go-to",
    "[data-form=\x22step\x22]",
    "0px",
    "textarea[required]:visible",
    "getResponse",
    "current",
    "<strong\x20class=\x22f-text-white\x22>Press\x20\x22⌘\x20+\x20Enter\x20\x22\x20To\x20Submit\x20",
    "data-show-if",
    "[data-clone-input=\x22",
    "[data-count-card]",
    "[data-text=\x22current-step\x22]",
    "children",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a",
    "clickable",
    "querySelectorAll",
    "last",
    "split",
    "AND",
    "change",
    "searchParams",
    ":input[type=\x22time\x22][required]",
    "phone-validation",
    ":input[type=\x22email\x22][required]",
    "tagName",
  ];
  _0x5f4d = function () {
    return _0x31fbc6;
  };
  return _0x5f4d();
}
