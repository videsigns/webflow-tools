const _0x357ff5 = _0x2a88;
(function (_0x5dec68, _0x3620f2) {
  const _0x98076a = _0x2a88,
    _0x59fdab = _0x5dec68();
  while (!![]) {
    try {
      const _0x224680 =
        (-parseInt(_0x98076a(0x179)) / 0x1) *
          (-parseInt(_0x98076a(0x116)) / 0x2) +
        parseInt(_0x98076a(0x1a3)) / 0x3 +
        (parseInt(_0x98076a(0x11c)) / 0x4) *
          (-parseInt(_0x98076a(0x19e)) / 0x5) +
        (-parseInt(_0x98076a(0x1b9)) / 0x6) *
          (parseInt(_0x98076a(0x100)) / 0x7) +
        -parseInt(_0x98076a(0x11b)) / 0x8 +
        parseInt(_0x98076a(0x188)) / 0x9 +
        (-parseInt(_0x98076a(0x111)) / 0xa) *
          (-parseInt(_0x98076a(0xf3)) / 0xb);
      if (_0x224680 === _0x3620f2) break;
      else _0x59fdab["push"](_0x59fdab["shift"]());
    } catch (_0x46d77b) {
      _0x59fdab["push"](_0x59fdab["shift"]());
    }
  }
})(_0x4574, 0x584fd);
let x = 0x0,
  curStep = 0x0,
  steps = $("[data-form=\x22step\x22]"),
  progressbarClone = $(_0x357ff5(0x13a))[_0x357ff5(0x1cf)](),
  progressbar,
  countCard = !![],
  weightedSelection = $(_0x357ff5(0x12c))[_0x357ff5(0x1f2)](_0x357ff5(0x114)),
  weightedSelectionRange = $("[data-weighted-selection-range]")[
    _0x357ff5(0x1f2)
  ](_0x357ff5(0x1ae)),
  selectMultiple = $(_0x357ff5(0x161))[_0x357ff5(0x1f2)](_0x357ff5(0x1a4)),
  customError = $(_0x357ff5(0x184))[_0x357ff5(0x1f2)](_0x357ff5(0x132)),
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
  reinitIX = $(_0x357ff5(0x187))["data"](_0x357ff5(0x1d6)),
  textareaLength = 0x0,
  textInputLength = 0x0,
  emailInputLength = 0x0,
  selectInputLength = 0x0,
  checkboxInputLength = 0x0,
  filledInput = [],
  savedFilledInput = JSON[_0x357ff5(0x1ea)](
    localStorage[_0x357ff5(0x139)](_0x357ff5(0x11d))
  ),
  memory = $(_0x357ff5(0x138))[_0x357ff5(0x1f2)](_0x357ff5(0x1a6)),
  quiz = $(_0x357ff5(0x11a))[_0x357ff5(0x1f2)](_0x357ff5(0x1ec)),
  progress = 0x0;
const urlFormly = new URL(window["location"]["href"]);
let params = $(_0x357ff5(0x1c5))["data"]("query-param"),
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
  logicExtra = $(_0x357ff5(0x121))[_0x357ff5(0x1f2)](_0x357ff5(0x185)),
  oldSubmitText = $(_0x357ff5(0x1c4))[_0x357ff5(0x198)](),
  oldResetText = $(_0x357ff5(0x103))[_0x357ff5(0x153)](),
  formReset = $(_0x357ff5(0x121))[_0x357ff5(0x1f2)](_0x357ff5(0x151)),
  successCard = "",
  redirectTo = "",
  totalSteps = 0x0,
  checkCount = 0x0,
  resetDelay = $(_0x357ff5(0x122))[_0x357ff5(0x1f2)]("reset-delay")
    ? $(_0x357ff5(0x122))["data"](_0x357ff5(0x162))
    : 0x7d0,
  redirectDelay = $("[data-redirect-delay]")[_0x357ff5(0x1f2)](_0x357ff5(0x1b3))
    ? $(_0x357ff5(0x144))["data"](_0x357ff5(0x1b3))
    : 0x7d0,
  newTab = !![],
  unfilledArr = [],
  phoneFormat = $(_0x357ff5(0x121))[_0x357ff5(0x1f2)](_0x357ff5(0x13d)),
  scrollToTop = $(_0x357ff5(0x121))["data"](_0x357ff5(0x13e)),
  scrollTopOffset = parseInt(
    $(_0x357ff5(0x121))[_0x357ff5(0x1f2)](_0x357ff5(0x181))
  ),
  notRobot = !![];
all_data = [];
$(_0x357ff5(0x102))[_0x357ff5(0x157)] > 0x0 && (notRobot = ![]);
function recaptcha(_0x27f373) {
  notRobot = !![];
}
$("[data-count-card]")[_0x357ff5(0x157)] > 0x0 &&
  (countCard = $(_0x357ff5(0x1a5))[_0x357ff5(0x1f2)](_0x357ff5(0x1ed)));
$(_0x357ff5(0x16c))[_0x357ff5(0x1b6)](),
  $(progressbarClone)[_0x357ff5(0xf6)](_0x357ff5(0xfc)),
  $(_0x357ff5(0x12d))["children"]()["remove"](),
  $("[data-form=\x22submit-btn\x22]")["hide"](),
  $(_0x357ff5(0x147))[_0x357ff5(0x1b6)](),
  steps[_0x357ff5(0x131)](function () {
    const _0x4f3a41 = _0x357ff5;
    $(_0x4f3a41(0x12d))[_0x4f3a41(0x180)](
      progressbarClone[_0x4f3a41(0x1cf)](!![], !![])
    );
  }),
  $(_0x357ff5(0x191))[_0x357ff5(0x1b6)]();
countCard
  ? ((curStep = curStep + 0x1),
    (totalSteps = steps["length"]),
    $("[data-text=\x22total-steps\x22]")["text"](totalSteps))
  : ($(steps[x])["data"]("card")
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    (totalSteps = $(_0x357ff5(0x1bf))[_0x357ff5(0x157)]),
    $(_0x357ff5(0x169))[_0x357ff5(0x153)](totalSteps),
    $("[data-form=\x22step\x22][data-card]")[_0x357ff5(0x131)](function () {
      const _0x404e26 = _0x357ff5;
      $($(_0x404e26(0x13a))[$(this)[_0x404e26(0x145)]()])[_0x404e26(0x1b6)]();
    }));
(progressbar = $(_0x357ff5(0x12d))[_0x357ff5(0x11e)]()),
  $("[data-form=\x22progress-indicator\x22]")["on"](
    _0x357ff5(0x16f),
    clickableIndicator
  ),
  $(_0x357ff5(0x1ce))[_0x357ff5(0x153)](curStep),
  steps["hide"](),
  $("[data-success-card]")[_0x357ff5(0x1b6)](),
  $(_0x357ff5(0x1a1))[_0x357ff5(0x131)](function () {
    const _0x1e2fa4 = _0x357ff5;
    $(this)[_0x1e2fa4(0x119)](_0x1e2fa4(0x128), _0x1e2fa4(0x10a));
  });
function getParams() {
  const _0x4a5040 = _0x357ff5;
  urlFormly[_0x4a5040(0x1e2)]["forEach"](function (_0x490acc, _0x383b13) {
    searchQ["push"]({ val: _0x490acc, key: _0x383b13 });
  });
}
function getSafe(_0x265429, _0x43a79f) {
  try {
    return _0x265429();
  } catch (_0x351cbc) {
    return _0x43a79f;
  }
}
function phoneAutoFormat(_0x472923) {
  var _0x30bc44 = "";
  return function (_0x1a5ee1) {
    const _0x46295e = _0x2a88;
    var _0x59ab22 = "",
      _0x5f077d = _0x1a5ee1[_0x46295e(0x199)](/\D/g, ""),
      _0x4681e8 = 0x0,
      _0x478b5b = 0x0;
    while (
      _0x4681e8 < _0x5f077d[_0x46295e(0x157)] &&
      _0x478b5b < _0x472923[_0x46295e(0x157)]
    ) {
      _0x472923[_0x478b5b] === "x"
        ? ((_0x59ab22 += _0x5f077d[_0x4681e8]), _0x4681e8++)
        : (_0x59ab22 += _0x472923[_0x478b5b]),
        _0x478b5b++;
    }
    if (_0x1a5ee1["length"] < _0x30bc44[_0x46295e(0x157)]) {
      var _0x374de8 = _0x472923[_0x46295e(0x192)](_0x478b5b);
      _0x59ab22 += _0x374de8[_0x46295e(0x199)](/x/g, "");
    }
    return (_0x30bc44 = _0x59ab22), _0x59ab22;
  };
}
savedFilledInput &&
  memory &&
  savedFilledInput["forEach"]((_0x375420) => {
    const _0x5f1eed = _0x357ff5;
    if (
      $(
        _0x5f1eed(0x148) +
          _0x375420["inputName"] +
          _0x5f1eed(0x149) +
          _0x375420[_0x5f1eed(0x152)] +
          "\x22]"
      )[_0x5f1eed(0x119)]("type") === "radio"
    )
      $(
        "input[name=\x22" +
          _0x375420["inputName"] +
          _0x5f1eed(0x149) +
          _0x375420[_0x5f1eed(0x152)] +
          "\x22]"
      )[_0x5f1eed(0x16f)](),
        $(
          "input[name=\x22" +
            _0x375420[_0x5f1eed(0x1dd)] +
            _0x5f1eed(0x149) +
            _0x375420["value"] +
            "\x22]"
        )
          [_0x5f1eed(0x1d8)](_0x5f1eed(0x15e))
          [_0x5f1eed(0x193)](_0x5f1eed(0xf7));
    else
      _0x375420[_0x5f1eed(0x152)] === "on"
        ? ($(_0x5f1eed(0x148) + _0x375420[_0x5f1eed(0x1dd)] + "\x22]")[
            "click"
          ](),
          $(_0x5f1eed(0x148) + _0x375420[_0x5f1eed(0x1dd)] + "\x22]")
            [_0x5f1eed(0x1d8)](_0x5f1eed(0x1cc))
            [_0x5f1eed(0x193)](_0x5f1eed(0xf7)))
        : ($(_0x5f1eed(0x148) + _0x375420["inputName"] + "\x22]")["val"](
            _0x375420["value"]
          ),
          $(_0x5f1eed(0x156) + _0x375420[_0x5f1eed(0x1dd)] + "\x22]")["val"](
            _0x375420[_0x5f1eed(0x152)]
          ),
          $(_0x5f1eed(0x175) + _0x375420["inputName"] + "\x22]")
            [_0x5f1eed(0x12b)](
              _0x5f1eed(0x143) + _0x375420[_0x5f1eed(0x152)] + "\x22]"
            )
            [_0x5f1eed(0x106)]("selected", !![]));
  });
params &&
  (getParams(),
  searchQ[_0x357ff5(0xf8)]((_0x807a1e) => {
    const _0xbf1591 = _0x357ff5;
    if (
      $(
        _0xbf1591(0x148) +
          _0x807a1e[_0xbf1591(0x13f)] +
          _0xbf1591(0x149) +
          _0x807a1e[_0xbf1591(0x198)] +
          "\x22]"
      )[_0xbf1591(0x119)]("type") === _0xbf1591(0x127)
    )
      $(
        _0xbf1591(0x148) +
          _0x807a1e["key"] +
          "\x22][value=\x22" +
          _0x807a1e["val"] +
          "\x22]"
      )["click"](),
        $(
          "input[name=\x22" +
            _0x807a1e[_0xbf1591(0x13f)] +
            _0xbf1591(0x149) +
            _0x807a1e[_0xbf1591(0x198)] +
            "\x22]"
        )
          [_0xbf1591(0x1d8)](_0xbf1591(0x15e))
          [_0xbf1591(0x193)](_0xbf1591(0xf7)),
        $(
          "input[name=\x22" +
            _0x807a1e[_0xbf1591(0x13f)] +
            _0xbf1591(0x149) +
            _0x807a1e[_0xbf1591(0x198)] +
            "\x22]"
        )[_0xbf1591(0x1c9)](_0xbf1591(0x18b));
    else
      _0x807a1e["val"] === "on"
        ? ($(_0xbf1591(0x148) + _0x807a1e[_0xbf1591(0x13f)] + "\x22]")[
            "click"
          ](),
          $(_0xbf1591(0x148) + _0x807a1e[_0xbf1591(0x13f)] + "\x22]")
            [_0xbf1591(0x1d8)](".w-checkbox-input")
            [_0xbf1591(0x193)](_0xbf1591(0xf7)),
          $(_0xbf1591(0x148) + _0x807a1e[_0xbf1591(0x13f)] + "\x22]")[
            _0xbf1591(0x1c9)
          ](_0xbf1591(0x18b)))
        : ($(_0xbf1591(0x148) + _0x807a1e[_0xbf1591(0x13f)] + "\x22]")[
            _0xbf1591(0x198)
          ](_0x807a1e[_0xbf1591(0x198)]),
          $(_0xbf1591(0x156) + _0x807a1e[_0xbf1591(0x13f)] + "\x22]")[
            _0xbf1591(0x198)
          ](_0x807a1e[_0xbf1591(0x198)]),
          $("select[name=\x22" + _0x807a1e[_0xbf1591(0x13f)] + "\x22]")
            [_0xbf1591(0x12b)](
              _0xbf1591(0x143) + _0x807a1e[_0xbf1591(0x198)] + "\x22]"
            )
            [_0xbf1591(0x106)](_0xbf1591(0x19f), !![]),
          $(_0xbf1591(0x148) + _0x807a1e[_0xbf1591(0x13f)] + "\x22]")[
            _0xbf1591(0x1c9)
          ](_0xbf1591(0x18b)),
          $(_0xbf1591(0x148) + _0x807a1e[_0xbf1591(0x13f)] + "\x22]")[
            "trigger"
          ](_0xbf1591(0x178)));
  }),
  $(_0x357ff5(0x121))
    [_0x357ff5(0x12b)](_0x357ff5(0x18b))
    [_0x357ff5(0x1c9)](_0x357ff5(0x18b)),
  $(_0x357ff5(0x121))
    [_0x357ff5(0x12b)](_0x357ff5(0x18b))
    [_0x357ff5(0x1c9)](_0x357ff5(0x178)),
  $(_0x357ff5(0x121))
    [_0x357ff5(0x12b)](_0x357ff5(0x1c3))
    ["trigger"](_0x357ff5(0x178)),
  $(_0x357ff5(0x121))
    [_0x357ff5(0x12b)](_0x357ff5(0x117))
    ["trigger"](_0x357ff5(0x178)));
quiz &&
  steps[_0x357ff5(0x131)](function () {
    const _0x18c95d = _0x357ff5;
    $(this)[_0x18c95d(0x11e)]()[_0x18c95d(0x119)](_0x18c95d(0x1c2), !![]),
      $(this)["children"]()[_0x18c95d(0x119)](_0x18c95d(0x104), 0xfa);
  });
function disableBtn(_0x3f2c88) {
  const _0x65d018 = _0x357ff5;
  (fill = ![]),
    !customError &&
      ($(_0x65d018(0x16d))[_0x65d018(0x19c)]({
        opacity: _0x65d018(0x17d),
        "pointer-events": _0x65d018(0x118),
      }),
      $(_0x65d018(0x16d))["addClass"]("disabled"),
      $(_0x65d018(0x1c4))[_0x65d018(0x19c)]({
        opacity: "0.4",
        "pointer-events": "none",
      }),
      $("[data-form=\x22submit-btn\x22]")[_0x65d018(0x193)]("disabled"),
      $(_0x65d018(0x147))[_0x65d018(0x19c)]({
        opacity: _0x65d018(0x17d),
        "pointer-events": _0x65d018(0x118),
      }),
      $("[data-form-ms=\x22submit-btn\x22]")[_0x65d018(0x193)](
        _0x65d018(0x141)
      ));
}
function enableBtn() {
  const _0xe40753 = _0x357ff5;
  (fill = !![]),
    $("[data-form=\x22next-btn\x22]")[_0xe40753(0x19c)]({
      "pointer-events": _0xe40753(0x108),
      opacity: "1",
    }),
    $(_0xe40753(0x16d))[_0xe40753(0xf6)](_0xe40753(0x141)),
    $("[data-form=\x22submit-btn\x22]")[_0xe40753(0x19c)]({
      "pointer-events": _0xe40753(0x108),
      opacity: "1",
    }),
    $("[data-form=\x22submit-btn\x22]")["removeClass"]("disabled"),
    $(_0xe40753(0x147))[_0xe40753(0x19c)]({
      "pointer-events": _0xe40753(0x108),
      opacity: "1",
    }),
    $(_0xe40753(0x147))["removeClass"](_0xe40753(0x141));
}
function saveFilledInput() {
  const _0xfa446d = _0x357ff5;
  $(_0xfa446d(0x150))
    ["not"](_0xfa446d(0x1af))
    [_0xfa446d(0x131)](function () {
      const _0x38cce9 = _0xfa446d;
      $(this)[_0x38cce9(0x119)](_0x38cce9(0x128)) === _0x38cce9(0x1d3) ||
      $(this)[_0x38cce9(0x119)](_0x38cce9(0x128)) === _0x38cce9(0x127)
        ? $(this)[_0x38cce9(0x106)]("checked") &&
          (filledInput["some"](
            (_0x3e7cf2) =>
              _0x3e7cf2[_0x38cce9(0x1dd)] ===
              $(this)[_0x38cce9(0x119)](_0x38cce9(0x136))
          )
            ? ((filledInput = filledInput["filter"](
                (_0x21a94d) =>
                  _0x21a94d[_0x38cce9(0x1dd)] !== $(this)["attr"]("name")
              )),
              $(this)["val"]() !== "" &&
                filledInput[_0x38cce9(0x1e4)]({
                  inputName: $(this)[_0x38cce9(0x119)](_0x38cce9(0x136)),
                  value: $(this)[_0x38cce9(0x198)](),
                }))
            : $(this)["val"]() !== "" &&
              filledInput[_0x38cce9(0x1e4)]({
                inputName: $(this)[_0x38cce9(0x119)](_0x38cce9(0x136)),
                value: $(this)[_0x38cce9(0x198)](),
              }))
        : filledInput[_0x38cce9(0x172)](
            (_0x5de876) =>
              _0x5de876[_0x38cce9(0x1dd)] ===
              $(this)[_0x38cce9(0x119)](_0x38cce9(0x136))
          )
        ? ((filledInput = filledInput[_0x38cce9(0x1f0)](
            (_0x2cf742) =>
              _0x2cf742[_0x38cce9(0x1dd)] !==
              $(this)[_0x38cce9(0x119)](_0x38cce9(0x136))
          )),
          $(this)[_0x38cce9(0x198)]() !== "" &&
            filledInput["push"]({
              inputName: $(this)[_0x38cce9(0x119)](_0x38cce9(0x136)),
              value: $(this)[_0x38cce9(0x198)](),
            }))
        : $(this)[_0x38cce9(0x198)]() !== "" &&
          filledInput[_0x38cce9(0x1e4)]({
            inputName: $(this)[_0x38cce9(0x119)](_0x38cce9(0x136)),
            value: $(this)[_0x38cce9(0x198)](),
          });
    }),
    filledInput &&
      filledInput["forEach"]((_0x5a27df) => {
        const _0x154b16 = _0xfa446d;
        urlFormly[_0x154b16(0x1e2)][_0x154b16(0x15f)](_0x5a27df["inputName"]),
          urlFormly[_0x154b16(0x1e2)]["set"](
            _0x5a27df[_0x154b16(0x1dd)],
            _0x5a27df[_0x154b16(0x152)]
          ),
          window[_0x154b16(0x1a0)][_0x154b16(0x168)](null, null, urlFormly);
      }),
    localStorage[_0xfa446d(0x1c6)](_0xfa446d(0x11d)),
    localStorage[_0xfa446d(0x165)](
      _0xfa446d(0x11d),
      JSON[_0xfa446d(0x1a8)](filledInput)
    );
}
function scrollTop() {
  const _0x2cd424 = _0x357ff5;
  scrollToTop &&
    $(_0x2cd424(0xf4))["animate"](
      {
        scrollTop:
          $(_0x2cd424(0x121))[_0x2cd424(0xf9)]()["top"] - scrollTopOffset,
      },
      0x3e8
    );
}
function updateStep() {
  const _0x45b4ad = _0x357ff5;
  scrollTop(),
    (skip = ![]),
    $("[data-form=\x22custom-progress-indicator\x22]")[_0x45b4ad(0xf6)](
      "disabled"
    );
  $(_0x45b4ad(0x112))["data"](_0x45b4ad(0x101)) &&
    (steps[_0x45b4ad(0x12b)](_0x45b4ad(0x135))[_0x45b4ad(0x131)](function () {
      const _0x14a020 = _0x45b4ad;
      $(
        $(_0x14a020(0x10f))[
          $(this)[_0x14a020(0x1bb)](_0x14a020(0x1e0))[_0x14a020(0x145)]()
        ]
      ),
        $(this)[_0x14a020(0x198)]() === "" && emptyInput++;
    }),
    emptyInput > 0x0
      ? $(_0x45b4ad(0x1b0))[_0x45b4ad(0x193)]("disabled")
      : $("input[type=\x22submit\x22]")[_0x45b4ad(0xf6)]("disabled"));
  $(_0x45b4ad(0x10f))[_0x45b4ad(0xf6)](_0x45b4ad(0xfc)),
    $("[data-form=\x22custom-progress-indicator\x22]")["addClass"]("disabled"),
    $($("[data-form=\x22custom-progress-indicator\x22]")[x])[_0x45b4ad(0x193)](
      _0x45b4ad(0xfc)
    ),
    (selection = selections[_0x45b4ad(0x1f0)](
      (_0x52cb3a) => _0x52cb3a[_0x45b4ad(0x12e)] === x - 0x1
    ));
  next &&
    (x = getSafe(() => selection[0x0][_0x45b4ad(0x129)])
      ? parseInt(getSafe(() => selection[0x0]["skipTo"]))
      : x);
  $(_0x45b4ad(0x14c))[_0x45b4ad(0x1b6)](), steps["hide"]();
  reinitIX === !![] && window["Webflow"][_0x45b4ad(0x18c)]();
  $(progressbar)["removeClass"](_0x45b4ad(0xfc));
  for (i = 0x0; i <= x; i++) {
    countCard
      ? $(progressbar[i])[_0x45b4ad(0x193)](_0x45b4ad(0xfc))
      : !$(steps[i])[_0x45b4ad(0x1f2)](_0x45b4ad(0x15a)) &&
        $(progressbar[i])["addClass"]("current");
  }
  reinitIX === !![]
    ? (window[_0x45b4ad(0x155)] &&
        window[_0x45b4ad(0x155)]["require"]("ix2")["init"](),
      document["dispatchEvent"](new Event(_0x45b4ad(0x123))),
      $(steps[x])[_0x45b4ad(0x120)]())
    : $(steps[x])[_0x45b4ad(0x177)]("slow");
  x === 0x0 &&
    !$(steps[x])[_0x45b4ad(0x1f2)](_0x45b4ad(0x15a)) &&
    $(steps[x])[_0x45b4ad(0x12b)]("[data-answer]")[_0x45b4ad(0x120)]();
  selection[_0x45b4ad(0x157)] > 0x0
    ? $(steps[x])
        ["find"](_0x45b4ad(0x1c1) + selection[0x0][_0x45b4ad(0x19f)] + "\x22]")
        [_0x45b4ad(0x120)]()
    : $(steps[x])
        [_0x45b4ad(0x12b)](_0x45b4ad(0x1c1) + answer + "\x22]")
        ["show"]();
  if (x === 0x0)
    $(_0x45b4ad(0x11f))["hide"](),
      $(_0x45b4ad(0x16d))[_0x45b4ad(0x120)](),
      $("[data-form=\x22submit-btn\x22]")[_0x45b4ad(0x1b6)]();
  else {
    if (
      x === steps[_0x45b4ad(0x157)] - 0x1 ||
      $(steps[x])["find"](_0x45b4ad(0x12f))["length"] > 0x0
    ) {
      $(_0x45b4ad(0x16d))["hide"]();
      if (
        $(steps[x])
          [_0x45b4ad(0x12b)](_0x45b4ad(0x1aa))
          ["data"](_0x45b4ad(0x1f1))
      )
        $(steps[x])["find"](_0x45b4ad(0x1aa))[_0x45b4ad(0x120)]();
      else
        $(_0x45b4ad(0x16d))["data"](_0x45b4ad(0x1f1)) &&
          $(_0x45b4ad(0x16d))[_0x45b4ad(0x120)]();
      $(_0x45b4ad(0x1c4))[_0x45b4ad(0x120)](),
        $(_0x45b4ad(0x147))[_0x45b4ad(0x120)](),
        $(_0x45b4ad(0x11f))[_0x45b4ad(0x120)]();
    } else
      $(_0x45b4ad(0x16d))[_0x45b4ad(0x120)](),
        $(_0x45b4ad(0x11f))[_0x45b4ad(0x120)](),
        $("[data-form=\x22submit-btn\x22]")["hide"](),
        $(_0x45b4ad(0x147))["hide"]();
  }
  $($(steps[x])[_0x45b4ad(0x12b)](_0x45b4ad(0x1a2))[0x0])[_0x45b4ad(0x1b5)](),
    $($(steps[x])["find"](_0x45b4ad(0x113))[0x0])[_0x45b4ad(0x1b5)](),
    validation();
  for (idx = 0x0; idx <= x; idx++) {
    $($(_0x45b4ad(0x10f))[idx])["removeClass"](_0x45b4ad(0x141));
  }
}
function validateEmail(_0x1ca3e7, _0x438280, _0x951e78) {
  const _0xb67042 = _0x357ff5;
  let _0x1beb48 = _0x1ca3e7["includes"]("@")
    ? _0x1ca3e7[_0xb67042(0x1e5)]("@")[0x1][_0xb67042(0x1e5)](".")[0x0]
    : [];
  dom = [];
  _0x438280 !== undefined &&
    _0x438280[_0xb67042(0x1e5)](",")[_0xb67042(0xf8)](function (_0x5629cf) {
      const _0x50ef2b = _0xb67042;
      _0x5629cf[_0x50ef2b(0x1ba)](_0x1beb48) &&
        dom[_0x50ef2b(0x1e4)](_0x1beb48);
    });
  dom[_0xb67042(0x157)] > 0x0 ? (domainAllowed = ![]) : (domainAllowed = !![]);
  var _0x4180c8 = /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,20})?$/;
  console["log"](_0x4180c8[_0xb67042(0x17b)](_0x1ca3e7)),
    !_0x4180c8[_0xb67042(0x17b)](_0x1ca3e7) || !domainAllowed
      ? ((emailFilled = ![]),
        unfilledArr[_0xb67042(0x1e4)]({ input: _0x951e78 }))
      : (emailFilled = !![]);
}
function _0x2a88(_0x2c7b6c, _0x41d418) {
  const _0x457470 = _0x4574();
  return (
    (_0x2a88 = function (_0x2a88f4, _0x1e44d6) {
      _0x2a88f4 = _0x2a88f4 - 0xf2;
      let _0x405084 = _0x457470[_0x2a88f4];
      return _0x405084;
    }),
    _0x2a88(_0x2c7b6c, _0x41d418)
  );
}
function phoneValidation(_0x50e8d4, _0x3b0c4f, _0x1d5b27) {
  const _0x103266 = _0x357ff5;
  if (phoneFormat)
    return _0x50e8d4[_0x103266(0x1d0)](
      new RegExp(phoneFormat["slice"](0x1, -0x1))
    ) && _0x3b0c4f >= _0x1d5b27
      ? !![]
      : ![];
  else {
    if (_0x3b0c4f >= _0x1d5b27) return !![];
  }
}
function validation() {
  const _0x29129b = _0x357ff5;
  $(steps[x])["data"](_0x29129b(0x15a)) && enableBtn();
  (unfilledArr = []),
    (inputFilled = !![]),
    (radioFilled = !![]),
    (checkboxFilled = !![]),
    (numFilled = !![]),
    (fileFilled = !![]),
    (selectFilled = !![]),
    (textareaFilled = !![]),
    (telFilled = !![]),
    (emailFilled = !![]),
    (emptyInput = 0x0),
    (empReqInput = []),
    (empReqSelect = []),
    (empReqTextarea = []),
    (empReqNum = []),
    (empReqFile = []),
    (empReqRadio = []),
    (textareaLength = $(steps[x])[_0x29129b(0x12b)](_0x29129b(0x1ee))[
      "length"
    ]),
    (textInputLength = $(steps[x])[_0x29129b(0x12b)](_0x29129b(0x186))[
      _0x29129b(0x157)
    ]),
    (selectInputLength = $(steps[x])[_0x29129b(0x12b)](_0x29129b(0x1e9))[
      _0x29129b(0x157)
    ]),
    (emailInputLength = $(steps[x])[_0x29129b(0x12b)](_0x29129b(0x1ad))[
      _0x29129b(0x157)
    ]),
    (checkboxInputLength = $(steps[x])[_0x29129b(0x12b)](_0x29129b(0x195))[
      "length"
    ]);
  textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0
    ? disableBtn()
    : enableBtn();
  checkCount = $(steps[x])[_0x29129b(0x1f2)](_0x29129b(0x1d3))
    ? $(steps[x])["data"](_0x29129b(0x1d3))
    : $(steps[x])["find"]("[data-checkbox]")["length"] > 0x0
    ? $(steps[x])
        [_0x29129b(0x12b)](_0x29129b(0x170))
        [_0x29129b(0x1f2)](_0x29129b(0x1d3))
    : 0x0;
  if (!logicExtra)
    $(steps[x])[_0x29129b(0x12b)](_0x29129b(0x13c))["is"](_0x29129b(0x17a)) &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])[_0x29129b(0x12b)](_0x29129b(0x189))[_0x29129b(0x157)]
        ? $(steps[x])
            [_0x29129b(0x12b)](_0x29129b(0x189))
            [_0x29129b(0x131)](function () {
              const _0x835de4 = _0x29129b;
              $(this)["is"](_0x835de4(0xfb))
                ? $(steps[x])["find"](
                    ":input[type=\x22checkbox\x22][required]"
                  )[_0x835de4(0x157)] < 0x1 &&
                  ((checkboxFilled = !![]),
                  resetInputErrorMessage(
                    $(this)[_0x835de4(0x119)](_0x835de4(0x136))
                  ))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0x835de4(0x1e4)]({
                    input: $(this)["attr"](_0x835de4(0x136)),
                  }));
            })
        : $(steps[x])[_0x29129b(0x12b)](
            ":input[type=\x22checkbox\x22]:checked"
          )[_0x29129b(0x157)] >= checkCount
        ? $(steps[x])[_0x29129b(0x12b)](_0x29129b(0x1d2))[_0x29129b(0x157)] >
          0x0
          ? $(steps[x])
              [_0x29129b(0x12b)](":input[type=\x22checkbox\x22][required]")
              [_0x29129b(0x131)](function () {
                const _0x3892cf = _0x29129b;
                !$(this)["is"](_0x3892cf(0xfb))
                  ? ((checkboxFilled = ![]),
                    unfilledArr["push"]({
                      input: $(this)["attr"](_0x3892cf(0x136)),
                    }))
                  : ((checkboxFilled = !![]),
                    $(steps[x])[_0x3892cf(0x12b)](_0x3892cf(0x158))[
                      _0x3892cf(0x157)
                    ] >=
                      $(steps[x])[_0x3892cf(0x12b)](_0x3892cf(0x1d2))[
                        "length"
                      ] &&
                      resetInputErrorMessage(
                        $(steps[x])
                          [_0x3892cf(0x12b)](_0x3892cf(0x189))
                          ["attr"](_0x3892cf(0x136))
                      ));
              })
          : ((checkboxFilled = !![]),
            resetInputErrorMessage(
              $(steps[x])
                [_0x29129b(0x12b)](_0x29129b(0x189))
                ["attr"](_0x29129b(0x136))
            ))
        : ((checkboxFilled = ![]),
          $(steps[x])
            [_0x29129b(0x12b)](_0x29129b(0x1d2))
            [_0x29129b(0x131)](function () {
              const _0x5d31c4 = _0x29129b;
              $(this)[_0x5d31c4(0x17e)](_0x5d31c4(0xfb)) &&
                unfilledArr["push"]({
                  input: $(this)["attr"](_0x5d31c4(0x136)),
                });
            }),
          unfilledArr["push"]({
            input: $(steps[x])
              [_0x29129b(0x12b)](_0x29129b(0x189))
              [_0x29129b(0x119)](_0x29129b(0x136)),
          }))),
      $(steps[x])
        [_0x29129b(0x12b)]("input:radio[required]")
        [_0x29129b(0x131)](function (_0x2e1bfb) {
          const _0x30d60d = _0x29129b;
          var _0x349520 = $(this)[_0x30d60d(0x119)](_0x30d60d(0x136));
          $(_0x30d60d(0x1b1) + _0x349520 + _0x30d60d(0x1a7))[
            _0x30d60d(0x157)
          ] == 0x0
            ? (!empReqRadio["find"](
                (_0x3b2603) => _0x3b2603[_0x30d60d(0x18b)] === _0x2e1bfb
              ) && empReqRadio["push"]({ input: _0x2e1bfb }),
              unfilledArr[_0x30d60d(0x1e4)]({
                input: $(this)[_0x30d60d(0x119)](_0x30d60d(0x136)),
              }))
            : (empReqRadio = empReqRadio["filter"](
                (_0x69979d) => _0x69979d[_0x30d60d(0x18b)] !== _0x2e1bfb
              )),
            empReqRadio[_0x30d60d(0x157)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0x29129b(0x12b)](_0x29129b(0x1c8))
        [_0x29129b(0x131)](function (_0x22c1cb) {
          const _0x1fbc86 = _0x29129b;
          let _0x5a1348 = $(this)[_0x1fbc86(0x198)]()[_0x1fbc86(0x157)],
            _0x561edf = $(this)[_0x1fbc86(0x1f2)]("min-character")
              ? $(this)["data"](_0x1fbc86(0x18f))
              : 0x0;
          $(this)[_0x1fbc86(0x198)]() !== "" && _0x5a1348 >= _0x561edf
            ? (empReqInput = empReqInput[_0x1fbc86(0x1f0)](
                (_0xe5120a) => _0xe5120a[_0x1fbc86(0x18b)] !== _0x22c1cb
              ))
            : (!empReqInput[_0x1fbc86(0x12b)](
                (_0x1c60c5) => _0x1c60c5[_0x1fbc86(0x18b)] === _0x22c1cb
              ) && empReqInput["push"]({ input: _0x22c1cb }),
              unfilledArr["push"]({
                input: $(this)["attr"](_0x1fbc86(0x136)),
              })),
            empReqInput[_0x1fbc86(0x157)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x29129b(0x12b)](_0x29129b(0xfe))
        [_0x29129b(0x131)](function (_0x9e84d1) {
          const _0x50b306 = _0x29129b;
          if ($(this)["val"]() !== "") {
            let _0x4930e5 = $(this)[_0x50b306(0x198)]()[_0x50b306(0x157)],
              _0x2d17aa = $(this)[_0x50b306(0x1f2)](_0x50b306(0x18f))
                ? $(this)[_0x50b306(0x1f2)](_0x50b306(0x18f))
                : 0x0;
            if ($(this)[_0x50b306(0x1f2)](_0x50b306(0x15d))) {
              var _0x15f053 = phoneAutoFormat(
                $(this)[_0x50b306(0x1f2)]("phone-autoformat")
              );
              $(this)[_0x50b306(0x198)](_0x15f053($(this)[_0x50b306(0x198)]()));
            }
            phoneValidation($(this)[_0x50b306(0x198)](), _0x4930e5, _0x2d17aa)
              ? (empReqTel = empReqTel[_0x50b306(0x1f0)](
                  (_0x24e5ee) => _0x24e5ee[_0x50b306(0x18b)] !== _0x9e84d1
                ))
              : empReqTel[_0x50b306(0x1e4)]({ input: _0x9e84d1 });
          } else !empReqTel[_0x50b306(0x12b)]((_0x44ffda) => _0x44ffda["input"] === _0x9e84d1) && empReqTel["push"]({ input: _0x9e84d1 }), unfilledArr[_0x50b306(0x1e4)]({ input: $(this)[_0x50b306(0x119)](_0x50b306(0x136)) });
          empReqTel[_0x50b306(0x157)] === 0x0
            ? (telFilled = !![])
            : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x29129b(0x12b)](_0x29129b(0xf5))
        [_0x29129b(0x131)](function (_0x199614) {
          const _0x50c9a1 = _0x29129b;
          $(this)[_0x50c9a1(0x198)]() !== ""
            ? (empReqFile = empReqFile[_0x50c9a1(0x1f0)](
                (_0x1956da) => _0x1956da[_0x50c9a1(0x18b)] !== _0x199614
              ))
            : (!empReqFile[_0x50c9a1(0x12b)](
                (_0x4f4595) => _0x4f4595[_0x50c9a1(0x18b)] === _0x199614
              ) && empReqFile[_0x50c9a1(0x1e4)]({ input: _0x199614 }),
              unfilledArr["push"]({
                input: $(this)[_0x50c9a1(0x119)]("name"),
              })),
            empReqFile[_0x50c9a1(0x157)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x29129b(0x12b)](_0x29129b(0x10c))
        [_0x29129b(0x131)](function (_0x2228ec) {
          const _0x5b357f = _0x29129b;
          let _0x35c3bf = $(this)["val"]()[_0x5b357f(0x157)],
            _0x4ad766 = $(this)["data"]("min-character")
              ? $(this)[_0x5b357f(0x1f2)](_0x5b357f(0x18f))
              : 0x0;
          $(this)["val"]() !== "" && _0x35c3bf >= _0x4ad766
            ? (empReqNum = empReqNum[_0x5b357f(0x1f0)](
                (_0x1f717a) => _0x1f717a[_0x5b357f(0x18b)] !== _0x2228ec
              ))
            : (!empReqNum["find"](
                (_0x105eb4) => _0x105eb4[_0x5b357f(0x18b)] === _0x2228ec
              ) && empReqNum["push"]({ input: _0x2228ec }),
              unfilledArr[_0x5b357f(0x1e4)]({
                input: $(this)[_0x5b357f(0x119)](_0x5b357f(0x136)),
              })),
            empReqNum[_0x5b357f(0x157)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x29129b(0x12b)](_0x29129b(0x15c))
        [_0x29129b(0x131)](function (_0x3ebb6e) {
          const _0x5a887d = _0x29129b;
          let _0x3a7655 = $(this)[_0x5a887d(0x198)]();
          _0x3a7655 === "" && (_0x3a7655 = null),
            _0x3a7655 != null
              ? (empReqSelect = empReqSelect[_0x5a887d(0x1f0)](
                  (_0x4e58c1) => _0x4e58c1[_0x5a887d(0x18b)] !== _0x3ebb6e
                ))
              : (!empReqSelect[_0x5a887d(0x12b)](
                  (_0x3a2078) => _0x3a2078[_0x5a887d(0x18b)] === _0x3ebb6e
                ) && empReqSelect["push"]({ input: _0x3ebb6e }),
                unfilledArr[_0x5a887d(0x1e4)]({
                  input: $(this)["attr"](_0x5a887d(0x136)),
                })),
            empReqSelect[_0x5a887d(0x157)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x29129b(0x1d5))
        [_0x29129b(0x131)](function (_0x481445) {
          const _0x1efae7 = _0x29129b;
          let _0x121a9d = $(this)[_0x1efae7(0x198)]()["length"],
            _0x2292aa = $(this)[_0x1efae7(0x1f2)](_0x1efae7(0x18f))
              ? $(this)[_0x1efae7(0x1f2)]("min-character")
              : 0x0;
          $(this)[_0x1efae7(0x198)]() !== "" && _0x121a9d >= _0x2292aa
            ? (empReqTextarea = empReqTextarea["filter"](
                (_0x44c4df) => _0x44c4df["input"] !== _0x481445
              ))
            : (!empReqTextarea[_0x1efae7(0x12b)](
                (_0x4f2758) => _0x4f2758[_0x1efae7(0x18b)] === _0x481445
              ) && empReqTextarea[_0x1efae7(0x1e4)]({ input: _0x481445 }),
              unfilledArr[_0x1efae7(0x1e4)]({
                input: $(this)[_0x1efae7(0x119)]("name"),
              })),
            empReqTextarea[_0x1efae7(0x157)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x29129b(0x12b)](_0x29129b(0x160))
        [_0x29129b(0x131)](function () {
          const _0x4b64ff = _0x29129b;
          $(this)[_0x4b64ff(0x198)]() !== ""
            ? validateEmail(
                $(this)["val"](),
                $(this)["data"](_0x4b64ff(0x16b)),
                $(this)[_0x4b64ff(0x119)](_0x4b64ff(0x136))
              )
            : ((emailFilled = ![]),
              unfilledArr[_0x4b64ff(0x1e4)]({
                input: $(this)[_0x4b64ff(0x119)](_0x4b64ff(0x136)),
              }));
        });
  else {
    if ($(steps[x])[_0x29129b(0x1f2)](_0x29129b(0x15a)))
      (answer = $(steps[x])["find"](_0x29129b(0x1c7))["data"](_0x29129b(0xff))),
        (selections = selections[_0x29129b(0x1f0)](
          (_0x5a8d67) => _0x5a8d67[_0x29129b(0x12e)] !== x
        )),
        selections[_0x29129b(0x1e4)]({ step: x, selected: answer });
    else
      $(steps[x])
        [_0x29129b(0x12b)](_0x29129b(0x173))
        ["data"](_0x29129b(0x15a)) &&
        ((answer = $(steps[x])
          [_0x29129b(0x12b)](_0x29129b(0x173))
          [_0x29129b(0x1f2)]("go-to")),
        (selections = selections[_0x29129b(0x1f0)](
          (_0x484755) => _0x484755[_0x29129b(0x12e)] !== x
        )),
        selections["push"]({ step: x, selected: answer }));
    $(steps[x])
      [_0x29129b(0x12b)](_0x29129b(0x173))
      [_0x29129b(0x12b)](_0x29129b(0x13c))
      ["is"](_0x29129b(0x17a)) &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])[_0x29129b(0x12b)](":input[type=\x22checkbox\x22]")["length"]
        ? $(steps[x])
            [_0x29129b(0x12b)](":input[type=\x22checkbox\x22]")
            [_0x29129b(0x131)](function () {
              const _0x5b22ed = _0x29129b;
              $(this)["is"](":checked")
                ? $(steps[x])[_0x5b22ed(0x12b)](_0x5b22ed(0x135))[
                    _0x5b22ed(0x157)
                  ] < 0x1 &&
                  ((skipTo = undefined),
                  $(this)
                    [_0x5b22ed(0x1bb)](_0x5b22ed(0x10b))
                    [_0x5b22ed(0x1f2)]("skip-to") &&
                    (skipTo = $(this)
                      [_0x5b22ed(0x1bb)]("[data-skip-to]")
                      ["data"](_0x5b22ed(0x167))),
                  $(this)
                    ["parents"]("[data-go-to]")
                    [_0x5b22ed(0x119)](_0x5b22ed(0x1eb)) &&
                    ((answer = $(this)
                      [_0x5b22ed(0x1bb)](_0x5b22ed(0x1c7))
                      [_0x5b22ed(0x119)](_0x5b22ed(0x1eb))),
                    (selections = selections[_0x5b22ed(0x1f0)](
                      (_0x115f40) => _0x115f40["step"] !== x
                    )),
                    selections[_0x5b22ed(0x1e4)]({ step: x, selected: answer }),
                    skipTo &&
                      (selections[_0x5b22ed(0x1e4)]({
                        step: skipTo - 0x2,
                        selected: answer,
                      }),
                      (objIndex = selections[_0x5b22ed(0x1b2)](
                        (_0x2867a3) => _0x2867a3["step"] === x
                      )),
                      (selections[objIndex][_0x5b22ed(0x129)] =
                        parseInt(skipTo) - 0x1),
                      (selections[objIndex][_0x5b22ed(0x171)] = x))),
                  (checkboxFilled = !![]),
                  $(steps[x])["find"](
                    ":input[type=\x22checkbox\x22][required]:checked"
                  )[_0x5b22ed(0x157)] >=
                    $(steps[x])["find"](_0x5b22ed(0x1d2))["length"] &&
                    resetInputErrorMessage(
                      $(steps[x])
                        [_0x5b22ed(0x12b)](_0x5b22ed(0x189))
                        [_0x5b22ed(0x119)](_0x5b22ed(0x136))
                    ))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0x5b22ed(0x1e4)]({
                    input: $(this)["attr"]("name"),
                  }));
            })
        : $(steps[x])
            [_0x29129b(0x12b)]("[data-answer]:visible")
            [_0x29129b(0x12b)](_0x29129b(0x174))[_0x29129b(0x157)] >= checkCount
        ? ($(steps[x])
            [_0x29129b(0x12b)](_0x29129b(0x173))
            ["find"](_0x29129b(0x189))
            [_0x29129b(0x1bb)](_0x29129b(0x1c7))
            [_0x29129b(0x119)](_0x29129b(0x1eb)) &&
            ((skipTo = undefined),
            $(steps[x])
              ["find"](_0x29129b(0x173))
              ["find"](_0x29129b(0x189))
              [_0x29129b(0x1bb)](_0x29129b(0x10b))
              ["attr"]("data-skip-to") &&
              (skipTo = $(steps[x])
                [_0x29129b(0x12b)](_0x29129b(0x173))
                ["find"](_0x29129b(0x174))
                ["parents"](_0x29129b(0x10b))
                [_0x29129b(0x119)](_0x29129b(0x14f))),
            (answer = $(steps[x])
              [_0x29129b(0x12b)](_0x29129b(0x173))
              ["find"](_0x29129b(0x189))
              ["parents"](_0x29129b(0x1c7))
              [_0x29129b(0x119)]("data-go-to")),
            (selections = selections[_0x29129b(0x1f0)](
              (_0x3ea141) => _0x3ea141[_0x29129b(0x12e)] !== x
            )),
            selections[_0x29129b(0x1e4)]({ step: x, selected: answer }),
            skipTo &&
              (selections["push"]({ step: skipTo - 0x2, selected: answer }),
              (objIndex = selections[_0x29129b(0x1b2)](
                (_0x1f759a) => _0x1f759a[_0x29129b(0x12e)] === x
              )),
              (selections[objIndex][_0x29129b(0x129)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x29129b(0x171)] = x))),
          (selections = selections[_0x29129b(0x1f0)](
            (_0x202d19) => _0x202d19[_0x29129b(0x12e)] !== x
          )),
          selections[_0x29129b(0x1e4)]({ step: x, selected: answer }),
          (checkboxFilled = !![]),
          $(steps[x])[_0x29129b(0x12b)](
            ":input[type=\x22checkbox\x22][required]:checked"
          )[_0x29129b(0x157)] >=
            $(steps[x])[_0x29129b(0x12b)](_0x29129b(0x1d2))[_0x29129b(0x157)] &&
            resetInputErrorMessage(
              $(steps[x])["find"](_0x29129b(0x189))[_0x29129b(0x119)]("name")
            ))
        : ((checkboxFilled = ![]),
          $(steps[x])
            [_0x29129b(0x12b)](":input[type=\x22checkbox\x22][required]")
            [_0x29129b(0x131)](function () {
              const _0x99f112 = _0x29129b;
              $(this)[_0x99f112(0x17e)](_0x99f112(0xfb)) &&
                unfilledArr[_0x99f112(0x1e4)]({
                  input: $(this)["attr"]("name"),
                });
            }))),
      $(steps[x])
        [_0x29129b(0x12b)]("[data-answer]:visible")
        [_0x29129b(0x12b)](_0x29129b(0x130))
        ["each"](function (_0x387618) {
          const _0x5e7df1 = _0x29129b;
          var _0x2cf5e7 = $(this)[_0x5e7df1(0x119)](_0x5e7df1(0x136));
          $(_0x5e7df1(0x1b1) + _0x2cf5e7 + "\x22]:checked")[_0x5e7df1(0x157)] ==
          0x0
            ? (!empReqRadio[_0x5e7df1(0x12b)](
                (_0x49db4d) => _0x49db4d[_0x5e7df1(0x18b)] === _0x387618
              ) && empReqRadio[_0x5e7df1(0x1e4)]({ input: _0x387618 }),
              unfilledArr[_0x5e7df1(0x1e4)]({
                input: $(this)["attr"](_0x5e7df1(0x136)),
              }))
            : (empReqRadio = empReqRadio[_0x5e7df1(0x1f0)](
                (_0x3acb1c) => _0x3acb1c[_0x5e7df1(0x18b)] !== _0x387618
              )),
            empReqRadio[_0x5e7df1(0x157)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0x29129b(0x12b)](_0x29129b(0x173))
        [_0x29129b(0x12b)](":input[type=\x22text\x22][required]")
        [_0x29129b(0x131)](function (_0x19fba) {
          const _0x3cf857 = _0x29129b;
          let _0x47381f = $(this)["val"]()[_0x3cf857(0x157)],
            _0x5acaa8 = $(this)[_0x3cf857(0x1f2)](_0x3cf857(0x18f))
              ? $(this)["data"](_0x3cf857(0x18f))
              : 0x0;
          $(this)["val"]() !== "" && _0x47381f >= _0x5acaa8
            ? (empReqInput = empReqInput[_0x3cf857(0x1f0)](
                (_0x20cb8a) => _0x20cb8a[_0x3cf857(0x18b)] !== _0x19fba
              ))
            : (!empReqInput[_0x3cf857(0x12b)](
                (_0x53258f) => _0x53258f[_0x3cf857(0x18b)] === _0x19fba
              ) && empReqInput[_0x3cf857(0x1e4)]({ input: _0x19fba }),
              unfilledArr["push"]({
                input: $(this)[_0x3cf857(0x119)]("name"),
              })),
            empReqInput[_0x3cf857(0x157)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x29129b(0x12b)](_0x29129b(0x173))
        [_0x29129b(0x12b)](":input[type=\x22text\x22]")
        [_0x29129b(0x131)](function (_0x14eab3) {
          const _0xff6237 = _0x29129b;
          (skipTo = undefined),
            $(this)["parents"]("[data-skip-to]")["data"]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0xff6237(0x1bb)](_0xff6237(0x10b))
                [_0xff6237(0x1f2)]("skip-to")),
            $(this)
              [_0xff6237(0x1bb)]("[data-go-to]")
              [_0xff6237(0x119)](_0xff6237(0x1eb)) &&
              ((answer = $(this)
                ["parents"](_0xff6237(0x1c7))
                ["attr"](_0xff6237(0x1eb))),
              (selections = selections[_0xff6237(0x1f0)](
                (_0x19128f) => _0x19128f["step"] !== x
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections["findIndex"](
                  (_0x1f32bd) => _0x1f32bd["step"] === x
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x29129b(0x12b)](_0x29129b(0x173))
        [_0x29129b(0x12b)](_0x29129b(0x10c))
        [_0x29129b(0x131)](function (_0x3fdec7) {
          const _0x64b0ea = _0x29129b;
          let _0x390adf = $(this)["val"]()[_0x64b0ea(0x157)],
            _0xeb234c = $(this)[_0x64b0ea(0x1f2)]("min-character")
              ? $(this)[_0x64b0ea(0x1f2)](_0x64b0ea(0x18f))
              : 0x0;
          $(this)[_0x64b0ea(0x198)]() !== "" && _0x390adf >= _0xeb234c
            ? (empReqNum = empReqNum[_0x64b0ea(0x1f0)](
                (_0x344bb3) => _0x344bb3[_0x64b0ea(0x18b)] !== _0x3fdec7
              ))
            : (!empReqNum["find"](
                (_0x528eff) => _0x528eff[_0x64b0ea(0x18b)] === _0x3fdec7
              ) && empReqNum[_0x64b0ea(0x1e4)]({ input: _0x3fdec7 }),
              unfilledArr[_0x64b0ea(0x1e4)]({
                input: $(this)[_0x64b0ea(0x119)](_0x64b0ea(0x136)),
              })),
            empReqNum[_0x64b0ea(0x157)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x29129b(0x12b)](_0x29129b(0x173))
        [_0x29129b(0x12b)](":input[type=\x22number\x22]")
        ["each"](function (_0x718459) {
          const _0x4c8a74 = _0x29129b;
          (skipTo = undefined),
            $(this)
              [_0x4c8a74(0x1bb)]("[data-skip-to]")
              [_0x4c8a74(0x1f2)](_0x4c8a74(0x167)) !== "" &&
              (skipTo = $(this)
                [_0x4c8a74(0x1bb)]("[data-skip-to]")
                [_0x4c8a74(0x1f2)](_0x4c8a74(0x167))),
            $(this)[_0x4c8a74(0x1bb)](_0x4c8a74(0x1c7))["attr"]("data-go-to") &&
              ((answer = $(this)
                ["parents"](_0x4c8a74(0x1c7))
                [_0x4c8a74(0x119)](_0x4c8a74(0x1eb))),
              (selections = selections[_0x4c8a74(0x1f0)](
                (_0x1438c0) => _0x1438c0[_0x4c8a74(0x12e)] !== x
              )),
              selections[_0x4c8a74(0x1e4)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x4c8a74(0x1e4)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x4c8a74(0x1b2)](
                  (_0x46d438) => _0x46d438[_0x4c8a74(0x12e)] === x
                )),
                (selections[objIndex][_0x4c8a74(0x129)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x4c8a74(0x171)] = x)));
        }),
      $(steps[x])
        [_0x29129b(0x12b)](_0x29129b(0x173))
        [_0x29129b(0x12b)](_0x29129b(0xfe))
        [_0x29129b(0x131)](function (_0x5ae1ad) {
          const _0x440bd9 = _0x29129b;
          if ($(this)[_0x440bd9(0x198)]() !== "") {
            let _0x154b11 = $(this)["val"]()[_0x440bd9(0x157)],
              _0x3323e2 = $(this)[_0x440bd9(0x1f2)](_0x440bd9(0x18f))
                ? $(this)[_0x440bd9(0x1f2)]("min-character")
                : 0x0;
            if ($(this)[_0x440bd9(0x1f2)](_0x440bd9(0x15d))) {
              var _0x59009d = phoneAutoFormat(
                $(this)[_0x440bd9(0x1f2)](_0x440bd9(0x15d))
              );
              $(this)[_0x440bd9(0x198)](_0x59009d($(this)[_0x440bd9(0x198)]()));
            }
            phoneValidation($(this)[_0x440bd9(0x198)](), _0x154b11, _0x3323e2)
              ? (empReqTel = empReqTel[_0x440bd9(0x1f0)](
                  (_0x3da4ba) => _0x3da4ba["input"] !== _0x5ae1ad
                ))
              : empReqTel[_0x440bd9(0x1e4)]({ input: _0x5ae1ad });
          } else !empReqTel["find"]((_0x408832) => _0x408832[_0x440bd9(0x18b)] === _0x5ae1ad) && empReqTel[_0x440bd9(0x1e4)]({ input: _0x5ae1ad }), unfilledArr[_0x440bd9(0x1e4)]({ input: $(this)[_0x440bd9(0x119)](_0x440bd9(0x136)) });
          empReqTel[_0x440bd9(0x157)] === 0x0
            ? (telFilled = !![])
            : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x29129b(0x12b)](_0x29129b(0x173))
        [_0x29129b(0x12b)](":input[type=\x22tel\x22]")
        [_0x29129b(0x131)](function (_0x20298e) {
          const _0x160078 = _0x29129b;
          (skipTo = undefined),
            $(this)
              [_0x160078(0x1bb)]("[data-skip-to]")
              [_0x160078(0x1f2)](_0x160078(0x167)) !== "" &&
              (skipTo = $(this)
                [_0x160078(0x1bb)](_0x160078(0x10b))
                [_0x160078(0x1f2)](_0x160078(0x167))),
            $(this)
              [_0x160078(0x1bb)](_0x160078(0x1c7))
              [_0x160078(0x119)]("data-go-to") &&
              ((answer = $(this)
                [_0x160078(0x1bb)](_0x160078(0x1c7))
                [_0x160078(0x119)]("data-go-to")),
              (selections = selections[_0x160078(0x1f0)](
                (_0x26dc8c) => _0x26dc8c[_0x160078(0x12e)] !== x
              )),
              selections[_0x160078(0x1e4)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x160078(0x1e4)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x160078(0x1b2)](
                  (_0x4adfd0) => _0x4adfd0[_0x160078(0x12e)] === x
                )),
                (selections[objIndex][_0x160078(0x129)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x29129b(0x12b)](_0x29129b(0x173))
        [_0x29129b(0x12b)](_0x29129b(0xf5))
        [_0x29129b(0x131)](function (_0x33d37f) {
          const _0x298d0b = _0x29129b;
          $(this)[_0x298d0b(0x198)]() !== ""
            ? (empReqFile = empReqFile[_0x298d0b(0x1f0)](
                (_0x15944d) => _0x15944d[_0x298d0b(0x18b)] !== _0x33d37f
              ))
            : (!empReqFile[_0x298d0b(0x12b)](
                (_0x4df960) => _0x4df960[_0x298d0b(0x18b)] === _0x33d37f
              ) && empReqFile[_0x298d0b(0x1e4)]({ input: _0x33d37f }),
              unfilledArr[_0x298d0b(0x1e4)]({
                input: $(this)[_0x298d0b(0x119)]("name"),
              })),
            empReqFile[_0x298d0b(0x157)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x29129b(0x12b)](_0x29129b(0x173))
        [_0x29129b(0x12b)](_0x29129b(0x1e1))
        [_0x29129b(0x131)](function (_0x2fde85) {
          const _0x3959b2 = _0x29129b;
          (skipTo = undefined),
            $(this)[_0x3959b2(0x1bb)](_0x3959b2(0x10b))["data"]("skip-to") !==
              "" &&
              (skipTo = $(this)
                ["parents"](_0x3959b2(0x10b))
                [_0x3959b2(0x1f2)](_0x3959b2(0x167))),
            $(this)
              [_0x3959b2(0x1bb)](_0x3959b2(0x1c7))
              ["attr"](_0x3959b2(0x1eb)) &&
              ((answer = $(this)
                [_0x3959b2(0x1bb)](_0x3959b2(0x1c7))
                [_0x3959b2(0x119)](_0x3959b2(0x1eb))),
              (selections = selections[_0x3959b2(0x1f0)](
                (_0xf04dc3) => _0xf04dc3["step"] !== x
              )),
              selections[_0x3959b2(0x1e4)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0x3959b2(0x1b2)](
                  (_0x90b974) => _0x90b974[_0x3959b2(0x12e)] === x
                )),
                (selections[objIndex][_0x3959b2(0x129)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x3959b2(0x171)] = x)));
        }),
      $(steps[x])
        ["find"](_0x29129b(0x173))
        ["find"](_0x29129b(0x15c))
        [_0x29129b(0x131)](function (_0x5efe2d) {
          const _0x333714 = _0x29129b;
          $(this)[_0x333714(0x198)]() !== ""
            ? (empReqSelect = empReqSelect[_0x333714(0x1f0)](
                (_0x48377a) => _0x48377a[_0x333714(0x18b)] !== _0x5efe2d
              ))
            : (!empReqSelect[_0x333714(0x12b)](
                (_0x20346a) => _0x20346a["input"] === _0x5efe2d
              ) && empReqSelect["push"]({ input: _0x5efe2d }),
              unfilledArr[_0x333714(0x1e4)]({
                input: $(this)[_0x333714(0x119)](_0x333714(0x136)),
              })),
            empReqSelect[_0x333714(0x157)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x29129b(0x12b)](_0x29129b(0x173))
        [_0x29129b(0x12b)](_0x29129b(0x117))
        [_0x29129b(0x131)](function (_0x2b7c7f) {
          const _0x1ebc63 = _0x29129b;
          (skipTo = undefined),
            $(this)
              ["parents"]("[data-skip-to]")
              [_0x1ebc63(0x1f2)](_0x1ebc63(0x167)) !== "" &&
              (skipTo = $(this)
                [_0x1ebc63(0x1bb)](_0x1ebc63(0x10b))
                ["data"]("skip-to")),
            $(this)["parents"](_0x1ebc63(0x1c7))["attr"](_0x1ebc63(0x1eb)) &&
              ((answer = $(this)
                [_0x1ebc63(0x1bb)]("[data-go-to]")
                [_0x1ebc63(0x119)](_0x1ebc63(0x1eb))),
              (selections = selections[_0x1ebc63(0x1f0)](
                (_0x2be08e) => _0x2be08e["step"] !== x
              )),
              selections[_0x1ebc63(0x1e4)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x1ebc63(0x1e4)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x496af4) => _0x496af4[_0x1ebc63(0x12e)] === x
                )),
                (selections[objIndex][_0x1ebc63(0x129)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x1ebc63(0x171)] = x)));
        }),
      $(steps[x])
        [_0x29129b(0x12b)](_0x29129b(0x173))
        ["find"](_0x29129b(0x1d5))
        ["each"](function (_0x14f0d6) {
          const _0x1c7d91 = _0x29129b;
          let _0x49210e = $(this)[_0x1c7d91(0x198)]()[_0x1c7d91(0x157)],
            _0x52d554 = $(this)[_0x1c7d91(0x1f2)](_0x1c7d91(0x18f))
              ? $(this)["data"](_0x1c7d91(0x18f))
              : 0x0;
          $(this)[_0x1c7d91(0x198)]() !== "" && _0x49210e >= _0x52d554
            ? (empReqTextarea = empReqTextarea[_0x1c7d91(0x1f0)](
                (_0x2948cf) => _0x2948cf[_0x1c7d91(0x18b)] !== _0x14f0d6
              ))
            : (!empReqTextarea["find"](
                (_0xe99d6f) => _0xe99d6f[_0x1c7d91(0x18b)] === _0x14f0d6
              ) && empReqTextarea[_0x1c7d91(0x1e4)]({ input: _0x14f0d6 }),
              unfilledArr["push"]({
                input: $(this)[_0x1c7d91(0x119)](_0x1c7d91(0x136)),
              })),
            empReqTextarea[_0x1c7d91(0x157)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x29129b(0x173))
        ["find"](_0x29129b(0x1c3))
        [_0x29129b(0x131)](function (_0x5605e8) {
          const _0x252a93 = _0x29129b;
          (skipTo = undefined),
            $(this)
              [_0x252a93(0x1bb)](_0x252a93(0x10b))
              [_0x252a93(0x1f2)]("skip-to") !== "" &&
              (skipTo = $(this)
                ["parents"](_0x252a93(0x10b))
                [_0x252a93(0x1f2)](_0x252a93(0x167))),
            $(this)
              [_0x252a93(0x1bb)]("[data-go-to]")
              [_0x252a93(0x119)](_0x252a93(0x1eb)) &&
              ((answer = $(this)
                [_0x252a93(0x1bb)]("[data-go-to]")
                [_0x252a93(0x119)](_0x252a93(0x1eb))),
              (selections = selections[_0x252a93(0x1f0)](
                (_0x20e977) => _0x20e977[_0x252a93(0x12e)] !== x
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x252a93(0x1e4)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x105658) => _0x105658[_0x252a93(0x12e)] === x
                )),
                (selections[objIndex][_0x252a93(0x129)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x252a93(0x171)] = x)));
        }),
      $(steps[x])
        [_0x29129b(0x12b)](_0x29129b(0x173))
        [_0x29129b(0x12b)](":input[type=\x22email\x22][required]")
        [_0x29129b(0x131)](function (_0x124419) {
          const _0x4ddf82 = _0x29129b;
          $(this)[_0x4ddf82(0x198)]() !== ""
            ? validateEmail(
                $(this)["val"](),
                $(this)[_0x4ddf82(0x1f2)](_0x4ddf82(0x16b)),
                $(this)[_0x4ddf82(0x119)](_0x4ddf82(0x136))
              )
            : ((emailFilled = ![]),
              unfilledArr[_0x4ddf82(0x1e4)]({
                input: $(this)[_0x4ddf82(0x119)](_0x4ddf82(0x136)),
              }));
        }),
      $(steps[x])
        [_0x29129b(0x12b)](_0x29129b(0x173))
        ["find"](_0x29129b(0x1be))
        [_0x29129b(0x131)](function (_0x2350d6) {
          const _0xea7d86 = _0x29129b;
          (skipTo = undefined),
            $(this)
              [_0xea7d86(0x1bb)](_0xea7d86(0x10b))
              [_0xea7d86(0x1f2)](_0xea7d86(0x167)) !== "" &&
              (skipTo = $(this)
                [_0xea7d86(0x1bb)]("[data-skip-to]")
                [_0xea7d86(0x1f2)](_0xea7d86(0x167))),
            $(this)
              [_0xea7d86(0x1bb)](_0xea7d86(0x1c7))
              [_0xea7d86(0x119)](_0xea7d86(0x1eb)) &&
              ((answer = $(this)
                [_0xea7d86(0x1bb)](_0xea7d86(0x1c7))
                [_0xea7d86(0x119)](_0xea7d86(0x1eb))),
              (selections = selections[_0xea7d86(0x1f0)](
                (_0x4f63e6) => _0x4f63e6[_0xea7d86(0x12e)] !== x
              )),
              selections[_0xea7d86(0x1e4)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0xea7d86(0x1e4)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0xea7d86(0x1b2)](
                  (_0x27fb86) => _0x27fb86[_0xea7d86(0x12e)] === x
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0xea7d86(0x171)] = x)));
        });
  }
  $(steps[x])["find"](":input[type=\x22radio\x22]")["is"](_0x29129b(0xfb)) &&
    ((selArr = []),
    $(steps)
      [_0x29129b(0x12b)](_0x29129b(0x17f))
      ["each"](function (_0x44791d, _0x1b8b39) {
        const _0x1ca61f = _0x29129b;
        selArr["push"]({
          selected: $(this)[_0x1ca61f(0x1f2)](_0x1ca61f(0x19f)),
        });
      }),
    (selString = []),
    selArr[_0x29129b(0xf8)]((_0x54959e) =>
      selString[_0x29129b(0x1e4)](_0x54959e[_0x29129b(0x19f)])
    ),
    (selections = selections[_0x29129b(0x1f0)](
      (_0x2ce1ae) => _0x2ce1ae[_0x29129b(0x12e)] !== x
    )),
    $(steps[x])
      [_0x29129b(0x12b)](_0x29129b(0x173))
      [_0x29129b(0x12b)](":input[type=\x27radio\x27]:checked")
      [_0x29129b(0x131)](function () {
        const _0x326e2d = _0x29129b;
        skipTo = undefined;
        if (
          $(this)[_0x326e2d(0x1bb)](_0x326e2d(0x10b))["data"](_0x326e2d(0x167))
        )
          skipTo = $(this)
            [_0x326e2d(0x1bb)](_0x326e2d(0x10b))
            [_0x326e2d(0x1f2)](_0x326e2d(0x167));
        else
          $(this)[_0x326e2d(0x1f2)]("skip-to") &&
            (skipTo = $(this)["data"](_0x326e2d(0x167)));
        if ($(this)[_0x326e2d(0x1f2)]("go-to"))
          (answer = $(this)["attr"](_0x326e2d(0x1eb))),
            selections[_0x326e2d(0x1e4)]({ step: x, selected: answer }),
            skipTo &&
              (selections["push"]({ step: skipTo - 0x2, selected: answer }),
              (objIndex = selections["findIndex"](
                (_0x624895) => _0x624895[_0x326e2d(0x12e)] === x
              )),
              (selections[objIndex][_0x326e2d(0x129)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x326e2d(0x171)] = x));
        else
          $(this)
            ["parents"](_0x326e2d(0x1c7))
            [_0x326e2d(0x1f2)](_0x326e2d(0xff)) &&
            ((answer = $(this)
              ["parents"]("[data-go-to]")
              ["data"](_0x326e2d(0xff))),
            selections[_0x326e2d(0x1e4)]({ step: x, selected: answer }),
            skipTo &&
              (selections["push"]({ step: skipTo - 0x2, selected: answer }),
              (objIndex = selections[_0x326e2d(0x1b2)](
                (_0x1f0cea) => _0x1f0cea[_0x326e2d(0x12e)] === x
              )),
              (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x326e2d(0x171)] = x)));
      }),
    logicExtra
      ? ($(steps[x])
          [_0x29129b(0x12b)]("[data-answer]:visible")
          [_0x29129b(0x12b)]("[data-radio-skip]:visible")
          ["data"](_0x29129b(0x1b7)) === !![] ||
          $(steps[x])
            [_0x29129b(0x12b)](_0x29129b(0x10e))
            [_0x29129b(0x1f2)](_0x29129b(0x1b7)) === !![]) &&
        skip &&
        selections[_0x29129b(0x1f0)](
          (_0x4e8336) => _0x4e8336[_0x29129b(0x12e)] === x
        )["length"] > 0x0 &&
        textareaLength === 0x0 &&
        textInputLength === 0x0 &&
        emailInputLength === 0x0 &&
        checkboxInputLength === 0x0 &&
        setTimeout(function () {
          (next = !![]), nextStep(), selectionQuiz();
        }, $(steps[x])["find"](_0x29129b(0x13b))["data"](_0x29129b(0x1cd)))
      : $(steps[x])
          [_0x29129b(0x12b)]("[data-radio-skip]:visible")
          [_0x29129b(0x1f2)]("radio-skip") === !![] &&
        skip &&
        textareaLength === 0x0 &&
        textInputLength === 0x0 &&
        emailInputLength === 0x0 &&
        checkboxInputLength === 0x0 &&
        setTimeout(function () {
          (next = !![]), nextStep(), selectionQuiz();
        }, $(steps[x])
          [_0x29129b(0x12b)](_0x29129b(0x13b))
          [_0x29129b(0x1f2)](_0x29129b(0x1cd)))),
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
  const _0x1139d1 = _0x357ff5;
  $(_0x1139d1(0x16c))[_0x1139d1(0x1b6)](),
    unfilledArr[_0x1139d1(0x157)] > 0x0 &&
      unfilledArr[_0x1139d1(0xf8)](function (_0x5df46f) {
        const _0x3d759e = _0x1139d1;
        $(_0x3d759e(0x148) + _0x5df46f[_0x3d759e(0x18b)] + "\x22]")
          [_0x3d759e(0x1d8)](_0x3d759e(0x16c))
          ["fadeIn"](),
          $("input[name=\x22" + _0x5df46f[_0x3d759e(0x18b)] + "\x22]")
            [_0x3d759e(0x1bb)]()
            [_0x3d759e(0x11e)]("[data-text=\x22error-message\x22]")
            [_0x3d759e(0x177)](),
          $(_0x3d759e(0x156) + _0x5df46f[_0x3d759e(0x18b)] + "\x22]")
            [_0x3d759e(0x1d8)]("[data-text=\x22error-message\x22]")
            [_0x3d759e(0x177)](),
          $(_0x3d759e(0x175) + _0x5df46f[_0x3d759e(0x18b)] + "\x22]")
            [_0x3d759e(0x1d8)](_0x3d759e(0x16c))
            [_0x3d759e(0x177)]();
      });
}
function resetInputErrorMessage(_0x28f284) {
  const _0x51aa90 = _0x357ff5;
  $(_0x51aa90(0x148) + _0x28f284 + "\x22]")
    [_0x51aa90(0x1d8)](_0x51aa90(0x16c))
    [_0x51aa90(0x1b6)](),
    $("input[name=\x22" + _0x28f284 + "\x22]")
      [_0x51aa90(0x1bb)]()
      ["children"](_0x51aa90(0x16c))
      [_0x51aa90(0x1b6)](),
    $(_0x51aa90(0x156) + _0x28f284 + "\x22]")
      [_0x51aa90(0x1d8)](_0x51aa90(0x16c))
      [_0x51aa90(0x1b6)](),
    $(_0x51aa90(0x175) + _0x28f284 + "\x22]")
      [_0x51aa90(0x1d8)](_0x51aa90(0x16c))
      [_0x51aa90(0x1b6)]();
}
function nextStep() {
  const _0x15a734 = _0x357ff5;
  customError
    ? ($(_0x15a734(0x16c))[_0x15a734(0x1b6)](),
      fill
        ? (x++,
          countCard
            ? ((curStep = curStep + 0x1),
              $(_0x15a734(0x169))[_0x15a734(0x153)](steps[_0x15a734(0x157)]))
            : $(steps[x])[_0x15a734(0x1f2)](_0x15a734(0x15a))
            ? (curStep = curStep + 0x0)
            : (curStep = curStep + 0x1),
          $(_0x15a734(0x1ce))["text"](curStep),
          (progress = x),
          x <= steps[_0x15a734(0x157)] - 0x1 &&
            (updateStep(), memory && saveFilledInput()))
        : displayErrorMessage())
    : (x++,
      countCard
        ? ((curStep = curStep + 0x1),
          $("[data-text=\x22total-steps\x22]")[_0x15a734(0x153)](
            steps[_0x15a734(0x157)]
          ))
        : $(steps[x])[_0x15a734(0x1f2)](_0x15a734(0x15a))
        ? (curStep = curStep + 0x0)
        : (curStep = curStep + 0x1),
      $(_0x15a734(0x1ce))[_0x15a734(0x153)](curStep),
      x > progress && (progress = x),
      x <= steps[_0x15a734(0x157)] - 0x1 &&
        (updateStep(), memory && saveFilledInput()));
}
function backStep() {
  const _0x55bf58 = _0x357ff5;
  customError && $(_0x55bf58(0x16c))["hide"](),
    countCard
      ? ((curStep = curStep - 0x1),
        $(_0x55bf58(0x169))["text"](steps[_0x55bf58(0x157)]))
      : $(steps[x])[_0x55bf58(0x1f2)]("card")
      ? (curStep = curStep - 0x0)
      : (curStep = curStep - 0x1),
    $(_0x55bf58(0x1ce))["text"](curStep),
    x > 0x0 &&
      ($(progressbar[x])[_0x55bf58(0xf6)](_0x55bf58(0xfc)),
      selections[_0x55bf58(0x1f0)](
        (_0x35d4f5) => _0x35d4f5[_0x55bf58(0x129)] === x
      )[_0x55bf58(0x157)] > 0x0
        ? (x = parseInt(
            getSafe(
              () =>
                selections[_0x55bf58(0x1f0)](
                  (_0x2b85aa) => _0x2b85aa[_0x55bf58(0x129)] === x
                )[0x0][_0x55bf58(0x171)]
            )
          ))
        : x--,
      updateStep()),
    ($(steps[x])
      [_0x55bf58(0x12b)](_0x55bf58(0x1d4))
      [_0x55bf58(0x1f2)](_0x55bf58(0x1b7)) === !![] ||
      $(steps[x])
        [_0x55bf58(0x12b)](_0x55bf58(0x173))
        [_0x55bf58(0x12b)]("[data-radio-skip]:visible")
        [_0x55bf58(0x1f2)](_0x55bf58(0x1b7)) === !![] ||
      $(steps[x])
        [_0x55bf58(0x12b)]("[data-answer][data-radio-skip]:visible")
        [_0x55bf58(0x1f2)]("radio-skip") === !![]) &&
      ($(steps[x])
        [_0x55bf58(0x12b)](_0x55bf58(0x16a))
        [_0x55bf58(0x106)](_0x55bf58(0x115), ![]),
      $(steps[x])
        ["find"](".w-form-formradioinput")
        [_0x55bf58(0xf6)](_0x55bf58(0xf7)),
      validation());
}
weightedSelectionRange &&
  $(_0x357ff5(0x1db))[_0x357ff5(0x131)](function () {
    const _0x41c0ce = _0x357ff5;
    $(this)[_0x41c0ce(0x180)](
      "<div\x20data-range=\x22selection\x22\x20style=\x22display:none\x20!important\x22>" +
        $(this)[_0x41c0ce(0x1f2)]("selection") +
        _0x41c0ce(0x18e)
    );
  });
function selectionQuiz() {
  const _0x758c47 = _0x357ff5;
  if ($(this)["find"](_0x758c47(0x164))) {
    $(_0x758c47(0x1db))[_0x758c47(0x1b6)](),
      $(_0x758c47(0x196))[_0x758c47(0x1b6)]();
    if (weightedSelection) {
      (selTotal = 0x0),
        selArr[_0x758c47(0xf8)](function (_0x4c2b5c) {
          const _0x806c53 = _0x758c47;
          selTotal = selTotal + _0x4c2b5c[_0x806c53(0x19f)];
        }),
        $(_0x758c47(0x110))[_0x758c47(0x153)](selTotal);
      if ($(_0x758c47(0x133) + selTotal + "\x22]")[_0x758c47(0x157)] > 0x0)
        $("[data-selection=\x22" + selTotal + "\x22]")[_0x758c47(0x177)]();
      else
        $(_0x758c47(0xfd) + selTotal + ")")
          ? $(_0x758c47(0xfd) + selTotal + ")")
              [_0x758c47(0x126)](_0x758c47(0x1db))
              ["eq"](0x0)
              [_0x758c47(0x120)]()
          : $(_0x758c47(0x18a))["fadeIn"]();
    } else {
      let _0x4c683d = -0x1;
      $(_0x758c47(0x1db))[_0x758c47(0x131)](function (_0x3884a4) {
        const _0x5f2c9d = _0x758c47;
        $($("[data-selection]")[_0x3884a4])
          ["data"]("selection")
          [_0x5f2c9d(0x1ba)](selString["join"]()) && (_0x4c683d = _0x3884a4);
      }),
        _0x4c683d > -0x1
          ? $($(_0x758c47(0x1db))[_0x4c683d])[_0x758c47(0x177)]()
          : $("[data-selection=\x22other\x22]")[_0x758c47(0x177)]();
    }
  }
}
function triggerInputAllData() {
  savedFilledInput &&
    memory &&
    savedFilledInput["forEach"]((_0x1045be) => {
      const _0x5a6320 = _0x2a88;
      if (
        $(
          _0x5a6320(0x148) +
            _0x1045be[_0x5a6320(0x1dd)] +
            _0x5a6320(0x149) +
            _0x1045be[_0x5a6320(0x152)] +
            "\x22]"
        )[_0x5a6320(0x119)](_0x5a6320(0x128)) === "radio"
      )
        $(
          "input[name=\x22" +
            _0x1045be[_0x5a6320(0x1dd)] +
            _0x5a6320(0x149) +
            _0x1045be[_0x5a6320(0x152)] +
            "\x22]"
        )[_0x5a6320(0x1c9)](_0x5a6320(0x18b));
      else
        _0x1045be[_0x5a6320(0x152)] === "on"
          ? $(_0x5a6320(0x148) + _0x1045be[_0x5a6320(0x1dd)] + "\x22]")[
              _0x5a6320(0x1c9)
            ](_0x5a6320(0x18b))
          : ($(_0x5a6320(0x148) + _0x1045be[_0x5a6320(0x1dd)] + "\x22]")[
              _0x5a6320(0x1c9)
            ](_0x5a6320(0x18b)),
            $(_0x5a6320(0x148) + _0x1045be[_0x5a6320(0x1dd)] + "\x22]")[
              _0x5a6320(0x1c9)
            ]("change"));
    });
}
function _0x4574() {
  const _0x310f96 = [
    "debug-mode",
    "Webflow",
    "textarea[name=\x22",
    "length",
    ":input[type=\x22checkbox\x22][required]:checked",
    "log",
    "card",
    "span",
    "select[required]",
    "phone-autoformat",
    ".w-radio-input",
    "delete",
    ":input[type=\x22email\x22][required]",
    "[data-select-multiple]",
    "reset-delay",
    "<option>",
    "[data-btn=\x22check\x22]",
    "setItem",
    "ms-field",
    "skip-to",
    "replaceState",
    "[data-text=\x22total-steps\x22]",
    "input[type=\x22radio\x22]",
    "block-domain",
    "[data-text=\x22error-message\x22]",
    "[data-form=\x22next-btn\x22]",
    "novalidate",
    "click",
    "[data-checkbox]",
    "backTo",
    "some",
    "[data-answer]:visible",
    ":input[type=\x22checkbox\x22]:checked",
    "select[name=\x22",
    "edit-step",
    "fadeIn",
    "change",
    "2USytKW",
    "[type=\x22checkbox\x22]",
    "test",
    ".w-form-done",
    "0.4",
    "not",
    "[data-selected]:checked",
    "append",
    "scroll-top-offset",
    "[data-success-card=\x22",
    "enter",
    "[data-custom-error-message]",
    "logic-extra",
    "input[type=\x22text\x22][required]:visible",
    "[data-reinit]",
    "5863941stVnON",
    ":input[type=\x22checkbox\x22]",
    "[data-selection=\x22other\x22]",
    "input",
    "destroy",
    "last",
    "</div>",
    "min-character",
    "add-new",
    "[data-input-field]",
    "slice",
    "addClass",
    "stopPropagation",
    "input[type=\x22checkbox\x22]:visible",
    "[data-selection-weight]",
    "[data-input-field=\x22",
    "val",
    "replace",
    "Please\x20wait...",
    "keyCode",
    "css",
    "redirect",
    "15WiUDMz",
    "selected",
    "history",
    "[data-form=\x22next-btn\x22][type=\x22submit\x22]",
    "input[autofocus]",
    "1017090IuRwXU",
    "select-multiple",
    "[data-count-card]",
    "memory",
    "\x22]:checked",
    "stringify",
    "[data-display-index=\x22",
    "[data-form=\x22next-btn\x22][data-submit-show]",
    "data-input-field",
    "[data-clone=\x22",
    "input[type=\x22email\x22]:visible",
    "weighted-selection-range",
    "[type=\x22submit\x22]",
    "input[type=\x22submit\x22]",
    "input:radio[name=\x22",
    "findIndex",
    "redirect-delay",
    "data-name",
    "focus",
    "hide",
    "radio-skip",
    "url",
    "6FSQnNL",
    "includes",
    "parents",
    "[data-cms-select=input]",
    "ajaxComplete",
    ":input[type=\x22email\x22]",
    "[data-form=\x22step\x22]:not([data-card=\x22true\x22])",
    "[data-cms-select=cms]",
    "[data-answer=\x22",
    "data-radio-skip",
    "textarea",
    "[data-form=\x22submit-btn\x22]",
    "[data-query-param]",
    "removeItem",
    "[data-go-to]",
    ":input[type=\x22text\x22][required]",
    "trigger",
    "[data-index=\x22",
    "<br>Data\x20Go\x20To\x20=\x20",
    ".w-checkbox-input",
    "radio-delay",
    "[data-text=\x22current-step\x22]",
    "clone",
    "match",
    "[data-add-new]",
    ":input[type=\x22checkbox\x22][required]",
    "checkbox",
    "[data-radio-skip]:visible",
    "textarea[required]",
    "reinit",
    "[data-display-wrapper=\x22",
    "siblings",
    "required",
    "status",
    "[data-selection]",
    "clickable-all",
    "inputName",
    "_blank",
    "option[value=\x22$(this).val()\x22]",
    "[data-form=\x22step\x22]",
    ":input[type=\x22file\x22]",
    "searchParams",
    "href",
    "push",
    "split",
    "<br>Data\x20Answer\x20=\x20",
    "new-tab",
    "wait",
    "select[required]:visible",
    "parse",
    "data-go-to",
    "quiz",
    "count-card",
    "textarea[required]:visible",
    "submit",
    "filter",
    "submit-show",
    "data",
    "body",
    "328163NkZgfH",
    "html,\x20body",
    ":input[type=\x22file\x22][required]",
    "removeClass",
    "w--redirected-checked",
    "forEach",
    "offset",
    "input:checkbox",
    ":checked",
    "current",
    "[data-range]:contains(",
    ":input[type=\x22tel\x22][required]",
    "go-to",
    "3589243ZeZeMs",
    "clickable",
    "div.g-recaptcha",
    "[data-btn=\x22reset\x22]",
    "data-radio-delay",
    "metaKey",
    "prop",
    "shiftKey",
    "auto",
    "[data-display=\x22",
    "button",
    "[data-skip-to]",
    ":input[type=\x22number\x22][required]",
    "ctrlKey",
    "[data-answer][data-radio-skip]:visible",
    "[data-form=\x22custom-progress-indicator\x22]",
    "[data-text=\x22total-weight\x22]",
    "250yjAczo",
    "[data-clickable]",
    "textarea[autofocus]",
    "weighted-selection",
    "checked",
    "335372cnyujp",
    "select",
    "none",
    "attr",
    "[data-quiz]",
    "3918424hknLRd",
    "943332luPvXK",
    "filledInput",
    "children",
    "[data-form=\x22back-btn\x22]",
    "show",
    "[data-form=\x22multistep\x22]",
    "[data-reset-delay]",
    "readystatechange",
    "trim",
    "success",
    "parent",
    "radio",
    "type",
    "skipTo",
    "field",
    "find",
    "[data-weighted-selection]",
    "[data-form=\x22progress\x22]",
    "step",
    "[data-form=\x22submit\x22]:visible",
    "input:radio[required]",
    "each",
    "custom-error-message",
    "[data-selection=\x22",
    "keydown",
    ":input[required]",
    "name",
    "[data-cms-select=text]",
    "[data-memory]",
    "getItem",
    "[data-form=\x22progress-indicator\x22]",
    "[data-radio-delay]",
    ":input",
    "phone-validation",
    "scroll-top",
    "key",
    "preventDefault",
    "disabled",
    "[data-enter]",
    "option[value=\x22",
    "[data-redirect-delay]",
    "index",
    "[data-form=\x22submit-btn\x22]:visible",
    "[data-form-ms=\x22submit-btn\x22]",
    "input[name=\x22",
    "\x22][value=\x22",
    "input-field",
    "keypress",
    "[data-answer]",
    "https://webflow.com/api/v1/form/",
    "Enter",
    "data-skip-to",
    "form[data-form=\x22multistep\x22]\x20:input",
    "reset",
    "value",
    "text",
  ];
  _0x4574 = function () {
    return _0x310f96;
  };
  return _0x4574();
}
$(_0x357ff5(0x16d))["on"](_0x357ff5(0x16f), function () {
  (next = !![]), nextStep(), selectionQuiz();
}),
  $(_0x357ff5(0x11f))["on"]("click", function () {
    (next = ![]), (back = !![]), backStep();
  }),
  $(steps)
    [_0x357ff5(0x12b)](_0x357ff5(0x13c))
    ["on"](_0x357ff5(0x18b), function (_0x1cf01c) {
      const _0x305d05 = _0x357ff5;
      $(this)["attr"](_0x305d05(0x128)) === _0x305d05(0x127) && (skip = !![]),
        validation();
    });
$("[data-clickable-all]")["data"](_0x357ff5(0x1dc))
  ? $(_0x357ff5(0x10f))[_0x357ff5(0xf6)](_0x357ff5(0x141))
  : $(_0x357ff5(0x10f))[_0x357ff5(0x193)](_0x357ff5(0x141));
function clickableIndicator() {
  const _0x505315 = _0x357ff5;
  $(_0x505315(0x112))[_0x505315(0x1f2)](_0x505315(0x101)) &&
    ($(_0x505315(0x13a))[_0x505315(0xf6)](_0x505315(0xfc)),
    $(_0x505315(0x112))[_0x505315(0x1f2)](_0x505315(0x1dc))
      ? ((x = $(this)[_0x505315(0x145)]()), updateStep())
      : $(this)[_0x505315(0x145)]() <= progress &&
        ((x = $(this)[_0x505315(0x145)]()), updateStep()));
}
$(_0x357ff5(0x10f))["on"](_0x357ff5(0x16f), clickableIndicator);
$(_0x357ff5(0x121))["data"](_0x357ff5(0x154)) &&
  ($(_0x357ff5(0x1c7))[_0x357ff5(0x131)](function () {
    const _0x15615e = _0x357ff5;
    $(this)[_0x15615e(0x180)](
      _0x15615e(0x1cb),
      $(this)[_0x15615e(0x1f2)](_0x15615e(0xff))
    );
  }),
  $(_0x357ff5(0x14c))[_0x357ff5(0x131)](function () {
    const _0x559b45 = _0x357ff5;
    $(this)[_0x559b45(0x180)](
      _0x559b45(0x1e6),
      $(this)[_0x559b45(0x1f2)]("answer")
    );
  }));
$("[data-form=\x22submit-btn\x22]")["on"](
  _0x357ff5(0x16f),
  function (_0x569940) {
    const _0x472ad2 = _0x357ff5;
    $(this)[_0x472ad2(0x1f2)](_0x472ad2(0x19d)) &&
      (redirectTo = $(this)[_0x472ad2(0x1f2)]("redirect")),
      !$(this)[_0x472ad2(0x1f2)](_0x472ad2(0x1e7)) &&
        (newTab = $(this)["data"](_0x472ad2(0x1e7))),
      (successCard = $(this)["data"](_0x472ad2(0x125))),
      _0x569940[_0x472ad2(0x140)](),
      _0x569940[_0x472ad2(0x194)](),
      logicExtra &&
        ($(this)[_0x472ad2(0x106)](_0x472ad2(0x16e), !![]),
        $(steps)
          [_0x472ad2(0x12b)](":input")
          [_0x472ad2(0x106)](_0x472ad2(0x1d9), ![])),
      localStorage[_0x472ad2(0x1c6)](_0x472ad2(0x11d)),
      fill &&
        ($(this)["data"]("wait")
          ? $(this)[_0x472ad2(0x198)](
              $(this)[_0x472ad2(0x1f2)](_0x472ad2(0x1e8))
            )
          : ($(this)[_0x472ad2(0x198)](_0x472ad2(0x19a)),
            $(this)[_0x472ad2(0x153)](_0x472ad2(0x19a))),
        $("[data-form=\x22multistep\x22]")[_0x472ad2(0x1ef)](),
        $(_0x472ad2(0x102))[_0x472ad2(0x157)] > 0x0 &&
          grecaptcha["getResponse"]()[_0x472ad2(0x157)] === 0x0 &&
          (form[_0x472ad2(0x12b)](_0x472ad2(0x1c4))[_0x472ad2(0x153)](
            oldSubmitText
          ),
          form[_0x472ad2(0x12b)](_0x472ad2(0x1c4))["val"](oldSubmitText)));
  }
);
function resetFormly() {
  const _0x170a0a = _0x357ff5;
  $(_0x170a0a(0x121))["trigger"](_0x170a0a(0x151)),
    $("[data-form=\x22multistep\x22]")
      ["parents"]()
      [_0x170a0a(0x12b)](_0x170a0a(0x17c))
      ["hide"](),
    (x = 0x0),
    updateStep(),
    $(_0x170a0a(0x121))[_0x170a0a(0x120)](),
    $(_0x170a0a(0x1c4))[_0x170a0a(0x153)](oldSubmitText),
    $("[data-form=\x22submit-btn\x22]")[_0x170a0a(0x198)](oldSubmitText),
    $("[data-text=\x22current-step\x22]")[_0x170a0a(0x153)](0x1),
    $(_0x170a0a(0x121))
      [_0x170a0a(0x12b)](_0x170a0a(0xfa))
      [_0x170a0a(0x1d8)](_0x170a0a(0x1cc))
      [_0x170a0a(0xf6)]("w--redirected-checked");
}
$(document)[_0x357ff5(0x1bd)](function (_0x27c961, _0x3f289b, _0x24b1b2) {
  const _0x20a29e = _0x357ff5;
  if (_0x24b1b2[_0x20a29e(0x1b8)][_0x20a29e(0x1ba)](_0x20a29e(0x14d))) {
    const _0x49e50e = _0x3f289b[_0x20a29e(0x1da)] === 0xc8,
      _0x1b26fe = "redirect-form-hehexd";
    redirectTo &&
      _0x49e50e &&
      (newTab
        ? window["open"](redirectTo, _0x20a29e(0x1de))
        : setTimeout(() => {
            const _0x182fa6 = _0x20a29e;
            location[_0x182fa6(0x1e3)] = redirectTo;
          }, redirectDelay)),
      _0x49e50e &&
        successCard !== "" &&
        $(_0x20a29e(0x182) + successCard + "\x22]")["fadeIn"](),
      _0x49e50e &&
        formReset &&
        setTimeout(() => {
          resetFormly();
        }, resetDelay),
      !_0x49e50e &&
        ($(_0x20a29e(0x1c4))[_0x20a29e(0x198)]("Please\x20wait..."),
        $(_0x20a29e(0x1c4))[_0x20a29e(0x153)](_0x20a29e(0x19a)));
  }
}),
  $("[data-btn=\x22edit\x22]")["on"](_0x357ff5(0x16f), function () {
    const _0x5d8538 = _0x357ff5;
    var _0x545396 = $(this)
      [_0x5d8538(0x126)]()
      ["find"](_0x5d8538(0x191))
      [_0x5d8538(0x1f2)](_0x5d8538(0x14a));
    setTimeout(function () {
      const _0x4cfb8e = _0x5d8538;
      $(_0x4cfb8e(0x148) + _0x545396 + "\x22]")[_0x4cfb8e(0x1b5)]();
    }, 0x64),
      (back = !![]),
      (x = $(this)[_0x5d8538(0x1f2)](_0x5d8538(0x176)) - 0x1),
      updateStep(),
      countCard
        ? ((curStep = x + 0x1),
          $(_0x5d8538(0x169))[_0x5d8538(0x153)](steps[_0x5d8538(0x157)]))
        : $(steps[x])["data"]("card")
        ? (curStep = x + 0x0)
        : (curStep = x + 0x1),
      $("[data-text=\x22current-step\x22]")[_0x5d8538(0x153)](curStep),
      (back = ![]);
  }),
  $("[data-btn=\x22reset\x22]")["on"](_0x357ff5(0x16f), function () {
    const _0x4c4353 = _0x357ff5;
    $(_0x4c4353(0x121))["trigger"](_0x4c4353(0x151));
    let _0x11c235 = $(this);
    $(this)[_0x4c4353(0x153)]("Please\x20wait..."),
      setTimeout(function () {
        const _0x4ce795 = _0x4c4353;
        $(_0x11c235)[_0x4ce795(0x153)](oldResetText),
          $(_0x11c235)[_0x4ce795(0x1bb)](_0x4ce795(0x17c))[_0x4ce795(0x1b6)](),
          (x = 0x0),
          updateStep(),
          $(_0x4ce795(0x121))[_0x4ce795(0x120)](),
          $("[data-form=\x22submit-btn\x22]")[_0x4ce795(0x153)](oldSubmitText),
          $(_0x4ce795(0x1c4))["val"](oldSubmitText),
          $(_0x11c235)["val"](oldSubmitText),
          $(_0x4ce795(0x1ce))[_0x4ce795(0x153)](0x1),
          $("[data-form=\x22multistep\x22]")
            [_0x4ce795(0x12b)](_0x4ce795(0xfa))
            [_0x4ce795(0x1d8)](_0x4ce795(0x1cc))
            [_0x4ce795(0xf6)](_0x4ce795(0xf7));
      }, resetDelay);
  }),
  $(_0x357ff5(0xf2))["on"](_0x357ff5(0x14b), function (_0x4d3625) {
    const _0x151cda = _0x357ff5;
    _0x4d3625[_0x151cda(0x19b)] === 0xd &&
      fill &&
      ($(_0x151cda(0x142))[_0x151cda(0x1f2)](_0x151cda(0x183))
        ? (totalSteps > curStep && $(_0x151cda(0x16d))[0x0]["click"](),
          _0x4d3625[_0x151cda(0x140)](),
          _0x4d3625[_0x151cda(0x194)]())
        : (_0x4d3625[_0x151cda(0x140)](), _0x4d3625[_0x151cda(0x194)]()));
  }),
  $(_0x357ff5(0xf2))[_0x357ff5(0x134)](function (_0x30105d) {
    const _0x3f599a = _0x357ff5;
    (_0x30105d[_0x3f599a(0x105)] || _0x30105d[_0x3f599a(0x10d)]) &&
      _0x30105d[_0x3f599a(0x19b)] == 0xd &&
      (x >= steps["length"] - 0x1 && fill
        ? $(steps[x])["find"](_0x3f599a(0x146))[_0x3f599a(0x16f)]()
        : (event["preventDefault"](), event["stopPropagation"]()));
  }),
  $("textarea")[_0x357ff5(0x14b)](function (_0x932f55) {
    const _0x43387e = _0x357ff5;
    $(this)["focus"](),
      _0x932f55[_0x43387e(0x13f)] == "Enter" &&
        (_0x932f55[_0x43387e(0x140)](), _0x932f55["stopPropagation"]()),
      _0x932f55[_0x43387e(0x107)] &&
        _0x932f55[_0x43387e(0x13f)] == _0x43387e(0x14e) &&
        $(this)["val"]($(this)[_0x43387e(0x198)]() + "\x0a");
  }),
  $(_0x357ff5(0x121))
    [_0x357ff5(0x12b)](_0x357ff5(0x13c))
    ["on"](_0x357ff5(0x178), function () {
      const _0x1f248c = _0x357ff5;
      (all_data = all_data[_0x1f248c(0x1f0)](
        (_0x460d19) =>
          _0x460d19["field"] !== $(this)[_0x1f248c(0x119)](_0x1f248c(0x136))
      )),
        $(this)["attr"](_0x1f248c(0x128)) === _0x1f248c(0x1d3)
          ? $(this)["is"](_0x1f248c(0xfb))
            ? all_data[_0x1f248c(0x1e4)]({
                field: $(this)[_0x1f248c(0x119)](_0x1f248c(0x136)),
                value: $(this)
                  [_0x1f248c(0x1d8)](_0x1f248c(0x15b))
                  [_0x1f248c(0x153)](),
              })
            : $(_0x1f248c(0x197) + $(this)["attr"](_0x1f248c(0x136)) + "\x22]")[
                "hide"
              ]()
          : (all_data[_0x1f248c(0x1e4)]({
              field: $(this)[_0x1f248c(0x119)]("name"),
              value: $(this)[_0x1f248c(0x198)](),
            }),
            $(this)["val"]() !== "" &&
              resetInputErrorMessage(
                $(this)[_0x1f248c(0x119)](_0x1f248c(0x136))
              )),
        all_data[_0x1f248c(0xf8)](function (_0x551f12) {
          const _0x18563c = _0x1f248c;
          $(_0x18563c(0x197) + _0x551f12[_0x18563c(0x12a)] + "\x22]")[
            _0x18563c(0x177)
          ](),
            $(_0x18563c(0x197) + _0x551f12[_0x18563c(0x12a)] + "\x22]")[
              _0x18563c(0x153)
            ](_0x551f12[_0x18563c(0x152)]);
        });
    }),
  $(_0x357ff5(0x121))
    [_0x357ff5(0x12b)](_0x357ff5(0x1c3))
    ["on"](_0x357ff5(0x178), function () {
      const _0xd919d2 = _0x357ff5;
      $(this)[_0xd919d2(0x198)]() !== "" &&
        resetInputErrorMessage($(this)[_0xd919d2(0x119)](_0xd919d2(0x136))),
        (all_data = all_data[_0xd919d2(0x1f0)](
          (_0x4ae53a) =>
            _0x4ae53a[_0xd919d2(0x12a)] !==
            $(this)[_0xd919d2(0x119)](_0xd919d2(0x136))
        )),
        all_data[_0xd919d2(0x1e4)]({
          field: $(this)[_0xd919d2(0x119)](_0xd919d2(0x136)),
          value: $(this)["val"](),
        }),
        all_data[_0xd919d2(0xf8)](function (_0x2b1d57) {
          const _0x29875c = _0xd919d2;
          $(_0x29875c(0x197) + _0x2b1d57[_0x29875c(0x12a)] + "\x22]")[
            _0x29875c(0x177)
          ](),
            $("[data-input-field=\x22" + _0x2b1d57[_0x29875c(0x12a)] + "\x22]")[
              _0x29875c(0x153)
            ](_0x2b1d57[_0x29875c(0x152)]);
        });
    }),
  $(_0x357ff5(0x121))
    ["find"](_0x357ff5(0x117))
    ["on"](_0x357ff5(0x178), function () {
      const _0xb222e3 = _0x357ff5;
      $(this)["val"]() !== "" &&
        resetInputErrorMessage($(this)[_0xb222e3(0x119)]("name"));
      var _0x356a0a = $(this)[_0xb222e3(0x1f2)](_0xb222e3(0x166));
      (all_data = all_data[_0xb222e3(0x1f0)](
        (_0x45694c) =>
          _0x45694c[_0xb222e3(0x12a)] !==
          $(this)[_0xb222e3(0x119)](_0xb222e3(0x136))
      )),
        all_data[_0xb222e3(0x1e4)]({
          field: $(this)["attr"](_0xb222e3(0x136)),
          value: _0x356a0a
            ? $(this)[_0xb222e3(0x12b)](_0xb222e3(0x1df))[_0xb222e3(0x153)]()
            : $(this)[_0xb222e3(0x198)](),
        }),
        all_data[_0xb222e3(0xf8)](function (_0x408fae) {
          const _0x21025a = _0xb222e3;
          $(_0x21025a(0x197) + _0x408fae[_0x21025a(0x12a)] + "\x22]")[
            _0x21025a(0x177)
          ](),
            $("[data-input-field=\x22" + _0x408fae["field"] + "\x22]")[
              _0x21025a(0x153)
            ](_0x408fae[_0x21025a(0x152)]);
        });
    }),
  updateStep(),
  triggerInputAllData(),
  $(_0x357ff5(0x1c0))[_0x357ff5(0x131)](function () {
    const _0x2796bb = _0x357ff5,
      _0x3ef9b7 = $(this)[_0x2796bb(0x12b)](_0x2796bb(0x137)),
      _0x22337c = [];
    console[_0x2796bb(0x159)](_0x22337c),
      _0x3ef9b7[_0x2796bb(0x131)](function () {
        const _0x1bdf3d = _0x2796bb;
        _0x22337c[_0x1bdf3d(0x1e4)](
          $(this)[_0x1bdf3d(0x153)]()[_0x1bdf3d(0x124)]()
        );
      });
    const _0x17ab73 = $(this)[_0x2796bb(0x1d8)](_0x2796bb(0x1bc));
    $[_0x2796bb(0x131)](_0x22337c, function (_0x47f910, _0x2be04e) {
      const _0xde4682 = _0x2796bb,
        _0x58cf9f = $(_0xde4682(0x163))
          [_0xde4682(0x198)](_0x2be04e)
          ["text"](_0x2be04e);
      _0x17ab73[_0xde4682(0x180)](_0x58cf9f);
    });
  }),
  $(_0x357ff5(0x1d1))["on"](_0x357ff5(0x16f), function () {
    const _0x33e437 = _0x357ff5;
    let _0xde518f = $(this)["data"](_0x33e437(0x190));
    var _0x158a9f = $(_0x33e437(0x1ac) + _0xde518f + "\x22]")
        ["eq"](0x0)
        [_0x33e437(0x1cf)](!![]),
      _0x420286 = $(_0x33e437(0x109) + _0xde518f + "\x22]")
        ["eq"](0x0)
        [_0x33e437(0x1cf)](!![]);
    _0x158a9f[_0x33e437(0x12b)](_0x33e437(0x18b))[_0x33e437(0x131)](
      function () {
        const _0x2db6a9 = _0x33e437;
        $(this)[_0x2db6a9(0x198)](""),
          $(this)["attr"](
            _0x2db6a9(0x136),
            this[_0x2db6a9(0x136)] +
              "-" +
              (parseInt(
                $(_0x2db6a9(0x1ac) + _0xde518f + "\x22]")
                  [_0x2db6a9(0x18d)]()
                  [_0x2db6a9(0x145)]()
              ) +
                0x1)
          ),
          $(this)["attr"](
            _0x2db6a9(0x1b4),
            $(this)[_0x2db6a9(0x1f2)](_0x2db6a9(0x136)) +
              "-" +
              (parseInt(
                $(_0x2db6a9(0x1ac) + _0xde518f + "\x22]")
                  [_0x2db6a9(0x18d)]()
                  [_0x2db6a9(0x145)]()
              ) +
                0x1)
          );
      }
    ),
      _0x420286[_0x33e437(0x12b)](_0x33e437(0x191))[_0x33e437(0x131)](
        function () {
          const _0x5ac479 = _0x33e437;
          $(this)["attr"](
            _0x5ac479(0x1ab),
            $(this)["data"]("input-field") +
              "-" +
              (parseInt(
                $("[data-clone=\x22" + _0xde518f + "\x22]")
                  [_0x5ac479(0x18d)]()
                  [_0x5ac479(0x145)]()
              ) +
                0x1)
          );
        }
      ),
      $("[data-clone-wrapper=\x22" + _0xde518f + "\x22]")[_0x33e437(0x180)](
        _0x158a9f
      ),
      $(_0x33e437(0x1d7) + _0xde518f + "\x22]")[_0x33e437(0x180)](_0x420286),
      $(_0x33e437(0x1ca) + _0xde518f + "\x22]")[_0x33e437(0x131)](function () {
        const _0x94c30b = _0x33e437;
        $(this)[_0x94c30b(0x153)](
          $(this)
            ["parents"](_0x94c30b(0x1ac) + _0xde518f + "\x22]")
            [_0x94c30b(0x145)]() + 0x1
        );
      }),
      $(_0x33e437(0x1a9) + _0xde518f + "\x22]")[_0x33e437(0x131)](function () {
        const _0x186781 = _0x33e437;
        $(this)[_0x186781(0x153)](
          $(this)
            ["parents"]("[data-display=\x22" + _0xde518f + "\x22]")
            ["index"]() + 0x1
        );
      }),
      validation();
  }),
  scrollTop();
