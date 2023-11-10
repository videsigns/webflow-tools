//10th Nov 2023
//Bug fix
//1. Logic validation not working on popup form

const _0x4d5754 = _0x215d;
(function (_0x25c015, _0x5d8501) {
  const _0x3e2f12 = _0x215d,
    _0x1be3cc = _0x25c015();
  while (!![]) {
    try {
      const _0x2ea2f6 =
        (parseInt(_0x3e2f12(0x29d)) / 0x1) *
          (-parseInt(_0x3e2f12(0x276)) / 0x2) +
        -parseInt(_0x3e2f12(0x2b3)) / 0x3 +
        (parseInt(_0x3e2f12(0x243)) / 0x4) *
          (-parseInt(_0x3e2f12(0x2b2)) / 0x5) +
        (-parseInt(_0x3e2f12(0x1d5)) / 0x6) *
          (-parseInt(_0x3e2f12(0x27d)) / 0x7) +
        parseInt(_0x3e2f12(0x1fc)) / 0x8 +
        -parseInt(_0x3e2f12(0x1f5)) / 0x9 +
        (parseInt(_0x3e2f12(0x2ae)) / 0xa) * (parseInt(_0x3e2f12(0x2c4)) / 0xb);
      if (_0x2ea2f6 === _0x5d8501) break;
      else _0x1be3cc["push"](_0x1be3cc["shift"]());
    } catch (_0x3cfe85) {
      _0x1be3cc["push"](_0x1be3cc["shift"]());
    }
  }
})(_0x4ae0, 0x1f8c7);
let x = 0x0,
  curStep = 0x0,
  steps = $(_0x4d5754(0x2b7)),
  progressbarClone = $(_0x4d5754(0x1dd))[_0x4d5754(0x288)](),
  progressbar,
  countCard = !![],
  weightedSelection = $(_0x4d5754(0x1c7))[_0x4d5754(0x1d6)](_0x4d5754(0x1e6)),
  weightedSelectionRange = $(_0x4d5754(0x28a))[_0x4d5754(0x1d6)](
    "weighted-selection-range",
  ),
  selectMultiple = $("[data-select-multiple]")["data"]("select-multiple"),
  customError = $("[data-custom-error-message]")[_0x4d5754(0x1d6)](
    "custom-error-message",
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
  reinitIX = $(_0x4d5754(0x226))[_0x4d5754(0x1d6)](_0x4d5754(0x209)),
  textareaLength = 0x0,
  textInputLength = 0x0,
  emailInputLength = 0x0,
  selectInputLength = 0x0,
  checkboxInputLength = 0x0,
  filledInput = [],
  savedFilledInput = [],
  memory = $(_0x4d5754(0x1f6))["data"](_0x4d5754(0x230)),
  quiz = $(_0x4d5754(0x207))["data"](_0x4d5754(0x1d9)),
  progress = 0x0;
const urlFormly = new URL(window[_0x4d5754(0x266)][_0x4d5754(0x27b)]);
let _params = $("[data-query-param]")[_0x4d5754(0x1d6)](_0x4d5754(0x271)),
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
  logicExtra = $(_0x4d5754(0x202))[_0x4d5754(0x1d6)](_0x4d5754(0x1fd)),
  oldSubmitText = $("[data-form=\x22submit-btn\x22]")["val"](),
  oldResetText = $(_0x4d5754(0x2a9))[_0x4d5754(0x29a)](),
  formReset = $("[data-form=\x22multistep\x22]")[_0x4d5754(0x1d6)](
    _0x4d5754(0x2c7),
  ),
  successCard = "",
  redirectTo = "",
  totalSteps = 0x0,
  checkCount = 0x0,
  resetDelay = $("[data-reset-delay]")[_0x4d5754(0x1d6)](_0x4d5754(0x203))
    ? $(_0x4d5754(0x1db))[_0x4d5754(0x1d6)](_0x4d5754(0x203))
    : 0x7d0,
  redirectDelay = $(_0x4d5754(0x1d8))[_0x4d5754(0x1d6)](_0x4d5754(0x2cd))
    ? $(_0x4d5754(0x1d8))[_0x4d5754(0x1d6)](_0x4d5754(0x2cd))
    : 0x7d0,
  newTab = !![],
  unfilledArr = [],
  phoneFormat = $(_0x4d5754(0x202))[_0x4d5754(0x1d6)]("phone-validation"),
  scrollToTop = $(_0x4d5754(0x202))["data"](_0x4d5754(0x21d)),
  conditionalResult =
    $(_0x4d5754(0x25c))[_0x4d5754(0x1d6)]("conditional-result") ===
    _0x4d5754(0x2c8),
  scrollTopOffset = parseInt(
    $(_0x4d5754(0x202))[_0x4d5754(0x1d6)](_0x4d5754(0x2a6)),
  ),
  notRobot = !![],
  all_data = [];
const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
savedFilledInput = JSON[_0x4d5754(0x1e9)](
  localStorage[_0x4d5754(0x1e1)](_0x4d5754(0x212)),
);
var ogCloneArr = [];
$(_0x4d5754(0x253))[_0x4d5754(0x268)](function () {
  const _0x8e1dec = _0x4d5754;
  ogCloneArr["push"]({
    name: $(this)["data"]("clone"),
    element: $(this)[_0x8e1dec(0x288)](!![]),
    display: $(
      _0x8e1dec(0x20a) + $(this)[_0x8e1dec(0x1d6)](_0x8e1dec(0x288)) + "\x22]",
    )
      ["eq"](0x0)
      [_0x8e1dec(0x288)](!![]),
  });
});
$(_0x4d5754(0x2b8))[_0x4d5754(0x2b0)] > 0x0 && (notRobot = ![]);
function recaptcha(_0x40995e) {
  notRobot = !![];
}
$(_0x4d5754(0x214))[_0x4d5754(0x2b0)] > 0x0 &&
  (countCard = $(_0x4d5754(0x214))[_0x4d5754(0x1d6)](_0x4d5754(0x251)));
$("[data-text=\x22error-message\x22]")[_0x4d5754(0x2ac)](),
  $(progressbarClone)[_0x4d5754(0x2a1)](_0x4d5754(0x20c)),
  $(_0x4d5754(0x1f0))["children"]()[_0x4d5754(0x1ce)](),
  $("[data-form=\x22submit-btn\x22]")[_0x4d5754(0x2ac)](),
  $(_0x4d5754(0x1f1))[_0x4d5754(0x2ac)](),
  steps[_0x4d5754(0x268)](function () {
    const _0x395f19 = _0x4d5754;
    $(_0x395f19(0x1f0))["append"](
      progressbarClone[_0x395f19(0x288)](!![], !![]),
    );
  }),
  $("[data-input-field]")[_0x4d5754(0x2ac)]();
countCard
  ? ((curStep = curStep + 0x1),
    (totalSteps = steps[_0x4d5754(0x2b0)]),
    $("[data-text=\x22total-steps\x22]")["text"](totalSteps))
  : ($(steps[x])[_0x4d5754(0x1d6)](_0x4d5754(0x1d3))
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    (totalSteps = $("[data-form=\x22step\x22]:not([data-card=\x22true\x22])")[
      _0x4d5754(0x2b0)
    ]),
    $(_0x4d5754(0x24b))[_0x4d5754(0x29a)](totalSteps),
    $("[data-form=\x22step\x22][data-card]")[_0x4d5754(0x268)](function () {
      const _0x3fa88e = _0x4d5754;
      $($(_0x3fa88e(0x1dd))[$(this)[_0x3fa88e(0x20b)]()])["hide"]();
    }));
(progressbar = $(_0x4d5754(0x1f0))["children"]()),
  $(_0x4d5754(0x1dd))["on"](_0x4d5754(0x2a4), clickableIndicator),
  $("[data-text=\x22current-step\x22]")[_0x4d5754(0x29a)](curStep),
  steps[_0x4d5754(0x2ac)](),
  $(_0x4d5754(0x228))[_0x4d5754(0x2ac)](),
  $(_0x4d5754(0x1d7))[_0x4d5754(0x268)](function () {
    const _0x1ae9c6 = _0x4d5754;
    $(this)["attr"](_0x1ae9c6(0x2ad), _0x1ae9c6(0x295));
  });
function getParams() {
  const _0x373a2e = _0x4d5754;
  urlFormly[_0x373a2e(0x2c6)][_0x373a2e(0x249)](
    function (_0x4ff7fa, _0x41f21a) {
      const _0x2bc7b9 = _0x373a2e;
      searchQ[_0x2bc7b9(0x274)]({ val: _0x4ff7fa, key: _0x41f21a });
    },
  );
}
function getSafe(_0x44d1ee, _0x258f92) {
  try {
    return _0x44d1ee();
  } catch (_0x55652e) {
    return _0x258f92;
  }
}
function _0x215d(_0x4471d2, _0x231b0a) {
  const _0x4ae0db = _0x4ae0();
  return (
    (_0x215d = function (_0x215d4f, _0x24ff55) {
      _0x215d4f = _0x215d4f - 0x1bc;
      let _0xa8469b = _0x4ae0db[_0x215d4f];
      return _0xa8469b;
    }),
    _0x215d(_0x4471d2, _0x231b0a)
  );
}
function phoneAutoFormat(_0x41a3d6) {
  var _0x2fb530 = "";
  return function (_0x5edfa5) {
    const _0x241b02 = _0x215d;
    var _0x257326 = "",
      _0x4d1805 = _0x5edfa5[_0x241b02(0x29f)](/\D/g, ""),
      _0x437f01 = 0x0,
      _0x28a49b = 0x0;
    while (
      _0x437f01 < _0x4d1805[_0x241b02(0x2b0)] &&
      _0x28a49b < _0x41a3d6[_0x241b02(0x2b0)]
    ) {
      _0x41a3d6[_0x28a49b] === "x"
        ? ((_0x257326 += _0x4d1805[_0x437f01]), _0x437f01++)
        : (_0x257326 += _0x41a3d6[_0x28a49b]),
        _0x28a49b++;
    }
    if (_0x5edfa5[_0x241b02(0x2b0)] < _0x2fb530[_0x241b02(0x2b0)]) {
      var _0x1a3ab5 = _0x41a3d6[_0x241b02(0x2a3)](_0x28a49b);
      _0x257326 += _0x1a3ab5[_0x241b02(0x29f)](/x/g, "");
    }
    return (_0x2fb530 = _0x257326), _0x257326;
  };
}
function validateURL(_0x399581) {
  const _0x263d38 = _0x4d5754;
  return urlPattern[_0x263d38(0x2bd)](_0x399581) ? !![] : ![];
}
quiz &&
  steps["each"](function () {
    const _0x1ee214 = _0x4d5754;
    $(this)[_0x1ee214(0x242)]()[_0x1ee214(0x2c3)](_0x1ee214(0x2d0), !![]),
      $(this)[_0x1ee214(0x242)]()[_0x1ee214(0x2c3)](_0x1ee214(0x1ff), 0xfa);
  });
function _0x4ae0() {
  const _0xe3b0eb = [
    ".w-form-done",
    "[data-reinit]",
    ":input[type=\x27radio\x27]:checked",
    "[data-success-card]",
    "status",
    "metaKey",
    ":input[type=\x22password\x22][required]",
    "input:checkbox",
    "parents",
    "[data-form=\x22submit-btn\x22]:visible",
    "checkbox",
    "memory",
    "trim",
    "[data-display]",
    "redirect",
    "required",
    "key",
    "ix2",
    "https://webflow.com/api/v1/form/",
    "ms-field",
    "data-skip-to",
    "closest",
    "<br>Data\x20Answer\x20=\x20",
    "wait",
    "\x22]:checked",
    "remove-upload",
    "edit-step",
    "stringify",
    "Webflow",
    "children",
    "32052yfNygN",
    "keyCode",
    "[data-clone-wrapper]",
    "startsWith",
    "input[type=\x22radio\x22]:checked",
    "skipTo",
    "forEach",
    "[data-radio-skip]:visible",
    "[data-text=\x22total-steps\x22]",
    "[data-clone-input]",
    "fadeIn",
    "shiftKey",
    ":input[type=\x22file\x22]",
    "name",
    "count-card",
    "relationship-",
    "[data-clone]",
    ":first",
    ":input[type=\x22url\x22][required]",
    "selected",
    "show",
    "answer",
    "_blank",
    "none",
    ":input[type=\x22radio\x22]",
    "[data-conditional-result]",
    "[data-form=\x22remove-input-clone\x22]",
    "[data-clone-input=\x22",
    "value",
    "go-to",
    "input:radio[required]",
    "findIndex",
    "[data-checkbox]",
    "\x22]\x20input",
    ":input[type=\x22email\x22][required]",
    "location",
    "destroy",
    "each",
    "[data-skip-to]",
    "css",
    "slow",
    "offset",
    ":input[type=\x22date\x22]",
    "data-go-to",
    "radio-skip",
    "redirect-form-hehexd",
    "query-param",
    "clickable-all",
    "includes",
    "push",
    "radio",
    "395950vgkmWh",
    "field",
    "[data-selection]",
    "[data-enter]",
    "[data-answer]",
    "href",
    "[data-text=\x22error-message\x22]",
    "14BdRNSi",
    "addClass",
    "[type=\x22submit\x22]",
    "[data-clone=\x22",
    ":input[required]",
    "file",
    "w--redirected-checked",
    "input[type=\x22radio\x22]",
    ".w-checkbox-input",
    "new-tab",
    "[data-selection=\x22",
    "clone",
    "select[name=\x22",
    "[data-weighted-selection-range]",
    "span",
    "skip-to",
    "phone-autoformat",
    "select",
    "[data-form=\x22remove-clone\x22]",
    "readystatechange",
    ".active-answer-card",
    "data-input-field",
    "filter",
    "clone-input",
    "button",
    "[data-input-field=\x22",
    "radio-delay",
    ":input[type=\x22number\x22]",
    "body",
    "text",
    "auto",
    "require",
    "1MOmoNq",
    "[data-index=\x22",
    "replace",
    "val",
    "removeClass",
    "input:radio[name=\x22",
    "slice",
    "click",
    ":input[type=\x22url\x22]",
    "scroll-top-offset",
    "siblings",
    "[data-answer=\x22",
    "[data-btn=\x22reset\x22]",
    "trigger",
    "[data-show-if]",
    "hide",
    "type",
    "3408710FKEJKP",
    "preventDefault",
    "length",
    "textarea[autofocus]",
    "100qqUqhk",
    "266331JEZebk",
    "change",
    ":input[type=\x22file\x22][required]",
    "focus",
    "[data-form=\x22step\x22]",
    "div.g-recaptcha",
    ":input[type=\x22tel\x22][required]",
    "[data-selection-weight]",
    "not",
    "step",
    "test",
    "stopPropagation",
    "option[value=\x22",
    "[data-go-to]",
    "[data-clone-wrapper=\x22",
    "some",
    "attr",
    "11mGFbza",
    "getResponse",
    "searchParams",
    "reset",
    "AND",
    "[data-add-new-input]",
    "data-show-if",
    "[data-text=\x22current-step\x22]",
    "selection",
    "redirect-delay",
    "block-domain",
    "submit-show",
    "data-radio-skip",
    "prop",
    "<br>Data\x20Go\x20To\x20=\x20",
    "[type=\x22checkbox\x22]",
    "[data-radio-skip]",
    "[data-radio-delay]",
    "init",
    ":input[type=\x22checkbox\x22][required]",
    "option[value=\x22$(this).val()\x22]",
    ":input[type=\x22email\x22]",
    "[data-input-field]",
    "disabled",
    "[data-form=\x22back-btn\x22]",
    "input[type=\x22text\x22][required]:visible",
    "[data-clickable]",
    "[data-display-wrapper=\x22",
    "Please\x20wait...",
    ":input[type=\x22checkbox\x22][required]:checked",
    "[data-weighted-selection]",
    "debug-mode",
    "[data-form=\x22next-btn\x22][data-submit-show]",
    "textarea",
    "keydown",
    "keypress",
    "parent",
    "remove",
    "[data-btn=\x22check\x22]",
    "split",
    "removeItem",
    "input[type=\x22submit\x22]",
    "card",
    "input[type=\x22email\x22]:visible",
    "677934CkHrNN",
    "data",
    "[data-form=\x22next-btn\x22][type=\x22submit\x22]",
    "[data-redirect-delay]",
    "quiz",
    "find",
    "[data-reset-delay]",
    "active-answer-card",
    "[data-form=\x22progress-indicator\x22]",
    "form[data-form=\x22multistep\x22]\x20:input",
    "[data-cms-select=cms]",
    "clickable",
    "getItem",
    "inputName",
    "0.4",
    "[data-form=\x22submit-btn\x22]",
    "[data-remove-upload]",
    "weighted-selection",
    "ctrlKey",
    ":input",
    "parse",
    "match",
    ".w-radio-input",
    "novalidate",
    "textarea[required]:visible",
    "[data-display-input]",
    "backTo",
    "[data-form=\x22progress\x22]",
    "[data-form-ms=\x22submit-btn\x22]",
    "\x22][value=\x22",
    "input-field",
    "input[type=\x22checkbox\x22]:visible",
    "1653570bRnAFT",
    "[data-memory]",
    "[data-form=\x22next-btn\x22]",
    "[data-answer][data-radio-skip]:visible",
    "clicked",
    ":input[type=\x22tel\x22]",
    "append",
    "1544928SNHfZX",
    "logic-extra",
    "textarea[name=\x22",
    "data-radio-delay",
    ".w-form-formradioinput",
    "select[required]",
    "[data-form=\x22multistep\x22]",
    "reset-delay",
    "<option>",
    "input[name=\x22",
    "[data-form=\x22custom-progress-indicator\x22]",
    "[data-quiz]",
    ":input[type=\x22number\x22][required]",
    "reinit",
    "[data-display=\x22",
    "index",
    "current",
    "\x22]\x20[data-input-field^=\x22",
    "[data-range]:contains(",
    "data-name",
    "add-new",
    "[data-selection=\x22other\x22]",
    "filledInput",
    "[data-display-input=\x22",
    "[data-count-card]",
    "min-character",
    "textarea[required]",
    ":input[type=\x22text\x22]",
    ":checked",
    ":input[type=\x22checkbox\x22]",
    "[data-form=\x22submit\x22]:visible",
    ":input[type=\x22text\x22][required]",
    "[data-text=\x22total-weight\x22]",
    "scroll-top",
    "join",
    "log",
    "</div>",
    "input[autofocus]",
    "dispatchEvent",
    "input",
    ":input[type=\x22date\x22][required]",
  ];
  _0x4ae0 = function () {
    return _0xe3b0eb;
  };
  return _0x4ae0();
}
function disableBtn(_0x513d14) {
  const _0x21bdbd = _0x4d5754;
  (fill = ![]),
    !customError &&
      ($(_0x21bdbd(0x1f7))[_0x21bdbd(0x26a)]({
        opacity: "0.4",
        "pointer-events": "none",
      }),
      $(_0x21bdbd(0x1f7))[_0x21bdbd(0x27e)](_0x21bdbd(0x1c0)),
      $("[data-form=\x22submit-btn\x22]")[_0x21bdbd(0x26a)]({
        opacity: _0x21bdbd(0x1e3),
        "pointer-events": _0x21bdbd(0x25a),
      }),
      $(_0x21bdbd(0x1e4))[_0x21bdbd(0x27e)](_0x21bdbd(0x1c0)),
      $(_0x21bdbd(0x1f1))[_0x21bdbd(0x26a)]({
        opacity: _0x21bdbd(0x1e3),
        "pointer-events": "none",
      }),
      $("[data-form-ms=\x22submit-btn\x22]")["addClass"](_0x21bdbd(0x1c0)));
}
function enableBtn() {
  const _0x2e6db3 = _0x4d5754;
  (fill = !![]),
    $(_0x2e6db3(0x1f7))[_0x2e6db3(0x26a)]({
      "pointer-events": _0x2e6db3(0x29b),
      opacity: "1",
    }),
    $("[data-form=\x22next-btn\x22]")[_0x2e6db3(0x2a1)](_0x2e6db3(0x1c0)),
    $(_0x2e6db3(0x1e4))["css"]({
      "pointer-events": _0x2e6db3(0x29b),
      opacity: "1",
    }),
    $(_0x2e6db3(0x1e4))[_0x2e6db3(0x2a1)](_0x2e6db3(0x1c0)),
    $(_0x2e6db3(0x1f1))["css"]({
      "pointer-events": _0x2e6db3(0x29b),
      opacity: "1",
    }),
    $(_0x2e6db3(0x1f1))[_0x2e6db3(0x2a1)](_0x2e6db3(0x1c0));
}
function saveFilledInput() {
  const _0x1a084b = _0x4d5754;
  $(_0x1a084b(0x1de))
    ["not"](_0x1a084b(0x27f))
    [_0x1a084b(0x268)](function () {
      const _0x51a132 = _0x1a084b;
      $(this)[_0x51a132(0x2c3)](_0x51a132(0x2ad)) === _0x51a132(0x22f) ||
      $(this)[_0x51a132(0x2c3)]("type") === _0x51a132(0x275)
        ? $(this)[_0x51a132(0x2d1)]("checked") &&
          (filledInput[_0x51a132(0x2c2)](
            (_0x563c76) =>
              _0x563c76[_0x51a132(0x1e2)] ===
              $(this)[_0x51a132(0x2c3)](_0x51a132(0x250)),
          )
            ? ((filledInput = filledInput[_0x51a132(0x293)](
                (_0x53053d) =>
                  _0x53053d["inputName"] !== $(this)[_0x51a132(0x2c3)]("name"),
              )),
              $(this)[_0x51a132(0x2a0)]() !== "" &&
                filledInput["push"]({
                  inputName: $(this)["attr"]("name"),
                  value: $(this)[_0x51a132(0x2a0)](),
                }))
            : $(this)["val"]() !== "" &&
              filledInput[_0x51a132(0x274)]({
                inputName: $(this)["attr"]("name"),
                value: $(this)[_0x51a132(0x2a0)](),
              }))
        : filledInput["some"](
            (_0xeba092) =>
              _0xeba092["inputName"] ===
              $(this)[_0x51a132(0x2c3)](_0x51a132(0x250)),
          )
        ? ((filledInput = filledInput[_0x51a132(0x293)](
            (_0x341f74) =>
              _0x341f74[_0x51a132(0x1e2)] !==
              $(this)[_0x51a132(0x2c3)](_0x51a132(0x250)),
          )),
          $(this)["val"]() !== "" &&
            filledInput[_0x51a132(0x274)]({
              inputName: $(this)[_0x51a132(0x2c3)](_0x51a132(0x250)),
              value: $(this)["val"](),
            }))
        : $(this)[_0x51a132(0x2a0)]() !== "" &&
          filledInput[_0x51a132(0x274)]({
            inputName: $(this)["attr"](_0x51a132(0x250)),
            value: $(this)[_0x51a132(0x2a0)](),
          });
    }),
    localStorage[_0x1a084b(0x1d1)](_0x1a084b(0x212)),
    localStorage["setItem"](
      _0x1a084b(0x212),
      JSON[_0x1a084b(0x240)](filledInput),
    );
}
function scrollTop() {
  const _0x508033 = _0x4d5754;
  scrollToTop &&
    $("html,\x20body")["animate"](
      {
        scrollTop:
          $(_0x508033(0x202))[_0x508033(0x26c)]()["top"] - scrollTopOffset,
      },
      0x3e8,
    );
}
function updateStep() {
  const _0x2810e6 = _0x4d5754;
  scrollTop(),
    (skip = ![]),
    $(_0x2810e6(0x206))[_0x2810e6(0x2a1)](_0x2810e6(0x1c0));
  $("[data-clickable]")[_0x2810e6(0x1d6)](_0x2810e6(0x1e0)) &&
    (steps[_0x2810e6(0x1da)](_0x2810e6(0x281))[_0x2810e6(0x268)](function () {
      const _0x58fe4d = _0x2810e6;
      $(
        $(_0x58fe4d(0x206))[
          $(this)["parents"](_0x58fe4d(0x2b7))[_0x58fe4d(0x20b)]()
        ],
      ),
        $(this)[_0x58fe4d(0x2a0)]() === "" && emptyInput++;
    }),
    emptyInput > 0x0
      ? $(_0x2810e6(0x1d2))[_0x2810e6(0x27e)](_0x2810e6(0x1c0))
      : $(_0x2810e6(0x1d2))[_0x2810e6(0x2a1)](_0x2810e6(0x1c0)));
  $(_0x2810e6(0x206))[_0x2810e6(0x2a1)]("current"),
    $(_0x2810e6(0x206))[_0x2810e6(0x27e)](_0x2810e6(0x1c0)),
    $($(_0x2810e6(0x206))[x])[_0x2810e6(0x27e)](_0x2810e6(0x20c)),
    (selection = selections["filter"](
      (_0x4d6202) => _0x4d6202[_0x2810e6(0x2bc)] === x - 0x1,
    ));
  next &&
    (x = getSafe(() => selection[0x0][_0x2810e6(0x248)])
      ? parseInt(getSafe(() => selection[0x0][_0x2810e6(0x248)]))
      : x);
  $(_0x2810e6(0x27a))[_0x2810e6(0x2ac)](), steps[_0x2810e6(0x2ac)]();
  reinitIX === !![] && window[_0x2810e6(0x241)][_0x2810e6(0x267)]();
  $(progressbar)[_0x2810e6(0x2a1)](_0x2810e6(0x20c));
  for (i = 0x0; i <= x; i++) {
    countCard
      ? $(progressbar[i])[_0x2810e6(0x27e)](_0x2810e6(0x20c))
      : !$(steps[i])[_0x2810e6(0x1d6)](_0x2810e6(0x1d3)) &&
        $(progressbar[i])[_0x2810e6(0x27e)](_0x2810e6(0x20c));
  }
  reinitIX === !![]
    ? (window[_0x2810e6(0x241)] &&
        window[_0x2810e6(0x241)]
          [_0x2810e6(0x29c)](_0x2810e6(0x236))
          [_0x2810e6(0x2d6)](),
      document[_0x2810e6(0x222)](new Event(_0x2810e6(0x290))),
      $(steps[x])[_0x2810e6(0x257)]())
    : $(steps[x])[_0x2810e6(0x24d)](_0x2810e6(0x26b));
  x === 0x0 &&
    !$(steps[x])[_0x2810e6(0x1d6)](_0x2810e6(0x1d3)) &&
    ($(steps[x])[_0x2810e6(0x1da)]("[data-answer]")[_0x2810e6(0x257)](),
    $(steps[x])
      [_0x2810e6(0x1da)](_0x2810e6(0x27a))
      [_0x2810e6(0x27e)](_0x2810e6(0x1dc)));
  selection["length"] > 0x0
    ? ($(steps[x])
        [_0x2810e6(0x1da)](
          _0x2810e6(0x2a8) + selection[0x0]["selected"] + "\x22]",
        )
        ["show"](),
      $(steps[x])
        ["find"](_0x2810e6(0x2a8) + selection[0x0]["selected"] + "\x22]")
        [_0x2810e6(0x27e)](_0x2810e6(0x1dc)))
    : ($(steps[x])
        ["find"](_0x2810e6(0x2a8) + answer + "\x22]")
        [_0x2810e6(0x257)](),
      $(steps[x])
        [_0x2810e6(0x1da)](_0x2810e6(0x2a8) + answer + "\x22]")
        [_0x2810e6(0x27e)]("active-answer-card"));
  if (x === 0x0)
    $("[data-form=\x22back-btn\x22]")[_0x2810e6(0x2ac)](),
      $(_0x2810e6(0x1f7))[_0x2810e6(0x257)](),
      $(_0x2810e6(0x1e4))[_0x2810e6(0x2ac)]();
  else {
    if (
      x === steps[_0x2810e6(0x2b0)] - 0x1 ||
      $(steps[x])[_0x2810e6(0x1da)](_0x2810e6(0x21a))[_0x2810e6(0x2b0)] > 0x0
    ) {
      $("[data-form=\x22next-btn\x22]")[_0x2810e6(0x2ac)]();
      if (
        $(steps[x])
          [_0x2810e6(0x1da)](_0x2810e6(0x1c9))
          [_0x2810e6(0x1d6)](_0x2810e6(0x2cf))
      )
        $(steps[x])[_0x2810e6(0x1da)](_0x2810e6(0x1c9))[_0x2810e6(0x257)]();
      else
        $(_0x2810e6(0x1f7))[_0x2810e6(0x1d6)](_0x2810e6(0x2cf)) &&
          $("[data-form=\x22next-btn\x22]")[_0x2810e6(0x257)]();
      $("[data-form=\x22submit-btn\x22]")["show"](),
        $(_0x2810e6(0x1f1))[_0x2810e6(0x257)](),
        $(_0x2810e6(0x1c1))[_0x2810e6(0x257)]();
    } else
      $(_0x2810e6(0x1f7))[_0x2810e6(0x257)](),
        $(_0x2810e6(0x1c1))[_0x2810e6(0x257)](),
        $(_0x2810e6(0x1e4))[_0x2810e6(0x2ac)](),
        $(_0x2810e6(0x1f1))[_0x2810e6(0x2ac)]();
  }
  $($(steps[x])[_0x2810e6(0x1da)](_0x2810e6(0x221))[0x0])[_0x2810e6(0x2b6)](),
    $($(steps[x])[_0x2810e6(0x1da)](_0x2810e6(0x2b1))[0x0])["focus"](),
    validation();
  for (idx = 0x0; idx <= x; idx++) {
    $($(_0x2810e6(0x206))[idx])[_0x2810e6(0x2a1)](_0x2810e6(0x1c0));
  }
}
function validateEmail(_0x35b067, _0x37fbd8, _0x531985) {
  const _0x29a18c = _0x4d5754;
  let _0xce104c = _0x35b067["includes"]("@")
    ? _0x35b067["split"]("@")[0x1][_0x29a18c(0x1d0)](".")[0x0]
    : [];
  dom = [];
  _0x37fbd8 !== undefined &&
    _0x37fbd8[_0x29a18c(0x1d0)](",")[_0x29a18c(0x249)](function (_0x376cc3) {
      const _0x47c8a7 = _0x29a18c;
      _0x376cc3[_0x47c8a7(0x273)](_0xce104c) && dom["push"](_0xce104c);
    });
  dom[_0x29a18c(0x2b0)] > 0x0 ? (domainAllowed = ![]) : (domainAllowed = !![]);
  var _0x31bda7 = /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,20})?$/;
  console[_0x29a18c(0x21f)](_0x31bda7[_0x29a18c(0x2bd)](_0x35b067)),
    !_0x31bda7[_0x29a18c(0x2bd)](_0x35b067) || !domainAllowed
      ? ((emailFilled = ![]),
        unfilledArr[_0x29a18c(0x274)]({ input: _0x531985 }))
      : (emailFilled = !![]);
}
function phoneValidation(_0x185e2c, _0x520e19, _0x3a5bfa) {
  const _0x1172ef = _0x4d5754;
  if (phoneFormat)
    return _0x185e2c[_0x1172ef(0x1ea)](
      new RegExp(phoneFormat["slice"](0x1, -0x1)),
    ) && _0x520e19 >= _0x3a5bfa
      ? !![]
      : ![];
  else {
    if (_0x520e19 >= _0x3a5bfa) return !![];
  }
}
function validation() {
  const _0xaffe8d = _0x4d5754;
  $(steps[x])[_0xaffe8d(0x1d6)](_0xaffe8d(0x1d3)) && enableBtn();
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
    (textareaLength = $(steps[x])["find"](_0xaffe8d(0x1ed))["length"]),
    (textInputLength = $(steps[x])[_0xaffe8d(0x1da)](_0xaffe8d(0x1c2))[
      _0xaffe8d(0x2b0)
    ]),
    (selectInputLength = $(steps[x])["find"]("select[required]:visible")[
      _0xaffe8d(0x2b0)
    ]),
    (emailInputLength = $(steps[x])[_0xaffe8d(0x1da)](_0xaffe8d(0x1d4))[
      _0xaffe8d(0x2b0)
    ]),
    (checkboxInputLength = $(steps[x])["find"](_0xaffe8d(0x1f4))["length"]);
  textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0
    ? disableBtn()
    : enableBtn();
  checkCount = $(steps[x])[_0xaffe8d(0x1d6)](_0xaffe8d(0x22f))
    ? $(steps[x])[_0xaffe8d(0x1d6)](_0xaffe8d(0x22f))
    : $(steps[x])[_0xaffe8d(0x1da)]("[data-checkbox]")[_0xaffe8d(0x2b0)] > 0x0
    ? $(steps[x])[_0xaffe8d(0x1da)](_0xaffe8d(0x263))["data"](_0xaffe8d(0x22f))
    : 0x0;
  if (!logicExtra)
    $(steps[x])
      [_0xaffe8d(0x1da)](_0xaffe8d(0x1e8))
      ["is"]("[type=\x22checkbox\x22]") &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])[_0xaffe8d(0x1da)](_0xaffe8d(0x219))[_0xaffe8d(0x2b0)]
        ? $(steps[x])
            [_0xaffe8d(0x1da)](_0xaffe8d(0x219))
            [_0xaffe8d(0x268)](function () {
              const _0x4ea593 = _0xaffe8d;
              $(this)["is"](_0x4ea593(0x218))
                ? $(steps[x])[_0x4ea593(0x1da)](_0x4ea593(0x1bc))[
                    _0x4ea593(0x2b0)
                  ] < 0x1 &&
                  ((checkboxFilled = !![]),
                  resetInputErrorMessage(
                    $(this)[_0x4ea593(0x2c3)](_0x4ea593(0x250)),
                  ))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0x4ea593(0x274)]({
                    input: $(this)[_0x4ea593(0x2c3)](_0x4ea593(0x250)),
                  }));
            })
        : $(steps[x])[_0xaffe8d(0x1da)](
            ":input[type=\x22checkbox\x22]:checked",
          )[_0xaffe8d(0x2b0)] >= checkCount
        ? $(steps[x])[_0xaffe8d(0x1da)](_0xaffe8d(0x1bc))[_0xaffe8d(0x2b0)] >
          0x0
          ? $(steps[x])
              [_0xaffe8d(0x1da)](_0xaffe8d(0x1bc))
              ["each"](function () {
                const _0x5d6e20 = _0xaffe8d;
                !$(this)["is"](":checked")
                  ? ((checkboxFilled = ![]),
                    unfilledArr[_0x5d6e20(0x274)]({
                      input: $(this)[_0x5d6e20(0x2c3)](_0x5d6e20(0x250)),
                    }))
                  : ((checkboxFilled = !![]),
                    $(steps[x])[_0x5d6e20(0x1da)](_0x5d6e20(0x1c6))[
                      _0x5d6e20(0x2b0)
                    ] >=
                      $(steps[x])[_0x5d6e20(0x1da)](_0x5d6e20(0x1bc))[
                        _0x5d6e20(0x2b0)
                      ] &&
                      resetInputErrorMessage(
                        $(steps[x])
                          ["find"](_0x5d6e20(0x219))
                          [_0x5d6e20(0x2c3)]("name"),
                      ));
              })
          : ((checkboxFilled = !![]),
            resetInputErrorMessage(
              $(steps[x])
                [_0xaffe8d(0x1da)](_0xaffe8d(0x219))
                [_0xaffe8d(0x2c3)](_0xaffe8d(0x250)),
            ))
        : ((checkboxFilled = ![]),
          $(steps[x])
            ["find"](_0xaffe8d(0x1bc))
            [_0xaffe8d(0x268)](function () {
              const _0x36e8ca = _0xaffe8d;
              $(this)[_0x36e8ca(0x2bb)](":checked") &&
                unfilledArr[_0x36e8ca(0x274)]({
                  input: $(this)[_0x36e8ca(0x2c3)]("name"),
                });
            }),
          unfilledArr[_0xaffe8d(0x274)]({
            input: $(steps[x])
              [_0xaffe8d(0x1da)](_0xaffe8d(0x219))
              [_0xaffe8d(0x2c3)](_0xaffe8d(0x250)),
          }))),
      $(steps[x])
        [_0xaffe8d(0x1da)](_0xaffe8d(0x261))
        [_0xaffe8d(0x268)](function (_0x3f6d2a) {
          const _0x413498 = _0xaffe8d;
          var _0x566a1a = $(this)[_0x413498(0x2c3)](_0x413498(0x250));
          $(_0x413498(0x2a2) + _0x566a1a + _0x413498(0x23d))[
            _0x413498(0x2b0)
          ] == 0x0
            ? (!empReqRadio[_0x413498(0x1da)](
                (_0x157308) => _0x157308[_0x413498(0x223)] === _0x3f6d2a,
              ) && empReqRadio[_0x413498(0x274)]({ input: _0x3f6d2a }),
              unfilledArr[_0x413498(0x274)]({
                input: $(this)[_0x413498(0x2c3)]("name"),
              }))
            : (empReqRadio = empReqRadio[_0x413498(0x293)](
                (_0x53a824) => _0x53a824[_0x413498(0x223)] !== _0x3f6d2a,
              )),
            empReqRadio[_0x413498(0x2b0)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0xaffe8d(0x1da)](":input[type=\x22text\x22][required]")
        [_0xaffe8d(0x268)](function (_0x19a021) {
          const _0x923024 = _0xaffe8d;
          let _0x333c73 = $(this)[_0x923024(0x2a0)]()[_0x923024(0x2b0)],
            _0x51d562 = $(this)[_0x923024(0x1d6)](_0x923024(0x215))
              ? $(this)[_0x923024(0x1d6)](_0x923024(0x215))
              : 0x0;
          $(this)[_0x923024(0x2a0)]() !== "" && _0x333c73 >= _0x51d562
            ? (empReqInput = empReqInput[_0x923024(0x293)](
                (_0x47211b) => _0x47211b[_0x923024(0x223)] !== _0x19a021,
              ))
            : (!empReqInput[_0x923024(0x1da)](
                (_0x3bd2e9) => _0x3bd2e9[_0x923024(0x223)] === _0x19a021,
              ) && empReqInput[_0x923024(0x274)]({ input: _0x19a021 }),
              unfilledArr["push"]({
                input: $(this)["attr"](_0x923024(0x250)),
              })),
            empReqInput[_0x923024(0x2b0)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0xaffe8d(0x1da)](_0xaffe8d(0x22b))
        [_0xaffe8d(0x268)](function (_0xf2e228) {
          const _0x5afb17 = _0xaffe8d;
          let _0x4e7211 = $(this)["val"]()[_0x5afb17(0x2b0)],
            _0x4dbff0 = $(this)[_0x5afb17(0x1d6)](_0x5afb17(0x215))
              ? $(this)["data"](_0x5afb17(0x215))
              : 0x0;
          $(this)[_0x5afb17(0x2a0)]() !== "" && _0x4e7211 >= _0x4dbff0
            ? (empReqPassword = empReqPassword[_0x5afb17(0x293)](
                (_0x5e7c90) => _0x5e7c90[_0x5afb17(0x223)] !== _0xf2e228,
              ))
            : (!empReqPassword["find"](
                (_0x25a518) => _0x25a518[_0x5afb17(0x223)] === _0xf2e228,
              ) && empReqPassword[_0x5afb17(0x274)]({ input: _0xf2e228 }),
              unfilledArr[_0x5afb17(0x274)]({
                input: $(this)[_0x5afb17(0x2c3)](_0x5afb17(0x250)),
              })),
            empReqPassword[_0x5afb17(0x2b0)] === 0x0
              ? (passwordFilled = !![])
              : (passwordFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0xaffe8d(0x255))
        [_0xaffe8d(0x268)](function (_0x1f0f1c) {
          const _0x25cfd3 = _0xaffe8d;
          let _0x35a45d = $(this)[_0x25cfd3(0x2a0)]()[_0x25cfd3(0x2b0)],
            _0xc36fca = $(this)[_0x25cfd3(0x1d6)](_0x25cfd3(0x215))
              ? $(this)[_0x25cfd3(0x1d6)]("min-character")
              : 0x0;
          $(this)[_0x25cfd3(0x2a0)]() !== "" && _0x35a45d >= _0xc36fca
            ? (empReqUrl = empReqUrl["filter"](
                (_0xdddc2a) => _0xdddc2a["input"] !== _0x1f0f1c,
              ))
            : (!empReqUrl[_0x25cfd3(0x1da)](
                (_0x2e1ff1) => _0x2e1ff1[_0x25cfd3(0x223)] === _0x1f0f1c,
              ) && empReqUrl[_0x25cfd3(0x274)]({ input: _0x1f0f1c }),
              unfilledArr[_0x25cfd3(0x274)]({
                input: $(this)[_0x25cfd3(0x2c3)](_0x25cfd3(0x250)),
              })),
            empReqUrl[_0x25cfd3(0x2b0)] === 0x0 &&
            validateURL($(this)[_0x25cfd3(0x2a0)]())
              ? ((urlFilled = !![]), console[_0x25cfd3(0x21f)](urlFilled))
              : (urlFilled = ![]);
        }),
      $(steps[x])
        [_0xaffe8d(0x1da)](_0xaffe8d(0x224))
        ["each"](function (_0x45c63e) {
          const _0x2b3260 = _0xaffe8d;
          $(this)[_0x2b3260(0x2a0)]() !== ""
            ? (empReqDate = empReqDate[_0x2b3260(0x293)](
                (_0x52bc91) => _0x52bc91["input"] !== _0x45c63e,
              ))
            : (!empReqDate["find"](
                (_0x36600b) => _0x36600b[_0x2b3260(0x223)] === _0x45c63e,
              ) && empReqDate[_0x2b3260(0x274)]({ input: _0x45c63e }),
              unfilledArr[_0x2b3260(0x274)]({
                input: $(this)[_0x2b3260(0x2c3)](_0x2b3260(0x250)),
              })),
            empReqDate["length"] === 0x0
              ? (dateFilled = !![])
              : (dateFilled = ![]);
        }),
      $(steps[x])
        [_0xaffe8d(0x1da)](_0xaffe8d(0x2b9))
        ["each"](function (_0x3efe7c) {
          const _0x5beeb6 = _0xaffe8d;
          if ($(this)[_0x5beeb6(0x2a0)]() !== "") {
            let _0x1e172a = $(this)["val"]()["length"],
              _0x210be7 = $(this)[_0x5beeb6(0x1d6)]("min-character")
                ? $(this)["data"]("min-character")
                : 0x0;
            if ($(this)[_0x5beeb6(0x1d6)](_0x5beeb6(0x28d))) {
              var _0xfb6d89 = phoneAutoFormat(
                $(this)[_0x5beeb6(0x1d6)](_0x5beeb6(0x28d)),
              );
              $(this)[_0x5beeb6(0x2a0)](_0xfb6d89($(this)[_0x5beeb6(0x2a0)]()));
            }
            phoneValidation($(this)[_0x5beeb6(0x2a0)](), _0x1e172a, _0x210be7)
              ? (empReqTel = empReqTel["filter"](
                  (_0x4ab5fd) => _0x4ab5fd[_0x5beeb6(0x223)] !== _0x3efe7c,
                ))
              : empReqTel[_0x5beeb6(0x274)]({ input: _0x3efe7c });
          } else
            !empReqTel[_0x5beeb6(0x1da)](
              (_0x3789c8) => _0x3789c8["input"] === _0x3efe7c,
            ) && empReqTel[_0x5beeb6(0x274)]({ input: _0x3efe7c }),
              unfilledArr[_0x5beeb6(0x274)]({
                input: $(this)["attr"](_0x5beeb6(0x250)),
              });
          empReqTel[_0x5beeb6(0x2b0)] === 0x0
            ? (telFilled = !![])
            : (telFilled = ![]);
        }),
      $(steps[x])
        [_0xaffe8d(0x1da)](_0xaffe8d(0x2b5))
        ["each"](function (_0x540ab6) {
          const _0x134497 = _0xaffe8d;
          $(this)[_0x134497(0x2a0)]() !== ""
            ? (empReqFile = empReqFile[_0x134497(0x293)](
                (_0x485af6) => _0x485af6["input"] !== _0x540ab6,
              ))
            : (!empReqFile[_0x134497(0x1da)](
                (_0x3cfc68) => _0x3cfc68[_0x134497(0x223)] === _0x540ab6,
              ) && empReqFile[_0x134497(0x274)]({ input: _0x540ab6 }),
              unfilledArr[_0x134497(0x274)]({
                input: $(this)[_0x134497(0x2c3)]("name"),
              })),
            empReqFile[_0x134497(0x2b0)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0xaffe8d(0x1da)](_0xaffe8d(0x208))
        [_0xaffe8d(0x268)](function (_0xc09978) {
          const _0x366aca = _0xaffe8d;
          let _0x463e42 = $(this)[_0x366aca(0x2a0)]()[_0x366aca(0x2b0)],
            _0x1170b4 = $(this)[_0x366aca(0x1d6)](_0x366aca(0x215))
              ? $(this)[_0x366aca(0x1d6)](_0x366aca(0x215))
              : 0x0;
          $(this)[_0x366aca(0x2a0)]() !== "" && _0x463e42 >= _0x1170b4
            ? (empReqNum = empReqNum[_0x366aca(0x293)](
                (_0x5254f9) => _0x5254f9[_0x366aca(0x223)] !== _0xc09978,
              ))
            : (!empReqNum[_0x366aca(0x1da)](
                (_0x2677c6) => _0x2677c6[_0x366aca(0x223)] === _0xc09978,
              ) && empReqNum[_0x366aca(0x274)]({ input: _0xc09978 }),
              unfilledArr[_0x366aca(0x274)]({
                input: $(this)[_0x366aca(0x2c3)](_0x366aca(0x250)),
              })),
            empReqNum[_0x366aca(0x2b0)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0xaffe8d(0x1da)](_0xaffe8d(0x201))
        [_0xaffe8d(0x268)](function (_0x4e87f0) {
          const _0x17d1c1 = _0xaffe8d;
          let _0x31371e = $(this)[_0x17d1c1(0x2a0)]();
          _0x31371e === "" && (_0x31371e = null),
            _0x31371e != null
              ? (empReqSelect = empReqSelect[_0x17d1c1(0x293)](
                  (_0x3f21f4) => _0x3f21f4["input"] !== _0x4e87f0,
                ))
              : (!empReqSelect["find"](
                  (_0x1a8cfd) => _0x1a8cfd[_0x17d1c1(0x223)] === _0x4e87f0,
                ) && empReqSelect["push"]({ input: _0x4e87f0 }),
                unfilledArr[_0x17d1c1(0x274)]({
                  input: $(this)[_0x17d1c1(0x2c3)](_0x17d1c1(0x250)),
                })),
            empReqSelect[_0x17d1c1(0x2b0)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0xaffe8d(0x1da)](_0xaffe8d(0x216))
        [_0xaffe8d(0x268)](function (_0x7fcaeb) {
          const _0xd316af = _0xaffe8d;
          let _0x26040c = $(this)[_0xd316af(0x2a0)]()[_0xd316af(0x2b0)],
            _0x4aaa9a = $(this)["data"](_0xd316af(0x215))
              ? $(this)[_0xd316af(0x1d6)](_0xd316af(0x215))
              : 0x0;
          $(this)[_0xd316af(0x2a0)]() !== "" && _0x26040c >= _0x4aaa9a
            ? (empReqTextarea = empReqTextarea[_0xd316af(0x293)](
                (_0x20ef75) => _0x20ef75[_0xd316af(0x223)] !== _0x7fcaeb,
              ))
            : (!empReqTextarea["find"](
                (_0xa91dbc) => _0xa91dbc[_0xd316af(0x223)] === _0x7fcaeb,
              ) && empReqTextarea[_0xd316af(0x274)]({ input: _0x7fcaeb }),
              unfilledArr[_0xd316af(0x274)]({
                input: $(this)[_0xd316af(0x2c3)](_0xd316af(0x250)),
              })),
            empReqTextarea[_0xd316af(0x2b0)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0xaffe8d(0x1da)](_0xaffe8d(0x265))
        [_0xaffe8d(0x268)](function () {
          const _0x12a06f = _0xaffe8d;
          $(this)[_0x12a06f(0x2a0)]() !== ""
            ? validateEmail(
                $(this)[_0x12a06f(0x2a0)](),
                $(this)[_0x12a06f(0x1d6)]("block-domain"),
                $(this)[_0x12a06f(0x2c3)](_0x12a06f(0x250)),
              )
            : ((emailFilled = ![]),
              unfilledArr["push"]({
                input: $(this)[_0x12a06f(0x2c3)](_0x12a06f(0x250)),
              }));
        });
  else {
    if ($(steps[x])[_0xaffe8d(0x1d6)](_0xaffe8d(0x1d3)))
      (answer = $(steps[x])
        ["find"](_0xaffe8d(0x2c0))
        [_0xaffe8d(0x1d6)](_0xaffe8d(0x260))),
        (selections = selections[_0xaffe8d(0x293)](
          (_0x2fcd70) => _0x2fcd70["step"] !== x,
        )),
        selections["push"]({ step: x, selected: answer });
    else
      $(steps[x])
        ["find"](_0xaffe8d(0x291))
        [_0xaffe8d(0x1d6)](_0xaffe8d(0x1d3)) &&
        ((answer = $(steps[x])
          [_0xaffe8d(0x1da)](_0xaffe8d(0x291))
          [_0xaffe8d(0x1d6)](_0xaffe8d(0x260))),
        (selections = selections[_0xaffe8d(0x293)](
          (_0x231c22) => _0x231c22[_0xaffe8d(0x2bc)] !== x,
        )),
        selections[_0xaffe8d(0x274)]({ step: x, selected: answer }));
    $(steps[x])
      ["find"](".active-answer-card")
      [_0xaffe8d(0x1da)](":input")
      ["is"](_0xaffe8d(0x2d3)) &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])[_0xaffe8d(0x1da)](_0xaffe8d(0x219))[_0xaffe8d(0x2b0)]
        ? $(steps[x])
            ["find"](_0xaffe8d(0x219))
            [_0xaffe8d(0x268)](function () {
              const _0x2f28f9 = _0xaffe8d;
              $(this)["is"](":checked")
                ? $(steps[x])[_0x2f28f9(0x1da)](_0x2f28f9(0x281))[
                    _0x2f28f9(0x2b0)
                  ] < 0x1 &&
                  ((skipTo = undefined),
                  $(this)
                    [_0x2f28f9(0x22d)](_0x2f28f9(0x269))
                    [_0x2f28f9(0x1d6)]("skip-to") &&
                    (skipTo = $(this)
                      [_0x2f28f9(0x22d)](_0x2f28f9(0x269))
                      [_0x2f28f9(0x1d6)](_0x2f28f9(0x28c))),
                  $(this)
                    [_0x2f28f9(0x22d)](_0x2f28f9(0x2c0))
                    ["attr"]("data-go-to") &&
                    ((answer = $(this)
                      [_0x2f28f9(0x22d)](_0x2f28f9(0x2c0))
                      ["attr"]("data-go-to")),
                    (selections = selections["filter"](
                      (_0x57fc6b) => _0x57fc6b[_0x2f28f9(0x2bc)] !== x,
                    )),
                    selections["push"]({ step: x, selected: answer }),
                    skipTo &&
                      (selections["push"]({
                        step: skipTo - 0x2,
                        selected: answer,
                      }),
                      (objIndex = selections["findIndex"](
                        (_0x4372dd) => _0x4372dd["step"] === x,
                      )),
                      (selections[objIndex][_0x2f28f9(0x248)] =
                        parseInt(skipTo) - 0x1),
                      (selections[objIndex]["backTo"] = x))),
                  (checkboxFilled = !![]),
                  $(steps[x])[_0x2f28f9(0x1da)](_0x2f28f9(0x1c6))["length"] >=
                    $(steps[x])[_0x2f28f9(0x1da)](_0x2f28f9(0x1bc))["length"] &&
                    resetInputErrorMessage(
                      $(steps[x])
                        [_0x2f28f9(0x1da)](_0x2f28f9(0x219))
                        [_0x2f28f9(0x2c3)](_0x2f28f9(0x250)),
                    ))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0x2f28f9(0x274)]({
                    input: $(this)[_0x2f28f9(0x2c3)]("name"),
                  }));
            })
        : $(steps[x])
            [_0xaffe8d(0x1da)](".active-answer-card")
            ["find"](":input[type=\x22checkbox\x22]:checked")[
            _0xaffe8d(0x2b0)
          ] >= checkCount
        ? ($(steps[x])
            [_0xaffe8d(0x1da)](".active-answer-card")
            [_0xaffe8d(0x1da)](_0xaffe8d(0x219))
            [_0xaffe8d(0x22d)](_0xaffe8d(0x2c0))
            ["attr"]("data-go-to") &&
            ((skipTo = undefined),
            $(steps[x])
              [_0xaffe8d(0x1da)](_0xaffe8d(0x291))
              ["find"](_0xaffe8d(0x219))
              [_0xaffe8d(0x22d)](_0xaffe8d(0x269))
              [_0xaffe8d(0x2c3)](_0xaffe8d(0x239)) &&
              (skipTo = $(steps[x])
                ["find"](".active-answer-card")
                [_0xaffe8d(0x1da)](":input[type=\x22checkbox\x22]:checked")
                [_0xaffe8d(0x22d)](_0xaffe8d(0x269))
                [_0xaffe8d(0x2c3)](_0xaffe8d(0x239))),
            (answer = $(steps[x])
              [_0xaffe8d(0x1da)](".active-answer-card")
              [_0xaffe8d(0x1da)](":input[type=\x22checkbox\x22]")
              [_0xaffe8d(0x22d)](_0xaffe8d(0x2c0))
              [_0xaffe8d(0x2c3)](_0xaffe8d(0x26e))),
            (selections = selections[_0xaffe8d(0x293)](
              (_0x5f0fa1) => _0x5f0fa1[_0xaffe8d(0x2bc)] !== x,
            )),
            selections[_0xaffe8d(0x274)]({ step: x, selected: answer }),
            console[_0xaffe8d(0x21f)](_0xaffe8d(0x256), selections),
            skipTo &&
              ((selections = selections["filter"](
                (_0x54c670) => _0x54c670[_0xaffe8d(0x2bc)] !== skipTo - 0x2,
              )),
              selections[_0xaffe8d(0x274)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections["findIndex"](
                (_0x416f6c) => _0x416f6c[_0xaffe8d(0x2bc)] === x,
              )),
              console["log"](objIndex),
              (selections[objIndex][_0xaffe8d(0x248)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0xaffe8d(0x1ef)] = x),
              console[_0xaffe8d(0x21f)]("running"))),
          (checkboxFilled = !![]),
          $(steps[x])[_0xaffe8d(0x1da)](_0xaffe8d(0x1c6))[_0xaffe8d(0x2b0)] >=
            $(steps[x])[_0xaffe8d(0x1da)](_0xaffe8d(0x1bc))[_0xaffe8d(0x2b0)] &&
            resetInputErrorMessage(
              $(steps[x])["find"](_0xaffe8d(0x219))[_0xaffe8d(0x2c3)]("name"),
            ))
        : ((checkboxFilled = ![]),
          $(steps[x])
            ["find"](_0xaffe8d(0x1bc))
            [_0xaffe8d(0x268)](function () {
              const _0x1aa19d = _0xaffe8d;
              $(this)[_0x1aa19d(0x2bb)](_0x1aa19d(0x218)) &&
                unfilledArr["push"]({
                  input: $(this)[_0x1aa19d(0x2c3)](_0x1aa19d(0x250)),
                });
            }))),
      $(steps[x])
        [_0xaffe8d(0x1da)](_0xaffe8d(0x291))
        [_0xaffe8d(0x1da)](_0xaffe8d(0x261))
        [_0xaffe8d(0x268)](function (_0x11e137) {
          const _0x48b660 = _0xaffe8d;
          var _0x416000 = $(this)[_0x48b660(0x2c3)]("name");
          $(_0x48b660(0x2a2) + _0x416000 + _0x48b660(0x23d))[
            _0x48b660(0x2b0)
          ] == 0x0
            ? (!empReqRadio[_0x48b660(0x1da)](
                (_0x1b3045) => _0x1b3045[_0x48b660(0x223)] === _0x11e137,
              ) && empReqRadio[_0x48b660(0x274)]({ input: _0x11e137 }),
              unfilledArr[_0x48b660(0x274)]({
                input: $(this)[_0x48b660(0x2c3)]("name"),
              }))
            : (empReqRadio = empReqRadio[_0x48b660(0x293)](
                (_0x475d81) => _0x475d81["input"] !== _0x11e137,
              )),
            empReqRadio[_0x48b660(0x2b0)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0xaffe8d(0x1da)](".active-answer-card")
        ["find"](_0xaffe8d(0x21b))
        ["each"](function (_0x2dadfa) {
          const _0x3fe188 = _0xaffe8d;
          let _0x2e8f06 = $(this)[_0x3fe188(0x2a0)]()[_0x3fe188(0x2b0)],
            _0x2cca89 = $(this)[_0x3fe188(0x1d6)](_0x3fe188(0x215))
              ? $(this)[_0x3fe188(0x1d6)](_0x3fe188(0x215))
              : 0x0;
          $(this)[_0x3fe188(0x2a0)]() !== "" && _0x2e8f06 >= _0x2cca89
            ? (empReqInput = empReqInput[_0x3fe188(0x293)](
                (_0xc5694d) => _0xc5694d[_0x3fe188(0x223)] !== _0x2dadfa,
              ))
            : (!empReqInput[_0x3fe188(0x1da)](
                (_0x5e884b) => _0x5e884b["input"] === _0x2dadfa,
              ) && empReqInput[_0x3fe188(0x274)]({ input: _0x2dadfa }),
              unfilledArr[_0x3fe188(0x274)]({
                input: $(this)[_0x3fe188(0x2c3)](_0x3fe188(0x250)),
              })),
            empReqInput[_0x3fe188(0x2b0)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0xaffe8d(0x1da)](".active-answer-card")
        [_0xaffe8d(0x1da)](_0xaffe8d(0x217))
        ["each"](function (_0x28c013) {
          const _0x1de8aa = _0xaffe8d;
          (skipTo = undefined),
            $(this)
              ["parents"](_0x1de8aa(0x269))
              [_0x1de8aa(0x1d6)](_0x1de8aa(0x28c)) !== "" &&
              (skipTo = $(this)
                [_0x1de8aa(0x22d)](_0x1de8aa(0x269))
                [_0x1de8aa(0x1d6)](_0x1de8aa(0x28c))),
            $(this)
              [_0x1de8aa(0x22d)](_0x1de8aa(0x2c0))
              [_0x1de8aa(0x2c3)]("data-go-to") &&
              ((answer = $(this)
                [_0x1de8aa(0x22d)](_0x1de8aa(0x2c0))
                [_0x1de8aa(0x2c3)]("data-go-to")),
              (selections = selections[_0x1de8aa(0x293)](
                (_0x4e7b82) => _0x4e7b82["step"] !== x,
              )),
              selections[_0x1de8aa(0x274)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x1de8aa(0x274)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x1de8aa(0x262)](
                  (_0x4f83e9) => _0x4f83e9["step"] === x,
                )),
                (selections[objIndex][_0x1de8aa(0x248)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0xaffe8d(0x1da)](".active-answer-card")
        [_0xaffe8d(0x1da)](":input[type=\x22password\x22][required]")
        [_0xaffe8d(0x268)](function (_0x3fb8bd) {
          const _0x19ba2d = _0xaffe8d;
          let _0x529848 = $(this)[_0x19ba2d(0x2a0)]()["length"],
            _0x4a4790 = $(this)[_0x19ba2d(0x1d6)](_0x19ba2d(0x215))
              ? $(this)["data"]("min-character")
              : 0x0;
          $(this)["val"]() !== "" && _0x529848 >= _0x4a4790
            ? (empReqPassword = empReqPassword[_0x19ba2d(0x293)](
                (_0x97fd75) => _0x97fd75["input"] !== _0x3fb8bd,
              ))
            : (!empReqPassword[_0x19ba2d(0x1da)](
                (_0x494344) => _0x494344[_0x19ba2d(0x223)] === _0x3fb8bd,
              ) && empReqPassword[_0x19ba2d(0x274)]({ input: _0x3fb8bd }),
              unfilledArr[_0x19ba2d(0x274)]({
                input: $(this)[_0x19ba2d(0x2c3)](_0x19ba2d(0x250)),
              })),
            empReqPassword["length"] === 0x0
              ? (passwordFilled = !![])
              : (passwordFilled = ![]);
        }),
      $(steps[x])
        [_0xaffe8d(0x1da)](_0xaffe8d(0x291))
        [_0xaffe8d(0x1da)](":input[type=\x22password\x22]")
        [_0xaffe8d(0x268)](function (_0x341564) {
          const _0x536332 = _0xaffe8d;
          (skipTo = undefined),
            $(this)
              [_0x536332(0x22d)](_0x536332(0x269))
              [_0x536332(0x1d6)](_0x536332(0x28c)) !== "" &&
              (skipTo = $(this)
                [_0x536332(0x22d)](_0x536332(0x269))
                [_0x536332(0x1d6)](_0x536332(0x28c))),
            $(this)
              [_0x536332(0x22d)](_0x536332(0x2c0))
              ["attr"](_0x536332(0x26e)) &&
              ((answer = $(this)
                ["parents"]("[data-go-to]")
                [_0x536332(0x2c3)](_0x536332(0x26e))),
              (selections = selections["filter"](
                (_0x41798d) => _0x41798d["step"] !== x,
              )),
              selections[_0x536332(0x274)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x536332(0x274)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x536332(0x262)](
                  (_0x1813e3) => _0x1813e3[_0x536332(0x2bc)] === x,
                )),
                (selections[objIndex][_0x536332(0x248)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x536332(0x1ef)] = x)));
        }),
      $(steps[x])
        [_0xaffe8d(0x1da)](_0xaffe8d(0x291))
        [_0xaffe8d(0x1da)](_0xaffe8d(0x255))
        [_0xaffe8d(0x268)](function (_0x2d34a5) {
          const _0x275e6f = _0xaffe8d;
          let _0x4a45dc = $(this)[_0x275e6f(0x2a0)]()["length"],
            _0x3fe5dc = $(this)[_0x275e6f(0x1d6)](_0x275e6f(0x215))
              ? $(this)[_0x275e6f(0x1d6)](_0x275e6f(0x215))
              : 0x0;
          $(this)[_0x275e6f(0x2a0)]() !== "" && _0x4a45dc >= _0x3fe5dc
            ? (empReqUrl = empReqUrl[_0x275e6f(0x293)](
                (_0x4ac9d3) => _0x4ac9d3["input"] !== _0x2d34a5,
              ))
            : (!empReqUrl[_0x275e6f(0x1da)](
                (_0x5950db) => _0x5950db[_0x275e6f(0x223)] === _0x2d34a5,
              ) && empReqUrl["push"]({ input: _0x2d34a5 }),
              unfilledArr[_0x275e6f(0x274)]({
                input: $(this)["attr"](_0x275e6f(0x250)),
              })),
            empReqUrl[_0x275e6f(0x2b0)] === 0x0 && validateURL($(this)["val"]())
              ? (urlFilled = !![])
              : (urlFilled = ![]);
        }),
      $(steps[x])
        [_0xaffe8d(0x1da)](_0xaffe8d(0x291))
        [_0xaffe8d(0x1da)](_0xaffe8d(0x2a5))
        [_0xaffe8d(0x268)](function (_0x466d62) {
          const _0x4eff26 = _0xaffe8d;
          (skipTo = undefined),
            $(this)
              [_0x4eff26(0x22d)]("[data-skip-to]")
              ["data"](_0x4eff26(0x28c)) !== "" &&
              (skipTo = $(this)
                [_0x4eff26(0x22d)](_0x4eff26(0x269))
                [_0x4eff26(0x1d6)](_0x4eff26(0x28c))),
            $(this)
              [_0x4eff26(0x22d)](_0x4eff26(0x2c0))
              [_0x4eff26(0x2c3)](_0x4eff26(0x26e)) &&
              ((answer = $(this)
                ["parents"](_0x4eff26(0x2c0))
                [_0x4eff26(0x2c3)](_0x4eff26(0x26e))),
              (selections = selections[_0x4eff26(0x293)](
                (_0x27bce9) => _0x27bce9["step"] !== x,
              )),
              selections[_0x4eff26(0x274)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x4eff26(0x274)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x4eff26(0x262)](
                  (_0x5e419f) => _0x5e419f[_0x4eff26(0x2bc)] === x,
                )),
                (selections[objIndex][_0x4eff26(0x248)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x4eff26(0x1ef)] = x)));
        }),
      $(steps[x])
        ["find"](".active-answer-card")
        [_0xaffe8d(0x1da)](_0xaffe8d(0x224))
        ["each"](function (_0x1f9889) {
          const _0x28f06d = _0xaffe8d;
          $(this)[_0x28f06d(0x2a0)]() !== ""
            ? (empReqDate = empReqDate["filter"](
                (_0x5f2d76) => _0x5f2d76[_0x28f06d(0x223)] !== _0x1f9889,
              ))
            : (!empReqDate[_0x28f06d(0x1da)](
                (_0x37d3b7) => _0x37d3b7["input"] === _0x1f9889,
              ) && empReqDate[_0x28f06d(0x274)]({ input: _0x1f9889 }),
              unfilledArr["push"]({
                input: $(this)[_0x28f06d(0x2c3)]("name"),
              })),
            empReqDate["length"] === 0x0
              ? (dateFilled = !![])
              : (dateFilled = ![]);
        }),
      $(steps[x])
        [_0xaffe8d(0x1da)](".active-answer-card")
        [_0xaffe8d(0x1da)](_0xaffe8d(0x26d))
        [_0xaffe8d(0x268)](function (_0x96c377) {
          const _0x48418f = _0xaffe8d;
          (skipTo = undefined),
            $(this)
              [_0x48418f(0x22d)](_0x48418f(0x269))
              [_0x48418f(0x1d6)](_0x48418f(0x28c)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0x48418f(0x269))
                [_0x48418f(0x1d6)](_0x48418f(0x28c))),
            $(this)
              [_0x48418f(0x22d)]("[data-go-to]")
              ["attr"](_0x48418f(0x26e)) &&
              ((answer = $(this)
                ["parents"]("[data-go-to]")
                [_0x48418f(0x2c3)](_0x48418f(0x26e))),
              (selections = selections["filter"](
                (_0x1e49a4) => _0x1e49a4[_0x48418f(0x2bc)] !== x,
              )),
              selections[_0x48418f(0x274)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x48418f(0x274)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x32848f) => _0x32848f[_0x48418f(0x2bc)] === x,
                )),
                (selections[objIndex][_0x48418f(0x248)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0xaffe8d(0x1da)](_0xaffe8d(0x291))
        ["find"](_0xaffe8d(0x208))
        [_0xaffe8d(0x268)](function (_0x112e2d) {
          const _0x37a972 = _0xaffe8d;
          let _0x407b61 = $(this)[_0x37a972(0x2a0)]()["length"],
            _0x3c333d = $(this)[_0x37a972(0x1d6)]("min-character")
              ? $(this)[_0x37a972(0x1d6)](_0x37a972(0x215))
              : 0x0;
          $(this)[_0x37a972(0x2a0)]() !== "" && _0x407b61 >= _0x3c333d
            ? (empReqNum = empReqNum["filter"](
                (_0x1c0de8) => _0x1c0de8[_0x37a972(0x223)] !== _0x112e2d,
              ))
            : (!empReqNum[_0x37a972(0x1da)](
                (_0xf5fea2) => _0xf5fea2["input"] === _0x112e2d,
              ) && empReqNum[_0x37a972(0x274)]({ input: _0x112e2d }),
              unfilledArr[_0x37a972(0x274)]({
                input: $(this)["attr"](_0x37a972(0x250)),
              })),
            empReqNum[_0x37a972(0x2b0)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        ["find"](".active-answer-card")
        [_0xaffe8d(0x1da)](_0xaffe8d(0x298))
        [_0xaffe8d(0x268)](function (_0xe9c0fd) {
          const _0x2b9e12 = _0xaffe8d;
          (skipTo = undefined),
            $(this)
              [_0x2b9e12(0x22d)](_0x2b9e12(0x269))
              [_0x2b9e12(0x1d6)](_0x2b9e12(0x28c)) !== "" &&
              (skipTo = $(this)
                [_0x2b9e12(0x22d)](_0x2b9e12(0x269))
                [_0x2b9e12(0x1d6)](_0x2b9e12(0x28c))),
            $(this)
              [_0x2b9e12(0x22d)](_0x2b9e12(0x2c0))
              [_0x2b9e12(0x2c3)](_0x2b9e12(0x26e)) &&
              ((answer = $(this)
                ["parents"](_0x2b9e12(0x2c0))
                [_0x2b9e12(0x2c3)]("data-go-to")),
              (selections = selections[_0x2b9e12(0x293)](
                (_0x80b7eb) => _0x80b7eb[_0x2b9e12(0x2bc)] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections["findIndex"](
                  (_0x389704) => _0x389704["step"] === x,
                )),
                (selections[objIndex][_0x2b9e12(0x248)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0xaffe8d(0x1da)](_0xaffe8d(0x291))
        [_0xaffe8d(0x1da)](_0xaffe8d(0x2b9))
        ["each"](function (_0xc6c990) {
          const _0x5619b1 = _0xaffe8d;
          if ($(this)[_0x5619b1(0x2a0)]() !== "") {
            let _0x10ed3c = $(this)[_0x5619b1(0x2a0)]()["length"],
              _0x50ae30 = $(this)[_0x5619b1(0x1d6)]("min-character")
                ? $(this)[_0x5619b1(0x1d6)](_0x5619b1(0x215))
                : 0x0;
            if ($(this)[_0x5619b1(0x1d6)]("phone-autoformat")) {
              var _0x1b1c31 = phoneAutoFormat(
                $(this)[_0x5619b1(0x1d6)](_0x5619b1(0x28d)),
              );
              $(this)["val"](_0x1b1c31($(this)[_0x5619b1(0x2a0)]()));
            }
            phoneValidation($(this)[_0x5619b1(0x2a0)](), _0x10ed3c, _0x50ae30)
              ? (empReqTel = empReqTel[_0x5619b1(0x293)](
                  (_0x5a593d) => _0x5a593d["input"] !== _0xc6c990,
                ))
              : empReqTel[_0x5619b1(0x274)]({ input: _0xc6c990 });
          } else
            !empReqTel["find"](
              (_0x3af414) => _0x3af414[_0x5619b1(0x223)] === _0xc6c990,
            ) && empReqTel[_0x5619b1(0x274)]({ input: _0xc6c990 }),
              unfilledArr[_0x5619b1(0x274)]({
                input: $(this)[_0x5619b1(0x2c3)](_0x5619b1(0x250)),
              });
          empReqTel[_0x5619b1(0x2b0)] === 0x0
            ? (telFilled = !![])
            : (telFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0xaffe8d(0x291))
        [_0xaffe8d(0x1da)](_0xaffe8d(0x1fa))
        [_0xaffe8d(0x268)](function (_0x398d2e) {
          const _0x5a3428 = _0xaffe8d;
          (skipTo = undefined),
            $(this)
              [_0x5a3428(0x22d)](_0x5a3428(0x269))
              [_0x5a3428(0x1d6)](_0x5a3428(0x28c)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0x5a3428(0x269))
                [_0x5a3428(0x1d6)]("skip-to")),
            $(this)
              [_0x5a3428(0x22d)]("[data-go-to]")
              [_0x5a3428(0x2c3)](_0x5a3428(0x26e)) &&
              ((answer = $(this)
                ["parents"](_0x5a3428(0x2c0))
                [_0x5a3428(0x2c3)]("data-go-to")),
              (selections = selections[_0x5a3428(0x293)](
                (_0x343893) => _0x343893[_0x5a3428(0x2bc)] !== x,
              )),
              selections[_0x5a3428(0x274)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections["findIndex"](
                  (_0x4530bb) => _0x4530bb[_0x5a3428(0x2bc)] === x,
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x5a3428(0x1ef)] = x)));
        }),
      $(steps[x])
        [_0xaffe8d(0x1da)](_0xaffe8d(0x291))
        [_0xaffe8d(0x1da)](":input[type=\x22file\x22][required]")
        [_0xaffe8d(0x268)](function (_0x150136) {
          const _0x18f1ce = _0xaffe8d;
          $(this)[_0x18f1ce(0x2a0)]() !== ""
            ? (empReqFile = empReqFile["filter"](
                (_0x593eab) => _0x593eab[_0x18f1ce(0x223)] !== _0x150136,
              ))
            : (!empReqFile[_0x18f1ce(0x1da)](
                (_0x1a06a8) => _0x1a06a8[_0x18f1ce(0x223)] === _0x150136,
              ) && empReqFile[_0x18f1ce(0x274)]({ input: _0x150136 }),
              unfilledArr[_0x18f1ce(0x274)]({
                input: $(this)[_0x18f1ce(0x2c3)](_0x18f1ce(0x250)),
              })),
            empReqFile[_0x18f1ce(0x2b0)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        ["find"](".active-answer-card")
        [_0xaffe8d(0x1da)](_0xaffe8d(0x24f))
        ["each"](function (_0x34a94b) {
          const _0x4ca8e8 = _0xaffe8d;
          (skipTo = undefined),
            $(this)["parents"](_0x4ca8e8(0x269))["data"]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0x4ca8e8(0x22d)](_0x4ca8e8(0x269))
                [_0x4ca8e8(0x1d6)](_0x4ca8e8(0x28c))),
            $(this)[_0x4ca8e8(0x22d)](_0x4ca8e8(0x2c0))["attr"]("data-go-to") &&
              ((answer = $(this)
                [_0x4ca8e8(0x22d)](_0x4ca8e8(0x2c0))
                [_0x4ca8e8(0x2c3)]("data-go-to")),
              (selections = selections[_0x4ca8e8(0x293)](
                (_0x404cbb) => _0x404cbb[_0x4ca8e8(0x2bc)] !== x,
              )),
              selections[_0x4ca8e8(0x274)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x4ca8e8(0x274)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x4ca8e8(0x262)](
                  (_0xe1df7a) => _0xe1df7a[_0x4ca8e8(0x2bc)] === x,
                )),
                (selections[objIndex][_0x4ca8e8(0x248)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0xaffe8d(0x1da)](_0xaffe8d(0x291))
        [_0xaffe8d(0x1da)](_0xaffe8d(0x201))
        [_0xaffe8d(0x268)](function (_0x255643) {
          const _0x129a6f = _0xaffe8d;
          $(this)[_0x129a6f(0x2a0)]() !== ""
            ? (empReqSelect = empReqSelect[_0x129a6f(0x293)](
                (_0x392627) => _0x392627[_0x129a6f(0x223)] !== _0x255643,
              ))
            : (!empReqSelect["find"](
                (_0x242820) => _0x242820[_0x129a6f(0x223)] === _0x255643,
              ) && empReqSelect[_0x129a6f(0x274)]({ input: _0x255643 }),
              unfilledArr[_0x129a6f(0x274)]({
                input: $(this)[_0x129a6f(0x2c3)](_0x129a6f(0x250)),
              })),
            empReqSelect[_0x129a6f(0x2b0)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0xaffe8d(0x1da)](".active-answer-card")
        [_0xaffe8d(0x1da)](_0xaffe8d(0x28e))
        ["each"](function (_0x4beb7e) {
          const _0x272038 = _0xaffe8d;
          (skipTo = undefined),
            $(this)
              [_0x272038(0x22d)](_0x272038(0x269))
              [_0x272038(0x1d6)](_0x272038(0x28c)) !== "" &&
              (skipTo = $(this)
                [_0x272038(0x22d)](_0x272038(0x269))
                [_0x272038(0x1d6)](_0x272038(0x28c))),
            $(this)
              ["parents"]("[data-go-to]")
              [_0x272038(0x2c3)](_0x272038(0x26e)) &&
              ((answer = $(this)
                [_0x272038(0x22d)]("[data-go-to]")
                ["attr"]("data-go-to")),
              (selections = selections["filter"](
                (_0x4ea5eb) => _0x4ea5eb["step"] !== x,
              )),
              selections[_0x272038(0x274)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x272038(0x274)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x272038(0x262)](
                  (_0x2d8acd) => _0x2d8acd[_0x272038(0x2bc)] === x,
                )),
                (selections[objIndex][_0x272038(0x248)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x272038(0x1ef)] = x)));
        }),
      $(steps[x])
        [_0xaffe8d(0x1da)](_0xaffe8d(0x291))
        [_0xaffe8d(0x1da)](_0xaffe8d(0x216))
        [_0xaffe8d(0x268)](function (_0x2bcc18) {
          const _0x84ae79 = _0xaffe8d;
          let _0x33e9f3 = $(this)["val"]()[_0x84ae79(0x2b0)],
            _0x21c66a = $(this)[_0x84ae79(0x1d6)](_0x84ae79(0x215))
              ? $(this)[_0x84ae79(0x1d6)](_0x84ae79(0x215))
              : 0x0;
          $(this)[_0x84ae79(0x2a0)]() !== "" && _0x33e9f3 >= _0x21c66a
            ? (empReqTextarea = empReqTextarea["filter"](
                (_0x1e9c6e) => _0x1e9c6e[_0x84ae79(0x223)] !== _0x2bcc18,
              ))
            : (!empReqTextarea["find"](
                (_0x3c65e6) => _0x3c65e6["input"] === _0x2bcc18,
              ) && empReqTextarea[_0x84ae79(0x274)]({ input: _0x2bcc18 }),
              unfilledArr[_0x84ae79(0x274)]({
                input: $(this)["attr"](_0x84ae79(0x250)),
              })),
            empReqTextarea["length"] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0xaffe8d(0x1da)](_0xaffe8d(0x291))
        ["find"](_0xaffe8d(0x1ca))
        [_0xaffe8d(0x268)](function (_0x51ce4b) {
          const _0x5b41dd = _0xaffe8d;
          (skipTo = undefined),
            $(this)
              [_0x5b41dd(0x22d)](_0x5b41dd(0x269))
              [_0x5b41dd(0x1d6)](_0x5b41dd(0x28c)) !== "" &&
              (skipTo = $(this)
                [_0x5b41dd(0x22d)](_0x5b41dd(0x269))
                ["data"](_0x5b41dd(0x28c))),
            $(this)
              [_0x5b41dd(0x22d)]("[data-go-to]")
              [_0x5b41dd(0x2c3)](_0x5b41dd(0x26e)) &&
              ((answer = $(this)
                [_0x5b41dd(0x22d)](_0x5b41dd(0x2c0))
                [_0x5b41dd(0x2c3)]("data-go-to")),
              (selections = selections["filter"](
                (_0x5e3a3b) => _0x5e3a3b[_0x5b41dd(0x2bc)] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections["findIndex"](
                  (_0x3dc0b6) => _0x3dc0b6["step"] === x,
                )),
                (selections[objIndex][_0x5b41dd(0x248)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x5b41dd(0x1ef)] = x)));
        }),
      $(steps[x])
        [_0xaffe8d(0x1da)](_0xaffe8d(0x291))
        [_0xaffe8d(0x1da)](_0xaffe8d(0x265))
        [_0xaffe8d(0x268)](function (_0xa661ee) {
          const _0x528433 = _0xaffe8d;
          $(this)[_0x528433(0x2a0)]() !== ""
            ? validateEmail(
                $(this)[_0x528433(0x2a0)](),
                $(this)[_0x528433(0x1d6)](_0x528433(0x2ce)),
                $(this)[_0x528433(0x2c3)](_0x528433(0x250)),
              )
            : ((emailFilled = ![]),
              unfilledArr[_0x528433(0x274)]({
                input: $(this)["attr"](_0x528433(0x250)),
              }));
        }),
      $(steps[x])
        ["find"](_0xaffe8d(0x291))
        ["find"](_0xaffe8d(0x1be))
        ["each"](function (_0x457a5a) {
          const _0xe3a4e7 = _0xaffe8d;
          (skipTo = undefined),
            $(this)
              [_0xe3a4e7(0x22d)](_0xe3a4e7(0x269))
              [_0xe3a4e7(0x1d6)](_0xe3a4e7(0x28c)) !== "" &&
              (skipTo = $(this)
                ["parents"]("[data-skip-to]")
                [_0xe3a4e7(0x1d6)](_0xe3a4e7(0x28c))),
            $(this)
              [_0xe3a4e7(0x22d)]("[data-go-to]")
              [_0xe3a4e7(0x2c3)](_0xe3a4e7(0x26e)) &&
              ((answer = $(this)
                [_0xe3a4e7(0x22d)]("[data-go-to]")
                [_0xe3a4e7(0x2c3)](_0xe3a4e7(0x26e))),
              (selections = selections[_0xe3a4e7(0x293)](
                (_0x319e76) => _0x319e76["step"] !== x,
              )),
              selections[_0xe3a4e7(0x274)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0xe3a4e7(0x262)](
                  (_0x6f29b4) => _0x6f29b4["step"] === x,
                )),
                (selections[objIndex][_0xe3a4e7(0x248)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0xe3a4e7(0x1ef)] = x)));
        });
  }
  $(steps[x])[_0xaffe8d(0x1da)](_0xaffe8d(0x25b))["is"](_0xaffe8d(0x218)) &&
    ((selArr = []),
    $(steps)
      [_0xaffe8d(0x1da)]("[data-selected]:checked")
      [_0xaffe8d(0x268)](function (_0x23c6bb, _0x41a607) {
        const _0x511bd5 = _0xaffe8d;
        selArr["push"]({ selected: $(this)["data"](_0x511bd5(0x256)) });
      }),
    (selString = []),
    selArr["forEach"]((_0x4caa77) =>
      selString[_0xaffe8d(0x274)](_0x4caa77[_0xaffe8d(0x256)]),
    ),
    (selections = selections[_0xaffe8d(0x293)](
      (_0x4745e5) => _0x4745e5[_0xaffe8d(0x2bc)] !== x,
    )),
    $(steps[x])
      [_0xaffe8d(0x1da)](".active-answer-card")
      [_0xaffe8d(0x1da)](_0xaffe8d(0x227))
      [_0xaffe8d(0x268)](function () {
        const _0x38ef5b = _0xaffe8d;
        skipTo = undefined;
        if (
          $(this)
            [_0x38ef5b(0x22d)]("[data-skip-to]")
            [_0x38ef5b(0x1d6)](_0x38ef5b(0x28c))
        )
          skipTo = $(this)
            [_0x38ef5b(0x22d)]("[data-skip-to]")
            [_0x38ef5b(0x1d6)](_0x38ef5b(0x28c));
        else
          $(this)[_0x38ef5b(0x1d6)](_0x38ef5b(0x28c)) &&
            (skipTo = $(this)[_0x38ef5b(0x1d6)](_0x38ef5b(0x28c)));
        if ($(this)[_0x38ef5b(0x1d6)](_0x38ef5b(0x260)))
          (answer = $(this)[_0x38ef5b(0x2c3)]("data-go-to")),
            console[_0x38ef5b(0x21f)](answer, selections),
            selections[_0x38ef5b(0x274)]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0x38ef5b(0x274)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0x38ef5b(0x262)](
                (_0x433f6d) => _0x433f6d["step"] === x,
              )),
              (selections[objIndex][_0x38ef5b(0x248)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x38ef5b(0x1ef)] = x));
        else
          $(this)
            [_0x38ef5b(0x22d)]("[data-go-to]")
            [_0x38ef5b(0x1d6)](_0x38ef5b(0x260)) &&
            ((answer = $(this)
              [_0x38ef5b(0x22d)](_0x38ef5b(0x2c0))
              ["data"]("go-to")),
            selections[_0x38ef5b(0x274)]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0x38ef5b(0x274)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0x38ef5b(0x262)](
                (_0x57a2bb) => _0x57a2bb["step"] === x,
              )),
              (selections[objIndex][_0x38ef5b(0x248)] = parseInt(skipTo) - 0x1),
              (selections[objIndex]["backTo"] = x)));
      }),
    logicExtra
      ? ($(steps[x])
          ["find"](".active-answer-card")
          [_0xaffe8d(0x1da)]("[data-radio-skip]:visible")
          [_0xaffe8d(0x1d6)](_0xaffe8d(0x26f)) === !![] ||
          $(steps[x])
            ["find"](_0xaffe8d(0x1f8))
            [_0xaffe8d(0x1d6)](_0xaffe8d(0x26f)) === !![]) &&
        skip &&
        selections[_0xaffe8d(0x293)](
          (_0x117c89) => _0x117c89[_0xaffe8d(0x2bc)] === x,
        )[_0xaffe8d(0x2b0)] > 0x0 &&
        textareaLength === 0x0 &&
        textInputLength === 0x0 &&
        emailInputLength === 0x0 &&
        checkboxInputLength === 0x0 &&
        setTimeout(
          function () {
            (next = !![]), nextStep(), selectionQuiz();
          },
          $(steps[x])
            [_0xaffe8d(0x1da)]("[data-radio-delay]")
            [_0xaffe8d(0x1d6)](_0xaffe8d(0x297)),
        )
      : $(steps[x])
          [_0xaffe8d(0x1da)](_0xaffe8d(0x24a))
          [_0xaffe8d(0x1d6)](_0xaffe8d(0x26f)) === !![] &&
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
            [_0xaffe8d(0x1da)](_0xaffe8d(0x2d5))
            [_0xaffe8d(0x1d6)](_0xaffe8d(0x297)),
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
  const _0x552532 = _0x4d5754;
  $(_0x552532(0x27c))[_0x552532(0x2ac)](),
    unfilledArr["length"] > 0x0 &&
      unfilledArr[_0x552532(0x249)](function (_0x31371a) {
        const _0x4155df = _0x552532;
        $(_0x4155df(0x205) + _0x31371a[_0x4155df(0x223)] + "\x22]")
          [_0x4155df(0x2a7)](_0x4155df(0x27c))
          ["fadeIn"](),
          $(_0x4155df(0x205) + _0x31371a[_0x4155df(0x223)] + "\x22]")
            [_0x4155df(0x22d)]()
            ["children"](_0x4155df(0x27c))
            ["fadeIn"](),
          $(_0x4155df(0x1fe) + _0x31371a["input"] + "\x22]")
            ["siblings"](_0x4155df(0x27c))
            [_0x4155df(0x24d)](),
          $(_0x4155df(0x289) + _0x31371a[_0x4155df(0x223)] + "\x22]")
            ["siblings"](_0x4155df(0x27c))
            [_0x4155df(0x24d)]();
      });
}
function resetInputErrorMessage(_0x125d45) {
  const _0x5a8d0f = _0x4d5754;
  $(_0x5a8d0f(0x205) + _0x125d45 + "\x22]")
    [_0x5a8d0f(0x2a7)](_0x5a8d0f(0x27c))
    [_0x5a8d0f(0x2ac)](),
    $(_0x5a8d0f(0x205) + _0x125d45 + "\x22]")
      [_0x5a8d0f(0x22d)]()
      ["children"]("[data-text=\x22error-message\x22]")
      [_0x5a8d0f(0x2ac)](),
    $("textarea[name=\x22" + _0x125d45 + "\x22]")
      [_0x5a8d0f(0x2a7)](_0x5a8d0f(0x27c))
      [_0x5a8d0f(0x2ac)](),
    $("select[name=\x22" + _0x125d45 + "\x22]")
      ["siblings"](_0x5a8d0f(0x27c))
      [_0x5a8d0f(0x2ac)]();
}
function increaseCurstep() {
  const _0x371408 = _0x4d5754;
  countCard
    ? ((curStep = curStep + 0x1),
      $(_0x371408(0x24b))[_0x371408(0x29a)](steps[_0x371408(0x2b0)]))
    : $(steps[x])["data"](_0x371408(0x1d3))
    ? (curStep = curStep + 0x0)
    : (curStep = curStep + 0x1),
    $(_0x371408(0x2cb))[_0x371408(0x29a)](curStep);
}
function decreaseCurstep() {
  const _0x23ab30 = _0x4d5754;
  countCard
    ? ((curStep = curStep - 0x1),
      $(_0x23ab30(0x24b))[_0x23ab30(0x29a)](steps[_0x23ab30(0x2b0)]))
    : $(steps[x])["data"]("card")
    ? (curStep = curStep - 0x0)
    : (curStep = curStep - 0x1),
    $("[data-text=\x22current-step\x22]")[_0x23ab30(0x29a)](curStep);
}
$(_0x4d5754(0x1e4))["on"]("click", function (_0x33a0eb) {
  const _0x471ec8 = _0x4d5754;
  $(this)["data"](_0x471ec8(0x233)) &&
    (redirectTo = $(this)[_0x471ec8(0x1d6)]("redirect")),
    !$(this)[_0x471ec8(0x1d6)](_0x471ec8(0x286)) &&
      (newTab = $(this)[_0x471ec8(0x1d6)](_0x471ec8(0x286))),
    (successCard = $(this)[_0x471ec8(0x1d6)]("success")),
    _0x33a0eb[_0x471ec8(0x2af)](),
    _0x33a0eb[_0x471ec8(0x2be)](),
    logicExtra &&
      ($(this)[_0x471ec8(0x2d1)](_0x471ec8(0x1ec), !![]),
      $(steps)["find"](":input")["prop"](_0x471ec8(0x234), ![])),
    localStorage[_0x471ec8(0x1d1)](_0x471ec8(0x212)),
    fill
      ? ($(this)[_0x471ec8(0x1d6)](_0x471ec8(0x23c))
          ? $(this)[_0x471ec8(0x2a0)](
              $(this)[_0x471ec8(0x1d6)](_0x471ec8(0x23c)),
            )
          : ($(this)[_0x471ec8(0x2a0)](_0x471ec8(0x1c5)),
            $(this)[_0x471ec8(0x29a)]("Please\x20wait...")),
        $(_0x471ec8(0x202))["submit"](),
        $(_0x471ec8(0x2b8))[_0x471ec8(0x2b0)] > 0x0 &&
          grecaptcha[_0x471ec8(0x2c5)]()["length"] === 0x0 &&
          (form[_0x471ec8(0x1da)](_0x471ec8(0x1e4))[_0x471ec8(0x29a)](
            oldSubmitText,
          ),
          form[_0x471ec8(0x1da)](_0x471ec8(0x1e4))[_0x471ec8(0x2a0)](
            oldSubmitText,
          )),
        customError && $(_0x471ec8(0x27c))[_0x471ec8(0x2ac)]())
      : customError && displayErrorMessage();
});
function nextStep() {
  const _0x1f5e43 = _0x4d5754;
  customError
    ? ($(_0x1f5e43(0x27c))[_0x1f5e43(0x2ac)](),
      fill
        ? (x++,
          increaseCurstep(),
          (progress = x),
          x <= steps[_0x1f5e43(0x2b0)] - 0x1 &&
            (updateStep(), memory && saveFilledInput()))
        : displayErrorMessage())
    : (x++,
      increaseCurstep(),
      x > progress && (progress = x),
      x <= steps[_0x1f5e43(0x2b0)] - 0x1 &&
        (updateStep(), memory && saveFilledInput())),
    andLogic();
}
function backStep() {
  const _0x5acf2e = _0x4d5754;
  customError && $("[data-text=\x22error-message\x22]")[_0x5acf2e(0x2ac)](),
    decreaseCurstep(),
    x > 0x0 &&
      ($(progressbar[x])[_0x5acf2e(0x2a1)](_0x5acf2e(0x20c)),
      selections["filter"]((_0x1849bc) => _0x1849bc[_0x5acf2e(0x248)] === x)[
        "length"
      ] > 0x0
        ? (x = parseInt(
            getSafe(
              () =>
                selections[_0x5acf2e(0x293)](
                  (_0x2dea93) => _0x2dea93[_0x5acf2e(0x248)] === x,
                )[0x0][_0x5acf2e(0x1ef)],
            ),
          ))
        : x--,
      updateStep()),
    ($(steps[x])
      [_0x5acf2e(0x1da)]("[data-radio-skip]:visible")
      ["data"]("radio-skip") === !![] ||
      $(steps[x])
        [_0x5acf2e(0x1da)](".active-answer-card")
        ["find"](_0x5acf2e(0x24a))
        [_0x5acf2e(0x1d6)](_0x5acf2e(0x26f)) === !![] ||
      $(steps[x])
        ["find"](_0x5acf2e(0x1f8))
        [_0x5acf2e(0x1d6)](_0x5acf2e(0x26f)) === !![]) &&
      ((all_data = all_data["filter"](
        (_0x26008f) =>
          _0x26008f[_0x5acf2e(0x277)] !==
          $(steps[x])
            [_0x5acf2e(0x1da)](_0x5acf2e(0x247))
            [_0x5acf2e(0x2c3)](_0x5acf2e(0x250)),
      )),
      $(
        "[data-input-field=\x22" +
          $(steps[x])
            [_0x5acf2e(0x1da)]("input[type=\x22radio\x22]:checked")
            [_0x5acf2e(0x2c3)](_0x5acf2e(0x250)) +
          "\x22]",
      )["hide"](),
      $(steps[x])
        [_0x5acf2e(0x1da)](_0x5acf2e(0x284))
        [_0x5acf2e(0x2d1)]("checked", ![]),
      $(steps[x])
        [_0x5acf2e(0x1da)](_0x5acf2e(0x200))
        [_0x5acf2e(0x2a1)]("w--redirected-checked"),
      validation());
}
weightedSelectionRange &&
  $(_0x4d5754(0x278))[_0x4d5754(0x268)](function () {
    const _0xff7986 = _0x4d5754;
    $(this)[_0xff7986(0x1fb)](
      "<div\x20data-range=\x22selection\x22\x20style=\x22display:none\x20!important\x22>" +
        $(this)[_0xff7986(0x1d6)](_0xff7986(0x2cc)) +
        _0xff7986(0x220),
    );
  });
function selectionQuiz() {
  const _0xc75228 = _0x4d5754;
  if ($(this)[_0xc75228(0x1da)](_0xc75228(0x1cf))) {
    $(_0xc75228(0x278))[_0xc75228(0x2ac)](), $(_0xc75228(0x2ba))["hide"]();
    if (weightedSelection) {
      (selTotal = 0x0),
        selArr[_0xc75228(0x249)](function (_0x3915de) {
          selTotal = selTotal + _0x3915de["selected"];
        }),
        $(_0xc75228(0x21c))[_0xc75228(0x29a)](selTotal);
      if (
        $("[data-selection=\x22" + selTotal + "\x22]")[_0xc75228(0x2b0)] > 0x0
      )
        $(_0xc75228(0x287) + selTotal + "\x22]")[_0xc75228(0x24d)]();
      else
        $(_0xc75228(0x20e) + selTotal + ")")
          ? $(_0xc75228(0x20e) + selTotal + ")")
              [_0xc75228(0x1cd)]("[data-selection]")
              ["eq"](0x0)
              [_0xc75228(0x257)]()
          : $("[data-selection=\x22other\x22]")[_0xc75228(0x24d)]();
    } else {
      let _0x20d3ff = -0x1;
      $(_0xc75228(0x278))[_0xc75228(0x268)](function (_0x393119) {
        const _0x2227b4 = _0xc75228;
        $($(_0x2227b4(0x278))[_0x393119])
          ["data"](_0x2227b4(0x2cc))
          [_0x2227b4(0x273)](selString[_0x2227b4(0x21e)]()) &&
          (_0x20d3ff = _0x393119);
      }),
        _0x20d3ff > -0x1
          ? $($(_0xc75228(0x278))[_0x20d3ff])[_0xc75228(0x24d)]()
          : $(_0xc75228(0x211))["fadeIn"]();
    }
  }
}
function triggerInputAllData() {
  const _0xe5a3a2 = _0x4d5754;
  if (savedFilledInput && memory)
    savedFilledInput[_0xe5a3a2(0x249)]((_0x4f67ee) => {
      const _0x11ffcd = _0xe5a3a2;
      var _0x43a55e = $(
          _0x11ffcd(0x205) +
            _0x4f67ee[_0x11ffcd(0x1e2)] +
            _0x11ffcd(0x1f2) +
            _0x4f67ee[_0x11ffcd(0x25f)] +
            "\x22]",
        ),
        _0x59eb59 = $(_0x11ffcd(0x205) + _0x4f67ee[_0x11ffcd(0x1e2)] + "\x22]");
      console[_0x11ffcd(0x21f)](
        _0x43a55e["parents"](_0x11ffcd(0x2d4))["data"]("radio-skip"),
      );
      if (_0x43a55e["attr"](_0x11ffcd(0x2ad)) !== _0x11ffcd(0x282)) {
        if (
          _0x43a55e[_0x11ffcd(0x2c3)](_0x11ffcd(0x2ad)) === _0x11ffcd(0x275) &&
          !_0x43a55e[_0x11ffcd(0x22d)]("[data-radio-skip]")[_0x11ffcd(0x1d6)](
            _0x11ffcd(0x26f),
          )
        )
          _0x43a55e[_0x11ffcd(0x2a4)](),
            _0x43a55e[_0x11ffcd(0x2a7)](_0x11ffcd(0x1eb))[_0x11ffcd(0x27e)](
              "w--redirected-checked",
            ),
            _0x43a55e["trigger"]("input");
        else
          _0x4f67ee["value"] === "on"
            ? (_0x59eb59[_0x11ffcd(0x2a4)](),
              _0x59eb59[_0x11ffcd(0x2a7)](_0x11ffcd(0x285))[_0x11ffcd(0x27e)](
                _0x11ffcd(0x283),
              ),
              _0x59eb59[_0x11ffcd(0x2aa)](_0x11ffcd(0x223)))
            : (console[_0x11ffcd(0x21f)](
                _0x4f67ee[_0x11ffcd(0x1e2)],
                _0x4f67ee[_0x11ffcd(0x25f)],
              ),
              _0x59eb59[_0x11ffcd(0x2a0)](_0x4f67ee[_0x11ffcd(0x25f)]),
              _0x59eb59[_0x11ffcd(0x2a0)](_0x4f67ee["value"]),
              $(_0x11ffcd(0x2bf) + _0x4f67ee[_0x11ffcd(0x25f)] + "\x22]")[
                "prop"
              ](_0x11ffcd(0x256), !![]),
              _0x59eb59[_0x11ffcd(0x2aa)]("input"),
              _0x59eb59[_0x11ffcd(0x2aa)]("change"));
      }
    });
  else
    _params &&
      (getParams(),
      searchQ[_0xe5a3a2(0x249)]((_0xa67330) => {
        const _0x328aa3 = _0xe5a3a2;
        if (
          $(
            _0x328aa3(0x205) +
              _0xa67330["inputName"] +
              _0x328aa3(0x1f2) +
              _0xa67330["value"] +
              "\x22]",
          )[_0x328aa3(0x2c3)](_0x328aa3(0x2ad)) !== _0x328aa3(0x282)
        ) {
          if (
            $(
              _0x328aa3(0x205) +
                _0xa67330[_0x328aa3(0x235)] +
                _0x328aa3(0x1f2) +
                _0xa67330[_0x328aa3(0x2a0)] +
                "\x22]",
            )[_0x328aa3(0x2c3)](_0x328aa3(0x2ad)) === _0x328aa3(0x275)
          )
            $(
              "input[name=\x22" +
                _0xa67330[_0x328aa3(0x235)] +
                _0x328aa3(0x1f2) +
                _0xa67330[_0x328aa3(0x2a0)] +
                "\x22]",
            )[_0x328aa3(0x2a4)](),
              $(
                _0x328aa3(0x205) +
                  _0xa67330["key"] +
                  _0x328aa3(0x1f2) +
                  _0xa67330[_0x328aa3(0x2a0)] +
                  "\x22]",
              )
                [_0x328aa3(0x2a7)](_0x328aa3(0x1eb))
                [_0x328aa3(0x27e)]("w--redirected-checked"),
              $(
                _0x328aa3(0x205) +
                  _0xa67330["key"] +
                  _0x328aa3(0x1f2) +
                  _0xa67330[_0x328aa3(0x2a0)] +
                  "\x22]",
              )[_0x328aa3(0x2aa)](_0x328aa3(0x223));
          else
            _0xa67330[_0x328aa3(0x2a0)] === "on"
              ? ($(_0x328aa3(0x205) + _0xa67330["key"] + "\x22]")[
                  _0x328aa3(0x2a4)
                ](),
                $("input[name=\x22" + _0xa67330[_0x328aa3(0x235)] + "\x22]")
                  ["siblings"](_0x328aa3(0x285))
                  [_0x328aa3(0x27e)](_0x328aa3(0x283)),
                $(_0x328aa3(0x205) + _0xa67330[_0x328aa3(0x235)] + "\x22]")[
                  "trigger"
                ]("input"))
              : ($(_0x328aa3(0x205) + _0xa67330[_0x328aa3(0x235)] + "\x22]")[
                  _0x328aa3(0x2a0)
                ](_0xa67330[_0x328aa3(0x2a0)]),
                $("textarea[name=\x22" + _0xa67330["key"] + "\x22]")[
                  _0x328aa3(0x2a0)
                ](_0xa67330["val"]),
                $("select[name=\x22" + _0xa67330[_0x328aa3(0x235)] + "\x22]")
                  [_0x328aa3(0x1da)](
                    "option[value=\x22" + _0xa67330[_0x328aa3(0x2a0)] + "\x22]",
                  )
                  ["prop"](_0x328aa3(0x256), !![]),
                $(_0x328aa3(0x205) + _0xa67330[_0x328aa3(0x235)] + "\x22]")[
                  _0x328aa3(0x2aa)
                ](_0x328aa3(0x223)),
                $(_0x328aa3(0x205) + _0xa67330[_0x328aa3(0x235)] + "\x22]")[
                  _0x328aa3(0x2aa)
                ]("change"));
        }
      }));
}
$("[data-form=\x22next-btn\x22]")["on"]("click", function () {
  (next = !![]), nextStep(), selectionQuiz();
}),
  $("[data-form=\x22back-btn\x22]")["on"](_0x4d5754(0x2a4), function () {
    (next = ![]), (back = !![]), backStep();
  }),
  $(steps)
    [_0x4d5754(0x1da)](_0x4d5754(0x1e8))
    [_0x4d5754(0x2bb)]("[type=\x22radio\x22]")
    ["on"](_0x4d5754(0x223), function (_0x551697) {
      validation(), andLogic();
    }),
  $(steps)
    [_0x4d5754(0x1da)](_0x4d5754(0x284))
    ["on"](_0x4d5754(0x2a4), function () {
      (skip = !![]), validation();
    });
$("[data-clickable-all]")["data"](_0x4d5754(0x272))
  ? $(_0x4d5754(0x206))[_0x4d5754(0x2a1)](_0x4d5754(0x1c0))
  : $(_0x4d5754(0x206))[_0x4d5754(0x27e)](_0x4d5754(0x1c0));
function clickableIndicator() {
  const _0x1d034a = _0x4d5754;
  $(_0x1d034a(0x1c3))[_0x1d034a(0x1d6)]("clickable") &&
    ($(_0x1d034a(0x1dd))["removeClass"](_0x1d034a(0x20c)),
    $(_0x1d034a(0x1c3))[_0x1d034a(0x1d6)]("clickable-all")
      ? ((x = $(this)["index"]()), updateStep())
      : $(this)[_0x1d034a(0x20b)]() <= progress &&
        ((x = $(this)[_0x1d034a(0x20b)]()), updateStep())),
    $(_0x1d034a(0x2cb))[_0x1d034a(0x29a)](x + 0x1);
}
$(_0x4d5754(0x206))["on"](_0x4d5754(0x2a4), clickableIndicator);
$(_0x4d5754(0x202))["data"](_0x4d5754(0x1c8)) &&
  ($(_0x4d5754(0x2c0))[_0x4d5754(0x268)](function () {
    const _0x5ed2df = _0x4d5754;
    $(this)[_0x5ed2df(0x1fb)](
      _0x5ed2df(0x2d2),
      $(this)["data"](_0x5ed2df(0x260)),
    );
  }),
  $("[data-answer]")["each"](function () {
    const _0x1a8cd8 = _0x4d5754;
    $(this)[_0x1a8cd8(0x1fb)](
      _0x1a8cd8(0x23b),
      $(this)[_0x1a8cd8(0x1d6)](_0x1a8cd8(0x258)),
    );
  }));
function resetFormly() {
  const _0x3fdfdb = _0x4d5754;
  $(_0x3fdfdb(0x202))[_0x3fdfdb(0x2aa)](_0x3fdfdb(0x2c7)),
    $(_0x3fdfdb(0x202))
      [_0x3fdfdb(0x22d)]()
      [_0x3fdfdb(0x1da)](_0x3fdfdb(0x225))
      [_0x3fdfdb(0x2ac)](),
    (x = 0x0),
    updateStep(),
    $("[data-form=\x22multistep\x22]")[_0x3fdfdb(0x257)](),
    $(_0x3fdfdb(0x1e4))[_0x3fdfdb(0x29a)](oldSubmitText),
    $("[data-form=\x22submit-btn\x22]")[_0x3fdfdb(0x2a0)](oldSubmitText),
    $(_0x3fdfdb(0x2cb))[_0x3fdfdb(0x29a)](0x1),
    $(_0x3fdfdb(0x202))
      [_0x3fdfdb(0x1da)](_0x3fdfdb(0x22c))
      ["siblings"](".w-checkbox-input")
      [_0x3fdfdb(0x2a1)](_0x3fdfdb(0x283));
}
$(document)["ajaxComplete"](function (_0x3d3d3b, _0x3bc8f9, _0x18c0d5) {
  const _0x309b1a = _0x4d5754;
  if (_0x18c0d5["url"]["includes"](_0x309b1a(0x237))) {
    const _0x42a71e = _0x3bc8f9[_0x309b1a(0x229)] === 0xc8,
      _0x538cc1 = _0x309b1a(0x270);
    redirectTo &&
      _0x42a71e &&
      (newTab
        ? window["open"](redirectTo, _0x309b1a(0x259))
        : setTimeout(() => {
            const _0x32bee2 = _0x309b1a;
            location[_0x32bee2(0x27b)] = redirectTo;
          }, redirectDelay)),
      _0x42a71e &&
        successCard !== "" &&
        $("[data-success-card=\x22" + successCard + "\x22]")[
          _0x309b1a(0x24d)
        ](),
      _0x42a71e &&
        formReset &&
        setTimeout(() => {
          resetFormly();
        }, resetDelay),
      !_0x42a71e &&
        ($(_0x309b1a(0x1e4))[_0x309b1a(0x2a0)](_0x309b1a(0x1c5)),
        $(_0x309b1a(0x1e4))[_0x309b1a(0x29a)](_0x309b1a(0x1c5)));
  }
}),
  $("[data-btn=\x22edit\x22]")["on"](_0x4d5754(0x2a4), function () {
    const _0x5da790 = _0x4d5754;
    var _0x5188e3 = $(this)
      [_0x5da790(0x1cd)]()
      ["find"](_0x5da790(0x1bf))
      [_0x5da790(0x1d6)]("input-field");
    setTimeout(function () {
      const _0x7d8821 = _0x5da790;
      $(_0x7d8821(0x205) + _0x5188e3 + "\x22]")[_0x7d8821(0x2b6)]();
    }, 0x64),
      (back = !![]),
      (x = $(this)[_0x5da790(0x1d6)](_0x5da790(0x23f)) - 0x1),
      updateStep(),
      countCard
        ? ((curStep = x + 0x1),
          $("[data-text=\x22total-steps\x22]")[_0x5da790(0x29a)](
            steps[_0x5da790(0x2b0)],
          ))
        : $(steps[x])["data"]("card")
        ? (curStep = x + 0x0)
        : (curStep = x + 0x1),
      $(_0x5da790(0x2cb))["text"](curStep),
      (back = ![]);
  }),
  $(_0x4d5754(0x2a9))["on"](_0x4d5754(0x2a4), function () {
    const _0x10c042 = _0x4d5754;
    $(_0x10c042(0x202))[_0x10c042(0x2aa)](_0x10c042(0x2c7));
    let _0x4ff805 = $(this);
    $(this)[_0x10c042(0x29a)](_0x10c042(0x1c5)),
      setTimeout(function () {
        const _0x55374b = _0x10c042;
        $(_0x4ff805)[_0x55374b(0x29a)](oldResetText),
          $(_0x4ff805)[_0x55374b(0x22d)](".w-form-done")[_0x55374b(0x2ac)](),
          (x = 0x0),
          updateStep(),
          $(_0x55374b(0x202))["show"](),
          $(_0x55374b(0x1e4))["text"](oldSubmitText),
          $(_0x55374b(0x1e4))["val"](oldSubmitText),
          $(_0x4ff805)[_0x55374b(0x2a0)](oldSubmitText),
          $("[data-text=\x22current-step\x22]")[_0x55374b(0x29a)](0x1),
          $(_0x55374b(0x202))
            [_0x55374b(0x1da)](_0x55374b(0x22c))
            [_0x55374b(0x2a7)](".w-checkbox-input")
            ["removeClass"](_0x55374b(0x283));
      }, resetDelay);
  }),
  $(_0x4d5754(0x299))["on"]("keypress", function (_0x100b2d) {
    const _0x4ee583 = _0x4d5754;
    _0x100b2d[_0x4ee583(0x244)] === 0xd &&
      fill &&
      ($(_0x4ee583(0x279))[_0x4ee583(0x1d6)]("enter")
        ? (totalSteps > curStep &&
            $("[data-form=\x22next-btn\x22]")[0x0][_0x4ee583(0x2a4)](),
          _0x100b2d[_0x4ee583(0x2af)](),
          _0x100b2d[_0x4ee583(0x2be)]())
        : (_0x100b2d[_0x4ee583(0x2af)](), _0x100b2d[_0x4ee583(0x2be)]()));
  }),
  $(_0x4d5754(0x299))[_0x4d5754(0x1cb)](function (_0x46bcb2) {
    const _0x438081 = _0x4d5754;
    (_0x46bcb2[_0x438081(0x22a)] || _0x46bcb2[_0x438081(0x1e7)]) &&
      _0x46bcb2[_0x438081(0x244)] == 0xd &&
      (x >= steps[_0x438081(0x2b0)] - 0x1 && fill
        ? $(steps[x])[_0x438081(0x1da)](_0x438081(0x22e))["click"]()
        : (event[_0x438081(0x2af)](), event[_0x438081(0x2be)]()));
  }),
  $("textarea")[_0x4d5754(0x1cc)](function (_0x4ac6ed) {
    const _0x39b28f = _0x4d5754;
    $(this)["focus"](),
      _0x4ac6ed["key"] == "Enter" &&
        (_0x4ac6ed[_0x39b28f(0x2af)](), _0x4ac6ed[_0x39b28f(0x2be)]()),
      _0x4ac6ed[_0x39b28f(0x24e)] &&
        _0x4ac6ed[_0x39b28f(0x235)] == "Enter" &&
        $(this)[_0x39b28f(0x2a0)]($(this)["val"]() + "\x0a");
  }),
  $(_0x4d5754(0x202))
    [_0x4d5754(0x1da)](_0x4d5754(0x1e8))
    ["on"](_0x4d5754(0x2b4), function () {
      const _0x3e89a7 = _0x4d5754;
      (all_data = all_data[_0x3e89a7(0x293)](
        (_0x19df8f) =>
          _0x19df8f[_0x3e89a7(0x277)] !==
          $(this)[_0x3e89a7(0x2c3)](_0x3e89a7(0x250)),
      )),
        $(this)[_0x3e89a7(0x2c3)]("type") === _0x3e89a7(0x22f)
          ? $(this)["is"](_0x3e89a7(0x218))
            ? all_data[_0x3e89a7(0x274)]({
                field: $(this)[_0x3e89a7(0x2c3)](_0x3e89a7(0x250)),
                value: $(this)
                  [_0x3e89a7(0x2a7)](_0x3e89a7(0x28b))
                  [_0x3e89a7(0x29a)](),
              })
            : $(_0x3e89a7(0x296) + $(this)[_0x3e89a7(0x2c3)]("name") + "\x22]")[
                "hide"
              ]()
          : (all_data[_0x3e89a7(0x274)]({
              field: $(this)[_0x3e89a7(0x2c3)](_0x3e89a7(0x250)),
              value: $(this)["val"](),
            }),
            $(this)[_0x3e89a7(0x2a0)]() !== "" &&
              resetInputErrorMessage($(this)["attr"](_0x3e89a7(0x250)))),
        all_data[_0x3e89a7(0x249)](function (_0x501951) {
          const _0x45c62f = _0x3e89a7;
          $(_0x45c62f(0x296) + _0x501951[_0x45c62f(0x277)] + "\x22]")[
            _0x45c62f(0x257)
          ](),
            $(_0x45c62f(0x296) + _0x501951[_0x45c62f(0x277)] + "\x22]")[
              _0x45c62f(0x29a)
            ](_0x501951[_0x45c62f(0x25f)]);
        });
    }),
  $(_0x4d5754(0x202))
    [_0x4d5754(0x1da)]("textarea")
    ["on"](_0x4d5754(0x2b4), function () {
      const _0x31d969 = _0x4d5754;
      $(this)[_0x31d969(0x2a0)]() !== "" &&
        resetInputErrorMessage($(this)[_0x31d969(0x2c3)](_0x31d969(0x250))),
        (all_data = all_data[_0x31d969(0x293)](
          (_0x53c600) =>
            _0x53c600[_0x31d969(0x277)] !==
            $(this)[_0x31d969(0x2c3)](_0x31d969(0x250)),
        )),
        all_data[_0x31d969(0x274)]({
          field: $(this)["attr"](_0x31d969(0x250)),
          value: $(this)[_0x31d969(0x2a0)](),
        }),
        all_data[_0x31d969(0x249)](function (_0x32707a) {
          const _0x2c7720 = _0x31d969;
          $("[data-input-field=\x22" + _0x32707a["field"] + "\x22]")["show"](),
            $(_0x2c7720(0x296) + _0x32707a[_0x2c7720(0x277)] + "\x22]")["text"](
              _0x32707a[_0x2c7720(0x25f)],
            );
        });
    }),
  $(_0x4d5754(0x202))
    [_0x4d5754(0x1da)](_0x4d5754(0x28e))
    ["on"]("change", function () {
      const _0x1b7839 = _0x4d5754;
      $(this)["val"]() !== "" &&
        resetInputErrorMessage($(this)[_0x1b7839(0x2c3)](_0x1b7839(0x250)));
      var _0x1e90df = $(this)[_0x1b7839(0x1d6)](_0x1b7839(0x238));
      (all_data = all_data[_0x1b7839(0x293)](
        (_0x40dac3) =>
          _0x40dac3[_0x1b7839(0x277)] !==
          $(this)[_0x1b7839(0x2c3)](_0x1b7839(0x250)),
      )),
        all_data[_0x1b7839(0x274)]({
          field: $(this)[_0x1b7839(0x2c3)](_0x1b7839(0x250)),
          value: _0x1e90df
            ? $(this)["find"](_0x1b7839(0x1bd))[_0x1b7839(0x29a)]()
            : $(this)[_0x1b7839(0x2a0)](),
        }),
        all_data[_0x1b7839(0x249)](function (_0x128dfd) {
          const _0x2d7066 = _0x1b7839;
          $(_0x2d7066(0x296) + _0x128dfd["field"] + "\x22]")[
            _0x2d7066(0x257)
          ](),
            $(_0x2d7066(0x296) + _0x128dfd[_0x2d7066(0x277)] + "\x22]")[
              _0x2d7066(0x29a)
            ](_0x128dfd[_0x2d7066(0x25f)]);
        });
    }),
  updateStep(),
  triggerInputAllData(),
  $(_0x4d5754(0x1df))[_0x4d5754(0x268)](function () {
    const _0x1563d8 = _0x4d5754,
      _0x16735e = $(this)[_0x1563d8(0x1da)]("[data-cms-select=text]"),
      _0x7eb2e7 = [];
    console["log"](_0x7eb2e7),
      _0x16735e[_0x1563d8(0x268)](function () {
        const _0x1dec87 = _0x1563d8;
        _0x7eb2e7["push"]($(this)["text"]()[_0x1dec87(0x231)]());
      });
    const _0x4a2bf7 = $(this)["siblings"]("[data-cms-select=input]");
    $["each"](_0x7eb2e7, function (_0x17e8cc, _0x20bc63) {
      const _0x17debf = _0x1563d8,
        _0x23d939 = $(_0x17debf(0x204))
          [_0x17debf(0x2a0)](_0x20bc63)
          [_0x17debf(0x29a)](_0x20bc63);
      _0x4a2bf7[_0x17debf(0x1fb)](_0x23d939);
    });
  });
function cloneRemove() {
  const _0x35573a = _0x4d5754;
  $(_0x35573a(0x245))[_0x35573a(0x268)](function () {
    const _0x25ac11 = _0x35573a;
    $(this)[_0x25ac11(0x1da)](_0x25ac11(0x253))[_0x25ac11(0x2b0)] < 0x2
      ? $(this)[_0x25ac11(0x1da)](_0x25ac11(0x28f))["hide"]()
      : $(this)["find"](_0x25ac11(0x28f))["show"]();
  });
}
function cloneRemoveInput() {
  const _0x5ca147 = _0x4d5754;
  $("[data-clone-input-wrapper]")[_0x5ca147(0x268)](function () {
    const _0x24932d = _0x5ca147;
    $(this)[_0x24932d(0x1da)]("[data-clone-input]")["length"] < 0x2
      ? $(this)["find"](_0x24932d(0x25d))[_0x24932d(0x2ac)]()
      : $(this)[_0x24932d(0x1da)](_0x24932d(0x25d))[_0x24932d(0x257)]();
  });
}
$(_0x4d5754(0x28f))["on"](_0x4d5754(0x2a4), function () {
  const _0x592b47 = _0x4d5754,
    _0x3dd0cc =
      $(this)["parents"](_0x592b47(0x253))[_0x592b47(0x2b0)] > 0x0
        ? $(this)["parents"](_0x592b47(0x253))[_0x592b47(0x20b)]()
        : $(this)[_0x592b47(0x22d)](_0x592b47(0x232))[_0x592b47(0x20b)](),
    _0x36a95b =
      $(this)[_0x592b47(0x22d)](_0x592b47(0x253))[_0x592b47(0x2b0)] > 0x0
        ? $(this)
            [_0x592b47(0x22d)](_0x592b47(0x253))
            [_0x592b47(0x1d6)](_0x592b47(0x288))
        : $(this)
            [_0x592b47(0x22d)](_0x592b47(0x232))
            [_0x592b47(0x1d6)]("display");
  $("[data-clone=\x22" + _0x36a95b + "\x22]")
    ["eq"](_0x3dd0cc)
    [_0x592b47(0x1ce)](),
    $(_0x592b47(0x20a) + _0x36a95b + "\x22]")
      ["eq"](_0x3dd0cc)
      [_0x592b47(0x1ce)](),
    cloneRemove(),
    validation();
}),
  $(_0x4d5754(0x25d))["on"]("click", function () {
    const _0x2257fb = _0x4d5754;
    let _0x449e49 = $(this)["siblings"]()[_0x2257fb(0x2c3)](_0x2257fb(0x250));
    $(this)["parent"](_0x2257fb(0x24c))[_0x2257fb(0x1ce)](),
      $(_0x2257fb(0x296) + _0x449e49 + "\x22]")
        ["parent"](_0x2257fb(0x1ee))
        [_0x2257fb(0x1ce)](),
      cloneRemove(),
      validation();
  }),
  $("[data-add-new]")["on"]("click", function () {
    const _0x2e02ec = _0x4d5754;
    let _0xa4c474 = $(this)[_0x2e02ec(0x1d6)](_0x2e02ec(0x210));
    var _0x4bb9f7 = $(_0x2e02ec(0x280) + _0xa4c474 + "\x22]")
        ["eq"](0x0)
        ["clone"](!![]),
      _0x28decf = $(_0x2e02ec(0x20a) + _0xa4c474 + "\x22]")
        ["eq"](0x0)
        [_0x2e02ec(0x288)](!![]);
    let _0x1a0846 = "";
    $(this)["find"](_0x2e02ec(0x28f))["show"](),
      cloneRemove(),
      _0x4bb9f7["find"]("[data-clone-input]")
        [_0x2e02ec(0x1da)]("input")
        [_0x2e02ec(0x2a0)](""),
      _0x4bb9f7[_0x2e02ec(0x1da)](_0x2e02ec(0x24c))
        [_0x2e02ec(0x2bb)](":first")
        ["remove"](),
      _0x28decf[_0x2e02ec(0x1da)](_0x2e02ec(0x1ee))
        [_0x2e02ec(0x2bb)](_0x2e02ec(0x254))
        [_0x2e02ec(0x1ce)](),
      _0x4bb9f7[_0x2e02ec(0x1da)](_0x2e02ec(0x223))[_0x2e02ec(0x268)](
        function () {
          const _0x254012 = _0x2e02ec;
          if (
            $(this)[_0x254012(0x23a)]("[data-clone-input]")[_0x254012(0x2b0)] >
            0x0
          ) {
            let _0x5a99fb = 0x0;
            const _0x51ff4f = $(this)
              [_0x254012(0x23a)](_0x254012(0x24c))
              [_0x254012(0x1d6)](_0x254012(0x294));
            console[_0x254012(0x21f)](
              $(this)
                [_0x254012(0x23a)]("[data-clone-input]")
                [_0x254012(0x1d6)]("clone-input"),
              this["name"],
            ),
              $(_0x254012(0x25e) + _0x51ff4f + _0x254012(0x264))[
                _0x254012(0x268)
              ](function () {
                const _0x407bf8 = _0x254012,
                  _0x859a6d = $(this)[_0x407bf8(0x2c3)](_0x407bf8(0x250));
                if (_0x859a6d && _0x859a6d["startsWith"](_0x407bf8(0x252))) {
                  const _0x510000 = parseInt(
                    _0x859a6d[_0x407bf8(0x1d0)]("-")[0x1],
                  );
                  !isNaN(_0x510000) &&
                    _0x510000 > _0x5a99fb &&
                    (_0x5a99fb = _0x510000);
                }
              }),
              _0x5a99fb++,
              (_0x1a0846 = this["name"] + "-" + _0x5a99fb),
              console["log"](_0x51ff4f, _0x1a0846);
          } else
            _0x1a0846 =
              this["name"] +
              "-" +
              (parseInt(
                $(_0x254012(0x280) + _0xa4c474 + "\x22]")
                  ["last"]()
                  [_0x254012(0x20b)](),
              ) +
                0x1);
          $(this)[_0x254012(0x2a0)](""),
            $(this)["attr"](_0x254012(0x250), _0x1a0846),
            $(this)[_0x254012(0x2c3)](_0x254012(0x20f), _0x1a0846);
        },
      ),
      _0x28decf[_0x2e02ec(0x1da)](_0x2e02ec(0x1bf))[_0x2e02ec(0x268)](
        function () {
          const _0x146284 = _0x2e02ec;
          if ($(this)[_0x146284(0x1d6)](_0x146284(0x1f3))) {
            let _0x59ce3f = 0x0;
            const _0x1c8644 = $(this)
              [_0x146284(0x1d6)](_0x146284(0x1f3))
              ["split"]("-")[0x0];
            $(
              _0x146284(0x20a) +
                _0xa4c474 +
                _0x146284(0x20d) +
                _0x1c8644 +
                "\x22]",
            )["each"](function () {
              const _0x22f9f7 = _0x146284,
                _0x22363a = $(this)[_0x22f9f7(0x2c3)](_0x22f9f7(0x292)),
                _0x186739 = parseInt(_0x22363a[_0x22f9f7(0x1d0)]("-")[0x1]);
              !isNaN(_0x186739) &&
                _0x186739 > _0x59ce3f &&
                (_0x59ce3f = _0x186739);
            }),
              _0x59ce3f++;
            const _0x1b558e = _0x1c8644 + "-" + _0x59ce3f;
            console[_0x146284(0x21f)](_0x1b558e),
              $(this)[_0x146284(0x2c3)](_0x146284(0x292), _0x1b558e);
          }
        },
      ),
      $(_0x2e02ec(0x2c1) + _0xa4c474 + "\x22]")[_0x2e02ec(0x1fb)](_0x4bb9f7),
      $(_0x2e02ec(0x1c4) + _0xa4c474 + "\x22]")[_0x2e02ec(0x1fb)](_0x28decf),
      $(_0x2e02ec(0x29e) + _0xa4c474 + "\x22]")[_0x2e02ec(0x268)](function () {
        const _0x5dda58 = _0x2e02ec;
        $(this)[_0x5dda58(0x29a)](
          $(this)
            [_0x5dda58(0x22d)]("[data-clone=\x22" + _0xa4c474 + "\x22]")
            [_0x5dda58(0x20b)]() + 0x1,
        );
      }),
      $("[data-display-index=\x22" + _0xa4c474 + "\x22]")[_0x2e02ec(0x268)](
        function () {
          const _0x4d10b8 = _0x2e02ec;
          $(this)[_0x4d10b8(0x29a)](
            $(this)
              [_0x4d10b8(0x22d)](_0x4d10b8(0x20a) + _0xa4c474 + "\x22]")
              ["index"]() + 0x1,
          );
        },
      ),
      validation();
  }),
  $(_0x4d5754(0x2c9))["on"](_0x4d5754(0x2a4), function () {
    const _0x415ac1 = _0x4d5754,
      _0xf1711c = $(this)[_0x415ac1(0x22d)](_0x415ac1(0x253))["index"]();
    let _0x3272ad = $(this)[_0x415ac1(0x1d6)]("add-new-input");
    var _0x3ac337 = $("[data-clone-input=\x22" + _0x3272ad + "\x22]")
        ["eq"](0x0)
        ["clone"](!![]),
      _0x1ab582 = $(_0x415ac1(0x213) + _0x3272ad + "\x22]")
        ["eq"](0x0)
        [_0x415ac1(0x288)](!![]);
    $(this)[_0x415ac1(0x1da)](_0x415ac1(0x25d))[_0x415ac1(0x257)](),
      cloneRemoveInput();
    let _0x96d7d9 = 0x0;
    $(_0x415ac1(0x25e) + _0x3272ad + "\x22]\x20input")[_0x415ac1(0x268)](
      function () {
        const _0x5b68bf = _0x415ac1,
          _0x3f3ec0 = $(this)[_0x5b68bf(0x2c3)](_0x5b68bf(0x250));
        if (_0x3f3ec0 && _0x3f3ec0[_0x5b68bf(0x246)](_0x5b68bf(0x252))) {
          const _0x914e50 = parseInt(_0x3f3ec0[_0x5b68bf(0x1d0)]("-")[0x1]);
          !isNaN(_0x914e50) && _0x914e50 > _0x96d7d9 && (_0x96d7d9 = _0x914e50);
        }
      },
    ),
      _0x96d7d9++,
      _0x3ac337[_0x415ac1(0x1da)](_0x415ac1(0x223))[_0x415ac1(0x268)](
        function () {
          const _0x5b17e3 = _0x415ac1;
          let _0x28d1cf = _0x5b17e3(0x252) + _0x96d7d9;
          $(this)[_0x5b17e3(0x2a0)](""),
            $(this)[_0x5b17e3(0x2c3)](_0x5b17e3(0x250), _0x28d1cf),
            $(this)[_0x5b17e3(0x2c3)](_0x5b17e3(0x20f), _0x28d1cf);
        },
      ),
      _0x1ab582["find"](_0x415ac1(0x1bf))["each"](function () {
        const _0x2b7cb1 = _0x415ac1;
        $(this)[_0x2b7cb1(0x2c3)](
          _0x2b7cb1(0x292),
          _0x2b7cb1(0x252) + _0x96d7d9,
        );
      }),
      $(this)
        [_0x415ac1(0x2a7)](
          "[data-clone-input-wrapper=\x22" + _0x3272ad + "\x22]",
        )
        ["append"](_0x3ac337),
      $(_0x415ac1(0x232))
        ["eq"](_0xf1711c)
        [_0x415ac1(0x1da)](
          "[data-display-input-wrapper=\x22" + _0x3272ad + "\x22]",
        )
        [_0x415ac1(0x1fb)](_0x1ab582),
      $("[data-input-index=\x22" + _0x3272ad + "\x22]")["each"](function () {
        const _0x37b531 = _0x415ac1;
        $(this)[_0x37b531(0x29a)](
          $(this)
            [_0x37b531(0x22d)](_0x37b531(0x25e) + _0x3272ad + "\x22]")
            ["index"]() + 0x1,
        );
      }),
      $("[data-display-input-index=\x22" + _0x3272ad + "\x22]")[
        _0x415ac1(0x268)
      ](function () {
        const _0x5caa4b = _0x415ac1;
        $(this)[_0x5caa4b(0x29a)](
          $(this)
            ["parents"](_0x5caa4b(0x213) + _0x3272ad + "\x22]")
            [_0x5caa4b(0x20b)]() + 0x1,
        );
      }),
      validation();
  }),
  $(_0x4d5754(0x1e5))["on"](_0x4d5754(0x2a4), function () {
    const _0x4e0c07 = _0x4d5754,
      _0x423e41 = $(this)["data"](_0x4e0c07(0x23e));
    $(_0x4e0c07(0x205) + _0x423e41 + "\x22]")[_0x4e0c07(0x2a0)](""),
      validation();
  });
function andLogic() {
  const _0x3bbbd6 = _0x4d5754;
  conditionalResult &&
    (steps["eq"](x)[_0x3bbbd6(0x1da)]("[data-show-if]")[_0x3bbbd6(0x2ac)](),
    console[_0x3bbbd6(0x21f)](_0x3bbbd6(0x1f9)),
    steps["eq"](x)
      [_0x3bbbd6(0x1da)](_0x3bbbd6(0x2ab))
      [_0x3bbbd6(0x268)](function () {
        const _0xff4181 = _0x3bbbd6;
        function _0x41d836(_0x1e1201) {
          const _0x36d566 = _0x215d,
            _0x550fc2 = _0x1e1201[_0x36d566(0x1d0)]("&"),
            _0x5e4126 = [];
          return (
            _0x550fc2["forEach"]((_0xc22cf4) => {
              const _0x500aa1 = _0x36d566,
                [_0x4df46d, _0x4e969c] = _0xc22cf4[_0x500aa1(0x1d0)]("=");
              _0x5e4126[_0x500aa1(0x274)]({
                field: _0x4df46d,
                value: _0x4e969c,
              });
            }),
            _0x5e4126
          );
        }
        const _0x1f1169 = $(this)[_0xff4181(0x2c3)](_0xff4181(0x2ca));
        console["log"](_0x1f1169);
        const _0x29ad23 = _0x41d836(_0x1f1169);
        function _0x45834a(_0x5d6243, _0x3321e1) {
          const _0x3e6cb8 = _0xff4181;
          return _0x3321e1[_0x3e6cb8(0x2c2)]((_0x9cbc5, _0x4bc792) => {
            const _0x45ec51 = _0x3e6cb8;
            if (
              _0x5d6243[0x0] &&
              _0x9cbc5[_0x45ec51(0x277)] === _0x5d6243[0x0]["field"]
            )
              return _0x5d6243["every"](
                (_0x2d1f6c, _0x56df46) =>
                  _0x3321e1[_0x4bc792 + _0x56df46] &&
                  _0x3321e1[_0x4bc792 + _0x56df46][_0x45ec51(0x277)] ===
                    _0x2d1f6c[_0x45ec51(0x277)] &&
                  _0x3321e1[_0x4bc792 + _0x56df46][_0x45ec51(0x25f)] ===
                    _0x2d1f6c["value"],
              );
            return ![];
          });
        }
        const _0x3bc238 = _0x45834a(_0x29ad23, all_data);
        _0x3bc238 ? $(this)[_0xff4181(0x257)]() : $(this)[_0xff4181(0x2ac)]();
      }));
}
scrollTop(), cloneRemove(), cloneRemoveInput();
