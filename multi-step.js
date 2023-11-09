//9th Nov 2023
//Bug fix:
//1. Custom error not working on last step

const _0x366dd2 = _0x5d01;
(function (_0xcacfec, _0x248704) {
  const _0x51015c = _0x5d01,
    _0x34ff8b = _0xcacfec();
  while (!![]) {
    try {
      const _0x3becf3 =
        (parseInt(_0x51015c(0x203)) / 0x1) *
          (parseInt(_0x51015c(0x1ab)) / 0x2) +
        (-parseInt(_0x51015c(0x1aa)) / 0x3) *
          (-parseInt(_0x51015c(0x21a)) / 0x4) +
        (parseInt(_0x51015c(0x25b)) / 0x5) *
          (parseInt(_0x51015c(0x1a3)) / 0x6) +
        (-parseInt(_0x51015c(0x1e0)) / 0x7) *
          (parseInt(_0x51015c(0x225)) / 0x8) +
        parseInt(_0x51015c(0x254)) / 0x9 +
        parseInt(_0x51015c(0x18a)) / 0xa +
        -parseInt(_0x51015c(0x283)) / 0xb;
      if (_0x3becf3 === _0x248704) break;
      else _0x34ff8b["push"](_0x34ff8b["shift"]());
    } catch (_0x840b92) {
      _0x34ff8b["push"](_0x34ff8b["shift"]());
    }
  }
})(_0x3b7a, 0xd2ab3);
let x = 0x0,
  curStep = 0x0,
  steps = $(_0x366dd2(0x1e8)),
  progressbarClone = $(_0x366dd2(0x219))[_0x366dd2(0x1f1)](),
  progressbar,
  countCard = !![],
  weightedSelection = $(_0x366dd2(0x19e))[_0x366dd2(0x1c3)](_0x366dd2(0x292)),
  weightedSelectionRange = $("[data-weighted-selection-range]")[
    _0x366dd2(0x1c3)
  ](_0x366dd2(0x197)),
  selectMultiple = $("[data-select-multiple]")[_0x366dd2(0x1c3)](
    "select-multiple",
  ),
  customError = $("[data-custom-error-message]")["data"](
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
  reinitIX = $(_0x366dd2(0x29b))[_0x366dd2(0x1c3)](_0x366dd2(0x20a)),
  textareaLength = 0x0,
  textInputLength = 0x0,
  emailInputLength = 0x0,
  selectInputLength = 0x0,
  checkboxInputLength = 0x0,
  filledInput = [],
  savedFilledInput = [],
  memory = $(_0x366dd2(0x295))[_0x366dd2(0x1c3)]("memory"),
  quiz = $(_0x366dd2(0x224))[_0x366dd2(0x1c3)]("quiz"),
  progress = 0x0;
const urlFormly = new URL(window[_0x366dd2(0x22d)][_0x366dd2(0x20d)]);
let _params = $(_0x366dd2(0x24d))[_0x366dd2(0x1c3)]("query-param"),
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
  logicExtra = $(_0x366dd2(0x18e))[_0x366dd2(0x1c3)]("logic-extra"),
  oldSubmitText = $(_0x366dd2(0x243))[_0x366dd2(0x275)](),
  oldResetText = $("[data-btn=\x22reset\x22]")[_0x366dd2(0x293)](),
  formReset = $(_0x366dd2(0x18e))["data"](_0x366dd2(0x1c1)),
  successCard = "",
  redirectTo = "",
  totalSteps = 0x0,
  checkCount = 0x0,
  resetDelay = $(_0x366dd2(0x1d9))[_0x366dd2(0x1c3)](_0x366dd2(0x186))
    ? $(_0x366dd2(0x1d9))["data"](_0x366dd2(0x186))
    : 0x7d0,
  redirectDelay = $(_0x366dd2(0x1ea))[_0x366dd2(0x1c3)](_0x366dd2(0x234))
    ? $(_0x366dd2(0x1ea))[_0x366dd2(0x1c3)](_0x366dd2(0x234))
    : 0x7d0,
  newTab = !![],
  unfilledArr = [],
  phoneFormat = $(_0x366dd2(0x18e))[_0x366dd2(0x1c3)](_0x366dd2(0x260)),
  scrollToTop = $("[data-form=\x22multistep\x22]")[_0x366dd2(0x1c3)](
    "scroll-top",
  ),
  conditionalResult =
    $("[data-conditional-result]")[_0x366dd2(0x1c3)](_0x366dd2(0x21d)) ===
    "AND",
  scrollTopOffset = parseInt($(_0x366dd2(0x18e))["data"](_0x366dd2(0x206))),
  notRobot = !![],
  all_data = [];
function _0x3b7a() {
  const _0x510f65 = [
    "slow",
    "Enter",
    "[data-input-index=\x22",
    "data-input-field",
    "[data-form=\x22submit\x22]:visible",
    "[data-clickable]",
    "display",
    "textarea[autofocus]",
    "offset",
    "append",
    "find",
    "add-new",
    "keydown",
    "6355426onpbUw",
    "[data-form=\x22step\x22][data-card]",
    ":input[type=\x22checkbox\x22]",
    "[data-display-input]",
    "[data-text=\x22current-step\x22]",
    "keyCode",
    "input[autofocus]",
    ":input[type=\x22checkbox\x22][required]:checked",
    "prop",
    "[data-clone-wrapper=\x22",
    "[data-display]",
    "[data-display-input-wrapper=\x22",
    ":input[type=\x22text\x22][required]",
    "setItem",
    "ms-field",
    "weighted-selection",
    "text",
    "select[required]:visible",
    "[data-memory]",
    "attr",
    "select[name=\x22",
    "radio-skip",
    "[data-selection-weight]",
    "textarea[required]:visible",
    "[data-reinit]",
    "stopPropagation",
    "parents",
    "wait",
    "required",
    "relationship-",
    "reset-delay",
    "[data-display=\x22",
    "block-domain",
    "[data-clone=\x22",
    "1704150HtJCQk",
    "name",
    "redirect",
    "phone-autoformat",
    "[data-form=\x22multistep\x22]",
    "[data-form=\x22next-btn\x22][type=\x22submit\x22]",
    "novalidate",
    "input[type=\x22radio\x22]:checked",
    "[data-display-input-index=\x22",
    "click",
    "[data-add-new]",
    "data-radio-skip",
    "[data-clone-input-wrapper=\x22",
    "weighted-selection-range",
    "none",
    "button",
    "test",
    "[data-radio-delay]",
    "[data-form=\x22remove-input-clone\x22]",
    "[data-clone-input=\x22",
    "[data-weighted-selection]",
    "[data-input-field=\x22",
    "push",
    "select[required]",
    ":input[required]",
    "6ABnona",
    "addClass",
    "remove",
    "metaKey",
    "require",
    "slice",
    "option[value=\x22",
    "1483530ZZhanY",
    "7672tmMhaB",
    "searchParams",
    "clickable-all",
    "[data-selection]",
    "length",
    "[type=\x22radio\x22]",
    "selected",
    "log",
    "[data-answer]",
    "children",
    "match",
    "filter",
    "backTo",
    "option[value=\x22$(this).val()\x22]",
    "textarea[name=\x22",
    "[data-success-card]",
    "siblings",
    ":input[type=\x22date\x22][required]",
    "input:checkbox",
    "key",
    "getItem",
    "some",
    "reset",
    "span",
    "data",
    "[data-skip-to]",
    "data-show-if",
    "debug-mode",
    "input[type=\x22email\x22]:visible",
    "[data-add-new-input]",
    ".w-checkbox-input",
    "select",
    "getResponse",
    "disabled",
    "findIndex",
    "auto",
    "trigger",
    "0.4",
    "</div>",
    "step",
    "[data-range]:contains(",
    "replace",
    ":input[type=\x22date\x22]",
    "fadeIn",
    "[data-display-wrapper=\x22",
    "radio-delay",
    "[data-reset-delay]",
    "[data-answer][data-radio-skip]:visible",
    "last",
    "value",
    ".w-form-formradioinput",
    "<br>Data\x20Answer\x20=\x20",
    "input-field",
    "721gpJWbm",
    ":input[type=\x22email\x22]",
    "parent",
    "ctrlKey",
    "ix2",
    "card",
    "shiftKey",
    "go-to",
    "[data-form=\x22step\x22]",
    "[data-form-ms=\x22submit-btn\x22]",
    "[data-redirect-delay]",
    "[data-form=\x22remove-clone\x22]",
    "removeItem",
    "input:radio[name=\x22",
    "show",
    "\x22]:checked",
    "[data-answer]:visible",
    "clone",
    "clicked",
    "focus",
    "hide",
    "[data-go-to]",
    "not",
    "[data-text=\x22total-steps\x22]",
    "\x22]\x20input",
    ":input[type=\x22url\x22][required]",
    "forEach",
    "[data-form=\x22back-btn\x22]",
    "[data-form=\x22step\x22]:not([data-card=\x22true\x22])",
    ":input[type=\x22checkbox\x22]:checked",
    "add-new-input",
    ":input[type=\x22tel\x22]",
    "css",
    "checkbox",
    "[data-btn=\x22check\x22]",
    "5kqkkRx",
    ":input[type=\x22radio\x22]",
    "redirect-form-hehexd",
    "scroll-top-offset",
    "skipTo",
    "data-skip-to",
    "preventDefault",
    "reinit",
    "[data-form=\x22next-btn\x22][data-submit-show]",
    "filledInput",
    "href",
    "<div\x20data-range=\x22selection\x22\x20style=\x22display:none\x20!important\x22>",
    ":input[type=\x22tel\x22][required]",
    ":input[type=\x22password\x22][required]",
    "each",
    ":input[type=\x22email\x22][required]",
    "[data-clone]",
    "input[type=\x22submit\x22]",
    "field",
    "answer",
    "skip-to",
    "data-radio-delay",
    "[data-form=\x22progress-indicator\x22]",
    "4eURTok",
    "new-tab",
    "[data-display-input=\x22",
    "conditional-result",
    "init",
    "body",
    "Please\x20wait...",
    "every",
    "running",
    ":input[type=\x22number\x22]",
    "[data-quiz]",
    "71632cTSyPy",
    ":input[type=\x22file\x22][required]",
    "remove-upload",
    "index",
    "textarea",
    ":input[type=\x22text\x22]",
    "min-character",
    "input[type=\x22checkbox\x22]:visible",
    "location",
    "type",
    "split",
    "removeClass",
    "[data-selection=\x22other\x22]",
    "ajaxComplete",
    "_blank",
    "redirect-delay",
    "edit-step",
    "[data-input-field]",
    "checked",
    "[data-form=\x22custom-progress-indicator\x22]",
    "[data-display-index=\x22",
    "Webflow",
    "[data-clone-input-wrapper]",
    "div.g-recaptcha",
    "[data-text=\x22total-weight\x22]",
    "includes",
    "destroy",
    "[data-radio-skip]",
    "input[type=\x22radio\x22]",
    "closest",
    "[data-form=\x22submit-btn\x22]",
    ".w-radio-input",
    "[data-text=\x22error-message\x22]",
    "data-name",
    "radio",
    "[data-form=\x22submit-btn\x22]:visible",
    "\x22]\x20[data-input-field^=\x22",
    "status",
    "[data-answer=\x22",
    "[type=\x22submit\x22]",
    "[data-query-param]",
    "input[type=\x22text\x22][required]:visible",
    "[data-radio-skip]:visible",
    "[data-form=\x22progress\x22]",
    "trim",
    "[type=\x22checkbox\x22]",
    "[data-enter]",
    "14910561rnxUKQ",
    "[data-count-card]",
    "current",
    ":checked",
    ":input[type=\x22checkbox\x22][required]",
    "submit",
    "[data-clickable-all]",
    "110465lUCfhG",
    "file",
    ":input[type=\x22url\x22]",
    "[data-success-card=\x22",
    "[data-form=\x22next-btn\x22]",
    "phone-validation",
    "data-go-to",
    "input:radio[required]",
    ".w-form-done",
    "enter",
    "w--redirected-checked",
    "change",
    ":input",
    "[data-cms-select=cms]",
    "success",
    ":input[type=\x22number\x22][required]",
    "[data-cms-select=input]",
    "startsWith",
    "animate",
    "input[name=\x22",
    "input",
    "[data-clone-input]",
    "\x22][value=\x22",
    "inputName",
    "parse",
    "[data-checkbox]",
    "val",
  ];
  _0x3b7a = function () {
    return _0x510f65;
  };
  return _0x3b7a();
}
const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
savedFilledInput = JSON[_0x366dd2(0x273)](
  localStorage[_0x366dd2(0x1bf)](_0x366dd2(0x20c)),
);
var ogCloneArr = [];
$("[data-clone]")[_0x366dd2(0x211)](function () {
  const _0x40d092 = _0x366dd2;
  ogCloneArr[_0x40d092(0x1a0)]({
    name: $(this)["data"](_0x40d092(0x1f1)),
    element: $(this)[_0x40d092(0x1f1)](!![]),
    display: $(
      _0x40d092(0x187) + $(this)[_0x40d092(0x1c3)](_0x40d092(0x1f1)) + "\x22]",
    )
      ["eq"](0x0)
      [_0x40d092(0x1f1)](!![]),
  });
});
$("div.g-recaptcha")[_0x366dd2(0x1af)] > 0x0 && (notRobot = ![]);
function recaptcha(_0x274691) {
  notRobot = !![];
}
$("[data-count-card]")[_0x366dd2(0x1af)] > 0x0 &&
  (countCard = $(_0x366dd2(0x255))[_0x366dd2(0x1c3)]("count-card"));
$(_0x366dd2(0x245))[_0x366dd2(0x1f4)](),
  $(progressbarClone)[_0x366dd2(0x230)](_0x366dd2(0x256)),
  $(_0x366dd2(0x250))["children"]()[_0x366dd2(0x1a5)](),
  $(_0x366dd2(0x243))["hide"](),
  $("[data-form-ms=\x22submit-btn\x22]")[_0x366dd2(0x1f4)](),
  steps[_0x366dd2(0x211)](function () {
    const _0x4fd639 = _0x366dd2;
    $(_0x4fd639(0x250))[_0x4fd639(0x27f)](
      progressbarClone[_0x4fd639(0x1f1)](!![], !![]),
    );
  }),
  $("[data-input-field]")[_0x366dd2(0x1f4)]();
countCard
  ? ((curStep = curStep + 0x1),
    (totalSteps = steps[_0x366dd2(0x1af)]),
    $(_0x366dd2(0x1f7))["text"](totalSteps))
  : ($(steps[x])[_0x366dd2(0x1c3)](_0x366dd2(0x1e5))
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    (totalSteps = $(_0x366dd2(0x1fc))[_0x366dd2(0x1af)]),
    $(_0x366dd2(0x1f7))["text"](totalSteps),
    $(_0x366dd2(0x284))["each"](function () {
      const _0x1ae433 = _0x366dd2;
      $($(_0x1ae433(0x219))[$(this)[_0x1ae433(0x228)]()])[_0x1ae433(0x1f4)]();
    }));
(progressbar = $(_0x366dd2(0x250))[_0x366dd2(0x1b4)]()),
  $(_0x366dd2(0x219))["on"](_0x366dd2(0x193), clickableIndicator),
  $(_0x366dd2(0x287))[_0x366dd2(0x293)](curStep),
  steps["hide"](),
  $(_0x366dd2(0x1ba))[_0x366dd2(0x1f4)](),
  $(_0x366dd2(0x18f))[_0x366dd2(0x211)](function () {
    const _0x5d9e0b = _0x366dd2;
    $(this)[_0x5d9e0b(0x296)]("type", _0x5d9e0b(0x199));
  });
function getParams() {
  const _0x479213 = _0x366dd2;
  urlFormly[_0x479213(0x1ac)][_0x479213(0x1fa)](
    function (_0x4f0f34, _0x513b92) {
      const _0x5bc571 = _0x479213;
      searchQ[_0x5bc571(0x1a0)]({ val: _0x4f0f34, key: _0x513b92 });
    },
  );
}
function getSafe(_0x2c9542, _0xe3d40d) {
  try {
    return _0x2c9542();
  } catch (_0x5ed6ef) {
    return _0xe3d40d;
  }
}
function phoneAutoFormat(_0x3546f7) {
  var _0x3ea8b3 = "";
  return function (_0x50d674) {
    const _0x448433 = _0x5d01;
    var _0xb20ec1 = "",
      _0x310c8d = _0x50d674[_0x448433(0x1d4)](/\D/g, ""),
      _0x3ae9cf = 0x0,
      _0x159390 = 0x0;
    while (
      _0x3ae9cf < _0x310c8d[_0x448433(0x1af)] &&
      _0x159390 < _0x3546f7[_0x448433(0x1af)]
    ) {
      _0x3546f7[_0x159390] === "x"
        ? ((_0xb20ec1 += _0x310c8d[_0x3ae9cf]), _0x3ae9cf++)
        : (_0xb20ec1 += _0x3546f7[_0x159390]),
        _0x159390++;
    }
    if (_0x50d674[_0x448433(0x1af)] < _0x3ea8b3["length"]) {
      var _0xec970a = _0x3546f7[_0x448433(0x1a8)](_0x159390);
      _0xb20ec1 += _0xec970a[_0x448433(0x1d4)](/x/g, "");
    }
    return (_0x3ea8b3 = _0xb20ec1), _0xb20ec1;
  };
}
function validateURL(_0x2e88de) {
  const _0x432930 = _0x366dd2;
  return urlPattern[_0x432930(0x19a)](_0x2e88de) ? !![] : ![];
}
quiz &&
  steps[_0x366dd2(0x211)](function () {
    const _0xd5c8ad = _0x366dd2;
    $(this)[_0xd5c8ad(0x1b4)]()[_0xd5c8ad(0x296)](_0xd5c8ad(0x195), !![]),
      $(this)["children"]()[_0xd5c8ad(0x296)](_0xd5c8ad(0x218), 0xfa);
  });
function disableBtn(_0x20e6ff) {
  const _0x120c9b = _0x366dd2;
  (fill = ![]),
    !customError &&
      ($(_0x120c9b(0x25f))["css"]({
        opacity: _0x120c9b(0x1d0),
        "pointer-events": _0x120c9b(0x198),
      }),
      $(_0x120c9b(0x25f))[_0x120c9b(0x1a4)](_0x120c9b(0x1cc)),
      $(_0x120c9b(0x243))[_0x120c9b(0x200)]({
        opacity: _0x120c9b(0x1d0),
        "pointer-events": _0x120c9b(0x198),
      }),
      $("[data-form=\x22submit-btn\x22]")[_0x120c9b(0x1a4)]("disabled"),
      $("[data-form-ms=\x22submit-btn\x22]")[_0x120c9b(0x200)]({
        opacity: _0x120c9b(0x1d0),
        "pointer-events": _0x120c9b(0x198),
      }),
      $(_0x120c9b(0x1e9))["addClass"](_0x120c9b(0x1cc)));
}
function enableBtn() {
  const _0x21bb8a = _0x366dd2;
  (fill = !![]),
    $(_0x21bb8a(0x25f))["css"]({
      "pointer-events": _0x21bb8a(0x1ce),
      opacity: "1",
    }),
    $(_0x21bb8a(0x25f))[_0x21bb8a(0x230)]("disabled"),
    $(_0x21bb8a(0x243))[_0x21bb8a(0x200)]({
      "pointer-events": _0x21bb8a(0x1ce),
      opacity: "1",
    }),
    $("[data-form=\x22submit-btn\x22]")[_0x21bb8a(0x230)]("disabled"),
    $(_0x21bb8a(0x1e9))["css"]({
      "pointer-events": _0x21bb8a(0x1ce),
      opacity: "1",
    }),
    $(_0x21bb8a(0x1e9))[_0x21bb8a(0x230)]("disabled");
}
function saveFilledInput() {
  const _0x6f251b = _0x366dd2;
  $("form[data-form=\x22multistep\x22]\x20:input")
    [_0x6f251b(0x1f6)](_0x6f251b(0x24c))
    [_0x6f251b(0x211)](function () {
      const _0x44c04d = _0x6f251b;
      $(this)[_0x44c04d(0x296)](_0x44c04d(0x22e)) === _0x44c04d(0x201) ||
      $(this)[_0x44c04d(0x296)](_0x44c04d(0x22e)) === _0x44c04d(0x247)
        ? $(this)[_0x44c04d(0x28b)](_0x44c04d(0x237)) &&
          (filledInput[_0x44c04d(0x1c0)](
            (_0x10dcb6) =>
              _0x10dcb6["inputName"] ===
              $(this)[_0x44c04d(0x296)](_0x44c04d(0x18b)),
          )
            ? ((filledInput = filledInput[_0x44c04d(0x1b6)](
                (_0x5058e0) =>
                  _0x5058e0[_0x44c04d(0x272)] !==
                  $(this)["attr"](_0x44c04d(0x18b)),
              )),
              $(this)[_0x44c04d(0x275)]() !== "" &&
                filledInput[_0x44c04d(0x1a0)]({
                  inputName: $(this)[_0x44c04d(0x296)]("name"),
                  value: $(this)[_0x44c04d(0x275)](),
                }))
            : $(this)[_0x44c04d(0x275)]() !== "" &&
              filledInput[_0x44c04d(0x1a0)]({
                inputName: $(this)[_0x44c04d(0x296)]("name"),
                value: $(this)[_0x44c04d(0x275)](),
              }))
        : filledInput[_0x44c04d(0x1c0)](
            (_0x32a971) =>
              _0x32a971[_0x44c04d(0x272)] ===
              $(this)[_0x44c04d(0x296)](_0x44c04d(0x18b)),
          )
        ? ((filledInput = filledInput[_0x44c04d(0x1b6)](
            (_0x3c3649) =>
              _0x3c3649[_0x44c04d(0x272)] !==
              $(this)[_0x44c04d(0x296)](_0x44c04d(0x18b)),
          )),
          $(this)["val"]() !== "" &&
            filledInput[_0x44c04d(0x1a0)]({
              inputName: $(this)["attr"](_0x44c04d(0x18b)),
              value: $(this)[_0x44c04d(0x275)](),
            }))
        : $(this)["val"]() !== "" &&
          filledInput["push"]({
            inputName: $(this)[_0x44c04d(0x296)](_0x44c04d(0x18b)),
            value: $(this)["val"](),
          });
    }),
    localStorage[_0x6f251b(0x1ec)]("filledInput"),
    localStorage[_0x6f251b(0x290)](
      _0x6f251b(0x20c),
      JSON["stringify"](filledInput),
    );
}
function scrollTop() {
  const _0xe0ca14 = _0x366dd2;
  scrollToTop &&
    $("html,\x20body")[_0xe0ca14(0x26d)](
      {
        scrollTop:
          $(_0xe0ca14(0x18e))[_0xe0ca14(0x27e)]()["top"] - scrollTopOffset,
      },
      0x3e8,
    );
}
function updateStep() {
  const _0x5c576f = _0x366dd2;
  scrollTop(),
    (skip = ![]),
    $(_0x5c576f(0x238))[_0x5c576f(0x230)](_0x5c576f(0x1cc));
  $(_0x5c576f(0x27b))["data"]("clickable") &&
    (steps["find"](_0x5c576f(0x1a2))[_0x5c576f(0x211)](function () {
      const _0x5e1360 = _0x5c576f;
      $(
        $(_0x5e1360(0x238))[
          $(this)["parents"]("[data-form=\x22step\x22]")[_0x5e1360(0x228)]()
        ],
      ),
        $(this)["val"]() === "" && emptyInput++;
    }),
    emptyInput > 0x0
      ? $(_0x5c576f(0x214))[_0x5c576f(0x1a4)](_0x5c576f(0x1cc))
      : $("input[type=\x22submit\x22]")["removeClass"](_0x5c576f(0x1cc)));
  $(_0x5c576f(0x238))[_0x5c576f(0x230)](_0x5c576f(0x256)),
    $("[data-form=\x22custom-progress-indicator\x22]")[_0x5c576f(0x1a4)](
      "disabled",
    ),
    $($(_0x5c576f(0x238))[x])[_0x5c576f(0x1a4)](_0x5c576f(0x256)),
    (selection = selections[_0x5c576f(0x1b6)](
      (_0x235c8e) => _0x235c8e[_0x5c576f(0x1d2)] === x - 0x1,
    ));
  next &&
    (x = getSafe(() => selection[0x0][_0x5c576f(0x207)])
      ? parseInt(getSafe(() => selection[0x0]["skipTo"]))
      : x);
  $(_0x5c576f(0x1b3))["hide"](), steps[_0x5c576f(0x1f4)]();
  reinitIX === !![] && window[_0x5c576f(0x23a)][_0x5c576f(0x23f)]();
  $(progressbar)[_0x5c576f(0x230)](_0x5c576f(0x256));
  for (i = 0x0; i <= x; i++) {
    countCard
      ? $(progressbar[i])[_0x5c576f(0x1a4)](_0x5c576f(0x256))
      : !$(steps[i])["data"](_0x5c576f(0x1e5)) &&
        $(progressbar[i])["addClass"](_0x5c576f(0x256));
  }
  reinitIX === !![]
    ? (window[_0x5c576f(0x23a)] &&
        window[_0x5c576f(0x23a)]
          [_0x5c576f(0x1a7)](_0x5c576f(0x1e4))
          [_0x5c576f(0x21e)](),
      document["dispatchEvent"](new Event("readystatechange")),
      $(steps[x])[_0x5c576f(0x1ee)]())
    : $(steps[x])[_0x5c576f(0x1d6)](_0x5c576f(0x276));
  x === 0x0 &&
    !$(steps[x])["data"](_0x5c576f(0x1e5)) &&
    $(steps[x])["find"]("[data-answer]")[_0x5c576f(0x1ee)]();
  selection[_0x5c576f(0x1af)] > 0x0
    ? $(steps[x])
        [_0x5c576f(0x280)](
          "[data-answer=\x22" + selection[0x0]["selected"] + "\x22]",
        )
        ["show"]()
    : $(steps[x])
        ["find"](_0x5c576f(0x24b) + answer + "\x22]")
        ["show"]();
  if (x === 0x0)
    $(_0x5c576f(0x1fb))[_0x5c576f(0x1f4)](),
      $("[data-form=\x22next-btn\x22]")[_0x5c576f(0x1ee)](),
      $(_0x5c576f(0x243))[_0x5c576f(0x1f4)]();
  else {
    if (
      x === steps[_0x5c576f(0x1af)] - 0x1 ||
      $(steps[x])["find"](_0x5c576f(0x27a))[_0x5c576f(0x1af)] > 0x0
    ) {
      $(_0x5c576f(0x25f))[_0x5c576f(0x1f4)]();
      if (
        $(steps[x])["find"](_0x5c576f(0x20b))[_0x5c576f(0x1c3)]("submit-show")
      )
        $(steps[x])[_0x5c576f(0x280)](_0x5c576f(0x20b))[_0x5c576f(0x1ee)]();
      else
        $(_0x5c576f(0x25f))["data"]("submit-show") &&
          $(_0x5c576f(0x25f))[_0x5c576f(0x1ee)]();
      $("[data-form=\x22submit-btn\x22]")["show"](),
        $("[data-form-ms=\x22submit-btn\x22]")[_0x5c576f(0x1ee)](),
        $(_0x5c576f(0x1fb))[_0x5c576f(0x1ee)]();
    } else
      $(_0x5c576f(0x25f))[_0x5c576f(0x1ee)](),
        $("[data-form=\x22back-btn\x22]")[_0x5c576f(0x1ee)](),
        $(_0x5c576f(0x243))[_0x5c576f(0x1f4)](),
        $(_0x5c576f(0x1e9))[_0x5c576f(0x1f4)]();
  }
  $($(steps[x])["find"](_0x5c576f(0x289))[0x0])[_0x5c576f(0x1f3)](),
    $($(steps[x])["find"](_0x5c576f(0x27d))[0x0])["focus"](),
    validation();
  for (idx = 0x0; idx <= x; idx++) {
    $($("[data-form=\x22custom-progress-indicator\x22]")[idx])[
      _0x5c576f(0x230)
    ](_0x5c576f(0x1cc));
  }
}
function validateEmail(_0x1e505e, _0x298224, _0x47a0a9) {
  const _0x51b487 = _0x366dd2;
  let _0x4a7c85 = _0x1e505e["includes"]("@")
    ? _0x1e505e[_0x51b487(0x22f)]("@")[0x1][_0x51b487(0x22f)](".")[0x0]
    : [];
  dom = [];
  _0x298224 !== undefined &&
    _0x298224[_0x51b487(0x22f)](",")[_0x51b487(0x1fa)](function (_0x1ce8da) {
      const _0x5e690f = _0x51b487;
      _0x1ce8da["includes"](_0x4a7c85) && dom[_0x5e690f(0x1a0)](_0x4a7c85);
    });
  dom["length"] > 0x0 ? (domainAllowed = ![]) : (domainAllowed = !![]);
  var _0x45346d = /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,20})?$/;
  console[_0x51b487(0x1b2)](_0x45346d[_0x51b487(0x19a)](_0x1e505e)),
    !_0x45346d[_0x51b487(0x19a)](_0x1e505e) || !domainAllowed
      ? ((emailFilled = ![]), unfilledArr["push"]({ input: _0x47a0a9 }))
      : (emailFilled = !![]);
}
function phoneValidation(_0x1ee67e, _0x32e3ba, _0x2dc85e) {
  const _0x89959c = _0x366dd2;
  if (phoneFormat)
    return _0x1ee67e[_0x89959c(0x1b5)](
      new RegExp(phoneFormat[_0x89959c(0x1a8)](0x1, -0x1)),
    ) && _0x32e3ba >= _0x2dc85e
      ? !![]
      : ![];
  else {
    if (_0x32e3ba >= _0x2dc85e) return !![];
  }
}
function validation() {
  const _0x196fab = _0x366dd2;
  $(steps[x])["data"](_0x196fab(0x1e5)) && enableBtn();
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
    (textareaLength = $(steps[x])[_0x196fab(0x280)](_0x196fab(0x29a))[
      _0x196fab(0x1af)
    ]),
    (textInputLength = $(steps[x])[_0x196fab(0x280)](_0x196fab(0x24e))[
      _0x196fab(0x1af)
    ]),
    (selectInputLength = $(steps[x])[_0x196fab(0x280)](_0x196fab(0x294))[
      _0x196fab(0x1af)
    ]),
    (emailInputLength = $(steps[x])[_0x196fab(0x280)](_0x196fab(0x1c7))[
      _0x196fab(0x1af)
    ]),
    (checkboxInputLength = $(steps[x])[_0x196fab(0x280)](_0x196fab(0x22c))[
      _0x196fab(0x1af)
    ]);
  textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0
    ? disableBtn()
    : enableBtn();
  checkCount = $(steps[x])[_0x196fab(0x1c3)]("checkbox")
    ? $(steps[x])[_0x196fab(0x1c3)](_0x196fab(0x201))
    : $(steps[x])[_0x196fab(0x280)](_0x196fab(0x274))[_0x196fab(0x1af)] > 0x0
    ? $(steps[x])["find"](_0x196fab(0x274))["data"](_0x196fab(0x201))
    : 0x0;
  if (!logicExtra)
    $(steps[x])[_0x196fab(0x280)](_0x196fab(0x267))["is"](_0x196fab(0x252)) &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])[_0x196fab(0x280)](_0x196fab(0x285))[_0x196fab(0x1af)]
        ? $(steps[x])
            [_0x196fab(0x280)](_0x196fab(0x285))
            [_0x196fab(0x211)](function () {
              const _0x3ce578 = _0x196fab;
              $(this)["is"](_0x3ce578(0x257))
                ? $(steps[x])[_0x3ce578(0x280)](_0x3ce578(0x258))[
                    _0x3ce578(0x1af)
                  ] < 0x1 &&
                  ((checkboxFilled = !![]),
                  resetInputErrorMessage($(this)["attr"]("name")))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0x3ce578(0x1a0)]({
                    input: $(this)[_0x3ce578(0x296)](_0x3ce578(0x18b)),
                  }));
            })
        : $(steps[x])[_0x196fab(0x280)](_0x196fab(0x1fd))[_0x196fab(0x1af)] >=
          checkCount
        ? $(steps[x])[_0x196fab(0x280)](_0x196fab(0x258))[_0x196fab(0x1af)] >
          0x0
          ? $(steps[x])
              [_0x196fab(0x280)](_0x196fab(0x258))
              ["each"](function () {
                const _0x28aa6a = _0x196fab;
                !$(this)["is"](_0x28aa6a(0x257))
                  ? ((checkboxFilled = ![]),
                    unfilledArr[_0x28aa6a(0x1a0)]({
                      input: $(this)[_0x28aa6a(0x296)](_0x28aa6a(0x18b)),
                    }))
                  : ((checkboxFilled = !![]),
                    $(steps[x])["find"](_0x28aa6a(0x28a))["length"] >=
                      $(steps[x])["find"](_0x28aa6a(0x258))[_0x28aa6a(0x1af)] &&
                      resetInputErrorMessage(
                        $(steps[x])
                          ["find"](_0x28aa6a(0x285))
                          [_0x28aa6a(0x296)](_0x28aa6a(0x18b)),
                      ));
              })
          : ((checkboxFilled = !![]),
            resetInputErrorMessage(
              $(steps[x])
                [_0x196fab(0x280)](_0x196fab(0x285))
                [_0x196fab(0x296)]("name"),
            ))
        : ((checkboxFilled = ![]),
          $(steps[x])
            [_0x196fab(0x280)](_0x196fab(0x258))
            [_0x196fab(0x211)](function () {
              const _0x51a41c = _0x196fab;
              $(this)[_0x51a41c(0x1f6)](_0x51a41c(0x257)) &&
                unfilledArr[_0x51a41c(0x1a0)]({
                  input: $(this)[_0x51a41c(0x296)](_0x51a41c(0x18b)),
                });
            }),
          unfilledArr[_0x196fab(0x1a0)]({
            input: $(steps[x])
              ["find"](_0x196fab(0x285))
              ["attr"](_0x196fab(0x18b)),
          }))),
      $(steps[x])
        [_0x196fab(0x280)](_0x196fab(0x262))
        ["each"](function (_0x2e4696) {
          const _0x3e9ec3 = _0x196fab;
          var _0x3904f8 = $(this)["attr"](_0x3e9ec3(0x18b));
          $("input:radio[name=\x22" + _0x3904f8 + "\x22]:checked")[
            _0x3e9ec3(0x1af)
          ] == 0x0
            ? (!empReqRadio[_0x3e9ec3(0x280)](
                (_0x127b5d) => _0x127b5d[_0x3e9ec3(0x26f)] === _0x2e4696,
              ) && empReqRadio[_0x3e9ec3(0x1a0)]({ input: _0x2e4696 }),
              unfilledArr["push"]({
                input: $(this)[_0x3e9ec3(0x296)](_0x3e9ec3(0x18b)),
              }))
            : (empReqRadio = empReqRadio[_0x3e9ec3(0x1b6)](
                (_0x38d170) => _0x38d170["input"] !== _0x2e4696,
              )),
            empReqRadio[_0x3e9ec3(0x1af)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0x196fab(0x280)](_0x196fab(0x28f))
        [_0x196fab(0x211)](function (_0xe52b1c) {
          const _0x20d6f0 = _0x196fab;
          let _0x2fcc00 = $(this)[_0x20d6f0(0x275)]()["length"],
            _0x5bc4c0 = $(this)[_0x20d6f0(0x1c3)]("min-character")
              ? $(this)["data"](_0x20d6f0(0x22b))
              : 0x0;
          $(this)[_0x20d6f0(0x275)]() !== "" && _0x2fcc00 >= _0x5bc4c0
            ? (empReqInput = empReqInput[_0x20d6f0(0x1b6)](
                (_0x1824ad) => _0x1824ad[_0x20d6f0(0x26f)] !== _0xe52b1c,
              ))
            : (!empReqInput[_0x20d6f0(0x280)](
                (_0x39b966) => _0x39b966[_0x20d6f0(0x26f)] === _0xe52b1c,
              ) && empReqInput["push"]({ input: _0xe52b1c }),
              unfilledArr[_0x20d6f0(0x1a0)]({
                input: $(this)[_0x20d6f0(0x296)]("name"),
              })),
            empReqInput[_0x20d6f0(0x1af)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x196fab(0x280)](_0x196fab(0x210))
        ["each"](function (_0x47285b) {
          const _0x1b1c59 = _0x196fab;
          let _0x6c43af = $(this)[_0x1b1c59(0x275)]()["length"],
            _0x1281ff = $(this)[_0x1b1c59(0x1c3)](_0x1b1c59(0x22b))
              ? $(this)[_0x1b1c59(0x1c3)](_0x1b1c59(0x22b))
              : 0x0;
          $(this)[_0x1b1c59(0x275)]() !== "" && _0x6c43af >= _0x1281ff
            ? (empReqPassword = empReqPassword[_0x1b1c59(0x1b6)](
                (_0x37e7b5) => _0x37e7b5[_0x1b1c59(0x26f)] !== _0x47285b,
              ))
            : (!empReqPassword["find"](
                (_0x1d3565) => _0x1d3565[_0x1b1c59(0x26f)] === _0x47285b,
              ) && empReqPassword["push"]({ input: _0x47285b }),
              unfilledArr["push"]({ input: $(this)["attr"]("name") })),
            empReqPassword[_0x1b1c59(0x1af)] === 0x0
              ? (passwordFilled = !![])
              : (passwordFilled = ![]);
        }),
      $(steps[x])
        [_0x196fab(0x280)](_0x196fab(0x1f9))
        [_0x196fab(0x211)](function (_0x4b388a) {
          const _0x46d4a6 = _0x196fab;
          let _0x470546 = $(this)["val"]()["length"],
            _0x5a18ca = $(this)[_0x46d4a6(0x1c3)](_0x46d4a6(0x22b))
              ? $(this)[_0x46d4a6(0x1c3)](_0x46d4a6(0x22b))
              : 0x0;
          $(this)["val"]() !== "" && _0x470546 >= _0x5a18ca
            ? (empReqUrl = empReqUrl[_0x46d4a6(0x1b6)](
                (_0x2645ff) => _0x2645ff[_0x46d4a6(0x26f)] !== _0x4b388a,
              ))
            : (!empReqUrl[_0x46d4a6(0x280)](
                (_0xde6a9e) => _0xde6a9e[_0x46d4a6(0x26f)] === _0x4b388a,
              ) && empReqUrl[_0x46d4a6(0x1a0)]({ input: _0x4b388a }),
              unfilledArr[_0x46d4a6(0x1a0)]({
                input: $(this)[_0x46d4a6(0x296)](_0x46d4a6(0x18b)),
              })),
            empReqUrl[_0x46d4a6(0x1af)] === 0x0 &&
            validateURL($(this)[_0x46d4a6(0x275)]())
              ? ((urlFilled = !![]), console[_0x46d4a6(0x1b2)](urlFilled))
              : (urlFilled = ![]);
        }),
      $(steps[x])
        [_0x196fab(0x280)](_0x196fab(0x1bc))
        [_0x196fab(0x211)](function (_0x57b758) {
          const _0x314020 = _0x196fab;
          $(this)["val"]() !== ""
            ? (empReqDate = empReqDate[_0x314020(0x1b6)](
                (_0x20eb24) => _0x20eb24[_0x314020(0x26f)] !== _0x57b758,
              ))
            : (!empReqDate[_0x314020(0x280)](
                (_0x39a790) => _0x39a790[_0x314020(0x26f)] === _0x57b758,
              ) && empReqDate[_0x314020(0x1a0)]({ input: _0x57b758 }),
              unfilledArr[_0x314020(0x1a0)]({
                input: $(this)[_0x314020(0x296)](_0x314020(0x18b)),
              })),
            empReqDate[_0x314020(0x1af)] === 0x0
              ? (dateFilled = !![])
              : (dateFilled = ![]);
        }),
      $(steps[x])
        [_0x196fab(0x280)](_0x196fab(0x20f))
        [_0x196fab(0x211)](function (_0x3b4c5d) {
          const _0x490c26 = _0x196fab;
          if ($(this)[_0x490c26(0x275)]() !== "") {
            let _0x518ae8 = $(this)[_0x490c26(0x275)]()[_0x490c26(0x1af)],
              _0x500b25 = $(this)[_0x490c26(0x1c3)](_0x490c26(0x22b))
                ? $(this)[_0x490c26(0x1c3)](_0x490c26(0x22b))
                : 0x0;
            if ($(this)[_0x490c26(0x1c3)](_0x490c26(0x18d))) {
              var _0x2262fa = phoneAutoFormat(
                $(this)[_0x490c26(0x1c3)](_0x490c26(0x18d)),
              );
              $(this)["val"](_0x2262fa($(this)[_0x490c26(0x275)]()));
            }
            phoneValidation($(this)[_0x490c26(0x275)](), _0x518ae8, _0x500b25)
              ? (empReqTel = empReqTel[_0x490c26(0x1b6)](
                  (_0xbf2d8f) => _0xbf2d8f[_0x490c26(0x26f)] !== _0x3b4c5d,
                ))
              : empReqTel["push"]({ input: _0x3b4c5d });
          } else
            !empReqTel[_0x490c26(0x280)](
              (_0x5c8be9) => _0x5c8be9[_0x490c26(0x26f)] === _0x3b4c5d,
            ) && empReqTel[_0x490c26(0x1a0)]({ input: _0x3b4c5d }),
              unfilledArr[_0x490c26(0x1a0)]({
                input: $(this)[_0x490c26(0x296)]("name"),
              });
          empReqTel[_0x490c26(0x1af)] === 0x0
            ? (telFilled = !![])
            : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x196fab(0x280)](_0x196fab(0x226))
        [_0x196fab(0x211)](function (_0x315885) {
          const _0x9a4cc7 = _0x196fab;
          $(this)[_0x9a4cc7(0x275)]() !== ""
            ? (empReqFile = empReqFile[_0x9a4cc7(0x1b6)](
                (_0x4bb5b0) => _0x4bb5b0["input"] !== _0x315885,
              ))
            : (!empReqFile[_0x9a4cc7(0x280)](
                (_0x31ad5f) => _0x31ad5f[_0x9a4cc7(0x26f)] === _0x315885,
              ) && empReqFile["push"]({ input: _0x315885 }),
              unfilledArr[_0x9a4cc7(0x1a0)]({
                input: $(this)[_0x9a4cc7(0x296)](_0x9a4cc7(0x18b)),
              })),
            empReqFile[_0x9a4cc7(0x1af)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x196fab(0x26a))
        ["each"](function (_0x34a307) {
          const _0xef5e80 = _0x196fab;
          let _0x500872 = $(this)[_0xef5e80(0x275)]()[_0xef5e80(0x1af)],
            _0x44b295 = $(this)[_0xef5e80(0x1c3)](_0xef5e80(0x22b))
              ? $(this)[_0xef5e80(0x1c3)](_0xef5e80(0x22b))
              : 0x0;
          $(this)["val"]() !== "" && _0x500872 >= _0x44b295
            ? (empReqNum = empReqNum[_0xef5e80(0x1b6)](
                (_0x17f0c1) => _0x17f0c1["input"] !== _0x34a307,
              ))
            : (!empReqNum[_0xef5e80(0x280)](
                (_0x4a6a2e) => _0x4a6a2e["input"] === _0x34a307,
              ) && empReqNum["push"]({ input: _0x34a307 }),
              unfilledArr[_0xef5e80(0x1a0)]({
                input: $(this)[_0xef5e80(0x296)](_0xef5e80(0x18b)),
              })),
            empReqNum[_0xef5e80(0x1af)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x196fab(0x280)](_0x196fab(0x1a1))
        ["each"](function (_0xdc7e71) {
          const _0x6bc92a = _0x196fab;
          let _0x80ce04 = $(this)[_0x6bc92a(0x275)]();
          _0x80ce04 === "" && (_0x80ce04 = null),
            _0x80ce04 != null
              ? (empReqSelect = empReqSelect[_0x6bc92a(0x1b6)](
                  (_0x49c127) => _0x49c127["input"] !== _0xdc7e71,
                ))
              : (!empReqSelect[_0x6bc92a(0x280)](
                  (_0x2c6535) => _0x2c6535[_0x6bc92a(0x26f)] === _0xdc7e71,
                ) && empReqSelect[_0x6bc92a(0x1a0)]({ input: _0xdc7e71 }),
                unfilledArr["push"]({
                  input: $(this)["attr"](_0x6bc92a(0x18b)),
                })),
            empReqSelect[_0x6bc92a(0x1af)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        ["find"]("textarea[required]")
        [_0x196fab(0x211)](function (_0x46aa2b) {
          const _0x4a1b65 = _0x196fab;
          let _0x35af2d = $(this)[_0x4a1b65(0x275)]()[_0x4a1b65(0x1af)],
            _0x9dd4d4 = $(this)[_0x4a1b65(0x1c3)](_0x4a1b65(0x22b))
              ? $(this)["data"]("min-character")
              : 0x0;
          $(this)[_0x4a1b65(0x275)]() !== "" && _0x35af2d >= _0x9dd4d4
            ? (empReqTextarea = empReqTextarea[_0x4a1b65(0x1b6)](
                (_0x4048e9) => _0x4048e9[_0x4a1b65(0x26f)] !== _0x46aa2b,
              ))
            : (!empReqTextarea[_0x4a1b65(0x280)](
                (_0x577d8d) => _0x577d8d[_0x4a1b65(0x26f)] === _0x46aa2b,
              ) && empReqTextarea[_0x4a1b65(0x1a0)]({ input: _0x46aa2b }),
              unfilledArr[_0x4a1b65(0x1a0)]({
                input: $(this)[_0x4a1b65(0x296)](_0x4a1b65(0x18b)),
              })),
            empReqTextarea[_0x4a1b65(0x1af)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x196fab(0x280)](":input[type=\x22email\x22][required]")
        [_0x196fab(0x211)](function () {
          const _0x28cb5b = _0x196fab;
          $(this)[_0x28cb5b(0x275)]() !== ""
            ? validateEmail(
                $(this)["val"](),
                $(this)[_0x28cb5b(0x1c3)](_0x28cb5b(0x188)),
                $(this)[_0x28cb5b(0x296)](_0x28cb5b(0x18b)),
              )
            : ((emailFilled = ![]),
              unfilledArr[_0x28cb5b(0x1a0)]({
                input: $(this)[_0x28cb5b(0x296)](_0x28cb5b(0x18b)),
              }));
        });
  else {
    if ($(steps[x])[_0x196fab(0x1c3)](_0x196fab(0x1e5)))
      (answer = $(steps[x])
        [_0x196fab(0x280)](_0x196fab(0x1f5))
        [_0x196fab(0x1c3)](_0x196fab(0x1e7))),
        (selections = selections["filter"](
          (_0xa5ff96) => _0xa5ff96[_0x196fab(0x1d2)] !== x,
        )),
        selections[_0x196fab(0x1a0)]({ step: x, selected: answer });
    else
      $(steps[x])["find"](_0x196fab(0x1f0))["data"](_0x196fab(0x1e5)) &&
        ((answer = $(steps[x])
          [_0x196fab(0x280)](_0x196fab(0x1f0))
          ["data"](_0x196fab(0x1e7))),
        (selections = selections[_0x196fab(0x1b6)](
          (_0x425338) => _0x425338[_0x196fab(0x1d2)] !== x,
        )),
        selections[_0x196fab(0x1a0)]({ step: x, selected: answer }));
    $(steps[x])
      [_0x196fab(0x280)](_0x196fab(0x1f0))
      ["find"](_0x196fab(0x267))
      ["is"]("[type=\x22checkbox\x22]") &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])[_0x196fab(0x280)](_0x196fab(0x285))[_0x196fab(0x1af)]
        ? $(steps[x])
            [_0x196fab(0x280)](_0x196fab(0x285))
            [_0x196fab(0x211)](function () {
              const _0x5a24a2 = _0x196fab;
              $(this)["is"](_0x5a24a2(0x257))
                ? $(steps[x])["find"](_0x5a24a2(0x1a2))[_0x5a24a2(0x1af)] <
                    0x1 &&
                  ((skipTo = undefined),
                  $(this)
                    ["parents"]("[data-skip-to]")
                    ["data"](_0x5a24a2(0x217)) &&
                    (skipTo = $(this)
                      [_0x5a24a2(0x29d)](_0x5a24a2(0x1c4))
                      ["data"](_0x5a24a2(0x217))),
                  $(this)
                    [_0x5a24a2(0x29d)](_0x5a24a2(0x1f5))
                    [_0x5a24a2(0x296)](_0x5a24a2(0x261)) &&
                    ((answer = $(this)
                      [_0x5a24a2(0x29d)](_0x5a24a2(0x1f5))
                      [_0x5a24a2(0x296)]("data-go-to")),
                    (selections = selections[_0x5a24a2(0x1b6)](
                      (_0x1d9075) => _0x1d9075["step"] !== x,
                    )),
                    selections["push"]({ step: x, selected: answer }),
                    skipTo &&
                      (selections[_0x5a24a2(0x1a0)]({
                        step: skipTo - 0x2,
                        selected: answer,
                      }),
                      (objIndex = selections[_0x5a24a2(0x1cd)](
                        (_0x20dfe2) => _0x20dfe2[_0x5a24a2(0x1d2)] === x,
                      )),
                      (selections[objIndex][_0x5a24a2(0x207)] =
                        parseInt(skipTo) - 0x1),
                      (selections[objIndex][_0x5a24a2(0x1b7)] = x))),
                  (checkboxFilled = !![]),
                  $(steps[x])["find"](_0x5a24a2(0x28a))["length"] >=
                    $(steps[x])["find"](_0x5a24a2(0x258))[_0x5a24a2(0x1af)] &&
                    resetInputErrorMessage(
                      $(steps[x])
                        ["find"](_0x5a24a2(0x285))
                        [_0x5a24a2(0x296)]("name"),
                    ))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0x5a24a2(0x1a0)]({
                    input: $(this)[_0x5a24a2(0x296)](_0x5a24a2(0x18b)),
                  }));
            })
        : $(steps[x])
            ["find"](_0x196fab(0x1f0))
            [_0x196fab(0x280)](_0x196fab(0x1fd))[_0x196fab(0x1af)] >= checkCount
        ? ($(steps[x])
            ["find"]("[data-answer]:visible")
            [_0x196fab(0x280)](_0x196fab(0x285))
            ["parents"](_0x196fab(0x1f5))
            [_0x196fab(0x296)](_0x196fab(0x261)) &&
            ((skipTo = undefined),
            $(steps[x])
              ["find"]("[data-answer]:visible")
              [_0x196fab(0x280)](_0x196fab(0x285))
              [_0x196fab(0x29d)](_0x196fab(0x1c4))
              [_0x196fab(0x296)]("data-skip-to") &&
              (skipTo = $(steps[x])
                [_0x196fab(0x280)](_0x196fab(0x1f0))
                [_0x196fab(0x280)](":input[type=\x22checkbox\x22]:checked")
                [_0x196fab(0x29d)](_0x196fab(0x1c4))
                [_0x196fab(0x296)](_0x196fab(0x208))),
            (answer = $(steps[x])
              [_0x196fab(0x280)](_0x196fab(0x1f0))
              [_0x196fab(0x280)](_0x196fab(0x285))
              [_0x196fab(0x29d)](_0x196fab(0x1f5))
              [_0x196fab(0x296)]("data-go-to")),
            (selections = selections[_0x196fab(0x1b6)](
              (_0x5c9c70) => _0x5c9c70["step"] !== x,
            )),
            selections[_0x196fab(0x1a0)]({ step: x, selected: answer }),
            console[_0x196fab(0x1b2)]("selected", selections),
            skipTo &&
              ((selections = selections[_0x196fab(0x1b6)](
                (_0x1743a8) => _0x1743a8[_0x196fab(0x1d2)] !== skipTo - 0x2,
              )),
              selections[_0x196fab(0x1a0)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0x196fab(0x1cd)](
                (_0x3f5b31) => _0x3f5b31[_0x196fab(0x1d2)] === x,
              )),
              console[_0x196fab(0x1b2)](objIndex),
              (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
              (selections[objIndex]["backTo"] = x),
              console["log"](_0x196fab(0x222)))),
          (checkboxFilled = !![]),
          $(steps[x])[_0x196fab(0x280)](_0x196fab(0x28a))[_0x196fab(0x1af)] >=
            $(steps[x])[_0x196fab(0x280)](
              ":input[type=\x22checkbox\x22][required]",
            )[_0x196fab(0x1af)] &&
            resetInputErrorMessage(
              $(steps[x])
                [_0x196fab(0x280)](_0x196fab(0x285))
                ["attr"](_0x196fab(0x18b)),
            ))
        : ((checkboxFilled = ![]),
          $(steps[x])
            [_0x196fab(0x280)](":input[type=\x22checkbox\x22][required]")
            ["each"](function () {
              const _0x2fa05b = _0x196fab;
              $(this)["not"](":checked") &&
                unfilledArr[_0x2fa05b(0x1a0)]({
                  input: $(this)[_0x2fa05b(0x296)](_0x2fa05b(0x18b)),
                });
            }))),
      $(steps[x])
        [_0x196fab(0x280)](_0x196fab(0x1f0))
        ["find"](_0x196fab(0x262))
        [_0x196fab(0x211)](function (_0x3e31dc) {
          const _0x2cbffb = _0x196fab;
          var _0x42cda0 = $(this)[_0x2cbffb(0x296)]("name");
          $(_0x2cbffb(0x1ed) + _0x42cda0 + _0x2cbffb(0x1ef))[
            _0x2cbffb(0x1af)
          ] == 0x0
            ? (!empReqRadio[_0x2cbffb(0x280)](
                (_0x5270f5) => _0x5270f5[_0x2cbffb(0x26f)] === _0x3e31dc,
              ) && empReqRadio[_0x2cbffb(0x1a0)]({ input: _0x3e31dc }),
              unfilledArr[_0x2cbffb(0x1a0)]({
                input: $(this)[_0x2cbffb(0x296)](_0x2cbffb(0x18b)),
              }))
            : (empReqRadio = empReqRadio[_0x2cbffb(0x1b6)](
                (_0x1d2cb7) => _0x1d2cb7["input"] !== _0x3e31dc,
              )),
            empReqRadio[_0x2cbffb(0x1af)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0x196fab(0x280)](_0x196fab(0x1f0))
        [_0x196fab(0x280)](":input[type=\x22text\x22][required]")
        ["each"](function (_0xb72bae) {
          const _0x2ffdde = _0x196fab;
          let _0xe7e42c = $(this)[_0x2ffdde(0x275)]()[_0x2ffdde(0x1af)],
            _0x297773 = $(this)["data"]("min-character")
              ? $(this)["data"](_0x2ffdde(0x22b))
              : 0x0;
          $(this)[_0x2ffdde(0x275)]() !== "" && _0xe7e42c >= _0x297773
            ? (empReqInput = empReqInput[_0x2ffdde(0x1b6)](
                (_0x82a1ce) => _0x82a1ce[_0x2ffdde(0x26f)] !== _0xb72bae,
              ))
            : (!empReqInput[_0x2ffdde(0x280)](
                (_0x516030) => _0x516030[_0x2ffdde(0x26f)] === _0xb72bae,
              ) && empReqInput[_0x2ffdde(0x1a0)]({ input: _0xb72bae }),
              unfilledArr["push"]({
                input: $(this)[_0x2ffdde(0x296)]("name"),
              })),
            empReqInput["length"] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x196fab(0x280)](_0x196fab(0x1f0))
        [_0x196fab(0x280)](_0x196fab(0x22a))
        [_0x196fab(0x211)](function (_0x556350) {
          const _0xa6e776 = _0x196fab;
          (skipTo = undefined),
            $(this)
              ["parents"](_0xa6e776(0x1c4))
              [_0xa6e776(0x1c3)](_0xa6e776(0x217)) !== "" &&
              (skipTo = $(this)
                [_0xa6e776(0x29d)]("[data-skip-to]")
                ["data"]("skip-to")),
            $(this)
              [_0xa6e776(0x29d)](_0xa6e776(0x1f5))
              [_0xa6e776(0x296)]("data-go-to") &&
              ((answer = $(this)
                [_0xa6e776(0x29d)](_0xa6e776(0x1f5))
                [_0xa6e776(0x296)](_0xa6e776(0x261))),
              (selections = selections["filter"](
                (_0x160028) => _0x160028[_0xa6e776(0x1d2)] !== x,
              )),
              selections[_0xa6e776(0x1a0)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0xa6e776(0x1cd)](
                  (_0x325237) => _0x325237["step"] === x,
                )),
                (selections[objIndex][_0xa6e776(0x207)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0xa6e776(0x1b7)] = x)));
        }),
      $(steps[x])
        [_0x196fab(0x280)](_0x196fab(0x1f0))
        ["find"](_0x196fab(0x210))
        [_0x196fab(0x211)](function (_0x4b4030) {
          const _0xb94a3e = _0x196fab;
          let _0x93204c = $(this)[_0xb94a3e(0x275)]()[_0xb94a3e(0x1af)],
            _0x5c3bff = $(this)[_0xb94a3e(0x1c3)](_0xb94a3e(0x22b))
              ? $(this)[_0xb94a3e(0x1c3)](_0xb94a3e(0x22b))
              : 0x0;
          $(this)[_0xb94a3e(0x275)]() !== "" && _0x93204c >= _0x5c3bff
            ? (empReqPassword = empReqPassword[_0xb94a3e(0x1b6)](
                (_0x52d03b) => _0x52d03b[_0xb94a3e(0x26f)] !== _0x4b4030,
              ))
            : (!empReqPassword[_0xb94a3e(0x280)](
                (_0x229e50) => _0x229e50[_0xb94a3e(0x26f)] === _0x4b4030,
              ) && empReqPassword[_0xb94a3e(0x1a0)]({ input: _0x4b4030 }),
              unfilledArr["push"]({
                input: $(this)[_0xb94a3e(0x296)](_0xb94a3e(0x18b)),
              })),
            empReqPassword[_0xb94a3e(0x1af)] === 0x0
              ? (passwordFilled = !![])
              : (passwordFilled = ![]);
        }),
      $(steps[x])
        [_0x196fab(0x280)]("[data-answer]:visible")
        ["find"](":input[type=\x22password\x22]")
        [_0x196fab(0x211)](function (_0x331228) {
          const _0x2399b6 = _0x196fab;
          (skipTo = undefined),
            $(this)[_0x2399b6(0x29d)](_0x2399b6(0x1c4))["data"]("skip-to") !==
              "" &&
              (skipTo = $(this)
                ["parents"](_0x2399b6(0x1c4))
                [_0x2399b6(0x1c3)]("skip-to")),
            $(this)
              [_0x2399b6(0x29d)]("[data-go-to]")
              [_0x2399b6(0x296)](_0x2399b6(0x261)) &&
              ((answer = $(this)
                ["parents"](_0x2399b6(0x1f5))
                [_0x2399b6(0x296)](_0x2399b6(0x261))),
              (selections = selections[_0x2399b6(0x1b6)](
                (_0x4292b0) => _0x4292b0[_0x2399b6(0x1d2)] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x2399b6(0x1a0)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x2399b6(0x1cd)](
                  (_0x26b44a) => _0x26b44a[_0x2399b6(0x1d2)] === x,
                )),
                (selections[objIndex][_0x2399b6(0x207)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x2399b6(0x1b7)] = x)));
        }),
      $(steps[x])
        [_0x196fab(0x280)](_0x196fab(0x1f0))
        [_0x196fab(0x280)](_0x196fab(0x1f9))
        [_0x196fab(0x211)](function (_0x4153e9) {
          const _0x82b97f = _0x196fab;
          let _0x63ac4e = $(this)[_0x82b97f(0x275)]()[_0x82b97f(0x1af)],
            _0x2bd204 = $(this)["data"]("min-character")
              ? $(this)["data"](_0x82b97f(0x22b))
              : 0x0;
          $(this)[_0x82b97f(0x275)]() !== "" && _0x63ac4e >= _0x2bd204
            ? (empReqUrl = empReqUrl[_0x82b97f(0x1b6)](
                (_0x3922c0) => _0x3922c0[_0x82b97f(0x26f)] !== _0x4153e9,
              ))
            : (!empReqUrl[_0x82b97f(0x280)](
                (_0xa2c069) => _0xa2c069["input"] === _0x4153e9,
              ) && empReqUrl["push"]({ input: _0x4153e9 }),
              unfilledArr[_0x82b97f(0x1a0)]({
                input: $(this)[_0x82b97f(0x296)](_0x82b97f(0x18b)),
              })),
            empReqUrl[_0x82b97f(0x1af)] === 0x0 &&
            validateURL($(this)[_0x82b97f(0x275)]())
              ? (urlFilled = !![])
              : (urlFilled = ![]);
        }),
      $(steps[x])
        [_0x196fab(0x280)](_0x196fab(0x1f0))
        [_0x196fab(0x280)](_0x196fab(0x25d))
        [_0x196fab(0x211)](function (_0x30b623) {
          const _0x261779 = _0x196fab;
          (skipTo = undefined),
            $(this)
              [_0x261779(0x29d)]("[data-skip-to]")
              ["data"](_0x261779(0x217)) !== "" &&
              (skipTo = $(this)
                [_0x261779(0x29d)](_0x261779(0x1c4))
                ["data"](_0x261779(0x217))),
            $(this)["parents"]("[data-go-to]")["attr"]("data-go-to") &&
              ((answer = $(this)
                [_0x261779(0x29d)](_0x261779(0x1f5))
                [_0x261779(0x296)](_0x261779(0x261))),
              (selections = selections[_0x261779(0x1b6)](
                (_0x25540a) => _0x25540a["step"] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x261779(0x1a0)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x592345) => _0x592345[_0x261779(0x1d2)] === x,
                )),
                (selections[objIndex][_0x261779(0x207)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x261779(0x1b7)] = x)));
        }),
      $(steps[x])
        [_0x196fab(0x280)](_0x196fab(0x1f0))
        [_0x196fab(0x280)](_0x196fab(0x1bc))
        [_0x196fab(0x211)](function (_0x506066) {
          const _0x3fb6f4 = _0x196fab;
          $(this)[_0x3fb6f4(0x275)]() !== ""
            ? (empReqDate = empReqDate[_0x3fb6f4(0x1b6)](
                (_0x4c74f1) => _0x4c74f1[_0x3fb6f4(0x26f)] !== _0x506066,
              ))
            : (!empReqDate["find"](
                (_0x415e4d) => _0x415e4d[_0x3fb6f4(0x26f)] === _0x506066,
              ) && empReqDate["push"]({ input: _0x506066 }),
              unfilledArr[_0x3fb6f4(0x1a0)]({
                input: $(this)["attr"](_0x3fb6f4(0x18b)),
              })),
            empReqDate[_0x3fb6f4(0x1af)] === 0x0
              ? (dateFilled = !![])
              : (dateFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x196fab(0x1f0))
        [_0x196fab(0x280)](_0x196fab(0x1d5))
        [_0x196fab(0x211)](function (_0x2a27f5) {
          const _0x3d6d86 = _0x196fab;
          (skipTo = undefined),
            $(this)
              [_0x3d6d86(0x29d)](_0x3d6d86(0x1c4))
              ["data"](_0x3d6d86(0x217)) !== "" &&
              (skipTo = $(this)
                [_0x3d6d86(0x29d)](_0x3d6d86(0x1c4))
                [_0x3d6d86(0x1c3)](_0x3d6d86(0x217))),
            $(this)
              [_0x3d6d86(0x29d)](_0x3d6d86(0x1f5))
              [_0x3d6d86(0x296)]("data-go-to") &&
              ((answer = $(this)
                [_0x3d6d86(0x29d)]("[data-go-to]")
                [_0x3d6d86(0x296)](_0x3d6d86(0x261))),
              (selections = selections[_0x3d6d86(0x1b6)](
                (_0x4174ad) => _0x4174ad[_0x3d6d86(0x1d2)] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x3d6d86(0x1a0)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x3d6d86(0x1cd)](
                  (_0x316508) => _0x316508[_0x3d6d86(0x1d2)] === x,
                )),
                (selections[objIndex][_0x3d6d86(0x207)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x196fab(0x280)](_0x196fab(0x1f0))
        [_0x196fab(0x280)](_0x196fab(0x26a))
        [_0x196fab(0x211)](function (_0x3adaac) {
          const _0x521c63 = _0x196fab;
          let _0x383d51 = $(this)["val"]()[_0x521c63(0x1af)],
            _0x1208a4 = $(this)[_0x521c63(0x1c3)]("min-character")
              ? $(this)[_0x521c63(0x1c3)](_0x521c63(0x22b))
              : 0x0;
          $(this)[_0x521c63(0x275)]() !== "" && _0x383d51 >= _0x1208a4
            ? (empReqNum = empReqNum["filter"](
                (_0x2dbad5) => _0x2dbad5[_0x521c63(0x26f)] !== _0x3adaac,
              ))
            : (!empReqNum[_0x521c63(0x280)](
                (_0x190255) => _0x190255["input"] === _0x3adaac,
              ) && empReqNum[_0x521c63(0x1a0)]({ input: _0x3adaac }),
              unfilledArr[_0x521c63(0x1a0)]({
                input: $(this)[_0x521c63(0x296)](_0x521c63(0x18b)),
              })),
            empReqNum[_0x521c63(0x1af)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x196fab(0x280)](_0x196fab(0x1f0))
        [_0x196fab(0x280)](_0x196fab(0x223))
        [_0x196fab(0x211)](function (_0x5b1f75) {
          const _0x12afeb = _0x196fab;
          (skipTo = undefined),
            $(this)
              [_0x12afeb(0x29d)]("[data-skip-to]")
              [_0x12afeb(0x1c3)](_0x12afeb(0x217)) !== "" &&
              (skipTo = $(this)
                [_0x12afeb(0x29d)](_0x12afeb(0x1c4))
                [_0x12afeb(0x1c3)](_0x12afeb(0x217))),
            $(this)
              ["parents"](_0x12afeb(0x1f5))
              [_0x12afeb(0x296)]("data-go-to") &&
              ((answer = $(this)
                [_0x12afeb(0x29d)](_0x12afeb(0x1f5))
                [_0x12afeb(0x296)](_0x12afeb(0x261))),
              (selections = selections[_0x12afeb(0x1b6)](
                (_0x2c31e4) => _0x2c31e4[_0x12afeb(0x1d2)] !== x,
              )),
              selections[_0x12afeb(0x1a0)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x12afeb(0x1a0)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x12afeb(0x1cd)](
                  (_0x4817ff) => _0x4817ff[_0x12afeb(0x1d2)] === x,
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x12afeb(0x1b7)] = x)));
        }),
      $(steps[x])
        [_0x196fab(0x280)](_0x196fab(0x1f0))
        [_0x196fab(0x280)](_0x196fab(0x20f))
        [_0x196fab(0x211)](function (_0x4bc5e3) {
          const _0x411b6c = _0x196fab;
          if ($(this)[_0x411b6c(0x275)]() !== "") {
            let _0x4e5dff = $(this)[_0x411b6c(0x275)]()[_0x411b6c(0x1af)],
              _0x13282f = $(this)[_0x411b6c(0x1c3)](_0x411b6c(0x22b))
                ? $(this)[_0x411b6c(0x1c3)](_0x411b6c(0x22b))
                : 0x0;
            if ($(this)[_0x411b6c(0x1c3)](_0x411b6c(0x18d))) {
              var _0x819a12 = phoneAutoFormat(
                $(this)["data"](_0x411b6c(0x18d)),
              );
              $(this)[_0x411b6c(0x275)](_0x819a12($(this)[_0x411b6c(0x275)]()));
            }
            phoneValidation($(this)[_0x411b6c(0x275)](), _0x4e5dff, _0x13282f)
              ? (empReqTel = empReqTel[_0x411b6c(0x1b6)](
                  (_0x53b635) => _0x53b635[_0x411b6c(0x26f)] !== _0x4bc5e3,
                ))
              : empReqTel["push"]({ input: _0x4bc5e3 });
          } else
            !empReqTel[_0x411b6c(0x280)](
              (_0x2886c6) => _0x2886c6[_0x411b6c(0x26f)] === _0x4bc5e3,
            ) && empReqTel[_0x411b6c(0x1a0)]({ input: _0x4bc5e3 }),
              unfilledArr["push"]({ input: $(this)["attr"]("name") });
          empReqTel[_0x411b6c(0x1af)] === 0x0
            ? (telFilled = !![])
            : (telFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x196fab(0x1f0))
        ["find"](_0x196fab(0x1ff))
        [_0x196fab(0x211)](function (_0x327d72) {
          const _0x4c1699 = _0x196fab;
          (skipTo = undefined),
            $(this)
              ["parents"](_0x4c1699(0x1c4))
              [_0x4c1699(0x1c3)]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0x4c1699(0x29d)](_0x4c1699(0x1c4))
                [_0x4c1699(0x1c3)](_0x4c1699(0x217))),
            $(this)
              ["parents"](_0x4c1699(0x1f5))
              [_0x4c1699(0x296)](_0x4c1699(0x261)) &&
              ((answer = $(this)
                [_0x4c1699(0x29d)](_0x4c1699(0x1f5))
                ["attr"](_0x4c1699(0x261))),
              (selections = selections[_0x4c1699(0x1b6)](
                (_0x4b7eab) => _0x4b7eab["step"] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x4c1699(0x1a0)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x4c1699(0x1cd)](
                  (_0x586fb2) => _0x586fb2[_0x4c1699(0x1d2)] === x,
                )),
                (selections[objIndex][_0x4c1699(0x207)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x196fab(0x280)]("[data-answer]:visible")
        [_0x196fab(0x280)](":input[type=\x22file\x22][required]")
        [_0x196fab(0x211)](function (_0x192a01) {
          const _0x5f0a1d = _0x196fab;
          $(this)["val"]() !== ""
            ? (empReqFile = empReqFile["filter"](
                (_0x2b406b) => _0x2b406b[_0x5f0a1d(0x26f)] !== _0x192a01,
              ))
            : (!empReqFile[_0x5f0a1d(0x280)](
                (_0x298b69) => _0x298b69[_0x5f0a1d(0x26f)] === _0x192a01,
              ) && empReqFile["push"]({ input: _0x192a01 }),
              unfilledArr["push"]({
                input: $(this)[_0x5f0a1d(0x296)](_0x5f0a1d(0x18b)),
              })),
            empReqFile[_0x5f0a1d(0x1af)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x196fab(0x280)]("[data-answer]:visible")
        [_0x196fab(0x280)](":input[type=\x22file\x22]")
        [_0x196fab(0x211)](function (_0x4438b2) {
          const _0x3af698 = _0x196fab;
          (skipTo = undefined),
            $(this)
              [_0x3af698(0x29d)]("[data-skip-to]")
              ["data"](_0x3af698(0x217)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0x3af698(0x1c4))
                [_0x3af698(0x1c3)]("skip-to")),
            $(this)
              [_0x3af698(0x29d)]("[data-go-to]")
              [_0x3af698(0x296)](_0x3af698(0x261)) &&
              ((answer = $(this)
                [_0x3af698(0x29d)](_0x3af698(0x1f5))
                [_0x3af698(0x296)](_0x3af698(0x261))),
              (selections = selections[_0x3af698(0x1b6)](
                (_0x335112) => _0x335112[_0x3af698(0x1d2)] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x3af698(0x1a0)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x3af698(0x1cd)](
                  (_0x3dc78d) => _0x3dc78d[_0x3af698(0x1d2)] === x,
                )),
                (selections[objIndex][_0x3af698(0x207)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x3af698(0x1b7)] = x)));
        }),
      $(steps[x])
        [_0x196fab(0x280)](_0x196fab(0x1f0))
        [_0x196fab(0x280)](_0x196fab(0x1a1))
        [_0x196fab(0x211)](function (_0x2804c7) {
          const _0x563375 = _0x196fab;
          $(this)[_0x563375(0x275)]() !== ""
            ? (empReqSelect = empReqSelect[_0x563375(0x1b6)](
                (_0x141342) => _0x141342[_0x563375(0x26f)] !== _0x2804c7,
              ))
            : (!empReqSelect[_0x563375(0x280)](
                (_0x417cb4) => _0x417cb4["input"] === _0x2804c7,
              ) && empReqSelect[_0x563375(0x1a0)]({ input: _0x2804c7 }),
              unfilledArr[_0x563375(0x1a0)]({
                input: $(this)["attr"]("name"),
              })),
            empReqSelect[_0x563375(0x1af)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x196fab(0x280)]("[data-answer]:visible")
        [_0x196fab(0x280)](_0x196fab(0x1ca))
        [_0x196fab(0x211)](function (_0x5597b6) {
          const _0x265260 = _0x196fab;
          (skipTo = undefined),
            $(this)
              [_0x265260(0x29d)](_0x265260(0x1c4))
              [_0x265260(0x1c3)](_0x265260(0x217)) !== "" &&
              (skipTo = $(this)
                [_0x265260(0x29d)]("[data-skip-to]")
                [_0x265260(0x1c3)](_0x265260(0x217))),
            $(this)
              [_0x265260(0x29d)](_0x265260(0x1f5))
              [_0x265260(0x296)]("data-go-to") &&
              ((answer = $(this)
                ["parents"](_0x265260(0x1f5))
                [_0x265260(0x296)](_0x265260(0x261))),
              (selections = selections["filter"](
                (_0x2b1770) => _0x2b1770[_0x265260(0x1d2)] !== x,
              )),
              selections[_0x265260(0x1a0)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections["findIndex"](
                  (_0x497be7) => _0x497be7[_0x265260(0x1d2)] === x,
                )),
                (selections[objIndex][_0x265260(0x207)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x265260(0x1b7)] = x)));
        }),
      $(steps[x])
        [_0x196fab(0x280)](_0x196fab(0x1f0))
        [_0x196fab(0x280)]("textarea[required]")
        [_0x196fab(0x211)](function (_0x457110) {
          const _0x5b84ca = _0x196fab;
          let _0xdc1255 = $(this)[_0x5b84ca(0x275)]()[_0x5b84ca(0x1af)],
            _0x5eaa42 = $(this)[_0x5b84ca(0x1c3)](_0x5b84ca(0x22b))
              ? $(this)[_0x5b84ca(0x1c3)](_0x5b84ca(0x22b))
              : 0x0;
          $(this)[_0x5b84ca(0x275)]() !== "" && _0xdc1255 >= _0x5eaa42
            ? (empReqTextarea = empReqTextarea[_0x5b84ca(0x1b6)](
                (_0x32a2f5) => _0x32a2f5[_0x5b84ca(0x26f)] !== _0x457110,
              ))
            : (!empReqTextarea[_0x5b84ca(0x280)](
                (_0x2a3e30) => _0x2a3e30["input"] === _0x457110,
              ) && empReqTextarea[_0x5b84ca(0x1a0)]({ input: _0x457110 }),
              unfilledArr[_0x5b84ca(0x1a0)]({
                input: $(this)[_0x5b84ca(0x296)](_0x5b84ca(0x18b)),
              })),
            empReqTextarea[_0x5b84ca(0x1af)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x196fab(0x280)](_0x196fab(0x1f0))
        [_0x196fab(0x280)](_0x196fab(0x229))
        ["each"](function (_0x4af978) {
          const _0x2b98bf = _0x196fab;
          (skipTo = undefined),
            $(this)
              [_0x2b98bf(0x29d)](_0x2b98bf(0x1c4))
              [_0x2b98bf(0x1c3)](_0x2b98bf(0x217)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0x2b98bf(0x1c4))
                [_0x2b98bf(0x1c3)](_0x2b98bf(0x217))),
            $(this)
              [_0x2b98bf(0x29d)](_0x2b98bf(0x1f5))
              [_0x2b98bf(0x296)]("data-go-to") &&
              ((answer = $(this)
                [_0x2b98bf(0x29d)](_0x2b98bf(0x1f5))
                ["attr"](_0x2b98bf(0x261))),
              (selections = selections["filter"](
                (_0x264c90) => _0x264c90[_0x2b98bf(0x1d2)] !== x,
              )),
              selections[_0x2b98bf(0x1a0)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x2b98bf(0x1a0)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x2b98bf(0x1cd)](
                  (_0x438f1f) => _0x438f1f["step"] === x,
                )),
                (selections[objIndex][_0x2b98bf(0x207)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x196fab(0x280)](_0x196fab(0x1f0))
        ["find"](_0x196fab(0x212))
        ["each"](function (_0x5ed5a2) {
          const _0x4c0688 = _0x196fab;
          $(this)["val"]() !== ""
            ? validateEmail(
                $(this)[_0x4c0688(0x275)](),
                $(this)["data"](_0x4c0688(0x188)),
                $(this)[_0x4c0688(0x296)](_0x4c0688(0x18b)),
              )
            : ((emailFilled = ![]),
              unfilledArr[_0x4c0688(0x1a0)]({
                input: $(this)[_0x4c0688(0x296)](_0x4c0688(0x18b)),
              }));
        }),
      $(steps[x])
        [_0x196fab(0x280)]("[data-answer]:visible")
        [_0x196fab(0x280)](_0x196fab(0x1e1))
        [_0x196fab(0x211)](function (_0x269af0) {
          const _0x2d92a8 = _0x196fab;
          (skipTo = undefined),
            $(this)
              [_0x2d92a8(0x29d)]("[data-skip-to]")
              [_0x2d92a8(0x1c3)]("skip-to") !== "" &&
              (skipTo = $(this)
                ["parents"](_0x2d92a8(0x1c4))
                [_0x2d92a8(0x1c3)]("skip-to")),
            $(this)
              [_0x2d92a8(0x29d)](_0x2d92a8(0x1f5))
              ["attr"](_0x2d92a8(0x261)) &&
              ((answer = $(this)
                [_0x2d92a8(0x29d)]("[data-go-to]")
                [_0x2d92a8(0x296)](_0x2d92a8(0x261))),
              (selections = selections[_0x2d92a8(0x1b6)](
                (_0x404949) => _0x404949[_0x2d92a8(0x1d2)] !== x,
              )),
              selections[_0x2d92a8(0x1a0)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x2d92a8(0x1a0)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x2d92a8(0x1cd)](
                  (_0x421933) => _0x421933["step"] === x,
                )),
                (selections[objIndex][_0x2d92a8(0x207)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x2d92a8(0x1b7)] = x)));
        });
  }
  $(steps[x])[_0x196fab(0x280)](_0x196fab(0x204))["is"](_0x196fab(0x257)) &&
    ((selArr = []),
    $(steps)
      [_0x196fab(0x280)]("[data-selected]:checked")
      ["each"](function (_0x4301dd, _0x1b22ec) {
        const _0x2a528b = _0x196fab;
        selArr["push"]({ selected: $(this)[_0x2a528b(0x1c3)]("selected") });
      }),
    (selString = []),
    selArr[_0x196fab(0x1fa)]((_0x358036) =>
      selString[_0x196fab(0x1a0)](_0x358036[_0x196fab(0x1b1)]),
    ),
    (selections = selections["filter"](
      (_0x5ddcd1) => _0x5ddcd1[_0x196fab(0x1d2)] !== x,
    )),
    $(steps[x])
      [_0x196fab(0x280)](_0x196fab(0x1f0))
      [_0x196fab(0x280)](":input[type=\x27radio\x27]:checked")
      [_0x196fab(0x211)](function () {
        const _0x5e08fa = _0x196fab;
        skipTo = undefined;
        if (
          $(this)[_0x5e08fa(0x29d)](_0x5e08fa(0x1c4))["data"](_0x5e08fa(0x217))
        )
          skipTo = $(this)
            [_0x5e08fa(0x29d)](_0x5e08fa(0x1c4))
            [_0x5e08fa(0x1c3)](_0x5e08fa(0x217));
        else
          $(this)[_0x5e08fa(0x1c3)](_0x5e08fa(0x217)) &&
            (skipTo = $(this)[_0x5e08fa(0x1c3)](_0x5e08fa(0x217)));
        if ($(this)["data"]("go-to"))
          (answer = $(this)[_0x5e08fa(0x296)](_0x5e08fa(0x261))),
            console[_0x5e08fa(0x1b2)](answer, selections),
            selections[_0x5e08fa(0x1a0)]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0x5e08fa(0x1a0)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0x5e08fa(0x1cd)](
                (_0x262868) => _0x262868[_0x5e08fa(0x1d2)] === x,
              )),
              (selections[objIndex][_0x5e08fa(0x207)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x5e08fa(0x1b7)] = x));
        else
          $(this)
            [_0x5e08fa(0x29d)](_0x5e08fa(0x1f5))
            [_0x5e08fa(0x1c3)](_0x5e08fa(0x1e7)) &&
            ((answer = $(this)
              [_0x5e08fa(0x29d)](_0x5e08fa(0x1f5))
              [_0x5e08fa(0x1c3)](_0x5e08fa(0x1e7))),
            selections["push"]({ step: x, selected: answer }),
            skipTo &&
              (selections["push"]({ step: skipTo - 0x2, selected: answer }),
              (objIndex = selections[_0x5e08fa(0x1cd)](
                (_0x24fac1) => _0x24fac1[_0x5e08fa(0x1d2)] === x,
              )),
              (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x5e08fa(0x1b7)] = x)));
      }),
    console["log"](),
    logicExtra
      ? ($(steps[x])
          ["find"](_0x196fab(0x1f0))
          [_0x196fab(0x280)](_0x196fab(0x24f))
          ["data"](_0x196fab(0x298)) === !![] ||
          $(steps[x])
            [_0x196fab(0x280)](_0x196fab(0x1da))
            [_0x196fab(0x1c3)]("radio-skip") === !![]) &&
        skip &&
        selections[_0x196fab(0x1b6)](
          (_0x30c88c) => _0x30c88c[_0x196fab(0x1d2)] === x,
        )[_0x196fab(0x1af)] > 0x0 &&
        textareaLength === 0x0 &&
        textInputLength === 0x0 &&
        emailInputLength === 0x0 &&
        checkboxInputLength === 0x0 &&
        setTimeout(
          function () {
            (next = !![]), nextStep(), selectionQuiz();
          },
          $(steps[x])
            [_0x196fab(0x280)]("[data-radio-delay]")
            [_0x196fab(0x1c3)](_0x196fab(0x1d8)),
        )
      : $(steps[x])
          ["find"](_0x196fab(0x24f))
          [_0x196fab(0x1c3)](_0x196fab(0x298)) === !![] &&
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
            ["find"](_0x196fab(0x19b))
            [_0x196fab(0x1c3)](_0x196fab(0x1d8)),
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
  const _0x1d4f69 = _0x366dd2;
  $(_0x1d4f69(0x245))[_0x1d4f69(0x1f4)](),
    unfilledArr[_0x1d4f69(0x1af)] > 0x0 &&
      unfilledArr[_0x1d4f69(0x1fa)](function (_0x4afae5) {
        const _0xb5e837 = _0x1d4f69;
        $("input[name=\x22" + _0x4afae5[_0xb5e837(0x26f)] + "\x22]")
          [_0xb5e837(0x1bb)](_0xb5e837(0x245))
          ["fadeIn"](),
          $(_0xb5e837(0x26e) + _0x4afae5[_0xb5e837(0x26f)] + "\x22]")
            ["parents"]()
            [_0xb5e837(0x1b4)](_0xb5e837(0x245))
            [_0xb5e837(0x1d6)](),
          $(_0xb5e837(0x1b9) + _0x4afae5[_0xb5e837(0x26f)] + "\x22]")
            [_0xb5e837(0x1bb)](_0xb5e837(0x245))
            [_0xb5e837(0x1d6)](),
          $(_0xb5e837(0x297) + _0x4afae5[_0xb5e837(0x26f)] + "\x22]")
            ["siblings"]("[data-text=\x22error-message\x22]")
            [_0xb5e837(0x1d6)]();
      });
}
function resetInputErrorMessage(_0x5956db) {
  const _0x478f75 = _0x366dd2;
  $("input[name=\x22" + _0x5956db + "\x22]")
    ["siblings"](_0x478f75(0x245))
    [_0x478f75(0x1f4)](),
    $(_0x478f75(0x26e) + _0x5956db + "\x22]")
      ["parents"]()
      ["children"](_0x478f75(0x245))
      [_0x478f75(0x1f4)](),
    $(_0x478f75(0x1b9) + _0x5956db + "\x22]")
      [_0x478f75(0x1bb)](_0x478f75(0x245))
      [_0x478f75(0x1f4)](),
    $(_0x478f75(0x297) + _0x5956db + "\x22]")
      [_0x478f75(0x1bb)](_0x478f75(0x245))
      [_0x478f75(0x1f4)]();
}
function increaseCurstep() {
  const _0x254ec8 = _0x366dd2;
  countCard
    ? ((curStep = curStep + 0x1),
      $(_0x254ec8(0x1f7))[_0x254ec8(0x293)](steps[_0x254ec8(0x1af)]))
    : $(steps[x])[_0x254ec8(0x1c3)](_0x254ec8(0x1e5))
    ? (curStep = curStep + 0x0)
    : (curStep = curStep + 0x1),
    $(_0x254ec8(0x287))["text"](curStep);
}
function decreaseCurstep() {
  const _0x9d4b38 = _0x366dd2;
  countCard
    ? ((curStep = curStep - 0x1),
      $("[data-text=\x22total-steps\x22]")[_0x9d4b38(0x293)](
        steps[_0x9d4b38(0x1af)],
      ))
    : $(steps[x])[_0x9d4b38(0x1c3)]("card")
    ? (curStep = curStep - 0x0)
    : (curStep = curStep - 0x1),
    $("[data-text=\x22current-step\x22]")["text"](curStep);
}
$(_0x366dd2(0x243))["on"](_0x366dd2(0x193), function (_0x5c4693) {
  const _0xc7403c = _0x366dd2;
  $(this)["data"](_0xc7403c(0x18c)) &&
    (redirectTo = $(this)[_0xc7403c(0x1c3)]("redirect")),
    !$(this)[_0xc7403c(0x1c3)]("new-tab") &&
      (newTab = $(this)[_0xc7403c(0x1c3)](_0xc7403c(0x21b))),
    (successCard = $(this)[_0xc7403c(0x1c3)](_0xc7403c(0x269))),
    _0x5c4693[_0xc7403c(0x209)](),
    _0x5c4693["stopPropagation"](),
    logicExtra &&
      ($(this)[_0xc7403c(0x28b)](_0xc7403c(0x190), !![]),
      $(steps)
        ["find"](_0xc7403c(0x267))
        [_0xc7403c(0x28b)](_0xc7403c(0x184), ![])),
    localStorage["removeItem"](_0xc7403c(0x20c)),
    fill
      ? ($(this)["data"]("wait")
          ? $(this)[_0xc7403c(0x275)](
              $(this)[_0xc7403c(0x1c3)](_0xc7403c(0x183)),
            )
          : ($(this)[_0xc7403c(0x275)](_0xc7403c(0x220)),
            $(this)[_0xc7403c(0x293)](_0xc7403c(0x220))),
        $("[data-form=\x22multistep\x22]")[_0xc7403c(0x259)](),
        $(_0xc7403c(0x23c))[_0xc7403c(0x1af)] > 0x0 &&
          grecaptcha[_0xc7403c(0x1cb)]()["length"] === 0x0 &&
          (form[_0xc7403c(0x280)]("[data-form=\x22submit-btn\x22]")["text"](
            oldSubmitText,
          ),
          form[_0xc7403c(0x280)]("[data-form=\x22submit-btn\x22]")[
            _0xc7403c(0x275)
          ](oldSubmitText)),
        customError && $(_0xc7403c(0x245))["hide"]())
      : customError && displayErrorMessage();
});
function nextStep() {
  const _0x19a795 = _0x366dd2;
  customError
    ? ($(_0x19a795(0x245))["hide"](),
      fill
        ? (x++,
          increaseCurstep(),
          (progress = x),
          x <= steps[_0x19a795(0x1af)] - 0x1 &&
            (updateStep(), memory && saveFilledInput()))
        : displayErrorMessage())
    : (x++,
      increaseCurstep(),
      x > progress && (progress = x),
      x <= steps[_0x19a795(0x1af)] - 0x1 &&
        (updateStep(), memory && saveFilledInput())),
    andLogic();
}
function backStep() {
  const _0x10df61 = _0x366dd2;
  customError && $(_0x10df61(0x245))[_0x10df61(0x1f4)](),
    decreaseCurstep(),
    x > 0x0 &&
      ($(progressbar[x])["removeClass"](_0x10df61(0x256)),
      selections["filter"]((_0x1b47a3) => _0x1b47a3[_0x10df61(0x207)] === x)[
        _0x10df61(0x1af)
      ] > 0x0
        ? (x = parseInt(
            getSafe(
              () =>
                selections[_0x10df61(0x1b6)](
                  (_0xcbc503) => _0xcbc503[_0x10df61(0x207)] === x,
                )[0x0]["backTo"],
            ),
          ))
        : x--,
      updateStep()),
    ($(steps[x])
      [_0x10df61(0x280)](_0x10df61(0x24f))
      ["data"](_0x10df61(0x298)) === !![] ||
      $(steps[x])
        ["find"](_0x10df61(0x1f0))
        [_0x10df61(0x280)](_0x10df61(0x24f))
        [_0x10df61(0x1c3)](_0x10df61(0x298)) === !![] ||
      $(steps[x])
        [_0x10df61(0x280)]("[data-answer][data-radio-skip]:visible")
        [_0x10df61(0x1c3)](_0x10df61(0x298)) === !![]) &&
      ((all_data = all_data[_0x10df61(0x1b6)](
        (_0x1521e0) =>
          _0x1521e0["field"] !==
          $(steps[x])
            [_0x10df61(0x280)](_0x10df61(0x191))
            [_0x10df61(0x296)]("name"),
      )),
      $(
        "[data-input-field=\x22" +
          $(steps[x])
            [_0x10df61(0x280)](_0x10df61(0x191))
            [_0x10df61(0x296)](_0x10df61(0x18b)) +
          "\x22]",
      )[_0x10df61(0x1f4)](),
      $(steps[x])
        [_0x10df61(0x280)]("input[type=\x22radio\x22]")
        ["prop"](_0x10df61(0x237), ![]),
      $(steps[x])
        [_0x10df61(0x280)](_0x10df61(0x1dd))
        [_0x10df61(0x230)]("w--redirected-checked"),
      validation());
}
weightedSelectionRange &&
  $(_0x366dd2(0x1ae))["each"](function () {
    const _0x5a101e = _0x366dd2;
    $(this)[_0x5a101e(0x27f)](
      _0x5a101e(0x20e) +
        $(this)[_0x5a101e(0x1c3)]("selection") +
        _0x5a101e(0x1d1),
    );
  });
function selectionQuiz() {
  const _0x3c9a7c = _0x366dd2;
  if ($(this)["find"](_0x3c9a7c(0x202))) {
    $(_0x3c9a7c(0x1ae))[_0x3c9a7c(0x1f4)](),
      $(_0x3c9a7c(0x299))[_0x3c9a7c(0x1f4)]();
    if (weightedSelection) {
      (selTotal = 0x0),
        selArr[_0x3c9a7c(0x1fa)](function (_0x51912a) {
          const _0x528113 = _0x3c9a7c;
          selTotal = selTotal + _0x51912a[_0x528113(0x1b1)];
        }),
        $(_0x3c9a7c(0x23d))["text"](selTotal);
      if (
        $("[data-selection=\x22" + selTotal + "\x22]")[_0x3c9a7c(0x1af)] > 0x0
      )
        $("[data-selection=\x22" + selTotal + "\x22]")[_0x3c9a7c(0x1d6)]();
      else
        $("[data-range]:contains(" + selTotal + ")")
          ? $(_0x3c9a7c(0x1d3) + selTotal + ")")
              [_0x3c9a7c(0x1e2)](_0x3c9a7c(0x1ae))
              ["eq"](0x0)
              [_0x3c9a7c(0x1ee)]()
          : $(_0x3c9a7c(0x231))["fadeIn"]();
    } else {
      let _0xd72396 = -0x1;
      $(_0x3c9a7c(0x1ae))[_0x3c9a7c(0x211)](function (_0x1ba488) {
        const _0x396850 = _0x3c9a7c;
        $($(_0x396850(0x1ae))[_0x1ba488])
          ["data"]("selection")
          [_0x396850(0x23e)](selString["join"]()) && (_0xd72396 = _0x1ba488);
      }),
        _0xd72396 > -0x1
          ? $($(_0x3c9a7c(0x1ae))[_0xd72396])[_0x3c9a7c(0x1d6)]()
          : $(_0x3c9a7c(0x231))["fadeIn"]();
    }
  }
}
function triggerInputAllData() {
  if (savedFilledInput && memory)
    savedFilledInput["forEach"]((_0x580395) => {
      const _0x3ebf28 = _0x5d01;
      var _0x42440a = $(
          "input[name=\x22" +
            _0x580395["inputName"] +
            "\x22][value=\x22" +
            _0x580395["value"] +
            "\x22]",
        ),
        _0x461753 = $(_0x3ebf28(0x26e) + _0x580395["inputName"] + "\x22]");
      console[_0x3ebf28(0x1b2)](
        _0x42440a[_0x3ebf28(0x29d)]("[data-radio-skip]")[_0x3ebf28(0x1c3)](
          _0x3ebf28(0x298),
        ),
      );
      if (_0x42440a[_0x3ebf28(0x296)](_0x3ebf28(0x22e)) !== _0x3ebf28(0x25c)) {
        if (
          _0x42440a[_0x3ebf28(0x296)](_0x3ebf28(0x22e)) === _0x3ebf28(0x247) &&
          !_0x42440a[_0x3ebf28(0x29d)](_0x3ebf28(0x240))[_0x3ebf28(0x1c3)](
            _0x3ebf28(0x298),
          )
        )
          _0x42440a[_0x3ebf28(0x193)](),
            _0x42440a[_0x3ebf28(0x1bb)](_0x3ebf28(0x244))[_0x3ebf28(0x1a4)](
              "w--redirected-checked",
            ),
            _0x42440a[_0x3ebf28(0x1cf)](_0x3ebf28(0x26f));
        else
          _0x580395["value"] === "on"
            ? (_0x461753["click"](),
              _0x461753["siblings"](".w-checkbox-input")[_0x3ebf28(0x1a4)](
                _0x3ebf28(0x265),
              ),
              _0x461753["trigger"](_0x3ebf28(0x26f)))
            : (console["log"](
                _0x580395[_0x3ebf28(0x272)],
                _0x580395[_0x3ebf28(0x1dc)],
              ),
              _0x461753[_0x3ebf28(0x275)](_0x580395[_0x3ebf28(0x1dc)]),
              _0x461753[_0x3ebf28(0x275)](_0x580395["value"]),
              $(_0x3ebf28(0x1a9) + _0x580395[_0x3ebf28(0x1dc)] + "\x22]")[
                _0x3ebf28(0x28b)
              ](_0x3ebf28(0x1b1), !![]),
              _0x461753[_0x3ebf28(0x1cf)]("input"),
              _0x461753[_0x3ebf28(0x1cf)](_0x3ebf28(0x266)));
      }
    });
  else
    _params &&
      (getParams(),
      searchQ["forEach"]((_0x2221c8) => {
        const _0x737b9c = _0x5d01;
        if (
          $(
            _0x737b9c(0x26e) +
              _0x2221c8[_0x737b9c(0x272)] +
              "\x22][value=\x22" +
              _0x2221c8[_0x737b9c(0x1dc)] +
              "\x22]",
          )[_0x737b9c(0x296)](_0x737b9c(0x22e)) !== _0x737b9c(0x25c)
        ) {
          if (
            $(
              _0x737b9c(0x26e) +
                _0x2221c8["key"] +
                _0x737b9c(0x271) +
                _0x2221c8[_0x737b9c(0x275)] +
                "\x22]",
            )[_0x737b9c(0x296)]("type") === _0x737b9c(0x247)
          )
            $(
              _0x737b9c(0x26e) +
                _0x2221c8[_0x737b9c(0x1be)] +
                "\x22][value=\x22" +
                _0x2221c8[_0x737b9c(0x275)] +
                "\x22]",
            )[_0x737b9c(0x193)](),
              $(
                _0x737b9c(0x26e) +
                  _0x2221c8["key"] +
                  _0x737b9c(0x271) +
                  _0x2221c8[_0x737b9c(0x275)] +
                  "\x22]",
              )
                [_0x737b9c(0x1bb)](_0x737b9c(0x244))
                [_0x737b9c(0x1a4)](_0x737b9c(0x265)),
              $(
                _0x737b9c(0x26e) +
                  _0x2221c8["key"] +
                  "\x22][value=\x22" +
                  _0x2221c8[_0x737b9c(0x275)] +
                  "\x22]",
              )["trigger"](_0x737b9c(0x26f));
          else
            _0x2221c8["val"] === "on"
              ? ($(_0x737b9c(0x26e) + _0x2221c8[_0x737b9c(0x1be)] + "\x22]")[
                  _0x737b9c(0x193)
                ](),
                $(_0x737b9c(0x26e) + _0x2221c8[_0x737b9c(0x1be)] + "\x22]")
                  [_0x737b9c(0x1bb)](_0x737b9c(0x1c9))
                  [_0x737b9c(0x1a4)](_0x737b9c(0x265)),
                $("input[name=\x22" + _0x2221c8[_0x737b9c(0x1be)] + "\x22]")[
                  _0x737b9c(0x1cf)
                ](_0x737b9c(0x26f)))
              : ($(_0x737b9c(0x26e) + _0x2221c8[_0x737b9c(0x1be)] + "\x22]")[
                  _0x737b9c(0x275)
                ](_0x2221c8[_0x737b9c(0x275)]),
                $(_0x737b9c(0x1b9) + _0x2221c8["key"] + "\x22]")[
                  _0x737b9c(0x275)
                ](_0x2221c8[_0x737b9c(0x275)]),
                $(_0x737b9c(0x297) + _0x2221c8["key"] + "\x22]")
                  [_0x737b9c(0x280)](
                    _0x737b9c(0x1a9) + _0x2221c8[_0x737b9c(0x275)] + "\x22]",
                  )
                  ["prop"](_0x737b9c(0x1b1), !![]),
                $(_0x737b9c(0x26e) + _0x2221c8[_0x737b9c(0x1be)] + "\x22]")[
                  _0x737b9c(0x1cf)
                ](_0x737b9c(0x26f)),
                $(_0x737b9c(0x26e) + _0x2221c8[_0x737b9c(0x1be)] + "\x22]")[
                  "trigger"
                ](_0x737b9c(0x266)));
        }
      }));
}
$(_0x366dd2(0x25f))["on"]("click", function () {
  (next = !![]), nextStep(), selectionQuiz();
}),
  $(_0x366dd2(0x1fb))["on"]("click", function () {
    (next = ![]), (back = !![]), backStep();
  }),
  $(steps)
    ["find"](_0x366dd2(0x267))
    [_0x366dd2(0x1f6)](_0x366dd2(0x1b0))
    ["on"]("input", function (_0x47248f) {
      validation(), andLogic();
    }),
  $(steps)
    [_0x366dd2(0x280)](_0x366dd2(0x241))
    ["on"](_0x366dd2(0x193), function () {
      (skip = !![]), validation();
    });
$(_0x366dd2(0x25a))["data"]("clickable-all")
  ? $(_0x366dd2(0x238))[_0x366dd2(0x230)](_0x366dd2(0x1cc))
  : $(_0x366dd2(0x238))[_0x366dd2(0x1a4)]("disabled");
function _0x5d01(_0x2493e5, _0x274943) {
  const _0x3b7a78 = _0x3b7a();
  return (
    (_0x5d01 = function (_0x5d01fa, _0x1fce04) {
      _0x5d01fa = _0x5d01fa - 0x183;
      let _0x160537 = _0x3b7a78[_0x5d01fa];
      return _0x160537;
    }),
    _0x5d01(_0x2493e5, _0x274943)
  );
}
function clickableIndicator() {
  const _0x47b1e3 = _0x366dd2;
  $(_0x47b1e3(0x27b))[_0x47b1e3(0x1c3)]("clickable") &&
    ($(_0x47b1e3(0x219))[_0x47b1e3(0x230)](_0x47b1e3(0x256)),
    $("[data-clickable]")["data"](_0x47b1e3(0x1ad))
      ? ((x = $(this)[_0x47b1e3(0x228)]()), updateStep())
      : $(this)[_0x47b1e3(0x228)]() <= progress &&
        ((x = $(this)[_0x47b1e3(0x228)]()), updateStep())),
    $(_0x47b1e3(0x287))["text"](x + 0x1);
}
$(_0x366dd2(0x238))["on"](_0x366dd2(0x193), clickableIndicator);
$(_0x366dd2(0x18e))[_0x366dd2(0x1c3)](_0x366dd2(0x1c6)) &&
  ($(_0x366dd2(0x1f5))[_0x366dd2(0x211)](function () {
    const _0x4ecc8a = _0x366dd2;
    $(this)[_0x4ecc8a(0x27f)](
      "<br>Data\x20Go\x20To\x20=\x20",
      $(this)[_0x4ecc8a(0x1c3)]("go-to"),
    );
  }),
  $(_0x366dd2(0x1b3))[_0x366dd2(0x211)](function () {
    const _0x59dfbf = _0x366dd2;
    $(this)[_0x59dfbf(0x27f)](
      _0x59dfbf(0x1de),
      $(this)[_0x59dfbf(0x1c3)](_0x59dfbf(0x216)),
    );
  }));
function resetFormly() {
  const _0x775aa1 = _0x366dd2;
  $(_0x775aa1(0x18e))[_0x775aa1(0x1cf)]("reset"),
    $(_0x775aa1(0x18e))
      [_0x775aa1(0x29d)]()
      [_0x775aa1(0x280)](_0x775aa1(0x263))
      [_0x775aa1(0x1f4)](),
    (x = 0x0),
    updateStep(),
    $(_0x775aa1(0x18e))[_0x775aa1(0x1ee)](),
    $(_0x775aa1(0x243))[_0x775aa1(0x293)](oldSubmitText),
    $(_0x775aa1(0x243))[_0x775aa1(0x275)](oldSubmitText),
    $("[data-text=\x22current-step\x22]")["text"](0x1),
    $(_0x775aa1(0x18e))
      [_0x775aa1(0x280)]("input:checkbox")
      [_0x775aa1(0x1bb)](_0x775aa1(0x1c9))
      [_0x775aa1(0x230)](_0x775aa1(0x265));
}
$(document)[_0x366dd2(0x232)](function (_0x217550, _0x5f1a44, _0x3380c1) {
  const _0x1f7409 = _0x366dd2;
  if (_0x3380c1["url"][_0x1f7409(0x23e)]("https://webflow.com/api/v1/form/")) {
    const _0x24e6d0 = _0x5f1a44[_0x1f7409(0x24a)] === 0xc8,
      _0x461519 = _0x1f7409(0x205);
    redirectTo &&
      _0x24e6d0 &&
      (newTab
        ? window["open"](redirectTo, _0x1f7409(0x233))
        : setTimeout(() => {
            const _0xe08c42 = _0x1f7409;
            location[_0xe08c42(0x20d)] = redirectTo;
          }, redirectDelay)),
      _0x24e6d0 &&
        successCard !== "" &&
        $(_0x1f7409(0x25e) + successCard + "\x22]")[_0x1f7409(0x1d6)](),
      _0x24e6d0 &&
        formReset &&
        setTimeout(() => {
          resetFormly();
        }, resetDelay),
      !_0x24e6d0 &&
        ($("[data-form=\x22submit-btn\x22]")[_0x1f7409(0x275)](
          _0x1f7409(0x220),
        ),
        $(_0x1f7409(0x243))[_0x1f7409(0x293)]("Please\x20wait..."));
  }
}),
  $("[data-btn=\x22edit\x22]")["on"](_0x366dd2(0x193), function () {
    const _0x32ab81 = _0x366dd2;
    var _0x244f07 = $(this)
      ["parent"]()
      [_0x32ab81(0x280)]("[data-input-field]")
      [_0x32ab81(0x1c3)](_0x32ab81(0x1df));
    setTimeout(function () {
      const _0x187a43 = _0x32ab81;
      $("input[name=\x22" + _0x244f07 + "\x22]")[_0x187a43(0x1f3)]();
    }, 0x64),
      (back = !![]),
      (x = $(this)[_0x32ab81(0x1c3)](_0x32ab81(0x235)) - 0x1),
      updateStep(),
      countCard
        ? ((curStep = x + 0x1),
          $(_0x32ab81(0x1f7))[_0x32ab81(0x293)](steps[_0x32ab81(0x1af)]))
        : $(steps[x])["data"]("card")
        ? (curStep = x + 0x0)
        : (curStep = x + 0x1),
      $(_0x32ab81(0x287))[_0x32ab81(0x293)](curStep),
      (back = ![]);
  }),
  $("[data-btn=\x22reset\x22]")["on"](_0x366dd2(0x193), function () {
    const _0x16da43 = _0x366dd2;
    $(_0x16da43(0x18e))[_0x16da43(0x1cf)](_0x16da43(0x1c1));
    let _0x4e2374 = $(this);
    $(this)[_0x16da43(0x293)](_0x16da43(0x220)),
      setTimeout(function () {
        const _0xb99325 = _0x16da43;
        $(_0x4e2374)[_0xb99325(0x293)](oldResetText),
          $(_0x4e2374)[_0xb99325(0x29d)](".w-form-done")[_0xb99325(0x1f4)](),
          (x = 0x0),
          updateStep(),
          $("[data-form=\x22multistep\x22]")[_0xb99325(0x1ee)](),
          $(_0xb99325(0x243))["text"](oldSubmitText),
          $(_0xb99325(0x243))[_0xb99325(0x275)](oldSubmitText),
          $(_0x4e2374)[_0xb99325(0x275)](oldSubmitText),
          $(_0xb99325(0x287))[_0xb99325(0x293)](0x1),
          $("[data-form=\x22multistep\x22]")
            [_0xb99325(0x280)](_0xb99325(0x1bd))
            ["siblings"](".w-checkbox-input")
            [_0xb99325(0x230)](_0xb99325(0x265));
      }, resetDelay);
  }),
  $(_0x366dd2(0x21f))["on"]("keypress", function (_0x4b8cac) {
    const _0x2d7e44 = _0x366dd2;
    _0x4b8cac[_0x2d7e44(0x288)] === 0xd &&
      fill &&
      ($(_0x2d7e44(0x253))["data"](_0x2d7e44(0x264))
        ? (totalSteps > curStep && $(_0x2d7e44(0x25f))[0x0][_0x2d7e44(0x193)](),
          _0x4b8cac[_0x2d7e44(0x209)](),
          _0x4b8cac["stopPropagation"]())
        : (_0x4b8cac[_0x2d7e44(0x209)](), _0x4b8cac[_0x2d7e44(0x29c)]()));
  }),
  $(_0x366dd2(0x21f))[_0x366dd2(0x282)](function (_0x4291e1) {
    const _0xf414fa = _0x366dd2;
    (_0x4291e1[_0xf414fa(0x1a6)] || _0x4291e1[_0xf414fa(0x1e3)]) &&
      _0x4291e1[_0xf414fa(0x288)] == 0xd &&
      (x >= steps["length"] - 0x1 && fill
        ? $(steps[x])[_0xf414fa(0x280)](_0xf414fa(0x248))["click"]()
        : (event[_0xf414fa(0x209)](), event[_0xf414fa(0x29c)]()));
  }),
  $(_0x366dd2(0x229))["keypress"](function (_0xe5979e) {
    const _0x5b00db = _0x366dd2;
    $(this)[_0x5b00db(0x1f3)](),
      _0xe5979e[_0x5b00db(0x1be)] == "Enter" &&
        (_0xe5979e["preventDefault"](), _0xe5979e["stopPropagation"]()),
      _0xe5979e[_0x5b00db(0x1e6)] &&
        _0xe5979e[_0x5b00db(0x1be)] == _0x5b00db(0x277) &&
        $(this)[_0x5b00db(0x275)]($(this)["val"]() + "\x0a");
  }),
  $(_0x366dd2(0x18e))
    [_0x366dd2(0x280)](_0x366dd2(0x267))
    ["on"]("change", function () {
      const _0x25d66e = _0x366dd2;
      (all_data = all_data[_0x25d66e(0x1b6)](
        (_0xf77c12) =>
          _0xf77c12["field"] !== $(this)[_0x25d66e(0x296)](_0x25d66e(0x18b)),
      )),
        $(this)[_0x25d66e(0x296)](_0x25d66e(0x22e)) === "checkbox"
          ? $(this)["is"](_0x25d66e(0x257))
            ? all_data[_0x25d66e(0x1a0)]({
                field: $(this)[_0x25d66e(0x296)](_0x25d66e(0x18b)),
                value: $(this)["siblings"](_0x25d66e(0x1c2))["text"](),
              })
            : $(
                "[data-input-field=\x22" +
                  $(this)["attr"](_0x25d66e(0x18b)) +
                  "\x22]",
              )[_0x25d66e(0x1f4)]()
          : (all_data[_0x25d66e(0x1a0)]({
              field: $(this)[_0x25d66e(0x296)](_0x25d66e(0x18b)),
              value: $(this)[_0x25d66e(0x275)](),
            }),
            $(this)[_0x25d66e(0x275)]() !== "" &&
              resetInputErrorMessage($(this)["attr"](_0x25d66e(0x18b)))),
        all_data[_0x25d66e(0x1fa)](function (_0x5d39d0) {
          const _0x45b049 = _0x25d66e;
          $(_0x45b049(0x19f) + _0x5d39d0["field"] + "\x22]")[
            _0x45b049(0x1ee)
          ](),
            $("[data-input-field=\x22" + _0x5d39d0[_0x45b049(0x215)] + "\x22]")[
              _0x45b049(0x293)
            ](_0x5d39d0[_0x45b049(0x1dc)]);
        });
    }),
  $(_0x366dd2(0x18e))
    [_0x366dd2(0x280)](_0x366dd2(0x229))
    ["on"](_0x366dd2(0x266), function () {
      const _0x482a22 = _0x366dd2;
      $(this)[_0x482a22(0x275)]() !== "" &&
        resetInputErrorMessage($(this)[_0x482a22(0x296)]("name")),
        (all_data = all_data[_0x482a22(0x1b6)](
          (_0x229c56) =>
            _0x229c56[_0x482a22(0x215)] !== $(this)["attr"](_0x482a22(0x18b)),
        )),
        all_data[_0x482a22(0x1a0)]({
          field: $(this)[_0x482a22(0x296)](_0x482a22(0x18b)),
          value: $(this)[_0x482a22(0x275)](),
        }),
        all_data["forEach"](function (_0x234ff9) {
          const _0x14286e = _0x482a22;
          $(_0x14286e(0x19f) + _0x234ff9[_0x14286e(0x215)] + "\x22]")[
            _0x14286e(0x1ee)
          ](),
            $(_0x14286e(0x19f) + _0x234ff9[_0x14286e(0x215)] + "\x22]")[
              _0x14286e(0x293)
            ](_0x234ff9[_0x14286e(0x1dc)]);
        });
    }),
  $(_0x366dd2(0x18e))
    [_0x366dd2(0x280)]("select")
    ["on"](_0x366dd2(0x266), function () {
      const _0x321859 = _0x366dd2;
      $(this)[_0x321859(0x275)]() !== "" &&
        resetInputErrorMessage($(this)[_0x321859(0x296)](_0x321859(0x18b)));
      var _0x28a105 = $(this)[_0x321859(0x1c3)](_0x321859(0x291));
      (all_data = all_data[_0x321859(0x1b6)](
        (_0x4a320c) =>
          _0x4a320c[_0x321859(0x215)] !== $(this)[_0x321859(0x296)]("name"),
      )),
        all_data[_0x321859(0x1a0)]({
          field: $(this)[_0x321859(0x296)](_0x321859(0x18b)),
          value: _0x28a105
            ? $(this)[_0x321859(0x280)](_0x321859(0x1b8))[_0x321859(0x293)]()
            : $(this)[_0x321859(0x275)](),
        }),
        all_data["forEach"](function (_0x10e80f) {
          const _0x31f1c5 = _0x321859;
          $("[data-input-field=\x22" + _0x10e80f["field"] + "\x22]")[
            _0x31f1c5(0x1ee)
          ](),
            $("[data-input-field=\x22" + _0x10e80f["field"] + "\x22]")[
              _0x31f1c5(0x293)
            ](_0x10e80f["value"]);
        });
    }),
  updateStep(),
  triggerInputAllData(),
  $(_0x366dd2(0x268))["each"](function () {
    const _0x25232a = _0x366dd2,
      _0xbb0a3e = $(this)[_0x25232a(0x280)]("[data-cms-select=text]"),
      _0x140e92 = [];
    console["log"](_0x140e92),
      _0xbb0a3e[_0x25232a(0x211)](function () {
        const _0x85f6c6 = _0x25232a;
        _0x140e92["push"]($(this)[_0x85f6c6(0x293)]()[_0x85f6c6(0x251)]());
      });
    const _0x39d124 = $(this)[_0x25232a(0x1bb)](_0x25232a(0x26b));
    $[_0x25232a(0x211)](_0x140e92, function (_0x309f3a, _0x350c49) {
      const _0x4ebcc9 = _0x25232a,
        _0x4f2e9c = $("<option>")
          [_0x4ebcc9(0x275)](_0x350c49)
          [_0x4ebcc9(0x293)](_0x350c49);
      _0x39d124[_0x4ebcc9(0x27f)](_0x4f2e9c);
    });
  });
function cloneRemove() {
  const _0x18d03c = _0x366dd2;
  $("[data-clone-wrapper]")[_0x18d03c(0x211)](function () {
    const _0x48f82b = _0x18d03c;
    $(this)[_0x48f82b(0x280)](_0x48f82b(0x213))[_0x48f82b(0x1af)] < 0x2
      ? $(this)["find"](_0x48f82b(0x1eb))[_0x48f82b(0x1f4)]()
      : $(this)[_0x48f82b(0x280)](_0x48f82b(0x1eb))["show"]();
  });
}
function cloneRemoveInput() {
  const _0xabb655 = _0x366dd2;
  $(_0xabb655(0x23b))[_0xabb655(0x211)](function () {
    const _0x46af13 = _0xabb655;
    $(this)[_0x46af13(0x280)](_0x46af13(0x270))[_0x46af13(0x1af)] < 0x2
      ? $(this)[_0x46af13(0x280)](_0x46af13(0x19c))[_0x46af13(0x1f4)]()
      : $(this)[_0x46af13(0x280)](_0x46af13(0x19c))[_0x46af13(0x1ee)]();
  });
}
$(_0x366dd2(0x1eb))["on"](_0x366dd2(0x193), function () {
  const _0x4d12bc = _0x366dd2,
    _0x4c2b48 =
      $(this)[_0x4d12bc(0x29d)]("[data-clone]")["length"] > 0x0
        ? $(this)["parents"](_0x4d12bc(0x213))["index"]()
        : $(this)[_0x4d12bc(0x29d)]("[data-display]")[_0x4d12bc(0x228)](),
    _0x2d4050 =
      $(this)[_0x4d12bc(0x29d)](_0x4d12bc(0x213))[_0x4d12bc(0x1af)] > 0x0
        ? $(this)
            [_0x4d12bc(0x29d)]("[data-clone]")
            [_0x4d12bc(0x1c3)](_0x4d12bc(0x1f1))
        : $(this)
            ["parents"](_0x4d12bc(0x28d))
            [_0x4d12bc(0x1c3)](_0x4d12bc(0x27c));
  $(_0x4d12bc(0x189) + _0x2d4050 + "\x22]")
    ["eq"](_0x4c2b48)
    [_0x4d12bc(0x1a5)](),
    $(_0x4d12bc(0x187) + _0x2d4050 + "\x22]")
      ["eq"](_0x4c2b48)
      ["remove"](),
    cloneRemove(),
    validation();
}),
  $("[data-form=\x22remove-input-clone\x22]")["on"](
    _0x366dd2(0x193),
    function () {
      const _0x718f86 = _0x366dd2;
      let _0x1392db = $(this)["siblings"]()[_0x718f86(0x296)](_0x718f86(0x18b));
      $(this)["parent"](_0x718f86(0x270))["remove"](),
        $(_0x718f86(0x19f) + _0x1392db + "\x22]")
          [_0x718f86(0x1e2)](_0x718f86(0x286))
          ["remove"](),
        cloneRemove(),
        validation();
    },
  ),
  $(_0x366dd2(0x194))["on"](_0x366dd2(0x193), function () {
    const _0x3d8dd2 = _0x366dd2;
    let _0x4a1d20 = $(this)[_0x3d8dd2(0x1c3)](_0x3d8dd2(0x281));
    var _0xd9dbcc = $(_0x3d8dd2(0x189) + _0x4a1d20 + "\x22]")
        ["eq"](0x0)
        [_0x3d8dd2(0x1f1)](!![]),
      _0x45762e = $("[data-display=\x22" + _0x4a1d20 + "\x22]")
        ["eq"](0x0)
        ["clone"](!![]);
    let _0x59485f = "";
    $(this)["find"](_0x3d8dd2(0x1eb))[_0x3d8dd2(0x1ee)](),
      cloneRemove(),
      _0xd9dbcc[_0x3d8dd2(0x280)](_0x3d8dd2(0x270))
        [_0x3d8dd2(0x280)](_0x3d8dd2(0x26f))
        [_0x3d8dd2(0x275)](""),
      _0xd9dbcc[_0x3d8dd2(0x280)](_0x3d8dd2(0x270))
        ["not"](":first")
        [_0x3d8dd2(0x1a5)](),
      _0x45762e["find"]("[data-display-input]")
        [_0x3d8dd2(0x1f6)](":first")
        [_0x3d8dd2(0x1a5)](),
      _0xd9dbcc[_0x3d8dd2(0x280)]("input")[_0x3d8dd2(0x211)](function () {
        const _0x41c3b6 = _0x3d8dd2;
        if (
          $(this)[_0x41c3b6(0x242)]("[data-clone-input]")[_0x41c3b6(0x1af)] >
          0x0
        ) {
          let _0xb4d135 = 0x0;
          const _0x5b1464 = $(this)
            [_0x41c3b6(0x242)](_0x41c3b6(0x270))
            ["data"]("clone-input");
          console[_0x41c3b6(0x1b2)](
            $(this)
              [_0x41c3b6(0x242)](_0x41c3b6(0x270))
              [_0x41c3b6(0x1c3)]("clone-input"),
            this["name"],
          ),
            $("[data-clone-input=\x22" + _0x5b1464 + _0x41c3b6(0x1f8))[
              _0x41c3b6(0x211)
            ](function () {
              const _0x3aaee2 = _0x41c3b6,
                _0x14af7f = $(this)[_0x3aaee2(0x296)](_0x3aaee2(0x18b));
              if (_0x14af7f && _0x14af7f[_0x3aaee2(0x26c)](_0x3aaee2(0x185))) {
                const _0x27b9a5 = parseInt(_0x14af7f["split"]("-")[0x1]);
                !isNaN(_0x27b9a5) &&
                  _0x27b9a5 > _0xb4d135 &&
                  (_0xb4d135 = _0x27b9a5);
              }
            }),
            _0xb4d135++,
            (_0x59485f = this[_0x41c3b6(0x18b)] + "-" + _0xb4d135),
            console[_0x41c3b6(0x1b2)](_0x5b1464, _0x59485f);
        } else
          _0x59485f =
            this[_0x41c3b6(0x18b)] +
            "-" +
            (parseInt(
              $("[data-clone=\x22" + _0x4a1d20 + "\x22]")
                [_0x41c3b6(0x1db)]()
                [_0x41c3b6(0x228)](),
            ) +
              0x1);
        $(this)[_0x41c3b6(0x275)](""),
          $(this)[_0x41c3b6(0x296)](_0x41c3b6(0x18b), _0x59485f),
          $(this)[_0x41c3b6(0x296)](_0x41c3b6(0x246), _0x59485f);
      }),
      _0x45762e[_0x3d8dd2(0x280)]("[data-input-field]")["each"](function () {
        const _0x428182 = _0x3d8dd2;
        if ($(this)[_0x428182(0x1c3)]("input-field")) {
          let _0x151f0f = 0x0;
          const _0xe9727b = $(this)
            [_0x428182(0x1c3)](_0x428182(0x1df))
            [_0x428182(0x22f)]("-")[0x0];
          $(
            "[data-display=\x22" +
              _0x4a1d20 +
              _0x428182(0x249) +
              _0xe9727b +
              "\x22]",
          )[_0x428182(0x211)](function () {
            const _0x49cc8b = _0x428182,
              _0x3cd7b0 = $(this)["attr"]("data-input-field"),
              _0x210113 = parseInt(_0x3cd7b0[_0x49cc8b(0x22f)]("-")[0x1]);
            !isNaN(_0x210113) &&
              _0x210113 > _0x151f0f &&
              (_0x151f0f = _0x210113);
          }),
            _0x151f0f++;
          const _0x1284fe = _0xe9727b + "-" + _0x151f0f;
          console[_0x428182(0x1b2)](_0x1284fe),
            $(this)[_0x428182(0x296)](_0x428182(0x279), _0x1284fe);
        }
      }),
      $(_0x3d8dd2(0x28c) + _0x4a1d20 + "\x22]")[_0x3d8dd2(0x27f)](_0xd9dbcc),
      $(_0x3d8dd2(0x1d7) + _0x4a1d20 + "\x22]")[_0x3d8dd2(0x27f)](_0x45762e),
      $("[data-index=\x22" + _0x4a1d20 + "\x22]")[_0x3d8dd2(0x211)](
        function () {
          const _0x941fa9 = _0x3d8dd2;
          $(this)[_0x941fa9(0x293)](
            $(this)
              [_0x941fa9(0x29d)](_0x941fa9(0x189) + _0x4a1d20 + "\x22]")
              [_0x941fa9(0x228)]() + 0x1,
          );
        },
      ),
      $(_0x3d8dd2(0x239) + _0x4a1d20 + "\x22]")[_0x3d8dd2(0x211)](function () {
        const _0x1393b1 = _0x3d8dd2;
        $(this)[_0x1393b1(0x293)](
          $(this)
            [_0x1393b1(0x29d)](_0x1393b1(0x187) + _0x4a1d20 + "\x22]")
            [_0x1393b1(0x228)]() + 0x1,
        );
      }),
      validation();
  }),
  $(_0x366dd2(0x1c8))["on"](_0x366dd2(0x193), function () {
    const _0x3651dd = _0x366dd2,
      _0x3d286f = $(this)
        [_0x3651dd(0x29d)](_0x3651dd(0x213))
        [_0x3651dd(0x228)]();
    let _0x523c94 = $(this)[_0x3651dd(0x1c3)](_0x3651dd(0x1fe));
    var _0x1ffc84 = $("[data-clone-input=\x22" + _0x523c94 + "\x22]")
        ["eq"](0x0)
        [_0x3651dd(0x1f1)](!![]),
      _0x1d8984 = $(_0x3651dd(0x21c) + _0x523c94 + "\x22]")
        ["eq"](0x0)
        [_0x3651dd(0x1f1)](!![]);
    $(this)
      [_0x3651dd(0x280)]("[data-form=\x22remove-input-clone\x22]")
      [_0x3651dd(0x1ee)](),
      cloneRemoveInput();
    let _0x43b27c = 0x0;
    $(_0x3651dd(0x19d) + _0x523c94 + _0x3651dd(0x1f8))["each"](function () {
      const _0x4b757d = _0x3651dd,
        _0x4ef639 = $(this)["attr"](_0x4b757d(0x18b));
      if (_0x4ef639 && _0x4ef639["startsWith"](_0x4b757d(0x185))) {
        const _0x599de3 = parseInt(_0x4ef639["split"]("-")[0x1]);
        !isNaN(_0x599de3) && _0x599de3 > _0x43b27c && (_0x43b27c = _0x599de3);
      }
    }),
      _0x43b27c++,
      _0x1ffc84[_0x3651dd(0x280)](_0x3651dd(0x26f))[_0x3651dd(0x211)](
        function () {
          const _0x2bb334 = _0x3651dd;
          let _0x58196f = "relationship-" + _0x43b27c;
          $(this)["val"](""),
            $(this)[_0x2bb334(0x296)](_0x2bb334(0x18b), _0x58196f),
            $(this)[_0x2bb334(0x296)](_0x2bb334(0x246), _0x58196f);
        },
      ),
      _0x1d8984["find"](_0x3651dd(0x236))["each"](function () {
        const _0x482051 = _0x3651dd;
        $(this)[_0x482051(0x296)](
          _0x482051(0x279),
          "relationship-" + _0x43b27c,
        );
      }),
      $(this)
        [_0x3651dd(0x1bb)](_0x3651dd(0x196) + _0x523c94 + "\x22]")
        ["append"](_0x1ffc84),
      $(_0x3651dd(0x28d))
        ["eq"](_0x3d286f)
        ["find"](_0x3651dd(0x28e) + _0x523c94 + "\x22]")
        [_0x3651dd(0x27f)](_0x1d8984),
      $(_0x3651dd(0x278) + _0x523c94 + "\x22]")[_0x3651dd(0x211)](function () {
        const _0x502faa = _0x3651dd;
        $(this)[_0x502faa(0x293)](
          $(this)
            ["parents"](_0x502faa(0x19d) + _0x523c94 + "\x22]")
            [_0x502faa(0x228)]() + 0x1,
        );
      }),
      $(_0x3651dd(0x192) + _0x523c94 + "\x22]")[_0x3651dd(0x211)](function () {
        const _0x5f0e9a = _0x3651dd;
        $(this)[_0x5f0e9a(0x293)](
          $(this)
            ["parents"]("[data-display-input=\x22" + _0x523c94 + "\x22]")
            [_0x5f0e9a(0x228)]() + 0x1,
        );
      }),
      validation();
  }),
  $("[data-remove-upload]")["on"](_0x366dd2(0x193), function () {
    const _0x3e5724 = _0x366dd2,
      _0x14956b = $(this)[_0x3e5724(0x1c3)](_0x3e5724(0x227));
    $(_0x3e5724(0x26e) + _0x14956b + "\x22]")[_0x3e5724(0x275)](""),
      validation();
  });
function andLogic() {
  const _0x3c2713 = _0x366dd2;
  conditionalResult &&
    (steps["eq"](x)[_0x3c2713(0x280)]("[data-show-if]")["hide"](),
    console[_0x3c2713(0x1b2)](_0x3c2713(0x1f2)),
    steps["eq"](x)
      [_0x3c2713(0x280)]("[data-show-if]")
      [_0x3c2713(0x211)](function () {
        const _0x21a22a = _0x3c2713;
        function _0x213b62(_0x10da35) {
          const _0x33c8e2 = _0x5d01,
            _0x4920f9 = _0x10da35["split"]("&"),
            _0x57bdcc = [];
          return (
            _0x4920f9[_0x33c8e2(0x1fa)]((_0xe34db) => {
              const [_0x4ed7bd, _0x29b4ba] = _0xe34db["split"]("=");
              _0x57bdcc["push"]({ field: _0x4ed7bd, value: _0x29b4ba });
            }),
            _0x57bdcc
          );
        }
        const _0x3e369d = $(this)[_0x21a22a(0x296)](_0x21a22a(0x1c5));
        console[_0x21a22a(0x1b2)](_0x3e369d);
        const _0x182189 = _0x213b62(_0x3e369d);
        function _0x4b9875(_0x1d153d, _0x3c2034) {
          const _0x10ef63 = _0x21a22a;
          return _0x3c2034[_0x10ef63(0x1c0)]((_0x331a10, _0x47be8c) => {
            const _0x247724 = _0x10ef63;
            if (
              _0x1d153d[0x0] &&
              _0x331a10[_0x247724(0x215)] === _0x1d153d[0x0][_0x247724(0x215)]
            )
              return _0x1d153d[_0x247724(0x221)](
                (_0x7289a4, _0x29da01) =>
                  _0x3c2034[_0x47be8c + _0x29da01] &&
                  _0x3c2034[_0x47be8c + _0x29da01][_0x247724(0x215)] ===
                    _0x7289a4[_0x247724(0x215)] &&
                  _0x3c2034[_0x47be8c + _0x29da01][_0x247724(0x1dc)] ===
                    _0x7289a4[_0x247724(0x1dc)],
              );
            return ![];
          });
        }
        const _0x413164 = _0x4b9875(_0x182189, all_data);
        _0x413164 ? $(this)[_0x21a22a(0x1ee)]() : $(this)[_0x21a22a(0x1f4)]();
      }));
}
scrollTop(), cloneRemove(), cloneRemoveInput();
