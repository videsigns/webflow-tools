//4th Dec 2023
//Bug fix
//1. Radio bug

const _0x59c4bf = _0x129e;
(function (_0x6dda83, _0x28fd8d) {
  const _0x1d66b8 = _0x129e,
    _0xa1ccf9 = _0x6dda83();
  while (!![]) {
    try {
      const _0x585f2d =
        (-parseInt(_0x1d66b8(0x2b1)) / 0x1) *
          (-parseInt(_0x1d66b8(0x222)) / 0x2) +
        (parseInt(_0x1d66b8(0x1da)) / 0x3) *
          (-parseInt(_0x1d66b8(0x213)) / 0x4) +
        (-parseInt(_0x1d66b8(0x1b5)) / 0x5) *
          (parseInt(_0x1d66b8(0x1d6)) / 0x6) +
        (-parseInt(_0x1d66b8(0x26f)) / 0x7) *
          (-parseInt(_0x1d66b8(0x29d)) / 0x8) +
        (parseInt(_0x1d66b8(0x25f)) / 0x9) *
          (-parseInt(_0x1d66b8(0x204)) / 0xa) +
        (-parseInt(_0x1d66b8(0x271)) / 0xb) *
          (-parseInt(_0x1d66b8(0x2b5)) / 0xc) +
        (-parseInt(_0x1d66b8(0x1e8)) / 0xd) *
          (-parseInt(_0x1d66b8(0x231)) / 0xe);
      if (_0x585f2d === _0x28fd8d) break;
      else _0xa1ccf9["push"](_0xa1ccf9["shift"]());
    } catch (_0x6ca836) {
      _0xa1ccf9["push"](_0xa1ccf9["shift"]());
    }
  }
})(_0x3444, 0x3c3b3);
let x = 0x0,
  curStep = 0x0,
  steps = $(_0x59c4bf(0x192)),
  progressbarClone = $(_0x59c4bf(0x2a4))["clone"](),
  progressbar,
  countCard = !![],
  weightedSelection = $("[data-weighted-selection]")[_0x59c4bf(0x1a2)](
    _0x59c4bf(0x264),
  ),
  weightedSelectionRange = $(_0x59c4bf(0x24e))["data"](_0x59c4bf(0x2b0)),
  selectMultiple = $(_0x59c4bf(0x25a))[_0x59c4bf(0x1a2)]("select-multiple"),
  customError = $("[data-custom-error-message]")[_0x59c4bf(0x1a2)](
    _0x59c4bf(0x21a),
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
  reinitIX = $(_0x59c4bf(0x297))[_0x59c4bf(0x1a2)](_0x59c4bf(0x28d)),
  textareaLength = 0x0,
  textInputLength = 0x0,
  emailInputLength = 0x0,
  selectInputLength = 0x0,
  checkboxInputLength = 0x0,
  filledInput = [],
  savedFilledInput = [],
  memory = $(_0x59c4bf(0x1f6))[_0x59c4bf(0x1a2)](_0x59c4bf(0x2a3)),
  quiz = $(_0x59c4bf(0x1b0))[_0x59c4bf(0x1a2)](_0x59c4bf(0x228)),
  progress = 0x0;
const urlFormly = new URL(window[_0x59c4bf(0x205)][_0x59c4bf(0x27b)]);
let _params = $(_0x59c4bf(0x1e5))[_0x59c4bf(0x1a2)](_0x59c4bf(0x1b9)),
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
  logicExtra = $(_0x59c4bf(0x19f))[_0x59c4bf(0x1a2)]("logic-extra"),
  oldSubmitText = $(_0x59c4bf(0x19a))[_0x59c4bf(0x280)](),
  oldResetText = $(_0x59c4bf(0x207))[_0x59c4bf(0x246)](),
  formReset = $(_0x59c4bf(0x19f))[_0x59c4bf(0x1a2)](_0x59c4bf(0x1d8)),
  successCard = "",
  redirectTo = "",
  totalSteps = 0x0,
  checkCount = 0x0,
  resetDelay = $(_0x59c4bf(0x1a8))[_0x59c4bf(0x1a2)](_0x59c4bf(0x295))
    ? $(_0x59c4bf(0x1a8))["data"](_0x59c4bf(0x295))
    : 0x7d0,
  redirectDelay = $(_0x59c4bf(0x252))[_0x59c4bf(0x1a2)](_0x59c4bf(0x1a6))
    ? $("[data-redirect-delay]")[_0x59c4bf(0x1a2)](_0x59c4bf(0x1a6))
    : 0x7d0,
  newTab = !![],
  unfilledArr = [],
  phoneFormat = $("[data-form=\x22multistep\x22]")["data"](_0x59c4bf(0x27a)),
  scrollToTop = $(_0x59c4bf(0x19f))[_0x59c4bf(0x1a2)](_0x59c4bf(0x1d1)),
  conditionalResult =
    $(_0x59c4bf(0x267))[_0x59c4bf(0x1a2)](_0x59c4bf(0x273)) ===
    _0x59c4bf(0x21e),
  scrollTopOffset = parseInt(
    $(_0x59c4bf(0x19f))[_0x59c4bf(0x1a2)](_0x59c4bf(0x23e)),
  ),
  notRobot = !![],
  all_data = [];
const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
savedFilledInput = JSON[_0x59c4bf(0x1e4)](
  localStorage[_0x59c4bf(0x282)](_0x59c4bf(0x2af)),
);
var ogCloneArr = [];
$("[data-clone]")[_0x59c4bf(0x1a7)](function () {
  const _0x4dead0 = _0x59c4bf;
  ogCloneArr[_0x4dead0(0x240)]({
    name: $(this)[_0x4dead0(0x1a2)](_0x4dead0(0x21f)),
    element: $(this)[_0x4dead0(0x21f)](!![]),
    display: $(
      "[data-display=\x22" + $(this)["data"](_0x4dead0(0x21f)) + "\x22]",
    )
      ["eq"](0x0)
      [_0x4dead0(0x21f)](!![]),
  });
});
$(_0x59c4bf(0x1c7))[_0x59c4bf(0x1cc)] > 0x0 && (notRobot = ![]);
function recaptcha(_0x76c57f) {
  notRobot = !![];
}
$(_0x59c4bf(0x27f))[_0x59c4bf(0x1cc)] > 0x0 &&
  (countCard = $(_0x59c4bf(0x27f))[_0x59c4bf(0x1a2)]("count-card"));
$(_0x59c4bf(0x283))["hide"](),
  $(progressbarClone)["removeClass"](_0x59c4bf(0x241)),
  $(_0x59c4bf(0x258))["children"]()["remove"](),
  $("[data-form=\x22submit-btn\x22]")[_0x59c4bf(0x21c)](),
  $(_0x59c4bf(0x220))["hide"](),
  steps[_0x59c4bf(0x1a7)](function () {
    const _0x3fc599 = _0x59c4bf;
    $(_0x3fc599(0x258))["append"](
      progressbarClone[_0x3fc599(0x21f)](!![], !![]),
    );
  }),
  $("[data-input-field]")[_0x59c4bf(0x21c)]();
countCard
  ? ((curStep = curStep + 0x1),
    (totalSteps = steps[_0x59c4bf(0x1cc)]),
    $("[data-text=\x22total-steps\x22]")[_0x59c4bf(0x246)](totalSteps))
  : ($(steps[x])["data"](_0x59c4bf(0x206))
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    (totalSteps = $(_0x59c4bf(0x24b))[_0x59c4bf(0x1cc)]),
    $("[data-text=\x22total-steps\x22]")[_0x59c4bf(0x246)](totalSteps),
    $(_0x59c4bf(0x1d7))[_0x59c4bf(0x1a7)](function () {
      const _0x24bf84 = _0x59c4bf;
      $(
        $("[data-form=\x22progress-indicator\x22]")[
          $(this)[_0x24bf84(0x292)]()
        ],
      )[_0x24bf84(0x21c)]();
    }));
(progressbar = $(_0x59c4bf(0x258))[_0x59c4bf(0x28c)]()),
  $(_0x59c4bf(0x2a4))["on"]("click", clickableIndicator),
  $(_0x59c4bf(0x201))[_0x59c4bf(0x246)](curStep),
  steps[_0x59c4bf(0x21c)](),
  $("[data-success-card]")[_0x59c4bf(0x21c)](),
  $("[data-form=\x22next-btn\x22][type=\x22submit\x22]")[_0x59c4bf(0x1a7)](
    function () {
      const _0x5f5214 = _0x59c4bf;
      $(this)[_0x5f5214(0x1ff)]("type", _0x5f5214(0x266));
    },
  );
function getParams() {
  const _0x1204d4 = _0x59c4bf;
  urlFormly[_0x1204d4(0x1df)][_0x1204d4(0x1f0)](
    function (_0x33d16f, _0x28015c) {
      const _0xdbcc5e = _0x1204d4;
      searchQ[_0xdbcc5e(0x240)]({ val: _0x33d16f, key: _0x28015c });
    },
  );
}
function getSafe(_0x1d24b7, _0x4ea3fa) {
  try {
    return _0x1d24b7();
  } catch (_0x23d98b) {
    return _0x4ea3fa;
  }
}
function phoneAutoFormat(_0x460f5f) {
  var _0x430f0a = "";
  return function (_0x274dd3) {
    const _0x12faaa = _0x129e;
    var _0x23702f = "",
      _0x1eb809 = _0x274dd3[_0x12faaa(0x285)](/\D/g, ""),
      _0x10c3c7 = 0x0,
      _0x59f326 = 0x0;
    while (
      _0x10c3c7 < _0x1eb809[_0x12faaa(0x1cc)] &&
      _0x59f326 < _0x460f5f[_0x12faaa(0x1cc)]
    ) {
      _0x460f5f[_0x59f326] === "x"
        ? ((_0x23702f += _0x1eb809[_0x10c3c7]), _0x10c3c7++)
        : (_0x23702f += _0x460f5f[_0x59f326]),
        _0x59f326++;
    }
    if (_0x274dd3[_0x12faaa(0x1cc)] < _0x430f0a[_0x12faaa(0x1cc)]) {
      var _0x1eb760 = _0x460f5f["slice"](_0x59f326);
      _0x23702f += _0x1eb760[_0x12faaa(0x285)](/x/g, "");
    }
    return (_0x430f0a = _0x23702f), _0x23702f;
  };
}
function validateURL(_0x12e612) {
  return urlPattern["test"](_0x12e612) ? !![] : ![];
}
quiz &&
  steps["each"](function () {
    const _0x4847c2 = _0x59c4bf;
    $(this)[_0x4847c2(0x28c)]()[_0x4847c2(0x1ff)](_0x4847c2(0x1ef), !![]),
      $(this)["children"]()[_0x4847c2(0x1ff)]("data-radio-delay", 0xfa);
  });
function disableBtn(_0x22b2e6) {
  const _0x51afbc = _0x59c4bf;
  (fill = ![]),
    !customError &&
      ($(_0x51afbc(0x1eb))[_0x51afbc(0x232)]({
        opacity: "0.4",
        "pointer-events": _0x51afbc(0x1b3),
      }),
      $(_0x51afbc(0x1eb))[_0x51afbc(0x1b1)](_0x51afbc(0x268)),
      $("[data-form=\x22submit-btn\x22]")[_0x51afbc(0x232)]({
        opacity: "0.4",
        "pointer-events": _0x51afbc(0x1b3),
      }),
      $(_0x51afbc(0x19a))["addClass"](_0x51afbc(0x268)),
      $(_0x51afbc(0x220))[_0x51afbc(0x232)]({
        opacity: _0x51afbc(0x1f1),
        "pointer-events": _0x51afbc(0x1b3),
      }),
      $(_0x51afbc(0x220))[_0x51afbc(0x1b1)](_0x51afbc(0x268)));
}
function enableBtn() {
  const _0x584a23 = _0x59c4bf;
  (fill = !![]),
    $(_0x584a23(0x1eb))[_0x584a23(0x232)]({
      "pointer-events": _0x584a23(0x28a),
      opacity: "1",
    }),
    $(_0x584a23(0x1eb))["removeClass"]("disabled"),
    $(_0x584a23(0x19a))[_0x584a23(0x232)]({
      "pointer-events": _0x584a23(0x28a),
      opacity: "1",
    }),
    $("[data-form=\x22submit-btn\x22]")[_0x584a23(0x25e)](_0x584a23(0x268)),
    $(_0x584a23(0x220))[_0x584a23(0x232)]({
      "pointer-events": "auto",
      opacity: "1",
    }),
    $("[data-form-ms=\x22submit-btn\x22]")[_0x584a23(0x25e)](_0x584a23(0x268));
}
function _0x3444() {
  const _0xb3955d = [
    "[data-selection=\x22",
    "data-skip-to",
    "_blank",
    ":input[type=\x22text\x22][required]",
    "length",
    "key",
    "textarea[autofocus]",
    "input:radio[required]",
    ":input[type=\x22tel\x22][required]",
    "scroll-top",
    "[data-radio-skip]:visible",
    "Webflow",
    "some",
    "[data-display-input=\x22",
    "65298nSdTVr",
    "[data-form=\x22step\x22][data-card]",
    "reset",
    "input[type=\x22text\x22][required]:visible",
    "4749gMbbXB",
    "[data-show-if]",
    "\x22][value=\x22",
    "running",
    "checkbox",
    "searchParams",
    "url",
    "redirect",
    "[data-remove-upload]",
    "name",
    "parse",
    "[data-query-param]",
    "trigger",
    "test",
    "78qWtrjL",
    "prop",
    "[data-input-field]",
    "[data-form=\x22next-btn\x22]",
    "active-answer-card",
    "focus",
    ".w-form-formradioinput",
    "data-radio-skip",
    "forEach",
    "0.4",
    "go-to",
    "stopPropagation",
    "data-input-field",
    ":checked",
    "[data-memory]",
    "log",
    ":input[type=\x22checkbox\x22]",
    "[data-answer][data-radio-skip]:visible",
    "stringify",
    "slow",
    "wait",
    "<br>Data\x20Answer\x20=\x20",
    ":first",
    "attr",
    "[data-display]",
    "[data-text=\x22current-step\x22]",
    "[data-clone-input-wrapper=\x22",
    "\x22]:checked",
    "3733270zJtdGy",
    "location",
    "card",
    "[data-btn=\x22reset\x22]",
    "[data-radio-delay]",
    "[data-success-card=\x22",
    "html,\x20body",
    "radio-skip",
    "input[type=\x22radio\x22]:checked",
    "remove-upload",
    "keyCode",
    ":input[type=\x22checkbox\x22][required]:checked",
    "select[name=\x22",
    "filter",
    "[type=\x22radio\x22]",
    "44EBBsbb",
    "[data-form=\x22remove-clone\x22]",
    ":input[type=\x27radio\x27]:checked",
    ":input[type=\x22checkbox\x22]:checked",
    "[data-add-new-input]",
    ":input[type=\x22radio\x22]",
    "select[required]",
    "custom-error-message",
    "not",
    "hide",
    "backTo",
    "AND",
    "clone",
    "[data-form-ms=\x22submit-btn\x22]",
    "clone-input",
    "202156GJUNGW",
    "[data-input-field=\x22",
    "relationship-",
    "destroy",
    "redirect-form-hehexd",
    ".w-radio-input",
    "quiz",
    "textarea:focus",
    "status",
    "[data-display-input-wrapper=\x22",
    ".active-answer-card",
    "type",
    "keypress",
    "input:checkbox",
    "[data-form=\x22remove-input-clone\x22]",
    "177758QCKsOQ",
    "css",
    "[data-range]:contains(",
    "[data-display-wrapper=\x22",
    "[data-clickable-all]",
    "block-domain",
    "w--redirected-checked",
    "[data-skip-to]",
    "[data-input-index=\x22",
    "enter",
    "[data-cms-select=cms]",
    "[data-form=\x22submit-btn\x22]:visible",
    "setItem",
    "scroll-top-offset",
    "span",
    "push",
    "current",
    "novalidate",
    "keydown",
    "skipTo",
    "getResponse",
    "text",
    "add-new",
    "textarea[name=\x22",
    "required",
    "init",
    "[data-form=\x22step\x22]:not([data-card=\x22true\x22])",
    "split",
    "[data-enter]",
    "[data-weighted-selection-range]",
    "[data-btn=\x22edit\x22]",
    "\x22]\x20input",
    "clicked",
    "[data-redirect-delay]",
    "phone-autoformat",
    "radio",
    "[data-selected]:checked",
    "ajaxComplete",
    "last",
    "[data-form=\x22progress\x22]",
    "select",
    "[data-select-multiple]",
    "[data-display-index=\x22",
    "input:radio[name=\x22",
    "selection",
    "removeClass",
    "9KmdrFs",
    "add-new-input",
    "Please\x20wait...",
    ":input[type=\x22file\x22]",
    "change",
    "weighted-selection",
    "select[required]:visible",
    "button",
    "[data-conditional-result]",
    "disabled",
    "[data-form=\x22submit\x22]:visible",
    "[data-checkbox]",
    "submit-show",
    "inputName",
    "[data-form=\x22custom-progress-indicator\x22]",
    "[data-form=\x22next-btn\x22][data-submit-show]",
    "7kPcXYD",
    "fadeIn",
    "1195227wLckna",
    "[data-radio-skip]",
    "conditional-result",
    "[data-display-input]",
    "success",
    "parent",
    "data-name",
    "includes",
    "form[data-form=\x22multistep\x22]\x20:input",
    "phone-validation",
    "href",
    "click",
    "file",
    "step",
    "[data-count-card]",
    "val",
    "clicked\x20enter",
    "getItem",
    "[data-text=\x22error-message\x22]",
    "textarea[required]:visible",
    "replace",
    "input[type=\x22radio\x22]",
    "[data-go-to]",
    "submit",
    "findIndex",
    "auto",
    ":input[type=\x22url\x22]",
    "children",
    "reinit",
    "input[type=\x22submit\x22]",
    "display",
    "parents",
    "[data-btn=\x22check\x22]",
    "index",
    "new-tab",
    "removeItem",
    "reset-delay",
    "[type=\x22checkbox\x22]",
    "[data-reinit]",
    "input",
    ":input[type=\x22checkbox\x22][required]",
    "https://webflow.com/api/v1/form/",
    ".w-checkbox-input",
    "show",
    "3161880BkyZBw",
    "input-field",
    "[data-clone-wrapper]",
    "[data-clone-wrapper=\x22",
    ":input[type=\x22number\x22][required]",
    "field",
    "memory",
    "[data-form=\x22progress-indicator\x22]",
    "[data-text=\x22total-weight\x22]",
    "[data-clone=\x22",
    ":input[type=\x22tel\x22]",
    "<div\x20data-range=\x22selection\x22\x20style=\x22display:none\x20!important\x22>",
    "[data-form=\x22back-btn\x22]",
    "siblings",
    ":input[type=\x22url\x22][required]",
    ":input[type=\x22date\x22][required]",
    "remove",
    "min-character",
    "filledInput",
    "weighted-selection-range",
    "1NNXSkB",
    "[data-selection=\x22other\x22]",
    "edit-step",
    "find",
    "24pEFkmv",
    "trim",
    ":input[type=\x22email\x22][required]",
    "input[name=\x22",
    "[data-text=\x22total-steps\x22]",
    "metaKey",
    "[data-form=\x22step\x22]",
    "[data-answer=\x22",
    "closest",
    "slice",
    "textarea",
    "startsWith",
    "preventDefault",
    "textarea[required]",
    "[data-form=\x22submit-btn\x22]",
    "append",
    "</div>",
    "[data-cms-select=text]",
    "[data-clickable]",
    "[data-form=\x22multistep\x22]",
    "ctrlKey",
    ":input[type=\x22file\x22][required]",
    "data",
    "skip-to",
    "every",
    "[data-clone-input-wrapper]",
    "redirect-delay",
    "each",
    "[data-reset-delay]",
    ":input[type=\x22password\x22][required]",
    "[data-add-new]",
    "[data-answer]",
    "checked",
    ":input[required]",
    "option[value=\x22",
    "top",
    "[data-quiz]",
    "addClass",
    "\x22]\x20[data-input-field^=\x22",
    "none",
    "value",
    "70LwPsrh",
    "[data-cms-select=input]",
    "[data-display=\x22",
    ":input",
    "query-param",
    "selected",
    "[data-clone-input]",
    "input[type=\x22checkbox\x22]:visible",
    ".w-form-done",
    "[data-clone-input=\x22",
    "[data-clone]",
    "[data-selection]",
    "match",
    ":input[type=\x22number\x22]",
    "data-go-to",
    "open",
    ":input[type=\x22text\x22]",
    "[type=\x22submit\x22]",
    "div.g-recaptcha",
  ];
  _0x3444 = function () {
    return _0xb3955d;
  };
  return _0x3444();
}
function _0x129e(_0x300398, _0x3c9f35) {
  const _0x3444af = _0x3444();
  return (
    (_0x129e = function (_0x129e90, _0x5c5cd0) {
      _0x129e90 = _0x129e90 - 0x191;
      let _0x2f48f4 = _0x3444af[_0x129e90];
      return _0x2f48f4;
    }),
    _0x129e(_0x300398, _0x3c9f35)
  );
}
function saveFilledInput() {
  const _0x38efe2 = _0x59c4bf;
  $(_0x38efe2(0x279))
    [_0x38efe2(0x21b)](_0x38efe2(0x1c6))
    [_0x38efe2(0x1a7)](function () {
      const _0x12dabe = _0x38efe2;
      $(this)[_0x12dabe(0x1ff)](_0x12dabe(0x22d)) === _0x12dabe(0x1de) ||
      $(this)[_0x12dabe(0x1ff)]("type") === _0x12dabe(0x254)
        ? $(this)[_0x12dabe(0x1e9)](_0x12dabe(0x1ac)) &&
          (filledInput[_0x12dabe(0x1d4)](
            (_0x46487c) =>
              _0x46487c[_0x12dabe(0x26c)] ===
              $(this)[_0x12dabe(0x1ff)](_0x12dabe(0x1e3)),
          )
            ? ((filledInput = filledInput["filter"](
                (_0x4d0a98) =>
                  _0x4d0a98[_0x12dabe(0x26c)] !==
                  $(this)[_0x12dabe(0x1ff)](_0x12dabe(0x1e3)),
              )),
              $(this)[_0x12dabe(0x280)]() !== "" &&
                filledInput[_0x12dabe(0x240)]({
                  inputName: $(this)[_0x12dabe(0x1ff)](_0x12dabe(0x1e3)),
                  value: $(this)[_0x12dabe(0x280)](),
                }))
            : $(this)[_0x12dabe(0x280)]() !== "" &&
              filledInput["push"]({
                inputName: $(this)[_0x12dabe(0x1ff)](_0x12dabe(0x1e3)),
                value: $(this)[_0x12dabe(0x280)](),
              }))
        : filledInput[_0x12dabe(0x1d4)](
              (_0xde55b2) =>
                _0xde55b2[_0x12dabe(0x26c)] ===
                $(this)[_0x12dabe(0x1ff)](_0x12dabe(0x1e3)),
            )
          ? ((filledInput = filledInput[_0x12dabe(0x211)](
              (_0x3bbc05) =>
                _0x3bbc05[_0x12dabe(0x26c)] !==
                $(this)["attr"](_0x12dabe(0x1e3)),
            )),
            $(this)[_0x12dabe(0x280)]() !== "" &&
              filledInput[_0x12dabe(0x240)]({
                inputName: $(this)[_0x12dabe(0x1ff)](_0x12dabe(0x1e3)),
                value: $(this)[_0x12dabe(0x280)](),
              }))
          : $(this)[_0x12dabe(0x280)]() !== "" &&
            filledInput["push"]({
              inputName: $(this)["attr"](_0x12dabe(0x1e3)),
              value: $(this)[_0x12dabe(0x280)](),
            });
    }),
    localStorage[_0x38efe2(0x294)](_0x38efe2(0x2af)),
    localStorage[_0x38efe2(0x23d)](
      _0x38efe2(0x2af),
      JSON[_0x38efe2(0x1fa)](filledInput),
    );
}
function scrollTop() {
  const _0x420fd3 = _0x59c4bf;
  scrollToTop &&
    $(_0x420fd3(0x20a))["animate"](
      {
        scrollTop:
          $(_0x420fd3(0x19f))["offset"]()[_0x420fd3(0x1af)] - scrollTopOffset,
      },
      0x3e8,
    );
}
function updateStep() {
  const _0x5f05fd = _0x59c4bf;
  scrollTop(),
    (skip = ![]),
    $(_0x5f05fd(0x26d))[_0x5f05fd(0x25e)](_0x5f05fd(0x268));
  $(_0x5f05fd(0x19e))[_0x5f05fd(0x1a2)]("clickable") &&
    (steps[_0x5f05fd(0x2b4)](":input[required]")[_0x5f05fd(0x1a7)](function () {
      const _0x3edcd7 = _0x5f05fd;
      $(
        $(_0x3edcd7(0x26d))[
          $(this)["parents"]("[data-form=\x22step\x22]")[_0x3edcd7(0x292)]()
        ],
      ),
        $(this)[_0x3edcd7(0x280)]() === "" && emptyInput++;
    }),
    emptyInput > 0x0
      ? $(_0x5f05fd(0x28e))[_0x5f05fd(0x1b1)](_0x5f05fd(0x268))
      : $(_0x5f05fd(0x28e))[_0x5f05fd(0x25e)]("disabled"));
  $(_0x5f05fd(0x26d))[_0x5f05fd(0x25e)](_0x5f05fd(0x241)),
    $("[data-form=\x22custom-progress-indicator\x22]")["addClass"]("disabled"),
    $($("[data-form=\x22custom-progress-indicator\x22]")[x])[_0x5f05fd(0x1b1)](
      _0x5f05fd(0x241),
    ),
    (selection = selections[_0x5f05fd(0x211)](
      (_0x28155f) => _0x28155f[_0x5f05fd(0x27e)] === x - 0x1,
    ));
  next &&
    (x = getSafe(() => selection[0x0][_0x5f05fd(0x244)])
      ? parseInt(getSafe(() => selection[0x0][_0x5f05fd(0x244)]))
      : x);
  $("[data-answer]")[_0x5f05fd(0x21c)](), steps["hide"]();
  reinitIX === !![] && window[_0x5f05fd(0x1d3)][_0x5f05fd(0x225)]();
  $(progressbar)[_0x5f05fd(0x25e)](_0x5f05fd(0x241));
  for (i = 0x0; i <= x; i++) {
    countCard
      ? $(progressbar[i])[_0x5f05fd(0x1b1)](_0x5f05fd(0x241))
      : !$(steps[i])[_0x5f05fd(0x1a2)]("card") &&
        $(progressbar[i])[_0x5f05fd(0x1b1)](_0x5f05fd(0x241));
  }
  reinitIX === !![]
    ? (window[_0x5f05fd(0x1d3)] &&
        window[_0x5f05fd(0x1d3)]["require"]("ix2")[_0x5f05fd(0x24a)](),
      document["dispatchEvent"](new Event("readystatechange")),
      $(steps[x])[_0x5f05fd(0x29c)]())
    : $(steps[x])[_0x5f05fd(0x270)](_0x5f05fd(0x1fb));
  $(_0x5f05fd(0x22c))["removeClass"](_0x5f05fd(0x1ec));
  x === 0x0 &&
    !$(steps[x])[_0x5f05fd(0x1a2)](_0x5f05fd(0x206)) &&
    ($(steps[x])["find"](_0x5f05fd(0x1ab))[_0x5f05fd(0x29c)](),
    $(steps[x])
      [_0x5f05fd(0x2b4)]("[data-answer]")
      [_0x5f05fd(0x1b1)](_0x5f05fd(0x1ec)));
  selection[_0x5f05fd(0x1cc)] > 0x0
    ? ($(steps[x])
        [_0x5f05fd(0x2b4)](
          _0x5f05fd(0x193) + selection[0x0][_0x5f05fd(0x1ba)] + "\x22]",
        )
        [_0x5f05fd(0x29c)](),
      $(steps[x])
        [_0x5f05fd(0x2b4)](
          _0x5f05fd(0x193) + selection[0x0][_0x5f05fd(0x1ba)] + "\x22]",
        )
        [_0x5f05fd(0x1b1)]("active-answer-card"))
    : ($(steps[x])
        [_0x5f05fd(0x2b4)](_0x5f05fd(0x193) + answer + "\x22]")
        [_0x5f05fd(0x29c)](),
      $(steps[x])
        [_0x5f05fd(0x2b4)](_0x5f05fd(0x193) + answer + "\x22]")
        [_0x5f05fd(0x1b1)]("active-answer-card"));
  if (x === 0x0)
    $(_0x5f05fd(0x2a9))["hide"](),
      $(_0x5f05fd(0x1eb))["show"](),
      $(_0x5f05fd(0x19a))[_0x5f05fd(0x21c)]();
  else {
    if (
      x === steps[_0x5f05fd(0x1cc)] - 0x1 ||
      $(steps[x])[_0x5f05fd(0x2b4)](_0x5f05fd(0x269))[_0x5f05fd(0x1cc)] > 0x0
    ) {
      $(_0x5f05fd(0x1eb))[_0x5f05fd(0x21c)]();
      if (
        $(steps[x])
          ["find"](_0x5f05fd(0x26e))
          [_0x5f05fd(0x1a2)](_0x5f05fd(0x26b))
      )
        $(steps[x])["find"](_0x5f05fd(0x26e))[_0x5f05fd(0x29c)]();
      else
        $(_0x5f05fd(0x1eb))["data"](_0x5f05fd(0x26b)) &&
          $("[data-form=\x22next-btn\x22]")[_0x5f05fd(0x29c)]();
      $(_0x5f05fd(0x19a))[_0x5f05fd(0x29c)](),
        $(_0x5f05fd(0x220))[_0x5f05fd(0x29c)](),
        $(_0x5f05fd(0x2a9))[_0x5f05fd(0x29c)]();
    } else
      $(_0x5f05fd(0x1eb))["show"](),
        $(_0x5f05fd(0x2a9))[_0x5f05fd(0x29c)](),
        $("[data-form=\x22submit-btn\x22]")["hide"](),
        $(_0x5f05fd(0x220))[_0x5f05fd(0x21c)]();
  }
  $($(steps[x])[_0x5f05fd(0x2b4)]("input[autofocus]")[0x0])["focus"](),
    $($(steps[x])[_0x5f05fd(0x2b4)](_0x5f05fd(0x1ce))[0x0])[_0x5f05fd(0x1ed)](),
    validation();
  for (idx = 0x0; idx <= x; idx++) {
    $($("[data-form=\x22custom-progress-indicator\x22]")[idx])[
      _0x5f05fd(0x25e)
    ](_0x5f05fd(0x268));
  }
}
function validateEmail(_0xcc01fc, _0x493530, _0x2c837a) {
  const _0x1648e5 = _0x59c4bf;
  let _0x59ac07 = _0xcc01fc[_0x1648e5(0x278)]("@")
    ? _0xcc01fc[_0x1648e5(0x24c)]("@")[0x1][_0x1648e5(0x24c)](".")[0x0]
    : [];
  dom = [];
  _0x493530 !== undefined &&
    _0x493530[_0x1648e5(0x24c)](",")[_0x1648e5(0x1f0)](function (_0x2b0dc3) {
      _0x2b0dc3["includes"](_0x59ac07) && dom["push"](_0x59ac07);
    });
  dom[_0x1648e5(0x1cc)] > 0x0 ? (domainAllowed = ![]) : (domainAllowed = !![]);
  var _0x575dba = /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,20})?$/;
  console["log"](_0x575dba["test"](_0xcc01fc)),
    !_0x575dba[_0x1648e5(0x1e7)](_0xcc01fc) || !domainAllowed
      ? ((emailFilled = ![]),
        unfilledArr[_0x1648e5(0x240)]({ input: _0x2c837a }))
      : (emailFilled = !![]);
}
function phoneValidation(_0x5e01df, _0x58ca96, _0x51bb9a) {
  const _0x467f79 = _0x59c4bf;
  if (phoneFormat)
    return _0x5e01df[_0x467f79(0x1c1)](
      new RegExp(phoneFormat[_0x467f79(0x195)](0x1, -0x1)),
    ) && _0x58ca96 >= _0x51bb9a
      ? !![]
      : ![];
  else {
    if (_0x58ca96 >= _0x51bb9a) return !![];
  }
}
function validation() {
  const _0x2e19bc = _0x59c4bf;
  $(steps[x])[_0x2e19bc(0x1a2)]("card") && enableBtn();
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
    (textareaLength = $(steps[x])[_0x2e19bc(0x2b4)](_0x2e19bc(0x284))[
      _0x2e19bc(0x1cc)
    ]),
    (textInputLength = $(steps[x])[_0x2e19bc(0x2b4)](_0x2e19bc(0x1d9))[
      _0x2e19bc(0x1cc)
    ]),
    (selectInputLength = $(steps[x])["find"](_0x2e19bc(0x265))["length"]),
    (emailInputLength = $(steps[x])["find"](
      "input[type=\x22email\x22]:visible",
    )[_0x2e19bc(0x1cc)]),
    (checkboxInputLength = $(steps[x])[_0x2e19bc(0x2b4)](_0x2e19bc(0x1bc))[
      _0x2e19bc(0x1cc)
    ]);
  textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0
    ? disableBtn()
    : enableBtn();
  checkCount = $(steps[x])["data"](_0x2e19bc(0x1de))
    ? $(steps[x])[_0x2e19bc(0x1a2)](_0x2e19bc(0x1de))
    : $(steps[x])["find"](_0x2e19bc(0x26a))[_0x2e19bc(0x1cc)] > 0x0
      ? $(steps[x])
          [_0x2e19bc(0x2b4)]("[data-checkbox]")
          [_0x2e19bc(0x1a2)](_0x2e19bc(0x1de))
      : 0x0;
  if (!logicExtra)
    $(steps[x])["find"](":input")["is"](_0x2e19bc(0x296)) &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])["find"](":input[type=\x22checkbox\x22]")["length"]
        ? $(steps[x])
            [_0x2e19bc(0x2b4)](_0x2e19bc(0x1f8))
            ["each"](function () {
              const _0x1ca86a = _0x2e19bc;
              $(this)["is"](":checked")
                ? $(steps[x])[_0x1ca86a(0x2b4)](_0x1ca86a(0x299))[
                    _0x1ca86a(0x1cc)
                  ] < 0x1 &&
                  ((checkboxFilled = !![]),
                  resetInputErrorMessage(
                    $(this)[_0x1ca86a(0x1ff)](_0x1ca86a(0x1e3)),
                  ))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0x1ca86a(0x240)]({
                    input: $(this)["attr"](_0x1ca86a(0x1e3)),
                  }));
            })
        : $(steps[x])[_0x2e19bc(0x2b4)](_0x2e19bc(0x216))["length"] >=
            checkCount
          ? $(steps[x])[_0x2e19bc(0x2b4)](
              ":input[type=\x22checkbox\x22][required]",
            )[_0x2e19bc(0x1cc)] > 0x0
            ? $(steps[x])
                [_0x2e19bc(0x2b4)](":input[type=\x22checkbox\x22][required]")
                [_0x2e19bc(0x1a7)](function () {
                  const _0x2f87fc = _0x2e19bc;
                  !$(this)["is"](_0x2f87fc(0x1f5))
                    ? ((checkboxFilled = ![]),
                      unfilledArr[_0x2f87fc(0x240)]({
                        input: $(this)["attr"](_0x2f87fc(0x1e3)),
                      }))
                    : ((checkboxFilled = !![]),
                      $(steps[x])["find"](
                        ":input[type=\x22checkbox\x22][required]:checked",
                      )[_0x2f87fc(0x1cc)] >=
                        $(steps[x])["find"](
                          ":input[type=\x22checkbox\x22][required]",
                        )[_0x2f87fc(0x1cc)] &&
                        resetInputErrorMessage(
                          $(steps[x])
                            [_0x2f87fc(0x2b4)](_0x2f87fc(0x1f8))
                            [_0x2f87fc(0x1ff)](_0x2f87fc(0x1e3)),
                        ));
                })
            : ((checkboxFilled = !![]),
              resetInputErrorMessage(
                $(steps[x])
                  [_0x2e19bc(0x2b4)](_0x2e19bc(0x1f8))
                  [_0x2e19bc(0x1ff)](_0x2e19bc(0x1e3)),
              ))
          : ((checkboxFilled = ![]),
            $(steps[x])
              [_0x2e19bc(0x2b4)](_0x2e19bc(0x299))
              [_0x2e19bc(0x1a7)](function () {
                const _0x50304a = _0x2e19bc;
                $(this)[_0x50304a(0x21b)](_0x50304a(0x1f5)) &&
                  unfilledArr["push"]({
                    input: $(this)[_0x50304a(0x1ff)]("name"),
                  });
              }),
            unfilledArr[_0x2e19bc(0x240)]({
              input: $(steps[x])
                [_0x2e19bc(0x2b4)](":input[type=\x22checkbox\x22]")
                [_0x2e19bc(0x1ff)](_0x2e19bc(0x1e3)),
            }))),
      $(steps[x])
        [_0x2e19bc(0x2b4)](_0x2e19bc(0x1cf))
        [_0x2e19bc(0x1a7)](function (_0x5da26b) {
          const _0xe0d6 = _0x2e19bc;
          var _0x490732 = $(this)[_0xe0d6(0x1ff)]("name");
          $("input:radio[name=\x22" + _0x490732 + _0xe0d6(0x203))[
            _0xe0d6(0x1cc)
          ] == 0x0
            ? (!empReqRadio["find"](
                (_0x2f47b0) => _0x2f47b0["input"] === _0x5da26b,
              ) && empReqRadio[_0xe0d6(0x240)]({ input: _0x5da26b }),
              unfilledArr[_0xe0d6(0x240)]({
                input: $(this)[_0xe0d6(0x1ff)](_0xe0d6(0x1e3)),
              }))
            : (empReqRadio = empReqRadio["filter"](
                (_0x2a4083) => _0x2a4083["input"] !== _0x5da26b,
              )),
            empReqRadio[_0xe0d6(0x1cc)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0x2e19bc(0x2b4)](_0x2e19bc(0x1cb))
        [_0x2e19bc(0x1a7)](function (_0x1fc70d) {
          const _0x43a305 = _0x2e19bc;
          let _0xe6b9dc = $(this)[_0x43a305(0x280)]()[_0x43a305(0x1cc)],
            _0x3238c3 = $(this)[_0x43a305(0x1a2)]("min-character")
              ? $(this)[_0x43a305(0x1a2)](_0x43a305(0x2ae))
              : 0x0;
          $(this)[_0x43a305(0x280)]() !== "" && _0xe6b9dc >= _0x3238c3
            ? (empReqInput = empReqInput[_0x43a305(0x211)](
                (_0x15bf1c) => _0x15bf1c[_0x43a305(0x298)] !== _0x1fc70d,
              ))
            : (!empReqInput[_0x43a305(0x2b4)](
                (_0x54e11f) => _0x54e11f["input"] === _0x1fc70d,
              ) && empReqInput[_0x43a305(0x240)]({ input: _0x1fc70d }),
              unfilledArr[_0x43a305(0x240)]({
                input: $(this)[_0x43a305(0x1ff)](_0x43a305(0x1e3)),
              })),
            empReqInput[_0x43a305(0x1cc)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x2e19bc(0x1a9))
        [_0x2e19bc(0x1a7)](function (_0x2f597f) {
          const _0x1cd76e = _0x2e19bc;
          let _0x288c0f = $(this)["val"]()[_0x1cd76e(0x1cc)],
            _0xc6ee7b = $(this)["data"](_0x1cd76e(0x2ae))
              ? $(this)[_0x1cd76e(0x1a2)]("min-character")
              : 0x0;
          $(this)[_0x1cd76e(0x280)]() !== "" && _0x288c0f >= _0xc6ee7b
            ? (empReqPassword = empReqPassword[_0x1cd76e(0x211)](
                (_0x4cf83e) => _0x4cf83e[_0x1cd76e(0x298)] !== _0x2f597f,
              ))
            : (!empReqPassword[_0x1cd76e(0x2b4)](
                (_0x4401b8) => _0x4401b8[_0x1cd76e(0x298)] === _0x2f597f,
              ) && empReqPassword["push"]({ input: _0x2f597f }),
              unfilledArr["push"]({
                input: $(this)[_0x1cd76e(0x1ff)](_0x1cd76e(0x1e3)),
              })),
            empReqPassword[_0x1cd76e(0x1cc)] === 0x0
              ? (passwordFilled = !![])
              : (passwordFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x2e19bc(0x2ab))
        ["each"](function (_0x5aef54) {
          const _0x1018ff = _0x2e19bc;
          let _0x5f3533 = $(this)["val"]()[_0x1018ff(0x1cc)],
            _0x4cc3a0 = $(this)["data"]("min-character")
              ? $(this)[_0x1018ff(0x1a2)](_0x1018ff(0x2ae))
              : 0x0;
          $(this)[_0x1018ff(0x280)]() !== "" && _0x5f3533 >= _0x4cc3a0
            ? (empReqUrl = empReqUrl[_0x1018ff(0x211)](
                (_0x44b105) => _0x44b105[_0x1018ff(0x298)] !== _0x5aef54,
              ))
            : (!empReqUrl[_0x1018ff(0x2b4)](
                (_0x36ca12) => _0x36ca12[_0x1018ff(0x298)] === _0x5aef54,
              ) && empReqUrl[_0x1018ff(0x240)]({ input: _0x5aef54 }),
              unfilledArr[_0x1018ff(0x240)]({
                input: $(this)["attr"](_0x1018ff(0x1e3)),
              })),
            empReqUrl[_0x1018ff(0x1cc)] === 0x0 && validateURL($(this)["val"]())
              ? ((urlFilled = !![]), console["log"](urlFilled))
              : (urlFilled = ![]);
        }),
      $(steps[x])
        [_0x2e19bc(0x2b4)](_0x2e19bc(0x2ac))
        [_0x2e19bc(0x1a7)](function (_0xb86fd7) {
          const _0x578c5e = _0x2e19bc;
          $(this)[_0x578c5e(0x280)]() !== ""
            ? (empReqDate = empReqDate[_0x578c5e(0x211)](
                (_0x3e9e20) => _0x3e9e20[_0x578c5e(0x298)] !== _0xb86fd7,
              ))
            : (!empReqDate[_0x578c5e(0x2b4)](
                (_0x3d77e3) => _0x3d77e3["input"] === _0xb86fd7,
              ) && empReqDate[_0x578c5e(0x240)]({ input: _0xb86fd7 }),
              unfilledArr[_0x578c5e(0x240)]({
                input: $(this)[_0x578c5e(0x1ff)]("name"),
              })),
            empReqDate["length"] === 0x0
              ? (dateFilled = !![])
              : (dateFilled = ![]);
        }),
      $(steps[x])
        [_0x2e19bc(0x2b4)](_0x2e19bc(0x1d0))
        [_0x2e19bc(0x1a7)](function (_0x53b5e5) {
          const _0x275e0f = _0x2e19bc;
          if ($(this)[_0x275e0f(0x280)]() !== "") {
            let _0x37f479 = $(this)[_0x275e0f(0x280)]()[_0x275e0f(0x1cc)],
              _0x4c24cf = $(this)["data"](_0x275e0f(0x2ae))
                ? $(this)[_0x275e0f(0x1a2)](_0x275e0f(0x2ae))
                : 0x0;
            if ($(this)["data"](_0x275e0f(0x253))) {
              var _0x48ae52 = phoneAutoFormat(
                $(this)[_0x275e0f(0x1a2)]("phone-autoformat"),
              );
              $(this)[_0x275e0f(0x280)](_0x48ae52($(this)[_0x275e0f(0x280)]()));
            }
            phoneValidation($(this)[_0x275e0f(0x280)](), _0x37f479, _0x4c24cf)
              ? (empReqTel = empReqTel[_0x275e0f(0x211)](
                  (_0x4cf03b) => _0x4cf03b[_0x275e0f(0x298)] !== _0x53b5e5,
                ))
              : empReqTel[_0x275e0f(0x240)]({ input: _0x53b5e5 });
          } else
            !empReqTel[_0x275e0f(0x2b4)](
              (_0x4534bd) => _0x4534bd["input"] === _0x53b5e5,
            ) && empReqTel[_0x275e0f(0x240)]({ input: _0x53b5e5 }),
              unfilledArr["push"]({
                input: $(this)[_0x275e0f(0x1ff)](_0x275e0f(0x1e3)),
              });
          empReqTel[_0x275e0f(0x1cc)] === 0x0
            ? (telFilled = !![])
            : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x2e19bc(0x2b4)](_0x2e19bc(0x1a1))
        [_0x2e19bc(0x1a7)](function (_0x2529c8) {
          const _0x345ab9 = _0x2e19bc;
          $(this)[_0x345ab9(0x280)]() !== ""
            ? (empReqFile = empReqFile["filter"](
                (_0x33cace) => _0x33cace[_0x345ab9(0x298)] !== _0x2529c8,
              ))
            : (!empReqFile[_0x345ab9(0x2b4)](
                (_0x36aba9) => _0x36aba9[_0x345ab9(0x298)] === _0x2529c8,
              ) && empReqFile[_0x345ab9(0x240)]({ input: _0x2529c8 }),
              unfilledArr[_0x345ab9(0x240)]({
                input: $(this)[_0x345ab9(0x1ff)](_0x345ab9(0x1e3)),
              })),
            empReqFile[_0x345ab9(0x1cc)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x2e19bc(0x2b4)](_0x2e19bc(0x2a1))
        [_0x2e19bc(0x1a7)](function (_0x4a4e2b) {
          const _0x5932cd = _0x2e19bc;
          let _0x47eae5 = $(this)["val"]()[_0x5932cd(0x1cc)],
            _0xe08b08 = $(this)[_0x5932cd(0x1a2)](_0x5932cd(0x2ae))
              ? $(this)[_0x5932cd(0x1a2)](_0x5932cd(0x2ae))
              : 0x0;
          $(this)["val"]() !== "" && _0x47eae5 >= _0xe08b08
            ? (empReqNum = empReqNum[_0x5932cd(0x211)](
                (_0x49399a) => _0x49399a[_0x5932cd(0x298)] !== _0x4a4e2b,
              ))
            : (!empReqNum[_0x5932cd(0x2b4)](
                (_0xd00b6b) => _0xd00b6b[_0x5932cd(0x298)] === _0x4a4e2b,
              ) && empReqNum[_0x5932cd(0x240)]({ input: _0x4a4e2b }),
              unfilledArr["push"]({
                input: $(this)[_0x5932cd(0x1ff)](_0x5932cd(0x1e3)),
              })),
            empReqNum[_0x5932cd(0x1cc)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x2e19bc(0x2b4)](_0x2e19bc(0x219))
        ["each"](function (_0x50be64) {
          const _0x189e73 = _0x2e19bc;
          let _0x11296c = $(this)["val"]();
          _0x11296c === "" && (_0x11296c = null),
            _0x11296c != null
              ? (empReqSelect = empReqSelect[_0x189e73(0x211)](
                  (_0x56de4f) => _0x56de4f[_0x189e73(0x298)] !== _0x50be64,
                ))
              : (!empReqSelect[_0x189e73(0x2b4)](
                  (_0x5d0107) => _0x5d0107["input"] === _0x50be64,
                ) && empReqSelect[_0x189e73(0x240)]({ input: _0x50be64 }),
                unfilledArr[_0x189e73(0x240)]({
                  input: $(this)["attr"]("name"),
                })),
            empReqSelect[_0x189e73(0x1cc)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x2e19bc(0x2b4)](_0x2e19bc(0x199))
        [_0x2e19bc(0x1a7)](function (_0x494922) {
          const _0x8f7141 = _0x2e19bc;
          let _0x54e8d0 = $(this)[_0x8f7141(0x280)]()[_0x8f7141(0x1cc)],
            _0x53c855 = $(this)[_0x8f7141(0x1a2)](_0x8f7141(0x2ae))
              ? $(this)["data"](_0x8f7141(0x2ae))
              : 0x0;
          $(this)[_0x8f7141(0x280)]() !== "" && _0x54e8d0 >= _0x53c855
            ? (empReqTextarea = empReqTextarea[_0x8f7141(0x211)](
                (_0x305bd7) => _0x305bd7[_0x8f7141(0x298)] !== _0x494922,
              ))
            : (!empReqTextarea[_0x8f7141(0x2b4)](
                (_0x1c97b9) => _0x1c97b9[_0x8f7141(0x298)] === _0x494922,
              ) && empReqTextarea[_0x8f7141(0x240)]({ input: _0x494922 }),
              unfilledArr[_0x8f7141(0x240)]({
                input: $(this)[_0x8f7141(0x1ff)]("name"),
              })),
            empReqTextarea["length"] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        ["find"](":input[type=\x22email\x22][required]")
        [_0x2e19bc(0x1a7)](function () {
          const _0x1e125b = _0x2e19bc;
          $(this)[_0x1e125b(0x280)]() !== ""
            ? validateEmail(
                $(this)[_0x1e125b(0x280)](),
                $(this)["data"](_0x1e125b(0x236)),
                $(this)[_0x1e125b(0x1ff)]("name"),
              )
            : ((emailFilled = ![]),
              unfilledArr[_0x1e125b(0x240)]({
                input: $(this)[_0x1e125b(0x1ff)]("name"),
              }));
        });
  else {
    if ($(steps[x])[_0x2e19bc(0x1a2)]("card"))
      (answer = $(steps[x])
        [_0x2e19bc(0x2b4)](_0x2e19bc(0x287))
        [_0x2e19bc(0x1a2)](_0x2e19bc(0x1f2))),
        (selections = selections[_0x2e19bc(0x211)](
          (_0x37fe84) => _0x37fe84["step"] !== x,
        )),
        selections[_0x2e19bc(0x240)]({ step: x, selected: answer });
    else
      $(steps[x])
        ["find"](_0x2e19bc(0x22c))
        [_0x2e19bc(0x1a2)](_0x2e19bc(0x206)) &&
        ((answer = $(steps[x])
          ["find"](_0x2e19bc(0x22c))
          [_0x2e19bc(0x1a2)](_0x2e19bc(0x1f2))),
        (selections = selections[_0x2e19bc(0x211)](
          (_0x5532a8) => _0x5532a8["step"] !== x,
        )),
        selections[_0x2e19bc(0x240)]({ step: x, selected: answer }));
    $(steps[x])
      [_0x2e19bc(0x2b4)](_0x2e19bc(0x22c))
      ["find"](_0x2e19bc(0x1b8))
      ["is"](_0x2e19bc(0x296)) &&
      (checkCount === "*" ||
      checkCount > $(steps[x])["find"](_0x2e19bc(0x1f8))[_0x2e19bc(0x1cc)]
        ? (console[_0x2e19bc(0x1f7)](_0x2e19bc(0x1e7)),
          $(steps[x])
            ["find"](_0x2e19bc(0x1f8))
            [_0x2e19bc(0x1a7)](function () {
              const _0x150259 = _0x2e19bc;
              $(this)["is"](_0x150259(0x1f5))
                ? $(steps[x])[_0x150259(0x2b4)](_0x150259(0x1ad))["length"] <
                    0x1 &&
                  ((skipTo = undefined),
                  $(this)
                    ["parents"](_0x150259(0x238))
                    [_0x150259(0x1a2)](_0x150259(0x1a3)) &&
                    (skipTo = $(this)
                      [_0x150259(0x290)](_0x150259(0x238))
                      [_0x150259(0x1a2)](_0x150259(0x1a3))),
                  $(this)
                    ["parents"](_0x150259(0x287))
                    [_0x150259(0x1ff)](_0x150259(0x1c3)) &&
                    ((answer = $(this)
                      [_0x150259(0x290)]("[data-go-to]")
                      [_0x150259(0x1ff)](_0x150259(0x1c3))),
                    (selections = selections[_0x150259(0x211)](
                      (_0x15bd13) => _0x15bd13["step"] !== x,
                    )),
                    selections[_0x150259(0x240)]({ step: x, selected: answer }),
                    skipTo &&
                      (selections[_0x150259(0x240)]({
                        step: skipTo - 0x2,
                        selected: answer,
                      }),
                      (objIndex = selections[_0x150259(0x289)](
                        (_0x1c046f) => _0x1c046f[_0x150259(0x27e)] === x,
                      )),
                      (selections[objIndex][_0x150259(0x244)] =
                        parseInt(skipTo) - 0x1),
                      (selections[objIndex][_0x150259(0x21d)] = x))),
                  (checkboxFilled = !![]),
                  $(steps[x])[_0x150259(0x2b4)](_0x150259(0x20f))[
                    _0x150259(0x1cc)
                  ] >=
                    $(steps[x])[_0x150259(0x2b4)](_0x150259(0x299))[
                      _0x150259(0x1cc)
                    ] &&
                    resetInputErrorMessage(
                      $(steps[x])
                        [_0x150259(0x2b4)](_0x150259(0x1f8))
                        [_0x150259(0x1ff)]("name"),
                    ))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0x150259(0x240)]({
                    input: $(this)[_0x150259(0x1ff)](_0x150259(0x1e3)),
                  }));
            }))
        : $(steps[x])
              ["find"](_0x2e19bc(0x22c))
              [_0x2e19bc(0x2b4)](_0x2e19bc(0x216))[_0x2e19bc(0x1cc)] >=
            checkCount
          ? ($(steps[x])
              ["find"](_0x2e19bc(0x22c))
              [_0x2e19bc(0x2b4)](_0x2e19bc(0x1f8))
              ["parents"](_0x2e19bc(0x287))
              [_0x2e19bc(0x1ff)](_0x2e19bc(0x1c3)) &&
              ((skipTo = undefined),
              $(steps[x])
                [_0x2e19bc(0x2b4)](_0x2e19bc(0x22c))
                [_0x2e19bc(0x2b4)](_0x2e19bc(0x1f8))
                [_0x2e19bc(0x290)](_0x2e19bc(0x238))
                [_0x2e19bc(0x1ff)](_0x2e19bc(0x1c9)) &&
                (skipTo = $(steps[x])
                  [_0x2e19bc(0x2b4)](_0x2e19bc(0x22c))
                  [_0x2e19bc(0x2b4)](":input[type=\x22checkbox\x22]:checked")
                  [_0x2e19bc(0x290)]("[data-skip-to]")
                  [_0x2e19bc(0x1ff)](_0x2e19bc(0x1c9))),
              (answer = $(steps[x])
                [_0x2e19bc(0x2b4)](_0x2e19bc(0x22c))
                ["find"](_0x2e19bc(0x1f8))
                [_0x2e19bc(0x290)](_0x2e19bc(0x287))
                ["attr"](_0x2e19bc(0x1c3))),
              (selections = selections[_0x2e19bc(0x211)](
                (_0x3a7df4) => _0x3a7df4[_0x2e19bc(0x27e)] !== x,
              )),
              selections[_0x2e19bc(0x240)]({ step: x, selected: answer }),
              skipTo &&
                ((selections = selections[_0x2e19bc(0x211)](
                  (_0x1077d1) => _0x1077d1[_0x2e19bc(0x27e)] !== skipTo - 0x2,
                )),
                selections[_0x2e19bc(0x240)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x31e418) => _0x31e418[_0x2e19bc(0x27e)] === x,
                )),
                console[_0x2e19bc(0x1f7)](objIndex),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x2e19bc(0x21d)] = x),
                console[_0x2e19bc(0x1f7)](_0x2e19bc(0x1dd)))),
            (checkboxFilled = !![]),
            $(steps[x])[_0x2e19bc(0x2b4)](_0x2e19bc(0x20f))["length"] >=
              $(steps[x])[_0x2e19bc(0x2b4)](_0x2e19bc(0x299))["length"] &&
              resetInputErrorMessage(
                $(steps[x])
                  [_0x2e19bc(0x2b4)](_0x2e19bc(0x1f8))
                  [_0x2e19bc(0x1ff)]("name"),
              ))
          : ((checkboxFilled = ![]),
            $(steps[x])
              ["find"](_0x2e19bc(0x299))
              ["each"](function () {
                const _0x3166c9 = _0x2e19bc;
                $(this)[_0x3166c9(0x21b)](":checked") &&
                  unfilledArr[_0x3166c9(0x240)]({
                    input: $(this)[_0x3166c9(0x1ff)](_0x3166c9(0x1e3)),
                  });
              }))),
      $(steps[x])
        [_0x2e19bc(0x2b4)](_0x2e19bc(0x22c))
        [_0x2e19bc(0x2b4)](_0x2e19bc(0x1cf))
        [_0x2e19bc(0x1a7)](function (_0x54e671) {
          const _0x6f0d3 = _0x2e19bc;
          var _0x1fc852 = $(this)["attr"](_0x6f0d3(0x1e3));
          $(_0x6f0d3(0x25c) + _0x1fc852 + _0x6f0d3(0x203))[_0x6f0d3(0x1cc)] ==
          0x0
            ? (!empReqRadio[_0x6f0d3(0x2b4)](
                (_0x52da7b) => _0x52da7b[_0x6f0d3(0x298)] === _0x54e671,
              ) && empReqRadio[_0x6f0d3(0x240)]({ input: _0x54e671 }),
              unfilledArr[_0x6f0d3(0x240)]({ input: $(this)["attr"]("name") }))
            : (empReqRadio = empReqRadio[_0x6f0d3(0x211)](
                (_0x4c797d) => _0x4c797d[_0x6f0d3(0x298)] !== _0x54e671,
              )),
            empReqRadio[_0x6f0d3(0x1cc)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0x2e19bc(0x2b4)](".active-answer-card")
        [_0x2e19bc(0x2b4)](_0x2e19bc(0x1cb))
        [_0x2e19bc(0x1a7)](function (_0x168161) {
          const _0x4a80bf = _0x2e19bc;
          let _0x3a4d73 = $(this)[_0x4a80bf(0x280)]()[_0x4a80bf(0x1cc)],
            _0x33b034 = $(this)[_0x4a80bf(0x1a2)](_0x4a80bf(0x2ae))
              ? $(this)[_0x4a80bf(0x1a2)](_0x4a80bf(0x2ae))
              : 0x0;
          $(this)["val"]() !== "" && _0x3a4d73 >= _0x33b034
            ? (empReqInput = empReqInput[_0x4a80bf(0x211)](
                (_0x5853e8) => _0x5853e8[_0x4a80bf(0x298)] !== _0x168161,
              ))
            : (!empReqInput[_0x4a80bf(0x2b4)](
                (_0x2f4b62) => _0x2f4b62[_0x4a80bf(0x298)] === _0x168161,
              ) && empReqInput[_0x4a80bf(0x240)]({ input: _0x168161 }),
              unfilledArr[_0x4a80bf(0x240)]({
                input: $(this)[_0x4a80bf(0x1ff)](_0x4a80bf(0x1e3)),
              })),
            empReqInput["length"] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x2e19bc(0x2b4)](_0x2e19bc(0x22c))
        [_0x2e19bc(0x2b4)](_0x2e19bc(0x1c5))
        [_0x2e19bc(0x1a7)](function (_0x3cd8d8) {
          const _0x571e16 = _0x2e19bc;
          (skipTo = undefined),
            $(this)
              ["parents"]("[data-skip-to]")
              [_0x571e16(0x1a2)](_0x571e16(0x1a3)) !== "" &&
              (skipTo = $(this)
                [_0x571e16(0x290)](_0x571e16(0x238))
                [_0x571e16(0x1a2)](_0x571e16(0x1a3))),
            $(this)
              [_0x571e16(0x290)]("[data-go-to]")
              [_0x571e16(0x1ff)]("data-go-to") &&
              ((answer = $(this)
                ["parents"](_0x571e16(0x287))
                [_0x571e16(0x1ff)](_0x571e16(0x1c3))),
              (selections = selections[_0x571e16(0x211)](
                (_0x144143) => _0x144143["step"] !== x,
              )),
              selections[_0x571e16(0x240)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0x571e16(0x289)](
                  (_0x5ab5b9) => _0x5ab5b9[_0x571e16(0x27e)] === x,
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        ["find"](_0x2e19bc(0x22c))
        [_0x2e19bc(0x2b4)](_0x2e19bc(0x1a9))
        [_0x2e19bc(0x1a7)](function (_0x22381a) {
          const _0x2442e3 = _0x2e19bc;
          let _0x20d16d = $(this)[_0x2442e3(0x280)]()["length"],
            _0x1af132 = $(this)[_0x2442e3(0x1a2)](_0x2442e3(0x2ae))
              ? $(this)["data"](_0x2442e3(0x2ae))
              : 0x0;
          $(this)[_0x2442e3(0x280)]() !== "" && _0x20d16d >= _0x1af132
            ? (empReqPassword = empReqPassword[_0x2442e3(0x211)](
                (_0x21506c) => _0x21506c["input"] !== _0x22381a,
              ))
            : (!empReqPassword["find"](
                (_0x103f88) => _0x103f88[_0x2442e3(0x298)] === _0x22381a,
              ) && empReqPassword["push"]({ input: _0x22381a }),
              unfilledArr[_0x2442e3(0x240)]({
                input: $(this)["attr"]("name"),
              })),
            empReqPassword[_0x2442e3(0x1cc)] === 0x0
              ? (passwordFilled = !![])
              : (passwordFilled = ![]);
        }),
      $(steps[x])
        [_0x2e19bc(0x2b4)](".active-answer-card")
        [_0x2e19bc(0x2b4)](":input[type=\x22password\x22]")
        ["each"](function (_0x4051c6) {
          const _0xec954e = _0x2e19bc;
          (skipTo = undefined),
            $(this)
              [_0xec954e(0x290)](_0xec954e(0x238))
              [_0xec954e(0x1a2)]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0xec954e(0x290)](_0xec954e(0x238))
                [_0xec954e(0x1a2)](_0xec954e(0x1a3))),
            $(this)
              [_0xec954e(0x290)](_0xec954e(0x287))
              [_0xec954e(0x1ff)](_0xec954e(0x1c3)) &&
              ((answer = $(this)
                [_0xec954e(0x290)](_0xec954e(0x287))
                [_0xec954e(0x1ff)](_0xec954e(0x1c3))),
              (selections = selections[_0xec954e(0x211)](
                (_0x968083) => _0x968083[_0xec954e(0x27e)] !== x,
              )),
              selections[_0xec954e(0x240)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0xec954e(0x240)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0xec954e(0x289)](
                  (_0x2bb31d) => _0x2bb31d[_0xec954e(0x27e)] === x,
                )),
                (selections[objIndex][_0xec954e(0x244)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0xec954e(0x21d)] = x)));
        }),
      $(steps[x])
        [_0x2e19bc(0x2b4)](_0x2e19bc(0x22c))
        [_0x2e19bc(0x2b4)](_0x2e19bc(0x2ab))
        [_0x2e19bc(0x1a7)](function (_0x4e4007) {
          const _0x36cbb4 = _0x2e19bc;
          let _0x3c383e = $(this)[_0x36cbb4(0x280)]()[_0x36cbb4(0x1cc)],
            _0x32eba5 = $(this)[_0x36cbb4(0x1a2)](_0x36cbb4(0x2ae))
              ? $(this)[_0x36cbb4(0x1a2)]("min-character")
              : 0x0;
          $(this)[_0x36cbb4(0x280)]() !== "" && _0x3c383e >= _0x32eba5
            ? (empReqUrl = empReqUrl["filter"](
                (_0x446e0c) => _0x446e0c[_0x36cbb4(0x298)] !== _0x4e4007,
              ))
            : (!empReqUrl[_0x36cbb4(0x2b4)](
                (_0x1cd8d8) => _0x1cd8d8["input"] === _0x4e4007,
              ) && empReqUrl["push"]({ input: _0x4e4007 }),
              unfilledArr["push"]({
                input: $(this)[_0x36cbb4(0x1ff)](_0x36cbb4(0x1e3)),
              })),
            empReqUrl[_0x36cbb4(0x1cc)] === 0x0 &&
            validateURL($(this)[_0x36cbb4(0x280)]())
              ? (urlFilled = !![])
              : (urlFilled = ![]);
        }),
      $(steps[x])
        [_0x2e19bc(0x2b4)](_0x2e19bc(0x22c))
        ["find"](_0x2e19bc(0x28b))
        ["each"](function (_0x53de20) {
          const _0x3adf82 = _0x2e19bc;
          (skipTo = undefined),
            $(this)
              [_0x3adf82(0x290)](_0x3adf82(0x238))
              [_0x3adf82(0x1a2)](_0x3adf82(0x1a3)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0x3adf82(0x238))
                [_0x3adf82(0x1a2)](_0x3adf82(0x1a3))),
            $(this)
              [_0x3adf82(0x290)](_0x3adf82(0x287))
              [_0x3adf82(0x1ff)](_0x3adf82(0x1c3)) &&
              ((answer = $(this)
                ["parents"](_0x3adf82(0x287))
                [_0x3adf82(0x1ff)](_0x3adf82(0x1c3))),
              (selections = selections[_0x3adf82(0x211)](
                (_0x35f06f) => _0x35f06f["step"] !== x,
              )),
              selections[_0x3adf82(0x240)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections["findIndex"](
                  (_0x56cfee) => _0x56cfee["step"] === x,
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x2e19bc(0x2b4)](_0x2e19bc(0x22c))
        ["find"](":input[type=\x22date\x22][required]")
        [_0x2e19bc(0x1a7)](function (_0x2ecfdb) {
          const _0x538980 = _0x2e19bc;
          $(this)[_0x538980(0x280)]() !== ""
            ? (empReqDate = empReqDate[_0x538980(0x211)](
                (_0x2b37a9) => _0x2b37a9["input"] !== _0x2ecfdb,
              ))
            : (!empReqDate[_0x538980(0x2b4)](
                (_0x2c763f) => _0x2c763f[_0x538980(0x298)] === _0x2ecfdb,
              ) && empReqDate["push"]({ input: _0x2ecfdb }),
              unfilledArr[_0x538980(0x240)]({
                input: $(this)[_0x538980(0x1ff)](_0x538980(0x1e3)),
              })),
            empReqDate[_0x538980(0x1cc)] === 0x0
              ? (dateFilled = !![])
              : (dateFilled = ![]);
        }),
      $(steps[x])
        [_0x2e19bc(0x2b4)](_0x2e19bc(0x22c))
        ["find"](":input[type=\x22date\x22]")
        [_0x2e19bc(0x1a7)](function (_0x31773e) {
          const _0x450895 = _0x2e19bc;
          (skipTo = undefined),
            $(this)
              [_0x450895(0x290)](_0x450895(0x238))
              ["data"](_0x450895(0x1a3)) !== "" &&
              (skipTo = $(this)
                [_0x450895(0x290)](_0x450895(0x238))
                [_0x450895(0x1a2)]("skip-to")),
            $(this)
              [_0x450895(0x290)](_0x450895(0x287))
              [_0x450895(0x1ff)](_0x450895(0x1c3)) &&
              ((answer = $(this)
                [_0x450895(0x290)]("[data-go-to]")
                [_0x450895(0x1ff)]("data-go-to")),
              (selections = selections[_0x450895(0x211)](
                (_0x4dd54f) => _0x4dd54f[_0x450895(0x27e)] !== x,
              )),
              selections[_0x450895(0x240)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x450895(0x240)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x34c4b7) => _0x34c4b7[_0x450895(0x27e)] === x,
                )),
                (selections[objIndex][_0x450895(0x244)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x450895(0x21d)] = x)));
        }),
      $(steps[x])
        [_0x2e19bc(0x2b4)](".active-answer-card")
        [_0x2e19bc(0x2b4)](_0x2e19bc(0x2a1))
        [_0x2e19bc(0x1a7)](function (_0x3bf89d) {
          const _0x178c6e = _0x2e19bc;
          let _0x46c798 = $(this)["val"]()[_0x178c6e(0x1cc)],
            _0x4bc208 = $(this)[_0x178c6e(0x1a2)](_0x178c6e(0x2ae))
              ? $(this)[_0x178c6e(0x1a2)](_0x178c6e(0x2ae))
              : 0x0;
          $(this)[_0x178c6e(0x280)]() !== "" && _0x46c798 >= _0x4bc208
            ? (empReqNum = empReqNum[_0x178c6e(0x211)](
                (_0x3417ee) => _0x3417ee["input"] !== _0x3bf89d,
              ))
            : (!empReqNum[_0x178c6e(0x2b4)](
                (_0x5f5a69) => _0x5f5a69[_0x178c6e(0x298)] === _0x3bf89d,
              ) && empReqNum[_0x178c6e(0x240)]({ input: _0x3bf89d }),
              unfilledArr[_0x178c6e(0x240)]({
                input: $(this)[_0x178c6e(0x1ff)](_0x178c6e(0x1e3)),
              })),
            empReqNum[_0x178c6e(0x1cc)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x2e19bc(0x2b4)](_0x2e19bc(0x22c))
        [_0x2e19bc(0x2b4)](_0x2e19bc(0x1c2))
        [_0x2e19bc(0x1a7)](function (_0x3e4335) {
          const _0x331a58 = _0x2e19bc;
          (skipTo = undefined),
            $(this)
              [_0x331a58(0x290)](_0x331a58(0x238))
              [_0x331a58(0x1a2)](_0x331a58(0x1a3)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0x331a58(0x238))
                [_0x331a58(0x1a2)]("skip-to")),
            $(this)
              ["parents"](_0x331a58(0x287))
              [_0x331a58(0x1ff)](_0x331a58(0x1c3)) &&
              ((answer = $(this)
                ["parents"](_0x331a58(0x287))
                ["attr"]("data-go-to")),
              (selections = selections[_0x331a58(0x211)](
                (_0x2305f6) => _0x2305f6["step"] !== x,
              )),
              selections[_0x331a58(0x240)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections["findIndex"](
                  (_0xee1af6) => _0xee1af6[_0x331a58(0x27e)] === x,
                )),
                (selections[objIndex][_0x331a58(0x244)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x2e19bc(0x2b4)](_0x2e19bc(0x22c))
        [_0x2e19bc(0x2b4)](_0x2e19bc(0x1d0))
        [_0x2e19bc(0x1a7)](function (_0x587cf3) {
          const _0x4715d3 = _0x2e19bc;
          if ($(this)[_0x4715d3(0x280)]() !== "") {
            let _0x53cde7 = $(this)[_0x4715d3(0x280)]()[_0x4715d3(0x1cc)],
              _0x4c6a17 = $(this)[_0x4715d3(0x1a2)]("min-character")
                ? $(this)[_0x4715d3(0x1a2)](_0x4715d3(0x2ae))
                : 0x0;
            if ($(this)[_0x4715d3(0x1a2)](_0x4715d3(0x253))) {
              var _0x210fe5 = phoneAutoFormat(
                $(this)[_0x4715d3(0x1a2)](_0x4715d3(0x253)),
              );
              $(this)["val"](_0x210fe5($(this)[_0x4715d3(0x280)]()));
            }
            phoneValidation($(this)["val"](), _0x53cde7, _0x4c6a17)
              ? (empReqTel = empReqTel[_0x4715d3(0x211)](
                  (_0x2149b9) => _0x2149b9[_0x4715d3(0x298)] !== _0x587cf3,
                ))
              : empReqTel[_0x4715d3(0x240)]({ input: _0x587cf3 });
          } else
            !empReqTel["find"](
              (_0x4feac0) => _0x4feac0[_0x4715d3(0x298)] === _0x587cf3,
            ) && empReqTel[_0x4715d3(0x240)]({ input: _0x587cf3 }),
              unfilledArr[_0x4715d3(0x240)]({
                input: $(this)["attr"](_0x4715d3(0x1e3)),
              });
          empReqTel[_0x4715d3(0x1cc)] === 0x0
            ? (telFilled = !![])
            : (telFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x2e19bc(0x22c))
        ["find"](_0x2e19bc(0x2a7))
        [_0x2e19bc(0x1a7)](function (_0x12127d) {
          const _0x579c9a = _0x2e19bc;
          (skipTo = undefined),
            $(this)
              ["parents"](_0x579c9a(0x238))
              [_0x579c9a(0x1a2)](_0x579c9a(0x1a3)) !== "" &&
              (skipTo = $(this)
                [_0x579c9a(0x290)]("[data-skip-to]")
                ["data"]("skip-to")),
            $(this)
              [_0x579c9a(0x290)](_0x579c9a(0x287))
              ["attr"](_0x579c9a(0x1c3)) &&
              ((answer = $(this)
                [_0x579c9a(0x290)](_0x579c9a(0x287))
                [_0x579c9a(0x1ff)](_0x579c9a(0x1c3))),
              (selections = selections["filter"](
                (_0x52388c) => _0x52388c[_0x579c9a(0x27e)] !== x,
              )),
              selections[_0x579c9a(0x240)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x579c9a(0x240)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x579c9a(0x289)](
                  (_0x50d5b1) => _0x50d5b1[_0x579c9a(0x27e)] === x,
                )),
                (selections[objIndex][_0x579c9a(0x244)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x579c9a(0x21d)] = x)));
        }),
      $(steps[x])
        [_0x2e19bc(0x2b4)](_0x2e19bc(0x22c))
        [_0x2e19bc(0x2b4)](_0x2e19bc(0x1a1))
        [_0x2e19bc(0x1a7)](function (_0x2b5a19) {
          const _0x43ffe4 = _0x2e19bc;
          $(this)[_0x43ffe4(0x280)]() !== ""
            ? (empReqFile = empReqFile[_0x43ffe4(0x211)](
                (_0x1eb3bb) => _0x1eb3bb[_0x43ffe4(0x298)] !== _0x2b5a19,
              ))
            : (!empReqFile[_0x43ffe4(0x2b4)](
                (_0x2b9548) => _0x2b9548["input"] === _0x2b5a19,
              ) && empReqFile["push"]({ input: _0x2b5a19 }),
              unfilledArr["push"]({ input: $(this)["attr"]("name") })),
            empReqFile[_0x43ffe4(0x1cc)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x2e19bc(0x2b4)](_0x2e19bc(0x22c))
        ["find"](_0x2e19bc(0x262))
        [_0x2e19bc(0x1a7)](function (_0x435939) {
          const _0x556e75 = _0x2e19bc;
          (skipTo = undefined),
            $(this)
              [_0x556e75(0x290)](_0x556e75(0x238))
              [_0x556e75(0x1a2)]("skip-to") !== "" &&
              (skipTo = $(this)
                ["parents"]("[data-skip-to]")
                [_0x556e75(0x1a2)]("skip-to")),
            $(this)
              ["parents"]("[data-go-to]")
              [_0x556e75(0x1ff)](_0x556e75(0x1c3)) &&
              ((answer = $(this)
                [_0x556e75(0x290)]("[data-go-to]")
                [_0x556e75(0x1ff)]("data-go-to")),
              (selections = selections["filter"](
                (_0x1ec06d) => _0x1ec06d[_0x556e75(0x27e)] !== x,
              )),
              selections[_0x556e75(0x240)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x556e75(0x240)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x556e75(0x289)](
                  (_0x1ddaa4) => _0x1ddaa4[_0x556e75(0x27e)] === x,
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x556e75(0x21d)] = x)));
        }),
      $(steps[x])
        ["find"](_0x2e19bc(0x22c))
        [_0x2e19bc(0x2b4)](_0x2e19bc(0x219))
        [_0x2e19bc(0x1a7)](function (_0x26dd07) {
          const _0x38f698 = _0x2e19bc;
          console[_0x38f698(0x1f7)]($(this)[_0x38f698(0x280)]()),
            $(this)[_0x38f698(0x280)]() !== null &&
            $(this)[_0x38f698(0x280)]() !== ""
              ? (empReqSelect = empReqSelect[_0x38f698(0x211)](
                  (_0x3b95fb) => _0x3b95fb[_0x38f698(0x298)] !== _0x26dd07,
                ))
              : (!empReqSelect[_0x38f698(0x2b4)](
                  (_0xebad6d) => _0xebad6d["input"] === _0x26dd07,
                ) && empReqSelect[_0x38f698(0x240)]({ input: _0x26dd07 }),
                unfilledArr["push"]({
                  input: $(this)[_0x38f698(0x1ff)]("name"),
                })),
            empReqSelect[_0x38f698(0x1cc)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x2e19bc(0x2b4)](_0x2e19bc(0x22c))
        ["find"](_0x2e19bc(0x259))
        [_0x2e19bc(0x1a7)](function (_0x28ade1) {
          const _0x28ad63 = _0x2e19bc;
          (skipTo = undefined),
            $(this)
              [_0x28ad63(0x290)](_0x28ad63(0x238))
              [_0x28ad63(0x1a2)](_0x28ad63(0x1a3)) !== "" &&
              (skipTo = $(this)
                [_0x28ad63(0x290)](_0x28ad63(0x238))
                ["data"](_0x28ad63(0x1a3))),
            $(this)
              [_0x28ad63(0x290)]("[data-go-to]")
              [_0x28ad63(0x1ff)]("data-go-to") &&
              ((answer = $(this)
                [_0x28ad63(0x290)](_0x28ad63(0x287))
                [_0x28ad63(0x1ff)](_0x28ad63(0x1c3))),
              (selections = selections[_0x28ad63(0x211)](
                (_0x20a0ff) => _0x20a0ff["step"] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x28ad63(0x240)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x28ad63(0x289)](
                  (_0x4e0e29) => _0x4e0e29[_0x28ad63(0x27e)] === x,
                )),
                (selections[objIndex][_0x28ad63(0x244)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x2e19bc(0x2b4)](_0x2e19bc(0x22c))
        ["find"]("textarea[required]")
        ["each"](function (_0x16db51) {
          const _0x5b7313 = _0x2e19bc;
          let _0x496dcf = $(this)[_0x5b7313(0x280)]()["length"],
            _0xfe5716 = $(this)[_0x5b7313(0x1a2)](_0x5b7313(0x2ae))
              ? $(this)[_0x5b7313(0x1a2)]("min-character")
              : 0x0;
          $(this)[_0x5b7313(0x280)]() !== "" && _0x496dcf >= _0xfe5716
            ? (empReqTextarea = empReqTextarea[_0x5b7313(0x211)](
                (_0x1fde86) => _0x1fde86[_0x5b7313(0x298)] !== _0x16db51,
              ))
            : (!empReqTextarea[_0x5b7313(0x2b4)](
                (_0x28c7e5) => _0x28c7e5[_0x5b7313(0x298)] === _0x16db51,
              ) && empReqTextarea["push"]({ input: _0x16db51 }),
              unfilledArr[_0x5b7313(0x240)]({
                input: $(this)["attr"](_0x5b7313(0x1e3)),
              })),
            empReqTextarea[_0x5b7313(0x1cc)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        ["find"](".active-answer-card")
        [_0x2e19bc(0x2b4)](_0x2e19bc(0x196))
        [_0x2e19bc(0x1a7)](function (_0x135590) {
          const _0x2acb5a = _0x2e19bc;
          (skipTo = undefined),
            $(this)
              [_0x2acb5a(0x290)]("[data-skip-to]")
              [_0x2acb5a(0x1a2)]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0x2acb5a(0x290)](_0x2acb5a(0x238))
                ["data"](_0x2acb5a(0x1a3))),
            $(this)
              [_0x2acb5a(0x290)](_0x2acb5a(0x287))
              ["attr"](_0x2acb5a(0x1c3)) &&
              ((answer = $(this)
                [_0x2acb5a(0x290)](_0x2acb5a(0x287))
                [_0x2acb5a(0x1ff)](_0x2acb5a(0x1c3))),
              (selections = selections[_0x2acb5a(0x211)](
                (_0x5c171c) => _0x5c171c[_0x2acb5a(0x27e)] !== x,
              )),
              selections[_0x2acb5a(0x240)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x2acb5a(0x240)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x2acb5a(0x289)](
                  (_0x2505fd) => _0x2505fd[_0x2acb5a(0x27e)] === x,
                )),
                (selections[objIndex][_0x2acb5a(0x244)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x2acb5a(0x21d)] = x)));
        }),
      $(steps[x])
        [_0x2e19bc(0x2b4)](_0x2e19bc(0x22c))
        [_0x2e19bc(0x2b4)](_0x2e19bc(0x2b7))
        [_0x2e19bc(0x1a7)](function (_0x56fcc9) {
          const _0x4e3269 = _0x2e19bc;
          $(this)[_0x4e3269(0x280)]() !== ""
            ? validateEmail(
                $(this)["val"](),
                $(this)[_0x4e3269(0x1a2)](_0x4e3269(0x236)),
                $(this)[_0x4e3269(0x1ff)]("name"),
              )
            : ((emailFilled = ![]),
              unfilledArr["push"]({
                input: $(this)[_0x4e3269(0x1ff)](_0x4e3269(0x1e3)),
              }));
        }),
      $(steps[x])
        [_0x2e19bc(0x2b4)](_0x2e19bc(0x22c))
        [_0x2e19bc(0x2b4)](":input[type=\x22email\x22]")
        ["each"](function (_0x1d4127) {
          const _0x2f4a0e = _0x2e19bc;
          (skipTo = undefined),
            $(this)
              [_0x2f4a0e(0x290)](_0x2f4a0e(0x238))
              [_0x2f4a0e(0x1a2)]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0x2f4a0e(0x290)](_0x2f4a0e(0x238))
                ["data"]("skip-to")),
            $(this)
              [_0x2f4a0e(0x290)](_0x2f4a0e(0x287))
              ["attr"](_0x2f4a0e(0x1c3)) &&
              ((answer = $(this)
                [_0x2f4a0e(0x290)](_0x2f4a0e(0x287))
                [_0x2f4a0e(0x1ff)]("data-go-to")),
              (selections = selections[_0x2f4a0e(0x211)](
                (_0x372baf) => _0x372baf[_0x2f4a0e(0x27e)] !== x,
              )),
              selections[_0x2f4a0e(0x240)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x2f4a0e(0x240)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x2f4a0e(0x289)](
                  (_0x376076) => _0x376076["step"] === x,
                )),
                (selections[objIndex][_0x2f4a0e(0x244)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x2f4a0e(0x21d)] = x)));
        });
  }
  $(steps[x])[_0x2e19bc(0x2b4)](_0x2e19bc(0x218))["is"](":checked") &&
    ((selArr = []),
    $(steps)
      [_0x2e19bc(0x2b4)](_0x2e19bc(0x255))
      [_0x2e19bc(0x1a7)](function (_0x3eb838, _0x34dc07) {
        const _0x285e5c = _0x2e19bc;
        selArr["push"]({
          selected: $(this)[_0x285e5c(0x1a2)](_0x285e5c(0x1ba)),
        });
      }),
    (selString = []),
    selArr[_0x2e19bc(0x1f0)]((_0x105f01) =>
      selString[_0x2e19bc(0x240)](_0x105f01[_0x2e19bc(0x1ba)]),
    ),
    $(steps[x])
      [_0x2e19bc(0x2b4)](_0x2e19bc(0x22c))
      [_0x2e19bc(0x2b4)](_0x2e19bc(0x215))
      [_0x2e19bc(0x1a7)](function () {
        const _0x57c9d3 = _0x2e19bc;
        skipTo = undefined;
        if ($(this)["parents"](_0x57c9d3(0x238))["data"](_0x57c9d3(0x1a3)))
          skipTo = $(this)
            [_0x57c9d3(0x290)](_0x57c9d3(0x238))
            [_0x57c9d3(0x1a2)]("skip-to");
        else
          $(this)[_0x57c9d3(0x1a2)]("skip-to") &&
            (skipTo = $(this)[_0x57c9d3(0x1a2)](_0x57c9d3(0x1a3)));
        selections = selections[_0x57c9d3(0x211)](
          (_0x4f7dd3) => _0x4f7dd3[_0x57c9d3(0x27e)] !== x,
        );
        if ($(this)[_0x57c9d3(0x1a2)](_0x57c9d3(0x1f2)))
          (answer = $(this)[_0x57c9d3(0x1ff)](_0x57c9d3(0x1c3))),
            console["log"](answer, selections),
            selections[_0x57c9d3(0x240)]({ step: x, selected: answer }),
            skipTo &&
              (selections["push"]({ step: skipTo - 0x2, selected: answer }),
              (objIndex = selections["findIndex"](
                (_0x4e5cab) => _0x4e5cab[_0x57c9d3(0x27e)] === x,
              )),
              (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
              (selections[objIndex]["backTo"] = x));
        else
          $(this)
            ["parents"](_0x57c9d3(0x287))
            [_0x57c9d3(0x1a2)](_0x57c9d3(0x1f2)) &&
            ((answer = $(this)
              ["parents"]("[data-go-to]")
              [_0x57c9d3(0x1a2)]("go-to")),
            selections["push"]({ step: x, selected: answer }),
            skipTo &&
              (selections["push"]({ step: skipTo - 0x2, selected: answer }),
              (objIndex = selections[_0x57c9d3(0x289)](
                (_0x2ba8ab) => _0x2ba8ab["step"] === x,
              )),
              (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x57c9d3(0x21d)] = x)));
      }),
    logicExtra
      ? ($(steps[x])
          [_0x2e19bc(0x2b4)](".active-answer-card")
          [_0x2e19bc(0x2b4)]("[data-radio-skip]:visible")
          [_0x2e19bc(0x1a2)](_0x2e19bc(0x20b)) === !![] ||
          $(steps[x])
            [_0x2e19bc(0x2b4)](_0x2e19bc(0x1f9))
            [_0x2e19bc(0x1a2)](_0x2e19bc(0x20b)) === !![]) &&
        skip &&
        selections[_0x2e19bc(0x211)]((_0x52031b) => _0x52031b["step"] === x)[
          _0x2e19bc(0x1cc)
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
            [_0x2e19bc(0x2b4)](_0x2e19bc(0x208))
            [_0x2e19bc(0x1a2)]("radio-delay"),
        )
      : $(steps[x])
          [_0x2e19bc(0x2b4)]("[data-radio-skip]:visible")
          [_0x2e19bc(0x1a2)](_0x2e19bc(0x20b)) === !![] &&
        skip &&
        textareaLength === 0x0 &&
        textInputLength === 0x0 &&
        emailInputLength === 0x0 &&
        checkboxInputLength === 0x0 &&
        setTimeout(
          function () {
            (next = !![]), nextStep(), selectionQuiz();
          },
          $(steps[x])["find"](_0x2e19bc(0x208))["data"]("radio-delay"),
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
  const _0x1d8fe4 = _0x59c4bf;
  $("[data-text=\x22error-message\x22]")[_0x1d8fe4(0x21c)](),
    unfilledArr[_0x1d8fe4(0x1cc)] > 0x0 &&
      unfilledArr[_0x1d8fe4(0x1f0)](function (_0x34b65c) {
        const _0x4252fe = _0x1d8fe4;
        $("input[name=\x22" + _0x34b65c["input"] + "\x22]")
          [_0x4252fe(0x2aa)]("[data-text=\x22error-message\x22]")
          [_0x4252fe(0x270)](),
          $(_0x4252fe(0x2b8) + _0x34b65c[_0x4252fe(0x298)] + "\x22]")
            [_0x4252fe(0x290)]()
            [_0x4252fe(0x28c)](_0x4252fe(0x283))
            [_0x4252fe(0x270)](),
          $(_0x4252fe(0x248) + _0x34b65c["input"] + "\x22]")
            [_0x4252fe(0x2aa)](_0x4252fe(0x283))
            [_0x4252fe(0x270)](),
          $("select[name=\x22" + _0x34b65c["input"] + "\x22]")
            [_0x4252fe(0x2aa)](_0x4252fe(0x283))
            [_0x4252fe(0x270)]();
      });
}
function resetInputErrorMessage(_0x1af93c) {
  const _0x5df228 = _0x59c4bf;
  $(_0x5df228(0x2b8) + _0x1af93c + "\x22]")
    [_0x5df228(0x2aa)](_0x5df228(0x283))
    ["hide"](),
    $(_0x5df228(0x2b8) + _0x1af93c + "\x22]")
      [_0x5df228(0x290)]()
      [_0x5df228(0x28c)](_0x5df228(0x283))
      [_0x5df228(0x21c)](),
    $("textarea[name=\x22" + _0x1af93c + "\x22]")
      [_0x5df228(0x2aa)]("[data-text=\x22error-message\x22]")
      ["hide"](),
    $(_0x5df228(0x210) + _0x1af93c + "\x22]")
      [_0x5df228(0x2aa)](_0x5df228(0x283))
      [_0x5df228(0x21c)]();
}
function increaseCurstep() {
  const _0x5ca988 = _0x59c4bf;
  countCard
    ? ((curStep = curStep + 0x1),
      $(_0x5ca988(0x2b9))[_0x5ca988(0x246)](steps[_0x5ca988(0x1cc)]))
    : $(steps[x])[_0x5ca988(0x1a2)]("card")
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    $(_0x5ca988(0x201))["text"](curStep);
}
function decreaseCurstep() {
  const _0x4ae8bd = _0x59c4bf;
  countCard
    ? ((curStep = curStep - 0x1),
      $(_0x4ae8bd(0x2b9))[_0x4ae8bd(0x246)](steps[_0x4ae8bd(0x1cc)]))
    : $(steps[x])[_0x4ae8bd(0x1a2)](_0x4ae8bd(0x206))
      ? (curStep = curStep - 0x0)
      : (curStep = curStep - 0x1),
    $(_0x4ae8bd(0x201))[_0x4ae8bd(0x246)](curStep);
}
$(_0x59c4bf(0x19a))["on"](_0x59c4bf(0x27c), function (_0x386214) {
  const _0x1e64c4 = _0x59c4bf;
  console[_0x1e64c4(0x1f7)](_0x1e64c4(0x281)),
    $(this)["data"](_0x1e64c4(0x1e1)) &&
      (redirectTo = $(this)[_0x1e64c4(0x1a2)](_0x1e64c4(0x1e1))),
    !$(this)[_0x1e64c4(0x1a2)]("new-tab") &&
      (newTab = $(this)[_0x1e64c4(0x1a2)](_0x1e64c4(0x293))),
    (successCard = $(this)["data"](_0x1e64c4(0x275))),
    _0x386214[_0x1e64c4(0x198)](),
    _0x386214[_0x1e64c4(0x1f3)](),
    logicExtra &&
      ($(this)[_0x1e64c4(0x1e9)](_0x1e64c4(0x242), !![]),
      $(steps)["find"](":input")[_0x1e64c4(0x1e9)](_0x1e64c4(0x249), ![])),
    localStorage[_0x1e64c4(0x294)](_0x1e64c4(0x2af)),
    fill
      ? ($(this)[_0x1e64c4(0x1a2)](_0x1e64c4(0x1fc))
          ? $(this)[_0x1e64c4(0x280)](
              $(this)[_0x1e64c4(0x1a2)](_0x1e64c4(0x1fc)),
            )
          : ($(this)[_0x1e64c4(0x280)](_0x1e64c4(0x261)),
            $(this)["text"](_0x1e64c4(0x261))),
        $(_0x1e64c4(0x19f))[_0x1e64c4(0x288)](),
        $(_0x1e64c4(0x1c7))["length"] > 0x0 &&
          grecaptcha[_0x1e64c4(0x245)]()[_0x1e64c4(0x1cc)] === 0x0 &&
          (form[_0x1e64c4(0x2b4)](_0x1e64c4(0x19a))["text"](oldSubmitText),
          form[_0x1e64c4(0x2b4)](_0x1e64c4(0x19a))[_0x1e64c4(0x280)](
            oldSubmitText,
          )),
        customError && $(_0x1e64c4(0x283))[_0x1e64c4(0x21c)]())
      : customError && displayErrorMessage();
});
function nextStep() {
  const _0x5105dd = _0x59c4bf;
  customError
    ? ($(_0x5105dd(0x283))[_0x5105dd(0x21c)](),
      fill
        ? (x++,
          increaseCurstep(),
          (progress = x),
          x <= steps[_0x5105dd(0x1cc)] - 0x1 &&
            (updateStep(), memory && saveFilledInput()))
        : displayErrorMessage())
    : (x++,
      increaseCurstep(),
      x > progress && (progress = x),
      x <= steps[_0x5105dd(0x1cc)] - 0x1 &&
        (updateStep(), memory && saveFilledInput())),
    andLogic();
}
function backStep() {
  const _0x430f8a = _0x59c4bf;
  customError && $(_0x430f8a(0x283))["hide"](),
    decreaseCurstep(),
    x > 0x0 &&
      ($(progressbar[x])[_0x430f8a(0x25e)](_0x430f8a(0x241)),
      selections[_0x430f8a(0x211)]((_0x439d06) => _0x439d06["skipTo"] === x)[
        "length"
      ] > 0x0
        ? (x = parseInt(
            getSafe(
              () =>
                selections[_0x430f8a(0x211)](
                  (_0x51ca00) => _0x51ca00[_0x430f8a(0x244)] === x,
                )[0x0][_0x430f8a(0x21d)],
            ),
          ))
        : x--,
      updateStep()),
    ($(steps[x])
      [_0x430f8a(0x2b4)](_0x430f8a(0x1d2))
      [_0x430f8a(0x1a2)](_0x430f8a(0x20b)) === !![] ||
      $(steps[x])
        [_0x430f8a(0x2b4)](".active-answer-card")
        ["find"](_0x430f8a(0x1d2))
        [_0x430f8a(0x1a2)]("radio-skip") === !![] ||
      $(steps[x])
        [_0x430f8a(0x2b4)](_0x430f8a(0x1f9))
        [_0x430f8a(0x1a2)]("radio-skip") === !![]) &&
      ((all_data = all_data["filter"](
        (_0x4fdd49) =>
          _0x4fdd49["field"] !==
          $(steps[x])
            [_0x430f8a(0x2b4)](_0x430f8a(0x20c))
            [_0x430f8a(0x1ff)](_0x430f8a(0x1e3)),
      )),
      $(
        _0x430f8a(0x223) +
          $(steps[x])
            [_0x430f8a(0x2b4)](_0x430f8a(0x20c))
            [_0x430f8a(0x1ff)](_0x430f8a(0x1e3)) +
          "\x22]",
      )[_0x430f8a(0x21c)](),
      $(steps[x])
        [_0x430f8a(0x2b4)](_0x430f8a(0x286))
        [_0x430f8a(0x1e9)]("checked", ![]),
      $(steps[x])
        ["find"](_0x430f8a(0x1ee))
        [_0x430f8a(0x25e)]("w--redirected-checked"),
      validation());
}
weightedSelectionRange &&
  $(_0x59c4bf(0x1c0))[_0x59c4bf(0x1a7)](function () {
    const _0x54603e = _0x59c4bf;
    $(this)[_0x54603e(0x19b)](
      _0x54603e(0x2a8) +
        $(this)[_0x54603e(0x1a2)](_0x54603e(0x25d)) +
        _0x54603e(0x19c),
    );
  });
function selectionQuiz() {
  const _0x43b703 = _0x59c4bf;
  if ($(this)[_0x43b703(0x2b4)](_0x43b703(0x291))) {
    $(_0x43b703(0x1c0))[_0x43b703(0x21c)](),
      $("[data-selection-weight]")[_0x43b703(0x21c)]();
    if (weightedSelection) {
      (selTotal = 0x0),
        selArr[_0x43b703(0x1f0)](function (_0x47a646) {
          const _0x57eb77 = _0x43b703;
          selTotal = selTotal + _0x47a646[_0x57eb77(0x1ba)];
        }),
        $(_0x43b703(0x2a5))["text"](selTotal);
      if ($(_0x43b703(0x1c8) + selTotal + "\x22]")["length"] > 0x0)
        $(_0x43b703(0x1c8) + selTotal + "\x22]")[_0x43b703(0x270)]();
      else
        $(_0x43b703(0x233) + selTotal + ")")
          ? $("[data-range]:contains(" + selTotal + ")")
              [_0x43b703(0x276)](_0x43b703(0x1c0))
              ["eq"](0x0)
              ["show"]()
          : $("[data-selection=\x22other\x22]")[_0x43b703(0x270)]();
    } else {
      let _0x25252b = -0x1;
      $(_0x43b703(0x1c0))[_0x43b703(0x1a7)](function (_0x440672) {
        const _0x5c8bc1 = _0x43b703;
        $($(_0x5c8bc1(0x1c0))[_0x440672])
          [_0x5c8bc1(0x1a2)]("selection")
          [_0x5c8bc1(0x278)](selString["join"]()) && (_0x25252b = _0x440672);
      }),
        _0x25252b > -0x1
          ? $($(_0x43b703(0x1c0))[_0x25252b])["fadeIn"]()
          : $(_0x43b703(0x2b2))[_0x43b703(0x270)]();
    }
  }
}
function triggerInputAllData() {
  const _0x466c24 = _0x59c4bf;
  if (savedFilledInput && memory)
    savedFilledInput[_0x466c24(0x1f0)]((_0x397eb7) => {
      const _0x5160d8 = _0x466c24;
      var _0x8f6a81 = $(
          _0x5160d8(0x2b8) +
            _0x397eb7[_0x5160d8(0x26c)] +
            "\x22][value=\x22" +
            _0x397eb7["value"] +
            "\x22]",
        ),
        _0x29fb69 = $(
          "input[name=\x22" + _0x397eb7[_0x5160d8(0x26c)] + "\x22]",
        );
      console[_0x5160d8(0x1f7)](
        _0x8f6a81[_0x5160d8(0x290)](_0x5160d8(0x272))[_0x5160d8(0x1a2)](
          _0x5160d8(0x20b),
        ),
      );
      if (_0x8f6a81[_0x5160d8(0x1ff)](_0x5160d8(0x22d)) !== _0x5160d8(0x27d)) {
        if (
          _0x8f6a81[_0x5160d8(0x1ff)](_0x5160d8(0x22d)) === _0x5160d8(0x254) &&
          !_0x8f6a81[_0x5160d8(0x290)]("[data-radio-skip]")[_0x5160d8(0x1a2)](
            _0x5160d8(0x20b),
          )
        )
          _0x8f6a81["click"](),
            _0x8f6a81[_0x5160d8(0x2aa)](".w-radio-input")["addClass"](
              _0x5160d8(0x237),
            ),
            _0x8f6a81[_0x5160d8(0x1e6)](_0x5160d8(0x298));
        else
          _0x397eb7[_0x5160d8(0x1b4)] === "on"
            ? (_0x29fb69[_0x5160d8(0x27c)](),
              _0x29fb69[_0x5160d8(0x2aa)](_0x5160d8(0x29b))["addClass"](
                "w--redirected-checked",
              ),
              _0x29fb69["trigger"](_0x5160d8(0x298)))
            : (console[_0x5160d8(0x1f7)](
                _0x397eb7["inputName"],
                _0x397eb7[_0x5160d8(0x1b4)],
              ),
              _0x29fb69[_0x5160d8(0x280)](_0x397eb7[_0x5160d8(0x1b4)]),
              _0x29fb69[_0x5160d8(0x280)](_0x397eb7[_0x5160d8(0x1b4)]),
              $(_0x5160d8(0x1ae) + _0x397eb7[_0x5160d8(0x1b4)] + "\x22]")[
                "prop"
              ]("selected", !![]),
              _0x29fb69[_0x5160d8(0x1e6)](_0x5160d8(0x298)),
              _0x29fb69[_0x5160d8(0x1e6)]("change"));
      }
    });
  else
    _params &&
      (getParams(),
      searchQ[_0x466c24(0x1f0)]((_0xbb6522) => {
        const _0x30a720 = _0x466c24;
        if (
          $(
            "input[name=\x22" +
              _0xbb6522[_0x30a720(0x26c)] +
              _0x30a720(0x1dc) +
              _0xbb6522[_0x30a720(0x1b4)] +
              "\x22]",
          )[_0x30a720(0x1ff)](_0x30a720(0x22d)) !== _0x30a720(0x27d)
        ) {
          if (
            $(
              _0x30a720(0x2b8) +
                _0xbb6522[_0x30a720(0x1cd)] +
                _0x30a720(0x1dc) +
                _0xbb6522[_0x30a720(0x280)] +
                "\x22]",
            )[_0x30a720(0x1ff)](_0x30a720(0x22d)) === "radio"
          )
            $(
              _0x30a720(0x2b8) +
                _0xbb6522[_0x30a720(0x1cd)] +
                _0x30a720(0x1dc) +
                _0xbb6522["val"] +
                "\x22]",
            )[_0x30a720(0x27c)](),
              $(
                _0x30a720(0x2b8) +
                  _0xbb6522[_0x30a720(0x1cd)] +
                  _0x30a720(0x1dc) +
                  _0xbb6522[_0x30a720(0x280)] +
                  "\x22]",
              )
                [_0x30a720(0x2aa)](_0x30a720(0x227))
                ["addClass"]("w--redirected-checked"),
              $(
                "input[name=\x22" +
                  _0xbb6522[_0x30a720(0x1cd)] +
                  _0x30a720(0x1dc) +
                  _0xbb6522[_0x30a720(0x280)] +
                  "\x22]",
              )[_0x30a720(0x1e6)](_0x30a720(0x298));
          else
            _0xbb6522[_0x30a720(0x280)] === "on"
              ? ($(_0x30a720(0x2b8) + _0xbb6522[_0x30a720(0x1cd)] + "\x22]")[
                  _0x30a720(0x27c)
                ](),
                $(_0x30a720(0x2b8) + _0xbb6522[_0x30a720(0x1cd)] + "\x22]")
                  ["siblings"](_0x30a720(0x29b))
                  [_0x30a720(0x1b1)](_0x30a720(0x237)),
                $(_0x30a720(0x2b8) + _0xbb6522[_0x30a720(0x1cd)] + "\x22]")[
                  _0x30a720(0x1e6)
                ](_0x30a720(0x298)))
              : ($(_0x30a720(0x2b8) + _0xbb6522[_0x30a720(0x1cd)] + "\x22]")[
                  _0x30a720(0x280)
                ](_0xbb6522[_0x30a720(0x280)]),
                $(_0x30a720(0x248) + _0xbb6522[_0x30a720(0x1cd)] + "\x22]")[
                  _0x30a720(0x280)
                ](_0xbb6522[_0x30a720(0x280)]),
                $("select[name=\x22" + _0xbb6522["key"] + "\x22]")
                  [_0x30a720(0x2b4)](
                    _0x30a720(0x1ae) + _0xbb6522["val"] + "\x22]",
                  )
                  ["prop"](_0x30a720(0x1ba), !![]),
                $("input[name=\x22" + _0xbb6522[_0x30a720(0x1cd)] + "\x22]")[
                  _0x30a720(0x1e6)
                ](_0x30a720(0x298)),
                $("input[name=\x22" + _0xbb6522[_0x30a720(0x1cd)] + "\x22]")[
                  _0x30a720(0x1e6)
                ](_0x30a720(0x263)));
        }
      }));
}
$(_0x59c4bf(0x1eb))["on"](_0x59c4bf(0x27c), function () {
  (next = !![]), nextStep(), selectionQuiz();
}),
  $(_0x59c4bf(0x2a9))["on"](_0x59c4bf(0x27c), function () {
    (next = ![]), (back = !![]), backStep();
  }),
  $(steps)
    [_0x59c4bf(0x2b4)](":input")
    ["not"](_0x59c4bf(0x212))
    ["on"](_0x59c4bf(0x298), function (_0x547478) {
      validation(), andLogic();
    }),
  $(steps)
    [_0x59c4bf(0x2b4)](_0x59c4bf(0x286))
    ["on"]("click", function () {
      (skip = !![]), validation();
    });
$(_0x59c4bf(0x235))[_0x59c4bf(0x1a2)]("clickable-all")
  ? $(_0x59c4bf(0x26d))["removeClass"]("disabled")
  : $("[data-form=\x22custom-progress-indicator\x22]")["addClass"]("disabled");
function clickableIndicator() {
  const _0x37504c = _0x59c4bf;
  $("[data-clickable]")[_0x37504c(0x1a2)]("clickable") &&
    ($(_0x37504c(0x2a4))[_0x37504c(0x25e)](_0x37504c(0x241)),
    $(_0x37504c(0x19e))["data"]("clickable-all")
      ? ((x = $(this)[_0x37504c(0x292)]()), updateStep())
      : $(this)[_0x37504c(0x292)]() <= progress &&
        ((x = $(this)["index"]()), updateStep())),
    $(_0x37504c(0x201))[_0x37504c(0x246)](x + 0x1);
}
$(_0x59c4bf(0x26d))["on"](_0x59c4bf(0x27c), clickableIndicator);
$(_0x59c4bf(0x19f))[_0x59c4bf(0x1a2)]("debug-mode") &&
  ($(_0x59c4bf(0x287))["each"](function () {
    const _0x522302 = _0x59c4bf;
    $(this)[_0x522302(0x19b)](
      "<br>Data\x20Go\x20To\x20=\x20",
      $(this)["data"](_0x522302(0x1f2)),
    );
  }),
  $("[data-answer]")["each"](function () {
    const _0x105810 = _0x59c4bf;
    $(this)["append"](_0x105810(0x1fd), $(this)["data"]("answer"));
  }));
function resetFormly() {
  const _0x58e500 = _0x59c4bf;
  $("[data-form=\x22multistep\x22]")[_0x58e500(0x1e6)](_0x58e500(0x1d8)),
    $(_0x58e500(0x19f))
      [_0x58e500(0x290)]()
      ["find"](".w-form-done")
      [_0x58e500(0x21c)](),
    (x = 0x0),
    updateStep(),
    $(_0x58e500(0x19f))["show"](),
    $(_0x58e500(0x19a))[_0x58e500(0x246)](oldSubmitText),
    $(_0x58e500(0x19a))[_0x58e500(0x280)](oldSubmitText),
    $("[data-text=\x22current-step\x22]")["text"](0x1),
    $("[data-form=\x22multistep\x22]")
      ["find"](_0x58e500(0x22f))
      [_0x58e500(0x2aa)](_0x58e500(0x29b))
      ["removeClass"](_0x58e500(0x237));
}
$(document)[_0x59c4bf(0x256)](function (_0x2cd0f8, _0x26288d, _0x7cec2b) {
  const _0xa7c118 = _0x59c4bf;
  if (_0x7cec2b[_0xa7c118(0x1e0)][_0xa7c118(0x278)](_0xa7c118(0x29a))) {
    const _0x43a6db = _0x26288d[_0xa7c118(0x22a)] === 0xc8,
      _0x51d970 = _0xa7c118(0x226);
    redirectTo &&
      _0x43a6db &&
      (newTab
        ? window[_0xa7c118(0x1c4)](redirectTo, _0xa7c118(0x1ca))
        : setTimeout(() => {
            location["href"] = redirectTo;
          }, redirectDelay)),
      _0x43a6db &&
        successCard !== "" &&
        $(_0xa7c118(0x209) + successCard + "\x22]")[_0xa7c118(0x270)](),
      _0x43a6db &&
        formReset &&
        setTimeout(() => {
          resetFormly();
        }, resetDelay),
      !_0x43a6db &&
        ($(_0xa7c118(0x19a))["val"](_0xa7c118(0x261)),
        $(_0xa7c118(0x19a))[_0xa7c118(0x246)](_0xa7c118(0x261)));
  }
}),
  $(_0x59c4bf(0x24f))["on"](_0x59c4bf(0x27c), function () {
    const _0x40e2cb = _0x59c4bf;
    var _0x114c2d = $(this)
      [_0x40e2cb(0x276)]()
      [_0x40e2cb(0x2b4)](_0x40e2cb(0x1ea))
      ["data"]("input-field");
    setTimeout(function () {
      const _0x6ed24b = _0x40e2cb;
      $(_0x6ed24b(0x2b8) + _0x114c2d + "\x22]")[_0x6ed24b(0x1ed)]();
    }, 0x64),
      (back = !![]),
      (x = $(this)[_0x40e2cb(0x1a2)](_0x40e2cb(0x2b3)) - 0x1),
      updateStep(),
      countCard
        ? ((curStep = x + 0x1),
          $(_0x40e2cb(0x2b9))["text"](steps[_0x40e2cb(0x1cc)]))
        : $(steps[x])["data"](_0x40e2cb(0x206))
          ? (curStep = x + 0x0)
          : (curStep = x + 0x1),
      $(_0x40e2cb(0x201))[_0x40e2cb(0x246)](curStep),
      (back = ![]);
  }),
  $(_0x59c4bf(0x207))["on"](_0x59c4bf(0x27c), function () {
    const _0x220ccb = _0x59c4bf;
    $(_0x220ccb(0x19f))[_0x220ccb(0x1e6)](_0x220ccb(0x1d8));
    let _0x9c12c1 = $(this);
    $(this)["text"]("Please\x20wait..."),
      setTimeout(function () {
        const _0x5c586d = _0x220ccb;
        $(_0x9c12c1)["text"](oldResetText),
          $(_0x9c12c1)[_0x5c586d(0x290)](_0x5c586d(0x1bd))[_0x5c586d(0x21c)](),
          (x = 0x0),
          updateStep(),
          $(_0x5c586d(0x19f))["show"](),
          $("[data-form=\x22submit-btn\x22]")[_0x5c586d(0x246)](oldSubmitText),
          $(_0x5c586d(0x19a))[_0x5c586d(0x280)](oldSubmitText),
          $(_0x9c12c1)[_0x5c586d(0x280)](oldSubmitText),
          $(_0x5c586d(0x201))["text"](0x1),
          $(_0x5c586d(0x19f))
            [_0x5c586d(0x2b4)]("input:checkbox")
            [_0x5c586d(0x2aa)](".w-checkbox-input")
            [_0x5c586d(0x25e)]("w--redirected-checked");
      }, resetDelay);
  }),
  $("body")["on"](_0x59c4bf(0x22e), function (_0x3616db) {
    const _0x23e82f = _0x59c4bf;
    if (_0x3616db[_0x23e82f(0x20e)] === 0xd) {
      _0x3616db[_0x23e82f(0x198)](), _0x3616db[_0x23e82f(0x1f3)]();
      if ($(steps[x])["find"](_0x23e82f(0x196))["is"](":focus"))
        $(steps[x])
          [_0x23e82f(0x2b4)](_0x23e82f(0x229))
          [_0x23e82f(0x280)](
            $(steps[x])
              [_0x23e82f(0x2b4)](_0x23e82f(0x229))
              [_0x23e82f(0x280)]() + "\x0a",
          );
      else
        $(_0x23e82f(0x24d))[_0x23e82f(0x1a2)](_0x23e82f(0x23a)) &&
          fill &&
          totalSteps > curStep &&
          $("[data-form=\x22next-btn\x22]")[0x0][_0x23e82f(0x27c)]();
    }
  }),
  $("body")[_0x59c4bf(0x243)](function (_0x4ab137) {
    const _0x27bf9d = _0x59c4bf;
    (_0x4ab137[_0x27bf9d(0x191)] || _0x4ab137[_0x27bf9d(0x1a0)]) &&
      _0x4ab137[_0x27bf9d(0x20e)] == 0xd &&
      (x >= steps["length"] - 0x1 && fill
        ? $(steps[x])["find"](_0x27bf9d(0x23c))[_0x27bf9d(0x27c)]()
        : (_0x4ab137[_0x27bf9d(0x198)](), _0x4ab137[_0x27bf9d(0x1f3)]()));
  }),
  $(_0x59c4bf(0x19f))
    [_0x59c4bf(0x2b4)](_0x59c4bf(0x1b8))
    ["on"]("change", function () {
      const _0x308ac6 = _0x59c4bf;
      (all_data = all_data[_0x308ac6(0x211)](
        (_0x429d19) => _0x429d19[_0x308ac6(0x2a2)] !== $(this)["attr"]("name"),
      )),
        $(this)[_0x308ac6(0x1ff)]("type") === _0x308ac6(0x1de)
          ? $(this)["is"](_0x308ac6(0x1f5))
            ? all_data[_0x308ac6(0x240)]({
                field: $(this)[_0x308ac6(0x1ff)](_0x308ac6(0x1e3)),
                value: $(this)
                  [_0x308ac6(0x2aa)](_0x308ac6(0x23f))
                  [_0x308ac6(0x246)](),
              })
            : $(_0x308ac6(0x223) + $(this)["attr"](_0x308ac6(0x1e3)) + "\x22]")[
                _0x308ac6(0x21c)
              ]()
          : (all_data[_0x308ac6(0x240)]({
              field: $(this)["attr"]("name"),
              value: $(this)[_0x308ac6(0x280)](),
            }),
            $(this)[_0x308ac6(0x280)]() !== "" &&
              resetInputErrorMessage($(this)["attr"](_0x308ac6(0x1e3)))),
        all_data[_0x308ac6(0x1f0)](function (_0x7d5810) {
          const _0x3078c3 = _0x308ac6;
          $(_0x3078c3(0x223) + _0x7d5810["field"] + "\x22]")[
            _0x3078c3(0x29c)
          ](),
            $(_0x3078c3(0x223) + _0x7d5810[_0x3078c3(0x2a2)] + "\x22]")[
              _0x3078c3(0x246)
            ](_0x7d5810[_0x3078c3(0x1b4)]);
        });
    }),
  $(_0x59c4bf(0x19f))
    [_0x59c4bf(0x2b4)](_0x59c4bf(0x196))
    ["on"]("change", function () {
      const _0x56ab3c = _0x59c4bf;
      $(this)[_0x56ab3c(0x280)]() !== "" &&
        resetInputErrorMessage($(this)[_0x56ab3c(0x1ff)](_0x56ab3c(0x1e3))),
        (all_data = all_data[_0x56ab3c(0x211)](
          (_0x1b0e7e) =>
            _0x1b0e7e[_0x56ab3c(0x2a2)] !==
            $(this)[_0x56ab3c(0x1ff)](_0x56ab3c(0x1e3)),
        )),
        all_data[_0x56ab3c(0x240)]({
          field: $(this)[_0x56ab3c(0x1ff)](_0x56ab3c(0x1e3)),
          value: $(this)[_0x56ab3c(0x280)](),
        }),
        all_data[_0x56ab3c(0x1f0)](function (_0x579b26) {
          const _0x40e47b = _0x56ab3c;
          $(_0x40e47b(0x223) + _0x579b26[_0x40e47b(0x2a2)] + "\x22]")[
            _0x40e47b(0x29c)
          ](),
            $(_0x40e47b(0x223) + _0x579b26["field"] + "\x22]")[
              _0x40e47b(0x246)
            ](_0x579b26[_0x40e47b(0x1b4)]);
        });
    }),
  $(_0x59c4bf(0x19f))
    [_0x59c4bf(0x2b4)](_0x59c4bf(0x259))
    ["on"](_0x59c4bf(0x263), function () {
      const _0x5e07f5 = _0x59c4bf;
      $(this)[_0x5e07f5(0x280)]() !== "" &&
        resetInputErrorMessage($(this)[_0x5e07f5(0x1ff)](_0x5e07f5(0x1e3)));
      var _0x97f00c = $(this)[_0x5e07f5(0x1a2)]("ms-field");
      (all_data = all_data[_0x5e07f5(0x211)](
        (_0x475c16) =>
          _0x475c16["field"] !== $(this)[_0x5e07f5(0x1ff)](_0x5e07f5(0x1e3)),
      )),
        all_data[_0x5e07f5(0x240)]({
          field: $(this)["attr"](_0x5e07f5(0x1e3)),
          value: _0x97f00c
            ? $(this)
                [_0x5e07f5(0x2b4)]("option[value=\x22$(this).val()\x22]")
                ["text"]()
            : $(this)["val"](),
        }),
        all_data[_0x5e07f5(0x1f0)](function (_0x155cca) {
          const _0x1bb7e4 = _0x5e07f5;
          $("[data-input-field=\x22" + _0x155cca[_0x1bb7e4(0x2a2)] + "\x22]")[
            _0x1bb7e4(0x29c)
          ](),
            $(_0x1bb7e4(0x223) + _0x155cca[_0x1bb7e4(0x2a2)] + "\x22]")[
              _0x1bb7e4(0x246)
            ](_0x155cca[_0x1bb7e4(0x1b4)]);
        });
    }),
  updateStep(),
  triggerInputAllData(),
  $(_0x59c4bf(0x23b))[_0x59c4bf(0x1a7)](function () {
    const _0x570690 = _0x59c4bf,
      _0x5be718 = $(this)[_0x570690(0x2b4)](_0x570690(0x19d)),
      _0x4b2364 = [];
    console[_0x570690(0x1f7)](_0x4b2364),
      _0x5be718[_0x570690(0x1a7)](function () {
        const _0xd7402d = _0x570690;
        _0x4b2364["push"]($(this)[_0xd7402d(0x246)]()[_0xd7402d(0x2b6)]());
      });
    const _0x50f088 = $(this)["siblings"](_0x570690(0x1b6));
    $[_0x570690(0x1a7)](_0x4b2364, function (_0x273ca0, _0x6a26fb) {
      const _0x336c31 = _0x570690,
        _0x12e797 = $("<option>")
          [_0x336c31(0x280)](_0x6a26fb)
          ["text"](_0x6a26fb);
      _0x50f088[_0x336c31(0x19b)](_0x12e797);
    });
  });
function cloneRemove() {
  const _0x400a88 = _0x59c4bf;
  $(_0x400a88(0x29f))[_0x400a88(0x1a7)](function () {
    const _0x48097d = _0x400a88;
    $(this)[_0x48097d(0x2b4)]("[data-clone]")[_0x48097d(0x1cc)] < 0x2
      ? $(this)["find"](_0x48097d(0x214))[_0x48097d(0x21c)]()
      : $(this)[_0x48097d(0x2b4)](_0x48097d(0x214))[_0x48097d(0x29c)]();
  });
}
function cloneRemoveInput() {
  const _0x2113b2 = _0x59c4bf;
  $(_0x2113b2(0x1a5))[_0x2113b2(0x1a7)](function () {
    const _0x1e21b2 = _0x2113b2;
    $(this)[_0x1e21b2(0x2b4)](_0x1e21b2(0x1bb))[_0x1e21b2(0x1cc)] < 0x2
      ? $(this)
          [_0x1e21b2(0x2b4)]("[data-form=\x22remove-input-clone\x22]")
          [_0x1e21b2(0x21c)]()
      : $(this)["find"](_0x1e21b2(0x230))["show"]();
  });
}
$(_0x59c4bf(0x214))["on"](_0x59c4bf(0x27c), function () {
  const _0x5af134 = _0x59c4bf,
    _0x5bff22 =
      $(this)[_0x5af134(0x290)](_0x5af134(0x1bf))[_0x5af134(0x1cc)] > 0x0
        ? $(this)[_0x5af134(0x290)](_0x5af134(0x1bf))[_0x5af134(0x292)]()
        : $(this)[_0x5af134(0x290)](_0x5af134(0x200))[_0x5af134(0x292)](),
    _0x17a249 =
      $(this)["parents"](_0x5af134(0x1bf))[_0x5af134(0x1cc)] > 0x0
        ? $(this)[_0x5af134(0x290)]("[data-clone]")["data"](_0x5af134(0x21f))
        : $(this)
            [_0x5af134(0x290)]("[data-display]")
            [_0x5af134(0x1a2)](_0x5af134(0x28f));
  $(_0x5af134(0x2a6) + _0x17a249 + "\x22]")
    ["eq"](_0x5bff22)
    ["remove"](),
    $(_0x5af134(0x1b7) + _0x17a249 + "\x22]")
      ["eq"](_0x5bff22)
      ["remove"](),
    cloneRemove(),
    validation();
}),
  $("[data-form=\x22remove-input-clone\x22]")["on"](
    _0x59c4bf(0x27c),
    function () {
      const _0x592b03 = _0x59c4bf;
      let _0x96a4f1 = $(this)["siblings"]()[_0x592b03(0x1ff)]("name");
      $(this)["parent"]("[data-clone-input]")[_0x592b03(0x2ad)](),
        $(_0x592b03(0x223) + _0x96a4f1 + "\x22]")
          ["parent"](_0x592b03(0x274))
          [_0x592b03(0x2ad)](),
        cloneRemove(),
        validation();
    },
  ),
  $(_0x59c4bf(0x1aa))["on"](_0x59c4bf(0x27c), function () {
    const _0x397d39 = _0x59c4bf;
    let _0x598dab = $(this)[_0x397d39(0x1a2)](_0x397d39(0x247));
    var _0x5caa36 = $(_0x397d39(0x2a6) + _0x598dab + "\x22]")
        ["eq"](0x0)
        [_0x397d39(0x21f)](!![]),
      _0x1e7ff3 = $(_0x397d39(0x1b7) + _0x598dab + "\x22]")
        ["eq"](0x0)
        [_0x397d39(0x21f)](!![]);
    let _0x3beac9 = "";
    $(this)["find"](_0x397d39(0x214))["show"](),
      cloneRemove(),
      _0x5caa36[_0x397d39(0x2b4)]("[data-clone-input]")
        [_0x397d39(0x2b4)](_0x397d39(0x298))
        [_0x397d39(0x280)](""),
      _0x5caa36[_0x397d39(0x2b4)]("[data-clone-input]")
        ["not"](_0x397d39(0x1fe))
        [_0x397d39(0x2ad)](),
      _0x1e7ff3["find"](_0x397d39(0x274))
        [_0x397d39(0x21b)](_0x397d39(0x1fe))
        [_0x397d39(0x2ad)](),
      _0x5caa36[_0x397d39(0x2b4)](_0x397d39(0x298))["each"](function () {
        const _0x475fc5 = _0x397d39;
        if ($(this)["closest"]("[data-clone-input]")["length"] > 0x0) {
          let _0x5c3872 = 0x0;
          const _0x2a43f0 = $(this)
            [_0x475fc5(0x194)](_0x475fc5(0x1bb))
            [_0x475fc5(0x1a2)](_0x475fc5(0x221));
          console[_0x475fc5(0x1f7)](
            $(this)
              [_0x475fc5(0x194)](_0x475fc5(0x1bb))
              [_0x475fc5(0x1a2)]("clone-input"),
            this["name"],
          ),
            $("[data-clone-input=\x22" + _0x2a43f0 + _0x475fc5(0x250))[
              _0x475fc5(0x1a7)
            ](function () {
              const _0x11bf84 = _0x475fc5,
                _0x483f0a = $(this)[_0x11bf84(0x1ff)](_0x11bf84(0x1e3));
              if (_0x483f0a && _0x483f0a[_0x11bf84(0x197)]("relationship-")) {
                const _0x3e35fe = parseInt(
                  _0x483f0a[_0x11bf84(0x24c)]("-")[0x1],
                );
                !isNaN(_0x3e35fe) &&
                  _0x3e35fe > _0x5c3872 &&
                  (_0x5c3872 = _0x3e35fe);
              }
            }),
            _0x5c3872++,
            (_0x3beac9 = this[_0x475fc5(0x1e3)] + "-" + _0x5c3872),
            console[_0x475fc5(0x1f7)](_0x2a43f0, _0x3beac9);
        } else
          _0x3beac9 =
            this[_0x475fc5(0x1e3)] +
            "-" +
            (parseInt(
              $(_0x475fc5(0x2a6) + _0x598dab + "\x22]")
                [_0x475fc5(0x257)]()
                [_0x475fc5(0x292)](),
            ) +
              0x1);
        $(this)[_0x475fc5(0x280)](""),
          $(this)[_0x475fc5(0x1ff)](_0x475fc5(0x1e3), _0x3beac9),
          $(this)[_0x475fc5(0x1ff)](_0x475fc5(0x277), _0x3beac9);
      }),
      _0x1e7ff3[_0x397d39(0x2b4)](_0x397d39(0x1ea))[_0x397d39(0x1a7)](
        function () {
          const _0x1d8468 = _0x397d39;
          if ($(this)[_0x1d8468(0x1a2)]("input-field")) {
            let _0x9bf2a9 = 0x0;
            const _0x3b1fed = $(this)
              [_0x1d8468(0x1a2)](_0x1d8468(0x29e))
              ["split"]("-")[0x0];
            $(
              _0x1d8468(0x1b7) +
                _0x598dab +
                _0x1d8468(0x1b2) +
                _0x3b1fed +
                "\x22]",
            )[_0x1d8468(0x1a7)](function () {
              const _0x239e5e = _0x1d8468,
                _0x2ad1d6 = $(this)[_0x239e5e(0x1ff)]("data-input-field"),
                _0x36990e = parseInt(_0x2ad1d6[_0x239e5e(0x24c)]("-")[0x1]);
              !isNaN(_0x36990e) &&
                _0x36990e > _0x9bf2a9 &&
                (_0x9bf2a9 = _0x36990e);
            }),
              _0x9bf2a9++;
            const _0x374f48 = _0x3b1fed + "-" + _0x9bf2a9;
            console["log"](_0x374f48),
              $(this)[_0x1d8468(0x1ff)](_0x1d8468(0x1f4), _0x374f48);
          }
        },
      ),
      $(_0x397d39(0x2a0) + _0x598dab + "\x22]")[_0x397d39(0x19b)](_0x5caa36),
      $(_0x397d39(0x234) + _0x598dab + "\x22]")[_0x397d39(0x19b)](_0x1e7ff3),
      $("[data-index=\x22" + _0x598dab + "\x22]")["each"](function () {
        const _0x164c03 = _0x397d39;
        $(this)["text"](
          $(this)
            [_0x164c03(0x290)](_0x164c03(0x2a6) + _0x598dab + "\x22]")
            [_0x164c03(0x292)]() + 0x1,
        );
      }),
      $(_0x397d39(0x25b) + _0x598dab + "\x22]")[_0x397d39(0x1a7)](function () {
        const _0xfc009f = _0x397d39;
        $(this)[_0xfc009f(0x246)](
          $(this)
            [_0xfc009f(0x290)](_0xfc009f(0x1b7) + _0x598dab + "\x22]")
            [_0xfc009f(0x292)]() + 0x1,
        );
      }),
      validation();
  }),
  $(_0x59c4bf(0x217))["on"]("click", function () {
    const _0x1987c4 = _0x59c4bf,
      _0x3ebcf5 = $(this)[_0x1987c4(0x290)](_0x1987c4(0x1bf))["index"]();
    let _0x2535d1 = $(this)["data"](_0x1987c4(0x260));
    var _0x358802 = $(_0x1987c4(0x1be) + _0x2535d1 + "\x22]")
        ["eq"](0x0)
        [_0x1987c4(0x21f)](!![]),
      _0x3aa990 = $(_0x1987c4(0x1d5) + _0x2535d1 + "\x22]")
        ["eq"](0x0)
        [_0x1987c4(0x21f)](!![]);
    $(this)[_0x1987c4(0x2b4)](_0x1987c4(0x230))["show"](), cloneRemoveInput();
    let _0x3fc43d = 0x0;
    $(_0x1987c4(0x1be) + _0x2535d1 + _0x1987c4(0x250))[_0x1987c4(0x1a7)](
      function () {
        const _0x51600f = _0x1987c4,
          _0x3d6028 = $(this)[_0x51600f(0x1ff)]("name");
        if (_0x3d6028 && _0x3d6028[_0x51600f(0x197)](_0x51600f(0x224))) {
          const _0x54daca = parseInt(_0x3d6028[_0x51600f(0x24c)]("-")[0x1]);
          !isNaN(_0x54daca) && _0x54daca > _0x3fc43d && (_0x3fc43d = _0x54daca);
        }
      },
    ),
      _0x3fc43d++,
      _0x358802[_0x1987c4(0x2b4)]("input")[_0x1987c4(0x1a7)](function () {
        const _0x1022bf = _0x1987c4;
        let _0x48a193 = _0x1022bf(0x224) + _0x3fc43d;
        $(this)[_0x1022bf(0x280)](""),
          $(this)[_0x1022bf(0x1ff)](_0x1022bf(0x1e3), _0x48a193),
          $(this)[_0x1022bf(0x1ff)](_0x1022bf(0x277), _0x48a193);
      }),
      _0x3aa990[_0x1987c4(0x2b4)]("[data-input-field]")[_0x1987c4(0x1a7)](
        function () {
          const _0x5e1f09 = _0x1987c4;
          $(this)[_0x5e1f09(0x1ff)](
            _0x5e1f09(0x1f4),
            "relationship-" + _0x3fc43d,
          );
        },
      ),
      $(this)
        ["siblings"](_0x1987c4(0x202) + _0x2535d1 + "\x22]")
        ["append"](_0x358802),
      $("[data-display]")
        ["eq"](_0x3ebcf5)
        [_0x1987c4(0x2b4)](_0x1987c4(0x22b) + _0x2535d1 + "\x22]")
        ["append"](_0x3aa990),
      $(_0x1987c4(0x239) + _0x2535d1 + "\x22]")["each"](function () {
        const _0x26e7ca = _0x1987c4;
        $(this)["text"](
          $(this)
            [_0x26e7ca(0x290)](_0x26e7ca(0x1be) + _0x2535d1 + "\x22]")
            [_0x26e7ca(0x292)]() + 0x1,
        );
      }),
      $("[data-display-input-index=\x22" + _0x2535d1 + "\x22]")["each"](
        function () {
          const _0x5ceaae = _0x1987c4;
          $(this)[_0x5ceaae(0x246)](
            $(this)
              [_0x5ceaae(0x290)](_0x5ceaae(0x1d5) + _0x2535d1 + "\x22]")
              [_0x5ceaae(0x292)]() + 0x1,
          );
        },
      ),
      validation();
  }),
  $(_0x59c4bf(0x1e2))["on"](_0x59c4bf(0x27c), function () {
    const _0x25b190 = _0x59c4bf,
      _0x5a92f0 = $(this)["data"](_0x25b190(0x20d));
    $(_0x25b190(0x2b8) + _0x5a92f0 + "\x22]")[_0x25b190(0x280)](""),
      validation();
  });
function andLogic() {
  const _0x4c362a = _0x59c4bf;
  conditionalResult &&
    (steps["eq"](x)[_0x4c362a(0x2b4)](_0x4c362a(0x1db))[_0x4c362a(0x21c)](),
    console[_0x4c362a(0x1f7)](_0x4c362a(0x251)),
    steps["eq"](x)
      [_0x4c362a(0x2b4)](_0x4c362a(0x1db))
      ["each"](function () {
        const _0x3a8259 = _0x4c362a;
        function _0x3261cd(_0x5a8fb3) {
          const _0x573c2d = _0x129e,
            _0x4d285c = _0x5a8fb3[_0x573c2d(0x24c)]("&"),
            _0x203f4c = [];
          return (
            _0x4d285c["forEach"]((_0x2871d5) => {
              const _0xd40e7a = _0x573c2d,
                [_0x4a7feb, _0x550c16] = _0x2871d5[_0xd40e7a(0x24c)]("=");
              _0x203f4c[_0xd40e7a(0x240)]({
                field: _0x4a7feb,
                value: _0x550c16,
              });
            }),
            _0x203f4c
          );
        }
        const _0x3df49d = $(this)[_0x3a8259(0x1ff)]("data-show-if");
        console[_0x3a8259(0x1f7)](_0x3df49d);
        const _0x4fa2e7 = _0x3261cd(_0x3df49d);
        function _0x12a759(_0x2923e4, _0x2637f3) {
          const _0x2b9116 = _0x3a8259;
          return _0x2637f3[_0x2b9116(0x1d4)]((_0xd107e9, _0x1c2af1) => {
            const _0x47dc86 = _0x2b9116;
            if (
              _0x2923e4[0x0] &&
              _0xd107e9["field"] === _0x2923e4[0x0][_0x47dc86(0x2a2)]
            )
              return _0x2923e4[_0x47dc86(0x1a4)](
                (_0x44af9a, _0x441591) =>
                  _0x2637f3[_0x1c2af1 + _0x441591] &&
                  _0x2637f3[_0x1c2af1 + _0x441591]["field"] ===
                    _0x44af9a["field"] &&
                  _0x2637f3[_0x1c2af1 + _0x441591]["value"] ===
                    _0x44af9a["value"],
              );
            return ![];
          });
        }
        const _0x1ad8fb = _0x12a759(_0x4fa2e7, all_data);
        _0x1ad8fb ? $(this)["show"]() : $(this)[_0x3a8259(0x21c)]();
      }));
}
scrollTop(), cloneRemove(), cloneRemoveInput();
