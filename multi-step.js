//12th Dec 2023
//Bug fix
//1. Phone autoformat issue

const _0x316744 = _0x1742;
(function (_0x5afbe0, _0x23ba7d) {
  const _0x528b4d = _0x1742,
    _0x21fb9a = _0x5afbe0();
  while (!![]) {
    try {
      const _0x546673 =
        -parseInt(_0x528b4d(0x20b)) / 0x1 +
        parseInt(_0x528b4d(0x1c8)) / 0x2 +
        parseInt(_0x528b4d(0x125)) / 0x3 +
        (parseInt(_0x528b4d(0x12e)) / 0x4) *
          (-parseInt(_0x528b4d(0x1af)) / 0x5) +
        parseInt(_0x528b4d(0x219)) / 0x6 +
        -parseInt(_0x528b4d(0x199)) / 0x7 +
        (parseInt(_0x528b4d(0x15e)) / 0x8) * (parseInt(_0x528b4d(0x129)) / 0x9);
      if (_0x546673 === _0x23ba7d) break;
      else _0x21fb9a["push"](_0x21fb9a["shift"]());
    } catch (_0x23b504) {
      _0x21fb9a["push"](_0x21fb9a["shift"]());
    }
  }
})(_0x107d, 0x30427);
let x = 0x0,
  curStep = 0x0,
  steps = $(_0x316744(0x1b9)),
  progressbarClone = $(_0x316744(0x20e))[_0x316744(0x205)](),
  progressbar,
  countCard = !![],
  weightedSelection = $("[data-weighted-selection]")[_0x316744(0x163)](
    "weighted-selection",
  ),
  weightedSelectionRange = $(_0x316744(0x1ce))[_0x316744(0x163)](
    _0x316744(0x1a3),
  ),
  selectMultiple = $(_0x316744(0x13b))[_0x316744(0x163)](_0x316744(0x166)),
  customError = $("[data-custom-error-message]")[_0x316744(0x163)](
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
  reinitIX = $(_0x316744(0x160))[_0x316744(0x163)](_0x316744(0x1bb)),
  textareaLength = 0x0,
  textInputLength = 0x0,
  emailInputLength = 0x0,
  selectInputLength = 0x0,
  checkboxInputLength = 0x0,
  filledInput = [],
  savedFilledInput = [],
  memory = $(_0x316744(0x1fb))[_0x316744(0x163)](_0x316744(0x188)),
  quiz = $(_0x316744(0x178))["data"](_0x316744(0x215)),
  progress = 0x0;
const urlFormly = new URL(window[_0x316744(0x1ee)][_0x316744(0x103)]);
let _params = $(_0x316744(0x141))["data"](_0x316744(0x1a5)),
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
  logicExtra = $("[data-form=\x22multistep\x22]")[_0x316744(0x163)](
    "logic-extra",
  ),
  oldSubmitText = $("[data-form=\x22submit-btn\x22]")["val"](),
  oldResetText = $("[data-btn=\x22reset\x22]")["text"](),
  formReset = $("[data-form=\x22multistep\x22]")[_0x316744(0x163)](
    _0x316744(0xfc),
  ),
  successCard = "",
  redirectTo = "",
  totalSteps = 0x0,
  checkCount = 0x0,
  resetDelay = $("[data-reset-delay]")[_0x316744(0x163)](_0x316744(0x1f4))
    ? $(_0x316744(0x16c))[_0x316744(0x163)](_0x316744(0x1f4))
    : 0x7d0,
  redirectDelay = $(_0x316744(0x177))["data"]("redirect-delay")
    ? $(_0x316744(0x177))[_0x316744(0x163)](_0x316744(0x201))
    : 0x7d0,
  newTab = !![],
  unfilledArr = [],
  phoneFormat = $(_0x316744(0x164))[_0x316744(0x163)](_0x316744(0x206)),
  scrollToTop = $(_0x316744(0x164))[_0x316744(0x163)](_0x316744(0x196)),
  conditionalResult =
    $(_0x316744(0x203))["data"](_0x316744(0x181)) === _0x316744(0x19b),
  scrollTopOffset = parseInt(
    $("[data-form=\x22multistep\x22]")[_0x316744(0x163)]("scroll-top-offset"),
  ),
  notRobot = !![],
  all_data = [];
const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
savedFilledInput = JSON[_0x316744(0x16a)](
  localStorage[_0x316744(0x1d2)]("filledInput"),
);
var ogCloneArr = [];
$("[data-clone]")[_0x316744(0x1e9)](function () {
  const _0x32697c = _0x316744;
  ogCloneArr["push"]({
    name: $(this)[_0x32697c(0x163)](_0x32697c(0x205)),
    element: $(this)[_0x32697c(0x205)](!![]),
    display: $(_0x32697c(0x1e4) + $(this)[_0x32697c(0x163)]("clone") + "\x22]")
      ["eq"](0x0)
      [_0x32697c(0x205)](!![]),
  });
});
$(_0x316744(0x1a8))[_0x316744(0x171)] > 0x0 && (notRobot = ![]);
function recaptcha(_0x378877) {
  notRobot = !![];
}
$(_0x316744(0x14a))["length"] > 0x0 &&
  (countCard = $(_0x316744(0x14a))["data"](_0x316744(0x100)));
$("[data-text=\x22error-message\x22]")[_0x316744(0x186)](),
  $(progressbarClone)["removeClass"]("current"),
  $("[data-form=\x22progress\x22]")[_0x316744(0x17f)]()["remove"](),
  $("[data-form=\x22submit-btn\x22]")[_0x316744(0x186)](),
  $("[data-form-ms=\x22submit-btn\x22]")[_0x316744(0x186)](),
  steps[_0x316744(0x1e9)](function () {
    const _0x5e5a63 = _0x316744;
    $(_0x5e5a63(0x1dd))[_0x5e5a63(0x1a7)](
      progressbarClone["clone"](!![], !![]),
    );
  }),
  $(_0x316744(0x112))["hide"]();
countCard
  ? ((curStep = curStep + 0x1),
    (totalSteps = steps[_0x316744(0x171)]),
    $(_0x316744(0x21e))[_0x316744(0x1fd)](totalSteps))
  : ($(steps[x])[_0x316744(0x163)](_0x316744(0x1f8))
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    (totalSteps = $(_0x316744(0x142))[_0x316744(0x171)]),
    $(_0x316744(0x21e))["text"](totalSteps),
    $(_0x316744(0x1ad))[_0x316744(0x1e9)](function () {
      const _0x15b700 = _0x316744;
      $($(_0x15b700(0x20e))[$(this)[_0x15b700(0x18e)]()])[_0x15b700(0x186)]();
    }));
(progressbar = $(_0x316744(0x1dd))["children"]()),
  $(_0x316744(0x20e))["on"](_0x316744(0x202), clickableIndicator),
  $(_0x316744(0x218))[_0x316744(0x1fd)](curStep),
  steps[_0x316744(0x186)](),
  $(_0x316744(0xff))[_0x316744(0x186)](),
  $(_0x316744(0x1ff))[_0x316744(0x1e9)](function () {
    const _0x36de13 = _0x316744;
    $(this)[_0x36de13(0x10a)](_0x36de13(0x155), _0x36de13(0xfd));
  });
function getParams() {
  const _0x3208b3 = _0x316744;
  urlFormly[_0x3208b3(0x144)]["forEach"](function (_0x305c14, _0x5ce686) {
    const _0x49abc6 = _0x3208b3;
    searchQ[_0x49abc6(0x121)]({ val: _0x305c14, key: _0x5ce686 });
  });
}
function getSafe(_0x496614, _0xe990ac) {
  try {
    return _0x496614();
  } catch (_0x3670f6) {
    return _0xe990ac;
  }
}
function phoneAutoFormat(_0x57ac16) {
  var _0x52bfae = "";
  return function (_0x3f3512) {
    const _0x5142f7 = _0x1742;
    var _0x4fbf6a = "",
      _0x29cb32 = _0x3f3512["replace"](/\D/g, ""),
      _0x320ab1 = 0x0,
      _0x231697 = 0x0;
    while (
      _0x320ab1 < _0x29cb32[_0x5142f7(0x171)] &&
      _0x231697 < _0x57ac16["length"]
    ) {
      _0x57ac16[_0x231697] === "x"
        ? ((_0x4fbf6a += _0x29cb32[_0x320ab1]), _0x320ab1++)
        : (_0x4fbf6a += _0x57ac16[_0x231697]),
        _0x231697++;
    }
    if (_0x3f3512[_0x5142f7(0x171)] < _0x52bfae[_0x5142f7(0x171)]) {
      var _0x315e67 = _0x57ac16["slice"](_0x231697);
      _0x4fbf6a += _0x315e67[_0x5142f7(0x194)](/x/g, "");
    }
    return (_0x52bfae = _0x4fbf6a), _0x4fbf6a;
  };
}
function validateURL(_0x4a73e2) {
  return urlPattern["test"](_0x4a73e2) ? !![] : ![];
}
quiz &&
  steps[_0x316744(0x1e9)](function () {
    const _0x5ba7bc = _0x316744;
    $(this)["children"]()[_0x5ba7bc(0x10a)](_0x5ba7bc(0x1ba), !![]),
      $(this)[_0x5ba7bc(0x17f)]()[_0x5ba7bc(0x10a)](_0x5ba7bc(0x20f), 0xfa);
  });
function disableBtn(_0x49c7d0) {
  const _0x24668d = _0x316744;
  (fill = ![]),
    !customError &&
      ($(_0x24668d(0x11b))[_0x24668d(0x1dc)]({
        opacity: _0x24668d(0x1e6),
        "pointer-events": _0x24668d(0x111),
      }),
      $(_0x24668d(0x11b))["addClass"](_0x24668d(0x211)),
      $(_0x24668d(0x133))[_0x24668d(0x1dc)]({
        opacity: _0x24668d(0x1e6),
        "pointer-events": _0x24668d(0x111),
      }),
      $(_0x24668d(0x133))[_0x24668d(0x185)](_0x24668d(0x211)),
      $(_0x24668d(0x101))[_0x24668d(0x1dc)]({
        opacity: _0x24668d(0x1e6),
        "pointer-events": _0x24668d(0x111),
      }),
      $(_0x24668d(0x101))[_0x24668d(0x185)](_0x24668d(0x211)));
}
function enableBtn() {
  const _0x3e748d = _0x316744;
  (fill = !![]),
    $("[data-form=\x22next-btn\x22]")[_0x3e748d(0x1dc)]({
      "pointer-events": _0x3e748d(0x1a9),
      opacity: "1",
    }),
    $("[data-form=\x22next-btn\x22]")[_0x3e748d(0x20a)](_0x3e748d(0x211)),
    $("[data-form=\x22submit-btn\x22]")["css"]({
      "pointer-events": "auto",
      opacity: "1",
    }),
    $(_0x3e748d(0x133))[_0x3e748d(0x20a)]("disabled"),
    $("[data-form-ms=\x22submit-btn\x22]")["css"]({
      "pointer-events": _0x3e748d(0x1a9),
      opacity: "1",
    }),
    $("[data-form-ms=\x22submit-btn\x22]")[_0x3e748d(0x20a)](_0x3e748d(0x211));
}
function _0x107d() {
  const _0x2f7fdb = [
    "[type=\x22radio\x22]",
    "current",
    "[data-form=\x22remove-clone\x22]",
    "[type=\x22checkbox\x22]",
    "require",
    "[data-enter]",
    "focus",
    "weighted-selection-range",
    "go-to",
    "query-param",
    "\x22]\x20[data-input-field^=\x22",
    "append",
    "div.g-recaptcha",
    "auto",
    ".active-answer-card",
    "setItem",
    "[data-btn=\x22check\x22]",
    "[data-form=\x22step\x22][data-card]",
    ":input[type=\x22tel\x22][required]",
    "185wYupTN",
    "success",
    "[data-form=\x22submit-btn\x22]:visible",
    "metaKey",
    "keydown",
    "status",
    "radio-delay",
    ":input[type=\x22checkbox\x22][required]:checked",
    "[data-add-new-input]",
    ":input[type=\x22url\x22][required]",
    "[data-form=\x22step\x22]",
    "data-radio-skip",
    "reinit",
    "wait",
    "radio",
    "select[required]:visible",
    "redirect",
    "[data-selection]",
    "selected",
    ".w-form-formradioinput",
    "parent",
    "field",
    "[data-form=\x22custom-progress-indicator\x22]",
    "[data-skip-to]",
    "\x22]:checked",
    "322294eBkQap",
    "ajaxComplete",
    "filledInput",
    "edit-step",
    "remove",
    "getResponse",
    "[data-weighted-selection-range]",
    "input-field",
    "display",
    ":input[required]",
    "getItem",
    "[data-answer=\x22",
    ":input[type=\x22email\x22][required]",
    "input[type=\x22checkbox\x22]:visible",
    "filter",
    ":input[type=\x22checkbox\x22]:checked",
    "relationship-",
    ":input[type=\x22file\x22][required]",
    "selection",
    "split",
    "css",
    "[data-form=\x22progress\x22]",
    "stringify",
    "[data-cms-select=text]",
    "radio-skip",
    "file",
    "startsWith",
    ":input[type=\x22tel\x22]",
    "[data-display=\x22",
    ".w-form-done",
    "0.4",
    "[data-form=\x22back-btn\x22]",
    ":input[type=\x22password\x22][required]",
    "each",
    "[data-show-if]",
    "textarea[required]",
    "removeItem",
    "input[autofocus]",
    "location",
    "textarea[required]:visible",
    "[data-selected]:checked",
    ":input[type=\x22date\x22][required]",
    ":input[type=\x22date\x22]",
    "phone-autoformat",
    "reset-delay",
    "trigger",
    "name",
    "data-name",
    "card",
    "active-answer-card",
    "[data-answer]",
    "[data-memory]",
    "answer",
    "text",
    "data-go-to",
    "[data-form=\x22next-btn\x22][type=\x22submit\x22]",
    ":input[type=\x22email\x22]",
    "redirect-delay",
    "click",
    "[data-conditional-result]",
    "change",
    "clone",
    "phone-validation",
    "submit",
    "[data-selection-weight]",
    "[data-checkbox]",
    "removeClass",
    "163524AskfTc",
    "[type=\x22submit\x22]",
    "w--redirected-checked",
    "[data-form=\x22progress-indicator\x22]",
    "data-radio-delay",
    "<br>Data\x20Answer\x20=\x20",
    "disabled",
    "ix2",
    "[data-add-new]",
    "backTo",
    "quiz",
    "[data-clone-input-wrapper=\x22",
    "every",
    "[data-text=\x22current-step\x22]",
    "410838qRUpEw",
    "[data-text=\x22error-message\x22]",
    "option[value=\x22",
    "[data-remove-upload]",
    "[data-display]",
    "[data-text=\x22total-steps\x22]",
    "trim",
    "textarea",
    "[data-display-index=\x22",
    "reset",
    "button",
    "[data-clone-input]",
    "[data-success-card]",
    "count-card",
    "[data-form-ms=\x22submit-btn\x22]",
    "redirect-form-hehexd",
    "href",
    ":input[type=\x22url\x22]",
    "block-domain",
    "parents",
    "input[type=\x22email\x22]:visible",
    "siblings",
    "textarea[autofocus]",
    "attr",
    "input",
    "select",
    "input[type=\x22radio\x22]:checked",
    "top",
    "closest",
    "clickable-all",
    "none",
    "[data-input-field]",
    "input[type=\x22text\x22][required]:visible",
    "checked",
    "[data-radio-skip]",
    "[data-success-card=\x22",
    "[data-form=\x22submit\x22]:visible",
    "[data-answer][data-radio-skip]:visible",
    ":input[type=\x22checkbox\x22][required]",
    "[data-form=\x22remove-input-clone\x22]",
    "[data-form=\x22next-btn\x22]",
    ":input",
    "[data-display-input]",
    "some",
    "test",
    "input:checkbox",
    "push",
    "inputName",
    "span",
    "readystatechange",
    "852579nfvRvV",
    "open",
    "findIndex",
    "[data-cms-select=input]",
    "9VxDvCG",
    "novalidate",
    "running",
    ":checked",
    "stopPropagation",
    "16972rexrxH",
    "input:radio[name=\x22",
    "clone-input",
    ":input[type=\x22password\x22]",
    "enter",
    "[data-form=\x22submit-btn\x22]",
    ":input[type=\x22text\x22][required]",
    "form[data-form=\x22multistep\x22]\x20:input",
    "[data-display-input=\x22",
    "data-input-field",
    "Webflow",
    "select[required]",
    ":input[type=\x22number\x22][required]",
    "[data-select-multiple]",
    "submit-show",
    "_blank",
    "checkbox",
    "[data-clickable]",
    "clicked",
    "[data-query-param]",
    "[data-form=\x22step\x22]:not([data-card=\x22true\x22])",
    ":input[type=\x22checkbox\x22]",
    "searchParams",
    "[data-display-wrapper=\x22",
    "join",
    "show",
    "includes",
    "step",
    "[data-count-card]",
    "[data-cms-select=cms]",
    "[data-display-input-index=\x22",
    "</div>",
    "add-new",
    "\x22]\x20input",
    ".w-radio-input",
    "dispatchEvent",
    "[data-selection=\x22other\x22]",
    "val",
    "value",
    "type",
    "[data-form=\x22next-btn\x22][data-submit-show]",
    "skip-to",
    "[data-display-input-wrapper=\x22",
    "min-character",
    ":first",
    "fadeIn",
    "[data-range]:contains(",
    "[data-go-to]",
    "415088TFWGGF",
    "input[name=\x22",
    "[data-reinit]",
    "[data-text=\x22total-weight\x22]",
    "prop",
    "data",
    "[data-form=\x22multistep\x22]",
    "[data-radio-skip]:visible",
    "select-multiple",
    "[data-clone]",
    "log",
    "preventDefault",
    "parse",
    "<option>",
    "[data-reset-delay]",
    "keypress",
    "select[name=\x22",
    "html,\x20body",
    "new-tab",
    "length",
    ".w-checkbox-input",
    "key",
    "forEach",
    "input:radio[required]",
    "input[type=\x22submit\x22]",
    "[data-redirect-delay]",
    "[data-quiz]",
    "find",
    "ctrlKey",
    "[data-btn=\x22edit\x22]",
    "clickable",
    "[data-input-field=\x22",
    "ms-field",
    "children",
    "remove-upload",
    "conditional-result",
    "textarea:focus",
    "body",
    ":focus",
    "addClass",
    "hide",
    "init",
    "memory",
    "input[type=\x22radio\x22]",
    "[data-input-index=\x22",
    "skipTo",
    "last",
    "[data-clone=\x22",
    "index",
    "\x22][value=\x22",
    "not",
    "[data-clone-input=\x22",
    "keyCode",
    "https://webflow.com/api/v1/form/",
    "replace",
    "offset",
    "scroll-top",
    "Please\x20wait...",
    "textarea[name=\x22",
    "332591NbaVFO",
    "slow",
    "AND",
  ];
  _0x107d = function () {
    return _0x2f7fdb;
  };
  return _0x107d();
}
function saveFilledInput() {
  const _0x33d67a = _0x316744;
  $(_0x33d67a(0x135))
    [_0x33d67a(0x190)](_0x33d67a(0x20c))
    [_0x33d67a(0x1e9)](function () {
      const _0x565608 = _0x33d67a;
      $(this)["attr"](_0x565608(0x155)) === "checkbox" ||
      $(this)[_0x565608(0x10a)](_0x565608(0x155)) === _0x565608(0x1bd)
        ? $(this)[_0x565608(0x162)](_0x565608(0x114)) &&
          (filledInput[_0x565608(0x11e)](
            (_0x5ab585) =>
              _0x5ab585[_0x565608(0x122)] ===
              $(this)[_0x565608(0x10a)](_0x565608(0x1f6)),
          )
            ? ((filledInput = filledInput[_0x565608(0x1d6)](
                (_0x513296) =>
                  _0x513296[_0x565608(0x122)] !==
                  $(this)["attr"](_0x565608(0x1f6)),
              )),
              $(this)["val"]() !== "" &&
                filledInput["push"]({
                  inputName: $(this)[_0x565608(0x10a)](_0x565608(0x1f6)),
                  value: $(this)["val"](),
                }))
            : $(this)["val"]() !== "" &&
              filledInput["push"]({
                inputName: $(this)["attr"](_0x565608(0x1f6)),
                value: $(this)[_0x565608(0x153)](),
              }))
        : filledInput[_0x565608(0x11e)](
              (_0x4c37a7) =>
                _0x4c37a7["inputName"] === $(this)[_0x565608(0x10a)]("name"),
            )
          ? ((filledInput = filledInput[_0x565608(0x1d6)](
              (_0x44cde4) =>
                _0x44cde4[_0x565608(0x122)] !==
                $(this)[_0x565608(0x10a)]("name"),
            )),
            $(this)["val"]() !== "" &&
              filledInput["push"]({
                inputName: $(this)[_0x565608(0x10a)]("name"),
                value: $(this)[_0x565608(0x153)](),
              }))
          : $(this)[_0x565608(0x153)]() !== "" &&
            filledInput[_0x565608(0x121)]({
              inputName: $(this)[_0x565608(0x10a)](_0x565608(0x1f6)),
              value: $(this)["val"](),
            });
    }),
    localStorage[_0x33d67a(0x1ec)](_0x33d67a(0x1ca)),
    localStorage[_0x33d67a(0x1ab)](
      _0x33d67a(0x1ca),
      JSON[_0x33d67a(0x1de)](filledInput),
    );
}
function scrollTop() {
  const _0x131796 = _0x316744;
  scrollToTop &&
    $(_0x131796(0x16f))["animate"](
      {
        scrollTop:
          $(_0x131796(0x164))[_0x131796(0x195)]()[_0x131796(0x10e)] -
          scrollTopOffset,
      },
      0x3e8,
    );
}
function updateStep() {
  const _0x59e308 = _0x316744;
  scrollTop(),
    (skip = ![]),
    $("[data-form=\x22custom-progress-indicator\x22]")[_0x59e308(0x20a)](
      _0x59e308(0x211),
    );
  $("[data-clickable]")[_0x59e308(0x163)](_0x59e308(0x17c)) &&
    (steps["find"](_0x59e308(0x1d1))[_0x59e308(0x1e9)](function () {
      const _0x57872d = _0x59e308;
      $(
        $(_0x57872d(0x1c5))[
          $(this)[_0x57872d(0x106)](_0x57872d(0x1b9))[_0x57872d(0x18e)]()
        ],
      ),
        $(this)[_0x57872d(0x153)]() === "" && emptyInput++;
    }),
    emptyInput > 0x0
      ? $(_0x59e308(0x176))[_0x59e308(0x185)](_0x59e308(0x211))
      : $(_0x59e308(0x176))["removeClass"](_0x59e308(0x211)));
  $(_0x59e308(0x1c5))[_0x59e308(0x20a)](_0x59e308(0x19d)),
    $(_0x59e308(0x1c5))["addClass"]("disabled"),
    $($(_0x59e308(0x1c5))[x])[_0x59e308(0x185)]("current"),
    (selection = selections[_0x59e308(0x1d6)](
      (_0x3dd243) => _0x3dd243[_0x59e308(0x149)] === x - 0x1,
    ));
  next &&
    (x = getSafe(() => selection[0x0][_0x59e308(0x18b)])
      ? parseInt(getSafe(() => selection[0x0][_0x59e308(0x18b)]))
      : x);
  $(_0x59e308(0x1fa))[_0x59e308(0x186)](), steps[_0x59e308(0x186)]();
  reinitIX === !![] && window[_0x59e308(0x138)]["destroy"]();
  $(progressbar)[_0x59e308(0x20a)]("current");
  for (i = 0x0; i <= x; i++) {
    countCard
      ? $(progressbar[i])["addClass"]("current")
      : !$(steps[i])[_0x59e308(0x163)](_0x59e308(0x1f8)) &&
        $(progressbar[i])[_0x59e308(0x185)]("current");
  }
  reinitIX === !![]
    ? (window[_0x59e308(0x138)] &&
        window[_0x59e308(0x138)]
          [_0x59e308(0x1a0)](_0x59e308(0x212))
          [_0x59e308(0x187)](),
      document[_0x59e308(0x151)](new Event(_0x59e308(0x124))),
      $(steps[x])[_0x59e308(0x147)]())
    : $(steps[x])[_0x59e308(0x15b)](_0x59e308(0x19a));
  $(_0x59e308(0x1aa))[_0x59e308(0x20a)](_0x59e308(0x1f9));
  x === 0x0 &&
    !$(steps[x])[_0x59e308(0x163)](_0x59e308(0x1f8)) &&
    ($(steps[x])["find"](_0x59e308(0x1fa))[_0x59e308(0x147)](),
    $(steps[x])
      [_0x59e308(0x179)](_0x59e308(0x1fa))
      ["addClass"](_0x59e308(0x1f9)));
  selection["length"] > 0x0
    ? ($(steps[x])
        ["find"](_0x59e308(0x1d3) + selection[0x0][_0x59e308(0x1c1)] + "\x22]")
        [_0x59e308(0x147)](),
      $(steps[x])
        [_0x59e308(0x179)](
          _0x59e308(0x1d3) + selection[0x0][_0x59e308(0x1c1)] + "\x22]",
        )
        ["addClass"](_0x59e308(0x1f9)))
    : ($(steps[x])
        [_0x59e308(0x179)](_0x59e308(0x1d3) + answer + "\x22]")
        [_0x59e308(0x147)](),
      $(steps[x])
        ["find"](_0x59e308(0x1d3) + answer + "\x22]")
        [_0x59e308(0x185)]("active-answer-card"));
  if (x === 0x0)
    $(_0x59e308(0x1e7))[_0x59e308(0x186)](),
      $(_0x59e308(0x11b))[_0x59e308(0x147)](),
      $(_0x59e308(0x133))["hide"]();
  else {
    if (
      x === steps[_0x59e308(0x171)] - 0x1 ||
      $(steps[x])[_0x59e308(0x179)](_0x59e308(0x117))[_0x59e308(0x171)] > 0x0
    ) {
      $(_0x59e308(0x11b))[_0x59e308(0x186)]();
      if (
        $(steps[x])
          [_0x59e308(0x179)](_0x59e308(0x156))
          ["data"](_0x59e308(0x13c))
      )
        $(steps[x])["find"](_0x59e308(0x156))[_0x59e308(0x147)]();
      else
        $(_0x59e308(0x11b))[_0x59e308(0x163)](_0x59e308(0x13c)) &&
          $(_0x59e308(0x11b))[_0x59e308(0x147)]();
      $(_0x59e308(0x133))[_0x59e308(0x147)](),
        $(_0x59e308(0x101))["show"](),
        $(_0x59e308(0x1e7))["show"]();
    } else
      $("[data-form=\x22next-btn\x22]")[_0x59e308(0x147)](),
        $("[data-form=\x22back-btn\x22]")["show"](),
        $(_0x59e308(0x133))[_0x59e308(0x186)](),
        $("[data-form-ms=\x22submit-btn\x22]")[_0x59e308(0x186)]();
  }
  $($(steps[x])[_0x59e308(0x179)](_0x59e308(0x1ed))[0x0])[_0x59e308(0x1a2)](),
    $($(steps[x])[_0x59e308(0x179)](_0x59e308(0x109))[0x0])[_0x59e308(0x1a2)](),
    validation();
  for (idx = 0x0; idx <= x; idx++) {
    $($(_0x59e308(0x1c5))[idx])["removeClass"]("disabled");
  }
}
function validateEmail(_0x1e9112, _0x25cd3c, _0x5bedb4) {
  const _0x3617a9 = _0x316744;
  let _0x404e21 = _0x1e9112[_0x3617a9(0x148)]("@")
    ? _0x1e9112[_0x3617a9(0x1db)]("@")[0x1][_0x3617a9(0x1db)](".")[0x0]
    : [];
  dom = [];
  _0x25cd3c !== undefined &&
    _0x25cd3c[_0x3617a9(0x1db)](",")[_0x3617a9(0x174)](function (_0x495b2c) {
      _0x495b2c["includes"](_0x404e21) && dom["push"](_0x404e21);
    });
  dom[_0x3617a9(0x171)] > 0x0 ? (domainAllowed = ![]) : (domainAllowed = !![]);
  var _0xa37da2 = /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,20})?$/;
  console[_0x3617a9(0x168)](_0xa37da2[_0x3617a9(0x11f)](_0x1e9112)),
    !_0xa37da2[_0x3617a9(0x11f)](_0x1e9112) || !domainAllowed
      ? ((emailFilled = ![]),
        unfilledArr[_0x3617a9(0x121)]({ input: _0x5bedb4 }))
      : (emailFilled = !![]);
}
function phoneValidation(_0x4de21c, _0x100885, _0x4870b0) {
  if (phoneFormat) return _0x100885 >= _0x4870b0 ? !![] : ![];
  else {
    if (_0x100885 >= _0x4870b0) return !![];
  }
}
function validation() {
  const _0xc979a9 = _0x316744;
  $(steps[x])[_0xc979a9(0x163)](_0xc979a9(0x1f8)) && enableBtn();
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
    (textareaLength = $(steps[x])[_0xc979a9(0x179)](_0xc979a9(0x1ef))[
      _0xc979a9(0x171)
    ]),
    (textInputLength = $(steps[x])[_0xc979a9(0x179)](_0xc979a9(0x113))[
      "length"
    ]),
    (selectInputLength = $(steps[x])[_0xc979a9(0x179)](_0xc979a9(0x1be))[
      _0xc979a9(0x171)
    ]),
    (emailInputLength = $(steps[x])[_0xc979a9(0x179)](_0xc979a9(0x107))[
      "length"
    ]),
    (checkboxInputLength = $(steps[x])[_0xc979a9(0x179)](_0xc979a9(0x1d5))[
      "length"
    ]);
  textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0
    ? disableBtn()
    : enableBtn();
  checkCount = $(steps[x])[_0xc979a9(0x163)](_0xc979a9(0x13e))
    ? $(steps[x])[_0xc979a9(0x163)](_0xc979a9(0x13e))
    : $(steps[x])[_0xc979a9(0x179)](_0xc979a9(0x209))["length"] > 0x0
      ? $(steps[x])
          [_0xc979a9(0x179)]("[data-checkbox]")
          ["data"](_0xc979a9(0x13e))
      : 0x0;
  if (!logicExtra)
    $(steps[x])[_0xc979a9(0x179)](_0xc979a9(0x11c))["is"](_0xc979a9(0x19f)) &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])[_0xc979a9(0x179)](":input[type=\x22checkbox\x22]")[
          _0xc979a9(0x171)
        ]
        ? $(steps[x])
            ["find"](_0xc979a9(0x143))
            [_0xc979a9(0x1e9)](function () {
              const _0x3a3b71 = _0xc979a9;
              $(this)["is"](_0x3a3b71(0x12c))
                ? $(steps[x])[_0x3a3b71(0x179)](_0x3a3b71(0x119))[
                    _0x3a3b71(0x171)
                  ] < 0x1 &&
                  ((checkboxFilled = !![]),
                  resetInputErrorMessage(
                    $(this)[_0x3a3b71(0x10a)](_0x3a3b71(0x1f6)),
                  ))
                : ((checkboxFilled = ![]),
                  unfilledArr["push"]({
                    input: $(this)["attr"](_0x3a3b71(0x1f6)),
                  }));
            })
        : $(steps[x])["find"](":input[type=\x22checkbox\x22]:checked")[
              _0xc979a9(0x171)
            ] >= checkCount
          ? $(steps[x])["find"](_0xc979a9(0x119))[_0xc979a9(0x171)] > 0x0
            ? $(steps[x])
                [_0xc979a9(0x179)](_0xc979a9(0x119))
                [_0xc979a9(0x1e9)](function () {
                  const _0x59d2cb = _0xc979a9;
                  !$(this)["is"](_0x59d2cb(0x12c))
                    ? ((checkboxFilled = ![]),
                      unfilledArr["push"]({
                        input: $(this)[_0x59d2cb(0x10a)](_0x59d2cb(0x1f6)),
                      }))
                    : ((checkboxFilled = !![]),
                      $(steps[x])[_0x59d2cb(0x179)](_0x59d2cb(0x1b6))[
                        _0x59d2cb(0x171)
                      ] >=
                        $(steps[x])[_0x59d2cb(0x179)](
                          ":input[type=\x22checkbox\x22][required]",
                        )["length"] &&
                        resetInputErrorMessage(
                          $(steps[x])
                            [_0x59d2cb(0x179)](":input[type=\x22checkbox\x22]")
                            ["attr"](_0x59d2cb(0x1f6)),
                        ));
                })
            : ((checkboxFilled = !![]),
              resetInputErrorMessage(
                $(steps[x])
                  ["find"](_0xc979a9(0x143))
                  [_0xc979a9(0x10a)](_0xc979a9(0x1f6)),
              ))
          : ((checkboxFilled = ![]),
            $(steps[x])
              [_0xc979a9(0x179)](_0xc979a9(0x119))
              [_0xc979a9(0x1e9)](function () {
                const _0x3ee0f4 = _0xc979a9;
                $(this)[_0x3ee0f4(0x190)](_0x3ee0f4(0x12c)) &&
                  unfilledArr["push"]({
                    input: $(this)[_0x3ee0f4(0x10a)](_0x3ee0f4(0x1f6)),
                  });
              }),
            unfilledArr[_0xc979a9(0x121)]({
              input: $(steps[x])
                [_0xc979a9(0x179)](":input[type=\x22checkbox\x22]")
                [_0xc979a9(0x10a)]("name"),
            }))),
      $(steps[x])
        ["find"]("input:radio[required]")
        [_0xc979a9(0x1e9)](function (_0xdfda3d) {
          const _0x3228e5 = _0xc979a9;
          var _0x2f819b = $(this)[_0x3228e5(0x10a)](_0x3228e5(0x1f6));
          $(_0x3228e5(0x12f) + _0x2f819b + _0x3228e5(0x1c7))["length"] == 0x0
            ? (!empReqRadio[_0x3228e5(0x179)](
                (_0x11c5e1) => _0x11c5e1[_0x3228e5(0x10b)] === _0xdfda3d,
              ) && empReqRadio["push"]({ input: _0xdfda3d }),
              unfilledArr[_0x3228e5(0x121)]({
                input: $(this)["attr"](_0x3228e5(0x1f6)),
              }))
            : (empReqRadio = empReqRadio["filter"](
                (_0x132cab) => _0x132cab[_0x3228e5(0x10b)] !== _0xdfda3d,
              )),
            empReqRadio[_0x3228e5(0x171)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0xc979a9(0x179)](_0xc979a9(0x134))
        [_0xc979a9(0x1e9)](function (_0x57019b) {
          const _0x164b7f = _0xc979a9;
          let _0x59f9be = $(this)[_0x164b7f(0x153)]()[_0x164b7f(0x171)],
            _0x2634c0 = $(this)[_0x164b7f(0x163)](_0x164b7f(0x159))
              ? $(this)[_0x164b7f(0x163)](_0x164b7f(0x159))
              : 0x0;
          $(this)["val"]() !== "" && _0x59f9be >= _0x2634c0
            ? (empReqInput = empReqInput["filter"](
                (_0x4cc738) => _0x4cc738["input"] !== _0x57019b,
              ))
            : (!empReqInput[_0x164b7f(0x179)](
                (_0x2dbbbc) => _0x2dbbbc["input"] === _0x57019b,
              ) && empReqInput[_0x164b7f(0x121)]({ input: _0x57019b }),
              unfilledArr["push"]({
                input: $(this)["attr"](_0x164b7f(0x1f6)),
              })),
            empReqInput[_0x164b7f(0x171)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0xc979a9(0x179)](_0xc979a9(0x1e8))
        [_0xc979a9(0x1e9)](function (_0x1add07) {
          const _0x413314 = _0xc979a9;
          let _0x2031e2 = $(this)[_0x413314(0x153)]()[_0x413314(0x171)],
            _0x5c991c = $(this)[_0x413314(0x163)](_0x413314(0x159))
              ? $(this)[_0x413314(0x163)](_0x413314(0x159))
              : 0x0;
          $(this)["val"]() !== "" && _0x2031e2 >= _0x5c991c
            ? (empReqPassword = empReqPassword["filter"](
                (_0x5d014b) => _0x5d014b[_0x413314(0x10b)] !== _0x1add07,
              ))
            : (!empReqPassword[_0x413314(0x179)](
                (_0x560a18) => _0x560a18[_0x413314(0x10b)] === _0x1add07,
              ) && empReqPassword[_0x413314(0x121)]({ input: _0x1add07 }),
              unfilledArr["push"]({
                input: $(this)[_0x413314(0x10a)](_0x413314(0x1f6)),
              })),
            empReqPassword[_0x413314(0x171)] === 0x0
              ? (passwordFilled = !![])
              : (passwordFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0xc979a9(0x1b8))
        ["each"](function (_0x29503d) {
          const _0x409cb0 = _0xc979a9;
          let _0x1a4470 = $(this)[_0x409cb0(0x153)]()[_0x409cb0(0x171)],
            _0x536bbf = $(this)[_0x409cb0(0x163)](_0x409cb0(0x159))
              ? $(this)["data"](_0x409cb0(0x159))
              : 0x0;
          $(this)[_0x409cb0(0x153)]() !== "" && _0x1a4470 >= _0x536bbf
            ? (empReqUrl = empReqUrl["filter"](
                (_0x144924) => _0x144924["input"] !== _0x29503d,
              ))
            : (!empReqUrl["find"](
                (_0x3d6a35) => _0x3d6a35[_0x409cb0(0x10b)] === _0x29503d,
              ) && empReqUrl[_0x409cb0(0x121)]({ input: _0x29503d }),
              unfilledArr[_0x409cb0(0x121)]({
                input: $(this)["attr"](_0x409cb0(0x1f6)),
              })),
            empReqUrl["length"] === 0x0 &&
            validateURL($(this)[_0x409cb0(0x153)]())
              ? ((urlFilled = !![]), console[_0x409cb0(0x168)](urlFilled))
              : (urlFilled = ![]);
        }),
      $(steps[x])
        ["find"](":input[type=\x22date\x22][required]")
        [_0xc979a9(0x1e9)](function (_0x4014fc) {
          const _0x5d08f2 = _0xc979a9;
          $(this)["val"]() !== ""
            ? (empReqDate = empReqDate[_0x5d08f2(0x1d6)](
                (_0x3bee62) => _0x3bee62[_0x5d08f2(0x10b)] !== _0x4014fc,
              ))
            : (!empReqDate[_0x5d08f2(0x179)](
                (_0x2d8e75) => _0x2d8e75[_0x5d08f2(0x10b)] === _0x4014fc,
              ) && empReqDate[_0x5d08f2(0x121)]({ input: _0x4014fc }),
              unfilledArr[_0x5d08f2(0x121)]({
                input: $(this)[_0x5d08f2(0x10a)](_0x5d08f2(0x1f6)),
              })),
            empReqDate["length"] === 0x0
              ? (dateFilled = !![])
              : (dateFilled = ![]);
        }),
      $(steps[x])
        [_0xc979a9(0x179)](_0xc979a9(0x1ae))
        ["each"](function (_0x36eb22) {
          const _0x5b73e4 = _0xc979a9;
          if ($(this)["val"]() !== "") {
            let _0x11e706 = $(this)[_0x5b73e4(0x153)]()[_0x5b73e4(0x171)],
              _0x18fe2a = $(this)[_0x5b73e4(0x163)](_0x5b73e4(0x159))
                ? $(this)[_0x5b73e4(0x163)]("min-character")
                : 0x0;
            if ($(this)[_0x5b73e4(0x163)](_0x5b73e4(0x1f3))) {
              var _0x1be498 = phoneAutoFormat(
                $(this)[_0x5b73e4(0x163)](_0x5b73e4(0x1f3)),
              );
              $(this)[_0x5b73e4(0x153)](_0x1be498($(this)["val"]()));
            }
            phoneValidation($(this)["val"](), _0x11e706, _0x18fe2a)
              ? (empReqTel = empReqTel[_0x5b73e4(0x1d6)](
                  (_0x2e1108) => _0x2e1108["input"] !== _0x36eb22,
                ))
              : empReqTel[_0x5b73e4(0x121)]({ input: _0x36eb22 });
          } else
            !empReqTel["find"](
              (_0x4f2bf6) => _0x4f2bf6[_0x5b73e4(0x10b)] === _0x36eb22,
            ) && empReqTel[_0x5b73e4(0x121)]({ input: _0x36eb22 }),
              unfilledArr[_0x5b73e4(0x121)]({
                input: $(this)[_0x5b73e4(0x10a)](_0x5b73e4(0x1f6)),
              });
          empReqTel["length"] === 0x0 ? (telFilled = !![]) : (telFilled = ![]);
        }),
      $(steps[x])
        [_0xc979a9(0x179)](_0xc979a9(0x1d9))
        [_0xc979a9(0x1e9)](function (_0x53dd67) {
          const _0x58ddde = _0xc979a9;
          $(this)[_0x58ddde(0x153)]() !== ""
            ? (empReqFile = empReqFile[_0x58ddde(0x1d6)](
                (_0x3e54dd) => _0x3e54dd[_0x58ddde(0x10b)] !== _0x53dd67,
              ))
            : (!empReqFile[_0x58ddde(0x179)](
                (_0x527016) => _0x527016[_0x58ddde(0x10b)] === _0x53dd67,
              ) && empReqFile[_0x58ddde(0x121)]({ input: _0x53dd67 }),
              unfilledArr[_0x58ddde(0x121)]({
                input: $(this)[_0x58ddde(0x10a)](_0x58ddde(0x1f6)),
              })),
            empReqFile[_0x58ddde(0x171)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0xc979a9(0x179)](":input[type=\x22number\x22][required]")
        [_0xc979a9(0x1e9)](function (_0x5d8eb9) {
          const _0x18abc4 = _0xc979a9;
          let _0x2e242c = $(this)["val"]()[_0x18abc4(0x171)],
            _0x146a8f = $(this)[_0x18abc4(0x163)](_0x18abc4(0x159))
              ? $(this)[_0x18abc4(0x163)](_0x18abc4(0x159))
              : 0x0;
          $(this)[_0x18abc4(0x153)]() !== "" && _0x2e242c >= _0x146a8f
            ? (empReqNum = empReqNum[_0x18abc4(0x1d6)](
                (_0xbcea79) => _0xbcea79["input"] !== _0x5d8eb9,
              ))
            : (!empReqNum[_0x18abc4(0x179)](
                (_0x3e8900) => _0x3e8900[_0x18abc4(0x10b)] === _0x5d8eb9,
              ) && empReqNum[_0x18abc4(0x121)]({ input: _0x5d8eb9 }),
              unfilledArr[_0x18abc4(0x121)]({
                input: $(this)["attr"](_0x18abc4(0x1f6)),
              })),
            empReqNum[_0x18abc4(0x171)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0xc979a9(0x179)](_0xc979a9(0x139))
        [_0xc979a9(0x1e9)](function (_0x2b6426) {
          const _0x2fd2c0 = _0xc979a9;
          let _0x469fc9 = $(this)["val"]();
          _0x469fc9 === "" && (_0x469fc9 = null),
            _0x469fc9 != null
              ? (empReqSelect = empReqSelect[_0x2fd2c0(0x1d6)](
                  (_0x417577) => _0x417577["input"] !== _0x2b6426,
                ))
              : (!empReqSelect[_0x2fd2c0(0x179)](
                  (_0x165c80) => _0x165c80["input"] === _0x2b6426,
                ) && empReqSelect[_0x2fd2c0(0x121)]({ input: _0x2b6426 }),
                unfilledArr[_0x2fd2c0(0x121)]({
                  input: $(this)[_0x2fd2c0(0x10a)](_0x2fd2c0(0x1f6)),
                })),
            empReqSelect[_0x2fd2c0(0x171)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0xc979a9(0x179)](_0xc979a9(0x1eb))
        ["each"](function (_0x222fd9) {
          const _0x353d5b = _0xc979a9;
          let _0x825ba9 = $(this)["val"]()["length"],
            _0x50cf23 = $(this)[_0x353d5b(0x163)](_0x353d5b(0x159))
              ? $(this)[_0x353d5b(0x163)](_0x353d5b(0x159))
              : 0x0;
          $(this)[_0x353d5b(0x153)]() !== "" && _0x825ba9 >= _0x50cf23
            ? (empReqTextarea = empReqTextarea[_0x353d5b(0x1d6)](
                (_0x12aabf) => _0x12aabf[_0x353d5b(0x10b)] !== _0x222fd9,
              ))
            : (!empReqTextarea[_0x353d5b(0x179)](
                (_0x442114) => _0x442114["input"] === _0x222fd9,
              ) && empReqTextarea[_0x353d5b(0x121)]({ input: _0x222fd9 }),
              unfilledArr[_0x353d5b(0x121)]({
                input: $(this)["attr"](_0x353d5b(0x1f6)),
              })),
            empReqTextarea[_0x353d5b(0x171)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0xc979a9(0x179)](_0xc979a9(0x1d4))
        [_0xc979a9(0x1e9)](function () {
          const _0x454ee6 = _0xc979a9;
          $(this)[_0x454ee6(0x153)]() !== ""
            ? validateEmail(
                $(this)[_0x454ee6(0x153)](),
                $(this)[_0x454ee6(0x163)](_0x454ee6(0x105)),
                $(this)["attr"](_0x454ee6(0x1f6)),
              )
            : ((emailFilled = ![]),
              unfilledArr[_0x454ee6(0x121)]({
                input: $(this)[_0x454ee6(0x10a)](_0x454ee6(0x1f6)),
              }));
        });
  else {
    if ($(steps[x])[_0xc979a9(0x163)]("card"))
      (answer = $(steps[x])
        [_0xc979a9(0x179)](_0xc979a9(0x15d))
        [_0xc979a9(0x163)]("go-to")),
        (selections = selections[_0xc979a9(0x1d6)](
          (_0x1256cb) => _0x1256cb["step"] !== x,
        )),
        selections["push"]({ step: x, selected: answer });
    else
      $(steps[x])
        [_0xc979a9(0x179)](_0xc979a9(0x1aa))
        [_0xc979a9(0x163)](_0xc979a9(0x1f8)) &&
        ((answer = $(steps[x])
          ["find"](_0xc979a9(0x1aa))
          ["data"](_0xc979a9(0x1a4))),
        (selections = selections[_0xc979a9(0x1d6)](
          (_0xd1e11d) => _0xd1e11d["step"] !== x,
        )),
        selections[_0xc979a9(0x121)]({ step: x, selected: answer }));
    $(steps[x])
      ["find"](_0xc979a9(0x1aa))
      ["find"](_0xc979a9(0x11c))
      ["is"]("[type=\x22checkbox\x22]") &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])[_0xc979a9(0x179)](":input[type=\x22checkbox\x22]")[
          _0xc979a9(0x171)
        ]
        ? (console["log"](_0xc979a9(0x11f)),
          $(steps[x])
            [_0xc979a9(0x179)](_0xc979a9(0x143))
            [_0xc979a9(0x1e9)](function () {
              const _0x41438c = _0xc979a9;
              $(this)["is"](_0x41438c(0x12c))
                ? $(steps[x])[_0x41438c(0x179)](":input[required]")[
                    _0x41438c(0x171)
                  ] < 0x1 &&
                  ((skipTo = undefined),
                  $(this)
                    ["parents"](_0x41438c(0x1c6))
                    [_0x41438c(0x163)](_0x41438c(0x157)) &&
                    (skipTo = $(this)
                      [_0x41438c(0x106)](_0x41438c(0x1c6))
                      [_0x41438c(0x163)](_0x41438c(0x157))),
                  $(this)
                    ["parents"](_0x41438c(0x15d))
                    [_0x41438c(0x10a)](_0x41438c(0x1fe)) &&
                    ((answer = $(this)
                      [_0x41438c(0x106)](_0x41438c(0x15d))
                      ["attr"](_0x41438c(0x1fe))),
                    (selections = selections[_0x41438c(0x1d6)](
                      (_0x4f2f43) => _0x4f2f43[_0x41438c(0x149)] !== x,
                    )),
                    selections[_0x41438c(0x121)]({ step: x, selected: answer }),
                    skipTo &&
                      (selections[_0x41438c(0x121)]({
                        step: skipTo - 0x2,
                        selected: answer,
                      }),
                      (objIndex = selections[_0x41438c(0x127)](
                        (_0x17a79e) => _0x17a79e[_0x41438c(0x149)] === x,
                      )),
                      (selections[objIndex][_0x41438c(0x18b)] =
                        parseInt(skipTo) - 0x1),
                      (selections[objIndex][_0x41438c(0x214)] = x))),
                  (checkboxFilled = !![]),
                  $(steps[x])[_0x41438c(0x179)](_0x41438c(0x1b6))[
                    _0x41438c(0x171)
                  ] >=
                    $(steps[x])[_0x41438c(0x179)](_0x41438c(0x119))["length"] &&
                    resetInputErrorMessage(
                      $(steps[x])
                        [_0x41438c(0x179)](":input[type=\x22checkbox\x22]")
                        [_0x41438c(0x10a)]("name"),
                    ))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0x41438c(0x121)]({
                    input: $(this)[_0x41438c(0x10a)](_0x41438c(0x1f6)),
                  }));
            }))
        : $(steps[x])
              [_0xc979a9(0x179)](_0xc979a9(0x1aa))
              [_0xc979a9(0x179)](_0xc979a9(0x1d7))[_0xc979a9(0x171)] >=
            checkCount
          ? ($(steps[x])
              [_0xc979a9(0x179)](_0xc979a9(0x1aa))
              ["find"](_0xc979a9(0x143))
              [_0xc979a9(0x106)](_0xc979a9(0x15d))
              [_0xc979a9(0x10a)](_0xc979a9(0x1fe)) &&
              ((skipTo = undefined),
              $(steps[x])
                [_0xc979a9(0x179)](_0xc979a9(0x1aa))
                [_0xc979a9(0x179)](_0xc979a9(0x143))
                [_0xc979a9(0x106)](_0xc979a9(0x1c6))
                [_0xc979a9(0x10a)]("data-skip-to") &&
                (skipTo = $(steps[x])
                  [_0xc979a9(0x179)](_0xc979a9(0x1aa))
                  [_0xc979a9(0x179)](":input[type=\x22checkbox\x22]:checked")
                  ["parents"](_0xc979a9(0x1c6))
                  [_0xc979a9(0x10a)]("data-skip-to")),
              (answer = $(steps[x])
                [_0xc979a9(0x179)](_0xc979a9(0x1aa))
                [_0xc979a9(0x179)](":input[type=\x22checkbox\x22]")
                [_0xc979a9(0x106)](_0xc979a9(0x15d))
                ["attr"](_0xc979a9(0x1fe))),
              (selections = selections[_0xc979a9(0x1d6)](
                (_0x344d64) => _0x344d64["step"] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                ((selections = selections[_0xc979a9(0x1d6)](
                  (_0x50ab25) => _0x50ab25["step"] !== skipTo - 0x2,
                )),
                selections[_0xc979a9(0x121)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0xc979a9(0x127)](
                  (_0x208c94) => _0x208c94[_0xc979a9(0x149)] === x,
                )),
                console[_0xc979a9(0x168)](objIndex),
                (selections[objIndex][_0xc979a9(0x18b)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0xc979a9(0x214)] = x),
                console[_0xc979a9(0x168)](_0xc979a9(0x12b)))),
            (checkboxFilled = !![]),
            $(steps[x])[_0xc979a9(0x179)](_0xc979a9(0x1b6))[_0xc979a9(0x171)] >=
              $(steps[x])[_0xc979a9(0x179)](_0xc979a9(0x119))["length"] &&
              resetInputErrorMessage(
                $(steps[x])
                  [_0xc979a9(0x179)](_0xc979a9(0x143))
                  [_0xc979a9(0x10a)](_0xc979a9(0x1f6)),
              ))
          : ((checkboxFilled = ![]),
            $(steps[x])
              [_0xc979a9(0x179)](":input[type=\x22checkbox\x22][required]")
              ["each"](function () {
                const _0x56c782 = _0xc979a9;
                $(this)[_0x56c782(0x190)](":checked") &&
                  unfilledArr["push"]({
                    input: $(this)[_0x56c782(0x10a)](_0x56c782(0x1f6)),
                  });
              }))),
      $(steps[x])
        [_0xc979a9(0x179)](_0xc979a9(0x1aa))
        [_0xc979a9(0x179)](_0xc979a9(0x175))
        ["each"](function (_0x581efb) {
          const _0x204e8f = _0xc979a9;
          var _0x214aa5 = $(this)[_0x204e8f(0x10a)](_0x204e8f(0x1f6));
          $("input:radio[name=\x22" + _0x214aa5 + _0x204e8f(0x1c7))[
            _0x204e8f(0x171)
          ] == 0x0
            ? (!empReqRadio[_0x204e8f(0x179)](
                (_0x3e82c7) => _0x3e82c7[_0x204e8f(0x10b)] === _0x581efb,
              ) && empReqRadio[_0x204e8f(0x121)]({ input: _0x581efb }),
              unfilledArr[_0x204e8f(0x121)]({
                input: $(this)[_0x204e8f(0x10a)](_0x204e8f(0x1f6)),
              }))
            : (empReqRadio = empReqRadio[_0x204e8f(0x1d6)](
                (_0x5c0e28) => _0x5c0e28[_0x204e8f(0x10b)] !== _0x581efb,
              )),
            empReqRadio[_0x204e8f(0x171)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0xc979a9(0x179)](".active-answer-card")
        [_0xc979a9(0x179)](_0xc979a9(0x134))
        ["each"](function (_0x5a519e) {
          const _0x3cbf6c = _0xc979a9;
          let _0x52969f = $(this)[_0x3cbf6c(0x153)]()[_0x3cbf6c(0x171)],
            _0x1bd17e = $(this)[_0x3cbf6c(0x163)](_0x3cbf6c(0x159))
              ? $(this)["data"](_0x3cbf6c(0x159))
              : 0x0;
          $(this)[_0x3cbf6c(0x153)]() !== "" && _0x52969f >= _0x1bd17e
            ? (empReqInput = empReqInput[_0x3cbf6c(0x1d6)](
                (_0x7156b8) => _0x7156b8["input"] !== _0x5a519e,
              ))
            : (!empReqInput[_0x3cbf6c(0x179)](
                (_0x8b6846) => _0x8b6846[_0x3cbf6c(0x10b)] === _0x5a519e,
              ) && empReqInput[_0x3cbf6c(0x121)]({ input: _0x5a519e }),
              unfilledArr[_0x3cbf6c(0x121)]({
                input: $(this)["attr"](_0x3cbf6c(0x1f6)),
              })),
            empReqInput[_0x3cbf6c(0x171)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0xc979a9(0x179)](_0xc979a9(0x1aa))
        [_0xc979a9(0x179)](":input[type=\x22text\x22]")
        ["each"](function (_0x460664) {
          const _0x43f100 = _0xc979a9;
          (skipTo = undefined),
            $(this)
              [_0x43f100(0x106)](_0x43f100(0x1c6))
              ["data"](_0x43f100(0x157)) !== "" &&
              (skipTo = $(this)
                [_0x43f100(0x106)](_0x43f100(0x1c6))
                ["data"](_0x43f100(0x157))),
            $(this)
              [_0x43f100(0x106)](_0x43f100(0x15d))
              [_0x43f100(0x10a)](_0x43f100(0x1fe)) &&
              ((answer = $(this)
                [_0x43f100(0x106)](_0x43f100(0x15d))
                [_0x43f100(0x10a)](_0x43f100(0x1fe))),
              (selections = selections["filter"](
                (_0x4fb614) => _0x4fb614["step"] !== x,
              )),
              selections[_0x43f100(0x121)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x43f100(0x121)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x43f100(0x127)](
                  (_0x5a2844) => _0x5a2844[_0x43f100(0x149)] === x,
                )),
                (selections[objIndex][_0x43f100(0x18b)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0xc979a9(0x179)](".active-answer-card")
        [_0xc979a9(0x179)](":input[type=\x22password\x22][required]")
        [_0xc979a9(0x1e9)](function (_0x4268a3) {
          const _0x4828ed = _0xc979a9;
          let _0x12385e = $(this)[_0x4828ed(0x153)]()[_0x4828ed(0x171)],
            _0x29066e = $(this)[_0x4828ed(0x163)](_0x4828ed(0x159))
              ? $(this)[_0x4828ed(0x163)](_0x4828ed(0x159))
              : 0x0;
          $(this)[_0x4828ed(0x153)]() !== "" && _0x12385e >= _0x29066e
            ? (empReqPassword = empReqPassword[_0x4828ed(0x1d6)](
                (_0xb64e85) => _0xb64e85[_0x4828ed(0x10b)] !== _0x4268a3,
              ))
            : (!empReqPassword[_0x4828ed(0x179)](
                (_0x1f66a1) => _0x1f66a1[_0x4828ed(0x10b)] === _0x4268a3,
              ) && empReqPassword[_0x4828ed(0x121)]({ input: _0x4268a3 }),
              unfilledArr[_0x4828ed(0x121)]({
                input: $(this)[_0x4828ed(0x10a)](_0x4828ed(0x1f6)),
              })),
            empReqPassword[_0x4828ed(0x171)] === 0x0
              ? (passwordFilled = !![])
              : (passwordFilled = ![]);
        }),
      $(steps[x])
        [_0xc979a9(0x179)](_0xc979a9(0x1aa))
        [_0xc979a9(0x179)](_0xc979a9(0x131))
        [_0xc979a9(0x1e9)](function (_0x43412f) {
          const _0x2a7dd2 = _0xc979a9;
          (skipTo = undefined),
            $(this)
              ["parents"]("[data-skip-to]")
              [_0x2a7dd2(0x163)](_0x2a7dd2(0x157)) !== "" &&
              (skipTo = $(this)
                [_0x2a7dd2(0x106)](_0x2a7dd2(0x1c6))
                [_0x2a7dd2(0x163)](_0x2a7dd2(0x157))),
            $(this)
              [_0x2a7dd2(0x106)]("[data-go-to]")
              [_0x2a7dd2(0x10a)](_0x2a7dd2(0x1fe)) &&
              ((answer = $(this)
                [_0x2a7dd2(0x106)](_0x2a7dd2(0x15d))
                [_0x2a7dd2(0x10a)]("data-go-to")),
              (selections = selections["filter"](
                (_0x42ec57) => _0x42ec57[_0x2a7dd2(0x149)] !== x,
              )),
              selections[_0x2a7dd2(0x121)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x2a7dd2(0x121)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x2a7dd2(0x127)](
                  (_0x3aadcd) => _0x3aadcd["step"] === x,
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x2a7dd2(0x214)] = x)));
        }),
      $(steps[x])
        [_0xc979a9(0x179)](_0xc979a9(0x1aa))
        [_0xc979a9(0x179)](_0xc979a9(0x1b8))
        [_0xc979a9(0x1e9)](function (_0x3d6174) {
          const _0x4980bc = _0xc979a9;
          let _0x127a40 = $(this)[_0x4980bc(0x153)]()[_0x4980bc(0x171)],
            _0x5d0958 = $(this)[_0x4980bc(0x163)](_0x4980bc(0x159))
              ? $(this)["data"](_0x4980bc(0x159))
              : 0x0;
          $(this)[_0x4980bc(0x153)]() !== "" && _0x127a40 >= _0x5d0958
            ? (empReqUrl = empReqUrl[_0x4980bc(0x1d6)](
                (_0x10ee0d) => _0x10ee0d[_0x4980bc(0x10b)] !== _0x3d6174,
              ))
            : (!empReqUrl["find"](
                (_0x203845) => _0x203845[_0x4980bc(0x10b)] === _0x3d6174,
              ) && empReqUrl[_0x4980bc(0x121)]({ input: _0x3d6174 }),
              unfilledArr[_0x4980bc(0x121)]({
                input: $(this)["attr"](_0x4980bc(0x1f6)),
              })),
            empReqUrl[_0x4980bc(0x171)] === 0x0 &&
            validateURL($(this)[_0x4980bc(0x153)]())
              ? (urlFilled = !![])
              : (urlFilled = ![]);
        }),
      $(steps[x])
        [_0xc979a9(0x179)](_0xc979a9(0x1aa))
        ["find"](_0xc979a9(0x104))
        [_0xc979a9(0x1e9)](function (_0x54e518) {
          const _0x4b90e8 = _0xc979a9;
          (skipTo = undefined),
            $(this)
              [_0x4b90e8(0x106)](_0x4b90e8(0x1c6))
              [_0x4b90e8(0x163)](_0x4b90e8(0x157)) !== "" &&
              (skipTo = $(this)
                [_0x4b90e8(0x106)]("[data-skip-to]")
                [_0x4b90e8(0x163)](_0x4b90e8(0x157))),
            $(this)
              [_0x4b90e8(0x106)](_0x4b90e8(0x15d))
              [_0x4b90e8(0x10a)](_0x4b90e8(0x1fe)) &&
              ((answer = $(this)
                ["parents"](_0x4b90e8(0x15d))
                [_0x4b90e8(0x10a)](_0x4b90e8(0x1fe))),
              (selections = selections[_0x4b90e8(0x1d6)](
                (_0x1aefa6) => _0x1aefa6[_0x4b90e8(0x149)] !== x,
              )),
              selections[_0x4b90e8(0x121)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0x4b90e8(0x127)](
                  (_0x38fbe4) => _0x38fbe4["step"] === x,
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0xc979a9(0x179)](_0xc979a9(0x1aa))
        ["find"](_0xc979a9(0x1f1))
        ["each"](function (_0x29d962) {
          const _0x5e777c = _0xc979a9;
          $(this)[_0x5e777c(0x153)]() !== ""
            ? (empReqDate = empReqDate[_0x5e777c(0x1d6)](
                (_0x4c29af) => _0x4c29af[_0x5e777c(0x10b)] !== _0x29d962,
              ))
            : (!empReqDate["find"](
                (_0x1f6183) => _0x1f6183[_0x5e777c(0x10b)] === _0x29d962,
              ) && empReqDate[_0x5e777c(0x121)]({ input: _0x29d962 }),
              unfilledArr[_0x5e777c(0x121)]({
                input: $(this)[_0x5e777c(0x10a)]("name"),
              })),
            empReqDate[_0x5e777c(0x171)] === 0x0
              ? (dateFilled = !![])
              : (dateFilled = ![]);
        }),
      $(steps[x])
        [_0xc979a9(0x179)](_0xc979a9(0x1aa))
        [_0xc979a9(0x179)](_0xc979a9(0x1f2))
        [_0xc979a9(0x1e9)](function (_0x29e286) {
          const _0x37acb9 = _0xc979a9;
          (skipTo = undefined),
            $(this)
              [_0x37acb9(0x106)](_0x37acb9(0x1c6))
              [_0x37acb9(0x163)](_0x37acb9(0x157)) !== "" &&
              (skipTo = $(this)
                [_0x37acb9(0x106)](_0x37acb9(0x1c6))
                [_0x37acb9(0x163)]("skip-to")),
            $(this)
              ["parents"](_0x37acb9(0x15d))
              [_0x37acb9(0x10a)](_0x37acb9(0x1fe)) &&
              ((answer = $(this)
                [_0x37acb9(0x106)](_0x37acb9(0x15d))
                [_0x37acb9(0x10a)]("data-go-to")),
              (selections = selections[_0x37acb9(0x1d6)](
                (_0xf4a069) => _0xf4a069["step"] !== x,
              )),
              selections[_0x37acb9(0x121)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x37acb9(0x121)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x37acb9(0x127)](
                  (_0x491a0e) => _0x491a0e["step"] === x,
                )),
                (selections[objIndex][_0x37acb9(0x18b)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x37acb9(0x214)] = x)));
        }),
      $(steps[x])
        [_0xc979a9(0x179)](_0xc979a9(0x1aa))
        [_0xc979a9(0x179)](_0xc979a9(0x13a))
        [_0xc979a9(0x1e9)](function (_0x5b3fe2) {
          const _0x58da11 = _0xc979a9;
          let _0x4e0852 = $(this)[_0x58da11(0x153)]()[_0x58da11(0x171)],
            _0x43cd6d = $(this)[_0x58da11(0x163)](_0x58da11(0x159))
              ? $(this)[_0x58da11(0x163)]("min-character")
              : 0x0;
          $(this)[_0x58da11(0x153)]() !== "" && _0x4e0852 >= _0x43cd6d
            ? (empReqNum = empReqNum[_0x58da11(0x1d6)](
                (_0x38cae1) => _0x38cae1["input"] !== _0x5b3fe2,
              ))
            : (!empReqNum["find"](
                (_0x38ca70) => _0x38ca70["input"] === _0x5b3fe2,
              ) && empReqNum[_0x58da11(0x121)]({ input: _0x5b3fe2 }),
              unfilledArr[_0x58da11(0x121)]({
                input: $(this)[_0x58da11(0x10a)](_0x58da11(0x1f6)),
              })),
            empReqNum[_0x58da11(0x171)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0xc979a9(0x1aa))
        [_0xc979a9(0x179)](":input[type=\x22number\x22]")
        [_0xc979a9(0x1e9)](function (_0x5e6727) {
          const _0x1ba02d = _0xc979a9;
          (skipTo = undefined),
            $(this)
              [_0x1ba02d(0x106)](_0x1ba02d(0x1c6))
              [_0x1ba02d(0x163)](_0x1ba02d(0x157)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0x1ba02d(0x1c6))
                [_0x1ba02d(0x163)]("skip-to")),
            $(this)
              ["parents"]("[data-go-to]")
              [_0x1ba02d(0x10a)](_0x1ba02d(0x1fe)) &&
              ((answer = $(this)
                [_0x1ba02d(0x106)]("[data-go-to]")
                ["attr"](_0x1ba02d(0x1fe))),
              (selections = selections[_0x1ba02d(0x1d6)](
                (_0x2a04dc) => _0x2a04dc[_0x1ba02d(0x149)] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x1ba02d(0x121)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x1ba02d(0x127)](
                  (_0x2ad1a1) => _0x2ad1a1["step"] === x,
                )),
                (selections[objIndex][_0x1ba02d(0x18b)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x1ba02d(0x214)] = x)));
        }),
      $(steps[x])
        [_0xc979a9(0x179)](_0xc979a9(0x1aa))
        [_0xc979a9(0x179)](_0xc979a9(0x1ae))
        ["each"](function (_0x314da8) {
          const _0x11610e = _0xc979a9;
          if ($(this)[_0x11610e(0x153)]() !== "") {
            let _0x5749c2 = $(this)["val"]()[_0x11610e(0x171)],
              _0x418828 = $(this)["data"]("min-character")
                ? $(this)[_0x11610e(0x163)](_0x11610e(0x159))
                : 0x0;
            if ($(this)[_0x11610e(0x163)]("phone-autoformat")) {
              var _0x14d366 = phoneAutoFormat(
                $(this)[_0x11610e(0x163)](_0x11610e(0x1f3)),
              );
              $(this)[_0x11610e(0x153)](_0x14d366($(this)[_0x11610e(0x153)]()));
            }
            phoneValidation($(this)[_0x11610e(0x153)](), _0x5749c2, _0x418828)
              ? (empReqTel = empReqTel[_0x11610e(0x1d6)](
                  (_0x211b71) => _0x211b71[_0x11610e(0x10b)] !== _0x314da8,
                ))
              : empReqTel["push"]({ input: _0x314da8 });
          } else
            !empReqTel[_0x11610e(0x179)](
              (_0x211505) => _0x211505[_0x11610e(0x10b)] === _0x314da8,
            ) && empReqTel[_0x11610e(0x121)]({ input: _0x314da8 }),
              unfilledArr[_0x11610e(0x121)]({
                input: $(this)["attr"](_0x11610e(0x1f6)),
              });
          empReqTel[_0x11610e(0x171)] === 0x0
            ? (telFilled = !![])
            : (telFilled = ![]);
        }),
      $(steps[x])
        [_0xc979a9(0x179)](_0xc979a9(0x1aa))
        ["find"](_0xc979a9(0x1e3))
        [_0xc979a9(0x1e9)](function (_0x508c8d) {
          const _0x5d526f = _0xc979a9;
          (skipTo = undefined),
            $(this)
              [_0x5d526f(0x106)](_0x5d526f(0x1c6))
              [_0x5d526f(0x163)](_0x5d526f(0x157)) !== "" &&
              (skipTo = $(this)
                [_0x5d526f(0x106)](_0x5d526f(0x1c6))
                [_0x5d526f(0x163)](_0x5d526f(0x157))),
            $(this)
              [_0x5d526f(0x106)](_0x5d526f(0x15d))
              ["attr"](_0x5d526f(0x1fe)) &&
              ((answer = $(this)
                [_0x5d526f(0x106)](_0x5d526f(0x15d))
                [_0x5d526f(0x10a)](_0x5d526f(0x1fe))),
              (selections = selections["filter"](
                (_0x582e4f) => _0x582e4f[_0x5d526f(0x149)] !== x,
              )),
              selections[_0x5d526f(0x121)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x5d526f(0x121)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x5d526f(0x127)](
                  (_0x25649e) => _0x25649e[_0x5d526f(0x149)] === x,
                )),
                (selections[objIndex][_0x5d526f(0x18b)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0xc979a9(0x179)](_0xc979a9(0x1aa))
        ["find"](_0xc979a9(0x1d9))
        [_0xc979a9(0x1e9)](function (_0x4be337) {
          const _0x49da4d = _0xc979a9;
          $(this)["val"]() !== ""
            ? (empReqFile = empReqFile[_0x49da4d(0x1d6)](
                (_0x41781f) => _0x41781f["input"] !== _0x4be337,
              ))
            : (!empReqFile[_0x49da4d(0x179)](
                (_0x2d3fd9) => _0x2d3fd9[_0x49da4d(0x10b)] === _0x4be337,
              ) && empReqFile["push"]({ input: _0x4be337 }),
              unfilledArr[_0x49da4d(0x121)]({
                input: $(this)["attr"](_0x49da4d(0x1f6)),
              })),
            empReqFile[_0x49da4d(0x171)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0xc979a9(0x179)](_0xc979a9(0x1aa))
        [_0xc979a9(0x179)](":input[type=\x22file\x22]")
        [_0xc979a9(0x1e9)](function (_0x4cb2dd) {
          const _0x557757 = _0xc979a9;
          (skipTo = undefined),
            $(this)
              [_0x557757(0x106)](_0x557757(0x1c6))
              ["data"](_0x557757(0x157)) !== "" &&
              (skipTo = $(this)
                [_0x557757(0x106)](_0x557757(0x1c6))
                [_0x557757(0x163)](_0x557757(0x157))),
            $(this)
              [_0x557757(0x106)]("[data-go-to]")
              [_0x557757(0x10a)](_0x557757(0x1fe)) &&
              ((answer = $(this)
                ["parents"](_0x557757(0x15d))
                [_0x557757(0x10a)](_0x557757(0x1fe))),
              (selections = selections[_0x557757(0x1d6)](
                (_0x2430c2) => _0x2430c2[_0x557757(0x149)] !== x,
              )),
              selections[_0x557757(0x121)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections["findIndex"](
                  (_0x40f8e7) => _0x40f8e7[_0x557757(0x149)] === x,
                )),
                (selections[objIndex][_0x557757(0x18b)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        ["find"](_0xc979a9(0x1aa))
        [_0xc979a9(0x179)](_0xc979a9(0x139))
        [_0xc979a9(0x1e9)](function (_0x180d35) {
          const _0x51306b = _0xc979a9;
          console[_0x51306b(0x168)]($(this)[_0x51306b(0x153)]()),
            $(this)[_0x51306b(0x153)]() !== null && $(this)["val"]() !== ""
              ? (empReqSelect = empReqSelect[_0x51306b(0x1d6)](
                  (_0x400ef0) => _0x400ef0[_0x51306b(0x10b)] !== _0x180d35,
                ))
              : (!empReqSelect["find"](
                  (_0x1d98e9) => _0x1d98e9["input"] === _0x180d35,
                ) && empReqSelect["push"]({ input: _0x180d35 }),
                unfilledArr["push"]({
                  input: $(this)[_0x51306b(0x10a)](_0x51306b(0x1f6)),
                })),
            empReqSelect[_0x51306b(0x171)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        ["find"](".active-answer-card")
        [_0xc979a9(0x179)](_0xc979a9(0x10c))
        [_0xc979a9(0x1e9)](function (_0x4edfe0) {
          const _0x43b088 = _0xc979a9;
          (skipTo = undefined),
            $(this)
              [_0x43b088(0x106)]("[data-skip-to]")
              ["data"](_0x43b088(0x157)) !== "" &&
              (skipTo = $(this)
                [_0x43b088(0x106)](_0x43b088(0x1c6))
                [_0x43b088(0x163)](_0x43b088(0x157))),
            $(this)
              [_0x43b088(0x106)](_0x43b088(0x15d))
              [_0x43b088(0x10a)](_0x43b088(0x1fe)) &&
              ((answer = $(this)
                [_0x43b088(0x106)]("[data-go-to]")
                ["attr"](_0x43b088(0x1fe))),
              (selections = selections["filter"](
                (_0x40d12d) => _0x40d12d[_0x43b088(0x149)] !== x,
              )),
              selections[_0x43b088(0x121)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x43b088(0x121)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x6d2a32) => _0x6d2a32[_0x43b088(0x149)] === x,
                )),
                (selections[objIndex][_0x43b088(0x18b)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0xc979a9(0x179)](_0xc979a9(0x1aa))
        [_0xc979a9(0x179)](_0xc979a9(0x1eb))
        [_0xc979a9(0x1e9)](function (_0x2ae7ba) {
          const _0xbd9a39 = _0xc979a9;
          let _0x10b078 = $(this)[_0xbd9a39(0x153)]()[_0xbd9a39(0x171)],
            _0x2e40bb = $(this)[_0xbd9a39(0x163)](_0xbd9a39(0x159))
              ? $(this)["data"]("min-character")
              : 0x0;
          $(this)[_0xbd9a39(0x153)]() !== "" && _0x10b078 >= _0x2e40bb
            ? (empReqTextarea = empReqTextarea[_0xbd9a39(0x1d6)](
                (_0x83d0e5) => _0x83d0e5[_0xbd9a39(0x10b)] !== _0x2ae7ba,
              ))
            : (!empReqTextarea[_0xbd9a39(0x179)](
                (_0x7d7bdc) => _0x7d7bdc["input"] === _0x2ae7ba,
              ) && empReqTextarea[_0xbd9a39(0x121)]({ input: _0x2ae7ba }),
              unfilledArr[_0xbd9a39(0x121)]({
                input: $(this)["attr"]("name"),
              })),
            empReqTextarea[_0xbd9a39(0x171)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0xc979a9(0x179)](_0xc979a9(0x1aa))
        [_0xc979a9(0x179)](_0xc979a9(0xfa))
        ["each"](function (_0x3b75bf) {
          const _0x296bd2 = _0xc979a9;
          (skipTo = undefined),
            $(this)
              [_0x296bd2(0x106)]("[data-skip-to]")
              [_0x296bd2(0x163)](_0x296bd2(0x157)) !== "" &&
              (skipTo = $(this)
                [_0x296bd2(0x106)](_0x296bd2(0x1c6))
                [_0x296bd2(0x163)]("skip-to")),
            $(this)
              [_0x296bd2(0x106)](_0x296bd2(0x15d))
              [_0x296bd2(0x10a)]("data-go-to") &&
              ((answer = $(this)
                [_0x296bd2(0x106)](_0x296bd2(0x15d))
                [_0x296bd2(0x10a)](_0x296bd2(0x1fe))),
              (selections = selections["filter"](
                (_0x85da85) => _0x85da85[_0x296bd2(0x149)] !== x,
              )),
              selections[_0x296bd2(0x121)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x296bd2(0x121)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x296bd2(0x127)](
                  (_0x483071) => _0x483071[_0x296bd2(0x149)] === x,
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0xc979a9(0x179)](_0xc979a9(0x1aa))
        [_0xc979a9(0x179)](_0xc979a9(0x1d4))
        ["each"](function (_0x12abbf) {
          const _0x4d1214 = _0xc979a9;
          $(this)[_0x4d1214(0x153)]() !== ""
            ? validateEmail(
                $(this)[_0x4d1214(0x153)](),
                $(this)[_0x4d1214(0x163)](_0x4d1214(0x105)),
                $(this)["attr"](_0x4d1214(0x1f6)),
              )
            : ((emailFilled = ![]),
              unfilledArr["push"]({
                input: $(this)[_0x4d1214(0x10a)](_0x4d1214(0x1f6)),
              }));
        }),
      $(steps[x])
        [_0xc979a9(0x179)](_0xc979a9(0x1aa))
        [_0xc979a9(0x179)](_0xc979a9(0x200))
        ["each"](function (_0x40f144) {
          const _0x303f6e = _0xc979a9;
          (skipTo = undefined),
            $(this)
              ["parents"](_0x303f6e(0x1c6))
              [_0x303f6e(0x163)](_0x303f6e(0x157)) !== "" &&
              (skipTo = $(this)
                [_0x303f6e(0x106)](_0x303f6e(0x1c6))
                [_0x303f6e(0x163)](_0x303f6e(0x157))),
            $(this)
              [_0x303f6e(0x106)](_0x303f6e(0x15d))
              [_0x303f6e(0x10a)]("data-go-to") &&
              ((answer = $(this)
                [_0x303f6e(0x106)](_0x303f6e(0x15d))
                ["attr"](_0x303f6e(0x1fe))),
              (selections = selections[_0x303f6e(0x1d6)](
                (_0x43d0e6) => _0x43d0e6[_0x303f6e(0x149)] !== x,
              )),
              selections[_0x303f6e(0x121)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0x303f6e(0x127)](
                  (_0x191b76) => _0x191b76[_0x303f6e(0x149)] === x,
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x303f6e(0x214)] = x)));
        });
  }
  $(steps[x])["find"](":input[type=\x22radio\x22]")["is"](_0xc979a9(0x12c)) &&
    ((selArr = []),
    $(steps)
      ["find"](_0xc979a9(0x1f0))
      ["each"](function (_0x13ecea, _0x1deafc) {
        const _0x2422c6 = _0xc979a9;
        selArr[_0x2422c6(0x121)]({
          selected: $(this)[_0x2422c6(0x163)](_0x2422c6(0x1c1)),
        });
      }),
    (selString = []),
    selArr[_0xc979a9(0x174)]((_0x2b5b21) =>
      selString[_0xc979a9(0x121)](_0x2b5b21[_0xc979a9(0x1c1)]),
    ),
    $(steps[x])
      [_0xc979a9(0x179)](_0xc979a9(0x1aa))
      ["find"](":input[type=\x27radio\x27]:checked")
      [_0xc979a9(0x1e9)](function () {
        const _0x4dbb43 = _0xc979a9;
        skipTo = undefined;
        if (
          $(this)
            [_0x4dbb43(0x106)]("[data-skip-to]")
            [_0x4dbb43(0x163)]("skip-to")
        )
          skipTo = $(this)
            [_0x4dbb43(0x106)]("[data-skip-to]")
            [_0x4dbb43(0x163)]("skip-to");
        else
          $(this)[_0x4dbb43(0x163)](_0x4dbb43(0x157)) &&
            (skipTo = $(this)["data"](_0x4dbb43(0x157)));
        selections = selections[_0x4dbb43(0x1d6)](
          (_0xc1e854) => _0xc1e854[_0x4dbb43(0x149)] !== x,
        );
        if ($(this)["data"](_0x4dbb43(0x1a4)))
          (answer = $(this)[_0x4dbb43(0x10a)](_0x4dbb43(0x1fe))),
            console[_0x4dbb43(0x168)](answer, selections),
            selections[_0x4dbb43(0x121)]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0x4dbb43(0x121)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0x4dbb43(0x127)](
                (_0x1d396c) => _0x1d396c[_0x4dbb43(0x149)] === x,
              )),
              (selections[objIndex][_0x4dbb43(0x18b)] = parseInt(skipTo) - 0x1),
              (selections[objIndex]["backTo"] = x));
        else
          $(this)["parents"](_0x4dbb43(0x15d))[_0x4dbb43(0x163)]("go-to") &&
            ((answer = $(this)
              [_0x4dbb43(0x106)](_0x4dbb43(0x15d))
              [_0x4dbb43(0x163)](_0x4dbb43(0x1a4))),
            selections[_0x4dbb43(0x121)]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0x4dbb43(0x121)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0x4dbb43(0x127)](
                (_0x1578c6) => _0x1578c6[_0x4dbb43(0x149)] === x,
              )),
              (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
              (selections[objIndex]["backTo"] = x)));
      }),
    logicExtra
      ? ($(steps[x])
          [_0xc979a9(0x179)](".active-answer-card")
          [_0xc979a9(0x179)]("[data-radio-skip]:visible")
          ["data"](_0xc979a9(0x1e0)) === !![] ||
          $(steps[x])
            [_0xc979a9(0x179)](_0xc979a9(0x118))
            ["data"](_0xc979a9(0x1e0)) === !![]) &&
        skip &&
        selections[_0xc979a9(0x1d6)]((_0x49f101) => _0x49f101["step"] === x)[
          _0xc979a9(0x171)
        ] > 0x0 &&
        textareaLength === 0x0 &&
        textInputLength === 0x0 &&
        emailInputLength === 0x0 &&
        checkboxInputLength === 0x0 &&
        setTimeout(function () {
          (next = !![]), nextStep(), selectionQuiz();
        }, $(steps[x])["find"]("[data-radio-delay]")[_0xc979a9(0x163)]("radio-delay"))
      : $(steps[x])
          [_0xc979a9(0x179)](_0xc979a9(0x165))
          [_0xc979a9(0x163)](_0xc979a9(0x1e0)) === !![] &&
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
            [_0xc979a9(0x179)]("[data-radio-delay]")
            ["data"](_0xc979a9(0x1b5)),
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
  const _0xe252be = _0x316744;
  $(_0xe252be(0x21a))[_0xe252be(0x186)](),
    unfilledArr[_0xe252be(0x171)] > 0x0 &&
      unfilledArr[_0xe252be(0x174)](function (_0x15033f) {
        const _0x1075fd = _0xe252be;
        $(_0x1075fd(0x15f) + _0x15033f[_0x1075fd(0x10b)] + "\x22]")
          [_0x1075fd(0x108)]("[data-text=\x22error-message\x22]")
          [_0x1075fd(0x15b)](),
          $(_0x1075fd(0x15f) + _0x15033f[_0x1075fd(0x10b)] + "\x22]")
            [_0x1075fd(0x106)]()
            [_0x1075fd(0x17f)](_0x1075fd(0x21a))
            ["fadeIn"](),
          $("textarea[name=\x22" + _0x15033f["input"] + "\x22]")
            [_0x1075fd(0x108)](_0x1075fd(0x21a))
            [_0x1075fd(0x15b)](),
          $(_0x1075fd(0x16e) + _0x15033f["input"] + "\x22]")
            [_0x1075fd(0x108)](_0x1075fd(0x21a))
            [_0x1075fd(0x15b)]();
      });
}
function resetInputErrorMessage(_0x52588d) {
  const _0x2ab83b = _0x316744;
  $("input[name=\x22" + _0x52588d + "\x22]")
    [_0x2ab83b(0x108)](_0x2ab83b(0x21a))
    ["hide"](),
    $(_0x2ab83b(0x15f) + _0x52588d + "\x22]")
      [_0x2ab83b(0x106)]()
      ["children"](_0x2ab83b(0x21a))
      [_0x2ab83b(0x186)](),
    $(_0x2ab83b(0x198) + _0x52588d + "\x22]")
      [_0x2ab83b(0x108)]("[data-text=\x22error-message\x22]")
      [_0x2ab83b(0x186)](),
    $(_0x2ab83b(0x16e) + _0x52588d + "\x22]")
      [_0x2ab83b(0x108)]("[data-text=\x22error-message\x22]")
      [_0x2ab83b(0x186)]();
}
function increaseCurstep() {
  const _0x548dfc = _0x316744;
  countCard
    ? ((curStep = curStep + 0x1),
      $(_0x548dfc(0x21e))["text"](steps[_0x548dfc(0x171)]))
    : $(steps[x])[_0x548dfc(0x163)]("card")
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    $(_0x548dfc(0x218))[_0x548dfc(0x1fd)](curStep);
}
function decreaseCurstep() {
  const _0x5de1fa = _0x316744;
  countCard
    ? ((curStep = curStep - 0x1), $(_0x5de1fa(0x21e))["text"](steps["length"]))
    : $(steps[x])["data"](_0x5de1fa(0x1f8))
      ? (curStep = curStep - 0x0)
      : (curStep = curStep - 0x1),
    $(_0x5de1fa(0x218))[_0x5de1fa(0x1fd)](curStep);
}
$(_0x316744(0x133))["on"](_0x316744(0x202), function (_0x3f4910) {
  const _0x859258 = _0x316744;
  console[_0x859258(0x168)]("clicked\x20enter"),
    $(this)["data"](_0x859258(0x1bf)) &&
      (redirectTo = $(this)[_0x859258(0x163)](_0x859258(0x1bf))),
    !$(this)[_0x859258(0x163)](_0x859258(0x170)) &&
      (newTab = $(this)["data"]("new-tab")),
    (successCard = $(this)[_0x859258(0x163)](_0x859258(0x1b0))),
    _0x3f4910[_0x859258(0x169)](),
    _0x3f4910["stopPropagation"](),
    logicExtra &&
      ($(this)[_0x859258(0x162)](_0x859258(0x12a), !![]),
      $(steps)["find"](_0x859258(0x11c))[_0x859258(0x162)]("required", ![])),
    localStorage["removeItem"](_0x859258(0x1ca)),
    fill
      ? ($(this)[_0x859258(0x163)]("wait")
          ? $(this)["val"]($(this)["data"](_0x859258(0x1bc)))
          : ($(this)[_0x859258(0x153)](_0x859258(0x197)),
            $(this)[_0x859258(0x1fd)](_0x859258(0x197))),
        $("[data-form=\x22multistep\x22]")[_0x859258(0x207)](),
        $(_0x859258(0x1a8))[_0x859258(0x171)] > 0x0 &&
          grecaptcha[_0x859258(0x1cd)]()[_0x859258(0x171)] === 0x0 &&
          (form[_0x859258(0x179)](_0x859258(0x133))[_0x859258(0x1fd)](
            oldSubmitText,
          ),
          form[_0x859258(0x179)]("[data-form=\x22submit-btn\x22]")["val"](
            oldSubmitText,
          )),
        customError &&
          $("[data-text=\x22error-message\x22]")[_0x859258(0x186)]())
      : customError && displayErrorMessage();
});
function nextStep() {
  const _0x4b4b13 = _0x316744;
  customError
    ? ($(_0x4b4b13(0x21a))[_0x4b4b13(0x186)](),
      fill
        ? (x++,
          increaseCurstep(),
          (progress = x),
          x <= steps["length"] - 0x1 &&
            (updateStep(), memory && saveFilledInput()))
        : displayErrorMessage())
    : (x++,
      increaseCurstep(),
      x > progress && (progress = x),
      x <= steps[_0x4b4b13(0x171)] - 0x1 &&
        (updateStep(), memory && saveFilledInput())),
    andLogic();
}
function backStep() {
  const _0x1f87f8 = _0x316744;
  customError && $(_0x1f87f8(0x21a))[_0x1f87f8(0x186)](),
    decreaseCurstep(),
    x > 0x0 &&
      ($(progressbar[x])[_0x1f87f8(0x20a)](_0x1f87f8(0x19d)),
      selections[_0x1f87f8(0x1d6)](
        (_0x4ab19d) => _0x4ab19d[_0x1f87f8(0x18b)] === x,
      )[_0x1f87f8(0x171)] > 0x0
        ? (x = parseInt(
            getSafe(
              () =>
                selections[_0x1f87f8(0x1d6)](
                  (_0x212b43) => _0x212b43[_0x1f87f8(0x18b)] === x,
                )[0x0][_0x1f87f8(0x214)],
            ),
          ))
        : x--,
      updateStep()),
    ($(steps[x])
      [_0x1f87f8(0x179)](_0x1f87f8(0x165))
      [_0x1f87f8(0x163)](_0x1f87f8(0x1e0)) === !![] ||
      $(steps[x])
        [_0x1f87f8(0x179)](".active-answer-card")
        ["find"](_0x1f87f8(0x165))
        [_0x1f87f8(0x163)](_0x1f87f8(0x1e0)) === !![] ||
      $(steps[x])
        [_0x1f87f8(0x179)](_0x1f87f8(0x118))
        [_0x1f87f8(0x163)](_0x1f87f8(0x1e0)) === !![]) &&
      ((all_data = all_data[_0x1f87f8(0x1d6)](
        (_0x2ed89a) =>
          _0x2ed89a[_0x1f87f8(0x1c4)] !==
          $(steps[x])
            [_0x1f87f8(0x179)]("input[type=\x22radio\x22]:checked")
            [_0x1f87f8(0x10a)](_0x1f87f8(0x1f6)),
      )),
      $(
        _0x1f87f8(0x17d) +
          $(steps[x])
            [_0x1f87f8(0x179)](_0x1f87f8(0x10d))
            [_0x1f87f8(0x10a)]("name") +
          "\x22]",
      )[_0x1f87f8(0x186)](),
      $(steps[x])
        [_0x1f87f8(0x179)](_0x1f87f8(0x189))
        ["prop"](_0x1f87f8(0x114), ![]),
      $(steps[x])
        [_0x1f87f8(0x179)](_0x1f87f8(0x1c2))
        ["removeClass"](_0x1f87f8(0x20d)),
      validation());
}
weightedSelectionRange &&
  $(_0x316744(0x1c0))[_0x316744(0x1e9)](function () {
    const _0x490ca4 = _0x316744;
    $(this)["append"](
      "<div\x20data-range=\x22selection\x22\x20style=\x22display:none\x20!important\x22>" +
        $(this)[_0x490ca4(0x163)](_0x490ca4(0x1da)) +
        _0x490ca4(0x14d),
    );
  });
function selectionQuiz() {
  const _0x1e6347 = _0x316744;
  if ($(this)[_0x1e6347(0x179)](_0x1e6347(0x1ac))) {
    $(_0x1e6347(0x1c0))[_0x1e6347(0x186)](), $(_0x1e6347(0x208))["hide"]();
    if (weightedSelection) {
      (selTotal = 0x0),
        selArr[_0x1e6347(0x174)](function (_0x3dd0bc) {
          const _0x84459b = _0x1e6347;
          selTotal = selTotal + _0x3dd0bc[_0x84459b(0x1c1)];
        }),
        $(_0x1e6347(0x161))[_0x1e6347(0x1fd)](selTotal);
      if (
        $("[data-selection=\x22" + selTotal + "\x22]")[_0x1e6347(0x171)] > 0x0
      )
        $("[data-selection=\x22" + selTotal + "\x22]")[_0x1e6347(0x15b)]();
      else
        $(_0x1e6347(0x15c) + selTotal + ")")
          ? $(_0x1e6347(0x15c) + selTotal + ")")
              [_0x1e6347(0x1c3)](_0x1e6347(0x1c0))
              ["eq"](0x0)
              ["show"]()
          : $(_0x1e6347(0x152))[_0x1e6347(0x15b)]();
    } else {
      let _0x472689 = -0x1;
      $(_0x1e6347(0x1c0))[_0x1e6347(0x1e9)](function (_0x4b64c9) {
        const _0x17d492 = _0x1e6347;
        $($(_0x17d492(0x1c0))[_0x4b64c9])
          [_0x17d492(0x163)](_0x17d492(0x1da))
          [_0x17d492(0x148)](selString[_0x17d492(0x146)]()) &&
          (_0x472689 = _0x4b64c9);
      }),
        _0x472689 > -0x1
          ? $($(_0x1e6347(0x1c0))[_0x472689])[_0x1e6347(0x15b)]()
          : $(_0x1e6347(0x152))["fadeIn"]();
    }
  }
}
function triggerInputAllData() {
  const _0x168988 = _0x316744;
  if (savedFilledInput && memory)
    savedFilledInput[_0x168988(0x174)]((_0x2d2493) => {
      const _0x32dc88 = _0x168988;
      var _0x477f59 = $(
          _0x32dc88(0x15f) +
            _0x2d2493[_0x32dc88(0x122)] +
            _0x32dc88(0x18f) +
            _0x2d2493[_0x32dc88(0x154)] +
            "\x22]",
        ),
        _0x45d5e7 = $(_0x32dc88(0x15f) + _0x2d2493["inputName"] + "\x22]");
      console[_0x32dc88(0x168)](
        _0x477f59["parents"]("[data-radio-skip]")[_0x32dc88(0x163)](
          "radio-skip",
        ),
      );
      if (_0x477f59[_0x32dc88(0x10a)](_0x32dc88(0x155)) !== _0x32dc88(0x1e1)) {
        if (
          _0x477f59[_0x32dc88(0x10a)](_0x32dc88(0x155)) === _0x32dc88(0x1bd) &&
          !_0x477f59[_0x32dc88(0x106)](_0x32dc88(0x115))["data"](
            _0x32dc88(0x1e0),
          )
        )
          _0x477f59["click"](),
            _0x477f59[_0x32dc88(0x108)](_0x32dc88(0x150))["addClass"](
              "w--redirected-checked",
            ),
            _0x477f59["trigger"](_0x32dc88(0x10b));
        else
          _0x2d2493[_0x32dc88(0x154)] === "on"
            ? (_0x45d5e7["click"](),
              _0x45d5e7[_0x32dc88(0x108)](_0x32dc88(0x172))["addClass"](
                "w--redirected-checked",
              ),
              _0x45d5e7[_0x32dc88(0x1f5)](_0x32dc88(0x10b)))
            : (console[_0x32dc88(0x168)](
                _0x2d2493[_0x32dc88(0x122)],
                _0x2d2493["value"],
              ),
              _0x45d5e7[_0x32dc88(0x153)](_0x2d2493[_0x32dc88(0x154)]),
              _0x45d5e7[_0x32dc88(0x153)](_0x2d2493[_0x32dc88(0x154)]),
              $(_0x32dc88(0x21b) + _0x2d2493[_0x32dc88(0x154)] + "\x22]")[
                "prop"
              ](_0x32dc88(0x1c1), !![]),
              _0x45d5e7[_0x32dc88(0x1f5)](_0x32dc88(0x10b)),
              _0x45d5e7[_0x32dc88(0x1f5)](_0x32dc88(0x204)));
      }
    });
  else
    _params &&
      (getParams(),
      searchQ[_0x168988(0x174)]((_0x5a6f35) => {
        const _0x42b8c8 = _0x168988;
        if (
          $(
            "input[name=\x22" +
              _0x5a6f35[_0x42b8c8(0x122)] +
              _0x42b8c8(0x18f) +
              _0x5a6f35[_0x42b8c8(0x154)] +
              "\x22]",
          )["attr"](_0x42b8c8(0x155)) !== "file"
        ) {
          if (
            $(
              _0x42b8c8(0x15f) +
                _0x5a6f35[_0x42b8c8(0x173)] +
                _0x42b8c8(0x18f) +
                _0x5a6f35[_0x42b8c8(0x153)] +
                "\x22]",
            )[_0x42b8c8(0x10a)](_0x42b8c8(0x155)) === _0x42b8c8(0x1bd)
          )
            $(
              _0x42b8c8(0x15f) +
                _0x5a6f35[_0x42b8c8(0x173)] +
                _0x42b8c8(0x18f) +
                _0x5a6f35[_0x42b8c8(0x153)] +
                "\x22]",
            )[_0x42b8c8(0x202)](),
              $(
                "input[name=\x22" +
                  _0x5a6f35[_0x42b8c8(0x173)] +
                  _0x42b8c8(0x18f) +
                  _0x5a6f35["val"] +
                  "\x22]",
              )
                [_0x42b8c8(0x108)](_0x42b8c8(0x150))
                ["addClass"](_0x42b8c8(0x20d)),
              $(
                "input[name=\x22" +
                  _0x5a6f35[_0x42b8c8(0x173)] +
                  _0x42b8c8(0x18f) +
                  _0x5a6f35[_0x42b8c8(0x153)] +
                  "\x22]",
              )[_0x42b8c8(0x1f5)](_0x42b8c8(0x10b));
          else
            _0x5a6f35[_0x42b8c8(0x153)] === "on"
              ? ($("input[name=\x22" + _0x5a6f35[_0x42b8c8(0x173)] + "\x22]")[
                  _0x42b8c8(0x202)
                ](),
                $(_0x42b8c8(0x15f) + _0x5a6f35[_0x42b8c8(0x173)] + "\x22]")
                  [_0x42b8c8(0x108)](".w-checkbox-input")
                  [_0x42b8c8(0x185)](_0x42b8c8(0x20d)),
                $(_0x42b8c8(0x15f) + _0x5a6f35[_0x42b8c8(0x173)] + "\x22]")[
                  _0x42b8c8(0x1f5)
                ](_0x42b8c8(0x10b)))
              : ($(_0x42b8c8(0x15f) + _0x5a6f35[_0x42b8c8(0x173)] + "\x22]")[
                  _0x42b8c8(0x153)
                ](_0x5a6f35[_0x42b8c8(0x153)]),
                $(_0x42b8c8(0x198) + _0x5a6f35[_0x42b8c8(0x173)] + "\x22]")[
                  _0x42b8c8(0x153)
                ](_0x5a6f35[_0x42b8c8(0x153)]),
                $(_0x42b8c8(0x16e) + _0x5a6f35[_0x42b8c8(0x173)] + "\x22]")
                  [_0x42b8c8(0x179)](
                    _0x42b8c8(0x21b) + _0x5a6f35[_0x42b8c8(0x153)] + "\x22]",
                  )
                  [_0x42b8c8(0x162)](_0x42b8c8(0x1c1), !![]),
                $("input[name=\x22" + _0x5a6f35[_0x42b8c8(0x173)] + "\x22]")[
                  _0x42b8c8(0x1f5)
                ](_0x42b8c8(0x10b)),
                $("input[name=\x22" + _0x5a6f35[_0x42b8c8(0x173)] + "\x22]")[
                  "trigger"
                ](_0x42b8c8(0x204)));
        }
      }));
}
$(_0x316744(0x11b))["on"](_0x316744(0x202), function () {
  (next = !![]), nextStep(), selectionQuiz();
}),
  $(_0x316744(0x1e7))["on"](_0x316744(0x202), function () {
    (next = ![]), (back = !![]), backStep();
  }),
  $(steps)
    ["find"](_0x316744(0x11c))
    [_0x316744(0x190)](_0x316744(0x19c))
    ["on"](_0x316744(0x10b), function (_0x190d17) {
      validation(), andLogic();
    }),
  $(steps)
    ["find"](_0x316744(0x189))
    ["on"](_0x316744(0x202), function () {
      (skip = !![]), validation();
    });
$("[data-clickable-all]")["data"]("clickable-all")
  ? $("[data-form=\x22custom-progress-indicator\x22]")["removeClass"](
      "disabled",
    )
  : $(_0x316744(0x1c5))[_0x316744(0x185)](_0x316744(0x211));
function clickableIndicator() {
  const _0x26844e = _0x316744;
  $(_0x26844e(0x13f))[_0x26844e(0x163)](_0x26844e(0x17c)) &&
    ($("[data-form=\x22progress-indicator\x22]")[_0x26844e(0x20a)]("current"),
    $(_0x26844e(0x13f))[_0x26844e(0x163)](_0x26844e(0x110))
      ? ((x = $(this)["index"]()), updateStep())
      : $(this)[_0x26844e(0x18e)]() <= progress &&
        ((x = $(this)["index"]()), updateStep())),
    $(_0x26844e(0x218))[_0x26844e(0x1fd)](x + 0x1);
}
$("[data-form=\x22custom-progress-indicator\x22]")["on"](
  "click",
  clickableIndicator,
);
$(_0x316744(0x164))[_0x316744(0x163)]("debug-mode") &&
  ($(_0x316744(0x15d))[_0x316744(0x1e9)](function () {
    const _0x260a7f = _0x316744;
    $(this)[_0x260a7f(0x1a7)](
      "<br>Data\x20Go\x20To\x20=\x20",
      $(this)[_0x260a7f(0x163)](_0x260a7f(0x1a4)),
    );
  }),
  $(_0x316744(0x1fa))["each"](function () {
    const _0x7d327 = _0x316744;
    $(this)[_0x7d327(0x1a7)](_0x7d327(0x210), $(this)["data"](_0x7d327(0x1fc)));
  }));
function _0x1742(_0x58c3be, _0x1675cb) {
  const _0x107d3d = _0x107d();
  return (
    (_0x1742 = function (_0x17422e, _0x326d77) {
      _0x17422e = _0x17422e - 0xf9;
      let _0x3e9e76 = _0x107d3d[_0x17422e];
      return _0x3e9e76;
    }),
    _0x1742(_0x58c3be, _0x1675cb)
  );
}
function resetFormly() {
  const _0x2d3b81 = _0x316744;
  $(_0x2d3b81(0x164))[_0x2d3b81(0x1f5)](_0x2d3b81(0xfc)),
    $(_0x2d3b81(0x164))
      [_0x2d3b81(0x106)]()
      [_0x2d3b81(0x179)](_0x2d3b81(0x1e5))
      [_0x2d3b81(0x186)](),
    (x = 0x0),
    updateStep(),
    $("[data-form=\x22multistep\x22]")[_0x2d3b81(0x147)](),
    $(_0x2d3b81(0x133))["text"](oldSubmitText),
    $("[data-form=\x22submit-btn\x22]")[_0x2d3b81(0x153)](oldSubmitText),
    $(_0x2d3b81(0x218))["text"](0x1),
    $(_0x2d3b81(0x164))
      ["find"](_0x2d3b81(0x120))
      [_0x2d3b81(0x108)](_0x2d3b81(0x172))
      [_0x2d3b81(0x20a)](_0x2d3b81(0x20d));
}
$(document)[_0x316744(0x1c9)](function (_0x44f9a1, _0xb25afd, _0x5cf8a1) {
  const _0x3766f7 = _0x316744;
  if (_0x5cf8a1["url"]["includes"](_0x3766f7(0x193))) {
    const _0x1e4998 = _0xb25afd[_0x3766f7(0x1b4)] === 0xc8,
      _0x3a1e09 = _0x3766f7(0x102);
    redirectTo &&
      _0x1e4998 &&
      (newTab
        ? window[_0x3766f7(0x126)](redirectTo, _0x3766f7(0x13d))
        : setTimeout(() => {
            location["href"] = redirectTo;
          }, redirectDelay)),
      _0x1e4998 &&
        successCard !== "" &&
        $(_0x3766f7(0x116) + successCard + "\x22]")[_0x3766f7(0x15b)](),
      _0x1e4998 &&
        formReset &&
        setTimeout(() => {
          resetFormly();
        }, resetDelay),
      !_0x1e4998 &&
        ($(_0x3766f7(0x133))[_0x3766f7(0x153)](_0x3766f7(0x197)),
        $(_0x3766f7(0x133))["text"](_0x3766f7(0x197)));
  }
}),
  $(_0x316744(0x17b))["on"]("click", function () {
    const _0x5f0a25 = _0x316744;
    var _0x1724b4 = $(this)
      [_0x5f0a25(0x1c3)]()
      [_0x5f0a25(0x179)](_0x5f0a25(0x112))
      ["data"](_0x5f0a25(0x1cf));
    setTimeout(function () {
      $("input[name=\x22" + _0x1724b4 + "\x22]")["focus"]();
    }, 0x64),
      (back = !![]),
      (x = $(this)[_0x5f0a25(0x163)](_0x5f0a25(0x1cb)) - 0x1),
      updateStep(),
      countCard
        ? ((curStep = x + 0x1),
          $("[data-text=\x22total-steps\x22]")["text"](steps[_0x5f0a25(0x171)]))
        : $(steps[x])["data"]("card")
          ? (curStep = x + 0x0)
          : (curStep = x + 0x1),
      $(_0x5f0a25(0x218))[_0x5f0a25(0x1fd)](curStep),
      (back = ![]);
  }),
  $("[data-btn=\x22reset\x22]")["on"](_0x316744(0x202), function () {
    const _0x7d8d8c = _0x316744;
    $(_0x7d8d8c(0x164))[_0x7d8d8c(0x1f5)](_0x7d8d8c(0xfc));
    let _0x3e439e = $(this);
    $(this)["text"](_0x7d8d8c(0x197)),
      setTimeout(function () {
        const _0x2a33e8 = _0x7d8d8c;
        $(_0x3e439e)[_0x2a33e8(0x1fd)](oldResetText),
          $(_0x3e439e)[_0x2a33e8(0x106)](_0x2a33e8(0x1e5))["hide"](),
          (x = 0x0),
          updateStep(),
          $(_0x2a33e8(0x164))["show"](),
          $("[data-form=\x22submit-btn\x22]")[_0x2a33e8(0x1fd)](oldSubmitText),
          $(_0x2a33e8(0x133))[_0x2a33e8(0x153)](oldSubmitText),
          $(_0x3e439e)[_0x2a33e8(0x153)](oldSubmitText),
          $(_0x2a33e8(0x218))[_0x2a33e8(0x1fd)](0x1),
          $(_0x2a33e8(0x164))
            [_0x2a33e8(0x179)](_0x2a33e8(0x120))
            ["siblings"](_0x2a33e8(0x172))
            [_0x2a33e8(0x20a)](_0x2a33e8(0x20d));
      }, resetDelay);
  }),
  $(_0x316744(0x183))["on"](_0x316744(0x16d), function (_0x134fea) {
    const _0x37df3b = _0x316744;
    if (_0x134fea["keyCode"] === 0xd) {
      _0x134fea["preventDefault"](), _0x134fea[_0x37df3b(0x12d)]();
      if ($(steps[x])["find"](_0x37df3b(0xfa))["is"](_0x37df3b(0x184)))
        $(steps[x])
          ["find"](_0x37df3b(0x182))
          [_0x37df3b(0x153)](
            $(steps[x])["find"](_0x37df3b(0x182))[_0x37df3b(0x153)]() + "\x0a",
          );
      else
        $(_0x37df3b(0x1a1))[_0x37df3b(0x163)](_0x37df3b(0x132)) &&
          fill &&
          totalSteps > curStep &&
          $(_0x37df3b(0x11b))[0x0][_0x37df3b(0x202)]();
    }
  }),
  $("body")[_0x316744(0x1b3)](function (_0x3fca7) {
    const _0x59b712 = _0x316744;
    (_0x3fca7[_0x59b712(0x1b2)] || _0x3fca7[_0x59b712(0x17a)]) &&
      _0x3fca7[_0x59b712(0x192)] == 0xd &&
      (x >= steps[_0x59b712(0x171)] - 0x1 && fill
        ? $(steps[x])["find"](_0x59b712(0x1b1))[_0x59b712(0x202)]()
        : (_0x3fca7["preventDefault"](), _0x3fca7[_0x59b712(0x12d)]()));
  }),
  $(_0x316744(0x164))
    [_0x316744(0x179)](_0x316744(0x11c))
    ["on"]("change", function () {
      const _0x458779 = _0x316744;
      (all_data = all_data["filter"](
        (_0x5990a5) =>
          _0x5990a5[_0x458779(0x1c4)] !==
          $(this)[_0x458779(0x10a)](_0x458779(0x1f6)),
      )),
        $(this)["attr"]("type") === "checkbox"
          ? $(this)["is"](_0x458779(0x12c))
            ? all_data[_0x458779(0x121)]({
                field: $(this)[_0x458779(0x10a)](_0x458779(0x1f6)),
                value: $(this)
                  [_0x458779(0x108)](_0x458779(0x123))
                  [_0x458779(0x1fd)](),
              })
            : $(
                _0x458779(0x17d) +
                  $(this)[_0x458779(0x10a)](_0x458779(0x1f6)) +
                  "\x22]",
              )[_0x458779(0x186)]()
          : (all_data[_0x458779(0x121)]({
              field: $(this)[_0x458779(0x10a)](_0x458779(0x1f6)),
              value: $(this)[_0x458779(0x153)](),
            }),
            $(this)[_0x458779(0x153)]() !== "" &&
              resetInputErrorMessage(
                $(this)[_0x458779(0x10a)](_0x458779(0x1f6)),
              )),
        all_data[_0x458779(0x174)](function (_0x35add4) {
          const _0x3dfd22 = _0x458779;
          $("[data-input-field=\x22" + _0x35add4[_0x3dfd22(0x1c4)] + "\x22]")[
            _0x3dfd22(0x147)
          ](),
            $(_0x3dfd22(0x17d) + _0x35add4[_0x3dfd22(0x1c4)] + "\x22]")[
              _0x3dfd22(0x1fd)
            ](_0x35add4[_0x3dfd22(0x154)]);
        });
    }),
  $("[data-form=\x22multistep\x22]")
    ["find"](_0x316744(0xfa))
    ["on"]("change", function () {
      const _0x10a420 = _0x316744;
      $(this)[_0x10a420(0x153)]() !== "" &&
        resetInputErrorMessage($(this)["attr"](_0x10a420(0x1f6))),
        (all_data = all_data[_0x10a420(0x1d6)](
          (_0x2892a0) =>
            _0x2892a0["field"] !== $(this)[_0x10a420(0x10a)](_0x10a420(0x1f6)),
        )),
        all_data[_0x10a420(0x121)]({
          field: $(this)[_0x10a420(0x10a)]("name"),
          value: $(this)[_0x10a420(0x153)](),
        }),
        all_data[_0x10a420(0x174)](function (_0x1f6cb7) {
          const _0x1df712 = _0x10a420;
          $(_0x1df712(0x17d) + _0x1f6cb7[_0x1df712(0x1c4)] + "\x22]")[
            _0x1df712(0x147)
          ](),
            $(_0x1df712(0x17d) + _0x1f6cb7[_0x1df712(0x1c4)] + "\x22]")[
              _0x1df712(0x1fd)
            ](_0x1f6cb7[_0x1df712(0x154)]);
        });
    }),
  $(_0x316744(0x164))
    [_0x316744(0x179)]("select")
    ["on"](_0x316744(0x204), function () {
      const _0x1128a3 = _0x316744;
      $(this)[_0x1128a3(0x153)]() !== "" &&
        resetInputErrorMessage($(this)[_0x1128a3(0x10a)](_0x1128a3(0x1f6)));
      var _0x36547e = $(this)[_0x1128a3(0x163)](_0x1128a3(0x17e));
      (all_data = all_data[_0x1128a3(0x1d6)](
        (_0x52d153) =>
          _0x52d153[_0x1128a3(0x1c4)] !==
          $(this)[_0x1128a3(0x10a)](_0x1128a3(0x1f6)),
      )),
        all_data["push"]({
          field: $(this)[_0x1128a3(0x10a)](_0x1128a3(0x1f6)),
          value: _0x36547e
            ? $(this)
                [_0x1128a3(0x179)]("option[value=\x22$(this).val()\x22]")
                [_0x1128a3(0x1fd)]()
            : $(this)[_0x1128a3(0x153)](),
        }),
        all_data[_0x1128a3(0x174)](function (_0x312a47) {
          const _0x2c48f2 = _0x1128a3;
          $(_0x2c48f2(0x17d) + _0x312a47["field"] + "\x22]")["show"](),
            $(_0x2c48f2(0x17d) + _0x312a47[_0x2c48f2(0x1c4)] + "\x22]")["text"](
              _0x312a47[_0x2c48f2(0x154)],
            );
        });
    }),
  updateStep(),
  triggerInputAllData(),
  $(_0x316744(0x14b))[_0x316744(0x1e9)](function () {
    const _0x32123b = _0x316744,
      _0x41ab13 = $(this)[_0x32123b(0x179)](_0x32123b(0x1df)),
      _0x26f384 = [];
    console["log"](_0x26f384),
      _0x41ab13[_0x32123b(0x1e9)](function () {
        const _0x1a1f9b = _0x32123b;
        _0x26f384[_0x1a1f9b(0x121)](
          $(this)[_0x1a1f9b(0x1fd)]()[_0x1a1f9b(0xf9)](),
        );
      });
    const _0x69587d = $(this)["siblings"](_0x32123b(0x128));
    $[_0x32123b(0x1e9)](_0x26f384, function (_0x2d6d22, _0x3452c6) {
      const _0x495479 = _0x32123b,
        _0x5e53c9 = $(_0x495479(0x16b))
          ["val"](_0x3452c6)
          [_0x495479(0x1fd)](_0x3452c6);
      _0x69587d[_0x495479(0x1a7)](_0x5e53c9);
    });
  });
function cloneRemove() {
  const _0x1a909c = _0x316744;
  $("[data-clone-wrapper]")[_0x1a909c(0x1e9)](function () {
    const _0x3c473c = _0x1a909c;
    $(this)[_0x3c473c(0x179)](_0x3c473c(0x167))[_0x3c473c(0x171)] < 0x2
      ? $(this)
          [_0x3c473c(0x179)]("[data-form=\x22remove-clone\x22]")
          [_0x3c473c(0x186)]()
      : $(this)
          [_0x3c473c(0x179)]("[data-form=\x22remove-clone\x22]")
          [_0x3c473c(0x147)]();
  });
}
function cloneRemoveInput() {
  const _0x291c2a = _0x316744;
  $("[data-clone-input-wrapper]")[_0x291c2a(0x1e9)](function () {
    const _0x1a5ace = _0x291c2a;
    $(this)["find"](_0x1a5ace(0xfe))[_0x1a5ace(0x171)] < 0x2
      ? $(this)[_0x1a5ace(0x179)](_0x1a5ace(0x11a))[_0x1a5ace(0x186)]()
      : $(this)[_0x1a5ace(0x179)](_0x1a5ace(0x11a))["show"]();
  });
}
$(_0x316744(0x19e))["on"](_0x316744(0x202), function () {
  const _0x1eedea = _0x316744,
    _0x31b13e =
      $(this)[_0x1eedea(0x106)]("[data-clone]")["length"] > 0x0
        ? $(this)[_0x1eedea(0x106)](_0x1eedea(0x167))[_0x1eedea(0x18e)]()
        : $(this)[_0x1eedea(0x106)](_0x1eedea(0x21d))[_0x1eedea(0x18e)](),
    _0x2bd671 =
      $(this)["parents"](_0x1eedea(0x167))[_0x1eedea(0x171)] > 0x0
        ? $(this)[_0x1eedea(0x106)](_0x1eedea(0x167))["data"](_0x1eedea(0x205))
        : $(this)
            ["parents"](_0x1eedea(0x21d))
            [_0x1eedea(0x163)](_0x1eedea(0x1d0));
  $(_0x1eedea(0x18d) + _0x2bd671 + "\x22]")
    ["eq"](_0x31b13e)
    [_0x1eedea(0x1cc)](),
    $(_0x1eedea(0x1e4) + _0x2bd671 + "\x22]")
      ["eq"](_0x31b13e)
      [_0x1eedea(0x1cc)](),
    cloneRemove(),
    validation();
}),
  $(_0x316744(0x11a))["on"](_0x316744(0x202), function () {
    const _0x419f0b = _0x316744;
    let _0x127655 = $(this)[_0x419f0b(0x108)]()["attr"](_0x419f0b(0x1f6));
    $(this)[_0x419f0b(0x1c3)](_0x419f0b(0xfe))[_0x419f0b(0x1cc)](),
      $("[data-input-field=\x22" + _0x127655 + "\x22]")
        [_0x419f0b(0x1c3)](_0x419f0b(0x11d))
        [_0x419f0b(0x1cc)](),
      cloneRemove(),
      validation();
  }),
  $(_0x316744(0x213))["on"](_0x316744(0x202), function () {
    const _0x11a054 = _0x316744;
    let _0x440738 = $(this)["data"](_0x11a054(0x14e));
    var _0x167dff = $(_0x11a054(0x18d) + _0x440738 + "\x22]")
        ["eq"](0x0)
        [_0x11a054(0x205)](!![]),
      _0x5413c = $("[data-display=\x22" + _0x440738 + "\x22]")
        ["eq"](0x0)
        [_0x11a054(0x205)](!![]);
    let _0x1b401b = "";
    $(this)["find"]("[data-form=\x22remove-clone\x22]")["show"](),
      cloneRemove(),
      _0x167dff[_0x11a054(0x179)](_0x11a054(0xfe))
        [_0x11a054(0x179)](_0x11a054(0x10b))
        [_0x11a054(0x153)](""),
      _0x167dff[_0x11a054(0x179)](_0x11a054(0xfe))
        [_0x11a054(0x190)](_0x11a054(0x15a))
        [_0x11a054(0x1cc)](),
      _0x5413c[_0x11a054(0x179)](_0x11a054(0x11d))
        [_0x11a054(0x190)](":first")
        [_0x11a054(0x1cc)](),
      _0x167dff[_0x11a054(0x179)](_0x11a054(0x10b))["each"](function () {
        const _0x5284b9 = _0x11a054;
        if ($(this)[_0x5284b9(0x10f)](_0x5284b9(0xfe))["length"] > 0x0) {
          let _0x154b58 = 0x0;
          const _0x1e7859 = $(this)
            [_0x5284b9(0x10f)](_0x5284b9(0xfe))
            ["data"](_0x5284b9(0x130));
          console["log"](
            $(this)
              [_0x5284b9(0x10f)](_0x5284b9(0xfe))
              [_0x5284b9(0x163)]("clone-input"),
            this[_0x5284b9(0x1f6)],
          ),
            $(_0x5284b9(0x191) + _0x1e7859 + _0x5284b9(0x14f))[
              _0x5284b9(0x1e9)
            ](function () {
              const _0x755cb7 = _0x5284b9,
                _0x4cc45d = $(this)[_0x755cb7(0x10a)](_0x755cb7(0x1f6));
              if (_0x4cc45d && _0x4cc45d[_0x755cb7(0x1e2)]("relationship-")) {
                const _0x422d09 = parseInt(
                  _0x4cc45d[_0x755cb7(0x1db)]("-")[0x1],
                );
                !isNaN(_0x422d09) &&
                  _0x422d09 > _0x154b58 &&
                  (_0x154b58 = _0x422d09);
              }
            }),
            _0x154b58++,
            (_0x1b401b = this[_0x5284b9(0x1f6)] + "-" + _0x154b58),
            console[_0x5284b9(0x168)](_0x1e7859, _0x1b401b);
        } else
          _0x1b401b =
            this[_0x5284b9(0x1f6)] +
            "-" +
            (parseInt(
              $("[data-clone=\x22" + _0x440738 + "\x22]")
                [_0x5284b9(0x18c)]()
                [_0x5284b9(0x18e)](),
            ) +
              0x1);
        $(this)["val"](""),
          $(this)["attr"]("name", _0x1b401b),
          $(this)[_0x5284b9(0x10a)](_0x5284b9(0x1f7), _0x1b401b);
      }),
      _0x5413c[_0x11a054(0x179)](_0x11a054(0x112))["each"](function () {
        const _0x50caa4 = _0x11a054;
        if ($(this)[_0x50caa4(0x163)](_0x50caa4(0x1cf))) {
          let _0x471c7c = 0x0;
          const _0x56c37d = $(this)
            [_0x50caa4(0x163)]("input-field")
            [_0x50caa4(0x1db)]("-")[0x0];
          $(
            "[data-display=\x22" +
              _0x440738 +
              _0x50caa4(0x1a6) +
              _0x56c37d +
              "\x22]",
          )[_0x50caa4(0x1e9)](function () {
            const _0x4da63b = _0x50caa4,
              _0x500251 = $(this)[_0x4da63b(0x10a)](_0x4da63b(0x137)),
              _0x464068 = parseInt(_0x500251[_0x4da63b(0x1db)]("-")[0x1]);
            !isNaN(_0x464068) &&
              _0x464068 > _0x471c7c &&
              (_0x471c7c = _0x464068);
          }),
            _0x471c7c++;
          const _0x4e52e = _0x56c37d + "-" + _0x471c7c;
          console[_0x50caa4(0x168)](_0x4e52e),
            $(this)[_0x50caa4(0x10a)]("data-input-field", _0x4e52e);
        }
      }),
      $("[data-clone-wrapper=\x22" + _0x440738 + "\x22]")[_0x11a054(0x1a7)](
        _0x167dff,
      ),
      $(_0x11a054(0x145) + _0x440738 + "\x22]")["append"](_0x5413c),
      $("[data-index=\x22" + _0x440738 + "\x22]")[_0x11a054(0x1e9)](
        function () {
          const _0x3a2e7a = _0x11a054;
          $(this)[_0x3a2e7a(0x1fd)](
            $(this)
              ["parents"](_0x3a2e7a(0x18d) + _0x440738 + "\x22]")
              [_0x3a2e7a(0x18e)]() + 0x1,
          );
        },
      ),
      $(_0x11a054(0xfb) + _0x440738 + "\x22]")[_0x11a054(0x1e9)](function () {
        const _0x1d3d59 = _0x11a054;
        $(this)[_0x1d3d59(0x1fd)](
          $(this)
            ["parents"](_0x1d3d59(0x1e4) + _0x440738 + "\x22]")
            [_0x1d3d59(0x18e)]() + 0x1,
        );
      }),
      validation();
  }),
  $(_0x316744(0x1b7))["on"](_0x316744(0x202), function () {
    const _0x2ceffd = _0x316744,
      _0x2228d0 = $(this)
        [_0x2ceffd(0x106)](_0x2ceffd(0x167))
        [_0x2ceffd(0x18e)]();
    let _0x1f906e = $(this)[_0x2ceffd(0x163)]("add-new-input");
    var _0x27d6f9 = $(_0x2ceffd(0x191) + _0x1f906e + "\x22]")
        ["eq"](0x0)
        [_0x2ceffd(0x205)](!![]),
      _0x4fa6af = $("[data-display-input=\x22" + _0x1f906e + "\x22]")
        ["eq"](0x0)
        [_0x2ceffd(0x205)](!![]);
    $(this)[_0x2ceffd(0x179)](_0x2ceffd(0x11a))[_0x2ceffd(0x147)](),
      cloneRemoveInput();
    let _0xf55c7c = 0x0;
    $("[data-clone-input=\x22" + _0x1f906e + _0x2ceffd(0x14f))[
      _0x2ceffd(0x1e9)
    ](function () {
      const _0x439125 = _0x2ceffd,
        _0x53741b = $(this)[_0x439125(0x10a)](_0x439125(0x1f6));
      if (_0x53741b && _0x53741b[_0x439125(0x1e2)](_0x439125(0x1d8))) {
        const _0x1e9916 = parseInt(_0x53741b[_0x439125(0x1db)]("-")[0x1]);
        !isNaN(_0x1e9916) && _0x1e9916 > _0xf55c7c && (_0xf55c7c = _0x1e9916);
      }
    }),
      _0xf55c7c++,
      _0x27d6f9[_0x2ceffd(0x179)](_0x2ceffd(0x10b))[_0x2ceffd(0x1e9)](
        function () {
          const _0x41a64a = _0x2ceffd;
          let _0x561d41 = _0x41a64a(0x1d8) + _0xf55c7c;
          $(this)[_0x41a64a(0x153)](""),
            $(this)[_0x41a64a(0x10a)]("name", _0x561d41),
            $(this)[_0x41a64a(0x10a)](_0x41a64a(0x1f7), _0x561d41);
        },
      ),
      _0x4fa6af[_0x2ceffd(0x179)](_0x2ceffd(0x112))[_0x2ceffd(0x1e9)](
        function () {
          const _0x31f3da = _0x2ceffd;
          $(this)["attr"](_0x31f3da(0x137), "relationship-" + _0xf55c7c);
        },
      ),
      $(this)
        [_0x2ceffd(0x108)](_0x2ceffd(0x216) + _0x1f906e + "\x22]")
        [_0x2ceffd(0x1a7)](_0x27d6f9),
      $(_0x2ceffd(0x21d))
        ["eq"](_0x2228d0)
        ["find"](_0x2ceffd(0x158) + _0x1f906e + "\x22]")
        [_0x2ceffd(0x1a7)](_0x4fa6af),
      $(_0x2ceffd(0x18a) + _0x1f906e + "\x22]")[_0x2ceffd(0x1e9)](function () {
        const _0x3f8531 = _0x2ceffd;
        $(this)["text"](
          $(this)
            [_0x3f8531(0x106)](_0x3f8531(0x191) + _0x1f906e + "\x22]")
            ["index"]() + 0x1,
        );
      }),
      $(_0x2ceffd(0x14c) + _0x1f906e + "\x22]")[_0x2ceffd(0x1e9)](function () {
        const _0x36a037 = _0x2ceffd;
        $(this)[_0x36a037(0x1fd)](
          $(this)
            [_0x36a037(0x106)](_0x36a037(0x136) + _0x1f906e + "\x22]")
            [_0x36a037(0x18e)]() + 0x1,
        );
      }),
      validation();
  }),
  $(_0x316744(0x21c))["on"](_0x316744(0x202), function () {
    const _0x2d6ea6 = _0x316744,
      _0x5a7442 = $(this)[_0x2d6ea6(0x163)](_0x2d6ea6(0x180));
    $("input[name=\x22" + _0x5a7442 + "\x22]")["val"](""), validation();
  });
function andLogic() {
  const _0x4cf818 = _0x316744;
  conditionalResult &&
    (steps["eq"](x)["find"](_0x4cf818(0x1ea))[_0x4cf818(0x186)](),
    console["log"](_0x4cf818(0x140)),
    steps["eq"](x)
      [_0x4cf818(0x179)](_0x4cf818(0x1ea))
      [_0x4cf818(0x1e9)](function () {
        const _0x11947b = _0x4cf818;
        function _0xd8240b(_0x51c0bb) {
          const _0x4dc856 = _0x1742,
            _0x3a6ed4 = _0x51c0bb[_0x4dc856(0x1db)]("&"),
            _0x1da249 = [];
          return (
            _0x3a6ed4[_0x4dc856(0x174)]((_0x58c9b6) => {
              const _0x59fbf6 = _0x4dc856,
                [_0x50292c, _0x1e2f3b] = _0x58c9b6[_0x59fbf6(0x1db)]("=");
              _0x1da249[_0x59fbf6(0x121)]({
                field: _0x50292c,
                value: _0x1e2f3b,
              });
            }),
            _0x1da249
          );
        }
        const _0x2511c7 = $(this)[_0x11947b(0x10a)]("data-show-if");
        console[_0x11947b(0x168)](_0x2511c7);
        const _0x57ebea = _0xd8240b(_0x2511c7);
        function _0x111954(_0x27d088, _0x7b8e13) {
          const _0x58b113 = _0x11947b;
          return _0x7b8e13[_0x58b113(0x11e)]((_0x2955ce, _0x3511c8) => {
            const _0x212479 = _0x58b113;
            if (
              _0x27d088[0x0] &&
              _0x2955ce[_0x212479(0x1c4)] === _0x27d088[0x0][_0x212479(0x1c4)]
            )
              return _0x27d088[_0x212479(0x217)](
                (_0x1d2400, _0x46b341) =>
                  _0x7b8e13[_0x3511c8 + _0x46b341] &&
                  _0x7b8e13[_0x3511c8 + _0x46b341][_0x212479(0x1c4)] ===
                    _0x1d2400[_0x212479(0x1c4)] &&
                  _0x7b8e13[_0x3511c8 + _0x46b341][_0x212479(0x154)] ===
                    _0x1d2400[_0x212479(0x154)],
              );
            return ![];
          });
        }
        const _0xea0993 = _0x111954(_0x57ebea, all_data);
        _0xea0993 ? $(this)[_0x11947b(0x147)]() : $(this)[_0x11947b(0x186)]();
      }));
}
scrollTop(), cloneRemove(), cloneRemoveInput();
