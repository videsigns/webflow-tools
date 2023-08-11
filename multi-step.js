//11th August
//Bug fix:
//1. Fixed form memory bug on radio input
//2. Fixed 'params' not defined
//3. Updated form memory for radio skip
//4. Fixed form memory not working on select input

const _0x4eb715 = _0x3fc7;
(function (_0x1e9ce9, _0x1eb3d1) {
  const _0x52dd0a = _0x3fc7,
    _0x14bde3 = _0x1e9ce9();
  while (!![]) {
    try {
      const _0x5d0314 =
        (-parseInt(_0x52dd0a(0x20d)) / 0x1) *
          (-parseInt(_0x52dd0a(0x167)) / 0x2) +
        -parseInt(_0x52dd0a(0x1b8)) / 0x3 +
        -parseInt(_0x52dd0a(0x1f4)) / 0x4 +
        (-parseInt(_0x52dd0a(0x1ee)) / 0x5) *
          (parseInt(_0x52dd0a(0x139)) / 0x6) +
        (parseInt(_0x52dd0a(0x121)) / 0x7) *
          (parseInt(_0x52dd0a(0x1e0)) / 0x8) +
        -parseInt(_0x52dd0a(0x14f)) / 0x9 +
        parseInt(_0x52dd0a(0x1b6)) / 0xa;
      if (_0x5d0314 === _0x1eb3d1) break;
      else _0x14bde3["push"](_0x14bde3["shift"]());
    } catch (_0x566afa) {
      _0x14bde3["push"](_0x14bde3["shift"]());
    }
  }
})(_0xeafb, 0x954b6);
let x = 0x0,
  curStep = 0x0,
  steps = $("[data-form=\x22step\x22]"),
  progressbarClone = $("[data-form=\x22progress-indicator\x22]")[
    _0x4eb715(0x203)
  ](),
  progressbar,
  countCard = !![],
  weightedSelection = $(_0x4eb715(0x171))[_0x4eb715(0x185)](
    "weighted-selection"
  ),
  weightedSelectionRange = $(_0x4eb715(0x13a))[_0x4eb715(0x185)](
    _0x4eb715(0x1ea)
  ),
  selectMultiple = $("[data-select-multiple]")[_0x4eb715(0x185)](
    _0x4eb715(0x11e)
  ),
  customError = $(_0x4eb715(0x17a))["data"](_0x4eb715(0x15b)),
  fill = ![],
  inputFilled = !![],
  selectFilled = !![],
  radioFilled = !![],
  checkboxFilled = !![],
  emailFilled = !![],
  textareaFilled = !![],
  telFilled = !![],
  dateFilled = !![],
  fileFilled = !![],
  numFilled = !![],
  answer = "",
  selections = [],
  selection = [],
  empReqInput = [],
  empReqDate = [],
  empReqRadio = [],
  empReqSelect = [],
  empReqTextarea = [],
  empReqFile = [],
  empReqNum = [],
  empReqEmail = [],
  empReqTel = [],
  reinitIX = $(_0x4eb715(0x200))[_0x4eb715(0x185)]("reinit"),
  textareaLength = 0x0,
  textInputLength = 0x0,
  emailInputLength = 0x0,
  selectInputLength = 0x0,
  checkboxInputLength = 0x0,
  filledInput = [],
  savedFilledInput = [],
  memory = $(_0x4eb715(0x1d0))[_0x4eb715(0x185)](_0x4eb715(0x16e)),
  quiz = $("[data-quiz]")[_0x4eb715(0x185)]("quiz"),
  progress = 0x0;
const urlFormly = new URL(window[_0x4eb715(0x19f)][_0x4eb715(0x117)]);
let _params = $(_0x4eb715(0x10b))["data"](_0x4eb715(0x175)),
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
  logicExtra = $("[data-form=\x22multistep\x22]")["data"](_0x4eb715(0x16b)),
  oldSubmitText = $(_0x4eb715(0x150))[_0x4eb715(0x10e)](),
  oldResetText = $(_0x4eb715(0x188))[_0x4eb715(0x20b)](),
  formReset = $(_0x4eb715(0x15d))[_0x4eb715(0x185)](_0x4eb715(0x195)),
  successCard = "",
  redirectTo = "",
  totalSteps = 0x0,
  checkCount = 0x0,
  resetDelay = $(_0x4eb715(0x158))["data"]("reset-delay")
    ? $(_0x4eb715(0x158))[_0x4eb715(0x185)](_0x4eb715(0x137))
    : 0x7d0,
  redirectDelay = $(_0x4eb715(0x204))[_0x4eb715(0x185)](_0x4eb715(0x157))
    ? $("[data-redirect-delay]")[_0x4eb715(0x185)](_0x4eb715(0x157))
    : 0x7d0,
  newTab = !![],
  unfilledArr = [],
  phoneFormat = $(_0x4eb715(0x15d))[_0x4eb715(0x185)](_0x4eb715(0x1c6)),
  scrollToTop = $("[data-form=\x22multistep\x22]")["data"](_0x4eb715(0x11b)),
  scrollTopOffset = parseInt($(_0x4eb715(0x15d))["data"](_0x4eb715(0x1ba))),
  notRobot = !![];
(all_data = []),
  (savedFilledInput = JSON["parse"](
    localStorage[_0x4eb715(0x209)](_0x4eb715(0x122))
  ));
$(_0x4eb715(0x145))[_0x4eb715(0x10d)] > 0x0 && (notRobot = ![]);
function recaptcha(_0x1ccc68) {
  notRobot = !![];
}
$(_0x4eb715(0x14d))["length"] > 0x0 &&
  (countCard = $(_0x4eb715(0x14d))[_0x4eb715(0x185)](_0x4eb715(0x1d9)));
$(_0x4eb715(0x183))["hide"](),
  $(progressbarClone)[_0x4eb715(0x1b9)]("current"),
  $(_0x4eb715(0x14e))["children"]()["remove"](),
  $("[data-form=\x22submit-btn\x22]")["hide"](),
  $(_0x4eb715(0x178))[_0x4eb715(0x1d2)](),
  steps[_0x4eb715(0x1e2)](function () {
    const _0x1d8ccb = _0x4eb715;
    $(_0x1d8ccb(0x14e))[_0x1d8ccb(0x165)](
      progressbarClone[_0x1d8ccb(0x203)](!![], !![])
    );
  }),
  $("[data-input-field]")["hide"]();
countCard
  ? ((curStep = curStep + 0x1),
    (totalSteps = steps["length"]),
    $(_0x4eb715(0x152))[_0x4eb715(0x20b)](totalSteps))
  : ($(steps[x])[_0x4eb715(0x185)](_0x4eb715(0x17f))
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    (totalSteps = $(_0x4eb715(0x111))[_0x4eb715(0x10d)]),
    $(_0x4eb715(0x152))[_0x4eb715(0x20b)](totalSteps),
    $(_0x4eb715(0x19b))["each"](function () {
      const _0x298f77 = _0x4eb715;
      $(
        $("[data-form=\x22progress-indicator\x22]")[$(this)[_0x298f77(0x13c)]()]
      )[_0x298f77(0x1d2)]();
    }));
(progressbar = $(_0x4eb715(0x14e))[_0x4eb715(0x1e7)]()),
  $(_0x4eb715(0x133))["on"](_0x4eb715(0x1a2), clickableIndicator),
  $("[data-text=\x22current-step\x22]")[_0x4eb715(0x20b)](curStep),
  steps["hide"](),
  $(_0x4eb715(0x1b3))[_0x4eb715(0x1d2)](),
  $(_0x4eb715(0x1da))["each"](function () {
    const _0x15ed1e = _0x4eb715;
    $(this)["attr"](_0x15ed1e(0x1a8), _0x15ed1e(0x1ce));
  });
function getParams() {
  const _0x3aa6d1 = _0x4eb715;
  urlFormly[_0x3aa6d1(0x1b2)][_0x3aa6d1(0x177)](function (
    _0x59d96f,
    _0x120450
  ) {
    const _0x4b0618 = _0x3aa6d1;
    searchQ[_0x4b0618(0x13d)]({ val: _0x59d96f, key: _0x120450 });
  });
}
function getSafe(_0x548146, _0x229c80) {
  try {
    return _0x548146();
  } catch (_0x4f4241) {
    return _0x229c80;
  }
}
function phoneAutoFormat(_0x35685f) {
  var _0x39cff0 = "";
  return function (_0x3515ce) {
    const _0x5be4ab = _0x3fc7;
    var _0x2e558a = "",
      _0x136c37 = _0x3515ce[_0x5be4ab(0x19d)](/\D/g, ""),
      _0x5af25f = 0x0,
      _0x5c9647 = 0x0;
    while (
      _0x5af25f < _0x136c37[_0x5be4ab(0x10d)] &&
      _0x5c9647 < _0x35685f[_0x5be4ab(0x10d)]
    ) {
      _0x35685f[_0x5c9647] === "x"
        ? ((_0x2e558a += _0x136c37[_0x5af25f]), _0x5af25f++)
        : (_0x2e558a += _0x35685f[_0x5c9647]),
        _0x5c9647++;
    }
    if (_0x3515ce["length"] < _0x39cff0["length"]) {
      var _0x2e9a57 = _0x35685f["slice"](_0x5c9647);
      _0x2e558a += _0x2e9a57[_0x5be4ab(0x19d)](/x/g, "");
    }
    return (_0x39cff0 = _0x2e558a), _0x2e558a;
  };
}
quiz &&
  steps[_0x4eb715(0x1e2)](function () {
    const _0x3d8bfc = _0x4eb715;
    $(this)["children"]()[_0x3d8bfc(0x1ac)](_0x3d8bfc(0x168), !![]),
      $(this)[_0x3d8bfc(0x1e7)]()["attr"]("data-radio-delay", 0xfa);
  });
function disableBtn(_0x230c4f) {
  const _0x508b75 = _0x4eb715;
  (fill = ![]),
    !customError &&
      ($(_0x508b75(0x1e9))[_0x508b75(0x1a3)]({
        opacity: "0.4",
        "pointer-events": "none",
      }),
      $(_0x508b75(0x1e9))["addClass"](_0x508b75(0x1b0)),
      $("[data-form=\x22submit-btn\x22]")[_0x508b75(0x1a3)]({
        opacity: _0x508b75(0x207),
        "pointer-events": "none",
      }),
      $("[data-form=\x22submit-btn\x22]")[_0x508b75(0x1ef)](_0x508b75(0x1b0)),
      $(_0x508b75(0x178))["css"]({
        opacity: _0x508b75(0x207),
        "pointer-events": _0x508b75(0x11f),
      }),
      $(_0x508b75(0x178))["addClass"](_0x508b75(0x1b0)));
}
function enableBtn() {
  const _0x3c301b = _0x4eb715;
  (fill = !![]),
    $("[data-form=\x22next-btn\x22]")["css"]({
      "pointer-events": _0x3c301b(0x159),
      opacity: "1",
    }),
    $(_0x3c301b(0x1e9))[_0x3c301b(0x1b9)](_0x3c301b(0x1b0)),
    $(_0x3c301b(0x150))[_0x3c301b(0x1a3)]({
      "pointer-events": "auto",
      opacity: "1",
    }),
    $(_0x3c301b(0x150))[_0x3c301b(0x1b9)](_0x3c301b(0x1b0)),
    $(_0x3c301b(0x178))[_0x3c301b(0x1a3)]({
      "pointer-events": _0x3c301b(0x159),
      opacity: "1",
    }),
    $("[data-form-ms=\x22submit-btn\x22]")["removeClass"](_0x3c301b(0x1b0));
}
function _0xeafb() {
  const _0x462a00 = [
    "name",
    "option[value=\x22",
    "[data-btn=\x22reset\x22]",
    "prop",
    "skipTo",
    ":input[type=\x22email\x22]",
    "inputName",
    ".w-form-done",
    "input-field",
    "stopPropagation",
    "block-domain",
    "textarea[name=\x22",
    "radio-skip",
    "parent",
    "[type=\x22submit\x22]",
    "reset",
    "trigger",
    "stringify",
    "<br>Data\x20Answer\x20=\x20",
    "w--redirected-checked",
    "<div\x20data-range=\x22selection\x22\x20style=\x22display:none\x20!important\x22>",
    "[data-form=\x22step\x22][data-card]",
    "enter",
    "replace",
    ":input[type=\x22checkbox\x22][required]:checked",
    "location",
    ":input[type=\x22file\x22][required]",
    "setItem",
    "click",
    "css",
    "textarea[required]",
    "test",
    "findIndex",
    "[data-display-index=\x22",
    "type",
    "[data-form=\x22step\x22]",
    "key",
    "option[value=\x22$(this).val()\x22]",
    "attr",
    "debug-mode",
    "includes",
    "input[name=\x22",
    "disabled",
    "input[type=\x22submit\x22]",
    "searchParams",
    "[data-success-card]",
    "input:checkbox",
    "focus",
    "33203120pdbABx",
    "[data-selected]:checked",
    "699009YFrDcU",
    "removeClass",
    "scroll-top-offset",
    ":input[type=\x22text\x22]",
    "file",
    "phone-autoformat",
    "submit-show",
    "removeItem",
    "[data-display=\x22",
    "current",
    "change",
    "data-name",
    "metaKey",
    "fadeIn",
    "phone-validation",
    "[data-form=\x22back-btn\x22]",
    "ix2",
    "select",
    "edit-step",
    "data-go-to",
    ".w-checkbox-input",
    "trim",
    "button",
    "[data-add-new]",
    "[data-memory]",
    "success",
    "hide",
    "not",
    "top",
    "[data-btn=\x22check\x22]",
    "input[type=\x22radio\x22]",
    "keyCode",
    "[data-answer][data-radio-skip]:visible",
    "count-card",
    "[data-form=\x22next-btn\x22][type=\x22submit\x22]",
    "init",
    "[data-input-field]",
    "textarea",
    "[data-selection=\x22",
    ":input[type=\x22checkbox\x22][required]",
    "28856zrSWEB",
    "value",
    "each",
    "[data-cms-select=input]",
    "answer",
    "Webflow",
    "offset",
    "children",
    "form[data-form=\x22multistep\x22]\x20:input",
    "[data-form=\x22next-btn\x22]",
    "weighted-selection-range",
    "[data-radio-delay]",
    "show",
    "[data-answer]",
    "5sqZsvk",
    "addClass",
    "parents",
    "[type=\x22radio\x22]",
    "preventDefault",
    "wait",
    "4236828yJOlse",
    "[data-text=\x22total-weight\x22]",
    "select[required]:visible",
    "step",
    "</div>",
    ":input[type=\x22date\x22][required]",
    "animate",
    "[data-form=\x22submit-btn\x22]:visible",
    "destroy",
    "<option>",
    ":input[type=\x22tel\x22][required]",
    "shiftKey",
    "[data-reinit]",
    "Please\x20wait...",
    "match",
    "clone",
    "[data-redirect-delay]",
    ":input[type=\x22tel\x22]",
    "[data-answer=\x22",
    "0.4",
    ":input[type=\x22number\x22]",
    "getItem",
    "[data-clickable]",
    "text",
    "slice",
    "46FilyJB",
    "\x22]:checked",
    "<br>Data\x20Go\x20To\x20=\x20",
    "[data-query-param]",
    "[data-display-wrapper=\x22",
    "length",
    "val",
    "keypress",
    ":input",
    "[data-form=\x22step\x22]:not([data-card=\x22true\x22])",
    "filter",
    "new-tab",
    "clickable",
    "[data-range]:contains(",
    "span",
    "href",
    "radio-delay",
    "field",
    ":checked",
    "scroll-top",
    "siblings",
    "require",
    "select-multiple",
    "none",
    "input:radio[name=\x22",
    "1099MDXosS",
    "filledInput",
    "checked",
    "ctrlKey",
    ":input[type=\x22checkbox\x22]",
    "input:radio[required]",
    ".w-radio-input",
    "[data-text=\x22current-step\x22]",
    ":input[type=\x22radio\x22]",
    ".w-form-formradioinput",
    "backTo",
    ":input[type=\x22file\x22]",
    "clickable-all",
    "open",
    ":input[type=\x22date\x22]",
    "find",
    "url",
    "[data-radio-skip]:visible",
    "[data-form=\x22progress-indicator\x22]",
    "selection",
    "keydown",
    "[data-checkbox]",
    "reset-delay",
    "checkbox",
    "7202898tqKIKB",
    "[data-weighted-selection-range]",
    "https://webflow.com/api/v1/form/",
    "index",
    "push",
    "input",
    "skip-to",
    "submit",
    "select[required]",
    "last",
    ":input[type=\x22checkbox\x22]:checked",
    "[data-selection]",
    "div.g-recaptcha",
    ":input[required]",
    "ajaxComplete",
    "log",
    "\x22][value=\x22",
    "[data-form=\x22next-btn\x22][data-submit-show]",
    "[data-form=\x22custom-progress-indicator\x22]",
    "min-character",
    "[data-count-card]",
    "[data-form=\x22progress\x22]",
    "8293194WKTMuR",
    "[data-form=\x22submit-btn\x22]",
    "[type=\x22checkbox\x22]",
    "[data-text=\x22total-steps\x22]",
    "[data-clone=\x22",
    "[data-clone-wrapper=\x22",
    "Enter",
    "[data-input-field=\x22",
    "redirect-delay",
    "[data-reset-delay]",
    "auto",
    ":input[type=\x22number\x22][required]",
    "custom-error-message",
    "input[type=\x22checkbox\x22]:visible",
    "[data-form=\x22multistep\x22]",
    "[data-selection=\x22other\x22]",
    ":input[type=\x27radio\x27]:checked",
    "split",
    "[data-selection-weight]",
    "novalidate",
    "[data-answer]:visible",
    "ms-field",
    "append",
    "getResponse",
    "6046CUOvyM",
    "data-radio-skip",
    "textarea[autofocus]",
    ":input[type=\x22email\x22][required]",
    "logic-extra",
    "[data-skip-to]",
    "dispatchEvent",
    "memory",
    "[data-cms-select=cms]",
    "required",
    "[data-weighted-selection]",
    "_blank",
    "[data-cms-select=text]",
    "data-skip-to",
    "query-param",
    "body",
    "forEach",
    "[data-form-ms=\x22submit-btn\x22]",
    "selected",
    "[data-custom-error-message]",
    "add-new",
    "radio",
    "select[name=\x22",
    "[data-go-to]",
    "card",
    "some",
    "readystatechange",
    "go-to",
    "[data-text=\x22error-message\x22]",
    "input[autofocus]",
    "data",
  ];
  _0xeafb = function () {
    return _0x462a00;
  };
  return _0xeafb();
}
function saveFilledInput() {
  const _0x35e6f2 = _0x4eb715;
  $(_0x35e6f2(0x1e8))
    [_0x35e6f2(0x1d3)](_0x35e6f2(0x194))
    [_0x35e6f2(0x1e2)](function () {
      const _0x30fa24 = _0x35e6f2;
      $(this)[_0x30fa24(0x1ac)](_0x30fa24(0x1a8)) === "checkbox" ||
      $(this)[_0x30fa24(0x1ac)](_0x30fa24(0x1a8)) === "radio"
        ? $(this)[_0x30fa24(0x189)](_0x30fa24(0x123)) &&
          (filledInput[_0x30fa24(0x180)](
            (_0x482a41) =>
              _0x482a41[_0x30fa24(0x18c)] === $(this)["attr"]("name")
          )
            ? ((filledInput = filledInput[_0x30fa24(0x112)](
                (_0x300051) =>
                  _0x300051["inputName"] !==
                  $(this)[_0x30fa24(0x1ac)](_0x30fa24(0x186))
              )),
              $(this)[_0x30fa24(0x10e)]() !== "" &&
                filledInput[_0x30fa24(0x13d)]({
                  inputName: $(this)[_0x30fa24(0x1ac)](_0x30fa24(0x186)),
                  value: $(this)[_0x30fa24(0x10e)](),
                }))
            : $(this)[_0x30fa24(0x10e)]() !== "" &&
              filledInput[_0x30fa24(0x13d)]({
                inputName: $(this)[_0x30fa24(0x1ac)](_0x30fa24(0x186)),
                value: $(this)[_0x30fa24(0x10e)](),
              }))
        : filledInput["some"](
            (_0xa6e949) =>
              _0xa6e949["inputName"] ===
              $(this)[_0x30fa24(0x1ac)](_0x30fa24(0x186))
          )
        ? ((filledInput = filledInput[_0x30fa24(0x112)](
            (_0x11deb2) =>
              _0x11deb2[_0x30fa24(0x18c)] !==
              $(this)[_0x30fa24(0x1ac)](_0x30fa24(0x186))
          )),
          $(this)[_0x30fa24(0x10e)]() !== "" &&
            filledInput[_0x30fa24(0x13d)]({
              inputName: $(this)[_0x30fa24(0x1ac)]("name"),
              value: $(this)[_0x30fa24(0x10e)](),
            }))
        : $(this)["val"]() !== "" &&
          filledInput[_0x30fa24(0x13d)]({
            inputName: $(this)[_0x30fa24(0x1ac)](_0x30fa24(0x186)),
            value: $(this)[_0x30fa24(0x10e)](),
          });
    }),
    localStorage[_0x35e6f2(0x1bf)](_0x35e6f2(0x122)),
    localStorage[_0x35e6f2(0x1a1)](
      _0x35e6f2(0x122),
      JSON[_0x35e6f2(0x197)](filledInput)
    );
}
function scrollTop() {
  const _0x50edb7 = _0x4eb715;
  scrollToTop &&
    $("html,\x20body")[_0x50edb7(0x1fa)](
      {
        scrollTop:
          $(_0x50edb7(0x15d))[_0x50edb7(0x1e6)]()[_0x50edb7(0x1d4)] -
          scrollTopOffset,
      },
      0x3e8
    );
}
function updateStep() {
  const _0x5abddc = _0x4eb715;
  scrollTop(),
    (skip = ![]),
    $(_0x5abddc(0x14b))[_0x5abddc(0x1b9)](_0x5abddc(0x1b0));
  $(_0x5abddc(0x20a))[_0x5abddc(0x185)]("clickable") &&
    (steps[_0x5abddc(0x130)](_0x5abddc(0x146))[_0x5abddc(0x1e2)](function () {
      const _0x2f7c59 = _0x5abddc;
      $(
        $("[data-form=\x22custom-progress-indicator\x22]")[
          $(this)[_0x2f7c59(0x1f0)](_0x2f7c59(0x1a9))[_0x2f7c59(0x13c)]()
        ]
      ),
        $(this)[_0x2f7c59(0x10e)]() === "" && emptyInput++;
    }),
    emptyInput > 0x0
      ? $("input[type=\x22submit\x22]")[_0x5abddc(0x1ef)](_0x5abddc(0x1b0))
      : $(_0x5abddc(0x1b1))["removeClass"](_0x5abddc(0x1b0)));
  $(_0x5abddc(0x14b))[_0x5abddc(0x1b9)](_0x5abddc(0x1c1)),
    $("[data-form=\x22custom-progress-indicator\x22]")[_0x5abddc(0x1ef)](
      _0x5abddc(0x1b0)
    ),
    $($("[data-form=\x22custom-progress-indicator\x22]")[x])[_0x5abddc(0x1ef)](
      _0x5abddc(0x1c1)
    ),
    (selection = selections["filter"](
      (_0x3eea80) => _0x3eea80["step"] === x - 0x1
    ));
  next &&
    (x = getSafe(() => selection[0x0][_0x5abddc(0x18a)])
      ? parseInt(getSafe(() => selection[0x0]["skipTo"]))
      : x);
  $(_0x5abddc(0x1ed))[_0x5abddc(0x1d2)](), steps[_0x5abddc(0x1d2)]();
  reinitIX === !![] && window["Webflow"][_0x5abddc(0x1fc)]();
  $(progressbar)[_0x5abddc(0x1b9)]("current");
  for (i = 0x0; i <= x; i++) {
    countCard
      ? $(progressbar[i])[_0x5abddc(0x1ef)](_0x5abddc(0x1c1))
      : !$(steps[i])[_0x5abddc(0x185)](_0x5abddc(0x17f)) &&
        $(progressbar[i])[_0x5abddc(0x1ef)](_0x5abddc(0x1c1));
  }
  reinitIX === !![]
    ? (window["Webflow"] &&
        window[_0x5abddc(0x1e5)]
          [_0x5abddc(0x11d)](_0x5abddc(0x1c8))
          [_0x5abddc(0x1db)](),
      document[_0x5abddc(0x16d)](new Event(_0x5abddc(0x181))),
      $(steps[x])["show"]())
    : $(steps[x])[_0x5abddc(0x1c5)]("slow");
  x === 0x0 &&
    !$(steps[x])["data"]("card") &&
    $(steps[x])[_0x5abddc(0x130)]("[data-answer]")["show"]();
  selection["length"] > 0x0
    ? $(steps[x])
        [_0x5abddc(0x130)](
          "[data-answer=\x22" + selection[0x0][_0x5abddc(0x179)] + "\x22]"
        )
        ["show"]()
    : $(steps[x])
        [_0x5abddc(0x130)](_0x5abddc(0x206) + answer + "\x22]")
        ["show"]();
  if (x === 0x0)
    $("[data-form=\x22back-btn\x22]")[_0x5abddc(0x1d2)](),
      $(_0x5abddc(0x1e9))["show"](),
      $(_0x5abddc(0x150))[_0x5abddc(0x1d2)]();
  else {
    if (
      x === steps[_0x5abddc(0x10d)] - 0x1 ||
      $(steps[x])["find"]("[data-form=\x22submit\x22]:visible")[
        _0x5abddc(0x10d)
      ] > 0x0
    ) {
      $(_0x5abddc(0x1e9))["hide"]();
      if (
        $(steps[x])
          ["find"](_0x5abddc(0x14a))
          [_0x5abddc(0x185)](_0x5abddc(0x1be))
      )
        $(steps[x])[_0x5abddc(0x130)](_0x5abddc(0x14a))[_0x5abddc(0x1ec)]();
      else
        $("[data-form=\x22next-btn\x22]")[_0x5abddc(0x185)]("submit-show") &&
          $(_0x5abddc(0x1e9))["show"]();
      $(_0x5abddc(0x150))[_0x5abddc(0x1ec)](),
        $("[data-form-ms=\x22submit-btn\x22]")[_0x5abddc(0x1ec)](),
        $(_0x5abddc(0x1c7))[_0x5abddc(0x1ec)]();
    } else
      $(_0x5abddc(0x1e9))[_0x5abddc(0x1ec)](),
        $(_0x5abddc(0x1c7))["show"](),
        $("[data-form=\x22submit-btn\x22]")[_0x5abddc(0x1d2)](),
        $(_0x5abddc(0x178))["hide"]();
  }
  $($(steps[x])[_0x5abddc(0x130)](_0x5abddc(0x184))[0x0])[_0x5abddc(0x1b5)](),
    $($(steps[x])["find"](_0x5abddc(0x169))[0x0])[_0x5abddc(0x1b5)](),
    validation();
  for (idx = 0x0; idx <= x; idx++) {
    $($(_0x5abddc(0x14b))[idx])[_0x5abddc(0x1b9)](_0x5abddc(0x1b0));
  }
}
function validateEmail(_0x335989, _0x317cb2, _0xc35437) {
  const _0x1c9b64 = _0x4eb715;
  let _0x1e3062 = _0x335989[_0x1c9b64(0x1ae)]("@")
    ? _0x335989["split"]("@")[0x1][_0x1c9b64(0x160)](".")[0x0]
    : [];
  dom = [];
  _0x317cb2 !== undefined &&
    _0x317cb2["split"](",")[_0x1c9b64(0x177)](function (_0x3e91f9) {
      const _0x4bb914 = _0x1c9b64;
      _0x3e91f9[_0x4bb914(0x1ae)](_0x1e3062) &&
        dom[_0x4bb914(0x13d)](_0x1e3062);
    });
  dom[_0x1c9b64(0x10d)] > 0x0 ? (domainAllowed = ![]) : (domainAllowed = !![]);
  var _0x5c0b33 = /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,20})?$/;
  console[_0x1c9b64(0x148)](_0x5c0b33[_0x1c9b64(0x1a5)](_0x335989)),
    !_0x5c0b33["test"](_0x335989) || !domainAllowed
      ? ((emailFilled = ![]),
        unfilledArr[_0x1c9b64(0x13d)]({ input: _0xc35437 }))
      : (emailFilled = !![]);
}
function phoneValidation(_0xafc7de, _0x1fd4e5, _0x19c8d5) {
  const _0x3fdab3 = _0x4eb715;
  if (phoneFormat)
    return _0xafc7de[_0x3fdab3(0x202)](
      new RegExp(phoneFormat[_0x3fdab3(0x20c)](0x1, -0x1))
    ) && _0x1fd4e5 >= _0x19c8d5
      ? !![]
      : ![];
  else {
    if (_0x1fd4e5 >= _0x19c8d5) return !![];
  }
}
function validation() {
  const _0x2cd642 = _0x4eb715;
  $(steps[x])["data"](_0x2cd642(0x17f)) && enableBtn();
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
    (emptyInput = 0x0),
    (empReqInput = []),
    (empReqDate = []),
    (empReqSelect = []),
    (empReqTextarea = []),
    (empReqNum = []),
    (empReqFile = []),
    (empReqRadio = []),
    (textareaLength = $(steps[x])[_0x2cd642(0x130)](
      "textarea[required]:visible"
    )[_0x2cd642(0x10d)]),
    (textInputLength = $(steps[x])[_0x2cd642(0x130)](
      "input[type=\x22text\x22][required]:visible"
    )[_0x2cd642(0x10d)]),
    (selectInputLength = $(steps[x])["find"](_0x2cd642(0x1f6))[
      _0x2cd642(0x10d)
    ]),
    (emailInputLength = $(steps[x])[_0x2cd642(0x130)](
      "input[type=\x22email\x22]:visible"
    )[_0x2cd642(0x10d)]),
    (checkboxInputLength = $(steps[x])["find"](_0x2cd642(0x15c))[
      _0x2cd642(0x10d)
    ]);
  textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0
    ? disableBtn()
    : enableBtn();
  checkCount = $(steps[x])[_0x2cd642(0x185)](_0x2cd642(0x138))
    ? $(steps[x])[_0x2cd642(0x185)](_0x2cd642(0x138))
    : $(steps[x])["find"](_0x2cd642(0x136))[_0x2cd642(0x10d)] > 0x0
    ? $(steps[x])
        [_0x2cd642(0x130)]("[data-checkbox]")
        [_0x2cd642(0x185)]("checkbox")
    : 0x0;
  if (!logicExtra)
    $(steps[x])[_0x2cd642(0x130)](":input")["is"](_0x2cd642(0x151)) &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])[_0x2cd642(0x130)](_0x2cd642(0x125))[_0x2cd642(0x10d)]
        ? $(steps[x])
            [_0x2cd642(0x130)](_0x2cd642(0x125))
            [_0x2cd642(0x1e2)](function () {
              const _0x315be5 = _0x2cd642;
              $(this)["is"](_0x315be5(0x11a))
                ? $(steps[x])[_0x315be5(0x130)](
                    ":input[type=\x22checkbox\x22][required]"
                  )[_0x315be5(0x10d)] < 0x1 &&
                  ((checkboxFilled = !![]),
                  resetInputErrorMessage(
                    $(this)[_0x315be5(0x1ac)](_0x315be5(0x186))
                  ))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0x315be5(0x13d)]({
                    input: $(this)[_0x315be5(0x1ac)](_0x315be5(0x186)),
                  }));
            })
        : $(steps[x])["find"](_0x2cd642(0x143))["length"] >= checkCount
        ? $(steps[x])[_0x2cd642(0x130)](
            ":input[type=\x22checkbox\x22][required]"
          )[_0x2cd642(0x10d)] > 0x0
          ? $(steps[x])
              [_0x2cd642(0x130)](":input[type=\x22checkbox\x22][required]")
              [_0x2cd642(0x1e2)](function () {
                const _0x327c94 = _0x2cd642;
                !$(this)["is"](":checked")
                  ? ((checkboxFilled = ![]),
                    unfilledArr[_0x327c94(0x13d)]({
                      input: $(this)["attr"](_0x327c94(0x186)),
                    }))
                  : ((checkboxFilled = !![]),
                    $(steps[x])["find"](_0x327c94(0x19e))[_0x327c94(0x10d)] >=
                      $(steps[x])[_0x327c94(0x130)](
                        ":input[type=\x22checkbox\x22][required]"
                      )["length"] &&
                      resetInputErrorMessage(
                        $(steps[x])
                          [_0x327c94(0x130)](_0x327c94(0x125))
                          [_0x327c94(0x1ac)](_0x327c94(0x186))
                      ));
              })
          : ((checkboxFilled = !![]),
            resetInputErrorMessage(
              $(steps[x])
                [_0x2cd642(0x130)](_0x2cd642(0x125))
                [_0x2cd642(0x1ac)]("name")
            ))
        : ((checkboxFilled = ![]),
          $(steps[x])
            [_0x2cd642(0x130)](_0x2cd642(0x1df))
            [_0x2cd642(0x1e2)](function () {
              const _0x3392e0 = _0x2cd642;
              $(this)["not"](_0x3392e0(0x11a)) &&
                unfilledArr[_0x3392e0(0x13d)]({
                  input: $(this)[_0x3392e0(0x1ac)](_0x3392e0(0x186)),
                });
            }),
          unfilledArr["push"]({
            input: $(steps[x])
              [_0x2cd642(0x130)](":input[type=\x22checkbox\x22]")
              ["attr"](_0x2cd642(0x186)),
          }))),
      $(steps[x])
        [_0x2cd642(0x130)](_0x2cd642(0x126))
        [_0x2cd642(0x1e2)](function (_0x28f28d) {
          const _0x5abde7 = _0x2cd642;
          var _0x191fb2 = $(this)["attr"]("name");
          $(_0x5abde7(0x120) + _0x191fb2 + _0x5abde7(0x20e))[
            _0x5abde7(0x10d)
          ] == 0x0
            ? (!empReqRadio["find"](
                (_0x555490) => _0x555490[_0x5abde7(0x13e)] === _0x28f28d
              ) && empReqRadio[_0x5abde7(0x13d)]({ input: _0x28f28d }),
              unfilledArr[_0x5abde7(0x13d)]({
                input: $(this)[_0x5abde7(0x1ac)](_0x5abde7(0x186)),
              }))
            : (empReqRadio = empReqRadio["filter"](
                (_0x2d8f90) => _0x2d8f90[_0x5abde7(0x13e)] !== _0x28f28d
              )),
            empReqRadio[_0x5abde7(0x10d)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0x2cd642(0x130)](":input[type=\x22text\x22][required]")
        ["each"](function (_0xc2f34) {
          const _0x2f8d48 = _0x2cd642;
          let _0x1f9a4c = $(this)["val"]()[_0x2f8d48(0x10d)],
            _0x1fe1e3 = $(this)["data"](_0x2f8d48(0x14c))
              ? $(this)[_0x2f8d48(0x185)](_0x2f8d48(0x14c))
              : 0x0;
          $(this)[_0x2f8d48(0x10e)]() !== "" && _0x1f9a4c >= _0x1fe1e3
            ? (empReqInput = empReqInput[_0x2f8d48(0x112)](
                (_0x16ec55) => _0x16ec55["input"] !== _0xc2f34
              ))
            : (!empReqInput["find"](
                (_0x236ab0) => _0x236ab0[_0x2f8d48(0x13e)] === _0xc2f34
              ) && empReqInput["push"]({ input: _0xc2f34 }),
              unfilledArr[_0x2f8d48(0x13d)]({
                input: $(this)[_0x2f8d48(0x1ac)](_0x2f8d48(0x186)),
              })),
            empReqInput[_0x2f8d48(0x10d)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x2cd642(0x130)](":input[type=\x22date\x22][required]")
        ["each"](function (_0x5ac3d7) {
          const _0x41e496 = _0x2cd642;
          $(this)[_0x41e496(0x10e)]() !== ""
            ? (empReqDate = empReqDate["filter"](
                (_0x2a1be0) => _0x2a1be0[_0x41e496(0x13e)] !== _0x5ac3d7
              ))
            : (!empReqDate[_0x41e496(0x130)](
                (_0x195a83) => _0x195a83[_0x41e496(0x13e)] === _0x5ac3d7
              ) && empReqDate[_0x41e496(0x13d)]({ input: _0x5ac3d7 }),
              unfilledArr["push"]({
                input: $(this)[_0x41e496(0x1ac)](_0x41e496(0x186)),
              })),
            empReqDate["length"] === 0x0
              ? (dateFilled = !![])
              : (dateFilled = ![]);
        }),
      $(steps[x])
        [_0x2cd642(0x130)](_0x2cd642(0x1fe))
        [_0x2cd642(0x1e2)](function (_0x2eb927) {
          const _0x4ebb60 = _0x2cd642;
          if ($(this)[_0x4ebb60(0x10e)]() !== "") {
            let _0x5a783c = $(this)[_0x4ebb60(0x10e)]()[_0x4ebb60(0x10d)],
              _0x5c6524 = $(this)[_0x4ebb60(0x185)](_0x4ebb60(0x14c))
                ? $(this)["data"](_0x4ebb60(0x14c))
                : 0x0;
            if ($(this)[_0x4ebb60(0x185)]("phone-autoformat")) {
              var _0x2a018f = phoneAutoFormat(
                $(this)["data"](_0x4ebb60(0x1bd))
              );
              $(this)[_0x4ebb60(0x10e)](_0x2a018f($(this)["val"]()));
            }
            phoneValidation($(this)[_0x4ebb60(0x10e)](), _0x5a783c, _0x5c6524)
              ? (empReqTel = empReqTel["filter"](
                  (_0x25d440) => _0x25d440[_0x4ebb60(0x13e)] !== _0x2eb927
                ))
              : empReqTel["push"]({ input: _0x2eb927 });
          } else !empReqTel[_0x4ebb60(0x130)]((_0x1ef6d3) => _0x1ef6d3["input"] === _0x2eb927) && empReqTel[_0x4ebb60(0x13d)]({ input: _0x2eb927 }), unfilledArr[_0x4ebb60(0x13d)]({ input: $(this)[_0x4ebb60(0x1ac)](_0x4ebb60(0x186)) });
          empReqTel[_0x4ebb60(0x10d)] === 0x0
            ? (telFilled = !![])
            : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x2cd642(0x130)](_0x2cd642(0x1a0))
        [_0x2cd642(0x1e2)](function (_0x2b766d) {
          const _0x290a2e = _0x2cd642;
          $(this)[_0x290a2e(0x10e)]() !== ""
            ? (empReqFile = empReqFile[_0x290a2e(0x112)](
                (_0x1572fe) => _0x1572fe["input"] !== _0x2b766d
              ))
            : (!empReqFile[_0x290a2e(0x130)](
                (_0x1a9539) => _0x1a9539[_0x290a2e(0x13e)] === _0x2b766d
              ) && empReqFile[_0x290a2e(0x13d)]({ input: _0x2b766d }),
              unfilledArr[_0x290a2e(0x13d)]({
                input: $(this)[_0x290a2e(0x1ac)](_0x290a2e(0x186)),
              })),
            empReqFile[_0x290a2e(0x10d)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x2cd642(0x130)](_0x2cd642(0x15a))
        [_0x2cd642(0x1e2)](function (_0x2683ab) {
          const _0x56b6a9 = _0x2cd642;
          let _0x11de6e = $(this)["val"]()[_0x56b6a9(0x10d)],
            _0x4993dd = $(this)[_0x56b6a9(0x185)](_0x56b6a9(0x14c))
              ? $(this)["data"](_0x56b6a9(0x14c))
              : 0x0;
          $(this)["val"]() !== "" && _0x11de6e >= _0x4993dd
            ? (empReqNum = empReqNum["filter"](
                (_0x645fdc) => _0x645fdc[_0x56b6a9(0x13e)] !== _0x2683ab
              ))
            : (!empReqNum[_0x56b6a9(0x130)](
                (_0x29be44) => _0x29be44[_0x56b6a9(0x13e)] === _0x2683ab
              ) && empReqNum[_0x56b6a9(0x13d)]({ input: _0x2683ab }),
              unfilledArr[_0x56b6a9(0x13d)]({
                input: $(this)["attr"](_0x56b6a9(0x186)),
              })),
            empReqNum[_0x56b6a9(0x10d)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x2cd642(0x141))
        ["each"](function (_0x4e1136) {
          const _0x56376a = _0x2cd642;
          let _0x3fe885 = $(this)[_0x56376a(0x10e)]();
          _0x3fe885 === "" && (_0x3fe885 = null),
            _0x3fe885 != null
              ? (empReqSelect = empReqSelect[_0x56376a(0x112)](
                  (_0xcac8b7) => _0xcac8b7[_0x56376a(0x13e)] !== _0x4e1136
                ))
              : (!empReqSelect["find"](
                  (_0x139c48) => _0x139c48[_0x56376a(0x13e)] === _0x4e1136
                ) && empReqSelect[_0x56376a(0x13d)]({ input: _0x4e1136 }),
                unfilledArr[_0x56376a(0x13d)]({
                  input: $(this)[_0x56376a(0x1ac)](_0x56376a(0x186)),
                })),
            empReqSelect["length"] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x2cd642(0x130)](_0x2cd642(0x1a4))
        [_0x2cd642(0x1e2)](function (_0x35780b) {
          const _0x1bf9f8 = _0x2cd642;
          let _0x475b47 = $(this)[_0x1bf9f8(0x10e)]()[_0x1bf9f8(0x10d)],
            _0x4a161c = $(this)[_0x1bf9f8(0x185)](_0x1bf9f8(0x14c))
              ? $(this)["data"](_0x1bf9f8(0x14c))
              : 0x0;
          $(this)[_0x1bf9f8(0x10e)]() !== "" && _0x475b47 >= _0x4a161c
            ? (empReqTextarea = empReqTextarea[_0x1bf9f8(0x112)](
                (_0x3e5319) => _0x3e5319["input"] !== _0x35780b
              ))
            : (!empReqTextarea["find"](
                (_0x498de8) => _0x498de8[_0x1bf9f8(0x13e)] === _0x35780b
              ) && empReqTextarea[_0x1bf9f8(0x13d)]({ input: _0x35780b }),
              unfilledArr[_0x1bf9f8(0x13d)]({
                input: $(this)["attr"](_0x1bf9f8(0x186)),
              })),
            empReqTextarea[_0x1bf9f8(0x10d)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x2cd642(0x130)](_0x2cd642(0x16a))
        ["each"](function () {
          const _0x3cc6b3 = _0x2cd642;
          $(this)[_0x3cc6b3(0x10e)]() !== ""
            ? validateEmail(
                $(this)[_0x3cc6b3(0x10e)](),
                $(this)[_0x3cc6b3(0x185)](_0x3cc6b3(0x190)),
                $(this)[_0x3cc6b3(0x1ac)](_0x3cc6b3(0x186))
              )
            : ((emailFilled = ![]),
              unfilledArr[_0x3cc6b3(0x13d)]({
                input: $(this)[_0x3cc6b3(0x1ac)](_0x3cc6b3(0x186)),
              }));
        });
  else {
    if ($(steps[x])["data"]("card"))
      (answer = $(steps[x])
        ["find"](_0x2cd642(0x17e))
        [_0x2cd642(0x185)](_0x2cd642(0x182))),
        (selections = selections[_0x2cd642(0x112)](
          (_0x5a69b5) => _0x5a69b5[_0x2cd642(0x1f7)] !== x
        )),
        selections[_0x2cd642(0x13d)]({ step: x, selected: answer });
    else
      $(steps[x])
        [_0x2cd642(0x130)](_0x2cd642(0x163))
        [_0x2cd642(0x185)](_0x2cd642(0x17f)) &&
        ((answer = $(steps[x])
          [_0x2cd642(0x130)](_0x2cd642(0x163))
          [_0x2cd642(0x185)](_0x2cd642(0x182))),
        (selections = selections[_0x2cd642(0x112)](
          (_0x30d538) => _0x30d538[_0x2cd642(0x1f7)] !== x
        )),
        selections[_0x2cd642(0x13d)]({ step: x, selected: answer }));
    $(steps[x])
      [_0x2cd642(0x130)](_0x2cd642(0x163))
      [_0x2cd642(0x130)](_0x2cd642(0x110))
      ["is"](_0x2cd642(0x151)) &&
      (checkCount === "*" ||
      checkCount > $(steps[x])["find"](_0x2cd642(0x125))["length"]
        ? $(steps[x])
            [_0x2cd642(0x130)](":input[type=\x22checkbox\x22]")
            [_0x2cd642(0x1e2)](function () {
              const _0x277cce = _0x2cd642;
              $(this)["is"](_0x277cce(0x11a))
                ? $(steps[x])[_0x277cce(0x130)](_0x277cce(0x146))[
                    _0x277cce(0x10d)
                  ] < 0x1 &&
                  ((skipTo = undefined),
                  $(this)
                    [_0x277cce(0x1f0)]("[data-skip-to]")
                    [_0x277cce(0x185)](_0x277cce(0x13f)) &&
                    (skipTo = $(this)
                      [_0x277cce(0x1f0)](_0x277cce(0x16c))
                      [_0x277cce(0x185)](_0x277cce(0x13f))),
                  $(this)
                    ["parents"]("[data-go-to]")
                    [_0x277cce(0x1ac)](_0x277cce(0x1cb)) &&
                    ((answer = $(this)
                      [_0x277cce(0x1f0)](_0x277cce(0x17e))
                      ["attr"](_0x277cce(0x1cb))),
                    (selections = selections[_0x277cce(0x112)](
                      (_0x5a1fe1) => _0x5a1fe1["step"] !== x
                    )),
                    selections[_0x277cce(0x13d)]({ step: x, selected: answer }),
                    skipTo &&
                      (selections["push"]({
                        step: skipTo - 0x2,
                        selected: answer,
                      }),
                      (objIndex = selections[_0x277cce(0x1a6)](
                        (_0x61912a) => _0x61912a[_0x277cce(0x1f7)] === x
                      )),
                      (selections[objIndex][_0x277cce(0x18a)] =
                        parseInt(skipTo) - 0x1),
                      (selections[objIndex]["backTo"] = x))),
                  (checkboxFilled = !![]),
                  $(steps[x])["find"](_0x277cce(0x19e))[_0x277cce(0x10d)] >=
                    $(steps[x])[_0x277cce(0x130)](_0x277cce(0x1df))["length"] &&
                    resetInputErrorMessage(
                      $(steps[x])
                        [_0x277cce(0x130)](_0x277cce(0x125))
                        [_0x277cce(0x1ac)]("name")
                    ))
                : ((checkboxFilled = ![]),
                  unfilledArr["push"]({
                    input: $(this)[_0x277cce(0x1ac)](_0x277cce(0x186)),
                  }));
            })
        : $(steps[x])
            ["find"]("[data-answer]:visible")
            [_0x2cd642(0x130)](":input[type=\x22checkbox\x22]:checked")[
            "length"
          ] >= checkCount
        ? ($(steps[x])
            ["find"](_0x2cd642(0x163))
            [_0x2cd642(0x130)](":input[type=\x22checkbox\x22]")
            [_0x2cd642(0x1f0)]("[data-go-to]")
            [_0x2cd642(0x1ac)]("data-go-to") &&
            ((skipTo = undefined),
            $(steps[x])
              [_0x2cd642(0x130)]("[data-answer]:visible")
              [_0x2cd642(0x130)](_0x2cd642(0x125))
              ["parents"](_0x2cd642(0x16c))
              [_0x2cd642(0x1ac)](_0x2cd642(0x174)) &&
              (skipTo = $(steps[x])
                ["find"](_0x2cd642(0x163))
                [_0x2cd642(0x130)](_0x2cd642(0x143))
                [_0x2cd642(0x1f0)](_0x2cd642(0x16c))
                [_0x2cd642(0x1ac)](_0x2cd642(0x174))),
            (answer = $(steps[x])
              [_0x2cd642(0x130)](_0x2cd642(0x163))
              [_0x2cd642(0x130)](_0x2cd642(0x125))
              [_0x2cd642(0x1f0)](_0x2cd642(0x17e))
              ["attr"]("data-go-to")),
            (selections = selections["filter"](
              (_0x5c2258) => _0x5c2258["step"] !== x
            )),
            selections[_0x2cd642(0x13d)]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0x2cd642(0x13d)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0x2cd642(0x1a6)](
                (_0x51d0c5) => _0x51d0c5["step"] === x
              )),
              (selections[objIndex][_0x2cd642(0x18a)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x2cd642(0x12b)] = x))),
          (selections = selections["filter"](
            (_0xf1bfc7) => _0xf1bfc7[_0x2cd642(0x1f7)] !== x
          )),
          selections[_0x2cd642(0x13d)]({ step: x, selected: answer }),
          (checkboxFilled = !![]),
          $(steps[x])[_0x2cd642(0x130)](
            ":input[type=\x22checkbox\x22][required]:checked"
          )[_0x2cd642(0x10d)] >=
            $(steps[x])[_0x2cd642(0x130)](_0x2cd642(0x1df))[_0x2cd642(0x10d)] &&
            resetInputErrorMessage(
              $(steps[x])
                [_0x2cd642(0x130)](_0x2cd642(0x125))
                ["attr"](_0x2cd642(0x186))
            ))
        : ((checkboxFilled = ![]),
          $(steps[x])
            [_0x2cd642(0x130)](_0x2cd642(0x1df))
            [_0x2cd642(0x1e2)](function () {
              const _0x275c4a = _0x2cd642;
              $(this)[_0x275c4a(0x1d3)](":checked") &&
                unfilledArr[_0x275c4a(0x13d)]({
                  input: $(this)[_0x275c4a(0x1ac)](_0x275c4a(0x186)),
                });
            }))),
      $(steps[x])
        [_0x2cd642(0x130)](_0x2cd642(0x163))
        [_0x2cd642(0x130)](_0x2cd642(0x126))
        [_0x2cd642(0x1e2)](function (_0x1a7178) {
          const _0x2b872f = _0x2cd642;
          var _0x80944f = $(this)[_0x2b872f(0x1ac)](_0x2b872f(0x186));
          $("input:radio[name=\x22" + _0x80944f + _0x2b872f(0x20e))[
            _0x2b872f(0x10d)
          ] == 0x0
            ? (!empReqRadio[_0x2b872f(0x130)](
                (_0x23e6cf) => _0x23e6cf[_0x2b872f(0x13e)] === _0x1a7178
              ) && empReqRadio["push"]({ input: _0x1a7178 }),
              unfilledArr[_0x2b872f(0x13d)]({
                input: $(this)["attr"](_0x2b872f(0x186)),
              }))
            : (empReqRadio = empReqRadio[_0x2b872f(0x112)](
                (_0x7295c3) => _0x7295c3[_0x2b872f(0x13e)] !== _0x1a7178
              )),
            empReqRadio[_0x2b872f(0x10d)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0x2cd642(0x130)](_0x2cd642(0x163))
        [_0x2cd642(0x130)](":input[type=\x22text\x22][required]")
        [_0x2cd642(0x1e2)](function (_0x2d42ee) {
          const _0x506cb6 = _0x2cd642;
          let _0x577664 = $(this)[_0x506cb6(0x10e)]()[_0x506cb6(0x10d)],
            _0x1227c0 = $(this)[_0x506cb6(0x185)]("min-character")
              ? $(this)[_0x506cb6(0x185)](_0x506cb6(0x14c))
              : 0x0;
          $(this)[_0x506cb6(0x10e)]() !== "" && _0x577664 >= _0x1227c0
            ? (empReqInput = empReqInput[_0x506cb6(0x112)](
                (_0x4b4a29) => _0x4b4a29[_0x506cb6(0x13e)] !== _0x2d42ee
              ))
            : (!empReqInput[_0x506cb6(0x130)](
                (_0x3ab690) => _0x3ab690[_0x506cb6(0x13e)] === _0x2d42ee
              ) && empReqInput[_0x506cb6(0x13d)]({ input: _0x2d42ee }),
              unfilledArr["push"]({
                input: $(this)[_0x506cb6(0x1ac)](_0x506cb6(0x186)),
              })),
            empReqInput[_0x506cb6(0x10d)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x2cd642(0x130)]("[data-answer]:visible")
        [_0x2cd642(0x130)](_0x2cd642(0x1bb))
        [_0x2cd642(0x1e2)](function (_0x58670d) {
          const _0x479874 = _0x2cd642;
          (skipTo = undefined),
            $(this)
              [_0x479874(0x1f0)](_0x479874(0x16c))
              ["data"](_0x479874(0x13f)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0x479874(0x16c))
                ["data"](_0x479874(0x13f))),
            $(this)[_0x479874(0x1f0)](_0x479874(0x17e))["attr"]("data-go-to") &&
              ((answer = $(this)
                [_0x479874(0x1f0)](_0x479874(0x17e))
                [_0x479874(0x1ac)](_0x479874(0x1cb))),
              (selections = selections[_0x479874(0x112)](
                (_0x3ea289) => _0x3ea289[_0x479874(0x1f7)] !== x
              )),
              selections[_0x479874(0x13d)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x479874(0x13d)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x479874(0x1a6)](
                  (_0x2029b3) => _0x2029b3[_0x479874(0x1f7)] === x
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x2cd642(0x130)]("[data-answer]:visible")
        [_0x2cd642(0x130)](_0x2cd642(0x1f9))
        ["each"](function (_0x3549d8) {
          const _0xbeddab = _0x2cd642;
          $(this)[_0xbeddab(0x10e)]() !== ""
            ? (empReqDate = empReqDate[_0xbeddab(0x112)](
                (_0x5e7f26) => _0x5e7f26["input"] !== _0x3549d8
              ))
            : (!empReqDate[_0xbeddab(0x130)](
                (_0x55b69f) => _0x55b69f[_0xbeddab(0x13e)] === _0x3549d8
              ) && empReqDate[_0xbeddab(0x13d)]({ input: _0x3549d8 }),
              unfilledArr["push"]({
                input: $(this)["attr"](_0xbeddab(0x186)),
              })),
            empReqDate[_0xbeddab(0x10d)] === 0x0
              ? (dateFilled = !![])
              : (dateFilled = ![]);
        }),
      $(steps[x])
        [_0x2cd642(0x130)]("[data-answer]:visible")
        [_0x2cd642(0x130)](_0x2cd642(0x12f))
        [_0x2cd642(0x1e2)](function (_0x2ce54c) {
          const _0xca437d = _0x2cd642;
          (skipTo = undefined),
            $(this)
              [_0xca437d(0x1f0)](_0xca437d(0x16c))
              [_0xca437d(0x185)](_0xca437d(0x13f)) !== "" &&
              (skipTo = $(this)
                [_0xca437d(0x1f0)](_0xca437d(0x16c))
                [_0xca437d(0x185)](_0xca437d(0x13f))),
            $(this)
              [_0xca437d(0x1f0)](_0xca437d(0x17e))
              [_0xca437d(0x1ac)](_0xca437d(0x1cb)) &&
              ((answer = $(this)
                ["parents"](_0xca437d(0x17e))
                [_0xca437d(0x1ac)]("data-go-to")),
              (selections = selections[_0xca437d(0x112)](
                (_0x57e467) => _0x57e467[_0xca437d(0x1f7)] !== x
              )),
              selections[_0xca437d(0x13d)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0xca437d(0x13d)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0xc57b2b) => _0xc57b2b[_0xca437d(0x1f7)] === x
                )),
                (selections[objIndex][_0xca437d(0x18a)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0xca437d(0x12b)] = x)));
        }),
      $(steps[x])
        ["find"](_0x2cd642(0x163))
        [_0x2cd642(0x130)](":input[type=\x22number\x22][required]")
        [_0x2cd642(0x1e2)](function (_0x1de3a7) {
          const _0x53cc59 = _0x2cd642;
          let _0xf2d856 = $(this)[_0x53cc59(0x10e)]()[_0x53cc59(0x10d)],
            _0x274a9e = $(this)[_0x53cc59(0x185)](_0x53cc59(0x14c))
              ? $(this)[_0x53cc59(0x185)](_0x53cc59(0x14c))
              : 0x0;
          $(this)["val"]() !== "" && _0xf2d856 >= _0x274a9e
            ? (empReqNum = empReqNum[_0x53cc59(0x112)](
                (_0x166564) => _0x166564[_0x53cc59(0x13e)] !== _0x1de3a7
              ))
            : (!empReqNum[_0x53cc59(0x130)](
                (_0x4e01c7) => _0x4e01c7[_0x53cc59(0x13e)] === _0x1de3a7
              ) && empReqNum["push"]({ input: _0x1de3a7 }),
              unfilledArr[_0x53cc59(0x13d)]({
                input: $(this)["attr"](_0x53cc59(0x186)),
              })),
            empReqNum["length"] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x2cd642(0x130)]("[data-answer]:visible")
        [_0x2cd642(0x130)](_0x2cd642(0x208))
        [_0x2cd642(0x1e2)](function (_0x2c7598) {
          const _0x58c06f = _0x2cd642;
          (skipTo = undefined),
            $(this)
              [_0x58c06f(0x1f0)](_0x58c06f(0x16c))
              ["data"](_0x58c06f(0x13f)) !== "" &&
              (skipTo = $(this)
                [_0x58c06f(0x1f0)](_0x58c06f(0x16c))
                [_0x58c06f(0x185)]("skip-to")),
            $(this)
              [_0x58c06f(0x1f0)](_0x58c06f(0x17e))
              [_0x58c06f(0x1ac)](_0x58c06f(0x1cb)) &&
              ((answer = $(this)
                [_0x58c06f(0x1f0)](_0x58c06f(0x17e))
                [_0x58c06f(0x1ac)]("data-go-to")),
              (selections = selections["filter"](
                (_0x25cb57) => _0x25cb57["step"] !== x
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x58c06f(0x13d)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x58c06f(0x1a6)](
                  (_0x416099) => _0x416099[_0x58c06f(0x1f7)] === x
                )),
                (selections[objIndex][_0x58c06f(0x18a)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x58c06f(0x12b)] = x)));
        }),
      $(steps[x])
        [_0x2cd642(0x130)]("[data-answer]:visible")
        [_0x2cd642(0x130)](_0x2cd642(0x1fe))
        [_0x2cd642(0x1e2)](function (_0x15d01e) {
          const _0x454cce = _0x2cd642;
          if ($(this)[_0x454cce(0x10e)]() !== "") {
            let _0x4259c3 = $(this)["val"]()["length"],
              _0x52c94e = $(this)[_0x454cce(0x185)]("min-character")
                ? $(this)[_0x454cce(0x185)](_0x454cce(0x14c))
                : 0x0;
            if ($(this)[_0x454cce(0x185)]("phone-autoformat")) {
              var _0x417bb6 = phoneAutoFormat(
                $(this)[_0x454cce(0x185)](_0x454cce(0x1bd))
              );
              $(this)[_0x454cce(0x10e)](_0x417bb6($(this)[_0x454cce(0x10e)]()));
            }
            phoneValidation($(this)["val"](), _0x4259c3, _0x52c94e)
              ? (empReqTel = empReqTel[_0x454cce(0x112)](
                  (_0x590d93) => _0x590d93[_0x454cce(0x13e)] !== _0x15d01e
                ))
              : empReqTel[_0x454cce(0x13d)]({ input: _0x15d01e });
          } else !empReqTel[_0x454cce(0x130)]((_0x395524) => _0x395524["input"] === _0x15d01e) && empReqTel[_0x454cce(0x13d)]({ input: _0x15d01e }), unfilledArr[_0x454cce(0x13d)]({ input: $(this)[_0x454cce(0x1ac)](_0x454cce(0x186)) });
          empReqTel[_0x454cce(0x10d)] === 0x0
            ? (telFilled = !![])
            : (telFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x2cd642(0x163))
        [_0x2cd642(0x130)](_0x2cd642(0x205))
        [_0x2cd642(0x1e2)](function (_0x197596) {
          const _0x48826a = _0x2cd642;
          (skipTo = undefined),
            $(this)
              [_0x48826a(0x1f0)](_0x48826a(0x16c))
              [_0x48826a(0x185)](_0x48826a(0x13f)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0x48826a(0x16c))
                [_0x48826a(0x185)](_0x48826a(0x13f))),
            $(this)
              [_0x48826a(0x1f0)]("[data-go-to]")
              [_0x48826a(0x1ac)](_0x48826a(0x1cb)) &&
              ((answer = $(this)
                ["parents"](_0x48826a(0x17e))
                [_0x48826a(0x1ac)](_0x48826a(0x1cb))),
              (selections = selections[_0x48826a(0x112)](
                (_0x57b8fc) => _0x57b8fc[_0x48826a(0x1f7)] !== x
              )),
              selections[_0x48826a(0x13d)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0x48826a(0x1a6)](
                  (_0x4440eb) => _0x4440eb[_0x48826a(0x1f7)] === x
                )),
                (selections[objIndex][_0x48826a(0x18a)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x48826a(0x12b)] = x)));
        }),
      $(steps[x])
        [_0x2cd642(0x130)]("[data-answer]:visible")
        [_0x2cd642(0x130)](_0x2cd642(0x1a0))
        ["each"](function (_0x5b353a) {
          const _0x4c478c = _0x2cd642;
          $(this)[_0x4c478c(0x10e)]() !== ""
            ? (empReqFile = empReqFile[_0x4c478c(0x112)](
                (_0x57bc1e) => _0x57bc1e["input"] !== _0x5b353a
              ))
            : (!empReqFile[_0x4c478c(0x130)](
                (_0x3c7d82) => _0x3c7d82[_0x4c478c(0x13e)] === _0x5b353a
              ) && empReqFile[_0x4c478c(0x13d)]({ input: _0x5b353a }),
              unfilledArr[_0x4c478c(0x13d)]({
                input: $(this)[_0x4c478c(0x1ac)](_0x4c478c(0x186)),
              })),
            empReqFile[_0x4c478c(0x10d)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x2cd642(0x130)](_0x2cd642(0x163))
        [_0x2cd642(0x130)](_0x2cd642(0x12c))
        [_0x2cd642(0x1e2)](function (_0x39bdef) {
          const _0x29cb40 = _0x2cd642;
          (skipTo = undefined),
            $(this)
              [_0x29cb40(0x1f0)]("[data-skip-to]")
              ["data"](_0x29cb40(0x13f)) !== "" &&
              (skipTo = $(this)
                [_0x29cb40(0x1f0)]("[data-skip-to]")
                [_0x29cb40(0x185)](_0x29cb40(0x13f))),
            $(this)
              [_0x29cb40(0x1f0)](_0x29cb40(0x17e))
              [_0x29cb40(0x1ac)]("data-go-to") &&
              ((answer = $(this)
                [_0x29cb40(0x1f0)](_0x29cb40(0x17e))
                [_0x29cb40(0x1ac)](_0x29cb40(0x1cb))),
              (selections = selections["filter"](
                (_0x503fb0) => _0x503fb0[_0x29cb40(0x1f7)] !== x
              )),
              selections[_0x29cb40(0x13d)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x29cb40(0x13d)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x29cb40(0x1a6)](
                  (_0x313f08) => _0x313f08[_0x29cb40(0x1f7)] === x
                )),
                (selections[objIndex][_0x29cb40(0x18a)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x29cb40(0x12b)] = x)));
        }),
      $(steps[x])
        [_0x2cd642(0x130)](_0x2cd642(0x163))
        [_0x2cd642(0x130)](_0x2cd642(0x141))
        [_0x2cd642(0x1e2)](function (_0x458f41) {
          const _0x48ceab = _0x2cd642;
          $(this)[_0x48ceab(0x10e)]() !== ""
            ? (empReqSelect = empReqSelect["filter"](
                (_0x19c1f2) => _0x19c1f2[_0x48ceab(0x13e)] !== _0x458f41
              ))
            : (!empReqSelect[_0x48ceab(0x130)](
                (_0x4798ea) => _0x4798ea["input"] === _0x458f41
              ) && empReqSelect[_0x48ceab(0x13d)]({ input: _0x458f41 }),
              unfilledArr[_0x48ceab(0x13d)]({
                input: $(this)["attr"](_0x48ceab(0x186)),
              })),
            empReqSelect[_0x48ceab(0x10d)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x2cd642(0x130)]("[data-answer]:visible")
        ["find"](_0x2cd642(0x1c9))
        [_0x2cd642(0x1e2)](function (_0x2b08d5) {
          const _0x1ea285 = _0x2cd642;
          (skipTo = undefined),
            $(this)
              [_0x1ea285(0x1f0)](_0x1ea285(0x16c))
              [_0x1ea285(0x185)]("skip-to") !== "" &&
              (skipTo = $(this)
                ["parents"](_0x1ea285(0x16c))
                [_0x1ea285(0x185)]("skip-to")),
            $(this)
              [_0x1ea285(0x1f0)](_0x1ea285(0x17e))
              [_0x1ea285(0x1ac)]("data-go-to") &&
              ((answer = $(this)
                [_0x1ea285(0x1f0)]("[data-go-to]")
                [_0x1ea285(0x1ac)](_0x1ea285(0x1cb))),
              (selections = selections[_0x1ea285(0x112)](
                (_0xb20bef) => _0xb20bef[_0x1ea285(0x1f7)] !== x
              )),
              selections[_0x1ea285(0x13d)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x1ea285(0x13d)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x1ea285(0x1a6)](
                  (_0x143f61) => _0x143f61["step"] === x
                )),
                (selections[objIndex][_0x1ea285(0x18a)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        ["find"](_0x2cd642(0x163))
        ["find"]("textarea[required]")
        [_0x2cd642(0x1e2)](function (_0x1129cb) {
          const _0x15c087 = _0x2cd642;
          let _0x1fd61b = $(this)[_0x15c087(0x10e)]()[_0x15c087(0x10d)],
            _0x61b3eb = $(this)[_0x15c087(0x185)](_0x15c087(0x14c))
              ? $(this)[_0x15c087(0x185)]("min-character")
              : 0x0;
          $(this)["val"]() !== "" && _0x1fd61b >= _0x61b3eb
            ? (empReqTextarea = empReqTextarea["filter"](
                (_0x5d5e2c) => _0x5d5e2c[_0x15c087(0x13e)] !== _0x1129cb
              ))
            : (!empReqTextarea[_0x15c087(0x130)](
                (_0x3ebfd6) => _0x3ebfd6[_0x15c087(0x13e)] === _0x1129cb
              ) && empReqTextarea["push"]({ input: _0x1129cb }),
              unfilledArr[_0x15c087(0x13d)]({
                input: $(this)[_0x15c087(0x1ac)](_0x15c087(0x186)),
              })),
            empReqTextarea["length"] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x2cd642(0x130)](_0x2cd642(0x163))
        [_0x2cd642(0x130)](_0x2cd642(0x1dd))
        [_0x2cd642(0x1e2)](function (_0x39f41e) {
          const _0x5b882a = _0x2cd642;
          (skipTo = undefined),
            $(this)
              [_0x5b882a(0x1f0)](_0x5b882a(0x16c))
              [_0x5b882a(0x185)](_0x5b882a(0x13f)) !== "" &&
              (skipTo = $(this)
                [_0x5b882a(0x1f0)](_0x5b882a(0x16c))
                [_0x5b882a(0x185)](_0x5b882a(0x13f))),
            $(this)
              [_0x5b882a(0x1f0)]("[data-go-to]")
              [_0x5b882a(0x1ac)](_0x5b882a(0x1cb)) &&
              ((answer = $(this)
                ["parents"](_0x5b882a(0x17e))
                [_0x5b882a(0x1ac)](_0x5b882a(0x1cb))),
              (selections = selections[_0x5b882a(0x112)](
                (_0x2eddbc) => _0x2eddbc["step"] !== x
              )),
              selections[_0x5b882a(0x13d)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x5b882a(0x13d)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0xabe2c8) => _0xabe2c8[_0x5b882a(0x1f7)] === x
                )),
                (selections[objIndex][_0x5b882a(0x18a)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x2cd642(0x130)]("[data-answer]:visible")
        ["find"](_0x2cd642(0x16a))
        [_0x2cd642(0x1e2)](function (_0x1ca399) {
          const _0x5ee03d = _0x2cd642;
          $(this)["val"]() !== ""
            ? validateEmail(
                $(this)[_0x5ee03d(0x10e)](),
                $(this)[_0x5ee03d(0x185)](_0x5ee03d(0x190)),
                $(this)["attr"](_0x5ee03d(0x186))
              )
            : ((emailFilled = ![]),
              unfilledArr[_0x5ee03d(0x13d)]({
                input: $(this)[_0x5ee03d(0x1ac)](_0x5ee03d(0x186)),
              }));
        }),
      $(steps[x])
        [_0x2cd642(0x130)](_0x2cd642(0x163))
        ["find"](_0x2cd642(0x18b))
        ["each"](function (_0x545f1e) {
          const _0x3353ea = _0x2cd642;
          (skipTo = undefined),
            $(this)
              [_0x3353ea(0x1f0)](_0x3353ea(0x16c))
              [_0x3353ea(0x185)](_0x3353ea(0x13f)) !== "" &&
              (skipTo = $(this)
                [_0x3353ea(0x1f0)](_0x3353ea(0x16c))
                [_0x3353ea(0x185)](_0x3353ea(0x13f))),
            $(this)
              [_0x3353ea(0x1f0)](_0x3353ea(0x17e))
              [_0x3353ea(0x1ac)](_0x3353ea(0x1cb)) &&
              ((answer = $(this)
                [_0x3353ea(0x1f0)](_0x3353ea(0x17e))
                ["attr"]("data-go-to")),
              (selections = selections[_0x3353ea(0x112)](
                (_0x56107f) => _0x56107f[_0x3353ea(0x1f7)] !== x
              )),
              selections[_0x3353ea(0x13d)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x3353ea(0x13d)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x3353ea(0x1a6)](
                  (_0x3f1e93) => _0x3f1e93[_0x3353ea(0x1f7)] === x
                )),
                (selections[objIndex][_0x3353ea(0x18a)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x3353ea(0x12b)] = x)));
        });
  }
  $(steps[x])["find"](_0x2cd642(0x129))["is"](_0x2cd642(0x11a)) &&
    ((selArr = []),
    $(steps)
      [_0x2cd642(0x130)](_0x2cd642(0x1b7))
      [_0x2cd642(0x1e2)](function (_0x5a7e6b, _0x848aa3) {
        const _0x4aae1 = _0x2cd642;
        selArr[_0x4aae1(0x13d)]({ selected: $(this)["data"](_0x4aae1(0x179)) });
      }),
    (selString = []),
    selArr[_0x2cd642(0x177)]((_0x451f64) =>
      selString[_0x2cd642(0x13d)](_0x451f64[_0x2cd642(0x179)])
    ),
    (selections = selections[_0x2cd642(0x112)](
      (_0xbeb2e2) => _0xbeb2e2[_0x2cd642(0x1f7)] !== x
    )),
    $(steps[x])
      [_0x2cd642(0x130)](_0x2cd642(0x163))
      [_0x2cd642(0x130)](_0x2cd642(0x15f))
      ["each"](function () {
        const _0x1bdbf5 = _0x2cd642;
        skipTo = undefined;
        if (
          $(this)
            [_0x1bdbf5(0x1f0)](_0x1bdbf5(0x16c))
            [_0x1bdbf5(0x185)](_0x1bdbf5(0x13f))
        )
          skipTo = $(this)
            ["parents"](_0x1bdbf5(0x16c))
            [_0x1bdbf5(0x185)](_0x1bdbf5(0x13f));
        else
          $(this)[_0x1bdbf5(0x185)](_0x1bdbf5(0x13f)) &&
            (skipTo = $(this)["data"](_0x1bdbf5(0x13f)));
        if ($(this)[_0x1bdbf5(0x185)](_0x1bdbf5(0x182)))
          (answer = $(this)[_0x1bdbf5(0x1ac)](_0x1bdbf5(0x1cb))),
            console[_0x1bdbf5(0x148)](answer, selections),
            selections[_0x1bdbf5(0x13d)]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0x1bdbf5(0x13d)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0x1bdbf5(0x1a6)](
                (_0x3570d0) => _0x3570d0[_0x1bdbf5(0x1f7)] === x
              )),
              (selections[objIndex][_0x1bdbf5(0x18a)] = parseInt(skipTo) - 0x1),
              (selections[objIndex]["backTo"] = x));
        else
          $(this)
            [_0x1bdbf5(0x1f0)](_0x1bdbf5(0x17e))
            [_0x1bdbf5(0x185)](_0x1bdbf5(0x182)) &&
            ((answer = $(this)
              [_0x1bdbf5(0x1f0)](_0x1bdbf5(0x17e))
              [_0x1bdbf5(0x185)](_0x1bdbf5(0x182))),
            selections[_0x1bdbf5(0x13d)]({ step: x, selected: answer }),
            skipTo &&
              (selections["push"]({ step: skipTo - 0x2, selected: answer }),
              (objIndex = selections[_0x1bdbf5(0x1a6)](
                (_0x45d707) => _0x45d707["step"] === x
              )),
              (selections[objIndex][_0x1bdbf5(0x18a)] = parseInt(skipTo) - 0x1),
              (selections[objIndex]["backTo"] = x)));
      }),
    console[_0x2cd642(0x148)](),
    logicExtra
      ? ($(steps[x])
          [_0x2cd642(0x130)](_0x2cd642(0x163))
          [_0x2cd642(0x130)](_0x2cd642(0x132))
          ["data"]("radio-skip") === !![] ||
          $(steps[x])
            [_0x2cd642(0x130)](_0x2cd642(0x1d8))
            ["data"](_0x2cd642(0x192)) === !![]) &&
        skip &&
        selections["filter"]((_0x45563f) => _0x45563f[_0x2cd642(0x1f7)] === x)[
          _0x2cd642(0x10d)
        ] > 0x0 &&
        textareaLength === 0x0 &&
        textInputLength === 0x0 &&
        emailInputLength === 0x0 &&
        checkboxInputLength === 0x0 &&
        setTimeout(function () {
          (next = !![]), nextStep(), selectionQuiz();
        }, $(steps[x])
          [_0x2cd642(0x130)](_0x2cd642(0x1eb))
          [_0x2cd642(0x185)](_0x2cd642(0x118)))
      : $(steps[x])
          ["find"]("[data-radio-skip]:visible")
          [_0x2cd642(0x185)]("radio-skip") === !![] &&
        skip &&
        textareaLength === 0x0 &&
        textInputLength === 0x0 &&
        emailInputLength === 0x0 &&
        checkboxInputLength === 0x0 &&
        setTimeout(function () {
          (next = !![]), nextStep(), selectionQuiz();
        }, $(steps[x])
          [_0x2cd642(0x130)](_0x2cd642(0x1eb))
          [_0x2cd642(0x185)](_0x2cd642(0x118)))),
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
  const _0x4e3871 = _0x4eb715;
  $(_0x4e3871(0x183))[_0x4e3871(0x1d2)](),
    unfilledArr[_0x4e3871(0x10d)] > 0x0 &&
      unfilledArr[_0x4e3871(0x177)](function (_0x5a60f4) {
        const _0x299fa6 = _0x4e3871;
        $(_0x299fa6(0x1af) + _0x5a60f4[_0x299fa6(0x13e)] + "\x22]")
          ["siblings"]("[data-text=\x22error-message\x22]")
          [_0x299fa6(0x1c5)](),
          $("input[name=\x22" + _0x5a60f4[_0x299fa6(0x13e)] + "\x22]")
            [_0x299fa6(0x1f0)]()
            ["children"]("[data-text=\x22error-message\x22]")
            [_0x299fa6(0x1c5)](),
          $(_0x299fa6(0x191) + _0x5a60f4[_0x299fa6(0x13e)] + "\x22]")
            ["siblings"](_0x299fa6(0x183))
            [_0x299fa6(0x1c5)](),
          $(_0x299fa6(0x17d) + _0x5a60f4[_0x299fa6(0x13e)] + "\x22]")
            [_0x299fa6(0x11c)]("[data-text=\x22error-message\x22]")
            [_0x299fa6(0x1c5)]();
      });
}
function resetInputErrorMessage(_0x548686) {
  const _0x1fa9c5 = _0x4eb715;
  $(_0x1fa9c5(0x1af) + _0x548686 + "\x22]")
    [_0x1fa9c5(0x11c)](_0x1fa9c5(0x183))
    ["hide"](),
    $(_0x1fa9c5(0x1af) + _0x548686 + "\x22]")
      [_0x1fa9c5(0x1f0)]()
      ["children"](_0x1fa9c5(0x183))
      [_0x1fa9c5(0x1d2)](),
    $(_0x1fa9c5(0x191) + _0x548686 + "\x22]")
      ["siblings"](_0x1fa9c5(0x183))
      [_0x1fa9c5(0x1d2)](),
    $(_0x1fa9c5(0x17d) + _0x548686 + "\x22]")
      [_0x1fa9c5(0x11c)](_0x1fa9c5(0x183))
      [_0x1fa9c5(0x1d2)]();
}
function increaseCurstep() {
  const _0x349665 = _0x4eb715;
  countCard
    ? ((curStep = curStep + 0x1),
      $("[data-text=\x22total-steps\x22]")[_0x349665(0x20b)](steps["length"]))
    : $(steps[x])[_0x349665(0x185)](_0x349665(0x17f))
    ? (curStep = curStep + 0x0)
    : (curStep = curStep + 0x1),
    $("[data-text=\x22current-step\x22]")["text"](curStep);
}
function decreaseCurstep() {
  const _0x58b5c2 = _0x4eb715;
  countCard
    ? ((curStep = curStep - 0x1),
      $(_0x58b5c2(0x152))[_0x58b5c2(0x20b)](steps["length"]))
    : $(steps[x])[_0x58b5c2(0x185)]("card")
    ? (curStep = curStep - 0x0)
    : (curStep = curStep - 0x1),
    $(_0x58b5c2(0x128))[_0x58b5c2(0x20b)](curStep);
}
function nextStep() {
  const _0x4bbb3e = _0x4eb715;
  customError
    ? ($("[data-text=\x22error-message\x22]")[_0x4bbb3e(0x1d2)](),
      fill
        ? (x++,
          increaseCurstep(),
          (progress = x),
          x <= steps[_0x4bbb3e(0x10d)] - 0x1 &&
            (updateStep(), memory && saveFilledInput()))
        : displayErrorMessage())
    : (x++,
      increaseCurstep(),
      x > progress && (progress = x),
      x <= steps["length"] - 0x1 &&
        (updateStep(), memory && saveFilledInput()));
}
function _0x3fc7(_0x54c923, _0x52c2dd) {
  const _0xeafbd8 = _0xeafb();
  return (
    (_0x3fc7 = function (_0x3fc757, _0x3c2cf0) {
      _0x3fc757 = _0x3fc757 - 0x10a;
      let _0x594b00 = _0xeafbd8[_0x3fc757];
      return _0x594b00;
    }),
    _0x3fc7(_0x54c923, _0x52c2dd)
  );
}
function backStep() {
  const _0x2ad184 = _0x4eb715;
  customError && $(_0x2ad184(0x183))[_0x2ad184(0x1d2)](),
    decreaseCurstep(),
    x > 0x0 &&
      ($(progressbar[x])["removeClass"]("current"),
      selections[_0x2ad184(0x112)](
        (_0x183236) => _0x183236[_0x2ad184(0x18a)] === x
      )["length"] > 0x0
        ? (x = parseInt(
            getSafe(
              () =>
                selections[_0x2ad184(0x112)](
                  (_0x317e1e) => _0x317e1e[_0x2ad184(0x18a)] === x
                )[0x0][_0x2ad184(0x12b)]
            )
          ))
        : x--,
      updateStep()),
    ($(steps[x])
      [_0x2ad184(0x130)](_0x2ad184(0x132))
      [_0x2ad184(0x185)](_0x2ad184(0x192)) === !![] ||
      $(steps[x])
        ["find"](_0x2ad184(0x163))
        [_0x2ad184(0x130)](_0x2ad184(0x132))
        [_0x2ad184(0x185)]("radio-skip") === !![] ||
      $(steps[x])
        [_0x2ad184(0x130)]("[data-answer][data-radio-skip]:visible")
        [_0x2ad184(0x185)](_0x2ad184(0x192)) === !![]) &&
      ((all_data = all_data[_0x2ad184(0x112)](
        (_0x1a019a) =>
          _0x1a019a[_0x2ad184(0x119)] !==
          $(steps[x])
            [_0x2ad184(0x130)]("input[type=\x22radio\x22]:checked")
            [_0x2ad184(0x1ac)]("name")
      )),
      $(
        _0x2ad184(0x156) +
          $(steps[x])
            ["find"]("input[type=\x22radio\x22]:checked")
            [_0x2ad184(0x1ac)](_0x2ad184(0x186)) +
          "\x22]"
      )[_0x2ad184(0x1d2)](),
      $(steps[x])
        [_0x2ad184(0x130)](_0x2ad184(0x1d6))
        ["prop"](_0x2ad184(0x123), ![]),
      $(steps[x])
        [_0x2ad184(0x130)](_0x2ad184(0x12a))
        [_0x2ad184(0x1b9)](_0x2ad184(0x199)),
      validation());
}
weightedSelectionRange &&
  $(_0x4eb715(0x144))["each"](function () {
    const _0x518737 = _0x4eb715;
    $(this)[_0x518737(0x165)](
      _0x518737(0x19a) +
        $(this)[_0x518737(0x185)](_0x518737(0x134)) +
        _0x518737(0x1f8)
    );
  });
function selectionQuiz() {
  const _0xc4227f = _0x4eb715;
  if ($(this)[_0xc4227f(0x130)](_0xc4227f(0x1d5))) {
    $(_0xc4227f(0x144))["hide"](), $(_0xc4227f(0x161))[_0xc4227f(0x1d2)]();
    if (weightedSelection) {
      (selTotal = 0x0),
        selArr["forEach"](function (_0x3a89f5) {
          selTotal = selTotal + _0x3a89f5["selected"];
        }),
        $(_0xc4227f(0x1f5))["text"](selTotal);
      if ($(_0xc4227f(0x1de) + selTotal + "\x22]")["length"] > 0x0)
        $("[data-selection=\x22" + selTotal + "\x22]")["fadeIn"]();
      else
        $("[data-range]:contains(" + selTotal + ")")
          ? $(_0xc4227f(0x115) + selTotal + ")")
              [_0xc4227f(0x193)](_0xc4227f(0x144))
              ["eq"](0x0)
              [_0xc4227f(0x1ec)]()
          : $(_0xc4227f(0x15e))[_0xc4227f(0x1c5)]();
    } else {
      let _0x5ecdd2 = -0x1;
      $(_0xc4227f(0x144))["each"](function (_0xfec053) {
        const _0x2c386e = _0xc4227f;
        $($(_0x2c386e(0x144))[_0xfec053])
          ["data"]("selection")
          [_0x2c386e(0x1ae)](selString["join"]()) && (_0x5ecdd2 = _0xfec053);
      }),
        _0x5ecdd2 > -0x1
          ? $($(_0xc4227f(0x144))[_0x5ecdd2])[_0xc4227f(0x1c5)]()
          : $(_0xc4227f(0x15e))[_0xc4227f(0x1c5)]();
    }
  }
}
function triggerInputAllData() {
  const _0x211be8 = _0x4eb715;
  if (savedFilledInput && memory)
    savedFilledInput[_0x211be8(0x177)]((_0x5db403) => {
      const _0x4bb35c = _0x211be8;
      var _0x1d97e0 = $(
          "input[name=\x22" +
            _0x5db403["inputName"] +
            _0x4bb35c(0x149) +
            _0x5db403[_0x4bb35c(0x1e1)] +
            "\x22]"
        ),
        _0x42a7f6 = $(_0x4bb35c(0x1af) + _0x5db403[_0x4bb35c(0x18c)] + "\x22]");
      console[_0x4bb35c(0x148)](
        _0x1d97e0["parents"]("[data-radio-skip]")["data"](_0x4bb35c(0x192))
      );
      if (_0x1d97e0[_0x4bb35c(0x1ac)](_0x4bb35c(0x1a8)) !== _0x4bb35c(0x1bc)) {
        if (
          _0x1d97e0[_0x4bb35c(0x1ac)]("type") === "radio" &&
          !_0x1d97e0[_0x4bb35c(0x1f0)]("[data-radio-skip]")["data"](
            _0x4bb35c(0x192)
          )
        )
          _0x1d97e0["click"](),
            _0x1d97e0[_0x4bb35c(0x11c)](_0x4bb35c(0x127))[_0x4bb35c(0x1ef)](
              _0x4bb35c(0x199)
            ),
            _0x1d97e0[_0x4bb35c(0x196)](_0x4bb35c(0x13e));
        else
          _0x5db403[_0x4bb35c(0x1e1)] === "on"
            ? (_0x42a7f6[_0x4bb35c(0x1a2)](),
              _0x42a7f6[_0x4bb35c(0x11c)](_0x4bb35c(0x1cc))[_0x4bb35c(0x1ef)](
                _0x4bb35c(0x199)
              ),
              _0x42a7f6["trigger"](_0x4bb35c(0x13e)))
            : (console[_0x4bb35c(0x148)](
                _0x5db403[_0x4bb35c(0x18c)],
                _0x5db403["value"]
              ),
              _0x42a7f6[_0x4bb35c(0x10e)](_0x5db403["value"]),
              _0x42a7f6[_0x4bb35c(0x10e)](_0x5db403[_0x4bb35c(0x1e1)]),
              $("option[value=\x22" + _0x5db403[_0x4bb35c(0x1e1)] + "\x22]")[
                _0x4bb35c(0x189)
              ](_0x4bb35c(0x179), !![]),
              _0x42a7f6[_0x4bb35c(0x196)](_0x4bb35c(0x13e)),
              _0x42a7f6[_0x4bb35c(0x196)]("change"));
      }
    });
  else
    _params &&
      (getParams(),
      searchQ[_0x211be8(0x177)]((_0x1d3598) => {
        const _0x56e171 = _0x211be8;
        if (
          $(
            "input[name=\x22" +
              _0x1d3598[_0x56e171(0x18c)] +
              "\x22][value=\x22" +
              _0x1d3598[_0x56e171(0x1e1)] +
              "\x22]"
          )["attr"](_0x56e171(0x1a8)) !== "file"
        ) {
          if (
            $(
              "input[name=\x22" +
                _0x1d3598[_0x56e171(0x1aa)] +
                _0x56e171(0x149) +
                _0x1d3598[_0x56e171(0x10e)] +
                "\x22]"
            )[_0x56e171(0x1ac)]("type") === _0x56e171(0x17c)
          )
            $(
              _0x56e171(0x1af) +
                _0x1d3598[_0x56e171(0x1aa)] +
                _0x56e171(0x149) +
                _0x1d3598[_0x56e171(0x10e)] +
                "\x22]"
            )["click"](),
              $(
                _0x56e171(0x1af) +
                  _0x1d3598[_0x56e171(0x1aa)] +
                  _0x56e171(0x149) +
                  _0x1d3598[_0x56e171(0x10e)] +
                  "\x22]"
              )
                [_0x56e171(0x11c)](_0x56e171(0x127))
                [_0x56e171(0x1ef)](_0x56e171(0x199)),
              $(
                _0x56e171(0x1af) +
                  _0x1d3598[_0x56e171(0x1aa)] +
                  _0x56e171(0x149) +
                  _0x1d3598[_0x56e171(0x10e)] +
                  "\x22]"
              )[_0x56e171(0x196)](_0x56e171(0x13e));
          else
            _0x1d3598["val"] === "on"
              ? ($(_0x56e171(0x1af) + _0x1d3598[_0x56e171(0x1aa)] + "\x22]")[
                  _0x56e171(0x1a2)
                ](),
                $(_0x56e171(0x1af) + _0x1d3598[_0x56e171(0x1aa)] + "\x22]")
                  [_0x56e171(0x11c)](_0x56e171(0x1cc))
                  [_0x56e171(0x1ef)](_0x56e171(0x199)),
                $(_0x56e171(0x1af) + _0x1d3598[_0x56e171(0x1aa)] + "\x22]")[
                  _0x56e171(0x196)
                ](_0x56e171(0x13e)))
              : ($("input[name=\x22" + _0x1d3598[_0x56e171(0x1aa)] + "\x22]")[
                  _0x56e171(0x10e)
                ](_0x1d3598[_0x56e171(0x10e)]),
                $("textarea[name=\x22" + _0x1d3598["key"] + "\x22]")[
                  _0x56e171(0x10e)
                ](_0x1d3598["val"]),
                $("select[name=\x22" + _0x1d3598[_0x56e171(0x1aa)] + "\x22]")
                  ["find"](_0x56e171(0x187) + _0x1d3598["val"] + "\x22]")
                  [_0x56e171(0x189)](_0x56e171(0x179), !![]),
                $(_0x56e171(0x1af) + _0x1d3598[_0x56e171(0x1aa)] + "\x22]")[
                  _0x56e171(0x196)
                ]("input"),
                $(_0x56e171(0x1af) + _0x1d3598["key"] + "\x22]")[
                  _0x56e171(0x196)
                ](_0x56e171(0x1c2)));
        }
      }));
}
$(_0x4eb715(0x1e9))["on"]("click", function () {
  (next = !![]), nextStep(), selectionQuiz();
}),
  $("[data-form=\x22back-btn\x22]")["on"](_0x4eb715(0x1a2), function () {
    (next = ![]), (back = !![]), backStep();
  }),
  $(steps)
    [_0x4eb715(0x130)](_0x4eb715(0x110))
    [_0x4eb715(0x1d3)](_0x4eb715(0x1f1))
    ["on"]("input", function (_0x312499) {
      validation();
    }),
  $(steps)
    [_0x4eb715(0x130)]("input[type=\x22radio\x22]")
    ["on"]("click", function () {
      (skip = !![]), validation();
    });
$("[data-clickable-all]")["data"](_0x4eb715(0x12d))
  ? $(_0x4eb715(0x14b))[_0x4eb715(0x1b9)](_0x4eb715(0x1b0))
  : $(_0x4eb715(0x14b))[_0x4eb715(0x1ef)](_0x4eb715(0x1b0));
function clickableIndicator() {
  const _0x2b9bca = _0x4eb715;
  $("[data-clickable]")[_0x2b9bca(0x185)](_0x2b9bca(0x114)) &&
    ($(_0x2b9bca(0x133))["removeClass"](_0x2b9bca(0x1c1)),
    $(_0x2b9bca(0x20a))[_0x2b9bca(0x185)](_0x2b9bca(0x12d))
      ? ((x = $(this)["index"]()), updateStep())
      : $(this)[_0x2b9bca(0x13c)]() <= progress &&
        ((x = $(this)[_0x2b9bca(0x13c)]()), updateStep())),
    $(_0x2b9bca(0x128))[_0x2b9bca(0x20b)](x + 0x1);
}
$(_0x4eb715(0x14b))["on"](_0x4eb715(0x1a2), clickableIndicator);
$("[data-form=\x22multistep\x22]")["data"](_0x4eb715(0x1ad)) &&
  ($(_0x4eb715(0x17e))[_0x4eb715(0x1e2)](function () {
    const _0x456a0e = _0x4eb715;
    $(this)["append"](_0x456a0e(0x10a), $(this)["data"](_0x456a0e(0x182)));
  }),
  $(_0x4eb715(0x1ed))[_0x4eb715(0x1e2)](function () {
    const _0x414ad9 = _0x4eb715;
    $(this)[_0x414ad9(0x165)](
      _0x414ad9(0x198),
      $(this)["data"](_0x414ad9(0x1e4))
    );
  }));
$(_0x4eb715(0x150))["on"](_0x4eb715(0x1a2), function (_0x5e4911) {
  const _0x5d8313 = _0x4eb715;
  $(this)["data"]("redirect") &&
    (redirectTo = $(this)[_0x5d8313(0x185)]("redirect")),
    !$(this)[_0x5d8313(0x185)](_0x5d8313(0x113)) &&
      (newTab = $(this)[_0x5d8313(0x185)](_0x5d8313(0x113))),
    (successCard = $(this)[_0x5d8313(0x185)](_0x5d8313(0x1d1))),
    _0x5e4911[_0x5d8313(0x1f2)](),
    _0x5e4911["stopPropagation"](),
    logicExtra &&
      ($(this)[_0x5d8313(0x189)](_0x5d8313(0x162), !![]),
      $(steps)["find"](":input")[_0x5d8313(0x189)](_0x5d8313(0x170), ![])),
    localStorage["removeItem"]("filledInput"),
    fill &&
      ($(this)[_0x5d8313(0x185)]("wait")
        ? $(this)[_0x5d8313(0x10e)]($(this)["data"](_0x5d8313(0x1f3)))
        : ($(this)[_0x5d8313(0x10e)](_0x5d8313(0x201)),
          $(this)[_0x5d8313(0x20b)](_0x5d8313(0x201))),
      $(_0x5d8313(0x15d))[_0x5d8313(0x140)](),
      $("div.g-recaptcha")["length"] > 0x0 &&
        grecaptcha[_0x5d8313(0x166)]()[_0x5d8313(0x10d)] === 0x0 &&
        (form["find"](_0x5d8313(0x150))[_0x5d8313(0x20b)](oldSubmitText),
        form[_0x5d8313(0x130)](_0x5d8313(0x150))[_0x5d8313(0x10e)](
          oldSubmitText
        )));
});
function resetFormly() {
  const _0x20a4a4 = _0x4eb715;
  $(_0x20a4a4(0x15d))["trigger"](_0x20a4a4(0x195)),
    $(_0x20a4a4(0x15d))
      ["parents"]()
      ["find"](_0x20a4a4(0x18d))
      [_0x20a4a4(0x1d2)](),
    (x = 0x0),
    updateStep(),
    $(_0x20a4a4(0x15d))[_0x20a4a4(0x1ec)](),
    $(_0x20a4a4(0x150))[_0x20a4a4(0x20b)](oldSubmitText),
    $("[data-form=\x22submit-btn\x22]")[_0x20a4a4(0x10e)](oldSubmitText),
    $(_0x20a4a4(0x128))[_0x20a4a4(0x20b)](0x1),
    $(_0x20a4a4(0x15d))
      [_0x20a4a4(0x130)](_0x20a4a4(0x1b4))
      [_0x20a4a4(0x11c)](_0x20a4a4(0x1cc))
      [_0x20a4a4(0x1b9)](_0x20a4a4(0x199));
}
$(document)[_0x4eb715(0x147)](function (_0x59361a, _0x5ca4c8, _0x1fa22f) {
  const _0x83828b = _0x4eb715;
  if (_0x1fa22f[_0x83828b(0x131)][_0x83828b(0x1ae)](_0x83828b(0x13b))) {
    const _0x361914 = _0x5ca4c8["status"] === 0xc8,
      _0x3a1f43 = "redirect-form-hehexd";
    redirectTo &&
      _0x361914 &&
      (newTab
        ? window[_0x83828b(0x12e)](redirectTo, _0x83828b(0x172))
        : setTimeout(() => {
            const _0x4fbf4e = _0x83828b;
            location[_0x4fbf4e(0x117)] = redirectTo;
          }, redirectDelay)),
      _0x361914 &&
        successCard !== "" &&
        $("[data-success-card=\x22" + successCard + "\x22]")[
          _0x83828b(0x1c5)
        ](),
      _0x361914 &&
        formReset &&
        setTimeout(() => {
          resetFormly();
        }, resetDelay),
      !_0x361914 &&
        ($(_0x83828b(0x150))["val"](_0x83828b(0x201)),
        $(_0x83828b(0x150))["text"](_0x83828b(0x201)));
  }
}),
  $("[data-btn=\x22edit\x22]")["on"](_0x4eb715(0x1a2), function () {
    const _0x24b8ed = _0x4eb715;
    var _0x7e570e = $(this)
      [_0x24b8ed(0x193)]()
      ["find"](_0x24b8ed(0x1dc))
      [_0x24b8ed(0x185)](_0x24b8ed(0x18e));
    setTimeout(function () {
      const _0x409a4f = _0x24b8ed;
      $(_0x409a4f(0x1af) + _0x7e570e + "\x22]")["focus"]();
    }, 0x64),
      (back = !![]),
      (x = $(this)[_0x24b8ed(0x185)](_0x24b8ed(0x1ca)) - 0x1),
      updateStep(),
      countCard
        ? ((curStep = x + 0x1), $(_0x24b8ed(0x152))["text"](steps["length"]))
        : $(steps[x])[_0x24b8ed(0x185)](_0x24b8ed(0x17f))
        ? (curStep = x + 0x0)
        : (curStep = x + 0x1),
      $(_0x24b8ed(0x128))[_0x24b8ed(0x20b)](curStep),
      (back = ![]);
  }),
  $(_0x4eb715(0x188))["on"](_0x4eb715(0x1a2), function () {
    const _0x285eea = _0x4eb715;
    $(_0x285eea(0x15d))["trigger"](_0x285eea(0x195));
    let _0x376433 = $(this);
    $(this)[_0x285eea(0x20b)](_0x285eea(0x201)),
      setTimeout(function () {
        const _0x4f0b75 = _0x285eea;
        $(_0x376433)[_0x4f0b75(0x20b)](oldResetText),
          $(_0x376433)[_0x4f0b75(0x1f0)](_0x4f0b75(0x18d))[_0x4f0b75(0x1d2)](),
          (x = 0x0),
          updateStep(),
          $(_0x4f0b75(0x15d))[_0x4f0b75(0x1ec)](),
          $(_0x4f0b75(0x150))[_0x4f0b75(0x20b)](oldSubmitText),
          $(_0x4f0b75(0x150))["val"](oldSubmitText),
          $(_0x376433)[_0x4f0b75(0x10e)](oldSubmitText),
          $("[data-text=\x22current-step\x22]")[_0x4f0b75(0x20b)](0x1),
          $(_0x4f0b75(0x15d))
            [_0x4f0b75(0x130)](_0x4f0b75(0x1b4))
            [_0x4f0b75(0x11c)](".w-checkbox-input")
            ["removeClass"](_0x4f0b75(0x199));
      }, resetDelay);
  }),
  $("body")["on"]("keypress", function (_0x123ea5) {
    const _0x1e8517 = _0x4eb715;
    _0x123ea5[_0x1e8517(0x1d7)] === 0xd &&
      fill &&
      ($("[data-enter]")[_0x1e8517(0x185)](_0x1e8517(0x19c))
        ? (totalSteps > curStep && $(_0x1e8517(0x1e9))[0x0]["click"](),
          _0x123ea5[_0x1e8517(0x1f2)](),
          _0x123ea5[_0x1e8517(0x18f)]())
        : (_0x123ea5[_0x1e8517(0x1f2)](), _0x123ea5[_0x1e8517(0x18f)]()));
  }),
  $(_0x4eb715(0x176))[_0x4eb715(0x135)](function (_0x297a38) {
    const _0x409684 = _0x4eb715;
    (_0x297a38[_0x409684(0x1c4)] || _0x297a38[_0x409684(0x124)]) &&
      _0x297a38[_0x409684(0x1d7)] == 0xd &&
      (x >= steps[_0x409684(0x10d)] - 0x1 && fill
        ? $(steps[x])["find"](_0x409684(0x1fb))[_0x409684(0x1a2)]()
        : (event[_0x409684(0x1f2)](), event[_0x409684(0x18f)]()));
  }),
  $(_0x4eb715(0x1dd))[_0x4eb715(0x10f)](function (_0x1999d6) {
    const _0x3b7707 = _0x4eb715;
    $(this)[_0x3b7707(0x1b5)](),
      _0x1999d6["key"] == _0x3b7707(0x155) &&
        (_0x1999d6[_0x3b7707(0x1f2)](), _0x1999d6[_0x3b7707(0x18f)]()),
      _0x1999d6[_0x3b7707(0x1ff)] &&
        _0x1999d6["key"] == _0x3b7707(0x155) &&
        $(this)[_0x3b7707(0x10e)]($(this)[_0x3b7707(0x10e)]() + "\x0a");
  }),
  $(_0x4eb715(0x15d))
    [_0x4eb715(0x130)](":input")
    ["on"](_0x4eb715(0x1c2), function () {
      const _0x3b86e2 = _0x4eb715;
      (all_data = all_data[_0x3b86e2(0x112)](
        (_0x517d5e) =>
          _0x517d5e[_0x3b86e2(0x119)] !== $(this)[_0x3b86e2(0x1ac)]("name")
      )),
        $(this)[_0x3b86e2(0x1ac)]("type") === _0x3b86e2(0x138)
          ? $(this)["is"](_0x3b86e2(0x11a))
            ? all_data[_0x3b86e2(0x13d)]({
                field: $(this)[_0x3b86e2(0x1ac)](_0x3b86e2(0x186)),
                value: $(this)
                  [_0x3b86e2(0x11c)](_0x3b86e2(0x116))
                  [_0x3b86e2(0x20b)](),
              })
            : $(_0x3b86e2(0x156) + $(this)[_0x3b86e2(0x1ac)]("name") + "\x22]")[
                _0x3b86e2(0x1d2)
              ]()
          : (all_data[_0x3b86e2(0x13d)]({
              field: $(this)[_0x3b86e2(0x1ac)]("name"),
              value: $(this)[_0x3b86e2(0x10e)](),
            }),
            $(this)[_0x3b86e2(0x10e)]() !== "" &&
              resetInputErrorMessage(
                $(this)[_0x3b86e2(0x1ac)](_0x3b86e2(0x186))
              )),
        all_data["forEach"](function (_0x967f58) {
          const _0x2f2555 = _0x3b86e2;
          $(_0x2f2555(0x156) + _0x967f58[_0x2f2555(0x119)] + "\x22]")[
            "fadeIn"
          ](),
            $(_0x2f2555(0x156) + _0x967f58[_0x2f2555(0x119)] + "\x22]")["text"](
              _0x967f58["value"]
            );
        });
    }),
  $(_0x4eb715(0x15d))
    ["find"](_0x4eb715(0x1dd))
    ["on"](_0x4eb715(0x1c2), function () {
      const _0x3bc5d8 = _0x4eb715;
      $(this)[_0x3bc5d8(0x10e)]() !== "" &&
        resetInputErrorMessage($(this)[_0x3bc5d8(0x1ac)](_0x3bc5d8(0x186))),
        (all_data = all_data[_0x3bc5d8(0x112)](
          (_0x5a7a92) =>
            _0x5a7a92["field"] !== $(this)["attr"](_0x3bc5d8(0x186))
        )),
        all_data[_0x3bc5d8(0x13d)]({
          field: $(this)[_0x3bc5d8(0x1ac)](_0x3bc5d8(0x186)),
          value: $(this)[_0x3bc5d8(0x10e)](),
        }),
        all_data["forEach"](function (_0x4eb8c1) {
          const _0x2a42dc = _0x3bc5d8;
          $(_0x2a42dc(0x156) + _0x4eb8c1[_0x2a42dc(0x119)] + "\x22]")[
            "fadeIn"
          ](),
            $(_0x2a42dc(0x156) + _0x4eb8c1[_0x2a42dc(0x119)] + "\x22]")[
              _0x2a42dc(0x20b)
            ](_0x4eb8c1[_0x2a42dc(0x1e1)]);
        });
    }),
  $(_0x4eb715(0x15d))
    [_0x4eb715(0x130)]("select")
    ["on"]("change", function () {
      const _0x28d7b5 = _0x4eb715;
      $(this)["val"]() !== "" &&
        resetInputErrorMessage($(this)[_0x28d7b5(0x1ac)](_0x28d7b5(0x186)));
      var _0x3c4e39 = $(this)[_0x28d7b5(0x185)](_0x28d7b5(0x164));
      (all_data = all_data[_0x28d7b5(0x112)](
        (_0x38627b) =>
          _0x38627b[_0x28d7b5(0x119)] !== $(this)[_0x28d7b5(0x1ac)]("name")
      )),
        all_data["push"]({
          field: $(this)["attr"](_0x28d7b5(0x186)),
          value: _0x3c4e39
            ? $(this)[_0x28d7b5(0x130)](_0x28d7b5(0x1ab))[_0x28d7b5(0x20b)]()
            : $(this)["val"](),
        }),
        all_data[_0x28d7b5(0x177)](function (_0xfef234) {
          const _0x56978d = _0x28d7b5;
          $(_0x56978d(0x156) + _0xfef234["field"] + "\x22]")[
            _0x56978d(0x1c5)
          ](),
            $(_0x56978d(0x156) + _0xfef234[_0x56978d(0x119)] + "\x22]")["text"](
              _0xfef234[_0x56978d(0x1e1)]
            );
        });
    }),
  updateStep(),
  triggerInputAllData(),
  $(_0x4eb715(0x16f))[_0x4eb715(0x1e2)](function () {
    const _0x22eebb = _0x4eb715,
      _0x49ab2d = $(this)[_0x22eebb(0x130)](_0x22eebb(0x173)),
      _0x3ed629 = [];
    console[_0x22eebb(0x148)](_0x3ed629),
      _0x49ab2d[_0x22eebb(0x1e2)](function () {
        const _0x193c90 = _0x22eebb;
        _0x3ed629["push"]($(this)[_0x193c90(0x20b)]()[_0x193c90(0x1cd)]());
      });
    const _0x1dd753 = $(this)[_0x22eebb(0x11c)](_0x22eebb(0x1e3));
    $[_0x22eebb(0x1e2)](_0x3ed629, function (_0xe1034d, _0x480c39) {
      const _0x12f1d3 = _0x22eebb,
        _0x1d9f22 = $(_0x12f1d3(0x1fd))
          [_0x12f1d3(0x10e)](_0x480c39)
          [_0x12f1d3(0x20b)](_0x480c39);
      _0x1dd753[_0x12f1d3(0x165)](_0x1d9f22);
    });
  }),
  $(_0x4eb715(0x1cf))["on"](_0x4eb715(0x1a2), function () {
    const _0x42be8a = _0x4eb715;
    let _0x604ae = $(this)[_0x42be8a(0x185)](_0x42be8a(0x17b));
    var _0x48ac84 = $(_0x42be8a(0x153) + _0x604ae + "\x22]")
        ["eq"](0x0)
        [_0x42be8a(0x203)](!![]),
      _0x2670c7 = $(_0x42be8a(0x1c0) + _0x604ae + "\x22]")
        ["eq"](0x0)
        ["clone"](!![]);
    _0x48ac84["find"](_0x42be8a(0x13e))[_0x42be8a(0x1e2)](function () {
      const _0x38ff50 = _0x42be8a;
      $(this)[_0x38ff50(0x10e)](""),
        $(this)[_0x38ff50(0x1ac)](
          _0x38ff50(0x186),
          this[_0x38ff50(0x186)] +
            "-" +
            (parseInt(
              $("[data-clone=\x22" + _0x604ae + "\x22]")
                ["last"]()
                [_0x38ff50(0x13c)]()
            ) +
              0x1)
        ),
        $(this)[_0x38ff50(0x1ac)](
          _0x38ff50(0x1c3),
          $(this)[_0x38ff50(0x185)](_0x38ff50(0x186)) +
            "-" +
            (parseInt(
              $(_0x38ff50(0x153) + _0x604ae + "\x22]")
                ["last"]()
                [_0x38ff50(0x13c)]()
            ) +
              0x1)
        );
    }),
      _0x2670c7["find"](_0x42be8a(0x1dc))[_0x42be8a(0x1e2)](function () {
        const _0x6d7689 = _0x42be8a;
        $(this)["attr"](
          "data-input-field",
          $(this)[_0x6d7689(0x185)](_0x6d7689(0x18e)) +
            "-" +
            (parseInt(
              $(_0x6d7689(0x153) + _0x604ae + "\x22]")
                [_0x6d7689(0x142)]()
                [_0x6d7689(0x13c)]()
            ) +
              0x1)
        );
      }),
      $(_0x42be8a(0x154) + _0x604ae + "\x22]")[_0x42be8a(0x165)](_0x48ac84),
      $(_0x42be8a(0x10c) + _0x604ae + "\x22]")[_0x42be8a(0x165)](_0x2670c7),
      $("[data-index=\x22" + _0x604ae + "\x22]")[_0x42be8a(0x1e2)](function () {
        const _0x1fe768 = _0x42be8a;
        $(this)[_0x1fe768(0x20b)](
          $(this)
            ["parents"](_0x1fe768(0x153) + _0x604ae + "\x22]")
            ["index"]() + 0x1
        );
      }),
      $(_0x42be8a(0x1a7) + _0x604ae + "\x22]")[_0x42be8a(0x1e2)](function () {
        const _0x5b0b0f = _0x42be8a;
        $(this)[_0x5b0b0f(0x20b)](
          $(this)
            [_0x5b0b0f(0x1f0)](_0x5b0b0f(0x1c0) + _0x604ae + "\x22]")
            ["index"]() + 0x1
        );
      }),
      validation();
  }),
  scrollTop();
