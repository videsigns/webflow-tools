const _0x4df898 = _0x1f6a;
(function (_0x363294, _0x299d24) {
  const _0x5eff49 = _0x1f6a,
    _0x297685 = _0x363294();
  while (!![]) {
    try {
      const _0x2ae673 =
        -parseInt(_0x5eff49(0xe7)) / 0x1 +
        -parseInt(_0x5eff49(0x172)) / 0x2 +
        parseInt(_0x5eff49(0xd9)) / 0x3 +
        (-parseInt(_0x5eff49(0x12a)) / 0x4) *
          (parseInt(_0x5eff49(0x99)) / 0x5) +
        -parseInt(_0x5eff49(0xf5)) / 0x6 +
        (-parseInt(_0x5eff49(0xb0)) / 0x7) * (parseInt(_0x5eff49(0xcc)) / 0x8) +
        (-parseInt(_0x5eff49(0xdd)) / 0x9) * (-parseInt(_0x5eff49(0x91)) / 0xa);
      if (_0x2ae673 === _0x299d24) break;
      else _0x297685["push"](_0x297685["shift"]());
    } catch (_0x3034b0) {
      _0x297685["push"](_0x297685["shift"]());
    }
  }
})(_0x4315, 0xc67d0);
let x = 0x0,
  curStep = 0x0,
  steps = $(_0x4df898(0x94)),
  progressbarClone = $(_0x4df898(0x12e))["clone"](),
  progressbar,
  countCard = !![],
  weightedSelection = $(_0x4df898(0x9d))[_0x4df898(0x10f)](_0x4df898(0x86)),
  weightedSelectionRange = $(_0x4df898(0xb2))["data"](_0x4df898(0x11f)),
  selectMultiple = $(_0x4df898(0xb3))["data"](_0x4df898(0x9a)),
  customError = $(_0x4df898(0xc0))["data"](_0x4df898(0xc5)),
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
  empReqEmail = [],
  empReqTel = [],
  reinitIX = $(_0x4df898(0xee))["data"](_0x4df898(0xc1)),
  textareaLength = 0x0,
  textInputLength = 0x0,
  emailInputLength = 0x0,
  selectInputLength = 0x0,
  checkboxInputLength = 0x0,
  filledInput = [],
  savedFilledInput = JSON[_0x4df898(0xc3)](
    localStorage[_0x4df898(0x127)](_0x4df898(0x13e))
  ),
  memory = $(_0x4df898(0x92))["data"](_0x4df898(0xe2)),
  quiz = $(_0x4df898(0x166))[_0x4df898(0x10f)](_0x4df898(0x88)),
  progress = 0x0;
const urlFormly = new URL(window[_0x4df898(0x108)][_0x4df898(0xc9)]);
let params = $("[data-query-param]")[_0x4df898(0x10f)](_0x4df898(0xcb)),
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
  logicExtra = $(_0x4df898(0x8b))["data"](_0x4df898(0x112)),
  oldSubmitText = $(_0x4df898(0x7c))[_0x4df898(0x106)](),
  oldResetText = $("[data-btn=\x22reset\x22]")[_0x4df898(0x134)](),
  formReset = $(_0x4df898(0x8b))[_0x4df898(0x10f)](_0x4df898(0x12f)),
  successCard = "",
  redirectTo = "",
  totalSteps = 0x0,
  checkCount = 0x0,
  resetDelay = $(_0x4df898(0x16c))["data"](_0x4df898(0x146))
    ? $(_0x4df898(0x16c))[_0x4df898(0x10f)]("reset-delay")
    : 0x7d0,
  redirectDelay = $(_0x4df898(0x93))["data"](_0x4df898(0x8d))
    ? $(_0x4df898(0x93))["data"]("redirect-delay")
    : 0x7d0,
  newTab = !![],
  unfilledArr = [],
  phoneFormat = $(_0x4df898(0x8b))[_0x4df898(0x10f)](_0x4df898(0x121)),
  scrollToTop = $(_0x4df898(0x8b))[_0x4df898(0x10f)](_0x4df898(0x16d)),
  scrollTopOffset = parseInt($(_0x4df898(0x8b))["data"](_0x4df898(0x124))),
  notRobot = !![];
all_data = [];
$(_0x4df898(0x15b))[_0x4df898(0x90)] > 0x0 && (notRobot = ![]);
function recaptcha(_0x15d3ae) {
  notRobot = !![];
}
$(_0x4df898(0x140))[_0x4df898(0x90)] > 0x0 &&
  (countCard = $(_0x4df898(0x140))[_0x4df898(0x10f)]("count-card"));
$(_0x4df898(0xcf))[_0x4df898(0xbf)](),
  $(progressbarClone)[_0x4df898(0xa8)](_0x4df898(0x8f)),
  $(_0x4df898(0x104))["children"]()[_0x4df898(0x165)](),
  $("[data-form=\x22submit-btn\x22]")[_0x4df898(0xbf)](),
  $(_0x4df898(0xbd))[_0x4df898(0xbf)](),
  steps[_0x4df898(0x138)](function () {
    const _0x296bad = _0x4df898;
    $(_0x296bad(0x104))[_0x296bad(0xb1)](
      progressbarClone[_0x296bad(0x10b)](!![], !![])
    );
  }),
  $(_0x4df898(0xe3))[_0x4df898(0xbf)]();
countCard
  ? ((curStep = curStep + 0x1),
    (totalSteps = steps[_0x4df898(0x90)]),
    $(_0x4df898(0x144))[_0x4df898(0x134)](totalSteps))
  : ($(steps[x])["data"](_0x4df898(0x139))
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    (totalSteps = $("[data-form=\x22step\x22]:not([data-card=\x22true\x22])")[
      _0x4df898(0x90)
    ]),
    $(_0x4df898(0x144))["text"](totalSteps),
    $(_0x4df898(0x7e))[_0x4df898(0x138)](function () {
      const _0x1906a8 = _0x4df898;
      $($(_0x1906a8(0x12e))[$(this)[_0x1906a8(0x15f)]()])[_0x1906a8(0xbf)]();
    }));
function _0x4315() {
  const _0x237db8 = [
    "[data-answer][data-radio-skip]:visible",
    "textarea",
    "required",
    "index",
    "option[value=\x22$(this).val()\x22]",
    "ix2",
    "data-input-field",
    "replace",
    ":checked",
    "remove",
    "[data-quiz]",
    "input[type=\x22email\x22]:visible",
    "[data-btn=\x22check\x22]",
    "ajaxComplete",
    "[data-input-field=\x22",
    ":input[type=\x22text\x22]",
    "[data-reset-delay]",
    "scroll-top",
    "[data-form=\x22back-btn\x22]",
    "<div\x20data-range=\x22selection\x22\x20style=\x22display:none\x20!important\x22>",
    "input:radio[name=\x22",
    "value",
    "2007760lopsZh",
    "https://webflow.com/api/v1/form/",
    "focus",
    ".w-radio-input",
    "</div>",
    "[data-text=\x22total-weight\x22]",
    "attr",
    "[data-form=\x22submit-btn\x22]",
    "debug-mode",
    "[data-form=\x22step\x22][data-card]",
    ":input[type=\x22number\x22][required]",
    "field",
    "Please\x20wait...",
    "keyCode",
    "prop",
    "open",
    "slow",
    "weighted-selection",
    "url",
    "quiz",
    "checkbox",
    "setItem",
    "[data-form=\x22multistep\x22]",
    "parents",
    "redirect-delay",
    "not",
    "current",
    "length",
    "10txGUVd",
    "[data-memory]",
    "[data-redirect-delay]",
    "[data-form=\x22step\x22]",
    "children",
    "fadeIn",
    "[data-text=\x22current-step\x22]",
    "name",
    "82210UupxSQ",
    "select-multiple",
    "step",
    ":input[type=\x22checkbox\x22][required]",
    "[data-weighted-selection]",
    "submit",
    ":input[type=\x27radio\x27]:checked",
    "removeItem",
    "[data-display=\x22",
    "[type=\x22submit\x22]",
    "[data-selected]:checked",
    "input[type=\x22checkbox\x22]:visible",
    "[data-clone=\x22",
    "forEach",
    "body",
    "removeClass",
    "textarea[required]:visible",
    "[data-btn=\x22reset\x22]",
    "select[name=\x22",
    "slice",
    "wait",
    "[data-checkbox]",
    "go-to",
    "724696zpeVZv",
    "append",
    "[data-weighted-selection-range]",
    "[data-select-multiple]",
    ":input",
    "set",
    ":input[type=\x22radio\x22]",
    "clickable-all",
    "[data-answer]:visible",
    "findIndex",
    ":input[type=\x22checkbox\x22][required]:checked",
    ":input[type=\x22checkbox\x22]:checked",
    "siblings",
    "[data-form-ms=\x22submit-btn\x22]",
    "[data-enter]",
    "hide",
    "[data-custom-error-message]",
    "reinit",
    "[data-success-card=\x22",
    "parse",
    "input:radio[required]",
    "custom-error-message",
    "skipTo",
    "[data-form=\x22next-btn\x22][data-submit-show]",
    "destroy",
    "href",
    "disabled",
    "query-param",
    "56HPJmvN",
    "stopPropagation",
    "form[data-form=\x22multistep\x22]\x20:input",
    "[data-text=\x22error-message\x22]",
    "data-skip-to",
    "push",
    "block-domain",
    "_blank",
    "select",
    "clickable",
    "none",
    "trim",
    "input[type=\x22text\x22][required]:visible",
    "3620418QRRYCE",
    "offset",
    "shiftKey",
    "keydown",
    "39485871eEqSoY",
    "skip-to",
    ".w-form-done",
    "click",
    "radio-skip",
    "memory",
    "[data-input-field]",
    "replaceState",
    "radio-delay",
    ":input[type=\x22email\x22][required]",
    "1316028vYRuYa",
    "w--redirected-checked",
    "input:checkbox",
    "history",
    "delete",
    "data-radio-skip",
    "[data-radio-skip]:visible",
    "[data-reinit]",
    "[data-skip-to]",
    "includes",
    "select[required]:visible",
    "novalidate",
    "readystatechange",
    "data-name",
    "9333906utIaDL",
    "[type=\x22checkbox\x22]",
    "input[type=\x22radio\x22]",
    "<br>Data\x20Answer\x20=\x20",
    "searchParams",
    "parent",
    "[data-form=\x22custom-progress-indicator\x22]",
    "backTo",
    "stringify",
    "input-field",
    ":input[type=\x22file\x22][required]",
    "metaKey",
    "selected",
    "phone-autoformat",
    "trigger",
    "[data-form=\x22progress\x22]",
    "Webflow",
    "val",
    "Enter",
    "location",
    "min-character",
    "ms-field",
    "clone",
    "0.4",
    "selection",
    "\x22]:checked",
    "data",
    "option[value=\x22",
    "span",
    "logic-extra",
    "change",
    "[data-cms-select=text]",
    "key",
    ":input[type=\x22checkbox\x22]",
    ":input[required]",
    "data-go-to",
    ":input[type=\x22file\x22]",
    ":input[type=\x22email\x22]",
    "[data-display-index=\x22",
    "[data-clickable]",
    "find",
    "match",
    "weighted-selection-range",
    ".w-checkbox-input",
    "phone-validation",
    ":input[type=\x22number\x22]",
    ":input[type=\x22tel\x22][required]",
    "scroll-top-offset",
    "select[required]",
    "[data-display-wrapper=\x22",
    "getItem",
    "[data-clickable-all]",
    "input[type=\x22submit\x22]",
    "44TXyihy",
    "filter",
    "last",
    "auto",
    "[data-form=\x22progress-indicator\x22]",
    "reset",
    "css",
    "[data-radio-delay]",
    "init",
    "[data-answer]",
    "text",
    "textarea[required]",
    "input",
    "textarea[name=\x22",
    "each",
    "card",
    "[data-go-to]",
    "keypress",
    "new-tab",
    "edit-step",
    "filledInput",
    "[data-form=\x22next-btn\x22][type=\x22submit\x22]",
    "[data-count-card]",
    "split",
    "[data-form=\x22next-btn\x22]",
    "addClass",
    "[data-text=\x22total-steps\x22]",
    "submit-show",
    "reset-delay",
    "redirect",
    "[data-selection]",
    "inputName",
    "[data-selection=\x22",
    "input[name=\x22",
    "some",
    "preventDefault",
    "show",
    "type",
    "radio",
    "redirect-form-hehexd",
    "\x22][value=\x22",
    "[data-add-new]",
    "log",
    ":input[type=\x22text\x22][required]",
    "test",
    "checked",
    "[data-answer=\x22",
    "[data-btn=\x22edit\x22]",
    "[data-index=\x22",
    "div.g-recaptcha",
  ];
  _0x4315 = function () {
    return _0x237db8;
  };
  return _0x4315();
}
(progressbar = $(_0x4df898(0x104))[_0x4df898(0x95)]()),
  $(_0x4df898(0x12e))["on"]("click", clickableIndicator),
  $(_0x4df898(0x97))[_0x4df898(0x134)](curStep),
  steps[_0x4df898(0xbf)](),
  $("[data-success-card]")[_0x4df898(0xbf)](),
  $(_0x4df898(0x13f))[_0x4df898(0x138)](function () {
    const _0x352eb9 = _0x4df898;
    $(this)["attr"](_0x352eb9(0x14f), "button");
  });
function getParams() {
  const _0x13de10 = _0x4df898;
  urlFormly[_0x13de10(0xf9)][_0x13de10(0xa6)](function (_0xda3a2f, _0x25d57a) {
    const _0x42cfc2 = _0x13de10;
    searchQ[_0x42cfc2(0xd1)]({ val: _0xda3a2f, key: _0x25d57a });
  });
}
function getSafe(_0x1e7556, _0x167fd2) {
  try {
    return _0x1e7556();
  } catch (_0x5221a6) {
    return _0x167fd2;
  }
}
function phoneAutoFormat(_0x4df2dd) {
  var _0xe9d326 = "";
  return function (_0x5ba380) {
    const _0xdc01d1 = _0x1f6a;
    var _0x383514 = "",
      _0x5f300f = _0x5ba380[_0xdc01d1(0x163)](/\D/g, ""),
      _0x16567c = 0x0,
      _0x137d23 = 0x0;
    while (
      _0x16567c < _0x5f300f[_0xdc01d1(0x90)] &&
      _0x137d23 < _0x4df2dd[_0xdc01d1(0x90)]
    ) {
      _0x4df2dd[_0x137d23] === "x"
        ? ((_0x383514 += _0x5f300f[_0x16567c]), _0x16567c++)
        : (_0x383514 += _0x4df2dd[_0x137d23]),
        _0x137d23++;
    }
    if (_0x5ba380[_0xdc01d1(0x90)] < _0xe9d326[_0xdc01d1(0x90)]) {
      var _0x51fa57 = _0x4df2dd["slice"](_0x137d23);
      _0x383514 += _0x51fa57["replace"](/x/g, "");
    }
    return (_0xe9d326 = _0x383514), _0x383514;
  };
}
savedFilledInput &&
  memory &&
  savedFilledInput["forEach"]((_0x3c78f3) => {
    const _0x1b7eba = _0x4df898;
    if (
      $(
        "input[name=\x22" +
          _0x3c78f3[_0x1b7eba(0x149)] +
          _0x1b7eba(0x152) +
          _0x3c78f3[_0x1b7eba(0x171)] +
          "\x22]"
      )[_0x1b7eba(0x7b)](_0x1b7eba(0x14f)) === _0x1b7eba(0x150)
    )
      $(
        _0x1b7eba(0x14b) +
          _0x3c78f3[_0x1b7eba(0x149)] +
          "\x22][value=\x22" +
          _0x3c78f3[_0x1b7eba(0x171)] +
          "\x22]"
      )[_0x1b7eba(0xe0)](),
        $(
          _0x1b7eba(0x14b) +
            _0x3c78f3[_0x1b7eba(0x149)] +
            _0x1b7eba(0x152) +
            _0x3c78f3[_0x1b7eba(0x171)] +
            "\x22]"
        )
          [_0x1b7eba(0xbc)](_0x1b7eba(0x78))
          [_0x1b7eba(0x143)](_0x1b7eba(0xe8));
    else
      _0x3c78f3[_0x1b7eba(0x171)] === "on"
        ? ($(_0x1b7eba(0x14b) + _0x3c78f3["inputName"] + "\x22]")[
            _0x1b7eba(0xe0)
          ](),
          $(_0x1b7eba(0x14b) + _0x3c78f3[_0x1b7eba(0x149)] + "\x22]")
            [_0x1b7eba(0xbc)](_0x1b7eba(0x120))
            [_0x1b7eba(0x143)](_0x1b7eba(0xe8)))
        : ($(_0x1b7eba(0x14b) + _0x3c78f3[_0x1b7eba(0x149)] + "\x22]")[
            _0x1b7eba(0x106)
          ](_0x3c78f3["value"]),
          $("textarea[name=\x22" + _0x3c78f3[_0x1b7eba(0x149)] + "\x22]")[
            "val"
          ](_0x3c78f3[_0x1b7eba(0x171)]),
          $("select[name=\x22" + _0x3c78f3[_0x1b7eba(0x149)] + "\x22]")
            [_0x1b7eba(0x11d)](_0x1b7eba(0x110) + _0x3c78f3["value"] + "\x22]")
            ["prop"](_0x1b7eba(0x101), !![]));
  });
params &&
  (getParams(),
  searchQ[_0x4df898(0xa6)]((_0x14130a) => {
    const _0x11f0cb = _0x4df898;
    if (
      $(
        _0x11f0cb(0x14b) +
          _0x14130a[_0x11f0cb(0x115)] +
          _0x11f0cb(0x152) +
          _0x14130a[_0x11f0cb(0x106)] +
          "\x22]"
      )[_0x11f0cb(0x7b)](_0x11f0cb(0x14f)) === _0x11f0cb(0x150)
    )
      $(
        _0x11f0cb(0x14b) +
          _0x14130a[_0x11f0cb(0x115)] +
          "\x22][value=\x22" +
          _0x14130a["val"] +
          "\x22]"
      )[_0x11f0cb(0xe0)](),
        $(
          _0x11f0cb(0x14b) +
            _0x14130a[_0x11f0cb(0x115)] +
            "\x22][value=\x22" +
            _0x14130a[_0x11f0cb(0x106)] +
            "\x22]"
        )
          [_0x11f0cb(0xbc)](_0x11f0cb(0x78))
          [_0x11f0cb(0x143)](_0x11f0cb(0xe8)),
        $(
          "input[name=\x22" +
            _0x14130a[_0x11f0cb(0x115)] +
            "\x22][value=\x22" +
            _0x14130a[_0x11f0cb(0x106)] +
            "\x22]"
        )[_0x11f0cb(0x103)]("input");
    else
      _0x14130a[_0x11f0cb(0x106)] === "on"
        ? ($(_0x11f0cb(0x14b) + _0x14130a[_0x11f0cb(0x115)] + "\x22]")[
            "click"
          ](),
          $("input[name=\x22" + _0x14130a[_0x11f0cb(0x115)] + "\x22]")
            [_0x11f0cb(0xbc)](_0x11f0cb(0x120))
            ["addClass"](_0x11f0cb(0xe8)),
          $(_0x11f0cb(0x14b) + _0x14130a["key"] + "\x22]")["trigger"](
            _0x11f0cb(0x136)
          ))
        : ($(_0x11f0cb(0x14b) + _0x14130a["key"] + "\x22]")[_0x11f0cb(0x106)](
            _0x14130a[_0x11f0cb(0x106)]
          ),
          $(_0x11f0cb(0x137) + _0x14130a[_0x11f0cb(0x115)] + "\x22]")[
            _0x11f0cb(0x106)
          ](_0x14130a["val"]),
          $(_0x11f0cb(0xab) + _0x14130a[_0x11f0cb(0x115)] + "\x22]")
            [_0x11f0cb(0x11d)](
              _0x11f0cb(0x110) + _0x14130a[_0x11f0cb(0x106)] + "\x22]"
            )
            [_0x11f0cb(0x83)](_0x11f0cb(0x101), !![]),
          $(_0x11f0cb(0x14b) + _0x14130a[_0x11f0cb(0x115)] + "\x22]")[
            _0x11f0cb(0x103)
          ](_0x11f0cb(0x136)),
          $(_0x11f0cb(0x14b) + _0x14130a["key"] + "\x22]")[_0x11f0cb(0x103)](
            "change"
          ));
  }),
  $(_0x4df898(0x8b))
    [_0x4df898(0x11d)](_0x4df898(0x136))
    [_0x4df898(0x103)](_0x4df898(0x136)),
  $(_0x4df898(0x8b))
    ["find"](_0x4df898(0x15d))
    [_0x4df898(0x103)](_0x4df898(0x136)),
  $(_0x4df898(0x8b))
    [_0x4df898(0x11d)](_0x4df898(0xd4))
    [_0x4df898(0x103)](_0x4df898(0x113)));
quiz &&
  steps[_0x4df898(0x138)](function () {
    const _0x4f44e9 = _0x4df898;
    $(this)[_0x4f44e9(0x95)]()["attr"](_0x4f44e9(0xec), !![]),
      $(this)["children"]()[_0x4f44e9(0x7b)]("data-radio-delay", 0xfa);
  });
function disableBtn(_0xe3787f) {
  const _0x5710a1 = _0x4df898;
  (fill = ![]),
    !customError &&
      ($(_0x5710a1(0x142))[_0x5710a1(0x130)]({
        opacity: "0.4",
        "pointer-events": _0x5710a1(0xd6),
      }),
      $(_0x5710a1(0x142))[_0x5710a1(0x143)](_0x5710a1(0xca)),
      $(_0x5710a1(0x7c))[_0x5710a1(0x130)]({
        opacity: _0x5710a1(0x10c),
        "pointer-events": _0x5710a1(0xd6),
      }),
      $(_0x5710a1(0x7c))["addClass"]("disabled"),
      $(_0x5710a1(0xbd))[_0x5710a1(0x130)]({
        opacity: _0x5710a1(0x10c),
        "pointer-events": "none",
      }),
      $("[data-form-ms=\x22submit-btn\x22]")["addClass"](_0x5710a1(0xca)));
}
function enableBtn() {
  const _0x5a07f8 = _0x4df898;
  (fill = !![]),
    $("[data-form=\x22next-btn\x22]")[_0x5a07f8(0x130)]({
      "pointer-events": "auto",
      opacity: "1",
    }),
    $("[data-form=\x22next-btn\x22]")[_0x5a07f8(0xa8)]("disabled"),
    $(_0x5a07f8(0x7c))[_0x5a07f8(0x130)]({
      "pointer-events": _0x5a07f8(0x12d),
      opacity: "1",
    }),
    $(_0x5a07f8(0x7c))[_0x5a07f8(0xa8)](_0x5a07f8(0xca)),
    $(_0x5a07f8(0xbd))[_0x5a07f8(0x130)]({
      "pointer-events": _0x5a07f8(0x12d),
      opacity: "1",
    }),
    $(_0x5a07f8(0xbd))["removeClass"](_0x5a07f8(0xca));
}
function saveFilledInput() {
  const _0x3ef590 = _0x4df898;
  $(_0x3ef590(0xce))
    [_0x3ef590(0x8e)](_0x3ef590(0xa2))
    ["each"](function () {
      const _0x21deec = _0x3ef590;
      $(this)["attr"](_0x21deec(0x14f)) === "checkbox" ||
      $(this)["attr"](_0x21deec(0x14f)) === "radio"
        ? $(this)[_0x21deec(0x83)](_0x21deec(0x157)) &&
          (filledInput["some"](
            (_0x13b60b) =>
              _0x13b60b[_0x21deec(0x149)] ===
              $(this)[_0x21deec(0x7b)](_0x21deec(0x98))
          )
            ? ((filledInput = filledInput["filter"](
                (_0x425712) =>
                  _0x425712[_0x21deec(0x149)] !==
                  $(this)[_0x21deec(0x7b)](_0x21deec(0x98))
              )),
              $(this)["val"]() !== "" &&
                filledInput[_0x21deec(0xd1)]({
                  inputName: $(this)[_0x21deec(0x7b)](_0x21deec(0x98)),
                  value: $(this)[_0x21deec(0x106)](),
                }))
            : $(this)[_0x21deec(0x106)]() !== "" &&
              filledInput[_0x21deec(0xd1)]({
                inputName: $(this)[_0x21deec(0x7b)](_0x21deec(0x98)),
                value: $(this)["val"](),
              }))
        : filledInput[_0x21deec(0x14c)](
            (_0x23c1fb) =>
              _0x23c1fb[_0x21deec(0x149)] ===
              $(this)[_0x21deec(0x7b)](_0x21deec(0x98))
          )
        ? ((filledInput = filledInput[_0x21deec(0x12b)](
            (_0x3df72a) =>
              _0x3df72a[_0x21deec(0x149)] !==
              $(this)[_0x21deec(0x7b)](_0x21deec(0x98))
          )),
          $(this)[_0x21deec(0x106)]() !== "" &&
            filledInput[_0x21deec(0xd1)]({
              inputName: $(this)[_0x21deec(0x7b)](_0x21deec(0x98)),
              value: $(this)[_0x21deec(0x106)](),
            }))
        : $(this)[_0x21deec(0x106)]() !== "" &&
          filledInput["push"]({
            inputName: $(this)[_0x21deec(0x7b)](_0x21deec(0x98)),
            value: $(this)[_0x21deec(0x106)](),
          });
    }),
    filledInput &&
      filledInput[_0x3ef590(0xa6)]((_0x8a7c4d) => {
        const _0x3437a0 = _0x3ef590;
        urlFormly[_0x3437a0(0xf9)][_0x3437a0(0xeb)](
          _0x8a7c4d[_0x3437a0(0x149)]
        ),
          urlFormly[_0x3437a0(0xf9)][_0x3437a0(0xb5)](
            _0x8a7c4d["inputName"],
            _0x8a7c4d[_0x3437a0(0x171)]
          ),
          window[_0x3437a0(0xea)][_0x3437a0(0xe4)](null, null, urlFormly);
      }),
    localStorage[_0x3ef590(0xa0)](_0x3ef590(0x13e)),
    localStorage[_0x3ef590(0x8a)](
      "filledInput",
      JSON[_0x3ef590(0xfd)](filledInput)
    );
}
function scrollTop() {
  const _0x333d69 = _0x4df898;
  scrollToTop &&
    $("html,\x20body")["animate"](
      {
        scrollTop:
          $(_0x333d69(0x8b))[_0x333d69(0xda)]()["top"] - scrollTopOffset,
      },
      0x3e8
    );
}
function _0x1f6a(_0x231a16, _0xd9d1f5) {
  const _0x431596 = _0x4315();
  return (
    (_0x1f6a = function (_0x1f6a34, _0x34d27e) {
      _0x1f6a34 = _0x1f6a34 - 0x77;
      let _0x309522 = _0x431596[_0x1f6a34];
      return _0x309522;
    }),
    _0x1f6a(_0x231a16, _0xd9d1f5)
  );
}
function updateStep() {
  const _0x475ba6 = _0x4df898;
  scrollTop(),
    (skip = ![]),
    $("[data-form=\x22custom-progress-indicator\x22]")["removeClass"](
      "disabled"
    );
  $(_0x475ba6(0x11c))[_0x475ba6(0x10f)](_0x475ba6(0xd5)) &&
    (steps[_0x475ba6(0x11d)](_0x475ba6(0x117))[_0x475ba6(0x138)](function () {
      const _0xfbfc09 = _0x475ba6;
      $(
        $(_0xfbfc09(0xfb))[
          $(this)["parents"](_0xfbfc09(0x94))[_0xfbfc09(0x15f)]()
        ]
      ),
        $(this)[_0xfbfc09(0x106)]() === "" && emptyInput++;
    }),
    emptyInput > 0x0
      ? $(_0x475ba6(0x129))[_0x475ba6(0x143)](_0x475ba6(0xca))
      : $("input[type=\x22submit\x22]")[_0x475ba6(0xa8)]("disabled"));
  $(_0x475ba6(0xfb))["removeClass"](_0x475ba6(0x8f)),
    $(_0x475ba6(0xfb))[_0x475ba6(0x143)](_0x475ba6(0xca)),
    $($(_0x475ba6(0xfb))[x])[_0x475ba6(0x143)]("current"),
    (selection = selections[_0x475ba6(0x12b)](
      (_0x17bd28) => _0x17bd28["step"] === x - 0x1
    ));
  next &&
    (x = getSafe(() => selection[0x0]["skipTo"])
      ? parseInt(getSafe(() => selection[0x0][_0x475ba6(0xc6)]))
      : x);
  $(_0x475ba6(0x133))["hide"](), steps[_0x475ba6(0xbf)]();
  reinitIX === !![] && window[_0x475ba6(0x105)][_0x475ba6(0xc8)]();
  $(progressbar)[_0x475ba6(0xa8)](_0x475ba6(0x8f));
  for (i = 0x0; i <= x; i++) {
    countCard
      ? $(progressbar[i])[_0x475ba6(0x143)](_0x475ba6(0x8f))
      : !$(steps[i])[_0x475ba6(0x10f)]("card") &&
        $(progressbar[i])[_0x475ba6(0x143)](_0x475ba6(0x8f));
  }
  reinitIX === !![]
    ? (window["Webflow"] &&
        window[_0x475ba6(0x105)]
          ["require"](_0x475ba6(0x161))
          [_0x475ba6(0x132)](),
      document["dispatchEvent"](new Event(_0x475ba6(0xf3))),
      $(steps[x])[_0x475ba6(0x14e)]())
    : $(steps[x])[_0x475ba6(0x96)](_0x475ba6(0x85));
  x === 0x0 &&
    !$(steps[x])["data"]("card") &&
    $(steps[x])["find"]("[data-answer]")[_0x475ba6(0x14e)]();
  selection[_0x475ba6(0x90)] > 0x0
    ? $(steps[x])
        [_0x475ba6(0x11d)](
          _0x475ba6(0x158) + selection[0x0][_0x475ba6(0x101)] + "\x22]"
        )
        [_0x475ba6(0x14e)]()
    : $(steps[x])
        ["find"](_0x475ba6(0x158) + answer + "\x22]")
        [_0x475ba6(0x14e)]();
  if (x === 0x0)
    $("[data-form=\x22back-btn\x22]")[_0x475ba6(0xbf)](),
      $(_0x475ba6(0x142))[_0x475ba6(0x14e)](),
      $(_0x475ba6(0x7c))[_0x475ba6(0xbf)]();
  else {
    if (
      x === steps[_0x475ba6(0x90)] - 0x1 ||
      $(steps[x])[_0x475ba6(0x11d)]("[data-form=\x22submit\x22]:visible")[
        _0x475ba6(0x90)
      ] > 0x0
    ) {
      $(_0x475ba6(0x142))[_0x475ba6(0xbf)]();
      if (
        $(steps[x])
          [_0x475ba6(0x11d)](_0x475ba6(0xc7))
          [_0x475ba6(0x10f)](_0x475ba6(0x145))
      )
        $(steps[x])
          [_0x475ba6(0x11d)]("[data-form=\x22next-btn\x22][data-submit-show]")
          [_0x475ba6(0x14e)]();
      else
        $(_0x475ba6(0x142))[_0x475ba6(0x10f)](_0x475ba6(0x145)) &&
          $(_0x475ba6(0x142))[_0x475ba6(0x14e)]();
      $(_0x475ba6(0x7c))[_0x475ba6(0x14e)](),
        $("[data-form-ms=\x22submit-btn\x22]")[_0x475ba6(0x14e)](),
        $(_0x475ba6(0x16e))[_0x475ba6(0x14e)]();
    } else
      $("[data-form=\x22next-btn\x22]")[_0x475ba6(0x14e)](),
        $(_0x475ba6(0x16e))["show"](),
        $(_0x475ba6(0x7c))["hide"](),
        $(_0x475ba6(0xbd))[_0x475ba6(0xbf)]();
  }
  $($(steps[x])[_0x475ba6(0x11d)]("input[autofocus]")[0x0])[_0x475ba6(0x77)](),
    $($(steps[x])[_0x475ba6(0x11d)]("textarea[autofocus]")[0x0])["focus"](),
    validation();
  for (idx = 0x0; idx <= x; idx++) {
    $($(_0x475ba6(0xfb))[idx])[_0x475ba6(0xa8)](_0x475ba6(0xca));
  }
}
function validateEmail(_0x10dd05, _0x403d71, _0x392f23) {
  const _0x5853e1 = _0x4df898;
  let _0x173d59 = _0x10dd05["includes"]("@")
    ? _0x10dd05[_0x5853e1(0x141)]("@")[0x1][_0x5853e1(0x141)](".")[0x0]
    : [];
  dom = [];
  _0x403d71 !== undefined &&
    _0x403d71[_0x5853e1(0x141)](",")[_0x5853e1(0xa6)](function (_0x520696) {
      _0x520696["includes"](_0x173d59) && dom["push"](_0x173d59);
    });
  dom["length"] > 0x0 ? (domainAllowed = ![]) : (domainAllowed = !![]);
  var _0x128857 = /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,20})?$/;
  console["log"](_0x128857[_0x5853e1(0x156)](_0x10dd05)),
    !_0x128857[_0x5853e1(0x156)](_0x10dd05) || !domainAllowed
      ? ((emailFilled = ![]), unfilledArr["push"]({ input: _0x392f23 }))
      : (emailFilled = !![]);
}
function phoneValidation(_0x2b5f23, _0x55f9de, _0x533979) {
  const _0x4ab474 = _0x4df898;
  if (phoneFormat)
    return _0x2b5f23[_0x4ab474(0x11e)](
      new RegExp(phoneFormat[_0x4ab474(0xac)](0x1, -0x1))
    ) && _0x55f9de >= _0x533979
      ? !![]
      : ![];
  else {
    if (_0x55f9de >= _0x533979) return !![];
  }
}
function validation() {
  const _0x14c35a = _0x4df898;
  $(steps[x])["data"](_0x14c35a(0x139)) && enableBtn();
  (unfilledArr = []),
    (inputFilled = !![]),
    (radioFilled = !![]),
    (checkboxFilled = !![]),
    (numFilled = !![]),
    (fileFilled = !![]),
    (selectFilled = !![]),
    (textareaFilled = !![]),
    (telFilled = !![]),
    (emailFilled = !![]),
    (emptyInput = 0x0),
    (empReqInput = []),
    (empReqSelect = []),
    (empReqTextarea = []),
    (empReqNum = []),
    (empReqFile = []),
    (empReqRadio = []),
    (textareaLength = $(steps[x])[_0x14c35a(0x11d)](_0x14c35a(0xa9))[
      _0x14c35a(0x90)
    ]),
    (textInputLength = $(steps[x])[_0x14c35a(0x11d)](_0x14c35a(0xd8))[
      _0x14c35a(0x90)
    ]),
    (selectInputLength = $(steps[x])[_0x14c35a(0x11d)](_0x14c35a(0xf1))[
      _0x14c35a(0x90)
    ]),
    (emailInputLength = $(steps[x])[_0x14c35a(0x11d)](_0x14c35a(0x167))[
      _0x14c35a(0x90)
    ]),
    (checkboxInputLength = $(steps[x])[_0x14c35a(0x11d)](_0x14c35a(0xa4))[
      "length"
    ]);
  textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0
    ? disableBtn()
    : enableBtn();
  checkCount = $(steps[x])[_0x14c35a(0x10f)]("checkbox")
    ? $(steps[x])[_0x14c35a(0x10f)]("checkbox")
    : $(steps[x])[_0x14c35a(0x11d)](_0x14c35a(0xae))["length"] > 0x0
    ? $(steps[x])
        [_0x14c35a(0x11d)](_0x14c35a(0xae))
        [_0x14c35a(0x10f)](_0x14c35a(0x89))
    : 0x0;
  if (!logicExtra)
    $(steps[x])[_0x14c35a(0x11d)](":input")["is"]("[type=\x22checkbox\x22]") &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])[_0x14c35a(0x11d)](_0x14c35a(0x116))[_0x14c35a(0x90)]
        ? $(steps[x])
            [_0x14c35a(0x11d)](_0x14c35a(0x116))
            [_0x14c35a(0x138)](function () {
              const _0x480855 = _0x14c35a;
              $(this)["is"](_0x480855(0x164))
                ? $(steps[x])["find"](_0x480855(0x9c))[_0x480855(0x90)] < 0x1 &&
                  ((checkboxFilled = !![]),
                  resetInputErrorMessage($(this)["attr"](_0x480855(0x98))))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0x480855(0xd1)]({
                    input: $(this)[_0x480855(0x7b)](_0x480855(0x98)),
                  }));
            })
        : $(steps[x])["find"](_0x14c35a(0xbb))["length"] >= checkCount
        ? $(steps[x])[_0x14c35a(0x11d)](
            ":input[type=\x22checkbox\x22][required]"
          )[_0x14c35a(0x90)] > 0x0
          ? $(steps[x])
              [_0x14c35a(0x11d)](_0x14c35a(0x9c))
              [_0x14c35a(0x138)](function () {
                const _0x2f4919 = _0x14c35a;
                !$(this)["is"](_0x2f4919(0x164))
                  ? ((checkboxFilled = ![]),
                    unfilledArr[_0x2f4919(0xd1)]({
                      input: $(this)[_0x2f4919(0x7b)](_0x2f4919(0x98)),
                    }))
                  : ((checkboxFilled = !![]),
                    $(steps[x])[_0x2f4919(0x11d)](_0x2f4919(0xba))[
                      _0x2f4919(0x90)
                    ] >=
                      $(steps[x])[_0x2f4919(0x11d)](_0x2f4919(0x9c))[
                        _0x2f4919(0x90)
                      ] &&
                      resetInputErrorMessage(
                        $(steps[x])
                          ["find"](":input[type=\x22checkbox\x22]")
                          [_0x2f4919(0x7b)](_0x2f4919(0x98))
                      ));
              })
          : ((checkboxFilled = !![]),
            resetInputErrorMessage(
              $(steps[x])
                [_0x14c35a(0x11d)](_0x14c35a(0x116))
                [_0x14c35a(0x7b)](_0x14c35a(0x98))
            ))
        : ((checkboxFilled = ![]),
          $(steps[x])
            [_0x14c35a(0x11d)](_0x14c35a(0x9c))
            ["each"](function () {
              const _0x4b492b = _0x14c35a;
              $(this)[_0x4b492b(0x8e)](_0x4b492b(0x164)) &&
                unfilledArr[_0x4b492b(0xd1)]({
                  input: $(this)[_0x4b492b(0x7b)]("name"),
                });
            }),
          unfilledArr[_0x14c35a(0xd1)]({
            input: $(steps[x])
              [_0x14c35a(0x11d)](_0x14c35a(0x116))
              [_0x14c35a(0x7b)]("name"),
          }))),
      $(steps[x])
        [_0x14c35a(0x11d)]("input:radio[required]")
        [_0x14c35a(0x138)](function (_0x39d3f6) {
          const _0x4e9156 = _0x14c35a;
          var _0x48f372 = $(this)[_0x4e9156(0x7b)](_0x4e9156(0x98));
          $("input:radio[name=\x22" + _0x48f372 + _0x4e9156(0x10e))[
            _0x4e9156(0x90)
          ] == 0x0
            ? (!empReqRadio["find"](
                (_0xe4bcf8) => _0xe4bcf8[_0x4e9156(0x136)] === _0x39d3f6
              ) && empReqRadio[_0x4e9156(0xd1)]({ input: _0x39d3f6 }),
              unfilledArr[_0x4e9156(0xd1)]({
                input: $(this)[_0x4e9156(0x7b)](_0x4e9156(0x98)),
              }))
            : (empReqRadio = empReqRadio["filter"](
                (_0x552a9e) => _0x552a9e[_0x4e9156(0x136)] !== _0x39d3f6
              )),
            empReqRadio[_0x4e9156(0x90)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0x14c35a(0x11d)](_0x14c35a(0x155))
        [_0x14c35a(0x138)](function (_0x57c5b5) {
          const _0x45d7b4 = _0x14c35a;
          let _0x389805 = $(this)[_0x45d7b4(0x106)]()[_0x45d7b4(0x90)],
            _0x455481 = $(this)["data"](_0x45d7b4(0x109))
              ? $(this)[_0x45d7b4(0x10f)](_0x45d7b4(0x109))
              : 0x0;
          $(this)["val"]() !== "" && _0x389805 >= _0x455481
            ? (empReqInput = empReqInput["filter"](
                (_0x57a288) => _0x57a288[_0x45d7b4(0x136)] !== _0x57c5b5
              ))
            : (!empReqInput[_0x45d7b4(0x11d)](
                (_0x408bf5) => _0x408bf5[_0x45d7b4(0x136)] === _0x57c5b5
              ) && empReqInput[_0x45d7b4(0xd1)]({ input: _0x57c5b5 }),
              unfilledArr[_0x45d7b4(0xd1)]({
                input: $(this)[_0x45d7b4(0x7b)]("name"),
              })),
            empReqInput[_0x45d7b4(0x90)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x14c35a(0x11d)](_0x14c35a(0x123))
        [_0x14c35a(0x138)](function (_0x4bc331) {
          const _0x25c823 = _0x14c35a;
          if ($(this)[_0x25c823(0x106)]() !== "") {
            let _0x37f3a2 = $(this)[_0x25c823(0x106)]()[_0x25c823(0x90)],
              _0xa66408 = $(this)[_0x25c823(0x10f)]("min-character")
                ? $(this)[_0x25c823(0x10f)](_0x25c823(0x109))
                : 0x0;
            if ($(this)["data"]("phone-autoformat")) {
              var _0x2b7d06 = phoneAutoFormat(
                $(this)[_0x25c823(0x10f)](_0x25c823(0x102))
              );
              $(this)["val"](_0x2b7d06($(this)["val"]()));
            }
            phoneValidation($(this)["val"](), _0x37f3a2, _0xa66408)
              ? (empReqTel = empReqTel[_0x25c823(0x12b)](
                  (_0x32335a) => _0x32335a[_0x25c823(0x136)] !== _0x4bc331
                ))
              : empReqTel[_0x25c823(0xd1)]({ input: _0x4bc331 });
          } else !empReqTel[_0x25c823(0x11d)]((_0x591d40) => _0x591d40[_0x25c823(0x136)] === _0x4bc331) && empReqTel[_0x25c823(0xd1)]({ input: _0x4bc331 }), unfilledArr[_0x25c823(0xd1)]({ input: $(this)[_0x25c823(0x7b)](_0x25c823(0x98)) });
          empReqTel[_0x25c823(0x90)] === 0x0
            ? (telFilled = !![])
            : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x14c35a(0x11d)](_0x14c35a(0xff))
        [_0x14c35a(0x138)](function (_0x5b1da7) {
          const _0x3f7164 = _0x14c35a;
          $(this)[_0x3f7164(0x106)]() !== ""
            ? (empReqFile = empReqFile[_0x3f7164(0x12b)](
                (_0x85cae4) => _0x85cae4[_0x3f7164(0x136)] !== _0x5b1da7
              ))
            : (!empReqFile["find"](
                (_0x40f455) => _0x40f455[_0x3f7164(0x136)] === _0x5b1da7
              ) && empReqFile[_0x3f7164(0xd1)]({ input: _0x5b1da7 }),
              unfilledArr["push"]({
                input: $(this)[_0x3f7164(0x7b)](_0x3f7164(0x98)),
              })),
            empReqFile[_0x3f7164(0x90)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x14c35a(0x11d)](":input[type=\x22number\x22][required]")
        [_0x14c35a(0x138)](function (_0x4bb8f8) {
          const _0x53510d = _0x14c35a;
          let _0x2a3837 = $(this)[_0x53510d(0x106)]()[_0x53510d(0x90)],
            _0x26d326 = $(this)[_0x53510d(0x10f)](_0x53510d(0x109))
              ? $(this)[_0x53510d(0x10f)]("min-character")
              : 0x0;
          $(this)[_0x53510d(0x106)]() !== "" && _0x2a3837 >= _0x26d326
            ? (empReqNum = empReqNum[_0x53510d(0x12b)](
                (_0x50445c) => _0x50445c[_0x53510d(0x136)] !== _0x4bb8f8
              ))
            : (!empReqNum[_0x53510d(0x11d)](
                (_0x26d47c) => _0x26d47c[_0x53510d(0x136)] === _0x4bb8f8
              ) && empReqNum[_0x53510d(0xd1)]({ input: _0x4bb8f8 }),
              unfilledArr[_0x53510d(0xd1)]({ input: $(this)["attr"]("name") })),
            empReqNum["length"] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x14c35a(0x11d)]("select[required]")
        [_0x14c35a(0x138)](function (_0x102532) {
          const _0x2579f2 = _0x14c35a;
          let _0x49d6c2 = $(this)[_0x2579f2(0x106)]();
          _0x49d6c2 === "" && (_0x49d6c2 = null),
            _0x49d6c2 != null
              ? (empReqSelect = empReqSelect[_0x2579f2(0x12b)](
                  (_0x8a68f8) => _0x8a68f8[_0x2579f2(0x136)] !== _0x102532
                ))
              : (!empReqSelect[_0x2579f2(0x11d)](
                  (_0x43095f) => _0x43095f[_0x2579f2(0x136)] === _0x102532
                ) && empReqSelect[_0x2579f2(0xd1)]({ input: _0x102532 }),
                unfilledArr[_0x2579f2(0xd1)]({
                  input: $(this)["attr"]("name"),
                })),
            empReqSelect["length"] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x14c35a(0x11d)](_0x14c35a(0x135))
        [_0x14c35a(0x138)](function (_0x558671) {
          const _0x1236c0 = _0x14c35a;
          let _0xf37a51 = $(this)[_0x1236c0(0x106)]()["length"],
            _0x157066 = $(this)["data"](_0x1236c0(0x109))
              ? $(this)[_0x1236c0(0x10f)](_0x1236c0(0x109))
              : 0x0;
          $(this)[_0x1236c0(0x106)]() !== "" && _0xf37a51 >= _0x157066
            ? (empReqTextarea = empReqTextarea[_0x1236c0(0x12b)](
                (_0x22b84e) => _0x22b84e["input"] !== _0x558671
              ))
            : (!empReqTextarea["find"](
                (_0x1a504e) => _0x1a504e[_0x1236c0(0x136)] === _0x558671
              ) && empReqTextarea[_0x1236c0(0xd1)]({ input: _0x558671 }),
              unfilledArr[_0x1236c0(0xd1)]({
                input: $(this)["attr"](_0x1236c0(0x98)),
              })),
            empReqTextarea[_0x1236c0(0x90)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x14c35a(0x11d)](_0x14c35a(0xe6))
        [_0x14c35a(0x138)](function () {
          const _0x48efef = _0x14c35a;
          $(this)["val"]() !== ""
            ? validateEmail(
                $(this)[_0x48efef(0x106)](),
                $(this)[_0x48efef(0x10f)](_0x48efef(0xd2)),
                $(this)["attr"](_0x48efef(0x98))
              )
            : ((emailFilled = ![]),
              unfilledArr[_0x48efef(0xd1)]({
                input: $(this)[_0x48efef(0x7b)](_0x48efef(0x98)),
              }));
        });
  else {
    if ($(steps[x])[_0x14c35a(0x10f)](_0x14c35a(0x139)))
      (answer = $(steps[x])
        [_0x14c35a(0x11d)](_0x14c35a(0x13a))
        [_0x14c35a(0x10f)](_0x14c35a(0xaf))),
        (selections = selections["filter"](
          (_0x1e2f5b) => _0x1e2f5b[_0x14c35a(0x9b)] !== x
        )),
        selections[_0x14c35a(0xd1)]({ step: x, selected: answer });
    else
      $(steps[x])
        [_0x14c35a(0x11d)](_0x14c35a(0xb8))
        [_0x14c35a(0x10f)](_0x14c35a(0x139)) &&
        ((answer = $(steps[x])
          [_0x14c35a(0x11d)](_0x14c35a(0xb8))
          [_0x14c35a(0x10f)](_0x14c35a(0xaf))),
        (selections = selections[_0x14c35a(0x12b)](
          (_0x2b59ff) => _0x2b59ff[_0x14c35a(0x9b)] !== x
        )),
        selections[_0x14c35a(0xd1)]({ step: x, selected: answer }));
    $(steps[x])
      [_0x14c35a(0x11d)](_0x14c35a(0xb8))
      [_0x14c35a(0x11d)](_0x14c35a(0xb4))
      ["is"](_0x14c35a(0xf6)) &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])["find"](":input[type=\x22checkbox\x22]")["length"]
        ? $(steps[x])
            ["find"](_0x14c35a(0x116))
            [_0x14c35a(0x138)](function () {
              const _0x3f0e52 = _0x14c35a;
              $(this)["is"](_0x3f0e52(0x164))
                ? $(steps[x])["find"](_0x3f0e52(0x117))[_0x3f0e52(0x90)] <
                    0x1 &&
                  ((skipTo = undefined),
                  $(this)
                    [_0x3f0e52(0x8c)](_0x3f0e52(0xef))
                    [_0x3f0e52(0x10f)](_0x3f0e52(0xde)) &&
                    (skipTo = $(this)
                      [_0x3f0e52(0x8c)](_0x3f0e52(0xef))
                      ["data"](_0x3f0e52(0xde))),
                  $(this)
                    ["parents"](_0x3f0e52(0x13a))
                    [_0x3f0e52(0x7b)](_0x3f0e52(0x118)) &&
                    ((answer = $(this)
                      [_0x3f0e52(0x8c)](_0x3f0e52(0x13a))
                      [_0x3f0e52(0x7b)](_0x3f0e52(0x118))),
                    (selections = selections[_0x3f0e52(0x12b)](
                      (_0x30b910) => _0x30b910[_0x3f0e52(0x9b)] !== x
                    )),
                    selections[_0x3f0e52(0xd1)]({ step: x, selected: answer }),
                    skipTo &&
                      (selections[_0x3f0e52(0xd1)]({
                        step: skipTo - 0x2,
                        selected: answer,
                      }),
                      (objIndex = selections[_0x3f0e52(0xb9)](
                        (_0x4be810) => _0x4be810[_0x3f0e52(0x9b)] === x
                      )),
                      (selections[objIndex][_0x3f0e52(0xc6)] =
                        parseInt(skipTo) - 0x1),
                      (selections[objIndex]["backTo"] = x))),
                  (checkboxFilled = !![]),
                  $(steps[x])[_0x3f0e52(0x11d)](
                    ":input[type=\x22checkbox\x22][required]:checked"
                  )[_0x3f0e52(0x90)] >=
                    $(steps[x])[_0x3f0e52(0x11d)](_0x3f0e52(0x9c))[
                      _0x3f0e52(0x90)
                    ] &&
                    resetInputErrorMessage(
                      $(steps[x])
                        ["find"](_0x3f0e52(0x116))
                        [_0x3f0e52(0x7b)]("name")
                    ))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0x3f0e52(0xd1)]({
                    input: $(this)["attr"](_0x3f0e52(0x98)),
                  }));
            })
        : $(steps[x])
            [_0x14c35a(0x11d)](_0x14c35a(0xb8))
            ["find"](_0x14c35a(0xbb))["length"] >= checkCount
        ? ($(steps[x])
            ["find"]("[data-answer]:visible")
            [_0x14c35a(0x11d)](_0x14c35a(0x116))
            [_0x14c35a(0x8c)](_0x14c35a(0x13a))
            [_0x14c35a(0x7b)](_0x14c35a(0x118)) &&
            ((skipTo = undefined),
            $(steps[x])
              [_0x14c35a(0x11d)](_0x14c35a(0xb8))
              ["find"](":input[type=\x22checkbox\x22]")
              [_0x14c35a(0x8c)](_0x14c35a(0xef))
              ["attr"]("data-skip-to") &&
              (skipTo = $(steps[x])
                [_0x14c35a(0x11d)](_0x14c35a(0xb8))
                [_0x14c35a(0x11d)](_0x14c35a(0xbb))
                ["parents"](_0x14c35a(0xef))
                [_0x14c35a(0x7b)](_0x14c35a(0xd0))),
            (answer = $(steps[x])
              [_0x14c35a(0x11d)]("[data-answer]:visible")
              [_0x14c35a(0x11d)](_0x14c35a(0x116))
              ["parents"]("[data-go-to]")
              ["attr"](_0x14c35a(0x118))),
            (selections = selections[_0x14c35a(0x12b)](
              (_0x4bfa84) => _0x4bfa84[_0x14c35a(0x9b)] !== x
            )),
            selections[_0x14c35a(0xd1)]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0x14c35a(0xd1)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0x14c35a(0xb9)](
                (_0x2cf911) => _0x2cf911[_0x14c35a(0x9b)] === x
              )),
              (selections[objIndex][_0x14c35a(0xc6)] = parseInt(skipTo) - 0x1),
              (selections[objIndex]["backTo"] = x))),
          (selections = selections[_0x14c35a(0x12b)](
            (_0x2a839e) => _0x2a839e[_0x14c35a(0x9b)] !== x
          )),
          selections[_0x14c35a(0xd1)]({ step: x, selected: answer }),
          (checkboxFilled = !![]),
          $(steps[x])[_0x14c35a(0x11d)](
            ":input[type=\x22checkbox\x22][required]:checked"
          )[_0x14c35a(0x90)] >=
            $(steps[x])[_0x14c35a(0x11d)](_0x14c35a(0x9c))[_0x14c35a(0x90)] &&
            resetInputErrorMessage(
              $(steps[x])
                [_0x14c35a(0x11d)](_0x14c35a(0x116))
                ["attr"](_0x14c35a(0x98))
            ))
        : ((checkboxFilled = ![]),
          $(steps[x])
            [_0x14c35a(0x11d)](_0x14c35a(0x9c))
            ["each"](function () {
              const _0x522d0d = _0x14c35a;
              $(this)[_0x522d0d(0x8e)](":checked") &&
                unfilledArr["push"]({
                  input: $(this)["attr"](_0x522d0d(0x98)),
                });
            }))),
      $(steps[x])
        [_0x14c35a(0x11d)](_0x14c35a(0xb8))
        [_0x14c35a(0x11d)](_0x14c35a(0xc4))
        [_0x14c35a(0x138)](function (_0x2380c1) {
          const _0x3374f8 = _0x14c35a;
          var _0x2b0ec5 = $(this)[_0x3374f8(0x7b)](_0x3374f8(0x98));
          $(_0x3374f8(0x170) + _0x2b0ec5 + "\x22]:checked")["length"] == 0x0
            ? (!empReqRadio[_0x3374f8(0x11d)](
                (_0x30af52) => _0x30af52[_0x3374f8(0x136)] === _0x2380c1
              ) && empReqRadio[_0x3374f8(0xd1)]({ input: _0x2380c1 }),
              unfilledArr["push"]({ input: $(this)["attr"](_0x3374f8(0x98)) }))
            : (empReqRadio = empReqRadio["filter"](
                (_0x2e8aba) => _0x2e8aba[_0x3374f8(0x136)] !== _0x2380c1
              )),
            empReqRadio["length"] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x14c35a(0xb8))
        [_0x14c35a(0x11d)](":input[type=\x22text\x22][required]")
        [_0x14c35a(0x138)](function (_0x3d2bf1) {
          const _0x1c36a4 = _0x14c35a;
          let _0x5dbd58 = $(this)[_0x1c36a4(0x106)]()[_0x1c36a4(0x90)],
            _0x2b295b = $(this)[_0x1c36a4(0x10f)](_0x1c36a4(0x109))
              ? $(this)[_0x1c36a4(0x10f)](_0x1c36a4(0x109))
              : 0x0;
          $(this)[_0x1c36a4(0x106)]() !== "" && _0x5dbd58 >= _0x2b295b
            ? (empReqInput = empReqInput["filter"](
                (_0x3d781f) => _0x3d781f[_0x1c36a4(0x136)] !== _0x3d2bf1
              ))
            : (!empReqInput[_0x1c36a4(0x11d)](
                (_0x255247) => _0x255247["input"] === _0x3d2bf1
              ) && empReqInput[_0x1c36a4(0xd1)]({ input: _0x3d2bf1 }),
              unfilledArr[_0x1c36a4(0xd1)]({
                input: $(this)[_0x1c36a4(0x7b)](_0x1c36a4(0x98)),
              })),
            empReqInput[_0x1c36a4(0x90)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x14c35a(0x11d)](_0x14c35a(0xb8))
        [_0x14c35a(0x11d)](_0x14c35a(0x16b))
        [_0x14c35a(0x138)](function (_0x271336) {
          const _0xbfa0e3 = _0x14c35a;
          (skipTo = undefined),
            $(this)
              [_0xbfa0e3(0x8c)]("[data-skip-to]")
              ["data"](_0xbfa0e3(0xde)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0xbfa0e3(0xef))
                ["data"](_0xbfa0e3(0xde))),
            $(this)
              ["parents"](_0xbfa0e3(0x13a))
              [_0xbfa0e3(0x7b)](_0xbfa0e3(0x118)) &&
              ((answer = $(this)
                [_0xbfa0e3(0x8c)](_0xbfa0e3(0x13a))
                [_0xbfa0e3(0x7b)](_0xbfa0e3(0x118))),
              (selections = selections[_0xbfa0e3(0x12b)](
                (_0x5d4ae8) => _0x5d4ae8[_0xbfa0e3(0x9b)] !== x
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections["findIndex"](
                  (_0x574b70) => _0x574b70[_0xbfa0e3(0x9b)] === x
                )),
                (selections[objIndex][_0xbfa0e3(0xc6)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0xbfa0e3(0xfc)] = x)));
        }),
      $(steps[x])
        [_0x14c35a(0x11d)](_0x14c35a(0xb8))
        ["find"](_0x14c35a(0x7f))
        [_0x14c35a(0x138)](function (_0x3fcb08) {
          const _0x568cfd = _0x14c35a;
          let _0x4f28fd = $(this)["val"]()[_0x568cfd(0x90)],
            _0x213bed = $(this)["data"](_0x568cfd(0x109))
              ? $(this)[_0x568cfd(0x10f)]("min-character")
              : 0x0;
          $(this)[_0x568cfd(0x106)]() !== "" && _0x4f28fd >= _0x213bed
            ? (empReqNum = empReqNum[_0x568cfd(0x12b)](
                (_0x57d6c9) => _0x57d6c9["input"] !== _0x3fcb08
              ))
            : (!empReqNum[_0x568cfd(0x11d)](
                (_0x1b4db7) => _0x1b4db7[_0x568cfd(0x136)] === _0x3fcb08
              ) && empReqNum["push"]({ input: _0x3fcb08 }),
              unfilledArr[_0x568cfd(0xd1)]({
                input: $(this)[_0x568cfd(0x7b)]("name"),
              })),
            empReqNum["length"] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        ["find"]("[data-answer]:visible")
        [_0x14c35a(0x11d)](_0x14c35a(0x122))
        [_0x14c35a(0x138)](function (_0x160b6d) {
          const _0x1ce775 = _0x14c35a;
          (skipTo = undefined),
            $(this)["parents"](_0x1ce775(0xef))["data"](_0x1ce775(0xde)) !==
              "" &&
              (skipTo = $(this)
                [_0x1ce775(0x8c)](_0x1ce775(0xef))
                ["data"](_0x1ce775(0xde))),
            $(this)
              [_0x1ce775(0x8c)]("[data-go-to]")
              ["attr"](_0x1ce775(0x118)) &&
              ((answer = $(this)
                [_0x1ce775(0x8c)](_0x1ce775(0x13a))
                ["attr"](_0x1ce775(0x118))),
              (selections = selections[_0x1ce775(0x12b)](
                (_0x2c3f6a) => _0x2c3f6a[_0x1ce775(0x9b)] !== x
              )),
              selections[_0x1ce775(0xd1)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x1ce775(0xd1)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x59255b) => _0x59255b[_0x1ce775(0x9b)] === x
                )),
                (selections[objIndex][_0x1ce775(0xc6)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x1ce775(0xfc)] = x)));
        }),
      $(steps[x])
        ["find"](_0x14c35a(0xb8))
        [_0x14c35a(0x11d)](_0x14c35a(0x123))
        ["each"](function (_0x23f70b) {
          const _0x57a0f8 = _0x14c35a;
          if ($(this)["val"]() !== "") {
            let _0x3d74a9 = $(this)[_0x57a0f8(0x106)]()[_0x57a0f8(0x90)],
              _0x10b83e = $(this)[_0x57a0f8(0x10f)](_0x57a0f8(0x109))
                ? $(this)[_0x57a0f8(0x10f)](_0x57a0f8(0x109))
                : 0x0;
            if ($(this)[_0x57a0f8(0x10f)]("phone-autoformat")) {
              var _0x1fd22b = phoneAutoFormat(
                $(this)[_0x57a0f8(0x10f)](_0x57a0f8(0x102))
              );
              $(this)["val"](_0x1fd22b($(this)[_0x57a0f8(0x106)]()));
            }
            phoneValidation($(this)[_0x57a0f8(0x106)](), _0x3d74a9, _0x10b83e)
              ? (empReqTel = empReqTel["filter"](
                  (_0x441b39) => _0x441b39["input"] !== _0x23f70b
                ))
              : empReqTel[_0x57a0f8(0xd1)]({ input: _0x23f70b });
          } else !empReqTel[_0x57a0f8(0x11d)]((_0x1576c6) => _0x1576c6[_0x57a0f8(0x136)] === _0x23f70b) && empReqTel[_0x57a0f8(0xd1)]({ input: _0x23f70b }), unfilledArr[_0x57a0f8(0xd1)]({ input: $(this)[_0x57a0f8(0x7b)](_0x57a0f8(0x98)) });
          empReqTel[_0x57a0f8(0x90)] === 0x0
            ? (telFilled = !![])
            : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x14c35a(0x11d)](_0x14c35a(0xb8))
        [_0x14c35a(0x11d)](":input[type=\x22tel\x22]")
        ["each"](function (_0x3e31b3) {
          const _0x20d2c3 = _0x14c35a;
          (skipTo = undefined),
            $(this)
              [_0x20d2c3(0x8c)](_0x20d2c3(0xef))
              [_0x20d2c3(0x10f)](_0x20d2c3(0xde)) !== "" &&
              (skipTo = $(this)
                [_0x20d2c3(0x8c)](_0x20d2c3(0xef))
                ["data"](_0x20d2c3(0xde))),
            $(this)
              [_0x20d2c3(0x8c)](_0x20d2c3(0x13a))
              [_0x20d2c3(0x7b)](_0x20d2c3(0x118)) &&
              ((answer = $(this)
                [_0x20d2c3(0x8c)]("[data-go-to]")
                [_0x20d2c3(0x7b)](_0x20d2c3(0x118))),
              (selections = selections[_0x20d2c3(0x12b)](
                (_0x19741c) => _0x19741c["step"] !== x
              )),
              selections[_0x20d2c3(0xd1)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x20d2c3(0xd1)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x2329ed) => _0x2329ed[_0x20d2c3(0x9b)] === x
                )),
                (selections[objIndex][_0x20d2c3(0xc6)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x14c35a(0x11d)](_0x14c35a(0xb8))
        ["find"](_0x14c35a(0xff))
        [_0x14c35a(0x138)](function (_0x377543) {
          const _0x402768 = _0x14c35a;
          $(this)[_0x402768(0x106)]() !== ""
            ? (empReqFile = empReqFile["filter"](
                (_0x5e6951) => _0x5e6951[_0x402768(0x136)] !== _0x377543
              ))
            : (!empReqFile[_0x402768(0x11d)](
                (_0x5c6e9b) => _0x5c6e9b[_0x402768(0x136)] === _0x377543
              ) && empReqFile[_0x402768(0xd1)]({ input: _0x377543 }),
              unfilledArr[_0x402768(0xd1)]({
                input: $(this)["attr"](_0x402768(0x98)),
              })),
            empReqFile[_0x402768(0x90)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x14c35a(0x11d)](_0x14c35a(0xb8))
        [_0x14c35a(0x11d)](_0x14c35a(0x119))
        [_0x14c35a(0x138)](function (_0x256aa5) {
          const _0x2e0da6 = _0x14c35a;
          (skipTo = undefined),
            $(this)
              [_0x2e0da6(0x8c)](_0x2e0da6(0xef))
              [_0x2e0da6(0x10f)](_0x2e0da6(0xde)) !== "" &&
              (skipTo = $(this)
                [_0x2e0da6(0x8c)]("[data-skip-to]")
                [_0x2e0da6(0x10f)](_0x2e0da6(0xde))),
            $(this)
              [_0x2e0da6(0x8c)]("[data-go-to]")
              ["attr"](_0x2e0da6(0x118)) &&
              ((answer = $(this)
                [_0x2e0da6(0x8c)]("[data-go-to]")
                ["attr"]("data-go-to")),
              (selections = selections[_0x2e0da6(0x12b)](
                (_0x241605) => _0x241605[_0x2e0da6(0x9b)] !== x
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x2e0da6(0xd1)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x2e0da6(0xb9)](
                  (_0x63c32e) => _0x63c32e[_0x2e0da6(0x9b)] === x
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x2e0da6(0xfc)] = x)));
        }),
      $(steps[x])
        [_0x14c35a(0x11d)](_0x14c35a(0xb8))
        [_0x14c35a(0x11d)](_0x14c35a(0x125))
        [_0x14c35a(0x138)](function (_0x4d9542) {
          const _0x1e0452 = _0x14c35a;
          $(this)[_0x1e0452(0x106)]() !== ""
            ? (empReqSelect = empReqSelect[_0x1e0452(0x12b)](
                (_0x4cd3a1) => _0x4cd3a1[_0x1e0452(0x136)] !== _0x4d9542
              ))
            : (!empReqSelect["find"](
                (_0x5897be) => _0x5897be["input"] === _0x4d9542
              ) && empReqSelect[_0x1e0452(0xd1)]({ input: _0x4d9542 }),
              unfilledArr[_0x1e0452(0xd1)]({
                input: $(this)[_0x1e0452(0x7b)](_0x1e0452(0x98)),
              })),
            empReqSelect["length"] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x14c35a(0x11d)](_0x14c35a(0xb8))
        [_0x14c35a(0x11d)](_0x14c35a(0xd4))
        [_0x14c35a(0x138)](function (_0x1878f2) {
          const _0x529b65 = _0x14c35a;
          (skipTo = undefined),
            $(this)
              [_0x529b65(0x8c)](_0x529b65(0xef))
              [_0x529b65(0x10f)]("skip-to") !== "" &&
              (skipTo = $(this)
                ["parents"]("[data-skip-to]")
                [_0x529b65(0x10f)](_0x529b65(0xde))),
            $(this)
              ["parents"](_0x529b65(0x13a))
              [_0x529b65(0x7b)]("data-go-to") &&
              ((answer = $(this)
                [_0x529b65(0x8c)]("[data-go-to]")
                ["attr"](_0x529b65(0x118))),
              (selections = selections["filter"](
                (_0x1c7d54) => _0x1c7d54[_0x529b65(0x9b)] !== x
              )),
              selections[_0x529b65(0xd1)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x529b65(0xd1)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x529b65(0xb9)](
                  (_0x2f7bea) => _0x2f7bea[_0x529b65(0x9b)] === x
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x529b65(0xfc)] = x)));
        }),
      $(steps[x])
        ["find"](_0x14c35a(0xb8))
        [_0x14c35a(0x11d)]("textarea[required]")
        [_0x14c35a(0x138)](function (_0x5204c7) {
          const _0x3426d3 = _0x14c35a;
          let _0x58120c = $(this)[_0x3426d3(0x106)]()[_0x3426d3(0x90)],
            _0x4997fd = $(this)[_0x3426d3(0x10f)](_0x3426d3(0x109))
              ? $(this)[_0x3426d3(0x10f)](_0x3426d3(0x109))
              : 0x0;
          $(this)[_0x3426d3(0x106)]() !== "" && _0x58120c >= _0x4997fd
            ? (empReqTextarea = empReqTextarea[_0x3426d3(0x12b)](
                (_0x46c28f) => _0x46c28f[_0x3426d3(0x136)] !== _0x5204c7
              ))
            : (!empReqTextarea[_0x3426d3(0x11d)](
                (_0x41348c) => _0x41348c[_0x3426d3(0x136)] === _0x5204c7
              ) && empReqTextarea[_0x3426d3(0xd1)]({ input: _0x5204c7 }),
              unfilledArr[_0x3426d3(0xd1)]({
                input: $(this)[_0x3426d3(0x7b)](_0x3426d3(0x98)),
              })),
            empReqTextarea[_0x3426d3(0x90)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x14c35a(0x11d)](_0x14c35a(0xb8))
        [_0x14c35a(0x11d)]("textarea")
        [_0x14c35a(0x138)](function (_0x1d67ed) {
          const _0x7f2d50 = _0x14c35a;
          (skipTo = undefined),
            $(this)
              [_0x7f2d50(0x8c)](_0x7f2d50(0xef))
              ["data"](_0x7f2d50(0xde)) !== "" &&
              (skipTo = $(this)
                ["parents"]("[data-skip-to]")
                [_0x7f2d50(0x10f)]("skip-to")),
            $(this)
              [_0x7f2d50(0x8c)]("[data-go-to]")
              [_0x7f2d50(0x7b)](_0x7f2d50(0x118)) &&
              ((answer = $(this)
                ["parents"](_0x7f2d50(0x13a))
                [_0x7f2d50(0x7b)](_0x7f2d50(0x118))),
              (selections = selections["filter"](
                (_0x566933) => _0x566933[_0x7f2d50(0x9b)] !== x
              )),
              selections[_0x7f2d50(0xd1)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x7f2d50(0xd1)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x5195e4) => _0x5195e4["step"] === x
                )),
                (selections[objIndex][_0x7f2d50(0xc6)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x7f2d50(0xfc)] = x)));
        }),
      $(steps[x])
        [_0x14c35a(0x11d)](_0x14c35a(0xb8))
        [_0x14c35a(0x11d)](_0x14c35a(0xe6))
        [_0x14c35a(0x138)](function (_0x343923) {
          const _0x4e6868 = _0x14c35a;
          $(this)[_0x4e6868(0x106)]() !== ""
            ? validateEmail(
                $(this)["val"](),
                $(this)[_0x4e6868(0x10f)](_0x4e6868(0xd2)),
                $(this)[_0x4e6868(0x7b)](_0x4e6868(0x98))
              )
            : ((emailFilled = ![]),
              unfilledArr[_0x4e6868(0xd1)]({
                input: $(this)[_0x4e6868(0x7b)](_0x4e6868(0x98)),
              }));
        }),
      $(steps[x])
        ["find"]("[data-answer]:visible")
        [_0x14c35a(0x11d)](_0x14c35a(0x11a))
        [_0x14c35a(0x138)](function (_0x548cf0) {
          const _0x4e719e = _0x14c35a;
          (skipTo = undefined),
            $(this)["parents"](_0x4e719e(0xef))["data"](_0x4e719e(0xde)) !==
              "" &&
              (skipTo = $(this)
                [_0x4e719e(0x8c)](_0x4e719e(0xef))
                [_0x4e719e(0x10f)](_0x4e719e(0xde))),
            $(this)
              [_0x4e719e(0x8c)](_0x4e719e(0x13a))
              [_0x4e719e(0x7b)](_0x4e719e(0x118)) &&
              ((answer = $(this)
                [_0x4e719e(0x8c)]("[data-go-to]")
                ["attr"](_0x4e719e(0x118))),
              (selections = selections[_0x4e719e(0x12b)](
                (_0x5a4cc3) => _0x5a4cc3[_0x4e719e(0x9b)] !== x
              )),
              selections[_0x4e719e(0xd1)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x4e719e(0xd1)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x4e719e(0xb9)](
                  (_0x134012) => _0x134012[_0x4e719e(0x9b)] === x
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x4e719e(0xfc)] = x)));
        });
  }
  $(steps[x])[_0x14c35a(0x11d)](_0x14c35a(0xb6))["is"](":checked") &&
    ((selArr = []),
    $(steps)
      [_0x14c35a(0x11d)](_0x14c35a(0xa3))
      ["each"](function (_0x1adb9b, _0x46880c) {
        const _0x34cd00 = _0x14c35a;
        selArr[_0x34cd00(0xd1)]({
          selected: $(this)["data"](_0x34cd00(0x101)),
        });
      }),
    (selString = []),
    selArr[_0x14c35a(0xa6)]((_0x1e10b2) =>
      selString[_0x14c35a(0xd1)](_0x1e10b2[_0x14c35a(0x101)])
    ),
    (selections = selections["filter"](
      (_0x33293f) => _0x33293f[_0x14c35a(0x9b)] !== x
    )),
    $(steps[x])
      [_0x14c35a(0x11d)](_0x14c35a(0xb8))
      [_0x14c35a(0x11d)](_0x14c35a(0x9f))
      [_0x14c35a(0x138)](function () {
        const _0xff0042 = _0x14c35a;
        skipTo = undefined;
        if ($(this)["parents"]("[data-skip-to]")["data"]("skip-to"))
          skipTo = $(this)
            [_0xff0042(0x8c)]("[data-skip-to]")
            [_0xff0042(0x10f)](_0xff0042(0xde));
        else
          $(this)["data"](_0xff0042(0xde)) &&
            (skipTo = $(this)["data"](_0xff0042(0xde)));
        if ($(this)[_0xff0042(0x10f)](_0xff0042(0xaf)))
          (answer = $(this)["attr"](_0xff0042(0x118))),
            selections[_0xff0042(0xd1)]({ step: x, selected: answer }),
            skipTo &&
              (selections["push"]({ step: skipTo - 0x2, selected: answer }),
              (objIndex = selections[_0xff0042(0xb9)](
                (_0x1e4513) => _0x1e4513[_0xff0042(0x9b)] === x
              )),
              (selections[objIndex][_0xff0042(0xc6)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0xff0042(0xfc)] = x));
        else
          $(this)[_0xff0042(0x8c)]("[data-go-to]")[_0xff0042(0x10f)]("go-to") &&
            ((answer = $(this)
              ["parents"]("[data-go-to]")
              [_0xff0042(0x10f)]("go-to")),
            selections[_0xff0042(0xd1)]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0xff0042(0xd1)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections["findIndex"](
                (_0xa44f1) => _0xa44f1[_0xff0042(0x9b)] === x
              )),
              (selections[objIndex][_0xff0042(0xc6)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0xff0042(0xfc)] = x)));
      }),
    logicExtra
      ? ($(steps[x])
          [_0x14c35a(0x11d)]("[data-answer]:visible")
          [_0x14c35a(0x11d)](_0x14c35a(0xed))
          [_0x14c35a(0x10f)](_0x14c35a(0xe1)) === !![] ||
          $(steps[x])
            [_0x14c35a(0x11d)](_0x14c35a(0x15c))
            ["data"]("radio-skip") === !![]) &&
        skip &&
        selections["filter"]((_0x35057d) => _0x35057d[_0x14c35a(0x9b)] === x)[
          "length"
        ] > 0x0 &&
        textareaLength === 0x0 &&
        textInputLength === 0x0 &&
        emailInputLength === 0x0 &&
        checkboxInputLength === 0x0 &&
        setTimeout(function () {
          (next = !![]), nextStep(), selectionQuiz();
        }, $(steps[x])["find"]("[data-radio-delay]")["data"](_0x14c35a(0xe5)))
      : $(steps[x])
          [_0x14c35a(0x11d)]("[data-radio-skip]:visible")
          [_0x14c35a(0x10f)]("radio-skip") === !![] &&
        skip &&
        textareaLength === 0x0 &&
        textInputLength === 0x0 &&
        emailInputLength === 0x0 &&
        checkboxInputLength === 0x0 &&
        setTimeout(function () {
          (next = !![]), nextStep(), selectionQuiz();
        }, $(steps[x])
          [_0x14c35a(0x11d)](_0x14c35a(0x131))
          [_0x14c35a(0x10f)]("radio-delay"))),
    inputFilled &&
    fileFilled &&
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
function displayErrorMessage() {
  const _0x9f332a = _0x4df898;
  $(_0x9f332a(0xcf))[_0x9f332a(0xbf)](),
    unfilledArr[_0x9f332a(0x90)] > 0x0 &&
      unfilledArr[_0x9f332a(0xa6)](function (_0x4d1615) {
        const _0x4bc256 = _0x9f332a;
        $(_0x4bc256(0x14b) + _0x4d1615[_0x4bc256(0x136)] + "\x22]")
          [_0x4bc256(0xbc)](_0x4bc256(0xcf))
          [_0x4bc256(0x96)](),
          $("input[name=\x22" + _0x4d1615[_0x4bc256(0x136)] + "\x22]")
            [_0x4bc256(0x8c)]()
            [_0x4bc256(0x95)](_0x4bc256(0xcf))
            [_0x4bc256(0x96)](),
          $("textarea[name=\x22" + _0x4d1615[_0x4bc256(0x136)] + "\x22]")
            [_0x4bc256(0xbc)](_0x4bc256(0xcf))
            [_0x4bc256(0x96)](),
          $(_0x4bc256(0xab) + _0x4d1615["input"] + "\x22]")
            ["siblings"]("[data-text=\x22error-message\x22]")
            ["fadeIn"]();
      });
}
function resetInputErrorMessage(_0x471096) {
  const _0x5bc6a4 = _0x4df898;
  $("input[name=\x22" + _0x471096 + "\x22]")
    [_0x5bc6a4(0xbc)]("[data-text=\x22error-message\x22]")
    [_0x5bc6a4(0xbf)](),
    $(_0x5bc6a4(0x14b) + _0x471096 + "\x22]")
      [_0x5bc6a4(0x8c)]()
      [_0x5bc6a4(0x95)](_0x5bc6a4(0xcf))
      ["hide"](),
    $(_0x5bc6a4(0x137) + _0x471096 + "\x22]")
      [_0x5bc6a4(0xbc)](_0x5bc6a4(0xcf))
      [_0x5bc6a4(0xbf)](),
    $("select[name=\x22" + _0x471096 + "\x22]")
      [_0x5bc6a4(0xbc)](_0x5bc6a4(0xcf))
      ["hide"]();
}
function nextStep() {
  const _0x3db119 = _0x4df898;
  customError
    ? ($(_0x3db119(0xcf))[_0x3db119(0xbf)](),
      fill
        ? (x++,
          countCard
            ? ((curStep = curStep + 0x1),
              $(_0x3db119(0x144))[_0x3db119(0x134)](steps["length"]))
            : $(steps[x])["data"](_0x3db119(0x139))
            ? (curStep = curStep + 0x0)
            : (curStep = curStep + 0x1),
          $(_0x3db119(0x97))["text"](curStep),
          (progress = x),
          x <= steps[_0x3db119(0x90)] - 0x1 &&
            (updateStep(), memory && saveFilledInput()))
        : displayErrorMessage())
    : (x++,
      countCard
        ? ((curStep = curStep + 0x1),
          $(_0x3db119(0x144))[_0x3db119(0x134)](steps["length"]))
        : $(steps[x])[_0x3db119(0x10f)](_0x3db119(0x139))
        ? (curStep = curStep + 0x0)
        : (curStep = curStep + 0x1),
      $("[data-text=\x22current-step\x22]")[_0x3db119(0x134)](curStep),
      x > progress && (progress = x),
      x <= steps["length"] - 0x1 &&
        (updateStep(), memory && saveFilledInput()));
}
function backStep() {
  const _0x87456e = _0x4df898;
  customError && $(_0x87456e(0xcf))[_0x87456e(0xbf)](),
    countCard
      ? ((curStep = curStep - 0x1),
        $(_0x87456e(0x144))["text"](steps["length"]))
      : $(steps[x])[_0x87456e(0x10f)](_0x87456e(0x139))
      ? (curStep = curStep - 0x0)
      : (curStep = curStep - 0x1),
    $(_0x87456e(0x97))[_0x87456e(0x134)](curStep),
    x > 0x0 &&
      ($(progressbar[x])[_0x87456e(0xa8)]("current"),
      selections[_0x87456e(0x12b)](
        (_0x37e4ab) => _0x37e4ab[_0x87456e(0xc6)] === x
      )[_0x87456e(0x90)] > 0x0
        ? (x = parseInt(
            getSafe(
              () =>
                selections[_0x87456e(0x12b)](
                  (_0x479c41) => _0x479c41["skipTo"] === x
                )[0x0][_0x87456e(0xfc)]
            )
          ))
        : x--,
      updateStep()),
    ($(steps[x])
      [_0x87456e(0x11d)](_0x87456e(0xed))
      [_0x87456e(0x10f)]("radio-skip") === !![] ||
      $(steps[x])
        [_0x87456e(0x11d)](_0x87456e(0xb8))
        [_0x87456e(0x11d)](_0x87456e(0xed))
        [_0x87456e(0x10f)](_0x87456e(0xe1)) === !![] ||
      $(steps[x])
        [_0x87456e(0x11d)](_0x87456e(0x15c))
        [_0x87456e(0x10f)](_0x87456e(0xe1)) === !![]) &&
      ($(steps[x])
        ["find"](_0x87456e(0xf7))
        [_0x87456e(0x83)](_0x87456e(0x157), ![]),
      $(steps[x])
        [_0x87456e(0x11d)](".w-form-formradioinput")
        [_0x87456e(0xa8)](_0x87456e(0xe8)),
      validation());
}
weightedSelectionRange &&
  $(_0x4df898(0x148))[_0x4df898(0x138)](function () {
    const _0x528dc5 = _0x4df898;
    $(this)["append"](
      _0x528dc5(0x16f) +
        $(this)[_0x528dc5(0x10f)](_0x528dc5(0x10d)) +
        _0x528dc5(0x79)
    );
  });
function selectionQuiz() {
  const _0x18f94b = _0x4df898;
  if ($(this)["find"](_0x18f94b(0x168))) {
    $(_0x18f94b(0x148))[_0x18f94b(0xbf)](),
      $("[data-selection-weight]")[_0x18f94b(0xbf)]();
    if (weightedSelection) {
      (selTotal = 0x0),
        selArr[_0x18f94b(0xa6)](function (_0x4aaa43) {
          selTotal = selTotal + _0x4aaa43["selected"];
        }),
        $(_0x18f94b(0x7a))[_0x18f94b(0x134)](selTotal);
      if ($(_0x18f94b(0x14a) + selTotal + "\x22]")[_0x18f94b(0x90)] > 0x0)
        $(_0x18f94b(0x14a) + selTotal + "\x22]")[_0x18f94b(0x96)]();
      else
        $("[data-range]:contains(" + selTotal + ")")
          ? $("[data-range]:contains(" + selTotal + ")")
              [_0x18f94b(0xfa)]("[data-selection]")
              ["eq"](0x0)
              [_0x18f94b(0x14e)]()
          : $("[data-selection=\x22other\x22]")[_0x18f94b(0x96)]();
    } else {
      let _0x16a839 = -0x1;
      $(_0x18f94b(0x148))["each"](function (_0x1b659f) {
        const _0x5001ac = _0x18f94b;
        $($(_0x5001ac(0x148))[_0x1b659f])
          [_0x5001ac(0x10f)](_0x5001ac(0x10d))
          [_0x5001ac(0xf0)](selString["join"]()) && (_0x16a839 = _0x1b659f);
      }),
        _0x16a839 > -0x1
          ? $($(_0x18f94b(0x148))[_0x16a839])[_0x18f94b(0x96)]()
          : $("[data-selection=\x22other\x22]")[_0x18f94b(0x96)]();
    }
  }
}
function triggerInputAllData() {
  const _0x387f63 = _0x4df898;
  savedFilledInput &&
    memory &&
    savedFilledInput[_0x387f63(0xa6)]((_0x18990a) => {
      const _0x19681b = _0x387f63;
      if (
        $(
          _0x19681b(0x14b) +
            _0x18990a[_0x19681b(0x149)] +
            _0x19681b(0x152) +
            _0x18990a[_0x19681b(0x171)] +
            "\x22]"
        )[_0x19681b(0x7b)](_0x19681b(0x14f)) === "radio"
      )
        $(
          _0x19681b(0x14b) +
            _0x18990a[_0x19681b(0x149)] +
            _0x19681b(0x152) +
            _0x18990a["value"] +
            "\x22]"
        )["trigger"](_0x19681b(0x136));
      else
        _0x18990a[_0x19681b(0x171)] === "on"
          ? $(_0x19681b(0x14b) + _0x18990a["inputName"] + "\x22]")["trigger"](
              "input"
            )
          : ($("input[name=\x22" + _0x18990a["inputName"] + "\x22]")["trigger"](
              _0x19681b(0x136)
            ),
            $(_0x19681b(0x14b) + _0x18990a["inputName"] + "\x22]")[
              _0x19681b(0x103)
            ](_0x19681b(0x113)));
    });
}
$("[data-form=\x22next-btn\x22]")["on"](_0x4df898(0xe0), function () {
  (next = !![]), nextStep(), selectionQuiz();
}),
  $(_0x4df898(0x16e))["on"](_0x4df898(0xe0), function () {
    (next = ![]), (back = !![]), backStep();
  }),
  $(steps)
    [_0x4df898(0x11d)](_0x4df898(0xb4))
    ["on"](_0x4df898(0x136), function (_0x592397) {
      const _0x49cfd5 = _0x4df898;
      $(this)[_0x49cfd5(0x7b)](_0x49cfd5(0x14f)) === _0x49cfd5(0x150) &&
        (skip = !![]),
        validation();
    });
$(_0x4df898(0x128))[_0x4df898(0x10f)](_0x4df898(0xb7))
  ? $(_0x4df898(0xfb))[_0x4df898(0xa8)](_0x4df898(0xca))
  : $("[data-form=\x22custom-progress-indicator\x22]")[_0x4df898(0x143)](
      _0x4df898(0xca)
    );
function clickableIndicator() {
  const _0x17bf62 = _0x4df898;
  $(_0x17bf62(0x11c))["data"](_0x17bf62(0xd5)) &&
    ($(_0x17bf62(0x12e))[_0x17bf62(0xa8)](_0x17bf62(0x8f)),
    $(_0x17bf62(0x11c))["data"](_0x17bf62(0xb7))
      ? ((x = $(this)["index"]()), updateStep())
      : $(this)[_0x17bf62(0x15f)]() <= progress &&
        ((x = $(this)[_0x17bf62(0x15f)]()), updateStep()));
}
$(_0x4df898(0xfb))["on"](_0x4df898(0xe0), clickableIndicator);
$("[data-form=\x22multistep\x22]")[_0x4df898(0x10f)](_0x4df898(0x7d)) &&
  ($(_0x4df898(0x13a))[_0x4df898(0x138)](function () {
    const _0x204e89 = _0x4df898;
    $(this)[_0x204e89(0xb1)](
      "<br>Data\x20Go\x20To\x20=\x20",
      $(this)["data"](_0x204e89(0xaf))
    );
  }),
  $(_0x4df898(0x133))[_0x4df898(0x138)](function () {
    const _0x4b1192 = _0x4df898;
    $(this)["append"](_0x4b1192(0xf8), $(this)[_0x4b1192(0x10f)]("answer"));
  }));
$(_0x4df898(0x7c))["on"](_0x4df898(0xe0), function (_0x399c85) {
  const _0x1cbbb1 = _0x4df898;
  $(this)[_0x1cbbb1(0x10f)]("redirect") &&
    (redirectTo = $(this)[_0x1cbbb1(0x10f)](_0x1cbbb1(0x147))),
    !$(this)["data"](_0x1cbbb1(0x13c)) &&
      (newTab = $(this)[_0x1cbbb1(0x10f)](_0x1cbbb1(0x13c))),
    (successCard = $(this)[_0x1cbbb1(0x10f)]("success")),
    _0x399c85[_0x1cbbb1(0x14d)](),
    _0x399c85[_0x1cbbb1(0xcd)](),
    logicExtra &&
      ($(this)[_0x1cbbb1(0x83)](_0x1cbbb1(0xf2), !![]),
      $(steps)["find"](_0x1cbbb1(0xb4))["prop"](_0x1cbbb1(0x15e), ![])),
    localStorage[_0x1cbbb1(0xa0)](_0x1cbbb1(0x13e)),
    fill &&
      ($(this)[_0x1cbbb1(0x10f)](_0x1cbbb1(0xad))
        ? $(this)[_0x1cbbb1(0x106)]($(this)[_0x1cbbb1(0x10f)](_0x1cbbb1(0xad)))
        : ($(this)[_0x1cbbb1(0x106)](_0x1cbbb1(0x81)),
          $(this)["text"](_0x1cbbb1(0x81))),
      $(_0x1cbbb1(0x8b))[_0x1cbbb1(0x9e)](),
      $(_0x1cbbb1(0x15b))[_0x1cbbb1(0x90)] > 0x0 &&
        grecaptcha["getResponse"]()[_0x1cbbb1(0x90)] === 0x0 &&
        (form[_0x1cbbb1(0x11d)]("[data-form=\x22submit-btn\x22]")[
          _0x1cbbb1(0x134)
        ](oldSubmitText),
        form[_0x1cbbb1(0x11d)](_0x1cbbb1(0x7c))[_0x1cbbb1(0x106)](
          oldSubmitText
        )));
});
function resetFormly() {
  const _0x143d24 = _0x4df898;
  $("[data-form=\x22multistep\x22]")["trigger"](_0x143d24(0x12f)),
    $("[data-form=\x22multistep\x22]")
      [_0x143d24(0x8c)]()
      ["find"](_0x143d24(0xdf))
      [_0x143d24(0xbf)](),
    (x = 0x0),
    updateStep(),
    $(_0x143d24(0x8b))[_0x143d24(0x14e)](),
    $(_0x143d24(0x7c))[_0x143d24(0x134)](oldSubmitText),
    $(_0x143d24(0x7c))["val"](oldSubmitText),
    $("[data-text=\x22current-step\x22]")[_0x143d24(0x134)](0x1),
    $(_0x143d24(0x8b))
      [_0x143d24(0x11d)](_0x143d24(0xe9))
      ["siblings"](_0x143d24(0x120))
      [_0x143d24(0xa8)](_0x143d24(0xe8));
}
$(document)[_0x4df898(0x169)](function (_0x15dbb0, _0xb2d4f6, _0x3e2c7c) {
  const _0x259560 = _0x4df898;
  if (_0x3e2c7c[_0x259560(0x87)][_0x259560(0xf0)](_0x259560(0x173))) {
    const _0x38a284 = _0xb2d4f6["status"] === 0xc8,
      _0x517cf0 = _0x259560(0x151);
    redirectTo &&
      _0x38a284 &&
      (newTab
        ? window[_0x259560(0x84)](redirectTo, _0x259560(0xd3))
        : setTimeout(() => {
            const _0x439e43 = _0x259560;
            location[_0x439e43(0xc9)] = redirectTo;
          }, redirectDelay)),
      _0x38a284 &&
        successCard !== "" &&
        $(_0x259560(0xc2) + successCard + "\x22]")["fadeIn"](),
      _0x38a284 &&
        formReset &&
        setTimeout(() => {
          resetFormly();
        }, resetDelay),
      !_0x38a284 &&
        ($("[data-form=\x22submit-btn\x22]")["val"](_0x259560(0x81)),
        $(_0x259560(0x7c))[_0x259560(0x134)]("Please\x20wait..."));
  }
}),
  $(_0x4df898(0x159))["on"](_0x4df898(0xe0), function () {
    const _0xc9e7dc = _0x4df898;
    var _0x43a331 = $(this)
      [_0xc9e7dc(0xfa)]()
      [_0xc9e7dc(0x11d)](_0xc9e7dc(0xe3))
      [_0xc9e7dc(0x10f)](_0xc9e7dc(0xfe));
    setTimeout(function () {
      const _0x1db04c = _0xc9e7dc;
      $(_0x1db04c(0x14b) + _0x43a331 + "\x22]")[_0x1db04c(0x77)]();
    }, 0x64),
      (back = !![]),
      (x = $(this)["data"](_0xc9e7dc(0x13d)) - 0x1),
      updateStep(),
      countCard
        ? ((curStep = x + 0x1),
          $(_0xc9e7dc(0x144))[_0xc9e7dc(0x134)](steps[_0xc9e7dc(0x90)]))
        : $(steps[x])["data"](_0xc9e7dc(0x139))
        ? (curStep = x + 0x0)
        : (curStep = x + 0x1),
      $(_0xc9e7dc(0x97))[_0xc9e7dc(0x134)](curStep),
      (back = ![]);
  }),
  $(_0x4df898(0xaa))["on"](_0x4df898(0xe0), function () {
    const _0x37b5a1 = _0x4df898;
    $(_0x37b5a1(0x8b))[_0x37b5a1(0x103)](_0x37b5a1(0x12f));
    let _0x2fc147 = $(this);
    $(this)[_0x37b5a1(0x134)](_0x37b5a1(0x81)),
      setTimeout(function () {
        const _0x524f1b = _0x37b5a1;
        $(_0x2fc147)[_0x524f1b(0x134)](oldResetText),
          $(_0x2fc147)["parents"](_0x524f1b(0xdf))[_0x524f1b(0xbf)](),
          (x = 0x0),
          updateStep(),
          $(_0x524f1b(0x8b))["show"](),
          $(_0x524f1b(0x7c))["text"](oldSubmitText),
          $(_0x524f1b(0x7c))[_0x524f1b(0x106)](oldSubmitText),
          $(_0x2fc147)[_0x524f1b(0x106)](oldSubmitText),
          $(_0x524f1b(0x97))[_0x524f1b(0x134)](0x1),
          $(_0x524f1b(0x8b))
            ["find"](_0x524f1b(0xe9))
            ["siblings"](_0x524f1b(0x120))
            [_0x524f1b(0xa8)](_0x524f1b(0xe8));
      }, resetDelay);
  }),
  $(_0x4df898(0xa7))["on"]("keypress", function (_0xf2123e) {
    const _0x587aec = _0x4df898;
    _0xf2123e["keyCode"] === 0xd &&
      fill &&
      ($(_0x587aec(0xbe))["data"]("enter")
        ? (totalSteps > curStep && $(_0x587aec(0x142))[0x0]["click"](),
          _0xf2123e["preventDefault"](),
          _0xf2123e["stopPropagation"]())
        : (_0xf2123e[_0x587aec(0x14d)](), _0xf2123e[_0x587aec(0xcd)]()));
  }),
  $(_0x4df898(0xa7))[_0x4df898(0xdc)](function (_0x4390b3) {
    const _0x110e0d = _0x4df898;
    (_0x4390b3[_0x110e0d(0x100)] || _0x4390b3["ctrlKey"]) &&
      _0x4390b3[_0x110e0d(0x82)] == 0xd &&
      (x >= steps["length"] - 0x1 && fill
        ? $(steps[x])
            [_0x110e0d(0x11d)]("[data-form=\x22submit-btn\x22]:visible")
            [_0x110e0d(0xe0)]()
        : (event[_0x110e0d(0x14d)](), event[_0x110e0d(0xcd)]()));
  }),
  $(_0x4df898(0x15d))[_0x4df898(0x13b)](function (_0x31d22e) {
    const _0x2b93e2 = _0x4df898;
    $(this)[_0x2b93e2(0x77)](),
      _0x31d22e["key"] == _0x2b93e2(0x107) &&
        (_0x31d22e[_0x2b93e2(0x14d)](), _0x31d22e["stopPropagation"]()),
      _0x31d22e[_0x2b93e2(0xdb)] &&
        _0x31d22e[_0x2b93e2(0x115)] == _0x2b93e2(0x107) &&
        $(this)[_0x2b93e2(0x106)]($(this)[_0x2b93e2(0x106)]() + "\x0a");
  }),
  $(_0x4df898(0x8b))
    [_0x4df898(0x11d)](_0x4df898(0xb4))
    ["on"](_0x4df898(0x113), function () {
      const _0x1c0c85 = _0x4df898;
      (all_data = all_data[_0x1c0c85(0x12b)](
        (_0x34284f) =>
          _0x34284f["field"] !== $(this)[_0x1c0c85(0x7b)](_0x1c0c85(0x98))
      )),
        $(this)["attr"](_0x1c0c85(0x14f)) === "checkbox"
          ? $(this)["is"](":checked")
            ? all_data["push"]({
                field: $(this)[_0x1c0c85(0x7b)](_0x1c0c85(0x98)),
                value: $(this)
                  ["siblings"](_0x1c0c85(0x111))
                  [_0x1c0c85(0x134)](),
              })
            : $(
                "[data-input-field=\x22" +
                  $(this)[_0x1c0c85(0x7b)](_0x1c0c85(0x98)) +
                  "\x22]"
              )[_0x1c0c85(0xbf)]()
          : (all_data["push"]({
              field: $(this)[_0x1c0c85(0x7b)](_0x1c0c85(0x98)),
              value: $(this)[_0x1c0c85(0x106)](),
            }),
            $(this)[_0x1c0c85(0x106)]() !== "" &&
              resetInputErrorMessage(
                $(this)[_0x1c0c85(0x7b)](_0x1c0c85(0x98))
              )),
        all_data[_0x1c0c85(0xa6)](function (_0x2c521f) {
          const _0x23a80b = _0x1c0c85;
          $("[data-input-field=\x22" + _0x2c521f[_0x23a80b(0x80)] + "\x22]")[
            _0x23a80b(0x96)
          ](),
            $(_0x23a80b(0x16a) + _0x2c521f[_0x23a80b(0x80)] + "\x22]")[
              _0x23a80b(0x134)
            ](_0x2c521f[_0x23a80b(0x171)]);
        });
    }),
  $(_0x4df898(0x8b))
    [_0x4df898(0x11d)](_0x4df898(0x15d))
    ["on"](_0x4df898(0x113), function () {
      const _0x193ff4 = _0x4df898;
      $(this)["val"]() !== "" &&
        resetInputErrorMessage($(this)[_0x193ff4(0x7b)](_0x193ff4(0x98))),
        (all_data = all_data[_0x193ff4(0x12b)](
          (_0xfa1f37) =>
            _0xfa1f37[_0x193ff4(0x80)] !==
            $(this)[_0x193ff4(0x7b)](_0x193ff4(0x98))
        )),
        all_data[_0x193ff4(0xd1)]({
          field: $(this)[_0x193ff4(0x7b)]("name"),
          value: $(this)[_0x193ff4(0x106)](),
        }),
        all_data[_0x193ff4(0xa6)](function (_0x35ad0c) {
          const _0x230522 = _0x193ff4;
          $("[data-input-field=\x22" + _0x35ad0c[_0x230522(0x80)] + "\x22]")[
            "fadeIn"
          ](),
            $(_0x230522(0x16a) + _0x35ad0c[_0x230522(0x80)] + "\x22]")[
              _0x230522(0x134)
            ](_0x35ad0c[_0x230522(0x171)]);
        });
    }),
  $(_0x4df898(0x8b))
    ["find"](_0x4df898(0xd4))
    ["on"](_0x4df898(0x113), function () {
      const _0x310be7 = _0x4df898;
      $(this)[_0x310be7(0x106)]() !== "" &&
        resetInputErrorMessage($(this)[_0x310be7(0x7b)]("name"));
      var _0x4696b8 = $(this)[_0x310be7(0x10f)](_0x310be7(0x10a));
      (all_data = all_data[_0x310be7(0x12b)](
        (_0x2f05c4) =>
          _0x2f05c4["field"] !== $(this)[_0x310be7(0x7b)](_0x310be7(0x98))
      )),
        all_data[_0x310be7(0xd1)]({
          field: $(this)[_0x310be7(0x7b)](_0x310be7(0x98)),
          value: _0x4696b8
            ? $(this)["find"](_0x310be7(0x160))[_0x310be7(0x134)]()
            : $(this)[_0x310be7(0x106)](),
        }),
        all_data[_0x310be7(0xa6)](function (_0x1e30b9) {
          const _0x58f1c4 = _0x310be7;
          $(_0x58f1c4(0x16a) + _0x1e30b9["field"] + "\x22]")[_0x58f1c4(0x96)](),
            $("[data-input-field=\x22" + _0x1e30b9["field"] + "\x22]")[
              _0x58f1c4(0x134)
            ](_0x1e30b9[_0x58f1c4(0x171)]);
        });
    }),
  updateStep(),
  triggerInputAllData(),
  $("[data-cms-select=cms]")[_0x4df898(0x138)](function () {
    const _0x4e0e72 = _0x4df898,
      _0x558d63 = $(this)["find"](_0x4e0e72(0x114)),
      _0x5af1bc = [];
    console[_0x4e0e72(0x154)](_0x5af1bc),
      _0x558d63["each"](function () {
        const _0xec4b6c = _0x4e0e72;
        _0x5af1bc[_0xec4b6c(0xd1)](
          $(this)[_0xec4b6c(0x134)]()[_0xec4b6c(0xd7)]()
        );
      });
    const _0x31ffae = $(this)[_0x4e0e72(0xbc)]("[data-cms-select=input]");
    $["each"](_0x5af1bc, function (_0x231535, _0x1ad52a) {
      const _0x31b18b = _0x4e0e72,
        _0x34bc64 = $("<option>")
          [_0x31b18b(0x106)](_0x1ad52a)
          [_0x31b18b(0x134)](_0x1ad52a);
      _0x31ffae[_0x31b18b(0xb1)](_0x34bc64);
    });
  }),
  $(_0x4df898(0x153))["on"](_0x4df898(0xe0), function () {
    const _0x36cee6 = _0x4df898;
    let _0x1f9f53 = $(this)["data"]("add-new");
    var _0x2be23b = $(_0x36cee6(0xa5) + _0x1f9f53 + "\x22]")
        ["eq"](0x0)
        ["clone"](!![]),
      _0x2662fe = $(_0x36cee6(0xa1) + _0x1f9f53 + "\x22]")
        ["eq"](0x0)
        [_0x36cee6(0x10b)](!![]);
    _0x2be23b[_0x36cee6(0x11d)](_0x36cee6(0x136))[_0x36cee6(0x138)](
      function () {
        const _0x422ca7 = _0x36cee6;
        $(this)[_0x422ca7(0x106)](""),
          $(this)[_0x422ca7(0x7b)](
            _0x422ca7(0x98),
            this[_0x422ca7(0x98)] +
              "-" +
              (parseInt(
                $(_0x422ca7(0xa5) + _0x1f9f53 + "\x22]")
                  ["last"]()
                  [_0x422ca7(0x15f)]()
              ) +
                0x1)
          ),
          $(this)["attr"](
            _0x422ca7(0xf4),
            $(this)[_0x422ca7(0x10f)]("name") +
              "-" +
              (parseInt(
                $("[data-clone=\x22" + _0x1f9f53 + "\x22]")
                  ["last"]()
                  [_0x422ca7(0x15f)]()
              ) +
                0x1)
          );
      }
    ),
      _0x2662fe["find"](_0x36cee6(0xe3))[_0x36cee6(0x138)](function () {
        const _0x434ad7 = _0x36cee6;
        $(this)["attr"](
          _0x434ad7(0x162),
          $(this)[_0x434ad7(0x10f)](_0x434ad7(0xfe)) +
            "-" +
            (parseInt(
              $(_0x434ad7(0xa5) + _0x1f9f53 + "\x22]")
                [_0x434ad7(0x12c)]()
                [_0x434ad7(0x15f)]()
            ) +
              0x1)
        );
      }),
      $("[data-clone-wrapper=\x22" + _0x1f9f53 + "\x22]")[_0x36cee6(0xb1)](
        _0x2be23b
      ),
      $(_0x36cee6(0x126) + _0x1f9f53 + "\x22]")[_0x36cee6(0xb1)](_0x2662fe),
      $(_0x36cee6(0x15a) + _0x1f9f53 + "\x22]")[_0x36cee6(0x138)](function () {
        const _0x38e3d8 = _0x36cee6;
        $(this)[_0x38e3d8(0x134)](
          $(this)
            ["parents"](_0x38e3d8(0xa5) + _0x1f9f53 + "\x22]")
            [_0x38e3d8(0x15f)]() + 0x1
        );
      }),
      $(_0x36cee6(0x11b) + _0x1f9f53 + "\x22]")[_0x36cee6(0x138)](function () {
        const _0xe16849 = _0x36cee6;
        $(this)[_0xe16849(0x134)](
          $(this)
            [_0xe16849(0x8c)](_0xe16849(0xa1) + _0x1f9f53 + "\x22]")
            [_0xe16849(0x15f)]() + 0x1
        );
      }),
      validation();
  }),
  scrollTop();
