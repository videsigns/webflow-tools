//13-4-23 update

const _0x59c807 = _0x1c50;
(function (_0xf487c7, _0x2fb085) {
  const _0x159a46 = _0x1c50,
    _0x34c79a = _0xf487c7();
  while (!![]) {
    try {
      const _0x3ad63a =
        (parseInt(_0x159a46(0x20a)) / 0x1) *
          (parseInt(_0x159a46(0x193)) / 0x2) +
        parseInt(_0x159a46(0x195)) / 0x3 +
        (parseInt(_0x159a46(0x17e)) / 0x4) *
          (-parseInt(_0x159a46(0x1d7)) / 0x5) +
        -parseInt(_0x159a46(0x1dd)) / 0x6 +
        -parseInt(_0x159a46(0x219)) / 0x7 +
        (-parseInt(_0x159a46(0x17d)) / 0x8) *
          (-parseInt(_0x159a46(0x1f3)) / 0x9) +
        (-parseInt(_0x159a46(0x18b)) / 0xa) *
          (-parseInt(_0x159a46(0x21a)) / 0xb);
      if (_0x3ad63a === _0x2fb085) break;
      else _0x34c79a["push"](_0x34c79a["shift"]());
    } catch (_0x28d260) {
      _0x34c79a["push"](_0x34c79a["shift"]());
    }
  }
})(_0x5a84, 0xd76c0);
let x = 0x0,
  curStep = 0x0,
  steps = $(_0x59c807(0x157)),
  progressbarClone = $(_0x59c807(0x216))[_0x59c807(0x155)](),
  progressbar,
  countCard = !![],
  selectMultiple = $(_0x59c807(0x1a6))[_0x59c807(0x21b)](_0x59c807(0x21d)),
  customError = $(_0x59c807(0x194))["data"]("custom-error-message"),
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
  reinitIX = $(_0x59c807(0x169))[_0x59c807(0x21b)](_0x59c807(0x1ed)),
  textareaLength = 0x0,
  textInputLength = 0x0,
  emailInputLength = 0x0,
  selectInputLength = 0x0,
  checkboxInputLength = 0x0,
  filledInput = [],
  savedFilledInput = JSON[_0x59c807(0x188)](
    localStorage[_0x59c807(0x1a7)](_0x59c807(0x177))
  ),
  memory = $(_0x59c807(0x150))[_0x59c807(0x21b)]("memory"),
  quiz = $(_0x59c807(0x1b3))[_0x59c807(0x21b)](_0x59c807(0x1e4)),
  progress = 0x0;
const urlFormly = new URL(window[_0x59c807(0x1e2)]["href"]);
let params = $(_0x59c807(0x1ac))[_0x59c807(0x21b)](_0x59c807(0x1a8)),
  skipTo = 0x0,
  next = ![],
  back = ![],
  selArr = [],
  selString = [],
  emptyInput = 0x0,
  searchQ = [],
  domainAllowed = !![],
  dom = [],
  logicExtra = $(_0x59c807(0x1fd))[_0x59c807(0x21b)](_0x59c807(0x17f)),
  oldSubmitText = $(_0x59c807(0x156))["val"](),
  oldResetText = $(_0x59c807(0x1ce))[_0x59c807(0x1e7)](),
  formReset = $(_0x59c807(0x1fd))[_0x59c807(0x21b)]("reset"),
  successCard = "";
$(_0x59c807(0x201))[_0x59c807(0x1d2)] > 0x0 &&
  (countCard = $(_0x59c807(0x201))[_0x59c807(0x21b)]("count-card"));
$(progressbarClone)[_0x59c807(0x21f)](_0x59c807(0x1bb)),
  $(_0x59c807(0x1c3))[_0x59c807(0x1b6)]()[_0x59c807(0x19a)](),
  $(_0x59c807(0x156))["hide"](),
  steps[_0x59c807(0x18c)](function () {
    const _0x54f44c = _0x59c807;
    $("[data-form=\x22progress\x22]")[_0x54f44c(0x184)](
      progressbarClone[_0x54f44c(0x155)](!![], !![])
    );
  });
countCard
  ? ((curStep = curStep + 0x1),
    $(_0x59c807(0x1bf))[_0x59c807(0x1e7)](steps[_0x59c807(0x1d2)]))
  : ($(steps[x])[_0x59c807(0x21b)](_0x59c807(0x14c))
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    $(_0x59c807(0x1bf))[_0x59c807(0x1e7)]($(_0x59c807(0x176))["length"]),
    $(_0x59c807(0x1bd))[_0x59c807(0x18c)](function () {
      const _0x253d1c = _0x59c807;
      $($(_0x253d1c(0x216))[$(this)["index"]()])[_0x253d1c(0x207)]();
    }));
function _0x1c50(_0x42b9d7, _0x5e5d8f) {
  const _0x5a842b = _0x5a84();
  return (
    (_0x1c50 = function (_0x1c5037, _0x1445b0) {
      _0x1c5037 = _0x1c5037 - 0x148;
      let _0x51334e = _0x5a842b[_0x1c5037];
      return _0x51334e;
    }),
    _0x1c50(_0x42b9d7, _0x5e5d8f)
  );
}
(progressbar = $(_0x59c807(0x1c3))[_0x59c807(0x1b6)]()),
  $("[data-form=\x22progress-indicator\x22]")["on"](
    _0x59c807(0x15f),
    clickableIndicator
  ),
  $("[data-text=\x22current-step\x22]")[_0x59c807(0x1e7)](curStep),
  steps[_0x59c807(0x207)](),
  $("[data-success-card]")["hide"](),
  $(_0x59c807(0x217))[_0x59c807(0x18c)](function () {
    const _0x20060a = _0x59c807;
    $(this)[_0x20060a(0x1d0)](_0x20060a(0x19c), _0x20060a(0x218));
  });
function getParams() {
  const _0x40cc20 = _0x59c807;
  urlFormly[_0x40cc20(0x1c8)][_0x40cc20(0x200)](function (
    _0x23233e,
    _0x764f59
  ) {
    const _0x3768b4 = _0x40cc20;
    searchQ[_0x3768b4(0x1b2)]({ val: _0x23233e, key: _0x764f59 });
  });
}
function getSafe(_0x22486c, _0x34e0d3) {
  try {
    return _0x22486c();
  } catch (_0x5c86fa) {
    return _0x34e0d3;
  }
}
savedFilledInput &&
  memory &&
  savedFilledInput[_0x59c807(0x200)]((_0x1c67a9) => {
    const _0x5b1df1 = _0x59c807;
    if (
      $(
        _0x5b1df1(0x1e6) +
          _0x1c67a9["inputName"] +
          _0x5b1df1(0x202) +
          _0x1c67a9[_0x5b1df1(0x199)] +
          "\x22]"
      )["attr"]("type") === _0x5b1df1(0x151)
    )
      $(
        _0x5b1df1(0x1e6) +
          _0x1c67a9[_0x5b1df1(0x1dc)] +
          _0x5b1df1(0x202) +
          _0x1c67a9["value"] +
          "\x22]"
      )[_0x5b1df1(0x15f)](),
        $(
          _0x5b1df1(0x1e6) +
            _0x1c67a9["inputName"] +
            _0x5b1df1(0x202) +
            _0x1c67a9[_0x5b1df1(0x199)] +
            "\x22]"
        )
          [_0x5b1df1(0x1aa)](".w-radio-input")
          [_0x5b1df1(0x148)](_0x5b1df1(0x1c1));
    else
      _0x1c67a9[_0x5b1df1(0x199)] === "on"
        ? ($(_0x5b1df1(0x1e6) + _0x1c67a9[_0x5b1df1(0x1dc)] + "\x22]")[
            _0x5b1df1(0x15f)
          ](),
          $(_0x5b1df1(0x1e6) + _0x1c67a9["inputName"] + "\x22]")
            [_0x5b1df1(0x1aa)](_0x5b1df1(0x173))
            ["addClass"]("w--redirected-checked"))
        : ($(_0x5b1df1(0x1e6) + _0x1c67a9[_0x5b1df1(0x1dc)] + "\x22]")[
            _0x5b1df1(0x205)
          ](_0x1c67a9[_0x5b1df1(0x199)]),
          $(_0x5b1df1(0x192) + _0x1c67a9[_0x5b1df1(0x1dc)] + "\x22]")[
            _0x5b1df1(0x205)
          ](_0x1c67a9[_0x5b1df1(0x199)]),
          $("select[name=\x22" + _0x1c67a9[_0x5b1df1(0x1dc)] + "\x22]")
            [_0x5b1df1(0x17b)](
              _0x5b1df1(0x1fe) + _0x1c67a9[_0x5b1df1(0x199)] + "\x22]"
            )
            ["prop"](_0x5b1df1(0x165), !![]));
  });
params &&
  (getParams(),
  searchQ[_0x59c807(0x200)]((_0x1bf3c7) => {
    const _0x3a43bf = _0x59c807;
    console["log"](
      _0x1bf3c7,
      $(_0x3a43bf(0x16e) + _0x1bf3c7[_0x3a43bf(0x205)] + "\x22]")["attr"](
        "type"
      )
    );
    if (
      $(
        _0x3a43bf(0x1e6) +
          _0x1bf3c7[_0x3a43bf(0x1eb)] +
          _0x3a43bf(0x202) +
          _0x1bf3c7[_0x3a43bf(0x205)] +
          "\x22]"
      )[_0x3a43bf(0x1d0)]("type") === _0x3a43bf(0x151)
    )
      $(
        _0x3a43bf(0x1e6) +
          _0x1bf3c7[_0x3a43bf(0x1eb)] +
          _0x3a43bf(0x202) +
          _0x1bf3c7[_0x3a43bf(0x205)] +
          "\x22]"
      )[_0x3a43bf(0x15f)](),
        $(
          "input[name=\x22" +
            _0x1bf3c7["key"] +
            _0x3a43bf(0x202) +
            _0x1bf3c7["val"] +
            "\x22]"
        )
          [_0x3a43bf(0x1aa)](_0x3a43bf(0x20e))
          [_0x3a43bf(0x148)](_0x3a43bf(0x1c1));
    else
      _0x1bf3c7[_0x3a43bf(0x205)] === "on"
        ? ($("input[name=\x22" + _0x1bf3c7["key"] + "\x22]")[
            _0x3a43bf(0x15f)
          ](),
          $(_0x3a43bf(0x1e6) + _0x1bf3c7[_0x3a43bf(0x1eb)] + "\x22]")
            [_0x3a43bf(0x1aa)](_0x3a43bf(0x173))
            [_0x3a43bf(0x148)]("w--redirected-checked"))
        : ($(_0x3a43bf(0x1e6) + _0x1bf3c7[_0x3a43bf(0x1eb)] + "\x22]")["val"](
            _0x1bf3c7[_0x3a43bf(0x205)]
          ),
          $("textarea[name=\x22" + _0x1bf3c7["key"] + "\x22]")[
            _0x3a43bf(0x205)
          ](_0x1bf3c7[_0x3a43bf(0x205)]),
          $("select[name=\x22" + _0x1bf3c7[_0x3a43bf(0x1eb)] + "\x22]")
            [_0x3a43bf(0x17b)](
              _0x3a43bf(0x1fe) + _0x1bf3c7[_0x3a43bf(0x205)] + "\x22]"
            )
            [_0x3a43bf(0x164)](_0x3a43bf(0x165), !![]));
  }));
quiz &&
  steps[_0x59c807(0x18c)](function () {
    const _0x8747a1 = _0x59c807;
    $(this)[_0x8747a1(0x1b6)]()[_0x8747a1(0x1d0)](_0x8747a1(0x1b5), !![]),
      $(this)[_0x8747a1(0x1b6)]()[_0x8747a1(0x1d0)](_0x8747a1(0x185), 0xfa);
  });
function disableBtn(_0x13eefe) {
  const _0x2a7a7f = _0x59c807;
  fill = ![];
  if (customError) {
  } else
    $("[data-form=\x22next-btn\x22]")["css"]({
      opacity: _0x2a7a7f(0x1cd),
      "pointer-events": _0x2a7a7f(0x1da),
    }),
      $(_0x2a7a7f(0x1d4))[_0x2a7a7f(0x148)]("disabled"),
      $(_0x2a7a7f(0x156))[_0x2a7a7f(0x1c5)]({
        opacity: _0x2a7a7f(0x1cd),
        "pointer-events": _0x2a7a7f(0x1da),
      }),
      $(_0x2a7a7f(0x156))[_0x2a7a7f(0x148)](_0x2a7a7f(0x20b));
}
function enableBtn() {
  const _0x3144f5 = _0x59c807;
  (fill = !![]),
    $(_0x3144f5(0x1d4))["css"]({
      "pointer-events": _0x3144f5(0x209),
      opacity: "1",
    }),
    $(_0x3144f5(0x1d4))[_0x3144f5(0x21f)](_0x3144f5(0x20b)),
    $("[data-form=\x22submit-btn\x22]")[_0x3144f5(0x1c5)]({
      "pointer-events": _0x3144f5(0x209),
      opacity: "1",
    }),
    $("[data-form=\x22submit-btn\x22]")[_0x3144f5(0x21f)](_0x3144f5(0x20b));
}
function saveFilledInput() {
  const _0x159d16 = _0x59c807;
  $(_0x159d16(0x16d))
    [_0x159d16(0x186)]("[type=\x22submit\x22]")
    [_0x159d16(0x18c)](function () {
      const _0x2877f6 = _0x159d16;
      $(this)["attr"](_0x2877f6(0x19c)) === "checkbox" ||
      $(this)[_0x2877f6(0x1d0)](_0x2877f6(0x19c)) === _0x2877f6(0x151)
        ? $(this)[_0x2877f6(0x164)](_0x2877f6(0x1d1)) &&
          (filledInput["some"](
            (_0x38a9f5) =>
              _0x38a9f5["inputName"] ===
              $(this)[_0x2877f6(0x1d0)](_0x2877f6(0x174))
          )
            ? ((filledInput = filledInput[_0x2877f6(0x20f)](
                (_0x548c25) =>
                  _0x548c25["inputName"] !== $(this)[_0x2877f6(0x1d0)]("name")
              )),
              $(this)[_0x2877f6(0x205)]() !== "" &&
                filledInput[_0x2877f6(0x1b2)]({
                  inputName: $(this)[_0x2877f6(0x1d0)](_0x2877f6(0x174)),
                  value: $(this)[_0x2877f6(0x205)](),
                }))
            : $(this)[_0x2877f6(0x205)]() !== "" &&
              filledInput[_0x2877f6(0x1b2)]({
                inputName: $(this)[_0x2877f6(0x1d0)](_0x2877f6(0x174)),
                value: $(this)[_0x2877f6(0x205)](),
              }))
        : filledInput[_0x2877f6(0x149)](
            (_0x332c71) =>
              _0x332c71[_0x2877f6(0x1dc)] ===
              $(this)[_0x2877f6(0x1d0)](_0x2877f6(0x174))
          )
        ? ((filledInput = filledInput["filter"](
            (_0x13e002) =>
              _0x13e002[_0x2877f6(0x1dc)] !==
              $(this)[_0x2877f6(0x1d0)](_0x2877f6(0x174))
          )),
          $(this)[_0x2877f6(0x205)]() !== "" &&
            filledInput["push"]({
              inputName: $(this)[_0x2877f6(0x1d0)](_0x2877f6(0x174)),
              value: $(this)[_0x2877f6(0x205)](),
            }))
        : $(this)[_0x2877f6(0x205)]() !== "" &&
          filledInput["push"]({
            inputName: $(this)[_0x2877f6(0x1d0)](_0x2877f6(0x174)),
            value: $(this)[_0x2877f6(0x205)](),
          });
    }),
    filledInput &&
      filledInput[_0x159d16(0x200)]((_0x4728ac) => {
        const _0x12e2be = _0x159d16;
        urlFormly[_0x12e2be(0x1c8)][_0x12e2be(0x161)](
          _0x4728ac[_0x12e2be(0x1dc)]
        ),
          urlFormly["searchParams"][_0x12e2be(0x167)](
            _0x4728ac[_0x12e2be(0x1dc)],
            _0x4728ac[_0x12e2be(0x199)]
          ),
          window[_0x12e2be(0x1db)][_0x12e2be(0x18e)](null, null, urlFormly);
      }),
    localStorage[_0x159d16(0x19b)](_0x159d16(0x177)),
    localStorage[_0x159d16(0x1f5)](
      _0x159d16(0x177),
      JSON["stringify"](filledInput)
    );
}
function scrollTop() {}
function updateStep() {
  const _0x568261 = _0x59c807;
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
  $(_0x568261(0x1b1))[_0x568261(0x21b)](_0x568261(0x166)) &&
    (steps[_0x568261(0x17b)](_0x568261(0x15a))[_0x568261(0x18c)](function () {
      const _0x5b5c66 = _0x568261;
      $(
        $(_0x5b5c66(0x187))[
          $(this)[_0x5b5c66(0x1ec)](_0x5b5c66(0x157))["index"]()
        ]
      ),
        $(this)[_0x5b5c66(0x205)]() === "" && emptyInput++;
    }),
    emptyInput > 0x0
      ? $("input[type=\x22submit\x22]")[_0x568261(0x148)](_0x568261(0x20b))
      : $(_0x568261(0x1ab))["removeClass"](_0x568261(0x20b)));
  $(_0x568261(0x187))[_0x568261(0x21f)](_0x568261(0x1bb)),
    $($(_0x568261(0x187))[x])[_0x568261(0x148)](_0x568261(0x1bb)),
    (selection = selections[_0x568261(0x20f)](
      (_0xd6372a) => _0xd6372a[_0x568261(0x19f)] === x - 0x1
    ));
  next &&
    (x = getSafe(() => selection[0x0][_0x568261(0x1a5)])
      ? parseInt(getSafe(() => selection[0x0][_0x568261(0x1a5)]))
      : x);
  $(_0x568261(0x1d9))[_0x568261(0x207)](), steps[_0x568261(0x207)]();
  reinitIX === !![] && window[_0x568261(0x1ae)]["destroy"]();
  $(progressbar)[_0x568261(0x21f)](_0x568261(0x1bb));
  for (i = 0x0; i <= x; i++) {
    countCard
      ? $(progressbar[i])[_0x568261(0x148)](_0x568261(0x1bb))
      : !$(steps[i])["data"](_0x568261(0x14c)) &&
        $(progressbar[i])["addClass"](_0x568261(0x1bb));
  }
  reinitIX === !![]
    ? (window[_0x568261(0x1ae)] &&
        window[_0x568261(0x1ae)]
          [_0x568261(0x168)](_0x568261(0x1c4))
          [_0x568261(0x153)](),
      document["dispatchEvent"](new Event(_0x568261(0x14e))),
      $(steps[x])["show"]())
    : $(steps[x])["fadeIn"](_0x568261(0x1cb));
  x === 0x0 &&
    !$(steps[x])[_0x568261(0x21b)](_0x568261(0x14c)) &&
    $(steps[x])[_0x568261(0x17b)](_0x568261(0x1d9))[_0x568261(0x17a)]();
  selection[_0x568261(0x1d2)] > 0x0
    ? $(steps[x])
        [_0x568261(0x17b)](
          _0x568261(0x1e5) + selection[0x0]["selected"] + "\x22]"
        )
        [_0x568261(0x17a)]()
    : $(steps[x])
        [_0x568261(0x17b)](_0x568261(0x1e5) + answer + "\x22]")
        ["show"]();
  if (x === 0x0)
    $(_0x568261(0x206))[_0x568261(0x207)](),
      $("[data-form=\x22next-btn\x22]")["show"]();
  else {
    if (
      x === steps["length"] - 0x1 ||
      $(steps[x])[_0x568261(0x17b)](_0x568261(0x180))["length"] > 0x0
    ) {
      $(_0x568261(0x1d4))[_0x568261(0x207)]();
      if (
        $(steps[x])
          [_0x568261(0x17b)](_0x568261(0x1bc))
          [_0x568261(0x21b)](_0x568261(0x1a3))
      )
        $(steps[x])
          [_0x568261(0x17b)]("[data-form=\x22next-btn\x22][data-submit-show]")
          ["show"]();
      else
        $(_0x568261(0x1d4))["data"](_0x568261(0x1a3)) &&
          $(_0x568261(0x1d4))["show"]();
      $(_0x568261(0x156))[_0x568261(0x17a)](),
        $("[data-form=\x22back-btn\x22]")[_0x568261(0x17a)]();
    } else
      $(_0x568261(0x1d4))[_0x568261(0x17a)](),
        $("[data-form=\x22back-btn\x22]")["show"](),
        $(_0x568261(0x156))[_0x568261(0x207)]();
  }
  $($(steps[x])[_0x568261(0x17b)](_0x568261(0x1e1))[0x0])[_0x568261(0x197)](),
    $($(steps[x])["find"](_0x568261(0x162))[0x0])["focus"](),
    validation();
  for (idx = 0x0; idx <= progress; idx++) {
    $($(_0x568261(0x187))[idx])[_0x568261(0x21f)](_0x568261(0x20b));
  }
}
function validateEmail(_0x45987f, _0x2a9db4) {
  const _0x393c47 = _0x59c807;
  let _0x2cd982 = _0x45987f[_0x393c47(0x20d)]("@")
    ? _0x45987f[_0x393c47(0x190)]("@")[0x1]["split"](".")[0x0]
    : [];
  dom = [];
  _0x2a9db4 !== undefined &&
    _0x2a9db4[_0x393c47(0x190)](",")[_0x393c47(0x200)](function (_0x5ebadc) {
      const _0x50be15 = _0x393c47;
      _0x5ebadc["includes"](_0x2cd982) && dom[_0x50be15(0x1b2)](_0x2cd982);
    });
  dom[_0x393c47(0x1d2)] > 0x0 ? (domainAllowed = ![]) : (domainAllowed = !![]);
  var _0x18fb89 = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,20})?$/;
  !_0x18fb89["test"](_0x45987f) ? (emailFilled = ![]) : (emailFilled = !![]);
}
function validation() {
  const _0x36f89d = _0x59c807;
  $(steps[x])[_0x36f89d(0x21b)](_0x36f89d(0x14c)) && enableBtn();
  (textareaLength = $(steps[x])["find"](_0x36f89d(0x1b0))[_0x36f89d(0x1d2)]),
    (textInputLength = $(steps[x])[_0x36f89d(0x17b)](_0x36f89d(0x213))[
      "length"
    ]),
    (selectInputLength = $(steps[x])[_0x36f89d(0x17b)](_0x36f89d(0x1a4))[
      "length"
    ]),
    (emailInputLength = $(steps[x])[_0x36f89d(0x17b)](_0x36f89d(0x1ba))[
      _0x36f89d(0x1d2)
    ]),
    (checkboxInputLength = $(steps[x])[_0x36f89d(0x17b)](_0x36f89d(0x15b))[
      _0x36f89d(0x1d2)
    ]);
  textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0
    ? disableBtn()
    : enableBtn();
  var _0x49634e = $(steps[x])["data"](_0x36f89d(0x1e3))
    ? $(steps[x])[_0x36f89d(0x21b)](_0x36f89d(0x1e3))
    : 0x0;
  if (!logicExtra)
    $(steps[x])[_0x36f89d(0x17b)](":input")["is"](_0x36f89d(0x15d)) &&
      (_0x49634e === "*" ||
      _0x49634e >
        $(steps[x])[_0x36f89d(0x17b)](":input[type=\x22checkbox\x22]")["length"]
        ? $(steps[x])
            [_0x36f89d(0x17b)](_0x36f89d(0x179))
            [_0x36f89d(0x18c)](function () {
              const _0x261913 = _0x36f89d;
              $(this)["is"](_0x261913(0x19e))
                ? $(steps[x])["find"](":input[required]")[_0x261913(0x1d2)] <
                    0x1 && (checkboxFilled = !![])
                : (checkboxFilled = ![]);
            })
        : $(steps[x])[_0x36f89d(0x17b)](_0x36f89d(0x214))[_0x36f89d(0x1d2)] >=
          _0x49634e
        ? (checkboxFilled = !![])
        : (checkboxFilled = ![])),
      $(steps[x])
        ["find"]("input:radio[required]")
        [_0x36f89d(0x18c)](function (_0x5c17a2) {
          const _0x37c584 = _0x36f89d;
          var _0x3868eb = $(this)[_0x37c584(0x1d0)](_0x37c584(0x174));
          console[_0x37c584(0x183)](_0x3868eb),
            $(_0x37c584(0x1f8) + _0x3868eb + _0x37c584(0x189))["length"] == 0x0
              ? !empReqRadio[_0x37c584(0x17b)](
                  (_0x216963) => _0x216963["input"] === _0x5c17a2
                ) && empReqRadio[_0x37c584(0x1b2)]({ input: _0x5c17a2 })
              : (empReqRadio = empReqRadio[_0x37c584(0x20f)](
                  (_0x3fe7ff) => _0x3fe7ff[_0x37c584(0x1d3)] !== _0x5c17a2
                )),
            empReqRadio[_0x37c584(0x1d2)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x36f89d(0x160))
        ["each"](function (_0x53eda5) {
          const _0xeb30c3 = _0x36f89d;
          $(this)["val"]() !== ""
            ? (empReqInput = empReqInput[_0xeb30c3(0x20f)](
                (_0x3010f6) => _0x3010f6["input"] !== _0x53eda5
              ))
            : !empReqInput[_0xeb30c3(0x17b)](
                (_0x13e339) => _0x13e339[_0xeb30c3(0x1d3)] === _0x53eda5
              ) && empReqInput[_0xeb30c3(0x1b2)]({ input: _0x53eda5 }),
            empReqInput[_0xeb30c3(0x1d2)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x36f89d(0x17b)](_0x36f89d(0x178))
        ["each"](function (_0x4112b9) {
          const _0x4af8dd = _0x36f89d;
          $(this)[_0x4af8dd(0x205)]() !== ""
            ? (empReqTel = empReqTel[_0x4af8dd(0x20f)](
                (_0x425e94) => _0x425e94["input"] !== _0x4112b9
              ))
            : !empReqTel["find"](
                (_0xf917ab) => _0xf917ab[_0x4af8dd(0x1d3)] === _0x4112b9
              ) && empReqTel[_0x4af8dd(0x1b2)]({ input: _0x4112b9 }),
            empReqTel[_0x4af8dd(0x1d2)] === 0x0
              ? (telFilled = !![])
              : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x36f89d(0x17b)](":input[type=\x22file\x22][required]")
        [_0x36f89d(0x18c)](function (_0x2be651) {
          const _0x49fd56 = _0x36f89d;
          $(this)[_0x49fd56(0x205)]() !== ""
            ? (empReqFile = empReqFile[_0x49fd56(0x20f)](
                (_0x47ed85) => _0x47ed85[_0x49fd56(0x1d3)] !== _0x2be651
              ))
            : !empReqFile[_0x49fd56(0x17b)](
                (_0x2a81ec) => _0x2a81ec[_0x49fd56(0x1d3)] === _0x2be651
              ) && empReqFile[_0x49fd56(0x1b2)]({ input: _0x2be651 }),
            empReqFile[_0x49fd56(0x1d2)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x36f89d(0x17b)](_0x36f89d(0x15e))
        [_0x36f89d(0x18c)](function (_0x429891) {
          const _0x2049a6 = _0x36f89d;
          $(this)[_0x2049a6(0x205)]() !== ""
            ? (empReqNum = empReqNum[_0x2049a6(0x20f)](
                (_0x17e78e) => _0x17e78e[_0x2049a6(0x1d3)] !== _0x429891
              ))
            : !empReqNum["find"](
                (_0x4d6d01) => _0x4d6d01[_0x2049a6(0x1d3)] === _0x429891
              ) && empReqNum["push"]({ input: _0x429891 }),
            empReqNum[_0x2049a6(0x1d2)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x36f89d(0x1b8))
        ["each"](function (_0x1a4989) {
          const _0x39b944 = _0x36f89d;
          let _0x109465 = $(this)[_0x39b944(0x205)]();
          _0x109465 === "" && (_0x109465 = null),
            _0x109465 != null
              ? (empReqSelect = empReqSelect[_0x39b944(0x20f)](
                  (_0xa7144) => _0xa7144[_0x39b944(0x1d3)] !== _0x1a4989
                ))
              : !empReqSelect[_0x39b944(0x17b)](
                  (_0x1bb8e7) => _0x1bb8e7[_0x39b944(0x1d3)] === _0x1a4989
                ) && empReqSelect[_0x39b944(0x1b2)]({ input: _0x1a4989 }),
            empReqSelect[_0x39b944(0x1d2)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        ["find"]("textarea[required]")
        ["each"](function (_0x5235ea) {
          const _0x154f4f = _0x36f89d;
          $(this)[_0x154f4f(0x205)]() !== ""
            ? (empReqTextarea = empReqTextarea[_0x154f4f(0x20f)](
                (_0x1f0ed1) => _0x1f0ed1[_0x154f4f(0x1d3)] !== _0x5235ea
              ))
            : !empReqTextarea[_0x154f4f(0x17b)](
                (_0x91741d) => _0x91741d[_0x154f4f(0x1d3)] === _0x5235ea
              ) && empReqTextarea[_0x154f4f(0x1b2)]({ input: _0x5235ea }),
            empReqTextarea[_0x154f4f(0x1d2)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x36f89d(0x1ee))
        [_0x36f89d(0x18c)](function () {
          const _0x5395fe = _0x36f89d;
          $(this)[_0x5395fe(0x205)]() !== ""
            ? validateEmail(
                $(this)[_0x5395fe(0x205)](),
                $(this)["data"]("block-domain")
              )
            : (emailFilled = ![]);
        });
  else {
    if ($(steps[x])["data"](_0x36f89d(0x14c)))
      (answer = $(steps[x])
        [_0x36f89d(0x17b)](_0x36f89d(0x16a))
        [_0x36f89d(0x21b)](_0x36f89d(0x154))),
        (selections = selections[_0x36f89d(0x20f)](
          (_0x530e85) => _0x530e85[_0x36f89d(0x19f)] !== x
        )),
        selections["push"]({ step: x, selected: answer });
    else
      $(steps[x])
        [_0x36f89d(0x17b)](_0x36f89d(0x1e0))
        [_0x36f89d(0x21b)](_0x36f89d(0x14c)) &&
        ((answer = $(steps[x])
          [_0x36f89d(0x17b)]("[data-answer]:visible")
          ["data"]("go-to")),
        (selections = selections["filter"](
          (_0x50d1cb) => _0x50d1cb[_0x36f89d(0x19f)] !== x
        )),
        selections["push"]({ step: x, selected: answer }));
    $(steps[x])
      [_0x36f89d(0x17b)](_0x36f89d(0x1e0))
      [_0x36f89d(0x17b)](_0x36f89d(0x211))
      ["is"]("[type=\x22checkbox\x22]") &&
      (_0x49634e === "*" ||
      _0x49634e >
        $(steps[x])[_0x36f89d(0x17b)](_0x36f89d(0x179))[_0x36f89d(0x1d2)]
        ? $(steps[x])
            [_0x36f89d(0x17b)](":input[type=\x22checkbox\x22]")
            ["each"](function () {
              const _0x149568 = _0x36f89d;
              $(this)["is"](_0x149568(0x19e))
                ? $(steps[x])[_0x149568(0x17b)](_0x149568(0x15a))[
                    _0x149568(0x1d2)
                  ] < 0x1 &&
                  ((skipTo = undefined),
                  $(this)
                    ["parents"]("[data-skip-to]")
                    [_0x149568(0x21b)]("skip-to") &&
                    (skipTo = $(this)
                      ["parents"](_0x149568(0x198))
                      [_0x149568(0x21b)](_0x149568(0x1d8))),
                  console[_0x149568(0x183)](
                    _0x149568(0x1e3),
                    $(this)["parents"]()[_0x149568(0x1ec)]()
                  ),
                  $(this)
                    [_0x149568(0x1ec)]("[data-go-to]")
                    [_0x149568(0x1d0)]("data-go-to") &&
                    ((answer = $(this)
                      [_0x149568(0x1ec)](_0x149568(0x16a))
                      [_0x149568(0x1d0)](_0x149568(0x18a))),
                    (selections = selections["filter"](
                      (_0x5df067) => _0x5df067["step"] !== x
                    )),
                    selections[_0x149568(0x1b2)]({ step: x, selected: answer }),
                    skipTo &&
                      (selections["push"]({
                        step: skipTo - 0x2,
                        selected: answer,
                      }),
                      (objIndex = selections[_0x149568(0x1cc)](
                        (_0xfb8845) => _0xfb8845[_0x149568(0x19f)] === x
                      )),
                      (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                      (selections[objIndex][_0x149568(0x1c6)] = x))),
                  (checkboxFilled = !![]))
                : (checkboxFilled = ![]);
            })
        : $(steps[x])
            [_0x36f89d(0x17b)](_0x36f89d(0x1e0))
            [_0x36f89d(0x17b)](_0x36f89d(0x214))[_0x36f89d(0x1d2)] >= _0x49634e
        ? ($(steps[x])
            ["find"](_0x36f89d(0x1e0))
            [_0x36f89d(0x17b)](":input[type=\x22checkbox\x22]:checked")
            [_0x36f89d(0x1ec)](_0x36f89d(0x16a))
            ["attr"](_0x36f89d(0x18a)) &&
            ((skipTo = undefined),
            $(steps[x])
              [_0x36f89d(0x17b)](_0x36f89d(0x1e0))
              ["find"](_0x36f89d(0x214))
              [_0x36f89d(0x1ec)](_0x36f89d(0x198))
              ["attr"](_0x36f89d(0x1f1)) &&
              (skipTo = $(steps[x])
                [_0x36f89d(0x17b)](_0x36f89d(0x1e0))
                [_0x36f89d(0x17b)](_0x36f89d(0x214))
                ["parents"]("[data-skip-to]")
                [_0x36f89d(0x1d0)](_0x36f89d(0x1f1))),
            console[_0x36f89d(0x183)](_0x36f89d(0x1e3), skipTo),
            (answer = $(steps[x])
              ["find"](_0x36f89d(0x1e0))
              [_0x36f89d(0x17b)](_0x36f89d(0x214))
              [_0x36f89d(0x1ec)](_0x36f89d(0x16a))
              [_0x36f89d(0x1d0)](_0x36f89d(0x18a))),
            (selections = selections[_0x36f89d(0x20f)](
              (_0x310628) => _0x310628[_0x36f89d(0x19f)] !== x
            )),
            selections[_0x36f89d(0x1b2)]({ step: x, selected: answer }),
            skipTo &&
              (selections["push"]({ step: skipTo - 0x2, selected: answer }),
              (objIndex = selections["findIndex"](
                (_0x68d9e8) => _0x68d9e8[_0x36f89d(0x19f)] === x
              )),
              (selections[objIndex][_0x36f89d(0x1a5)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x36f89d(0x1c6)] = x))),
          (selections = selections[_0x36f89d(0x20f)](
            (_0x1000d3) => _0x1000d3[_0x36f89d(0x19f)] !== x
          )),
          selections["push"]({ step: x, selected: answer }),
          (checkboxFilled = !![]))
        : (checkboxFilled = ![])),
      $(steps[x])
        [_0x36f89d(0x17b)](_0x36f89d(0x1e0))
        ["find"](_0x36f89d(0x15a))
        ["is"](_0x36f89d(0x208))
        ? $(steps[x])
            [_0x36f89d(0x17b)](_0x36f89d(0x1e0))
            [_0x36f89d(0x17b)](_0x36f89d(0x1fc))
            ["is"](":checked")
          ? (radioFilled = !![])
          : (radioFilled = ![])
        : (radioFilled = !![]),
      $(steps[x])
        ["find"](_0x36f89d(0x1e0))
        [_0x36f89d(0x17b)](_0x36f89d(0x160))
        [_0x36f89d(0x18c)](function (_0x5d2f5d) {
          const _0x5bc435 = _0x36f89d;
          $(this)["val"]() !== ""
            ? (empReqInput = empReqInput[_0x5bc435(0x20f)](
                (_0x28db73) => _0x28db73[_0x5bc435(0x1d3)] !== _0x5d2f5d
              ))
            : !empReqInput["find"](
                (_0x3d42e6) => _0x3d42e6[_0x5bc435(0x1d3)] === _0x5d2f5d
              ) && empReqInput[_0x5bc435(0x1b2)]({ input: _0x5d2f5d }),
            empReqInput[_0x5bc435(0x1d2)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x36f89d(0x17b)]("[data-answer]:visible")
        [_0x36f89d(0x17b)](":input[type=\x22text\x22]")
        [_0x36f89d(0x18c)](function (_0xe13433) {
          const _0x2434b7 = _0x36f89d;
          (skipTo = undefined),
            $(this)
              [_0x2434b7(0x1ec)](_0x2434b7(0x198))
              [_0x2434b7(0x21b)](_0x2434b7(0x1d8)) !== "" &&
              (skipTo = $(this)
                [_0x2434b7(0x1ec)]("[data-skip-to]")
                [_0x2434b7(0x21b)](_0x2434b7(0x1d8))),
            $(this)
              [_0x2434b7(0x1ec)](_0x2434b7(0x16a))
              ["attr"](_0x2434b7(0x18a)) &&
              ((answer = $(this)
                [_0x2434b7(0x1ec)](_0x2434b7(0x16a))
                [_0x2434b7(0x1d0)](_0x2434b7(0x18a))),
              (selections = selections["filter"](
                (_0x130c6c) => _0x130c6c[_0x2434b7(0x19f)] !== x
              )),
              selections[_0x2434b7(0x1b2)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x2434b7(0x1b2)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x2434b7(0x1cc)](
                  (_0xabfa03) => _0xabfa03["step"] === x
                )),
                (selections[objIndex][_0x2434b7(0x1a5)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        ["find"](_0x36f89d(0x1e0))
        [_0x36f89d(0x17b)](_0x36f89d(0x15e))
        [_0x36f89d(0x18c)](function (_0x53094f) {
          const _0x1c8fc2 = _0x36f89d;
          $(this)[_0x1c8fc2(0x205)]() !== ""
            ? (empReqNum = empReqNum[_0x1c8fc2(0x20f)](
                (_0x43e804) => _0x43e804[_0x1c8fc2(0x1d3)] !== _0x53094f
              ))
            : !empReqNum[_0x1c8fc2(0x17b)](
                (_0x18adcb) => _0x18adcb["input"] === _0x53094f
              ) && empReqNum[_0x1c8fc2(0x1b2)]({ input: _0x53094f }),
            empReqNum[_0x1c8fc2(0x1d2)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x36f89d(0x17b)](_0x36f89d(0x1e0))
        [_0x36f89d(0x17b)](_0x36f89d(0x181))
        ["each"](function (_0x31f9dc) {
          const _0x302ef5 = _0x36f89d;
          (skipTo = undefined),
            $(this)
              [_0x302ef5(0x1ec)](_0x302ef5(0x198))
              [_0x302ef5(0x21b)]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0x302ef5(0x1ec)](_0x302ef5(0x198))
                [_0x302ef5(0x21b)](_0x302ef5(0x1d8))),
            $(this)
              [_0x302ef5(0x1ec)]("[data-go-to]")
              ["attr"](_0x302ef5(0x18a)) &&
              ((answer = $(this)
                [_0x302ef5(0x1ec)]("[data-go-to]")
                [_0x302ef5(0x1d0)]("data-go-to")),
              (selections = selections[_0x302ef5(0x20f)](
                (_0x5464b2) => _0x5464b2["step"] !== x
              )),
              selections[_0x302ef5(0x1b2)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x302ef5(0x1b2)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x302ef5(0x1cc)](
                  (_0x2c2f46) => _0x2c2f46["step"] === x
                )),
                (selections[objIndex][_0x302ef5(0x1a5)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x36f89d(0x17b)](_0x36f89d(0x1e0))
        [_0x36f89d(0x17b)](_0x36f89d(0x178))
        ["each"](function (_0x5c5c55) {
          const _0x5172b6 = _0x36f89d;
          $(this)["val"]() !== ""
            ? (empReqTel = empReqTel[_0x5172b6(0x20f)](
                (_0x195e32) => _0x195e32["input"] !== _0x5c5c55
              ))
            : !empReqTel[_0x5172b6(0x17b)](
                (_0x451518) => _0x451518[_0x5172b6(0x1d3)] === _0x5c5c55
              ) && empReqTel[_0x5172b6(0x1b2)]({ input: _0x5c5c55 }),
            empReqTel[_0x5172b6(0x1d2)] === 0x0
              ? (telFilled = !![])
              : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x36f89d(0x17b)]("[data-answer]:visible")
        [_0x36f89d(0x17b)](":input[type=\x22tel\x22]")
        ["each"](function (_0x4099e8) {
          const _0x394a20 = _0x36f89d;
          (skipTo = undefined),
            $(this)
              [_0x394a20(0x1ec)](_0x394a20(0x198))
              ["data"](_0x394a20(0x1d8)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0x394a20(0x198))
                [_0x394a20(0x21b)](_0x394a20(0x1d8))),
            $(this)
              [_0x394a20(0x1ec)](_0x394a20(0x16a))
              [_0x394a20(0x1d0)](_0x394a20(0x18a)) &&
              ((answer = $(this)
                ["parents"](_0x394a20(0x16a))
                [_0x394a20(0x1d0)]("data-go-to")),
              (selections = selections["filter"](
                (_0x1b2c36) => _0x1b2c36["step"] !== x
              )),
              selections[_0x394a20(0x1b2)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x394a20(0x1b2)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x394a20(0x1cc)](
                  (_0x17f0fb) => _0x17f0fb[_0x394a20(0x19f)] === x
                )),
                (selections[objIndex][_0x394a20(0x1a5)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x394a20(0x1c6)] = x)));
        }),
      $(steps[x])
        [_0x36f89d(0x17b)](_0x36f89d(0x1e0))
        ["find"](_0x36f89d(0x182))
        [_0x36f89d(0x18c)](function (_0x57c3d9) {
          const _0x1b6bfa = _0x36f89d;
          $(this)[_0x1b6bfa(0x205)]() !== ""
            ? (empReqfile = empReqfile[_0x1b6bfa(0x20f)](
                (_0x5ca966) => _0x5ca966[_0x1b6bfa(0x1d3)] !== _0x57c3d9
              ))
            : !empReqfile[_0x1b6bfa(0x17b)](
                (_0x3f8c84) => _0x3f8c84["input"] === _0x57c3d9
              ) && empReqfile[_0x1b6bfa(0x1b2)]({ input: _0x57c3d9 }),
            empReqfile[_0x1b6bfa(0x1d2)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        ["find"]("[data-answer]:visible")
        [_0x36f89d(0x17b)](_0x36f89d(0x1f9))
        ["each"](function (_0x31bace) {
          const _0x15b3f7 = _0x36f89d;
          (skipTo = undefined),
            $(this)
              [_0x15b3f7(0x1ec)](_0x15b3f7(0x198))
              ["data"](_0x15b3f7(0x1d8)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0x15b3f7(0x198))
                [_0x15b3f7(0x21b)]("skip-to")),
            $(this)
              [_0x15b3f7(0x1ec)](_0x15b3f7(0x16a))
              [_0x15b3f7(0x1d0)]("data-go-to") &&
              ((answer = $(this)
                ["parents"](_0x15b3f7(0x16a))
                [_0x15b3f7(0x1d0)](_0x15b3f7(0x18a))),
              (selections = selections["filter"](
                (_0x1a6aab) => _0x1a6aab[_0x15b3f7(0x19f)] !== x
              )),
              selections[_0x15b3f7(0x1b2)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x15b3f7(0x1b2)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x15b3f7(0x1cc)](
                  (_0x3c6201) => _0x3c6201["step"] === x
                )),
                (selections[objIndex][_0x15b3f7(0x1a5)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x15b3f7(0x1c6)] = x)));
        }),
      $(steps[x])
        [_0x36f89d(0x17b)](_0x36f89d(0x1e0))
        [_0x36f89d(0x17b)](_0x36f89d(0x1b8))
        [_0x36f89d(0x18c)](function (_0x28bdb5) {
          const _0x5a5316 = _0x36f89d;
          $(this)["val"]() !== ""
            ? (empReqSelect = empReqSelect["filter"](
                (_0x36d854) => _0x36d854[_0x5a5316(0x1d3)] !== _0x28bdb5
              ))
            : !empReqSelect["find"](
                (_0x12a5c8) => _0x12a5c8[_0x5a5316(0x1d3)] === _0x28bdb5
              ) && empReqSelect[_0x5a5316(0x1b2)]({ input: _0x28bdb5 }),
            empReqSelect[_0x5a5316(0x1d2)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x36f89d(0x17b)](_0x36f89d(0x1e0))
        ["find"](_0x36f89d(0x1e8))
        ["each"](function (_0x530b9e) {
          const _0xdb2062 = _0x36f89d;
          (skipTo = undefined),
            $(this)
              [_0xdb2062(0x1ec)]("[data-skip-to]")
              [_0xdb2062(0x21b)]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0xdb2062(0x1ec)](_0xdb2062(0x198))
                [_0xdb2062(0x21b)](_0xdb2062(0x1d8))),
            $(this)
              [_0xdb2062(0x1ec)](_0xdb2062(0x16a))
              [_0xdb2062(0x1d0)]("data-go-to") &&
              ((answer = $(this)
                [_0xdb2062(0x1ec)](_0xdb2062(0x16a))
                [_0xdb2062(0x1d0)](_0xdb2062(0x18a))),
              (selections = selections[_0xdb2062(0x20f)](
                (_0x240c6c) => _0x240c6c[_0xdb2062(0x19f)] !== x
              )),
              selections[_0xdb2062(0x1b2)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0xdb2062(0x1b2)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0xdb2062(0x1cc)](
                  (_0x8bcd10) => _0x8bcd10[_0xdb2062(0x19f)] === x
                )),
                (selections[objIndex][_0xdb2062(0x1a5)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0xdb2062(0x1c6)] = x)));
        }),
      $(steps[x])
        [_0x36f89d(0x17b)](_0x36f89d(0x1e0))
        [_0x36f89d(0x17b)]("textarea[required]")
        [_0x36f89d(0x18c)](function (_0x51a4a5) {
          const _0x371442 = _0x36f89d;
          $(this)[_0x371442(0x205)]() !== ""
            ? (empReqTextarea = empReqTextarea["filter"](
                (_0x4ad2c8) => _0x4ad2c8[_0x371442(0x1d3)] !== _0x51a4a5
              ))
            : !empReqTextarea[_0x371442(0x17b)](
                (_0x140c8a) => _0x140c8a[_0x371442(0x1d3)] === _0x51a4a5
              ) && empReqTextarea[_0x371442(0x1b2)]({ input: _0x51a4a5 }),
            empReqTextarea[_0x371442(0x1d2)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x36f89d(0x17b)](_0x36f89d(0x1e0))
        [_0x36f89d(0x17b)](_0x36f89d(0x15c))
        ["each"](function (_0x69bcad) {
          const _0x37a7b7 = _0x36f89d;
          (skipTo = undefined),
            $(this)
              [_0x37a7b7(0x1ec)](_0x37a7b7(0x198))
              [_0x37a7b7(0x21b)](_0x37a7b7(0x1d8)) !== "" &&
              (skipTo = $(this)
                [_0x37a7b7(0x1ec)](_0x37a7b7(0x198))
                [_0x37a7b7(0x21b)](_0x37a7b7(0x1d8))),
            $(this)
              ["parents"]("[data-go-to]")
              [_0x37a7b7(0x1d0)]("data-go-to") &&
              ((answer = $(this)
                [_0x37a7b7(0x1ec)](_0x37a7b7(0x16a))
                [_0x37a7b7(0x1d0)](_0x37a7b7(0x18a))),
              (selections = selections[_0x37a7b7(0x20f)](
                (_0x4b6f9b) => _0x4b6f9b["step"] !== x
              )),
              selections[_0x37a7b7(0x1b2)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x37a7b7(0x1b2)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x37a7b7(0x1cc)](
                  (_0xe116a1) => _0xe116a1[_0x37a7b7(0x19f)] === x
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x36f89d(0x17b)](_0x36f89d(0x1e0))
        ["find"](_0x36f89d(0x1ee))
        [_0x36f89d(0x18c)](function (_0x1372ad) {
          const _0x33b3e6 = _0x36f89d;
          $(this)[_0x33b3e6(0x205)]() !== ""
            ? validateEmail(
                $(this)[_0x33b3e6(0x205)](),
                $(this)[_0x33b3e6(0x21b)](_0x33b3e6(0x163))
              )
            : (emailFilled = ![]);
        }),
      $(steps[x])
        [_0x36f89d(0x17b)](_0x36f89d(0x1e0))
        [_0x36f89d(0x17b)](_0x36f89d(0x1c2))
        [_0x36f89d(0x18c)](function (_0x532316) {
          const _0xbf324c = _0x36f89d;
          (skipTo = undefined),
            $(this)
              [_0xbf324c(0x1ec)](_0xbf324c(0x198))
              ["data"](_0xbf324c(0x1d8)) !== "" &&
              (skipTo = $(this)
                [_0xbf324c(0x1ec)](_0xbf324c(0x198))
                [_0xbf324c(0x21b)](_0xbf324c(0x1d8))),
            $(this)
              [_0xbf324c(0x1ec)](_0xbf324c(0x16a))
              [_0xbf324c(0x1d0)](_0xbf324c(0x18a)) &&
              ((answer = $(this)
                [_0xbf324c(0x1ec)](_0xbf324c(0x16a))
                [_0xbf324c(0x1d0)](_0xbf324c(0x18a))),
              (selections = selections[_0xbf324c(0x20f)](
                (_0xf8922a) => _0xf8922a[_0xbf324c(0x19f)] !== x
              )),
              selections[_0xbf324c(0x1b2)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0xbf324c(0x1b2)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0xbf324c(0x1cc)](
                  (_0x1c4bc0) => _0x1c4bc0[_0xbf324c(0x19f)] === x
                )),
                (selections[objIndex][_0xbf324c(0x1a5)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0xbf324c(0x1c6)] = x)));
        });
  }
  $(steps[x])[_0x36f89d(0x17b)](_0x36f89d(0x14b))["is"](_0x36f89d(0x19e)) &&
    ((selArr = []),
    $(steps)
      [_0x36f89d(0x17b)](_0x36f89d(0x14f))
      ["each"](function (_0x1352de, _0x44a320) {
        const _0x424318 = _0x36f89d;
        selArr[_0x424318(0x1b2)]({
          selected: $(this)[_0x424318(0x21b)](_0x424318(0x165)),
        });
      }),
    (selString = []),
    selArr[_0x36f89d(0x200)]((_0x5af243) =>
      selString["push"](_0x5af243[_0x36f89d(0x165)])
    ),
    (selections = selections["filter"](
      (_0x13b978) => _0x13b978[_0x36f89d(0x19f)] !== x
    )),
    $(steps[x])
      [_0x36f89d(0x17b)]("[data-answer]:visible")
      [_0x36f89d(0x17b)](_0x36f89d(0x16f))
      ["each"](function () {
        const _0x13b2d0 = _0x36f89d;
        skipTo = undefined;
        if (
          $(this)
            [_0x13b2d0(0x1ec)](_0x13b2d0(0x198))
            [_0x13b2d0(0x21b)]("skip-to")
        )
          skipTo = $(this)
            [_0x13b2d0(0x1ec)]("[data-skip-to]")
            [_0x13b2d0(0x21b)]("skip-to");
        else
          $(this)[_0x13b2d0(0x21b)](_0x13b2d0(0x1d8)) &&
            (skipTo = $(this)[_0x13b2d0(0x21b)]("skip-to"));
        if ($(this)["data"](_0x13b2d0(0x154)))
          (answer = $(this)[_0x13b2d0(0x1d0)](_0x13b2d0(0x18a))),
            selections["push"]({ step: x, selected: answer }),
            console[_0x13b2d0(0x183)](skipTo),
            skipTo &&
              (selections[_0x13b2d0(0x1b2)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections["findIndex"](
                (_0x64e953) => _0x64e953[_0x13b2d0(0x19f)] === x
              )),
              (selections[objIndex][_0x13b2d0(0x1a5)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x13b2d0(0x1c6)] = x));
        else
          $(this)
            ["parents"](_0x13b2d0(0x16a))
            [_0x13b2d0(0x21b)](_0x13b2d0(0x154)) &&
            ((answer = $(this)
              [_0x13b2d0(0x1ec)](_0x13b2d0(0x16a))
              ["data"](_0x13b2d0(0x154))),
            selections[_0x13b2d0(0x1b2)]({ step: x, selected: answer }),
            console[_0x13b2d0(0x183)](skipTo),
            skipTo &&
              (selections["push"]({ step: skipTo - 0x2, selected: answer }),
              (objIndex = selections[_0x13b2d0(0x1cc)](
                (_0xd8e16d) => _0xd8e16d[_0x13b2d0(0x19f)] === x
              )),
              (selections[objIndex][_0x13b2d0(0x1a5)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x13b2d0(0x1c6)] = x)));
      }),
    logicExtra
      ? ($(steps[x])
          [_0x36f89d(0x17b)]("[data-answer]:visible")
          ["find"]("[data-radio-skip]:visible")
          [_0x36f89d(0x21b)](_0x36f89d(0x1ad)) === !![] ||
          $(steps[x])
            ["find"](_0x36f89d(0x203))
            [_0x36f89d(0x21b)](_0x36f89d(0x1ad)) === !![]) &&
        !back &&
        selections[_0x36f89d(0x20f)](
          (_0x17198c) => _0x17198c[_0x36f89d(0x19f)] === x
        )[_0x36f89d(0x1d2)] > 0x0 &&
        (console[_0x36f89d(0x183)](_0x36f89d(0x210)),
        textareaLength === 0x0 &&
          textInputLength === 0x0 &&
          emailInputLength === 0x0 &&
          checkboxInputLength === 0x0 &&
          setTimeout(function () {
            (next = !![]), nextStep(), selectionQuiz();
          }, $(steps[x])
            [_0x36f89d(0x17b)](_0x36f89d(0x1f6))
            [_0x36f89d(0x21b)](_0x36f89d(0x21c))))
      : $(steps[x])
          [_0x36f89d(0x17b)](_0x36f89d(0x18d))
          [_0x36f89d(0x21b)]("radio-skip") === !![] &&
        (console[_0x36f89d(0x183)](_0x36f89d(0x1c9), back),
        !back &&
          textareaLength === 0x0 &&
          textInputLength === 0x0 &&
          emailInputLength === 0x0 &&
          checkboxInputLength === 0x0 &&
          setTimeout(function () {
            (next = !![]), nextStep(), selectionQuiz();
          }, $(steps[x])
            [_0x36f89d(0x17b)](_0x36f89d(0x1f6))
            [_0x36f89d(0x21b)](_0x36f89d(0x21c)))),
    console[_0x36f89d(0x183)](selections)),
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
  const _0x420429 = _0x59c807;
  x++,
    countCard
      ? ((curStep = curStep + 0x1),
        $(_0x420429(0x1bf))[_0x420429(0x1e7)](steps["length"]))
      : $(steps[x])[_0x420429(0x21b)]("card")
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    $(_0x420429(0x159))[_0x420429(0x1e7)](curStep),
    x > progress && (progress = x),
    x <= steps["length"] - 0x1 && (updateStep(), memory && saveFilledInput());
}
function backStep() {
  const _0x49292f = _0x59c807;
  countCard
    ? ((curStep = curStep - 0x1),
      console[_0x49292f(0x183)](curStep),
      $(_0x49292f(0x1bf))["text"](steps[_0x49292f(0x1d2)]))
    : $(steps[x])[_0x49292f(0x21b)](_0x49292f(0x14c))
    ? (curStep = curStep - 0x0)
    : (curStep = curStep - 0x1),
    $(_0x49292f(0x159))[_0x49292f(0x1e7)](curStep),
    x > 0x0 &&
      ($(progressbar[x])[_0x49292f(0x21f)](_0x49292f(0x1bb)),
      selections["filter"]((_0x4091b8) => _0x4091b8[_0x49292f(0x1a5)] === x)[
        _0x49292f(0x1d2)
      ] > 0x0
        ? (x = parseInt(
            getSafe(
              () =>
                selections["filter"](
                  (_0x2526da) => _0x2526da[_0x49292f(0x1a5)] === x
                )[0x0][_0x49292f(0x1c6)]
            )
          ))
        : x--,
      updateStep());
}
function selectionQuiz() {
  const _0x71d0cd = _0x59c807;
  if ($(this)[_0x71d0cd(0x17b)]("[data-btn=\x22check\x22]")) {
    $("[data-selection]")[_0x71d0cd(0x207)]();
    if (selectMultiple) {
      let _0x4d2fb9 = 0x0;
      selArr[_0x71d0cd(0x200)](function (_0x4121db) {
        _0x4d2fb9 = _0x4d2fb9 + _0x4121db["selected"];
      }),
        $(_0x71d0cd(0x1b7) + _0x4d2fb9 + "\x22]")[_0x71d0cd(0x21b)]("selection")
          ? $(_0x71d0cd(0x1b7) + _0x4d2fb9 + "\x22]")["fadeIn"]()
          : $(_0x71d0cd(0x196))[_0x71d0cd(0x1f7)]();
    } else
      $(_0x71d0cd(0x1b7) + selString + "\x22]")[_0x71d0cd(0x21b)]("selection")
        ? $(_0x71d0cd(0x1b7) + selString + "\x22]")["fadeIn"]()
        : $(_0x71d0cd(0x196))[_0x71d0cd(0x1f7)]();
  }
}
$(_0x59c807(0x1d4))["on"]("click", function () {
  scrollTop(), (next = !![]), (back = ![]), nextStep(), selectionQuiz();
}),
  $(_0x59c807(0x206))["on"](_0x59c807(0x15f), function () {
    const _0x39c80f = _0x59c807;
    scrollTop(),
      (next = ![]),
      (back = !![]),
      back &&
        logicExtra &&
        ($(_0x39c80f(0x1df))[_0x39c80f(0x164)](_0x39c80f(0x1d1), ![]),
        $(_0x39c80f(0x1df))
          [_0x39c80f(0x1aa)](".w-form-formradioinput")
          [_0x39c80f(0x21f)](_0x39c80f(0x1c1))),
      backStep(),
      (back = ![]);
  }),
  $(steps)
    ["find"](_0x59c807(0x211))
    ["on"](_0x59c807(0x1d3), function (_0x5cdbcf) {
      validation();
    }),
  $(steps)["find"](_0x59c807(0x17c))["on"](_0x59c807(0x15f), validation());
$(_0x59c807(0x1ef))[_0x59c807(0x21b)](_0x59c807(0x1af))
  ? $("[data-form=\x22custom-progress-indicator\x22]")["removeClass"](
      _0x59c807(0x20b)
    )
  : $("[data-form=\x22custom-progress-indicator\x22]")[_0x59c807(0x148)](
      "disabled"
    );
function _0x5a84() {
  const _0x2ecce0 = [
    "card",
    "[data-btn=\x22edit\x22]",
    "readystatechange",
    "[data-selected]:checked",
    "[data-memory]",
    "radio",
    "required",
    "init",
    "go-to",
    "clone",
    "[data-form=\x22submit-btn\x22]",
    "[data-form=\x22step\x22]",
    "keyCode",
    "[data-text=\x22current-step\x22]",
    ":input[required]",
    "input[type=\x22checkbox\x22]:visible",
    "textarea",
    "[type=\x22checkbox\x22]",
    ":input[type=\x22number\x22][required]",
    "click",
    ":input[type=\x22text\x22][required]",
    "delete",
    "textarea[autofocus]",
    "block-domain",
    "prop",
    "selected",
    "clickable",
    "set",
    "require",
    "[data-reinit]",
    "[data-go-to]",
    "[data-success-card=\x22",
    "keypress",
    "form[data-form=\x22multistep\x22]\x20:input",
    "input[value=\x22",
    ":input[type=\x27radio\x27]:checked",
    "edit-step",
    "input:checkbox",
    "nonvalidated",
    ".w-checkbox-input",
    "name",
    "shiftKey",
    "[data-form=\x22step\x22]:not([data-card=\x22true\x22])",
    "filledInput",
    ":input[type=\x22tel\x22][required]",
    ":input[type=\x22checkbox\x22]",
    "show",
    "find",
    ":radio",
    "56MdVnLT",
    "249016vqSiNf",
    "logic-extra",
    "[data-form=\x22submit\x22]:visible",
    ":input[type=\x22number\x22]",
    ":input[type=\x22file\x22][required]",
    "log",
    "append",
    "data-radio-delay",
    "not",
    "[data-form=\x22custom-progress-indicator\x22]",
    "parse",
    "\x22]:checked",
    "data-go-to",
    "10ByJDPV",
    "each",
    "[data-radio-skip]:visible",
    "replaceState",
    "keydown",
    "split",
    "index",
    "textarea[name=\x22",
    "306AEqLob",
    "[data-custom-error-message]",
    "3842610GHgzIR",
    "[data-selection=\x22other\x22]",
    "focus",
    "[data-skip-to]",
    "value",
    "remove",
    "removeItem",
    "type",
    "wait",
    ":checked",
    "step",
    "novalidate",
    "[data-form=\x22submit-btn\x22]:visible",
    "Enter",
    "submit-show",
    "select[required]:visible",
    "skipTo",
    "[data-selected-multiple]",
    "getItem",
    "query-param",
    "[data-cms-select=text]",
    "siblings",
    "input[type=\x22submit\x22]",
    "[data-query-param]",
    "radio-skip",
    "Webflow",
    "clickable-all",
    "textarea[required]:visible",
    "[data-clickable]",
    "push",
    "[data-quiz]",
    "reset",
    "data-radio-skip",
    "children",
    "[data-selection=\x22",
    "select[required]",
    "metaKey",
    "input[type=\x22email\x22]:visible",
    "current",
    "[data-form=\x22next-btn\x22][data-submit-show]",
    "[data-form=\x22step\x22][data-card]",
    "preventDefault",
    "[data-text=\x22total-steps\x22]",
    "Please\x20wait...",
    "w--redirected-checked",
    ":input[type=\x22email\x22]",
    "[data-form=\x22progress\x22]",
    "ix2",
    "css",
    "backTo",
    "enter",
    "searchParams",
    "back",
    "debug\x20mode",
    "slow",
    "findIndex",
    "0.4",
    "[data-btn=\x22reset\x22]",
    "<br>Data\x20Answer\x20=\x20",
    "attr",
    "checked",
    "length",
    "input",
    "[data-form=\x22next-btn\x22]",
    "<option>",
    "[data-enter]",
    "105oeEPqO",
    "skip-to",
    "[data-answer]",
    "none",
    "history",
    "inputName",
    "5024538IgEtVs",
    "redirect",
    "input[type=\x22radio\x22]",
    "[data-answer]:visible",
    "input[autofocus]",
    "location",
    "checkbox",
    "quiz",
    "[data-answer=\x22",
    "input[name=\x22",
    "text",
    "select",
    "stopPropagation",
    "https://webflow.com/api/v1/form/",
    "key",
    "parents",
    "reinit",
    ":input[type=\x22email\x22][required]",
    "[data-clickable-all]",
    ".w-form-done",
    "data-skip-to",
    "data-multistep-redirect",
    "741942giFOQc",
    "ctrlKey",
    "setItem",
    "[data-radio-delay]",
    "fadeIn",
    "input:radio[name=\x22",
    ":input[type=\x22file\x22]",
    "url",
    "body",
    ":input[type=\x22radio\x22][required]",
    "[data-form=\x22multistep\x22]",
    "option[value=\x22",
    "multistep-redirect",
    "forEach",
    "[data-count-card]",
    "\x22][value=\x22",
    "[data-answer][data-radio-skip]:visible",
    "redirect-form-hehexd",
    "val",
    "[data-form=\x22back-btn\x22]",
    "hide",
    "[type=\x22radio\x22]",
    "auto",
    "11257ETrwDb",
    "disabled",
    "ajaxComplete",
    "includes",
    ".w-radio-input",
    "filter",
    "radio\x20skip\x20true",
    ":input",
    "trim",
    "input[type=\x22text\x22][required]:visible",
    ":input[type=\x22checkbox\x22]:checked",
    "[data-cms-select=cms]",
    "[data-form=\x22progress-indicator\x22]",
    "[data-form=\x22next-btn\x22][type=\x22submit\x22]",
    "button",
    "5741855nOiAUj",
    "2938463hXDduJ",
    "data",
    "radio-delay",
    "selected-multiple",
    "<br>Data\x20Go\x20To\x20=\x20",
    "removeClass",
    "addClass",
    "some",
    "trigger",
    ":input[type=\x22radio\x22]",
  ];
  _0x5a84 = function () {
    return _0x2ecce0;
  };
  return _0x5a84();
}
function clickableIndicator() {
  const _0x36dadb = _0x59c807;
  $(_0x36dadb(0x216))["removeClass"](_0x36dadb(0x1bb)),
    $(_0x36dadb(0x1b1))[_0x36dadb(0x21b)]("clickable") &&
      ($("[data-clickable]")[_0x36dadb(0x21b)]("clickable-all")
        ? ((x = $(this)[_0x36dadb(0x191)]()), updateStep())
        : $(this)[_0x36dadb(0x191)]() <= progress &&
          ((x = $(this)[_0x36dadb(0x191)]()), updateStep()));
}
$(_0x59c807(0x187))["on"](_0x59c807(0x15f), clickableIndicator);
$(_0x59c807(0x1fd))["data"]("debug-mode") &&
  (console[_0x59c807(0x183)](_0x59c807(0x1ca)),
  $(_0x59c807(0x16a))[_0x59c807(0x18c)](function () {
    const _0x1869f1 = _0x59c807;
    $(this)[_0x1869f1(0x184)](
      _0x1869f1(0x21e),
      $(this)[_0x1869f1(0x21b)](_0x1869f1(0x154))
    );
  }),
  $(_0x59c807(0x1d9))["each"](function () {
    const _0xed242c = _0x59c807;
    $(this)[_0xed242c(0x184)](_0xed242c(0x1cf), $(this)["data"]("answer"));
  }));
$(_0x59c807(0x156))["on"]("click", function (_0x3bb0bd) {
  const _0x470f56 = _0x59c807;
  $(this)[_0x470f56(0x21b)](_0x470f56(0x1de)) &&
    $(_0x470f56(0x1fd))["attr"](
      _0x470f56(0x1f2),
      $(this)[_0x470f56(0x21b)](_0x470f56(0x1de))
    ),
    (successCard = $(this)[_0x470f56(0x21b)]("success")),
    _0x3bb0bd["preventDefault"](),
    _0x3bb0bd[_0x470f56(0x1e9)](),
    logicExtra &&
      ($(this)[_0x470f56(0x164)](_0x470f56(0x1a0), !![]),
      $(steps)
        ["find"](_0x470f56(0x211))
        [_0x470f56(0x164)](_0x470f56(0x152), ![]),
      console[_0x470f56(0x183)](_0x470f56(0x172))),
    $(_0x470f56(0x215))["each"](function () {
      const _0x257e92 = _0x470f56,
        _0x19e28a = $(this)["find"](_0x257e92(0x1a9)),
        _0x5182e6 = [];
      console[_0x257e92(0x183)](_0x5182e6),
        _0x19e28a["each"](function () {
          const _0x3dc84b = _0x257e92;
          _0x5182e6[_0x3dc84b(0x1b2)](
            $(this)[_0x3dc84b(0x1e7)]()[_0x3dc84b(0x212)]()
          );
        });
      const _0x2e5432 = $(this)[_0x257e92(0x1aa)]("[data-cms-select=input]");
      $["each"](_0x5182e6, function (_0xfd3375, _0x3d96f4) {
        const _0x2959f3 = _0x257e92,
          _0x30106f = $(_0x2959f3(0x1d5))
            [_0x2959f3(0x205)](_0x3d96f4)
            [_0x2959f3(0x1e7)](_0x3d96f4);
        _0x2e5432[_0x2959f3(0x184)](_0x30106f);
      });
    }),
    localStorage[_0x470f56(0x19b)]("filledInput"),
    fill &&
      ($(this)["data"](_0x470f56(0x19d))
        ? $(this)[_0x470f56(0x205)]($(this)["data"](_0x470f56(0x19d)))
        : ($(this)["val"]("Please\x20wait..."),
          $(this)["text"](_0x470f56(0x1c0))),
      $(_0x470f56(0x1fd))["submit"]());
});
function resetFormly() {
  const _0x34dcab = _0x59c807;
  $(_0x34dcab(0x1fd))[_0x34dcab(0x14a)](_0x34dcab(0x1b4)),
    $("[data-form=\x22multistep\x22]")
      [_0x34dcab(0x1ec)]()
      [_0x34dcab(0x17b)](_0x34dcab(0x1f0))
      ["hide"](),
    (x = 0x0),
    updateStep(),
    $(_0x34dcab(0x1fd))[_0x34dcab(0x17a)](),
    $(_0x34dcab(0x156))[_0x34dcab(0x1e7)](oldSubmitText),
    $(_0x34dcab(0x156))["val"](oldSubmitText),
    $(_0x34dcab(0x159))[_0x34dcab(0x1e7)](0x1),
    $("[data-form=\x22multistep\x22]")
      [_0x34dcab(0x17b)](_0x34dcab(0x171))
      [_0x34dcab(0x1aa)](_0x34dcab(0x173))
      [_0x34dcab(0x21f)]("w--redirected-checked");
}
$(document)[_0x59c807(0x20c)](function (_0xd1f508, _0x10a634, _0x1b3e91) {
  const _0x33ac21 = _0x59c807;
  if (_0x1b3e91[_0x33ac21(0x1fa)][_0x33ac21(0x20d)](_0x33ac21(0x1ea))) {
    const _0x331e81 = _0x10a634["status"] === 0xc8,
      _0x552001 = _0x33ac21(0x204),
      _0x44e643 = $(this)[_0x33ac21(0x21b)](_0x33ac21(0x1ff));
    console[_0x33ac21(0x183)](_0x331e81),
      console[_0x33ac21(0x183)](_0x44e643),
      _0x44e643 && _0x331e81 && (window[_0x33ac21(0x1e2)] = _0x44e643),
      console["log"](successCard),
      _0x331e81 &&
        successCard !== "" &&
        $(_0x33ac21(0x16b) + successCard + "\x22]")[_0x33ac21(0x1f7)](),
      _0x331e81 &&
        formReset &&
        setTimeout(() => {
          resetFormly;
        }, 0x1f4);
  }
}),
  $(_0x59c807(0x14d))["on"](_0x59c807(0x15f), function () {
    const _0xab9686 = _0x59c807;
    (back = !![]),
      (x = $(this)["data"](_0xab9686(0x170)) - 0x1),
      updateStep(),
      (back = ![]);
  }),
  $("[data-btn=\x22reset\x22]")["on"](_0x59c807(0x15f), function () {
    const _0x1d07c1 = _0x59c807;
    $(_0x1d07c1(0x1fd))[_0x1d07c1(0x14a)](_0x1d07c1(0x1b4));
    let _0x4e1dbc = $(this);
    $(this)[_0x1d07c1(0x1e7)]("Please\x20wait..."),
      setTimeout(function () {
        const _0x3a8c58 = _0x1d07c1;
        $(_0x4e1dbc)[_0x3a8c58(0x1e7)](oldResetText),
          $(_0x4e1dbc)[_0x3a8c58(0x1ec)](_0x3a8c58(0x1f0))[_0x3a8c58(0x207)](),
          (x = 0x0),
          updateStep(),
          $(_0x3a8c58(0x1fd))[_0x3a8c58(0x17a)](),
          $(_0x3a8c58(0x156))[_0x3a8c58(0x1e7)](oldSubmitText),
          $(_0x3a8c58(0x156))[_0x3a8c58(0x205)](oldSubmitText),
          $(_0x4e1dbc)["val"](oldSubmitText),
          $(_0x3a8c58(0x159))["text"](0x1),
          $(_0x3a8c58(0x1fd))
            ["find"](_0x3a8c58(0x171))
            [_0x3a8c58(0x1aa)](".w-checkbox-input")
            [_0x3a8c58(0x21f)](_0x3a8c58(0x1c1));
      }, 0x3e8);
  }),
  $("body")["on"](_0x59c807(0x16c), function (_0x34abc5) {
    const _0x5cab2d = _0x59c807;
    _0x34abc5[_0x5cab2d(0x158)] === 0xd &&
      fill &&
      ($(_0x5cab2d(0x1d6))["data"](_0x5cab2d(0x1c7))
        ? (parseFloat($(_0x5cab2d(0x1bf))["text"]()) >
            parseFloat($(_0x5cab2d(0x159))[_0x5cab2d(0x1e7)]()) &&
            $(_0x5cab2d(0x1d4))[0x0]["click"](),
          _0x34abc5[_0x5cab2d(0x1be)](),
          _0x34abc5["stopPropagation"]())
        : (_0x34abc5[_0x5cab2d(0x1be)](), _0x34abc5[_0x5cab2d(0x1e9)]()));
  }),
  $(_0x59c807(0x1fb))[_0x59c807(0x18f)](function (_0x20b41c) {
    const _0x3a3823 = _0x59c807;
    (_0x20b41c[_0x3a3823(0x1b9)] || _0x20b41c[_0x3a3823(0x1f4)]) &&
      _0x20b41c[_0x3a3823(0x158)] == 0xd &&
      (x >= steps[_0x3a3823(0x1d2)] - 0x1 && fill
        ? $(steps[x])[_0x3a3823(0x17b)](_0x3a3823(0x1a1))[_0x3a3823(0x15f)]()
        : (event[_0x3a3823(0x1be)](), event[_0x3a3823(0x1e9)]()));
  }),
  $(_0x59c807(0x15c))[_0x59c807(0x16c)](function (_0x41e8bd) {
    const _0x5054cf = _0x59c807;
    $(this)["focus"](),
      _0x41e8bd[_0x5054cf(0x1eb)] == _0x5054cf(0x1a2) &&
        (_0x41e8bd[_0x5054cf(0x1be)](), _0x41e8bd[_0x5054cf(0x1e9)]()),
      _0x41e8bd[_0x5054cf(0x175)] &&
        _0x41e8bd[_0x5054cf(0x1eb)] == _0x5054cf(0x1a2) &&
        $(this)[_0x5054cf(0x205)]($(this)[_0x5054cf(0x205)]() + "\x0a");
  }),
  updateStep();
