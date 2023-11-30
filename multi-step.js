//30th Nov 2023
//Feature update
//1. Textarea line break on enter

const _0x830836 = _0x2460;
(function (_0x5d277b, _0x468d5b) {
  const _0x302613 = _0x2460,
    _0x343661 = _0x5d277b();
  while (!![]) {
    try {
      const _0x2fca94 =
        (parseInt(_0x302613(0x153)) / 0x1) *
          (-parseInt(_0x302613(0x10d)) / 0x2) +
        -parseInt(_0x302613(0x117)) / 0x3 +
        -parseInt(_0x302613(0x11f)) / 0x4 +
        parseInt(_0x302613(0x1b1)) / 0x5 +
        (parseInt(_0x302613(0x15f)) / 0x6) * (parseInt(_0x302613(0xf1)) / 0x7) +
        (-parseInt(_0x302613(0xe5)) / 0x8) *
          (-parseInt(_0x302613(0x1b9)) / 0x9) +
        (parseInt(_0x302613(0x12c)) / 0xa) * (parseInt(_0x302613(0x120)) / 0xb);
      if (_0x2fca94 === _0x468d5b) break;
      else _0x343661["push"](_0x343661["shift"]());
    } catch (_0x18677d) {
      _0x343661["push"](_0x343661["shift"]());
    }
  }
})(_0x2c98, 0x2ee91);
let x = 0x0,
  curStep = 0x0,
  steps = $(_0x830836(0x109)),
  progressbarClone = $(_0x830836(0xef))[_0x830836(0x155)](),
  progressbar,
  countCard = !![],
  weightedSelection = $(_0x830836(0x143))[_0x830836(0xc7)](_0x830836(0x105)),
  weightedSelectionRange = $(_0x830836(0x1a4))[_0x830836(0xc7)](
    "weighted-selection-range",
  ),
  selectMultiple = $(_0x830836(0x198))[_0x830836(0xc7)](_0x830836(0x151)),
  customError = $(_0x830836(0xbb))[_0x830836(0xc7)](_0x830836(0xed)),
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
  reinitIX = $(_0x830836(0x1b7))[_0x830836(0xc7)]("reinit"),
  textareaLength = 0x0,
  textInputLength = 0x0,
  emailInputLength = 0x0,
  selectInputLength = 0x0,
  checkboxInputLength = 0x0,
  filledInput = [],
  savedFilledInput = [],
  memory = $("[data-memory]")[_0x830836(0xc7)](_0x830836(0x106)),
  quiz = $("[data-quiz]")[_0x830836(0xc7)](_0x830836(0x18d)),
  progress = 0x0;
const urlFormly = new URL(window["location"][_0x830836(0x1a8)]);
let _params = $(_0x830836(0xb2))[_0x830836(0xc7)](_0x830836(0x14a)),
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
  logicExtra = $("[data-form=\x22multistep\x22]")[_0x830836(0xc7)](
    _0x830836(0x136),
  ),
  oldSubmitText = $(_0x830836(0x17a))["val"](),
  oldResetText = $(_0x830836(0xf4))[_0x830836(0xd3)](),
  formReset = $(_0x830836(0x17b))["data"]("reset"),
  successCard = "",
  redirectTo = "",
  totalSteps = 0x0,
  checkCount = 0x0,
  resetDelay = $(_0x830836(0x172))[_0x830836(0xc7)](_0x830836(0x1b2))
    ? $(_0x830836(0x172))[_0x830836(0xc7)]("reset-delay")
    : 0x7d0,
  redirectDelay = $("[data-redirect-delay]")[_0x830836(0xc7)](_0x830836(0xd6))
    ? $(_0x830836(0x1bc))[_0x830836(0xc7)](_0x830836(0xd6))
    : 0x7d0,
  newTab = !![],
  unfilledArr = [],
  phoneFormat = $(_0x830836(0x17b))[_0x830836(0xc7)](_0x830836(0x1b6)),
  scrollToTop = $(_0x830836(0x17b))[_0x830836(0xc7)](_0x830836(0xac)),
  conditionalResult =
    $(_0x830836(0x19d))[_0x830836(0xc7)]("conditional-result") ===
    _0x830836(0xb0),
  scrollTopOffset = parseInt(
    $(_0x830836(0x17b))[_0x830836(0xc7)](_0x830836(0x16d)),
  ),
  notRobot = !![],
  all_data = [];
const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
function _0x2460(_0x41581b, _0x5c1b3a) {
  const _0x2c9863 = _0x2c98();
  return (
    (_0x2460 = function (_0x246080, _0x2d3cdc) {
      _0x246080 = _0x246080 - 0xa5;
      let _0x559d25 = _0x2c9863[_0x246080];
      return _0x559d25;
    }),
    _0x2460(_0x41581b, _0x5c1b3a)
  );
}
savedFilledInput = JSON[_0x830836(0xcf)](
  localStorage[_0x830836(0xc8)](_0x830836(0xe3)),
);
var ogCloneArr = [];
$(_0x830836(0x16c))["each"](function () {
  const _0x1db47a = _0x830836;
  ogCloneArr["push"]({
    name: $(this)[_0x1db47a(0xc7)](_0x1db47a(0x155)),
    element: $(this)["clone"](!![]),
    display: $(
      "[data-display=\x22" + $(this)[_0x1db47a(0xc7)]("clone") + "\x22]",
    )
      ["eq"](0x0)
      ["clone"](!![]),
  });
});
function _0x2c98() {
  const _0x2689b4 = [
    ":input[type=\x22url\x22]",
    "attr",
    "top",
    "0.4",
    "[data-selection]",
    "21190oWFeTc",
    "reset-delay",
    "[data-clone-wrapper]",
    ":checked",
    "data-input-field",
    "phone-validation",
    "[data-reinit]",
    "[data-answer=\x22",
    "63XjKLFG",
    "[data-skip-to]",
    "[data-show-if]",
    "[data-redirect-delay]",
    "init",
    "remove",
    "[data-form=\x22custom-progress-indicator\x22]",
    "[data-go-to]",
    "[data-radio-skip]",
    "[data-form=\x22next-btn\x22][type=\x22submit\x22]",
    "skipTo",
    "[data-form=\x22submit\x22]:visible",
    "scroll-top",
    "w--redirected-checked",
    "https://webflow.com/api/v1/form/",
    "[data-clone-input-wrapper=\x22",
    "AND",
    "[data-display]",
    "[data-query-param]",
    "edit-step",
    "hide",
    "clickable",
    ".w-radio-input",
    "test",
    "filter",
    "last",
    ":input[type=\x22tel\x22][required]",
    "[data-custom-error-message]",
    "textarea[required]:visible",
    "ms-field",
    "clicked",
    "each",
    "split",
    "file",
    "keydown",
    "div.g-recaptcha",
    "required",
    "remove-upload",
    "[data-clone-input]",
    "data",
    "getItem",
    "answer",
    "[data-selection-weight]",
    "[data-success-card=\x22",
    "input[type=\x22submit\x22]",
    ":focus",
    ":input[type=\x22radio\x22]",
    "parse",
    "animate",
    "[data-add-new]",
    "not",
    "text",
    "[data-form=\x22remove-clone\x22]",
    "[data-selection=\x22",
    "redirect-delay",
    "ajaxComplete",
    "forEach",
    "val",
    "children",
    "[data-clone=\x22",
    "match",
    "select[required]:visible",
    "[data-form=\x22step\x22]:not([data-card=\x22true\x22])",
    "[type=\x22checkbox\x22]",
    ":input[type=\x22number\x22][required]",
    ":input[required]",
    "\x22]:checked",
    "filledInput",
    ":input[type=\x22url\x22][required]",
    "378616owpTXN",
    "option[value=\x22$(this).val()\x22]",
    "</div>",
    "input[type=\x22checkbox\x22]:visible",
    "[data-clone-input=\x22",
    "[type=\x22submit\x22]",
    "data-show-if",
    "form[data-form=\x22multistep\x22]\x20:input",
    "custom-error-message",
    "preventDefault",
    "[data-form=\x22progress-indicator\x22]",
    "offset",
    "7ScIPvI",
    "select[name=\x22",
    "data-go-to",
    "[data-btn=\x22reset\x22]",
    "prop",
    "[data-form=\x22next-btn\x22]",
    "textarea[name=\x22",
    ":input[type=\x27radio\x27]:checked",
    "append",
    "wait",
    "[data-display-input-wrapper=\x22",
    "[data-form=\x22remove-input-clone\x22]",
    "disabled",
    "parents",
    "[data-form=\x22progress\x22]",
    "redirect",
    "<br>Data\x20Answer\x20=\x20",
    "min-character",
    "click",
    "parent",
    "weighted-selection",
    "memory",
    "slice",
    ":input[type=\x22file\x22][required]",
    "[data-form=\x22step\x22]",
    "keyCode",
    "\x22][value=\x22",
    "_blank",
    "1754dBseWb",
    "[data-input-field]",
    "[data-clone-wrapper=\x22",
    "key",
    "go-to",
    "[data-radio-delay]",
    "addClass",
    "status",
    "input-field",
    "[data-index=\x22",
    "1148559pTfCuu",
    "\x22]\x20input",
    ":input",
    "[data-btn=\x22edit\x22]",
    "field",
    "card",
    "[data-form=\x22step\x22][data-card]",
    "submit",
    "1200884ObYEPr",
    "22oSCniC",
    "css",
    "[data-display=\x22",
    "span",
    "[data-form=\x22back-btn\x22]",
    ".w-form-formradioinput",
    "selected",
    "checked",
    "input[type=\x22radio\x22]",
    "some",
    "siblings",
    "auto",
    "4147290GOtkvM",
    "value",
    "[data-clickable-all]",
    ":input[type=\x22text\x22]",
    "type",
    "novalidate",
    "[data-range]:contains(",
    "url",
    "[data-form-ms=\x22submit-btn\x22]",
    "trigger",
    "logic-extra",
    "count-card",
    "select[required]",
    "data-skip-to",
    "[data-cms-select=cms]",
    "[data-form=\x22next-btn\x22][data-submit-show]",
    ":input[type=\x22date\x22][required]",
    "[data-display-index=\x22",
    "metaKey",
    "selection",
    ":input[type=\x22checkbox\x22][required]:checked",
    "length",
    "change",
    "[data-weighted-selection]",
    "closest",
    "input[name=\x22",
    "[data-enter]",
    "radio-skip",
    ":input[type=\x22checkbox\x22]:checked",
    "[data-display-wrapper=\x22",
    "query-param",
    "add-new",
    "radio",
    "data-radio-skip",
    "Please\x20wait...",
    ":input[type=\x22date\x22]",
    "select",
    "select-multiple",
    "[data-display-input]",
    "379oukcmT",
    ":input[type=\x22checkbox\x22]",
    "clone",
    "input",
    "[data-text=\x22total-steps\x22]",
    ":input[type=\x22email\x22][required]",
    "[data-btn=\x22check\x22]",
    "[data-text=\x22current-step\x22]",
    "reset",
    "[data-selection=\x22other\x22]",
    "phone-autoformat",
    "skip-to",
    "255702cCbwrR",
    "removeItem",
    "keypress",
    "stopPropagation",
    "every",
    ":input[type=\x22tel\x22]",
    "index",
    "none",
    "includes",
    ".w-form-done",
    "current",
    "removeClass",
    "[data-input-index=\x22",
    "[data-clone]",
    "scroll-top-offset",
    ":input[type=\x22text\x22][required]",
    "submit-show",
    "textarea",
    ".w-checkbox-input",
    "[data-reset-delay]",
    "[type=\x22radio\x22]",
    "checkbox",
    "fadeIn",
    "input:checkbox",
    "push",
    "[data-form=\x22submit-btn\x22]:visible",
    "[data-answer]",
    "[data-form=\x22submit-btn\x22]",
    "[data-form=\x22multistep\x22]",
    "backTo",
    "name",
    "Webflow",
    "open",
    "log",
    ":input[type=\x22checkbox\x22][required]",
    "inputName",
    "html,\x20body",
    "[data-success-card]",
    "slow",
    "active-answer-card",
    "success",
    "data-name",
    "[data-display-input=\x22",
    "[data-checkbox]",
    "clickable-all",
    "radio-delay",
    "quiz",
    "require",
    "join",
    "[data-text=\x22error-message\x22]",
    "new-tab",
    "<option>",
    "getResponse",
    ".active-answer-card",
    "relationship-",
    "redirect-form-hehexd",
    "[data-answer][data-radio-skip]:visible",
    "[data-select-multiple]",
    "show",
    "[data-radio-skip]:visible",
    "[data-selected]:checked",
    "textarea[autofocus]",
    "[data-conditional-result]",
    "[data-clickable]",
    "clone-input",
    "[data-count-card]",
    ":input[type=\x22email\x22]",
    "step",
    "setItem",
    "[data-weighted-selection-range]",
    "[data-input-field=\x22",
    "findIndex",
    "body",
    "href",
    "find",
    ":input[type=\x22file\x22]",
    "add-new-input",
  ];
  _0x2c98 = function () {
    return _0x2689b4;
  };
  return _0x2c98();
}
$("div.g-recaptcha")[_0x830836(0x141)] > 0x0 && (notRobot = ![]);
function recaptcha(_0x3654d8) {
  notRobot = !![];
}
$("[data-count-card]")[_0x830836(0x141)] > 0x0 &&
  (countCard = $(_0x830836(0x1a0))[_0x830836(0xc7)](_0x830836(0x137)));
$(_0x830836(0x190))[_0x830836(0xb4)](),
  $(progressbarClone)[_0x830836(0x16a)](_0x830836(0x169)),
  $(_0x830836(0xff))[_0x830836(0xda)]()[_0x830836(0xa5)](),
  $(_0x830836(0x17a))[_0x830836(0xb4)](),
  $(_0x830836(0x134))[_0x830836(0xb4)](),
  steps[_0x830836(0xbf)](function () {
    const _0x2da86c = _0x830836;
    $(_0x2da86c(0xff))[_0x2da86c(0xf9)](
      progressbarClone[_0x2da86c(0x155)](!![], !![]),
    );
  }),
  $(_0x830836(0x10e))[_0x830836(0xb4)]();
countCard
  ? ((curStep = curStep + 0x1),
    (totalSteps = steps["length"]),
    $(_0x830836(0x157))[_0x830836(0xd3)](totalSteps))
  : ($(steps[x])[_0x830836(0xc7)](_0x830836(0x11c))
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    (totalSteps = $(_0x830836(0xde))["length"]),
    $(_0x830836(0x157))[_0x830836(0xd3)](totalSteps),
    $(_0x830836(0x11d))[_0x830836(0xbf)](function () {
      const _0xd5fcb4 = _0x830836;
      $($(_0xd5fcb4(0xef))[$(this)[_0xd5fcb4(0x165)]()])["hide"]();
    }));
(progressbar = $(_0x830836(0xff))[_0x830836(0xda)]()),
  $(_0x830836(0xef))["on"](_0x830836(0x103), clickableIndicator),
  $(_0x830836(0x15a))[_0x830836(0xd3)](curStep),
  steps[_0x830836(0xb4)](),
  $(_0x830836(0x184))[_0x830836(0xb4)](),
  $(_0x830836(0xa9))[_0x830836(0xbf)](function () {
    const _0xa457be = _0x830836;
    $(this)["attr"](_0xa457be(0x130), "button");
  });
function getParams() {
  const _0x2a7429 = _0x830836;
  urlFormly["searchParams"][_0x2a7429(0xd8)](function (_0x196238, _0x4c4c16) {
    searchQ["push"]({ val: _0x196238, key: _0x4c4c16 });
  });
}
function getSafe(_0x4b7a19, _0x5e135b) {
  try {
    return _0x4b7a19();
  } catch (_0x2481f5) {
    return _0x5e135b;
  }
}
function phoneAutoFormat(_0x284548) {
  var _0x1fec56 = "";
  return function (_0x2cb6eb) {
    const _0x39a915 = _0x2460;
    var _0x9459b5 = "",
      _0x46c7b0 = _0x2cb6eb["replace"](/\D/g, ""),
      _0x10cd95 = 0x0,
      _0x23e2d9 = 0x0;
    while (
      _0x10cd95 < _0x46c7b0[_0x39a915(0x141)] &&
      _0x23e2d9 < _0x284548["length"]
    ) {
      _0x284548[_0x23e2d9] === "x"
        ? ((_0x9459b5 += _0x46c7b0[_0x10cd95]), _0x10cd95++)
        : (_0x9459b5 += _0x284548[_0x23e2d9]),
        _0x23e2d9++;
    }
    if (_0x2cb6eb[_0x39a915(0x141)] < _0x1fec56[_0x39a915(0x141)]) {
      var _0x1081c1 = _0x284548[_0x39a915(0x107)](_0x23e2d9);
      _0x9459b5 += _0x1081c1["replace"](/x/g, "");
    }
    return (_0x1fec56 = _0x9459b5), _0x9459b5;
  };
}
function validateURL(_0x2094e0) {
  const _0x242245 = _0x830836;
  return urlPattern[_0x242245(0xb7)](_0x2094e0) ? !![] : ![];
}
quiz &&
  steps[_0x830836(0xbf)](function () {
    const _0x2bd0fb = _0x830836;
    $(this)[_0x2bd0fb(0xda)]()["attr"](_0x2bd0fb(0x14d), !![]),
      $(this)[_0x2bd0fb(0xda)]()[_0x2bd0fb(0x1ad)]("data-radio-delay", 0xfa);
  });
function disableBtn(_0x5a3fad) {
  const _0x299b16 = _0x830836;
  (fill = ![]),
    !customError &&
      ($(_0x299b16(0xf6))[_0x299b16(0x121)]({
        opacity: _0x299b16(0x1af),
        "pointer-events": _0x299b16(0x166),
      }),
      $(_0x299b16(0xf6))[_0x299b16(0x113)](_0x299b16(0xfd)),
      $("[data-form=\x22submit-btn\x22]")["css"]({
        opacity: _0x299b16(0x1af),
        "pointer-events": _0x299b16(0x166),
      }),
      $(_0x299b16(0x17a))["addClass"](_0x299b16(0xfd)),
      $("[data-form-ms=\x22submit-btn\x22]")[_0x299b16(0x121)]({
        opacity: _0x299b16(0x1af),
        "pointer-events": _0x299b16(0x166),
      }),
      $(_0x299b16(0x134))[_0x299b16(0x113)](_0x299b16(0xfd)));
}
function enableBtn() {
  const _0xa74d9a = _0x830836;
  (fill = !![]),
    $(_0xa74d9a(0xf6))[_0xa74d9a(0x121)]({
      "pointer-events": _0xa74d9a(0x12b),
      opacity: "1",
    }),
    $("[data-form=\x22next-btn\x22]")["removeClass"](_0xa74d9a(0xfd)),
    $(_0xa74d9a(0x17a))["css"]({
      "pointer-events": _0xa74d9a(0x12b),
      opacity: "1",
    }),
    $(_0xa74d9a(0x17a))[_0xa74d9a(0x16a)](_0xa74d9a(0xfd)),
    $(_0xa74d9a(0x134))[_0xa74d9a(0x121)]({
      "pointer-events": "auto",
      opacity: "1",
    }),
    $("[data-form-ms=\x22submit-btn\x22]")[_0xa74d9a(0x16a)](_0xa74d9a(0xfd));
}
function saveFilledInput() {
  const _0x18c7c1 = _0x830836;
  $(_0x18c7c1(0xec))
    ["not"](_0x18c7c1(0xea))
    ["each"](function () {
      const _0x2eefca = _0x18c7c1;
      $(this)[_0x2eefca(0x1ad)]("type") === _0x2eefca(0x174) ||
      $(this)[_0x2eefca(0x1ad)](_0x2eefca(0x130)) === _0x2eefca(0x14c)
        ? $(this)[_0x2eefca(0xf5)](_0x2eefca(0x127)) &&
          (filledInput[_0x2eefca(0x129)](
            (_0x389423) =>
              _0x389423[_0x2eefca(0x182)] ===
              $(this)[_0x2eefca(0x1ad)](_0x2eefca(0x17d)),
          )
            ? ((filledInput = filledInput["filter"](
                (_0x118265) =>
                  _0x118265[_0x2eefca(0x182)] !==
                  $(this)["attr"](_0x2eefca(0x17d)),
              )),
              $(this)[_0x2eefca(0xd9)]() !== "" &&
                filledInput[_0x2eefca(0x177)]({
                  inputName: $(this)[_0x2eefca(0x1ad)](_0x2eefca(0x17d)),
                  value: $(this)[_0x2eefca(0xd9)](),
                }))
            : $(this)[_0x2eefca(0xd9)]() !== "" &&
              filledInput[_0x2eefca(0x177)]({
                inputName: $(this)[_0x2eefca(0x1ad)]("name"),
                value: $(this)[_0x2eefca(0xd9)](),
              }))
        : filledInput[_0x2eefca(0x129)](
              (_0x535d1d) =>
                _0x535d1d[_0x2eefca(0x182)] ===
                $(this)[_0x2eefca(0x1ad)](_0x2eefca(0x17d)),
            )
          ? ((filledInput = filledInput["filter"](
              (_0x51c95a) =>
                _0x51c95a[_0x2eefca(0x182)] !==
                $(this)[_0x2eefca(0x1ad)](_0x2eefca(0x17d)),
            )),
            $(this)[_0x2eefca(0xd9)]() !== "" &&
              filledInput[_0x2eefca(0x177)]({
                inputName: $(this)["attr"](_0x2eefca(0x17d)),
                value: $(this)[_0x2eefca(0xd9)](),
              }))
          : $(this)["val"]() !== "" &&
            filledInput["push"]({
              inputName: $(this)[_0x2eefca(0x1ad)](_0x2eefca(0x17d)),
              value: $(this)[_0x2eefca(0xd9)](),
            });
    }),
    localStorage["removeItem"](_0x18c7c1(0xe3)),
    localStorage[_0x18c7c1(0x1a3)](
      _0x18c7c1(0xe3),
      JSON["stringify"](filledInput),
    );
}
function scrollTop() {
  const _0x1df1ad = _0x830836;
  scrollToTop &&
    $(_0x1df1ad(0x183))[_0x1df1ad(0xd0)](
      {
        scrollTop:
          $(_0x1df1ad(0x17b))[_0x1df1ad(0xf0)]()[_0x1df1ad(0x1ae)] -
          scrollTopOffset,
      },
      0x3e8,
    );
}
function updateStep() {
  const _0x3fc5df = _0x830836;
  scrollTop(), (skip = ![]), $(_0x3fc5df(0xa6))["removeClass"]("disabled");
  $(_0x3fc5df(0x19e))[_0x3fc5df(0xc7)](_0x3fc5df(0xb5)) &&
    (steps[_0x3fc5df(0x1a9)](_0x3fc5df(0xe1))["each"](function () {
      const _0x256385 = _0x3fc5df;
      $(
        $("[data-form=\x22custom-progress-indicator\x22]")[
          $(this)["parents"](_0x256385(0x109))["index"]()
        ],
      ),
        $(this)[_0x256385(0xd9)]() === "" && emptyInput++;
    }),
    emptyInput > 0x0
      ? $(_0x3fc5df(0xcc))["addClass"](_0x3fc5df(0xfd))
      : $(_0x3fc5df(0xcc))[_0x3fc5df(0x16a)](_0x3fc5df(0xfd)));
  $(_0x3fc5df(0xa6))[_0x3fc5df(0x16a)](_0x3fc5df(0x169)),
    $("[data-form=\x22custom-progress-indicator\x22]")["addClass"](
      _0x3fc5df(0xfd),
    ),
    $($("[data-form=\x22custom-progress-indicator\x22]")[x])[_0x3fc5df(0x113)](
      _0x3fc5df(0x169),
    ),
    (selection = selections[_0x3fc5df(0xb8)](
      (_0x16ae3e) => _0x16ae3e["step"] === x - 0x1,
    ));
  next &&
    (x = getSafe(() => selection[0x0][_0x3fc5df(0xaa)])
      ? parseInt(getSafe(() => selection[0x0]["skipTo"]))
      : x);
  $(_0x3fc5df(0x179))["hide"](), steps["hide"]();
  reinitIX === !![] && window[_0x3fc5df(0x17e)]["destroy"]();
  $(progressbar)[_0x3fc5df(0x16a)]("current");
  for (i = 0x0; i <= x; i++) {
    countCard
      ? $(progressbar[i])[_0x3fc5df(0x113)]("current")
      : !$(steps[i])[_0x3fc5df(0xc7)](_0x3fc5df(0x11c)) &&
        $(progressbar[i])[_0x3fc5df(0x113)]("current");
  }
  reinitIX === !![]
    ? (window["Webflow"] &&
        window["Webflow"][_0x3fc5df(0x18e)]("ix2")[_0x3fc5df(0x1bd)](),
      document["dispatchEvent"](new Event("readystatechange")),
      $(steps[x])[_0x3fc5df(0x199)]())
    : $(steps[x])["fadeIn"](_0x3fc5df(0x185));
  $(_0x3fc5df(0x194))["removeClass"](_0x3fc5df(0x186));
  x === 0x0 &&
    !$(steps[x])[_0x3fc5df(0xc7)](_0x3fc5df(0x11c)) &&
    ($(steps[x])[_0x3fc5df(0x1a9)](_0x3fc5df(0x179))[_0x3fc5df(0x199)](),
    $(steps[x])
      [_0x3fc5df(0x1a9)](_0x3fc5df(0x179))
      ["addClass"](_0x3fc5df(0x186)));
  selection[_0x3fc5df(0x141)] > 0x0
    ? ($(steps[x])
        [_0x3fc5df(0x1a9)](
          _0x3fc5df(0x1b8) + selection[0x0][_0x3fc5df(0x126)] + "\x22]",
        )
        [_0x3fc5df(0x199)](),
      $(steps[x])
        [_0x3fc5df(0x1a9)](
          _0x3fc5df(0x1b8) + selection[0x0]["selected"] + "\x22]",
        )
        [_0x3fc5df(0x113)](_0x3fc5df(0x186)))
    : ($(steps[x])
        [_0x3fc5df(0x1a9)](_0x3fc5df(0x1b8) + answer + "\x22]")
        [_0x3fc5df(0x199)](),
      $(steps[x])
        [_0x3fc5df(0x1a9)](_0x3fc5df(0x1b8) + answer + "\x22]")
        [_0x3fc5df(0x113)](_0x3fc5df(0x186)));
  if (x === 0x0)
    $("[data-form=\x22back-btn\x22]")[_0x3fc5df(0xb4)](),
      $(_0x3fc5df(0xf6))["show"](),
      $(_0x3fc5df(0x17a))[_0x3fc5df(0xb4)]();
  else {
    if (
      x === steps[_0x3fc5df(0x141)] - 0x1 ||
      $(steps[x])[_0x3fc5df(0x1a9)](_0x3fc5df(0xab))[_0x3fc5df(0x141)] > 0x0
    ) {
      $(_0x3fc5df(0xf6))[_0x3fc5df(0xb4)]();
      if (
        $(steps[x])
          [_0x3fc5df(0x1a9)](_0x3fc5df(0x13b))
          [_0x3fc5df(0xc7)](_0x3fc5df(0x16f))
      )
        $(steps[x])[_0x3fc5df(0x1a9)](_0x3fc5df(0x13b))[_0x3fc5df(0x199)]();
      else
        $("[data-form=\x22next-btn\x22]")[_0x3fc5df(0xc7)]("submit-show") &&
          $(_0x3fc5df(0xf6))[_0x3fc5df(0x199)]();
      $("[data-form=\x22submit-btn\x22]")[_0x3fc5df(0x199)](),
        $("[data-form-ms=\x22submit-btn\x22]")[_0x3fc5df(0x199)](),
        $(_0x3fc5df(0x124))[_0x3fc5df(0x199)]();
    } else
      $("[data-form=\x22next-btn\x22]")[_0x3fc5df(0x199)](),
        $(_0x3fc5df(0x124))[_0x3fc5df(0x199)](),
        $("[data-form=\x22submit-btn\x22]")["hide"](),
        $(_0x3fc5df(0x134))[_0x3fc5df(0xb4)]();
  }
  $($(steps[x])[_0x3fc5df(0x1a9)]("input[autofocus]")[0x0])["focus"](),
    $($(steps[x])["find"](_0x3fc5df(0x19c))[0x0])["focus"](),
    validation();
  for (idx = 0x0; idx <= x; idx++) {
    $($(_0x3fc5df(0xa6))[idx])[_0x3fc5df(0x16a)]("disabled");
  }
}
function validateEmail(_0x1931ca, _0x374db9, _0x3db315) {
  const _0x2236c1 = _0x830836;
  let _0x3f3547 = _0x1931ca[_0x2236c1(0x167)]("@")
    ? _0x1931ca[_0x2236c1(0xc0)]("@")[0x1][_0x2236c1(0xc0)](".")[0x0]
    : [];
  dom = [];
  _0x374db9 !== undefined &&
    _0x374db9[_0x2236c1(0xc0)](",")[_0x2236c1(0xd8)](function (_0x1a5064) {
      const _0x201942 = _0x2236c1;
      _0x1a5064[_0x201942(0x167)](_0x3f3547) && dom["push"](_0x3f3547);
    });
  dom[_0x2236c1(0x141)] > 0x0 ? (domainAllowed = ![]) : (domainAllowed = !![]);
  var _0x209bd5 = /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,20})?$/;
  console[_0x2236c1(0x180)](_0x209bd5[_0x2236c1(0xb7)](_0x1931ca)),
    !_0x209bd5[_0x2236c1(0xb7)](_0x1931ca) || !domainAllowed
      ? ((emailFilled = ![]),
        unfilledArr[_0x2236c1(0x177)]({ input: _0x3db315 }))
      : (emailFilled = !![]);
}
function phoneValidation(_0x2742a6, _0x307f11, _0x32758c) {
  const _0x1b2b29 = _0x830836;
  if (phoneFormat)
    return _0x2742a6[_0x1b2b29(0xdc)](
      new RegExp(phoneFormat["slice"](0x1, -0x1)),
    ) && _0x307f11 >= _0x32758c
      ? !![]
      : ![];
  else {
    if (_0x307f11 >= _0x32758c) return !![];
  }
}
function validation() {
  const _0x2798de = _0x830836;
  $(steps[x])[_0x2798de(0xc7)](_0x2798de(0x11c)) && enableBtn();
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
    (textareaLength = $(steps[x])["find"](_0x2798de(0xbc))["length"]),
    (textInputLength = $(steps[x])[_0x2798de(0x1a9)](
      "input[type=\x22text\x22][required]:visible",
    )[_0x2798de(0x141)]),
    (selectInputLength = $(steps[x])["find"](_0x2798de(0xdd))[
      _0x2798de(0x141)
    ]),
    (emailInputLength = $(steps[x])[_0x2798de(0x1a9)](
      "input[type=\x22email\x22]:visible",
    )[_0x2798de(0x141)]),
    (checkboxInputLength = $(steps[x])[_0x2798de(0x1a9)](_0x2798de(0xe8))[
      _0x2798de(0x141)
    ]);
  textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0
    ? disableBtn()
    : enableBtn();
  checkCount = $(steps[x])[_0x2798de(0xc7)](_0x2798de(0x174))
    ? $(steps[x])[_0x2798de(0xc7)](_0x2798de(0x174))
    : $(steps[x])["find"](_0x2798de(0x18a))[_0x2798de(0x141)] > 0x0
      ? $(steps[x])
          [_0x2798de(0x1a9)](_0x2798de(0x18a))
          [_0x2798de(0xc7)](_0x2798de(0x174))
      : 0x0;
  if (!logicExtra)
    $(steps[x])[_0x2798de(0x1a9)](_0x2798de(0x119))["is"](_0x2798de(0xdf)) &&
      (checkCount === "*" ||
      checkCount > $(steps[x])[_0x2798de(0x1a9)](_0x2798de(0x154))["length"]
        ? $(steps[x])
            [_0x2798de(0x1a9)](_0x2798de(0x154))
            ["each"](function () {
              const _0x5e5dde = _0x2798de;
              $(this)["is"](_0x5e5dde(0x1b4))
                ? $(steps[x])[_0x5e5dde(0x1a9)](_0x5e5dde(0x181))[
                    _0x5e5dde(0x141)
                  ] < 0x1 &&
                  ((checkboxFilled = !![]),
                  resetInputErrorMessage($(this)["attr"](_0x5e5dde(0x17d))))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0x5e5dde(0x177)]({
                    input: $(this)["attr"](_0x5e5dde(0x17d)),
                  }));
            })
        : $(steps[x])[_0x2798de(0x1a9)](_0x2798de(0x148))[_0x2798de(0x141)] >=
            checkCount
          ? $(steps[x])[_0x2798de(0x1a9)](_0x2798de(0x181))[_0x2798de(0x141)] >
            0x0
            ? $(steps[x])
                ["find"](_0x2798de(0x181))
                [_0x2798de(0xbf)](function () {
                  const _0x3bee5e = _0x2798de;
                  !$(this)["is"](_0x3bee5e(0x1b4))
                    ? ((checkboxFilled = ![]),
                      unfilledArr[_0x3bee5e(0x177)]({
                        input: $(this)[_0x3bee5e(0x1ad)]("name"),
                      }))
                    : ((checkboxFilled = !![]),
                      $(steps[x])["find"](_0x3bee5e(0x140))[_0x3bee5e(0x141)] >=
                        $(steps[x])[_0x3bee5e(0x1a9)](_0x3bee5e(0x181))[
                          "length"
                        ] &&
                        resetInputErrorMessage(
                          $(steps[x])
                            [_0x3bee5e(0x1a9)](":input[type=\x22checkbox\x22]")
                            ["attr"](_0x3bee5e(0x17d)),
                        ));
                })
            : ((checkboxFilled = !![]),
              resetInputErrorMessage(
                $(steps[x])
                  ["find"](":input[type=\x22checkbox\x22]")
                  ["attr"]("name"),
              ))
          : ((checkboxFilled = ![]),
            $(steps[x])
              [_0x2798de(0x1a9)](_0x2798de(0x181))
              [_0x2798de(0xbf)](function () {
                const _0x4ea65e = _0x2798de;
                $(this)[_0x4ea65e(0xd2)](_0x4ea65e(0x1b4)) &&
                  unfilledArr[_0x4ea65e(0x177)]({
                    input: $(this)[_0x4ea65e(0x1ad)](_0x4ea65e(0x17d)),
                  });
              }),
            unfilledArr[_0x2798de(0x177)]({
              input: $(steps[x])
                ["find"](":input[type=\x22checkbox\x22]")
                [_0x2798de(0x1ad)]("name"),
            }))),
      $(steps[x])
        [_0x2798de(0x1a9)]("input:radio[required]")
        [_0x2798de(0xbf)](function (_0x3f3376) {
          const _0x5884c2 = _0x2798de;
          var _0x39395f = $(this)[_0x5884c2(0x1ad)](_0x5884c2(0x17d));
          $("input:radio[name=\x22" + _0x39395f + _0x5884c2(0xe2))[
            _0x5884c2(0x141)
          ] == 0x0
            ? (!empReqRadio[_0x5884c2(0x1a9)](
                (_0x544957) => _0x544957[_0x5884c2(0x156)] === _0x3f3376,
              ) && empReqRadio[_0x5884c2(0x177)]({ input: _0x3f3376 }),
              unfilledArr[_0x5884c2(0x177)]({
                input: $(this)[_0x5884c2(0x1ad)](_0x5884c2(0x17d)),
              }))
            : (empReqRadio = empReqRadio["filter"](
                (_0x22a647) => _0x22a647[_0x5884c2(0x156)] !== _0x3f3376,
              )),
            empReqRadio[_0x5884c2(0x141)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0x2798de(0x1a9)](_0x2798de(0x16e))
        [_0x2798de(0xbf)](function (_0x406da1) {
          const _0x48b4cd = _0x2798de;
          let _0x1c9f40 = $(this)[_0x48b4cd(0xd9)]()[_0x48b4cd(0x141)],
            _0x3c607b = $(this)[_0x48b4cd(0xc7)](_0x48b4cd(0x102))
              ? $(this)["data"](_0x48b4cd(0x102))
              : 0x0;
          $(this)[_0x48b4cd(0xd9)]() !== "" && _0x1c9f40 >= _0x3c607b
            ? (empReqInput = empReqInput[_0x48b4cd(0xb8)](
                (_0x3cd698) => _0x3cd698[_0x48b4cd(0x156)] !== _0x406da1,
              ))
            : (!empReqInput[_0x48b4cd(0x1a9)](
                (_0x56b75e) => _0x56b75e["input"] === _0x406da1,
              ) && empReqInput[_0x48b4cd(0x177)]({ input: _0x406da1 }),
              unfilledArr["push"]({
                input: $(this)[_0x48b4cd(0x1ad)](_0x48b4cd(0x17d)),
              })),
            empReqInput[_0x48b4cd(0x141)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x2798de(0x1a9)](":input[type=\x22password\x22][required]")
        [_0x2798de(0xbf)](function (_0xe48e19) {
          const _0x3cc028 = _0x2798de;
          let _0x448f9c = $(this)[_0x3cc028(0xd9)]()[_0x3cc028(0x141)],
            _0x4c1a75 = $(this)[_0x3cc028(0xc7)](_0x3cc028(0x102))
              ? $(this)["data"](_0x3cc028(0x102))
              : 0x0;
          $(this)[_0x3cc028(0xd9)]() !== "" && _0x448f9c >= _0x4c1a75
            ? (empReqPassword = empReqPassword[_0x3cc028(0xb8)](
                (_0x17d81b) => _0x17d81b["input"] !== _0xe48e19,
              ))
            : (!empReqPassword["find"](
                (_0x199874) => _0x199874[_0x3cc028(0x156)] === _0xe48e19,
              ) && empReqPassword[_0x3cc028(0x177)]({ input: _0xe48e19 }),
              unfilledArr[_0x3cc028(0x177)]({
                input: $(this)[_0x3cc028(0x1ad)]("name"),
              })),
            empReqPassword["length"] === 0x0
              ? (passwordFilled = !![])
              : (passwordFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x2798de(0xe4))
        [_0x2798de(0xbf)](function (_0x2db5c6) {
          const _0x132292 = _0x2798de;
          let _0x387a4d = $(this)[_0x132292(0xd9)]()["length"],
            _0x2f7740 = $(this)[_0x132292(0xc7)]("min-character")
              ? $(this)["data"](_0x132292(0x102))
              : 0x0;
          $(this)["val"]() !== "" && _0x387a4d >= _0x2f7740
            ? (empReqUrl = empReqUrl[_0x132292(0xb8)](
                (_0x1e5fd8) => _0x1e5fd8[_0x132292(0x156)] !== _0x2db5c6,
              ))
            : (!empReqUrl[_0x132292(0x1a9)](
                (_0x13530d) => _0x13530d[_0x132292(0x156)] === _0x2db5c6,
              ) && empReqUrl[_0x132292(0x177)]({ input: _0x2db5c6 }),
              unfilledArr[_0x132292(0x177)]({
                input: $(this)[_0x132292(0x1ad)](_0x132292(0x17d)),
              })),
            empReqUrl[_0x132292(0x141)] === 0x0 &&
            validateURL($(this)[_0x132292(0xd9)]())
              ? ((urlFilled = !![]), console["log"](urlFilled))
              : (urlFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x2798de(0x13c))
        [_0x2798de(0xbf)](function (_0x38c489) {
          const _0x588e7b = _0x2798de;
          $(this)[_0x588e7b(0xd9)]() !== ""
            ? (empReqDate = empReqDate[_0x588e7b(0xb8)](
                (_0x18c546) => _0x18c546[_0x588e7b(0x156)] !== _0x38c489,
              ))
            : (!empReqDate[_0x588e7b(0x1a9)](
                (_0x1cd30c) => _0x1cd30c[_0x588e7b(0x156)] === _0x38c489,
              ) && empReqDate[_0x588e7b(0x177)]({ input: _0x38c489 }),
              unfilledArr[_0x588e7b(0x177)]({
                input: $(this)["attr"](_0x588e7b(0x17d)),
              })),
            empReqDate["length"] === 0x0
              ? (dateFilled = !![])
              : (dateFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x2798de(0xba))
        ["each"](function (_0x185cca) {
          const _0x543ab3 = _0x2798de;
          if ($(this)[_0x543ab3(0xd9)]() !== "") {
            let _0x5e65f4 = $(this)[_0x543ab3(0xd9)]()[_0x543ab3(0x141)],
              _0x3e294c = $(this)[_0x543ab3(0xc7)](_0x543ab3(0x102))
                ? $(this)[_0x543ab3(0xc7)](_0x543ab3(0x102))
                : 0x0;
            if ($(this)[_0x543ab3(0xc7)](_0x543ab3(0x15d))) {
              var _0x515f7f = phoneAutoFormat(
                $(this)["data"]("phone-autoformat"),
              );
              $(this)[_0x543ab3(0xd9)](_0x515f7f($(this)[_0x543ab3(0xd9)]()));
            }
            phoneValidation($(this)["val"](), _0x5e65f4, _0x3e294c)
              ? (empReqTel = empReqTel["filter"](
                  (_0x423e3b) => _0x423e3b[_0x543ab3(0x156)] !== _0x185cca,
                ))
              : empReqTel["push"]({ input: _0x185cca });
          } else
            !empReqTel[_0x543ab3(0x1a9)](
              (_0x28443e) => _0x28443e["input"] === _0x185cca,
            ) && empReqTel[_0x543ab3(0x177)]({ input: _0x185cca }),
              unfilledArr[_0x543ab3(0x177)]({
                input: $(this)[_0x543ab3(0x1ad)](_0x543ab3(0x17d)),
              });
          empReqTel[_0x543ab3(0x141)] === 0x0
            ? (telFilled = !![])
            : (telFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x2798de(0x108))
        [_0x2798de(0xbf)](function (_0x2ef690) {
          const _0x5ecaf7 = _0x2798de;
          $(this)[_0x5ecaf7(0xd9)]() !== ""
            ? (empReqFile = empReqFile["filter"](
                (_0x1c3a21) => _0x1c3a21[_0x5ecaf7(0x156)] !== _0x2ef690,
              ))
            : (!empReqFile[_0x5ecaf7(0x1a9)](
                (_0x31a443) => _0x31a443["input"] === _0x2ef690,
              ) && empReqFile[_0x5ecaf7(0x177)]({ input: _0x2ef690 }),
              unfilledArr[_0x5ecaf7(0x177)]({
                input: $(this)["attr"](_0x5ecaf7(0x17d)),
              })),
            empReqFile["length"] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x2798de(0x1a9)](_0x2798de(0xe0))
        [_0x2798de(0xbf)](function (_0x321921) {
          const _0x13a62d = _0x2798de;
          let _0x3ed2d4 = $(this)[_0x13a62d(0xd9)]()[_0x13a62d(0x141)],
            _0x1f90d0 = $(this)["data"](_0x13a62d(0x102))
              ? $(this)[_0x13a62d(0xc7)](_0x13a62d(0x102))
              : 0x0;
          $(this)[_0x13a62d(0xd9)]() !== "" && _0x3ed2d4 >= _0x1f90d0
            ? (empReqNum = empReqNum[_0x13a62d(0xb8)](
                (_0x2f47ca) => _0x2f47ca["input"] !== _0x321921,
              ))
            : (!empReqNum["find"](
                (_0x205a48) => _0x205a48[_0x13a62d(0x156)] === _0x321921,
              ) && empReqNum[_0x13a62d(0x177)]({ input: _0x321921 }),
              unfilledArr[_0x13a62d(0x177)]({
                input: $(this)[_0x13a62d(0x1ad)](_0x13a62d(0x17d)),
              })),
            empReqNum[_0x13a62d(0x141)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x2798de(0x1a9)](_0x2798de(0x138))
        [_0x2798de(0xbf)](function (_0x4e1149) {
          const _0x5b0df4 = _0x2798de;
          let _0x294382 = $(this)[_0x5b0df4(0xd9)]();
          _0x294382 === "" && (_0x294382 = null),
            _0x294382 != null
              ? (empReqSelect = empReqSelect[_0x5b0df4(0xb8)](
                  (_0x2a8c58) => _0x2a8c58[_0x5b0df4(0x156)] !== _0x4e1149,
                ))
              : (!empReqSelect[_0x5b0df4(0x1a9)](
                  (_0x9ade1) => _0x9ade1[_0x5b0df4(0x156)] === _0x4e1149,
                ) && empReqSelect["push"]({ input: _0x4e1149 }),
                unfilledArr[_0x5b0df4(0x177)]({
                  input: $(this)[_0x5b0df4(0x1ad)](_0x5b0df4(0x17d)),
                })),
            empReqSelect[_0x5b0df4(0x141)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x2798de(0x1a9)]("textarea[required]")
        ["each"](function (_0x4ac501) {
          const _0x5d7c0c = _0x2798de;
          let _0x458993 = $(this)[_0x5d7c0c(0xd9)]()[_0x5d7c0c(0x141)],
            _0x44c2ee = $(this)[_0x5d7c0c(0xc7)]("min-character")
              ? $(this)["data"](_0x5d7c0c(0x102))
              : 0x0;
          $(this)[_0x5d7c0c(0xd9)]() !== "" && _0x458993 >= _0x44c2ee
            ? (empReqTextarea = empReqTextarea[_0x5d7c0c(0xb8)](
                (_0x5d7b8d) => _0x5d7b8d[_0x5d7c0c(0x156)] !== _0x4ac501,
              ))
            : (!empReqTextarea[_0x5d7c0c(0x1a9)](
                (_0x314e22) => _0x314e22["input"] === _0x4ac501,
              ) && empReqTextarea["push"]({ input: _0x4ac501 }),
              unfilledArr["push"]({
                input: $(this)[_0x5d7c0c(0x1ad)](_0x5d7c0c(0x17d)),
              })),
            empReqTextarea[_0x5d7c0c(0x141)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x2798de(0x1a9)](":input[type=\x22email\x22][required]")
        [_0x2798de(0xbf)](function () {
          const _0x495f20 = _0x2798de;
          $(this)[_0x495f20(0xd9)]() !== ""
            ? validateEmail(
                $(this)[_0x495f20(0xd9)](),
                $(this)[_0x495f20(0xc7)]("block-domain"),
                $(this)[_0x495f20(0x1ad)](_0x495f20(0x17d)),
              )
            : ((emailFilled = ![]),
              unfilledArr[_0x495f20(0x177)]({
                input: $(this)[_0x495f20(0x1ad)](_0x495f20(0x17d)),
              }));
        });
  else {
    if ($(steps[x])[_0x2798de(0xc7)](_0x2798de(0x11c)))
      (answer = $(steps[x])
        [_0x2798de(0x1a9)](_0x2798de(0xa7))
        ["data"](_0x2798de(0x111))),
        (selections = selections[_0x2798de(0xb8)](
          (_0x147671) => _0x147671[_0x2798de(0x1a2)] !== x,
        )),
        selections[_0x2798de(0x177)]({ step: x, selected: answer });
    else
      $(steps[x])
        [_0x2798de(0x1a9)](_0x2798de(0x194))
        [_0x2798de(0xc7)]("card") &&
        ((answer = $(steps[x])
          [_0x2798de(0x1a9)](".active-answer-card")
          [_0x2798de(0xc7)]("go-to")),
        (selections = selections[_0x2798de(0xb8)](
          (_0x237ac3) => _0x237ac3["step"] !== x,
        )),
        selections[_0x2798de(0x177)]({ step: x, selected: answer }));
    $(steps[x])
      ["find"](_0x2798de(0x194))
      [_0x2798de(0x1a9)](_0x2798de(0x119))
      ["is"](_0x2798de(0xdf)) &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])[_0x2798de(0x1a9)](_0x2798de(0x154))[_0x2798de(0x141)]
        ? (console[_0x2798de(0x180)](_0x2798de(0xb7)),
          $(steps[x])
            [_0x2798de(0x1a9)](_0x2798de(0x154))
            [_0x2798de(0xbf)](function () {
              const _0x3e2064 = _0x2798de;
              $(this)["is"](":checked")
                ? $(steps[x])[_0x3e2064(0x1a9)](_0x3e2064(0xe1))[
                    _0x3e2064(0x141)
                  ] < 0x1 &&
                  ((skipTo = undefined),
                  $(this)
                    [_0x3e2064(0xfe)]("[data-skip-to]")
                    [_0x3e2064(0xc7)](_0x3e2064(0x15e)) &&
                    (skipTo = $(this)
                      [_0x3e2064(0xfe)](_0x3e2064(0x1ba))
                      [_0x3e2064(0xc7)](_0x3e2064(0x15e))),
                  $(this)
                    ["parents"]("[data-go-to]")
                    [_0x3e2064(0x1ad)](_0x3e2064(0xf3)) &&
                    ((answer = $(this)
                      [_0x3e2064(0xfe)](_0x3e2064(0xa7))
                      [_0x3e2064(0x1ad)](_0x3e2064(0xf3))),
                    (selections = selections[_0x3e2064(0xb8)](
                      (_0xc845e5) => _0xc845e5[_0x3e2064(0x1a2)] !== x,
                    )),
                    selections["push"]({ step: x, selected: answer }),
                    skipTo &&
                      (selections[_0x3e2064(0x177)]({
                        step: skipTo - 0x2,
                        selected: answer,
                      }),
                      (objIndex = selections[_0x3e2064(0x1a6)](
                        (_0x5d9e17) => _0x5d9e17[_0x3e2064(0x1a2)] === x,
                      )),
                      (selections[objIndex][_0x3e2064(0xaa)] =
                        parseInt(skipTo) - 0x1),
                      (selections[objIndex]["backTo"] = x))),
                  (checkboxFilled = !![]),
                  $(steps[x])[_0x3e2064(0x1a9)](_0x3e2064(0x140))[
                    _0x3e2064(0x141)
                  ] >=
                    $(steps[x])[_0x3e2064(0x1a9)](_0x3e2064(0x181))[
                      _0x3e2064(0x141)
                    ] &&
                    resetInputErrorMessage(
                      $(steps[x])
                        [_0x3e2064(0x1a9)](_0x3e2064(0x154))
                        [_0x3e2064(0x1ad)](_0x3e2064(0x17d)),
                    ))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0x3e2064(0x177)]({
                    input: $(this)[_0x3e2064(0x1ad)](_0x3e2064(0x17d)),
                  }));
            }))
        : $(steps[x])
              [_0x2798de(0x1a9)](_0x2798de(0x194))
              ["find"](_0x2798de(0x148))[_0x2798de(0x141)] >= checkCount
          ? ($(steps[x])
              [_0x2798de(0x1a9)](_0x2798de(0x194))
              [_0x2798de(0x1a9)](_0x2798de(0x154))
              [_0x2798de(0xfe)](_0x2798de(0xa7))
              [_0x2798de(0x1ad)](_0x2798de(0xf3)) &&
              ((skipTo = undefined),
              $(steps[x])
                ["find"](_0x2798de(0x194))
                [_0x2798de(0x1a9)](_0x2798de(0x154))
                [_0x2798de(0xfe)](_0x2798de(0x1ba))
                [_0x2798de(0x1ad)](_0x2798de(0x139)) &&
                (skipTo = $(steps[x])
                  [_0x2798de(0x1a9)](_0x2798de(0x194))
                  [_0x2798de(0x1a9)](_0x2798de(0x148))
                  [_0x2798de(0xfe)]("[data-skip-to]")
                  [_0x2798de(0x1ad)](_0x2798de(0x139))),
              (answer = $(steps[x])
                [_0x2798de(0x1a9)](_0x2798de(0x194))
                ["find"](_0x2798de(0x154))
                ["parents"](_0x2798de(0xa7))
                ["attr"](_0x2798de(0xf3))),
              (selections = selections[_0x2798de(0xb8)](
                (_0x2dc168) => _0x2dc168["step"] !== x,
              )),
              selections[_0x2798de(0x177)]({ step: x, selected: answer }),
              skipTo &&
                ((selections = selections[_0x2798de(0xb8)](
                  (_0x4f29a2) => _0x4f29a2["step"] !== skipTo - 0x2,
                )),
                selections[_0x2798de(0x177)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x2798de(0x1a6)](
                  (_0x2942e7) => _0x2942e7[_0x2798de(0x1a2)] === x,
                )),
                console["log"](objIndex),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x2798de(0x17c)] = x),
                console[_0x2798de(0x180)]("running"))),
            (checkboxFilled = !![]),
            $(steps[x])[_0x2798de(0x1a9)](_0x2798de(0x140))["length"] >=
              $(steps[x])[_0x2798de(0x1a9)](_0x2798de(0x181))[
                _0x2798de(0x141)
              ] &&
              resetInputErrorMessage(
                $(steps[x])
                  [_0x2798de(0x1a9)](":input[type=\x22checkbox\x22]")
                  ["attr"](_0x2798de(0x17d)),
              ))
          : ((checkboxFilled = ![]),
            $(steps[x])
              ["find"](":input[type=\x22checkbox\x22][required]")
              [_0x2798de(0xbf)](function () {
                const _0x9d3beb = _0x2798de;
                $(this)[_0x9d3beb(0xd2)](":checked") &&
                  unfilledArr["push"]({
                    input: $(this)[_0x9d3beb(0x1ad)](_0x9d3beb(0x17d)),
                  });
              }))),
      $(steps[x])
        [_0x2798de(0x1a9)](".active-answer-card")
        [_0x2798de(0x1a9)]("input:radio[required]")
        [_0x2798de(0xbf)](function (_0x331abc) {
          const _0x52260d = _0x2798de;
          var _0x30f1b3 = $(this)["attr"](_0x52260d(0x17d));
          $("input:radio[name=\x22" + _0x30f1b3 + "\x22]:checked")["length"] ==
          0x0
            ? (!empReqRadio[_0x52260d(0x1a9)](
                (_0x2ce496) => _0x2ce496[_0x52260d(0x156)] === _0x331abc,
              ) && empReqRadio[_0x52260d(0x177)]({ input: _0x331abc }),
              unfilledArr[_0x52260d(0x177)]({
                input: $(this)[_0x52260d(0x1ad)]("name"),
              }))
            : (empReqRadio = empReqRadio[_0x52260d(0xb8)](
                (_0x20acf4) => _0x20acf4["input"] !== _0x331abc,
              )),
            empReqRadio[_0x52260d(0x141)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0x2798de(0x1a9)](_0x2798de(0x194))
        ["find"](_0x2798de(0x16e))
        [_0x2798de(0xbf)](function (_0x4fa8b4) {
          const _0x1d9e5c = _0x2798de;
          let _0x5c0130 = $(this)[_0x1d9e5c(0xd9)]()[_0x1d9e5c(0x141)],
            _0x1b1a7d = $(this)[_0x1d9e5c(0xc7)](_0x1d9e5c(0x102))
              ? $(this)["data"](_0x1d9e5c(0x102))
              : 0x0;
          $(this)["val"]() !== "" && _0x5c0130 >= _0x1b1a7d
            ? (empReqInput = empReqInput[_0x1d9e5c(0xb8)](
                (_0x20418e) => _0x20418e[_0x1d9e5c(0x156)] !== _0x4fa8b4,
              ))
            : (!empReqInput[_0x1d9e5c(0x1a9)](
                (_0x54279d) => _0x54279d["input"] === _0x4fa8b4,
              ) && empReqInput[_0x1d9e5c(0x177)]({ input: _0x4fa8b4 }),
              unfilledArr[_0x1d9e5c(0x177)]({
                input: $(this)["attr"](_0x1d9e5c(0x17d)),
              })),
            empReqInput[_0x1d9e5c(0x141)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x2798de(0x1a9)](_0x2798de(0x194))
        [_0x2798de(0x1a9)](_0x2798de(0x12f))
        ["each"](function (_0x32b0d8) {
          const _0x3adc2e = _0x2798de;
          (skipTo = undefined),
            $(this)
              [_0x3adc2e(0xfe)](_0x3adc2e(0x1ba))
              ["data"](_0x3adc2e(0x15e)) !== "" &&
              (skipTo = $(this)
                [_0x3adc2e(0xfe)]("[data-skip-to]")
                ["data"](_0x3adc2e(0x15e))),
            $(this)
              [_0x3adc2e(0xfe)]("[data-go-to]")
              [_0x3adc2e(0x1ad)](_0x3adc2e(0xf3)) &&
              ((answer = $(this)
                ["parents"]("[data-go-to]")
                [_0x3adc2e(0x1ad)]("data-go-to")),
              (selections = selections["filter"](
                (_0x32320a) => _0x32320a[_0x3adc2e(0x1a2)] !== x,
              )),
              selections[_0x3adc2e(0x177)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x3adc2e(0x177)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x26c50f) => _0x26c50f[_0x3adc2e(0x1a2)] === x,
                )),
                (selections[objIndex][_0x3adc2e(0xaa)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x3adc2e(0x17c)] = x)));
        }),
      $(steps[x])
        [_0x2798de(0x1a9)](_0x2798de(0x194))
        [_0x2798de(0x1a9)](":input[type=\x22password\x22][required]")
        [_0x2798de(0xbf)](function (_0x2385ed) {
          const _0x3e713f = _0x2798de;
          let _0x559236 = $(this)[_0x3e713f(0xd9)]()[_0x3e713f(0x141)],
            _0x363afc = $(this)[_0x3e713f(0xc7)]("min-character")
              ? $(this)["data"](_0x3e713f(0x102))
              : 0x0;
          $(this)["val"]() !== "" && _0x559236 >= _0x363afc
            ? (empReqPassword = empReqPassword[_0x3e713f(0xb8)](
                (_0x7e88e) => _0x7e88e[_0x3e713f(0x156)] !== _0x2385ed,
              ))
            : (!empReqPassword[_0x3e713f(0x1a9)](
                (_0x52bde6) => _0x52bde6["input"] === _0x2385ed,
              ) && empReqPassword[_0x3e713f(0x177)]({ input: _0x2385ed }),
              unfilledArr[_0x3e713f(0x177)]({
                input: $(this)["attr"](_0x3e713f(0x17d)),
              })),
            empReqPassword[_0x3e713f(0x141)] === 0x0
              ? (passwordFilled = !![])
              : (passwordFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x2798de(0x194))
        ["find"](":input[type=\x22password\x22]")
        ["each"](function (_0xb0a85d) {
          const _0x59e97c = _0x2798de;
          (skipTo = undefined),
            $(this)["parents"](_0x59e97c(0x1ba))["data"]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0x59e97c(0xfe)]("[data-skip-to]")
                [_0x59e97c(0xc7)](_0x59e97c(0x15e))),
            $(this)
              [_0x59e97c(0xfe)](_0x59e97c(0xa7))
              [_0x59e97c(0x1ad)](_0x59e97c(0xf3)) &&
              ((answer = $(this)
                [_0x59e97c(0xfe)](_0x59e97c(0xa7))
                [_0x59e97c(0x1ad)](_0x59e97c(0xf3))),
              (selections = selections[_0x59e97c(0xb8)](
                (_0x2c4942) => _0x2c4942[_0x59e97c(0x1a2)] !== x,
              )),
              selections[_0x59e97c(0x177)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x59e97c(0x177)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x524131) => _0x524131[_0x59e97c(0x1a2)] === x,
                )),
                (selections[objIndex][_0x59e97c(0xaa)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x59e97c(0x17c)] = x)));
        }),
      $(steps[x])
        ["find"](".active-answer-card")
        [_0x2798de(0x1a9)](_0x2798de(0xe4))
        [_0x2798de(0xbf)](function (_0x475276) {
          const _0x10a8da = _0x2798de;
          let _0x17c5d8 = $(this)["val"]()[_0x10a8da(0x141)],
            _0xb08a7f = $(this)[_0x10a8da(0xc7)](_0x10a8da(0x102))
              ? $(this)[_0x10a8da(0xc7)](_0x10a8da(0x102))
              : 0x0;
          $(this)["val"]() !== "" && _0x17c5d8 >= _0xb08a7f
            ? (empReqUrl = empReqUrl[_0x10a8da(0xb8)](
                (_0x15761d) => _0x15761d[_0x10a8da(0x156)] !== _0x475276,
              ))
            : (!empReqUrl["find"](
                (_0x37a3ee) => _0x37a3ee[_0x10a8da(0x156)] === _0x475276,
              ) && empReqUrl["push"]({ input: _0x475276 }),
              unfilledArr["push"]({
                input: $(this)[_0x10a8da(0x1ad)](_0x10a8da(0x17d)),
              })),
            empReqUrl[_0x10a8da(0x141)] === 0x0 &&
            validateURL($(this)[_0x10a8da(0xd9)]())
              ? (urlFilled = !![])
              : (urlFilled = ![]);
        }),
      $(steps[x])
        [_0x2798de(0x1a9)](_0x2798de(0x194))
        ["find"](_0x2798de(0x1ac))
        [_0x2798de(0xbf)](function (_0x590b0c) {
          const _0x44ee37 = _0x2798de;
          (skipTo = undefined),
            $(this)
              ["parents"]("[data-skip-to]")
              [_0x44ee37(0xc7)](_0x44ee37(0x15e)) !== "" &&
              (skipTo = $(this)
                [_0x44ee37(0xfe)](_0x44ee37(0x1ba))
                [_0x44ee37(0xc7)]("skip-to")),
            $(this)
              [_0x44ee37(0xfe)]("[data-go-to]")
              [_0x44ee37(0x1ad)]("data-go-to") &&
              ((answer = $(this)
                [_0x44ee37(0xfe)](_0x44ee37(0xa7))
                [_0x44ee37(0x1ad)](_0x44ee37(0xf3))),
              (selections = selections[_0x44ee37(0xb8)](
                (_0x19f7b9) => _0x19f7b9["step"] !== x,
              )),
              selections[_0x44ee37(0x177)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x44ee37(0x177)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x44ee37(0x1a6)](
                  (_0x286ad0) => _0x286ad0[_0x44ee37(0x1a2)] === x,
                )),
                (selections[objIndex][_0x44ee37(0xaa)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x44ee37(0x17c)] = x)));
        }),
      $(steps[x])
        [_0x2798de(0x1a9)](".active-answer-card")
        ["find"](_0x2798de(0x13c))
        [_0x2798de(0xbf)](function (_0x26e1d1) {
          const _0x24c862 = _0x2798de;
          $(this)["val"]() !== ""
            ? (empReqDate = empReqDate[_0x24c862(0xb8)](
                (_0xb17130) => _0xb17130["input"] !== _0x26e1d1,
              ))
            : (!empReqDate[_0x24c862(0x1a9)](
                (_0x4cce57) => _0x4cce57[_0x24c862(0x156)] === _0x26e1d1,
              ) && empReqDate["push"]({ input: _0x26e1d1 }),
              unfilledArr[_0x24c862(0x177)]({
                input: $(this)[_0x24c862(0x1ad)](_0x24c862(0x17d)),
              })),
            empReqDate[_0x24c862(0x141)] === 0x0
              ? (dateFilled = !![])
              : (dateFilled = ![]);
        }),
      $(steps[x])
        [_0x2798de(0x1a9)](_0x2798de(0x194))
        [_0x2798de(0x1a9)](_0x2798de(0x14f))
        [_0x2798de(0xbf)](function (_0x23af8c) {
          const _0x2c1702 = _0x2798de;
          (skipTo = undefined),
            $(this)
              [_0x2c1702(0xfe)](_0x2c1702(0x1ba))
              [_0x2c1702(0xc7)](_0x2c1702(0x15e)) !== "" &&
              (skipTo = $(this)
                [_0x2c1702(0xfe)](_0x2c1702(0x1ba))
                [_0x2c1702(0xc7)](_0x2c1702(0x15e))),
            $(this)[_0x2c1702(0xfe)]("[data-go-to]")["attr"]("data-go-to") &&
              ((answer = $(this)
                [_0x2c1702(0xfe)](_0x2c1702(0xa7))
                [_0x2c1702(0x1ad)](_0x2c1702(0xf3))),
              (selections = selections[_0x2c1702(0xb8)](
                (_0x186ae6) => _0x186ae6[_0x2c1702(0x1a2)] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x2c1702(0x177)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x2c1702(0x1a6)](
                  (_0x1b3f38) => _0x1b3f38[_0x2c1702(0x1a2)] === x,
                )),
                (selections[objIndex][_0x2c1702(0xaa)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x2c1702(0x17c)] = x)));
        }),
      $(steps[x])
        [_0x2798de(0x1a9)](".active-answer-card")
        [_0x2798de(0x1a9)](_0x2798de(0xe0))
        ["each"](function (_0x195d43) {
          const _0x57a5a2 = _0x2798de;
          let _0x3220d1 = $(this)[_0x57a5a2(0xd9)]()[_0x57a5a2(0x141)],
            _0x659d53 = $(this)[_0x57a5a2(0xc7)](_0x57a5a2(0x102))
              ? $(this)["data"](_0x57a5a2(0x102))
              : 0x0;
          $(this)[_0x57a5a2(0xd9)]() !== "" && _0x3220d1 >= _0x659d53
            ? (empReqNum = empReqNum[_0x57a5a2(0xb8)](
                (_0x4d9c95) => _0x4d9c95[_0x57a5a2(0x156)] !== _0x195d43,
              ))
            : (!empReqNum["find"](
                (_0x1f2c72) => _0x1f2c72["input"] === _0x195d43,
              ) && empReqNum[_0x57a5a2(0x177)]({ input: _0x195d43 }),
              unfilledArr[_0x57a5a2(0x177)]({
                input: $(this)[_0x57a5a2(0x1ad)](_0x57a5a2(0x17d)),
              })),
            empReqNum[_0x57a5a2(0x141)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x2798de(0x1a9)](".active-answer-card")
        [_0x2798de(0x1a9)](":input[type=\x22number\x22]")
        ["each"](function (_0x238181) {
          const _0x5b3e87 = _0x2798de;
          (skipTo = undefined),
            $(this)
              [_0x5b3e87(0xfe)](_0x5b3e87(0x1ba))
              [_0x5b3e87(0xc7)](_0x5b3e87(0x15e)) !== "" &&
              (skipTo = $(this)
                [_0x5b3e87(0xfe)]("[data-skip-to]")
                [_0x5b3e87(0xc7)](_0x5b3e87(0x15e))),
            $(this)
              ["parents"](_0x5b3e87(0xa7))
              [_0x5b3e87(0x1ad)]("data-go-to") &&
              ((answer = $(this)
                [_0x5b3e87(0xfe)](_0x5b3e87(0xa7))
                [_0x5b3e87(0x1ad)](_0x5b3e87(0xf3))),
              (selections = selections[_0x5b3e87(0xb8)](
                (_0x422078) => _0x422078[_0x5b3e87(0x1a2)] !== x,
              )),
              selections[_0x5b3e87(0x177)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x5b3e87(0x177)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x5b3e87(0x1a6)](
                  (_0x3c9d23) => _0x3c9d23[_0x5b3e87(0x1a2)] === x,
                )),
                (selections[objIndex][_0x5b3e87(0xaa)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x5b3e87(0x17c)] = x)));
        }),
      $(steps[x])
        ["find"](_0x2798de(0x194))
        [_0x2798de(0x1a9)](_0x2798de(0xba))
        [_0x2798de(0xbf)](function (_0x5b5fe7) {
          const _0x13441e = _0x2798de;
          if ($(this)["val"]() !== "") {
            let _0x2da743 = $(this)[_0x13441e(0xd9)]()[_0x13441e(0x141)],
              _0x1ad836 = $(this)[_0x13441e(0xc7)](_0x13441e(0x102))
                ? $(this)[_0x13441e(0xc7)](_0x13441e(0x102))
                : 0x0;
            if ($(this)["data"]("phone-autoformat")) {
              var _0x1750de = phoneAutoFormat(
                $(this)["data"](_0x13441e(0x15d)),
              );
              $(this)[_0x13441e(0xd9)](_0x1750de($(this)[_0x13441e(0xd9)]()));
            }
            phoneValidation($(this)[_0x13441e(0xd9)](), _0x2da743, _0x1ad836)
              ? (empReqTel = empReqTel[_0x13441e(0xb8)](
                  (_0x2412fb) => _0x2412fb[_0x13441e(0x156)] !== _0x5b5fe7,
                ))
              : empReqTel[_0x13441e(0x177)]({ input: _0x5b5fe7 });
          } else
            !empReqTel[_0x13441e(0x1a9)](
              (_0x1f5cf3) => _0x1f5cf3[_0x13441e(0x156)] === _0x5b5fe7,
            ) && empReqTel[_0x13441e(0x177)]({ input: _0x5b5fe7 }),
              unfilledArr[_0x13441e(0x177)]({
                input: $(this)[_0x13441e(0x1ad)](_0x13441e(0x17d)),
              });
          empReqTel[_0x13441e(0x141)] === 0x0
            ? (telFilled = !![])
            : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x2798de(0x1a9)](_0x2798de(0x194))
        [_0x2798de(0x1a9)](_0x2798de(0x164))
        [_0x2798de(0xbf)](function (_0x47a8c8) {
          const _0xa1d7c5 = _0x2798de;
          (skipTo = undefined),
            $(this)
              [_0xa1d7c5(0xfe)]("[data-skip-to]")
              [_0xa1d7c5(0xc7)](_0xa1d7c5(0x15e)) !== "" &&
              (skipTo = $(this)
                [_0xa1d7c5(0xfe)](_0xa1d7c5(0x1ba))
                [_0xa1d7c5(0xc7)](_0xa1d7c5(0x15e))),
            $(this)
              [_0xa1d7c5(0xfe)]("[data-go-to]")
              [_0xa1d7c5(0x1ad)]("data-go-to") &&
              ((answer = $(this)
                [_0xa1d7c5(0xfe)](_0xa1d7c5(0xa7))
                ["attr"](_0xa1d7c5(0xf3))),
              (selections = selections[_0xa1d7c5(0xb8)](
                (_0x2b37d5) => _0x2b37d5[_0xa1d7c5(0x1a2)] !== x,
              )),
              selections[_0xa1d7c5(0x177)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0xa1d7c5(0x177)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0xa1d7c5(0x1a6)](
                  (_0x314d7f) => _0x314d7f[_0xa1d7c5(0x1a2)] === x,
                )),
                (selections[objIndex][_0xa1d7c5(0xaa)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0xa1d7c5(0x17c)] = x)));
        }),
      $(steps[x])
        [_0x2798de(0x1a9)](_0x2798de(0x194))
        ["find"](_0x2798de(0x108))
        ["each"](function (_0x1d9c59) {
          const _0x4deb06 = _0x2798de;
          $(this)[_0x4deb06(0xd9)]() !== ""
            ? (empReqFile = empReqFile[_0x4deb06(0xb8)](
                (_0x7cb89d) => _0x7cb89d[_0x4deb06(0x156)] !== _0x1d9c59,
              ))
            : (!empReqFile[_0x4deb06(0x1a9)](
                (_0x20f04f) => _0x20f04f[_0x4deb06(0x156)] === _0x1d9c59,
              ) && empReqFile[_0x4deb06(0x177)]({ input: _0x1d9c59 }),
              unfilledArr["push"]({
                input: $(this)["attr"](_0x4deb06(0x17d)),
              })),
            empReqFile[_0x4deb06(0x141)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x2798de(0x1a9)](_0x2798de(0x194))
        [_0x2798de(0x1a9)](_0x2798de(0x1aa))
        ["each"](function (_0x518ffe) {
          const _0x266219 = _0x2798de;
          (skipTo = undefined),
            $(this)
              [_0x266219(0xfe)](_0x266219(0x1ba))
              [_0x266219(0xc7)](_0x266219(0x15e)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0x266219(0x1ba))
                ["data"]("skip-to")),
            $(this)
              [_0x266219(0xfe)](_0x266219(0xa7))
              [_0x266219(0x1ad)]("data-go-to") &&
              ((answer = $(this)
                ["parents"]("[data-go-to]")
                [_0x266219(0x1ad)]("data-go-to")),
              (selections = selections[_0x266219(0xb8)](
                (_0x33ad6b) => _0x33ad6b[_0x266219(0x1a2)] !== x,
              )),
              selections[_0x266219(0x177)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x266219(0x177)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x266219(0x1a6)](
                  (_0x534003) => _0x534003["step"] === x,
                )),
                (selections[objIndex][_0x266219(0xaa)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x266219(0x17c)] = x)));
        }),
      $(steps[x])
        [_0x2798de(0x1a9)](_0x2798de(0x194))
        [_0x2798de(0x1a9)](_0x2798de(0x138))
        [_0x2798de(0xbf)](function (_0x92c92c) {
          const _0x294397 = _0x2798de;
          console[_0x294397(0x180)]($(this)["val"]()),
            $(this)["val"]() !== null && $(this)["val"]() !== ""
              ? (empReqSelect = empReqSelect[_0x294397(0xb8)](
                  (_0x560a4c) => _0x560a4c["input"] !== _0x92c92c,
                ))
              : (!empReqSelect[_0x294397(0x1a9)](
                  (_0x461cf5) => _0x461cf5[_0x294397(0x156)] === _0x92c92c,
                ) && empReqSelect[_0x294397(0x177)]({ input: _0x92c92c }),
                unfilledArr[_0x294397(0x177)]({
                  input: $(this)[_0x294397(0x1ad)](_0x294397(0x17d)),
                })),
            empReqSelect["length"] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x2798de(0x1a9)](".active-answer-card")
        [_0x2798de(0x1a9)](_0x2798de(0x150))
        [_0x2798de(0xbf)](function (_0x23c067) {
          const _0x149083 = _0x2798de;
          (skipTo = undefined),
            $(this)["parents"](_0x149083(0x1ba))[_0x149083(0xc7)]("skip-to") !==
              "" &&
              (skipTo = $(this)
                [_0x149083(0xfe)](_0x149083(0x1ba))
                ["data"](_0x149083(0x15e))),
            $(this)
              [_0x149083(0xfe)](_0x149083(0xa7))
              [_0x149083(0x1ad)]("data-go-to") &&
              ((answer = $(this)
                [_0x149083(0xfe)](_0x149083(0xa7))
                [_0x149083(0x1ad)](_0x149083(0xf3))),
              (selections = selections["filter"](
                (_0x27e74e) => _0x27e74e[_0x149083(0x1a2)] !== x,
              )),
              selections[_0x149083(0x177)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0x149083(0x1a6)](
                  (_0x269dd5) => _0x269dd5[_0x149083(0x1a2)] === x,
                )),
                (selections[objIndex][_0x149083(0xaa)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x2798de(0x1a9)](".active-answer-card")
        [_0x2798de(0x1a9)]("textarea[required]")
        [_0x2798de(0xbf)](function (_0x2875ff) {
          const _0x5318fa = _0x2798de;
          let _0x2ce0f0 = $(this)[_0x5318fa(0xd9)]()["length"],
            _0x47170b = $(this)[_0x5318fa(0xc7)]("min-character")
              ? $(this)[_0x5318fa(0xc7)](_0x5318fa(0x102))
              : 0x0;
          $(this)["val"]() !== "" && _0x2ce0f0 >= _0x47170b
            ? (empReqTextarea = empReqTextarea[_0x5318fa(0xb8)](
                (_0x58f7e3) => _0x58f7e3[_0x5318fa(0x156)] !== _0x2875ff,
              ))
            : (!empReqTextarea[_0x5318fa(0x1a9)](
                (_0x5815a8) => _0x5815a8[_0x5318fa(0x156)] === _0x2875ff,
              ) && empReqTextarea["push"]({ input: _0x2875ff }),
              unfilledArr[_0x5318fa(0x177)]({
                input: $(this)["attr"](_0x5318fa(0x17d)),
              })),
            empReqTextarea["length"] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x2798de(0x1a9)](_0x2798de(0x194))
        [_0x2798de(0x1a9)](_0x2798de(0x170))
        [_0x2798de(0xbf)](function (_0x2d0d1d) {
          const _0x1d9249 = _0x2798de;
          (skipTo = undefined),
            $(this)
              [_0x1d9249(0xfe)](_0x1d9249(0x1ba))
              [_0x1d9249(0xc7)](_0x1d9249(0x15e)) !== "" &&
              (skipTo = $(this)
                [_0x1d9249(0xfe)](_0x1d9249(0x1ba))
                [_0x1d9249(0xc7)](_0x1d9249(0x15e))),
            $(this)
              [_0x1d9249(0xfe)]("[data-go-to]")
              [_0x1d9249(0x1ad)]("data-go-to") &&
              ((answer = $(this)
                ["parents"](_0x1d9249(0xa7))
                [_0x1d9249(0x1ad)](_0x1d9249(0xf3))),
              (selections = selections[_0x1d9249(0xb8)](
                (_0x1a5293) => _0x1a5293[_0x1d9249(0x1a2)] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x1d9249(0x177)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x2a415e) => _0x2a415e[_0x1d9249(0x1a2)] === x,
                )),
                (selections[objIndex][_0x1d9249(0xaa)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x2798de(0x1a9)](_0x2798de(0x194))
        ["find"](_0x2798de(0x158))
        [_0x2798de(0xbf)](function (_0xdffedf) {
          const _0x431eb6 = _0x2798de;
          $(this)[_0x431eb6(0xd9)]() !== ""
            ? validateEmail(
                $(this)["val"](),
                $(this)["data"]("block-domain"),
                $(this)["attr"](_0x431eb6(0x17d)),
              )
            : ((emailFilled = ![]),
              unfilledArr[_0x431eb6(0x177)]({
                input: $(this)["attr"](_0x431eb6(0x17d)),
              }));
        }),
      $(steps[x])
        ["find"](_0x2798de(0x194))
        [_0x2798de(0x1a9)](_0x2798de(0x1a1))
        [_0x2798de(0xbf)](function (_0x244fc3) {
          const _0x26a141 = _0x2798de;
          (skipTo = undefined),
            $(this)
              [_0x26a141(0xfe)](_0x26a141(0x1ba))
              [_0x26a141(0xc7)](_0x26a141(0x15e)) !== "" &&
              (skipTo = $(this)
                [_0x26a141(0xfe)](_0x26a141(0x1ba))
                [_0x26a141(0xc7)]("skip-to")),
            $(this)
              [_0x26a141(0xfe)](_0x26a141(0xa7))
              [_0x26a141(0x1ad)](_0x26a141(0xf3)) &&
              ((answer = $(this)
                [_0x26a141(0xfe)](_0x26a141(0xa7))
                [_0x26a141(0x1ad)]("data-go-to")),
              (selections = selections["filter"](
                (_0x38c308) => _0x38c308[_0x26a141(0x1a2)] !== x,
              )),
              selections[_0x26a141(0x177)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x26a141(0x177)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x26a141(0x1a6)](
                  (_0x29a76f) => _0x29a76f[_0x26a141(0x1a2)] === x,
                )),
                (selections[objIndex][_0x26a141(0xaa)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x26a141(0x17c)] = x)));
        });
  }
  $(steps[x])
    [_0x2798de(0x1a9)](".active-answer-card")
    [_0x2798de(0x1a9)](_0x2798de(0xce))
    ["is"](_0x2798de(0x1b4)) &&
    ((selArr = []),
    $(steps)
      [_0x2798de(0x1a9)](_0x2798de(0x19b))
      [_0x2798de(0xbf)](function (_0x31b1da, _0x561ea9) {
        const _0x1d44a5 = _0x2798de;
        selArr[_0x1d44a5(0x177)]({
          selected: $(this)["data"](_0x1d44a5(0x126)),
        });
      }),
    (selString = []),
    selArr[_0x2798de(0xd8)]((_0x31dc1e) =>
      selString[_0x2798de(0x177)](_0x31dc1e[_0x2798de(0x126)]),
    ),
    (selections = selections["filter"](
      (_0x52b1b0) => _0x52b1b0[_0x2798de(0x1a2)] !== x,
    )),
    $(steps[x])
      [_0x2798de(0x1a9)](_0x2798de(0x194))
      [_0x2798de(0x1a9)](_0x2798de(0xf8))
      [_0x2798de(0xbf)](function () {
        const _0x2d88c9 = _0x2798de;
        skipTo = undefined;
        if (
          $(this)[_0x2d88c9(0xfe)](_0x2d88c9(0x1ba))["data"](_0x2d88c9(0x15e))
        )
          skipTo = $(this)
            [_0x2d88c9(0xfe)]("[data-skip-to]")
            [_0x2d88c9(0xc7)]("skip-to");
        else
          $(this)[_0x2d88c9(0xc7)]("skip-to") &&
            (skipTo = $(this)[_0x2d88c9(0xc7)](_0x2d88c9(0x15e)));
        if ($(this)[_0x2d88c9(0xc7)]("go-to"))
          (answer = $(this)[_0x2d88c9(0x1ad)]("data-go-to")),
            console["log"](answer, selections),
            selections["push"]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0x2d88c9(0x177)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0x2d88c9(0x1a6)](
                (_0x34bc65) => _0x34bc65[_0x2d88c9(0x1a2)] === x,
              )),
              (selections[objIndex][_0x2d88c9(0xaa)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x2d88c9(0x17c)] = x));
        else
          $(this)
            [_0x2d88c9(0xfe)](_0x2d88c9(0xa7))
            [_0x2d88c9(0xc7)](_0x2d88c9(0x111)) &&
            ((answer = $(this)
              [_0x2d88c9(0xfe)](_0x2d88c9(0xa7))
              [_0x2d88c9(0xc7)]("go-to")),
            selections["push"]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0x2d88c9(0x177)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0x2d88c9(0x1a6)](
                (_0xd1fb0e) => _0xd1fb0e[_0x2d88c9(0x1a2)] === x,
              )),
              (selections[objIndex][_0x2d88c9(0xaa)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x2d88c9(0x17c)] = x)));
      }),
    logicExtra
      ? ($(steps[x])
          [_0x2798de(0x1a9)](_0x2798de(0x194))
          [_0x2798de(0x1a9)](_0x2798de(0x19a))
          [_0x2798de(0xc7)](_0x2798de(0x147)) === !![] ||
          $(steps[x])
            [_0x2798de(0x1a9)](_0x2798de(0x197))
            [_0x2798de(0xc7)](_0x2798de(0x147)) === !![]) &&
        skip &&
        selections[_0x2798de(0xb8)](
          (_0x5edd47) => _0x5edd47[_0x2798de(0x1a2)] === x,
        )[_0x2798de(0x141)] > 0x0 &&
        textareaLength === 0x0 &&
        textInputLength === 0x0 &&
        emailInputLength === 0x0 &&
        checkboxInputLength === 0x0 &&
        setTimeout(
          function () {
            (next = !![]), nextStep(), selectionQuiz();
          },
          $(steps[x])["find"](_0x2798de(0x112))["data"](_0x2798de(0x18c)),
        )
      : $(steps[x])
          [_0x2798de(0x1a9)]("[data-radio-skip]:visible")
          [_0x2798de(0xc7)](_0x2798de(0x147)) === !![] &&
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
            [_0x2798de(0x1a9)]("[data-radio-delay]")
            [_0x2798de(0xc7)](_0x2798de(0x18c)),
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
  const _0xff1da9 = _0x830836;
  $(_0xff1da9(0x190))["hide"](),
    unfilledArr[_0xff1da9(0x141)] > 0x0 &&
      unfilledArr[_0xff1da9(0xd8)](function (_0x23927e) {
        const _0x5cf8fa = _0xff1da9;
        $(_0x5cf8fa(0x145) + _0x23927e[_0x5cf8fa(0x156)] + "\x22]")
          [_0x5cf8fa(0x12a)](_0x5cf8fa(0x190))
          [_0x5cf8fa(0x175)](),
          $(_0x5cf8fa(0x145) + _0x23927e["input"] + "\x22]")
            ["parents"]()
            [_0x5cf8fa(0xda)](_0x5cf8fa(0x190))
            ["fadeIn"](),
          $("textarea[name=\x22" + _0x23927e[_0x5cf8fa(0x156)] + "\x22]")
            [_0x5cf8fa(0x12a)](_0x5cf8fa(0x190))
            [_0x5cf8fa(0x175)](),
          $(_0x5cf8fa(0xf2) + _0x23927e[_0x5cf8fa(0x156)] + "\x22]")
            [_0x5cf8fa(0x12a)](_0x5cf8fa(0x190))
            [_0x5cf8fa(0x175)]();
      });
}
function resetInputErrorMessage(_0x6b696c) {
  const _0x5ceb51 = _0x830836;
  $(_0x5ceb51(0x145) + _0x6b696c + "\x22]")
    [_0x5ceb51(0x12a)]("[data-text=\x22error-message\x22]")
    ["hide"](),
    $(_0x5ceb51(0x145) + _0x6b696c + "\x22]")
      ["parents"]()
      [_0x5ceb51(0xda)]("[data-text=\x22error-message\x22]")
      [_0x5ceb51(0xb4)](),
    $(_0x5ceb51(0xf7) + _0x6b696c + "\x22]")
      ["siblings"](_0x5ceb51(0x190))
      ["hide"](),
    $("select[name=\x22" + _0x6b696c + "\x22]")
      [_0x5ceb51(0x12a)]("[data-text=\x22error-message\x22]")
      [_0x5ceb51(0xb4)]();
}
function increaseCurstep() {
  const _0x33f32d = _0x830836;
  countCard
    ? ((curStep = curStep + 0x1),
      $("[data-text=\x22total-steps\x22]")[_0x33f32d(0xd3)](
        steps[_0x33f32d(0x141)],
      ))
    : $(steps[x])[_0x33f32d(0xc7)](_0x33f32d(0x11c))
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    $(_0x33f32d(0x15a))[_0x33f32d(0xd3)](curStep);
}
function decreaseCurstep() {
  const _0x6525fb = _0x830836;
  countCard
    ? ((curStep = curStep - 0x1),
      $(_0x6525fb(0x157))[_0x6525fb(0xd3)](steps[_0x6525fb(0x141)]))
    : $(steps[x])[_0x6525fb(0xc7)]("card")
      ? (curStep = curStep - 0x0)
      : (curStep = curStep - 0x1),
    $(_0x6525fb(0x15a))[_0x6525fb(0xd3)](curStep);
}
$("[data-form=\x22submit-btn\x22]")["on"](
  _0x830836(0x103),
  function (_0xb6bad0) {
    const _0x1faa4b = _0x830836;
    console[_0x1faa4b(0x180)]("clicked\x20enter"),
      $(this)[_0x1faa4b(0xc7)](_0x1faa4b(0x100)) &&
        (redirectTo = $(this)[_0x1faa4b(0xc7)](_0x1faa4b(0x100))),
      !$(this)[_0x1faa4b(0xc7)]("new-tab") &&
        (newTab = $(this)[_0x1faa4b(0xc7)](_0x1faa4b(0x191))),
      (successCard = $(this)[_0x1faa4b(0xc7)](_0x1faa4b(0x187))),
      _0xb6bad0["preventDefault"](),
      _0xb6bad0[_0x1faa4b(0x162)](),
      logicExtra &&
        ($(this)[_0x1faa4b(0xf5)](_0x1faa4b(0x131), !![]),
        $(steps)
          [_0x1faa4b(0x1a9)](_0x1faa4b(0x119))
          [_0x1faa4b(0xf5)](_0x1faa4b(0xc4), ![])),
      localStorage[_0x1faa4b(0x160)](_0x1faa4b(0xe3)),
      fill
        ? ($(this)[_0x1faa4b(0xc7)](_0x1faa4b(0xfa))
            ? $(this)[_0x1faa4b(0xd9)](
                $(this)[_0x1faa4b(0xc7)](_0x1faa4b(0xfa)),
              )
            : ($(this)[_0x1faa4b(0xd9)](_0x1faa4b(0x14e)),
              $(this)["text"]("Please\x20wait...")),
          $(_0x1faa4b(0x17b))[_0x1faa4b(0x11e)](),
          $(_0x1faa4b(0xc3))[_0x1faa4b(0x141)] > 0x0 &&
            grecaptcha[_0x1faa4b(0x193)]()[_0x1faa4b(0x141)] === 0x0 &&
            (form[_0x1faa4b(0x1a9)](_0x1faa4b(0x17a))[_0x1faa4b(0xd3)](
              oldSubmitText,
            ),
            form[_0x1faa4b(0x1a9)](_0x1faa4b(0x17a))[_0x1faa4b(0xd9)](
              oldSubmitText,
            )),
          customError &&
            $("[data-text=\x22error-message\x22]")[_0x1faa4b(0xb4)]())
        : customError && displayErrorMessage();
  },
);
function nextStep() {
  const _0x39430d = _0x830836;
  customError
    ? ($("[data-text=\x22error-message\x22]")["hide"](),
      fill
        ? (x++,
          increaseCurstep(),
          (progress = x),
          x <= steps[_0x39430d(0x141)] - 0x1 &&
            (updateStep(), memory && saveFilledInput()))
        : displayErrorMessage())
    : (x++,
      increaseCurstep(),
      x > progress && (progress = x),
      x <= steps[_0x39430d(0x141)] - 0x1 &&
        (updateStep(), memory && saveFilledInput())),
    andLogic();
}
function backStep() {
  const _0x923bb6 = _0x830836;
  customError && $(_0x923bb6(0x190))[_0x923bb6(0xb4)](),
    decreaseCurstep(),
    x > 0x0 &&
      ($(progressbar[x])["removeClass"](_0x923bb6(0x169)),
      selections[_0x923bb6(0xb8)]((_0x4bac90) => _0x4bac90["skipTo"] === x)[
        _0x923bb6(0x141)
      ] > 0x0
        ? (x = parseInt(
            getSafe(
              () =>
                selections[_0x923bb6(0xb8)](
                  (_0x30ca23) => _0x30ca23[_0x923bb6(0xaa)] === x,
                )[0x0][_0x923bb6(0x17c)],
            ),
          ))
        : x--,
      updateStep()),
    ($(steps[x])
      [_0x923bb6(0x1a9)](_0x923bb6(0x19a))
      ["data"](_0x923bb6(0x147)) === !![] ||
      $(steps[x])
        [_0x923bb6(0x1a9)](_0x923bb6(0x194))
        ["find"]("[data-radio-skip]:visible")
        ["data"]("radio-skip") === !![] ||
      $(steps[x])
        [_0x923bb6(0x1a9)]("[data-answer][data-radio-skip]:visible")
        [_0x923bb6(0xc7)]("radio-skip") === !![]) &&
      ((all_data = all_data[_0x923bb6(0xb8)](
        (_0x556b5f) =>
          _0x556b5f[_0x923bb6(0x11b)] !==
          $(steps[x])
            [_0x923bb6(0x1a9)]("input[type=\x22radio\x22]:checked")
            [_0x923bb6(0x1ad)](_0x923bb6(0x17d)),
      )),
      $(
        "[data-input-field=\x22" +
          $(steps[x])
            [_0x923bb6(0x1a9)]("input[type=\x22radio\x22]:checked")
            [_0x923bb6(0x1ad)](_0x923bb6(0x17d)) +
          "\x22]",
      )[_0x923bb6(0xb4)](),
      $(steps[x])
        ["find"](_0x923bb6(0x128))
        [_0x923bb6(0xf5)](_0x923bb6(0x127), ![]),
      $(steps[x])
        [_0x923bb6(0x1a9)](_0x923bb6(0x125))
        [_0x923bb6(0x16a)](_0x923bb6(0xad)),
      validation());
}
weightedSelectionRange &&
  $(_0x830836(0x1b0))[_0x830836(0xbf)](function () {
    const _0x1b14b0 = _0x830836;
    $(this)[_0x1b14b0(0xf9)](
      "<div\x20data-range=\x22selection\x22\x20style=\x22display:none\x20!important\x22>" +
        $(this)["data"](_0x1b14b0(0x13f)) +
        _0x1b14b0(0xe7),
    );
  });
function selectionQuiz() {
  const _0x3dc2aa = _0x830836;
  if ($(this)["find"](_0x3dc2aa(0x159))) {
    $("[data-selection]")[_0x3dc2aa(0xb4)](),
      $(_0x3dc2aa(0xca))[_0x3dc2aa(0xb4)]();
    if (weightedSelection) {
      (selTotal = 0x0),
        selArr["forEach"](function (_0x86678d) {
          const _0x427af6 = _0x3dc2aa;
          selTotal = selTotal + _0x86678d[_0x427af6(0x126)];
        }),
        $("[data-text=\x22total-weight\x22]")[_0x3dc2aa(0xd3)](selTotal);
      if ($(_0x3dc2aa(0xd5) + selTotal + "\x22]")[_0x3dc2aa(0x141)] > 0x0)
        $("[data-selection=\x22" + selTotal + "\x22]")[_0x3dc2aa(0x175)]();
      else
        $("[data-range]:contains(" + selTotal + ")")
          ? $(_0x3dc2aa(0x132) + selTotal + ")")
              [_0x3dc2aa(0x104)]("[data-selection]")
              ["eq"](0x0)
              [_0x3dc2aa(0x199)]()
          : $(_0x3dc2aa(0x15c))[_0x3dc2aa(0x175)]();
    } else {
      let _0x4e4d49 = -0x1;
      $(_0x3dc2aa(0x1b0))[_0x3dc2aa(0xbf)](function (_0x11ac54) {
        const _0x32d3cd = _0x3dc2aa;
        $($(_0x32d3cd(0x1b0))[_0x11ac54])
          [_0x32d3cd(0xc7)](_0x32d3cd(0x13f))
          [_0x32d3cd(0x167)](selString[_0x32d3cd(0x18f)]()) &&
          (_0x4e4d49 = _0x11ac54);
      }),
        _0x4e4d49 > -0x1
          ? $($(_0x3dc2aa(0x1b0))[_0x4e4d49])["fadeIn"]()
          : $(_0x3dc2aa(0x15c))[_0x3dc2aa(0x175)]();
    }
  }
}
function triggerInputAllData() {
  const _0x56c334 = _0x830836;
  if (savedFilledInput && memory)
    savedFilledInput[_0x56c334(0xd8)]((_0x57ebaa) => {
      const _0x3bb02b = _0x56c334;
      var _0x1bb3f6 = $(
          _0x3bb02b(0x145) +
            _0x57ebaa["inputName"] +
            _0x3bb02b(0x10b) +
            _0x57ebaa[_0x3bb02b(0x12d)] +
            "\x22]",
        ),
        _0x572fb3 = $(_0x3bb02b(0x145) + _0x57ebaa[_0x3bb02b(0x182)] + "\x22]");
      console[_0x3bb02b(0x180)](
        _0x1bb3f6[_0x3bb02b(0xfe)]("[data-radio-skip]")[_0x3bb02b(0xc7)](
          _0x3bb02b(0x147),
        ),
      );
      if (_0x1bb3f6[_0x3bb02b(0x1ad)](_0x3bb02b(0x130)) !== _0x3bb02b(0xc1)) {
        if (
          _0x1bb3f6[_0x3bb02b(0x1ad)](_0x3bb02b(0x130)) === "radio" &&
          !_0x1bb3f6["parents"](_0x3bb02b(0xa8))["data"](_0x3bb02b(0x147))
        )
          _0x1bb3f6["click"](),
            _0x1bb3f6[_0x3bb02b(0x12a)](_0x3bb02b(0xb6))[_0x3bb02b(0x113)](
              _0x3bb02b(0xad),
            ),
            _0x1bb3f6["trigger"](_0x3bb02b(0x156));
        else
          _0x57ebaa["value"] === "on"
            ? (_0x572fb3["click"](),
              _0x572fb3[_0x3bb02b(0x12a)](_0x3bb02b(0x171))[_0x3bb02b(0x113)](
                "w--redirected-checked",
              ),
              _0x572fb3[_0x3bb02b(0x135)](_0x3bb02b(0x156)))
            : (console[_0x3bb02b(0x180)](
                _0x57ebaa[_0x3bb02b(0x182)],
                _0x57ebaa[_0x3bb02b(0x12d)],
              ),
              _0x572fb3[_0x3bb02b(0xd9)](_0x57ebaa[_0x3bb02b(0x12d)]),
              _0x572fb3["val"](_0x57ebaa[_0x3bb02b(0x12d)]),
              $("option[value=\x22" + _0x57ebaa[_0x3bb02b(0x12d)] + "\x22]")[
                _0x3bb02b(0xf5)
              ](_0x3bb02b(0x126), !![]),
              _0x572fb3[_0x3bb02b(0x135)]("input"),
              _0x572fb3[_0x3bb02b(0x135)](_0x3bb02b(0x142)));
      }
    });
  else
    _params &&
      (getParams(),
      searchQ[_0x56c334(0xd8)]((_0x35efcd) => {
        const _0x1b3501 = _0x56c334;
        if (
          $(
            "input[name=\x22" +
              _0x35efcd[_0x1b3501(0x182)] +
              _0x1b3501(0x10b) +
              _0x35efcd["value"] +
              "\x22]",
          )[_0x1b3501(0x1ad)]("type") !== _0x1b3501(0xc1)
        ) {
          if (
            $(
              _0x1b3501(0x145) +
                _0x35efcd[_0x1b3501(0x110)] +
                _0x1b3501(0x10b) +
                _0x35efcd[_0x1b3501(0xd9)] +
                "\x22]",
            )[_0x1b3501(0x1ad)](_0x1b3501(0x130)) === _0x1b3501(0x14c)
          )
            $(
              _0x1b3501(0x145) +
                _0x35efcd[_0x1b3501(0x110)] +
                _0x1b3501(0x10b) +
                _0x35efcd[_0x1b3501(0xd9)] +
                "\x22]",
            )[_0x1b3501(0x103)](),
              $(
                _0x1b3501(0x145) +
                  _0x35efcd["key"] +
                  _0x1b3501(0x10b) +
                  _0x35efcd["val"] +
                  "\x22]",
              )
                ["siblings"](".w-radio-input")
                [_0x1b3501(0x113)](_0x1b3501(0xad)),
              $(
                "input[name=\x22" +
                  _0x35efcd[_0x1b3501(0x110)] +
                  "\x22][value=\x22" +
                  _0x35efcd[_0x1b3501(0xd9)] +
                  "\x22]",
              )[_0x1b3501(0x135)]("input");
          else
            _0x35efcd[_0x1b3501(0xd9)] === "on"
              ? ($(_0x1b3501(0x145) + _0x35efcd[_0x1b3501(0x110)] + "\x22]")[
                  _0x1b3501(0x103)
                ](),
                $(_0x1b3501(0x145) + _0x35efcd[_0x1b3501(0x110)] + "\x22]")
                  ["siblings"](_0x1b3501(0x171))
                  [_0x1b3501(0x113)](_0x1b3501(0xad)),
                $(_0x1b3501(0x145) + _0x35efcd[_0x1b3501(0x110)] + "\x22]")[
                  _0x1b3501(0x135)
                ](_0x1b3501(0x156)))
              : ($("input[name=\x22" + _0x35efcd[_0x1b3501(0x110)] + "\x22]")[
                  _0x1b3501(0xd9)
                ](_0x35efcd[_0x1b3501(0xd9)]),
                $(_0x1b3501(0xf7) + _0x35efcd[_0x1b3501(0x110)] + "\x22]")[
                  _0x1b3501(0xd9)
                ](_0x35efcd["val"]),
                $(_0x1b3501(0xf2) + _0x35efcd[_0x1b3501(0x110)] + "\x22]")
                  [_0x1b3501(0x1a9)](
                    "option[value=\x22" + _0x35efcd["val"] + "\x22]",
                  )
                  ["prop"](_0x1b3501(0x126), !![]),
                $("input[name=\x22" + _0x35efcd[_0x1b3501(0x110)] + "\x22]")[
                  _0x1b3501(0x135)
                ](_0x1b3501(0x156)),
                $(_0x1b3501(0x145) + _0x35efcd[_0x1b3501(0x110)] + "\x22]")[
                  _0x1b3501(0x135)
                ](_0x1b3501(0x142)));
        }
      }));
}
$(_0x830836(0xf6))["on"]("click", function () {
  (next = !![]), nextStep(), selectionQuiz();
}),
  $(_0x830836(0x124))["on"]("click", function () {
    (next = ![]), (back = !![]), backStep();
  }),
  $(steps)
    [_0x830836(0x1a9)](":input")
    [_0x830836(0xd2)](_0x830836(0x173))
    ["on"](_0x830836(0x156), function (_0x5b8153) {
      validation(), andLogic();
    }),
  $(steps)
    [_0x830836(0x1a9)](_0x830836(0x128))
    ["on"](_0x830836(0x103), function () {
      (skip = !![]), validation();
    });
$(_0x830836(0x12e))[_0x830836(0xc7)](_0x830836(0x18b))
  ? $(_0x830836(0xa6))["removeClass"]("disabled")
  : $("[data-form=\x22custom-progress-indicator\x22]")[_0x830836(0x113)](
      _0x830836(0xfd),
    );
function clickableIndicator() {
  const _0x2d9cf2 = _0x830836;
  $("[data-clickable]")[_0x2d9cf2(0xc7)]("clickable") &&
    ($(_0x2d9cf2(0xef))[_0x2d9cf2(0x16a)](_0x2d9cf2(0x169)),
    $(_0x2d9cf2(0x19e))[_0x2d9cf2(0xc7)](_0x2d9cf2(0x18b))
      ? ((x = $(this)["index"]()), updateStep())
      : $(this)[_0x2d9cf2(0x165)]() <= progress &&
        ((x = $(this)[_0x2d9cf2(0x165)]()), updateStep())),
    $(_0x2d9cf2(0x15a))["text"](x + 0x1);
}
$(_0x830836(0xa6))["on"](_0x830836(0x103), clickableIndicator);
$(_0x830836(0x17b))[_0x830836(0xc7)]("debug-mode") &&
  ($(_0x830836(0xa7))[_0x830836(0xbf)](function () {
    const _0x4e6319 = _0x830836;
    $(this)[_0x4e6319(0xf9)](
      "<br>Data\x20Go\x20To\x20=\x20",
      $(this)["data"](_0x4e6319(0x111)),
    );
  }),
  $("[data-answer]")[_0x830836(0xbf)](function () {
    const _0x21abe5 = _0x830836;
    $(this)[_0x21abe5(0xf9)](
      _0x21abe5(0x101),
      $(this)[_0x21abe5(0xc7)](_0x21abe5(0xc9)),
    );
  }));
function resetFormly() {
  const _0x267391 = _0x830836;
  $("[data-form=\x22multistep\x22]")[_0x267391(0x135)](_0x267391(0x15b)),
    $(_0x267391(0x17b))
      [_0x267391(0xfe)]()
      [_0x267391(0x1a9)](".w-form-done")
      [_0x267391(0xb4)](),
    (x = 0x0),
    updateStep(),
    $(_0x267391(0x17b))[_0x267391(0x199)](),
    $("[data-form=\x22submit-btn\x22]")["text"](oldSubmitText),
    $(_0x267391(0x17a))[_0x267391(0xd9)](oldSubmitText),
    $(_0x267391(0x15a))["text"](0x1),
    $(_0x267391(0x17b))
      [_0x267391(0x1a9)](_0x267391(0x176))
      [_0x267391(0x12a)](_0x267391(0x171))
      [_0x267391(0x16a)](_0x267391(0xad));
}
$(document)[_0x830836(0xd7)](function (_0x5ef5e2, _0x16a4af, _0xd97302) {
  const _0xecc5cb = _0x830836;
  if (_0xd97302[_0xecc5cb(0x133)]["includes"](_0xecc5cb(0xae))) {
    const _0x28fbc7 = _0x16a4af[_0xecc5cb(0x114)] === 0xc8,
      _0x12494f = _0xecc5cb(0x196);
    redirectTo &&
      _0x28fbc7 &&
      (newTab
        ? window[_0xecc5cb(0x17f)](redirectTo, _0xecc5cb(0x10c))
        : setTimeout(() => {
            const _0x1644b5 = _0xecc5cb;
            location[_0x1644b5(0x1a8)] = redirectTo;
          }, redirectDelay)),
      _0x28fbc7 &&
        successCard !== "" &&
        $(_0xecc5cb(0xcb) + successCard + "\x22]")[_0xecc5cb(0x175)](),
      _0x28fbc7 &&
        formReset &&
        setTimeout(() => {
          resetFormly();
        }, resetDelay),
      !_0x28fbc7 &&
        ($(_0xecc5cb(0x17a))[_0xecc5cb(0xd9)](_0xecc5cb(0x14e)),
        $(_0xecc5cb(0x17a))[_0xecc5cb(0xd3)](_0xecc5cb(0x14e)));
  }
}),
  $(_0x830836(0x11a))["on"](_0x830836(0x103), function () {
    const _0x515d15 = _0x830836;
    var _0x1a7916 = $(this)
      [_0x515d15(0x104)]()
      [_0x515d15(0x1a9)](_0x515d15(0x10e))
      [_0x515d15(0xc7)](_0x515d15(0x115));
    setTimeout(function () {
      const _0x205db9 = _0x515d15;
      $(_0x205db9(0x145) + _0x1a7916 + "\x22]")["focus"]();
    }, 0x64),
      (back = !![]),
      (x = $(this)[_0x515d15(0xc7)](_0x515d15(0xb3)) - 0x1),
      updateStep(),
      countCard
        ? ((curStep = x + 0x1),
          $(_0x515d15(0x157))[_0x515d15(0xd3)](steps["length"]))
        : $(steps[x])["data"](_0x515d15(0x11c))
          ? (curStep = x + 0x0)
          : (curStep = x + 0x1),
      $("[data-text=\x22current-step\x22]")[_0x515d15(0xd3)](curStep),
      (back = ![]);
  }),
  $(_0x830836(0xf4))["on"](_0x830836(0x103), function () {
    const _0x576d77 = _0x830836;
    $(_0x576d77(0x17b))[_0x576d77(0x135)]("reset");
    let _0xf17f01 = $(this);
    $(this)[_0x576d77(0xd3)](_0x576d77(0x14e)),
      setTimeout(function () {
        const _0x1fd007 = _0x576d77;
        $(_0xf17f01)[_0x1fd007(0xd3)](oldResetText),
          $(_0xf17f01)[_0x1fd007(0xfe)](_0x1fd007(0x168))[_0x1fd007(0xb4)](),
          (x = 0x0),
          updateStep(),
          $(_0x1fd007(0x17b))[_0x1fd007(0x199)](),
          $(_0x1fd007(0x17a))[_0x1fd007(0xd3)](oldSubmitText),
          $(_0x1fd007(0x17a))[_0x1fd007(0xd9)](oldSubmitText),
          $(_0xf17f01)[_0x1fd007(0xd9)](oldSubmitText),
          $(_0x1fd007(0x15a))[_0x1fd007(0xd3)](0x1),
          $(_0x1fd007(0x17b))
            [_0x1fd007(0x1a9)](_0x1fd007(0x176))
            ["siblings"](_0x1fd007(0x171))
            [_0x1fd007(0x16a)](_0x1fd007(0xad));
      }, resetDelay);
  }),
  $(_0x830836(0x1a7))["on"](_0x830836(0x161), function (_0xc841d2) {
    const _0x25d1f5 = _0x830836;
    if (_0xc841d2[_0x25d1f5(0x10a)] === 0xd) {
      _0xc841d2[_0x25d1f5(0xee)](), _0xc841d2[_0x25d1f5(0x162)]();
      if (
        $(steps[x])[_0x25d1f5(0x1a9)](_0x25d1f5(0x170))["is"](_0x25d1f5(0xcd))
      )
        $(steps[x])
          [_0x25d1f5(0x1a9)]("textarea:focus")
          [_0x25d1f5(0xd9)](
            $(steps[x])[_0x25d1f5(0x1a9)]("textarea:focus")[_0x25d1f5(0xd9)]() +
              "\x0a",
          );
      else
        $(_0x25d1f5(0x146))[_0x25d1f5(0xc7)]("enter") &&
          fill &&
          totalSteps > curStep &&
          $(_0x25d1f5(0xf6))[0x0][_0x25d1f5(0x103)]();
    }
  }),
  $(_0x830836(0x1a7))[_0x830836(0xc2)](function (_0x185cd9) {
    const _0x37fbcf = _0x830836;
    (_0x185cd9[_0x37fbcf(0x13e)] || _0x185cd9["ctrlKey"]) &&
      _0x185cd9[_0x37fbcf(0x10a)] == 0xd &&
      (x >= steps[_0x37fbcf(0x141)] - 0x1 && fill
        ? $(steps[x])[_0x37fbcf(0x1a9)](_0x37fbcf(0x178))["click"]()
        : (_0x185cd9[_0x37fbcf(0xee)](), _0x185cd9[_0x37fbcf(0x162)]()));
  }),
  $(_0x830836(0x17b))
    ["find"](":input")
    ["on"]("change", function () {
      const _0x54dbeb = _0x830836;
      (all_data = all_data[_0x54dbeb(0xb8)](
        (_0x4fef2e) =>
          _0x4fef2e[_0x54dbeb(0x11b)] !==
          $(this)[_0x54dbeb(0x1ad)](_0x54dbeb(0x17d)),
      )),
        $(this)["attr"](_0x54dbeb(0x130)) === _0x54dbeb(0x174)
          ? $(this)["is"](":checked")
            ? all_data[_0x54dbeb(0x177)]({
                field: $(this)[_0x54dbeb(0x1ad)]("name"),
                value: $(this)
                  [_0x54dbeb(0x12a)](_0x54dbeb(0x123))
                  [_0x54dbeb(0xd3)](),
              })
            : $("[data-input-field=\x22" + $(this)["attr"]("name") + "\x22]")[
                _0x54dbeb(0xb4)
              ]()
          : (all_data[_0x54dbeb(0x177)]({
              field: $(this)[_0x54dbeb(0x1ad)](_0x54dbeb(0x17d)),
              value: $(this)[_0x54dbeb(0xd9)](),
            }),
            $(this)["val"]() !== "" &&
              resetInputErrorMessage($(this)[_0x54dbeb(0x1ad)]("name"))),
        all_data[_0x54dbeb(0xd8)](function (_0x480189) {
          const _0x1766a5 = _0x54dbeb;
          $(_0x1766a5(0x1a5) + _0x480189["field"] + "\x22]")["show"](),
            $(_0x1766a5(0x1a5) + _0x480189[_0x1766a5(0x11b)] + "\x22]")["text"](
              _0x480189[_0x1766a5(0x12d)],
            );
        });
    }),
  $(_0x830836(0x17b))
    [_0x830836(0x1a9)](_0x830836(0x170))
    ["on"](_0x830836(0x142), function () {
      const _0x2ccbf4 = _0x830836;
      $(this)[_0x2ccbf4(0xd9)]() !== "" &&
        resetInputErrorMessage($(this)[_0x2ccbf4(0x1ad)](_0x2ccbf4(0x17d))),
        (all_data = all_data[_0x2ccbf4(0xb8)](
          (_0x2ce1be) =>
            _0x2ce1be[_0x2ccbf4(0x11b)] !==
            $(this)[_0x2ccbf4(0x1ad)](_0x2ccbf4(0x17d)),
        )),
        all_data[_0x2ccbf4(0x177)]({
          field: $(this)[_0x2ccbf4(0x1ad)]("name"),
          value: $(this)[_0x2ccbf4(0xd9)](),
        }),
        all_data[_0x2ccbf4(0xd8)](function (_0x334c32) {
          const _0x11f5a5 = _0x2ccbf4;
          $(_0x11f5a5(0x1a5) + _0x334c32[_0x11f5a5(0x11b)] + "\x22]")[
            _0x11f5a5(0x199)
          ](),
            $("[data-input-field=\x22" + _0x334c32["field"] + "\x22]")[
              _0x11f5a5(0xd3)
            ](_0x334c32[_0x11f5a5(0x12d)]);
        });
    }),
  $(_0x830836(0x17b))
    [_0x830836(0x1a9)](_0x830836(0x150))
    ["on"](_0x830836(0x142), function () {
      const _0x54cebe = _0x830836;
      $(this)[_0x54cebe(0xd9)]() !== "" &&
        resetInputErrorMessage($(this)[_0x54cebe(0x1ad)](_0x54cebe(0x17d)));
      var _0x4330fd = $(this)["data"](_0x54cebe(0xbd));
      (all_data = all_data[_0x54cebe(0xb8)](
        (_0x397dc1) =>
          _0x397dc1[_0x54cebe(0x11b)] !==
          $(this)[_0x54cebe(0x1ad)](_0x54cebe(0x17d)),
      )),
        all_data[_0x54cebe(0x177)]({
          field: $(this)[_0x54cebe(0x1ad)](_0x54cebe(0x17d)),
          value: _0x4330fd
            ? $(this)["find"](_0x54cebe(0xe6))[_0x54cebe(0xd3)]()
            : $(this)[_0x54cebe(0xd9)](),
        }),
        all_data[_0x54cebe(0xd8)](function (_0x3997f9) {
          const _0x5debaa = _0x54cebe;
          $(_0x5debaa(0x1a5) + _0x3997f9[_0x5debaa(0x11b)] + "\x22]")[
            _0x5debaa(0x199)
          ](),
            $(_0x5debaa(0x1a5) + _0x3997f9[_0x5debaa(0x11b)] + "\x22]")[
              _0x5debaa(0xd3)
            ](_0x3997f9["value"]);
        });
    }),
  updateStep(),
  triggerInputAllData(),
  $(_0x830836(0x13a))[_0x830836(0xbf)](function () {
    const _0x31d85f = _0x830836,
      _0x3bdb33 = $(this)[_0x31d85f(0x1a9)]("[data-cms-select=text]"),
      _0x1b99b3 = [];
    console[_0x31d85f(0x180)](_0x1b99b3),
      _0x3bdb33[_0x31d85f(0xbf)](function () {
        const _0x57a9c8 = _0x31d85f;
        _0x1b99b3[_0x57a9c8(0x177)]($(this)[_0x57a9c8(0xd3)]()["trim"]());
      });
    const _0x3cbce2 = $(this)[_0x31d85f(0x12a)]("[data-cms-select=input]");
    $[_0x31d85f(0xbf)](_0x1b99b3, function (_0x4de6f8, _0x202d94) {
      const _0x24b449 = _0x31d85f,
        _0x29a6de = $(_0x24b449(0x192))
          [_0x24b449(0xd9)](_0x202d94)
          [_0x24b449(0xd3)](_0x202d94);
      _0x3cbce2["append"](_0x29a6de);
    });
  });
function cloneRemove() {
  const _0x252e06 = _0x830836;
  $(_0x252e06(0x1b3))[_0x252e06(0xbf)](function () {
    const _0x23957c = _0x252e06;
    $(this)[_0x23957c(0x1a9)](_0x23957c(0x16c))[_0x23957c(0x141)] < 0x2
      ? $(this)["find"](_0x23957c(0xd4))[_0x23957c(0xb4)]()
      : $(this)["find"](_0x23957c(0xd4))[_0x23957c(0x199)]();
  });
}
function cloneRemoveInput() {
  const _0x569141 = _0x830836;
  $("[data-clone-input-wrapper]")[_0x569141(0xbf)](function () {
    const _0x4ce1ed = _0x569141;
    $(this)[_0x4ce1ed(0x1a9)](_0x4ce1ed(0xc6))[_0x4ce1ed(0x141)] < 0x2
      ? $(this)[_0x4ce1ed(0x1a9)](_0x4ce1ed(0xfc))[_0x4ce1ed(0xb4)]()
      : $(this)
          [_0x4ce1ed(0x1a9)]("[data-form=\x22remove-input-clone\x22]")
          ["show"]();
  });
}
$(_0x830836(0xd4))["on"](_0x830836(0x103), function () {
  const _0x3729c4 = _0x830836,
    _0xcad4dc =
      $(this)["parents"](_0x3729c4(0x16c))["length"] > 0x0
        ? $(this)["parents"](_0x3729c4(0x16c))[_0x3729c4(0x165)]()
        : $(this)[_0x3729c4(0xfe)](_0x3729c4(0xb1))[_0x3729c4(0x165)](),
    _0x1e6e82 =
      $(this)[_0x3729c4(0xfe)]("[data-clone]")[_0x3729c4(0x141)] > 0x0
        ? $(this)
            [_0x3729c4(0xfe)](_0x3729c4(0x16c))
            [_0x3729c4(0xc7)](_0x3729c4(0x155))
        : $(this)["parents"](_0x3729c4(0xb1))["data"]("display");
  $(_0x3729c4(0xdb) + _0x1e6e82 + "\x22]")
    ["eq"](_0xcad4dc)
    [_0x3729c4(0xa5)](),
    $(_0x3729c4(0x122) + _0x1e6e82 + "\x22]")
      ["eq"](_0xcad4dc)
      [_0x3729c4(0xa5)](),
    cloneRemove(),
    validation();
}),
  $(_0x830836(0xfc))["on"](_0x830836(0x103), function () {
    const _0x31ec2c = _0x830836;
    let _0x10e0f1 = $(this)
      [_0x31ec2c(0x12a)]()
      [_0x31ec2c(0x1ad)](_0x31ec2c(0x17d));
    $(this)["parent"]("[data-clone-input]")[_0x31ec2c(0xa5)](),
      $("[data-input-field=\x22" + _0x10e0f1 + "\x22]")
        [_0x31ec2c(0x104)]("[data-display-input]")
        ["remove"](),
      cloneRemove(),
      validation();
  }),
  $(_0x830836(0xd1))["on"](_0x830836(0x103), function () {
    const _0x2c79ca = _0x830836;
    let _0x172dd6 = $(this)[_0x2c79ca(0xc7)](_0x2c79ca(0x14b));
    var _0x64e05a = $(_0x2c79ca(0xdb) + _0x172dd6 + "\x22]")
        ["eq"](0x0)
        [_0x2c79ca(0x155)](!![]),
      _0x3cfe93 = $(_0x2c79ca(0x122) + _0x172dd6 + "\x22]")
        ["eq"](0x0)
        ["clone"](!![]);
    let _0x26dbe5 = "";
    $(this)[_0x2c79ca(0x1a9)](_0x2c79ca(0xd4))[_0x2c79ca(0x199)](),
      cloneRemove(),
      _0x64e05a["find"]("[data-clone-input]")
        [_0x2c79ca(0x1a9)](_0x2c79ca(0x156))
        ["val"](""),
      _0x64e05a[_0x2c79ca(0x1a9)](_0x2c79ca(0xc6))
        [_0x2c79ca(0xd2)](":first")
        [_0x2c79ca(0xa5)](),
      _0x3cfe93["find"](_0x2c79ca(0x152))
        [_0x2c79ca(0xd2)](":first")
        ["remove"](),
      _0x64e05a["find"](_0x2c79ca(0x156))["each"](function () {
        const _0x5dc60f = _0x2c79ca;
        if (
          $(this)[_0x5dc60f(0x144)](_0x5dc60f(0xc6))[_0x5dc60f(0x141)] > 0x0
        ) {
          let _0x1701f9 = 0x0;
          const _0xca005e = $(this)
            [_0x5dc60f(0x144)]("[data-clone-input]")
            [_0x5dc60f(0xc7)](_0x5dc60f(0x19f));
          console[_0x5dc60f(0x180)](
            $(this)
              ["closest"]("[data-clone-input]")
              [_0x5dc60f(0xc7)](_0x5dc60f(0x19f)),
            this[_0x5dc60f(0x17d)],
          ),
            $(_0x5dc60f(0xe9) + _0xca005e + _0x5dc60f(0x118))[_0x5dc60f(0xbf)](
              function () {
                const _0x264dd6 = _0x5dc60f,
                  _0x1c7be2 = $(this)[_0x264dd6(0x1ad)](_0x264dd6(0x17d));
                if (_0x1c7be2 && _0x1c7be2["startsWith"](_0x264dd6(0x195))) {
                  const _0x42d52e = parseInt(_0x1c7be2["split"]("-")[0x1]);
                  !isNaN(_0x42d52e) &&
                    _0x42d52e > _0x1701f9 &&
                    (_0x1701f9 = _0x42d52e);
                }
              },
            ),
            _0x1701f9++,
            (_0x26dbe5 = this[_0x5dc60f(0x17d)] + "-" + _0x1701f9),
            console[_0x5dc60f(0x180)](_0xca005e, _0x26dbe5);
        } else
          _0x26dbe5 =
            this["name"] +
            "-" +
            (parseInt(
              $(_0x5dc60f(0xdb) + _0x172dd6 + "\x22]")
                [_0x5dc60f(0xb9)]()
                [_0x5dc60f(0x165)](),
            ) +
              0x1);
        $(this)[_0x5dc60f(0xd9)](""),
          $(this)[_0x5dc60f(0x1ad)]("name", _0x26dbe5),
          $(this)[_0x5dc60f(0x1ad)]("data-name", _0x26dbe5);
      }),
      _0x3cfe93[_0x2c79ca(0x1a9)](_0x2c79ca(0x10e))[_0x2c79ca(0xbf)](
        function () {
          const _0x30947c = _0x2c79ca;
          if ($(this)[_0x30947c(0xc7)](_0x30947c(0x115))) {
            let _0x4b8af3 = 0x0;
            const _0x4e8b9e = $(this)
              [_0x30947c(0xc7)](_0x30947c(0x115))
              [_0x30947c(0xc0)]("-")[0x0];
            $(
              _0x30947c(0x122) +
                _0x172dd6 +
                "\x22]\x20[data-input-field^=\x22" +
                _0x4e8b9e +
                "\x22]",
            )[_0x30947c(0xbf)](function () {
              const _0x5dd913 = _0x30947c,
                _0x630a78 = $(this)[_0x5dd913(0x1ad)](_0x5dd913(0x1b5)),
                _0x306687 = parseInt(_0x630a78[_0x5dd913(0xc0)]("-")[0x1]);
              !isNaN(_0x306687) &&
                _0x306687 > _0x4b8af3 &&
                (_0x4b8af3 = _0x306687);
            }),
              _0x4b8af3++;
            const _0x4951a8 = _0x4e8b9e + "-" + _0x4b8af3;
            console[_0x30947c(0x180)](_0x4951a8),
              $(this)[_0x30947c(0x1ad)](_0x30947c(0x1b5), _0x4951a8);
          }
        },
      ),
      $(_0x2c79ca(0x10f) + _0x172dd6 + "\x22]")[_0x2c79ca(0xf9)](_0x64e05a),
      $(_0x2c79ca(0x149) + _0x172dd6 + "\x22]")[_0x2c79ca(0xf9)](_0x3cfe93),
      $(_0x2c79ca(0x116) + _0x172dd6 + "\x22]")[_0x2c79ca(0xbf)](function () {
        const _0x18c9d0 = _0x2c79ca;
        $(this)["text"](
          $(this)
            [_0x18c9d0(0xfe)]("[data-clone=\x22" + _0x172dd6 + "\x22]")
            [_0x18c9d0(0x165)]() + 0x1,
        );
      }),
      $(_0x2c79ca(0x13d) + _0x172dd6 + "\x22]")[_0x2c79ca(0xbf)](function () {
        const _0x584838 = _0x2c79ca;
        $(this)["text"](
          $(this)
            [_0x584838(0xfe)](_0x584838(0x122) + _0x172dd6 + "\x22]")
            [_0x584838(0x165)]() + 0x1,
        );
      }),
      validation();
  }),
  $("[data-add-new-input]")["on"](_0x830836(0x103), function () {
    const _0x2d596b = _0x830836,
      _0x27b3f4 = $(this)
        [_0x2d596b(0xfe)](_0x2d596b(0x16c))
        [_0x2d596b(0x165)]();
    let _0xed604b = $(this)[_0x2d596b(0xc7)](_0x2d596b(0x1ab));
    var _0x180075 = $("[data-clone-input=\x22" + _0xed604b + "\x22]")
        ["eq"](0x0)
        [_0x2d596b(0x155)](!![]),
      _0x3d1d81 = $(_0x2d596b(0x189) + _0xed604b + "\x22]")
        ["eq"](0x0)
        [_0x2d596b(0x155)](!![]);
    $(this)[_0x2d596b(0x1a9)](_0x2d596b(0xfc))[_0x2d596b(0x199)](),
      cloneRemoveInput();
    let _0x5201f0 = 0x0;
    $(_0x2d596b(0xe9) + _0xed604b + _0x2d596b(0x118))[_0x2d596b(0xbf)](
      function () {
        const _0x27858e = _0x2d596b,
          _0x1ffaea = $(this)[_0x27858e(0x1ad)](_0x27858e(0x17d));
        if (_0x1ffaea && _0x1ffaea["startsWith"](_0x27858e(0x195))) {
          const _0x167c11 = parseInt(_0x1ffaea[_0x27858e(0xc0)]("-")[0x1]);
          !isNaN(_0x167c11) && _0x167c11 > _0x5201f0 && (_0x5201f0 = _0x167c11);
        }
      },
    ),
      _0x5201f0++,
      _0x180075["find"](_0x2d596b(0x156))[_0x2d596b(0xbf)](function () {
        const _0x59ca3e = _0x2d596b;
        let _0x3c02d6 = _0x59ca3e(0x195) + _0x5201f0;
        $(this)[_0x59ca3e(0xd9)](""),
          $(this)["attr"](_0x59ca3e(0x17d), _0x3c02d6),
          $(this)["attr"](_0x59ca3e(0x188), _0x3c02d6);
      }),
      _0x3d1d81[_0x2d596b(0x1a9)](_0x2d596b(0x10e))["each"](function () {
        const _0x31a3b8 = _0x2d596b;
        $(this)[_0x31a3b8(0x1ad)](
          _0x31a3b8(0x1b5),
          _0x31a3b8(0x195) + _0x5201f0,
        );
      }),
      $(this)
        [_0x2d596b(0x12a)](_0x2d596b(0xaf) + _0xed604b + "\x22]")
        [_0x2d596b(0xf9)](_0x180075),
      $("[data-display]")
        ["eq"](_0x27b3f4)
        [_0x2d596b(0x1a9)](_0x2d596b(0xfb) + _0xed604b + "\x22]")
        [_0x2d596b(0xf9)](_0x3d1d81),
      $(_0x2d596b(0x16b) + _0xed604b + "\x22]")[_0x2d596b(0xbf)](function () {
        const _0x4e61bc = _0x2d596b;
        $(this)[_0x4e61bc(0xd3)](
          $(this)
            ["parents"](_0x4e61bc(0xe9) + _0xed604b + "\x22]")
            [_0x4e61bc(0x165)]() + 0x1,
        );
      }),
      $("[data-display-input-index=\x22" + _0xed604b + "\x22]")[
        _0x2d596b(0xbf)
      ](function () {
        const _0x803dbf = _0x2d596b;
        $(this)[_0x803dbf(0xd3)](
          $(this)
            [_0x803dbf(0xfe)](_0x803dbf(0x189) + _0xed604b + "\x22]")
            [_0x803dbf(0x165)]() + 0x1,
        );
      }),
      validation();
  }),
  $("[data-remove-upload]")["on"]("click", function () {
    const _0x4e27b9 = _0x830836,
      _0x58825c = $(this)[_0x4e27b9(0xc7)](_0x4e27b9(0xc5));
    $("input[name=\x22" + _0x58825c + "\x22]")["val"](""), validation();
  });
function andLogic() {
  const _0x205176 = _0x830836;
  conditionalResult &&
    (steps["eq"](x)[_0x205176(0x1a9)](_0x205176(0x1bb))[_0x205176(0xb4)](),
    console[_0x205176(0x180)](_0x205176(0xbe)),
    steps["eq"](x)
      [_0x205176(0x1a9)](_0x205176(0x1bb))
      ["each"](function () {
        const _0x546a17 = _0x205176;
        function _0x5ad51f(_0x89dc2f) {
          const _0x378a6c = _0x89dc2f["split"]("&"),
            _0x1a5980 = [];
          return (
            _0x378a6c["forEach"]((_0x67e6be) => {
              const _0x573027 = _0x2460,
                [_0x33c80b, _0x50dbc1] = _0x67e6be[_0x573027(0xc0)]("=");
              _0x1a5980[_0x573027(0x177)]({
                field: _0x33c80b,
                value: _0x50dbc1,
              });
            }),
            _0x1a5980
          );
        }
        const _0x358bda = $(this)["attr"](_0x546a17(0xeb));
        console[_0x546a17(0x180)](_0x358bda);
        const _0x5bf048 = _0x5ad51f(_0x358bda);
        function _0x444162(_0x308e6f, _0x118cea) {
          const _0x19c23b = _0x546a17;
          return _0x118cea[_0x19c23b(0x129)]((_0x5bc2f1, _0x2020c4) => {
            const _0x572e97 = _0x19c23b;
            if (
              _0x308e6f[0x0] &&
              _0x5bc2f1[_0x572e97(0x11b)] === _0x308e6f[0x0][_0x572e97(0x11b)]
            )
              return _0x308e6f[_0x572e97(0x163)](
                (_0x58a66b, _0x15544d) =>
                  _0x118cea[_0x2020c4 + _0x15544d] &&
                  _0x118cea[_0x2020c4 + _0x15544d]["field"] ===
                    _0x58a66b[_0x572e97(0x11b)] &&
                  _0x118cea[_0x2020c4 + _0x15544d][_0x572e97(0x12d)] ===
                    _0x58a66b[_0x572e97(0x12d)],
              );
            return ![];
          });
        }
        const _0x22a265 = _0x444162(_0x5bf048, all_data);
        _0x22a265 ? $(this)[_0x546a17(0x199)]() : $(this)[_0x546a17(0xb4)]();
      }));
}
scrollTop(), cloneRemove(), cloneRemoveInput();
