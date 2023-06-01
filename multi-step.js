//29/5/23 update

const _0x129ed0 = _0x8b10;
(function (_0x16d5f0, _0x3fe5a2) {
  const _0x4b346b = _0x8b10,
    _0x3d5128 = _0x16d5f0();
  while (!![]) {
    try {
      const _0x21916e =
        parseInt(_0x4b346b(0x1a6)) / 0x1 +
        parseInt(_0x4b346b(0x211)) / 0x2 +
        (parseInt(_0x4b346b(0x1ad)) / 0x3) *
          (parseInt(_0x4b346b(0x157)) / 0x4) +
        -parseInt(_0x4b346b(0x1bd)) / 0x5 +
        (-parseInt(_0x4b346b(0x1f4)) / 0x6) *
          (parseInt(_0x4b346b(0x170)) / 0x7) +
        (-parseInt(_0x4b346b(0x1e9)) / 0x8) *
          (parseInt(_0x4b346b(0x20e)) / 0x9) +
        (parseInt(_0x4b346b(0x15f)) / 0xa) * (parseInt(_0x4b346b(0x1c1)) / 0xb);
      if (_0x21916e === _0x3fe5a2) break;
      else _0x3d5128["push"](_0x3d5128["shift"]());
    } catch (_0x1fcdd3) {
      _0x3d5128["push"](_0x3d5128["shift"]());
    }
  }
})(_0x326d, 0x3df84);
let x = 0x0,
  curStep = 0x0,
  steps = $("[data-form=\x22step\x22]"),
  progressbarClone = $(_0x129ed0(0x230))["clone"](),
  progressbar,
  countCard = !![],
  weightedSelection = $(_0x129ed0(0x19b))[_0x129ed0(0x143)](_0x129ed0(0x1f7)),
  selectMultiple = $(_0x129ed0(0x168))["data"](_0x129ed0(0x19c)),
  customError = $(_0x129ed0(0x19e))[_0x129ed0(0x143)]("custom-error-message"),
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
  reinitIX = $(_0x129ed0(0x1d7))[_0x129ed0(0x143)]("reinit"),
  textareaLength = 0x0,
  textInputLength = 0x0,
  emailInputLength = 0x0,
  selectInputLength = 0x0,
  checkboxInputLength = 0x0,
  filledInput = [],
  savedFilledInput = JSON[_0x129ed0(0x188)](
    localStorage[_0x129ed0(0x17e)](_0x129ed0(0x1e0))
  ),
  memory = $("[data-memory]")[_0x129ed0(0x143)](_0x129ed0(0x224)),
  quiz = $(_0x129ed0(0x165))[_0x129ed0(0x143)](_0x129ed0(0x14c)),
  progress = 0x0;
const urlFormly = new URL(window[_0x129ed0(0x180)][_0x129ed0(0x206)]);
let params = $(_0x129ed0(0x1ce))[_0x129ed0(0x143)]("query-param"),
  skipTo = 0x0,
  next = ![],
  back = ![],
  selArr = [],
  selString = [],
  emptyInput = 0x0,
  searchQ = [],
  domainAllowed = !![],
  dom = [],
  logicExtra = $(_0x129ed0(0x1bf))[_0x129ed0(0x143)](_0x129ed0(0x17b)),
  oldSubmitText = $(_0x129ed0(0x213))[_0x129ed0(0x1b5)](),
  oldResetText = $(_0x129ed0(0x1e1))[_0x129ed0(0x1ff)](),
  formReset = $(_0x129ed0(0x1bf))[_0x129ed0(0x143)](_0x129ed0(0x1aa)),
  successCard = "",
  redirectTo = "",
  totalSteps = 0x0,
  checkCount = 0x0,
  resetDelay = $(_0x129ed0(0x1d8))["data"](_0x129ed0(0x1af))
    ? $(_0x129ed0(0x1d8))[_0x129ed0(0x143)](_0x129ed0(0x1af))
    : 0x7d0,
  redirectDelay = $("[data-redirect-delay]")["data"](_0x129ed0(0x1c3))
    ? $(_0x129ed0(0x1ee))[_0x129ed0(0x143)](_0x129ed0(0x1c3))
    : 0x7d0,
  newTab = !![],
  unfilledArr = [],
  phoneFormat = /^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
  validPhone = $("[data-phone-validation]")[_0x129ed0(0x143)](
    "phone-validation"
  );
all_data = [];
$("[data-count-card]")["length"] > 0x0 &&
  (countCard = $(_0x129ed0(0x156))["data"](_0x129ed0(0x16c)));
$(_0x129ed0(0x208))[_0x129ed0(0x226)](),
  $(progressbarClone)["removeClass"](_0x129ed0(0x20f)),
  $(_0x129ed0(0x1fa))["children"]()["remove"](),
  $(_0x129ed0(0x213))[_0x129ed0(0x226)](),
  steps[_0x129ed0(0x1f6)](function () {
    const _0x5e2558 = _0x129ed0;
    $("[data-form=\x22progress\x22]")[_0x5e2558(0x22b)](
      progressbarClone[_0x5e2558(0x16a)](!![], !![])
    );
  }),
  $(_0x129ed0(0x1db))["hide"]();
countCard
  ? ((curStep = curStep + 0x1),
    (totalSteps = steps[_0x129ed0(0x18d)]),
    $(_0x129ed0(0x146))[_0x129ed0(0x1ff)](totalSteps))
  : ($(steps[x])[_0x129ed0(0x143)](_0x129ed0(0x172))
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    (totalSteps = $("[data-form=\x22step\x22]:not([data-card=\x22true\x22])")[
      _0x129ed0(0x18d)
    ]),
    $("[data-text=\x22total-steps\x22]")[_0x129ed0(0x1ff)](totalSteps),
    $("[data-form=\x22step\x22][data-card]")[_0x129ed0(0x1f6)](function () {
      const _0x16c466 = _0x129ed0;
      $($(_0x16c466(0x230))[$(this)[_0x16c466(0x14f)]()])[_0x16c466(0x226)]();
    }));
(progressbar = $(_0x129ed0(0x1fa))["children"]()),
  $(_0x129ed0(0x230))["on"](_0x129ed0(0x15e), clickableIndicator),
  $(_0x129ed0(0x216))[_0x129ed0(0x1ff)](curStep),
  steps[_0x129ed0(0x226)](),
  $(_0x129ed0(0x1d4))[_0x129ed0(0x226)](),
  $(_0x129ed0(0x1b4))[_0x129ed0(0x1f6)](function () {
    const _0x2e9e95 = _0x129ed0;
    $(this)[_0x2e9e95(0x167)]("type", "button");
  });
function getParams() {
  const _0x1f8e17 = _0x129ed0;
  urlFormly[_0x1f8e17(0x1f1)]["forEach"](function (_0x261b25, _0x26d36a) {
    const _0xd5896c = _0x1f8e17;
    searchQ[_0xd5896c(0x151)]({ val: _0x261b25, key: _0x26d36a });
  });
}
function getSafe(_0x32392b, _0x14874a) {
  try {
    return _0x32392b();
  } catch (_0x221db9) {
    return _0x14874a;
  }
}
function phoneAutoFormat(_0x4880b9, _0x2c76b3) {
  const _0x5adc26 = _0x129ed0;
  var _0x5dc045 = "";
  numericInput = _0x2c76b3[_0x5adc26(0x20c)](/\D/g, "");
  if (_0x4880b9 === "xxx-xxx-xxxx")
    numericInput[_0x5adc26(0x18d)] > 0x0 &&
      (_0x5dc045 += numericInput[_0x5adc26(0x14e)](0x0, 0x3)),
      numericInput[_0x5adc26(0x18d)] > 0x3 &&
        (_0x5dc045 += "-" + numericInput[_0x5adc26(0x14e)](0x3, 0x6)),
      numericInput["length"] > 0x6 &&
        (_0x5dc045 += "-" + numericInput[_0x5adc26(0x14e)](0x6, 0xa));
  else {
    if (_0x4880b9 === _0x5adc26(0x1d5))
      numericInput["length"] > 0x0 &&
        (_0x5dc045 += numericInput[_0x5adc26(0x14e)](0x0, 0x3)),
        numericInput[_0x5adc26(0x18d)] > 0x3 &&
          (_0x5dc045 += "\x20" + numericInput[_0x5adc26(0x14e)](0x3, 0x6)),
        numericInput[_0x5adc26(0x18d)] > 0x6 &&
          (_0x5dc045 += "\x20" + numericInput[_0x5adc26(0x14e)](0x6, 0xa));
    else {
      if (_0x4880b9 === _0x5adc26(0x16e))
        numericInput[_0x5adc26(0x18d)] > 0x0 &&
          (_0x5dc045 += "(" + numericInput[_0x5adc26(0x14e)](0x0, 0x3) + ")"),
          numericInput[_0x5adc26(0x18d)] > 0x3 &&
            (_0x5dc045 += "\x20" + numericInput[_0x5adc26(0x14e)](0x3, 0x6)),
          numericInput[_0x5adc26(0x18d)] > 0x6 &&
            (_0x5dc045 += "-" + numericInput["substring"](0x6, 0xa));
      else {
        if (_0x4880b9 === _0x5adc26(0x205))
          numericInput["length"] > 0x0 &&
            (_0x5dc045 += "(" + numericInput["substring"](0x0, 0x3) + ")"),
            numericInput[_0x5adc26(0x18d)] > 0x3 &&
              (_0x5dc045 += "\x20" + numericInput["substring"](0x3, 0x6)),
            numericInput[_0x5adc26(0x18d)] > 0x6 &&
              (_0x5dc045 += "\x20" + numericInput["substring"](0x6, 0xa));
        else {
          if (_0x4880b9 === _0x5adc26(0x1c0))
            numericInput[_0x5adc26(0x18d)] > 0x0 &&
              (_0x5dc045 += numericInput[_0x5adc26(0x14e)](0x0, 0x3)),
              numericInput[_0x5adc26(0x18d)] > 0x3 &&
                (_0x5dc045 += "-" + numericInput[_0x5adc26(0x14e)](0x3, 0x6)),
              numericInput[_0x5adc26(0x18d)] > 0x6 &&
                (_0x5dc045 +=
                  "\x20" + numericInput[_0x5adc26(0x14e)](0x6, 0xa));
          else
            _0x4880b9 === _0x5adc26(0x21c)
              ? (numericInput[_0x5adc26(0x18d)] > 0x0 &&
                  (_0x5dc045 += numericInput[_0x5adc26(0x14e)](0x0, 0x3)),
                numericInput["length"] > 0x3 &&
                  (_0x5dc045 += "." + numericInput[_0x5adc26(0x14e)](0x3, 0x6)),
                numericInput[_0x5adc26(0x18d)] > 0x6 &&
                  (_0x5dc045 += "." + numericInput[_0x5adc26(0x14e)](0x6, 0xa)))
              : (_0x5dc045 = _0x2c76b3);
        }
      }
    }
  }
  return _0x5dc045;
}
savedFilledInput &&
  memory &&
  savedFilledInput[_0x129ed0(0x1b6)]((_0x58aef7) => {
    const _0x237273 = _0x129ed0;
    if (
      $(
        _0x237273(0x20b) +
          _0x58aef7[_0x237273(0x1be)] +
          "\x22][value=\x22" +
          _0x58aef7[_0x237273(0x17c)] +
          "\x22]"
      )["attr"](_0x237273(0x1e3)) === _0x237273(0x171)
    )
      $(
        _0x237273(0x20b) +
          _0x58aef7[_0x237273(0x1be)] +
          _0x237273(0x1fe) +
          _0x58aef7[_0x237273(0x17c)] +
          "\x22]"
      )[_0x237273(0x15e)](),
        $(
          "input[name=\x22" +
            _0x58aef7[_0x237273(0x1be)] +
            _0x237273(0x1fe) +
            _0x58aef7[_0x237273(0x17c)] +
            "\x22]"
        )
          [_0x237273(0x17d)](_0x237273(0x1dd))
          [_0x237273(0x19d)](_0x237273(0x14b));
    else
      _0x58aef7[_0x237273(0x17c)] === "on"
        ? ($(_0x237273(0x20b) + _0x58aef7["inputName"] + "\x22]")["click"](),
          $("input[name=\x22" + _0x58aef7[_0x237273(0x1be)] + "\x22]")
            ["siblings"](_0x237273(0x16f))
            [_0x237273(0x19d)](_0x237273(0x14b)))
        : ($(_0x237273(0x20b) + _0x58aef7[_0x237273(0x1be)] + "\x22]")[
            _0x237273(0x1b5)
          ](_0x58aef7[_0x237273(0x17c)]),
          $(_0x237273(0x220) + _0x58aef7[_0x237273(0x1be)] + "\x22]")[
            _0x237273(0x1b5)
          ](_0x58aef7[_0x237273(0x17c)]),
          $(_0x237273(0x1da) + _0x58aef7[_0x237273(0x1be)] + "\x22]")
            ["find"](_0x237273(0x1df) + _0x58aef7[_0x237273(0x17c)] + "\x22]")
            [_0x237273(0x169)](_0x237273(0x1f3), !![]));
  });
params &&
  (getParams(),
  searchQ[_0x129ed0(0x1b6)]((_0x328747) => {
    const _0x2c8a7a = _0x129ed0;
    if (
      $(
        _0x2c8a7a(0x20b) +
          _0x328747[_0x2c8a7a(0x20a)] +
          "\x22][value=\x22" +
          _0x328747["val"] +
          "\x22]"
      )[_0x2c8a7a(0x167)]("type") === _0x2c8a7a(0x171)
    )
      $(
        _0x2c8a7a(0x20b) +
          _0x328747[_0x2c8a7a(0x20a)] +
          _0x2c8a7a(0x1fe) +
          _0x328747[_0x2c8a7a(0x1b5)] +
          "\x22]"
      )[_0x2c8a7a(0x15e)](),
        $(
          _0x2c8a7a(0x20b) +
            _0x328747["key"] +
            _0x2c8a7a(0x1fe) +
            _0x328747[_0x2c8a7a(0x1b5)] +
            "\x22]"
        )
          [_0x2c8a7a(0x17d)](_0x2c8a7a(0x1dd))
          [_0x2c8a7a(0x19d)](_0x2c8a7a(0x14b)),
        $(
          "input[name=\x22" +
            _0x328747[_0x2c8a7a(0x20a)] +
            _0x2c8a7a(0x1fe) +
            _0x328747[_0x2c8a7a(0x1b5)] +
            "\x22]"
        )[_0x2c8a7a(0x1b2)](_0x2c8a7a(0x22a));
    else
      _0x328747[_0x2c8a7a(0x1b5)] === "on"
        ? ($(_0x2c8a7a(0x20b) + _0x328747[_0x2c8a7a(0x20a)] + "\x22]")[
            _0x2c8a7a(0x15e)
          ](),
          $("input[name=\x22" + _0x328747[_0x2c8a7a(0x20a)] + "\x22]")
            [_0x2c8a7a(0x17d)](".w-checkbox-input")
            [_0x2c8a7a(0x19d)](_0x2c8a7a(0x14b)),
          $("input[name=\x22" + _0x328747[_0x2c8a7a(0x20a)] + "\x22]")[
            _0x2c8a7a(0x1b2)
          ]("input"))
        : ($(_0x2c8a7a(0x20b) + _0x328747[_0x2c8a7a(0x20a)] + "\x22]")["val"](
            _0x328747[_0x2c8a7a(0x1b5)]
          ),
          $(_0x2c8a7a(0x220) + _0x328747[_0x2c8a7a(0x20a)] + "\x22]")[
            _0x2c8a7a(0x1b5)
          ](_0x328747[_0x2c8a7a(0x1b5)]),
          $(_0x2c8a7a(0x1da) + _0x328747["key"] + "\x22]")
            [_0x2c8a7a(0x187)](
              _0x2c8a7a(0x1df) + _0x328747[_0x2c8a7a(0x1b5)] + "\x22]"
            )
            [_0x2c8a7a(0x169)]("selected", !![]),
          $(_0x2c8a7a(0x20b) + _0x328747[_0x2c8a7a(0x20a)] + "\x22]")[
            _0x2c8a7a(0x1b2)
          ](_0x2c8a7a(0x22a)),
          $(_0x2c8a7a(0x20b) + _0x328747[_0x2c8a7a(0x20a)] + "\x22]")[
            _0x2c8a7a(0x1b2)
          ](_0x2c8a7a(0x186)));
  }));
quiz &&
  steps[_0x129ed0(0x1f6)](function () {
    const _0x115898 = _0x129ed0;
    $(this)[_0x115898(0x1b3)]()[_0x115898(0x167)](_0x115898(0x223), !![]),
      $(this)[_0x115898(0x1b3)]()[_0x115898(0x167)](_0x115898(0x191), 0xfa);
  });
function disableBtn(_0x211ee1) {
  const _0x4856a1 = _0x129ed0;
  (fill = ![]),
    !customError &&
      ($(_0x4856a1(0x210))["css"]({
        opacity: _0x4856a1(0x13e),
        "pointer-events": "none",
      }),
      $(_0x4856a1(0x210))["addClass"](_0x4856a1(0x1f9)),
      $("[data-form=\x22submit-btn\x22]")[_0x4856a1(0x1ef)]({
        opacity: "0.4",
        "pointer-events": _0x4856a1(0x1c4),
      }),
      $(_0x4856a1(0x213))[_0x4856a1(0x19d)](_0x4856a1(0x1f9)));
}
function enableBtn() {
  const _0x1eb7f1 = _0x129ed0;
  (fill = !![]),
    $(_0x1eb7f1(0x210))[_0x1eb7f1(0x1ef)]({
      "pointer-events": _0x1eb7f1(0x1e5),
      opacity: "1",
    }),
    $(_0x1eb7f1(0x210))[_0x1eb7f1(0x207)](_0x1eb7f1(0x1f9)),
    $(_0x1eb7f1(0x213))[_0x1eb7f1(0x1ef)]({
      "pointer-events": _0x1eb7f1(0x1e5),
      opacity: "1",
    }),
    $(_0x1eb7f1(0x213))[_0x1eb7f1(0x207)](_0x1eb7f1(0x1f9));
}
function saveFilledInput() {
  const _0x2cc212 = _0x129ed0;
  $(_0x2cc212(0x18c))
    [_0x2cc212(0x196)](_0x2cc212(0x1a9))
    ["each"](function () {
      const _0xeed69f = _0x2cc212;
      $(this)["attr"]("type") === _0xeed69f(0x1b9) ||
      $(this)[_0xeed69f(0x167)]("type") === _0xeed69f(0x171)
        ? $(this)[_0xeed69f(0x169)](_0xeed69f(0x199)) &&
          (filledInput["some"](
            (_0x3f3d01) =>
              _0x3f3d01[_0xeed69f(0x1be)] === $(this)["attr"](_0xeed69f(0x194))
          )
            ? ((filledInput = filledInput[_0xeed69f(0x1fb)](
                (_0x2bbff0) =>
                  _0x2bbff0[_0xeed69f(0x1be)] !==
                  $(this)["attr"](_0xeed69f(0x194))
              )),
              $(this)[_0xeed69f(0x1b5)]() !== "" &&
                filledInput["push"]({
                  inputName: $(this)["attr"]("name"),
                  value: $(this)["val"](),
                }))
            : $(this)[_0xeed69f(0x1b5)]() !== "" &&
              filledInput[_0xeed69f(0x151)]({
                inputName: $(this)["attr"](_0xeed69f(0x194)),
                value: $(this)[_0xeed69f(0x1b5)](),
              }))
        : filledInput[_0xeed69f(0x155)](
            (_0x1d70eb) =>
              _0x1d70eb[_0xeed69f(0x1be)] ===
              $(this)[_0xeed69f(0x167)](_0xeed69f(0x194))
          )
        ? ((filledInput = filledInput[_0xeed69f(0x1fb)](
            (_0x181acc) =>
              _0x181acc[_0xeed69f(0x1be)] !==
              $(this)[_0xeed69f(0x167)](_0xeed69f(0x194))
          )),
          $(this)[_0xeed69f(0x1b5)]() !== "" &&
            filledInput["push"]({
              inputName: $(this)[_0xeed69f(0x167)]("name"),
              value: $(this)[_0xeed69f(0x1b5)](),
            }))
        : $(this)[_0xeed69f(0x1b5)]() !== "" &&
          filledInput[_0xeed69f(0x151)]({
            inputName: $(this)[_0xeed69f(0x167)](_0xeed69f(0x194)),
            value: $(this)[_0xeed69f(0x1b5)](),
          });
    }),
    filledInput &&
      filledInput[_0x2cc212(0x1b6)]((_0x5c0c02) => {
        const _0x2ee38f = _0x2cc212;
        urlFormly["searchParams"][_0x2ee38f(0x177)](
          _0x5c0c02[_0x2ee38f(0x1be)]
        ),
          urlFormly[_0x2ee38f(0x1f1)][_0x2ee38f(0x1c9)](
            _0x5c0c02[_0x2ee38f(0x1be)],
            _0x5c0c02[_0x2ee38f(0x17c)]
          ),
          window[_0x2ee38f(0x195)][_0x2ee38f(0x144)](null, null, urlFormly);
      }),
    localStorage[_0x2cc212(0x14d)](_0x2cc212(0x1e0)),
    localStorage["setItem"]("filledInput", JSON[_0x2cc212(0x1b7)](filledInput));
}
function scrollTop() {
  // const _0x23bd4e = _0x129ed0;
  // $(_0x23bd4e(0x1e4))[_0x23bd4e(0x1f2)](
  //   {
  //     scrollTop:
  //       $(_0x23bd4e(0x1bf))[_0x23bd4e(0x1d0)]()[_0x23bd4e(0x1ed)] - 0x12c,
  //   },
  //   0x190
  // );
}
function updateStep() {
  const _0x57ccaf = _0x129ed0;
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
    (empReqFile = []),
    (empReqRadio = []),
    $(_0x57ccaf(0x193))[_0x57ccaf(0x207)](_0x57ccaf(0x1f9));
  $(_0x57ccaf(0x16d))[_0x57ccaf(0x143)](_0x57ccaf(0x13d)) &&
    (steps[_0x57ccaf(0x187)](_0x57ccaf(0x161))[_0x57ccaf(0x1f6)](function () {
      const _0xd02318 = _0x57ccaf;
      $(
        $(_0xd02318(0x193))[
          $(this)[_0xd02318(0x162)](_0xd02318(0x1d9))[_0xd02318(0x14f)]()
        ]
      ),
        $(this)[_0xd02318(0x1b5)]() === "" && emptyInput++;
    }),
    emptyInput > 0x0
      ? $(_0x57ccaf(0x1a7))[_0x57ccaf(0x19d)]("disabled")
      : $("input[type=\x22submit\x22]")[_0x57ccaf(0x207)](_0x57ccaf(0x1f9)));
  $(_0x57ccaf(0x193))[_0x57ccaf(0x207)]("current"),
    $("[data-form=\x22custom-progress-indicator\x22]")[_0x57ccaf(0x19d)](
      _0x57ccaf(0x1f9)
    ),
    $($("[data-form=\x22custom-progress-indicator\x22]")[x])[_0x57ccaf(0x19d)](
      "current"
    ),
    (selection = selections[_0x57ccaf(0x1fb)](
      (_0x5b6039) => _0x5b6039[_0x57ccaf(0x145)] === x - 0x1
    ));
  next &&
    (x = getSafe(() => selection[0x0][_0x57ccaf(0x1a2)])
      ? parseInt(getSafe(() => selection[0x0][_0x57ccaf(0x1a2)]))
      : x);
  $("[data-answer]")["hide"](), steps[_0x57ccaf(0x226)]();
  reinitIX === !![] && window[_0x57ccaf(0x1cb)][_0x57ccaf(0x140)]();
  $(progressbar)[_0x57ccaf(0x207)](_0x57ccaf(0x20f));
  for (i = 0x0; i <= x; i++) {
    countCard
      ? $(progressbar[i])[_0x57ccaf(0x19d)](_0x57ccaf(0x20f))
      : !$(steps[i])[_0x57ccaf(0x143)]("card") &&
        $(progressbar[i])[_0x57ccaf(0x19d)](_0x57ccaf(0x20f));
  }
  reinitIX === !![]
    ? (window["Webflow"] &&
        window[_0x57ccaf(0x1cb)][_0x57ccaf(0x204)](_0x57ccaf(0x200))["init"](),
      document[_0x57ccaf(0x192)](new Event(_0x57ccaf(0x1bb))),
      $(steps[x])["show"]())
    : $(steps[x])["fadeIn"]("slow");
  x === 0x0 &&
    !$(steps[x])[_0x57ccaf(0x143)](_0x57ccaf(0x172)) &&
    $(steps[x])[_0x57ccaf(0x187)](_0x57ccaf(0x1a0))[_0x57ccaf(0x217)]();
  selection[_0x57ccaf(0x18d)] > 0x0
    ? $(steps[x])
        [_0x57ccaf(0x187)](
          _0x57ccaf(0x14a) + selection[0x0][_0x57ccaf(0x1f3)] + "\x22]"
        )
        [_0x57ccaf(0x217)]()
    : $(steps[x])
        [_0x57ccaf(0x187)](_0x57ccaf(0x14a) + answer + "\x22]")
        [_0x57ccaf(0x217)]();
  if (x === 0x0)
    $(_0x57ccaf(0x209))[_0x57ccaf(0x226)](),
      $(_0x57ccaf(0x210))[_0x57ccaf(0x217)]();
  else {
    if (
      x === steps[_0x57ccaf(0x18d)] - 0x1 ||
      $(steps[x])[_0x57ccaf(0x187)](_0x57ccaf(0x15d))["length"] > 0x0
    ) {
      $(_0x57ccaf(0x210))[_0x57ccaf(0x226)]();
      if ($(steps[x])["find"](_0x57ccaf(0x163))["data"]("submit-show"))
        $(steps[x])[_0x57ccaf(0x187)](_0x57ccaf(0x163))["show"]();
      else
        $("[data-form=\x22next-btn\x22]")[_0x57ccaf(0x143)]("submit-show") &&
          $("[data-form=\x22next-btn\x22]")["show"]();
      $(_0x57ccaf(0x213))[_0x57ccaf(0x217)](),
        $("[data-form=\x22back-btn\x22]")[_0x57ccaf(0x217)]();
    } else
      $(_0x57ccaf(0x210))["show"](),
        $("[data-form=\x22back-btn\x22]")[_0x57ccaf(0x217)](),
        $(_0x57ccaf(0x213))["hide"]();
  }
  $($(steps[x])[_0x57ccaf(0x187)](_0x57ccaf(0x1ac))[0x0])[_0x57ccaf(0x1cf)](),
    $($(steps[x])[_0x57ccaf(0x187)](_0x57ccaf(0x1c7))[0x0])["focus"](),
    validation();
  for (idx = 0x0; idx <= x; idx++) {
    $($("[data-form=\x22custom-progress-indicator\x22]")[idx])["removeClass"](
      _0x57ccaf(0x1f9)
    );
  }
}
function validateEmail(_0x574dad, _0x55c4d9, _0x5a14d7) {
  const _0x42afee = _0x129ed0;
  let _0x22f598 = _0x574dad[_0x42afee(0x1c5)]("@")
    ? _0x574dad[_0x42afee(0x15c)]("@")[0x1][_0x42afee(0x15c)](".")[0x0]
    : [];
  dom = [];
  _0x55c4d9 !== undefined &&
    _0x55c4d9[_0x42afee(0x15c)](",")[_0x42afee(0x1b6)](function (_0x23895f) {
      const _0x3dab72 = _0x42afee;
      _0x23895f[_0x3dab72(0x1c5)](_0x22f598) && dom["push"](_0x22f598);
    });
  dom[_0x42afee(0x18d)] > 0x0 ? (domainAllowed = ![]) : (domainAllowed = !![]);
  var _0xc5c9a5 = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,20})?$/;
  !_0xc5c9a5["test"](_0x574dad)
    ? ((emailFilled = ![]), unfilledArr[_0x42afee(0x151)]({ input: _0x5a14d7 }))
    : (emailFilled = !![]);
}
function phoneValidation(_0x3901c1, _0xc8904c, _0x9decb6) {
  const _0x3c2641 = _0x129ed0;
  if (validPhone)
    return _0x3901c1[_0x3c2641(0x175)](phoneFormat) && _0xc8904c >= _0x9decb6
      ? !![]
      : ![];
  else {
    if (_0xc8904c >= _0x9decb6) return !![];
  }
}
function validation() {
  const _0x13879d = _0x129ed0;
  $(steps[x])[_0x13879d(0x143)](_0x13879d(0x172)) && enableBtn();
  (unfilledArr = []),
    (textareaLength = $(steps[x])[_0x13879d(0x187)](_0x13879d(0x22e))[
      _0x13879d(0x18d)
    ]),
    (textInputLength = $(steps[x])["find"](
      "input[type=\x22text\x22][required]:visible"
    )["length"]),
    (selectInputLength = $(steps[x])[_0x13879d(0x187)](_0x13879d(0x184))[
      _0x13879d(0x18d)
    ]),
    (emailInputLength = $(steps[x])[_0x13879d(0x187)](_0x13879d(0x149))[
      _0x13879d(0x18d)
    ]),
    (checkboxInputLength = $(steps[x])[_0x13879d(0x187)](_0x13879d(0x1f8))[
      _0x13879d(0x18d)
    ]);
  textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0
    ? disableBtn()
    : enableBtn();
  checkCount = $(steps[x])[_0x13879d(0x143)](_0x13879d(0x1b9))
    ? $(steps[x])[_0x13879d(0x143)](_0x13879d(0x1b9))
    : $(steps[x])["find"]("[data-checkbox]")[_0x13879d(0x18d)] > 0x0
    ? $(steps[x])[_0x13879d(0x187)](_0x13879d(0x15b))["data"](_0x13879d(0x1b9))
    : 0x0;
  if (!logicExtra)
    $(steps[x])[_0x13879d(0x187)](":input")["is"](_0x13879d(0x1b8)) &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])["find"](":input[type=\x22checkbox\x22]")["length"]
        ? $(steps[x])
            [_0x13879d(0x187)](":input[type=\x22checkbox\x22]")
            [_0x13879d(0x1f6)](function () {
              const _0x488a2e = _0x13879d;
              $(this)["is"](_0x488a2e(0x215))
                ? $(steps[x])[_0x488a2e(0x187)](_0x488a2e(0x1e6))[
                    _0x488a2e(0x18d)
                  ] < 0x1 &&
                  ((checkboxFilled = !![]),
                  resetInputErrorMessage(
                    $(this)[_0x488a2e(0x167)](_0x488a2e(0x194))
                  ))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0x488a2e(0x151)]({
                    input: $(this)[_0x488a2e(0x167)](_0x488a2e(0x194)),
                  }));
            })
        : $(steps[x])[_0x13879d(0x187)](_0x13879d(0x1d2))[_0x13879d(0x18d)] >=
          checkCount
        ? $(steps[x])["find"](_0x13879d(0x1e6))[_0x13879d(0x18d)] > 0x0
          ? $(steps[x])
              [_0x13879d(0x187)](":input[type=\x22checkbox\x22][required]")
              [_0x13879d(0x1f6)](function () {
                const _0x49b4ba = _0x13879d;
                !$(this)["is"](_0x49b4ba(0x215))
                  ? ((checkboxFilled = ![]),
                    unfilledArr[_0x49b4ba(0x151)]({
                      input: $(this)[_0x49b4ba(0x167)](_0x49b4ba(0x194)),
                    }))
                  : ((checkboxFilled = !![]),
                    $(steps[x])[_0x49b4ba(0x187)](_0x49b4ba(0x229))[
                      _0x49b4ba(0x18d)
                    ] >=
                      $(steps[x])["find"](
                        ":input[type=\x22checkbox\x22][required]"
                      )[_0x49b4ba(0x18d)] &&
                      resetInputErrorMessage(
                        $(steps[x])
                          [_0x49b4ba(0x187)](_0x49b4ba(0x232))
                          [_0x49b4ba(0x167)](_0x49b4ba(0x194))
                      ));
              })
          : ((checkboxFilled = !![]),
            resetInputErrorMessage(
              $(steps[x])
                [_0x13879d(0x187)](_0x13879d(0x232))
                [_0x13879d(0x167)](_0x13879d(0x194))
            ))
        : ((checkboxFilled = ![]),
          $(steps[x])
            [_0x13879d(0x187)](_0x13879d(0x1e6))
            [_0x13879d(0x1f6)](function () {
              const _0x4252b2 = _0x13879d;
              $(this)[_0x4252b2(0x196)](_0x4252b2(0x215)) &&
                unfilledArr["push"]({
                  input: $(this)["attr"](_0x4252b2(0x194)),
                });
            }),
          unfilledArr["push"]({
            input: $(steps[x])
              [_0x13879d(0x187)](_0x13879d(0x232))
              [_0x13879d(0x167)](_0x13879d(0x194)),
          }))),
      $(steps[x])
        [_0x13879d(0x187)](_0x13879d(0x152))
        [_0x13879d(0x1f6)](function (_0x2777b3) {
          const _0x2b196c = _0x13879d;
          var _0x55ef1b = $(this)[_0x2b196c(0x167)](_0x2b196c(0x194));
          $(_0x2b196c(0x1b1) + _0x55ef1b + _0x2b196c(0x1e7))[
            _0x2b196c(0x18d)
          ] == 0x0
            ? (!empReqRadio[_0x2b196c(0x187)](
                (_0x2974d5) => _0x2974d5[_0x2b196c(0x22a)] === _0x2777b3
              ) && empReqRadio[_0x2b196c(0x151)]({ input: _0x2777b3 }),
              unfilledArr["push"]({ input: $(this)["attr"]("name") }))
            : (empReqRadio = empReqRadio["filter"](
                (_0x2a8b72) => _0x2a8b72[_0x2b196c(0x22a)] !== _0x2777b3
              )),
            empReqRadio[_0x2b196c(0x18d)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0x13879d(0x187)](_0x13879d(0x1a3))
        [_0x13879d(0x1f6)](function (_0x5c657c) {
          const _0xfcaaaf = _0x13879d;
          let _0x208f0e = $(this)[_0xfcaaaf(0x1b5)]()[_0xfcaaaf(0x18d)],
            _0x408420 = $(this)["data"]("min-character")
              ? $(this)[_0xfcaaaf(0x143)](_0xfcaaaf(0x214))
              : 0x0;
          $(this)["val"]() !== "" && _0x208f0e >= _0x408420
            ? (empReqInput = empReqInput[_0xfcaaaf(0x1fb)](
                (_0x16d026) => _0x16d026[_0xfcaaaf(0x22a)] !== _0x5c657c
              ))
            : (!empReqInput["find"](
                (_0x4d2e6d) => _0x4d2e6d["input"] === _0x5c657c
              ) && empReqInput[_0xfcaaaf(0x151)]({ input: _0x5c657c }),
              unfilledArr["push"]({
                input: $(this)[_0xfcaaaf(0x167)](_0xfcaaaf(0x194)),
              })),
            empReqInput[_0xfcaaaf(0x18d)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x13879d(0x187)](_0x13879d(0x1d6))
        [_0x13879d(0x1f6)](function (_0x1a8dc8) {
          const _0x402bf9 = _0x13879d;
          if ($(this)[_0x402bf9(0x1b5)]() !== "") {
            let _0x8a167c = $(this)[_0x402bf9(0x1b5)]()[_0x402bf9(0x18d)],
              _0x5ce878 = $(this)[_0x402bf9(0x143)]("min-character")
                ? $(this)["data"]("min-character")
                : 0x0;
            $(this)[_0x402bf9(0x143)](_0x402bf9(0x212)) &&
              $(this)[_0x402bf9(0x1b5)](
                phoneAutoFormat(
                  $(this)["data"]("phone-autoformat"),
                  $(this)["val"]()
                )
              ),
              phoneValidation($(this)["val"](), _0x8a167c, _0x5ce878)
                ? (empReqTel = empReqTel["filter"](
                    (_0x28f9d6) => _0x28f9d6[_0x402bf9(0x22a)] !== _0x1a8dc8
                  ))
                : empReqTel[_0x402bf9(0x151)]({ input: _0x1a8dc8 });
          } else !empReqTel[_0x402bf9(0x187)]((_0x21f2f0) => _0x21f2f0[_0x402bf9(0x22a)] === _0x1a8dc8) && empReqTel[_0x402bf9(0x151)]({ input: _0x1a8dc8 }), unfilledArr["push"]({ input: $(this)[_0x402bf9(0x167)](_0x402bf9(0x194)) });
          empReqTel[_0x402bf9(0x18d)] === 0x0
            ? (telFilled = !![])
            : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x13879d(0x187)](_0x13879d(0x189))
        [_0x13879d(0x1f6)](function (_0x466acb) {
          const _0x167286 = _0x13879d;
          $(this)[_0x167286(0x1b5)]() !== ""
            ? (empReqFile = empReqFile[_0x167286(0x1fb)](
                (_0xbc5acb) => _0xbc5acb[_0x167286(0x22a)] !== _0x466acb
              ))
            : (!empReqFile[_0x167286(0x187)](
                (_0x2e59e2) => _0x2e59e2[_0x167286(0x22a)] === _0x466acb
              ) && empReqFile[_0x167286(0x151)]({ input: _0x466acb }),
              unfilledArr["push"]({
                input: $(this)[_0x167286(0x167)](_0x167286(0x194)),
              })),
            empReqFile[_0x167286(0x18d)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        ["find"](":input[type=\x22number\x22][required]")
        ["each"](function (_0x59dd1e) {
          const _0x9e8d57 = _0x13879d;
          let _0x3763ec = $(this)[_0x9e8d57(0x1b5)]()[_0x9e8d57(0x18d)],
            _0x1ed825 = $(this)[_0x9e8d57(0x143)](_0x9e8d57(0x214))
              ? $(this)[_0x9e8d57(0x143)]("min-character")
              : 0x0;
          $(this)[_0x9e8d57(0x1b5)]() !== "" && _0x3763ec >= _0x1ed825
            ? (empReqNum = empReqNum[_0x9e8d57(0x1fb)](
                (_0x1ace04) => _0x1ace04[_0x9e8d57(0x22a)] !== _0x59dd1e
              ))
            : (!empReqNum["find"](
                (_0x402a58) => _0x402a58[_0x9e8d57(0x22a)] === _0x59dd1e
              ) && empReqNum[_0x9e8d57(0x151)]({ input: _0x59dd1e }),
              unfilledArr[_0x9e8d57(0x151)]({
                input: $(this)[_0x9e8d57(0x167)](_0x9e8d57(0x194)),
              })),
            empReqNum["length"] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x13879d(0x187)](_0x13879d(0x160))
        ["each"](function (_0x2cf5d9) {
          const _0xc0c377 = _0x13879d;
          let _0x43901c = $(this)[_0xc0c377(0x1b5)]();
          _0x43901c === "" && (_0x43901c = null),
            _0x43901c != null
              ? (empReqSelect = empReqSelect[_0xc0c377(0x1fb)](
                  (_0x45e174) => _0x45e174[_0xc0c377(0x22a)] !== _0x2cf5d9
                ))
              : (!empReqSelect[_0xc0c377(0x187)](
                  (_0x2ab165) => _0x2ab165[_0xc0c377(0x22a)] === _0x2cf5d9
                ) && empReqSelect[_0xc0c377(0x151)]({ input: _0x2cf5d9 }),
                unfilledArr[_0xc0c377(0x151)]({
                  input: $(this)["attr"]("name"),
                })),
            empReqSelect[_0xc0c377(0x18d)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x13879d(0x187)](_0x13879d(0x221))
        [_0x13879d(0x1f6)](function (_0x1a0702) {
          const _0x5f3571 = _0x13879d;
          let _0x59cd43 = $(this)[_0x5f3571(0x1b5)]()[_0x5f3571(0x18d)],
            _0x326590 = $(this)["data"](_0x5f3571(0x214))
              ? $(this)[_0x5f3571(0x143)](_0x5f3571(0x214))
              : 0x0;
          $(this)[_0x5f3571(0x1b5)]() !== "" && _0x59cd43 >= _0x326590
            ? (empReqTextarea = empReqTextarea["filter"](
                (_0x94745) => _0x94745["input"] !== _0x1a0702
              ))
            : (!empReqTextarea[_0x5f3571(0x187)](
                (_0x2e588d) => _0x2e588d[_0x5f3571(0x22a)] === _0x1a0702
              ) && empReqTextarea["push"]({ input: _0x1a0702 }),
              unfilledArr["push"]({
                input: $(this)[_0x5f3571(0x167)](_0x5f3571(0x194)),
              })),
            empReqTextarea[_0x5f3571(0x18d)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x13879d(0x187)](_0x13879d(0x1ec))
        [_0x13879d(0x1f6)](function () {
          const _0x4d65b2 = _0x13879d;
          $(this)["val"]() !== ""
            ? validateEmail(
                $(this)["val"](),
                $(this)["data"](_0x4d65b2(0x19f)),
                $(this)["attr"]("name")
              )
            : ((emailFilled = ![]),
              unfilledArr[_0x4d65b2(0x151)]({
                input: $(this)[_0x4d65b2(0x167)](_0x4d65b2(0x194)),
              }));
        });
  else {
    if ($(steps[x])[_0x13879d(0x143)](_0x13879d(0x172)))
      (answer = $(steps[x])
        [_0x13879d(0x187)](_0x13879d(0x150))
        ["data"](_0x13879d(0x179))),
        (selections = selections["filter"](
          (_0x22bd34) => _0x22bd34[_0x13879d(0x145)] !== x
        )),
        selections[_0x13879d(0x151)]({ step: x, selected: answer });
    else
      $(steps[x])
        ["find"](_0x13879d(0x190))
        [_0x13879d(0x143)](_0x13879d(0x172)) &&
        ((answer = $(steps[x])
          [_0x13879d(0x187)](_0x13879d(0x190))
          [_0x13879d(0x143)]("go-to")),
        (selections = selections[_0x13879d(0x1fb)](
          (_0x114768) => _0x114768[_0x13879d(0x145)] !== x
        )),
        selections[_0x13879d(0x151)]({ step: x, selected: answer }));
    $(steps[x])
      [_0x13879d(0x187)](_0x13879d(0x190))
      [_0x13879d(0x187)](_0x13879d(0x176))
      ["is"](_0x13879d(0x1b8)) &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])[_0x13879d(0x187)](_0x13879d(0x232))[_0x13879d(0x18d)]
        ? $(steps[x])
            [_0x13879d(0x187)](_0x13879d(0x232))
            ["each"](function () {
              const _0x4898fb = _0x13879d;
              $(this)["is"](_0x4898fb(0x215))
                ? $(steps[x])[_0x4898fb(0x187)](":input[required]")[
                    _0x4898fb(0x18d)
                  ] < 0x1 &&
                  ((skipTo = undefined),
                  $(this)["parents"]("[data-skip-to]")["data"]("skip-to") &&
                    (skipTo = $(this)
                      [_0x4898fb(0x162)](_0x4898fb(0x225))
                      [_0x4898fb(0x143)](_0x4898fb(0x18a))),
                  $(this)
                    ["parents"](_0x4898fb(0x150))
                    ["attr"](_0x4898fb(0x202)) &&
                    ((answer = $(this)
                      ["parents"](_0x4898fb(0x150))
                      [_0x4898fb(0x167)](_0x4898fb(0x202))),
                    (selections = selections[_0x4898fb(0x1fb)](
                      (_0x3308a1) => _0x3308a1["step"] !== x
                    )),
                    selections[_0x4898fb(0x151)]({ step: x, selected: answer }),
                    skipTo &&
                      (selections[_0x4898fb(0x151)]({
                        step: skipTo - 0x2,
                        selected: answer,
                      }),
                      (objIndex = selections[_0x4898fb(0x158)](
                        (_0x3cb788) => _0x3cb788[_0x4898fb(0x145)] === x
                      )),
                      (selections[objIndex][_0x4898fb(0x1a2)] =
                        parseInt(skipTo) - 0x1),
                      (selections[objIndex][_0x4898fb(0x174)] = x))),
                  (checkboxFilled = !![]),
                  $(steps[x])["find"](
                    ":input[type=\x22checkbox\x22][required]:checked"
                  )[_0x4898fb(0x18d)] >=
                    $(steps[x])[_0x4898fb(0x187)](_0x4898fb(0x1e6))[
                      _0x4898fb(0x18d)
                    ] &&
                    resetInputErrorMessage(
                      $(steps[x])
                        ["find"](_0x4898fb(0x232))
                        [_0x4898fb(0x167)](_0x4898fb(0x194))
                    ))
                : ((checkboxFilled = ![]),
                  unfilledArr["push"]({
                    input: $(this)[_0x4898fb(0x167)](_0x4898fb(0x194)),
                  }));
            })
        : $(steps[x])
            [_0x13879d(0x187)]("[data-answer]:visible")
            [_0x13879d(0x187)](_0x13879d(0x1d2))[_0x13879d(0x18d)] >= checkCount
        ? ($(steps[x])
            [_0x13879d(0x187)](_0x13879d(0x190))
            [_0x13879d(0x187)](_0x13879d(0x1d2))
            [_0x13879d(0x162)](_0x13879d(0x150))
            [_0x13879d(0x167)](_0x13879d(0x202)) &&
            ((skipTo = undefined),
            $(steps[x])
              [_0x13879d(0x187)](_0x13879d(0x190))
              [_0x13879d(0x187)](_0x13879d(0x1d2))
              ["parents"]("[data-skip-to]")
              ["attr"]("data-skip-to") &&
              (skipTo = $(steps[x])
                [_0x13879d(0x187)](_0x13879d(0x190))
                [_0x13879d(0x187)](_0x13879d(0x1d2))
                [_0x13879d(0x162)](_0x13879d(0x225))
                [_0x13879d(0x167)]("data-skip-to")),
            (answer = $(steps[x])
              ["find"](_0x13879d(0x190))
              [_0x13879d(0x187)](_0x13879d(0x1d2))
              [_0x13879d(0x162)](_0x13879d(0x150))
              ["attr"](_0x13879d(0x202))),
            (selections = selections[_0x13879d(0x1fb)](
              (_0xf9824e) => _0xf9824e[_0x13879d(0x145)] !== x
            )),
            selections[_0x13879d(0x151)]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0x13879d(0x151)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0x13879d(0x158)](
                (_0x204559) => _0x204559[_0x13879d(0x145)] === x
              )),
              (selections[objIndex][_0x13879d(0x1a2)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x13879d(0x174)] = x))),
          (selections = selections[_0x13879d(0x1fb)](
            (_0x20519d) => _0x20519d[_0x13879d(0x145)] !== x
          )),
          selections[_0x13879d(0x151)]({ step: x, selected: answer }),
          (checkboxFilled = !![]),
          $(steps[x])[_0x13879d(0x187)](_0x13879d(0x229))[_0x13879d(0x18d)] >=
            $(steps[x])[_0x13879d(0x187)](_0x13879d(0x1e6))[_0x13879d(0x18d)] &&
            resetInputErrorMessage(
              $(steps[x])
                ["find"](_0x13879d(0x232))
                [_0x13879d(0x167)](_0x13879d(0x194))
            ))
        : ((checkboxFilled = ![]),
          $(steps[x])
            ["find"](_0x13879d(0x1e6))
            [_0x13879d(0x1f6)](function () {
              const _0xed506 = _0x13879d;
              $(this)[_0xed506(0x196)](_0xed506(0x215)) &&
                unfilledArr[_0xed506(0x151)]({
                  input: $(this)["attr"](_0xed506(0x194)),
                });
            }))),
      $(steps[x])
        [_0x13879d(0x187)](_0x13879d(0x190))
        ["find"](_0x13879d(0x152))
        [_0x13879d(0x1f6)](function (_0x52a9bd) {
          const _0x1680af = _0x13879d;
          var _0x4a264b = $(this)["attr"](_0x1680af(0x194));
          $(_0x1680af(0x1b1) + _0x4a264b + "\x22]:checked")[_0x1680af(0x18d)] ==
          0x0
            ? (!empReqRadio[_0x1680af(0x187)](
                (_0x1d7ce8) => _0x1d7ce8[_0x1680af(0x22a)] === _0x52a9bd
              ) && empReqRadio[_0x1680af(0x151)]({ input: _0x52a9bd }),
              unfilledArr[_0x1680af(0x151)]({
                input: $(this)[_0x1680af(0x167)](_0x1680af(0x194)),
              }))
            : (empReqRadio = empReqRadio["filter"](
                (_0x3200ee) => _0x3200ee[_0x1680af(0x22a)] !== _0x52a9bd
              )),
            empReqRadio[_0x1680af(0x18d)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0x13879d(0x187)](_0x13879d(0x190))
        [_0x13879d(0x187)](_0x13879d(0x1a3))
        [_0x13879d(0x1f6)](function (_0x37e127) {
          const _0x136c00 = _0x13879d;
          let _0x71a140 = $(this)["val"]()["length"],
            _0x3cccdf = $(this)[_0x136c00(0x143)](_0x136c00(0x214))
              ? $(this)[_0x136c00(0x143)](_0x136c00(0x214))
              : 0x0;
          $(this)[_0x136c00(0x1b5)]() !== "" && _0x71a140 >= _0x3cccdf
            ? (empReqInput = empReqInput[_0x136c00(0x1fb)](
                (_0x170393) => _0x170393["input"] !== _0x37e127
              ))
            : (!empReqInput["find"](
                (_0x2d8fe3) => _0x2d8fe3[_0x136c00(0x22a)] === _0x37e127
              ) && empReqInput["push"]({ input: _0x37e127 }),
              unfilledArr[_0x136c00(0x151)]({
                input: $(this)[_0x136c00(0x167)](_0x136c00(0x194)),
              })),
            empReqInput["length"] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x13879d(0x187)](_0x13879d(0x190))
        ["find"](_0x13879d(0x21f))
        [_0x13879d(0x1f6)](function (_0x23cfc2) {
          const _0x4e5f36 = _0x13879d;
          (skipTo = undefined),
            $(this)
              [_0x4e5f36(0x162)]("[data-skip-to]")
              [_0x4e5f36(0x143)](_0x4e5f36(0x18a)) !== "" &&
              (skipTo = $(this)
                [_0x4e5f36(0x162)](_0x4e5f36(0x225))
                [_0x4e5f36(0x143)](_0x4e5f36(0x18a))),
            $(this)
              ["parents"](_0x4e5f36(0x150))
              [_0x4e5f36(0x167)]("data-go-to") &&
              ((answer = $(this)
                [_0x4e5f36(0x162)]("[data-go-to]")
                ["attr"](_0x4e5f36(0x202))),
              (selections = selections[_0x4e5f36(0x1fb)](
                (_0x39dd85) => _0x39dd85["step"] !== x
              )),
              selections[_0x4e5f36(0x151)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x4e5f36(0x151)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x2700e7) => _0x2700e7[_0x4e5f36(0x145)] === x
                )),
                (selections[objIndex][_0x4e5f36(0x1a2)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        ["find"]("[data-answer]:visible")
        [_0x13879d(0x187)](":input[type=\x22number\x22][required]")
        [_0x13879d(0x1f6)](function (_0x5bf50a) {
          const _0x2c87f3 = _0x13879d;
          let _0x3bceb6 = $(this)[_0x2c87f3(0x1b5)]()[_0x2c87f3(0x18d)],
            _0x53615b = $(this)[_0x2c87f3(0x143)]("min-character")
              ? $(this)["data"](_0x2c87f3(0x214))
              : 0x0;
          $(this)[_0x2c87f3(0x1b5)]() !== "" && _0x3bceb6 >= _0x53615b
            ? (empReqNum = empReqNum[_0x2c87f3(0x1fb)](
                (_0x998ef7) => _0x998ef7[_0x2c87f3(0x22a)] !== _0x5bf50a
              ))
            : (!empReqNum["find"](
                (_0xd5af2a) => _0xd5af2a["input"] === _0x5bf50a
              ) && empReqNum[_0x2c87f3(0x151)]({ input: _0x5bf50a }),
              unfilledArr[_0x2c87f3(0x151)]({
                input: $(this)[_0x2c87f3(0x167)](_0x2c87f3(0x194)),
              })),
            empReqNum[_0x2c87f3(0x18d)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x13879d(0x190))
        ["find"](_0x13879d(0x22c))
        ["each"](function (_0x2269d3) {
          const _0x3d3177 = _0x13879d;
          (skipTo = undefined),
            $(this)
              [_0x3d3177(0x162)](_0x3d3177(0x225))
              [_0x3d3177(0x143)]("skip-to") !== "" &&
              (skipTo = $(this)
                ["parents"](_0x3d3177(0x225))
                [_0x3d3177(0x143)](_0x3d3177(0x18a))),
            $(this)
              [_0x3d3177(0x162)](_0x3d3177(0x150))
              ["attr"](_0x3d3177(0x202)) &&
              ((answer = $(this)
                [_0x3d3177(0x162)](_0x3d3177(0x150))
                [_0x3d3177(0x167)](_0x3d3177(0x202))),
              (selections = selections[_0x3d3177(0x1fb)](
                (_0x21512d) => _0x21512d[_0x3d3177(0x145)] !== x
              )),
              selections[_0x3d3177(0x151)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections["findIndex"](
                  (_0x55e3fb) => _0x55e3fb["step"] === x
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x3d3177(0x174)] = x)));
        }),
      $(steps[x])
        ["find"]("[data-answer]:visible")
        ["find"](":input[type=\x22tel\x22][required]")
        [_0x13879d(0x1f6)](function (_0x2383e6) {
          const _0x213a38 = _0x13879d;
          if ($(this)[_0x213a38(0x1b5)]() !== "") {
            let _0xc4b466 = $(this)[_0x213a38(0x1b5)]()[_0x213a38(0x18d)],
              _0x53d3b2 = $(this)[_0x213a38(0x143)](_0x213a38(0x214))
                ? $(this)[_0x213a38(0x143)]("min-character")
                : 0x0;
            $(this)[_0x213a38(0x143)](_0x213a38(0x212)) &&
              $(this)[_0x213a38(0x1b5)](
                phoneAutoFormat(
                  $(this)[_0x213a38(0x143)]("phone-autoformat"),
                  $(this)[_0x213a38(0x1b5)]()
                )
              ),
              phoneValidation($(this)[_0x213a38(0x1b5)](), _0xc4b466, _0x53d3b2)
                ? (empReqTel = empReqTel[_0x213a38(0x1fb)](
                    (_0x240e98) => _0x240e98[_0x213a38(0x22a)] !== _0x2383e6
                  ))
                : empReqTel[_0x213a38(0x151)]({ input: _0x2383e6 });
          } else !empReqTel[_0x213a38(0x187)]((_0x5d3279) => _0x5d3279["input"] === _0x2383e6) && empReqTel["push"]({ input: _0x2383e6 }), unfilledArr[_0x213a38(0x151)]({ input: $(this)["attr"](_0x213a38(0x194)) });
          empReqTel[_0x213a38(0x18d)] === 0x0
            ? (telFilled = !![])
            : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x13879d(0x187)](_0x13879d(0x190))
        [_0x13879d(0x187)](_0x13879d(0x1a4))
        [_0x13879d(0x1f6)](function (_0x2a5aad) {
          const _0xe08181 = _0x13879d;
          (skipTo = undefined),
            $(this)
              [_0xe08181(0x162)](_0xe08181(0x225))
              [_0xe08181(0x143)](_0xe08181(0x18a)) !== "" &&
              (skipTo = $(this)
                [_0xe08181(0x162)](_0xe08181(0x225))
                [_0xe08181(0x143)](_0xe08181(0x18a))),
            $(this)
              [_0xe08181(0x162)](_0xe08181(0x150))
              ["attr"](_0xe08181(0x202)) &&
              ((answer = $(this)
                [_0xe08181(0x162)](_0xe08181(0x150))
                [_0xe08181(0x167)](_0xe08181(0x202))),
              (selections = selections[_0xe08181(0x1fb)](
                (_0x5d598e) => _0x5d598e["step"] !== x
              )),
              selections[_0xe08181(0x151)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0xe08181(0x151)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0xe08181(0x158)](
                  (_0x116ee0) => _0x116ee0["step"] === x
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x13879d(0x187)](_0x13879d(0x190))
        ["find"](_0x13879d(0x189))
        [_0x13879d(0x1f6)](function (_0x3bf743) {
          const _0x54c156 = _0x13879d;
          $(this)["val"]() !== ""
            ? (empReqFile = empReqFile["filter"](
                (_0x27ed57) => _0x27ed57[_0x54c156(0x22a)] !== _0x3bf743
              ))
            : (!empReqFile[_0x54c156(0x187)](
                (_0x583455) => _0x583455[_0x54c156(0x22a)] === _0x3bf743
              ) && empReqFile[_0x54c156(0x151)]({ input: _0x3bf743 }),
              unfilledArr["push"]({
                input: $(this)["attr"](_0x54c156(0x194)),
              })),
            empReqFile[_0x54c156(0x18d)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x13879d(0x187)](_0x13879d(0x190))
        [_0x13879d(0x187)](_0x13879d(0x198))
        [_0x13879d(0x1f6)](function (_0x1bc766) {
          const _0xc9fdca = _0x13879d;
          (skipTo = undefined),
            $(this)
              [_0xc9fdca(0x162)](_0xc9fdca(0x225))
              [_0xc9fdca(0x143)]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0xc9fdca(0x162)](_0xc9fdca(0x225))
                [_0xc9fdca(0x143)](_0xc9fdca(0x18a))),
            $(this)
              [_0xc9fdca(0x162)]("[data-go-to]")
              [_0xc9fdca(0x167)](_0xc9fdca(0x202)) &&
              ((answer = $(this)
                [_0xc9fdca(0x162)](_0xc9fdca(0x150))
                ["attr"]("data-go-to")),
              (selections = selections[_0xc9fdca(0x1fb)](
                (_0x3a323d) => _0x3a323d[_0xc9fdca(0x145)] !== x
              )),
              selections[_0xc9fdca(0x151)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0xc9fdca(0x151)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0xc9fdca(0x158)](
                  (_0x2503ad) => _0x2503ad["step"] === x
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0xc9fdca(0x174)] = x)));
        }),
      $(steps[x])
        [_0x13879d(0x187)](_0x13879d(0x190))
        [_0x13879d(0x187)](_0x13879d(0x160))
        [_0x13879d(0x1f6)](function (_0x524bfd) {
          const _0x1f5533 = _0x13879d;
          $(this)[_0x1f5533(0x1b5)]() !== ""
            ? (empReqSelect = empReqSelect[_0x1f5533(0x1fb)](
                (_0x4dd5ee) => _0x4dd5ee[_0x1f5533(0x22a)] !== _0x524bfd
              ))
            : (!empReqSelect[_0x1f5533(0x187)](
                (_0x221d91) => _0x221d91[_0x1f5533(0x22a)] === _0x524bfd
              ) && empReqSelect[_0x1f5533(0x151)]({ input: _0x524bfd }),
              unfilledArr[_0x1f5533(0x151)]({
                input: $(this)[_0x1f5533(0x167)](_0x1f5533(0x194)),
              })),
            empReqSelect[_0x1f5533(0x18d)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x13879d(0x190))
        ["find"]("select")
        [_0x13879d(0x1f6)](function (_0x2aa082) {
          const _0x23ac3f = _0x13879d;
          (skipTo = undefined),
            $(this)
              [_0x23ac3f(0x162)](_0x23ac3f(0x225))
              [_0x23ac3f(0x143)]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0x23ac3f(0x162)](_0x23ac3f(0x225))
                [_0x23ac3f(0x143)]("skip-to")),
            $(this)
              [_0x23ac3f(0x162)](_0x23ac3f(0x150))
              ["attr"](_0x23ac3f(0x202)) &&
              ((answer = $(this)
                [_0x23ac3f(0x162)](_0x23ac3f(0x150))
                [_0x23ac3f(0x167)](_0x23ac3f(0x202))),
              (selections = selections[_0x23ac3f(0x1fb)](
                (_0xbd7265) => _0xbd7265[_0x23ac3f(0x145)] !== x
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x23ac3f(0x151)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x23ac3f(0x158)](
                  (_0xffa23c) => _0xffa23c["step"] === x
                )),
                (selections[objIndex][_0x23ac3f(0x1a2)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x23ac3f(0x174)] = x)));
        }),
      $(steps[x])
        [_0x13879d(0x187)](_0x13879d(0x190))
        ["find"]("textarea[required]")
        [_0x13879d(0x1f6)](function (_0x1d10d7) {
          const _0x4b9174 = _0x13879d;
          let _0x13530e = $(this)[_0x4b9174(0x1b5)]()[_0x4b9174(0x18d)],
            _0x215752 = $(this)[_0x4b9174(0x143)](_0x4b9174(0x214))
              ? $(this)[_0x4b9174(0x143)](_0x4b9174(0x214))
              : 0x0;
          $(this)["val"]() !== "" && _0x13530e >= _0x215752
            ? (empReqTextarea = empReqTextarea["filter"](
                (_0x3d097d) => _0x3d097d["input"] !== _0x1d10d7
              ))
            : (!empReqTextarea[_0x4b9174(0x187)](
                (_0x7dbaf6) => _0x7dbaf6[_0x4b9174(0x22a)] === _0x1d10d7
              ) && empReqTextarea[_0x4b9174(0x151)]({ input: _0x1d10d7 }),
              unfilledArr["push"]({
                input: $(this)[_0x4b9174(0x167)](_0x4b9174(0x194)),
              })),
            empReqTextarea[_0x4b9174(0x18d)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x13879d(0x187)](_0x13879d(0x190))
        [_0x13879d(0x187)](_0x13879d(0x141))
        [_0x13879d(0x1f6)](function (_0xd1bc8f) {
          const _0x2db157 = _0x13879d;
          (skipTo = undefined),
            $(this)
              [_0x2db157(0x162)](_0x2db157(0x225))
              [_0x2db157(0x143)]("skip-to") !== "" &&
              (skipTo = $(this)
                ["parents"](_0x2db157(0x225))
                ["data"](_0x2db157(0x18a))),
            $(this)
              [_0x2db157(0x162)]("[data-go-to]")
              [_0x2db157(0x167)](_0x2db157(0x202)) &&
              ((answer = $(this)
                [_0x2db157(0x162)](_0x2db157(0x150))
                ["attr"](_0x2db157(0x202))),
              (selections = selections[_0x2db157(0x1fb)](
                (_0x36851b) => _0x36851b[_0x2db157(0x145)] !== x
              )),
              selections[_0x2db157(0x151)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x2db157(0x151)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x2db157(0x158)](
                  (_0xebcaa5) => _0xebcaa5[_0x2db157(0x145)] === x
                )),
                (selections[objIndex][_0x2db157(0x1a2)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x2db157(0x174)] = x)));
        }),
      $(steps[x])
        ["find"]("[data-answer]:visible")
        [_0x13879d(0x187)](_0x13879d(0x1ec))
        [_0x13879d(0x1f6)](function (_0x461866) {
          const _0x456666 = _0x13879d;
          $(this)[_0x456666(0x1b5)]() !== ""
            ? validateEmail(
                $(this)[_0x456666(0x1b5)](),
                $(this)[_0x456666(0x143)]("block-domain"),
                $(this)[_0x456666(0x167)]("name")
              )
            : ((emailFilled = ![]),
              unfilledArr[_0x456666(0x151)]({
                input: $(this)["attr"](_0x456666(0x194)),
              }));
        }),
      $(steps[x])
        ["find"]("[data-answer]:visible")
        [_0x13879d(0x187)](_0x13879d(0x153))
        [_0x13879d(0x1f6)](function (_0x4121ed) {
          const _0x47d025 = _0x13879d;
          (skipTo = undefined),
            $(this)
              [_0x47d025(0x162)]("[data-skip-to]")
              [_0x47d025(0x143)]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0x47d025(0x162)](_0x47d025(0x225))
                [_0x47d025(0x143)]("skip-to")),
            $(this)
              [_0x47d025(0x162)]("[data-go-to]")
              ["attr"](_0x47d025(0x202)) &&
              ((answer = $(this)
                [_0x47d025(0x162)](_0x47d025(0x150))
                ["attr"](_0x47d025(0x202))),
              (selections = selections["filter"](
                (_0x144d70) => _0x144d70["step"] !== x
              )),
              selections[_0x47d025(0x151)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x47d025(0x151)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x47d025(0x158)](
                  (_0x3d6e34) => _0x3d6e34[_0x47d025(0x145)] === x
                )),
                (selections[objIndex][_0x47d025(0x1a2)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x47d025(0x174)] = x)));
        });
  }
  $(steps[x])[_0x13879d(0x187)](_0x13879d(0x201))["is"](_0x13879d(0x215)) &&
    ((selArr = []),
    $(steps)
      ["find"](_0x13879d(0x21d))
      [_0x13879d(0x1f6)](function (_0x1c4215, _0x6d350b) {
        const _0x125296 = _0x13879d;
        selArr[_0x125296(0x151)]({
          selected: $(this)["data"](_0x125296(0x1f3)),
        });
      }),
    (selString = []),
    selArr[_0x13879d(0x1b6)]((_0x260cb3) =>
      selString[_0x13879d(0x151)](_0x260cb3[_0x13879d(0x1f3)])
    ),
    (selections = selections[_0x13879d(0x1fb)](
      (_0x20cf51) => _0x20cf51[_0x13879d(0x145)] !== x
    )),
    $(steps[x])
      [_0x13879d(0x187)](_0x13879d(0x190))
      [_0x13879d(0x187)](_0x13879d(0x166))
      [_0x13879d(0x1f6)](function () {
        const _0x3e038a = _0x13879d;
        skipTo = undefined;
        if (
          $(this)
            ["parents"](_0x3e038a(0x225))
            [_0x3e038a(0x143)](_0x3e038a(0x18a))
        )
          skipTo = $(this)
            ["parents"](_0x3e038a(0x225))
            [_0x3e038a(0x143)](_0x3e038a(0x18a));
        else
          $(this)["data"](_0x3e038a(0x18a)) &&
            (skipTo = $(this)[_0x3e038a(0x143)](_0x3e038a(0x18a)));
        if ($(this)["data"](_0x3e038a(0x179)))
          (answer = $(this)[_0x3e038a(0x167)](_0x3e038a(0x202))),
            selections[_0x3e038a(0x151)]({ step: x, selected: answer }),
            skipTo &&
              (selections["push"]({ step: skipTo - 0x2, selected: answer }),
              (objIndex = selections[_0x3e038a(0x158)](
                (_0x50fab5) => _0x50fab5[_0x3e038a(0x145)] === x
              )),
              (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x3e038a(0x174)] = x));
        else
          $(this)
            [_0x3e038a(0x162)](_0x3e038a(0x150))
            [_0x3e038a(0x143)]("go-to") &&
            ((answer = $(this)
              [_0x3e038a(0x162)](_0x3e038a(0x150))
              [_0x3e038a(0x143)]("go-to")),
            selections[_0x3e038a(0x151)]({ step: x, selected: answer }),
            skipTo &&
              (selections["push"]({ step: skipTo - 0x2, selected: answer }),
              (objIndex = selections[_0x3e038a(0x158)](
                (_0x38f15e) => _0x38f15e[_0x3e038a(0x145)] === x
              )),
              (selections[objIndex][_0x3e038a(0x1a2)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x3e038a(0x174)] = x)));
      }),
    logicExtra
      ? ($(steps[x])
          ["find"](_0x13879d(0x190))
          [_0x13879d(0x187)](_0x13879d(0x1dc))
          [_0x13879d(0x143)]("radio-skip") === !![] ||
          $(steps[x])
            [_0x13879d(0x187)]("[data-answer][data-radio-skip]:visible")
            [_0x13879d(0x143)](_0x13879d(0x228)) === !![]) &&
        skip &&
        selections[_0x13879d(0x1fb)]((_0x2802fd) => _0x2802fd["step"] === x)[
          "length"
        ] > 0x0 &&
        textareaLength === 0x0 &&
        textInputLength === 0x0 &&
        emailInputLength === 0x0 &&
        checkboxInputLength === 0x0 &&
        setTimeout(function () {
          (next = !![]), nextStep(), selectionQuiz();
        }, $(steps[x])["find"]("[data-radio-delay]")["data"](_0x13879d(0x1f5)))
      : $(steps[x])
          [_0x13879d(0x187)](_0x13879d(0x1dc))
          [_0x13879d(0x143)]("radio-skip") === !![] &&
        skip &&
        textareaLength === 0x0 &&
        textInputLength === 0x0 &&
        emailInputLength === 0x0 &&
        checkboxInputLength === 0x0 &&
        setTimeout(function () {
          (next = !![]), nextStep(), selectionQuiz();
        }, $(steps[x])
          [_0x13879d(0x187)]("[data-radio-delay]")
          [_0x13879d(0x143)](_0x13879d(0x1f5)))),
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
  const _0x3fe8d3 = _0x129ed0;
  $(_0x3fe8d3(0x208))["hide"](),
    unfilledArr[_0x3fe8d3(0x18d)] > 0x0 &&
      unfilledArr[_0x3fe8d3(0x1b6)](function (_0x6b0226) {
        const _0xd366bd = _0x3fe8d3;
        $(_0xd366bd(0x20b) + _0x6b0226[_0xd366bd(0x22a)] + "\x22]")
          [_0xd366bd(0x17d)]("[data-text=\x22error-message\x22]")
          [_0xd366bd(0x1f0)](),
          $(_0xd366bd(0x20b) + _0x6b0226["input"] + "\x22]")
            [_0xd366bd(0x162)]()
            ["children"](_0xd366bd(0x208))
            ["fadeIn"](),
          $("textarea[name=\x22" + _0x6b0226["input"] + "\x22]")
            [_0xd366bd(0x17d)](_0xd366bd(0x208))
            [_0xd366bd(0x1f0)](),
          $(_0xd366bd(0x1da) + _0x6b0226[_0xd366bd(0x22a)] + "\x22]")
            [_0xd366bd(0x17d)](_0xd366bd(0x208))
            [_0xd366bd(0x1f0)]();
      });
}
function _0x8b10(_0x236787, _0x299796) {
  const _0x326d03 = _0x326d();
  return (
    (_0x8b10 = function (_0x8b10cf, _0x210bde) {
      _0x8b10cf = _0x8b10cf - 0x13d;
      let _0x296802 = _0x326d03[_0x8b10cf];
      return _0x296802;
    }),
    _0x8b10(_0x236787, _0x299796)
  );
}
function resetInputErrorMessage(_0x210377) {
  const _0x3ae7c7 = _0x129ed0;
  $(_0x3ae7c7(0x20b) + _0x210377 + "\x22]")
    [_0x3ae7c7(0x17d)](_0x3ae7c7(0x208))
    [_0x3ae7c7(0x226)](),
    $("input[name=\x22" + _0x210377 + "\x22]")
      [_0x3ae7c7(0x162)]()
      ["children"](_0x3ae7c7(0x208))
      [_0x3ae7c7(0x226)](),
    $(_0x3ae7c7(0x220) + _0x210377 + "\x22]")
      ["siblings"]("[data-text=\x22error-message\x22]")
      [_0x3ae7c7(0x226)](),
    $(_0x3ae7c7(0x1da) + _0x210377 + "\x22]")
      [_0x3ae7c7(0x17d)](_0x3ae7c7(0x208))
      ["hide"]();
}
function nextStep() {
  const _0x142d0f = _0x129ed0;
  customError
    ? ($(_0x142d0f(0x208))[_0x142d0f(0x226)](),
      fill
        ? (x++,
          countCard
            ? ((curStep = curStep + 0x1),
              $(_0x142d0f(0x146))[_0x142d0f(0x1ff)](steps[_0x142d0f(0x18d)]))
            : $(steps[x])["data"](_0x142d0f(0x172))
            ? (curStep = curStep + 0x0)
            : (curStep = curStep + 0x1),
          $(_0x142d0f(0x216))[_0x142d0f(0x1ff)](curStep),
          (progress = x),
          x <= steps["length"] - 0x1 &&
            (updateStep(), memory && saveFilledInput()))
        : displayErrorMessage())
    : (x++,
      countCard
        ? ((curStep = curStep + 0x1),
          $(_0x142d0f(0x146))[_0x142d0f(0x1ff)](steps["length"]))
        : $(steps[x])[_0x142d0f(0x143)](_0x142d0f(0x172))
        ? (curStep = curStep + 0x0)
        : (curStep = curStep + 0x1),
      $(_0x142d0f(0x216))[_0x142d0f(0x1ff)](curStep),
      x > progress && (progress = x),
      x <= steps[_0x142d0f(0x18d)] - 0x1 &&
        (updateStep(), memory && saveFilledInput())),
    scrollTop();
}
function _0x326d() {
  const _0x2b72b3 = [
    "keyCode",
    "Webflow",
    "[data-display-wrapper=\x22",
    "_blank",
    "[data-query-param]",
    "focus",
    "offset",
    "input-field",
    ":input[type=\x22checkbox\x22]:checked",
    "select",
    "[data-success-card]",
    "xxx\x20xxx\x20xxxx",
    ":input[type=\x22tel\x22][required]",
    "[data-reinit]",
    "[data-reset-delay]",
    "[data-form=\x22step\x22]",
    "select[name=\x22",
    "[data-input-field]",
    "[data-radio-skip]:visible",
    ".w-radio-input",
    "field",
    "option[value=\x22",
    "filledInput",
    "[data-btn=\x22reset\x22]",
    "trim",
    "type",
    "html,\x20body",
    "auto",
    ":input[type=\x22checkbox\x22][required]",
    "\x22]:checked",
    "metaKey",
    "8nxjMGH",
    "edit-step",
    "preventDefault",
    ":input[type=\x22email\x22][required]",
    "top",
    "[data-redirect-delay]",
    "css",
    "fadeIn",
    "searchParams",
    "animate",
    "selected",
    "2169252wIWdcW",
    "radio-delay",
    "each",
    "weighted-selection",
    "input[type=\x22checkbox\x22]:visible",
    "disabled",
    "[data-form=\x22progress\x22]",
    "filter",
    "data-name",
    "[data-cms-select=text]",
    "\x22][value=\x22",
    "text",
    "ix2",
    ":input[type=\x22radio\x22]",
    "data-go-to",
    "[data-btn=\x22check\x22]",
    "require",
    "(xxx)\x20xxx\x20xxxx",
    "href",
    "removeClass",
    "[data-text=\x22error-message\x22]",
    "[data-form=\x22back-btn\x22]",
    "key",
    "input[name=\x22",
    "replace",
    "<br>Data\x20Go\x20To\x20=\x20",
    "2233971JMgLjY",
    "current",
    "[data-form=\x22next-btn\x22]",
    "855786bMyKQg",
    "phone-autoformat",
    "[data-form=\x22submit-btn\x22]",
    "min-character",
    ":checked",
    "[data-text=\x22current-step\x22]",
    "show",
    "[data-cms-select=input]",
    "[data-btn=\x22edit\x22]",
    "body",
    "url",
    "xxx.xxx.xxxx",
    "[data-selected]:checked",
    "[data-add-new]",
    ":input[type=\x22text\x22]",
    "textarea[name=\x22",
    "textarea[required]",
    "shiftKey",
    "data-radio-skip",
    "memory",
    "[data-skip-to]",
    "hide",
    "new-tab",
    "radio-skip",
    ":input[type=\x22checkbox\x22][required]:checked",
    "input",
    "append",
    ":input[type=\x22number\x22]",
    "[data-display=\x22",
    "textarea[required]:visible",
    "submit",
    "[data-form=\x22progress-indicator\x22]",
    "span",
    ":input[type=\x22checkbox\x22]",
    "clickable",
    "0.4",
    "<br>Data\x20Answer\x20=\x20",
    "destroy",
    "textarea",
    "[data-index=\x22",
    "data",
    "replaceState",
    "step",
    "[data-text=\x22total-steps\x22]",
    "Please\x20wait...",
    "clickable-all",
    "input[type=\x22email\x22]:visible",
    "[data-answer=\x22",
    "w--redirected-checked",
    "quiz",
    "removeItem",
    "substring",
    "index",
    "[data-go-to]",
    "push",
    "input:radio[required]",
    ":input[type=\x22email\x22]",
    "keydown",
    "some",
    "[data-count-card]",
    "12AQJjBl",
    "findIndex",
    "[data-clone=\x22",
    "[data-selection]",
    "[data-checkbox]",
    "split",
    "[data-form=\x22submit\x22]:visible",
    "click",
    "7780nCSQxt",
    "select[required]",
    ":input[required]",
    "parents",
    "[data-form=\x22next-btn\x22][data-submit-show]",
    "[data-selection=\x22",
    "[data-quiz]",
    ":input[type=\x27radio\x27]:checked",
    "attr",
    "[data-select-multiple]",
    "prop",
    "clone",
    "last",
    "count-card",
    "[data-clickable]",
    "(xxx)\x20xxx-xxxx",
    ".w-checkbox-input",
    "7MxGPZP",
    "radio",
    "card",
    "input:checkbox",
    "backTo",
    "match",
    ":input",
    "delete",
    "novalidate",
    "go-to",
    "parent",
    "logic-extra",
    "value",
    "siblings",
    "getItem",
    "success",
    "location",
    "status",
    "[data-selection=\x22other\x22]",
    ".w-form-done",
    "select[required]:visible",
    "required",
    "change",
    "find",
    "parse",
    ":input[type=\x22file\x22][required]",
    "skip-to",
    "log",
    "form[data-form=\x22multistep\x22]\x20:input",
    "length",
    "wait",
    "debug-mode",
    "[data-answer]:visible",
    "data-radio-delay",
    "dispatchEvent",
    "[data-form=\x22custom-progress-indicator\x22]",
    "name",
    "history",
    "not",
    "add-new",
    ":input[type=\x22file\x22]",
    "checked",
    "Enter",
    "[data-weighted-selection]",
    "select-multiple",
    "addClass",
    "[data-custom-error-message]",
    "block-domain",
    "[data-answer]",
    "keypress",
    "skipTo",
    ":input[type=\x22text\x22][required]",
    ":input[type=\x22tel\x22]",
    "data-input-field",
    "107238BeIqvs",
    "input[type=\x22submit\x22]",
    "<option>",
    "[type=\x22submit\x22]",
    "reset",
    "[data-input-field=\x22",
    "input[autofocus]",
    "224823gkbcBz",
    "[data-enter]",
    "reset-delay",
    "ajaxComplete",
    "input:radio[name=\x22",
    "trigger",
    "children",
    "[data-form=\x22next-btn\x22][type=\x22submit\x22]",
    "val",
    "forEach",
    "stringify",
    "[type=\x22checkbox\x22]",
    "checkbox",
    "[data-clone-wrapper=\x22",
    "readystatechange",
    "open",
    "909455RVcQku",
    "inputName",
    "[data-form=\x22multistep\x22]",
    "xxx-xxx\x20xxxx",
    "4037EOJucc",
    "stopPropagation",
    "redirect-delay",
    "none",
    "includes",
    "join",
    "textarea[autofocus]",
    "[data-form=\x22submit-btn\x22]:visible",
    "set",
  ];
  _0x326d = function () {
    return _0x2b72b3;
  };
  return _0x326d();
}
function backStep() {
  const _0x27ff20 = _0x129ed0;
  customError && $(_0x27ff20(0x208))[_0x27ff20(0x226)](),
    countCard
      ? ((curStep = curStep - 0x1),
        $("[data-text=\x22total-steps\x22]")[_0x27ff20(0x1ff)](
          steps[_0x27ff20(0x18d)]
        ))
      : $(steps[x])[_0x27ff20(0x143)](_0x27ff20(0x172))
      ? (curStep = curStep - 0x0)
      : (curStep = curStep - 0x1),
    $(_0x27ff20(0x216))[_0x27ff20(0x1ff)](curStep),
    x > 0x0 &&
      ($(progressbar[x])["removeClass"](_0x27ff20(0x20f)),
      selections[_0x27ff20(0x1fb)](
        (_0x4525b0) => _0x4525b0[_0x27ff20(0x1a2)] === x
      )[_0x27ff20(0x18d)] > 0x0
        ? (x = parseInt(
            getSafe(
              () =>
                selections[_0x27ff20(0x1fb)](
                  (_0x5cc005) => _0x5cc005["skipTo"] === x
                )[0x0][_0x27ff20(0x174)]
            )
          ))
        : x--,
      updateStep()),
    $(steps[x])["find"]("input[type=\x22radio\x22]")["prop"]("checked", ![]),
    scrollTop();
}
function selectionQuiz() {
  const _0x30129e = _0x129ed0;
  if ($(this)[_0x30129e(0x187)](_0x30129e(0x203))) {
    $(_0x30129e(0x15a))["hide"]();
    if (weightedSelection) {
      let _0xb03dc2 = 0x0;
      selArr[_0x30129e(0x1b6)](function (_0x18b1fe) {
        const _0x57753a = _0x30129e;
        _0xb03dc2 = _0xb03dc2 + _0x18b1fe[_0x57753a(0x1f3)];
      }),
        $(_0x30129e(0x164) + _0xb03dc2 + "\x22]")[_0x30129e(0x18d)] > 0x0
          ? $("[data-selection=\x22" + _0xb03dc2 + "\x22]")[_0x30129e(0x1f0)]()
          : $("[data-selection=\x22other\x22]")[_0x30129e(0x1f0)]();
    } else {
      let _0x38e34a = -0x1;
      $(_0x30129e(0x15a))[_0x30129e(0x1f6)](function (_0x4f69b8) {
        const _0x3a372f = _0x30129e;
        $($(_0x3a372f(0x15a))[_0x4f69b8])
          ["data"]("selection")
          [_0x3a372f(0x1c5)](selString[_0x3a372f(0x1c6)]()) &&
          (_0x38e34a = _0x4f69b8);
      }),
        _0x38e34a > -0x1
          ? $($(_0x30129e(0x15a))[_0x38e34a])[_0x30129e(0x1f0)]()
          : $(_0x30129e(0x182))["fadeIn"]();
    }
  }
}
function triggerInputAllData() {
  savedFilledInput &&
    memory &&
    savedFilledInput["forEach"]((_0x5d2a7d) => {
      const _0x3d5288 = _0x8b10;
      if (
        $(
          "input[name=\x22" +
            _0x5d2a7d[_0x3d5288(0x1be)] +
            _0x3d5288(0x1fe) +
            _0x5d2a7d[_0x3d5288(0x17c)] +
            "\x22]"
        )[_0x3d5288(0x167)](_0x3d5288(0x1e3)) === _0x3d5288(0x171)
      )
        $(
          _0x3d5288(0x20b) +
            _0x5d2a7d[_0x3d5288(0x1be)] +
            "\x22][value=\x22" +
            _0x5d2a7d[_0x3d5288(0x17c)] +
            "\x22]"
        )["trigger"](_0x3d5288(0x22a));
      else
        _0x5d2a7d["value"] === "on"
          ? $(_0x3d5288(0x20b) + _0x5d2a7d["inputName"] + "\x22]")[
              _0x3d5288(0x1b2)
            ](_0x3d5288(0x22a))
          : ($(_0x3d5288(0x20b) + _0x5d2a7d[_0x3d5288(0x1be)] + "\x22]")[
              _0x3d5288(0x1b2)
            ](_0x3d5288(0x22a)),
            $(_0x3d5288(0x20b) + _0x5d2a7d[_0x3d5288(0x1be)] + "\x22]")[
              _0x3d5288(0x1b2)
            ](_0x3d5288(0x186)));
    });
}
$(_0x129ed0(0x210))["on"](_0x129ed0(0x15e), function () {
  scrollTop(), (next = !![]), nextStep(), selectionQuiz();
}),
  $("[data-form=\x22back-btn\x22]")["on"](_0x129ed0(0x15e), function () {
    scrollTop(), (next = ![]), (back = !![]), backStep();
  }),
  $(steps)
    ["find"](_0x129ed0(0x176))
    ["on"](_0x129ed0(0x22a), function (_0xfa53f5) {
      const _0xf785e = _0x129ed0;
      $(this)[_0xf785e(0x167)](_0xf785e(0x1e3)) === "radio" && (skip = !![]),
        validation();
    });
$("[data-clickable-all]")[_0x129ed0(0x143)](_0x129ed0(0x148))
  ? $("[data-form=\x22custom-progress-indicator\x22]")[_0x129ed0(0x207)](
      _0x129ed0(0x1f9)
    )
  : $(_0x129ed0(0x193))[_0x129ed0(0x19d)]("disabled");
function clickableIndicator() {
  const _0x165820 = _0x129ed0;
  $(_0x165820(0x230))["removeClass"](_0x165820(0x20f)),
    $("[data-clickable]")[_0x165820(0x143)]("clickable") &&
      ($(_0x165820(0x16d))[_0x165820(0x143)](_0x165820(0x148))
        ? ((x = $(this)["index"]()), updateStep())
        : $(this)[_0x165820(0x14f)]() <= progress &&
          ((x = $(this)[_0x165820(0x14f)]()), updateStep()));
}
$("[data-form=\x22custom-progress-indicator\x22]")["on"](
  _0x129ed0(0x15e),
  clickableIndicator
);
$(_0x129ed0(0x1bf))[_0x129ed0(0x143)](_0x129ed0(0x18f)) &&
  ($(_0x129ed0(0x150))[_0x129ed0(0x1f6)](function () {
    const _0x1c4bea = _0x129ed0;
    $(this)[_0x1c4bea(0x22b)](
      _0x1c4bea(0x20d),
      $(this)["data"](_0x1c4bea(0x179))
    );
  }),
  $("[data-answer]")[_0x129ed0(0x1f6)](function () {
    const _0x224cee = _0x129ed0;
    $(this)[_0x224cee(0x22b)](
      _0x224cee(0x13f),
      $(this)[_0x224cee(0x143)]("answer")
    );
  }));
$(_0x129ed0(0x213))["on"](_0x129ed0(0x15e), function (_0x4b4d08) {
  const _0x405c80 = _0x129ed0;
  $(this)[_0x405c80(0x143)]("redirect") &&
    (redirectTo = $(this)[_0x405c80(0x143)]("redirect")),
    !$(this)[_0x405c80(0x143)]("new-tab") &&
      (newTab = $(this)[_0x405c80(0x143)](_0x405c80(0x227))),
    (successCard = $(this)[_0x405c80(0x143)](_0x405c80(0x17f))),
    _0x4b4d08[_0x405c80(0x1eb)](),
    _0x4b4d08["stopPropagation"](),
    logicExtra &&
      ($(this)[_0x405c80(0x169)](_0x405c80(0x178), !![]),
      $(steps)
        [_0x405c80(0x187)](_0x405c80(0x176))
        [_0x405c80(0x169)](_0x405c80(0x185), ![])),
    localStorage[_0x405c80(0x14d)](_0x405c80(0x1e0)),
    fill &&
      ($(this)[_0x405c80(0x143)]("wait")
        ? $(this)[_0x405c80(0x1b5)]($(this)[_0x405c80(0x143)](_0x405c80(0x18e)))
        : ($(this)[_0x405c80(0x1b5)](_0x405c80(0x147)),
          $(this)[_0x405c80(0x1ff)](_0x405c80(0x147))),
      $(_0x405c80(0x1bf))[_0x405c80(0x22f)]());
});
function resetFormly() {
  const _0x536b37 = _0x129ed0;
  $(_0x536b37(0x1bf))["trigger"](_0x536b37(0x1aa)),
    $(_0x536b37(0x1bf))
      ["parents"]()
      [_0x536b37(0x187)](_0x536b37(0x183))
      [_0x536b37(0x226)](),
    (x = 0x0),
    updateStep(),
    $("[data-form=\x22multistep\x22]")[_0x536b37(0x217)](),
    $(_0x536b37(0x213))[_0x536b37(0x1ff)](oldSubmitText),
    $("[data-form=\x22submit-btn\x22]")[_0x536b37(0x1b5)](oldSubmitText),
    $("[data-text=\x22current-step\x22]")[_0x536b37(0x1ff)](0x1),
    $(_0x536b37(0x1bf))
      [_0x536b37(0x187)](_0x536b37(0x173))
      [_0x536b37(0x17d)](_0x536b37(0x16f))
      ["removeClass"](_0x536b37(0x14b));
}
$(document)[_0x129ed0(0x1b0)](function (_0x1faff5, _0x1428f6, _0x4b9558) {
  const _0x545a5 = _0x129ed0;
  if (
    _0x4b9558[_0x545a5(0x21b)]["includes"]("https://webflow.com/api/v1/form/")
  ) {
    const _0x509d85 = _0x1428f6[_0x545a5(0x181)] === 0xc8,
      _0x41bd2a = "redirect-form-hehexd";
    redirectTo &&
      _0x509d85 &&
      (newTab
        ? window[_0x545a5(0x1bc)](redirectTo, _0x545a5(0x1cd))
        : setTimeout(() => {
            const _0x53ec44 = _0x545a5;
            location[_0x53ec44(0x206)] = redirectTo;
          }, redirectDelay)),
      _0x509d85 &&
        successCard !== "" &&
        $("[data-success-card=\x22" + successCard + "\x22]")[_0x545a5(0x1f0)](),
      _0x509d85 &&
        formReset &&
        setTimeout(() => {
          resetFormly();
        }, resetDelay);
  }
}),
  $(_0x129ed0(0x219))["on"](_0x129ed0(0x15e), function () {
    const _0x4ada81 = _0x129ed0;
    var _0x450c39 = $(this)
      [_0x4ada81(0x17a)]()
      [_0x4ada81(0x187)](_0x4ada81(0x1db))
      [_0x4ada81(0x143)](_0x4ada81(0x1d1));
    setTimeout(function () {
      const _0x1b824e = _0x4ada81;
      $(_0x1b824e(0x20b) + _0x450c39 + "\x22]")[_0x1b824e(0x1cf)]();
    }, 0x64),
      (back = !![]),
      (x = $(this)[_0x4ada81(0x143)](_0x4ada81(0x1ea)) - 0x1),
      updateStep(),
      countCard
        ? ((curStep = x + 0x1),
          $("[data-text=\x22total-steps\x22]")[_0x4ada81(0x1ff)](
            steps[_0x4ada81(0x18d)]
          ))
        : $(steps[x])["data"]("card")
        ? (curStep = x + 0x0)
        : (curStep = x + 0x1),
      $("[data-text=\x22current-step\x22]")[_0x4ada81(0x1ff)](curStep),
      (back = ![]);
  }),
  $(_0x129ed0(0x1e1))["on"](_0x129ed0(0x15e), function () {
    const _0x306cb1 = _0x129ed0;
    $(_0x306cb1(0x1bf))[_0x306cb1(0x1b2)](_0x306cb1(0x1aa));
    let _0x1129e6 = $(this);
    $(this)[_0x306cb1(0x1ff)](_0x306cb1(0x147)),
      setTimeout(function () {
        const _0x3ae75b = _0x306cb1;
        $(_0x1129e6)[_0x3ae75b(0x1ff)](oldResetText),
          $(_0x1129e6)["parents"](_0x3ae75b(0x183))[_0x3ae75b(0x226)](),
          (x = 0x0),
          updateStep(),
          $(_0x3ae75b(0x1bf))[_0x3ae75b(0x217)](),
          $(_0x3ae75b(0x213))[_0x3ae75b(0x1ff)](oldSubmitText),
          $(_0x3ae75b(0x213))[_0x3ae75b(0x1b5)](oldSubmitText),
          $(_0x1129e6)[_0x3ae75b(0x1b5)](oldSubmitText),
          $(_0x3ae75b(0x216))[_0x3ae75b(0x1ff)](0x1),
          $(_0x3ae75b(0x1bf))
            [_0x3ae75b(0x187)](_0x3ae75b(0x173))
            [_0x3ae75b(0x17d)](".w-checkbox-input")
            [_0x3ae75b(0x207)](_0x3ae75b(0x14b));
      }, resetDelay);
  }),
  $(_0x129ed0(0x21a))["on"](_0x129ed0(0x1a1), function (_0x587be7) {
    const _0x2212a9 = _0x129ed0;
    _0x587be7[_0x2212a9(0x1ca)] === 0xd &&
      fill &&
      ($(_0x2212a9(0x1ae))[_0x2212a9(0x143)]("enter")
        ? (totalSteps > curStep && $(_0x2212a9(0x210))[0x0][_0x2212a9(0x15e)](),
          _0x587be7[_0x2212a9(0x1eb)](),
          _0x587be7["stopPropagation"]())
        : (_0x587be7[_0x2212a9(0x1eb)](), _0x587be7["stopPropagation"]()));
  }),
  $(_0x129ed0(0x21a))[_0x129ed0(0x154)](function (_0xed5f92) {
    const _0x13c258 = _0x129ed0;
    (_0xed5f92[_0x13c258(0x1e8)] || _0xed5f92["ctrlKey"]) &&
      _0xed5f92[_0x13c258(0x1ca)] == 0xd &&
      (x >= steps[_0x13c258(0x18d)] - 0x1 && fill
        ? $(steps[x])["find"](_0x13c258(0x1c8))[_0x13c258(0x15e)]()
        : (event["preventDefault"](), event[_0x13c258(0x1c2)]()));
  }),
  $(_0x129ed0(0x141))[_0x129ed0(0x1a1)](function (_0x3550a5) {
    const _0x4d4596 = _0x129ed0;
    $(this)["focus"](),
      _0x3550a5[_0x4d4596(0x20a)] == _0x4d4596(0x19a) &&
        (_0x3550a5[_0x4d4596(0x1eb)](), _0x3550a5[_0x4d4596(0x1c2)]()),
      _0x3550a5[_0x4d4596(0x222)] &&
        _0x3550a5[_0x4d4596(0x20a)] == _0x4d4596(0x19a) &&
        $(this)[_0x4d4596(0x1b5)]($(this)[_0x4d4596(0x1b5)]() + "\x0a");
  }),
  $(_0x129ed0(0x1bf))
    [_0x129ed0(0x187)](":input")
    ["on"](_0x129ed0(0x186), function () {
      const _0x5216a2 = _0x129ed0;
      (all_data = all_data[_0x5216a2(0x1fb)](
        (_0x5dd4a1) =>
          _0x5dd4a1[_0x5216a2(0x1de)] !== $(this)[_0x5216a2(0x167)]("name")
      )),
        $(this)[_0x5216a2(0x167)](_0x5216a2(0x1e3)) === _0x5216a2(0x1b9)
          ? $(this)["is"](_0x5216a2(0x215))
            ? all_data[_0x5216a2(0x151)]({
                field: $(this)[_0x5216a2(0x167)](_0x5216a2(0x194)),
                value: $(this)
                  [_0x5216a2(0x17d)](_0x5216a2(0x231))
                  [_0x5216a2(0x1ff)](),
              })
            : $(_0x5216a2(0x1ab) + $(this)[_0x5216a2(0x167)]("name") + "\x22]")[
                "hide"
              ]()
          : (all_data[_0x5216a2(0x151)]({
              field: $(this)[_0x5216a2(0x167)](_0x5216a2(0x194)),
              value: $(this)[_0x5216a2(0x1b5)](),
            }),
            $(this)[_0x5216a2(0x1b5)]() !== "" &&
              resetInputErrorMessage(
                $(this)[_0x5216a2(0x167)](_0x5216a2(0x194))
              )),
        all_data[_0x5216a2(0x1b6)](function (_0x5e0a61) {
          const _0x22c2de = _0x5216a2;
          $(_0x22c2de(0x1ab) + _0x5e0a61[_0x22c2de(0x1de)] + "\x22]")[
            "fadeIn"
          ](),
            $("[data-input-field=\x22" + _0x5e0a61["field"] + "\x22]")["text"](
              _0x5e0a61["value"]
            );
        });
    }),
  $(_0x129ed0(0x1bf))
    [_0x129ed0(0x187)](_0x129ed0(0x141))
    ["on"](_0x129ed0(0x186), function () {
      const _0x4a46db = _0x129ed0;
      $(this)["val"]() !== "" &&
        resetInputErrorMessage($(this)[_0x4a46db(0x167)](_0x4a46db(0x194))),
        (all_data = all_data["filter"](
          (_0x84350f) =>
            _0x84350f[_0x4a46db(0x1de)] !==
            $(this)[_0x4a46db(0x167)](_0x4a46db(0x194))
        )),
        all_data["push"]({
          field: $(this)[_0x4a46db(0x167)](_0x4a46db(0x194)),
          value: $(this)[_0x4a46db(0x1b5)](),
        }),
        all_data[_0x4a46db(0x1b6)](function (_0x40c9de) {
          const _0x292491 = _0x4a46db;
          $(_0x292491(0x1ab) + _0x40c9de["field"] + "\x22]")["fadeIn"](),
            $("[data-input-field=\x22" + _0x40c9de[_0x292491(0x1de)] + "\x22]")[
              "text"
            ](_0x40c9de[_0x292491(0x17c)]);
        });
    }),
  $(_0x129ed0(0x1bf))
    ["find"](_0x129ed0(0x1d3))
    ["on"]("change", function () {
      const _0x3321c5 = _0x129ed0;
      $(this)["val"]() !== "" &&
        resetInputErrorMessage($(this)[_0x3321c5(0x167)](_0x3321c5(0x194))),
        (all_data = all_data[_0x3321c5(0x1fb)](
          (_0x1eb474) =>
            _0x1eb474[_0x3321c5(0x1de)] !==
            $(this)[_0x3321c5(0x167)](_0x3321c5(0x194))
        )),
        all_data[_0x3321c5(0x151)]({
          field: $(this)[_0x3321c5(0x167)](_0x3321c5(0x194)),
          value: $(this)[_0x3321c5(0x1b5)](),
        }),
        all_data["forEach"](function (_0x3e0d6d) {
          const _0x10d422 = _0x3321c5;
          $(_0x10d422(0x1ab) + _0x3e0d6d[_0x10d422(0x1de)] + "\x22]")[
            "fadeIn"
          ](),
            $(_0x10d422(0x1ab) + _0x3e0d6d["field"] + "\x22]")[
              _0x10d422(0x1ff)
            ](_0x3e0d6d[_0x10d422(0x17c)]);
        });
    }),
  updateStep(),
  triggerInputAllData(),
  $("[data-cms-select=cms]")[_0x129ed0(0x1f6)](function () {
    const _0x446335 = _0x129ed0,
      _0x7a12e5 = $(this)["find"](_0x446335(0x1fd)),
      _0x419010 = [];
    console[_0x446335(0x18b)](_0x419010),
      _0x7a12e5[_0x446335(0x1f6)](function () {
        const _0x65dba2 = _0x446335;
        _0x419010["push"]($(this)["text"]()[_0x65dba2(0x1e2)]());
      });
    const _0x4eeb60 = $(this)[_0x446335(0x17d)](_0x446335(0x218));
    $[_0x446335(0x1f6)](_0x419010, function (_0x141636, _0x8f2e0) {
      const _0xdd8f92 = _0x446335,
        _0x48f1c2 = $(_0xdd8f92(0x1a8))
          [_0xdd8f92(0x1b5)](_0x8f2e0)
          [_0xdd8f92(0x1ff)](_0x8f2e0);
      _0x4eeb60[_0xdd8f92(0x22b)](_0x48f1c2);
    });
  }),
  $(_0x129ed0(0x21e))["on"](_0x129ed0(0x15e), function () {
    const _0x274726 = _0x129ed0;
    let _0x15ba63 = $(this)["data"](_0x274726(0x197));
    var _0x472e7f = $(_0x274726(0x159) + _0x15ba63 + "\x22]")
        ["eq"](0x0)
        [_0x274726(0x16a)](!![]),
      _0x2ba88c = $(_0x274726(0x22d) + _0x15ba63 + "\x22]")
        ["eq"](0x0)
        [_0x274726(0x16a)](!![]);
    _0x472e7f[_0x274726(0x187)](_0x274726(0x22a))[_0x274726(0x1f6)](
      function () {
        const _0x40c443 = _0x274726;
        $(this)["val"](""),
          $(this)["attr"](
            _0x40c443(0x194),
            this["name"] +
              "-" +
              (parseInt(
                $("[data-clone=\x22" + _0x15ba63 + "\x22]")
                  [_0x40c443(0x16b)]()
                  [_0x40c443(0x14f)]()
              ) +
                0x1)
          ),
          $(this)["attr"](
            _0x40c443(0x1fc),
            $(this)["data"]("name") +
              "-" +
              (parseInt(
                $(_0x40c443(0x159) + _0x15ba63 + "\x22]")
                  [_0x40c443(0x16b)]()
                  ["index"]()
              ) +
                0x1)
          );
      }
    ),
      _0x2ba88c[_0x274726(0x187)](_0x274726(0x1db))["each"](function () {
        const _0x78ae78 = _0x274726;
        $(this)["attr"](
          _0x78ae78(0x1a5),
          $(this)["data"](_0x78ae78(0x1d1)) +
            "-" +
            (parseInt(
              $("[data-clone=\x22" + _0x15ba63 + "\x22]")
                [_0x78ae78(0x16b)]()
                ["index"]()
            ) +
              0x1)
        );
      }),
      $(_0x274726(0x1ba) + _0x15ba63 + "\x22]")[_0x274726(0x22b)](_0x472e7f),
      $(_0x274726(0x1cc) + _0x15ba63 + "\x22]")["append"](_0x2ba88c),
      $(_0x274726(0x142) + _0x15ba63 + "\x22]")[_0x274726(0x1f6)](function () {
        const _0x5a99fd = _0x274726;
        $(this)[_0x5a99fd(0x1ff)](
          $(this)
            [_0x5a99fd(0x162)](_0x5a99fd(0x159) + _0x15ba63 + "\x22]")
            ["index"]() + 0x1
        );
      }),
      $("[data-display-index=\x22" + _0x15ba63 + "\x22]")["each"](function () {
        const _0x247409 = _0x274726;
        $(this)[_0x247409(0x1ff)](
          $(this)
            [_0x247409(0x162)]("[data-display=\x22" + _0x15ba63 + "\x22]")
            [_0x247409(0x14f)]() + 0x1
        );
      }),
      validation();
  });
