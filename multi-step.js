//30th Oct 2023 -- forced updated - 1
//Bug fix:
//1. Validation for input type password

const _0x3d52b8 = _0x3072;
(function (_0x30ed98, _0x3d98d9) {
  const _0xffa566 = _0x3072,
    _0x4859a0 = _0x30ed98();
  while (!![]) {
    try {
      const _0x90460d =
        -parseInt(_0xffa566(0x16e)) / 0x1 +
        parseInt(_0xffa566(0x195)) / 0x2 +
        parseInt(_0xffa566(0x136)) / 0x3 +
        parseInt(_0xffa566(0x14f)) / 0x4 +
        (-parseInt(_0xffa566(0xd4)) / 0x5) *
          (-parseInt(_0xffa566(0x119)) / 0x6) +
        (-parseInt(_0xffa566(0x114)) / 0x7) *
          (parseInt(_0xffa566(0x1ae)) / 0x8) +
        -parseInt(_0xffa566(0x15a)) / 0x9;
      if (_0x90460d === _0x3d98d9) break;
      else _0x4859a0["push"](_0x4859a0["shift"]());
    } catch (_0x41bb07) {
      _0x4859a0["push"](_0x4859a0["shift"]());
    }
  }
})(_0x5a91, 0xf1aa9);
let x = 0x0,
  curStep = 0x0,
  steps = $("[data-form=\x22step\x22]"),
  progressbarClone = $(_0x3d52b8(0x19d))[_0x3d52b8(0xa7)](),
  progressbar,
  countCard = !![],
  weightedSelection = $(_0x3d52b8(0xf8))[_0x3d52b8(0xaa)](_0x3d52b8(0x190)),
  weightedSelectionRange = $(_0x3d52b8(0x13c))[_0x3d52b8(0xaa)](
    "weighted-selection-range",
  ),
  selectMultiple = $(_0x3d52b8(0xd5))[_0x3d52b8(0xaa)]("select-multiple"),
  customError = $(_0x3d52b8(0xe8))[_0x3d52b8(0xaa)](_0x3d52b8(0xf5)),
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
  reinitIX = $("[data-reinit]")[_0x3d52b8(0xaa)](_0x3d52b8(0xaf)),
  textareaLength = 0x0,
  textInputLength = 0x0,
  emailInputLength = 0x0,
  selectInputLength = 0x0,
  checkboxInputLength = 0x0,
  filledInput = [],
  savedFilledInput = [],
  memory = $("[data-memory]")[_0x3d52b8(0xaa)](_0x3d52b8(0x120)),
  quiz = $(_0x3d52b8(0x17f))[_0x3d52b8(0xaa)](_0x3d52b8(0xc6)),
  progress = 0x0;
const urlFormly = new URL(window["location"]["href"]);
let _params = $(_0x3d52b8(0xed))["data"]("query-param"),
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
  logicExtra = $(_0x3d52b8(0x10c))["data"](_0x3d52b8(0x11e)),
  oldSubmitText = $(_0x3d52b8(0xe2))[_0x3d52b8(0x133)](),
  oldResetText = $("[data-btn=\x22reset\x22]")[_0x3d52b8(0xae)](),
  formReset = $(_0x3d52b8(0x10c))[_0x3d52b8(0xaa)](_0x3d52b8(0x14a)),
  successCard = "",
  redirectTo = "",
  totalSteps = 0x0,
  checkCount = 0x0,
  resetDelay = $("[data-reset-delay]")[_0x3d52b8(0xaa)](_0x3d52b8(0x102))
    ? $(_0x3d52b8(0x1a9))[_0x3d52b8(0xaa)](_0x3d52b8(0x102))
    : 0x7d0,
  redirectDelay = $(_0x3d52b8(0x12a))[_0x3d52b8(0xaa)]("redirect-delay")
    ? $(_0x3d52b8(0x12a))["data"](_0x3d52b8(0x14e))
    : 0x7d0,
  newTab = !![],
  unfilledArr = [],
  phoneFormat = $(_0x3d52b8(0x10c))[_0x3d52b8(0xaa)]("phone-validation"),
  scrollToTop = $("[data-form=\x22multistep\x22]")["data"](_0x3d52b8(0xcf)),
  conditionalResult =
    $(_0x3d52b8(0x172))[_0x3d52b8(0xaa)](_0x3d52b8(0xe5)) === _0x3d52b8(0xb3),
  scrollTopOffset = parseInt(
    $(_0x3d52b8(0x10c))[_0x3d52b8(0xaa)](_0x3d52b8(0x142)),
  ),
  notRobot = !![],
  all_data = [];
const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
savedFilledInput = JSON[_0x3d52b8(0xc2)](
  localStorage[_0x3d52b8(0xe6)](_0x3d52b8(0x123)),
);
var ogCloneArr = [];
$(_0x3d52b8(0x13d))[_0x3d52b8(0xbe)](function () {
  const _0x461633 = _0x3d52b8;
  ogCloneArr[_0x461633(0x125)]({
    name: $(this)[_0x461633(0xaa)]("clone"),
    element: $(this)[_0x461633(0xa7)](!![]),
    display: $(
      _0x461633(0x118) + $(this)[_0x461633(0xaa)](_0x461633(0xa7)) + "\x22]",
    )
      ["eq"](0x0)
      ["clone"](!![]),
  });
});
$(_0x3d52b8(0xff))[_0x3d52b8(0x11f)] > 0x0 && (notRobot = ![]);
function recaptcha(_0x25d9a7) {
  notRobot = !![];
}
$(_0x3d52b8(0x111))[_0x3d52b8(0x11f)] > 0x0 &&
  (countCard = $(_0x3d52b8(0x111))[_0x3d52b8(0xaa)](_0x3d52b8(0xc9)));
$(_0x3d52b8(0x191))[_0x3d52b8(0x104)](),
  $(progressbarClone)[_0x3d52b8(0x18d)](_0x3d52b8(0x100)),
  $(_0x3d52b8(0x17e))[_0x3d52b8(0xb8)]()["remove"](),
  $("[data-form=\x22submit-btn\x22]")[_0x3d52b8(0x104)](),
  $("[data-form-ms=\x22submit-btn\x22]")[_0x3d52b8(0x104)](),
  steps[_0x3d52b8(0xbe)](function () {
    const _0x8caf26 = _0x3d52b8;
    $(_0x8caf26(0x17e))[_0x8caf26(0x186)](
      progressbarClone[_0x8caf26(0xa7)](!![], !![]),
    );
  }),
  $(_0x3d52b8(0x141))[_0x3d52b8(0x104)]();
countCard
  ? ((curStep = curStep + 0x1),
    (totalSteps = steps[_0x3d52b8(0x11f)]),
    $(_0x3d52b8(0xec))[_0x3d52b8(0xae)](totalSteps))
  : ($(steps[x])["data"](_0x3d52b8(0x175))
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    (totalSteps = $(_0x3d52b8(0x10e))["length"]),
    $(_0x3d52b8(0xec))[_0x3d52b8(0xae)](totalSteps),
    $("[data-form=\x22step\x22][data-card]")[_0x3d52b8(0xbe)](function () {
      const _0x162a05 = _0x3d52b8;
      $($(_0x162a05(0x19d))[$(this)["index"]()])["hide"]();
    }));
(progressbar = $(_0x3d52b8(0x17e))["children"]()),
  $(_0x3d52b8(0x19d))["on"]("click", clickableIndicator),
  $("[data-text=\x22current-step\x22]")[_0x3d52b8(0xae)](curStep),
  steps[_0x3d52b8(0x104)](),
  $(_0x3d52b8(0x19c))[_0x3d52b8(0x104)](),
  $(_0x3d52b8(0x12f))["each"](function () {
    const _0x552d9f = _0x3d52b8;
    $(this)[_0x552d9f(0x18e)](_0x552d9f(0xbb), "button");
  });
function getParams() {
  const _0x15f8a3 = _0x3d52b8;
  urlFormly[_0x15f8a3(0x15d)][_0x15f8a3(0x106)](
    function (_0x1406fc, _0x1126a8) {
      const _0x295ac3 = _0x15f8a3;
      searchQ[_0x295ac3(0x125)]({ val: _0x1406fc, key: _0x1126a8 });
    },
  );
}
function getSafe(_0x3044ec, _0x1e67c0) {
  try {
    return _0x3044ec();
  } catch (_0x5b02ad) {
    return _0x1e67c0;
  }
}
function phoneAutoFormat(_0x5886cd) {
  var _0x35f35e = "";
  return function (_0x1769ad) {
    const _0x19b122 = _0x3072;
    var _0x22d047 = "",
      _0x5f4023 = _0x1769ad[_0x19b122(0xb9)](/\D/g, ""),
      _0x732fbc = 0x0,
      _0x4a4736 = 0x0;
    while (
      _0x732fbc < _0x5f4023[_0x19b122(0x11f)] &&
      _0x4a4736 < _0x5886cd[_0x19b122(0x11f)]
    ) {
      _0x5886cd[_0x4a4736] === "x"
        ? ((_0x22d047 += _0x5f4023[_0x732fbc]), _0x732fbc++)
        : (_0x22d047 += _0x5886cd[_0x4a4736]),
        _0x4a4736++;
    }
    if (_0x1769ad[_0x19b122(0x11f)] < _0x35f35e["length"]) {
      var _0x5ab876 = _0x5886cd[_0x19b122(0x1b5)](_0x4a4736);
      _0x22d047 += _0x5ab876[_0x19b122(0xb9)](/x/g, "");
    }
    return (_0x35f35e = _0x22d047), _0x22d047;
  };
}
function validateURL(_0x4cad82) {
  const _0x30e5dd = _0x3d52b8;
  return urlPattern[_0x30e5dd(0x173)](_0x4cad82) ? !![] : ![];
}
quiz &&
  steps[_0x3d52b8(0xbe)](function () {
    const _0x4a1d60 = _0x3d52b8;
    $(this)[_0x4a1d60(0xb8)]()[_0x4a1d60(0x18e)](_0x4a1d60(0x156), !![]),
      $(this)[_0x4a1d60(0xb8)]()[_0x4a1d60(0x18e)](_0x4a1d60(0x132), 0xfa);
  });
function disableBtn(_0x51450f) {
  const _0x403ecd = _0x3d52b8;
  (fill = ![]),
    !customError &&
      ($(_0x403ecd(0x108))[_0x403ecd(0x17a)]({
        opacity: _0x403ecd(0xfb),
        "pointer-events": _0x403ecd(0x196),
      }),
      $(_0x403ecd(0x108))[_0x403ecd(0xc5)](_0x403ecd(0x170)),
      $(_0x403ecd(0xe2))[_0x403ecd(0x17a)]({
        opacity: _0x403ecd(0xfb),
        "pointer-events": _0x403ecd(0x196),
      }),
      $(_0x403ecd(0xe2))[_0x403ecd(0xc5)](_0x403ecd(0x170)),
      $("[data-form-ms=\x22submit-btn\x22]")[_0x403ecd(0x17a)]({
        opacity: "0.4",
        "pointer-events": _0x403ecd(0x196),
      }),
      $(_0x403ecd(0x154))["addClass"](_0x403ecd(0x170)));
}
function enableBtn() {
  const _0x5b17b1 = _0x3d52b8;
  (fill = !![]),
    $(_0x5b17b1(0x108))[_0x5b17b1(0x17a)]({
      "pointer-events": _0x5b17b1(0x9b),
      opacity: "1",
    }),
    $(_0x5b17b1(0x108))[_0x5b17b1(0x18d)](_0x5b17b1(0x170)),
    $(_0x5b17b1(0xe2))[_0x5b17b1(0x17a)]({
      "pointer-events": _0x5b17b1(0x9b),
      opacity: "1",
    }),
    $(_0x5b17b1(0xe2))[_0x5b17b1(0x18d)](_0x5b17b1(0x170)),
    $(_0x5b17b1(0x154))["css"]({
      "pointer-events": _0x5b17b1(0x9b),
      opacity: "1",
    }),
    $(_0x5b17b1(0x154))[_0x5b17b1(0x18d)]("disabled");
}
function _0x5a91() {
  const _0x31e78b = [
    "[data-answer][data-radio-skip]:visible",
    ":input[type=\x22text\x22][required]",
    "[data-text=\x22total-steps\x22]",
    "[data-query-param]",
    "href",
    "field",
    "removeItem",
    "click",
    "[data-form=\x22remove-input-clone\x22]",
    ":input[required]",
    "input-field",
    "custom-error-message",
    "[data-answer=\x22",
    "change",
    "[data-weighted-selection]",
    "preventDefault",
    "[data-skip-to]",
    "0.4",
    "option[value=\x22$(this).val()\x22]",
    "value",
    "[data-answer]:visible",
    "div.g-recaptcha",
    "current",
    "some",
    "reset-delay",
    "body",
    "hide",
    "[data-form=\x22remove-clone\x22]",
    "forEach",
    "[data-selection]",
    "[data-form=\x22next-btn\x22]",
    "require",
    "Please\x20wait...",
    "not",
    "[data-form=\x22multistep\x22]",
    "startsWith",
    "[data-form=\x22step\x22]:not([data-card=\x22true\x22])",
    "focus",
    "[data-radio-skip]:visible",
    "[data-count-card]",
    ".w-form-formradioinput",
    "Webflow",
    "101843IJRpgl",
    "input[type=\x22radio\x22]",
    "[data-clone-input-wrapper=\x22",
    "[data-add-new]",
    "[data-display=\x22",
    "12MIJGyC",
    ":input[type=\x22url\x22][required]",
    "offset",
    ":input[type=\x22checkbox\x22][required]:checked",
    "[data-form=\x22submit-btn\x22]:visible",
    "logic-extra",
    "length",
    "memory",
    "findIndex",
    "file",
    "filledInput",
    "url",
    "push",
    "[data-form=\x22next-btn\x22][data-submit-show]",
    "closest",
    "[data-display-input-index=\x22",
    "span",
    "[data-redirect-delay]",
    "debug-mode",
    "checked",
    "Enter",
    "[data-selection=\x22",
    "[data-form=\x22next-btn\x22][type=\x22submit\x22]",
    "input[type=\x22submit\x22]",
    "prop",
    "data-radio-delay",
    "val",
    ":input[type=\x22tel\x22][required]",
    "init",
    "1743696dzKCcc",
    "find",
    "[data-selection=\x22other\x22]",
    "[data-display-input]",
    "textarea[name=\x22",
    "index",
    "[data-weighted-selection-range]",
    "[data-clone]",
    "success",
    "[data-form=\x22back-btn\x22]",
    "siblings",
    "[data-input-field]",
    "scroll-top-offset",
    "data-show-if",
    "[data-cms-select=text]",
    "select",
    ":checked",
    "edit-step",
    "[data-text=\x22total-weight\x22]",
    "step",
    "reset",
    "input:radio[required]",
    "status",
    "input:radio[name=\x22",
    "redirect-delay",
    "863032QOenLQ",
    "radio",
    "[data-clone-input=\x22",
    "select[name=\x22",
    "split",
    "[data-form-ms=\x22submit-btn\x22]",
    "submit",
    "data-radio-skip",
    "clicked",
    "match",
    "[data-checkbox]",
    "2168199Qfegdj",
    "[data-radio-delay]",
    "relationship-",
    "searchParams",
    "trim",
    "[type=\x22checkbox\x22]",
    "novalidate",
    "show",
    "clone-input",
    "https://webflow.com/api/v1/form/",
    "[data-cms-select=input]",
    "metaKey",
    ":input[type=\x22checkbox\x22][required]",
    "[data-display-input-wrapper=\x22",
    "input[type=\x22text\x22][required]:visible",
    "\x22]:checked",
    "readystatechange",
    "join",
    "input:checkbox",
    "remove-upload",
    "1813699uBxOVr",
    "[data-add-new-input]",
    "disabled",
    "input",
    "[data-conditional-result]",
    "test",
    "radio-skip",
    "card",
    "[data-remove-upload]",
    "selected",
    "top",
    "includes",
    "css",
    "trigger",
    "data-input-field",
    "[data-display-input=\x22",
    "[data-form=\x22progress\x22]",
    "[data-quiz]",
    ":input[type=\x22file\x22]",
    ".w-form-done",
    "ms-field",
    "html,\x20body",
    "input[type=\x22checkbox\x22]:visible",
    "[data-radio-skip]",
    "append",
    "<option>",
    ".w-checkbox-input",
    "log",
    "keypress",
    "add-new",
    "[data-clone=\x22",
    "removeClass",
    "attr",
    "input[name=\x22",
    "weighted-selection",
    "[data-text=\x22error-message\x22]",
    "ajaxComplete",
    "clickable-all",
    "ctrlKey",
    "1937720kAwxLS",
    "none",
    "clickable",
    "<br>Data\x20Go\x20To\x20=\x20",
    "[data-success-card=\x22",
    ":input[type=\x22number\x22]",
    "filter",
    "[data-success-card]",
    "[data-form=\x22progress-indicator\x22]",
    "setItem",
    "new-tab",
    ":input",
    "[type=\x22submit\x22]",
    "slow",
    "[data-display]",
    "<div\x20data-range=\x22selection\x22\x20style=\x22display:none\x20!important\x22>",
    "backTo",
    "[data-clone-input]",
    "w--redirected-checked",
    "select[required]",
    "[data-reset-delay]",
    "skipTo",
    ":input[type=\x22password\x22][required]",
    "data-skip-to",
    ":first",
    "184BjxHnt",
    "key",
    "[data-form=\x22step\x22]",
    "[data-answer]",
    "input[autofocus]",
    "[data-text=\x22current-step\x22]",
    "[data-clickable]",
    "slice",
    "go-to",
    "[data-range]:contains(",
    "stringify",
    "auto",
    ":input[type=\x22checkbox\x22]",
    "phone-autoformat",
    "[data-enter]",
    "[data-index=\x22",
    "[data-clone-input-wrapper]",
    ":input[type=\x22number\x22][required]",
    "redirect",
    "[data-input-field=\x22",
    "option[value=\x22",
    "skip-to",
    "animate",
    "clone",
    "input[type=\x22radio\x22]:checked",
    ":input[type=\x22date\x22]",
    "data",
    ".w-radio-input",
    ":input[type=\x22checkbox\x22]:checked",
    "every",
    "text",
    "reinit",
    "[type=\x22radio\x22]",
    "textarea[required]",
    "display",
    "AND",
    "[data-go-to]",
    "\x22][value=\x22",
    "[data-selected]:checked",
    "remove",
    "children",
    "replace",
    "data-name",
    "type",
    "[data-display-wrapper=\x22",
    "parent",
    "each",
    "shiftKey",
    "inputName",
    ":input[type=\x22email\x22][required]",
    "parse",
    "getResponse",
    "_blank",
    "addClass",
    "quiz",
    "[data-form=\x22custom-progress-indicator\x22]",
    "parents",
    "count-card",
    "block-domain",
    "stopPropagation",
    "answer",
    "[data-form=\x22submit\x22]:visible",
    "dispatchEvent",
    "scroll-top",
    "[data-input-index=\x22",
    "\x22]\x20input",
    "checkbox",
    "open",
    "4033130vJAogP",
    "[data-select-multiple]",
    "\x22]\x20[data-input-field^=\x22",
    "enter",
    "radio-delay",
    "[data-show-if]",
    "select[required]:visible",
    "submit-show",
    "fadeIn",
    "keyCode",
    "</div>",
    "min-character",
    "data-go-to",
    "wait",
    "[data-form=\x22submit-btn\x22]",
    "selection",
    "name",
    "conditional-result",
    "getItem",
    "required",
    "[data-custom-error-message]",
    "input[type=\x22email\x22]:visible",
  ];
  _0x5a91 = function () {
    return _0x31e78b;
  };
  return _0x5a91();
}
function saveFilledInput() {
  const _0x4e7b49 = _0x3d52b8;
  $("form[data-form=\x22multistep\x22]\x20:input")
    [_0x4e7b49(0x10b)](_0x4e7b49(0x1a1))
    ["each"](function () {
      const _0x47e5fd = _0x4e7b49;
      $(this)[_0x47e5fd(0x18e)](_0x47e5fd(0xbb)) === _0x47e5fd(0xd2) ||
      $(this)[_0x47e5fd(0x18e)](_0x47e5fd(0xbb)) === "radio"
        ? $(this)[_0x47e5fd(0x131)](_0x47e5fd(0x12c)) &&
          (filledInput["some"](
            (_0x5744c5) =>
              _0x5744c5[_0x47e5fd(0xc0)] === $(this)[_0x47e5fd(0x18e)]("name"),
          )
            ? ((filledInput = filledInput["filter"](
                (_0x44fe89) =>
                  _0x44fe89[_0x47e5fd(0xc0)] !==
                  $(this)[_0x47e5fd(0x18e)](_0x47e5fd(0xe4)),
              )),
              $(this)["val"]() !== "" &&
                filledInput["push"]({
                  inputName: $(this)[_0x47e5fd(0x18e)]("name"),
                  value: $(this)[_0x47e5fd(0x133)](),
                }))
            : $(this)[_0x47e5fd(0x133)]() !== "" &&
              filledInput[_0x47e5fd(0x125)]({
                inputName: $(this)[_0x47e5fd(0x18e)]("name"),
                value: $(this)[_0x47e5fd(0x133)](),
              }))
        : filledInput[_0x47e5fd(0x101)](
            (_0x18cf21) =>
              _0x18cf21["inputName"] ===
              $(this)[_0x47e5fd(0x18e)](_0x47e5fd(0xe4)),
          )
        ? ((filledInput = filledInput[_0x47e5fd(0x19b)](
            (_0x20e552) =>
              _0x20e552[_0x47e5fd(0xc0)] !==
              $(this)[_0x47e5fd(0x18e)](_0x47e5fd(0xe4)),
          )),
          $(this)[_0x47e5fd(0x133)]() !== "" &&
            filledInput[_0x47e5fd(0x125)]({
              inputName: $(this)[_0x47e5fd(0x18e)]("name"),
              value: $(this)["val"](),
            }))
        : $(this)[_0x47e5fd(0x133)]() !== "" &&
          filledInput[_0x47e5fd(0x125)]({
            inputName: $(this)[_0x47e5fd(0x18e)](_0x47e5fd(0xe4)),
            value: $(this)[_0x47e5fd(0x133)](),
          });
    }),
    localStorage[_0x4e7b49(0xf0)](_0x4e7b49(0x123)),
    localStorage[_0x4e7b49(0x19e)](
      _0x4e7b49(0x123),
      JSON[_0x4e7b49(0x9a)](filledInput),
    );
}
function scrollTop() {
  const _0x504506 = _0x3d52b8;
  scrollToTop &&
    $(_0x504506(0x183))[_0x504506(0xa6)](
      {
        scrollTop:
          $(_0x504506(0x10c))[_0x504506(0x11b)]()[_0x504506(0x178)] -
          scrollTopOffset,
      },
      0x3e8,
    );
}
function updateStep() {
  const _0xe00460 = _0x3d52b8;
  scrollTop(),
    (skip = ![]),
    $("[data-form=\x22custom-progress-indicator\x22]")[_0xe00460(0x18d)](
      _0xe00460(0x170),
    );
  $(_0xe00460(0x1b4))[_0xe00460(0xaa)](_0xe00460(0x197)) &&
    (steps[_0xe00460(0x137)](":input[required]")[_0xe00460(0xbe)](function () {
      const _0x14732f = _0xe00460;
      $(
        $("[data-form=\x22custom-progress-indicator\x22]")[
          $(this)[_0x14732f(0xc8)](_0x14732f(0x1b0))[_0x14732f(0x13b)]()
        ],
      ),
        $(this)[_0x14732f(0x133)]() === "" && emptyInput++;
    }),
    emptyInput > 0x0
      ? $(_0xe00460(0x130))[_0xe00460(0xc5)](_0xe00460(0x170))
      : $(_0xe00460(0x130))[_0xe00460(0x18d)](_0xe00460(0x170)));
  $(_0xe00460(0xc7))[_0xe00460(0x18d)](_0xe00460(0x100)),
    $(_0xe00460(0xc7))[_0xe00460(0xc5)](_0xe00460(0x170)),
    $($(_0xe00460(0xc7))[x])[_0xe00460(0xc5)](_0xe00460(0x100)),
    (selection = selections[_0xe00460(0x19b)](
      (_0x53d872) => _0x53d872[_0xe00460(0x149)] === x - 0x1,
    ));
  next &&
    (x = getSafe(() => selection[0x0]["skipTo"])
      ? parseInt(getSafe(() => selection[0x0][_0xe00460(0x1aa)]))
      : x);
  $(_0xe00460(0x1b1))[_0xe00460(0x104)](), steps[_0xe00460(0x104)]();
  reinitIX === !![] && window[_0xe00460(0x113)]["destroy"]();
  $(progressbar)[_0xe00460(0x18d)](_0xe00460(0x100));
  for (i = 0x0; i <= x; i++) {
    countCard
      ? $(progressbar[i])[_0xe00460(0xc5)](_0xe00460(0x100))
      : !$(steps[i])[_0xe00460(0xaa)](_0xe00460(0x175)) &&
        $(progressbar[i])[_0xe00460(0xc5)](_0xe00460(0x100));
  }
  reinitIX === !![]
    ? (window[_0xe00460(0x113)] &&
        window["Webflow"][_0xe00460(0x109)]("ix2")[_0xe00460(0x135)](),
      document[_0xe00460(0xce)](new Event(_0xe00460(0x16a))),
      $(steps[x])[_0xe00460(0x161)]())
    : $(steps[x])[_0xe00460(0xdc)](_0xe00460(0x1a2));
  x === 0x0 &&
    !$(steps[x])[_0xe00460(0xaa)](_0xe00460(0x175)) &&
    $(steps[x])[_0xe00460(0x137)]("[data-answer]")[_0xe00460(0x161)]();
  selection["length"] > 0x0
    ? $(steps[x])
        ["find"](_0xe00460(0xf6) + selection[0x0][_0xe00460(0x177)] + "\x22]")
        [_0xe00460(0x161)]()
    : $(steps[x])
        [_0xe00460(0x137)]("[data-answer=\x22" + answer + "\x22]")
        [_0xe00460(0x161)]();
  if (x === 0x0)
    $("[data-form=\x22back-btn\x22]")[_0xe00460(0x104)](),
      $(_0xe00460(0x108))[_0xe00460(0x161)](),
      $(_0xe00460(0xe2))[_0xe00460(0x104)]();
  else {
    if (
      x === steps[_0xe00460(0x11f)] - 0x1 ||
      $(steps[x])[_0xe00460(0x137)](_0xe00460(0xcd))[_0xe00460(0x11f)] > 0x0
    ) {
      $(_0xe00460(0x108))[_0xe00460(0x104)]();
      if (
        $(steps[x])["find"](_0xe00460(0x126))[_0xe00460(0xaa)](_0xe00460(0xdb))
      )
        $(steps[x])["find"](_0xe00460(0x126))["show"]();
      else
        $(_0xe00460(0x108))[_0xe00460(0xaa)](_0xe00460(0xdb)) &&
          $(_0xe00460(0x108))[_0xe00460(0x161)]();
      $(_0xe00460(0xe2))[_0xe00460(0x161)](),
        $(_0xe00460(0x154))[_0xe00460(0x161)](),
        $("[data-form=\x22back-btn\x22]")[_0xe00460(0x161)]();
    } else
      $(_0xe00460(0x108))[_0xe00460(0x161)](),
        $(_0xe00460(0x13f))[_0xe00460(0x161)](),
        $(_0xe00460(0xe2))[_0xe00460(0x104)](),
        $(_0xe00460(0x154))["hide"]();
  }
  $($(steps[x])[_0xe00460(0x137)](_0xe00460(0x1b2))[0x0])["focus"](),
    $($(steps[x])[_0xe00460(0x137)]("textarea[autofocus]")[0x0])[
      _0xe00460(0x10f)
    ](),
    validation();
  for (idx = 0x0; idx <= x; idx++) {
    $($(_0xe00460(0xc7))[idx])[_0xe00460(0x18d)](_0xe00460(0x170));
  }
}
function validateEmail(_0x1fb2f0, _0x525306, _0xa77301) {
  const _0x6d809e = _0x3d52b8;
  let _0x1f242f = _0x1fb2f0[_0x6d809e(0x179)]("@")
    ? _0x1fb2f0[_0x6d809e(0x153)]("@")[0x1][_0x6d809e(0x153)](".")[0x0]
    : [];
  dom = [];
  _0x525306 !== undefined &&
    _0x525306["split"](",")[_0x6d809e(0x106)](function (_0x51a8b8) {
      const _0x159183 = _0x6d809e;
      _0x51a8b8[_0x159183(0x179)](_0x1f242f) &&
        dom[_0x159183(0x125)](_0x1f242f);
    });
  dom[_0x6d809e(0x11f)] > 0x0 ? (domainAllowed = ![]) : (domainAllowed = !![]);
  var _0x14ae74 = /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,20})?$/;
  console[_0x6d809e(0x189)](_0x14ae74[_0x6d809e(0x173)](_0x1fb2f0)),
    !_0x14ae74["test"](_0x1fb2f0) || !domainAllowed
      ? ((emailFilled = ![]),
        unfilledArr[_0x6d809e(0x125)]({ input: _0xa77301 }))
      : (emailFilled = !![]);
}
function phoneValidation(_0x17b5d5, _0x356bb9, _0x18e9bb) {
  const _0x508209 = _0x3d52b8;
  if (phoneFormat)
    return _0x17b5d5[_0x508209(0x158)](
      new RegExp(phoneFormat[_0x508209(0x1b5)](0x1, -0x1)),
    ) && _0x356bb9 >= _0x18e9bb
      ? !![]
      : ![];
  else {
    if (_0x356bb9 >= _0x18e9bb) return !![];
  }
}
function validation() {
  const _0xe4da98 = _0x3d52b8;
  $(steps[x])[_0xe4da98(0xaa)]("card") && enableBtn();
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
    (textareaLength = $(steps[x])[_0xe4da98(0x137)](
      "textarea[required]:visible",
    )[_0xe4da98(0x11f)]),
    (textInputLength = $(steps[x])[_0xe4da98(0x137)](_0xe4da98(0x168))[
      _0xe4da98(0x11f)
    ]),
    (selectInputLength = $(steps[x])[_0xe4da98(0x137)](_0xe4da98(0xda))[
      "length"
    ]),
    (emailInputLength = $(steps[x])[_0xe4da98(0x137)](_0xe4da98(0xe9))[
      _0xe4da98(0x11f)
    ]),
    (checkboxInputLength = $(steps[x])[_0xe4da98(0x137)](_0xe4da98(0x184))[
      _0xe4da98(0x11f)
    ]);
  textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0
    ? disableBtn()
    : enableBtn();
  checkCount = $(steps[x])[_0xe4da98(0xaa)](_0xe4da98(0xd2))
    ? $(steps[x])[_0xe4da98(0xaa)](_0xe4da98(0xd2))
    : $(steps[x])["find"](_0xe4da98(0x159))["length"] > 0x0
    ? $(steps[x])["find"](_0xe4da98(0x159))[_0xe4da98(0xaa)](_0xe4da98(0xd2))
    : 0x0;
  if (!logicExtra)
    $(steps[x])
      [_0xe4da98(0x137)](_0xe4da98(0x1a0))
      ["is"]("[type=\x22checkbox\x22]") &&
      (checkCount === "*" ||
      checkCount > $(steps[x])[_0xe4da98(0x137)](_0xe4da98(0x9c))["length"]
        ? $(steps[x])
            ["find"](":input[type=\x22checkbox\x22]")
            ["each"](function () {
              const _0x426358 = _0xe4da98;
              $(this)["is"](_0x426358(0x146))
                ? $(steps[x])["find"](_0x426358(0x166))["length"] < 0x1 &&
                  ((checkboxFilled = !![]),
                  resetInputErrorMessage(
                    $(this)[_0x426358(0x18e)](_0x426358(0xe4)),
                  ))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0x426358(0x125)]({
                    input: $(this)[_0x426358(0x18e)]("name"),
                  }));
            })
        : $(steps[x])["find"](_0xe4da98(0xac))[_0xe4da98(0x11f)] >= checkCount
        ? $(steps[x])[_0xe4da98(0x137)](
            ":input[type=\x22checkbox\x22][required]",
          )[_0xe4da98(0x11f)] > 0x0
          ? $(steps[x])
              [_0xe4da98(0x137)](_0xe4da98(0x166))
              [_0xe4da98(0xbe)](function () {
                const _0x33cb3d = _0xe4da98;
                !$(this)["is"](":checked")
                  ? ((checkboxFilled = ![]),
                    unfilledArr[_0x33cb3d(0x125)]({
                      input: $(this)[_0x33cb3d(0x18e)](_0x33cb3d(0xe4)),
                    }))
                  : ((checkboxFilled = !![]),
                    $(steps[x])[_0x33cb3d(0x137)](_0x33cb3d(0x11c))["length"] >=
                      $(steps[x])[_0x33cb3d(0x137)](_0x33cb3d(0x166))[
                        _0x33cb3d(0x11f)
                      ] &&
                      resetInputErrorMessage(
                        $(steps[x])
                          [_0x33cb3d(0x137)](_0x33cb3d(0x9c))
                          [_0x33cb3d(0x18e)](_0x33cb3d(0xe4)),
                      ));
              })
          : ((checkboxFilled = !![]),
            resetInputErrorMessage(
              $(steps[x])
                [_0xe4da98(0x137)](_0xe4da98(0x9c))
                [_0xe4da98(0x18e)](_0xe4da98(0xe4)),
            ))
        : ((checkboxFilled = ![]),
          $(steps[x])
            [_0xe4da98(0x137)](_0xe4da98(0x166))
            [_0xe4da98(0xbe)](function () {
              const _0x57a3b6 = _0xe4da98;
              $(this)[_0x57a3b6(0x10b)](":checked") &&
                unfilledArr[_0x57a3b6(0x125)]({
                  input: $(this)[_0x57a3b6(0x18e)]("name"),
                });
            }),
          unfilledArr["push"]({
            input: $(steps[x])
              [_0xe4da98(0x137)](_0xe4da98(0x9c))
              [_0xe4da98(0x18e)](_0xe4da98(0xe4)),
          }))),
      $(steps[x])
        [_0xe4da98(0x137)](_0xe4da98(0x14b))
        [_0xe4da98(0xbe)](function (_0x1c2abf) {
          const _0x2e7d5e = _0xe4da98;
          var _0x48268a = $(this)["attr"](_0x2e7d5e(0xe4));
          $(_0x2e7d5e(0x14d) + _0x48268a + _0x2e7d5e(0x169))["length"] == 0x0
            ? (!empReqRadio["find"](
                (_0x59deb0) => _0x59deb0[_0x2e7d5e(0x171)] === _0x1c2abf,
              ) && empReqRadio[_0x2e7d5e(0x125)]({ input: _0x1c2abf }),
              unfilledArr[_0x2e7d5e(0x125)]({
                input: $(this)[_0x2e7d5e(0x18e)](_0x2e7d5e(0xe4)),
              }))
            : (empReqRadio = empReqRadio["filter"](
                (_0x5ace48) => _0x5ace48[_0x2e7d5e(0x171)] !== _0x1c2abf,
              )),
            empReqRadio["length"] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0xe4da98(0x137)](":input[type=\x22text\x22][required]")
        [_0xe4da98(0xbe)](function (_0x4cdbe3) {
          const _0x1c8506 = _0xe4da98;
          let _0x59392f = $(this)[_0x1c8506(0x133)]()[_0x1c8506(0x11f)],
            _0x213610 = $(this)["data"](_0x1c8506(0xdf))
              ? $(this)[_0x1c8506(0xaa)](_0x1c8506(0xdf))
              : 0x0;
          $(this)["val"]() !== "" && _0x59392f >= _0x213610
            ? (empReqInput = empReqInput[_0x1c8506(0x19b)](
                (_0x26e1b3) => _0x26e1b3[_0x1c8506(0x171)] !== _0x4cdbe3,
              ))
            : (!empReqInput["find"](
                (_0x9619ed) => _0x9619ed[_0x1c8506(0x171)] === _0x4cdbe3,
              ) && empReqInput["push"]({ input: _0x4cdbe3 }),
              unfilledArr[_0x1c8506(0x125)]({
                input: $(this)[_0x1c8506(0x18e)](_0x1c8506(0xe4)),
              })),
            empReqInput["length"] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0xe4da98(0x137)](_0xe4da98(0x1ab))
        [_0xe4da98(0xbe)](function (_0x4d7df1) {
          const _0x291500 = _0xe4da98;
          let _0x42dabd = $(this)[_0x291500(0x133)]()[_0x291500(0x11f)],
            _0x40e6cf = $(this)[_0x291500(0xaa)]("min-character")
              ? $(this)[_0x291500(0xaa)](_0x291500(0xdf))
              : 0x0;
          $(this)[_0x291500(0x133)]() !== "" && _0x42dabd >= _0x40e6cf
            ? (empReqPassword = empReqPassword[_0x291500(0x19b)](
                (_0x3f7f30) => _0x3f7f30[_0x291500(0x171)] !== _0x4d7df1,
              ))
            : (!empReqPassword["find"](
                (_0x48b775) => _0x48b775["input"] === _0x4d7df1,
              ) && empReqPassword["push"]({ input: _0x4d7df1 }),
              unfilledArr[_0x291500(0x125)]({
                input: $(this)["attr"]("name"),
              })),
            empReqPassword["length"] === 0x0
              ? (passwordFilled = !![])
              : (passwordFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0xe4da98(0x11a))
        [_0xe4da98(0xbe)](function (_0x3c11b2) {
          const _0x3f9d80 = _0xe4da98;
          let _0x1f10c1 = $(this)[_0x3f9d80(0x133)]()[_0x3f9d80(0x11f)],
            _0x4898d1 = $(this)["data"](_0x3f9d80(0xdf))
              ? $(this)[_0x3f9d80(0xaa)]("min-character")
              : 0x0;
          $(this)["val"]() !== "" && _0x1f10c1 >= _0x4898d1
            ? (empReqUrl = empReqUrl["filter"](
                (_0x248239) => _0x248239[_0x3f9d80(0x171)] !== _0x3c11b2,
              ))
            : (!empReqUrl[_0x3f9d80(0x137)](
                (_0x309fe6) => _0x309fe6[_0x3f9d80(0x171)] === _0x3c11b2,
              ) && empReqUrl[_0x3f9d80(0x125)]({ input: _0x3c11b2 }),
              unfilledArr[_0x3f9d80(0x125)]({
                input: $(this)[_0x3f9d80(0x18e)](_0x3f9d80(0xe4)),
              })),
            empReqUrl[_0x3f9d80(0x11f)] === 0x0 &&
            validateURL($(this)[_0x3f9d80(0x133)]())
              ? ((urlFilled = !![]), console[_0x3f9d80(0x189)](urlFilled))
              : (urlFilled = ![]);
        }),
      $(steps[x])
        ["find"](":input[type=\x22date\x22][required]")
        [_0xe4da98(0xbe)](function (_0x4e87a1) {
          const _0x2873c9 = _0xe4da98;
          $(this)[_0x2873c9(0x133)]() !== ""
            ? (empReqDate = empReqDate["filter"](
                (_0x4c1bea) => _0x4c1bea[_0x2873c9(0x171)] !== _0x4e87a1,
              ))
            : (!empReqDate[_0x2873c9(0x137)](
                (_0x483626) => _0x483626["input"] === _0x4e87a1,
              ) && empReqDate[_0x2873c9(0x125)]({ input: _0x4e87a1 }),
              unfilledArr[_0x2873c9(0x125)]({
                input: $(this)["attr"](_0x2873c9(0xe4)),
              })),
            empReqDate[_0x2873c9(0x11f)] === 0x0
              ? (dateFilled = !![])
              : (dateFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0xe4da98(0x134))
        [_0xe4da98(0xbe)](function (_0x16b9c3) {
          const _0x3cfc4f = _0xe4da98;
          if ($(this)[_0x3cfc4f(0x133)]() !== "") {
            let _0x286b55 = $(this)[_0x3cfc4f(0x133)]()[_0x3cfc4f(0x11f)],
              _0x28e461 = $(this)[_0x3cfc4f(0xaa)](_0x3cfc4f(0xdf))
                ? $(this)[_0x3cfc4f(0xaa)]("min-character")
                : 0x0;
            if ($(this)["data"](_0x3cfc4f(0x9d))) {
              var _0x5b100d = phoneAutoFormat(
                $(this)[_0x3cfc4f(0xaa)]("phone-autoformat"),
              );
              $(this)[_0x3cfc4f(0x133)](_0x5b100d($(this)[_0x3cfc4f(0x133)]()));
            }
            phoneValidation($(this)["val"](), _0x286b55, _0x28e461)
              ? (empReqTel = empReqTel[_0x3cfc4f(0x19b)](
                  (_0x4197b9) => _0x4197b9[_0x3cfc4f(0x171)] !== _0x16b9c3,
                ))
              : empReqTel[_0x3cfc4f(0x125)]({ input: _0x16b9c3 });
          } else
            !empReqTel[_0x3cfc4f(0x137)](
              (_0x45651c) => _0x45651c[_0x3cfc4f(0x171)] === _0x16b9c3,
            ) && empReqTel[_0x3cfc4f(0x125)]({ input: _0x16b9c3 }),
              unfilledArr[_0x3cfc4f(0x125)]({
                input: $(this)[_0x3cfc4f(0x18e)](_0x3cfc4f(0xe4)),
              });
          empReqTel["length"] === 0x0 ? (telFilled = !![]) : (telFilled = ![]);
        }),
      $(steps[x])
        [_0xe4da98(0x137)](":input[type=\x22file\x22][required]")
        [_0xe4da98(0xbe)](function (_0x1576c2) {
          const _0x638b37 = _0xe4da98;
          $(this)[_0x638b37(0x133)]() !== ""
            ? (empReqFile = empReqFile[_0x638b37(0x19b)](
                (_0x4ae05f) => _0x4ae05f["input"] !== _0x1576c2,
              ))
            : (!empReqFile[_0x638b37(0x137)](
                (_0x1c3828) => _0x1c3828[_0x638b37(0x171)] === _0x1576c2,
              ) && empReqFile[_0x638b37(0x125)]({ input: _0x1576c2 }),
              unfilledArr[_0x638b37(0x125)]({
                input: $(this)["attr"](_0x638b37(0xe4)),
              })),
            empReqFile[_0x638b37(0x11f)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0xe4da98(0x137)](_0xe4da98(0xa1))
        [_0xe4da98(0xbe)](function (_0xca9431) {
          const _0x9d6e8d = _0xe4da98;
          let _0xf8f7c5 = $(this)[_0x9d6e8d(0x133)]()[_0x9d6e8d(0x11f)],
            _0x30a2f5 = $(this)[_0x9d6e8d(0xaa)]("min-character")
              ? $(this)[_0x9d6e8d(0xaa)](_0x9d6e8d(0xdf))
              : 0x0;
          $(this)[_0x9d6e8d(0x133)]() !== "" && _0xf8f7c5 >= _0x30a2f5
            ? (empReqNum = empReqNum[_0x9d6e8d(0x19b)](
                (_0x17bd37) => _0x17bd37["input"] !== _0xca9431,
              ))
            : (!empReqNum["find"](
                (_0x345601) => _0x345601[_0x9d6e8d(0x171)] === _0xca9431,
              ) && empReqNum[_0x9d6e8d(0x125)]({ input: _0xca9431 }),
              unfilledArr["push"]({
                input: $(this)[_0x9d6e8d(0x18e)](_0x9d6e8d(0xe4)),
              })),
            empReqNum[_0x9d6e8d(0x11f)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        ["find"]("select[required]")
        [_0xe4da98(0xbe)](function (_0x43c874) {
          const _0x9a6638 = _0xe4da98;
          let _0x178d66 = $(this)[_0x9a6638(0x133)]();
          _0x178d66 === "" && (_0x178d66 = null),
            _0x178d66 != null
              ? (empReqSelect = empReqSelect["filter"](
                  (_0x4350e6) => _0x4350e6[_0x9a6638(0x171)] !== _0x43c874,
                ))
              : (!empReqSelect[_0x9a6638(0x137)](
                  (_0x44eef6) => _0x44eef6["input"] === _0x43c874,
                ) && empReqSelect[_0x9a6638(0x125)]({ input: _0x43c874 }),
                unfilledArr[_0x9a6638(0x125)]({
                  input: $(this)[_0x9a6638(0x18e)](_0x9a6638(0xe4)),
                })),
            empReqSelect[_0x9a6638(0x11f)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0xe4da98(0xb1))
        [_0xe4da98(0xbe)](function (_0x4432a7) {
          const _0x224117 = _0xe4da98;
          let _0x22c086 = $(this)[_0x224117(0x133)]()[_0x224117(0x11f)],
            _0x25d36d = $(this)[_0x224117(0xaa)](_0x224117(0xdf))
              ? $(this)[_0x224117(0xaa)]("min-character")
              : 0x0;
          $(this)[_0x224117(0x133)]() !== "" && _0x22c086 >= _0x25d36d
            ? (empReqTextarea = empReqTextarea[_0x224117(0x19b)](
                (_0x3c49fb) => _0x3c49fb[_0x224117(0x171)] !== _0x4432a7,
              ))
            : (!empReqTextarea[_0x224117(0x137)](
                (_0x308a44) => _0x308a44[_0x224117(0x171)] === _0x4432a7,
              ) && empReqTextarea[_0x224117(0x125)]({ input: _0x4432a7 }),
              unfilledArr[_0x224117(0x125)]({
                input: $(this)[_0x224117(0x18e)](_0x224117(0xe4)),
              })),
            empReqTextarea["length"] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        ["find"](":input[type=\x22email\x22][required]")
        ["each"](function () {
          const _0x26bd29 = _0xe4da98;
          $(this)[_0x26bd29(0x133)]() !== ""
            ? validateEmail(
                $(this)[_0x26bd29(0x133)](),
                $(this)[_0x26bd29(0xaa)](_0x26bd29(0xca)),
                $(this)[_0x26bd29(0x18e)](_0x26bd29(0xe4)),
              )
            : ((emailFilled = ![]),
              unfilledArr[_0x26bd29(0x125)]({
                input: $(this)[_0x26bd29(0x18e)](_0x26bd29(0xe4)),
              }));
        });
  else {
    if ($(steps[x])["data"](_0xe4da98(0x175)))
      (answer = $(steps[x])
        [_0xe4da98(0x137)](_0xe4da98(0xb4))
        ["data"](_0xe4da98(0x98))),
        (selections = selections[_0xe4da98(0x19b)](
          (_0x961263) => _0x961263["step"] !== x,
        )),
        selections[_0xe4da98(0x125)]({ step: x, selected: answer });
    else
      $(steps[x])
        [_0xe4da98(0x137)]("[data-answer]:visible")
        [_0xe4da98(0xaa)]("card") &&
        ((answer = $(steps[x])
          [_0xe4da98(0x137)](_0xe4da98(0xfe))
          ["data"](_0xe4da98(0x98))),
        (selections = selections[_0xe4da98(0x19b)](
          (_0x5a7a3f) => _0x5a7a3f[_0xe4da98(0x149)] !== x,
        )),
        selections["push"]({ step: x, selected: answer }));
    $(steps[x])
      ["find"](_0xe4da98(0xfe))
      [_0xe4da98(0x137)](_0xe4da98(0x1a0))
      ["is"](_0xe4da98(0x15f)) &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])[_0xe4da98(0x137)](_0xe4da98(0x9c))[_0xe4da98(0x11f)]
        ? $(steps[x])
            ["find"](_0xe4da98(0x9c))
            [_0xe4da98(0xbe)](function () {
              const _0x15c224 = _0xe4da98;
              $(this)["is"](_0x15c224(0x146))
                ? $(steps[x])["find"](_0x15c224(0xf3))[_0x15c224(0x11f)] <
                    0x1 &&
                  ((skipTo = undefined),
                  $(this)
                    [_0x15c224(0xc8)](_0x15c224(0xfa))
                    ["data"](_0x15c224(0xa5)) &&
                    (skipTo = $(this)
                      [_0x15c224(0xc8)](_0x15c224(0xfa))
                      ["data"](_0x15c224(0xa5))),
                  $(this)
                    [_0x15c224(0xc8)](_0x15c224(0xb4))
                    [_0x15c224(0x18e)](_0x15c224(0xe0)) &&
                    ((answer = $(this)
                      [_0x15c224(0xc8)](_0x15c224(0xb4))
                      ["attr"](_0x15c224(0xe0))),
                    (selections = selections[_0x15c224(0x19b)](
                      (_0x35ae84) => _0x35ae84[_0x15c224(0x149)] !== x,
                    )),
                    selections[_0x15c224(0x125)]({ step: x, selected: answer }),
                    skipTo &&
                      (selections[_0x15c224(0x125)]({
                        step: skipTo - 0x2,
                        selected: answer,
                      }),
                      (objIndex = selections[_0x15c224(0x121)](
                        (_0x30d850) => _0x30d850[_0x15c224(0x149)] === x,
                      )),
                      (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                      (selections[objIndex]["backTo"] = x))),
                  (checkboxFilled = !![]),
                  $(steps[x])[_0x15c224(0x137)](_0x15c224(0x11c))[
                    _0x15c224(0x11f)
                  ] >= $(steps[x])["find"](_0x15c224(0x166))["length"] &&
                    resetInputErrorMessage(
                      $(steps[x])
                        [_0x15c224(0x137)](_0x15c224(0x9c))
                        [_0x15c224(0x18e)]("name"),
                    ))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0x15c224(0x125)]({
                    input: $(this)[_0x15c224(0x18e)]("name"),
                  }));
            })
        : $(steps[x])
            [_0xe4da98(0x137)]("[data-answer]:visible")
            [_0xe4da98(0x137)](":input[type=\x22checkbox\x22]:checked")[
            _0xe4da98(0x11f)
          ] >= checkCount
        ? ($(steps[x])
            ["find"](_0xe4da98(0xfe))
            [_0xe4da98(0x137)](":input[type=\x22checkbox\x22]")
            [_0xe4da98(0xc8)]("[data-go-to]")
            ["attr"](_0xe4da98(0xe0)) &&
            ((skipTo = undefined),
            $(steps[x])
              [_0xe4da98(0x137)]("[data-answer]:visible")
              ["find"](":input[type=\x22checkbox\x22]")
              [_0xe4da98(0xc8)]("[data-skip-to]")
              [_0xe4da98(0x18e)]("data-skip-to") &&
              (skipTo = $(steps[x])
                ["find"]("[data-answer]:visible")
                [_0xe4da98(0x137)](":input[type=\x22checkbox\x22]:checked")
                ["parents"](_0xe4da98(0xfa))
                [_0xe4da98(0x18e)](_0xe4da98(0x1ac))),
            (answer = $(steps[x])
              [_0xe4da98(0x137)]("[data-answer]:visible")
              [_0xe4da98(0x137)](_0xe4da98(0x9c))
              ["parents"](_0xe4da98(0xb4))
              [_0xe4da98(0x18e)](_0xe4da98(0xe0))),
            (selections = selections["filter"](
              (_0x243c07) => _0x243c07[_0xe4da98(0x149)] !== x,
            )),
            selections[_0xe4da98(0x125)]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0xe4da98(0x125)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0xe4da98(0x121)](
                (_0x382734) => _0x382734[_0xe4da98(0x149)] === x,
              )),
              (selections[objIndex][_0xe4da98(0x1aa)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0xe4da98(0x1a5)] = x))),
          (selections = selections["filter"](
            (_0x251654) => _0x251654[_0xe4da98(0x149)] !== x,
          )),
          selections[_0xe4da98(0x125)]({ step: x, selected: answer }),
          (checkboxFilled = !![]),
          $(steps[x])["find"](_0xe4da98(0x11c))[_0xe4da98(0x11f)] >=
            $(steps[x])[_0xe4da98(0x137)](
              ":input[type=\x22checkbox\x22][required]",
            )["length"] &&
            resetInputErrorMessage(
              $(steps[x])
                ["find"](":input[type=\x22checkbox\x22]")
                [_0xe4da98(0x18e)](_0xe4da98(0xe4)),
            ))
        : ((checkboxFilled = ![]),
          $(steps[x])
            ["find"](_0xe4da98(0x166))
            [_0xe4da98(0xbe)](function () {
              const _0x52da70 = _0xe4da98;
              $(this)["not"](":checked") &&
                unfilledArr[_0x52da70(0x125)]({
                  input: $(this)[_0x52da70(0x18e)](_0x52da70(0xe4)),
                });
            }))),
      $(steps[x])
        ["find"]("[data-answer]:visible")
        [_0xe4da98(0x137)](_0xe4da98(0x14b))
        [_0xe4da98(0xbe)](function (_0x59558a) {
          const _0x3d466b = _0xe4da98;
          var _0x42ead3 = $(this)[_0x3d466b(0x18e)](_0x3d466b(0xe4));
          $(_0x3d466b(0x14d) + _0x42ead3 + _0x3d466b(0x169))["length"] == 0x0
            ? (!empReqRadio[_0x3d466b(0x137)](
                (_0x30f884) => _0x30f884[_0x3d466b(0x171)] === _0x59558a,
              ) && empReqRadio["push"]({ input: _0x59558a }),
              unfilledArr[_0x3d466b(0x125)]({
                input: $(this)["attr"](_0x3d466b(0xe4)),
              }))
            : (empReqRadio = empReqRadio["filter"](
                (_0x1f57e0) => _0x1f57e0[_0x3d466b(0x171)] !== _0x59558a,
              )),
            empReqRadio["length"] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0xe4da98(0x137)]("[data-answer]:visible")
        ["find"](_0xe4da98(0xeb))
        [_0xe4da98(0xbe)](function (_0x60170b) {
          const _0x197c94 = _0xe4da98;
          let _0x5b49ee = $(this)[_0x197c94(0x133)]()[_0x197c94(0x11f)],
            _0x4e00aa = $(this)[_0x197c94(0xaa)](_0x197c94(0xdf))
              ? $(this)[_0x197c94(0xaa)](_0x197c94(0xdf))
              : 0x0;
          $(this)["val"]() !== "" && _0x5b49ee >= _0x4e00aa
            ? (empReqInput = empReqInput[_0x197c94(0x19b)](
                (_0x3b8630) => _0x3b8630[_0x197c94(0x171)] !== _0x60170b,
              ))
            : (!empReqInput[_0x197c94(0x137)](
                (_0xf0a255) => _0xf0a255[_0x197c94(0x171)] === _0x60170b,
              ) && empReqInput[_0x197c94(0x125)]({ input: _0x60170b }),
              unfilledArr["push"]({
                input: $(this)[_0x197c94(0x18e)](_0x197c94(0xe4)),
              })),
            empReqInput[_0x197c94(0x11f)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0xe4da98(0xfe))
        ["find"](":input[type=\x22text\x22]")
        ["each"](function (_0x4167f4) {
          const _0x322d62 = _0xe4da98;
          (skipTo = undefined),
            $(this)
              [_0x322d62(0xc8)](_0x322d62(0xfa))
              [_0x322d62(0xaa)]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0x322d62(0xc8)](_0x322d62(0xfa))
                [_0x322d62(0xaa)](_0x322d62(0xa5))),
            $(this)
              ["parents"](_0x322d62(0xb4))
              [_0x322d62(0x18e)](_0x322d62(0xe0)) &&
              ((answer = $(this)
                [_0x322d62(0xc8)](_0x322d62(0xb4))
                [_0x322d62(0x18e)](_0x322d62(0xe0))),
              (selections = selections["filter"](
                (_0x127be4) => _0x127be4[_0x322d62(0x149)] !== x,
              )),
              selections[_0x322d62(0x125)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x322d62(0x125)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x322d62(0x121)](
                  (_0x10c30a) => _0x10c30a[_0x322d62(0x149)] === x,
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x322d62(0x1a5)] = x)));
        }),
      $(steps[x])
        [_0xe4da98(0x137)](_0xe4da98(0xfe))
        ["find"](_0xe4da98(0x1ab))
        [_0xe4da98(0xbe)](function (_0x1e74cd) {
          const _0x109a9c = _0xe4da98;
          let _0x3708c9 = $(this)[_0x109a9c(0x133)]()[_0x109a9c(0x11f)],
            _0x3c2f01 = $(this)[_0x109a9c(0xaa)](_0x109a9c(0xdf))
              ? $(this)["data"](_0x109a9c(0xdf))
              : 0x0;
          $(this)[_0x109a9c(0x133)]() !== "" && _0x3708c9 >= _0x3c2f01
            ? (empReqPassword = empReqPassword[_0x109a9c(0x19b)](
                (_0x973c7e) => _0x973c7e[_0x109a9c(0x171)] !== _0x1e74cd,
              ))
            : (!empReqPassword[_0x109a9c(0x137)](
                (_0x540b58) => _0x540b58[_0x109a9c(0x171)] === _0x1e74cd,
              ) && empReqPassword["push"]({ input: _0x1e74cd }),
              unfilledArr["push"]({ input: $(this)["attr"](_0x109a9c(0xe4)) })),
            empReqPassword[_0x109a9c(0x11f)] === 0x0
              ? (passwordFilled = !![])
              : (passwordFilled = ![]);
        }),
      $(steps[x])
        [_0xe4da98(0x137)](_0xe4da98(0xfe))
        ["find"](":input[type=\x22password\x22]")
        [_0xe4da98(0xbe)](function (_0x49954d) {
          const _0x108c18 = _0xe4da98;
          (skipTo = undefined),
            $(this)
              [_0x108c18(0xc8)](_0x108c18(0xfa))
              [_0x108c18(0xaa)](_0x108c18(0xa5)) !== "" &&
              (skipTo = $(this)
                [_0x108c18(0xc8)]("[data-skip-to]")
                [_0x108c18(0xaa)](_0x108c18(0xa5))),
            $(this)
              [_0x108c18(0xc8)](_0x108c18(0xb4))
              [_0x108c18(0x18e)]("data-go-to") &&
              ((answer = $(this)
                [_0x108c18(0xc8)](_0x108c18(0xb4))
                [_0x108c18(0x18e)](_0x108c18(0xe0))),
              (selections = selections["filter"](
                (_0x297c65) => _0x297c65[_0x108c18(0x149)] !== x,
              )),
              selections[_0x108c18(0x125)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x108c18(0x125)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x108c18(0x121)](
                  (_0x237170) => _0x237170[_0x108c18(0x149)] === x,
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x108c18(0x1a5)] = x)));
        }),
      $(steps[x])
        [_0xe4da98(0x137)](_0xe4da98(0xfe))
        ["find"](_0xe4da98(0x11a))
        [_0xe4da98(0xbe)](function (_0x2d5a6c) {
          const _0x480ccc = _0xe4da98;
          let _0x54ed20 = $(this)[_0x480ccc(0x133)]()[_0x480ccc(0x11f)],
            _0x4f7a22 = $(this)[_0x480ccc(0xaa)](_0x480ccc(0xdf))
              ? $(this)[_0x480ccc(0xaa)](_0x480ccc(0xdf))
              : 0x0;
          $(this)["val"]() !== "" && _0x54ed20 >= _0x4f7a22
            ? (empReqUrl = empReqUrl[_0x480ccc(0x19b)](
                (_0x5ba15f) => _0x5ba15f[_0x480ccc(0x171)] !== _0x2d5a6c,
              ))
            : (!empReqUrl[_0x480ccc(0x137)](
                (_0x253123) => _0x253123[_0x480ccc(0x171)] === _0x2d5a6c,
              ) && empReqUrl[_0x480ccc(0x125)]({ input: _0x2d5a6c }),
              unfilledArr[_0x480ccc(0x125)]({
                input: $(this)[_0x480ccc(0x18e)](_0x480ccc(0xe4)),
              })),
            empReqUrl["length"] === 0x0 &&
            validateURL($(this)[_0x480ccc(0x133)]())
              ? (urlFilled = !![])
              : (urlFilled = ![]);
        }),
      $(steps[x])
        [_0xe4da98(0x137)](_0xe4da98(0xfe))
        ["find"](":input[type=\x22url\x22]")
        [_0xe4da98(0xbe)](function (_0x343581) {
          const _0x220111 = _0xe4da98;
          (skipTo = undefined),
            $(this)["parents"](_0x220111(0xfa))["data"]("skip-to") !== "" &&
              (skipTo = $(this)["parents"](_0x220111(0xfa))["data"]("skip-to")),
            $(this)["parents"](_0x220111(0xb4))["attr"](_0x220111(0xe0)) &&
              ((answer = $(this)
                ["parents"](_0x220111(0xb4))
                [_0x220111(0x18e)](_0x220111(0xe0))),
              (selections = selections[_0x220111(0x19b)](
                (_0x3b19d6) => _0x3b19d6[_0x220111(0x149)] !== x,
              )),
              selections[_0x220111(0x125)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x220111(0x125)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x3f7712) => _0x3f7712["step"] === x,
                )),
                (selections[objIndex][_0x220111(0x1aa)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x220111(0x1a5)] = x)));
        }),
      $(steps[x])
        ["find"](_0xe4da98(0xfe))
        [_0xe4da98(0x137)](":input[type=\x22date\x22][required]")
        [_0xe4da98(0xbe)](function (_0x1b2b3e) {
          const _0x4d9e18 = _0xe4da98;
          $(this)[_0x4d9e18(0x133)]() !== ""
            ? (empReqDate = empReqDate["filter"](
                (_0x3a3bd4) => _0x3a3bd4[_0x4d9e18(0x171)] !== _0x1b2b3e,
              ))
            : (!empReqDate[_0x4d9e18(0x137)](
                (_0x4b8da7) => _0x4b8da7[_0x4d9e18(0x171)] === _0x1b2b3e,
              ) && empReqDate["push"]({ input: _0x1b2b3e }),
              unfilledArr[_0x4d9e18(0x125)]({
                input: $(this)[_0x4d9e18(0x18e)]("name"),
              })),
            empReqDate[_0x4d9e18(0x11f)] === 0x0
              ? (dateFilled = !![])
              : (dateFilled = ![]);
        }),
      $(steps[x])
        [_0xe4da98(0x137)](_0xe4da98(0xfe))
        [_0xe4da98(0x137)](_0xe4da98(0xa9))
        [_0xe4da98(0xbe)](function (_0x22cbbd) {
          const _0x5e7866 = _0xe4da98;
          (skipTo = undefined),
            $(this)
              [_0x5e7866(0xc8)]("[data-skip-to]")
              [_0x5e7866(0xaa)](_0x5e7866(0xa5)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0x5e7866(0xfa))
                [_0x5e7866(0xaa)](_0x5e7866(0xa5))),
            $(this)
              ["parents"](_0x5e7866(0xb4))
              [_0x5e7866(0x18e)](_0x5e7866(0xe0)) &&
              ((answer = $(this)
                [_0x5e7866(0xc8)]("[data-go-to]")
                ["attr"](_0x5e7866(0xe0))),
              (selections = selections[_0x5e7866(0x19b)](
                (_0xbd725e) => _0xbd725e[_0x5e7866(0x149)] !== x,
              )),
              selections[_0x5e7866(0x125)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x5e7866(0x125)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x5e7866(0x121)](
                  (_0x507f97) => _0x507f97[_0x5e7866(0x149)] === x,
                )),
                (selections[objIndex][_0x5e7866(0x1aa)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x5e7866(0x1a5)] = x)));
        }),
      $(steps[x])
        [_0xe4da98(0x137)](_0xe4da98(0xfe))
        [_0xe4da98(0x137)](":input[type=\x22number\x22][required]")
        [_0xe4da98(0xbe)](function (_0x4574d7) {
          const _0xa2374d = _0xe4da98;
          let _0x397a10 = $(this)[_0xa2374d(0x133)]()["length"],
            _0x877f11 = $(this)[_0xa2374d(0xaa)](_0xa2374d(0xdf))
              ? $(this)["data"](_0xa2374d(0xdf))
              : 0x0;
          $(this)[_0xa2374d(0x133)]() !== "" && _0x397a10 >= _0x877f11
            ? (empReqNum = empReqNum["filter"](
                (_0x5eaff5) => _0x5eaff5[_0xa2374d(0x171)] !== _0x4574d7,
              ))
            : (!empReqNum[_0xa2374d(0x137)](
                (_0x3773f3) => _0x3773f3["input"] === _0x4574d7,
              ) && empReqNum["push"]({ input: _0x4574d7 }),
              unfilledArr[_0xa2374d(0x125)]({
                input: $(this)[_0xa2374d(0x18e)](_0xa2374d(0xe4)),
              })),
            empReqNum[_0xa2374d(0x11f)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0xe4da98(0xfe))
        [_0xe4da98(0x137)](_0xe4da98(0x19a))
        [_0xe4da98(0xbe)](function (_0x415840) {
          const _0x12e944 = _0xe4da98;
          (skipTo = undefined),
            $(this)
              [_0x12e944(0xc8)](_0x12e944(0xfa))
              ["data"](_0x12e944(0xa5)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0x12e944(0xfa))
                ["data"](_0x12e944(0xa5))),
            $(this)
              [_0x12e944(0xc8)](_0x12e944(0xb4))
              [_0x12e944(0x18e)](_0x12e944(0xe0)) &&
              ((answer = $(this)
                [_0x12e944(0xc8)](_0x12e944(0xb4))
                [_0x12e944(0x18e)](_0x12e944(0xe0))),
              (selections = selections["filter"](
                (_0x3f1f6c) => _0x3f1f6c[_0x12e944(0x149)] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x12e944(0x125)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x4027d7) => _0x4027d7["step"] === x,
                )),
                (selections[objIndex][_0x12e944(0x1aa)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x12e944(0x1a5)] = x)));
        }),
      $(steps[x])
        [_0xe4da98(0x137)](_0xe4da98(0xfe))
        [_0xe4da98(0x137)](_0xe4da98(0x134))
        [_0xe4da98(0xbe)](function (_0xd45cd0) {
          const _0x112737 = _0xe4da98;
          if ($(this)[_0x112737(0x133)]() !== "") {
            let _0x4402fb = $(this)[_0x112737(0x133)]()[_0x112737(0x11f)],
              _0x2ae3fa = $(this)[_0x112737(0xaa)](_0x112737(0xdf))
                ? $(this)[_0x112737(0xaa)](_0x112737(0xdf))
                : 0x0;
            if ($(this)[_0x112737(0xaa)]("phone-autoformat")) {
              var _0x13311a = phoneAutoFormat(
                $(this)[_0x112737(0xaa)]("phone-autoformat"),
              );
              $(this)[_0x112737(0x133)](_0x13311a($(this)[_0x112737(0x133)]()));
            }
            phoneValidation($(this)[_0x112737(0x133)](), _0x4402fb, _0x2ae3fa)
              ? (empReqTel = empReqTel[_0x112737(0x19b)](
                  (_0x219d19) => _0x219d19[_0x112737(0x171)] !== _0xd45cd0,
                ))
              : empReqTel[_0x112737(0x125)]({ input: _0xd45cd0 });
          } else
            !empReqTel[_0x112737(0x137)](
              (_0x463eda) => _0x463eda[_0x112737(0x171)] === _0xd45cd0,
            ) && empReqTel[_0x112737(0x125)]({ input: _0xd45cd0 }),
              unfilledArr[_0x112737(0x125)]({
                input: $(this)[_0x112737(0x18e)]("name"),
              });
          empReqTel[_0x112737(0x11f)] === 0x0
            ? (telFilled = !![])
            : (telFilled = ![]);
        }),
      $(steps[x])
        [_0xe4da98(0x137)](_0xe4da98(0xfe))
        [_0xe4da98(0x137)](":input[type=\x22tel\x22]")
        [_0xe4da98(0xbe)](function (_0x52fa04) {
          const _0x403b69 = _0xe4da98;
          (skipTo = undefined),
            $(this)
              [_0x403b69(0xc8)](_0x403b69(0xfa))
              [_0x403b69(0xaa)]("skip-to") !== "" &&
              (skipTo = $(this)
                ["parents"](_0x403b69(0xfa))
                [_0x403b69(0xaa)](_0x403b69(0xa5))),
            $(this)
              [_0x403b69(0xc8)](_0x403b69(0xb4))
              [_0x403b69(0x18e)](_0x403b69(0xe0)) &&
              ((answer = $(this)
                ["parents"](_0x403b69(0xb4))
                [_0x403b69(0x18e)](_0x403b69(0xe0))),
              (selections = selections[_0x403b69(0x19b)](
                (_0x48cdb4) => _0x48cdb4[_0x403b69(0x149)] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections["findIndex"](
                  (_0x59b2cf) => _0x59b2cf[_0x403b69(0x149)] === x,
                )),
                (selections[objIndex][_0x403b69(0x1aa)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0xe4da98(0x137)]("[data-answer]:visible")
        ["find"](":input[type=\x22file\x22][required]")
        [_0xe4da98(0xbe)](function (_0x45aecb) {
          const _0x5102fc = _0xe4da98;
          $(this)[_0x5102fc(0x133)]() !== ""
            ? (empReqFile = empReqFile[_0x5102fc(0x19b)](
                (_0x6fd7aa) => _0x6fd7aa[_0x5102fc(0x171)] !== _0x45aecb,
              ))
            : (!empReqFile[_0x5102fc(0x137)](
                (_0x3eee22) => _0x3eee22["input"] === _0x45aecb,
              ) && empReqFile[_0x5102fc(0x125)]({ input: _0x45aecb }),
              unfilledArr["push"]({
                input: $(this)[_0x5102fc(0x18e)](_0x5102fc(0xe4)),
              })),
            empReqFile[_0x5102fc(0x11f)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0xe4da98(0x137)](_0xe4da98(0xfe))
        [_0xe4da98(0x137)](_0xe4da98(0x180))
        ["each"](function (_0x160a87) {
          const _0x382f7f = _0xe4da98;
          (skipTo = undefined),
            $(this)
              [_0x382f7f(0xc8)](_0x382f7f(0xfa))
              [_0x382f7f(0xaa)](_0x382f7f(0xa5)) !== "" &&
              (skipTo = $(this)
                [_0x382f7f(0xc8)](_0x382f7f(0xfa))
                [_0x382f7f(0xaa)](_0x382f7f(0xa5))),
            $(this)["parents"](_0x382f7f(0xb4))["attr"]("data-go-to") &&
              ((answer = $(this)
                [_0x382f7f(0xc8)](_0x382f7f(0xb4))
                ["attr"](_0x382f7f(0xe0))),
              (selections = selections[_0x382f7f(0x19b)](
                (_0x4aefeb) => _0x4aefeb[_0x382f7f(0x149)] !== x,
              )),
              selections[_0x382f7f(0x125)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x382f7f(0x125)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x382f7f(0x121)](
                  (_0x26b040) => _0x26b040[_0x382f7f(0x149)] === x,
                )),
                (selections[objIndex][_0x382f7f(0x1aa)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x382f7f(0x1a5)] = x)));
        }),
      $(steps[x])
        [_0xe4da98(0x137)](_0xe4da98(0xfe))
        [_0xe4da98(0x137)](_0xe4da98(0x1a8))
        ["each"](function (_0x2b0121) {
          const _0x4aab93 = _0xe4da98;
          $(this)["val"]() !== ""
            ? (empReqSelect = empReqSelect[_0x4aab93(0x19b)](
                (_0x216a3b) => _0x216a3b[_0x4aab93(0x171)] !== _0x2b0121,
              ))
            : (!empReqSelect[_0x4aab93(0x137)](
                (_0x48b2c4) => _0x48b2c4[_0x4aab93(0x171)] === _0x2b0121,
              ) && empReqSelect[_0x4aab93(0x125)]({ input: _0x2b0121 }),
              unfilledArr[_0x4aab93(0x125)]({
                input: $(this)["attr"](_0x4aab93(0xe4)),
              })),
            empReqSelect[_0x4aab93(0x11f)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0xe4da98(0xfe))
        ["find"](_0xe4da98(0x145))
        [_0xe4da98(0xbe)](function (_0x12d199) {
          const _0x10e6b2 = _0xe4da98;
          (skipTo = undefined),
            $(this)
              [_0x10e6b2(0xc8)](_0x10e6b2(0xfa))
              ["data"](_0x10e6b2(0xa5)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0x10e6b2(0xfa))
                ["data"](_0x10e6b2(0xa5))),
            $(this)
              [_0x10e6b2(0xc8)](_0x10e6b2(0xb4))
              [_0x10e6b2(0x18e)]("data-go-to") &&
              ((answer = $(this)
                ["parents"](_0x10e6b2(0xb4))
                ["attr"](_0x10e6b2(0xe0))),
              (selections = selections[_0x10e6b2(0x19b)](
                (_0x2dc024) => _0x2dc024[_0x10e6b2(0x149)] !== x,
              )),
              selections[_0x10e6b2(0x125)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0x10e6b2(0x121)](
                  (_0x51f7b0) => _0x51f7b0[_0x10e6b2(0x149)] === x,
                )),
                (selections[objIndex][_0x10e6b2(0x1aa)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x10e6b2(0x1a5)] = x)));
        }),
      $(steps[x])
        [_0xe4da98(0x137)](_0xe4da98(0xfe))
        [_0xe4da98(0x137)]("textarea[required]")
        [_0xe4da98(0xbe)](function (_0x2266d5) {
          const _0x30210e = _0xe4da98;
          let _0x2b51df = $(this)[_0x30210e(0x133)]()[_0x30210e(0x11f)],
            _0x4c9a43 = $(this)[_0x30210e(0xaa)](_0x30210e(0xdf))
              ? $(this)[_0x30210e(0xaa)](_0x30210e(0xdf))
              : 0x0;
          $(this)[_0x30210e(0x133)]() !== "" && _0x2b51df >= _0x4c9a43
            ? (empReqTextarea = empReqTextarea[_0x30210e(0x19b)](
                (_0x5b2f6d) => _0x5b2f6d["input"] !== _0x2266d5,
              ))
            : (!empReqTextarea["find"](
                (_0x46d614) => _0x46d614[_0x30210e(0x171)] === _0x2266d5,
              ) && empReqTextarea["push"]({ input: _0x2266d5 }),
              unfilledArr[_0x30210e(0x125)]({
                input: $(this)["attr"](_0x30210e(0xe4)),
              })),
            empReqTextarea[_0x30210e(0x11f)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0xe4da98(0x137)](_0xe4da98(0xfe))
        [_0xe4da98(0x137)]("textarea")
        ["each"](function (_0x5d5c44) {
          const _0x17d026 = _0xe4da98;
          (skipTo = undefined),
            $(this)
              [_0x17d026(0xc8)](_0x17d026(0xfa))
              [_0x17d026(0xaa)](_0x17d026(0xa5)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0x17d026(0xfa))
                [_0x17d026(0xaa)](_0x17d026(0xa5))),
            $(this)
              [_0x17d026(0xc8)](_0x17d026(0xb4))
              [_0x17d026(0x18e)]("data-go-to") &&
              ((answer = $(this)
                [_0x17d026(0xc8)]("[data-go-to]")
                [_0x17d026(0x18e)](_0x17d026(0xe0))),
              (selections = selections[_0x17d026(0x19b)](
                (_0x2c4493) => _0x2c4493[_0x17d026(0x149)] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x17d026(0x125)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x17d026(0x121)](
                  (_0x438384) => _0x438384[_0x17d026(0x149)] === x,
                )),
                (selections[objIndex][_0x17d026(0x1aa)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x17d026(0x1a5)] = x)));
        }),
      $(steps[x])
        [_0xe4da98(0x137)](_0xe4da98(0xfe))
        [_0xe4da98(0x137)](_0xe4da98(0xc1))
        [_0xe4da98(0xbe)](function (_0x3a0d31) {
          const _0x1387a0 = _0xe4da98;
          $(this)["val"]() !== ""
            ? validateEmail(
                $(this)["val"](),
                $(this)["data"]("block-domain"),
                $(this)[_0x1387a0(0x18e)](_0x1387a0(0xe4)),
              )
            : ((emailFilled = ![]),
              unfilledArr[_0x1387a0(0x125)]({
                input: $(this)[_0x1387a0(0x18e)](_0x1387a0(0xe4)),
              }));
        }),
      $(steps[x])
        [_0xe4da98(0x137)]("[data-answer]:visible")
        [_0xe4da98(0x137)](":input[type=\x22email\x22]")
        [_0xe4da98(0xbe)](function (_0x7a4948) {
          const _0x32ab3d = _0xe4da98;
          (skipTo = undefined),
            $(this)["parents"](_0x32ab3d(0xfa))["data"](_0x32ab3d(0xa5)) !==
              "" &&
              (skipTo = $(this)
                [_0x32ab3d(0xc8)]("[data-skip-to]")
                [_0x32ab3d(0xaa)]("skip-to")),
            $(this)
              [_0x32ab3d(0xc8)]("[data-go-to]")
              [_0x32ab3d(0x18e)](_0x32ab3d(0xe0)) &&
              ((answer = $(this)
                ["parents"]("[data-go-to]")
                [_0x32ab3d(0x18e)]("data-go-to")),
              (selections = selections[_0x32ab3d(0x19b)](
                (_0x2301c4) => _0x2301c4[_0x32ab3d(0x149)] !== x,
              )),
              selections[_0x32ab3d(0x125)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x32ab3d(0x125)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x32ab3d(0x121)](
                  (_0x1c7cf8) => _0x1c7cf8["step"] === x,
                )),
                (selections[objIndex][_0x32ab3d(0x1aa)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        });
  }
  $(steps[x])["find"](":input[type=\x22radio\x22]")["is"](":checked") &&
    ((selArr = []),
    $(steps)
      [_0xe4da98(0x137)](_0xe4da98(0xb6))
      [_0xe4da98(0xbe)](function (_0x47c54c, _0x2d1e66) {
        const _0x4aa29b = _0xe4da98;
        selArr[_0x4aa29b(0x125)]({
          selected: $(this)[_0x4aa29b(0xaa)](_0x4aa29b(0x177)),
        });
      }),
    (selString = []),
    selArr[_0xe4da98(0x106)]((_0x2e0d3d) =>
      selString[_0xe4da98(0x125)](_0x2e0d3d["selected"]),
    ),
    (selections = selections[_0xe4da98(0x19b)](
      (_0x166c3b) => _0x166c3b[_0xe4da98(0x149)] !== x,
    )),
    $(steps[x])
      [_0xe4da98(0x137)](_0xe4da98(0xfe))
      ["find"](":input[type=\x27radio\x27]:checked")
      [_0xe4da98(0xbe)](function () {
        const _0x4dfe43 = _0xe4da98;
        skipTo = undefined;
        if ($(this)["parents"](_0x4dfe43(0xfa))["data"](_0x4dfe43(0xa5)))
          skipTo = $(this)
            [_0x4dfe43(0xc8)]("[data-skip-to]")
            [_0x4dfe43(0xaa)](_0x4dfe43(0xa5));
        else
          $(this)[_0x4dfe43(0xaa)]("skip-to") &&
            (skipTo = $(this)[_0x4dfe43(0xaa)](_0x4dfe43(0xa5)));
        if ($(this)[_0x4dfe43(0xaa)](_0x4dfe43(0x98)))
          (answer = $(this)["attr"](_0x4dfe43(0xe0))),
            console[_0x4dfe43(0x189)](answer, selections),
            selections["push"]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0x4dfe43(0x125)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections["findIndex"](
                (_0x1114ad) => _0x1114ad[_0x4dfe43(0x149)] === x,
              )),
              (selections[objIndex][_0x4dfe43(0x1aa)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x4dfe43(0x1a5)] = x));
        else
          $(this)[_0x4dfe43(0xc8)](_0x4dfe43(0xb4))["data"](_0x4dfe43(0x98)) &&
            ((answer = $(this)
              ["parents"](_0x4dfe43(0xb4))
              [_0x4dfe43(0xaa)](_0x4dfe43(0x98))),
            selections[_0x4dfe43(0x125)]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0x4dfe43(0x125)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0x4dfe43(0x121)](
                (_0x5b2123) => _0x5b2123[_0x4dfe43(0x149)] === x,
              )),
              (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x4dfe43(0x1a5)] = x)));
      }),
    console["log"](),
    logicExtra
      ? ($(steps[x])
          [_0xe4da98(0x137)]("[data-answer]:visible")
          [_0xe4da98(0x137)](_0xe4da98(0x110))
          [_0xe4da98(0xaa)](_0xe4da98(0x174)) === !![] ||
          $(steps[x])["find"](_0xe4da98(0xea))["data"](_0xe4da98(0x174)) ===
            !![]) &&
        skip &&
        selections[_0xe4da98(0x19b)](
          (_0x3846bf) => _0x3846bf[_0xe4da98(0x149)] === x,
        )["length"] > 0x0 &&
        textareaLength === 0x0 &&
        textInputLength === 0x0 &&
        emailInputLength === 0x0 &&
        checkboxInputLength === 0x0 &&
        setTimeout(
          function () {
            (next = !![]), nextStep(), selectionQuiz();
          },
          $(steps[x])
            [_0xe4da98(0x137)](_0xe4da98(0x15b))
            [_0xe4da98(0xaa)](_0xe4da98(0xd8)),
        )
      : $(steps[x])
          [_0xe4da98(0x137)](_0xe4da98(0x110))
          ["data"]("radio-skip") === !![] &&
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
            [_0xe4da98(0x137)](_0xe4da98(0x15b))
            ["data"](_0xe4da98(0xd8)),
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
  const _0x28a40e = _0x3d52b8;
  $(_0x28a40e(0x191))["hide"](),
    unfilledArr[_0x28a40e(0x11f)] > 0x0 &&
      unfilledArr[_0x28a40e(0x106)](function (_0x197ec6) {
        const _0x4223f7 = _0x28a40e;
        $(_0x4223f7(0x18f) + _0x197ec6[_0x4223f7(0x171)] + "\x22]")
          [_0x4223f7(0x140)](_0x4223f7(0x191))
          ["fadeIn"](),
          $(_0x4223f7(0x18f) + _0x197ec6[_0x4223f7(0x171)] + "\x22]")
            ["parents"]()
            [_0x4223f7(0xb8)](_0x4223f7(0x191))
            [_0x4223f7(0xdc)](),
          $(_0x4223f7(0x13a) + _0x197ec6["input"] + "\x22]")
            [_0x4223f7(0x140)]("[data-text=\x22error-message\x22]")
            ["fadeIn"](),
          $(_0x4223f7(0x152) + _0x197ec6["input"] + "\x22]")
            [_0x4223f7(0x140)](_0x4223f7(0x191))
            ["fadeIn"]();
      });
}
function resetInputErrorMessage(_0x498799) {
  const _0x11cab0 = _0x3d52b8;
  $(_0x11cab0(0x18f) + _0x498799 + "\x22]")
    ["siblings"](_0x11cab0(0x191))
    [_0x11cab0(0x104)](),
    $(_0x11cab0(0x18f) + _0x498799 + "\x22]")
      [_0x11cab0(0xc8)]()
      [_0x11cab0(0xb8)](_0x11cab0(0x191))
      [_0x11cab0(0x104)](),
    $("textarea[name=\x22" + _0x498799 + "\x22]")
      [_0x11cab0(0x140)](_0x11cab0(0x191))
      [_0x11cab0(0x104)](),
    $("select[name=\x22" + _0x498799 + "\x22]")
      [_0x11cab0(0x140)](_0x11cab0(0x191))
      [_0x11cab0(0x104)]();
}
function increaseCurstep() {
  const _0x3abf45 = _0x3d52b8;
  countCard
    ? ((curStep = curStep + 0x1),
      $(_0x3abf45(0xec))[_0x3abf45(0xae)](steps["length"]))
    : $(steps[x])[_0x3abf45(0xaa)](_0x3abf45(0x175))
    ? (curStep = curStep + 0x0)
    : (curStep = curStep + 0x1),
    $(_0x3abf45(0x1b3))[_0x3abf45(0xae)](curStep);
}
function decreaseCurstep() {
  const _0x1f00f1 = _0x3d52b8;
  countCard
    ? ((curStep = curStep - 0x1),
      $(_0x1f00f1(0xec))[_0x1f00f1(0xae)](steps[_0x1f00f1(0x11f)]))
    : $(steps[x])[_0x1f00f1(0xaa)](_0x1f00f1(0x175))
    ? (curStep = curStep - 0x0)
    : (curStep = curStep - 0x1),
    $("[data-text=\x22current-step\x22]")[_0x1f00f1(0xae)](curStep);
}
function nextStep() {
  const _0x1a0149 = _0x3d52b8;
  customError
    ? ($(_0x1a0149(0x191))["hide"](),
      fill
        ? (x++,
          increaseCurstep(),
          (progress = x),
          x <= steps[_0x1a0149(0x11f)] - 0x1 &&
            (updateStep(), memory && saveFilledInput()))
        : displayErrorMessage())
    : (x++,
      increaseCurstep(),
      x > progress && (progress = x),
      x <= steps[_0x1a0149(0x11f)] - 0x1 &&
        (updateStep(), memory && saveFilledInput())),
    andLogic();
}
function backStep() {
  const _0x329cad = _0x3d52b8;
  customError && $("[data-text=\x22error-message\x22]")[_0x329cad(0x104)](),
    decreaseCurstep(),
    x > 0x0 &&
      ($(progressbar[x])[_0x329cad(0x18d)]("current"),
      selections[_0x329cad(0x19b)]((_0x22fc92) => _0x22fc92["skipTo"] === x)[
        _0x329cad(0x11f)
      ] > 0x0
        ? (x = parseInt(
            getSafe(
              () =>
                selections[_0x329cad(0x19b)](
                  (_0x287a87) => _0x287a87["skipTo"] === x,
                )[0x0][_0x329cad(0x1a5)],
            ),
          ))
        : x--,
      updateStep()),
    ($(steps[x])["find"]("[data-radio-skip]:visible")["data"]("radio-skip") ===
      !![] ||
      $(steps[x])
        [_0x329cad(0x137)](_0x329cad(0xfe))
        [_0x329cad(0x137)](_0x329cad(0x110))
        [_0x329cad(0xaa)](_0x329cad(0x174)) === !![] ||
      $(steps[x])
        [_0x329cad(0x137)]("[data-answer][data-radio-skip]:visible")
        [_0x329cad(0xaa)](_0x329cad(0x174)) === !![]) &&
      ((all_data = all_data["filter"](
        (_0x111a59) =>
          _0x111a59[_0x329cad(0xef)] !==
          $(steps[x])
            [_0x329cad(0x137)](_0x329cad(0xa8))
            [_0x329cad(0x18e)](_0x329cad(0xe4)),
      )),
      $(
        _0x329cad(0xa3) +
          $(steps[x])
            [_0x329cad(0x137)](_0x329cad(0xa8))
            [_0x329cad(0x18e)](_0x329cad(0xe4)) +
          "\x22]",
      )["hide"](),
      $(steps[x])
        [_0x329cad(0x137)]("input[type=\x22radio\x22]")
        [_0x329cad(0x131)](_0x329cad(0x12c), ![]),
      $(steps[x])["find"](_0x329cad(0x112))[_0x329cad(0x18d)](_0x329cad(0x1a7)),
      validation());
}
weightedSelectionRange &&
  $("[data-selection]")[_0x3d52b8(0xbe)](function () {
    const _0x159ccd = _0x3d52b8;
    $(this)[_0x159ccd(0x186)](
      _0x159ccd(0x1a4) +
        $(this)[_0x159ccd(0xaa)](_0x159ccd(0xe3)) +
        _0x159ccd(0xde),
    );
  });
function selectionQuiz() {
  const _0x1166c2 = _0x3d52b8;
  if ($(this)["find"]("[data-btn=\x22check\x22]")) {
    $(_0x1166c2(0x107))[_0x1166c2(0x104)](),
      $("[data-selection-weight]")[_0x1166c2(0x104)]();
    if (weightedSelection) {
      (selTotal = 0x0),
        selArr[_0x1166c2(0x106)](function (_0x19e642) {
          selTotal = selTotal + _0x19e642["selected"];
        }),
        $(_0x1166c2(0x148))["text"](selTotal);
      if ($(_0x1166c2(0x12e) + selTotal + "\x22]")[_0x1166c2(0x11f)] > 0x0)
        $("[data-selection=\x22" + selTotal + "\x22]")[_0x1166c2(0xdc)]();
      else
        $(_0x1166c2(0x99) + selTotal + ")")
          ? $(_0x1166c2(0x99) + selTotal + ")")
              [_0x1166c2(0xbd)](_0x1166c2(0x107))
              ["eq"](0x0)
              [_0x1166c2(0x161)]()
          : $(_0x1166c2(0x138))[_0x1166c2(0xdc)]();
    } else {
      let _0x493933 = -0x1;
      $(_0x1166c2(0x107))[_0x1166c2(0xbe)](function (_0x128831) {
        const _0x3329c5 = _0x1166c2;
        $($(_0x3329c5(0x107))[_0x128831])
          [_0x3329c5(0xaa)]("selection")
          ["includes"](selString[_0x3329c5(0x16b)]()) &&
          (_0x493933 = _0x128831);
      }),
        _0x493933 > -0x1
          ? $($("[data-selection]")[_0x493933])[_0x1166c2(0xdc)]()
          : $("[data-selection=\x22other\x22]")[_0x1166c2(0xdc)]();
    }
  }
}
function triggerInputAllData() {
  const _0x223332 = _0x3d52b8;
  if (savedFilledInput && memory)
    savedFilledInput["forEach"]((_0x14db8d) => {
      const _0x3f6d15 = _0x3072;
      var _0x20bce2 = $(
          _0x3f6d15(0x18f) +
            _0x14db8d[_0x3f6d15(0xc0)] +
            _0x3f6d15(0xb5) +
            _0x14db8d[_0x3f6d15(0xfd)] +
            "\x22]",
        ),
        _0x14a09b = $(_0x3f6d15(0x18f) + _0x14db8d[_0x3f6d15(0xc0)] + "\x22]");
      console[_0x3f6d15(0x189)](
        _0x20bce2[_0x3f6d15(0xc8)](_0x3f6d15(0x185))[_0x3f6d15(0xaa)](
          _0x3f6d15(0x174),
        ),
      );
      if (_0x20bce2[_0x3f6d15(0x18e)]("type") !== _0x3f6d15(0x122)) {
        if (
          _0x20bce2[_0x3f6d15(0x18e)](_0x3f6d15(0xbb)) === _0x3f6d15(0x150) &&
          !_0x20bce2["parents"](_0x3f6d15(0x185))["data"](_0x3f6d15(0x174))
        )
          _0x20bce2[_0x3f6d15(0xf1)](),
            _0x20bce2[_0x3f6d15(0x140)](_0x3f6d15(0xab))["addClass"](
              _0x3f6d15(0x1a7),
            ),
            _0x20bce2[_0x3f6d15(0x17b)](_0x3f6d15(0x171));
        else
          _0x14db8d[_0x3f6d15(0xfd)] === "on"
            ? (_0x14a09b[_0x3f6d15(0xf1)](),
              _0x14a09b["siblings"](_0x3f6d15(0x188))["addClass"](
                "w--redirected-checked",
              ),
              _0x14a09b[_0x3f6d15(0x17b)](_0x3f6d15(0x171)))
            : (console[_0x3f6d15(0x189)](
                _0x14db8d[_0x3f6d15(0xc0)],
                _0x14db8d[_0x3f6d15(0xfd)],
              ),
              _0x14a09b[_0x3f6d15(0x133)](_0x14db8d["value"]),
              _0x14a09b["val"](_0x14db8d[_0x3f6d15(0xfd)]),
              $(_0x3f6d15(0xa4) + _0x14db8d[_0x3f6d15(0xfd)] + "\x22]")[
                _0x3f6d15(0x131)
              ](_0x3f6d15(0x177), !![]),
              _0x14a09b[_0x3f6d15(0x17b)]("input"),
              _0x14a09b[_0x3f6d15(0x17b)]("change"));
      }
    });
  else
    _params &&
      (getParams(),
      searchQ[_0x223332(0x106)]((_0x1b9c26) => {
        const _0x590adb = _0x223332;
        if (
          $(
            _0x590adb(0x18f) +
              _0x1b9c26[_0x590adb(0xc0)] +
              _0x590adb(0xb5) +
              _0x1b9c26["value"] +
              "\x22]",
          )[_0x590adb(0x18e)](_0x590adb(0xbb)) !== "file"
        ) {
          if (
            $(
              _0x590adb(0x18f) +
                _0x1b9c26[_0x590adb(0x1af)] +
                _0x590adb(0xb5) +
                _0x1b9c26["val"] +
                "\x22]",
            )[_0x590adb(0x18e)](_0x590adb(0xbb)) === _0x590adb(0x150)
          )
            $(
              "input[name=\x22" +
                _0x1b9c26[_0x590adb(0x1af)] +
                "\x22][value=\x22" +
                _0x1b9c26[_0x590adb(0x133)] +
                "\x22]",
            )[_0x590adb(0xf1)](),
              $(
                _0x590adb(0x18f) +
                  _0x1b9c26[_0x590adb(0x1af)] +
                  _0x590adb(0xb5) +
                  _0x1b9c26[_0x590adb(0x133)] +
                  "\x22]",
              )
                [_0x590adb(0x140)](_0x590adb(0xab))
                ["addClass"](_0x590adb(0x1a7)),
              $(
                _0x590adb(0x18f) +
                  _0x1b9c26[_0x590adb(0x1af)] +
                  _0x590adb(0xb5) +
                  _0x1b9c26[_0x590adb(0x133)] +
                  "\x22]",
              )[_0x590adb(0x17b)]("input");
          else
            _0x1b9c26[_0x590adb(0x133)] === "on"
              ? ($("input[name=\x22" + _0x1b9c26[_0x590adb(0x1af)] + "\x22]")[
                  _0x590adb(0xf1)
                ](),
                $(_0x590adb(0x18f) + _0x1b9c26[_0x590adb(0x1af)] + "\x22]")
                  ["siblings"](_0x590adb(0x188))
                  [_0x590adb(0xc5)](_0x590adb(0x1a7)),
                $("input[name=\x22" + _0x1b9c26["key"] + "\x22]")["trigger"](
                  _0x590adb(0x171),
                ))
              : ($(_0x590adb(0x18f) + _0x1b9c26[_0x590adb(0x1af)] + "\x22]")[
                  _0x590adb(0x133)
                ](_0x1b9c26[_0x590adb(0x133)]),
                $(_0x590adb(0x13a) + _0x1b9c26[_0x590adb(0x1af)] + "\x22]")[
                  _0x590adb(0x133)
                ](_0x1b9c26[_0x590adb(0x133)]),
                $(_0x590adb(0x152) + _0x1b9c26[_0x590adb(0x1af)] + "\x22]")
                  [_0x590adb(0x137)](
                    _0x590adb(0xa4) + _0x1b9c26[_0x590adb(0x133)] + "\x22]",
                  )
                  [_0x590adb(0x131)](_0x590adb(0x177), !![]),
                $("input[name=\x22" + _0x1b9c26[_0x590adb(0x1af)] + "\x22]")[
                  _0x590adb(0x17b)
                ](_0x590adb(0x171)),
                $(_0x590adb(0x18f) + _0x1b9c26[_0x590adb(0x1af)] + "\x22]")[
                  _0x590adb(0x17b)
                ](_0x590adb(0xf7)));
        }
      }));
}
$(_0x3d52b8(0x108))["on"]("click", function () {
  (next = !![]), nextStep(), selectionQuiz();
}),
  $(_0x3d52b8(0x13f))["on"]("click", function () {
    (next = ![]), (back = !![]), backStep();
  }),
  $(steps)
    [_0x3d52b8(0x137)](":input")
    [_0x3d52b8(0x10b)](_0x3d52b8(0xb0))
    ["on"](_0x3d52b8(0x171), function (_0x16ab0c) {
      validation(), andLogic();
    }),
  $(steps)
    ["find"](_0x3d52b8(0x115))
    ["on"](_0x3d52b8(0xf1), function () {
      (skip = !![]), validation();
    });
$("[data-clickable-all]")[_0x3d52b8(0xaa)]("clickable-all")
  ? $(_0x3d52b8(0xc7))[_0x3d52b8(0x18d)](_0x3d52b8(0x170))
  : $(_0x3d52b8(0xc7))[_0x3d52b8(0xc5)](_0x3d52b8(0x170));
function clickableIndicator() {
  const _0x5e7b84 = _0x3d52b8;
  $(_0x5e7b84(0x1b4))[_0x5e7b84(0xaa)](_0x5e7b84(0x197)) &&
    ($("[data-form=\x22progress-indicator\x22]")[_0x5e7b84(0x18d)](
      _0x5e7b84(0x100),
    ),
    $(_0x5e7b84(0x1b4))["data"](_0x5e7b84(0x193))
      ? ((x = $(this)[_0x5e7b84(0x13b)]()), updateStep())
      : $(this)[_0x5e7b84(0x13b)]() <= progress &&
        ((x = $(this)[_0x5e7b84(0x13b)]()), updateStep())),
    $("[data-text=\x22current-step\x22]")["text"](x + 0x1);
}
$(_0x3d52b8(0xc7))["on"](_0x3d52b8(0xf1), clickableIndicator);
$("[data-form=\x22multistep\x22]")[_0x3d52b8(0xaa)](_0x3d52b8(0x12b)) &&
  ($(_0x3d52b8(0xb4))[_0x3d52b8(0xbe)](function () {
    const _0x22b1b6 = _0x3d52b8;
    $(this)[_0x22b1b6(0x186)](
      _0x22b1b6(0x198),
      $(this)[_0x22b1b6(0xaa)](_0x22b1b6(0x98)),
    );
  }),
  $(_0x3d52b8(0x1b1))[_0x3d52b8(0xbe)](function () {
    const _0x45365f = _0x3d52b8;
    $(this)[_0x45365f(0x186)](
      "<br>Data\x20Answer\x20=\x20",
      $(this)["data"](_0x45365f(0xcc)),
    );
  }));
$("[data-form=\x22submit-btn\x22]")["on"](
  _0x3d52b8(0xf1),
  function (_0x3c59ab) {
    const _0x4e36c7 = _0x3d52b8;
    $(this)["data"](_0x4e36c7(0xa2)) &&
      (redirectTo = $(this)[_0x4e36c7(0xaa)](_0x4e36c7(0xa2))),
      !$(this)[_0x4e36c7(0xaa)](_0x4e36c7(0x19f)) &&
        (newTab = $(this)[_0x4e36c7(0xaa)](_0x4e36c7(0x19f))),
      (successCard = $(this)[_0x4e36c7(0xaa)](_0x4e36c7(0x13e))),
      _0x3c59ab[_0x4e36c7(0xf9)](),
      _0x3c59ab[_0x4e36c7(0xcb)](),
      logicExtra &&
        ($(this)["prop"](_0x4e36c7(0x160), !![]),
        $(steps)
          [_0x4e36c7(0x137)](_0x4e36c7(0x1a0))
          [_0x4e36c7(0x131)](_0x4e36c7(0xe7), ![])),
      localStorage["removeItem"]("filledInput"),
      fill &&
        ($(this)["data"](_0x4e36c7(0xe1))
          ? $(this)["val"]($(this)[_0x4e36c7(0xaa)]("wait"))
          : ($(this)[_0x4e36c7(0x133)]("Please\x20wait..."),
            $(this)[_0x4e36c7(0xae)](_0x4e36c7(0x10a))),
        $(_0x4e36c7(0x10c))[_0x4e36c7(0x155)](),
        $(_0x4e36c7(0xff))[_0x4e36c7(0x11f)] > 0x0 &&
          grecaptcha[_0x4e36c7(0xc3)]()[_0x4e36c7(0x11f)] === 0x0 &&
          (form[_0x4e36c7(0x137)]("[data-form=\x22submit-btn\x22]")[
            _0x4e36c7(0xae)
          ](oldSubmitText),
          form["find"](_0x4e36c7(0xe2))[_0x4e36c7(0x133)](oldSubmitText)));
  },
);
function _0x3072(_0x4d9daa, _0x345dce) {
  const _0x5a91be = _0x5a91();
  return (
    (_0x3072 = function (_0x307238, _0x52ab75) {
      _0x307238 = _0x307238 - 0x98;
      let _0x2c10e5 = _0x5a91be[_0x307238];
      return _0x2c10e5;
    }),
    _0x3072(_0x4d9daa, _0x345dce)
  );
}
function resetFormly() {
  const _0x38911d = _0x3d52b8;
  $(_0x38911d(0x10c))[_0x38911d(0x17b)]("reset"),
    $(_0x38911d(0x10c))
      [_0x38911d(0xc8)]()
      [_0x38911d(0x137)](_0x38911d(0x181))
      [_0x38911d(0x104)](),
    (x = 0x0),
    updateStep(),
    $(_0x38911d(0x10c))[_0x38911d(0x161)](),
    $("[data-form=\x22submit-btn\x22]")[_0x38911d(0xae)](oldSubmitText),
    $("[data-form=\x22submit-btn\x22]")[_0x38911d(0x133)](oldSubmitText),
    $(_0x38911d(0x1b3))["text"](0x1),
    $("[data-form=\x22multistep\x22]")
      [_0x38911d(0x137)]("input:checkbox")
      [_0x38911d(0x140)](_0x38911d(0x188))
      ["removeClass"](_0x38911d(0x1a7));
}
$(document)[_0x3d52b8(0x192)](function (_0x500b24, _0x59c175, _0x40829e) {
  const _0x2944b5 = _0x3d52b8;
  if (_0x40829e[_0x2944b5(0x124)]["includes"](_0x2944b5(0x163))) {
    const _0x130955 = _0x59c175[_0x2944b5(0x14c)] === 0xc8,
      _0x4a8c10 = "redirect-form-hehexd";
    redirectTo &&
      _0x130955 &&
      (newTab
        ? window[_0x2944b5(0xd3)](redirectTo, _0x2944b5(0xc4))
        : setTimeout(() => {
            const _0x4365ef = _0x2944b5;
            location[_0x4365ef(0xee)] = redirectTo;
          }, redirectDelay)),
      _0x130955 &&
        successCard !== "" &&
        $(_0x2944b5(0x199) + successCard + "\x22]")["fadeIn"](),
      _0x130955 &&
        formReset &&
        setTimeout(() => {
          resetFormly();
        }, resetDelay),
      !_0x130955 &&
        ($(_0x2944b5(0xe2))[_0x2944b5(0x133)]("Please\x20wait..."),
        $(_0x2944b5(0xe2))[_0x2944b5(0xae)]("Please\x20wait..."));
  }
}),
  $("[data-btn=\x22edit\x22]")["on"]("click", function () {
    const _0x1586a8 = _0x3d52b8;
    var _0x3eedcb = $(this)
      [_0x1586a8(0xbd)]()
      [_0x1586a8(0x137)](_0x1586a8(0x141))
      [_0x1586a8(0xaa)](_0x1586a8(0xf4));
    setTimeout(function () {
      const _0x599dd4 = _0x1586a8;
      $("input[name=\x22" + _0x3eedcb + "\x22]")[_0x599dd4(0x10f)]();
    }, 0x64),
      (back = !![]),
      (x = $(this)[_0x1586a8(0xaa)](_0x1586a8(0x147)) - 0x1),
      updateStep(),
      countCard
        ? ((curStep = x + 0x1),
          $(_0x1586a8(0xec))[_0x1586a8(0xae)](steps[_0x1586a8(0x11f)]))
        : $(steps[x])["data"]("card")
        ? (curStep = x + 0x0)
        : (curStep = x + 0x1),
      $(_0x1586a8(0x1b3))[_0x1586a8(0xae)](curStep),
      (back = ![]);
  }),
  $("[data-btn=\x22reset\x22]")["on"](_0x3d52b8(0xf1), function () {
    const _0x44f5dc = _0x3d52b8;
    $(_0x44f5dc(0x10c))["trigger"]("reset");
    let _0x2e671d = $(this);
    $(this)[_0x44f5dc(0xae)](_0x44f5dc(0x10a)),
      setTimeout(function () {
        const _0x502131 = _0x44f5dc;
        $(_0x2e671d)[_0x502131(0xae)](oldResetText),
          $(_0x2e671d)[_0x502131(0xc8)](".w-form-done")[_0x502131(0x104)](),
          (x = 0x0),
          updateStep(),
          $(_0x502131(0x10c))["show"](),
          $(_0x502131(0xe2))[_0x502131(0xae)](oldSubmitText),
          $("[data-form=\x22submit-btn\x22]")["val"](oldSubmitText),
          $(_0x2e671d)[_0x502131(0x133)](oldSubmitText),
          $(_0x502131(0x1b3))[_0x502131(0xae)](0x1),
          $(_0x502131(0x10c))
            [_0x502131(0x137)](_0x502131(0x16c))
            [_0x502131(0x140)](_0x502131(0x188))
            [_0x502131(0x18d)](_0x502131(0x1a7));
      }, resetDelay);
  }),
  $("body")["on"](_0x3d52b8(0x18a), function (_0xef29f2) {
    const _0x1fccab = _0x3d52b8;
    _0xef29f2[_0x1fccab(0xdd)] === 0xd &&
      fill &&
      ($(_0x1fccab(0x9e))[_0x1fccab(0xaa)](_0x1fccab(0xd7))
        ? (totalSteps > curStep && $(_0x1fccab(0x108))[0x0]["click"](),
          _0xef29f2[_0x1fccab(0xf9)](),
          _0xef29f2[_0x1fccab(0xcb)]())
        : (_0xef29f2[_0x1fccab(0xf9)](), _0xef29f2["stopPropagation"]()));
  }),
  $(_0x3d52b8(0x103))["keydown"](function (_0x32cad3) {
    const _0x4cf979 = _0x3d52b8;
    (_0x32cad3[_0x4cf979(0x165)] || _0x32cad3[_0x4cf979(0x194)]) &&
      _0x32cad3[_0x4cf979(0xdd)] == 0xd &&
      (x >= steps["length"] - 0x1 && fill
        ? $(steps[x])["find"](_0x4cf979(0x11d))[_0x4cf979(0xf1)]()
        : (event[_0x4cf979(0xf9)](), event[_0x4cf979(0xcb)]()));
  }),
  $("textarea")["keypress"](function (_0x4efb5c) {
    const _0x228b04 = _0x3d52b8;
    $(this)[_0x228b04(0x10f)](),
      _0x4efb5c["key"] == _0x228b04(0x12d) &&
        (_0x4efb5c[_0x228b04(0xf9)](), _0x4efb5c[_0x228b04(0xcb)]()),
      _0x4efb5c[_0x228b04(0xbf)] &&
        _0x4efb5c[_0x228b04(0x1af)] == _0x228b04(0x12d) &&
        $(this)["val"]($(this)[_0x228b04(0x133)]() + "\x0a");
  }),
  $("[data-form=\x22multistep\x22]")
    [_0x3d52b8(0x137)](_0x3d52b8(0x1a0))
    ["on"]("change", function () {
      const _0x49ce0e = _0x3d52b8;
      (all_data = all_data[_0x49ce0e(0x19b)](
        (_0x3ccdce) =>
          _0x3ccdce[_0x49ce0e(0xef)] !==
          $(this)[_0x49ce0e(0x18e)](_0x49ce0e(0xe4)),
      )),
        $(this)[_0x49ce0e(0x18e)](_0x49ce0e(0xbb)) === _0x49ce0e(0xd2)
          ? $(this)["is"](_0x49ce0e(0x146))
            ? all_data["push"]({
                field: $(this)[_0x49ce0e(0x18e)](_0x49ce0e(0xe4)),
                value: $(this)
                  [_0x49ce0e(0x140)](_0x49ce0e(0x129))
                  [_0x49ce0e(0xae)](),
              })
            : $(
                "[data-input-field=\x22" +
                  $(this)[_0x49ce0e(0x18e)]("name") +
                  "\x22]",
              )["hide"]()
          : (all_data["push"]({
              field: $(this)[_0x49ce0e(0x18e)](_0x49ce0e(0xe4)),
              value: $(this)[_0x49ce0e(0x133)](),
            }),
            $(this)[_0x49ce0e(0x133)]() !== "" &&
              resetInputErrorMessage(
                $(this)[_0x49ce0e(0x18e)](_0x49ce0e(0xe4)),
              )),
        all_data[_0x49ce0e(0x106)](function (_0x592d92) {
          const _0x5a9510 = _0x49ce0e;
          $("[data-input-field=\x22" + _0x592d92[_0x5a9510(0xef)] + "\x22]")[
            _0x5a9510(0x161)
          ](),
            $("[data-input-field=\x22" + _0x592d92[_0x5a9510(0xef)] + "\x22]")[
              _0x5a9510(0xae)
            ](_0x592d92["value"]);
        });
    }),
  $("[data-form=\x22multistep\x22]")
    [_0x3d52b8(0x137)]("textarea")
    ["on"](_0x3d52b8(0xf7), function () {
      const _0xa26fbe = _0x3d52b8;
      $(this)[_0xa26fbe(0x133)]() !== "" &&
        resetInputErrorMessage($(this)["attr"](_0xa26fbe(0xe4))),
        (all_data = all_data[_0xa26fbe(0x19b)](
          (_0x1eba87) =>
            _0x1eba87[_0xa26fbe(0xef)] !==
            $(this)[_0xa26fbe(0x18e)](_0xa26fbe(0xe4)),
        )),
        all_data[_0xa26fbe(0x125)]({
          field: $(this)[_0xa26fbe(0x18e)](_0xa26fbe(0xe4)),
          value: $(this)["val"](),
        }),
        all_data[_0xa26fbe(0x106)](function (_0x3ee015) {
          const _0x32b1e8 = _0xa26fbe;
          $(_0x32b1e8(0xa3) + _0x3ee015[_0x32b1e8(0xef)] + "\x22]")["show"](),
            $(_0x32b1e8(0xa3) + _0x3ee015["field"] + "\x22]")["text"](
              _0x3ee015[_0x32b1e8(0xfd)],
            );
        });
    }),
  $("[data-form=\x22multistep\x22]")
    [_0x3d52b8(0x137)](_0x3d52b8(0x145))
    ["on"](_0x3d52b8(0xf7), function () {
      const _0x2f4eeb = _0x3d52b8;
      $(this)[_0x2f4eeb(0x133)]() !== "" &&
        resetInputErrorMessage($(this)[_0x2f4eeb(0x18e)](_0x2f4eeb(0xe4)));
      var _0x932e7 = $(this)[_0x2f4eeb(0xaa)](_0x2f4eeb(0x182));
      (all_data = all_data[_0x2f4eeb(0x19b)](
        (_0x5561cc) =>
          _0x5561cc[_0x2f4eeb(0xef)] !==
          $(this)[_0x2f4eeb(0x18e)](_0x2f4eeb(0xe4)),
      )),
        all_data[_0x2f4eeb(0x125)]({
          field: $(this)[_0x2f4eeb(0x18e)](_0x2f4eeb(0xe4)),
          value: _0x932e7
            ? $(this)[_0x2f4eeb(0x137)](_0x2f4eeb(0xfc))[_0x2f4eeb(0xae)]()
            : $(this)["val"](),
        }),
        all_data[_0x2f4eeb(0x106)](function (_0x451686) {
          const _0x4d3227 = _0x2f4eeb;
          $(_0x4d3227(0xa3) + _0x451686[_0x4d3227(0xef)] + "\x22]")[
            _0x4d3227(0x161)
          ](),
            $("[data-input-field=\x22" + _0x451686[_0x4d3227(0xef)] + "\x22]")[
              _0x4d3227(0xae)
            ](_0x451686[_0x4d3227(0xfd)]);
        });
    }),
  updateStep(),
  triggerInputAllData(),
  $("[data-cms-select=cms]")["each"](function () {
    const _0x2aa486 = _0x3d52b8,
      _0xcb1b35 = $(this)[_0x2aa486(0x137)](_0x2aa486(0x144)),
      _0x36563e = [];
    console[_0x2aa486(0x189)](_0x36563e),
      _0xcb1b35[_0x2aa486(0xbe)](function () {
        const _0x38b069 = _0x2aa486;
        _0x36563e[_0x38b069(0x125)](
          $(this)[_0x38b069(0xae)]()[_0x38b069(0x15e)](),
        );
      });
    const _0x310837 = $(this)[_0x2aa486(0x140)](_0x2aa486(0x164));
    $["each"](_0x36563e, function (_0xa98e84, _0x155b07) {
      const _0x1f15ef = _0x2aa486,
        _0x135039 = $(_0x1f15ef(0x187))["val"](_0x155b07)["text"](_0x155b07);
      _0x310837[_0x1f15ef(0x186)](_0x135039);
    });
  });
function cloneRemove() {
  const _0x592631 = _0x3d52b8;
  $("[data-clone-wrapper]")[_0x592631(0xbe)](function () {
    const _0x2ae95b = _0x592631;
    $(this)["find"]("[data-clone]")[_0x2ae95b(0x11f)] < 0x2
      ? $(this)[_0x2ae95b(0x137)](_0x2ae95b(0x105))["hide"]()
      : $(this)[_0x2ae95b(0x137)](_0x2ae95b(0x105))[_0x2ae95b(0x161)]();
  });
}
function cloneRemoveInput() {
  const _0x551e0a = _0x3d52b8;
  $(_0x551e0a(0xa0))["each"](function () {
    const _0x562ef2 = _0x551e0a;
    $(this)[_0x562ef2(0x137)]("[data-clone-input]")["length"] < 0x2
      ? $(this)[_0x562ef2(0x137)](_0x562ef2(0xf2))[_0x562ef2(0x104)]()
      : $(this)[_0x562ef2(0x137)](_0x562ef2(0xf2))[_0x562ef2(0x161)]();
  });
}
$(_0x3d52b8(0x105))["on"](_0x3d52b8(0xf1), function () {
  const _0x4067f2 = _0x3d52b8,
    _0x1682b5 =
      $(this)[_0x4067f2(0xc8)]("[data-clone]")[_0x4067f2(0x11f)] > 0x0
        ? $(this)[_0x4067f2(0xc8)](_0x4067f2(0x13d))["index"]()
        : $(this)[_0x4067f2(0xc8)]("[data-display]")[_0x4067f2(0x13b)](),
    _0x23aec3 =
      $(this)["parents"]("[data-clone]")[_0x4067f2(0x11f)] > 0x0
        ? $(this)["parents"](_0x4067f2(0x13d))[_0x4067f2(0xaa)]("clone")
        : $(this)
            [_0x4067f2(0xc8)](_0x4067f2(0x1a3))
            [_0x4067f2(0xaa)](_0x4067f2(0xb2));
  $(_0x4067f2(0x18c) + _0x23aec3 + "\x22]")
    ["eq"](_0x1682b5)
    ["remove"](),
    $("[data-display=\x22" + _0x23aec3 + "\x22]")
      ["eq"](_0x1682b5)
      [_0x4067f2(0xb7)](),
    cloneRemove(),
    validation();
}),
  $(_0x3d52b8(0xf2))["on"](_0x3d52b8(0xf1), function () {
    const _0x41c207 = _0x3d52b8;
    let _0x398296 = $(this)
      [_0x41c207(0x140)]()
      [_0x41c207(0x18e)](_0x41c207(0xe4));
    $(this)[_0x41c207(0xbd)]("[data-clone-input]")["remove"](),
      $(_0x41c207(0xa3) + _0x398296 + "\x22]")
        [_0x41c207(0xbd)](_0x41c207(0x139))
        [_0x41c207(0xb7)](),
      cloneRemove(),
      validation();
  }),
  $(_0x3d52b8(0x117))["on"](_0x3d52b8(0xf1), function () {
    const _0x43bafc = _0x3d52b8;
    let _0x59141d = $(this)[_0x43bafc(0xaa)](_0x43bafc(0x18b));
    var _0x4a4624 = $("[data-clone=\x22" + _0x59141d + "\x22]")
        ["eq"](0x0)
        [_0x43bafc(0xa7)](!![]),
      _0x3f7cfc = $(_0x43bafc(0x118) + _0x59141d + "\x22]")
        ["eq"](0x0)
        [_0x43bafc(0xa7)](!![]);
    let _0x23e632 = "";
    $(this)[_0x43bafc(0x137)](_0x43bafc(0x105))["show"](),
      cloneRemove(),
      _0x4a4624["find"](_0x43bafc(0x1a6))
        [_0x43bafc(0x137)]("input")
        [_0x43bafc(0x133)](""),
      _0x4a4624["find"](_0x43bafc(0x1a6))
        ["not"](_0x43bafc(0x1ad))
        [_0x43bafc(0xb7)](),
      _0x3f7cfc[_0x43bafc(0x137)](_0x43bafc(0x139))
        ["not"](_0x43bafc(0x1ad))
        [_0x43bafc(0xb7)](),
      _0x4a4624["find"]("input")[_0x43bafc(0xbe)](function () {
        const _0x8e6037 = _0x43bafc;
        if ($(this)["closest"](_0x8e6037(0x1a6))[_0x8e6037(0x11f)] > 0x0) {
          let _0x12e700 = 0x0;
          const _0x2af076 = $(this)
            [_0x8e6037(0x127)]("[data-clone-input]")
            [_0x8e6037(0xaa)](_0x8e6037(0x162));
          console["log"](
            $(this)
              [_0x8e6037(0x127)](_0x8e6037(0x1a6))
              ["data"](_0x8e6037(0x162)),
            this[_0x8e6037(0xe4)],
          ),
            $(_0x8e6037(0x151) + _0x2af076 + _0x8e6037(0xd1))["each"](
              function () {
                const _0x4760f3 = _0x8e6037,
                  _0x4f05ef = $(this)["attr"](_0x4760f3(0xe4));
                if (_0x4f05ef && _0x4f05ef["startsWith"]("relationship-")) {
                  const _0x284713 = parseInt(
                    _0x4f05ef[_0x4760f3(0x153)]("-")[0x1],
                  );
                  !isNaN(_0x284713) &&
                    _0x284713 > _0x12e700 &&
                    (_0x12e700 = _0x284713);
                }
              },
            ),
            _0x12e700++,
            (_0x23e632 = this[_0x8e6037(0xe4)] + "-" + _0x12e700),
            console[_0x8e6037(0x189)](_0x2af076, _0x23e632);
        } else
          _0x23e632 =
            this[_0x8e6037(0xe4)] +
            "-" +
            (parseInt(
              $(_0x8e6037(0x18c) + _0x59141d + "\x22]")
                ["last"]()
                [_0x8e6037(0x13b)](),
            ) +
              0x1);
        $(this)[_0x8e6037(0x133)](""),
          $(this)[_0x8e6037(0x18e)]("name", _0x23e632),
          $(this)["attr"](_0x8e6037(0xba), _0x23e632);
      }),
      _0x3f7cfc[_0x43bafc(0x137)](_0x43bafc(0x141))["each"](function () {
        const _0x372aa9 = _0x43bafc;
        if ($(this)["data"](_0x372aa9(0xf4))) {
          let _0x4bc1f7 = 0x0;
          const _0x3b984a = $(this)
            [_0x372aa9(0xaa)]("input-field")
            ["split"]("-")[0x0];
          $(
            _0x372aa9(0x118) +
              _0x59141d +
              _0x372aa9(0xd6) +
              _0x3b984a +
              "\x22]",
          )[_0x372aa9(0xbe)](function () {
            const _0x2e91db = _0x372aa9,
              _0x2d6fbf = $(this)[_0x2e91db(0x18e)]("data-input-field"),
              _0x16ef80 = parseInt(_0x2d6fbf[_0x2e91db(0x153)]("-")[0x1]);
            !isNaN(_0x16ef80) &&
              _0x16ef80 > _0x4bc1f7 &&
              (_0x4bc1f7 = _0x16ef80);
          }),
            _0x4bc1f7++;
          const _0x16930b = _0x3b984a + "-" + _0x4bc1f7;
          console["log"](_0x16930b),
            $(this)[_0x372aa9(0x18e)](_0x372aa9(0x17c), _0x16930b);
        }
      }),
      $("[data-clone-wrapper=\x22" + _0x59141d + "\x22]")["append"](_0x4a4624),
      $(_0x43bafc(0xbc) + _0x59141d + "\x22]")[_0x43bafc(0x186)](_0x3f7cfc),
      $(_0x43bafc(0x9f) + _0x59141d + "\x22]")[_0x43bafc(0xbe)](function () {
        const _0x10319d = _0x43bafc;
        $(this)[_0x10319d(0xae)](
          $(this)
            [_0x10319d(0xc8)](_0x10319d(0x18c) + _0x59141d + "\x22]")
            ["index"]() + 0x1,
        );
      }),
      $("[data-display-index=\x22" + _0x59141d + "\x22]")[_0x43bafc(0xbe)](
        function () {
          const _0x5c2552 = _0x43bafc;
          $(this)[_0x5c2552(0xae)](
            $(this)
              [_0x5c2552(0xc8)](_0x5c2552(0x118) + _0x59141d + "\x22]")
              [_0x5c2552(0x13b)]() + 0x1,
          );
        },
      ),
      validation();
  }),
  $(_0x3d52b8(0x16f))["on"](_0x3d52b8(0xf1), function () {
    const _0x9d6b5f = _0x3d52b8,
      _0x262455 = $(this)["parents"](_0x9d6b5f(0x13d))["index"]();
    let _0x156d00 = $(this)[_0x9d6b5f(0xaa)]("add-new-input");
    var _0x5b6f5c = $(_0x9d6b5f(0x151) + _0x156d00 + "\x22]")
        ["eq"](0x0)
        ["clone"](!![]),
      _0x5cec65 = $(_0x9d6b5f(0x17d) + _0x156d00 + "\x22]")
        ["eq"](0x0)
        [_0x9d6b5f(0xa7)](!![]);
    $(this)[_0x9d6b5f(0x137)](_0x9d6b5f(0xf2))["show"](), cloneRemoveInput();
    let _0x1f8b09 = 0x0;
    $(_0x9d6b5f(0x151) + _0x156d00 + "\x22]\x20input")[_0x9d6b5f(0xbe)](
      function () {
        const _0x442b3 = _0x9d6b5f,
          _0x360c75 = $(this)[_0x442b3(0x18e)](_0x442b3(0xe4));
        if (_0x360c75 && _0x360c75[_0x442b3(0x10d)](_0x442b3(0x15c))) {
          const _0xc22fb = parseInt(_0x360c75[_0x442b3(0x153)]("-")[0x1]);
          !isNaN(_0xc22fb) && _0xc22fb > _0x1f8b09 && (_0x1f8b09 = _0xc22fb);
        }
      },
    ),
      _0x1f8b09++,
      _0x5b6f5c[_0x9d6b5f(0x137)](_0x9d6b5f(0x171))[_0x9d6b5f(0xbe)](
        function () {
          const _0x12b34c = _0x9d6b5f;
          let _0x4e853d = _0x12b34c(0x15c) + _0x1f8b09;
          $(this)[_0x12b34c(0x133)](""),
            $(this)[_0x12b34c(0x18e)]("name", _0x4e853d),
            $(this)[_0x12b34c(0x18e)](_0x12b34c(0xba), _0x4e853d);
        },
      ),
      _0x5cec65[_0x9d6b5f(0x137)](_0x9d6b5f(0x141))[_0x9d6b5f(0xbe)](
        function () {
          const _0x3d31b7 = _0x9d6b5f;
          $(this)[_0x3d31b7(0x18e)](
            _0x3d31b7(0x17c),
            _0x3d31b7(0x15c) + _0x1f8b09,
          );
        },
      ),
      $(this)
        [_0x9d6b5f(0x140)](_0x9d6b5f(0x116) + _0x156d00 + "\x22]")
        [_0x9d6b5f(0x186)](_0x5b6f5c),
      $(_0x9d6b5f(0x1a3))
        ["eq"](_0x262455)
        ["find"](_0x9d6b5f(0x167) + _0x156d00 + "\x22]")
        ["append"](_0x5cec65),
      $(_0x9d6b5f(0xd0) + _0x156d00 + "\x22]")[_0x9d6b5f(0xbe)](function () {
        const _0x33f9fa = _0x9d6b5f;
        $(this)[_0x33f9fa(0xae)](
          $(this)
            [_0x33f9fa(0xc8)]("[data-clone-input=\x22" + _0x156d00 + "\x22]")
            [_0x33f9fa(0x13b)]() + 0x1,
        );
      }),
      $(_0x9d6b5f(0x128) + _0x156d00 + "\x22]")[_0x9d6b5f(0xbe)](function () {
        const _0x408b38 = _0x9d6b5f;
        $(this)[_0x408b38(0xae)](
          $(this)
            [_0x408b38(0xc8)](_0x408b38(0x17d) + _0x156d00 + "\x22]")
            [_0x408b38(0x13b)]() + 0x1,
        );
      }),
      validation();
  }),
  $(_0x3d52b8(0x176))["on"](_0x3d52b8(0xf1), function () {
    const _0x252011 = _0x3d52b8,
      _0xcab8f2 = $(this)[_0x252011(0xaa)](_0x252011(0x16d));
    $("input[name=\x22" + _0xcab8f2 + "\x22]")[_0x252011(0x133)](""),
      validation();
  });
function andLogic() {
  const _0x5ee0bf = _0x3d52b8;
  conditionalResult &&
    (steps["eq"](x)[_0x5ee0bf(0x137)](_0x5ee0bf(0xd9))[_0x5ee0bf(0x104)](),
    console[_0x5ee0bf(0x189)](_0x5ee0bf(0x157)),
    steps["eq"](x)
      ["find"](_0x5ee0bf(0xd9))
      [_0x5ee0bf(0xbe)](function () {
        const _0x13e17d = _0x5ee0bf;
        function _0x3c99d2(_0x147a13) {
          const _0x2cc566 = _0x3072,
            _0x10b9c2 = _0x147a13[_0x2cc566(0x153)]("&"),
            _0x34b65c = [];
          return (
            _0x10b9c2[_0x2cc566(0x106)]((_0x5d4aad) => {
              const _0x1418df = _0x2cc566,
                [_0x4a82e4, _0x259380] = _0x5d4aad[_0x1418df(0x153)]("=");
              _0x34b65c["push"]({ field: _0x4a82e4, value: _0x259380 });
            }),
            _0x34b65c
          );
        }
        const _0x48cef8 = $(this)[_0x13e17d(0x18e)](_0x13e17d(0x143));
        console[_0x13e17d(0x189)](_0x48cef8);
        const _0x5c29e8 = _0x3c99d2(_0x48cef8);
        function _0x2c206e(_0x2a736f, _0x761ea9) {
          return _0x761ea9["some"]((_0x38b166, _0x3aa292) => {
            const _0x12f47b = _0x3072;
            if (
              _0x2a736f[0x0] &&
              _0x38b166[_0x12f47b(0xef)] === _0x2a736f[0x0][_0x12f47b(0xef)]
            )
              return _0x2a736f[_0x12f47b(0xad)](
                (_0x39873a, _0x4199f5) =>
                  _0x761ea9[_0x3aa292 + _0x4199f5] &&
                  _0x761ea9[_0x3aa292 + _0x4199f5][_0x12f47b(0xef)] ===
                    _0x39873a[_0x12f47b(0xef)] &&
                  _0x761ea9[_0x3aa292 + _0x4199f5][_0x12f47b(0xfd)] ===
                    _0x39873a[_0x12f47b(0xfd)],
              );
            return ![];
          });
        }
        const _0x326f9c = _0x2c206e(_0x5c29e8, all_data);
        _0x326f9c ? $(this)["show"]() : $(this)[_0x13e17d(0x104)]();
      }));
}
scrollTop(), cloneRemove(), cloneRemoveInput();
