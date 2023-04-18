//18-4-23 Update

const _0xc8d8f0 = _0x409a;
(function (_0x2cb24a, _0x3e68c6) {
  const _0x43f537 = _0x409a,
    _0x364c84 = _0x2cb24a();
  while (!![]) {
    try {
      const _0x2d921c =
        (parseInt(_0x43f537(0x19e)) / 0x1) *
          (parseInt(_0x43f537(0x1c2)) / 0x2) +
        (parseInt(_0x43f537(0x1f6)) / 0x3) *
          (parseInt(_0x43f537(0x1c8)) / 0x4) +
        parseInt(_0x43f537(0x197)) / 0x5 +
        -parseInt(_0x43f537(0x209)) / 0x6 +
        (parseInt(_0x43f537(0x1bf)) / 0x7) *
          (parseInt(_0x43f537(0x22a)) / 0x8) +
        parseInt(_0x43f537(0x222)) / 0x9 +
        -parseInt(_0x43f537(0x246)) / 0xa;
      if (_0x2d921c === _0x3e68c6) break;
      else _0x364c84["push"](_0x364c84["shift"]());
    } catch (_0x5bea1f) {
      _0x364c84["push"](_0x364c84["shift"]());
    }
  }
})(_0x3db0, 0xea7f5);
let x = 0x0,
  curStep = 0x0,
  steps = $(_0xc8d8f0(0x1b7)),
  progressbarClone = $(_0xc8d8f0(0x1b9))["clone"](),
  progressbar,
  countCard = !![],
  weightedSelection = $("[data-weighted-selection]")[_0xc8d8f0(0x1da)](
    _0xc8d8f0(0x255)
  ),
  selectMultiple = $("[data-select-multiple]")[_0xc8d8f0(0x1da)](
    _0xc8d8f0(0x234)
  ),
  customError = $(_0xc8d8f0(0x207))[_0xc8d8f0(0x1da)](_0xc8d8f0(0x210)),
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
  empReqTel = [],
  reinitIX = $(_0xc8d8f0(0x19f))["data"]("reinit"),
  textareaLength = 0x0,
  textInputLength = 0x0,
  emailInputLength = 0x0,
  selectInputLength = 0x0,
  checkboxInputLength = 0x0,
  filledInput = [],
  savedFilledInput = JSON[_0xc8d8f0(0x260)](
    localStorage[_0xc8d8f0(0x1a7)](_0xc8d8f0(0x1f8))
  ),
  memory = $(_0xc8d8f0(0x261))[_0xc8d8f0(0x1da)]("memory"),
  quiz = $(_0xc8d8f0(0x1cd))[_0xc8d8f0(0x1da)]("quiz"),
  progress = 0x0;
const urlFormly = new URL(window["location"]["href"]);
let params = $(_0xc8d8f0(0x1fb))[_0xc8d8f0(0x1da)](_0xc8d8f0(0x1c6)),
  skipTo = 0x0,
  next = ![],
  back = ![],
  selArr = [],
  selString = [],
  emptyInput = 0x0,
  searchQ = [],
  domainAllowed = !![],
  dom = [],
  logicExtra = $(_0xc8d8f0(0x241))[_0xc8d8f0(0x1da)](_0xc8d8f0(0x1f7)),
  oldSubmitText = $("[data-form=\x22submit-btn\x22]")[_0xc8d8f0(0x1fd)](),
  oldResetText = $(_0xc8d8f0(0x1e5))[_0xc8d8f0(0x264)](),
  formReset = $("[data-form=\x22multistep\x22]")["data"](_0xc8d8f0(0x194)),
  successCard = "",
  redirectTo = "",
  totalSteps = 0x0,
  resetDelay = $("[data-reset-delay]")[_0xc8d8f0(0x1da)](_0xc8d8f0(0x1a2))
    ? $(_0xc8d8f0(0x259))[_0xc8d8f0(0x1da)](_0xc8d8f0(0x1a2))
    : 0x7d0,
  newTab = !![];
all_data = [];
$(_0xc8d8f0(0x1d2))["length"] > 0x0 &&
  (countCard = $("[data-count-card]")[_0xc8d8f0(0x1da)](_0xc8d8f0(0x242)));
$(progressbarClone)[_0xc8d8f0(0x191)](_0xc8d8f0(0x1c0)),
  $("[data-form=\x22progress\x22]")["children"]()["remove"](),
  $(_0xc8d8f0(0x1d1))[_0xc8d8f0(0x21f)](),
  steps[_0xc8d8f0(0x1ca)](function () {
    const _0x3a8bf4 = _0xc8d8f0;
    $(_0x3a8bf4(0x1b0))[_0x3a8bf4(0x1ff)](
      progressbarClone[_0x3a8bf4(0x1a3)](!![], !![])
    );
  }),
  $(_0xc8d8f0(0x25b))[_0xc8d8f0(0x21f)]();
countCard
  ? ((curStep = curStep + 0x1),
    (totalSteps = steps[_0xc8d8f0(0x20a)]),
    $(_0xc8d8f0(0x1c4))[_0xc8d8f0(0x264)](totalSteps))
  : ($(steps[x])[_0xc8d8f0(0x1da)](_0xc8d8f0(0x22f))
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    (totalSteps = $(_0xc8d8f0(0x220))[_0xc8d8f0(0x20a)]),
    $("[data-text=\x22total-steps\x22]")[_0xc8d8f0(0x264)](totalSteps),
    $("[data-form=\x22step\x22][data-card]")["each"](function () {
      const _0xe2dc39 = _0xc8d8f0;
      $($(_0xe2dc39(0x1b9))[$(this)["index"]()])[_0xe2dc39(0x21f)]();
    }));
(progressbar = $(_0xc8d8f0(0x1b0))[_0xc8d8f0(0x1d8)]()),
  $("[data-form=\x22progress-indicator\x22]")["on"](
    "click",
    clickableIndicator
  ),
  console[_0xc8d8f0(0x1ab)](curStep),
  $("[data-text=\x22current-step\x22]")[_0xc8d8f0(0x264)](curStep),
  steps[_0xc8d8f0(0x21f)](),
  $(_0xc8d8f0(0x225))[_0xc8d8f0(0x21f)](),
  $(_0xc8d8f0(0x1a6))[_0xc8d8f0(0x1ca)](function () {
    const _0x38a2bc = _0xc8d8f0;
    $(this)[_0x38a2bc(0x1e0)]("type", _0x38a2bc(0x1cb));
  });
function getParams() {
  const _0x4399e4 = _0xc8d8f0;
  urlFormly[_0x4399e4(0x1dd)][_0x4399e4(0x1eb)](function (
    _0x448212,
    _0x3b97d3
  ) {
    const _0x5f0c62 = _0x4399e4;
    searchQ[_0x5f0c62(0x1df)]({ val: _0x448212, key: _0x3b97d3 });
  });
}
function getSafe(_0x39a87b, _0x3a7496) {
  try {
    return _0x39a87b();
  } catch (_0x3cf391) {
    return _0x3a7496;
  }
}
savedFilledInput &&
  memory &&
  (console[_0xc8d8f0(0x1ab)](_0xc8d8f0(0x22e)),
  savedFilledInput[_0xc8d8f0(0x1eb)]((_0x35e6a6) => {
    const _0x67a147 = _0xc8d8f0;
    if (
      $(
        "input[name=\x22" +
          _0x35e6a6[_0x67a147(0x1e6)] +
          _0x67a147(0x19c) +
          _0x35e6a6[_0x67a147(0x1fc)] +
          "\x22]"
      )[_0x67a147(0x1e0)](_0x67a147(0x216)) === "radio"
    )
      $(
        _0x67a147(0x235) +
          _0x35e6a6[_0x67a147(0x1e6)] +
          _0x67a147(0x19c) +
          _0x35e6a6[_0x67a147(0x1fc)] +
          "\x22]"
      )["click"](),
        $(
          _0x67a147(0x235) +
            _0x35e6a6[_0x67a147(0x1e6)] +
            _0x67a147(0x19c) +
            _0x35e6a6[_0x67a147(0x1fc)] +
            "\x22]"
        )
          [_0x67a147(0x202)](_0x67a147(0x1d7))
          [_0x67a147(0x267)](_0x67a147(0x206));
    else
      _0x35e6a6[_0x67a147(0x1fc)] === "on"
        ? ($("input[name=\x22" + _0x35e6a6[_0x67a147(0x1e6)] + "\x22]")[
            _0x67a147(0x24a)
          ](),
          $(_0x67a147(0x235) + _0x35e6a6[_0x67a147(0x1e6)] + "\x22]")
            [_0x67a147(0x202)](_0x67a147(0x23c))
            ["addClass"](_0x67a147(0x206)))
        : ($(_0x67a147(0x235) + _0x35e6a6[_0x67a147(0x1e6)] + "\x22]")[
            _0x67a147(0x1fd)
          ](_0x35e6a6[_0x67a147(0x1fc)]),
          $(_0x67a147(0x269) + _0x35e6a6[_0x67a147(0x1e6)] + "\x22]")["val"](
            _0x35e6a6["value"]
          ),
          $(_0x67a147(0x233) + _0x35e6a6[_0x67a147(0x1e6)] + "\x22]")
            [_0x67a147(0x1c9)](
              "option[value=\x22" + _0x35e6a6[_0x67a147(0x1fc)] + "\x22]"
            )
            [_0x67a147(0x21b)](_0x67a147(0x23f), !![]));
  }));
params &&
  (getParams(),
  searchQ[_0xc8d8f0(0x1eb)]((_0x339eb6) => {
    const _0x55a688 = _0xc8d8f0;
    console["log"](
      _0x55a688(0x1ea),
      _0x339eb6,
      $(_0x55a688(0x1ef) + _0x339eb6[_0x55a688(0x1fd)] + "\x22]")[
        _0x55a688(0x1e0)
      ](_0x55a688(0x216))
    );
    if (
      $(
        _0x55a688(0x235) +
          _0x339eb6[_0x55a688(0x231)] +
          "\x22][value=\x22" +
          _0x339eb6["val"] +
          "\x22]"
      )[_0x55a688(0x1e0)]("type") === "radio"
    )
      $(
        _0x55a688(0x235) +
          _0x339eb6[_0x55a688(0x231)] +
          _0x55a688(0x19c) +
          _0x339eb6[_0x55a688(0x1fd)] +
          "\x22]"
      )[_0x55a688(0x24a)](),
        $(
          _0x55a688(0x235) +
            _0x339eb6["key"] +
            "\x22][value=\x22" +
            _0x339eb6[_0x55a688(0x1fd)] +
            "\x22]"
        )
          [_0x55a688(0x202)](".w-radio-input")
          [_0x55a688(0x267)](_0x55a688(0x206)),
        $(
          _0x55a688(0x235) +
            _0x339eb6[_0x55a688(0x231)] +
            _0x55a688(0x19c) +
            _0x339eb6[_0x55a688(0x1fd)] +
            "\x22]"
        )["trigger"]("input");
    else
      _0x339eb6["val"] === "on"
        ? ($(_0x55a688(0x235) + _0x339eb6[_0x55a688(0x231)] + "\x22]")[
            _0x55a688(0x24a)
          ](),
          $("input[name=\x22" + _0x339eb6[_0x55a688(0x231)] + "\x22]")
            [_0x55a688(0x202)](_0x55a688(0x23c))
            ["addClass"]("w--redirected-checked"),
          $(_0x55a688(0x235) + _0x339eb6["key"] + "\x22]")[_0x55a688(0x1d4)](
            "input"
          ))
        : ($("input[name=\x22" + _0x339eb6["key"] + "\x22]")[_0x55a688(0x1fd)](
            _0x339eb6[_0x55a688(0x1fd)]
          ),
          $(_0x55a688(0x269) + _0x339eb6[_0x55a688(0x231)] + "\x22]")[
            _0x55a688(0x1fd)
          ](_0x339eb6[_0x55a688(0x1fd)]),
          $("select[name=\x22" + _0x339eb6["key"] + "\x22]")
            ["find"](_0x55a688(0x1dc) + _0x339eb6[_0x55a688(0x1fd)] + "\x22]")
            ["prop"](_0x55a688(0x23f), !![]),
          $(_0x55a688(0x235) + _0x339eb6["key"] + "\x22]")[_0x55a688(0x1d4)](
            _0x55a688(0x1ec)
          ),
          $("input[name=\x22" + _0x339eb6[_0x55a688(0x231)] + "\x22]")[
            _0x55a688(0x1d4)
          ](_0x55a688(0x249)));
  }));
function _0x3db0() {
  const _0x380e60 = [
    "keypress",
    "hide",
    "[data-form=\x22step\x22]:not([data-card=\x22true\x22])",
    ":input[type=\x22email\x22]",
    "8811963sMZawI",
    "keydown",
    "readystatechange",
    "[data-success-card]",
    "[data-clickable]",
    "<br>Data\x20Go\x20To\x20=\x20",
    "go-to",
    "set",
    "4226312aNWFUv",
    "test",
    "novalidate",
    "textarea",
    "memory",
    "card",
    "select",
    "key",
    "dispatchEvent",
    "select[name=\x22",
    "select-multiple",
    "input[name=\x22",
    "select[required]",
    "skipTo",
    "select[required]:visible",
    "stopPropagation",
    "[data-form=\x22next-btn\x22][data-submit-show]",
    "radio",
    ".w-checkbox-input",
    "checked",
    "submit-show",
    "selected",
    "none",
    "[data-form=\x22multistep\x22]",
    "count-card",
    "parents",
    "success",
    "replaceState",
    "17751310dWZYqt",
    "[data-btn=\x22check\x22]",
    "keyCode",
    "change",
    "click",
    "[data-clickable-all]",
    "redirect",
    "span",
    "block-domain",
    ":input[type=\x22text\x22][required]",
    "Webflow",
    "form[data-form=\x22multistep\x22]\x20:input",
    "fadeIn",
    "[type=\x22submit\x22]",
    ":input[type=\x22tel\x22][required]",
    "weighted-selection",
    "field",
    ":checked",
    "textarea[required]:visible",
    "[data-reset-delay]",
    ":input",
    "[data-input-field]",
    ":input[type=\x22number\x22][required]",
    "debug-mode",
    "data-go-to",
    "new-tab",
    "parse",
    "[data-memory]",
    "answer",
    "[type=\x22radio\x22]",
    "text",
    "[data-form=\x22back-btn\x22]",
    "[data-btn=\x22edit\x22]",
    "addClass",
    "[data-selection]",
    "textarea[name=\x22",
    "removeClass",
    "preventDefault",
    "filter",
    "reset",
    "<br>Data\x20Answer\x20=\x20",
    "includes",
    "2595980suQMPH",
    "not",
    "[type=\x22checkbox\x22]",
    "[data-enter]",
    ":input[type=\x22checkbox\x22]:checked",
    "\x22][value=\x22",
    "auto",
    "93382HjXTVI",
    "[data-reinit]",
    "Enter",
    "disabled",
    "reset-delay",
    "clone",
    "radio-skip",
    ":input[type=\x22checkbox\x22]",
    "[data-form=\x22next-btn\x22][type=\x22submit\x22]",
    "getItem",
    "css",
    "[data-skip-to]",
    "Please\x20wait...",
    "log",
    "backTo",
    "destroy",
    "wait",
    "history",
    "[data-form=\x22progress\x22]",
    "selection",
    "ctrlKey",
    ":input[type=\x22number\x22]",
    "radio-delay",
    "split",
    ":input[type=\x22email\x22][required]",
    "[data-form=\x22step\x22]",
    "enter",
    "[data-form=\x22progress-indicator\x22]",
    ":input[type=\x22text\x22]",
    "[data-form=\x22submit-btn\x22]:visible",
    "href",
    ":input[type=\x22tel\x22]",
    "[data-answer]",
    "21KrQUjK",
    "current",
    "skip-to",
    "8jPJpAr",
    "submit",
    "[data-text=\x22total-steps\x22]",
    "join",
    "query-param",
    "clickable-all",
    "12jPQJIS",
    "find",
    "each",
    "button",
    "init",
    "[data-quiz]",
    "ix2",
    "step",
    "input[autofocus]",
    "[data-form=\x22submit-btn\x22]",
    "[data-count-card]",
    "name",
    "trigger",
    "focus",
    "<option>",
    ".w-radio-input",
    "children",
    "[data-input-field=\x22",
    "data",
    "ajaxComplete",
    "option[value=\x22",
    "searchParams",
    ":input[type=\x22file\x22][required]",
    "push",
    "attr",
    "data-skip-to",
    "[data-answer=\x22",
    "textarea[autofocus]",
    "require",
    "[data-btn=\x22reset\x22]",
    "inputName",
    "input:checkbox",
    "[data-form=\x22next-btn\x22]",
    "required",
    "aprams",
    "forEach",
    "input",
    ":radio",
    "checkbox",
    "input[value=\x22",
    "[data-answer]:visible",
    "input:radio[required]",
    "body",
    "input:radio[name=\x22",
    "removeItem",
    "setItem",
    "1089249fWFfeH",
    "logic-extra",
    "filledInput",
    "findIndex",
    "[data-form=\x22custom-progress-indicator\x22]",
    "[data-query-param]",
    "value",
    "val",
    "nonvalidated",
    "append",
    "_blank",
    "[data-selection=\x22other\x22]",
    "siblings",
    "input[type=\x22text\x22][required]:visible",
    "[data-radio-skip]:visible",
    ":input[required]",
    "w--redirected-checked",
    "[data-custom-error-message]",
    "[data-form=\x22submit\x22]:visible",
    "10861890WTHBav",
    "length",
    "[data-radio-delay]",
    "[data-selected]:checked",
    "[data-selection=\x22",
    "open",
    "0.4",
    "custom-error-message",
    "stringify",
    "input[type=\x22email\x22]:visible",
    "show",
    "index",
    "[data-cms-select=text]",
    "type",
    "textarea[required]",
    "shiftKey",
    "clickable",
    "[data-text=\x22current-step\x22]",
    "prop",
    "some",
    "[data-go-to]",
  ];
  _0x3db0 = function () {
    return _0x380e60;
  };
  return _0x3db0();
}
quiz &&
  steps[_0xc8d8f0(0x1ca)](function () {
    const _0x285a38 = _0xc8d8f0;
    $(this)[_0x285a38(0x1d8)]()[_0x285a38(0x1e0)]("data-radio-skip", !![]),
      $(this)[_0x285a38(0x1d8)]()[_0x285a38(0x1e0)]("data-radio-delay", 0xfa);
  });
function disableBtn(_0x1a731e) {
  const _0x26503d = _0xc8d8f0;
  fill = ![];
  if (customError) {
  } else
    $(_0x26503d(0x1e8))[_0x26503d(0x1a8)]({
      opacity: "0.4",
      "pointer-events": _0x26503d(0x240),
    }),
      $(_0x26503d(0x1e8))[_0x26503d(0x267)](_0x26503d(0x1a1)),
      $(_0x26503d(0x1d1))[_0x26503d(0x1a8)]({
        opacity: _0x26503d(0x20f),
        "pointer-events": _0x26503d(0x240),
      }),
      $("[data-form=\x22submit-btn\x22]")["addClass"](_0x26503d(0x1a1));
}
function enableBtn() {
  const _0x5d51ea = _0xc8d8f0;
  (fill = !![]),
    $(_0x5d51ea(0x1e8))[_0x5d51ea(0x1a8)]({
      "pointer-events": _0x5d51ea(0x19d),
      opacity: "1",
    }),
    $(_0x5d51ea(0x1e8))[_0x5d51ea(0x191)](_0x5d51ea(0x1a1)),
    $(_0x5d51ea(0x1d1))[_0x5d51ea(0x1a8)]({
      "pointer-events": _0x5d51ea(0x19d),
      opacity: "1",
    }),
    $(_0x5d51ea(0x1d1))["removeClass"](_0x5d51ea(0x1a1));
}
function saveFilledInput() {
  const _0x39c9a8 = _0xc8d8f0;
  $(_0x39c9a8(0x251))
    [_0x39c9a8(0x198)](_0x39c9a8(0x253))
    [_0x39c9a8(0x1ca)](function () {
      const _0x40fa23 = _0x39c9a8;
      $(this)[_0x40fa23(0x1e0)]("type") === "checkbox" ||
      $(this)[_0x40fa23(0x1e0)]("type") === _0x40fa23(0x23b)
        ? $(this)[_0x40fa23(0x21b)](_0x40fa23(0x23d)) &&
          (filledInput[_0x40fa23(0x21c)](
            (_0x3091fb) =>
              _0x3091fb[_0x40fa23(0x1e6)] ===
              $(this)[_0x40fa23(0x1e0)](_0x40fa23(0x1d3))
          )
            ? ((filledInput = filledInput["filter"](
                (_0x1d0b5d) =>
                  _0x1d0b5d[_0x40fa23(0x1e6)] !== $(this)["attr"]("name")
              )),
              $(this)["val"]() !== "" &&
                filledInput["push"]({
                  inputName: $(this)["attr"](_0x40fa23(0x1d3)),
                  value: $(this)["val"](),
                }))
            : $(this)["val"]() !== "" &&
              filledInput["push"]({
                inputName: $(this)[_0x40fa23(0x1e0)](_0x40fa23(0x1d3)),
                value: $(this)[_0x40fa23(0x1fd)](),
              }))
        : filledInput[_0x40fa23(0x21c)](
            (_0x4d9e9c) =>
              _0x4d9e9c[_0x40fa23(0x1e6)] === $(this)[_0x40fa23(0x1e0)]("name")
          )
        ? ((filledInput = filledInput["filter"](
            (_0x17168d) =>
              _0x17168d["inputName"] !== $(this)["attr"](_0x40fa23(0x1d3))
          )),
          $(this)[_0x40fa23(0x1fd)]() !== "" &&
            filledInput[_0x40fa23(0x1df)]({
              inputName: $(this)["attr"](_0x40fa23(0x1d3)),
              value: $(this)["val"](),
            }))
        : $(this)[_0x40fa23(0x1fd)]() !== "" &&
          filledInput[_0x40fa23(0x1df)]({
            inputName: $(this)["attr"](_0x40fa23(0x1d3)),
            value: $(this)["val"](),
          });
    }),
    filledInput &&
      filledInput[_0x39c9a8(0x1eb)]((_0x38ba74) => {
        const _0x180c13 = _0x39c9a8;
        urlFormly[_0x180c13(0x1dd)]["delete"](_0x38ba74[_0x180c13(0x1e6)]),
          urlFormly["searchParams"][_0x180c13(0x229)](
            _0x38ba74[_0x180c13(0x1e6)],
            _0x38ba74[_0x180c13(0x1fc)]
          ),
          window[_0x180c13(0x1af)][_0x180c13(0x245)](null, null, urlFormly);
      }),
    localStorage[_0x39c9a8(0x1f4)](_0x39c9a8(0x1f8)),
    localStorage[_0x39c9a8(0x1f5)](
      _0x39c9a8(0x1f8),
      JSON[_0x39c9a8(0x211)](filledInput)
    );
}
function scrollTop() {}
function updateStep() {
  const _0x1224a3 = _0xc8d8f0;
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
    (empReqRadio = []);
  $(_0x1224a3(0x226))["data"](_0x1224a3(0x219)) &&
    (steps[_0x1224a3(0x1c9)](_0x1224a3(0x205))[_0x1224a3(0x1ca)](function () {
      const _0x51858b = _0x1224a3;
      $(
        $(_0x51858b(0x1fa))[
          $(this)[_0x51858b(0x243)](_0x51858b(0x1b7))[_0x51858b(0x214)]()
        ]
      ),
        $(this)[_0x51858b(0x1fd)]() === "" && emptyInput++;
    }),
    emptyInput > 0x0
      ? $("input[type=\x22submit\x22]")[_0x1224a3(0x267)](_0x1224a3(0x1a1))
      : $("input[type=\x22submit\x22]")[_0x1224a3(0x191)](_0x1224a3(0x1a1)));
  $(_0x1224a3(0x1fa))[_0x1224a3(0x191)](_0x1224a3(0x1c0)),
    $($(_0x1224a3(0x1fa))[x])[_0x1224a3(0x267)](_0x1224a3(0x1c0)),
    (selection = selections[_0x1224a3(0x193)](
      (_0x21b540) => _0x21b540[_0x1224a3(0x1cf)] === x - 0x1
    ));
  next &&
    (x = getSafe(() => selection[0x0][_0x1224a3(0x237)])
      ? parseInt(getSafe(() => selection[0x0][_0x1224a3(0x237)]))
      : x);
  $(_0x1224a3(0x1be))[_0x1224a3(0x21f)](), steps["hide"]();
  reinitIX === !![] && window["Webflow"][_0x1224a3(0x1ad)]();
  $(progressbar)[_0x1224a3(0x191)](_0x1224a3(0x1c0));
  for (i = 0x0; i <= x; i++) {
    countCard
      ? $(progressbar[i])[_0x1224a3(0x267)](_0x1224a3(0x1c0))
      : !$(steps[i])["data"](_0x1224a3(0x22f)) &&
        $(progressbar[i])[_0x1224a3(0x267)](_0x1224a3(0x1c0));
  }
  reinitIX === !![]
    ? (window[_0x1224a3(0x250)] &&
        window[_0x1224a3(0x250)]
          [_0x1224a3(0x1e4)](_0x1224a3(0x1ce))
          [_0x1224a3(0x1cc)](),
      document[_0x1224a3(0x232)](new Event(_0x1224a3(0x224))),
      $(steps[x])[_0x1224a3(0x213)]())
    : $(steps[x])["fadeIn"]("slow");
  x === 0x0 &&
    !$(steps[x])[_0x1224a3(0x1da)](_0x1224a3(0x22f)) &&
    $(steps[x])[_0x1224a3(0x1c9)](_0x1224a3(0x1be))[_0x1224a3(0x213)]();
  selection[_0x1224a3(0x20a)] > 0x0
    ? $(steps[x])
        ["find"](_0x1224a3(0x1e2) + selection[0x0][_0x1224a3(0x23f)] + "\x22]")
        ["show"]()
    : $(steps[x])
        [_0x1224a3(0x1c9)](_0x1224a3(0x1e2) + answer + "\x22]")
        [_0x1224a3(0x213)]();
  if (x === 0x0)
    $(_0x1224a3(0x265))["hide"](),
      $("[data-form=\x22next-btn\x22]")[_0x1224a3(0x213)]();
  else {
    if (
      x === steps[_0x1224a3(0x20a)] - 0x1 ||
      $(steps[x])[_0x1224a3(0x1c9)](_0x1224a3(0x208))[_0x1224a3(0x20a)] > 0x0
    ) {
      $(_0x1224a3(0x1e8))[_0x1224a3(0x21f)]();
      if (
        $(steps[x])
          [_0x1224a3(0x1c9)]("[data-form=\x22next-btn\x22][data-submit-show]")
          [_0x1224a3(0x1da)]("submit-show")
      )
        $(steps[x])[_0x1224a3(0x1c9)](_0x1224a3(0x23a))[_0x1224a3(0x213)]();
      else
        $("[data-form=\x22next-btn\x22]")[_0x1224a3(0x1da)](_0x1224a3(0x23e)) &&
          $("[data-form=\x22next-btn\x22]")[_0x1224a3(0x213)]();
      $(_0x1224a3(0x1d1))[_0x1224a3(0x213)](),
        $("[data-form=\x22back-btn\x22]")[_0x1224a3(0x213)]();
    } else
      $("[data-form=\x22next-btn\x22]")[_0x1224a3(0x213)](),
        $(_0x1224a3(0x265))[_0x1224a3(0x213)](),
        $(_0x1224a3(0x1d1))["hide"]();
  }
  $($(steps[x])["find"](_0x1224a3(0x1d0))[0x0])["focus"](),
    $($(steps[x])[_0x1224a3(0x1c9)](_0x1224a3(0x1e3))[0x0])[_0x1224a3(0x1d5)](),
    validation();
  for (idx = 0x0; idx <= progress; idx++) {
    $($(_0x1224a3(0x1fa))[idx])[_0x1224a3(0x191)](_0x1224a3(0x1a1));
  }
}
function validateEmail(_0x2172e1, _0x200c2f) {
  const _0x224348 = _0xc8d8f0;
  let _0x1a26dd = _0x2172e1[_0x224348(0x196)]("@")
    ? _0x2172e1["split"]("@")[0x1][_0x224348(0x1b5)](".")[0x0]
    : [];
  dom = [];
  _0x200c2f !== undefined &&
    _0x200c2f["split"](",")[_0x224348(0x1eb)](function (_0x33ef5d) {
      const _0x1a15f7 = _0x224348;
      _0x33ef5d["includes"](_0x1a26dd) && dom[_0x1a15f7(0x1df)](_0x1a26dd);
    });
  dom["length"] > 0x0 ? (domainAllowed = ![]) : (domainAllowed = !![]);
  var _0x4789f4 = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,20})?$/;
  !_0x4789f4[_0x224348(0x22b)](_0x2172e1)
    ? (emailFilled = ![])
    : (emailFilled = !![]);
}
function validation() {
  const _0x557847 = _0xc8d8f0;
  $(steps[x])["data"](_0x557847(0x22f)) && enableBtn();
  (textareaLength = $(steps[x])[_0x557847(0x1c9)](_0x557847(0x258))[
    _0x557847(0x20a)
  ]),
    (textInputLength = $(steps[x])["find"](_0x557847(0x203))[_0x557847(0x20a)]),
    (selectInputLength = $(steps[x])[_0x557847(0x1c9)](_0x557847(0x238))[
      _0x557847(0x20a)
    ]),
    (emailInputLength = $(steps[x])["find"](_0x557847(0x212))[
      _0x557847(0x20a)
    ]),
    (checkboxInputLength = $(steps[x])[_0x557847(0x1c9)](
      "input[type=\x22checkbox\x22]:visible"
    )["length"]);
  textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0
    ? disableBtn()
    : enableBtn();
  var _0x2ef25c = $(steps[x])["data"](_0x557847(0x1ee))
    ? $(steps[x])["data"](_0x557847(0x1ee))
    : 0x0;
  if (!logicExtra)
    $(steps[x])[_0x557847(0x1c9)](_0x557847(0x25a))["is"](_0x557847(0x199)) &&
      (_0x2ef25c === "*" ||
      _0x2ef25c >
        $(steps[x])[_0x557847(0x1c9)](_0x557847(0x1a5))[_0x557847(0x20a)]
        ? $(steps[x])
            [_0x557847(0x1c9)](_0x557847(0x1a5))
            [_0x557847(0x1ca)](function () {
              const _0x152257 = _0x557847;
              $(this)["is"](_0x152257(0x257))
                ? $(steps[x])[_0x152257(0x1c9)](_0x152257(0x205))["length"] <
                    0x1 && (checkboxFilled = !![])
                : (checkboxFilled = ![]);
            })
        : $(steps[x])["find"](_0x557847(0x19b))[_0x557847(0x20a)] >= _0x2ef25c
        ? (checkboxFilled = !![])
        : (checkboxFilled = ![])),
      $(steps[x])
        [_0x557847(0x1c9)](_0x557847(0x1f1))
        ["each"](function (_0x321bd2) {
          const _0x3506d3 = _0x557847;
          var _0x3f5dc0 = $(this)[_0x3506d3(0x1e0)](_0x3506d3(0x1d3));
          console[_0x3506d3(0x1ab)](_0x3f5dc0),
            $(_0x3506d3(0x1f3) + _0x3f5dc0 + "\x22]:checked")[
              _0x3506d3(0x20a)
            ] == 0x0
              ? !empReqRadio[_0x3506d3(0x1c9)](
                  (_0x557a05) => _0x557a05[_0x3506d3(0x1ec)] === _0x321bd2
                ) && empReqRadio[_0x3506d3(0x1df)]({ input: _0x321bd2 })
              : (empReqRadio = empReqRadio[_0x3506d3(0x193)](
                  (_0x2e92be) => _0x2e92be["input"] !== _0x321bd2
                )),
            empReqRadio[_0x3506d3(0x20a)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0x557847(0x1c9)](_0x557847(0x24f))
        ["each"](function (_0x1ce270) {
          const _0x2e0e2a = _0x557847;
          $(this)[_0x2e0e2a(0x1fd)]() !== ""
            ? (empReqInput = empReqInput[_0x2e0e2a(0x193)](
                (_0x3037aa) => _0x3037aa[_0x2e0e2a(0x1ec)] !== _0x1ce270
              ))
            : !empReqInput[_0x2e0e2a(0x1c9)](
                (_0x2561e0) => _0x2561e0[_0x2e0e2a(0x1ec)] === _0x1ce270
              ) && empReqInput["push"]({ input: _0x1ce270 }),
            empReqInput[_0x2e0e2a(0x20a)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x557847(0x1c9)](_0x557847(0x254))
        [_0x557847(0x1ca)](function (_0x332baa) {
          const _0x340d9b = _0x557847;
          $(this)["val"]() !== ""
            ? (empReqTel = empReqTel[_0x340d9b(0x193)](
                (_0x545efe) => _0x545efe[_0x340d9b(0x1ec)] !== _0x332baa
              ))
            : !empReqTel[_0x340d9b(0x1c9)](
                (_0x63a84a) => _0x63a84a["input"] === _0x332baa
              ) && empReqTel[_0x340d9b(0x1df)]({ input: _0x332baa }),
            empReqTel[_0x340d9b(0x20a)] === 0x0
              ? (telFilled = !![])
              : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x557847(0x1c9)](":input[type=\x22file\x22][required]")
        [_0x557847(0x1ca)](function (_0x4e8923) {
          const _0x8b8f99 = _0x557847;
          $(this)["val"]() !== ""
            ? (empReqFile = empReqFile["filter"](
                (_0x33f2a5) => _0x33f2a5[_0x8b8f99(0x1ec)] !== _0x4e8923
              ))
            : !empReqFile[_0x8b8f99(0x1c9)](
                (_0x2d30bd) => _0x2d30bd[_0x8b8f99(0x1ec)] === _0x4e8923
              ) && empReqFile["push"]({ input: _0x4e8923 }),
            empReqFile["length"] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x557847(0x1c9)](_0x557847(0x25c))
        ["each"](function (_0x36129a) {
          const _0xda2374 = _0x557847;
          $(this)[_0xda2374(0x1fd)]() !== ""
            ? (empReqNum = empReqNum[_0xda2374(0x193)](
                (_0x4b463c) => _0x4b463c[_0xda2374(0x1ec)] !== _0x36129a
              ))
            : !empReqNum["find"](
                (_0x338a59) => _0x338a59["input"] === _0x36129a
              ) && empReqNum[_0xda2374(0x1df)]({ input: _0x36129a }),
            empReqNum[_0xda2374(0x20a)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x557847(0x1c9)]("select[required]")
        [_0x557847(0x1ca)](function (_0x12a79a) {
          const _0xba829b = _0x557847;
          let _0xfb7682 = $(this)[_0xba829b(0x1fd)]();
          _0xfb7682 === "" && (_0xfb7682 = null),
            _0xfb7682 != null
              ? (empReqSelect = empReqSelect["filter"](
                  (_0x242125) => _0x242125[_0xba829b(0x1ec)] !== _0x12a79a
                ))
              : !empReqSelect[_0xba829b(0x1c9)](
                  (_0x1cb2d0) => _0x1cb2d0[_0xba829b(0x1ec)] === _0x12a79a
                ) && empReqSelect[_0xba829b(0x1df)]({ input: _0x12a79a }),
            empReqSelect[_0xba829b(0x20a)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x557847(0x1c9)](_0x557847(0x217))
        [_0x557847(0x1ca)](function (_0x3dd5e3) {
          const _0x407b4a = _0x557847;
          $(this)["val"]() !== ""
            ? (empReqTextarea = empReqTextarea["filter"](
                (_0x508c84) => _0x508c84["input"] !== _0x3dd5e3
              ))
            : !empReqTextarea[_0x407b4a(0x1c9)](
                (_0x1695dd) => _0x1695dd["input"] === _0x3dd5e3
              ) && empReqTextarea["push"]({ input: _0x3dd5e3 }),
            empReqTextarea[_0x407b4a(0x20a)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x557847(0x1c9)](_0x557847(0x1b6))
        [_0x557847(0x1ca)](function () {
          const _0x511555 = _0x557847;
          $(this)["val"]() !== ""
            ? validateEmail(
                $(this)[_0x511555(0x1fd)](),
                $(this)[_0x511555(0x1da)](_0x511555(0x24e))
              )
            : (emailFilled = ![]);
        });
  else {
    if ($(steps[x])[_0x557847(0x1da)]("card"))
      (answer = $(steps[x])
        [_0x557847(0x1c9)](_0x557847(0x21d))
        [_0x557847(0x1da)]("go-to")),
        (selections = selections[_0x557847(0x193)](
          (_0x22e2c2) => _0x22e2c2["step"] !== x
        )),
        selections[_0x557847(0x1df)]({ step: x, selected: answer });
    else
      $(steps[x])
        [_0x557847(0x1c9)](_0x557847(0x1f0))
        [_0x557847(0x1da)]("card") &&
        ((answer = $(steps[x])
          [_0x557847(0x1c9)](_0x557847(0x1f0))
          [_0x557847(0x1da)](_0x557847(0x228))),
        (selections = selections[_0x557847(0x193)](
          (_0x264543) => _0x264543[_0x557847(0x1cf)] !== x
        )),
        selections[_0x557847(0x1df)]({ step: x, selected: answer }));
    $(steps[x])
      ["find"](_0x557847(0x1f0))
      ["find"](_0x557847(0x25a))
      ["is"](_0x557847(0x199)) &&
      (_0x2ef25c === "*" ||
      _0x2ef25c >
        $(steps[x])[_0x557847(0x1c9)](_0x557847(0x1a5))[_0x557847(0x20a)]
        ? $(steps[x])
            [_0x557847(0x1c9)](_0x557847(0x1a5))
            [_0x557847(0x1ca)](function () {
              const _0x4c8580 = _0x557847;
              $(this)["is"](_0x4c8580(0x257))
                ? $(steps[x])[_0x4c8580(0x1c9)](_0x4c8580(0x205))[
                    _0x4c8580(0x20a)
                  ] < 0x1 &&
                  ((skipTo = undefined),
                  $(this)
                    [_0x4c8580(0x243)]("[data-skip-to]")
                    [_0x4c8580(0x1da)](_0x4c8580(0x1c1)) &&
                    (skipTo = $(this)
                      [_0x4c8580(0x243)](_0x4c8580(0x1a9))
                      [_0x4c8580(0x1da)](_0x4c8580(0x1c1))),
                  console[_0x4c8580(0x1ab)](
                    _0x4c8580(0x1ee),
                    $(this)[_0x4c8580(0x243)]()[_0x4c8580(0x243)]()
                  ),
                  $(this)
                    ["parents"](_0x4c8580(0x21d))
                    [_0x4c8580(0x1e0)](_0x4c8580(0x25e)) &&
                    ((answer = $(this)
                      ["parents"](_0x4c8580(0x21d))
                      [_0x4c8580(0x1e0)](_0x4c8580(0x25e))),
                    (selections = selections[_0x4c8580(0x193)](
                      (_0x164e44) => _0x164e44[_0x4c8580(0x1cf)] !== x
                    )),
                    selections["push"]({ step: x, selected: answer }),
                    skipTo &&
                      (selections["push"]({
                        step: skipTo - 0x2,
                        selected: answer,
                      }),
                      (objIndex = selections[_0x4c8580(0x1f9)](
                        (_0x56b6ce) => _0x56b6ce[_0x4c8580(0x1cf)] === x
                      )),
                      (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                      (selections[objIndex][_0x4c8580(0x1ac)] = x))),
                  (checkboxFilled = !![]))
                : (checkboxFilled = ![]);
            })
        : $(steps[x])
            ["find"](_0x557847(0x1f0))
            [_0x557847(0x1c9)](_0x557847(0x19b))[_0x557847(0x20a)] >= _0x2ef25c
        ? ($(steps[x])
            [_0x557847(0x1c9)](_0x557847(0x1f0))
            ["find"](_0x557847(0x19b))
            ["parents"](_0x557847(0x21d))
            [_0x557847(0x1e0)](_0x557847(0x25e)) &&
            ((skipTo = undefined),
            $(steps[x])
              [_0x557847(0x1c9)]("[data-answer]:visible")
              [_0x557847(0x1c9)](_0x557847(0x19b))
              [_0x557847(0x243)]("[data-skip-to]")
              [_0x557847(0x1e0)](_0x557847(0x1e1)) &&
              (skipTo = $(steps[x])
                [_0x557847(0x1c9)](_0x557847(0x1f0))
                [_0x557847(0x1c9)](_0x557847(0x19b))
                [_0x557847(0x243)](_0x557847(0x1a9))
                ["attr"](_0x557847(0x1e1))),
            console["log"](_0x557847(0x1ee), skipTo),
            (answer = $(steps[x])
              ["find"](_0x557847(0x1f0))
              [_0x557847(0x1c9)](_0x557847(0x19b))
              [_0x557847(0x243)]("[data-go-to]")
              [_0x557847(0x1e0)](_0x557847(0x25e))),
            (selections = selections[_0x557847(0x193)](
              (_0x2fbd5b) => _0x2fbd5b[_0x557847(0x1cf)] !== x
            )),
            selections["push"]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0x557847(0x1df)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0x557847(0x1f9)](
                (_0x2e586f) => _0x2e586f[_0x557847(0x1cf)] === x
              )),
              (selections[objIndex][_0x557847(0x237)] = parseInt(skipTo) - 0x1),
              (selections[objIndex]["backTo"] = x))),
          (selections = selections[_0x557847(0x193)](
            (_0x2134b7) => _0x2134b7[_0x557847(0x1cf)] !== x
          )),
          selections[_0x557847(0x1df)]({ step: x, selected: answer }),
          (checkboxFilled = !![]))
        : (checkboxFilled = ![])),
      $(steps[x])
        [_0x557847(0x1c9)](_0x557847(0x1f0))
        ["find"](_0x557847(0x205))
        ["is"](_0x557847(0x263))
        ? $(steps[x])
            [_0x557847(0x1c9)](_0x557847(0x1f0))
            [_0x557847(0x1c9)](":input[type=\x22radio\x22][required]")
            ["is"](":checked")
          ? (radioFilled = !![])
          : (radioFilled = ![])
        : (radioFilled = !![]),
      $(steps[x])
        [_0x557847(0x1c9)](_0x557847(0x1f0))
        ["find"](_0x557847(0x24f))
        [_0x557847(0x1ca)](function (_0x5f4aed) {
          const _0xd33725 = _0x557847;
          $(this)[_0xd33725(0x1fd)]() !== ""
            ? (empReqInput = empReqInput[_0xd33725(0x193)](
                (_0x47ddbc) => _0x47ddbc[_0xd33725(0x1ec)] !== _0x5f4aed
              ))
            : !empReqInput["find"](
                (_0x318018) => _0x318018[_0xd33725(0x1ec)] === _0x5f4aed
              ) && empReqInput["push"]({ input: _0x5f4aed }),
            empReqInput["length"] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x557847(0x1c9)](_0x557847(0x1f0))
        [_0x557847(0x1c9)](_0x557847(0x1ba))
        ["each"](function (_0x2a4819) {
          const _0x40a2b4 = _0x557847;
          (skipTo = undefined),
            $(this)
              [_0x40a2b4(0x243)](_0x40a2b4(0x1a9))
              [_0x40a2b4(0x1da)](_0x40a2b4(0x1c1)) !== "" &&
              (skipTo = $(this)
                [_0x40a2b4(0x243)](_0x40a2b4(0x1a9))
                ["data"]("skip-to")),
            $(this)
              [_0x40a2b4(0x243)]("[data-go-to]")
              [_0x40a2b4(0x1e0)](_0x40a2b4(0x25e)) &&
              ((answer = $(this)
                ["parents"](_0x40a2b4(0x21d))
                ["attr"](_0x40a2b4(0x25e))),
              (selections = selections[_0x40a2b4(0x193)](
                (_0x25b405) => _0x25b405["step"] !== x
              )),
              selections[_0x40a2b4(0x1df)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x40a2b4(0x1df)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x1a238d) => _0x1a238d[_0x40a2b4(0x1cf)] === x
                )),
                (selections[objIndex][_0x40a2b4(0x237)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x40a2b4(0x1ac)] = x)));
        }),
      $(steps[x])
        ["find"](_0x557847(0x1f0))
        ["find"](_0x557847(0x25c))
        [_0x557847(0x1ca)](function (_0x203e04) {
          const _0x59f0ea = _0x557847;
          $(this)[_0x59f0ea(0x1fd)]() !== ""
            ? (empReqNum = empReqNum[_0x59f0ea(0x193)](
                (_0x518b48) => _0x518b48[_0x59f0ea(0x1ec)] !== _0x203e04
              ))
            : !empReqNum[_0x59f0ea(0x1c9)](
                (_0x511b4e) => _0x511b4e[_0x59f0ea(0x1ec)] === _0x203e04
              ) && empReqNum[_0x59f0ea(0x1df)]({ input: _0x203e04 }),
            empReqNum["length"] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x557847(0x1c9)](_0x557847(0x1f0))
        [_0x557847(0x1c9)](_0x557847(0x1b3))
        [_0x557847(0x1ca)](function (_0x2bfd29) {
          const _0x15a423 = _0x557847;
          (skipTo = undefined),
            $(this)
              [_0x15a423(0x243)](_0x15a423(0x1a9))
              [_0x15a423(0x1da)](_0x15a423(0x1c1)) !== "" &&
              (skipTo = $(this)
                [_0x15a423(0x243)]("[data-skip-to]")
                [_0x15a423(0x1da)](_0x15a423(0x1c1))),
            $(this)["parents"]("[data-go-to]")["attr"](_0x15a423(0x25e)) &&
              ((answer = $(this)
                ["parents"](_0x15a423(0x21d))
                ["attr"](_0x15a423(0x25e))),
              (selections = selections[_0x15a423(0x193)](
                (_0x147822) => _0x147822[_0x15a423(0x1cf)] !== x
              )),
              selections[_0x15a423(0x1df)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x15a423(0x1df)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x15a423(0x1f9)](
                  (_0x376520) => _0x376520[_0x15a423(0x1cf)] === x
                )),
                (selections[objIndex][_0x15a423(0x237)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x15a423(0x1ac)] = x)));
        }),
      $(steps[x])
        [_0x557847(0x1c9)](_0x557847(0x1f0))
        ["find"](_0x557847(0x254))
        [_0x557847(0x1ca)](function (_0x806b97) {
          const _0x47ef59 = _0x557847;
          $(this)[_0x47ef59(0x1fd)]() !== ""
            ? (empReqTel = empReqTel[_0x47ef59(0x193)](
                (_0x1ddd77) => _0x1ddd77[_0x47ef59(0x1ec)] !== _0x806b97
              ))
            : !empReqTel[_0x47ef59(0x1c9)](
                (_0x1137f2) => _0x1137f2[_0x47ef59(0x1ec)] === _0x806b97
              ) && empReqTel[_0x47ef59(0x1df)]({ input: _0x806b97 }),
            empReqTel[_0x47ef59(0x20a)] === 0x0
              ? (telFilled = !![])
              : (telFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x557847(0x1f0))
        [_0x557847(0x1c9)](_0x557847(0x1bd))
        ["each"](function (_0x58aaae) {
          const _0x1935d6 = _0x557847;
          (skipTo = undefined),
            $(this)
              [_0x1935d6(0x243)](_0x1935d6(0x1a9))
              [_0x1935d6(0x1da)](_0x1935d6(0x1c1)) !== "" &&
              (skipTo = $(this)
                [_0x1935d6(0x243)]("[data-skip-to]")
                [_0x1935d6(0x1da)](_0x1935d6(0x1c1))),
            $(this)
              [_0x1935d6(0x243)]("[data-go-to]")
              [_0x1935d6(0x1e0)](_0x1935d6(0x25e)) &&
              ((answer = $(this)
                [_0x1935d6(0x243)](_0x1935d6(0x21d))
                ["attr"]("data-go-to")),
              (selections = selections["filter"](
                (_0x33353a) => _0x33353a[_0x1935d6(0x1cf)] !== x
              )),
              selections[_0x1935d6(0x1df)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x1935d6(0x1df)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x1935d6(0x1f9)](
                  (_0x3a5154) => _0x3a5154[_0x1935d6(0x1cf)] === x
                )),
                (selections[objIndex][_0x1935d6(0x237)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x1935d6(0x1ac)] = x)));
        }),
      $(steps[x])
        [_0x557847(0x1c9)](_0x557847(0x1f0))
        [_0x557847(0x1c9)](_0x557847(0x1de))
        [_0x557847(0x1ca)](function (_0xdffa3a) {
          const _0x3b680a = _0x557847;
          $(this)[_0x3b680a(0x1fd)]() !== ""
            ? (empReqfile = empReqfile["filter"](
                (_0x170956) => _0x170956[_0x3b680a(0x1ec)] !== _0xdffa3a
              ))
            : !empReqfile[_0x3b680a(0x1c9)](
                (_0x1bf69f) => _0x1bf69f[_0x3b680a(0x1ec)] === _0xdffa3a
              ) && empReqfile[_0x3b680a(0x1df)]({ input: _0xdffa3a }),
            empReqfile[_0x3b680a(0x20a)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x557847(0x1c9)]("[data-answer]:visible")
        [_0x557847(0x1c9)](":input[type=\x22file\x22]")
        [_0x557847(0x1ca)](function (_0x36f84c) {
          const _0x244d02 = _0x557847;
          (skipTo = undefined),
            $(this)
              ["parents"](_0x244d02(0x1a9))
              [_0x244d02(0x1da)](_0x244d02(0x1c1)) !== "" &&
              (skipTo = $(this)
                [_0x244d02(0x243)](_0x244d02(0x1a9))
                [_0x244d02(0x1da)](_0x244d02(0x1c1))),
            $(this)
              ["parents"](_0x244d02(0x21d))
              [_0x244d02(0x1e0)](_0x244d02(0x25e)) &&
              ((answer = $(this)
                ["parents"]("[data-go-to]")
                [_0x244d02(0x1e0)](_0x244d02(0x25e))),
              (selections = selections["filter"](
                (_0x2a7cb0) => _0x2a7cb0[_0x244d02(0x1cf)] !== x
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x244d02(0x1df)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x244d02(0x1f9)](
                  (_0x3f9ba2) => _0x3f9ba2[_0x244d02(0x1cf)] === x
                )),
                (selections[objIndex][_0x244d02(0x237)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x244d02(0x1ac)] = x)));
        }),
      $(steps[x])
        [_0x557847(0x1c9)](_0x557847(0x1f0))
        [_0x557847(0x1c9)](_0x557847(0x236))
        [_0x557847(0x1ca)](function (_0x42ebee) {
          const _0x4363a8 = _0x557847;
          $(this)["val"]() !== ""
            ? (empReqSelect = empReqSelect[_0x4363a8(0x193)](
                (_0x162d4d) => _0x162d4d["input"] !== _0x42ebee
              ))
            : !empReqSelect["find"](
                (_0x3f3554) => _0x3f3554[_0x4363a8(0x1ec)] === _0x42ebee
              ) && empReqSelect[_0x4363a8(0x1df)]({ input: _0x42ebee }),
            empReqSelect["length"] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x557847(0x1c9)]("[data-answer]:visible")
        [_0x557847(0x1c9)](_0x557847(0x230))
        [_0x557847(0x1ca)](function (_0x59b181) {
          const _0x208d1a = _0x557847;
          (skipTo = undefined),
            $(this)
              ["parents"](_0x208d1a(0x1a9))
              [_0x208d1a(0x1da)](_0x208d1a(0x1c1)) !== "" &&
              (skipTo = $(this)
                [_0x208d1a(0x243)](_0x208d1a(0x1a9))
                [_0x208d1a(0x1da)](_0x208d1a(0x1c1))),
            $(this)
              [_0x208d1a(0x243)](_0x208d1a(0x21d))
              [_0x208d1a(0x1e0)]("data-go-to") &&
              ((answer = $(this)
                [_0x208d1a(0x243)]("[data-go-to]")
                [_0x208d1a(0x1e0)](_0x208d1a(0x25e))),
              (selections = selections[_0x208d1a(0x193)](
                (_0x52adc1) => _0x52adc1[_0x208d1a(0x1cf)] !== x
              )),
              selections[_0x208d1a(0x1df)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x208d1a(0x1df)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x208d1a(0x1f9)](
                  (_0x3b62b8) => _0x3b62b8[_0x208d1a(0x1cf)] === x
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x208d1a(0x1ac)] = x)));
        }),
      $(steps[x])
        [_0x557847(0x1c9)]("[data-answer]:visible")
        [_0x557847(0x1c9)](_0x557847(0x217))
        [_0x557847(0x1ca)](function (_0x545aed) {
          const _0x2fb7b0 = _0x557847;
          $(this)["val"]() !== ""
            ? (empReqTextarea = empReqTextarea[_0x2fb7b0(0x193)](
                (_0x44ea04) => _0x44ea04[_0x2fb7b0(0x1ec)] !== _0x545aed
              ))
            : !empReqTextarea[_0x2fb7b0(0x1c9)](
                (_0x50450d) => _0x50450d[_0x2fb7b0(0x1ec)] === _0x545aed
              ) && empReqTextarea[_0x2fb7b0(0x1df)]({ input: _0x545aed }),
            empReqTextarea[_0x2fb7b0(0x20a)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x557847(0x1c9)](_0x557847(0x1f0))
        [_0x557847(0x1c9)](_0x557847(0x22d))
        ["each"](function (_0x35a472) {
          const _0x3c5d50 = _0x557847;
          (skipTo = undefined),
            $(this)
              [_0x3c5d50(0x243)]("[data-skip-to]")
              [_0x3c5d50(0x1da)](_0x3c5d50(0x1c1)) !== "" &&
              (skipTo = $(this)
                [_0x3c5d50(0x243)](_0x3c5d50(0x1a9))
                [_0x3c5d50(0x1da)](_0x3c5d50(0x1c1))),
            $(this)
              [_0x3c5d50(0x243)](_0x3c5d50(0x21d))
              [_0x3c5d50(0x1e0)](_0x3c5d50(0x25e)) &&
              ((answer = $(this)
                ["parents"]("[data-go-to]")
                [_0x3c5d50(0x1e0)]("data-go-to")),
              (selections = selections["filter"](
                (_0x29c606) => _0x29c606[_0x3c5d50(0x1cf)] !== x
              )),
              selections[_0x3c5d50(0x1df)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x3c5d50(0x1df)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x3c5d50(0x1f9)](
                  (_0x8f1e6a) => _0x8f1e6a["step"] === x
                )),
                (selections[objIndex][_0x3c5d50(0x237)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x3c5d50(0x1ac)] = x)));
        }),
      $(steps[x])
        [_0x557847(0x1c9)](_0x557847(0x1f0))
        [_0x557847(0x1c9)](_0x557847(0x1b6))
        [_0x557847(0x1ca)](function (_0x54b59d) {
          const _0xd66234 = _0x557847;
          $(this)[_0xd66234(0x1fd)]() !== ""
            ? validateEmail(
                $(this)["val"](),
                $(this)[_0xd66234(0x1da)](_0xd66234(0x24e))
              )
            : (emailFilled = ![]);
        }),
      $(steps[x])
        [_0x557847(0x1c9)](_0x557847(0x1f0))
        [_0x557847(0x1c9)](_0x557847(0x221))
        [_0x557847(0x1ca)](function (_0x5bb66d) {
          const _0x23706c = _0x557847;
          (skipTo = undefined),
            $(this)
              [_0x23706c(0x243)]("[data-skip-to]")
              ["data"](_0x23706c(0x1c1)) !== "" &&
              (skipTo = $(this)
                [_0x23706c(0x243)](_0x23706c(0x1a9))
                [_0x23706c(0x1da)](_0x23706c(0x1c1))),
            $(this)
              [_0x23706c(0x243)](_0x23706c(0x21d))
              [_0x23706c(0x1e0)]("data-go-to") &&
              ((answer = $(this)
                ["parents"]("[data-go-to]")
                [_0x23706c(0x1e0)](_0x23706c(0x25e))),
              (selections = selections["filter"](
                (_0x448241) => _0x448241[_0x23706c(0x1cf)] !== x
              )),
              selections[_0x23706c(0x1df)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0x23706c(0x1f9)](
                  (_0x3975cc) => _0x3975cc["step"] === x
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x23706c(0x1ac)] = x)));
        });
  }
  $(steps[x])
    [_0x557847(0x1c9)](":input[type=\x22radio\x22]")
    ["is"](":checked") &&
    ((selArr = []),
    $(steps)
      [_0x557847(0x1c9)](_0x557847(0x20c))
      [_0x557847(0x1ca)](function (_0x52ab12, _0xe51c0f) {
        const _0x1f245e = _0x557847;
        selArr["push"]({
          selected: $(this)[_0x1f245e(0x1da)](_0x1f245e(0x23f)),
        });
      }),
    (selString = []),
    selArr[_0x557847(0x1eb)]((_0x3ce47a) =>
      selString[_0x557847(0x1df)](_0x3ce47a["selected"])
    ),
    (selections = selections[_0x557847(0x193)](
      (_0x1e91ba) => _0x1e91ba[_0x557847(0x1cf)] !== x
    )),
    $(steps[x])
      [_0x557847(0x1c9)](_0x557847(0x1f0))
      [_0x557847(0x1c9)](":input[type=\x27radio\x27]:checked")
      [_0x557847(0x1ca)](function () {
        const _0x4937f7 = _0x557847;
        skipTo = undefined;
        if (
          $(this)
            [_0x4937f7(0x243)](_0x4937f7(0x1a9))
            [_0x4937f7(0x1da)]("skip-to")
        )
          skipTo = $(this)["parents"](_0x4937f7(0x1a9))["data"]("skip-to");
        else
          $(this)[_0x4937f7(0x1da)](_0x4937f7(0x1c1)) &&
            (skipTo = $(this)[_0x4937f7(0x1da)](_0x4937f7(0x1c1)));
        if ($(this)[_0x4937f7(0x1da)](_0x4937f7(0x228)))
          (answer = $(this)[_0x4937f7(0x1e0)]("data-go-to")),
            selections[_0x4937f7(0x1df)]({ step: x, selected: answer }),
            console[_0x4937f7(0x1ab)](skipTo),
            skipTo &&
              (selections[_0x4937f7(0x1df)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections["findIndex"](
                (_0x4b95fd) => _0x4b95fd[_0x4937f7(0x1cf)] === x
              )),
              (selections[objIndex][_0x4937f7(0x237)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x4937f7(0x1ac)] = x));
        else
          $(this)
            ["parents"](_0x4937f7(0x21d))
            [_0x4937f7(0x1da)](_0x4937f7(0x228)) &&
            ((answer = $(this)
              ["parents"](_0x4937f7(0x21d))
              [_0x4937f7(0x1da)](_0x4937f7(0x228))),
            selections[_0x4937f7(0x1df)]({ step: x, selected: answer }),
            console[_0x4937f7(0x1ab)](skipTo),
            skipTo &&
              (selections[_0x4937f7(0x1df)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0x4937f7(0x1f9)](
                (_0x1ce594) => _0x1ce594["step"] === x
              )),
              (selections[objIndex][_0x4937f7(0x237)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x4937f7(0x1ac)] = x)));
      }),
    logicExtra
      ? ($(steps[x])
          [_0x557847(0x1c9)](_0x557847(0x1f0))
          [_0x557847(0x1c9)](_0x557847(0x204))
          ["data"](_0x557847(0x1a4)) === !![] ||
          $(steps[x])
            [_0x557847(0x1c9)]("[data-answer][data-radio-skip]:visible")
            ["data"](_0x557847(0x1a4)) === !![]) &&
        skip &&
        selections[_0x557847(0x193)](
          (_0x3bbb9e) => _0x3bbb9e[_0x557847(0x1cf)] === x
        )[_0x557847(0x20a)] > 0x0 &&
        (console[_0x557847(0x1ab)]("radio\x20skip\x20true"),
        textareaLength === 0x0 &&
          textInputLength === 0x0 &&
          emailInputLength === 0x0 &&
          checkboxInputLength === 0x0 &&
          setTimeout(function () {
            (next = !![]), nextStep(), selectionQuiz();
          }, $(steps[x])
            [_0x557847(0x1c9)](_0x557847(0x20b))
            ["data"](_0x557847(0x1b4))))
      : $(steps[x])
          [_0x557847(0x1c9)](_0x557847(0x204))
          [_0x557847(0x1da)]("radio-skip") === !![] &&
        (console[_0x557847(0x1ab)]("skip", skip),
        skip &&
          textareaLength === 0x0 &&
          textInputLength === 0x0 &&
          emailInputLength === 0x0 &&
          checkboxInputLength === 0x0 &&
          setTimeout(function () {
            (next = !![]), nextStep(), selectionQuiz();
          }, $(steps[x])
            [_0x557847(0x1c9)](_0x557847(0x20b))
            [_0x557847(0x1da)](_0x557847(0x1b4)))),
    console[_0x557847(0x1ab)](selections)),
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
function _0x409a(_0x46a79c, _0x3323ba) {
  const _0x3db061 = _0x3db0();
  return (
    (_0x409a = function (_0x409a45, _0x21d715) {
      _0x409a45 = _0x409a45 - 0x191;
      let _0x2509fd = _0x3db061[_0x409a45];
      return _0x2509fd;
    }),
    _0x409a(_0x46a79c, _0x3323ba)
  );
}
function nextStep() {
  const _0x10b9a2 = _0xc8d8f0;
  x++,
    countCard
      ? (console["log"](curStep),
        (curStep = curStep + 0x1),
        $("[data-text=\x22total-steps\x22]")[_0x10b9a2(0x264)](
          steps[_0x10b9a2(0x20a)]
        ))
      : $(steps[x])[_0x10b9a2(0x1da)]("card")
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    $(_0x10b9a2(0x21a))[_0x10b9a2(0x264)](curStep),
    x > progress && (progress = x),
    x <= steps[_0x10b9a2(0x20a)] - 0x1 &&
      (updateStep(), memory && saveFilledInput());
}
function backStep() {
  const _0x3d3766 = _0xc8d8f0;
  countCard
    ? ((curStep = curStep - 0x1),
      console[_0x3d3766(0x1ab)](curStep),
      $(_0x3d3766(0x1c4))[_0x3d3766(0x264)](steps[_0x3d3766(0x20a)]))
    : $(steps[x])["data"](_0x3d3766(0x22f))
    ? (curStep = curStep - 0x0)
    : (curStep = curStep - 0x1),
    $(_0x3d3766(0x21a))["text"](curStep),
    x > 0x0 &&
      ($(progressbar[x])["removeClass"](_0x3d3766(0x1c0)),
      selections["filter"]((_0x32fd4a) => _0x32fd4a["skipTo"] === x)["length"] >
      0x0
        ? (x = parseInt(
            getSafe(
              () =>
                selections[_0x3d3766(0x193)](
                  (_0x15a498) => _0x15a498["skipTo"] === x
                )[0x0][_0x3d3766(0x1ac)]
            )
          ))
        : x--,
      updateStep());
}
function selectionQuiz() {
  const _0xe4ff6f = _0xc8d8f0;
  if ($(this)["find"](_0xe4ff6f(0x247))) {
    $("[data-selection]")[_0xe4ff6f(0x21f)]();
    if (weightedSelection) {
      let _0x7928d9 = 0x0;
      selArr[_0xe4ff6f(0x1eb)](function (_0x129f8c) {
        const _0x5783ab = _0xe4ff6f;
        _0x7928d9 = _0x7928d9 + _0x129f8c[_0x5783ab(0x23f)];
      }),
        $(_0xe4ff6f(0x20d) + _0x7928d9 + "\x22]")[_0xe4ff6f(0x20a)] > 0x0
          ? $("[data-selection=\x22" + _0x7928d9 + "\x22]")["fadeIn"]()
          : $(_0xe4ff6f(0x201))[_0xe4ff6f(0x252)]();
    } else {
      let _0x597a75 = -0x1;
      $(_0xe4ff6f(0x268))[_0xe4ff6f(0x1ca)](function (_0x35708c) {
        const _0x3ef2d5 = _0xe4ff6f;
        $($("[data-selection]")[_0x35708c])
          [_0x3ef2d5(0x1da)](_0x3ef2d5(0x1b1))
          [_0x3ef2d5(0x196)](selString[_0x3ef2d5(0x1c5)]()) &&
          (_0x597a75 = _0x35708c);
      }),
        _0x597a75 > -0x1
          ? $($("[data-selection]")[_0x597a75])[_0xe4ff6f(0x252)]()
          : $(_0xe4ff6f(0x201))[_0xe4ff6f(0x252)]();
    }
  }
}
function triggerInputAllData() {
  const _0x856f10 = _0xc8d8f0;
  savedFilledInput &&
    memory &&
    (console[_0x856f10(0x1ab)](_0x856f10(0x22e)),
    savedFilledInput["forEach"]((_0x439d0f) => {
      const _0x50bf9a = _0x856f10;
      if (
        $(
          _0x50bf9a(0x235) +
            _0x439d0f[_0x50bf9a(0x1e6)] +
            "\x22][value=\x22" +
            _0x439d0f[_0x50bf9a(0x1fc)] +
            "\x22]"
        )[_0x50bf9a(0x1e0)](_0x50bf9a(0x216)) === _0x50bf9a(0x23b)
      )
        $(
          "input[name=\x22" +
            _0x439d0f[_0x50bf9a(0x1e6)] +
            _0x50bf9a(0x19c) +
            _0x439d0f[_0x50bf9a(0x1fc)] +
            "\x22]"
        )[_0x50bf9a(0x1d4)](_0x50bf9a(0x1ec));
      else
        _0x439d0f[_0x50bf9a(0x1fc)] === "on"
          ? $(_0x50bf9a(0x235) + _0x439d0f[_0x50bf9a(0x1e6)] + "\x22]")[
              _0x50bf9a(0x1d4)
            ](_0x50bf9a(0x1ec))
          : ($(_0x50bf9a(0x235) + _0x439d0f["inputName"] + "\x22]")[
              _0x50bf9a(0x1d4)
            ](_0x50bf9a(0x1ec)),
            $(_0x50bf9a(0x235) + _0x439d0f[_0x50bf9a(0x1e6)] + "\x22]")[
              _0x50bf9a(0x1d4)
            ]("change"));
    }));
}
$(_0xc8d8f0(0x1e8))["on"](_0xc8d8f0(0x24a), function () {
  scrollTop(), (next = !![]), nextStep(), selectionQuiz();
}),
  $(_0xc8d8f0(0x265))["on"](_0xc8d8f0(0x24a), function () {
    scrollTop(), (next = ![]), (back = !![]), backStep();
  }),
  $(steps)
    [_0xc8d8f0(0x1c9)](_0xc8d8f0(0x25a))
    ["on"](_0xc8d8f0(0x1ec), function (_0x2988d1) {
      validation();
    }),
  $(steps)
    [_0xc8d8f0(0x1c9)](_0xc8d8f0(0x1ed))
    ["on"](_0xc8d8f0(0x24a), () => {
      skip = !![];
    }),
  $(steps)["find"](":radio")["on"](_0xc8d8f0(0x24a), validation());
$(_0xc8d8f0(0x24b))[_0xc8d8f0(0x1da)]("clickable-all")
  ? $(_0xc8d8f0(0x1fa))["removeClass"](_0xc8d8f0(0x1a1))
  : $(_0xc8d8f0(0x1fa))[_0xc8d8f0(0x267)](_0xc8d8f0(0x1a1));
function clickableIndicator() {
  const _0x2f7c38 = _0xc8d8f0;
  $("[data-form=\x22progress-indicator\x22]")["removeClass"]("current"),
    $(_0x2f7c38(0x226))["data"](_0x2f7c38(0x219)) &&
      ($(_0x2f7c38(0x226))[_0x2f7c38(0x1da)](_0x2f7c38(0x1c7))
        ? ((x = $(this)[_0x2f7c38(0x214)]()), updateStep())
        : $(this)[_0x2f7c38(0x214)]() <= progress &&
          ((x = $(this)[_0x2f7c38(0x214)]()), updateStep()));
}
$("[data-form=\x22custom-progress-indicator\x22]")["on"](
  "click",
  clickableIndicator
);
$(_0xc8d8f0(0x241))[_0xc8d8f0(0x1da)](_0xc8d8f0(0x25d)) &&
  (console[_0xc8d8f0(0x1ab)]("debug\x20mode"),
  $(_0xc8d8f0(0x21d))[_0xc8d8f0(0x1ca)](function () {
    const _0x219ec6 = _0xc8d8f0;
    $(this)[_0x219ec6(0x1ff)](
      _0x219ec6(0x227),
      $(this)[_0x219ec6(0x1da)](_0x219ec6(0x228))
    );
  }),
  $(_0xc8d8f0(0x1be))["each"](function () {
    const _0x5ac822 = _0xc8d8f0;
    $(this)[_0x5ac822(0x1ff)](
      _0x5ac822(0x195),
      $(this)["data"](_0x5ac822(0x262))
    );
  }));
$(_0xc8d8f0(0x1d1))["on"]("click", function (_0x3d0804) {
  const _0x46dc4e = _0xc8d8f0;
  $(this)[_0x46dc4e(0x1da)](_0x46dc4e(0x24c)) &&
    (redirectTo = $(this)["data"](_0x46dc4e(0x24c))),
    console[_0x46dc4e(0x1ab)]($(this)[_0x46dc4e(0x1da)](_0x46dc4e(0x25f))),
    !$(this)[_0x46dc4e(0x1da)](_0x46dc4e(0x25f)) &&
      (newTab = $(this)["data"]("new-tab")),
    console[_0x46dc4e(0x1ab)]("newTab", newTab),
    (successCard = $(this)[_0x46dc4e(0x1da)](_0x46dc4e(0x244))),
    _0x3d0804[_0x46dc4e(0x192)](),
    _0x3d0804["stopPropagation"](),
    logicExtra &&
      ($(this)["prop"](_0x46dc4e(0x22c), !![]),
      $(steps)
        [_0x46dc4e(0x1c9)](_0x46dc4e(0x25a))
        [_0x46dc4e(0x21b)](_0x46dc4e(0x1e9), ![]),
      console[_0x46dc4e(0x1ab)](_0x46dc4e(0x1fe))),
    $("[data-cms-select=cms]")[_0x46dc4e(0x1ca)](function () {
      const _0x329e3f = _0x46dc4e,
        _0x7d2ad9 = $(this)[_0x329e3f(0x1c9)](_0x329e3f(0x215)),
        _0x1ca4ef = [];
      console[_0x329e3f(0x1ab)](_0x1ca4ef),
        _0x7d2ad9[_0x329e3f(0x1ca)](function () {
          const _0xd75003 = _0x329e3f;
          _0x1ca4ef[_0xd75003(0x1df)]($(this)[_0xd75003(0x264)]()["trim"]());
        });
      const _0x16740 = $(this)[_0x329e3f(0x202)]("[data-cms-select=input]");
      $["each"](_0x1ca4ef, function (_0x4093bb, _0x39b921) {
        const _0x835af0 = _0x329e3f,
          _0x5d9d49 = $(_0x835af0(0x1d6))
            [_0x835af0(0x1fd)](_0x39b921)
            ["text"](_0x39b921);
        _0x16740["append"](_0x5d9d49);
      });
    }),
    localStorage[_0x46dc4e(0x1f4)]("filledInput"),
    fill &&
      ($(this)[_0x46dc4e(0x1da)](_0x46dc4e(0x1ae))
        ? $(this)[_0x46dc4e(0x1fd)]($(this)[_0x46dc4e(0x1da)](_0x46dc4e(0x1ae)))
        : ($(this)[_0x46dc4e(0x1fd)](_0x46dc4e(0x1aa)),
          $(this)["text"](_0x46dc4e(0x1aa))),
      $(_0x46dc4e(0x241))[_0x46dc4e(0x1c3)]());
});
function resetFormly() {
  const _0x280567 = _0xc8d8f0;
  $(_0x280567(0x241))[_0x280567(0x1d4)](_0x280567(0x194)),
    $(_0x280567(0x241))
      ["parents"]()
      [_0x280567(0x1c9)](".w-form-done")
      [_0x280567(0x21f)](),
    (x = 0x0),
    updateStep(),
    $(_0x280567(0x241))[_0x280567(0x213)](),
    $(_0x280567(0x1d1))["text"](oldSubmitText),
    $(_0x280567(0x1d1))[_0x280567(0x1fd)](oldSubmitText),
    $("[data-text=\x22current-step\x22]")[_0x280567(0x264)](0x1),
    $(_0x280567(0x241))
      [_0x280567(0x1c9)](_0x280567(0x1e7))
      [_0x280567(0x202)](".w-checkbox-input")
      [_0x280567(0x191)](_0x280567(0x206));
}
$(document)[_0xc8d8f0(0x1db)](function (_0x4113bf, _0x396c6a, _0x50e510) {
  const _0x2ccb6e = _0xc8d8f0;
  if (_0x50e510["url"][_0x2ccb6e(0x196)]("https://webflow.com/api/v1/form/")) {
    const _0x1bd8f4 = _0x396c6a["status"] === 0xc8,
      _0x436621 = "redirect-form-hehexd";
    console["log"](_0x2ccb6e(0x244), _0x1bd8f4),
      console[_0x2ccb6e(0x1ab)](redirectTo),
      redirectTo &&
        _0x1bd8f4 &&
        (newTab
          ? window[_0x2ccb6e(0x20e)](redirectTo, _0x2ccb6e(0x200))
          : (location[_0x2ccb6e(0x1bc)] = redirectTo)),
      console["log"](successCard),
      _0x1bd8f4 &&
        successCard !== "" &&
        $("[data-success-card=\x22" + successCard + "\x22]")[
          _0x2ccb6e(0x252)
        ](),
      _0x1bd8f4 &&
        formReset &&
        setTimeout(() => {
          resetFormly();
        }, resetDelay);
  }
}),
  $(_0xc8d8f0(0x266))["on"]("click", function () {
    const _0x53ecb2 = _0xc8d8f0;
    (back = !![]),
      (x = $(this)[_0x53ecb2(0x1da)]("edit-step") - 0x1),
      updateStep(),
      countCard
        ? ((curStep = x + 0x1),
          console[_0x53ecb2(0x1ab)](curStep),
          $(_0x53ecb2(0x1c4))["text"](steps[_0x53ecb2(0x20a)]))
        : $(steps[x])[_0x53ecb2(0x1da)]("card")
        ? (curStep = x + 0x0)
        : (curStep = x + 0x1),
      $(_0x53ecb2(0x21a))[_0x53ecb2(0x264)](curStep),
      (back = ![]);
  }),
  $(_0xc8d8f0(0x1e5))["on"]("click", function () {
    const _0x51e291 = _0xc8d8f0;
    $(_0x51e291(0x241))["trigger"](_0x51e291(0x194));
    let _0x1aa005 = $(this);
    $(this)[_0x51e291(0x264)](_0x51e291(0x1aa)),
      setTimeout(function () {
        const _0x251f4f = _0x51e291;
        $(_0x1aa005)[_0x251f4f(0x264)](oldResetText),
          $(_0x1aa005)[_0x251f4f(0x243)](".w-form-done")[_0x251f4f(0x21f)](),
          (x = 0x0),
          updateStep(),
          $(_0x251f4f(0x241))[_0x251f4f(0x213)](),
          $(_0x251f4f(0x1d1))[_0x251f4f(0x264)](oldSubmitText),
          $(_0x251f4f(0x1d1))[_0x251f4f(0x1fd)](oldSubmitText),
          $(_0x1aa005)[_0x251f4f(0x1fd)](oldSubmitText),
          $(_0x251f4f(0x21a))[_0x251f4f(0x264)](0x1),
          $(_0x251f4f(0x241))
            [_0x251f4f(0x1c9)](_0x251f4f(0x1e7))
            [_0x251f4f(0x202)](".w-checkbox-input")
            [_0x251f4f(0x191)](_0x251f4f(0x206));
      }, resetDelay);
  }),
  $(_0xc8d8f0(0x1f2))["on"]("keypress", function (_0x383e83) {
    const _0x4e2f13 = _0xc8d8f0;
    _0x383e83[_0x4e2f13(0x248)] === 0xd &&
      fill &&
      (console[_0x4e2f13(0x1ab)](_0x4e2f13(0x1b8)),
      $(_0x4e2f13(0x19a))[_0x4e2f13(0x1da)](_0x4e2f13(0x1b8))
        ? (totalSteps > curStep && $(_0x4e2f13(0x1e8))[0x0][_0x4e2f13(0x24a)](),
          _0x383e83[_0x4e2f13(0x192)](),
          _0x383e83["stopPropagation"]())
        : (_0x383e83[_0x4e2f13(0x192)](), _0x383e83[_0x4e2f13(0x239)]()));
  }),
  $(_0xc8d8f0(0x1f2))[_0xc8d8f0(0x223)](function (_0xe865ab) {
    const _0x5e569d = _0xc8d8f0;
    (_0xe865ab["metaKey"] || _0xe865ab[_0x5e569d(0x1b2)]) &&
      _0xe865ab["keyCode"] == 0xd &&
      (x >= steps["length"] - 0x1 && fill
        ? $(steps[x])["find"](_0x5e569d(0x1bb))[_0x5e569d(0x24a)]()
        : (event["preventDefault"](), event[_0x5e569d(0x239)]()));
  }),
  $(_0xc8d8f0(0x22d))[_0xc8d8f0(0x21e)](function (_0x17c437) {
    const _0x594343 = _0xc8d8f0;
    $(this)[_0x594343(0x1d5)](),
      _0x17c437["key"] == _0x594343(0x1a0) &&
        (_0x17c437["preventDefault"](), _0x17c437[_0x594343(0x239)]()),
      _0x17c437[_0x594343(0x218)] &&
        _0x17c437["key"] == _0x594343(0x1a0) &&
        $(this)[_0x594343(0x1fd)]($(this)[_0x594343(0x1fd)]() + "\x0a");
  }),
  $(_0xc8d8f0(0x241))
    ["find"](_0xc8d8f0(0x25a))
    ["on"](_0xc8d8f0(0x1ec), function () {
      const _0x5cbf90 = _0xc8d8f0;
      (all_data = all_data[_0x5cbf90(0x193)](
        (_0x515d30) =>
          _0x515d30[_0x5cbf90(0x256)] !==
          $(this)[_0x5cbf90(0x1da)](_0x5cbf90(0x1d3))
      )),
        $(this)[_0x5cbf90(0x1e0)](_0x5cbf90(0x216)) === _0x5cbf90(0x1ee)
          ? all_data[_0x5cbf90(0x1df)]({
              field: $(this)[_0x5cbf90(0x1e0)]("name"),
              value: $(this)
                [_0x5cbf90(0x202)](_0x5cbf90(0x24d))
                [_0x5cbf90(0x264)](),
            })
          : all_data[_0x5cbf90(0x1df)]({
              field: $(this)[_0x5cbf90(0x1e0)](_0x5cbf90(0x1d3)),
              value: $(this)["val"](),
            }),
        all_data[_0x5cbf90(0x1eb)](function (_0x284936) {
          const _0x3396f4 = _0x5cbf90;
          $(_0x3396f4(0x1d9) + _0x284936[_0x3396f4(0x256)] + "\x22]")[
            "fadeIn"
          ](),
            $(_0x3396f4(0x1d9) + _0x284936[_0x3396f4(0x256)] + "\x22]")["text"](
              _0x284936[_0x3396f4(0x1fc)]
            );
        });
    }),
  $(_0xc8d8f0(0x241))
    [_0xc8d8f0(0x1c9)](_0xc8d8f0(0x22d))
    ["on"](_0xc8d8f0(0x1ec), function () {
      const _0x1172a1 = _0xc8d8f0;
      (all_data = all_data["filter"](
        (_0x1b0c62) =>
          _0x1b0c62[_0x1172a1(0x256)] !== $(this)["attr"](_0x1172a1(0x1d3))
      )),
        console[_0x1172a1(0x1ab)](all_data),
        all_data["push"]({
          field: $(this)["attr"](_0x1172a1(0x1d3)),
          value: $(this)[_0x1172a1(0x1fd)](),
        }),
        all_data[_0x1172a1(0x1eb)](function (_0x42a156) {
          const _0x32fed5 = _0x1172a1;
          $(_0x32fed5(0x1d9) + _0x42a156["field"] + "\x22]")[
            _0x32fed5(0x252)
          ](),
            $(_0x32fed5(0x1d9) + _0x42a156[_0x32fed5(0x256)] + "\x22]")[
              _0x32fed5(0x264)
            ](_0x42a156[_0x32fed5(0x1fc)]);
        });
    }),
  $("[data-form=\x22multistep\x22]")
    [_0xc8d8f0(0x1c9)](_0xc8d8f0(0x230))
    ["on"](_0xc8d8f0(0x249), function () {
      const _0x3c161a = _0xc8d8f0;
      (all_data = all_data[_0x3c161a(0x193)](
        (_0x5f1c25) =>
          _0x5f1c25[_0x3c161a(0x256)] !== $(this)[_0x3c161a(0x1e0)]("name")
      )),
        all_data["push"]({
          field: $(this)[_0x3c161a(0x1e0)]("name"),
          value: $(this)["val"](),
        }),
        all_data[_0x3c161a(0x1eb)](function (_0x6653b8) {
          const _0x4d5323 = _0x3c161a;
          $("[data-input-field=\x22" + _0x6653b8[_0x4d5323(0x256)] + "\x22]")[
            _0x4d5323(0x252)
          ](),
            $("[data-input-field=\x22" + _0x6653b8[_0x4d5323(0x256)] + "\x22]")[
              _0x4d5323(0x264)
            ](_0x6653b8[_0x4d5323(0x1fc)]);
        });
    }),
  updateStep(),
  triggerInputAllData();
