//15th August
//Bug fix:
//1. Fixed form memory bug on radio input
//2. Fixed 'params' not defined
//3. Updated form memory for radio skip
//4. Fixed form memory not working on select input

const _0x46ee11 = _0x74e9;
(function (_0x73cd64, _0x49c004) {
  const _0x3e7281 = _0x74e9,
    _0x4ac6f1 = _0x73cd64();
  while (!![]) {
    try {
      const _0x2ad801 =
        (parseInt(_0x3e7281(0x17a)) / 0x1) *
          (parseInt(_0x3e7281(0x123)) / 0x2) +
        (parseInt(_0x3e7281(0x124)) / 0x3) *
          (parseInt(_0x3e7281(0x11d)) / 0x4) +
        parseInt(_0x3e7281(0x166)) / 0x5 +
        parseInt(_0x3e7281(0x17d)) / 0x6 +
        (-parseInt(_0x3e7281(0x1d1)) / 0x7) *
          (-parseInt(_0x3e7281(0x111)) / 0x8) +
        -parseInt(_0x3e7281(0x127)) / 0x9 +
        -parseInt(_0x3e7281(0x200)) / 0xa;
      if (_0x2ad801 === _0x49c004) break;
      else _0x4ac6f1["push"](_0x4ac6f1["shift"]());
    } catch (_0x3db453) {
      _0x4ac6f1["push"](_0x4ac6f1["shift"]());
    }
  }
})(_0xdc44, 0x9f484);
let x = 0x0,
  curStep = 0x0,
  steps = $(_0x46ee11(0x193)),
  progressbarClone = $("[data-form=\x22progress-indicator\x22]")[
    _0x46ee11(0x192)
  ](),
  progressbar,
  countCard = !![],
  weightedSelection = $(_0x46ee11(0x1db))[_0x46ee11(0x1cf)](_0x46ee11(0x1ae)),
  weightedSelectionRange = $("[data-weighted-selection-range]")[
    _0x46ee11(0x1cf)
  ](_0x46ee11(0x1c6)),
  selectMultiple = $(_0x46ee11(0x1d2))[_0x46ee11(0x1cf)](_0x46ee11(0x164)),
  customError = $(_0x46ee11(0x168))[_0x46ee11(0x1cf)](_0x46ee11(0x152)),
  fill = ![],
  inputFilled = !![],
  selectFilled = !![],
  radioFilled = !![],
  checkboxFilled = !![],
  emailFilled = !![],
  textareaFilled = !![],
  telFilled = !![],
  dateFilled = !![],
  fileFilled = !![],
  numFilled = !![],
  answer = "",
  selections = [],
  selection = [],
  empReqInput = [],
  empReqDate = [],
  empReqRadio = [],
  empReqSelect = [],
  empReqTextarea = [],
  empReqFile = [],
  empReqNum = [],
  empReqEmail = [],
  empReqTel = [],
  reinitIX = $(_0x46ee11(0x183))[_0x46ee11(0x1cf)](_0x46ee11(0x1f0)),
  textareaLength = 0x0,
  textInputLength = 0x0,
  emailInputLength = 0x0,
  selectInputLength = 0x0,
  checkboxInputLength = 0x0,
  filledInput = [],
  savedFilledInput = [],
  memory = $(_0x46ee11(0x16a))[_0x46ee11(0x1cf)](_0x46ee11(0x1ee)),
  quiz = $(_0x46ee11(0x15b))[_0x46ee11(0x1cf)](_0x46ee11(0x12d)),
  progress = 0x0;
const urlFormly = new URL(window["location"]["href"]);
let _params = $(_0x46ee11(0x1ef))[_0x46ee11(0x1cf)](_0x46ee11(0x1cd)),
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
  logicExtra = $(_0x46ee11(0x10a))[_0x46ee11(0x1cf)](_0x46ee11(0x11b)),
  oldSubmitText = $(_0x46ee11(0x1d9))[_0x46ee11(0x186)](),
  oldResetText = $("[data-btn=\x22reset\x22]")[_0x46ee11(0x119)](),
  formReset = $("[data-form=\x22multistep\x22]")[_0x46ee11(0x1cf)]("reset"),
  successCard = "",
  redirectTo = "",
  totalSteps = 0x0,
  checkCount = 0x0,
  resetDelay = $(_0x46ee11(0x161))[_0x46ee11(0x1cf)](_0x46ee11(0x172))
    ? $(_0x46ee11(0x161))[_0x46ee11(0x1cf)](_0x46ee11(0x172))
    : 0x7d0,
  redirectDelay = $(_0x46ee11(0x1b8))[_0x46ee11(0x1cf)]("redirect-delay")
    ? $(_0x46ee11(0x1b8))[_0x46ee11(0x1cf)](_0x46ee11(0x1e4))
    : 0x7d0,
  newTab = !![],
  unfilledArr = [],
  phoneFormat = $(_0x46ee11(0x10a))[_0x46ee11(0x1cf)]("phone-validation"),
  scrollToTop = $(_0x46ee11(0x10a))["data"](_0x46ee11(0x11c)),
  scrollTopOffset = parseInt($(_0x46ee11(0x10a))["data"](_0x46ee11(0x187))),
  notRobot = !![];
(all_data = []),
  (savedFilledInput = JSON[_0x46ee11(0x15f)](
    localStorage[_0x46ee11(0x131)]("filledInput")
  ));
$(_0x46ee11(0x17c))["length"] > 0x0 && (notRobot = ![]);
function recaptcha(_0x350a44) {
  notRobot = !![];
}
$(_0x46ee11(0x179))["length"] > 0x0 &&
  (countCard = $(_0x46ee11(0x179))[_0x46ee11(0x1cf)]("count-card"));
$(_0x46ee11(0x151))[_0x46ee11(0x1c0)](),
  $(progressbarClone)["removeClass"](_0x46ee11(0x1a5)),
  $(_0x46ee11(0x1b2))[_0x46ee11(0x19f)]()[_0x46ee11(0x1d3)](),
  $(_0x46ee11(0x1d9))[_0x46ee11(0x1c0)](),
  $(_0x46ee11(0x13d))["hide"](),
  steps[_0x46ee11(0x180)](function () {
    const _0x1d1fe4 = _0x46ee11;
    $("[data-form=\x22progress\x22]")[_0x1d1fe4(0x184)](
      progressbarClone["clone"](!![], !![])
    );
  }),
  $("[data-input-field]")[_0x46ee11(0x1c0)]();
countCard
  ? ((curStep = curStep + 0x1),
    (totalSteps = steps[_0x46ee11(0x114)]),
    $(_0x46ee11(0x10c))[_0x46ee11(0x119)](totalSteps))
  : ($(steps[x])[_0x46ee11(0x1cf)](_0x46ee11(0x1a8))
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    (totalSteps = $("[data-form=\x22step\x22]:not([data-card=\x22true\x22])")[
      "length"
    ]),
    $(_0x46ee11(0x10c))["text"](totalSteps),
    $(_0x46ee11(0x1bd))[_0x46ee11(0x180)](function () {
      const _0x5c8445 = _0x46ee11;
      $($(_0x5c8445(0x15d))[$(this)[_0x5c8445(0x1f2)]()])[_0x5c8445(0x1c0)]();
    }));
(progressbar = $(_0x46ee11(0x1b2))[_0x46ee11(0x19f)]()),
  $(_0x46ee11(0x15d))["on"](_0x46ee11(0x1fd), clickableIndicator),
  $(_0x46ee11(0x13e))["text"](curStep),
  steps[_0x46ee11(0x1c0)](),
  $(_0x46ee11(0x10d))[_0x46ee11(0x1c0)](),
  $(_0x46ee11(0x159))[_0x46ee11(0x180)](function () {
    const _0x359640 = _0x46ee11;
    $(this)[_0x359640(0x1ec)](_0x359640(0x1aa), "button");
  });
function getParams() {
  const _0x4287ba = _0x46ee11;
  urlFormly["searchParams"][_0x4287ba(0x1b6)](function (_0xc65648, _0x18b313) {
    const _0x36f9c4 = _0x4287ba;
    searchQ[_0x36f9c4(0x128)]({ val: _0xc65648, key: _0x18b313 });
  });
}
function getSafe(_0x105d18, _0x2ebfd9) {
  try {
    return _0x105d18();
  } catch (_0x364281) {
    return _0x2ebfd9;
  }
}
function phoneAutoFormat(_0x56a5c8) {
  var _0x2741d9 = "";
  return function (_0x5eb4fc) {
    const _0x563ed7 = _0x74e9;
    var _0x1a5446 = "",
      _0x9b76e5 = _0x5eb4fc[_0x563ed7(0x19e)](/\D/g, ""),
      _0x469b72 = 0x0,
      _0x321204 = 0x0;
    while (
      _0x469b72 < _0x9b76e5[_0x563ed7(0x114)] &&
      _0x321204 < _0x56a5c8[_0x563ed7(0x114)]
    ) {
      _0x56a5c8[_0x321204] === "x"
        ? ((_0x1a5446 += _0x9b76e5[_0x469b72]), _0x469b72++)
        : (_0x1a5446 += _0x56a5c8[_0x321204]),
        _0x321204++;
    }
    if (_0x5eb4fc[_0x563ed7(0x114)] < _0x2741d9[_0x563ed7(0x114)]) {
      var _0x347362 = _0x56a5c8[_0x563ed7(0x1e3)](_0x321204);
      _0x1a5446 += _0x347362[_0x563ed7(0x19e)](/x/g, "");
    }
    return (_0x2741d9 = _0x1a5446), _0x1a5446;
  };
}
quiz &&
  steps[_0x46ee11(0x180)](function () {
    const _0x499849 = _0x46ee11;
    $(this)[_0x499849(0x19f)]()[_0x499849(0x1ec)](_0x499849(0x1d0), !![]),
      $(this)[_0x499849(0x19f)]()[_0x499849(0x1ec)](_0x499849(0x12f), 0xfa);
  });
function disableBtn(_0x30ea05) {
  const _0x533c14 = _0x46ee11;
  (fill = ![]),
    !customError &&
      ($(_0x533c14(0x16f))["css"]({
        opacity: _0x533c14(0x1c9),
        "pointer-events": _0x533c14(0x1b9),
      }),
      $("[data-form=\x22next-btn\x22]")[_0x533c14(0x116)](_0x533c14(0x171)),
      $(_0x533c14(0x1d9))[_0x533c14(0x1f1)]({
        opacity: _0x533c14(0x1c9),
        "pointer-events": _0x533c14(0x1b9),
      }),
      $(_0x533c14(0x1d9))[_0x533c14(0x116)](_0x533c14(0x171)),
      $(_0x533c14(0x13d))["css"]({
        opacity: "0.4",
        "pointer-events": _0x533c14(0x1b9),
      }),
      $("[data-form-ms=\x22submit-btn\x22]")[_0x533c14(0x116)](
        _0x533c14(0x171)
      ));
}
function enableBtn() {
  const _0x1b94f0 = _0x46ee11;
  (fill = !![]),
    $(_0x1b94f0(0x16f))[_0x1b94f0(0x1f1)]({
      "pointer-events": _0x1b94f0(0x199),
      opacity: "1",
    }),
    $(_0x1b94f0(0x16f))[_0x1b94f0(0x1dc)](_0x1b94f0(0x171)),
    $(_0x1b94f0(0x1d9))[_0x1b94f0(0x1f1)]({
      "pointer-events": _0x1b94f0(0x199),
      opacity: "1",
    }),
    $(_0x1b94f0(0x1d9))[_0x1b94f0(0x1dc)]("disabled"),
    $("[data-form-ms=\x22submit-btn\x22]")[_0x1b94f0(0x1f1)]({
      "pointer-events": _0x1b94f0(0x199),
      opacity: "1",
    }),
    $(_0x1b94f0(0x13d))[_0x1b94f0(0x1dc)]("disabled");
}
function saveFilledInput() {
  const _0x4c002b = _0x46ee11;
  $(_0x4c002b(0x1d5))
    ["not"](_0x4c002b(0x1e0))
    [_0x4c002b(0x180)](function () {
      const _0x5671db = _0x4c002b;
      $(this)[_0x5671db(0x1ec)](_0x5671db(0x1aa)) === _0x5671db(0x188) ||
      $(this)["attr"](_0x5671db(0x1aa)) === "radio"
        ? $(this)["prop"]("checked") &&
          (filledInput[_0x5671db(0x18c)](
            (_0x328528) =>
              _0x328528[_0x5671db(0x1ed)] === $(this)[_0x5671db(0x1ec)]("name")
          )
            ? ((filledInput = filledInput[_0x5671db(0x141)](
                (_0x19dff1) =>
                  _0x19dff1[_0x5671db(0x1ed)] !==
                  $(this)[_0x5671db(0x1ec)](_0x5671db(0x174))
              )),
              $(this)["val"]() !== "" &&
                filledInput[_0x5671db(0x128)]({
                  inputName: $(this)[_0x5671db(0x1ec)](_0x5671db(0x174)),
                  value: $(this)[_0x5671db(0x186)](),
                }))
            : $(this)[_0x5671db(0x186)]() !== "" &&
              filledInput[_0x5671db(0x128)]({
                inputName: $(this)[_0x5671db(0x1ec)]("name"),
                value: $(this)[_0x5671db(0x186)](),
              }))
        : filledInput[_0x5671db(0x18c)](
            (_0x2636da) =>
              _0x2636da["inputName"] === $(this)[_0x5671db(0x1ec)]("name")
          )
        ? ((filledInput = filledInput[_0x5671db(0x141)](
            (_0x1f4c60) =>
              _0x1f4c60[_0x5671db(0x1ed)] !== $(this)[_0x5671db(0x1ec)]("name")
          )),
          $(this)[_0x5671db(0x186)]() !== "" &&
            filledInput["push"]({
              inputName: $(this)[_0x5671db(0x1ec)](_0x5671db(0x174)),
              value: $(this)[_0x5671db(0x186)](),
            }))
        : $(this)[_0x5671db(0x186)]() !== "" &&
          filledInput[_0x5671db(0x128)]({
            inputName: $(this)[_0x5671db(0x1ec)](_0x5671db(0x174)),
            value: $(this)[_0x5671db(0x186)](),
          });
    }),
    localStorage[_0x4c002b(0x19c)](_0x4c002b(0x12c)),
    localStorage[_0x4c002b(0x144)](
      "filledInput",
      JSON[_0x4c002b(0x13c)](filledInput)
    );
}
function _0x74e9(_0x20fb5f, _0x2f5d7c) {
  const _0xdc4405 = _0xdc44();
  return (
    (_0x74e9 = function (_0x74e911, _0x57c9a4) {
      _0x74e911 = _0x74e911 - 0x109;
      let _0x268642 = _0xdc4405[_0x74e911];
      return _0x268642;
    }),
    _0x74e9(_0x20fb5f, _0x2f5d7c)
  );
}
function scrollTop() {
  const _0x43f405 = _0x46ee11;
  scrollToTop &&
    $("html,\x20body")[_0x43f405(0x185)](
      { scrollTop: $(_0x43f405(0x10a))["offset"]()["top"] - scrollTopOffset },
      0x3e8
    );
}
function updateStep() {
  const _0x1568e8 = _0x46ee11;
  scrollTop(),
    (skip = ![]),
    $(_0x1568e8(0x1a9))[_0x1568e8(0x1dc)](_0x1568e8(0x171));
  $(_0x1568e8(0x110))[_0x1568e8(0x1cf)](_0x1568e8(0x136)) &&
    (steps["find"](":input[required]")[_0x1568e8(0x180)](function () {
      const _0x5b1618 = _0x1568e8;
      $(
        $("[data-form=\x22custom-progress-indicator\x22]")[
          $(this)["parents"](_0x5b1618(0x193))[_0x5b1618(0x1f2)]()
        ]
      ),
        $(this)["val"]() === "" && emptyInput++;
    }),
    emptyInput > 0x0
      ? $(_0x1568e8(0x1b5))[_0x1568e8(0x116)](_0x1568e8(0x171))
      : $(_0x1568e8(0x1b5))[_0x1568e8(0x1dc)](_0x1568e8(0x171)));
  $(_0x1568e8(0x1a9))["removeClass"](_0x1568e8(0x1a5)),
    $(_0x1568e8(0x1a9))[_0x1568e8(0x116)](_0x1568e8(0x171)),
    $($("[data-form=\x22custom-progress-indicator\x22]")[x])["addClass"](
      _0x1568e8(0x1a5)
    ),
    (selection = selections[_0x1568e8(0x141)](
      (_0x1e92ac) => _0x1e92ac[_0x1568e8(0x1ce)] === x - 0x1
    ));
  next &&
    (x = getSafe(() => selection[0x0]["skipTo"])
      ? parseInt(getSafe(() => selection[0x0]["skipTo"]))
      : x);
  $(_0x1568e8(0x195))[_0x1568e8(0x1c0)](), steps["hide"]();
  reinitIX === !![] && window[_0x1568e8(0x10e)][_0x1568e8(0x1ad)]();
  $(progressbar)[_0x1568e8(0x1dc)]("current");
  for (i = 0x0; i <= x; i++) {
    countCard
      ? $(progressbar[i])[_0x1568e8(0x116)]("current")
      : !$(steps[i])[_0x1568e8(0x1cf)](_0x1568e8(0x1a8)) &&
        $(progressbar[i])[_0x1568e8(0x116)](_0x1568e8(0x1a5));
  }
  reinitIX === !![]
    ? (window[_0x1568e8(0x10e)] &&
        window[_0x1568e8(0x10e)]["require"]("ix2")[_0x1568e8(0x1f8)](),
      document[_0x1568e8(0x204)](new Event("readystatechange")),
      $(steps[x])[_0x1568e8(0x10f)]())
    : $(steps[x])[_0x1568e8(0x1c1)](_0x1568e8(0x1e6));
  x === 0x0 &&
    !$(steps[x])[_0x1568e8(0x1cf)](_0x1568e8(0x1a8)) &&
    $(steps[x])[_0x1568e8(0x12e)](_0x1568e8(0x195))["show"]();
  selection["length"] > 0x0
    ? $(steps[x])
        [_0x1568e8(0x12e)](
          _0x1568e8(0x155) + selection[0x0][_0x1568e8(0x1e2)] + "\x22]"
        )
        [_0x1568e8(0x10f)]()
    : $(steps[x])
        ["find"](_0x1568e8(0x155) + answer + "\x22]")
        [_0x1568e8(0x10f)]();
  if (x === 0x0)
    $("[data-form=\x22back-btn\x22]")["hide"](),
      $(_0x1568e8(0x16f))["show"](),
      $(_0x1568e8(0x1d9))["hide"]();
  else {
    if (
      x === steps[_0x1568e8(0x114)] - 0x1 ||
      $(steps[x])["find"](_0x1568e8(0x16d))["length"] > 0x0
    ) {
      $(_0x1568e8(0x16f))[_0x1568e8(0x1c0)]();
      if (
        $(steps[x])
          [_0x1568e8(0x12e)](_0x1568e8(0x1fe))
          [_0x1568e8(0x1cf)](_0x1568e8(0x11f))
      )
        $(steps[x])
          ["find"]("[data-form=\x22next-btn\x22][data-submit-show]")
          [_0x1568e8(0x10f)]();
      else
        $(_0x1568e8(0x16f))[_0x1568e8(0x1cf)](_0x1568e8(0x11f)) &&
          $(_0x1568e8(0x16f))[_0x1568e8(0x10f)]();
      $(_0x1568e8(0x1d9))[_0x1568e8(0x10f)](),
        $(_0x1568e8(0x13d))[_0x1568e8(0x10f)](),
        $(_0x1568e8(0x1ba))[_0x1568e8(0x10f)]();
    } else
      $(_0x1568e8(0x16f))[_0x1568e8(0x10f)](),
        $(_0x1568e8(0x1ba))[_0x1568e8(0x10f)](),
        $(_0x1568e8(0x1d9))[_0x1568e8(0x1c0)](),
        $(_0x1568e8(0x13d))[_0x1568e8(0x1c0)]();
  }
  $($(steps[x])[_0x1568e8(0x12e)](_0x1568e8(0x18f))[0x0])[_0x1568e8(0x201)](),
    $($(steps[x])["find"](_0x1568e8(0x1c5))[0x0])[_0x1568e8(0x201)](),
    validation();
  for (idx = 0x0; idx <= x; idx++) {
    $($(_0x1568e8(0x1a9))[idx])[_0x1568e8(0x1dc)](_0x1568e8(0x171));
  }
}
function validateEmail(_0x1941a2, _0x3cb7dc, _0x156e7a) {
  const _0x108de4 = _0x46ee11;
  let _0x2d0c8a = _0x1941a2[_0x108de4(0x156)]("@")
    ? _0x1941a2[_0x108de4(0x18e)]("@")[0x1][_0x108de4(0x18e)](".")[0x0]
    : [];
  dom = [];
  _0x3cb7dc !== undefined &&
    _0x3cb7dc[_0x108de4(0x18e)](",")["forEach"](function (_0x4162ca) {
      const _0x184d2e = _0x108de4;
      _0x4162ca[_0x184d2e(0x156)](_0x2d0c8a) &&
        dom[_0x184d2e(0x128)](_0x2d0c8a);
    });
  dom["length"] > 0x0 ? (domainAllowed = ![]) : (domainAllowed = !![]);
  var _0x16b127 = /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,20})?$/;
  console[_0x108de4(0x140)](_0x16b127[_0x108de4(0x170)](_0x1941a2)),
    !_0x16b127[_0x108de4(0x170)](_0x1941a2) || !domainAllowed
      ? ((emailFilled = ![]),
        unfilledArr[_0x108de4(0x128)]({ input: _0x156e7a }))
      : (emailFilled = !![]);
}
function phoneValidation(_0x59787a, _0x55b58f, _0xfd6969) {
  const _0xe73978 = _0x46ee11;
  if (phoneFormat)
    return _0x59787a[_0xe73978(0x113)](
      new RegExp(phoneFormat[_0xe73978(0x1e3)](0x1, -0x1))
    ) && _0x55b58f >= _0xfd6969
      ? !![]
      : ![];
  else {
    if (_0x55b58f >= _0xfd6969) return !![];
  }
}
function validation() {
  const _0x12fe22 = _0x46ee11;
  $(steps[x])[_0x12fe22(0x1cf)](_0x12fe22(0x1a8)) && enableBtn();
  (unfilledArr = []),
    (inputFilled = !![]),
    (radioFilled = !![]),
    (checkboxFilled = !![]),
    (numFilled = !![]),
    (fileFilled = !![]),
    (dateFilled = !![]),
    (selectFilled = !![]),
    (textareaFilled = !![]),
    (telFilled = !![]),
    (emailFilled = !![]),
    (emptyInput = 0x0),
    (empReqInput = []),
    (empReqDate = []),
    (empReqSelect = []),
    (empReqTextarea = []),
    (empReqNum = []),
    (empReqFile = []),
    (empReqRadio = []),
    (textareaLength = $(steps[x])[_0x12fe22(0x12e)](_0x12fe22(0x178))[
      "length"
    ]),
    (textInputLength = $(steps[x])[_0x12fe22(0x12e)](
      "input[type=\x22text\x22][required]:visible"
    )[_0x12fe22(0x114)]),
    (selectInputLength = $(steps[x])["find"](_0x12fe22(0x135))[
      _0x12fe22(0x114)
    ]),
    (emailInputLength = $(steps[x])["find"](_0x12fe22(0x1ff))["length"]),
    (checkboxInputLength = $(steps[x])[_0x12fe22(0x12e)](_0x12fe22(0x1be))[
      "length"
    ]);
  textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0
    ? disableBtn()
    : enableBtn();
  checkCount = $(steps[x])[_0x12fe22(0x1cf)](_0x12fe22(0x188))
    ? $(steps[x])[_0x12fe22(0x1cf)]("checkbox")
    : $(steps[x])["find"](_0x12fe22(0x165))["length"] > 0x0
    ? $(steps[x])
        [_0x12fe22(0x12e)](_0x12fe22(0x165))
        [_0x12fe22(0x1cf)](_0x12fe22(0x188))
    : 0x0;
  if (!logicExtra)
    $(steps[x])["find"](":input")["is"](_0x12fe22(0x137)) &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])[_0x12fe22(0x12e)](_0x12fe22(0x176))[_0x12fe22(0x114)]
        ? $(steps[x])
            [_0x12fe22(0x12e)](_0x12fe22(0x176))
            ["each"](function () {
              const _0x5eda71 = _0x12fe22;
              $(this)["is"](_0x5eda71(0x1ab))
                ? $(steps[x])["find"](
                    ":input[type=\x22checkbox\x22][required]"
                  )[_0x5eda71(0x114)] < 0x1 &&
                  ((checkboxFilled = !![]),
                  resetInputErrorMessage(
                    $(this)[_0x5eda71(0x1ec)](_0x5eda71(0x174))
                  ))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0x5eda71(0x128)]({
                    input: $(this)["attr"]("name"),
                  }));
            })
        : $(steps[x])[_0x12fe22(0x12e)](
            ":input[type=\x22checkbox\x22]:checked"
          )[_0x12fe22(0x114)] >= checkCount
        ? $(steps[x])[_0x12fe22(0x12e)](_0x12fe22(0x19a))[_0x12fe22(0x114)] >
          0x0
          ? $(steps[x])
              ["find"](_0x12fe22(0x19a))
              [_0x12fe22(0x180)](function () {
                const _0x490485 = _0x12fe22;
                !$(this)["is"](_0x490485(0x1ab))
                  ? ((checkboxFilled = ![]),
                    unfilledArr["push"]({
                      input: $(this)["attr"](_0x490485(0x174)),
                    }))
                  : ((checkboxFilled = !![]),
                    $(steps[x])[_0x490485(0x12e)](_0x490485(0x1fa))[
                      _0x490485(0x114)
                    ] >=
                      $(steps[x])[_0x490485(0x12e)](_0x490485(0x19a))[
                        _0x490485(0x114)
                      ] &&
                      resetInputErrorMessage(
                        $(steps[x])
                          [_0x490485(0x12e)](_0x490485(0x176))
                          [_0x490485(0x1ec)](_0x490485(0x174))
                      ));
              })
          : ((checkboxFilled = !![]),
            resetInputErrorMessage(
              $(steps[x])
                [_0x12fe22(0x12e)](_0x12fe22(0x176))
                [_0x12fe22(0x1ec)](_0x12fe22(0x174))
            ))
        : ((checkboxFilled = ![]),
          $(steps[x])
            [_0x12fe22(0x12e)](":input[type=\x22checkbox\x22][required]")
            ["each"](function () {
              const _0x5afc07 = _0x12fe22;
              $(this)[_0x5afc07(0x19d)](_0x5afc07(0x1ab)) &&
                unfilledArr[_0x5afc07(0x128)]({
                  input: $(this)[_0x5afc07(0x1ec)](_0x5afc07(0x174)),
                });
            }),
          unfilledArr[_0x12fe22(0x128)]({
            input: $(steps[x])
              [_0x12fe22(0x12e)](":input[type=\x22checkbox\x22]")
              ["attr"]("name"),
          }))),
      $(steps[x])
        [_0x12fe22(0x12e)](_0x12fe22(0x1af))
        [_0x12fe22(0x180)](function (_0x46e2c3) {
          const _0x45b6c6 = _0x12fe22;
          var _0x1c726f = $(this)["attr"]("name");
          $("input:radio[name=\x22" + _0x1c726f + _0x45b6c6(0x150))["length"] ==
          0x0
            ? (!empReqRadio[_0x45b6c6(0x12e)](
                (_0x35fd98) => _0x35fd98[_0x45b6c6(0x1bc)] === _0x46e2c3
              ) && empReqRadio[_0x45b6c6(0x128)]({ input: _0x46e2c3 }),
              unfilledArr["push"]({
                input: $(this)[_0x45b6c6(0x1ec)](_0x45b6c6(0x174)),
              }))
            : (empReqRadio = empReqRadio["filter"](
                (_0x436253) => _0x436253[_0x45b6c6(0x1bc)] !== _0x46e2c3
              )),
            empReqRadio[_0x45b6c6(0x114)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0x12fe22(0x12e)](_0x12fe22(0x158))
        [_0x12fe22(0x180)](function (_0x3bae6e) {
          const _0x5e154f = _0x12fe22;
          let _0x13ad21 = $(this)[_0x5e154f(0x186)]()[_0x5e154f(0x114)],
            _0x5536bd = $(this)[_0x5e154f(0x1cf)](_0x5e154f(0x1ac))
              ? $(this)[_0x5e154f(0x1cf)](_0x5e154f(0x1ac))
              : 0x0;
          $(this)[_0x5e154f(0x186)]() !== "" && _0x13ad21 >= _0x5536bd
            ? (empReqInput = empReqInput[_0x5e154f(0x141)](
                (_0x510cd6) => _0x510cd6[_0x5e154f(0x1bc)] !== _0x3bae6e
              ))
            : (!empReqInput["find"](
                (_0x2fc6ae) => _0x2fc6ae[_0x5e154f(0x1bc)] === _0x3bae6e
              ) && empReqInput[_0x5e154f(0x128)]({ input: _0x3bae6e }),
              unfilledArr[_0x5e154f(0x128)]({
                input: $(this)["attr"](_0x5e154f(0x174)),
              })),
            empReqInput["length"] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x12fe22(0x12e)](_0x12fe22(0x1c2))
        [_0x12fe22(0x180)](function (_0x3c0981) {
          const _0x1c3ef9 = _0x12fe22;
          $(this)[_0x1c3ef9(0x186)]() !== ""
            ? (empReqDate = empReqDate[_0x1c3ef9(0x141)](
                (_0x582d7e) => _0x582d7e[_0x1c3ef9(0x1bc)] !== _0x3c0981
              ))
            : (!empReqDate[_0x1c3ef9(0x12e)](
                (_0x42a7f7) => _0x42a7f7[_0x1c3ef9(0x1bc)] === _0x3c0981
              ) && empReqDate[_0x1c3ef9(0x128)]({ input: _0x3c0981 }),
              unfilledArr[_0x1c3ef9(0x128)]({
                input: $(this)[_0x1c3ef9(0x1ec)](_0x1c3ef9(0x174)),
              })),
            empReqDate[_0x1c3ef9(0x114)] === 0x0
              ? (dateFilled = !![])
              : (dateFilled = ![]);
        }),
      $(steps[x])
        [_0x12fe22(0x12e)](_0x12fe22(0x1a4))
        [_0x12fe22(0x180)](function (_0x53decb) {
          const _0x99c6aa = _0x12fe22;
          if ($(this)["val"]() !== "") {
            let _0x3770e5 = $(this)[_0x99c6aa(0x186)]()["length"],
              _0x3172b8 = $(this)[_0x99c6aa(0x1cf)](_0x99c6aa(0x1ac))
                ? $(this)[_0x99c6aa(0x1cf)]("min-character")
                : 0x0;
            if ($(this)[_0x99c6aa(0x1cf)](_0x99c6aa(0x125))) {
              var _0x25edfe = phoneAutoFormat(
                $(this)[_0x99c6aa(0x1cf)](_0x99c6aa(0x125))
              );
              $(this)[_0x99c6aa(0x186)](_0x25edfe($(this)[_0x99c6aa(0x186)]()));
            }
            phoneValidation($(this)[_0x99c6aa(0x186)](), _0x3770e5, _0x3172b8)
              ? (empReqTel = empReqTel[_0x99c6aa(0x141)](
                  (_0x5bb533) => _0x5bb533[_0x99c6aa(0x1bc)] !== _0x53decb
                ))
              : empReqTel[_0x99c6aa(0x128)]({ input: _0x53decb });
          } else !empReqTel[_0x99c6aa(0x12e)]((_0x1a9869) => _0x1a9869["input"] === _0x53decb) && empReqTel[_0x99c6aa(0x128)]({ input: _0x53decb }), unfilledArr[_0x99c6aa(0x128)]({ input: $(this)["attr"](_0x99c6aa(0x174)) });
          empReqTel[_0x99c6aa(0x114)] === 0x0
            ? (telFilled = !![])
            : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x12fe22(0x12e)](_0x12fe22(0x14d))
        [_0x12fe22(0x180)](function (_0x491488) {
          const _0x4a4772 = _0x12fe22;
          $(this)[_0x4a4772(0x186)]() !== ""
            ? (empReqFile = empReqFile["filter"](
                (_0x18875b) => _0x18875b[_0x4a4772(0x1bc)] !== _0x491488
              ))
            : (!empReqFile[_0x4a4772(0x12e)](
                (_0x552455) => _0x552455[_0x4a4772(0x1bc)] === _0x491488
              ) && empReqFile["push"]({ input: _0x491488 }),
              unfilledArr[_0x4a4772(0x128)]({
                input: $(this)["attr"]("name"),
              })),
            empReqFile["length"] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x12fe22(0x12e)](_0x12fe22(0x157))
        ["each"](function (_0x7caa5e) {
          const _0x27ab19 = _0x12fe22;
          let _0x4343b7 = $(this)[_0x27ab19(0x186)]()["length"],
            _0x3e0bf3 = $(this)[_0x27ab19(0x1cf)](_0x27ab19(0x1ac))
              ? $(this)[_0x27ab19(0x1cf)]("min-character")
              : 0x0;
          $(this)[_0x27ab19(0x186)]() !== "" && _0x4343b7 >= _0x3e0bf3
            ? (empReqNum = empReqNum[_0x27ab19(0x141)](
                (_0x5c9c9d) => _0x5c9c9d[_0x27ab19(0x1bc)] !== _0x7caa5e
              ))
            : (!empReqNum[_0x27ab19(0x12e)](
                (_0x10cde2) => _0x10cde2[_0x27ab19(0x1bc)] === _0x7caa5e
              ) && empReqNum[_0x27ab19(0x128)]({ input: _0x7caa5e }),
              unfilledArr["push"]({
                input: $(this)[_0x27ab19(0x1ec)]("name"),
              })),
            empReqNum["length"] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x12fe22(0x12e)](_0x12fe22(0x115))
        [_0x12fe22(0x180)](function (_0x1f71e5) {
          const _0x5d0841 = _0x12fe22;
          let _0xd6aded = $(this)[_0x5d0841(0x186)]();
          _0xd6aded === "" && (_0xd6aded = null),
            _0xd6aded != null
              ? (empReqSelect = empReqSelect[_0x5d0841(0x141)](
                  (_0x4e4951) => _0x4e4951[_0x5d0841(0x1bc)] !== _0x1f71e5
                ))
              : (!empReqSelect[_0x5d0841(0x12e)](
                  (_0x54cb23) => _0x54cb23[_0x5d0841(0x1bc)] === _0x1f71e5
                ) && empReqSelect[_0x5d0841(0x128)]({ input: _0x1f71e5 }),
                unfilledArr["push"]({
                  input: $(this)[_0x5d0841(0x1ec)](_0x5d0841(0x174)),
                })),
            empReqSelect[_0x5d0841(0x114)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x12fe22(0x169))
        [_0x12fe22(0x180)](function (_0xeb161f) {
          const _0x13b215 = _0x12fe22;
          let _0x2382be = $(this)[_0x13b215(0x186)]()["length"],
            _0x2c2bfc = $(this)[_0x13b215(0x1cf)]("min-character")
              ? $(this)["data"]("min-character")
              : 0x0;
          $(this)[_0x13b215(0x186)]() !== "" && _0x2382be >= _0x2c2bfc
            ? (empReqTextarea = empReqTextarea[_0x13b215(0x141)](
                (_0x112cf4) => _0x112cf4[_0x13b215(0x1bc)] !== _0xeb161f
              ))
            : (!empReqTextarea["find"](
                (_0x2c109c) => _0x2c109c[_0x13b215(0x1bc)] === _0xeb161f
              ) && empReqTextarea[_0x13b215(0x128)]({ input: _0xeb161f }),
              unfilledArr[_0x13b215(0x128)]({
                input: $(this)["attr"]("name"),
              })),
            empReqTextarea["length"] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x12fe22(0x130))
        [_0x12fe22(0x180)](function () {
          const _0x32b2e0 = _0x12fe22;
          $(this)["val"]() !== ""
            ? validateEmail(
                $(this)["val"](),
                $(this)[_0x32b2e0(0x1cf)](_0x32b2e0(0x198)),
                $(this)[_0x32b2e0(0x1ec)](_0x32b2e0(0x174))
              )
            : ((emailFilled = ![]),
              unfilledArr[_0x32b2e0(0x128)]({
                input: $(this)["attr"](_0x32b2e0(0x174)),
              }));
        });
  else {
    if ($(steps[x])["data"](_0x12fe22(0x1a8)))
      (answer = $(steps[x])
        ["find"](_0x12fe22(0x12b))
        [_0x12fe22(0x1cf)](_0x12fe22(0x1d6))),
        (selections = selections[_0x12fe22(0x141)](
          (_0x3d2108) => _0x3d2108[_0x12fe22(0x1ce)] !== x
        )),
        selections[_0x12fe22(0x128)]({ step: x, selected: answer });
    else
      $(steps[x])["find"](_0x12fe22(0x16e))[_0x12fe22(0x1cf)]("card") &&
        ((answer = $(steps[x])
          [_0x12fe22(0x12e)]("[data-answer]:visible")
          [_0x12fe22(0x1cf)](_0x12fe22(0x1d6))),
        (selections = selections[_0x12fe22(0x141)](
          (_0x5ef6d1) => _0x5ef6d1[_0x12fe22(0x1ce)] !== x
        )),
        selections[_0x12fe22(0x128)]({ step: x, selected: answer }));
    $(steps[x])
      [_0x12fe22(0x12e)]("[data-answer]:visible")
      [_0x12fe22(0x12e)](_0x12fe22(0x167))
      ["is"](_0x12fe22(0x137)) &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])[_0x12fe22(0x12e)](_0x12fe22(0x176))[_0x12fe22(0x114)]
        ? $(steps[x])
            [_0x12fe22(0x12e)](_0x12fe22(0x176))
            [_0x12fe22(0x180)](function () {
              const _0x54c690 = _0x12fe22;
              $(this)["is"](_0x54c690(0x1ab))
                ? $(steps[x])[_0x54c690(0x12e)](_0x54c690(0x13b))[
                    _0x54c690(0x114)
                  ] < 0x1 &&
                  ((skipTo = undefined),
                  $(this)
                    [_0x54c690(0x145)](_0x54c690(0x1a3))
                    [_0x54c690(0x1cf)]("skip-to") &&
                    (skipTo = $(this)
                      [_0x54c690(0x145)](_0x54c690(0x1a3))
                      [_0x54c690(0x1cf)](_0x54c690(0x1cb))),
                  $(this)
                    [_0x54c690(0x145)](_0x54c690(0x12b))
                    ["attr"](_0x54c690(0x143)) &&
                    ((answer = $(this)
                      [_0x54c690(0x145)](_0x54c690(0x12b))
                      [_0x54c690(0x1ec)](_0x54c690(0x143))),
                    (selections = selections[_0x54c690(0x141)](
                      (_0x388acf) => _0x388acf[_0x54c690(0x1ce)] !== x
                    )),
                    selections["push"]({ step: x, selected: answer }),
                    skipTo &&
                      (selections[_0x54c690(0x128)]({
                        step: skipTo - 0x2,
                        selected: answer,
                      }),
                      (objIndex = selections[_0x54c690(0x153)](
                        (_0xc122c3) => _0xc122c3[_0x54c690(0x1ce)] === x
                      )),
                      (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                      (selections[objIndex][_0x54c690(0x129)] = x))),
                  (checkboxFilled = !![]),
                  $(steps[x])[_0x54c690(0x12e)](_0x54c690(0x1fa))["length"] >=
                    $(steps[x])[_0x54c690(0x12e)](
                      ":input[type=\x22checkbox\x22][required]"
                    )["length"] &&
                    resetInputErrorMessage(
                      $(steps[x])
                        [_0x54c690(0x12e)](_0x54c690(0x176))
                        ["attr"](_0x54c690(0x174))
                    ))
                : ((checkboxFilled = ![]),
                  unfilledArr["push"]({
                    input: $(this)[_0x54c690(0x1ec)](_0x54c690(0x174)),
                  }));
            })
        : $(steps[x])
            ["find"](_0x12fe22(0x16e))
            [_0x12fe22(0x12e)](":input[type=\x22checkbox\x22]:checked")[
            _0x12fe22(0x114)
          ] >= checkCount
        ? ($(steps[x])
            [_0x12fe22(0x12e)](_0x12fe22(0x16e))
            [_0x12fe22(0x12e)](":input[type=\x22checkbox\x22]")
            [_0x12fe22(0x145)]("[data-go-to]")
            [_0x12fe22(0x1ec)](_0x12fe22(0x143)) &&
            ((skipTo = undefined),
            $(steps[x])
              [_0x12fe22(0x12e)](_0x12fe22(0x16e))
              ["find"](_0x12fe22(0x176))
              [_0x12fe22(0x145)]("[data-skip-to]")
              ["attr"]("data-skip-to") &&
              (skipTo = $(steps[x])
                [_0x12fe22(0x12e)]("[data-answer]:visible")
                [_0x12fe22(0x12e)](_0x12fe22(0x1fb))
                ["parents"](_0x12fe22(0x1a3))
                ["attr"]("data-skip-to")),
            (answer = $(steps[x])
              [_0x12fe22(0x12e)](_0x12fe22(0x16e))
              ["find"](_0x12fe22(0x176))
              [_0x12fe22(0x145)](_0x12fe22(0x12b))
              ["attr"](_0x12fe22(0x143))),
            (selections = selections["filter"](
              (_0x5e18bb) => _0x5e18bb[_0x12fe22(0x1ce)] !== x
            )),
            selections["push"]({ step: x, selected: answer }),
            skipTo &&
              (selections["push"]({ step: skipTo - 0x2, selected: answer }),
              (objIndex = selections[_0x12fe22(0x153)](
                (_0x335cab) => _0x335cab[_0x12fe22(0x1ce)] === x
              )),
              (selections[objIndex][_0x12fe22(0x15a)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x12fe22(0x129)] = x))),
          (selections = selections["filter"](
            (_0x1a84b3) => _0x1a84b3[_0x12fe22(0x1ce)] !== x
          )),
          selections[_0x12fe22(0x128)]({ step: x, selected: answer }),
          (checkboxFilled = !![]),
          $(steps[x])["find"](_0x12fe22(0x1fa))["length"] >=
            $(steps[x])["find"](_0x12fe22(0x19a))[_0x12fe22(0x114)] &&
            resetInputErrorMessage(
              $(steps[x])
                [_0x12fe22(0x12e)](_0x12fe22(0x176))
                [_0x12fe22(0x1ec)]("name")
            ))
        : ((checkboxFilled = ![]),
          $(steps[x])
            ["find"](_0x12fe22(0x19a))
            ["each"](function () {
              const _0x54adec = _0x12fe22;
              $(this)[_0x54adec(0x19d)](_0x54adec(0x1ab)) &&
                unfilledArr["push"]({
                  input: $(this)[_0x54adec(0x1ec)](_0x54adec(0x174)),
                });
            }))),
      $(steps[x])
        ["find"](_0x12fe22(0x16e))
        [_0x12fe22(0x12e)](_0x12fe22(0x1af))
        [_0x12fe22(0x180)](function (_0x1a0ec9) {
          const _0x29b828 = _0x12fe22;
          var _0x1ac269 = $(this)[_0x29b828(0x1ec)](_0x29b828(0x174));
          $("input:radio[name=\x22" + _0x1ac269 + _0x29b828(0x150))[
            _0x29b828(0x114)
          ] == 0x0
            ? (!empReqRadio[_0x29b828(0x12e)](
                (_0x577fb6) => _0x577fb6["input"] === _0x1a0ec9
              ) && empReqRadio["push"]({ input: _0x1a0ec9 }),
              unfilledArr[_0x29b828(0x128)]({
                input: $(this)[_0x29b828(0x1ec)](_0x29b828(0x174)),
              }))
            : (empReqRadio = empReqRadio[_0x29b828(0x141)](
                (_0x327264) => _0x327264[_0x29b828(0x1bc)] !== _0x1a0ec9
              )),
            empReqRadio["length"] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0x12fe22(0x12e)]("[data-answer]:visible")
        [_0x12fe22(0x12e)](":input[type=\x22text\x22][required]")
        [_0x12fe22(0x180)](function (_0x5dc9d3) {
          const _0x50e25c = _0x12fe22;
          let _0x426921 = $(this)[_0x50e25c(0x186)]()["length"],
            _0x42689f = $(this)[_0x50e25c(0x1cf)]("min-character")
              ? $(this)[_0x50e25c(0x1cf)](_0x50e25c(0x1ac))
              : 0x0;
          $(this)[_0x50e25c(0x186)]() !== "" && _0x426921 >= _0x42689f
            ? (empReqInput = empReqInput[_0x50e25c(0x141)](
                (_0x577764) => _0x577764[_0x50e25c(0x1bc)] !== _0x5dc9d3
              ))
            : (!empReqInput["find"](
                (_0x1ae2e4) => _0x1ae2e4[_0x50e25c(0x1bc)] === _0x5dc9d3
              ) && empReqInput[_0x50e25c(0x128)]({ input: _0x5dc9d3 }),
              unfilledArr[_0x50e25c(0x128)]({
                input: $(this)[_0x50e25c(0x1ec)](_0x50e25c(0x174)),
              })),
            empReqInput[_0x50e25c(0x114)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x12fe22(0x12e)](_0x12fe22(0x16e))
        [_0x12fe22(0x12e)](_0x12fe22(0x122))
        [_0x12fe22(0x180)](function (_0x471a71) {
          const _0x42ad7a = _0x12fe22;
          (skipTo = undefined),
            $(this)
              [_0x42ad7a(0x145)](_0x42ad7a(0x1a3))
              [_0x42ad7a(0x1cf)]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0x42ad7a(0x145)]("[data-skip-to]")
                [_0x42ad7a(0x1cf)](_0x42ad7a(0x1cb))),
            $(this)[_0x42ad7a(0x145)](_0x42ad7a(0x12b))["attr"]("data-go-to") &&
              ((answer = $(this)
                [_0x42ad7a(0x145)](_0x42ad7a(0x12b))
                [_0x42ad7a(0x1ec)](_0x42ad7a(0x143))),
              (selections = selections[_0x42ad7a(0x141)](
                (_0xc96ecd) => _0xc96ecd[_0x42ad7a(0x1ce)] !== x
              )),
              selections[_0x42ad7a(0x128)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x42ad7a(0x128)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x42ad7a(0x153)](
                  (_0x2743c8) => _0x2743c8[_0x42ad7a(0x1ce)] === x
                )),
                (selections[objIndex][_0x42ad7a(0x15a)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        ["find"]("[data-answer]:visible")
        ["find"](_0x12fe22(0x1c2))
        [_0x12fe22(0x180)](function (_0x101451) {
          const _0x6a1689 = _0x12fe22;
          $(this)[_0x6a1689(0x186)]() !== ""
            ? (empReqDate = empReqDate[_0x6a1689(0x141)](
                (_0x1e5f32) => _0x1e5f32["input"] !== _0x101451
              ))
            : (!empReqDate[_0x6a1689(0x12e)](
                (_0x3f7c9c) => _0x3f7c9c[_0x6a1689(0x1bc)] === _0x101451
              ) && empReqDate[_0x6a1689(0x128)]({ input: _0x101451 }),
              unfilledArr[_0x6a1689(0x128)]({
                input: $(this)[_0x6a1689(0x1ec)](_0x6a1689(0x174)),
              })),
            empReqDate["length"] === 0x0
              ? (dateFilled = !![])
              : (dateFilled = ![]);
        }),
      $(steps[x])
        [_0x12fe22(0x12e)](_0x12fe22(0x16e))
        [_0x12fe22(0x12e)](_0x12fe22(0x1df))
        [_0x12fe22(0x180)](function (_0x42fcd5) {
          const _0x418278 = _0x12fe22;
          (skipTo = undefined),
            $(this)
              [_0x418278(0x145)]("[data-skip-to]")
              [_0x418278(0x1cf)](_0x418278(0x1cb)) !== "" &&
              (skipTo = $(this)
                [_0x418278(0x145)](_0x418278(0x1a3))
                [_0x418278(0x1cf)]("skip-to")),
            $(this)
              [_0x418278(0x145)]("[data-go-to]")
              ["attr"](_0x418278(0x143)) &&
              ((answer = $(this)
                ["parents"](_0x418278(0x12b))
                ["attr"]("data-go-to")),
              (selections = selections["filter"](
                (_0x18a496) => _0x18a496["step"] !== x
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x418278(0x128)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x216b16) => _0x216b16[_0x418278(0x1ce)] === x
                )),
                (selections[objIndex][_0x418278(0x15a)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x418278(0x129)] = x)));
        }),
      $(steps[x])
        ["find"](_0x12fe22(0x16e))
        [_0x12fe22(0x12e)](_0x12fe22(0x157))
        [_0x12fe22(0x180)](function (_0x5714c9) {
          const _0x1da06b = _0x12fe22;
          let _0x1fc8c2 = $(this)[_0x1da06b(0x186)]()[_0x1da06b(0x114)],
            _0x344170 = $(this)[_0x1da06b(0x1cf)](_0x1da06b(0x1ac))
              ? $(this)["data"](_0x1da06b(0x1ac))
              : 0x0;
          $(this)["val"]() !== "" && _0x1fc8c2 >= _0x344170
            ? (empReqNum = empReqNum[_0x1da06b(0x141)](
                (_0x4d783a) => _0x4d783a[_0x1da06b(0x1bc)] !== _0x5714c9
              ))
            : (!empReqNum["find"](
                (_0x11d27f) => _0x11d27f["input"] === _0x5714c9
              ) && empReqNum["push"]({ input: _0x5714c9 }),
              unfilledArr[_0x1da06b(0x128)]({
                input: $(this)[_0x1da06b(0x1ec)]("name"),
              })),
            empReqNum["length"] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x12fe22(0x16e))
        ["find"](":input[type=\x22number\x22]")
        [_0x12fe22(0x180)](function (_0x51eef5) {
          const _0x45c839 = _0x12fe22;
          (skipTo = undefined),
            $(this)
              ["parents"]("[data-skip-to]")
              [_0x45c839(0x1cf)](_0x45c839(0x1cb)) !== "" &&
              (skipTo = $(this)
                [_0x45c839(0x145)](_0x45c839(0x1a3))
                ["data"](_0x45c839(0x1cb))),
            $(this)["parents"](_0x45c839(0x12b))["attr"]("data-go-to") &&
              ((answer = $(this)
                [_0x45c839(0x145)](_0x45c839(0x12b))
                ["attr"](_0x45c839(0x143))),
              (selections = selections["filter"](
                (_0x30eed4) => _0x30eed4[_0x45c839(0x1ce)] !== x
              )),
              selections[_0x45c839(0x128)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x45c839(0x128)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x39d255) => _0x39d255["step"] === x
                )),
                (selections[objIndex][_0x45c839(0x15a)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x45c839(0x129)] = x)));
        }),
      $(steps[x])
        [_0x12fe22(0x12e)](_0x12fe22(0x16e))
        [_0x12fe22(0x12e)](":input[type=\x22tel\x22][required]")
        [_0x12fe22(0x180)](function (_0x5662d9) {
          const _0x4f0f85 = _0x12fe22;
          if ($(this)[_0x4f0f85(0x186)]() !== "") {
            let _0x3f26be = $(this)[_0x4f0f85(0x186)]()[_0x4f0f85(0x114)],
              _0x2457de = $(this)[_0x4f0f85(0x1cf)](_0x4f0f85(0x1ac))
                ? $(this)[_0x4f0f85(0x1cf)](_0x4f0f85(0x1ac))
                : 0x0;
            if ($(this)[_0x4f0f85(0x1cf)](_0x4f0f85(0x125))) {
              var _0x234d53 = phoneAutoFormat(
                $(this)[_0x4f0f85(0x1cf)]("phone-autoformat")
              );
              $(this)[_0x4f0f85(0x186)](_0x234d53($(this)[_0x4f0f85(0x186)]()));
            }
            phoneValidation($(this)["val"](), _0x3f26be, _0x2457de)
              ? (empReqTel = empReqTel[_0x4f0f85(0x141)](
                  (_0xbdafa2) => _0xbdafa2[_0x4f0f85(0x1bc)] !== _0x5662d9
                ))
              : empReqTel[_0x4f0f85(0x128)]({ input: _0x5662d9 });
          } else !empReqTel[_0x4f0f85(0x12e)]((_0x15c75a) => _0x15c75a[_0x4f0f85(0x1bc)] === _0x5662d9) && empReqTel[_0x4f0f85(0x128)]({ input: _0x5662d9 }), unfilledArr[_0x4f0f85(0x128)]({ input: $(this)["attr"](_0x4f0f85(0x174)) });
          empReqTel[_0x4f0f85(0x114)] === 0x0
            ? (telFilled = !![])
            : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x12fe22(0x12e)](_0x12fe22(0x16e))
        [_0x12fe22(0x12e)](_0x12fe22(0x1b0))
        ["each"](function (_0x24ca42) {
          const _0x2b33a3 = _0x12fe22;
          (skipTo = undefined),
            $(this)
              [_0x2b33a3(0x145)](_0x2b33a3(0x1a3))
              ["data"](_0x2b33a3(0x1cb)) !== "" &&
              (skipTo = $(this)
                [_0x2b33a3(0x145)](_0x2b33a3(0x1a3))
                ["data"](_0x2b33a3(0x1cb))),
            $(this)
              ["parents"](_0x2b33a3(0x12b))
              [_0x2b33a3(0x1ec)](_0x2b33a3(0x143)) &&
              ((answer = $(this)
                [_0x2b33a3(0x145)](_0x2b33a3(0x12b))
                ["attr"]("data-go-to")),
              (selections = selections[_0x2b33a3(0x141)](
                (_0x3a0105) => _0x3a0105[_0x2b33a3(0x1ce)] !== x
              )),
              selections[_0x2b33a3(0x128)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x2b33a3(0x128)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x28aa69) => _0x28aa69["step"] === x
                )),
                (selections[objIndex][_0x2b33a3(0x15a)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x2b33a3(0x129)] = x)));
        }),
      $(steps[x])
        ["find"](_0x12fe22(0x16e))
        [_0x12fe22(0x12e)](_0x12fe22(0x14d))
        ["each"](function (_0x954a2b) {
          const _0x2d84ca = _0x12fe22;
          $(this)[_0x2d84ca(0x186)]() !== ""
            ? (empReqFile = empReqFile[_0x2d84ca(0x141)](
                (_0xd02b75) => _0xd02b75[_0x2d84ca(0x1bc)] !== _0x954a2b
              ))
            : (!empReqFile[_0x2d84ca(0x12e)](
                (_0x4dfb16) => _0x4dfb16[_0x2d84ca(0x1bc)] === _0x954a2b
              ) && empReqFile[_0x2d84ca(0x128)]({ input: _0x954a2b }),
              unfilledArr[_0x2d84ca(0x128)]({
                input: $(this)[_0x2d84ca(0x1ec)](_0x2d84ca(0x174)),
              })),
            empReqFile[_0x2d84ca(0x114)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x12fe22(0x12e)](_0x12fe22(0x16e))
        ["find"](_0x12fe22(0x1bb))
        [_0x12fe22(0x180)](function (_0x1dbc5f) {
          const _0x188089 = _0x12fe22;
          (skipTo = undefined),
            $(this)
              [_0x188089(0x145)]("[data-skip-to]")
              [_0x188089(0x1cf)](_0x188089(0x1cb)) !== "" &&
              (skipTo = $(this)
                [_0x188089(0x145)](_0x188089(0x1a3))
                [_0x188089(0x1cf)](_0x188089(0x1cb))),
            $(this)
              [_0x188089(0x145)](_0x188089(0x12b))
              [_0x188089(0x1ec)](_0x188089(0x143)) &&
              ((answer = $(this)
                ["parents"](_0x188089(0x12b))
                ["attr"](_0x188089(0x143))),
              (selections = selections[_0x188089(0x141)](
                (_0x2c5640) => _0x2c5640[_0x188089(0x1ce)] !== x
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x188089(0x128)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x188089(0x153)](
                  (_0x331cb6) => _0x331cb6[_0x188089(0x1ce)] === x
                )),
                (selections[objIndex][_0x188089(0x15a)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x188089(0x129)] = x)));
        }),
      $(steps[x])
        [_0x12fe22(0x12e)](_0x12fe22(0x16e))
        [_0x12fe22(0x12e)](_0x12fe22(0x115))
        [_0x12fe22(0x180)](function (_0x14f552) {
          const _0x5b2019 = _0x12fe22;
          $(this)[_0x5b2019(0x186)]() !== ""
            ? (empReqSelect = empReqSelect["filter"](
                (_0x466bb1) => _0x466bb1[_0x5b2019(0x1bc)] !== _0x14f552
              ))
            : (!empReqSelect[_0x5b2019(0x12e)](
                (_0x4a4c99) => _0x4a4c99[_0x5b2019(0x1bc)] === _0x14f552
              ) && empReqSelect[_0x5b2019(0x128)]({ input: _0x14f552 }),
              unfilledArr[_0x5b2019(0x128)]({
                input: $(this)[_0x5b2019(0x1ec)](_0x5b2019(0x174)),
              })),
            empReqSelect[_0x5b2019(0x114)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x12fe22(0x16e))
        [_0x12fe22(0x12e)](_0x12fe22(0x132))
        [_0x12fe22(0x180)](function (_0x3ea5bd) {
          const _0x51dfb2 = _0x12fe22;
          (skipTo = undefined),
            $(this)
              [_0x51dfb2(0x145)](_0x51dfb2(0x1a3))
              [_0x51dfb2(0x1cf)](_0x51dfb2(0x1cb)) !== "" &&
              (skipTo = $(this)
                [_0x51dfb2(0x145)](_0x51dfb2(0x1a3))
                [_0x51dfb2(0x1cf)](_0x51dfb2(0x1cb))),
            $(this)
              [_0x51dfb2(0x145)](_0x51dfb2(0x12b))
              [_0x51dfb2(0x1ec)](_0x51dfb2(0x143)) &&
              ((answer = $(this)
                [_0x51dfb2(0x145)]("[data-go-to]")
                [_0x51dfb2(0x1ec)](_0x51dfb2(0x143))),
              (selections = selections["filter"](
                (_0x5a1317) => _0x5a1317[_0x51dfb2(0x1ce)] !== x
              )),
              selections[_0x51dfb2(0x128)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x51dfb2(0x128)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x51dfb2(0x153)](
                  (_0x527334) => _0x527334[_0x51dfb2(0x1ce)] === x
                )),
                (selections[objIndex][_0x51dfb2(0x15a)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x51dfb2(0x129)] = x)));
        }),
      $(steps[x])
        ["find"](_0x12fe22(0x16e))
        [_0x12fe22(0x12e)](_0x12fe22(0x169))
        [_0x12fe22(0x180)](function (_0x45e87a) {
          const _0x5bc989 = _0x12fe22;
          let _0x2eb7d9 = $(this)[_0x5bc989(0x186)]()[_0x5bc989(0x114)],
            _0x3fc034 = $(this)[_0x5bc989(0x1cf)]("min-character")
              ? $(this)[_0x5bc989(0x1cf)](_0x5bc989(0x1ac))
              : 0x0;
          $(this)["val"]() !== "" && _0x2eb7d9 >= _0x3fc034
            ? (empReqTextarea = empReqTextarea[_0x5bc989(0x141)](
                (_0x4983f3) => _0x4983f3[_0x5bc989(0x1bc)] !== _0x45e87a
              ))
            : (!empReqTextarea[_0x5bc989(0x12e)](
                (_0x210123) => _0x210123[_0x5bc989(0x1bc)] === _0x45e87a
              ) && empReqTextarea["push"]({ input: _0x45e87a }),
              unfilledArr["push"]({
                input: $(this)[_0x5bc989(0x1ec)](_0x5bc989(0x174)),
              })),
            empReqTextarea[_0x5bc989(0x114)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x12fe22(0x12e)]("[data-answer]:visible")
        ["find"](_0x12fe22(0x148))
        [_0x12fe22(0x180)](function (_0x22b90d) {
          const _0x3f5e9a = _0x12fe22;
          (skipTo = undefined),
            $(this)["parents"](_0x3f5e9a(0x1a3))["data"](_0x3f5e9a(0x1cb)) !==
              "" &&
              (skipTo = $(this)
                [_0x3f5e9a(0x145)](_0x3f5e9a(0x1a3))
                [_0x3f5e9a(0x1cf)]("skip-to")),
            $(this)
              ["parents"](_0x3f5e9a(0x12b))
              [_0x3f5e9a(0x1ec)](_0x3f5e9a(0x143)) &&
              ((answer = $(this)
                [_0x3f5e9a(0x145)]("[data-go-to]")
                [_0x3f5e9a(0x1ec)](_0x3f5e9a(0x143))),
              (selections = selections[_0x3f5e9a(0x141)](
                (_0x34b142) => _0x34b142[_0x3f5e9a(0x1ce)] !== x
              )),
              selections[_0x3f5e9a(0x128)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0x3f5e9a(0x153)](
                  (_0x497a2e) => _0x497a2e[_0x3f5e9a(0x1ce)] === x
                )),
                (selections[objIndex][_0x3f5e9a(0x15a)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x12fe22(0x12e)](_0x12fe22(0x16e))
        [_0x12fe22(0x12e)](_0x12fe22(0x130))
        [_0x12fe22(0x180)](function (_0x2642b1) {
          const _0x2431a3 = _0x12fe22;
          $(this)[_0x2431a3(0x186)]() !== ""
            ? validateEmail(
                $(this)["val"](),
                $(this)[_0x2431a3(0x1cf)]("block-domain"),
                $(this)["attr"](_0x2431a3(0x174))
              )
            : ((emailFilled = ![]),
              unfilledArr[_0x2431a3(0x128)]({
                input: $(this)[_0x2431a3(0x1ec)](_0x2431a3(0x174)),
              }));
        }),
      $(steps[x])
        [_0x12fe22(0x12e)](_0x12fe22(0x16e))
        [_0x12fe22(0x12e)](":input[type=\x22email\x22]")
        [_0x12fe22(0x180)](function (_0x16b26e) {
          const _0x62848c = _0x12fe22;
          (skipTo = undefined),
            $(this)
              [_0x62848c(0x145)](_0x62848c(0x1a3))
              [_0x62848c(0x1cf)](_0x62848c(0x1cb)) !== "" &&
              (skipTo = $(this)
                [_0x62848c(0x145)](_0x62848c(0x1a3))
                ["data"](_0x62848c(0x1cb))),
            $(this)
              [_0x62848c(0x145)]("[data-go-to]")
              [_0x62848c(0x1ec)](_0x62848c(0x143)) &&
              ((answer = $(this)
                ["parents"]("[data-go-to]")
                ["attr"](_0x62848c(0x143))),
              (selections = selections[_0x62848c(0x141)](
                (_0xf9aa5d) => _0xf9aa5d[_0x62848c(0x1ce)] !== x
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x62848c(0x128)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x36f27d) => _0x36f27d[_0x62848c(0x1ce)] === x
                )),
                (selections[objIndex][_0x62848c(0x15a)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x62848c(0x129)] = x)));
        });
  }
  $(steps[x])["find"](_0x12fe22(0x1c7))["is"](_0x12fe22(0x1ab)) &&
    ((selArr = []),
    $(steps)
      ["find"](_0x12fe22(0x18d))
      [_0x12fe22(0x180)](function (_0x266c24, _0x3c807d) {
        const _0x5517c7 = _0x12fe22;
        selArr[_0x5517c7(0x128)]({
          selected: $(this)[_0x5517c7(0x1cf)]("selected"),
        });
      }),
    (selString = []),
    selArr["forEach"]((_0x2df7e2) =>
      selString[_0x12fe22(0x128)](_0x2df7e2[_0x12fe22(0x1e2)])
    ),
    (selections = selections[_0x12fe22(0x141)](
      (_0x16d748) => _0x16d748[_0x12fe22(0x1ce)] !== x
    )),
    $(steps[x])
      [_0x12fe22(0x12e)](_0x12fe22(0x16e))
      [_0x12fe22(0x12e)](_0x12fe22(0x1c3))
      [_0x12fe22(0x180)](function () {
        const _0xe7e8ad = _0x12fe22;
        skipTo = undefined;
        if (
          $(this)
            [_0xe7e8ad(0x145)](_0xe7e8ad(0x1a3))
            [_0xe7e8ad(0x1cf)](_0xe7e8ad(0x1cb))
        )
          skipTo = $(this)
            ["parents"](_0xe7e8ad(0x1a3))
            [_0xe7e8ad(0x1cf)](_0xe7e8ad(0x1cb));
        else
          $(this)["data"]("skip-to") &&
            (skipTo = $(this)[_0xe7e8ad(0x1cf)](_0xe7e8ad(0x1cb)));
        if ($(this)[_0xe7e8ad(0x1cf)](_0xe7e8ad(0x1d6)))
          (answer = $(this)[_0xe7e8ad(0x1ec)](_0xe7e8ad(0x143))),
            console[_0xe7e8ad(0x140)](answer, selections),
            selections[_0xe7e8ad(0x128)]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0xe7e8ad(0x128)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0xe7e8ad(0x153)](
                (_0x506e27) => _0x506e27[_0xe7e8ad(0x1ce)] === x
              )),
              (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0xe7e8ad(0x129)] = x));
        else
          $(this)
            [_0xe7e8ad(0x145)]("[data-go-to]")
            [_0xe7e8ad(0x1cf)](_0xe7e8ad(0x1d6)) &&
            ((answer = $(this)
              [_0xe7e8ad(0x145)](_0xe7e8ad(0x12b))
              [_0xe7e8ad(0x1cf)](_0xe7e8ad(0x1d6))),
            selections[_0xe7e8ad(0x128)]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0xe7e8ad(0x128)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0xe7e8ad(0x153)](
                (_0x4bf7f2) => _0x4bf7f2["step"] === x
              )),
              (selections[objIndex][_0xe7e8ad(0x15a)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0xe7e8ad(0x129)] = x)));
      }),
    console[_0x12fe22(0x140)](),
    logicExtra
      ? ($(steps[x])
          ["find"](_0x12fe22(0x16e))
          [_0x12fe22(0x12e)]("[data-radio-skip]:visible")
          ["data"](_0x12fe22(0x1f5)) === !![] ||
          $(steps[x])
            [_0x12fe22(0x12e)]("[data-answer][data-radio-skip]:visible")
            [_0x12fe22(0x1cf)](_0x12fe22(0x1f5)) === !![]) &&
        skip &&
        selections["filter"]((_0x495a00) => _0x495a00[_0x12fe22(0x1ce)] === x)[
          _0x12fe22(0x114)
        ] > 0x0 &&
        textareaLength === 0x0 &&
        textInputLength === 0x0 &&
        emailInputLength === 0x0 &&
        checkboxInputLength === 0x0 &&
        setTimeout(function () {
          (next = !![]), nextStep(), selectionQuiz();
        }, $(steps[x])
          [_0x12fe22(0x12e)](_0x12fe22(0x14a))
          [_0x12fe22(0x1cf)](_0x12fe22(0x1e7)))
      : $(steps[x])
          [_0x12fe22(0x12e)]("[data-radio-skip]:visible")
          [_0x12fe22(0x1cf)](_0x12fe22(0x1f5)) === !![] &&
        skip &&
        textareaLength === 0x0 &&
        textInputLength === 0x0 &&
        emailInputLength === 0x0 &&
        checkboxInputLength === 0x0 &&
        setTimeout(function () {
          (next = !![]), nextStep(), selectionQuiz();
        }, $(steps[x])
          [_0x12fe22(0x12e)](_0x12fe22(0x14a))
          [_0x12fe22(0x1cf)](_0x12fe22(0x1e7)))),
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
  const _0x5c96b6 = _0x46ee11;
  $(_0x5c96b6(0x151))["hide"](),
    unfilledArr[_0x5c96b6(0x114)] > 0x0 &&
      unfilledArr[_0x5c96b6(0x1b6)](function (_0x228fb7) {
        const _0x2c85db = _0x5c96b6;
        $(_0x2c85db(0x163) + _0x228fb7["input"] + "\x22]")
          [_0x2c85db(0x194)]("[data-text=\x22error-message\x22]")
          ["fadeIn"](),
          $("input[name=\x22" + _0x228fb7[_0x2c85db(0x1bc)] + "\x22]")
            [_0x2c85db(0x145)]()
            [_0x2c85db(0x19f)](_0x2c85db(0x151))
            [_0x2c85db(0x1c1)](),
          $(_0x2c85db(0x17b) + _0x228fb7[_0x2c85db(0x1bc)] + "\x22]")
            ["siblings"]("[data-text=\x22error-message\x22]")
            [_0x2c85db(0x1c1)](),
          $("select[name=\x22" + _0x228fb7[_0x2c85db(0x1bc)] + "\x22]")
            [_0x2c85db(0x194)](_0x2c85db(0x151))
            [_0x2c85db(0x1c1)]();
      });
}
function resetInputErrorMessage(_0x407a33) {
  const _0x1584d2 = _0x46ee11;
  $("input[name=\x22" + _0x407a33 + "\x22]")
    ["siblings"](_0x1584d2(0x151))
    [_0x1584d2(0x1c0)](),
    $(_0x1584d2(0x163) + _0x407a33 + "\x22]")
      [_0x1584d2(0x145)]()
      [_0x1584d2(0x19f)](_0x1584d2(0x151))
      [_0x1584d2(0x1c0)](),
    $(_0x1584d2(0x17b) + _0x407a33 + "\x22]")
      [_0x1584d2(0x194)](_0x1584d2(0x151))
      [_0x1584d2(0x1c0)](),
    $("select[name=\x22" + _0x407a33 + "\x22]")
      [_0x1584d2(0x194)](_0x1584d2(0x151))
      ["hide"]();
}
function increaseCurstep() {
  const _0x22a685 = _0x46ee11;
  countCard
    ? ((curStep = curStep + 0x1),
      $(_0x22a685(0x10c))["text"](steps[_0x22a685(0x114)]))
    : $(steps[x])[_0x22a685(0x1cf)](_0x22a685(0x1a8))
    ? (curStep = curStep + 0x0)
    : (curStep = curStep + 0x1),
    $("[data-text=\x22current-step\x22]")[_0x22a685(0x119)](curStep);
}
function decreaseCurstep() {
  const _0x5c2b4f = _0x46ee11;
  countCard
    ? ((curStep = curStep - 0x1),
      $(_0x5c2b4f(0x10c))[_0x5c2b4f(0x119)](steps[_0x5c2b4f(0x114)]))
    : $(steps[x])[_0x5c2b4f(0x1cf)](_0x5c2b4f(0x1a8))
    ? (curStep = curStep - 0x0)
    : (curStep = curStep - 0x1),
    $(_0x5c2b4f(0x13e))[_0x5c2b4f(0x119)](curStep);
}
function nextStep() {
  const _0xd4f790 = _0x46ee11;
  customError
    ? ($(_0xd4f790(0x151))[_0xd4f790(0x1c0)](),
      fill
        ? (x++,
          increaseCurstep(),
          (progress = x),
          x <= steps[_0xd4f790(0x114)] - 0x1 &&
            (updateStep(), memory && saveFilledInput()))
        : displayErrorMessage())
    : (x++,
      increaseCurstep(),
      x > progress && (progress = x),
      x <= steps[_0xd4f790(0x114)] - 0x1 &&
        (updateStep(), memory && saveFilledInput()));
}
function backStep() {
  const _0x159d02 = _0x46ee11;
  customError && $(_0x159d02(0x151))[_0x159d02(0x1c0)](),
    decreaseCurstep(),
    x > 0x0 &&
      ($(progressbar[x])[_0x159d02(0x1dc)](_0x159d02(0x1a5)),
      selections[_0x159d02(0x141)](
        (_0xd067ea) => _0xd067ea[_0x159d02(0x15a)] === x
      )["length"] > 0x0
        ? (x = parseInt(
            getSafe(
              () =>
                selections[_0x159d02(0x141)](
                  (_0x8fdb7b) => _0x8fdb7b[_0x159d02(0x15a)] === x
                )[0x0]["backTo"]
            )
          ))
        : x--,
      updateStep()),
    ($(steps[x])
      ["find"]("[data-radio-skip]:visible")
      [_0x159d02(0x1cf)](_0x159d02(0x1f5)) === !![] ||
      $(steps[x])
        [_0x159d02(0x12e)](_0x159d02(0x16e))
        [_0x159d02(0x12e)](_0x159d02(0x18b))
        [_0x159d02(0x1cf)](_0x159d02(0x1f5)) === !![] ||
      $(steps[x])
        [_0x159d02(0x12e)](_0x159d02(0x1f9))
        [_0x159d02(0x1cf)](_0x159d02(0x1f5)) === !![]) &&
      ((all_data = all_data[_0x159d02(0x141)](
        (_0x5e0dd8) =>
          _0x5e0dd8[_0x159d02(0x173)] !==
          $(steps[x])
            [_0x159d02(0x12e)](_0x159d02(0x1f6))
            [_0x159d02(0x1ec)](_0x159d02(0x174))
      )),
      $(
        _0x159d02(0x118) +
          $(steps[x])["find"](_0x159d02(0x1f6))["attr"](_0x159d02(0x174)) +
          "\x22]"
      )[_0x159d02(0x1c0)](),
      $(steps[x])
        [_0x159d02(0x12e)](_0x159d02(0x1d8))
        [_0x159d02(0x18a)]("checked", ![]),
      $(steps[x])
        [_0x159d02(0x12e)](_0x159d02(0x1bf))
        ["removeClass"](_0x159d02(0x1fc)),
      validation());
}
weightedSelectionRange &&
  $(_0x46ee11(0x134))[_0x46ee11(0x180)](function () {
    const _0x4d34cf = _0x46ee11;
    $(this)["append"](
      "<div\x20data-range=\x22selection\x22\x20style=\x22display:none\x20!important\x22>" +
        $(this)[_0x4d34cf(0x1cf)](_0x4d34cf(0x1c8)) +
        _0x4d34cf(0x11e)
    );
  });
function selectionQuiz() {
  const _0x130c6f = _0x46ee11;
  if ($(this)["find"](_0x130c6f(0x1ea))) {
    $(_0x130c6f(0x134))[_0x130c6f(0x1c0)](),
      $(_0x130c6f(0x1f7))[_0x130c6f(0x1c0)]();
    if (weightedSelection) {
      (selTotal = 0x0),
        selArr[_0x130c6f(0x1b6)](function (_0x595d9b) {
          const _0x4eb18f = _0x130c6f;
          selTotal = selTotal + _0x595d9b[_0x4eb18f(0x1e2)];
        }),
        $(_0x130c6f(0x15c))["text"](selTotal);
      if ($(_0x130c6f(0x175) + selTotal + "\x22]")[_0x130c6f(0x114)] > 0x0)
        $(_0x130c6f(0x175) + selTotal + "\x22]")[_0x130c6f(0x1c1)]();
      else
        $(_0x130c6f(0x1de) + selTotal + ")")
          ? $("[data-range]:contains(" + selTotal + ")")
              [_0x130c6f(0x1e1)]("[data-selection]")
              ["eq"](0x0)
              [_0x130c6f(0x10f)]()
          : $(_0x130c6f(0x189))["fadeIn"]();
    } else {
      let _0x42823d = -0x1;
      $(_0x130c6f(0x134))[_0x130c6f(0x180)](function (_0x3a6291) {
        const _0x75a16b = _0x130c6f;
        $($(_0x75a16b(0x134))[_0x3a6291])
          [_0x75a16b(0x1cf)](_0x75a16b(0x1c8))
          [_0x75a16b(0x156)](selString[_0x75a16b(0x1f4)]()) &&
          (_0x42823d = _0x3a6291);
      }),
        _0x42823d > -0x1
          ? $($(_0x130c6f(0x134))[_0x42823d])["fadeIn"]()
          : $(_0x130c6f(0x189))[_0x130c6f(0x1c1)]();
    }
  }
}
function triggerInputAllData() {
  const _0xfc4b6a = _0x46ee11;
  if (savedFilledInput && memory)
    savedFilledInput[_0xfc4b6a(0x1b6)]((_0x37150f) => {
      const _0x3d275e = _0xfc4b6a;
      var _0x1e559e = $(
          _0x3d275e(0x163) +
            _0x37150f[_0x3d275e(0x1ed)] +
            _0x3d275e(0x1a0) +
            _0x37150f["value"] +
            "\x22]"
        ),
        _0x42238f = $(
          "input[name=\x22" + _0x37150f[_0x3d275e(0x1ed)] + "\x22]"
        );
      console[_0x3d275e(0x140)](
        _0x1e559e[_0x3d275e(0x145)]("[data-radio-skip]")[_0x3d275e(0x1cf)](
          _0x3d275e(0x1f5)
        )
      );
      if (_0x1e559e[_0x3d275e(0x1ec)]("type") !== "file") {
        if (
          _0x1e559e["attr"]("type") === _0x3d275e(0x133) &&
          !_0x1e559e[_0x3d275e(0x145)](_0x3d275e(0x197))[_0x3d275e(0x1cf)](
            "radio-skip"
          )
        )
          _0x1e559e[_0x3d275e(0x1fd)](),
            _0x1e559e["siblings"](".w-radio-input")["addClass"](
              _0x3d275e(0x1fc)
            ),
            _0x1e559e["trigger"](_0x3d275e(0x1bc));
        else
          _0x37150f[_0x3d275e(0x1da)] === "on"
            ? (_0x42238f[_0x3d275e(0x1fd)](),
              _0x42238f[_0x3d275e(0x194)](_0x3d275e(0x15e))[_0x3d275e(0x116)](
                _0x3d275e(0x1fc)
              ),
              _0x42238f[_0x3d275e(0x1c4)](_0x3d275e(0x1bc)))
            : (console[_0x3d275e(0x140)](
                _0x37150f[_0x3d275e(0x1ed)],
                _0x37150f["value"]
              ),
              _0x42238f[_0x3d275e(0x186)](_0x37150f[_0x3d275e(0x1da)]),
              _0x42238f["val"](_0x37150f["value"]),
              $(_0x3d275e(0x182) + _0x37150f["value"] + "\x22]")[
                _0x3d275e(0x18a)
              ](_0x3d275e(0x1e2), !![]),
              _0x42238f[_0x3d275e(0x1c4)](_0x3d275e(0x1bc)),
              _0x42238f[_0x3d275e(0x1c4)](_0x3d275e(0x121)));
      }
    });
  else
    _params &&
      (getParams(),
      searchQ[_0xfc4b6a(0x1b6)]((_0x11f28e) => {
        const _0x4e80d1 = _0xfc4b6a;
        if (
          $(
            _0x4e80d1(0x163) +
              _0x11f28e[_0x4e80d1(0x1ed)] +
              _0x4e80d1(0x1a0) +
              _0x11f28e[_0x4e80d1(0x1da)] +
              "\x22]"
          )[_0x4e80d1(0x1ec)](_0x4e80d1(0x1aa)) !== _0x4e80d1(0x14e)
        ) {
          if (
            $(
              "input[name=\x22" +
                _0x11f28e["key"] +
                _0x4e80d1(0x1a0) +
                _0x11f28e[_0x4e80d1(0x186)] +
                "\x22]"
            )[_0x4e80d1(0x1ec)](_0x4e80d1(0x1aa)) === _0x4e80d1(0x133)
          )
            $(
              _0x4e80d1(0x163) +
                _0x11f28e[_0x4e80d1(0x1a1)] +
                _0x4e80d1(0x1a0) +
                _0x11f28e["val"] +
                "\x22]"
            )[_0x4e80d1(0x1fd)](),
              $(
                _0x4e80d1(0x163) +
                  _0x11f28e["key"] +
                  _0x4e80d1(0x1a0) +
                  _0x11f28e[_0x4e80d1(0x186)] +
                  "\x22]"
              )
                [_0x4e80d1(0x194)](_0x4e80d1(0x112))
                ["addClass"](_0x4e80d1(0x1fc)),
              $(
                _0x4e80d1(0x163) +
                  _0x11f28e[_0x4e80d1(0x1a1)] +
                  "\x22][value=\x22" +
                  _0x11f28e[_0x4e80d1(0x186)] +
                  "\x22]"
              )[_0x4e80d1(0x1c4)](_0x4e80d1(0x1bc));
          else
            _0x11f28e[_0x4e80d1(0x186)] === "on"
              ? ($(_0x4e80d1(0x163) + _0x11f28e["key"] + "\x22]")[
                  _0x4e80d1(0x1fd)
                ](),
                $(_0x4e80d1(0x163) + _0x11f28e[_0x4e80d1(0x1a1)] + "\x22]")
                  [_0x4e80d1(0x194)](_0x4e80d1(0x15e))
                  ["addClass"]("w--redirected-checked"),
                $(_0x4e80d1(0x163) + _0x11f28e["key"] + "\x22]")[
                  _0x4e80d1(0x1c4)
                ](_0x4e80d1(0x1bc)))
              : ($(_0x4e80d1(0x163) + _0x11f28e[_0x4e80d1(0x1a1)] + "\x22]")[
                  "val"
                ](_0x11f28e[_0x4e80d1(0x186)]),
                $("textarea[name=\x22" + _0x11f28e["key"] + "\x22]")[
                  _0x4e80d1(0x186)
                ](_0x11f28e["val"]),
                $("select[name=\x22" + _0x11f28e[_0x4e80d1(0x1a1)] + "\x22]")
                  [_0x4e80d1(0x12e)](
                    "option[value=\x22" + _0x11f28e["val"] + "\x22]"
                  )
                  [_0x4e80d1(0x18a)](_0x4e80d1(0x1e2), !![]),
                $(_0x4e80d1(0x163) + _0x11f28e[_0x4e80d1(0x1a1)] + "\x22]")[
                  _0x4e80d1(0x1c4)
                ](_0x4e80d1(0x1bc)),
                $(_0x4e80d1(0x163) + _0x11f28e["key"] + "\x22]")["trigger"](
                  _0x4e80d1(0x121)
                ));
        }
      }));
}
function _0xdc44() {
  const _0x3a6a99 = [
    "name",
    "[data-selection=\x22",
    ":input[type=\x22checkbox\x22]",
    "[data-clickable-all]",
    "textarea[required]:visible",
    "[data-count-card]",
    "1vczjKu",
    "textarea[name=\x22",
    "div.g-recaptcha",
    "140130NVaSmn",
    "redirect",
    "_blank",
    "each",
    "preventDefault",
    "option[value=\x22",
    "[data-reinit]",
    "append",
    "animate",
    "val",
    "scroll-top-offset",
    "checkbox",
    "[data-selection=\x22other\x22]",
    "prop",
    "[data-radio-skip]:visible",
    "some",
    "[data-selected]:checked",
    "split",
    "input[autofocus]",
    "getResponse",
    "status",
    "clone",
    "[data-form=\x22step\x22]",
    "siblings",
    "[data-answer]",
    "novalidate",
    "[data-radio-skip]",
    "block-domain",
    "auto",
    ":input[type=\x22checkbox\x22][required]",
    "open",
    "removeItem",
    "not",
    "replace",
    "children",
    "\x22][value=\x22",
    "key",
    "[data-form=\x22submit-btn\x22]:visible",
    "[data-skip-to]",
    ":input[type=\x22tel\x22][required]",
    "current",
    "[data-input-field]",
    "[data-clone=\x22",
    "card",
    "[data-form=\x22custom-progress-indicator\x22]",
    "type",
    ":checked",
    "min-character",
    "destroy",
    "weighted-selection",
    "input:radio[required]",
    ":input[type=\x22tel\x22]",
    "href",
    "[data-form=\x22progress\x22]",
    "submit",
    "input:checkbox",
    "input[type=\x22submit\x22]",
    "forEach",
    "[data-add-new]",
    "[data-redirect-delay]",
    "none",
    "[data-form=\x22back-btn\x22]",
    ":input[type=\x22file\x22]",
    "input",
    "[data-form=\x22step\x22][data-card]",
    "input[type=\x22checkbox\x22]:visible",
    ".w-form-formradioinput",
    "hide",
    "fadeIn",
    ":input[type=\x22date\x22][required]",
    ":input[type=\x27radio\x27]:checked",
    "trigger",
    "textarea[autofocus]",
    "weighted-selection-range",
    ":input[type=\x22radio\x22]",
    "selection",
    "0.4",
    ".w-form-done",
    "skip-to",
    "data-input-field",
    "query-param",
    "step",
    "data",
    "data-radio-skip",
    "7231uauwIp",
    "[data-select-multiple]",
    "remove",
    "Please\x20wait...",
    "form[data-form=\x22multistep\x22]\x20:input",
    "go-to",
    "reset",
    "input[type=\x22radio\x22]",
    "[data-form=\x22submit-btn\x22]",
    "value",
    "[data-weighted-selection]",
    "removeClass",
    "[data-btn=\x22reset\x22]",
    "[data-range]:contains(",
    ":input[type=\x22date\x22]",
    "[type=\x22submit\x22]",
    "parent",
    "selected",
    "slice",
    "redirect-delay",
    "trim",
    "slow",
    "radio-delay",
    "stopPropagation",
    "edit-step",
    "[data-btn=\x22check\x22]",
    "wait",
    "attr",
    "inputName",
    "memory",
    "[data-query-param]",
    "reinit",
    "css",
    "index",
    "[type=\x22radio\x22]",
    "join",
    "radio-skip",
    "input[type=\x22radio\x22]:checked",
    "[data-selection-weight]",
    "init",
    "[data-answer][data-radio-skip]:visible",
    ":input[type=\x22checkbox\x22][required]:checked",
    ":input[type=\x22checkbox\x22]:checked",
    "w--redirected-checked",
    "click",
    "[data-form=\x22next-btn\x22][data-submit-show]",
    "input[type=\x22email\x22]:visible",
    "21162420SYvfVO",
    "focus",
    "[data-display-wrapper=\x22",
    "ctrlKey",
    "dispatchEvent",
    "last",
    "https://webflow.com/api/v1/form/",
    "[data-form=\x22multistep\x22]",
    "clickable-all",
    "[data-text=\x22total-steps\x22]",
    "[data-success-card]",
    "Webflow",
    "show",
    "[data-clickable]",
    "1208HsjYFB",
    ".w-radio-input",
    "match",
    "length",
    "select[required]",
    "addClass",
    "new-tab",
    "[data-input-field=\x22",
    "text",
    "[data-index=\x22",
    "logic-extra",
    "scroll-top",
    "616BhRXRy",
    "</div>",
    "submit-show",
    "[data-enter]",
    "change",
    ":input[type=\x22text\x22]",
    "2022962JoMSQu",
    "10599AGQdKu",
    "phone-autoformat",
    "body",
    "1308924KomyMq",
    "push",
    "backTo",
    "Enter",
    "[data-go-to]",
    "filledInput",
    "quiz",
    "find",
    "data-radio-delay",
    ":input[type=\x22email\x22][required]",
    "getItem",
    "select",
    "radio",
    "[data-selection]",
    "select[required]:visible",
    "clickable",
    "[type=\x22checkbox\x22]",
    "ajaxComplete",
    "url",
    "data-name",
    ":input[required]",
    "stringify",
    "[data-form-ms=\x22submit-btn\x22]",
    "[data-text=\x22current-step\x22]",
    "metaKey",
    "log",
    "filter",
    "span",
    "data-go-to",
    "setItem",
    "parents",
    "keypress",
    "keyCode",
    "textarea",
    "[data-cms-select=text]",
    "[data-radio-delay]",
    "<option>",
    "[data-clone-wrapper=\x22",
    ":input[type=\x22file\x22][required]",
    "file",
    "<br>Data\x20Answer\x20=\x20",
    "\x22]:checked",
    "[data-text=\x22error-message\x22]",
    "custom-error-message",
    "findIndex",
    "keydown",
    "[data-answer=\x22",
    "includes",
    ":input[type=\x22number\x22][required]",
    ":input[type=\x22text\x22][required]",
    "[data-form=\x22next-btn\x22][type=\x22submit\x22]",
    "skipTo",
    "[data-quiz]",
    "[data-text=\x22total-weight\x22]",
    "[data-form=\x22progress-indicator\x22]",
    ".w-checkbox-input",
    "parse",
    "[data-cms-select=input]",
    "[data-reset-delay]",
    "redirect-form-hehexd",
    "input[name=\x22",
    "select-multiple",
    "[data-checkbox]",
    "5895985RuRRVq",
    ":input",
    "[data-custom-error-message]",
    "textarea[required]",
    "[data-memory]",
    "[data-display=\x22",
    "[data-btn=\x22edit\x22]",
    "[data-form=\x22submit\x22]:visible",
    "[data-answer]:visible",
    "[data-form=\x22next-btn\x22]",
    "test",
    "disabled",
    "reset-delay",
    "field",
  ];
  _0xdc44 = function () {
    return _0x3a6a99;
  };
  return _0xdc44();
}
$(_0x46ee11(0x16f))["on"](_0x46ee11(0x1fd), function () {
  (next = !![]), nextStep(), selectionQuiz();
}),
  $(_0x46ee11(0x1ba))["on"](_0x46ee11(0x1fd), function () {
    (next = ![]), (back = !![]), backStep();
  }),
  $(steps)
    [_0x46ee11(0x12e)](":input")
    [_0x46ee11(0x19d)](_0x46ee11(0x1f3))
    ["on"](_0x46ee11(0x1bc), function (_0x44e317) {
      validation();
    }),
  $(steps)
    ["find"](_0x46ee11(0x1d8))
    ["on"](_0x46ee11(0x1fd), function () {
      (skip = !![]), validation();
    });
$(_0x46ee11(0x177))["data"](_0x46ee11(0x10b))
  ? $("[data-form=\x22custom-progress-indicator\x22]")[_0x46ee11(0x1dc)](
      _0x46ee11(0x171)
    )
  : $(_0x46ee11(0x1a9))[_0x46ee11(0x116)]("disabled");
function clickableIndicator() {
  const _0x403677 = _0x46ee11;
  $(_0x403677(0x110))[_0x403677(0x1cf)]("clickable") &&
    ($(_0x403677(0x15d))[_0x403677(0x1dc)](_0x403677(0x1a5)),
    $(_0x403677(0x110))[_0x403677(0x1cf)](_0x403677(0x10b))
      ? ((x = $(this)[_0x403677(0x1f2)]()), updateStep())
      : $(this)[_0x403677(0x1f2)]() <= progress &&
        ((x = $(this)["index"]()), updateStep())),
    $(_0x403677(0x13e))[_0x403677(0x119)](x + 0x1);
}
$(_0x46ee11(0x1a9))["on"](_0x46ee11(0x1fd), clickableIndicator);
$("[data-form=\x22multistep\x22]")["data"]("debug-mode") &&
  ($(_0x46ee11(0x12b))[_0x46ee11(0x180)](function () {
    const _0xfc095 = _0x46ee11;
    $(this)[_0xfc095(0x184)](
      "<br>Data\x20Go\x20To\x20=\x20",
      $(this)[_0xfc095(0x1cf)](_0xfc095(0x1d6))
    );
  }),
  $("[data-answer]")[_0x46ee11(0x180)](function () {
    const _0x1b1eef = _0x46ee11;
    $(this)["append"](_0x1b1eef(0x14f), $(this)["data"]("answer"));
  }));
$(_0x46ee11(0x1d9))["on"](_0x46ee11(0x1fd), function (_0x59bfed) {
  const _0x1fb387 = _0x46ee11;
  $(this)[_0x1fb387(0x1cf)](_0x1fb387(0x17e)) &&
    (redirectTo = $(this)[_0x1fb387(0x1cf)](_0x1fb387(0x17e))),
    !$(this)["data"]("new-tab") &&
      (newTab = $(this)[_0x1fb387(0x1cf)](_0x1fb387(0x117))),
    (successCard = $(this)[_0x1fb387(0x1cf)]("success")),
    _0x59bfed[_0x1fb387(0x181)](),
    _0x59bfed[_0x1fb387(0x1e8)](),
    logicExtra &&
      ($(this)["prop"](_0x1fb387(0x196), !![]),
      $(steps)["find"](_0x1fb387(0x167))[_0x1fb387(0x18a)]("required", ![])),
    localStorage[_0x1fb387(0x19c)](_0x1fb387(0x12c)),
    fill &&
      ($(this)[_0x1fb387(0x1cf)](_0x1fb387(0x1eb))
        ? $(this)["val"]($(this)[_0x1fb387(0x1cf)](_0x1fb387(0x1eb)))
        : ($(this)[_0x1fb387(0x186)]("Please\x20wait..."),
          $(this)[_0x1fb387(0x119)](_0x1fb387(0x1d4))),
      $(_0x1fb387(0x10a))[_0x1fb387(0x1b3)](),
      $("div.g-recaptcha")[_0x1fb387(0x114)] > 0x0 &&
        grecaptcha[_0x1fb387(0x190)]()["length"] === 0x0 &&
        (form["find"](_0x1fb387(0x1d9))[_0x1fb387(0x119)](oldSubmitText),
        form[_0x1fb387(0x12e)]("[data-form=\x22submit-btn\x22]")[
          _0x1fb387(0x186)
        ](oldSubmitText)));
});
function resetFormly() {
  const _0x384682 = _0x46ee11;
  $(_0x384682(0x10a))["trigger"](_0x384682(0x1d7)),
    $(_0x384682(0x10a))
      [_0x384682(0x145)]()
      ["find"](_0x384682(0x1ca))
      [_0x384682(0x1c0)](),
    (x = 0x0),
    updateStep(),
    $(_0x384682(0x10a))["show"](),
    $("[data-form=\x22submit-btn\x22]")[_0x384682(0x119)](oldSubmitText),
    $(_0x384682(0x1d9))[_0x384682(0x186)](oldSubmitText),
    $(_0x384682(0x13e))[_0x384682(0x119)](0x1),
    $(_0x384682(0x10a))
      ["find"](_0x384682(0x1b4))
      ["siblings"](".w-checkbox-input")
      [_0x384682(0x1dc)](_0x384682(0x1fc));
}
$(document)[_0x46ee11(0x138)](function (_0x292c08, _0x47832c, _0x2a7253) {
  const _0x58b0f3 = _0x46ee11;
  if (_0x2a7253[_0x58b0f3(0x139)][_0x58b0f3(0x156)](_0x58b0f3(0x109))) {
    const _0x1cbd40 = _0x47832c[_0x58b0f3(0x191)] === 0xc8,
      _0x250932 = _0x58b0f3(0x162);
    redirectTo &&
      _0x1cbd40 &&
      (newTab
        ? window[_0x58b0f3(0x19b)](redirectTo, _0x58b0f3(0x17f))
        : setTimeout(() => {
            const _0x4db906 = _0x58b0f3;
            location[_0x4db906(0x1b1)] = redirectTo;
          }, redirectDelay)),
      _0x1cbd40 &&
        successCard !== "" &&
        $("[data-success-card=\x22" + successCard + "\x22]")[
          _0x58b0f3(0x1c1)
        ](),
      _0x1cbd40 &&
        formReset &&
        setTimeout(() => {
          resetFormly();
        }, resetDelay),
      !_0x1cbd40 &&
        ($(_0x58b0f3(0x1d9))["val"](_0x58b0f3(0x1d4)),
        $(_0x58b0f3(0x1d9))["text"]("Please\x20wait..."));
  }
}),
  $(_0x46ee11(0x16c))["on"]("click", function () {
    const _0x1eb181 = _0x46ee11;
    var _0x355b34 = $(this)
      [_0x1eb181(0x1e1)]()
      [_0x1eb181(0x12e)](_0x1eb181(0x1a6))
      [_0x1eb181(0x1cf)]("input-field");
    setTimeout(function () {
      const _0x3e15d3 = _0x1eb181;
      $(_0x3e15d3(0x163) + _0x355b34 + "\x22]")[_0x3e15d3(0x201)]();
    }, 0x64),
      (back = !![]),
      (x = $(this)[_0x1eb181(0x1cf)](_0x1eb181(0x1e9)) - 0x1),
      updateStep(),
      countCard
        ? ((curStep = x + 0x1),
          $(_0x1eb181(0x10c))[_0x1eb181(0x119)](steps["length"]))
        : $(steps[x])["data"](_0x1eb181(0x1a8))
        ? (curStep = x + 0x0)
        : (curStep = x + 0x1),
      $("[data-text=\x22current-step\x22]")["text"](curStep),
      (back = ![]);
  }),
  $(_0x46ee11(0x1dd))["on"]("click", function () {
    const _0x1d141a = _0x46ee11;
    $(_0x1d141a(0x10a))[_0x1d141a(0x1c4)](_0x1d141a(0x1d7));
    let _0x404899 = $(this);
    $(this)[_0x1d141a(0x119)](_0x1d141a(0x1d4)),
      setTimeout(function () {
        const _0x34648c = _0x1d141a;
        $(_0x404899)[_0x34648c(0x119)](oldResetText),
          $(_0x404899)[_0x34648c(0x145)](".w-form-done")[_0x34648c(0x1c0)](),
          (x = 0x0),
          updateStep(),
          $(_0x34648c(0x10a))[_0x34648c(0x10f)](),
          $(_0x34648c(0x1d9))[_0x34648c(0x119)](oldSubmitText),
          $(_0x34648c(0x1d9))[_0x34648c(0x186)](oldSubmitText),
          $(_0x404899)[_0x34648c(0x186)](oldSubmitText),
          $(_0x34648c(0x13e))[_0x34648c(0x119)](0x1),
          $("[data-form=\x22multistep\x22]")
            [_0x34648c(0x12e)](_0x34648c(0x1b4))
            ["siblings"](_0x34648c(0x15e))
            ["removeClass"](_0x34648c(0x1fc));
      }, resetDelay);
  }),
  $(_0x46ee11(0x126))["on"](_0x46ee11(0x146), function (_0x468e15) {
    const _0x41595f = _0x46ee11;
    _0x468e15[_0x41595f(0x147)] === 0xd &&
      fill &&
      ($(_0x41595f(0x120))[_0x41595f(0x1cf)]("enter")
        ? (totalSteps > curStep && $(_0x41595f(0x16f))[0x0][_0x41595f(0x1fd)](),
          _0x468e15[_0x41595f(0x181)](),
          _0x468e15[_0x41595f(0x1e8)]())
        : (_0x468e15[_0x41595f(0x181)](), _0x468e15["stopPropagation"]()));
  }),
  $("body")[_0x46ee11(0x154)](function (_0x3af0c4) {
    const _0xf7dada = _0x46ee11;
    (_0x3af0c4[_0xf7dada(0x13f)] || _0x3af0c4[_0xf7dada(0x203)]) &&
      _0x3af0c4["keyCode"] == 0xd &&
      (x >= steps[_0xf7dada(0x114)] - 0x1 && fill
        ? $(steps[x])[_0xf7dada(0x12e)](_0xf7dada(0x1a2))[_0xf7dada(0x1fd)]()
        : (event[_0xf7dada(0x181)](), event[_0xf7dada(0x1e8)]()));
  }),
  $(_0x46ee11(0x148))["keypress"](function (_0x4086b0) {
    const _0x364203 = _0x46ee11;
    $(this)[_0x364203(0x201)](),
      _0x4086b0[_0x364203(0x1a1)] == _0x364203(0x12a) &&
        (_0x4086b0[_0x364203(0x181)](), _0x4086b0[_0x364203(0x1e8)]()),
      _0x4086b0["shiftKey"] &&
        _0x4086b0[_0x364203(0x1a1)] == _0x364203(0x12a) &&
        $(this)[_0x364203(0x186)]($(this)[_0x364203(0x186)]() + "\x0a");
  }),
  $(_0x46ee11(0x10a))
    [_0x46ee11(0x12e)](_0x46ee11(0x167))
    ["on"](_0x46ee11(0x121), function () {
      const _0x2d7e2d = _0x46ee11;
      (all_data = all_data[_0x2d7e2d(0x141)](
        (_0x50113e) =>
          _0x50113e["field"] !== $(this)[_0x2d7e2d(0x1ec)](_0x2d7e2d(0x174))
      )),
        $(this)["attr"](_0x2d7e2d(0x1aa)) === _0x2d7e2d(0x188)
          ? $(this)["is"](_0x2d7e2d(0x1ab))
            ? all_data[_0x2d7e2d(0x128)]({
                field: $(this)[_0x2d7e2d(0x1ec)](_0x2d7e2d(0x174)),
                value: $(this)
                  [_0x2d7e2d(0x194)](_0x2d7e2d(0x142))
                  [_0x2d7e2d(0x119)](),
              })
            : $(
                _0x2d7e2d(0x118) +
                  $(this)[_0x2d7e2d(0x1ec)](_0x2d7e2d(0x174)) +
                  "\x22]"
              )[_0x2d7e2d(0x1c0)]()
          : (all_data["push"]({
              field: $(this)[_0x2d7e2d(0x1ec)](_0x2d7e2d(0x174)),
              value: $(this)["val"](),
            }),
            $(this)[_0x2d7e2d(0x186)]() !== "" &&
              resetInputErrorMessage(
                $(this)[_0x2d7e2d(0x1ec)](_0x2d7e2d(0x174))
              )),
        all_data[_0x2d7e2d(0x1b6)](function (_0x58600c) {
          const _0x45f550 = _0x2d7e2d;
          $(_0x45f550(0x118) + _0x58600c[_0x45f550(0x173)] + "\x22]")[
            _0x45f550(0x1c1)
          ](),
            $(_0x45f550(0x118) + _0x58600c[_0x45f550(0x173)] + "\x22]")[
              _0x45f550(0x119)
            ](_0x58600c[_0x45f550(0x1da)]);
        });
    }),
  $(_0x46ee11(0x10a))
    ["find"](_0x46ee11(0x148))
    ["on"]("change", function () {
      const _0x575a87 = _0x46ee11;
      $(this)[_0x575a87(0x186)]() !== "" &&
        resetInputErrorMessage($(this)["attr"]("name")),
        (all_data = all_data[_0x575a87(0x141)](
          (_0x2af6b7) =>
            _0x2af6b7[_0x575a87(0x173)] !== $(this)[_0x575a87(0x1ec)]("name")
        )),
        all_data[_0x575a87(0x128)]({
          field: $(this)["attr"](_0x575a87(0x174)),
          value: $(this)["val"](),
        }),
        all_data[_0x575a87(0x1b6)](function (_0x3f2111) {
          const _0x1541f3 = _0x575a87;
          $(_0x1541f3(0x118) + _0x3f2111[_0x1541f3(0x173)] + "\x22]")[
            _0x1541f3(0x1c1)
          ](),
            $(_0x1541f3(0x118) + _0x3f2111[_0x1541f3(0x173)] + "\x22]")[
              _0x1541f3(0x119)
            ](_0x3f2111[_0x1541f3(0x1da)]);
        });
    }),
  $("[data-form=\x22multistep\x22]")
    [_0x46ee11(0x12e)](_0x46ee11(0x132))
    ["on"]("change", function () {
      const _0x2b9015 = _0x46ee11;
      $(this)[_0x2b9015(0x186)]() !== "" &&
        resetInputErrorMessage($(this)[_0x2b9015(0x1ec)](_0x2b9015(0x174)));
      var _0x7d0359 = $(this)[_0x2b9015(0x1cf)]("ms-field");
      (all_data = all_data[_0x2b9015(0x141)](
        (_0x15a9cc) =>
          _0x15a9cc[_0x2b9015(0x173)] !== $(this)["attr"](_0x2b9015(0x174))
      )),
        all_data[_0x2b9015(0x128)]({
          field: $(this)[_0x2b9015(0x1ec)](_0x2b9015(0x174)),
          value: _0x7d0359
            ? $(this)
                [_0x2b9015(0x12e)]("option[value=\x22$(this).val()\x22]")
                [_0x2b9015(0x119)]()
            : $(this)["val"](),
        }),
        all_data[_0x2b9015(0x1b6)](function (_0x86b0b1) {
          const _0x39291f = _0x2b9015;
          $(_0x39291f(0x118) + _0x86b0b1[_0x39291f(0x173)] + "\x22]")[
            _0x39291f(0x1c1)
          ](),
            $(_0x39291f(0x118) + _0x86b0b1[_0x39291f(0x173)] + "\x22]")["text"](
              _0x86b0b1[_0x39291f(0x1da)]
            );
        });
    }),
  updateStep(),
  triggerInputAllData(),
  $("[data-cms-select=cms]")[_0x46ee11(0x180)](function () {
    const _0x2535be = _0x46ee11,
      _0x3ebd8c = $(this)[_0x2535be(0x12e)](_0x2535be(0x149)),
      _0xa1d553 = [];
    console[_0x2535be(0x140)](_0xa1d553),
      _0x3ebd8c[_0x2535be(0x180)](function () {
        const _0x347e65 = _0x2535be;
        _0xa1d553[_0x347e65(0x128)](
          $(this)[_0x347e65(0x119)]()[_0x347e65(0x1e5)]()
        );
      });
    const _0x487db4 = $(this)["siblings"](_0x2535be(0x160));
    $["each"](_0xa1d553, function (_0x26e6a1, _0x594737) {
      const _0x430e4a = _0x2535be,
        _0x2d04eb = $(_0x430e4a(0x14b))
          [_0x430e4a(0x186)](_0x594737)
          [_0x430e4a(0x119)](_0x594737);
      _0x487db4[_0x430e4a(0x184)](_0x2d04eb);
    });
  }),
  $(_0x46ee11(0x1b7))["on"](_0x46ee11(0x1fd), function () {
    const _0x446761 = _0x46ee11;
    let _0x516d19 = $(this)["data"]("add-new");
    var _0x4801c1 = $("[data-clone=\x22" + _0x516d19 + "\x22]")
        ["eq"](0x0)
        [_0x446761(0x192)](!![]),
      _0x48c6ff = $(_0x446761(0x16b) + _0x516d19 + "\x22]")
        ["eq"](0x0)
        [_0x446761(0x192)](!![]);
    _0x4801c1[_0x446761(0x12e)](_0x446761(0x1bc))[_0x446761(0x180)](
      function () {
        const _0x50a5d4 = _0x446761;
        $(this)[_0x50a5d4(0x186)](""),
          $(this)[_0x50a5d4(0x1ec)](
            _0x50a5d4(0x174),
            this[_0x50a5d4(0x174)] +
              "-" +
              (parseInt(
                $("[data-clone=\x22" + _0x516d19 + "\x22]")
                  [_0x50a5d4(0x205)]()
                  ["index"]()
              ) +
                0x1)
          ),
          $(this)[_0x50a5d4(0x1ec)](
            _0x50a5d4(0x13a),
            $(this)["data"](_0x50a5d4(0x174)) +
              "-" +
              (parseInt(
                $("[data-clone=\x22" + _0x516d19 + "\x22]")
                  [_0x50a5d4(0x205)]()
                  [_0x50a5d4(0x1f2)]()
              ) +
                0x1)
          );
      }
    ),
      _0x48c6ff[_0x446761(0x12e)]("[data-input-field]")[_0x446761(0x180)](
        function () {
          const _0x296dd8 = _0x446761;
          $(this)[_0x296dd8(0x1ec)](
            _0x296dd8(0x1cc),
            $(this)[_0x296dd8(0x1cf)]("input-field") +
              "-" +
              (parseInt(
                $(_0x296dd8(0x1a7) + _0x516d19 + "\x22]")
                  [_0x296dd8(0x205)]()
                  [_0x296dd8(0x1f2)]()
              ) +
                0x1)
          );
        }
      ),
      $(_0x446761(0x14c) + _0x516d19 + "\x22]")[_0x446761(0x184)](_0x4801c1),
      $(_0x446761(0x202) + _0x516d19 + "\x22]")[_0x446761(0x184)](_0x48c6ff),
      $(_0x446761(0x11a) + _0x516d19 + "\x22]")[_0x446761(0x180)](function () {
        const _0x49bc7f = _0x446761;
        $(this)[_0x49bc7f(0x119)](
          $(this)
            [_0x49bc7f(0x145)](_0x49bc7f(0x1a7) + _0x516d19 + "\x22]")
            [_0x49bc7f(0x1f2)]() + 0x1
        );
      }),
      $("[data-display-index=\x22" + _0x516d19 + "\x22]")[_0x446761(0x180)](
        function () {
          const _0x267e6d = _0x446761;
          $(this)["text"](
            $(this)
              [_0x267e6d(0x145)](_0x267e6d(0x16b) + _0x516d19 + "\x22]")
              ["index"]() + 0x1
          );
        }
      ),
      validation();
  }),
  scrollTop();
