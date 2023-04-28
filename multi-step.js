//28/4/23

const _0x3b2deb = _0x1175;
(function (_0x515ff0, _0x4ee0c3) {
  const _0x44b481 = _0x1175,
    _0x212c9 = _0x515ff0();
  while (!![]) {
    try {
      const _0x326999 =
        (parseInt(_0x44b481(0x17c)) / 0x1) *
          (parseInt(_0x44b481(0x125)) / 0x2) +
        -parseInt(_0x44b481(0x133)) / 0x3 +
        parseInt(_0x44b481(0xcd)) / 0x4 +
        parseInt(_0x44b481(0xc9)) / 0x5 +
        (parseInt(_0x44b481(0x15d)) / 0x6) * (parseInt(_0x44b481(0xd4)) / 0x7) +
        parseInt(_0x44b481(0x164)) / 0x8 +
        (parseInt(_0x44b481(0x172)) / 0x9) * (-parseInt(_0x44b481(0xd6)) / 0xa);
      if (_0x326999 === _0x4ee0c3) break;
      else _0x212c9["push"](_0x212c9["shift"]());
    } catch (_0x100963) {
      _0x212c9["push"](_0x212c9["shift"]());
    }
  }
})(_0x63b0, 0xd1e3a);
let x = 0x0,
  curStep = 0x0,
  steps = $(_0x3b2deb(0xf2)),
  progressbarClone = $(_0x3b2deb(0x18a))[_0x3b2deb(0x156)](),
  progressbar,
  countCard = !![],
  weightedSelection = $(_0x3b2deb(0xd3))[_0x3b2deb(0x128)](
    "weighted-selection"
  ),
  selectMultiple = $(_0x3b2deb(0x158))[_0x3b2deb(0x128)](_0x3b2deb(0xbd)),
  customError = $(_0x3b2deb(0xdb))[_0x3b2deb(0x128)](_0x3b2deb(0x187)),
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
  reinitIX = $(_0x3b2deb(0x143))[_0x3b2deb(0x128)](_0x3b2deb(0x107)),
  textareaLength = 0x0,
  textInputLength = 0x0,
  emailInputLength = 0x0,
  selectInputLength = 0x0,
  checkboxInputLength = 0x0,
  filledInput = [],
  savedFilledInput = JSON[_0x3b2deb(0x124)](
    localStorage[_0x3b2deb(0x135)](_0x3b2deb(0x129))
  ),
  memory = $("[data-memory]")[_0x3b2deb(0x128)]("memory"),
  quiz = $(_0x3b2deb(0x101))[_0x3b2deb(0x128)](_0x3b2deb(0x100)),
  progress = 0x0;
const urlFormly = new URL(window[_0x3b2deb(0xc0)][_0x3b2deb(0x12b)]);
let params = $(_0x3b2deb(0xdd))[_0x3b2deb(0x128)](_0x3b2deb(0x140)),
  skipTo = 0x0,
  next = ![],
  back = ![],
  selArr = [],
  selString = [],
  emptyInput = 0x0,
  searchQ = [],
  domainAllowed = !![],
  dom = [],
  logicExtra = $(_0x3b2deb(0xc5))["data"](_0x3b2deb(0x166)),
  oldSubmitText = $("[data-form=\x22submit-btn\x22]")[_0x3b2deb(0x180)](),
  oldResetText = $("[data-btn=\x22reset\x22]")["text"](),
  formReset = $(_0x3b2deb(0xc5))[_0x3b2deb(0x128)]("reset"),
  successCard = "",
  redirectTo = "",
  totalSteps = 0x0;
function _0x63b0() {
  const _0x51bc80 = [
    "stopPropagation",
    "delete",
    "keydown",
    "[data-input-field]",
    "select[required]:visible",
    ":input[type=\x22checkbox\x22]:checked",
    "push",
    "[data-selection=\x22other\x22]",
    "[data-answer]:visible",
    ":input[type=\x22tel\x22][required]",
    "<br>Data\x20Go\x20To\x20=\x20",
    "select-multiple",
    "input[type=\x22checkbox\x22]:visible",
    "prop",
    "location",
    "css",
    "form[data-form=\x22multistep\x22]\x20:input",
    "skip-to",
    "required",
    "[data-form=\x22multistep\x22]",
    "data-skip-to",
    "body",
    "open",
    "8561545Jtwobh",
    "input[type=\x22submit\x22]",
    "[data-cms-select=input]",
    ":input[type=\x22radio\x22]",
    "2347388mxffOO",
    "reset",
    "[data-cms-select=cms]",
    ":input",
    "input[type=\x22text\x22][required]:visible",
    "data-radio-delay",
    "[data-weighted-selection]",
    "2880290HRiSkp",
    "Enter",
    "1076510MNCfoT",
    "span",
    "keyCode",
    "[type=\x22radio\x22]",
    "_blank",
    "[data-custom-error-message]",
    "log",
    "[data-query-param]",
    "require",
    "current",
    "hide",
    ":input[type=\x22text\x22]",
    "input:radio[name=\x22",
    "[type=\x22submit\x22]",
    "input[name=\x22",
    "[data-selection]",
    "url",
    "name",
    "select",
    "find",
    "textarea[autofocus]",
    "textarea[required]:visible",
    "includes",
    "[data-success-card]",
    "0.4",
    "new-tab",
    "redirect",
    "selected",
    "[data-form=\x22step\x22]",
    "attr",
    "<option>",
    "show",
    "setItem",
    "selection",
    "[data-form=\x22custom-progress-indicator\x22]",
    "trigger",
    "[data-form=\x22step\x22]:not([data-card=\x22true\x22])",
    "w--redirected-checked",
    "metaKey",
    "[data-form=\x22progress\x22]",
    "disabled",
    "type",
    "quiz",
    "[data-quiz]",
    "index",
    "searchParams",
    "[data-btn=\x22reset\x22]",
    "each",
    "key",
    "reinit",
    "[data-form=\x22back-btn\x22]",
    "data-radio-skip",
    ":input[type=\x22checkbox\x22][required]",
    "textarea[name=\x22",
    "children",
    ".w-radio-input",
    "split",
    "data-go-to",
    ".w-form-done",
    "checkbox",
    "length",
    "parents",
    "\x22][value=\x22",
    "clickable",
    "radio-delay",
    "append",
    "[data-radio-skip]:visible",
    "[data-form=\x22next-btn\x22][type=\x22submit\x22]",
    ":radio",
    "field",
    "change",
    ":input[type=\x22email\x22][required]",
    "ix2",
    "[data-form=\x22next-btn\x22]",
    ":input[type=\x27radio\x27]:checked",
    "skipTo",
    "block-domain",
    "select[name=\x22",
    "parse",
    "10oQnsjX",
    "wait",
    "click",
    "data",
    "filledInput",
    "custom\x20error",
    "href",
    ":input[type=\x22tel\x22]",
    "shiftKey",
    "backTo",
    ":input[type=\x22text\x22][required]",
    ":input[type=\x22checkbox\x22]",
    "[data-text=\x22total-steps\x22]",
    "card",
    "24825CLHoZR",
    "findIndex",
    "getItem",
    "select[required]",
    "set",
    "none",
    "input[autofocus]",
    "step",
    "input:radio[required]",
    "go-to",
    ":checked",
    "option[value=\x22",
    "[data-success-card=\x22",
    "query-param",
    ":input[type=\x22number\x22][required]",
    "inputName",
    "[data-reinit]",
    "auto",
    "[data-clickable-all]",
    "fadeIn",
    "filter",
    "[data-form=\x22submit\x22]:visible",
    "[type=\x22checkbox\x22]",
    "input[type=\x22email\x22]:visible",
    "clickable-all",
    "forEach",
    "textarea",
    ":input[type=\x22file\x22]",
    "reset-delay",
    "not",
    "some",
    "remove",
    ":input[required]",
    "submit",
    "[data-reset-delay]",
    "clone",
    "[data-answer]",
    "[data-select-multiple]",
    "text",
    "[data-text=\x22error-message\x22]",
    ":input[type=\x22file\x22][required]",
    "[data-enter]",
    "18ZQyaDV",
    "[data-btn=\x22edit\x22]",
    "preventDefault",
    "[data-go-to]",
    "Webflow",
    "focus",
    "button",
    "2642480wWkEns",
    ":input[type=\x22radio\x22][required]",
    "logic-extra",
    "value",
    "Please\x20wait...",
    "radio",
    "debug-mode",
    "input:checkbox",
    "ctrlKey",
    "slow",
    "keypress",
    "[data-count-card]",
    "[data-form=\x22next-btn\x22][data-submit-show]",
    "siblings",
    "315WCLRjk",
    "redirect-form-hehexd",
    "radio-skip",
    "[data-radio-delay]",
    "[data-btn=\x22check\x22]",
    "trim",
    "readystatechange",
    ".w-checkbox-input",
    "input",
    "history",
    "154378lRaxaA",
    "addClass",
    "<br>Data\x20Answer\x20=\x20",
    "[data-form=\x22step\x22][data-card]",
    "val",
    "[data-form=\x22submit-btn\x22]:visible",
    "[data-input-field=\x22",
    "[data-text=\x22current-step\x22]",
    "removeClass",
    "[data-form=\x22submit-btn\x22]",
    "checked",
    "custom-error-message",
    "novalidate",
    "[data-skip-to]",
    "[data-form=\x22progress-indicator\x22]",
  ];
  _0x63b0 = function () {
    return _0x51bc80;
  };
  return _0x63b0();
}
var checkCount = 0x0;
let resetDelay = $(_0x3b2deb(0x155))[_0x3b2deb(0x128)](_0x3b2deb(0x14f))
    ? $("[data-reset-delay]")[_0x3b2deb(0x128)](_0x3b2deb(0x14f))
    : 0x7d0,
  newTab = !![],
  unfilledArr = [];
all_data = [];
$("[data-count-card]")[_0x3b2deb(0x112)] > 0x0 &&
  (countCard = $(_0x3b2deb(0x16f))[_0x3b2deb(0x128)]("count-card"));
$("[data-text=\x22error-message\x22]")["hide"](),
  $(progressbarClone)[_0x3b2deb(0x184)](_0x3b2deb(0xdf)),
  $("[data-form=\x22progress\x22]")[_0x3b2deb(0x10c)]()[_0x3b2deb(0x152)](),
  $("[data-form=\x22submit-btn\x22]")["hide"](),
  steps["each"](function () {
    const _0x57e0c4 = _0x3b2deb;
    $("[data-form=\x22progress\x22]")[_0x57e0c4(0x117)](
      progressbarClone[_0x57e0c4(0x156)](!![], !![])
    );
  }),
  $(_0x3b2deb(0xb5))[_0x3b2deb(0xe0)]();
countCard
  ? ((curStep = curStep + 0x1),
    (totalSteps = steps[_0x3b2deb(0x112)]),
    $(_0x3b2deb(0x131))[_0x3b2deb(0x159)](totalSteps))
  : ($(steps[x])["data"](_0x3b2deb(0x132))
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    (totalSteps = $(_0x3b2deb(0xfa))[_0x3b2deb(0x112)]),
    $(_0x3b2deb(0x131))[_0x3b2deb(0x159)](totalSteps),
    $(_0x3b2deb(0x17f))["each"](function () {
      const _0x5c879b = _0x3b2deb;
      $($(_0x5c879b(0x18a))[$(this)[_0x5c879b(0x102)]()])[_0x5c879b(0xe0)]();
    }));
(progressbar = $(_0x3b2deb(0xfd))[_0x3b2deb(0x10c)]()),
  $("[data-form=\x22progress-indicator\x22]")["on"](
    _0x3b2deb(0x127),
    clickableIndicator
  ),
  $(_0x3b2deb(0x183))[_0x3b2deb(0x159)](curStep),
  steps[_0x3b2deb(0xe0)](),
  $(_0x3b2deb(0xed))[_0x3b2deb(0xe0)](),
  $(_0x3b2deb(0x119))[_0x3b2deb(0x105)](function () {
    const _0x486fd1 = _0x3b2deb;
    $(this)[_0x486fd1(0xf3)](_0x486fd1(0xff), _0x486fd1(0x163));
  });
function getParams() {
  const _0x4159ad = _0x3b2deb;
  urlFormly[_0x4159ad(0x103)]["forEach"](function (_0xb6cb0, _0x56cab7) {
    searchQ["push"]({ val: _0xb6cb0, key: _0x56cab7 });
  });
}
function getSafe(_0x26c111, _0x1ec530) {
  try {
    return _0x26c111();
  } catch (_0xe4a0c) {
    return _0x1ec530;
  }
}
savedFilledInput &&
  memory &&
  savedFilledInput[_0x3b2deb(0x14c)]((_0x939422) => {
    const _0x48ef9d = _0x3b2deb;
    if (
      $(
        _0x48ef9d(0xe4) +
          _0x939422[_0x48ef9d(0x142)] +
          _0x48ef9d(0x114) +
          _0x939422["value"] +
          "\x22]"
      )[_0x48ef9d(0xf3)](_0x48ef9d(0xff)) === "radio"
    )
      $(
        _0x48ef9d(0xe4) +
          _0x939422["inputName"] +
          _0x48ef9d(0x114) +
          _0x939422[_0x48ef9d(0x167)] +
          "\x22]"
      )[_0x48ef9d(0x127)](),
        $(
          _0x48ef9d(0xe4) +
            _0x939422[_0x48ef9d(0x142)] +
            "\x22][value=\x22" +
            _0x939422[_0x48ef9d(0x167)] +
            "\x22]"
        )
          [_0x48ef9d(0x171)](_0x48ef9d(0x10d))
          [_0x48ef9d(0x17d)]("w--redirected-checked");
    else
      _0x939422[_0x48ef9d(0x167)] === "on"
        ? ($(_0x48ef9d(0xe4) + _0x939422[_0x48ef9d(0x142)] + "\x22]")[
            _0x48ef9d(0x127)
          ](),
          $(_0x48ef9d(0xe4) + _0x939422[_0x48ef9d(0x142)] + "\x22]")
            [_0x48ef9d(0x171)](".w-checkbox-input")
            [_0x48ef9d(0x17d)]("w--redirected-checked"))
        : ($(_0x48ef9d(0xe4) + _0x939422[_0x48ef9d(0x142)] + "\x22]")[
            _0x48ef9d(0x180)
          ](_0x939422["value"]),
          $("textarea[name=\x22" + _0x939422[_0x48ef9d(0x142)] + "\x22]")[
            "val"
          ](_0x939422[_0x48ef9d(0x167)]),
          $(_0x48ef9d(0x123) + _0x939422[_0x48ef9d(0x142)] + "\x22]")
            [_0x48ef9d(0xe9)](
              _0x48ef9d(0x13e) + _0x939422[_0x48ef9d(0x167)] + "\x22]"
            )
            [_0x48ef9d(0xbf)]("selected", !![]));
  });
params &&
  (getParams(),
  searchQ["forEach"]((_0x88c6c8) => {
    const _0x3a9969 = _0x3b2deb;
    if (
      $(
        _0x3a9969(0xe4) +
          _0x88c6c8["key"] +
          _0x3a9969(0x114) +
          _0x88c6c8["val"] +
          "\x22]"
      )["attr"]("type") === "radio"
    )
      $(
        _0x3a9969(0xe4) +
          _0x88c6c8["key"] +
          _0x3a9969(0x114) +
          _0x88c6c8[_0x3a9969(0x180)] +
          "\x22]"
      )["click"](),
        $(
          "input[name=\x22" +
            _0x88c6c8[_0x3a9969(0x106)] +
            _0x3a9969(0x114) +
            _0x88c6c8[_0x3a9969(0x180)] +
            "\x22]"
        )
          ["siblings"](".w-radio-input")
          ["addClass"](_0x3a9969(0xfb)),
        $(
          "input[name=\x22" +
            _0x88c6c8[_0x3a9969(0x106)] +
            _0x3a9969(0x114) +
            _0x88c6c8[_0x3a9969(0x180)] +
            "\x22]"
        )["trigger"](_0x3a9969(0x17a));
    else
      _0x88c6c8[_0x3a9969(0x180)] === "on"
        ? ($(_0x3a9969(0xe4) + _0x88c6c8[_0x3a9969(0x106)] + "\x22]")[
            _0x3a9969(0x127)
          ](),
          $(_0x3a9969(0xe4) + _0x88c6c8[_0x3a9969(0x106)] + "\x22]")
            [_0x3a9969(0x171)](_0x3a9969(0x179))
            ["addClass"](_0x3a9969(0xfb)),
          $(_0x3a9969(0xe4) + _0x88c6c8[_0x3a9969(0x106)] + "\x22]")["trigger"](
            "input"
          ))
        : ($(_0x3a9969(0xe4) + _0x88c6c8[_0x3a9969(0x106)] + "\x22]")[
            _0x3a9969(0x180)
          ](_0x88c6c8[_0x3a9969(0x180)]),
          $("textarea[name=\x22" + _0x88c6c8["key"] + "\x22]")[
            _0x3a9969(0x180)
          ](_0x88c6c8[_0x3a9969(0x180)]),
          $(_0x3a9969(0x123) + _0x88c6c8["key"] + "\x22]")
            ["find"](_0x3a9969(0x13e) + _0x88c6c8[_0x3a9969(0x180)] + "\x22]")
            [_0x3a9969(0xbf)](_0x3a9969(0xf1), !![]),
          $("input[name=\x22" + _0x88c6c8[_0x3a9969(0x106)] + "\x22]")[
            _0x3a9969(0xf9)
          ]("input"),
          $(_0x3a9969(0xe4) + _0x88c6c8[_0x3a9969(0x106)] + "\x22]")[
            _0x3a9969(0xf9)
          ](_0x3a9969(0x11c)));
  }));
quiz &&
  steps["each"](function () {
    const _0x17e749 = _0x3b2deb;
    $(this)["children"]()["attr"](_0x17e749(0x109), !![]),
      $(this)[_0x17e749(0x10c)]()[_0x17e749(0xf3)](_0x17e749(0xd2), 0xfa);
  });
function disableBtn(_0x14e5e7) {
  const _0x475e7b = _0x3b2deb;
  (fill = ![]),
    !customError &&
      ($(_0x475e7b(0x11f))[_0x475e7b(0xc1)]({
        opacity: _0x475e7b(0xee),
        "pointer-events": _0x475e7b(0x138),
      }),
      $("[data-form=\x22next-btn\x22]")["addClass"](_0x475e7b(0xfe)),
      $(_0x475e7b(0x185))[_0x475e7b(0xc1)]({
        opacity: _0x475e7b(0xee),
        "pointer-events": _0x475e7b(0x138),
      }),
      $(_0x475e7b(0x185))[_0x475e7b(0x17d)]("disabled"));
}
function enableBtn() {
  const _0x631678 = _0x3b2deb;
  (fill = !![]),
    $(_0x631678(0x11f))["css"]({
      "pointer-events": _0x631678(0x144),
      opacity: "1",
    }),
    $("[data-form=\x22next-btn\x22]")[_0x631678(0x184)](_0x631678(0xfe)),
    $(_0x631678(0x185))["css"]({
      "pointer-events": _0x631678(0x144),
      opacity: "1",
    }),
    $("[data-form=\x22submit-btn\x22]")[_0x631678(0x184)]("disabled");
}
function saveFilledInput() {
  const _0x267e04 = _0x3b2deb;
  $(_0x267e04(0xc2))
    [_0x267e04(0x150)](_0x267e04(0xe3))
    ["each"](function () {
      const _0x3ca617 = _0x267e04;
      $(this)["attr"](_0x3ca617(0xff)) === "checkbox" ||
      $(this)["attr"](_0x3ca617(0xff)) === _0x3ca617(0x169)
        ? $(this)[_0x3ca617(0xbf)](_0x3ca617(0x186)) &&
          (filledInput[_0x3ca617(0x151)](
            (_0x922f61) =>
              _0x922f61[_0x3ca617(0x142)] ===
              $(this)[_0x3ca617(0xf3)](_0x3ca617(0xe7))
          )
            ? ((filledInput = filledInput[_0x3ca617(0x147)](
                (_0x408483) =>
                  _0x408483[_0x3ca617(0x142)] !==
                  $(this)[_0x3ca617(0xf3)](_0x3ca617(0xe7))
              )),
              $(this)["val"]() !== "" &&
                filledInput[_0x3ca617(0xb8)]({
                  inputName: $(this)[_0x3ca617(0xf3)]("name"),
                  value: $(this)[_0x3ca617(0x180)](),
                }))
            : $(this)[_0x3ca617(0x180)]() !== "" &&
              filledInput["push"]({
                inputName: $(this)[_0x3ca617(0xf3)](_0x3ca617(0xe7)),
                value: $(this)[_0x3ca617(0x180)](),
              }))
        : filledInput["some"](
            (_0x5f5cbd) =>
              _0x5f5cbd[_0x3ca617(0x142)] === $(this)["attr"](_0x3ca617(0xe7))
          )
        ? ((filledInput = filledInput[_0x3ca617(0x147)](
            (_0x1f35e8) =>
              _0x1f35e8["inputName"] !== $(this)["attr"](_0x3ca617(0xe7))
          )),
          $(this)[_0x3ca617(0x180)]() !== "" &&
            filledInput["push"]({
              inputName: $(this)[_0x3ca617(0xf3)](_0x3ca617(0xe7)),
              value: $(this)[_0x3ca617(0x180)](),
            }))
        : $(this)["val"]() !== "" &&
          filledInput[_0x3ca617(0xb8)]({
            inputName: $(this)["attr"](_0x3ca617(0xe7)),
            value: $(this)[_0x3ca617(0x180)](),
          });
    }),
    filledInput &&
      filledInput[_0x267e04(0x14c)]((_0xa87c19) => {
        const _0x3a6669 = _0x267e04;
        urlFormly[_0x3a6669(0x103)][_0x3a6669(0xb3)](_0xa87c19["inputName"]),
          urlFormly[_0x3a6669(0x103)][_0x3a6669(0x137)](
            _0xa87c19[_0x3a6669(0x142)],
            _0xa87c19[_0x3a6669(0x167)]
          ),
          window[_0x3a6669(0x17b)]["replaceState"](null, null, urlFormly);
      }),
    localStorage["removeItem"]("filledInput"),
    localStorage[_0x267e04(0xf6)](
      _0x267e04(0x129),
      JSON["stringify"](filledInput)
    );
}
function scrollTop() {}
function updateStep() {
  const _0x338075 = _0x3b2deb;
  (skip = ![]),
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
    (empReqRadio = []),
    $("[data-form=\x22custom-progress-indicator\x22]")[_0x338075(0x184)](
      _0x338075(0xfe)
    );
  $("[data-clickable]")["data"](_0x338075(0x115)) &&
    (steps[_0x338075(0xe9)](_0x338075(0x153))[_0x338075(0x105)](function () {
      const _0xc8a0a3 = _0x338075;
      $(
        $(_0xc8a0a3(0xf8))[
          $(this)["parents"]("[data-form=\x22step\x22]")[_0xc8a0a3(0x102)]()
        ]
      ),
        $(this)["val"]() === "" && emptyInput++;
    }),
    emptyInput > 0x0
      ? $("input[type=\x22submit\x22]")["addClass"](_0x338075(0xfe))
      : $(_0x338075(0xca))[_0x338075(0x184)](_0x338075(0xfe)));
  $("[data-form=\x22custom-progress-indicator\x22]")[_0x338075(0x184)](
    _0x338075(0xdf)
  ),
    $(_0x338075(0xf8))[_0x338075(0x17d)](_0x338075(0xfe)),
    $($(_0x338075(0xf8))[x])["addClass"](_0x338075(0xdf)),
    (selection = selections["filter"](
      (_0x17802c) => _0x17802c[_0x338075(0x13a)] === x - 0x1
    ));
  next &&
    (x = getSafe(() => selection[0x0]["skipTo"])
      ? parseInt(getSafe(() => selection[0x0][_0x338075(0x121)]))
      : x);
  $(_0x338075(0x157))[_0x338075(0xe0)](), steps[_0x338075(0xe0)]();
  reinitIX === !![] && window[_0x338075(0x161)]["destroy"]();
  $(progressbar)["removeClass"](_0x338075(0xdf));
  for (i = 0x0; i <= x; i++) {
    countCard
      ? $(progressbar[i])[_0x338075(0x17d)](_0x338075(0xdf))
      : !$(steps[i])[_0x338075(0x128)](_0x338075(0x132)) &&
        $(progressbar[i])["addClass"](_0x338075(0xdf));
  }
  reinitIX === !![]
    ? (window[_0x338075(0x161)] &&
        window["Webflow"][_0x338075(0xde)](_0x338075(0x11e))["init"](),
      document["dispatchEvent"](new Event(_0x338075(0x178))),
      $(steps[x])[_0x338075(0xf5)]())
    : $(steps[x])[_0x338075(0x146)](_0x338075(0x16d));
  x === 0x0 &&
    !$(steps[x])[_0x338075(0x128)](_0x338075(0x132)) &&
    $(steps[x])[_0x338075(0xe9)](_0x338075(0x157))[_0x338075(0xf5)]();
  selection[_0x338075(0x112)] > 0x0
    ? $(steps[x])
        [_0x338075(0xe9)](
          "[data-answer=\x22" + selection[0x0]["selected"] + "\x22]"
        )
        [_0x338075(0xf5)]()
    : $(steps[x])
        ["find"]("[data-answer=\x22" + answer + "\x22]")
        ["show"]();
  if (x === 0x0)
    $(_0x338075(0x108))["hide"](),
      $("[data-form=\x22next-btn\x22]")[_0x338075(0xf5)]();
  else {
    if (
      x === steps[_0x338075(0x112)] - 0x1 ||
      $(steps[x])[_0x338075(0xe9)](_0x338075(0x148))["length"] > 0x0
    ) {
      $(_0x338075(0x11f))[_0x338075(0xe0)]();
      if (
        $(steps[x])
          ["find"]("[data-form=\x22next-btn\x22][data-submit-show]")
          [_0x338075(0x128)]("submit-show")
      )
        $(steps[x])["find"](_0x338075(0x170))["show"]();
      else
        $(_0x338075(0x11f))[_0x338075(0x128)]("submit-show") &&
          $(_0x338075(0x11f))[_0x338075(0xf5)]();
      $(_0x338075(0x185))[_0x338075(0xf5)](),
        $(_0x338075(0x108))[_0x338075(0xf5)]();
    } else
      $(_0x338075(0x11f))[_0x338075(0xf5)](),
        $(_0x338075(0x108))[_0x338075(0xf5)](),
        $("[data-form=\x22submit-btn\x22]")[_0x338075(0xe0)]();
  }
  $($(steps[x])[_0x338075(0xe9)](_0x338075(0x139))[0x0])[_0x338075(0x162)](),
    $($(steps[x])[_0x338075(0xe9)](_0x338075(0xea))[0x0])[_0x338075(0x162)](),
    validation();
  for (idx = 0x0; idx <= x; idx++) {
    $($(_0x338075(0xf8))[idx])[_0x338075(0x184)]("disabled");
  }
}
function validateEmail(_0x12cab9, _0x2fce69, _0x466cd8) {
  const _0x576ae5 = _0x3b2deb;
  let _0x3841e9 = _0x12cab9[_0x576ae5(0xec)]("@")
    ? _0x12cab9["split"]("@")[0x1][_0x576ae5(0x10e)](".")[0x0]
    : [];
  dom = [];
  _0x2fce69 !== undefined &&
    _0x2fce69[_0x576ae5(0x10e)](",")[_0x576ae5(0x14c)](function (_0x39227a) {
      const _0x29a8e3 = _0x576ae5;
      _0x39227a["includes"](_0x3841e9) && dom[_0x29a8e3(0xb8)](_0x3841e9);
    });
  dom[_0x576ae5(0x112)] > 0x0 ? (domainAllowed = ![]) : (domainAllowed = !![]);
  var _0x109cd9 = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,20})?$/;
  !_0x109cd9["test"](_0x12cab9)
    ? ((emailFilled = ![]), unfilledArr[_0x576ae5(0xb8)]({ input: _0x466cd8 }))
    : (emailFilled = !![]);
}
function validation() {
  const _0x24546e = _0x3b2deb;
  $(steps[x])[_0x24546e(0x128)](_0x24546e(0x132)) && enableBtn();
  (unfilledArr = []),
    (textareaLength = $(steps[x])["find"](_0x24546e(0xeb))["length"]),
    (textInputLength = $(steps[x])[_0x24546e(0xe9)](_0x24546e(0xd1))["length"]),
    (selectInputLength = $(steps[x])["find"](_0x24546e(0xb6))[
      _0x24546e(0x112)
    ]),
    (emailInputLength = $(steps[x])["find"](_0x24546e(0x14a))[
      _0x24546e(0x112)
    ]),
    (checkboxInputLength = $(steps[x])["find"](_0x24546e(0xbe))["length"]);
  textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0
    ? disableBtn()
    : enableBtn();
  checkCount = $(steps[x])[_0x24546e(0x128)](_0x24546e(0x111))
    ? $(steps[x])[_0x24546e(0x128)](_0x24546e(0x111))
    : 0x0;
  if (!logicExtra)
    $(steps[x])["find"](_0x24546e(0xd0))["is"]("[type=\x22checkbox\x22]") &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])["find"](":input[type=\x22checkbox\x22]")[_0x24546e(0x112)]
        ? $(steps[x])
            [_0x24546e(0xe9)](_0x24546e(0x130))
            [_0x24546e(0x105)](function () {
              const _0x1451b7 = _0x24546e;
              $(this)["is"](_0x1451b7(0x13d))
                ? $(steps[x])[_0x1451b7(0xe9)](_0x1451b7(0x10a))["length"] <
                    0x1 &&
                  ((checkboxFilled = !![]),
                  resetInputErrorMessage(
                    $(this)[_0x1451b7(0xf3)](_0x1451b7(0xe7))
                  ))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0x1451b7(0xb8)]({
                    input: $(this)["attr"]("name"),
                  }));
            })
        : $(steps[x])[_0x24546e(0xe9)](_0x24546e(0xb7))[_0x24546e(0x112)] >=
          checkCount
        ? $(steps[x])[_0x24546e(0xe9)](_0x24546e(0x10a))[_0x24546e(0x112)] > 0x0
          ? $(steps[x])
              [_0x24546e(0xe9)](_0x24546e(0x10a))
              [_0x24546e(0x105)](function () {
                const _0xe9fa14 = _0x24546e;
                console[_0xe9fa14(0xdc)](
                  !$(this)["is"](_0xe9fa14(0x13d)),
                  $(this)["attr"](_0xe9fa14(0xe7))
                ),
                  !$(this)["is"](":checked") &&
                    ((checkboxFilled = ![]),
                    unfilledArr["push"]({
                      input: $(this)[_0xe9fa14(0xf3)]("name"),
                    }));
              })
          : ((checkboxFilled = !![]),
            resetInputErrorMessage(
              $(steps[x])
                [_0x24546e(0xe9)](_0x24546e(0x130))
                [_0x24546e(0xf3)](_0x24546e(0xe7))
            ))
        : ((checkboxFilled = ![]),
          $(steps[x])
            [_0x24546e(0xe9)](_0x24546e(0x10a))
            [_0x24546e(0x105)](function () {
              const _0x3d4f35 = _0x24546e;
              $(this)[_0x3d4f35(0x150)](":checked") &&
                unfilledArr[_0x3d4f35(0xb8)]({
                  input: $(this)[_0x3d4f35(0xf3)]("name"),
                });
            }),
          unfilledArr["push"]({
            input: $(steps[x])
              [_0x24546e(0xe9)](_0x24546e(0x130))
              ["attr"](_0x24546e(0xe7)),
          }))),
      $(steps[x])
        [_0x24546e(0xe9)](_0x24546e(0x13b))
        [_0x24546e(0x105)](function (_0x2075a1) {
          const _0x154702 = _0x24546e;
          var _0xd49bb8 = $(this)[_0x154702(0xf3)](_0x154702(0xe7));
          $(_0x154702(0xe2) + _0xd49bb8 + "\x22]:checked")["length"] == 0x0
            ? (!empReqRadio[_0x154702(0xe9)](
                (_0x3af00b) => _0x3af00b[_0x154702(0x17a)] === _0x2075a1
              ) && empReqRadio[_0x154702(0xb8)]({ input: _0x2075a1 }),
              unfilledArr[_0x154702(0xb8)]({
                input: $(this)[_0x154702(0xf3)](_0x154702(0xe7)),
              }))
            : (empReqRadio = empReqRadio["filter"](
                (_0x48c57e) => _0x48c57e[_0x154702(0x17a)] !== _0x2075a1
              )),
            empReqRadio["length"] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x24546e(0x12f))
        [_0x24546e(0x105)](function (_0x39bc69) {
          const _0x4b70e3 = _0x24546e;
          $(this)[_0x4b70e3(0x180)]() !== ""
            ? (empReqInput = empReqInput[_0x4b70e3(0x147)](
                (_0x1524e0) => _0x1524e0[_0x4b70e3(0x17a)] !== _0x39bc69
              ))
            : (!empReqInput[_0x4b70e3(0xe9)](
                (_0xa847a2) => _0xa847a2[_0x4b70e3(0x17a)] === _0x39bc69
              ) && empReqInput[_0x4b70e3(0xb8)]({ input: _0x39bc69 }),
              unfilledArr["push"]({ input: $(this)["attr"]("name") })),
            empReqInput["length"] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x24546e(0xe9)](_0x24546e(0xbb))
        ["each"](function (_0x34f84c) {
          const _0xea4390 = _0x24546e;
          $(this)[_0xea4390(0x180)]() !== ""
            ? (empReqTel = empReqTel[_0xea4390(0x147)](
                (_0x399022) => _0x399022[_0xea4390(0x17a)] !== _0x34f84c
              ))
            : (!empReqTel[_0xea4390(0xe9)](
                (_0x5dd956) => _0x5dd956[_0xea4390(0x17a)] === _0x34f84c
              ) && empReqTel["push"]({ input: _0x34f84c }),
              unfilledArr[_0xea4390(0xb8)]({
                input: $(this)["attr"](_0xea4390(0xe7)),
              })),
            empReqTel["length"] === 0x0
              ? (telFilled = !![])
              : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x24546e(0xe9)](_0x24546e(0x15b))
        [_0x24546e(0x105)](function (_0x1d1dc9) {
          const _0x59f22a = _0x24546e;
          $(this)[_0x59f22a(0x180)]() !== ""
            ? (empReqFile = empReqFile["filter"](
                (_0x591404) => _0x591404[_0x59f22a(0x17a)] !== _0x1d1dc9
              ))
            : (!empReqFile[_0x59f22a(0xe9)](
                (_0x287cad) => _0x287cad[_0x59f22a(0x17a)] === _0x1d1dc9
              ) && empReqFile[_0x59f22a(0xb8)]({ input: _0x1d1dc9 }),
              unfilledArr["push"]({
                input: $(this)[_0x59f22a(0xf3)](_0x59f22a(0xe7)),
              })),
            empReqFile[_0x59f22a(0x112)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x24546e(0xe9)](":input[type=\x22number\x22][required]")
        [_0x24546e(0x105)](function (_0x1a6881) {
          const _0x4c1384 = _0x24546e;
          $(this)[_0x4c1384(0x180)]() !== ""
            ? (empReqNum = empReqNum[_0x4c1384(0x147)](
                (_0x2916de) => _0x2916de[_0x4c1384(0x17a)] !== _0x1a6881
              ))
            : (!empReqNum[_0x4c1384(0xe9)](
                (_0x790d40) => _0x790d40["input"] === _0x1a6881
              ) && empReqNum["push"]({ input: _0x1a6881 }),
              unfilledArr[_0x4c1384(0xb8)]({
                input: $(this)[_0x4c1384(0xf3)](_0x4c1384(0xe7)),
              })),
            empReqNum[_0x4c1384(0x112)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x24546e(0xe9)](_0x24546e(0x136))
        ["each"](function (_0x434428) {
          const _0x290d85 = _0x24546e;
          let _0x14fb80 = $(this)[_0x290d85(0x180)]();
          _0x14fb80 === "" && (_0x14fb80 = null),
            _0x14fb80 != null
              ? (empReqSelect = empReqSelect[_0x290d85(0x147)](
                  (_0x241b9e) => _0x241b9e[_0x290d85(0x17a)] !== _0x434428
                ))
              : (!empReqSelect["find"](
                  (_0x1b4660) => _0x1b4660[_0x290d85(0x17a)] === _0x434428
                ) && empReqSelect[_0x290d85(0xb8)]({ input: _0x434428 }),
                unfilledArr[_0x290d85(0xb8)]({
                  input: $(this)[_0x290d85(0xf3)]("name"),
                })),
            empReqSelect[_0x290d85(0x112)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x24546e(0xe9)]("textarea[required]")
        [_0x24546e(0x105)](function (_0x385ef3) {
          const _0x49ea74 = _0x24546e;
          $(this)[_0x49ea74(0x180)]() !== ""
            ? (empReqTextarea = empReqTextarea["filter"](
                (_0x4fba5b) => _0x4fba5b["input"] !== _0x385ef3
              ))
            : (!empReqTextarea[_0x49ea74(0xe9)](
                (_0x34a34c) => _0x34a34c[_0x49ea74(0x17a)] === _0x385ef3
              ) && empReqTextarea[_0x49ea74(0xb8)]({ input: _0x385ef3 }),
              unfilledArr[_0x49ea74(0xb8)]({
                input: $(this)[_0x49ea74(0xf3)](_0x49ea74(0xe7)),
              })),
            empReqTextarea[_0x49ea74(0x112)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x24546e(0x11d))
        [_0x24546e(0x105)](function () {
          const _0x1c1c50 = _0x24546e;
          $(this)[_0x1c1c50(0x180)]() !== ""
            ? validateEmail(
                $(this)[_0x1c1c50(0x180)](),
                $(this)[_0x1c1c50(0x128)](_0x1c1c50(0x122)),
                $(this)[_0x1c1c50(0xf3)](_0x1c1c50(0xe7))
              )
            : ((emailFilled = ![]),
              unfilledArr["push"]({
                input: $(this)[_0x1c1c50(0xf3)](_0x1c1c50(0xe7)),
              }));
        });
  else {
    if ($(steps[x])[_0x24546e(0x128)](_0x24546e(0x132)))
      (answer = $(steps[x])
        [_0x24546e(0xe9)](_0x24546e(0x160))
        [_0x24546e(0x128)]("go-to")),
        (selections = selections[_0x24546e(0x147)](
          (_0x21ae33) => _0x21ae33[_0x24546e(0x13a)] !== x
        )),
        selections[_0x24546e(0xb8)]({ step: x, selected: answer });
    else
      $(steps[x])
        [_0x24546e(0xe9)]("[data-answer]:visible")
        [_0x24546e(0x128)]("card") &&
        ((answer = $(steps[x])
          ["find"](_0x24546e(0xba))
          ["data"](_0x24546e(0x13c))),
        (selections = selections[_0x24546e(0x147)](
          (_0x329c35) => _0x329c35[_0x24546e(0x13a)] !== x
        )),
        selections[_0x24546e(0xb8)]({ step: x, selected: answer }));
    $(steps[x])
      [_0x24546e(0xe9)](_0x24546e(0xba))
      [_0x24546e(0xe9)](_0x24546e(0xd0))
      ["is"](_0x24546e(0x149)) &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])[_0x24546e(0xe9)](_0x24546e(0x130))[_0x24546e(0x112)]
        ? $(steps[x])
            [_0x24546e(0xe9)](_0x24546e(0x130))
            [_0x24546e(0x105)](function () {
              const _0x572ab9 = _0x24546e;
              $(this)["is"](_0x572ab9(0x13d))
                ? $(steps[x])["find"](_0x572ab9(0x153))[_0x572ab9(0x112)] <
                    0x1 &&
                  ((skipTo = undefined),
                  $(this)
                    [_0x572ab9(0x113)](_0x572ab9(0x189))
                    [_0x572ab9(0x128)](_0x572ab9(0xc3)) &&
                    (skipTo = $(this)
                      ["parents"](_0x572ab9(0x189))
                      [_0x572ab9(0x128)](_0x572ab9(0xc3))),
                  console[_0x572ab9(0xdc)](skipTo),
                  $(this)
                    [_0x572ab9(0x113)](_0x572ab9(0x160))
                    ["attr"](_0x572ab9(0x10f)) &&
                    ((answer = $(this)
                      [_0x572ab9(0x113)]("[data-go-to]")
                      [_0x572ab9(0xf3)](_0x572ab9(0x10f))),
                    (selections = selections[_0x572ab9(0x147)](
                      (_0x340a9f) => _0x340a9f["step"] !== x
                    )),
                    selections["push"]({ step: x, selected: answer }),
                    skipTo &&
                      (selections[_0x572ab9(0xb8)]({
                        step: skipTo - 0x2,
                        selected: answer,
                      }),
                      (objIndex = selections[_0x572ab9(0x134)](
                        (_0x47b86b) => _0x47b86b[_0x572ab9(0x13a)] === x
                      )),
                      (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                      (selections[objIndex][_0x572ab9(0x12e)] = x))),
                  (checkboxFilled = !![]))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0x572ab9(0xb8)]({
                    input: $(this)[_0x572ab9(0xf3)](_0x572ab9(0xe7)),
                  }));
            })
        : $(steps[x])
            ["find"](_0x24546e(0xba))
            [_0x24546e(0xe9)](":input[type=\x22checkbox\x22]:checked")[
            _0x24546e(0x112)
          ] >= checkCount
        ? ($(steps[x])
            ["find"](_0x24546e(0xba))
            [_0x24546e(0xe9)](_0x24546e(0xb7))
            [_0x24546e(0x113)](_0x24546e(0x160))
            [_0x24546e(0xf3)](_0x24546e(0x10f)) &&
            ((skipTo = undefined),
            $(steps[x])
              [_0x24546e(0xe9)](_0x24546e(0xba))
              [_0x24546e(0xe9)](":input[type=\x22checkbox\x22]:checked")
              [_0x24546e(0x113)](_0x24546e(0x189))
              [_0x24546e(0xf3)](_0x24546e(0xc6)) &&
              (skipTo = $(steps[x])
                ["find"](_0x24546e(0xba))
                [_0x24546e(0xe9)](_0x24546e(0xb7))
                ["parents"]("[data-skip-to]")
                ["attr"]("data-skip-to")),
            console["log"](skipTo),
            (answer = $(steps[x])
              [_0x24546e(0xe9)]("[data-answer]:visible")
              [_0x24546e(0xe9)](_0x24546e(0xb7))
              ["parents"](_0x24546e(0x160))
              ["attr"](_0x24546e(0x10f))),
            (selections = selections[_0x24546e(0x147)](
              (_0x3bf524) => _0x3bf524["step"] !== x
            )),
            selections[_0x24546e(0xb8)]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0x24546e(0xb8)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0x24546e(0x134)](
                (_0x22a02a) => _0x22a02a[_0x24546e(0x13a)] === x
              )),
              (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x24546e(0x12e)] = x))),
          (selections = selections[_0x24546e(0x147)](
            (_0x17708f) => _0x17708f[_0x24546e(0x13a)] !== x
          )),
          selections["push"]({ step: x, selected: answer }),
          (checkboxFilled = !![]))
        : ((checkboxFilled = ![]),
          $(steps[x])
            [_0x24546e(0xe9)](_0x24546e(0x10a))
            ["each"](function () {
              const _0xab06db = _0x24546e;
              $(this)[_0xab06db(0x150)](_0xab06db(0x13d)) &&
                unfilledArr[_0xab06db(0xb8)]({
                  input: $(this)["attr"]("name"),
                });
            }))),
      $(steps[x])
        [_0x24546e(0xe9)](_0x24546e(0xba))
        [_0x24546e(0xe9)](_0x24546e(0x153))
        ["is"](_0x24546e(0xd9))
        ? $(steps[x])
            [_0x24546e(0xe9)](_0x24546e(0xba))
            ["find"](_0x24546e(0x165))
            ["is"](_0x24546e(0x13d))
          ? (radioFilled = !![])
          : (radioFilled = ![])
        : (radioFilled = !![]),
      $(steps[x])
        [_0x24546e(0xe9)]("[data-answer]:visible")
        ["find"](_0x24546e(0x12f))
        [_0x24546e(0x105)](function (_0x4f21bf) {
          const _0x3a435d = _0x24546e;
          $(this)[_0x3a435d(0x180)]() !== ""
            ? (empReqInput = empReqInput[_0x3a435d(0x147)](
                (_0x364622) => _0x364622[_0x3a435d(0x17a)] !== _0x4f21bf
              ))
            : (!empReqInput["find"](
                (_0x1197c1) => _0x1197c1[_0x3a435d(0x17a)] === _0x4f21bf
              ) && empReqInput[_0x3a435d(0xb8)]({ input: _0x4f21bf }),
              unfilledArr[_0x3a435d(0xb8)]({
                input: $(this)["attr"](_0x3a435d(0xe7)),
              })),
            empReqInput[_0x3a435d(0x112)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x24546e(0xe9)](_0x24546e(0xba))
        [_0x24546e(0xe9)](_0x24546e(0xe1))
        [_0x24546e(0x105)](function (_0x13b661) {
          const _0x480e1f = _0x24546e;
          (skipTo = undefined),
            $(this)
              [_0x480e1f(0x113)](_0x480e1f(0x189))
              [_0x480e1f(0x128)](_0x480e1f(0xc3)) !== "" &&
              (skipTo = $(this)
                [_0x480e1f(0x113)](_0x480e1f(0x189))
                [_0x480e1f(0x128)](_0x480e1f(0xc3))),
            $(this)
              ["parents"](_0x480e1f(0x160))
              [_0x480e1f(0xf3)](_0x480e1f(0x10f)) &&
              ((answer = $(this)
                [_0x480e1f(0x113)]("[data-go-to]")
                [_0x480e1f(0xf3)]("data-go-to")),
              (selections = selections[_0x480e1f(0x147)](
                (_0x32e389) => _0x32e389[_0x480e1f(0x13a)] !== x
              )),
              selections[_0x480e1f(0xb8)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x480e1f(0xb8)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x480e1f(0x134)](
                  (_0x5c638e) => _0x5c638e["step"] === x
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x480e1f(0x12e)] = x)));
        }),
      $(steps[x])
        [_0x24546e(0xe9)]("[data-answer]:visible")
        [_0x24546e(0xe9)](_0x24546e(0x141))
        [_0x24546e(0x105)](function (_0x1b7e5f) {
          const _0x417a0a = _0x24546e;
          $(this)[_0x417a0a(0x180)]() !== ""
            ? (empReqNum = empReqNum[_0x417a0a(0x147)](
                (_0x4bfc9a) => _0x4bfc9a[_0x417a0a(0x17a)] !== _0x1b7e5f
              ))
            : (!empReqNum[_0x417a0a(0xe9)](
                (_0xef6b24) => _0xef6b24[_0x417a0a(0x17a)] === _0x1b7e5f
              ) && empReqNum[_0x417a0a(0xb8)]({ input: _0x1b7e5f }),
              unfilledArr[_0x417a0a(0xb8)]({
                input: $(this)["attr"](_0x417a0a(0xe7)),
              })),
            empReqNum["length"] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x24546e(0xe9)]("[data-answer]:visible")
        ["find"](":input[type=\x22number\x22]")
        [_0x24546e(0x105)](function (_0x329ea5) {
          const _0x486299 = _0x24546e;
          (skipTo = undefined),
            $(this)
              [_0x486299(0x113)]("[data-skip-to]")
              ["data"](_0x486299(0xc3)) !== "" &&
              (skipTo = $(this)
                [_0x486299(0x113)](_0x486299(0x189))
                ["data"](_0x486299(0xc3))),
            $(this)
              [_0x486299(0x113)](_0x486299(0x160))
              [_0x486299(0xf3)](_0x486299(0x10f)) &&
              ((answer = $(this)
                [_0x486299(0x113)]("[data-go-to]")
                ["attr"](_0x486299(0x10f))),
              (selections = selections[_0x486299(0x147)](
                (_0x6b861c) => _0x6b861c[_0x486299(0x13a)] !== x
              )),
              selections[_0x486299(0xb8)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x486299(0xb8)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x486299(0x134)](
                  (_0x23a123) => _0x23a123[_0x486299(0x13a)] === x
                )),
                (selections[objIndex][_0x486299(0x121)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x486299(0x12e)] = x)));
        }),
      $(steps[x])
        [_0x24546e(0xe9)](_0x24546e(0xba))
        [_0x24546e(0xe9)](":input[type=\x22tel\x22][required]")
        [_0x24546e(0x105)](function (_0x234852) {
          const _0x47dd28 = _0x24546e;
          $(this)[_0x47dd28(0x180)]() !== ""
            ? (empReqTel = empReqTel[_0x47dd28(0x147)](
                (_0x1754d0) => _0x1754d0[_0x47dd28(0x17a)] !== _0x234852
              ))
            : (!empReqTel[_0x47dd28(0xe9)](
                (_0x271aab) => _0x271aab[_0x47dd28(0x17a)] === _0x234852
              ) && empReqTel[_0x47dd28(0xb8)]({ input: _0x234852 }),
              unfilledArr["push"]({ input: $(this)["attr"](_0x47dd28(0xe7)) })),
            empReqTel[_0x47dd28(0x112)] === 0x0
              ? (telFilled = !![])
              : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x24546e(0xe9)](_0x24546e(0xba))
        ["find"](_0x24546e(0x12c))
        ["each"](function (_0x464de7) {
          const _0x83f7eb = _0x24546e;
          (skipTo = undefined),
            $(this)[_0x83f7eb(0x113)](_0x83f7eb(0x189))["data"]("skip-to") !==
              "" &&
              (skipTo = $(this)
                [_0x83f7eb(0x113)](_0x83f7eb(0x189))
                [_0x83f7eb(0x128)](_0x83f7eb(0xc3))),
            $(this)
              [_0x83f7eb(0x113)](_0x83f7eb(0x160))
              ["attr"](_0x83f7eb(0x10f)) &&
              ((answer = $(this)
                [_0x83f7eb(0x113)]("[data-go-to]")
                [_0x83f7eb(0xf3)](_0x83f7eb(0x10f))),
              (selections = selections["filter"](
                (_0x4664ae) => _0x4664ae["step"] !== x
              )),
              selections[_0x83f7eb(0xb8)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x83f7eb(0xb8)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x83f7eb(0x134)](
                  (_0x5a9282) => _0x5a9282["step"] === x
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x83f7eb(0x12e)] = x)));
        }),
      $(steps[x])
        ["find"](_0x24546e(0xba))
        [_0x24546e(0xe9)](":input[type=\x22file\x22][required]")
        ["each"](function (_0x430d2a) {
          const _0x42c03b = _0x24546e;
          $(this)["val"]() !== ""
            ? (empReqfile = empReqfile["filter"](
                (_0x279464) => _0x279464[_0x42c03b(0x17a)] !== _0x430d2a
              ))
            : (!empReqfile["find"](
                (_0xef4814) => _0xef4814[_0x42c03b(0x17a)] === _0x430d2a
              ) && empReqfile["push"]({ input: _0x430d2a }),
              unfilledArr["push"]({
                input: $(this)[_0x42c03b(0xf3)](_0x42c03b(0xe7)),
              })),
            empReqfile[_0x42c03b(0x112)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        ["find"]("[data-answer]:visible")
        [_0x24546e(0xe9)](_0x24546e(0x14e))
        ["each"](function (_0x292f66) {
          const _0x12491d = _0x24546e;
          (skipTo = undefined),
            $(this)
              [_0x12491d(0x113)](_0x12491d(0x189))
              [_0x12491d(0x128)](_0x12491d(0xc3)) !== "" &&
              (skipTo = $(this)
                [_0x12491d(0x113)](_0x12491d(0x189))
                [_0x12491d(0x128)](_0x12491d(0xc3))),
            $(this)
              [_0x12491d(0x113)](_0x12491d(0x160))
              [_0x12491d(0xf3)](_0x12491d(0x10f)) &&
              ((answer = $(this)
                [_0x12491d(0x113)](_0x12491d(0x160))
                ["attr"](_0x12491d(0x10f))),
              (selections = selections[_0x12491d(0x147)](
                (_0x3eb486) => _0x3eb486[_0x12491d(0x13a)] !== x
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x12491d(0xb8)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x470dd6) => _0x470dd6[_0x12491d(0x13a)] === x
                )),
                (selections[objIndex][_0x12491d(0x121)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x12491d(0x12e)] = x)));
        }),
      $(steps[x])
        [_0x24546e(0xe9)](_0x24546e(0xba))
        [_0x24546e(0xe9)](_0x24546e(0x136))
        [_0x24546e(0x105)](function (_0x54c447) {
          const _0x4b1196 = _0x24546e;
          $(this)["val"]() !== ""
            ? (empReqSelect = empReqSelect[_0x4b1196(0x147)](
                (_0x2bd59a) => _0x2bd59a[_0x4b1196(0x17a)] !== _0x54c447
              ))
            : (!empReqSelect[_0x4b1196(0xe9)](
                (_0x303fa0) => _0x303fa0[_0x4b1196(0x17a)] === _0x54c447
              ) && empReqSelect[_0x4b1196(0xb8)]({ input: _0x54c447 }),
              unfilledArr["push"]({
                input: $(this)[_0x4b1196(0xf3)](_0x4b1196(0xe7)),
              })),
            empReqSelect[_0x4b1196(0x112)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x24546e(0xe9)](_0x24546e(0xba))
        ["find"](_0x24546e(0xe8))
        [_0x24546e(0x105)](function (_0x1a3d99) {
          const _0x53d583 = _0x24546e;
          (skipTo = undefined),
            $(this)
              [_0x53d583(0x113)](_0x53d583(0x189))
              [_0x53d583(0x128)](_0x53d583(0xc3)) !== "" &&
              (skipTo = $(this)
                [_0x53d583(0x113)](_0x53d583(0x189))
                [_0x53d583(0x128)](_0x53d583(0xc3))),
            $(this)
              [_0x53d583(0x113)]("[data-go-to]")
              [_0x53d583(0xf3)](_0x53d583(0x10f)) &&
              ((answer = $(this)
                ["parents"](_0x53d583(0x160))
                ["attr"]("data-go-to")),
              (selections = selections["filter"](
                (_0xe2376b) => _0xe2376b["step"] !== x
              )),
              selections[_0x53d583(0xb8)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x53d583(0xb8)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x53d583(0x134)](
                  (_0x20bf91) => _0x20bf91[_0x53d583(0x13a)] === x
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x53d583(0x12e)] = x)));
        }),
      $(steps[x])
        [_0x24546e(0xe9)]("[data-answer]:visible")
        [_0x24546e(0xe9)]("textarea[required]")
        [_0x24546e(0x105)](function (_0x58a5e2) {
          const _0x4c9239 = _0x24546e;
          $(this)[_0x4c9239(0x180)]() !== ""
            ? (empReqTextarea = empReqTextarea["filter"](
                (_0x5e91fa) => _0x5e91fa["input"] !== _0x58a5e2
              ))
            : (!empReqTextarea[_0x4c9239(0xe9)](
                (_0x488af1) => _0x488af1[_0x4c9239(0x17a)] === _0x58a5e2
              ) && empReqTextarea[_0x4c9239(0xb8)]({ input: _0x58a5e2 }),
              unfilledArr[_0x4c9239(0xb8)]({
                input: $(this)["attr"](_0x4c9239(0xe7)),
              })),
            empReqTextarea[_0x4c9239(0x112)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x24546e(0xe9)]("[data-answer]:visible")
        ["find"](_0x24546e(0x14d))
        [_0x24546e(0x105)](function (_0x239d95) {
          const _0x5eba30 = _0x24546e;
          (skipTo = undefined),
            $(this)
              ["parents"](_0x5eba30(0x189))
              [_0x5eba30(0x128)](_0x5eba30(0xc3)) !== "" &&
              (skipTo = $(this)
                [_0x5eba30(0x113)]("[data-skip-to]")
                [_0x5eba30(0x128)](_0x5eba30(0xc3))),
            $(this)
              [_0x5eba30(0x113)]("[data-go-to]")
              [_0x5eba30(0xf3)]("data-go-to") &&
              ((answer = $(this)
                ["parents"](_0x5eba30(0x160))
                [_0x5eba30(0xf3)](_0x5eba30(0x10f))),
              (selections = selections["filter"](
                (_0x44a319) => _0x44a319[_0x5eba30(0x13a)] !== x
              )),
              selections[_0x5eba30(0xb8)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0x5eba30(0x134)](
                  (_0x22d6ba) => _0x22d6ba[_0x5eba30(0x13a)] === x
                )),
                (selections[objIndex][_0x5eba30(0x121)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x5eba30(0x12e)] = x)));
        }),
      $(steps[x])
        [_0x24546e(0xe9)](_0x24546e(0xba))
        [_0x24546e(0xe9)](_0x24546e(0x11d))
        [_0x24546e(0x105)](function (_0x169ffb) {
          const _0x188267 = _0x24546e;
          $(this)[_0x188267(0x180)]() !== ""
            ? validateEmail(
                $(this)["val"](),
                $(this)[_0x188267(0x128)](_0x188267(0x122)),
                $(this)[_0x188267(0xf3)](_0x188267(0xe7))
              )
            : ((emailFilled = ![]),
              unfilledArr["push"]({
                input: $(this)[_0x188267(0xf3)](_0x188267(0xe7)),
              }));
        }),
      $(steps[x])
        [_0x24546e(0xe9)](_0x24546e(0xba))
        [_0x24546e(0xe9)](":input[type=\x22email\x22]")
        [_0x24546e(0x105)](function (_0x4910e5) {
          const _0x35f18b = _0x24546e;
          (skipTo = undefined),
            $(this)
              [_0x35f18b(0x113)](_0x35f18b(0x189))
              [_0x35f18b(0x128)]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0x35f18b(0x113)](_0x35f18b(0x189))
                ["data"](_0x35f18b(0xc3))),
            $(this)
              [_0x35f18b(0x113)](_0x35f18b(0x160))
              [_0x35f18b(0xf3)](_0x35f18b(0x10f)) &&
              ((answer = $(this)
                [_0x35f18b(0x113)](_0x35f18b(0x160))
                [_0x35f18b(0xf3)](_0x35f18b(0x10f))),
              (selections = selections[_0x35f18b(0x147)](
                (_0x2d368c) => _0x2d368c["step"] !== x
              )),
              selections[_0x35f18b(0xb8)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x35f18b(0xb8)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x35f18b(0x134)](
                  (_0xa6dcc9) => _0xa6dcc9[_0x35f18b(0x13a)] === x
                )),
                (selections[objIndex][_0x35f18b(0x121)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x35f18b(0x12e)] = x)));
        });
  }
  $(steps[x])[_0x24546e(0xe9)](_0x24546e(0xcc))["is"](_0x24546e(0x13d)) &&
    ((selArr = []),
    $(steps)
      ["find"]("[data-selected]:checked")
      ["each"](function (_0x3d1a7d, _0x37aa10) {
        const _0x5d68b3 = _0x24546e;
        selArr[_0x5d68b3(0xb8)]({ selected: $(this)["data"]("selected") });
      }),
    (selString = []),
    selArr[_0x24546e(0x14c)]((_0x48b084) =>
      selString[_0x24546e(0xb8)](_0x48b084[_0x24546e(0xf1)])
    ),
    (selections = selections["filter"](
      (_0x5d20ba) => _0x5d20ba[_0x24546e(0x13a)] !== x
    )),
    $(steps[x])
      [_0x24546e(0xe9)](_0x24546e(0xba))
      [_0x24546e(0xe9)](_0x24546e(0x120))
      [_0x24546e(0x105)](function () {
        const _0x444859 = _0x24546e;
        skipTo = undefined;
        if ($(this)["parents"](_0x444859(0x189))[_0x444859(0x128)]("skip-to"))
          skipTo = $(this)
            ["parents"](_0x444859(0x189))
            [_0x444859(0x128)](_0x444859(0xc3));
        else
          $(this)["data"]("skip-to") &&
            (skipTo = $(this)[_0x444859(0x128)]("skip-to"));
        if ($(this)[_0x444859(0x128)](_0x444859(0x13c)))
          (answer = $(this)[_0x444859(0xf3)](_0x444859(0x10f))),
            selections[_0x444859(0xb8)]({ step: x, selected: answer }),
            console[_0x444859(0xdc)](skipTo),
            skipTo &&
              (selections[_0x444859(0xb8)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0x444859(0x134)](
                (_0x48c8d8) => _0x48c8d8[_0x444859(0x13a)] === x
              )),
              (selections[objIndex][_0x444859(0x121)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x444859(0x12e)] = x));
        else
          $(this)
            [_0x444859(0x113)](_0x444859(0x160))
            ["data"](_0x444859(0x13c)) &&
            ((answer = $(this)
              [_0x444859(0x113)](_0x444859(0x160))
              ["data"]("go-to")),
            selections[_0x444859(0xb8)]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0x444859(0xb8)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0x444859(0x134)](
                (_0x11cbb4) => _0x11cbb4[_0x444859(0x13a)] === x
              )),
              (selections[objIndex][_0x444859(0x121)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x444859(0x12e)] = x)));
      }),
    logicExtra
      ? ($(steps[x])
          [_0x24546e(0xe9)](_0x24546e(0xba))
          ["find"](_0x24546e(0x118))
          [_0x24546e(0x128)]("radio-skip") === !![] ||
          $(steps[x])
            [_0x24546e(0xe9)]("[data-answer][data-radio-skip]:visible")
            [_0x24546e(0x128)](_0x24546e(0x174)) === !![]) &&
        skip &&
        selections["filter"]((_0x119c50) => _0x119c50[_0x24546e(0x13a)] === x)[
          "length"
        ] > 0x0 &&
        textareaLength === 0x0 &&
        textInputLength === 0x0 &&
        emailInputLength === 0x0 &&
        checkboxInputLength === 0x0 &&
        setTimeout(function () {
          (next = !![]), nextStep(), selectionQuiz();
        }, $(steps[x])
          [_0x24546e(0xe9)](_0x24546e(0x175))
          [_0x24546e(0x128)](_0x24546e(0x116)))
      : $(steps[x])
          ["find"](_0x24546e(0x118))
          [_0x24546e(0x128)](_0x24546e(0x174)) === !![] &&
        skip &&
        textareaLength === 0x0 &&
        textInputLength === 0x0 &&
        emailInputLength === 0x0 &&
        checkboxInputLength === 0x0 &&
        setTimeout(function () {
          (next = !![]), nextStep(), selectionQuiz();
        }, $(steps[x])
          [_0x24546e(0xe9)](_0x24546e(0x175))
          [_0x24546e(0x128)](_0x24546e(0x116)))),
    inputFilled &&
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
  const _0x595a93 = _0x3b2deb;
  $(_0x595a93(0x15a))["hide"](),
    unfilledArr[_0x595a93(0x112)] > 0x0 &&
      unfilledArr[_0x595a93(0x14c)](function (_0x478c68) {
        const _0x2a3c5c = _0x595a93;
        $(_0x2a3c5c(0xe4) + _0x478c68["input"] + "\x22]")
          [_0x2a3c5c(0x171)]("[data-text=\x22error-message\x22]")
          [_0x2a3c5c(0x146)](),
          $(_0x2a3c5c(0xe4) + _0x478c68[_0x2a3c5c(0x17a)] + "\x22]")
            [_0x2a3c5c(0x113)]()
            [_0x2a3c5c(0x10c)](_0x2a3c5c(0x15a))
            ["fadeIn"](),
          $(_0x2a3c5c(0x10b) + _0x478c68[_0x2a3c5c(0x17a)] + "\x22]")
            ["siblings"]("[data-text=\x22error-message\x22]")
            ["fadeIn"](),
          $(_0x2a3c5c(0x123) + _0x478c68[_0x2a3c5c(0x17a)] + "\x22]")
            [_0x2a3c5c(0x171)](_0x2a3c5c(0x15a))
            [_0x2a3c5c(0x146)]();
      });
}
function resetInputErrorMessage(_0x1c8521) {
  const _0x46be5e = _0x3b2deb;
  console[_0x46be5e(0xdc)](_0x1c8521),
    $(_0x46be5e(0xe4) + _0x1c8521 + "\x22]")
      ["siblings"]("[data-text=\x22error-message\x22]")
      ["hide"](),
    $(_0x46be5e(0xe4) + _0x1c8521 + "\x22]")
      [_0x46be5e(0x113)]()
      [_0x46be5e(0x10c)](_0x46be5e(0x15a))
      ["hide"](),
    $(_0x46be5e(0x10b) + _0x1c8521 + "\x22]")
      [_0x46be5e(0x171)]("[data-text=\x22error-message\x22]")
      [_0x46be5e(0xe0)](),
    $(_0x46be5e(0x123) + _0x1c8521 + "\x22]")
      [_0x46be5e(0x171)]("[data-text=\x22error-message\x22]")
      ["hide"]();
}
function nextStep() {
  const _0x13f00e = _0x3b2deb;
  customError
    ? ($(_0x13f00e(0x15a))[_0x13f00e(0xe0)](),
      fill
        ? (x++,
          countCard
            ? ((curStep = curStep + 0x1),
              $(_0x13f00e(0x131))[_0x13f00e(0x159)](steps["length"]))
            : $(steps[x])[_0x13f00e(0x128)](_0x13f00e(0x132))
            ? (curStep = curStep + 0x0)
            : (curStep = curStep + 0x1),
          $(_0x13f00e(0x183))["text"](curStep),
          (progress = x),
          x <= steps[_0x13f00e(0x112)] - 0x1 &&
            (updateStep(), memory && saveFilledInput()))
        : (console["log"](_0x13f00e(0x12a)), displayErrorMessage()))
    : (x++,
      countCard
        ? ((curStep = curStep + 0x1),
          $("[data-text=\x22total-steps\x22]")[_0x13f00e(0x159)](
            steps[_0x13f00e(0x112)]
          ))
        : $(steps[x])[_0x13f00e(0x128)]("card")
        ? (curStep = curStep + 0x0)
        : (curStep = curStep + 0x1),
      $(_0x13f00e(0x183))[_0x13f00e(0x159)](curStep),
      x > progress && (progress = x),
      x <= steps["length"] - 0x1 &&
        (updateStep(), memory && saveFilledInput()));
}
function backStep() {
  const _0x22d78c = _0x3b2deb;
  customError && $(_0x22d78c(0x15a))[_0x22d78c(0xe0)](),
    countCard
      ? ((curStep = curStep - 0x1),
        $("[data-text=\x22total-steps\x22]")["text"](steps[_0x22d78c(0x112)]))
      : $(steps[x])[_0x22d78c(0x128)](_0x22d78c(0x132))
      ? (curStep = curStep - 0x0)
      : (curStep = curStep - 0x1),
    $(_0x22d78c(0x183))[_0x22d78c(0x159)](curStep),
    x > 0x0 &&
      ($(progressbar[x])[_0x22d78c(0x184)](_0x22d78c(0xdf)),
      selections[_0x22d78c(0x147)](
        (_0x4b1bce) => _0x4b1bce[_0x22d78c(0x121)] === x
      )[_0x22d78c(0x112)] > 0x0
        ? (x = parseInt(
            getSafe(
              () =>
                selections[_0x22d78c(0x147)](
                  (_0x4265fb) => _0x4265fb[_0x22d78c(0x121)] === x
                )[0x0][_0x22d78c(0x12e)]
            )
          ))
        : x--,
      updateStep());
}
function selectionQuiz() {
  const _0x20d87a = _0x3b2deb;
  if ($(this)[_0x20d87a(0xe9)](_0x20d87a(0x176))) {
    $(_0x20d87a(0xe5))[_0x20d87a(0xe0)]();
    if (weightedSelection) {
      let _0x46fc33 = 0x0;
      selArr[_0x20d87a(0x14c)](function (_0x438840) {
        const _0x5cbbcc = _0x20d87a;
        _0x46fc33 = _0x46fc33 + _0x438840[_0x5cbbcc(0xf1)];
      }),
        $("[data-selection=\x22" + _0x46fc33 + "\x22]")[_0x20d87a(0x112)] > 0x0
          ? $("[data-selection=\x22" + _0x46fc33 + "\x22]")[_0x20d87a(0x146)]()
          : $(_0x20d87a(0xb9))[_0x20d87a(0x146)]();
    } else {
      let _0x255240 = -0x1;
      $(_0x20d87a(0xe5))[_0x20d87a(0x105)](function (_0x1c61cb) {
        const _0x49c7ec = _0x20d87a;
        $($(_0x49c7ec(0xe5))[_0x1c61cb])
          [_0x49c7ec(0x128)](_0x49c7ec(0xf7))
          [_0x49c7ec(0xec)](selString["join"]()) && (_0x255240 = _0x1c61cb);
      }),
        _0x255240 > -0x1
          ? $($(_0x20d87a(0xe5))[_0x255240])[_0x20d87a(0x146)]()
          : $(_0x20d87a(0xb9))[_0x20d87a(0x146)]();
    }
  }
}
function triggerInputAllData() {
  const _0x41ac0b = _0x3b2deb;
  savedFilledInput &&
    memory &&
    savedFilledInput[_0x41ac0b(0x14c)]((_0x4cb2b4) => {
      const _0x510524 = _0x41ac0b;
      if (
        $(
          _0x510524(0xe4) +
            _0x4cb2b4[_0x510524(0x142)] +
            "\x22][value=\x22" +
            _0x4cb2b4[_0x510524(0x167)] +
            "\x22]"
        )[_0x510524(0xf3)](_0x510524(0xff)) === _0x510524(0x169)
      )
        $(
          "input[name=\x22" +
            _0x4cb2b4["inputName"] +
            _0x510524(0x114) +
            _0x4cb2b4["value"] +
            "\x22]"
        )[_0x510524(0xf9)](_0x510524(0x17a));
      else
        _0x4cb2b4["value"] === "on"
          ? $(_0x510524(0xe4) + _0x4cb2b4[_0x510524(0x142)] + "\x22]")[
              _0x510524(0xf9)
            ](_0x510524(0x17a))
          : ($(_0x510524(0xe4) + _0x4cb2b4[_0x510524(0x142)] + "\x22]")[
              _0x510524(0xf9)
            ](_0x510524(0x17a)),
            $("input[name=\x22" + _0x4cb2b4["inputName"] + "\x22]")[
              _0x510524(0xf9)
            ](_0x510524(0x11c)));
    });
}
$(_0x3b2deb(0x11f))["on"](_0x3b2deb(0x127), function () {
  scrollTop(), (next = !![]), nextStep(), selectionQuiz();
}),
  $("[data-form=\x22back-btn\x22]")["on"](_0x3b2deb(0x127), function () {
    scrollTop(), (next = ![]), (back = !![]), backStep();
  }),
  $(steps)
    ["find"](_0x3b2deb(0xd0))
    ["on"](_0x3b2deb(0x17a), function (_0x52179a) {
      validation();
    }),
  $(steps)
    ["find"](_0x3b2deb(0x11a))
    ["on"](_0x3b2deb(0x127), () => {
      skip = !![];
    }),
  $(steps)
    [_0x3b2deb(0xe9)](_0x3b2deb(0x11a))
    ["on"](_0x3b2deb(0x127), validation());
$(_0x3b2deb(0x145))[_0x3b2deb(0x128)](_0x3b2deb(0x14b))
  ? $(_0x3b2deb(0xf8))[_0x3b2deb(0x184)](_0x3b2deb(0xfe))
  : $("[data-form=\x22custom-progress-indicator\x22]")[_0x3b2deb(0x17d)](
      _0x3b2deb(0xfe)
    );
function _0x1175(_0x1ccf49, _0x515635) {
  const _0x63b0c = _0x63b0();
  return (
    (_0x1175 = function (_0x1175ad, _0x3b22ea) {
      _0x1175ad = _0x1175ad - 0xb3;
      let _0x5ca411 = _0x63b0c[_0x1175ad];
      return _0x5ca411;
    }),
    _0x1175(_0x1ccf49, _0x515635)
  );
}
function clickableIndicator() {
  const _0x43cacf = _0x3b2deb;
  $(_0x43cacf(0x18a))[_0x43cacf(0x184)](_0x43cacf(0xdf)),
    $("[data-clickable]")[_0x43cacf(0x128)]("clickable") &&
      ($("[data-clickable]")[_0x43cacf(0x128)]("clickable-all")
        ? ((x = $(this)["index"]()), updateStep())
        : $(this)[_0x43cacf(0x102)]() <= progress &&
          ((x = $(this)[_0x43cacf(0x102)]()), updateStep()));
}
$(_0x3b2deb(0xf8))["on"]("click", clickableIndicator);
$(_0x3b2deb(0xc5))[_0x3b2deb(0x128)](_0x3b2deb(0x16a)) &&
  ($(_0x3b2deb(0x160))[_0x3b2deb(0x105)](function () {
    const _0x47e976 = _0x3b2deb;
    $(this)[_0x47e976(0x117)](
      _0x47e976(0xbc),
      $(this)[_0x47e976(0x128)](_0x47e976(0x13c))
    );
  }),
  $("[data-answer]")[_0x3b2deb(0x105)](function () {
    const _0x49ff51 = _0x3b2deb;
    $(this)[_0x49ff51(0x117)](
      _0x49ff51(0x17e),
      $(this)[_0x49ff51(0x128)]("answer")
    );
  }));
$(_0x3b2deb(0x185))["on"](_0x3b2deb(0x127), function (_0x520223) {
  const _0x40eaaf = _0x3b2deb;
  $(this)["data"](_0x40eaaf(0xf0)) &&
    (redirectTo = $(this)[_0x40eaaf(0x128)](_0x40eaaf(0xf0))),
    !$(this)[_0x40eaaf(0x128)](_0x40eaaf(0xef)) &&
      (newTab = $(this)[_0x40eaaf(0x128)]("new-tab")),
    (successCard = $(this)[_0x40eaaf(0x128)]("success")),
    _0x520223[_0x40eaaf(0x15f)](),
    _0x520223[_0x40eaaf(0x18b)](),
    logicExtra &&
      ($(this)["prop"](_0x40eaaf(0x188), !![]),
      $(steps)[_0x40eaaf(0xe9)](_0x40eaaf(0xd0))["prop"](_0x40eaaf(0xc4), ![])),
    localStorage["removeItem"]("filledInput"),
    fill &&
      ($(this)[_0x40eaaf(0x128)](_0x40eaaf(0x126))
        ? $(this)[_0x40eaaf(0x180)]($(this)[_0x40eaaf(0x128)](_0x40eaaf(0x126)))
        : ($(this)["val"](_0x40eaaf(0x168)),
          $(this)[_0x40eaaf(0x159)](_0x40eaaf(0x168))),
      $(_0x40eaaf(0xc5))[_0x40eaaf(0x154)]());
});
function resetFormly() {
  const _0x310f53 = _0x3b2deb;
  $("[data-form=\x22multistep\x22]")[_0x310f53(0xf9)](_0x310f53(0xce)),
    $(_0x310f53(0xc5))
      [_0x310f53(0x113)]()
      [_0x310f53(0xe9)](_0x310f53(0x110))
      [_0x310f53(0xe0)](),
    (x = 0x0),
    updateStep(),
    $("[data-form=\x22multistep\x22]")[_0x310f53(0xf5)](),
    $(_0x310f53(0x185))[_0x310f53(0x159)](oldSubmitText),
    $("[data-form=\x22submit-btn\x22]")[_0x310f53(0x180)](oldSubmitText),
    $(_0x310f53(0x183))["text"](0x1),
    $(_0x310f53(0xc5))
      [_0x310f53(0xe9)](_0x310f53(0x16b))
      ["siblings"](_0x310f53(0x179))
      [_0x310f53(0x184)](_0x310f53(0xfb));
}
$(document)["ajaxComplete"](function (_0x3039ed, _0x5742d3, _0x2c9829) {
  const _0x36027f = _0x3b2deb;
  if (
    _0x2c9829[_0x36027f(0xe6)][_0x36027f(0xec)](
      "https://webflow.com/api/v1/form/"
    )
  ) {
    const _0x377b92 = _0x5742d3["status"] === 0xc8,
      _0x2521c3 = _0x36027f(0x173);
    redirectTo &&
      _0x377b92 &&
      (newTab
        ? window[_0x36027f(0xc8)](redirectTo, _0x36027f(0xda))
        : (location["href"] = redirectTo)),
      _0x377b92 &&
        successCard !== "" &&
        $(_0x36027f(0x13f) + successCard + "\x22]")[_0x36027f(0x146)](),
      _0x377b92 &&
        formReset &&
        setTimeout(() => {
          resetFormly();
        }, resetDelay);
  }
}),
  $(_0x3b2deb(0x15e))["on"](_0x3b2deb(0x127), function () {
    const _0x5774b5 = _0x3b2deb;
    (back = !![]),
      (x = $(this)[_0x5774b5(0x128)]("edit-step") - 0x1),
      updateStep(),
      countCard
        ? ((curStep = x + 0x1),
          $(_0x5774b5(0x131))[_0x5774b5(0x159)](steps["length"]))
        : $(steps[x])[_0x5774b5(0x128)](_0x5774b5(0x132))
        ? (curStep = x + 0x0)
        : (curStep = x + 0x1),
      $("[data-text=\x22current-step\x22]")["text"](curStep),
      (back = ![]);
  }),
  $(_0x3b2deb(0x104))["on"](_0x3b2deb(0x127), function () {
    const _0x483888 = _0x3b2deb;
    $("[data-form=\x22multistep\x22]")[_0x483888(0xf9)]("reset");
    let _0x1c47e3 = $(this);
    $(this)[_0x483888(0x159)](_0x483888(0x168)),
      setTimeout(function () {
        const _0x3d0372 = _0x483888;
        $(_0x1c47e3)[_0x3d0372(0x159)](oldResetText),
          $(_0x1c47e3)[_0x3d0372(0x113)](_0x3d0372(0x110))[_0x3d0372(0xe0)](),
          (x = 0x0),
          updateStep(),
          $(_0x3d0372(0xc5))[_0x3d0372(0xf5)](),
          $(_0x3d0372(0x185))["text"](oldSubmitText),
          $(_0x3d0372(0x185))["val"](oldSubmitText),
          $(_0x1c47e3)["val"](oldSubmitText),
          $(_0x3d0372(0x183))[_0x3d0372(0x159)](0x1),
          $("[data-form=\x22multistep\x22]")
            [_0x3d0372(0xe9)](_0x3d0372(0x16b))
            ["siblings"](_0x3d0372(0x179))
            ["removeClass"]("w--redirected-checked");
      }, resetDelay);
  }),
  $(_0x3b2deb(0xc7))["on"](_0x3b2deb(0x16e), function (_0x410fed) {
    const _0x2fc9cb = _0x3b2deb;
    _0x410fed[_0x2fc9cb(0xd8)] === 0xd &&
      fill &&
      ($(_0x2fc9cb(0x15c))[_0x2fc9cb(0x128)]("enter")
        ? (totalSteps > curStep &&
            $("[data-form=\x22next-btn\x22]")[0x0][_0x2fc9cb(0x127)](),
          _0x410fed[_0x2fc9cb(0x15f)](),
          _0x410fed["stopPropagation"]())
        : (_0x410fed[_0x2fc9cb(0x15f)](), _0x410fed["stopPropagation"]()));
  }),
  $(_0x3b2deb(0xc7))[_0x3b2deb(0xb4)](function (_0x37e12d) {
    const _0x5a5300 = _0x3b2deb;
    (_0x37e12d[_0x5a5300(0xfc)] || _0x37e12d[_0x5a5300(0x16c)]) &&
      _0x37e12d[_0x5a5300(0xd8)] == 0xd &&
      (x >= steps[_0x5a5300(0x112)] - 0x1 && fill
        ? $(steps[x])[_0x5a5300(0xe9)](_0x5a5300(0x181))["click"]()
        : (event["preventDefault"](), event["stopPropagation"]()));
  }),
  $(_0x3b2deb(0x14d))["keypress"](function (_0x3d68ab) {
    const _0x2f12d7 = _0x3b2deb;
    $(this)[_0x2f12d7(0x162)](),
      _0x3d68ab[_0x2f12d7(0x106)] == _0x2f12d7(0xd5) &&
        (_0x3d68ab[_0x2f12d7(0x15f)](), _0x3d68ab[_0x2f12d7(0x18b)]()),
      _0x3d68ab[_0x2f12d7(0x12d)] &&
        _0x3d68ab[_0x2f12d7(0x106)] == "Enter" &&
        $(this)["val"]($(this)["val"]() + "\x0a");
  }),
  $(_0x3b2deb(0xc5))
    ["find"](_0x3b2deb(0xd0))
    ["on"](_0x3b2deb(0x17a), function () {
      const _0x4ab9f8 = _0x3b2deb;
      (all_data = all_data[_0x4ab9f8(0x147)](
        (_0x429f4d) => _0x429f4d["field"] !== $(this)[_0x4ab9f8(0x128)]("name")
      )),
        $(this)[_0x4ab9f8(0xf3)](_0x4ab9f8(0xff)) === "checkbox"
          ? $(this)["is"](":checked") &&
            all_data[_0x4ab9f8(0xb8)]({
              field: $(this)[_0x4ab9f8(0xf3)](_0x4ab9f8(0xe7)),
              value: $(this)
                [_0x4ab9f8(0x171)](_0x4ab9f8(0xd7))
                [_0x4ab9f8(0x159)](),
            })
          : (all_data["push"]({
              field: $(this)[_0x4ab9f8(0xf3)](_0x4ab9f8(0xe7)),
              value: $(this)[_0x4ab9f8(0x180)](),
            }),
            $(this)[_0x4ab9f8(0x180)]() !== "" &&
              resetInputErrorMessage($(this)[_0x4ab9f8(0xf3)]("name"))),
        all_data[_0x4ab9f8(0x14c)](function (_0x263257) {
          const _0x31a7f4 = _0x4ab9f8;
          $(_0x31a7f4(0x182) + _0x263257["field"] + "\x22]")[
            _0x31a7f4(0x146)
          ](),
            $(_0x31a7f4(0x182) + _0x263257[_0x31a7f4(0x11b)] + "\x22]")[
              _0x31a7f4(0x159)
            ](_0x263257["value"]);
        });
    }),
  $(_0x3b2deb(0xc5))
    ["find"]("textarea")
    ["on"](_0x3b2deb(0x17a), function () {
      const _0x2f2db6 = _0x3b2deb;
      $(this)["val"]() !== "" &&
        resetInputErrorMessage($(this)["attr"](_0x2f2db6(0xe7))),
        (all_data = all_data["filter"](
          (_0x2b188a) =>
            _0x2b188a["field"] !== $(this)[_0x2f2db6(0xf3)](_0x2f2db6(0xe7))
        )),
        console[_0x2f2db6(0xdc)](all_data),
        all_data[_0x2f2db6(0xb8)]({
          field: $(this)["attr"]("name"),
          value: $(this)["val"](),
        }),
        all_data[_0x2f2db6(0x14c)](function (_0x491dc6) {
          const _0x44711f = _0x2f2db6;
          $("[data-input-field=\x22" + _0x491dc6[_0x44711f(0x11b)] + "\x22]")[
            _0x44711f(0x146)
          ](),
            $(_0x44711f(0x182) + _0x491dc6["field"] + "\x22]")["text"](
              _0x491dc6["value"]
            );
        });
    }),
  $(_0x3b2deb(0xc5))
    ["find"](_0x3b2deb(0xe8))
    ["on"](_0x3b2deb(0x11c), function () {
      const _0x5c39ef = _0x3b2deb;
      $(this)[_0x5c39ef(0x180)]() !== "" &&
        resetInputErrorMessage($(this)[_0x5c39ef(0xf3)](_0x5c39ef(0xe7))),
        (all_data = all_data["filter"](
          (_0x545bf4) => _0x545bf4[_0x5c39ef(0x11b)] !== $(this)["attr"]("name")
        )),
        all_data[_0x5c39ef(0xb8)]({
          field: $(this)[_0x5c39ef(0xf3)](_0x5c39ef(0xe7)),
          value: $(this)[_0x5c39ef(0x180)](),
        }),
        all_data[_0x5c39ef(0x14c)](function (_0x5c3a4e) {
          const _0x30b51b = _0x5c39ef;
          $(_0x30b51b(0x182) + _0x5c3a4e[_0x30b51b(0x11b)] + "\x22]")[
            _0x30b51b(0x146)
          ](),
            $(_0x30b51b(0x182) + _0x5c3a4e[_0x30b51b(0x11b)] + "\x22]")["text"](
              _0x5c3a4e[_0x30b51b(0x167)]
            );
        });
    }),
  updateStep(),
  triggerInputAllData(),
  $(_0x3b2deb(0xcf))[_0x3b2deb(0x105)](function () {
    const _0x3d659c = _0x3b2deb,
      _0x33d602 = $(this)[_0x3d659c(0xe9)]("[data-cms-select=text]"),
      _0x196789 = [];
    console[_0x3d659c(0xdc)](_0x196789),
      _0x33d602[_0x3d659c(0x105)](function () {
        const _0x119c3f = _0x3d659c;
        _0x196789[_0x119c3f(0xb8)](
          $(this)[_0x119c3f(0x159)]()[_0x119c3f(0x177)]()
        );
      });
    const _0x5cbaeb = $(this)[_0x3d659c(0x171)](_0x3d659c(0xcb));
    $[_0x3d659c(0x105)](_0x196789, function (_0x3f69e7, _0x53de50) {
      const _0x4507ca = _0x3d659c,
        _0x5c72aa = $(_0x4507ca(0xf4))
          [_0x4507ca(0x180)](_0x53de50)
          [_0x4507ca(0x159)](_0x53de50);
      _0x5cbaeb[_0x4507ca(0x117)](_0x5c72aa);
    });
  });
