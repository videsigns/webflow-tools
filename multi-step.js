//9th August
//Bug fix:
//1. Exclude file type input from form memory

const _0x29f383 = _0x523f;
(function (_0x1151ad, _0x48fb61) {
  const _0x2266e7 = _0x523f,
    _0x5b6c5b = _0x1151ad();
  while (!![]) {
    try {
      const _0x272752 =
        -parseInt(_0x2266e7(0x114)) / 0x1 +
        (-parseInt(_0x2266e7(0xeb)) / 0x2) *
          (-parseInt(_0x2266e7(0xd9)) / 0x3) +
        (-parseInt(_0x2266e7(0xcd)) / 0x4) *
          (-parseInt(_0x2266e7(0xfd)) / 0x5) +
        -parseInt(_0x2266e7(0x123)) / 0x6 +
        parseInt(_0x2266e7(0xdb)) / 0x7 +
        -parseInt(_0x2266e7(0x193)) / 0x8 +
        (-parseInt(_0x2266e7(0x157)) / 0x9) *
          (-parseInt(_0x2266e7(0x17f)) / 0xa);
      if (_0x272752 === _0x48fb61) break;
      else _0x5b6c5b["push"](_0x5b6c5b["shift"]());
    } catch (_0x167b3f) {
      _0x5b6c5b["push"](_0x5b6c5b["shift"]());
    }
  }
})(_0x3004, 0x76580);
let x = 0x0,
  curStep = 0x0,
  steps = $(_0x29f383(0xf2)),
  progressbarClone = $(_0x29f383(0x199))[_0x29f383(0x18f)](),
  progressbar,
  countCard = !![],
  weightedSelection = $(_0x29f383(0x183))[_0x29f383(0x12c)](_0x29f383(0x191)),
  weightedSelectionRange = $(_0x29f383(0x15b))["data"](_0x29f383(0x11e)),
  selectMultiple = $(_0x29f383(0x161))["data"](_0x29f383(0x160)),
  customError = $("[data-custom-error-message]")[_0x29f383(0x12c)](
    _0x29f383(0x156)
  ),
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
  reinitIX = $(_0x29f383(0x138))[_0x29f383(0x12c)](_0x29f383(0x198)),
  textareaLength = 0x0,
  textInputLength = 0x0,
  emailInputLength = 0x0,
  selectInputLength = 0x0,
  checkboxInputLength = 0x0,
  filledInput = [],
  savedFilledInput = [],
  memory = $(_0x29f383(0x115))[_0x29f383(0x12c)](_0x29f383(0x16d)),
  quiz = $(_0x29f383(0x133))[_0x29f383(0x12c)](_0x29f383(0x162)),
  progress = 0x0;
const urlFormly = new URL(window[_0x29f383(0xb9)]["href"]);
let _params = $(_0x29f383(0x13d))[_0x29f383(0x12c)]("query-param"),
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
  logicExtra = $(_0x29f383(0x101))[_0x29f383(0x12c)](_0x29f383(0x179)),
  oldSubmitText = $(_0x29f383(0x176))[_0x29f383(0xf0)](),
  oldResetText = $("[data-btn=\x22reset\x22]")["text"](),
  formReset = $("[data-form=\x22multistep\x22]")["data"](_0x29f383(0x140)),
  successCard = "",
  redirectTo = "",
  totalSteps = 0x0,
  checkCount = 0x0,
  resetDelay = $(_0x29f383(0xfa))["data"](_0x29f383(0xda))
    ? $(_0x29f383(0xfa))["data"](_0x29f383(0xda))
    : 0x7d0,
  redirectDelay = $(_0x29f383(0x151))["data"](_0x29f383(0x186))
    ? $(_0x29f383(0x151))["data"](_0x29f383(0x186))
    : 0x7d0,
  newTab = !![],
  unfilledArr = [],
  phoneFormat = $("[data-form=\x22multistep\x22]")["data"](_0x29f383(0x178)),
  scrollToTop = $("[data-form=\x22multistep\x22]")[_0x29f383(0x12c)](
    _0x29f383(0xae)
  ),
  scrollTopOffset = parseInt($(_0x29f383(0x101))["data"](_0x29f383(0xf3))),
  notRobot = !![];
(all_data = []),
  (savedFilledInput = JSON["parse"](
    localStorage[_0x29f383(0x129)]("filledInput")
  ));
$(_0x29f383(0x155))["length"] > 0x0 && (notRobot = ![]);
function recaptcha(_0x177a7b) {
  notRobot = !![];
}
$(_0x29f383(0xf6))[_0x29f383(0x184)] > 0x0 &&
  (countCard = $(_0x29f383(0xf6))[_0x29f383(0x12c)](_0x29f383(0xdc)));
$(_0x29f383(0xec))[_0x29f383(0x167)](),
  $(progressbarClone)[_0x29f383(0x16b)](_0x29f383(0x159)),
  $(_0x29f383(0x144))[_0x29f383(0xc7)]()[_0x29f383(0xd2)](),
  $(_0x29f383(0x176))[_0x29f383(0x167)](),
  $(_0x29f383(0xbb))["hide"](),
  steps[_0x29f383(0x164)](function () {
    const _0x3799fa = _0x29f383;
    $("[data-form=\x22progress\x22]")[_0x3799fa(0xcc)](
      progressbarClone[_0x3799fa(0x18f)](!![], !![])
    );
  }),
  $(_0x29f383(0x17c))[_0x29f383(0x167)]();
countCard
  ? ((curStep = curStep + 0x1),
    (totalSteps = steps[_0x29f383(0x184)]),
    $(_0x29f383(0x126))[_0x29f383(0xd3)](totalSteps))
  : ($(steps[x])[_0x29f383(0x12c)](_0x29f383(0x12b))
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    (totalSteps = $(_0x29f383(0xb2))[_0x29f383(0x184)]),
    $("[data-text=\x22total-steps\x22]")[_0x29f383(0xd3)](totalSteps),
    $("[data-form=\x22step\x22][data-card]")["each"](function () {
      const _0x5314bd = _0x29f383;
      $(
        $("[data-form=\x22progress-indicator\x22]")[$(this)[_0x5314bd(0x1a1)]()]
      )[_0x5314bd(0x167)]();
    }));
(progressbar = $("[data-form=\x22progress\x22]")[_0x29f383(0xc7)]()),
  $(_0x29f383(0x199))["on"](_0x29f383(0x150), clickableIndicator),
  $(_0x29f383(0xb0))["text"](curStep),
  steps[_0x29f383(0x167)](),
  $(_0x29f383(0x177))["hide"](),
  $("[data-form=\x22next-btn\x22][type=\x22submit\x22]")[_0x29f383(0x164)](
    function () {
      const _0x1a6a40 = _0x29f383;
      $(this)[_0x1a6a40(0xf9)]("type", _0x1a6a40(0x124));
    }
  );
function getParams() {
  const _0x43dc97 = _0x29f383;
  urlFormly[_0x43dc97(0x180)][_0x43dc97(0x147)](function (
    _0x32c5bd,
    _0x26de06
  ) {
    const _0x3e60e2 = _0x43dc97;
    searchQ[_0x3e60e2(0x163)]({ val: _0x32c5bd, key: _0x26de06 });
  });
}
function getSafe(_0x578c60, _0xb7c9b6) {
  try {
    return _0x578c60();
  } catch (_0x2e24ce) {
    return _0xb7c9b6;
  }
}
function phoneAutoFormat(_0x1c1413) {
  var _0x485bf7 = "";
  return function (_0x2c6148) {
    const _0x562e5c = _0x523f;
    var _0x2b3daa = "",
      _0xa6d8eb = _0x2c6148["replace"](/\D/g, ""),
      _0x11b5c4 = 0x0,
      _0x5c0638 = 0x0;
    while (
      _0x11b5c4 < _0xa6d8eb[_0x562e5c(0x184)] &&
      _0x5c0638 < _0x1c1413[_0x562e5c(0x184)]
    ) {
      _0x1c1413[_0x5c0638] === "x"
        ? ((_0x2b3daa += _0xa6d8eb[_0x11b5c4]), _0x11b5c4++)
        : (_0x2b3daa += _0x1c1413[_0x5c0638]),
        _0x5c0638++;
    }
    if (_0x2c6148[_0x562e5c(0x184)] < _0x485bf7[_0x562e5c(0x184)]) {
      var _0x3efd94 = _0x1c1413[_0x562e5c(0xe9)](_0x5c0638);
      _0x2b3daa += _0x3efd94[_0x562e5c(0x1a9)](/x/g, "");
    }
    return (_0x485bf7 = _0x2b3daa), _0x2b3daa;
  };
}
quiz &&
  steps[_0x29f383(0x164)](function () {
    const _0x418331 = _0x29f383;
    $(this)[_0x418331(0xc7)]()[_0x418331(0xf9)](_0x418331(0x154), !![]),
      $(this)[_0x418331(0xc7)]()[_0x418331(0xf9)]("data-radio-delay", 0xfa);
  });
function disableBtn(_0xe9329b) {
  const _0x208e69 = _0x29f383;
  (fill = ![]),
    !customError &&
      ($(_0x208e69(0xb7))[_0x208e69(0xb5)]({
        opacity: _0x208e69(0x153),
        "pointer-events": _0x208e69(0x16f),
      }),
      $("[data-form=\x22next-btn\x22]")["addClass"](_0x208e69(0x19d)),
      $(_0x208e69(0x176))["css"]({
        opacity: _0x208e69(0x153),
        "pointer-events": _0x208e69(0x16f),
      }),
      $(_0x208e69(0x176))[_0x208e69(0xcb)](_0x208e69(0x19d)),
      $(_0x208e69(0xbb))[_0x208e69(0xb5)]({
        opacity: _0x208e69(0x153),
        "pointer-events": _0x208e69(0x16f),
      }),
      $(_0x208e69(0xbb))[_0x208e69(0xcb)](_0x208e69(0x19d)));
}
function enableBtn() {
  const _0x143c63 = _0x29f383;
  (fill = !![]),
    $(_0x143c63(0xb7))["css"]({
      "pointer-events": _0x143c63(0x100),
      opacity: "1",
    }),
    $("[data-form=\x22next-btn\x22]")[_0x143c63(0x16b)](_0x143c63(0x19d)),
    $(_0x143c63(0x176))[_0x143c63(0xb5)]({
      "pointer-events": "auto",
      opacity: "1",
    }),
    $(_0x143c63(0x176))[_0x143c63(0x16b)](_0x143c63(0x19d)),
    $("[data-form-ms=\x22submit-btn\x22]")[_0x143c63(0xb5)]({
      "pointer-events": _0x143c63(0x100),
      opacity: "1",
    }),
    $(_0x143c63(0xbb))[_0x143c63(0x16b)](_0x143c63(0x19d));
}
function saveFilledInput() {
  const _0x25fa38 = _0x29f383;
  $(_0x25fa38(0xd5))
    [_0x25fa38(0x11f)](_0x25fa38(0xf5))
    [_0x25fa38(0x164)](function () {
      const _0x34df8e = _0x25fa38;
      $(this)[_0x34df8e(0xf9)](_0x34df8e(0x14c)) === _0x34df8e(0x15e) ||
      $(this)[_0x34df8e(0xf9)](_0x34df8e(0x14c)) === _0x34df8e(0xb1)
        ? $(this)[_0x34df8e(0x127)]("checked") &&
          (filledInput[_0x34df8e(0xe7)](
            (_0x38816c) =>
              _0x38816c[_0x34df8e(0xbe)] === $(this)["attr"](_0x34df8e(0x16c))
          )
            ? ((filledInput = filledInput[_0x34df8e(0x141)](
                (_0x4d8c2d) =>
                  _0x4d8c2d[_0x34df8e(0xbe)] !==
                  $(this)[_0x34df8e(0xf9)]("name")
              )),
              $(this)[_0x34df8e(0xf0)]() !== "" &&
                filledInput[_0x34df8e(0x163)]({
                  inputName: $(this)[_0x34df8e(0xf9)](_0x34df8e(0x16c)),
                  value: $(this)["val"](),
                }))
            : $(this)[_0x34df8e(0xf0)]() !== "" &&
              filledInput[_0x34df8e(0x163)]({
                inputName: $(this)[_0x34df8e(0xf9)](_0x34df8e(0x16c)),
                value: $(this)["val"](),
              }))
        : filledInput[_0x34df8e(0xe7)](
            (_0xc5a276) =>
              _0xc5a276[_0x34df8e(0xbe)] === $(this)["attr"](_0x34df8e(0x16c))
          )
        ? ((filledInput = filledInput[_0x34df8e(0x141)](
            (_0x2e7164) => _0x2e7164["inputName"] !== $(this)["attr"]("name")
          )),
          $(this)[_0x34df8e(0xf0)]() !== "" &&
            filledInput["push"]({
              inputName: $(this)[_0x34df8e(0xf9)]("name"),
              value: $(this)[_0x34df8e(0xf0)](),
            }))
        : $(this)[_0x34df8e(0xf0)]() !== "" &&
          filledInput[_0x34df8e(0x163)]({
            inputName: $(this)[_0x34df8e(0xf9)]("name"),
            value: $(this)[_0x34df8e(0xf0)](),
          });
    }),
    localStorage[_0x25fa38(0x10e)](_0x25fa38(0x110)),
    localStorage[_0x25fa38(0xb6)](
      _0x25fa38(0x110),
      JSON[_0x25fa38(0xf7)](filledInput)
    );
}
function scrollTop() {
  const _0x133232 = _0x29f383;
  scrollToTop &&
    $(_0x133232(0x166))[_0x133232(0x19e)](
      {
        scrollTop:
          $(_0x133232(0x101))[_0x133232(0x13f)]()[_0x133232(0x12f)] -
          scrollTopOffset,
      },
      0x3e8
    );
}
function updateStep() {
  const _0x2a7f2d = _0x29f383;
  scrollTop(),
    (skip = ![]),
    $(_0x2a7f2d(0xe6))[_0x2a7f2d(0x16b)](_0x2a7f2d(0x19d));
  $(_0x2a7f2d(0xdf))[_0x2a7f2d(0x12c)]("clickable") &&
    (steps["find"](":input[required]")["each"](function () {
      const _0x4ce2ce = _0x2a7f2d;
      $(
        $(_0x4ce2ce(0xe6))[
          $(this)["parents"]("[data-form=\x22step\x22]")["index"]()
        ]
      ),
        $(this)[_0x4ce2ce(0xf0)]() === "" && emptyInput++;
    }),
    emptyInput > 0x0
      ? $(_0x2a7f2d(0x122))[_0x2a7f2d(0xcb)](_0x2a7f2d(0x19d))
      : $("input[type=\x22submit\x22]")["removeClass"](_0x2a7f2d(0x19d)));
  $(_0x2a7f2d(0xe6))[_0x2a7f2d(0x16b)](_0x2a7f2d(0x159)),
    $(_0x2a7f2d(0xe6))["addClass"](_0x2a7f2d(0x19d)),
    $($(_0x2a7f2d(0xe6))[x])[_0x2a7f2d(0xcb)](_0x2a7f2d(0x159)),
    (selection = selections[_0x2a7f2d(0x141)](
      (_0x22307c) => _0x22307c[_0x2a7f2d(0xaf)] === x - 0x1
    ));
  next &&
    (x = getSafe(() => selection[0x0][_0x2a7f2d(0x14d)])
      ? parseInt(getSafe(() => selection[0x0]["skipTo"]))
      : x);
  $(_0x2a7f2d(0x104))[_0x2a7f2d(0x167)](), steps[_0x2a7f2d(0x167)]();
  reinitIX === !![] && window["Webflow"][_0x2a7f2d(0x170)]();
  $(progressbar)["removeClass"](_0x2a7f2d(0x159));
  for (i = 0x0; i <= x; i++) {
    countCard
      ? $(progressbar[i])["addClass"]("current")
      : !$(steps[i])[_0x2a7f2d(0x12c)]("card") &&
        $(progressbar[i])[_0x2a7f2d(0xcb)](_0x2a7f2d(0x159));
  }
  reinitIX === !![]
    ? (window[_0x2a7f2d(0xbf)] &&
        window[_0x2a7f2d(0xbf)][_0x2a7f2d(0x1a2)](_0x2a7f2d(0x106))["init"](),
      document[_0x2a7f2d(0xd6)](new Event(_0x2a7f2d(0xfe))),
      $(steps[x])[_0x2a7f2d(0xde)]())
    : $(steps[x])[_0x2a7f2d(0x1a8)](_0x2a7f2d(0x112));
  x === 0x0 &&
    !$(steps[x])[_0x2a7f2d(0x12c)]("card") &&
    $(steps[x])["find"](_0x2a7f2d(0x104))[_0x2a7f2d(0xde)]();
  selection["length"] > 0x0
    ? $(steps[x])
        [_0x2a7f2d(0x197)](
          _0x2a7f2d(0x190) + selection[0x0][_0x2a7f2d(0xcf)] + "\x22]"
        )
        ["show"]()
    : $(steps[x])
        [_0x2a7f2d(0x197)]("[data-answer=\x22" + answer + "\x22]")
        ["show"]();
  if (x === 0x0)
    $(_0x2a7f2d(0x145))[_0x2a7f2d(0x167)](),
      $(_0x2a7f2d(0xb7))[_0x2a7f2d(0xde)](),
      $("[data-form=\x22submit-btn\x22]")["hide"]();
  else {
    if (
      x === steps["length"] - 0x1 ||
      $(steps[x])[_0x2a7f2d(0x197)](_0x2a7f2d(0xba))["length"] > 0x0
    ) {
      $(_0x2a7f2d(0xb7))[_0x2a7f2d(0x167)]();
      if (
        $(steps[x])
          [_0x2a7f2d(0x197)](_0x2a7f2d(0x10a))
          [_0x2a7f2d(0x12c)]("submit-show")
      )
        $(steps[x])[_0x2a7f2d(0x197)](_0x2a7f2d(0x10a))[_0x2a7f2d(0xde)]();
      else
        $(_0x2a7f2d(0xb7))[_0x2a7f2d(0x12c)](_0x2a7f2d(0x171)) &&
          $("[data-form=\x22next-btn\x22]")[_0x2a7f2d(0xde)]();
      $("[data-form=\x22submit-btn\x22]")[_0x2a7f2d(0xde)](),
        $(_0x2a7f2d(0xbb))[_0x2a7f2d(0xde)](),
        $("[data-form=\x22back-btn\x22]")[_0x2a7f2d(0xde)]();
    } else
      $(_0x2a7f2d(0xb7))[_0x2a7f2d(0xde)](),
        $(_0x2a7f2d(0x145))[_0x2a7f2d(0xde)](),
        $("[data-form=\x22submit-btn\x22]")[_0x2a7f2d(0x167)](),
        $(_0x2a7f2d(0xbb))[_0x2a7f2d(0x167)]();
  }
  $($(steps[x])[_0x2a7f2d(0x197)](_0x2a7f2d(0x119))[0x0])[_0x2a7f2d(0x14a)](),
    $($(steps[x])[_0x2a7f2d(0x197)](_0x2a7f2d(0x10b))[0x0])["focus"](),
    validation();
  for (idx = 0x0; idx <= x; idx++) {
    $($("[data-form=\x22custom-progress-indicator\x22]")[idx])[
      _0x2a7f2d(0x16b)
    ](_0x2a7f2d(0x19d));
  }
}
function validateEmail(_0x5ebec3, _0x3b70b7, _0xd746fa) {
  const _0xff7865 = _0x29f383;
  let _0x461251 = _0x5ebec3[_0xff7865(0xea)]("@")
    ? _0x5ebec3[_0xff7865(0x1a3)]("@")[0x1][_0xff7865(0x1a3)](".")[0x0]
    : [];
  dom = [];
  _0x3b70b7 !== undefined &&
    _0x3b70b7[_0xff7865(0x1a3)](",")[_0xff7865(0x147)](function (_0x24332f) {
      const _0x3b7446 = _0xff7865;
      _0x24332f["includes"](_0x461251) && dom[_0x3b7446(0x163)](_0x461251);
    });
  dom[_0xff7865(0x184)] > 0x0 ? (domainAllowed = ![]) : (domainAllowed = !![]);
  var _0x561031 = /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,20})?$/;
  console[_0xff7865(0xd8)](_0x561031[_0xff7865(0x16e)](_0x5ebec3)),
    !_0x561031[_0xff7865(0x16e)](_0x5ebec3) || !domainAllowed
      ? ((emailFilled = ![]),
        unfilledArr[_0xff7865(0x163)]({ input: _0xd746fa }))
      : (emailFilled = !![]);
}
function phoneValidation(_0x4922f1, _0x2354e0, _0x1a5016) {
  const _0x577595 = _0x29f383;
  if (phoneFormat)
    return _0x4922f1[_0x577595(0x1ab)](
      new RegExp(phoneFormat["slice"](0x1, -0x1))
    ) && _0x2354e0 >= _0x1a5016
      ? !![]
      : ![];
  else {
    if (_0x2354e0 >= _0x1a5016) return !![];
  }
}
function validation() {
  const _0x8046d0 = _0x29f383;
  $(steps[x])[_0x8046d0(0x12c)](_0x8046d0(0x12b)) && enableBtn();
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
    (textareaLength = $(steps[x])["find"](_0x8046d0(0x1a7))[_0x8046d0(0x184)]),
    (textInputLength = $(steps[x])[_0x8046d0(0x197)](_0x8046d0(0x15f))[
      _0x8046d0(0x184)
    ]),
    (selectInputLength = $(steps[x])[_0x8046d0(0x197)](_0x8046d0(0x146))[
      _0x8046d0(0x184)
    ]),
    (emailInputLength = $(steps[x])[_0x8046d0(0x197)](_0x8046d0(0x13b))[
      _0x8046d0(0x184)
    ]),
    (checkboxInputLength = $(steps[x])[_0x8046d0(0x197)](
      "input[type=\x22checkbox\x22]:visible"
    )["length"]);
  textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0
    ? disableBtn()
    : enableBtn();
  checkCount = $(steps[x])[_0x8046d0(0x12c)]("checkbox")
    ? $(steps[x])[_0x8046d0(0x12c)](_0x8046d0(0x15e))
    : $(steps[x])[_0x8046d0(0x197)]("[data-checkbox]")[_0x8046d0(0x184)] > 0x0
    ? $(steps[x])[_0x8046d0(0x197)]("[data-checkbox]")["data"](_0x8046d0(0x15e))
    : 0x0;
  if (!logicExtra)
    $(steps[x])["find"](_0x8046d0(0xc9))["is"](_0x8046d0(0x113)) &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])[_0x8046d0(0x197)](_0x8046d0(0xc8))[_0x8046d0(0x184)]
        ? $(steps[x])
            [_0x8046d0(0x197)](_0x8046d0(0xc8))
            ["each"](function () {
              const _0x585f3f = _0x8046d0;
              $(this)["is"](_0x585f3f(0x175))
                ? $(steps[x])[_0x585f3f(0x197)](_0x585f3f(0x108))["length"] <
                    0x1 &&
                  ((checkboxFilled = !![]),
                  resetInputErrorMessage($(this)["attr"](_0x585f3f(0x16c))))
                : ((checkboxFilled = ![]),
                  unfilledArr["push"]({
                    input: $(this)[_0x585f3f(0xf9)](_0x585f3f(0x16c)),
                  }));
            })
        : $(steps[x])[_0x8046d0(0x197)](
            ":input[type=\x22checkbox\x22]:checked"
          )[_0x8046d0(0x184)] >= checkCount
        ? $(steps[x])[_0x8046d0(0x197)](_0x8046d0(0x108))[_0x8046d0(0x184)] >
          0x0
          ? $(steps[x])
              [_0x8046d0(0x197)](":input[type=\x22checkbox\x22][required]")
              [_0x8046d0(0x164)](function () {
                const _0x4bdc08 = _0x8046d0;
                !$(this)["is"](_0x4bdc08(0x175))
                  ? ((checkboxFilled = ![]),
                    unfilledArr[_0x4bdc08(0x163)]({
                      input: $(this)[_0x4bdc08(0xf9)]("name"),
                    }))
                  : ((checkboxFilled = !![]),
                    $(steps[x])[_0x4bdc08(0x197)](_0x4bdc08(0xd0))[
                      _0x4bdc08(0x184)
                    ] >=
                      $(steps[x])[_0x4bdc08(0x197)](_0x4bdc08(0x108))[
                        _0x4bdc08(0x184)
                      ] &&
                      resetInputErrorMessage(
                        $(steps[x])
                          [_0x4bdc08(0x197)](_0x4bdc08(0xc8))
                          [_0x4bdc08(0xf9)](_0x4bdc08(0x16c))
                      ));
              })
          : ((checkboxFilled = !![]),
            resetInputErrorMessage(
              $(steps[x])["find"](_0x8046d0(0xc8))["attr"](_0x8046d0(0x16c))
            ))
        : ((checkboxFilled = ![]),
          $(steps[x])
            [_0x8046d0(0x197)](_0x8046d0(0x108))
            ["each"](function () {
              const _0x42f9e5 = _0x8046d0;
              $(this)["not"](_0x42f9e5(0x175)) &&
                unfilledArr[_0x42f9e5(0x163)]({
                  input: $(this)[_0x42f9e5(0xf9)](_0x42f9e5(0x16c)),
                });
            }),
          unfilledArr[_0x8046d0(0x163)]({
            input: $(steps[x])
              [_0x8046d0(0x197)](_0x8046d0(0xc8))
              ["attr"](_0x8046d0(0x16c)),
          }))),
      $(steps[x])
        [_0x8046d0(0x197)](_0x8046d0(0x181))
        [_0x8046d0(0x164)](function (_0x298f6c) {
          const _0x105456 = _0x8046d0;
          var _0x2b33c8 = $(this)["attr"](_0x105456(0x16c));
          $("input:radio[name=\x22" + _0x2b33c8 + _0x105456(0x165))[
            _0x105456(0x184)
          ] == 0x0
            ? (!empReqRadio[_0x105456(0x197)](
                (_0x2f1b12) => _0x2f1b12[_0x105456(0xef)] === _0x298f6c
              ) && empReqRadio[_0x105456(0x163)]({ input: _0x298f6c }),
              unfilledArr[_0x105456(0x163)]({ input: $(this)["attr"]("name") }))
            : (empReqRadio = empReqRadio[_0x105456(0x141)](
                (_0x44ec55) => _0x44ec55[_0x105456(0xef)] !== _0x298f6c
              )),
            empReqRadio[_0x105456(0x184)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x8046d0(0xd4))
        [_0x8046d0(0x164)](function (_0x1da6a5) {
          const _0x474dd5 = _0x8046d0;
          let _0x19426d = $(this)[_0x474dd5(0xf0)]()[_0x474dd5(0x184)],
            _0x53366f = $(this)[_0x474dd5(0x12c)]("min-character")
              ? $(this)[_0x474dd5(0x12c)]("min-character")
              : 0x0;
          $(this)[_0x474dd5(0xf0)]() !== "" && _0x19426d >= _0x53366f
            ? (empReqInput = empReqInput[_0x474dd5(0x141)](
                (_0x2e95b4) => _0x2e95b4[_0x474dd5(0xef)] !== _0x1da6a5
              ))
            : (!empReqInput[_0x474dd5(0x197)](
                (_0x464b6) => _0x464b6[_0x474dd5(0xef)] === _0x1da6a5
              ) && empReqInput[_0x474dd5(0x163)]({ input: _0x1da6a5 }),
              unfilledArr[_0x474dd5(0x163)]({
                input: $(this)[_0x474dd5(0xf9)]("name"),
              })),
            empReqInput[_0x474dd5(0x184)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x8046d0(0x197)](_0x8046d0(0x1a0))
        ["each"](function (_0x5d7fd9) {
          const _0x3a6a25 = _0x8046d0;
          $(this)[_0x3a6a25(0xf0)]() !== ""
            ? (empReqDate = empReqDate[_0x3a6a25(0x141)](
                (_0x28f1d0) => _0x28f1d0[_0x3a6a25(0xef)] !== _0x5d7fd9
              ))
            : (!empReqDate[_0x3a6a25(0x197)](
                (_0x2d04c7) => _0x2d04c7[_0x3a6a25(0xef)] === _0x5d7fd9
              ) && empReqDate[_0x3a6a25(0x163)]({ input: _0x5d7fd9 }),
              unfilledArr["push"]({
                input: $(this)[_0x3a6a25(0xf9)](_0x3a6a25(0x16c)),
              })),
            empReqDate[_0x3a6a25(0x184)] === 0x0
              ? (dateFilled = !![])
              : (dateFilled = ![]);
        }),
      $(steps[x])
        [_0x8046d0(0x197)](_0x8046d0(0x148))
        [_0x8046d0(0x164)](function (_0x1510eb) {
          const _0xd39126 = _0x8046d0;
          if ($(this)[_0xd39126(0xf0)]() !== "") {
            let _0x3b02f3 = $(this)[_0xd39126(0xf0)]()[_0xd39126(0x184)],
              _0x52f609 = $(this)[_0xd39126(0x12c)](_0xd39126(0x19c))
                ? $(this)[_0xd39126(0x12c)]("min-character")
                : 0x0;
            if ($(this)[_0xd39126(0x12c)](_0xd39126(0x103))) {
              var _0x2a70ee = phoneAutoFormat(
                $(this)[_0xd39126(0x12c)](_0xd39126(0x103))
              );
              $(this)[_0xd39126(0xf0)](_0x2a70ee($(this)[_0xd39126(0xf0)]()));
            }
            phoneValidation($(this)[_0xd39126(0xf0)](), _0x3b02f3, _0x52f609)
              ? (empReqTel = empReqTel[_0xd39126(0x141)](
                  (_0x4e19fb) => _0x4e19fb[_0xd39126(0xef)] !== _0x1510eb
                ))
              : empReqTel[_0xd39126(0x163)]({ input: _0x1510eb });
          } else !empReqTel[_0xd39126(0x197)]((_0x5b05aa) => _0x5b05aa[_0xd39126(0xef)] === _0x1510eb) && empReqTel["push"]({ input: _0x1510eb }), unfilledArr[_0xd39126(0x163)]({ input: $(this)[_0xd39126(0xf9)](_0xd39126(0x16c)) });
          empReqTel[_0xd39126(0x184)] === 0x0
            ? (telFilled = !![])
            : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x8046d0(0x197)](_0x8046d0(0xc5))
        [_0x8046d0(0x164)](function (_0x2beed9) {
          const _0x135872 = _0x8046d0;
          $(this)[_0x135872(0xf0)]() !== ""
            ? (empReqFile = empReqFile[_0x135872(0x141)](
                (_0x506ee5) => _0x506ee5[_0x135872(0xef)] !== _0x2beed9
              ))
            : (!empReqFile[_0x135872(0x197)](
                (_0xa9a31e) => _0xa9a31e["input"] === _0x2beed9
              ) && empReqFile[_0x135872(0x163)]({ input: _0x2beed9 }),
              unfilledArr["push"]({
                input: $(this)[_0x135872(0xf9)](_0x135872(0x16c)),
              })),
            empReqFile[_0x135872(0x184)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x8046d0(0x197)](":input[type=\x22number\x22][required]")
        [_0x8046d0(0x164)](function (_0x5e7132) {
          const _0x4b1bc7 = _0x8046d0;
          let _0x22a5f0 = $(this)[_0x4b1bc7(0xf0)]()["length"],
            _0x271dba = $(this)[_0x4b1bc7(0x12c)](_0x4b1bc7(0x19c))
              ? $(this)[_0x4b1bc7(0x12c)](_0x4b1bc7(0x19c))
              : 0x0;
          $(this)[_0x4b1bc7(0xf0)]() !== "" && _0x22a5f0 >= _0x271dba
            ? (empReqNum = empReqNum[_0x4b1bc7(0x141)](
                (_0x3833e1) => _0x3833e1["input"] !== _0x5e7132
              ))
            : (!empReqNum[_0x4b1bc7(0x197)](
                (_0x8538a6) => _0x8538a6[_0x4b1bc7(0xef)] === _0x5e7132
              ) && empReqNum["push"]({ input: _0x5e7132 }),
              unfilledArr["push"]({
                input: $(this)[_0x4b1bc7(0xf9)](_0x4b1bc7(0x16c)),
              })),
            empReqNum["length"] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x8046d0(0x197)]("select[required]")
        [_0x8046d0(0x164)](function (_0x5a72fb) {
          const _0x52da1f = _0x8046d0;
          let _0x1ef0a8 = $(this)[_0x52da1f(0xf0)]();
          _0x1ef0a8 === "" && (_0x1ef0a8 = null),
            _0x1ef0a8 != null
              ? (empReqSelect = empReqSelect[_0x52da1f(0x141)](
                  (_0x3dace2) => _0x3dace2["input"] !== _0x5a72fb
                ))
              : (!empReqSelect[_0x52da1f(0x197)](
                  (_0x35708b) => _0x35708b[_0x52da1f(0xef)] === _0x5a72fb
                ) && empReqSelect["push"]({ input: _0x5a72fb }),
                unfilledArr[_0x52da1f(0x163)]({
                  input: $(this)[_0x52da1f(0xf9)]("name"),
                })),
            empReqSelect[_0x52da1f(0x184)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x8046d0(0x197)]("textarea[required]")
        [_0x8046d0(0x164)](function (_0x36d5d) {
          const _0x49a0b3 = _0x8046d0;
          let _0x5e9210 = $(this)[_0x49a0b3(0xf0)]()["length"],
            _0x5ad5c1 = $(this)[_0x49a0b3(0x12c)](_0x49a0b3(0x19c))
              ? $(this)["data"](_0x49a0b3(0x19c))
              : 0x0;
          $(this)[_0x49a0b3(0xf0)]() !== "" && _0x5e9210 >= _0x5ad5c1
            ? (empReqTextarea = empReqTextarea[_0x49a0b3(0x141)](
                (_0x195b84) => _0x195b84[_0x49a0b3(0xef)] !== _0x36d5d
              ))
            : (!empReqTextarea["find"](
                (_0x29aff8) => _0x29aff8[_0x49a0b3(0xef)] === _0x36d5d
              ) && empReqTextarea["push"]({ input: _0x36d5d }),
              unfilledArr[_0x49a0b3(0x163)]({
                input: $(this)[_0x49a0b3(0xf9)]("name"),
              })),
            empReqTextarea[_0x49a0b3(0x184)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x8046d0(0x131))
        [_0x8046d0(0x164)](function () {
          const _0x9d5b94 = _0x8046d0;
          $(this)["val"]() !== ""
            ? validateEmail(
                $(this)["val"](),
                $(this)["data"]("block-domain"),
                $(this)[_0x9d5b94(0xf9)](_0x9d5b94(0x16c))
              )
            : ((emailFilled = ![]),
              unfilledArr[_0x9d5b94(0x163)]({
                input: $(this)["attr"](_0x9d5b94(0x16c)),
              }));
        });
  else {
    if ($(steps[x])["data"](_0x8046d0(0x12b)))
      (answer = $(steps[x])
        [_0x8046d0(0x197)](_0x8046d0(0x11d))
        [_0x8046d0(0x12c)](_0x8046d0(0x12a))),
        (selections = selections[_0x8046d0(0x141)](
          (_0x461177) => _0x461177[_0x8046d0(0xaf)] !== x
        )),
        selections["push"]({ step: x, selected: answer });
    else
      $(steps[x])
        [_0x8046d0(0x197)]("[data-answer]:visible")
        [_0x8046d0(0x12c)](_0x8046d0(0x12b)) &&
        ((answer = $(steps[x])
          [_0x8046d0(0x197)]("[data-answer]:visible")
          [_0x8046d0(0x12c)](_0x8046d0(0x12a))),
        (selections = selections[_0x8046d0(0x141)](
          (_0x100db8) => _0x100db8[_0x8046d0(0xaf)] !== x
        )),
        selections[_0x8046d0(0x163)]({ step: x, selected: answer }));
    $(steps[x])
      [_0x8046d0(0x197)](_0x8046d0(0xfb))
      ["find"](_0x8046d0(0xc9))
      ["is"]("[type=\x22checkbox\x22]") &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])[_0x8046d0(0x197)](_0x8046d0(0xc8))[_0x8046d0(0x184)]
        ? $(steps[x])
            [_0x8046d0(0x197)](_0x8046d0(0xc8))
            [_0x8046d0(0x164)](function () {
              const _0x4ff7c2 = _0x8046d0;
              $(this)["is"](_0x4ff7c2(0x175))
                ? $(steps[x])[_0x4ff7c2(0x197)](_0x4ff7c2(0x125))[
                    _0x4ff7c2(0x184)
                  ] < 0x1 &&
                  ((skipTo = undefined),
                  $(this)
                    [_0x4ff7c2(0xff)](_0x4ff7c2(0xe1))
                    [_0x4ff7c2(0x12c)]("skip-to") &&
                    (skipTo = $(this)
                      ["parents"](_0x4ff7c2(0xe1))
                      [_0x4ff7c2(0x12c)](_0x4ff7c2(0x1a5))),
                  $(this)
                    [_0x4ff7c2(0xff)](_0x4ff7c2(0x11d))
                    [_0x4ff7c2(0xf9)]("data-go-to") &&
                    ((answer = $(this)
                      [_0x4ff7c2(0xff)](_0x4ff7c2(0x11d))
                      [_0x4ff7c2(0xf9)](_0x4ff7c2(0xd1))),
                    (selections = selections[_0x4ff7c2(0x141)](
                      (_0x4ad100) => _0x4ad100[_0x4ff7c2(0xaf)] !== x
                    )),
                    selections[_0x4ff7c2(0x163)]({ step: x, selected: answer }),
                    skipTo &&
                      (selections[_0x4ff7c2(0x163)]({
                        step: skipTo - 0x2,
                        selected: answer,
                      }),
                      (objIndex = selections[_0x4ff7c2(0xf1)](
                        (_0x23c78f) => _0x23c78f[_0x4ff7c2(0xaf)] === x
                      )),
                      (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                      (selections[objIndex]["backTo"] = x))),
                  (checkboxFilled = !![]),
                  $(steps[x])[_0x4ff7c2(0x197)](_0x4ff7c2(0xd0))[
                    _0x4ff7c2(0x184)
                  ] >=
                    $(steps[x])[_0x4ff7c2(0x197)](_0x4ff7c2(0x108))[
                      _0x4ff7c2(0x184)
                    ] &&
                    resetInputErrorMessage(
                      $(steps[x])
                        [_0x4ff7c2(0x197)](_0x4ff7c2(0xc8))
                        ["attr"](_0x4ff7c2(0x16c))
                    ))
                : ((checkboxFilled = ![]),
                  unfilledArr["push"]({
                    input: $(this)[_0x4ff7c2(0xf9)](_0x4ff7c2(0x16c)),
                  }));
            })
        : $(steps[x])
            [_0x8046d0(0x197)](_0x8046d0(0xfb))
            ["find"](_0x8046d0(0x18a))["length"] >= checkCount
        ? ($(steps[x])
            [_0x8046d0(0x197)](_0x8046d0(0xfb))
            [_0x8046d0(0x197)](":input[type=\x22checkbox\x22]")
            ["parents"](_0x8046d0(0x11d))
            [_0x8046d0(0xf9)]("data-go-to") &&
            ((skipTo = undefined),
            $(steps[x])
              [_0x8046d0(0x197)](_0x8046d0(0xfb))
              ["find"](":input[type=\x22checkbox\x22]")
              [_0x8046d0(0xff)](_0x8046d0(0xe1))
              ["attr"]("data-skip-to") &&
              (skipTo = $(steps[x])
                [_0x8046d0(0x197)]("[data-answer]:visible")
                [_0x8046d0(0x197)](_0x8046d0(0x18a))
                [_0x8046d0(0xff)](_0x8046d0(0xe1))
                ["attr"](_0x8046d0(0x11c))),
            (answer = $(steps[x])
              [_0x8046d0(0x197)]("[data-answer]:visible")
              [_0x8046d0(0x197)](_0x8046d0(0xc8))
              [_0x8046d0(0xff)](_0x8046d0(0x11d))
              [_0x8046d0(0xf9)](_0x8046d0(0xd1))),
            (selections = selections["filter"](
              (_0x2ed044) => _0x2ed044[_0x8046d0(0xaf)] !== x
            )),
            selections[_0x8046d0(0x163)]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0x8046d0(0x163)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections["findIndex"](
                (_0x2d46a2) => _0x2d46a2[_0x8046d0(0xaf)] === x
              )),
              (selections[objIndex][_0x8046d0(0x14d)] = parseInt(skipTo) - 0x1),
              (selections[objIndex]["backTo"] = x))),
          (selections = selections["filter"](
            (_0x1503eb) => _0x1503eb["step"] !== x
          )),
          selections["push"]({ step: x, selected: answer }),
          (checkboxFilled = !![]),
          $(steps[x])[_0x8046d0(0x197)](_0x8046d0(0xd0))[_0x8046d0(0x184)] >=
            $(steps[x])[_0x8046d0(0x197)](_0x8046d0(0x108))[_0x8046d0(0x184)] &&
            resetInputErrorMessage(
              $(steps[x])
                [_0x8046d0(0x197)](":input[type=\x22checkbox\x22]")
                [_0x8046d0(0xf9)](_0x8046d0(0x16c))
            ))
        : ((checkboxFilled = ![]),
          $(steps[x])
            ["find"](_0x8046d0(0x108))
            [_0x8046d0(0x164)](function () {
              const _0x14fef8 = _0x8046d0;
              $(this)[_0x14fef8(0x11f)](_0x14fef8(0x175)) &&
                unfilledArr[_0x14fef8(0x163)]({
                  input: $(this)["attr"](_0x14fef8(0x16c)),
                });
            }))),
      $(steps[x])
        [_0x8046d0(0x197)]("[data-answer]:visible")
        [_0x8046d0(0x197)](_0x8046d0(0x181))
        [_0x8046d0(0x164)](function (_0x596a39) {
          const _0x32d181 = _0x8046d0;
          var _0x210ce4 = $(this)[_0x32d181(0xf9)]("name");
          $("input:radio[name=\x22" + _0x210ce4 + "\x22]:checked")[
            _0x32d181(0x184)
          ] == 0x0
            ? (!empReqRadio["find"](
                (_0x57c5ea) => _0x57c5ea[_0x32d181(0xef)] === _0x596a39
              ) && empReqRadio["push"]({ input: _0x596a39 }),
              unfilledArr[_0x32d181(0x163)]({
                input: $(this)[_0x32d181(0xf9)]("name"),
              }))
            : (empReqRadio = empReqRadio[_0x32d181(0x141)](
                (_0x487b09) => _0x487b09["input"] !== _0x596a39
              )),
            empReqRadio[_0x32d181(0x184)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0x8046d0(0x197)](_0x8046d0(0xfb))
        [_0x8046d0(0x197)](_0x8046d0(0xd4))
        ["each"](function (_0x43c8cc) {
          const _0x2647dd = _0x8046d0;
          let _0x8418c7 = $(this)[_0x2647dd(0xf0)]()["length"],
            _0x3b8609 = $(this)[_0x2647dd(0x12c)]("min-character")
              ? $(this)["data"]("min-character")
              : 0x0;
          $(this)["val"]() !== "" && _0x8418c7 >= _0x3b8609
            ? (empReqInput = empReqInput[_0x2647dd(0x141)](
                (_0x4c5218) => _0x4c5218["input"] !== _0x43c8cc
              ))
            : (!empReqInput[_0x2647dd(0x197)](
                (_0x2165b9) => _0x2165b9["input"] === _0x43c8cc
              ) && empReqInput[_0x2647dd(0x163)]({ input: _0x43c8cc }),
              unfilledArr[_0x2647dd(0x163)]({
                input: $(this)[_0x2647dd(0xf9)](_0x2647dd(0x16c)),
              })),
            empReqInput[_0x2647dd(0x184)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x8046d0(0x197)](_0x8046d0(0xfb))
        [_0x8046d0(0x197)](":input[type=\x22text\x22]")
        ["each"](function (_0x862a04) {
          const _0x5bcdab = _0x8046d0;
          (skipTo = undefined),
            $(this)
              [_0x5bcdab(0xff)](_0x5bcdab(0xe1))
              [_0x5bcdab(0x12c)](_0x5bcdab(0x1a5)) !== "" &&
              (skipTo = $(this)
                [_0x5bcdab(0xff)](_0x5bcdab(0xe1))
                [_0x5bcdab(0x12c)](_0x5bcdab(0x1a5))),
            $(this)[_0x5bcdab(0xff)]("[data-go-to]")["attr"](_0x5bcdab(0xd1)) &&
              ((answer = $(this)
                [_0x5bcdab(0xff)](_0x5bcdab(0x11d))
                [_0x5bcdab(0xf9)](_0x5bcdab(0xd1))),
              (selections = selections[_0x5bcdab(0x141)](
                (_0x36fd43) => _0x36fd43[_0x5bcdab(0xaf)] !== x
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x5bcdab(0x163)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x5bcdab(0xf1)](
                  (_0x3f7e80) => _0x3f7e80["step"] === x
                )),
                (selections[objIndex][_0x5bcdab(0x14d)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x5bcdab(0xe5)] = x)));
        }),
      $(steps[x])
        [_0x8046d0(0x197)](_0x8046d0(0xfb))
        [_0x8046d0(0x197)](_0x8046d0(0x1a0))
        [_0x8046d0(0x164)](function (_0xaaf6bb) {
          const _0x51de92 = _0x8046d0;
          $(this)["val"]() !== ""
            ? (empReqDate = empReqDate[_0x51de92(0x141)](
                (_0x476b55) => _0x476b55[_0x51de92(0xef)] !== _0xaaf6bb
              ))
            : (!empReqDate[_0x51de92(0x197)](
                (_0x3aa972) => _0x3aa972[_0x51de92(0xef)] === _0xaaf6bb
              ) && empReqDate[_0x51de92(0x163)]({ input: _0xaaf6bb }),
              unfilledArr[_0x51de92(0x163)]({
                input: $(this)[_0x51de92(0xf9)](_0x51de92(0x16c)),
              })),
            empReqDate[_0x51de92(0x184)] === 0x0
              ? (dateFilled = !![])
              : (dateFilled = ![]);
        }),
      $(steps[x])
        [_0x8046d0(0x197)]("[data-answer]:visible")
        [_0x8046d0(0x197)](_0x8046d0(0x135))
        [_0x8046d0(0x164)](function (_0x1464f5) {
          const _0x41a42f = _0x8046d0;
          (skipTo = undefined),
            $(this)
              [_0x41a42f(0xff)](_0x41a42f(0xe1))
              [_0x41a42f(0x12c)]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0x41a42f(0xff)](_0x41a42f(0xe1))
                [_0x41a42f(0x12c)](_0x41a42f(0x1a5))),
            $(this)
              [_0x41a42f(0xff)](_0x41a42f(0x11d))
              [_0x41a42f(0xf9)](_0x41a42f(0xd1)) &&
              ((answer = $(this)
                [_0x41a42f(0xff)](_0x41a42f(0x11d))
                [_0x41a42f(0xf9)](_0x41a42f(0xd1))),
              (selections = selections["filter"](
                (_0x3ffb47) => _0x3ffb47["step"] !== x
              )),
              selections[_0x41a42f(0x163)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x41a42f(0x163)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x41a42f(0xf1)](
                  (_0x31712e) => _0x31712e[_0x41a42f(0xaf)] === x
                )),
                (selections[objIndex][_0x41a42f(0x14d)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x41a42f(0xe5)] = x)));
        }),
      $(steps[x])
        [_0x8046d0(0x197)](_0x8046d0(0xfb))
        [_0x8046d0(0x197)](_0x8046d0(0x149))
        [_0x8046d0(0x164)](function (_0x2ae2c4) {
          const _0x4ef0e1 = _0x8046d0;
          let _0x3b0c0a = $(this)["val"]()["length"],
            _0x113267 = $(this)[_0x4ef0e1(0x12c)]("min-character")
              ? $(this)[_0x4ef0e1(0x12c)]("min-character")
              : 0x0;
          $(this)["val"]() !== "" && _0x3b0c0a >= _0x113267
            ? (empReqNum = empReqNum[_0x4ef0e1(0x141)](
                (_0x5b9599) => _0x5b9599[_0x4ef0e1(0xef)] !== _0x2ae2c4
              ))
            : (!empReqNum["find"](
                (_0xa1bea5) => _0xa1bea5[_0x4ef0e1(0xef)] === _0x2ae2c4
              ) && empReqNum[_0x4ef0e1(0x163)]({ input: _0x2ae2c4 }),
              unfilledArr["push"]({ input: $(this)[_0x4ef0e1(0xf9)]("name") })),
            empReqNum[_0x4ef0e1(0x184)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x8046d0(0x197)](_0x8046d0(0xfb))
        [_0x8046d0(0x197)](_0x8046d0(0x18d))
        [_0x8046d0(0x164)](function (_0x3e1aa8) {
          const _0xcd336 = _0x8046d0;
          (skipTo = undefined),
            $(this)
              [_0xcd336(0xff)](_0xcd336(0xe1))
              [_0xcd336(0x12c)](_0xcd336(0x1a5)) !== "" &&
              (skipTo = $(this)
                [_0xcd336(0xff)](_0xcd336(0xe1))
                [_0xcd336(0x12c)](_0xcd336(0x1a5))),
            $(this)[_0xcd336(0xff)]("[data-go-to]")["attr"]("data-go-to") &&
              ((answer = $(this)
                ["parents"](_0xcd336(0x11d))
                [_0xcd336(0xf9)](_0xcd336(0xd1))),
              (selections = selections[_0xcd336(0x141)](
                (_0x5223e0) => _0x5223e0[_0xcd336(0xaf)] !== x
              )),
              selections[_0xcd336(0x163)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0xcd336(0x163)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0xcd336(0xf1)](
                  (_0x4d99e8) => _0x4d99e8[_0xcd336(0xaf)] === x
                )),
                (selections[objIndex][_0xcd336(0x14d)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0xcd336(0xe5)] = x)));
        }),
      $(steps[x])
        ["find"](_0x8046d0(0xfb))
        ["find"](_0x8046d0(0x148))
        [_0x8046d0(0x164)](function (_0x194dd9) {
          const _0x48c1cd = _0x8046d0;
          if ($(this)[_0x48c1cd(0xf0)]() !== "") {
            let _0x22f1ff = $(this)["val"]()[_0x48c1cd(0x184)],
              _0x92d69a = $(this)[_0x48c1cd(0x12c)](_0x48c1cd(0x19c))
                ? $(this)["data"](_0x48c1cd(0x19c))
                : 0x0;
            if ($(this)["data"]("phone-autoformat")) {
              var _0x1ed977 = phoneAutoFormat(
                $(this)[_0x48c1cd(0x12c)]("phone-autoformat")
              );
              $(this)[_0x48c1cd(0xf0)](_0x1ed977($(this)[_0x48c1cd(0xf0)]()));
            }
            phoneValidation($(this)[_0x48c1cd(0xf0)](), _0x22f1ff, _0x92d69a)
              ? (empReqTel = empReqTel["filter"](
                  (_0x4d397d) => _0x4d397d[_0x48c1cd(0xef)] !== _0x194dd9
                ))
              : empReqTel[_0x48c1cd(0x163)]({ input: _0x194dd9 });
          } else !empReqTel[_0x48c1cd(0x197)]((_0x3f069b) => _0x3f069b["input"] === _0x194dd9) && empReqTel[_0x48c1cd(0x163)]({ input: _0x194dd9 }), unfilledArr["push"]({ input: $(this)[_0x48c1cd(0xf9)](_0x48c1cd(0x16c)) });
          empReqTel[_0x48c1cd(0x184)] === 0x0
            ? (telFilled = !![])
            : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x8046d0(0x197)]("[data-answer]:visible")
        [_0x8046d0(0x197)](":input[type=\x22tel\x22]")
        [_0x8046d0(0x164)](function (_0x5f6791) {
          const _0x3175d = _0x8046d0;
          (skipTo = undefined),
            $(this)["parents"](_0x3175d(0xe1))["data"]("skip-to") !== "" &&
              (skipTo = $(this)
                ["parents"]("[data-skip-to]")
                [_0x3175d(0x12c)](_0x3175d(0x1a5))),
            $(this)
              ["parents"]("[data-go-to]")
              [_0x3175d(0xf9)](_0x3175d(0xd1)) &&
              ((answer = $(this)
                ["parents"]("[data-go-to]")
                [_0x3175d(0xf9)](_0x3175d(0xd1))),
              (selections = selections[_0x3175d(0x141)](
                (_0x237a2c) => _0x237a2c["step"] !== x
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x3175d(0x163)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x3175d(0xf1)](
                  (_0x34207a) => _0x34207a[_0x3175d(0xaf)] === x
                )),
                (selections[objIndex][_0x3175d(0x14d)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x3175d(0xe5)] = x)));
        }),
      $(steps[x])
        [_0x8046d0(0x197)](_0x8046d0(0xfb))
        ["find"](_0x8046d0(0xc5))
        [_0x8046d0(0x164)](function (_0x63b10a) {
          const _0x183259 = _0x8046d0;
          $(this)["val"]() !== ""
            ? (empReqFile = empReqFile["filter"](
                (_0x1e852b) => _0x1e852b[_0x183259(0xef)] !== _0x63b10a
              ))
            : (!empReqFile[_0x183259(0x197)](
                (_0x32134d) => _0x32134d["input"] === _0x63b10a
              ) && empReqFile[_0x183259(0x163)]({ input: _0x63b10a }),
              unfilledArr[_0x183259(0x163)]({
                input: $(this)["attr"](_0x183259(0x16c)),
              })),
            empReqFile["length"] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x8046d0(0x197)](_0x8046d0(0xfb))
        [_0x8046d0(0x197)](":input[type=\x22file\x22]")
        [_0x8046d0(0x164)](function (_0x21b8b9) {
          const _0x48025e = _0x8046d0;
          (skipTo = undefined),
            $(this)
              [_0x48025e(0xff)](_0x48025e(0xe1))
              [_0x48025e(0x12c)](_0x48025e(0x1a5)) !== "" &&
              (skipTo = $(this)
                [_0x48025e(0xff)](_0x48025e(0xe1))
                [_0x48025e(0x12c)](_0x48025e(0x1a5))),
            $(this)
              [_0x48025e(0xff)]("[data-go-to]")
              [_0x48025e(0xf9)](_0x48025e(0xd1)) &&
              ((answer = $(this)
                ["parents"](_0x48025e(0x11d))
                [_0x48025e(0xf9)](_0x48025e(0xd1))),
              (selections = selections[_0x48025e(0x141)](
                (_0x58e02d) => _0x58e02d[_0x48025e(0xaf)] !== x
              )),
              selections[_0x48025e(0x163)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x48025e(0x163)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x48025e(0xf1)](
                  (_0x19b16f) => _0x19b16f[_0x48025e(0xaf)] === x
                )),
                (selections[objIndex][_0x48025e(0x14d)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        ["find"]("[data-answer]:visible")
        [_0x8046d0(0x197)](_0x8046d0(0xe4))
        [_0x8046d0(0x164)](function (_0xa385cc) {
          const _0x2bfb03 = _0x8046d0;
          $(this)[_0x2bfb03(0xf0)]() !== ""
            ? (empReqSelect = empReqSelect["filter"](
                (_0x29ec5e) => _0x29ec5e["input"] !== _0xa385cc
              ))
            : (!empReqSelect[_0x2bfb03(0x197)](
                (_0x53cab6) => _0x53cab6[_0x2bfb03(0xef)] === _0xa385cc
              ) && empReqSelect[_0x2bfb03(0x163)]({ input: _0xa385cc }),
              unfilledArr[_0x2bfb03(0x163)]({
                input: $(this)[_0x2bfb03(0xf9)](_0x2bfb03(0x16c)),
              })),
            empReqSelect[_0x2bfb03(0x184)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x8046d0(0x197)]("[data-answer]:visible")
        [_0x8046d0(0x197)]("select")
        [_0x8046d0(0x164)](function (_0x44bd73) {
          const _0x38bb4c = _0x8046d0;
          (skipTo = undefined),
            $(this)
              [_0x38bb4c(0xff)]("[data-skip-to]")
              [_0x38bb4c(0x12c)]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0x38bb4c(0xff)]("[data-skip-to]")
                [_0x38bb4c(0x12c)](_0x38bb4c(0x1a5))),
            $(this)
              [_0x38bb4c(0xff)](_0x38bb4c(0x11d))
              [_0x38bb4c(0xf9)](_0x38bb4c(0xd1)) &&
              ((answer = $(this)
                [_0x38bb4c(0xff)](_0x38bb4c(0x11d))
                [_0x38bb4c(0xf9)](_0x38bb4c(0xd1))),
              (selections = selections[_0x38bb4c(0x141)](
                (_0x36f3c8) => _0x36f3c8[_0x38bb4c(0xaf)] !== x
              )),
              selections[_0x38bb4c(0x163)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0x38bb4c(0xf1)](
                  (_0x3ed577) => _0x3ed577[_0x38bb4c(0xaf)] === x
                )),
                (selections[objIndex][_0x38bb4c(0x14d)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x38bb4c(0xe5)] = x)));
        }),
      $(steps[x])
        [_0x8046d0(0x197)](_0x8046d0(0xfb))
        ["find"]("textarea[required]")
        ["each"](function (_0x714c89) {
          const _0x37582c = _0x8046d0;
          let _0x493ab4 = $(this)["val"]()["length"],
            _0x1fa12c = $(this)[_0x37582c(0x12c)](_0x37582c(0x19c))
              ? $(this)[_0x37582c(0x12c)](_0x37582c(0x19c))
              : 0x0;
          $(this)["val"]() !== "" && _0x493ab4 >= _0x1fa12c
            ? (empReqTextarea = empReqTextarea["filter"](
                (_0x57bab3) => _0x57bab3[_0x37582c(0xef)] !== _0x714c89
              ))
            : (!empReqTextarea[_0x37582c(0x197)](
                (_0x197042) => _0x197042[_0x37582c(0xef)] === _0x714c89
              ) && empReqTextarea[_0x37582c(0x163)]({ input: _0x714c89 }),
              unfilledArr[_0x37582c(0x163)]({
                input: $(this)[_0x37582c(0xf9)](_0x37582c(0x16c)),
              })),
            empReqTextarea[_0x37582c(0x184)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x8046d0(0x197)](_0x8046d0(0xfb))
        [_0x8046d0(0x197)](_0x8046d0(0x173))
        [_0x8046d0(0x164)](function (_0x339d7c) {
          const _0x475ffe = _0x8046d0;
          (skipTo = undefined),
            $(this)
              [_0x475ffe(0xff)](_0x475ffe(0xe1))
              [_0x475ffe(0x12c)](_0x475ffe(0x1a5)) !== "" &&
              (skipTo = $(this)
                [_0x475ffe(0xff)](_0x475ffe(0xe1))
                ["data"](_0x475ffe(0x1a5))),
            $(this)
              [_0x475ffe(0xff)]("[data-go-to]")
              [_0x475ffe(0xf9)](_0x475ffe(0xd1)) &&
              ((answer = $(this)
                [_0x475ffe(0xff)]("[data-go-to]")
                [_0x475ffe(0xf9)](_0x475ffe(0xd1))),
              (selections = selections[_0x475ffe(0x141)](
                (_0x11cd58) => _0x11cd58[_0x475ffe(0xaf)] !== x
              )),
              selections[_0x475ffe(0x163)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0x475ffe(0xf1)](
                  (_0x60bbfb) => _0x60bbfb[_0x475ffe(0xaf)] === x
                )),
                (selections[objIndex][_0x475ffe(0x14d)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x475ffe(0xe5)] = x)));
        }),
      $(steps[x])
        [_0x8046d0(0x197)]("[data-answer]:visible")
        [_0x8046d0(0x197)](_0x8046d0(0x131))
        [_0x8046d0(0x164)](function (_0x268a67) {
          const _0x1ba5a3 = _0x8046d0;
          $(this)[_0x1ba5a3(0xf0)]() !== ""
            ? validateEmail(
                $(this)["val"](),
                $(this)[_0x1ba5a3(0x12c)](_0x1ba5a3(0x14f)),
                $(this)["attr"]("name")
              )
            : ((emailFilled = ![]),
              unfilledArr[_0x1ba5a3(0x163)]({
                input: $(this)["attr"](_0x1ba5a3(0x16c)),
              }));
        }),
      $(steps[x])
        [_0x8046d0(0x197)]("[data-answer]:visible")
        ["find"](_0x8046d0(0x172))
        [_0x8046d0(0x164)](function (_0x4c627a) {
          const _0x11a0a1 = _0x8046d0;
          (skipTo = undefined),
            $(this)
              [_0x11a0a1(0xff)]("[data-skip-to]")
              [_0x11a0a1(0x12c)](_0x11a0a1(0x1a5)) !== "" &&
              (skipTo = $(this)
                ["parents"]("[data-skip-to]")
                ["data"](_0x11a0a1(0x1a5))),
            $(this)
              [_0x11a0a1(0xff)](_0x11a0a1(0x11d))
              [_0x11a0a1(0xf9)](_0x11a0a1(0xd1)) &&
              ((answer = $(this)
                [_0x11a0a1(0xff)](_0x11a0a1(0x11d))
                [_0x11a0a1(0xf9)](_0x11a0a1(0xd1))),
              (selections = selections[_0x11a0a1(0x141)](
                (_0x5e324f) => _0x5e324f[_0x11a0a1(0xaf)] !== x
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x11a0a1(0x163)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x11a0a1(0xf1)](
                  (_0x12c83f) => _0x12c83f[_0x11a0a1(0xaf)] === x
                )),
                (selections[objIndex][_0x11a0a1(0x14d)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x11a0a1(0xe5)] = x)));
        });
  }
  $(steps[x])[_0x8046d0(0x197)](_0x8046d0(0x19a))["is"](_0x8046d0(0x175)) &&
    ((selArr = []),
    $(steps)
      [_0x8046d0(0x197)](_0x8046d0(0x121))
      [_0x8046d0(0x164)](function (_0x4b94fd, _0x2d095f) {
        const _0x161fc6 = _0x8046d0;
        selArr["push"]({
          selected: $(this)[_0x161fc6(0x12c)](_0x161fc6(0xcf)),
        });
      }),
    (selString = []),
    selArr[_0x8046d0(0x147)]((_0x3f4fad) =>
      selString[_0x8046d0(0x163)](_0x3f4fad[_0x8046d0(0xcf)])
    ),
    (selections = selections[_0x8046d0(0x141)](
      (_0x20ab70) => _0x20ab70[_0x8046d0(0xaf)] !== x
    )),
    $(steps[x])
      [_0x8046d0(0x197)](_0x8046d0(0xfb))
      [_0x8046d0(0x197)](_0x8046d0(0x109))
      ["each"](function () {
        const _0x186257 = _0x8046d0;
        skipTo = undefined;
        if ($(this)["parents"]("[data-skip-to]")["data"](_0x186257(0x1a5)))
          skipTo = $(this)["parents"](_0x186257(0xe1))["data"]("skip-to");
        else
          $(this)[_0x186257(0x12c)](_0x186257(0x1a5)) &&
            (skipTo = $(this)[_0x186257(0x12c)]("skip-to"));
        if ($(this)[_0x186257(0x12c)](_0x186257(0x12a)))
          (answer = $(this)[_0x186257(0xf9)](_0x186257(0xd1))),
            console[_0x186257(0xd8)](answer, selections),
            selections[_0x186257(0x163)]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0x186257(0x163)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0x186257(0xf1)](
                (_0x3218f9) => _0x3218f9[_0x186257(0xaf)] === x
              )),
              (selections[objIndex][_0x186257(0x14d)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x186257(0xe5)] = x));
        else
          $(this)
            [_0x186257(0xff)](_0x186257(0x11d))
            [_0x186257(0x12c)](_0x186257(0x12a)) &&
            ((answer = $(this)
              [_0x186257(0xff)](_0x186257(0x11d))
              [_0x186257(0x12c)]("go-to")),
            selections[_0x186257(0x163)]({ step: x, selected: answer }),
            skipTo &&
              (selections["push"]({ step: skipTo - 0x2, selected: answer }),
              (objIndex = selections[_0x186257(0xf1)](
                (_0xb903a6) => _0xb903a6[_0x186257(0xaf)] === x
              )),
              (selections[objIndex][_0x186257(0x14d)] = parseInt(skipTo) - 0x1),
              (selections[objIndex]["backTo"] = x)));
      }),
    console[_0x8046d0(0xd8)](),
    logicExtra
      ? ($(steps[x])
          [_0x8046d0(0x197)](_0x8046d0(0xfb))
          [_0x8046d0(0x197)](_0x8046d0(0x143))
          ["data"](_0x8046d0(0x15a)) === !![] ||
          $(steps[x])
            [_0x8046d0(0x197)]("[data-answer][data-radio-skip]:visible")
            [_0x8046d0(0x12c)](_0x8046d0(0x15a)) === !![]) &&
        skip &&
        selections["filter"]((_0x188f14) => _0x188f14[_0x8046d0(0xaf)] === x)[
          _0x8046d0(0x184)
        ] > 0x0 &&
        textareaLength === 0x0 &&
        textInputLength === 0x0 &&
        emailInputLength === 0x0 &&
        checkboxInputLength === 0x0 &&
        setTimeout(function () {
          (next = !![]), nextStep(), selectionQuiz();
        }, $(steps[x])
          [_0x8046d0(0x197)](_0x8046d0(0x1a6))
          [_0x8046d0(0x12c)](_0x8046d0(0xb3)))
      : $(steps[x])
          [_0x8046d0(0x197)]("[data-radio-skip]:visible")
          ["data"](_0x8046d0(0x15a)) === !![] &&
        skip &&
        textareaLength === 0x0 &&
        textInputLength === 0x0 &&
        emailInputLength === 0x0 &&
        checkboxInputLength === 0x0 &&
        setTimeout(function () {
          (next = !![]), nextStep(), selectionQuiz();
        }, $(steps[x])
          [_0x8046d0(0x197)](_0x8046d0(0x1a6))
          [_0x8046d0(0x12c)]("radio-delay"))),
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
  const _0x2bea0e = _0x29f383;
  $(_0x2bea0e(0xec))[_0x2bea0e(0x167)](),
    unfilledArr[_0x2bea0e(0x184)] > 0x0 &&
      unfilledArr[_0x2bea0e(0x147)](function (_0x5cb2e6) {
        const _0x6709c8 = _0x2bea0e;
        $("input[name=\x22" + _0x5cb2e6["input"] + "\x22]")
          [_0x6709c8(0x18e)]("[data-text=\x22error-message\x22]")
          [_0x6709c8(0x1a8)](),
          $(_0x6709c8(0x111) + _0x5cb2e6[_0x6709c8(0xef)] + "\x22]")
            [_0x6709c8(0xff)]()
            [_0x6709c8(0xc7)](_0x6709c8(0xec))
            ["fadeIn"](),
          $(_0x6709c8(0x17b) + _0x5cb2e6[_0x6709c8(0xef)] + "\x22]")
            ["siblings"](_0x6709c8(0xec))
            [_0x6709c8(0x1a8)](),
          $(_0x6709c8(0xc6) + _0x5cb2e6[_0x6709c8(0xef)] + "\x22]")
            ["siblings"](_0x6709c8(0xec))
            [_0x6709c8(0x1a8)]();
      });
}
function resetInputErrorMessage(_0x1c3819) {
  const _0x422c5a = _0x29f383;
  $(_0x422c5a(0x111) + _0x1c3819 + "\x22]")
    [_0x422c5a(0x18e)](_0x422c5a(0xec))
    [_0x422c5a(0x167)](),
    $("input[name=\x22" + _0x1c3819 + "\x22]")
      ["parents"]()
      [_0x422c5a(0xc7)]("[data-text=\x22error-message\x22]")
      ["hide"](),
    $(_0x422c5a(0x17b) + _0x1c3819 + "\x22]")
      [_0x422c5a(0x18e)](_0x422c5a(0xec))
      [_0x422c5a(0x167)](),
    $(_0x422c5a(0xc6) + _0x1c3819 + "\x22]")
      [_0x422c5a(0x18e)](_0x422c5a(0xec))
      [_0x422c5a(0x167)]();
}
function increaseCurstep() {
  const _0x72e55a = _0x29f383;
  countCard
    ? ((curStep = curStep + 0x1),
      $(_0x72e55a(0x126))["text"](steps[_0x72e55a(0x184)]))
    : $(steps[x])[_0x72e55a(0x12c)](_0x72e55a(0x12b))
    ? (curStep = curStep + 0x0)
    : (curStep = curStep + 0x1),
    $(_0x72e55a(0xb0))[_0x72e55a(0xd3)](curStep);
}
function _0x3004() {
  const _0x2abd61 = [
    "<br>Data\x20Go\x20To\x20=\x20",
    "log",
    "44136wOyAZe",
    "reset-delay",
    "313768mlCLBQ",
    "count-card",
    "[data-display-index=\x22",
    "show",
    "[data-clickable]",
    "[data-cms-select=cms]",
    "[data-skip-to]",
    "stopPropagation",
    "<div\x20data-range=\x22selection\x22\x20style=\x22display:none\x20!important\x22>",
    "select[required]",
    "backTo",
    "[data-form=\x22custom-progress-indicator\x22]",
    "some",
    "span",
    "slice",
    "includes",
    "122pJCZyE",
    "[data-text=\x22error-message\x22]",
    "redirect-form-hehexd",
    "input[type=\x22radio\x22]",
    "input",
    "val",
    "findIndex",
    "[data-form=\x22step\x22]",
    "scroll-top-offset",
    "[type=\x22radio\x22]",
    "[type=\x22submit\x22]",
    "[data-count-card]",
    "stringify",
    "[data-clone=\x22",
    "attr",
    "[data-reset-delay]",
    "[data-answer]:visible",
    "keydown",
    "5vwYrPn",
    "readystatechange",
    "parents",
    "auto",
    "[data-form=\x22multistep\x22]",
    "[data-index=\x22",
    "phone-autoformat",
    "[data-answer]",
    "novalidate",
    "ix2",
    "value",
    ":input[type=\x22checkbox\x22][required]",
    ":input[type=\x27radio\x27]:checked",
    "[data-form=\x22next-btn\x22][data-submit-show]",
    "textarea[autofocus]",
    "shiftKey",
    "body",
    "removeItem",
    "[data-success-card=\x22",
    "filledInput",
    "input[name=\x22",
    "slow",
    "[type=\x22checkbox\x22]",
    "788082yIkZuz",
    "[data-memory]",
    "trim",
    "Please\x20wait...",
    "[data-add-new]",
    "input[autofocus]",
    "answer",
    "[data-enter]",
    "data-skip-to",
    "[data-go-to]",
    "weighted-selection-range",
    "not",
    "Enter",
    "[data-selected]:checked",
    "input[type=\x22submit\x22]",
    "230820vJBWRL",
    "button",
    ":input[required]",
    "[data-text=\x22total-steps\x22]",
    "prop",
    "edit-step",
    "getItem",
    "go-to",
    "card",
    "data",
    "data-name",
    "trigger",
    "top",
    "ms-field",
    ":input[type=\x22email\x22][required]",
    "key",
    "[data-quiz]",
    "success",
    ":input[type=\x22date\x22]",
    "join",
    "input[type=\x22radio\x22]:checked",
    "[data-reinit]",
    "data-input-field",
    "input:checkbox",
    "input[type=\x22email\x22]:visible",
    ".w-form-formradioinput",
    "[data-query-param]",
    "input-field",
    "offset",
    "reset",
    "filter",
    "file",
    "[data-radio-skip]:visible",
    "[data-form=\x22progress\x22]",
    "[data-form=\x22back-btn\x22]",
    "select[required]:visible",
    "forEach",
    ":input[type=\x22tel\x22][required]",
    ":input[type=\x22number\x22][required]",
    "focus",
    "[data-display=\x22",
    "type",
    "skipTo",
    "required",
    "block-domain",
    "click",
    "[data-redirect-delay]",
    "enter",
    "0.4",
    "data-radio-skip",
    "div.g-recaptcha",
    "custom-error-message",
    "36PYaNPJ",
    "add-new",
    "current",
    "radio-skip",
    "[data-weighted-selection-range]",
    "https://webflow.com/api/v1/form/",
    ".w-form-done",
    "checkbox",
    "input[type=\x22text\x22][required]:visible",
    "select-multiple",
    "[data-select-multiple]",
    "quiz",
    "push",
    "each",
    "\x22]:checked",
    "html,\x20body",
    "hide",
    "[data-selection]",
    "[data-input-field=\x22",
    "_blank",
    "removeClass",
    "name",
    "memory",
    "test",
    "none",
    "destroy",
    "submit-show",
    ":input[type=\x22email\x22]",
    "textarea",
    "[data-answer][data-radio-skip]:visible",
    ":checked",
    "[data-form=\x22submit-btn\x22]",
    "[data-success-card]",
    "phone-validation",
    "logic-extra",
    "</div>",
    "textarea[name=\x22",
    "[data-input-field]",
    "redirect",
    "selection",
    "331310ddvjbJ",
    "searchParams",
    "input:radio[required]",
    "keypress",
    "[data-weighted-selection]",
    "length",
    "keyCode",
    "redirect-delay",
    "change",
    ".w-radio-input",
    "submit",
    ":input[type=\x22checkbox\x22]:checked",
    "w--redirected-checked",
    "[data-selection=\x22",
    ":input[type=\x22number\x22]",
    "siblings",
    "clone",
    "[data-answer=\x22",
    "weighted-selection",
    ".w-checkbox-input",
    "3994816uALwvR",
    "[data-clone-wrapper=\x22",
    "[data-btn=\x22reset\x22]",
    "option[value=\x22$(this).val()\x22]",
    "find",
    "reinit",
    "[data-form=\x22progress-indicator\x22]",
    ":input[type=\x22radio\x22]",
    "debug-mode",
    "min-character",
    "disabled",
    "animate",
    "last",
    ":input[type=\x22date\x22][required]",
    "index",
    "require",
    "split",
    "[data-cms-select=text]",
    "skip-to",
    "[data-radio-delay]",
    "textarea[required]:visible",
    "fadeIn",
    "replace",
    "parent",
    "match",
    "checked",
    "scroll-top",
    "step",
    "[data-text=\x22current-step\x22]",
    "radio",
    "[data-form=\x22step\x22]:not([data-card=\x22true\x22])",
    "radio-delay",
    "open",
    "css",
    "setItem",
    "[data-form=\x22next-btn\x22]",
    "\x22][value=\x22",
    "location",
    "[data-form=\x22submit\x22]:visible",
    "[data-form-ms=\x22submit-btn\x22]",
    "field",
    "wait",
    "inputName",
    "Webflow",
    "<br>Data\x20Answer\x20=\x20",
    "[data-form=\x22submit-btn\x22]:visible",
    "new-tab",
    "[data-range]:contains(",
    "preventDefault",
    ":input[type=\x22file\x22][required]",
    "select[name=\x22",
    "children",
    ":input[type=\x22checkbox\x22]",
    ":input",
    "[data-clickable-all]",
    "addClass",
    "append",
    "2943440uWoIzb",
    "[data-selection=\x22other\x22]",
    "selected",
    ":input[type=\x22checkbox\x22][required]:checked",
    "data-go-to",
    "remove",
    "text",
    ":input[type=\x22text\x22][required]",
    "form[data-form=\x22multistep\x22]\x20:input",
    "dispatchEvent",
  ];
  _0x3004 = function () {
    return _0x2abd61;
  };
  return _0x3004();
}
function decreaseCurstep() {
  const _0x1faf63 = _0x29f383;
  countCard
    ? ((curStep = curStep - 0x1),
      $("[data-text=\x22total-steps\x22]")[_0x1faf63(0xd3)](
        steps[_0x1faf63(0x184)]
      ))
    : $(steps[x])[_0x1faf63(0x12c)]("card")
    ? (curStep = curStep - 0x0)
    : (curStep = curStep - 0x1),
    $(_0x1faf63(0xb0))["text"](curStep);
}
function nextStep() {
  const _0x183fa9 = _0x29f383;
  customError
    ? ($(_0x183fa9(0xec))[_0x183fa9(0x167)](),
      fill
        ? (x++,
          increaseCurstep(),
          (progress = x),
          x <= steps[_0x183fa9(0x184)] - 0x1 &&
            (updateStep(), memory && saveFilledInput()))
        : displayErrorMessage())
    : (x++,
      increaseCurstep(),
      x > progress && (progress = x),
      x <= steps[_0x183fa9(0x184)] - 0x1 &&
        (updateStep(), memory && saveFilledInput()));
}
function backStep() {
  const _0x3dc902 = _0x29f383;
  customError && $(_0x3dc902(0xec))[_0x3dc902(0x167)](),
    decreaseCurstep(),
    x > 0x0 &&
      ($(progressbar[x])["removeClass"](_0x3dc902(0x159)),
      selections["filter"]((_0x44bc53) => _0x44bc53[_0x3dc902(0x14d)] === x)[
        _0x3dc902(0x184)
      ] > 0x0
        ? (x = parseInt(
            getSafe(
              () =>
                selections["filter"](
                  (_0x4c288c) => _0x4c288c[_0x3dc902(0x14d)] === x
                )[0x0][_0x3dc902(0xe5)]
            )
          ))
        : x--,
      updateStep()),
    ($(steps[x])
      [_0x3dc902(0x197)](_0x3dc902(0x143))
      ["data"](_0x3dc902(0x15a)) === !![] ||
      $(steps[x])
        [_0x3dc902(0x197)](_0x3dc902(0xfb))
        [_0x3dc902(0x197)](_0x3dc902(0x143))
        [_0x3dc902(0x12c)]("radio-skip") === !![] ||
      $(steps[x])
        ["find"](_0x3dc902(0x174))
        [_0x3dc902(0x12c)](_0x3dc902(0x15a)) === !![]) &&
      ((all_data = all_data["filter"](
        (_0x13fcaf) =>
          _0x13fcaf[_0x3dc902(0xbc)] !==
          $(steps[x])
            [_0x3dc902(0x197)](_0x3dc902(0x137))
            [_0x3dc902(0xf9)](_0x3dc902(0x16c))
      )),
      $(
        _0x3dc902(0x169) +
          $(steps[x])
            ["find"]("input[type=\x22radio\x22]:checked")
            ["attr"](_0x3dc902(0x16c)) +
          "\x22]"
      )[_0x3dc902(0x167)](),
      $(steps[x])
        [_0x3dc902(0x197)](_0x3dc902(0xee))
        [_0x3dc902(0x127)](_0x3dc902(0x1ac), ![]),
      $(steps[x])["find"](_0x3dc902(0x13c))[_0x3dc902(0x16b)](_0x3dc902(0x18b)),
      validation());
}
function _0x523f(_0x3047c9, _0x3248fb) {
  const _0x30042c = _0x3004();
  return (
    (_0x523f = function (_0x523fcd, _0x4fbd69) {
      _0x523fcd = _0x523fcd - 0xae;
      let _0x1827ff = _0x30042c[_0x523fcd];
      return _0x1827ff;
    }),
    _0x523f(_0x3047c9, _0x3248fb)
  );
}
weightedSelectionRange &&
  $(_0x29f383(0x168))[_0x29f383(0x164)](function () {
    const _0x5e85fa = _0x29f383;
    $(this)[_0x5e85fa(0xcc)](
      _0x5e85fa(0xe3) + $(this)["data"]("selection") + _0x5e85fa(0x17a)
    );
  });
function selectionQuiz() {
  const _0x41635d = _0x29f383;
  if ($(this)[_0x41635d(0x197)]("[data-btn=\x22check\x22]")) {
    $(_0x41635d(0x168))["hide"](),
      $("[data-selection-weight]")[_0x41635d(0x167)]();
    if (weightedSelection) {
      (selTotal = 0x0),
        selArr["forEach"](function (_0x1f644a) {
          const _0xc5fc91 = _0x41635d;
          selTotal = selTotal + _0x1f644a[_0xc5fc91(0xcf)];
        }),
        $("[data-text=\x22total-weight\x22]")[_0x41635d(0xd3)](selTotal);
      if (
        $("[data-selection=\x22" + selTotal + "\x22]")[_0x41635d(0x184)] > 0x0
      )
        $(_0x41635d(0x18c) + selTotal + "\x22]")["fadeIn"]();
      else
        $(_0x41635d(0xc3) + selTotal + ")")
          ? $(_0x41635d(0xc3) + selTotal + ")")
              [_0x41635d(0x1aa)]("[data-selection]")
              ["eq"](0x0)
              [_0x41635d(0xde)]()
          : $(_0x41635d(0xce))["fadeIn"]();
    } else {
      let _0x4cc184 = -0x1;
      $("[data-selection]")[_0x41635d(0x164)](function (_0x332415) {
        const _0x53dc98 = _0x41635d;
        $($(_0x53dc98(0x168))[_0x332415])
          [_0x53dc98(0x12c)](_0x53dc98(0x17e))
          [_0x53dc98(0xea)](selString[_0x53dc98(0x136)]()) &&
          (_0x4cc184 = _0x332415);
      }),
        _0x4cc184 > -0x1
          ? $($("[data-selection]")[_0x4cc184])[_0x41635d(0x1a8)]()
          : $(_0x41635d(0xce))[_0x41635d(0x1a8)]();
    }
  }
}
function triggerInputAllData() {
  const _0x2f8d2e = _0x29f383;
  if (savedFilledInput && memory)
    savedFilledInput[_0x2f8d2e(0x147)]((_0x54563e) => {
      const _0x575178 = _0x2f8d2e;
      if (
        $(
          _0x575178(0x111) +
            _0x54563e[_0x575178(0xbe)] +
            _0x575178(0xb8) +
            _0x54563e[_0x575178(0x107)] +
            "\x22]"
        )[_0x575178(0xf9)](_0x575178(0x14c)) !== _0x575178(0x142)
      ) {
        if (
          $(
            _0x575178(0x111) +
              _0x54563e[_0x575178(0xbe)] +
              _0x575178(0xb8) +
              _0x54563e[_0x575178(0x107)] +
              "\x22]"
          )[_0x575178(0xf9)](_0x575178(0x14c)) === _0x575178(0xb1)
        )
          $(
            _0x575178(0x111) +
              _0x54563e[_0x575178(0xbe)] +
              _0x575178(0xb8) +
              _0x54563e[_0x575178(0x107)] +
              "\x22]"
          )[_0x575178(0x150)](),
            $(
              _0x575178(0x111) +
                _0x54563e[_0x575178(0xbe)] +
                _0x575178(0xb8) +
                _0x54563e[_0x575178(0x107)] +
                "\x22]"
            )
              [_0x575178(0x18e)](_0x575178(0x188))
              ["addClass"]("w--redirected-checked"),
            $(
              _0x575178(0x111) +
                _0x54563e[_0x575178(0xbe)] +
                _0x575178(0xb8) +
                _0x54563e[_0x575178(0x107)] +
                "\x22]"
            )["trigger"](_0x575178(0xef));
        else
          _0x54563e["value"] === "on"
            ? ($(_0x575178(0x111) + _0x54563e[_0x575178(0xbe)] + "\x22]")[
                _0x575178(0x150)
              ](),
              $(_0x575178(0x111) + _0x54563e[_0x575178(0xbe)] + "\x22]")
                [_0x575178(0x18e)](_0x575178(0x192))
                [_0x575178(0xcb)](_0x575178(0x18b)),
              $(_0x575178(0x111) + _0x54563e[_0x575178(0xbe)] + "\x22]")[
                _0x575178(0x12e)
              ](_0x575178(0xef)))
            : (console["log"](
                _0x54563e[_0x575178(0xbe)],
                _0x54563e[_0x575178(0x107)]
              ),
              $(_0x575178(0x111) + _0x54563e[_0x575178(0xbe)] + "\x22]")[
                _0x575178(0xf0)
              ](_0x54563e[_0x575178(0x107)]),
              $(_0x575178(0x17b) + _0x54563e[_0x575178(0xbe)] + "\x22]")["val"](
                _0x54563e["value"]
              ),
              $(_0x575178(0xc6) + _0x54563e["inputName"] + "\x22]")
                [_0x575178(0x197)](
                  "option[value=\x22" + _0x54563e[_0x575178(0xf0)] + "\x22]"
                )
                [_0x575178(0x127)]("selected", !![]),
              $(_0x575178(0x111) + _0x54563e[_0x575178(0xbe)] + "\x22]")[
                _0x575178(0x12e)
              ](_0x575178(0xef)),
              $(_0x575178(0x111) + _0x54563e[_0x575178(0xbe)] + "\x22]")[
                _0x575178(0x12e)
              ](_0x575178(0x187)));
      }
    });
  else
    params &&
      (getParams(),
      searchQ[_0x2f8d2e(0x147)]((_0x4e622c) => {
        const _0x5d6961 = _0x2f8d2e;
        if (
          $(
            _0x5d6961(0x111) +
              _0x4e622c[_0x5d6961(0xbe)] +
              _0x5d6961(0xb8) +
              _0x4e622c[_0x5d6961(0x107)] +
              "\x22]"
          )["attr"](_0x5d6961(0x14c)) !== _0x5d6961(0x142)
        ) {
          if (
            $(
              _0x5d6961(0x111) +
                _0x4e622c["key"] +
                "\x22][value=\x22" +
                _0x4e622c[_0x5d6961(0xf0)] +
                "\x22]"
            )[_0x5d6961(0xf9)](_0x5d6961(0x14c)) === _0x5d6961(0xb1)
          )
            $(
              _0x5d6961(0x111) +
                _0x4e622c[_0x5d6961(0x132)] +
                _0x5d6961(0xb8) +
                _0x4e622c["val"] +
                "\x22]"
            )[_0x5d6961(0x150)](),
              $(
                _0x5d6961(0x111) +
                  _0x4e622c[_0x5d6961(0x132)] +
                  _0x5d6961(0xb8) +
                  _0x4e622c["val"] +
                  "\x22]"
              )
                [_0x5d6961(0x18e)](".w-radio-input")
                ["addClass"](_0x5d6961(0x18b)),
              $(
                "input[name=\x22" +
                  _0x4e622c["key"] +
                  _0x5d6961(0xb8) +
                  _0x4e622c[_0x5d6961(0xf0)] +
                  "\x22]"
              )[_0x5d6961(0x12e)](_0x5d6961(0xef));
          else
            _0x4e622c[_0x5d6961(0xf0)] === "on"
              ? ($(_0x5d6961(0x111) + _0x4e622c["key"] + "\x22]")[
                  _0x5d6961(0x150)
                ](),
                $(_0x5d6961(0x111) + _0x4e622c[_0x5d6961(0x132)] + "\x22]")
                  [_0x5d6961(0x18e)](_0x5d6961(0x192))
                  [_0x5d6961(0xcb)](_0x5d6961(0x18b)),
                $(_0x5d6961(0x111) + _0x4e622c["key"] + "\x22]")[
                  _0x5d6961(0x12e)
                ]("input"))
              : ($(_0x5d6961(0x111) + _0x4e622c[_0x5d6961(0x132)] + "\x22]")[
                  _0x5d6961(0xf0)
                ](_0x4e622c[_0x5d6961(0xf0)]),
                $(_0x5d6961(0x17b) + _0x4e622c[_0x5d6961(0x132)] + "\x22]")[
                  "val"
                ](_0x4e622c[_0x5d6961(0xf0)]),
                $(_0x5d6961(0xc6) + _0x4e622c["key"] + "\x22]")
                  [_0x5d6961(0x197)](
                    "option[value=\x22" + _0x4e622c["val"] + "\x22]"
                  )
                  ["prop"]("selected", !![]),
                $(_0x5d6961(0x111) + _0x4e622c[_0x5d6961(0x132)] + "\x22]")[
                  _0x5d6961(0x12e)
                ](_0x5d6961(0xef)),
                $("input[name=\x22" + _0x4e622c[_0x5d6961(0x132)] + "\x22]")[
                  _0x5d6961(0x12e)
                ]("change"));
        }
      }));
}
$(_0x29f383(0xb7))["on"](_0x29f383(0x150), function () {
  (next = !![]), nextStep(), selectionQuiz();
}),
  $(_0x29f383(0x145))["on"](_0x29f383(0x150), function () {
    (next = ![]), (back = !![]), backStep();
  }),
  $(steps)
    [_0x29f383(0x197)](_0x29f383(0xc9))
    ["not"](_0x29f383(0xf4))
    ["on"](_0x29f383(0xef), function (_0xc6cef0) {
      validation();
    }),
  $(steps)
    ["find"](_0x29f383(0xee))
    ["on"]("click", function () {
      (skip = !![]), validation();
    });
$(_0x29f383(0xca))["data"]("clickable-all")
  ? $(_0x29f383(0xe6))[_0x29f383(0x16b)](_0x29f383(0x19d))
  : $("[data-form=\x22custom-progress-indicator\x22]")[_0x29f383(0xcb)](
      _0x29f383(0x19d)
    );
function clickableIndicator() {
  const _0x1e0e8c = _0x29f383;
  $("[data-clickable]")[_0x1e0e8c(0x12c)]("clickable") &&
    ($("[data-form=\x22progress-indicator\x22]")["removeClass"](
      _0x1e0e8c(0x159)
    ),
    $(_0x1e0e8c(0xdf))[_0x1e0e8c(0x12c)]("clickable-all")
      ? ((x = $(this)["index"]()), updateStep())
      : $(this)["index"]() <= progress &&
        ((x = $(this)["index"]()), updateStep())),
    $(_0x1e0e8c(0xb0))[_0x1e0e8c(0xd3)](x + 0x1);
}
$(_0x29f383(0xe6))["on"](_0x29f383(0x150), clickableIndicator);
$(_0x29f383(0x101))[_0x29f383(0x12c)](_0x29f383(0x19b)) &&
  ($(_0x29f383(0x11d))[_0x29f383(0x164)](function () {
    const _0x96eb00 = _0x29f383;
    $(this)[_0x96eb00(0xcc)](
      _0x96eb00(0xd7),
      $(this)[_0x96eb00(0x12c)](_0x96eb00(0x12a))
    );
  }),
  $(_0x29f383(0x104))[_0x29f383(0x164)](function () {
    const _0x1ba883 = _0x29f383;
    $(this)[_0x1ba883(0xcc)](
      _0x1ba883(0xc0),
      $(this)[_0x1ba883(0x12c)](_0x1ba883(0x11a))
    );
  }));
$("[data-form=\x22submit-btn\x22]")["on"](
  _0x29f383(0x150),
  function (_0x109230) {
    const _0x5a7428 = _0x29f383;
    $(this)["data"](_0x5a7428(0x17d)) &&
      (redirectTo = $(this)["data"](_0x5a7428(0x17d))),
      !$(this)[_0x5a7428(0x12c)]("new-tab") &&
        (newTab = $(this)[_0x5a7428(0x12c)](_0x5a7428(0xc2))),
      (successCard = $(this)["data"](_0x5a7428(0x134))),
      _0x109230["preventDefault"](),
      _0x109230[_0x5a7428(0xe2)](),
      logicExtra &&
        ($(this)["prop"](_0x5a7428(0x105), !![]),
        $(steps)
          [_0x5a7428(0x197)](":input")
          [_0x5a7428(0x127)](_0x5a7428(0x14e), ![])),
      localStorage["removeItem"]("filledInput"),
      fill &&
        ($(this)["data"]("wait")
          ? $(this)[_0x5a7428(0xf0)]($(this)[_0x5a7428(0x12c)](_0x5a7428(0xbd)))
          : ($(this)[_0x5a7428(0xf0)](_0x5a7428(0x117)),
            $(this)[_0x5a7428(0xd3)]("Please\x20wait...")),
        $(_0x5a7428(0x101))[_0x5a7428(0x189)](),
        $(_0x5a7428(0x155))["length"] > 0x0 &&
          grecaptcha["getResponse"]()[_0x5a7428(0x184)] === 0x0 &&
          (form[_0x5a7428(0x197)](_0x5a7428(0x176))[_0x5a7428(0xd3)](
            oldSubmitText
          ),
          form[_0x5a7428(0x197)](_0x5a7428(0x176))[_0x5a7428(0xf0)](
            oldSubmitText
          )));
  }
);
function resetFormly() {
  const _0x26bb6c = _0x29f383;
  $(_0x26bb6c(0x101))["trigger"](_0x26bb6c(0x140)),
    $(_0x26bb6c(0x101))
      [_0x26bb6c(0xff)]()
      [_0x26bb6c(0x197)](_0x26bb6c(0x15d))
      [_0x26bb6c(0x167)](),
    (x = 0x0),
    updateStep(),
    $("[data-form=\x22multistep\x22]")[_0x26bb6c(0xde)](),
    $(_0x26bb6c(0x176))[_0x26bb6c(0xd3)](oldSubmitText),
    $("[data-form=\x22submit-btn\x22]")[_0x26bb6c(0xf0)](oldSubmitText),
    $("[data-text=\x22current-step\x22]")[_0x26bb6c(0xd3)](0x1),
    $(_0x26bb6c(0x101))
      [_0x26bb6c(0x197)](_0x26bb6c(0x13a))
      [_0x26bb6c(0x18e)](_0x26bb6c(0x192))
      [_0x26bb6c(0x16b)](_0x26bb6c(0x18b));
}
$(document)["ajaxComplete"](function (_0x4e041d, _0x12f6a9, _0x1b9dc8) {
  const _0x21ae41 = _0x29f383;
  if (_0x1b9dc8["url"][_0x21ae41(0xea)](_0x21ae41(0x15c))) {
    const _0x44aae0 = _0x12f6a9["status"] === 0xc8,
      _0x143fe3 = _0x21ae41(0xed);
    redirectTo &&
      _0x44aae0 &&
      (newTab
        ? window[_0x21ae41(0xb4)](redirectTo, _0x21ae41(0x16a))
        : setTimeout(() => {
            location["href"] = redirectTo;
          }, redirectDelay)),
      _0x44aae0 &&
        successCard !== "" &&
        $(_0x21ae41(0x10f) + successCard + "\x22]")["fadeIn"](),
      _0x44aae0 &&
        formReset &&
        setTimeout(() => {
          resetFormly();
        }, resetDelay),
      !_0x44aae0 &&
        ($("[data-form=\x22submit-btn\x22]")[_0x21ae41(0xf0)](_0x21ae41(0x117)),
        $("[data-form=\x22submit-btn\x22]")[_0x21ae41(0xd3)](_0x21ae41(0x117)));
  }
}),
  $("[data-btn=\x22edit\x22]")["on"](_0x29f383(0x150), function () {
    const _0x3bcf75 = _0x29f383;
    var _0x4b3e10 = $(this)
      [_0x3bcf75(0x1aa)]()
      ["find"](_0x3bcf75(0x17c))
      ["data"](_0x3bcf75(0x13e));
    setTimeout(function () {
      const _0x4184f7 = _0x3bcf75;
      $("input[name=\x22" + _0x4b3e10 + "\x22]")[_0x4184f7(0x14a)]();
    }, 0x64),
      (back = !![]),
      (x = $(this)["data"](_0x3bcf75(0x128)) - 0x1),
      updateStep(),
      countCard
        ? ((curStep = x + 0x1),
          $("[data-text=\x22total-steps\x22]")["text"](steps["length"]))
        : $(steps[x])[_0x3bcf75(0x12c)](_0x3bcf75(0x12b))
        ? (curStep = x + 0x0)
        : (curStep = x + 0x1),
      $("[data-text=\x22current-step\x22]")["text"](curStep),
      (back = ![]);
  }),
  $(_0x29f383(0x195))["on"](_0x29f383(0x150), function () {
    const _0x40e43c = _0x29f383;
    $(_0x40e43c(0x101))[_0x40e43c(0x12e)](_0x40e43c(0x140));
    let _0x4cf2e4 = $(this);
    $(this)[_0x40e43c(0xd3)](_0x40e43c(0x117)),
      setTimeout(function () {
        const _0x478c09 = _0x40e43c;
        $(_0x4cf2e4)[_0x478c09(0xd3)](oldResetText),
          $(_0x4cf2e4)[_0x478c09(0xff)](_0x478c09(0x15d))["hide"](),
          (x = 0x0),
          updateStep(),
          $(_0x478c09(0x101))[_0x478c09(0xde)](),
          $(_0x478c09(0x176))[_0x478c09(0xd3)](oldSubmitText),
          $(_0x478c09(0x176))["val"](oldSubmitText),
          $(_0x4cf2e4)[_0x478c09(0xf0)](oldSubmitText),
          $(_0x478c09(0xb0))[_0x478c09(0xd3)](0x1),
          $(_0x478c09(0x101))
            [_0x478c09(0x197)](_0x478c09(0x13a))
            [_0x478c09(0x18e)](_0x478c09(0x192))
            [_0x478c09(0x16b)](_0x478c09(0x18b));
      }, resetDelay);
  }),
  $(_0x29f383(0x10d))["on"](_0x29f383(0x182), function (_0x2ffe83) {
    const _0x4eba8a = _0x29f383;
    _0x2ffe83["keyCode"] === 0xd &&
      fill &&
      ($(_0x4eba8a(0x11b))[_0x4eba8a(0x12c)](_0x4eba8a(0x152))
        ? (totalSteps > curStep && $(_0x4eba8a(0xb7))[0x0][_0x4eba8a(0x150)](),
          _0x2ffe83[_0x4eba8a(0xc4)](),
          _0x2ffe83[_0x4eba8a(0xe2)]())
        : (_0x2ffe83[_0x4eba8a(0xc4)](), _0x2ffe83[_0x4eba8a(0xe2)]()));
  }),
  $(_0x29f383(0x10d))[_0x29f383(0xfc)](function (_0x1936d5) {
    const _0xee456f = _0x29f383;
    (_0x1936d5["metaKey"] || _0x1936d5["ctrlKey"]) &&
      _0x1936d5[_0xee456f(0x185)] == 0xd &&
      (x >= steps["length"] - 0x1 && fill
        ? $(steps[x])[_0xee456f(0x197)](_0xee456f(0xc1))[_0xee456f(0x150)]()
        : (event["preventDefault"](), event[_0xee456f(0xe2)]()));
  }),
  $(_0x29f383(0x173))[_0x29f383(0x182)](function (_0x197bb2) {
    const _0x38dc33 = _0x29f383;
    $(this)[_0x38dc33(0x14a)](),
      _0x197bb2["key"] == _0x38dc33(0x120) &&
        (_0x197bb2[_0x38dc33(0xc4)](), _0x197bb2[_0x38dc33(0xe2)]()),
      _0x197bb2[_0x38dc33(0x10c)] &&
        _0x197bb2[_0x38dc33(0x132)] == _0x38dc33(0x120) &&
        $(this)[_0x38dc33(0xf0)]($(this)[_0x38dc33(0xf0)]() + "\x0a");
  }),
  $(_0x29f383(0x101))
    [_0x29f383(0x197)](_0x29f383(0xc9))
    ["on"](_0x29f383(0x187), function () {
      const _0x4a273e = _0x29f383;
      (all_data = all_data[_0x4a273e(0x141)](
        (_0x10b9a1) => _0x10b9a1["field"] !== $(this)["attr"](_0x4a273e(0x16c))
      )),
        $(this)["attr"](_0x4a273e(0x14c)) === _0x4a273e(0x15e)
          ? $(this)["is"](_0x4a273e(0x175))
            ? all_data[_0x4a273e(0x163)]({
                field: $(this)[_0x4a273e(0xf9)]("name"),
                value: $(this)["siblings"](_0x4a273e(0xe8))[_0x4a273e(0xd3)](),
              })
            : $(_0x4a273e(0x169) + $(this)["attr"](_0x4a273e(0x16c)) + "\x22]")[
                _0x4a273e(0x167)
              ]()
          : (all_data[_0x4a273e(0x163)]({
              field: $(this)[_0x4a273e(0xf9)]("name"),
              value: $(this)[_0x4a273e(0xf0)](),
            }),
            $(this)[_0x4a273e(0xf0)]() !== "" &&
              resetInputErrorMessage($(this)[_0x4a273e(0xf9)]("name"))),
        all_data[_0x4a273e(0x147)](function (_0xfa168) {
          const _0x587c8f = _0x4a273e;
          $(_0x587c8f(0x169) + _0xfa168[_0x587c8f(0xbc)] + "\x22]")[
            _0x587c8f(0x1a8)
          ](),
            $("[data-input-field=\x22" + _0xfa168[_0x587c8f(0xbc)] + "\x22]")[
              _0x587c8f(0xd3)
            ](_0xfa168["value"]);
        });
    }),
  $(_0x29f383(0x101))
    [_0x29f383(0x197)](_0x29f383(0x173))
    ["on"](_0x29f383(0x187), function () {
      const _0x2feca8 = _0x29f383;
      $(this)[_0x2feca8(0xf0)]() !== "" &&
        resetInputErrorMessage($(this)[_0x2feca8(0xf9)](_0x2feca8(0x16c))),
        (all_data = all_data["filter"](
          (_0x1a3e03) =>
            _0x1a3e03[_0x2feca8(0xbc)] !== $(this)["attr"](_0x2feca8(0x16c))
        )),
        all_data["push"]({
          field: $(this)[_0x2feca8(0xf9)]("name"),
          value: $(this)[_0x2feca8(0xf0)](),
        }),
        all_data["forEach"](function (_0x5ea83d) {
          const _0x2659c1 = _0x2feca8;
          $(_0x2659c1(0x169) + _0x5ea83d["field"] + "\x22]")[
            _0x2659c1(0x1a8)
          ](),
            $("[data-input-field=\x22" + _0x5ea83d[_0x2659c1(0xbc)] + "\x22]")[
              _0x2659c1(0xd3)
            ](_0x5ea83d["value"]);
        });
    }),
  $(_0x29f383(0x101))
    [_0x29f383(0x197)]("select")
    ["on"](_0x29f383(0x187), function () {
      const _0x19444c = _0x29f383;
      $(this)["val"]() !== "" &&
        resetInputErrorMessage($(this)[_0x19444c(0xf9)](_0x19444c(0x16c)));
      var _0x3daf1a = $(this)[_0x19444c(0x12c)](_0x19444c(0x130));
      (all_data = all_data[_0x19444c(0x141)](
        (_0x9f37ed) =>
          _0x9f37ed[_0x19444c(0xbc)] !==
          $(this)[_0x19444c(0xf9)](_0x19444c(0x16c))
      )),
        all_data[_0x19444c(0x163)]({
          field: $(this)[_0x19444c(0xf9)](_0x19444c(0x16c)),
          value: _0x3daf1a
            ? $(this)[_0x19444c(0x197)](_0x19444c(0x196))["text"]()
            : $(this)["val"](),
        }),
        all_data["forEach"](function (_0x16dfb3) {
          const _0x4720f5 = _0x19444c;
          $("[data-input-field=\x22" + _0x16dfb3[_0x4720f5(0xbc)] + "\x22]")[
            _0x4720f5(0x1a8)
          ](),
            $("[data-input-field=\x22" + _0x16dfb3[_0x4720f5(0xbc)] + "\x22]")[
              "text"
            ](_0x16dfb3["value"]);
        });
    }),
  updateStep(),
  triggerInputAllData(),
  $(_0x29f383(0xe0))[_0x29f383(0x164)](function () {
    const _0x5c820a = _0x29f383,
      _0x3d571a = $(this)[_0x5c820a(0x197)](_0x5c820a(0x1a4)),
      _0x2167e9 = [];
    console[_0x5c820a(0xd8)](_0x2167e9),
      _0x3d571a[_0x5c820a(0x164)](function () {
        const _0x1a3977 = _0x5c820a;
        _0x2167e9["push"]($(this)["text"]()[_0x1a3977(0x116)]());
      });
    const _0x2bda82 = $(this)[_0x5c820a(0x18e)]("[data-cms-select=input]");
    $["each"](_0x2167e9, function (_0x454548, _0x6275f) {
      const _0x29c40e = _0x5c820a,
        _0x4a0fbb = $("<option>")[_0x29c40e(0xf0)](_0x6275f)["text"](_0x6275f);
      _0x2bda82[_0x29c40e(0xcc)](_0x4a0fbb);
    });
  }),
  $(_0x29f383(0x118))["on"](_0x29f383(0x150), function () {
    const _0x2d44cb = _0x29f383;
    let _0x124848 = $(this)[_0x2d44cb(0x12c)](_0x2d44cb(0x158));
    var _0x1eab47 = $(_0x2d44cb(0xf8) + _0x124848 + "\x22]")
        ["eq"](0x0)
        [_0x2d44cb(0x18f)](!![]),
      _0x2f712d = $(_0x2d44cb(0x14b) + _0x124848 + "\x22]")
        ["eq"](0x0)
        [_0x2d44cb(0x18f)](!![]);
    _0x1eab47[_0x2d44cb(0x197)]("input")[_0x2d44cb(0x164)](function () {
      const _0x5b02f3 = _0x2d44cb;
      $(this)["val"](""),
        $(this)[_0x5b02f3(0xf9)](
          _0x5b02f3(0x16c),
          this[_0x5b02f3(0x16c)] +
            "-" +
            (parseInt(
              $(_0x5b02f3(0xf8) + _0x124848 + "\x22]")
                [_0x5b02f3(0x19f)]()
                [_0x5b02f3(0x1a1)]()
            ) +
              0x1)
        ),
        $(this)[_0x5b02f3(0xf9)](
          _0x5b02f3(0x12d),
          $(this)["data"](_0x5b02f3(0x16c)) +
            "-" +
            (parseInt(
              $(_0x5b02f3(0xf8) + _0x124848 + "\x22]")
                [_0x5b02f3(0x19f)]()
                [_0x5b02f3(0x1a1)]()
            ) +
              0x1)
        );
    }),
      _0x2f712d[_0x2d44cb(0x197)](_0x2d44cb(0x17c))[_0x2d44cb(0x164)](
        function () {
          const _0x18d7d9 = _0x2d44cb;
          $(this)[_0x18d7d9(0xf9)](
            _0x18d7d9(0x139),
            $(this)[_0x18d7d9(0x12c)](_0x18d7d9(0x13e)) +
              "-" +
              (parseInt(
                $(_0x18d7d9(0xf8) + _0x124848 + "\x22]")
                  [_0x18d7d9(0x19f)]()
                  [_0x18d7d9(0x1a1)]()
              ) +
                0x1)
          );
        }
      ),
      $(_0x2d44cb(0x194) + _0x124848 + "\x22]")[_0x2d44cb(0xcc)](_0x1eab47),
      $("[data-display-wrapper=\x22" + _0x124848 + "\x22]")["append"](
        _0x2f712d
      ),
      $(_0x2d44cb(0x102) + _0x124848 + "\x22]")["each"](function () {
        const _0x1ef07b = _0x2d44cb;
        $(this)[_0x1ef07b(0xd3)](
          $(this)
            [_0x1ef07b(0xff)](_0x1ef07b(0xf8) + _0x124848 + "\x22]")
            [_0x1ef07b(0x1a1)]() + 0x1
        );
      }),
      $(_0x2d44cb(0xdd) + _0x124848 + "\x22]")["each"](function () {
        const _0x18ac2c = _0x2d44cb;
        $(this)["text"](
          $(this)
            [_0x18ac2c(0xff)](_0x18ac2c(0x14b) + _0x124848 + "\x22]")
            ["index"]() + 0x1
        );
      }),
      validation();
  }),
  scrollTop();
