//27-3-22 update

const _0x493fdd = _0x35a2;
(function (_0x542674, _0xa91f3) {
  const _0x16e3e1 = _0x35a2,
    _0x233f9b = _0x542674();
  while (!![]) {
    try {
      const _0x3346e7 =
        parseInt(_0x16e3e1(0x11d)) / 0x1 +
        (-parseInt(_0x16e3e1(0x139)) / 0x2) *
          (parseInt(_0x16e3e1(0x149)) / 0x3) +
        (-parseInt(_0x16e3e1(0x159)) / 0x4) *
          (parseInt(_0x16e3e1(0x14f)) / 0x5) +
        (parseInt(_0x16e3e1(0x186)) / 0x6) *
          (parseInt(_0x16e3e1(0x173)) / 0x7) +
        (parseInt(_0x16e3e1(0x14b)) / 0x8) *
          (-parseInt(_0x16e3e1(0x1ae)) / 0x9) +
        parseInt(_0x16e3e1(0x1c8)) / 0xa +
        -parseInt(_0x16e3e1(0x166)) / 0xb;
      if (_0x3346e7 === _0xa91f3) break;
      else _0x233f9b["push"](_0x233f9b["shift"]());
    } catch (_0x3a1a14) {
      _0x233f9b["push"](_0x233f9b["shift"]());
    }
  }
})(_0x1c11, 0xeeac4);
let x = 0x0,
  curStep = 0x0,
  steps = $(_0x493fdd(0x1c9)),
  progressbarClone = $("[data-form=\x22progress-indicator\x22]")["clone"](),
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
  reinitIX = $(_0x493fdd(0x12c))[_0x493fdd(0x1be)](_0x493fdd(0x13f)),
  textareaLength = 0x0,
  textInputLength = 0x0,
  emailInputLength = 0x0,
  selectInputLength = 0x0,
  checkboxInputLength = 0x0,
  filledInput = [],
  savedFilledInput = JSON[_0x493fdd(0x160)](
    localStorage["getItem"](_0x493fdd(0x17b))
  ),
  memory = $("[data-memory]")[_0x493fdd(0x1be)](_0x493fdd(0x12f)),
  quiz = $("[data-quiz]")["data"](_0x493fdd(0x1cc)),
  progress = 0x0;
const urlFormly = new URL(window["location"][_0x493fdd(0x127)]);
let params = $("[data-query-param]")[_0x493fdd(0x1be)]("query-param"),
  skipTo = 0x0,
  next = ![],
  back = ![],
  selArr = [],
  selString = [],
  emptyInput = 0x0,
  searchQ = [],
  domainAllowed = !![],
  dom = [],
  logicExtra = $(_0x493fdd(0x135))[_0x493fdd(0x1be)](_0x493fdd(0x1c7)),
  oldSubmitText = $(_0x493fdd(0x137))[_0x493fdd(0x1cb)](),
  oldResetText = $(_0x493fdd(0x11c))[_0x493fdd(0x172)](),
  formReset = $(_0x493fdd(0x135))[_0x493fdd(0x1be)]("reset"),
  successCard = "";
function _0x35a2(_0x38b1c5, _0x59b102) {
  const _0x1c11d0 = _0x1c11();
  return (
    (_0x35a2 = function (_0x35a2b9, _0x247f93) {
      _0x35a2b9 = _0x35a2b9 - 0x119;
      let _0x4660b9 = _0x1c11d0[_0x35a2b9];
      return _0x4660b9;
    }),
    _0x35a2(_0x38b1c5, _0x59b102)
  );
}
$(progressbarClone)[_0x493fdd(0x18b)]("current"),
  $(_0x493fdd(0x196))[_0x493fdd(0x191)]()[_0x493fdd(0x14a)](),
  $("[data-text=\x22total-steps\x22]")[_0x493fdd(0x172)](steps["length"]),
  $(_0x493fdd(0x137))["hide"](),
  (curStep = curStep + 0x1),
  $(_0x493fdd(0x1c6))[_0x493fdd(0x172)](curStep),
  steps[_0x493fdd(0x1cf)](),
  $(_0x493fdd(0x175))[_0x493fdd(0x1cf)](),
  $("[data-form=\x22next-btn\x22][type=\x22submit\x22]")[_0x493fdd(0x146)](
    function () {
      const _0x3dc8ab = _0x493fdd;
      $(this)[_0x3dc8ab(0x195)](_0x3dc8ab(0x1d7), "button");
    }
  );
function getParams() {
  const _0x1bb9b3 = _0x493fdd;
  urlFormly[_0x1bb9b3(0x15b)][_0x1bb9b3(0x183)](function (
    _0x5132e0,
    _0x402760
  ) {
    const _0x306abd = _0x1bb9b3;
    searchQ[_0x306abd(0x13a)]({ val: _0x5132e0, key: _0x402760 });
  });
}
function getSafe(_0x5ee5a1, _0x478cbd) {
  try {
    return _0x5ee5a1();
  } catch (_0x5f3528) {
    return _0x478cbd;
  }
}
savedFilledInput &&
  memory &&
  savedFilledInput["forEach"]((_0x27deeb) => {
    const _0x23ca53 = _0x493fdd;
    if (
      $(
        "input[name=\x22" +
          _0x27deeb[_0x23ca53(0x1ad)] +
          _0x23ca53(0x182) +
          _0x27deeb["value"] +
          "\x22]"
      )[_0x23ca53(0x195)](_0x23ca53(0x1d7)) === _0x23ca53(0x132)
    )
      $(
        _0x23ca53(0x14c) +
          _0x27deeb[_0x23ca53(0x1ad)] +
          _0x23ca53(0x182) +
          _0x27deeb[_0x23ca53(0x18f)] +
          "\x22]"
      )["click"](),
        $(
          _0x23ca53(0x14c) +
            _0x27deeb[_0x23ca53(0x1ad)] +
            _0x23ca53(0x182) +
            _0x27deeb[_0x23ca53(0x18f)] +
            "\x22]"
        )
          ["siblings"](_0x23ca53(0x19d))
          [_0x23ca53(0x19f)](_0x23ca53(0x178));
    else
      _0x27deeb[_0x23ca53(0x18f)] === "on"
        ? ($(_0x23ca53(0x14c) + _0x27deeb[_0x23ca53(0x1ad)] + "\x22]")[
            _0x23ca53(0x1ab)
          ](),
          $(_0x23ca53(0x14c) + _0x27deeb[_0x23ca53(0x1ad)] + "\x22]")
            [_0x23ca53(0x138)](_0x23ca53(0x169))
            [_0x23ca53(0x19f)]("w--redirected-checked"))
        : ($(_0x23ca53(0x14c) + _0x27deeb["inputName"] + "\x22]")[
            _0x23ca53(0x1cb)
          ](_0x27deeb[_0x23ca53(0x18f)]),
          $(_0x23ca53(0x15f) + _0x27deeb[_0x23ca53(0x1ad)] + "\x22]")[
            _0x23ca53(0x1cb)
          ](_0x27deeb[_0x23ca53(0x18f)]),
          $(_0x23ca53(0x1b4) + _0x27deeb[_0x23ca53(0x1ad)] + "\x22]")
            [_0x23ca53(0x1a6)](
              "option[value=\x22" + _0x27deeb["value"] + "\x22]"
            )
            ["prop"](_0x23ca53(0x1b7), !![]));
  });
function _0x1c11() {
  const _0x1c9cc4 = [
    "parse",
    "current",
    "textarea[autofocus]",
    "append",
    "metaKey",
    "step",
    "5175027mfrQYm",
    "select",
    "block-domain",
    ".w-checkbox-input",
    "test",
    "[type=\x22radio\x22]",
    "option[value=\x22",
    "none",
    "card",
    "findIndex",
    "set",
    "input[type=\x22radio\x22]",
    "text",
    "7QjAaOY",
    "[data-selection=\x22other\x22]",
    "[data-success-card]",
    "input:checkbox",
    "[data-cms-select=cms]",
    "w--redirected-checked",
    "auto",
    "required",
    "filledInput",
    "radio\x20skip\x20true",
    ":input[type=\x22tel\x22][required]",
    "data-radio-skip",
    "skipTo",
    "backTo",
    "[data-go-to]",
    "\x22][value=\x22",
    "forEach",
    "[data-selected]:checked",
    "submit",
    "6900378XuWjbF",
    "reset",
    ":input[type=\x22file\x22][required]",
    "index",
    "parents",
    "removeClass",
    "[data-form=\x22custom-progress-indicator\x22]",
    "history",
    "[data-enter]",
    "value",
    ":input[type=\x22text\x22][required]",
    "children",
    "trim",
    "some",
    "log",
    "attr",
    "[data-form=\x22progress\x22]",
    "input[type=\x22text\x22][required]:visible",
    "replaceState",
    "https://webflow.com/api/v1/form/",
    "length",
    "select[required]",
    "skip-to",
    ".w-radio-input",
    "data-go-to",
    "addClass",
    "[data-radio-delay]",
    "radio-delay",
    "<br>Data\x20Answer\x20=\x20",
    "[data-skip-to]",
    "removeItem",
    "[data-selection=\x22",
    "find",
    ":radio",
    "destroy",
    "[data-form=\x22next-btn\x22]",
    ":input[type=\x22email\x22][required]",
    "click",
    "input[type=\x22submit\x22]",
    "inputName",
    "11668203yiolTg",
    "[data-answer=\x22",
    "[data-answer]",
    ":input[type=\x22number\x22][required]",
    ":input[required]",
    ":checked",
    "select[name=\x22",
    "Enter",
    "answer",
    "selected",
    "key",
    "[data-answer]:visible",
    ":input[type=\x22file\x22]",
    "dispatchEvent",
    ":input[type=\x22radio\x22][required]",
    "[data-form=\x22progress-indicator\x22]",
    "data",
    "textarea",
    "go-to",
    "disabled",
    "focus",
    "preventDefault",
    "novalidate",
    "ajaxComplete",
    "[data-text=\x22current-step\x22]",
    "logic-extra",
    "18987380snugAA",
    "[data-form=\x22step\x22]",
    "[data-clickable-all]",
    "val",
    "quiz",
    "<br>Data\x20Go\x20To\x20=\x20",
    "keydown",
    "hide",
    "includes",
    "[data-form=\x22back-btn\x22]",
    "stopPropagation",
    "redirect",
    "input:radio[name=\x22",
    "require",
    "split",
    "type",
    "input[value=\x22",
    "redirect-form-hehexd",
    "Please\x20wait...",
    "input[type=\x22checkbox\x22]:visible",
    "[data-btn=\x22reset\x22]",
    "1274617NZBgYZ",
    ":input[type=\x22tel\x22]",
    "trigger",
    "show",
    "keypress",
    "[data-cms-select=input]",
    "[data-radio-skip]:visible",
    ".w-form-done",
    "clickable",
    "debug-mode",
    "href",
    ":input[type=\x22email\x22]",
    "<option>",
    "selection",
    "name",
    "[data-reinit]",
    "fadeIn",
    "[data-cms-select=text]",
    "memory",
    "success",
    "clickable-all",
    "radio",
    "body",
    "[data-clickable]",
    "[data-form=\x22multistep\x22]",
    "select[required]:visible",
    "[data-form=\x22submit-btn\x22]",
    "siblings",
    "804bsxaEw",
    "push",
    "[data-btn=\x22check\x22]",
    "stringify",
    "radio-skip",
    "input[type=\x22email\x22]:visible",
    "reinit",
    "data-multistep-redirect",
    "wait",
    "prop",
    "\x22]:checked",
    ":input",
    "[type=\x22checkbox\x22]",
    "each",
    "css",
    "checked",
    "8004jJkXMx",
    "remove",
    "8eAbjcc",
    "input[name=\x22",
    "keyCode",
    "textarea[required]",
    "310dNXbiQ",
    "input",
    "input[autofocus]",
    ":input[type=\x27radio\x27]:checked",
    "0.4",
    "checkbox",
    "filter",
    "[data-form=\x22submit\x22]:visible",
    "form[data-form=\x22multistep\x22]\x20:input",
    "Webflow",
    "32668vACGzb",
    "location",
    "searchParams",
    ":input[type=\x22checkbox\x22]",
    "data-radio-delay",
    ":input[type=\x22checkbox\x22]:checked",
    "textarea[name=\x22",
  ];
  _0x1c11 = function () {
    return _0x1c9cc4;
  };
  return _0x1c11();
}
params &&
  (getParams(),
  searchQ[_0x493fdd(0x183)]((_0x3070ee) => {
    const _0x314243 = _0x493fdd;
    console[_0x314243(0x194)](
      _0x3070ee,
      $(_0x314243(0x1d8) + _0x3070ee[_0x314243(0x1cb)] + "\x22]")[
        _0x314243(0x195)
      ](_0x314243(0x1d7))
    );
    if (
      $(
        _0x314243(0x14c) +
          _0x3070ee[_0x314243(0x1b8)] +
          _0x314243(0x182) +
          _0x3070ee[_0x314243(0x1cb)] +
          "\x22]"
      )[_0x314243(0x195)](_0x314243(0x1d7)) === _0x314243(0x132)
    )
      $(
        _0x314243(0x14c) +
          _0x3070ee[_0x314243(0x1b8)] +
          "\x22][value=\x22" +
          _0x3070ee[_0x314243(0x1cb)] +
          "\x22]"
      )["click"](),
        $(
          _0x314243(0x14c) +
            _0x3070ee[_0x314243(0x1b8)] +
            _0x314243(0x182) +
            _0x3070ee[_0x314243(0x1cb)] +
            "\x22]"
        )
          ["siblings"](_0x314243(0x19d))
          [_0x314243(0x19f)]("w--redirected-checked");
    else
      _0x3070ee[_0x314243(0x1cb)] === "on"
        ? ($("input[name=\x22" + _0x3070ee["key"] + "\x22]")[
            _0x314243(0x1ab)
          ](),
          $("input[name=\x22" + _0x3070ee[_0x314243(0x1b8)] + "\x22]")
            ["siblings"](".w-checkbox-input")
            [_0x314243(0x19f)](_0x314243(0x178)))
        : ($(_0x314243(0x14c) + _0x3070ee[_0x314243(0x1b8)] + "\x22]")[
            _0x314243(0x1cb)
          ](_0x3070ee["val"]),
          $(_0x314243(0x15f) + _0x3070ee[_0x314243(0x1b8)] + "\x22]")[
            _0x314243(0x1cb)
          ](_0x3070ee[_0x314243(0x1cb)]),
          $(_0x314243(0x1b4) + _0x3070ee[_0x314243(0x1b8)] + "\x22]")
            [_0x314243(0x1a6)](_0x314243(0x16c) + _0x3070ee["val"] + "\x22]")
            [_0x314243(0x142)](_0x314243(0x1b7), !![]));
  }));
quiz &&
  steps[_0x493fdd(0x146)](function () {
    const _0x2b9586 = _0x493fdd;
    $(this)["children"]()[_0x2b9586(0x195)](_0x2b9586(0x17e), !![]),
      $(this)[_0x2b9586(0x191)]()["attr"](_0x2b9586(0x15d), 0xfa);
  });
function disableBtn() {
  const _0x2d62ca = _0x493fdd;
  (fill = ![]),
    $("[data-form=\x22next-btn\x22]")[_0x2d62ca(0x147)]({
      opacity: "0.4",
      "pointer-events": "none",
    }),
    $("[data-form=\x22next-btn\x22]")["addClass"](_0x2d62ca(0x1c1)),
    $(_0x2d62ca(0x137))[_0x2d62ca(0x147)]({
      opacity: _0x2d62ca(0x153),
      "pointer-events": _0x2d62ca(0x16d),
    }),
    $("[data-form=\x22submit-btn\x22]")[_0x2d62ca(0x19f)](_0x2d62ca(0x1c1));
}
function enableBtn() {
  const _0x344139 = _0x493fdd;
  (fill = !![]),
    $(_0x344139(0x1a9))[_0x344139(0x147)]({
      "pointer-events": _0x344139(0x179),
      opacity: "1",
    }),
    $(_0x344139(0x1a9))["removeClass"](_0x344139(0x1c1)),
    $(_0x344139(0x137))[_0x344139(0x147)]({
      "pointer-events": _0x344139(0x179),
      opacity: "1",
    }),
    $("[data-form=\x22submit-btn\x22]")[_0x344139(0x18b)]("disabled");
}
function saveFilledInput() {
  const _0x14dd8e = _0x493fdd;
  $(_0x14dd8e(0x157))
    ["not"]("[type=\x22submit\x22]")
    [_0x14dd8e(0x146)](function () {
      const _0x3a2f6a = _0x14dd8e;
      $(this)[_0x3a2f6a(0x195)](_0x3a2f6a(0x1d7)) === _0x3a2f6a(0x154) ||
      $(this)[_0x3a2f6a(0x195)](_0x3a2f6a(0x1d7)) === "radio"
        ? $(this)[_0x3a2f6a(0x142)](_0x3a2f6a(0x148)) &&
          (filledInput[_0x3a2f6a(0x193)](
            (_0x532c2f) =>
              _0x532c2f[_0x3a2f6a(0x1ad)] ===
              $(this)[_0x3a2f6a(0x195)](_0x3a2f6a(0x12b))
          )
            ? ((filledInput = filledInput[_0x3a2f6a(0x155)](
                (_0x4908a0) =>
                  _0x4908a0["inputName"] !==
                  $(this)[_0x3a2f6a(0x195)](_0x3a2f6a(0x12b))
              )),
              $(this)[_0x3a2f6a(0x1cb)]() !== "" &&
                filledInput[_0x3a2f6a(0x13a)]({
                  inputName: $(this)[_0x3a2f6a(0x195)]("name"),
                  value: $(this)[_0x3a2f6a(0x1cb)](),
                }))
            : $(this)["val"]() !== "" &&
              filledInput[_0x3a2f6a(0x13a)]({
                inputName: $(this)[_0x3a2f6a(0x195)](_0x3a2f6a(0x12b)),
                value: $(this)[_0x3a2f6a(0x1cb)](),
              }))
        : filledInput["some"](
            (_0x483719) =>
              _0x483719[_0x3a2f6a(0x1ad)] ===
              $(this)[_0x3a2f6a(0x195)](_0x3a2f6a(0x12b))
          )
        ? ((filledInput = filledInput["filter"](
            (_0x51fa3e) =>
              _0x51fa3e[_0x3a2f6a(0x1ad)] !==
              $(this)[_0x3a2f6a(0x195)](_0x3a2f6a(0x12b))
          )),
          $(this)[_0x3a2f6a(0x1cb)]() !== "" &&
            filledInput[_0x3a2f6a(0x13a)]({
              inputName: $(this)["attr"](_0x3a2f6a(0x12b)),
              value: $(this)[_0x3a2f6a(0x1cb)](),
            }))
        : $(this)[_0x3a2f6a(0x1cb)]() !== "" &&
          filledInput[_0x3a2f6a(0x13a)]({
            inputName: $(this)[_0x3a2f6a(0x195)]("name"),
            value: $(this)[_0x3a2f6a(0x1cb)](),
          });
    }),
    filledInput &&
      filledInput[_0x14dd8e(0x183)]((_0x582a4e) => {
        const _0x5b7018 = _0x14dd8e;
        urlFormly[_0x5b7018(0x15b)]["delete"](_0x582a4e[_0x5b7018(0x1ad)]),
          urlFormly[_0x5b7018(0x15b)][_0x5b7018(0x170)](
            _0x582a4e[_0x5b7018(0x1ad)],
            _0x582a4e[_0x5b7018(0x18f)]
          ),
          window[_0x5b7018(0x18d)][_0x5b7018(0x198)](null, null, urlFormly);
      }),
    localStorage[_0x14dd8e(0x1a4)](_0x14dd8e(0x17b)),
    localStorage["setItem"]("filledInput", JSON[_0x14dd8e(0x13c)](filledInput));
}
function scrollTop() {}
function updateStep() {
  const _0x5a133d = _0x493fdd;
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
  $(_0x5a133d(0x134))[_0x5a133d(0x1be)]("clickable") &&
    (steps[_0x5a133d(0x1a6)](_0x5a133d(0x1b2))["each"](function () {
      const _0x55bc0d = _0x5a133d;
      $(
        $(_0x55bc0d(0x18c))[
          $(this)[_0x55bc0d(0x18a)](_0x55bc0d(0x1c9))[_0x55bc0d(0x189)]()
        ]
      ),
        $(this)[_0x55bc0d(0x1cb)]() === "" && emptyInput++;
    }),
    emptyInput > 0x0
      ? $(_0x5a133d(0x1ac))[_0x5a133d(0x19f)](_0x5a133d(0x1c1))
      : $(_0x5a133d(0x1ac))[_0x5a133d(0x18b)]("disabled"));
  $(_0x5a133d(0x18c))["removeClass"](_0x5a133d(0x161)),
    $($("[data-form=\x22custom-progress-indicator\x22]")[x])[_0x5a133d(0x19f)](
      _0x5a133d(0x161)
    ),
    (selection = selections["filter"](
      (_0x5462df) => _0x5462df["step"] === x - 0x1
    ));
  next &&
    (x = getSafe(() => selection[0x0][_0x5a133d(0x17f)])
      ? parseInt(getSafe(() => selection[0x0][_0x5a133d(0x17f)]))
      : x);
  $("[data-answer]")[_0x5a133d(0x1cf)](), steps[_0x5a133d(0x1cf)]();
  reinitIX === !![] && window[_0x5a133d(0x158)][_0x5a133d(0x1a8)]();
  $(progressbar)[_0x5a133d(0x18b)](_0x5a133d(0x161));
  for (i = 0x0; i <= x; i++) {
    $(progressbar[i])[_0x5a133d(0x19f)]("current");
  }
  reinitIX === !![]
    ? (window[_0x5a133d(0x158)] &&
        window[_0x5a133d(0x158)][_0x5a133d(0x1d5)]("ix2")["init"](),
      document[_0x5a133d(0x1bb)](new Event("readystatechange")),
      $(steps[x])["show"]())
    : $(steps[x])[_0x5a133d(0x12d)]("slow");
  x === 0x0 &&
    !$(steps[x])[_0x5a133d(0x1be)](_0x5a133d(0x16e)) &&
    $(steps[x])[_0x5a133d(0x1a6)](_0x5a133d(0x1b0))[_0x5a133d(0x120)]();
  selection[_0x5a133d(0x19a)] > 0x0
    ? $(steps[x])
        [_0x5a133d(0x1a6)](
          _0x5a133d(0x1af) + selection[0x0][_0x5a133d(0x1b7)] + "\x22]"
        )
        [_0x5a133d(0x120)]()
    : $(steps[x])
        ["find"]("[data-answer=\x22" + answer + "\x22]")
        [_0x5a133d(0x120)]();
  if (x === 0x0)
    $(_0x5a133d(0x1d1))[_0x5a133d(0x1cf)](),
      $(_0x5a133d(0x1a9))[_0x5a133d(0x120)]();
  else
    x === steps[_0x5a133d(0x19a)] - 0x1 ||
    $(steps[x])[_0x5a133d(0x1a6)](_0x5a133d(0x156))[_0x5a133d(0x19a)] > 0x0
      ? ($(_0x5a133d(0x137))[_0x5a133d(0x120)](),
        $(_0x5a133d(0x1d1))[_0x5a133d(0x120)]())
      : ($(_0x5a133d(0x1a9))[_0x5a133d(0x120)](),
        $(_0x5a133d(0x1d1))[_0x5a133d(0x120)](),
        $(_0x5a133d(0x137))[_0x5a133d(0x1cf)]());
  $($(steps[x])[_0x5a133d(0x1a6)](_0x5a133d(0x151))[0x0])[_0x5a133d(0x1c2)](),
    $($(steps[x])[_0x5a133d(0x1a6)](_0x5a133d(0x162))[0x0])[_0x5a133d(0x1c2)](),
    validation();
  for (idx = 0x0; idx <= progress; idx++) {
    $($(_0x5a133d(0x18c))[idx])["removeClass"](_0x5a133d(0x1c1));
  }
}
function validateEmail(_0x2477b7, _0x215305) {
  const _0x1009d3 = _0x493fdd;
  let _0x4e490b = _0x2477b7[_0x1009d3(0x1d0)]("@")
    ? _0x2477b7[_0x1009d3(0x1d6)]("@")[0x1]["split"](".")[0x0]
    : [];
  dom = [];
  _0x215305 !== undefined &&
    _0x215305[_0x1009d3(0x1d6)](",")["forEach"](function (_0x3d8047) {
      const _0x2c3993 = _0x1009d3;
      _0x3d8047[_0x2c3993(0x1d0)](_0x4e490b) &&
        dom[_0x2c3993(0x13a)](_0x4e490b);
    });
  dom[_0x1009d3(0x19a)] > 0x0 ? (domainAllowed = ![]) : (domainAllowed = !![]);
  var _0x3c8cde = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,20})?$/;
  !_0x3c8cde[_0x1009d3(0x16a)](_0x2477b7)
    ? (emailFilled = ![])
    : (emailFilled = !![]);
}
function validation() {
  const _0x385f96 = _0x493fdd;
  $(steps[x])[_0x385f96(0x1be)](_0x385f96(0x16e)) && enableBtn();
  (textareaLength = $(steps[x])[_0x385f96(0x1a6)]("textarea[required]:visible")[
    _0x385f96(0x19a)
  ]),
    (textInputLength = $(steps[x])[_0x385f96(0x1a6)](_0x385f96(0x197))[
      _0x385f96(0x19a)
    ]),
    (selectInputLength = $(steps[x])["find"](_0x385f96(0x136))["length"]),
    (emailInputLength = $(steps[x])[_0x385f96(0x1a6)](_0x385f96(0x13e))[
      _0x385f96(0x19a)
    ]),
    (checkboxInputLength = $(steps[x])[_0x385f96(0x1a6)](_0x385f96(0x11b))[
      _0x385f96(0x19a)
    ]);
  textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0
    ? disableBtn()
    : enableBtn();
  var _0x819a75 = $(steps[x])[_0x385f96(0x1be)]("checkbox")
    ? $(steps[x])[_0x385f96(0x1be)](_0x385f96(0x154))
    : 0x0;
  if (!logicExtra)
    $(steps[x])[_0x385f96(0x1a6)](":input")["is"](_0x385f96(0x145)) &&
      (_0x819a75 === "*" ||
      _0x819a75 > $(steps[x])[_0x385f96(0x1a6)](_0x385f96(0x15c))["length"]
        ? $(steps[x])
            [_0x385f96(0x1a6)](":input[type=\x22checkbox\x22]")
            [_0x385f96(0x146)](function () {
              const _0x248450 = _0x385f96;
              $(this)["is"](_0x248450(0x1b3))
                ? $(steps[x])["find"](_0x248450(0x1b2))[_0x248450(0x19a)] <
                    0x1 && (checkboxFilled = !![])
                : (checkboxFilled = ![]);
            })
        : $(steps[x])[_0x385f96(0x1a6)](_0x385f96(0x15e))[_0x385f96(0x19a)] >=
          _0x819a75
        ? (checkboxFilled = !![])
        : (checkboxFilled = ![])),
      $(steps[x])
        ["find"]("input:radio[required]")
        [_0x385f96(0x146)](function (_0x633c9a) {
          const _0x104dd2 = _0x385f96;
          var _0xa74656 = $(this)[_0x104dd2(0x195)]("name");
          $(_0x104dd2(0x1d4) + _0xa74656 + _0x104dd2(0x143))[
            _0x104dd2(0x19a)
          ] == 0x0
            ? !empReqRadio[_0x104dd2(0x1a6)](
                (_0x38e1f1) => _0x38e1f1[_0x104dd2(0x150)] === _0x633c9a
              ) && empReqRadio["push"]({ input: _0x633c9a })
            : (empReqRadio = empReqRadio["filter"](
                (_0x364c0d) => _0x364c0d[_0x104dd2(0x150)] !== _0x633c9a
              )),
            empReqRadio[_0x104dd2(0x19a)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0x385f96(0x1a6)](_0x385f96(0x190))
        ["each"](function (_0xc31966) {
          const _0x316d81 = _0x385f96;
          $(this)[_0x316d81(0x1cb)]() !== ""
            ? (empReqInput = empReqInput[_0x316d81(0x155)](
                (_0x360f4d) => _0x360f4d[_0x316d81(0x150)] !== _0xc31966
              ))
            : !empReqInput["find"](
                (_0x1b89b1) => _0x1b89b1[_0x316d81(0x150)] === _0xc31966
              ) && empReqInput[_0x316d81(0x13a)]({ input: _0xc31966 }),
            empReqInput[_0x316d81(0x19a)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x385f96(0x1a6)](_0x385f96(0x17d))
        [_0x385f96(0x146)](function (_0x5b7792) {
          const _0x48720d = _0x385f96;
          $(this)[_0x48720d(0x1cb)]() !== ""
            ? (empReqTel = empReqTel["filter"](
                (_0x219de5) => _0x219de5[_0x48720d(0x150)] !== _0x5b7792
              ))
            : !empReqTel[_0x48720d(0x1a6)](
                (_0x1f51a9) => _0x1f51a9[_0x48720d(0x150)] === _0x5b7792
              ) && empReqTel[_0x48720d(0x13a)]({ input: _0x5b7792 }),
            empReqTel[_0x48720d(0x19a)] === 0x0
              ? (telFilled = !![])
              : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x385f96(0x1a6)](_0x385f96(0x188))
        ["each"](function (_0x2a8000) {
          const _0x2a7384 = _0x385f96;
          $(this)[_0x2a7384(0x1cb)]() !== ""
            ? (empReqFile = empReqFile[_0x2a7384(0x155)](
                (_0x237265) => _0x237265[_0x2a7384(0x150)] !== _0x2a8000
              ))
            : !empReqFile[_0x2a7384(0x1a6)](
                (_0x1a3dc5) => _0x1a3dc5["input"] === _0x2a8000
              ) && empReqFile["push"]({ input: _0x2a8000 }),
            empReqFile[_0x2a7384(0x19a)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x385f96(0x1a6)](_0x385f96(0x1b1))
        [_0x385f96(0x146)](function (_0x561768) {
          const _0x41e4f4 = _0x385f96;
          $(this)[_0x41e4f4(0x1cb)]() !== ""
            ? (empReqNum = empReqNum[_0x41e4f4(0x155)](
                (_0x89238c) => _0x89238c[_0x41e4f4(0x150)] !== _0x561768
              ))
            : !empReqNum[_0x41e4f4(0x1a6)](
                (_0x4d18d0) => _0x4d18d0[_0x41e4f4(0x150)] === _0x561768
              ) && empReqNum["push"]({ input: _0x561768 }),
            empReqNum[_0x41e4f4(0x19a)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x385f96(0x19b))
        [_0x385f96(0x146)](function (_0x1af647) {
          const _0x5f5c00 = _0x385f96;
          let _0x169048 = $(this)[_0x5f5c00(0x1cb)]();
          _0x169048 === "" && (_0x169048 = null),
            _0x169048 != null
              ? (empReqSelect = empReqSelect[_0x5f5c00(0x155)](
                  (_0x2642b0) => _0x2642b0[_0x5f5c00(0x150)] !== _0x1af647
                ))
              : !empReqSelect[_0x5f5c00(0x1a6)](
                  (_0x3ee9b0) => _0x3ee9b0[_0x5f5c00(0x150)] === _0x1af647
                ) && empReqSelect[_0x5f5c00(0x13a)]({ input: _0x1af647 }),
            empReqSelect["length"] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x385f96(0x14e))
        [_0x385f96(0x146)](function (_0x4e5875) {
          const _0x377e0a = _0x385f96;
          $(this)[_0x377e0a(0x1cb)]() !== ""
            ? (empReqTextarea = empReqTextarea["filter"](
                (_0x29a5d3) => _0x29a5d3[_0x377e0a(0x150)] !== _0x4e5875
              ))
            : !empReqTextarea[_0x377e0a(0x1a6)](
                (_0x88eecc) => _0x88eecc[_0x377e0a(0x150)] === _0x4e5875
              ) && empReqTextarea["push"]({ input: _0x4e5875 }),
            empReqTextarea[_0x377e0a(0x19a)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x385f96(0x1a6)](_0x385f96(0x1aa))
        [_0x385f96(0x146)](function () {
          const _0x3471f9 = _0x385f96;
          $(this)[_0x3471f9(0x1cb)]() !== ""
            ? validateEmail(
                $(this)[_0x3471f9(0x1cb)](),
                $(this)["data"](_0x3471f9(0x168))
              )
            : (emailFilled = ![]);
        });
  else {
    if ($(steps[x])[_0x385f96(0x1be)](_0x385f96(0x16e)))
      (answer = $(steps[x])
        [_0x385f96(0x1a6)](_0x385f96(0x181))
        ["data"](_0x385f96(0x1c0))),
        (selections = selections["filter"](
          (_0x345641) => _0x345641[_0x385f96(0x165)] !== x
        )),
        selections[_0x385f96(0x13a)]({ step: x, selected: answer });
    else
      $(steps[x])
        [_0x385f96(0x1a6)](_0x385f96(0x1b9))
        [_0x385f96(0x1be)]("card") &&
        ((answer = $(steps[x])
          [_0x385f96(0x1a6)](_0x385f96(0x1b9))
          [_0x385f96(0x1be)]("go-to")),
        (selections = selections[_0x385f96(0x155)](
          (_0x3225b0) => _0x3225b0[_0x385f96(0x165)] !== x
        )),
        selections[_0x385f96(0x13a)]({ step: x, selected: answer }));
    $(steps[x])
      ["find"](_0x385f96(0x1b9))
      [_0x385f96(0x1a6)](_0x385f96(0x144))
      ["is"](_0x385f96(0x145)) &&
      (_0x819a75 === "*" ||
      _0x819a75 > $(steps[x])["find"](_0x385f96(0x15c))["length"]
        ? $(steps[x])
            [_0x385f96(0x1a6)](":input[type=\x22checkbox\x22]")
            [_0x385f96(0x146)](function () {
              const _0x28831c = _0x385f96;
              $(this)["is"](_0x28831c(0x1b3))
                ? $(steps[x])[_0x28831c(0x1a6)](_0x28831c(0x1b2))[
                    _0x28831c(0x19a)
                  ] < 0x1 &&
                  ($(this)
                    [_0x28831c(0x18a)](_0x28831c(0x181))
                    ["attr"]("data-go-to") &&
                    ((answer = $(this)
                      ["parents"](_0x28831c(0x181))
                      [_0x28831c(0x195)](_0x28831c(0x19e))),
                    (selections = selections[_0x28831c(0x155)](
                      (_0x5f1c90) => _0x5f1c90[_0x28831c(0x165)] !== x
                    )),
                    selections["push"]({ step: x, selected: answer })),
                  (checkboxFilled = !![]))
                : (checkboxFilled = ![]);
            })
        : $(steps[x])
            [_0x385f96(0x1a6)](_0x385f96(0x1b9))
            [_0x385f96(0x1a6)](_0x385f96(0x15e))[_0x385f96(0x19a)] >= _0x819a75
        ? ($(steps[x])
            [_0x385f96(0x1a6)]("[data-answer]:visible")
            ["find"](_0x385f96(0x15e))
            ["parents"](_0x385f96(0x181))
            [_0x385f96(0x195)](_0x385f96(0x19e)) &&
            ((answer = $(steps[x])
              [_0x385f96(0x1a6)](_0x385f96(0x1b9))
              [_0x385f96(0x1a6)](_0x385f96(0x15e))
              [_0x385f96(0x18a)]("[data-go-to]")
              ["attr"](_0x385f96(0x19e))),
            (selections = selections[_0x385f96(0x155)](
              (_0x19bba2) => _0x19bba2["step"] !== x
            )),
            selections[_0x385f96(0x13a)]({ step: x, selected: answer })),
          (selections = selections[_0x385f96(0x155)](
            (_0x3f5219) => _0x3f5219["step"] !== x
          )),
          selections[_0x385f96(0x13a)]({ step: x, selected: answer }),
          (checkboxFilled = !![]))
        : (checkboxFilled = ![])),
      $(steps[x])
        [_0x385f96(0x1a6)]("[data-answer]:visible")
        [_0x385f96(0x1a6)](":input[required]")
        ["is"](_0x385f96(0x16b))
        ? $(steps[x])
            [_0x385f96(0x1a6)](_0x385f96(0x1b9))
            ["find"](_0x385f96(0x1bc))
            ["is"](_0x385f96(0x1b3))
          ? (radioFilled = !![])
          : (radioFilled = ![])
        : (radioFilled = !![]),
      $(steps[x])
        [_0x385f96(0x1a6)](_0x385f96(0x1b9))
        [_0x385f96(0x1a6)](_0x385f96(0x190))
        [_0x385f96(0x146)](function (_0x1839b8) {
          const _0x1abf62 = _0x385f96;
          $(this)[_0x1abf62(0x1cb)]() !== ""
            ? (empReqInput = empReqInput[_0x1abf62(0x155)](
                (_0x2233d4) => _0x2233d4["input"] !== _0x1839b8
              ))
            : !empReqInput[_0x1abf62(0x1a6)](
                (_0x52b523) => _0x52b523[_0x1abf62(0x150)] === _0x1839b8
              ) && empReqInput[_0x1abf62(0x13a)]({ input: _0x1839b8 }),
            empReqInput[_0x1abf62(0x19a)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x385f96(0x1a6)](_0x385f96(0x1b9))
        [_0x385f96(0x1a6)](":input[type=\x22text\x22]")
        [_0x385f96(0x146)](function (_0x17c41a) {
          const _0x349dde = _0x385f96;
          (skipTo = undefined),
            $(this)
              [_0x349dde(0x18a)](_0x349dde(0x1a3))
              [_0x349dde(0x1be)]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0x349dde(0x18a)](_0x349dde(0x1a3))
                ["data"]("skip-to")),
            $(this)
              [_0x349dde(0x18a)](_0x349dde(0x181))
              [_0x349dde(0x195)](_0x349dde(0x19e)) &&
              ((answer = $(this)
                [_0x349dde(0x18a)]("[data-go-to]")
                [_0x349dde(0x195)](_0x349dde(0x19e))),
              (selections = selections[_0x349dde(0x155)](
                (_0x26b564) => _0x26b564[_0x349dde(0x165)] !== x
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x349dde(0x13a)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x349dde(0x16f)](
                  (_0x339aa2) => _0x339aa2[_0x349dde(0x165)] === x
                )),
                (selections[objIndex][_0x349dde(0x17f)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x349dde(0x180)] = x)));
        }),
      $(steps[x])
        [_0x385f96(0x1a6)](_0x385f96(0x1b9))
        ["find"](":input[type=\x22number\x22][required]")
        [_0x385f96(0x146)](function (_0x231330) {
          const _0x33b377 = _0x385f96;
          $(this)["val"]() !== ""
            ? (empReqNum = empReqNum["filter"](
                (_0x3cbc7e) => _0x3cbc7e[_0x33b377(0x150)] !== _0x231330
              ))
            : !empReqNum[_0x33b377(0x1a6)](
                (_0x334233) => _0x334233[_0x33b377(0x150)] === _0x231330
              ) && empReqNum[_0x33b377(0x13a)]({ input: _0x231330 }),
            empReqNum[_0x33b377(0x19a)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x385f96(0x1a6)](_0x385f96(0x1b9))
        [_0x385f96(0x1a6)](":input[type=\x22number\x22]")
        ["each"](function (_0x3ebd15) {
          const _0x3c6200 = _0x385f96;
          (skipTo = undefined),
            $(this)
              [_0x3c6200(0x18a)](_0x3c6200(0x1a3))
              [_0x3c6200(0x1be)]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0x3c6200(0x18a)]("[data-skip-to]")
                [_0x3c6200(0x1be)](_0x3c6200(0x19c))),
            $(this)
              [_0x3c6200(0x18a)]("[data-go-to]")
              [_0x3c6200(0x195)]("data-go-to") &&
              ((answer = $(this)
                [_0x3c6200(0x18a)]("[data-go-to]")
                ["attr"](_0x3c6200(0x19e))),
              (selections = selections["filter"](
                (_0x2133e1) => _0x2133e1[_0x3c6200(0x165)] !== x
              )),
              selections[_0x3c6200(0x13a)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x3c6200(0x13a)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x3c6200(0x16f)](
                  (_0x4d5071) => _0x4d5071[_0x3c6200(0x165)] === x
                )),
                (selections[objIndex][_0x3c6200(0x17f)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x3c6200(0x180)] = x)));
        }),
      $(steps[x])
        [_0x385f96(0x1a6)](_0x385f96(0x1b9))
        [_0x385f96(0x1a6)](":input[type=\x22tel\x22][required]")
        ["each"](function (_0x20c1bf) {
          const _0xd8d258 = _0x385f96;
          $(this)["val"]() !== ""
            ? (empReqTel = empReqTel[_0xd8d258(0x155)](
                (_0x75b34f) => _0x75b34f[_0xd8d258(0x150)] !== _0x20c1bf
              ))
            : !empReqTel["find"](
                (_0x307b00) => _0x307b00[_0xd8d258(0x150)] === _0x20c1bf
              ) && empReqTel["push"]({ input: _0x20c1bf }),
            empReqTel[_0xd8d258(0x19a)] === 0x0
              ? (telFilled = !![])
              : (telFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x385f96(0x1b9))
        [_0x385f96(0x1a6)](_0x385f96(0x11e))
        ["each"](function (_0x553e32) {
          const _0x11f2ca = _0x385f96;
          (skipTo = undefined),
            $(this)
              [_0x11f2ca(0x18a)](_0x11f2ca(0x1a3))
              [_0x11f2ca(0x1be)](_0x11f2ca(0x19c)) !== "" &&
              (skipTo = $(this)
                [_0x11f2ca(0x18a)](_0x11f2ca(0x1a3))
                [_0x11f2ca(0x1be)](_0x11f2ca(0x19c))),
            $(this)
              [_0x11f2ca(0x18a)]("[data-go-to]")
              [_0x11f2ca(0x195)](_0x11f2ca(0x19e)) &&
              ((answer = $(this)
                ["parents"](_0x11f2ca(0x181))
                [_0x11f2ca(0x195)](_0x11f2ca(0x19e))),
              (selections = selections[_0x11f2ca(0x155)](
                (_0x3bc134) => _0x3bc134["step"] !== x
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x11f2ca(0x13a)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x11f2ca(0x16f)](
                  (_0x4b25d2) => _0x4b25d2[_0x11f2ca(0x165)] === x
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x11f2ca(0x180)] = x)));
        }),
      $(steps[x])
        ["find"](_0x385f96(0x1b9))
        [_0x385f96(0x1a6)](_0x385f96(0x188))
        ["each"](function (_0x2eb52a) {
          const _0x59a94e = _0x385f96;
          $(this)[_0x59a94e(0x1cb)]() !== ""
            ? (empReqfile = empReqfile[_0x59a94e(0x155)](
                (_0xf3bcf2) => _0xf3bcf2["input"] !== _0x2eb52a
              ))
            : !empReqfile[_0x59a94e(0x1a6)](
                (_0x4bdebb) => _0x4bdebb[_0x59a94e(0x150)] === _0x2eb52a
              ) && empReqfile["push"]({ input: _0x2eb52a }),
            empReqfile["length"] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x385f96(0x1b9))
        [_0x385f96(0x1a6)](_0x385f96(0x1ba))
        [_0x385f96(0x146)](function (_0x266ccf) {
          const _0x2721bb = _0x385f96;
          (skipTo = undefined),
            $(this)
              ["parents"](_0x2721bb(0x1a3))
              [_0x2721bb(0x1be)](_0x2721bb(0x19c)) !== "" &&
              (skipTo = $(this)
                [_0x2721bb(0x18a)](_0x2721bb(0x1a3))
                ["data"](_0x2721bb(0x19c))),
            $(this)
              [_0x2721bb(0x18a)](_0x2721bb(0x181))
              [_0x2721bb(0x195)](_0x2721bb(0x19e)) &&
              ((answer = $(this)
                ["parents"](_0x2721bb(0x181))
                [_0x2721bb(0x195)](_0x2721bb(0x19e))),
              (selections = selections["filter"](
                (_0x276a8c) => _0x276a8c[_0x2721bb(0x165)] !== x
              )),
              selections[_0x2721bb(0x13a)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x2721bb(0x13a)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x2721bb(0x16f)](
                  (_0x1536a5) => _0x1536a5["step"] === x
                )),
                (selections[objIndex][_0x2721bb(0x17f)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x2721bb(0x180)] = x)));
        }),
      $(steps[x])
        ["find"](_0x385f96(0x1b9))
        ["find"](_0x385f96(0x19b))
        [_0x385f96(0x146)](function (_0x4ff116) {
          const _0x47604d = _0x385f96;
          $(this)[_0x47604d(0x1cb)]() !== ""
            ? (empReqSelect = empReqSelect[_0x47604d(0x155)](
                (_0x16cd82) => _0x16cd82["input"] !== _0x4ff116
              ))
            : !empReqSelect[_0x47604d(0x1a6)](
                (_0x4c264a) => _0x4c264a[_0x47604d(0x150)] === _0x4ff116
              ) && empReqSelect[_0x47604d(0x13a)]({ input: _0x4ff116 }),
            empReqSelect["length"] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x385f96(0x1a6)]("[data-answer]:visible")
        ["find"](_0x385f96(0x167))
        [_0x385f96(0x146)](function (_0x54bc3b) {
          const _0x671e5f = _0x385f96;
          (skipTo = undefined),
            $(this)
              [_0x671e5f(0x18a)](_0x671e5f(0x1a3))
              ["data"](_0x671e5f(0x19c)) !== "" &&
              (skipTo = $(this)
                [_0x671e5f(0x18a)](_0x671e5f(0x1a3))
                [_0x671e5f(0x1be)](_0x671e5f(0x19c))),
            $(this)
              [_0x671e5f(0x18a)](_0x671e5f(0x181))
              ["attr"](_0x671e5f(0x19e)) &&
              ((answer = $(this)
                [_0x671e5f(0x18a)](_0x671e5f(0x181))
                [_0x671e5f(0x195)](_0x671e5f(0x19e))),
              (selections = selections["filter"](
                (_0x3a7ff1) => _0x3a7ff1[_0x671e5f(0x165)] !== x
              )),
              selections[_0x671e5f(0x13a)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x671e5f(0x13a)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x671e5f(0x16f)](
                  (_0x91fac7) => _0x91fac7[_0x671e5f(0x165)] === x
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x385f96(0x1a6)](_0x385f96(0x1b9))
        [_0x385f96(0x1a6)](_0x385f96(0x14e))
        [_0x385f96(0x146)](function (_0x36adc0) {
          const _0x4710f3 = _0x385f96;
          $(this)[_0x4710f3(0x1cb)]() !== ""
            ? (empReqTextarea = empReqTextarea[_0x4710f3(0x155)](
                (_0x24c2c2) => _0x24c2c2[_0x4710f3(0x150)] !== _0x36adc0
              ))
            : !empReqTextarea[_0x4710f3(0x1a6)](
                (_0x36b1c4) => _0x36b1c4[_0x4710f3(0x150)] === _0x36adc0
              ) && empReqTextarea["push"]({ input: _0x36adc0 }),
            empReqTextarea["length"] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x385f96(0x1a6)](_0x385f96(0x1b9))
        [_0x385f96(0x1a6)](_0x385f96(0x1bf))
        [_0x385f96(0x146)](function (_0xe056) {
          const _0x2ee6e5 = _0x385f96;
          (skipTo = undefined),
            $(this)
              [_0x2ee6e5(0x18a)](_0x2ee6e5(0x1a3))
              [_0x2ee6e5(0x1be)](_0x2ee6e5(0x19c)) !== "" &&
              (skipTo = $(this)
                [_0x2ee6e5(0x18a)](_0x2ee6e5(0x1a3))
                [_0x2ee6e5(0x1be)]("skip-to")),
            $(this)
              [_0x2ee6e5(0x18a)](_0x2ee6e5(0x181))
              [_0x2ee6e5(0x195)](_0x2ee6e5(0x19e)) &&
              ((answer = $(this)
                [_0x2ee6e5(0x18a)](_0x2ee6e5(0x181))
                [_0x2ee6e5(0x195)](_0x2ee6e5(0x19e))),
              (selections = selections[_0x2ee6e5(0x155)](
                (_0x28e03d) => _0x28e03d[_0x2ee6e5(0x165)] !== x
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x2ee6e5(0x13a)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x2ee6e5(0x16f)](
                  (_0x46de53) => _0x46de53[_0x2ee6e5(0x165)] === x
                )),
                (selections[objIndex][_0x2ee6e5(0x17f)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x2ee6e5(0x180)] = x)));
        }),
      $(steps[x])
        [_0x385f96(0x1a6)]("[data-answer]:visible")
        [_0x385f96(0x1a6)](_0x385f96(0x1aa))
        [_0x385f96(0x146)](function (_0x508381) {
          const _0x13e32b = _0x385f96;
          $(this)["val"]() !== ""
            ? validateEmail(
                $(this)[_0x13e32b(0x1cb)](),
                $(this)[_0x13e32b(0x1be)]("block-domain")
              )
            : (emailFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x385f96(0x1b9))
        [_0x385f96(0x1a6)](_0x385f96(0x128))
        [_0x385f96(0x146)](function (_0x1c52ef) {
          const _0x506687 = _0x385f96;
          (skipTo = undefined),
            $(this)
              [_0x506687(0x18a)](_0x506687(0x1a3))
              [_0x506687(0x1be)](_0x506687(0x19c)) !== "" &&
              (skipTo = $(this)
                [_0x506687(0x18a)](_0x506687(0x1a3))
                ["data"](_0x506687(0x19c))),
            $(this)
              ["parents"](_0x506687(0x181))
              [_0x506687(0x195)]("data-go-to") &&
              ((answer = $(this)
                ["parents"]("[data-go-to]")
                [_0x506687(0x195)]("data-go-to")),
              (selections = selections[_0x506687(0x155)](
                (_0x508302) => _0x508302[_0x506687(0x165)] !== x
              )),
              selections[_0x506687(0x13a)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x506687(0x13a)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x143378) => _0x143378[_0x506687(0x165)] === x
                )),
                (selections[objIndex][_0x506687(0x17f)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        });
  }
  $(steps[x])
    [_0x385f96(0x1a6)](":input[type=\x22radio\x22]")
    ["is"](_0x385f96(0x1b3)) &&
    ((selArr = []),
    $(steps)
      ["find"](_0x385f96(0x184))
      [_0x385f96(0x146)](function (_0x4c5e48, _0x39b697) {
        const _0x5cc789 = _0x385f96;
        selArr["push"]({
          selected: $(this)[_0x5cc789(0x1be)](_0x5cc789(0x1b7)),
        });
      }),
    (selString = []),
    selArr[_0x385f96(0x183)]((_0x388cc7) =>
      selString["push"](_0x388cc7[_0x385f96(0x1b7)])
    ),
    (selections = selections[_0x385f96(0x155)](
      (_0x5407dc) => _0x5407dc[_0x385f96(0x165)] !== x
    )),
    $(steps[x])
      [_0x385f96(0x1a6)]("[data-answer]:visible")
      ["find"](_0x385f96(0x152))
      [_0x385f96(0x146)](function () {
        const _0x6ecebc = _0x385f96;
        skipTo = undefined;
        if (
          $(this)
            [_0x6ecebc(0x18a)](_0x6ecebc(0x1a3))
            [_0x6ecebc(0x1be)](_0x6ecebc(0x19c))
        )
          skipTo = $(this)
            [_0x6ecebc(0x18a)](_0x6ecebc(0x1a3))
            [_0x6ecebc(0x1be)]("skip-to");
        else
          $(this)[_0x6ecebc(0x1be)](_0x6ecebc(0x19c)) &&
            (skipTo = $(this)[_0x6ecebc(0x1be)](_0x6ecebc(0x19c)));
        if ($(this)[_0x6ecebc(0x1be)](_0x6ecebc(0x1c0)))
          (answer = $(this)["attr"](_0x6ecebc(0x19e))),
            selections[_0x6ecebc(0x13a)]({ step: x, selected: answer }),
            console[_0x6ecebc(0x194)](skipTo),
            skipTo &&
              (selections[_0x6ecebc(0x13a)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0x6ecebc(0x16f)](
                (_0x596709) => _0x596709[_0x6ecebc(0x165)] === x
              )),
              (selections[objIndex][_0x6ecebc(0x17f)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x6ecebc(0x180)] = x));
        else
          $(this)[_0x6ecebc(0x18a)](_0x6ecebc(0x181))["data"]("go-to") &&
            ((answer = $(this)
              [_0x6ecebc(0x18a)](_0x6ecebc(0x181))
              [_0x6ecebc(0x1be)]("go-to")),
            selections["push"]({ step: x, selected: answer }),
            console[_0x6ecebc(0x194)](skipTo),
            skipTo &&
              (selections[_0x6ecebc(0x13a)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections["findIndex"](
                (_0x4fd7fe) => _0x4fd7fe["step"] === x
              )),
              (selections[objIndex][_0x6ecebc(0x17f)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x6ecebc(0x180)] = x)));
      }),
    logicExtra
      ? $(steps[x])
          ["find"](_0x385f96(0x1b9))
          [_0x385f96(0x1a6)](_0x385f96(0x123))
          [_0x385f96(0x1be)](_0x385f96(0x13d)) === !![] &&
        !back &&
        selections[_0x385f96(0x155)](
          (_0x1fb5ac) => _0x1fb5ac[_0x385f96(0x165)] === x
        )[_0x385f96(0x19a)] > 0x0 &&
        (console[_0x385f96(0x194)](_0x385f96(0x17c)),
        textareaLength === 0x0 &&
          textInputLength === 0x0 &&
          emailInputLength === 0x0 &&
          checkboxInputLength === 0x0 &&
          setTimeout(function () {
            (next = !![]), nextStep(), selectionQuiz();
          }, $(steps[x])
            [_0x385f96(0x1a6)](_0x385f96(0x1a0))
            [_0x385f96(0x1be)](_0x385f96(0x1a1))))
      : $(steps[x])
          [_0x385f96(0x1a6)]("[data-radio-skip]:visible")
          [_0x385f96(0x1be)](_0x385f96(0x13d)) === !![] &&
        textareaLength === 0x0 &&
        textInputLength === 0x0 &&
        emailInputLength === 0x0 &&
        checkboxInputLength === 0x0 &&
        setTimeout(function () {
          (next = !![]), nextStep(), selectionQuiz();
        }, $(steps[x])
          [_0x385f96(0x1a6)]("[data-radio-delay]")
          [_0x385f96(0x1be)](_0x385f96(0x1a1))),
    console[_0x385f96(0x194)](selections)),
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
  const _0x2d488b = _0x493fdd;
  x++,
    x > progress && (progress = x),
    x <= steps[_0x2d488b(0x19a)] - 0x1 &&
      (updateStep(),
      memory && saveFilledInput(),
      $(_0x2d488b(0x1c6))[_0x2d488b(0x172)](
        $(steps[x])[_0x2d488b(0x1be)](_0x2d488b(0x16e))
          ? (curStep = x + 0x0)
          : (curStep = x + 0x1)
      ));
}
function backStep() {
  const _0x375f91 = _0x493fdd;
  x > 0x0 &&
    ($(progressbar[x])[_0x375f91(0x18b)](_0x375f91(0x161)),
    selections[_0x375f91(0x155)](
      (_0x1bc739) => _0x1bc739[_0x375f91(0x17f)] === x
    )[_0x375f91(0x19a)] > 0x0
      ? (x = parseInt(
          getSafe(
            () =>
              selections["filter"](
                (_0xc9b6fe) => _0xc9b6fe["skipTo"] === x
              )[0x0][_0x375f91(0x180)]
          )
        ))
      : x--,
    updateStep()),
    $(_0x375f91(0x1c6))[_0x375f91(0x172)]((curStep = x + 0x1));
}
$(_0x493fdd(0x133))["on"](_0x493fdd(0x121), function (_0x2b166b) {
  const _0x437c07 = _0x493fdd;
  _0x2b166b[_0x437c07(0x14d)] === 0xd &&
    fill &&
    ($(_0x437c07(0x18e))[_0x437c07(0x1be)]("enter")
      ? ($(_0x437c07(0x1a9))[0x0][_0x437c07(0x1ab)](),
        _0x2b166b[_0x437c07(0x1c3)](),
        _0x2b166b[_0x437c07(0x1d2)]())
      : (_0x2b166b[_0x437c07(0x1c3)](), _0x2b166b["stopPropagation"]()));
}),
  $(_0x493fdd(0x133))[_0x493fdd(0x1ce)](function (_0x51159e) {
    const _0x2101ec = _0x493fdd;
    (_0x51159e[_0x2101ec(0x164)] || _0x51159e["ctrlKey"]) &&
      _0x51159e["keyCode"] == 0xd &&
      (x >= steps[_0x2101ec(0x19a)] - 0x1 && fill
        ? $(_0x2101ec(0x137))[_0x2101ec(0x1ab)]()
        : (event[_0x2101ec(0x1c3)](), event[_0x2101ec(0x1d2)]()));
  });
function selectionQuiz() {
  const _0x2347fc = _0x493fdd;
  $(this)["find"](_0x2347fc(0x13b)) &&
    ($("[data-selection]")[_0x2347fc(0x1cf)](),
    $(_0x2347fc(0x1a5) + selString + "\x22]")[_0x2347fc(0x1be)](
      _0x2347fc(0x12a)
    )
      ? $(_0x2347fc(0x1a5) + selString + "\x22]")[_0x2347fc(0x12d)]()
      : $(_0x2347fc(0x174))[_0x2347fc(0x12d)]());
}
$(_0x493fdd(0x1a9))["on"]("click", function () {
  scrollTop(), (next = !![]), (back = ![]), nextStep(), selectionQuiz();
}),
  $(_0x493fdd(0x1d1))["on"]("click", function () {
    const _0x437fb6 = _0x493fdd;
    scrollTop(),
      (next = ![]),
      (back = !![]),
      back && $(_0x437fb6(0x171))[_0x437fb6(0x142)](_0x437fb6(0x148), ![]),
      backStep(),
      (back = ![]);
  }),
  $(steps)
    [_0x493fdd(0x1a6)](":input")
    ["on"](_0x493fdd(0x150), function (_0x4eec1c) {
      validation();
    }),
  $(steps)["find"](_0x493fdd(0x1a7))["on"](_0x493fdd(0x1ab), validation());
$(_0x493fdd(0x1ca))[_0x493fdd(0x1be)](_0x493fdd(0x131))
  ? $(_0x493fdd(0x18c))["removeClass"](_0x493fdd(0x1c1))
  : $(_0x493fdd(0x18c))[_0x493fdd(0x19f)](_0x493fdd(0x1c1));
function clickableIndicator() {
  const _0x4f220c = _0x493fdd;
  $(_0x4f220c(0x1bd))["removeClass"]("current"),
    $(_0x4f220c(0x134))["data"](_0x4f220c(0x125)) &&
      ($(_0x4f220c(0x134))[_0x4f220c(0x1be)](_0x4f220c(0x131))
        ? ((x = $(this)[_0x4f220c(0x189)]()), updateStep())
        : $(this)[_0x4f220c(0x189)]() <= progress &&
          ((x = $(this)[_0x4f220c(0x189)]()), updateStep()));
}
$("[data-form=\x22custom-progress-indicator\x22]")["on"](
  _0x493fdd(0x1ab),
  clickableIndicator
);
$("[data-form=\x22multistep\x22]")[_0x493fdd(0x1be)](_0x493fdd(0x126)) &&
  (console[_0x493fdd(0x194)]("debug\x20mode"),
  $(_0x493fdd(0x181))[_0x493fdd(0x146)](function () {
    const _0x496c1a = _0x493fdd;
    $(this)[_0x496c1a(0x163)](
      _0x496c1a(0x1cd),
      $(this)[_0x496c1a(0x1be)](_0x496c1a(0x1c0))
    );
  }),
  $(_0x493fdd(0x1b0))["each"](function () {
    const _0x2a21a5 = _0x493fdd;
    $(this)[_0x2a21a5(0x163)](
      _0x2a21a5(0x1a2),
      $(this)[_0x2a21a5(0x1be)](_0x2a21a5(0x1b6))
    );
  }));
$(_0x493fdd(0x137))["on"]("click", function (_0x2b3489) {
  const _0x2e4a00 = _0x493fdd;
  $(this)["data"](_0x2e4a00(0x1d3)) &&
    $(_0x2e4a00(0x135))[_0x2e4a00(0x195)](
      _0x2e4a00(0x140),
      $(this)[_0x2e4a00(0x1be)](_0x2e4a00(0x1d3))
    ),
    (successCard = $(this)[_0x2e4a00(0x1be)](_0x2e4a00(0x130))),
    _0x2b3489[_0x2e4a00(0x1c3)](),
    _0x2b3489[_0x2e4a00(0x1d2)](),
    logicExtra &&
      ($(this)["prop"](_0x2e4a00(0x1c4), !![]),
      $(steps)
        [_0x2e4a00(0x1a6)](_0x2e4a00(0x144))
        [_0x2e4a00(0x142)](_0x2e4a00(0x17a), ![]),
      console[_0x2e4a00(0x194)]("nonvalidated")),
    $(_0x2e4a00(0x177))[_0x2e4a00(0x146)](function () {
      const _0x5bb4bb = _0x2e4a00,
        _0x42c99e = $(this)[_0x5bb4bb(0x1a6)](_0x5bb4bb(0x12e)),
        _0x422d68 = [];
      console[_0x5bb4bb(0x194)](_0x422d68),
        _0x42c99e[_0x5bb4bb(0x146)](function () {
          const _0x457242 = _0x5bb4bb;
          _0x422d68[_0x457242(0x13a)](
            $(this)[_0x457242(0x172)]()[_0x457242(0x192)]()
          );
        });
      const _0x5c4c2b = $(this)[_0x5bb4bb(0x138)](_0x5bb4bb(0x122));
      $[_0x5bb4bb(0x146)](_0x422d68, function (_0x1c4e0f, _0x591223) {
        const _0x168e8b = _0x5bb4bb,
          _0x592428 = $(_0x168e8b(0x129))
            ["val"](_0x591223)
            [_0x168e8b(0x172)](_0x591223);
        _0x5c4c2b["append"](_0x592428);
      });
    }),
    localStorage[_0x2e4a00(0x1a4)](_0x2e4a00(0x17b)),
    fill &&
      ($(this)[_0x2e4a00(0x1be)](_0x2e4a00(0x141))
        ? $(this)[_0x2e4a00(0x1cb)]($(this)[_0x2e4a00(0x1be)](_0x2e4a00(0x141)))
        : ($(this)[_0x2e4a00(0x1cb)]("Please\x20wait..."),
          $(this)[_0x2e4a00(0x172)](_0x2e4a00(0x11a))),
      $(_0x2e4a00(0x135))[_0x2e4a00(0x185)]());
}),
  $(document)[_0x493fdd(0x1c5)](function (_0x8c39c8, _0x53a9b4, _0x12933c) {
    const _0xec94e4 = _0x493fdd;
    if (_0x12933c["url"][_0xec94e4(0x1d0)](_0xec94e4(0x199))) {
      const _0x3d02b8 = _0x53a9b4["status"] === 0xc8,
        _0x632eae = _0xec94e4(0x119),
        _0x1cbf0a = $(this)[_0xec94e4(0x1be)]("multistep-redirect");
      console["log"](_0x3d02b8),
        console["log"](_0x1cbf0a),
        _0x1cbf0a && _0x3d02b8 && (window[_0xec94e4(0x15a)] = _0x1cbf0a),
        _0x3d02b8 &&
          successCard !== "" &&
          $("[data-success-card=\x22" + successCard + "\x22]")[
            _0xec94e4(0x12d)
          ](),
        _0x3d02b8 &&
          formReset &&
          setTimeout(() => {
            const _0xf7d986 = _0xec94e4;
            $(_0xf7d986(0x135))[_0xf7d986(0x11f)](_0xf7d986(0x187)),
              $(_0xf7d986(0x135))
                [_0xf7d986(0x18a)]()
                [_0xf7d986(0x1a6)](_0xf7d986(0x124))
                ["hide"](),
              (x = 0x0),
              updateStep(),
              $(_0xf7d986(0x135))[_0xf7d986(0x120)](),
              $("[data-form=\x22submit-btn\x22]")["text"](oldSubmitText),
              $(_0xf7d986(0x137))[_0xf7d986(0x1cb)](oldSubmitText),
              $(_0xf7d986(0x1c6))[_0xf7d986(0x172)](0x1),
              $("[data-form=\x22multistep\x22]")
                ["find"](_0xf7d986(0x176))
                [_0xf7d986(0x138)](_0xf7d986(0x169))
                ["removeClass"](_0xf7d986(0x178));
          }, 0x1f4);
    }
  }),
  $(_0x493fdd(0x11c))["on"](_0x493fdd(0x1ab), function () {
    const _0x408564 = _0x493fdd;
    $(_0x408564(0x135))[_0x408564(0x11f)]("reset");
    let _0x3f229a = $(this);
    $(this)[_0x408564(0x172)](_0x408564(0x11a)),
      setTimeout(function () {
        const _0x307892 = _0x408564;
        $(_0x3f229a)[_0x307892(0x172)](oldResetText),
          $(_0x3f229a)[_0x307892(0x18a)](_0x307892(0x124))["hide"](),
          (x = 0x0),
          updateStep(),
          $(_0x307892(0x135))[_0x307892(0x120)](),
          $(_0x307892(0x137))[_0x307892(0x172)](oldSubmitText),
          $(_0x307892(0x137))[_0x307892(0x1cb)](oldSubmitText),
          $(_0x3f229a)[_0x307892(0x1cb)](oldSubmitText),
          $(_0x307892(0x1c6))[_0x307892(0x172)](0x1),
          $(_0x307892(0x135))
            [_0x307892(0x1a6)](_0x307892(0x176))
            ["siblings"](_0x307892(0x169))
            ["removeClass"](_0x307892(0x178));
      }, 0x3e8);
  }),
  steps[_0x493fdd(0x146)](function () {
    const _0x4f2400 = _0x493fdd;
    $(_0x4f2400(0x196))[_0x4f2400(0x163)](
      progressbarClone["clone"](!![], !![])
    );
  }),
  (progressbar = $(_0x493fdd(0x196))[_0x493fdd(0x191)]()),
  $(_0x493fdd(0x1bd))["on"](_0x493fdd(0x1ab), clickableIndicator),
  updateStep(),
  $(_0x493fdd(0x1bf))["keypress"](function (_0x1a69d5) {
    const _0x37117d = _0x493fdd;
    $(this)["focus"](),
      _0x1a69d5[_0x37117d(0x1b8)] == _0x37117d(0x1b5) &&
        (_0x1a69d5["preventDefault"](), _0x1a69d5[_0x37117d(0x1d2)]()),
      _0x1a69d5["shiftKey"] &&
        _0x1a69d5["key"] == _0x37117d(0x1b5) &&
        $(this)[_0x37117d(0x1cb)]($(this)[_0x37117d(0x1cb)]() + "\x0a");
  });
