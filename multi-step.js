//29th Nov 2023
//Bug fix
//1. Logic extra checkbox issue when pressing back button

const _0x5084ba = _0x4ecf;
(function (_0x2dce73, _0x58e83a) {
  const _0xc5267a = _0x4ecf,
    _0x58a887 = _0x2dce73();
  while (!![]) {
    try {
      const _0x9905f9 =
        -parseInt(_0xc5267a(0x209)) / 0x1 +
        (-parseInt(_0xc5267a(0x25c)) / 0x2) *
          (-parseInt(_0xc5267a(0x234)) / 0x3) +
        parseInt(_0xc5267a(0x215)) / 0x4 +
        parseInt(_0xc5267a(0x27f)) / 0x5 +
        parseInt(_0xc5267a(0x2af)) / 0x6 +
        -parseInt(_0xc5267a(0x206)) / 0x7 +
        parseInt(_0xc5267a(0x258)) / 0x8;
      if (_0x9905f9 === _0x58e83a) break;
      else _0x58a887["push"](_0x58a887["shift"]());
    } catch (_0x38abca) {
      _0x58a887["push"](_0x58a887["shift"]());
    }
  }
})(_0x5230, 0xbcc21);
let x = 0x0,
  curStep = 0x0,
  steps = $(_0x5084ba(0x1fd)),
  progressbarClone = $(_0x5084ba(0x24b))[_0x5084ba(0x281)](),
  progressbar,
  countCard = !![],
  weightedSelection = $(_0x5084ba(0x1cb))[_0x5084ba(0x222)](_0x5084ba(0x1d9)),
  weightedSelectionRange = $(_0x5084ba(0x254))[_0x5084ba(0x222)](
    _0x5084ba(0x231),
  ),
  selectMultiple = $(_0x5084ba(0x29a))[_0x5084ba(0x222)]("select-multiple"),
  customError = $(_0x5084ba(0x21b))[_0x5084ba(0x222)]("custom-error-message"),
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
  reinitIX = $("[data-reinit]")[_0x5084ba(0x222)](_0x5084ba(0x2bb)),
  textareaLength = 0x0,
  textInputLength = 0x0,
  emailInputLength = 0x0,
  selectInputLength = 0x0,
  checkboxInputLength = 0x0,
  filledInput = [],
  savedFilledInput = [],
  memory = $(_0x5084ba(0x257))[_0x5084ba(0x222)](_0x5084ba(0x243)),
  quiz = $(_0x5084ba(0x2a0))[_0x5084ba(0x222)](_0x5084ba(0x1c7)),
  progress = 0x0;
const urlFormly = new URL(window[_0x5084ba(0x236)][_0x5084ba(0x283)]);
let _params = $(_0x5084ba(0x1e9))["data"]("query-param"),
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
  logicExtra = $(_0x5084ba(0x22f))[_0x5084ba(0x222)](_0x5084ba(0x20e)),
  oldSubmitText = $("[data-form=\x22submit-btn\x22]")["val"](),
  oldResetText = $(_0x5084ba(0x229))["text"](),
  formReset = $(_0x5084ba(0x22f))[_0x5084ba(0x222)](_0x5084ba(0x263)),
  successCard = "",
  redirectTo = "",
  totalSteps = 0x0,
  checkCount = 0x0,
  resetDelay = $(_0x5084ba(0x266))["data"]("reset-delay")
    ? $(_0x5084ba(0x266))[_0x5084ba(0x222)](_0x5084ba(0x1ec))
    : 0x7d0,
  redirectDelay = $(_0x5084ba(0x1ab))["data"]("redirect-delay")
    ? $(_0x5084ba(0x1ab))["data"](_0x5084ba(0x271))
    : 0x7d0,
  newTab = !![],
  unfilledArr = [],
  phoneFormat = $(_0x5084ba(0x22f))[_0x5084ba(0x222)]("phone-validation"),
  scrollToTop = $(_0x5084ba(0x22f))[_0x5084ba(0x222)](_0x5084ba(0x1b2)),
  conditionalResult =
    $("[data-conditional-result]")[_0x5084ba(0x222)]("conditional-result") ===
    "AND",
  scrollTopOffset = parseInt($(_0x5084ba(0x22f))["data"]("scroll-top-offset")),
  notRobot = !![],
  all_data = [];
const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
savedFilledInput = JSON[_0x5084ba(0x267)](
  localStorage[_0x5084ba(0x28a)](_0x5084ba(0x24e)),
);
var ogCloneArr = [];
function _0x4ecf(_0x439f82, _0x22e2d7) {
  const _0x523009 = _0x5230();
  return (
    (_0x4ecf = function (_0x4ecfb3, _0x351497) {
      _0x4ecfb3 = _0x4ecfb3 - 0x19f;
      let _0x16f58f = _0x523009[_0x4ecfb3];
      return _0x16f58f;
    }),
    _0x4ecf(_0x439f82, _0x22e2d7)
  );
}
$(_0x5084ba(0x2b9))[_0x5084ba(0x264)](function () {
  const _0x3896be = _0x5084ba;
  ogCloneArr[_0x3896be(0x251)]({
    name: $(this)[_0x3896be(0x222)]("clone"),
    element: $(this)[_0x3896be(0x281)](!![]),
    display: $("[data-display=\x22" + $(this)["data"]("clone") + "\x22]")
      ["eq"](0x0)
      [_0x3896be(0x281)](!![]),
  });
});
$(_0x5084ba(0x26b))[_0x5084ba(0x288)] > 0x0 && (notRobot = ![]);
function recaptcha(_0x336b6b) {
  notRobot = !![];
}
$("[data-count-card]")[_0x5084ba(0x288)] > 0x0 &&
  (countCard = $(_0x5084ba(0x1f6))[_0x5084ba(0x222)](_0x5084ba(0x1b9)));
$(_0x5084ba(0x1cf))[_0x5084ba(0x259)](),
  $(progressbarClone)[_0x5084ba(0x260)](_0x5084ba(0x1f8)),
  $(_0x5084ba(0x2b7))[_0x5084ba(0x284)]()[_0x5084ba(0x1a3)](),
  $(_0x5084ba(0x1d2))[_0x5084ba(0x259)](),
  $(_0x5084ba(0x28b))[_0x5084ba(0x259)](),
  steps[_0x5084ba(0x264)](function () {
    const _0x771c82 = _0x5084ba;
    $(_0x771c82(0x2b7))[_0x771c82(0x210)](
      progressbarClone["clone"](!![], !![]),
    );
  }),
  $(_0x5084ba(0x200))["hide"]();
countCard
  ? ((curStep = curStep + 0x1),
    (totalSteps = steps[_0x5084ba(0x288)]),
    $(_0x5084ba(0x27c))[_0x5084ba(0x2ba)](totalSteps))
  : ($(steps[x])[_0x5084ba(0x222)](_0x5084ba(0x2a1))
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    (totalSteps = $("[data-form=\x22step\x22]:not([data-card=\x22true\x22])")[
      _0x5084ba(0x288)
    ]),
    $(_0x5084ba(0x27c))["text"](totalSteps),
    $("[data-form=\x22step\x22][data-card]")[_0x5084ba(0x264)](function () {
      const _0x185057 = _0x5084ba;
      $($(_0x185057(0x24b))[$(this)[_0x185057(0x2ad)]()])[_0x185057(0x259)]();
    }));
(progressbar = $(_0x5084ba(0x2b7))[_0x5084ba(0x284)]()),
  $(_0x5084ba(0x24b))["on"](_0x5084ba(0x255), clickableIndicator),
  $(_0x5084ba(0x224))["text"](curStep),
  steps[_0x5084ba(0x259)](),
  $("[data-success-card]")[_0x5084ba(0x259)](),
  $(_0x5084ba(0x1f5))["each"](function () {
    const _0x4d1db3 = _0x5084ba;
    $(this)[_0x4d1db3(0x1b0)](_0x4d1db3(0x1af), _0x4d1db3(0x1b7));
  });
function getParams() {
  const _0x28a5f5 = _0x5084ba;
  urlFormly["searchParams"][_0x28a5f5(0x293)](function (_0x4d3d71, _0x29df4e) {
    const _0x27c3e9 = _0x28a5f5;
    searchQ[_0x27c3e9(0x251)]({ val: _0x4d3d71, key: _0x29df4e });
  });
}
function getSafe(_0x355f4b, _0x3240e6) {
  try {
    return _0x355f4b();
  } catch (_0x255966) {
    return _0x3240e6;
  }
}
function phoneAutoFormat(_0x12b81d) {
  var _0x315913 = "";
  return function (_0x230142) {
    const _0x1d6ebc = _0x4ecf;
    var _0x1fca1b = "",
      _0x2ee61e = _0x230142[_0x1d6ebc(0x1cc)](/\D/g, ""),
      _0x3b6241 = 0x0,
      _0x340137 = 0x0;
    while (_0x3b6241 < _0x2ee61e["length"] && _0x340137 < _0x12b81d["length"]) {
      _0x12b81d[_0x340137] === "x"
        ? ((_0x1fca1b += _0x2ee61e[_0x3b6241]), _0x3b6241++)
        : (_0x1fca1b += _0x12b81d[_0x340137]),
        _0x340137++;
    }
    if (_0x230142[_0x1d6ebc(0x288)] < _0x315913[_0x1d6ebc(0x288)]) {
      var _0x58aceb = _0x12b81d[_0x1d6ebc(0x1ce)](_0x340137);
      _0x1fca1b += _0x58aceb[_0x1d6ebc(0x1cc)](/x/g, "");
    }
    return (_0x315913 = _0x1fca1b), _0x1fca1b;
  };
}
function validateURL(_0x22a179) {
  const _0xa1d1d3 = _0x5084ba;
  return urlPattern[_0xa1d1d3(0x27b)](_0x22a179) ? !![] : ![];
}
quiz &&
  steps["each"](function () {
    const _0x3e1ffd = _0x5084ba;
    $(this)["children"]()[_0x3e1ffd(0x1b0)](_0x3e1ffd(0x1a4), !![]),
      $(this)["children"]()[_0x3e1ffd(0x1b0)](_0x3e1ffd(0x22d), 0xfa);
  });
function disableBtn(_0x40bfb4) {
  const _0x4e0cf3 = _0x5084ba;
  (fill = ![]),
    !customError &&
      ($(_0x4e0cf3(0x291))["css"]({
        opacity: _0x4e0cf3(0x287),
        "pointer-events": _0x4e0cf3(0x22b),
      }),
      $("[data-form=\x22next-btn\x22]")[_0x4e0cf3(0x1b6)]("disabled"),
      $(_0x4e0cf3(0x1d2))[_0x4e0cf3(0x1d8)]({
        opacity: "0.4",
        "pointer-events": _0x4e0cf3(0x22b),
      }),
      $(_0x4e0cf3(0x1d2))["addClass"]("disabled"),
      $(_0x4e0cf3(0x28b))[_0x4e0cf3(0x1d8)]({
        opacity: "0.4",
        "pointer-events": _0x4e0cf3(0x22b),
      }),
      $("[data-form-ms=\x22submit-btn\x22]")[_0x4e0cf3(0x1b6)](
        _0x4e0cf3(0x1b5),
      ));
}
function enableBtn() {
  const _0x53935b = _0x5084ba;
  (fill = !![]),
    $(_0x53935b(0x291))[_0x53935b(0x1d8)]({
      "pointer-events": _0x53935b(0x1f4),
      opacity: "1",
    }),
    $("[data-form=\x22next-btn\x22]")[_0x53935b(0x260)](_0x53935b(0x1b5)),
    $(_0x53935b(0x1d2))[_0x53935b(0x1d8)]({
      "pointer-events": _0x53935b(0x1f4),
      opacity: "1",
    }),
    $("[data-form=\x22submit-btn\x22]")["removeClass"]("disabled"),
    $("[data-form-ms=\x22submit-btn\x22]")["css"]({
      "pointer-events": _0x53935b(0x1f4),
      opacity: "1",
    }),
    $(_0x53935b(0x28b))["removeClass"](_0x53935b(0x1b5));
}
function saveFilledInput() {
  const _0x16e065 = _0x5084ba;
  $("form[data-form=\x22multistep\x22]\x20:input")
    [_0x16e065(0x1d1)]("[type=\x22submit\x22]")
    [_0x16e065(0x264)](function () {
      const _0x47249a = _0x16e065;
      $(this)[_0x47249a(0x1b0)](_0x47249a(0x1af)) === "checkbox" ||
      $(this)[_0x47249a(0x1b0)](_0x47249a(0x1af)) === _0x47249a(0x211)
        ? $(this)[_0x47249a(0x1b1)](_0x47249a(0x20d)) &&
          (filledInput[_0x47249a(0x1cd)](
            (_0x3ad363) =>
              _0x3ad363[_0x47249a(0x286)] === $(this)[_0x47249a(0x1b0)]("name"),
          )
            ? ((filledInput = filledInput[_0x47249a(0x2a5)](
                (_0x328188) =>
                  _0x328188[_0x47249a(0x286)] !==
                  $(this)[_0x47249a(0x1b0)](_0x47249a(0x214)),
              )),
              $(this)["val"]() !== "" &&
                filledInput[_0x47249a(0x251)]({
                  inputName: $(this)[_0x47249a(0x1b0)](_0x47249a(0x214)),
                  value: $(this)[_0x47249a(0x2a7)](),
                }))
            : $(this)[_0x47249a(0x2a7)]() !== "" &&
              filledInput[_0x47249a(0x251)]({
                inputName: $(this)[_0x47249a(0x1b0)]("name"),
                value: $(this)[_0x47249a(0x2a7)](),
              }))
        : filledInput[_0x47249a(0x1cd)](
              (_0x2ada04) =>
                _0x2ada04[_0x47249a(0x286)] ===
                $(this)[_0x47249a(0x1b0)](_0x47249a(0x214)),
            )
          ? ((filledInput = filledInput[_0x47249a(0x2a5)](
              (_0x4757c1) => _0x4757c1["inputName"] !== $(this)["attr"]("name"),
            )),
            $(this)[_0x47249a(0x2a7)]() !== "" &&
              filledInput[_0x47249a(0x251)]({
                inputName: $(this)["attr"](_0x47249a(0x214)),
                value: $(this)[_0x47249a(0x2a7)](),
              }))
          : $(this)["val"]() !== "" &&
            filledInput[_0x47249a(0x251)]({
              inputName: $(this)[_0x47249a(0x1b0)](_0x47249a(0x214)),
              value: $(this)[_0x47249a(0x2a7)](),
            });
    }),
    localStorage[_0x16e065(0x275)]("filledInput"),
    localStorage[_0x16e065(0x252)](
      _0x16e065(0x24e),
      JSON["stringify"](filledInput),
    );
}
function scrollTop() {
  const _0x5b1735 = _0x5084ba;
  scrollToTop &&
    $("html,\x20body")[_0x5b1735(0x1fa)](
      {
        scrollTop:
          $("[data-form=\x22multistep\x22]")[_0x5b1735(0x295)]()[
            _0x5b1735(0x29c)
          ] - scrollTopOffset,
      },
      0x3e8,
    );
}
function _0x5230() {
  const _0x39ddf7 = [
    "removeClass",
    "option[value=\x22$(this).val()\x22]",
    "w--redirected-checked",
    "reset",
    "each",
    "file",
    "[data-reset-delay]",
    "parse",
    "[data-enter]",
    ":input[type=\x22text\x22][required]",
    "[data-clone-input]",
    "div.g-recaptcha",
    "textarea[required]:visible",
    "[data-clone-input-wrapper=\x22",
    "option[value=\x22",
    "[data-clone-input-wrapper]",
    ":input[type=\x22date\x22]",
    "redirect-delay",
    ":input[type=\x22tel\x22][required]",
    "input:radio[required]",
    ":input[type=\x22checkbox\x22][required]",
    "removeItem",
    "[data-selection-weight]",
    ":input[type=\x22email\x22][required]",
    "[data-cms-select=text]",
    "active-answer-card",
    "running",
    "test",
    "[data-text=\x22total-steps\x22]",
    "input[name=\x22",
    "checkbox",
    "1740070SjCtyy",
    "[data-checkbox]",
    "clone",
    "[data-range]:contains(",
    "href",
    "children",
    "keydown",
    "inputName",
    "0.4",
    "length",
    "[data-clone=\x22",
    "getItem",
    "[data-form-ms=\x22submit-btn\x22]",
    "parents",
    "select[name=\x22",
    "[data-radio-delay]",
    "[data-form=\x22submit-btn\x22]:visible",
    "[data-radio-skip]",
    "[data-form=\x22next-btn\x22]",
    "radio-skip",
    "forEach",
    "focus",
    "offset",
    ".active-answer-card",
    "[data-input-field=\x22",
    "input[type=\x22radio\x22]",
    "[data-input-index=\x22",
    "[data-select-multiple]",
    ".w-checkbox-input",
    "top",
    "init",
    "input[type=\x22checkbox\x22]:visible",
    "[data-selection]",
    "[data-quiz]",
    "card",
    "[data-text=\x22total-weight\x22]",
    "[data-selected]:checked",
    "includes",
    "filter",
    "[data-index=\x22",
    "val",
    "<div\x20data-range=\x22selection\x22\x20style=\x22display:none\x20!important\x22>",
    "select[required]",
    ":input[type=\x22date\x22][required]",
    ":input[type=\x22file\x22][required]",
    "[data-display-input=\x22",
    "index",
    "siblings",
    "315930Lkfcyv",
    "textarea[required]",
    "remove-upload",
    "startsWith",
    "clone-input",
    "[data-display=\x22",
    "Please\x20wait...",
    "input[type=\x22submit\x22]",
    "[data-form=\x22progress\x22]",
    "[data-add-new-input]",
    "[data-clone]",
    "text",
    "reinit",
    "[data-answer]",
    "radio-delay",
    "slow",
    "\x22]:checked",
    "remove",
    "data-radio-skip",
    "key",
    "[type=\x22checkbox\x22]",
    "selected",
    "\x22]\x20[data-input-field^=\x22",
    "clicked\x20enter",
    "[data-selection=\x22",
    "[data-redirect-delay]",
    "split",
    "input",
    "redirect-form-hehexd",
    "type",
    "attr",
    "prop",
    "scroll-top",
    "enter",
    ":input[type=\x22password\x22]",
    "disabled",
    "addClass",
    "button",
    ":input[type=\x22number\x22]",
    "count-card",
    "selection",
    ".w-radio-input",
    "step",
    "[data-answer=\x22",
    "[data-form=\x22remove-clone\x22]",
    "input[type=\x22email\x22]:visible",
    "select",
    "[data-form=\x22next-btn\x22][data-submit-show]",
    "show",
    "value",
    ":input[required]",
    "clickable",
    "skip-to",
    "quiz",
    ".w-form-done",
    "<option>",
    "clickable-all",
    "[data-weighted-selection]",
    "replace",
    "some",
    "slice",
    "[data-text=\x22error-message\x22]",
    "<br>Data\x20Go\x20To\x20=\x20",
    "not",
    "[data-form=\x22submit-btn\x22]",
    "[data-remove-upload]",
    "data-name",
    "<br>Data\x20Answer\x20=\x20",
    "[data-btn=\x22check\x22]",
    "body",
    "css",
    "weighted-selection",
    ":input[type=\x22checkbox\x22][required]:checked",
    "[data-radio-skip]:visible",
    "field",
    "status",
    "[data-btn=\x22edit\x22]",
    "require",
    "[type=\x22radio\x22]",
    ":input[type=\x27radio\x27]:checked",
    "[data-clone-input=\x22",
    ":input[type=\x22checkbox\x22]:checked",
    "Webflow",
    "span",
    "stopPropagation",
    "[data-form=\x22submit\x22]:visible",
    "[data-display-input-wrapper=\x22",
    "[data-query-param]",
    "\x22]\x20input",
    ":input[type=\x22file\x22]",
    "reset-delay",
    "input:checkbox",
    "relationship-",
    "success",
    "ms-field",
    "[data-clone-wrapper=\x22",
    "[data-answer][data-radio-skip]:visible",
    "input:radio[name=\x22",
    "auto",
    "[data-form=\x22next-btn\x22][type=\x22submit\x22]",
    "[data-count-card]",
    "data-input-field",
    "current",
    "[data-form=\x22back-btn\x22]",
    "animate",
    "go-to",
    ".w-form-formradioinput",
    "[data-form=\x22step\x22]",
    "debug-mode",
    "[data-skip-to]",
    "[data-input-field]",
    "[data-form=\x22remove-input-clone\x22]",
    ":input[type=\x22number\x22][required]",
    "skipTo",
    ":input",
    "[data-add-new]",
    "9934113TSJuHi",
    "display",
    "find",
    "1330933VlZHLh",
    "wait",
    "ctrlKey",
    ":input[type=\x22checkbox\x22]",
    "checked",
    "logic-extra",
    "keyCode",
    "append",
    "radio",
    "findIndex",
    "open",
    "name",
    "2308028XWZaXo",
    "change",
    "phone-autoformat",
    "keypress",
    "url",
    "backTo",
    "[data-custom-error-message]",
    "[data-clickable]",
    "https://webflow.com/api/v1/form/",
    "[data-go-to]",
    "closest",
    "dispatchEvent",
    "add-new-input",
    "data",
    "clicked",
    "[data-text=\x22current-step\x22]",
    "Enter",
    ":first",
    "block-domain",
    "input-field",
    "[data-btn=\x22reset\x22]",
    "input[autofocus]",
    "none",
    "parent",
    "data-radio-delay",
    "\x22][value=\x22",
    "[data-form=\x22multistep\x22]",
    "preventDefault",
    "weighted-selection-range",
    "trigger",
    "edit-step",
    "6TYNaIb",
    "[data-show-if]",
    "location",
    "[data-clone-wrapper]",
    "[data-selection=\x22other\x22]",
    ":input[type=\x22tel\x22]",
    "[data-clickable-all]",
    "[data-form=\x22custom-progress-indicator\x22]",
    ":checked",
    "_blank",
    "fadeIn",
    "match",
    "[data-success-card=\x22",
    "last",
    "data-go-to",
    "memory",
    "redirect",
    "[data-display-input-index=\x22",
    "textarea[name=\x22",
    "required",
    "textarea",
    "new-tab",
    "[data-display-input]",
    "[data-form=\x22progress-indicator\x22]",
    "readystatechange",
    "destroy",
    "filledInput",
    "submit",
    "submit-show",
    "push",
    "setItem",
    "textarea[autofocus]",
    "[data-weighted-selection-range]",
    "click",
    "every",
    "[data-memory]",
    "18980088FblHBD",
    "hide",
    "min-character",
    ":input[type=\x22text\x22]",
    "173058DGQmfW",
    "data-skip-to",
    "log",
    "[data-display]",
  ];
  _0x5230 = function () {
    return _0x39ddf7;
  };
  return _0x5230();
}
function updateStep() {
  const _0xc558c1 = _0x5084ba;
  scrollTop(),
    (skip = ![]),
    $(_0xc558c1(0x23b))[_0xc558c1(0x260)](_0xc558c1(0x1b5));
  $(_0xc558c1(0x21c))[_0xc558c1(0x222)](_0xc558c1(0x1c5)) &&
    (steps[_0xc558c1(0x208)](_0xc558c1(0x1c4))[_0xc558c1(0x264)](function () {
      const _0x17819a = _0xc558c1;
      $(
        $(_0x17819a(0x23b))[
          $(this)["parents"](_0x17819a(0x1fd))[_0x17819a(0x2ad)]()
        ],
      ),
        $(this)[_0x17819a(0x2a7)]() === "" && emptyInput++;
    }),
    emptyInput > 0x0
      ? $("input[type=\x22submit\x22]")[_0xc558c1(0x1b6)](_0xc558c1(0x1b5))
      : $(_0xc558c1(0x2b6))[_0xc558c1(0x260)](_0xc558c1(0x1b5)));
  $(_0xc558c1(0x23b))[_0xc558c1(0x260)](_0xc558c1(0x1f8)),
    $(_0xc558c1(0x23b))["addClass"](_0xc558c1(0x1b5)),
    $($(_0xc558c1(0x23b))[x])[_0xc558c1(0x1b6)](_0xc558c1(0x1f8)),
    (selection = selections["filter"](
      (_0x456c81) => _0x456c81[_0xc558c1(0x1bc)] === x - 0x1,
    ));
  next &&
    (x = getSafe(() => selection[0x0][_0xc558c1(0x203)])
      ? parseInt(getSafe(() => selection[0x0]["skipTo"]))
      : x);
  $(_0xc558c1(0x19f))[_0xc558c1(0x259)](), steps["hide"]();
  reinitIX === !![] && window[_0xc558c1(0x1e4)][_0xc558c1(0x24d)]();
  $(progressbar)[_0xc558c1(0x260)]("current");
  for (i = 0x0; i <= x; i++) {
    countCard
      ? $(progressbar[i])[_0xc558c1(0x1b6)](_0xc558c1(0x1f8))
      : !$(steps[i])[_0xc558c1(0x222)]("card") &&
        $(progressbar[i])[_0xc558c1(0x1b6)](_0xc558c1(0x1f8));
  }
  reinitIX === !![]
    ? (window["Webflow"] &&
        window["Webflow"][_0xc558c1(0x1df)]("ix2")[_0xc558c1(0x29d)](),
      document[_0xc558c1(0x220)](new Event(_0xc558c1(0x24c))),
      $(steps[x])["show"]())
    : $(steps[x])["fadeIn"](_0xc558c1(0x1a1));
  $(_0xc558c1(0x296))[_0xc558c1(0x260)](_0xc558c1(0x279));
  x === 0x0 &&
    !$(steps[x])[_0xc558c1(0x222)](_0xc558c1(0x2a1)) &&
    ($(steps[x])[_0xc558c1(0x208)](_0xc558c1(0x19f))[_0xc558c1(0x1c2)](),
    $(steps[x])
      [_0xc558c1(0x208)](_0xc558c1(0x19f))
      [_0xc558c1(0x1b6)](_0xc558c1(0x279)));
  selection[_0xc558c1(0x288)] > 0x0
    ? ($(steps[x])
        [_0xc558c1(0x208)](
          _0xc558c1(0x1bd) + selection[0x0][_0xc558c1(0x1a7)] + "\x22]",
        )
        [_0xc558c1(0x1c2)](),
      $(steps[x])
        [_0xc558c1(0x208)](
          "[data-answer=\x22" + selection[0x0][_0xc558c1(0x1a7)] + "\x22]",
        )
        ["addClass"](_0xc558c1(0x279)))
    : ($(steps[x])
        [_0xc558c1(0x208)]("[data-answer=\x22" + answer + "\x22]")
        ["show"](),
      $(steps[x])
        [_0xc558c1(0x208)](_0xc558c1(0x1bd) + answer + "\x22]")
        [_0xc558c1(0x1b6)](_0xc558c1(0x279)));
  if (x === 0x0)
    $(_0xc558c1(0x1f9))["hide"](),
      $(_0xc558c1(0x291))[_0xc558c1(0x1c2)](),
      $(_0xc558c1(0x1d2))[_0xc558c1(0x259)]();
  else {
    if (
      x === steps[_0xc558c1(0x288)] - 0x1 ||
      $(steps[x])[_0xc558c1(0x208)](_0xc558c1(0x1e7))[_0xc558c1(0x288)] > 0x0
    ) {
      $(_0xc558c1(0x291))[_0xc558c1(0x259)]();
      if (
        $(steps[x])
          [_0xc558c1(0x208)](_0xc558c1(0x1c1))
          ["data"](_0xc558c1(0x250))
      )
        $(steps[x])
          [_0xc558c1(0x208)]("[data-form=\x22next-btn\x22][data-submit-show]")
          ["show"]();
      else
        $(_0xc558c1(0x291))[_0xc558c1(0x222)]("submit-show") &&
          $(_0xc558c1(0x291))["show"]();
      $(_0xc558c1(0x1d2))["show"](),
        $(_0xc558c1(0x28b))[_0xc558c1(0x1c2)](),
        $("[data-form=\x22back-btn\x22]")["show"]();
    } else
      $("[data-form=\x22next-btn\x22]")[_0xc558c1(0x1c2)](),
        $(_0xc558c1(0x1f9))[_0xc558c1(0x1c2)](),
        $(_0xc558c1(0x1d2))[_0xc558c1(0x259)](),
        $("[data-form-ms=\x22submit-btn\x22]")[_0xc558c1(0x259)]();
  }
  $($(steps[x])["find"](_0xc558c1(0x22a))[0x0])[_0xc558c1(0x294)](),
    $($(steps[x])[_0xc558c1(0x208)](_0xc558c1(0x253))[0x0])[_0xc558c1(0x294)](),
    validation();
  for (idx = 0x0; idx <= x; idx++) {
    $($(_0xc558c1(0x23b))[idx])["removeClass"](_0xc558c1(0x1b5));
  }
}
function validateEmail(_0x1b499d, _0x5ce1f2, _0x2036e3) {
  const _0xb0d84e = _0x5084ba;
  let _0x12e621 = _0x1b499d[_0xb0d84e(0x2a4)]("@")
    ? _0x1b499d[_0xb0d84e(0x1ac)]("@")[0x1][_0xb0d84e(0x1ac)](".")[0x0]
    : [];
  dom = [];
  _0x5ce1f2 !== undefined &&
    _0x5ce1f2["split"](",")[_0xb0d84e(0x293)](function (_0x40aae3) {
      const _0x2aa0ca = _0xb0d84e;
      _0x40aae3["includes"](_0x12e621) && dom[_0x2aa0ca(0x251)](_0x12e621);
    });
  dom[_0xb0d84e(0x288)] > 0x0 ? (domainAllowed = ![]) : (domainAllowed = !![]);
  var _0x2999e8 = /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,20})?$/;
  console[_0xb0d84e(0x25e)](_0x2999e8[_0xb0d84e(0x27b)](_0x1b499d)),
    !_0x2999e8[_0xb0d84e(0x27b)](_0x1b499d) || !domainAllowed
      ? ((emailFilled = ![]),
        unfilledArr[_0xb0d84e(0x251)]({ input: _0x2036e3 }))
      : (emailFilled = !![]);
}
function phoneValidation(_0x36d482, _0x334067, _0x2e6868) {
  const _0x4f3658 = _0x5084ba;
  if (phoneFormat)
    return _0x36d482[_0x4f3658(0x23f)](
      new RegExp(phoneFormat[_0x4f3658(0x1ce)](0x1, -0x1)),
    ) && _0x334067 >= _0x2e6868
      ? !![]
      : ![];
  else {
    if (_0x334067 >= _0x2e6868) return !![];
  }
}
function validation() {
  const _0x5a20d0 = _0x5084ba;
  $(steps[x])[_0x5a20d0(0x222)](_0x5a20d0(0x2a1)) && enableBtn();
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
    (textareaLength = $(steps[x])[_0x5a20d0(0x208)](_0x5a20d0(0x26c))[
      "length"
    ]),
    (textInputLength = $(steps[x])[_0x5a20d0(0x208)](
      "input[type=\x22text\x22][required]:visible",
    )["length"]),
    (selectInputLength = $(steps[x])[_0x5a20d0(0x208)](
      "select[required]:visible",
    )[_0x5a20d0(0x288)]),
    (emailInputLength = $(steps[x])[_0x5a20d0(0x208)](_0x5a20d0(0x1bf))[
      _0x5a20d0(0x288)
    ]),
    (checkboxInputLength = $(steps[x])["find"](_0x5a20d0(0x29e))[
      _0x5a20d0(0x288)
    ]);
  textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0
    ? disableBtn()
    : enableBtn();
  checkCount = $(steps[x])[_0x5a20d0(0x222)](_0x5a20d0(0x27e))
    ? $(steps[x])["data"](_0x5a20d0(0x27e))
    : $(steps[x])[_0x5a20d0(0x208)](_0x5a20d0(0x280))[_0x5a20d0(0x288)] > 0x0
      ? $(steps[x])
          [_0x5a20d0(0x208)](_0x5a20d0(0x280))
          [_0x5a20d0(0x222)]("checkbox")
      : 0x0;
  if (!logicExtra)
    $(steps[x])[_0x5a20d0(0x208)](":input")["is"](_0x5a20d0(0x1a6)) &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])[_0x5a20d0(0x208)](_0x5a20d0(0x20c))[_0x5a20d0(0x288)]
        ? $(steps[x])
            ["find"](_0x5a20d0(0x20c))
            [_0x5a20d0(0x264)](function () {
              const _0xb4746c = _0x5a20d0;
              $(this)["is"](_0xb4746c(0x23c))
                ? $(steps[x])[_0xb4746c(0x208)](_0xb4746c(0x274))[
                    _0xb4746c(0x288)
                  ] < 0x1 &&
                  ((checkboxFilled = !![]),
                  resetInputErrorMessage($(this)[_0xb4746c(0x1b0)]("name")))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0xb4746c(0x251)]({
                    input: $(this)[_0xb4746c(0x1b0)](_0xb4746c(0x214)),
                  }));
            })
        : $(steps[x])[_0x5a20d0(0x208)](_0x5a20d0(0x1e3))[_0x5a20d0(0x288)] >=
            checkCount
          ? $(steps[x])["find"](_0x5a20d0(0x274))[_0x5a20d0(0x288)] > 0x0
            ? $(steps[x])
                [_0x5a20d0(0x208)](":input[type=\x22checkbox\x22][required]")
                [_0x5a20d0(0x264)](function () {
                  const _0x3f0cb = _0x5a20d0;
                  !$(this)["is"](_0x3f0cb(0x23c))
                    ? ((checkboxFilled = ![]),
                      unfilledArr[_0x3f0cb(0x251)]({
                        input: $(this)[_0x3f0cb(0x1b0)](_0x3f0cb(0x214)),
                      }))
                    : ((checkboxFilled = !![]),
                      $(steps[x])[_0x3f0cb(0x208)](_0x3f0cb(0x1da))[
                        _0x3f0cb(0x288)
                      ] >=
                        $(steps[x])[_0x3f0cb(0x208)](
                          ":input[type=\x22checkbox\x22][required]",
                        )["length"] &&
                        resetInputErrorMessage(
                          $(steps[x])
                            ["find"](_0x3f0cb(0x20c))
                            ["attr"](_0x3f0cb(0x214)),
                        ));
                })
            : ((checkboxFilled = !![]),
              resetInputErrorMessage(
                $(steps[x])
                  ["find"](_0x5a20d0(0x20c))
                  [_0x5a20d0(0x1b0)](_0x5a20d0(0x214)),
              ))
          : ((checkboxFilled = ![]),
            $(steps[x])
              [_0x5a20d0(0x208)](":input[type=\x22checkbox\x22][required]")
              [_0x5a20d0(0x264)](function () {
                const _0x251716 = _0x5a20d0;
                $(this)[_0x251716(0x1d1)](_0x251716(0x23c)) &&
                  unfilledArr[_0x251716(0x251)]({
                    input: $(this)[_0x251716(0x1b0)]("name"),
                  });
              }),
            unfilledArr[_0x5a20d0(0x251)]({
              input: $(steps[x])
                [_0x5a20d0(0x208)](":input[type=\x22checkbox\x22]")
                [_0x5a20d0(0x1b0)]("name"),
            }))),
      $(steps[x])
        [_0x5a20d0(0x208)](_0x5a20d0(0x273))
        [_0x5a20d0(0x264)](function (_0x521328) {
          const _0x47fec6 = _0x5a20d0;
          var _0xf454e2 = $(this)["attr"](_0x47fec6(0x214));
          $(_0x47fec6(0x1f3) + _0xf454e2 + _0x47fec6(0x1a2))[
            _0x47fec6(0x288)
          ] == 0x0
            ? (!empReqRadio["find"](
                (_0xbcee3b) => _0xbcee3b[_0x47fec6(0x1ad)] === _0x521328,
              ) && empReqRadio[_0x47fec6(0x251)]({ input: _0x521328 }),
              unfilledArr[_0x47fec6(0x251)]({ input: $(this)["attr"]("name") }))
            : (empReqRadio = empReqRadio[_0x47fec6(0x2a5)](
                (_0xb58009) => _0xb58009[_0x47fec6(0x1ad)] !== _0x521328,
              )),
            empReqRadio[_0x47fec6(0x288)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x5a20d0(0x269))
        [_0x5a20d0(0x264)](function (_0x3999f7) {
          const _0x350ad7 = _0x5a20d0;
          let _0x1c1967 = $(this)[_0x350ad7(0x2a7)]()[_0x350ad7(0x288)],
            _0x38c442 = $(this)[_0x350ad7(0x222)](_0x350ad7(0x25a))
              ? $(this)["data"]("min-character")
              : 0x0;
          $(this)[_0x350ad7(0x2a7)]() !== "" && _0x1c1967 >= _0x38c442
            ? (empReqInput = empReqInput[_0x350ad7(0x2a5)](
                (_0x351e9f) => _0x351e9f[_0x350ad7(0x1ad)] !== _0x3999f7,
              ))
            : (!empReqInput[_0x350ad7(0x208)](
                (_0x30fa35) => _0x30fa35[_0x350ad7(0x1ad)] === _0x3999f7,
              ) && empReqInput[_0x350ad7(0x251)]({ input: _0x3999f7 }),
              unfilledArr[_0x350ad7(0x251)]({
                input: $(this)["attr"]("name"),
              })),
            empReqInput[_0x350ad7(0x288)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        ["find"](":input[type=\x22password\x22][required]")
        [_0x5a20d0(0x264)](function (_0xfba202) {
          const _0x295b11 = _0x5a20d0;
          let _0x511122 = $(this)[_0x295b11(0x2a7)]()[_0x295b11(0x288)],
            _0x4d4755 = $(this)[_0x295b11(0x222)](_0x295b11(0x25a))
              ? $(this)["data"](_0x295b11(0x25a))
              : 0x0;
          $(this)[_0x295b11(0x2a7)]() !== "" && _0x511122 >= _0x4d4755
            ? (empReqPassword = empReqPassword[_0x295b11(0x2a5)](
                (_0x32b781) => _0x32b781[_0x295b11(0x1ad)] !== _0xfba202,
              ))
            : (!empReqPassword[_0x295b11(0x208)](
                (_0x2c2b8e) => _0x2c2b8e[_0x295b11(0x1ad)] === _0xfba202,
              ) && empReqPassword["push"]({ input: _0xfba202 }),
              unfilledArr[_0x295b11(0x251)]({
                input: $(this)["attr"](_0x295b11(0x214)),
              })),
            empReqPassword[_0x295b11(0x288)] === 0x0
              ? (passwordFilled = !![])
              : (passwordFilled = ![]);
        }),
      $(steps[x])
        [_0x5a20d0(0x208)](":input[type=\x22url\x22][required]")
        [_0x5a20d0(0x264)](function (_0x2c3bda) {
          const _0x31b82c = _0x5a20d0;
          let _0x51c18e = $(this)[_0x31b82c(0x2a7)]()[_0x31b82c(0x288)],
            _0x262482 = $(this)[_0x31b82c(0x222)](_0x31b82c(0x25a))
              ? $(this)[_0x31b82c(0x222)](_0x31b82c(0x25a))
              : 0x0;
          $(this)["val"]() !== "" && _0x51c18e >= _0x262482
            ? (empReqUrl = empReqUrl["filter"](
                (_0x2aae05) => _0x2aae05[_0x31b82c(0x1ad)] !== _0x2c3bda,
              ))
            : (!empReqUrl["find"](
                (_0x5e5671) => _0x5e5671["input"] === _0x2c3bda,
              ) && empReqUrl["push"]({ input: _0x2c3bda }),
              unfilledArr[_0x31b82c(0x251)]({
                input: $(this)["attr"](_0x31b82c(0x214)),
              })),
            empReqUrl[_0x31b82c(0x288)] === 0x0 && validateURL($(this)["val"]())
              ? ((urlFilled = !![]), console[_0x31b82c(0x25e)](urlFilled))
              : (urlFilled = ![]);
        }),
      $(steps[x])
        [_0x5a20d0(0x208)](_0x5a20d0(0x2aa))
        ["each"](function (_0x1ff0f6) {
          const _0x57ca46 = _0x5a20d0;
          $(this)["val"]() !== ""
            ? (empReqDate = empReqDate[_0x57ca46(0x2a5)](
                (_0x24efab) => _0x24efab[_0x57ca46(0x1ad)] !== _0x1ff0f6,
              ))
            : (!empReqDate[_0x57ca46(0x208)](
                (_0x3900e9) => _0x3900e9[_0x57ca46(0x1ad)] === _0x1ff0f6,
              ) && empReqDate[_0x57ca46(0x251)]({ input: _0x1ff0f6 }),
              unfilledArr["push"]({ input: $(this)["attr"]("name") })),
            empReqDate[_0x57ca46(0x288)] === 0x0
              ? (dateFilled = !![])
              : (dateFilled = ![]);
        }),
      $(steps[x])
        [_0x5a20d0(0x208)](":input[type=\x22tel\x22][required]")
        [_0x5a20d0(0x264)](function (_0x388b40) {
          const _0x1f0749 = _0x5a20d0;
          if ($(this)[_0x1f0749(0x2a7)]() !== "") {
            let _0x55213a = $(this)[_0x1f0749(0x2a7)]()[_0x1f0749(0x288)],
              _0x4a72a4 = $(this)[_0x1f0749(0x222)](_0x1f0749(0x25a))
                ? $(this)[_0x1f0749(0x222)](_0x1f0749(0x25a))
                : 0x0;
            if ($(this)[_0x1f0749(0x222)](_0x1f0749(0x217))) {
              var _0x471414 = phoneAutoFormat(
                $(this)[_0x1f0749(0x222)]("phone-autoformat"),
              );
              $(this)["val"](_0x471414($(this)[_0x1f0749(0x2a7)]()));
            }
            phoneValidation($(this)[_0x1f0749(0x2a7)](), _0x55213a, _0x4a72a4)
              ? (empReqTel = empReqTel[_0x1f0749(0x2a5)](
                  (_0x489bf4) => _0x489bf4[_0x1f0749(0x1ad)] !== _0x388b40,
                ))
              : empReqTel[_0x1f0749(0x251)]({ input: _0x388b40 });
          } else
            !empReqTel[_0x1f0749(0x208)](
              (_0x3cff25) => _0x3cff25[_0x1f0749(0x1ad)] === _0x388b40,
            ) && empReqTel["push"]({ input: _0x388b40 }),
              unfilledArr["push"]({ input: $(this)[_0x1f0749(0x1b0)]("name") });
          empReqTel["length"] === 0x0 ? (telFilled = !![]) : (telFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x5a20d0(0x2ab))
        [_0x5a20d0(0x264)](function (_0x5ae553) {
          const _0x646102 = _0x5a20d0;
          $(this)[_0x646102(0x2a7)]() !== ""
            ? (empReqFile = empReqFile[_0x646102(0x2a5)](
                (_0x3ddc80) => _0x3ddc80["input"] !== _0x5ae553,
              ))
            : (!empReqFile["find"](
                (_0x2d9892) => _0x2d9892["input"] === _0x5ae553,
              ) && empReqFile[_0x646102(0x251)]({ input: _0x5ae553 }),
              unfilledArr[_0x646102(0x251)]({
                input: $(this)[_0x646102(0x1b0)](_0x646102(0x214)),
              })),
            empReqFile[_0x646102(0x288)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x5a20d0(0x208)](_0x5a20d0(0x202))
        [_0x5a20d0(0x264)](function (_0x193ddc) {
          const _0x531572 = _0x5a20d0;
          let _0x3a9927 = $(this)[_0x531572(0x2a7)]()[_0x531572(0x288)],
            _0x12c4c4 = $(this)["data"](_0x531572(0x25a))
              ? $(this)[_0x531572(0x222)](_0x531572(0x25a))
              : 0x0;
          $(this)[_0x531572(0x2a7)]() !== "" && _0x3a9927 >= _0x12c4c4
            ? (empReqNum = empReqNum[_0x531572(0x2a5)](
                (_0x15c077) => _0x15c077["input"] !== _0x193ddc,
              ))
            : (!empReqNum["find"](
                (_0x2e4aec) => _0x2e4aec[_0x531572(0x1ad)] === _0x193ddc,
              ) && empReqNum[_0x531572(0x251)]({ input: _0x193ddc }),
              unfilledArr["push"]({
                input: $(this)[_0x531572(0x1b0)](_0x531572(0x214)),
              })),
            empReqNum["length"] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x5a20d0(0x208)](_0x5a20d0(0x2a9))
        [_0x5a20d0(0x264)](function (_0x59a891) {
          const _0x1262c8 = _0x5a20d0;
          let _0x4d2a23 = $(this)[_0x1262c8(0x2a7)]();
          _0x4d2a23 === "" && (_0x4d2a23 = null),
            _0x4d2a23 != null
              ? (empReqSelect = empReqSelect[_0x1262c8(0x2a5)](
                  (_0x1b148d) => _0x1b148d[_0x1262c8(0x1ad)] !== _0x59a891,
                ))
              : (!empReqSelect["find"](
                  (_0x5869e5) => _0x5869e5[_0x1262c8(0x1ad)] === _0x59a891,
                ) && empReqSelect[_0x1262c8(0x251)]({ input: _0x59a891 }),
                unfilledArr["push"]({
                  input: $(this)[_0x1262c8(0x1b0)](_0x1262c8(0x214)),
                })),
            empReqSelect["length"] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x5a20d0(0x208)](_0x5a20d0(0x2b0))
        ["each"](function (_0x412e86) {
          const _0x24326d = _0x5a20d0;
          let _0x16afc4 = $(this)[_0x24326d(0x2a7)]()[_0x24326d(0x288)],
            _0x398b13 = $(this)[_0x24326d(0x222)](_0x24326d(0x25a))
              ? $(this)[_0x24326d(0x222)](_0x24326d(0x25a))
              : 0x0;
          $(this)["val"]() !== "" && _0x16afc4 >= _0x398b13
            ? (empReqTextarea = empReqTextarea[_0x24326d(0x2a5)](
                (_0x2c7d69) => _0x2c7d69[_0x24326d(0x1ad)] !== _0x412e86,
              ))
            : (!empReqTextarea[_0x24326d(0x208)](
                (_0x3ed0c7) => _0x3ed0c7["input"] === _0x412e86,
              ) && empReqTextarea[_0x24326d(0x251)]({ input: _0x412e86 }),
              unfilledArr[_0x24326d(0x251)]({
                input: $(this)["attr"](_0x24326d(0x214)),
              })),
            empReqTextarea[_0x24326d(0x288)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x5a20d0(0x208)](_0x5a20d0(0x277))
        [_0x5a20d0(0x264)](function () {
          const _0x37b5f3 = _0x5a20d0;
          $(this)["val"]() !== ""
            ? validateEmail(
                $(this)[_0x37b5f3(0x2a7)](),
                $(this)["data"](_0x37b5f3(0x227)),
                $(this)[_0x37b5f3(0x1b0)]("name"),
              )
            : ((emailFilled = ![]),
              unfilledArr["push"]({
                input: $(this)[_0x37b5f3(0x1b0)](_0x37b5f3(0x214)),
              }));
        });
  else {
    if ($(steps[x])[_0x5a20d0(0x222)](_0x5a20d0(0x2a1)))
      (answer = $(steps[x])
        [_0x5a20d0(0x208)](_0x5a20d0(0x21e))
        [_0x5a20d0(0x222)](_0x5a20d0(0x1fb))),
        (selections = selections[_0x5a20d0(0x2a5)](
          (_0x7a9f23) => _0x7a9f23["step"] !== x,
        )),
        selections["push"]({ step: x, selected: answer });
    else
      $(steps[x])
        [_0x5a20d0(0x208)](_0x5a20d0(0x296))
        [_0x5a20d0(0x222)](_0x5a20d0(0x2a1)) &&
        ((answer = $(steps[x])
          ["find"](_0x5a20d0(0x296))
          [_0x5a20d0(0x222)](_0x5a20d0(0x1fb))),
        (selections = selections[_0x5a20d0(0x2a5)](
          (_0x1fd3af) => _0x1fd3af[_0x5a20d0(0x1bc)] !== x,
        )),
        selections["push"]({ step: x, selected: answer }));
    $(steps[x])
      [_0x5a20d0(0x208)](_0x5a20d0(0x296))
      [_0x5a20d0(0x208)](_0x5a20d0(0x204))
      ["is"](_0x5a20d0(0x1a6)) &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])[_0x5a20d0(0x208)](_0x5a20d0(0x20c))[_0x5a20d0(0x288)]
        ? (console[_0x5a20d0(0x25e)](_0x5a20d0(0x27b)),
          $(steps[x])
            [_0x5a20d0(0x208)](_0x5a20d0(0x20c))
            ["each"](function () {
              const _0x551efc = _0x5a20d0;
              $(this)["is"](_0x551efc(0x23c))
                ? $(steps[x])[_0x551efc(0x208)](_0x551efc(0x1c4))["length"] <
                    0x1 &&
                  ((skipTo = undefined),
                  $(this)
                    [_0x551efc(0x28c)]("[data-skip-to]")
                    ["data"](_0x551efc(0x1c6)) &&
                    (skipTo = $(this)
                      [_0x551efc(0x28c)](_0x551efc(0x1ff))
                      [_0x551efc(0x222)](_0x551efc(0x1c6))),
                  $(this)
                    [_0x551efc(0x28c)](_0x551efc(0x21e))
                    [_0x551efc(0x1b0)](_0x551efc(0x242)) &&
                    ((answer = $(this)
                      ["parents"](_0x551efc(0x21e))
                      [_0x551efc(0x1b0)](_0x551efc(0x242))),
                    (selections = selections[_0x551efc(0x2a5)](
                      (_0xba4c32) => _0xba4c32[_0x551efc(0x1bc)] !== x,
                    )),
                    selections[_0x551efc(0x251)]({ step: x, selected: answer }),
                    skipTo &&
                      (selections[_0x551efc(0x251)]({
                        step: skipTo - 0x2,
                        selected: answer,
                      }),
                      (objIndex = selections[_0x551efc(0x212)](
                        (_0x331cdc) => _0x331cdc[_0x551efc(0x1bc)] === x,
                      )),
                      (selections[objIndex][_0x551efc(0x203)] =
                        parseInt(skipTo) - 0x1),
                      (selections[objIndex]["backTo"] = x))),
                  (checkboxFilled = !![]),
                  $(steps[x])[_0x551efc(0x208)](_0x551efc(0x1da))["length"] >=
                    $(steps[x])["find"](_0x551efc(0x274))[_0x551efc(0x288)] &&
                    resetInputErrorMessage(
                      $(steps[x])
                        ["find"](":input[type=\x22checkbox\x22]")
                        ["attr"](_0x551efc(0x214)),
                    ))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0x551efc(0x251)]({
                    input: $(this)["attr"](_0x551efc(0x214)),
                  }));
            }))
        : $(steps[x])
              [_0x5a20d0(0x208)](".active-answer-card")
              [_0x5a20d0(0x208)](_0x5a20d0(0x1e3))[_0x5a20d0(0x288)] >=
            checkCount
          ? ($(steps[x])
              ["find"](_0x5a20d0(0x296))
              [_0x5a20d0(0x208)](_0x5a20d0(0x20c))
              [_0x5a20d0(0x28c)](_0x5a20d0(0x21e))
              [_0x5a20d0(0x1b0)]("data-go-to") &&
              ((skipTo = undefined),
              $(steps[x])
                [_0x5a20d0(0x208)](_0x5a20d0(0x296))
                ["find"](_0x5a20d0(0x20c))
                ["parents"]("[data-skip-to]")
                [_0x5a20d0(0x1b0)](_0x5a20d0(0x25d)) &&
                (skipTo = $(steps[x])
                  [_0x5a20d0(0x208)](_0x5a20d0(0x296))
                  [_0x5a20d0(0x208)](_0x5a20d0(0x1e3))
                  ["parents"](_0x5a20d0(0x1ff))
                  [_0x5a20d0(0x1b0)](_0x5a20d0(0x25d))),
              (answer = $(steps[x])
                [_0x5a20d0(0x208)](".active-answer-card")
                [_0x5a20d0(0x208)](_0x5a20d0(0x20c))
                [_0x5a20d0(0x28c)]("[data-go-to]")
                ["attr"](_0x5a20d0(0x242))),
              (selections = selections[_0x5a20d0(0x2a5)](
                (_0x5ee123) => _0x5ee123["step"] !== x,
              )),
              selections[_0x5a20d0(0x251)]({ step: x, selected: answer }),
              skipTo &&
                ((selections = selections[_0x5a20d0(0x2a5)](
                  (_0x51ec67) => _0x51ec67[_0x5a20d0(0x1bc)] !== skipTo - 0x2,
                )),
                selections[_0x5a20d0(0x251)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x5a20d0(0x212)](
                  (_0x1b5394) => _0x1b5394[_0x5a20d0(0x1bc)] === x,
                )),
                console[_0x5a20d0(0x25e)](objIndex),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x5a20d0(0x21a)] = x),
                console[_0x5a20d0(0x25e)](_0x5a20d0(0x27a)))),
            (checkboxFilled = !![]),
            $(steps[x])[_0x5a20d0(0x208)](_0x5a20d0(0x1da))[_0x5a20d0(0x288)] >=
              $(steps[x])["find"](":input[type=\x22checkbox\x22][required]")[
                _0x5a20d0(0x288)
              ] &&
              resetInputErrorMessage(
                $(steps[x])
                  ["find"](":input[type=\x22checkbox\x22]")
                  [_0x5a20d0(0x1b0)](_0x5a20d0(0x214)),
              ))
          : ((checkboxFilled = ![]),
            $(steps[x])
              [_0x5a20d0(0x208)](_0x5a20d0(0x274))
              [_0x5a20d0(0x264)](function () {
                const _0x4e6abb = _0x5a20d0;
                $(this)[_0x4e6abb(0x1d1)](_0x4e6abb(0x23c)) &&
                  unfilledArr["push"]({
                    input: $(this)[_0x4e6abb(0x1b0)](_0x4e6abb(0x214)),
                  });
              }))),
      $(steps[x])
        [_0x5a20d0(0x208)](_0x5a20d0(0x296))
        [_0x5a20d0(0x208)]("input:radio[required]")
        [_0x5a20d0(0x264)](function (_0x1f857c) {
          const _0x9b12d3 = _0x5a20d0;
          var _0x19c22e = $(this)["attr"]("name");
          $("input:radio[name=\x22" + _0x19c22e + _0x9b12d3(0x1a2))[
            _0x9b12d3(0x288)
          ] == 0x0
            ? (!empReqRadio[_0x9b12d3(0x208)](
                (_0x55d5aa) => _0x55d5aa[_0x9b12d3(0x1ad)] === _0x1f857c,
              ) && empReqRadio["push"]({ input: _0x1f857c }),
              unfilledArr["push"]({ input: $(this)["attr"](_0x9b12d3(0x214)) }))
            : (empReqRadio = empReqRadio[_0x9b12d3(0x2a5)](
                (_0x307e5a) => _0x307e5a[_0x9b12d3(0x1ad)] !== _0x1f857c,
              )),
            empReqRadio[_0x9b12d3(0x288)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x5a20d0(0x296))
        [_0x5a20d0(0x208)](_0x5a20d0(0x269))
        [_0x5a20d0(0x264)](function (_0x1b6248) {
          const _0x44d297 = _0x5a20d0;
          let _0x1d554c = $(this)[_0x44d297(0x2a7)]()[_0x44d297(0x288)],
            _0x397704 = $(this)["data"](_0x44d297(0x25a))
              ? $(this)[_0x44d297(0x222)](_0x44d297(0x25a))
              : 0x0;
          $(this)["val"]() !== "" && _0x1d554c >= _0x397704
            ? (empReqInput = empReqInput["filter"](
                (_0xc0baf3) => _0xc0baf3["input"] !== _0x1b6248,
              ))
            : (!empReqInput[_0x44d297(0x208)](
                (_0x584a21) => _0x584a21[_0x44d297(0x1ad)] === _0x1b6248,
              ) && empReqInput[_0x44d297(0x251)]({ input: _0x1b6248 }),
              unfilledArr["push"]({
                input: $(this)[_0x44d297(0x1b0)]("name"),
              })),
            empReqInput[_0x44d297(0x288)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x5a20d0(0x296))
        ["find"](_0x5a20d0(0x25b))
        [_0x5a20d0(0x264)](function (_0x315e15) {
          const _0x5ae49f = _0x5a20d0;
          (skipTo = undefined),
            $(this)
              [_0x5ae49f(0x28c)](_0x5ae49f(0x1ff))
              [_0x5ae49f(0x222)](_0x5ae49f(0x1c6)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0x5ae49f(0x1ff))
                [_0x5ae49f(0x222)](_0x5ae49f(0x1c6))),
            $(this)
              [_0x5ae49f(0x28c)]("[data-go-to]")
              ["attr"](_0x5ae49f(0x242)) &&
              ((answer = $(this)
                [_0x5ae49f(0x28c)]("[data-go-to]")
                [_0x5ae49f(0x1b0)]("data-go-to")),
              (selections = selections[_0x5ae49f(0x2a5)](
                (_0xe2cf31) => _0xe2cf31[_0x5ae49f(0x1bc)] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0x5ae49f(0x212)](
                  (_0x1d655c) => _0x1d655c["step"] === x,
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x5ae49f(0x21a)] = x)));
        }),
      $(steps[x])
        ["find"](_0x5a20d0(0x296))
        [_0x5a20d0(0x208)](":input[type=\x22password\x22][required]")
        [_0x5a20d0(0x264)](function (_0x42899a) {
          const _0x31829b = _0x5a20d0;
          let _0x3ef5ed = $(this)[_0x31829b(0x2a7)]()["length"],
            _0x44ac42 = $(this)[_0x31829b(0x222)](_0x31829b(0x25a))
              ? $(this)[_0x31829b(0x222)](_0x31829b(0x25a))
              : 0x0;
          $(this)[_0x31829b(0x2a7)]() !== "" && _0x3ef5ed >= _0x44ac42
            ? (empReqPassword = empReqPassword["filter"](
                (_0x44083b) => _0x44083b[_0x31829b(0x1ad)] !== _0x42899a,
              ))
            : (!empReqPassword[_0x31829b(0x208)](
                (_0x1de2b4) => _0x1de2b4[_0x31829b(0x1ad)] === _0x42899a,
              ) && empReqPassword[_0x31829b(0x251)]({ input: _0x42899a }),
              unfilledArr["push"]({
                input: $(this)["attr"](_0x31829b(0x214)),
              })),
            empReqPassword[_0x31829b(0x288)] === 0x0
              ? (passwordFilled = !![])
              : (passwordFilled = ![]);
        }),
      $(steps[x])
        [_0x5a20d0(0x208)](_0x5a20d0(0x296))
        ["find"](_0x5a20d0(0x1b4))
        [_0x5a20d0(0x264)](function (_0x451b75) {
          const _0x53c2c0 = _0x5a20d0;
          (skipTo = undefined),
            $(this)
              [_0x53c2c0(0x28c)](_0x53c2c0(0x1ff))
              [_0x53c2c0(0x222)](_0x53c2c0(0x1c6)) !== "" &&
              (skipTo = $(this)
                [_0x53c2c0(0x28c)]("[data-skip-to]")
                [_0x53c2c0(0x222)](_0x53c2c0(0x1c6))),
            $(this)
              ["parents"](_0x53c2c0(0x21e))
              [_0x53c2c0(0x1b0)](_0x53c2c0(0x242)) &&
              ((answer = $(this)
                [_0x53c2c0(0x28c)](_0x53c2c0(0x21e))
                [_0x53c2c0(0x1b0)](_0x53c2c0(0x242))),
              (selections = selections[_0x53c2c0(0x2a5)](
                (_0x1bc4d1) => _0x1bc4d1[_0x53c2c0(0x1bc)] !== x,
              )),
              selections[_0x53c2c0(0x251)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x53c2c0(0x251)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x36787f) => _0x36787f["step"] === x,
                )),
                (selections[objIndex][_0x53c2c0(0x203)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x53c2c0(0x21a)] = x)));
        }),
      $(steps[x])
        [_0x5a20d0(0x208)](_0x5a20d0(0x296))
        [_0x5a20d0(0x208)](":input[type=\x22url\x22][required]")
        [_0x5a20d0(0x264)](function (_0x438ffe) {
          const _0x212d1c = _0x5a20d0;
          let _0x2f9958 = $(this)[_0x212d1c(0x2a7)]()[_0x212d1c(0x288)],
            _0x4900bb = $(this)[_0x212d1c(0x222)](_0x212d1c(0x25a))
              ? $(this)["data"]("min-character")
              : 0x0;
          $(this)[_0x212d1c(0x2a7)]() !== "" && _0x2f9958 >= _0x4900bb
            ? (empReqUrl = empReqUrl[_0x212d1c(0x2a5)](
                (_0x42d926) => _0x42d926[_0x212d1c(0x1ad)] !== _0x438ffe,
              ))
            : (!empReqUrl[_0x212d1c(0x208)](
                (_0x1f6333) => _0x1f6333["input"] === _0x438ffe,
              ) && empReqUrl[_0x212d1c(0x251)]({ input: _0x438ffe }),
              unfilledArr[_0x212d1c(0x251)]({
                input: $(this)[_0x212d1c(0x1b0)]("name"),
              })),
            empReqUrl[_0x212d1c(0x288)] === 0x0 &&
            validateURL($(this)[_0x212d1c(0x2a7)]())
              ? (urlFilled = !![])
              : (urlFilled = ![]);
        }),
      $(steps[x])
        [_0x5a20d0(0x208)](_0x5a20d0(0x296))
        ["find"](":input[type=\x22url\x22]")
        ["each"](function (_0x42823f) {
          const _0x41aced = _0x5a20d0;
          (skipTo = undefined),
            $(this)
              [_0x41aced(0x28c)]("[data-skip-to]")
              [_0x41aced(0x222)](_0x41aced(0x1c6)) !== "" &&
              (skipTo = $(this)
                [_0x41aced(0x28c)]("[data-skip-to]")
                [_0x41aced(0x222)](_0x41aced(0x1c6))),
            $(this)
              [_0x41aced(0x28c)](_0x41aced(0x21e))
              ["attr"](_0x41aced(0x242)) &&
              ((answer = $(this)
                ["parents"](_0x41aced(0x21e))
                [_0x41aced(0x1b0)](_0x41aced(0x242))),
              (selections = selections[_0x41aced(0x2a5)](
                (_0x35188f) => _0x35188f["step"] !== x,
              )),
              selections[_0x41aced(0x251)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x41aced(0x251)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x41aced(0x212)](
                  (_0xe64b63) => _0xe64b63[_0x41aced(0x1bc)] === x,
                )),
                (selections[objIndex][_0x41aced(0x203)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x41aced(0x21a)] = x)));
        }),
      $(steps[x])
        [_0x5a20d0(0x208)](_0x5a20d0(0x296))
        [_0x5a20d0(0x208)](_0x5a20d0(0x2aa))
        [_0x5a20d0(0x264)](function (_0x57a792) {
          const _0x2c3723 = _0x5a20d0;
          $(this)[_0x2c3723(0x2a7)]() !== ""
            ? (empReqDate = empReqDate[_0x2c3723(0x2a5)](
                (_0x343554) => _0x343554[_0x2c3723(0x1ad)] !== _0x57a792,
              ))
            : (!empReqDate[_0x2c3723(0x208)](
                (_0x30bb24) => _0x30bb24[_0x2c3723(0x1ad)] === _0x57a792,
              ) && empReqDate[_0x2c3723(0x251)]({ input: _0x57a792 }),
              unfilledArr[_0x2c3723(0x251)]({
                input: $(this)["attr"](_0x2c3723(0x214)),
              })),
            empReqDate[_0x2c3723(0x288)] === 0x0
              ? (dateFilled = !![])
              : (dateFilled = ![]);
        }),
      $(steps[x])
        [_0x5a20d0(0x208)](_0x5a20d0(0x296))
        ["find"](_0x5a20d0(0x270))
        [_0x5a20d0(0x264)](function (_0x35ac2f) {
          const _0x3a320c = _0x5a20d0;
          (skipTo = undefined),
            $(this)["parents"](_0x3a320c(0x1ff))["data"](_0x3a320c(0x1c6)) !==
              "" &&
              (skipTo = $(this)
                ["parents"](_0x3a320c(0x1ff))
                [_0x3a320c(0x222)](_0x3a320c(0x1c6))),
            $(this)
              ["parents"](_0x3a320c(0x21e))
              [_0x3a320c(0x1b0)]("data-go-to") &&
              ((answer = $(this)
                ["parents"](_0x3a320c(0x21e))
                ["attr"](_0x3a320c(0x242))),
              (selections = selections[_0x3a320c(0x2a5)](
                (_0x496a27) => _0x496a27[_0x3a320c(0x1bc)] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x3a320c(0x251)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x3a320c(0x212)](
                  (_0x5d21e6) => _0x5d21e6[_0x3a320c(0x1bc)] === x,
                )),
                (selections[objIndex][_0x3a320c(0x203)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x3a320c(0x21a)] = x)));
        }),
      $(steps[x])
        ["find"](_0x5a20d0(0x296))
        ["find"](_0x5a20d0(0x202))
        [_0x5a20d0(0x264)](function (_0x422773) {
          const _0xef3280 = _0x5a20d0;
          let _0x5d93b4 = $(this)[_0xef3280(0x2a7)]()[_0xef3280(0x288)],
            _0x2c62c2 = $(this)[_0xef3280(0x222)](_0xef3280(0x25a))
              ? $(this)["data"]("min-character")
              : 0x0;
          $(this)[_0xef3280(0x2a7)]() !== "" && _0x5d93b4 >= _0x2c62c2
            ? (empReqNum = empReqNum[_0xef3280(0x2a5)](
                (_0x358c4c) => _0x358c4c["input"] !== _0x422773,
              ))
            : (!empReqNum[_0xef3280(0x208)](
                (_0x293d42) => _0x293d42["input"] === _0x422773,
              ) && empReqNum[_0xef3280(0x251)]({ input: _0x422773 }),
              unfilledArr[_0xef3280(0x251)]({
                input: $(this)[_0xef3280(0x1b0)]("name"),
              })),
            empReqNum[_0xef3280(0x288)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x5a20d0(0x296))
        [_0x5a20d0(0x208)](_0x5a20d0(0x1b8))
        [_0x5a20d0(0x264)](function (_0xd1f867) {
          const _0xff498a = _0x5a20d0;
          (skipTo = undefined),
            $(this)
              [_0xff498a(0x28c)]("[data-skip-to]")
              [_0xff498a(0x222)](_0xff498a(0x1c6)) !== "" &&
              (skipTo = $(this)
                [_0xff498a(0x28c)](_0xff498a(0x1ff))
                ["data"](_0xff498a(0x1c6))),
            $(this)
              [_0xff498a(0x28c)]("[data-go-to]")
              [_0xff498a(0x1b0)](_0xff498a(0x242)) &&
              ((answer = $(this)
                [_0xff498a(0x28c)](_0xff498a(0x21e))
                [_0xff498a(0x1b0)](_0xff498a(0x242))),
              (selections = selections[_0xff498a(0x2a5)](
                (_0x231b9a) => _0x231b9a[_0xff498a(0x1bc)] !== x,
              )),
              selections[_0xff498a(0x251)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0xff498a(0x251)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x1d9932) => _0x1d9932[_0xff498a(0x1bc)] === x,
                )),
                (selections[objIndex][_0xff498a(0x203)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0xff498a(0x21a)] = x)));
        }),
      $(steps[x])
        [_0x5a20d0(0x208)](_0x5a20d0(0x296))
        [_0x5a20d0(0x208)](_0x5a20d0(0x272))
        [_0x5a20d0(0x264)](function (_0x2a8a2d) {
          const _0x4e8894 = _0x5a20d0;
          if ($(this)["val"]() !== "") {
            let _0x17665a = $(this)[_0x4e8894(0x2a7)]()[_0x4e8894(0x288)],
              _0x2cc44b = $(this)[_0x4e8894(0x222)](_0x4e8894(0x25a))
                ? $(this)[_0x4e8894(0x222)]("min-character")
                : 0x0;
            if ($(this)["data"]("phone-autoformat")) {
              var _0x2486c6 = phoneAutoFormat(
                $(this)[_0x4e8894(0x222)](_0x4e8894(0x217)),
              );
              $(this)[_0x4e8894(0x2a7)](_0x2486c6($(this)[_0x4e8894(0x2a7)]()));
            }
            phoneValidation($(this)[_0x4e8894(0x2a7)](), _0x17665a, _0x2cc44b)
              ? (empReqTel = empReqTel[_0x4e8894(0x2a5)](
                  (_0x5ed300) => _0x5ed300[_0x4e8894(0x1ad)] !== _0x2a8a2d,
                ))
              : empReqTel[_0x4e8894(0x251)]({ input: _0x2a8a2d });
          } else
            !empReqTel[_0x4e8894(0x208)](
              (_0x576ed3) => _0x576ed3[_0x4e8894(0x1ad)] === _0x2a8a2d,
            ) && empReqTel[_0x4e8894(0x251)]({ input: _0x2a8a2d }),
              unfilledArr[_0x4e8894(0x251)]({
                input: $(this)[_0x4e8894(0x1b0)](_0x4e8894(0x214)),
              });
          empReqTel[_0x4e8894(0x288)] === 0x0
            ? (telFilled = !![])
            : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x5a20d0(0x208)](".active-answer-card")
        [_0x5a20d0(0x208)](_0x5a20d0(0x239))
        ["each"](function (_0x554af8) {
          const _0x37ca9c = _0x5a20d0;
          (skipTo = undefined),
            $(this)
              [_0x37ca9c(0x28c)](_0x37ca9c(0x1ff))
              [_0x37ca9c(0x222)](_0x37ca9c(0x1c6)) !== "" &&
              (skipTo = $(this)
                [_0x37ca9c(0x28c)](_0x37ca9c(0x1ff))
                ["data"](_0x37ca9c(0x1c6))),
            $(this)
              [_0x37ca9c(0x28c)](_0x37ca9c(0x21e))
              [_0x37ca9c(0x1b0)](_0x37ca9c(0x242)) &&
              ((answer = $(this)
                [_0x37ca9c(0x28c)](_0x37ca9c(0x21e))
                [_0x37ca9c(0x1b0)](_0x37ca9c(0x242))),
              (selections = selections[_0x37ca9c(0x2a5)](
                (_0x5d1db5) => _0x5d1db5[_0x37ca9c(0x1bc)] !== x,
              )),
              selections[_0x37ca9c(0x251)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x37ca9c(0x251)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x37ca9c(0x212)](
                  (_0x1b9850) => _0x1b9850[_0x37ca9c(0x1bc)] === x,
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x37ca9c(0x21a)] = x)));
        }),
      $(steps[x])
        [_0x5a20d0(0x208)](".active-answer-card")
        [_0x5a20d0(0x208)](_0x5a20d0(0x2ab))
        [_0x5a20d0(0x264)](function (_0x444241) {
          const _0x165cfa = _0x5a20d0;
          $(this)[_0x165cfa(0x2a7)]() !== ""
            ? (empReqFile = empReqFile[_0x165cfa(0x2a5)](
                (_0x179c38) => _0x179c38["input"] !== _0x444241,
              ))
            : (!empReqFile["find"](
                (_0x44e352) => _0x44e352["input"] === _0x444241,
              ) && empReqFile["push"]({ input: _0x444241 }),
              unfilledArr["push"]({
                input: $(this)[_0x165cfa(0x1b0)]("name"),
              })),
            empReqFile[_0x165cfa(0x288)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x5a20d0(0x208)](_0x5a20d0(0x296))
        ["find"](_0x5a20d0(0x1eb))
        ["each"](function (_0x148231) {
          const _0x2ae665 = _0x5a20d0;
          (skipTo = undefined),
            $(this)
              [_0x2ae665(0x28c)](_0x2ae665(0x1ff))
              [_0x2ae665(0x222)](_0x2ae665(0x1c6)) !== "" &&
              (skipTo = $(this)
                [_0x2ae665(0x28c)](_0x2ae665(0x1ff))
                [_0x2ae665(0x222)](_0x2ae665(0x1c6))),
            $(this)
              [_0x2ae665(0x28c)](_0x2ae665(0x21e))
              [_0x2ae665(0x1b0)](_0x2ae665(0x242)) &&
              ((answer = $(this)
                ["parents"](_0x2ae665(0x21e))
                [_0x2ae665(0x1b0)](_0x2ae665(0x242))),
              (selections = selections[_0x2ae665(0x2a5)](
                (_0x2b60dd) => _0x2b60dd[_0x2ae665(0x1bc)] !== x,
              )),
              selections[_0x2ae665(0x251)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x2ae665(0x251)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x2ae665(0x212)](
                  (_0x5927d4) => _0x5927d4[_0x2ae665(0x1bc)] === x,
                )),
                (selections[objIndex][_0x2ae665(0x203)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x2ae665(0x21a)] = x)));
        }),
      $(steps[x])
        ["find"](_0x5a20d0(0x296))
        [_0x5a20d0(0x208)](_0x5a20d0(0x2a9))
        ["each"](function (_0x1a30cf) {
          const _0x24d995 = _0x5a20d0;
          console[_0x24d995(0x25e)]($(this)[_0x24d995(0x2a7)]()),
            $(this)[_0x24d995(0x2a7)]() !== null &&
            $(this)[_0x24d995(0x2a7)]() !== ""
              ? (empReqSelect = empReqSelect[_0x24d995(0x2a5)](
                  (_0x15e12f) => _0x15e12f[_0x24d995(0x1ad)] !== _0x1a30cf,
                ))
              : (!empReqSelect[_0x24d995(0x208)](
                  (_0x23a4c3) => _0x23a4c3[_0x24d995(0x1ad)] === _0x1a30cf,
                ) && empReqSelect["push"]({ input: _0x1a30cf }),
                unfilledArr["push"]({
                  input: $(this)["attr"](_0x24d995(0x214)),
                })),
            empReqSelect["length"] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x5a20d0(0x208)](".active-answer-card")
        [_0x5a20d0(0x208)](_0x5a20d0(0x1c0))
        [_0x5a20d0(0x264)](function (_0x2b6ba2) {
          const _0x138903 = _0x5a20d0;
          (skipTo = undefined),
            $(this)
              [_0x138903(0x28c)](_0x138903(0x1ff))
              [_0x138903(0x222)](_0x138903(0x1c6)) !== "" &&
              (skipTo = $(this)
                ["parents"]("[data-skip-to]")
                [_0x138903(0x222)]("skip-to")),
            $(this)
              [_0x138903(0x28c)](_0x138903(0x21e))
              ["attr"](_0x138903(0x242)) &&
              ((answer = $(this)
                ["parents"](_0x138903(0x21e))
                [_0x138903(0x1b0)](_0x138903(0x242))),
              (selections = selections["filter"](
                (_0x8976af) => _0x8976af[_0x138903(0x1bc)] !== x,
              )),
              selections[_0x138903(0x251)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x138903(0x251)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x138903(0x212)](
                  (_0x42bbbb) => _0x42bbbb[_0x138903(0x1bc)] === x,
                )),
                (selections[objIndex][_0x138903(0x203)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x138903(0x21a)] = x)));
        }),
      $(steps[x])
        [_0x5a20d0(0x208)](_0x5a20d0(0x296))
        [_0x5a20d0(0x208)]("textarea[required]")
        ["each"](function (_0x5cf72d) {
          const _0x3ad220 = _0x5a20d0;
          let _0x147ced = $(this)[_0x3ad220(0x2a7)]()[_0x3ad220(0x288)],
            _0x173eee = $(this)[_0x3ad220(0x222)](_0x3ad220(0x25a))
              ? $(this)[_0x3ad220(0x222)](_0x3ad220(0x25a))
              : 0x0;
          $(this)[_0x3ad220(0x2a7)]() !== "" && _0x147ced >= _0x173eee
            ? (empReqTextarea = empReqTextarea[_0x3ad220(0x2a5)](
                (_0x61d7f6) => _0x61d7f6[_0x3ad220(0x1ad)] !== _0x5cf72d,
              ))
            : (!empReqTextarea["find"](
                (_0x316b77) => _0x316b77[_0x3ad220(0x1ad)] === _0x5cf72d,
              ) && empReqTextarea[_0x3ad220(0x251)]({ input: _0x5cf72d }),
              unfilledArr[_0x3ad220(0x251)]({
                input: $(this)[_0x3ad220(0x1b0)](_0x3ad220(0x214)),
              })),
            empReqTextarea["length"] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x5a20d0(0x208)](_0x5a20d0(0x296))
        ["find"](_0x5a20d0(0x248))
        [_0x5a20d0(0x264)](function (_0x1e6f5a) {
          const _0x543034 = _0x5a20d0;
          (skipTo = undefined),
            $(this)[_0x543034(0x28c)](_0x543034(0x1ff))["data"]("skip-to") !==
              "" &&
              (skipTo = $(this)
                [_0x543034(0x28c)]("[data-skip-to]")
                ["data"](_0x543034(0x1c6))),
            $(this)
              [_0x543034(0x28c)](_0x543034(0x21e))
              [_0x543034(0x1b0)](_0x543034(0x242)) &&
              ((answer = $(this)
                [_0x543034(0x28c)]("[data-go-to]")
                [_0x543034(0x1b0)](_0x543034(0x242))),
              (selections = selections[_0x543034(0x2a5)](
                (_0x1467d0) => _0x1467d0[_0x543034(0x1bc)] !== x,
              )),
              selections[_0x543034(0x251)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x543034(0x251)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x543034(0x212)](
                  (_0x1bd391) => _0x1bd391[_0x543034(0x1bc)] === x,
                )),
                (selections[objIndex][_0x543034(0x203)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x543034(0x21a)] = x)));
        }),
      $(steps[x])
        ["find"](_0x5a20d0(0x296))
        ["find"](_0x5a20d0(0x277))
        [_0x5a20d0(0x264)](function (_0x3ef95e) {
          const _0xd0db4d = _0x5a20d0;
          $(this)[_0xd0db4d(0x2a7)]() !== ""
            ? validateEmail(
                $(this)["val"](),
                $(this)[_0xd0db4d(0x222)]("block-domain"),
                $(this)[_0xd0db4d(0x1b0)](_0xd0db4d(0x214)),
              )
            : ((emailFilled = ![]),
              unfilledArr[_0xd0db4d(0x251)]({
                input: $(this)[_0xd0db4d(0x1b0)](_0xd0db4d(0x214)),
              }));
        }),
      $(steps[x])
        [_0x5a20d0(0x208)](_0x5a20d0(0x296))
        ["find"](":input[type=\x22email\x22]")
        [_0x5a20d0(0x264)](function (_0x17e948) {
          const _0x326e35 = _0x5a20d0;
          (skipTo = undefined),
            $(this)
              ["parents"](_0x326e35(0x1ff))
              [_0x326e35(0x222)](_0x326e35(0x1c6)) !== "" &&
              (skipTo = $(this)
                [_0x326e35(0x28c)](_0x326e35(0x1ff))
                [_0x326e35(0x222)](_0x326e35(0x1c6))),
            $(this)[_0x326e35(0x28c)](_0x326e35(0x21e))["attr"]("data-go-to") &&
              ((answer = $(this)
                ["parents"]("[data-go-to]")
                ["attr"]("data-go-to")),
              (selections = selections[_0x326e35(0x2a5)](
                (_0x41d96f) => _0x41d96f["step"] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections["findIndex"](
                  (_0x7ecfad) => _0x7ecfad[_0x326e35(0x1bc)] === x,
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x326e35(0x21a)] = x)));
        });
  }
  $(steps[x])
    ["find"](_0x5a20d0(0x296))
    [_0x5a20d0(0x208)](":input[type=\x22radio\x22]")
    ["is"](_0x5a20d0(0x23c)) &&
    ((selArr = []),
    $(steps)
      ["find"](_0x5a20d0(0x2a3))
      [_0x5a20d0(0x264)](function (_0x2f8983, _0x3a5627) {
        const _0x41aa61 = _0x5a20d0;
        selArr[_0x41aa61(0x251)]({
          selected: $(this)[_0x41aa61(0x222)](_0x41aa61(0x1a7)),
        });
      }),
    (selString = []),
    selArr["forEach"]((_0x3c30d1) =>
      selString["push"](_0x3c30d1[_0x5a20d0(0x1a7)]),
    ),
    (selections = selections["filter"](
      (_0x4cc035) => _0x4cc035[_0x5a20d0(0x1bc)] !== x,
    )),
    $(steps[x])
      ["find"](".active-answer-card")
      [_0x5a20d0(0x208)](_0x5a20d0(0x1e1))
      [_0x5a20d0(0x264)](function () {
        const _0x2856be = _0x5a20d0;
        skipTo = undefined;
        if (
          $(this)
            ["parents"]("[data-skip-to]")
            [_0x2856be(0x222)](_0x2856be(0x1c6))
        )
          skipTo = $(this)
            [_0x2856be(0x28c)]("[data-skip-to]")
            ["data"](_0x2856be(0x1c6));
        else
          $(this)[_0x2856be(0x222)](_0x2856be(0x1c6)) &&
            (skipTo = $(this)[_0x2856be(0x222)]("skip-to"));
        if ($(this)[_0x2856be(0x222)](_0x2856be(0x1fb)))
          (answer = $(this)["attr"](_0x2856be(0x242))),
            console[_0x2856be(0x25e)](answer, selections),
            selections[_0x2856be(0x251)]({ step: x, selected: answer }),
            skipTo &&
              (selections["push"]({ step: skipTo - 0x2, selected: answer }),
              (objIndex = selections[_0x2856be(0x212)](
                (_0x219b69) => _0x219b69[_0x2856be(0x1bc)] === x,
              )),
              (selections[objIndex][_0x2856be(0x203)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x2856be(0x21a)] = x));
        else
          $(this)
            [_0x2856be(0x28c)](_0x2856be(0x21e))
            ["data"](_0x2856be(0x1fb)) &&
            ((answer = $(this)
              ["parents"](_0x2856be(0x21e))
              [_0x2856be(0x222)](_0x2856be(0x1fb))),
            selections[_0x2856be(0x251)]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0x2856be(0x251)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections["findIndex"](
                (_0x4a77fc) => _0x4a77fc[_0x2856be(0x1bc)] === x,
              )),
              (selections[objIndex][_0x2856be(0x203)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x2856be(0x21a)] = x)));
      }),
    logicExtra
      ? ($(steps[x])
          [_0x5a20d0(0x208)](".active-answer-card")
          [_0x5a20d0(0x208)](_0x5a20d0(0x1db))
          [_0x5a20d0(0x222)](_0x5a20d0(0x292)) === !![] ||
          $(steps[x])
            [_0x5a20d0(0x208)](_0x5a20d0(0x1f2))
            [_0x5a20d0(0x222)](_0x5a20d0(0x292)) === !![]) &&
        skip &&
        selections[_0x5a20d0(0x2a5)](
          (_0x57eccf) => _0x57eccf[_0x5a20d0(0x1bc)] === x,
        )[_0x5a20d0(0x288)] > 0x0 &&
        textareaLength === 0x0 &&
        textInputLength === 0x0 &&
        emailInputLength === 0x0 &&
        checkboxInputLength === 0x0 &&
        setTimeout(
          function () {
            (next = !![]), nextStep(), selectionQuiz();
          },
          $(steps[x])
            [_0x5a20d0(0x208)](_0x5a20d0(0x28e))
            [_0x5a20d0(0x222)]("radio-delay"),
        )
      : $(steps[x])
          ["find"](_0x5a20d0(0x1db))
          [_0x5a20d0(0x222)](_0x5a20d0(0x292)) === !![] &&
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
            [_0x5a20d0(0x208)](_0x5a20d0(0x28e))
            [_0x5a20d0(0x222)](_0x5a20d0(0x1a0)),
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
    cloneRemoveInput(),
    console[_0x5a20d0(0x25e)](selections);
}
function displayErrorMessage() {
  const _0x2a32c1 = _0x5084ba;
  $("[data-text=\x22error-message\x22]")[_0x2a32c1(0x259)](),
    unfilledArr[_0x2a32c1(0x288)] > 0x0 &&
      unfilledArr[_0x2a32c1(0x293)](function (_0x4b0ad0) {
        const _0x3b1473 = _0x2a32c1;
        $(_0x3b1473(0x27d) + _0x4b0ad0["input"] + "\x22]")
          [_0x3b1473(0x2ae)]("[data-text=\x22error-message\x22]")
          [_0x3b1473(0x23e)](),
          $("input[name=\x22" + _0x4b0ad0[_0x3b1473(0x1ad)] + "\x22]")
            [_0x3b1473(0x28c)]()
            [_0x3b1473(0x284)](_0x3b1473(0x1cf))
            [_0x3b1473(0x23e)](),
          $(_0x3b1473(0x246) + _0x4b0ad0[_0x3b1473(0x1ad)] + "\x22]")
            [_0x3b1473(0x2ae)](_0x3b1473(0x1cf))
            ["fadeIn"](),
          $(_0x3b1473(0x28d) + _0x4b0ad0[_0x3b1473(0x1ad)] + "\x22]")
            [_0x3b1473(0x2ae)](_0x3b1473(0x1cf))
            [_0x3b1473(0x23e)]();
      });
}
function resetInputErrorMessage(_0x56145f) {
  const _0x53cc85 = _0x5084ba;
  $(_0x53cc85(0x27d) + _0x56145f + "\x22]")
    [_0x53cc85(0x2ae)](_0x53cc85(0x1cf))
    [_0x53cc85(0x259)](),
    $("input[name=\x22" + _0x56145f + "\x22]")
      [_0x53cc85(0x28c)]()
      [_0x53cc85(0x284)]("[data-text=\x22error-message\x22]")
      ["hide"](),
    $(_0x53cc85(0x246) + _0x56145f + "\x22]")
      ["siblings"](_0x53cc85(0x1cf))
      [_0x53cc85(0x259)](),
    $(_0x53cc85(0x28d) + _0x56145f + "\x22]")
      [_0x53cc85(0x2ae)](_0x53cc85(0x1cf))
      [_0x53cc85(0x259)]();
}
function increaseCurstep() {
  const _0x19383d = _0x5084ba;
  countCard
    ? ((curStep = curStep + 0x1),
      $("[data-text=\x22total-steps\x22]")[_0x19383d(0x2ba)](
        steps[_0x19383d(0x288)],
      ))
    : $(steps[x])[_0x19383d(0x222)](_0x19383d(0x2a1))
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    $("[data-text=\x22current-step\x22]")["text"](curStep);
}
function decreaseCurstep() {
  const _0x78abea = _0x5084ba;
  countCard
    ? ((curStep = curStep - 0x1),
      $(_0x78abea(0x27c))["text"](steps[_0x78abea(0x288)]))
    : $(steps[x])[_0x78abea(0x222)](_0x78abea(0x2a1))
      ? (curStep = curStep - 0x0)
      : (curStep = curStep - 0x1),
    $(_0x78abea(0x224))["text"](curStep);
}
$(_0x5084ba(0x1d2))["on"](_0x5084ba(0x255), function (_0x423b4e) {
  const _0x60b36e = _0x5084ba;
  console["log"](_0x60b36e(0x1a9)),
    $(this)[_0x60b36e(0x222)](_0x60b36e(0x244)) &&
      (redirectTo = $(this)[_0x60b36e(0x222)]("redirect")),
    !$(this)["data"](_0x60b36e(0x249)) &&
      (newTab = $(this)[_0x60b36e(0x222)](_0x60b36e(0x249))),
    (successCard = $(this)[_0x60b36e(0x222)](_0x60b36e(0x1ef))),
    _0x423b4e[_0x60b36e(0x230)](),
    _0x423b4e[_0x60b36e(0x1e6)](),
    logicExtra &&
      ($(this)[_0x60b36e(0x1b1)]("novalidate", !![]),
      $(steps)
        [_0x60b36e(0x208)](_0x60b36e(0x204))
        ["prop"](_0x60b36e(0x247), ![])),
    localStorage[_0x60b36e(0x275)](_0x60b36e(0x24e)),
    fill
      ? ($(this)[_0x60b36e(0x222)](_0x60b36e(0x20a))
          ? $(this)[_0x60b36e(0x2a7)](
              $(this)[_0x60b36e(0x222)](_0x60b36e(0x20a)),
            )
          : ($(this)[_0x60b36e(0x2a7)]("Please\x20wait..."),
            $(this)[_0x60b36e(0x2ba)](_0x60b36e(0x2b5))),
        $(_0x60b36e(0x22f))[_0x60b36e(0x24f)](),
        $(_0x60b36e(0x26b))[_0x60b36e(0x288)] > 0x0 &&
          grecaptcha["getResponse"]()[_0x60b36e(0x288)] === 0x0 &&
          (form[_0x60b36e(0x208)]("[data-form=\x22submit-btn\x22]")[
            _0x60b36e(0x2ba)
          ](oldSubmitText),
          form[_0x60b36e(0x208)]("[data-form=\x22submit-btn\x22]")[
            _0x60b36e(0x2a7)
          ](oldSubmitText)),
        customError && $(_0x60b36e(0x1cf))[_0x60b36e(0x259)]())
      : customError && displayErrorMessage();
});
function nextStep() {
  const _0x3a7b06 = _0x5084ba;
  customError
    ? ($("[data-text=\x22error-message\x22]")["hide"](),
      fill
        ? (x++,
          increaseCurstep(),
          (progress = x),
          x <= steps[_0x3a7b06(0x288)] - 0x1 &&
            (updateStep(), memory && saveFilledInput()))
        : displayErrorMessage())
    : (x++,
      increaseCurstep(),
      x > progress && (progress = x),
      x <= steps[_0x3a7b06(0x288)] - 0x1 &&
        (updateStep(), memory && saveFilledInput())),
    andLogic();
}
function backStep() {
  const _0x1f0863 = _0x5084ba;
  customError && $(_0x1f0863(0x1cf))["hide"](),
    decreaseCurstep(),
    x > 0x0 &&
      ($(progressbar[x])[_0x1f0863(0x260)](_0x1f0863(0x1f8)),
      selections["filter"]((_0xe3a068) => _0xe3a068[_0x1f0863(0x203)] === x)[
        "length"
      ] > 0x0
        ? (x = parseInt(
            getSafe(
              () =>
                selections[_0x1f0863(0x2a5)](
                  (_0x358b08) => _0x358b08["skipTo"] === x,
                )[0x0][_0x1f0863(0x21a)],
            ),
          ))
        : x--,
      updateStep()),
    ($(steps[x])
      [_0x1f0863(0x208)]("[data-radio-skip]:visible")
      [_0x1f0863(0x222)](_0x1f0863(0x292)) === !![] ||
      $(steps[x])
        [_0x1f0863(0x208)](_0x1f0863(0x296))
        [_0x1f0863(0x208)](_0x1f0863(0x1db))
        ["data"](_0x1f0863(0x292)) === !![] ||
      $(steps[x])
        [_0x1f0863(0x208)](_0x1f0863(0x1f2))
        ["data"](_0x1f0863(0x292)) === !![]) &&
      ((all_data = all_data["filter"](
        (_0x395139) =>
          _0x395139[_0x1f0863(0x1dc)] !==
          $(steps[x])
            [_0x1f0863(0x208)]("input[type=\x22radio\x22]:checked")
            ["attr"]("name"),
      )),
      $(
        _0x1f0863(0x297) +
          $(steps[x])
            [_0x1f0863(0x208)]("input[type=\x22radio\x22]:checked")
            [_0x1f0863(0x1b0)](_0x1f0863(0x214)) +
          "\x22]",
      )[_0x1f0863(0x259)](),
      $(steps[x])
        ["find"]("input[type=\x22radio\x22]")
        [_0x1f0863(0x1b1)](_0x1f0863(0x20d), ![]),
      $(steps[x])
        [_0x1f0863(0x208)](_0x1f0863(0x1fc))
        [_0x1f0863(0x260)]("w--redirected-checked"),
      validation());
}
weightedSelectionRange &&
  $(_0x5084ba(0x29f))[_0x5084ba(0x264)](function () {
    const _0xb017dc = _0x5084ba;
    $(this)[_0xb017dc(0x210)](
      _0xb017dc(0x2a8) + $(this)["data"](_0xb017dc(0x1ba)) + "</div>",
    );
  });
function selectionQuiz() {
  const _0x545fed = _0x5084ba;
  if ($(this)["find"](_0x545fed(0x1d6))) {
    $(_0x545fed(0x29f))[_0x545fed(0x259)](), $(_0x545fed(0x276))["hide"]();
    if (weightedSelection) {
      (selTotal = 0x0),
        selArr[_0x545fed(0x293)](function (_0x49d5e4) {
          selTotal = selTotal + _0x49d5e4["selected"];
        }),
        $(_0x545fed(0x2a2))["text"](selTotal);
      if ($(_0x545fed(0x1aa) + selTotal + "\x22]")[_0x545fed(0x288)] > 0x0)
        $(_0x545fed(0x1aa) + selTotal + "\x22]")[_0x545fed(0x23e)]();
      else
        $(_0x545fed(0x282) + selTotal + ")")
          ? $(_0x545fed(0x282) + selTotal + ")")
              ["parent"](_0x545fed(0x29f))
              ["eq"](0x0)
              [_0x545fed(0x1c2)]()
          : $("[data-selection=\x22other\x22]")[_0x545fed(0x23e)]();
    } else {
      let _0x2f0909 = -0x1;
      $(_0x545fed(0x29f))[_0x545fed(0x264)](function (_0x166949) {
        const _0x3d605d = _0x545fed;
        $($(_0x3d605d(0x29f))[_0x166949])
          ["data"](_0x3d605d(0x1ba))
          [_0x3d605d(0x2a4)](selString["join"]()) && (_0x2f0909 = _0x166949);
      }),
        _0x2f0909 > -0x1
          ? $($("[data-selection]")[_0x2f0909])[_0x545fed(0x23e)]()
          : $(_0x545fed(0x238))[_0x545fed(0x23e)]();
    }
  }
}
function triggerInputAllData() {
  const _0xdb81ac = _0x5084ba;
  if (savedFilledInput && memory)
    savedFilledInput[_0xdb81ac(0x293)]((_0x2796df) => {
      const _0x51ec50 = _0xdb81ac;
      var _0x2ac9f5 = $(
          _0x51ec50(0x27d) +
            _0x2796df["inputName"] +
            _0x51ec50(0x22e) +
            _0x2796df["value"] +
            "\x22]",
        ),
        _0x1c20c6 = $(_0x51ec50(0x27d) + _0x2796df[_0x51ec50(0x286)] + "\x22]");
      console[_0x51ec50(0x25e)](
        _0x2ac9f5["parents"](_0x51ec50(0x290))[_0x51ec50(0x222)](
          _0x51ec50(0x292),
        ),
      );
      if (_0x2ac9f5["attr"](_0x51ec50(0x1af)) !== _0x51ec50(0x265)) {
        if (
          _0x2ac9f5[_0x51ec50(0x1b0)](_0x51ec50(0x1af)) === _0x51ec50(0x211) &&
          !_0x2ac9f5[_0x51ec50(0x28c)](_0x51ec50(0x290))[_0x51ec50(0x222)](
            "radio-skip",
          )
        )
          _0x2ac9f5[_0x51ec50(0x255)](),
            _0x2ac9f5[_0x51ec50(0x2ae)](_0x51ec50(0x1bb))["addClass"](
              _0x51ec50(0x262),
            ),
            _0x2ac9f5["trigger"](_0x51ec50(0x1ad));
        else
          _0x2796df["value"] === "on"
            ? (_0x1c20c6[_0x51ec50(0x255)](),
              _0x1c20c6["siblings"](_0x51ec50(0x29b))[_0x51ec50(0x1b6)](
                _0x51ec50(0x262),
              ),
              _0x1c20c6[_0x51ec50(0x232)](_0x51ec50(0x1ad)))
            : (console[_0x51ec50(0x25e)](
                _0x2796df["inputName"],
                _0x2796df[_0x51ec50(0x1c3)],
              ),
              _0x1c20c6[_0x51ec50(0x2a7)](_0x2796df["value"]),
              _0x1c20c6[_0x51ec50(0x2a7)](_0x2796df[_0x51ec50(0x1c3)]),
              $(_0x51ec50(0x26e) + _0x2796df[_0x51ec50(0x1c3)] + "\x22]")[
                _0x51ec50(0x1b1)
              ](_0x51ec50(0x1a7), !![]),
              _0x1c20c6["trigger"]("input"),
              _0x1c20c6[_0x51ec50(0x232)](_0x51ec50(0x216)));
      }
    });
  else
    _params &&
      (getParams(),
      searchQ[_0xdb81ac(0x293)]((_0x37ecb5) => {
        const _0x513741 = _0xdb81ac;
        if (
          $(
            _0x513741(0x27d) +
              _0x37ecb5[_0x513741(0x286)] +
              _0x513741(0x22e) +
              _0x37ecb5[_0x513741(0x1c3)] +
              "\x22]",
          )[_0x513741(0x1b0)](_0x513741(0x1af)) !== _0x513741(0x265)
        ) {
          if (
            $(
              _0x513741(0x27d) +
                _0x37ecb5[_0x513741(0x1a5)] +
                _0x513741(0x22e) +
                _0x37ecb5[_0x513741(0x2a7)] +
                "\x22]",
            )["attr"](_0x513741(0x1af)) === "radio"
          )
            $(
              "input[name=\x22" +
                _0x37ecb5[_0x513741(0x1a5)] +
                _0x513741(0x22e) +
                _0x37ecb5[_0x513741(0x2a7)] +
                "\x22]",
            )[_0x513741(0x255)](),
              $(
                _0x513741(0x27d) +
                  _0x37ecb5[_0x513741(0x1a5)] +
                  _0x513741(0x22e) +
                  _0x37ecb5[_0x513741(0x2a7)] +
                  "\x22]",
              )
                [_0x513741(0x2ae)](_0x513741(0x1bb))
                [_0x513741(0x1b6)](_0x513741(0x262)),
              $(
                _0x513741(0x27d) +
                  _0x37ecb5[_0x513741(0x1a5)] +
                  "\x22][value=\x22" +
                  _0x37ecb5[_0x513741(0x2a7)] +
                  "\x22]",
              )[_0x513741(0x232)]("input");
          else
            _0x37ecb5[_0x513741(0x2a7)] === "on"
              ? ($("input[name=\x22" + _0x37ecb5[_0x513741(0x1a5)] + "\x22]")[
                  _0x513741(0x255)
                ](),
                $("input[name=\x22" + _0x37ecb5[_0x513741(0x1a5)] + "\x22]")
                  [_0x513741(0x2ae)](_0x513741(0x29b))
                  [_0x513741(0x1b6)](_0x513741(0x262)),
                $("input[name=\x22" + _0x37ecb5[_0x513741(0x1a5)] + "\x22]")[
                  _0x513741(0x232)
                ](_0x513741(0x1ad)))
              : ($("input[name=\x22" + _0x37ecb5[_0x513741(0x1a5)] + "\x22]")[
                  "val"
                ](_0x37ecb5[_0x513741(0x2a7)]),
                $(_0x513741(0x246) + _0x37ecb5["key"] + "\x22]")[
                  _0x513741(0x2a7)
                ](_0x37ecb5[_0x513741(0x2a7)]),
                $(_0x513741(0x28d) + _0x37ecb5[_0x513741(0x1a5)] + "\x22]")
                  [_0x513741(0x208)](
                    "option[value=\x22" + _0x37ecb5[_0x513741(0x2a7)] + "\x22]",
                  )
                  ["prop"](_0x513741(0x1a7), !![]),
                $("input[name=\x22" + _0x37ecb5["key"] + "\x22]")[
                  _0x513741(0x232)
                ](_0x513741(0x1ad)),
                $(_0x513741(0x27d) + _0x37ecb5[_0x513741(0x1a5)] + "\x22]")[
                  _0x513741(0x232)
                ](_0x513741(0x216)));
        }
      }));
}
$("[data-form=\x22next-btn\x22]")["on"]("click", function () {
  (next = !![]), nextStep(), selectionQuiz();
}),
  $(_0x5084ba(0x1f9))["on"](_0x5084ba(0x255), function () {
    (next = ![]), (back = !![]), backStep();
  }),
  $(steps)
    [_0x5084ba(0x208)](_0x5084ba(0x204))
    ["not"](_0x5084ba(0x1e0))
    ["on"](_0x5084ba(0x1ad), function (_0x5617a9) {
      validation(), andLogic();
    }),
  $(steps)
    [_0x5084ba(0x208)](_0x5084ba(0x298))
    ["on"](_0x5084ba(0x255), function () {
      (skip = !![]), validation();
    });
$(_0x5084ba(0x23a))["data"](_0x5084ba(0x1ca))
  ? $(_0x5084ba(0x23b))[_0x5084ba(0x260)](_0x5084ba(0x1b5))
  : $("[data-form=\x22custom-progress-indicator\x22]")[_0x5084ba(0x1b6)](
      "disabled",
    );
function clickableIndicator() {
  const _0x1b5ddc = _0x5084ba;
  $(_0x1b5ddc(0x21c))["data"](_0x1b5ddc(0x1c5)) &&
    ($(_0x1b5ddc(0x24b))[_0x1b5ddc(0x260)](_0x1b5ddc(0x1f8)),
    $(_0x1b5ddc(0x21c))[_0x1b5ddc(0x222)]("clickable-all")
      ? ((x = $(this)["index"]()), updateStep())
      : $(this)[_0x1b5ddc(0x2ad)]() <= progress &&
        ((x = $(this)[_0x1b5ddc(0x2ad)]()), updateStep())),
    $(_0x1b5ddc(0x224))[_0x1b5ddc(0x2ba)](x + 0x1);
}
$(_0x5084ba(0x23b))["on"]("click", clickableIndicator);
$(_0x5084ba(0x22f))[_0x5084ba(0x222)](_0x5084ba(0x1fe)) &&
  ($(_0x5084ba(0x21e))["each"](function () {
    const _0x3b3d70 = _0x5084ba;
    $(this)["append"](
      _0x3b3d70(0x1d0),
      $(this)[_0x3b3d70(0x222)](_0x3b3d70(0x1fb)),
    );
  }),
  $(_0x5084ba(0x19f))[_0x5084ba(0x264)](function () {
    const _0x4ed360 = _0x5084ba;
    $(this)[_0x4ed360(0x210)](
      _0x4ed360(0x1d5),
      $(this)[_0x4ed360(0x222)]("answer"),
    );
  }));
function resetFormly() {
  const _0x7bd9fd = _0x5084ba;
  $("[data-form=\x22multistep\x22]")[_0x7bd9fd(0x232)](_0x7bd9fd(0x263)),
    $(_0x7bd9fd(0x22f))
      [_0x7bd9fd(0x28c)]()
      [_0x7bd9fd(0x208)](_0x7bd9fd(0x1c8))
      [_0x7bd9fd(0x259)](),
    (x = 0x0),
    updateStep(),
    $("[data-form=\x22multistep\x22]")["show"](),
    $(_0x7bd9fd(0x1d2))[_0x7bd9fd(0x2ba)](oldSubmitText),
    $("[data-form=\x22submit-btn\x22]")[_0x7bd9fd(0x2a7)](oldSubmitText),
    $(_0x7bd9fd(0x224))[_0x7bd9fd(0x2ba)](0x1),
    $(_0x7bd9fd(0x22f))
      [_0x7bd9fd(0x208)]("input:checkbox")
      [_0x7bd9fd(0x2ae)](_0x7bd9fd(0x29b))
      [_0x7bd9fd(0x260)](_0x7bd9fd(0x262));
}
$(document)["ajaxComplete"](function (_0x4f3aee, _0x2e7969, _0x5281c7) {
  const _0x104428 = _0x5084ba;
  if (_0x5281c7[_0x104428(0x219)]["includes"](_0x104428(0x21d))) {
    const _0x19573a = _0x2e7969[_0x104428(0x1dd)] === 0xc8,
      _0x5a47ac = _0x104428(0x1ae);
    redirectTo &&
      _0x19573a &&
      (newTab
        ? window[_0x104428(0x213)](redirectTo, _0x104428(0x23d))
        : setTimeout(() => {
            location["href"] = redirectTo;
          }, redirectDelay)),
      _0x19573a &&
        successCard !== "" &&
        $(_0x104428(0x240) + successCard + "\x22]")[_0x104428(0x23e)](),
      _0x19573a &&
        formReset &&
        setTimeout(() => {
          resetFormly();
        }, resetDelay),
      !_0x19573a &&
        ($(_0x104428(0x1d2))[_0x104428(0x2a7)](_0x104428(0x2b5)),
        $(_0x104428(0x1d2))["text"]("Please\x20wait..."));
  }
}),
  $(_0x5084ba(0x1de))["on"]("click", function () {
    const _0x15b10d = _0x5084ba;
    var _0x1f06b3 = $(this)
      ["parent"]()
      [_0x15b10d(0x208)](_0x15b10d(0x200))
      [_0x15b10d(0x222)]("input-field");
    setTimeout(function () {
      const _0x245ae8 = _0x15b10d;
      $(_0x245ae8(0x27d) + _0x1f06b3 + "\x22]")["focus"]();
    }, 0x64),
      (back = !![]),
      (x = $(this)[_0x15b10d(0x222)](_0x15b10d(0x233)) - 0x1),
      updateStep(),
      countCard
        ? ((curStep = x + 0x1),
          $(_0x15b10d(0x27c))[_0x15b10d(0x2ba)](steps[_0x15b10d(0x288)]))
        : $(steps[x])[_0x15b10d(0x222)](_0x15b10d(0x2a1))
          ? (curStep = x + 0x0)
          : (curStep = x + 0x1),
      $(_0x15b10d(0x224))[_0x15b10d(0x2ba)](curStep),
      (back = ![]);
  }),
  $(_0x5084ba(0x229))["on"](_0x5084ba(0x255), function () {
    const _0x4975a1 = _0x5084ba;
    $(_0x4975a1(0x22f))["trigger"](_0x4975a1(0x263));
    let _0x3d227e = $(this);
    $(this)[_0x4975a1(0x2ba)](_0x4975a1(0x2b5)),
      setTimeout(function () {
        const _0x9cb75 = _0x4975a1;
        $(_0x3d227e)[_0x9cb75(0x2ba)](oldResetText),
          $(_0x3d227e)["parents"](_0x9cb75(0x1c8))[_0x9cb75(0x259)](),
          (x = 0x0),
          updateStep(),
          $("[data-form=\x22multistep\x22]")[_0x9cb75(0x1c2)](),
          $(_0x9cb75(0x1d2))["text"](oldSubmitText),
          $(_0x9cb75(0x1d2))[_0x9cb75(0x2a7)](oldSubmitText),
          $(_0x3d227e)[_0x9cb75(0x2a7)](oldSubmitText),
          $(_0x9cb75(0x224))[_0x9cb75(0x2ba)](0x1),
          $("[data-form=\x22multistep\x22]")
            [_0x9cb75(0x208)](_0x9cb75(0x1ed))
            ["siblings"](_0x9cb75(0x29b))
            [_0x9cb75(0x260)]("w--redirected-checked");
      }, resetDelay);
  }),
  $(_0x5084ba(0x1d7))["on"]("keypress", function (_0x4171e7) {
    const _0x404eca = _0x5084ba;
    _0x4171e7[_0x404eca(0x20f)] === 0xd &&
      ($(_0x404eca(0x268))[_0x404eca(0x222)](_0x404eca(0x1b3)) && fill
        ? (totalSteps > curStep && $(_0x404eca(0x291))[0x0][_0x404eca(0x255)](),
          _0x4171e7[_0x404eca(0x230)](),
          _0x4171e7[_0x404eca(0x1e6)]())
        : (_0x4171e7[_0x404eca(0x230)](), _0x4171e7[_0x404eca(0x1e6)]()));
  }),
  $("body")[_0x5084ba(0x285)](function (_0x336cee) {
    const _0x24fb6b = _0x5084ba;
    (_0x336cee["metaKey"] || _0x336cee[_0x24fb6b(0x20b)]) &&
      _0x336cee[_0x24fb6b(0x20f)] == 0xd &&
      (x >= steps[_0x24fb6b(0x288)] - 0x1 && fill
        ? $(steps[x])["find"](_0x24fb6b(0x28f))["click"]()
        : (event["preventDefault"](), event[_0x24fb6b(0x1e6)]()));
  }),
  $(_0x5084ba(0x248))[_0x5084ba(0x218)](function (_0x5fcbbd) {
    const _0x471546 = _0x5084ba;
    $(this)[_0x471546(0x294)](),
      _0x5fcbbd[_0x471546(0x1a5)] == _0x471546(0x225) &&
        (_0x5fcbbd["preventDefault"](), _0x5fcbbd["stopPropagation"]()),
      _0x5fcbbd["shiftKey"] &&
        _0x5fcbbd[_0x471546(0x1a5)] == _0x471546(0x225) &&
        $(this)["val"]($(this)[_0x471546(0x2a7)]() + "\x0a");
  }),
  $("[data-form=\x22multistep\x22]")
    ["find"](":input")
    ["on"]("change", function () {
      const _0x2cd438 = _0x5084ba;
      (all_data = all_data[_0x2cd438(0x2a5)](
        (_0x12a6d1) => _0x12a6d1["field"] !== $(this)[_0x2cd438(0x1b0)]("name"),
      )),
        $(this)[_0x2cd438(0x1b0)](_0x2cd438(0x1af)) === _0x2cd438(0x27e)
          ? $(this)["is"](_0x2cd438(0x23c))
            ? all_data[_0x2cd438(0x251)]({
                field: $(this)[_0x2cd438(0x1b0)]("name"),
                value: $(this)[_0x2cd438(0x2ae)](_0x2cd438(0x1e5))["text"](),
              })
            : $(_0x2cd438(0x297) + $(this)["attr"](_0x2cd438(0x214)) + "\x22]")[
                _0x2cd438(0x259)
              ]()
          : (all_data["push"]({
              field: $(this)[_0x2cd438(0x1b0)](_0x2cd438(0x214)),
              value: $(this)[_0x2cd438(0x2a7)](),
            }),
            $(this)["val"]() !== "" &&
              resetInputErrorMessage(
                $(this)[_0x2cd438(0x1b0)](_0x2cd438(0x214)),
              )),
        all_data["forEach"](function (_0x1afade) {
          const _0xf95672 = _0x2cd438;
          $(_0xf95672(0x297) + _0x1afade["field"] + "\x22]")[
            _0xf95672(0x1c2)
          ](),
            $("[data-input-field=\x22" + _0x1afade[_0xf95672(0x1dc)] + "\x22]")[
              _0xf95672(0x2ba)
            ](_0x1afade[_0xf95672(0x1c3)]);
        });
    }),
  $(_0x5084ba(0x22f))
    [_0x5084ba(0x208)](_0x5084ba(0x248))
    ["on"]("change", function () {
      const _0x3b0305 = _0x5084ba;
      $(this)["val"]() !== "" &&
        resetInputErrorMessage($(this)["attr"](_0x3b0305(0x214))),
        (all_data = all_data[_0x3b0305(0x2a5)](
          (_0x1ebd79) =>
            _0x1ebd79[_0x3b0305(0x1dc)] !==
            $(this)[_0x3b0305(0x1b0)](_0x3b0305(0x214)),
        )),
        all_data[_0x3b0305(0x251)]({
          field: $(this)[_0x3b0305(0x1b0)]("name"),
          value: $(this)[_0x3b0305(0x2a7)](),
        }),
        all_data[_0x3b0305(0x293)](function (_0x22143b) {
          const _0x148993 = _0x3b0305;
          $(_0x148993(0x297) + _0x22143b[_0x148993(0x1dc)] + "\x22]")[
            _0x148993(0x1c2)
          ](),
            $(_0x148993(0x297) + _0x22143b["field"] + "\x22]")[
              _0x148993(0x2ba)
            ](_0x22143b[_0x148993(0x1c3)]);
        });
    }),
  $(_0x5084ba(0x22f))
    [_0x5084ba(0x208)]("select")
    ["on"](_0x5084ba(0x216), function () {
      const _0xe7f212 = _0x5084ba;
      $(this)[_0xe7f212(0x2a7)]() !== "" &&
        resetInputErrorMessage($(this)["attr"](_0xe7f212(0x214)));
      var _0x576c1c = $(this)[_0xe7f212(0x222)](_0xe7f212(0x1f0));
      (all_data = all_data[_0xe7f212(0x2a5)](
        (_0x188c8d) =>
          _0x188c8d[_0xe7f212(0x1dc)] !== $(this)[_0xe7f212(0x1b0)]("name"),
      )),
        all_data[_0xe7f212(0x251)]({
          field: $(this)["attr"](_0xe7f212(0x214)),
          value: _0x576c1c
            ? $(this)[_0xe7f212(0x208)](_0xe7f212(0x261))["text"]()
            : $(this)[_0xe7f212(0x2a7)](),
        }),
        all_data[_0xe7f212(0x293)](function (_0x337c22) {
          const _0x1e9484 = _0xe7f212;
          $("[data-input-field=\x22" + _0x337c22[_0x1e9484(0x1dc)] + "\x22]")[
            _0x1e9484(0x1c2)
          ](),
            $(_0x1e9484(0x297) + _0x337c22[_0x1e9484(0x1dc)] + "\x22]")[
              _0x1e9484(0x2ba)
            ](_0x337c22[_0x1e9484(0x1c3)]);
        });
    }),
  updateStep(),
  triggerInputAllData(),
  $("[data-cms-select=cms]")[_0x5084ba(0x264)](function () {
    const _0x45f822 = _0x5084ba,
      _0x34478f = $(this)[_0x45f822(0x208)](_0x45f822(0x278)),
      _0x2f1c57 = [];
    console[_0x45f822(0x25e)](_0x2f1c57),
      _0x34478f[_0x45f822(0x264)](function () {
        const _0x1f83eb = _0x45f822;
        _0x2f1c57[_0x1f83eb(0x251)]($(this)[_0x1f83eb(0x2ba)]()["trim"]());
      });
    const _0x25756c = $(this)[_0x45f822(0x2ae)]("[data-cms-select=input]");
    $["each"](_0x2f1c57, function (_0x666cb0, _0x36add6) {
      const _0x10ef79 = _0x45f822,
        _0x9ab6f6 = $(_0x10ef79(0x1c9))
          ["val"](_0x36add6)
          [_0x10ef79(0x2ba)](_0x36add6);
      _0x25756c[_0x10ef79(0x210)](_0x9ab6f6);
    });
  });
function cloneRemove() {
  const _0x4ce7f8 = _0x5084ba;
  $(_0x4ce7f8(0x237))[_0x4ce7f8(0x264)](function () {
    const _0x5e1bb3 = _0x4ce7f8;
    $(this)[_0x5e1bb3(0x208)](_0x5e1bb3(0x2b9))[_0x5e1bb3(0x288)] < 0x2
      ? $(this)
          [_0x5e1bb3(0x208)]("[data-form=\x22remove-clone\x22]")
          [_0x5e1bb3(0x259)]()
      : $(this)[_0x5e1bb3(0x208)](_0x5e1bb3(0x1be))["show"]();
  });
}
function cloneRemoveInput() {
  const _0x225ee1 = _0x5084ba;
  $(_0x225ee1(0x26f))[_0x225ee1(0x264)](function () {
    const _0x222df0 = _0x225ee1;
    $(this)["find"](_0x222df0(0x26a))[_0x222df0(0x288)] < 0x2
      ? $(this)[_0x222df0(0x208)](_0x222df0(0x201))[_0x222df0(0x259)]()
      : $(this)
          [_0x222df0(0x208)]("[data-form=\x22remove-input-clone\x22]")
          [_0x222df0(0x1c2)]();
  });
}
$(_0x5084ba(0x1be))["on"](_0x5084ba(0x255), function () {
  const _0x21db69 = _0x5084ba,
    _0x334d02 =
      $(this)[_0x21db69(0x28c)](_0x21db69(0x2b9))[_0x21db69(0x288)] > 0x0
        ? $(this)[_0x21db69(0x28c)](_0x21db69(0x2b9))[_0x21db69(0x2ad)]()
        : $(this)["parents"]("[data-display]")[_0x21db69(0x2ad)](),
    _0x5b7a64 =
      $(this)[_0x21db69(0x28c)]("[data-clone]")["length"] > 0x0
        ? $(this)[_0x21db69(0x28c)](_0x21db69(0x2b9))["data"](_0x21db69(0x281))
        : $(this)
            [_0x21db69(0x28c)](_0x21db69(0x25f))
            [_0x21db69(0x222)](_0x21db69(0x207));
  $("[data-clone=\x22" + _0x5b7a64 + "\x22]")
    ["eq"](_0x334d02)
    [_0x21db69(0x1a3)](),
    $(_0x21db69(0x2b4) + _0x5b7a64 + "\x22]")
      ["eq"](_0x334d02)
      [_0x21db69(0x1a3)](),
    cloneRemove(),
    validation();
}),
  $(_0x5084ba(0x201))["on"]("click", function () {
    const _0x307b4d = _0x5084ba;
    let _0x41620c = $(this)
      [_0x307b4d(0x2ae)]()
      [_0x307b4d(0x1b0)](_0x307b4d(0x214));
    $(this)[_0x307b4d(0x22c)]("[data-clone-input]")["remove"](),
      $("[data-input-field=\x22" + _0x41620c + "\x22]")
        [_0x307b4d(0x22c)]("[data-display-input]")
        [_0x307b4d(0x1a3)](),
      cloneRemove(),
      validation();
  }),
  $(_0x5084ba(0x205))["on"]("click", function () {
    const _0x45683b = _0x5084ba;
    let _0x572b5c = $(this)[_0x45683b(0x222)]("add-new");
    var _0x58985b = $("[data-clone=\x22" + _0x572b5c + "\x22]")
        ["eq"](0x0)
        ["clone"](!![]),
      _0x26114a = $(_0x45683b(0x2b4) + _0x572b5c + "\x22]")
        ["eq"](0x0)
        [_0x45683b(0x281)](!![]);
    let _0x191086 = "";
    $(this)[_0x45683b(0x208)](_0x45683b(0x1be))["show"](),
      cloneRemove(),
      _0x58985b["find"]("[data-clone-input]")
        ["find"](_0x45683b(0x1ad))
        [_0x45683b(0x2a7)](""),
      _0x58985b[_0x45683b(0x208)]("[data-clone-input]")
        [_0x45683b(0x1d1)](_0x45683b(0x226))
        ["remove"](),
      _0x26114a[_0x45683b(0x208)](_0x45683b(0x24a))
        [_0x45683b(0x1d1)](_0x45683b(0x226))
        [_0x45683b(0x1a3)](),
      _0x58985b["find"]("input")[_0x45683b(0x264)](function () {
        const _0x378937 = _0x45683b;
        if (
          $(this)[_0x378937(0x21f)](_0x378937(0x26a))[_0x378937(0x288)] > 0x0
        ) {
          let _0x4a124e = 0x0;
          const _0x1a0bcd = $(this)
            [_0x378937(0x21f)](_0x378937(0x26a))
            [_0x378937(0x222)](_0x378937(0x2b3));
          console[_0x378937(0x25e)](
            $(this)[_0x378937(0x21f)](_0x378937(0x26a))["data"]("clone-input"),
            this[_0x378937(0x214)],
          ),
            $(_0x378937(0x1e2) + _0x1a0bcd + _0x378937(0x1ea))[
              _0x378937(0x264)
            ](function () {
              const _0x8802e7 = _0x378937,
                _0xe13ac = $(this)[_0x8802e7(0x1b0)](_0x8802e7(0x214));
              if (_0xe13ac && _0xe13ac[_0x8802e7(0x2b2)]("relationship-")) {
                const _0x52b2a1 = parseInt(
                  _0xe13ac[_0x8802e7(0x1ac)]("-")[0x1],
                );
                !isNaN(_0x52b2a1) &&
                  _0x52b2a1 > _0x4a124e &&
                  (_0x4a124e = _0x52b2a1);
              }
            }),
            _0x4a124e++,
            (_0x191086 = this[_0x378937(0x214)] + "-" + _0x4a124e),
            console[_0x378937(0x25e)](_0x1a0bcd, _0x191086);
        } else
          _0x191086 =
            this[_0x378937(0x214)] +
            "-" +
            (parseInt(
              $(_0x378937(0x289) + _0x572b5c + "\x22]")
                [_0x378937(0x241)]()
                [_0x378937(0x2ad)](),
            ) +
              0x1);
        $(this)[_0x378937(0x2a7)](""),
          $(this)[_0x378937(0x1b0)](_0x378937(0x214), _0x191086),
          $(this)[_0x378937(0x1b0)](_0x378937(0x1d4), _0x191086);
      }),
      _0x26114a[_0x45683b(0x208)](_0x45683b(0x200))["each"](function () {
        const _0x77f325 = _0x45683b;
        if ($(this)["data"](_0x77f325(0x228))) {
          let _0xd239d6 = 0x0;
          const _0x4efab9 = $(this)
            [_0x77f325(0x222)](_0x77f325(0x228))
            [_0x77f325(0x1ac)]("-")[0x0];
          $(
            _0x77f325(0x2b4) +
              _0x572b5c +
              _0x77f325(0x1a8) +
              _0x4efab9 +
              "\x22]",
          )[_0x77f325(0x264)](function () {
            const _0x5b2c5a = _0x77f325,
              _0x4fad8c = $(this)["attr"](_0x5b2c5a(0x1f7)),
              _0x213388 = parseInt(_0x4fad8c["split"]("-")[0x1]);
            !isNaN(_0x213388) &&
              _0x213388 > _0xd239d6 &&
              (_0xd239d6 = _0x213388);
          }),
            _0xd239d6++;
          const _0x221aa9 = _0x4efab9 + "-" + _0xd239d6;
          console[_0x77f325(0x25e)](_0x221aa9),
            $(this)[_0x77f325(0x1b0)](_0x77f325(0x1f7), _0x221aa9);
        }
      }),
      $(_0x45683b(0x1f1) + _0x572b5c + "\x22]")["append"](_0x58985b),
      $("[data-display-wrapper=\x22" + _0x572b5c + "\x22]")["append"](
        _0x26114a,
      ),
      $(_0x45683b(0x2a6) + _0x572b5c + "\x22]")[_0x45683b(0x264)](function () {
        const _0x4d0c4c = _0x45683b;
        $(this)[_0x4d0c4c(0x2ba)](
          $(this)
            [_0x4d0c4c(0x28c)](_0x4d0c4c(0x289) + _0x572b5c + "\x22]")
            [_0x4d0c4c(0x2ad)]() + 0x1,
        );
      }),
      $("[data-display-index=\x22" + _0x572b5c + "\x22]")[_0x45683b(0x264)](
        function () {
          const _0x22a262 = _0x45683b;
          $(this)[_0x22a262(0x2ba)](
            $(this)
              [_0x22a262(0x28c)](_0x22a262(0x2b4) + _0x572b5c + "\x22]")
              [_0x22a262(0x2ad)]() + 0x1,
          );
        },
      ),
      validation();
  }),
  $(_0x5084ba(0x2b8))["on"](_0x5084ba(0x255), function () {
    const _0x3d2b01 = _0x5084ba,
      _0x58775e = $(this)["parents"](_0x3d2b01(0x2b9))[_0x3d2b01(0x2ad)]();
    let _0x5e067b = $(this)["data"](_0x3d2b01(0x221));
    var _0xd02b95 = $(_0x3d2b01(0x1e2) + _0x5e067b + "\x22]")
        ["eq"](0x0)
        ["clone"](!![]),
      _0xe75171 = $("[data-display-input=\x22" + _0x5e067b + "\x22]")
        ["eq"](0x0)
        [_0x3d2b01(0x281)](!![]);
    $(this)[_0x3d2b01(0x208)](_0x3d2b01(0x201))["show"](), cloneRemoveInput();
    let _0x1892f3 = 0x0;
    $(_0x3d2b01(0x1e2) + _0x5e067b + _0x3d2b01(0x1ea))[_0x3d2b01(0x264)](
      function () {
        const _0x370ce3 = _0x3d2b01,
          _0xe525fa = $(this)[_0x370ce3(0x1b0)](_0x370ce3(0x214));
        if (_0xe525fa && _0xe525fa["startsWith"]("relationship-")) {
          const _0x46fad7 = parseInt(_0xe525fa["split"]("-")[0x1]);
          !isNaN(_0x46fad7) && _0x46fad7 > _0x1892f3 && (_0x1892f3 = _0x46fad7);
        }
      },
    ),
      _0x1892f3++,
      _0xd02b95["find"]("input")[_0x3d2b01(0x264)](function () {
        const _0x314839 = _0x3d2b01;
        let _0x4e8983 = _0x314839(0x1ee) + _0x1892f3;
        $(this)[_0x314839(0x2a7)](""),
          $(this)[_0x314839(0x1b0)](_0x314839(0x214), _0x4e8983),
          $(this)[_0x314839(0x1b0)]("data-name", _0x4e8983);
      }),
      _0xe75171[_0x3d2b01(0x208)](_0x3d2b01(0x200))[_0x3d2b01(0x264)](
        function () {
          const _0x20f052 = _0x3d2b01;
          $(this)["attr"](_0x20f052(0x1f7), _0x20f052(0x1ee) + _0x1892f3);
        },
      ),
      $(this)
        [_0x3d2b01(0x2ae)](_0x3d2b01(0x26d) + _0x5e067b + "\x22]")
        [_0x3d2b01(0x210)](_0xd02b95),
      $(_0x3d2b01(0x25f))
        ["eq"](_0x58775e)
        [_0x3d2b01(0x208)](_0x3d2b01(0x1e8) + _0x5e067b + "\x22]")
        ["append"](_0xe75171),
      $(_0x3d2b01(0x299) + _0x5e067b + "\x22]")[_0x3d2b01(0x264)](function () {
        const _0x3d5855 = _0x3d2b01;
        $(this)[_0x3d5855(0x2ba)](
          $(this)
            [_0x3d5855(0x28c)](_0x3d5855(0x1e2) + _0x5e067b + "\x22]")
            [_0x3d5855(0x2ad)]() + 0x1,
        );
      }),
      $(_0x3d2b01(0x245) + _0x5e067b + "\x22]")[_0x3d2b01(0x264)](function () {
        const _0x53e430 = _0x3d2b01;
        $(this)["text"](
          $(this)
            ["parents"](_0x53e430(0x2ac) + _0x5e067b + "\x22]")
            ["index"]() + 0x1,
        );
      }),
      validation();
  }),
  $(_0x5084ba(0x1d3))["on"](_0x5084ba(0x255), function () {
    const _0x2b79a2 = _0x5084ba,
      _0x503d51 = $(this)[_0x2b79a2(0x222)](_0x2b79a2(0x2b1));
    $(_0x2b79a2(0x27d) + _0x503d51 + "\x22]")[_0x2b79a2(0x2a7)](""),
      validation();
  });
function andLogic() {
  const _0x11567e = _0x5084ba;
  conditionalResult &&
    (steps["eq"](x)["find"](_0x11567e(0x235))[_0x11567e(0x259)](),
    console["log"](_0x11567e(0x223)),
    steps["eq"](x)
      [_0x11567e(0x208)](_0x11567e(0x235))
      [_0x11567e(0x264)](function () {
        const _0x2a4bf7 = _0x11567e;
        function _0x138c06(_0x53329d) {
          const _0x37ab9f = _0x53329d["split"]("&"),
            _0x41ec8f = [];
          return (
            _0x37ab9f["forEach"]((_0x9a95ce) => {
              const _0x42993f = _0x4ecf,
                [_0x507268, _0x25c563] = _0x9a95ce[_0x42993f(0x1ac)]("=");
              _0x41ec8f[_0x42993f(0x251)]({
                field: _0x507268,
                value: _0x25c563,
              });
            }),
            _0x41ec8f
          );
        }
        const _0x2b0607 = $(this)[_0x2a4bf7(0x1b0)]("data-show-if");
        console[_0x2a4bf7(0x25e)](_0x2b0607);
        const _0x1ee77a = _0x138c06(_0x2b0607);
        function _0x3e2cf4(_0x42e68b, _0x29eddd) {
          return _0x29eddd["some"]((_0x353e71, _0x29cad8) => {
            const _0x20fc32 = _0x4ecf;
            if (
              _0x42e68b[0x0] &&
              _0x353e71[_0x20fc32(0x1dc)] === _0x42e68b[0x0][_0x20fc32(0x1dc)]
            )
              return _0x42e68b[_0x20fc32(0x256)](
                (_0x3e6f2d, _0x1bc9b5) =>
                  _0x29eddd[_0x29cad8 + _0x1bc9b5] &&
                  _0x29eddd[_0x29cad8 + _0x1bc9b5]["field"] ===
                    _0x3e6f2d[_0x20fc32(0x1dc)] &&
                  _0x29eddd[_0x29cad8 + _0x1bc9b5][_0x20fc32(0x1c3)] ===
                    _0x3e6f2d[_0x20fc32(0x1c3)],
              );
            return ![];
          });
        }
        const _0x537d51 = _0x3e2cf4(_0x1ee77a, all_data);
        _0x537d51 ? $(this)["show"]() : $(this)[_0x2a4bf7(0x259)]();
      }));
}
scrollTop(), cloneRemove(), cloneRemoveInput();
