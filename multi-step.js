//11/06/23 Recaptcha Fix

function _0x5014(_0x2cf326, _0x335d29) {
  const _0x467564 = _0x4675();
  return (
    (_0x5014 = function (_0x501449, _0x36bd9e) {
      _0x501449 = _0x501449 - 0x1d9;
      let _0x24e72e = _0x467564[_0x501449];
      return _0x24e72e;
    }),
    _0x5014(_0x2cf326, _0x335d29)
  );
}
const _0x58ae32 = _0x5014;
(function (_0x138d75, _0x2c3ec8) {
  const _0x56aea3 = _0x5014,
    _0x4bcf54 = _0x138d75();
  while (!![]) {
    try {
      const _0x37c11b =
        (-parseInt(_0x56aea3(0x2aa)) / 0x1) *
          (-parseInt(_0x56aea3(0x230)) / 0x2) +
        -parseInt(_0x56aea3(0x24e)) / 0x3 +
        (parseInt(_0x56aea3(0x1e4)) / 0x4) *
          (-parseInt(_0x56aea3(0x24c)) / 0x5) +
        (-parseInt(_0x56aea3(0x21a)) / 0x6) *
          (-parseInt(_0x56aea3(0x29a)) / 0x7) +
        -parseInt(_0x56aea3(0x236)) / 0x8 +
        -parseInt(_0x56aea3(0x20d)) / 0x9 +
        parseInt(_0x56aea3(0x220)) / 0xa;
      if (_0x37c11b === _0x2c3ec8) break;
      else _0x4bcf54["push"](_0x4bcf54["shift"]());
    } catch (_0x22fd84) {
      _0x4bcf54["push"](_0x4bcf54["shift"]());
    }
  }
})(_0x4675, 0xef7bc);
let x = 0x0,
  curStep = 0x0,
  steps = $("[data-form=\x22step\x22]"),
  progressbarClone = $(_0x58ae32(0x256))[_0x58ae32(0x1fe)](),
  progressbar,
  countCard = !![],
  weightedSelection = $("[data-weighted-selection]")[_0x58ae32(0x1da)](
    _0x58ae32(0x272)
  ),
  weightedSelectionRange = $("[data-weighted-selection-range]")[
    _0x58ae32(0x1da)
  ](_0x58ae32(0x265)),
  selectMultiple = $(_0x58ae32(0x208))["data"](_0x58ae32(0x287)),
  customError = $("[data-custom-error-message]")[_0x58ae32(0x1da)](
    "custom-error-message"
  ),
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
  reinitIX = $(_0x58ae32(0x27a))[_0x58ae32(0x1da)](_0x58ae32(0x257)),
  textareaLength = 0x0,
  textInputLength = 0x0,
  emailInputLength = 0x0,
  selectInputLength = 0x0,
  checkboxInputLength = 0x0,
  filledInput = [],
  savedFilledInput = JSON[_0x58ae32(0x26d)](
    localStorage["getItem"](_0x58ae32(0x229))
  ),
  memory = $(_0x58ae32(0x214))[_0x58ae32(0x1da)]("memory"),
  quiz = $(_0x58ae32(0x291))[_0x58ae32(0x1da)](_0x58ae32(0x259)),
  progress = 0x0;
const urlFormly = new URL(window["location"][_0x58ae32(0x241)]);
let params = $("[data-query-param]")["data"]("query-param"),
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
  logicExtra = $(_0x58ae32(0x2b5))[_0x58ae32(0x1da)](_0x58ae32(0x2b3)),
  oldSubmitText = $(_0x58ae32(0x223))["val"](),
  oldResetText = $("[data-btn=\x22reset\x22]")["text"](),
  formReset = $(_0x58ae32(0x2b5))[_0x58ae32(0x1da)](_0x58ae32(0x2c2)),
  successCard = "",
  redirectTo = "",
  totalSteps = 0x0,
  checkCount = 0x0,
  resetDelay = $("[data-reset-delay]")["data"]("reset-delay")
    ? $("[data-reset-delay]")["data"](_0x58ae32(0x226))
    : 0x7d0,
  redirectDelay = $(_0x58ae32(0x290))["data"]("redirect-delay")
    ? $(_0x58ae32(0x290))[_0x58ae32(0x1da)](_0x58ae32(0x28e))
    : 0x7d0,
  newTab = !![],
  unfilledArr = [],
  phoneFormat = /^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
  validPhone = $(_0x58ae32(0x1ea))[_0x58ae32(0x1da)](_0x58ae32(0x254)),
  scrollToTop = $(_0x58ae32(0x2b5))[_0x58ae32(0x1da)](_0x58ae32(0x1fd)),
  scrollTopOffset = parseInt(
    $("[data-form=\x22multistep\x22]")[_0x58ae32(0x1da)](_0x58ae32(0x2c1))
  ),
  notRobot = !![];
all_data = [];
$(_0x58ae32(0x21c))[_0x58ae32(0x293)] > 0x0 && (notRobot = ![]);
function recaptcha(_0x5d565d) {
  notRobot = !![];
}
$(_0x58ae32(0x23c))["length"] > 0x0 &&
  (countCard = $(_0x58ae32(0x23c))["data"](_0x58ae32(0x224)));
$(_0x58ae32(0x21f))["hide"](),
  $(progressbarClone)[_0x58ae32(0x2b8)](_0x58ae32(0x2bd)),
  $(_0x58ae32(0x2cd))["children"]()[_0x58ae32(0x27d)](),
  $(_0x58ae32(0x223))[_0x58ae32(0x2c3)](),
  steps[_0x58ae32(0x29e)](function () {
    const _0x2e4d4f = _0x58ae32;
    $(_0x2e4d4f(0x2cd))[_0x2e4d4f(0x255)](
      progressbarClone[_0x2e4d4f(0x1fe)](!![], !![])
    );
  }),
  $("[data-input-field]")[_0x58ae32(0x2c3)]();
countCard
  ? ((curStep = curStep + 0x1),
    (totalSteps = steps[_0x58ae32(0x293)]),
    $(_0x58ae32(0x2d4))[_0x58ae32(0x29b)](totalSteps))
  : ($(steps[x])[_0x58ae32(0x1da)](_0x58ae32(0x258))
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    (totalSteps = $("[data-form=\x22step\x22]:not([data-card=\x22true\x22])")[
      _0x58ae32(0x293)
    ]),
    $(_0x58ae32(0x2d4))[_0x58ae32(0x29b)](totalSteps),
    $(_0x58ae32(0x29c))[_0x58ae32(0x29e)](function () {
      const _0x145260 = _0x58ae32;
      $(
        $("[data-form=\x22progress-indicator\x22]")[$(this)[_0x145260(0x26e)]()]
      )[_0x145260(0x2c3)]();
    }));
(progressbar = $(_0x58ae32(0x2cd))[_0x58ae32(0x2ab)]()),
  $(_0x58ae32(0x256))["on"](_0x58ae32(0x275), clickableIndicator),
  $(_0x58ae32(0x28c))[_0x58ae32(0x29b)](curStep),
  steps[_0x58ae32(0x2c3)](),
  $("[data-success-card]")["hide"](),
  $(_0x58ae32(0x23e))[_0x58ae32(0x29e)](function () {
    const _0x31a952 = _0x58ae32;
    $(this)[_0x31a952(0x1f1)](_0x31a952(0x2c7), "button");
  });
function _0x4675() {
  const _0x24b668 = [
    "parents",
    "stringify",
    "remove",
    "<br>Data\x20Go\x20To\x20=\x20",
    "[data-form=\x22next-btn\x22][data-submit-show]",
    "[data-checkbox]",
    "top",
    "input[type=\x22radio\x22]",
    "Enter",
    "\x22]:checked",
    "[data-selection=\x22other\x22]",
    "input[type=\x22submit\x22]",
    "select-multiple",
    ":input[type=\x22checkbox\x22][required]:checked",
    "success",
    "ix2",
    "field",
    "[data-text=\x22current-step\x22]",
    "filter",
    "redirect-delay",
    "selection",
    "[data-redirect-delay]",
    "[data-quiz]",
    "name",
    "length",
    "show",
    "slow",
    "[data-answer]:visible",
    ":input[type=\x22number\x22][required]",
    "backTo",
    ":input[type=\x22checkbox\x22]",
    "35PloUZi",
    "text",
    "[data-form=\x22step\x22][data-card]",
    "https://webflow.com/api/v1/form/",
    "each",
    "xxx-xxx\x20xxxx",
    "0.4",
    "option[value=\x22",
    "[data-go-to]",
    "dispatchEvent",
    "input[type=\x22checkbox\x22]:visible",
    "[data-range]:contains(",
    "redirect",
    "[data-clone-wrapper=\x22",
    "[data-display=\x22",
    "[data-input-field=\x22",
    "157QFZeGn",
    "children",
    "destroy",
    "input-field",
    "setItem",
    "select[name=\x22",
    "debug-mode",
    "metaKey",
    ":input[type=\x27radio\x27]:checked",
    "logic-extra",
    "html,\x20body",
    "[data-form=\x22multistep\x22]",
    "split",
    "[data-answer=\x22",
    "removeClass",
    "[data-selection]",
    "radio-delay",
    "not",
    "[data-form=\x22next-btn\x22]",
    "current",
    "novalidate",
    "submit-show",
    "css",
    "scroll-top-offset",
    "reset",
    "hide",
    "input[type=\x22text\x22][required]:visible",
    ".w-form-formradioinput",
    "go-to",
    "type",
    ":input[type=\x22checkbox\x22][required]",
    ":input[required]",
    "parent",
    "[data-btn=\x22reset\x22]",
    "select[required]:visible",
    "[data-form=\x22progress\x22]",
    "history",
    "Please\x20wait...",
    "Webflow",
    "skip-to",
    "data-radio-skip",
    "push",
    "[data-text=\x22total-steps\x22]",
    ":input[type=\x22text\x22][required]",
    "data",
    ":input[type=\x22email\x22]",
    "radio",
    "findIndex",
    "xxx.xxx.xxxx",
    "value",
    "[data-clickable]",
    "animate",
    ".w-form-done",
    "find",
    "1852Zvugut",
    "[data-form=\x22submit\x22]:visible",
    "prop",
    "data-radio-delay",
    "key",
    "[data-form=\x22custom-progress-indicator\x22]",
    "[data-phone-validation]",
    "data-skip-to",
    "radio-skip",
    "body",
    "forEach",
    "ajaxComplete",
    "w--redirected-checked",
    "attr",
    "addClass",
    "textarea[autofocus]",
    "[data-form=\x22back-btn\x22]",
    "add-new",
    "input:radio[name=\x22",
    "preventDefault",
    "select",
    "[data-form=\x22step\x22]",
    "input[name=\x22",
    "keypress",
    "phone-autoformat",
    "scroll-top",
    "clone",
    ":input",
    "<option>",
    "input[type=\x22email\x22]:visible",
    "</div>",
    "keydown",
    "getResponse",
    "auto",
    "checkbox",
    "searchParams",
    "[data-select-multiple]",
    "shiftKey",
    "redirect-form-hehexd",
    "require",
    "[data-input-field]",
    "2668374NeNZoj",
    "[data-clone=\x22",
    "selected",
    "input",
    ":input[type=\x22file\x22]",
    "fadeIn",
    "disabled",
    "[data-memory]",
    "(xxx)\x20xxx-xxxx",
    ":input[type=\x22file\x22][required]",
    "inputName",
    ":input[type=\x22number\x22]",
    "keyCode",
    "1358220FOgfPx",
    "textarea[required]:visible",
    "div.g-recaptcha",
    "readystatechange",
    "skipTo",
    "[data-text=\x22error-message\x22]",
    "24382130EsIrzu",
    "input:radio[required]",
    "[data-selected]:checked",
    "[data-form=\x22submit-btn\x22]",
    "count-card",
    "open",
    "reset-delay",
    "\x22][value=\x22",
    "focus",
    "filledInput",
    "substring",
    "[type=\x22submit\x22]",
    "[data-skip-to]",
    "step",
    ":input[type=\x22tel\x22][required]",
    "[type=\x22checkbox\x22]",
    "7738GQuMXW",
    "ctrlKey",
    "data-input-field",
    "xxx\x20xxx\x20xxxx",
    "none",
    "trim",
    "12620168LeGvdo",
    "<br>Data\x20Answer\x20=\x20",
    "[data-form=\x22submit-btn\x22]:visible",
    "[data-answer][data-radio-skip]:visible",
    "[data-radio-delay]",
    "change",
    "[data-count-card]",
    "select[required]",
    "[data-form=\x22next-btn\x22][type=\x22submit\x22]",
    ".w-checkbox-input",
    "<div\x20data-range=\x22selection\x22\x20style=\x22display:none\x20!important\x22>",
    "href",
    "siblings",
    ":input[type=\x22checkbox\x22]:checked",
    "block-domain",
    "replaceState",
    "textarea[required]",
    "input:checkbox",
    "[data-answer]",
    "[data-selection-weight]",
    "test",
    "join",
    "9285wKaqgC",
    ":input[type=\x22email\x22][required]",
    "1388322rjzTmq",
    "(xxx)\x20xxx\x20xxxx",
    "[data-selection=\x22",
    "submit",
    "clickable",
    "[data-clickable-all]",
    "phone-validation",
    "append",
    "[data-form=\x22progress-indicator\x22]",
    "reinit",
    "card",
    "quiz",
    ".w-radio-input",
    ":checked",
    "new-tab",
    "val",
    "_blank",
    "stopPropagation",
    "textarea[name=\x22",
    "[data-add-new]",
    "match",
    "textarea",
    "wait",
    "weighted-selection-range",
    "min-character",
    "last",
    "some",
    "checked",
    "offset",
    "clickable-all",
    "includes",
    "parse",
    "index",
    "removeItem",
    ":input[type=\x22radio\x22]",
    "[data-display-index=\x22",
    "weighted-selection",
    "trigger",
    "[data-radio-skip]:visible",
    "click",
    "[data-success-card=\x22",
    "[data-cms-select=input]",
    "replace",
    "data-go-to",
    "[data-reinit]",
  ];
  _0x4675 = function () {
    return _0x24b668;
  };
  return _0x4675();
}
function getParams() {
  const _0x144a04 = _0x58ae32;
  urlFormly[_0x144a04(0x207)][_0x144a04(0x1ee)](function (
    _0x4ccdc4,
    _0x2b9524
  ) {
    const _0x7434a8 = _0x144a04;
    searchQ[_0x7434a8(0x2d3)]({ val: _0x4ccdc4, key: _0x2b9524 });
  });
}
function getSafe(_0x5eae8e, _0x242105) {
  try {
    return _0x5eae8e();
  } catch (_0x4430a6) {
    return _0x242105;
  }
}
function phoneAutoFormat(_0x4394d2, _0x16ebf2) {
  const _0x53d089 = _0x58ae32;
  var _0x2e6d58 = "";
  numericInput = _0x16ebf2[_0x53d089(0x278)](/\D/g, "");
  if (_0x4394d2 === "xxx-xxx-xxxx")
    numericInput[_0x53d089(0x293)] > 0x0 &&
      (_0x2e6d58 += numericInput[_0x53d089(0x22a)](0x0, 0x3)),
      numericInput["length"] > 0x3 &&
        (_0x2e6d58 += "-" + numericInput["substring"](0x3, 0x6)),
      numericInput[_0x53d089(0x293)] > 0x6 &&
        (_0x2e6d58 += "-" + numericInput[_0x53d089(0x22a)](0x6, 0xa));
  else {
    if (_0x4394d2 === _0x53d089(0x233))
      numericInput[_0x53d089(0x293)] > 0x0 &&
        (_0x2e6d58 += numericInput[_0x53d089(0x22a)](0x0, 0x3)),
        numericInput["length"] > 0x3 &&
          (_0x2e6d58 += "\x20" + numericInput["substring"](0x3, 0x6)),
        numericInput[_0x53d089(0x293)] > 0x6 &&
          (_0x2e6d58 += "\x20" + numericInput[_0x53d089(0x22a)](0x6, 0xa));
    else {
      if (_0x4394d2 === _0x53d089(0x215))
        numericInput[_0x53d089(0x293)] > 0x0 &&
          (_0x2e6d58 += "(" + numericInput[_0x53d089(0x22a)](0x0, 0x3) + ")"),
          numericInput[_0x53d089(0x293)] > 0x3 &&
            (_0x2e6d58 += "\x20" + numericInput["substring"](0x3, 0x6)),
          numericInput[_0x53d089(0x293)] > 0x6 &&
            (_0x2e6d58 += "-" + numericInput[_0x53d089(0x22a)](0x6, 0xa));
      else {
        if (_0x4394d2 === _0x53d089(0x24f))
          numericInput[_0x53d089(0x293)] > 0x0 &&
            (_0x2e6d58 += "(" + numericInput[_0x53d089(0x22a)](0x0, 0x3) + ")"),
            numericInput[_0x53d089(0x293)] > 0x3 &&
              (_0x2e6d58 += "\x20" + numericInput["substring"](0x3, 0x6)),
            numericInput[_0x53d089(0x293)] > 0x6 &&
              (_0x2e6d58 += "\x20" + numericInput[_0x53d089(0x22a)](0x6, 0xa));
        else {
          if (_0x4394d2 === _0x53d089(0x29f))
            numericInput["length"] > 0x0 &&
              (_0x2e6d58 += numericInput[_0x53d089(0x22a)](0x0, 0x3)),
              numericInput["length"] > 0x3 &&
                (_0x2e6d58 += "-" + numericInput["substring"](0x3, 0x6)),
              numericInput["length"] > 0x6 &&
                (_0x2e6d58 +=
                  "\x20" + numericInput[_0x53d089(0x22a)](0x6, 0xa));
          else
            _0x4394d2 === _0x53d089(0x1de)
              ? (numericInput["length"] > 0x0 &&
                  (_0x2e6d58 += numericInput[_0x53d089(0x22a)](0x0, 0x3)),
                numericInput[_0x53d089(0x293)] > 0x3 &&
                  (_0x2e6d58 += "." + numericInput[_0x53d089(0x22a)](0x3, 0x6)),
                numericInput[_0x53d089(0x293)] > 0x6 &&
                  (_0x2e6d58 += "." + numericInput[_0x53d089(0x22a)](0x6, 0xa)))
              : (_0x2e6d58 = _0x16ebf2);
        }
      }
    }
  }
  return _0x2e6d58;
}
savedFilledInput &&
  memory &&
  savedFilledInput[_0x58ae32(0x1ee)]((_0x33eb20) => {
    const _0x1fcb9c = _0x58ae32;
    if (
      $(
        _0x1fcb9c(0x1fa) +
          _0x33eb20["inputName"] +
          "\x22][value=\x22" +
          _0x33eb20[_0x1fcb9c(0x1df)] +
          "\x22]"
      )["attr"](_0x1fcb9c(0x2c7)) === _0x1fcb9c(0x1dc)
    )
      $(
        _0x1fcb9c(0x1fa) +
          _0x33eb20[_0x1fcb9c(0x217)] +
          _0x1fcb9c(0x227) +
          _0x33eb20["value"] +
          "\x22]"
      )[_0x1fcb9c(0x275)](),
        $(
          _0x1fcb9c(0x1fa) +
            _0x33eb20[_0x1fcb9c(0x217)] +
            _0x1fcb9c(0x227) +
            _0x33eb20[_0x1fcb9c(0x1df)] +
            "\x22]"
        )
          [_0x1fcb9c(0x242)](_0x1fcb9c(0x25a))
          [_0x1fcb9c(0x1f2)](_0x1fcb9c(0x1f0));
    else
      _0x33eb20["value"] === "on"
        ? ($("input[name=\x22" + _0x33eb20[_0x1fcb9c(0x217)] + "\x22]")[
            _0x1fcb9c(0x275)
          ](),
          $(_0x1fcb9c(0x1fa) + _0x33eb20[_0x1fcb9c(0x217)] + "\x22]")
            [_0x1fcb9c(0x242)](_0x1fcb9c(0x23f))
            [_0x1fcb9c(0x1f2)](_0x1fcb9c(0x1f0)))
        : ($(_0x1fcb9c(0x1fa) + _0x33eb20[_0x1fcb9c(0x217)] + "\x22]")[
            _0x1fcb9c(0x25d)
          ](_0x33eb20[_0x1fcb9c(0x1df)]),
          $(_0x1fcb9c(0x260) + _0x33eb20[_0x1fcb9c(0x217)] + "\x22]")[
            _0x1fcb9c(0x25d)
          ](_0x33eb20["value"]),
          $("select[name=\x22" + _0x33eb20[_0x1fcb9c(0x217)] + "\x22]")
            [_0x1fcb9c(0x1e3)](
              "option[value=\x22" + _0x33eb20[_0x1fcb9c(0x1df)] + "\x22]"
            )
            [_0x1fcb9c(0x1e6)](_0x1fcb9c(0x20f), !![]));
  });
params &&
  (getParams(),
  searchQ[_0x58ae32(0x1ee)]((_0x17a9b7) => {
    const _0x545612 = _0x58ae32;
    if (
      $(
        _0x545612(0x1fa) +
          _0x17a9b7[_0x545612(0x1e8)] +
          "\x22][value=\x22" +
          _0x17a9b7[_0x545612(0x25d)] +
          "\x22]"
      )["attr"](_0x545612(0x2c7)) === _0x545612(0x1dc)
    )
      $(
        _0x545612(0x1fa) +
          _0x17a9b7[_0x545612(0x1e8)] +
          _0x545612(0x227) +
          _0x17a9b7[_0x545612(0x25d)] +
          "\x22]"
      )[_0x545612(0x275)](),
        $(
          "input[name=\x22" +
            _0x17a9b7["key"] +
            _0x545612(0x227) +
            _0x17a9b7["val"] +
            "\x22]"
        )
          ["siblings"](_0x545612(0x25a))
          ["addClass"](_0x545612(0x1f0)),
        $(
          "input[name=\x22" +
            _0x17a9b7[_0x545612(0x1e8)] +
            "\x22][value=\x22" +
            _0x17a9b7[_0x545612(0x25d)] +
            "\x22]"
        )[_0x545612(0x273)](_0x545612(0x210));
    else
      _0x17a9b7["val"] === "on"
        ? ($(_0x545612(0x1fa) + _0x17a9b7[_0x545612(0x1e8)] + "\x22]")[
            _0x545612(0x275)
          ](),
          $(_0x545612(0x1fa) + _0x17a9b7[_0x545612(0x1e8)] + "\x22]")
            ["siblings"](".w-checkbox-input")
            [_0x545612(0x1f2)](_0x545612(0x1f0)),
          $(_0x545612(0x1fa) + _0x17a9b7[_0x545612(0x1e8)] + "\x22]")[
            "trigger"
          ]("input"))
        : ($(_0x545612(0x1fa) + _0x17a9b7["key"] + "\x22]")[_0x545612(0x25d)](
            _0x17a9b7["val"]
          ),
          $("textarea[name=\x22" + _0x17a9b7[_0x545612(0x1e8)] + "\x22]")[
            _0x545612(0x25d)
          ](_0x17a9b7[_0x545612(0x25d)]),
          $("select[name=\x22" + _0x17a9b7[_0x545612(0x1e8)] + "\x22]")
            [_0x545612(0x1e3)](
              _0x545612(0x2a1) + _0x17a9b7[_0x545612(0x25d)] + "\x22]"
            )
            [_0x545612(0x1e6)](_0x545612(0x20f), !![]),
          $(_0x545612(0x1fa) + _0x17a9b7[_0x545612(0x1e8)] + "\x22]")[
            _0x545612(0x273)
          ]("input"),
          $(_0x545612(0x1fa) + _0x17a9b7["key"] + "\x22]")[_0x545612(0x273)](
            _0x545612(0x23b)
          ));
  }));
quiz &&
  steps["each"](function () {
    const _0x2f435e = _0x58ae32;
    $(this)[_0x2f435e(0x2ab)]()[_0x2f435e(0x1f1)](_0x2f435e(0x2d2), !![]),
      $(this)[_0x2f435e(0x2ab)]()[_0x2f435e(0x1f1)](_0x2f435e(0x1e7), 0xfa);
  });
function disableBtn(_0x1c485a) {
  const _0x4ed343 = _0x58ae32;
  (fill = ![]),
    !customError &&
      ($("[data-form=\x22next-btn\x22]")[_0x4ed343(0x2c0)]({
        opacity: "0.4",
        "pointer-events": _0x4ed343(0x234),
      }),
      $(_0x4ed343(0x2bc))[_0x4ed343(0x1f2)](_0x4ed343(0x213)),
      $(_0x4ed343(0x223))[_0x4ed343(0x2c0)]({
        opacity: _0x4ed343(0x2a0),
        "pointer-events": _0x4ed343(0x234),
      }),
      $("[data-form=\x22submit-btn\x22]")["addClass"]("disabled"));
}
function enableBtn() {
  const _0x31d09b = _0x58ae32;
  (fill = !![]),
    $(_0x31d09b(0x2bc))[_0x31d09b(0x2c0)]({
      "pointer-events": "auto",
      opacity: "1",
    }),
    $(_0x31d09b(0x2bc))[_0x31d09b(0x2b8)](_0x31d09b(0x213)),
    $(_0x31d09b(0x223))["css"]({
      "pointer-events": _0x31d09b(0x205),
      opacity: "1",
    }),
    $(_0x31d09b(0x223))[_0x31d09b(0x2b8)](_0x31d09b(0x213));
}
function saveFilledInput() {
  const _0x10bbf9 = _0x58ae32;
  $("form[data-form=\x22multistep\x22]\x20:input")
    ["not"](_0x10bbf9(0x22b))
    [_0x10bbf9(0x29e)](function () {
      const _0x791809 = _0x10bbf9;
      $(this)[_0x791809(0x1f1)](_0x791809(0x2c7)) === "checkbox" ||
      $(this)[_0x791809(0x1f1)](_0x791809(0x2c7)) === "radio"
        ? $(this)[_0x791809(0x1e6)](_0x791809(0x269)) &&
          (filledInput[_0x791809(0x268)](
            (_0x54d0f5) =>
              _0x54d0f5[_0x791809(0x217)] === $(this)["attr"]("name")
          )
            ? ((filledInput = filledInput[_0x791809(0x28d)](
                (_0x5574fc) =>
                  _0x5574fc[_0x791809(0x217)] !==
                  $(this)["attr"](_0x791809(0x292))
              )),
              $(this)["val"]() !== "" &&
                filledInput["push"]({
                  inputName: $(this)[_0x791809(0x1f1)](_0x791809(0x292)),
                  value: $(this)[_0x791809(0x25d)](),
                }))
            : $(this)[_0x791809(0x25d)]() !== "" &&
              filledInput[_0x791809(0x2d3)]({
                inputName: $(this)[_0x791809(0x1f1)](_0x791809(0x292)),
                value: $(this)[_0x791809(0x25d)](),
              }))
        : filledInput[_0x791809(0x268)](
            (_0x506b3f) =>
              _0x506b3f[_0x791809(0x217)] ===
              $(this)[_0x791809(0x1f1)](_0x791809(0x292))
          )
        ? ((filledInput = filledInput[_0x791809(0x28d)](
            (_0x1692fd) =>
              _0x1692fd[_0x791809(0x217)] !==
              $(this)[_0x791809(0x1f1)](_0x791809(0x292))
          )),
          $(this)[_0x791809(0x25d)]() !== "" &&
            filledInput[_0x791809(0x2d3)]({
              inputName: $(this)[_0x791809(0x1f1)](_0x791809(0x292)),
              value: $(this)["val"](),
            }))
        : $(this)[_0x791809(0x25d)]() !== "" &&
          filledInput[_0x791809(0x2d3)]({
            inputName: $(this)["attr"]("name"),
            value: $(this)[_0x791809(0x25d)](),
          });
    }),
    filledInput &&
      filledInput[_0x10bbf9(0x1ee)]((_0x3c64b9) => {
        const _0x289cf6 = _0x10bbf9;
        urlFormly[_0x289cf6(0x207)]["delete"](_0x3c64b9[_0x289cf6(0x217)]),
          urlFormly[_0x289cf6(0x207)]["set"](
            _0x3c64b9[_0x289cf6(0x217)],
            _0x3c64b9[_0x289cf6(0x1df)]
          ),
          window[_0x289cf6(0x2ce)][_0x289cf6(0x245)](null, null, urlFormly);
      }),
    localStorage[_0x10bbf9(0x26f)](_0x10bbf9(0x229)),
    localStorage[_0x10bbf9(0x2ae)](
      _0x10bbf9(0x229),
      JSON[_0x10bbf9(0x27c)](filledInput)
    );
}
function scrollTop() {
  const _0x5c92c8 = _0x58ae32;
  scrollToTop &&
    $(_0x5c92c8(0x2b4))[_0x5c92c8(0x1e1)](
      {
        scrollTop:
          $("[data-form=\x22multistep\x22]")[_0x5c92c8(0x26a)]()[
            _0x5c92c8(0x281)
          ] - scrollTopOffset,
      },
      0x3e8
    );
}
function updateStep() {
  const _0x4c08cc = _0x58ae32;
  scrollTop(), (skip = ![]), $(_0x4c08cc(0x1e9))[_0x4c08cc(0x2b8)]("disabled");
  $(_0x4c08cc(0x1e0))[_0x4c08cc(0x1da)](_0x4c08cc(0x252)) &&
    (steps[_0x4c08cc(0x1e3)](_0x4c08cc(0x2c9))[_0x4c08cc(0x29e)](function () {
      const _0x20a347 = _0x4c08cc;
      $(
        $("[data-form=\x22custom-progress-indicator\x22]")[
          $(this)[_0x20a347(0x27b)](_0x20a347(0x1f9))[_0x20a347(0x26e)]()
        ]
      ),
        $(this)[_0x20a347(0x25d)]() === "" && emptyInput++;
    }),
    emptyInput > 0x0
      ? $(_0x4c08cc(0x286))["addClass"](_0x4c08cc(0x213))
      : $(_0x4c08cc(0x286))[_0x4c08cc(0x2b8)](_0x4c08cc(0x213)));
  $("[data-form=\x22custom-progress-indicator\x22]")[_0x4c08cc(0x2b8)](
    _0x4c08cc(0x2bd)
  ),
    $("[data-form=\x22custom-progress-indicator\x22]")[_0x4c08cc(0x1f2)](
      _0x4c08cc(0x213)
    ),
    $($(_0x4c08cc(0x1e9))[x])[_0x4c08cc(0x1f2)](_0x4c08cc(0x2bd)),
    (selection = selections[_0x4c08cc(0x28d)](
      (_0x2fecdf) => _0x2fecdf["step"] === x - 0x1
    ));
  next &&
    (x = getSafe(() => selection[0x0]["skipTo"])
      ? parseInt(getSafe(() => selection[0x0]["skipTo"]))
      : x);
  $(_0x4c08cc(0x248))[_0x4c08cc(0x2c3)](), steps[_0x4c08cc(0x2c3)]();
  reinitIX === !![] && window[_0x4c08cc(0x2d0)][_0x4c08cc(0x2ac)]();
  $(progressbar)[_0x4c08cc(0x2b8)]("current");
  for (i = 0x0; i <= x; i++) {
    countCard
      ? $(progressbar[i])[_0x4c08cc(0x1f2)](_0x4c08cc(0x2bd))
      : !$(steps[i])[_0x4c08cc(0x1da)](_0x4c08cc(0x258)) &&
        $(progressbar[i])[_0x4c08cc(0x1f2)]("current");
  }
  reinitIX === !![]
    ? (window[_0x4c08cc(0x2d0)] &&
        window[_0x4c08cc(0x2d0)][_0x4c08cc(0x20b)](_0x4c08cc(0x28a))["init"](),
      document[_0x4c08cc(0x2a3)](new Event(_0x4c08cc(0x21d))),
      $(steps[x])[_0x4c08cc(0x294)]())
    : $(steps[x])[_0x4c08cc(0x212)](_0x4c08cc(0x295));
  x === 0x0 &&
    !$(steps[x])[_0x4c08cc(0x1da)](_0x4c08cc(0x258)) &&
    $(steps[x])[_0x4c08cc(0x1e3)]("[data-answer]")[_0x4c08cc(0x294)]();
  selection["length"] > 0x0
    ? $(steps[x])
        [_0x4c08cc(0x1e3)](
          _0x4c08cc(0x2b7) + selection[0x0][_0x4c08cc(0x20f)] + "\x22]"
        )
        ["show"]()
    : $(steps[x])
        [_0x4c08cc(0x1e3)](_0x4c08cc(0x2b7) + answer + "\x22]")
        [_0x4c08cc(0x294)]();
  if (x === 0x0)
    $(_0x4c08cc(0x1f4))[_0x4c08cc(0x2c3)](),
      $("[data-form=\x22next-btn\x22]")[_0x4c08cc(0x294)]();
  else {
    if (
      x === steps[_0x4c08cc(0x293)] - 0x1 ||
      $(steps[x])["find"](_0x4c08cc(0x1e5))[_0x4c08cc(0x293)] > 0x0
    ) {
      $("[data-form=\x22next-btn\x22]")[_0x4c08cc(0x2c3)]();
      if (
        $(steps[x])
          [_0x4c08cc(0x1e3)](_0x4c08cc(0x27f))
          [_0x4c08cc(0x1da)](_0x4c08cc(0x2bf))
      )
        $(steps[x])[_0x4c08cc(0x1e3)](_0x4c08cc(0x27f))[_0x4c08cc(0x294)]();
      else
        $(_0x4c08cc(0x2bc))[_0x4c08cc(0x1da)](_0x4c08cc(0x2bf)) &&
          $(_0x4c08cc(0x2bc))[_0x4c08cc(0x294)]();
      $("[data-form=\x22submit-btn\x22]")["show"](),
        $(_0x4c08cc(0x1f4))[_0x4c08cc(0x294)]();
    } else
      $(_0x4c08cc(0x2bc))[_0x4c08cc(0x294)](),
        $("[data-form=\x22back-btn\x22]")[_0x4c08cc(0x294)](),
        $("[data-form=\x22submit-btn\x22]")[_0x4c08cc(0x2c3)]();
  }
  $($(steps[x])["find"]("input[autofocus]")[0x0])[_0x4c08cc(0x228)](),
    $($(steps[x])[_0x4c08cc(0x1e3)](_0x4c08cc(0x1f3))[0x0])[_0x4c08cc(0x228)](),
    validation();
  for (idx = 0x0; idx <= x; idx++) {
    $($(_0x4c08cc(0x1e9))[idx])[_0x4c08cc(0x2b8)]("disabled");
  }
}
function validateEmail(_0x1dd30d, _0x51b841, _0x43b85a) {
  const _0x59ffae = _0x58ae32;
  let _0xa151b1 = _0x1dd30d[_0x59ffae(0x26c)]("@")
    ? _0x1dd30d["split"]("@")[0x1][_0x59ffae(0x2b6)](".")[0x0]
    : [];
  dom = [];
  _0x51b841 !== undefined &&
    _0x51b841[_0x59ffae(0x2b6)](",")[_0x59ffae(0x1ee)](function (_0x141d14) {
      const _0x59e1d7 = _0x59ffae;
      _0x141d14[_0x59e1d7(0x26c)](_0xa151b1) &&
        dom[_0x59e1d7(0x2d3)](_0xa151b1);
    });
  dom["length"] > 0x0 ? (domainAllowed = ![]) : (domainAllowed = !![]);
  var _0x43c259 = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,20})?$/;
  !_0x43c259[_0x59ffae(0x24a)](_0x1dd30d)
    ? ((emailFilled = ![]), unfilledArr[_0x59ffae(0x2d3)]({ input: _0x43b85a }))
    : (emailFilled = !![]);
}
function phoneValidation(_0x5c40db, _0x3ed033, _0x402589) {
  const _0x5ab4e1 = _0x58ae32;
  if (validPhone)
    return _0x5c40db[_0x5ab4e1(0x262)](phoneFormat) && _0x3ed033 >= _0x402589
      ? !![]
      : ![];
  else {
    if (_0x3ed033 >= _0x402589) return !![];
  }
}
function validation() {
  const _0x11ecb4 = _0x58ae32;
  $(steps[x])[_0x11ecb4(0x1da)]("card") && enableBtn();
  (unfilledArr = []),
    (inputFilled = !![]),
    (radioFilled = !![]),
    (checkboxFilled = !![]),
    (numFilled = !![]),
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
    (textareaLength = $(steps[x])[_0x11ecb4(0x1e3)](_0x11ecb4(0x21b))[
      _0x11ecb4(0x293)
    ]),
    (textInputLength = $(steps[x])[_0x11ecb4(0x1e3)](_0x11ecb4(0x2c4))[
      _0x11ecb4(0x293)
    ]),
    (selectInputLength = $(steps[x])[_0x11ecb4(0x1e3)](_0x11ecb4(0x2cc))[
      _0x11ecb4(0x293)
    ]),
    (emailInputLength = $(steps[x])[_0x11ecb4(0x1e3)](_0x11ecb4(0x201))[
      "length"
    ]),
    (checkboxInputLength = $(steps[x])[_0x11ecb4(0x1e3)](_0x11ecb4(0x2a4))[
      _0x11ecb4(0x293)
    ]);
  textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0
    ? disableBtn()
    : enableBtn();
  checkCount = $(steps[x])[_0x11ecb4(0x1da)](_0x11ecb4(0x206))
    ? $(steps[x])[_0x11ecb4(0x1da)]("checkbox")
    : $(steps[x])[_0x11ecb4(0x1e3)](_0x11ecb4(0x280))[_0x11ecb4(0x293)] > 0x0
    ? $(steps[x])
        [_0x11ecb4(0x1e3)](_0x11ecb4(0x280))
        [_0x11ecb4(0x1da)](_0x11ecb4(0x206))
    : 0x0;
  if (!logicExtra)
    $(steps[x])[_0x11ecb4(0x1e3)](_0x11ecb4(0x1ff))["is"](_0x11ecb4(0x22f)) &&
      (checkCount === "*" ||
      checkCount > $(steps[x])["find"](_0x11ecb4(0x299))["length"]
        ? $(steps[x])
            [_0x11ecb4(0x1e3)](_0x11ecb4(0x299))
            [_0x11ecb4(0x29e)](function () {
              const _0x33aa60 = _0x11ecb4;
              $(this)["is"](":checked")
                ? $(steps[x])[_0x33aa60(0x1e3)](_0x33aa60(0x2c8))[
                    _0x33aa60(0x293)
                  ] < 0x1 &&
                  ((checkboxFilled = !![]),
                  resetInputErrorMessage($(this)[_0x33aa60(0x1f1)]("name")))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0x33aa60(0x2d3)]({
                    input: $(this)[_0x33aa60(0x1f1)](_0x33aa60(0x292)),
                  }));
            })
        : $(steps[x])[_0x11ecb4(0x1e3)](_0x11ecb4(0x243))[_0x11ecb4(0x293)] >=
          checkCount
        ? $(steps[x])[_0x11ecb4(0x1e3)](
            ":input[type=\x22checkbox\x22][required]"
          )[_0x11ecb4(0x293)] > 0x0
          ? $(steps[x])
              [_0x11ecb4(0x1e3)](_0x11ecb4(0x2c8))
              [_0x11ecb4(0x29e)](function () {
                const _0x3c9e97 = _0x11ecb4;
                !$(this)["is"](_0x3c9e97(0x25b))
                  ? ((checkboxFilled = ![]),
                    unfilledArr[_0x3c9e97(0x2d3)]({
                      input: $(this)[_0x3c9e97(0x1f1)](_0x3c9e97(0x292)),
                    }))
                  : ((checkboxFilled = !![]),
                    $(steps[x])[_0x3c9e97(0x1e3)](
                      ":input[type=\x22checkbox\x22][required]:checked"
                    )["length"] >=
                      $(steps[x])["find"](
                        ":input[type=\x22checkbox\x22][required]"
                      )["length"] &&
                      resetInputErrorMessage(
                        $(steps[x])
                          ["find"](_0x3c9e97(0x299))
                          [_0x3c9e97(0x1f1)](_0x3c9e97(0x292))
                      ));
              })
          : ((checkboxFilled = !![]),
            resetInputErrorMessage(
              $(steps[x])
                [_0x11ecb4(0x1e3)](_0x11ecb4(0x299))
                [_0x11ecb4(0x1f1)](_0x11ecb4(0x292))
            ))
        : ((checkboxFilled = ![]),
          $(steps[x])
            [_0x11ecb4(0x1e3)](_0x11ecb4(0x2c8))
            [_0x11ecb4(0x29e)](function () {
              const _0x2709d8 = _0x11ecb4;
              $(this)[_0x2709d8(0x2bb)](_0x2709d8(0x25b)) &&
                unfilledArr["push"]({
                  input: $(this)[_0x2709d8(0x1f1)](_0x2709d8(0x292)),
                });
            }),
          unfilledArr[_0x11ecb4(0x2d3)]({
            input: $(steps[x])
              [_0x11ecb4(0x1e3)](_0x11ecb4(0x299))
              [_0x11ecb4(0x1f1)]("name"),
          }))),
      $(steps[x])
        [_0x11ecb4(0x1e3)](_0x11ecb4(0x221))
        [_0x11ecb4(0x29e)](function (_0x4652c5) {
          const _0x37a90d = _0x11ecb4;
          var _0x2e21cb = $(this)[_0x37a90d(0x1f1)]("name");
          $("input:radio[name=\x22" + _0x2e21cb + _0x37a90d(0x284))[
            _0x37a90d(0x293)
          ] == 0x0
            ? (!empReqRadio[_0x37a90d(0x1e3)](
                (_0x58cf3e) => _0x58cf3e["input"] === _0x4652c5
              ) && empReqRadio[_0x37a90d(0x2d3)]({ input: _0x4652c5 }),
              unfilledArr[_0x37a90d(0x2d3)]({
                input: $(this)[_0x37a90d(0x1f1)]("name"),
              }))
            : (empReqRadio = empReqRadio[_0x37a90d(0x28d)](
                (_0x584113) => _0x584113[_0x37a90d(0x210)] !== _0x4652c5
              )),
            empReqRadio[_0x37a90d(0x293)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x11ecb4(0x1d9))
        [_0x11ecb4(0x29e)](function (_0x20af2a) {
          const _0x13e7b6 = _0x11ecb4;
          let _0x52b81a = $(this)[_0x13e7b6(0x25d)]()[_0x13e7b6(0x293)],
            _0x27e4d4 = $(this)[_0x13e7b6(0x1da)](_0x13e7b6(0x266))
              ? $(this)["data"](_0x13e7b6(0x266))
              : 0x0;
          $(this)[_0x13e7b6(0x25d)]() !== "" && _0x52b81a >= _0x27e4d4
            ? (empReqInput = empReqInput["filter"](
                (_0x5875aa) => _0x5875aa[_0x13e7b6(0x210)] !== _0x20af2a
              ))
            : (!empReqInput["find"](
                (_0x4231d0) => _0x4231d0[_0x13e7b6(0x210)] === _0x20af2a
              ) && empReqInput[_0x13e7b6(0x2d3)]({ input: _0x20af2a }),
              unfilledArr[_0x13e7b6(0x2d3)]({
                input: $(this)[_0x13e7b6(0x1f1)](_0x13e7b6(0x292)),
              })),
            empReqInput[_0x13e7b6(0x293)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x11ecb4(0x1e3)](":input[type=\x22tel\x22][required]")
        [_0x11ecb4(0x29e)](function (_0x331866) {
          const _0x25d3f1 = _0x11ecb4;
          if ($(this)[_0x25d3f1(0x25d)]() !== "") {
            let _0x56b1d9 = $(this)[_0x25d3f1(0x25d)]()[_0x25d3f1(0x293)],
              _0x48297b = $(this)[_0x25d3f1(0x1da)](_0x25d3f1(0x266))
                ? $(this)[_0x25d3f1(0x1da)]("min-character")
                : 0x0;
            $(this)["data"](_0x25d3f1(0x1fc)) &&
              $(this)[_0x25d3f1(0x25d)](
                phoneAutoFormat(
                  $(this)[_0x25d3f1(0x1da)](_0x25d3f1(0x1fc)),
                  $(this)[_0x25d3f1(0x25d)]()
                )
              ),
              phoneValidation($(this)[_0x25d3f1(0x25d)](), _0x56b1d9, _0x48297b)
                ? (empReqTel = empReqTel[_0x25d3f1(0x28d)](
                    (_0xe009c8) => _0xe009c8[_0x25d3f1(0x210)] !== _0x331866
                  ))
                : empReqTel[_0x25d3f1(0x2d3)]({ input: _0x331866 });
          } else !empReqTel[_0x25d3f1(0x1e3)]((_0x306cb9) => _0x306cb9[_0x25d3f1(0x210)] === _0x331866) && empReqTel[_0x25d3f1(0x2d3)]({ input: _0x331866 }), unfilledArr[_0x25d3f1(0x2d3)]({ input: $(this)[_0x25d3f1(0x1f1)]("name") });
          empReqTel[_0x25d3f1(0x293)] === 0x0
            ? (telFilled = !![])
            : (telFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x11ecb4(0x216))
        [_0x11ecb4(0x29e)](function (_0x280d4c) {
          const _0xc69187 = _0x11ecb4;
          $(this)[_0xc69187(0x25d)]() !== ""
            ? (empReqFile = empReqFile[_0xc69187(0x28d)](
                (_0x373199) => _0x373199[_0xc69187(0x210)] !== _0x280d4c
              ))
            : (!empReqFile[_0xc69187(0x1e3)](
                (_0x2e0c34) => _0x2e0c34[_0xc69187(0x210)] === _0x280d4c
              ) && empReqFile[_0xc69187(0x2d3)]({ input: _0x280d4c }),
              unfilledArr[_0xc69187(0x2d3)]({
                input: $(this)[_0xc69187(0x1f1)](_0xc69187(0x292)),
              })),
            empReqFile[_0xc69187(0x293)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        ["find"](":input[type=\x22number\x22][required]")
        [_0x11ecb4(0x29e)](function (_0x35dd9b) {
          const _0x1f232a = _0x11ecb4;
          let _0x5262a7 = $(this)[_0x1f232a(0x25d)]()[_0x1f232a(0x293)],
            _0x129591 = $(this)["data"](_0x1f232a(0x266))
              ? $(this)[_0x1f232a(0x1da)]("min-character")
              : 0x0;
          $(this)["val"]() !== "" && _0x5262a7 >= _0x129591
            ? (empReqNum = empReqNum[_0x1f232a(0x28d)](
                (_0x14c57b) => _0x14c57b[_0x1f232a(0x210)] !== _0x35dd9b
              ))
            : (!empReqNum["find"](
                (_0x4889fc) => _0x4889fc[_0x1f232a(0x210)] === _0x35dd9b
              ) && empReqNum[_0x1f232a(0x2d3)]({ input: _0x35dd9b }),
              unfilledArr[_0x1f232a(0x2d3)]({
                input: $(this)["attr"](_0x1f232a(0x292)),
              })),
            empReqNum[_0x1f232a(0x293)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x11ecb4(0x1e3)](_0x11ecb4(0x23d))
        [_0x11ecb4(0x29e)](function (_0x32acea) {
          const _0x4402d8 = _0x11ecb4;
          let _0x24f995 = $(this)["val"]();
          _0x24f995 === "" && (_0x24f995 = null),
            _0x24f995 != null
              ? (empReqSelect = empReqSelect[_0x4402d8(0x28d)](
                  (_0x45be89) => _0x45be89[_0x4402d8(0x210)] !== _0x32acea
                ))
              : (!empReqSelect[_0x4402d8(0x1e3)](
                  (_0x46fffe) => _0x46fffe[_0x4402d8(0x210)] === _0x32acea
                ) && empReqSelect[_0x4402d8(0x2d3)]({ input: _0x32acea }),
                unfilledArr[_0x4402d8(0x2d3)]({
                  input: $(this)[_0x4402d8(0x1f1)](_0x4402d8(0x292)),
                })),
            empReqSelect["length"] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x11ecb4(0x1e3)]("textarea[required]")
        ["each"](function (_0x42f6d0) {
          const _0x32d57c = _0x11ecb4;
          let _0x64249c = $(this)[_0x32d57c(0x25d)]()[_0x32d57c(0x293)],
            _0x5e8632 = $(this)[_0x32d57c(0x1da)](_0x32d57c(0x266))
              ? $(this)["data"](_0x32d57c(0x266))
              : 0x0;
          $(this)[_0x32d57c(0x25d)]() !== "" && _0x64249c >= _0x5e8632
            ? (empReqTextarea = empReqTextarea[_0x32d57c(0x28d)](
                (_0xf5c1b3) => _0xf5c1b3[_0x32d57c(0x210)] !== _0x42f6d0
              ))
            : (!empReqTextarea[_0x32d57c(0x1e3)](
                (_0x47b48e) => _0x47b48e[_0x32d57c(0x210)] === _0x42f6d0
              ) && empReqTextarea[_0x32d57c(0x2d3)]({ input: _0x42f6d0 }),
              unfilledArr[_0x32d57c(0x2d3)]({
                input: $(this)[_0x32d57c(0x1f1)](_0x32d57c(0x292)),
              })),
            empReqTextarea["length"] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x11ecb4(0x1e3)](_0x11ecb4(0x24d))
        [_0x11ecb4(0x29e)](function () {
          const _0x4347b4 = _0x11ecb4;
          $(this)[_0x4347b4(0x25d)]() !== ""
            ? validateEmail(
                $(this)[_0x4347b4(0x25d)](),
                $(this)[_0x4347b4(0x1da)](_0x4347b4(0x244)),
                $(this)[_0x4347b4(0x1f1)](_0x4347b4(0x292))
              )
            : ((emailFilled = ![]),
              unfilledArr["push"]({
                input: $(this)[_0x4347b4(0x1f1)]("name"),
              }));
        });
  else {
    if ($(steps[x])[_0x11ecb4(0x1da)](_0x11ecb4(0x258)))
      (answer = $(steps[x])
        ["find"](_0x11ecb4(0x2a2))
        ["data"](_0x11ecb4(0x2c6))),
        (selections = selections[_0x11ecb4(0x28d)](
          (_0x33d460) => _0x33d460["step"] !== x
        )),
        selections[_0x11ecb4(0x2d3)]({ step: x, selected: answer });
    else
      $(steps[x])
        [_0x11ecb4(0x1e3)](_0x11ecb4(0x296))
        [_0x11ecb4(0x1da)](_0x11ecb4(0x258)) &&
        ((answer = $(steps[x])
          [_0x11ecb4(0x1e3)](_0x11ecb4(0x296))
          [_0x11ecb4(0x1da)](_0x11ecb4(0x2c6))),
        (selections = selections[_0x11ecb4(0x28d)](
          (_0x5af934) => _0x5af934[_0x11ecb4(0x22d)] !== x
        )),
        selections[_0x11ecb4(0x2d3)]({ step: x, selected: answer }));
    $(steps[x])
      [_0x11ecb4(0x1e3)](_0x11ecb4(0x296))
      [_0x11ecb4(0x1e3)](":input")
      ["is"](_0x11ecb4(0x22f)) &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])["find"](":input[type=\x22checkbox\x22]")[_0x11ecb4(0x293)]
        ? $(steps[x])
            ["find"](_0x11ecb4(0x299))
            [_0x11ecb4(0x29e)](function () {
              const _0x226526 = _0x11ecb4;
              $(this)["is"](_0x226526(0x25b))
                ? $(steps[x])[_0x226526(0x1e3)](_0x226526(0x2c9))["length"] <
                    0x1 &&
                  ((skipTo = undefined),
                  $(this)
                    [_0x226526(0x27b)](_0x226526(0x22c))
                    ["data"](_0x226526(0x2d1)) &&
                    (skipTo = $(this)
                      [_0x226526(0x27b)](_0x226526(0x22c))
                      [_0x226526(0x1da)](_0x226526(0x2d1))),
                  $(this)
                    [_0x226526(0x27b)](_0x226526(0x2a2))
                    [_0x226526(0x1f1)]("data-go-to") &&
                    ((answer = $(this)
                      ["parents"](_0x226526(0x2a2))
                      ["attr"](_0x226526(0x279))),
                    (selections = selections[_0x226526(0x28d)](
                      (_0x184ee0) => _0x184ee0[_0x226526(0x22d)] !== x
                    )),
                    selections[_0x226526(0x2d3)]({ step: x, selected: answer }),
                    skipTo &&
                      (selections["push"]({
                        step: skipTo - 0x2,
                        selected: answer,
                      }),
                      (objIndex = selections["findIndex"](
                        (_0x1824bf) => _0x1824bf[_0x226526(0x22d)] === x
                      )),
                      (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                      (selections[objIndex][_0x226526(0x298)] = x))),
                  (checkboxFilled = !![]),
                  $(steps[x])[_0x226526(0x1e3)](_0x226526(0x288))["length"] >=
                    $(steps[x])[_0x226526(0x1e3)](
                      ":input[type=\x22checkbox\x22][required]"
                    )["length"] &&
                    resetInputErrorMessage(
                      $(steps[x])
                        ["find"](":input[type=\x22checkbox\x22]")
                        [_0x226526(0x1f1)](_0x226526(0x292))
                    ))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0x226526(0x2d3)]({
                    input: $(this)["attr"]("name"),
                  }));
            })
        : $(steps[x])
            [_0x11ecb4(0x1e3)](_0x11ecb4(0x296))
            [_0x11ecb4(0x1e3)](":input[type=\x22checkbox\x22]:checked")[
            "length"
          ] >= checkCount
        ? ($(steps[x])
            [_0x11ecb4(0x1e3)](_0x11ecb4(0x296))
            ["find"](_0x11ecb4(0x299))
            [_0x11ecb4(0x27b)](_0x11ecb4(0x2a2))
            [_0x11ecb4(0x1f1)](_0x11ecb4(0x279)) &&
            ((skipTo = undefined),
            $(steps[x])
              [_0x11ecb4(0x1e3)](_0x11ecb4(0x296))
              [_0x11ecb4(0x1e3)](":input[type=\x22checkbox\x22]")
              [_0x11ecb4(0x27b)](_0x11ecb4(0x22c))
              [_0x11ecb4(0x1f1)]("data-skip-to") &&
              (skipTo = $(steps[x])
                ["find"]("[data-answer]:visible")
                [_0x11ecb4(0x1e3)](":input[type=\x22checkbox\x22]:checked")
                [_0x11ecb4(0x27b)](_0x11ecb4(0x22c))
                [_0x11ecb4(0x1f1)](_0x11ecb4(0x1eb))),
            (answer = $(steps[x])
              [_0x11ecb4(0x1e3)](_0x11ecb4(0x296))
              ["find"](_0x11ecb4(0x299))
              [_0x11ecb4(0x27b)]("[data-go-to]")
              [_0x11ecb4(0x1f1)](_0x11ecb4(0x279))),
            (selections = selections[_0x11ecb4(0x28d)](
              (_0x5f4025) => _0x5f4025["step"] !== x
            )),
            selections["push"]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0x11ecb4(0x2d3)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0x11ecb4(0x1dd)](
                (_0x37b6f9) => _0x37b6f9[_0x11ecb4(0x22d)] === x
              )),
              (selections[objIndex][_0x11ecb4(0x21e)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x11ecb4(0x298)] = x))),
          (selections = selections[_0x11ecb4(0x28d)](
            (_0xe40d68) => _0xe40d68[_0x11ecb4(0x22d)] !== x
          )),
          selections[_0x11ecb4(0x2d3)]({ step: x, selected: answer }),
          (checkboxFilled = !![]),
          $(steps[x])[_0x11ecb4(0x1e3)](
            ":input[type=\x22checkbox\x22][required]:checked"
          )[_0x11ecb4(0x293)] >=
            $(steps[x])["find"](_0x11ecb4(0x2c8))[_0x11ecb4(0x293)] &&
            resetInputErrorMessage(
              $(steps[x])
                [_0x11ecb4(0x1e3)](_0x11ecb4(0x299))
                [_0x11ecb4(0x1f1)](_0x11ecb4(0x292))
            ))
        : ((checkboxFilled = ![]),
          $(steps[x])
            [_0x11ecb4(0x1e3)](_0x11ecb4(0x2c8))
            ["each"](function () {
              const _0x41c18a = _0x11ecb4;
              $(this)[_0x41c18a(0x2bb)](_0x41c18a(0x25b)) &&
                unfilledArr[_0x41c18a(0x2d3)]({
                  input: $(this)[_0x41c18a(0x1f1)](_0x41c18a(0x292)),
                });
            }))),
      $(steps[x])
        [_0x11ecb4(0x1e3)](_0x11ecb4(0x296))
        ["find"]("input:radio[required]")
        [_0x11ecb4(0x29e)](function (_0x315150) {
          const _0x5e8e87 = _0x11ecb4;
          var _0x1bbdd9 = $(this)[_0x5e8e87(0x1f1)](_0x5e8e87(0x292));
          $(_0x5e8e87(0x1f6) + _0x1bbdd9 + _0x5e8e87(0x284))[
            _0x5e8e87(0x293)
          ] == 0x0
            ? (!empReqRadio[_0x5e8e87(0x1e3)](
                (_0x283645) => _0x283645["input"] === _0x315150
              ) && empReqRadio[_0x5e8e87(0x2d3)]({ input: _0x315150 }),
              unfilledArr[_0x5e8e87(0x2d3)]({
                input: $(this)[_0x5e8e87(0x1f1)](_0x5e8e87(0x292)),
              }))
            : (empReqRadio = empReqRadio[_0x5e8e87(0x28d)](
                (_0x46144c) => _0x46144c[_0x5e8e87(0x210)] !== _0x315150
              )),
            empReqRadio["length"] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0x11ecb4(0x1e3)](_0x11ecb4(0x296))
        [_0x11ecb4(0x1e3)](_0x11ecb4(0x1d9))
        [_0x11ecb4(0x29e)](function (_0x64536d) {
          const _0x2c3d86 = _0x11ecb4;
          let _0xf5f0a4 = $(this)[_0x2c3d86(0x25d)]()[_0x2c3d86(0x293)],
            _0xb2b74c = $(this)[_0x2c3d86(0x1da)](_0x2c3d86(0x266))
              ? $(this)["data"](_0x2c3d86(0x266))
              : 0x0;
          $(this)[_0x2c3d86(0x25d)]() !== "" && _0xf5f0a4 >= _0xb2b74c
            ? (empReqInput = empReqInput[_0x2c3d86(0x28d)](
                (_0xf80c5a) => _0xf80c5a[_0x2c3d86(0x210)] !== _0x64536d
              ))
            : (!empReqInput["find"](
                (_0x153fd8) => _0x153fd8[_0x2c3d86(0x210)] === _0x64536d
              ) && empReqInput[_0x2c3d86(0x2d3)]({ input: _0x64536d }),
              unfilledArr[_0x2c3d86(0x2d3)]({
                input: $(this)["attr"](_0x2c3d86(0x292)),
              })),
            empReqInput[_0x2c3d86(0x293)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x11ecb4(0x1e3)](_0x11ecb4(0x296))
        [_0x11ecb4(0x1e3)](":input[type=\x22text\x22]")
        [_0x11ecb4(0x29e)](function (_0x2b8493) {
          const _0x35f17b = _0x11ecb4;
          (skipTo = undefined),
            $(this)
              [_0x35f17b(0x27b)](_0x35f17b(0x22c))
              [_0x35f17b(0x1da)](_0x35f17b(0x2d1)) !== "" &&
              (skipTo = $(this)
                [_0x35f17b(0x27b)]("[data-skip-to]")
                [_0x35f17b(0x1da)](_0x35f17b(0x2d1))),
            $(this)
              [_0x35f17b(0x27b)](_0x35f17b(0x2a2))
              [_0x35f17b(0x1f1)](_0x35f17b(0x279)) &&
              ((answer = $(this)
                [_0x35f17b(0x27b)](_0x35f17b(0x2a2))
                [_0x35f17b(0x1f1)](_0x35f17b(0x279))),
              (selections = selections[_0x35f17b(0x28d)](
                (_0x461248) => _0x461248[_0x35f17b(0x22d)] !== x
              )),
              selections[_0x35f17b(0x2d3)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x35f17b(0x2d3)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x2bdf4e) => _0x2bdf4e["step"] === x
                )),
                (selections[objIndex][_0x35f17b(0x21e)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x35f17b(0x298)] = x)));
        }),
      $(steps[x])
        [_0x11ecb4(0x1e3)]("[data-answer]:visible")
        [_0x11ecb4(0x1e3)](_0x11ecb4(0x297))
        [_0x11ecb4(0x29e)](function (_0x4d1a0f) {
          const _0x3a6e8e = _0x11ecb4;
          let _0x8eab18 = $(this)[_0x3a6e8e(0x25d)]()[_0x3a6e8e(0x293)],
            _0x3549b9 = $(this)["data"]("min-character")
              ? $(this)[_0x3a6e8e(0x1da)](_0x3a6e8e(0x266))
              : 0x0;
          $(this)[_0x3a6e8e(0x25d)]() !== "" && _0x8eab18 >= _0x3549b9
            ? (empReqNum = empReqNum["filter"](
                (_0x2d9044) => _0x2d9044[_0x3a6e8e(0x210)] !== _0x4d1a0f
              ))
            : (!empReqNum["find"](
                (_0x3130ea) => _0x3130ea[_0x3a6e8e(0x210)] === _0x4d1a0f
              ) && empReqNum[_0x3a6e8e(0x2d3)]({ input: _0x4d1a0f }),
              unfilledArr[_0x3a6e8e(0x2d3)]({
                input: $(this)["attr"](_0x3a6e8e(0x292)),
              })),
            empReqNum[_0x3a6e8e(0x293)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x11ecb4(0x1e3)](_0x11ecb4(0x296))
        [_0x11ecb4(0x1e3)](_0x11ecb4(0x218))
        [_0x11ecb4(0x29e)](function (_0xd69848) {
          const _0x9bde0 = _0x11ecb4;
          (skipTo = undefined),
            $(this)
              [_0x9bde0(0x27b)](_0x9bde0(0x22c))
              [_0x9bde0(0x1da)]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0x9bde0(0x27b)](_0x9bde0(0x22c))
                [_0x9bde0(0x1da)]("skip-to")),
            $(this)
              [_0x9bde0(0x27b)](_0x9bde0(0x2a2))
              [_0x9bde0(0x1f1)]("data-go-to") &&
              ((answer = $(this)
                [_0x9bde0(0x27b)](_0x9bde0(0x2a2))
                [_0x9bde0(0x1f1)]("data-go-to")),
              (selections = selections[_0x9bde0(0x28d)](
                (_0x119d33) => _0x119d33[_0x9bde0(0x22d)] !== x
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x9bde0(0x2d3)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x9bde0(0x1dd)](
                  (_0x2d225a) => _0x2d225a[_0x9bde0(0x22d)] === x
                )),
                (selections[objIndex][_0x9bde0(0x21e)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x9bde0(0x298)] = x)));
        }),
      $(steps[x])
        [_0x11ecb4(0x1e3)](_0x11ecb4(0x296))
        [_0x11ecb4(0x1e3)](_0x11ecb4(0x22e))
        ["each"](function (_0x14b51c) {
          const _0xd18b9d = _0x11ecb4;
          if ($(this)[_0xd18b9d(0x25d)]() !== "") {
            let _0x237443 = $(this)[_0xd18b9d(0x25d)]()[_0xd18b9d(0x293)],
              _0x4d682d = $(this)[_0xd18b9d(0x1da)](_0xd18b9d(0x266))
                ? $(this)[_0xd18b9d(0x1da)](_0xd18b9d(0x266))
                : 0x0;
            $(this)[_0xd18b9d(0x1da)](_0xd18b9d(0x1fc)) &&
              $(this)["val"](
                phoneAutoFormat(
                  $(this)["data"]("phone-autoformat"),
                  $(this)[_0xd18b9d(0x25d)]()
                )
              ),
              phoneValidation($(this)[_0xd18b9d(0x25d)](), _0x237443, _0x4d682d)
                ? (empReqTel = empReqTel[_0xd18b9d(0x28d)](
                    (_0x239e98) => _0x239e98[_0xd18b9d(0x210)] !== _0x14b51c
                  ))
                : empReqTel["push"]({ input: _0x14b51c });
          } else !empReqTel["find"]((_0x3a6376) => _0x3a6376["input"] === _0x14b51c) && empReqTel[_0xd18b9d(0x2d3)]({ input: _0x14b51c }), unfilledArr[_0xd18b9d(0x2d3)]({ input: $(this)[_0xd18b9d(0x1f1)](_0xd18b9d(0x292)) });
          empReqTel[_0xd18b9d(0x293)] === 0x0
            ? (telFilled = !![])
            : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x11ecb4(0x1e3)](_0x11ecb4(0x296))
        [_0x11ecb4(0x1e3)](":input[type=\x22tel\x22]")
        [_0x11ecb4(0x29e)](function (_0x592320) {
          const _0x560f09 = _0x11ecb4;
          (skipTo = undefined),
            $(this)
              [_0x560f09(0x27b)]("[data-skip-to]")
              [_0x560f09(0x1da)](_0x560f09(0x2d1)) !== "" &&
              (skipTo = $(this)
                [_0x560f09(0x27b)](_0x560f09(0x22c))
                [_0x560f09(0x1da)](_0x560f09(0x2d1))),
            $(this)
              [_0x560f09(0x27b)](_0x560f09(0x2a2))
              [_0x560f09(0x1f1)](_0x560f09(0x279)) &&
              ((answer = $(this)
                [_0x560f09(0x27b)]("[data-go-to]")
                [_0x560f09(0x1f1)](_0x560f09(0x279))),
              (selections = selections[_0x560f09(0x28d)](
                (_0x32fb4a) => _0x32fb4a[_0x560f09(0x22d)] !== x
              )),
              selections[_0x560f09(0x2d3)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x560f09(0x2d3)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x560f09(0x1dd)](
                  (_0x39b23d) => _0x39b23d["step"] === x
                )),
                (selections[objIndex][_0x560f09(0x21e)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x560f09(0x298)] = x)));
        }),
      $(steps[x])
        ["find"](_0x11ecb4(0x296))
        [_0x11ecb4(0x1e3)](_0x11ecb4(0x216))
        ["each"](function (_0xf9cd7b) {
          const _0x2a22fc = _0x11ecb4;
          $(this)[_0x2a22fc(0x25d)]() !== ""
            ? (empReqFile = empReqFile[_0x2a22fc(0x28d)](
                (_0x5469ee) => _0x5469ee[_0x2a22fc(0x210)] !== _0xf9cd7b
              ))
            : (!empReqFile[_0x2a22fc(0x1e3)](
                (_0x3701e8) => _0x3701e8[_0x2a22fc(0x210)] === _0xf9cd7b
              ) && empReqFile["push"]({ input: _0xf9cd7b }),
              unfilledArr[_0x2a22fc(0x2d3)]({
                input: $(this)[_0x2a22fc(0x1f1)](_0x2a22fc(0x292)),
              })),
            empReqFile["length"] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x11ecb4(0x1e3)](_0x11ecb4(0x296))
        [_0x11ecb4(0x1e3)](_0x11ecb4(0x211))
        [_0x11ecb4(0x29e)](function (_0x5d96ff) {
          const _0x4e3d77 = _0x11ecb4;
          (skipTo = undefined),
            $(this)
              [_0x4e3d77(0x27b)](_0x4e3d77(0x22c))
              [_0x4e3d77(0x1da)](_0x4e3d77(0x2d1)) !== "" &&
              (skipTo = $(this)
                [_0x4e3d77(0x27b)](_0x4e3d77(0x22c))
                [_0x4e3d77(0x1da)](_0x4e3d77(0x2d1))),
            $(this)
              [_0x4e3d77(0x27b)](_0x4e3d77(0x2a2))
              [_0x4e3d77(0x1f1)]("data-go-to") &&
              ((answer = $(this)
                [_0x4e3d77(0x27b)](_0x4e3d77(0x2a2))
                [_0x4e3d77(0x1f1)](_0x4e3d77(0x279))),
              (selections = selections[_0x4e3d77(0x28d)](
                (_0x11a695) => _0x11a695[_0x4e3d77(0x22d)] !== x
              )),
              selections[_0x4e3d77(0x2d3)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x4e3d77(0x2d3)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x4e3d77(0x1dd)](
                  (_0x53d598) => _0x53d598["step"] === x
                )),
                (selections[objIndex][_0x4e3d77(0x21e)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x4e3d77(0x298)] = x)));
        }),
      $(steps[x])
        [_0x11ecb4(0x1e3)](_0x11ecb4(0x296))
        [_0x11ecb4(0x1e3)](_0x11ecb4(0x23d))
        ["each"](function (_0x56815) {
          const _0x253420 = _0x11ecb4;
          $(this)[_0x253420(0x25d)]() !== ""
            ? (empReqSelect = empReqSelect[_0x253420(0x28d)](
                (_0x29c422) => _0x29c422[_0x253420(0x210)] !== _0x56815
              ))
            : (!empReqSelect[_0x253420(0x1e3)](
                (_0x17ffc8) => _0x17ffc8[_0x253420(0x210)] === _0x56815
              ) && empReqSelect[_0x253420(0x2d3)]({ input: _0x56815 }),
              unfilledArr[_0x253420(0x2d3)]({
                input: $(this)[_0x253420(0x1f1)](_0x253420(0x292)),
              })),
            empReqSelect[_0x253420(0x293)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x11ecb4(0x1e3)](_0x11ecb4(0x296))
        [_0x11ecb4(0x1e3)]("select")
        [_0x11ecb4(0x29e)](function (_0xe43ca7) {
          const _0x550853 = _0x11ecb4;
          (skipTo = undefined),
            $(this)
              [_0x550853(0x27b)](_0x550853(0x22c))
              [_0x550853(0x1da)]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0x550853(0x27b)](_0x550853(0x22c))
                [_0x550853(0x1da)]("skip-to")),
            $(this)
              [_0x550853(0x27b)](_0x550853(0x2a2))
              [_0x550853(0x1f1)](_0x550853(0x279)) &&
              ((answer = $(this)
                ["parents"](_0x550853(0x2a2))
                [_0x550853(0x1f1)]("data-go-to")),
              (selections = selections[_0x550853(0x28d)](
                (_0x548fee) => _0x548fee[_0x550853(0x22d)] !== x
              )),
              selections[_0x550853(0x2d3)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0x550853(0x1dd)](
                  (_0x56b186) => _0x56b186[_0x550853(0x22d)] === x
                )),
                (selections[objIndex][_0x550853(0x21e)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x550853(0x298)] = x)));
        }),
      $(steps[x])
        [_0x11ecb4(0x1e3)](_0x11ecb4(0x296))
        [_0x11ecb4(0x1e3)](_0x11ecb4(0x246))
        [_0x11ecb4(0x29e)](function (_0x38f0c8) {
          const _0x1cd7fa = _0x11ecb4;
          let _0x14eb51 = $(this)[_0x1cd7fa(0x25d)]()["length"],
            _0x5d4a21 = $(this)[_0x1cd7fa(0x1da)](_0x1cd7fa(0x266))
              ? $(this)[_0x1cd7fa(0x1da)](_0x1cd7fa(0x266))
              : 0x0;
          $(this)[_0x1cd7fa(0x25d)]() !== "" && _0x14eb51 >= _0x5d4a21
            ? (empReqTextarea = empReqTextarea[_0x1cd7fa(0x28d)](
                (_0x4fec44) => _0x4fec44[_0x1cd7fa(0x210)] !== _0x38f0c8
              ))
            : (!empReqTextarea[_0x1cd7fa(0x1e3)](
                (_0x8f2d43) => _0x8f2d43[_0x1cd7fa(0x210)] === _0x38f0c8
              ) && empReqTextarea[_0x1cd7fa(0x2d3)]({ input: _0x38f0c8 }),
              unfilledArr[_0x1cd7fa(0x2d3)]({
                input: $(this)["attr"](_0x1cd7fa(0x292)),
              })),
            empReqTextarea[_0x1cd7fa(0x293)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x11ecb4(0x296))
        ["find"](_0x11ecb4(0x263))
        [_0x11ecb4(0x29e)](function (_0x360e64) {
          const _0x146359 = _0x11ecb4;
          (skipTo = undefined),
            $(this)
              [_0x146359(0x27b)](_0x146359(0x22c))
              ["data"](_0x146359(0x2d1)) !== "" &&
              (skipTo = $(this)
                [_0x146359(0x27b)](_0x146359(0x22c))
                ["data"](_0x146359(0x2d1))),
            $(this)["parents"](_0x146359(0x2a2))["attr"](_0x146359(0x279)) &&
              ((answer = $(this)
                ["parents"](_0x146359(0x2a2))
                [_0x146359(0x1f1)](_0x146359(0x279))),
              (selections = selections[_0x146359(0x28d)](
                (_0x48d05e) => _0x48d05e["step"] !== x
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0x146359(0x1dd)](
                  (_0x2776ff) => _0x2776ff["step"] === x
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x146359(0x298)] = x)));
        }),
      $(steps[x])
        [_0x11ecb4(0x1e3)](_0x11ecb4(0x296))
        [_0x11ecb4(0x1e3)](_0x11ecb4(0x24d))
        [_0x11ecb4(0x29e)](function (_0x273ba3) {
          const _0x5248f2 = _0x11ecb4;
          $(this)[_0x5248f2(0x25d)]() !== ""
            ? validateEmail(
                $(this)[_0x5248f2(0x25d)](),
                $(this)[_0x5248f2(0x1da)](_0x5248f2(0x244)),
                $(this)[_0x5248f2(0x1f1)]("name")
              )
            : ((emailFilled = ![]),
              unfilledArr[_0x5248f2(0x2d3)]({
                input: $(this)[_0x5248f2(0x1f1)](_0x5248f2(0x292)),
              }));
        }),
      $(steps[x])
        [_0x11ecb4(0x1e3)](_0x11ecb4(0x296))
        [_0x11ecb4(0x1e3)](_0x11ecb4(0x1db))
        [_0x11ecb4(0x29e)](function (_0x407970) {
          const _0x329ef6 = _0x11ecb4;
          (skipTo = undefined),
            $(this)
              ["parents"](_0x329ef6(0x22c))
              [_0x329ef6(0x1da)](_0x329ef6(0x2d1)) !== "" &&
              (skipTo = $(this)
                [_0x329ef6(0x27b)](_0x329ef6(0x22c))
                [_0x329ef6(0x1da)](_0x329ef6(0x2d1))),
            $(this)
              [_0x329ef6(0x27b)](_0x329ef6(0x2a2))
              [_0x329ef6(0x1f1)](_0x329ef6(0x279)) &&
              ((answer = $(this)
                [_0x329ef6(0x27b)](_0x329ef6(0x2a2))
                ["attr"](_0x329ef6(0x279))),
              (selections = selections[_0x329ef6(0x28d)](
                (_0x248a69) => _0x248a69[_0x329ef6(0x22d)] !== x
              )),
              selections[_0x329ef6(0x2d3)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x329ef6(0x2d3)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x49306d) => _0x49306d[_0x329ef6(0x22d)] === x
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x329ef6(0x298)] = x)));
        });
  }
  $(steps[x])[_0x11ecb4(0x1e3)](_0x11ecb4(0x270))["is"](":checked") &&
    ((selArr = []),
    $(steps)
      [_0x11ecb4(0x1e3)](_0x11ecb4(0x222))
      [_0x11ecb4(0x29e)](function (_0x4d2014, _0xf86ba8) {
        const _0x292d78 = _0x11ecb4;
        selArr[_0x292d78(0x2d3)]({ selected: $(this)["data"]("selected") });
      }),
    (selString = []),
    selArr[_0x11ecb4(0x1ee)]((_0x354886) =>
      selString[_0x11ecb4(0x2d3)](_0x354886[_0x11ecb4(0x20f)])
    ),
    (selections = selections[_0x11ecb4(0x28d)](
      (_0xe31cc3) => _0xe31cc3[_0x11ecb4(0x22d)] !== x
    )),
    $(steps[x])
      ["find"](_0x11ecb4(0x296))
      [_0x11ecb4(0x1e3)](_0x11ecb4(0x2b2))
      ["each"](function () {
        const _0x224538 = _0x11ecb4;
        skipTo = undefined;
        if (
          $(this)[_0x224538(0x27b)]("[data-skip-to]")["data"](_0x224538(0x2d1))
        )
          skipTo = $(this)
            [_0x224538(0x27b)](_0x224538(0x22c))
            [_0x224538(0x1da)](_0x224538(0x2d1));
        else
          $(this)[_0x224538(0x1da)](_0x224538(0x2d1)) &&
            (skipTo = $(this)[_0x224538(0x1da)](_0x224538(0x2d1)));
        if ($(this)[_0x224538(0x1da)](_0x224538(0x2c6)))
          (answer = $(this)[_0x224538(0x1f1)]("data-go-to")),
            selections["push"]({ step: x, selected: answer }),
            skipTo &&
              (selections["push"]({ step: skipTo - 0x2, selected: answer }),
              (objIndex = selections["findIndex"](
                (_0x45f55b) => _0x45f55b[_0x224538(0x22d)] === x
              )),
              (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
              (selections[objIndex]["backTo"] = x));
        else
          $(this)
            [_0x224538(0x27b)](_0x224538(0x2a2))
            [_0x224538(0x1da)](_0x224538(0x2c6)) &&
            ((answer = $(this)
              ["parents"]("[data-go-to]")
              [_0x224538(0x1da)]("go-to")),
            selections[_0x224538(0x2d3)]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0x224538(0x2d3)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0x224538(0x1dd)](
                (_0x2f7282) => _0x2f7282[_0x224538(0x22d)] === x
              )),
              (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x224538(0x298)] = x)));
      }),
    logicExtra
      ? ($(steps[x])
          [_0x11ecb4(0x1e3)](_0x11ecb4(0x296))
          [_0x11ecb4(0x1e3)](_0x11ecb4(0x274))
          ["data"](_0x11ecb4(0x1ec)) === !![] ||
          $(steps[x])
            ["find"](_0x11ecb4(0x239))
            [_0x11ecb4(0x1da)](_0x11ecb4(0x1ec)) === !![]) &&
        skip &&
        selections["filter"]((_0x4d3724) => _0x4d3724[_0x11ecb4(0x22d)] === x)[
          _0x11ecb4(0x293)
        ] > 0x0 &&
        textareaLength === 0x0 &&
        textInputLength === 0x0 &&
        emailInputLength === 0x0 &&
        checkboxInputLength === 0x0 &&
        setTimeout(function () {
          (next = !![]), nextStep(), selectionQuiz();
        }, $(steps[x])
          [_0x11ecb4(0x1e3)](_0x11ecb4(0x23a))
          [_0x11ecb4(0x1da)]("radio-delay"))
      : $(steps[x])
          [_0x11ecb4(0x1e3)](_0x11ecb4(0x274))
          [_0x11ecb4(0x1da)](_0x11ecb4(0x1ec)) === !![] &&
        skip &&
        textareaLength === 0x0 &&
        textInputLength === 0x0 &&
        emailInputLength === 0x0 &&
        checkboxInputLength === 0x0 &&
        setTimeout(function () {
          (next = !![]), nextStep(), selectionQuiz();
        }, $(steps[x])
          [_0x11ecb4(0x1e3)]("[data-radio-delay]")
          [_0x11ecb4(0x1da)](_0x11ecb4(0x2ba)))),
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
  const _0x3ff998 = _0x58ae32;
  $(_0x3ff998(0x21f))[_0x3ff998(0x2c3)](),
    unfilledArr[_0x3ff998(0x293)] > 0x0 &&
      unfilledArr[_0x3ff998(0x1ee)](function (_0x20c8b4) {
        const _0x149f78 = _0x3ff998;
        $(_0x149f78(0x1fa) + _0x20c8b4[_0x149f78(0x210)] + "\x22]")
          [_0x149f78(0x242)]("[data-text=\x22error-message\x22]")
          [_0x149f78(0x212)](),
          $(_0x149f78(0x1fa) + _0x20c8b4[_0x149f78(0x210)] + "\x22]")
            [_0x149f78(0x27b)]()
            [_0x149f78(0x2ab)]("[data-text=\x22error-message\x22]")
            [_0x149f78(0x212)](),
          $(_0x149f78(0x260) + _0x20c8b4[_0x149f78(0x210)] + "\x22]")
            [_0x149f78(0x242)](_0x149f78(0x21f))
            ["fadeIn"](),
          $(_0x149f78(0x2af) + _0x20c8b4[_0x149f78(0x210)] + "\x22]")
            [_0x149f78(0x242)](_0x149f78(0x21f))
            ["fadeIn"]();
      });
}
function resetInputErrorMessage(_0x560518) {
  const _0x4940ce = _0x58ae32;
  $(_0x4940ce(0x1fa) + _0x560518 + "\x22]")
    ["siblings"]("[data-text=\x22error-message\x22]")
    ["hide"](),
    $(_0x4940ce(0x1fa) + _0x560518 + "\x22]")
      [_0x4940ce(0x27b)]()
      ["children"](_0x4940ce(0x21f))
      ["hide"](),
    $(_0x4940ce(0x260) + _0x560518 + "\x22]")
      [_0x4940ce(0x242)](_0x4940ce(0x21f))
      [_0x4940ce(0x2c3)](),
    $(_0x4940ce(0x2af) + _0x560518 + "\x22]")
      [_0x4940ce(0x242)]("[data-text=\x22error-message\x22]")
      [_0x4940ce(0x2c3)]();
}
function nextStep() {
  const _0x4c4050 = _0x58ae32;
  customError
    ? ($(_0x4c4050(0x21f))[_0x4c4050(0x2c3)](),
      fill
        ? (x++,
          countCard
            ? ((curStep = curStep + 0x1),
              $("[data-text=\x22total-steps\x22]")[_0x4c4050(0x29b)](
                steps[_0x4c4050(0x293)]
              ))
            : $(steps[x])[_0x4c4050(0x1da)](_0x4c4050(0x258))
            ? (curStep = curStep + 0x0)
            : (curStep = curStep + 0x1),
          $(_0x4c4050(0x28c))[_0x4c4050(0x29b)](curStep),
          (progress = x),
          x <= steps[_0x4c4050(0x293)] - 0x1 &&
            (updateStep(), memory && saveFilledInput()))
        : displayErrorMessage())
    : (x++,
      countCard
        ? ((curStep = curStep + 0x1),
          $("[data-text=\x22total-steps\x22]")[_0x4c4050(0x29b)](
            steps[_0x4c4050(0x293)]
          ))
        : $(steps[x])[_0x4c4050(0x1da)](_0x4c4050(0x258))
        ? (curStep = curStep + 0x0)
        : (curStep = curStep + 0x1),
      $("[data-text=\x22current-step\x22]")["text"](curStep),
      x > progress && (progress = x),
      x <= steps[_0x4c4050(0x293)] - 0x1 &&
        (updateStep(), memory && saveFilledInput()));
}
function backStep() {
  const _0x2b1ec4 = _0x58ae32;
  customError && $(_0x2b1ec4(0x21f))["hide"](),
    countCard
      ? ((curStep = curStep - 0x1),
        $(_0x2b1ec4(0x2d4))[_0x2b1ec4(0x29b)](steps[_0x2b1ec4(0x293)]))
      : $(steps[x])[_0x2b1ec4(0x1da)](_0x2b1ec4(0x258))
      ? (curStep = curStep - 0x0)
      : (curStep = curStep - 0x1),
    $(_0x2b1ec4(0x28c))[_0x2b1ec4(0x29b)](curStep),
    x > 0x0 &&
      ($(progressbar[x])[_0x2b1ec4(0x2b8)](_0x2b1ec4(0x2bd)),
      selections[_0x2b1ec4(0x28d)](
        (_0x19113e) => _0x19113e[_0x2b1ec4(0x21e)] === x
      )[_0x2b1ec4(0x293)] > 0x0
        ? (x = parseInt(
            getSafe(
              () =>
                selections["filter"](
                  (_0x418860) => _0x418860[_0x2b1ec4(0x21e)] === x
                )[0x0][_0x2b1ec4(0x298)]
            )
          ))
        : x--,
      updateStep()),
    ($(steps[x])
      [_0x2b1ec4(0x1e3)](_0x2b1ec4(0x274))
      [_0x2b1ec4(0x1da)](_0x2b1ec4(0x1ec)) === !![] ||
      $(steps[x])
        [_0x2b1ec4(0x1e3)]("[data-answer]:visible")
        [_0x2b1ec4(0x1e3)]("[data-radio-skip]:visible")
        [_0x2b1ec4(0x1da)](_0x2b1ec4(0x1ec)) === !![] ||
      $(steps[x])
        ["find"]("[data-answer][data-radio-skip]:visible")
        [_0x2b1ec4(0x1da)](_0x2b1ec4(0x1ec)) === !![]) &&
      ($(steps[x])
        [_0x2b1ec4(0x1e3)](_0x2b1ec4(0x282))
        [_0x2b1ec4(0x1e6)]("checked", ![]),
      $(steps[x])
        [_0x2b1ec4(0x1e3)](_0x2b1ec4(0x2c5))
        [_0x2b1ec4(0x2b8)](_0x2b1ec4(0x1f0)),
      validation());
}
weightedSelectionRange &&
  $("[data-selection]")[_0x58ae32(0x29e)](function () {
    const _0x48af42 = _0x58ae32;
    $(this)["append"](
      _0x48af42(0x240) + $(this)["data"]("selection") + _0x48af42(0x202)
    );
  });
function selectionQuiz() {
  const _0x37f1b7 = _0x58ae32;
  if ($(this)[_0x37f1b7(0x1e3)]("[data-btn=\x22check\x22]")) {
    $(_0x37f1b7(0x2b9))[_0x37f1b7(0x2c3)](), $(_0x37f1b7(0x249))["hide"]();
    if (weightedSelection) {
      (selTotal = 0x0),
        selArr[_0x37f1b7(0x1ee)](function (_0x64965f) {
          selTotal = selTotal + _0x64965f["selected"];
        }),
        $("[data-text=\x22total-weight\x22]")["text"](selTotal);
      if ($(_0x37f1b7(0x250) + selTotal + "\x22]")[_0x37f1b7(0x293)] > 0x0)
        $(_0x37f1b7(0x250) + selTotal + "\x22]")["fadeIn"]();
      else
        $(_0x37f1b7(0x2a5) + selTotal + ")")
          ? $(_0x37f1b7(0x2a5) + selTotal + ")")
              [_0x37f1b7(0x2ca)](_0x37f1b7(0x2b9))
              ["eq"](0x0)
              [_0x37f1b7(0x294)]()
          : $(_0x37f1b7(0x285))[_0x37f1b7(0x212)]();
    } else {
      let _0x4c8f12 = -0x1;
      $(_0x37f1b7(0x2b9))[_0x37f1b7(0x29e)](function (_0xee0ace) {
        const _0x57df04 = _0x37f1b7;
        $($("[data-selection]")[_0xee0ace])
          [_0x57df04(0x1da)](_0x57df04(0x28f))
          ["includes"](selString[_0x57df04(0x24b)]()) &&
          (_0x4c8f12 = _0xee0ace);
      }),
        _0x4c8f12 > -0x1
          ? $($(_0x37f1b7(0x2b9))[_0x4c8f12])["fadeIn"]()
          : $(_0x37f1b7(0x285))[_0x37f1b7(0x212)]();
    }
  }
}
function triggerInputAllData() {
  const _0x5c27ff = _0x58ae32;
  savedFilledInput &&
    memory &&
    savedFilledInput[_0x5c27ff(0x1ee)]((_0x198fcd) => {
      const _0x5afe85 = _0x5c27ff;
      if (
        $(
          _0x5afe85(0x1fa) +
            _0x198fcd[_0x5afe85(0x217)] +
            _0x5afe85(0x227) +
            _0x198fcd["value"] +
            "\x22]"
        )["attr"](_0x5afe85(0x2c7)) === _0x5afe85(0x1dc)
      )
        $(
          _0x5afe85(0x1fa) +
            _0x198fcd["inputName"] +
            _0x5afe85(0x227) +
            _0x198fcd[_0x5afe85(0x1df)] +
            "\x22]"
        )[_0x5afe85(0x273)]("input");
      else
        _0x198fcd[_0x5afe85(0x1df)] === "on"
          ? $(_0x5afe85(0x1fa) + _0x198fcd[_0x5afe85(0x217)] + "\x22]")[
              "trigger"
            ]("input")
          : ($("input[name=\x22" + _0x198fcd[_0x5afe85(0x217)] + "\x22]")[
              _0x5afe85(0x273)
            ]("input"),
            $(_0x5afe85(0x1fa) + _0x198fcd[_0x5afe85(0x217)] + "\x22]")[
              _0x5afe85(0x273)
            ](_0x5afe85(0x23b)));
    });
}
$(_0x58ae32(0x2bc))["on"]("click", function () {
  (next = !![]), nextStep(), selectionQuiz();
}),
  $("[data-form=\x22back-btn\x22]")["on"]("click", function () {
    (next = ![]), (back = !![]), backStep();
  }),
  $(steps)
    [_0x58ae32(0x1e3)](_0x58ae32(0x1ff))
    ["on"](_0x58ae32(0x210), function (_0x2995c5) {
      const _0x5b190e = _0x58ae32;
      $(this)["attr"](_0x5b190e(0x2c7)) === _0x5b190e(0x1dc) && (skip = !![]),
        validation();
    });
$(_0x58ae32(0x253))[_0x58ae32(0x1da)]("clickable-all")
  ? $(_0x58ae32(0x1e9))[_0x58ae32(0x2b8)](_0x58ae32(0x213))
  : $("[data-form=\x22custom-progress-indicator\x22]")[_0x58ae32(0x1f2)](
      _0x58ae32(0x213)
    );
function clickableIndicator() {
  const _0x134c23 = _0x58ae32;
  $(_0x134c23(0x1e0))[_0x134c23(0x1da)](_0x134c23(0x252)) &&
    ($("[data-form=\x22progress-indicator\x22]")["removeClass"](
      _0x134c23(0x2bd)
    ),
    $(_0x134c23(0x1e0))[_0x134c23(0x1da)](_0x134c23(0x26b))
      ? ((x = $(this)[_0x134c23(0x26e)]()), updateStep())
      : $(this)["index"]() <= progress &&
        ((x = $(this)[_0x134c23(0x26e)]()), updateStep()));
}
$("[data-form=\x22custom-progress-indicator\x22]")["on"](
  _0x58ae32(0x275),
  clickableIndicator
);
$(_0x58ae32(0x2b5))[_0x58ae32(0x1da)](_0x58ae32(0x2b0)) &&
  ($(_0x58ae32(0x2a2))[_0x58ae32(0x29e)](function () {
    const _0x477dbf = _0x58ae32;
    $(this)[_0x477dbf(0x255)](
      _0x477dbf(0x27e),
      $(this)[_0x477dbf(0x1da)](_0x477dbf(0x2c6))
    );
  }),
  $(_0x58ae32(0x248))[_0x58ae32(0x29e)](function () {
    const _0x3beff8 = _0x58ae32;
    $(this)[_0x3beff8(0x255)](
      _0x3beff8(0x237),
      $(this)[_0x3beff8(0x1da)]("answer")
    );
  }));
$("[data-form=\x22submit-btn\x22]")["on"](
  _0x58ae32(0x275),
  function (_0xe0ded1) {
    const _0x5d8058 = _0x58ae32;
    $(this)[_0x5d8058(0x1da)](_0x5d8058(0x2a6)) &&
      (redirectTo = $(this)[_0x5d8058(0x1da)](_0x5d8058(0x2a6))),
      !$(this)["data"](_0x5d8058(0x25c)) &&
        (newTab = $(this)[_0x5d8058(0x1da)](_0x5d8058(0x25c))),
      (successCard = $(this)["data"](_0x5d8058(0x289))),
      _0xe0ded1[_0x5d8058(0x1f7)](),
      _0xe0ded1["stopPropagation"](),
      logicExtra &&
        ($(this)[_0x5d8058(0x1e6)](_0x5d8058(0x2be), !![]),
        $(steps)[_0x5d8058(0x1e3)](_0x5d8058(0x1ff))["prop"]("required", ![])),
      localStorage[_0x5d8058(0x26f)](_0x5d8058(0x229)),
      fill &&
        ($(this)[_0x5d8058(0x1da)](_0x5d8058(0x264))
          ? $(this)[_0x5d8058(0x25d)]($(this)["data"]("wait"))
          : ($(this)[_0x5d8058(0x25d)]("Please\x20wait..."),
            $(this)[_0x5d8058(0x29b)]("Please\x20wait...")),
        $(_0x5d8058(0x2b5))[_0x5d8058(0x251)](),
        grecaptcha[_0x5d8058(0x204)]()[_0x5d8058(0x293)] === 0x0 &&
          ($(_0x5d8058(0x223))["text"](oldSubmitText),
          $(_0x5d8058(0x223))["val"](oldSubmitText)));
  }
);
function resetFormly() {
  const _0xb95bc6 = _0x58ae32;
  $(_0xb95bc6(0x2b5))[_0xb95bc6(0x273)]("reset"),
    $("[data-form=\x22multistep\x22]")
      [_0xb95bc6(0x27b)]()
      ["find"](_0xb95bc6(0x1e2))
      [_0xb95bc6(0x2c3)](),
    (x = 0x0),
    updateStep(),
    $(_0xb95bc6(0x2b5))[_0xb95bc6(0x294)](),
    $(_0xb95bc6(0x223))[_0xb95bc6(0x29b)](oldSubmitText),
    $(_0xb95bc6(0x223))["val"](oldSubmitText),
    $(_0xb95bc6(0x28c))[_0xb95bc6(0x29b)](0x1),
    $(_0xb95bc6(0x2b5))
      [_0xb95bc6(0x1e3)]("input:checkbox")
      [_0xb95bc6(0x242)](_0xb95bc6(0x23f))
      [_0xb95bc6(0x2b8)]("w--redirected-checked");
}
$(document)[_0x58ae32(0x1ef)](function (_0x3a7f5f, _0x548cc2, _0x1cf241) {
  const _0x2e0087 = _0x58ae32;
  if (_0x1cf241["url"]["includes"](_0x2e0087(0x29d))) {
    const _0x562fa0 = _0x548cc2["status"] === 0xc8,
      _0x3ef195 = _0x2e0087(0x20a);
    redirectTo &&
      _0x562fa0 &&
      (newTab
        ? window[_0x2e0087(0x225)](redirectTo, _0x2e0087(0x25e))
        : setTimeout(() => {
            const _0x9c329e = _0x2e0087;
            location[_0x9c329e(0x241)] = redirectTo;
          }, redirectDelay)),
      _0x562fa0 &&
        successCard !== "" &&
        $(_0x2e0087(0x276) + successCard + "\x22]")[_0x2e0087(0x212)](),
      _0x562fa0 &&
        formReset &&
        setTimeout(() => {
          resetFormly();
        }, resetDelay),
      !_0x562fa0 &&
        ($(_0x2e0087(0x223))[_0x2e0087(0x25d)]("Please\x20wait..."),
        $(_0x2e0087(0x223))[_0x2e0087(0x29b)](_0x2e0087(0x2cf)));
  }
}),
  $("[data-btn=\x22edit\x22]")["on"](_0x58ae32(0x275), function () {
    const _0x17ef03 = _0x58ae32;
    var _0xfda7e0 = $(this)
      [_0x17ef03(0x2ca)]()
      [_0x17ef03(0x1e3)](_0x17ef03(0x20c))
      ["data"]("input-field");
    setTimeout(function () {
      const _0x12fbf4 = _0x17ef03;
      $(_0x12fbf4(0x1fa) + _0xfda7e0 + "\x22]")[_0x12fbf4(0x228)]();
    }, 0x64),
      (back = !![]),
      (x = $(this)["data"]("edit-step") - 0x1),
      updateStep(),
      countCard
        ? ((curStep = x + 0x1),
          $("[data-text=\x22total-steps\x22]")[_0x17ef03(0x29b)](
            steps[_0x17ef03(0x293)]
          ))
        : $(steps[x])[_0x17ef03(0x1da)]("card")
        ? (curStep = x + 0x0)
        : (curStep = x + 0x1),
      $(_0x17ef03(0x28c))[_0x17ef03(0x29b)](curStep),
      (back = ![]);
  }),
  $(_0x58ae32(0x2cb))["on"](_0x58ae32(0x275), function () {
    const _0x3fb37a = _0x58ae32;
    $(_0x3fb37a(0x2b5))[_0x3fb37a(0x273)](_0x3fb37a(0x2c2));
    let _0x449baa = $(this);
    $(this)[_0x3fb37a(0x29b)]("Please\x20wait..."),
      setTimeout(function () {
        const _0xfe7585 = _0x3fb37a;
        $(_0x449baa)[_0xfe7585(0x29b)](oldResetText),
          $(_0x449baa)["parents"](".w-form-done")[_0xfe7585(0x2c3)](),
          (x = 0x0),
          updateStep(),
          $(_0xfe7585(0x2b5))[_0xfe7585(0x294)](),
          $(_0xfe7585(0x223))[_0xfe7585(0x29b)](oldSubmitText),
          $(_0xfe7585(0x223))[_0xfe7585(0x25d)](oldSubmitText),
          $(_0x449baa)[_0xfe7585(0x25d)](oldSubmitText),
          $(_0xfe7585(0x28c))[_0xfe7585(0x29b)](0x1),
          $("[data-form=\x22multistep\x22]")
            [_0xfe7585(0x1e3)](_0xfe7585(0x247))
            [_0xfe7585(0x242)](_0xfe7585(0x23f))
            [_0xfe7585(0x2b8)](_0xfe7585(0x1f0));
      }, resetDelay);
  }),
  $(_0x58ae32(0x1ed))["on"](_0x58ae32(0x1fb), function (_0x275473) {
    const _0x1df3de = _0x58ae32;
    _0x275473[_0x1df3de(0x219)] === 0xd &&
      fill &&
      ($("[data-enter]")[_0x1df3de(0x1da)]("enter")
        ? (totalSteps > curStep && $(_0x1df3de(0x2bc))[0x0][_0x1df3de(0x275)](),
          _0x275473["preventDefault"](),
          _0x275473[_0x1df3de(0x25f)]())
        : (_0x275473["preventDefault"](), _0x275473[_0x1df3de(0x25f)]()));
  }),
  $(_0x58ae32(0x1ed))[_0x58ae32(0x203)](function (_0x559ac4) {
    const _0xccac15 = _0x58ae32;
    (_0x559ac4[_0xccac15(0x2b1)] || _0x559ac4[_0xccac15(0x231)]) &&
      _0x559ac4["keyCode"] == 0xd &&
      (x >= steps[_0xccac15(0x293)] - 0x1 && fill
        ? $(steps[x])[_0xccac15(0x1e3)](_0xccac15(0x238))[_0xccac15(0x275)]()
        : (event[_0xccac15(0x1f7)](), event[_0xccac15(0x25f)]()));
  }),
  $(_0x58ae32(0x263))[_0x58ae32(0x1fb)](function (_0x4a50b0) {
    const _0x13e2e9 = _0x58ae32;
    $(this)[_0x13e2e9(0x228)](),
      _0x4a50b0[_0x13e2e9(0x1e8)] == _0x13e2e9(0x283) &&
        (_0x4a50b0[_0x13e2e9(0x1f7)](), _0x4a50b0[_0x13e2e9(0x25f)]()),
      _0x4a50b0[_0x13e2e9(0x209)] &&
        _0x4a50b0[_0x13e2e9(0x1e8)] == "Enter" &&
        $(this)[_0x13e2e9(0x25d)]($(this)["val"]() + "\x0a");
  }),
  $(_0x58ae32(0x2b5))
    [_0x58ae32(0x1e3)](":input")
    ["on"](_0x58ae32(0x23b), function () {
      const _0x4e3d1b = _0x58ae32;
      (all_data = all_data["filter"](
        (_0x4ad87e) =>
          _0x4ad87e["field"] !== $(this)[_0x4e3d1b(0x1f1)](_0x4e3d1b(0x292))
      )),
        $(this)["attr"]("type") === "checkbox"
          ? $(this)["is"](_0x4e3d1b(0x25b))
            ? all_data[_0x4e3d1b(0x2d3)]({
                field: $(this)[_0x4e3d1b(0x1f1)](_0x4e3d1b(0x292)),
                value: $(this)["siblings"]("span")[_0x4e3d1b(0x29b)](),
              })
            : $(_0x4e3d1b(0x2a9) + $(this)["attr"](_0x4e3d1b(0x292)) + "\x22]")[
                "hide"
              ]()
          : (all_data[_0x4e3d1b(0x2d3)]({
              field: $(this)[_0x4e3d1b(0x1f1)](_0x4e3d1b(0x292)),
              value: $(this)[_0x4e3d1b(0x25d)](),
            }),
            $(this)[_0x4e3d1b(0x25d)]() !== "" &&
              resetInputErrorMessage(
                $(this)[_0x4e3d1b(0x1f1)](_0x4e3d1b(0x292))
              )),
        all_data[_0x4e3d1b(0x1ee)](function (_0x1b07ca) {
          const _0xc28bd7 = _0x4e3d1b;
          $(_0xc28bd7(0x2a9) + _0x1b07ca[_0xc28bd7(0x28b)] + "\x22]")[
            _0xc28bd7(0x212)
          ](),
            $(_0xc28bd7(0x2a9) + _0x1b07ca[_0xc28bd7(0x28b)] + "\x22]")[
              _0xc28bd7(0x29b)
            ](_0x1b07ca[_0xc28bd7(0x1df)]);
        });
    }),
  $(_0x58ae32(0x2b5))
    [_0x58ae32(0x1e3)](_0x58ae32(0x263))
    ["on"](_0x58ae32(0x23b), function () {
      const _0x56ee98 = _0x58ae32;
      $(this)["val"]() !== "" &&
        resetInputErrorMessage($(this)[_0x56ee98(0x1f1)](_0x56ee98(0x292))),
        (all_data = all_data[_0x56ee98(0x28d)](
          (_0x1b56e5) =>
            _0x1b56e5[_0x56ee98(0x28b)] !== $(this)[_0x56ee98(0x1f1)]("name")
        )),
        all_data["push"]({
          field: $(this)[_0x56ee98(0x1f1)](_0x56ee98(0x292)),
          value: $(this)[_0x56ee98(0x25d)](),
        }),
        all_data[_0x56ee98(0x1ee)](function (_0x4265fe) {
          const _0x391576 = _0x56ee98;
          $(_0x391576(0x2a9) + _0x4265fe[_0x391576(0x28b)] + "\x22]")[
            _0x391576(0x212)
          ](),
            $(_0x391576(0x2a9) + _0x4265fe[_0x391576(0x28b)] + "\x22]")[
              _0x391576(0x29b)
            ](_0x4265fe[_0x391576(0x1df)]);
        });
    }),
  $(_0x58ae32(0x2b5))
    [_0x58ae32(0x1e3)](_0x58ae32(0x1f8))
    ["on"]("change", function () {
      const _0x200183 = _0x58ae32;
      $(this)[_0x200183(0x25d)]() !== "" &&
        resetInputErrorMessage($(this)[_0x200183(0x1f1)](_0x200183(0x292))),
        (all_data = all_data[_0x200183(0x28d)](
          (_0x32e0ca) =>
            _0x32e0ca[_0x200183(0x28b)] !==
            $(this)[_0x200183(0x1f1)](_0x200183(0x292))
        )),
        all_data[_0x200183(0x2d3)]({
          field: $(this)[_0x200183(0x1f1)]("name"),
          value: $(this)[_0x200183(0x25d)](),
        }),
        all_data[_0x200183(0x1ee)](function (_0x4e7d0c) {
          const _0x585f6a = _0x200183;
          $(_0x585f6a(0x2a9) + _0x4e7d0c[_0x585f6a(0x28b)] + "\x22]")[
            "fadeIn"
          ](),
            $(_0x585f6a(0x2a9) + _0x4e7d0c[_0x585f6a(0x28b)] + "\x22]")[
              _0x585f6a(0x29b)
            ](_0x4e7d0c[_0x585f6a(0x1df)]);
        });
    }),
  updateStep(),
  triggerInputAllData(),
  $("[data-cms-select=cms]")[_0x58ae32(0x29e)](function () {
    const _0x5e4e35 = _0x58ae32,
      _0x3b53fc = $(this)[_0x5e4e35(0x1e3)]("[data-cms-select=text]"),
      _0x5c7b8d = [];
    console["log"](_0x5c7b8d),
      _0x3b53fc[_0x5e4e35(0x29e)](function () {
        const _0x1cbee4 = _0x5e4e35;
        _0x5c7b8d[_0x1cbee4(0x2d3)](
          $(this)[_0x1cbee4(0x29b)]()[_0x1cbee4(0x235)]()
        );
      });
    const _0x1d2551 = $(this)[_0x5e4e35(0x242)](_0x5e4e35(0x277));
    $[_0x5e4e35(0x29e)](_0x5c7b8d, function (_0x2cbe4c, _0x3072e6) {
      const _0x4487ee = _0x5e4e35,
        _0xa9b85b = $(_0x4487ee(0x200))
          [_0x4487ee(0x25d)](_0x3072e6)
          [_0x4487ee(0x29b)](_0x3072e6);
      _0x1d2551["append"](_0xa9b85b);
    });
  }),
  $(_0x58ae32(0x261))["on"](_0x58ae32(0x275), function () {
    const _0x1d6359 = _0x58ae32;
    let _0x5f1499 = $(this)[_0x1d6359(0x1da)](_0x1d6359(0x1f5));
    var _0x263739 = $(_0x1d6359(0x20e) + _0x5f1499 + "\x22]")
        ["eq"](0x0)
        [_0x1d6359(0x1fe)](!![]),
      _0x2bbb4b = $(_0x1d6359(0x2a8) + _0x5f1499 + "\x22]")
        ["eq"](0x0)
        [_0x1d6359(0x1fe)](!![]);
    _0x263739["find"](_0x1d6359(0x210))[_0x1d6359(0x29e)](function () {
      const _0x9b5403 = _0x1d6359;
      $(this)[_0x9b5403(0x25d)](""),
        $(this)[_0x9b5403(0x1f1)](
          _0x9b5403(0x292),
          this[_0x9b5403(0x292)] +
            "-" +
            (parseInt(
              $(_0x9b5403(0x20e) + _0x5f1499 + "\x22]")
                ["last"]()
                [_0x9b5403(0x26e)]()
            ) +
              0x1)
        ),
        $(this)["attr"](
          "data-name",
          $(this)[_0x9b5403(0x1da)]("name") +
            "-" +
            (parseInt(
              $(_0x9b5403(0x20e) + _0x5f1499 + "\x22]")
                [_0x9b5403(0x267)]()
                [_0x9b5403(0x26e)]()
            ) +
              0x1)
        );
    }),
      _0x2bbb4b["find"](_0x1d6359(0x20c))[_0x1d6359(0x29e)](function () {
        const _0x3bd496 = _0x1d6359;
        $(this)["attr"](
          _0x3bd496(0x232),
          $(this)[_0x3bd496(0x1da)](_0x3bd496(0x2ad)) +
            "-" +
            (parseInt(
              $(_0x3bd496(0x20e) + _0x5f1499 + "\x22]")
                ["last"]()
                [_0x3bd496(0x26e)]()
            ) +
              0x1)
        );
      }),
      $(_0x1d6359(0x2a7) + _0x5f1499 + "\x22]")[_0x1d6359(0x255)](_0x263739),
      $("[data-display-wrapper=\x22" + _0x5f1499 + "\x22]")[_0x1d6359(0x255)](
        _0x2bbb4b
      ),
      $("[data-index=\x22" + _0x5f1499 + "\x22]")["each"](function () {
        const _0x48738a = _0x1d6359;
        $(this)["text"](
          $(this)
            [_0x48738a(0x27b)](_0x48738a(0x20e) + _0x5f1499 + "\x22]")
            [_0x48738a(0x26e)]() + 0x1
        );
      }),
      $(_0x1d6359(0x271) + _0x5f1499 + "\x22]")["each"](function () {
        const _0x25ea4d = _0x1d6359;
        $(this)[_0x25ea4d(0x29b)](
          $(this)
            [_0x25ea4d(0x27b)](_0x25ea4d(0x2a8) + _0x5f1499 + "\x22]")
            [_0x25ea4d(0x26e)]() + 0x1
        );
      }),
      validation();
  }),
  scrollTop();
