//15-3-23 push

const _0xe94fab = _0x5e61;
function _0x5e61(_0x4ac57b, _0xcd29a0) {
  const _0x5b7bd2 = _0x5b7b();
  return (
    (_0x5e61 = function (_0x5e612b, _0x538694) {
      _0x5e612b = _0x5e612b - 0x193;
      let _0x56f8cc = _0x5b7bd2[_0x5e612b];
      return _0x56f8cc;
    }),
    _0x5e61(_0x4ac57b, _0xcd29a0)
  );
}
(function (_0x429bb3, _0x1c47dd) {
  const _0x11b38b = _0x5e61,
    _0x18dbb5 = _0x429bb3();
  while (!![]) {
    try {
      const _0x389c55 =
        (-parseInt(_0x11b38b(0x221)) / 0x1) *
          (parseInt(_0x11b38b(0x1f5)) / 0x2) +
        parseInt(_0x11b38b(0x1b6)) / 0x3 +
        parseInt(_0x11b38b(0x21d)) / 0x4 +
        (-parseInt(_0x11b38b(0x22b)) / 0x5) *
          (parseInt(_0x11b38b(0x1c1)) / 0x6) +
        -parseInt(_0x11b38b(0x1db)) / 0x7 +
        (-parseInt(_0x11b38b(0x22a)) / 0x8) *
          (-parseInt(_0x11b38b(0x236)) / 0x9) +
        parseInt(_0x11b38b(0x239)) / 0xa;
      if (_0x389c55 === _0x1c47dd) break;
      else _0x18dbb5["push"](_0x18dbb5["shift"]());
    } catch (_0xa2c537) {
      _0x18dbb5["push"](_0x18dbb5["shift"]());
    }
  }
})(_0x5b7b, 0x66ab7);
let x = 0x0,
  curStep = 0x0,
  steps = $(_0xe94fab(0x212)),
  progressbarClone = $(_0xe94fab(0x1a2))[_0xe94fab(0x232)](),
  progressbar,
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
  reinitIX = $(_0xe94fab(0x202))[_0xe94fab(0x1c8)](_0xe94fab(0x196)),
  textareaLength = 0x0,
  textInputLength = 0x0,
  emailInputLength = 0x0,
  selectInputLength = 0x0,
  checkboxInputLength = 0x0,
  filledInput = [],
  savedFilledInput = JSON[_0xe94fab(0x203)](
    localStorage[_0xe94fab(0x1f1)](_0xe94fab(0x1ad))
  ),
  memory = $(_0xe94fab(0x1c3))["data"](_0xe94fab(0x230)),
  quiz = $(_0xe94fab(0x1a1))[_0xe94fab(0x1c8)](_0xe94fab(0x19b)),
  progress = 0x0;
const urlFormly = new URL(window[_0xe94fab(0x1f0)][_0xe94fab(0x1e9)]);
let params = $(_0xe94fab(0x19c))[_0xe94fab(0x1c8)](_0xe94fab(0x243)),
  skipTo = 0x0,
  next = ![],
  back = ![],
  selArr = [],
  selString = [],
  emptyInput = 0x0,
  searchQ = [],
  domainAllowed = !![],
  dom = [];
$(progressbarClone)[_0xe94fab(0x1e0)](_0xe94fab(0x1e7)),
  $(_0xe94fab(0x1f9))[_0xe94fab(0x194)]()["remove"](),
  $(_0xe94fab(0x208))["text"](steps["length"]),
  $(_0xe94fab(0x204))[_0xe94fab(0x1f6)](),
  (curStep = curStep + 0x1),
  $(_0xe94fab(0x211))[_0xe94fab(0x1d8)](curStep),
  steps["hide"](),
  $("[data-form=\x22next-btn\x22][type=\x22submit\x22]")[_0xe94fab(0x20d)](
    function () {
      const _0x3b8133 = _0xe94fab;
      $(this)[_0x3b8133(0x197)](_0x3b8133(0x1cc), _0x3b8133(0x23c));
    }
  );
function getParams() {
  const _0x427a7a = _0xe94fab;
  urlFormly["searchParams"][_0x427a7a(0x1c7)](function (_0x53720b, _0x522cdd) {
    const _0x4734eb = _0x427a7a;
    searchQ[_0x4734eb(0x247)]({ val: _0x53720b, key: _0x522cdd });
  });
}
function getSafe(_0x10c394, _0x472b69) {
  try {
    return _0x10c394();
  } catch (_0x5230ea) {
    return _0x472b69;
  }
}
savedFilledInput &&
  memory &&
  savedFilledInput[_0xe94fab(0x1c7)]((_0x5db26b) => {
    const _0x20d208 = _0xe94fab;
    if (
      $(
        _0x20d208(0x1a6) +
          _0x5db26b[_0x20d208(0x21c)] +
          _0x20d208(0x207) +
          _0x5db26b[_0x20d208(0x21b)] +
          "\x22]"
      )[_0x20d208(0x197)]("type") === _0x20d208(0x19f)
    )
      $(
        "input[name=\x22" +
          _0x5db26b[_0x20d208(0x21c)] +
          _0x20d208(0x207) +
          _0x5db26b[_0x20d208(0x21b)] +
          "\x22]"
      )[_0x20d208(0x224)](),
        $(
          "input[name=\x22" +
            _0x5db26b[_0x20d208(0x21c)] +
            _0x20d208(0x207) +
            _0x5db26b[_0x20d208(0x21b)] +
            "\x22]"
        )
          [_0x20d208(0x217)](_0x20d208(0x20a))
          ["addClass"](_0x20d208(0x1fc));
    else
      _0x5db26b[_0x20d208(0x21b)] === "on"
        ? ($(_0x20d208(0x1a6) + _0x5db26b[_0x20d208(0x21c)] + "\x22]")[
            _0x20d208(0x224)
          ](),
          $(_0x20d208(0x1a6) + _0x5db26b["inputName"] + "\x22]")
            ["siblings"](_0x20d208(0x234))
            [_0x20d208(0x1b9)](_0x20d208(0x1fc)))
        : ($(_0x20d208(0x1a6) + _0x5db26b[_0x20d208(0x21c)] + "\x22]")[
            _0x20d208(0x241)
          ](_0x5db26b[_0x20d208(0x21b)]),
          $(_0x20d208(0x1ff) + _0x5db26b["inputName"] + "\x22]")[
            _0x20d208(0x241)
          ](_0x5db26b["value"]),
          $(_0x20d208(0x22f) + _0x5db26b["inputName"] + "\x22]")
            [_0x20d208(0x1ef)](
              _0x20d208(0x1a7) + _0x5db26b[_0x20d208(0x21b)] + "\x22]"
            )
            [_0x20d208(0x1dc)](_0x20d208(0x215), !![]));
  });
params &&
  (getParams(),
  searchQ["forEach"]((_0x540ef7) => {
    const _0x13aeca = _0xe94fab;
    console[_0x13aeca(0x1b4)](
      _0x540ef7,
      $(_0x13aeca(0x23a) + _0x540ef7[_0x13aeca(0x241)] + "\x22]")[
        _0x13aeca(0x197)
      ](_0x13aeca(0x1cc))
    );
    if (
      $(
        "input[name=\x22" +
          _0x540ef7[_0x13aeca(0x1e5)] +
          _0x13aeca(0x207) +
          _0x540ef7[_0x13aeca(0x241)] +
          "\x22]"
      )["attr"]("type") === _0x13aeca(0x19f)
    )
      $(
        _0x13aeca(0x1a6) +
          _0x540ef7[_0x13aeca(0x1e5)] +
          _0x13aeca(0x207) +
          _0x540ef7[_0x13aeca(0x241)] +
          "\x22]"
      )["click"](),
        $(
          "input[name=\x22" +
            _0x540ef7[_0x13aeca(0x1e5)] +
            _0x13aeca(0x207) +
            _0x540ef7["val"] +
            "\x22]"
        )
          ["siblings"](_0x13aeca(0x20a))
          ["addClass"](_0x13aeca(0x1fc));
    else
      _0x540ef7[_0x13aeca(0x241)] === "on"
        ? ($("input[name=\x22" + _0x540ef7[_0x13aeca(0x1e5)] + "\x22]")[
            "click"
          ](),
          $(_0x13aeca(0x1a6) + _0x540ef7[_0x13aeca(0x1e5)] + "\x22]")
            [_0x13aeca(0x217)](".w-checkbox-input")
            [_0x13aeca(0x1b9)](_0x13aeca(0x1fc)))
        : ($(_0x13aeca(0x1a6) + _0x540ef7[_0x13aeca(0x1e5)] + "\x22]")[
            _0x13aeca(0x241)
          ](_0x540ef7[_0x13aeca(0x241)]),
          $(_0x13aeca(0x1ff) + _0x540ef7[_0x13aeca(0x1e5)] + "\x22]")[
            _0x13aeca(0x241)
          ](_0x540ef7[_0x13aeca(0x241)]),
          $(_0x13aeca(0x22f) + _0x540ef7[_0x13aeca(0x1e5)] + "\x22]")
            [_0x13aeca(0x1ef)]("option[value=\x22" + _0x540ef7["val"] + "\x22]")
            [_0x13aeca(0x1dc)](_0x13aeca(0x215), !![]));
  }));
quiz &&
  steps[_0xe94fab(0x20d)](function () {
    const _0x56e987 = _0xe94fab;
    $(this)[_0x56e987(0x194)]()["attr"](_0x56e987(0x219), !![]),
      $(this)[_0x56e987(0x194)]()["attr"](_0x56e987(0x1f7), 0xfa);
  });
function _0x5b7b() {
  const _0x17e207 = [
    "selection",
    "log",
    "stringify",
    "1094520wTIbIq",
    "set",
    "0.4",
    "addClass",
    "keyCode",
    "input[type=\x22submit\x22]",
    "some",
    "skipTo",
    "split",
    "Please\x20wait...",
    ":checked",
    "283902zgEpbm",
    "[data-form=\x22custom-progress-indicator\x22]",
    "[data-memory]",
    "required",
    "clickable",
    "input:radio[name=\x22",
    "forEach",
    "data",
    "clicked\x20submit",
    "step",
    ":radio",
    "type",
    "history",
    "[type=\x22checkbox\x22]",
    "fadeIn",
    ":input[type=\x22text\x22][required]",
    ":input[required]",
    "focus",
    "checked",
    "[data-answer]:visible",
    "removeItem",
    "none",
    "card",
    "text",
    "setItem",
    "[data-form=\x22back-btn\x22]",
    "1696380jVpifA",
    "prop",
    "append",
    "Enter",
    "auto",
    "removeClass",
    "clickable-all",
    "show",
    ":input[type=\x22tel\x22]",
    ":input[type=\x22text\x22]",
    "key",
    "debug\x20mode",
    "current",
    ":input[type=\x22email\x22]",
    "href",
    "ctrlKey",
    "textarea[required]",
    "Webflow",
    ":input[type=\x22radio\x22][required]",
    "enter",
    "find",
    "location",
    "getItem",
    ":input",
    "data-go-to",
    ":input[type=\x22tel\x22][required]",
    "1022xwPPWG",
    "hide",
    "data-radio-delay",
    "metaKey",
    "[data-form=\x22progress\x22]",
    "go-to",
    "[data-form=\x22submit\x22]:visible",
    "w--redirected-checked",
    "searchParams",
    "length",
    "textarea[name=\x22",
    "submit",
    "keypress",
    "[data-reinit]",
    "parse",
    "[data-form=\x22submit-btn\x22]",
    ":input[type=\x22checkbox\x22]",
    "[data-clickable]",
    "\x22][value=\x22",
    "[data-text=\x22total-steps\x22]",
    "stopPropagation",
    ".w-radio-input",
    "[data-answer]",
    "[data-radio-delay]",
    "each",
    "[data-go-to]",
    ":input[type=\x22checkbox\x22]:checked",
    "checkbox",
    "[data-text=\x22current-step\x22]",
    "[data-form=\x22step\x22]",
    "textarea",
    "input[type=\x22checkbox\x22]:visible",
    "selected",
    "[data-selection]",
    "siblings",
    "[data-btn=\x22check\x22]",
    "data-radio-skip",
    "[data-skip-to]",
    "value",
    "inputName",
    "196904SjxsjE",
    "[data-form=\x22next-btn\x22]",
    "select[required]",
    ":input[type=\x27radio\x27]:checked",
    "881cckqKr",
    "nonvalidated",
    "novalidate",
    "click",
    "findIndex",
    "slow",
    "input[autofocus]",
    "name",
    "<br>Data\x20Go\x20To\x20=\x20",
    "944976LzDvUm",
    "35sNMWYP",
    ":input[type=\x22file\x22][required]",
    "[data-selected]:checked",
    "body",
    "select[name=\x22",
    "memory",
    "[data-enter]",
    "clone",
    "require",
    ".w-checkbox-input",
    "wait",
    "36DgrqPj",
    "logic-extra",
    "[data-form=\x22multistep\x22]",
    "5577310PTNTiJ",
    "input[value=\x22",
    "index",
    "button",
    "input:radio[required]",
    "input[type=\x22text\x22][required]:visible",
    "<br>Data\x20Answer\x20=\x20",
    ":input[type=\x22radio\x22]",
    "val",
    "select[required]:visible",
    "query-param",
    "[data-answer=\x22",
    "debug-mode",
    "disabled",
    "push",
    "answer",
    "children",
    "[data-selection=\x22other\x22]",
    "reinit",
    "attr",
    "input[type=\x22email\x22]:visible",
    "radio-skip",
    "replaceState",
    "quiz",
    "[data-query-param]",
    "filter",
    "init",
    "radio",
    "css",
    "[data-quiz]",
    "[data-form=\x22progress-indicator\x22]",
    "block-domain",
    ":input[type=\x22number\x22][required]",
    "select",
    "input[name=\x22",
    "option[value=\x22",
    ":input[type=\x22num\x22]",
    "input",
    "backTo",
    "includes",
    "ix2",
    "filledInput",
    "\x22]:checked",
    "parents",
    "skip-to",
    "preventDefault",
    "readystatechange",
  ];
  _0x5b7b = function () {
    return _0x17e207;
  };
  return _0x5b7b();
}
function disableBtn() {
  const _0x53dfc8 = _0xe94fab;
  (fill = ![]),
    $(_0x53dfc8(0x21e))[_0x53dfc8(0x1a0)]({
      opacity: _0x53dfc8(0x1b8),
      "pointer-events": _0x53dfc8(0x1d6),
    }),
    $("[data-form=\x22next-btn\x22]")["addClass"](_0x53dfc8(0x246)),
    $(_0x53dfc8(0x204))["css"]({
      opacity: _0x53dfc8(0x1b8),
      "pointer-events": "none",
    }),
    $(_0x53dfc8(0x204))["addClass"](_0x53dfc8(0x246));
}
function enableBtn() {
  const _0x2c37a0 = _0xe94fab;
  (fill = !![]),
    $("[data-form=\x22next-btn\x22]")[_0x2c37a0(0x1a0)]({
      "pointer-events": _0x2c37a0(0x1df),
      opacity: "1",
    }),
    $(_0x2c37a0(0x21e))[_0x2c37a0(0x1e0)]("disabled"),
    $(_0x2c37a0(0x204))[_0x2c37a0(0x1a0)]({
      "pointer-events": _0x2c37a0(0x1df),
      opacity: "1",
    }),
    $("[data-form=\x22submit-btn\x22]")[_0x2c37a0(0x1e0)]("disabled");
}
function saveFilledInput() {
  const _0x2733de = _0xe94fab;
  $("form[data-form=\x22multistep\x22]\x20:input")
    ["not"]("[type=\x22submit\x22]")
    ["each"](function () {
      const _0x57f9b5 = _0x5e61;
      $(this)["attr"](_0x57f9b5(0x1cc)) === _0x57f9b5(0x210) ||
      $(this)[_0x57f9b5(0x197)](_0x57f9b5(0x1cc)) === _0x57f9b5(0x19f)
        ? $(this)["prop"](_0x57f9b5(0x1d3)) &&
          (filledInput[_0x57f9b5(0x1bc)](
            (_0x39f064) =>
              _0x39f064["inputName"] === $(this)["attr"](_0x57f9b5(0x228))
          )
            ? ((filledInput = filledInput[_0x57f9b5(0x19d)](
                (_0x161956) =>
                  _0x161956["inputName"] !==
                  $(this)[_0x57f9b5(0x197)](_0x57f9b5(0x228))
              )),
              $(this)[_0x57f9b5(0x241)]() !== "" &&
                filledInput[_0x57f9b5(0x247)]({
                  inputName: $(this)[_0x57f9b5(0x197)](_0x57f9b5(0x228)),
                  value: $(this)[_0x57f9b5(0x241)](),
                }))
            : $(this)[_0x57f9b5(0x241)]() !== "" &&
              filledInput[_0x57f9b5(0x247)]({
                inputName: $(this)[_0x57f9b5(0x197)](_0x57f9b5(0x228)),
                value: $(this)[_0x57f9b5(0x241)](),
              }))
        : filledInput["some"](
            (_0x2df884) =>
              _0x2df884[_0x57f9b5(0x21c)] === $(this)[_0x57f9b5(0x197)]("name")
          )
        ? ((filledInput = filledInput["filter"](
            (_0x2985b9) =>
              _0x2985b9[_0x57f9b5(0x21c)] !== $(this)["attr"](_0x57f9b5(0x228))
          )),
          $(this)[_0x57f9b5(0x241)]() !== "" &&
            filledInput[_0x57f9b5(0x247)]({
              inputName: $(this)["attr"](_0x57f9b5(0x228)),
              value: $(this)[_0x57f9b5(0x241)](),
            }))
        : $(this)[_0x57f9b5(0x241)]() !== "" &&
          filledInput[_0x57f9b5(0x247)]({
            inputName: $(this)[_0x57f9b5(0x197)](_0x57f9b5(0x228)),
            value: $(this)[_0x57f9b5(0x241)](),
          });
    }),
    filledInput &&
      filledInput["forEach"]((_0xd93c17) => {
        const _0x3c591c = _0x5e61;
        urlFormly["searchParams"]["delete"](_0xd93c17[_0x3c591c(0x21c)]),
          urlFormly[_0x3c591c(0x1fd)][_0x3c591c(0x1b7)](
            _0xd93c17[_0x3c591c(0x21c)],
            _0xd93c17[_0x3c591c(0x21b)]
          ),
          window[_0x3c591c(0x1cd)][_0x3c591c(0x19a)](null, null, urlFormly);
      }),
    localStorage[_0x2733de(0x1d5)](_0x2733de(0x1ad)),
    localStorage[_0x2733de(0x1d9)](
      _0x2733de(0x1ad),
      JSON[_0x2733de(0x1b5)](filledInput)
    );
}
function scrollTop() {}
function updateStep() {
  const _0x20fc70 = _0xe94fab;
  (inputFilled = !![]),
    (radioFilled = !![]),
    (checkboxFilled = !![]),
    (numFilled = !![]),
    (selectFilled = !![]),
    (textareaFilled = !![]),
    (emailFilled = !![]),
    (emptyInput = 0x0),
    (empReqInput = []),
    (empReqSelect = []),
    (empReqTextarea = []),
    (empReqNum = []),
    (empReqRadio = []);
  $(_0x20fc70(0x206))["data"](_0x20fc70(0x1c5)) &&
    (steps["find"](_0x20fc70(0x1d1))[_0x20fc70(0x20d)](function () {
      const _0x45636d = _0x20fc70;
      $(
        $(_0x45636d(0x1c2))[
          $(this)[_0x45636d(0x1af)](_0x45636d(0x212))[_0x45636d(0x23b)]()
        ]
      ),
        $(this)[_0x45636d(0x241)]() === "" && emptyInput++;
    }),
    emptyInput > 0x0
      ? $(_0x20fc70(0x1bb))["addClass"](_0x20fc70(0x246))
      : $(_0x20fc70(0x1bb))[_0x20fc70(0x1e0)](_0x20fc70(0x246)));
  $("[data-form=\x22custom-progress-indicator\x22]")[_0x20fc70(0x1e0)](
    _0x20fc70(0x1e7)
  ),
    $($(_0x20fc70(0x1c2))[x])[_0x20fc70(0x1b9)](_0x20fc70(0x1e7)),
    (selection = selections[_0x20fc70(0x19d)](
      (_0x27ac03) => _0x27ac03[_0x20fc70(0x1ca)] === x - 0x1
    ));
  next &&
    (x = getSafe(() => selection[0x0]["skipTo"])
      ? parseInt(getSafe(() => selection[0x0]["skipTo"]))
      : x);
  $(_0x20fc70(0x20b))[_0x20fc70(0x1f6)](), steps[_0x20fc70(0x1f6)]();
  reinitIX === !![] && window[_0x20fc70(0x1ec)]["destroy"]();
  $(progressbar)["removeClass"](_0x20fc70(0x1e7));
  for (i = 0x0; i <= x; i++) {
    $(progressbar[i])[_0x20fc70(0x1b9)](_0x20fc70(0x1e7));
  }
  reinitIX === !![]
    ? (window[_0x20fc70(0x1ec)] &&
        window[_0x20fc70(0x1ec)]
          [_0x20fc70(0x233)](_0x20fc70(0x1ac))
          [_0x20fc70(0x19e)](),
      document["dispatchEvent"](new Event(_0x20fc70(0x1b2))),
      $(steps[x])[_0x20fc70(0x1e2)]())
    : $(steps[x])[_0x20fc70(0x1cf)](_0x20fc70(0x226));
  x === 0x0 &&
    !$(steps[x])["data"](_0x20fc70(0x1d7)) &&
    $(steps[x])["find"](_0x20fc70(0x20b))[_0x20fc70(0x1e2)]();
  selection["length"] > 0x0
    ? $(steps[x])
        [_0x20fc70(0x1ef)](
          _0x20fc70(0x244) + selection[0x0][_0x20fc70(0x215)] + "\x22]"
        )
        [_0x20fc70(0x1e2)]()
    : $(steps[x])
        [_0x20fc70(0x1ef)]("[data-answer=\x22" + answer + "\x22]")
        [_0x20fc70(0x1e2)]();
  if (x === 0x0)
    $(_0x20fc70(0x1da))["hide"](),
      $("[data-form=\x22next-btn\x22]")[_0x20fc70(0x1e2)]();
  else
    x === steps[_0x20fc70(0x1fe)] - 0x1 ||
    $(steps[x])[_0x20fc70(0x1ef)](_0x20fc70(0x1fb))[_0x20fc70(0x1fe)] > 0x0
      ? ($(_0x20fc70(0x21e))[_0x20fc70(0x1f6)](),
        $(_0x20fc70(0x204))[_0x20fc70(0x1e2)](),
        $("[data-form=\x22back-btn\x22]")["show"]())
      : ($(_0x20fc70(0x21e))[_0x20fc70(0x1e2)](),
        $(_0x20fc70(0x1da))["show"](),
        $("[data-form=\x22submit-btn\x22]")[_0x20fc70(0x1f6)]());
  $($(steps[x])[_0x20fc70(0x1ef)](_0x20fc70(0x227))[0x0])[_0x20fc70(0x1d2)](),
    $($(steps[x])["find"]("textarea[autofocus]")[0x0])[_0x20fc70(0x1d2)](),
    validation();
  for (idx = 0x0; idx <= progress; idx++) {
    $($(_0x20fc70(0x1c2))[idx])[_0x20fc70(0x1e0)](_0x20fc70(0x246));
  }
}
function validateEmail(_0x1bf923, _0xbcd040) {
  const _0x1ce0e9 = _0xe94fab;
  let _0x1a670a = _0x1bf923["includes"]("@")
    ? _0x1bf923[_0x1ce0e9(0x1be)]("@")[0x1][_0x1ce0e9(0x1be)](".")[0x0]
    : [];
  dom = [];
  _0xbcd040 !== undefined &&
    _0xbcd040[_0x1ce0e9(0x1be)](",")[_0x1ce0e9(0x1c7)](function (_0x12f5f9) {
      const _0x5507c6 = _0x1ce0e9;
      _0x12f5f9[_0x5507c6(0x1ab)](_0x1a670a) &&
        dom[_0x5507c6(0x247)](_0x1a670a);
    });
  dom[_0x1ce0e9(0x1fe)] > 0x0 ? (domainAllowed = ![]) : (domainAllowed = !![]);
  var _0x5c998a = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,20})?$/;
  !_0x5c998a["test"](_0x1bf923) ? (emailFilled = ![]) : (emailFilled = !![]);
}
function validation() {
  const _0x6b0e0b = _0xe94fab;
  $(steps[x])[_0x6b0e0b(0x1c8)](_0x6b0e0b(0x1d7)) && enableBtn();
  (textareaLength = $(steps[x])[_0x6b0e0b(0x1ef)]("textarea[required]:visible")[
    _0x6b0e0b(0x1fe)
  ]),
    (textInputLength = $(steps[x])[_0x6b0e0b(0x1ef)](_0x6b0e0b(0x23e))[
      _0x6b0e0b(0x1fe)
    ]),
    (selectInputLength = $(steps[x])["find"](_0x6b0e0b(0x242))[
      _0x6b0e0b(0x1fe)
    ]),
    (emailInputLength = $(steps[x])[_0x6b0e0b(0x1ef)](_0x6b0e0b(0x198))[
      _0x6b0e0b(0x1fe)
    ]),
    (checkboxInputLength = $(steps[x])[_0x6b0e0b(0x1ef)](_0x6b0e0b(0x214))[
      _0x6b0e0b(0x1fe)
    ]);
  textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0
    ? disableBtn()
    : enableBtn();
  var _0x350be2 = $(steps[x])["data"](_0x6b0e0b(0x210))
    ? $(steps[x])[_0x6b0e0b(0x1c8)](_0x6b0e0b(0x210))
    : 0x0;
  !$("[data-logic-extra]")[_0x6b0e0b(0x1c8)]("logic-extra")
    ? ($(steps[x])["find"](_0x6b0e0b(0x1f2))["is"](_0x6b0e0b(0x1ce)) &&
        (_0x350be2 === "*" ||
        _0x350be2 >
          $(steps[x])[_0x6b0e0b(0x1ef)](_0x6b0e0b(0x205))[_0x6b0e0b(0x1fe)]
          ? $(steps[x])
              [_0x6b0e0b(0x1ef)](_0x6b0e0b(0x205))
              ["each"](function () {
                const _0x35458d = _0x6b0e0b;
                $(this)["is"](_0x35458d(0x1c0))
                  ? $(steps[x])[_0x35458d(0x1ef)](_0x35458d(0x1d1))[
                      _0x35458d(0x1fe)
                    ] < 0x1 && (checkboxFilled = !![])
                  : (checkboxFilled = ![]);
              })
          : $(steps[x])[_0x6b0e0b(0x1ef)](_0x6b0e0b(0x20f))[_0x6b0e0b(0x1fe)] >=
            _0x350be2
          ? (checkboxFilled = !![])
          : (checkboxFilled = ![])),
      $(steps[x])
        ["find"](_0x6b0e0b(0x23d))
        ["each"](function (_0xa8c5a0) {
          const _0x5708bd = _0x6b0e0b;
          var _0x303396 = $(this)[_0x5708bd(0x197)](_0x5708bd(0x228));
          $(_0x5708bd(0x1c6) + _0x303396 + _0x5708bd(0x1ae))[
            _0x5708bd(0x1fe)
          ] == 0x0
            ? !empReqRadio[_0x5708bd(0x1ef)](
                (_0xc32498) => _0xc32498["input"] === _0xa8c5a0
              ) && empReqRadio[_0x5708bd(0x247)]({ input: _0xa8c5a0 })
            : (empReqRadio = empReqRadio[_0x5708bd(0x19d)](
                (_0x11e71e) => _0x11e71e[_0x5708bd(0x1a9)] !== _0xa8c5a0
              )),
            empReqRadio["length"] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0x6b0e0b(0x1ef)](_0x6b0e0b(0x1d0))
        [_0x6b0e0b(0x20d)](function (_0x440dd5) {
          const _0x38eb4c = _0x6b0e0b;
          $(this)[_0x38eb4c(0x241)]() !== ""
            ? (empReqInput = empReqInput[_0x38eb4c(0x19d)](
                (_0xc8c2e7) => _0xc8c2e7["input"] !== _0x440dd5
              ))
            : !empReqInput[_0x38eb4c(0x1ef)](
                (_0x2e4b39) => _0x2e4b39[_0x38eb4c(0x1a9)] === _0x440dd5
              ) && empReqInput["push"]({ input: _0x440dd5 }),
            empReqInput[_0x38eb4c(0x1fe)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x6b0e0b(0x1ef)](_0x6b0e0b(0x1f4))
        [_0x6b0e0b(0x20d)](function (_0x330644) {
          const _0x121dbe = _0x6b0e0b;
          $(this)[_0x121dbe(0x241)]() !== ""
            ? (empReqTel = empReqTel[_0x121dbe(0x19d)](
                (_0x3a9055) => _0x3a9055[_0x121dbe(0x1a9)] !== _0x330644
              ))
            : !empReqTel["find"](
                (_0x181a5f) => _0x181a5f[_0x121dbe(0x1a9)] === _0x330644
              ) && empReqTel["push"]({ input: _0x330644 }),
            empReqTel["length"] === 0x0
              ? (telFilled = !![])
              : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x6b0e0b(0x1ef)](_0x6b0e0b(0x22c))
        [_0x6b0e0b(0x20d)](function (_0x47f51a) {
          const _0x2c205c = _0x6b0e0b;
          $(this)[_0x2c205c(0x241)]() !== ""
            ? (empReqFile = empReqFile["filter"](
                (_0x567af6) => _0x567af6[_0x2c205c(0x1a9)] !== _0x47f51a
              ))
            : !empReqFile[_0x2c205c(0x1ef)](
                (_0x6e1df2) => _0x6e1df2["input"] === _0x47f51a
              ) && empReqFile[_0x2c205c(0x247)]({ input: _0x47f51a }),
            empReqFile["length"] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x6b0e0b(0x1ef)](_0x6b0e0b(0x1a4))
        [_0x6b0e0b(0x20d)](function (_0x531e6c) {
          const _0x416a21 = _0x6b0e0b;
          $(this)[_0x416a21(0x241)]() !== ""
            ? (empReqNum = empReqNum[_0x416a21(0x19d)](
                (_0x207dcc) => _0x207dcc[_0x416a21(0x1a9)] !== _0x531e6c
              ))
            : !empReqNum[_0x416a21(0x1ef)](
                (_0x99e7f8) => _0x99e7f8[_0x416a21(0x1a9)] === _0x531e6c
              ) && empReqNum["push"]({ input: _0x531e6c }),
            empReqNum[_0x416a21(0x1fe)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x6b0e0b(0x1ef)](_0x6b0e0b(0x21f))
        [_0x6b0e0b(0x20d)](function (_0x4bfc09) {
          const _0x59efa1 = _0x6b0e0b;
          let _0x4c0db4 = $(this)["val"]();
          _0x4c0db4 === "" && (_0x4c0db4 = null),
            _0x4c0db4 != null
              ? (empReqSelect = empReqSelect[_0x59efa1(0x19d)](
                  (_0x1ca5d1) => _0x1ca5d1[_0x59efa1(0x1a9)] !== _0x4bfc09
                ))
              : !empReqSelect[_0x59efa1(0x1ef)](
                  (_0x180afd) => _0x180afd[_0x59efa1(0x1a9)] === _0x4bfc09
                ) && empReqSelect[_0x59efa1(0x247)]({ input: _0x4bfc09 }),
            empReqSelect[_0x59efa1(0x1fe)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x6b0e0b(0x1ef)](_0x6b0e0b(0x1eb))
        [_0x6b0e0b(0x20d)](function (_0xa77aea) {
          const _0x2988e0 = _0x6b0e0b;
          $(this)[_0x2988e0(0x241)]() !== ""
            ? (empReqTextarea = empReqTextarea[_0x2988e0(0x19d)](
                (_0x57f609) => _0x57f609[_0x2988e0(0x1a9)] !== _0xa77aea
              ))
            : !empReqTextarea[_0x2988e0(0x1ef)](
                (_0x27d177) => _0x27d177[_0x2988e0(0x1a9)] === _0xa77aea
              ) && empReqTextarea["push"]({ input: _0xa77aea }),
            empReqTextarea[_0x2988e0(0x1fe)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x6b0e0b(0x1ef)](":input[type=\x22email\x22][required]")
        [_0x6b0e0b(0x20d)](function () {
          const _0x54025f = _0x6b0e0b;
          $(this)[_0x54025f(0x241)]() !== ""
            ? validateEmail(
                $(this)[_0x54025f(0x241)](),
                $(this)[_0x54025f(0x1c8)]("block-domain")
              )
            : (emailFilled = ![]);
        }))
    : ($(steps[x])["data"]("card") &&
        ((answer = $(steps[x])
          [_0x6b0e0b(0x1ef)](_0x6b0e0b(0x20e))
          [_0x6b0e0b(0x1c8)]("go-to")),
        (selections = selections[_0x6b0e0b(0x19d)](
          (_0x31a338) => _0x31a338[_0x6b0e0b(0x1ca)] !== x
        )),
        selections[_0x6b0e0b(0x247)]({ step: x, selected: answer })),
      $(steps[x])
        [_0x6b0e0b(0x1ef)]("[data-answer]:visible")
        [_0x6b0e0b(0x1ef)](_0x6b0e0b(0x1f2))
        ["is"](_0x6b0e0b(0x1ce)) &&
        (_0x350be2 === "*" ||
        _0x350be2 >
          $(steps[x])[_0x6b0e0b(0x1ef)](_0x6b0e0b(0x205))[_0x6b0e0b(0x1fe)]
          ? $(steps[x])
              ["find"](_0x6b0e0b(0x205))
              ["each"](function () {
                const _0x13f9ac = _0x6b0e0b;
                $(this)["is"](_0x13f9ac(0x1c0))
                  ? $(steps[x])["find"](":input[required]")[_0x13f9ac(0x1fe)] <
                      0x1 &&
                    ($(this)
                      [_0x13f9ac(0x1af)](_0x13f9ac(0x20e))
                      [_0x13f9ac(0x197)](_0x13f9ac(0x1f3)) &&
                      ((answer = $(this)
                        [_0x13f9ac(0x1af)](_0x13f9ac(0x20e))
                        [_0x13f9ac(0x197)](_0x13f9ac(0x1f3))),
                      (selections = selections[_0x13f9ac(0x19d)](
                        (_0x4d0f65) => _0x4d0f65["step"] !== x
                      )),
                      selections[_0x13f9ac(0x247)]({
                        step: x,
                        selected: answer,
                      })),
                    (checkboxFilled = !![]))
                  : (checkboxFilled = ![]);
              })
          : $(steps[x])
              ["find"](_0x6b0e0b(0x1d4))
              [_0x6b0e0b(0x1ef)](_0x6b0e0b(0x20f))[_0x6b0e0b(0x1fe)] >=
            _0x350be2
          ? ($(steps[x])
              ["find"](_0x6b0e0b(0x1d4))
              [_0x6b0e0b(0x1ef)](_0x6b0e0b(0x20f))
              [_0x6b0e0b(0x1af)](_0x6b0e0b(0x20e))
              [_0x6b0e0b(0x197)](_0x6b0e0b(0x1f3)) &&
              ((answer = $(steps[x])
                [_0x6b0e0b(0x1ef)](_0x6b0e0b(0x1d4))
                [_0x6b0e0b(0x1ef)](":input[type=\x22checkbox\x22]:checked")
                [_0x6b0e0b(0x1af)](_0x6b0e0b(0x20e))
                [_0x6b0e0b(0x197)](_0x6b0e0b(0x1f3))),
              (selections = selections[_0x6b0e0b(0x19d)](
                (_0xff838b) => _0xff838b[_0x6b0e0b(0x1ca)] !== x
              )),
              selections[_0x6b0e0b(0x247)]({ step: x, selected: answer })),
            (selections = selections[_0x6b0e0b(0x19d)](
              (_0x1d7248) => _0x1d7248["step"] !== x
            )),
            selections[_0x6b0e0b(0x247)]({ step: x, selected: answer }),
            (checkboxFilled = !![]))
          : (checkboxFilled = ![])),
      $(steps[x])
        [_0x6b0e0b(0x1ef)](_0x6b0e0b(0x1d4))
        [_0x6b0e0b(0x1ef)](_0x6b0e0b(0x1d1))
        ["is"]("[type=\x22radio\x22]")
        ? $(steps[x])
            [_0x6b0e0b(0x1ef)](_0x6b0e0b(0x1d4))
            [_0x6b0e0b(0x1ef)](_0x6b0e0b(0x1ed))
            ["is"](_0x6b0e0b(0x1c0))
          ? (radioFilled = !![])
          : (radioFilled = ![])
        : (radioFilled = !![]),
      $(steps[x])
        [_0x6b0e0b(0x1ef)](_0x6b0e0b(0x1d4))
        [_0x6b0e0b(0x1ef)](_0x6b0e0b(0x1d0))
        ["each"](function (_0x3e0054) {
          const _0x585829 = _0x6b0e0b;
          $(this)[_0x585829(0x241)]() !== ""
            ? (empReqInput = empReqInput[_0x585829(0x19d)](
                (_0x1705c3) => _0x1705c3[_0x585829(0x1a9)] !== _0x3e0054
              ))
            : !empReqInput["find"](
                (_0x550b90) => _0x550b90["input"] === _0x3e0054
              ) && empReqInput["push"]({ input: _0x3e0054 }),
            empReqInput[_0x585829(0x1fe)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x6b0e0b(0x1ef)](_0x6b0e0b(0x1d4))
        [_0x6b0e0b(0x1ef)](_0x6b0e0b(0x1e4))
        [_0x6b0e0b(0x20d)](function (_0x37adbc) {
          const _0x8b6485 = _0x6b0e0b;
          (skipTo = undefined),
            $(this)
              ["parents"]("[data-skip-to]")
              [_0x8b6485(0x1c8)]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0x8b6485(0x1af)](_0x8b6485(0x21a))
                ["data"](_0x8b6485(0x1b0))),
            $(this)
              [_0x8b6485(0x1af)]("[data-go-to]")
              [_0x8b6485(0x197)]("data-go-to") &&
              ((answer = $(this)
                [_0x8b6485(0x1af)](_0x8b6485(0x20e))
                ["attr"](_0x8b6485(0x1f3))),
              (selections = selections[_0x8b6485(0x19d)](
                (_0x2af918) => _0x2af918[_0x8b6485(0x1ca)] !== x
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x8b6485(0x247)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x8b6485(0x225)](
                  (_0x24b352) => _0x24b352[_0x8b6485(0x1ca)] === x
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x8b6485(0x1aa)] = x)));
        }),
      $(steps[x])
        ["find"](_0x6b0e0b(0x1d4))
        ["find"](":input[type=\x22number\x22][required]")
        [_0x6b0e0b(0x20d)](function (_0x40c922) {
          const _0x40f6f4 = _0x6b0e0b;
          $(this)["val"]() !== ""
            ? (empReqNum = empReqNum["filter"](
                (_0x41d309) => _0x41d309[_0x40f6f4(0x1a9)] !== _0x40c922
              ))
            : !empReqNum[_0x40f6f4(0x1ef)](
                (_0x35b7ed) => _0x35b7ed["input"] === _0x40c922
              ) && empReqNum[_0x40f6f4(0x247)]({ input: _0x40c922 }),
            empReqNum["length"] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x6b0e0b(0x1d4))
        [_0x6b0e0b(0x1ef)](_0x6b0e0b(0x1a8))
        ["each"](function (_0x1f1f9d) {
          const _0x22e5fe = _0x6b0e0b;
          (skipTo = undefined),
            $(this)
              [_0x22e5fe(0x1af)]("[data-skip-to]")
              [_0x22e5fe(0x1c8)](_0x22e5fe(0x1b0)) !== "" &&
              (skipTo = $(this)
                [_0x22e5fe(0x1af)](_0x22e5fe(0x21a))
                ["data"](_0x22e5fe(0x1b0))),
            $(this)
              [_0x22e5fe(0x1af)](_0x22e5fe(0x20e))
              [_0x22e5fe(0x197)](_0x22e5fe(0x1f3)) &&
              ((answer = $(this)
                ["parents"](_0x22e5fe(0x20e))
                ["attr"](_0x22e5fe(0x1f3))),
              (selections = selections[_0x22e5fe(0x19d)](
                (_0x456f63) => _0x456f63[_0x22e5fe(0x1ca)] !== x
              )),
              selections[_0x22e5fe(0x247)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x22e5fe(0x247)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x22e5fe(0x225)](
                  (_0x38e6e0) => _0x38e6e0[_0x22e5fe(0x1ca)] === x
                )),
                (selections[objIndex][_0x22e5fe(0x1bd)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x22e5fe(0x1aa)] = x)));
        }),
      $(steps[x])
        ["find"]("[data-answer]:visible")
        [_0x6b0e0b(0x1ef)](":input[type=\x22tel\x22][required]")
        [_0x6b0e0b(0x20d)](function (_0x51b595) {
          const _0x51c5eb = _0x6b0e0b;
          $(this)[_0x51c5eb(0x241)]() !== ""
            ? (empReqTel = empReqTel["filter"](
                (_0x19c478) => _0x19c478[_0x51c5eb(0x1a9)] !== _0x51b595
              ))
            : !empReqTel["find"](
                (_0x2a519c) => _0x2a519c[_0x51c5eb(0x1a9)] === _0x51b595
              ) && empReqTel[_0x51c5eb(0x247)]({ input: _0x51b595 }),
            empReqTel[_0x51c5eb(0x1fe)] === 0x0
              ? (telFilled = !![])
              : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x6b0e0b(0x1ef)](_0x6b0e0b(0x1d4))
        ["find"](_0x6b0e0b(0x1e3))
        [_0x6b0e0b(0x20d)](function (_0x364f87) {
          const _0x1948a2 = _0x6b0e0b;
          (skipTo = undefined),
            $(this)
              [_0x1948a2(0x1af)](_0x1948a2(0x21a))
              ["data"](_0x1948a2(0x1b0)) !== "" &&
              (skipTo = $(this)
                [_0x1948a2(0x1af)]("[data-skip-to]")
                [_0x1948a2(0x1c8)](_0x1948a2(0x1b0))),
            $(this)
              ["parents"](_0x1948a2(0x20e))
              [_0x1948a2(0x197)](_0x1948a2(0x1f3)) &&
              ((answer = $(this)
                [_0x1948a2(0x1af)]("[data-go-to]")
                [_0x1948a2(0x197)](_0x1948a2(0x1f3))),
              (selections = selections[_0x1948a2(0x19d)](
                (_0x251e23) => _0x251e23[_0x1948a2(0x1ca)] !== x
              )),
              selections[_0x1948a2(0x247)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x1948a2(0x247)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x1948a2(0x225)](
                  (_0x11a329) => _0x11a329[_0x1948a2(0x1ca)] === x
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x6b0e0b(0x1ef)](_0x6b0e0b(0x1d4))
        [_0x6b0e0b(0x1ef)](_0x6b0e0b(0x22c))
        [_0x6b0e0b(0x20d)](function (_0x3d5a88) {
          const _0xb064ea = _0x6b0e0b;
          $(this)[_0xb064ea(0x241)]() !== ""
            ? (empReqfile = empReqfile["filter"](
                (_0x46081) => _0x46081["input"] !== _0x3d5a88
              ))
            : !empReqfile["find"](
                (_0x53a06b) => _0x53a06b[_0xb064ea(0x1a9)] === _0x3d5a88
              ) && empReqfile["push"]({ input: _0x3d5a88 }),
            empReqfile["length"] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x6b0e0b(0x1ef)]("[data-answer]:visible")
        ["find"](":input[type=\x22file\x22]")
        [_0x6b0e0b(0x20d)](function (_0x30660c) {
          const _0x3c6934 = _0x6b0e0b;
          (skipTo = undefined),
            $(this)
              [_0x3c6934(0x1af)]("[data-skip-to]")
              [_0x3c6934(0x1c8)](_0x3c6934(0x1b0)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0x3c6934(0x21a))
                [_0x3c6934(0x1c8)](_0x3c6934(0x1b0))),
            $(this)
              [_0x3c6934(0x1af)](_0x3c6934(0x20e))
              [_0x3c6934(0x197)](_0x3c6934(0x1f3)) &&
              ((answer = $(this)
                ["parents"](_0x3c6934(0x20e))
                [_0x3c6934(0x197)]("data-go-to")),
              (selections = selections[_0x3c6934(0x19d)](
                (_0x3bea7c) => _0x3bea7c[_0x3c6934(0x1ca)] !== x
              )),
              selections[_0x3c6934(0x247)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x3c6934(0x247)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x3c6934(0x225)](
                  (_0x2063c4) => _0x2063c4[_0x3c6934(0x1ca)] === x
                )),
                (selections[objIndex][_0x3c6934(0x1bd)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x3c6934(0x1aa)] = x)));
        }),
      $(steps[x])
        ["find"]("[data-answer]:visible")
        [_0x6b0e0b(0x1ef)](_0x6b0e0b(0x21f))
        [_0x6b0e0b(0x20d)](function (_0x128123) {
          const _0x1ab3f6 = _0x6b0e0b;
          $(this)[_0x1ab3f6(0x241)]() !== ""
            ? (empReqSelect = empReqSelect["filter"](
                (_0x318456) => _0x318456[_0x1ab3f6(0x1a9)] !== _0x128123
              ))
            : !empReqSelect[_0x1ab3f6(0x1ef)](
                (_0x164cfa) => _0x164cfa[_0x1ab3f6(0x1a9)] === _0x128123
              ) && empReqSelect[_0x1ab3f6(0x247)]({ input: _0x128123 }),
            empReqSelect[_0x1ab3f6(0x1fe)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x6b0e0b(0x1d4))
        [_0x6b0e0b(0x1ef)](_0x6b0e0b(0x1a5))
        [_0x6b0e0b(0x20d)](function (_0x1bdb93) {
          const _0x18a53e = _0x6b0e0b;
          (skipTo = undefined),
            $(this)
              [_0x18a53e(0x1af)](_0x18a53e(0x21a))
              ["data"](_0x18a53e(0x1b0)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0x18a53e(0x21a))
                [_0x18a53e(0x1c8)](_0x18a53e(0x1b0))),
            $(this)[_0x18a53e(0x1af)]("[data-go-to]")["attr"]("data-go-to") &&
              ((answer = $(this)
                [_0x18a53e(0x1af)](_0x18a53e(0x20e))
                ["attr"](_0x18a53e(0x1f3))),
              (selections = selections[_0x18a53e(0x19d)](
                (_0x17a28e) => _0x17a28e["step"] !== x
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x18a53e(0x247)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x18a53e(0x225)](
                  (_0x15299f) => _0x15299f[_0x18a53e(0x1ca)] === x
                )),
                (selections[objIndex][_0x18a53e(0x1bd)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x18a53e(0x1aa)] = x)));
        }),
      $(steps[x])
        [_0x6b0e0b(0x1ef)]("[data-answer]:visible")
        [_0x6b0e0b(0x1ef)](_0x6b0e0b(0x1eb))
        [_0x6b0e0b(0x20d)](function (_0x525406) {
          const _0x1cb91c = _0x6b0e0b;
          $(this)[_0x1cb91c(0x241)]() !== ""
            ? (empReqTextarea = empReqTextarea["filter"](
                (_0x3820a9) => _0x3820a9[_0x1cb91c(0x1a9)] !== _0x525406
              ))
            : !empReqTextarea[_0x1cb91c(0x1ef)](
                (_0x5660c9) => _0x5660c9[_0x1cb91c(0x1a9)] === _0x525406
              ) && empReqTextarea["push"]({ input: _0x525406 }),
            empReqTextarea[_0x1cb91c(0x1fe)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x6b0e0b(0x1ef)]("[data-answer]:visible")
        [_0x6b0e0b(0x1ef)](_0x6b0e0b(0x213))
        [_0x6b0e0b(0x20d)](function (_0x576c5b) {
          const _0x20c1ad = _0x6b0e0b;
          (skipTo = undefined),
            $(this)
              ["parents"](_0x20c1ad(0x21a))
              [_0x20c1ad(0x1c8)](_0x20c1ad(0x1b0)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0x20c1ad(0x21a))
                ["data"]("skip-to")),
            $(this)
              ["parents"](_0x20c1ad(0x20e))
              [_0x20c1ad(0x197)](_0x20c1ad(0x1f3)) &&
              ((answer = $(this)
                ["parents"](_0x20c1ad(0x20e))
                [_0x20c1ad(0x197)](_0x20c1ad(0x1f3))),
              (selections = selections[_0x20c1ad(0x19d)](
                (_0x1c1132) => _0x1c1132[_0x20c1ad(0x1ca)] !== x
              )),
              selections[_0x20c1ad(0x247)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x20c1ad(0x247)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x20c1ad(0x225)](
                  (_0x3eb702) => _0x3eb702[_0x20c1ad(0x1ca)] === x
                )),
                (selections[objIndex][_0x20c1ad(0x1bd)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x20c1ad(0x1aa)] = x)));
        }),
      $(steps[x])
        [_0x6b0e0b(0x1ef)]("[data-answer]:visible")
        [_0x6b0e0b(0x1ef)](":input[type=\x22email\x22][required]")
        [_0x6b0e0b(0x20d)](function (_0x6cfb4) {
          const _0x1b3add = _0x6b0e0b;
          $(this)[_0x1b3add(0x241)]() !== ""
            ? validateEmail(
                $(this)[_0x1b3add(0x241)](),
                $(this)["data"](_0x1b3add(0x1a3))
              )
            : (emailFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x6b0e0b(0x1d4))
        [_0x6b0e0b(0x1ef)](_0x6b0e0b(0x1e8))
        [_0x6b0e0b(0x20d)](function (_0x1dec8a) {
          const _0x3cc2ac = _0x6b0e0b;
          (skipTo = undefined),
            $(this)
              ["parents"](_0x3cc2ac(0x21a))
              [_0x3cc2ac(0x1c8)](_0x3cc2ac(0x1b0)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0x3cc2ac(0x21a))
                [_0x3cc2ac(0x1c8)](_0x3cc2ac(0x1b0))),
            $(this)
              [_0x3cc2ac(0x1af)](_0x3cc2ac(0x20e))
              [_0x3cc2ac(0x197)](_0x3cc2ac(0x1f3)) &&
              ((answer = $(this)
                [_0x3cc2ac(0x1af)](_0x3cc2ac(0x20e))
                [_0x3cc2ac(0x197)]("data-go-to")),
              (selections = selections[_0x3cc2ac(0x19d)](
                (_0x40d870) => _0x40d870[_0x3cc2ac(0x1ca)] !== x
              )),
              selections[_0x3cc2ac(0x247)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x3cc2ac(0x247)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x297a7f) => _0x297a7f[_0x3cc2ac(0x1ca)] === x
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x3cc2ac(0x1aa)] = x)));
        })),
    $(steps[x])[_0x6b0e0b(0x1ef)](_0x6b0e0b(0x240))["is"](_0x6b0e0b(0x1c0)) &&
      ((selArr = []),
      $(steps)
        [_0x6b0e0b(0x1ef)](_0x6b0e0b(0x22d))
        [_0x6b0e0b(0x20d)](function (_0x37e724, _0xfa9540) {
          const _0x5c3d6e = _0x6b0e0b;
          selArr[_0x5c3d6e(0x247)]({
            selected: $(this)["data"](_0x5c3d6e(0x215)),
          });
        }),
      (selString = []),
      selArr[_0x6b0e0b(0x1c7)]((_0x53c1ec) =>
        selString[_0x6b0e0b(0x247)](_0x53c1ec[_0x6b0e0b(0x215)])
      ),
      (selections = selections[_0x6b0e0b(0x19d)](
        (_0x36a91e) => _0x36a91e["step"] !== x
      )),
      $(steps[x])
        [_0x6b0e0b(0x1ef)](_0x6b0e0b(0x1d4))
        ["find"](_0x6b0e0b(0x220))
        [_0x6b0e0b(0x20d)](function () {
          const _0x503fa6 = _0x6b0e0b;
          skipTo = undefined;
          if (
            $(this)
              [_0x503fa6(0x1af)](_0x503fa6(0x21a))
              ["data"](_0x503fa6(0x1b0))
          )
            skipTo = $(this)
              [_0x503fa6(0x1af)](_0x503fa6(0x21a))
              [_0x503fa6(0x1c8)](_0x503fa6(0x1b0));
          else
            $(this)["data"](_0x503fa6(0x1b0)) &&
              (skipTo = $(this)[_0x503fa6(0x1c8)](_0x503fa6(0x1b0)));
          if ($(this)["data"](_0x503fa6(0x1fa)))
            (answer = $(this)[_0x503fa6(0x197)](_0x503fa6(0x1f3))),
              selections["push"]({ step: x, selected: answer }),
              console[_0x503fa6(0x1b4)](skipTo),
              skipTo &&
                (selections[_0x503fa6(0x247)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x503fa6(0x225)](
                  (_0x2e1b15) => _0x2e1b15[_0x503fa6(0x1ca)] === x
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x503fa6(0x1aa)] = x));
          else
            $(this)
              [_0x503fa6(0x1af)]("[data-go-to]")
              [_0x503fa6(0x1c8)](_0x503fa6(0x1fa)) &&
              ((answer = $(this)
                [_0x503fa6(0x1af)](_0x503fa6(0x20e))
                [_0x503fa6(0x1c8)](_0x503fa6(0x1fa))),
              selections[_0x503fa6(0x247)]({ step: x, selected: answer }),
              console[_0x503fa6(0x1b4)](skipTo),
              skipTo &&
                (selections[_0x503fa6(0x247)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0xb24591) => _0xb24591[_0x503fa6(0x1ca)] === x
                )),
                (selections[objIndex][_0x503fa6(0x1bd)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      console[_0x6b0e0b(0x1b4)](
        selections[_0x6b0e0b(0x19d)](
          (_0x3f105a) => _0x3f105a[_0x6b0e0b(0x1ca)] === x
        )[_0x6b0e0b(0x1fe)]
      ),
      $(steps[x])
        [_0x6b0e0b(0x1ef)]("[data-answer]:visible")
        [_0x6b0e0b(0x1ef)]("[data-radio-skip]:visible")
        [_0x6b0e0b(0x1c8)](_0x6b0e0b(0x199)) === !![] &&
        !back &&
        selections["filter"]((_0x251f33) => _0x251f33[_0x6b0e0b(0x1ca)] === x)[
          _0x6b0e0b(0x1fe)
        ] > 0x0 &&
        textareaLength === 0x0 &&
        textInputLength === 0x0 &&
        emailInputLength === 0x0 &&
        checkboxInputLength === 0x0 &&
        setTimeout(function () {
          (next = !![]), nextStep(), selectionQuiz();
        }, $(steps[x])
          ["find"](_0x6b0e0b(0x20c))
          [_0x6b0e0b(0x1c8)]("radio-delay")),
      console[_0x6b0e0b(0x1b4)](selections)),
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
  const _0x2b2b25 = _0xe94fab;
  x++,
    x > progress && (progress = x),
    x <= steps["length"] - 0x1 &&
      (updateStep(),
      memory && saveFilledInput(),
      $(_0x2b2b25(0x211))[_0x2b2b25(0x1d8)](
        $(steps[x])[_0x2b2b25(0x1c8)]("card")
          ? (curStep = x + 0x0)
          : (curStep = x + 0x1)
      ));
}
function backStep() {
  const _0x55c5bd = _0xe94fab;
  x > 0x0 &&
    ($(progressbar[x])["removeClass"](_0x55c5bd(0x1e7)),
    selections[_0x55c5bd(0x19d)](
      (_0x2d9ab3) => _0x2d9ab3[_0x55c5bd(0x1bd)] === x
    )[_0x55c5bd(0x1fe)] > 0x0
      ? (x = parseInt(
          getSafe(
            () =>
              selections[_0x55c5bd(0x19d)](
                (_0x3f3a58) => _0x3f3a58[_0x55c5bd(0x1bd)] === x
              )[0x0]["backTo"]
          )
        ))
      : x--,
    updateStep()),
    $(_0x55c5bd(0x211))["text"]((curStep = x + 0x1));
}
$(_0xe94fab(0x22e))["on"](_0xe94fab(0x201), function (_0x394693) {
  const _0x1b3a89 = _0xe94fab;
  _0x394693[_0x1b3a89(0x1ba)] === 0xd &&
    fill &&
    ($(_0x1b3a89(0x231))["data"](_0x1b3a89(0x1ee))
      ? ($(_0x1b3a89(0x21e))[0x0]["click"](),
        _0x394693[_0x1b3a89(0x1b1)](),
        _0x394693[_0x1b3a89(0x209)]())
      : (_0x394693[_0x1b3a89(0x1b1)](), _0x394693[_0x1b3a89(0x209)]()));
}),
  $(_0xe94fab(0x22e))["keydown"](function (_0x563c92) {
    const _0x4a4e08 = _0xe94fab;
    (_0x563c92[_0x4a4e08(0x1f8)] || _0x563c92[_0x4a4e08(0x1ea)]) &&
      _0x563c92[_0x4a4e08(0x1ba)] == 0xd &&
      (x >= steps[_0x4a4e08(0x1fe)] - 0x1 && fill
        ? $(_0x4a4e08(0x204))[_0x4a4e08(0x224)]()
        : (event[_0x4a4e08(0x1b1)](), event["stopPropagation"]()));
  });
function selectionQuiz() {
  const _0x3425b7 = _0xe94fab;
  $(this)[_0x3425b7(0x1ef)](_0x3425b7(0x218)) &&
    ($(_0x3425b7(0x216))[_0x3425b7(0x1f6)](),
    $("[data-selection=\x22" + selString + "\x22]")[_0x3425b7(0x1c8)](
      _0x3425b7(0x1b3)
    )
      ? $("[data-selection=\x22" + selString + "\x22]")["fadeIn"]()
      : $(_0x3425b7(0x195))[_0x3425b7(0x1cf)]());
}
$(_0xe94fab(0x21e))["on"]("click", function () {
  scrollTop(), (next = !![]), (back = ![]), nextStep(), selectionQuiz();
}),
  $(_0xe94fab(0x1da))["on"](_0xe94fab(0x224), function () {
    const _0x29ebaf = _0xe94fab;
    scrollTop(),
      (next = ![]),
      (back = !![]),
      back &&
        $("input[type=\x22radio\x22]")[_0x29ebaf(0x1dc)](_0x29ebaf(0x1d3), ![]),
      backStep(),
      (back = ![]);
  }),
  $(steps)
    [_0xe94fab(0x1ef)](_0xe94fab(0x1f2))
    ["on"](_0xe94fab(0x1a9), function (_0x4a9005) {
      validation();
    }),
  $(steps)
    [_0xe94fab(0x1ef)](_0xe94fab(0x1cb))
    ["on"](_0xe94fab(0x224), validation());
$("[data-clickable-all]")[_0xe94fab(0x1c8)](_0xe94fab(0x1e1))
  ? $(_0xe94fab(0x1c2))[_0xe94fab(0x1e0)](_0xe94fab(0x246))
  : $(_0xe94fab(0x1c2))[_0xe94fab(0x1b9)](_0xe94fab(0x246));
function clickableIndicator() {
  const _0x5ccfdd = _0xe94fab;
  $(_0x5ccfdd(0x1a2))["removeClass"](_0x5ccfdd(0x1e7)),
    $(_0x5ccfdd(0x206))[_0x5ccfdd(0x1c8)]("clickable") &&
      ($("[data-clickable]")[_0x5ccfdd(0x1c8)](_0x5ccfdd(0x1e1))
        ? ((x = $(this)[_0x5ccfdd(0x23b)]()), updateStep())
        : $(this)["index"]() <= progress &&
          ((x = $(this)["index"]()), updateStep()));
}
$("[data-form=\x22custom-progress-indicator\x22]")["on"](
  "click",
  clickableIndicator
);
$(_0xe94fab(0x238))[_0xe94fab(0x1c8)](_0xe94fab(0x245)) &&
  (console[_0xe94fab(0x1b4)](_0xe94fab(0x1e6)),
  $("[data-go-to]")["each"](function () {
    const _0x178c1d = _0xe94fab;
    $(this)[_0x178c1d(0x1dd)](
      _0x178c1d(0x229),
      $(this)[_0x178c1d(0x1c8)](_0x178c1d(0x1fa))
    );
  }),
  $(_0xe94fab(0x20b))["each"](function () {
    const _0x279bf2 = _0xe94fab;
    $(this)["append"](
      _0x279bf2(0x23f),
      $(this)[_0x279bf2(0x1c8)](_0x279bf2(0x193))
    );
  }));
$(_0xe94fab(0x204))["on"](_0xe94fab(0x224), function (_0x97fb1b) {
  const _0x5a979e = _0xe94fab;
  console[_0x5a979e(0x1b4)](_0x5a979e(0x1c9)),
    _0x97fb1b["preventDefault"](),
    _0x97fb1b["stopPropagation"](),
    $("[data-form=\x22multistep\x22]")["data"](_0x5a979e(0x237)) &&
      ($(this)[_0x5a979e(0x1dc)](_0x5a979e(0x223), !![]),
      $(steps)
        [_0x5a979e(0x1ef)](":input")
        [_0x5a979e(0x1dc)](_0x5a979e(0x1c4), ![]),
      console[_0x5a979e(0x1b4)](_0x5a979e(0x222))),
    localStorage[_0x5a979e(0x1d5)](_0x5a979e(0x1ad)),
    fill &&
      ($(this)[_0x5a979e(0x1c8)]("wait")
        ? $(this)[_0x5a979e(0x241)]($(this)[_0x5a979e(0x1c8)](_0x5a979e(0x235)))
        : ($(this)["val"](_0x5a979e(0x1bf)), $(this)["text"](_0x5a979e(0x1bf))),
      $(_0x5a979e(0x238))[_0x5a979e(0x200)]());
}),
  steps[_0xe94fab(0x20d)](function () {
    const _0x46b725 = _0xe94fab;
    $(_0x46b725(0x1f9))[_0x46b725(0x1dd)](
      progressbarClone[_0x46b725(0x232)](!![], !![])
    );
  }),
  (progressbar = $("[data-form=\x22progress\x22]")[_0xe94fab(0x194)]()),
  $("[data-form=\x22progress-indicator\x22]")["on"](
    _0xe94fab(0x224),
    clickableIndicator
  ),
  updateStep(),
  $("textarea")["keypress"](function (_0xbab712) {
    const _0x33a0fb = _0xe94fab;
    $(this)[_0x33a0fb(0x1d2)](),
      _0xbab712[_0x33a0fb(0x1e5)] == _0x33a0fb(0x1de) &&
        (_0xbab712[_0x33a0fb(0x1b1)](), _0xbab712[_0x33a0fb(0x209)]()),
      _0xbab712["shiftKey"] &&
        _0xbab712[_0x33a0fb(0x1e5)] == _0x33a0fb(0x1de) &&
        $(this)[_0x33a0fb(0x241)]($(this)[_0x33a0fb(0x241)]() + "\x0a");
  });
