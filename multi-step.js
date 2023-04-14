//14-4-23 Update

const _0x17e519 = _0xa73c;
(function (_0x754000, _0x26a2d9) {
  const _0x5d5f7d = _0xa73c,
    _0x3c517e = _0x754000();
  while (!![]) {
    try {
      const _0x1224c2 =
        -parseInt(_0x5d5f7d(0x177)) / 0x1 +
        parseInt(_0x5d5f7d(0x1d9)) / 0x2 +
        (-parseInt(_0x5d5f7d(0x1f1)) / 0x3) *
          (parseInt(_0x5d5f7d(0x1b7)) / 0x4) +
        parseInt(_0x5d5f7d(0x1a9)) / 0x5 +
        -parseInt(_0x5d5f7d(0x179)) / 0x6 +
        (parseInt(_0x5d5f7d(0x218)) / 0x7) *
          (-parseInt(_0x5d5f7d(0x233)) / 0x8) +
        parseInt(_0x5d5f7d(0x1fa)) / 0x9;
      if (_0x1224c2 === _0x26a2d9) break;
      else _0x3c517e["push"](_0x3c517e["shift"]());
    } catch (_0x29e6c3) {
      _0x3c517e["push"](_0x3c517e["shift"]());
    }
  }
})(_0x26c5, 0xe971e);
let x = 0x0,
  curStep = 0x0,
  steps = $("[data-form=\x22step\x22]"),
  progressbarClone = $("[data-form=\x22progress-indicator\x22]")[
    _0x17e519(0x171)
  ](),
  progressbar,
  countCard = !![],
  selectMultiple = $(_0x17e519(0x211))[_0x17e519(0x16c)](_0x17e519(0x175)),
  customError = $("[data-custom-error-message]")["data"](_0x17e519(0x1ac)),
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
  reinitIX = $(_0x17e519(0x1ee))[_0x17e519(0x16c)](_0x17e519(0x1ed)),
  textareaLength = 0x0,
  textInputLength = 0x0,
  emailInputLength = 0x0,
  selectInputLength = 0x0,
  checkboxInputLength = 0x0,
  filledInput = [],
  savedFilledInput = JSON["parse"](
    localStorage[_0x17e519(0x1a7)](_0x17e519(0x1bc))
  ),
  memory = $("[data-memory]")[_0x17e519(0x16c)](_0x17e519(0x21f)),
  quiz = $("[data-quiz]")["data"](_0x17e519(0x19d)),
  progress = 0x0;
const urlFormly = new URL(window["location"][_0x17e519(0x1a1)]);
let params = $(_0x17e519(0x237))["data"]("query-param"),
  skipTo = 0x0,
  next = ![],
  back = ![],
  selArr = [],
  selString = [],
  emptyInput = 0x0,
  searchQ = [],
  domainAllowed = !![],
  dom = [],
  logicExtra = $(_0x17e519(0x215))["data"](_0x17e519(0x226)),
  oldSubmitText = $("[data-form=\x22submit-btn\x22]")[_0x17e519(0x1da)](),
  oldResetText = $(_0x17e519(0x239))[_0x17e519(0x1d5)](),
  formReset = $(_0x17e519(0x215))[_0x17e519(0x16c)](_0x17e519(0x1ce)),
  successCard = "",
  redirectTo = "",
  totalSteps = 0x0;
all_data = [];
$(_0x17e519(0x208))[_0x17e519(0x1be)] > 0x0 &&
  (countCard = $(_0x17e519(0x208))[_0x17e519(0x16c)](_0x17e519(0x1c7)));
$(progressbarClone)[_0x17e519(0x1e5)](_0x17e519(0x1b2)),
  $(_0x17e519(0x1a8))[_0x17e519(0x1fc)]()[_0x17e519(0x19b)](),
  $(_0x17e519(0x1e1))[_0x17e519(0x1c5)](),
  steps["each"](function () {
    const _0x1b6b11 = _0x17e519;
    $(_0x1b6b11(0x1a8))[_0x1b6b11(0x22c)](
      progressbarClone["clone"](!![], !![])
    );
  }),
  $(_0x17e519(0x227))[_0x17e519(0x1c5)]();
countCard
  ? ((curStep = curStep + 0x1),
    (totalSteps = steps[_0x17e519(0x1be)]),
    $(_0x17e519(0x19c))[_0x17e519(0x1d5)](totalSteps))
  : ($(steps[x])[_0x17e519(0x16c)]("card")
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    (totalSteps = $(_0x17e519(0x219))[_0x17e519(0x1be)]),
    $(_0x17e519(0x19c))[_0x17e519(0x1d5)](totalSteps),
    $("[data-form=\x22step\x22][data-card]")["each"](function () {
      const _0x2afe85 = _0x17e519;
      $($(_0x2afe85(0x1ef))[$(this)[_0x2afe85(0x178)]()])[_0x2afe85(0x1c5)]();
    }));
(progressbar = $(_0x17e519(0x1a8))[_0x17e519(0x1fc)]()),
  $(_0x17e519(0x1ef))["on"](_0x17e519(0x1ec), clickableIndicator),
  $(_0x17e519(0x222))[_0x17e519(0x1d5)](curStep),
  steps["hide"](),
  $("[data-success-card]")[_0x17e519(0x1c5)](),
  $(_0x17e519(0x1f5))[_0x17e519(0x1f0)](function () {
    const _0x4745be = _0x17e519;
    $(this)["attr"](_0x4745be(0x220), _0x4745be(0x17e));
  });
function getParams() {
  const _0x186124 = _0x17e519;
  urlFormly[_0x186124(0x1b8)][_0x186124(0x1fe)](function (
    _0x1befe6,
    _0x15de55
  ) {
    const _0x3e5f17 = _0x186124;
    searchQ[_0x3e5f17(0x1bb)]({ val: _0x1befe6, key: _0x15de55 });
  });
}
function getSafe(_0x2089c7, _0x4e6af9) {
  try {
    return _0x2089c7();
  } catch (_0x139ec5) {
    return _0x4e6af9;
  }
}
savedFilledInput &&
  memory &&
  savedFilledInput[_0x17e519(0x1fe)]((_0x22e5bc) => {
    const _0x178025 = _0x17e519;
    if (
      $(
        _0x178025(0x1ba) +
          _0x22e5bc["inputName"] +
          _0x178025(0x23f) +
          _0x22e5bc[_0x178025(0x1ab)] +
          "\x22]"
      )[_0x178025(0x238)](_0x178025(0x220)) === _0x178025(0x1b1)
    )
      $(
        _0x178025(0x1ba) +
          _0x22e5bc[_0x178025(0x187)] +
          _0x178025(0x23f) +
          _0x22e5bc[_0x178025(0x1ab)] +
          "\x22]"
      )[_0x178025(0x1ec)](),
        $(
          "input[name=\x22" +
            _0x22e5bc[_0x178025(0x187)] +
            _0x178025(0x23f) +
            _0x22e5bc[_0x178025(0x1ab)] +
            "\x22]"
        )
          [_0x178025(0x18b)](_0x178025(0x1f4))
          [_0x178025(0x196)]("w--redirected-checked");
    else
      _0x22e5bc[_0x178025(0x1ab)] === "on"
        ? ($("input[name=\x22" + _0x22e5bc[_0x178025(0x187)] + "\x22]")[
            _0x178025(0x1ec)
          ](),
          $(_0x178025(0x1ba) + _0x22e5bc[_0x178025(0x187)] + "\x22]")
            [_0x178025(0x18b)](_0x178025(0x1d2))
            [_0x178025(0x196)](_0x178025(0x209)))
        : ($(_0x178025(0x1ba) + _0x22e5bc["inputName"] + "\x22]")[
            _0x178025(0x1da)
          ](_0x22e5bc[_0x178025(0x1ab)]),
          $(_0x178025(0x20e) + _0x22e5bc[_0x178025(0x187)] + "\x22]")[
            _0x178025(0x1da)
          ](_0x22e5bc[_0x178025(0x1ab)]),
          $(_0x178025(0x1e8) + _0x22e5bc[_0x178025(0x187)] + "\x22]")
            [_0x178025(0x230)](
              _0x178025(0x20c) + _0x22e5bc[_0x178025(0x1ab)] + "\x22]"
            )
            [_0x178025(0x1fd)](_0x178025(0x194), !![]));
  });
params &&
  (getParams(),
  searchQ[_0x17e519(0x1fe)]((_0x56f3d8) => {
    const _0x1ae5f7 = _0x17e519;
    console["log"](
      _0x56f3d8,
      $(_0x1ae5f7(0x22e) + _0x56f3d8[_0x1ae5f7(0x1da)] + "\x22]")[
        _0x1ae5f7(0x238)
      ]("type")
    );
    if (
      $(
        _0x1ae5f7(0x1ba) +
          _0x56f3d8[_0x1ae5f7(0x1dc)] +
          _0x1ae5f7(0x23f) +
          _0x56f3d8[_0x1ae5f7(0x1da)] +
          "\x22]"
      )[_0x1ae5f7(0x238)]("type") === _0x1ae5f7(0x1b1)
    )
      $(
        _0x1ae5f7(0x1ba) +
          _0x56f3d8["key"] +
          _0x1ae5f7(0x23f) +
          _0x56f3d8[_0x1ae5f7(0x1da)] +
          "\x22]"
      )["click"](),
        $(
          "input[name=\x22" +
            _0x56f3d8[_0x1ae5f7(0x1dc)] +
            _0x1ae5f7(0x23f) +
            _0x56f3d8["val"] +
            "\x22]"
        )
          [_0x1ae5f7(0x18b)](_0x1ae5f7(0x1f4))
          [_0x1ae5f7(0x196)](_0x1ae5f7(0x209));
    else
      _0x56f3d8[_0x1ae5f7(0x1da)] === "on"
        ? ($(_0x1ae5f7(0x1ba) + _0x56f3d8[_0x1ae5f7(0x1dc)] + "\x22]")[
            _0x1ae5f7(0x1ec)
          ](),
          $("input[name=\x22" + _0x56f3d8[_0x1ae5f7(0x1dc)] + "\x22]")
            [_0x1ae5f7(0x18b)](_0x1ae5f7(0x1d2))
            [_0x1ae5f7(0x196)](_0x1ae5f7(0x209)))
        : ($("input[name=\x22" + _0x56f3d8[_0x1ae5f7(0x1dc)] + "\x22]")[
            _0x1ae5f7(0x1da)
          ](_0x56f3d8[_0x1ae5f7(0x1da)]),
          $(_0x1ae5f7(0x20e) + _0x56f3d8[_0x1ae5f7(0x1dc)] + "\x22]")["val"](
            _0x56f3d8[_0x1ae5f7(0x1da)]
          ),
          $(_0x1ae5f7(0x1e8) + _0x56f3d8[_0x1ae5f7(0x1dc)] + "\x22]")
            [_0x1ae5f7(0x230)](
              _0x1ae5f7(0x20c) + _0x56f3d8[_0x1ae5f7(0x1da)] + "\x22]"
            )
            ["prop"](_0x1ae5f7(0x194), !![]));
  }));
quiz &&
  steps["each"](function () {
    const _0x52788f = _0x17e519;
    $(this)["children"]()[_0x52788f(0x238)](_0x52788f(0x1a6), !![]),
      $(this)["children"]()["attr"]("data-radio-delay", 0xfa);
  });
function disableBtn(_0x4aa21f) {
  const _0x14cb7f = _0x17e519;
  fill = ![];
  if (customError) {
  } else
    $(_0x14cb7f(0x185))[_0x14cb7f(0x1e9)]({
      opacity: _0x14cb7f(0x229),
      "pointer-events": _0x14cb7f(0x216),
    }),
      $("[data-form=\x22next-btn\x22]")["addClass"](_0x14cb7f(0x224)),
      $(_0x14cb7f(0x1e1))[_0x14cb7f(0x1e9)]({
        opacity: "0.4",
        "pointer-events": _0x14cb7f(0x216),
      }),
      $(_0x14cb7f(0x1e1))[_0x14cb7f(0x196)](_0x14cb7f(0x224));
}
function enableBtn() {
  const _0x2fd919 = _0x17e519;
  (fill = !![]),
    $(_0x2fd919(0x185))[_0x2fd919(0x1e9)]({
      "pointer-events": "auto",
      opacity: "1",
    }),
    $(_0x2fd919(0x185))[_0x2fd919(0x1e5)](_0x2fd919(0x224)),
    $(_0x2fd919(0x1e1))[_0x2fd919(0x1e9)]({
      "pointer-events": _0x2fd919(0x1aa),
      opacity: "1",
    }),
    $(_0x2fd919(0x1e1))[_0x2fd919(0x1e5)](_0x2fd919(0x224));
}
function saveFilledInput() {
  const _0x39c8a2 = _0x17e519;
  $(_0x39c8a2(0x20a))
    [_0x39c8a2(0x1b5)]("[type=\x22submit\x22]")
    [_0x39c8a2(0x1f0)](function () {
      const _0xab068 = _0x39c8a2;
      $(this)[_0xab068(0x238)](_0xab068(0x220)) === _0xab068(0x201) ||
      $(this)[_0xab068(0x238)](_0xab068(0x220)) === "radio"
        ? $(this)[_0xab068(0x1fd)](_0xab068(0x235)) &&
          (filledInput[_0xab068(0x231)](
            (_0x37f42d) =>
              _0x37f42d["inputName"] ===
              $(this)[_0xab068(0x238)](_0xab068(0x1d8))
          )
            ? ((filledInput = filledInput["filter"](
                (_0x2eb667) =>
                  _0x2eb667[_0xab068(0x187)] !==
                  $(this)[_0xab068(0x238)](_0xab068(0x1d8))
              )),
              $(this)[_0xab068(0x1da)]() !== "" &&
                filledInput[_0xab068(0x1bb)]({
                  inputName: $(this)[_0xab068(0x238)](_0xab068(0x1d8)),
                  value: $(this)[_0xab068(0x1da)](),
                }))
            : $(this)[_0xab068(0x1da)]() !== "" &&
              filledInput[_0xab068(0x1bb)]({
                inputName: $(this)[_0xab068(0x238)](_0xab068(0x1d8)),
                value: $(this)["val"](),
              }))
        : filledInput[_0xab068(0x231)](
            (_0x274b08) =>
              _0x274b08[_0xab068(0x187)] ===
              $(this)[_0xab068(0x238)](_0xab068(0x1d8))
          )
        ? ((filledInput = filledInput[_0xab068(0x1a0)](
            (_0x328c74) =>
              _0x328c74[_0xab068(0x187)] !==
              $(this)[_0xab068(0x238)](_0xab068(0x1d8))
          )),
          $(this)[_0xab068(0x1da)]() !== "" &&
            filledInput["push"]({
              inputName: $(this)["attr"](_0xab068(0x1d8)),
              value: $(this)[_0xab068(0x1da)](),
            }))
        : $(this)[_0xab068(0x1da)]() !== "" &&
          filledInput[_0xab068(0x1bb)]({
            inputName: $(this)[_0xab068(0x238)](_0xab068(0x1d8)),
            value: $(this)[_0xab068(0x1da)](),
          });
    }),
    filledInput &&
      filledInput[_0x39c8a2(0x1fe)]((_0x2700c1) => {
        const _0x267d3 = _0x39c8a2;
        urlFormly[_0x267d3(0x1b8)][_0x267d3(0x193)](_0x2700c1[_0x267d3(0x187)]),
          urlFormly[_0x267d3(0x1b8)][_0x267d3(0x1df)](
            _0x2700c1[_0x267d3(0x187)],
            _0x2700c1["value"]
          ),
          window[_0x267d3(0x1c3)][_0x267d3(0x1e7)](null, null, urlFormly);
      }),
    localStorage[_0x39c8a2(0x17c)]("filledInput"),
    localStorage[_0x39c8a2(0x21b)](
      _0x39c8a2(0x1bc),
      JSON[_0x39c8a2(0x184)](filledInput)
    );
}
function scrollTop() {}
function updateStep() {
  const _0x8ab2cf = _0x17e519;
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
  $(_0x8ab2cf(0x1b6))[_0x8ab2cf(0x16c)](_0x8ab2cf(0x1cd)) &&
    (steps["find"](_0x8ab2cf(0x232))[_0x8ab2cf(0x1f0)](function () {
      const _0x3973cb = _0x8ab2cf;
      $(
        $(_0x3973cb(0x1b4))[
          $(this)
            [_0x3973cb(0x1c8)]("[data-form=\x22step\x22]")
            [_0x3973cb(0x178)]()
        ]
      ),
        $(this)[_0x3973cb(0x1da)]() === "" && emptyInput++;
    }),
    emptyInput > 0x0
      ? $("input[type=\x22submit\x22]")[_0x8ab2cf(0x196)](_0x8ab2cf(0x224))
      : $(_0x8ab2cf(0x172))[_0x8ab2cf(0x1e5)](_0x8ab2cf(0x224)));
  $(_0x8ab2cf(0x1b4))["removeClass"](_0x8ab2cf(0x1b2)),
    $($(_0x8ab2cf(0x1b4))[x])["addClass"]("current"),
    (selection = selections[_0x8ab2cf(0x1a0)](
      (_0x1a8a84) => _0x1a8a84[_0x8ab2cf(0x1c1)] === x - 0x1
    ));
  next &&
    (x = getSafe(() => selection[0x0][_0x8ab2cf(0x1d0)])
      ? parseInt(getSafe(() => selection[0x0][_0x8ab2cf(0x1d0)]))
      : x);
  $(_0x8ab2cf(0x1f9))[_0x8ab2cf(0x1c5)](), steps[_0x8ab2cf(0x1c5)]();
  reinitIX === !![] && window[_0x8ab2cf(0x23b)]["destroy"]();
  $(progressbar)[_0x8ab2cf(0x1e5)](_0x8ab2cf(0x1b2));
  for (i = 0x0; i <= x; i++) {
    countCard
      ? $(progressbar[i])["addClass"]("current")
      : !$(steps[i])[_0x8ab2cf(0x16c)](_0x8ab2cf(0x19f)) &&
        $(progressbar[i])[_0x8ab2cf(0x196)](_0x8ab2cf(0x1b2));
  }
  reinitIX === !![]
    ? (window[_0x8ab2cf(0x23b)] &&
        window["Webflow"][_0x8ab2cf(0x16e)](_0x8ab2cf(0x199))["init"](),
      document[_0x8ab2cf(0x1ae)](new Event(_0x8ab2cf(0x1db))),
      $(steps[x])[_0x8ab2cf(0x221)]())
    : $(steps[x])[_0x8ab2cf(0x1de)](_0x8ab2cf(0x1ea));
  x === 0x0 &&
    !$(steps[x])["data"](_0x8ab2cf(0x19f)) &&
    $(steps[x])[_0x8ab2cf(0x230)](_0x8ab2cf(0x1f9))["show"]();
  selection[_0x8ab2cf(0x1be)] > 0x0
    ? $(steps[x])
        [_0x8ab2cf(0x230)](
          _0x8ab2cf(0x1d1) + selection[0x0][_0x8ab2cf(0x194)] + "\x22]"
        )
        [_0x8ab2cf(0x221)]()
    : $(steps[x])
        ["find"](_0x8ab2cf(0x1d1) + answer + "\x22]")
        [_0x8ab2cf(0x221)]();
  if (x === 0x0)
    $(_0x8ab2cf(0x1eb))[_0x8ab2cf(0x1c5)](),
      $("[data-form=\x22next-btn\x22]")[_0x8ab2cf(0x221)]();
  else {
    if (
      x === steps[_0x8ab2cf(0x1be)] - 0x1 ||
      $(steps[x])[_0x8ab2cf(0x230)](_0x8ab2cf(0x195))[_0x8ab2cf(0x1be)] > 0x0
    ) {
      $(_0x8ab2cf(0x185))[_0x8ab2cf(0x1c5)]();
      if (
        $(steps[x])[_0x8ab2cf(0x230)](_0x8ab2cf(0x192))["data"]("submit-show")
      )
        $(steps[x])["find"](_0x8ab2cf(0x192))[_0x8ab2cf(0x221)]();
      else
        $("[data-form=\x22next-btn\x22]")[_0x8ab2cf(0x16c)](_0x8ab2cf(0x1c2)) &&
          $("[data-form=\x22next-btn\x22]")[_0x8ab2cf(0x221)]();
      $(_0x8ab2cf(0x1e1))[_0x8ab2cf(0x221)](),
        $(_0x8ab2cf(0x1eb))[_0x8ab2cf(0x221)]();
    } else
      $(_0x8ab2cf(0x185))[_0x8ab2cf(0x221)](),
        $(_0x8ab2cf(0x1eb))[_0x8ab2cf(0x221)](),
        $(_0x8ab2cf(0x1e1))["hide"]();
  }
  $($(steps[x])[_0x8ab2cf(0x230)](_0x8ab2cf(0x1e6))[0x0])["focus"](),
    $($(steps[x])[_0x8ab2cf(0x230)](_0x8ab2cf(0x1c0))[0x0])[_0x8ab2cf(0x1bf)](),
    validation();
  for (idx = 0x0; idx <= progress; idx++) {
    $($("[data-form=\x22custom-progress-indicator\x22]")[idx])[
      _0x8ab2cf(0x1e5)
    ](_0x8ab2cf(0x224));
  }
  curStep = x;
}
function validateEmail(_0xeaa159, _0x376038) {
  const _0x4a4b1e = _0x17e519;
  let _0x1bd9ab = _0xeaa159[_0x4a4b1e(0x188)]("@")
    ? _0xeaa159["split"]("@")[0x1]["split"](".")[0x0]
    : [];
  dom = [];
  _0x376038 !== undefined &&
    _0x376038[_0x4a4b1e(0x18a)](",")[_0x4a4b1e(0x1fe)](function (_0x7de9d4) {
      const _0x5512c5 = _0x4a4b1e;
      _0x7de9d4[_0x5512c5(0x188)](_0x1bd9ab) &&
        dom[_0x5512c5(0x1bb)](_0x1bd9ab);
    });
  dom[_0x4a4b1e(0x1be)] > 0x0 ? (domainAllowed = ![]) : (domainAllowed = !![]);
  var _0x491d2a = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,20})?$/;
  !_0x491d2a["test"](_0xeaa159) ? (emailFilled = ![]) : (emailFilled = !![]);
}
function _0xa73c(_0x526336, _0x5be679) {
  const _0x26c585 = _0x26c5();
  return (
    (_0xa73c = function (_0xa73cae, _0x3652be) {
      _0xa73cae = _0xa73cae - 0x16c;
      let _0x359501 = _0x26c585[_0xa73cae];
      return _0x359501;
    }),
    _0xa73c(_0x526336, _0x5be679)
  );
}
function validation() {
  const _0x2956c0 = _0x17e519;
  $(steps[x])[_0x2956c0(0x16c)](_0x2956c0(0x19f)) && enableBtn();
  (textareaLength = $(steps[x])[_0x2956c0(0x230)](_0x2956c0(0x20f))[
    _0x2956c0(0x1be)
  ]),
    (textInputLength = $(steps[x])[_0x2956c0(0x230)](
      "input[type=\x22text\x22][required]:visible"
    )[_0x2956c0(0x1be)]),
    (selectInputLength = $(steps[x])[_0x2956c0(0x230)](
      "select[required]:visible"
    )[_0x2956c0(0x1be)]),
    (emailInputLength = $(steps[x])[_0x2956c0(0x230)](_0x2956c0(0x21c))[
      _0x2956c0(0x1be)
    ]),
    (checkboxInputLength = $(steps[x])[_0x2956c0(0x230)](_0x2956c0(0x1fb))[
      _0x2956c0(0x1be)
    ]);
  textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0
    ? disableBtn()
    : enableBtn();
  var _0x26e261 = $(steps[x])[_0x2956c0(0x16c)]("checkbox")
    ? $(steps[x])[_0x2956c0(0x16c)](_0x2956c0(0x201))
    : 0x0;
  if (!logicExtra)
    $(steps[x])["find"](_0x2956c0(0x1c4))["is"]("[type=\x22checkbox\x22]") &&
      (_0x26e261 === "*" ||
      _0x26e261 > $(steps[x])[_0x2956c0(0x230)](_0x2956c0(0x17a))["length"]
        ? $(steps[x])
            [_0x2956c0(0x230)](_0x2956c0(0x17a))
            [_0x2956c0(0x1f0)](function () {
              const _0x5a06d8 = _0x2956c0;
              $(this)["is"](":checked")
                ? $(steps[x])[_0x5a06d8(0x230)](_0x5a06d8(0x232))["length"] <
                    0x1 && (checkboxFilled = !![])
                : (checkboxFilled = ![]);
            })
        : $(steps[x])[_0x2956c0(0x230)](
            ":input[type=\x22checkbox\x22]:checked"
          )[_0x2956c0(0x1be)] >= _0x26e261
        ? (checkboxFilled = !![])
        : (checkboxFilled = ![])),
      $(steps[x])
        [_0x2956c0(0x230)](_0x2956c0(0x23c))
        [_0x2956c0(0x1f0)](function (_0x13f26c) {
          const _0x2054f5 = _0x2956c0;
          var _0x667fa2 = $(this)[_0x2054f5(0x238)]("name");
          console[_0x2054f5(0x23a)](_0x667fa2),
            $(_0x2054f5(0x176) + _0x667fa2 + _0x2054f5(0x186))[
              _0x2054f5(0x1be)
            ] == 0x0
              ? !empReqRadio["find"](
                  (_0x5304dd) => _0x5304dd["input"] === _0x13f26c
                ) && empReqRadio[_0x2054f5(0x1bb)]({ input: _0x13f26c })
              : (empReqRadio = empReqRadio[_0x2054f5(0x1a0)](
                  (_0x1347e7) => _0x1347e7[_0x2054f5(0x18c)] !== _0x13f26c
                )),
            empReqRadio["length"] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0x2956c0(0x230)](":input[type=\x22text\x22][required]")
        [_0x2956c0(0x1f0)](function (_0x262c45) {
          const _0x5af0e2 = _0x2956c0;
          $(this)[_0x5af0e2(0x1da)]() !== ""
            ? (empReqInput = empReqInput[_0x5af0e2(0x1a0)](
                (_0x27ec15) => _0x27ec15["input"] !== _0x262c45
              ))
            : !empReqInput[_0x5af0e2(0x230)](
                (_0xb88d19) => _0xb88d19[_0x5af0e2(0x18c)] === _0x262c45
              ) && empReqInput[_0x5af0e2(0x1bb)]({ input: _0x262c45 }),
            empReqInput[_0x5af0e2(0x1be)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x2956c0(0x1bd))
        [_0x2956c0(0x1f0)](function (_0x5c8c27) {
          const _0x21517f = _0x2956c0;
          $(this)[_0x21517f(0x1da)]() !== ""
            ? (empReqTel = empReqTel[_0x21517f(0x1a0)](
                (_0x33bc36) => _0x33bc36[_0x21517f(0x18c)] !== _0x5c8c27
              ))
            : !empReqTel["find"](
                (_0x2c1d86) => _0x2c1d86[_0x21517f(0x18c)] === _0x5c8c27
              ) && empReqTel[_0x21517f(0x1bb)]({ input: _0x5c8c27 }),
            empReqTel[_0x21517f(0x1be)] === 0x0
              ? (telFilled = !![])
              : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x2956c0(0x230)](_0x2956c0(0x1af))
        [_0x2956c0(0x1f0)](function (_0x1aa534) {
          const _0x7aa974 = _0x2956c0;
          $(this)[_0x7aa974(0x1da)]() !== ""
            ? (empReqFile = empReqFile[_0x7aa974(0x1a0)](
                (_0x55ba18) => _0x55ba18[_0x7aa974(0x18c)] !== _0x1aa534
              ))
            : !empReqFile[_0x7aa974(0x230)](
                (_0x3a80d2) => _0x3a80d2["input"] === _0x1aa534
              ) && empReqFile[_0x7aa974(0x1bb)]({ input: _0x1aa534 }),
            empReqFile[_0x7aa974(0x1be)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x2956c0(0x228))
        ["each"](function (_0x2df194) {
          const _0x4bd0e6 = _0x2956c0;
          $(this)[_0x4bd0e6(0x1da)]() !== ""
            ? (empReqNum = empReqNum[_0x4bd0e6(0x1a0)](
                (_0x4c2522) => _0x4c2522[_0x4bd0e6(0x18c)] !== _0x2df194
              ))
            : !empReqNum[_0x4bd0e6(0x230)](
                (_0x43b07a) => _0x43b07a[_0x4bd0e6(0x18c)] === _0x2df194
              ) && empReqNum[_0x4bd0e6(0x1bb)]({ input: _0x2df194 }),
            empReqNum[_0x4bd0e6(0x1be)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        ["find"]("select[required]")
        [_0x2956c0(0x1f0)](function (_0x2be3cf) {
          const _0x4ca2b7 = _0x2956c0;
          let _0x5459ed = $(this)["val"]();
          _0x5459ed === "" && (_0x5459ed = null),
            _0x5459ed != null
              ? (empReqSelect = empReqSelect[_0x4ca2b7(0x1a0)](
                  (_0x5b857e) => _0x5b857e[_0x4ca2b7(0x18c)] !== _0x2be3cf
                ))
              : !empReqSelect[_0x4ca2b7(0x230)](
                  (_0x349671) => _0x349671[_0x4ca2b7(0x18c)] === _0x2be3cf
                ) && empReqSelect["push"]({ input: _0x2be3cf }),
            empReqSelect[_0x4ca2b7(0x1be)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x2956c0(0x230)](_0x2956c0(0x236))
        [_0x2956c0(0x1f0)](function (_0x4b433c) {
          const _0x1c5b67 = _0x2956c0;
          $(this)[_0x1c5b67(0x1da)]() !== ""
            ? (empReqTextarea = empReqTextarea[_0x1c5b67(0x1a0)](
                (_0x4f1333) => _0x4f1333[_0x1c5b67(0x18c)] !== _0x4b433c
              ))
            : !empReqTextarea[_0x1c5b67(0x230)](
                (_0x2a99da) => _0x2a99da[_0x1c5b67(0x18c)] === _0x4b433c
              ) && empReqTextarea["push"]({ input: _0x4b433c }),
            empReqTextarea["length"] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x2956c0(0x230)](_0x2956c0(0x17b))
        [_0x2956c0(0x1f0)](function () {
          const _0x314fc7 = _0x2956c0;
          $(this)[_0x314fc7(0x1da)]() !== ""
            ? validateEmail($(this)["val"](), $(this)["data"](_0x314fc7(0x191)))
            : (emailFilled = ![]);
        });
  else {
    if ($(steps[x])["data"](_0x2956c0(0x19f)))
      (answer = $(steps[x])
        [_0x2956c0(0x230)](_0x2956c0(0x1b0))
        [_0x2956c0(0x16c)](_0x2956c0(0x204))),
        (selections = selections[_0x2956c0(0x1a0)](
          (_0x394b31) => _0x394b31[_0x2956c0(0x1c1)] !== x
        )),
        selections[_0x2956c0(0x1bb)]({ step: x, selected: answer });
    else
      $(steps[x])
        [_0x2956c0(0x230)]("[data-answer]:visible")
        ["data"](_0x2956c0(0x19f)) &&
        ((answer = $(steps[x])
          ["find"](_0x2956c0(0x203))
          [_0x2956c0(0x16c)](_0x2956c0(0x204))),
        (selections = selections["filter"](
          (_0x3aaa8a) => _0x3aaa8a[_0x2956c0(0x1c1)] !== x
        )),
        selections[_0x2956c0(0x1bb)]({ step: x, selected: answer }));
    $(steps[x])
      [_0x2956c0(0x230)](_0x2956c0(0x203))
      [_0x2956c0(0x230)](_0x2956c0(0x1c4))
      ["is"](_0x2956c0(0x1dd)) &&
      (_0x26e261 === "*" ||
      _0x26e261 >
        $(steps[x])[_0x2956c0(0x230)](_0x2956c0(0x17a))[_0x2956c0(0x1be)]
        ? $(steps[x])
            [_0x2956c0(0x230)](_0x2956c0(0x17a))
            ["each"](function () {
              const _0x1c0ecf = _0x2956c0;
              $(this)["is"](":checked")
                ? $(steps[x])["find"](_0x1c0ecf(0x232))[_0x1c0ecf(0x1be)] <
                    0x1 &&
                  ((skipTo = undefined),
                  $(this)
                    [_0x1c0ecf(0x1c8)](_0x1c0ecf(0x202))
                    [_0x1c0ecf(0x16c)](_0x1c0ecf(0x16f)) &&
                    (skipTo = $(this)
                      [_0x1c0ecf(0x1c8)]("[data-skip-to]")
                      [_0x1c0ecf(0x16c)](_0x1c0ecf(0x16f))),
                  console[_0x1c0ecf(0x23a)](
                    _0x1c0ecf(0x201),
                    $(this)["parents"]()[_0x1c0ecf(0x1c8)]()
                  ),
                  $(this)
                    ["parents"](_0x1c0ecf(0x1b0))
                    [_0x1c0ecf(0x238)](_0x1c0ecf(0x1b9)) &&
                    ((answer = $(this)
                      [_0x1c0ecf(0x1c8)](_0x1c0ecf(0x1b0))
                      [_0x1c0ecf(0x238)](_0x1c0ecf(0x1b9))),
                    (selections = selections[_0x1c0ecf(0x1a0)](
                      (_0x34ac36) => _0x34ac36["step"] !== x
                    )),
                    selections["push"]({ step: x, selected: answer }),
                    skipTo &&
                      (selections["push"]({
                        step: skipTo - 0x2,
                        selected: answer,
                      }),
                      (objIndex = selections["findIndex"](
                        (_0x20e625) => _0x20e625["step"] === x
                      )),
                      (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                      (selections[objIndex]["backTo"] = x))),
                  (checkboxFilled = !![]))
                : (checkboxFilled = ![]);
            })
        : $(steps[x])
            ["find"](_0x2956c0(0x203))
            [_0x2956c0(0x230)](_0x2956c0(0x234))[_0x2956c0(0x1be)] >= _0x26e261
        ? ($(steps[x])
            ["find"](_0x2956c0(0x203))
            [_0x2956c0(0x230)](":input[type=\x22checkbox\x22]:checked")
            ["parents"](_0x2956c0(0x1b0))
            [_0x2956c0(0x238)](_0x2956c0(0x1b9)) &&
            ((skipTo = undefined),
            $(steps[x])
              [_0x2956c0(0x230)](_0x2956c0(0x203))
              [_0x2956c0(0x230)](_0x2956c0(0x234))
              ["parents"]("[data-skip-to]")
              [_0x2956c0(0x238)](_0x2956c0(0x20d)) &&
              (skipTo = $(steps[x])
                [_0x2956c0(0x230)](_0x2956c0(0x203))
                [_0x2956c0(0x230)](":input[type=\x22checkbox\x22]:checked")
                [_0x2956c0(0x1c8)](_0x2956c0(0x202))
                [_0x2956c0(0x238)](_0x2956c0(0x20d))),
            console[_0x2956c0(0x23a)](_0x2956c0(0x201), skipTo),
            (answer = $(steps[x])
              [_0x2956c0(0x230)](_0x2956c0(0x203))
              [_0x2956c0(0x230)](":input[type=\x22checkbox\x22]:checked")
              [_0x2956c0(0x1c8)](_0x2956c0(0x1b0))
              [_0x2956c0(0x238)](_0x2956c0(0x1b9))),
            (selections = selections["filter"](
              (_0x5692a3) => _0x5692a3[_0x2956c0(0x1c1)] !== x
            )),
            selections["push"]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0x2956c0(0x1bb)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0x2956c0(0x21a)](
                (_0x3a1abf) => _0x3a1abf[_0x2956c0(0x1c1)] === x
              )),
              (selections[objIndex][_0x2956c0(0x1d0)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x2956c0(0x1ca)] = x))),
          (selections = selections[_0x2956c0(0x1a0)](
            (_0xdf7608) => _0xdf7608["step"] !== x
          )),
          selections["push"]({ step: x, selected: answer }),
          (checkboxFilled = !![]))
        : (checkboxFilled = ![])),
      $(steps[x])
        [_0x2956c0(0x230)]("[data-answer]:visible")
        [_0x2956c0(0x230)](_0x2956c0(0x232))
        ["is"]("[type=\x22radio\x22]")
        ? $(steps[x])
            [_0x2956c0(0x230)]("[data-answer]:visible")
            [_0x2956c0(0x230)](":input[type=\x22radio\x22][required]")
            ["is"](_0x2956c0(0x212))
          ? (radioFilled = !![])
          : (radioFilled = ![])
        : (radioFilled = !![]),
      $(steps[x])
        ["find"]("[data-answer]:visible")
        [_0x2956c0(0x230)](_0x2956c0(0x1c6))
        [_0x2956c0(0x1f0)](function (_0x545c14) {
          const _0x5b128b = _0x2956c0;
          $(this)[_0x5b128b(0x1da)]() !== ""
            ? (empReqInput = empReqInput["filter"](
                (_0x1c6095) => _0x1c6095[_0x5b128b(0x18c)] !== _0x545c14
              ))
            : !empReqInput[_0x5b128b(0x230)](
                (_0x1a361) => _0x1a361[_0x5b128b(0x18c)] === _0x545c14
              ) && empReqInput[_0x5b128b(0x1bb)]({ input: _0x545c14 }),
            empReqInput[_0x5b128b(0x1be)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x2956c0(0x230)](_0x2956c0(0x203))
        [_0x2956c0(0x230)](_0x2956c0(0x23d))
        [_0x2956c0(0x1f0)](function (_0x10be2e) {
          const _0x3c522e = _0x2956c0;
          (skipTo = undefined),
            $(this)
              [_0x3c522e(0x1c8)](_0x3c522e(0x202))
              [_0x3c522e(0x16c)](_0x3c522e(0x16f)) !== "" &&
              (skipTo = $(this)
                [_0x3c522e(0x1c8)]("[data-skip-to]")
                ["data"](_0x3c522e(0x16f))),
            $(this)
              [_0x3c522e(0x1c8)](_0x3c522e(0x1b0))
              [_0x3c522e(0x238)](_0x3c522e(0x1b9)) &&
              ((answer = $(this)
                [_0x3c522e(0x1c8)](_0x3c522e(0x1b0))
                [_0x3c522e(0x238)](_0x3c522e(0x1b9))),
              (selections = selections[_0x3c522e(0x1a0)](
                (_0x3f11a3) => _0x3f11a3[_0x3c522e(0x1c1)] !== x
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x3c522e(0x1bb)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x3c522e(0x21a)](
                  (_0x177ac6) => _0x177ac6[_0x3c522e(0x1c1)] === x
                )),
                (selections[objIndex][_0x3c522e(0x1d0)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x3c522e(0x1ca)] = x)));
        }),
      $(steps[x])
        [_0x2956c0(0x230)](_0x2956c0(0x203))
        [_0x2956c0(0x230)](_0x2956c0(0x228))
        [_0x2956c0(0x1f0)](function (_0x4026c9) {
          const _0x1213f6 = _0x2956c0;
          $(this)[_0x1213f6(0x1da)]() !== ""
            ? (empReqNum = empReqNum[_0x1213f6(0x1a0)](
                (_0x2ae33f) => _0x2ae33f[_0x1213f6(0x18c)] !== _0x4026c9
              ))
            : !empReqNum[_0x1213f6(0x230)](
                (_0x37f1e8) => _0x37f1e8[_0x1213f6(0x18c)] === _0x4026c9
              ) && empReqNum[_0x1213f6(0x1bb)]({ input: _0x4026c9 }),
            empReqNum[_0x1213f6(0x1be)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        ["find"]("[data-answer]:visible")
        ["find"](_0x2956c0(0x1a4))
        [_0x2956c0(0x1f0)](function (_0x3d1406) {
          const _0x2594d7 = _0x2956c0;
          (skipTo = undefined),
            $(this)
              [_0x2594d7(0x1c8)]("[data-skip-to]")
              [_0x2594d7(0x16c)](_0x2594d7(0x16f)) !== "" &&
              (skipTo = $(this)
                [_0x2594d7(0x1c8)](_0x2594d7(0x202))
                [_0x2594d7(0x16c)](_0x2594d7(0x16f))),
            $(this)
              [_0x2594d7(0x1c8)](_0x2594d7(0x1b0))
              [_0x2594d7(0x238)]("data-go-to") &&
              ((answer = $(this)
                [_0x2594d7(0x1c8)](_0x2594d7(0x1b0))
                [_0x2594d7(0x238)](_0x2594d7(0x1b9))),
              (selections = selections[_0x2594d7(0x1a0)](
                (_0x238b8b) => _0x238b8b[_0x2594d7(0x1c1)] !== x
              )),
              selections[_0x2594d7(0x1bb)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x2594d7(0x1bb)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x2594d7(0x21a)](
                  (_0x3653ba) => _0x3653ba[_0x2594d7(0x1c1)] === x
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x2594d7(0x1ca)] = x)));
        }),
      $(steps[x])
        [_0x2956c0(0x230)](_0x2956c0(0x203))
        ["find"](":input[type=\x22tel\x22][required]")
        ["each"](function (_0x44deca) {
          const _0x1696b5 = _0x2956c0;
          $(this)[_0x1696b5(0x1da)]() !== ""
            ? (empReqTel = empReqTel[_0x1696b5(0x1a0)](
                (_0x2274b3) => _0x2274b3[_0x1696b5(0x18c)] !== _0x44deca
              ))
            : !empReqTel[_0x1696b5(0x230)](
                (_0x225939) => _0x225939["input"] === _0x44deca
              ) && empReqTel[_0x1696b5(0x1bb)]({ input: _0x44deca }),
            empReqTel[_0x1696b5(0x1be)] === 0x0
              ? (telFilled = !![])
              : (telFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x2956c0(0x203))
        [_0x2956c0(0x230)](":input[type=\x22tel\x22]")
        [_0x2956c0(0x1f0)](function (_0x564109) {
          const _0x29854c = _0x2956c0;
          (skipTo = undefined),
            $(this)
              [_0x29854c(0x1c8)]("[data-skip-to]")
              ["data"](_0x29854c(0x16f)) !== "" &&
              (skipTo = $(this)
                [_0x29854c(0x1c8)]("[data-skip-to]")
                [_0x29854c(0x16c)](_0x29854c(0x16f))),
            $(this)
              [_0x29854c(0x1c8)](_0x29854c(0x1b0))
              ["attr"](_0x29854c(0x1b9)) &&
              ((answer = $(this)
                ["parents"](_0x29854c(0x1b0))
                ["attr"](_0x29854c(0x1b9))),
              (selections = selections[_0x29854c(0x1a0)](
                (_0x162125) => _0x162125["step"] !== x
              )),
              selections[_0x29854c(0x1bb)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x29854c(0x1bb)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x29854c(0x21a)](
                  (_0x562653) => _0x562653[_0x29854c(0x1c1)] === x
                )),
                (selections[objIndex][_0x29854c(0x1d0)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        ["find"]("[data-answer]:visible")
        [_0x2956c0(0x230)](_0x2956c0(0x1af))
        [_0x2956c0(0x1f0)](function (_0x5060ca) {
          const _0x5d730b = _0x2956c0;
          $(this)[_0x5d730b(0x1da)]() !== ""
            ? (empReqfile = empReqfile[_0x5d730b(0x1a0)](
                (_0x48c100) => _0x48c100[_0x5d730b(0x18c)] !== _0x5060ca
              ))
            : !empReqfile[_0x5d730b(0x230)](
                (_0x47a81b) => _0x47a81b[_0x5d730b(0x18c)] === _0x5060ca
              ) && empReqfile["push"]({ input: _0x5060ca }),
            empReqfile[_0x5d730b(0x1be)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x2956c0(0x230)](_0x2956c0(0x203))
        ["find"](_0x2956c0(0x205))
        ["each"](function (_0x1b1e9d) {
          const _0x4dedd5 = _0x2956c0;
          (skipTo = undefined),
            $(this)
              [_0x4dedd5(0x1c8)]("[data-skip-to]")
              [_0x4dedd5(0x16c)]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0x4dedd5(0x1c8)](_0x4dedd5(0x202))
                [_0x4dedd5(0x16c)](_0x4dedd5(0x16f))),
            $(this)
              [_0x4dedd5(0x1c8)]("[data-go-to]")
              ["attr"](_0x4dedd5(0x1b9)) &&
              ((answer = $(this)
                [_0x4dedd5(0x1c8)]("[data-go-to]")
                [_0x4dedd5(0x238)]("data-go-to")),
              (selections = selections[_0x4dedd5(0x1a0)](
                (_0x3f5aaf) => _0x3f5aaf[_0x4dedd5(0x1c1)] !== x
              )),
              selections[_0x4dedd5(0x1bb)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x4dedd5(0x1bb)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x393c21) => _0x393c21[_0x4dedd5(0x1c1)] === x
                )),
                (selections[objIndex][_0x4dedd5(0x1d0)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x4dedd5(0x1ca)] = x)));
        }),
      $(steps[x])
        [_0x2956c0(0x230)](_0x2956c0(0x203))
        [_0x2956c0(0x230)](_0x2956c0(0x22d))
        [_0x2956c0(0x1f0)](function (_0x17932f) {
          const _0x1bf8c6 = _0x2956c0;
          $(this)[_0x1bf8c6(0x1da)]() !== ""
            ? (empReqSelect = empReqSelect[_0x1bf8c6(0x1a0)](
                (_0x2f5598) => _0x2f5598["input"] !== _0x17932f
              ))
            : !empReqSelect[_0x1bf8c6(0x230)](
                (_0xdb88c4) => _0xdb88c4[_0x1bf8c6(0x18c)] === _0x17932f
              ) && empReqSelect[_0x1bf8c6(0x1bb)]({ input: _0x17932f }),
            empReqSelect[_0x1bf8c6(0x1be)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x2956c0(0x230)]("[data-answer]:visible")
        [_0x2956c0(0x230)](_0x2956c0(0x214))
        [_0x2956c0(0x1f0)](function (_0x52fe67) {
          const _0x25a3a4 = _0x2956c0;
          (skipTo = undefined),
            $(this)
              [_0x25a3a4(0x1c8)](_0x25a3a4(0x202))
              [_0x25a3a4(0x16c)](_0x25a3a4(0x16f)) !== "" &&
              (skipTo = $(this)
                [_0x25a3a4(0x1c8)]("[data-skip-to]")
                ["data"](_0x25a3a4(0x16f))),
            $(this)
              [_0x25a3a4(0x1c8)](_0x25a3a4(0x1b0))
              [_0x25a3a4(0x238)]("data-go-to") &&
              ((answer = $(this)
                [_0x25a3a4(0x1c8)](_0x25a3a4(0x1b0))
                ["attr"](_0x25a3a4(0x1b9))),
              (selections = selections[_0x25a3a4(0x1a0)](
                (_0x19e921) => _0x19e921["step"] !== x
              )),
              selections[_0x25a3a4(0x1bb)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0x25a3a4(0x21a)](
                  (_0x5f0c44) => _0x5f0c44[_0x25a3a4(0x1c1)] === x
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x25a3a4(0x1ca)] = x)));
        }),
      $(steps[x])
        [_0x2956c0(0x230)]("[data-answer]:visible")
        ["find"](_0x2956c0(0x236))
        ["each"](function (_0x5571cf) {
          const _0x4642bf = _0x2956c0;
          $(this)[_0x4642bf(0x1da)]() !== ""
            ? (empReqTextarea = empReqTextarea["filter"](
                (_0x5bf7cc) => _0x5bf7cc[_0x4642bf(0x18c)] !== _0x5571cf
              ))
            : !empReqTextarea["find"](
                (_0x46578f) => _0x46578f[_0x4642bf(0x18c)] === _0x5571cf
              ) && empReqTextarea["push"]({ input: _0x5571cf }),
            empReqTextarea[_0x4642bf(0x1be)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x2956c0(0x230)]("[data-answer]:visible")
        [_0x2956c0(0x230)](_0x2956c0(0x1d6))
        [_0x2956c0(0x1f0)](function (_0x18ffe0) {
          const _0x5e44b5 = _0x2956c0;
          (skipTo = undefined),
            $(this)
              [_0x5e44b5(0x1c8)](_0x5e44b5(0x202))
              [_0x5e44b5(0x16c)](_0x5e44b5(0x16f)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0x5e44b5(0x202))
                ["data"](_0x5e44b5(0x16f))),
            $(this)
              [_0x5e44b5(0x1c8)](_0x5e44b5(0x1b0))
              [_0x5e44b5(0x238)](_0x5e44b5(0x1b9)) &&
              ((answer = $(this)
                [_0x5e44b5(0x1c8)](_0x5e44b5(0x1b0))
                ["attr"](_0x5e44b5(0x1b9))),
              (selections = selections["filter"](
                (_0x35101b) => _0x35101b[_0x5e44b5(0x1c1)] !== x
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x5e44b5(0x1bb)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x5e44b5(0x21a)](
                  (_0x2ab55f) => _0x2ab55f[_0x5e44b5(0x1c1)] === x
                )),
                (selections[objIndex][_0x5e44b5(0x1d0)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x2956c0(0x230)]("[data-answer]:visible")
        ["find"](_0x2956c0(0x17b))
        [_0x2956c0(0x1f0)](function (_0x17d90e) {
          const _0x5322da = _0x2956c0;
          $(this)[_0x5322da(0x1da)]() !== ""
            ? validateEmail(
                $(this)[_0x5322da(0x1da)](),
                $(this)["data"](_0x5322da(0x191))
              )
            : (emailFilled = ![]);
        }),
      $(steps[x])
        [_0x2956c0(0x230)](_0x2956c0(0x203))
        [_0x2956c0(0x230)](_0x2956c0(0x225))
        [_0x2956c0(0x1f0)](function (_0x5d169b) {
          const _0x42f698 = _0x2956c0;
          (skipTo = undefined),
            $(this)
              [_0x42f698(0x1c8)]("[data-skip-to]")
              [_0x42f698(0x16c)](_0x42f698(0x16f)) !== "" &&
              (skipTo = $(this)
                [_0x42f698(0x1c8)](_0x42f698(0x202))
                [_0x42f698(0x16c)]("skip-to")),
            $(this)[_0x42f698(0x1c8)]("[data-go-to]")["attr"]("data-go-to") &&
              ((answer = $(this)
                [_0x42f698(0x1c8)](_0x42f698(0x1b0))
                [_0x42f698(0x238)](_0x42f698(0x1b9))),
              (selections = selections["filter"](
                (_0x3e7e4b) => _0x3e7e4b[_0x42f698(0x1c1)] !== x
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x42f698(0x1bb)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x42f698(0x21a)](
                  (_0x8024a2) => _0x8024a2["step"] === x
                )),
                (selections[objIndex][_0x42f698(0x1d0)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x42f698(0x1ca)] = x)));
        });
  }
  $(steps[x])[_0x2956c0(0x230)](_0x2956c0(0x207))["is"](_0x2956c0(0x212)) &&
    ((selArr = []),
    $(steps)
      ["find"](_0x2956c0(0x19e))
      ["each"](function (_0x373215, _0x1aa773) {
        const _0x4f2821 = _0x2956c0;
        selArr["push"]({
          selected: $(this)[_0x4f2821(0x16c)](_0x4f2821(0x194)),
        });
      }),
    (selString = []),
    selArr[_0x2956c0(0x1fe)]((_0x653a5f) =>
      selString[_0x2956c0(0x1bb)](_0x653a5f[_0x2956c0(0x194)])
    ),
    (selections = selections[_0x2956c0(0x1a0)](
      (_0x578ef5) => _0x578ef5["step"] !== x
    )),
    $(steps[x])
      [_0x2956c0(0x230)](_0x2956c0(0x203))
      [_0x2956c0(0x230)](":input[type=\x27radio\x27]:checked")
      [_0x2956c0(0x1f0)](function () {
        const _0x330b01 = _0x2956c0;
        skipTo = undefined;
        if (
          $(this)
            [_0x330b01(0x1c8)](_0x330b01(0x202))
            [_0x330b01(0x16c)]("skip-to")
        )
          skipTo = $(this)
            [_0x330b01(0x1c8)](_0x330b01(0x202))
            [_0x330b01(0x16c)](_0x330b01(0x16f));
        else
          $(this)[_0x330b01(0x16c)](_0x330b01(0x16f)) &&
            (skipTo = $(this)[_0x330b01(0x16c)](_0x330b01(0x16f)));
        if ($(this)[_0x330b01(0x16c)](_0x330b01(0x204)))
          (answer = $(this)[_0x330b01(0x238)]("data-go-to")),
            selections[_0x330b01(0x1bb)]({ step: x, selected: answer }),
            console["log"](skipTo),
            skipTo &&
              (selections[_0x330b01(0x1bb)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0x330b01(0x21a)](
                (_0x552efc) => _0x552efc[_0x330b01(0x1c1)] === x
              )),
              (selections[objIndex][_0x330b01(0x1d0)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x330b01(0x1ca)] = x));
        else
          $(this)
            [_0x330b01(0x1c8)](_0x330b01(0x1b0))
            [_0x330b01(0x16c)](_0x330b01(0x204)) &&
            ((answer = $(this)
              [_0x330b01(0x1c8)](_0x330b01(0x1b0))
              [_0x330b01(0x16c)](_0x330b01(0x204))),
            selections[_0x330b01(0x1bb)]({ step: x, selected: answer }),
            console[_0x330b01(0x23a)](skipTo),
            skipTo &&
              (selections[_0x330b01(0x1bb)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections["findIndex"](
                (_0x2332cc) => _0x2332cc[_0x330b01(0x1c1)] === x
              )),
              (selections[objIndex][_0x330b01(0x1d0)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x330b01(0x1ca)] = x)));
      }),
    logicExtra
      ? ($(steps[x])
          [_0x2956c0(0x230)](_0x2956c0(0x203))
          [_0x2956c0(0x230)](_0x2956c0(0x1a3))
          [_0x2956c0(0x16c)](_0x2956c0(0x1cc)) === !![] ||
          $(steps[x])
            [_0x2956c0(0x230)](_0x2956c0(0x1d3))
            [_0x2956c0(0x16c)](_0x2956c0(0x1cc)) === !![]) &&
        !back &&
        selections[_0x2956c0(0x1a0)]((_0x4d80ee) => _0x4d80ee["step"] === x)[
          "length"
        ] > 0x0 &&
        (console[_0x2956c0(0x23a)](_0x2956c0(0x170)),
        textareaLength === 0x0 &&
          textInputLength === 0x0 &&
          emailInputLength === 0x0 &&
          checkboxInputLength === 0x0 &&
          setTimeout(function () {
            (next = !![]), nextStep(), selectionQuiz();
          }, $(steps[x])
            [_0x2956c0(0x230)](_0x2956c0(0x17d))
            [_0x2956c0(0x16c)](_0x2956c0(0x1f8))))
      : $(steps[x])
          [_0x2956c0(0x230)](_0x2956c0(0x1a3))
          [_0x2956c0(0x16c)](_0x2956c0(0x1cc)) === !![] &&
        (console["log"](_0x2956c0(0x1a2), back),
        !back &&
          textareaLength === 0x0 &&
          textInputLength === 0x0 &&
          emailInputLength === 0x0 &&
          checkboxInputLength === 0x0 &&
          setTimeout(function () {
            (next = !![]), nextStep(), selectionQuiz();
          }, $(steps[x])
            [_0x2956c0(0x230)]("[data-radio-delay]")
            ["data"]("radio-delay"))),
    console[_0x2956c0(0x23a)](selections)),
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
  const _0x2c5430 = _0x17e519;
  x++,
    countCard
      ? ((curStep = curStep + 0x1),
        $(_0x2c5430(0x19c))[_0x2c5430(0x1d5)](steps["length"]))
      : $(steps[x])[_0x2c5430(0x16c)](_0x2c5430(0x19f))
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    $(_0x2c5430(0x222))[_0x2c5430(0x1d5)](curStep),
    x > progress && (progress = x),
    x <= steps[_0x2c5430(0x1be)] - 0x1 &&
      (updateStep(), memory && saveFilledInput());
}
function backStep() {
  const _0x235575 = _0x17e519;
  countCard
    ? ((curStep = curStep - 0x1),
      console["log"](curStep),
      $(_0x235575(0x19c))[_0x235575(0x1d5)](steps[_0x235575(0x1be)]))
    : $(steps[x])[_0x235575(0x16c)]("card")
    ? (curStep = curStep - 0x0)
    : (curStep = curStep - 0x1),
    $(_0x235575(0x222))[_0x235575(0x1d5)](curStep),
    x > 0x0 &&
      ($(progressbar[x])[_0x235575(0x1e5)](_0x235575(0x1b2)),
      selections[_0x235575(0x1a0)]((_0x55e29c) => _0x55e29c["skipTo"] === x)[
        "length"
      ] > 0x0
        ? (x = parseInt(
            getSafe(
              () =>
                selections["filter"](
                  (_0x32bde5) => _0x32bde5["skipTo"] === x
                )[0x0][_0x235575(0x1ca)]
            )
          ))
        : x--,
      back &&
        logicExtra &&
        ($("input[type=\x22radio\x22]")[_0x235575(0x1fd)](
          _0x235575(0x235),
          ![]
        ),
        $("input[type=\x22radio\x22]")
          [_0x235575(0x18b)](_0x235575(0x19a))
          [_0x235575(0x1e5)](_0x235575(0x209))),
      updateStep());
}
function selectionQuiz() {
  const _0x363ff5 = _0x17e519;
  if ($(this)["find"](_0x363ff5(0x1f7))) {
    $("[data-selection]")["hide"]();
    if (selectMultiple) {
      let _0x1a0620 = 0x0;
      selArr[_0x363ff5(0x1fe)](function (_0x347de4) {
        const _0x36b3a3 = _0x363ff5;
        _0x1a0620 = _0x1a0620 + _0x347de4[_0x36b3a3(0x194)];
      }),
        $(_0x363ff5(0x1f2) + _0x1a0620 + "\x22]")[_0x363ff5(0x16c)]("selection")
          ? $(_0x363ff5(0x1f2) + _0x1a0620 + "\x22]")["fadeIn"]()
          : $("[data-selection=\x22other\x22]")["fadeIn"]();
    } else
      $("[data-selection=\x22" + selString + "\x22]")["data"]("selection")
        ? $(_0x363ff5(0x1f2) + selString + "\x22]")[_0x363ff5(0x1de)]()
        : $(_0x363ff5(0x22a))[_0x363ff5(0x1de)]();
  }
}
$(_0x17e519(0x185))["on"](_0x17e519(0x1ec), function () {
  scrollTop(), (next = !![]), (back = ![]), nextStep(), selectionQuiz();
}),
  $(_0x17e519(0x1eb))["on"]("click", function () {
    scrollTop(), (next = ![]), (back = !![]), backStep(), (back = ![]);
  }),
  $(steps)
    ["find"](":input")
    ["on"](_0x17e519(0x18c), function (_0x1d06c4) {
      validation();
    }),
  $(steps)
    [_0x17e519(0x230)](_0x17e519(0x189))
    ["on"](_0x17e519(0x1ec), validation());
$("[data-clickable-all]")[_0x17e519(0x16c)]("clickable-all")
  ? $("[data-form=\x22custom-progress-indicator\x22]")[_0x17e519(0x1e5)](
      "disabled"
    )
  : $(_0x17e519(0x1b4))["addClass"](_0x17e519(0x224));
function clickableIndicator() {
  const _0x9a0b71 = _0x17e519;
  $(_0x9a0b71(0x1ef))["removeClass"]("current"),
    $(_0x9a0b71(0x1b6))[_0x9a0b71(0x16c)](_0x9a0b71(0x1cd)) &&
      ($(_0x9a0b71(0x1b6))[_0x9a0b71(0x16c)]("clickable-all")
        ? ((x = $(this)[_0x9a0b71(0x178)]()), updateStep())
        : $(this)[_0x9a0b71(0x178)]() <= progress &&
          ((x = $(this)[_0x9a0b71(0x178)]()), updateStep()));
}
$(_0x17e519(0x1b4))["on"](_0x17e519(0x1ec), clickableIndicator);
$(_0x17e519(0x215))[_0x17e519(0x16c)](_0x17e519(0x21d)) &&
  (console["log"](_0x17e519(0x18f)),
  $("[data-go-to]")[_0x17e519(0x1f0)](function () {
    const _0xf112ac = _0x17e519;
    $(this)[_0xf112ac(0x22c)](
      "<br>Data\x20Go\x20To\x20=\x20",
      $(this)["data"](_0xf112ac(0x204))
    );
  }),
  $("[data-answer]")[_0x17e519(0x1f0)](function () {
    const _0x5e91c5 = _0x17e519;
    $(this)[_0x5e91c5(0x22c)](
      _0x5e91c5(0x1c9),
      $(this)[_0x5e91c5(0x16c)](_0x5e91c5(0x197))
    );
  }));
$(_0x17e519(0x1e1))["on"](_0x17e519(0x1ec), function (_0x372ce2) {
  const _0x523f3d = _0x17e519;
  $(this)[_0x523f3d(0x16c)](_0x523f3d(0x1a5)) &&
    (redirectTo = $(this)[_0x523f3d(0x16c)](_0x523f3d(0x1a5))),
    (successCard = $(this)["data"]("success")),
    _0x372ce2[_0x523f3d(0x23e)](),
    _0x372ce2[_0x523f3d(0x1e3)](),
    logicExtra &&
      ($(this)[_0x523f3d(0x1fd)](_0x523f3d(0x223), !![]),
      $(steps)
        [_0x523f3d(0x230)](":input")
        [_0x523f3d(0x1fd)](_0x523f3d(0x182), ![]),
      console[_0x523f3d(0x23a)](_0x523f3d(0x1e4))),
    $(_0x523f3d(0x183))[_0x523f3d(0x1f0)](function () {
      const _0x2e5247 = _0x523f3d,
        _0x2811b8 = $(this)[_0x2e5247(0x230)]("[data-cms-select=text]"),
        _0x340cf5 = [];
      console[_0x2e5247(0x23a)](_0x340cf5),
        _0x2811b8[_0x2e5247(0x1f0)](function () {
          const _0x459778 = _0x2e5247;
          _0x340cf5[_0x459778(0x1bb)](
            $(this)[_0x459778(0x1d5)]()[_0x459778(0x1f6)]()
          );
        });
      const _0x48627e = $(this)[_0x2e5247(0x18b)](_0x2e5247(0x181));
      $[_0x2e5247(0x1f0)](_0x340cf5, function (_0x4b7770, _0x3268c9) {
        const _0x2b8243 = _0x2e5247,
          _0x3be5bf = $("<option>")
            [_0x2b8243(0x1da)](_0x3268c9)
            [_0x2b8243(0x1d5)](_0x3268c9);
        _0x48627e[_0x2b8243(0x22c)](_0x3be5bf);
      });
    }),
    localStorage[_0x523f3d(0x17c)]("filledInput"),
    fill &&
      ($(this)[_0x523f3d(0x16c)](_0x523f3d(0x22f))
        ? $(this)[_0x523f3d(0x1da)]($(this)[_0x523f3d(0x16c)]("wait"))
        : ($(this)["val"](_0x523f3d(0x217)),
          $(this)["text"]("Please\x20wait...")),
      $("[data-form=\x22multistep\x22]")[_0x523f3d(0x213)]());
});
function resetFormly() {
  const _0x3e62d8 = _0x17e519;
  $(_0x3e62d8(0x215))[_0x3e62d8(0x180)](_0x3e62d8(0x1ce)),
    $("[data-form=\x22multistep\x22]")
      [_0x3e62d8(0x1c8)]()
      [_0x3e62d8(0x230)](_0x3e62d8(0x1d7))
      [_0x3e62d8(0x1c5)](),
    (x = 0x0),
    updateStep(),
    $(_0x3e62d8(0x215))["show"](),
    $(_0x3e62d8(0x1e1))[_0x3e62d8(0x1d5)](oldSubmitText),
    $("[data-form=\x22submit-btn\x22]")["val"](oldSubmitText),
    $(_0x3e62d8(0x222))["text"](0x1),
    $(_0x3e62d8(0x215))
      [_0x3e62d8(0x230)]("input:checkbox")
      [_0x3e62d8(0x18b)](_0x3e62d8(0x1d2))
      [_0x3e62d8(0x1e5)](_0x3e62d8(0x209));
}
$(document)[_0x17e519(0x1cb)](function (_0xcd4503, _0x2b40aa, _0x284f79) {
  const _0x425a5f = _0x17e519;
  if (_0x284f79[_0x425a5f(0x1d4)][_0x425a5f(0x188)](_0x425a5f(0x206))) {
    const _0x2b7d09 = _0x2b40aa[_0x425a5f(0x190)] === 0xc8,
      _0x549562 = "redirect-form-hehexd";
    console[_0x425a5f(0x23a)](_0x425a5f(0x174), _0x2b7d09),
      console[_0x425a5f(0x23a)](redirectTo),
      redirectTo && _0x2b7d09 && (window[_0x425a5f(0x18d)] = redirectTo),
      console[_0x425a5f(0x23a)](successCard),
      _0x2b7d09 &&
        successCard !== "" &&
        $(_0x425a5f(0x16d) + successCard + "\x22]")[_0x425a5f(0x1de)](),
      _0x2b7d09 &&
        formReset &&
        setTimeout(() => {
          resetFormly;
        }, 0x1f4);
  }
}),
  $(_0x17e519(0x210))["on"]("click", function () {
    const _0x5a52a5 = _0x17e519;
    (back = !![]),
      (x = $(this)[_0x5a52a5(0x16c)](_0x5a52a5(0x173)) - 0x1),
      updateStep(),
      (back = ![]);
  }),
  $(_0x17e519(0x239))["on"](_0x17e519(0x1ec), function () {
    const _0xc0fe1d = _0x17e519;
    $(_0xc0fe1d(0x215))[_0xc0fe1d(0x180)](_0xc0fe1d(0x1ce));
    let _0xb49cb0 = $(this);
    $(this)["text"]("Please\x20wait..."),
      setTimeout(function () {
        const _0x3d2fb4 = _0xc0fe1d;
        $(_0xb49cb0)[_0x3d2fb4(0x1d5)](oldResetText),
          $(_0xb49cb0)[_0x3d2fb4(0x1c8)](".w-form-done")[_0x3d2fb4(0x1c5)](),
          (x = 0x0),
          updateStep(),
          $(_0x3d2fb4(0x215))["show"](),
          $(_0x3d2fb4(0x1e1))[_0x3d2fb4(0x1d5)](oldSubmitText),
          $(_0x3d2fb4(0x1e1))[_0x3d2fb4(0x1da)](oldSubmitText),
          $(_0xb49cb0)["val"](oldSubmitText),
          $(_0x3d2fb4(0x222))[_0x3d2fb4(0x1d5)](0x1),
          $(_0x3d2fb4(0x215))
            [_0x3d2fb4(0x230)](_0x3d2fb4(0x20b))
            [_0x3d2fb4(0x18b)](_0x3d2fb4(0x1d2))
            [_0x3d2fb4(0x1e5)](_0x3d2fb4(0x209));
      }, 0x3e8);
  }),
  $(_0x17e519(0x1f3))["on"]("keypress", function (_0x413ad6) {
    const _0x1de367 = _0x17e519;
    _0x413ad6["keyCode"] === 0xd &&
      fill &&
      (console[_0x1de367(0x23a)](_0x1de367(0x17f)),
      $("[data-enter]")["data"](_0x1de367(0x17f))
        ? (totalSteps > curStep && $(_0x1de367(0x185))[0x0][_0x1de367(0x1ec)](),
          _0x413ad6[_0x1de367(0x23e)](),
          _0x413ad6[_0x1de367(0x1e3)]())
        : (_0x413ad6[_0x1de367(0x23e)](), _0x413ad6["stopPropagation"]()));
  }),
  $(_0x17e519(0x1f3))[_0x17e519(0x1cf)](function (_0xd8a144) {
    const _0x57c141 = _0x17e519;
    (_0xd8a144[_0x57c141(0x1ad)] || _0xd8a144[_0x57c141(0x1b3)]) &&
      _0xd8a144[_0x57c141(0x18e)] == 0xd &&
      (x >= steps[_0x57c141(0x1be)] - 0x1 && fill
        ? $(steps[x])[_0x57c141(0x230)](_0x57c141(0x1e2))[_0x57c141(0x1ec)]()
        : (event[_0x57c141(0x23e)](), event[_0x57c141(0x1e3)]()));
  }),
  $("textarea")[_0x17e519(0x21e)](function (_0x2ce3d0) {
    const _0x44b96f = _0x17e519;
    $(this)[_0x44b96f(0x1bf)](),
      _0x2ce3d0[_0x44b96f(0x1dc)] == _0x44b96f(0x200) &&
        (_0x2ce3d0[_0x44b96f(0x23e)](), _0x2ce3d0[_0x44b96f(0x1e3)]()),
      _0x2ce3d0[_0x44b96f(0x198)] &&
        _0x2ce3d0[_0x44b96f(0x1dc)] == _0x44b96f(0x200) &&
        $(this)[_0x44b96f(0x1da)]($(this)[_0x44b96f(0x1da)]() + "\x0a");
  }),
  $(_0x17e519(0x215))
    [_0x17e519(0x230)](_0x17e519(0x1c4))
    ["on"](_0x17e519(0x18c), function () {
      const _0x40c67e = _0x17e519;
      (all_data = all_data[_0x40c67e(0x1a0)](
        (_0x3cf1ea) =>
          _0x3cf1ea[_0x40c67e(0x22b)] !==
          $(this)[_0x40c67e(0x16c)](_0x40c67e(0x1d8))
      )),
        $(this)[_0x40c67e(0x238)]("type") === _0x40c67e(0x201)
          ? all_data[_0x40c67e(0x1bb)]({
              field: $(this)[_0x40c67e(0x238)](_0x40c67e(0x1d8)),
              value: $(this)
                [_0x40c67e(0x18b)](_0x40c67e(0x1ff))
                [_0x40c67e(0x1d5)](),
            })
          : all_data["push"]({
              field: $(this)["attr"](_0x40c67e(0x1d8)),
              value: $(this)[_0x40c67e(0x1da)](),
            }),
        console[_0x40c67e(0x23a)](all_data),
        all_data[_0x40c67e(0x1fe)](function (_0x5dcd68) {
          const _0x3404ce = _0x40c67e;
          $(_0x3404ce(0x1e0) + _0x5dcd68[_0x3404ce(0x22b)] + "\x22]")[
            _0x3404ce(0x1de)
          ](),
            $(_0x3404ce(0x1e0) + _0x5dcd68["field"] + "\x22]")[
              _0x3404ce(0x1d5)
            ](_0x5dcd68[_0x3404ce(0x1ab)]);
        });
    }),
  $(_0x17e519(0x215))
    [_0x17e519(0x230)](_0x17e519(0x1d6))
    ["on"](_0x17e519(0x18c), function () {
      const _0x55c0b8 = _0x17e519;
      (all_data = all_data[_0x55c0b8(0x1a0)](
        (_0x26f272) => _0x26f272["field"] !== $(this)["attr"]("name")
      )),
        console[_0x55c0b8(0x23a)](all_data),
        all_data[_0x55c0b8(0x1bb)]({
          field: $(this)[_0x55c0b8(0x238)](_0x55c0b8(0x1d8)),
          value: $(this)["val"](),
        }),
        console["log"](all_data),
        all_data[_0x55c0b8(0x1fe)](function (_0x40e4c6) {
          const _0x308409 = _0x55c0b8;
          $("[data-input-field=\x22" + _0x40e4c6[_0x308409(0x22b)] + "\x22]")[
            _0x308409(0x1de)
          ](),
            $(_0x308409(0x1e0) + _0x40e4c6[_0x308409(0x22b)] + "\x22]")[
              _0x308409(0x1d5)
            ](_0x40e4c6[_0x308409(0x1ab)]);
        });
    }),
  $(_0x17e519(0x215))
    [_0x17e519(0x230)](_0x17e519(0x214))
    ["on"]("change", function () {
      const _0x1c9f8b = _0x17e519;
      (all_data = all_data["filter"](
        (_0x42e66e) =>
          _0x42e66e[_0x1c9f8b(0x22b)] !== $(this)["attr"](_0x1c9f8b(0x1d8))
      )),
        all_data["push"]({
          field: $(this)["attr"]("name"),
          value: $(this)[_0x1c9f8b(0x1da)](),
        }),
        all_data[_0x1c9f8b(0x1fe)](function (_0x47736b) {
          const _0x8b3b4f = _0x1c9f8b;
          $(_0x8b3b4f(0x1e0) + _0x47736b[_0x8b3b4f(0x22b)] + "\x22]")[
            _0x8b3b4f(0x1de)
          ](),
            $(_0x8b3b4f(0x1e0) + _0x47736b[_0x8b3b4f(0x22b)] + "\x22]")[
              _0x8b3b4f(0x1d5)
            ](_0x47736b[_0x8b3b4f(0x1ab)]);
        });
    }),
  updateStep();
function _0x26c5() {
  const _0x544f5f = [
    "input[value=\x22",
    "wait",
    "find",
    "some",
    ":input[required]",
    "2416sTdQln",
    ":input[type=\x22checkbox\x22]:checked",
    "checked",
    "textarea[required]",
    "[data-query-param]",
    "attr",
    "[data-btn=\x22reset\x22]",
    "log",
    "Webflow",
    "input:radio[required]",
    ":input[type=\x22text\x22]",
    "preventDefault",
    "\x22][value=\x22",
    "data",
    "[data-success-card=\x22",
    "require",
    "skip-to",
    "radio\x20skip\x20true",
    "clone",
    "input[type=\x22submit\x22]",
    "edit-step",
    "success",
    "selected-multiple",
    "input:radio[name=\x22",
    "365807KiEkEm",
    "index",
    "2079996aZFDSX",
    ":input[type=\x22checkbox\x22]",
    ":input[type=\x22email\x22][required]",
    "removeItem",
    "[data-radio-delay]",
    "button",
    "enter",
    "trigger",
    "[data-cms-select=input]",
    "required",
    "[data-cms-select=cms]",
    "stringify",
    "[data-form=\x22next-btn\x22]",
    "\x22]:checked",
    "inputName",
    "includes",
    ":radio",
    "split",
    "siblings",
    "input",
    "location",
    "keyCode",
    "debug\x20mode",
    "status",
    "block-domain",
    "[data-form=\x22next-btn\x22][data-submit-show]",
    "delete",
    "selected",
    "[data-form=\x22submit\x22]:visible",
    "addClass",
    "answer",
    "shiftKey",
    "ix2",
    ".w-form-formradioinput",
    "remove",
    "[data-text=\x22total-steps\x22]",
    "quiz",
    "[data-selected]:checked",
    "card",
    "filter",
    "href",
    "back",
    "[data-radio-skip]:visible",
    ":input[type=\x22number\x22]",
    "redirect",
    "data-radio-skip",
    "getItem",
    "[data-form=\x22progress\x22]",
    "1476260QkeuQA",
    "auto",
    "value",
    "custom-error-message",
    "metaKey",
    "dispatchEvent",
    ":input[type=\x22file\x22][required]",
    "[data-go-to]",
    "radio",
    "current",
    "ctrlKey",
    "[data-form=\x22custom-progress-indicator\x22]",
    "not",
    "[data-clickable]",
    "11432PqKSqB",
    "searchParams",
    "data-go-to",
    "input[name=\x22",
    "push",
    "filledInput",
    ":input[type=\x22tel\x22][required]",
    "length",
    "focus",
    "textarea[autofocus]",
    "step",
    "submit-show",
    "history",
    ":input",
    "hide",
    ":input[type=\x22text\x22][required]",
    "count-card",
    "parents",
    "<br>Data\x20Answer\x20=\x20",
    "backTo",
    "ajaxComplete",
    "radio-skip",
    "clickable",
    "reset",
    "keydown",
    "skipTo",
    "[data-answer=\x22",
    ".w-checkbox-input",
    "[data-answer][data-radio-skip]:visible",
    "url",
    "text",
    "textarea",
    ".w-form-done",
    "name",
    "612280ANvFBD",
    "val",
    "readystatechange",
    "key",
    "[type=\x22checkbox\x22]",
    "fadeIn",
    "set",
    "[data-input-field=\x22",
    "[data-form=\x22submit-btn\x22]",
    "[data-form=\x22submit-btn\x22]:visible",
    "stopPropagation",
    "nonvalidated",
    "removeClass",
    "input[autofocus]",
    "replaceState",
    "select[name=\x22",
    "css",
    "slow",
    "[data-form=\x22back-btn\x22]",
    "click",
    "reinit",
    "[data-reinit]",
    "[data-form=\x22progress-indicator\x22]",
    "each",
    "78jgPWXI",
    "[data-selection=\x22",
    "body",
    ".w-radio-input",
    "[data-form=\x22next-btn\x22][type=\x22submit\x22]",
    "trim",
    "[data-btn=\x22check\x22]",
    "radio-delay",
    "[data-answer]",
    "14924709fYYfpo",
    "input[type=\x22checkbox\x22]:visible",
    "children",
    "prop",
    "forEach",
    "span",
    "Enter",
    "checkbox",
    "[data-skip-to]",
    "[data-answer]:visible",
    "go-to",
    ":input[type=\x22file\x22]",
    "https://webflow.com/api/v1/form/",
    ":input[type=\x22radio\x22]",
    "[data-count-card]",
    "w--redirected-checked",
    "form[data-form=\x22multistep\x22]\x20:input",
    "input:checkbox",
    "option[value=\x22",
    "data-skip-to",
    "textarea[name=\x22",
    "textarea[required]:visible",
    "[data-btn=\x22edit\x22]",
    "[data-selected-multiple]",
    ":checked",
    "submit",
    "select",
    "[data-form=\x22multistep\x22]",
    "none",
    "Please\x20wait...",
    "11977tjYHDJ",
    "[data-form=\x22step\x22]:not([data-card=\x22true\x22])",
    "findIndex",
    "setItem",
    "input[type=\x22email\x22]:visible",
    "debug-mode",
    "keypress",
    "memory",
    "type",
    "show",
    "[data-text=\x22current-step\x22]",
    "novalidate",
    "disabled",
    ":input[type=\x22email\x22]",
    "logic-extra",
    "[data-input-field]",
    ":input[type=\x22number\x22][required]",
    "0.4",
    "[data-selection=\x22other\x22]",
    "field",
    "append",
    "select[required]",
  ];
  _0x26c5 = function () {
    return _0x544f5f;
  };
  return _0x26c5();
}
