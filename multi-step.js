//1st Dec 2023
//Bug fix
//1. Quiz error fix

const _0x2ea093 = _0xa640;
(function (_0x23769a, _0x5f3841) {
  const _0x37312a = _0xa640,
    _0x506b53 = _0x23769a();
  while (!![]) {
    try {
      const _0x34bd54 =
        -parseInt(_0x37312a(0x2f6)) / 0x1 +
        (-parseInt(_0x37312a(0x24c)) / 0x2) *
          (-parseInt(_0x37312a(0x2f0)) / 0x3) +
        -parseInt(_0x37312a(0x288)) / 0x4 +
        (-parseInt(_0x37312a(0x281)) / 0x5) *
          (-parseInt(_0x37312a(0x23c)) / 0x6) +
        -parseInt(_0x37312a(0x285)) / 0x7 +
        -parseInt(_0x37312a(0x2e5)) / 0x8 +
        parseInt(_0x37312a(0x206)) / 0x9;
      if (_0x34bd54 === _0x5f3841) break;
      else _0x506b53["push"](_0x506b53["shift"]());
    } catch (_0x469c49) {
      _0x506b53["push"](_0x506b53["shift"]());
    }
  }
})(_0x3de7, 0x9008b);
let x = 0x0,
  curStep = 0x0,
  steps = $(_0x2ea093(0x20f)),
  progressbarClone = $(_0x2ea093(0x2b6))[_0x2ea093(0x26a)](),
  progressbar,
  countCard = !![],
  weightedSelection = $(_0x2ea093(0x2ac))[_0x2ea093(0x1fd)](_0x2ea093(0x293)),
  weightedSelectionRange = $(_0x2ea093(0x200))["data"](
    "weighted-selection-range",
  ),
  selectMultiple = $(_0x2ea093(0x253))[_0x2ea093(0x1fd)](_0x2ea093(0x210)),
  customError = $(_0x2ea093(0x228))[_0x2ea093(0x1fd)](_0x2ea093(0x265)),
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
  reinitIX = $(_0x2ea093(0x22e))["data"](_0x2ea093(0x2ba)),
  textareaLength = 0x0,
  textInputLength = 0x0,
  emailInputLength = 0x0,
  selectInputLength = 0x0,
  checkboxInputLength = 0x0,
  filledInput = [],
  savedFilledInput = [],
  memory = $(_0x2ea093(0x2d6))["data"](_0x2ea093(0x205)),
  quiz = $(_0x2ea093(0x2e8))[_0x2ea093(0x1fd)]("quiz"),
  progress = 0x0;
const urlFormly = new URL(window[_0x2ea093(0x25c)]["href"]);
let _params = $(_0x2ea093(0x2bf))["data"](_0x2ea093(0x26b)),
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
  logicExtra = $(_0x2ea093(0x257))["data"](_0x2ea093(0x240)),
  oldSubmitText = $(_0x2ea093(0x28b))["val"](),
  oldResetText = $(_0x2ea093(0x28e))[_0x2ea093(0x22a)](),
  formReset = $("[data-form=\x22multistep\x22]")[_0x2ea093(0x1fd)](
    _0x2ea093(0x2ff),
  ),
  successCard = "",
  redirectTo = "",
  totalSteps = 0x0,
  checkCount = 0x0,
  resetDelay = $("[data-reset-delay]")[_0x2ea093(0x1fd)]("reset-delay")
    ? $(_0x2ea093(0x2e2))["data"](_0x2ea093(0x21c))
    : 0x7d0,
  redirectDelay = $(_0x2ea093(0x283))[_0x2ea093(0x1fd)](_0x2ea093(0x25b))
    ? $(_0x2ea093(0x283))[_0x2ea093(0x1fd)](_0x2ea093(0x25b))
    : 0x7d0,
  newTab = !![],
  unfilledArr = [],
  phoneFormat = $(_0x2ea093(0x257))["data"](_0x2ea093(0x216)),
  scrollToTop = $(_0x2ea093(0x257))["data"](_0x2ea093(0x220)),
  conditionalResult =
    $(_0x2ea093(0x2c3))[_0x2ea093(0x1fd)](_0x2ea093(0x2ca)) === "AND",
  scrollTopOffset = parseInt(
    $(_0x2ea093(0x257))[_0x2ea093(0x1fd)](_0x2ea093(0x2be)),
  ),
  notRobot = !![],
  all_data = [];
const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
savedFilledInput = JSON["parse"](
  localStorage[_0x2ea093(0x21e)](_0x2ea093(0x28f)),
);
var ogCloneArr = [];
$("[data-clone]")[_0x2ea093(0x239)](function () {
  const _0x5a15ec = _0x2ea093;
  ogCloneArr[_0x5a15ec(0x20b)]({
    name: $(this)[_0x5a15ec(0x1fd)](_0x5a15ec(0x26a)),
    element: $(this)[_0x5a15ec(0x26a)](!![]),
    display: $(
      "[data-display=\x22" + $(this)[_0x5a15ec(0x1fd)]("clone") + "\x22]",
    )
      ["eq"](0x0)
      [_0x5a15ec(0x26a)](!![]),
  });
});
$(_0x2ea093(0x2dd))[_0x2ea093(0x2c1)] > 0x0 && (notRobot = ![]);
function recaptcha(_0x4a294a) {
  notRobot = !![];
}
$(_0x2ea093(0x2e9))[_0x2ea093(0x2c1)] > 0x0 &&
  (countCard = $(_0x2ea093(0x2e9))[_0x2ea093(0x1fd)](_0x2ea093(0x234)));
$(_0x2ea093(0x261))[_0x2ea093(0x1f6)](),
  $(progressbarClone)[_0x2ea093(0x268)]("current"),
  $(_0x2ea093(0x29c))[_0x2ea093(0x238)]()[_0x2ea093(0x280)](),
  $(_0x2ea093(0x28b))[_0x2ea093(0x1f6)](),
  $(_0x2ea093(0x222))["hide"](),
  steps[_0x2ea093(0x239)](function () {
    const _0x2cac24 = _0x2ea093;
    $("[data-form=\x22progress\x22]")[_0x2cac24(0x27e)](
      progressbarClone[_0x2cac24(0x26a)](!![], !![]),
    );
  }),
  $(_0x2ea093(0x276))["hide"]();
countCard
  ? ((curStep = curStep + 0x1),
    (totalSteps = steps[_0x2ea093(0x2c1)]),
    $(_0x2ea093(0x289))[_0x2ea093(0x22a)](totalSteps))
  : ($(steps[x])["data"](_0x2ea093(0x305))
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    (totalSteps = $(_0x2ea093(0x249))[_0x2ea093(0x2c1)]),
    $(_0x2ea093(0x289))["text"](totalSteps),
    $(_0x2ea093(0x1f8))["each"](function () {
      const _0x33f709 = _0x2ea093;
      $(
        $("[data-form=\x22progress-indicator\x22]")[
          $(this)[_0x33f709(0x27f)]()
        ],
      )["hide"]();
    }));
(progressbar = $(_0x2ea093(0x29c))[_0x2ea093(0x238)]()),
  $(_0x2ea093(0x2b6))["on"]("click", clickableIndicator),
  $("[data-text=\x22current-step\x22]")[_0x2ea093(0x22a)](curStep),
  steps[_0x2ea093(0x1f6)](),
  $("[data-success-card]")["hide"](),
  $("[data-form=\x22next-btn\x22][type=\x22submit\x22]")[_0x2ea093(0x239)](
    function () {
      const _0x1192f5 = _0x2ea093;
      $(this)[_0x1192f5(0x2d1)]("type", _0x1192f5(0x25e));
    },
  );
function getParams() {
  const _0x26ceeb = _0x2ea093;
  urlFormly[_0x26ceeb(0x22b)][_0x26ceeb(0x20c)](
    function (_0x5451e6, _0x25a03b) {
      const _0x1d94ba = _0x26ceeb;
      searchQ[_0x1d94ba(0x20b)]({ val: _0x5451e6, key: _0x25a03b });
    },
  );
}
function getSafe(_0x3ca4bd, _0xddeaf0) {
  try {
    return _0x3ca4bd();
  } catch (_0x4bcd0d) {
    return _0xddeaf0;
  }
}
function _0x3de7() {
  const _0x9dc98d = [
    "select[name=\x22",
    "val",
    "input[type=\x22text\x22][required]:visible",
    "weighted-selection",
    "stopPropagation",
    "dispatchEvent",
    "input",
    "checkbox",
    "running",
    "textarea:focus",
    "Please\x20wait...",
    "add-new-input",
    "[data-form=\x22progress\x22]",
    "block-domain",
    "[data-go-to]",
    "go-to",
    "not",
    "css",
    "replace",
    "w--redirected-checked",
    "[data-input-field=\x22",
    "textarea[name=\x22",
    ":input[type=\x22date\x22]",
    "metaKey",
    "input[type=\x22submit\x22]",
    "[data-clone-wrapper=\x22",
    "[data-remove-upload]",
    ":input[type=\x22email\x22][required]",
    "[data-weighted-selection]",
    "name",
    "[data-clone-wrapper]",
    "success",
    "select[required]:visible",
    "[data-selection=\x22other\x22]",
    "[data-clickable-all]",
    "removeItem",
    "match",
    "field",
    "[data-form=\x22progress-indicator\x22]",
    "preventDefault",
    "prop",
    "[data-answer][data-radio-skip]:visible",
    "reinit",
    "[data-success-card=\x22",
    "backTo",
    "[data-enter]",
    "scroll-top-offset",
    "[data-query-param]",
    "destroy",
    "length",
    "every",
    "[data-conditional-result]",
    "filter",
    ":focus",
    ":input[type=\x22password\x22]",
    ":input[type=\x22date\x22][required]",
    "click",
    "[data-skip-to]",
    "conditional-result",
    "stringify",
    "html,\x20body",
    "[data-input-index=\x22",
    "none",
    ".active-answer-card",
    ":input[required]",
    "attr",
    "findIndex",
    "[data-radio-delay]",
    ".w-checkbox-input",
    "[data-index=\x22",
    "[data-memory]",
    "type",
    "url",
    "some",
    "[data-form=\x22next-btn\x22]",
    ":input[type=\x22text\x22][required]",
    "includes",
    "div.g-recaptcha",
    "readystatechange",
    "radio",
    "value",
    "[data-checkbox]",
    "[data-reset-delay]",
    "skipTo",
    "[data-btn=\x22check\x22]",
    "3873336bAQOxh",
    "redirect",
    "skip-to",
    "[data-quiz]",
    "[data-count-card]",
    "data-radio-skip",
    "inputName",
    "radio-delay",
    "answer",
    "key",
    "textarea[required]",
    "11415OqDrKm",
    "[data-display-input-wrapper=\x22",
    "clicked",
    "[data-answer]",
    ":input[type=\x22tel\x22][required]",
    "top",
    "1066261KGCTPG",
    "[data-form=\x22submit\x22]:visible",
    "radio-skip",
    "[data-clone=\x22",
    "parent",
    "[data-radio-skip]:visible",
    "input:radio[required]",
    "clickable-all",
    "required",
    "reset",
    ":input[type=\x22text\x22]",
    "slice",
    "data-show-if",
    "<br>Data\x20Answer\x20=\x20",
    ":input[type=\x27radio\x27]:checked",
    "card",
    "remove-upload",
    "clickable",
    "file",
    "change",
    "[data-selection=\x22",
    "fadeIn",
    "[data-form=\x22back-btn\x22]",
    "[data-selection]",
    "href",
    "input[type=\x22email\x22]:visible",
    "animate",
    "textarea[required]:visible",
    "option[value=\x22",
    "min-character",
    ":input",
    "data-skip-to",
    ":input[type=\x22email\x22]",
    "hide",
    "slow",
    "[data-form=\x22step\x22][data-card]",
    "keydown",
    "active-answer-card",
    "input-field",
    ":input[type=\x22checkbox\x22][required]",
    "data",
    ":input[type=\x22file\x22]",
    "ctrlKey",
    "[data-weighted-selection-range]",
    "select[required]",
    "keyCode",
    ":input[type=\x22number\x22]",
    "submit-show",
    "memory",
    "10204803epskGZ",
    "[data-display=\x22",
    "input[autofocus]",
    "redirect-form-hehexd",
    "<br>Data\x20Go\x20To\x20=\x20",
    "push",
    "forEach",
    "siblings",
    "display",
    "[data-form=\x22step\x22]",
    "select-multiple",
    "[data-clone-input=\x22",
    "https://webflow.com/api/v1/form/",
    "[data-cms-select=input]",
    "test",
    "add-new",
    "phone-validation",
    "[data-radio-skip]",
    "require",
    "[data-display-input=\x22",
    "closest",
    "[data-clickable]",
    "reset-delay",
    ".w-radio-input",
    "getItem",
    "[data-selection-weight]",
    "scroll-top",
    "body",
    "[data-form-ms=\x22submit-btn\x22]",
    "[data-clone-input-wrapper]",
    "addClass",
    "[data-cms-select=text]",
    ":input[type=\x22checkbox\x22][required]:checked",
    "[data-show-if]",
    "[data-custom-error-message]",
    "0.4",
    "text",
    "searchParams",
    "clicked\x20enter",
    "input[type=\x22radio\x22]",
    "[data-reinit]",
    "trim",
    "[data-answer=\x22",
    ":input[type=\x22file\x22][required]",
    "\x22]\x20[data-input-field^=\x22",
    "[data-clone]",
    "count-card",
    "[data-text=\x22current-step\x22]",
    "status",
    "</div>",
    "children",
    "each",
    "input:radio[name=\x22",
    "[data-btn=\x22edit\x22]",
    "24maFCgz",
    "[data-display-input]",
    "selected",
    ":first",
    "logic-extra",
    "[type=\x22checkbox\x22]",
    "option[value=\x22$(this).val()\x22]",
    "show",
    "[data-display-input-index=\x22",
    "disabled",
    ":input[type=\x22checkbox\x22]",
    "[data-display-wrapper=\x22",
    "offset",
    "[data-form=\x22step\x22]:not([data-card=\x22true\x22])",
    "submit",
    "[data-form=\x22remove-clone\x22]",
    "526zKBwHX",
    ":checked",
    "selection",
    "startsWith",
    ":input[type=\x22checkbox\x22]:checked",
    "new-tab",
    "data-name",
    "[data-select-multiple]",
    "[data-clone-input]",
    "_blank",
    "phone-autoformat",
    "[data-form=\x22multistep\x22]",
    "relationship-",
    "\x22][value=\x22",
    "clone-input",
    "redirect-delay",
    "location",
    "\x22]\x20input",
    "button",
    "[data-range]:contains(",
    "[data-display]",
    "[data-text=\x22error-message\x22]",
    ":input[type=\x22url\x22][required]",
    ":input[type=\x22password\x22][required]",
    "init",
    "custom-error-message",
    ".w-form-done",
    "input[name=\x22",
    "removeClass",
    "split",
    "clone",
    "query-param",
    "ms-field",
    "form[data-form=\x22multistep\x22]\x20:input",
    "input[type=\x22checkbox\x22]:visible",
    "[data-form=\x22next-btn\x22][data-submit-show]",
    "log",
    "data-go-to",
    "focus",
    "<option>",
    "[data-form=\x22custom-progress-indicator\x22]",
    "find",
    "[data-input-field]",
    "wait",
    "parents",
    "trigger",
    "step",
    "[data-cms-select=cms]",
    "data-input-field",
    "textarea",
    "append",
    "index",
    "remove",
    "157400CYHHiI",
    "input[type=\x22radio\x22]:checked",
    "[data-redirect-delay]",
    "current",
    "774837lJFjpy",
    "edit-step",
    "data-radio-delay",
    "37680kmhcwn",
    "[data-text=\x22total-steps\x22]",
    "Webflow",
    "[data-form=\x22submit-btn\x22]",
    "checked",
    ".w-form-formradioinput",
    "[data-btn=\x22reset\x22]",
    "filledInput",
  ];
  _0x3de7 = function () {
    return _0x9dc98d;
  };
  return _0x3de7();
}
function phoneAutoFormat(_0xac000d) {
  var _0x3dbe0a = "";
  return function (_0xe5f965) {
    const _0xf028ee = _0xa640;
    var _0x9117e0 = "",
      _0x2d9028 = _0xe5f965[_0xf028ee(0x2a2)](/\D/g, ""),
      _0x4f6174 = 0x0,
      _0x51a2b2 = 0x0;
    while (
      _0x4f6174 < _0x2d9028[_0xf028ee(0x2c1)] &&
      _0x51a2b2 < _0xac000d[_0xf028ee(0x2c1)]
    ) {
      _0xac000d[_0x51a2b2] === "x"
        ? ((_0x9117e0 += _0x2d9028[_0x4f6174]), _0x4f6174++)
        : (_0x9117e0 += _0xac000d[_0x51a2b2]),
        _0x51a2b2++;
    }
    if (_0xe5f965[_0xf028ee(0x2c1)] < _0x3dbe0a[_0xf028ee(0x2c1)]) {
      var _0x36441a = _0xac000d[_0xf028ee(0x301)](_0x51a2b2);
      _0x9117e0 += _0x36441a[_0xf028ee(0x2a2)](/x/g, "");
    }
    return (_0x3dbe0a = _0x9117e0), _0x9117e0;
  };
}
function validateURL(_0x169f72) {
  const _0x1182a5 = _0x2ea093;
  return urlPattern[_0x1182a5(0x214)](_0x169f72) ? !![] : ![];
}
quiz &&
  steps[_0x2ea093(0x239)](function () {
    const _0x4b1918 = _0x2ea093;
    $(this)[_0x4b1918(0x238)]()[_0x4b1918(0x2d1)](_0x4b1918(0x2ea), !![]),
      $(this)[_0x4b1918(0x238)]()[_0x4b1918(0x2d1)](_0x4b1918(0x287), 0xfa);
  });
function disableBtn(_0xbbeff4) {
  const _0x1e66d6 = _0x2ea093;
  (fill = ![]),
    !customError &&
      ($(_0x1e66d6(0x2da))[_0x1e66d6(0x2a1)]({
        opacity: _0x1e66d6(0x229),
        "pointer-events": _0x1e66d6(0x2ce),
      }),
      $(_0x1e66d6(0x2da))["addClass"](_0x1e66d6(0x245)),
      $(_0x1e66d6(0x28b))[_0x1e66d6(0x2a1)]({
        opacity: _0x1e66d6(0x229),
        "pointer-events": _0x1e66d6(0x2ce),
      }),
      $(_0x1e66d6(0x28b))["addClass"](_0x1e66d6(0x245)),
      $(_0x1e66d6(0x222))[_0x1e66d6(0x2a1)]({
        opacity: _0x1e66d6(0x229),
        "pointer-events": _0x1e66d6(0x2ce),
      }),
      $("[data-form-ms=\x22submit-btn\x22]")["addClass"](_0x1e66d6(0x245)));
}
function enableBtn() {
  const _0x177e86 = _0x2ea093;
  (fill = !![]),
    $(_0x177e86(0x2da))[_0x177e86(0x2a1)]({
      "pointer-events": "auto",
      opacity: "1",
    }),
    $("[data-form=\x22next-btn\x22]")[_0x177e86(0x268)](_0x177e86(0x245)),
    $("[data-form=\x22submit-btn\x22]")[_0x177e86(0x2a1)]({
      "pointer-events": "auto",
      opacity: "1",
    }),
    $(_0x177e86(0x28b))[_0x177e86(0x268)](_0x177e86(0x245)),
    $("[data-form-ms=\x22submit-btn\x22]")["css"]({
      "pointer-events": "auto",
      opacity: "1",
    }),
    $(_0x177e86(0x222))[_0x177e86(0x268)](_0x177e86(0x245));
}
function saveFilledInput() {
  const _0x362475 = _0x2ea093;
  $(_0x362475(0x26d))
    ["not"]("[type=\x22submit\x22]")
    [_0x362475(0x239)](function () {
      const _0x1de0ed = _0x362475;
      $(this)[_0x1de0ed(0x2d1)](_0x1de0ed(0x2d7)) === _0x1de0ed(0x297) ||
      $(this)[_0x1de0ed(0x2d1)](_0x1de0ed(0x2d7)) === "radio"
        ? $(this)[_0x1de0ed(0x2b8)](_0x1de0ed(0x28c)) &&
          (filledInput[_0x1de0ed(0x2d9)](
            (_0x48c46e) =>
              _0x48c46e[_0x1de0ed(0x2eb)] === $(this)["attr"]("name"),
          )
            ? ((filledInput = filledInput[_0x1de0ed(0x2c4)](
                (_0x4bd5b1) =>
                  _0x4bd5b1[_0x1de0ed(0x2eb)] !==
                  $(this)[_0x1de0ed(0x2d1)](_0x1de0ed(0x2ad)),
              )),
              $(this)[_0x1de0ed(0x291)]() !== "" &&
                filledInput[_0x1de0ed(0x20b)]({
                  inputName: $(this)["attr"](_0x1de0ed(0x2ad)),
                  value: $(this)["val"](),
                }))
            : $(this)[_0x1de0ed(0x291)]() !== "" &&
              filledInput[_0x1de0ed(0x20b)]({
                inputName: $(this)[_0x1de0ed(0x2d1)]("name"),
                value: $(this)[_0x1de0ed(0x291)](),
              }))
        : filledInput["some"](
              (_0x32862b) =>
                _0x32862b[_0x1de0ed(0x2eb)] ===
                $(this)[_0x1de0ed(0x2d1)](_0x1de0ed(0x2ad)),
            )
          ? ((filledInput = filledInput[_0x1de0ed(0x2c4)](
              (_0x169560) =>
                _0x169560[_0x1de0ed(0x2eb)] !==
                $(this)[_0x1de0ed(0x2d1)]("name"),
            )),
            $(this)["val"]() !== "" &&
              filledInput[_0x1de0ed(0x20b)]({
                inputName: $(this)["attr"]("name"),
                value: $(this)["val"](),
              }))
          : $(this)["val"]() !== "" &&
            filledInput[_0x1de0ed(0x20b)]({
              inputName: $(this)[_0x1de0ed(0x2d1)](_0x1de0ed(0x2ad)),
              value: $(this)[_0x1de0ed(0x291)](),
            });
    }),
    localStorage[_0x362475(0x2b3)](_0x362475(0x28f)),
    localStorage["setItem"]("filledInput", JSON[_0x362475(0x2cb)](filledInput));
}
function scrollTop() {
  const _0x5d1fbe = _0x2ea093;
  scrollToTop &&
    $(_0x5d1fbe(0x2cc))[_0x5d1fbe(0x1ef)](
      {
        scrollTop:
          $(_0x5d1fbe(0x257))[_0x5d1fbe(0x248)]()[_0x5d1fbe(0x2f5)] -
          scrollTopOffset,
      },
      0x3e8,
    );
}
function updateStep() {
  const _0x2c323d = _0x2ea093;
  scrollTop(),
    (skip = ![]),
    $(_0x2c323d(0x274))["removeClass"](_0x2c323d(0x245));
  $(_0x2c323d(0x21b))[_0x2c323d(0x1fd)](_0x2c323d(0x1e6)) &&
    (steps[_0x2c323d(0x275)](_0x2c323d(0x2d0))[_0x2c323d(0x239)](function () {
      const _0x1e16c7 = _0x2c323d;
      $(
        $(_0x1e16c7(0x274))[
          $(this)
            [_0x1e16c7(0x278)]("[data-form=\x22step\x22]")
            [_0x1e16c7(0x27f)]()
        ],
      ),
        $(this)["val"]() === "" && emptyInput++;
    }),
    emptyInput > 0x0
      ? $(_0x2c323d(0x2a8))[_0x2c323d(0x224)](_0x2c323d(0x245))
      : $(_0x2c323d(0x2a8))[_0x2c323d(0x268)]("disabled"));
  $("[data-form=\x22custom-progress-indicator\x22]")[_0x2c323d(0x268)](
    "current",
  ),
    $(_0x2c323d(0x274))[_0x2c323d(0x224)](_0x2c323d(0x245)),
    $($(_0x2c323d(0x274))[x])["addClass"]("current"),
    (selection = selections[_0x2c323d(0x2c4)](
      (_0x3b4baf) => _0x3b4baf[_0x2c323d(0x27a)] === x - 0x1,
    ));
  next &&
    (x = getSafe(() => selection[0x0][_0x2c323d(0x2e3)])
      ? parseInt(getSafe(() => selection[0x0][_0x2c323d(0x2e3)]))
      : x);
  $(_0x2c323d(0x2f3))[_0x2c323d(0x1f6)](), steps[_0x2c323d(0x1f6)]();
  reinitIX === !![] && window[_0x2c323d(0x28a)][_0x2c323d(0x2c0)]();
  $(progressbar)[_0x2c323d(0x268)](_0x2c323d(0x284));
  for (i = 0x0; i <= x; i++) {
    countCard
      ? $(progressbar[i])[_0x2c323d(0x224)](_0x2c323d(0x284))
      : !$(steps[i])[_0x2c323d(0x1fd)](_0x2c323d(0x305)) &&
        $(progressbar[i])["addClass"](_0x2c323d(0x284));
  }
  reinitIX === !![]
    ? (window["Webflow"] &&
        window[_0x2c323d(0x28a)][_0x2c323d(0x218)]("ix2")[_0x2c323d(0x264)](),
      document[_0x2c323d(0x295)](new Event(_0x2c323d(0x2de))),
      $(steps[x])[_0x2c323d(0x243)]())
    : $(steps[x])["fadeIn"](_0x2c323d(0x1f7));
  $(_0x2c323d(0x2cf))[_0x2c323d(0x268)]("active-answer-card");
  x === 0x0 &&
    !$(steps[x])["data"](_0x2c323d(0x305)) &&
    ($(steps[x])[_0x2c323d(0x275)]("[data-answer]")["show"](),
    $(steps[x])
      [_0x2c323d(0x275)](_0x2c323d(0x2f3))
      [_0x2c323d(0x224)](_0x2c323d(0x1fa)));
  selection["length"] > 0x0
    ? ($(steps[x])
        [_0x2c323d(0x275)](
          "[data-answer=\x22" + selection[0x0][_0x2c323d(0x23e)] + "\x22]",
        )
        ["show"](),
      $(steps[x])
        [_0x2c323d(0x275)](
          _0x2c323d(0x230) + selection[0x0][_0x2c323d(0x23e)] + "\x22]",
        )
        [_0x2c323d(0x224)](_0x2c323d(0x1fa)))
    : ($(steps[x])
        ["find"](_0x2c323d(0x230) + answer + "\x22]")
        ["show"](),
      $(steps[x])
        ["find"](_0x2c323d(0x230) + answer + "\x22]")
        [_0x2c323d(0x224)](_0x2c323d(0x1fa)));
  if (x === 0x0)
    $(_0x2c323d(0x1eb))[_0x2c323d(0x1f6)](),
      $("[data-form=\x22next-btn\x22]")["show"](),
      $(_0x2c323d(0x28b))[_0x2c323d(0x1f6)]();
  else {
    if (
      x === steps[_0x2c323d(0x2c1)] - 0x1 ||
      $(steps[x])[_0x2c323d(0x275)](_0x2c323d(0x2f7))["length"] > 0x0
    ) {
      $("[data-form=\x22next-btn\x22]")[_0x2c323d(0x1f6)]();
      if (
        $(steps[x])
          ["find"](_0x2c323d(0x26f))
          [_0x2c323d(0x1fd)](_0x2c323d(0x204))
      )
        $(steps[x])[_0x2c323d(0x275)](_0x2c323d(0x26f))[_0x2c323d(0x243)]();
      else
        $(_0x2c323d(0x2da))["data"](_0x2c323d(0x204)) &&
          $("[data-form=\x22next-btn\x22]")[_0x2c323d(0x243)]();
      $(_0x2c323d(0x28b))[_0x2c323d(0x243)](),
        $(_0x2c323d(0x222))["show"](),
        $(_0x2c323d(0x1eb))[_0x2c323d(0x243)]();
    } else
      $(_0x2c323d(0x2da))[_0x2c323d(0x243)](),
        $(_0x2c323d(0x1eb))[_0x2c323d(0x243)](),
        $(_0x2c323d(0x28b))[_0x2c323d(0x1f6)](),
        $(_0x2c323d(0x222))[_0x2c323d(0x1f6)]();
  }
  $($(steps[x])[_0x2c323d(0x275)](_0x2c323d(0x208))[0x0])[_0x2c323d(0x272)](),
    $($(steps[x])[_0x2c323d(0x275)]("textarea[autofocus]")[0x0])[
      _0x2c323d(0x272)
    ](),
    validation();
  for (idx = 0x0; idx <= x; idx++) {
    $($(_0x2c323d(0x274))[idx])[_0x2c323d(0x268)]("disabled");
  }
}
function validateEmail(_0x201fd1, _0xd7339e, _0x54815e) {
  const _0x488ee3 = _0x2ea093;
  let _0x5310a8 = _0x201fd1["includes"]("@")
    ? _0x201fd1[_0x488ee3(0x269)]("@")[0x1][_0x488ee3(0x269)](".")[0x0]
    : [];
  dom = [];
  _0xd7339e !== undefined &&
    _0xd7339e[_0x488ee3(0x269)](",")[_0x488ee3(0x20c)](function (_0xe1c3b0) {
      const _0x45ebcf = _0x488ee3;
      _0xe1c3b0[_0x45ebcf(0x2dc)](_0x5310a8) &&
        dom[_0x45ebcf(0x20b)](_0x5310a8);
    });
  dom[_0x488ee3(0x2c1)] > 0x0 ? (domainAllowed = ![]) : (domainAllowed = !![]);
  var _0x357fdc = /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,20})?$/;
  console[_0x488ee3(0x270)](_0x357fdc["test"](_0x201fd1)),
    !_0x357fdc[_0x488ee3(0x214)](_0x201fd1) || !domainAllowed
      ? ((emailFilled = ![]),
        unfilledArr[_0x488ee3(0x20b)]({ input: _0x54815e }))
      : (emailFilled = !![]);
}
function phoneValidation(_0x34b4ab, _0x4af8be, _0x2dac0f) {
  const _0x59a046 = _0x2ea093;
  if (phoneFormat)
    return _0x34b4ab[_0x59a046(0x2b4)](
      new RegExp(phoneFormat[_0x59a046(0x301)](0x1, -0x1)),
    ) && _0x4af8be >= _0x2dac0f
      ? !![]
      : ![];
  else {
    if (_0x4af8be >= _0x2dac0f) return !![];
  }
}
function validation() {
  const _0x18d782 = _0x2ea093;
  $(steps[x])[_0x18d782(0x1fd)](_0x18d782(0x305)) && enableBtn();
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
    (textareaLength = $(steps[x])["find"](_0x18d782(0x1f0))["length"]),
    (textInputLength = $(steps[x])[_0x18d782(0x275)](_0x18d782(0x292))[
      _0x18d782(0x2c1)
    ]),
    (selectInputLength = $(steps[x])[_0x18d782(0x275)](_0x18d782(0x2b0))[
      _0x18d782(0x2c1)
    ]),
    (emailInputLength = $(steps[x])[_0x18d782(0x275)](_0x18d782(0x1ee))[
      "length"
    ]),
    (checkboxInputLength = $(steps[x])[_0x18d782(0x275)](_0x18d782(0x26e))[
      "length"
    ]);
  textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0
    ? disableBtn()
    : enableBtn();
  checkCount = $(steps[x])["data"](_0x18d782(0x297))
    ? $(steps[x])["data"]("checkbox")
    : $(steps[x])[_0x18d782(0x275)]("[data-checkbox]")[_0x18d782(0x2c1)] > 0x0
      ? $(steps[x])["find"](_0x18d782(0x2e1))["data"]("checkbox")
      : 0x0;
  if (!logicExtra)
    $(steps[x])["find"](_0x18d782(0x1f3))["is"]("[type=\x22checkbox\x22]") &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])[_0x18d782(0x275)](_0x18d782(0x246))[_0x18d782(0x2c1)]
        ? $(steps[x])
            [_0x18d782(0x275)](_0x18d782(0x246))
            ["each"](function () {
              const _0x48a237 = _0x18d782;
              $(this)["is"](_0x48a237(0x24d))
                ? $(steps[x])[_0x48a237(0x275)](_0x48a237(0x1fc))[
                    _0x48a237(0x2c1)
                  ] < 0x1 &&
                  ((checkboxFilled = !![]),
                  resetInputErrorMessage(
                    $(this)[_0x48a237(0x2d1)](_0x48a237(0x2ad)),
                  ))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0x48a237(0x20b)]({
                    input: $(this)[_0x48a237(0x2d1)](_0x48a237(0x2ad)),
                  }));
            })
        : $(steps[x])[_0x18d782(0x275)](_0x18d782(0x250))[_0x18d782(0x2c1)] >=
            checkCount
          ? $(steps[x])[_0x18d782(0x275)](_0x18d782(0x1fc))[_0x18d782(0x2c1)] >
            0x0
            ? $(steps[x])
                [_0x18d782(0x275)](_0x18d782(0x1fc))
                [_0x18d782(0x239)](function () {
                  const _0xd4b31c = _0x18d782;
                  !$(this)["is"](_0xd4b31c(0x24d))
                    ? ((checkboxFilled = ![]),
                      unfilledArr["push"]({
                        input: $(this)[_0xd4b31c(0x2d1)](_0xd4b31c(0x2ad)),
                      }))
                    : ((checkboxFilled = !![]),
                      $(steps[x])["find"](_0xd4b31c(0x226))[_0xd4b31c(0x2c1)] >=
                        $(steps[x])[_0xd4b31c(0x275)](_0xd4b31c(0x1fc))[
                          _0xd4b31c(0x2c1)
                        ] &&
                        resetInputErrorMessage(
                          $(steps[x])
                            [_0xd4b31c(0x275)](":input[type=\x22checkbox\x22]")
                            [_0xd4b31c(0x2d1)](_0xd4b31c(0x2ad)),
                        ));
                })
            : ((checkboxFilled = !![]),
              resetInputErrorMessage(
                $(steps[x])
                  [_0x18d782(0x275)](_0x18d782(0x246))
                  [_0x18d782(0x2d1)]("name"),
              ))
          : ((checkboxFilled = ![]),
            $(steps[x])
              [_0x18d782(0x275)](_0x18d782(0x1fc))
              [_0x18d782(0x239)](function () {
                const _0x4a11a3 = _0x18d782;
                $(this)["not"](":checked") &&
                  unfilledArr[_0x4a11a3(0x20b)]({
                    input: $(this)[_0x4a11a3(0x2d1)](_0x4a11a3(0x2ad)),
                  });
              }),
            unfilledArr[_0x18d782(0x20b)]({
              input: $(steps[x])
                ["find"](_0x18d782(0x246))
                [_0x18d782(0x2d1)](_0x18d782(0x2ad)),
            }))),
      $(steps[x])
        [_0x18d782(0x275)](_0x18d782(0x2fc))
        ["each"](function (_0x54134e) {
          const _0x3c6956 = _0x18d782;
          var _0x3bd0db = $(this)[_0x3c6956(0x2d1)](_0x3c6956(0x2ad));
          $("input:radio[name=\x22" + _0x3bd0db + "\x22]:checked")["length"] ==
          0x0
            ? (!empReqRadio[_0x3c6956(0x275)](
                (_0x42e246) => _0x42e246[_0x3c6956(0x296)] === _0x54134e,
              ) && empReqRadio[_0x3c6956(0x20b)]({ input: _0x54134e }),
              unfilledArr[_0x3c6956(0x20b)]({
                input: $(this)[_0x3c6956(0x2d1)](_0x3c6956(0x2ad)),
              }))
            : (empReqRadio = empReqRadio["filter"](
                (_0x2bb5c5) => _0x2bb5c5[_0x3c6956(0x296)] !== _0x54134e,
              )),
            empReqRadio[_0x3c6956(0x2c1)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0x18d782(0x275)](_0x18d782(0x2db))
        ["each"](function (_0xc3b00b) {
          const _0x4d02f3 = _0x18d782;
          let _0x5ddf2e = $(this)["val"]()[_0x4d02f3(0x2c1)],
            _0x26d462 = $(this)[_0x4d02f3(0x1fd)](_0x4d02f3(0x1f2))
              ? $(this)["data"]("min-character")
              : 0x0;
          $(this)["val"]() !== "" && _0x5ddf2e >= _0x26d462
            ? (empReqInput = empReqInput[_0x4d02f3(0x2c4)](
                (_0x3ef981) => _0x3ef981[_0x4d02f3(0x296)] !== _0xc3b00b,
              ))
            : (!empReqInput[_0x4d02f3(0x275)](
                (_0x55fbde) => _0x55fbde[_0x4d02f3(0x296)] === _0xc3b00b,
              ) && empReqInput[_0x4d02f3(0x20b)]({ input: _0xc3b00b }),
              unfilledArr[_0x4d02f3(0x20b)]({
                input: $(this)[_0x4d02f3(0x2d1)](_0x4d02f3(0x2ad)),
              })),
            empReqInput["length"] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x18d782(0x263))
        ["each"](function (_0x568ad0) {
          const _0x7b9c0f = _0x18d782;
          let _0xc6d668 = $(this)[_0x7b9c0f(0x291)]()[_0x7b9c0f(0x2c1)],
            _0x25c4c1 = $(this)[_0x7b9c0f(0x1fd)](_0x7b9c0f(0x1f2))
              ? $(this)[_0x7b9c0f(0x1fd)](_0x7b9c0f(0x1f2))
              : 0x0;
          $(this)[_0x7b9c0f(0x291)]() !== "" && _0xc6d668 >= _0x25c4c1
            ? (empReqPassword = empReqPassword[_0x7b9c0f(0x2c4)](
                (_0xd48fd) => _0xd48fd["input"] !== _0x568ad0,
              ))
            : (!empReqPassword[_0x7b9c0f(0x275)](
                (_0x4e635f) => _0x4e635f[_0x7b9c0f(0x296)] === _0x568ad0,
              ) && empReqPassword[_0x7b9c0f(0x20b)]({ input: _0x568ad0 }),
              unfilledArr[_0x7b9c0f(0x20b)]({
                input: $(this)[_0x7b9c0f(0x2d1)](_0x7b9c0f(0x2ad)),
              })),
            empReqPassword[_0x7b9c0f(0x2c1)] === 0x0
              ? (passwordFilled = !![])
              : (passwordFilled = ![]);
        }),
      $(steps[x])
        [_0x18d782(0x275)](_0x18d782(0x262))
        [_0x18d782(0x239)](function (_0x3d6422) {
          const _0xa6d80 = _0x18d782;
          let _0x199eb6 = $(this)[_0xa6d80(0x291)]()[_0xa6d80(0x2c1)],
            _0x52ec39 = $(this)[_0xa6d80(0x1fd)]("min-character")
              ? $(this)[_0xa6d80(0x1fd)]("min-character")
              : 0x0;
          $(this)[_0xa6d80(0x291)]() !== "" && _0x199eb6 >= _0x52ec39
            ? (empReqUrl = empReqUrl[_0xa6d80(0x2c4)](
                (_0x304a10) => _0x304a10[_0xa6d80(0x296)] !== _0x3d6422,
              ))
            : (!empReqUrl[_0xa6d80(0x275)](
                (_0x437035) => _0x437035[_0xa6d80(0x296)] === _0x3d6422,
              ) && empReqUrl[_0xa6d80(0x20b)]({ input: _0x3d6422 }),
              unfilledArr["push"]({
                input: $(this)[_0xa6d80(0x2d1)](_0xa6d80(0x2ad)),
              })),
            empReqUrl[_0xa6d80(0x2c1)] === 0x0 &&
            validateURL($(this)[_0xa6d80(0x291)]())
              ? ((urlFilled = !![]), console[_0xa6d80(0x270)](urlFilled))
              : (urlFilled = ![]);
        }),
      $(steps[x])
        [_0x18d782(0x275)](":input[type=\x22date\x22][required]")
        ["each"](function (_0x27b9c9) {
          const _0x322da6 = _0x18d782;
          $(this)[_0x322da6(0x291)]() !== ""
            ? (empReqDate = empReqDate["filter"](
                (_0x15fd3a) => _0x15fd3a[_0x322da6(0x296)] !== _0x27b9c9,
              ))
            : (!empReqDate[_0x322da6(0x275)](
                (_0x466123) => _0x466123[_0x322da6(0x296)] === _0x27b9c9,
              ) && empReqDate[_0x322da6(0x20b)]({ input: _0x27b9c9 }),
              unfilledArr[_0x322da6(0x20b)]({
                input: $(this)[_0x322da6(0x2d1)](_0x322da6(0x2ad)),
              })),
            empReqDate[_0x322da6(0x2c1)] === 0x0
              ? (dateFilled = !![])
              : (dateFilled = ![]);
        }),
      $(steps[x])
        [_0x18d782(0x275)](_0x18d782(0x2f4))
        ["each"](function (_0x520285) {
          const _0x126e10 = _0x18d782;
          if ($(this)[_0x126e10(0x291)]() !== "") {
            let _0x286871 = $(this)[_0x126e10(0x291)]()[_0x126e10(0x2c1)],
              _0x343649 = $(this)[_0x126e10(0x1fd)](_0x126e10(0x1f2))
                ? $(this)[_0x126e10(0x1fd)](_0x126e10(0x1f2))
                : 0x0;
            if ($(this)[_0x126e10(0x1fd)]("phone-autoformat")) {
              var _0x5678b6 = phoneAutoFormat(
                $(this)[_0x126e10(0x1fd)](_0x126e10(0x256)),
              );
              $(this)[_0x126e10(0x291)](_0x5678b6($(this)[_0x126e10(0x291)]()));
            }
            phoneValidation($(this)[_0x126e10(0x291)](), _0x286871, _0x343649)
              ? (empReqTel = empReqTel[_0x126e10(0x2c4)](
                  (_0x5ee824) => _0x5ee824[_0x126e10(0x296)] !== _0x520285,
                ))
              : empReqTel[_0x126e10(0x20b)]({ input: _0x520285 });
          } else
            !empReqTel["find"](
              (_0x2cb62f) => _0x2cb62f[_0x126e10(0x296)] === _0x520285,
            ) && empReqTel[_0x126e10(0x20b)]({ input: _0x520285 }),
              unfilledArr[_0x126e10(0x20b)]({
                input: $(this)[_0x126e10(0x2d1)](_0x126e10(0x2ad)),
              });
          empReqTel[_0x126e10(0x2c1)] === 0x0
            ? (telFilled = !![])
            : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x18d782(0x275)](_0x18d782(0x231))
        [_0x18d782(0x239)](function (_0x15fa21) {
          const _0x380ba1 = _0x18d782;
          $(this)[_0x380ba1(0x291)]() !== ""
            ? (empReqFile = empReqFile[_0x380ba1(0x2c4)](
                (_0xa8cecd) => _0xa8cecd[_0x380ba1(0x296)] !== _0x15fa21,
              ))
            : (!empReqFile[_0x380ba1(0x275)](
                (_0x396c6e) => _0x396c6e[_0x380ba1(0x296)] === _0x15fa21,
              ) && empReqFile[_0x380ba1(0x20b)]({ input: _0x15fa21 }),
              unfilledArr["push"]({
                input: $(this)[_0x380ba1(0x2d1)](_0x380ba1(0x2ad)),
              })),
            empReqFile[_0x380ba1(0x2c1)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        ["find"](":input[type=\x22number\x22][required]")
        [_0x18d782(0x239)](function (_0x3366c4) {
          const _0x39437c = _0x18d782;
          let _0x346960 = $(this)["val"]()[_0x39437c(0x2c1)],
            _0x476cc0 = $(this)["data"](_0x39437c(0x1f2))
              ? $(this)[_0x39437c(0x1fd)](_0x39437c(0x1f2))
              : 0x0;
          $(this)[_0x39437c(0x291)]() !== "" && _0x346960 >= _0x476cc0
            ? (empReqNum = empReqNum["filter"](
                (_0x46cc97) => _0x46cc97[_0x39437c(0x296)] !== _0x3366c4,
              ))
            : (!empReqNum[_0x39437c(0x275)](
                (_0x3e4d17) => _0x3e4d17[_0x39437c(0x296)] === _0x3366c4,
              ) && empReqNum["push"]({ input: _0x3366c4 }),
              unfilledArr[_0x39437c(0x20b)]({
                input: $(this)["attr"](_0x39437c(0x2ad)),
              })),
            empReqNum[_0x39437c(0x2c1)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x18d782(0x275)](_0x18d782(0x201))
        [_0x18d782(0x239)](function (_0x1f43cd) {
          const _0x26d57d = _0x18d782;
          let _0x3c7082 = $(this)["val"]();
          _0x3c7082 === "" && (_0x3c7082 = null),
            _0x3c7082 != null
              ? (empReqSelect = empReqSelect[_0x26d57d(0x2c4)](
                  (_0x3b4ff9) => _0x3b4ff9[_0x26d57d(0x296)] !== _0x1f43cd,
                ))
              : (!empReqSelect[_0x26d57d(0x275)](
                  (_0x2888da) => _0x2888da[_0x26d57d(0x296)] === _0x1f43cd,
                ) && empReqSelect[_0x26d57d(0x20b)]({ input: _0x1f43cd }),
                unfilledArr[_0x26d57d(0x20b)]({
                  input: $(this)[_0x26d57d(0x2d1)](_0x26d57d(0x2ad)),
                })),
            empReqSelect[_0x26d57d(0x2c1)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x18d782(0x275)](_0x18d782(0x2ef))
        [_0x18d782(0x239)](function (_0x2759c4) {
          const _0x3e2a30 = _0x18d782;
          let _0x2efe99 = $(this)["val"]()[_0x3e2a30(0x2c1)],
            _0x5976e1 = $(this)[_0x3e2a30(0x1fd)](_0x3e2a30(0x1f2))
              ? $(this)["data"](_0x3e2a30(0x1f2))
              : 0x0;
          $(this)[_0x3e2a30(0x291)]() !== "" && _0x2efe99 >= _0x5976e1
            ? (empReqTextarea = empReqTextarea[_0x3e2a30(0x2c4)](
                (_0x51e46d) => _0x51e46d[_0x3e2a30(0x296)] !== _0x2759c4,
              ))
            : (!empReqTextarea["find"](
                (_0x347fae) => _0x347fae[_0x3e2a30(0x296)] === _0x2759c4,
              ) && empReqTextarea["push"]({ input: _0x2759c4 }),
              unfilledArr[_0x3e2a30(0x20b)]({
                input: $(this)[_0x3e2a30(0x2d1)](_0x3e2a30(0x2ad)),
              })),
            empReqTextarea[_0x3e2a30(0x2c1)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x18d782(0x2ab))
        [_0x18d782(0x239)](function () {
          const _0x299d09 = _0x18d782;
          $(this)[_0x299d09(0x291)]() !== ""
            ? validateEmail(
                $(this)[_0x299d09(0x291)](),
                $(this)[_0x299d09(0x1fd)](_0x299d09(0x29d)),
                $(this)["attr"](_0x299d09(0x2ad)),
              )
            : ((emailFilled = ![]),
              unfilledArr["push"]({
                input: $(this)[_0x299d09(0x2d1)]("name"),
              }));
        });
  else {
    if ($(steps[x])[_0x18d782(0x1fd)](_0x18d782(0x305)))
      (answer = $(steps[x])
        [_0x18d782(0x275)](_0x18d782(0x29e))
        [_0x18d782(0x1fd)]("go-to")),
        (selections = selections[_0x18d782(0x2c4)](
          (_0x52a1e8) => _0x52a1e8[_0x18d782(0x27a)] !== x,
        )),
        selections[_0x18d782(0x20b)]({ step: x, selected: answer });
    else
      $(steps[x])
        ["find"](_0x18d782(0x2cf))
        [_0x18d782(0x1fd)](_0x18d782(0x305)) &&
        ((answer = $(steps[x])
          [_0x18d782(0x275)](_0x18d782(0x2cf))
          ["data"]("go-to")),
        (selections = selections[_0x18d782(0x2c4)](
          (_0x1beb51) => _0x1beb51["step"] !== x,
        )),
        selections[_0x18d782(0x20b)]({ step: x, selected: answer }));
    $(steps[x])
      [_0x18d782(0x275)](_0x18d782(0x2cf))
      ["find"](_0x18d782(0x1f3))
      ["is"](_0x18d782(0x241)) &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])[_0x18d782(0x275)](_0x18d782(0x246))[_0x18d782(0x2c1)]
        ? (console[_0x18d782(0x270)](_0x18d782(0x214)),
          $(steps[x])
            [_0x18d782(0x275)](_0x18d782(0x246))
            [_0x18d782(0x239)](function () {
              const _0x451146 = _0x18d782;
              $(this)["is"](_0x451146(0x24d))
                ? $(steps[x])[_0x451146(0x275)](":input[required]")[
                    _0x451146(0x2c1)
                  ] < 0x1 &&
                  ((skipTo = undefined),
                  $(this)
                    [_0x451146(0x278)](_0x451146(0x2c9))
                    [_0x451146(0x1fd)]("skip-to") &&
                    (skipTo = $(this)
                      [_0x451146(0x278)](_0x451146(0x2c9))
                      ["data"](_0x451146(0x2e7))),
                  $(this)
                    [_0x451146(0x278)]("[data-go-to]")
                    [_0x451146(0x2d1)]("data-go-to") &&
                    ((answer = $(this)
                      [_0x451146(0x278)](_0x451146(0x29e))
                      [_0x451146(0x2d1)](_0x451146(0x271))),
                    (selections = selections[_0x451146(0x2c4)](
                      (_0x536c71) => _0x536c71["step"] !== x,
                    )),
                    selections[_0x451146(0x20b)]({ step: x, selected: answer }),
                    skipTo &&
                      (selections[_0x451146(0x20b)]({
                        step: skipTo - 0x2,
                        selected: answer,
                      }),
                      (objIndex = selections[_0x451146(0x2d2)](
                        (_0x140616) => _0x140616[_0x451146(0x27a)] === x,
                      )),
                      (selections[objIndex][_0x451146(0x2e3)] =
                        parseInt(skipTo) - 0x1),
                      (selections[objIndex][_0x451146(0x2bc)] = x))),
                  (checkboxFilled = !![]),
                  $(steps[x])[_0x451146(0x275)](_0x451146(0x226))["length"] >=
                    $(steps[x])[_0x451146(0x275)](_0x451146(0x1fc))["length"] &&
                    resetInputErrorMessage(
                      $(steps[x])
                        [_0x451146(0x275)](_0x451146(0x246))
                        [_0x451146(0x2d1)](_0x451146(0x2ad)),
                    ))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0x451146(0x20b)]({
                    input: $(this)[_0x451146(0x2d1)](_0x451146(0x2ad)),
                  }));
            }))
        : $(steps[x])
              [_0x18d782(0x275)](_0x18d782(0x2cf))
              [_0x18d782(0x275)](_0x18d782(0x250))[_0x18d782(0x2c1)] >=
            checkCount
          ? ($(steps[x])
              [_0x18d782(0x275)](".active-answer-card")
              [_0x18d782(0x275)](_0x18d782(0x246))
              [_0x18d782(0x278)](_0x18d782(0x29e))
              ["attr"](_0x18d782(0x271)) &&
              ((skipTo = undefined),
              $(steps[x])
                [_0x18d782(0x275)](_0x18d782(0x2cf))
                [_0x18d782(0x275)](_0x18d782(0x246))
                [_0x18d782(0x278)]("[data-skip-to]")
                [_0x18d782(0x2d1)](_0x18d782(0x1f4)) &&
                (skipTo = $(steps[x])
                  [_0x18d782(0x275)](_0x18d782(0x2cf))
                  [_0x18d782(0x275)](_0x18d782(0x250))
                  [_0x18d782(0x278)](_0x18d782(0x2c9))
                  [_0x18d782(0x2d1)]("data-skip-to")),
              (answer = $(steps[x])
                [_0x18d782(0x275)](_0x18d782(0x2cf))
                ["find"](_0x18d782(0x246))
                ["parents"](_0x18d782(0x29e))
                [_0x18d782(0x2d1)](_0x18d782(0x271))),
              (selections = selections[_0x18d782(0x2c4)](
                (_0x7fc9d5) => _0x7fc9d5[_0x18d782(0x27a)] !== x,
              )),
              selections[_0x18d782(0x20b)]({ step: x, selected: answer }),
              skipTo &&
                ((selections = selections[_0x18d782(0x2c4)](
                  (_0xf6e2d1) => _0xf6e2d1["step"] !== skipTo - 0x2,
                )),
                selections[_0x18d782(0x20b)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x18d782(0x2d2)](
                  (_0x2335fb) => _0x2335fb[_0x18d782(0x27a)] === x,
                )),
                console[_0x18d782(0x270)](objIndex),
                (selections[objIndex][_0x18d782(0x2e3)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x18d782(0x2bc)] = x),
                console[_0x18d782(0x270)](_0x18d782(0x298)))),
            (checkboxFilled = !![]),
            $(steps[x])[_0x18d782(0x275)](_0x18d782(0x226))[_0x18d782(0x2c1)] >=
              $(steps[x])[_0x18d782(0x275)](_0x18d782(0x1fc))[
                _0x18d782(0x2c1)
              ] &&
              resetInputErrorMessage(
                $(steps[x])
                  [_0x18d782(0x275)](_0x18d782(0x246))
                  [_0x18d782(0x2d1)]("name"),
              ))
          : ((checkboxFilled = ![]),
            $(steps[x])
              [_0x18d782(0x275)](_0x18d782(0x1fc))
              [_0x18d782(0x239)](function () {
                const _0x5d65c7 = _0x18d782;
                $(this)[_0x5d65c7(0x2a0)](":checked") &&
                  unfilledArr["push"]({
                    input: $(this)[_0x5d65c7(0x2d1)](_0x5d65c7(0x2ad)),
                  });
              }))),
      $(steps[x])
        [_0x18d782(0x275)](".active-answer-card")
        [_0x18d782(0x275)](_0x18d782(0x2fc))
        [_0x18d782(0x239)](function (_0x1510e5) {
          const _0x7388b5 = _0x18d782;
          var _0x36f04e = $(this)[_0x7388b5(0x2d1)](_0x7388b5(0x2ad));
          $(_0x7388b5(0x23a) + _0x36f04e + "\x22]:checked")[_0x7388b5(0x2c1)] ==
          0x0
            ? (!empReqRadio[_0x7388b5(0x275)](
                (_0x5e80fe) => _0x5e80fe[_0x7388b5(0x296)] === _0x1510e5,
              ) && empReqRadio[_0x7388b5(0x20b)]({ input: _0x1510e5 }),
              unfilledArr["push"]({
                input: $(this)[_0x7388b5(0x2d1)](_0x7388b5(0x2ad)),
              }))
            : (empReqRadio = empReqRadio[_0x7388b5(0x2c4)](
                (_0x106022) => _0x106022[_0x7388b5(0x296)] !== _0x1510e5,
              )),
            empReqRadio[_0x7388b5(0x2c1)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        ["find"](".active-answer-card")
        [_0x18d782(0x275)](_0x18d782(0x2db))
        [_0x18d782(0x239)](function (_0x35e5b6) {
          const _0x33a45f = _0x18d782;
          let _0x588304 = $(this)[_0x33a45f(0x291)]()[_0x33a45f(0x2c1)],
            _0x4df79f = $(this)[_0x33a45f(0x1fd)]("min-character")
              ? $(this)[_0x33a45f(0x1fd)]("min-character")
              : 0x0;
          $(this)[_0x33a45f(0x291)]() !== "" && _0x588304 >= _0x4df79f
            ? (empReqInput = empReqInput[_0x33a45f(0x2c4)](
                (_0x25071c) => _0x25071c[_0x33a45f(0x296)] !== _0x35e5b6,
              ))
            : (!empReqInput["find"](
                (_0xcf3bf6) => _0xcf3bf6[_0x33a45f(0x296)] === _0x35e5b6,
              ) && empReqInput[_0x33a45f(0x20b)]({ input: _0x35e5b6 }),
              unfilledArr["push"]({
                input: $(this)["attr"](_0x33a45f(0x2ad)),
              })),
            empReqInput["length"] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x18d782(0x275)](_0x18d782(0x2cf))
        [_0x18d782(0x275)](_0x18d782(0x300))
        [_0x18d782(0x239)](function (_0x737ffc) {
          const _0xbe2de6 = _0x18d782;
          (skipTo = undefined),
            $(this)
              [_0xbe2de6(0x278)](_0xbe2de6(0x2c9))
              ["data"](_0xbe2de6(0x2e7)) !== "" &&
              (skipTo = $(this)
                ["parents"]("[data-skip-to]")
                [_0xbe2de6(0x1fd)]("skip-to")),
            $(this)
              [_0xbe2de6(0x278)](_0xbe2de6(0x29e))
              [_0xbe2de6(0x2d1)](_0xbe2de6(0x271)) &&
              ((answer = $(this)
                [_0xbe2de6(0x278)](_0xbe2de6(0x29e))
                [_0xbe2de6(0x2d1)]("data-go-to")),
              (selections = selections[_0xbe2de6(0x2c4)](
                (_0x294e9a) => _0x294e9a[_0xbe2de6(0x27a)] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0xbe2de6(0x20b)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0xbe2de6(0x2d2)](
                  (_0x28016a) => _0x28016a[_0xbe2de6(0x27a)] === x,
                )),
                (selections[objIndex][_0xbe2de6(0x2e3)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        ["find"](_0x18d782(0x2cf))
        [_0x18d782(0x275)](_0x18d782(0x263))
        [_0x18d782(0x239)](function (_0xf4d9b3) {
          const _0x14ed72 = _0x18d782;
          let _0x16adbf = $(this)["val"]()[_0x14ed72(0x2c1)],
            _0xd31d52 = $(this)[_0x14ed72(0x1fd)](_0x14ed72(0x1f2))
              ? $(this)[_0x14ed72(0x1fd)]("min-character")
              : 0x0;
          $(this)[_0x14ed72(0x291)]() !== "" && _0x16adbf >= _0xd31d52
            ? (empReqPassword = empReqPassword[_0x14ed72(0x2c4)](
                (_0x277e5a) => _0x277e5a[_0x14ed72(0x296)] !== _0xf4d9b3,
              ))
            : (!empReqPassword[_0x14ed72(0x275)](
                (_0x259601) => _0x259601[_0x14ed72(0x296)] === _0xf4d9b3,
              ) && empReqPassword[_0x14ed72(0x20b)]({ input: _0xf4d9b3 }),
              unfilledArr[_0x14ed72(0x20b)]({
                input: $(this)["attr"](_0x14ed72(0x2ad)),
              })),
            empReqPassword[_0x14ed72(0x2c1)] === 0x0
              ? (passwordFilled = !![])
              : (passwordFilled = ![]);
        }),
      $(steps[x])
        [_0x18d782(0x275)](".active-answer-card")
        [_0x18d782(0x275)](_0x18d782(0x2c6))
        [_0x18d782(0x239)](function (_0x385da3) {
          const _0x230d42 = _0x18d782;
          (skipTo = undefined),
            $(this)
              [_0x230d42(0x278)]("[data-skip-to]")
              [_0x230d42(0x1fd)](_0x230d42(0x2e7)) !== "" &&
              (skipTo = $(this)
                [_0x230d42(0x278)](_0x230d42(0x2c9))
                [_0x230d42(0x1fd)]("skip-to")),
            $(this)
              [_0x230d42(0x278)]("[data-go-to]")
              [_0x230d42(0x2d1)](_0x230d42(0x271)) &&
              ((answer = $(this)
                [_0x230d42(0x278)]("[data-go-to]")
                [_0x230d42(0x2d1)](_0x230d42(0x271))),
              (selections = selections[_0x230d42(0x2c4)](
                (_0x501d5e) => _0x501d5e["step"] !== x,
              )),
              selections[_0x230d42(0x20b)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x230d42(0x20b)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x230d42(0x2d2)](
                  (_0x1e4d06) => _0x1e4d06[_0x230d42(0x27a)] === x,
                )),
                (selections[objIndex][_0x230d42(0x2e3)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x18d782(0x275)](".active-answer-card")
        [_0x18d782(0x275)](_0x18d782(0x262))
        [_0x18d782(0x239)](function (_0xbe0bb2) {
          const _0x41c79f = _0x18d782;
          let _0x5e0fe9 = $(this)["val"]()[_0x41c79f(0x2c1)],
            _0x3488ae = $(this)["data"]("min-character")
              ? $(this)[_0x41c79f(0x1fd)]("min-character")
              : 0x0;
          $(this)["val"]() !== "" && _0x5e0fe9 >= _0x3488ae
            ? (empReqUrl = empReqUrl[_0x41c79f(0x2c4)](
                (_0x137e35) => _0x137e35[_0x41c79f(0x296)] !== _0xbe0bb2,
              ))
            : (!empReqUrl[_0x41c79f(0x275)](
                (_0x57f27c) => _0x57f27c[_0x41c79f(0x296)] === _0xbe0bb2,
              ) && empReqUrl[_0x41c79f(0x20b)]({ input: _0xbe0bb2 }),
              unfilledArr[_0x41c79f(0x20b)]({
                input: $(this)[_0x41c79f(0x2d1)](_0x41c79f(0x2ad)),
              })),
            empReqUrl[_0x41c79f(0x2c1)] === 0x0 &&
            validateURL($(this)[_0x41c79f(0x291)]())
              ? (urlFilled = !![])
              : (urlFilled = ![]);
        }),
      $(steps[x])
        [_0x18d782(0x275)](_0x18d782(0x2cf))
        ["find"](":input[type=\x22url\x22]")
        [_0x18d782(0x239)](function (_0x18ed50) {
          const _0x2d9d9d = _0x18d782;
          (skipTo = undefined),
            $(this)
              ["parents"](_0x2d9d9d(0x2c9))
              [_0x2d9d9d(0x1fd)]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0x2d9d9d(0x278)](_0x2d9d9d(0x2c9))
                [_0x2d9d9d(0x1fd)](_0x2d9d9d(0x2e7))),
            $(this)
              [_0x2d9d9d(0x278)](_0x2d9d9d(0x29e))
              [_0x2d9d9d(0x2d1)]("data-go-to") &&
              ((answer = $(this)
                [_0x2d9d9d(0x278)](_0x2d9d9d(0x29e))
                [_0x2d9d9d(0x2d1)](_0x2d9d9d(0x271))),
              (selections = selections[_0x2d9d9d(0x2c4)](
                (_0x445001) => _0x445001["step"] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x2d9d9d(0x20b)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x2d9d9d(0x2d2)](
                  (_0x4b42a0) => _0x4b42a0[_0x2d9d9d(0x27a)] === x,
                )),
                (selections[objIndex][_0x2d9d9d(0x2e3)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x2d9d9d(0x2bc)] = x)));
        }),
      $(steps[x])
        [_0x18d782(0x275)](_0x18d782(0x2cf))
        ["find"](_0x18d782(0x2c7))
        [_0x18d782(0x239)](function (_0x28eff7) {
          const _0x5e3bba = _0x18d782;
          $(this)[_0x5e3bba(0x291)]() !== ""
            ? (empReqDate = empReqDate["filter"](
                (_0xd470c6) => _0xd470c6["input"] !== _0x28eff7,
              ))
            : (!empReqDate[_0x5e3bba(0x275)](
                (_0x193aa3) => _0x193aa3[_0x5e3bba(0x296)] === _0x28eff7,
              ) && empReqDate[_0x5e3bba(0x20b)]({ input: _0x28eff7 }),
              unfilledArr[_0x5e3bba(0x20b)]({
                input: $(this)["attr"](_0x5e3bba(0x2ad)),
              })),
            empReqDate[_0x5e3bba(0x2c1)] === 0x0
              ? (dateFilled = !![])
              : (dateFilled = ![]);
        }),
      $(steps[x])
        [_0x18d782(0x275)](_0x18d782(0x2cf))
        [_0x18d782(0x275)](_0x18d782(0x2a6))
        [_0x18d782(0x239)](function (_0x5b6ad1) {
          const _0x4c8910 = _0x18d782;
          (skipTo = undefined),
            $(this)
              [_0x4c8910(0x278)](_0x4c8910(0x2c9))
              [_0x4c8910(0x1fd)](_0x4c8910(0x2e7)) !== "" &&
              (skipTo = $(this)
                [_0x4c8910(0x278)]("[data-skip-to]")
                ["data"](_0x4c8910(0x2e7))),
            $(this)
              [_0x4c8910(0x278)](_0x4c8910(0x29e))
              [_0x4c8910(0x2d1)](_0x4c8910(0x271)) &&
              ((answer = $(this)
                [_0x4c8910(0x278)](_0x4c8910(0x29e))
                [_0x4c8910(0x2d1)]("data-go-to")),
              (selections = selections[_0x4c8910(0x2c4)](
                (_0xff2c96) => _0xff2c96[_0x4c8910(0x27a)] !== x,
              )),
              selections[_0x4c8910(0x20b)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0x4c8910(0x2d2)](
                  (_0x40bc16) => _0x40bc16[_0x4c8910(0x27a)] === x,
                )),
                (selections[objIndex][_0x4c8910(0x2e3)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x4c8910(0x2bc)] = x)));
        }),
      $(steps[x])
        ["find"](_0x18d782(0x2cf))
        [_0x18d782(0x275)](":input[type=\x22number\x22][required]")
        [_0x18d782(0x239)](function (_0x283c7a) {
          const _0x1a0276 = _0x18d782;
          let _0x4c14e4 = $(this)["val"]()["length"],
            _0x1f4034 = $(this)[_0x1a0276(0x1fd)](_0x1a0276(0x1f2))
              ? $(this)[_0x1a0276(0x1fd)]("min-character")
              : 0x0;
          $(this)[_0x1a0276(0x291)]() !== "" && _0x4c14e4 >= _0x1f4034
            ? (empReqNum = empReqNum[_0x1a0276(0x2c4)](
                (_0x215ca0) => _0x215ca0["input"] !== _0x283c7a,
              ))
            : (!empReqNum["find"](
                (_0xb52138) => _0xb52138[_0x1a0276(0x296)] === _0x283c7a,
              ) && empReqNum["push"]({ input: _0x283c7a }),
              unfilledArr[_0x1a0276(0x20b)]({
                input: $(this)[_0x1a0276(0x2d1)](_0x1a0276(0x2ad)),
              })),
            empReqNum[_0x1a0276(0x2c1)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x18d782(0x275)](_0x18d782(0x2cf))
        [_0x18d782(0x275)](_0x18d782(0x203))
        ["each"](function (_0x2d276e) {
          const _0x2217e2 = _0x18d782;
          (skipTo = undefined),
            $(this)
              [_0x2217e2(0x278)]("[data-skip-to]")
              [_0x2217e2(0x1fd)](_0x2217e2(0x2e7)) !== "" &&
              (skipTo = $(this)
                [_0x2217e2(0x278)]("[data-skip-to]")
                [_0x2217e2(0x1fd)](_0x2217e2(0x2e7))),
            $(this)["parents"](_0x2217e2(0x29e))["attr"]("data-go-to") &&
              ((answer = $(this)
                ["parents"]("[data-go-to]")
                ["attr"](_0x2217e2(0x271))),
              (selections = selections[_0x2217e2(0x2c4)](
                (_0x4933ad) => _0x4933ad[_0x2217e2(0x27a)] !== x,
              )),
              selections[_0x2217e2(0x20b)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x2217e2(0x20b)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x2217e2(0x2d2)](
                  (_0xa30da) => _0xa30da["step"] === x,
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x18d782(0x275)](_0x18d782(0x2cf))
        ["find"](_0x18d782(0x2f4))
        [_0x18d782(0x239)](function (_0x1ef73f) {
          const _0x1c3e51 = _0x18d782;
          if ($(this)["val"]() !== "") {
            let _0x2dd738 = $(this)[_0x1c3e51(0x291)]()[_0x1c3e51(0x2c1)],
              _0x450fb9 = $(this)[_0x1c3e51(0x1fd)](_0x1c3e51(0x1f2))
                ? $(this)[_0x1c3e51(0x1fd)](_0x1c3e51(0x1f2))
                : 0x0;
            if ($(this)[_0x1c3e51(0x1fd)](_0x1c3e51(0x256))) {
              var _0x23fc0e = phoneAutoFormat(
                $(this)[_0x1c3e51(0x1fd)](_0x1c3e51(0x256)),
              );
              $(this)[_0x1c3e51(0x291)](_0x23fc0e($(this)["val"]()));
            }
            phoneValidation($(this)[_0x1c3e51(0x291)](), _0x2dd738, _0x450fb9)
              ? (empReqTel = empReqTel[_0x1c3e51(0x2c4)](
                  (_0x22b5b3) => _0x22b5b3[_0x1c3e51(0x296)] !== _0x1ef73f,
                ))
              : empReqTel[_0x1c3e51(0x20b)]({ input: _0x1ef73f });
          } else
            !empReqTel[_0x1c3e51(0x275)](
              (_0x11a30e) => _0x11a30e["input"] === _0x1ef73f,
            ) && empReqTel[_0x1c3e51(0x20b)]({ input: _0x1ef73f }),
              unfilledArr[_0x1c3e51(0x20b)]({
                input: $(this)[_0x1c3e51(0x2d1)](_0x1c3e51(0x2ad)),
              });
          empReqTel[_0x1c3e51(0x2c1)] === 0x0
            ? (telFilled = !![])
            : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x18d782(0x275)](_0x18d782(0x2cf))
        [_0x18d782(0x275)](":input[type=\x22tel\x22]")
        [_0x18d782(0x239)](function (_0x3856df) {
          const _0xd40c19 = _0x18d782;
          (skipTo = undefined),
            $(this)
              ["parents"]("[data-skip-to]")
              [_0xd40c19(0x1fd)](_0xd40c19(0x2e7)) !== "" &&
              (skipTo = $(this)
                [_0xd40c19(0x278)]("[data-skip-to]")
                [_0xd40c19(0x1fd)]("skip-to")),
            $(this)
              [_0xd40c19(0x278)](_0xd40c19(0x29e))
              [_0xd40c19(0x2d1)](_0xd40c19(0x271)) &&
              ((answer = $(this)
                ["parents"](_0xd40c19(0x29e))
                [_0xd40c19(0x2d1)]("data-go-to")),
              (selections = selections["filter"](
                (_0x56879d) => _0x56879d[_0xd40c19(0x27a)] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0xd40c19(0x2d2)](
                  (_0x28103a) => _0x28103a[_0xd40c19(0x27a)] === x,
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0xd40c19(0x2bc)] = x)));
        }),
      $(steps[x])
        [_0x18d782(0x275)](".active-answer-card")
        [_0x18d782(0x275)](_0x18d782(0x231))
        ["each"](function (_0x342843) {
          const _0x4d4a28 = _0x18d782;
          $(this)[_0x4d4a28(0x291)]() !== ""
            ? (empReqFile = empReqFile["filter"](
                (_0x9bb39d) => _0x9bb39d[_0x4d4a28(0x296)] !== _0x342843,
              ))
            : (!empReqFile["find"](
                (_0xfca02e) => _0xfca02e[_0x4d4a28(0x296)] === _0x342843,
              ) && empReqFile[_0x4d4a28(0x20b)]({ input: _0x342843 }),
              unfilledArr[_0x4d4a28(0x20b)]({
                input: $(this)[_0x4d4a28(0x2d1)](_0x4d4a28(0x2ad)),
              })),
            empReqFile["length"] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x18d782(0x275)](_0x18d782(0x2cf))
        [_0x18d782(0x275)](_0x18d782(0x1fe))
        [_0x18d782(0x239)](function (_0x3c9822) {
          const _0x21080e = _0x18d782;
          (skipTo = undefined),
            $(this)
              ["parents"](_0x21080e(0x2c9))
              [_0x21080e(0x1fd)](_0x21080e(0x2e7)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0x21080e(0x2c9))
                [_0x21080e(0x1fd)]("skip-to")),
            $(this)
              [_0x21080e(0x278)](_0x21080e(0x29e))
              [_0x21080e(0x2d1)](_0x21080e(0x271)) &&
              ((answer = $(this)
                [_0x21080e(0x278)](_0x21080e(0x29e))
                [_0x21080e(0x2d1)]("data-go-to")),
              (selections = selections["filter"](
                (_0x1afacf) => _0x1afacf[_0x21080e(0x27a)] !== x,
              )),
              selections[_0x21080e(0x20b)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x21080e(0x20b)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x21080e(0x2d2)](
                  (_0xb5933f) => _0xb5933f[_0x21080e(0x27a)] === x,
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x21080e(0x2bc)] = x)));
        }),
      $(steps[x])
        ["find"](".active-answer-card")
        [_0x18d782(0x275)](_0x18d782(0x201))
        [_0x18d782(0x239)](function (_0x50abcf) {
          const _0x529148 = _0x18d782;
          console[_0x529148(0x270)]($(this)[_0x529148(0x291)]()),
            $(this)[_0x529148(0x291)]() !== null && $(this)["val"]() !== ""
              ? (empReqSelect = empReqSelect[_0x529148(0x2c4)](
                  (_0x160362) => _0x160362[_0x529148(0x296)] !== _0x50abcf,
                ))
              : (!empReqSelect[_0x529148(0x275)](
                  (_0x16120e) => _0x16120e[_0x529148(0x296)] === _0x50abcf,
                ) && empReqSelect["push"]({ input: _0x50abcf }),
                unfilledArr[_0x529148(0x20b)]({
                  input: $(this)["attr"](_0x529148(0x2ad)),
                })),
            empReqSelect["length"] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x18d782(0x2cf))
        [_0x18d782(0x275)]("select")
        [_0x18d782(0x239)](function (_0x9a6506) {
          const _0x325589 = _0x18d782;
          (skipTo = undefined),
            $(this)
              [_0x325589(0x278)](_0x325589(0x2c9))
              ["data"](_0x325589(0x2e7)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0x325589(0x2c9))
                [_0x325589(0x1fd)]("skip-to")),
            $(this)
              [_0x325589(0x278)](_0x325589(0x29e))
              [_0x325589(0x2d1)](_0x325589(0x271)) &&
              ((answer = $(this)
                [_0x325589(0x278)](_0x325589(0x29e))
                [_0x325589(0x2d1)](_0x325589(0x271))),
              (selections = selections[_0x325589(0x2c4)](
                (_0xcf37b5) => _0xcf37b5[_0x325589(0x27a)] !== x,
              )),
              selections[_0x325589(0x20b)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x325589(0x20b)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x325589(0x2d2)](
                  (_0x4c41ad) => _0x4c41ad[_0x325589(0x27a)] === x,
                )),
                (selections[objIndex][_0x325589(0x2e3)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x18d782(0x275)](_0x18d782(0x2cf))
        [_0x18d782(0x275)]("textarea[required]")
        [_0x18d782(0x239)](function (_0x31d9cc) {
          const _0x2ad21b = _0x18d782;
          let _0x181613 = $(this)[_0x2ad21b(0x291)]()[_0x2ad21b(0x2c1)],
            _0x1b9a5b = $(this)[_0x2ad21b(0x1fd)](_0x2ad21b(0x1f2))
              ? $(this)[_0x2ad21b(0x1fd)](_0x2ad21b(0x1f2))
              : 0x0;
          $(this)[_0x2ad21b(0x291)]() !== "" && _0x181613 >= _0x1b9a5b
            ? (empReqTextarea = empReqTextarea["filter"](
                (_0x1a55a3) => _0x1a55a3[_0x2ad21b(0x296)] !== _0x31d9cc,
              ))
            : (!empReqTextarea[_0x2ad21b(0x275)](
                (_0x684b5b) => _0x684b5b[_0x2ad21b(0x296)] === _0x31d9cc,
              ) && empReqTextarea[_0x2ad21b(0x20b)]({ input: _0x31d9cc }),
              unfilledArr[_0x2ad21b(0x20b)]({
                input: $(this)[_0x2ad21b(0x2d1)](_0x2ad21b(0x2ad)),
              })),
            empReqTextarea[_0x2ad21b(0x2c1)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x18d782(0x275)](_0x18d782(0x2cf))
        ["find"](_0x18d782(0x27d))
        [_0x18d782(0x239)](function (_0x48f2bc) {
          const _0x37411d = _0x18d782;
          (skipTo = undefined),
            $(this)
              [_0x37411d(0x278)]("[data-skip-to]")
              [_0x37411d(0x1fd)](_0x37411d(0x2e7)) !== "" &&
              (skipTo = $(this)
                [_0x37411d(0x278)]("[data-skip-to]")
                ["data"](_0x37411d(0x2e7))),
            $(this)
              [_0x37411d(0x278)](_0x37411d(0x29e))
              [_0x37411d(0x2d1)]("data-go-to") &&
              ((answer = $(this)
                [_0x37411d(0x278)](_0x37411d(0x29e))
                [_0x37411d(0x2d1)](_0x37411d(0x271))),
              (selections = selections[_0x37411d(0x2c4)](
                (_0xdcd8ad) => _0xdcd8ad[_0x37411d(0x27a)] !== x,
              )),
              selections[_0x37411d(0x20b)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x37411d(0x20b)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x37411d(0x2d2)](
                  (_0x519189) => _0x519189[_0x37411d(0x27a)] === x,
                )),
                (selections[objIndex][_0x37411d(0x2e3)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x37411d(0x2bc)] = x)));
        }),
      $(steps[x])
        ["find"](_0x18d782(0x2cf))
        ["find"](_0x18d782(0x2ab))
        ["each"](function (_0xc0bdd8) {
          const _0xc5d313 = _0x18d782;
          $(this)[_0xc5d313(0x291)]() !== ""
            ? validateEmail(
                $(this)[_0xc5d313(0x291)](),
                $(this)["data"](_0xc5d313(0x29d)),
                $(this)[_0xc5d313(0x2d1)](_0xc5d313(0x2ad)),
              )
            : ((emailFilled = ![]),
              unfilledArr[_0xc5d313(0x20b)]({
                input: $(this)["attr"](_0xc5d313(0x2ad)),
              }));
        }),
      $(steps[x])
        [_0x18d782(0x275)](_0x18d782(0x2cf))
        [_0x18d782(0x275)](_0x18d782(0x1f5))
        [_0x18d782(0x239)](function (_0x817d63) {
          const _0x557159 = _0x18d782;
          (skipTo = undefined),
            $(this)
              [_0x557159(0x278)](_0x557159(0x2c9))
              [_0x557159(0x1fd)](_0x557159(0x2e7)) !== "" &&
              (skipTo = $(this)
                [_0x557159(0x278)](_0x557159(0x2c9))
                [_0x557159(0x1fd)](_0x557159(0x2e7))),
            $(this)
              [_0x557159(0x278)](_0x557159(0x29e))
              [_0x557159(0x2d1)]("data-go-to") &&
              ((answer = $(this)
                ["parents"]("[data-go-to]")
                ["attr"](_0x557159(0x271))),
              (selections = selections[_0x557159(0x2c4)](
                (_0x5f438c) => _0x5f438c[_0x557159(0x27a)] !== x,
              )),
              selections[_0x557159(0x20b)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x557159(0x20b)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x557159(0x2d2)](
                  (_0xde01b9) => _0xde01b9[_0x557159(0x27a)] === x,
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x557159(0x2bc)] = x)));
        });
  }
  $(steps[x])
    [_0x18d782(0x275)](":input[type=\x22radio\x22]:visible")
    ["is"](":checked") &&
    ((selArr = []),
    $(steps)
      ["find"]("[data-selected]:checked")
      [_0x18d782(0x239)](function (_0x29de0a, _0x2bc318) {
        const _0x11a464 = _0x18d782;
        selArr["push"]({
          selected: $(this)[_0x11a464(0x1fd)](_0x11a464(0x23e)),
        });
      }),
    (selString = []),
    selArr[_0x18d782(0x20c)]((_0x393db8) =>
      selString[_0x18d782(0x20b)](_0x393db8[_0x18d782(0x23e)]),
    ),
    (selections = selections["filter"](
      (_0x364032) => _0x364032[_0x18d782(0x27a)] !== x,
    )),
    $(steps[x])
      [_0x18d782(0x275)](_0x18d782(0x2cf))
      [_0x18d782(0x275)](_0x18d782(0x304))
      ["each"](function () {
        const _0x772298 = _0x18d782;
        skipTo = undefined;
        if (
          $(this)
            [_0x772298(0x278)](_0x772298(0x2c9))
            [_0x772298(0x1fd)](_0x772298(0x2e7))
        )
          skipTo = $(this)
            [_0x772298(0x278)]("[data-skip-to]")
            [_0x772298(0x1fd)]("skip-to");
        else
          $(this)["data"](_0x772298(0x2e7)) &&
            (skipTo = $(this)[_0x772298(0x1fd)](_0x772298(0x2e7)));
        if ($(this)[_0x772298(0x1fd)](_0x772298(0x29f)))
          (answer = $(this)[_0x772298(0x2d1)](_0x772298(0x271))),
            console[_0x772298(0x270)](answer, selections),
            selections[_0x772298(0x20b)]({ step: x, selected: answer }),
            skipTo &&
              (selections["push"]({ step: skipTo - 0x2, selected: answer }),
              (objIndex = selections[_0x772298(0x2d2)](
                (_0xf7117c) => _0xf7117c["step"] === x,
              )),
              (selections[objIndex][_0x772298(0x2e3)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x772298(0x2bc)] = x));
        else
          $(this)
            [_0x772298(0x278)](_0x772298(0x29e))
            [_0x772298(0x1fd)]("go-to") &&
            ((answer = $(this)
              [_0x772298(0x278)](_0x772298(0x29e))
              ["data"](_0x772298(0x29f))),
            selections["push"]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0x772298(0x20b)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0x772298(0x2d2)](
                (_0x11f9f0) => _0x11f9f0[_0x772298(0x27a)] === x,
              )),
              (selections[objIndex][_0x772298(0x2e3)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x772298(0x2bc)] = x)));
      }),
    logicExtra
      ? ($(steps[x])
          ["find"](".active-answer-card")
          [_0x18d782(0x275)](_0x18d782(0x2fb))
          ["data"](_0x18d782(0x2f8)) === !![] ||
          $(steps[x])
            [_0x18d782(0x275)](_0x18d782(0x2b9))
            [_0x18d782(0x1fd)](_0x18d782(0x2f8)) === !![]) &&
        skip &&
        selections["filter"]((_0x5d384a) => _0x5d384a[_0x18d782(0x27a)] === x)[
          _0x18d782(0x2c1)
        ] > 0x0 &&
        textareaLength === 0x0 &&
        textInputLength === 0x0 &&
        emailInputLength === 0x0 &&
        checkboxInputLength === 0x0 &&
        setTimeout(
          function () {
            (next = !![]), nextStep(), selectionQuiz();
          },
          $(steps[x])
            [_0x18d782(0x275)](_0x18d782(0x2d3))
            ["data"](_0x18d782(0x2ec)),
        )
      : $(steps[x])
          [_0x18d782(0x275)](_0x18d782(0x2fb))
          [_0x18d782(0x1fd)](_0x18d782(0x2f8)) === !![] &&
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
            ["find"](_0x18d782(0x2d3))
            [_0x18d782(0x1fd)]("radio-delay"),
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
  const _0x54cd98 = _0x2ea093;
  $("[data-text=\x22error-message\x22]")[_0x54cd98(0x1f6)](),
    unfilledArr[_0x54cd98(0x2c1)] > 0x0 &&
      unfilledArr[_0x54cd98(0x20c)](function (_0x40ed4e) {
        const _0xdde2b9 = _0x54cd98;
        $(_0xdde2b9(0x267) + _0x40ed4e[_0xdde2b9(0x296)] + "\x22]")
          [_0xdde2b9(0x20d)](_0xdde2b9(0x261))
          ["fadeIn"](),
          $(_0xdde2b9(0x267) + _0x40ed4e[_0xdde2b9(0x296)] + "\x22]")
            [_0xdde2b9(0x278)]()
            ["children"](_0xdde2b9(0x261))
            ["fadeIn"](),
          $(_0xdde2b9(0x2a5) + _0x40ed4e[_0xdde2b9(0x296)] + "\x22]")
            ["siblings"](_0xdde2b9(0x261))
            [_0xdde2b9(0x1ea)](),
          $("select[name=\x22" + _0x40ed4e[_0xdde2b9(0x296)] + "\x22]")
            [_0xdde2b9(0x20d)](_0xdde2b9(0x261))
            [_0xdde2b9(0x1ea)]();
      });
}
function resetInputErrorMessage(_0xdf69cb) {
  const _0x65d6d9 = _0x2ea093;
  $(_0x65d6d9(0x267) + _0xdf69cb + "\x22]")
    ["siblings"](_0x65d6d9(0x261))
    [_0x65d6d9(0x1f6)](),
    $(_0x65d6d9(0x267) + _0xdf69cb + "\x22]")
      [_0x65d6d9(0x278)]()
      [_0x65d6d9(0x238)](_0x65d6d9(0x261))
      [_0x65d6d9(0x1f6)](),
    $("textarea[name=\x22" + _0xdf69cb + "\x22]")
      [_0x65d6d9(0x20d)](_0x65d6d9(0x261))
      [_0x65d6d9(0x1f6)](),
    $(_0x65d6d9(0x290) + _0xdf69cb + "\x22]")
      [_0x65d6d9(0x20d)](_0x65d6d9(0x261))
      [_0x65d6d9(0x1f6)]();
}
function increaseCurstep() {
  const _0xb24eb3 = _0x2ea093;
  countCard
    ? ((curStep = curStep + 0x1),
      $("[data-text=\x22total-steps\x22]")[_0xb24eb3(0x22a)](
        steps[_0xb24eb3(0x2c1)],
      ))
    : $(steps[x])[_0xb24eb3(0x1fd)](_0xb24eb3(0x305))
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    $(_0xb24eb3(0x235))[_0xb24eb3(0x22a)](curStep);
}
function decreaseCurstep() {
  const _0x1aa271 = _0x2ea093;
  countCard
    ? ((curStep = curStep - 0x1),
      $("[data-text=\x22total-steps\x22]")[_0x1aa271(0x22a)](
        steps[_0x1aa271(0x2c1)],
      ))
    : $(steps[x])["data"](_0x1aa271(0x305))
      ? (curStep = curStep - 0x0)
      : (curStep = curStep - 0x1),
    $(_0x1aa271(0x235))[_0x1aa271(0x22a)](curStep);
}
$("[data-form=\x22submit-btn\x22]")["on"](
  _0x2ea093(0x2c8),
  function (_0x6cc61a) {
    const _0x424c94 = _0x2ea093;
    console["log"](_0x424c94(0x22c)),
      $(this)[_0x424c94(0x1fd)](_0x424c94(0x2e6)) &&
        (redirectTo = $(this)[_0x424c94(0x1fd)]("redirect")),
      !$(this)["data"](_0x424c94(0x251)) &&
        (newTab = $(this)[_0x424c94(0x1fd)](_0x424c94(0x251))),
      (successCard = $(this)[_0x424c94(0x1fd)](_0x424c94(0x2af))),
      _0x6cc61a["preventDefault"](),
      _0x6cc61a[_0x424c94(0x294)](),
      logicExtra &&
        ($(this)[_0x424c94(0x2b8)]("novalidate", !![]),
        $(steps)
          [_0x424c94(0x275)](_0x424c94(0x1f3))
          ["prop"](_0x424c94(0x2fe), ![])),
      localStorage[_0x424c94(0x2b3)]("filledInput"),
      fill
        ? ($(this)[_0x424c94(0x1fd)](_0x424c94(0x277))
            ? $(this)[_0x424c94(0x291)](
                $(this)[_0x424c94(0x1fd)](_0x424c94(0x277)),
              )
            : ($(this)[_0x424c94(0x291)](_0x424c94(0x29a)),
              $(this)[_0x424c94(0x22a)](_0x424c94(0x29a))),
          $("[data-form=\x22multistep\x22]")[_0x424c94(0x24a)](),
          $(_0x424c94(0x2dd))[_0x424c94(0x2c1)] > 0x0 &&
            grecaptcha["getResponse"]()[_0x424c94(0x2c1)] === 0x0 &&
            (form[_0x424c94(0x275)]("[data-form=\x22submit-btn\x22]")[
              _0x424c94(0x22a)
            ](oldSubmitText),
            form[_0x424c94(0x275)](_0x424c94(0x28b))["val"](oldSubmitText)),
          customError && $(_0x424c94(0x261))[_0x424c94(0x1f6)]())
        : customError && displayErrorMessage();
  },
);
function nextStep() {
  const _0x254e5a = _0x2ea093;
  customError
    ? ($(_0x254e5a(0x261))["hide"](),
      fill
        ? (x++,
          increaseCurstep(),
          (progress = x),
          x <= steps[_0x254e5a(0x2c1)] - 0x1 &&
            (updateStep(), memory && saveFilledInput()))
        : displayErrorMessage())
    : (x++,
      increaseCurstep(),
      x > progress && (progress = x),
      x <= steps[_0x254e5a(0x2c1)] - 0x1 &&
        (updateStep(), memory && saveFilledInput())),
    andLogic();
}
function backStep() {
  const _0x23b281 = _0x2ea093;
  customError && $("[data-text=\x22error-message\x22]")[_0x23b281(0x1f6)](),
    decreaseCurstep(),
    x > 0x0 &&
      ($(progressbar[x])[_0x23b281(0x268)](_0x23b281(0x284)),
      selections[_0x23b281(0x2c4)](
        (_0x5047fb) => _0x5047fb[_0x23b281(0x2e3)] === x,
      )[_0x23b281(0x2c1)] > 0x0
        ? (x = parseInt(
            getSafe(
              () =>
                selections[_0x23b281(0x2c4)](
                  (_0x3cf62a) => _0x3cf62a[_0x23b281(0x2e3)] === x,
                )[0x0]["backTo"],
            ),
          ))
        : x--,
      updateStep()),
    ($(steps[x])
      [_0x23b281(0x275)](_0x23b281(0x2fb))
      [_0x23b281(0x1fd)]("radio-skip") === !![] ||
      $(steps[x])
        [_0x23b281(0x275)](_0x23b281(0x2cf))
        [_0x23b281(0x275)](_0x23b281(0x2fb))
        ["data"]("radio-skip") === !![] ||
      $(steps[x])
        [_0x23b281(0x275)](_0x23b281(0x2b9))
        ["data"](_0x23b281(0x2f8)) === !![]) &&
      ((all_data = all_data[_0x23b281(0x2c4)](
        (_0x243d34) =>
          _0x243d34[_0x23b281(0x2b5)] !==
          $(steps[x])
            [_0x23b281(0x275)]("input[type=\x22radio\x22]:checked")
            [_0x23b281(0x2d1)](_0x23b281(0x2ad)),
      )),
      $(
        "[data-input-field=\x22" +
          $(steps[x])
            [_0x23b281(0x275)](_0x23b281(0x282))
            ["attr"](_0x23b281(0x2ad)) +
          "\x22]",
      )["hide"](),
      $(steps[x])
        ["find"](_0x23b281(0x22d))
        [_0x23b281(0x2b8)](_0x23b281(0x28c), ![]),
      $(steps[x])
        [_0x23b281(0x275)](_0x23b281(0x28d))
        [_0x23b281(0x268)]("w--redirected-checked"),
      validation());
}
weightedSelectionRange &&
  $(_0x2ea093(0x1ec))["each"](function () {
    const _0x50ba9e = _0x2ea093;
    $(this)[_0x50ba9e(0x27e)](
      "<div\x20data-range=\x22selection\x22\x20style=\x22display:none\x20!important\x22>" +
        $(this)[_0x50ba9e(0x1fd)]("selection") +
        _0x50ba9e(0x237),
    );
  });
function selectionQuiz() {
  const _0x5c2d26 = _0x2ea093;
  if ($(this)[_0x5c2d26(0x275)](_0x5c2d26(0x2e4))) {
    $(_0x5c2d26(0x1ec))[_0x5c2d26(0x1f6)](), $(_0x5c2d26(0x21f))["hide"]();
    if (weightedSelection) {
      (selTotal = 0x0),
        selArr[_0x5c2d26(0x20c)](function (_0x30630d) {
          const _0x5b2f83 = _0x5c2d26;
          selTotal = selTotal + _0x30630d[_0x5b2f83(0x23e)];
        }),
        $("[data-text=\x22total-weight\x22]")[_0x5c2d26(0x22a)](selTotal);
      if ($(_0x5c2d26(0x1e9) + selTotal + "\x22]")[_0x5c2d26(0x2c1)] > 0x0)
        $(_0x5c2d26(0x1e9) + selTotal + "\x22]")[_0x5c2d26(0x1ea)]();
      else
        $("[data-range]:contains(" + selTotal + ")")
          ? $(_0x5c2d26(0x25f) + selTotal + ")")
              [_0x5c2d26(0x2fa)](_0x5c2d26(0x1ec))
              ["eq"](0x0)
              ["show"]()
          : $(_0x5c2d26(0x2b1))["fadeIn"]();
    } else {
      let _0x4d886e = -0x1;
      $(_0x5c2d26(0x1ec))[_0x5c2d26(0x239)](function (_0x146b10) {
        const _0xb5139b = _0x5c2d26;
        $($(_0xb5139b(0x1ec))[_0x146b10])
          [_0xb5139b(0x1fd)](_0xb5139b(0x24e))
          [_0xb5139b(0x2dc)](selString["join"]()) && (_0x4d886e = _0x146b10);
      }),
        _0x4d886e > -0x1
          ? $($(_0x5c2d26(0x1ec))[_0x4d886e])["fadeIn"]()
          : $(_0x5c2d26(0x2b1))[_0x5c2d26(0x1ea)]();
    }
  }
}
function triggerInputAllData() {
  if (savedFilledInput && memory)
    savedFilledInput["forEach"]((_0x4951ab) => {
      const _0x245d7c = _0xa640;
      var _0xd3f548 = $(
          _0x245d7c(0x267) +
            _0x4951ab[_0x245d7c(0x2eb)] +
            "\x22][value=\x22" +
            _0x4951ab[_0x245d7c(0x2e0)] +
            "\x22]",
        ),
        _0x31b1db = $(_0x245d7c(0x267) + _0x4951ab[_0x245d7c(0x2eb)] + "\x22]");
      console[_0x245d7c(0x270)](
        _0xd3f548[_0x245d7c(0x278)](_0x245d7c(0x217))["data"](_0x245d7c(0x2f8)),
      );
      if (_0xd3f548[_0x245d7c(0x2d1)](_0x245d7c(0x2d7)) !== "file") {
        if (
          _0xd3f548[_0x245d7c(0x2d1)]("type") === _0x245d7c(0x2df) &&
          !_0xd3f548[_0x245d7c(0x278)](_0x245d7c(0x217))[_0x245d7c(0x1fd)](
            "radio-skip",
          )
        )
          _0xd3f548[_0x245d7c(0x2c8)](),
            _0xd3f548[_0x245d7c(0x20d)](_0x245d7c(0x21d))[_0x245d7c(0x224)](
              _0x245d7c(0x2a3),
            ),
            _0xd3f548[_0x245d7c(0x279)](_0x245d7c(0x296));
        else
          _0x4951ab[_0x245d7c(0x2e0)] === "on"
            ? (_0x31b1db[_0x245d7c(0x2c8)](),
              _0x31b1db[_0x245d7c(0x20d)](_0x245d7c(0x2d4))[_0x245d7c(0x224)](
                _0x245d7c(0x2a3),
              ),
              _0x31b1db[_0x245d7c(0x279)](_0x245d7c(0x296)))
            : (console[_0x245d7c(0x270)](
                _0x4951ab[_0x245d7c(0x2eb)],
                _0x4951ab["value"],
              ),
              _0x31b1db[_0x245d7c(0x291)](_0x4951ab[_0x245d7c(0x2e0)]),
              _0x31b1db[_0x245d7c(0x291)](_0x4951ab[_0x245d7c(0x2e0)]),
              $("option[value=\x22" + _0x4951ab[_0x245d7c(0x2e0)] + "\x22]")[
                _0x245d7c(0x2b8)
              ](_0x245d7c(0x23e), !![]),
              _0x31b1db[_0x245d7c(0x279)]("input"),
              _0x31b1db[_0x245d7c(0x279)](_0x245d7c(0x1e8)));
      }
    });
  else
    _params &&
      (getParams(),
      searchQ["forEach"]((_0x481b9d) => {
        const _0xe87366 = _0xa640;
        if (
          $(
            "input[name=\x22" +
              _0x481b9d["inputName"] +
              _0xe87366(0x259) +
              _0x481b9d[_0xe87366(0x2e0)] +
              "\x22]",
          )[_0xe87366(0x2d1)](_0xe87366(0x2d7)) !== _0xe87366(0x1e7)
        ) {
          if (
            $(
              _0xe87366(0x267) +
                _0x481b9d[_0xe87366(0x2ee)] +
                _0xe87366(0x259) +
                _0x481b9d[_0xe87366(0x291)] +
                "\x22]",
            )["attr"](_0xe87366(0x2d7)) === "radio"
          )
            $(
              _0xe87366(0x267) +
                _0x481b9d[_0xe87366(0x2ee)] +
                _0xe87366(0x259) +
                _0x481b9d[_0xe87366(0x291)] +
                "\x22]",
            )[_0xe87366(0x2c8)](),
              $(
                _0xe87366(0x267) +
                  _0x481b9d[_0xe87366(0x2ee)] +
                  _0xe87366(0x259) +
                  _0x481b9d["val"] +
                  "\x22]",
              )
                [_0xe87366(0x20d)](_0xe87366(0x21d))
                ["addClass"](_0xe87366(0x2a3)),
              $(
                _0xe87366(0x267) +
                  _0x481b9d[_0xe87366(0x2ee)] +
                  _0xe87366(0x259) +
                  _0x481b9d[_0xe87366(0x291)] +
                  "\x22]",
              )[_0xe87366(0x279)]("input");
          else
            _0x481b9d[_0xe87366(0x291)] === "on"
              ? ($(_0xe87366(0x267) + _0x481b9d[_0xe87366(0x2ee)] + "\x22]")[
                  _0xe87366(0x2c8)
                ](),
                $("input[name=\x22" + _0x481b9d[_0xe87366(0x2ee)] + "\x22]")
                  [_0xe87366(0x20d)](".w-checkbox-input")
                  [_0xe87366(0x224)](_0xe87366(0x2a3)),
                $("input[name=\x22" + _0x481b9d[_0xe87366(0x2ee)] + "\x22]")[
                  "trigger"
                ](_0xe87366(0x296)))
              : ($(_0xe87366(0x267) + _0x481b9d["key"] + "\x22]")["val"](
                  _0x481b9d[_0xe87366(0x291)],
                ),
                $(_0xe87366(0x2a5) + _0x481b9d["key"] + "\x22]")[
                  _0xe87366(0x291)
                ](_0x481b9d[_0xe87366(0x291)]),
                $("select[name=\x22" + _0x481b9d[_0xe87366(0x2ee)] + "\x22]")
                  [_0xe87366(0x275)](
                    _0xe87366(0x1f1) + _0x481b9d["val"] + "\x22]",
                  )
                  [_0xe87366(0x2b8)]("selected", !![]),
                $(_0xe87366(0x267) + _0x481b9d[_0xe87366(0x2ee)] + "\x22]")[
                  "trigger"
                ](_0xe87366(0x296)),
                $("input[name=\x22" + _0x481b9d[_0xe87366(0x2ee)] + "\x22]")[
                  _0xe87366(0x279)
                ]("change"));
        }
      }));
}
$(_0x2ea093(0x2da))["on"]("click", function () {
  (next = !![]), nextStep(), selectionQuiz();
}),
  $("[data-form=\x22back-btn\x22]")["on"]("click", function () {
    (next = ![]), (back = !![]), backStep();
  }),
  $(steps)
    [_0x2ea093(0x275)](":input")
    [_0x2ea093(0x2a0)]("[type=\x22radio\x22]")
    ["on"](_0x2ea093(0x296), function (_0x2aba53) {
      validation(), andLogic();
    }),
  $(steps)
    [_0x2ea093(0x275)](_0x2ea093(0x22d))
    ["on"](_0x2ea093(0x2c8), function () {
      (skip = !![]), validation();
    });
$(_0x2ea093(0x2b2))[_0x2ea093(0x1fd)](_0x2ea093(0x2fd))
  ? $("[data-form=\x22custom-progress-indicator\x22]")["removeClass"](
      "disabled",
    )
  : $("[data-form=\x22custom-progress-indicator\x22]")[_0x2ea093(0x224)](
      _0x2ea093(0x245),
    );
function clickableIndicator() {
  const _0x39ea33 = _0x2ea093;
  $(_0x39ea33(0x21b))[_0x39ea33(0x1fd)](_0x39ea33(0x1e6)) &&
    ($(_0x39ea33(0x2b6))[_0x39ea33(0x268)]("current"),
    $(_0x39ea33(0x21b))[_0x39ea33(0x1fd)](_0x39ea33(0x2fd))
      ? ((x = $(this)[_0x39ea33(0x27f)]()), updateStep())
      : $(this)[_0x39ea33(0x27f)]() <= progress &&
        ((x = $(this)[_0x39ea33(0x27f)]()), updateStep())),
    $(_0x39ea33(0x235))["text"](x + 0x1);
}
$(_0x2ea093(0x274))["on"](_0x2ea093(0x2c8), clickableIndicator);
$(_0x2ea093(0x257))[_0x2ea093(0x1fd)]("debug-mode") &&
  ($(_0x2ea093(0x29e))[_0x2ea093(0x239)](function () {
    const _0x538279 = _0x2ea093;
    $(this)["append"](
      _0x538279(0x20a),
      $(this)[_0x538279(0x1fd)](_0x538279(0x29f)),
    );
  }),
  $(_0x2ea093(0x2f3))[_0x2ea093(0x239)](function () {
    const _0x4c88e3 = _0x2ea093;
    $(this)[_0x4c88e3(0x27e)](
      _0x4c88e3(0x303),
      $(this)["data"](_0x4c88e3(0x2ed)),
    );
  }));
function resetFormly() {
  const _0x5bca06 = _0x2ea093;
  $("[data-form=\x22multistep\x22]")[_0x5bca06(0x279)](_0x5bca06(0x2ff)),
    $(_0x5bca06(0x257))
      [_0x5bca06(0x278)]()
      ["find"](".w-form-done")
      [_0x5bca06(0x1f6)](),
    (x = 0x0),
    updateStep(),
    $(_0x5bca06(0x257))["show"](),
    $("[data-form=\x22submit-btn\x22]")["text"](oldSubmitText),
    $(_0x5bca06(0x28b))[_0x5bca06(0x291)](oldSubmitText),
    $(_0x5bca06(0x235))[_0x5bca06(0x22a)](0x1),
    $(_0x5bca06(0x257))
      [_0x5bca06(0x275)]("input:checkbox")
      [_0x5bca06(0x20d)](".w-checkbox-input")
      [_0x5bca06(0x268)](_0x5bca06(0x2a3));
}
$(document)["ajaxComplete"](function (_0x5aa35a, _0x19b9d9, _0x48d56b) {
  const _0x513b40 = _0x2ea093;
  if (_0x48d56b[_0x513b40(0x2d8)][_0x513b40(0x2dc)](_0x513b40(0x212))) {
    const _0x45dad0 = _0x19b9d9[_0x513b40(0x236)] === 0xc8,
      _0x4a100b = _0x513b40(0x209);
    redirectTo &&
      _0x45dad0 &&
      (newTab
        ? window["open"](redirectTo, _0x513b40(0x255))
        : setTimeout(() => {
            const _0x3b88ef = _0x513b40;
            location[_0x3b88ef(0x1ed)] = redirectTo;
          }, redirectDelay)),
      _0x45dad0 &&
        successCard !== "" &&
        $(_0x513b40(0x2bb) + successCard + "\x22]")[_0x513b40(0x1ea)](),
      _0x45dad0 &&
        formReset &&
        setTimeout(() => {
          resetFormly();
        }, resetDelay),
      !_0x45dad0 &&
        ($(_0x513b40(0x28b))["val"]("Please\x20wait..."),
        $(_0x513b40(0x28b))[_0x513b40(0x22a)](_0x513b40(0x29a)));
  }
}),
  $(_0x2ea093(0x23b))["on"](_0x2ea093(0x2c8), function () {
    const _0x3abb5f = _0x2ea093;
    var _0x5e18b1 = $(this)
      [_0x3abb5f(0x2fa)]()
      [_0x3abb5f(0x275)](_0x3abb5f(0x276))
      [_0x3abb5f(0x1fd)](_0x3abb5f(0x1fb));
    setTimeout(function () {
      const _0x1f0f76 = _0x3abb5f;
      $(_0x1f0f76(0x267) + _0x5e18b1 + "\x22]")[_0x1f0f76(0x272)]();
    }, 0x64),
      (back = !![]),
      (x = $(this)[_0x3abb5f(0x1fd)](_0x3abb5f(0x286)) - 0x1),
      updateStep(),
      countCard
        ? ((curStep = x + 0x1),
          $(_0x3abb5f(0x289))[_0x3abb5f(0x22a)](steps["length"]))
        : $(steps[x])[_0x3abb5f(0x1fd)](_0x3abb5f(0x305))
          ? (curStep = x + 0x0)
          : (curStep = x + 0x1),
      $(_0x3abb5f(0x235))[_0x3abb5f(0x22a)](curStep),
      (back = ![]);
  }),
  $(_0x2ea093(0x28e))["on"](_0x2ea093(0x2c8), function () {
    const _0x3e345c = _0x2ea093;
    $("[data-form=\x22multistep\x22]")[_0x3e345c(0x279)](_0x3e345c(0x2ff));
    let _0x410adc = $(this);
    $(this)["text"]("Please\x20wait..."),
      setTimeout(function () {
        const _0x1d4a7f = _0x3e345c;
        $(_0x410adc)[_0x1d4a7f(0x22a)](oldResetText),
          $(_0x410adc)[_0x1d4a7f(0x278)](_0x1d4a7f(0x266))[_0x1d4a7f(0x1f6)](),
          (x = 0x0),
          updateStep(),
          $(_0x1d4a7f(0x257))[_0x1d4a7f(0x243)](),
          $("[data-form=\x22submit-btn\x22]")[_0x1d4a7f(0x22a)](oldSubmitText),
          $(_0x1d4a7f(0x28b))[_0x1d4a7f(0x291)](oldSubmitText),
          $(_0x410adc)[_0x1d4a7f(0x291)](oldSubmitText),
          $("[data-text=\x22current-step\x22]")[_0x1d4a7f(0x22a)](0x1),
          $(_0x1d4a7f(0x257))
            [_0x1d4a7f(0x275)]("input:checkbox")
            [_0x1d4a7f(0x20d)](".w-checkbox-input")
            ["removeClass"](_0x1d4a7f(0x2a3));
      }, resetDelay);
  }),
  $(_0x2ea093(0x221))["on"]("keypress", function (_0x4145f5) {
    const _0x2d1107 = _0x2ea093;
    if (_0x4145f5[_0x2d1107(0x202)] === 0xd) {
      _0x4145f5[_0x2d1107(0x2b7)](), _0x4145f5[_0x2d1107(0x294)]();
      if ($(steps[x])[_0x2d1107(0x275)]("textarea")["is"](_0x2d1107(0x2c5)))
        $(steps[x])
          ["find"](_0x2d1107(0x299))
          [_0x2d1107(0x291)](
            $(steps[x])["find"](_0x2d1107(0x299))[_0x2d1107(0x291)]() + "\x0a",
          );
      else
        $(_0x2d1107(0x2bd))[_0x2d1107(0x1fd)]("enter") &&
          fill &&
          totalSteps > curStep &&
          $(_0x2d1107(0x2da))[0x0][_0x2d1107(0x2c8)]();
    }
  }),
  $(_0x2ea093(0x221))[_0x2ea093(0x1f9)](function (_0x1e48c7) {
    const _0x6ede6c = _0x2ea093;
    (_0x1e48c7[_0x6ede6c(0x2a7)] || _0x1e48c7[_0x6ede6c(0x1ff)]) &&
      _0x1e48c7[_0x6ede6c(0x202)] == 0xd &&
      (x >= steps["length"] - 0x1 && fill
        ? $(steps[x])
            [_0x6ede6c(0x275)]("[data-form=\x22submit-btn\x22]:visible")
            [_0x6ede6c(0x2c8)]()
        : (_0x1e48c7[_0x6ede6c(0x2b7)](), _0x1e48c7["stopPropagation"]()));
  }),
  $(_0x2ea093(0x257))
    ["find"](":input")
    ["on"]("change", function () {
      const _0x279561 = _0x2ea093;
      (all_data = all_data[_0x279561(0x2c4)](
        (_0x4456a3) => _0x4456a3["field"] !== $(this)[_0x279561(0x2d1)]("name"),
      )),
        $(this)[_0x279561(0x2d1)](_0x279561(0x2d7)) === _0x279561(0x297)
          ? $(this)["is"](_0x279561(0x24d))
            ? all_data[_0x279561(0x20b)]({
                field: $(this)[_0x279561(0x2d1)](_0x279561(0x2ad)),
                value: $(this)[_0x279561(0x20d)]("span")["text"](),
              })
            : $(_0x279561(0x2a4) + $(this)["attr"]("name") + "\x22]")[
                _0x279561(0x1f6)
              ]()
          : (all_data[_0x279561(0x20b)]({
              field: $(this)[_0x279561(0x2d1)](_0x279561(0x2ad)),
              value: $(this)["val"](),
            }),
            $(this)[_0x279561(0x291)]() !== "" &&
              resetInputErrorMessage(
                $(this)[_0x279561(0x2d1)](_0x279561(0x2ad)),
              )),
        all_data["forEach"](function (_0x215e48) {
          const _0x359ebf = _0x279561;
          $(_0x359ebf(0x2a4) + _0x215e48[_0x359ebf(0x2b5)] + "\x22]")[
            _0x359ebf(0x243)
          ](),
            $(_0x359ebf(0x2a4) + _0x215e48["field"] + "\x22]")[
              _0x359ebf(0x22a)
            ](_0x215e48[_0x359ebf(0x2e0)]);
        });
    }),
  $(_0x2ea093(0x257))
    ["find"](_0x2ea093(0x27d))
    ["on"](_0x2ea093(0x1e8), function () {
      const _0x572a14 = _0x2ea093;
      $(this)[_0x572a14(0x291)]() !== "" &&
        resetInputErrorMessage($(this)["attr"](_0x572a14(0x2ad))),
        (all_data = all_data[_0x572a14(0x2c4)](
          (_0x574c76) => _0x574c76["field"] !== $(this)["attr"]("name"),
        )),
        all_data[_0x572a14(0x20b)]({
          field: $(this)[_0x572a14(0x2d1)](_0x572a14(0x2ad)),
          value: $(this)[_0x572a14(0x291)](),
        }),
        all_data["forEach"](function (_0x2c310b) {
          const _0x48065c = _0x572a14;
          $(_0x48065c(0x2a4) + _0x2c310b[_0x48065c(0x2b5)] + "\x22]")[
            _0x48065c(0x243)
          ](),
            $(_0x48065c(0x2a4) + _0x2c310b[_0x48065c(0x2b5)] + "\x22]")[
              _0x48065c(0x22a)
            ](_0x2c310b[_0x48065c(0x2e0)]);
        });
    }),
  $(_0x2ea093(0x257))
    [_0x2ea093(0x275)]("select")
    ["on"](_0x2ea093(0x1e8), function () {
      const _0x4b7f02 = _0x2ea093;
      $(this)[_0x4b7f02(0x291)]() !== "" &&
        resetInputErrorMessage($(this)[_0x4b7f02(0x2d1)](_0x4b7f02(0x2ad)));
      var _0x3e1846 = $(this)[_0x4b7f02(0x1fd)](_0x4b7f02(0x26c));
      (all_data = all_data["filter"](
        (_0x3a60fb) =>
          _0x3a60fb[_0x4b7f02(0x2b5)] !==
          $(this)[_0x4b7f02(0x2d1)](_0x4b7f02(0x2ad)),
      )),
        all_data[_0x4b7f02(0x20b)]({
          field: $(this)[_0x4b7f02(0x2d1)](_0x4b7f02(0x2ad)),
          value: _0x3e1846
            ? $(this)["find"](_0x4b7f02(0x242))[_0x4b7f02(0x22a)]()
            : $(this)[_0x4b7f02(0x291)](),
        }),
        all_data[_0x4b7f02(0x20c)](function (_0x56d6b5) {
          const _0x342be2 = _0x4b7f02;
          $("[data-input-field=\x22" + _0x56d6b5[_0x342be2(0x2b5)] + "\x22]")[
            _0x342be2(0x243)
          ](),
            $(_0x342be2(0x2a4) + _0x56d6b5[_0x342be2(0x2b5)] + "\x22]")[
              _0x342be2(0x22a)
            ](_0x56d6b5["value"]);
        });
    }),
  updateStep(),
  triggerInputAllData(),
  $(_0x2ea093(0x27b))[_0x2ea093(0x239)](function () {
    const _0x52c55e = _0x2ea093,
      _0x3f1a31 = $(this)[_0x52c55e(0x275)](_0x52c55e(0x225)),
      _0x1a64fd = [];
    console[_0x52c55e(0x270)](_0x1a64fd),
      _0x3f1a31[_0x52c55e(0x239)](function () {
        const _0x3ea527 = _0x52c55e;
        _0x1a64fd[_0x3ea527(0x20b)]($(this)["text"]()[_0x3ea527(0x22f)]());
      });
    const _0x12e023 = $(this)["siblings"](_0x52c55e(0x213));
    $["each"](_0x1a64fd, function (_0x3d5401, _0x2243f4) {
      const _0x275a0e = _0x52c55e,
        _0x4d4f2f = $(_0x275a0e(0x273))
          [_0x275a0e(0x291)](_0x2243f4)
          [_0x275a0e(0x22a)](_0x2243f4);
      _0x12e023[_0x275a0e(0x27e)](_0x4d4f2f);
    });
  });
function cloneRemove() {
  const _0x18be11 = _0x2ea093;
  $(_0x18be11(0x2ae))["each"](function () {
    const _0x4ca8f0 = _0x18be11;
    $(this)[_0x4ca8f0(0x275)]("[data-clone]")[_0x4ca8f0(0x2c1)] < 0x2
      ? $(this)["find"](_0x4ca8f0(0x24b))[_0x4ca8f0(0x1f6)]()
      : $(this)[_0x4ca8f0(0x275)](_0x4ca8f0(0x24b))[_0x4ca8f0(0x243)]();
  });
}
function cloneRemoveInput() {
  const _0x39d0d0 = _0x2ea093;
  $(_0x39d0d0(0x223))[_0x39d0d0(0x239)](function () {
    const _0x66eacb = _0x39d0d0;
    $(this)[_0x66eacb(0x275)](_0x66eacb(0x254))[_0x66eacb(0x2c1)] < 0x2
      ? $(this)
          [_0x66eacb(0x275)]("[data-form=\x22remove-input-clone\x22]")
          ["hide"]()
      : $(this)
          ["find"]("[data-form=\x22remove-input-clone\x22]")
          [_0x66eacb(0x243)]();
  });
}
$(_0x2ea093(0x24b))["on"]("click", function () {
  const _0x2e81ea = _0x2ea093,
    _0x171ef2 =
      $(this)["parents"](_0x2e81ea(0x233))[_0x2e81ea(0x2c1)] > 0x0
        ? $(this)[_0x2e81ea(0x278)](_0x2e81ea(0x233))["index"]()
        : $(this)[_0x2e81ea(0x278)]("[data-display]")["index"](),
    _0x318b85 =
      $(this)["parents"](_0x2e81ea(0x233))[_0x2e81ea(0x2c1)] > 0x0
        ? $(this)
            [_0x2e81ea(0x278)](_0x2e81ea(0x233))
            [_0x2e81ea(0x1fd)](_0x2e81ea(0x26a))
        : $(this)[_0x2e81ea(0x278)]("[data-display]")["data"](_0x2e81ea(0x20e));
  $("[data-clone=\x22" + _0x318b85 + "\x22]")
    ["eq"](_0x171ef2)
    [_0x2e81ea(0x280)](),
    $(_0x2e81ea(0x207) + _0x318b85 + "\x22]")
      ["eq"](_0x171ef2)
      [_0x2e81ea(0x280)](),
    cloneRemove(),
    validation();
}),
  $("[data-form=\x22remove-input-clone\x22]")["on"]("click", function () {
    const _0x2637b7 = _0x2ea093;
    let _0x44e0f8 = $(this)[_0x2637b7(0x20d)]()["attr"]("name");
    $(this)["parent"]("[data-clone-input]")[_0x2637b7(0x280)](),
      $(_0x2637b7(0x2a4) + _0x44e0f8 + "\x22]")
        [_0x2637b7(0x2fa)](_0x2637b7(0x23d))
        [_0x2637b7(0x280)](),
      cloneRemove(),
      validation();
  }),
  $("[data-add-new]")["on"](_0x2ea093(0x2c8), function () {
    const _0x31446e = _0x2ea093;
    let _0x4c1d0b = $(this)["data"](_0x31446e(0x215));
    var _0x3f1d2e = $("[data-clone=\x22" + _0x4c1d0b + "\x22]")
        ["eq"](0x0)
        [_0x31446e(0x26a)](!![]),
      _0x2d9150 = $(_0x31446e(0x207) + _0x4c1d0b + "\x22]")
        ["eq"](0x0)
        [_0x31446e(0x26a)](!![]);
    let _0x3c722e = "";
    $(this)[_0x31446e(0x275)](_0x31446e(0x24b))[_0x31446e(0x243)](),
      cloneRemove(),
      _0x3f1d2e[_0x31446e(0x275)](_0x31446e(0x254))
        [_0x31446e(0x275)](_0x31446e(0x296))
        [_0x31446e(0x291)](""),
      _0x3f1d2e[_0x31446e(0x275)]("[data-clone-input]")
        [_0x31446e(0x2a0)](":first")
        [_0x31446e(0x280)](),
      _0x2d9150["find"](_0x31446e(0x23d))
        [_0x31446e(0x2a0)](_0x31446e(0x23f))
        [_0x31446e(0x280)](),
      _0x3f1d2e[_0x31446e(0x275)](_0x31446e(0x296))[_0x31446e(0x239)](
        function () {
          const _0xd658c5 = _0x31446e;
          if (
            $(this)[_0xd658c5(0x21a)]("[data-clone-input]")[_0xd658c5(0x2c1)] >
            0x0
          ) {
            let _0x5bf66d = 0x0;
            const _0x4e9f0f = $(this)
              [_0xd658c5(0x21a)]("[data-clone-input]")
              [_0xd658c5(0x1fd)](_0xd658c5(0x25a));
            console[_0xd658c5(0x270)](
              $(this)
                [_0xd658c5(0x21a)](_0xd658c5(0x254))
                [_0xd658c5(0x1fd)](_0xd658c5(0x25a)),
              this[_0xd658c5(0x2ad)],
            ),
              $(_0xd658c5(0x211) + _0x4e9f0f + _0xd658c5(0x25d))[
                _0xd658c5(0x239)
              ](function () {
                const _0x49c04e = _0xd658c5,
                  _0x2a9878 = $(this)["attr"](_0x49c04e(0x2ad));
                if (_0x2a9878 && _0x2a9878[_0x49c04e(0x24f)]("relationship-")) {
                  const _0x3b7bb7 = parseInt(_0x2a9878["split"]("-")[0x1]);
                  !isNaN(_0x3b7bb7) &&
                    _0x3b7bb7 > _0x5bf66d &&
                    (_0x5bf66d = _0x3b7bb7);
                }
              }),
              _0x5bf66d++,
              (_0x3c722e = this[_0xd658c5(0x2ad)] + "-" + _0x5bf66d),
              console[_0xd658c5(0x270)](_0x4e9f0f, _0x3c722e);
          } else
            _0x3c722e =
              this[_0xd658c5(0x2ad)] +
              "-" +
              (parseInt(
                $("[data-clone=\x22" + _0x4c1d0b + "\x22]")
                  ["last"]()
                  ["index"](),
              ) +
                0x1);
          $(this)["val"](""),
            $(this)[_0xd658c5(0x2d1)]("name", _0x3c722e),
            $(this)[_0xd658c5(0x2d1)](_0xd658c5(0x252), _0x3c722e);
        },
      ),
      _0x2d9150[_0x31446e(0x275)](_0x31446e(0x276))[_0x31446e(0x239)](
        function () {
          const _0x3cbf53 = _0x31446e;
          if ($(this)[_0x3cbf53(0x1fd)]("input-field")) {
            let _0xbffb95 = 0x0;
            const _0x2267ce = $(this)
              [_0x3cbf53(0x1fd)]("input-field")
              [_0x3cbf53(0x269)]("-")[0x0];
            $(
              _0x3cbf53(0x207) +
                _0x4c1d0b +
                _0x3cbf53(0x232) +
                _0x2267ce +
                "\x22]",
            )[_0x3cbf53(0x239)](function () {
              const _0x6289a7 = _0x3cbf53,
                _0x37c905 = $(this)[_0x6289a7(0x2d1)]("data-input-field"),
                _0x5d43b1 = parseInt(_0x37c905[_0x6289a7(0x269)]("-")[0x1]);
              !isNaN(_0x5d43b1) &&
                _0x5d43b1 > _0xbffb95 &&
                (_0xbffb95 = _0x5d43b1);
            }),
              _0xbffb95++;
            const _0x3170e1 = _0x2267ce + "-" + _0xbffb95;
            console[_0x3cbf53(0x270)](_0x3170e1),
              $(this)[_0x3cbf53(0x2d1)]("data-input-field", _0x3170e1);
          }
        },
      ),
      $(_0x31446e(0x2a9) + _0x4c1d0b + "\x22]")["append"](_0x3f1d2e),
      $(_0x31446e(0x247) + _0x4c1d0b + "\x22]")["append"](_0x2d9150),
      $(_0x31446e(0x2d5) + _0x4c1d0b + "\x22]")[_0x31446e(0x239)](function () {
        const _0x3c9d48 = _0x31446e;
        $(this)["text"](
          $(this)
            ["parents"](_0x3c9d48(0x2f9) + _0x4c1d0b + "\x22]")
            ["index"]() + 0x1,
        );
      }),
      $("[data-display-index=\x22" + _0x4c1d0b + "\x22]")[_0x31446e(0x239)](
        function () {
          const _0x452a26 = _0x31446e;
          $(this)[_0x452a26(0x22a)](
            $(this)
              [_0x452a26(0x278)](_0x452a26(0x207) + _0x4c1d0b + "\x22]")
              ["index"]() + 0x1,
          );
        },
      ),
      validation();
  }),
  $("[data-add-new-input]")["on"](_0x2ea093(0x2c8), function () {
    const _0x267021 = _0x2ea093,
      _0x24b7b6 = $(this)
        [_0x267021(0x278)](_0x267021(0x233))
        [_0x267021(0x27f)]();
    let _0x5d3b1c = $(this)[_0x267021(0x1fd)](_0x267021(0x29b));
    var _0x400789 = $(_0x267021(0x211) + _0x5d3b1c + "\x22]")
        ["eq"](0x0)
        ["clone"](!![]),
      _0x2e17f5 = $(_0x267021(0x219) + _0x5d3b1c + "\x22]")
        ["eq"](0x0)
        ["clone"](!![]);
    $(this)
      [_0x267021(0x275)]("[data-form=\x22remove-input-clone\x22]")
      [_0x267021(0x243)](),
      cloneRemoveInput();
    let _0x1e0f33 = 0x0;
    $(_0x267021(0x211) + _0x5d3b1c + _0x267021(0x25d))["each"](function () {
      const _0x10b6c5 = _0x267021,
        _0x140bd4 = $(this)["attr"](_0x10b6c5(0x2ad));
      if (_0x140bd4 && _0x140bd4[_0x10b6c5(0x24f)]("relationship-")) {
        const _0x147314 = parseInt(_0x140bd4[_0x10b6c5(0x269)]("-")[0x1]);
        !isNaN(_0x147314) && _0x147314 > _0x1e0f33 && (_0x1e0f33 = _0x147314);
      }
    }),
      _0x1e0f33++,
      _0x400789["find"](_0x267021(0x296))[_0x267021(0x239)](function () {
        const _0x3df53d = _0x267021;
        let _0x229a41 = _0x3df53d(0x258) + _0x1e0f33;
        $(this)["val"](""),
          $(this)["attr"]("name", _0x229a41),
          $(this)[_0x3df53d(0x2d1)](_0x3df53d(0x252), _0x229a41);
      }),
      _0x2e17f5["find"](_0x267021(0x276))["each"](function () {
        const _0x3d7eaf = _0x267021;
        $(this)["attr"](_0x3d7eaf(0x27c), _0x3d7eaf(0x258) + _0x1e0f33);
      }),
      $(this)
        [_0x267021(0x20d)](
          "[data-clone-input-wrapper=\x22" + _0x5d3b1c + "\x22]",
        )
        [_0x267021(0x27e)](_0x400789),
      $(_0x267021(0x260))
        ["eq"](_0x24b7b6)
        [_0x267021(0x275)](_0x267021(0x2f1) + _0x5d3b1c + "\x22]")
        [_0x267021(0x27e)](_0x2e17f5),
      $(_0x267021(0x2cd) + _0x5d3b1c + "\x22]")[_0x267021(0x239)](function () {
        const _0x5cc9a2 = _0x267021;
        $(this)["text"](
          $(this)
            [_0x5cc9a2(0x278)](_0x5cc9a2(0x211) + _0x5d3b1c + "\x22]")
            [_0x5cc9a2(0x27f)]() + 0x1,
        );
      }),
      $(_0x267021(0x244) + _0x5d3b1c + "\x22]")[_0x267021(0x239)](function () {
        const _0x556f9d = _0x267021;
        $(this)[_0x556f9d(0x22a)](
          $(this)
            [_0x556f9d(0x278)](_0x556f9d(0x219) + _0x5d3b1c + "\x22]")
            ["index"]() + 0x1,
        );
      }),
      validation();
  }),
  $(_0x2ea093(0x2aa))["on"](_0x2ea093(0x2c8), function () {
    const _0x30ec0f = _0x2ea093,
      _0x2b0392 = $(this)[_0x30ec0f(0x1fd)](_0x30ec0f(0x1e5));
    $(_0x30ec0f(0x267) + _0x2b0392 + "\x22]")["val"](""), validation();
  });
function _0xa640(_0xdb6d81, _0x3f6896) {
  const _0x3de797 = _0x3de7();
  return (
    (_0xa640 = function (_0xa640d5, _0x1f377d) {
      _0xa640d5 = _0xa640d5 - 0x1e5;
      let _0x17151f = _0x3de797[_0xa640d5];
      return _0x17151f;
    }),
    _0xa640(_0xdb6d81, _0x3f6896)
  );
}
function andLogic() {
  const _0x5c706d = _0x2ea093;
  conditionalResult &&
    (steps["eq"](x)[_0x5c706d(0x275)](_0x5c706d(0x227))[_0x5c706d(0x1f6)](),
    console[_0x5c706d(0x270)](_0x5c706d(0x2f2)),
    steps["eq"](x)
      [_0x5c706d(0x275)](_0x5c706d(0x227))
      [_0x5c706d(0x239)](function () {
        const _0x4b0447 = _0x5c706d;
        function _0x1e7b81(_0x535cc9) {
          const _0x46497b = _0xa640,
            _0x189127 = _0x535cc9["split"]("&"),
            _0x4c643a = [];
          return (
            _0x189127[_0x46497b(0x20c)]((_0x341464) => {
              const _0x10ce5d = _0x46497b,
                [_0x1db44d, _0x39dce9] = _0x341464[_0x10ce5d(0x269)]("=");
              _0x4c643a[_0x10ce5d(0x20b)]({
                field: _0x1db44d,
                value: _0x39dce9,
              });
            }),
            _0x4c643a
          );
        }
        const _0x2552b6 = $(this)[_0x4b0447(0x2d1)](_0x4b0447(0x302));
        console["log"](_0x2552b6);
        const _0x90dd92 = _0x1e7b81(_0x2552b6);
        function _0x27f5e0(_0x546678, _0x17e817) {
          const _0x8d9112 = _0x4b0447;
          return _0x17e817[_0x8d9112(0x2d9)]((_0xd3d327, _0x5b2e8b) => {
            const _0x19f2fc = _0x8d9112;
            if (
              _0x546678[0x0] &&
              _0xd3d327[_0x19f2fc(0x2b5)] === _0x546678[0x0][_0x19f2fc(0x2b5)]
            )
              return _0x546678[_0x19f2fc(0x2c2)](
                (_0x2e1fad, _0x1ec84b) =>
                  _0x17e817[_0x5b2e8b + _0x1ec84b] &&
                  _0x17e817[_0x5b2e8b + _0x1ec84b][_0x19f2fc(0x2b5)] ===
                    _0x2e1fad[_0x19f2fc(0x2b5)] &&
                  _0x17e817[_0x5b2e8b + _0x1ec84b]["value"] ===
                    _0x2e1fad["value"],
              );
            return ![];
          });
        }
        const _0xc82771 = _0x27f5e0(_0x90dd92, all_data);
        _0xc82771 ? $(this)[_0x4b0447(0x243)]() : $(this)[_0x4b0447(0x1f6)]();
      }));
}
scrollTop(), cloneRemove(), cloneRemoveInput();
