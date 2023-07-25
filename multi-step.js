//25/7/2023 Update

const _0x413e4f = _0x298d;
(function (_0x411c98, _0x64b055) {
  const _0x2cf672 = _0x298d,
    _0x5a1018 = _0x411c98();
  while (!![]) {
    try {
      const _0x4cac70 =
        -parseInt(_0x2cf672(0x26a)) / 0x1 +
        (-parseInt(_0x2cf672(0x272)) / 0x2) *
          (parseInt(_0x2cf672(0x26d)) / 0x3) +
        parseInt(_0x2cf672(0x2db)) / 0x4 +
        (-parseInt(_0x2cf672(0x234)) / 0x5) *
          (-parseInt(_0x2cf672(0x2cb)) / 0x6) +
        parseInt(_0x2cf672(0x2d6)) / 0x7 +
        (parseInt(_0x2cf672(0x293)) / 0x8) *
          (-parseInt(_0x2cf672(0x20b)) / 0x9) +
        (-parseInt(_0x2cf672(0x299)) / 0xa) *
          (-parseInt(_0x2cf672(0x26c)) / 0xb);
      if (_0x4cac70 === _0x64b055) break;
      else _0x5a1018["push"](_0x5a1018["shift"]());
    } catch (_0x3f2fde) {
      _0x5a1018["push"](_0x5a1018["shift"]());
    }
  }
})(_0x5799, 0xb3c1a);
let x = 0x0,
  curStep = 0x0,
  steps = $(_0x413e4f(0x225)),
  progressbarClone = $(_0x413e4f(0x27d))[_0x413e4f(0x265)](),
  progressbar,
  countCard = !![],
  weightedSelection = $(_0x413e4f(0x262))[_0x413e4f(0x1f7)](_0x413e4f(0x246)),
  weightedSelectionRange = $(_0x413e4f(0x244))[_0x413e4f(0x1f7)](
    _0x413e4f(0x2c5)
  ),
  selectMultiple = $(_0x413e4f(0x251))[_0x413e4f(0x1f7)](_0x413e4f(0x25a)),
  customError = $("[data-custom-error-message]")[_0x413e4f(0x1f7)](
    _0x413e4f(0x28c)
  ),
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
  reinitIX = $("[data-reinit]")["data"](_0x413e4f(0x203)),
  textareaLength = 0x0,
  textInputLength = 0x0,
  emailInputLength = 0x0,
  selectInputLength = 0x0,
  checkboxInputLength = 0x0,
  filledInput = [],
  savedFilledInput = JSON[_0x413e4f(0x229)](
    localStorage["getItem"](_0x413e4f(0x261))
  ),
  memory = $("[data-memory]")[_0x413e4f(0x1f7)](_0x413e4f(0x286)),
  quiz = $("[data-quiz]")[_0x413e4f(0x1f7)](_0x413e4f(0x2c9)),
  progress = 0x0;
const urlFormly = new URL(window[_0x413e4f(0x2c8)][_0x413e4f(0x2a7)]);
let params = $(_0x413e4f(0x22a))[_0x413e4f(0x1f7)](_0x413e4f(0x212)),
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
  logicExtra = $(_0x413e4f(0x2e1))["data"](_0x413e4f(0x2ac)),
  oldSubmitText = $(_0x413e4f(0x2bc))[_0x413e4f(0x24d)](),
  oldResetText = $(_0x413e4f(0x2cc))[_0x413e4f(0x282)](),
  formReset = $(_0x413e4f(0x2e1))["data"]("reset"),
  successCard = "",
  redirectTo = "",
  totalSteps = 0x0,
  checkCount = 0x0,
  resetDelay = $("[data-reset-delay]")[_0x413e4f(0x1f7)](_0x413e4f(0x266))
    ? $("[data-reset-delay]")[_0x413e4f(0x1f7)](_0x413e4f(0x266))
    : 0x7d0,
  redirectDelay = $(_0x413e4f(0x2c6))[_0x413e4f(0x1f7)](_0x413e4f(0x2a4))
    ? $("[data-redirect-delay]")[_0x413e4f(0x1f7)](_0x413e4f(0x2a4))
    : 0x7d0,
  newTab = !![],
  unfilledArr = [],
  phoneFormat = $(_0x413e4f(0x2e1))["data"](_0x413e4f(0x289)),
  scrollToTop = $(_0x413e4f(0x2e1))[_0x413e4f(0x1f7)](_0x413e4f(0x263)),
  scrollTopOffset = parseInt(
    $(_0x413e4f(0x2e1))[_0x413e4f(0x1f7)](_0x413e4f(0x260))
  ),
  notRobot = !![];
all_data = [];
$("div.g-recaptcha")[_0x413e4f(0x243)] > 0x0 && (notRobot = ![]);
function recaptcha(_0x299ce3) {
  notRobot = !![];
}
$("[data-count-card]")[_0x413e4f(0x243)] > 0x0 &&
  (countCard = $(_0x413e4f(0x2d3))[_0x413e4f(0x1f7)](_0x413e4f(0x24a)));
$("[data-text=\x22error-message\x22]")["hide"](),
  $(progressbarClone)[_0x413e4f(0x283)](_0x413e4f(0x2d1)),
  $(_0x413e4f(0x2d2))[_0x413e4f(0x230)]()[_0x413e4f(0x2ae)](),
  $(_0x413e4f(0x2bc))[_0x413e4f(0x26b)](),
  $(_0x413e4f(0x233))[_0x413e4f(0x26b)](),
  steps["each"](function () {
    const _0x5ab839 = _0x413e4f;
    $("[data-form=\x22progress\x22]")[_0x5ab839(0x211)](
      progressbarClone["clone"](!![], !![])
    );
  }),
  $(_0x413e4f(0x23e))["hide"]();
countCard
  ? ((curStep = curStep + 0x1),
    (totalSteps = steps[_0x413e4f(0x243)]),
    $(_0x413e4f(0x23a))[_0x413e4f(0x282)](totalSteps))
  : ($(steps[x])[_0x413e4f(0x1f7)](_0x413e4f(0x2ba))
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    (totalSteps = $(_0x413e4f(0x25e))[_0x413e4f(0x243)]),
    $(_0x413e4f(0x23a))["text"](totalSteps),
    $(_0x413e4f(0x2a5))[_0x413e4f(0x1fc)](function () {
      const _0x5e69e1 = _0x413e4f;
      $($(_0x5e69e1(0x27d))[$(this)[_0x5e69e1(0x28d)]()])["hide"]();
    }));
(progressbar = $(_0x413e4f(0x2d2))[_0x413e4f(0x230)]()),
  $(_0x413e4f(0x27d))["on"](_0x413e4f(0x25f), clickableIndicator),
  $(_0x413e4f(0x28b))[_0x413e4f(0x282)](curStep),
  steps[_0x413e4f(0x26b)](),
  $(_0x413e4f(0x209))[_0x413e4f(0x26b)](),
  $(_0x413e4f(0x248))[_0x413e4f(0x1fc)](function () {
    const _0x2ca377 = _0x413e4f;
    $(this)[_0x2ca377(0x2df)]("type", "button");
  });
function _0x298d(_0x58ba7c, _0x1c667e) {
  const _0x57996f = _0x5799();
  return (
    (_0x298d = function (_0x298d47, _0x492770) {
      _0x298d47 = _0x298d47 - 0x1f1;
      let _0xc13a15 = _0x57996f[_0x298d47];
      return _0xc13a15;
    }),
    _0x298d(_0x58ba7c, _0x1c667e)
  );
}
function getParams() {
  const _0x38b66b = _0x413e4f;
  urlFormly["searchParams"][_0x38b66b(0x241)](function (_0x51396d, _0x2f9e52) {
    const _0x2aff78 = _0x38b66b;
    searchQ[_0x2aff78(0x279)]({ val: _0x51396d, key: _0x2f9e52 });
  });
}
function getSafe(_0x29d22a, _0x2ad4e1) {
  try {
    return _0x29d22a();
  } catch (_0x54f61f) {
    return _0x2ad4e1;
  }
}
function phoneAutoFormat(_0x8bbcb) {
  var _0x36085e = "";
  return function (_0x46594f) {
    const _0x31a280 = _0x298d;
    var _0x5432a5 = "",
      _0x26a917 = _0x46594f[_0x31a280(0x2a8)](/\D/g, ""),
      _0x4a6326 = 0x0,
      _0xe3dbd7 = 0x0;
    while (_0x4a6326 < _0x26a917["length"] && _0xe3dbd7 < _0x8bbcb["length"]) {
      _0x8bbcb[_0xe3dbd7] === "x"
        ? ((_0x5432a5 += _0x26a917[_0x4a6326]), _0x4a6326++)
        : (_0x5432a5 += _0x8bbcb[_0xe3dbd7]),
        _0xe3dbd7++;
    }
    if (_0x46594f[_0x31a280(0x243)] < _0x36085e[_0x31a280(0x243)]) {
      var _0x3c1531 = _0x8bbcb[_0x31a280(0x2c4)](_0xe3dbd7);
      _0x5432a5 += _0x3c1531[_0x31a280(0x2a8)](/x/g, "");
    }
    return (_0x36085e = _0x5432a5), _0x5432a5;
  };
}
savedFilledInput &&
  memory &&
  (savedFilledInput[_0x413e4f(0x241)]((_0x460def) => {
    const _0x3193c6 = _0x413e4f;
    if (
      $(
        "input[name=\x22" +
          _0x460def["inputName"] +
          _0x3193c6(0x221) +
          _0x460def[_0x3193c6(0x2bb)] +
          "\x22]"
      )[_0x3193c6(0x2df)](_0x3193c6(0x2d9)) === _0x3193c6(0x238)
    )
      $(
        _0x3193c6(0x2a9) +
          _0x460def[_0x3193c6(0x204)] +
          _0x3193c6(0x221) +
          _0x460def[_0x3193c6(0x2bb)] +
          "\x22]"
      )[_0x3193c6(0x25f)](),
        $(
          _0x3193c6(0x2a9) +
            _0x460def[_0x3193c6(0x204)] +
            "\x22][value=\x22" +
            _0x460def["value"] +
            "\x22]"
        )
          [_0x3193c6(0x23f)](".w-radio-input")
          [_0x3193c6(0x22f)](_0x3193c6(0x274));
    else
      _0x460def["value"] === "on"
        ? ($(_0x3193c6(0x2a9) + _0x460def[_0x3193c6(0x204)] + "\x22]")[
            _0x3193c6(0x25f)
          ](),
          $(_0x3193c6(0x2a9) + _0x460def["inputName"] + "\x22]")
            [_0x3193c6(0x23f)](".w-checkbox-input")
            [_0x3193c6(0x22f)](_0x3193c6(0x274)))
        : ($("input[name=\x22" + _0x460def[_0x3193c6(0x204)] + "\x22]")["val"](
            _0x460def[_0x3193c6(0x2bb)]
          ),
          $("textarea[name=\x22" + _0x460def[_0x3193c6(0x204)] + "\x22]")[
            _0x3193c6(0x24d)
          ](_0x460def["value"]),
          $("select[name=\x22" + _0x460def[_0x3193c6(0x204)] + "\x22]")
            [_0x3193c6(0x21a)](
              _0x3193c6(0x240) + _0x460def[_0x3193c6(0x2bb)] + "\x22]"
            )
            [_0x3193c6(0x267)](_0x3193c6(0x2a0), !![]));
  }),
  triggerInputAllData());
params &&
  (getParams(),
  searchQ[_0x413e4f(0x241)]((_0x3507b6) => {
    const _0x5cc090 = _0x413e4f;
    if (
      $(
        _0x5cc090(0x2a9) +
          _0x3507b6["key"] +
          _0x5cc090(0x221) +
          _0x3507b6[_0x5cc090(0x24d)] +
          "\x22]"
      )[_0x5cc090(0x2df)](_0x5cc090(0x2d9)) === _0x5cc090(0x238)
    )
      $(
        "input[name=\x22" +
          _0x3507b6[_0x5cc090(0x237)] +
          _0x5cc090(0x221) +
          _0x3507b6[_0x5cc090(0x24d)] +
          "\x22]"
      )["click"](),
        $(
          _0x5cc090(0x2a9) +
            _0x3507b6["key"] +
            _0x5cc090(0x221) +
            _0x3507b6[_0x5cc090(0x24d)] +
            "\x22]"
        )
          [_0x5cc090(0x23f)](_0x5cc090(0x21b))
          [_0x5cc090(0x22f)](_0x5cc090(0x274)),
        $(
          _0x5cc090(0x2a9) +
            _0x3507b6[_0x5cc090(0x237)] +
            _0x5cc090(0x221) +
            _0x3507b6[_0x5cc090(0x24d)] +
            "\x22]"
        )[_0x5cc090(0x28a)](_0x5cc090(0x2d8));
    else
      _0x3507b6[_0x5cc090(0x24d)] === "on"
        ? ($("input[name=\x22" + _0x3507b6[_0x5cc090(0x237)] + "\x22]")[
            "click"
          ](),
          $(_0x5cc090(0x2a9) + _0x3507b6[_0x5cc090(0x237)] + "\x22]")
            ["siblings"](_0x5cc090(0x27f))
            ["addClass"](_0x5cc090(0x274)),
          $("input[name=\x22" + _0x3507b6["key"] + "\x22]")["trigger"]("input"))
        : ($(_0x5cc090(0x2a9) + _0x3507b6[_0x5cc090(0x237)] + "\x22]")[
            _0x5cc090(0x24d)
          ](_0x3507b6[_0x5cc090(0x24d)]),
          $(_0x5cc090(0x2e3) + _0x3507b6[_0x5cc090(0x237)] + "\x22]")[
            _0x5cc090(0x24d)
          ](_0x3507b6[_0x5cc090(0x24d)]),
          $(_0x5cc090(0x256) + _0x3507b6["key"] + "\x22]")
            [_0x5cc090(0x21a)](
              "option[value=\x22" + _0x3507b6[_0x5cc090(0x24d)] + "\x22]"
            )
            [_0x5cc090(0x267)](_0x5cc090(0x2a0), !![]),
          $(_0x5cc090(0x2a9) + _0x3507b6["key"] + "\x22]")[_0x5cc090(0x28a)](
            _0x5cc090(0x2d8)
          ),
          $(_0x5cc090(0x2a9) + _0x3507b6[_0x5cc090(0x237)] + "\x22]")[
            "trigger"
          ]("change"));
  }),
  triggerInputAllData());
quiz &&
  steps[_0x413e4f(0x1fc)](function () {
    const _0x3369ac = _0x413e4f;
    $(this)[_0x3369ac(0x230)]()[_0x3369ac(0x2df)](_0x3369ac(0x20d), !![]),
      $(this)["children"]()["attr"](_0x3369ac(0x250), 0xfa);
  });
function disableBtn(_0x2170e6) {
  const _0x5511f0 = _0x413e4f;
  (fill = ![]),
    !customError &&
      ($("[data-form=\x22next-btn\x22]")[_0x5511f0(0x2e8)]({
        opacity: "0.4",
        "pointer-events": _0x5511f0(0x2e5),
      }),
      $(_0x5511f0(0x208))[_0x5511f0(0x22f)](_0x5511f0(0x1fb)),
      $(_0x5511f0(0x2bc))["css"]({
        opacity: _0x5511f0(0x2cf),
        "pointer-events": _0x5511f0(0x2e5),
      }),
      $(_0x5511f0(0x2bc))[_0x5511f0(0x22f)](_0x5511f0(0x1fb)),
      $(_0x5511f0(0x233))[_0x5511f0(0x2e8)]({
        opacity: _0x5511f0(0x2cf),
        "pointer-events": _0x5511f0(0x2e5),
      }),
      $(_0x5511f0(0x233))[_0x5511f0(0x22f)]("disabled"));
}
function enableBtn() {
  const _0xeb677f = _0x413e4f;
  (fill = !![]),
    $(_0xeb677f(0x208))["css"]({
      "pointer-events": _0xeb677f(0x280),
      opacity: "1",
    }),
    $("[data-form=\x22next-btn\x22]")[_0xeb677f(0x283)](_0xeb677f(0x1fb)),
    $("[data-form=\x22submit-btn\x22]")["css"]({
      "pointer-events": "auto",
      opacity: "1",
    }),
    $(_0xeb677f(0x2bc))[_0xeb677f(0x283)](_0xeb677f(0x1fb)),
    $(_0xeb677f(0x233))["css"]({
      "pointer-events": _0xeb677f(0x280),
      opacity: "1",
    }),
    $(_0xeb677f(0x233))[_0xeb677f(0x283)](_0xeb677f(0x1fb));
}
function saveFilledInput() {
  const _0x5b7e8c = _0x413e4f;
  $(_0x5b7e8c(0x1fd))
    ["not"](_0x5b7e8c(0x2aa))
    [_0x5b7e8c(0x1fc)](function () {
      const _0x52e92a = _0x5b7e8c;
      $(this)["attr"]("type") === _0x52e92a(0x213) ||
      $(this)[_0x52e92a(0x2df)](_0x52e92a(0x2d9)) === "radio"
        ? $(this)[_0x52e92a(0x267)](_0x52e92a(0x258)) &&
          (filledInput["some"](
            (_0x5bec08) =>
              _0x5bec08[_0x52e92a(0x204)] ===
              $(this)[_0x52e92a(0x2df)](_0x52e92a(0x22e))
          )
            ? ((filledInput = filledInput[_0x52e92a(0x29f)](
                (_0xdabfc0) =>
                  _0xdabfc0[_0x52e92a(0x204)] !==
                  $(this)[_0x52e92a(0x2df)]("name")
              )),
              $(this)[_0x52e92a(0x24d)]() !== "" &&
                filledInput[_0x52e92a(0x279)]({
                  inputName: $(this)["attr"](_0x52e92a(0x22e)),
                  value: $(this)[_0x52e92a(0x24d)](),
                }))
            : $(this)[_0x52e92a(0x24d)]() !== "" &&
              filledInput[_0x52e92a(0x279)]({
                inputName: $(this)[_0x52e92a(0x2df)](_0x52e92a(0x22e)),
                value: $(this)[_0x52e92a(0x24d)](),
              }))
        : filledInput["some"](
            (_0xa0d662) =>
              _0xa0d662[_0x52e92a(0x204)] ===
              $(this)[_0x52e92a(0x2df)](_0x52e92a(0x22e))
          )
        ? ((filledInput = filledInput[_0x52e92a(0x29f)](
            (_0x2841db) =>
              _0x2841db["inputName"] !==
              $(this)[_0x52e92a(0x2df)](_0x52e92a(0x22e))
          )),
          $(this)[_0x52e92a(0x24d)]() !== "" &&
            filledInput["push"]({
              inputName: $(this)[_0x52e92a(0x2df)](_0x52e92a(0x22e)),
              value: $(this)[_0x52e92a(0x24d)](),
            }))
        : $(this)["val"]() !== "" &&
          filledInput["push"]({
            inputName: $(this)[_0x52e92a(0x2df)](_0x52e92a(0x22e)),
            value: $(this)["val"](),
          });
    }),
    filledInput &&
      filledInput["forEach"]((_0x5c2c77) => {
        const _0x25719d = _0x5b7e8c;
        urlFormly[_0x25719d(0x27e)][_0x25719d(0x268)](_0x5c2c77["inputName"]),
          urlFormly[_0x25719d(0x27e)][_0x25719d(0x29a)](
            _0x5c2c77[_0x25719d(0x204)],
            _0x5c2c77["value"]
          ),
          window[_0x25719d(0x28f)][_0x25719d(0x291)](null, null, urlFormly);
      }),
    localStorage["removeItem"](_0x5b7e8c(0x261)),
    localStorage["setItem"](
      _0x5b7e8c(0x261),
      JSON[_0x5b7e8c(0x217)](filledInput)
    );
}
function scrollTop() {
  const _0x36b8cf = _0x413e4f;
  scrollToTop &&
    $(_0x36b8cf(0x220))[_0x36b8cf(0x235)](
      {
        scrollTop:
          $(_0x36b8cf(0x2e1))[_0x36b8cf(0x205)]()["top"] - scrollTopOffset,
      },
      0x3e8
    );
}
function updateStep() {
  const _0x294745 = _0x413e4f;
  scrollTop(),
    (skip = ![]),
    $("[data-form=\x22custom-progress-indicator\x22]")[_0x294745(0x283)](
      _0x294745(0x1fb)
    );
  $(_0x294745(0x254))[_0x294745(0x1f7)](_0x294745(0x1f1)) &&
    (steps["find"](":input[required]")[_0x294745(0x1fc)](function () {
      const _0x3cdd33 = _0x294745;
      $(
        $(_0x3cdd33(0x226))[
          $(this)["parents"]("[data-form=\x22step\x22]")[_0x3cdd33(0x28d)]()
        ]
      ),
        $(this)[_0x3cdd33(0x24d)]() === "" && emptyInput++;
    }),
    emptyInput > 0x0
      ? $(_0x294745(0x2a3))[_0x294745(0x22f)]("disabled")
      : $(_0x294745(0x2a3))[_0x294745(0x283)](_0x294745(0x1fb)));
  $(_0x294745(0x226))["removeClass"]("current"),
    $(_0x294745(0x226))[_0x294745(0x22f)](_0x294745(0x1fb)),
    $($("[data-form=\x22custom-progress-indicator\x22]")[x])[_0x294745(0x22f)](
      _0x294745(0x2d1)
    ),
    (selection = selections[_0x294745(0x29f)](
      (_0x365f25) => _0x365f25[_0x294745(0x2c3)] === x - 0x1
    ));
  next &&
    (x = getSafe(() => selection[0x0]["skipTo"])
      ? parseInt(getSafe(() => selection[0x0][_0x294745(0x2e9)]))
      : x);
  $("[data-answer]")[_0x294745(0x26b)](), steps["hide"]();
  reinitIX === !![] && window[_0x294745(0x2dd)]["destroy"]();
  $(progressbar)["removeClass"](_0x294745(0x2d1));
  for (i = 0x0; i <= x; i++) {
    countCard
      ? $(progressbar[i])[_0x294745(0x22f)](_0x294745(0x2d1))
      : !$(steps[i])["data"](_0x294745(0x2ba)) &&
        $(progressbar[i])["addClass"](_0x294745(0x2d1));
  }
  reinitIX === !![]
    ? (window[_0x294745(0x2dd)] &&
        window[_0x294745(0x2dd)]["require"]("ix2")[_0x294745(0x232)](),
      document[_0x294745(0x278)](new Event(_0x294745(0x273))),
      $(steps[x])[_0x294745(0x215)]())
    : $(steps[x])[_0x294745(0x202)](_0x294745(0x2a2));
  x === 0x0 &&
    !$(steps[x])[_0x294745(0x1f7)](_0x294745(0x2ba)) &&
    $(steps[x])[_0x294745(0x21a)](_0x294745(0x20a))[_0x294745(0x215)]();
  selection["length"] > 0x0
    ? $(steps[x])
        [_0x294745(0x21a)](
          _0x294745(0x287) + selection[0x0]["selected"] + "\x22]"
        )
        [_0x294745(0x215)]()
    : $(steps[x])
        [_0x294745(0x21a)](_0x294745(0x287) + answer + "\x22]")
        [_0x294745(0x215)]();
  if (x === 0x0)
    $(_0x294745(0x210))[_0x294745(0x26b)](),
      $(_0x294745(0x208))["show"](),
      $(_0x294745(0x2bc))["hide"]();
  else {
    if (
      x === steps["length"] - 0x1 ||
      $(steps[x])["find"](_0x294745(0x2b2))[_0x294745(0x243)] > 0x0
    ) {
      $("[data-form=\x22next-btn\x22]")[_0x294745(0x26b)]();
      if (
        $(steps[x])
          [_0x294745(0x21a)](_0x294745(0x218))
          [_0x294745(0x1f7)](_0x294745(0x284))
      )
        $(steps[x])
          [_0x294745(0x21a)]("[data-form=\x22next-btn\x22][data-submit-show]")
          ["show"]();
      else
        $("[data-form=\x22next-btn\x22]")[_0x294745(0x1f7)]("submit-show") &&
          $("[data-form=\x22next-btn\x22]")[_0x294745(0x215)]();
      $(_0x294745(0x2bc))[_0x294745(0x215)](),
        $(_0x294745(0x233))[_0x294745(0x215)](),
        $(_0x294745(0x210))[_0x294745(0x215)]();
    } else
      $(_0x294745(0x208))[_0x294745(0x215)](),
        $("[data-form=\x22back-btn\x22]")[_0x294745(0x215)](),
        $("[data-form=\x22submit-btn\x22]")[_0x294745(0x26b)](),
        $("[data-form-ms=\x22submit-btn\x22]")[_0x294745(0x26b)]();
  }
  $($(steps[x])["find"](_0x294745(0x275))[0x0])[_0x294745(0x298)](),
    $($(steps[x])[_0x294745(0x21a)](_0x294745(0x2de))[0x0])[_0x294745(0x298)](),
    validation();
  for (idx = 0x0; idx <= x; idx++) {
    $($("[data-form=\x22custom-progress-indicator\x22]")[idx])["removeClass"](
      _0x294745(0x1fb)
    );
  }
}
function validateEmail(_0x57494a, _0x5ef585, _0x146566) {
  const _0x2f9781 = _0x413e4f;
  let _0x308579 = _0x57494a["includes"]("@")
    ? _0x57494a["split"]("@")[0x1][_0x2f9781(0x1fa)](".")[0x0]
    : [];
  dom = [];
  _0x5ef585 !== undefined &&
    _0x5ef585[_0x2f9781(0x1fa)](",")[_0x2f9781(0x241)](function (_0x2c796f) {
      const _0x2f0060 = _0x2f9781;
      _0x2c796f[_0x2f0060(0x276)](_0x308579) &&
        dom[_0x2f0060(0x279)](_0x308579);
    });
  dom["length"] > 0x0 ? (domainAllowed = ![]) : (domainAllowed = !![]);
  var _0xb122b3 = /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,20})?$/;
  console[_0x2f9781(0x2e2)](_0xb122b3[_0x2f9781(0x2cd)](_0x57494a)),
    !_0xb122b3["test"](_0x57494a) || !domainAllowed
      ? ((emailFilled = ![]),
        unfilledArr[_0x2f9781(0x279)]({ input: _0x146566 }))
      : (emailFilled = !![]);
}
function phoneValidation(_0x1e3ea1, _0x251258, _0x589172) {
  const _0x6bcae8 = _0x413e4f;
  if (phoneFormat)
    return _0x1e3ea1[_0x6bcae8(0x24c)](
      new RegExp(phoneFormat["slice"](0x1, -0x1))
    ) && _0x251258 >= _0x589172
      ? !![]
      : ![];
  else {
    if (_0x251258 >= _0x589172) return !![];
  }
}
function validation() {
  const _0x3bc127 = _0x413e4f;
  $(steps[x])[_0x3bc127(0x1f7)]("card") && enableBtn();
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
    (textareaLength = $(steps[x])[_0x3bc127(0x21a)](_0x3bc127(0x200))[
      _0x3bc127(0x243)
    ]),
    (textInputLength = $(steps[x])[_0x3bc127(0x21a)](
      "input[type=\x22text\x22][required]:visible"
    )[_0x3bc127(0x243)]),
    (selectInputLength = $(steps[x])[_0x3bc127(0x21a)](_0x3bc127(0x2ce))[
      "length"
    ]),
    (emailInputLength = $(steps[x])[_0x3bc127(0x21a)](_0x3bc127(0x223))[
      "length"
    ]),
    (checkboxInputLength = $(steps[x])[_0x3bc127(0x21a)](_0x3bc127(0x27a))[
      _0x3bc127(0x243)
    ]);
  textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0
    ? disableBtn()
    : enableBtn();
  checkCount = $(steps[x])[_0x3bc127(0x1f7)](_0x3bc127(0x213))
    ? $(steps[x])[_0x3bc127(0x1f7)](_0x3bc127(0x213))
    : $(steps[x])[_0x3bc127(0x21a)](_0x3bc127(0x2b5))[_0x3bc127(0x243)] > 0x0
    ? $(steps[x])["find"](_0x3bc127(0x2b5))[_0x3bc127(0x1f7)](_0x3bc127(0x213))
    : 0x0;
  if (!logicExtra)
    $(steps[x])[_0x3bc127(0x21a)](":input")["is"]("[type=\x22checkbox\x22]") &&
      (checkCount === "*" ||
      checkCount > $(steps[x])["find"](_0x3bc127(0x24f))["length"]
        ? $(steps[x])
            [_0x3bc127(0x21a)](_0x3bc127(0x24f))
            [_0x3bc127(0x1fc)](function () {
              const _0x1bb77d = _0x3bc127;
              $(this)["is"](_0x1bb77d(0x242))
                ? $(steps[x])[_0x1bb77d(0x21a)](_0x1bb77d(0x2c0))["length"] <
                    0x1 &&
                  ((checkboxFilled = !![]),
                  resetInputErrorMessage($(this)["attr"]("name")))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0x1bb77d(0x279)]({
                    input: $(this)[_0x1bb77d(0x2df)](_0x1bb77d(0x22e)),
                  }));
            })
        : $(steps[x])[_0x3bc127(0x21a)](_0x3bc127(0x2ad))[_0x3bc127(0x243)] >=
          checkCount
        ? $(steps[x])[_0x3bc127(0x21a)](_0x3bc127(0x2c0))["length"] > 0x0
          ? $(steps[x])
              ["find"](_0x3bc127(0x2c0))
              ["each"](function () {
                const _0x22d18f = _0x3bc127;
                !$(this)["is"](":checked")
                  ? ((checkboxFilled = ![]),
                    unfilledArr["push"]({
                      input: $(this)["attr"](_0x22d18f(0x22e)),
                    }))
                  : ((checkboxFilled = !![]),
                    $(steps[x])[_0x22d18f(0x21a)](
                      ":input[type=\x22checkbox\x22][required]:checked"
                    )["length"] >=
                      $(steps[x])[_0x22d18f(0x21a)](_0x22d18f(0x2c0))[
                        "length"
                      ] &&
                      resetInputErrorMessage(
                        $(steps[x])
                          [_0x22d18f(0x21a)](_0x22d18f(0x24f))
                          [_0x22d18f(0x2df)]("name")
                      ));
              })
          : ((checkboxFilled = !![]),
            resetInputErrorMessage(
              $(steps[x])
                [_0x3bc127(0x21a)](_0x3bc127(0x24f))
                [_0x3bc127(0x2df)](_0x3bc127(0x22e))
            ))
        : ((checkboxFilled = ![]),
          $(steps[x])
            [_0x3bc127(0x21a)](_0x3bc127(0x2c0))
            [_0x3bc127(0x1fc)](function () {
              const _0x5b2aac = _0x3bc127;
              $(this)["not"](":checked") &&
                unfilledArr[_0x5b2aac(0x279)]({
                  input: $(this)[_0x5b2aac(0x2df)]("name"),
                });
            }),
          unfilledArr[_0x3bc127(0x279)]({
            input: $(steps[x])
              [_0x3bc127(0x21a)](_0x3bc127(0x24f))
              [_0x3bc127(0x2df)](_0x3bc127(0x22e)),
          }))),
      $(steps[x])
        [_0x3bc127(0x21a)](_0x3bc127(0x253))
        ["each"](function (_0x1d7a54) {
          const _0x4eb210 = _0x3bc127;
          var _0x5f323e = $(this)[_0x4eb210(0x2df)](_0x4eb210(0x22e));
          $(_0x4eb210(0x2d7) + _0x5f323e + _0x4eb210(0x2da))[
            _0x4eb210(0x243)
          ] == 0x0
            ? (!empReqRadio[_0x4eb210(0x21a)](
                (_0x1fb467) => _0x1fb467["input"] === _0x1d7a54
              ) && empReqRadio[_0x4eb210(0x279)]({ input: _0x1d7a54 }),
              unfilledArr[_0x4eb210(0x279)]({
                input: $(this)[_0x4eb210(0x2df)](_0x4eb210(0x22e)),
              }))
            : (empReqRadio = empReqRadio[_0x4eb210(0x29f)](
                (_0x1ad80b) => _0x1ad80b[_0x4eb210(0x2d8)] !== _0x1d7a54
              )),
            empReqRadio[_0x4eb210(0x243)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        ["find"](":input[type=\x22text\x22][required]")
        [_0x3bc127(0x1fc)](function (_0x398e56) {
          const _0x7ffaf0 = _0x3bc127;
          let _0x4a28d1 = $(this)["val"]()["length"],
            _0x3f86f3 = $(this)[_0x7ffaf0(0x1f7)](_0x7ffaf0(0x1f3))
              ? $(this)["data"](_0x7ffaf0(0x1f3))
              : 0x0;
          $(this)[_0x7ffaf0(0x24d)]() !== "" && _0x4a28d1 >= _0x3f86f3
            ? (empReqInput = empReqInput[_0x7ffaf0(0x29f)](
                (_0xecaeb3) => _0xecaeb3[_0x7ffaf0(0x2d8)] !== _0x398e56
              ))
            : (!empReqInput["find"](
                (_0x8fcd04) => _0x8fcd04[_0x7ffaf0(0x2d8)] === _0x398e56
              ) && empReqInput[_0x7ffaf0(0x279)]({ input: _0x398e56 }),
              unfilledArr[_0x7ffaf0(0x279)]({
                input: $(this)[_0x7ffaf0(0x2df)](_0x7ffaf0(0x22e)),
              })),
            empReqInput["length"] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x3bc127(0x21a)](":input[type=\x22tel\x22][required]")
        [_0x3bc127(0x1fc)](function (_0xc5dace) {
          const _0x3208a7 = _0x3bc127;
          if ($(this)[_0x3208a7(0x24d)]() !== "") {
            let _0x53d64a = $(this)["val"]()[_0x3208a7(0x243)],
              _0xb3d617 = $(this)[_0x3208a7(0x1f7)](_0x3208a7(0x1f3))
                ? $(this)[_0x3208a7(0x1f7)]("min-character")
                : 0x0;
            if ($(this)["data"]("phone-autoformat")) {
              var _0x1d2149 = phoneAutoFormat(
                $(this)[_0x3208a7(0x1f7)](_0x3208a7(0x201))
              );
              $(this)[_0x3208a7(0x24d)](_0x1d2149($(this)[_0x3208a7(0x24d)]()));
            }
            phoneValidation($(this)[_0x3208a7(0x24d)](), _0x53d64a, _0xb3d617)
              ? (empReqTel = empReqTel[_0x3208a7(0x29f)](
                  (_0x2f7c6e) => _0x2f7c6e[_0x3208a7(0x2d8)] !== _0xc5dace
                ))
              : empReqTel[_0x3208a7(0x279)]({ input: _0xc5dace });
          } else !empReqTel[_0x3208a7(0x21a)]((_0x474fd6) => _0x474fd6[_0x3208a7(0x2d8)] === _0xc5dace) && empReqTel["push"]({ input: _0xc5dace }), unfilledArr[_0x3208a7(0x279)]({ input: $(this)[_0x3208a7(0x2df)]("name") });
          empReqTel["length"] === 0x0 ? (telFilled = !![]) : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x3bc127(0x21a)](":input[type=\x22file\x22][required]")
        [_0x3bc127(0x1fc)](function (_0x753acc) {
          const _0x4dd633 = _0x3bc127;
          $(this)[_0x4dd633(0x24d)]() !== ""
            ? (empReqFile = empReqFile[_0x4dd633(0x29f)](
                (_0x3d85c6) => _0x3d85c6[_0x4dd633(0x2d8)] !== _0x753acc
              ))
            : (!empReqFile["find"](
                (_0x4d6c3a) => _0x4d6c3a[_0x4dd633(0x2d8)] === _0x753acc
              ) && empReqFile["push"]({ input: _0x753acc }),
              unfilledArr[_0x4dd633(0x279)]({
                input: $(this)["attr"](_0x4dd633(0x22e)),
              })),
            empReqFile[_0x4dd633(0x243)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x3bc127(0x295))
        ["each"](function (_0x22c7fb) {
          const _0x293769 = _0x3bc127;
          let _0x138b6d = $(this)[_0x293769(0x24d)]()[_0x293769(0x243)],
            _0x5c371a = $(this)[_0x293769(0x1f7)](_0x293769(0x1f3))
              ? $(this)[_0x293769(0x1f7)](_0x293769(0x1f3))
              : 0x0;
          $(this)[_0x293769(0x24d)]() !== "" && _0x138b6d >= _0x5c371a
            ? (empReqNum = empReqNum[_0x293769(0x29f)](
                (_0xc1de3b) => _0xc1de3b[_0x293769(0x2d8)] !== _0x22c7fb
              ))
            : (!empReqNum[_0x293769(0x21a)](
                (_0xd4d0a2) => _0xd4d0a2[_0x293769(0x2d8)] === _0x22c7fb
              ) && empReqNum["push"]({ input: _0x22c7fb }),
              unfilledArr[_0x293769(0x279)]({
                input: $(this)[_0x293769(0x2df)](_0x293769(0x22e)),
              })),
            empReqNum["length"] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x3bc127(0x26f))
        [_0x3bc127(0x1fc)](function (_0x54bc0a) {
          const _0x23ad35 = _0x3bc127;
          let _0x50683d = $(this)[_0x23ad35(0x24d)]();
          _0x50683d === "" && (_0x50683d = null),
            _0x50683d != null
              ? (empReqSelect = empReqSelect["filter"](
                  (_0x5aeda2) => _0x5aeda2[_0x23ad35(0x2d8)] !== _0x54bc0a
                ))
              : (!empReqSelect[_0x23ad35(0x21a)](
                  (_0x249cc5) => _0x249cc5[_0x23ad35(0x2d8)] === _0x54bc0a
                ) && empReqSelect[_0x23ad35(0x279)]({ input: _0x54bc0a }),
                unfilledArr[_0x23ad35(0x279)]({
                  input: $(this)[_0x23ad35(0x2df)](_0x23ad35(0x22e)),
                })),
            empReqSelect["length"] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x3bc127(0x21a)](_0x3bc127(0x277))
        [_0x3bc127(0x1fc)](function (_0xd68f0d) {
          const _0x3c7d03 = _0x3bc127;
          let _0x5864a0 = $(this)["val"]()[_0x3c7d03(0x243)],
            _0x21e5db = $(this)[_0x3c7d03(0x1f7)]("min-character")
              ? $(this)["data"](_0x3c7d03(0x1f3))
              : 0x0;
          $(this)[_0x3c7d03(0x24d)]() !== "" && _0x5864a0 >= _0x21e5db
            ? (empReqTextarea = empReqTextarea[_0x3c7d03(0x29f)](
                (_0x17b3f4) => _0x17b3f4[_0x3c7d03(0x2d8)] !== _0xd68f0d
              ))
            : (!empReqTextarea[_0x3c7d03(0x21a)](
                (_0x154d7d) => _0x154d7d[_0x3c7d03(0x2d8)] === _0xd68f0d
              ) && empReqTextarea["push"]({ input: _0xd68f0d }),
              unfilledArr["push"]({
                input: $(this)[_0x3c7d03(0x2df)](_0x3c7d03(0x22e)),
              })),
            empReqTextarea["length"] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x3bc127(0x21a)](":input[type=\x22email\x22][required]")
        [_0x3bc127(0x1fc)](function () {
          const _0x246db7 = _0x3bc127;
          $(this)[_0x246db7(0x24d)]() !== ""
            ? validateEmail(
                $(this)[_0x246db7(0x24d)](),
                $(this)[_0x246db7(0x1f7)](_0x246db7(0x255)),
                $(this)[_0x246db7(0x2df)]("name")
              )
            : ((emailFilled = ![]),
              unfilledArr[_0x246db7(0x279)]({
                input: $(this)[_0x246db7(0x2df)](_0x246db7(0x22e)),
              }));
        });
  else {
    if ($(steps[x])["data"](_0x3bc127(0x2ba)))
      (answer = $(steps[x])
        [_0x3bc127(0x21a)](_0x3bc127(0x2b6))
        [_0x3bc127(0x1f7)](_0x3bc127(0x252))),
        (selections = selections[_0x3bc127(0x29f)](
          (_0x2b536c) => _0x2b536c["step"] !== x
        )),
        selections[_0x3bc127(0x279)]({ step: x, selected: answer });
    else
      $(steps[x])
        [_0x3bc127(0x21a)]("[data-answer]:visible")
        [_0x3bc127(0x1f7)](_0x3bc127(0x2ba)) &&
        ((answer = $(steps[x])
          [_0x3bc127(0x21a)]("[data-answer]:visible")
          ["data"](_0x3bc127(0x252))),
        (selections = selections["filter"](
          (_0x5449e0) => _0x5449e0[_0x3bc127(0x2c3)] !== x
        )),
        selections[_0x3bc127(0x279)]({ step: x, selected: answer }));
    $(steps[x])
      [_0x3bc127(0x21a)]("[data-answer]:visible")
      ["find"](_0x3bc127(0x222))
      ["is"]("[type=\x22checkbox\x22]") &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])[_0x3bc127(0x21a)](_0x3bc127(0x24f))[_0x3bc127(0x243)]
        ? $(steps[x])
            ["find"](_0x3bc127(0x24f))
            [_0x3bc127(0x1fc)](function () {
              const _0x16fec3 = _0x3bc127;
              $(this)["is"](":checked")
                ? $(steps[x])[_0x16fec3(0x21a)](_0x16fec3(0x27c))[
                    _0x16fec3(0x243)
                  ] < 0x1 &&
                  ((skipTo = undefined),
                  $(this)
                    [_0x16fec3(0x23b)]("[data-skip-to]")
                    [_0x16fec3(0x1f7)](_0x16fec3(0x2c2)) &&
                    (skipTo = $(this)
                      [_0x16fec3(0x23b)](_0x16fec3(0x29e))
                      ["data"]("skip-to")),
                  $(this)
                    [_0x16fec3(0x23b)]("[data-go-to]")
                    [_0x16fec3(0x2df)]("data-go-to") &&
                    ((answer = $(this)
                      [_0x16fec3(0x23b)](_0x16fec3(0x2b6))
                      [_0x16fec3(0x2df)](_0x16fec3(0x239))),
                    (selections = selections[_0x16fec3(0x29f)](
                      (_0xec1b60) => _0xec1b60[_0x16fec3(0x2c3)] !== x
                    )),
                    selections["push"]({ step: x, selected: answer }),
                    skipTo &&
                      (selections[_0x16fec3(0x279)]({
                        step: skipTo - 0x2,
                        selected: answer,
                      }),
                      (objIndex = selections[_0x16fec3(0x245)](
                        (_0xbf8841) => _0xbf8841[_0x16fec3(0x2c3)] === x
                      )),
                      (selections[objIndex][_0x16fec3(0x2e9)] =
                        parseInt(skipTo) - 0x1),
                      (selections[objIndex][_0x16fec3(0x2b8)] = x))),
                  (checkboxFilled = !![]),
                  $(steps[x])[_0x16fec3(0x21a)](_0x16fec3(0x21c))[
                    _0x16fec3(0x243)
                  ] >= $(steps[x])["find"](_0x16fec3(0x2c0))["length"] &&
                    resetInputErrorMessage(
                      $(steps[x])
                        [_0x16fec3(0x21a)](":input[type=\x22checkbox\x22]")
                        ["attr"](_0x16fec3(0x22e))
                    ))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0x16fec3(0x279)]({
                    input: $(this)["attr"]("name"),
                  }));
            })
        : $(steps[x])
            [_0x3bc127(0x21a)](_0x3bc127(0x25b))
            [_0x3bc127(0x21a)](_0x3bc127(0x2ad))[_0x3bc127(0x243)] >= checkCount
        ? ($(steps[x])
            [_0x3bc127(0x21a)](_0x3bc127(0x25b))
            [_0x3bc127(0x21a)](":input[type=\x22checkbox\x22]")
            [_0x3bc127(0x23b)]("[data-go-to]")
            [_0x3bc127(0x2df)]("data-go-to") &&
            ((skipTo = undefined),
            $(steps[x])
              [_0x3bc127(0x21a)]("[data-answer]:visible")
              ["find"](_0x3bc127(0x24f))
              [_0x3bc127(0x23b)]("[data-skip-to]")
              [_0x3bc127(0x2df)](_0x3bc127(0x264)) &&
              (skipTo = $(steps[x])
                [_0x3bc127(0x21a)](_0x3bc127(0x25b))
                [_0x3bc127(0x21a)](_0x3bc127(0x2ad))
                ["parents"]("[data-skip-to]")
                ["attr"](_0x3bc127(0x264))),
            (answer = $(steps[x])
              [_0x3bc127(0x21a)](_0x3bc127(0x25b))
              [_0x3bc127(0x21a)](_0x3bc127(0x24f))
              [_0x3bc127(0x23b)](_0x3bc127(0x2b6))
              ["attr"](_0x3bc127(0x239))),
            (selections = selections[_0x3bc127(0x29f)](
              (_0x152991) => _0x152991[_0x3bc127(0x2c3)] !== x
            )),
            selections[_0x3bc127(0x279)]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0x3bc127(0x279)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections["findIndex"](
                (_0x3a7c94) => _0x3a7c94[_0x3bc127(0x2c3)] === x
              )),
              (selections[objIndex][_0x3bc127(0x2e9)] = parseInt(skipTo) - 0x1),
              (selections[objIndex]["backTo"] = x))),
          (selections = selections["filter"](
            (_0x4d88d5) => _0x4d88d5[_0x3bc127(0x2c3)] !== x
          )),
          selections["push"]({ step: x, selected: answer }),
          (checkboxFilled = !![]),
          $(steps[x])["find"](
            ":input[type=\x22checkbox\x22][required]:checked"
          )[_0x3bc127(0x243)] >=
            $(steps[x])[_0x3bc127(0x21a)](_0x3bc127(0x2c0))[_0x3bc127(0x243)] &&
            resetInputErrorMessage(
              $(steps[x])
                [_0x3bc127(0x21a)](":input[type=\x22checkbox\x22]")
                [_0x3bc127(0x2df)](_0x3bc127(0x22e))
            ))
        : ((checkboxFilled = ![]),
          $(steps[x])
            [_0x3bc127(0x21a)](":input[type=\x22checkbox\x22][required]")
            ["each"](function () {
              const _0x2cb969 = _0x3bc127;
              $(this)[_0x2cb969(0x2dc)](":checked") &&
                unfilledArr[_0x2cb969(0x279)]({
                  input: $(this)[_0x2cb969(0x2df)](_0x2cb969(0x22e)),
                });
            }))),
      $(steps[x])
        ["find"](_0x3bc127(0x25b))
        [_0x3bc127(0x21a)]("input:radio[required]")
        [_0x3bc127(0x1fc)](function (_0x5ebb6e) {
          const _0x4829ba = _0x3bc127;
          var _0x5b430e = $(this)[_0x4829ba(0x2df)]("name");
          $("input:radio[name=\x22" + _0x5b430e + _0x4829ba(0x2da))[
            _0x4829ba(0x243)
          ] == 0x0
            ? (!empReqRadio[_0x4829ba(0x21a)](
                (_0x59d482) => _0x59d482[_0x4829ba(0x2d8)] === _0x5ebb6e
              ) && empReqRadio[_0x4829ba(0x279)]({ input: _0x5ebb6e }),
              unfilledArr[_0x4829ba(0x279)]({
                input: $(this)[_0x4829ba(0x2df)](_0x4829ba(0x22e)),
              }))
            : (empReqRadio = empReqRadio[_0x4829ba(0x29f)](
                (_0x53153a) => _0x53153a[_0x4829ba(0x2d8)] !== _0x5ebb6e
              )),
            empReqRadio[_0x4829ba(0x243)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0x3bc127(0x21a)](_0x3bc127(0x25b))
        [_0x3bc127(0x21a)](":input[type=\x22text\x22][required]")
        [_0x3bc127(0x1fc)](function (_0xf608b9) {
          const _0x59ae9f = _0x3bc127;
          let _0x4c284c = $(this)["val"]()[_0x59ae9f(0x243)],
            _0x2fd59e = $(this)[_0x59ae9f(0x1f7)]("min-character")
              ? $(this)[_0x59ae9f(0x1f7)](_0x59ae9f(0x1f3))
              : 0x0;
          $(this)[_0x59ae9f(0x24d)]() !== "" && _0x4c284c >= _0x2fd59e
            ? (empReqInput = empReqInput[_0x59ae9f(0x29f)](
                (_0x1cfbd9) => _0x1cfbd9[_0x59ae9f(0x2d8)] !== _0xf608b9
              ))
            : (!empReqInput[_0x59ae9f(0x21a)](
                (_0x375c3c) => _0x375c3c[_0x59ae9f(0x2d8)] === _0xf608b9
              ) && empReqInput[_0x59ae9f(0x279)]({ input: _0xf608b9 }),
              unfilledArr[_0x59ae9f(0x279)]({
                input: $(this)["attr"]("name"),
              })),
            empReqInput[_0x59ae9f(0x243)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        ["find"]("[data-answer]:visible")
        [_0x3bc127(0x21a)](":input[type=\x22text\x22]")
        [_0x3bc127(0x1fc)](function (_0x4f5dbd) {
          const _0x542819 = _0x3bc127;
          (skipTo = undefined),
            $(this)
              [_0x542819(0x23b)](_0x542819(0x29e))
              [_0x542819(0x1f7)]("skip-to") !== "" &&
              (skipTo = $(this)
                ["parents"](_0x542819(0x29e))
                [_0x542819(0x1f7)](_0x542819(0x2c2))),
            $(this)
              [_0x542819(0x23b)](_0x542819(0x2b6))
              [_0x542819(0x2df)]("data-go-to") &&
              ((answer = $(this)
                [_0x542819(0x23b)](_0x542819(0x2b6))
                [_0x542819(0x2df)](_0x542819(0x239))),
              (selections = selections[_0x542819(0x29f)](
                (_0x4b4ae7) => _0x4b4ae7["step"] !== x
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x542819(0x279)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x542819(0x245)](
                  (_0x5d5ac5) => _0x5d5ac5["step"] === x
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x542819(0x2b8)] = x)));
        }),
      $(steps[x])
        [_0x3bc127(0x21a)](_0x3bc127(0x25b))
        [_0x3bc127(0x21a)](_0x3bc127(0x295))
        [_0x3bc127(0x1fc)](function (_0x183a32) {
          const _0x5aa9fe = _0x3bc127;
          let _0x33d1af = $(this)[_0x5aa9fe(0x24d)]()[_0x5aa9fe(0x243)],
            _0x63e106 = $(this)["data"]("min-character")
              ? $(this)[_0x5aa9fe(0x1f7)](_0x5aa9fe(0x1f3))
              : 0x0;
          $(this)[_0x5aa9fe(0x24d)]() !== "" && _0x33d1af >= _0x63e106
            ? (empReqNum = empReqNum[_0x5aa9fe(0x29f)](
                (_0x479ea6) => _0x479ea6[_0x5aa9fe(0x2d8)] !== _0x183a32
              ))
            : (!empReqNum[_0x5aa9fe(0x21a)](
                (_0x17a16e) => _0x17a16e["input"] === _0x183a32
              ) && empReqNum[_0x5aa9fe(0x279)]({ input: _0x183a32 }),
              unfilledArr["push"]({
                input: $(this)["attr"](_0x5aa9fe(0x22e)),
              })),
            empReqNum[_0x5aa9fe(0x243)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x3bc127(0x21a)](_0x3bc127(0x25b))
        ["find"](":input[type=\x22number\x22]")
        [_0x3bc127(0x1fc)](function (_0xf795d5) {
          const _0x2d6a7f = _0x3bc127;
          (skipTo = undefined),
            $(this)
              [_0x2d6a7f(0x23b)](_0x2d6a7f(0x29e))
              ["data"](_0x2d6a7f(0x2c2)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0x2d6a7f(0x29e))
                [_0x2d6a7f(0x1f7)](_0x2d6a7f(0x2c2))),
            $(this)
              [_0x2d6a7f(0x23b)](_0x2d6a7f(0x2b6))
              [_0x2d6a7f(0x2df)](_0x2d6a7f(0x239)) &&
              ((answer = $(this)
                [_0x2d6a7f(0x23b)](_0x2d6a7f(0x2b6))
                ["attr"](_0x2d6a7f(0x239))),
              (selections = selections[_0x2d6a7f(0x29f)](
                (_0x1aec56) => _0x1aec56[_0x2d6a7f(0x2c3)] !== x
              )),
              selections[_0x2d6a7f(0x279)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x2d6a7f(0x279)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x3a679b) => _0x3a679b[_0x2d6a7f(0x2c3)] === x
                )),
                (selections[objIndex][_0x2d6a7f(0x2e9)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x3bc127(0x21a)](_0x3bc127(0x25b))
        [_0x3bc127(0x21a)](":input[type=\x22tel\x22][required]")
        ["each"](function (_0x4a6a75) {
          const _0x3d2875 = _0x3bc127;
          if ($(this)[_0x3d2875(0x24d)]() !== "") {
            let _0xd26ab8 = $(this)[_0x3d2875(0x24d)]()[_0x3d2875(0x243)],
              _0x24f769 = $(this)["data"](_0x3d2875(0x1f3))
                ? $(this)[_0x3d2875(0x1f7)](_0x3d2875(0x1f3))
                : 0x0;
            if ($(this)["data"](_0x3d2875(0x201))) {
              var _0x287b69 = phoneAutoFormat(
                $(this)[_0x3d2875(0x1f7)]("phone-autoformat")
              );
              $(this)[_0x3d2875(0x24d)](_0x287b69($(this)[_0x3d2875(0x24d)]()));
            }
            phoneValidation($(this)[_0x3d2875(0x24d)](), _0xd26ab8, _0x24f769)
              ? (empReqTel = empReqTel["filter"](
                  (_0x599397) => _0x599397[_0x3d2875(0x2d8)] !== _0x4a6a75
                ))
              : empReqTel["push"]({ input: _0x4a6a75 });
          } else !empReqTel["find"]((_0xab0e60) => _0xab0e60[_0x3d2875(0x2d8)] === _0x4a6a75) && empReqTel[_0x3d2875(0x279)]({ input: _0x4a6a75 }), unfilledArr[_0x3d2875(0x279)]({ input: $(this)[_0x3d2875(0x2df)](_0x3d2875(0x22e)) });
          empReqTel[_0x3d2875(0x243)] === 0x0
            ? (telFilled = !![])
            : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x3bc127(0x21a)](_0x3bc127(0x25b))
        ["find"](":input[type=\x22tel\x22]")
        ["each"](function (_0x1d7ab8) {
          const _0x2877b3 = _0x3bc127;
          (skipTo = undefined),
            $(this)
              [_0x2877b3(0x23b)](_0x2877b3(0x29e))
              [_0x2877b3(0x1f7)](_0x2877b3(0x2c2)) !== "" &&
              (skipTo = $(this)
                [_0x2877b3(0x23b)]("[data-skip-to]")
                [_0x2877b3(0x1f7)]("skip-to")),
            $(this)[_0x2877b3(0x23b)](_0x2877b3(0x2b6))["attr"]("data-go-to") &&
              ((answer = $(this)
                [_0x2877b3(0x23b)](_0x2877b3(0x2b6))
                ["attr"](_0x2877b3(0x239))),
              (selections = selections["filter"](
                (_0x1527ef) => _0x1527ef[_0x2877b3(0x2c3)] !== x
              )),
              selections[_0x2877b3(0x279)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x2877b3(0x279)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x19226b) => _0x19226b[_0x2877b3(0x2c3)] === x
                )),
                (selections[objIndex][_0x2877b3(0x2e9)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x2877b3(0x2b8)] = x)));
        }),
      $(steps[x])
        [_0x3bc127(0x21a)](_0x3bc127(0x25b))
        [_0x3bc127(0x21a)](_0x3bc127(0x2e7))
        [_0x3bc127(0x1fc)](function (_0x337262) {
          const _0x568428 = _0x3bc127;
          $(this)[_0x568428(0x24d)]() !== ""
            ? (empReqFile = empReqFile[_0x568428(0x29f)](
                (_0x4ddd2c) => _0x4ddd2c[_0x568428(0x2d8)] !== _0x337262
              ))
            : (!empReqFile[_0x568428(0x21a)](
                (_0x22f910) => _0x22f910[_0x568428(0x2d8)] === _0x337262
              ) && empReqFile[_0x568428(0x279)]({ input: _0x337262 }),
              unfilledArr[_0x568428(0x279)]({
                input: $(this)[_0x568428(0x2df)](_0x568428(0x22e)),
              })),
            empReqFile[_0x568428(0x243)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x3bc127(0x21a)]("[data-answer]:visible")
        ["find"](_0x3bc127(0x2c1))
        [_0x3bc127(0x1fc)](function (_0x1e0fac) {
          const _0x9f99be = _0x3bc127;
          (skipTo = undefined),
            $(this)
              ["parents"](_0x9f99be(0x29e))
              [_0x9f99be(0x1f7)]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0x9f99be(0x23b)](_0x9f99be(0x29e))
                [_0x9f99be(0x1f7)](_0x9f99be(0x2c2))),
            $(this)
              [_0x9f99be(0x23b)](_0x9f99be(0x2b6))
              [_0x9f99be(0x2df)](_0x9f99be(0x239)) &&
              ((answer = $(this)
                [_0x9f99be(0x23b)](_0x9f99be(0x2b6))
                ["attr"](_0x9f99be(0x239))),
              (selections = selections[_0x9f99be(0x29f)](
                (_0x32f62d) => _0x32f62d["step"] !== x
              )),
              selections[_0x9f99be(0x279)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections["findIndex"](
                  (_0x2b8aec) => _0x2b8aec["step"] === x
                )),
                (selections[objIndex][_0x9f99be(0x2e9)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x9f99be(0x2b8)] = x)));
        }),
      $(steps[x])
        [_0x3bc127(0x21a)](_0x3bc127(0x25b))
        ["find"](_0x3bc127(0x26f))
        [_0x3bc127(0x1fc)](function (_0x2abf0f) {
          const _0x5cfa71 = _0x3bc127;
          $(this)[_0x5cfa71(0x24d)]() !== ""
            ? (empReqSelect = empReqSelect[_0x5cfa71(0x29f)](
                (_0x3ec1aa) => _0x3ec1aa["input"] !== _0x2abf0f
              ))
            : (!empReqSelect[_0x5cfa71(0x21a)](
                (_0x27b6c3) => _0x27b6c3[_0x5cfa71(0x2d8)] === _0x2abf0f
              ) && empReqSelect[_0x5cfa71(0x279)]({ input: _0x2abf0f }),
              unfilledArr["push"]({
                input: $(this)[_0x5cfa71(0x2df)](_0x5cfa71(0x22e)),
              })),
            empReqSelect["length"] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x3bc127(0x21a)](_0x3bc127(0x25b))
        ["find"](_0x3bc127(0x2d0))
        [_0x3bc127(0x1fc)](function (_0x51a1b3) {
          const _0x2a3d4a = _0x3bc127;
          (skipTo = undefined),
            $(this)["parents"](_0x2a3d4a(0x29e))["data"](_0x2a3d4a(0x2c2)) !==
              "" &&
              (skipTo = $(this)
                [_0x2a3d4a(0x23b)](_0x2a3d4a(0x29e))
                ["data"]("skip-to")),
            $(this)
              [_0x2a3d4a(0x23b)](_0x2a3d4a(0x2b6))
              [_0x2a3d4a(0x2df)](_0x2a3d4a(0x239)) &&
              ((answer = $(this)
                [_0x2a3d4a(0x23b)](_0x2a3d4a(0x2b6))
                [_0x2a3d4a(0x2df)](_0x2a3d4a(0x239))),
              (selections = selections[_0x2a3d4a(0x29f)](
                (_0x553ec7) => _0x553ec7["step"] !== x
              )),
              selections[_0x2a3d4a(0x279)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x2a3d4a(0x279)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x2a3d4a(0x245)](
                  (_0x23177c) => _0x23177c[_0x2a3d4a(0x2c3)] === x
                )),
                (selections[objIndex][_0x2a3d4a(0x2e9)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x2a3d4a(0x2b8)] = x)));
        }),
      $(steps[x])
        [_0x3bc127(0x21a)](_0x3bc127(0x25b))
        [_0x3bc127(0x21a)](_0x3bc127(0x277))
        ["each"](function (_0x39dbb7) {
          const _0x265068 = _0x3bc127;
          let _0x3eda95 = $(this)["val"]()[_0x265068(0x243)],
            _0x235819 = $(this)[_0x265068(0x1f7)](_0x265068(0x1f3))
              ? $(this)[_0x265068(0x1f7)](_0x265068(0x1f3))
              : 0x0;
          $(this)[_0x265068(0x24d)]() !== "" && _0x3eda95 >= _0x235819
            ? (empReqTextarea = empReqTextarea["filter"](
                (_0x353f8e) => _0x353f8e[_0x265068(0x2d8)] !== _0x39dbb7
              ))
            : (!empReqTextarea[_0x265068(0x21a)](
                (_0x62dac7) => _0x62dac7["input"] === _0x39dbb7
              ) && empReqTextarea[_0x265068(0x279)]({ input: _0x39dbb7 }),
              unfilledArr[_0x265068(0x279)]({
                input: $(this)["attr"](_0x265068(0x22e)),
              })),
            empReqTextarea[_0x265068(0x243)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x3bc127(0x21a)](_0x3bc127(0x25b))
        [_0x3bc127(0x21a)](_0x3bc127(0x257))
        [_0x3bc127(0x1fc)](function (_0x1e5296) {
          const _0x2be2c7 = _0x3bc127;
          (skipTo = undefined),
            $(this)
              ["parents"]("[data-skip-to]")
              [_0x2be2c7(0x1f7)](_0x2be2c7(0x2c2)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0x2be2c7(0x29e))
                [_0x2be2c7(0x1f7)](_0x2be2c7(0x2c2))),
            $(this)
              [_0x2be2c7(0x23b)](_0x2be2c7(0x2b6))
              ["attr"](_0x2be2c7(0x239)) &&
              ((answer = $(this)
                [_0x2be2c7(0x23b)]("[data-go-to]")
                [_0x2be2c7(0x2df)](_0x2be2c7(0x239))),
              (selections = selections[_0x2be2c7(0x29f)](
                (_0xfb989f) => _0xfb989f[_0x2be2c7(0x2c3)] !== x
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x2be2c7(0x279)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x2be2c7(0x245)](
                  (_0x2d7ad1) => _0x2d7ad1[_0x2be2c7(0x2c3)] === x
                )),
                (selections[objIndex][_0x2be2c7(0x2e9)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x2be2c7(0x2b8)] = x)));
        }),
      $(steps[x])
        [_0x3bc127(0x21a)](_0x3bc127(0x25b))
        [_0x3bc127(0x21a)](_0x3bc127(0x228))
        ["each"](function (_0x1a9c41) {
          const _0x5a2c8d = _0x3bc127;
          $(this)["val"]() !== ""
            ? validateEmail(
                $(this)[_0x5a2c8d(0x24d)](),
                $(this)[_0x5a2c8d(0x1f7)](_0x5a2c8d(0x255)),
                $(this)[_0x5a2c8d(0x2df)](_0x5a2c8d(0x22e))
              )
            : ((emailFilled = ![]),
              unfilledArr[_0x5a2c8d(0x279)]({
                input: $(this)[_0x5a2c8d(0x2df)](_0x5a2c8d(0x22e)),
              }));
        }),
      $(steps[x])
        [_0x3bc127(0x21a)](_0x3bc127(0x25b))
        ["find"](":input[type=\x22email\x22]")
        [_0x3bc127(0x1fc)](function (_0x2c75c7) {
          const _0x105d1d = _0x3bc127;
          (skipTo = undefined),
            $(this)
              ["parents"](_0x105d1d(0x29e))
              [_0x105d1d(0x1f7)](_0x105d1d(0x2c2)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0x105d1d(0x29e))
                ["data"]("skip-to")),
            $(this)
              ["parents"](_0x105d1d(0x2b6))
              [_0x105d1d(0x2df)](_0x105d1d(0x239)) &&
              ((answer = $(this)
                [_0x105d1d(0x23b)](_0x105d1d(0x2b6))
                [_0x105d1d(0x2df)](_0x105d1d(0x239))),
              (selections = selections[_0x105d1d(0x29f)](
                (_0x4ba34e) => _0x4ba34e["step"] !== x
              )),
              selections[_0x105d1d(0x279)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x105d1d(0x279)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x10d7b3) => _0x10d7b3[_0x105d1d(0x2c3)] === x
                )),
                (selections[objIndex][_0x105d1d(0x2e9)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        });
  }
  $(steps[x])[_0x3bc127(0x21a)](_0x3bc127(0x29d))["is"](_0x3bc127(0x242)) &&
    ((selArr = []),
    $(steps)
      [_0x3bc127(0x21a)]("[data-selected]:checked")
      ["each"](function (_0x4a72df, _0x53ce87) {
        const _0x380fbd = _0x3bc127;
        selArr[_0x380fbd(0x279)]({
          selected: $(this)[_0x380fbd(0x1f7)](_0x380fbd(0x2a0)),
        });
      }),
    (selString = []),
    selArr[_0x3bc127(0x241)]((_0x3f3627) =>
      selString[_0x3bc127(0x279)](_0x3f3627[_0x3bc127(0x2a0)])
    ),
    (selections = selections[_0x3bc127(0x29f)](
      (_0x29caea) => _0x29caea[_0x3bc127(0x2c3)] !== x
    )),
    $(steps[x])
      [_0x3bc127(0x21a)](_0x3bc127(0x25b))
      [_0x3bc127(0x21a)](":input[type=\x27radio\x27]:checked")
      [_0x3bc127(0x1fc)](function () {
        const _0x3f4498 = _0x3bc127;
        skipTo = undefined;
        if (
          $(this)
            [_0x3f4498(0x23b)](_0x3f4498(0x29e))
            [_0x3f4498(0x1f7)](_0x3f4498(0x2c2))
        )
          skipTo = $(this)
            [_0x3f4498(0x23b)](_0x3f4498(0x29e))
            [_0x3f4498(0x1f7)](_0x3f4498(0x2c2));
        else
          $(this)["data"]("skip-to") &&
            (skipTo = $(this)["data"](_0x3f4498(0x2c2)));
        if ($(this)[_0x3f4498(0x1f7)](_0x3f4498(0x252)))
          (answer = $(this)[_0x3f4498(0x2df)](_0x3f4498(0x239))),
            selections[_0x3f4498(0x279)]({ step: x, selected: answer }),
            skipTo &&
              (selections["push"]({ step: skipTo - 0x2, selected: answer }),
              (objIndex = selections[_0x3f4498(0x245)](
                (_0x5908e0) => _0x5908e0[_0x3f4498(0x2c3)] === x
              )),
              (selections[objIndex][_0x3f4498(0x2e9)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x3f4498(0x2b8)] = x));
        else
          $(this)
            [_0x3f4498(0x23b)](_0x3f4498(0x2b6))
            [_0x3f4498(0x1f7)](_0x3f4498(0x252)) &&
            ((answer = $(this)
              [_0x3f4498(0x23b)](_0x3f4498(0x2b6))
              [_0x3f4498(0x1f7)]("go-to")),
            selections[_0x3f4498(0x279)]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0x3f4498(0x279)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0x3f4498(0x245)](
                (_0x554e79) => _0x554e79[_0x3f4498(0x2c3)] === x
              )),
              (selections[objIndex][_0x3f4498(0x2e9)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x3f4498(0x2b8)] = x)));
      }),
    console[_0x3bc127(0x2e2)](),
    logicExtra
      ? ($(steps[x])
          [_0x3bc127(0x21a)]("[data-answer]:visible")
          [_0x3bc127(0x21a)](_0x3bc127(0x2ca))
          ["parents"]()
          [_0x3bc127(0x1f7)](_0x3bc127(0x1f9)) === !![] ||
          $(steps[x])
            [_0x3bc127(0x21a)](_0x3bc127(0x2b3))
            ["parents"]()
            ["data"](_0x3bc127(0x1f9)) === !![]) &&
        skip &&
        selections["filter"]((_0x44a668) => _0x44a668["step"] === x)[
          _0x3bc127(0x243)
        ] > 0x0 &&
        textareaLength === 0x0 &&
        textInputLength === 0x0 &&
        emailInputLength === 0x0 &&
        checkboxInputLength === 0x0 &&
        setTimeout(function () {
          (next = !![]), nextStep(), selectionQuiz();
        }, $(steps[x])
          [_0x3bc127(0x21a)](_0x3bc127(0x2e0))
          ["data"](_0x3bc127(0x29b)))
      : $(steps[x])
          [_0x3bc127(0x21a)](_0x3bc127(0x2ca))
          [_0x3bc127(0x23b)]()
          ["data"](_0x3bc127(0x1f9)) === !![] &&
        skip &&
        textareaLength === 0x0 &&
        textInputLength === 0x0 &&
        emailInputLength === 0x0 &&
        checkboxInputLength === 0x0 &&
        setTimeout(function () {
          (next = !![]), nextStep(), selectionQuiz();
        }, $(steps[x])
          [_0x3bc127(0x21a)](_0x3bc127(0x2e0))
          [_0x3bc127(0x1f7)]("radio-delay"))),
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
  const _0x1c6759 = _0x413e4f;
  $(_0x1c6759(0x23c))[_0x1c6759(0x26b)](),
    unfilledArr[_0x1c6759(0x243)] > 0x0 &&
      unfilledArr[_0x1c6759(0x241)](function (_0x1ade27) {
        const _0x5bf296 = _0x1c6759;
        $(_0x5bf296(0x2a9) + _0x1ade27[_0x5bf296(0x2d8)] + "\x22]")
          [_0x5bf296(0x23f)]("[data-text=\x22error-message\x22]")
          ["fadeIn"](),
          $(_0x5bf296(0x2a9) + _0x1ade27[_0x5bf296(0x2d8)] + "\x22]")
            ["parents"]()
            [_0x5bf296(0x230)](_0x5bf296(0x23c))
            [_0x5bf296(0x202)](),
          $(_0x5bf296(0x2e3) + _0x1ade27["input"] + "\x22]")
            [_0x5bf296(0x23f)]("[data-text=\x22error-message\x22]")
            [_0x5bf296(0x202)](),
          $(_0x5bf296(0x256) + _0x1ade27[_0x5bf296(0x2d8)] + "\x22]")
            [_0x5bf296(0x23f)](_0x5bf296(0x23c))
            [_0x5bf296(0x202)]();
      });
}
function resetInputErrorMessage(_0x27b63b) {
  const _0x2c3d5d = _0x413e4f;
  $("input[name=\x22" + _0x27b63b + "\x22]")
    [_0x2c3d5d(0x23f)]("[data-text=\x22error-message\x22]")
    [_0x2c3d5d(0x26b)](),
    $(_0x2c3d5d(0x2a9) + _0x27b63b + "\x22]")
      ["parents"]()
      ["children"](_0x2c3d5d(0x23c))
      ["hide"](),
    $(_0x2c3d5d(0x2e3) + _0x27b63b + "\x22]")
      [_0x2c3d5d(0x23f)](_0x2c3d5d(0x23c))
      [_0x2c3d5d(0x26b)](),
    $(_0x2c3d5d(0x256) + _0x27b63b + "\x22]")
      [_0x2c3d5d(0x23f)](_0x2c3d5d(0x23c))
      [_0x2c3d5d(0x26b)]();
}
function nextStep() {
  const _0x2e536b = _0x413e4f;
  customError
    ? ($(_0x2e536b(0x23c))[_0x2e536b(0x26b)](),
      fill
        ? (x++,
          countCard
            ? ((curStep = curStep + 0x1),
              $(_0x2e536b(0x23a))[_0x2e536b(0x282)](steps[_0x2e536b(0x243)]))
            : $(steps[x])["data"](_0x2e536b(0x2ba))
            ? (curStep = curStep + 0x0)
            : (curStep = curStep + 0x1),
          $(_0x2e536b(0x28b))[_0x2e536b(0x282)](curStep),
          (progress = x),
          x <= steps[_0x2e536b(0x243)] - 0x1 &&
            (updateStep(), memory && saveFilledInput()))
        : displayErrorMessage())
    : (x++,
      countCard
        ? ((curStep = curStep + 0x1),
          $(_0x2e536b(0x23a))[_0x2e536b(0x282)](steps[_0x2e536b(0x243)]))
        : $(steps[x])[_0x2e536b(0x1f7)](_0x2e536b(0x2ba))
        ? (curStep = curStep + 0x0)
        : (curStep = curStep + 0x1),
      $("[data-text=\x22current-step\x22]")["text"](curStep),
      x > progress && (progress = x),
      x <= steps[_0x2e536b(0x243)] - 0x1 &&
        (updateStep(), memory && saveFilledInput()));
}
function backStep() {
  const _0x423d5f = _0x413e4f;
  customError && $(_0x423d5f(0x23c))[_0x423d5f(0x26b)](),
    countCard
      ? ((curStep = curStep - 0x1),
        $("[data-text=\x22total-steps\x22]")["text"](steps[_0x423d5f(0x243)]))
      : $(steps[x])[_0x423d5f(0x1f7)](_0x423d5f(0x2ba))
      ? (curStep = curStep - 0x0)
      : (curStep = curStep - 0x1),
    $(_0x423d5f(0x28b))["text"](curStep),
    x > 0x0 &&
      ($(progressbar[x])[_0x423d5f(0x283)](_0x423d5f(0x2d1)),
      selections[_0x423d5f(0x29f)](
        (_0x4901c8) => _0x4901c8[_0x423d5f(0x2e9)] === x
      )["length"] > 0x0
        ? (x = parseInt(
            getSafe(
              () =>
                selections[_0x423d5f(0x29f)](
                  (_0x5b18b9) => _0x5b18b9["skipTo"] === x
                )[0x0][_0x423d5f(0x2b8)]
            )
          ))
        : x--,
      updateStep()),
    ($(steps[x])
      [_0x423d5f(0x21a)](_0x423d5f(0x2d4))
      [_0x423d5f(0x1f7)](_0x423d5f(0x1f9)) === !![] ||
      $(steps[x])
        ["find"](_0x423d5f(0x25b))
        ["find"](_0x423d5f(0x2d4))
        [_0x423d5f(0x1f7)](_0x423d5f(0x1f9)) === !![] ||
      $(steps[x])["find"](_0x423d5f(0x2b3))["data"](_0x423d5f(0x1f9)) ===
        !![]) &&
      ($(steps[x])
        ["find"](_0x423d5f(0x2bd))
        [_0x423d5f(0x267)](_0x423d5f(0x258), ![]),
      $(steps[x])
        [_0x423d5f(0x21a)](".w-form-formradioinput")
        [_0x423d5f(0x283)](_0x423d5f(0x274)),
      validation());
}
weightedSelectionRange &&
  $(_0x413e4f(0x2be))[_0x413e4f(0x1fc)](function () {
    const _0x379556 = _0x413e4f;
    $(this)["append"](
      "<div\x20data-range=\x22selection\x22\x20style=\x22display:none\x20!important\x22>" +
        $(this)[_0x379556(0x1f7)](_0x379556(0x22c)) +
        _0x379556(0x236)
    );
  });
function selectionQuiz() {
  const _0x173017 = _0x413e4f;
  if ($(this)[_0x173017(0x21a)](_0x173017(0x2bf))) {
    $(_0x173017(0x2be))[_0x173017(0x26b)](), $(_0x173017(0x1ff))["hide"]();
    if (weightedSelection) {
      (selTotal = 0x0),
        selArr[_0x173017(0x241)](function (_0x1355c1) {
          const _0x3974c4 = _0x173017;
          selTotal = selTotal + _0x1355c1[_0x3974c4(0x2a0)];
        }),
        $(_0x173017(0x20c))["text"](selTotal);
      if (
        $("[data-selection=\x22" + selTotal + "\x22]")[_0x173017(0x243)] > 0x0
      )
        $(_0x173017(0x216) + selTotal + "\x22]")[_0x173017(0x202)]();
      else
        $(_0x173017(0x2b7) + selTotal + ")")
          ? $("[data-range]:contains(" + selTotal + ")")
              [_0x173017(0x2b0)](_0x173017(0x2be))
              ["eq"](0x0)
              [_0x173017(0x215)]()
          : $(_0x173017(0x22d))[_0x173017(0x202)]();
    } else {
      let _0x329ca0 = -0x1;
      $("[data-selection]")["each"](function (_0x4c5569) {
        const _0xc2123 = _0x173017;
        $($(_0xc2123(0x2be))[_0x4c5569])
          [_0xc2123(0x1f7)](_0xc2123(0x22c))
          ["includes"](selString[_0xc2123(0x2a1)]()) && (_0x329ca0 = _0x4c5569);
      }),
        _0x329ca0 > -0x1
          ? $($("[data-selection]")[_0x329ca0])[_0x173017(0x202)]()
          : $(_0x173017(0x22d))[_0x173017(0x202)]();
    }
  }
}
function triggerInputAllData() {
  const _0x2054da = _0x413e4f;
  savedFilledInput &&
    memory &&
    savedFilledInput[_0x2054da(0x241)]((_0x2dde13) => {
      const _0x4f5338 = _0x2054da;
      if (
        $(
          _0x4f5338(0x2a9) +
            _0x2dde13["inputName"] +
            _0x4f5338(0x221) +
            _0x2dde13[_0x4f5338(0x2bb)] +
            "\x22]"
        )[_0x4f5338(0x2df)]("type") === _0x4f5338(0x238)
      )
        $(
          _0x4f5338(0x2a9) +
            _0x2dde13["inputName"] +
            "\x22][value=\x22" +
            _0x2dde13[_0x4f5338(0x2bb)] +
            "\x22]"
        )[_0x4f5338(0x28a)]("input");
      else
        _0x2dde13[_0x4f5338(0x2bb)] === "on"
          ? $("input[name=\x22" + _0x2dde13["inputName"] + "\x22]")[
              _0x4f5338(0x28a)
            ](_0x4f5338(0x2d8))
          : ($(_0x4f5338(0x2a9) + _0x2dde13[_0x4f5338(0x204)] + "\x22]")[
              _0x4f5338(0x28a)
            ](_0x4f5338(0x2d8)),
            $("input[name=\x22" + _0x2dde13[_0x4f5338(0x204)] + "\x22]")[
              _0x4f5338(0x28a)
            ](_0x4f5338(0x207)));
    }),
    $(_0x2054da(0x2e1))
      [_0x2054da(0x21a)](_0x2054da(0x2d8))
      [_0x2054da(0x28a)](_0x2054da(0x2d8)),
    $("[data-form=\x22multistep\x22]")
      [_0x2054da(0x21a)](_0x2054da(0x2d8))
      [_0x2054da(0x28a)]("change"),
    $(_0x2054da(0x2e1))
      [_0x2054da(0x21a)](_0x2054da(0x257))
      [_0x2054da(0x28a)]("change"),
    $("[data-form=\x22multistep\x22]")
      [_0x2054da(0x21a)](_0x2054da(0x2d0))
      ["trigger"](_0x2054da(0x207));
}
$(_0x413e4f(0x208))["on"](_0x413e4f(0x25f), function () {
  (next = !![]), nextStep(), selectionQuiz();
}),
  $(_0x413e4f(0x210))["on"](_0x413e4f(0x25f), function () {
    (next = ![]), (back = !![]), backStep();
  }),
  $(steps)
    ["find"](_0x413e4f(0x222))
    ["on"]("input", function (_0x1805e7) {
      const _0x5e0d84 = _0x413e4f;
      $(this)[_0x5e0d84(0x2df)](_0x5e0d84(0x2d9)) === "radio" && (skip = !![]),
        validation();
    });
$(_0x413e4f(0x269))["data"](_0x413e4f(0x219))
  ? $(_0x413e4f(0x226))["removeClass"](_0x413e4f(0x1fb))
  : $(_0x413e4f(0x226))[_0x413e4f(0x22f)](_0x413e4f(0x1fb));
function clickableIndicator() {
  const _0x3c09c1 = _0x413e4f;
  $(_0x3c09c1(0x254))[_0x3c09c1(0x1f7)](_0x3c09c1(0x1f1)) &&
    ($(_0x3c09c1(0x27d))[_0x3c09c1(0x283)](_0x3c09c1(0x2d1)),
    $("[data-clickable]")["data"](_0x3c09c1(0x219))
      ? ((x = $(this)[_0x3c09c1(0x28d)]()), updateStep())
      : $(this)[_0x3c09c1(0x28d)]() <= progress &&
        ((x = $(this)["index"]()), updateStep()));
}
$(_0x413e4f(0x226))["on"](_0x413e4f(0x25f), clickableIndicator);
$(_0x413e4f(0x2e1))[_0x413e4f(0x1f7)](_0x413e4f(0x1f8)) &&
  ($(_0x413e4f(0x2b6))[_0x413e4f(0x1fc)](function () {
    const _0x141131 = _0x413e4f;
    $(this)[_0x141131(0x211)](
      "<br>Data\x20Go\x20To\x20=\x20",
      $(this)[_0x141131(0x1f7)](_0x141131(0x252))
    );
  }),
  $(_0x413e4f(0x20a))[_0x413e4f(0x1fc)](function () {
    const _0x2aa642 = _0x413e4f;
    $(this)[_0x2aa642(0x211)](
      _0x2aa642(0x21f),
      $(this)[_0x2aa642(0x1f7)](_0x2aa642(0x1fe))
    );
  }));
$("[data-form=\x22submit-btn\x22]")["on"]("click", function (_0x135ada) {
  const _0x1fdf08 = _0x413e4f;
  $(this)["data"](_0x1fdf08(0x281)) &&
    (redirectTo = $(this)["data"](_0x1fdf08(0x281))),
    !$(this)[_0x1fdf08(0x1f7)]("new-tab") &&
      (newTab = $(this)[_0x1fdf08(0x1f7)]("new-tab")),
    (successCard = $(this)["data"](_0x1fdf08(0x23d))),
    _0x135ada[_0x1fdf08(0x26e)](),
    _0x135ada[_0x1fdf08(0x24e)](),
    logicExtra &&
      ($(this)["prop"](_0x1fdf08(0x20f), !![]),
      $(steps)[_0x1fdf08(0x21a)](":input")["prop"](_0x1fdf08(0x2ab), ![])),
    localStorage[_0x1fdf08(0x20e)](_0x1fdf08(0x261)),
    fill &&
      ($(this)[_0x1fdf08(0x1f7)](_0x1fdf08(0x2c7))
        ? $(this)[_0x1fdf08(0x24d)]($(this)[_0x1fdf08(0x1f7)](_0x1fdf08(0x2c7)))
        : ($(this)[_0x1fdf08(0x24d)](_0x1fdf08(0x22b)),
          $(this)[_0x1fdf08(0x282)](_0x1fdf08(0x22b))),
      $(_0x1fdf08(0x2e1))["submit"](),
      $(_0x1fdf08(0x249))[_0x1fdf08(0x243)] > 0x0 &&
        grecaptcha[_0x1fdf08(0x2b1)]()[_0x1fdf08(0x243)] === 0x0 &&
        (form[_0x1fdf08(0x21a)](_0x1fdf08(0x2bc))[_0x1fdf08(0x282)](
          oldSubmitText
        ),
        form[_0x1fdf08(0x21a)](_0x1fdf08(0x2bc))[_0x1fdf08(0x24d)](
          oldSubmitText
        )));
});
function resetFormly() {
  const _0x120ae6 = _0x413e4f;
  $(_0x120ae6(0x2e1))[_0x120ae6(0x28a)]("reset"),
    $("[data-form=\x22multistep\x22]")
      [_0x120ae6(0x23b)]()
      [_0x120ae6(0x21a)](_0x120ae6(0x2b4))
      ["hide"](),
    (x = 0x0),
    updateStep(),
    $("[data-form=\x22multistep\x22]")[_0x120ae6(0x215)](),
    $(_0x120ae6(0x2bc))[_0x120ae6(0x282)](oldSubmitText),
    $(_0x120ae6(0x2bc))[_0x120ae6(0x24d)](oldSubmitText),
    $(_0x120ae6(0x28b))[_0x120ae6(0x282)](0x1),
    $(_0x120ae6(0x2e1))
      [_0x120ae6(0x21a)]("input:checkbox")
      [_0x120ae6(0x23f)](_0x120ae6(0x27f))
      [_0x120ae6(0x283)](_0x120ae6(0x274));
}
function _0x5799() {
  const _0x32f93d = [
    "input:radio[required]",
    "[data-clickable]",
    "block-domain",
    "select[name=\x22",
    "textarea",
    "checked",
    "[data-display=\x22",
    "select-multiple",
    "[data-answer]:visible",
    "open",
    "keyCode",
    "[data-form=\x22step\x22]:not([data-card=\x22true\x22])",
    "click",
    "scroll-top-offset",
    "filledInput",
    "[data-weighted-selection]",
    "scroll-top",
    "data-skip-to",
    "clone",
    "reset-delay",
    "prop",
    "delete",
    "[data-clickable-all]",
    "558322oGmVwY",
    "hide",
    "3685kaUEZT",
    "2757OOIsrr",
    "preventDefault",
    "select[required]",
    "field",
    "option[value=\x22$(this).val()\x22]",
    "2876XXicOD",
    "readystatechange",
    "w--redirected-checked",
    "input[autofocus]",
    "includes",
    "textarea[required]",
    "dispatchEvent",
    "push",
    "input[type=\x22checkbox\x22]:visible",
    "input:checkbox",
    ":input[required]",
    "[data-form=\x22progress-indicator\x22]",
    "searchParams",
    ".w-checkbox-input",
    "auto",
    "redirect",
    "text",
    "removeClass",
    "submit-show",
    "[data-index=\x22",
    "memory",
    "[data-answer=\x22",
    "[data-display-wrapper=\x22",
    "phone-validation",
    "trigger",
    "[data-text=\x22current-step\x22]",
    "custom-error-message",
    "index",
    "ajaxComplete",
    "history",
    "https://webflow.com/api/v1/form/",
    "replaceState",
    "input-field",
    "8xXCDPw",
    "ctrlKey",
    ":input[type=\x22number\x22][required]",
    "[data-enter]",
    "last",
    "focus",
    "64150LQgimo",
    "set",
    "radio-delay",
    "keypress",
    ":input[type=\x22radio\x22]",
    "[data-skip-to]",
    "filter",
    "selected",
    "join",
    "slow",
    "input[type=\x22submit\x22]",
    "redirect-delay",
    "[data-form=\x22step\x22][data-card]",
    "[data-clone-wrapper=\x22",
    "href",
    "replace",
    "input[name=\x22",
    "[type=\x22submit\x22]",
    "required",
    "logic-extra",
    ":input[type=\x22checkbox\x22]:checked",
    "remove",
    "data-input-field",
    "parent",
    "getResponse",
    "[data-form=\x22submit\x22]:visible",
    "[data-answer][data-radio-skip]:visible",
    ".w-form-done",
    "[data-checkbox]",
    "[data-go-to]",
    "[data-range]:contains(",
    "backTo",
    "body",
    "card",
    "value",
    "[data-form=\x22submit-btn\x22]",
    "input[type=\x22radio\x22]",
    "[data-selection]",
    "[data-btn=\x22check\x22]",
    ":input[type=\x22checkbox\x22][required]",
    ":input[type=\x22file\x22]",
    "skip-to",
    "step",
    "slice",
    "weighted-selection-range",
    "[data-redirect-delay]",
    "wait",
    "location",
    "quiz",
    ":input[type=\x22radio\x22]:checked",
    "4071594xjFcCX",
    "[data-btn=\x22reset\x22]",
    "test",
    "select[required]:visible",
    "0.4",
    "select",
    "current",
    "[data-form=\x22progress\x22]",
    "[data-count-card]",
    "[data-radio-skip]:visible",
    "<option>",
    "1504027yQMGNQ",
    "input:radio[name=\x22",
    "input",
    "type",
    "\x22]:checked",
    "812748pYmYBD",
    "not",
    "Webflow",
    "textarea[autofocus]",
    "attr",
    "[data-radio-delay]",
    "[data-form=\x22multistep\x22]",
    "log",
    "textarea[name=\x22",
    "trim",
    "none",
    "[data-cms-select=input]",
    ":input[type=\x22file\x22][required]",
    "css",
    "skipTo",
    "clickable",
    "keydown",
    "min-character",
    "span",
    "[data-add-new]",
    "ms-field",
    "data",
    "debug-mode",
    "radio-skip",
    "split",
    "disabled",
    "each",
    "form[data-form=\x22multistep\x22]\x20:input",
    "answer",
    "[data-selection-weight]",
    "textarea[required]:visible",
    "phone-autoformat",
    "fadeIn",
    "reinit",
    "inputName",
    "offset",
    "[data-input-field=\x22",
    "change",
    "[data-form=\x22next-btn\x22]",
    "[data-success-card]",
    "[data-answer]",
    "5665914OEBDwM",
    "[data-text=\x22total-weight\x22]",
    "data-radio-skip",
    "removeItem",
    "novalidate",
    "[data-form=\x22back-btn\x22]",
    "append",
    "query-param",
    "checkbox",
    "[data-form=\x22submit-btn\x22]:visible",
    "show",
    "[data-selection=\x22",
    "stringify",
    "[data-form=\x22next-btn\x22][data-submit-show]",
    "clickable-all",
    "find",
    ".w-radio-input",
    ":input[type=\x22checkbox\x22][required]:checked",
    "data-name",
    "edit-step",
    "<br>Data\x20Answer\x20=\x20",
    "html,\x20body",
    "\x22][value=\x22",
    ":input",
    "input[type=\x22email\x22]:visible",
    "[data-btn=\x22edit\x22]",
    "[data-form=\x22step\x22]",
    "[data-form=\x22custom-progress-indicator\x22]",
    "redirect-form-hehexd",
    ":input[type=\x22email\x22][required]",
    "parse",
    "[data-query-param]",
    "Please\x20wait...",
    "selection",
    "[data-selection=\x22other\x22]",
    "name",
    "addClass",
    "children",
    "_blank",
    "init",
    "[data-form-ms=\x22submit-btn\x22]",
    "5bZeZYY",
    "animate",
    "</div>",
    "key",
    "radio",
    "data-go-to",
    "[data-text=\x22total-steps\x22]",
    "parents",
    "[data-text=\x22error-message\x22]",
    "success",
    "[data-input-field]",
    "siblings",
    "option[value=\x22",
    "forEach",
    ":checked",
    "length",
    "[data-weighted-selection-range]",
    "findIndex",
    "weighted-selection",
    "Enter",
    "[data-form=\x22next-btn\x22][type=\x22submit\x22]",
    "div.g-recaptcha",
    "count-card",
    "[data-clone=\x22",
    "match",
    "val",
    "stopPropagation",
    ":input[type=\x22checkbox\x22]",
    "data-radio-delay",
    "[data-select-multiple]",
    "go-to",
  ];
  _0x5799 = function () {
    return _0x32f93d;
  };
  return _0x5799();
}
$(document)[_0x413e4f(0x28e)](function (_0x4e6494, _0x4569c3, _0x5b739d) {
  const _0x50cbc4 = _0x413e4f;
  if (_0x5b739d["url"]["includes"](_0x50cbc4(0x290))) {
    const _0x130485 = _0x4569c3["status"] === 0xc8,
      _0x5424c8 = _0x50cbc4(0x227);
    redirectTo &&
      _0x130485 &&
      (newTab
        ? window[_0x50cbc4(0x25c)](redirectTo, _0x50cbc4(0x231))
        : setTimeout(() => {
            location["href"] = redirectTo;
          }, redirectDelay)),
      _0x130485 &&
        successCard !== "" &&
        $("[data-success-card=\x22" + successCard + "\x22]")[
          _0x50cbc4(0x202)
        ](),
      _0x130485 &&
        formReset &&
        setTimeout(() => {
          resetFormly();
        }, resetDelay),
      !_0x130485 &&
        ($(_0x50cbc4(0x2bc))[_0x50cbc4(0x24d)](_0x50cbc4(0x22b)),
        $(_0x50cbc4(0x2bc))[_0x50cbc4(0x282)]("Please\x20wait..."));
  }
}),
  $(_0x413e4f(0x224))["on"](_0x413e4f(0x25f), function () {
    const _0x500285 = _0x413e4f;
    var _0x55e723 = $(this)
      [_0x500285(0x2b0)]()
      ["find"](_0x500285(0x23e))
      [_0x500285(0x1f7)](_0x500285(0x292));
    setTimeout(function () {
      const _0x2485a3 = _0x500285;
      $(_0x2485a3(0x2a9) + _0x55e723 + "\x22]")["focus"]();
    }, 0x64),
      (back = !![]),
      (x = $(this)[_0x500285(0x1f7)](_0x500285(0x21e)) - 0x1),
      updateStep(),
      countCard
        ? ((curStep = x + 0x1),
          $("[data-text=\x22total-steps\x22]")[_0x500285(0x282)](
            steps[_0x500285(0x243)]
          ))
        : $(steps[x])[_0x500285(0x1f7)](_0x500285(0x2ba))
        ? (curStep = x + 0x0)
        : (curStep = x + 0x1),
      $(_0x500285(0x28b))[_0x500285(0x282)](curStep),
      (back = ![]);
  }),
  $(_0x413e4f(0x2cc))["on"](_0x413e4f(0x25f), function () {
    const _0x1999d3 = _0x413e4f;
    $("[data-form=\x22multistep\x22]")[_0x1999d3(0x28a)]("reset");
    let _0x21d8b2 = $(this);
    $(this)[_0x1999d3(0x282)](_0x1999d3(0x22b)),
      setTimeout(function () {
        const _0x454d75 = _0x1999d3;
        $(_0x21d8b2)[_0x454d75(0x282)](oldResetText),
          $(_0x21d8b2)[_0x454d75(0x23b)](_0x454d75(0x2b4))[_0x454d75(0x26b)](),
          (x = 0x0),
          updateStep(),
          $(_0x454d75(0x2e1))[_0x454d75(0x215)](),
          $(_0x454d75(0x2bc))["text"](oldSubmitText),
          $(_0x454d75(0x2bc))[_0x454d75(0x24d)](oldSubmitText),
          $(_0x21d8b2)[_0x454d75(0x24d)](oldSubmitText),
          $(_0x454d75(0x28b))[_0x454d75(0x282)](0x1),
          $(_0x454d75(0x2e1))
            [_0x454d75(0x21a)](_0x454d75(0x27b))
            [_0x454d75(0x23f)](_0x454d75(0x27f))
            [_0x454d75(0x283)](_0x454d75(0x274));
      }, resetDelay);
  }),
  $(_0x413e4f(0x2b9))["on"](_0x413e4f(0x29c), function (_0x47f551) {
    const _0x5c801f = _0x413e4f;
    _0x47f551[_0x5c801f(0x25d)] === 0xd &&
      fill &&
      ($(_0x5c801f(0x296))[_0x5c801f(0x1f7)]("enter")
        ? (totalSteps > curStep && $(_0x5c801f(0x208))[0x0]["click"](),
          _0x47f551["preventDefault"](),
          _0x47f551[_0x5c801f(0x24e)]())
        : (_0x47f551["preventDefault"](), _0x47f551[_0x5c801f(0x24e)]()));
  }),
  $(_0x413e4f(0x2b9))[_0x413e4f(0x1f2)](function (_0x1e5056) {
    const _0x4c99a0 = _0x413e4f;
    (_0x1e5056["metaKey"] || _0x1e5056[_0x4c99a0(0x294)]) &&
      _0x1e5056[_0x4c99a0(0x25d)] == 0xd &&
      (x >= steps[_0x4c99a0(0x243)] - 0x1 && fill
        ? $(steps[x])[_0x4c99a0(0x21a)](_0x4c99a0(0x214))[_0x4c99a0(0x25f)]()
        : (event[_0x4c99a0(0x26e)](), event[_0x4c99a0(0x24e)]()));
  }),
  $(_0x413e4f(0x257))[_0x413e4f(0x29c)](function (_0x5b924f) {
    const _0x2299d8 = _0x413e4f;
    $(this)["focus"](),
      _0x5b924f["key"] == _0x2299d8(0x247) &&
        (_0x5b924f[_0x2299d8(0x26e)](), _0x5b924f[_0x2299d8(0x24e)]()),
      _0x5b924f["shiftKey"] &&
        _0x5b924f["key"] == _0x2299d8(0x247) &&
        $(this)[_0x2299d8(0x24d)]($(this)["val"]() + "\x0a");
  }),
  $(_0x413e4f(0x2e1))
    [_0x413e4f(0x21a)](_0x413e4f(0x222))
    ["on"](_0x413e4f(0x207), function () {
      const _0x138f85 = _0x413e4f;
      (all_data = all_data["filter"](
        (_0x191147) =>
          _0x191147[_0x138f85(0x270)] !==
          $(this)[_0x138f85(0x2df)](_0x138f85(0x22e))
      )),
        $(this)[_0x138f85(0x2df)](_0x138f85(0x2d9)) === _0x138f85(0x213)
          ? $(this)["is"](_0x138f85(0x242))
            ? all_data[_0x138f85(0x279)]({
                field: $(this)["attr"](_0x138f85(0x22e)),
                value: $(this)
                  ["siblings"](_0x138f85(0x1f4))
                  [_0x138f85(0x282)](),
              })
            : $(
                _0x138f85(0x206) +
                  $(this)[_0x138f85(0x2df)](_0x138f85(0x22e)) +
                  "\x22]"
              )[_0x138f85(0x26b)]()
          : (all_data[_0x138f85(0x279)]({
              field: $(this)["attr"]("name"),
              value: $(this)[_0x138f85(0x24d)](),
            }),
            $(this)[_0x138f85(0x24d)]() !== "" &&
              resetInputErrorMessage(
                $(this)[_0x138f85(0x2df)](_0x138f85(0x22e))
              )),
        all_data[_0x138f85(0x241)](function (_0x45366d) {
          const _0x52be4a = _0x138f85;
          $("[data-input-field=\x22" + _0x45366d[_0x52be4a(0x270)] + "\x22]")[
            _0x52be4a(0x202)
          ](),
            $(_0x52be4a(0x206) + _0x45366d[_0x52be4a(0x270)] + "\x22]")[
              _0x52be4a(0x282)
            ](_0x45366d["value"]);
        });
    }),
  $(_0x413e4f(0x2e1))
    ["find"](_0x413e4f(0x257))
    ["on"](_0x413e4f(0x207), function () {
      const _0x5ed123 = _0x413e4f;
      $(this)["val"]() !== "" &&
        resetInputErrorMessage($(this)["attr"](_0x5ed123(0x22e))),
        (all_data = all_data["filter"](
          (_0x40987b) =>
            _0x40987b[_0x5ed123(0x270)] !==
            $(this)[_0x5ed123(0x2df)](_0x5ed123(0x22e))
        )),
        all_data[_0x5ed123(0x279)]({
          field: $(this)[_0x5ed123(0x2df)]("name"),
          value: $(this)[_0x5ed123(0x24d)](),
        }),
        all_data[_0x5ed123(0x241)](function (_0x510ddc) {
          const _0xdde42b = _0x5ed123;
          $("[data-input-field=\x22" + _0x510ddc["field"] + "\x22]")[
            _0xdde42b(0x202)
          ](),
            $(_0xdde42b(0x206) + _0x510ddc[_0xdde42b(0x270)] + "\x22]")[
              _0xdde42b(0x282)
            ](_0x510ddc[_0xdde42b(0x2bb)]);
        });
    }),
  $(_0x413e4f(0x2e1))
    [_0x413e4f(0x21a)](_0x413e4f(0x2d0))
    ["on"]("change", function () {
      const _0x319664 = _0x413e4f;
      $(this)[_0x319664(0x24d)]() !== "" &&
        resetInputErrorMessage($(this)[_0x319664(0x2df)](_0x319664(0x22e)));
      var _0x1ebb44 = $(this)[_0x319664(0x1f7)](_0x319664(0x1f6));
      (all_data = all_data["filter"](
        (_0x2dd91d) =>
          _0x2dd91d[_0x319664(0x270)] !== $(this)["attr"](_0x319664(0x22e))
      )),
        all_data[_0x319664(0x279)]({
          field: $(this)[_0x319664(0x2df)](_0x319664(0x22e)),
          value: _0x1ebb44
            ? $(this)[_0x319664(0x21a)](_0x319664(0x271))[_0x319664(0x282)]()
            : $(this)[_0x319664(0x24d)](),
        }),
        all_data[_0x319664(0x241)](function (_0x288884) {
          const _0x11426e = _0x319664;
          $(_0x11426e(0x206) + _0x288884[_0x11426e(0x270)] + "\x22]")[
            _0x11426e(0x202)
          ](),
            $(_0x11426e(0x206) + _0x288884["field"] + "\x22]")[
              _0x11426e(0x282)
            ](_0x288884[_0x11426e(0x2bb)]);
        });
    }),
  updateStep(),
  triggerInputAllData(),
  $("[data-cms-select=cms]")[_0x413e4f(0x1fc)](function () {
    const _0x47b054 = _0x413e4f,
      _0x46cc36 = $(this)["find"]("[data-cms-select=text]"),
      _0x3794f7 = [];
    console[_0x47b054(0x2e2)](_0x3794f7),
      _0x46cc36[_0x47b054(0x1fc)](function () {
        const _0x22809c = _0x47b054;
        _0x3794f7[_0x22809c(0x279)]($(this)["text"]()[_0x22809c(0x2e4)]());
      });
    const _0x800a7b = $(this)["siblings"](_0x47b054(0x2e6));
    $[_0x47b054(0x1fc)](_0x3794f7, function (_0x38835c, _0x28d4f1) {
      const _0x1fe38b = _0x47b054,
        _0x20599d = $(_0x1fe38b(0x2d5))
          [_0x1fe38b(0x24d)](_0x28d4f1)
          [_0x1fe38b(0x282)](_0x28d4f1);
      _0x800a7b[_0x1fe38b(0x211)](_0x20599d);
    });
  }),
  $(_0x413e4f(0x1f5))["on"](_0x413e4f(0x25f), function () {
    const _0x33c915 = _0x413e4f;
    let _0x2feed4 = $(this)["data"]("add-new");
    var _0x14451c = $("[data-clone=\x22" + _0x2feed4 + "\x22]")
        ["eq"](0x0)
        [_0x33c915(0x265)](!![]),
      _0x3730b3 = $(_0x33c915(0x259) + _0x2feed4 + "\x22]")
        ["eq"](0x0)
        [_0x33c915(0x265)](!![]);
    _0x14451c[_0x33c915(0x21a)](_0x33c915(0x2d8))[_0x33c915(0x1fc)](
      function () {
        const _0x1d90e9 = _0x33c915;
        $(this)[_0x1d90e9(0x24d)](""),
          $(this)[_0x1d90e9(0x2df)](
            "name",
            this["name"] +
              "-" +
              (parseInt(
                $("[data-clone=\x22" + _0x2feed4 + "\x22]")
                  ["last"]()
                  [_0x1d90e9(0x28d)]()
              ) +
                0x1)
          ),
          $(this)[_0x1d90e9(0x2df)](
            _0x1d90e9(0x21d),
            $(this)[_0x1d90e9(0x1f7)](_0x1d90e9(0x22e)) +
              "-" +
              (parseInt(
                $("[data-clone=\x22" + _0x2feed4 + "\x22]")
                  [_0x1d90e9(0x297)]()
                  [_0x1d90e9(0x28d)]()
              ) +
                0x1)
          );
      }
    ),
      _0x3730b3[_0x33c915(0x21a)](_0x33c915(0x23e))[_0x33c915(0x1fc)](
        function () {
          const _0x1d8685 = _0x33c915;
          $(this)[_0x1d8685(0x2df)](
            _0x1d8685(0x2af),
            $(this)["data"]("input-field") +
              "-" +
              (parseInt(
                $(_0x1d8685(0x24b) + _0x2feed4 + "\x22]")
                  [_0x1d8685(0x297)]()
                  [_0x1d8685(0x28d)]()
              ) +
                0x1)
          );
        }
      ),
      $(_0x33c915(0x2a6) + _0x2feed4 + "\x22]")[_0x33c915(0x211)](_0x14451c),
      $(_0x33c915(0x288) + _0x2feed4 + "\x22]")[_0x33c915(0x211)](_0x3730b3),
      $(_0x33c915(0x285) + _0x2feed4 + "\x22]")[_0x33c915(0x1fc)](function () {
        const _0x52ec09 = _0x33c915;
        $(this)[_0x52ec09(0x282)](
          $(this)
            [_0x52ec09(0x23b)](_0x52ec09(0x24b) + _0x2feed4 + "\x22]")
            [_0x52ec09(0x28d)]() + 0x1
        );
      }),
      $("[data-display-index=\x22" + _0x2feed4 + "\x22]")["each"](function () {
        const _0x4824f2 = _0x33c915;
        $(this)[_0x4824f2(0x282)](
          $(this)
            ["parents"]("[data-display=\x22" + _0x2feed4 + "\x22]")
            ["index"]() + 0x1
        );
      }),
      validation();
  }),
  scrollTop();
