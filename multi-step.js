//20th Nov 2023
//Bug fix
//1. Select and Enter key bug

const _0x144300 = _0x3d10;
(function (_0x48dc71, _0x31ccae) {
  const _0x2ed47f = _0x3d10,
    _0x2d7937 = _0x48dc71();
  while (!![]) {
    try {
      const _0x568785 =
        (parseInt(_0x2ed47f(0x199)) / 0x1) *
          (parseInt(_0x2ed47f(0x14e)) / 0x2) +
        -parseInt(_0x2ed47f(0x232)) / 0x3 +
        (-parseInt(_0x2ed47f(0x190)) / 0x4) *
          (-parseInt(_0x2ed47f(0x135)) / 0x5) +
        -parseInt(_0x2ed47f(0x22c)) / 0x6 +
        (-parseInt(_0x2ed47f(0x21d)) / 0x7) *
          (parseInt(_0x2ed47f(0x156)) / 0x8) +
        (parseInt(_0x2ed47f(0x225)) / 0x9) *
          (parseInt(_0x2ed47f(0x17d)) / 0xa) +
        parseInt(_0x2ed47f(0x14a)) / 0xb;
      if (_0x568785 === _0x31ccae) break;
      else _0x2d7937["push"](_0x2d7937["shift"]());
    } catch (_0x4084a5) {
      _0x2d7937["push"](_0x2d7937["shift"]());
    }
  }
})(_0x3789, 0x400e3);
let x = 0x0,
  curStep = 0x0,
  steps = $(_0x144300(0x1e4)),
  progressbarClone = $("[data-form=\x22progress-indicator\x22]")[
    _0x144300(0x218)
  ](),
  progressbar,
  countCard = !![],
  weightedSelection = $(_0x144300(0x1bd))[_0x144300(0x228)](_0x144300(0x12e)),
  weightedSelectionRange = $(_0x144300(0x13b))[_0x144300(0x228)](
    _0x144300(0x116),
  ),
  selectMultiple = $(_0x144300(0x182))["data"](_0x144300(0x137)),
  customError = $(_0x144300(0x230))[_0x144300(0x228)](_0x144300(0x202)),
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
  reinitIX = $(_0x144300(0x1c1))["data"](_0x144300(0x1b5)),
  textareaLength = 0x0,
  textInputLength = 0x0,
  emailInputLength = 0x0,
  selectInputLength = 0x0,
  checkboxInputLength = 0x0,
  filledInput = [],
  savedFilledInput = [],
  memory = $("[data-memory]")[_0x144300(0x228)]("memory"),
  quiz = $(_0x144300(0x1a7))[_0x144300(0x228)](_0x144300(0x1d2)),
  progress = 0x0;
const urlFormly = new URL(window[_0x144300(0x1d1)][_0x144300(0x146)]);
let _params = $(_0x144300(0x20f))[_0x144300(0x228)]("query-param"),
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
  logicExtra = $(_0x144300(0x165))[_0x144300(0x228)](_0x144300(0x16e)),
  oldSubmitText = $(_0x144300(0x174))[_0x144300(0x1ad)](),
  oldResetText = $(_0x144300(0x15f))[_0x144300(0x212)](),
  formReset = $(_0x144300(0x165))[_0x144300(0x228)](_0x144300(0x140)),
  successCard = "",
  redirectTo = "",
  totalSteps = 0x0,
  checkCount = 0x0,
  resetDelay = $(_0x144300(0x1fb))[_0x144300(0x228)]("reset-delay")
    ? $(_0x144300(0x1fb))[_0x144300(0x228)](_0x144300(0x18e))
    : 0x7d0,
  redirectDelay = $("[data-redirect-delay]")[_0x144300(0x228)](_0x144300(0x1c7))
    ? $(_0x144300(0x213))[_0x144300(0x228)]("redirect-delay")
    : 0x7d0,
  newTab = !![],
  unfilledArr = [],
  phoneFormat = $(_0x144300(0x165))[_0x144300(0x228)]("phone-validation"),
  scrollToTop = $("[data-form=\x22multistep\x22]")[_0x144300(0x228)](
    _0x144300(0x21f),
  ),
  conditionalResult =
    $(_0x144300(0x144))[_0x144300(0x228)](_0x144300(0x14b)) ===
    _0x144300(0x231),
  scrollTopOffset = parseInt(
    $(_0x144300(0x165))[_0x144300(0x228)](_0x144300(0x1e2)),
  ),
  notRobot = !![],
  all_data = [];
const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
savedFilledInput = JSON[_0x144300(0x1f5)](
  localStorage[_0x144300(0x211)](_0x144300(0x1b0)),
);
var ogCloneArr = [];
$(_0x144300(0x1e1))[_0x144300(0x150)](function () {
  const _0x13f79d = _0x144300;
  ogCloneArr[_0x13f79d(0x1ba)]({
    name: $(this)[_0x13f79d(0x228)](_0x13f79d(0x218)),
    element: $(this)[_0x13f79d(0x218)](!![]),
    display: $(_0x13f79d(0x1b3) + $(this)[_0x13f79d(0x228)]("clone") + "\x22]")
      ["eq"](0x0)
      [_0x13f79d(0x218)](!![]),
  });
});
function _0x3789() {
  const _0x24a88e = [
    "option[value=\x22$(this).val()\x22]",
    "includes",
    "[data-form=\x22submit\x22]:visible",
    "weighted-selection",
    "[data-text=\x22total-steps\x22]",
    "block-domain",
    "card",
    "min-character",
    "disabled",
    "[data-selection=\x22other\x22]",
    "1820965pWsnup",
    "[type=\x22checkbox\x22]",
    "select-multiple",
    "form[data-form=\x22multistep\x22]\x20:input",
    "select[required]",
    "[data-enter]",
    "[data-weighted-selection-range]",
    "remove-upload",
    "[data-form=\x22next-btn\x22][data-submit-show]",
    "edit-step",
    "input:checkbox",
    "reset",
    "none",
    "focus",
    "readystatechange",
    "[data-conditional-result]",
    "select[required]:visible",
    "href",
    "required",
    ":input[type=\x22checkbox\x22][required]",
    "stopPropagation",
    "1806662vnLdLi",
    "conditional-result",
    "[data-selection=\x22",
    "success",
    "162dIBDOd",
    "closest",
    "each",
    ":checked",
    "[data-display-index=\x22",
    "\x22]\x20[data-input-field^=\x22",
    "Enter",
    "data-skip-to",
    "6248DhidBp",
    "auto",
    "preventDefault",
    "[data-form=\x22submit-btn\x22]:visible",
    "wait",
    "[data-remove-upload]",
    "input",
    "forEach",
    "keypress",
    "[data-btn=\x22reset\x22]",
    "select",
    "submit",
    "0.4",
    "[data-cms-select=input]",
    "ix2",
    "[data-form=\x22multistep\x22]",
    "\x22]:checked",
    "[data-text=\x22error-message\x22]",
    ":input[type=\x22radio\x22]",
    "answer",
    "remove",
    "[data-form=\x22progress\x22]",
    "[data-clickable]",
    "option[value=\x22",
    "logic-extra",
    "append",
    "radio-skip",
    "checkbox",
    "[data-range]:contains(",
    "[data-display-input]",
    "[data-form=\x22submit-btn\x22]",
    "relationship-",
    "html,\x20body",
    "some",
    ":input[type=\x22number\x22][required]",
    "clone-input",
    "_blank",
    "show",
    "data-input-field",
    "5240dlCoSh",
    "[data-input-field]",
    "[data-show-if]",
    "clickable-all",
    "count-card",
    "[data-select-multiple]",
    ":input",
    "status",
    "radio-delay",
    "[data-index=\x22",
    "input:radio[required]",
    "phone-autoformat",
    "[data-display]",
    "[data-form=\x22remove-clone\x22]",
    ":input[type=\x22file\x22]",
    "init",
    "split",
    "reset-delay",
    "current",
    "4ImCSKm",
    "[data-clone-input]",
    "[data-selected]:checked",
    ":input[type=\x22number\x22]",
    "clicked",
    "slow",
    "[data-form=\x22custom-progress-indicator\x22]",
    "removeItem",
    "[data-clone-wrapper]",
    "3909NnFuIE",
    "[data-clone-input-wrapper]",
    "key",
    ":input[type=\x22url\x22]",
    "log",
    "Webflow",
    "skipTo",
    ":input[type=\x22date\x22][required]",
    "[data-radio-skip]",
    ":input[type=\x22email\x22]",
    "field",
    "[data-form=\x22back-btn\x22]",
    "selected",
    "skip-to",
    "[data-quiz]",
    ":input[type=\x22checkbox\x22]:checked",
    "attr",
    "input[type=\x22radio\x22]",
    "<option>",
    "[data-skip-to]",
    "val",
    "parents",
    "getResponse",
    "filledInput",
    "backTo",
    "[data-btn=\x22edit\x22]",
    "[data-display=\x22",
    "searchParams",
    "reinit",
    ":input[required]",
    "startsWith",
    "input-field",
    ".active-answer-card",
    "push",
    "keydown",
    "type",
    "[data-weighted-selection]",
    "[data-form-ms=\x22submit-btn\x22]",
    "debug-mode",
    "slice",
    "[data-reinit]",
    "[data-radio-delay]",
    "click",
    ":first",
    "css",
    ".w-form-done",
    "redirect-delay",
    "\x22][value=\x22",
    "textarea",
    "<div\x20data-range=\x22selection\x22\x20style=\x22display:none\x20!important\x22>",
    "removeClass",
    "[data-clickable-all]",
    "inputName",
    "[data-selection]",
    "siblings",
    "clicked\x20enter",
    "location",
    "quiz",
    "data-radio-delay",
    "animate",
    "match",
    "trim",
    "submit-show",
    "[data-form=\x22step\x22][data-card]",
    "trigger",
    "[data-form=\x22next-btn\x22]",
    "parent",
    "every",
    "input[type=\x22text\x22][required]:visible",
    "input[name=\x22",
    "keyCode",
    "file",
    "[data-clone]",
    "scroll-top-offset",
    "body",
    "[data-form=\x22step\x22]",
    "top",
    "input[type=\x22checkbox\x22]:visible",
    "[data-text=\x22total-weight\x22]",
    ".w-checkbox-input",
    "ms-field",
    "[data-text=\x22current-step\x22]",
    "name",
    "redirect-form-hehexd",
    "fadeIn",
    "https://webflow.com/api/v1/form/",
    "[data-clone-wrapper=\x22",
    "[data-success-card]",
    "shiftKey",
    "novalidate",
    ":input[type=\x22text\x22][required]",
    ".w-radio-input",
    "parse",
    "input[type=\x22radio\x22]:checked",
    "new-tab",
    "hide",
    "[data-display-input=\x22",
    "findIndex",
    "[data-reset-delay]",
    ":input[type=\x22checkbox\x22]",
    ":input[type=\x22tel\x22][required]",
    ":input[type=\x22password\x22][required]",
    "data-go-to",
    "checked",
    "[type=\x22radio\x22]",
    "custom-error-message",
    "[data-radio-skip]:visible",
    "dispatchEvent",
    "textarea[name=\x22",
    "[data-checkbox]",
    ":input[type=\x22checkbox\x22][required]:checked",
    ":input[type=\x22text\x22]",
    "prop",
    "[data-form=\x22remove-input-clone\x22]",
    "children",
    "Please\x20wait...",
    "textarea[required]:visible",
    "textarea[autofocus]",
    "[data-query-param]",
    "div.g-recaptcha",
    "getItem",
    "text",
    "[data-redirect-delay]",
    "length",
    "value",
    "step",
    "<br>Data\x20Answer\x20=\x20",
    "clone",
    "stringify",
    "select[name=\x22",
    "[data-go-to]",
    ".w-form-formradioinput",
    "2611kAXkVd",
    "data-show-if",
    "scroll-top",
    "[data-clone-input=\x22",
    "w--redirected-checked",
    "[data-form=\x22step\x22]:not([data-card=\x22true\x22])",
    "change",
    "[data-answer=\x22",
    "6039BkFZbr",
    "go-to",
    "[data-clone=\x22",
    "data",
    "filter",
    ":input[type=\x22url\x22][required]",
    "[data-clone-input-wrapper=\x22",
    "3131874jZBpXm",
    "</div>",
    "index",
    "[data-display-input-wrapper=\x22",
    "[data-custom-error-message]",
    "AND",
    "363015XhuAlp",
    "input[autofocus]",
    "\x22]\x20input",
    "[data-form=\x22next-btn\x22][type=\x22submit\x22]",
    "addClass",
    "[data-btn=\x22check\x22]",
    "[data-display-wrapper=\x22",
    "weighted-selection-range",
    "[data-cms-select=text]",
    "[data-input-field=\x22",
    "require",
    "textarea[required]",
    "data-radio-skip",
    "[data-form=\x22progress-indicator\x22]",
    "ctrlKey",
    "test",
    "[data-count-card]",
    "input[type=\x22submit\x22]",
    ":input[type=\x22date\x22]",
    "input:radio[name=\x22",
    "radio",
    "not",
    "<br>Data\x20Go\x20To\x20=\x20",
    "active-answer-card",
    "find",
    "[data-answer]",
    "join",
    "add-new-input",
  ];
  _0x3789 = function () {
    return _0x24a88e;
  };
  return _0x3789();
}
$("div.g-recaptcha")["length"] > 0x0 && (notRobot = ![]);
function recaptcha(_0x1d149d) {
  notRobot = !![];
}
$("[data-count-card]")["length"] > 0x0 &&
  (countCard = $(_0x144300(0x11f))[_0x144300(0x228)](_0x144300(0x181)));
$(_0x144300(0x167))["hide"](),
  $(progressbarClone)["removeClass"](_0x144300(0x18f)),
  $(_0x144300(0x16b))[_0x144300(0x20b)]()[_0x144300(0x16a)](),
  $(_0x144300(0x174))[_0x144300(0x1f8)](),
  $(_0x144300(0x1be))["hide"](),
  steps[_0x144300(0x150)](function () {
    const _0x2d769a = _0x144300;
    $("[data-form=\x22progress\x22]")[_0x2d769a(0x16f)](
      progressbarClone[_0x2d769a(0x218)](!![], !![]),
    );
  }),
  $(_0x144300(0x17e))[_0x144300(0x1f8)]();
countCard
  ? ((curStep = curStep + 0x1),
    (totalSteps = steps["length"]),
    $(_0x144300(0x12f))["text"](totalSteps))
  : ($(steps[x])[_0x144300(0x228)](_0x144300(0x131))
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    (totalSteps = $(_0x144300(0x222))[_0x144300(0x214)]),
    $(_0x144300(0x12f))["text"](totalSteps),
    $(_0x144300(0x1d8))["each"](function () {
      const _0x1032cc = _0x144300;
      $(
        $("[data-form=\x22progress-indicator\x22]")[
          $(this)[_0x1032cc(0x22e)]()
        ],
      )["hide"]();
    }));
(progressbar = $(_0x144300(0x16b))[_0x144300(0x20b)]()),
  $(_0x144300(0x11c))["on"](_0x144300(0x1c3), clickableIndicator),
  $(_0x144300(0x1ea))[_0x144300(0x212)](curStep),
  steps[_0x144300(0x1f8)](),
  $(_0x144300(0x1f0))[_0x144300(0x1f8)](),
  $(_0x144300(0x235))[_0x144300(0x150)](function () {
    const _0xa40ec8 = _0x144300;
    $(this)[_0xa40ec8(0x1a9)](_0xa40ec8(0x1bc), "button");
  });
function getParams() {
  const _0x20dbf3 = _0x144300;
  urlFormly[_0x20dbf3(0x1b4)]["forEach"](function (_0xeeb720, _0x2132a0) {
    searchQ["push"]({ val: _0xeeb720, key: _0x2132a0 });
  });
}
function getSafe(_0x14ec84, _0x3067c3) {
  try {
    return _0x14ec84();
  } catch (_0x390733) {
    return _0x3067c3;
  }
}
function phoneAutoFormat(_0xbd5a7e) {
  var _0x1168ba = "";
  return function (_0x50a871) {
    const _0xbf76e7 = _0x3d10;
    var _0x555c5b = "",
      _0x1c169c = _0x50a871["replace"](/\D/g, ""),
      _0x114db0 = 0x0,
      _0xc3ca8f = 0x0;
    while (
      _0x114db0 < _0x1c169c["length"] &&
      _0xc3ca8f < _0xbd5a7e[_0xbf76e7(0x214)]
    ) {
      _0xbd5a7e[_0xc3ca8f] === "x"
        ? ((_0x555c5b += _0x1c169c[_0x114db0]), _0x114db0++)
        : (_0x555c5b += _0xbd5a7e[_0xc3ca8f]),
        _0xc3ca8f++;
    }
    if (_0x50a871[_0xbf76e7(0x214)] < _0x1168ba[_0xbf76e7(0x214)]) {
      var _0x16e5fb = _0xbd5a7e[_0xbf76e7(0x1c0)](_0xc3ca8f);
      _0x555c5b += _0x16e5fb["replace"](/x/g, "");
    }
    return (_0x1168ba = _0x555c5b), _0x555c5b;
  };
}
function validateURL(_0x56c836) {
  const _0x56bbeb = _0x144300;
  return urlPattern[_0x56bbeb(0x11e)](_0x56c836) ? !![] : ![];
}
quiz &&
  steps["each"](function () {
    const _0x19fe20 = _0x144300;
    $(this)[_0x19fe20(0x20b)]()[_0x19fe20(0x1a9)](_0x19fe20(0x11b), !![]),
      $(this)[_0x19fe20(0x20b)]()[_0x19fe20(0x1a9)](_0x19fe20(0x1d3), 0xfa);
  });
function disableBtn(_0x415939) {
  const _0x3882e0 = _0x144300;
  (fill = ![]),
    !customError &&
      ($(_0x3882e0(0x1da))[_0x3882e0(0x1c5)]({
        opacity: _0x3882e0(0x162),
        "pointer-events": _0x3882e0(0x141),
      }),
      $(_0x3882e0(0x1da))[_0x3882e0(0x236)](_0x3882e0(0x133)),
      $(_0x3882e0(0x174))[_0x3882e0(0x1c5)]({
        opacity: _0x3882e0(0x162),
        "pointer-events": _0x3882e0(0x141),
      }),
      $(_0x3882e0(0x174))[_0x3882e0(0x236)](_0x3882e0(0x133)),
      $(_0x3882e0(0x1be))[_0x3882e0(0x1c5)]({
        opacity: _0x3882e0(0x162),
        "pointer-events": _0x3882e0(0x141),
      }),
      $(_0x3882e0(0x1be))[_0x3882e0(0x236)](_0x3882e0(0x133)));
}
function enableBtn() {
  const _0x151f8f = _0x144300;
  (fill = !![]),
    $("[data-form=\x22next-btn\x22]")["css"]({
      "pointer-events": _0x151f8f(0x157),
      opacity: "1",
    }),
    $("[data-form=\x22next-btn\x22]")[_0x151f8f(0x1cb)](_0x151f8f(0x133)),
    $("[data-form=\x22submit-btn\x22]")[_0x151f8f(0x1c5)]({
      "pointer-events": _0x151f8f(0x157),
      opacity: "1",
    }),
    $(_0x151f8f(0x174))[_0x151f8f(0x1cb)](_0x151f8f(0x133)),
    $(_0x151f8f(0x1be))[_0x151f8f(0x1c5)]({
      "pointer-events": _0x151f8f(0x157),
      opacity: "1",
    }),
    $(_0x151f8f(0x1be))[_0x151f8f(0x1cb)]("disabled");
}
function saveFilledInput() {
  const _0x1aa98b = _0x144300;
  $(_0x1aa98b(0x138))
    ["not"]("[type=\x22submit\x22]")
    ["each"](function () {
      const _0x216af5 = _0x1aa98b;
      $(this)["attr"](_0x216af5(0x1bc)) === _0x216af5(0x171) ||
      $(this)[_0x216af5(0x1a9)](_0x216af5(0x1bc)) === _0x216af5(0x123)
        ? $(this)[_0x216af5(0x209)](_0x216af5(0x200)) &&
          (filledInput["some"](
            (_0x21e7a5) =>
              _0x21e7a5["inputName"] ===
              $(this)[_0x216af5(0x1a9)](_0x216af5(0x1eb)),
          )
            ? ((filledInput = filledInput[_0x216af5(0x229)](
                (_0x2b4c9f) =>
                  _0x2b4c9f[_0x216af5(0x1cd)] !==
                  $(this)[_0x216af5(0x1a9)](_0x216af5(0x1eb)),
              )),
              $(this)[_0x216af5(0x1ad)]() !== "" &&
                filledInput[_0x216af5(0x1ba)]({
                  inputName: $(this)[_0x216af5(0x1a9)](_0x216af5(0x1eb)),
                  value: $(this)[_0x216af5(0x1ad)](),
                }))
            : $(this)[_0x216af5(0x1ad)]() !== "" &&
              filledInput[_0x216af5(0x1ba)]({
                inputName: $(this)[_0x216af5(0x1a9)]("name"),
                value: $(this)["val"](),
              }))
        : filledInput[_0x216af5(0x177)](
              (_0x370cd9) =>
                _0x370cd9[_0x216af5(0x1cd)] ===
                $(this)["attr"](_0x216af5(0x1eb)),
            )
          ? ((filledInput = filledInput[_0x216af5(0x229)](
              (_0x1446ba) =>
                _0x1446ba[_0x216af5(0x1cd)] !==
                $(this)[_0x216af5(0x1a9)](_0x216af5(0x1eb)),
            )),
            $(this)[_0x216af5(0x1ad)]() !== "" &&
              filledInput["push"]({
                inputName: $(this)[_0x216af5(0x1a9)](_0x216af5(0x1eb)),
                value: $(this)["val"](),
              }))
          : $(this)[_0x216af5(0x1ad)]() !== "" &&
            filledInput[_0x216af5(0x1ba)]({
              inputName: $(this)[_0x216af5(0x1a9)](_0x216af5(0x1eb)),
              value: $(this)[_0x216af5(0x1ad)](),
            });
    }),
    localStorage[_0x1aa98b(0x197)]("filledInput"),
    localStorage["setItem"](
      _0x1aa98b(0x1b0),
      JSON[_0x1aa98b(0x219)](filledInput),
    );
}
function scrollTop() {
  const _0x134edf = _0x144300;
  scrollToTop &&
    $(_0x134edf(0x176))[_0x134edf(0x1d4)](
      {
        scrollTop:
          $(_0x134edf(0x165))["offset"]()[_0x134edf(0x1e5)] - scrollTopOffset,
      },
      0x3e8,
    );
}
function updateStep() {
  const _0x3bb519 = _0x144300;
  scrollTop(),
    (skip = ![]),
    $(_0x3bb519(0x196))[_0x3bb519(0x1cb)](_0x3bb519(0x133));
  $(_0x3bb519(0x16c))["data"]("clickable") &&
    (steps["find"](_0x3bb519(0x1b6))["each"](function () {
      const _0x38b3c5 = _0x3bb519;
      $(
        $("[data-form=\x22custom-progress-indicator\x22]")[
          $(this)[_0x38b3c5(0x1ae)](_0x38b3c5(0x1e4))[_0x38b3c5(0x22e)]()
        ],
      ),
        $(this)["val"]() === "" && emptyInput++;
    }),
    emptyInput > 0x0
      ? $(_0x3bb519(0x120))[_0x3bb519(0x236)](_0x3bb519(0x133))
      : $(_0x3bb519(0x120))[_0x3bb519(0x1cb)](_0x3bb519(0x133)));
  $(_0x3bb519(0x196))[_0x3bb519(0x1cb)](_0x3bb519(0x18f)),
    $("[data-form=\x22custom-progress-indicator\x22]")[_0x3bb519(0x236)](
      _0x3bb519(0x133),
    ),
    $($(_0x3bb519(0x196))[x])[_0x3bb519(0x236)](_0x3bb519(0x18f)),
    (selection = selections["filter"](
      (_0x2b2255) => _0x2b2255[_0x3bb519(0x216)] === x - 0x1,
    ));
  next &&
    (x = getSafe(() => selection[0x0][_0x3bb519(0x19f)])
      ? parseInt(getSafe(() => selection[0x0][_0x3bb519(0x19f)]))
      : x);
  $(_0x3bb519(0x128))[_0x3bb519(0x1f8)](), steps[_0x3bb519(0x1f8)]();
  reinitIX === !![] && window[_0x3bb519(0x19e)]["destroy"]();
  $(progressbar)[_0x3bb519(0x1cb)](_0x3bb519(0x18f));
  for (i = 0x0; i <= x; i++) {
    countCard
      ? $(progressbar[i])[_0x3bb519(0x236)](_0x3bb519(0x18f))
      : !$(steps[i])[_0x3bb519(0x228)](_0x3bb519(0x131)) &&
        $(progressbar[i])[_0x3bb519(0x236)](_0x3bb519(0x18f));
  }
  reinitIX === !![]
    ? (window[_0x3bb519(0x19e)] &&
        window["Webflow"]
          [_0x3bb519(0x119)](_0x3bb519(0x164))
          [_0x3bb519(0x18c)](),
      document[_0x3bb519(0x204)](new Event(_0x3bb519(0x143))),
      $(steps[x])[_0x3bb519(0x17b)]())
    : $(steps[x])[_0x3bb519(0x1ed)](_0x3bb519(0x195));
  $(_0x3bb519(0x1b9))[_0x3bb519(0x1cb)](_0x3bb519(0x126));
  x === 0x0 &&
    !$(steps[x])[_0x3bb519(0x228)](_0x3bb519(0x131)) &&
    ($(steps[x])[_0x3bb519(0x127)](_0x3bb519(0x128))[_0x3bb519(0x17b)](),
    $(steps[x])
      [_0x3bb519(0x127)]("[data-answer]")
      ["addClass"]("active-answer-card"));
  selection[_0x3bb519(0x214)] > 0x0
    ? ($(steps[x])
        ["find"](
          "[data-answer=\x22" + selection[0x0][_0x3bb519(0x1a5)] + "\x22]",
        )
        [_0x3bb519(0x17b)](),
      $(steps[x])
        [_0x3bb519(0x127)](
          "[data-answer=\x22" + selection[0x0][_0x3bb519(0x1a5)] + "\x22]",
        )
        [_0x3bb519(0x236)](_0x3bb519(0x126)))
    : ($(steps[x])
        ["find"](_0x3bb519(0x224) + answer + "\x22]")
        [_0x3bb519(0x17b)](),
      $(steps[x])
        [_0x3bb519(0x127)](_0x3bb519(0x224) + answer + "\x22]")
        [_0x3bb519(0x236)](_0x3bb519(0x126)));
  if (x === 0x0)
    $(_0x3bb519(0x1a4))[_0x3bb519(0x1f8)](),
      $(_0x3bb519(0x1da))[_0x3bb519(0x17b)](),
      $(_0x3bb519(0x174))["hide"]();
  else {
    if (
      x === steps[_0x3bb519(0x214)] - 0x1 ||
      $(steps[x])["find"](_0x3bb519(0x12d))["length"] > 0x0
    ) {
      $(_0x3bb519(0x1da))["hide"]();
      if (
        $(steps[x])
          [_0x3bb519(0x127)]("[data-form=\x22next-btn\x22][data-submit-show]")
          [_0x3bb519(0x228)](_0x3bb519(0x1d7))
      )
        $(steps[x])[_0x3bb519(0x127)](_0x3bb519(0x13d))[_0x3bb519(0x17b)]();
      else
        $(_0x3bb519(0x1da))["data"](_0x3bb519(0x1d7)) &&
          $(_0x3bb519(0x1da))[_0x3bb519(0x17b)]();
      $(_0x3bb519(0x174))[_0x3bb519(0x17b)](),
        $(_0x3bb519(0x1be))[_0x3bb519(0x17b)](),
        $(_0x3bb519(0x1a4))["show"]();
    } else
      $(_0x3bb519(0x1da))[_0x3bb519(0x17b)](),
        $(_0x3bb519(0x1a4))[_0x3bb519(0x17b)](),
        $(_0x3bb519(0x174))[_0x3bb519(0x1f8)](),
        $(_0x3bb519(0x1be))[_0x3bb519(0x1f8)]();
  }
  $($(steps[x])[_0x3bb519(0x127)](_0x3bb519(0x233))[0x0])[_0x3bb519(0x142)](),
    $($(steps[x])["find"](_0x3bb519(0x20e))[0x0])[_0x3bb519(0x142)](),
    validation();
  for (idx = 0x0; idx <= x; idx++) {
    $($(_0x3bb519(0x196))[idx])["removeClass"](_0x3bb519(0x133));
  }
}
function validateEmail(_0x34dd35, _0x291bb3, _0x519ddc) {
  const _0xb1716a = _0x144300;
  let _0x3d55fc = _0x34dd35["includes"]("@")
    ? _0x34dd35[_0xb1716a(0x18d)]("@")[0x1][_0xb1716a(0x18d)](".")[0x0]
    : [];
  dom = [];
  _0x291bb3 !== undefined &&
    _0x291bb3["split"](",")[_0xb1716a(0x15d)](function (_0x23059a) {
      const _0x59fc8c = _0xb1716a;
      _0x23059a[_0x59fc8c(0x12c)](_0x3d55fc) &&
        dom[_0x59fc8c(0x1ba)](_0x3d55fc);
    });
  dom[_0xb1716a(0x214)] > 0x0 ? (domainAllowed = ![]) : (domainAllowed = !![]);
  var _0x1feadd = /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,20})?$/;
  console["log"](_0x1feadd[_0xb1716a(0x11e)](_0x34dd35)),
    !_0x1feadd["test"](_0x34dd35) || !domainAllowed
      ? ((emailFilled = ![]),
        unfilledArr[_0xb1716a(0x1ba)]({ input: _0x519ddc }))
      : (emailFilled = !![]);
}
function phoneValidation(_0x54e8af, _0x463520, _0x164443) {
  const _0x1f64f2 = _0x144300;
  if (phoneFormat)
    return _0x54e8af[_0x1f64f2(0x1d5)](
      new RegExp(phoneFormat["slice"](0x1, -0x1)),
    ) && _0x463520 >= _0x164443
      ? !![]
      : ![];
  else {
    if (_0x463520 >= _0x164443) return !![];
  }
}
function validation() {
  const _0x6e9953 = _0x144300;
  $(steps[x])[_0x6e9953(0x228)](_0x6e9953(0x131)) && enableBtn();
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
    (textareaLength = $(steps[x])[_0x6e9953(0x127)](_0x6e9953(0x20d))[
      _0x6e9953(0x214)
    ]),
    (textInputLength = $(steps[x])[_0x6e9953(0x127)](_0x6e9953(0x1dd))[
      _0x6e9953(0x214)
    ]),
    (selectInputLength = $(steps[x])[_0x6e9953(0x127)](_0x6e9953(0x145))[
      "length"
    ]),
    (emailInputLength = $(steps[x])["find"](
      "input[type=\x22email\x22]:visible",
    )[_0x6e9953(0x214)]),
    (checkboxInputLength = $(steps[x])[_0x6e9953(0x127)](_0x6e9953(0x1e6))[
      _0x6e9953(0x214)
    ]);
  textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0
    ? disableBtn()
    : enableBtn();
  checkCount = $(steps[x])[_0x6e9953(0x228)]("checkbox")
    ? $(steps[x])[_0x6e9953(0x228)](_0x6e9953(0x171))
    : $(steps[x])["find"](_0x6e9953(0x206))[_0x6e9953(0x214)] > 0x0
      ? $(steps[x])["find"](_0x6e9953(0x206))["data"]("checkbox")
      : 0x0;
  if (!logicExtra)
    $(steps[x])[_0x6e9953(0x127)](":input")["is"](_0x6e9953(0x136)) &&
      (checkCount === "*" ||
      checkCount > $(steps[x])[_0x6e9953(0x127)](_0x6e9953(0x1fc))["length"]
        ? $(steps[x])
            [_0x6e9953(0x127)](_0x6e9953(0x1fc))
            [_0x6e9953(0x150)](function () {
              const _0x5dc31a = _0x6e9953;
              $(this)["is"](":checked")
                ? $(steps[x])[_0x5dc31a(0x127)](_0x5dc31a(0x148))[
                    _0x5dc31a(0x214)
                  ] < 0x1 &&
                  ((checkboxFilled = !![]),
                  resetInputErrorMessage($(this)["attr"](_0x5dc31a(0x1eb))))
                : ((checkboxFilled = ![]),
                  unfilledArr["push"]({
                    input: $(this)[_0x5dc31a(0x1a9)](_0x5dc31a(0x1eb)),
                  }));
            })
        : $(steps[x])[_0x6e9953(0x127)](
              ":input[type=\x22checkbox\x22]:checked",
            )[_0x6e9953(0x214)] >= checkCount
          ? $(steps[x])[_0x6e9953(0x127)](_0x6e9953(0x148))[_0x6e9953(0x214)] >
            0x0
            ? $(steps[x])
                [_0x6e9953(0x127)](":input[type=\x22checkbox\x22][required]")
                ["each"](function () {
                  const _0x1a6bf2 = _0x6e9953;
                  !$(this)["is"](":checked")
                    ? ((checkboxFilled = ![]),
                      unfilledArr[_0x1a6bf2(0x1ba)]({
                        input: $(this)[_0x1a6bf2(0x1a9)]("name"),
                      }))
                    : ((checkboxFilled = !![]),
                      $(steps[x])[_0x1a6bf2(0x127)](_0x1a6bf2(0x207))[
                        _0x1a6bf2(0x214)
                      ] >=
                        $(steps[x])[_0x1a6bf2(0x127)](
                          ":input[type=\x22checkbox\x22][required]",
                        )[_0x1a6bf2(0x214)] &&
                        resetInputErrorMessage(
                          $(steps[x])
                            [_0x1a6bf2(0x127)](_0x1a6bf2(0x1fc))
                            [_0x1a6bf2(0x1a9)](_0x1a6bf2(0x1eb)),
                        ));
                })
            : ((checkboxFilled = !![]),
              resetInputErrorMessage(
                $(steps[x])
                  [_0x6e9953(0x127)](":input[type=\x22checkbox\x22]")
                  [_0x6e9953(0x1a9)](_0x6e9953(0x1eb)),
              ))
          : ((checkboxFilled = ![]),
            $(steps[x])
              [_0x6e9953(0x127)](_0x6e9953(0x148))
              [_0x6e9953(0x150)](function () {
                const _0x34bd3a = _0x6e9953;
                $(this)[_0x34bd3a(0x124)](_0x34bd3a(0x151)) &&
                  unfilledArr[_0x34bd3a(0x1ba)]({
                    input: $(this)[_0x34bd3a(0x1a9)](_0x34bd3a(0x1eb)),
                  });
              }),
            unfilledArr["push"]({
              input: $(steps[x])
                [_0x6e9953(0x127)](_0x6e9953(0x1fc))
                ["attr"](_0x6e9953(0x1eb)),
            }))),
      $(steps[x])
        [_0x6e9953(0x127)](_0x6e9953(0x187))
        [_0x6e9953(0x150)](function (_0x33ddcd) {
          const _0x41f7a2 = _0x6e9953;
          var _0x671919 = $(this)[_0x41f7a2(0x1a9)]("name");
          $(_0x41f7a2(0x122) + _0x671919 + _0x41f7a2(0x166))[
            _0x41f7a2(0x214)
          ] == 0x0
            ? (!empReqRadio[_0x41f7a2(0x127)](
                (_0xad9118) => _0xad9118[_0x41f7a2(0x15c)] === _0x33ddcd,
              ) && empReqRadio[_0x41f7a2(0x1ba)]({ input: _0x33ddcd }),
              unfilledArr[_0x41f7a2(0x1ba)]({
                input: $(this)[_0x41f7a2(0x1a9)](_0x41f7a2(0x1eb)),
              }))
            : (empReqRadio = empReqRadio[_0x41f7a2(0x229)](
                (_0xad1020) => _0xad1020["input"] !== _0x33ddcd,
              )),
            empReqRadio[_0x41f7a2(0x214)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0x6e9953(0x127)](_0x6e9953(0x1f3))
        [_0x6e9953(0x150)](function (_0xdc0fb) {
          const _0x3a1455 = _0x6e9953;
          let _0x4ab88e = $(this)[_0x3a1455(0x1ad)]()[_0x3a1455(0x214)],
            _0xc1b7f6 = $(this)[_0x3a1455(0x228)](_0x3a1455(0x132))
              ? $(this)[_0x3a1455(0x228)](_0x3a1455(0x132))
              : 0x0;
          $(this)[_0x3a1455(0x1ad)]() !== "" && _0x4ab88e >= _0xc1b7f6
            ? (empReqInput = empReqInput[_0x3a1455(0x229)](
                (_0x4fe258) => _0x4fe258[_0x3a1455(0x15c)] !== _0xdc0fb,
              ))
            : (!empReqInput[_0x3a1455(0x127)](
                (_0xd3874b) => _0xd3874b["input"] === _0xdc0fb,
              ) && empReqInput["push"]({ input: _0xdc0fb }),
              unfilledArr["push"]({
                input: $(this)["attr"](_0x3a1455(0x1eb)),
              })),
            empReqInput["length"] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x6e9953(0x127)](_0x6e9953(0x1fe))
        [_0x6e9953(0x150)](function (_0xd27bc7) {
          const _0x561e32 = _0x6e9953;
          let _0x1e3e04 = $(this)["val"]()[_0x561e32(0x214)],
            _0x4a4a30 = $(this)[_0x561e32(0x228)](_0x561e32(0x132))
              ? $(this)["data"]("min-character")
              : 0x0;
          $(this)["val"]() !== "" && _0x1e3e04 >= _0x4a4a30
            ? (empReqPassword = empReqPassword[_0x561e32(0x229)](
                (_0x4e1096) => _0x4e1096[_0x561e32(0x15c)] !== _0xd27bc7,
              ))
            : (!empReqPassword[_0x561e32(0x127)](
                (_0x594707) => _0x594707[_0x561e32(0x15c)] === _0xd27bc7,
              ) && empReqPassword[_0x561e32(0x1ba)]({ input: _0xd27bc7 }),
              unfilledArr["push"]({
                input: $(this)[_0x561e32(0x1a9)]("name"),
              })),
            empReqPassword[_0x561e32(0x214)] === 0x0
              ? (passwordFilled = !![])
              : (passwordFilled = ![]);
        }),
      $(steps[x])
        [_0x6e9953(0x127)](_0x6e9953(0x22a))
        ["each"](function (_0x3f65f5) {
          const _0x24ce7d = _0x6e9953;
          let _0xbd91af = $(this)[_0x24ce7d(0x1ad)]()[_0x24ce7d(0x214)],
            _0x3b3757 = $(this)["data"](_0x24ce7d(0x132))
              ? $(this)[_0x24ce7d(0x228)](_0x24ce7d(0x132))
              : 0x0;
          $(this)["val"]() !== "" && _0xbd91af >= _0x3b3757
            ? (empReqUrl = empReqUrl[_0x24ce7d(0x229)](
                (_0x31c246) => _0x31c246["input"] !== _0x3f65f5,
              ))
            : (!empReqUrl["find"](
                (_0x503e5a) => _0x503e5a[_0x24ce7d(0x15c)] === _0x3f65f5,
              ) && empReqUrl[_0x24ce7d(0x1ba)]({ input: _0x3f65f5 }),
              unfilledArr[_0x24ce7d(0x1ba)]({
                input: $(this)[_0x24ce7d(0x1a9)](_0x24ce7d(0x1eb)),
              })),
            empReqUrl["length"] === 0x0 && validateURL($(this)["val"]())
              ? ((urlFilled = !![]), console[_0x24ce7d(0x19d)](urlFilled))
              : (urlFilled = ![]);
        }),
      $(steps[x])
        [_0x6e9953(0x127)](_0x6e9953(0x1a0))
        [_0x6e9953(0x150)](function (_0x350c43) {
          const _0x1bf0f8 = _0x6e9953;
          $(this)[_0x1bf0f8(0x1ad)]() !== ""
            ? (empReqDate = empReqDate[_0x1bf0f8(0x229)](
                (_0x1e2419) => _0x1e2419["input"] !== _0x350c43,
              ))
            : (!empReqDate["find"](
                (_0x45c49f) => _0x45c49f["input"] === _0x350c43,
              ) && empReqDate[_0x1bf0f8(0x1ba)]({ input: _0x350c43 }),
              unfilledArr[_0x1bf0f8(0x1ba)]({
                input: $(this)[_0x1bf0f8(0x1a9)](_0x1bf0f8(0x1eb)),
              })),
            empReqDate[_0x1bf0f8(0x214)] === 0x0
              ? (dateFilled = !![])
              : (dateFilled = ![]);
        }),
      $(steps[x])
        [_0x6e9953(0x127)](_0x6e9953(0x1fd))
        [_0x6e9953(0x150)](function (_0x7c1be1) {
          const _0x358de6 = _0x6e9953;
          if ($(this)[_0x358de6(0x1ad)]() !== "") {
            let _0x26b895 = $(this)[_0x358de6(0x1ad)]()["length"],
              _0x55d3e1 = $(this)[_0x358de6(0x228)]("min-character")
                ? $(this)[_0x358de6(0x228)](_0x358de6(0x132))
                : 0x0;
            if ($(this)[_0x358de6(0x228)]("phone-autoformat")) {
              var _0x52cb86 = phoneAutoFormat(
                $(this)[_0x358de6(0x228)](_0x358de6(0x188)),
              );
              $(this)["val"](_0x52cb86($(this)[_0x358de6(0x1ad)]()));
            }
            phoneValidation($(this)[_0x358de6(0x1ad)](), _0x26b895, _0x55d3e1)
              ? (empReqTel = empReqTel[_0x358de6(0x229)](
                  (_0x257240) => _0x257240[_0x358de6(0x15c)] !== _0x7c1be1,
                ))
              : empReqTel[_0x358de6(0x1ba)]({ input: _0x7c1be1 });
          } else
            !empReqTel["find"](
              (_0x33cde3) => _0x33cde3[_0x358de6(0x15c)] === _0x7c1be1,
            ) && empReqTel[_0x358de6(0x1ba)]({ input: _0x7c1be1 }),
              unfilledArr[_0x358de6(0x1ba)]({
                input: $(this)[_0x358de6(0x1a9)](_0x358de6(0x1eb)),
              });
          empReqTel[_0x358de6(0x214)] === 0x0
            ? (telFilled = !![])
            : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x6e9953(0x127)](":input[type=\x22file\x22][required]")
        [_0x6e9953(0x150)](function (_0x33efe8) {
          const _0x376683 = _0x6e9953;
          $(this)[_0x376683(0x1ad)]() !== ""
            ? (empReqFile = empReqFile["filter"](
                (_0x377546) => _0x377546[_0x376683(0x15c)] !== _0x33efe8,
              ))
            : (!empReqFile[_0x376683(0x127)](
                (_0x4573ec) => _0x4573ec[_0x376683(0x15c)] === _0x33efe8,
              ) && empReqFile[_0x376683(0x1ba)]({ input: _0x33efe8 }),
              unfilledArr[_0x376683(0x1ba)]({
                input: $(this)[_0x376683(0x1a9)](_0x376683(0x1eb)),
              })),
            empReqFile[_0x376683(0x214)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x6e9953(0x127)](_0x6e9953(0x178))
        ["each"](function (_0x33abe6) {
          const _0x26ab50 = _0x6e9953;
          let _0x487a94 = $(this)["val"]()["length"],
            _0x74cf8f = $(this)[_0x26ab50(0x228)]("min-character")
              ? $(this)[_0x26ab50(0x228)](_0x26ab50(0x132))
              : 0x0;
          $(this)["val"]() !== "" && _0x487a94 >= _0x74cf8f
            ? (empReqNum = empReqNum["filter"](
                (_0x578369) => _0x578369["input"] !== _0x33abe6,
              ))
            : (!empReqNum[_0x26ab50(0x127)](
                (_0x128028) => _0x128028[_0x26ab50(0x15c)] === _0x33abe6,
              ) && empReqNum[_0x26ab50(0x1ba)]({ input: _0x33abe6 }),
              unfilledArr[_0x26ab50(0x1ba)]({
                input: $(this)[_0x26ab50(0x1a9)](_0x26ab50(0x1eb)),
              })),
            empReqNum["length"] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x6e9953(0x127)](_0x6e9953(0x139))
        [_0x6e9953(0x150)](function (_0x33d9d0) {
          const _0x3e5bcb = _0x6e9953;
          let _0x28e5b0 = $(this)[_0x3e5bcb(0x1ad)]();
          _0x28e5b0 === "" && (_0x28e5b0 = null),
            _0x28e5b0 != null
              ? (empReqSelect = empReqSelect[_0x3e5bcb(0x229)](
                  (_0x51b567) => _0x51b567["input"] !== _0x33d9d0,
                ))
              : (!empReqSelect[_0x3e5bcb(0x127)](
                  (_0x329718) => _0x329718[_0x3e5bcb(0x15c)] === _0x33d9d0,
                ) && empReqSelect[_0x3e5bcb(0x1ba)]({ input: _0x33d9d0 }),
                unfilledArr[_0x3e5bcb(0x1ba)]({
                  input: $(this)[_0x3e5bcb(0x1a9)](_0x3e5bcb(0x1eb)),
                })),
            empReqSelect[_0x3e5bcb(0x214)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x6e9953(0x127)](_0x6e9953(0x11a))
        ["each"](function (_0x42c799) {
          const _0x1ad351 = _0x6e9953;
          let _0x5afb70 = $(this)[_0x1ad351(0x1ad)]()[_0x1ad351(0x214)],
            _0x194d72 = $(this)[_0x1ad351(0x228)](_0x1ad351(0x132))
              ? $(this)[_0x1ad351(0x228)](_0x1ad351(0x132))
              : 0x0;
          $(this)[_0x1ad351(0x1ad)]() !== "" && _0x5afb70 >= _0x194d72
            ? (empReqTextarea = empReqTextarea[_0x1ad351(0x229)](
                (_0x4f64b6) => _0x4f64b6[_0x1ad351(0x15c)] !== _0x42c799,
              ))
            : (!empReqTextarea[_0x1ad351(0x127)](
                (_0x5af783) => _0x5af783[_0x1ad351(0x15c)] === _0x42c799,
              ) && empReqTextarea["push"]({ input: _0x42c799 }),
              unfilledArr[_0x1ad351(0x1ba)]({
                input: $(this)[_0x1ad351(0x1a9)](_0x1ad351(0x1eb)),
              })),
            empReqTextarea[_0x1ad351(0x214)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x6e9953(0x127)](":input[type=\x22email\x22][required]")
        [_0x6e9953(0x150)](function () {
          const _0x397a9a = _0x6e9953;
          $(this)[_0x397a9a(0x1ad)]() !== ""
            ? validateEmail(
                $(this)["val"](),
                $(this)[_0x397a9a(0x228)](_0x397a9a(0x130)),
                $(this)[_0x397a9a(0x1a9)]("name"),
              )
            : ((emailFilled = ![]),
              unfilledArr[_0x397a9a(0x1ba)]({
                input: $(this)["attr"](_0x397a9a(0x1eb)),
              }));
        });
  else {
    if ($(steps[x])[_0x6e9953(0x228)](_0x6e9953(0x131)))
      (answer = $(steps[x])
        [_0x6e9953(0x127)](_0x6e9953(0x21b))
        ["data"](_0x6e9953(0x226))),
        (selections = selections[_0x6e9953(0x229)](
          (_0xceb331) => _0xceb331["step"] !== x,
        )),
        selections[_0x6e9953(0x1ba)]({ step: x, selected: answer });
    else
      $(steps[x])
        [_0x6e9953(0x127)](_0x6e9953(0x1b9))
        [_0x6e9953(0x228)](_0x6e9953(0x131)) &&
        ((answer = $(steps[x])
          [_0x6e9953(0x127)](_0x6e9953(0x1b9))
          ["data"]("go-to")),
        (selections = selections[_0x6e9953(0x229)](
          (_0x11b0e3) => _0x11b0e3[_0x6e9953(0x216)] !== x,
        )),
        selections[_0x6e9953(0x1ba)]({ step: x, selected: answer }));
    $(steps[x])
      [_0x6e9953(0x127)](_0x6e9953(0x1b9))
      [_0x6e9953(0x127)](_0x6e9953(0x183))
      ["is"](_0x6e9953(0x136)) &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])[_0x6e9953(0x127)](":input[type=\x22checkbox\x22]")[
          _0x6e9953(0x214)
        ]
        ? $(steps[x])
            [_0x6e9953(0x127)](":input[type=\x22checkbox\x22]")
            [_0x6e9953(0x150)](function () {
              const _0x37cb3c = _0x6e9953;
              $(this)["is"](_0x37cb3c(0x151))
                ? $(steps[x])[_0x37cb3c(0x127)](_0x37cb3c(0x1b6))[
                    _0x37cb3c(0x214)
                  ] < 0x1 &&
                  ((skipTo = undefined),
                  $(this)
                    ["parents"]("[data-skip-to]")
                    ["data"](_0x37cb3c(0x1a6)) &&
                    (skipTo = $(this)
                      ["parents"](_0x37cb3c(0x1ac))
                      [_0x37cb3c(0x228)]("skip-to")),
                  $(this)
                    [_0x37cb3c(0x1ae)](_0x37cb3c(0x21b))
                    ["attr"](_0x37cb3c(0x1ff)) &&
                    ((answer = $(this)
                      [_0x37cb3c(0x1ae)]("[data-go-to]")
                      [_0x37cb3c(0x1a9)](_0x37cb3c(0x1ff))),
                    (selections = selections[_0x37cb3c(0x229)](
                      (_0x894f38) => _0x894f38[_0x37cb3c(0x216)] !== x,
                    )),
                    selections[_0x37cb3c(0x1ba)]({ step: x, selected: answer }),
                    skipTo &&
                      (selections[_0x37cb3c(0x1ba)]({
                        step: skipTo - 0x2,
                        selected: answer,
                      }),
                      (objIndex = selections[_0x37cb3c(0x1fa)](
                        (_0x4987e4) => _0x4987e4[_0x37cb3c(0x216)] === x,
                      )),
                      (selections[objIndex][_0x37cb3c(0x19f)] =
                        parseInt(skipTo) - 0x1),
                      (selections[objIndex][_0x37cb3c(0x1b1)] = x))),
                  (checkboxFilled = !![]),
                  $(steps[x])[_0x37cb3c(0x127)](_0x37cb3c(0x207))[
                    _0x37cb3c(0x214)
                  ] >= $(steps[x])["find"](_0x37cb3c(0x148))["length"] &&
                    resetInputErrorMessage(
                      $(steps[x])
                        [_0x37cb3c(0x127)](":input[type=\x22checkbox\x22]")
                        ["attr"]("name"),
                    ))
                : ((checkboxFilled = ![]),
                  unfilledArr["push"]({
                    input: $(this)[_0x37cb3c(0x1a9)](_0x37cb3c(0x1eb)),
                  }));
            })
        : $(steps[x])
              [_0x6e9953(0x127)](".active-answer-card")
              [_0x6e9953(0x127)](":input[type=\x22checkbox\x22]:checked")[
              _0x6e9953(0x214)
            ] >= checkCount
          ? ($(steps[x])
              [_0x6e9953(0x127)](_0x6e9953(0x1b9))
              [_0x6e9953(0x127)](":input[type=\x22checkbox\x22]")
              [_0x6e9953(0x1ae)]("[data-go-to]")
              [_0x6e9953(0x1a9)]("data-go-to") &&
              ((skipTo = undefined),
              $(steps[x])
                ["find"](".active-answer-card")
                ["find"](":input[type=\x22checkbox\x22]")
                [_0x6e9953(0x1ae)](_0x6e9953(0x1ac))
                [_0x6e9953(0x1a9)](_0x6e9953(0x155)) &&
                (skipTo = $(steps[x])
                  [_0x6e9953(0x127)](_0x6e9953(0x1b9))
                  [_0x6e9953(0x127)](_0x6e9953(0x1a8))
                  [_0x6e9953(0x1ae)](_0x6e9953(0x1ac))
                  ["attr"](_0x6e9953(0x155))),
              (answer = $(steps[x])
                [_0x6e9953(0x127)](_0x6e9953(0x1b9))
                [_0x6e9953(0x127)](_0x6e9953(0x1fc))
                ["parents"](_0x6e9953(0x21b))
                ["attr"](_0x6e9953(0x1ff))),
              (selections = selections["filter"](
                (_0x7ecc3e) => _0x7ecc3e["step"] !== x,
              )),
              selections[_0x6e9953(0x1ba)]({ step: x, selected: answer }),
              console["log"]("selected", selections),
              skipTo &&
                ((selections = selections[_0x6e9953(0x229)](
                  (_0xd8d015) => _0xd8d015[_0x6e9953(0x216)] !== skipTo - 0x2,
                )),
                selections[_0x6e9953(0x1ba)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x6e9953(0x1fa)](
                  (_0x5da1c1) => _0x5da1c1["step"] === x,
                )),
                console[_0x6e9953(0x19d)](objIndex),
                (selections[objIndex][_0x6e9953(0x19f)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x6e9953(0x1b1)] = x),
                console[_0x6e9953(0x19d)]("running"))),
            (checkboxFilled = !![]),
            $(steps[x])[_0x6e9953(0x127)](_0x6e9953(0x207))["length"] >=
              $(steps[x])[_0x6e9953(0x127)](
                ":input[type=\x22checkbox\x22][required]",
              )[_0x6e9953(0x214)] &&
              resetInputErrorMessage(
                $(steps[x])
                  [_0x6e9953(0x127)](_0x6e9953(0x1fc))
                  ["attr"](_0x6e9953(0x1eb)),
              ))
          : ((checkboxFilled = ![]),
            $(steps[x])
              [_0x6e9953(0x127)](_0x6e9953(0x148))
              [_0x6e9953(0x150)](function () {
                const _0x3d3db2 = _0x6e9953;
                $(this)[_0x3d3db2(0x124)](_0x3d3db2(0x151)) &&
                  unfilledArr[_0x3d3db2(0x1ba)]({
                    input: $(this)[_0x3d3db2(0x1a9)](_0x3d3db2(0x1eb)),
                  });
              }))),
      $(steps[x])
        [_0x6e9953(0x127)](_0x6e9953(0x1b9))
        [_0x6e9953(0x127)](_0x6e9953(0x187))
        [_0x6e9953(0x150)](function (_0x4ad3ea) {
          const _0x54fef5 = _0x6e9953;
          var _0x56389d = $(this)["attr"]("name");
          $(_0x54fef5(0x122) + _0x56389d + "\x22]:checked")[_0x54fef5(0x214)] ==
          0x0
            ? (!empReqRadio[_0x54fef5(0x127)](
                (_0x1cf724) => _0x1cf724[_0x54fef5(0x15c)] === _0x4ad3ea,
              ) && empReqRadio["push"]({ input: _0x4ad3ea }),
              unfilledArr[_0x54fef5(0x1ba)]({
                input: $(this)[_0x54fef5(0x1a9)]("name"),
              }))
            : (empReqRadio = empReqRadio[_0x54fef5(0x229)](
                (_0x4173c7) => _0x4173c7["input"] !== _0x4ad3ea,
              )),
            empReqRadio["length"] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0x6e9953(0x127)](_0x6e9953(0x1b9))
        [_0x6e9953(0x127)](_0x6e9953(0x1f3))
        [_0x6e9953(0x150)](function (_0x65927c) {
          const _0x10ccab = _0x6e9953;
          let _0x48fc18 = $(this)[_0x10ccab(0x1ad)]()[_0x10ccab(0x214)],
            _0x55c472 = $(this)[_0x10ccab(0x228)](_0x10ccab(0x132))
              ? $(this)[_0x10ccab(0x228)]("min-character")
              : 0x0;
          $(this)[_0x10ccab(0x1ad)]() !== "" && _0x48fc18 >= _0x55c472
            ? (empReqInput = empReqInput[_0x10ccab(0x229)](
                (_0x29d93e) => _0x29d93e[_0x10ccab(0x15c)] !== _0x65927c,
              ))
            : (!empReqInput[_0x10ccab(0x127)](
                (_0x4e19bf) => _0x4e19bf["input"] === _0x65927c,
              ) && empReqInput["push"]({ input: _0x65927c }),
              unfilledArr[_0x10ccab(0x1ba)]({
                input: $(this)[_0x10ccab(0x1a9)]("name"),
              })),
            empReqInput["length"] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x6e9953(0x127)](_0x6e9953(0x1b9))
        [_0x6e9953(0x127)](_0x6e9953(0x208))
        [_0x6e9953(0x150)](function (_0x11b749) {
          const _0x5f57fb = _0x6e9953;
          (skipTo = undefined),
            $(this)
              [_0x5f57fb(0x1ae)](_0x5f57fb(0x1ac))
              [_0x5f57fb(0x228)](_0x5f57fb(0x1a6)) !== "" &&
              (skipTo = $(this)
                [_0x5f57fb(0x1ae)](_0x5f57fb(0x1ac))
                ["data"]("skip-to")),
            $(this)["parents"]("[data-go-to]")["attr"](_0x5f57fb(0x1ff)) &&
              ((answer = $(this)
                [_0x5f57fb(0x1ae)](_0x5f57fb(0x21b))
                [_0x5f57fb(0x1a9)](_0x5f57fb(0x1ff))),
              (selections = selections[_0x5f57fb(0x229)](
                (_0xdc0ac) => _0xdc0ac["step"] !== x,
              )),
              selections[_0x5f57fb(0x1ba)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x5f57fb(0x1ba)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x5f57fb(0x1fa)](
                  (_0x37a78d) => _0x37a78d[_0x5f57fb(0x216)] === x,
                )),
                (selections[objIndex][_0x5f57fb(0x19f)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x6e9953(0x127)](".active-answer-card")
        [_0x6e9953(0x127)](_0x6e9953(0x1fe))
        [_0x6e9953(0x150)](function (_0x575fa9) {
          const _0x481311 = _0x6e9953;
          let _0x20ba86 = $(this)[_0x481311(0x1ad)]()[_0x481311(0x214)],
            _0xe8055e = $(this)[_0x481311(0x228)]("min-character")
              ? $(this)["data"](_0x481311(0x132))
              : 0x0;
          $(this)["val"]() !== "" && _0x20ba86 >= _0xe8055e
            ? (empReqPassword = empReqPassword[_0x481311(0x229)](
                (_0x39588b) => _0x39588b[_0x481311(0x15c)] !== _0x575fa9,
              ))
            : (!empReqPassword["find"](
                (_0x5d584b) => _0x5d584b[_0x481311(0x15c)] === _0x575fa9,
              ) && empReqPassword[_0x481311(0x1ba)]({ input: _0x575fa9 }),
              unfilledArr[_0x481311(0x1ba)]({
                input: $(this)["attr"]("name"),
              })),
            empReqPassword["length"] === 0x0
              ? (passwordFilled = !![])
              : (passwordFilled = ![]);
        }),
      $(steps[x])
        [_0x6e9953(0x127)](".active-answer-card")
        [_0x6e9953(0x127)](":input[type=\x22password\x22]")
        ["each"](function (_0xc98b03) {
          const _0x257c8d = _0x6e9953;
          (skipTo = undefined),
            $(this)
              [_0x257c8d(0x1ae)](_0x257c8d(0x1ac))
              [_0x257c8d(0x228)](_0x257c8d(0x1a6)) !== "" &&
              (skipTo = $(this)
                [_0x257c8d(0x1ae)](_0x257c8d(0x1ac))
                [_0x257c8d(0x228)]("skip-to")),
            $(this)
              [_0x257c8d(0x1ae)](_0x257c8d(0x21b))
              ["attr"](_0x257c8d(0x1ff)) &&
              ((answer = $(this)
                [_0x257c8d(0x1ae)](_0x257c8d(0x21b))
                [_0x257c8d(0x1a9)]("data-go-to")),
              (selections = selections[_0x257c8d(0x229)](
                (_0x5a1561) => _0x5a1561[_0x257c8d(0x216)] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x257c8d(0x1ba)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x38f4c1) => _0x38f4c1[_0x257c8d(0x216)] === x,
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x6e9953(0x127)](".active-answer-card")
        [_0x6e9953(0x127)](_0x6e9953(0x22a))
        [_0x6e9953(0x150)](function (_0x3f9cc9) {
          const _0x31fa34 = _0x6e9953;
          let _0x3a9263 = $(this)[_0x31fa34(0x1ad)]()[_0x31fa34(0x214)],
            _0xf73990 = $(this)["data"](_0x31fa34(0x132))
              ? $(this)[_0x31fa34(0x228)](_0x31fa34(0x132))
              : 0x0;
          $(this)[_0x31fa34(0x1ad)]() !== "" && _0x3a9263 >= _0xf73990
            ? (empReqUrl = empReqUrl["filter"](
                (_0x3a2d73) => _0x3a2d73[_0x31fa34(0x15c)] !== _0x3f9cc9,
              ))
            : (!empReqUrl["find"](
                (_0x2ec114) => _0x2ec114["input"] === _0x3f9cc9,
              ) && empReqUrl[_0x31fa34(0x1ba)]({ input: _0x3f9cc9 }),
              unfilledArr[_0x31fa34(0x1ba)]({
                input: $(this)["attr"](_0x31fa34(0x1eb)),
              })),
            empReqUrl[_0x31fa34(0x214)] === 0x0 &&
            validateURL($(this)[_0x31fa34(0x1ad)]())
              ? (urlFilled = !![])
              : (urlFilled = ![]);
        }),
      $(steps[x])
        [_0x6e9953(0x127)](_0x6e9953(0x1b9))
        [_0x6e9953(0x127)](_0x6e9953(0x19c))
        ["each"](function (_0x213221) {
          const _0x6d6a84 = _0x6e9953;
          (skipTo = undefined),
            $(this)
              [_0x6d6a84(0x1ae)](_0x6d6a84(0x1ac))
              ["data"](_0x6d6a84(0x1a6)) !== "" &&
              (skipTo = $(this)
                [_0x6d6a84(0x1ae)](_0x6d6a84(0x1ac))
                [_0x6d6a84(0x228)]("skip-to")),
            $(this)
              [_0x6d6a84(0x1ae)]("[data-go-to]")
              [_0x6d6a84(0x1a9)]("data-go-to") &&
              ((answer = $(this)
                ["parents"](_0x6d6a84(0x21b))
                [_0x6d6a84(0x1a9)](_0x6d6a84(0x1ff))),
              (selections = selections[_0x6d6a84(0x229)](
                (_0x3d8ab1) => _0x3d8ab1["step"] !== x,
              )),
              selections[_0x6d6a84(0x1ba)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0x6d6a84(0x1fa)](
                  (_0x35afd5) => _0x35afd5[_0x6d6a84(0x216)] === x,
                )),
                (selections[objIndex][_0x6d6a84(0x19f)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x6e9953(0x127)](_0x6e9953(0x1b9))
        [_0x6e9953(0x127)](_0x6e9953(0x1a0))
        [_0x6e9953(0x150)](function (_0x4e8408) {
          const _0x3cbedb = _0x6e9953;
          $(this)[_0x3cbedb(0x1ad)]() !== ""
            ? (empReqDate = empReqDate[_0x3cbedb(0x229)](
                (_0x51be30) => _0x51be30[_0x3cbedb(0x15c)] !== _0x4e8408,
              ))
            : (!empReqDate[_0x3cbedb(0x127)](
                (_0x130ed9) => _0x130ed9[_0x3cbedb(0x15c)] === _0x4e8408,
              ) && empReqDate[_0x3cbedb(0x1ba)]({ input: _0x4e8408 }),
              unfilledArr[_0x3cbedb(0x1ba)]({
                input: $(this)["attr"](_0x3cbedb(0x1eb)),
              })),
            empReqDate[_0x3cbedb(0x214)] === 0x0
              ? (dateFilled = !![])
              : (dateFilled = ![]);
        }),
      $(steps[x])
        [_0x6e9953(0x127)](_0x6e9953(0x1b9))
        [_0x6e9953(0x127)](_0x6e9953(0x121))
        [_0x6e9953(0x150)](function (_0x5dec13) {
          const _0x53466c = _0x6e9953;
          (skipTo = undefined),
            $(this)
              [_0x53466c(0x1ae)]("[data-skip-to]")
              [_0x53466c(0x228)]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0x53466c(0x1ae)]("[data-skip-to]")
                [_0x53466c(0x228)]("skip-to")),
            $(this)
              [_0x53466c(0x1ae)](_0x53466c(0x21b))
              ["attr"](_0x53466c(0x1ff)) &&
              ((answer = $(this)
                ["parents"](_0x53466c(0x21b))
                [_0x53466c(0x1a9)](_0x53466c(0x1ff))),
              (selections = selections[_0x53466c(0x229)](
                (_0x56c732) => _0x56c732[_0x53466c(0x216)] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x53466c(0x1ba)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x2ac7cb) => _0x2ac7cb[_0x53466c(0x216)] === x,
                )),
                (selections[objIndex][_0x53466c(0x19f)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x6e9953(0x127)](_0x6e9953(0x1b9))
        [_0x6e9953(0x127)](_0x6e9953(0x178))
        [_0x6e9953(0x150)](function (_0x3edd79) {
          const _0x4a220f = _0x6e9953;
          let _0x7fe9b2 = $(this)["val"]()[_0x4a220f(0x214)],
            _0x4a87fc = $(this)[_0x4a220f(0x228)](_0x4a220f(0x132))
              ? $(this)[_0x4a220f(0x228)](_0x4a220f(0x132))
              : 0x0;
          $(this)[_0x4a220f(0x1ad)]() !== "" && _0x7fe9b2 >= _0x4a87fc
            ? (empReqNum = empReqNum[_0x4a220f(0x229)](
                (_0x57d41b) => _0x57d41b[_0x4a220f(0x15c)] !== _0x3edd79,
              ))
            : (!empReqNum["find"](
                (_0x2223fb) => _0x2223fb[_0x4a220f(0x15c)] === _0x3edd79,
              ) && empReqNum[_0x4a220f(0x1ba)]({ input: _0x3edd79 }),
              unfilledArr[_0x4a220f(0x1ba)]({
                input: $(this)[_0x4a220f(0x1a9)](_0x4a220f(0x1eb)),
              })),
            empReqNum["length"] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x6e9953(0x127)](_0x6e9953(0x1b9))
        [_0x6e9953(0x127)](_0x6e9953(0x193))
        [_0x6e9953(0x150)](function (_0x530c70) {
          const _0x38bdc5 = _0x6e9953;
          (skipTo = undefined),
            $(this)
              [_0x38bdc5(0x1ae)](_0x38bdc5(0x1ac))
              [_0x38bdc5(0x228)](_0x38bdc5(0x1a6)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0x38bdc5(0x1ac))
                ["data"](_0x38bdc5(0x1a6))),
            $(this)
              [_0x38bdc5(0x1ae)](_0x38bdc5(0x21b))
              [_0x38bdc5(0x1a9)]("data-go-to") &&
              ((answer = $(this)
                [_0x38bdc5(0x1ae)](_0x38bdc5(0x21b))
                ["attr"](_0x38bdc5(0x1ff))),
              (selections = selections["filter"](
                (_0x21a8bd) => _0x21a8bd[_0x38bdc5(0x216)] !== x,
              )),
              selections[_0x38bdc5(0x1ba)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x38bdc5(0x1ba)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x20d3bf) => _0x20d3bf[_0x38bdc5(0x216)] === x,
                )),
                (selections[objIndex][_0x38bdc5(0x19f)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x38bdc5(0x1b1)] = x)));
        }),
      $(steps[x])
        ["find"](".active-answer-card")
        [_0x6e9953(0x127)](_0x6e9953(0x1fd))
        [_0x6e9953(0x150)](function (_0x13f93a) {
          const _0x1b04a9 = _0x6e9953;
          if ($(this)["val"]() !== "") {
            let _0x42793b = $(this)["val"]()[_0x1b04a9(0x214)],
              _0x110381 = $(this)[_0x1b04a9(0x228)](_0x1b04a9(0x132))
                ? $(this)[_0x1b04a9(0x228)](_0x1b04a9(0x132))
                : 0x0;
            if ($(this)[_0x1b04a9(0x228)](_0x1b04a9(0x188))) {
              var _0x5adcd6 = phoneAutoFormat(
                $(this)[_0x1b04a9(0x228)](_0x1b04a9(0x188)),
              );
              $(this)[_0x1b04a9(0x1ad)](_0x5adcd6($(this)["val"]()));
            }
            phoneValidation($(this)["val"](), _0x42793b, _0x110381)
              ? (empReqTel = empReqTel[_0x1b04a9(0x229)](
                  (_0x5caac4) => _0x5caac4[_0x1b04a9(0x15c)] !== _0x13f93a,
                ))
              : empReqTel[_0x1b04a9(0x1ba)]({ input: _0x13f93a });
          } else
            !empReqTel["find"](
              (_0x478477) => _0x478477[_0x1b04a9(0x15c)] === _0x13f93a,
            ) && empReqTel[_0x1b04a9(0x1ba)]({ input: _0x13f93a }),
              unfilledArr[_0x1b04a9(0x1ba)]({
                input: $(this)["attr"](_0x1b04a9(0x1eb)),
              });
          empReqTel["length"] === 0x0 ? (telFilled = !![]) : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x6e9953(0x127)](_0x6e9953(0x1b9))
        [_0x6e9953(0x127)](":input[type=\x22tel\x22]")
        [_0x6e9953(0x150)](function (_0xaa65da) {
          const _0x27378a = _0x6e9953;
          (skipTo = undefined),
            $(this)
              [_0x27378a(0x1ae)](_0x27378a(0x1ac))
              [_0x27378a(0x228)](_0x27378a(0x1a6)) !== "" &&
              (skipTo = $(this)
                [_0x27378a(0x1ae)](_0x27378a(0x1ac))
                [_0x27378a(0x228)](_0x27378a(0x1a6))),
            $(this)
              [_0x27378a(0x1ae)]("[data-go-to]")
              [_0x27378a(0x1a9)]("data-go-to") &&
              ((answer = $(this)
                [_0x27378a(0x1ae)](_0x27378a(0x21b))
                ["attr"]("data-go-to")),
              (selections = selections["filter"](
                (_0x31fb17) => _0x31fb17["step"] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x27378a(0x1ba)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x27378a(0x1fa)](
                  (_0x3f464a) => _0x3f464a[_0x27378a(0x216)] === x,
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x27378a(0x1b1)] = x)));
        }),
      $(steps[x])
        [_0x6e9953(0x127)](_0x6e9953(0x1b9))
        ["find"](":input[type=\x22file\x22][required]")
        [_0x6e9953(0x150)](function (_0x217cf6) {
          const _0x43771c = _0x6e9953;
          $(this)[_0x43771c(0x1ad)]() !== ""
            ? (empReqFile = empReqFile[_0x43771c(0x229)](
                (_0x2eed65) => _0x2eed65[_0x43771c(0x15c)] !== _0x217cf6,
              ))
            : (!empReqFile["find"](
                (_0x2bf0f3) => _0x2bf0f3[_0x43771c(0x15c)] === _0x217cf6,
              ) && empReqFile[_0x43771c(0x1ba)]({ input: _0x217cf6 }),
              unfilledArr[_0x43771c(0x1ba)]({
                input: $(this)[_0x43771c(0x1a9)](_0x43771c(0x1eb)),
              })),
            empReqFile[_0x43771c(0x214)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x6e9953(0x127)](_0x6e9953(0x1b9))
        [_0x6e9953(0x127)](_0x6e9953(0x18b))
        [_0x6e9953(0x150)](function (_0x3ba1af) {
          const _0x1867d4 = _0x6e9953;
          (skipTo = undefined),
            $(this)
              [_0x1867d4(0x1ae)]("[data-skip-to]")
              [_0x1867d4(0x228)]("skip-to") !== "" &&
              (skipTo = $(this)
                ["parents"]("[data-skip-to]")
                [_0x1867d4(0x228)](_0x1867d4(0x1a6))),
            $(this)
              ["parents"]("[data-go-to]")
              [_0x1867d4(0x1a9)](_0x1867d4(0x1ff)) &&
              ((answer = $(this)
                ["parents"](_0x1867d4(0x21b))
                [_0x1867d4(0x1a9)](_0x1867d4(0x1ff))),
              (selections = selections["filter"](
                (_0x546bc4) => _0x546bc4[_0x1867d4(0x216)] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x1867d4(0x1ba)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x1867d4(0x1fa)](
                  (_0x32eddd) => _0x32eddd[_0x1867d4(0x216)] === x,
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x1867d4(0x1b1)] = x)));
        }),
      $(steps[x])
        [_0x6e9953(0x127)](".active-answer-card")
        [_0x6e9953(0x127)](_0x6e9953(0x139))
        [_0x6e9953(0x150)](function (_0x348ef9) {
          const _0x56c5eb = _0x6e9953;
          console[_0x56c5eb(0x19d)]($(this)["val"]()),
            $(this)[_0x56c5eb(0x1ad)]() !== null &&
            $(this)[_0x56c5eb(0x1ad)]() !== ""
              ? (empReqSelect = empReqSelect["filter"](
                  (_0x3105a4) => _0x3105a4["input"] !== _0x348ef9,
                ))
              : (!empReqSelect["find"](
                  (_0x4c9867) => _0x4c9867[_0x56c5eb(0x15c)] === _0x348ef9,
                ) && empReqSelect[_0x56c5eb(0x1ba)]({ input: _0x348ef9 }),
                unfilledArr[_0x56c5eb(0x1ba)]({
                  input: $(this)[_0x56c5eb(0x1a9)]("name"),
                })),
            empReqSelect[_0x56c5eb(0x214)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x6e9953(0x127)](".active-answer-card")
        [_0x6e9953(0x127)](_0x6e9953(0x160))
        ["each"](function (_0x14533f) {
          const _0x3c085d = _0x6e9953;
          (skipTo = undefined),
            $(this)
              ["parents"](_0x3c085d(0x1ac))
              [_0x3c085d(0x228)](_0x3c085d(0x1a6)) !== "" &&
              (skipTo = $(this)
                [_0x3c085d(0x1ae)]("[data-skip-to]")
                [_0x3c085d(0x228)]("skip-to")),
            $(this)
              [_0x3c085d(0x1ae)](_0x3c085d(0x21b))
              ["attr"](_0x3c085d(0x1ff)) &&
              ((answer = $(this)
                [_0x3c085d(0x1ae)](_0x3c085d(0x21b))
                ["attr"]("data-go-to")),
              (selections = selections["filter"](
                (_0x59cbe5) => _0x59cbe5[_0x3c085d(0x216)] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0x3c085d(0x1fa)](
                  (_0x3d2f88) => _0x3d2f88["step"] === x,
                )),
                (selections[objIndex][_0x3c085d(0x19f)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x6e9953(0x127)](_0x6e9953(0x1b9))
        [_0x6e9953(0x127)]("textarea[required]")
        [_0x6e9953(0x150)](function (_0x373e23) {
          const _0x3dd1a2 = _0x6e9953;
          let _0x5f270e = $(this)[_0x3dd1a2(0x1ad)]()[_0x3dd1a2(0x214)],
            _0x456390 = $(this)[_0x3dd1a2(0x228)](_0x3dd1a2(0x132))
              ? $(this)[_0x3dd1a2(0x228)](_0x3dd1a2(0x132))
              : 0x0;
          $(this)["val"]() !== "" && _0x5f270e >= _0x456390
            ? (empReqTextarea = empReqTextarea["filter"](
                (_0x107435) => _0x107435[_0x3dd1a2(0x15c)] !== _0x373e23,
              ))
            : (!empReqTextarea[_0x3dd1a2(0x127)](
                (_0x3da2b5) => _0x3da2b5[_0x3dd1a2(0x15c)] === _0x373e23,
              ) && empReqTextarea["push"]({ input: _0x373e23 }),
              unfilledArr[_0x3dd1a2(0x1ba)]({
                input: $(this)[_0x3dd1a2(0x1a9)](_0x3dd1a2(0x1eb)),
              })),
            empReqTextarea[_0x3dd1a2(0x214)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x6e9953(0x127)](".active-answer-card")
        [_0x6e9953(0x127)](_0x6e9953(0x1c9))
        [_0x6e9953(0x150)](function (_0x2ca617) {
          const _0x3b7839 = _0x6e9953;
          (skipTo = undefined),
            $(this)
              [_0x3b7839(0x1ae)](_0x3b7839(0x1ac))
              [_0x3b7839(0x228)](_0x3b7839(0x1a6)) !== "" &&
              (skipTo = $(this)
                [_0x3b7839(0x1ae)](_0x3b7839(0x1ac))
                [_0x3b7839(0x228)](_0x3b7839(0x1a6))),
            $(this)
              [_0x3b7839(0x1ae)]("[data-go-to]")
              [_0x3b7839(0x1a9)](_0x3b7839(0x1ff)) &&
              ((answer = $(this)
                [_0x3b7839(0x1ae)](_0x3b7839(0x21b))
                [_0x3b7839(0x1a9)]("data-go-to")),
              (selections = selections[_0x3b7839(0x229)](
                (_0x48ac79) => _0x48ac79[_0x3b7839(0x216)] !== x,
              )),
              selections[_0x3b7839(0x1ba)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x3b7839(0x1ba)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x3b7839(0x1fa)](
                  (_0x8ea5ff) => _0x8ea5ff[_0x3b7839(0x216)] === x,
                )),
                (selections[objIndex][_0x3b7839(0x19f)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x3b7839(0x1b1)] = x)));
        }),
      $(steps[x])
        ["find"](".active-answer-card")
        [_0x6e9953(0x127)](":input[type=\x22email\x22][required]")
        ["each"](function (_0x412203) {
          const _0x426698 = _0x6e9953;
          $(this)[_0x426698(0x1ad)]() !== ""
            ? validateEmail(
                $(this)[_0x426698(0x1ad)](),
                $(this)["data"](_0x426698(0x130)),
                $(this)[_0x426698(0x1a9)](_0x426698(0x1eb)),
              )
            : ((emailFilled = ![]),
              unfilledArr[_0x426698(0x1ba)]({
                input: $(this)[_0x426698(0x1a9)](_0x426698(0x1eb)),
              }));
        }),
      $(steps[x])
        [_0x6e9953(0x127)](_0x6e9953(0x1b9))
        [_0x6e9953(0x127)](_0x6e9953(0x1a2))
        [_0x6e9953(0x150)](function (_0x2e3972) {
          const _0x2caed4 = _0x6e9953;
          (skipTo = undefined),
            $(this)
              [_0x2caed4(0x1ae)](_0x2caed4(0x1ac))
              [_0x2caed4(0x228)](_0x2caed4(0x1a6)) !== "" &&
              (skipTo = $(this)
                [_0x2caed4(0x1ae)](_0x2caed4(0x1ac))
                ["data"](_0x2caed4(0x1a6))),
            $(this)
              [_0x2caed4(0x1ae)](_0x2caed4(0x21b))
              [_0x2caed4(0x1a9)](_0x2caed4(0x1ff)) &&
              ((answer = $(this)
                [_0x2caed4(0x1ae)]("[data-go-to]")
                ["attr"](_0x2caed4(0x1ff))),
              (selections = selections[_0x2caed4(0x229)](
                (_0x1468bc) => _0x1468bc["step"] !== x,
              )),
              selections[_0x2caed4(0x1ba)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x2caed4(0x1ba)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x2caed4(0x1fa)](
                  (_0x2bc50e) => _0x2bc50e[_0x2caed4(0x216)] === x,
                )),
                (selections[objIndex][_0x2caed4(0x19f)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x2caed4(0x1b1)] = x)));
        });
  }
  $(steps[x])[_0x6e9953(0x127)](_0x6e9953(0x168))["is"](_0x6e9953(0x151)) &&
    ((selArr = []),
    $(steps)
      [_0x6e9953(0x127)](_0x6e9953(0x192))
      [_0x6e9953(0x150)](function (_0x2e789d, _0x54b0d0) {
        const _0x3934db = _0x6e9953;
        selArr["push"]({
          selected: $(this)[_0x3934db(0x228)](_0x3934db(0x1a5)),
        });
      }),
    (selString = []),
    selArr[_0x6e9953(0x15d)]((_0x47096e) =>
      selString[_0x6e9953(0x1ba)](_0x47096e[_0x6e9953(0x1a5)]),
    ),
    (selections = selections[_0x6e9953(0x229)](
      (_0x5dc60b) => _0x5dc60b["step"] !== x,
    )),
    $(steps[x])
      ["find"](".active-answer-card")
      [_0x6e9953(0x127)](":input[type=\x27radio\x27]:checked")
      [_0x6e9953(0x150)](function () {
        const _0x572fb7 = _0x6e9953;
        skipTo = undefined;
        if (
          $(this)
            [_0x572fb7(0x1ae)](_0x572fb7(0x1ac))
            [_0x572fb7(0x228)](_0x572fb7(0x1a6))
        )
          skipTo = $(this)
            ["parents"](_0x572fb7(0x1ac))
            [_0x572fb7(0x228)](_0x572fb7(0x1a6));
        else
          $(this)["data"](_0x572fb7(0x1a6)) &&
            (skipTo = $(this)[_0x572fb7(0x228)](_0x572fb7(0x1a6)));
        if ($(this)[_0x572fb7(0x228)](_0x572fb7(0x226)))
          (answer = $(this)[_0x572fb7(0x1a9)](_0x572fb7(0x1ff))),
            console["log"](answer, selections),
            selections[_0x572fb7(0x1ba)]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0x572fb7(0x1ba)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0x572fb7(0x1fa)](
                (_0xe0b47b) => _0xe0b47b[_0x572fb7(0x216)] === x,
              )),
              (selections[objIndex][_0x572fb7(0x19f)] = parseInt(skipTo) - 0x1),
              (selections[objIndex]["backTo"] = x));
        else
          $(this)
            [_0x572fb7(0x1ae)](_0x572fb7(0x21b))
            [_0x572fb7(0x228)](_0x572fb7(0x226)) &&
            ((answer = $(this)
              [_0x572fb7(0x1ae)](_0x572fb7(0x21b))
              ["data"](_0x572fb7(0x226))),
            selections["push"]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0x572fb7(0x1ba)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0x572fb7(0x1fa)](
                (_0x4e170c) => _0x4e170c[_0x572fb7(0x216)] === x,
              )),
              (selections[objIndex][_0x572fb7(0x19f)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x572fb7(0x1b1)] = x)));
      }),
    logicExtra
      ? ($(steps[x])
          [_0x6e9953(0x127)](_0x6e9953(0x1b9))
          [_0x6e9953(0x127)](_0x6e9953(0x203))
          ["data"](_0x6e9953(0x170)) === !![] ||
          $(steps[x])
            [_0x6e9953(0x127)]("[data-answer][data-radio-skip]:visible")
            ["data"](_0x6e9953(0x170)) === !![]) &&
        skip &&
        selections[_0x6e9953(0x229)](
          (_0x28058d) => _0x28058d[_0x6e9953(0x216)] === x,
        )[_0x6e9953(0x214)] > 0x0 &&
        textareaLength === 0x0 &&
        textInputLength === 0x0 &&
        emailInputLength === 0x0 &&
        checkboxInputLength === 0x0 &&
        setTimeout(
          function () {
            (next = !![]), nextStep(), selectionQuiz();
          },
          $(steps[x])
            [_0x6e9953(0x127)](_0x6e9953(0x1c2))
            [_0x6e9953(0x228)](_0x6e9953(0x185)),
        )
      : $(steps[x])
          ["find"]("[data-radio-skip]:visible")
          [_0x6e9953(0x228)](_0x6e9953(0x170)) === !![] &&
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
            [_0x6e9953(0x127)]("[data-radio-delay]")
            [_0x6e9953(0x228)](_0x6e9953(0x185)),
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
  const _0x3a95b6 = _0x144300;
  $(_0x3a95b6(0x167))[_0x3a95b6(0x1f8)](),
    unfilledArr["length"] > 0x0 &&
      unfilledArr["forEach"](function (_0x2c2d35) {
        const _0x551ffe = _0x3a95b6;
        $(_0x551ffe(0x1de) + _0x2c2d35[_0x551ffe(0x15c)] + "\x22]")
          [_0x551ffe(0x1cf)](_0x551ffe(0x167))
          [_0x551ffe(0x1ed)](),
          $(_0x551ffe(0x1de) + _0x2c2d35["input"] + "\x22]")
            [_0x551ffe(0x1ae)]()
            [_0x551ffe(0x20b)](_0x551ffe(0x167))
            [_0x551ffe(0x1ed)](),
          $("textarea[name=\x22" + _0x2c2d35[_0x551ffe(0x15c)] + "\x22]")
            [_0x551ffe(0x1cf)](_0x551ffe(0x167))
            ["fadeIn"](),
          $(_0x551ffe(0x21a) + _0x2c2d35[_0x551ffe(0x15c)] + "\x22]")
            [_0x551ffe(0x1cf)](_0x551ffe(0x167))
            ["fadeIn"]();
      });
}
function _0x3d10(_0x2dd40e, _0x31a8a3) {
  const _0x3789b2 = _0x3789();
  return (
    (_0x3d10 = function (_0x3d1045, _0x5a4657) {
      _0x3d1045 = _0x3d1045 - 0x115;
      let _0x1ecd0c = _0x3789b2[_0x3d1045];
      return _0x1ecd0c;
    }),
    _0x3d10(_0x2dd40e, _0x31a8a3)
  );
}
function resetInputErrorMessage(_0x556c53) {
  const _0x36914f = _0x144300;
  $(_0x36914f(0x1de) + _0x556c53 + "\x22]")
    [_0x36914f(0x1cf)](_0x36914f(0x167))
    [_0x36914f(0x1f8)](),
    $(_0x36914f(0x1de) + _0x556c53 + "\x22]")
      [_0x36914f(0x1ae)]()
      ["children"]("[data-text=\x22error-message\x22]")
      [_0x36914f(0x1f8)](),
    $(_0x36914f(0x205) + _0x556c53 + "\x22]")
      [_0x36914f(0x1cf)](_0x36914f(0x167))
      [_0x36914f(0x1f8)](),
    $(_0x36914f(0x21a) + _0x556c53 + "\x22]")
      [_0x36914f(0x1cf)](_0x36914f(0x167))
      [_0x36914f(0x1f8)]();
}
function increaseCurstep() {
  const _0x3d312b = _0x144300;
  countCard
    ? ((curStep = curStep + 0x1), $(_0x3d312b(0x12f))["text"](steps["length"]))
    : $(steps[x])[_0x3d312b(0x228)](_0x3d312b(0x131))
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    $(_0x3d312b(0x1ea))[_0x3d312b(0x212)](curStep);
}
function decreaseCurstep() {
  const _0xdbe53 = _0x144300;
  countCard
    ? ((curStep = curStep - 0x1),
      $(_0xdbe53(0x12f))["text"](steps[_0xdbe53(0x214)]))
    : $(steps[x])[_0xdbe53(0x228)](_0xdbe53(0x131))
      ? (curStep = curStep - 0x0)
      : (curStep = curStep - 0x1),
    $(_0xdbe53(0x1ea))["text"](curStep);
}
$(_0x144300(0x174))["on"](_0x144300(0x1c3), function (_0x4da6a0) {
  const _0x4f6ba5 = _0x144300;
  fill
    ? ($(this)["data"](_0x4f6ba5(0x15a))
        ? $(this)[_0x4f6ba5(0x1ad)]($(this)[_0x4f6ba5(0x228)](_0x4f6ba5(0x15a)))
        : ($(this)[_0x4f6ba5(0x1ad)](_0x4f6ba5(0x20c)),
          $(this)[_0x4f6ba5(0x212)](_0x4f6ba5(0x20c))),
      $(_0x4f6ba5(0x165))[_0x4f6ba5(0x161)](),
      $(_0x4f6ba5(0x210))[_0x4f6ba5(0x214)] > 0x0 &&
        grecaptcha[_0x4f6ba5(0x1af)]()[_0x4f6ba5(0x214)] === 0x0 &&
        (form["find"](_0x4f6ba5(0x174))[_0x4f6ba5(0x212)](oldSubmitText),
        form[_0x4f6ba5(0x127)](_0x4f6ba5(0x174))[_0x4f6ba5(0x1ad)](
          oldSubmitText,
        )),
      customError && $(_0x4f6ba5(0x167))[_0x4f6ba5(0x1f8)]())
    : customError && displayErrorMessage();
}),
  $(_0x144300(0x174))["on"](_0x144300(0x1c3), function (_0x23a7b4) {
    const _0x5880b9 = _0x144300;
    console[_0x5880b9(0x19d)](_0x5880b9(0x1d0)),
      $(this)["data"]("redirect") && (redirectTo = $(this)["data"]("redirect")),
      !$(this)[_0x5880b9(0x228)](_0x5880b9(0x1f7)) &&
        (newTab = $(this)[_0x5880b9(0x228)](_0x5880b9(0x1f7))),
      (successCard = $(this)["data"](_0x5880b9(0x14d))),
      _0x23a7b4[_0x5880b9(0x158)](),
      _0x23a7b4["stopPropagation"](),
      logicExtra &&
        ($(this)[_0x5880b9(0x209)](_0x5880b9(0x1f2), !![]),
        $(steps)
          [_0x5880b9(0x127)](":input")
          [_0x5880b9(0x209)](_0x5880b9(0x147), ![])),
      localStorage[_0x5880b9(0x197)]("filledInput"),
      fill
        ? ($(this)[_0x5880b9(0x228)](_0x5880b9(0x15a))
            ? $(this)[_0x5880b9(0x1ad)]($(this)["data"](_0x5880b9(0x15a)))
            : ($(this)[_0x5880b9(0x1ad)]("Please\x20wait..."),
              $(this)[_0x5880b9(0x212)](_0x5880b9(0x20c))),
          $(_0x5880b9(0x165))[_0x5880b9(0x161)](),
          $(_0x5880b9(0x210))["length"] > 0x0 &&
            grecaptcha[_0x5880b9(0x1af)]()[_0x5880b9(0x214)] === 0x0 &&
            (form[_0x5880b9(0x127)]("[data-form=\x22submit-btn\x22]")[
              _0x5880b9(0x212)
            ](oldSubmitText),
            form[_0x5880b9(0x127)]("[data-form=\x22submit-btn\x22]")["val"](
              oldSubmitText,
            )),
          customError && $(_0x5880b9(0x167))[_0x5880b9(0x1f8)]())
        : customError && displayErrorMessage();
  });
function nextStep() {
  const _0x53cc8c = _0x144300;
  customError
    ? ($(_0x53cc8c(0x167))[_0x53cc8c(0x1f8)](),
      fill
        ? (x++,
          increaseCurstep(),
          (progress = x),
          x <= steps[_0x53cc8c(0x214)] - 0x1 &&
            (updateStep(), memory && saveFilledInput()))
        : displayErrorMessage())
    : (x++,
      increaseCurstep(),
      x > progress && (progress = x),
      x <= steps[_0x53cc8c(0x214)] - 0x1 &&
        (updateStep(), memory && saveFilledInput())),
    andLogic();
}
function backStep() {
  const _0x34da61 = _0x144300;
  customError && $(_0x34da61(0x167))[_0x34da61(0x1f8)](),
    decreaseCurstep(),
    x > 0x0 &&
      ($(progressbar[x])[_0x34da61(0x1cb)](_0x34da61(0x18f)),
      selections[_0x34da61(0x229)](
        (_0x8e8980) => _0x8e8980[_0x34da61(0x19f)] === x,
      )[_0x34da61(0x214)] > 0x0
        ? (x = parseInt(
            getSafe(
              () =>
                selections[_0x34da61(0x229)](
                  (_0x4344a8) => _0x4344a8[_0x34da61(0x19f)] === x,
                )[0x0][_0x34da61(0x1b1)],
            ),
          ))
        : x--,
      updateStep()),
    ($(steps[x])
      ["find"](_0x34da61(0x203))
      [_0x34da61(0x228)](_0x34da61(0x170)) === !![] ||
      $(steps[x])
        [_0x34da61(0x127)](_0x34da61(0x1b9))
        [_0x34da61(0x127)](_0x34da61(0x203))
        [_0x34da61(0x228)](_0x34da61(0x170)) === !![] ||
      $(steps[x])
        ["find"]("[data-answer][data-radio-skip]:visible")
        [_0x34da61(0x228)](_0x34da61(0x170)) === !![]) &&
      ((all_data = all_data[_0x34da61(0x229)](
        (_0x38a77c) =>
          _0x38a77c[_0x34da61(0x1a3)] !==
          $(steps[x])
            [_0x34da61(0x127)](_0x34da61(0x1f6))
            ["attr"](_0x34da61(0x1eb)),
      )),
      $(
        _0x34da61(0x118) +
          $(steps[x])
            [_0x34da61(0x127)](_0x34da61(0x1f6))
            [_0x34da61(0x1a9)]("name") +
          "\x22]",
      )[_0x34da61(0x1f8)](),
      $(steps[x])
        [_0x34da61(0x127)](_0x34da61(0x1aa))
        ["prop"](_0x34da61(0x200), ![]),
      $(steps[x])
        [_0x34da61(0x127)](_0x34da61(0x21c))
        [_0x34da61(0x1cb)](_0x34da61(0x221)),
      validation());
}
weightedSelectionRange &&
  $(_0x144300(0x1ce))[_0x144300(0x150)](function () {
    const _0x2ea654 = _0x144300;
    $(this)[_0x2ea654(0x16f)](
      _0x2ea654(0x1ca) + $(this)["data"]("selection") + _0x2ea654(0x22d),
    );
  });
function selectionQuiz() {
  const _0x512a49 = _0x144300;
  if ($(this)[_0x512a49(0x127)](_0x512a49(0x237))) {
    $(_0x512a49(0x1ce))[_0x512a49(0x1f8)](),
      $("[data-selection-weight]")[_0x512a49(0x1f8)]();
    if (weightedSelection) {
      (selTotal = 0x0),
        selArr["forEach"](function (_0x465015) {
          selTotal = selTotal + _0x465015["selected"];
        }),
        $(_0x512a49(0x1e7))["text"](selTotal);
      if ($(_0x512a49(0x14c) + selTotal + "\x22]")[_0x512a49(0x214)] > 0x0)
        $(_0x512a49(0x14c) + selTotal + "\x22]")[_0x512a49(0x1ed)]();
      else
        $(_0x512a49(0x172) + selTotal + ")")
          ? $(_0x512a49(0x172) + selTotal + ")")
              [_0x512a49(0x1db)](_0x512a49(0x1ce))
              ["eq"](0x0)
              ["show"]()
          : $(_0x512a49(0x134))[_0x512a49(0x1ed)]();
    } else {
      let _0x41627e = -0x1;
      $(_0x512a49(0x1ce))[_0x512a49(0x150)](function (_0x2bf8cb) {
        const _0x2c9c34 = _0x512a49;
        $($(_0x2c9c34(0x1ce))[_0x2bf8cb])
          [_0x2c9c34(0x228)]("selection")
          ["includes"](selString[_0x2c9c34(0x129)]()) &&
          (_0x41627e = _0x2bf8cb);
      }),
        _0x41627e > -0x1
          ? $($("[data-selection]")[_0x41627e])["fadeIn"]()
          : $(_0x512a49(0x134))[_0x512a49(0x1ed)]();
    }
  }
}
function triggerInputAllData() {
  const _0x1ffb29 = _0x144300;
  if (savedFilledInput && memory)
    savedFilledInput["forEach"]((_0x45f42c) => {
      const _0x544160 = _0x3d10;
      var _0x54f205 = $(
          _0x544160(0x1de) +
            _0x45f42c["inputName"] +
            _0x544160(0x1c8) +
            _0x45f42c[_0x544160(0x215)] +
            "\x22]",
        ),
        _0x26527c = $(
          "input[name=\x22" + _0x45f42c[_0x544160(0x1cd)] + "\x22]",
        );
      console["log"](
        _0x54f205[_0x544160(0x1ae)](_0x544160(0x1a1))["data"]("radio-skip"),
      );
      if (_0x54f205[_0x544160(0x1a9)](_0x544160(0x1bc)) !== _0x544160(0x1e0)) {
        if (
          _0x54f205[_0x544160(0x1a9)](_0x544160(0x1bc)) === _0x544160(0x123) &&
          !_0x54f205[_0x544160(0x1ae)](_0x544160(0x1a1))[_0x544160(0x228)](
            "radio-skip",
          )
        )
          _0x54f205["click"](),
            _0x54f205[_0x544160(0x1cf)](".w-radio-input")[_0x544160(0x236)](
              "w--redirected-checked",
            ),
            _0x54f205[_0x544160(0x1d9)](_0x544160(0x15c));
        else
          _0x45f42c["value"] === "on"
            ? (_0x26527c[_0x544160(0x1c3)](),
              _0x26527c[_0x544160(0x1cf)](_0x544160(0x1e8))["addClass"](
                _0x544160(0x221),
              ),
              _0x26527c[_0x544160(0x1d9)](_0x544160(0x15c)))
            : (console["log"](_0x45f42c[_0x544160(0x1cd)], _0x45f42c["value"]),
              _0x26527c[_0x544160(0x1ad)](_0x45f42c[_0x544160(0x215)]),
              _0x26527c["val"](_0x45f42c["value"]),
              $("option[value=\x22" + _0x45f42c[_0x544160(0x215)] + "\x22]")[
                "prop"
              ]("selected", !![]),
              _0x26527c["trigger"](_0x544160(0x15c)),
              _0x26527c[_0x544160(0x1d9)](_0x544160(0x223)));
      }
    });
  else
    _params &&
      (getParams(),
      searchQ[_0x1ffb29(0x15d)]((_0x13defc) => {
        const _0x2d4f96 = _0x1ffb29;
        if (
          $(
            "input[name=\x22" +
              _0x13defc[_0x2d4f96(0x1cd)] +
              _0x2d4f96(0x1c8) +
              _0x13defc["value"] +
              "\x22]",
          )["attr"](_0x2d4f96(0x1bc)) !== _0x2d4f96(0x1e0)
        ) {
          if (
            $(
              _0x2d4f96(0x1de) +
                _0x13defc["key"] +
                _0x2d4f96(0x1c8) +
                _0x13defc[_0x2d4f96(0x1ad)] +
                "\x22]",
            )["attr"](_0x2d4f96(0x1bc)) === _0x2d4f96(0x123)
          )
            $(
              _0x2d4f96(0x1de) +
                _0x13defc["key"] +
                _0x2d4f96(0x1c8) +
                _0x13defc[_0x2d4f96(0x1ad)] +
                "\x22]",
            )[_0x2d4f96(0x1c3)](),
              $(
                _0x2d4f96(0x1de) +
                  _0x13defc[_0x2d4f96(0x19b)] +
                  _0x2d4f96(0x1c8) +
                  _0x13defc[_0x2d4f96(0x1ad)] +
                  "\x22]",
              )
                [_0x2d4f96(0x1cf)](_0x2d4f96(0x1f4))
                [_0x2d4f96(0x236)](_0x2d4f96(0x221)),
              $(
                _0x2d4f96(0x1de) +
                  _0x13defc["key"] +
                  _0x2d4f96(0x1c8) +
                  _0x13defc[_0x2d4f96(0x1ad)] +
                  "\x22]",
              )[_0x2d4f96(0x1d9)]("input");
          else
            _0x13defc[_0x2d4f96(0x1ad)] === "on"
              ? ($(_0x2d4f96(0x1de) + _0x13defc[_0x2d4f96(0x19b)] + "\x22]")[
                  _0x2d4f96(0x1c3)
                ](),
                $(_0x2d4f96(0x1de) + _0x13defc[_0x2d4f96(0x19b)] + "\x22]")
                  [_0x2d4f96(0x1cf)](_0x2d4f96(0x1e8))
                  [_0x2d4f96(0x236)](_0x2d4f96(0x221)),
                $(_0x2d4f96(0x1de) + _0x13defc[_0x2d4f96(0x19b)] + "\x22]")[
                  _0x2d4f96(0x1d9)
                ](_0x2d4f96(0x15c)))
              : ($(_0x2d4f96(0x1de) + _0x13defc[_0x2d4f96(0x19b)] + "\x22]")[
                  _0x2d4f96(0x1ad)
                ](_0x13defc[_0x2d4f96(0x1ad)]),
                $(_0x2d4f96(0x205) + _0x13defc[_0x2d4f96(0x19b)] + "\x22]")[
                  "val"
                ](_0x13defc[_0x2d4f96(0x1ad)]),
                $(_0x2d4f96(0x21a) + _0x13defc[_0x2d4f96(0x19b)] + "\x22]")
                  [_0x2d4f96(0x127)](
                    _0x2d4f96(0x16d) + _0x13defc[_0x2d4f96(0x1ad)] + "\x22]",
                  )
                  [_0x2d4f96(0x209)]("selected", !![]),
                $(_0x2d4f96(0x1de) + _0x13defc["key"] + "\x22]")[
                  _0x2d4f96(0x1d9)
                ](_0x2d4f96(0x15c)),
                $(_0x2d4f96(0x1de) + _0x13defc[_0x2d4f96(0x19b)] + "\x22]")[
                  _0x2d4f96(0x1d9)
                ](_0x2d4f96(0x223)));
        }
      }));
}
$(_0x144300(0x1da))["on"](_0x144300(0x1c3), function () {
  (next = !![]), nextStep(), selectionQuiz();
}),
  $(_0x144300(0x1a4))["on"](_0x144300(0x1c3), function () {
    (next = ![]), (back = !![]), backStep();
  }),
  $(steps)
    [_0x144300(0x127)](_0x144300(0x183))
    [_0x144300(0x124)](_0x144300(0x201))
    ["on"](_0x144300(0x15c), function (_0x51e71a) {
      validation(), andLogic();
    }),
  $(steps)
    [_0x144300(0x127)](_0x144300(0x1aa))
    ["on"]("click", function () {
      (skip = !![]), validation();
    });
$(_0x144300(0x1cc))[_0x144300(0x228)](_0x144300(0x180))
  ? $(_0x144300(0x196))[_0x144300(0x1cb)](_0x144300(0x133))
  : $("[data-form=\x22custom-progress-indicator\x22]")[_0x144300(0x236)](
      "disabled",
    );
function clickableIndicator() {
  const _0x184fb2 = _0x144300;
  $(_0x184fb2(0x16c))[_0x184fb2(0x228)]("clickable") &&
    ($(_0x184fb2(0x11c))["removeClass"]("current"),
    $(_0x184fb2(0x16c))[_0x184fb2(0x228)](_0x184fb2(0x180))
      ? ((x = $(this)[_0x184fb2(0x22e)]()), updateStep())
      : $(this)["index"]() <= progress &&
        ((x = $(this)[_0x184fb2(0x22e)]()), updateStep())),
    $(_0x184fb2(0x1ea))[_0x184fb2(0x212)](x + 0x1);
}
$(_0x144300(0x196))["on"](_0x144300(0x1c3), clickableIndicator);
$(_0x144300(0x165))[_0x144300(0x228)](_0x144300(0x1bf)) &&
  ($("[data-go-to]")[_0x144300(0x150)](function () {
    const _0x1bcd76 = _0x144300;
    $(this)[_0x1bcd76(0x16f)](
      _0x1bcd76(0x125),
      $(this)[_0x1bcd76(0x228)](_0x1bcd76(0x226)),
    );
  }),
  $(_0x144300(0x128))[_0x144300(0x150)](function () {
    const _0x27e655 = _0x144300;
    $(this)[_0x27e655(0x16f)](
      _0x27e655(0x217),
      $(this)[_0x27e655(0x228)](_0x27e655(0x169)),
    );
  }));
function resetFormly() {
  const _0x63bb = _0x144300;
  $(_0x63bb(0x165))[_0x63bb(0x1d9)](_0x63bb(0x140)),
    $(_0x63bb(0x165))
      [_0x63bb(0x1ae)]()
      [_0x63bb(0x127)](_0x63bb(0x1c6))
      ["hide"](),
    (x = 0x0),
    updateStep(),
    $(_0x63bb(0x165))["show"](),
    $("[data-form=\x22submit-btn\x22]")[_0x63bb(0x212)](oldSubmitText),
    $("[data-form=\x22submit-btn\x22]")["val"](oldSubmitText),
    $("[data-text=\x22current-step\x22]")[_0x63bb(0x212)](0x1),
    $(_0x63bb(0x165))
      [_0x63bb(0x127)](_0x63bb(0x13f))
      ["siblings"](_0x63bb(0x1e8))
      ["removeClass"](_0x63bb(0x221));
}
$(document)["ajaxComplete"](function (_0x197f45, _0xa45161, _0x5ee4cf) {
  const _0x3c010a = _0x144300;
  if (_0x5ee4cf["url"][_0x3c010a(0x12c)](_0x3c010a(0x1ee))) {
    const _0x1d4b6b = _0xa45161[_0x3c010a(0x184)] === 0xc8,
      _0x10be13 = _0x3c010a(0x1ec);
    redirectTo &&
      _0x1d4b6b &&
      (newTab
        ? window["open"](redirectTo, _0x3c010a(0x17a))
        : setTimeout(() => {
            location["href"] = redirectTo;
          }, redirectDelay)),
      _0x1d4b6b &&
        successCard !== "" &&
        $("[data-success-card=\x22" + successCard + "\x22]")[
          _0x3c010a(0x1ed)
        ](),
      _0x1d4b6b &&
        formReset &&
        setTimeout(() => {
          resetFormly();
        }, resetDelay),
      !_0x1d4b6b &&
        ($(_0x3c010a(0x174))[_0x3c010a(0x1ad)]("Please\x20wait..."),
        $(_0x3c010a(0x174))["text"](_0x3c010a(0x20c)));
  }
}),
  $(_0x144300(0x1b2))["on"]("click", function () {
    const _0x12fab8 = _0x144300;
    var _0x5e47d7 = $(this)
      [_0x12fab8(0x1db)]()
      [_0x12fab8(0x127)](_0x12fab8(0x17e))
      ["data"](_0x12fab8(0x1b8));
    setTimeout(function () {
      $("input[name=\x22" + _0x5e47d7 + "\x22]")["focus"]();
    }, 0x64),
      (back = !![]),
      (x = $(this)[_0x12fab8(0x228)](_0x12fab8(0x13e)) - 0x1),
      updateStep(),
      countCard
        ? ((curStep = x + 0x1),
          $("[data-text=\x22total-steps\x22]")[_0x12fab8(0x212)](
            steps["length"],
          ))
        : $(steps[x])[_0x12fab8(0x228)](_0x12fab8(0x131))
          ? (curStep = x + 0x0)
          : (curStep = x + 0x1),
      $(_0x12fab8(0x1ea))[_0x12fab8(0x212)](curStep),
      (back = ![]);
  }),
  $(_0x144300(0x15f))["on"](_0x144300(0x1c3), function () {
    const _0x511ded = _0x144300;
    $(_0x511ded(0x165))[_0x511ded(0x1d9)](_0x511ded(0x140));
    let _0x533121 = $(this);
    $(this)[_0x511ded(0x212)]("Please\x20wait..."),
      setTimeout(function () {
        const _0x27d7eb = _0x511ded;
        $(_0x533121)[_0x27d7eb(0x212)](oldResetText),
          $(_0x533121)["parents"](_0x27d7eb(0x1c6))[_0x27d7eb(0x1f8)](),
          (x = 0x0),
          updateStep(),
          $(_0x27d7eb(0x165))["show"](),
          $(_0x27d7eb(0x174))["text"](oldSubmitText),
          $(_0x27d7eb(0x174))[_0x27d7eb(0x1ad)](oldSubmitText),
          $(_0x533121)["val"](oldSubmitText),
          $(_0x27d7eb(0x1ea))[_0x27d7eb(0x212)](0x1),
          $(_0x27d7eb(0x165))
            [_0x27d7eb(0x127)](_0x27d7eb(0x13f))
            [_0x27d7eb(0x1cf)](_0x27d7eb(0x1e8))
            [_0x27d7eb(0x1cb)]("w--redirected-checked");
      }, resetDelay);
  }),
  $(_0x144300(0x1e3))["on"](_0x144300(0x15e), function (_0x67511b) {
    const _0x1ebbf4 = _0x144300;
    _0x67511b[_0x1ebbf4(0x1df)] === 0xd &&
      ($(_0x1ebbf4(0x13a))[_0x1ebbf4(0x228)]("enter") && fill
        ? (totalSteps > curStep && $(_0x1ebbf4(0x1da))[0x0]["click"](),
          _0x67511b[_0x1ebbf4(0x158)](),
          _0x67511b[_0x1ebbf4(0x149)]())
        : (_0x67511b["preventDefault"](), _0x67511b[_0x1ebbf4(0x149)]()));
  }),
  $("body")[_0x144300(0x1bb)](function (_0x34dcc7) {
    const _0x41b31d = _0x144300;
    (_0x34dcc7["metaKey"] || _0x34dcc7[_0x41b31d(0x11d)]) &&
      _0x34dcc7["keyCode"] == 0xd &&
      (x >= steps["length"] - 0x1 && fill
        ? $(steps[x])[_0x41b31d(0x127)](_0x41b31d(0x159))["click"]()
        : (event["preventDefault"](), event[_0x41b31d(0x149)]()));
  }),
  $(_0x144300(0x1c9))[_0x144300(0x15e)](function (_0x4aca96) {
    const _0x28db53 = _0x144300;
    $(this)["focus"](),
      _0x4aca96[_0x28db53(0x19b)] == _0x28db53(0x154) &&
        (_0x4aca96[_0x28db53(0x158)](), _0x4aca96[_0x28db53(0x149)]()),
      _0x4aca96[_0x28db53(0x1f1)] &&
        _0x4aca96[_0x28db53(0x19b)] == "Enter" &&
        $(this)[_0x28db53(0x1ad)]($(this)["val"]() + "\x0a");
  }),
  $(_0x144300(0x165))
    ["find"](_0x144300(0x183))
    ["on"]("change", function () {
      const _0x57bdc4 = _0x144300;
      (all_data = all_data[_0x57bdc4(0x229)](
        (_0x433f36) => _0x433f36[_0x57bdc4(0x1a3)] !== $(this)["attr"]("name"),
      )),
        $(this)[_0x57bdc4(0x1a9)]("type") === _0x57bdc4(0x171)
          ? $(this)["is"](_0x57bdc4(0x151))
            ? all_data[_0x57bdc4(0x1ba)]({
                field: $(this)[_0x57bdc4(0x1a9)](_0x57bdc4(0x1eb)),
                value: $(this)[_0x57bdc4(0x1cf)]("span")["text"](),
              })
            : $(
                _0x57bdc4(0x118) +
                  $(this)[_0x57bdc4(0x1a9)](_0x57bdc4(0x1eb)) +
                  "\x22]",
              )[_0x57bdc4(0x1f8)]()
          : (all_data[_0x57bdc4(0x1ba)]({
              field: $(this)[_0x57bdc4(0x1a9)](_0x57bdc4(0x1eb)),
              value: $(this)[_0x57bdc4(0x1ad)](),
            }),
            $(this)["val"]() !== "" &&
              resetInputErrorMessage(
                $(this)[_0x57bdc4(0x1a9)](_0x57bdc4(0x1eb)),
              )),
        all_data["forEach"](function (_0x1b55e3) {
          const _0x43451d = _0x57bdc4;
          $(_0x43451d(0x118) + _0x1b55e3[_0x43451d(0x1a3)] + "\x22]")["show"](),
            $(_0x43451d(0x118) + _0x1b55e3[_0x43451d(0x1a3)] + "\x22]")[
              _0x43451d(0x212)
            ](_0x1b55e3["value"]);
        });
    }),
  $("[data-form=\x22multistep\x22]")
    ["find"](_0x144300(0x1c9))
    ["on"](_0x144300(0x223), function () {
      const _0x5830a8 = _0x144300;
      $(this)[_0x5830a8(0x1ad)]() !== "" &&
        resetInputErrorMessage($(this)["attr"](_0x5830a8(0x1eb))),
        (all_data = all_data[_0x5830a8(0x229)](
          (_0x40e393) =>
            _0x40e393["field"] !== $(this)[_0x5830a8(0x1a9)](_0x5830a8(0x1eb)),
        )),
        all_data["push"]({
          field: $(this)["attr"]("name"),
          value: $(this)["val"](),
        }),
        all_data[_0x5830a8(0x15d)](function (_0x3d72b6) {
          const _0x218de6 = _0x5830a8;
          $(_0x218de6(0x118) + _0x3d72b6[_0x218de6(0x1a3)] + "\x22]")["show"](),
            $("[data-input-field=\x22" + _0x3d72b6[_0x218de6(0x1a3)] + "\x22]")[
              _0x218de6(0x212)
            ](_0x3d72b6[_0x218de6(0x215)]);
        });
    }),
  $(_0x144300(0x165))
    ["find"](_0x144300(0x160))
    ["on"](_0x144300(0x223), function () {
      const _0xb76169 = _0x144300;
      $(this)[_0xb76169(0x1ad)]() !== "" &&
        resetInputErrorMessage($(this)[_0xb76169(0x1a9)](_0xb76169(0x1eb)));
      var _0x66e28d = $(this)[_0xb76169(0x228)](_0xb76169(0x1e9));
      (all_data = all_data["filter"](
        (_0x2c4658) =>
          _0x2c4658[_0xb76169(0x1a3)] !==
          $(this)[_0xb76169(0x1a9)](_0xb76169(0x1eb)),
      )),
        all_data[_0xb76169(0x1ba)]({
          field: $(this)["attr"](_0xb76169(0x1eb)),
          value: _0x66e28d
            ? $(this)[_0xb76169(0x127)](_0xb76169(0x12b))[_0xb76169(0x212)]()
            : $(this)[_0xb76169(0x1ad)](),
        }),
        all_data[_0xb76169(0x15d)](function (_0x42ea60) {
          const _0x3aa518 = _0xb76169;
          $(_0x3aa518(0x118) + _0x42ea60[_0x3aa518(0x1a3)] + "\x22]")[
            _0x3aa518(0x17b)
          ](),
            $(_0x3aa518(0x118) + _0x42ea60[_0x3aa518(0x1a3)] + "\x22]")["text"](
              _0x42ea60[_0x3aa518(0x215)],
            );
        });
    }),
  updateStep(),
  triggerInputAllData(),
  $("[data-cms-select=cms]")[_0x144300(0x150)](function () {
    const _0x16748d = _0x144300,
      _0x5819a2 = $(this)["find"](_0x16748d(0x117)),
      _0x26e1ca = [];
    console[_0x16748d(0x19d)](_0x26e1ca),
      _0x5819a2[_0x16748d(0x150)](function () {
        const _0x525876 = _0x16748d;
        _0x26e1ca["push"]($(this)[_0x525876(0x212)]()[_0x525876(0x1d6)]());
      });
    const _0x340325 = $(this)["siblings"](_0x16748d(0x163));
    $[_0x16748d(0x150)](_0x26e1ca, function (_0x53c48c, _0x436185) {
      const _0x4f4707 = _0x16748d,
        _0x46d4be = $(_0x4f4707(0x1ab))
          ["val"](_0x436185)
          [_0x4f4707(0x212)](_0x436185);
      _0x340325[_0x4f4707(0x16f)](_0x46d4be);
    });
  });
function cloneRemove() {
  const _0xab1aeb = _0x144300;
  $(_0xab1aeb(0x198))[_0xab1aeb(0x150)](function () {
    const _0x5d1863 = _0xab1aeb;
    $(this)[_0x5d1863(0x127)]("[data-clone]")[_0x5d1863(0x214)] < 0x2
      ? $(this)[_0x5d1863(0x127)](_0x5d1863(0x18a))[_0x5d1863(0x1f8)]()
      : $(this)[_0x5d1863(0x127)](_0x5d1863(0x18a))[_0x5d1863(0x17b)]();
  });
}
function cloneRemoveInput() {
  const _0x6fbd8b = _0x144300;
  $(_0x6fbd8b(0x19a))[_0x6fbd8b(0x150)](function () {
    const _0x3e0e11 = _0x6fbd8b;
    $(this)[_0x3e0e11(0x127)](_0x3e0e11(0x191))[_0x3e0e11(0x214)] < 0x2
      ? $(this)
          [_0x3e0e11(0x127)]("[data-form=\x22remove-input-clone\x22]")
          ["hide"]()
      : $(this)["find"]("[data-form=\x22remove-input-clone\x22]")["show"]();
  });
}
$(_0x144300(0x18a))["on"](_0x144300(0x1c3), function () {
  const _0x5d3f71 = _0x144300,
    _0x2da5eb =
      $(this)[_0x5d3f71(0x1ae)](_0x5d3f71(0x1e1))["length"] > 0x0
        ? $(this)["parents"]("[data-clone]")[_0x5d3f71(0x22e)]()
        : $(this)[_0x5d3f71(0x1ae)](_0x5d3f71(0x189))[_0x5d3f71(0x22e)](),
    _0x43cb94 =
      $(this)[_0x5d3f71(0x1ae)]("[data-clone]")[_0x5d3f71(0x214)] > 0x0
        ? $(this)
            [_0x5d3f71(0x1ae)](_0x5d3f71(0x1e1))
            [_0x5d3f71(0x228)](_0x5d3f71(0x218))
        : $(this)
            [_0x5d3f71(0x1ae)]("[data-display]")
            [_0x5d3f71(0x228)]("display");
  $(_0x5d3f71(0x227) + _0x43cb94 + "\x22]")
    ["eq"](_0x2da5eb)
    [_0x5d3f71(0x16a)](),
    $(_0x5d3f71(0x1b3) + _0x43cb94 + "\x22]")
      ["eq"](_0x2da5eb)
      ["remove"](),
    cloneRemove(),
    validation();
}),
  $(_0x144300(0x20a))["on"](_0x144300(0x1c3), function () {
    const _0x479ee6 = _0x144300;
    let _0x36db1e = $(this)["siblings"]()[_0x479ee6(0x1a9)]("name");
    $(this)[_0x479ee6(0x1db)](_0x479ee6(0x191))[_0x479ee6(0x16a)](),
      $(_0x479ee6(0x118) + _0x36db1e + "\x22]")
        [_0x479ee6(0x1db)](_0x479ee6(0x173))
        [_0x479ee6(0x16a)](),
      cloneRemove(),
      validation();
  }),
  $("[data-add-new]")["on"](_0x144300(0x1c3), function () {
    const _0x5f3277 = _0x144300;
    let _0x4b7ebb = $(this)["data"]("add-new");
    var _0x3babe8 = $(_0x5f3277(0x227) + _0x4b7ebb + "\x22]")
        ["eq"](0x0)
        [_0x5f3277(0x218)](!![]),
      _0x3bbe5b = $("[data-display=\x22" + _0x4b7ebb + "\x22]")
        ["eq"](0x0)
        ["clone"](!![]);
    let _0x17e95a = "";
    $(this)[_0x5f3277(0x127)](_0x5f3277(0x18a))[_0x5f3277(0x17b)](),
      cloneRemove(),
      _0x3babe8["find"](_0x5f3277(0x191))
        ["find"](_0x5f3277(0x15c))
        [_0x5f3277(0x1ad)](""),
      _0x3babe8[_0x5f3277(0x127)](_0x5f3277(0x191))
        [_0x5f3277(0x124)](_0x5f3277(0x1c4))
        [_0x5f3277(0x16a)](),
      _0x3bbe5b[_0x5f3277(0x127)](_0x5f3277(0x173))
        [_0x5f3277(0x124)](_0x5f3277(0x1c4))
        [_0x5f3277(0x16a)](),
      _0x3babe8[_0x5f3277(0x127)](_0x5f3277(0x15c))["each"](function () {
        const _0x19ed91 = _0x5f3277;
        if (
          $(this)[_0x19ed91(0x14f)](_0x19ed91(0x191))[_0x19ed91(0x214)] > 0x0
        ) {
          let _0x4996cb = 0x0;
          const _0x3d6fb8 = $(this)
            [_0x19ed91(0x14f)](_0x19ed91(0x191))
            [_0x19ed91(0x228)](_0x19ed91(0x179));
          console[_0x19ed91(0x19d)](
            $(this)
              [_0x19ed91(0x14f)]("[data-clone-input]")
              [_0x19ed91(0x228)]("clone-input"),
            this["name"],
          ),
            $(_0x19ed91(0x220) + _0x3d6fb8 + _0x19ed91(0x234))[
              _0x19ed91(0x150)
            ](function () {
              const _0x49bcdb = _0x19ed91,
                _0xddcee5 = $(this)[_0x49bcdb(0x1a9)](_0x49bcdb(0x1eb));
              if (_0xddcee5 && _0xddcee5[_0x49bcdb(0x1b7)](_0x49bcdb(0x175))) {
                const _0x4037e1 = parseInt(
                  _0xddcee5[_0x49bcdb(0x18d)]("-")[0x1],
                );
                !isNaN(_0x4037e1) &&
                  _0x4037e1 > _0x4996cb &&
                  (_0x4996cb = _0x4037e1);
              }
            }),
            _0x4996cb++,
            (_0x17e95a = this[_0x19ed91(0x1eb)] + "-" + _0x4996cb),
            console["log"](_0x3d6fb8, _0x17e95a);
        } else
          _0x17e95a =
            this[_0x19ed91(0x1eb)] +
            "-" +
            (parseInt(
              $(_0x19ed91(0x227) + _0x4b7ebb + "\x22]")
                ["last"]()
                [_0x19ed91(0x22e)](),
            ) +
              0x1);
        $(this)[_0x19ed91(0x1ad)](""),
          $(this)["attr"](_0x19ed91(0x1eb), _0x17e95a),
          $(this)[_0x19ed91(0x1a9)]("data-name", _0x17e95a);
      }),
      _0x3bbe5b[_0x5f3277(0x127)](_0x5f3277(0x17e))[_0x5f3277(0x150)](
        function () {
          const _0x4bb6eb = _0x5f3277;
          if ($(this)[_0x4bb6eb(0x228)](_0x4bb6eb(0x1b8))) {
            let _0x4e9132 = 0x0;
            const _0x5cd167 = $(this)
              [_0x4bb6eb(0x228)](_0x4bb6eb(0x1b8))
              [_0x4bb6eb(0x18d)]("-")[0x0];
            $(
              _0x4bb6eb(0x1b3) +
                _0x4b7ebb +
                _0x4bb6eb(0x153) +
                _0x5cd167 +
                "\x22]",
            )["each"](function () {
              const _0x53168b = _0x4bb6eb,
                _0x1d004c = $(this)[_0x53168b(0x1a9)]("data-input-field"),
                _0x4b2a89 = parseInt(_0x1d004c["split"]("-")[0x1]);
              !isNaN(_0x4b2a89) &&
                _0x4b2a89 > _0x4e9132 &&
                (_0x4e9132 = _0x4b2a89);
            }),
              _0x4e9132++;
            const _0x2b4cbf = _0x5cd167 + "-" + _0x4e9132;
            console["log"](_0x2b4cbf),
              $(this)[_0x4bb6eb(0x1a9)]("data-input-field", _0x2b4cbf);
          }
        },
      ),
      $(_0x5f3277(0x1ef) + _0x4b7ebb + "\x22]")[_0x5f3277(0x16f)](_0x3babe8),
      $(_0x5f3277(0x115) + _0x4b7ebb + "\x22]")[_0x5f3277(0x16f)](_0x3bbe5b),
      $(_0x5f3277(0x186) + _0x4b7ebb + "\x22]")[_0x5f3277(0x150)](function () {
        const _0x1c4b15 = _0x5f3277;
        $(this)[_0x1c4b15(0x212)](
          $(this)
            [_0x1c4b15(0x1ae)]("[data-clone=\x22" + _0x4b7ebb + "\x22]")
            ["index"]() + 0x1,
        );
      }),
      $(_0x5f3277(0x152) + _0x4b7ebb + "\x22]")[_0x5f3277(0x150)](function () {
        const _0x37e721 = _0x5f3277;
        $(this)[_0x37e721(0x212)](
          $(this)
            ["parents"](_0x37e721(0x1b3) + _0x4b7ebb + "\x22]")
            ["index"]() + 0x1,
        );
      }),
      validation();
  }),
  $("[data-add-new-input]")["on"](_0x144300(0x1c3), function () {
    const _0x2acb20 = _0x144300,
      _0x297de5 = $(this)
        [_0x2acb20(0x1ae)](_0x2acb20(0x1e1))
        [_0x2acb20(0x22e)]();
    let _0x13fe6e = $(this)[_0x2acb20(0x228)](_0x2acb20(0x12a));
    var _0x25f20d = $(_0x2acb20(0x220) + _0x13fe6e + "\x22]")
        ["eq"](0x0)
        [_0x2acb20(0x218)](!![]),
      _0x14d90c = $(_0x2acb20(0x1f9) + _0x13fe6e + "\x22]")
        ["eq"](0x0)
        [_0x2acb20(0x218)](!![]);
    $(this)[_0x2acb20(0x127)](_0x2acb20(0x20a))["show"](), cloneRemoveInput();
    let _0x1875cf = 0x0;
    $(_0x2acb20(0x220) + _0x13fe6e + "\x22]\x20input")[_0x2acb20(0x150)](
      function () {
        const _0x5a824a = _0x2acb20,
          _0x20ef6f = $(this)[_0x5a824a(0x1a9)](_0x5a824a(0x1eb));
        if (_0x20ef6f && _0x20ef6f[_0x5a824a(0x1b7)](_0x5a824a(0x175))) {
          const _0x51abc2 = parseInt(_0x20ef6f[_0x5a824a(0x18d)]("-")[0x1]);
          !isNaN(_0x51abc2) && _0x51abc2 > _0x1875cf && (_0x1875cf = _0x51abc2);
        }
      },
    ),
      _0x1875cf++,
      _0x25f20d[_0x2acb20(0x127)](_0x2acb20(0x15c))[_0x2acb20(0x150)](
        function () {
          const _0x42dfbe = _0x2acb20;
          let _0x243b87 = _0x42dfbe(0x175) + _0x1875cf;
          $(this)[_0x42dfbe(0x1ad)](""),
            $(this)[_0x42dfbe(0x1a9)](_0x42dfbe(0x1eb), _0x243b87),
            $(this)["attr"]("data-name", _0x243b87);
        },
      ),
      _0x14d90c[_0x2acb20(0x127)](_0x2acb20(0x17e))["each"](function () {
        const _0x2bd278 = _0x2acb20;
        $(this)[_0x2bd278(0x1a9)](
          _0x2bd278(0x17c),
          _0x2bd278(0x175) + _0x1875cf,
        );
      }),
      $(this)
        ["siblings"](_0x2acb20(0x22b) + _0x13fe6e + "\x22]")
        [_0x2acb20(0x16f)](_0x25f20d),
      $(_0x2acb20(0x189))
        ["eq"](_0x297de5)
        ["find"](_0x2acb20(0x22f) + _0x13fe6e + "\x22]")
        [_0x2acb20(0x16f)](_0x14d90c),
      $("[data-input-index=\x22" + _0x13fe6e + "\x22]")[_0x2acb20(0x150)](
        function () {
          const _0x2ad213 = _0x2acb20;
          $(this)[_0x2ad213(0x212)](
            $(this)
              [_0x2ad213(0x1ae)]("[data-clone-input=\x22" + _0x13fe6e + "\x22]")
              [_0x2ad213(0x22e)]() + 0x1,
          );
        },
      ),
      $("[data-display-input-index=\x22" + _0x13fe6e + "\x22]")[
        _0x2acb20(0x150)
      ](function () {
        const _0x15b547 = _0x2acb20;
        $(this)[_0x15b547(0x212)](
          $(this)
            [_0x15b547(0x1ae)]("[data-display-input=\x22" + _0x13fe6e + "\x22]")
            ["index"]() + 0x1,
        );
      }),
      validation();
  }),
  $(_0x144300(0x15b))["on"](_0x144300(0x1c3), function () {
    const _0xae44c1 = _0x144300,
      _0x35299d = $(this)[_0xae44c1(0x228)](_0xae44c1(0x13c));
    $(_0xae44c1(0x1de) + _0x35299d + "\x22]")["val"](""), validation();
  });
function andLogic() {
  const _0x55c973 = _0x144300;
  conditionalResult &&
    (steps["eq"](x)[_0x55c973(0x127)](_0x55c973(0x17f))[_0x55c973(0x1f8)](),
    console["log"](_0x55c973(0x194)),
    steps["eq"](x)
      [_0x55c973(0x127)]("[data-show-if]")
      [_0x55c973(0x150)](function () {
        const _0x31bc07 = _0x55c973;
        function _0xdb191a(_0x31716c) {
          const _0x471bfa = _0x3d10,
            _0x1685fb = _0x31716c[_0x471bfa(0x18d)]("&"),
            _0xfddc8b = [];
          return (
            _0x1685fb[_0x471bfa(0x15d)]((_0x4330cd) => {
              const _0x122f36 = _0x471bfa,
                [_0x3ea62a, _0x16f910] = _0x4330cd["split"]("=");
              _0xfddc8b[_0x122f36(0x1ba)]({
                field: _0x3ea62a,
                value: _0x16f910,
              });
            }),
            _0xfddc8b
          );
        }
        const _0x318de4 = $(this)["attr"](_0x31bc07(0x21e));
        console[_0x31bc07(0x19d)](_0x318de4);
        const _0x26f011 = _0xdb191a(_0x318de4);
        function _0x3a9b68(_0x47f737, _0x3a8e71) {
          const _0x1b6cc9 = _0x31bc07;
          return _0x3a8e71[_0x1b6cc9(0x177)]((_0x4a3216, _0x1da1bc) => {
            const _0x58c0d4 = _0x1b6cc9;
            if (
              _0x47f737[0x0] &&
              _0x4a3216[_0x58c0d4(0x1a3)] === _0x47f737[0x0][_0x58c0d4(0x1a3)]
            )
              return _0x47f737[_0x58c0d4(0x1dc)](
                (_0x4652e2, _0x5a142b) =>
                  _0x3a8e71[_0x1da1bc + _0x5a142b] &&
                  _0x3a8e71[_0x1da1bc + _0x5a142b][_0x58c0d4(0x1a3)] ===
                    _0x4652e2[_0x58c0d4(0x1a3)] &&
                  _0x3a8e71[_0x1da1bc + _0x5a142b][_0x58c0d4(0x215)] ===
                    _0x4652e2[_0x58c0d4(0x215)],
              );
            return ![];
          });
        }
        const _0x36d285 = _0x3a9b68(_0x26f011, all_data);
        _0x36d285 ? $(this)["show"]() : $(this)["hide"]();
      }));
}
scrollTop(), cloneRemove(), cloneRemoveInput();
