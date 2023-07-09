//9-7-23 update - Bug fixes

const _0x36b7c9 = _0x32b7;
(function (_0x28a3f3, _0x4b2540) {
  const _0x5931f6 = _0x32b7,
    _0x1fd6d5 = _0x28a3f3();
  while (!![]) {
    try {
      const _0x5074a3 =
        -parseInt(_0x5931f6(0x139)) / 0x1 +
        parseInt(_0x5931f6(0x189)) / 0x2 +
        parseInt(_0x5931f6(0xe7)) / 0x3 +
        (-parseInt(_0x5931f6(0x13b)) / 0x4) *
          (-parseInt(_0x5931f6(0x18e)) / 0x5) +
        (-parseInt(_0x5931f6(0x14a)) / 0x6) *
          (parseInt(_0x5931f6(0x152)) / 0x7) +
        (-parseInt(_0x5931f6(0xee)) / 0x8) *
          (parseInt(_0x5931f6(0x150)) / 0x9) +
        -parseInt(_0x5931f6(0x1b3)) / 0xa;
      if (_0x5074a3 === _0x4b2540) break;
      else _0x1fd6d5["push"](_0x1fd6d5["shift"]());
    } catch (_0x2a2f38) {
      _0x1fd6d5["push"](_0x1fd6d5["shift"]());
    }
  }
})(_0x2c47, 0x53de2);
let x = 0x0,
  curStep = 0x0,
  steps = $("[data-form=\x22step\x22]"),
  progressbarClone = $(_0x36b7c9(0x192))[_0x36b7c9(0x17e)](),
  progressbar,
  countCard = !![],
  weightedSelection = $(_0x36b7c9(0x19d))["data"](_0x36b7c9(0x105)),
  weightedSelectionRange = $(_0x36b7c9(0x1aa))[_0x36b7c9(0x12e)](
    "weighted-selection-range"
  ),
  selectMultiple = $(_0x36b7c9(0x1b8))[_0x36b7c9(0x12e)]("select-multiple"),
  customError = $(_0x36b7c9(0x186))["data"](_0x36b7c9(0x17d)),
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
  reinitIX = $(_0x36b7c9(0x106))[_0x36b7c9(0x12e)](_0x36b7c9(0x194)),
  textareaLength = 0x0,
  textInputLength = 0x0,
  emailInputLength = 0x0,
  selectInputLength = 0x0,
  checkboxInputLength = 0x0,
  filledInput = [],
  savedFilledInput = JSON["parse"](localStorage["getItem"](_0x36b7c9(0x1d2))),
  memory = $(_0x36b7c9(0x173))[_0x36b7c9(0x12e)]("memory"),
  quiz = $("[data-quiz]")[_0x36b7c9(0x12e)](_0x36b7c9(0x10e)),
  progress = 0x0;
function _0x2c47() {
  const _0x2d5656 = [
    ":input[type=\x22checkbox\x22][required]:checked",
    "body",
    "[data-clone-wrapper=\x22",
    "281118Mlfbmw",
    "[data-display-index=\x22",
    "html,\x20body",
    "[data-form=\x22multistep\x22]",
    "scroll-top",
    "backTo",
    "183321ASVwpF",
    "add-new",
    "49uqpazL",
    "none",
    "[data-success-card]",
    "input[type=\x22email\x22]:visible",
    ":input[type=\x22radio\x22]",
    "novalidate",
    "[data-enter]",
    "[data-count-card]",
    "input[type=\x22radio\x22]",
    "show",
    "top",
    "forEach",
    "history",
    "0.4",
    "log",
    "index",
    "current",
    "animate",
    "data-go-to",
    "textarea[required]:visible",
    "text",
    "value",
    "parent",
    ".w-form-formradioinput",
    ":input[type=\x22number\x22][required]",
    "[data-range]:contains(",
    "val",
    "shiftKey",
    "open",
    "textarea",
    "name",
    "length",
    "xxx.xxx.xxxx",
    "[data-memory]",
    "select",
    "div.g-recaptcha",
    "addClass",
    "readystatechange",
    "w--redirected-checked",
    ":input[type=\x22text\x22][required]",
    "keypress",
    "[data-cms-select=text]",
    "preventDefault",
    "custom-error-message",
    "clone",
    "[data-form=\x22submit-btn\x22]:visible",
    "[data-text=\x22current-step\x22]",
    "redirect",
    "(xxx)\x20xxx\x20xxxx",
    "edit-step",
    "data-radio-skip",
    "https://webflow.com/api/v1/form/",
    "[data-custom-error-message]",
    "selected",
    "prop",
    "1345182JRGVzm",
    "[data-selected]:checked",
    "click",
    "[data-answer]",
    "input[name=\x22",
    "2504365hwquHO",
    "[data-form=\x22submit-btn\x22]",
    "[data-add-new]",
    "textarea[required]",
    "[data-form=\x22progress-indicator\x22]",
    "[data-display-wrapper=\x22",
    "reinit",
    "filter",
    "some",
    "[data-input-field=\x22",
    "css",
    ".w-form-done",
    "metaKey",
    "[data-cms-select=input]",
    "auto",
    "[data-weighted-selection]",
    ":input[type=\x27radio\x27]:checked",
    "checked",
    "test",
    ":input[type=\x22email\x22][required]",
    "fadeIn",
    "[type=\x22checkbox\x22]",
    "clickable-all",
    "[data-answer]:visible",
    "[data-selection-weight]",
    "submit-show",
    "[data-form=\x22back-btn\x22]",
    "[data-form=\x22step\x22][data-card]",
    "[data-weighted-selection-range]",
    ":input[type=\x22file\x22][required]",
    "query-param",
    "[data-btn=\x22edit\x22]",
    "option[value=\x22$(this).val()\x22]",
    "span",
    "change",
    "ajaxComplete",
    "[data-form=\x22next-btn\x22][type=\x22submit\x22]",
    "463720fGiXxu",
    "_blank",
    "removeClass",
    "join",
    "[data-index=\x22",
    "[data-select-multiple]",
    "match",
    "input:radio[required]",
    "[data-clickable]",
    "option[value=\x22",
    ":input[required]",
    "[data-form=\x22next-btn\x22][data-submit-show]",
    "button",
    "skipTo",
    "data-skip-to",
    "wait",
    "[data-checkbox]",
    "debug-mode",
    "delete",
    "input[type=\x22text\x22][required]:visible",
    "<br>Data\x20Go\x20To\x20=\x20",
    "input:checkbox",
    "[data-text=\x22total-steps\x22]",
    "submit",
    ":input[type=\x22tel\x22]",
    "[data-answer][data-radio-skip]:visible",
    "find",
    "enter",
    "destroy",
    "new-tab",
    "setItem",
    "filledInput",
    "findIndex",
    "input",
    "phone-autoformat",
    "reset",
    "[data-radio-delay]",
    "field",
    "step",
    ":input[type=\x22tel\x22][required]",
    "[data-reset-delay]",
    "[data-btn=\x22reset\x22]",
    "location",
    "each",
    "removeItem",
    "input:radio[name=\x22",
    "siblings",
    "children",
    "keydown",
    "Webflow",
    "[data-radio-skip]:visible",
    "includes",
    "clickable",
    "select[required]",
    "\x22]:checked",
    "824004JHeAsh",
    "[data-phone-validation]",
    "[data-cms-select=cms]",
    "parents",
    "redirect-delay",
    "[data-redirect-delay]",
    "input-field",
    "136tarPjK",
    "go-to",
    "(xxx)\x20xxx-xxxx",
    "last",
    "attr",
    "block-domain",
    "[data-input-field]",
    "<div\x20data-range=\x22selection\x22\x20style=\x22display:none\x20!important\x22>",
    ":checked",
    "trigger",
    "stopPropagation",
    "card",
    "[data-selection=\x22other\x22]",
    "xxx-xxx-xxxx",
    "key",
    "textarea[autofocus]",
    "type",
    "append",
    "ms-field",
    "split",
    "[data-form=\x22progress\x22]",
    "[data-selection=\x22",
    "[data-go-to]",
    "weighted-selection",
    "[data-reinit]",
    "reset-delay",
    "keyCode",
    "\x22][value=\x22",
    ".w-radio-input",
    "data-name",
    "logic-extra",
    "<br>Data\x20Answer\x20=\x20",
    "quiz",
    ":input[type=\x22checkbox\x22]",
    "slow",
    "Please\x20wait...",
    "input[type=\x22submit\x22]",
    "[data-clone=\x22",
    "[data-form=\x22next-btn\x22]",
    "xxx\x20xxx\x20xxxx",
    "[data-form=\x22custom-progress-indicator\x22]",
    "[data-success-card=\x22",
    ".w-checkbox-input",
    "[type=\x22submit\x22]",
    "required",
    "Enter",
    "scroll-top-offset",
    "href",
    "select[required]:visible",
    "[data-form=\x22step\x22]",
    "disabled",
    ":input[type=\x22checkbox\x22][required]",
    "replace",
    "push",
    "data-radio-delay",
    "inputName",
    "ctrlKey",
    "[data-form-ms=\x22submit-btn\x22]",
    "hide",
    "[data-query-param]",
    "focus",
    "[data-text=\x22total-weight\x22]",
    "min-character",
    "searchParams",
    "data",
    "[data-selection]",
    "offset",
    "radio-skip",
    "not",
    ":input[type=\x22number\x22]",
    "xxx-xxx\x20xxxx",
    "textarea[name=\x22",
    "checkbox",
    ":input[type=\x22checkbox\x22]:checked",
    "[data-skip-to]",
    "383994xuehCe",
    "require",
    "4QwtUEW",
    "radio",
    "input[type=\x22checkbox\x22]:visible",
    "[data-answer=\x22",
    "select[name=\x22",
    "dispatchEvent",
    ":input",
    "[data-text=\x22error-message\x22]",
    "remove",
    "skip-to",
    "phone-validation",
    "substring",
  ];
  _0x2c47 = function () {
    return _0x2d5656;
  };
  return _0x2c47();
}
const urlFormly = new URL(window[_0x36b7c9(0xda)][_0x36b7c9(0x11d)]);
let params = $(_0x36b7c9(0x129))[_0x36b7c9(0x12e)](_0x36b7c9(0x1ac)),
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
  logicExtra = $(_0x36b7c9(0x14d))[_0x36b7c9(0x12e)](_0x36b7c9(0x10c)),
  oldSubmitText = $("[data-form=\x22submit-btn\x22]")[_0x36b7c9(0x16c)](),
  oldResetText = $("[data-btn=\x22reset\x22]")["text"](),
  formReset = $(_0x36b7c9(0x14d))["data"]("reset"),
  successCard = "",
  redirectTo = "",
  totalSteps = 0x0,
  checkCount = 0x0,
  resetDelay = $(_0x36b7c9(0xd8))[_0x36b7c9(0x12e)](_0x36b7c9(0x107))
    ? $(_0x36b7c9(0xd8))[_0x36b7c9(0x12e)]("reset-delay")
    : 0x7d0,
  redirectDelay = $("[data-redirect-delay]")[_0x36b7c9(0x12e)]("redirect-delay")
    ? $(_0x36b7c9(0xec))["data"](_0x36b7c9(0xeb))
    : 0x7d0,
  newTab = !![],
  unfilledArr = [],
  phoneFormat = /^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
  validPhone = $(_0x36b7c9(0xe8))[_0x36b7c9(0x12e)](_0x36b7c9(0x145)),
  scrollToTop = $("[data-form=\x22multistep\x22]")[_0x36b7c9(0x12e)](
    _0x36b7c9(0x14e)
  ),
  scrollTopOffset = parseInt(
    $("[data-form=\x22multistep\x22]")[_0x36b7c9(0x12e)](_0x36b7c9(0x11c))
  ),
  notRobot = !![];
all_data = [];
$(_0x36b7c9(0x175))[_0x36b7c9(0x171)] > 0x0 && (notRobot = ![]);
function recaptcha(_0x17d802) {
  notRobot = !![];
}
$(_0x36b7c9(0x159))[_0x36b7c9(0x171)] > 0x0 &&
  (countCard = $(_0x36b7c9(0x159))[_0x36b7c9(0x12e)]("count-card"));
$(_0x36b7c9(0x142))[_0x36b7c9(0x128)](),
  $(progressbarClone)["removeClass"](_0x36b7c9(0x162)),
  $(_0x36b7c9(0x102))["children"]()[_0x36b7c9(0x143)](),
  $(_0x36b7c9(0x18f))[_0x36b7c9(0x128)](),
  $(_0x36b7c9(0x127))["hide"](),
  steps["each"](function () {
    const _0x2dd200 = _0x36b7c9;
    $(_0x2dd200(0x102))[_0x2dd200(0xff)](
      progressbarClone[_0x2dd200(0x17e)](!![], !![])
    );
  }),
  $(_0x36b7c9(0xf4))[_0x36b7c9(0x128)]();
countCard
  ? ((curStep = curStep + 0x1),
    (totalSteps = steps[_0x36b7c9(0x171)]),
    $(_0x36b7c9(0x1c9))[_0x36b7c9(0x166)](totalSteps))
  : ($(steps[x])["data"](_0x36b7c9(0xf9))
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    (totalSteps = $("[data-form=\x22step\x22]:not([data-card=\x22true\x22])")[
      _0x36b7c9(0x171)
    ]),
    $(_0x36b7c9(0x1c9))[_0x36b7c9(0x166)](totalSteps),
    $(_0x36b7c9(0x1a9))[_0x36b7c9(0xdb)](function () {
      const _0x5abc65 = _0x36b7c9;
      $($(_0x5abc65(0x192))[$(this)[_0x5abc65(0x161)]()])[_0x5abc65(0x128)]();
    }));
(progressbar = $("[data-form=\x22progress\x22]")[_0x36b7c9(0xdf)]()),
  $(_0x36b7c9(0x192))["on"](_0x36b7c9(0x18b), clickableIndicator),
  $(_0x36b7c9(0x180))[_0x36b7c9(0x166)](curStep),
  steps[_0x36b7c9(0x128)](),
  $(_0x36b7c9(0x154))["hide"](),
  $(_0x36b7c9(0x1b2))[_0x36b7c9(0xdb)](function () {
    const _0x315332 = _0x36b7c9;
    $(this)[_0x315332(0xf2)](_0x315332(0xfe), _0x315332(0x1bf));
  });
function getParams() {
  const _0x5f3544 = _0x36b7c9;
  urlFormly["searchParams"][_0x5f3544(0x15d)](function (_0x57defd, _0x6855bf) {
    const _0x407357 = _0x5f3544;
    searchQ[_0x407357(0x123)]({ val: _0x57defd, key: _0x6855bf });
  });
}
function getSafe(_0x2a6cc2, _0x29db45) {
  try {
    return _0x2a6cc2();
  } catch (_0x467057) {
    return _0x29db45;
  }
}
function phoneAutoFormat(_0x440e3e, _0x4c7b47) {
  const _0x1896bc = _0x36b7c9;
  var _0x9c928a = "";
  numericInput = _0x4c7b47[_0x1896bc(0x122)](/\D/g, "");
  if (_0x440e3e === _0x1896bc(0xfb))
    numericInput[_0x1896bc(0x171)] > 0x0 &&
      (_0x9c928a += numericInput["substring"](0x0, 0x3)),
      numericInput[_0x1896bc(0x171)] > 0x3 &&
        (_0x9c928a += "-" + numericInput[_0x1896bc(0x146)](0x3, 0x6)),
      numericInput[_0x1896bc(0x171)] > 0x6 &&
        (_0x9c928a += "-" + numericInput[_0x1896bc(0x146)](0x6, 0xa));
  else {
    if (_0x440e3e === _0x1896bc(0x115))
      numericInput["length"] > 0x0 &&
        (_0x9c928a += numericInput[_0x1896bc(0x146)](0x0, 0x3)),
        numericInput[_0x1896bc(0x171)] > 0x3 &&
          (_0x9c928a += "\x20" + numericInput[_0x1896bc(0x146)](0x3, 0x6)),
        numericInput[_0x1896bc(0x171)] > 0x6 &&
          (_0x9c928a += "\x20" + numericInput[_0x1896bc(0x146)](0x6, 0xa));
    else {
      if (_0x440e3e === _0x1896bc(0xf0))
        numericInput[_0x1896bc(0x171)] > 0x0 &&
          (_0x9c928a += "(" + numericInput["substring"](0x0, 0x3) + ")"),
          numericInput[_0x1896bc(0x171)] > 0x3 &&
            (_0x9c928a += "\x20" + numericInput[_0x1896bc(0x146)](0x3, 0x6)),
          numericInput[_0x1896bc(0x171)] > 0x6 &&
            (_0x9c928a += "-" + numericInput["substring"](0x6, 0xa));
      else {
        if (_0x440e3e === _0x1896bc(0x182))
          numericInput[_0x1896bc(0x171)] > 0x0 &&
            (_0x9c928a += "(" + numericInput[_0x1896bc(0x146)](0x0, 0x3) + ")"),
            numericInput[_0x1896bc(0x171)] > 0x3 &&
              (_0x9c928a += "\x20" + numericInput[_0x1896bc(0x146)](0x3, 0x6)),
            numericInput[_0x1896bc(0x171)] > 0x6 &&
              (_0x9c928a += "\x20" + numericInput[_0x1896bc(0x146)](0x6, 0xa));
        else {
          if (_0x440e3e === _0x1896bc(0x134))
            numericInput[_0x1896bc(0x171)] > 0x0 &&
              (_0x9c928a += numericInput[_0x1896bc(0x146)](0x0, 0x3)),
              numericInput["length"] > 0x3 &&
                (_0x9c928a += "-" + numericInput[_0x1896bc(0x146)](0x3, 0x6)),
              numericInput[_0x1896bc(0x171)] > 0x6 &&
                (_0x9c928a +=
                  "\x20" + numericInput[_0x1896bc(0x146)](0x6, 0xa));
          else
            _0x440e3e === _0x1896bc(0x172)
              ? (numericInput[_0x1896bc(0x171)] > 0x0 &&
                  (_0x9c928a += numericInput[_0x1896bc(0x146)](0x0, 0x3)),
                numericInput[_0x1896bc(0x171)] > 0x3 &&
                  (_0x9c928a += "." + numericInput[_0x1896bc(0x146)](0x3, 0x6)),
                numericInput["length"] > 0x6 &&
                  (_0x9c928a += "." + numericInput[_0x1896bc(0x146)](0x6, 0xa)))
              : (_0x9c928a = _0x4c7b47);
        }
      }
    }
  }
  return _0x9c928a;
}
savedFilledInput &&
  memory &&
  savedFilledInput["forEach"]((_0x111c33) => {
    const _0x120d1d = _0x36b7c9;
    if (
      $(
        _0x120d1d(0x18d) +
          _0x111c33[_0x120d1d(0x125)] +
          _0x120d1d(0x109) +
          _0x111c33["value"] +
          "\x22]"
      )[_0x120d1d(0xf2)](_0x120d1d(0xfe)) === _0x120d1d(0x13c)
    )
      $(
        _0x120d1d(0x18d) +
          _0x111c33[_0x120d1d(0x125)] +
          "\x22][value=\x22" +
          _0x111c33[_0x120d1d(0x167)] +
          "\x22]"
      )["click"](),
        $(
          _0x120d1d(0x18d) +
            _0x111c33[_0x120d1d(0x125)] +
            _0x120d1d(0x109) +
            _0x111c33[_0x120d1d(0x167)] +
            "\x22]"
        )
          ["siblings"](_0x120d1d(0x10a))
          [_0x120d1d(0x176)](_0x120d1d(0x178));
    else
      _0x111c33[_0x120d1d(0x167)] === "on"
        ? ($(_0x120d1d(0x18d) + _0x111c33[_0x120d1d(0x125)] + "\x22]")[
            "click"
          ](),
          $(_0x120d1d(0x18d) + _0x111c33[_0x120d1d(0x125)] + "\x22]")
            [_0x120d1d(0xde)](_0x120d1d(0x118))
            [_0x120d1d(0x176)](_0x120d1d(0x178)))
        : ($(_0x120d1d(0x18d) + _0x111c33["inputName"] + "\x22]")[
            _0x120d1d(0x16c)
          ](_0x111c33["value"]),
          $(_0x120d1d(0x135) + _0x111c33[_0x120d1d(0x125)] + "\x22]")[
            _0x120d1d(0x16c)
          ](_0x111c33[_0x120d1d(0x167)]),
          $(_0x120d1d(0x13f) + _0x111c33[_0x120d1d(0x125)] + "\x22]")
            [_0x120d1d(0x1cd)](
              "option[value=\x22" + _0x111c33[_0x120d1d(0x167)] + "\x22]"
            )
            ["prop"]("selected", !![]));
  });
params &&
  (getParams(),
  searchQ[_0x36b7c9(0x15d)]((_0x56837b) => {
    const _0x4cca21 = _0x36b7c9;
    if (
      $(
        _0x4cca21(0x18d) +
          _0x56837b["key"] +
          _0x4cca21(0x109) +
          _0x56837b[_0x4cca21(0x16c)] +
          "\x22]"
      )["attr"](_0x4cca21(0xfe)) === "radio"
    )
      $(
        _0x4cca21(0x18d) +
          _0x56837b[_0x4cca21(0xfc)] +
          "\x22][value=\x22" +
          _0x56837b[_0x4cca21(0x16c)] +
          "\x22]"
      )["click"](),
        $(
          "input[name=\x22" +
            _0x56837b[_0x4cca21(0xfc)] +
            _0x4cca21(0x109) +
            _0x56837b[_0x4cca21(0x16c)] +
            "\x22]"
        )
          [_0x4cca21(0xde)](_0x4cca21(0x10a))
          [_0x4cca21(0x176)](_0x4cca21(0x178)),
        $(
          _0x4cca21(0x18d) +
            _0x56837b[_0x4cca21(0xfc)] +
            "\x22][value=\x22" +
            _0x56837b[_0x4cca21(0x16c)] +
            "\x22]"
        )["trigger"](_0x4cca21(0x1d4));
    else
      _0x56837b["val"] === "on"
        ? ($(_0x4cca21(0x18d) + _0x56837b[_0x4cca21(0xfc)] + "\x22]")[
            "click"
          ](),
          $(_0x4cca21(0x18d) + _0x56837b[_0x4cca21(0xfc)] + "\x22]")
            ["siblings"](_0x4cca21(0x118))
            [_0x4cca21(0x176)](_0x4cca21(0x178)),
          $(_0x4cca21(0x18d) + _0x56837b[_0x4cca21(0xfc)] + "\x22]")[
            _0x4cca21(0xf7)
          ](_0x4cca21(0x1d4)))
        : ($(_0x4cca21(0x18d) + _0x56837b[_0x4cca21(0xfc)] + "\x22]")[
            _0x4cca21(0x16c)
          ](_0x56837b[_0x4cca21(0x16c)]),
          $(_0x4cca21(0x135) + _0x56837b[_0x4cca21(0xfc)] + "\x22]")[
            _0x4cca21(0x16c)
          ](_0x56837b[_0x4cca21(0x16c)]),
          $("select[name=\x22" + _0x56837b[_0x4cca21(0xfc)] + "\x22]")
            [_0x4cca21(0x1cd)](
              _0x4cca21(0x1bc) + _0x56837b[_0x4cca21(0x16c)] + "\x22]"
            )
            ["prop"](_0x4cca21(0x187), !![]),
          $(_0x4cca21(0x18d) + _0x56837b[_0x4cca21(0xfc)] + "\x22]")["trigger"](
            "input"
          ),
          $(_0x4cca21(0x18d) + _0x56837b["key"] + "\x22]")["trigger"](
            _0x4cca21(0x1b0)
          ));
  }));
quiz &&
  steps[_0x36b7c9(0xdb)](function () {
    const _0x2e749d = _0x36b7c9;
    $(this)[_0x2e749d(0xdf)]()[_0x2e749d(0xf2)](_0x2e749d(0x184), !![]),
      $(this)[_0x2e749d(0xdf)]()[_0x2e749d(0xf2)](_0x2e749d(0x124), 0xfa);
  });
function disableBtn(_0x11161b) {
  const _0x5816fa = _0x36b7c9;
  (fill = ![]),
    !customError &&
      ($(_0x5816fa(0x114))[_0x5816fa(0x198)]({
        opacity: "0.4",
        "pointer-events": _0x5816fa(0x153),
      }),
      $(_0x5816fa(0x114))["addClass"]("disabled"),
      $(_0x5816fa(0x18f))[_0x5816fa(0x198)]({
        opacity: "0.4",
        "pointer-events": _0x5816fa(0x153),
      }),
      $("[data-form=\x22submit-btn\x22]")[_0x5816fa(0x176)](_0x5816fa(0x120)),
      $(_0x5816fa(0x127))[_0x5816fa(0x198)]({
        opacity: _0x5816fa(0x15f),
        "pointer-events": _0x5816fa(0x153),
      }),
      $(_0x5816fa(0x127))[_0x5816fa(0x176)]("disabled"));
}
function enableBtn() {
  const _0x3f5437 = _0x36b7c9;
  (fill = !![]),
    $(_0x3f5437(0x114))[_0x3f5437(0x198)]({
      "pointer-events": _0x3f5437(0x19c),
      opacity: "1",
    }),
    $("[data-form=\x22next-btn\x22]")["removeClass"](_0x3f5437(0x120)),
    $(_0x3f5437(0x18f))[_0x3f5437(0x198)]({
      "pointer-events": "auto",
      opacity: "1",
    }),
    $(_0x3f5437(0x18f))[_0x3f5437(0x1b5)]("disabled"),
    $(_0x3f5437(0x127))[_0x3f5437(0x198)]({
      "pointer-events": _0x3f5437(0x19c),
      opacity: "1",
    }),
    $("[data-form-ms=\x22submit-btn\x22]")[_0x3f5437(0x1b5)](_0x3f5437(0x120));
}
function saveFilledInput() {
  const _0x268e78 = _0x36b7c9;
  $("form[data-form=\x22multistep\x22]\x20:input")
    ["not"](_0x268e78(0x119))
    [_0x268e78(0xdb)](function () {
      const _0x548a8b = _0x268e78;
      $(this)[_0x548a8b(0xf2)](_0x548a8b(0xfe)) === _0x548a8b(0x136) ||
      $(this)["attr"]("type") === "radio"
        ? $(this)["prop"](_0x548a8b(0x19f)) &&
          (filledInput[_0x548a8b(0x196)](
            (_0x4eacd) =>
              _0x4eacd[_0x548a8b(0x125)] ===
              $(this)[_0x548a8b(0xf2)](_0x548a8b(0x170))
          )
            ? ((filledInput = filledInput["filter"](
                (_0x5e0407) =>
                  _0x5e0407[_0x548a8b(0x125)] !==
                  $(this)[_0x548a8b(0xf2)]("name")
              )),
              $(this)[_0x548a8b(0x16c)]() !== "" &&
                filledInput["push"]({
                  inputName: $(this)[_0x548a8b(0xf2)](_0x548a8b(0x170)),
                  value: $(this)[_0x548a8b(0x16c)](),
                }))
            : $(this)[_0x548a8b(0x16c)]() !== "" &&
              filledInput[_0x548a8b(0x123)]({
                inputName: $(this)[_0x548a8b(0xf2)](_0x548a8b(0x170)),
                value: $(this)[_0x548a8b(0x16c)](),
              }))
        : filledInput[_0x548a8b(0x196)](
            (_0x36251b) =>
              _0x36251b["inputName"] ===
              $(this)[_0x548a8b(0xf2)](_0x548a8b(0x170))
          )
        ? ((filledInput = filledInput[_0x548a8b(0x195)](
            (_0x150ec1) =>
              _0x150ec1[_0x548a8b(0x125)] !==
              $(this)[_0x548a8b(0xf2)](_0x548a8b(0x170))
          )),
          $(this)["val"]() !== "" &&
            filledInput["push"]({
              inputName: $(this)[_0x548a8b(0xf2)](_0x548a8b(0x170)),
              value: $(this)[_0x548a8b(0x16c)](),
            }))
        : $(this)[_0x548a8b(0x16c)]() !== "" &&
          filledInput[_0x548a8b(0x123)]({
            inputName: $(this)[_0x548a8b(0xf2)](_0x548a8b(0x170)),
            value: $(this)[_0x548a8b(0x16c)](),
          });
    }),
    filledInput &&
      filledInput[_0x268e78(0x15d)]((_0x31b81e) => {
        const _0xef57d6 = _0x268e78;
        urlFormly[_0xef57d6(0x12d)][_0xef57d6(0x1c5)](_0x31b81e["inputName"]),
          urlFormly[_0xef57d6(0x12d)]["set"](
            _0x31b81e[_0xef57d6(0x125)],
            _0x31b81e[_0xef57d6(0x167)]
          ),
          window[_0xef57d6(0x15e)]["replaceState"](null, null, urlFormly);
      }),
    localStorage[_0x268e78(0xdc)](_0x268e78(0x1d2)),
    localStorage[_0x268e78(0x1d1)](
      _0x268e78(0x1d2),
      JSON["stringify"](filledInput)
    );
}
function _0x32b7(_0x270f84, _0x31971a) {
  const _0x2c4719 = _0x2c47();
  return (
    (_0x32b7 = function (_0x32b7f8, _0x49016d) {
      _0x32b7f8 = _0x32b7f8 - 0xd8;
      let _0x514329 = _0x2c4719[_0x32b7f8];
      return _0x514329;
    }),
    _0x32b7(_0x270f84, _0x31971a)
  );
}
function scrollTop() {
  const _0x4e63aa = _0x36b7c9;
  scrollToTop &&
    $(_0x4e63aa(0x14c))[_0x4e63aa(0x163)](
      {
        scrollTop:
          $(_0x4e63aa(0x14d))[_0x4e63aa(0x130)]()[_0x4e63aa(0x15c)] -
          scrollTopOffset,
      },
      0x3e8
    );
}
function updateStep() {
  const _0x1e7a73 = _0x36b7c9;
  scrollTop(),
    (skip = ![]),
    $(_0x1e7a73(0x116))[_0x1e7a73(0x1b5)](_0x1e7a73(0x120));
  $(_0x1e7a73(0x1bb))[_0x1e7a73(0x12e)](_0x1e7a73(0xe4)) &&
    (steps[_0x1e7a73(0x1cd)](_0x1e7a73(0x1bd))["each"](function () {
      const _0x38e33b = _0x1e7a73;
      $($(_0x38e33b(0x116))[$(this)["parents"](_0x38e33b(0x11f))["index"]()]),
        $(this)[_0x38e33b(0x16c)]() === "" && emptyInput++;
    }),
    emptyInput > 0x0
      ? $(_0x1e7a73(0x112))[_0x1e7a73(0x176)](_0x1e7a73(0x120))
      : $("input[type=\x22submit\x22]")[_0x1e7a73(0x1b5)](_0x1e7a73(0x120)));
  $(_0x1e7a73(0x116))[_0x1e7a73(0x1b5)]("current"),
    $(_0x1e7a73(0x116))[_0x1e7a73(0x176)]("disabled"),
    $($(_0x1e7a73(0x116))[x])["addClass"]("current"),
    (selection = selections[_0x1e7a73(0x195)](
      (_0x5b2fe1) => _0x5b2fe1[_0x1e7a73(0x1d9)] === x - 0x1
    ));
  next &&
    (x = getSafe(() => selection[0x0]["skipTo"])
      ? parseInt(getSafe(() => selection[0x0][_0x1e7a73(0x1c0)]))
      : x);
  $(_0x1e7a73(0x18c))["hide"](), steps[_0x1e7a73(0x128)]();
  reinitIX === !![] && window[_0x1e7a73(0xe1)][_0x1e7a73(0x1cf)]();
  $(progressbar)[_0x1e7a73(0x1b5)](_0x1e7a73(0x162));
  for (i = 0x0; i <= x; i++) {
    countCard
      ? $(progressbar[i])[_0x1e7a73(0x176)](_0x1e7a73(0x162))
      : !$(steps[i])[_0x1e7a73(0x12e)](_0x1e7a73(0xf9)) &&
        $(progressbar[i])[_0x1e7a73(0x176)]("current");
  }
  reinitIX === !![]
    ? (window[_0x1e7a73(0xe1)] &&
        window[_0x1e7a73(0xe1)][_0x1e7a73(0x13a)]("ix2")["init"](),
      document[_0x1e7a73(0x140)](new Event(_0x1e7a73(0x177))),
      $(steps[x])["show"]())
    : $(steps[x])[_0x1e7a73(0x1a2)](_0x1e7a73(0x110));
  x === 0x0 &&
    !$(steps[x])[_0x1e7a73(0x12e)](_0x1e7a73(0xf9)) &&
    $(steps[x])["find"](_0x1e7a73(0x18c))[_0x1e7a73(0x15b)]();
  selection[_0x1e7a73(0x171)] > 0x0
    ? $(steps[x])
        [_0x1e7a73(0x1cd)](
          _0x1e7a73(0x13e) + selection[0x0][_0x1e7a73(0x187)] + "\x22]"
        )
        ["show"]()
    : $(steps[x])
        [_0x1e7a73(0x1cd)](_0x1e7a73(0x13e) + answer + "\x22]")
        ["show"]();
  if (x === 0x0)
    $(_0x1e7a73(0x1a8))[_0x1e7a73(0x128)](), $(_0x1e7a73(0x114))["show"]();
  else {
    if (
      x === steps[_0x1e7a73(0x171)] - 0x1 ||
      $(steps[x])[_0x1e7a73(0x1cd)]("[data-form=\x22submit\x22]:visible")[
        "length"
      ] > 0x0
    ) {
      $(_0x1e7a73(0x114))[_0x1e7a73(0x128)]();
      if (
        $(steps[x])
          [_0x1e7a73(0x1cd)](_0x1e7a73(0x1be))
          ["data"](_0x1e7a73(0x1a7))
      )
        $(steps[x])[_0x1e7a73(0x1cd)](_0x1e7a73(0x1be))[_0x1e7a73(0x15b)]();
      else
        $(_0x1e7a73(0x114))[_0x1e7a73(0x12e)](_0x1e7a73(0x1a7)) &&
          $(_0x1e7a73(0x114))[_0x1e7a73(0x15b)]();
      $(_0x1e7a73(0x18f))[_0x1e7a73(0x15b)](),
        $(_0x1e7a73(0x127))[_0x1e7a73(0x15b)](),
        $(_0x1e7a73(0x1a8))[_0x1e7a73(0x15b)]();
    } else
      $(_0x1e7a73(0x114))[_0x1e7a73(0x15b)](),
        $(_0x1e7a73(0x1a8))[_0x1e7a73(0x15b)](),
        $("[data-form=\x22submit-btn\x22]")[_0x1e7a73(0x128)](),
        $(_0x1e7a73(0x127))[_0x1e7a73(0x128)]();
  }
  $($(steps[x])["find"]("input[autofocus]")[0x0])[_0x1e7a73(0x12a)](),
    $($(steps[x])[_0x1e7a73(0x1cd)](_0x1e7a73(0xfd))[0x0])[_0x1e7a73(0x12a)](),
    validation();
  for (idx = 0x0; idx <= x; idx++) {
    $($(_0x1e7a73(0x116))[idx])[_0x1e7a73(0x1b5)](_0x1e7a73(0x120));
  }
}
function validateEmail(_0x1ad5d8, _0x5d7d19, _0x39beba) {
  const _0x55d53c = _0x36b7c9;
  let _0x5e6878 = _0x1ad5d8[_0x55d53c(0xe3)]("@")
    ? _0x1ad5d8[_0x55d53c(0x101)]("@")[0x1][_0x55d53c(0x101)](".")[0x0]
    : [];
  dom = [];
  _0x5d7d19 !== undefined &&
    _0x5d7d19["split"](",")[_0x55d53c(0x15d)](function (_0x24c525) {
      const _0x54836d = _0x55d53c;
      _0x24c525["includes"](_0x5e6878) && dom[_0x54836d(0x123)](_0x5e6878);
    });
  dom[_0x55d53c(0x171)] > 0x0 ? (domainAllowed = ![]) : (domainAllowed = !![]);
  var _0x420f29 = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,20})?$/;
  console[_0x55d53c(0x160)](
    !_0x420f29[_0x55d53c(0x1a0)](_0x1ad5d8) || !domainAllowed
  ),
    !_0x420f29["test"](_0x1ad5d8) || !domainAllowed
      ? ((emailFilled = ![]),
        unfilledArr[_0x55d53c(0x123)]({ input: _0x39beba }))
      : (emailFilled = !![]);
}
function phoneValidation(_0x40e22b, _0x550891, _0xba9a2f) {
  const _0x1f4337 = _0x36b7c9;
  if (validPhone)
    return _0x40e22b[_0x1f4337(0x1b9)](phoneFormat) && _0x550891 >= _0xba9a2f
      ? !![]
      : ![];
  else {
    if (_0x550891 >= _0xba9a2f) return !![];
  }
}
function validation() {
  const _0x45b992 = _0x36b7c9;
  $(steps[x])[_0x45b992(0x12e)](_0x45b992(0xf9)) && enableBtn();
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
    (textareaLength = $(steps[x])[_0x45b992(0x1cd)](_0x45b992(0x165))[
      _0x45b992(0x171)
    ]),
    (textInputLength = $(steps[x])[_0x45b992(0x1cd)](_0x45b992(0x1c6))[
      _0x45b992(0x171)
    ]),
    (selectInputLength = $(steps[x])[_0x45b992(0x1cd)](_0x45b992(0x11e))[
      _0x45b992(0x171)
    ]),
    (emailInputLength = $(steps[x])["find"](_0x45b992(0x155))["length"]),
    (checkboxInputLength = $(steps[x])[_0x45b992(0x1cd)](_0x45b992(0x13d))[
      "length"
    ]);
  textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0
    ? disableBtn()
    : enableBtn();
  (checkCount = $(steps[x])[_0x45b992(0x12e)](_0x45b992(0x136))
    ? $(steps[x])[_0x45b992(0x12e)](_0x45b992(0x136))
    : $(steps[x])["find"](_0x45b992(0x1c3))[_0x45b992(0x171)] > 0x0
    ? $(steps[x])
        [_0x45b992(0x1cd)](_0x45b992(0x1c3))
        [_0x45b992(0x12e)](_0x45b992(0x136))
    : 0x0),
    console["log"](checkCount);
  if (!logicExtra)
    $(steps[x])["find"](":input")["is"](_0x45b992(0x1a3)) &&
      (checkCount === "*" ||
      checkCount > $(steps[x])[_0x45b992(0x1cd)](_0x45b992(0x10f))["length"]
        ? $(steps[x])
            [_0x45b992(0x1cd)](":input[type=\x22checkbox\x22]")
            [_0x45b992(0xdb)](function () {
              const _0x294a88 = _0x45b992;
              $(this)["is"](":checked")
                ? $(steps[x])[_0x294a88(0x1cd)](_0x294a88(0x121))[
                    _0x294a88(0x171)
                  ] < 0x1 &&
                  ((checkboxFilled = !![]),
                  resetInputErrorMessage(
                    $(this)[_0x294a88(0xf2)](_0x294a88(0x170))
                  ))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0x294a88(0x123)]({
                    input: $(this)["attr"]("name"),
                  }));
            })
        : $(steps[x])["find"](_0x45b992(0x137))[_0x45b992(0x171)] >= checkCount
        ? $(steps[x])[_0x45b992(0x1cd)](_0x45b992(0x121))["length"] > 0x0
          ? $(steps[x])
              [_0x45b992(0x1cd)](_0x45b992(0x121))
              [_0x45b992(0xdb)](function () {
                const _0x15ccab = _0x45b992;
                !$(this)["is"](_0x15ccab(0xf6))
                  ? ((checkboxFilled = ![]),
                    unfilledArr[_0x15ccab(0x123)]({
                      input: $(this)["attr"]("name"),
                    }))
                  : ((checkboxFilled = !![]),
                    $(steps[x])[_0x15ccab(0x1cd)](_0x15ccab(0x147))[
                      _0x15ccab(0x171)
                    ] >=
                      $(steps[x])["find"](
                        ":input[type=\x22checkbox\x22][required]"
                      )["length"] &&
                      resetInputErrorMessage(
                        $(steps[x])
                          [_0x15ccab(0x1cd)](_0x15ccab(0x10f))
                          [_0x15ccab(0xf2)]("name")
                      ));
              })
          : ((checkboxFilled = !![]),
            resetInputErrorMessage(
              $(steps[x])
                ["find"](":input[type=\x22checkbox\x22]")
                [_0x45b992(0xf2)](_0x45b992(0x170))
            ))
        : ((checkboxFilled = ![]),
          $(steps[x])
            ["find"](_0x45b992(0x121))
            ["each"](function () {
              const _0x3bc416 = _0x45b992;
              $(this)[_0x3bc416(0x132)](_0x3bc416(0xf6)) &&
                unfilledArr["push"]({
                  input: $(this)[_0x3bc416(0xf2)](_0x3bc416(0x170)),
                });
            }),
          unfilledArr["push"]({
            input: $(steps[x])
              [_0x45b992(0x1cd)](":input[type=\x22checkbox\x22]")
              [_0x45b992(0xf2)]("name"),
          }))),
      $(steps[x])
        [_0x45b992(0x1cd)](_0x45b992(0x1ba))
        ["each"](function (_0x41f7f6) {
          const _0x500645 = _0x45b992;
          var _0x24d622 = $(this)["attr"](_0x500645(0x170));
          $(_0x500645(0xdd) + _0x24d622 + _0x500645(0xe6))[_0x500645(0x171)] ==
          0x0
            ? (!empReqRadio[_0x500645(0x1cd)](
                (_0x4efcc7) => _0x4efcc7[_0x500645(0x1d4)] === _0x41f7f6
              ) && empReqRadio[_0x500645(0x123)]({ input: _0x41f7f6 }),
              unfilledArr["push"]({ input: $(this)["attr"](_0x500645(0x170)) }))
            : (empReqRadio = empReqRadio[_0x500645(0x195)](
                (_0x1b7610) => _0x1b7610[_0x500645(0x1d4)] !== _0x41f7f6
              )),
            empReqRadio[_0x500645(0x171)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0x45b992(0x1cd)](_0x45b992(0x179))
        [_0x45b992(0xdb)](function (_0x1cb188) {
          const _0x1afbe8 = _0x45b992;
          let _0x5d61c7 = $(this)["val"]()["length"],
            _0x4deb5a = $(this)[_0x1afbe8(0x12e)](_0x1afbe8(0x12c))
              ? $(this)[_0x1afbe8(0x12e)]("min-character")
              : 0x0;
          $(this)["val"]() !== "" && _0x5d61c7 >= _0x4deb5a
            ? (empReqInput = empReqInput[_0x1afbe8(0x195)](
                (_0x2e3f5f) => _0x2e3f5f["input"] !== _0x1cb188
              ))
            : (!empReqInput[_0x1afbe8(0x1cd)](
                (_0x306de0) => _0x306de0[_0x1afbe8(0x1d4)] === _0x1cb188
              ) && empReqInput[_0x1afbe8(0x123)]({ input: _0x1cb188 }),
              unfilledArr["push"]({
                input: $(this)["attr"](_0x1afbe8(0x170)),
              })),
            empReqInput["length"] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x45b992(0x1cd)](_0x45b992(0x1da))
        [_0x45b992(0xdb)](function (_0x57afdc) {
          const _0x27748e = _0x45b992;
          if ($(this)["val"]() !== "") {
            let _0x409394 = $(this)["val"]()["length"],
              _0x552243 = $(this)[_0x27748e(0x12e)]("min-character")
                ? $(this)["data"](_0x27748e(0x12c))
                : 0x0;
            $(this)[_0x27748e(0x12e)](_0x27748e(0x1d5)) &&
              $(this)[_0x27748e(0x16c)](
                phoneAutoFormat(
                  $(this)[_0x27748e(0x12e)]("phone-autoformat"),
                  $(this)[_0x27748e(0x16c)]()
                )
              ),
              phoneValidation($(this)[_0x27748e(0x16c)](), _0x409394, _0x552243)
                ? (empReqTel = empReqTel[_0x27748e(0x195)](
                    (_0xd669f5) => _0xd669f5[_0x27748e(0x1d4)] !== _0x57afdc
                  ))
                : empReqTel[_0x27748e(0x123)]({ input: _0x57afdc });
          } else !empReqTel["find"]((_0x323ef3) => _0x323ef3["input"] === _0x57afdc) && empReqTel[_0x27748e(0x123)]({ input: _0x57afdc }), unfilledArr["push"]({ input: $(this)[_0x27748e(0xf2)]("name") });
          empReqTel[_0x27748e(0x171)] === 0x0
            ? (telFilled = !![])
            : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x45b992(0x1cd)](_0x45b992(0x1ab))
        [_0x45b992(0xdb)](function (_0xf56bc0) {
          const _0x3eb9a8 = _0x45b992;
          $(this)[_0x3eb9a8(0x16c)]() !== ""
            ? (empReqFile = empReqFile[_0x3eb9a8(0x195)](
                (_0x367059) => _0x367059["input"] !== _0xf56bc0
              ))
            : (!empReqFile[_0x3eb9a8(0x1cd)](
                (_0x4cc7af) => _0x4cc7af[_0x3eb9a8(0x1d4)] === _0xf56bc0
              ) && empReqFile[_0x3eb9a8(0x123)]({ input: _0xf56bc0 }),
              unfilledArr["push"]({ input: $(this)[_0x3eb9a8(0xf2)]("name") })),
            empReqFile[_0x3eb9a8(0x171)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x45b992(0x16a))
        [_0x45b992(0xdb)](function (_0x1c884f) {
          const _0x7dd884 = _0x45b992;
          let _0x126869 = $(this)[_0x7dd884(0x16c)]()[_0x7dd884(0x171)],
            _0x4fe3b1 = $(this)[_0x7dd884(0x12e)](_0x7dd884(0x12c))
              ? $(this)["data"](_0x7dd884(0x12c))
              : 0x0;
          $(this)[_0x7dd884(0x16c)]() !== "" && _0x126869 >= _0x4fe3b1
            ? (empReqNum = empReqNum[_0x7dd884(0x195)](
                (_0xd9167) => _0xd9167[_0x7dd884(0x1d4)] !== _0x1c884f
              ))
            : (!empReqNum[_0x7dd884(0x1cd)](
                (_0x414ca3) => _0x414ca3[_0x7dd884(0x1d4)] === _0x1c884f
              ) && empReqNum["push"]({ input: _0x1c884f }),
              unfilledArr[_0x7dd884(0x123)]({
                input: $(this)[_0x7dd884(0xf2)](_0x7dd884(0x170)),
              })),
            empReqNum[_0x7dd884(0x171)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x45b992(0x1cd)](_0x45b992(0xe5))
        [_0x45b992(0xdb)](function (_0x1141a5) {
          const _0x381a73 = _0x45b992;
          let _0x1b9f34 = $(this)[_0x381a73(0x16c)]();
          _0x1b9f34 === "" && (_0x1b9f34 = null),
            _0x1b9f34 != null
              ? (empReqSelect = empReqSelect[_0x381a73(0x195)](
                  (_0x452a3a) => _0x452a3a["input"] !== _0x1141a5
                ))
              : (!empReqSelect[_0x381a73(0x1cd)](
                  (_0xfdddc0) => _0xfdddc0["input"] === _0x1141a5
                ) && empReqSelect[_0x381a73(0x123)]({ input: _0x1141a5 }),
                unfilledArr["push"]({
                  input: $(this)[_0x381a73(0xf2)](_0x381a73(0x170)),
                })),
            empReqSelect["length"] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x45b992(0x1cd)]("textarea[required]")
        [_0x45b992(0xdb)](function (_0x3064cf) {
          const _0x3287fe = _0x45b992;
          let _0x417566 = $(this)[_0x3287fe(0x16c)]()[_0x3287fe(0x171)],
            _0x1b23cf = $(this)[_0x3287fe(0x12e)]("min-character")
              ? $(this)[_0x3287fe(0x12e)](_0x3287fe(0x12c))
              : 0x0;
          $(this)["val"]() !== "" && _0x417566 >= _0x1b23cf
            ? (empReqTextarea = empReqTextarea[_0x3287fe(0x195)](
                (_0x3715b1) => _0x3715b1["input"] !== _0x3064cf
              ))
            : (!empReqTextarea[_0x3287fe(0x1cd)](
                (_0x34ccc6) => _0x34ccc6[_0x3287fe(0x1d4)] === _0x3064cf
              ) && empReqTextarea["push"]({ input: _0x3064cf }),
              unfilledArr[_0x3287fe(0x123)]({
                input: $(this)[_0x3287fe(0xf2)](_0x3287fe(0x170)),
              })),
            empReqTextarea["length"] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x45b992(0x1cd)](_0x45b992(0x1a1))
        [_0x45b992(0xdb)](function () {
          const _0x1fdcfb = _0x45b992;
          $(this)[_0x1fdcfb(0x16c)]() !== ""
            ? validateEmail(
                $(this)[_0x1fdcfb(0x16c)](),
                $(this)[_0x1fdcfb(0x12e)](_0x1fdcfb(0xf3)),
                $(this)["attr"](_0x1fdcfb(0x170))
              )
            : ((emailFilled = ![]),
              unfilledArr[_0x1fdcfb(0x123)]({
                input: $(this)[_0x1fdcfb(0xf2)]("name"),
              }));
        });
  else {
    if ($(steps[x])["data"](_0x45b992(0xf9)))
      (answer = $(steps[x])
        [_0x45b992(0x1cd)](_0x45b992(0x104))
        [_0x45b992(0x12e)](_0x45b992(0xef))),
        (selections = selections[_0x45b992(0x195)](
          (_0x3a08c0) => _0x3a08c0["step"] !== x
        )),
        selections["push"]({ step: x, selected: answer });
    else
      $(steps[x])
        [_0x45b992(0x1cd)](_0x45b992(0x1a5))
        ["data"](_0x45b992(0xf9)) &&
        ((answer = $(steps[x])
          [_0x45b992(0x1cd)](_0x45b992(0x1a5))
          ["data"]("go-to")),
        (selections = selections[_0x45b992(0x195)](
          (_0x17c959) => _0x17c959[_0x45b992(0x1d9)] !== x
        )),
        selections["push"]({ step: x, selected: answer }));
    $(steps[x])
      [_0x45b992(0x1cd)]("[data-answer]:visible")
      [_0x45b992(0x1cd)](_0x45b992(0x141))
      ["is"](_0x45b992(0x1a3)) &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])[_0x45b992(0x1cd)](_0x45b992(0x10f))[_0x45b992(0x171)]
        ? $(steps[x])
            [_0x45b992(0x1cd)](_0x45b992(0x10f))
            [_0x45b992(0xdb)](function () {
              const _0x5dc500 = _0x45b992;
              $(this)["is"](":checked")
                ? $(steps[x])[_0x5dc500(0x1cd)](_0x5dc500(0x1bd))[
                    _0x5dc500(0x171)
                  ] < 0x1 &&
                  ((skipTo = undefined),
                  $(this)
                    [_0x5dc500(0xea)](_0x5dc500(0x138))
                    [_0x5dc500(0x12e)](_0x5dc500(0x144)) &&
                    (skipTo = $(this)
                      [_0x5dc500(0xea)](_0x5dc500(0x138))
                      [_0x5dc500(0x12e)]("skip-to")),
                  $(this)
                    [_0x5dc500(0xea)](_0x5dc500(0x104))
                    [_0x5dc500(0xf2)]("data-go-to") &&
                    ((answer = $(this)
                      [_0x5dc500(0xea)](_0x5dc500(0x104))
                      [_0x5dc500(0xf2)](_0x5dc500(0x164))),
                    (selections = selections[_0x5dc500(0x195)](
                      (_0x3135bf) => _0x3135bf["step"] !== x
                    )),
                    selections[_0x5dc500(0x123)]({ step: x, selected: answer }),
                    skipTo &&
                      (selections["push"]({
                        step: skipTo - 0x2,
                        selected: answer,
                      }),
                      (objIndex = selections[_0x5dc500(0x1d3)](
                        (_0x34793a) => _0x34793a[_0x5dc500(0x1d9)] === x
                      )),
                      (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                      (selections[objIndex][_0x5dc500(0x14f)] = x))),
                  (checkboxFilled = !![]),
                  $(steps[x])["find"](_0x5dc500(0x147))["length"] >=
                    $(steps[x])[_0x5dc500(0x1cd)](
                      ":input[type=\x22checkbox\x22][required]"
                    )[_0x5dc500(0x171)] &&
                    resetInputErrorMessage(
                      $(steps[x])
                        [_0x5dc500(0x1cd)](_0x5dc500(0x10f))
                        ["attr"](_0x5dc500(0x170))
                    ))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0x5dc500(0x123)]({
                    input: $(this)[_0x5dc500(0xf2)]("name"),
                  }));
            })
        : $(steps[x])
            [_0x45b992(0x1cd)](_0x45b992(0x1a5))
            [_0x45b992(0x1cd)](_0x45b992(0x137))["length"] >= checkCount
        ? ($(steps[x])
            ["find"]("[data-answer]:visible")
            [_0x45b992(0x1cd)](_0x45b992(0x10f))
            [_0x45b992(0xea)](_0x45b992(0x104))
            [_0x45b992(0xf2)]("data-go-to") &&
            ((skipTo = undefined),
            $(steps[x])
              [_0x45b992(0x1cd)](_0x45b992(0x1a5))
              [_0x45b992(0x1cd)](_0x45b992(0x10f))
              [_0x45b992(0xea)](_0x45b992(0x138))
              [_0x45b992(0xf2)](_0x45b992(0x1c1)) &&
              (skipTo = $(steps[x])
                ["find"](_0x45b992(0x1a5))
                ["find"](_0x45b992(0x137))
                [_0x45b992(0xea)](_0x45b992(0x138))
                [_0x45b992(0xf2)](_0x45b992(0x1c1))),
            (answer = $(steps[x])
              [_0x45b992(0x1cd)](_0x45b992(0x1a5))
              [_0x45b992(0x1cd)](_0x45b992(0x10f))
              ["parents"]("[data-go-to]")
              [_0x45b992(0xf2)](_0x45b992(0x164))),
            (selections = selections[_0x45b992(0x195)](
              (_0x13486f) => _0x13486f[_0x45b992(0x1d9)] !== x
            )),
            selections[_0x45b992(0x123)]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0x45b992(0x123)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0x45b992(0x1d3)](
                (_0x494c1f) => _0x494c1f["step"] === x
              )),
              (selections[objIndex][_0x45b992(0x1c0)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x45b992(0x14f)] = x))),
          (selections = selections[_0x45b992(0x195)](
            (_0x54bbb8) => _0x54bbb8[_0x45b992(0x1d9)] !== x
          )),
          selections["push"]({ step: x, selected: answer }),
          (checkboxFilled = !![]),
          $(steps[x])[_0x45b992(0x1cd)](_0x45b992(0x147))[_0x45b992(0x171)] >=
            $(steps[x])[_0x45b992(0x1cd)](
              ":input[type=\x22checkbox\x22][required]"
            )[_0x45b992(0x171)] &&
            resetInputErrorMessage(
              $(steps[x])
                ["find"](":input[type=\x22checkbox\x22]")
                ["attr"](_0x45b992(0x170))
            ))
        : ((checkboxFilled = ![]),
          $(steps[x])
            [_0x45b992(0x1cd)](_0x45b992(0x121))
            [_0x45b992(0xdb)](function () {
              const _0x33a558 = _0x45b992;
              $(this)[_0x33a558(0x132)](_0x33a558(0xf6)) &&
                unfilledArr[_0x33a558(0x123)]({
                  input: $(this)[_0x33a558(0xf2)](_0x33a558(0x170)),
                });
            }))),
      $(steps[x])
        ["find"]("[data-answer]:visible")
        [_0x45b992(0x1cd)](_0x45b992(0x1ba))
        [_0x45b992(0xdb)](function (_0x2708f3) {
          const _0x23f642 = _0x45b992;
          var _0xdf1a81 = $(this)[_0x23f642(0xf2)](_0x23f642(0x170));
          $("input:radio[name=\x22" + _0xdf1a81 + _0x23f642(0xe6))[
            _0x23f642(0x171)
          ] == 0x0
            ? (!empReqRadio[_0x23f642(0x1cd)](
                (_0x5a52a2) => _0x5a52a2["input"] === _0x2708f3
              ) && empReqRadio["push"]({ input: _0x2708f3 }),
              unfilledArr[_0x23f642(0x123)]({
                input: $(this)["attr"](_0x23f642(0x170)),
              }))
            : (empReqRadio = empReqRadio[_0x23f642(0x195)](
                (_0x29fba0) => _0x29fba0["input"] !== _0x2708f3
              )),
            empReqRadio[_0x23f642(0x171)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0x45b992(0x1cd)](_0x45b992(0x1a5))
        ["find"](":input[type=\x22text\x22][required]")
        [_0x45b992(0xdb)](function (_0x5281ed) {
          const _0x178f19 = _0x45b992;
          let _0x53206f = $(this)[_0x178f19(0x16c)]()[_0x178f19(0x171)],
            _0x3ab7f0 = $(this)[_0x178f19(0x12e)](_0x178f19(0x12c))
              ? $(this)[_0x178f19(0x12e)](_0x178f19(0x12c))
              : 0x0;
          $(this)["val"]() !== "" && _0x53206f >= _0x3ab7f0
            ? (empReqInput = empReqInput[_0x178f19(0x195)](
                (_0x41b56e) => _0x41b56e[_0x178f19(0x1d4)] !== _0x5281ed
              ))
            : (!empReqInput[_0x178f19(0x1cd)](
                (_0x3b2d01) => _0x3b2d01[_0x178f19(0x1d4)] === _0x5281ed
              ) && empReqInput[_0x178f19(0x123)]({ input: _0x5281ed }),
              unfilledArr[_0x178f19(0x123)]({
                input: $(this)[_0x178f19(0xf2)](_0x178f19(0x170)),
              })),
            empReqInput[_0x178f19(0x171)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x45b992(0x1cd)](_0x45b992(0x1a5))
        ["find"](":input[type=\x22text\x22]")
        [_0x45b992(0xdb)](function (_0x2d6ffb) {
          const _0x2d83c6 = _0x45b992;
          (skipTo = undefined),
            $(this)
              ["parents"](_0x2d83c6(0x138))
              [_0x2d83c6(0x12e)](_0x2d83c6(0x144)) !== "" &&
              (skipTo = $(this)
                [_0x2d83c6(0xea)](_0x2d83c6(0x138))
                [_0x2d83c6(0x12e)](_0x2d83c6(0x144))),
            $(this)
              [_0x2d83c6(0xea)](_0x2d83c6(0x104))
              ["attr"](_0x2d83c6(0x164)) &&
              ((answer = $(this)
                [_0x2d83c6(0xea)]("[data-go-to]")
                ["attr"]("data-go-to")),
              (selections = selections[_0x2d83c6(0x195)](
                (_0x241491) => _0x241491["step"] !== x
              )),
              selections[_0x2d83c6(0x123)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections["findIndex"](
                  (_0x1fd57d) => _0x1fd57d[_0x2d83c6(0x1d9)] === x
                )),
                (selections[objIndex][_0x2d83c6(0x1c0)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x2d83c6(0x14f)] = x)));
        }),
      $(steps[x])
        [_0x45b992(0x1cd)](_0x45b992(0x1a5))
        [_0x45b992(0x1cd)](":input[type=\x22number\x22][required]")
        ["each"](function (_0x23ea86) {
          const _0x5bb606 = _0x45b992;
          let _0x5400de = $(this)[_0x5bb606(0x16c)]()[_0x5bb606(0x171)],
            _0x4a441f = $(this)[_0x5bb606(0x12e)](_0x5bb606(0x12c))
              ? $(this)[_0x5bb606(0x12e)]("min-character")
              : 0x0;
          $(this)[_0x5bb606(0x16c)]() !== "" && _0x5400de >= _0x4a441f
            ? (empReqNum = empReqNum[_0x5bb606(0x195)](
                (_0x557278) => _0x557278["input"] !== _0x23ea86
              ))
            : (!empReqNum[_0x5bb606(0x1cd)](
                (_0x9992c0) => _0x9992c0[_0x5bb606(0x1d4)] === _0x23ea86
              ) && empReqNum["push"]({ input: _0x23ea86 }),
              unfilledArr[_0x5bb606(0x123)]({
                input: $(this)["attr"](_0x5bb606(0x170)),
              })),
            empReqNum["length"] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x45b992(0x1cd)](_0x45b992(0x1a5))
        [_0x45b992(0x1cd)](_0x45b992(0x133))
        [_0x45b992(0xdb)](function (_0x214762) {
          const _0x44f5db = _0x45b992;
          (skipTo = undefined),
            $(this)
              [_0x44f5db(0xea)]("[data-skip-to]")
              ["data"](_0x44f5db(0x144)) !== "" &&
              (skipTo = $(this)
                [_0x44f5db(0xea)](_0x44f5db(0x138))
                ["data"](_0x44f5db(0x144))),
            $(this)
              [_0x44f5db(0xea)](_0x44f5db(0x104))
              [_0x44f5db(0xf2)](_0x44f5db(0x164)) &&
              ((answer = $(this)
                [_0x44f5db(0xea)](_0x44f5db(0x104))
                [_0x44f5db(0xf2)](_0x44f5db(0x164))),
              (selections = selections["filter"](
                (_0x59091b) => _0x59091b[_0x44f5db(0x1d9)] !== x
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x44f5db(0x123)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x44f5db(0x1d3)](
                  (_0x525e68) => _0x525e68[_0x44f5db(0x1d9)] === x
                )),
                (selections[objIndex][_0x44f5db(0x1c0)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x44f5db(0x14f)] = x)));
        }),
      $(steps[x])
        [_0x45b992(0x1cd)]("[data-answer]:visible")
        [_0x45b992(0x1cd)](_0x45b992(0x1da))
        [_0x45b992(0xdb)](function (_0x1b44cd) {
          const _0x1f15d6 = _0x45b992;
          if ($(this)[_0x1f15d6(0x16c)]() !== "") {
            let _0x4fb009 = $(this)[_0x1f15d6(0x16c)]()[_0x1f15d6(0x171)],
              _0xf8bf0f = $(this)[_0x1f15d6(0x12e)](_0x1f15d6(0x12c))
                ? $(this)[_0x1f15d6(0x12e)](_0x1f15d6(0x12c))
                : 0x0;
            $(this)["data"](_0x1f15d6(0x1d5)) &&
              $(this)["val"](
                phoneAutoFormat(
                  $(this)[_0x1f15d6(0x12e)](_0x1f15d6(0x1d5)),
                  $(this)[_0x1f15d6(0x16c)]()
                )
              ),
              phoneValidation($(this)[_0x1f15d6(0x16c)](), _0x4fb009, _0xf8bf0f)
                ? (empReqTel = empReqTel["filter"](
                    (_0x1fee79) => _0x1fee79[_0x1f15d6(0x1d4)] !== _0x1b44cd
                  ))
                : empReqTel[_0x1f15d6(0x123)]({ input: _0x1b44cd });
          } else !empReqTel[_0x1f15d6(0x1cd)]((_0x1d5eac) => _0x1d5eac["input"] === _0x1b44cd) && empReqTel["push"]({ input: _0x1b44cd }), unfilledArr[_0x1f15d6(0x123)]({ input: $(this)["attr"](_0x1f15d6(0x170)) });
          empReqTel["length"] === 0x0 ? (telFilled = !![]) : (telFilled = ![]);
        }),
      $(steps[x])
        ["find"]("[data-answer]:visible")
        [_0x45b992(0x1cd)](_0x45b992(0x1cb))
        [_0x45b992(0xdb)](function (_0x23990b) {
          const _0x340df4 = _0x45b992;
          (skipTo = undefined),
            $(this)["parents"](_0x340df4(0x138))["data"](_0x340df4(0x144)) !==
              "" &&
              (skipTo = $(this)
                [_0x340df4(0xea)](_0x340df4(0x138))
                [_0x340df4(0x12e)](_0x340df4(0x144))),
            $(this)
              [_0x340df4(0xea)](_0x340df4(0x104))
              [_0x340df4(0xf2)](_0x340df4(0x164)) &&
              ((answer = $(this)
                [_0x340df4(0xea)]("[data-go-to]")
                ["attr"](_0x340df4(0x164))),
              (selections = selections[_0x340df4(0x195)](
                (_0xb779b) => _0xb779b[_0x340df4(0x1d9)] !== x
              )),
              selections[_0x340df4(0x123)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x340df4(0x123)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x340df4(0x1d3)](
                  (_0x2ae179) => _0x2ae179["step"] === x
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x340df4(0x14f)] = x)));
        }),
      $(steps[x])
        [_0x45b992(0x1cd)]("[data-answer]:visible")
        ["find"](":input[type=\x22file\x22][required]")
        ["each"](function (_0x51bc09) {
          const _0x5ba639 = _0x45b992;
          $(this)["val"]() !== ""
            ? (empReqFile = empReqFile["filter"](
                (_0x5d2c7b) => _0x5d2c7b["input"] !== _0x51bc09
              ))
            : (!empReqFile[_0x5ba639(0x1cd)](
                (_0x38cdc4) => _0x38cdc4[_0x5ba639(0x1d4)] === _0x51bc09
              ) && empReqFile[_0x5ba639(0x123)]({ input: _0x51bc09 }),
              unfilledArr[_0x5ba639(0x123)]({
                input: $(this)["attr"]("name"),
              })),
            empReqFile[_0x5ba639(0x171)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x45b992(0x1cd)](_0x45b992(0x1a5))
        [_0x45b992(0x1cd)](":input[type=\x22file\x22]")
        [_0x45b992(0xdb)](function (_0x31ac8e) {
          const _0x22617e = _0x45b992;
          (skipTo = undefined),
            $(this)
              [_0x22617e(0xea)](_0x22617e(0x138))
              [_0x22617e(0x12e)](_0x22617e(0x144)) !== "" &&
              (skipTo = $(this)
                [_0x22617e(0xea)]("[data-skip-to]")
                [_0x22617e(0x12e)](_0x22617e(0x144))),
            $(this)
              [_0x22617e(0xea)](_0x22617e(0x104))
              [_0x22617e(0xf2)](_0x22617e(0x164)) &&
              ((answer = $(this)
                [_0x22617e(0xea)](_0x22617e(0x104))
                [_0x22617e(0xf2)]("data-go-to")),
              (selections = selections[_0x22617e(0x195)](
                (_0x2796c6) => _0x2796c6[_0x22617e(0x1d9)] !== x
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections["findIndex"](
                  (_0x599540) => _0x599540[_0x22617e(0x1d9)] === x
                )),
                (selections[objIndex][_0x22617e(0x1c0)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x45b992(0x1cd)]("[data-answer]:visible")
        [_0x45b992(0x1cd)](_0x45b992(0xe5))
        [_0x45b992(0xdb)](function (_0x5417ff) {
          const _0x3ba7f9 = _0x45b992;
          $(this)[_0x3ba7f9(0x16c)]() !== ""
            ? (empReqSelect = empReqSelect[_0x3ba7f9(0x195)](
                (_0x4bb261) => _0x4bb261[_0x3ba7f9(0x1d4)] !== _0x5417ff
              ))
            : (!empReqSelect[_0x3ba7f9(0x1cd)](
                (_0x632f1e) => _0x632f1e[_0x3ba7f9(0x1d4)] === _0x5417ff
              ) && empReqSelect[_0x3ba7f9(0x123)]({ input: _0x5417ff }),
              unfilledArr[_0x3ba7f9(0x123)]({
                input: $(this)[_0x3ba7f9(0xf2)](_0x3ba7f9(0x170)),
              })),
            empReqSelect["length"] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        ["find"]("[data-answer]:visible")
        ["find"]("select")
        [_0x45b992(0xdb)](function (_0x509773) {
          const _0x492cb2 = _0x45b992;
          (skipTo = undefined),
            $(this)
              ["parents"](_0x492cb2(0x138))
              [_0x492cb2(0x12e)](_0x492cb2(0x144)) !== "" &&
              (skipTo = $(this)
                [_0x492cb2(0xea)](_0x492cb2(0x138))
                [_0x492cb2(0x12e)]("skip-to")),
            $(this)
              [_0x492cb2(0xea)](_0x492cb2(0x104))
              [_0x492cb2(0xf2)](_0x492cb2(0x164)) &&
              ((answer = $(this)
                ["parents"](_0x492cb2(0x104))
                [_0x492cb2(0xf2)](_0x492cb2(0x164))),
              (selections = selections[_0x492cb2(0x195)](
                (_0x3906da) => _0x3906da[_0x492cb2(0x1d9)] !== x
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x492cb2(0x123)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x492cb2(0x1d3)](
                  (_0x1c9cf5) => _0x1c9cf5[_0x492cb2(0x1d9)] === x
                )),
                (selections[objIndex][_0x492cb2(0x1c0)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x45b992(0x1cd)]("[data-answer]:visible")
        [_0x45b992(0x1cd)](_0x45b992(0x191))
        [_0x45b992(0xdb)](function (_0x170252) {
          const _0xb1df0a = _0x45b992;
          let _0xbbf3e3 = $(this)[_0xb1df0a(0x16c)]()[_0xb1df0a(0x171)],
            _0x4b5546 = $(this)[_0xb1df0a(0x12e)]("min-character")
              ? $(this)["data"](_0xb1df0a(0x12c))
              : 0x0;
          $(this)["val"]() !== "" && _0xbbf3e3 >= _0x4b5546
            ? (empReqTextarea = empReqTextarea[_0xb1df0a(0x195)](
                (_0x34f103) => _0x34f103[_0xb1df0a(0x1d4)] !== _0x170252
              ))
            : (!empReqTextarea[_0xb1df0a(0x1cd)](
                (_0x5761f9) => _0x5761f9[_0xb1df0a(0x1d4)] === _0x170252
              ) && empReqTextarea[_0xb1df0a(0x123)]({ input: _0x170252 }),
              unfilledArr[_0xb1df0a(0x123)]({
                input: $(this)[_0xb1df0a(0xf2)](_0xb1df0a(0x170)),
              })),
            empReqTextarea[_0xb1df0a(0x171)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x45b992(0x1cd)](_0x45b992(0x1a5))
        [_0x45b992(0x1cd)](_0x45b992(0x16f))
        [_0x45b992(0xdb)](function (_0x30ed85) {
          const _0x5bb282 = _0x45b992;
          (skipTo = undefined),
            $(this)
              [_0x5bb282(0xea)](_0x5bb282(0x138))
              [_0x5bb282(0x12e)]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0x5bb282(0xea)](_0x5bb282(0x138))
                [_0x5bb282(0x12e)](_0x5bb282(0x144))),
            $(this)
              [_0x5bb282(0xea)](_0x5bb282(0x104))
              [_0x5bb282(0xf2)](_0x5bb282(0x164)) &&
              ((answer = $(this)
                [_0x5bb282(0xea)](_0x5bb282(0x104))
                [_0x5bb282(0xf2)](_0x5bb282(0x164))),
              (selections = selections["filter"](
                (_0x277aee) => _0x277aee["step"] !== x
              )),
              selections[_0x5bb282(0x123)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x5bb282(0x123)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x35e082) => _0x35e082[_0x5bb282(0x1d9)] === x
                )),
                (selections[objIndex][_0x5bb282(0x1c0)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x45b992(0x1cd)](_0x45b992(0x1a5))
        [_0x45b992(0x1cd)](":input[type=\x22email\x22][required]")
        ["each"](function (_0x150f73) {
          const _0x3d08ba = _0x45b992;
          $(this)[_0x3d08ba(0x16c)]() !== ""
            ? validateEmail(
                $(this)[_0x3d08ba(0x16c)](),
                $(this)[_0x3d08ba(0x12e)](_0x3d08ba(0xf3)),
                $(this)["attr"](_0x3d08ba(0x170))
              )
            : ((emailFilled = ![]),
              unfilledArr[_0x3d08ba(0x123)]({
                input: $(this)[_0x3d08ba(0xf2)](_0x3d08ba(0x170)),
              }));
        }),
      $(steps[x])
        [_0x45b992(0x1cd)](_0x45b992(0x1a5))
        ["find"](":input[type=\x22email\x22]")
        ["each"](function (_0x549f73) {
          const _0x66d4d9 = _0x45b992;
          (skipTo = undefined),
            $(this)
              ["parents"](_0x66d4d9(0x138))
              [_0x66d4d9(0x12e)](_0x66d4d9(0x144)) !== "" &&
              (skipTo = $(this)
                [_0x66d4d9(0xea)](_0x66d4d9(0x138))
                ["data"](_0x66d4d9(0x144))),
            $(this)
              [_0x66d4d9(0xea)](_0x66d4d9(0x104))
              [_0x66d4d9(0xf2)]("data-go-to") &&
              ((answer = $(this)
                [_0x66d4d9(0xea)](_0x66d4d9(0x104))
                [_0x66d4d9(0xf2)](_0x66d4d9(0x164))),
              (selections = selections[_0x66d4d9(0x195)](
                (_0x50b5cd) => _0x50b5cd[_0x66d4d9(0x1d9)] !== x
              )),
              selections[_0x66d4d9(0x123)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x66d4d9(0x123)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x66d4d9(0x1d3)](
                  (_0x1e4c22) => _0x1e4c22[_0x66d4d9(0x1d9)] === x
                )),
                (selections[objIndex][_0x66d4d9(0x1c0)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x66d4d9(0x14f)] = x)));
        });
  }
  $(steps[x])[_0x45b992(0x1cd)](_0x45b992(0x156))["is"](_0x45b992(0xf6)) &&
    ((selArr = []),
    $(steps)
      [_0x45b992(0x1cd)](_0x45b992(0x18a))
      [_0x45b992(0xdb)](function (_0xa8e26c, _0x132b23) {
        const _0x2de091 = _0x45b992;
        selArr[_0x2de091(0x123)]({
          selected: $(this)[_0x2de091(0x12e)](_0x2de091(0x187)),
        });
      }),
    (selString = []),
    selArr[_0x45b992(0x15d)]((_0x116298) =>
      selString[_0x45b992(0x123)](_0x116298[_0x45b992(0x187)])
    ),
    (selections = selections[_0x45b992(0x195)](
      (_0x16d683) => _0x16d683[_0x45b992(0x1d9)] !== x
    )),
    $(steps[x])
      [_0x45b992(0x1cd)]("[data-answer]:visible")
      [_0x45b992(0x1cd)](_0x45b992(0x19e))
      [_0x45b992(0xdb)](function () {
        const _0x3c8eb7 = _0x45b992;
        skipTo = undefined;
        if (
          $(this)
            ["parents"](_0x3c8eb7(0x138))
            [_0x3c8eb7(0x12e)](_0x3c8eb7(0x144))
        )
          skipTo = $(this)
            [_0x3c8eb7(0xea)](_0x3c8eb7(0x138))
            [_0x3c8eb7(0x12e)](_0x3c8eb7(0x144));
        else
          $(this)[_0x3c8eb7(0x12e)]("skip-to") &&
            (skipTo = $(this)["data"](_0x3c8eb7(0x144)));
        if ($(this)[_0x3c8eb7(0x12e)](_0x3c8eb7(0xef)))
          (answer = $(this)["attr"]("data-go-to")),
            selections[_0x3c8eb7(0x123)]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0x3c8eb7(0x123)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0x3c8eb7(0x1d3)](
                (_0x96883) => _0x96883["step"] === x
              )),
              (selections[objIndex][_0x3c8eb7(0x1c0)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x3c8eb7(0x14f)] = x));
        else
          $(this)
            [_0x3c8eb7(0xea)](_0x3c8eb7(0x104))
            [_0x3c8eb7(0x12e)](_0x3c8eb7(0xef)) &&
            ((answer = $(this)
              [_0x3c8eb7(0xea)](_0x3c8eb7(0x104))
              ["data"]("go-to")),
            selections[_0x3c8eb7(0x123)]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0x3c8eb7(0x123)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0x3c8eb7(0x1d3)](
                (_0x4bf7c2) => _0x4bf7c2[_0x3c8eb7(0x1d9)] === x
              )),
              (selections[objIndex][_0x3c8eb7(0x1c0)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x3c8eb7(0x14f)] = x)));
      }),
    logicExtra
      ? ($(steps[x])
          [_0x45b992(0x1cd)](_0x45b992(0x1a5))
          ["find"](_0x45b992(0xe2))
          [_0x45b992(0x12e)](_0x45b992(0x131)) === !![] ||
          $(steps[x])
            [_0x45b992(0x1cd)](_0x45b992(0x1cc))
            ["data"](_0x45b992(0x131)) === !![]) &&
        skip &&
        selections[_0x45b992(0x195)](
          (_0x27bcc6) => _0x27bcc6[_0x45b992(0x1d9)] === x
        )[_0x45b992(0x171)] > 0x0 &&
        textareaLength === 0x0 &&
        textInputLength === 0x0 &&
        emailInputLength === 0x0 &&
        checkboxInputLength === 0x0 &&
        setTimeout(function () {
          (next = !![]), nextStep(), selectionQuiz();
        }, $(steps[x])
          [_0x45b992(0x1cd)](_0x45b992(0x1d7))
          [_0x45b992(0x12e)]("radio-delay"))
      : $(steps[x])
          ["find"]("[data-radio-skip]:visible")
          [_0x45b992(0x12e)](_0x45b992(0x131)) === !![] &&
        skip &&
        textareaLength === 0x0 &&
        textInputLength === 0x0 &&
        emailInputLength === 0x0 &&
        checkboxInputLength === 0x0 &&
        setTimeout(function () {
          (next = !![]), nextStep(), selectionQuiz();
        }, $(steps[x])
          ["find"](_0x45b992(0x1d7))
          [_0x45b992(0x12e)]("radio-delay"))),
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
  $("[data-text=\x22error-message\x22]")["hide"](),
    unfilledArr["length"] > 0x0 &&
      unfilledArr["forEach"](function (_0x10ae50) {
        const _0x24ebc3 = _0x32b7;
        $("input[name=\x22" + _0x10ae50[_0x24ebc3(0x1d4)] + "\x22]")
          [_0x24ebc3(0xde)](_0x24ebc3(0x142))
          [_0x24ebc3(0x1a2)](),
          $("input[name=\x22" + _0x10ae50[_0x24ebc3(0x1d4)] + "\x22]")
            ["parents"]()
            [_0x24ebc3(0xdf)](_0x24ebc3(0x142))
            [_0x24ebc3(0x1a2)](),
          $(_0x24ebc3(0x135) + _0x10ae50[_0x24ebc3(0x1d4)] + "\x22]")
            [_0x24ebc3(0xde)](_0x24ebc3(0x142))
            [_0x24ebc3(0x1a2)](),
          $(_0x24ebc3(0x13f) + _0x10ae50[_0x24ebc3(0x1d4)] + "\x22]")
            ["siblings"](_0x24ebc3(0x142))
            [_0x24ebc3(0x1a2)]();
      });
}
function resetInputErrorMessage(_0x2a6c2c) {
  const _0x454f60 = _0x36b7c9;
  $(_0x454f60(0x18d) + _0x2a6c2c + "\x22]")
    [_0x454f60(0xde)](_0x454f60(0x142))
    [_0x454f60(0x128)](),
    $(_0x454f60(0x18d) + _0x2a6c2c + "\x22]")
      ["parents"]()
      ["children"](_0x454f60(0x142))
      [_0x454f60(0x128)](),
    $(_0x454f60(0x135) + _0x2a6c2c + "\x22]")
      [_0x454f60(0xde)](_0x454f60(0x142))
      [_0x454f60(0x128)](),
    $(_0x454f60(0x13f) + _0x2a6c2c + "\x22]")
      [_0x454f60(0xde)](_0x454f60(0x142))
      [_0x454f60(0x128)]();
}
function nextStep() {
  const _0x42af1d = _0x36b7c9;
  customError
    ? ($("[data-text=\x22error-message\x22]")[_0x42af1d(0x128)](),
      fill
        ? (x++,
          countCard
            ? ((curStep = curStep + 0x1),
              $(_0x42af1d(0x1c9))[_0x42af1d(0x166)](steps[_0x42af1d(0x171)]))
            : $(steps[x])[_0x42af1d(0x12e)]("card")
            ? (curStep = curStep + 0x0)
            : (curStep = curStep + 0x1),
          $(_0x42af1d(0x180))[_0x42af1d(0x166)](curStep),
          (progress = x),
          x <= steps[_0x42af1d(0x171)] - 0x1 &&
            (updateStep(), memory && saveFilledInput()))
        : displayErrorMessage())
    : (x++,
      countCard
        ? ((curStep = curStep + 0x1),
          $("[data-text=\x22total-steps\x22]")[_0x42af1d(0x166)](
            steps[_0x42af1d(0x171)]
          ))
        : $(steps[x])["data"](_0x42af1d(0xf9))
        ? (curStep = curStep + 0x0)
        : (curStep = curStep + 0x1),
      $(_0x42af1d(0x180))["text"](curStep),
      x > progress && (progress = x),
      x <= steps[_0x42af1d(0x171)] - 0x1 &&
        (updateStep(), memory && saveFilledInput()));
}
function backStep() {
  const _0x34e130 = _0x36b7c9;
  customError && $(_0x34e130(0x142))["hide"](),
    countCard
      ? ((curStep = curStep - 0x1),
        $(_0x34e130(0x1c9))[_0x34e130(0x166)](steps[_0x34e130(0x171)]))
      : $(steps[x])["data"](_0x34e130(0xf9))
      ? (curStep = curStep - 0x0)
      : (curStep = curStep - 0x1),
    $("[data-text=\x22current-step\x22]")[_0x34e130(0x166)](curStep),
    x > 0x0 &&
      ($(progressbar[x])[_0x34e130(0x1b5)]("current"),
      selections[_0x34e130(0x195)](
        (_0x20fa2e) => _0x20fa2e[_0x34e130(0x1c0)] === x
      )["length"] > 0x0
        ? (x = parseInt(
            getSafe(
              () =>
                selections[_0x34e130(0x195)](
                  (_0x2a3a61) => _0x2a3a61[_0x34e130(0x1c0)] === x
                )[0x0][_0x34e130(0x14f)]
            )
          ))
        : x--,
      updateStep()),
    ($(steps[x])
      [_0x34e130(0x1cd)](_0x34e130(0xe2))
      [_0x34e130(0x12e)](_0x34e130(0x131)) === !![] ||
      $(steps[x])
        [_0x34e130(0x1cd)](_0x34e130(0x1a5))
        ["find"](_0x34e130(0xe2))
        [_0x34e130(0x12e)]("radio-skip") === !![] ||
      $(steps[x])
        ["find"]("[data-answer][data-radio-skip]:visible")
        [_0x34e130(0x12e)](_0x34e130(0x131)) === !![]) &&
      ($(steps[x])
        [_0x34e130(0x1cd)](_0x34e130(0x15a))
        [_0x34e130(0x188)](_0x34e130(0x19f), ![]),
      $(steps[x])
        [_0x34e130(0x1cd)](_0x34e130(0x169))
        [_0x34e130(0x1b5)](_0x34e130(0x178)),
      validation());
}
weightedSelectionRange &&
  $(_0x36b7c9(0x12f))[_0x36b7c9(0xdb)](function () {
    const _0x32de7f = _0x36b7c9;
    $(this)["append"](
      _0x32de7f(0xf5) + $(this)["data"]("selection") + "</div>"
    );
  });
function selectionQuiz() {
  const _0x5646fc = _0x36b7c9;
  if ($(this)[_0x5646fc(0x1cd)]("[data-btn=\x22check\x22]")) {
    $(_0x5646fc(0x12f))[_0x5646fc(0x128)](),
      $(_0x5646fc(0x1a6))[_0x5646fc(0x128)]();
    if (weightedSelection) {
      (selTotal = 0x0),
        selArr[_0x5646fc(0x15d)](function (_0x4c4598) {
          const _0x399b2a = _0x5646fc;
          selTotal = selTotal + _0x4c4598[_0x399b2a(0x187)];
        }),
        $(_0x5646fc(0x12b))[_0x5646fc(0x166)](selTotal);
      if ($(_0x5646fc(0x103) + selTotal + "\x22]")[_0x5646fc(0x171)] > 0x0)
        $(_0x5646fc(0x103) + selTotal + "\x22]")[_0x5646fc(0x1a2)]();
      else
        $(_0x5646fc(0x16b) + selTotal + ")")
          ? $(_0x5646fc(0x16b) + selTotal + ")")
              [_0x5646fc(0x168)](_0x5646fc(0x12f))
              ["eq"](0x0)
              [_0x5646fc(0x15b)]()
          : $(_0x5646fc(0xfa))["fadeIn"]();
    } else {
      let _0x1cb817 = -0x1;
      $("[data-selection]")[_0x5646fc(0xdb)](function (_0x376d45) {
        const _0x3dd92b = _0x5646fc;
        $($(_0x3dd92b(0x12f))[_0x376d45])
          [_0x3dd92b(0x12e)]("selection")
          [_0x3dd92b(0xe3)](selString[_0x3dd92b(0x1b6)]()) &&
          (_0x1cb817 = _0x376d45);
      }),
        _0x1cb817 > -0x1
          ? $($(_0x5646fc(0x12f))[_0x1cb817])[_0x5646fc(0x1a2)]()
          : $(_0x5646fc(0xfa))[_0x5646fc(0x1a2)]();
    }
  }
}
function triggerInputAllData() {
  const _0x1f912 = _0x36b7c9;
  savedFilledInput &&
    memory &&
    savedFilledInput[_0x1f912(0x15d)]((_0x58bd9a) => {
      const _0x33caf4 = _0x1f912;
      if (
        $(
          _0x33caf4(0x18d) +
            _0x58bd9a[_0x33caf4(0x125)] +
            "\x22][value=\x22" +
            _0x58bd9a[_0x33caf4(0x167)] +
            "\x22]"
        )["attr"](_0x33caf4(0xfe)) === _0x33caf4(0x13c)
      )
        $(
          _0x33caf4(0x18d) +
            _0x58bd9a["inputName"] +
            "\x22][value=\x22" +
            _0x58bd9a[_0x33caf4(0x167)] +
            "\x22]"
        )["trigger"](_0x33caf4(0x1d4));
      else
        _0x58bd9a[_0x33caf4(0x167)] === "on"
          ? $(_0x33caf4(0x18d) + _0x58bd9a["inputName"] + "\x22]")["trigger"](
              _0x33caf4(0x1d4)
            )
          : ($("input[name=\x22" + _0x58bd9a[_0x33caf4(0x125)] + "\x22]")[
              _0x33caf4(0xf7)
            ](_0x33caf4(0x1d4)),
            $(_0x33caf4(0x18d) + _0x58bd9a[_0x33caf4(0x125)] + "\x22]")[
              _0x33caf4(0xf7)
            ](_0x33caf4(0x1b0)));
    });
}
$("[data-form=\x22next-btn\x22]")["on"](_0x36b7c9(0x18b), function () {
  (next = !![]), nextStep(), selectionQuiz();
}),
  $(_0x36b7c9(0x1a8))["on"](_0x36b7c9(0x18b), function () {
    (next = ![]), (back = !![]), backStep();
  }),
  $(steps)
    [_0x36b7c9(0x1cd)](_0x36b7c9(0x141))
    ["on"](_0x36b7c9(0x1d4), function (_0x39a92e) {
      const _0x176bae = _0x36b7c9;
      $(this)[_0x176bae(0xf2)]("type") === _0x176bae(0x13c) && (skip = !![]),
        validation();
    });
$("[data-clickable-all]")["data"](_0x36b7c9(0x1a4))
  ? $(_0x36b7c9(0x116))[_0x36b7c9(0x1b5)](_0x36b7c9(0x120))
  : $(_0x36b7c9(0x116))[_0x36b7c9(0x176)](_0x36b7c9(0x120));
function clickableIndicator() {
  const _0x46d350 = _0x36b7c9;
  $(_0x46d350(0x1bb))[_0x46d350(0x12e)](_0x46d350(0xe4)) &&
    ($("[data-form=\x22progress-indicator\x22]")[_0x46d350(0x1b5)]("current"),
    $(_0x46d350(0x1bb))["data"](_0x46d350(0x1a4))
      ? ((x = $(this)[_0x46d350(0x161)]()), updateStep())
      : $(this)[_0x46d350(0x161)]() <= progress &&
        ((x = $(this)[_0x46d350(0x161)]()), updateStep()));
}
$(_0x36b7c9(0x116))["on"]("click", clickableIndicator);
$(_0x36b7c9(0x14d))[_0x36b7c9(0x12e)](_0x36b7c9(0x1c4)) &&
  ($(_0x36b7c9(0x104))[_0x36b7c9(0xdb)](function () {
    const _0x1c3449 = _0x36b7c9;
    $(this)["append"](
      _0x1c3449(0x1c7),
      $(this)[_0x1c3449(0x12e)](_0x1c3449(0xef))
    );
  }),
  $("[data-answer]")["each"](function () {
    const _0x42e8c7 = _0x36b7c9;
    $(this)["append"](_0x42e8c7(0x10d), $(this)[_0x42e8c7(0x12e)]("answer"));
  }));
$(_0x36b7c9(0x18f))["on"](_0x36b7c9(0x18b), function (_0x27a8b4) {
  const _0x9a77c0 = _0x36b7c9;
  $(this)["data"](_0x9a77c0(0x181)) &&
    (redirectTo = $(this)[_0x9a77c0(0x12e)]("redirect")),
    !$(this)["data"](_0x9a77c0(0x1d0)) &&
      (newTab = $(this)[_0x9a77c0(0x12e)](_0x9a77c0(0x1d0))),
    (successCard = $(this)[_0x9a77c0(0x12e)]("success")),
    _0x27a8b4[_0x9a77c0(0x17c)](),
    _0x27a8b4[_0x9a77c0(0xf8)](),
    logicExtra &&
      ($(this)[_0x9a77c0(0x188)](_0x9a77c0(0x157), !![]),
      $(steps)
        [_0x9a77c0(0x1cd)](":input")
        [_0x9a77c0(0x188)](_0x9a77c0(0x11a), ![])),
    localStorage[_0x9a77c0(0xdc)](_0x9a77c0(0x1d2)),
    fill &&
      ($(this)[_0x9a77c0(0x12e)]("wait")
        ? $(this)["val"]($(this)["data"](_0x9a77c0(0x1c2)))
        : ($(this)["val"](_0x9a77c0(0x111)),
          $(this)[_0x9a77c0(0x166)](_0x9a77c0(0x111))),
      $(_0x9a77c0(0x14d))[_0x9a77c0(0x1ca)](),
      $(_0x9a77c0(0x175))["length"] > 0x0 &&
        grecaptcha["getResponse"]()[_0x9a77c0(0x171)] === 0x0 &&
        (form["find"](_0x9a77c0(0x18f))["text"](oldSubmitText),
        form[_0x9a77c0(0x1cd)]("[data-form=\x22submit-btn\x22]")[
          _0x9a77c0(0x16c)
        ](oldSubmitText)));
});
function resetFormly() {
  const _0x2fbc0a = _0x36b7c9;
  $(_0x2fbc0a(0x14d))[_0x2fbc0a(0xf7)](_0x2fbc0a(0x1d6)),
    $(_0x2fbc0a(0x14d))
      ["parents"]()
      [_0x2fbc0a(0x1cd)](_0x2fbc0a(0x199))
      ["hide"](),
    (x = 0x0),
    updateStep(),
    $(_0x2fbc0a(0x14d))["show"](),
    $("[data-form=\x22submit-btn\x22]")[_0x2fbc0a(0x166)](oldSubmitText),
    $(_0x2fbc0a(0x18f))[_0x2fbc0a(0x16c)](oldSubmitText),
    $(_0x2fbc0a(0x180))[_0x2fbc0a(0x166)](0x1),
    $("[data-form=\x22multistep\x22]")
      [_0x2fbc0a(0x1cd)](_0x2fbc0a(0x1c8))
      [_0x2fbc0a(0xde)](_0x2fbc0a(0x118))
      [_0x2fbc0a(0x1b5)](_0x2fbc0a(0x178));
}
$(document)[_0x36b7c9(0x1b1)](function (_0x1e3cce, _0x2ad941, _0x589b0b) {
  const _0x5ed08f = _0x36b7c9;
  if (_0x589b0b["url"][_0x5ed08f(0xe3)](_0x5ed08f(0x185))) {
    const _0x434c41 = _0x2ad941["status"] === 0xc8,
      _0x473184 = "redirect-form-hehexd";
    redirectTo &&
      _0x434c41 &&
      (newTab
        ? window[_0x5ed08f(0x16e)](redirectTo, _0x5ed08f(0x1b4))
        : setTimeout(() => {
            location["href"] = redirectTo;
          }, redirectDelay)),
      _0x434c41 &&
        successCard !== "" &&
        $(_0x5ed08f(0x117) + successCard + "\x22]")[_0x5ed08f(0x1a2)](),
      _0x434c41 &&
        formReset &&
        setTimeout(() => {
          resetFormly();
        }, resetDelay),
      !_0x434c41 &&
        ($(_0x5ed08f(0x18f))["val"](_0x5ed08f(0x111)),
        $("[data-form=\x22submit-btn\x22]")[_0x5ed08f(0x166)](
          _0x5ed08f(0x111)
        ));
  }
}),
  $(_0x36b7c9(0x1ad))["on"](_0x36b7c9(0x18b), function () {
    const _0x114668 = _0x36b7c9;
    var _0x3fab66 = $(this)
      [_0x114668(0x168)]()
      ["find"]("[data-input-field]")
      [_0x114668(0x12e)](_0x114668(0xed));
    setTimeout(function () {
      const _0x11c28a = _0x114668;
      $(_0x11c28a(0x18d) + _0x3fab66 + "\x22]")[_0x11c28a(0x12a)]();
    }, 0x64),
      (back = !![]),
      (x = $(this)[_0x114668(0x12e)](_0x114668(0x183)) - 0x1),
      updateStep(),
      countCard
        ? ((curStep = x + 0x1),
          $("[data-text=\x22total-steps\x22]")[_0x114668(0x166)](
            steps[_0x114668(0x171)]
          ))
        : $(steps[x])["data"](_0x114668(0xf9))
        ? (curStep = x + 0x0)
        : (curStep = x + 0x1),
      $(_0x114668(0x180))["text"](curStep),
      (back = ![]);
  }),
  $(_0x36b7c9(0xd9))["on"](_0x36b7c9(0x18b), function () {
    const _0x4d5b05 = _0x36b7c9;
    $("[data-form=\x22multistep\x22]")[_0x4d5b05(0xf7)](_0x4d5b05(0x1d6));
    let _0x221d32 = $(this);
    $(this)[_0x4d5b05(0x166)](_0x4d5b05(0x111)),
      setTimeout(function () {
        const _0x36320f = _0x4d5b05;
        $(_0x221d32)[_0x36320f(0x166)](oldResetText),
          $(_0x221d32)[_0x36320f(0xea)](_0x36320f(0x199))["hide"](),
          (x = 0x0),
          updateStep(),
          $("[data-form=\x22multistep\x22]")[_0x36320f(0x15b)](),
          $("[data-form=\x22submit-btn\x22]")[_0x36320f(0x166)](oldSubmitText),
          $(_0x36320f(0x18f))[_0x36320f(0x16c)](oldSubmitText),
          $(_0x221d32)["val"](oldSubmitText),
          $("[data-text=\x22current-step\x22]")[_0x36320f(0x166)](0x1),
          $("[data-form=\x22multistep\x22]")
            [_0x36320f(0x1cd)](_0x36320f(0x1c8))
            ["siblings"](".w-checkbox-input")
            [_0x36320f(0x1b5)]("w--redirected-checked");
      }, resetDelay);
  }),
  $("body")["on"](_0x36b7c9(0x17a), function (_0x55dc93) {
    const _0x4e32fe = _0x36b7c9;
    _0x55dc93[_0x4e32fe(0x108)] === 0xd &&
      fill &&
      ($(_0x4e32fe(0x158))["data"](_0x4e32fe(0x1ce))
        ? (totalSteps > curStep && $(_0x4e32fe(0x114))[0x0]["click"](),
          _0x55dc93[_0x4e32fe(0x17c)](),
          _0x55dc93[_0x4e32fe(0xf8)]())
        : (_0x55dc93["preventDefault"](), _0x55dc93["stopPropagation"]()));
  }),
  $(_0x36b7c9(0x148))[_0x36b7c9(0xe0)](function (_0x274097) {
    const _0x3fffbd = _0x36b7c9;
    (_0x274097[_0x3fffbd(0x19a)] || _0x274097[_0x3fffbd(0x126)]) &&
      _0x274097[_0x3fffbd(0x108)] == 0xd &&
      (x >= steps[_0x3fffbd(0x171)] - 0x1 && fill
        ? $(steps[x])[_0x3fffbd(0x1cd)](_0x3fffbd(0x17f))["click"]()
        : (event[_0x3fffbd(0x17c)](), event[_0x3fffbd(0xf8)]()));
  }),
  $(_0x36b7c9(0x16f))[_0x36b7c9(0x17a)](function (_0x34a6a9) {
    const _0x1ace38 = _0x36b7c9;
    $(this)[_0x1ace38(0x12a)](),
      _0x34a6a9[_0x1ace38(0xfc)] == _0x1ace38(0x11b) &&
        (_0x34a6a9[_0x1ace38(0x17c)](), _0x34a6a9["stopPropagation"]()),
      _0x34a6a9[_0x1ace38(0x16d)] &&
        _0x34a6a9["key"] == _0x1ace38(0x11b) &&
        $(this)[_0x1ace38(0x16c)]($(this)[_0x1ace38(0x16c)]() + "\x0a");
  }),
  $("[data-form=\x22multistep\x22]")
    [_0x36b7c9(0x1cd)](_0x36b7c9(0x141))
    ["on"](_0x36b7c9(0x1b0), function () {
      const _0x1e90bc = _0x36b7c9;
      (all_data = all_data[_0x1e90bc(0x195)](
        (_0x263f67) => _0x263f67["field"] !== $(this)["attr"]("name")
      )),
        $(this)[_0x1e90bc(0xf2)](_0x1e90bc(0xfe)) === _0x1e90bc(0x136)
          ? $(this)["is"](":checked")
            ? all_data["push"]({
                field: $(this)[_0x1e90bc(0xf2)]("name"),
                value: $(this)
                  [_0x1e90bc(0xde)](_0x1e90bc(0x1af))
                  [_0x1e90bc(0x166)](),
              })
            : $(
                _0x1e90bc(0x197) +
                  $(this)[_0x1e90bc(0xf2)](_0x1e90bc(0x170)) +
                  "\x22]"
              )[_0x1e90bc(0x128)]()
          : (all_data[_0x1e90bc(0x123)]({
              field: $(this)["attr"](_0x1e90bc(0x170)),
              value: $(this)[_0x1e90bc(0x16c)](),
            }),
            $(this)[_0x1e90bc(0x16c)]() !== "" &&
              resetInputErrorMessage(
                $(this)[_0x1e90bc(0xf2)](_0x1e90bc(0x170))
              )),
        all_data["forEach"](function (_0x357674) {
          const _0x5b0d40 = _0x1e90bc;
          $("[data-input-field=\x22" + _0x357674[_0x5b0d40(0x1d8)] + "\x22]")[
            _0x5b0d40(0x1a2)
          ](),
            $(_0x5b0d40(0x197) + _0x357674[_0x5b0d40(0x1d8)] + "\x22]")[
              _0x5b0d40(0x166)
            ](_0x357674[_0x5b0d40(0x167)]);
        });
    }),
  $(_0x36b7c9(0x14d))
    [_0x36b7c9(0x1cd)]("textarea")
    ["on"](_0x36b7c9(0x1b0), function () {
      const _0x29bb3c = _0x36b7c9;
      $(this)[_0x29bb3c(0x16c)]() !== "" &&
        resetInputErrorMessage($(this)[_0x29bb3c(0xf2)](_0x29bb3c(0x170))),
        (all_data = all_data[_0x29bb3c(0x195)](
          (_0x1db79b) =>
            _0x1db79b[_0x29bb3c(0x1d8)] !==
            $(this)[_0x29bb3c(0xf2)](_0x29bb3c(0x170))
        )),
        all_data[_0x29bb3c(0x123)]({
          field: $(this)["attr"](_0x29bb3c(0x170)),
          value: $(this)[_0x29bb3c(0x16c)](),
        }),
        all_data[_0x29bb3c(0x15d)](function (_0x571c0e) {
          const _0x5befa7 = _0x29bb3c;
          $("[data-input-field=\x22" + _0x571c0e["field"] + "\x22]")[
            "fadeIn"
          ](),
            $(_0x5befa7(0x197) + _0x571c0e["field"] + "\x22]")[
              _0x5befa7(0x166)
            ](_0x571c0e["value"]);
        });
    }),
  $(_0x36b7c9(0x14d))
    [_0x36b7c9(0x1cd)](_0x36b7c9(0x174))
    ["on"]("change", function () {
      const _0x582f38 = _0x36b7c9;
      $(this)[_0x582f38(0x16c)]() !== "" &&
        resetInputErrorMessage($(this)["attr"](_0x582f38(0x170)));
      var _0x5742c2 = $(this)[_0x582f38(0x12e)](_0x582f38(0x100));
      (all_data = all_data["filter"](
        (_0x1a80fc) =>
          _0x1a80fc["field"] !== $(this)[_0x582f38(0xf2)](_0x582f38(0x170))
      )),
        all_data[_0x582f38(0x123)]({
          field: $(this)["attr"](_0x582f38(0x170)),
          value: _0x5742c2
            ? $(this)[_0x582f38(0x1cd)](_0x582f38(0x1ae))[_0x582f38(0x166)]()
            : $(this)[_0x582f38(0x16c)](),
        }),
        all_data[_0x582f38(0x15d)](function (_0x3d28a7) {
          const _0x154f25 = _0x582f38;
          $("[data-input-field=\x22" + _0x3d28a7["field"] + "\x22]")[
            _0x154f25(0x1a2)
          ](),
            $(_0x154f25(0x197) + _0x3d28a7[_0x154f25(0x1d8)] + "\x22]")[
              _0x154f25(0x166)
            ](_0x3d28a7["value"]);
        });
    }),
  updateStep(),
  triggerInputAllData(),
  $(_0x36b7c9(0xe9))[_0x36b7c9(0xdb)](function () {
    const _0x4d9dba = _0x36b7c9,
      _0x21933c = $(this)[_0x4d9dba(0x1cd)](_0x4d9dba(0x17b)),
      _0x2046a8 = [];
    console[_0x4d9dba(0x160)](_0x2046a8),
      _0x21933c[_0x4d9dba(0xdb)](function () {
        const _0x64b8b = _0x4d9dba;
        _0x2046a8[_0x64b8b(0x123)]($(this)[_0x64b8b(0x166)]()["trim"]());
      });
    const _0x54ad75 = $(this)[_0x4d9dba(0xde)](_0x4d9dba(0x19b));
    $[_0x4d9dba(0xdb)](_0x2046a8, function (_0x4e11ee, _0x5aebf) {
      const _0x466441 = _0x4d9dba,
        _0x259428 = $("<option>")
          [_0x466441(0x16c)](_0x5aebf)
          [_0x466441(0x166)](_0x5aebf);
      _0x54ad75["append"](_0x259428);
    });
  }),
  $(_0x36b7c9(0x190))["on"](_0x36b7c9(0x18b), function () {
    const _0x4cd98f = _0x36b7c9;
    let _0x4bdbf4 = $(this)[_0x4cd98f(0x12e)](_0x4cd98f(0x151));
    var _0x534a09 = $("[data-clone=\x22" + _0x4bdbf4 + "\x22]")
        ["eq"](0x0)
        [_0x4cd98f(0x17e)](!![]),
      _0x5ccb2f = $("[data-display=\x22" + _0x4bdbf4 + "\x22]")
        ["eq"](0x0)
        [_0x4cd98f(0x17e)](!![]);
    _0x534a09["find"](_0x4cd98f(0x1d4))[_0x4cd98f(0xdb)](function () {
      const _0x311d8d = _0x4cd98f;
      $(this)[_0x311d8d(0x16c)](""),
        $(this)[_0x311d8d(0xf2)](
          _0x311d8d(0x170),
          this[_0x311d8d(0x170)] +
            "-" +
            (parseInt(
              $(_0x311d8d(0x113) + _0x4bdbf4 + "\x22]")
                ["last"]()
                ["index"]()
            ) +
              0x1)
        ),
        $(this)["attr"](
          _0x311d8d(0x10b),
          $(this)[_0x311d8d(0x12e)]("name") +
            "-" +
            (parseInt(
              $(_0x311d8d(0x113) + _0x4bdbf4 + "\x22]")
                [_0x311d8d(0xf1)]()
                [_0x311d8d(0x161)]()
            ) +
              0x1)
        );
    }),
      _0x5ccb2f[_0x4cd98f(0x1cd)](_0x4cd98f(0xf4))["each"](function () {
        const _0x27c32e = _0x4cd98f;
        $(this)[_0x27c32e(0xf2)](
          "data-input-field",
          $(this)[_0x27c32e(0x12e)](_0x27c32e(0xed)) +
            "-" +
            (parseInt(
              $(_0x27c32e(0x113) + _0x4bdbf4 + "\x22]")
                [_0x27c32e(0xf1)]()
                ["index"]()
            ) +
              0x1)
        );
      }),
      $(_0x4cd98f(0x149) + _0x4bdbf4 + "\x22]")[_0x4cd98f(0xff)](_0x534a09),
      $(_0x4cd98f(0x193) + _0x4bdbf4 + "\x22]")["append"](_0x5ccb2f),
      $(_0x4cd98f(0x1b7) + _0x4bdbf4 + "\x22]")[_0x4cd98f(0xdb)](function () {
        const _0x5cb3bf = _0x4cd98f;
        $(this)[_0x5cb3bf(0x166)](
          $(this)
            ["parents"](_0x5cb3bf(0x113) + _0x4bdbf4 + "\x22]")
            [_0x5cb3bf(0x161)]() + 0x1
        );
      }),
      $(_0x4cd98f(0x14b) + _0x4bdbf4 + "\x22]")[_0x4cd98f(0xdb)](function () {
        const _0x19e2d0 = _0x4cd98f;
        $(this)["text"](
          $(this)
            [_0x19e2d0(0xea)]("[data-display=\x22" + _0x4bdbf4 + "\x22]")
            [_0x19e2d0(0x161)]() + 0x1
        );
      }),
      validation();
  }),
  scrollTop();
