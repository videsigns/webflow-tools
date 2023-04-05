//5-4-23

const _0x1a1dc3 = _0x269d;
(function (_0x2c99aa, _0x4331cb) {
  const _0x1e2756 = _0x269d,
    _0x2f881f = _0x2c99aa();
  while (!![]) {
    try {
      const _0x3ee721 =
        (parseInt(_0x1e2756(0x24d)) / 0x1) *
          (-parseInt(_0x1e2756(0x25e)) / 0x2) +
        parseInt(_0x1e2756(0x249)) / 0x3 +
        (-parseInt(_0x1e2756(0x1a8)) / 0x4) *
          (parseInt(_0x1e2756(0x21a)) / 0x5) +
        -parseInt(_0x1e2756(0x1cd)) / 0x6 +
        -parseInt(_0x1e2756(0x236)) / 0x7 +
        -parseInt(_0x1e2756(0x20e)) / 0x8 +
        parseInt(_0x1e2756(0x231)) / 0x9;
      if (_0x3ee721 === _0x4331cb) break;
      else _0x2f881f["push"](_0x2f881f["shift"]());
    } catch (_0x12d556) {
      _0x2f881f["push"](_0x2f881f["shift"]());
    }
  }
})(_0x41e9, 0xb3cf7);
let x = 0x0,
  curStep = 0x0,
  steps = $(_0x1a1dc3(0x1a9)),
  progressbarClone = $(_0x1a1dc3(0x241))["clone"](),
  progressbar,
  countCard = $(_0x1a1dc3(0x1df))[_0x1a1dc3(0x1b1)]("count-card"),
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
  empReqfile = [],
  empReqNum = [],
  empReqTel = [],
  reinitIX = $(_0x1a1dc3(0x211))["data"](_0x1a1dc3(0x20d)),
  textareaLength = 0x0,
  textInputLength = 0x0,
  emailInputLength = 0x0,
  selectInputLength = 0x0,
  checkboxInputLength = 0x0,
  filledInput = [],
  savedFilledInput = JSON["parse"](
    localStorage[_0x1a1dc3(0x245)](_0x1a1dc3(0x232))
  ),
  memory = $(_0x1a1dc3(0x1c1))[_0x1a1dc3(0x1b1)](_0x1a1dc3(0x1fa)),
  quiz = $(_0x1a1dc3(0x19c))[_0x1a1dc3(0x1b1)](_0x1a1dc3(0x1c6)),
  progress = 0x0;
const urlFormly = new URL(window["location"][_0x1a1dc3(0x25d)]);
let params = $(_0x1a1dc3(0x1d1))[_0x1a1dc3(0x1b1)](_0x1a1dc3(0x1d2)),
  skipTo = 0x0,
  next = ![],
  back = ![],
  selArr = [],
  selString = [],
  emptyInput = 0x0,
  searchQ = [],
  domainAllowed = !![],
  dom = [],
  logicExtra = $(_0x1a1dc3(0x1c5))[_0x1a1dc3(0x1b1)](_0x1a1dc3(0x24f)),
  oldSubmitText = $("[data-form=\x22submit-btn\x22]")[_0x1a1dc3(0x1d8)](),
  oldResetText = $("[data-btn=\x22reset\x22]")[_0x1a1dc3(0x244)](),
  formReset = $(_0x1a1dc3(0x1c5))[_0x1a1dc3(0x1b1)](_0x1a1dc3(0x23a)),
  successCard = "";
$(progressbarClone)["removeClass"]("current"),
  $(_0x1a1dc3(0x260))[_0x1a1dc3(0x1d6)]()[_0x1a1dc3(0x21e)](),
  $(_0x1a1dc3(0x259))[_0x1a1dc3(0x1cf)](),
  steps[_0x1a1dc3(0x22f)](function () {
    const _0x826b26 = _0x1a1dc3;
    $(_0x826b26(0x260))[_0x826b26(0x1b7)](
      progressbarClone["clone"](!![], !![])
    );
  });
countCard
  ? ((curStep = curStep + 0x1),
    $(_0x1a1dc3(0x268))[_0x1a1dc3(0x244)](steps["length"]))
  : ($(steps[x])[_0x1a1dc3(0x1b1)]("card")
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    $("[data-text=\x22total-steps\x22]")["text"](
      $("[data-form=\x22step\x22]:not([data-card=\x22true\x22])")[
        _0x1a1dc3(0x210)
      ]
    ),
    $(_0x1a1dc3(0x225))[_0x1a1dc3(0x22f)](function () {
      const _0x202836 = _0x1a1dc3;
      $($(_0x202836(0x241))[$(this)[_0x202836(0x265)]()])["hide"]();
    }));
(progressbar = $(_0x1a1dc3(0x260))[_0x1a1dc3(0x1d6)]()),
  $(_0x1a1dc3(0x241))["on"](_0x1a1dc3(0x1b8), clickableIndicator),
  $("[data-text=\x22current-step\x22]")[_0x1a1dc3(0x244)](curStep),
  steps[_0x1a1dc3(0x1cf)](),
  $("[data-success-card]")[_0x1a1dc3(0x1cf)](),
  $(_0x1a1dc3(0x24c))["each"](function () {
    const _0x4f6b65 = _0x1a1dc3;
    $(this)[_0x4f6b65(0x200)](_0x4f6b65(0x1f8), "button");
  });
function _0x41e9() {
  const _0x38abf5 = [
    "0.4",
    "input[value=\x22",
    "Please\x20wait...",
    "ix2",
    ":input[type=\x22email\x22]",
    "ajaxComplete",
    "6931452MjguPA",
    "body",
    "hide",
    "w--redirected-checked",
    "[data-query-param]",
    "query-param",
    "\x22][value=\x22",
    "success",
    ":checked",
    "children",
    "log",
    "val",
    ".w-radio-input",
    "radio",
    "[type=\x22submit\x22]",
    ":input[type=\x22radio\x22]",
    "location",
    "submit",
    "[data-count-card]",
    "forEach",
    ":input[type=\x22number\x22][required]",
    "none",
    "Webflow",
    "filter",
    "radio-delay",
    "multistep-redirect",
    "[data-form=\x22back-btn\x22]",
    "not",
    "go-to",
    "input[type=\x22email\x22]:visible",
    "preventDefault",
    "show",
    "shiftKey",
    ":input",
    "block-domain",
    ":input[type=\x22checkbox\x22]:checked",
    "debug\x20mode",
    "answer",
    "[data-form=\x22custom-progress-indicator\x22]",
    "trigger",
    "[data-selection=\x22other\x22]",
    "[data-form=\x22submit\x22]:visible",
    "data-go-to",
    "type",
    "replaceState",
    "memory",
    "[data-text=\x22current-step\x22]",
    "input[name=\x22",
    ":radio",
    "history",
    "textarea",
    "attr",
    "select",
    "clickable",
    "nonvalidated",
    ":input[required]",
    "stringify",
    "find",
    "[data-selection=\x22",
    "radio-skip",
    "<br>Data\x20Go\x20To\x20=\x20",
    "push",
    "prop",
    "edit-step",
    "reinit",
    "1494960PzbcTR",
    "[type=\x22radio\x22]",
    "length",
    "[data-reinit]",
    "inputName",
    "input[type=\x22submit\x22]",
    "selection",
    "slow",
    "<br>Data\x20Answer\x20=\x20",
    "[data-btn=\x22reset\x22]",
    "split",
    "option[value=\x22",
    "1035570tPhhvw",
    ":input[type=\x22radio\x22][required]",
    "[data-enter]",
    "destroy",
    "remove",
    "[data-btn=\x22check\x22]",
    "textarea[required]",
    "Enter",
    "[data-selection]",
    "<option>",
    "input[type=\x22text\x22][required]:visible",
    "[data-form=\x22step\x22][data-card]",
    "wait",
    "data-radio-skip",
    "dispatchEvent",
    "keydown",
    "checkbox",
    "card",
    "current",
    "setItem",
    ":input[type=\x22file\x22]",
    "each",
    "clickable-all",
    "32009895CjwRYZ",
    "filledInput",
    "input:checkbox",
    "step",
    "stopPropagation",
    "2702518eStqdA",
    "[data-clickable-all]",
    "[data-answer]:visible",
    "[data-success-card=\x22",
    "reset",
    "input:radio[required]",
    "[data-answer]",
    "name",
    "parents",
    "skipTo",
    "backTo",
    "[data-form=\x22progress-indicator\x22]",
    "select[required]",
    "require",
    "text",
    "getItem",
    "[data-btn=\x22edit\x22]",
    "selected",
    "textarea[name=\x22",
    "1405971VFTZLk",
    ":input[type=\x22checkbox\x22]",
    "textarea[required]:visible",
    "[data-form=\x22next-btn\x22][type=\x22submit\x22]",
    "1VOATuf",
    "skip-to",
    "logic-extra",
    "input[type=\x22radio\x22]",
    ":input[type=\x22text\x22]",
    ".w-form-formradioinput",
    "metaKey",
    "[data-form=\x22next-btn\x22]",
    "[data-radio-skip]:visible",
    "fadeIn",
    ":input[type=\x22tel\x22]",
    "key",
    "[data-form=\x22submit-btn\x22]",
    ":input[type=\x22email\x22][required]",
    "findIndex",
    "[type=\x22checkbox\x22]",
    "href",
    "635878mTsdIu",
    "removeClass",
    "[data-form=\x22progress\x22]",
    "input",
    ":input[type=\x22file\x22][required]",
    "siblings",
    "addClass",
    "index",
    "[data-form=\x22next-btn\x22][data-submit-show]",
    ":input[type=\x27radio\x27]:checked",
    "[data-text=\x22total-steps\x22]",
    "[data-quiz]",
    "removeItem",
    "includes",
    "input[type=\x22checkbox\x22]:visible",
    "redirect",
    "some",
    "keyCode",
    "css",
    "focus",
    ".w-checkbox-input",
    "redirect-form-hehexd",
    "searchParams",
    "24mgkeoY",
    "[data-form=\x22step\x22]",
    "[data-skip-to]",
    "select[name=\x22",
    "disabled",
    "test",
    "trim",
    "form[data-form=\x22multistep\x22]\x20:input",
    ":input[type=\x22text\x22][required]",
    "data",
    "[data-selected]:checked",
    "required",
    ":input[type=\x22tel\x22][required]",
    "[data-answer=\x22",
    "select[required]:visible",
    "append",
    "click",
    "[data-clickable]",
    "value",
    "[data-radio-delay]",
    "submit-show",
    "auto",
    "checked",
    "keypress",
    "set",
    "[data-memory]",
    "input:radio[name=\x22",
    "[data-go-to]",
    "https://webflow.com/api/v1/form/",
    "[data-form=\x22multistep\x22]",
    "quiz",
  ];
  _0x41e9 = function () {
    return _0x38abf5;
  };
  return _0x41e9();
}
function getParams() {
  const _0x2e7f31 = _0x1a1dc3;
  urlFormly[_0x2e7f31(0x1a7)]["forEach"](function (_0x6e22df, _0x4f994d) {
    searchQ["push"]({ val: _0x6e22df, key: _0x4f994d });
  });
}
function getSafe(_0x43269a, _0x8b602f) {
  try {
    return _0x43269a();
  } catch (_0x39605c) {
    return _0x8b602f;
  }
}
savedFilledInput &&
  memory &&
  savedFilledInput["forEach"]((_0x21f95e) => {
    const _0x5eb0bc = _0x1a1dc3;
    if (
      $(
        _0x5eb0bc(0x1fc) +
          _0x21f95e[_0x5eb0bc(0x212)] +
          _0x5eb0bc(0x1d3) +
          _0x21f95e[_0x5eb0bc(0x1ba)] +
          "\x22]"
      )["attr"](_0x5eb0bc(0x1f8)) === _0x5eb0bc(0x1da)
    )
      $(
        "input[name=\x22" +
          _0x21f95e[_0x5eb0bc(0x212)] +
          _0x5eb0bc(0x1d3) +
          _0x21f95e[_0x5eb0bc(0x1ba)] +
          "\x22]"
      )["click"](),
        $(
          _0x5eb0bc(0x1fc) +
            _0x21f95e["inputName"] +
            "\x22][value=\x22" +
            _0x21f95e[_0x5eb0bc(0x1ba)] +
            "\x22]"
        )
          ["siblings"](".w-radio-input")
          [_0x5eb0bc(0x264)]("w--redirected-checked");
    else
      _0x21f95e["value"] === "on"
        ? ($("input[name=\x22" + _0x21f95e["inputName"] + "\x22]")[
            _0x5eb0bc(0x1b8)
          ](),
          $(_0x5eb0bc(0x1fc) + _0x21f95e[_0x5eb0bc(0x212)] + "\x22]")
            [_0x5eb0bc(0x263)](_0x5eb0bc(0x1a5))
            ["addClass"](_0x5eb0bc(0x1d0)))
        : ($(_0x5eb0bc(0x1fc) + _0x21f95e[_0x5eb0bc(0x212)] + "\x22]")["val"](
            _0x21f95e[_0x5eb0bc(0x1ba)]
          ),
          $(_0x5eb0bc(0x248) + _0x21f95e["inputName"] + "\x22]")["val"](
            _0x21f95e[_0x5eb0bc(0x1ba)]
          ),
          $("select[name=\x22" + _0x21f95e[_0x5eb0bc(0x212)] + "\x22]")
            [_0x5eb0bc(0x206)](_0x5eb0bc(0x219) + _0x21f95e["value"] + "\x22]")
            [_0x5eb0bc(0x20b)]("selected", !![]));
  });
params &&
  (getParams(),
  searchQ[_0x1a1dc3(0x1e0)]((_0xbc1eb8) => {
    const _0x350fdf = _0x1a1dc3;
    console[_0x350fdf(0x1d7)](
      _0xbc1eb8,
      $(_0x350fdf(0x1c8) + _0xbc1eb8[_0x350fdf(0x1d8)] + "\x22]")[
        _0x350fdf(0x200)
      ](_0x350fdf(0x1f8))
    );
    if (
      $(
        _0x350fdf(0x1fc) +
          _0xbc1eb8["key"] +
          _0x350fdf(0x1d3) +
          _0xbc1eb8[_0x350fdf(0x1d8)] +
          "\x22]"
      )[_0x350fdf(0x200)](_0x350fdf(0x1f8)) === _0x350fdf(0x1da)
    )
      $(
        _0x350fdf(0x1fc) +
          _0xbc1eb8["key"] +
          "\x22][value=\x22" +
          _0xbc1eb8[_0x350fdf(0x1d8)] +
          "\x22]"
      )["click"](),
        $(
          "input[name=\x22" +
            _0xbc1eb8["key"] +
            "\x22][value=\x22" +
            _0xbc1eb8[_0x350fdf(0x1d8)] +
            "\x22]"
        )
          [_0x350fdf(0x263)](_0x350fdf(0x1d9))
          [_0x350fdf(0x264)]("w--redirected-checked");
    else
      _0xbc1eb8[_0x350fdf(0x1d8)] === "on"
        ? ($(_0x350fdf(0x1fc) + _0xbc1eb8[_0x350fdf(0x258)] + "\x22]")[
            _0x350fdf(0x1b8)
          ](),
          $(_0x350fdf(0x1fc) + _0xbc1eb8[_0x350fdf(0x258)] + "\x22]")
            [_0x350fdf(0x263)](_0x350fdf(0x1a5))
            ["addClass"](_0x350fdf(0x1d0)))
        : ($(_0x350fdf(0x1fc) + _0xbc1eb8[_0x350fdf(0x258)] + "\x22]")["val"](
            _0xbc1eb8[_0x350fdf(0x1d8)]
          ),
          $(_0x350fdf(0x248) + _0xbc1eb8[_0x350fdf(0x258)] + "\x22]")[
            _0x350fdf(0x1d8)
          ](_0xbc1eb8[_0x350fdf(0x1d8)]),
          $(_0x350fdf(0x1ab) + _0xbc1eb8[_0x350fdf(0x258)] + "\x22]")
            [_0x350fdf(0x206)](
              "option[value=\x22" + _0xbc1eb8[_0x350fdf(0x1d8)] + "\x22]"
            )
            [_0x350fdf(0x20b)]("selected", !![]));
  }));
function _0x269d(_0x2af293, _0x503c4b) {
  const _0x41e97d = _0x41e9();
  return (
    (_0x269d = function (_0x269d6f, _0x2ef82c) {
      _0x269d6f = _0x269d6f - 0x19c;
      let _0xa251ca = _0x41e97d[_0x269d6f];
      return _0xa251ca;
    }),
    _0x269d(_0x2af293, _0x503c4b)
  );
}
quiz &&
  steps[_0x1a1dc3(0x22f)](function () {
    const _0x16c3f6 = _0x1a1dc3;
    $(this)["children"]()[_0x16c3f6(0x200)](_0x16c3f6(0x227), !![]),
      $(this)[_0x16c3f6(0x1d6)]()[_0x16c3f6(0x200)]("data-radio-delay", 0xfa);
  });
function disableBtn() {
  const _0x3cb72c = _0x1a1dc3;
  (fill = ![]),
    $(_0x3cb72c(0x254))["css"]({
      opacity: _0x3cb72c(0x1c7),
      "pointer-events": _0x3cb72c(0x1e2),
    }),
    $(_0x3cb72c(0x254))[_0x3cb72c(0x264)](_0x3cb72c(0x1ac)),
    $("[data-form=\x22submit-btn\x22]")[_0x3cb72c(0x1a3)]({
      opacity: "0.4",
      "pointer-events": "none",
    }),
    $(_0x3cb72c(0x259))["addClass"](_0x3cb72c(0x1ac));
}
function enableBtn() {
  const _0x4ca666 = _0x1a1dc3;
  (fill = !![]),
    $(_0x4ca666(0x254))[_0x4ca666(0x1a3)]({
      "pointer-events": _0x4ca666(0x1bd),
      opacity: "1",
    }),
    $(_0x4ca666(0x254))[_0x4ca666(0x25f)]("disabled"),
    $("[data-form=\x22submit-btn\x22]")[_0x4ca666(0x1a3)]({
      "pointer-events": _0x4ca666(0x1bd),
      opacity: "1",
    }),
    $("[data-form=\x22submit-btn\x22]")[_0x4ca666(0x25f)](_0x4ca666(0x1ac));
}
function saveFilledInput() {
  const _0xba2b28 = _0x1a1dc3;
  $(_0xba2b28(0x1af))
    [_0xba2b28(0x1e8)](_0xba2b28(0x1db))
    [_0xba2b28(0x22f)](function () {
      const _0x46f07a = _0xba2b28;
      $(this)[_0x46f07a(0x200)](_0x46f07a(0x1f8)) === _0x46f07a(0x22a) ||
      $(this)[_0x46f07a(0x200)]("type") === _0x46f07a(0x1da)
        ? $(this)[_0x46f07a(0x20b)](_0x46f07a(0x1be)) &&
          (filledInput[_0x46f07a(0x1a1)](
            (_0x46ae1) =>
              _0x46ae1[_0x46f07a(0x212)] === $(this)[_0x46f07a(0x200)]("name")
          )
            ? ((filledInput = filledInput[_0x46f07a(0x1e4)](
                (_0x146b20) =>
                  _0x146b20[_0x46f07a(0x212)] !==
                  $(this)[_0x46f07a(0x200)](_0x46f07a(0x23d))
              )),
              $(this)[_0x46f07a(0x1d8)]() !== "" &&
                filledInput["push"]({
                  inputName: $(this)[_0x46f07a(0x200)](_0x46f07a(0x23d)),
                  value: $(this)["val"](),
                }))
            : $(this)[_0x46f07a(0x1d8)]() !== "" &&
              filledInput["push"]({
                inputName: $(this)["attr"](_0x46f07a(0x23d)),
                value: $(this)["val"](),
              }))
        : filledInput["some"](
            (_0xf568a1) =>
              _0xf568a1["inputName"] === $(this)["attr"](_0x46f07a(0x23d))
          )
        ? ((filledInput = filledInput[_0x46f07a(0x1e4)](
            (_0x2b0792) =>
              _0x2b0792[_0x46f07a(0x212)] !==
              $(this)[_0x46f07a(0x200)](_0x46f07a(0x23d))
          )),
          $(this)[_0x46f07a(0x1d8)]() !== "" &&
            filledInput[_0x46f07a(0x20a)]({
              inputName: $(this)["attr"]("name"),
              value: $(this)[_0x46f07a(0x1d8)](),
            }))
        : $(this)[_0x46f07a(0x1d8)]() !== "" &&
          filledInput[_0x46f07a(0x20a)]({
            inputName: $(this)[_0x46f07a(0x200)](_0x46f07a(0x23d)),
            value: $(this)[_0x46f07a(0x1d8)](),
          });
    }),
    filledInput &&
      filledInput[_0xba2b28(0x1e0)]((_0x517ede) => {
        const _0x321690 = _0xba2b28;
        urlFormly[_0x321690(0x1a7)]["delete"](_0x517ede[_0x321690(0x212)]),
          urlFormly[_0x321690(0x1a7)][_0x321690(0x1c0)](
            _0x517ede[_0x321690(0x212)],
            _0x517ede[_0x321690(0x1ba)]
          ),
          window[_0x321690(0x1fe)][_0x321690(0x1f9)](null, null, urlFormly);
      }),
    localStorage["removeItem"]("filledInput"),
    localStorage[_0xba2b28(0x22d)](
      _0xba2b28(0x232),
      JSON[_0xba2b28(0x205)](filledInput)
    );
}
function scrollTop() {}
function updateStep() {
  const _0x43753f = _0x1a1dc3;
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
  $(_0x43753f(0x1b9))["data"]("clickable") &&
    (steps["find"](_0x43753f(0x204))["each"](function () {
      const _0x12a8c = _0x43753f;
      $(
        $("[data-form=\x22custom-progress-indicator\x22]")[
          $(this)[_0x12a8c(0x23e)](_0x12a8c(0x1a9))[_0x12a8c(0x265)]()
        ]
      ),
        $(this)[_0x12a8c(0x1d8)]() === "" && emptyInput++;
    }),
    emptyInput > 0x0
      ? $("input[type=\x22submit\x22]")[_0x43753f(0x264)](_0x43753f(0x1ac))
      : $(_0x43753f(0x213))[_0x43753f(0x25f)](_0x43753f(0x1ac)));
  $(_0x43753f(0x1f3))[_0x43753f(0x25f)](_0x43753f(0x22c)),
    $($(_0x43753f(0x1f3))[x])[_0x43753f(0x264)](_0x43753f(0x22c)),
    (selection = selections["filter"](
      (_0x294a08) => _0x294a08[_0x43753f(0x234)] === x - 0x1
    ));
  next &&
    (x = getSafe(() => selection[0x0]["skipTo"])
      ? parseInt(getSafe(() => selection[0x0][_0x43753f(0x23f)]))
      : x);
  $("[data-answer]")[_0x43753f(0x1cf)](), steps["hide"]();
  reinitIX === !![] && window["Webflow"][_0x43753f(0x21d)]();
  $(progressbar)["removeClass"](_0x43753f(0x22c));
  for (i = 0x0; i <= x; i++) {
    countCard
      ? $(progressbar[i])["addClass"](_0x43753f(0x22c))
      : !$(steps[i])["data"](_0x43753f(0x22b)) &&
        $(progressbar[i])[_0x43753f(0x264)]("current");
  }
  reinitIX === !![]
    ? (window[_0x43753f(0x1e3)] &&
        window["Webflow"][_0x43753f(0x243)](_0x43753f(0x1ca))["init"](),
      document[_0x43753f(0x228)](new Event("readystatechange")),
      $(steps[x])[_0x43753f(0x1ec)]())
    : $(steps[x])["fadeIn"](_0x43753f(0x215));
  x === 0x0 &&
    !$(steps[x])["data"]("card") &&
    $(steps[x])["find"]("[data-answer]")["show"]();
  selection[_0x43753f(0x210)] > 0x0
    ? $(steps[x])
        ["find"](_0x43753f(0x1b5) + selection[0x0][_0x43753f(0x247)] + "\x22]")
        [_0x43753f(0x1ec)]()
    : $(steps[x])
        ["find"]("[data-answer=\x22" + answer + "\x22]")
        [_0x43753f(0x1ec)]();
  if (x === 0x0) $(_0x43753f(0x1e7))["hide"](), $(_0x43753f(0x254))["show"]();
  else {
    if (
      x === steps[_0x43753f(0x210)] - 0x1 ||
      $(steps[x])[_0x43753f(0x206)](_0x43753f(0x1f6))["length"] > 0x0
    ) {
      $("[data-form=\x22next-btn\x22]")[_0x43753f(0x1cf)]();
      if (
        $(steps[x])
          [_0x43753f(0x206)]("[data-form=\x22next-btn\x22][data-submit-show]")
          [_0x43753f(0x1b1)](_0x43753f(0x1bc))
      )
        $(steps[x])[_0x43753f(0x206)](_0x43753f(0x266))[_0x43753f(0x1ec)]();
      else
        $(_0x43753f(0x254))["data"](_0x43753f(0x1bc)) &&
          $(_0x43753f(0x254))[_0x43753f(0x1ec)]();
      $(_0x43753f(0x259))["show"](), $(_0x43753f(0x1e7))["show"]();
    } else
      $(_0x43753f(0x254))[_0x43753f(0x1ec)](),
        $(_0x43753f(0x1e7))[_0x43753f(0x1ec)](),
        $(_0x43753f(0x259))[_0x43753f(0x1cf)]();
  }
  $($(steps[x])["find"]("input[autofocus]")[0x0])[_0x43753f(0x1a4)](),
    $($(steps[x])[_0x43753f(0x206)]("textarea[autofocus]")[0x0])[
      _0x43753f(0x1a4)
    ](),
    validation();
  for (idx = 0x0; idx <= progress; idx++) {
    $($("[data-form=\x22custom-progress-indicator\x22]")[idx])[
      _0x43753f(0x25f)
    ](_0x43753f(0x1ac));
  }
}
function validateEmail(_0x27497d, _0x38ed98) {
  const _0x3ba0d5 = _0x1a1dc3;
  let _0x5cee0b = _0x27497d[_0x3ba0d5(0x19e)]("@")
    ? _0x27497d[_0x3ba0d5(0x218)]("@")[0x1]["split"](".")[0x0]
    : [];
  dom = [];
  _0x38ed98 !== undefined &&
    _0x38ed98[_0x3ba0d5(0x218)](",")[_0x3ba0d5(0x1e0)](function (_0x37610f) {
      const _0xa8884a = _0x3ba0d5;
      _0x37610f[_0xa8884a(0x19e)](_0x5cee0b) && dom["push"](_0x5cee0b);
    });
  dom[_0x3ba0d5(0x210)] > 0x0 ? (domainAllowed = ![]) : (domainAllowed = !![]);
  var _0x14a490 = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,20})?$/;
  !_0x14a490[_0x3ba0d5(0x1ad)](_0x27497d)
    ? (emailFilled = ![])
    : (emailFilled = !![]);
}
function validation() {
  const _0x85c62b = _0x1a1dc3;
  $(steps[x])[_0x85c62b(0x1b1)]("card") && enableBtn();
  (textareaLength = $(steps[x])[_0x85c62b(0x206)](_0x85c62b(0x24b))[
    _0x85c62b(0x210)
  ]),
    (textInputLength = $(steps[x])[_0x85c62b(0x206)](_0x85c62b(0x224))[
      _0x85c62b(0x210)
    ]),
    (selectInputLength = $(steps[x])[_0x85c62b(0x206)](_0x85c62b(0x1b6))[
      _0x85c62b(0x210)
    ]),
    (emailInputLength = $(steps[x])[_0x85c62b(0x206)](_0x85c62b(0x1ea))[
      _0x85c62b(0x210)
    ]),
    (checkboxInputLength = $(steps[x])["find"](_0x85c62b(0x19f))[
      _0x85c62b(0x210)
    ]);
  textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0
    ? disableBtn()
    : enableBtn();
  var _0x4e7b9c = $(steps[x])[_0x85c62b(0x1b1)](_0x85c62b(0x22a))
    ? $(steps[x])[_0x85c62b(0x1b1)](_0x85c62b(0x22a))
    : 0x0;
  if (!logicExtra)
    $(steps[x])[_0x85c62b(0x206)](_0x85c62b(0x1ee))["is"](_0x85c62b(0x25c)) &&
      (_0x4e7b9c === "*" ||
      _0x4e7b9c >
        $(steps[x])[_0x85c62b(0x206)](_0x85c62b(0x24a))[_0x85c62b(0x210)]
        ? $(steps[x])
            [_0x85c62b(0x206)](_0x85c62b(0x24a))
            ["each"](function () {
              const _0x5b8d5e = _0x85c62b;
              $(this)["is"](_0x5b8d5e(0x1d5))
                ? $(steps[x])[_0x5b8d5e(0x206)](":input[required]")[
                    _0x5b8d5e(0x210)
                  ] < 0x1 && (checkboxFilled = !![])
                : (checkboxFilled = ![]);
            })
        : $(steps[x])["find"](_0x85c62b(0x1f0))["length"] >= _0x4e7b9c
        ? (checkboxFilled = !![])
        : (checkboxFilled = ![])),
      $(steps[x])
        ["find"](_0x85c62b(0x23b))
        ["each"](function (_0x42dacf) {
          const _0x260123 = _0x85c62b;
          var _0x3050ab = $(this)[_0x260123(0x200)](_0x260123(0x23d));
          console["log"](_0x3050ab),
            $(_0x260123(0x1c2) + _0x3050ab + "\x22]:checked")[
              _0x260123(0x210)
            ] == 0x0
              ? !empReqRadio[_0x260123(0x206)](
                  (_0x48e128) => _0x48e128[_0x260123(0x261)] === _0x42dacf
                ) && empReqRadio[_0x260123(0x20a)]({ input: _0x42dacf })
              : (empReqRadio = empReqRadio[_0x260123(0x1e4)](
                  (_0x2abc59) => _0x2abc59["input"] !== _0x42dacf
                )),
            empReqRadio[_0x260123(0x210)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0x85c62b(0x206)](":input[type=\x22text\x22][required]")
        ["each"](function (_0x75a3f7) {
          const _0x54d5ab = _0x85c62b;
          $(this)[_0x54d5ab(0x1d8)]() !== ""
            ? (empReqInput = empReqInput["filter"](
                (_0x3302e9) => _0x3302e9[_0x54d5ab(0x261)] !== _0x75a3f7
              ))
            : !empReqInput[_0x54d5ab(0x206)](
                (_0x41f062) => _0x41f062[_0x54d5ab(0x261)] === _0x75a3f7
              ) && empReqInput["push"]({ input: _0x75a3f7 }),
            empReqInput["length"] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        ["find"](":input[type=\x22tel\x22][required]")
        ["each"](function (_0x1bed29) {
          const _0x4395ee = _0x85c62b;
          $(this)[_0x4395ee(0x1d8)]() !== ""
            ? (empReqTel = empReqTel[_0x4395ee(0x1e4)](
                (_0x2f5973) => _0x2f5973["input"] !== _0x1bed29
              ))
            : !empReqTel[_0x4395ee(0x206)](
                (_0x2569ff) => _0x2569ff["input"] === _0x1bed29
              ) && empReqTel["push"]({ input: _0x1bed29 }),
            empReqTel[_0x4395ee(0x210)] === 0x0
              ? (telFilled = !![])
              : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x85c62b(0x206)](_0x85c62b(0x262))
        [_0x85c62b(0x22f)](function (_0x119960) {
          const _0x8b1aac = _0x85c62b;
          $(this)[_0x8b1aac(0x1d8)]() !== ""
            ? (empReqFile = empReqFile[_0x8b1aac(0x1e4)](
                (_0x105bf6) => _0x105bf6[_0x8b1aac(0x261)] !== _0x119960
              ))
            : !empReqFile[_0x8b1aac(0x206)](
                (_0x40a6df) => _0x40a6df[_0x8b1aac(0x261)] === _0x119960
              ) && empReqFile[_0x8b1aac(0x20a)]({ input: _0x119960 }),
            empReqFile[_0x8b1aac(0x210)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x85c62b(0x206)](":input[type=\x22number\x22][required]")
        [_0x85c62b(0x22f)](function (_0x5ef73a) {
          const _0x119d26 = _0x85c62b;
          $(this)[_0x119d26(0x1d8)]() !== ""
            ? (empReqNum = empReqNum[_0x119d26(0x1e4)](
                (_0x821892) => _0x821892[_0x119d26(0x261)] !== _0x5ef73a
              ))
            : !empReqNum["find"](
                (_0x94a264) => _0x94a264[_0x119d26(0x261)] === _0x5ef73a
              ) && empReqNum[_0x119d26(0x20a)]({ input: _0x5ef73a }),
            empReqNum[_0x119d26(0x210)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x85c62b(0x206)](_0x85c62b(0x242))
        [_0x85c62b(0x22f)](function (_0x1746f4) {
          const _0x2994d8 = _0x85c62b;
          let _0x55b85a = $(this)["val"]();
          _0x55b85a === "" && (_0x55b85a = null),
            _0x55b85a != null
              ? (empReqSelect = empReqSelect[_0x2994d8(0x1e4)](
                  (_0x56c8cd) => _0x56c8cd["input"] !== _0x1746f4
                ))
              : !empReqSelect[_0x2994d8(0x206)](
                  (_0x3b1473) => _0x3b1473[_0x2994d8(0x261)] === _0x1746f4
                ) && empReqSelect[_0x2994d8(0x20a)]({ input: _0x1746f4 }),
            empReqSelect[_0x2994d8(0x210)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x85c62b(0x206)](_0x85c62b(0x220))
        [_0x85c62b(0x22f)](function (_0x11956c) {
          const _0x207a65 = _0x85c62b;
          $(this)[_0x207a65(0x1d8)]() !== ""
            ? (empReqTextarea = empReqTextarea["filter"](
                (_0x132acc) => _0x132acc[_0x207a65(0x261)] !== _0x11956c
              ))
            : !empReqTextarea["find"](
                (_0x5d3072) => _0x5d3072[_0x207a65(0x261)] === _0x11956c
              ) && empReqTextarea[_0x207a65(0x20a)]({ input: _0x11956c }),
            empReqTextarea[_0x207a65(0x210)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x85c62b(0x25a))
        ["each"](function () {
          $(this)["val"]() !== ""
            ? validateEmail($(this)["val"](), $(this)["data"]("block-domain"))
            : (emailFilled = ![]);
        });
  else {
    if ($(steps[x])[_0x85c62b(0x1b1)](_0x85c62b(0x22b)))
      (answer = $(steps[x])
        ["find"](_0x85c62b(0x1c3))
        ["data"](_0x85c62b(0x1e9))),
        (selections = selections[_0x85c62b(0x1e4)](
          (_0x3a639c) => _0x3a639c["step"] !== x
        )),
        selections["push"]({ step: x, selected: answer });
    else
      $(steps[x])
        [_0x85c62b(0x206)](_0x85c62b(0x238))
        ["data"](_0x85c62b(0x22b)) &&
        ((answer = $(steps[x])
          [_0x85c62b(0x206)](_0x85c62b(0x238))
          [_0x85c62b(0x1b1)](_0x85c62b(0x1e9))),
        (selections = selections["filter"](
          (_0x2c8811) => _0x2c8811[_0x85c62b(0x234)] !== x
        )),
        selections[_0x85c62b(0x20a)]({ step: x, selected: answer }));
    $(steps[x])
      [_0x85c62b(0x206)](_0x85c62b(0x238))
      [_0x85c62b(0x206)](_0x85c62b(0x1ee))
      ["is"](_0x85c62b(0x25c)) &&
      (_0x4e7b9c === "*" ||
      _0x4e7b9c >
        $(steps[x])[_0x85c62b(0x206)](":input[type=\x22checkbox\x22]")["length"]
        ? $(steps[x])
            [_0x85c62b(0x206)](_0x85c62b(0x24a))
            ["each"](function () {
              const _0x28c8cc = _0x85c62b;
              $(this)["is"](_0x28c8cc(0x1d5))
                ? $(steps[x])[_0x28c8cc(0x206)](_0x28c8cc(0x204))[
                    _0x28c8cc(0x210)
                  ] < 0x1 &&
                  ($(this)
                    [_0x28c8cc(0x23e)](_0x28c8cc(0x1c3))
                    ["attr"](_0x28c8cc(0x1f7)) &&
                    ((answer = $(this)
                      [_0x28c8cc(0x23e)](_0x28c8cc(0x1c3))
                      [_0x28c8cc(0x200)](_0x28c8cc(0x1f7))),
                    (selections = selections["filter"](
                      (_0x3b5f00) => _0x3b5f00["step"] !== x
                    )),
                    selections[_0x28c8cc(0x20a)]({
                      step: x,
                      selected: answer,
                    })),
                  (checkboxFilled = !![]))
                : (checkboxFilled = ![]);
            })
        : $(steps[x])
            ["find"](_0x85c62b(0x238))
            [_0x85c62b(0x206)](_0x85c62b(0x1f0))[_0x85c62b(0x210)] >= _0x4e7b9c
        ? ($(steps[x])
            ["find"](_0x85c62b(0x238))
            ["find"](_0x85c62b(0x1f0))
            [_0x85c62b(0x23e)](_0x85c62b(0x1c3))
            [_0x85c62b(0x200)](_0x85c62b(0x1f7)) &&
            ((answer = $(steps[x])
              [_0x85c62b(0x206)]("[data-answer]:visible")
              [_0x85c62b(0x206)](_0x85c62b(0x1f0))
              [_0x85c62b(0x23e)]("[data-go-to]")
              [_0x85c62b(0x200)](_0x85c62b(0x1f7))),
            (selections = selections["filter"](
              (_0x2dd989) => _0x2dd989[_0x85c62b(0x234)] !== x
            )),
            selections[_0x85c62b(0x20a)]({ step: x, selected: answer })),
          (selections = selections["filter"](
            (_0x283e65) => _0x283e65["step"] !== x
          )),
          selections[_0x85c62b(0x20a)]({ step: x, selected: answer }),
          (checkboxFilled = !![]))
        : (checkboxFilled = ![])),
      $(steps[x])
        [_0x85c62b(0x206)](_0x85c62b(0x238))
        [_0x85c62b(0x206)](_0x85c62b(0x204))
        ["is"](_0x85c62b(0x20f))
        ? $(steps[x])
            [_0x85c62b(0x206)](_0x85c62b(0x238))
            ["find"](_0x85c62b(0x21b))
            ["is"](_0x85c62b(0x1d5))
          ? (radioFilled = !![])
          : (radioFilled = ![])
        : (radioFilled = !![]),
      $(steps[x])
        [_0x85c62b(0x206)](_0x85c62b(0x238))
        [_0x85c62b(0x206)](_0x85c62b(0x1b0))
        [_0x85c62b(0x22f)](function (_0x355dd6) {
          const _0x58a0a6 = _0x85c62b;
          $(this)[_0x58a0a6(0x1d8)]() !== ""
            ? (empReqInput = empReqInput[_0x58a0a6(0x1e4)](
                (_0x167746) => _0x167746[_0x58a0a6(0x261)] !== _0x355dd6
              ))
            : !empReqInput[_0x58a0a6(0x206)](
                (_0x373b3e) => _0x373b3e["input"] === _0x355dd6
              ) && empReqInput[_0x58a0a6(0x20a)]({ input: _0x355dd6 }),
            empReqInput[_0x58a0a6(0x210)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x85c62b(0x206)](_0x85c62b(0x238))
        [_0x85c62b(0x206)](_0x85c62b(0x251))
        [_0x85c62b(0x22f)](function (_0x55cc7e) {
          const _0x3e4c69 = _0x85c62b;
          (skipTo = undefined),
            $(this)
              ["parents"](_0x3e4c69(0x1aa))
              [_0x3e4c69(0x1b1)](_0x3e4c69(0x24e)) !== "" &&
              (skipTo = $(this)
                [_0x3e4c69(0x23e)](_0x3e4c69(0x1aa))
                [_0x3e4c69(0x1b1)](_0x3e4c69(0x24e))),
            $(this)
              [_0x3e4c69(0x23e)](_0x3e4c69(0x1c3))
              [_0x3e4c69(0x200)](_0x3e4c69(0x1f7)) &&
              ((answer = $(this)
                ["parents"]("[data-go-to]")
                [_0x3e4c69(0x200)](_0x3e4c69(0x1f7))),
              (selections = selections[_0x3e4c69(0x1e4)](
                (_0x5551a3) => _0x5551a3[_0x3e4c69(0x234)] !== x
              )),
              selections[_0x3e4c69(0x20a)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x3e4c69(0x20a)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x3e4c69(0x25b)](
                  (_0xaafa52) => _0xaafa52[_0x3e4c69(0x234)] === x
                )),
                (selections[objIndex][_0x3e4c69(0x23f)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x3e4c69(0x240)] = x)));
        }),
      $(steps[x])
        [_0x85c62b(0x206)](_0x85c62b(0x238))
        [_0x85c62b(0x206)](_0x85c62b(0x1e1))
        [_0x85c62b(0x22f)](function (_0x480cc6) {
          const _0x5a6d95 = _0x85c62b;
          $(this)[_0x5a6d95(0x1d8)]() !== ""
            ? (empReqNum = empReqNum[_0x5a6d95(0x1e4)](
                (_0x5b5470) => _0x5b5470[_0x5a6d95(0x261)] !== _0x480cc6
              ))
            : !empReqNum[_0x5a6d95(0x206)](
                (_0x46af03) => _0x46af03[_0x5a6d95(0x261)] === _0x480cc6
              ) && empReqNum[_0x5a6d95(0x20a)]({ input: _0x480cc6 }),
            empReqNum[_0x5a6d95(0x210)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x85c62b(0x238))
        ["find"](":input[type=\x22number\x22]")
        [_0x85c62b(0x22f)](function (_0x32181e) {
          const _0x3691d8 = _0x85c62b;
          (skipTo = undefined),
            $(this)
              [_0x3691d8(0x23e)](_0x3691d8(0x1aa))
              [_0x3691d8(0x1b1)](_0x3691d8(0x24e)) !== "" &&
              (skipTo = $(this)
                [_0x3691d8(0x23e)]("[data-skip-to]")
                [_0x3691d8(0x1b1)](_0x3691d8(0x24e))),
            $(this)
              [_0x3691d8(0x23e)]("[data-go-to]")
              [_0x3691d8(0x200)](_0x3691d8(0x1f7)) &&
              ((answer = $(this)
                [_0x3691d8(0x23e)](_0x3691d8(0x1c3))
                [_0x3691d8(0x200)]("data-go-to")),
              (selections = selections[_0x3691d8(0x1e4)](
                (_0x1d68ce) => _0x1d68ce[_0x3691d8(0x234)] !== x
              )),
              selections[_0x3691d8(0x20a)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0x3691d8(0x25b)](
                  (_0x46436e) => _0x46436e[_0x3691d8(0x234)] === x
                )),
                (selections[objIndex][_0x3691d8(0x23f)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        ["find"](_0x85c62b(0x238))
        [_0x85c62b(0x206)](_0x85c62b(0x1b4))
        [_0x85c62b(0x22f)](function (_0x136fd4) {
          const _0x1e692d = _0x85c62b;
          $(this)[_0x1e692d(0x1d8)]() !== ""
            ? (empReqTel = empReqTel[_0x1e692d(0x1e4)](
                (_0xdd098c) => _0xdd098c[_0x1e692d(0x261)] !== _0x136fd4
              ))
            : !empReqTel[_0x1e692d(0x206)](
                (_0x3d7f5f) => _0x3d7f5f[_0x1e692d(0x261)] === _0x136fd4
              ) && empReqTel["push"]({ input: _0x136fd4 }),
            empReqTel["length"] === 0x0
              ? (telFilled = !![])
              : (telFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x85c62b(0x238))
        [_0x85c62b(0x206)](_0x85c62b(0x257))
        [_0x85c62b(0x22f)](function (_0x5f218f) {
          const _0x47a579 = _0x85c62b;
          (skipTo = undefined),
            $(this)
              [_0x47a579(0x23e)]("[data-skip-to]")
              [_0x47a579(0x1b1)](_0x47a579(0x24e)) !== "" &&
              (skipTo = $(this)
                [_0x47a579(0x23e)](_0x47a579(0x1aa))
                [_0x47a579(0x1b1)](_0x47a579(0x24e))),
            $(this)
              [_0x47a579(0x23e)]("[data-go-to]")
              ["attr"](_0x47a579(0x1f7)) &&
              ((answer = $(this)
                [_0x47a579(0x23e)](_0x47a579(0x1c3))
                [_0x47a579(0x200)](_0x47a579(0x1f7))),
              (selections = selections["filter"](
                (_0x3732a3) => _0x3732a3[_0x47a579(0x234)] !== x
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x47a579(0x20a)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x47a579(0x25b)](
                  (_0x181c45) => _0x181c45[_0x47a579(0x234)] === x
                )),
                (selections[objIndex][_0x47a579(0x23f)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x47a579(0x240)] = x)));
        }),
      $(steps[x])
        [_0x85c62b(0x206)](_0x85c62b(0x238))
        [_0x85c62b(0x206)](":input[type=\x22file\x22][required]")
        ["each"](function (_0x5f3029) {
          const _0x592bd2 = _0x85c62b;
          $(this)[_0x592bd2(0x1d8)]() !== ""
            ? (empReqfile = empReqfile[_0x592bd2(0x1e4)](
                (_0x3d20ae) => _0x3d20ae[_0x592bd2(0x261)] !== _0x5f3029
              ))
            : !empReqfile["find"](
                (_0x1fcb2f) => _0x1fcb2f["input"] === _0x5f3029
              ) && empReqfile[_0x592bd2(0x20a)]({ input: _0x5f3029 }),
            empReqfile[_0x592bd2(0x210)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x85c62b(0x206)](_0x85c62b(0x238))
        ["find"](_0x85c62b(0x22e))
        [_0x85c62b(0x22f)](function (_0x4474f9) {
          const _0x3065c0 = _0x85c62b;
          (skipTo = undefined),
            $(this)
              [_0x3065c0(0x23e)]("[data-skip-to]")
              [_0x3065c0(0x1b1)](_0x3065c0(0x24e)) !== "" &&
              (skipTo = $(this)
                [_0x3065c0(0x23e)]("[data-skip-to]")
                ["data"]("skip-to")),
            $(this)
              [_0x3065c0(0x23e)](_0x3065c0(0x1c3))
              ["attr"](_0x3065c0(0x1f7)) &&
              ((answer = $(this)
                [_0x3065c0(0x23e)](_0x3065c0(0x1c3))
                [_0x3065c0(0x200)](_0x3065c0(0x1f7))),
              (selections = selections["filter"](
                (_0x4920ad) => _0x4920ad[_0x3065c0(0x234)] !== x
              )),
              selections[_0x3065c0(0x20a)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x3065c0(0x20a)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x3065c0(0x25b)](
                  (_0x155e39) => _0x155e39["step"] === x
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x3065c0(0x240)] = x)));
        }),
      $(steps[x])
        ["find"](_0x85c62b(0x238))
        [_0x85c62b(0x206)](_0x85c62b(0x242))
        [_0x85c62b(0x22f)](function (_0x1fe640) {
          const _0x56710c = _0x85c62b;
          $(this)[_0x56710c(0x1d8)]() !== ""
            ? (empReqSelect = empReqSelect[_0x56710c(0x1e4)](
                (_0x12c9a6) => _0x12c9a6[_0x56710c(0x261)] !== _0x1fe640
              ))
            : !empReqSelect[_0x56710c(0x206)](
                (_0x3181ea) => _0x3181ea["input"] === _0x1fe640
              ) && empReqSelect[_0x56710c(0x20a)]({ input: _0x1fe640 }),
            empReqSelect[_0x56710c(0x210)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x85c62b(0x206)](_0x85c62b(0x238))
        [_0x85c62b(0x206)](_0x85c62b(0x201))
        [_0x85c62b(0x22f)](function (_0x2c0a01) {
          const _0x4299f3 = _0x85c62b;
          (skipTo = undefined),
            $(this)
              [_0x4299f3(0x23e)](_0x4299f3(0x1aa))
              [_0x4299f3(0x1b1)](_0x4299f3(0x24e)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0x4299f3(0x1aa))
                ["data"]("skip-to")),
            $(this)
              [_0x4299f3(0x23e)]("[data-go-to]")
              [_0x4299f3(0x200)](_0x4299f3(0x1f7)) &&
              ((answer = $(this)
                [_0x4299f3(0x23e)](_0x4299f3(0x1c3))
                ["attr"](_0x4299f3(0x1f7))),
              (selections = selections[_0x4299f3(0x1e4)](
                (_0x43cd42) => _0x43cd42[_0x4299f3(0x234)] !== x
              )),
              selections[_0x4299f3(0x20a)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x4299f3(0x20a)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x452bc6) => _0x452bc6[_0x4299f3(0x234)] === x
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        ["find"](_0x85c62b(0x238))
        [_0x85c62b(0x206)](_0x85c62b(0x220))
        [_0x85c62b(0x22f)](function (_0x5659aa) {
          const _0x28c4e4 = _0x85c62b;
          $(this)["val"]() !== ""
            ? (empReqTextarea = empReqTextarea["filter"](
                (_0x3381fa) => _0x3381fa[_0x28c4e4(0x261)] !== _0x5659aa
              ))
            : !empReqTextarea["find"](
                (_0x35e436) => _0x35e436[_0x28c4e4(0x261)] === _0x5659aa
              ) && empReqTextarea[_0x28c4e4(0x20a)]({ input: _0x5659aa }),
            empReqTextarea["length"] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x85c62b(0x238))
        [_0x85c62b(0x206)](_0x85c62b(0x1ff))
        ["each"](function (_0x14e00a) {
          const _0x237432 = _0x85c62b;
          (skipTo = undefined),
            $(this)
              [_0x237432(0x23e)](_0x237432(0x1aa))
              ["data"](_0x237432(0x24e)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0x237432(0x1aa))
                ["data"]("skip-to")),
            $(this)
              [_0x237432(0x23e)](_0x237432(0x1c3))
              [_0x237432(0x200)](_0x237432(0x1f7)) &&
              ((answer = $(this)
                [_0x237432(0x23e)](_0x237432(0x1c3))
                [_0x237432(0x200)](_0x237432(0x1f7))),
              (selections = selections[_0x237432(0x1e4)](
                (_0x561270) => _0x561270[_0x237432(0x234)] !== x
              )),
              selections[_0x237432(0x20a)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x237432(0x20a)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x237432(0x25b)](
                  (_0x1a5553) => _0x1a5553[_0x237432(0x234)] === x
                )),
                (selections[objIndex][_0x237432(0x23f)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x237432(0x240)] = x)));
        }),
      $(steps[x])
        [_0x85c62b(0x206)](_0x85c62b(0x238))
        ["find"](_0x85c62b(0x25a))
        [_0x85c62b(0x22f)](function (_0x3a1719) {
          const _0x23e780 = _0x85c62b;
          $(this)[_0x23e780(0x1d8)]() !== ""
            ? validateEmail(
                $(this)[_0x23e780(0x1d8)](),
                $(this)[_0x23e780(0x1b1)](_0x23e780(0x1ef))
              )
            : (emailFilled = ![]);
        }),
      $(steps[x])
        [_0x85c62b(0x206)](_0x85c62b(0x238))
        ["find"](_0x85c62b(0x1cb))
        [_0x85c62b(0x22f)](function (_0x338c01) {
          const _0x5325ab = _0x85c62b;
          (skipTo = undefined),
            $(this)
              [_0x5325ab(0x23e)](_0x5325ab(0x1aa))
              [_0x5325ab(0x1b1)](_0x5325ab(0x24e)) !== "" &&
              (skipTo = $(this)
                [_0x5325ab(0x23e)](_0x5325ab(0x1aa))
                [_0x5325ab(0x1b1)]("skip-to")),
            $(this)
              [_0x5325ab(0x23e)](_0x5325ab(0x1c3))
              [_0x5325ab(0x200)]("data-go-to") &&
              ((answer = $(this)
                ["parents"](_0x5325ab(0x1c3))
                [_0x5325ab(0x200)](_0x5325ab(0x1f7))),
              (selections = selections[_0x5325ab(0x1e4)](
                (_0x678585) => _0x678585[_0x5325ab(0x234)] !== x
              )),
              selections[_0x5325ab(0x20a)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x5325ab(0x20a)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x5325ab(0x25b)](
                  (_0x39146b) => _0x39146b[_0x5325ab(0x234)] === x
                )),
                (selections[objIndex][_0x5325ab(0x23f)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x5325ab(0x240)] = x)));
        });
  }
  $(steps[x])["find"](_0x85c62b(0x1dc))["is"](_0x85c62b(0x1d5)) &&
    ((selArr = []),
    $(steps)
      [_0x85c62b(0x206)](_0x85c62b(0x1b2))
      [_0x85c62b(0x22f)](function (_0x4bfc25, _0x2a8a47) {
        const _0x1d6f34 = _0x85c62b;
        selArr[_0x1d6f34(0x20a)]({ selected: $(this)["data"]("selected") });
      }),
    (selString = []),
    selArr["forEach"]((_0x40fbcd) =>
      selString["push"](_0x40fbcd[_0x85c62b(0x247)])
    ),
    (selections = selections[_0x85c62b(0x1e4)](
      (_0x368cb7) => _0x368cb7[_0x85c62b(0x234)] !== x
    )),
    $(steps[x])
      [_0x85c62b(0x206)](_0x85c62b(0x238))
      [_0x85c62b(0x206)](_0x85c62b(0x267))
      [_0x85c62b(0x22f)](function () {
        const _0x3fa727 = _0x85c62b;
        skipTo = undefined;
        if (
          $(this)
            [_0x3fa727(0x23e)](_0x3fa727(0x1aa))
            [_0x3fa727(0x1b1)](_0x3fa727(0x24e))
        )
          skipTo = $(this)
            [_0x3fa727(0x23e)]("[data-skip-to]")
            [_0x3fa727(0x1b1)]("skip-to");
        else
          $(this)[_0x3fa727(0x1b1)](_0x3fa727(0x24e)) &&
            (skipTo = $(this)["data"]("skip-to"));
        if ($(this)["data"](_0x3fa727(0x1e9)))
          (answer = $(this)[_0x3fa727(0x200)](_0x3fa727(0x1f7))),
            selections[_0x3fa727(0x20a)]({ step: x, selected: answer }),
            console[_0x3fa727(0x1d7)](skipTo),
            skipTo &&
              (selections[_0x3fa727(0x20a)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0x3fa727(0x25b)](
                (_0x134119) => _0x134119[_0x3fa727(0x234)] === x
              )),
              (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x3fa727(0x240)] = x));
        else
          $(this)
            [_0x3fa727(0x23e)](_0x3fa727(0x1c3))
            [_0x3fa727(0x1b1)](_0x3fa727(0x1e9)) &&
            ((answer = $(this)
              [_0x3fa727(0x23e)]("[data-go-to]")
              [_0x3fa727(0x1b1)](_0x3fa727(0x1e9))),
            selections["push"]({ step: x, selected: answer }),
            console[_0x3fa727(0x1d7)](skipTo),
            skipTo &&
              (selections[_0x3fa727(0x20a)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0x3fa727(0x25b)](
                (_0x147e8e) => _0x147e8e[_0x3fa727(0x234)] === x
              )),
              (selections[objIndex][_0x3fa727(0x23f)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x3fa727(0x240)] = x)));
      }),
    logicExtra
      ? ($(steps[x])
          [_0x85c62b(0x206)](_0x85c62b(0x238))
          [_0x85c62b(0x206)](_0x85c62b(0x255))
          [_0x85c62b(0x1b1)](_0x85c62b(0x208)) === !![] ||
          $(steps[x])
            [_0x85c62b(0x206)]("[data-answer][data-radio-skip]:visible")
            [_0x85c62b(0x1b1)]("radio-skip") === !![]) &&
        !back &&
        selections[_0x85c62b(0x1e4)](
          (_0x3ecfb5) => _0x3ecfb5[_0x85c62b(0x234)] === x
        )["length"] > 0x0 &&
        (console[_0x85c62b(0x1d7)]("radio\x20skip\x20true"),
        textareaLength === 0x0 &&
          textInputLength === 0x0 &&
          emailInputLength === 0x0 &&
          checkboxInputLength === 0x0 &&
          setTimeout(function () {
            (next = !![]), nextStep(), selectionQuiz();
          }, $(steps[x])
            ["find"](_0x85c62b(0x1bb))
            [_0x85c62b(0x1b1)](_0x85c62b(0x1e5))))
      : $(steps[x])
          ["find"](_0x85c62b(0x255))
          [_0x85c62b(0x1b1)](_0x85c62b(0x208)) === !![] &&
        (console[_0x85c62b(0x1d7)]("back", back),
        !back &&
          textareaLength === 0x0 &&
          textInputLength === 0x0 &&
          emailInputLength === 0x0 &&
          checkboxInputLength === 0x0 &&
          setTimeout(function () {
            (next = !![]), nextStep(), selectionQuiz();
          }, $(steps[x])
            [_0x85c62b(0x206)](_0x85c62b(0x1bb))
            ["data"](_0x85c62b(0x1e5)))),
    console[_0x85c62b(0x1d7)](selections)),
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
function nextStep() {
  const _0x31805a = _0x1a1dc3;
  x++,
    $(_0x31805a(0x1fb))[_0x31805a(0x244)](
      $(steps[x])[_0x31805a(0x1b1)](_0x31805a(0x22b))
        ? (curStep = curStep + 0x0)
        : (curStep = curStep + 0x1)
    ),
    x > progress && (progress = x),
    x <= steps[_0x31805a(0x210)] - 0x1 &&
      (updateStep(), memory && saveFilledInput());
}
function backStep() {
  const _0x526705 = _0x1a1dc3;
  $("[data-text=\x22current-step\x22]")[_0x526705(0x244)](
    $(steps[x])["data"](_0x526705(0x22b))
      ? (curStep = x - 0x0)
      : (curStep = x - 0x1)
  ),
    x > 0x0 &&
      ($(progressbar[x])["removeClass"](_0x526705(0x22c)),
      selections["filter"]((_0x5421ee) => _0x5421ee[_0x526705(0x23f)] === x)[
        _0x526705(0x210)
      ] > 0x0
        ? (x = parseInt(
            getSafe(
              () =>
                selections[_0x526705(0x1e4)](
                  (_0x2fc8d5) => _0x2fc8d5[_0x526705(0x23f)] === x
                )[0x0][_0x526705(0x240)]
            )
          ))
        : x--,
      updateStep());
}
$(_0x1a1dc3(0x1ce))["on"](_0x1a1dc3(0x1bf), function (_0xf776ee) {
  const _0x55f68a = _0x1a1dc3;
  _0xf776ee[_0x55f68a(0x1a2)] === 0xd &&
    fill &&
    ($(_0x55f68a(0x21c))["data"]("enter")
      ? ($("[data-form=\x22next-btn\x22]")[0x0][_0x55f68a(0x1b8)](),
        _0xf776ee[_0x55f68a(0x1eb)](),
        _0xf776ee["stopPropagation"]())
      : (_0xf776ee[_0x55f68a(0x1eb)](), _0xf776ee["stopPropagation"]()));
}),
  $(_0x1a1dc3(0x1ce))[_0x1a1dc3(0x229)](function (_0x4c788f) {
    const _0x5ef1c5 = _0x1a1dc3;
    (_0x4c788f[_0x5ef1c5(0x253)] || _0x4c788f["ctrlKey"]) &&
      _0x4c788f[_0x5ef1c5(0x1a2)] == 0xd &&
      (x >= steps[_0x5ef1c5(0x210)] - 0x1 && fill
        ? $(_0x5ef1c5(0x259))[_0x5ef1c5(0x1b8)]()
        : (event[_0x5ef1c5(0x1eb)](), event[_0x5ef1c5(0x235)]()));
  });
function selectionQuiz() {
  const _0x3cf186 = _0x1a1dc3;
  $(this)[_0x3cf186(0x206)](_0x3cf186(0x21f)) &&
    ($(_0x3cf186(0x222))["hide"](),
    $(_0x3cf186(0x207) + selString + "\x22]")["data"](_0x3cf186(0x214))
      ? $(_0x3cf186(0x207) + selString + "\x22]")["fadeIn"]()
      : $(_0x3cf186(0x1f5))[_0x3cf186(0x256)]());
}
$(_0x1a1dc3(0x254))["on"](_0x1a1dc3(0x1b8), function () {
  scrollTop(), (next = !![]), (back = ![]), nextStep(), selectionQuiz();
}),
  $("[data-form=\x22back-btn\x22]")["on"](_0x1a1dc3(0x1b8), function () {
    const _0x2629e3 = _0x1a1dc3;
    scrollTop(),
      (next = ![]),
      (back = !![]),
      back &&
        logicExtra &&
        ($(_0x2629e3(0x250))[_0x2629e3(0x20b)]("checked", ![]),
        $("input[type=\x22radio\x22]")
          [_0x2629e3(0x263)](_0x2629e3(0x252))
          [_0x2629e3(0x25f)](_0x2629e3(0x1d0))),
      backStep(),
      (back = ![]);
  }),
  $(steps)
    [_0x1a1dc3(0x206)](_0x1a1dc3(0x1ee))
    ["on"](_0x1a1dc3(0x261), function (_0x243966) {
      validation();
    }),
  $(steps)["find"](_0x1a1dc3(0x1fd))["on"](_0x1a1dc3(0x1b8), validation());
$(_0x1a1dc3(0x237))[_0x1a1dc3(0x1b1)](_0x1a1dc3(0x230))
  ? $(_0x1a1dc3(0x1f3))[_0x1a1dc3(0x25f)](_0x1a1dc3(0x1ac))
  : $(_0x1a1dc3(0x1f3))[_0x1a1dc3(0x264)](_0x1a1dc3(0x1ac));
function clickableIndicator() {
  const _0x1593d9 = _0x1a1dc3;
  $(_0x1593d9(0x241))[_0x1593d9(0x25f)]("current"),
    $(_0x1593d9(0x1b9))[_0x1593d9(0x1b1)](_0x1593d9(0x202)) &&
      ($("[data-clickable]")[_0x1593d9(0x1b1)](_0x1593d9(0x230))
        ? ((x = $(this)["index"]()), updateStep())
        : $(this)[_0x1593d9(0x265)]() <= progress &&
          ((x = $(this)[_0x1593d9(0x265)]()), updateStep()));
}
$(_0x1a1dc3(0x1f3))["on"](_0x1a1dc3(0x1b8), clickableIndicator);
$(_0x1a1dc3(0x1c5))[_0x1a1dc3(0x1b1)]("debug-mode") &&
  (console["log"](_0x1a1dc3(0x1f1)),
  $(_0x1a1dc3(0x1c3))[_0x1a1dc3(0x22f)](function () {
    const _0x181b75 = _0x1a1dc3;
    $(this)[_0x181b75(0x1b7)](
      _0x181b75(0x209),
      $(this)["data"](_0x181b75(0x1e9))
    );
  }),
  $(_0x1a1dc3(0x23c))[_0x1a1dc3(0x22f)](function () {
    const _0x4a895e = _0x1a1dc3;
    $(this)[_0x4a895e(0x1b7)](
      _0x4a895e(0x216),
      $(this)[_0x4a895e(0x1b1)](_0x4a895e(0x1f2))
    );
  }));
$(_0x1a1dc3(0x259))["on"]("click", function (_0x298f72) {
  const _0x5d2e82 = _0x1a1dc3;
  $(this)[_0x5d2e82(0x1b1)](_0x5d2e82(0x1a0)) &&
    $(_0x5d2e82(0x1c5))["attr"](
      "data-multistep-redirect",
      $(this)[_0x5d2e82(0x1b1)]("redirect")
    ),
    (successCard = $(this)[_0x5d2e82(0x1b1)](_0x5d2e82(0x1d4))),
    _0x298f72["preventDefault"](),
    _0x298f72[_0x5d2e82(0x235)](),
    logicExtra &&
      ($(this)[_0x5d2e82(0x20b)]("novalidate", !![]),
      $(steps)
        ["find"](_0x5d2e82(0x1ee))
        [_0x5d2e82(0x20b)](_0x5d2e82(0x1b3), ![]),
      console["log"](_0x5d2e82(0x203))),
    $("[data-cms-select=cms]")[_0x5d2e82(0x22f)](function () {
      const _0x3419ac = _0x5d2e82,
        _0x3b07d0 = $(this)[_0x3419ac(0x206)]("[data-cms-select=text]"),
        _0x52a269 = [];
      console[_0x3419ac(0x1d7)](_0x52a269),
        _0x3b07d0[_0x3419ac(0x22f)](function () {
          const _0x40ebba = _0x3419ac;
          _0x52a269[_0x40ebba(0x20a)](
            $(this)[_0x40ebba(0x244)]()[_0x40ebba(0x1ae)]()
          );
        });
      const _0x237753 = $(this)[_0x3419ac(0x263)]("[data-cms-select=input]");
      $[_0x3419ac(0x22f)](_0x52a269, function (_0x3ecd20, _0x1fe2ea) {
        const _0x3e746a = _0x3419ac,
          _0x5945ec = $(_0x3e746a(0x223))
            [_0x3e746a(0x1d8)](_0x1fe2ea)
            [_0x3e746a(0x244)](_0x1fe2ea);
        _0x237753[_0x3e746a(0x1b7)](_0x5945ec);
      });
    }),
    localStorage[_0x5d2e82(0x19d)](_0x5d2e82(0x232)),
    fill &&
      ($(this)[_0x5d2e82(0x1b1)]("wait")
        ? $(this)[_0x5d2e82(0x1d8)]($(this)["data"](_0x5d2e82(0x226)))
        : ($(this)[_0x5d2e82(0x1d8)]("Please\x20wait..."),
          $(this)[_0x5d2e82(0x244)]("Please\x20wait...")),
      $(_0x5d2e82(0x1c5))[_0x5d2e82(0x1de)]());
});
function resetFormly() {
  const _0x42bffb = _0x1a1dc3;
  $("[data-form=\x22multistep\x22]")["trigger"](_0x42bffb(0x23a)),
    $("[data-form=\x22multistep\x22]")
      [_0x42bffb(0x23e)]()
      ["find"](".w-form-done")
      [_0x42bffb(0x1cf)](),
    (x = 0x0),
    updateStep(),
    $(_0x42bffb(0x1c5))[_0x42bffb(0x1ec)](),
    $(_0x42bffb(0x259))[_0x42bffb(0x244)](oldSubmitText),
    $(_0x42bffb(0x259))[_0x42bffb(0x1d8)](oldSubmitText),
    $(_0x42bffb(0x1fb))[_0x42bffb(0x244)](0x1),
    $(_0x42bffb(0x1c5))
      [_0x42bffb(0x206)]("input:checkbox")
      [_0x42bffb(0x263)](_0x42bffb(0x1a5))
      [_0x42bffb(0x25f)](_0x42bffb(0x1d0));
}
$(document)[_0x1a1dc3(0x1cc)](function (_0xd1e566, _0x5a6f5b, _0x583fb7) {
  const _0x9896a8 = _0x1a1dc3;
  if (_0x583fb7["url"][_0x9896a8(0x19e)](_0x9896a8(0x1c4))) {
    const _0x376f4f = _0x5a6f5b["status"] === 0xc8,
      _0x4a758e = _0x9896a8(0x1a6),
      _0x313d7d = $(this)[_0x9896a8(0x1b1)](_0x9896a8(0x1e6));
    console[_0x9896a8(0x1d7)](_0x376f4f),
      console[_0x9896a8(0x1d7)](_0x313d7d),
      _0x313d7d && _0x376f4f && (window[_0x9896a8(0x1dd)] = _0x313d7d),
      _0x376f4f &&
        successCard !== "" &&
        $(_0x9896a8(0x239) + successCard + "\x22]")["fadeIn"](),
      _0x376f4f &&
        formReset &&
        setTimeout(() => {
          resetFormly;
        }, 0x1f4);
  }
}),
  $(_0x1a1dc3(0x246))["on"](_0x1a1dc3(0x1b8), function () {
    const _0x134f0d = _0x1a1dc3;
    (back = !![]),
      (x = $(this)["data"](_0x134f0d(0x20c)) - 0x1),
      updateStep(),
      (back = ![]);
  }),
  $(_0x1a1dc3(0x217))["on"](_0x1a1dc3(0x1b8), function () {
    const _0x1e5f87 = _0x1a1dc3;
    $(_0x1e5f87(0x1c5))[_0x1e5f87(0x1f4)](_0x1e5f87(0x23a));
    let _0x1e560b = $(this);
    $(this)[_0x1e5f87(0x244)](_0x1e5f87(0x1c9)),
      setTimeout(function () {
        const _0x4b7f75 = _0x1e5f87;
        $(_0x1e560b)[_0x4b7f75(0x244)](oldResetText),
          $(_0x1e560b)[_0x4b7f75(0x23e)](".w-form-done")["hide"](),
          (x = 0x0),
          updateStep(),
          $("[data-form=\x22multistep\x22]")[_0x4b7f75(0x1ec)](),
          $(_0x4b7f75(0x259))[_0x4b7f75(0x244)](oldSubmitText),
          $(_0x4b7f75(0x259))[_0x4b7f75(0x1d8)](oldSubmitText),
          $(_0x1e560b)[_0x4b7f75(0x1d8)](oldSubmitText),
          $(_0x4b7f75(0x1fb))["text"](0x1),
          $(_0x4b7f75(0x1c5))
            [_0x4b7f75(0x206)](_0x4b7f75(0x233))
            ["siblings"](".w-checkbox-input")
            [_0x4b7f75(0x25f)](_0x4b7f75(0x1d0));
      }, 0x3e8);
  }),
  updateStep(),
  $(_0x1a1dc3(0x1ff))[_0x1a1dc3(0x1bf)](function (_0x5bdaf0) {
    const _0x5a5645 = _0x1a1dc3;
    $(this)[_0x5a5645(0x1a4)](),
      _0x5bdaf0[_0x5a5645(0x258)] == _0x5a5645(0x221) &&
        (_0x5bdaf0[_0x5a5645(0x1eb)](), _0x5bdaf0[_0x5a5645(0x235)]()),
      _0x5bdaf0[_0x5a5645(0x1ed)] &&
        _0x5bdaf0[_0x5a5645(0x258)] == "Enter" &&
        $(this)["val"]($(this)["val"]() + "\x0a");
  });
