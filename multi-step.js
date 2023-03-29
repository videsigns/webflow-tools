//29-03-2023

const _0xba1d8c = _0xa83c;
(function (_0x5152e9, _0x436bdd) {
  const _0xf42f69 = _0xa83c,
    _0x5f0231 = _0x5152e9();
  while (!![]) {
    try {
      const _0x819325 =
        parseInt(_0xf42f69(0x152)) / 0x1 +
        (-parseInt(_0xf42f69(0x160)) / 0x2) *
          (-parseInt(_0xf42f69(0x139)) / 0x3) +
        -parseInt(_0xf42f69(0x141)) / 0x4 +
        (-parseInt(_0xf42f69(0xaa)) / 0x5) *
          (parseInt(_0xf42f69(0x169)) / 0x6) +
        -parseInt(_0xf42f69(0xd2)) / 0x7 +
        parseInt(_0xf42f69(0xdd)) / 0x8 +
        (parseInt(_0xf42f69(0x14b)) / 0x9) * (parseInt(_0xf42f69(0xfc)) / 0xa);
      if (_0x819325 === _0x436bdd) break;
      else _0x5f0231["push"](_0x5f0231["shift"]());
    } catch (_0x2323df) {
      _0x5f0231["push"](_0x5f0231["shift"]());
    }
  }
})(_0x3a85, 0x780b9);
let x = 0x0,
  curStep = 0x0,
  steps = $(_0xba1d8c(0xf8)),
  progressbarClone = $(_0xba1d8c(0xc1))[_0xba1d8c(0xfa)](),
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
  reinitIX = $(_0xba1d8c(0x13e))[_0xba1d8c(0xca)](_0xba1d8c(0x101)),
  textareaLength = 0x0,
  textInputLength = 0x0,
  emailInputLength = 0x0,
  selectInputLength = 0x0,
  checkboxInputLength = 0x0,
  filledInput = [],
  savedFilledInput = JSON[_0xba1d8c(0xcc)](
    localStorage["getItem"](_0xba1d8c(0xb1))
  ),
  memory = $(_0xba1d8c(0xb9))[_0xba1d8c(0xca)](_0xba1d8c(0xdf)),
  quiz = $("[data-quiz]")["data"](_0xba1d8c(0x15f)),
  progress = 0x0;
const urlFormly = new URL(window[_0xba1d8c(0x146)][_0xba1d8c(0x11b)]);
let params = $(_0xba1d8c(0x118))[_0xba1d8c(0xca)](_0xba1d8c(0x13b)),
  skipTo = 0x0,
  next = ![],
  back = ![],
  selArr = [],
  selString = [],
  emptyInput = 0x0,
  searchQ = [],
  domainAllowed = !![],
  dom = [],
  logicExtra = $("[data-form=\x22multistep\x22]")[_0xba1d8c(0xca)](
    "logic-extra"
  ),
  oldSubmitText = $(_0xba1d8c(0xc6))["val"](),
  oldResetText = $("[data-btn=\x22reset\x22]")[_0xba1d8c(0x12e)](),
  formReset = $(_0xba1d8c(0x151))[_0xba1d8c(0xca)](_0xba1d8c(0x161)),
  successCard = "";
$(progressbarClone)[_0xba1d8c(0x16f)](_0xba1d8c(0x13c)),
  $(_0xba1d8c(0xe8))["children"]()[_0xba1d8c(0xeb)](),
  $(_0xba1d8c(0x149))[_0xba1d8c(0x12e)](steps[_0xba1d8c(0xbd)]),
  $("[data-form=\x22submit-btn\x22]")[_0xba1d8c(0xf4)](),
  (curStep = curStep + 0x1),
  $("[data-text=\x22current-step\x22]")[_0xba1d8c(0x12e)](curStep),
  steps[_0xba1d8c(0xf4)](),
  $(_0xba1d8c(0xe5))[_0xba1d8c(0xf4)](),
  $(_0xba1d8c(0x12b))["each"](function () {
    const _0x318229 = _0xba1d8c;
    $(this)[_0x318229(0x15c)](_0x318229(0xcd), _0x318229(0xad));
  });
function getParams() {
  const _0x3aee5c = _0xba1d8c;
  urlFormly[_0x3aee5c(0xaf)][_0x3aee5c(0xc7)](function (_0x465499, _0x5c2fec) {
    searchQ["push"]({ val: _0x465499, key: _0x5c2fec });
  });
}
function _0xa83c(_0x305f02, _0x211a0b) {
  const _0x3a85c3 = _0x3a85();
  return (
    (_0xa83c = function (_0xa83c70, _0x5b22f7) {
      _0xa83c70 = _0xa83c70 - 0xa8;
      let _0x41e67b = _0x3a85c3[_0xa83c70];
      return _0x41e67b;
    }),
    _0xa83c(_0x305f02, _0x211a0b)
  );
}
function getSafe(_0x464d92, _0x582386) {
  try {
    return _0x464d92();
  } catch (_0x90ee03) {
    return _0x582386;
  }
}
savedFilledInput &&
  memory &&
  savedFilledInput["forEach"]((_0x3ed42a) => {
    const _0x46a761 = _0xba1d8c;
    if (
      $(
        _0x46a761(0xc9) +
          _0x3ed42a[_0x46a761(0x128)] +
          "\x22][value=\x22" +
          _0x3ed42a[_0x46a761(0xdb)] +
          "\x22]"
      )[_0x46a761(0x15c)](_0x46a761(0xcd)) === _0x46a761(0x167)
    )
      $(
        _0x46a761(0xc9) +
          _0x3ed42a["inputName"] +
          _0x46a761(0xe6) +
          _0x3ed42a[_0x46a761(0xdb)] +
          "\x22]"
      )[_0x46a761(0xce)](),
        $(
          "input[name=\x22" +
            _0x3ed42a["inputName"] +
            "\x22][value=\x22" +
            _0x3ed42a["value"] +
            "\x22]"
        )
          [_0x46a761(0x114)](_0x46a761(0x116))
          [_0x46a761(0xd1)](_0x46a761(0xe3));
    else
      _0x3ed42a[_0x46a761(0xdb)] === "on"
        ? ($(_0x46a761(0xc9) + _0x3ed42a[_0x46a761(0x128)] + "\x22]")[
            _0x46a761(0xce)
          ](),
          $(_0x46a761(0xc9) + _0x3ed42a[_0x46a761(0x128)] + "\x22]")
            [_0x46a761(0x114)](_0x46a761(0xcf))
            [_0x46a761(0xd1)](_0x46a761(0xe3)))
        : ($(_0x46a761(0xc9) + _0x3ed42a["inputName"] + "\x22]")["val"](
            _0x3ed42a[_0x46a761(0xdb)]
          ),
          $(_0x46a761(0xfe) + _0x3ed42a[_0x46a761(0x128)] + "\x22]")[
            _0x46a761(0xd8)
          ](_0x3ed42a[_0x46a761(0xdb)]),
          $(_0x46a761(0x166) + _0x3ed42a[_0x46a761(0x128)] + "\x22]")
            [_0x46a761(0xae)](_0x46a761(0xfb) + _0x3ed42a["value"] + "\x22]")
            ["prop"](_0x46a761(0x10d), !![]));
  });
params &&
  (getParams(),
  searchQ[_0xba1d8c(0xc7)]((_0x8b61e6) => {
    const _0x1cb103 = _0xba1d8c;
    console[_0x1cb103(0x100)](
      _0x8b61e6,
      $("input[value=\x22" + _0x8b61e6[_0x1cb103(0xd8)] + "\x22]")[
        _0x1cb103(0x15c)
      ](_0x1cb103(0xcd))
    );
    if (
      $(
        _0x1cb103(0xc9) +
          _0x8b61e6[_0x1cb103(0x120)] +
          _0x1cb103(0xe6) +
          _0x8b61e6[_0x1cb103(0xd8)] +
          "\x22]"
      )[_0x1cb103(0x15c)](_0x1cb103(0xcd)) === "radio"
    )
      $(
        _0x1cb103(0xc9) +
          _0x8b61e6[_0x1cb103(0x120)] +
          "\x22][value=\x22" +
          _0x8b61e6[_0x1cb103(0xd8)] +
          "\x22]"
      )[_0x1cb103(0xce)](),
        $(
          _0x1cb103(0xc9) +
            _0x8b61e6[_0x1cb103(0x120)] +
            _0x1cb103(0xe6) +
            _0x8b61e6[_0x1cb103(0xd8)] +
            "\x22]"
        )
          ["siblings"](_0x1cb103(0x116))
          [_0x1cb103(0xd1)]("w--redirected-checked");
    else
      _0x8b61e6[_0x1cb103(0xd8)] === "on"
        ? ($("input[name=\x22" + _0x8b61e6[_0x1cb103(0x120)] + "\x22]")[
            _0x1cb103(0xce)
          ](),
          $(_0x1cb103(0xc9) + _0x8b61e6[_0x1cb103(0x120)] + "\x22]")
            ["siblings"](_0x1cb103(0xcf))
            [_0x1cb103(0xd1)](_0x1cb103(0xe3)))
        : ($(_0x1cb103(0xc9) + _0x8b61e6[_0x1cb103(0x120)] + "\x22]")[
            _0x1cb103(0xd8)
          ](_0x8b61e6[_0x1cb103(0xd8)]),
          $(_0x1cb103(0xfe) + _0x8b61e6[_0x1cb103(0x120)] + "\x22]")["val"](
            _0x8b61e6[_0x1cb103(0xd8)]
          ),
          $(_0x1cb103(0x166) + _0x8b61e6["key"] + "\x22]")
            [_0x1cb103(0xae)](
              _0x1cb103(0xfb) + _0x8b61e6[_0x1cb103(0xd8)] + "\x22]"
            )
            [_0x1cb103(0x14f)](_0x1cb103(0x10d), !![]));
  }));
quiz &&
  steps[_0xba1d8c(0x142)](function () {
    const _0xd6835a = _0xba1d8c;
    $(this)["children"]()[_0xd6835a(0x15c)]("data-radio-skip", !![]),
      $(this)["children"]()["attr"](_0xd6835a(0x124), 0xfa);
  });
function disableBtn() {
  const _0x5de75b = _0xba1d8c;
  (fill = ![]),
    $(_0x5de75b(0x147))[_0x5de75b(0xe9)]({
      opacity: _0x5de75b(0x12f),
      "pointer-events": _0x5de75b(0x11f),
    }),
    $(_0x5de75b(0x147))[_0x5de75b(0xd1)](_0x5de75b(0xc8)),
    $("[data-form=\x22submit-btn\x22]")[_0x5de75b(0xe9)]({
      opacity: _0x5de75b(0x12f),
      "pointer-events": _0x5de75b(0x11f),
    }),
    $(_0x5de75b(0xc6))["addClass"](_0x5de75b(0xc8));
}
function enableBtn() {
  const _0x48a179 = _0xba1d8c;
  (fill = !![]),
    $(_0x48a179(0x147))["css"]({
      "pointer-events": _0x48a179(0xc4),
      opacity: "1",
    }),
    $(_0x48a179(0x147))[_0x48a179(0x16f)](_0x48a179(0xc8)),
    $(_0x48a179(0xc6))[_0x48a179(0xe9)]({
      "pointer-events": "auto",
      opacity: "1",
    }),
    $(_0x48a179(0xc6))[_0x48a179(0x16f)](_0x48a179(0xc8));
}
function saveFilledInput() {
  const _0x405a41 = _0xba1d8c;
  $(_0x405a41(0x15a))
    [_0x405a41(0x16b)](_0x405a41(0x123))
    ["each"](function () {
      const _0x3782fc = _0x405a41;
      $(this)[_0x3782fc(0x15c)](_0x3782fc(0xcd)) === _0x3782fc(0xe1) ||
      $(this)[_0x3782fc(0x15c)](_0x3782fc(0xcd)) === "radio"
        ? $(this)["prop"](_0x3782fc(0x104)) &&
          (filledInput[_0x3782fc(0xe4)](
            (_0x1ea712) =>
              _0x1ea712[_0x3782fc(0x128)] ===
              $(this)[_0x3782fc(0x15c)](_0x3782fc(0x108))
          )
            ? ((filledInput = filledInput[_0x3782fc(0x11a)](
                (_0x2cef2f) =>
                  _0x2cef2f[_0x3782fc(0x128)] !==
                  $(this)[_0x3782fc(0x15c)](_0x3782fc(0x108))
              )),
              $(this)[_0x3782fc(0xd8)]() !== "" &&
                filledInput["push"]({
                  inputName: $(this)[_0x3782fc(0x15c)](_0x3782fc(0x108)),
                  value: $(this)["val"](),
                }))
            : $(this)["val"]() !== "" &&
              filledInput[_0x3782fc(0x127)]({
                inputName: $(this)["attr"]("name"),
                value: $(this)["val"](),
              }))
        : filledInput["some"](
            (_0x58ec30) =>
              _0x58ec30[_0x3782fc(0x128)] ===
              $(this)[_0x3782fc(0x15c)](_0x3782fc(0x108))
          )
        ? ((filledInput = filledInput["filter"](
            (_0x327d58) =>
              _0x327d58[_0x3782fc(0x128)] !==
              $(this)[_0x3782fc(0x15c)](_0x3782fc(0x108))
          )),
          $(this)[_0x3782fc(0xd8)]() !== "" &&
            filledInput[_0x3782fc(0x127)]({
              inputName: $(this)[_0x3782fc(0x15c)](_0x3782fc(0x108)),
              value: $(this)[_0x3782fc(0xd8)](),
            }))
        : $(this)[_0x3782fc(0xd8)]() !== "" &&
          filledInput[_0x3782fc(0x127)]({
            inputName: $(this)[_0x3782fc(0x15c)](_0x3782fc(0x108)),
            value: $(this)[_0x3782fc(0xd8)](),
          });
    }),
    filledInput &&
      filledInput[_0x405a41(0xc7)]((_0x1d474c) => {
        const _0x3cdeb0 = _0x405a41;
        urlFormly["searchParams"][_0x3cdeb0(0xbf)](_0x1d474c["inputName"]),
          urlFormly["searchParams"]["set"](
            _0x1d474c[_0x3cdeb0(0x128)],
            _0x1d474c[_0x3cdeb0(0xdb)]
          ),
          window[_0x3cdeb0(0xff)][_0x3cdeb0(0x10e)](null, null, urlFormly);
      }),
    localStorage[_0x405a41(0xb2)](_0x405a41(0xb1)),
    localStorage[_0x405a41(0xcb)](
      _0x405a41(0xb1),
      JSON["stringify"](filledInput)
    );
}
function scrollTop() {}
function updateStep() {
  const _0x1f5cdf = _0xba1d8c;
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
  $("[data-clickable]")[_0x1f5cdf(0xca)]("clickable") &&
    (steps[_0x1f5cdf(0xae)](":input[required]")["each"](function () {
      const _0x391705 = _0x1f5cdf;
      $(
        $(_0x391705(0x165))[
          $(this)
            [_0x391705(0x129)]("[data-form=\x22step\x22]")
            [_0x391705(0x105)]()
        ]
      ),
        $(this)["val"]() === "" && emptyInput++;
    }),
    emptyInput > 0x0
      ? $("input[type=\x22submit\x22]")["addClass"](_0x1f5cdf(0xc8))
      : $(_0x1f5cdf(0x156))["removeClass"]("disabled"));
  $(_0x1f5cdf(0x165))[_0x1f5cdf(0x16f)](_0x1f5cdf(0x13c)),
    $($(_0x1f5cdf(0x165))[x])[_0x1f5cdf(0xd1)]("current"),
    (selection = selections["filter"](
      (_0x46979b) => _0x46979b["step"] === x - 0x1
    ));
  next &&
    (x = getSafe(() => selection[0x0]["skipTo"])
      ? parseInt(getSafe(() => selection[0x0][_0x1f5cdf(0x134)]))
      : x);
  $(_0x1f5cdf(0x148))[_0x1f5cdf(0xf4)](), steps["hide"]();
  reinitIX === !![] && window[_0x1f5cdf(0x13d)][_0x1f5cdf(0x10f)]();
  $(progressbar)["removeClass"](_0x1f5cdf(0x13c));
  for (i = 0x0; i <= x; i++) {
    $(progressbar[i])[_0x1f5cdf(0xd1)](_0x1f5cdf(0x13c));
  }
  reinitIX === !![]
    ? (window[_0x1f5cdf(0x13d)] &&
        window[_0x1f5cdf(0x13d)]["require"](_0x1f5cdf(0xef))[_0x1f5cdf(0xda)](),
      document["dispatchEvent"](new Event("readystatechange")),
      $(steps[x])["show"]())
    : $(steps[x])[_0x1f5cdf(0xc0)]("slow");
  x === 0x0 &&
    !$(steps[x])[_0x1f5cdf(0xca)](_0x1f5cdf(0x14e)) &&
    $(steps[x])["find"](_0x1f5cdf(0x148))[_0x1f5cdf(0x138)]();
  selection[_0x1f5cdf(0xbd)] > 0x0
    ? $(steps[x])
        [_0x1f5cdf(0xae)](
          "[data-answer=\x22" + selection[0x0][_0x1f5cdf(0x10d)] + "\x22]"
        )
        ["show"]()
    : $(steps[x])
        [_0x1f5cdf(0xae)](_0x1f5cdf(0xea) + answer + "\x22]")
        [_0x1f5cdf(0x138)]();
  if (x === 0x0)
    $(_0x1f5cdf(0x132))[_0x1f5cdf(0xf4)](), $(_0x1f5cdf(0x147))["show"]();
  else {
    if (
      x === steps[_0x1f5cdf(0xbd)] - 0x1 ||
      $(steps[x])[_0x1f5cdf(0xae)]("[data-form=\x22submit\x22]:visible")[
        "length"
      ] > 0x0
    ) {
      $(_0x1f5cdf(0x147))[_0x1f5cdf(0xf4)]();
      if (
        $(steps[x])
          [_0x1f5cdf(0xae)]("[data-form=\x22next-btn\x22][data-submit-show]")
          ["data"](_0x1f5cdf(0x164))
      )
        $(steps[x])[_0x1f5cdf(0xae)](_0x1f5cdf(0xc2))["show"]();
      else
        $(_0x1f5cdf(0x147))["data"]("submit-show") &&
          $(_0x1f5cdf(0x147))[_0x1f5cdf(0x138)]();
      $(_0x1f5cdf(0xc6))["show"](), $(_0x1f5cdf(0x132))["show"]();
    } else
      $("[data-form=\x22next-btn\x22]")[_0x1f5cdf(0x138)](),
        $(_0x1f5cdf(0x132))["show"](),
        $(_0x1f5cdf(0xc6))[_0x1f5cdf(0xf4)]();
  }
  $($(steps[x])[_0x1f5cdf(0xae)]("input[autofocus]")[0x0])["focus"](),
    $($(steps[x])[_0x1f5cdf(0xae)](_0x1f5cdf(0xbb))[0x0])[_0x1f5cdf(0x111)](),
    validation();
  for (idx = 0x0; idx <= progress; idx++) {
    $($(_0x1f5cdf(0x165))[idx])[_0x1f5cdf(0x16f)](_0x1f5cdf(0xc8));
  }
}
function validateEmail(_0x770f5c, _0x2e663f) {
  const _0x5ef475 = _0xba1d8c;
  let _0x4b1a42 = _0x770f5c[_0x5ef475(0x144)]("@")
    ? _0x770f5c[_0x5ef475(0xac)]("@")[0x1][_0x5ef475(0xac)](".")[0x0]
    : [];
  dom = [];
  _0x2e663f !== undefined &&
    _0x2e663f[_0x5ef475(0xac)](",")[_0x5ef475(0xc7)](function (_0x1a05ad) {
      const _0x26d3d8 = _0x5ef475;
      _0x1a05ad[_0x26d3d8(0x144)](_0x4b1a42) && dom["push"](_0x4b1a42);
    });
  dom["length"] > 0x0 ? (domainAllowed = ![]) : (domainAllowed = !![]);
  var _0x149908 = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,20})?$/;
  !_0x149908[_0x5ef475(0xf7)](_0x770f5c)
    ? (emailFilled = ![])
    : (emailFilled = !![]);
}
function validation() {
  const _0x55d879 = _0xba1d8c;
  $(steps[x])[_0x55d879(0xca)]("card") && enableBtn();
  (textareaLength = $(steps[x])["find"](_0x55d879(0xb0))[_0x55d879(0xbd)]),
    (textInputLength = $(steps[x])["find"](_0x55d879(0xe2))[_0x55d879(0xbd)]),
    (selectInputLength = $(steps[x])["find"](_0x55d879(0x158))[
      _0x55d879(0xbd)
    ]),
    (emailInputLength = $(steps[x])[_0x55d879(0xae)](_0x55d879(0x102))[
      "length"
    ]),
    (checkboxInputLength = $(steps[x])[_0x55d879(0xae)](
      "input[type=\x22checkbox\x22]:visible"
    )[_0x55d879(0xbd)]);
  textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0
    ? disableBtn()
    : enableBtn();
  var _0x163bc5 = $(steps[x])[_0x55d879(0xca)](_0x55d879(0xe1))
    ? $(steps[x])[_0x55d879(0xca)]("checkbox")
    : 0x0;
  if (!logicExtra)
    $(steps[x])["find"](":input")["is"](_0x55d879(0xbc)) &&
      (_0x163bc5 === "*" ||
      _0x163bc5 > $(steps[x])["find"](_0x55d879(0xd9))[_0x55d879(0xbd)]
        ? $(steps[x])
            [_0x55d879(0xae)](_0x55d879(0xd9))
            ["each"](function () {
              const _0x14dd4f = _0x55d879;
              $(this)["is"](_0x14dd4f(0xa8))
                ? $(steps[x])[_0x14dd4f(0xae)](":input[required]")[
                    _0x14dd4f(0xbd)
                  ] < 0x1 && (checkboxFilled = !![])
                : (checkboxFilled = ![]);
            })
        : $(steps[x])[_0x55d879(0xae)](":input[type=\x22checkbox\x22]:checked")[
            _0x55d879(0xbd)
          ] >= _0x163bc5
        ? (checkboxFilled = !![])
        : (checkboxFilled = ![])),
      $(steps[x])
        [_0x55d879(0xae)](_0x55d879(0x133))
        [_0x55d879(0x142)](function (_0x40e331) {
          const _0x42565a = _0x55d879;
          var _0x312173 = $(this)[_0x42565a(0x15c)](_0x42565a(0x108));
          $("input:radio[name=\x22" + _0x312173 + "\x22]:checked")["length"] ==
          0x0
            ? !empReqRadio[_0x42565a(0xae)](
                (_0x251c75) => _0x251c75[_0x42565a(0x112)] === _0x40e331
              ) && empReqRadio["push"]({ input: _0x40e331 })
            : (empReqRadio = empReqRadio[_0x42565a(0x11a)](
                (_0x158191) => _0x158191[_0x42565a(0x112)] !== _0x40e331
              )),
            empReqRadio["length"] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x55d879(0xf0))
        [_0x55d879(0x142)](function (_0x58c262) {
          const _0x129079 = _0x55d879;
          $(this)["val"]() !== ""
            ? (empReqInput = empReqInput[_0x129079(0x11a)](
                (_0x294b63) => _0x294b63[_0x129079(0x112)] !== _0x58c262
              ))
            : !empReqInput["find"](
                (_0x188721) => _0x188721["input"] === _0x58c262
              ) && empReqInput[_0x129079(0x127)]({ input: _0x58c262 }),
            empReqInput[_0x129079(0xbd)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x55d879(0xae)](":input[type=\x22tel\x22][required]")
        [_0x55d879(0x142)](function (_0x29353b) {
          const _0x38254b = _0x55d879;
          $(this)[_0x38254b(0xd8)]() !== ""
            ? (empReqTel = empReqTel[_0x38254b(0x11a)](
                (_0x3546e3) => _0x3546e3[_0x38254b(0x112)] !== _0x29353b
              ))
            : !empReqTel[_0x38254b(0xae)](
                (_0x9ab122) => _0x9ab122["input"] === _0x29353b
              ) && empReqTel[_0x38254b(0x127)]({ input: _0x29353b }),
            empReqTel[_0x38254b(0xbd)] === 0x0
              ? (telFilled = !![])
              : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x55d879(0xae)](":input[type=\x22file\x22][required]")
        [_0x55d879(0x142)](function (_0x5c62e8) {
          const _0x180ce2 = _0x55d879;
          $(this)["val"]() !== ""
            ? (empReqFile = empReqFile[_0x180ce2(0x11a)](
                (_0x31c8f4) => _0x31c8f4["input"] !== _0x5c62e8
              ))
            : !empReqFile[_0x180ce2(0xae)](
                (_0x470eda) => _0x470eda[_0x180ce2(0x112)] === _0x5c62e8
              ) && empReqFile[_0x180ce2(0x127)]({ input: _0x5c62e8 }),
            empReqFile[_0x180ce2(0xbd)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x55d879(0xae)](":input[type=\x22number\x22][required]")
        [_0x55d879(0x142)](function (_0x5ad28c) {
          const _0x20c046 = _0x55d879;
          $(this)[_0x20c046(0xd8)]() !== ""
            ? (empReqNum = empReqNum[_0x20c046(0x11a)](
                (_0x3ae310) => _0x3ae310[_0x20c046(0x112)] !== _0x5ad28c
              ))
            : !empReqNum[_0x20c046(0xae)](
                (_0x422d) => _0x422d[_0x20c046(0x112)] === _0x5ad28c
              ) && empReqNum[_0x20c046(0x127)]({ input: _0x5ad28c }),
            empReqNum[_0x20c046(0xbd)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x55d879(0xae)](_0x55d879(0x15e))
        ["each"](function (_0x73b7db) {
          const _0x11f5b1 = _0x55d879;
          let _0x1a04b0 = $(this)[_0x11f5b1(0xd8)]();
          _0x1a04b0 === "" && (_0x1a04b0 = null),
            _0x1a04b0 != null
              ? (empReqSelect = empReqSelect["filter"](
                  (_0x590c2a) => _0x590c2a[_0x11f5b1(0x112)] !== _0x73b7db
                ))
              : !empReqSelect[_0x11f5b1(0xae)](
                  (_0x92034c) => _0x92034c[_0x11f5b1(0x112)] === _0x73b7db
                ) && empReqSelect[_0x11f5b1(0x127)]({ input: _0x73b7db }),
            empReqSelect["length"] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x55d879(0xae)](_0x55d879(0x168))
        [_0x55d879(0x142)](function (_0xa22435) {
          const _0x2c9898 = _0x55d879;
          $(this)[_0x2c9898(0xd8)]() !== ""
            ? (empReqTextarea = empReqTextarea[_0x2c9898(0x11a)](
                (_0x2cfd1d) => _0x2cfd1d["input"] !== _0xa22435
              ))
            : !empReqTextarea["find"](
                (_0x1efae2) => _0x1efae2[_0x2c9898(0x112)] === _0xa22435
              ) && empReqTextarea["push"]({ input: _0xa22435 }),
            empReqTextarea[_0x2c9898(0xbd)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x55d879(0x170))
        [_0x55d879(0x142)](function () {
          const _0x1b09db = _0x55d879;
          $(this)[_0x1b09db(0xd8)]() !== ""
            ? validateEmail(
                $(this)[_0x1b09db(0xd8)](),
                $(this)[_0x1b09db(0xca)](_0x1b09db(0xe0))
              )
            : (emailFilled = ![]);
        });
  else {
    if ($(steps[x])["data"](_0x55d879(0x14e)))
      (answer = $(steps[x])
        ["find"](_0x55d879(0x119))
        [_0x55d879(0xca)](_0x55d879(0xed))),
        (selections = selections["filter"](
          (_0x11e4a2) => _0x11e4a2[_0x55d879(0xf9)] !== x
        )),
        selections["push"]({ step: x, selected: answer });
    else
      $(steps[x])
        [_0x55d879(0xae)](_0x55d879(0x14c))
        ["data"](_0x55d879(0x14e)) &&
        ((answer = $(steps[x])
          ["find"]("[data-answer]:visible")
          [_0x55d879(0xca)](_0x55d879(0xed))),
        (selections = selections[_0x55d879(0x11a)](
          (_0x137be3) => _0x137be3[_0x55d879(0xf9)] !== x
        )),
        selections[_0x55d879(0x127)]({ step: x, selected: answer }));
    $(steps[x])
      [_0x55d879(0xae)](_0x55d879(0x14c))
      ["find"](_0x55d879(0x115))
      ["is"]("[type=\x22checkbox\x22]") &&
      (_0x163bc5 === "*" ||
      _0x163bc5 > $(steps[x])[_0x55d879(0xae)](_0x55d879(0xd9))["length"]
        ? $(steps[x])
            [_0x55d879(0xae)](":input[type=\x22checkbox\x22]")
            [_0x55d879(0x142)](function () {
              const _0x475e20 = _0x55d879;
              $(this)["is"](":checked")
                ? $(steps[x])[_0x475e20(0xae)](_0x475e20(0xab))[
                    _0x475e20(0xbd)
                  ] < 0x1 &&
                  ($(this)
                    [_0x475e20(0x129)](_0x475e20(0x119))
                    ["attr"]("data-go-to") &&
                    ((answer = $(this)
                      ["parents"](_0x475e20(0x119))
                      [_0x475e20(0x15c)](_0x475e20(0x16c))),
                    (selections = selections[_0x475e20(0x11a)](
                      (_0x2905d5) => _0x2905d5[_0x475e20(0xf9)] !== x
                    )),
                    selections[_0x475e20(0x127)]({
                      step: x,
                      selected: answer,
                    })),
                  (checkboxFilled = !![]))
                : (checkboxFilled = ![]);
            })
        : $(steps[x])
            [_0x55d879(0xae)](_0x55d879(0x14c))
            [_0x55d879(0xae)](_0x55d879(0xf6))[_0x55d879(0xbd)] >= _0x163bc5
        ? ($(steps[x])
            [_0x55d879(0xae)](_0x55d879(0x14c))
            [_0x55d879(0xae)](":input[type=\x22checkbox\x22]:checked")
            [_0x55d879(0x129)](_0x55d879(0x119))
            [_0x55d879(0x15c)](_0x55d879(0x16c)) &&
            ((answer = $(steps[x])
              [_0x55d879(0xae)](_0x55d879(0x14c))
              [_0x55d879(0xae)](_0x55d879(0xf6))
              [_0x55d879(0x129)](_0x55d879(0x119))
              [_0x55d879(0x15c)](_0x55d879(0x16c))),
            (selections = selections[_0x55d879(0x11a)](
              (_0x539dde) => _0x539dde[_0x55d879(0xf9)] !== x
            )),
            selections[_0x55d879(0x127)]({ step: x, selected: answer })),
          (selections = selections[_0x55d879(0x11a)](
            (_0xb77978) => _0xb77978["step"] !== x
          )),
          selections["push"]({ step: x, selected: answer }),
          (checkboxFilled = !![]))
        : (checkboxFilled = ![])),
      $(steps[x])
        ["find"](_0x55d879(0x14c))
        [_0x55d879(0xae)](":input[required]")
        ["is"](_0x55d879(0x16d))
        ? $(steps[x])
            [_0x55d879(0xae)](_0x55d879(0x14c))
            [_0x55d879(0xae)](_0x55d879(0x13f))
            ["is"](":checked")
          ? (radioFilled = !![])
          : (radioFilled = ![])
        : (radioFilled = !![]),
      $(steps[x])
        [_0x55d879(0xae)]("[data-answer]:visible")
        [_0x55d879(0xae)](":input[type=\x22text\x22][required]")
        [_0x55d879(0x142)](function (_0x44681f) {
          const _0x476e55 = _0x55d879;
          $(this)[_0x476e55(0xd8)]() !== ""
            ? (empReqInput = empReqInput[_0x476e55(0x11a)](
                (_0x47596a) => _0x47596a["input"] !== _0x44681f
              ))
            : !empReqInput[_0x476e55(0xae)](
                (_0x4f74bc) => _0x4f74bc[_0x476e55(0x112)] === _0x44681f
              ) && empReqInput["push"]({ input: _0x44681f }),
            empReqInput[_0x476e55(0xbd)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x55d879(0xae)]("[data-answer]:visible")
        [_0x55d879(0xae)](_0x55d879(0x12c))
        [_0x55d879(0x142)](function (_0x21249e) {
          const _0x34d8bb = _0x55d879;
          (skipTo = undefined),
            $(this)
              [_0x34d8bb(0x129)](_0x34d8bb(0xfd))
              ["data"](_0x34d8bb(0xf2)) !== "" &&
              (skipTo = $(this)
                [_0x34d8bb(0x129)](_0x34d8bb(0xfd))
                ["data"]("skip-to")),
            $(this)
              ["parents"](_0x34d8bb(0x119))
              [_0x34d8bb(0x15c)](_0x34d8bb(0x16c)) &&
              ((answer = $(this)
                [_0x34d8bb(0x129)]("[data-go-to]")
                [_0x34d8bb(0x15c)]("data-go-to")),
              (selections = selections[_0x34d8bb(0x11a)](
                (_0x16aa39) => _0x16aa39[_0x34d8bb(0xf9)] !== x
              )),
              selections[_0x34d8bb(0x127)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x34d8bb(0x127)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x3c80af) => _0x3c80af["step"] === x
                )),
                (selections[objIndex][_0x34d8bb(0x134)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x34d8bb(0xf1)] = x)));
        }),
      $(steps[x])
        [_0x55d879(0xae)](_0x55d879(0x14c))
        [_0x55d879(0xae)](_0x55d879(0xd6))
        [_0x55d879(0x142)](function (_0x4a4335) {
          const _0x22b0d5 = _0x55d879;
          $(this)[_0x22b0d5(0xd8)]() !== ""
            ? (empReqNum = empReqNum[_0x22b0d5(0x11a)](
                (_0x5c4695) => _0x5c4695["input"] !== _0x4a4335
              ))
            : !empReqNum[_0x22b0d5(0xae)](
                (_0x499283) => _0x499283[_0x22b0d5(0x112)] === _0x4a4335
              ) && empReqNum["push"]({ input: _0x4a4335 }),
            empReqNum[_0x22b0d5(0xbd)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x55d879(0x14c))
        ["find"](_0x55d879(0x154))
        ["each"](function (_0x4e3bfe) {
          const _0x438522 = _0x55d879;
          (skipTo = undefined),
            $(this)
              [_0x438522(0x129)](_0x438522(0xfd))
              [_0x438522(0xca)](_0x438522(0xf2)) !== "" &&
              (skipTo = $(this)
                [_0x438522(0x129)](_0x438522(0xfd))
                ["data"]("skip-to")),
            $(this)
              ["parents"]("[data-go-to]")
              [_0x438522(0x15c)]("data-go-to") &&
              ((answer = $(this)
                [_0x438522(0x129)](_0x438522(0x119))
                [_0x438522(0x15c)]("data-go-to")),
              (selections = selections[_0x438522(0x11a)](
                (_0x980711) => _0x980711[_0x438522(0xf9)] !== x
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x438522(0x127)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x438522(0x143)](
                  (_0x560192) => _0x560192["step"] === x
                )),
                (selections[objIndex][_0x438522(0x134)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x438522(0xf1)] = x)));
        }),
      $(steps[x])
        [_0x55d879(0xae)]("[data-answer]:visible")
        [_0x55d879(0xae)](_0x55d879(0x155))
        [_0x55d879(0x142)](function (_0x122d25) {
          const _0x5247eb = _0x55d879;
          $(this)["val"]() !== ""
            ? (empReqTel = empReqTel[_0x5247eb(0x11a)](
                (_0x1a20c3) => _0x1a20c3["input"] !== _0x122d25
              ))
            : !empReqTel[_0x5247eb(0xae)](
                (_0x40f1e8) => _0x40f1e8[_0x5247eb(0x112)] === _0x122d25
              ) && empReqTel[_0x5247eb(0x127)]({ input: _0x122d25 }),
            empReqTel[_0x5247eb(0xbd)] === 0x0
              ? (telFilled = !![])
              : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x55d879(0xae)](_0x55d879(0x14c))
        [_0x55d879(0xae)](_0x55d879(0xc3))
        [_0x55d879(0x142)](function (_0x5700f2) {
          const _0x2e4127 = _0x55d879;
          (skipTo = undefined),
            $(this)
              [_0x2e4127(0x129)](_0x2e4127(0xfd))
              [_0x2e4127(0xca)](_0x2e4127(0xf2)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0x2e4127(0xfd))
                ["data"](_0x2e4127(0xf2))),
            $(this)
              [_0x2e4127(0x129)]("[data-go-to]")
              [_0x2e4127(0x15c)](_0x2e4127(0x16c)) &&
              ((answer = $(this)
                [_0x2e4127(0x129)](_0x2e4127(0x119))
                ["attr"](_0x2e4127(0x16c))),
              (selections = selections[_0x2e4127(0x11a)](
                (_0x6343a3) => _0x6343a3[_0x2e4127(0xf9)] !== x
              )),
              selections[_0x2e4127(0x127)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x2e4127(0x127)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x2e4127(0x143)](
                  (_0xe751c4) => _0xe751c4[_0x2e4127(0xf9)] === x
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x2e4127(0xf1)] = x)));
        }),
      $(steps[x])
        [_0x55d879(0xae)]("[data-answer]:visible")
        [_0x55d879(0xae)](_0x55d879(0x10a))
        [_0x55d879(0x142)](function (_0x252fed) {
          const _0x38db0a = _0x55d879;
          $(this)[_0x38db0a(0xd8)]() !== ""
            ? (empReqfile = empReqfile[_0x38db0a(0x11a)](
                (_0x393da1) => _0x393da1[_0x38db0a(0x112)] !== _0x252fed
              ))
            : !empReqfile[_0x38db0a(0xae)](
                (_0xa74f25) => _0xa74f25[_0x38db0a(0x112)] === _0x252fed
              ) && empReqfile[_0x38db0a(0x127)]({ input: _0x252fed }),
            empReqfile[_0x38db0a(0xbd)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x55d879(0xae)](_0x55d879(0x14c))
        [_0x55d879(0xae)](_0x55d879(0x110))
        ["each"](function (_0x4f66e0) {
          const _0x53303e = _0x55d879;
          (skipTo = undefined),
            $(this)
              ["parents"](_0x53303e(0xfd))
              [_0x53303e(0xca)](_0x53303e(0xf2)) !== "" &&
              (skipTo = $(this)
                [_0x53303e(0x129)](_0x53303e(0xfd))
                [_0x53303e(0xca)](_0x53303e(0xf2))),
            $(this)
              [_0x53303e(0x129)]("[data-go-to]")
              [_0x53303e(0x15c)](_0x53303e(0x16c)) &&
              ((answer = $(this)
                [_0x53303e(0x129)](_0x53303e(0x119))
                ["attr"](_0x53303e(0x16c))),
              (selections = selections["filter"](
                (_0x670f45) => _0x670f45[_0x53303e(0xf9)] !== x
              )),
              selections[_0x53303e(0x127)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x53303e(0x127)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x53303e(0x143)](
                  (_0x39d544) => _0x39d544[_0x53303e(0xf9)] === x
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x53303e(0xf1)] = x)));
        }),
      $(steps[x])
        [_0x55d879(0xae)](_0x55d879(0x14c))
        [_0x55d879(0xae)](_0x55d879(0x15e))
        [_0x55d879(0x142)](function (_0x22f057) {
          const _0x3e7ab8 = _0x55d879;
          $(this)[_0x3e7ab8(0xd8)]() !== ""
            ? (empReqSelect = empReqSelect[_0x3e7ab8(0x11a)](
                (_0x5bebe4) => _0x5bebe4["input"] !== _0x22f057
              ))
            : !empReqSelect[_0x3e7ab8(0xae)](
                (_0xde90ff) => _0xde90ff[_0x3e7ab8(0x112)] === _0x22f057
              ) && empReqSelect[_0x3e7ab8(0x127)]({ input: _0x22f057 }),
            empReqSelect["length"] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x55d879(0xae)]("[data-answer]:visible")
        ["find"]("select")
        [_0x55d879(0x142)](function (_0x32ddaa) {
          const _0x23d39c = _0x55d879;
          (skipTo = undefined),
            $(this)
              [_0x23d39c(0x129)]("[data-skip-to]")
              [_0x23d39c(0xca)](_0x23d39c(0xf2)) !== "" &&
              (skipTo = $(this)
                [_0x23d39c(0x129)](_0x23d39c(0xfd))
                ["data"](_0x23d39c(0xf2))),
            $(this)
              [_0x23d39c(0x129)](_0x23d39c(0x119))
              [_0x23d39c(0x15c)](_0x23d39c(0x16c)) &&
              ((answer = $(this)
                [_0x23d39c(0x129)](_0x23d39c(0x119))
                [_0x23d39c(0x15c)](_0x23d39c(0x16c))),
              (selections = selections[_0x23d39c(0x11a)](
                (_0xf368bf) => _0xf368bf["step"] !== x
              )),
              selections[_0x23d39c(0x127)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x23d39c(0x127)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x23d39c(0x143)](
                  (_0x188ee6) => _0x188ee6[_0x23d39c(0xf9)] === x
                )),
                (selections[objIndex][_0x23d39c(0x134)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x23d39c(0xf1)] = x)));
        }),
      $(steps[x])
        [_0x55d879(0xae)]("[data-answer]:visible")
        [_0x55d879(0xae)](_0x55d879(0x168))
        [_0x55d879(0x142)](function (_0x41f2ea) {
          const _0x4691f3 = _0x55d879;
          $(this)["val"]() !== ""
            ? (empReqTextarea = empReqTextarea[_0x4691f3(0x11a)](
                (_0x4897e5) => _0x4897e5[_0x4691f3(0x112)] !== _0x41f2ea
              ))
            : !empReqTextarea[_0x4691f3(0xae)](
                (_0x3146b3) => _0x3146b3[_0x4691f3(0x112)] === _0x41f2ea
              ) && empReqTextarea["push"]({ input: _0x41f2ea }),
            empReqTextarea[_0x4691f3(0xbd)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x55d879(0xae)](_0x55d879(0x14c))
        [_0x55d879(0xae)](_0x55d879(0x14a))
        [_0x55d879(0x142)](function (_0x87aeb9) {
          const _0x1b38d5 = _0x55d879;
          (skipTo = undefined),
            $(this)
              ["parents"](_0x1b38d5(0xfd))
              [_0x1b38d5(0xca)](_0x1b38d5(0xf2)) !== "" &&
              (skipTo = $(this)["parents"](_0x1b38d5(0xfd))["data"]("skip-to")),
            $(this)
              [_0x1b38d5(0x129)](_0x1b38d5(0x119))
              [_0x1b38d5(0x15c)]("data-go-to") &&
              ((answer = $(this)
                ["parents"]("[data-go-to]")
                ["attr"](_0x1b38d5(0x16c))),
              (selections = selections[_0x1b38d5(0x11a)](
                (_0x1dcef1) => _0x1dcef1[_0x1b38d5(0xf9)] !== x
              )),
              selections[_0x1b38d5(0x127)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x1b38d5(0x127)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x1b38d5(0x143)](
                  (_0x1601ae) => _0x1601ae[_0x1b38d5(0xf9)] === x
                )),
                (selections[objIndex][_0x1b38d5(0x134)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        ["find"](_0x55d879(0x14c))
        ["find"](_0x55d879(0x170))
        [_0x55d879(0x142)](function (_0x468b5e) {
          const _0x7db812 = _0x55d879;
          $(this)[_0x7db812(0xd8)]() !== ""
            ? validateEmail(
                $(this)[_0x7db812(0xd8)](),
                $(this)[_0x7db812(0xca)]("block-domain")
              )
            : (emailFilled = ![]);
        }),
      $(steps[x])
        [_0x55d879(0xae)](_0x55d879(0x14c))
        ["find"](_0x55d879(0xb4))
        [_0x55d879(0x142)](function (_0x4af771) {
          const _0x30488f = _0x55d879;
          (skipTo = undefined),
            $(this)
              [_0x30488f(0x129)](_0x30488f(0xfd))
              [_0x30488f(0xca)](_0x30488f(0xf2)) !== "" &&
              (skipTo = $(this)
                [_0x30488f(0x129)](_0x30488f(0xfd))
                [_0x30488f(0xca)](_0x30488f(0xf2))),
            $(this)
              ["parents"]("[data-go-to]")
              [_0x30488f(0x15c)]("data-go-to") &&
              ((answer = $(this)
                [_0x30488f(0x129)](_0x30488f(0x119))
                [_0x30488f(0x15c)](_0x30488f(0x16c))),
              (selections = selections[_0x30488f(0x11a)](
                (_0x2a6629) => _0x2a6629[_0x30488f(0xf9)] !== x
              )),
              selections[_0x30488f(0x127)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0x30488f(0x143)](
                  (_0x4d68bd) => _0x4d68bd[_0x30488f(0xf9)] === x
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x30488f(0xf1)] = x)));
        });
  }
  $(steps[x])[_0x55d879(0xae)](_0x55d879(0x125))["is"](_0x55d879(0xa8)) &&
    ((selArr = []),
    $(steps)
      [_0x55d879(0xae)](_0x55d879(0xb7))
      [_0x55d879(0x142)](function (_0x996800, _0x19ecbf) {
        const _0x154b25 = _0x55d879;
        selArr[_0x154b25(0x127)]({
          selected: $(this)[_0x154b25(0xca)](_0x154b25(0x10d)),
        });
      }),
    (selString = []),
    selArr[_0x55d879(0xc7)]((_0x53637c) =>
      selString[_0x55d879(0x127)](_0x53637c[_0x55d879(0x10d)])
    ),
    (selections = selections[_0x55d879(0x11a)](
      (_0x1a7722) => _0x1a7722[_0x55d879(0xf9)] !== x
    )),
    $(steps[x])
      [_0x55d879(0xae)]("[data-answer]:visible")
      [_0x55d879(0xae)](_0x55d879(0xf3))
      [_0x55d879(0x142)](function () {
        const _0x599116 = _0x55d879;
        skipTo = undefined;
        if (
          $(this)["parents"](_0x599116(0xfd))[_0x599116(0xca)](_0x599116(0xf2))
        )
          skipTo = $(this)
            [_0x599116(0x129)](_0x599116(0xfd))
            [_0x599116(0xca)](_0x599116(0xf2));
        else
          $(this)[_0x599116(0xca)](_0x599116(0xf2)) &&
            (skipTo = $(this)[_0x599116(0xca)]("skip-to"));
        if ($(this)["data"](_0x599116(0xed)))
          (answer = $(this)["attr"](_0x599116(0x16c))),
            selections[_0x599116(0x127)]({ step: x, selected: answer }),
            console[_0x599116(0x100)](skipTo),
            skipTo &&
              (selections["push"]({ step: skipTo - 0x2, selected: answer }),
              (objIndex = selections[_0x599116(0x143)](
                (_0xa50b31) => _0xa50b31[_0x599116(0xf9)] === x
              )),
              (selections[objIndex][_0x599116(0x134)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x599116(0xf1)] = x));
        else
          $(this)[_0x599116(0x129)]("[data-go-to]")["data"]("go-to") &&
            ((answer = $(this)
              [_0x599116(0x129)](_0x599116(0x119))
              [_0x599116(0xca)](_0x599116(0xed))),
            selections["push"]({ step: x, selected: answer }),
            console[_0x599116(0x100)](skipTo),
            skipTo &&
              (selections[_0x599116(0x127)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections["findIndex"](
                (_0x36f7cc) => _0x36f7cc[_0x599116(0xf9)] === x
              )),
              (selections[objIndex][_0x599116(0x134)] = parseInt(skipTo) - 0x1),
              (selections[objIndex]["backTo"] = x)));
      }),
    logicExtra
      ? ($(steps[x])
          [_0x55d879(0xae)](_0x55d879(0x14c))
          [_0x55d879(0xae)](_0x55d879(0xb6))
          [_0x55d879(0xca)]("radio-skip") === !![] ||
          $(steps[x])
            [_0x55d879(0xae)]("[data-answer][data-radio-skip]:visible")
            [_0x55d879(0xca)](_0x55d879(0xee)) === !![]) &&
        !back &&
        selections[_0x55d879(0x11a)](
          (_0xadbd82) => _0xadbd82[_0x55d879(0xf9)] === x
        )[_0x55d879(0xbd)] > 0x0 &&
        (console[_0x55d879(0x100)](_0x55d879(0xc5)),
        textareaLength === 0x0 &&
          textInputLength === 0x0 &&
          emailInputLength === 0x0 &&
          checkboxInputLength === 0x0 &&
          setTimeout(function () {
            (next = !![]), nextStep(), selectionQuiz();
          }, $(steps[x])
            [_0x55d879(0xae)](_0x55d879(0xd3))
            [_0x55d879(0xca)](_0x55d879(0x109))))
      : $(steps[x])
          [_0x55d879(0xae)](_0x55d879(0xb6))
          [_0x55d879(0xca)]("radio-skip") === !![] &&
        textareaLength === 0x0 &&
        textInputLength === 0x0 &&
        emailInputLength === 0x0 &&
        checkboxInputLength === 0x0 &&
        setTimeout(function () {
          (next = !![]), nextStep(), selectionQuiz();
        }, $(steps[x])
          [_0x55d879(0xae)](_0x55d879(0xd3))
          [_0x55d879(0xca)]("radio-delay")),
    console["log"](selections)),
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
  const _0x887cb7 = _0xba1d8c;
  x++,
    x > progress && (progress = x),
    x <= steps["length"] - 0x1 &&
      (updateStep(),
      memory && saveFilledInput(),
      $("[data-text=\x22current-step\x22]")[_0x887cb7(0x12e)](
        $(steps[x])[_0x887cb7(0xca)](_0x887cb7(0x14e))
          ? (curStep = x + 0x0)
          : (curStep = x + 0x1)
      ));
}
function backStep() {
  const _0xfddc96 = _0xba1d8c;
  x > 0x0 &&
    ($(progressbar[x])[_0xfddc96(0x16f)]("current"),
    selections[_0xfddc96(0x11a)](
      (_0x380423) => _0x380423[_0xfddc96(0x134)] === x
    )[_0xfddc96(0xbd)] > 0x0
      ? (x = parseInt(
          getSafe(
            () =>
              selections[_0xfddc96(0x11a)](
                (_0x4e30f0) => _0x4e30f0[_0xfddc96(0x134)] === x
              )[0x0][_0xfddc96(0xf1)]
          )
        ))
      : x--,
    updateStep()),
    $("[data-text=\x22current-step\x22]")[_0xfddc96(0x12e)](
      (curStep = x + 0x1)
    );
}
$(_0xba1d8c(0xb5))["on"](_0xba1d8c(0x126), function (_0x505203) {
  const _0x29695a = _0xba1d8c;
  _0x505203[_0x29695a(0x10c)] === 0xd &&
    fill &&
    ($(_0x29695a(0xba))[_0x29695a(0xca)](_0x29695a(0x136))
      ? ($(_0x29695a(0x147))[0x0]["click"](),
        _0x505203[_0x29695a(0xd5)](),
        _0x505203[_0x29695a(0x12d)]())
      : (_0x505203["preventDefault"](), _0x505203[_0x29695a(0x12d)]()));
}),
  $(_0xba1d8c(0xb5))[_0xba1d8c(0xd0)](function (_0x5194b6) {
    const _0x5a0bb4 = _0xba1d8c;
    (_0x5194b6[_0x5a0bb4(0xa9)] || _0x5194b6[_0x5a0bb4(0x103)]) &&
      _0x5194b6[_0x5a0bb4(0x10c)] == 0xd &&
      (x >= steps[_0x5a0bb4(0xbd)] - 0x1 && fill
        ? $(_0x5a0bb4(0xc6))[_0x5a0bb4(0xce)]()
        : (event["preventDefault"](), event[_0x5a0bb4(0x12d)]()));
  });
function _0x3a85() {
  const _0x430ea5 = [
    "focus",
    "input",
    "redirect",
    "siblings",
    ":input",
    ".w-radio-input",
    ":radio",
    "[data-query-param]",
    "[data-go-to]",
    "filter",
    "href",
    "novalidate",
    "status",
    "[data-cms-select=cms]",
    "none",
    "key",
    "[data-cms-select=text]",
    "[data-success-card=\x22",
    "[type=\x22submit\x22]",
    "data-radio-delay",
    ":input[type=\x22radio\x22]",
    "keypress",
    "push",
    "inputName",
    "parents",
    "debug\x20mode",
    "[data-form=\x22next-btn\x22][type=\x22submit\x22]",
    ":input[type=\x22text\x22]",
    "stopPropagation",
    "text",
    "0.4",
    "input:checkbox",
    "Enter",
    "[data-form=\x22back-btn\x22]",
    "input:radio[required]",
    "skipTo",
    "ajaxComplete",
    "enter",
    "Please\x20wait...",
    "show",
    "3fUNxWj",
    "<br>Data\x20Answer\x20=\x20",
    "query-param",
    "current",
    "Webflow",
    "[data-reinit]",
    ":input[type=\x22radio\x22][required]",
    "nonvalidated",
    "1373680ufIjBN",
    "each",
    "findIndex",
    "includes",
    "[data-selection=\x22other\x22]",
    "location",
    "[data-form=\x22next-btn\x22]",
    "[data-answer]",
    "[data-text=\x22total-steps\x22]",
    "textarea",
    "9NXTqGP",
    "[data-answer]:visible",
    ".w-form-done",
    "card",
    "prop",
    "[data-cms-select=input]",
    "[data-form=\x22multistep\x22]",
    "653041JZVyvU",
    "answer",
    ":input[type=\x22number\x22]",
    ":input[type=\x22tel\x22][required]",
    "input[type=\x22submit\x22]",
    "[data-btn=\x22check\x22]",
    "select[required]:visible",
    "selection",
    "form[data-form=\x22multistep\x22]\x20:input",
    "[data-selection=\x22",
    "attr",
    "clickable",
    "select[required]",
    "quiz",
    "940886NTrcBt",
    "reset",
    "url",
    "[data-text=\x22current-step\x22]",
    "submit-show",
    "[data-form=\x22custom-progress-indicator\x22]",
    "select[name=\x22",
    "radio",
    "textarea[required]",
    "630414fbgRXo",
    "required",
    "not",
    "data-go-to",
    "[type=\x22radio\x22]",
    "append",
    "removeClass",
    ":input[type=\x22email\x22][required]",
    ":checked",
    "metaKey",
    "25AzeyPv",
    ":input[required]",
    "split",
    "button",
    "find",
    "searchParams",
    "textarea[required]:visible",
    "filledInput",
    "removeItem",
    "debug-mode",
    ":input[type=\x22email\x22]",
    "body",
    "[data-radio-skip]:visible",
    "[data-selected]:checked",
    "[data-clickable]",
    "[data-memory]",
    "[data-enter]",
    "textarea[autofocus]",
    "[type=\x22checkbox\x22]",
    "length",
    "<option>",
    "delete",
    "fadeIn",
    "[data-form=\x22progress-indicator\x22]",
    "[data-form=\x22next-btn\x22][data-submit-show]",
    ":input[type=\x22tel\x22]",
    "auto",
    "radio\x20skip\x20true",
    "[data-form=\x22submit-btn\x22]",
    "forEach",
    "disabled",
    "input[name=\x22",
    "data",
    "setItem",
    "parse",
    "type",
    "click",
    ".w-checkbox-input",
    "keydown",
    "addClass",
    "5126261zODppl",
    "[data-radio-delay]",
    "submit",
    "preventDefault",
    ":input[type=\x22number\x22][required]",
    "wait",
    "val",
    ":input[type=\x22checkbox\x22]",
    "init",
    "value",
    "redirect-form-hehexd",
    "2097088nFhRrc",
    "shiftKey",
    "memory",
    "block-domain",
    "checkbox",
    "input[type=\x22text\x22][required]:visible",
    "w--redirected-checked",
    "some",
    "[data-success-card]",
    "\x22][value=\x22",
    "multistep-redirect",
    "[data-form=\x22progress\x22]",
    "css",
    "[data-answer=\x22",
    "remove",
    "[data-btn=\x22reset\x22]",
    "go-to",
    "radio-skip",
    "ix2",
    ":input[type=\x22text\x22][required]",
    "backTo",
    "skip-to",
    ":input[type=\x27radio\x27]:checked",
    "hide",
    "input[type=\x22radio\x22]",
    ":input[type=\x22checkbox\x22]:checked",
    "test",
    "[data-form=\x22step\x22]",
    "step",
    "clone",
    "option[value=\x22",
    "7071730GLwKPY",
    "[data-skip-to]",
    "textarea[name=\x22",
    "history",
    "log",
    "reinit",
    "input[type=\x22email\x22]:visible",
    "ctrlKey",
    "checked",
    "index",
    "trigger",
    "clickable-all",
    "name",
    "radio-delay",
    ":input[type=\x22file\x22][required]",
    "<br>Data\x20Go\x20To\x20=\x20",
    "keyCode",
    "selected",
    "replaceState",
    "destroy",
    ":input[type=\x22file\x22]",
  ];
  _0x3a85 = function () {
    return _0x430ea5;
  };
  return _0x3a85();
}
function selectionQuiz() {
  const _0x17a80f = _0xba1d8c;
  $(this)["find"](_0x17a80f(0x157)) &&
    ($("[data-selection]")[_0x17a80f(0xf4)](),
    $(_0x17a80f(0x15b) + selString + "\x22]")["data"](_0x17a80f(0x159))
      ? $(_0x17a80f(0x15b) + selString + "\x22]")[_0x17a80f(0xc0)]()
      : $(_0x17a80f(0x145))[_0x17a80f(0xc0)]());
}
$(_0xba1d8c(0x147))["on"](_0xba1d8c(0xce), function () {
  scrollTop(), (next = !![]), (back = ![]), nextStep(), selectionQuiz();
}),
  $(_0xba1d8c(0x132))["on"](_0xba1d8c(0xce), function () {
    const _0x11a17c = _0xba1d8c;
    scrollTop(),
      (next = ![]),
      (back = !![]),
      back && $(_0x11a17c(0xf5))[_0x11a17c(0x14f)](_0x11a17c(0x104), ![]),
      backStep(),
      (back = ![]);
  }),
  $(steps)
    [_0xba1d8c(0xae)](":input")
    ["on"](_0xba1d8c(0x112), function (_0x3748f5) {
      validation();
    }),
  $(steps)
    [_0xba1d8c(0xae)](_0xba1d8c(0x117))
    ["on"](_0xba1d8c(0xce), validation());
$("[data-clickable-all]")[_0xba1d8c(0xca)](_0xba1d8c(0x107))
  ? $(_0xba1d8c(0x165))["removeClass"]("disabled")
  : $(_0xba1d8c(0x165))[_0xba1d8c(0xd1)](_0xba1d8c(0xc8));
function clickableIndicator() {
  const _0x279e93 = _0xba1d8c;
  $("[data-form=\x22progress-indicator\x22]")[_0x279e93(0x16f)]("current"),
    $(_0x279e93(0xb8))[_0x279e93(0xca)](_0x279e93(0x15d)) &&
      ($(_0x279e93(0xb8))[_0x279e93(0xca)]("clickable-all")
        ? ((x = $(this)[_0x279e93(0x105)]()), updateStep())
        : $(this)[_0x279e93(0x105)]() <= progress &&
          ((x = $(this)["index"]()), updateStep()));
}
$("[data-form=\x22custom-progress-indicator\x22]")["on"](
  "click",
  clickableIndicator
);
$(_0xba1d8c(0x151))["data"](_0xba1d8c(0xb3)) &&
  (console[_0xba1d8c(0x100)](_0xba1d8c(0x12a)),
  $(_0xba1d8c(0x119))["each"](function () {
    const _0x1351cd = _0xba1d8c;
    $(this)[_0x1351cd(0x16e)](
      _0x1351cd(0x10b),
      $(this)[_0x1351cd(0xca)](_0x1351cd(0xed))
    );
  }),
  $("[data-answer]")[_0xba1d8c(0x142)](function () {
    const _0x33ff56 = _0xba1d8c;
    $(this)[_0x33ff56(0x16e)](
      _0x33ff56(0x13a),
      $(this)["data"](_0x33ff56(0x153))
    );
  }));
$("[data-form=\x22submit-btn\x22]")["on"](
  _0xba1d8c(0xce),
  function (_0x16d1f3) {
    const _0x4d8c1e = _0xba1d8c;
    $(this)["data"](_0x4d8c1e(0x113)) &&
      $(_0x4d8c1e(0x151))[_0x4d8c1e(0x15c)](
        "data-multistep-redirect",
        $(this)["data"](_0x4d8c1e(0x113))
      ),
      (successCard = $(this)[_0x4d8c1e(0xca)]("success")),
      _0x16d1f3[_0x4d8c1e(0xd5)](),
      _0x16d1f3[_0x4d8c1e(0x12d)](),
      logicExtra &&
        ($(this)["prop"](_0x4d8c1e(0x11c), !![]),
        $(steps)["find"](_0x4d8c1e(0x115))["prop"](_0x4d8c1e(0x16a), ![]),
        console[_0x4d8c1e(0x100)](_0x4d8c1e(0x140))),
      $(_0x4d8c1e(0x11e))[_0x4d8c1e(0x142)](function () {
        const _0x239dd9 = _0x4d8c1e,
          _0x30c03c = $(this)[_0x239dd9(0xae)](_0x239dd9(0x121)),
          _0x18d18e = [];
        console[_0x239dd9(0x100)](_0x18d18e),
          _0x30c03c["each"](function () {
            const _0x2fb963 = _0x239dd9;
            _0x18d18e[_0x2fb963(0x127)]($(this)[_0x2fb963(0x12e)]()["trim"]());
          });
        const _0x38b1f2 = $(this)[_0x239dd9(0x114)](_0x239dd9(0x150));
        $[_0x239dd9(0x142)](_0x18d18e, function (_0x7e7b12, _0x569ef5) {
          const _0xbae5b8 = _0x239dd9,
            _0x40169 = $(_0xbae5b8(0xbe))
              [_0xbae5b8(0xd8)](_0x569ef5)
              ["text"](_0x569ef5);
          _0x38b1f2[_0xbae5b8(0x16e)](_0x40169);
        });
      }),
      localStorage["removeItem"]("filledInput"),
      fill &&
        ($(this)[_0x4d8c1e(0xca)]("wait")
          ? $(this)[_0x4d8c1e(0xd8)]($(this)[_0x4d8c1e(0xca)](_0x4d8c1e(0xd7)))
          : ($(this)["val"](_0x4d8c1e(0x137)),
            $(this)[_0x4d8c1e(0x12e)]("Please\x20wait...")),
        $(_0x4d8c1e(0x151))[_0x4d8c1e(0xd4)]());
  }
),
  $(document)[_0xba1d8c(0x135)](function (_0x1c9407, _0x5503e4, _0x1c4e95) {
    const _0x4c3411 = _0xba1d8c;
    if (
      _0x1c4e95[_0x4c3411(0x162)]["includes"](
        "https://webflow.com/api/v1/form/"
      )
    ) {
      const _0x4be284 = _0x5503e4[_0x4c3411(0x11d)] === 0xc8,
        _0x2e9ce8 = _0x4c3411(0xdc),
        _0x735d82 = $(this)["data"](_0x4c3411(0xe7));
      console["log"](_0x4be284),
        console[_0x4c3411(0x100)](_0x735d82),
        _0x735d82 && _0x4be284 && (window[_0x4c3411(0x146)] = _0x735d82),
        _0x4be284 &&
          successCard !== "" &&
          $(_0x4c3411(0x122) + successCard + "\x22]")["fadeIn"](),
        _0x4be284 &&
          formReset &&
          setTimeout(() => {
            const _0x318d47 = _0x4c3411;
            $(_0x318d47(0x151))[_0x318d47(0x106)]("reset"),
              $("[data-form=\x22multistep\x22]")
                ["parents"]()
                ["find"](".w-form-done")
                [_0x318d47(0xf4)](),
              (x = 0x0),
              updateStep(),
              $(_0x318d47(0x151))[_0x318d47(0x138)](),
              $("[data-form=\x22submit-btn\x22]")[_0x318d47(0x12e)](
                oldSubmitText
              ),
              $(_0x318d47(0xc6))[_0x318d47(0xd8)](oldSubmitText),
              $(_0x318d47(0x163))[_0x318d47(0x12e)](0x1),
              $("[data-form=\x22multistep\x22]")
                [_0x318d47(0xae)](_0x318d47(0x130))
                [_0x318d47(0x114)](_0x318d47(0xcf))
                [_0x318d47(0x16f)](_0x318d47(0xe3));
          }, 0x1f4);
    }
  }),
  $(_0xba1d8c(0xec))["on"](_0xba1d8c(0xce), function () {
    const _0x526d98 = _0xba1d8c;
    $("[data-form=\x22multistep\x22]")["trigger"](_0x526d98(0x161));
    let _0x19dac0 = $(this);
    $(this)[_0x526d98(0x12e)](_0x526d98(0x137)),
      setTimeout(function () {
        const _0x4c5462 = _0x526d98;
        $(_0x19dac0)[_0x4c5462(0x12e)](oldResetText),
          $(_0x19dac0)[_0x4c5462(0x129)](_0x4c5462(0x14d))[_0x4c5462(0xf4)](),
          (x = 0x0),
          updateStep(),
          $(_0x4c5462(0x151))[_0x4c5462(0x138)](),
          $(_0x4c5462(0xc6))[_0x4c5462(0x12e)](oldSubmitText),
          $("[data-form=\x22submit-btn\x22]")[_0x4c5462(0xd8)](oldSubmitText),
          $(_0x19dac0)[_0x4c5462(0xd8)](oldSubmitText),
          $(_0x4c5462(0x163))["text"](0x1),
          $(_0x4c5462(0x151))
            [_0x4c5462(0xae)](_0x4c5462(0x130))
            ["siblings"](_0x4c5462(0xcf))
            [_0x4c5462(0x16f)](_0x4c5462(0xe3));
      }, 0x3e8);
  }),
  steps[_0xba1d8c(0x142)](function () {
    const _0x5d43bb = _0xba1d8c;
    $(_0x5d43bb(0xe8))[_0x5d43bb(0x16e)](
      progressbarClone[_0x5d43bb(0xfa)](!![], !![])
    );
  }),
  (progressbar = $(_0xba1d8c(0xe8))["children"]()),
  $(_0xba1d8c(0xc1))["on"](_0xba1d8c(0xce), clickableIndicator),
  updateStep(),
  $("textarea")["keypress"](function (_0x292649) {
    const _0x196a0f = _0xba1d8c;
    $(this)[_0x196a0f(0x111)](),
      _0x292649[_0x196a0f(0x120)] == _0x196a0f(0x131) &&
        (_0x292649[_0x196a0f(0xd5)](), _0x292649[_0x196a0f(0x12d)]()),
      _0x292649[_0x196a0f(0xde)] &&
        _0x292649[_0x196a0f(0x120)] == _0x196a0f(0x131) &&
        $(this)["val"]($(this)[_0x196a0f(0xd8)]() + "\x0a");
  });
