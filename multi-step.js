//27th September
//Bug fix:
//1. fixed recurring form issue

const _0x26d8ca = _0x5869;
(function (_0x1de47d, _0x5ab7c7) {
  const _0x59db01 = _0x5869,
    _0x5bb043 = _0x1de47d();
  while (!![]) {
    try {
      const _0x32dce6 =
        (-parseInt(_0x59db01(0x260)) / 0x1) *
          (-parseInt(_0x59db01(0x1cc)) / 0x2) +
        -parseInt(_0x59db01(0x293)) / 0x3 +
        (parseInt(_0x59db01(0x26a)) / 0x4) *
          (-parseInt(_0x59db01(0x23c)) / 0x5) +
        parseInt(_0x59db01(0x26f)) / 0x6 +
        parseInt(_0x59db01(0x22d)) / 0x7 +
        -parseInt(_0x59db01(0x1d8)) / 0x8 +
        -parseInt(_0x59db01(0x219)) / 0x9;
      if (_0x32dce6 === _0x5ab7c7) break;
      else _0x5bb043["push"](_0x5bb043["shift"]());
    } catch (_0x5df1d4) {
      _0x5bb043["push"](_0x5bb043["shift"]());
    }
  }
})(_0x1beb, 0xb250b);
let x = 0x0,
  curStep = 0x0,
  steps = $(_0x26d8ca(0x24d)),
  progressbarClone = $(_0x26d8ca(0x226))["clone"](),
  progressbar,
  countCard = !![],
  weightedSelection = $("[data-weighted-selection]")[_0x26d8ca(0x29d)](
    _0x26d8ca(0x295),
  ),
  weightedSelectionRange = $(_0x26d8ca(0x2ba))[_0x26d8ca(0x29d)](
    "weighted-selection-range",
  ),
  selectMultiple = $("[data-select-multiple]")[_0x26d8ca(0x29d)](
    _0x26d8ca(0x1f5),
  ),
  customError = $(_0x26d8ca(0x2c4))["data"](_0x26d8ca(0x1fe)),
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
  empReqDate = [],
  empReqRadio = [],
  empReqSelect = [],
  empReqTextarea = [],
  empReqFile = [],
  empReqNum = [],
  empReqEmail = [],
  empReqTel = [],
  reinitIX = $("[data-reinit]")[_0x26d8ca(0x29d)](_0x26d8ca(0x26c)),
  textareaLength = 0x0,
  textInputLength = 0x0,
  emailInputLength = 0x0,
  selectInputLength = 0x0,
  checkboxInputLength = 0x0,
  filledInput = [],
  savedFilledInput = [],
  memory = $(_0x26d8ca(0x2c2))[_0x26d8ca(0x29d)](_0x26d8ca(0x1d2)),
  quiz = $(_0x26d8ca(0x262))[_0x26d8ca(0x29d)](_0x26d8ca(0x249)),
  progress = 0x0;
function _0x1beb() {
  const _0x4d0d21 = [
    "span",
    "open",
    "metaKey",
    "[data-cms-select=cms]",
    "each",
    "<option>",
    "textarea",
    "538164jWvCmH",
    "not",
    "weighted-selection",
    "removeClass",
    "log",
    "input[type=\x22radio\x22]:checked",
    "input[type=\x22checkbox\x22]:visible",
    "[data-input-field=\x22",
    "skipTo",
    "val",
    "data",
    "findIndex",
    "[data-answer=\x22",
    "[data-answer][data-radio-skip]:visible",
    "form[data-form=\x22multistep\x22]\x20:input",
    "ctrlKey",
    "edit-step",
    "input[type=\x22email\x22]:visible",
    "redirect-form-hehexd",
    ":input[type=\x22text\x22][required]",
    "<br>Data\x20Answer\x20=\x20",
    "[type=\x22checkbox\x22]",
    "[data-text=\x22current-step\x22]",
    "radio-skip",
    "change",
    "Enter",
    "novalidate",
    "destroy",
    "step",
    "scroll-top-offset",
    "inputName",
    "button",
    "[data-add-new]",
    "includes",
    "url",
    "none",
    "[data-form=\x22submit-btn\x22]",
    "[data-selection=\x22other\x22]",
    "parse",
    "[data-weighted-selection-range]",
    "children",
    "input",
    ".w-checkbox-input",
    ":input[type=\x22tel\x22]",
    "[data-cms-select=text]",
    "w--redirected-checked",
    "status",
    "[data-memory]",
    "query-param",
    "[data-custom-error-message]",
    "[data-form=\x22next-btn\x22]",
    "text",
    "keydown",
    "top",
    ".w-form-done",
    ":input[type=\x22date\x22]",
    "preventDefault",
    "[data-display-index=\x22",
    "[data-selection=\x22",
    ":input[type=\x22file\x22]",
    ":input[type=\x27radio\x27]:checked",
    "56458rvZfJj",
    "some",
    "getItem",
    "type",
    "submit",
    "new-tab",
    "memory",
    "[data-btn=\x22check\x22]",
    "input[type=\x22radio\x22]",
    "split",
    ":input[type=\x22checkbox\x22][required]",
    "location",
    "928552Vhkcnu",
    "prop",
    "[data-clone-wrapper=\x22",
    "redirect",
    "[data-answer]",
    "[data-cms-select=input]",
    "data-radio-skip",
    "phone-autoformat",
    "input[type=\x22text\x22][required]:visible",
    "[data-form-ms=\x22submit-btn\x22]",
    "debug-mode",
    "[data-redirect-delay]",
    "radio-delay",
    "trim",
    "join",
    "init",
    "parent",
    "option[value=\x22",
    "match",
    "[type=\x22submit\x22]",
    "[data-selection]",
    "value",
    "show",
    ":input[type=\x22number\x22]",
    "textarea[required]",
    "body",
    ":input[type=\x22number\x22][required]",
    "focus",
    "setItem",
    "select-multiple",
    "checkbox",
    "Please\x20wait...",
    ":input",
    "disabled",
    "input:radio[name=\x22",
    "input[autofocus]",
    "[data-radio-skip]",
    "logic-extra",
    "custom-error-message",
    "[data-btn=\x22edit\x22]",
    "replace",
    "0.4",
    "ix2",
    "find",
    "forEach",
    "scroll-top",
    "input:radio[required]",
    "count-card",
    ":input[type=\x22checkbox\x22]",
    "remove",
    "[data-selection-weight]",
    "\x22]:checked",
    "backTo",
    "checked",
    "attr",
    "[data-radio-skip]:visible",
    "[data-clone=\x22",
    "add-new",
    "option[value=\x22$(this).val()\x22]",
    "select[name=\x22",
    "require",
    "reset",
    "readystatechange",
    "[data-skip-to]",
    "[data-btn=\x22reset\x22]",
    "4644909zmbuZT",
    ":input[type=\x22email\x22]",
    "[data-text=\x22total-weight\x22]",
    "field",
    "[data-success-card]",
    "answer",
    "[data-text=\x22error-message\x22]",
    "clickable-all",
    "keypress",
    "hide",
    "siblings",
    "name",
    ":input[type=\x22checkbox\x22][required]:checked",
    "[data-form=\x22progress-indicator\x22]",
    "[data-form=\x22next-btn\x22][type=\x22submit\x22]",
    "[data-answer]:visible",
    "[data-go-to]",
    "keyCode",
    ":input[type=\x22email\x22][required]",
    "html,\x20body",
    "9334850lIionf",
    "redirect-delay",
    "textarea[required]:visible",
    "block-domain",
    "auto",
    "key",
    "clickable",
    "[data-form=\x22multistep\x22]",
    "stopPropagation",
    "offset",
    "<br>Data\x20Go\x20To\x20=\x20",
    "Webflow",
    "current",
    "addClass",
    "min-character",
    "10vVdjWM",
    ":input[type=\x22date\x22][required]",
    "data-skip-to",
    "textarea[autofocus]",
    "[data-radio-delay]",
    "slice",
    "selection",
    "index",
    "[data-input-field]",
    "input[name=\x22",
    "append",
    "last",
    "[data-form=\x22submit-btn\x22]:visible",
    "quiz",
    "trigger",
    "[data-form=\x22back-btn\x22]",
    "css",
    "[data-form=\x22step\x22]",
    "length",
    "skip-to",
    "dispatchEvent",
    "[data-count-card]",
    "[data-text=\x22total-steps\x22]",
    "data-radio-delay",
    "clone",
    "[data-form=\x22step\x22][data-card]",
    "push",
    "\x22][value=\x22",
    "[data-checkbox]",
    "radio",
    ":input[type=\x22file\x22][required]",
    "input-field",
    "wait",
    "animate",
    "[data-form=\x22progress\x22]",
    "selected",
    "1BtpjRX",
    "phone-validation",
    "[data-quiz]",
    "submit-show",
    "go-to",
    "<div\x20data-range=\x22selection\x22\x20style=\x22display:none\x20!important\x22>",
    "[data-index=\x22",
    "</div>",
    "select",
    "getResponse",
    "778632PXupwM",
    "[data-form=\x22submit\x22]:visible",
    "reinit",
    "required",
    "parents",
    "3416844MiXfRk",
    "fadeIn",
    ":input[type=\x22checkbox\x22]:checked",
    "enter",
    "textarea[name=\x22",
    "file",
    ":checked",
    "[data-clickable]",
    "[data-form=\x22custom-progress-indicator\x22]",
    "ajaxComplete",
    "div.g-recaptcha",
    "data-go-to",
    "_blank",
    "card",
    "test",
    "reset-delay",
    "shiftKey",
    ":input[type=\x22tel\x22][required]",
    "click",
    "[data-clickable-all]",
    "select[required]",
    "[data-display=\x22",
    "filter",
    "href",
    ":input[type=\x22text\x22]",
    "filledInput",
    ":input[required]",
    "[data-range]:contains(",
    "removeItem",
  ];
  _0x1beb = function () {
    return _0x4d0d21;
  };
  return _0x1beb();
}
const urlFormly = new URL(window[_0x26d8ca(0x1d7)][_0x26d8ca(0x286)]);
let _params = $("[data-query-param]")[_0x26d8ca(0x29d)](_0x26d8ca(0x2c3)),
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
  logicExtra = $(_0x26d8ca(0x234))[_0x26d8ca(0x29d)](_0x26d8ca(0x1fd)),
  oldSubmitText = $(_0x26d8ca(0x2b7))["val"](),
  oldResetText = $(_0x26d8ca(0x218))[_0x26d8ca(0x2c6)](),
  formReset = $("[data-form=\x22multistep\x22]")[_0x26d8ca(0x29d)](
    _0x26d8ca(0x215),
  ),
  successCard = "",
  redirectTo = "",
  totalSteps = 0x0,
  checkCount = 0x0,
  resetDelay = $("[data-reset-delay]")["data"](_0x26d8ca(0x27e))
    ? $("[data-reset-delay]")[_0x26d8ca(0x29d)](_0x26d8ca(0x27e))
    : 0x7d0,
  redirectDelay = $("[data-redirect-delay]")[_0x26d8ca(0x29d)](_0x26d8ca(0x22e))
    ? $(_0x26d8ca(0x1e3))[_0x26d8ca(0x29d)]("redirect-delay")
    : 0x7d0,
  newTab = !![],
  unfilledArr = [],
  phoneFormat = $(_0x26d8ca(0x234))["data"](_0x26d8ca(0x261)),
  scrollToTop = $(_0x26d8ca(0x234))[_0x26d8ca(0x29d)](_0x26d8ca(0x205)),
  scrollTopOffset = parseInt(
    $(_0x26d8ca(0x234))[_0x26d8ca(0x29d)](_0x26d8ca(0x2b0)),
  ),
  notRobot = !![];
(all_data = []),
  (savedFilledInput = JSON[_0x26d8ca(0x2b9)](
    localStorage[_0x26d8ca(0x1ce)]("filledInput"),
  ));
$(_0x26d8ca(0x279))["length"] > 0x0 && (notRobot = ![]);
function recaptcha(_0x47e2e8) {
  notRobot = !![];
}
$(_0x26d8ca(0x251))[_0x26d8ca(0x24e)] > 0x0 &&
  (countCard = $(_0x26d8ca(0x251))[_0x26d8ca(0x29d)](_0x26d8ca(0x207)));
$(_0x26d8ca(0x21f))[_0x26d8ca(0x222)](),
  $(progressbarClone)[_0x26d8ca(0x296)](_0x26d8ca(0x239)),
  $("[data-form=\x22progress\x22]")[_0x26d8ca(0x2bb)]()[_0x26d8ca(0x209)](),
  $(_0x26d8ca(0x2b7))[_0x26d8ca(0x222)](),
  $("[data-form-ms=\x22submit-btn\x22]")[_0x26d8ca(0x222)](),
  steps[_0x26d8ca(0x290)](function () {
    const _0x344b09 = _0x26d8ca;
    $(_0x344b09(0x25e))[_0x344b09(0x246)](
      progressbarClone[_0x344b09(0x254)](!![], !![]),
    );
  }),
  $(_0x26d8ca(0x244))[_0x26d8ca(0x222)]();
countCard
  ? ((curStep = curStep + 0x1),
    (totalSteps = steps[_0x26d8ca(0x24e)]),
    $(_0x26d8ca(0x252))["text"](totalSteps))
  : ($(steps[x])["data"](_0x26d8ca(0x27c))
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    (totalSteps = $("[data-form=\x22step\x22]:not([data-card=\x22true\x22])")[
      _0x26d8ca(0x24e)
    ]),
    $("[data-text=\x22total-steps\x22]")[_0x26d8ca(0x2c6)](totalSteps),
    $(_0x26d8ca(0x255))[_0x26d8ca(0x290)](function () {
      const _0x58f7a9 = _0x26d8ca;
      $($(_0x58f7a9(0x226))[$(this)[_0x58f7a9(0x243)]()])["hide"]();
    }));
(progressbar = $("[data-form=\x22progress\x22]")[_0x26d8ca(0x2bb)]()),
  $(_0x26d8ca(0x226))["on"](_0x26d8ca(0x281), clickableIndicator),
  $("[data-text=\x22current-step\x22]")[_0x26d8ca(0x2c6)](curStep),
  steps[_0x26d8ca(0x222)](),
  $(_0x26d8ca(0x21d))[_0x26d8ca(0x222)](),
  $(_0x26d8ca(0x227))[_0x26d8ca(0x290)](function () {
    const _0x6ae4a8 = _0x26d8ca;
    $(this)[_0x6ae4a8(0x20e)](_0x6ae4a8(0x1cf), _0x6ae4a8(0x2b2));
  });
function getParams() {
  const _0x45c326 = _0x26d8ca;
  urlFormly["searchParams"][_0x45c326(0x204)](function (_0x381631, _0x3e5923) {
    const _0x1b2039 = _0x45c326;
    searchQ[_0x1b2039(0x256)]({ val: _0x381631, key: _0x3e5923 });
  });
}
function getSafe(_0x597191, _0x3d705a) {
  try {
    return _0x597191();
  } catch (_0xb6a650) {
    return _0x3d705a;
  }
}
function phoneAutoFormat(_0x4be035) {
  var _0x8cb5d2 = "";
  return function (_0x3d2c4e) {
    const _0x5d93fd = _0x5869;
    var _0x17829b = "",
      _0x5ee514 = _0x3d2c4e[_0x5d93fd(0x200)](/\D/g, ""),
      _0x4c58ba = 0x0,
      _0x1e5e2e = 0x0;
    while (
      _0x4c58ba < _0x5ee514[_0x5d93fd(0x24e)] &&
      _0x1e5e2e < _0x4be035[_0x5d93fd(0x24e)]
    ) {
      _0x4be035[_0x1e5e2e] === "x"
        ? ((_0x17829b += _0x5ee514[_0x4c58ba]), _0x4c58ba++)
        : (_0x17829b += _0x4be035[_0x1e5e2e]),
        _0x1e5e2e++;
    }
    if (_0x3d2c4e[_0x5d93fd(0x24e)] < _0x8cb5d2[_0x5d93fd(0x24e)]) {
      var _0x363943 = _0x4be035[_0x5d93fd(0x241)](_0x1e5e2e);
      _0x17829b += _0x363943[_0x5d93fd(0x200)](/x/g, "");
    }
    return (_0x8cb5d2 = _0x17829b), _0x17829b;
  };
}
quiz &&
  steps[_0x26d8ca(0x290)](function () {
    const _0x362c31 = _0x26d8ca;
    $(this)["children"]()["attr"](_0x362c31(0x1de), !![]),
      $(this)["children"]()["attr"](_0x362c31(0x253), 0xfa);
  });
function disableBtn(_0x230043) {
  const _0x4cff7a = _0x26d8ca;
  (fill = ![]),
    !customError &&
      ($(_0x4cff7a(0x2c5))[_0x4cff7a(0x24c)]({
        opacity: "0.4",
        "pointer-events": _0x4cff7a(0x2b6),
      }),
      $(_0x4cff7a(0x2c5))[_0x4cff7a(0x23a)](_0x4cff7a(0x1f9)),
      $(_0x4cff7a(0x2b7))[_0x4cff7a(0x24c)]({
        opacity: _0x4cff7a(0x201),
        "pointer-events": _0x4cff7a(0x2b6),
      }),
      $(_0x4cff7a(0x2b7))[_0x4cff7a(0x23a)](_0x4cff7a(0x1f9)),
      $(_0x4cff7a(0x1e1))[_0x4cff7a(0x24c)]({
        opacity: _0x4cff7a(0x201),
        "pointer-events": _0x4cff7a(0x2b6),
      }),
      $("[data-form-ms=\x22submit-btn\x22]")[_0x4cff7a(0x23a)]("disabled"));
}
function _0x5869(_0x23914b, _0x540b14) {
  const _0x1bebf3 = _0x1beb();
  return (
    (_0x5869 = function (_0x58698b, _0x193430) {
      _0x58698b = _0x58698b - 0x1c9;
      let _0x4621c2 = _0x1bebf3[_0x58698b];
      return _0x4621c2;
    }),
    _0x5869(_0x23914b, _0x540b14)
  );
}
function enableBtn() {
  const _0x23a3f9 = _0x26d8ca;
  (fill = !![]),
    $("[data-form=\x22next-btn\x22]")["css"]({
      "pointer-events": _0x23a3f9(0x231),
      opacity: "1",
    }),
    $(_0x23a3f9(0x2c5))["removeClass"](_0x23a3f9(0x1f9)),
    $(_0x23a3f9(0x2b7))["css"]({ "pointer-events": "auto", opacity: "1" }),
    $(_0x23a3f9(0x2b7))[_0x23a3f9(0x296)](_0x23a3f9(0x1f9)),
    $("[data-form-ms=\x22submit-btn\x22]")[_0x23a3f9(0x24c)]({
      "pointer-events": _0x23a3f9(0x231),
      opacity: "1",
    }),
    $(_0x23a3f9(0x1e1))[_0x23a3f9(0x296)](_0x23a3f9(0x1f9));
}
function saveFilledInput() {
  const _0x4b3e8b = _0x26d8ca;
  $(_0x4b3e8b(0x2a1))
    [_0x4b3e8b(0x294)](_0x4b3e8b(0x1eb))
    [_0x4b3e8b(0x290)](function () {
      const _0x45be9e = _0x4b3e8b;
      $(this)[_0x45be9e(0x20e)]("type") === "checkbox" ||
      $(this)[_0x45be9e(0x20e)]("type") === _0x45be9e(0x259)
        ? $(this)[_0x45be9e(0x1d9)](_0x45be9e(0x20d)) &&
          (filledInput[_0x45be9e(0x1cd)](
            (_0x4d53bb) =>
              _0x4d53bb[_0x45be9e(0x2b1)] === $(this)["attr"]("name"),
          )
            ? ((filledInput = filledInput["filter"](
                (_0x546ee7) =>
                  _0x546ee7["inputName"] !== $(this)["attr"](_0x45be9e(0x224)),
              )),
              $(this)[_0x45be9e(0x29c)]() !== "" &&
                filledInput[_0x45be9e(0x256)]({
                  inputName: $(this)[_0x45be9e(0x20e)](_0x45be9e(0x224)),
                  value: $(this)[_0x45be9e(0x29c)](),
                }))
            : $(this)[_0x45be9e(0x29c)]() !== "" &&
              filledInput[_0x45be9e(0x256)]({
                inputName: $(this)["attr"]("name"),
                value: $(this)[_0x45be9e(0x29c)](),
              }))
        : filledInput[_0x45be9e(0x1cd)](
            (_0x29d3cd) =>
              _0x29d3cd["inputName"] ===
              $(this)[_0x45be9e(0x20e)](_0x45be9e(0x224)),
          )
        ? ((filledInput = filledInput[_0x45be9e(0x285)](
            (_0xc889d) =>
              _0xc889d["inputName"] !==
              $(this)[_0x45be9e(0x20e)](_0x45be9e(0x224)),
          )),
          $(this)[_0x45be9e(0x29c)]() !== "" &&
            filledInput[_0x45be9e(0x256)]({
              inputName: $(this)[_0x45be9e(0x20e)](_0x45be9e(0x224)),
              value: $(this)["val"](),
            }))
        : $(this)[_0x45be9e(0x29c)]() !== "" &&
          filledInput["push"]({
            inputName: $(this)[_0x45be9e(0x20e)](_0x45be9e(0x224)),
            value: $(this)[_0x45be9e(0x29c)](),
          });
    }),
    localStorage[_0x4b3e8b(0x28b)](_0x4b3e8b(0x288)),
    localStorage[_0x4b3e8b(0x1f4)](
      "filledInput",
      JSON["stringify"](filledInput),
    );
}
function scrollTop() {
  const _0x54c63b = _0x26d8ca;
  scrollToTop &&
    $(_0x54c63b(0x22c))[_0x54c63b(0x25d)](
      {
        scrollTop:
          $("[data-form=\x22multistep\x22]")[_0x54c63b(0x236)]()[
            _0x54c63b(0x2c8)
          ] - scrollTopOffset,
      },
      0x3e8,
    );
}
function updateStep() {
  const _0x5bc1d9 = _0x26d8ca;
  scrollTop(),
    (skip = ![]),
    $(_0x5bc1d9(0x277))[_0x5bc1d9(0x296)](_0x5bc1d9(0x1f9));
  $(_0x5bc1d9(0x276))[_0x5bc1d9(0x29d)](_0x5bc1d9(0x233)) &&
    (steps["find"](_0x5bc1d9(0x289))[_0x5bc1d9(0x290)](function () {
      const _0x172023 = _0x5bc1d9;
      $(
        $(_0x172023(0x277))[
          $(this)[_0x172023(0x26e)](_0x172023(0x24d))[_0x172023(0x243)]()
        ],
      ),
        $(this)[_0x172023(0x29c)]() === "" && emptyInput++;
    }),
    emptyInput > 0x0
      ? $("input[type=\x22submit\x22]")[_0x5bc1d9(0x23a)](_0x5bc1d9(0x1f9))
      : $("input[type=\x22submit\x22]")[_0x5bc1d9(0x296)](_0x5bc1d9(0x1f9)));
  $(_0x5bc1d9(0x277))["removeClass"]("current"),
    $("[data-form=\x22custom-progress-indicator\x22]")[_0x5bc1d9(0x23a)](
      _0x5bc1d9(0x1f9),
    ),
    $($(_0x5bc1d9(0x277))[x])[_0x5bc1d9(0x23a)](_0x5bc1d9(0x239)),
    (selection = selections["filter"](
      (_0x85131e) => _0x85131e[_0x5bc1d9(0x2af)] === x - 0x1,
    ));
  next &&
    (x = getSafe(() => selection[0x0][_0x5bc1d9(0x29b)])
      ? parseInt(getSafe(() => selection[0x0]["skipTo"]))
      : x);
  $("[data-answer]")[_0x5bc1d9(0x222)](), steps[_0x5bc1d9(0x222)]();
  reinitIX === !![] && window[_0x5bc1d9(0x238)][_0x5bc1d9(0x2ae)]();
  $(progressbar)["removeClass"](_0x5bc1d9(0x239));
  for (i = 0x0; i <= x; i++) {
    countCard
      ? $(progressbar[i])[_0x5bc1d9(0x23a)](_0x5bc1d9(0x239))
      : !$(steps[i])[_0x5bc1d9(0x29d)](_0x5bc1d9(0x27c)) &&
        $(progressbar[i])[_0x5bc1d9(0x23a)](_0x5bc1d9(0x239));
  }
  reinitIX === !![]
    ? (window["Webflow"] &&
        window[_0x5bc1d9(0x238)]
          [_0x5bc1d9(0x214)](_0x5bc1d9(0x202))
          [_0x5bc1d9(0x1e7)](),
      document[_0x5bc1d9(0x250)](new Event(_0x5bc1d9(0x216))),
      $(steps[x])["show"]())
    : $(steps[x])[_0x5bc1d9(0x270)]("slow");
  x === 0x0 &&
    !$(steps[x])["data"]("card") &&
    $(steps[x])[_0x5bc1d9(0x203)](_0x5bc1d9(0x1dc))[_0x5bc1d9(0x1ee)]();
  selection[_0x5bc1d9(0x24e)] > 0x0
    ? $(steps[x])
        ["find"](_0x5bc1d9(0x29f) + selection[0x0][_0x5bc1d9(0x25f)] + "\x22]")
        [_0x5bc1d9(0x1ee)]()
    : $(steps[x])
        [_0x5bc1d9(0x203)](_0x5bc1d9(0x29f) + answer + "\x22]")
        ["show"]();
  if (x === 0x0)
    $("[data-form=\x22back-btn\x22]")[_0x5bc1d9(0x222)](),
      $(_0x5bc1d9(0x2c5))["show"](),
      $("[data-form=\x22submit-btn\x22]")[_0x5bc1d9(0x222)]();
  else {
    if (
      x === steps["length"] - 0x1 ||
      $(steps[x])["find"](_0x5bc1d9(0x26b))["length"] > 0x0
    ) {
      $(_0x5bc1d9(0x2c5))[_0x5bc1d9(0x222)]();
      if (
        $(steps[x])
          [_0x5bc1d9(0x203)]("[data-form=\x22next-btn\x22][data-submit-show]")
          [_0x5bc1d9(0x29d)](_0x5bc1d9(0x263))
      )
        $(steps[x])
          [_0x5bc1d9(0x203)]("[data-form=\x22next-btn\x22][data-submit-show]")
          [_0x5bc1d9(0x1ee)]();
      else
        $("[data-form=\x22next-btn\x22]")[_0x5bc1d9(0x29d)](_0x5bc1d9(0x263)) &&
          $(_0x5bc1d9(0x2c5))[_0x5bc1d9(0x1ee)]();
      $(_0x5bc1d9(0x2b7))[_0x5bc1d9(0x1ee)](),
        $(_0x5bc1d9(0x1e1))[_0x5bc1d9(0x1ee)](),
        $(_0x5bc1d9(0x24b))[_0x5bc1d9(0x1ee)]();
    } else
      $("[data-form=\x22next-btn\x22]")["show"](),
        $(_0x5bc1d9(0x24b))["show"](),
        $(_0x5bc1d9(0x2b7))[_0x5bc1d9(0x222)](),
        $(_0x5bc1d9(0x1e1))[_0x5bc1d9(0x222)]();
  }
  $($(steps[x])[_0x5bc1d9(0x203)](_0x5bc1d9(0x1fb))[0x0])[_0x5bc1d9(0x1f3)](),
    $($(steps[x])[_0x5bc1d9(0x203)](_0x5bc1d9(0x23f))[0x0])[_0x5bc1d9(0x1f3)](),
    validation();
  for (idx = 0x0; idx <= x; idx++) {
    $($("[data-form=\x22custom-progress-indicator\x22]")[idx])[
      _0x5bc1d9(0x296)
    ](_0x5bc1d9(0x1f9));
  }
}
function validateEmail(_0x58528a, _0x53c29d, _0x390182) {
  const _0x5de4b4 = _0x26d8ca;
  let _0x46e17f = _0x58528a[_0x5de4b4(0x2b4)]("@")
    ? _0x58528a[_0x5de4b4(0x1d5)]("@")[0x1]["split"](".")[0x0]
    : [];
  dom = [];
  _0x53c29d !== undefined &&
    _0x53c29d[_0x5de4b4(0x1d5)](",")[_0x5de4b4(0x204)](function (_0x2ad674) {
      const _0x16db64 = _0x5de4b4;
      _0x2ad674[_0x16db64(0x2b4)](_0x46e17f) &&
        dom[_0x16db64(0x256)](_0x46e17f);
    });
  dom[_0x5de4b4(0x24e)] > 0x0 ? (domainAllowed = ![]) : (domainAllowed = !![]);
  var _0x39aaa7 = /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,20})?$/;
  console["log"](_0x39aaa7[_0x5de4b4(0x27d)](_0x58528a)),
    !_0x39aaa7[_0x5de4b4(0x27d)](_0x58528a) || !domainAllowed
      ? ((emailFilled = ![]),
        unfilledArr[_0x5de4b4(0x256)]({ input: _0x390182 }))
      : (emailFilled = !![]);
}
function phoneValidation(_0x18fa7e, _0x59b900, _0x485aed) {
  const _0x10757f = _0x26d8ca;
  if (phoneFormat)
    return _0x18fa7e[_0x10757f(0x1ea)](
      new RegExp(phoneFormat[_0x10757f(0x241)](0x1, -0x1)),
    ) && _0x59b900 >= _0x485aed
      ? !![]
      : ![];
  else {
    if (_0x59b900 >= _0x485aed) return !![];
  }
}
function validation() {
  const _0x162944 = _0x26d8ca;
  $(steps[x])[_0x162944(0x29d)](_0x162944(0x27c)) && enableBtn();
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
    (textareaLength = $(steps[x])[_0x162944(0x203)](_0x162944(0x22f))[
      _0x162944(0x24e)
    ]),
    (textInputLength = $(steps[x])[_0x162944(0x203)](_0x162944(0x1e0))[
      _0x162944(0x24e)
    ]),
    (selectInputLength = $(steps[x])[_0x162944(0x203)](
      "select[required]:visible",
    )[_0x162944(0x24e)]),
    (emailInputLength = $(steps[x])[_0x162944(0x203)](_0x162944(0x2a4))[
      _0x162944(0x24e)
    ]),
    (checkboxInputLength = $(steps[x])["find"](_0x162944(0x299))[
      _0x162944(0x24e)
    ]);
  textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0
    ? disableBtn()
    : enableBtn();
  checkCount = $(steps[x])[_0x162944(0x29d)](_0x162944(0x1f6))
    ? $(steps[x])[_0x162944(0x29d)]("checkbox")
    : $(steps[x])["find"](_0x162944(0x258))["length"] > 0x0
    ? $(steps[x])[_0x162944(0x203)](_0x162944(0x258))["data"](_0x162944(0x1f6))
    : 0x0;
  if (!logicExtra)
    $(steps[x])[_0x162944(0x203)](_0x162944(0x1f8))["is"](_0x162944(0x2a8)) &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])[_0x162944(0x203)](_0x162944(0x208))[_0x162944(0x24e)]
        ? $(steps[x])
            [_0x162944(0x203)](":input[type=\x22checkbox\x22]")
            ["each"](function () {
              const _0x3c07f1 = _0x162944;
              $(this)["is"](_0x3c07f1(0x275))
                ? $(steps[x])["find"](_0x3c07f1(0x1d6))[_0x3c07f1(0x24e)] <
                    0x1 &&
                  ((checkboxFilled = !![]),
                  resetInputErrorMessage($(this)["attr"](_0x3c07f1(0x224))))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0x3c07f1(0x256)]({
                    input: $(this)[_0x3c07f1(0x20e)](_0x3c07f1(0x224)),
                  }));
            })
        : $(steps[x])[_0x162944(0x203)](_0x162944(0x271))[_0x162944(0x24e)] >=
          checkCount
        ? $(steps[x])[_0x162944(0x203)](_0x162944(0x1d6))[_0x162944(0x24e)] >
          0x0
          ? $(steps[x])
              [_0x162944(0x203)](_0x162944(0x1d6))
              ["each"](function () {
                const _0x2a27d5 = _0x162944;
                !$(this)["is"](_0x2a27d5(0x275))
                  ? ((checkboxFilled = ![]),
                    unfilledArr[_0x2a27d5(0x256)]({
                      input: $(this)[_0x2a27d5(0x20e)](_0x2a27d5(0x224)),
                    }))
                  : ((checkboxFilled = !![]),
                    $(steps[x])[_0x2a27d5(0x203)](
                      ":input[type=\x22checkbox\x22][required]:checked",
                    )[_0x2a27d5(0x24e)] >=
                      $(steps[x])["find"](_0x2a27d5(0x1d6))[_0x2a27d5(0x24e)] &&
                      resetInputErrorMessage(
                        $(steps[x])
                          [_0x2a27d5(0x203)](":input[type=\x22checkbox\x22]")
                          [_0x2a27d5(0x20e)](_0x2a27d5(0x224)),
                      ));
              })
          : ((checkboxFilled = !![]),
            resetInputErrorMessage(
              $(steps[x])[_0x162944(0x203)](_0x162944(0x208))["attr"]("name"),
            ))
        : ((checkboxFilled = ![]),
          $(steps[x])
            [_0x162944(0x203)](_0x162944(0x1d6))
            [_0x162944(0x290)](function () {
              const _0x26d860 = _0x162944;
              $(this)[_0x26d860(0x294)](_0x26d860(0x275)) &&
                unfilledArr[_0x26d860(0x256)]({
                  input: $(this)[_0x26d860(0x20e)](_0x26d860(0x224)),
                });
            }),
          unfilledArr[_0x162944(0x256)]({
            input: $(steps[x])["find"](_0x162944(0x208))["attr"]("name"),
          }))),
      $(steps[x])
        [_0x162944(0x203)](_0x162944(0x206))
        [_0x162944(0x290)](function (_0x355d88) {
          const _0x5e7137 = _0x162944;
          var _0x42228a = $(this)["attr"]("name");
          $("input:radio[name=\x22" + _0x42228a + _0x5e7137(0x20b))[
            _0x5e7137(0x24e)
          ] == 0x0
            ? (!empReqRadio[_0x5e7137(0x203)](
                (_0x5e0b3f) => _0x5e0b3f["input"] === _0x355d88,
              ) && empReqRadio[_0x5e7137(0x256)]({ input: _0x355d88 }),
              unfilledArr[_0x5e7137(0x256)]({
                input: $(this)[_0x5e7137(0x20e)](_0x5e7137(0x224)),
              }))
            : (empReqRadio = empReqRadio["filter"](
                (_0x3733c4) => _0x3733c4[_0x5e7137(0x2bc)] !== _0x355d88,
              )),
            empReqRadio[_0x5e7137(0x24e)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0x162944(0x203)](":input[type=\x22text\x22][required]")
        [_0x162944(0x290)](function (_0x39f5cc) {
          const _0x522e39 = _0x162944;
          let _0x58d26e = $(this)[_0x522e39(0x29c)]()[_0x522e39(0x24e)],
            _0x1af5eb = $(this)[_0x522e39(0x29d)](_0x522e39(0x23b))
              ? $(this)["data"](_0x522e39(0x23b))
              : 0x0;
          $(this)[_0x522e39(0x29c)]() !== "" && _0x58d26e >= _0x1af5eb
            ? (empReqInput = empReqInput[_0x522e39(0x285)](
                (_0x7d500e) => _0x7d500e[_0x522e39(0x2bc)] !== _0x39f5cc,
              ))
            : (!empReqInput["find"](
                (_0x480282) => _0x480282[_0x522e39(0x2bc)] === _0x39f5cc,
              ) && empReqInput[_0x522e39(0x256)]({ input: _0x39f5cc }),
              unfilledArr[_0x522e39(0x256)]({
                input: $(this)[_0x522e39(0x20e)]("name"),
              })),
            empReqInput[_0x522e39(0x24e)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x162944(0x203)](_0x162944(0x23d))
        ["each"](function (_0x51eb55) {
          const _0x586331 = _0x162944;
          $(this)[_0x586331(0x29c)]() !== ""
            ? (empReqDate = empReqDate["filter"](
                (_0x2d002b) => _0x2d002b[_0x586331(0x2bc)] !== _0x51eb55,
              ))
            : (!empReqDate["find"](
                (_0x2dfb4a) => _0x2dfb4a[_0x586331(0x2bc)] === _0x51eb55,
              ) && empReqDate[_0x586331(0x256)]({ input: _0x51eb55 }),
              unfilledArr["push"]({
                input: $(this)[_0x586331(0x20e)](_0x586331(0x224)),
              })),
            empReqDate[_0x586331(0x24e)] === 0x0
              ? (dateFilled = !![])
              : (dateFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x162944(0x280))
        [_0x162944(0x290)](function (_0x127ff2) {
          const _0x4b0f75 = _0x162944;
          if ($(this)[_0x4b0f75(0x29c)]() !== "") {
            let _0xc12659 = $(this)[_0x4b0f75(0x29c)]()[_0x4b0f75(0x24e)],
              _0x31f06b = $(this)["data"](_0x4b0f75(0x23b))
                ? $(this)[_0x4b0f75(0x29d)](_0x4b0f75(0x23b))
                : 0x0;
            if ($(this)[_0x4b0f75(0x29d)](_0x4b0f75(0x1df))) {
              var _0x4525b4 = phoneAutoFormat(
                $(this)[_0x4b0f75(0x29d)](_0x4b0f75(0x1df)),
              );
              $(this)[_0x4b0f75(0x29c)](_0x4525b4($(this)[_0x4b0f75(0x29c)]()));
            }
            phoneValidation($(this)[_0x4b0f75(0x29c)](), _0xc12659, _0x31f06b)
              ? (empReqTel = empReqTel[_0x4b0f75(0x285)](
                  (_0x40d55c) => _0x40d55c["input"] !== _0x127ff2,
                ))
              : empReqTel[_0x4b0f75(0x256)]({ input: _0x127ff2 });
          } else
            !empReqTel[_0x4b0f75(0x203)](
              (_0x3ccc4b) => _0x3ccc4b["input"] === _0x127ff2,
            ) && empReqTel[_0x4b0f75(0x256)]({ input: _0x127ff2 }),
              unfilledArr["push"]({
                input: $(this)[_0x4b0f75(0x20e)](_0x4b0f75(0x224)),
              });
          empReqTel[_0x4b0f75(0x24e)] === 0x0
            ? (telFilled = !![])
            : (telFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x162944(0x25a))
        [_0x162944(0x290)](function (_0x3628f4) {
          const _0x587fb8 = _0x162944;
          $(this)["val"]() !== ""
            ? (empReqFile = empReqFile[_0x587fb8(0x285)](
                (_0x3ebfa9) => _0x3ebfa9[_0x587fb8(0x2bc)] !== _0x3628f4,
              ))
            : (!empReqFile[_0x587fb8(0x203)](
                (_0x366b89) => _0x366b89["input"] === _0x3628f4,
              ) && empReqFile[_0x587fb8(0x256)]({ input: _0x3628f4 }),
              unfilledArr[_0x587fb8(0x256)]({
                input: $(this)["attr"](_0x587fb8(0x224)),
              })),
            empReqFile[_0x587fb8(0x24e)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x162944(0x1f2))
        [_0x162944(0x290)](function (_0x5d58dd) {
          const _0x4e474c = _0x162944;
          let _0x450d62 = $(this)[_0x4e474c(0x29c)]()[_0x4e474c(0x24e)],
            _0x432987 = $(this)[_0x4e474c(0x29d)](_0x4e474c(0x23b))
              ? $(this)["data"](_0x4e474c(0x23b))
              : 0x0;
          $(this)[_0x4e474c(0x29c)]() !== "" && _0x450d62 >= _0x432987
            ? (empReqNum = empReqNum["filter"](
                (_0x1c9b3a) => _0x1c9b3a[_0x4e474c(0x2bc)] !== _0x5d58dd,
              ))
            : (!empReqNum["find"](
                (_0x4de678) => _0x4de678[_0x4e474c(0x2bc)] === _0x5d58dd,
              ) && empReqNum["push"]({ input: _0x5d58dd }),
              unfilledArr[_0x4e474c(0x256)]({
                input: $(this)["attr"](_0x4e474c(0x224)),
              })),
            empReqNum[_0x4e474c(0x24e)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x162944(0x203)](_0x162944(0x283))
        [_0x162944(0x290)](function (_0x43a33f) {
          const _0x5d0707 = _0x162944;
          let _0x466424 = $(this)["val"]();
          _0x466424 === "" && (_0x466424 = null),
            _0x466424 != null
              ? (empReqSelect = empReqSelect["filter"](
                  (_0x4851d9) => _0x4851d9[_0x5d0707(0x2bc)] !== _0x43a33f,
                ))
              : (!empReqSelect[_0x5d0707(0x203)](
                  (_0x1bde70) => _0x1bde70[_0x5d0707(0x2bc)] === _0x43a33f,
                ) && empReqSelect["push"]({ input: _0x43a33f }),
                unfilledArr[_0x5d0707(0x256)]({
                  input: $(this)[_0x5d0707(0x20e)]("name"),
                })),
            empReqSelect["length"] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x162944(0x203)](_0x162944(0x1f0))
        [_0x162944(0x290)](function (_0x499081) {
          const _0x2332a5 = _0x162944;
          let _0x3c186c = $(this)[_0x2332a5(0x29c)]()[_0x2332a5(0x24e)],
            _0x3ab16c = $(this)["data"](_0x2332a5(0x23b))
              ? $(this)[_0x2332a5(0x29d)](_0x2332a5(0x23b))
              : 0x0;
          $(this)["val"]() !== "" && _0x3c186c >= _0x3ab16c
            ? (empReqTextarea = empReqTextarea["filter"](
                (_0x449ca1) => _0x449ca1["input"] !== _0x499081,
              ))
            : (!empReqTextarea[_0x2332a5(0x203)](
                (_0x34efde) => _0x34efde[_0x2332a5(0x2bc)] === _0x499081,
              ) && empReqTextarea["push"]({ input: _0x499081 }),
              unfilledArr[_0x2332a5(0x256)]({
                input: $(this)[_0x2332a5(0x20e)](_0x2332a5(0x224)),
              })),
            empReqTextarea[_0x2332a5(0x24e)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x162944(0x203)](":input[type=\x22email\x22][required]")
        [_0x162944(0x290)](function () {
          const _0x1b5b42 = _0x162944;
          $(this)[_0x1b5b42(0x29c)]() !== ""
            ? validateEmail(
                $(this)[_0x1b5b42(0x29c)](),
                $(this)[_0x1b5b42(0x29d)]("block-domain"),
                $(this)["attr"](_0x1b5b42(0x224)),
              )
            : ((emailFilled = ![]),
              unfilledArr["push"]({ input: $(this)["attr"]("name") }));
        });
  else {
    if ($(steps[x])[_0x162944(0x29d)]("card"))
      (answer = $(steps[x])
        ["find"](_0x162944(0x229))
        [_0x162944(0x29d)](_0x162944(0x264))),
        (selections = selections[_0x162944(0x285)](
          (_0x3e6b3b) => _0x3e6b3b["step"] !== x,
        )),
        selections[_0x162944(0x256)]({ step: x, selected: answer });
    else
      $(steps[x])["find"](_0x162944(0x228))[_0x162944(0x29d)]("card") &&
        ((answer = $(steps[x])
          [_0x162944(0x203)](_0x162944(0x228))
          ["data"](_0x162944(0x264))),
        (selections = selections[_0x162944(0x285)](
          (_0x3a3a5f) => _0x3a3a5f[_0x162944(0x2af)] !== x,
        )),
        selections[_0x162944(0x256)]({ step: x, selected: answer }));
    $(steps[x])
      [_0x162944(0x203)](_0x162944(0x228))
      [_0x162944(0x203)](_0x162944(0x1f8))
      ["is"](_0x162944(0x2a8)) &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])[_0x162944(0x203)](_0x162944(0x208))[_0x162944(0x24e)]
        ? $(steps[x])
            [_0x162944(0x203)](_0x162944(0x208))
            [_0x162944(0x290)](function () {
              const _0x4b72f5 = _0x162944;
              $(this)["is"](":checked")
                ? $(steps[x])["find"](_0x4b72f5(0x289))[_0x4b72f5(0x24e)] <
                    0x1 &&
                  ((skipTo = undefined),
                  $(this)
                    [_0x4b72f5(0x26e)](_0x4b72f5(0x217))
                    ["data"](_0x4b72f5(0x24f)) &&
                    (skipTo = $(this)
                      [_0x4b72f5(0x26e)]("[data-skip-to]")
                      [_0x4b72f5(0x29d)](_0x4b72f5(0x24f))),
                  $(this)
                    [_0x4b72f5(0x26e)](_0x4b72f5(0x229))
                    [_0x4b72f5(0x20e)](_0x4b72f5(0x27a)) &&
                    ((answer = $(this)
                      [_0x4b72f5(0x26e)](_0x4b72f5(0x229))
                      [_0x4b72f5(0x20e)](_0x4b72f5(0x27a))),
                    (selections = selections["filter"](
                      (_0x551c46) => _0x551c46[_0x4b72f5(0x2af)] !== x,
                    )),
                    selections["push"]({ step: x, selected: answer }),
                    skipTo &&
                      (selections[_0x4b72f5(0x256)]({
                        step: skipTo - 0x2,
                        selected: answer,
                      }),
                      (objIndex = selections[_0x4b72f5(0x29e)](
                        (_0x470fd6) => _0x470fd6[_0x4b72f5(0x2af)] === x,
                      )),
                      (selections[objIndex][_0x4b72f5(0x29b)] =
                        parseInt(skipTo) - 0x1),
                      (selections[objIndex][_0x4b72f5(0x20c)] = x))),
                  (checkboxFilled = !![]),
                  $(steps[x])[_0x4b72f5(0x203)](
                    ":input[type=\x22checkbox\x22][required]:checked",
                  )[_0x4b72f5(0x24e)] >=
                    $(steps[x])[_0x4b72f5(0x203)](
                      ":input[type=\x22checkbox\x22][required]",
                    )[_0x4b72f5(0x24e)] &&
                    resetInputErrorMessage(
                      $(steps[x])
                        ["find"](":input[type=\x22checkbox\x22]")
                        ["attr"](_0x4b72f5(0x224)),
                    ))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0x4b72f5(0x256)]({
                    input: $(this)[_0x4b72f5(0x20e)](_0x4b72f5(0x224)),
                  }));
            })
        : $(steps[x])
            [_0x162944(0x203)](_0x162944(0x228))
            [_0x162944(0x203)](_0x162944(0x271))["length"] >= checkCount
        ? ($(steps[x])
            [_0x162944(0x203)](_0x162944(0x228))
            [_0x162944(0x203)](_0x162944(0x208))
            ["parents"]("[data-go-to]")
            [_0x162944(0x20e)](_0x162944(0x27a)) &&
            ((skipTo = undefined),
            $(steps[x])
              [_0x162944(0x203)](_0x162944(0x228))
              [_0x162944(0x203)](":input[type=\x22checkbox\x22]")
              [_0x162944(0x26e)](_0x162944(0x217))
              ["attr"](_0x162944(0x23e)) &&
              (skipTo = $(steps[x])
                [_0x162944(0x203)]("[data-answer]:visible")
                [_0x162944(0x203)](_0x162944(0x271))
                [_0x162944(0x26e)](_0x162944(0x217))
                [_0x162944(0x20e)]("data-skip-to")),
            (answer = $(steps[x])
              ["find"](_0x162944(0x228))
              [_0x162944(0x203)](":input[type=\x22checkbox\x22]")
              ["parents"]("[data-go-to]")
              ["attr"](_0x162944(0x27a))),
            (selections = selections[_0x162944(0x285)](
              (_0x3fda98) => _0x3fda98[_0x162944(0x2af)] !== x,
            )),
            selections[_0x162944(0x256)]({ step: x, selected: answer }),
            skipTo &&
              (selections["push"]({ step: skipTo - 0x2, selected: answer }),
              (objIndex = selections[_0x162944(0x29e)](
                (_0x4bc7f6) => _0x4bc7f6["step"] === x,
              )),
              (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
              (selections[objIndex]["backTo"] = x))),
          (selections = selections[_0x162944(0x285)](
            (_0x13e0f3) => _0x13e0f3[_0x162944(0x2af)] !== x,
          )),
          selections["push"]({ step: x, selected: answer }),
          (checkboxFilled = !![]),
          $(steps[x])["find"](_0x162944(0x225))[_0x162944(0x24e)] >=
            $(steps[x])[_0x162944(0x203)](_0x162944(0x1d6))[_0x162944(0x24e)] &&
            resetInputErrorMessage(
              $(steps[x])["find"](_0x162944(0x208))[_0x162944(0x20e)]("name"),
            ))
        : ((checkboxFilled = ![]),
          $(steps[x])
            [_0x162944(0x203)](_0x162944(0x1d6))
            ["each"](function () {
              const _0x4cbce4 = _0x162944;
              $(this)[_0x4cbce4(0x294)](_0x4cbce4(0x275)) &&
                unfilledArr[_0x4cbce4(0x256)]({
                  input: $(this)["attr"]("name"),
                });
            }))),
      $(steps[x])
        [_0x162944(0x203)]("[data-answer]:visible")
        [_0x162944(0x203)]("input:radio[required]")
        ["each"](function (_0x317941) {
          const _0x12f291 = _0x162944;
          var _0x1ec203 = $(this)[_0x12f291(0x20e)](_0x12f291(0x224));
          $(_0x12f291(0x1fa) + _0x1ec203 + _0x12f291(0x20b))[
            _0x12f291(0x24e)
          ] == 0x0
            ? (!empReqRadio[_0x12f291(0x203)](
                (_0x232e9c) => _0x232e9c[_0x12f291(0x2bc)] === _0x317941,
              ) && empReqRadio[_0x12f291(0x256)]({ input: _0x317941 }),
              unfilledArr[_0x12f291(0x256)]({
                input: $(this)[_0x12f291(0x20e)](_0x12f291(0x224)),
              }))
            : (empReqRadio = empReqRadio[_0x12f291(0x285)](
                (_0x3a9531) => _0x3a9531[_0x12f291(0x2bc)] !== _0x317941,
              )),
            empReqRadio[_0x12f291(0x24e)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0x162944(0x203)](_0x162944(0x228))
        [_0x162944(0x203)](_0x162944(0x2a6))
        [_0x162944(0x290)](function (_0x5996be) {
          const _0x286f22 = _0x162944;
          let _0x54e75f = $(this)[_0x286f22(0x29c)]()["length"],
            _0x1cc80c = $(this)[_0x286f22(0x29d)](_0x286f22(0x23b))
              ? $(this)[_0x286f22(0x29d)](_0x286f22(0x23b))
              : 0x0;
          $(this)["val"]() !== "" && _0x54e75f >= _0x1cc80c
            ? (empReqInput = empReqInput[_0x286f22(0x285)](
                (_0x1569c5) => _0x1569c5[_0x286f22(0x2bc)] !== _0x5996be,
              ))
            : (!empReqInput[_0x286f22(0x203)](
                (_0x536c48) => _0x536c48[_0x286f22(0x2bc)] === _0x5996be,
              ) && empReqInput[_0x286f22(0x256)]({ input: _0x5996be }),
              unfilledArr[_0x286f22(0x256)]({
                input: $(this)[_0x286f22(0x20e)](_0x286f22(0x224)),
              })),
            empReqInput["length"] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x162944(0x203)](_0x162944(0x228))
        [_0x162944(0x203)](_0x162944(0x287))
        [_0x162944(0x290)](function (_0x35af7d) {
          const _0x465b0f = _0x162944;
          (skipTo = undefined),
            $(this)
              [_0x465b0f(0x26e)](_0x465b0f(0x217))
              [_0x465b0f(0x29d)]("skip-to") !== "" &&
              (skipTo = $(this)
                ["parents"](_0x465b0f(0x217))
                ["data"](_0x465b0f(0x24f))),
            $(this)
              ["parents"](_0x465b0f(0x229))
              [_0x465b0f(0x20e)](_0x465b0f(0x27a)) &&
              ((answer = $(this)
                [_0x465b0f(0x26e)]("[data-go-to]")
                [_0x465b0f(0x20e)](_0x465b0f(0x27a))),
              (selections = selections["filter"](
                (_0x26128d) => _0x26128d[_0x465b0f(0x2af)] !== x,
              )),
              selections[_0x465b0f(0x256)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0x465b0f(0x29e)](
                  (_0x401db7) => _0x401db7[_0x465b0f(0x2af)] === x,
                )),
                (selections[objIndex][_0x465b0f(0x29b)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x465b0f(0x20c)] = x)));
        }),
      $(steps[x])
        ["find"](_0x162944(0x228))
        ["find"](_0x162944(0x23d))
        ["each"](function (_0x408aa6) {
          const _0x4abf91 = _0x162944;
          $(this)[_0x4abf91(0x29c)]() !== ""
            ? (empReqDate = empReqDate[_0x4abf91(0x285)](
                (_0xfd8b72) => _0xfd8b72[_0x4abf91(0x2bc)] !== _0x408aa6,
              ))
            : (!empReqDate[_0x4abf91(0x203)](
                (_0x400173) => _0x400173[_0x4abf91(0x2bc)] === _0x408aa6,
              ) && empReqDate["push"]({ input: _0x408aa6 }),
              unfilledArr["push"]({
                input: $(this)[_0x4abf91(0x20e)](_0x4abf91(0x224)),
              })),
            empReqDate[_0x4abf91(0x24e)] === 0x0
              ? (dateFilled = !![])
              : (dateFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x162944(0x228))
        [_0x162944(0x203)](_0x162944(0x2ca))
        [_0x162944(0x290)](function (_0x50c448) {
          const _0x442490 = _0x162944;
          (skipTo = undefined),
            $(this)
              [_0x442490(0x26e)](_0x442490(0x217))
              [_0x442490(0x29d)](_0x442490(0x24f)) !== "" &&
              (skipTo = $(this)
                [_0x442490(0x26e)](_0x442490(0x217))
                [_0x442490(0x29d)]("skip-to")),
            $(this)
              [_0x442490(0x26e)](_0x442490(0x229))
              ["attr"](_0x442490(0x27a)) &&
              ((answer = $(this)
                ["parents"](_0x442490(0x229))
                ["attr"](_0x442490(0x27a))),
              (selections = selections[_0x442490(0x285)](
                (_0x1dc906) => _0x1dc906[_0x442490(0x2af)] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x442490(0x256)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x2270e7) => _0x2270e7[_0x442490(0x2af)] === x,
                )),
                (selections[objIndex][_0x442490(0x29b)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x442490(0x20c)] = x)));
        }),
      $(steps[x])
        ["find"](_0x162944(0x228))
        [_0x162944(0x203)](_0x162944(0x1f2))
        [_0x162944(0x290)](function (_0x255ee6) {
          const _0x4a4756 = _0x162944;
          let _0x3e979d = $(this)[_0x4a4756(0x29c)]()[_0x4a4756(0x24e)],
            _0x504363 = $(this)[_0x4a4756(0x29d)](_0x4a4756(0x23b))
              ? $(this)[_0x4a4756(0x29d)]("min-character")
              : 0x0;
          $(this)[_0x4a4756(0x29c)]() !== "" && _0x3e979d >= _0x504363
            ? (empReqNum = empReqNum[_0x4a4756(0x285)](
                (_0x29caaf) => _0x29caaf["input"] !== _0x255ee6,
              ))
            : (!empReqNum[_0x4a4756(0x203)](
                (_0x21d239) => _0x21d239[_0x4a4756(0x2bc)] === _0x255ee6,
              ) && empReqNum[_0x4a4756(0x256)]({ input: _0x255ee6 }),
              unfilledArr[_0x4a4756(0x256)]({
                input: $(this)[_0x4a4756(0x20e)](_0x4a4756(0x224)),
              })),
            empReqNum[_0x4a4756(0x24e)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x162944(0x203)]("[data-answer]:visible")
        [_0x162944(0x203)](_0x162944(0x1ef))
        ["each"](function (_0x595923) {
          const _0x438c5f = _0x162944;
          (skipTo = undefined),
            $(this)
              ["parents"](_0x438c5f(0x217))
              [_0x438c5f(0x29d)](_0x438c5f(0x24f)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0x438c5f(0x217))
                [_0x438c5f(0x29d)](_0x438c5f(0x24f))),
            $(this)
              [_0x438c5f(0x26e)](_0x438c5f(0x229))
              [_0x438c5f(0x20e)](_0x438c5f(0x27a)) &&
              ((answer = $(this)
                ["parents"](_0x438c5f(0x229))
                [_0x438c5f(0x20e)](_0x438c5f(0x27a))),
              (selections = selections[_0x438c5f(0x285)](
                (_0x22a247) => _0x22a247[_0x438c5f(0x2af)] !== x,
              )),
              selections[_0x438c5f(0x256)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x438c5f(0x256)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x438c5f(0x29e)](
                  (_0x599634) => _0x599634[_0x438c5f(0x2af)] === x,
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x162944(0x203)]("[data-answer]:visible")
        ["find"](_0x162944(0x280))
        [_0x162944(0x290)](function (_0x4e1c7b) {
          const _0x2e8c35 = _0x162944;
          if ($(this)["val"]() !== "") {
            let _0x394cf0 = $(this)["val"]()["length"],
              _0x3e70d3 = $(this)[_0x2e8c35(0x29d)](_0x2e8c35(0x23b))
                ? $(this)["data"](_0x2e8c35(0x23b))
                : 0x0;
            if ($(this)[_0x2e8c35(0x29d)]("phone-autoformat")) {
              var _0x519d3a = phoneAutoFormat(
                $(this)[_0x2e8c35(0x29d)](_0x2e8c35(0x1df)),
              );
              $(this)[_0x2e8c35(0x29c)](_0x519d3a($(this)[_0x2e8c35(0x29c)]()));
            }
            phoneValidation($(this)[_0x2e8c35(0x29c)](), _0x394cf0, _0x3e70d3)
              ? (empReqTel = empReqTel[_0x2e8c35(0x285)](
                  (_0x2b9431) => _0x2b9431[_0x2e8c35(0x2bc)] !== _0x4e1c7b,
                ))
              : empReqTel[_0x2e8c35(0x256)]({ input: _0x4e1c7b });
          } else
            !empReqTel[_0x2e8c35(0x203)](
              (_0x3cc6c2) => _0x3cc6c2[_0x2e8c35(0x2bc)] === _0x4e1c7b,
            ) && empReqTel["push"]({ input: _0x4e1c7b }),
              unfilledArr[_0x2e8c35(0x256)]({
                input: $(this)["attr"](_0x2e8c35(0x224)),
              });
          empReqTel[_0x2e8c35(0x24e)] === 0x0
            ? (telFilled = !![])
            : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x162944(0x203)](_0x162944(0x228))
        [_0x162944(0x203)](_0x162944(0x2be))
        [_0x162944(0x290)](function (_0x3fb155) {
          const _0x1ef514 = _0x162944;
          (skipTo = undefined),
            $(this)
              [_0x1ef514(0x26e)](_0x1ef514(0x217))
              [_0x1ef514(0x29d)](_0x1ef514(0x24f)) !== "" &&
              (skipTo = $(this)
                [_0x1ef514(0x26e)](_0x1ef514(0x217))
                ["data"](_0x1ef514(0x24f))),
            $(this)
              ["parents"](_0x1ef514(0x229))
              [_0x1ef514(0x20e)]("data-go-to") &&
              ((answer = $(this)
                [_0x1ef514(0x26e)](_0x1ef514(0x229))
                [_0x1ef514(0x20e)]("data-go-to")),
              (selections = selections["filter"](
                (_0x3640f9) => _0x3640f9[_0x1ef514(0x2af)] !== x,
              )),
              selections[_0x1ef514(0x256)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x1ef514(0x256)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x1ef514(0x29e)](
                  (_0x34bcdc) => _0x34bcdc[_0x1ef514(0x2af)] === x,
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x1ef514(0x20c)] = x)));
        }),
      $(steps[x])
        ["find"](_0x162944(0x228))
        [_0x162944(0x203)](_0x162944(0x25a))
        [_0x162944(0x290)](function (_0x9700aa) {
          const _0x49402e = _0x162944;
          $(this)[_0x49402e(0x29c)]() !== ""
            ? (empReqFile = empReqFile[_0x49402e(0x285)](
                (_0x41d4f3) => _0x41d4f3[_0x49402e(0x2bc)] !== _0x9700aa,
              ))
            : (!empReqFile["find"](
                (_0x45c3b) => _0x45c3b["input"] === _0x9700aa,
              ) && empReqFile[_0x49402e(0x256)]({ input: _0x9700aa }),
              unfilledArr[_0x49402e(0x256)]({
                input: $(this)[_0x49402e(0x20e)](_0x49402e(0x224)),
              })),
            empReqFile[_0x49402e(0x24e)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x162944(0x203)](_0x162944(0x228))
        ["find"](_0x162944(0x1ca))
        [_0x162944(0x290)](function (_0x2ed712) {
          const _0x29a839 = _0x162944;
          (skipTo = undefined),
            $(this)
              [_0x29a839(0x26e)](_0x29a839(0x217))
              [_0x29a839(0x29d)](_0x29a839(0x24f)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0x29a839(0x217))
                [_0x29a839(0x29d)]("skip-to")),
            $(this)
              [_0x29a839(0x26e)](_0x29a839(0x229))
              ["attr"](_0x29a839(0x27a)) &&
              ((answer = $(this)
                ["parents"]("[data-go-to]")
                [_0x29a839(0x20e)]("data-go-to")),
              (selections = selections[_0x29a839(0x285)](
                (_0x10f457) => _0x10f457[_0x29a839(0x2af)] !== x,
              )),
              selections[_0x29a839(0x256)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x29a839(0x256)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x29a839(0x29e)](
                  (_0x4a03f9) => _0x4a03f9[_0x29a839(0x2af)] === x,
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x162944(0x203)]("[data-answer]:visible")
        [_0x162944(0x203)](_0x162944(0x283))
        [_0x162944(0x290)](function (_0x275b83) {
          const _0x5547e5 = _0x162944;
          $(this)["val"]() !== ""
            ? (empReqSelect = empReqSelect[_0x5547e5(0x285)](
                (_0x473d21) => _0x473d21["input"] !== _0x275b83,
              ))
            : (!empReqSelect[_0x5547e5(0x203)](
                (_0x3dd630) => _0x3dd630[_0x5547e5(0x2bc)] === _0x275b83,
              ) && empReqSelect[_0x5547e5(0x256)]({ input: _0x275b83 }),
              unfilledArr[_0x5547e5(0x256)]({
                input: $(this)["attr"]("name"),
              })),
            empReqSelect[_0x5547e5(0x24e)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x162944(0x203)](_0x162944(0x228))
        [_0x162944(0x203)](_0x162944(0x268))
        [_0x162944(0x290)](function (_0x1434f6) {
          const _0x523e97 = _0x162944;
          (skipTo = undefined),
            $(this)
              [_0x523e97(0x26e)]("[data-skip-to]")
              [_0x523e97(0x29d)](_0x523e97(0x24f)) !== "" &&
              (skipTo = $(this)
                [_0x523e97(0x26e)](_0x523e97(0x217))
                ["data"](_0x523e97(0x24f))),
            $(this)
              [_0x523e97(0x26e)](_0x523e97(0x229))
              [_0x523e97(0x20e)]("data-go-to") &&
              ((answer = $(this)
                [_0x523e97(0x26e)](_0x523e97(0x229))
                [_0x523e97(0x20e)](_0x523e97(0x27a))),
              (selections = selections[_0x523e97(0x285)](
                (_0xb2ac85) => _0xb2ac85["step"] !== x,
              )),
              selections[_0x523e97(0x256)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x523e97(0x256)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x523e97(0x29e)](
                  (_0x3a55bf) => _0x3a55bf[_0x523e97(0x2af)] === x,
                )),
                (selections[objIndex][_0x523e97(0x29b)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x523e97(0x20c)] = x)));
        }),
      $(steps[x])
        [_0x162944(0x203)]("[data-answer]:visible")
        [_0x162944(0x203)](_0x162944(0x1f0))
        [_0x162944(0x290)](function (_0x409e0b) {
          const _0x13fdd4 = _0x162944;
          let _0xcffb99 = $(this)[_0x13fdd4(0x29c)]()[_0x13fdd4(0x24e)],
            _0x1ae75a = $(this)[_0x13fdd4(0x29d)](_0x13fdd4(0x23b))
              ? $(this)[_0x13fdd4(0x29d)](_0x13fdd4(0x23b))
              : 0x0;
          $(this)["val"]() !== "" && _0xcffb99 >= _0x1ae75a
            ? (empReqTextarea = empReqTextarea[_0x13fdd4(0x285)](
                (_0x6a75f3) => _0x6a75f3[_0x13fdd4(0x2bc)] !== _0x409e0b,
              ))
            : (!empReqTextarea[_0x13fdd4(0x203)](
                (_0xcd55c8) => _0xcd55c8[_0x13fdd4(0x2bc)] === _0x409e0b,
              ) && empReqTextarea[_0x13fdd4(0x256)]({ input: _0x409e0b }),
              unfilledArr[_0x13fdd4(0x256)]({
                input: $(this)[_0x13fdd4(0x20e)](_0x13fdd4(0x224)),
              })),
            empReqTextarea["length"] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x162944(0x203)](_0x162944(0x228))
        [_0x162944(0x203)](_0x162944(0x292))
        ["each"](function (_0x300500) {
          const _0x23efad = _0x162944;
          (skipTo = undefined),
            $(this)["parents"]("[data-skip-to]")["data"](_0x23efad(0x24f)) !==
              "" &&
              (skipTo = $(this)
                [_0x23efad(0x26e)](_0x23efad(0x217))
                [_0x23efad(0x29d)](_0x23efad(0x24f))),
            $(this)
              ["parents"](_0x23efad(0x229))
              [_0x23efad(0x20e)](_0x23efad(0x27a)) &&
              ((answer = $(this)
                ["parents"]("[data-go-to]")
                [_0x23efad(0x20e)]("data-go-to")),
              (selections = selections["filter"](
                (_0x268a8b) => _0x268a8b[_0x23efad(0x2af)] !== x,
              )),
              selections[_0x23efad(0x256)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x23efad(0x256)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x23efad(0x29e)](
                  (_0x57c23b) => _0x57c23b[_0x23efad(0x2af)] === x,
                )),
                (selections[objIndex][_0x23efad(0x29b)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x23efad(0x20c)] = x)));
        }),
      $(steps[x])
        [_0x162944(0x203)](_0x162944(0x228))
        [_0x162944(0x203)](_0x162944(0x22b))
        [_0x162944(0x290)](function (_0x3a470c) {
          const _0x131f18 = _0x162944;
          $(this)[_0x131f18(0x29c)]() !== ""
            ? validateEmail(
                $(this)[_0x131f18(0x29c)](),
                $(this)["data"](_0x131f18(0x230)),
                $(this)["attr"]("name"),
              )
            : ((emailFilled = ![]),
              unfilledArr[_0x131f18(0x256)]({
                input: $(this)[_0x131f18(0x20e)]("name"),
              }));
        }),
      $(steps[x])
        [_0x162944(0x203)](_0x162944(0x228))
        [_0x162944(0x203)](_0x162944(0x21a))
        [_0x162944(0x290)](function (_0xf56f49) {
          const _0x25427a = _0x162944;
          (skipTo = undefined),
            $(this)
              [_0x25427a(0x26e)](_0x25427a(0x217))
              [_0x25427a(0x29d)](_0x25427a(0x24f)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0x25427a(0x217))
                [_0x25427a(0x29d)]("skip-to")),
            $(this)
              [_0x25427a(0x26e)](_0x25427a(0x229))
              [_0x25427a(0x20e)](_0x25427a(0x27a)) &&
              ((answer = $(this)
                [_0x25427a(0x26e)](_0x25427a(0x229))
                ["attr"](_0x25427a(0x27a))),
              (selections = selections[_0x25427a(0x285)](
                (_0x338292) => _0x338292[_0x25427a(0x2af)] !== x,
              )),
              selections[_0x25427a(0x256)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x25427a(0x256)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x25427a(0x29e)](
                  (_0x40d69d) => _0x40d69d[_0x25427a(0x2af)] === x,
                )),
                (selections[objIndex][_0x25427a(0x29b)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        });
  }
  $(steps[x])
    [_0x162944(0x203)](":input[type=\x22radio\x22]")
    ["is"](":checked") &&
    ((selArr = []),
    $(steps)
      [_0x162944(0x203)]("[data-selected]:checked")
      ["each"](function (_0x4a5ae4, _0x5a2073) {
        const _0x38242e = _0x162944;
        selArr[_0x38242e(0x256)]({
          selected: $(this)["data"](_0x38242e(0x25f)),
        });
      }),
    (selString = []),
    selArr[_0x162944(0x204)]((_0x1deb6f) =>
      selString[_0x162944(0x256)](_0x1deb6f[_0x162944(0x25f)]),
    ),
    (selections = selections[_0x162944(0x285)](
      (_0x2d95dd) => _0x2d95dd[_0x162944(0x2af)] !== x,
    )),
    $(steps[x])
      [_0x162944(0x203)](_0x162944(0x228))
      [_0x162944(0x203)](_0x162944(0x1cb))
      [_0x162944(0x290)](function () {
        const _0x206265 = _0x162944;
        skipTo = undefined;
        if (
          $(this)
            [_0x206265(0x26e)](_0x206265(0x217))
            [_0x206265(0x29d)](_0x206265(0x24f))
        )
          skipTo = $(this)
            [_0x206265(0x26e)](_0x206265(0x217))
            ["data"](_0x206265(0x24f));
        else
          $(this)["data"](_0x206265(0x24f)) &&
            (skipTo = $(this)["data"](_0x206265(0x24f)));
        if ($(this)[_0x206265(0x29d)](_0x206265(0x264)))
          (answer = $(this)[_0x206265(0x20e)](_0x206265(0x27a))),
            console[_0x206265(0x297)](answer, selections),
            selections[_0x206265(0x256)]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0x206265(0x256)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0x206265(0x29e)](
                (_0x5f508) => _0x5f508[_0x206265(0x2af)] === x,
              )),
              (selections[objIndex][_0x206265(0x29b)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x206265(0x20c)] = x));
        else
          $(this)
            [_0x206265(0x26e)](_0x206265(0x229))
            [_0x206265(0x29d)]("go-to") &&
            ((answer = $(this)
              [_0x206265(0x26e)](_0x206265(0x229))
              [_0x206265(0x29d)](_0x206265(0x264))),
            selections["push"]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0x206265(0x256)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0x206265(0x29e)](
                (_0x26f1f7) => _0x26f1f7[_0x206265(0x2af)] === x,
              )),
              (selections[objIndex][_0x206265(0x29b)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x206265(0x20c)] = x)));
      }),
    console[_0x162944(0x297)](),
    logicExtra
      ? ($(steps[x])
          [_0x162944(0x203)]("[data-answer]:visible")
          [_0x162944(0x203)]("[data-radio-skip]:visible")
          [_0x162944(0x29d)](_0x162944(0x2aa)) === !![] ||
          $(steps[x])
            [_0x162944(0x203)](_0x162944(0x2a0))
            [_0x162944(0x29d)](_0x162944(0x2aa)) === !![]) &&
        skip &&
        selections[_0x162944(0x285)](
          (_0x43a797) => _0x43a797[_0x162944(0x2af)] === x,
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
            [_0x162944(0x203)]("[data-radio-delay]")
            ["data"](_0x162944(0x1e4)),
        )
      : $(steps[x])
          ["find"]("[data-radio-skip]:visible")
          [_0x162944(0x29d)]("radio-skip") === !![] &&
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
            [_0x162944(0x203)](_0x162944(0x240))
            [_0x162944(0x29d)](_0x162944(0x1e4)),
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
    textareaFilled
      ? enableBtn()
      : disableBtn();
}
function displayErrorMessage() {
  const _0x486dcf = _0x26d8ca;
  $("[data-text=\x22error-message\x22]")["hide"](),
    unfilledArr["length"] > 0x0 &&
      unfilledArr[_0x486dcf(0x204)](function (_0x98b6e) {
        const _0x507b97 = _0x486dcf;
        $(_0x507b97(0x245) + _0x98b6e[_0x507b97(0x2bc)] + "\x22]")
          [_0x507b97(0x223)](_0x507b97(0x21f))
          [_0x507b97(0x270)](),
          $(_0x507b97(0x245) + _0x98b6e[_0x507b97(0x2bc)] + "\x22]")
            [_0x507b97(0x26e)]()
            [_0x507b97(0x2bb)](_0x507b97(0x21f))
            [_0x507b97(0x270)](),
          $("textarea[name=\x22" + _0x98b6e["input"] + "\x22]")
            [_0x507b97(0x223)](_0x507b97(0x21f))
            ["fadeIn"](),
          $(_0x507b97(0x213) + _0x98b6e[_0x507b97(0x2bc)] + "\x22]")
            [_0x507b97(0x223)](_0x507b97(0x21f))
            [_0x507b97(0x270)]();
      });
}
function resetInputErrorMessage(_0x5bc2f9) {
  const _0x21e8bb = _0x26d8ca;
  $(_0x21e8bb(0x245) + _0x5bc2f9 + "\x22]")
    [_0x21e8bb(0x223)](_0x21e8bb(0x21f))
    [_0x21e8bb(0x222)](),
    $(_0x21e8bb(0x245) + _0x5bc2f9 + "\x22]")
      [_0x21e8bb(0x26e)]()
      [_0x21e8bb(0x2bb)](_0x21e8bb(0x21f))
      [_0x21e8bb(0x222)](),
    $(_0x21e8bb(0x273) + _0x5bc2f9 + "\x22]")
      ["siblings"]("[data-text=\x22error-message\x22]")
      [_0x21e8bb(0x222)](),
    $(_0x21e8bb(0x213) + _0x5bc2f9 + "\x22]")
      [_0x21e8bb(0x223)](_0x21e8bb(0x21f))
      [_0x21e8bb(0x222)]();
}
function increaseCurstep() {
  const _0x2c7964 = _0x26d8ca;
  countCard
    ? ((curStep = curStep + 0x1),
      $(_0x2c7964(0x252))[_0x2c7964(0x2c6)](steps[_0x2c7964(0x24e)]))
    : $(steps[x])[_0x2c7964(0x29d)](_0x2c7964(0x27c))
    ? (curStep = curStep + 0x0)
    : (curStep = curStep + 0x1),
    $(_0x2c7964(0x2a9))[_0x2c7964(0x2c6)](curStep);
}
function decreaseCurstep() {
  const _0x3f0bd1 = _0x26d8ca;
  countCard
    ? ((curStep = curStep - 0x1),
      $("[data-text=\x22total-steps\x22]")[_0x3f0bd1(0x2c6)](
        steps[_0x3f0bd1(0x24e)],
      ))
    : $(steps[x])["data"](_0x3f0bd1(0x27c))
    ? (curStep = curStep - 0x0)
    : (curStep = curStep - 0x1),
    $(_0x3f0bd1(0x2a9))[_0x3f0bd1(0x2c6)](curStep);
}
function nextStep() {
  const _0x361398 = _0x26d8ca;
  customError
    ? ($(_0x361398(0x21f))[_0x361398(0x222)](),
      fill
        ? (x++,
          increaseCurstep(),
          (progress = x),
          x <= steps[_0x361398(0x24e)] - 0x1 &&
            (updateStep(), memory && saveFilledInput()))
        : displayErrorMessage())
    : (x++,
      increaseCurstep(),
      x > progress && (progress = x),
      x <= steps[_0x361398(0x24e)] - 0x1 &&
        (updateStep(), memory && saveFilledInput()));
}
function backStep() {
  const _0x404da9 = _0x26d8ca;
  customError && $(_0x404da9(0x21f))[_0x404da9(0x222)](),
    decreaseCurstep(),
    x > 0x0 &&
      ($(progressbar[x])["removeClass"](_0x404da9(0x239)),
      selections[_0x404da9(0x285)]((_0x155d9f) => _0x155d9f["skipTo"] === x)[
        "length"
      ] > 0x0
        ? (x = parseInt(
            getSafe(
              () =>
                selections[_0x404da9(0x285)](
                  (_0x1d6fa7) => _0x1d6fa7[_0x404da9(0x29b)] === x,
                )[0x0]["backTo"],
            ),
          ))
        : x--,
      updateStep()),
    ($(steps[x])
      [_0x404da9(0x203)]("[data-radio-skip]:visible")
      [_0x404da9(0x29d)](_0x404da9(0x2aa)) === !![] ||
      $(steps[x])
        [_0x404da9(0x203)]("[data-answer]:visible")
        ["find"](_0x404da9(0x20f))
        [_0x404da9(0x29d)](_0x404da9(0x2aa)) === !![] ||
      $(steps[x])["find"](_0x404da9(0x2a0))["data"](_0x404da9(0x2aa)) ===
        !![]) &&
      ((all_data = all_data[_0x404da9(0x285)](
        (_0x5c1571) =>
          _0x5c1571[_0x404da9(0x21c)] !==
          $(steps[x])
            [_0x404da9(0x203)](_0x404da9(0x298))
            [_0x404da9(0x20e)](_0x404da9(0x224)),
      )),
      $(
        _0x404da9(0x29a) +
          $(steps[x])
            [_0x404da9(0x203)]("input[type=\x22radio\x22]:checked")
            [_0x404da9(0x20e)](_0x404da9(0x224)) +
          "\x22]",
      )[_0x404da9(0x222)](),
      $(steps[x])
        [_0x404da9(0x203)](_0x404da9(0x1d4))
        [_0x404da9(0x1d9)](_0x404da9(0x20d), ![]),
      $(steps[x])
        [_0x404da9(0x203)](".w-form-formradioinput")
        [_0x404da9(0x296)](_0x404da9(0x2c0)),
      validation());
}
weightedSelectionRange &&
  $(_0x26d8ca(0x1ec))[_0x26d8ca(0x290)](function () {
    const _0x14b0a2 = _0x26d8ca;
    $(this)["append"](
      _0x14b0a2(0x265) +
        $(this)[_0x14b0a2(0x29d)](_0x14b0a2(0x242)) +
        _0x14b0a2(0x267),
    );
  });
function selectionQuiz() {
  const _0x58f6cd = _0x26d8ca;
  if ($(this)[_0x58f6cd(0x203)](_0x58f6cd(0x1d3))) {
    $(_0x58f6cd(0x1ec))[_0x58f6cd(0x222)](),
      $(_0x58f6cd(0x20a))[_0x58f6cd(0x222)]();
    if (weightedSelection) {
      (selTotal = 0x0),
        selArr[_0x58f6cd(0x204)](function (_0x541ad4) {
          const _0x3c18b2 = _0x58f6cd;
          selTotal = selTotal + _0x541ad4[_0x3c18b2(0x25f)];
        }),
        $(_0x58f6cd(0x21b))[_0x58f6cd(0x2c6)](selTotal);
      if ($(_0x58f6cd(0x1c9) + selTotal + "\x22]")[_0x58f6cd(0x24e)] > 0x0)
        $(_0x58f6cd(0x1c9) + selTotal + "\x22]")[_0x58f6cd(0x270)]();
      else
        $(_0x58f6cd(0x28a) + selTotal + ")")
          ? $(_0x58f6cd(0x28a) + selTotal + ")")
              [_0x58f6cd(0x1e8)]("[data-selection]")
              ["eq"](0x0)
              [_0x58f6cd(0x1ee)]()
          : $(_0x58f6cd(0x2b8))[_0x58f6cd(0x270)]();
    } else {
      let _0x1e7bae = -0x1;
      $("[data-selection]")[_0x58f6cd(0x290)](function (_0x1a87e4) {
        const _0x2d51e1 = _0x58f6cd;
        $($(_0x2d51e1(0x1ec))[_0x1a87e4])
          [_0x2d51e1(0x29d)](_0x2d51e1(0x242))
          [_0x2d51e1(0x2b4)](selString[_0x2d51e1(0x1e6)]()) &&
          (_0x1e7bae = _0x1a87e4);
      }),
        _0x1e7bae > -0x1
          ? $($(_0x58f6cd(0x1ec))[_0x1e7bae])[_0x58f6cd(0x270)]()
          : $("[data-selection=\x22other\x22]")[_0x58f6cd(0x270)]();
    }
  }
}
function triggerInputAllData() {
  if (savedFilledInput && memory)
    savedFilledInput["forEach"]((_0x350c73) => {
      const _0x179ef5 = _0x5869;
      var _0x123e38 = $(
          _0x179ef5(0x245) +
            _0x350c73[_0x179ef5(0x2b1)] +
            "\x22][value=\x22" +
            _0x350c73["value"] +
            "\x22]",
        ),
        _0x152463 = $(
          "input[name=\x22" + _0x350c73[_0x179ef5(0x2b1)] + "\x22]",
        );
      console[_0x179ef5(0x297)](
        _0x123e38[_0x179ef5(0x26e)](_0x179ef5(0x1fc))["data"](_0x179ef5(0x2aa)),
      );
      if (_0x123e38[_0x179ef5(0x20e)](_0x179ef5(0x1cf)) !== _0x179ef5(0x274)) {
        if (
          _0x123e38["attr"](_0x179ef5(0x1cf)) === "radio" &&
          !_0x123e38[_0x179ef5(0x26e)](_0x179ef5(0x1fc))[_0x179ef5(0x29d)](
            _0x179ef5(0x2aa),
          )
        )
          _0x123e38["click"](),
            _0x123e38["siblings"](".w-radio-input")["addClass"](
              _0x179ef5(0x2c0),
            ),
            _0x123e38[_0x179ef5(0x24a)](_0x179ef5(0x2bc));
        else
          _0x350c73[_0x179ef5(0x1ed)] === "on"
            ? (_0x152463[_0x179ef5(0x281)](),
              _0x152463[_0x179ef5(0x223)](_0x179ef5(0x2bd))[_0x179ef5(0x23a)](
                _0x179ef5(0x2c0),
              ),
              _0x152463[_0x179ef5(0x24a)]("input"))
            : (console[_0x179ef5(0x297)](
                _0x350c73[_0x179ef5(0x2b1)],
                _0x350c73["value"],
              ),
              _0x152463[_0x179ef5(0x29c)](_0x350c73[_0x179ef5(0x1ed)]),
              _0x152463["val"](_0x350c73[_0x179ef5(0x1ed)]),
              $("option[value=\x22" + _0x350c73[_0x179ef5(0x1ed)] + "\x22]")[
                _0x179ef5(0x1d9)
              ](_0x179ef5(0x25f), !![]),
              _0x152463[_0x179ef5(0x24a)](_0x179ef5(0x2bc)),
              _0x152463[_0x179ef5(0x24a)]("change"));
      }
    });
  else
    _params &&
      (getParams(),
      searchQ["forEach"]((_0x402770) => {
        const _0x5b6085 = _0x5869;
        if (
          $(
            _0x5b6085(0x245) +
              _0x402770[_0x5b6085(0x2b1)] +
              _0x5b6085(0x257) +
              _0x402770[_0x5b6085(0x1ed)] +
              "\x22]",
          )[_0x5b6085(0x20e)](_0x5b6085(0x1cf)) !== _0x5b6085(0x274)
        ) {
          if (
            $(
              _0x5b6085(0x245) +
                _0x402770["key"] +
                _0x5b6085(0x257) +
                _0x402770[_0x5b6085(0x29c)] +
                "\x22]",
            )[_0x5b6085(0x20e)]("type") === "radio"
          )
            $(
              "input[name=\x22" +
                _0x402770["key"] +
                _0x5b6085(0x257) +
                _0x402770["val"] +
                "\x22]",
            )[_0x5b6085(0x281)](),
              $(
                "input[name=\x22" +
                  _0x402770["key"] +
                  _0x5b6085(0x257) +
                  _0x402770["val"] +
                  "\x22]",
              )
                [_0x5b6085(0x223)](".w-radio-input")
                [_0x5b6085(0x23a)]("w--redirected-checked"),
              $(
                "input[name=\x22" +
                  _0x402770[_0x5b6085(0x232)] +
                  "\x22][value=\x22" +
                  _0x402770[_0x5b6085(0x29c)] +
                  "\x22]",
              )[_0x5b6085(0x24a)](_0x5b6085(0x2bc));
          else
            _0x402770[_0x5b6085(0x29c)] === "on"
              ? ($(_0x5b6085(0x245) + _0x402770[_0x5b6085(0x232)] + "\x22]")[
                  _0x5b6085(0x281)
                ](),
                $(_0x5b6085(0x245) + _0x402770[_0x5b6085(0x232)] + "\x22]")
                  ["siblings"](_0x5b6085(0x2bd))
                  [_0x5b6085(0x23a)](_0x5b6085(0x2c0)),
                $("input[name=\x22" + _0x402770["key"] + "\x22]")[
                  _0x5b6085(0x24a)
                ](_0x5b6085(0x2bc)))
              : ($("input[name=\x22" + _0x402770[_0x5b6085(0x232)] + "\x22]")[
                  _0x5b6085(0x29c)
                ](_0x402770["val"]),
                $(_0x5b6085(0x273) + _0x402770[_0x5b6085(0x232)] + "\x22]")[
                  "val"
                ](_0x402770["val"]),
                $("select[name=\x22" + _0x402770[_0x5b6085(0x232)] + "\x22]")
                  [_0x5b6085(0x203)](
                    _0x5b6085(0x1e9) + _0x402770[_0x5b6085(0x29c)] + "\x22]",
                  )
                  [_0x5b6085(0x1d9)](_0x5b6085(0x25f), !![]),
                $(_0x5b6085(0x245) + _0x402770[_0x5b6085(0x232)] + "\x22]")[
                  _0x5b6085(0x24a)
                ](_0x5b6085(0x2bc)),
                $("input[name=\x22" + _0x402770["key"] + "\x22]")[
                  _0x5b6085(0x24a)
                ](_0x5b6085(0x2ab)));
        }
      }));
}
$(_0x26d8ca(0x2c5))["on"](_0x26d8ca(0x281), function () {
  (next = !![]), nextStep(), selectionQuiz();
}),
  $("[data-form=\x22back-btn\x22]")["on"](_0x26d8ca(0x281), function () {
    (next = ![]), (back = !![]), backStep();
  }),
  $(steps)
    [_0x26d8ca(0x203)](":input")
    [_0x26d8ca(0x294)]("[type=\x22radio\x22]")
    ["on"](_0x26d8ca(0x2bc), function (_0x248209) {
      validation();
    }),
  $(steps)
    [_0x26d8ca(0x203)]("input[type=\x22radio\x22]")
    ["on"](_0x26d8ca(0x281), function () {
      (skip = !![]), validation();
    });
$(_0x26d8ca(0x282))[_0x26d8ca(0x29d)](_0x26d8ca(0x220))
  ? $(_0x26d8ca(0x277))[_0x26d8ca(0x296)](_0x26d8ca(0x1f9))
  : $("[data-form=\x22custom-progress-indicator\x22]")[_0x26d8ca(0x23a)](
      _0x26d8ca(0x1f9),
    );
function clickableIndicator() {
  const _0x1120ae = _0x26d8ca;
  $(_0x1120ae(0x276))[_0x1120ae(0x29d)](_0x1120ae(0x233)) &&
    ($(_0x1120ae(0x226))["removeClass"](_0x1120ae(0x239)),
    $(_0x1120ae(0x276))["data"](_0x1120ae(0x220))
      ? ((x = $(this)[_0x1120ae(0x243)]()), updateStep())
      : $(this)["index"]() <= progress &&
        ((x = $(this)[_0x1120ae(0x243)]()), updateStep())),
    $(_0x1120ae(0x2a9))[_0x1120ae(0x2c6)](x + 0x1);
}
$(_0x26d8ca(0x277))["on"](_0x26d8ca(0x281), clickableIndicator);
$(_0x26d8ca(0x234))[_0x26d8ca(0x29d)](_0x26d8ca(0x1e2)) &&
  ($(_0x26d8ca(0x229))[_0x26d8ca(0x290)](function () {
    const _0x24b1e2 = _0x26d8ca;
    $(this)[_0x24b1e2(0x246)](
      _0x24b1e2(0x237),
      $(this)[_0x24b1e2(0x29d)]("go-to"),
    );
  }),
  $(_0x26d8ca(0x1dc))["each"](function () {
    const _0xde2071 = _0x26d8ca;
    $(this)[_0xde2071(0x246)](
      _0xde2071(0x2a7),
      $(this)[_0xde2071(0x29d)](_0xde2071(0x21e)),
    );
  }));
$(_0x26d8ca(0x2b7))["on"](_0x26d8ca(0x281), function (_0x209388) {
  const _0x1176ea = _0x26d8ca;
  $(this)[_0x1176ea(0x29d)](_0x1176ea(0x1db)) &&
    (redirectTo = $(this)[_0x1176ea(0x29d)]("redirect")),
    !$(this)[_0x1176ea(0x29d)](_0x1176ea(0x1d1)) &&
      (newTab = $(this)[_0x1176ea(0x29d)]("new-tab")),
    (successCard = $(this)[_0x1176ea(0x29d)]("success")),
    _0x209388[_0x1176ea(0x2cb)](),
    _0x209388[_0x1176ea(0x235)](),
    logicExtra &&
      ($(this)[_0x1176ea(0x1d9)](_0x1176ea(0x2ad), !![]),
      $(steps)
        [_0x1176ea(0x203)](_0x1176ea(0x1f8))
        [_0x1176ea(0x1d9)](_0x1176ea(0x26d), ![])),
    localStorage["removeItem"](_0x1176ea(0x288)),
    fill &&
      ($(this)[_0x1176ea(0x29d)]("wait")
        ? $(this)[_0x1176ea(0x29c)]($(this)[_0x1176ea(0x29d)](_0x1176ea(0x25c)))
        : ($(this)[_0x1176ea(0x29c)]("Please\x20wait..."),
          $(this)[_0x1176ea(0x2c6)](_0x1176ea(0x1f7))),
      $(_0x1176ea(0x234))[_0x1176ea(0x1d0)](),
      $(_0x1176ea(0x279))[_0x1176ea(0x24e)] > 0x0 &&
        grecaptcha[_0x1176ea(0x269)]()[_0x1176ea(0x24e)] === 0x0 &&
        (form[_0x1176ea(0x203)](_0x1176ea(0x2b7))[_0x1176ea(0x2c6)](
          oldSubmitText,
        ),
        form[_0x1176ea(0x203)]("[data-form=\x22submit-btn\x22]")[
          _0x1176ea(0x29c)
        ](oldSubmitText)));
});
function resetFormly() {
  const _0x298cb0 = _0x26d8ca;
  $(_0x298cb0(0x234))[_0x298cb0(0x24a)](_0x298cb0(0x215)),
    $(_0x298cb0(0x234))
      [_0x298cb0(0x26e)]()
      [_0x298cb0(0x203)](".w-form-done")
      [_0x298cb0(0x222)](),
    (x = 0x0),
    updateStep(),
    $(_0x298cb0(0x234))["show"](),
    $("[data-form=\x22submit-btn\x22]")["text"](oldSubmitText),
    $(_0x298cb0(0x2b7))[_0x298cb0(0x29c)](oldSubmitText),
    $(_0x298cb0(0x2a9))["text"](0x1),
    $("[data-form=\x22multistep\x22]")
      [_0x298cb0(0x203)]("input:checkbox")
      [_0x298cb0(0x223)](".w-checkbox-input")
      [_0x298cb0(0x296)](_0x298cb0(0x2c0));
}
$(document)[_0x26d8ca(0x278)](function (_0x5dce06, _0x521c06, _0x4d023a) {
  const _0x5e2548 = _0x26d8ca;
  if (
    _0x4d023a[_0x5e2548(0x2b5)][_0x5e2548(0x2b4)](
      "https://webflow.com/api/v1/form/",
    )
  ) {
    const _0x4d4363 = _0x521c06[_0x5e2548(0x2c1)] === 0xc8,
      _0x2f6758 = _0x5e2548(0x2a5);
    redirectTo &&
      _0x4d4363 &&
      (newTab
        ? window[_0x5e2548(0x28d)](redirectTo, _0x5e2548(0x27b))
        : setTimeout(() => {
            const _0x3539d4 = _0x5e2548;
            location[_0x3539d4(0x286)] = redirectTo;
          }, redirectDelay)),
      _0x4d4363 &&
        successCard !== "" &&
        $("[data-success-card=\x22" + successCard + "\x22]")[
          _0x5e2548(0x270)
        ](),
      _0x4d4363 &&
        formReset &&
        setTimeout(() => {
          resetFormly();
        }, resetDelay),
      !_0x4d4363 &&
        ($(_0x5e2548(0x2b7))[_0x5e2548(0x29c)](_0x5e2548(0x1f7)),
        $(_0x5e2548(0x2b7))["text"]("Please\x20wait..."));
  }
}),
  $(_0x26d8ca(0x1ff))["on"](_0x26d8ca(0x281), function () {
    const _0x29b91c = _0x26d8ca;
    var _0x1cbffb = $(this)
      [_0x29b91c(0x1e8)]()
      [_0x29b91c(0x203)]("[data-input-field]")
      [_0x29b91c(0x29d)](_0x29b91c(0x25b));
    setTimeout(function () {
      const _0x504182 = _0x29b91c;
      $(_0x504182(0x245) + _0x1cbffb + "\x22]")[_0x504182(0x1f3)]();
    }, 0x64),
      (back = !![]),
      (x = $(this)["data"](_0x29b91c(0x2a3)) - 0x1),
      updateStep(),
      countCard
        ? ((curStep = x + 0x1),
          $(_0x29b91c(0x252))[_0x29b91c(0x2c6)](steps["length"]))
        : $(steps[x])[_0x29b91c(0x29d)]("card")
        ? (curStep = x + 0x0)
        : (curStep = x + 0x1),
      $(_0x29b91c(0x2a9))[_0x29b91c(0x2c6)](curStep),
      (back = ![]);
  }),
  $(_0x26d8ca(0x218))["on"]("click", function () {
    const _0x414fe1 = _0x26d8ca;
    $(_0x414fe1(0x234))["trigger"](_0x414fe1(0x215));
    let _0x3aab96 = $(this);
    $(this)["text"](_0x414fe1(0x1f7)),
      setTimeout(function () {
        const _0xc12dc3 = _0x414fe1;
        $(_0x3aab96)["text"](oldResetText),
          $(_0x3aab96)["parents"](_0xc12dc3(0x2c9))[_0xc12dc3(0x222)](),
          (x = 0x0),
          updateStep(),
          $(_0xc12dc3(0x234))[_0xc12dc3(0x1ee)](),
          $(_0xc12dc3(0x2b7))[_0xc12dc3(0x2c6)](oldSubmitText),
          $(_0xc12dc3(0x2b7))["val"](oldSubmitText),
          $(_0x3aab96)[_0xc12dc3(0x29c)](oldSubmitText),
          $("[data-text=\x22current-step\x22]")[_0xc12dc3(0x2c6)](0x1),
          $(_0xc12dc3(0x234))
            ["find"]("input:checkbox")
            [_0xc12dc3(0x223)](".w-checkbox-input")
            [_0xc12dc3(0x296)](_0xc12dc3(0x2c0));
      }, resetDelay);
  }),
  $(_0x26d8ca(0x1f1))["on"](_0x26d8ca(0x221), function (_0x125ed6) {
    const _0x5205e9 = _0x26d8ca;
    _0x125ed6[_0x5205e9(0x22a)] === 0xd &&
      fill &&
      ($("[data-enter]")["data"](_0x5205e9(0x272))
        ? (totalSteps > curStep &&
            $("[data-form=\x22next-btn\x22]")[0x0]["click"](),
          _0x125ed6["preventDefault"](),
          _0x125ed6[_0x5205e9(0x235)]())
        : (_0x125ed6[_0x5205e9(0x2cb)](), _0x125ed6[_0x5205e9(0x235)]()));
  }),
  $(_0x26d8ca(0x1f1))[_0x26d8ca(0x2c7)](function (_0x60a72d) {
    const _0x182b0f = _0x26d8ca;
    (_0x60a72d[_0x182b0f(0x28e)] || _0x60a72d[_0x182b0f(0x2a2)]) &&
      _0x60a72d[_0x182b0f(0x22a)] == 0xd &&
      (x >= steps[_0x182b0f(0x24e)] - 0x1 && fill
        ? $(steps[x])[_0x182b0f(0x203)](_0x182b0f(0x248))["click"]()
        : (event["preventDefault"](), event[_0x182b0f(0x235)]()));
  }),
  $("textarea")[_0x26d8ca(0x221)](function (_0x5b1d4c) {
    const _0x2790e1 = _0x26d8ca;
    $(this)["focus"](),
      _0x5b1d4c["key"] == _0x2790e1(0x2ac) &&
        (_0x5b1d4c[_0x2790e1(0x2cb)](), _0x5b1d4c[_0x2790e1(0x235)]()),
      _0x5b1d4c[_0x2790e1(0x27f)] &&
        _0x5b1d4c[_0x2790e1(0x232)] == "Enter" &&
        $(this)[_0x2790e1(0x29c)]($(this)[_0x2790e1(0x29c)]() + "\x0a");
  }),
  $("[data-form=\x22multistep\x22]")
    [_0x26d8ca(0x203)](_0x26d8ca(0x1f8))
    ["on"](_0x26d8ca(0x2ab), function () {
      const _0xe6459b = _0x26d8ca;
      (all_data = all_data[_0xe6459b(0x285)](
        (_0x3dfe3d) =>
          _0x3dfe3d["field"] !== $(this)[_0xe6459b(0x20e)](_0xe6459b(0x224)),
      )),
        $(this)[_0xe6459b(0x20e)](_0xe6459b(0x1cf)) === "checkbox"
          ? $(this)["is"](_0xe6459b(0x275))
            ? all_data[_0xe6459b(0x256)]({
                field: $(this)[_0xe6459b(0x20e)](_0xe6459b(0x224)),
                value: $(this)
                  [_0xe6459b(0x223)](_0xe6459b(0x28c))
                  [_0xe6459b(0x2c6)](),
              })
            : $(
                _0xe6459b(0x29a) +
                  $(this)[_0xe6459b(0x20e)](_0xe6459b(0x224)) +
                  "\x22]",
              )[_0xe6459b(0x222)]()
          : (all_data["push"]({
              field: $(this)["attr"](_0xe6459b(0x224)),
              value: $(this)[_0xe6459b(0x29c)](),
            }),
            $(this)[_0xe6459b(0x29c)]() !== "" &&
              resetInputErrorMessage(
                $(this)[_0xe6459b(0x20e)](_0xe6459b(0x224)),
              )),
        all_data["forEach"](function (_0x7faba) {
          const _0x5c4712 = _0xe6459b;
          $(_0x5c4712(0x29a) + _0x7faba["field"] + "\x22]")[_0x5c4712(0x1ee)](),
            $(_0x5c4712(0x29a) + _0x7faba[_0x5c4712(0x21c)] + "\x22]")["text"](
              _0x7faba["value"],
            );
        });
    }),
  $(_0x26d8ca(0x234))
    [_0x26d8ca(0x203)](_0x26d8ca(0x292))
    ["on"](_0x26d8ca(0x2ab), function () {
      const _0xe6331f = _0x26d8ca;
      $(this)[_0xe6331f(0x29c)]() !== "" &&
        resetInputErrorMessage($(this)[_0xe6331f(0x20e)]("name")),
        (all_data = all_data["filter"](
          (_0x50c6eb) =>
            _0x50c6eb["field"] !== $(this)[_0xe6331f(0x20e)](_0xe6331f(0x224)),
        )),
        all_data[_0xe6331f(0x256)]({
          field: $(this)["attr"](_0xe6331f(0x224)),
          value: $(this)["val"](),
        }),
        all_data[_0xe6331f(0x204)](function (_0x394071) {
          const _0x5c429d = _0xe6331f;
          $("[data-input-field=\x22" + _0x394071[_0x5c429d(0x21c)] + "\x22]")[
            _0x5c429d(0x1ee)
          ](),
            $(_0x5c429d(0x29a) + _0x394071[_0x5c429d(0x21c)] + "\x22]")["text"](
              _0x394071["value"],
            );
        });
    }),
  $(_0x26d8ca(0x234))
    [_0x26d8ca(0x203)]("select")
    ["on"](_0x26d8ca(0x2ab), function () {
      const _0x34a329 = _0x26d8ca;
      $(this)[_0x34a329(0x29c)]() !== "" &&
        resetInputErrorMessage($(this)[_0x34a329(0x20e)](_0x34a329(0x224)));
      var _0x177f25 = $(this)[_0x34a329(0x29d)]("ms-field");
      (all_data = all_data[_0x34a329(0x285)](
        (_0x3545ca) =>
          _0x3545ca["field"] !== $(this)[_0x34a329(0x20e)](_0x34a329(0x224)),
      )),
        all_data[_0x34a329(0x256)]({
          field: $(this)["attr"](_0x34a329(0x224)),
          value: _0x177f25
            ? $(this)[_0x34a329(0x203)](_0x34a329(0x212))[_0x34a329(0x2c6)]()
            : $(this)["val"](),
        }),
        all_data[_0x34a329(0x204)](function (_0x477d4d) {
          const _0x281ecd = _0x34a329;
          $(_0x281ecd(0x29a) + _0x477d4d[_0x281ecd(0x21c)] + "\x22]")[
            _0x281ecd(0x1ee)
          ](),
            $(_0x281ecd(0x29a) + _0x477d4d[_0x281ecd(0x21c)] + "\x22]")[
              _0x281ecd(0x2c6)
            ](_0x477d4d[_0x281ecd(0x1ed)]);
        });
    }),
  updateStep(),
  triggerInputAllData(),
  $(_0x26d8ca(0x28f))["each"](function () {
    const _0x4f0b3b = _0x26d8ca,
      _0x57c67d = $(this)[_0x4f0b3b(0x203)](_0x4f0b3b(0x2bf)),
      _0x19f8e7 = [];
    console[_0x4f0b3b(0x297)](_0x19f8e7),
      _0x57c67d[_0x4f0b3b(0x290)](function () {
        const _0x286df8 = _0x4f0b3b;
        _0x19f8e7[_0x286df8(0x256)]($(this)["text"]()[_0x286df8(0x1e5)]());
      });
    const _0x107fae = $(this)[_0x4f0b3b(0x223)](_0x4f0b3b(0x1dd));
    $[_0x4f0b3b(0x290)](_0x19f8e7, function (_0xd025eb, _0x22f7f1) {
      const _0x16f4a7 = _0x4f0b3b,
        _0x1dbb64 = $(_0x16f4a7(0x291))
          ["val"](_0x22f7f1)
          [_0x16f4a7(0x2c6)](_0x22f7f1);
      _0x107fae["append"](_0x1dbb64);
    });
  }),
  $(_0x26d8ca(0x2b3))["on"]("click", function () {
    const _0x3df121 = _0x26d8ca;
    let _0x2a6786 = $(this)[_0x3df121(0x29d)](_0x3df121(0x211));
    var _0x4ed016 = $(_0x3df121(0x210) + _0x2a6786 + "\x22]")
        ["eq"](0x0)
        [_0x3df121(0x254)](!![]),
      _0x4e5b58 = $(_0x3df121(0x284) + _0x2a6786 + "\x22]")
        ["eq"](0x0)
        [_0x3df121(0x254)](!![]);
    _0x4ed016[_0x3df121(0x203)](_0x3df121(0x2bc))[_0x3df121(0x290)](
      function () {
        const _0x3bb1d8 = _0x3df121;
        $(this)["val"](""),
          $(this)["attr"](
            _0x3bb1d8(0x224),
            this["name"] +
              "-" +
              (parseInt(
                $(_0x3bb1d8(0x210) + _0x2a6786 + "\x22]")
                  [_0x3bb1d8(0x247)]()
                  [_0x3bb1d8(0x243)](),
              ) +
                0x1),
          ),
          $(this)[_0x3bb1d8(0x20e)](
            "data-name",
            $(this)[_0x3bb1d8(0x29d)](_0x3bb1d8(0x224)) +
              "-" +
              (parseInt(
                $("[data-clone=\x22" + _0x2a6786 + "\x22]")
                  [_0x3bb1d8(0x247)]()
                  [_0x3bb1d8(0x243)](),
              ) +
                0x1),
          );
      },
    ),
      _0x4e5b58[_0x3df121(0x203)](_0x3df121(0x244))[_0x3df121(0x290)](
        function () {
          const _0xd86fef = _0x3df121;
          $(this)[_0xd86fef(0x20e)](
            "data-input-field",
            $(this)[_0xd86fef(0x29d)]("input-field") +
              "-" +
              (parseInt(
                $("[data-clone=\x22" + _0x2a6786 + "\x22]")
                  [_0xd86fef(0x247)]()
                  [_0xd86fef(0x243)](),
              ) +
                0x1),
          );
        },
      ),
      $(_0x3df121(0x1da) + _0x2a6786 + "\x22]")[_0x3df121(0x246)](_0x4ed016),
      $("[data-display-wrapper=\x22" + _0x2a6786 + "\x22]")[_0x3df121(0x246)](
        _0x4e5b58,
      ),
      $(_0x3df121(0x266) + _0x2a6786 + "\x22]")["each"](function () {
        const _0x481a62 = _0x3df121;
        $(this)[_0x481a62(0x2c6)](
          $(this)
            [_0x481a62(0x26e)](_0x481a62(0x210) + _0x2a6786 + "\x22]")
            [_0x481a62(0x243)]() + 0x1,
        );
      }),
      $(_0x3df121(0x2cc) + _0x2a6786 + "\x22]")[_0x3df121(0x290)](function () {
        const _0x30197c = _0x3df121;
        $(this)[_0x30197c(0x2c6)](
          $(this)
            [_0x30197c(0x26e)](_0x30197c(0x284) + _0x2a6786 + "\x22]")
            [_0x30197c(0x243)]() + 0x1,
        );
      }),
      validation();
  }),
  scrollTop();
