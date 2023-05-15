//15-5-23 Update

const _0x9656c8 = _0x2079;
(function (_0x7a051d, _0x20ab1a) {
  const _0x3ae7e3 = _0x2079,
    _0x362540 = _0x7a051d();
  while (!![]) {
    try {
      const _0x4de16f =
        parseInt(_0x3ae7e3(0x93)) / 0x1 +
        (parseInt(_0x3ae7e3(0x162)) / 0x2) * (parseInt(_0x3ae7e3(0xc4)) / 0x3) +
        parseInt(_0x3ae7e3(0x128)) / 0x4 +
        (-parseInt(_0x3ae7e3(0xf0)) / 0x5) *
          (parseInt(_0x3ae7e3(0x14a)) / 0x6) +
        (parseInt(_0x3ae7e3(0xcf)) / 0x7) * (parseInt(_0x3ae7e3(0x8f)) / 0x8) +
        -parseInt(_0x3ae7e3(0xc3)) / 0x9 +
        parseInt(_0x3ae7e3(0x83)) / 0xa;
      if (_0x4de16f === _0x20ab1a) break;
      else _0x362540["push"](_0x362540["shift"]());
    } catch (_0x5ae32b) {
      _0x362540["push"](_0x362540["shift"]());
    }
  }
})(_0x4ba8, 0x9bf8f);
let x = 0x0,
  curStep = 0x0,
  steps = $(_0x9656c8(0x10f)),
  progressbarClone = $(_0x9656c8(0xca))[_0x9656c8(0xf4)](),
  progressbar,
  countCard = !![],
  weightedSelection = $("[data-weighted-selection]")["data"](_0x9656c8(0x15e)),
  selectMultiple = $("[data-select-multiple]")[_0x9656c8(0x82)](
    _0x9656c8(0x143)
  ),
  customError = $(_0x9656c8(0x99))[_0x9656c8(0x82)](_0x9656c8(0x14e)),
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
  reinitIX = $(_0x9656c8(0x135))[_0x9656c8(0x82)]("reinit"),
  textareaLength = 0x0,
  textInputLength = 0x0,
  emailInputLength = 0x0,
  selectInputLength = 0x0,
  checkboxInputLength = 0x0,
  filledInput = [],
  savedFilledInput = JSON[_0x9656c8(0xfc)](
    localStorage[_0x9656c8(0x114)]("filledInput")
  ),
  memory = $(_0x9656c8(0xcc))[_0x9656c8(0x82)](_0x9656c8(0x130)),
  quiz = $(_0x9656c8(0xef))[_0x9656c8(0x82)](_0x9656c8(0x153)),
  progress = 0x0;
const urlFormly = new URL(window[_0x9656c8(0xb1)][_0x9656c8(0xdb)]);
let params = $("[data-query-param]")[_0x9656c8(0x82)](_0x9656c8(0x11e)),
  skipTo = 0x0,
  next = ![],
  back = ![],
  selArr = [],
  selString = [],
  emptyInput = 0x0,
  searchQ = [],
  domainAllowed = !![],
  dom = [],
  logicExtra = $(_0x9656c8(0xa5))[_0x9656c8(0x82)](_0x9656c8(0x13e)),
  oldSubmitText = $(_0x9656c8(0xd5))["val"](),
  oldResetText = $(_0x9656c8(0x14f))[_0x9656c8(0x15c)](),
  formReset = $(_0x9656c8(0xa5))[_0x9656c8(0x82)](_0x9656c8(0xe5)),
  successCard = "",
  redirectTo = "",
  totalSteps = 0x0;
var checkCount = 0x0;
let resetDelay = $(_0x9656c8(0x92))[_0x9656c8(0x82)](_0x9656c8(0xac))
    ? $(_0x9656c8(0x92))[_0x9656c8(0x82)]("reset-delay")
    : 0x7d0,
  redirectDelay = $(_0x9656c8(0x145))[_0x9656c8(0x82)](_0x9656c8(0x10d))
    ? $(_0x9656c8(0x145))[_0x9656c8(0x82)]("redirect-delay")
    : 0x7d0,
  newTab = !![],
  unfilledArr = [];
all_data = [];
$(_0x9656c8(0xd6))["length"] > 0x0 &&
  (countCard = $(_0x9656c8(0xd6))[_0x9656c8(0x82)](_0x9656c8(0x84)));
$(_0x9656c8(0x108))["hide"](),
  $(progressbarClone)[_0x9656c8(0xd4)](_0x9656c8(0x112)),
  $(_0x9656c8(0x160))[_0x9656c8(0xbb)]()[_0x9656c8(0x113)](),
  $("[data-form=\x22submit-btn\x22]")["hide"](),
  steps[_0x9656c8(0xf1)](function () {
    const _0x8d4391 = _0x9656c8;
    $(_0x8d4391(0x160))["append"](
      progressbarClone[_0x8d4391(0xf4)](!![], !![])
    );
  }),
  $(_0x9656c8(0x154))["hide"]();
countCard
  ? ((curStep = curStep + 0x1),
    (totalSteps = steps[_0x9656c8(0x13f)]),
    $(_0x9656c8(0xa4))[_0x9656c8(0x15c)](totalSteps))
  : ($(steps[x])[_0x9656c8(0x82)](_0x9656c8(0x131))
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    (totalSteps = $(_0x9656c8(0x103))[_0x9656c8(0x13f)]),
    $("[data-text=\x22total-steps\x22]")[_0x9656c8(0x15c)](totalSteps),
    $(_0x9656c8(0xd1))[_0x9656c8(0xf1)](function () {
      const _0x2e768d = _0x9656c8;
      $($(_0x2e768d(0xca))[$(this)[_0x2e768d(0x87)]()])["hide"]();
    }));
(progressbar = $(_0x9656c8(0x160))[_0x9656c8(0xbb)]()),
  $(_0x9656c8(0xca))["on"](_0x9656c8(0x155), clickableIndicator),
  $("[data-text=\x22current-step\x22]")[_0x9656c8(0x15c)](curStep),
  steps[_0x9656c8(0xea)](),
  $(_0x9656c8(0xb5))[_0x9656c8(0xea)](),
  $(_0x9656c8(0xce))[_0x9656c8(0xf1)](function () {
    const _0x48ddb3 = _0x9656c8;
    $(this)[_0x48ddb3(0x11d)]("type", _0x48ddb3(0xc2));
  });
function getParams() {
  const _0x405839 = _0x9656c8;
  urlFormly[_0x405839(0xdf)][_0x405839(0x105)](function (_0x4fc877, _0xe3ad10) {
    searchQ["push"]({ val: _0x4fc877, key: _0xe3ad10 });
  });
}
function getSafe(_0xaae904, _0x328cec) {
  try {
    return _0xaae904();
  } catch (_0x4ce26e) {
    return _0x328cec;
  }
}
savedFilledInput &&
  memory &&
  savedFilledInput[_0x9656c8(0x105)]((_0x3654e4) => {
    const _0x231520 = _0x9656c8;
    if (
      $(
        _0x231520(0x141) +
          _0x3654e4[_0x231520(0x8d)] +
          _0x231520(0x12d) +
          _0x3654e4[_0x231520(0x7f)] +
          "\x22]"
      )[_0x231520(0x11d)](_0x231520(0x126)) === _0x231520(0x119)
    )
      $(
        "input[name=\x22" +
          _0x3654e4[_0x231520(0x8d)] +
          _0x231520(0x12d) +
          _0x3654e4["value"] +
          "\x22]"
      )[_0x231520(0x155)](),
        $(
          _0x231520(0x141) +
            _0x3654e4[_0x231520(0x8d)] +
            _0x231520(0x12d) +
            _0x3654e4[_0x231520(0x7f)] +
            "\x22]"
        )
          [_0x231520(0x10e)](".w-radio-input")
          [_0x231520(0xda)](_0x231520(0x144));
    else
      _0x3654e4[_0x231520(0x7f)] === "on"
        ? ($("input[name=\x22" + _0x3654e4[_0x231520(0x8d)] + "\x22]")[
            _0x231520(0x155)
          ](),
          $(_0x231520(0x141) + _0x3654e4["inputName"] + "\x22]")
            [_0x231520(0x10e)](_0x231520(0x129))
            ["addClass"](_0x231520(0x144)))
        : ($(_0x231520(0x141) + _0x3654e4["inputName"] + "\x22]")[
            _0x231520(0xab)
          ](_0x3654e4[_0x231520(0x7f)]),
          $("textarea[name=\x22" + _0x3654e4["inputName"] + "\x22]")[
            _0x231520(0xab)
          ](_0x3654e4[_0x231520(0x7f)]),
          $(_0x231520(0x121) + _0x3654e4["inputName"] + "\x22]")
            [_0x231520(0x14d)](
              "option[value=\x22" + _0x3654e4[_0x231520(0x7f)] + "\x22]"
            )
            [_0x231520(0x88)](_0x231520(0x102), !![]));
  });
params &&
  (getParams(),
  searchQ[_0x9656c8(0x105)]((_0x5046c6) => {
    const _0x2cc5a1 = _0x9656c8;
    if (
      $(
        _0x2cc5a1(0x141) +
          _0x5046c6[_0x2cc5a1(0x13b)] +
          "\x22][value=\x22" +
          _0x5046c6[_0x2cc5a1(0xab)] +
          "\x22]"
      )[_0x2cc5a1(0x11d)]("type") === "radio"
    )
      $(
        _0x2cc5a1(0x141) +
          _0x5046c6["key"] +
          _0x2cc5a1(0x12d) +
          _0x5046c6["val"] +
          "\x22]"
      )[_0x2cc5a1(0x155)](),
        $(
          "input[name=\x22" +
            _0x5046c6["key"] +
            _0x2cc5a1(0x12d) +
            _0x5046c6[_0x2cc5a1(0xab)] +
            "\x22]"
        )
          [_0x2cc5a1(0x10e)](_0x2cc5a1(0x81))
          [_0x2cc5a1(0xda)](_0x2cc5a1(0x144)),
        $(
          _0x2cc5a1(0x141) +
            _0x5046c6[_0x2cc5a1(0x13b)] +
            _0x2cc5a1(0x12d) +
            _0x5046c6[_0x2cc5a1(0xab)] +
            "\x22]"
        )[_0x2cc5a1(0x106)](_0x2cc5a1(0x156));
    else
      _0x5046c6["val"] === "on"
        ? ($(_0x2cc5a1(0x141) + _0x5046c6[_0x2cc5a1(0x13b)] + "\x22]")[
            _0x2cc5a1(0x155)
          ](),
          $(_0x2cc5a1(0x141) + _0x5046c6[_0x2cc5a1(0x13b)] + "\x22]")
            ["siblings"](".w-checkbox-input")
            [_0x2cc5a1(0xda)](_0x2cc5a1(0x144)),
          $(_0x2cc5a1(0x141) + _0x5046c6[_0x2cc5a1(0x13b)] + "\x22]")[
            _0x2cc5a1(0x106)
          ]("input"))
        : ($(_0x2cc5a1(0x141) + _0x5046c6[_0x2cc5a1(0x13b)] + "\x22]")[
            _0x2cc5a1(0xab)
          ](_0x5046c6["val"]),
          $(_0x2cc5a1(0x147) + _0x5046c6[_0x2cc5a1(0x13b)] + "\x22]")["val"](
            _0x5046c6[_0x2cc5a1(0xab)]
          ),
          $(_0x2cc5a1(0x121) + _0x5046c6["key"] + "\x22]")
            [_0x2cc5a1(0x14d)](
              _0x2cc5a1(0x148) + _0x5046c6[_0x2cc5a1(0xab)] + "\x22]"
            )
            [_0x2cc5a1(0x88)](_0x2cc5a1(0x102), !![]),
          $(_0x2cc5a1(0x141) + _0x5046c6["key"] + "\x22]")["trigger"](
            _0x2cc5a1(0x156)
          ),
          $(_0x2cc5a1(0x141) + _0x5046c6[_0x2cc5a1(0x13b)] + "\x22]")[
            "trigger"
          ](_0x2cc5a1(0x104)));
  }));
quiz &&
  steps[_0x9656c8(0xf1)](function () {
    const _0x3bf7ae = _0x9656c8;
    $(this)[_0x3bf7ae(0xbb)]()[_0x3bf7ae(0x11d)](_0x3bf7ae(0x11c), !![]),
      $(this)["children"]()[_0x3bf7ae(0x11d)](_0x3bf7ae(0xf7), 0xfa);
  });
function disableBtn(_0x1435af) {
  const _0x57a8c4 = _0x9656c8;
  (fill = ![]),
    !customError &&
      ($(_0x57a8c4(0x136))[_0x57a8c4(0xc8)]({
        opacity: _0x57a8c4(0x13d),
        "pointer-events": _0x57a8c4(0x127),
      }),
      $(_0x57a8c4(0x136))[_0x57a8c4(0xda)]("disabled"),
      $(_0x57a8c4(0xd5))[_0x57a8c4(0xc8)]({
        opacity: "0.4",
        "pointer-events": _0x57a8c4(0x127),
      }),
      $(_0x57a8c4(0xd5))[_0x57a8c4(0xda)](_0x57a8c4(0x152)));
}
function enableBtn() {
  const _0x5744df = _0x9656c8;
  (fill = !![]),
    $("[data-form=\x22next-btn\x22]")[_0x5744df(0xc8)]({
      "pointer-events": _0x5744df(0x115),
      opacity: "1",
    }),
    $(_0x5744df(0x136))[_0x5744df(0xd4)](_0x5744df(0x152)),
    $(_0x5744df(0xd5))[_0x5744df(0xc8)]({
      "pointer-events": _0x5744df(0x115),
      opacity: "1",
    }),
    $(_0x5744df(0xd5))[_0x5744df(0xd4)](_0x5744df(0x152));
}
function saveFilledInput() {
  const _0x220602 = _0x9656c8;
  $(_0x220602(0xc0))
    [_0x220602(0x107)](_0x220602(0x122))
    [_0x220602(0xf1)](function () {
      const _0x1482d9 = _0x220602;
      $(this)[_0x1482d9(0x11d)](_0x1482d9(0x126)) === _0x1482d9(0xfe) ||
      $(this)["attr"](_0x1482d9(0x126)) === _0x1482d9(0x119)
        ? $(this)[_0x1482d9(0x88)](_0x1482d9(0xa1)) &&
          (filledInput["some"](
            (_0x1204cc) =>
              _0x1204cc[_0x1482d9(0x8d)] ===
              $(this)[_0x1482d9(0x11d)](_0x1482d9(0xfd))
          )
            ? ((filledInput = filledInput[_0x1482d9(0xa3)](
                (_0x17ca3b) =>
                  _0x17ca3b[_0x1482d9(0x8d)] !==
                  $(this)[_0x1482d9(0x11d)](_0x1482d9(0xfd))
              )),
              $(this)[_0x1482d9(0xab)]() !== "" &&
                filledInput[_0x1482d9(0x12e)]({
                  inputName: $(this)["attr"](_0x1482d9(0xfd)),
                  value: $(this)[_0x1482d9(0xab)](),
                }))
            : $(this)["val"]() !== "" &&
              filledInput[_0x1482d9(0x12e)]({
                inputName: $(this)[_0x1482d9(0x11d)](_0x1482d9(0xfd)),
                value: $(this)[_0x1482d9(0xab)](),
              }))
        : filledInput[_0x1482d9(0xdc)](
            (_0x237177) =>
              _0x237177[_0x1482d9(0x8d)] === $(this)["attr"](_0x1482d9(0xfd))
          )
        ? ((filledInput = filledInput["filter"](
            (_0x4016ae) =>
              _0x4016ae[_0x1482d9(0x8d)] !==
              $(this)[_0x1482d9(0x11d)](_0x1482d9(0xfd))
          )),
          $(this)[_0x1482d9(0xab)]() !== "" &&
            filledInput[_0x1482d9(0x12e)]({
              inputName: $(this)[_0x1482d9(0x11d)](_0x1482d9(0xfd)),
              value: $(this)[_0x1482d9(0xab)](),
            }))
        : $(this)[_0x1482d9(0xab)]() !== "" &&
          filledInput[_0x1482d9(0x12e)]({
            inputName: $(this)[_0x1482d9(0x11d)]("name"),
            value: $(this)[_0x1482d9(0xab)](),
          });
    }),
    filledInput &&
      filledInput[_0x220602(0x105)]((_0x1ea548) => {
        const _0x19504a = _0x220602;
        urlFormly["searchParams"][_0x19504a(0xfb)](_0x1ea548[_0x19504a(0x8d)]),
          urlFormly[_0x19504a(0xdf)][_0x19504a(0x13c)](
            _0x1ea548["inputName"],
            _0x1ea548[_0x19504a(0x7f)]
          ),
          window[_0x19504a(0xaa)][_0x19504a(0x111)](null, null, urlFormly);
      }),
    localStorage[_0x220602(0xe3)](_0x220602(0x161)),
    localStorage["setItem"](_0x220602(0x161), JSON["stringify"](filledInput));
}
function scrollTop() {}
function updateStep() {
  const _0x4671c6 = _0x9656c8;
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
    $(_0x4671c6(0xb0))["removeClass"](_0x4671c6(0x152));
  $(_0x4671c6(0x12b))[_0x4671c6(0x82)](_0x4671c6(0x13a)) &&
    (steps["find"](_0x4671c6(0xc5))[_0x4671c6(0xf1)](function () {
      const _0xf63f88 = _0x4671c6;
      $(
        $(_0xf63f88(0xb0))[
          $(this)[_0xf63f88(0x80)](_0xf63f88(0x10f))[_0xf63f88(0x87)]()
        ]
      ),
        $(this)[_0xf63f88(0xab)]() === "" && emptyInput++;
    }),
    emptyInput > 0x0
      ? $(_0x4671c6(0x151))[_0x4671c6(0xda)]("disabled")
      : $(_0x4671c6(0x151))[_0x4671c6(0xd4)](_0x4671c6(0x152)));
  $(_0x4671c6(0xb0))[_0x4671c6(0xd4)](_0x4671c6(0x112)),
    $(_0x4671c6(0xb0))[_0x4671c6(0xda)](_0x4671c6(0x152)),
    $($(_0x4671c6(0xb0))[x])[_0x4671c6(0xda)](_0x4671c6(0x112)),
    (selection = selections["filter"](
      (_0xf8d8e8) => _0xf8d8e8[_0x4671c6(0x15b)] === x - 0x1
    ));
  next &&
    (x = getSafe(() => selection[0x0][_0x4671c6(0xbd)])
      ? parseInt(getSafe(() => selection[0x0][_0x4671c6(0xbd)]))
      : x);
  $("[data-answer]")[_0x4671c6(0xea)](), steps[_0x4671c6(0xea)]();
  reinitIX === !![] && window[_0x4671c6(0x124)]["destroy"]();
  $(progressbar)[_0x4671c6(0xd4)](_0x4671c6(0x112));
  for (i = 0x0; i <= x; i++) {
    countCard
      ? $(progressbar[i])[_0x4671c6(0xda)](_0x4671c6(0x112))
      : !$(steps[i])[_0x4671c6(0x82)](_0x4671c6(0x131)) &&
        $(progressbar[i])["addClass"](_0x4671c6(0x112));
  }
  reinitIX === !![]
    ? (window[_0x4671c6(0x124)] &&
        window[_0x4671c6(0x124)][_0x4671c6(0xfa)]("ix2")[_0x4671c6(0xf8)](),
      document["dispatchEvent"](new Event(_0x4671c6(0xbe))),
      $(steps[x])["show"]())
    : $(steps[x])[_0x4671c6(0x9a)](_0x4671c6(0xbf));
  x === 0x0 &&
    !$(steps[x])["data"](_0x4671c6(0x131)) &&
    $(steps[x])["find"](_0x4671c6(0x15f))[_0x4671c6(0x85)]();
  selection[_0x4671c6(0x13f)] > 0x0
    ? $(steps[x])
        [_0x4671c6(0x14d)](
          "[data-answer=\x22" + selection[0x0][_0x4671c6(0x102)] + "\x22]"
        )
        ["show"]()
    : $(steps[x])
        ["find"](_0x4671c6(0xe7) + answer + "\x22]")
        [_0x4671c6(0x85)]();
  if (x === 0x0)
    $(_0x4671c6(0xc7))[_0x4671c6(0xea)](),
      $(_0x4671c6(0x136))[_0x4671c6(0x85)]();
  else {
    if (
      x === steps["length"] - 0x1 ||
      $(steps[x])["find"](_0x4671c6(0x10b))[_0x4671c6(0x13f)] > 0x0
    ) {
      $(_0x4671c6(0x136))[_0x4671c6(0xea)]();
      if (
        $(steps[x])[_0x4671c6(0x14d)](_0x4671c6(0xd7))["data"](_0x4671c6(0xa8))
      )
        $(steps[x])[_0x4671c6(0x14d)](_0x4671c6(0xd7))[_0x4671c6(0x85)]();
      else
        $(_0x4671c6(0x136))["data"](_0x4671c6(0xa8)) &&
          $(_0x4671c6(0x136))["show"]();
      $(_0x4671c6(0xd5))["show"](), $("[data-form=\x22back-btn\x22]")["show"]();
    } else
      $(_0x4671c6(0x136))[_0x4671c6(0x85)](),
        $(_0x4671c6(0xc7))[_0x4671c6(0x85)](),
        $(_0x4671c6(0xd5))[_0x4671c6(0xea)]();
  }
  $($(steps[x])[_0x4671c6(0x14d)](_0x4671c6(0x98))[0x0])[_0x4671c6(0x94)](),
    $($(steps[x])["find"](_0x4671c6(0xe8))[0x0])[_0x4671c6(0x94)](),
    validation();
  for (idx = 0x0; idx <= x; idx++) {
    $($(_0x4671c6(0xb0))[idx])[_0x4671c6(0xd4)](_0x4671c6(0x152));
  }
}
function validateEmail(_0x350fdc, _0x229822, _0x44596e) {
  const _0x504e8f = _0x9656c8;
  let _0x561310 = _0x350fdc[_0x504e8f(0xbc)]("@")
    ? _0x350fdc[_0x504e8f(0xf5)]("@")[0x1][_0x504e8f(0xf5)](".")[0x0]
    : [];
  dom = [];
  _0x229822 !== undefined &&
    _0x229822[_0x504e8f(0xf5)](",")[_0x504e8f(0x105)](function (_0x18fe5f) {
      const _0x1cda45 = _0x504e8f;
      _0x18fe5f[_0x1cda45(0xbc)](_0x561310) && dom[_0x1cda45(0x12e)](_0x561310);
    });
  dom["length"] > 0x0 ? (domainAllowed = ![]) : (domainAllowed = !![]);
  var _0x2deb2a = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,20})?$/;
  !_0x2deb2a[_0x504e8f(0xae)](_0x350fdc)
    ? ((emailFilled = ![]), unfilledArr["push"]({ input: _0x44596e }))
    : (emailFilled = !![]);
}
function validation() {
  const _0x3814ae = _0x9656c8;
  $(steps[x])["data"]("card") && enableBtn();
  (unfilledArr = []),
    (textareaLength = $(steps[x])[_0x3814ae(0x14d)](_0x3814ae(0x12a))[
      "length"
    ]),
    (textInputLength = $(steps[x])["find"](_0x3814ae(0xb2))[_0x3814ae(0x13f)]),
    (selectInputLength = $(steps[x])[_0x3814ae(0x14d)](
      "select[required]:visible"
    )[_0x3814ae(0x13f)]),
    (emailInputLength = $(steps[x])[_0x3814ae(0x14d)](_0x3814ae(0xf9))[
      "length"
    ]),
    (checkboxInputLength = $(steps[x])[_0x3814ae(0x14d)](_0x3814ae(0x109))[
      _0x3814ae(0x13f)
    ]);
  textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0
    ? disableBtn()
    : enableBtn();
  checkCount = $(steps[x])[_0x3814ae(0x82)](_0x3814ae(0xfe))
    ? $(steps[x])[_0x3814ae(0x82)](_0x3814ae(0xfe))
    : $(steps[x])["find"]("[data-checkbox]")["length"] > 0x0
    ? $(steps[x])
        [_0x3814ae(0x14d)](_0x3814ae(0xf3))
        [_0x3814ae(0x82)](_0x3814ae(0xfe))
    : 0x0;
  if (!logicExtra)
    $(steps[x])["find"](_0x3814ae(0xcb))["is"]("[type=\x22checkbox\x22]") &&
      (checkCount === "*" ||
      checkCount > $(steps[x])[_0x3814ae(0x14d)](_0x3814ae(0xff))["length"]
        ? $(steps[x])
            [_0x3814ae(0x14d)](":input[type=\x22checkbox\x22]")
            ["each"](function () {
              const _0x26ad0f = _0x3814ae;
              $(this)["is"](_0x26ad0f(0x91))
                ? $(steps[x])[_0x26ad0f(0x14d)](_0x26ad0f(0x140))["length"] <
                    0x1 &&
                  ((checkboxFilled = !![]),
                  resetInputErrorMessage($(this)["attr"](_0x26ad0f(0xfd))))
                : ((checkboxFilled = ![]),
                  unfilledArr["push"]({
                    input: $(this)["attr"](_0x26ad0f(0xfd)),
                  }));
            })
        : $(steps[x])[_0x3814ae(0x14d)](_0x3814ae(0x150))[_0x3814ae(0x13f)] >=
          checkCount
        ? $(steps[x])[_0x3814ae(0x14d)](
            ":input[type=\x22checkbox\x22][required]"
          )[_0x3814ae(0x13f)] > 0x0
          ? $(steps[x])
              ["find"](":input[type=\x22checkbox\x22][required]")
              [_0x3814ae(0xf1)](function () {
                const _0x145142 = _0x3814ae;
                !$(this)["is"](_0x145142(0x91))
                  ? ((checkboxFilled = ![]),
                    unfilledArr[_0x145142(0x12e)]({
                      input: $(this)[_0x145142(0x11d)]("name"),
                    }))
                  : ((checkboxFilled = !![]),
                    $(steps[x])[_0x145142(0x14d)](_0x145142(0x9b))["length"] >=
                      $(steps[x])[_0x145142(0x14d)](_0x145142(0x140))[
                        _0x145142(0x13f)
                      ] &&
                      resetInputErrorMessage(
                        $(steps[x])
                          [_0x145142(0x14d)](_0x145142(0xff))
                          [_0x145142(0x11d)](_0x145142(0xfd))
                      ));
              })
          : ((checkboxFilled = !![]),
            resetInputErrorMessage(
              $(steps[x])
                ["find"](_0x3814ae(0xff))
                [_0x3814ae(0x11d)](_0x3814ae(0xfd))
            ))
        : ((checkboxFilled = ![]),
          $(steps[x])
            [_0x3814ae(0x14d)](_0x3814ae(0x140))
            [_0x3814ae(0xf1)](function () {
              const _0x29894a = _0x3814ae;
              $(this)["not"](_0x29894a(0x91)) &&
                unfilledArr[_0x29894a(0x12e)]({
                  input: $(this)[_0x29894a(0x11d)](_0x29894a(0xfd)),
                });
            }),
          unfilledArr[_0x3814ae(0x12e)]({
            input: $(steps[x])
              [_0x3814ae(0x14d)](_0x3814ae(0xff))
              [_0x3814ae(0x11d)](_0x3814ae(0xfd)),
          }))),
      $(steps[x])
        [_0x3814ae(0x14d)](_0x3814ae(0x14b))
        [_0x3814ae(0xf1)](function (_0x2b65b2) {
          const _0x5d1d80 = _0x3814ae;
          var _0x5c9030 = $(this)[_0x5d1d80(0x11d)](_0x5d1d80(0xfd));
          $(_0x5d1d80(0xc9) + _0x5c9030 + _0x5d1d80(0xf6))[_0x5d1d80(0x13f)] ==
          0x0
            ? (!empReqRadio[_0x5d1d80(0x14d)](
                (_0x4cb5dd) => _0x4cb5dd[_0x5d1d80(0x156)] === _0x2b65b2
              ) && empReqRadio[_0x5d1d80(0x12e)]({ input: _0x2b65b2 }),
              unfilledArr[_0x5d1d80(0x12e)]({
                input: $(this)["attr"](_0x5d1d80(0xfd)),
              }))
            : (empReqRadio = empReqRadio[_0x5d1d80(0xa3)](
                (_0x489434) => _0x489434[_0x5d1d80(0x156)] !== _0x2b65b2
              )),
            empReqRadio[_0x5d1d80(0x13f)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x3814ae(0x8b))
        [_0x3814ae(0xf1)](function (_0x4b0907) {
          const _0x3da54 = _0x3814ae;
          $(this)["val"]() !== ""
            ? (empReqInput = empReqInput["filter"](
                (_0x412ad6) => _0x412ad6["input"] !== _0x4b0907
              ))
            : (!empReqInput[_0x3da54(0x14d)](
                (_0x10da64) => _0x10da64[_0x3da54(0x156)] === _0x4b0907
              ) && empReqInput[_0x3da54(0x12e)]({ input: _0x4b0907 }),
              unfilledArr[_0x3da54(0x12e)]({
                input: $(this)["attr"](_0x3da54(0xfd)),
              })),
            empReqInput[_0x3da54(0x13f)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x3814ae(0x14d)](_0x3814ae(0x12f))
        [_0x3814ae(0xf1)](function (_0x5c84f7) {
          const _0x3fc390 = _0x3814ae;
          $(this)[_0x3fc390(0xab)]() !== ""
            ? (empReqTel = empReqTel["filter"](
                (_0x802c02) => _0x802c02["input"] !== _0x5c84f7
              ))
            : (!empReqTel["find"](
                (_0x21e9b6) => _0x21e9b6["input"] === _0x5c84f7
              ) && empReqTel["push"]({ input: _0x5c84f7 }),
              unfilledArr[_0x3fc390(0x12e)]({
                input: $(this)["attr"](_0x3fc390(0xfd)),
              })),
            empReqTel["length"] === 0x0
              ? (telFilled = !![])
              : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x3814ae(0x14d)](_0x3814ae(0x9d))
        [_0x3814ae(0xf1)](function (_0x272292) {
          const _0x1f541b = _0x3814ae;
          $(this)[_0x1f541b(0xab)]() !== ""
            ? (empReqFile = empReqFile[_0x1f541b(0xa3)](
                (_0x2dbf83) => _0x2dbf83[_0x1f541b(0x156)] !== _0x272292
              ))
            : (!empReqFile[_0x1f541b(0x14d)](
                (_0x233d19) => _0x233d19[_0x1f541b(0x156)] === _0x272292
              ) && empReqFile["push"]({ input: _0x272292 }),
              unfilledArr[_0x1f541b(0x12e)]({
                input: $(this)[_0x1f541b(0x11d)](_0x1f541b(0xfd)),
              })),
            empReqFile["length"] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x3814ae(0x14d)](_0x3814ae(0x137))
        [_0x3814ae(0xf1)](function (_0x4584e8) {
          const _0x1f4a14 = _0x3814ae;
          $(this)[_0x1f4a14(0xab)]() !== ""
            ? (empReqNum = empReqNum[_0x1f4a14(0xa3)](
                (_0x2f7f15) => _0x2f7f15["input"] !== _0x4584e8
              ))
            : (!empReqNum[_0x1f4a14(0x14d)](
                (_0x363cc2) => _0x363cc2["input"] === _0x4584e8
              ) && empReqNum[_0x1f4a14(0x12e)]({ input: _0x4584e8 }),
              unfilledArr[_0x1f4a14(0x12e)]({
                input: $(this)[_0x1f4a14(0x11d)](_0x1f4a14(0xfd)),
              })),
            empReqNum[_0x1f4a14(0x13f)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x3814ae(0x14d)]("select[required]")
        [_0x3814ae(0xf1)](function (_0x4a8c72) {
          const _0x2a2407 = _0x3814ae;
          let _0x3fa35e = $(this)[_0x2a2407(0xab)]();
          _0x3fa35e === "" && (_0x3fa35e = null),
            _0x3fa35e != null
              ? (empReqSelect = empReqSelect["filter"](
                  (_0x358fea) => _0x358fea["input"] !== _0x4a8c72
                ))
              : (!empReqSelect["find"](
                  (_0x35255c) => _0x35255c[_0x2a2407(0x156)] === _0x4a8c72
                ) && empReqSelect[_0x2a2407(0x12e)]({ input: _0x4a8c72 }),
                unfilledArr[_0x2a2407(0x12e)]({
                  input: $(this)[_0x2a2407(0x11d)](_0x2a2407(0xfd)),
                })),
            empReqSelect[_0x2a2407(0x13f)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x3814ae(0x14d)]("textarea[required]")
        ["each"](function (_0x45c543) {
          const _0xe5dfeb = _0x3814ae;
          $(this)[_0xe5dfeb(0xab)]() !== ""
            ? (empReqTextarea = empReqTextarea[_0xe5dfeb(0xa3)](
                (_0x4fc424) => _0x4fc424["input"] !== _0x45c543
              ))
            : (!empReqTextarea[_0xe5dfeb(0x14d)](
                (_0x19de34) => _0x19de34["input"] === _0x45c543
              ) && empReqTextarea[_0xe5dfeb(0x12e)]({ input: _0x45c543 }),
              unfilledArr[_0xe5dfeb(0x12e)]({
                input: $(this)[_0xe5dfeb(0x11d)](_0xe5dfeb(0xfd)),
              })),
            empReqTextarea["length"] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x3814ae(0xa6))
        [_0x3814ae(0xf1)](function () {
          const _0x5e2ab6 = _0x3814ae;
          $(this)[_0x5e2ab6(0xab)]() !== ""
            ? validateEmail(
                $(this)[_0x5e2ab6(0xab)](),
                $(this)[_0x5e2ab6(0x82)](_0x5e2ab6(0x9f)),
                $(this)[_0x5e2ab6(0x11d)](_0x5e2ab6(0xfd))
              )
            : ((emailFilled = ![]),
              unfilledArr[_0x5e2ab6(0x12e)]({
                input: $(this)[_0x5e2ab6(0x11d)](_0x5e2ab6(0xfd)),
              }));
        });
  else {
    if ($(steps[x])[_0x3814ae(0x82)](_0x3814ae(0x131)))
      (answer = $(steps[x])
        [_0x3814ae(0x14d)](_0x3814ae(0xc6))
        [_0x3814ae(0x82)]("go-to")),
        (selections = selections[_0x3814ae(0xa3)](
          (_0x37b865) => _0x37b865[_0x3814ae(0x15b)] !== x
        )),
        selections[_0x3814ae(0x12e)]({ step: x, selected: answer });
    else
      $(steps[x])
        [_0x3814ae(0x14d)]("[data-answer]:visible")
        ["data"](_0x3814ae(0x131)) &&
        ((answer = $(steps[x])["find"](_0x3814ae(0x9e))["data"]("go-to")),
        (selections = selections["filter"](
          (_0x3b5a3f) => _0x3b5a3f[_0x3814ae(0x15b)] !== x
        )),
        selections["push"]({ step: x, selected: answer }));
    $(steps[x])
      [_0x3814ae(0x14d)](_0x3814ae(0x9e))
      [_0x3814ae(0x14d)](_0x3814ae(0xcb))
      ["is"]("[type=\x22checkbox\x22]") &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])[_0x3814ae(0x14d)](_0x3814ae(0xff))[_0x3814ae(0x13f)]
        ? $(steps[x])
            [_0x3814ae(0x14d)](_0x3814ae(0xff))
            [_0x3814ae(0xf1)](function () {
              const _0x140f08 = _0x3814ae;
              $(this)["is"](_0x140f08(0x91))
                ? $(steps[x])[_0x140f08(0x14d)](":input[required]")[
                    _0x140f08(0x13f)
                  ] < 0x1 &&
                  ((skipTo = undefined),
                  $(this)
                    [_0x140f08(0x80)](_0x140f08(0xeb))
                    ["data"](_0x140f08(0xe9)) &&
                    (skipTo = $(this)
                      [_0x140f08(0x80)]("[data-skip-to]")
                      [_0x140f08(0x82)](_0x140f08(0xe9))),
                  $(this)
                    [_0x140f08(0x80)](_0x140f08(0xc6))
                    [_0x140f08(0x11d)](_0x140f08(0xe1)) &&
                    ((answer = $(this)
                      [_0x140f08(0x80)]("[data-go-to]")
                      [_0x140f08(0x11d)](_0x140f08(0xe1))),
                    (selections = selections["filter"](
                      (_0x54e329) => _0x54e329["step"] !== x
                    )),
                    selections[_0x140f08(0x12e)]({ step: x, selected: answer }),
                    skipTo &&
                      (selections[_0x140f08(0x12e)]({
                        step: skipTo - 0x2,
                        selected: answer,
                      }),
                      (objIndex = selections[_0x140f08(0xb9)](
                        (_0xd4bf6e) => _0xd4bf6e["step"] === x
                      )),
                      (selections[objIndex][_0x140f08(0xbd)] =
                        parseInt(skipTo) - 0x1),
                      (selections[objIndex]["backTo"] = x))),
                  (checkboxFilled = !![]),
                  $(steps[x])[_0x140f08(0x14d)](_0x140f08(0x9b))["length"] >=
                    $(steps[x])["find"](
                      ":input[type=\x22checkbox\x22][required]"
                    )["length"] &&
                    resetInputErrorMessage(
                      $(steps[x])
                        [_0x140f08(0x14d)](_0x140f08(0xff))
                        [_0x140f08(0x11d)](_0x140f08(0xfd))
                    ))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0x140f08(0x12e)]({
                    input: $(this)[_0x140f08(0x11d)](_0x140f08(0xfd)),
                  }));
            })
        : $(steps[x])["find"](_0x3814ae(0x9e))["find"](_0x3814ae(0x150))[
            "length"
          ] >= checkCount
        ? ($(steps[x])
            [_0x3814ae(0x14d)](_0x3814ae(0x9e))
            [_0x3814ae(0x14d)](":input[type=\x22checkbox\x22]:checked")
            [_0x3814ae(0x80)]("[data-go-to]")
            [_0x3814ae(0x11d)](_0x3814ae(0xe1)) &&
            ((skipTo = undefined),
            $(steps[x])
              [_0x3814ae(0x14d)](_0x3814ae(0x9e))
              [_0x3814ae(0x14d)](":input[type=\x22checkbox\x22]:checked")
              [_0x3814ae(0x80)](_0x3814ae(0xeb))
              ["attr"](_0x3814ae(0x110)) &&
              (skipTo = $(steps[x])
                [_0x3814ae(0x14d)](_0x3814ae(0x9e))
                [_0x3814ae(0x14d)](_0x3814ae(0x150))
                [_0x3814ae(0x80)](_0x3814ae(0xeb))
                [_0x3814ae(0x11d)](_0x3814ae(0x110))),
            (answer = $(steps[x])
              [_0x3814ae(0x14d)](_0x3814ae(0x9e))
              [_0x3814ae(0x14d)](_0x3814ae(0x150))
              ["parents"](_0x3814ae(0xc6))
              [_0x3814ae(0x11d)](_0x3814ae(0xe1))),
            (selections = selections[_0x3814ae(0xa3)](
              (_0x5a7ecb) => _0x5a7ecb[_0x3814ae(0x15b)] !== x
            )),
            selections[_0x3814ae(0x12e)]({ step: x, selected: answer }),
            skipTo &&
              (selections["push"]({ step: skipTo - 0x2, selected: answer }),
              (objIndex = selections[_0x3814ae(0xb9)](
                (_0x5251b7) => _0x5251b7[_0x3814ae(0x15b)] === x
              )),
              (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x3814ae(0x89)] = x))),
          (selections = selections["filter"](
            (_0x4c99a2) => _0x4c99a2["step"] !== x
          )),
          selections[_0x3814ae(0x12e)]({ step: x, selected: answer }),
          (checkboxFilled = !![]),
          $(steps[x])[_0x3814ae(0x14d)](_0x3814ae(0x9b))["length"] >=
            $(steps[x])[_0x3814ae(0x14d)](_0x3814ae(0x140))[_0x3814ae(0x13f)] &&
            resetInputErrorMessage(
              $(steps[x])
                [_0x3814ae(0x14d)](_0x3814ae(0xff))
                [_0x3814ae(0x11d)]("name")
            ))
        : ((checkboxFilled = ![]),
          $(steps[x])
            [_0x3814ae(0x14d)](_0x3814ae(0x140))
            [_0x3814ae(0xf1)](function () {
              const _0x33a654 = _0x3814ae;
              $(this)["not"](":checked") &&
                unfilledArr[_0x33a654(0x12e)]({
                  input: $(this)[_0x33a654(0x11d)](_0x33a654(0xfd)),
                });
            }))),
      $(steps[x])
        [_0x3814ae(0x14d)](_0x3814ae(0x9e))
        [_0x3814ae(0x14d)](_0x3814ae(0xc5))
        ["is"](_0x3814ae(0x157))
        ? $(steps[x])
            ["find"](_0x3814ae(0x9e))
            [_0x3814ae(0x14d)](_0x3814ae(0xed))
            ["is"](":checked")
          ? (radioFilled = !![])
          : (radioFilled = ![])
        : (radioFilled = !![]),
      $(steps[x])
        ["find"](_0x3814ae(0x9e))
        ["find"](_0x3814ae(0x8b))
        [_0x3814ae(0xf1)](function (_0x115886) {
          const _0x2086ab = _0x3814ae;
          $(this)[_0x2086ab(0xab)]() !== ""
            ? (empReqInput = empReqInput[_0x2086ab(0xa3)](
                (_0x930dbb) => _0x930dbb[_0x2086ab(0x156)] !== _0x115886
              ))
            : (!empReqInput["find"](
                (_0x1e9df7) => _0x1e9df7[_0x2086ab(0x156)] === _0x115886
              ) && empReqInput[_0x2086ab(0x12e)]({ input: _0x115886 }),
              unfilledArr[_0x2086ab(0x12e)]({
                input: $(this)[_0x2086ab(0x11d)](_0x2086ab(0xfd)),
              })),
            empReqInput[_0x2086ab(0x13f)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x3814ae(0x14d)](_0x3814ae(0x9e))
        [_0x3814ae(0x14d)](_0x3814ae(0xb8))
        [_0x3814ae(0xf1)](function (_0x5c8d6e) {
          const _0x470078 = _0x3814ae;
          (skipTo = undefined),
            $(this)[_0x470078(0x80)](_0x470078(0xeb))["data"]("skip-to") !==
              "" &&
              (skipTo = $(this)
                ["parents"](_0x470078(0xeb))
                [_0x470078(0x82)]("skip-to")),
            $(this)["parents"](_0x470078(0xc6))["attr"]("data-go-to") &&
              ((answer = $(this)
                [_0x470078(0x80)](_0x470078(0xc6))
                [_0x470078(0x11d)](_0x470078(0xe1))),
              (selections = selections[_0x470078(0xa3)](
                (_0x5cffee) => _0x5cffee[_0x470078(0x15b)] !== x
              )),
              selections[_0x470078(0x12e)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections["findIndex"](
                  (_0x4939fe) => _0x4939fe[_0x470078(0x15b)] === x
                )),
                (selections[objIndex][_0x470078(0xbd)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x470078(0x89)] = x)));
        }),
      $(steps[x])
        [_0x3814ae(0x14d)](_0x3814ae(0x9e))
        [_0x3814ae(0x14d)](_0x3814ae(0x137))
        ["each"](function (_0x3545c1) {
          const _0x410f2f = _0x3814ae;
          $(this)[_0x410f2f(0xab)]() !== ""
            ? (empReqNum = empReqNum[_0x410f2f(0xa3)](
                (_0x5c7309) => _0x5c7309[_0x410f2f(0x156)] !== _0x3545c1
              ))
            : (!empReqNum[_0x410f2f(0x14d)](
                (_0x5acc13) => _0x5acc13[_0x410f2f(0x156)] === _0x3545c1
              ) && empReqNum["push"]({ input: _0x3545c1 }),
              unfilledArr[_0x410f2f(0x12e)]({
                input: $(this)[_0x410f2f(0x11d)](_0x410f2f(0xfd)),
              })),
            empReqNum[_0x410f2f(0x13f)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x3814ae(0x14d)](_0x3814ae(0x9e))
        [_0x3814ae(0x14d)](_0x3814ae(0xe0))
        [_0x3814ae(0xf1)](function (_0x196883) {
          const _0x3aa81a = _0x3814ae;
          (skipTo = undefined),
            $(this)
              [_0x3aa81a(0x80)]("[data-skip-to]")
              [_0x3aa81a(0x82)](_0x3aa81a(0xe9)) !== "" &&
              (skipTo = $(this)
                [_0x3aa81a(0x80)]("[data-skip-to]")
                ["data"]("skip-to")),
            $(this)
              [_0x3aa81a(0x80)](_0x3aa81a(0xc6))
              ["attr"](_0x3aa81a(0xe1)) &&
              ((answer = $(this)
                [_0x3aa81a(0x80)](_0x3aa81a(0xc6))
                ["attr"]("data-go-to")),
              (selections = selections[_0x3aa81a(0xa3)](
                (_0x4dd4d7) => _0x4dd4d7[_0x3aa81a(0x15b)] !== x
              )),
              selections[_0x3aa81a(0x12e)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0x3aa81a(0xb9)](
                  (_0xa5f416) => _0xa5f416[_0x3aa81a(0x15b)] === x
                )),
                (selections[objIndex][_0x3aa81a(0xbd)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x3aa81a(0x89)] = x)));
        }),
      $(steps[x])
        [_0x3814ae(0x14d)]("[data-answer]:visible")
        [_0x3814ae(0x14d)](_0x3814ae(0x12f))
        ["each"](function (_0xf2b0d0) {
          const _0x19e3ce = _0x3814ae;
          $(this)[_0x19e3ce(0xab)]() !== ""
            ? (empReqTel = empReqTel[_0x19e3ce(0xa3)](
                (_0x220b4b) => _0x220b4b[_0x19e3ce(0x156)] !== _0xf2b0d0
              ))
            : (!empReqTel[_0x19e3ce(0x14d)](
                (_0x46220a) => _0x46220a[_0x19e3ce(0x156)] === _0xf2b0d0
              ) && empReqTel[_0x19e3ce(0x12e)]({ input: _0xf2b0d0 }),
              unfilledArr[_0x19e3ce(0x12e)]({
                input: $(this)[_0x19e3ce(0x11d)]("name"),
              })),
            empReqTel["length"] === 0x0
              ? (telFilled = !![])
              : (telFilled = ![]);
        }),
      $(steps[x])
        ["find"]("[data-answer]:visible")
        [_0x3814ae(0x14d)](_0x3814ae(0x11f))
        [_0x3814ae(0xf1)](function (_0x54c38) {
          const _0x3f6224 = _0x3814ae;
          (skipTo = undefined),
            $(this)
              [_0x3f6224(0x80)](_0x3f6224(0xeb))
              ["data"](_0x3f6224(0xe9)) !== "" &&
              (skipTo = $(this)
                [_0x3f6224(0x80)]("[data-skip-to]")
                [_0x3f6224(0x82)]("skip-to")),
            $(this)
              [_0x3f6224(0x80)]("[data-go-to]")
              [_0x3f6224(0x11d)](_0x3f6224(0xe1)) &&
              ((answer = $(this)
                [_0x3f6224(0x80)](_0x3f6224(0xc6))
                [_0x3f6224(0x11d)](_0x3f6224(0xe1))),
              (selections = selections["filter"](
                (_0x132354) => _0x132354["step"] !== x
              )),
              selections[_0x3f6224(0x12e)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x3f6224(0x12e)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x3f6224(0xb9)](
                  (_0x3968d7) => _0x3968d7[_0x3f6224(0x15b)] === x
                )),
                (selections[objIndex][_0x3f6224(0xbd)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        ["find"]("[data-answer]:visible")
        [_0x3814ae(0x14d)](":input[type=\x22file\x22][required]")
        [_0x3814ae(0xf1)](function (_0x475108) {
          const _0x1a287c = _0x3814ae;
          $(this)[_0x1a287c(0xab)]() !== ""
            ? (empReqfile = empReqfile[_0x1a287c(0xa3)](
                (_0x32f6ff) => _0x32f6ff[_0x1a287c(0x156)] !== _0x475108
              ))
            : (!empReqfile[_0x1a287c(0x14d)](
                (_0x1b3c53) => _0x1b3c53["input"] === _0x475108
              ) && empReqfile["push"]({ input: _0x475108 }),
              unfilledArr[_0x1a287c(0x12e)]({
                input: $(this)["attr"](_0x1a287c(0xfd)),
              })),
            empReqfile["length"] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x3814ae(0x14d)](_0x3814ae(0x9e))
        [_0x3814ae(0x14d)](_0x3814ae(0x132))
        [_0x3814ae(0xf1)](function (_0x23600a) {
          const _0x5bedfe = _0x3814ae;
          (skipTo = undefined),
            $(this)
              [_0x5bedfe(0x80)](_0x5bedfe(0xeb))
              [_0x5bedfe(0x82)](_0x5bedfe(0xe9)) !== "" &&
              (skipTo = $(this)
                [_0x5bedfe(0x80)](_0x5bedfe(0xeb))
                [_0x5bedfe(0x82)](_0x5bedfe(0xe9))),
            $(this)
              [_0x5bedfe(0x80)]("[data-go-to]")
              [_0x5bedfe(0x11d)](_0x5bedfe(0xe1)) &&
              ((answer = $(this)
                [_0x5bedfe(0x80)](_0x5bedfe(0xc6))
                [_0x5bedfe(0x11d)](_0x5bedfe(0xe1))),
              (selections = selections["filter"](
                (_0x40c8fc) => _0x40c8fc[_0x5bedfe(0x15b)] !== x
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x5bedfe(0x12e)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x53df07) => _0x53df07[_0x5bedfe(0x15b)] === x
                )),
                (selections[objIndex][_0x5bedfe(0xbd)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x3814ae(0x14d)](_0x3814ae(0x9e))
        [_0x3814ae(0x14d)](_0x3814ae(0x11b))
        [_0x3814ae(0xf1)](function (_0x252ffb) {
          const _0x57560d = _0x3814ae;
          $(this)[_0x57560d(0xab)]() !== ""
            ? (empReqSelect = empReqSelect[_0x57560d(0xa3)](
                (_0x2e2c59) => _0x2e2c59[_0x57560d(0x156)] !== _0x252ffb
              ))
            : (!empReqSelect[_0x57560d(0x14d)](
                (_0x3177c2) => _0x3177c2[_0x57560d(0x156)] === _0x252ffb
              ) && empReqSelect[_0x57560d(0x12e)]({ input: _0x252ffb }),
              unfilledArr["push"]({ input: $(this)["attr"]("name") })),
            empReqSelect[_0x57560d(0x13f)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x3814ae(0x14d)](_0x3814ae(0x9e))
        [_0x3814ae(0x14d)](_0x3814ae(0x10a))
        ["each"](function (_0x34a9a1) {
          const _0x1a2f08 = _0x3814ae;
          (skipTo = undefined),
            $(this)
              [_0x1a2f08(0x80)](_0x1a2f08(0xeb))
              ["data"](_0x1a2f08(0xe9)) !== "" &&
              (skipTo = $(this)
                [_0x1a2f08(0x80)](_0x1a2f08(0xeb))
                [_0x1a2f08(0x82)](_0x1a2f08(0xe9))),
            $(this)
              ["parents"]("[data-go-to]")
              [_0x1a2f08(0x11d)]("data-go-to") &&
              ((answer = $(this)
                [_0x1a2f08(0x80)](_0x1a2f08(0xc6))
                [_0x1a2f08(0x11d)](_0x1a2f08(0xe1))),
              (selections = selections[_0x1a2f08(0xa3)](
                (_0x3bb58f) => _0x3bb58f[_0x1a2f08(0x15b)] !== x
              )),
              selections[_0x1a2f08(0x12e)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x1a2f08(0x12e)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x467630) => _0x467630[_0x1a2f08(0x15b)] === x
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x1a2f08(0x89)] = x)));
        }),
      $(steps[x])
        [_0x3814ae(0x14d)](_0x3814ae(0x9e))
        ["find"]("textarea[required]")
        ["each"](function (_0xa91ff2) {
          const _0x9ac2e4 = _0x3814ae;
          $(this)[_0x9ac2e4(0xab)]() !== ""
            ? (empReqTextarea = empReqTextarea["filter"](
                (_0xeecd30) => _0xeecd30["input"] !== _0xa91ff2
              ))
            : (!empReqTextarea["find"](
                (_0x70ae21) => _0x70ae21[_0x9ac2e4(0x156)] === _0xa91ff2
              ) && empReqTextarea[_0x9ac2e4(0x12e)]({ input: _0xa91ff2 }),
              unfilledArr[_0x9ac2e4(0x12e)]({
                input: $(this)["attr"](_0x9ac2e4(0xfd)),
              })),
            empReqTextarea[_0x9ac2e4(0x13f)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x3814ae(0x14d)]("[data-answer]:visible")
        ["find"](_0x3814ae(0x123))
        [_0x3814ae(0xf1)](function (_0x19c94e) {
          const _0xab5293 = _0x3814ae;
          (skipTo = undefined),
            $(this)
              [_0xab5293(0x80)](_0xab5293(0xeb))
              ["data"](_0xab5293(0xe9)) !== "" &&
              (skipTo = $(this)
                [_0xab5293(0x80)](_0xab5293(0xeb))
                [_0xab5293(0x82)](_0xab5293(0xe9))),
            $(this)
              [_0xab5293(0x80)](_0xab5293(0xc6))
              [_0xab5293(0x11d)](_0xab5293(0xe1)) &&
              ((answer = $(this)
                ["parents"]("[data-go-to]")
                [_0xab5293(0x11d)]("data-go-to")),
              (selections = selections[_0xab5293(0xa3)](
                (_0x57da6) => _0x57da6[_0xab5293(0x15b)] !== x
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0xab5293(0xb9)](
                  (_0x428d23) => _0x428d23[_0xab5293(0x15b)] === x
                )),
                (selections[objIndex][_0xab5293(0xbd)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0xab5293(0x89)] = x)));
        }),
      $(steps[x])
        [_0x3814ae(0x14d)](_0x3814ae(0x9e))
        ["find"](_0x3814ae(0xa6))
        [_0x3814ae(0xf1)](function (_0x2e21ab) {
          const _0x15da87 = _0x3814ae;
          $(this)[_0x15da87(0xab)]() !== ""
            ? validateEmail(
                $(this)[_0x15da87(0xab)](),
                $(this)[_0x15da87(0x82)](_0x15da87(0x9f)),
                $(this)["attr"](_0x15da87(0xfd))
              )
            : ((emailFilled = ![]),
              unfilledArr[_0x15da87(0x12e)]({
                input: $(this)[_0x15da87(0x11d)](_0x15da87(0xfd)),
              }));
        }),
      $(steps[x])
        [_0x3814ae(0x14d)](_0x3814ae(0x9e))
        [_0x3814ae(0x14d)](_0x3814ae(0x158))
        [_0x3814ae(0xf1)](function (_0x4c0ef8) {
          const _0x1f1c0a = _0x3814ae;
          (skipTo = undefined),
            $(this)
              [_0x1f1c0a(0x80)](_0x1f1c0a(0xeb))
              [_0x1f1c0a(0x82)]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0x1f1c0a(0x80)](_0x1f1c0a(0xeb))
                ["data"](_0x1f1c0a(0xe9))),
            $(this)
              [_0x1f1c0a(0x80)](_0x1f1c0a(0xc6))
              [_0x1f1c0a(0x11d)](_0x1f1c0a(0xe1)) &&
              ((answer = $(this)
                [_0x1f1c0a(0x80)](_0x1f1c0a(0xc6))
                [_0x1f1c0a(0x11d)](_0x1f1c0a(0xe1))),
              (selections = selections[_0x1f1c0a(0xa3)](
                (_0x46c299) => _0x46c299["step"] !== x
              )),
              selections[_0x1f1c0a(0x12e)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x1f1c0a(0x12e)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x2f5e9f) => _0x2f5e9f[_0x1f1c0a(0x15b)] === x
                )),
                (selections[objIndex][_0x1f1c0a(0xbd)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x1f1c0a(0x89)] = x)));
        });
  }
  $(steps[x])
    [_0x3814ae(0x14d)](":input[type=\x22radio\x22]")
    ["is"](":checked") &&
    ((selArr = []),
    $(steps)
      [_0x3814ae(0x14d)](_0x3814ae(0xd9))
      [_0x3814ae(0xf1)](function (_0x204448, _0x53328e) {
        const _0x5a4d91 = _0x3814ae;
        selArr[_0x5a4d91(0x12e)]({
          selected: $(this)[_0x5a4d91(0x82)]("selected"),
        });
      }),
    (selString = []),
    selArr[_0x3814ae(0x105)]((_0x44583e) =>
      selString["push"](_0x44583e["selected"])
    ),
    (selections = selections["filter"](
      (_0x447731) => _0x447731[_0x3814ae(0x15b)] !== x
    )),
    $(steps[x])
      [_0x3814ae(0x14d)](_0x3814ae(0x9e))
      [_0x3814ae(0x14d)](":input[type=\x27radio\x27]:checked")
      [_0x3814ae(0xf1)](function () {
        const _0x155724 = _0x3814ae;
        skipTo = undefined;
        if (
          $(this)
            [_0x155724(0x80)](_0x155724(0xeb))
            [_0x155724(0x82)](_0x155724(0xe9))
        )
          skipTo = $(this)
            [_0x155724(0x80)]("[data-skip-to]")
            [_0x155724(0x82)](_0x155724(0xe9));
        else
          $(this)[_0x155724(0x82)](_0x155724(0xe9)) &&
            (skipTo = $(this)[_0x155724(0x82)](_0x155724(0xe9)));
        if ($(this)[_0x155724(0x82)](_0x155724(0x120)))
          (answer = $(this)["attr"](_0x155724(0xe1))),
            selections["push"]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0x155724(0x12e)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0x155724(0xb9)](
                (_0x555c67) => _0x555c67[_0x155724(0x15b)] === x
              )),
              (selections[objIndex][_0x155724(0xbd)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x155724(0x89)] = x));
        else
          $(this)[_0x155724(0x80)](_0x155724(0xc6))["data"](_0x155724(0x120)) &&
            ((answer = $(this)
              [_0x155724(0x80)](_0x155724(0xc6))
              [_0x155724(0x82)](_0x155724(0x120))),
            selections[_0x155724(0x12e)]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0x155724(0x12e)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0x155724(0xb9)](
                (_0xdf0495) => _0xdf0495["step"] === x
              )),
              (selections[objIndex][_0x155724(0xbd)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x155724(0x89)] = x)));
      }),
    logicExtra
      ? ($(steps[x])
          [_0x3814ae(0x14d)](_0x3814ae(0x9e))
          ["find"](_0x3814ae(0x159))
          [_0x3814ae(0x82)](_0x3814ae(0xde)) === !![] ||
          $(steps[x])
            [_0x3814ae(0x14d)](_0x3814ae(0x15d))
            ["data"](_0x3814ae(0xde)) === !![]) &&
        skip &&
        selections["filter"]((_0x22125e) => _0x22125e[_0x3814ae(0x15b)] === x)[
          _0x3814ae(0x13f)
        ] > 0x0 &&
        textareaLength === 0x0 &&
        textInputLength === 0x0 &&
        emailInputLength === 0x0 &&
        checkboxInputLength === 0x0 &&
        setTimeout(function () {
          (next = !![]), nextStep(), selectionQuiz();
        }, $(steps[x])
          [_0x3814ae(0x14d)]("[data-radio-delay]")
          ["data"]("radio-delay"))
      : $(steps[x])
          [_0x3814ae(0x14d)](_0x3814ae(0x159))
          [_0x3814ae(0x82)](_0x3814ae(0xde)) === !![] &&
        skip &&
        textareaLength === 0x0 &&
        textInputLength === 0x0 &&
        emailInputLength === 0x0 &&
        checkboxInputLength === 0x0 &&
        setTimeout(function () {
          (next = !![]), nextStep(), selectionQuiz();
        }, $(steps[x])
          [_0x3814ae(0x14d)]("[data-radio-delay]")
          ["data"](_0x3814ae(0x100)))),
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
  const _0xb643a7 = _0x9656c8;
  $(_0xb643a7(0x108))[_0xb643a7(0xea)](),
    unfilledArr["length"] > 0x0 &&
      unfilledArr["forEach"](function (_0x53d819) {
        const _0x26a277 = _0xb643a7;
        $(_0x26a277(0x141) + _0x53d819[_0x26a277(0x156)] + "\x22]")
          [_0x26a277(0x10e)](_0x26a277(0x108))
          [_0x26a277(0x9a)](),
          $(_0x26a277(0x141) + _0x53d819[_0x26a277(0x156)] + "\x22]")
            ["parents"]()
            [_0x26a277(0xbb)](_0x26a277(0x108))
            [_0x26a277(0x9a)](),
          $("textarea[name=\x22" + _0x53d819[_0x26a277(0x156)] + "\x22]")
            [_0x26a277(0x10e)]("[data-text=\x22error-message\x22]")
            ["fadeIn"](),
          $(_0x26a277(0x121) + _0x53d819[_0x26a277(0x156)] + "\x22]")
            [_0x26a277(0x10e)](_0x26a277(0x108))
            [_0x26a277(0x9a)]();
      });
}
function resetInputErrorMessage(_0x27a9c2) {
  const _0x41e30a = _0x9656c8;
  $(_0x41e30a(0x141) + _0x27a9c2 + "\x22]")
    [_0x41e30a(0x10e)](_0x41e30a(0x108))
    [_0x41e30a(0xea)](),
    $(_0x41e30a(0x141) + _0x27a9c2 + "\x22]")
      [_0x41e30a(0x80)]()
      ["children"]("[data-text=\x22error-message\x22]")
      [_0x41e30a(0xea)](),
    $(_0x41e30a(0x147) + _0x27a9c2 + "\x22]")
      [_0x41e30a(0x10e)]("[data-text=\x22error-message\x22]")
      [_0x41e30a(0xea)](),
    $(_0x41e30a(0x121) + _0x27a9c2 + "\x22]")
      [_0x41e30a(0x10e)](_0x41e30a(0x108))
      [_0x41e30a(0xea)]();
}
function nextStep() {
  const _0x5a2907 = _0x9656c8;
  customError
    ? ($(_0x5a2907(0x108))[_0x5a2907(0xea)](),
      fill
        ? (x++,
          countCard
            ? ((curStep = curStep + 0x1),
              $(_0x5a2907(0xa4))[_0x5a2907(0x15c)](steps[_0x5a2907(0x13f)]))
            : $(steps[x])["data"](_0x5a2907(0x131))
            ? (curStep = curStep + 0x0)
            : (curStep = curStep + 0x1),
          $(_0x5a2907(0x139))["text"](curStep),
          (progress = x),
          x <= steps[_0x5a2907(0x13f)] - 0x1 &&
            (updateStep(), memory && saveFilledInput()))
        : displayErrorMessage())
    : (x++,
      countCard
        ? ((curStep = curStep + 0x1),
          $(_0x5a2907(0xa4))[_0x5a2907(0x15c)](steps[_0x5a2907(0x13f)]))
        : $(steps[x])[_0x5a2907(0x82)]("card")
        ? (curStep = curStep + 0x0)
        : (curStep = curStep + 0x1),
      $(_0x5a2907(0x139))[_0x5a2907(0x15c)](curStep),
      x > progress && (progress = x),
      x <= steps[_0x5a2907(0x13f)] - 0x1 &&
        (updateStep(), memory && saveFilledInput()));
}
function backStep() {
  const _0x2d3898 = _0x9656c8;
  customError && $("[data-text=\x22error-message\x22]")["hide"](),
    countCard
      ? ((curStep = curStep - 0x1),
        $("[data-text=\x22total-steps\x22]")["text"](steps[_0x2d3898(0x13f)]))
      : $(steps[x])[_0x2d3898(0x82)](_0x2d3898(0x131))
      ? (curStep = curStep - 0x0)
      : (curStep = curStep - 0x1),
    $("[data-text=\x22current-step\x22]")[_0x2d3898(0x15c)](curStep),
    x > 0x0 &&
      ($(progressbar[x])["removeClass"](_0x2d3898(0x112)),
      selections[_0x2d3898(0xa3)](
        (_0x1e9676) => _0x1e9676[_0x2d3898(0xbd)] === x
      )[_0x2d3898(0x13f)] > 0x0
        ? (x = parseInt(
            getSafe(
              () =>
                selections["filter"](
                  (_0x1eb601) => _0x1eb601["skipTo"] === x
                )[0x0][_0x2d3898(0x89)]
            )
          ))
        : x--,
      updateStep()),
    $(steps[x])["find"](_0x2d3898(0x9c))[_0x2d3898(0x88)]("checked", ![]);
}
function selectionQuiz() {
  const _0x312db2 = _0x9656c8;
  if ($(this)["find"]("[data-btn=\x22check\x22]")) {
    $(_0x312db2(0x149))["hide"]();
    if (weightedSelection) {
      let _0x473227 = 0x0;
      selArr[_0x312db2(0x105)](function (_0x533aff) {
        const _0x11ebef = _0x312db2;
        _0x473227 = _0x473227 + _0x533aff[_0x11ebef(0x102)];
      }),
        $(_0x312db2(0xba) + _0x473227 + "\x22]")[_0x312db2(0x13f)] > 0x0
          ? $(_0x312db2(0xba) + _0x473227 + "\x22]")[_0x312db2(0x9a)]()
          : $(_0x312db2(0xc1))[_0x312db2(0x9a)]();
    } else {
      let _0x150dbd = -0x1;
      $("[data-selection]")[_0x312db2(0xf1)](function (_0x35c8ba) {
        const _0x28633a = _0x312db2;
        $($("[data-selection]")[_0x35c8ba])
          ["data"]("selection")
          [_0x28633a(0xbc)](selString[_0x28633a(0xb7)]()) &&
          (_0x150dbd = _0x35c8ba);
      }),
        _0x150dbd > -0x1
          ? $($(_0x312db2(0x149))[_0x150dbd])[_0x312db2(0x9a)]()
          : $("[data-selection=\x22other\x22]")[_0x312db2(0x9a)]();
    }
  }
}
function triggerInputAllData() {
  const _0x1fb435 = _0x9656c8;
  savedFilledInput &&
    memory &&
    savedFilledInput[_0x1fb435(0x105)]((_0x5b362b) => {
      const _0x28a7fe = _0x1fb435;
      if (
        $(
          _0x28a7fe(0x141) +
            _0x5b362b["inputName"] +
            _0x28a7fe(0x12d) +
            _0x5b362b[_0x28a7fe(0x7f)] +
            "\x22]"
        )[_0x28a7fe(0x11d)](_0x28a7fe(0x126)) === _0x28a7fe(0x119)
      )
        $(
          _0x28a7fe(0x141) +
            _0x5b362b[_0x28a7fe(0x8d)] +
            "\x22][value=\x22" +
            _0x5b362b[_0x28a7fe(0x7f)] +
            "\x22]"
        )[_0x28a7fe(0x106)]("input");
      else
        _0x5b362b[_0x28a7fe(0x7f)] === "on"
          ? $("input[name=\x22" + _0x5b362b[_0x28a7fe(0x8d)] + "\x22]")[
              _0x28a7fe(0x106)
            ](_0x28a7fe(0x156))
          : ($("input[name=\x22" + _0x5b362b["inputName"] + "\x22]")["trigger"](
              _0x28a7fe(0x156)
            ),
            $(_0x28a7fe(0x141) + _0x5b362b[_0x28a7fe(0x8d)] + "\x22]")[
              "trigger"
            ](_0x28a7fe(0x104)));
    });
}
$("[data-form=\x22next-btn\x22]")["on"](_0x9656c8(0x155), function () {
  scrollTop(), (next = !![]), nextStep(), selectionQuiz();
}),
  $(_0x9656c8(0xc7))["on"]("click", function () {
    scrollTop(), (next = ![]), (back = !![]), backStep();
  }),
  $(steps)
    ["find"](":input")
    ["on"]("input", function (_0x3159ce) {
      const _0x9fe9e7 = _0x9656c8;
      $(this)["attr"](_0x9fe9e7(0x126)) === "radio" && (skip = !![]),
        validation();
    });
$(_0x9656c8(0xb3))["data"](_0x9656c8(0xaf))
  ? $(_0x9656c8(0xb0))[_0x9656c8(0xd4)](_0x9656c8(0x152))
  : $(_0x9656c8(0xb0))[_0x9656c8(0xda)](_0x9656c8(0x152));
function clickableIndicator() {
  const _0x277dec = _0x9656c8;
  $(_0x277dec(0xca))["removeClass"](_0x277dec(0x112)),
    $("[data-clickable]")[_0x277dec(0x82)](_0x277dec(0x13a)) &&
      ($(_0x277dec(0x12b))["data"](_0x277dec(0xaf))
        ? ((x = $(this)["index"]()), updateStep())
        : $(this)["index"]() <= progress &&
          ((x = $(this)[_0x277dec(0x87)]()), updateStep()));
}
function _0x2079(_0x1f019f, _0xcd9cca) {
  const _0x4ba85a = _0x4ba8();
  return (
    (_0x2079 = function (_0x207984, _0x5a1870) {
      _0x207984 = _0x207984 - 0x7f;
      let _0x490c54 = _0x4ba85a[_0x207984];
      return _0x490c54;
    }),
    _0x2079(_0x1f019f, _0xcd9cca)
  );
}
function _0x4ba8() {
  const _0x3af061 = [
    "edit-step",
    "submit-show",
    "[data-enter]",
    "history",
    "val",
    "reset-delay",
    "keypress",
    "test",
    "clickable-all",
    "[data-form=\x22custom-progress-indicator\x22]",
    "location",
    "input[type=\x22text\x22][required]:visible",
    "[data-clickable-all]",
    "[data-cms-select=text]",
    "[data-success-card]",
    "ajaxComplete",
    "join",
    ":input[type=\x22text\x22]",
    "findIndex",
    "[data-selection=\x22",
    "children",
    "includes",
    "skipTo",
    "readystatechange",
    "slow",
    "form[data-form=\x22multistep\x22]\x20:input",
    "[data-selection=\x22other\x22]",
    "button",
    "6527538lImECa",
    "12EyBBkv",
    ":input[required]",
    "[data-go-to]",
    "[data-form=\x22back-btn\x22]",
    "css",
    "input:radio[name=\x22",
    "[data-form=\x22progress-indicator\x22]",
    ":input",
    "[data-memory]",
    "[data-cms-select=cms]",
    "[data-form=\x22next-btn\x22][type=\x22submit\x22]",
    "8086204nIQzrK",
    "[data-input-field=\x22",
    "[data-form=\x22step\x22][data-card]",
    "submit",
    ".w-form-done",
    "removeClass",
    "[data-form=\x22submit-btn\x22]",
    "[data-count-card]",
    "[data-form=\x22next-btn\x22][data-submit-show]",
    "https://webflow.com/api/v1/form/",
    "[data-selected]:checked",
    "addClass",
    "href",
    "some",
    "log",
    "radio-skip",
    "searchParams",
    ":input[type=\x22number\x22]",
    "data-go-to",
    "Please\x20wait...",
    "removeItem",
    "[data-cms-select=input]",
    "reset",
    "novalidate",
    "[data-answer=\x22",
    "textarea[autofocus]",
    "skip-to",
    "hide",
    "[data-skip-to]",
    "<option>",
    ":input[type=\x22radio\x22][required]",
    "keyCode",
    "[data-quiz]",
    "35ZjTTmH",
    "each",
    "<br>Data\x20Answer\x20=\x20",
    "[data-checkbox]",
    "clone",
    "split",
    "\x22]:checked",
    "data-radio-delay",
    "init",
    "input[type=\x22email\x22]:visible",
    "require",
    "delete",
    "parse",
    "name",
    "checkbox",
    ":input[type=\x22checkbox\x22]",
    "radio-delay",
    "append",
    "selected",
    "[data-form=\x22step\x22]:not([data-card=\x22true\x22])",
    "change",
    "forEach",
    "trigger",
    "not",
    "[data-text=\x22error-message\x22]",
    "input[type=\x22checkbox\x22]:visible",
    "select",
    "[data-form=\x22submit\x22]:visible",
    "redirect-form-hehexd",
    "redirect-delay",
    "siblings",
    "[data-form=\x22step\x22]",
    "data-skip-to",
    "replaceState",
    "current",
    "remove",
    "getItem",
    "auto",
    "answer",
    "success",
    "span",
    "radio",
    "url",
    "select[required]",
    "data-radio-skip",
    "attr",
    "query-param",
    ":input[type=\x22tel\x22]",
    "go-to",
    "select[name=\x22",
    "[type=\x22submit\x22]",
    "textarea",
    "Webflow",
    "metaKey",
    "type",
    "none",
    "94684VSsqOf",
    ".w-checkbox-input",
    "textarea[required]:visible",
    "[data-clickable]",
    "new-tab",
    "\x22][value=\x22",
    "push",
    ":input[type=\x22tel\x22][required]",
    "memory",
    "card",
    ":input[type=\x22file\x22]",
    "stopPropagation",
    "Enter",
    "[data-reinit]",
    "[data-form=\x22next-btn\x22]",
    ":input[type=\x22number\x22][required]",
    "preventDefault",
    "[data-text=\x22current-step\x22]",
    "clickable",
    "key",
    "set",
    "0.4",
    "logic-extra",
    "length",
    ":input[type=\x22checkbox\x22][required]",
    "input[name=\x22",
    "required",
    "select-multiple",
    "w--redirected-checked",
    "[data-redirect-delay]",
    "ctrlKey",
    "textarea[name=\x22",
    "option[value=\x22",
    "[data-selection]",
    "649092IOgZyK",
    "input:radio[required]",
    "wait",
    "find",
    "custom-error-message",
    "[data-btn=\x22reset\x22]",
    ":input[type=\x22checkbox\x22]:checked",
    "input[type=\x22submit\x22]",
    "disabled",
    "quiz",
    "[data-input-field]",
    "click",
    "input",
    "[type=\x22radio\x22]",
    ":input[type=\x22email\x22]",
    "[data-radio-skip]:visible",
    "keydown",
    "step",
    "text",
    "[data-answer][data-radio-skip]:visible",
    "weighted-selection",
    "[data-answer]",
    "[data-form=\x22progress\x22]",
    "filledInput",
    "50822uMrntX",
    "value",
    "parents",
    ".w-radio-input",
    "data",
    "1693730fqpWXh",
    "count-card",
    "show",
    "[data-btn=\x22edit\x22]",
    "index",
    "prop",
    "backTo",
    "[data-success-card=\x22",
    ":input[type=\x22text\x22][required]",
    "input:checkbox",
    "inputName",
    "redirect",
    "8UyQflI",
    "shiftKey",
    ":checked",
    "[data-reset-delay]",
    "671559buRErz",
    "focus",
    "status",
    "[data-form=\x22submit-btn\x22]:visible",
    "field",
    "input[autofocus]",
    "[data-custom-error-message]",
    "fadeIn",
    ":input[type=\x22checkbox\x22][required]:checked",
    "input[type=\x22radio\x22]",
    ":input[type=\x22file\x22][required]",
    "[data-answer]:visible",
    "block-domain",
    "<br>Data\x20Go\x20To\x20=\x20",
    "checked",
    "trim",
    "filter",
    "[data-text=\x22total-steps\x22]",
    "[data-form=\x22multistep\x22]",
    ":input[type=\x22email\x22][required]",
  ];
  _0x4ba8 = function () {
    return _0x3af061;
  };
  return _0x4ba8();
}
$("[data-form=\x22custom-progress-indicator\x22]")["on"](
  "click",
  clickableIndicator
);
$("[data-form=\x22multistep\x22]")[_0x9656c8(0x82)]("debug-mode") &&
  ($("[data-go-to]")[_0x9656c8(0xf1)](function () {
    const _0x555cdf = _0x9656c8;
    $(this)[_0x555cdf(0x101)](
      _0x555cdf(0xa0),
      $(this)[_0x555cdf(0x82)](_0x555cdf(0x120))
    );
  }),
  $("[data-answer]")["each"](function () {
    const _0x4a7659 = _0x9656c8;
    $(this)["append"](_0x4a7659(0xf2), $(this)["data"](_0x4a7659(0x116)));
  }));
$(_0x9656c8(0xd5))["on"]("click", function (_0x1f9519) {
  const _0x3435a2 = _0x9656c8;
  $(this)[_0x3435a2(0x82)](_0x3435a2(0x8e)) &&
    (redirectTo = $(this)[_0x3435a2(0x82)](_0x3435a2(0x8e))),
    !$(this)[_0x3435a2(0x82)](_0x3435a2(0x12c)) &&
      (newTab = $(this)["data"]("new-tab")),
    (successCard = $(this)["data"](_0x3435a2(0x117))),
    _0x1f9519[_0x3435a2(0x138)](),
    _0x1f9519["stopPropagation"](),
    logicExtra &&
      ($(this)[_0x3435a2(0x88)](_0x3435a2(0xe6), !![]),
      $(steps)
        [_0x3435a2(0x14d)](_0x3435a2(0xcb))
        [_0x3435a2(0x88)](_0x3435a2(0x142), ![])),
    localStorage[_0x3435a2(0xe3)](_0x3435a2(0x161)),
    fill &&
      ($(this)[_0x3435a2(0x82)](_0x3435a2(0x14c))
        ? $(this)[_0x3435a2(0xab)]($(this)[_0x3435a2(0x82)](_0x3435a2(0x14c)))
        : ($(this)[_0x3435a2(0xab)](_0x3435a2(0xe2)),
          $(this)[_0x3435a2(0x15c)]("Please\x20wait...")),
      $(_0x3435a2(0xa5))[_0x3435a2(0xd2)]());
});
function resetFormly() {
  const _0x2709e7 = _0x9656c8;
  $("[data-form=\x22multistep\x22]")[_0x2709e7(0x106)](_0x2709e7(0xe5)),
    $("[data-form=\x22multistep\x22]")
      [_0x2709e7(0x80)]()
      [_0x2709e7(0x14d)](".w-form-done")
      [_0x2709e7(0xea)](),
    (x = 0x0),
    updateStep(),
    $("[data-form=\x22multistep\x22]")[_0x2709e7(0x85)](),
    $(_0x2709e7(0xd5))[_0x2709e7(0x15c)](oldSubmitText),
    $(_0x2709e7(0xd5))[_0x2709e7(0xab)](oldSubmitText),
    $(_0x2709e7(0x139))[_0x2709e7(0x15c)](0x1),
    $("[data-form=\x22multistep\x22]")
      [_0x2709e7(0x14d)](_0x2709e7(0x8c))
      [_0x2709e7(0x10e)](_0x2709e7(0x129))
      ["removeClass"](_0x2709e7(0x144));
}
$(document)[_0x9656c8(0xb6)](function (_0x1ff2fc, _0x1e8d4f, _0x2c0fd6) {
  const _0x3c55fa = _0x9656c8;
  if (_0x2c0fd6[_0x3c55fa(0x11a)][_0x3c55fa(0xbc)](_0x3c55fa(0xd8))) {
    const _0x28bf5f = _0x1e8d4f[_0x3c55fa(0x95)] === 0xc8,
      _0x508957 = _0x3c55fa(0x10c);
    redirectTo &&
      _0x28bf5f &&
      (newTab
        ? window["open"](redirectTo, "_blank")
        : setTimeout(() => {
            const _0x533dfc = _0x3c55fa;
            location[_0x533dfc(0xdb)] = redirectTo;
          }, redirectDelay)),
      _0x28bf5f &&
        successCard !== "" &&
        $(_0x3c55fa(0x8a) + successCard + "\x22]")[_0x3c55fa(0x9a)](),
      _0x28bf5f &&
        formReset &&
        setTimeout(() => {
          resetFormly();
        }, resetDelay);
  }
}),
  $(_0x9656c8(0x86))["on"]("click", function () {
    const _0xcf610 = _0x9656c8;
    (back = !![]),
      (x = $(this)[_0xcf610(0x82)](_0xcf610(0xa7)) - 0x1),
      updateStep(),
      countCard
        ? ((curStep = x + 0x1),
          $("[data-text=\x22total-steps\x22]")["text"](steps[_0xcf610(0x13f)]))
        : $(steps[x])[_0xcf610(0x82)](_0xcf610(0x131))
        ? (curStep = x + 0x0)
        : (curStep = x + 0x1),
      $(_0xcf610(0x139))[_0xcf610(0x15c)](curStep),
      (back = ![]);
  }),
  $("[data-btn=\x22reset\x22]")["on"](_0x9656c8(0x155), function () {
    const _0x1e1f37 = _0x9656c8;
    $(_0x1e1f37(0xa5))[_0x1e1f37(0x106)](_0x1e1f37(0xe5));
    let _0x42216e = $(this);
    $(this)["text"](_0x1e1f37(0xe2)),
      setTimeout(function () {
        const _0x548c57 = _0x1e1f37;
        $(_0x42216e)["text"](oldResetText),
          $(_0x42216e)[_0x548c57(0x80)](_0x548c57(0xd3))[_0x548c57(0xea)](),
          (x = 0x0),
          updateStep(),
          $(_0x548c57(0xa5))[_0x548c57(0x85)](),
          $(_0x548c57(0xd5))[_0x548c57(0x15c)](oldSubmitText),
          $("[data-form=\x22submit-btn\x22]")["val"](oldSubmitText),
          $(_0x42216e)["val"](oldSubmitText),
          $(_0x548c57(0x139))["text"](0x1),
          $(_0x548c57(0xa5))
            [_0x548c57(0x14d)]("input:checkbox")
            [_0x548c57(0x10e)](".w-checkbox-input")
            [_0x548c57(0xd4)](_0x548c57(0x144));
      }, resetDelay);
  }),
  $("body")["on"](_0x9656c8(0xad), function (_0xe36ef0) {
    const _0x149206 = _0x9656c8;
    _0xe36ef0[_0x149206(0xee)] === 0xd &&
      fill &&
      ($(_0x149206(0xa9))[_0x149206(0x82)]("enter")
        ? (totalSteps > curStep &&
            $("[data-form=\x22next-btn\x22]")[0x0][_0x149206(0x155)](),
          _0xe36ef0["preventDefault"](),
          _0xe36ef0["stopPropagation"]())
        : (_0xe36ef0[_0x149206(0x138)](), _0xe36ef0[_0x149206(0x133)]()));
  }),
  $("body")[_0x9656c8(0x15a)](function (_0x223a73) {
    const _0x69ca1a = _0x9656c8;
    (_0x223a73[_0x69ca1a(0x125)] || _0x223a73[_0x69ca1a(0x146)]) &&
      _0x223a73[_0x69ca1a(0xee)] == 0xd &&
      (x >= steps["length"] - 0x1 && fill
        ? $(steps[x])["find"](_0x69ca1a(0x96))[_0x69ca1a(0x155)]()
        : (event[_0x69ca1a(0x138)](), event["stopPropagation"]()));
  }),
  $("textarea")[_0x9656c8(0xad)](function (_0x1840a5) {
    const _0x578357 = _0x9656c8;
    $(this)[_0x578357(0x94)](),
      _0x1840a5[_0x578357(0x13b)] == "Enter" &&
        (_0x1840a5[_0x578357(0x138)](), _0x1840a5[_0x578357(0x133)]()),
      _0x1840a5[_0x578357(0x90)] &&
        _0x1840a5["key"] == _0x578357(0x134) &&
        $(this)[_0x578357(0xab)]($(this)[_0x578357(0xab)]() + "\x0a");
  }),
  $(_0x9656c8(0xa5))
    [_0x9656c8(0x14d)](_0x9656c8(0xcb))
    ["on"](_0x9656c8(0x156), function () {
      const _0x30bd83 = _0x9656c8;
      (all_data = all_data[_0x30bd83(0xa3)](
        (_0x196ba8) =>
          _0x196ba8[_0x30bd83(0x97)] !==
          $(this)[_0x30bd83(0x82)](_0x30bd83(0xfd))
      )),
        $(this)["attr"](_0x30bd83(0x126)) === _0x30bd83(0xfe)
          ? $(this)["is"](_0x30bd83(0x91)) &&
            all_data[_0x30bd83(0x12e)]({
              field: $(this)[_0x30bd83(0x11d)]("name"),
              value: $(this)["siblings"](_0x30bd83(0x118))[_0x30bd83(0x15c)](),
            })
          : (all_data[_0x30bd83(0x12e)]({
              field: $(this)[_0x30bd83(0x11d)](_0x30bd83(0xfd)),
              value: $(this)[_0x30bd83(0xab)](),
            }),
            $(this)["val"]() !== "" &&
              resetInputErrorMessage(
                $(this)[_0x30bd83(0x11d)](_0x30bd83(0xfd))
              )),
        all_data[_0x30bd83(0x105)](function (_0x40efdb) {
          const _0x3b5055 = _0x30bd83;
          $("[data-input-field=\x22" + _0x40efdb[_0x3b5055(0x97)] + "\x22]")[
            _0x3b5055(0x9a)
          ](),
            $(_0x3b5055(0xd0) + _0x40efdb[_0x3b5055(0x97)] + "\x22]")[
              _0x3b5055(0x15c)
            ](_0x40efdb[_0x3b5055(0x7f)]);
        });
    }),
  $(_0x9656c8(0xa5))
    [_0x9656c8(0x14d)]("textarea")
    ["on"]("input", function () {
      const _0x51dbc4 = _0x9656c8;
      $(this)[_0x51dbc4(0xab)]() !== "" &&
        resetInputErrorMessage($(this)[_0x51dbc4(0x11d)](_0x51dbc4(0xfd))),
        (all_data = all_data[_0x51dbc4(0xa3)](
          (_0x3799e9) =>
            _0x3799e9["field"] !== $(this)[_0x51dbc4(0x11d)](_0x51dbc4(0xfd))
        )),
        all_data[_0x51dbc4(0x12e)]({
          field: $(this)[_0x51dbc4(0x11d)](_0x51dbc4(0xfd)),
          value: $(this)[_0x51dbc4(0xab)](),
        }),
        all_data[_0x51dbc4(0x105)](function (_0x484290) {
          const _0x174da6 = _0x51dbc4;
          $(_0x174da6(0xd0) + _0x484290["field"] + "\x22]")["fadeIn"](),
            $(_0x174da6(0xd0) + _0x484290[_0x174da6(0x97)] + "\x22]")["text"](
              _0x484290[_0x174da6(0x7f)]
            );
        });
    }),
  $(_0x9656c8(0xa5))
    [_0x9656c8(0x14d)](_0x9656c8(0x10a))
    ["on"](_0x9656c8(0x104), function () {
      const _0x500b13 = _0x9656c8;
      $(this)[_0x500b13(0xab)]() !== "" &&
        resetInputErrorMessage($(this)[_0x500b13(0x11d)]("name")),
        (all_data = all_data["filter"](
          (_0x148c7d) =>
            _0x148c7d[_0x500b13(0x97)] !== $(this)["attr"](_0x500b13(0xfd))
        )),
        all_data[_0x500b13(0x12e)]({
          field: $(this)["attr"](_0x500b13(0xfd)),
          value: $(this)[_0x500b13(0xab)](),
        }),
        all_data[_0x500b13(0x105)](function (_0x3a5017) {
          const _0x5b2eb8 = _0x500b13;
          $(_0x5b2eb8(0xd0) + _0x3a5017[_0x5b2eb8(0x97)] + "\x22]")["fadeIn"](),
            $("[data-input-field=\x22" + _0x3a5017[_0x5b2eb8(0x97)] + "\x22]")[
              "text"
            ](_0x3a5017[_0x5b2eb8(0x7f)]);
        });
    }),
  updateStep(),
  triggerInputAllData(),
  $(_0x9656c8(0xcd))[_0x9656c8(0xf1)](function () {
    const _0x4de7ac = _0x9656c8,
      _0x38cb28 = $(this)["find"](_0x4de7ac(0xb4)),
      _0x170e98 = [];
    console[_0x4de7ac(0xdd)](_0x170e98),
      _0x38cb28[_0x4de7ac(0xf1)](function () {
        const _0x4b2188 = _0x4de7ac;
        _0x170e98[_0x4b2188(0x12e)](
          $(this)[_0x4b2188(0x15c)]()[_0x4b2188(0xa2)]()
        );
      });
    const _0x3539c7 = $(this)["siblings"](_0x4de7ac(0xe4));
    $["each"](_0x170e98, function (_0x193fe6, _0x17504d) {
      const _0x3bdd57 = _0x4de7ac,
        _0x1843aa = $(_0x3bdd57(0xec))
          [_0x3bdd57(0xab)](_0x17504d)
          ["text"](_0x17504d);
      _0x3539c7[_0x3bdd57(0x101)](_0x1843aa);
    });
  });
