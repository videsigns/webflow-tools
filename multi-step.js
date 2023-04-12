//12-4-23

const _0x599fef = _0x4ad3;
(function (_0x2a894a, _0x3e2605) {
  const _0x49029a = _0x4ad3,
    _0x2d817b = _0x2a894a();
  while (!![]) {
    try {
      const _0x53ea96 =
        (parseInt(_0x49029a(0x166)) / 0x1) *
          (-parseInt(_0x49029a(0xfd)) / 0x2) +
        (parseInt(_0x49029a(0x12e)) / 0x3) *
          (-parseInt(_0x49029a(0x196)) / 0x4) +
        -parseInt(_0x49029a(0x10c)) / 0x5 +
        (parseInt(_0x49029a(0x179)) / 0x6) *
          (-parseInt(_0x49029a(0xe2)) / 0x7) +
        (-parseInt(_0x49029a(0x1a1)) / 0x8) *
          (-parseInt(_0x49029a(0x188)) / 0x9) +
        (parseInt(_0x49029a(0x195)) / 0xa) *
          (parseInt(_0x49029a(0x186)) / 0xb) +
        (-parseInt(_0x49029a(0xd7)) / 0xc) *
          (-parseInt(_0x49029a(0x167)) / 0xd);
      if (_0x53ea96 === _0x3e2605) break;
      else _0x2d817b["push"](_0x2d817b["shift"]());
    } catch (_0x3a5e7f) {
      _0x2d817b["push"](_0x2d817b["shift"]());
    }
  }
})(_0x6caf, 0x943c8);
let x = 0x0,
  curStep = 0x0,
  steps = $("[data-form=\x22step\x22]"),
  progressbarClone = $(_0x599fef(0xfb))["clone"](),
  progressbar,
  countCard = $(_0x599fef(0x110))["data"](_0x599fef(0x175)),
  selectMultiple = $(_0x599fef(0x185))[_0x599fef(0xec)](_0x599fef(0x15f)),
  customError = $("[data-custom-error-message]")["data"](
    "custom-error-message"
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
  empReqfile = [],
  empReqNum = [],
  empReqTel = [],
  reinitIX = $("[data-reinit]")[_0x599fef(0xec)]("reinit"),
  textareaLength = 0x0,
  textInputLength = 0x0,
  emailInputLength = 0x0,
  selectInputLength = 0x0,
  checkboxInputLength = 0x0,
  filledInput = [],
  savedFilledInput = JSON[_0x599fef(0x15e)](
    localStorage[_0x599fef(0x142)](_0x599fef(0x121))
  ),
  memory = $(_0x599fef(0xd9))[_0x599fef(0xec)](_0x599fef(0x126)),
  quiz = $(_0x599fef(0xe3))[_0x599fef(0xec)](_0x599fef(0x12a)),
  progress = 0x0;
const urlFormly = new URL(window[_0x599fef(0x150)][_0x599fef(0x103)]);
let params = $(_0x599fef(0xe7))[_0x599fef(0xec)](_0x599fef(0x100)),
  skipTo = 0x0,
  next = ![],
  back = ![],
  selArr = [],
  selString = [],
  emptyInput = 0x0,
  searchQ = [],
  domainAllowed = !![],
  dom = [],
  logicExtra = $(_0x599fef(0x11b))["data"](_0x599fef(0x180)),
  oldSubmitText = $(_0x599fef(0x171))["val"](),
  oldResetText = $(_0x599fef(0x16a))[_0x599fef(0x191)](),
  formReset = $(_0x599fef(0x11b))[_0x599fef(0xec)](_0x599fef(0x199)),
  successCard = "";
$(progressbarClone)[_0x599fef(0x153)](_0x599fef(0x197)),
  $(_0x599fef(0x102))[_0x599fef(0x106)]()[_0x599fef(0x137)](),
  $("[data-form=\x22submit-btn\x22]")[_0x599fef(0x176)](),
  steps[_0x599fef(0xfc)](function () {
    const _0x46dddf = _0x599fef;
    $(_0x46dddf(0x102))[_0x46dddf(0x192)](
      progressbarClone[_0x46dddf(0x160)](!![], !![])
    );
  });
function _0x4ad3(_0x693e18, _0x2fb1f9) {
  const _0x6caf39 = _0x6caf();
  return (
    (_0x4ad3 = function (_0x4ad389, _0x2dab36) {
      _0x4ad389 = _0x4ad389 - 0xcf;
      let _0x133737 = _0x6caf39[_0x4ad389];
      return _0x133737;
    }),
    _0x4ad3(_0x693e18, _0x2fb1f9)
  );
}
countCard
  ? ((curStep = curStep + 0x1),
    $(_0x599fef(0x182))["text"](steps[_0x599fef(0x134)]))
  : ($(steps[x])[_0x599fef(0xec)](_0x599fef(0x130))
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    $(_0x599fef(0x182))[_0x599fef(0x191)](
      $(_0x599fef(0x14f))[_0x599fef(0x134)]
    ),
    $(_0x599fef(0x148))[_0x599fef(0xfc)](function () {
      const _0x3e110f = _0x599fef;
      $($(_0x3e110f(0xfb))[$(this)[_0x3e110f(0x154)]()])["hide"]();
    }));
(progressbar = $(_0x599fef(0x102))[_0x599fef(0x106)]()),
  $("[data-form=\x22progress-indicator\x22]")["on"](
    _0x599fef(0x1a2),
    clickableIndicator
  ),
  $(_0x599fef(0x178))[_0x599fef(0x191)](curStep),
  steps[_0x599fef(0x176)](),
  $(_0x599fef(0x125))[_0x599fef(0x176)](),
  $(_0x599fef(0x132))[_0x599fef(0xfc)](function () {
    const _0x3bee41 = _0x599fef;
    $(this)[_0x3bee41(0x190)](_0x3bee41(0x107), _0x3bee41(0x158));
  });
function getParams() {
  const _0x29a065 = _0x599fef;
  urlFormly[_0x29a065(0x10d)]["forEach"](function (_0x392847, _0xbb719e) {
    const _0x2cf083 = _0x29a065;
    searchQ[_0x2cf083(0xf4)]({ val: _0x392847, key: _0xbb719e });
  });
}
function getSafe(_0x357e92, _0x16dba1) {
  try {
    return _0x357e92();
  } catch (_0x34e92c) {
    return _0x16dba1;
  }
}
savedFilledInput &&
  memory &&
  savedFilledInput["forEach"]((_0x5302c7) => {
    const _0xcd8927 = _0x599fef;
    if (
      $(
        "input[name=\x22" +
          _0x5302c7[_0xcd8927(0x149)] +
          _0xcd8927(0x19d) +
          _0x5302c7[_0xcd8927(0x16f)] +
          "\x22]"
      )[_0xcd8927(0x190)]("type") === _0xcd8927(0x18f)
    )
      $(
        _0xcd8927(0xcf) +
          _0x5302c7[_0xcd8927(0x149)] +
          _0xcd8927(0x19d) +
          _0x5302c7[_0xcd8927(0x16f)] +
          "\x22]"
      )[_0xcd8927(0x1a2)](),
        $(
          _0xcd8927(0xcf) +
            _0x5302c7[_0xcd8927(0x149)] +
            "\x22][value=\x22" +
            _0x5302c7[_0xcd8927(0x16f)] +
            "\x22]"
        )
          [_0xcd8927(0xf5)](_0xcd8927(0x18b))
          [_0xcd8927(0xdc)](_0xcd8927(0x101));
    else
      _0x5302c7[_0xcd8927(0x16f)] === "on"
        ? ($(_0xcd8927(0xcf) + _0x5302c7[_0xcd8927(0x149)] + "\x22]")[
            _0xcd8927(0x1a2)
          ](),
          $(_0xcd8927(0xcf) + _0x5302c7[_0xcd8927(0x149)] + "\x22]")
            [_0xcd8927(0xf5)](".w-checkbox-input")
            [_0xcd8927(0xdc)](_0xcd8927(0x101)))
        : ($("input[name=\x22" + _0x5302c7["inputName"] + "\x22]")[
            _0xcd8927(0x19b)
          ](_0x5302c7[_0xcd8927(0x16f)]),
          $(_0xcd8927(0x16b) + _0x5302c7[_0xcd8927(0x149)] + "\x22]")["val"](
            _0x5302c7["value"]
          ),
          $(_0xcd8927(0x12c) + _0x5302c7["inputName"] + "\x22]")
            [_0xcd8927(0x19c)](
              "option[value=\x22" + _0x5302c7[_0xcd8927(0x16f)] + "\x22]"
            )
            [_0xcd8927(0x161)](_0xcd8927(0x14b), !![]));
  });
params &&
  (getParams(),
  searchQ[_0x599fef(0x170)]((_0x22229d) => {
    const _0x53f0a1 = _0x599fef;
    console[_0x53f0a1(0x18e)](
      _0x22229d,
      $("input[value=\x22" + _0x22229d[_0x53f0a1(0x19b)] + "\x22]")[
        _0x53f0a1(0x190)
      ](_0x53f0a1(0x107))
    );
    if (
      $(
        _0x53f0a1(0xcf) +
          _0x22229d[_0x53f0a1(0xf7)] +
          "\x22][value=\x22" +
          _0x22229d[_0x53f0a1(0x19b)] +
          "\x22]"
      )["attr"](_0x53f0a1(0x107)) === _0x53f0a1(0x18f)
    )
      $(
        _0x53f0a1(0xcf) +
          _0x22229d[_0x53f0a1(0xf7)] +
          _0x53f0a1(0x19d) +
          _0x22229d[_0x53f0a1(0x19b)] +
          "\x22]"
      )[_0x53f0a1(0x1a2)](),
        $(
          "input[name=\x22" +
            _0x22229d[_0x53f0a1(0xf7)] +
            _0x53f0a1(0x19d) +
            _0x22229d[_0x53f0a1(0x19b)] +
            "\x22]"
        )
          [_0x53f0a1(0xf5)](_0x53f0a1(0x18b))
          [_0x53f0a1(0xdc)](_0x53f0a1(0x101));
    else
      _0x22229d[_0x53f0a1(0x19b)] === "on"
        ? ($("input[name=\x22" + _0x22229d[_0x53f0a1(0xf7)] + "\x22]")[
            _0x53f0a1(0x1a2)
          ](),
          $(_0x53f0a1(0xcf) + _0x22229d[_0x53f0a1(0xf7)] + "\x22]")
            [_0x53f0a1(0xf5)](_0x53f0a1(0xf1))
            ["addClass"](_0x53f0a1(0x101)))
        : ($("input[name=\x22" + _0x22229d[_0x53f0a1(0xf7)] + "\x22]")[
            _0x53f0a1(0x19b)
          ](_0x22229d[_0x53f0a1(0x19b)]),
          $(_0x53f0a1(0x16b) + _0x22229d[_0x53f0a1(0xf7)] + "\x22]")[
            _0x53f0a1(0x19b)
          ](_0x22229d[_0x53f0a1(0x19b)]),
          $(_0x53f0a1(0x12c) + _0x22229d["key"] + "\x22]")
            [_0x53f0a1(0x19c)](
              _0x53f0a1(0x169) + _0x22229d[_0x53f0a1(0x19b)] + "\x22]"
            )
            [_0x53f0a1(0x161)](_0x53f0a1(0x14b), !![]));
  }));
quiz &&
  steps["each"](function () {
    const _0xddfaeb = _0x599fef;
    $(this)["children"]()["attr"]("data-radio-skip", !![]),
      $(this)["children"]()[_0xddfaeb(0x190)](_0xddfaeb(0x15b), 0xfa);
  });
function disableBtn(_0x2beb85) {
  const _0x4a3fda = _0x599fef;
  fill = ![];
  if (customError) {
  } else
    $(_0x4a3fda(0x1a0))["css"]({
      opacity: _0x4a3fda(0x104),
      "pointer-events": _0x4a3fda(0xdb),
    }),
      $("[data-form=\x22next-btn\x22]")[_0x4a3fda(0xdc)](_0x4a3fda(0x17e)),
      $("[data-form=\x22submit-btn\x22]")[_0x4a3fda(0xf0)]({
        opacity: _0x4a3fda(0x104),
        "pointer-events": _0x4a3fda(0xdb),
      }),
      $(_0x4a3fda(0x171))[_0x4a3fda(0xdc)](_0x4a3fda(0x17e));
}
function enableBtn() {
  const _0x2719ae = _0x599fef;
  (fill = !![]),
    $("[data-form=\x22next-btn\x22]")[_0x2719ae(0xf0)]({
      "pointer-events": _0x2719ae(0x146),
      opacity: "1",
    }),
    $(_0x2719ae(0x1a0))[_0x2719ae(0x153)](_0x2719ae(0x17e)),
    $(_0x2719ae(0x171))[_0x2719ae(0xf0)]({
      "pointer-events": _0x2719ae(0x146),
      opacity: "1",
    }),
    $(_0x2719ae(0x171))[_0x2719ae(0x153)](_0x2719ae(0x17e));
}
function saveFilledInput() {
  const _0x52b2d3 = _0x599fef;
  $(_0x52b2d3(0xdf))
    [_0x52b2d3(0x157)](_0x52b2d3(0x156))
    [_0x52b2d3(0xfc)](function () {
      const _0x3f2dd3 = _0x52b2d3;
      $(this)[_0x3f2dd3(0x190)](_0x3f2dd3(0x107)) === _0x3f2dd3(0xd4) ||
      $(this)[_0x3f2dd3(0x190)](_0x3f2dd3(0x107)) === _0x3f2dd3(0x18f)
        ? $(this)[_0x3f2dd3(0x161)]("checked") &&
          (filledInput[_0x3f2dd3(0x162)](
            (_0x426fa7) =>
              _0x426fa7[_0x3f2dd3(0x149)] === $(this)["attr"]("name")
          )
            ? ((filledInput = filledInput[_0x3f2dd3(0x135)](
                (_0x3c7e77) =>
                  _0x3c7e77[_0x3f2dd3(0x149)] !==
                  $(this)[_0x3f2dd3(0x190)]("name")
              )),
              $(this)[_0x3f2dd3(0x19b)]() !== "" &&
                filledInput[_0x3f2dd3(0xf4)]({
                  inputName: $(this)["attr"]("name"),
                  value: $(this)[_0x3f2dd3(0x19b)](),
                }))
            : $(this)[_0x3f2dd3(0x19b)]() !== "" &&
              filledInput[_0x3f2dd3(0xf4)]({
                inputName: $(this)["attr"]("name"),
                value: $(this)[_0x3f2dd3(0x19b)](),
              }))
        : filledInput[_0x3f2dd3(0x162)](
            (_0xe30b1) =>
              _0xe30b1[_0x3f2dd3(0x149)] ===
              $(this)[_0x3f2dd3(0x190)](_0x3f2dd3(0xf3))
          )
        ? ((filledInput = filledInput[_0x3f2dd3(0x135)](
            (_0x1fcdee) =>
              _0x1fcdee[_0x3f2dd3(0x149)] !== $(this)["attr"](_0x3f2dd3(0xf3))
          )),
          $(this)[_0x3f2dd3(0x19b)]() !== "" &&
            filledInput[_0x3f2dd3(0xf4)]({
              inputName: $(this)[_0x3f2dd3(0x190)]("name"),
              value: $(this)["val"](),
            }))
        : $(this)[_0x3f2dd3(0x19b)]() !== "" &&
          filledInput[_0x3f2dd3(0xf4)]({
            inputName: $(this)[_0x3f2dd3(0x190)](_0x3f2dd3(0xf3)),
            value: $(this)[_0x3f2dd3(0x19b)](),
          });
    }),
    filledInput &&
      filledInput["forEach"]((_0x4993d9) => {
        const _0x3d36bb = _0x52b2d3;
        urlFormly[_0x3d36bb(0x10d)][_0x3d36bb(0x105)](
          _0x4993d9[_0x3d36bb(0x149)]
        ),
          urlFormly[_0x3d36bb(0x10d)]["set"](
            _0x4993d9[_0x3d36bb(0x149)],
            _0x4993d9[_0x3d36bb(0x16f)]
          ),
          window["history"][_0x3d36bb(0x12d)](null, null, urlFormly);
      }),
    localStorage[_0x52b2d3(0xd3)](_0x52b2d3(0x121)),
    localStorage[_0x52b2d3(0x11e)](
      _0x52b2d3(0x121),
      JSON[_0x52b2d3(0x118)](filledInput)
    );
}
function scrollTop() {}
function updateStep() {
  const _0x117108 = _0x599fef;
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
  $(_0x117108(0x14d))[_0x117108(0xec)](_0x117108(0x13a)) &&
    (steps[_0x117108(0x19c)](_0x117108(0x17f))[_0x117108(0xfc)](function () {
      const _0x2783ba = _0x117108;
      $(
        $(_0x2783ba(0x17b))[
          $(this)[_0x2783ba(0x128)](_0x2783ba(0xd6))[_0x2783ba(0x154)]()
        ]
      ),
        $(this)[_0x2783ba(0x19b)]() === "" && emptyInput++;
    }),
    emptyInput > 0x0
      ? $("input[type=\x22submit\x22]")["addClass"](_0x117108(0x17e))
      : $(_0x117108(0x129))[_0x117108(0x153)](_0x117108(0x17e)));
  $(_0x117108(0x17b))[_0x117108(0x153)](_0x117108(0x197)),
    $($("[data-form=\x22custom-progress-indicator\x22]")[x])[_0x117108(0xdc)](
      _0x117108(0x197)
    ),
    (selection = selections[_0x117108(0x135)](
      (_0x2505cc) => _0x2505cc["step"] === x - 0x1
    ));
  next &&
    (x = getSafe(() => selection[0x0]["skipTo"])
      ? parseInt(getSafe(() => selection[0x0][_0x117108(0x116)]))
      : x);
  $(_0x117108(0x198))[_0x117108(0x176)](), steps["hide"]();
  reinitIX === !![] && window["Webflow"]["destroy"]();
  $(progressbar)[_0x117108(0x153)](_0x117108(0x197));
  for (i = 0x0; i <= x; i++) {
    countCard
      ? $(progressbar[i])["addClass"]("current")
      : !$(steps[i])["data"](_0x117108(0x130)) &&
        $(progressbar[i])[_0x117108(0xdc)](_0x117108(0x197));
  }
  reinitIX === !![]
    ? (window[_0x117108(0x19a)] &&
        window[_0x117108(0x19a)]["require"](_0x117108(0x19f))["init"](),
      document[_0x117108(0x152)](new Event(_0x117108(0x14a))),
      $(steps[x])[_0x117108(0x12f)]())
    : $(steps[x])[_0x117108(0x18d)](_0x117108(0x17c));
  x === 0x0 &&
    !$(steps[x])[_0x117108(0xec)](_0x117108(0x130)) &&
    $(steps[x])[_0x117108(0x19c)](_0x117108(0x198))["show"]();
  selection[_0x117108(0x134)] > 0x0
    ? $(steps[x])
        [_0x117108(0x19c)](
          "[data-answer=\x22" + selection[0x0][_0x117108(0x14b)] + "\x22]"
        )
        [_0x117108(0x12f)]()
    : $(steps[x])
        [_0x117108(0x19c)](_0x117108(0x13e) + answer + "\x22]")
        [_0x117108(0x12f)]();
  if (x === 0x0)
    $(_0x117108(0x194))[_0x117108(0x176)](),
      $("[data-form=\x22next-btn\x22]")[_0x117108(0x12f)]();
  else {
    if (
      x === steps[_0x117108(0x134)] - 0x1 ||
      $(steps[x])[_0x117108(0x19c)](_0x117108(0xe9))["length"] > 0x0
    ) {
      $(_0x117108(0x1a0))["hide"]();
      if (
        $(steps[x])
          [_0x117108(0x19c)](_0x117108(0xda))
          [_0x117108(0xec)](_0x117108(0x115))
      )
        $(steps[x])[_0x117108(0x19c)](_0x117108(0xda))[_0x117108(0x12f)]();
      else
        $(_0x117108(0x1a0))[_0x117108(0xec)](_0x117108(0x115)) &&
          $("[data-form=\x22next-btn\x22]")["show"]();
      $(_0x117108(0x171))["show"](), $(_0x117108(0x194))[_0x117108(0x12f)]();
    } else
      $(_0x117108(0x1a0))[_0x117108(0x12f)](),
        $(_0x117108(0x194))[_0x117108(0x12f)](),
        $(_0x117108(0x171))[_0x117108(0x176)]();
  }
  $($(steps[x])[_0x117108(0x19c)](_0x117108(0x11c))[0x0])[_0x117108(0x147)](),
    $($(steps[x])["find"](_0x117108(0x165))[0x0])[_0x117108(0x147)](),
    validation();
  for (idx = 0x0; idx <= progress; idx++) {
    $($("[data-form=\x22custom-progress-indicator\x22]")[idx])[
      _0x117108(0x153)
    ](_0x117108(0x17e));
  }
}
function validateEmail(_0x2094e4, _0x3f88dd) {
  const _0x13b24c = _0x599fef;
  let _0x7b3b42 = _0x2094e4[_0x13b24c(0x109)]("@")
    ? _0x2094e4[_0x13b24c(0xdd)]("@")[0x1]["split"](".")[0x0]
    : [];
  dom = [];
  _0x3f88dd !== undefined &&
    _0x3f88dd[_0x13b24c(0xdd)](",")["forEach"](function (_0x2a78a0) {
      const _0x14c7db = _0x13b24c;
      _0x2a78a0[_0x14c7db(0x109)](_0x7b3b42) && dom[_0x14c7db(0xf4)](_0x7b3b42);
    });
  dom["length"] > 0x0 ? (domainAllowed = ![]) : (domainAllowed = !![]);
  var _0x5b1595 = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,20})?$/;
  !_0x5b1595[_0x13b24c(0x151)](_0x2094e4)
    ? (emailFilled = ![])
    : (emailFilled = !![]);
}
function validation() {
  const _0x113de0 = _0x599fef;
  $(steps[x])[_0x113de0(0xec)](_0x113de0(0x130)) && enableBtn();
  (textareaLength = $(steps[x])[_0x113de0(0x19c)](_0x113de0(0xd1))[
    _0x113de0(0x134)
  ]),
    (textInputLength = $(steps[x])["find"](_0x113de0(0xee))[_0x113de0(0x134)]),
    (selectInputLength = $(steps[x])["find"](_0x113de0(0x140))[
      _0x113de0(0x134)
    ]),
    (emailInputLength = $(steps[x])[_0x113de0(0x19c)](
      "input[type=\x22email\x22]:visible"
    )[_0x113de0(0x134)]),
    (checkboxInputLength = $(steps[x])[_0x113de0(0x19c)](
      "input[type=\x22checkbox\x22]:visible"
    )[_0x113de0(0x134)]);
  textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0
    ? disableBtn()
    : enableBtn();
  var _0x329ab6 = $(steps[x])["data"](_0x113de0(0xd4))
    ? $(steps[x])[_0x113de0(0xec)](_0x113de0(0xd4))
    : 0x0;
  if (!logicExtra)
    $(steps[x])["find"](_0x113de0(0xd5))["is"](_0x113de0(0x13b)) &&
      (_0x329ab6 === "*" ||
      _0x329ab6 >
        $(steps[x])[_0x113de0(0x19c)](_0x113de0(0x10e))[_0x113de0(0x134)]
        ? $(steps[x])
            [_0x113de0(0x19c)](_0x113de0(0x10e))
            [_0x113de0(0xfc)](function () {
              const _0x39a426 = _0x113de0;
              $(this)["is"](_0x39a426(0x112))
                ? $(steps[x])[_0x39a426(0x19c)](_0x39a426(0x17f))[
                    _0x39a426(0x134)
                  ] < 0x1 && (checkboxFilled = !![])
                : (checkboxFilled = ![]);
            })
        : $(steps[x])[_0x113de0(0x19c)](_0x113de0(0xfa))[_0x113de0(0x134)] >=
          _0x329ab6
        ? (checkboxFilled = !![])
        : (checkboxFilled = ![])),
      $(steps[x])
        [_0x113de0(0x19c)]("input:radio[required]")
        [_0x113de0(0xfc)](function (_0x4f7d56) {
          const _0x481e04 = _0x113de0;
          var _0x24f668 = $(this)[_0x481e04(0x190)](_0x481e04(0xf3));
          console[_0x481e04(0x18e)](_0x24f668),
            $(_0x481e04(0x131) + _0x24f668 + "\x22]:checked")[
              _0x481e04(0x134)
            ] == 0x0
              ? !empReqRadio[_0x481e04(0x19c)](
                  (_0x20f231) => _0x20f231[_0x481e04(0x164)] === _0x4f7d56
                ) && empReqRadio[_0x481e04(0xf4)]({ input: _0x4f7d56 })
              : (empReqRadio = empReqRadio[_0x481e04(0x135)](
                  (_0x34c919) => _0x34c919["input"] !== _0x4f7d56
                )),
            empReqRadio[_0x481e04(0x134)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0x113de0(0x19c)](_0x113de0(0x16d))
        [_0x113de0(0xfc)](function (_0x1bcbed) {
          const _0x3e93c3 = _0x113de0;
          $(this)[_0x3e93c3(0x19b)]() !== ""
            ? (empReqInput = empReqInput[_0x3e93c3(0x135)](
                (_0x24e80b) => _0x24e80b[_0x3e93c3(0x164)] !== _0x1bcbed
              ))
            : !empReqInput[_0x3e93c3(0x19c)](
                (_0x5972c3) => _0x5972c3[_0x3e93c3(0x164)] === _0x1bcbed
              ) && empReqInput["push"]({ input: _0x1bcbed }),
            empReqInput[_0x3e93c3(0x134)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x113de0(0x133))
        ["each"](function (_0x2fd91d) {
          const _0x398037 = _0x113de0;
          $(this)["val"]() !== ""
            ? (empReqTel = empReqTel[_0x398037(0x135)](
                (_0x13dc44) => _0x13dc44[_0x398037(0x164)] !== _0x2fd91d
              ))
            : !empReqTel[_0x398037(0x19c)](
                (_0x4849d5) => _0x4849d5[_0x398037(0x164)] === _0x2fd91d
              ) && empReqTel[_0x398037(0xf4)]({ input: _0x2fd91d }),
            empReqTel[_0x398037(0x134)] === 0x0
              ? (telFilled = !![])
              : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x113de0(0x19c)](":input[type=\x22file\x22][required]")
        [_0x113de0(0xfc)](function (_0x2aea31) {
          const _0x23a6a1 = _0x113de0;
          $(this)[_0x23a6a1(0x19b)]() !== ""
            ? (empReqFile = empReqFile[_0x23a6a1(0x135)](
                (_0x450bef) => _0x450bef[_0x23a6a1(0x164)] !== _0x2aea31
              ))
            : !empReqFile[_0x23a6a1(0x19c)](
                (_0x1ac1cb) => _0x1ac1cb[_0x23a6a1(0x164)] === _0x2aea31
              ) && empReqFile[_0x23a6a1(0xf4)]({ input: _0x2aea31 }),
            empReqFile[_0x23a6a1(0x134)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x113de0(0xe6))
        [_0x113de0(0xfc)](function (_0x1db16a) {
          const _0x30ba95 = _0x113de0;
          $(this)[_0x30ba95(0x19b)]() !== ""
            ? (empReqNum = empReqNum["filter"](
                (_0x1804db) => _0x1804db[_0x30ba95(0x164)] !== _0x1db16a
              ))
            : !empReqNum[_0x30ba95(0x19c)](
                (_0x485171) => _0x485171[_0x30ba95(0x164)] === _0x1db16a
              ) && empReqNum[_0x30ba95(0xf4)]({ input: _0x1db16a }),
            empReqNum[_0x30ba95(0x134)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x113de0(0x19c)]("select[required]")
        [_0x113de0(0xfc)](function (_0x527707) {
          const _0x584599 = _0x113de0;
          let _0x2c354b = $(this)[_0x584599(0x19b)]();
          _0x2c354b === "" && (_0x2c354b = null),
            _0x2c354b != null
              ? (empReqSelect = empReqSelect["filter"](
                  (_0x2a9c94) => _0x2a9c94["input"] !== _0x527707
                ))
              : !empReqSelect["find"](
                  (_0x5edcd7) => _0x5edcd7[_0x584599(0x164)] === _0x527707
                ) && empReqSelect[_0x584599(0xf4)]({ input: _0x527707 }),
            empReqSelect["length"] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x113de0(0x19c)](_0x113de0(0x13c))
        [_0x113de0(0xfc)](function (_0x3ee736) {
          const _0x18cb25 = _0x113de0;
          $(this)[_0x18cb25(0x19b)]() !== ""
            ? (empReqTextarea = empReqTextarea[_0x18cb25(0x135)](
                (_0x51fa14) => _0x51fa14[_0x18cb25(0x164)] !== _0x3ee736
              ))
            : !empReqTextarea[_0x18cb25(0x19c)](
                (_0x3bc1a7) => _0x3bc1a7[_0x18cb25(0x164)] === _0x3ee736
              ) && empReqTextarea[_0x18cb25(0xf4)]({ input: _0x3ee736 }),
            empReqTextarea[_0x18cb25(0x134)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x113de0(0x19c)](_0x113de0(0xf8))
        ["each"](function () {
          const _0x3ad000 = _0x113de0;
          $(this)[_0x3ad000(0x19b)]() !== ""
            ? validateEmail(
                $(this)["val"](),
                $(this)[_0x3ad000(0xec)](_0x3ad000(0x139))
              )
            : (emailFilled = ![]);
        });
  else {
    if ($(steps[x])["data"](_0x113de0(0x130)))
      (answer = $(steps[x])
        [_0x113de0(0x19c)](_0x113de0(0xff))
        [_0x113de0(0xec)](_0x113de0(0xf6))),
        (selections = selections[_0x113de0(0x135)](
          (_0x4e1e81) => _0x4e1e81[_0x113de0(0x10b)] !== x
        )),
        selections[_0x113de0(0xf4)]({ step: x, selected: answer });
    else
      $(steps[x])
        ["find"]("[data-answer]:visible")
        [_0x113de0(0xec)](_0x113de0(0x130)) &&
        ((answer = $(steps[x])
          [_0x113de0(0x19c)](_0x113de0(0xe8))
          [_0x113de0(0xec)](_0x113de0(0xf6))),
        (selections = selections["filter"](
          (_0x23f751) => _0x23f751[_0x113de0(0x10b)] !== x
        )),
        selections[_0x113de0(0xf4)]({ step: x, selected: answer }));
    $(steps[x])
      [_0x113de0(0x19c)](_0x113de0(0xe8))
      [_0x113de0(0x19c)](_0x113de0(0xd5))
      ["is"]("[type=\x22checkbox\x22]") &&
      (_0x329ab6 === "*" ||
      _0x329ab6 > $(steps[x])[_0x113de0(0x19c)](_0x113de0(0x10e))["length"]
        ? $(steps[x])
            [_0x113de0(0x19c)](_0x113de0(0x10e))
            [_0x113de0(0xfc)](function () {
              const _0x5f2720 = _0x113de0;
              $(this)["is"](":checked")
                ? $(steps[x])[_0x5f2720(0x19c)](_0x5f2720(0x17f))[
                    _0x5f2720(0x134)
                  ] < 0x1 &&
                  ($(this)
                    [_0x5f2720(0x128)](_0x5f2720(0xff))
                    [_0x5f2720(0x190)](_0x5f2720(0x11a)) &&
                    ((answer = $(this)
                      [_0x5f2720(0x128)](_0x5f2720(0xff))
                      [_0x5f2720(0x190)](_0x5f2720(0x11a))),
                    (selections = selections[_0x5f2720(0x135)](
                      (_0x9f3a3f) => _0x9f3a3f["step"] !== x
                    )),
                    selections["push"]({ step: x, selected: answer })),
                  (checkboxFilled = !![]))
                : (checkboxFilled = ![]);
            })
        : $(steps[x])
            [_0x113de0(0x19c)](_0x113de0(0xe8))
            ["find"](_0x113de0(0xfa))[_0x113de0(0x134)] >= _0x329ab6
        ? ($(steps[x])
            [_0x113de0(0x19c)](_0x113de0(0xe8))
            [_0x113de0(0x19c)](_0x113de0(0xfa))
            [_0x113de0(0x128)](_0x113de0(0xff))
            [_0x113de0(0x190)](_0x113de0(0x11a)) &&
            ((answer = $(steps[x])
              [_0x113de0(0x19c)]("[data-answer]:visible")
              [_0x113de0(0x19c)](_0x113de0(0xfa))
              [_0x113de0(0x128)](_0x113de0(0xff))
              [_0x113de0(0x190)]("data-go-to")),
            (selections = selections[_0x113de0(0x135)](
              (_0x397083) => _0x397083[_0x113de0(0x10b)] !== x
            )),
            selections[_0x113de0(0xf4)]({ step: x, selected: answer })),
          (selections = selections[_0x113de0(0x135)](
            (_0x6838b7) => _0x6838b7[_0x113de0(0x10b)] !== x
          )),
          selections[_0x113de0(0xf4)]({ step: x, selected: answer }),
          (checkboxFilled = !![]))
        : (checkboxFilled = ![])),
      $(steps[x])
        [_0x113de0(0x19c)](_0x113de0(0xe8))
        [_0x113de0(0x19c)](_0x113de0(0x17f))
        ["is"](_0x113de0(0x12b))
        ? $(steps[x])
            [_0x113de0(0x19c)](_0x113de0(0xe8))
            [_0x113de0(0x19c)](_0x113de0(0x159))
            ["is"](_0x113de0(0x112))
          ? (radioFilled = !![])
          : (radioFilled = ![])
        : (radioFilled = !![]),
      $(steps[x])
        [_0x113de0(0x19c)](_0x113de0(0xe8))
        ["find"](_0x113de0(0x16d))
        [_0x113de0(0xfc)](function (_0x46efb0) {
          const _0x6cbb2 = _0x113de0;
          $(this)["val"]() !== ""
            ? (empReqInput = empReqInput[_0x6cbb2(0x135)](
                (_0x50c802) => _0x50c802[_0x6cbb2(0x164)] !== _0x46efb0
              ))
            : !empReqInput[_0x6cbb2(0x19c)](
                (_0x1be919) => _0x1be919[_0x6cbb2(0x164)] === _0x46efb0
              ) && empReqInput[_0x6cbb2(0xf4)]({ input: _0x46efb0 }),
            empReqInput[_0x6cbb2(0x134)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x113de0(0xe8))
        [_0x113de0(0x19c)](_0x113de0(0x163))
        [_0x113de0(0xfc)](function (_0x3e3af8) {
          const _0x3d7f9f = _0x113de0;
          (skipTo = undefined),
            $(this)
              [_0x3d7f9f(0x128)](_0x3d7f9f(0x124))
              [_0x3d7f9f(0xec)](_0x3d7f9f(0x123)) !== "" &&
              (skipTo = $(this)
                [_0x3d7f9f(0x128)](_0x3d7f9f(0x124))
                [_0x3d7f9f(0xec)](_0x3d7f9f(0x123))),
            $(this)
              ["parents"](_0x3d7f9f(0xff))
              [_0x3d7f9f(0x190)](_0x3d7f9f(0x11a)) &&
              ((answer = $(this)
                [_0x3d7f9f(0x128)](_0x3d7f9f(0xff))
                ["attr"](_0x3d7f9f(0x11a))),
              (selections = selections[_0x3d7f9f(0x135)](
                (_0xb6a5f1) => _0xb6a5f1[_0x3d7f9f(0x10b)] !== x
              )),
              selections[_0x3d7f9f(0xf4)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x3d7f9f(0xf4)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x3d7f9f(0x17a)](
                  (_0x9fe7b7) => _0x9fe7b7[_0x3d7f9f(0x10b)] === x
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x3d7f9f(0x120)] = x)));
        }),
      $(steps[x])
        [_0x113de0(0x19c)]("[data-answer]:visible")
        [_0x113de0(0x19c)](_0x113de0(0xe6))
        [_0x113de0(0xfc)](function (_0x557160) {
          const _0x258a39 = _0x113de0;
          $(this)[_0x258a39(0x19b)]() !== ""
            ? (empReqNum = empReqNum[_0x258a39(0x135)](
                (_0x588059) => _0x588059[_0x258a39(0x164)] !== _0x557160
              ))
            : !empReqNum["find"](
                (_0x2d7051) => _0x2d7051[_0x258a39(0x164)] === _0x557160
              ) && empReqNum[_0x258a39(0xf4)]({ input: _0x557160 }),
            empReqNum["length"] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x113de0(0xe8))
        [_0x113de0(0x19c)](_0x113de0(0x168))
        [_0x113de0(0xfc)](function (_0x1c8472) {
          const _0x572c15 = _0x113de0;
          (skipTo = undefined),
            $(this)
              [_0x572c15(0x128)](_0x572c15(0x124))
              [_0x572c15(0xec)]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0x572c15(0x128)](_0x572c15(0x124))
                [_0x572c15(0xec)](_0x572c15(0x123))),
            $(this)
              [_0x572c15(0x128)](_0x572c15(0xff))
              [_0x572c15(0x190)](_0x572c15(0x11a)) &&
              ((answer = $(this)
                [_0x572c15(0x128)]("[data-go-to]")
                ["attr"](_0x572c15(0x11a))),
              (selections = selections[_0x572c15(0x135)](
                (_0x594d42) => _0x594d42[_0x572c15(0x10b)] !== x
              )),
              selections[_0x572c15(0xf4)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x572c15(0xf4)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x572c15(0x17a)](
                  (_0x1d3ac2) => _0x1d3ac2["step"] === x
                )),
                (selections[objIndex][_0x572c15(0x116)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x572c15(0x120)] = x)));
        }),
      $(steps[x])
        [_0x113de0(0x19c)](_0x113de0(0xe8))
        [_0x113de0(0x19c)](":input[type=\x22tel\x22][required]")
        ["each"](function (_0x1621f7) {
          const _0xab3aca = _0x113de0;
          $(this)[_0xab3aca(0x19b)]() !== ""
            ? (empReqTel = empReqTel[_0xab3aca(0x135)](
                (_0x577b0c) => _0x577b0c[_0xab3aca(0x164)] !== _0x1621f7
              ))
            : !empReqTel[_0xab3aca(0x19c)](
                (_0x590a90) => _0x590a90[_0xab3aca(0x164)] === _0x1621f7
              ) && empReqTel[_0xab3aca(0xf4)]({ input: _0x1621f7 }),
            empReqTel[_0xab3aca(0x134)] === 0x0
              ? (telFilled = !![])
              : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x113de0(0x19c)](_0x113de0(0xe8))
        [_0x113de0(0x19c)](_0x113de0(0x111))
        [_0x113de0(0xfc)](function (_0x214c10) {
          const _0x5c4b19 = _0x113de0;
          (skipTo = undefined),
            $(this)[_0x5c4b19(0x128)](_0x5c4b19(0x124))["data"]("skip-to") !==
              "" &&
              (skipTo = $(this)
                [_0x5c4b19(0x128)](_0x5c4b19(0x124))
                ["data"]("skip-to")),
            $(this)["parents"]("[data-go-to]")["attr"](_0x5c4b19(0x11a)) &&
              ((answer = $(this)
                [_0x5c4b19(0x128)]("[data-go-to]")
                [_0x5c4b19(0x190)](_0x5c4b19(0x11a))),
              (selections = selections[_0x5c4b19(0x135)](
                (_0x3e154d) => _0x3e154d[_0x5c4b19(0x10b)] !== x
              )),
              selections[_0x5c4b19(0xf4)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x5c4b19(0xf4)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x5c4b19(0x17a)](
                  (_0x41e245) => _0x41e245[_0x5c4b19(0x10b)] === x
                )),
                (selections[objIndex][_0x5c4b19(0x116)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x5c4b19(0x120)] = x)));
        }),
      $(steps[x])
        [_0x113de0(0x19c)](_0x113de0(0xe8))
        ["find"](_0x113de0(0x17d))
        [_0x113de0(0xfc)](function (_0x145a93) {
          const _0x1f31fc = _0x113de0;
          $(this)[_0x1f31fc(0x19b)]() !== ""
            ? (empReqfile = empReqfile["filter"](
                (_0xfe917) => _0xfe917["input"] !== _0x145a93
              ))
            : !empReqfile[_0x1f31fc(0x19c)](
                (_0x4166b6) => _0x4166b6["input"] === _0x145a93
              ) && empReqfile["push"]({ input: _0x145a93 }),
            empReqfile[_0x1f31fc(0x134)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x113de0(0x19c)](_0x113de0(0xe8))
        [_0x113de0(0x19c)](":input[type=\x22file\x22]")
        [_0x113de0(0xfc)](function (_0x57a47a) {
          const _0x47cb44 = _0x113de0;
          (skipTo = undefined),
            $(this)
              [_0x47cb44(0x128)]("[data-skip-to]")
              [_0x47cb44(0xec)](_0x47cb44(0x123)) !== "" &&
              (skipTo = $(this)
                ["parents"]("[data-skip-to]")
                ["data"](_0x47cb44(0x123))),
            $(this)
              [_0x47cb44(0x128)]("[data-go-to]")
              ["attr"](_0x47cb44(0x11a)) &&
              ((answer = $(this)
                [_0x47cb44(0x128)]("[data-go-to]")
                [_0x47cb44(0x190)](_0x47cb44(0x11a))),
              (selections = selections[_0x47cb44(0x135)](
                (_0x1c48d5) => _0x1c48d5["step"] !== x
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x47cb44(0xf4)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x47cb44(0x17a)](
                  (_0x1d9aa1) => _0x1d9aa1[_0x47cb44(0x10b)] === x
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x47cb44(0x120)] = x)));
        }),
      $(steps[x])
        [_0x113de0(0x19c)](_0x113de0(0xe8))
        [_0x113de0(0x19c)](_0x113de0(0x144))
        [_0x113de0(0xfc)](function (_0x32ac5a) {
          const _0x3c5c7e = _0x113de0;
          $(this)[_0x3c5c7e(0x19b)]() !== ""
            ? (empReqSelect = empReqSelect[_0x3c5c7e(0x135)](
                (_0x268774) => _0x268774[_0x3c5c7e(0x164)] !== _0x32ac5a
              ))
            : !empReqSelect[_0x3c5c7e(0x19c)](
                (_0x14d230) => _0x14d230["input"] === _0x32ac5a
              ) && empReqSelect[_0x3c5c7e(0xf4)]({ input: _0x32ac5a }),
            empReqSelect[_0x3c5c7e(0x134)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x113de0(0x19c)](_0x113de0(0xe8))
        [_0x113de0(0x19c)]("select")
        [_0x113de0(0xfc)](function (_0x33b34f) {
          const _0x58cc39 = _0x113de0;
          (skipTo = undefined),
            $(this)
              [_0x58cc39(0x128)](_0x58cc39(0x124))
              [_0x58cc39(0xec)](_0x58cc39(0x123)) !== "" &&
              (skipTo = $(this)
                [_0x58cc39(0x128)]("[data-skip-to]")
                [_0x58cc39(0xec)](_0x58cc39(0x123))),
            $(this)
              [_0x58cc39(0x128)]("[data-go-to]")
              ["attr"](_0x58cc39(0x11a)) &&
              ((answer = $(this)
                ["parents"](_0x58cc39(0xff))
                ["attr"]("data-go-to")),
              (selections = selections[_0x58cc39(0x135)](
                (_0x349c22) => _0x349c22[_0x58cc39(0x10b)] !== x
              )),
              selections[_0x58cc39(0xf4)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x58cc39(0xf4)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x2ab703) => _0x2ab703[_0x58cc39(0x10b)] === x
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        ["find"]("[data-answer]:visible")
        [_0x113de0(0x19c)](_0x113de0(0x13c))
        ["each"](function (_0x1ef803) {
          const _0x16734c = _0x113de0;
          $(this)[_0x16734c(0x19b)]() !== ""
            ? (empReqTextarea = empReqTextarea[_0x16734c(0x135)](
                (_0x3a7472) => _0x3a7472[_0x16734c(0x164)] !== _0x1ef803
              ))
            : !empReqTextarea["find"](
                (_0x3cb47a) => _0x3cb47a["input"] === _0x1ef803
              ) && empReqTextarea[_0x16734c(0xf4)]({ input: _0x1ef803 }),
            empReqTextarea["length"] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x113de0(0xe8))
        [_0x113de0(0x19c)](_0x113de0(0x14c))
        [_0x113de0(0xfc)](function (_0x46d7e8) {
          const _0x20fe15 = _0x113de0;
          (skipTo = undefined),
            $(this)[_0x20fe15(0x128)](_0x20fe15(0x124))["data"]("skip-to") !==
              "" &&
              (skipTo = $(this)
                [_0x20fe15(0x128)](_0x20fe15(0x124))
                [_0x20fe15(0xec)]("skip-to")),
            $(this)
              [_0x20fe15(0x128)]("[data-go-to]")
              [_0x20fe15(0x190)](_0x20fe15(0x11a)) &&
              ((answer = $(this)
                [_0x20fe15(0x128)]("[data-go-to]")
                [_0x20fe15(0x190)](_0x20fe15(0x11a))),
              (selections = selections[_0x20fe15(0x135)](
                (_0x175da3) => _0x175da3[_0x20fe15(0x10b)] !== x
              )),
              selections[_0x20fe15(0xf4)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0x20fe15(0x17a)](
                  (_0x32fc5b) => _0x32fc5b[_0x20fe15(0x10b)] === x
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x113de0(0x19c)]("[data-answer]:visible")
        [_0x113de0(0x19c)](_0x113de0(0xf8))
        ["each"](function (_0x37f3a7) {
          const _0x58ffb6 = _0x113de0;
          $(this)["val"]() !== ""
            ? validateEmail(
                $(this)[_0x58ffb6(0x19b)](),
                $(this)[_0x58ffb6(0xec)]("block-domain")
              )
            : (emailFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x113de0(0xe8))
        [_0x113de0(0x19c)](_0x113de0(0x19e))
        [_0x113de0(0xfc)](function (_0x300835) {
          const _0x4ec435 = _0x113de0;
          (skipTo = undefined),
            $(this)[_0x4ec435(0x128)](_0x4ec435(0x124))["data"]("skip-to") !==
              "" &&
              (skipTo = $(this)
                ["parents"]("[data-skip-to]")
                [_0x4ec435(0xec)]("skip-to")),
            $(this)
              [_0x4ec435(0x128)]("[data-go-to]")
              [_0x4ec435(0x190)](_0x4ec435(0x11a)) &&
              ((answer = $(this)
                ["parents"](_0x4ec435(0xff))
                [_0x4ec435(0x190)](_0x4ec435(0x11a))),
              (selections = selections[_0x4ec435(0x135)](
                (_0x219503) => _0x219503[_0x4ec435(0x10b)] !== x
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x4ec435(0xf4)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x558d69) => _0x558d69[_0x4ec435(0x10b)] === x
                )),
                (selections[objIndex][_0x4ec435(0x116)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        });
  }
  $(steps[x])[_0x113de0(0x19c)](_0x113de0(0x122))["is"](_0x113de0(0x112)) &&
    ((selArr = []),
    $(steps)
      [_0x113de0(0x19c)](_0x113de0(0x11d))
      [_0x113de0(0xfc)](function (_0x16bdbd, _0x27f060) {
        const _0x45e3cb = _0x113de0;
        selArr[_0x45e3cb(0xf4)]({
          selected: $(this)[_0x45e3cb(0xec)](_0x45e3cb(0x14b)),
        });
      }),
    (selString = []),
    selArr[_0x113de0(0x170)]((_0x64ed6d) =>
      selString[_0x113de0(0xf4)](_0x64ed6d[_0x113de0(0x14b)])
    ),
    (selections = selections[_0x113de0(0x135)](
      (_0xeafc8a) => _0xeafc8a[_0x113de0(0x10b)] !== x
    )),
    $(steps[x])
      ["find"](_0x113de0(0xe8))
      [_0x113de0(0x19c)](_0x113de0(0x11f))
      [_0x113de0(0xfc)](function () {
        const _0xf8d78b = _0x113de0;
        skipTo = undefined;
        if (
          $(this)
            [_0xf8d78b(0x128)](_0xf8d78b(0x124))
            [_0xf8d78b(0xec)]("skip-to")
        )
          skipTo = $(this)
            [_0xf8d78b(0x128)]("[data-skip-to]")
            [_0xf8d78b(0xec)](_0xf8d78b(0x123));
        else
          $(this)["data"](_0xf8d78b(0x123)) &&
            (skipTo = $(this)[_0xf8d78b(0xec)](_0xf8d78b(0x123)));
        if ($(this)[_0xf8d78b(0xec)]("go-to"))
          (answer = $(this)[_0xf8d78b(0x190)](_0xf8d78b(0x11a))),
            selections[_0xf8d78b(0xf4)]({ step: x, selected: answer }),
            console[_0xf8d78b(0x18e)](skipTo),
            skipTo &&
              (selections[_0xf8d78b(0xf4)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0xf8d78b(0x17a)](
                (_0x33c87e) => _0x33c87e["step"] === x
              )),
              (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
              (selections[objIndex]["backTo"] = x));
        else
          $(this)
            [_0xf8d78b(0x128)](_0xf8d78b(0xff))
            [_0xf8d78b(0xec)](_0xf8d78b(0xf6)) &&
            ((answer = $(this)
              [_0xf8d78b(0x128)](_0xf8d78b(0xff))
              [_0xf8d78b(0xec)](_0xf8d78b(0xf6))),
            selections[_0xf8d78b(0xf4)]({ step: x, selected: answer }),
            console[_0xf8d78b(0x18e)](skipTo),
            skipTo &&
              (selections["push"]({ step: skipTo - 0x2, selected: answer }),
              (objIndex = selections[_0xf8d78b(0x17a)](
                (_0x1375f0) => _0x1375f0["step"] === x
              )),
              (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0xf8d78b(0x120)] = x)));
      }),
    logicExtra
      ? ($(steps[x])
          [_0x113de0(0x19c)](_0x113de0(0xe8))
          ["find"](_0x113de0(0xeb))
          ["data"](_0x113de0(0x10a)) === !![] ||
          $(steps[x])
            [_0x113de0(0x19c)](_0x113de0(0x193))
            ["data"](_0x113de0(0x10a)) === !![]) &&
        !back &&
        selections[_0x113de0(0x135)](
          (_0x3a30cc) => _0x3a30cc[_0x113de0(0x10b)] === x
        )[_0x113de0(0x134)] > 0x0 &&
        (console[_0x113de0(0x18e)](_0x113de0(0xed)),
        textareaLength === 0x0 &&
          textInputLength === 0x0 &&
          emailInputLength === 0x0 &&
          checkboxInputLength === 0x0 &&
          setTimeout(function () {
            (next = !![]), nextStep(), selectionQuiz();
          }, $(steps[x])
            ["find"](_0x113de0(0x16e))
            [_0x113de0(0xec)](_0x113de0(0xfe))))
      : $(steps[x])
          ["find"](_0x113de0(0xeb))
          [_0x113de0(0xec)](_0x113de0(0x10a)) === !![] &&
        (console[_0x113de0(0x18e)]("back", back),
        !back &&
          textareaLength === 0x0 &&
          textInputLength === 0x0 &&
          emailInputLength === 0x0 &&
          checkboxInputLength === 0x0 &&
          setTimeout(function () {
            (next = !![]), nextStep(), selectionQuiz();
          }, $(steps[x])
            ["find"](_0x113de0(0x16e))
            [_0x113de0(0xec)](_0x113de0(0xfe)))),
    console[_0x113de0(0x18e)](selections)),
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
  const _0x3d19 = _0x599fef;
  x++,
    $(_0x3d19(0x178))[_0x3d19(0x191)](
      $(steps[x])[_0x3d19(0xec)](_0x3d19(0x130))
        ? (curStep = curStep + 0x0)
        : (curStep = curStep + 0x1)
    ),
    x > progress && (progress = x),
    x <= steps[_0x3d19(0x134)] - 0x1 &&
      (updateStep(), memory && saveFilledInput());
}
function backStep() {
  const _0x5414e2 = _0x599fef;
  $("[data-text=\x22current-step\x22]")[_0x5414e2(0x191)](
    $(steps[x])[_0x5414e2(0xec)](_0x5414e2(0x130))
      ? (curStep = x - 0x0)
      : (curStep = x - 0x1)
  ),
    x > 0x0 &&
      ($(progressbar[x])["removeClass"](_0x5414e2(0x197)),
      selections[_0x5414e2(0x135)](
        (_0x40f961) => _0x40f961[_0x5414e2(0x116)] === x
      )[_0x5414e2(0x134)] > 0x0
        ? (x = parseInt(
            getSafe(
              () =>
                selections[_0x5414e2(0x135)](
                  (_0x5a3a60) => _0x5a3a60[_0x5414e2(0x116)] === x
                )[0x0][_0x5414e2(0x120)]
            )
          ))
        : x--,
      updateStep());
}
function selectionQuiz() {
  const _0x440580 = _0x599fef;
  if ($(this)[_0x440580(0x19c)](_0x440580(0x187))) {
    $(_0x440580(0xf2))[_0x440580(0x176)]();
    if (selectMultiple) {
      let _0x38a7d0 = 0x0;
      selArr[_0x440580(0x170)](function (_0x1313a2) {
        _0x38a7d0 = _0x38a7d0 + _0x1313a2["selected"];
      }),
        $(_0x440580(0x127) + _0x38a7d0 + "\x22]")[_0x440580(0xec)](
          _0x440580(0x108)
        )
          ? $(_0x440580(0x127) + _0x38a7d0 + "\x22]")[_0x440580(0x18d)]()
          : $("[data-selection=\x22other\x22]")[_0x440580(0x18d)]();
    } else
      $(_0x440580(0x127) + selString + "\x22]")["data"](_0x440580(0x108))
        ? $(_0x440580(0x127) + selString + "\x22]")["fadeIn"]()
        : $(_0x440580(0x13f))[_0x440580(0x18d)]();
  }
}
$(_0x599fef(0x1a0))["on"](_0x599fef(0x1a2), function () {
  scrollTop(), (next = !![]), (back = ![]), nextStep(), selectionQuiz();
}),
  $(_0x599fef(0x194))["on"](_0x599fef(0x1a2), function () {
    const _0x1a533c = _0x599fef;
    scrollTop(),
      (next = ![]),
      (back = !![]),
      back &&
        logicExtra &&
        ($(_0x1a533c(0xe5))[_0x1a533c(0x161)]("checked", ![]),
        $(_0x1a533c(0xe5))
          [_0x1a533c(0xf5)](_0x1a533c(0x136))
          [_0x1a533c(0x153)](_0x1a533c(0x101))),
      backStep(),
      (back = ![]);
  }),
  $(steps)
    [_0x599fef(0x19c)](":input")
    ["on"](_0x599fef(0x164), function (_0x58496e) {
      validation();
    }),
  $(steps)[_0x599fef(0x19c)](":radio")["on"](_0x599fef(0x1a2), validation());
$(_0x599fef(0xef))[_0x599fef(0xec)]("clickable-all")
  ? $(_0x599fef(0x17b))[_0x599fef(0x153)](_0x599fef(0x17e))
  : $(_0x599fef(0x17b))[_0x599fef(0xdc)](_0x599fef(0x17e));
function _0x6caf() {
  const _0x5086ad = [
    "[data-radio-delay]",
    "value",
    "forEach",
    "[data-form=\x22submit-btn\x22]",
    "[data-success-card=\x22",
    "preventDefault",
    "body",
    "count-card",
    "hide",
    "keypress",
    "[data-text=\x22current-step\x22]",
    "3820866lzaOLy",
    "findIndex",
    "[data-form=\x22custom-progress-indicator\x22]",
    "slow",
    ":input[type=\x22file\x22][required]",
    "disabled",
    ":input[required]",
    "logic-extra",
    "trim",
    "[data-text=\x22total-steps\x22]",
    "debug\x20mode",
    "trigger",
    "[data-selected-multiple]",
    "66IIuhea",
    "[data-btn=\x22check\x22]",
    "9MhhoFA",
    "metaKey",
    "redirect",
    ".w-radio-input",
    "wait",
    "fadeIn",
    "log",
    "radio",
    "attr",
    "text",
    "append",
    "[data-answer][data-radio-skip]:visible",
    "[data-form=\x22back-btn\x22]",
    "327710jjmvrg",
    "5052QMkrjz",
    "current",
    "[data-answer]",
    "reset",
    "Webflow",
    "val",
    "find",
    "\x22][value=\x22",
    ":input[type=\x22email\x22]",
    "ix2",
    "[data-form=\x22next-btn\x22]",
    "197608foVyKh",
    "click",
    "input[name=\x22",
    "answer",
    "textarea[required]:visible",
    "https://webflow.com/api/v1/form/",
    "removeItem",
    "checkbox",
    ":input",
    "[data-form=\x22step\x22]",
    "36251052FzNvRv",
    "edit-step",
    "[data-memory]",
    "[data-form=\x22next-btn\x22][data-submit-show]",
    "none",
    "addClass",
    "split",
    "keyCode",
    "form[data-form=\x22multistep\x22]\x20:input",
    "debug-mode",
    "stopPropagation",
    "7aalMEV",
    "[data-quiz]",
    "submit",
    "input[type=\x22radio\x22]",
    ":input[type=\x22number\x22][required]",
    "[data-query-param]",
    "[data-answer]:visible",
    "[data-form=\x22submit\x22]:visible",
    "multistep-redirect",
    "[data-radio-skip]:visible",
    "data",
    "radio\x20skip\x20true",
    "input[type=\x22text\x22][required]:visible",
    "[data-clickable-all]",
    "css",
    ".w-checkbox-input",
    "[data-selection]",
    "name",
    "push",
    "siblings",
    "go-to",
    "key",
    ":input[type=\x22email\x22][required]",
    "Please\x20wait...",
    ":input[type=\x22checkbox\x22]:checked",
    "[data-form=\x22progress-indicator\x22]",
    "each",
    "56362CxkrhO",
    "radio-delay",
    "[data-go-to]",
    "query-param",
    "w--redirected-checked",
    "[data-form=\x22progress\x22]",
    "href",
    "0.4",
    "delete",
    "children",
    "type",
    "selection",
    "includes",
    "radio-skip",
    "step",
    "3868460EMzpKb",
    "searchParams",
    ":input[type=\x22checkbox\x22]",
    "keydown",
    "[data-count-card]",
    ":input[type=\x22tel\x22]",
    ":checked",
    "success",
    "<br>Data\x20Answer\x20=\x20",
    "submit-show",
    "skipTo",
    "enter",
    "stringify",
    "novalidate",
    "data-go-to",
    "[data-form=\x22multistep\x22]",
    "input[autofocus]",
    "[data-selected]:checked",
    "setItem",
    ":input[type=\x27radio\x27]:checked",
    "backTo",
    "filledInput",
    ":input[type=\x22radio\x22]",
    "skip-to",
    "[data-skip-to]",
    "[data-success-card]",
    "memory",
    "[data-selection=\x22",
    "parents",
    "input[type=\x22submit\x22]",
    "quiz",
    "[type=\x22radio\x22]",
    "select[name=\x22",
    "replaceState",
    "432acOslH",
    "show",
    "card",
    "input:radio[name=\x22",
    "[data-form=\x22next-btn\x22][type=\x22submit\x22]",
    ":input[type=\x22tel\x22][required]",
    "length",
    "filter",
    ".w-form-formradioinput",
    "remove",
    "url",
    "block-domain",
    "clickable",
    "[type=\x22checkbox\x22]",
    "textarea[required]",
    "shiftKey",
    "[data-answer=\x22",
    "[data-selection=\x22other\x22]",
    "select[required]:visible",
    "data-multistep-redirect",
    "getItem",
    ".w-form-done",
    "select[required]",
    "[data-cms-select=input]",
    "auto",
    "focus",
    "[data-form=\x22step\x22][data-card]",
    "inputName",
    "readystatechange",
    "selected",
    "textarea",
    "[data-clickable]",
    "Enter",
    "[data-form=\x22step\x22]:not([data-card=\x22true\x22])",
    "location",
    "test",
    "dispatchEvent",
    "removeClass",
    "index",
    "ctrlKey",
    "[type=\x22submit\x22]",
    "not",
    "button",
    ":input[type=\x22radio\x22][required]",
    "redirect-form-hehexd",
    "data-radio-delay",
    "nonvalidated",
    "[data-enter]",
    "parse",
    "selected-multiple",
    "clone",
    "prop",
    "some",
    ":input[type=\x22text\x22]",
    "input",
    "textarea[autofocus]",
    "37ucZlUz",
    "13OSxYaG",
    ":input[type=\x22number\x22]",
    "option[value=\x22",
    "[data-btn=\x22reset\x22]",
    "textarea[name=\x22",
    "input:checkbox",
    ":input[type=\x22text\x22][required]",
  ];
  _0x6caf = function () {
    return _0x5086ad;
  };
  return _0x6caf();
}
function clickableIndicator() {
  const _0x24cde3 = _0x599fef;
  $(_0x24cde3(0xfb))["removeClass"]("current"),
    $(_0x24cde3(0x14d))[_0x24cde3(0xec)](_0x24cde3(0x13a)) &&
      ($(_0x24cde3(0x14d))[_0x24cde3(0xec)]("clickable-all")
        ? ((x = $(this)[_0x24cde3(0x154)]()), updateStep())
        : $(this)[_0x24cde3(0x154)]() <= progress &&
          ((x = $(this)[_0x24cde3(0x154)]()), updateStep()));
}
$("[data-form=\x22custom-progress-indicator\x22]")["on"](
  _0x599fef(0x1a2),
  clickableIndicator
);
$(_0x599fef(0x11b))[_0x599fef(0xec)](_0x599fef(0xe0)) &&
  (console[_0x599fef(0x18e)](_0x599fef(0x183)),
  $("[data-go-to]")[_0x599fef(0xfc)](function () {
    const _0x49a451 = _0x599fef;
    $(this)[_0x49a451(0x192)](
      "<br>Data\x20Go\x20To\x20=\x20",
      $(this)[_0x49a451(0xec)](_0x49a451(0xf6))
    );
  }),
  $(_0x599fef(0x198))[_0x599fef(0xfc)](function () {
    const _0x3194b3 = _0x599fef;
    $(this)[_0x3194b3(0x192)](
      _0x3194b3(0x114),
      $(this)[_0x3194b3(0xec)](_0x3194b3(0xd0))
    );
  }));
$(_0x599fef(0x171))["on"](_0x599fef(0x1a2), function (_0x2ea5fa) {
  const _0x38ed53 = _0x599fef;
  $(this)[_0x38ed53(0xec)](_0x38ed53(0x18a)) &&
    $("[data-form=\x22multistep\x22]")[_0x38ed53(0x190)](
      _0x38ed53(0x141),
      $(this)[_0x38ed53(0xec)](_0x38ed53(0x18a))
    ),
    (successCard = $(this)[_0x38ed53(0xec)](_0x38ed53(0x113))),
    _0x2ea5fa[_0x38ed53(0x173)](),
    _0x2ea5fa["stopPropagation"](),
    logicExtra &&
      ($(this)[_0x38ed53(0x161)](_0x38ed53(0x119), !![]),
      $(steps)["find"](_0x38ed53(0xd5))[_0x38ed53(0x161)]("required", ![]),
      console[_0x38ed53(0x18e)](_0x38ed53(0x15c))),
    $("[data-cms-select=cms]")[_0x38ed53(0xfc)](function () {
      const _0x5f1f48 = _0x38ed53,
        _0x381606 = $(this)[_0x5f1f48(0x19c)]("[data-cms-select=text]"),
        _0x27208b = [];
      console[_0x5f1f48(0x18e)](_0x27208b),
        _0x381606[_0x5f1f48(0xfc)](function () {
          const _0x56625f = _0x5f1f48;
          _0x27208b["push"]($(this)[_0x56625f(0x191)]()[_0x56625f(0x181)]());
        });
      const _0x10ccf9 = $(this)[_0x5f1f48(0xf5)](_0x5f1f48(0x145));
      $[_0x5f1f48(0xfc)](_0x27208b, function (_0x4659f6, _0x137b0a) {
        const _0x1d28e1 = _0x5f1f48,
          _0x46931e = $("<option>")
            [_0x1d28e1(0x19b)](_0x137b0a)
            [_0x1d28e1(0x191)](_0x137b0a);
        _0x10ccf9["append"](_0x46931e);
      });
    }),
    localStorage[_0x38ed53(0xd3)](_0x38ed53(0x121)),
    fill &&
      ($(this)[_0x38ed53(0xec)](_0x38ed53(0x18c))
        ? $(this)[_0x38ed53(0x19b)]($(this)["data"]("wait"))
        : ($(this)[_0x38ed53(0x19b)](_0x38ed53(0xf9)),
          $(this)[_0x38ed53(0x191)](_0x38ed53(0xf9))),
      $(_0x38ed53(0x11b))[_0x38ed53(0xe4)]());
});
function resetFormly() {
  const _0x53f09a = _0x599fef;
  $("[data-form=\x22multistep\x22]")[_0x53f09a(0x184)](_0x53f09a(0x199)),
    $("[data-form=\x22multistep\x22]")
      [_0x53f09a(0x128)]()
      [_0x53f09a(0x19c)](_0x53f09a(0x143))
      [_0x53f09a(0x176)](),
    (x = 0x0),
    updateStep(),
    $(_0x53f09a(0x11b))[_0x53f09a(0x12f)](),
    $(_0x53f09a(0x171))[_0x53f09a(0x191)](oldSubmitText),
    $("[data-form=\x22submit-btn\x22]")[_0x53f09a(0x19b)](oldSubmitText),
    $(_0x53f09a(0x178))[_0x53f09a(0x191)](0x1),
    $("[data-form=\x22multistep\x22]")
      ["find"](_0x53f09a(0x16c))
      [_0x53f09a(0xf5)](".w-checkbox-input")
      [_0x53f09a(0x153)]("w--redirected-checked");
}
$(document)["ajaxComplete"](function (_0x3be3a9, _0xb4e2e1, _0x3db7f7) {
  const _0x1729b8 = _0x599fef;
  if (_0x3db7f7[_0x1729b8(0x138)][_0x1729b8(0x109)](_0x1729b8(0xd2))) {
    const _0x45a758 = _0xb4e2e1["status"] === 0xc8,
      _0x10620e = _0x1729b8(0x15a),
      _0x58f500 = $(this)[_0x1729b8(0xec)](_0x1729b8(0xea));
    console[_0x1729b8(0x18e)](_0x45a758),
      console["log"](_0x58f500),
      _0x58f500 && _0x45a758 && (window[_0x1729b8(0x150)] = _0x58f500),
      console["log"](successCard),
      _0x45a758 &&
        successCard !== "" &&
        $(_0x1729b8(0x172) + successCard + "\x22]")[_0x1729b8(0x18d)](),
      _0x45a758 &&
        formReset &&
        setTimeout(() => {
          resetFormly;
        }, 0x1f4);
  }
}),
  $("[data-btn=\x22edit\x22]")["on"](_0x599fef(0x1a2), function () {
    const _0x52df81 = _0x599fef;
    (back = !![]),
      (x = $(this)["data"](_0x52df81(0xd8)) - 0x1),
      updateStep(),
      (back = ![]);
  }),
  $(_0x599fef(0x16a))["on"](_0x599fef(0x1a2), function () {
    const _0x15edba = _0x599fef;
    $(_0x15edba(0x11b))[_0x15edba(0x184)]("reset");
    let _0x215b10 = $(this);
    $(this)[_0x15edba(0x191)](_0x15edba(0xf9)),
      setTimeout(function () {
        const _0x263744 = _0x15edba;
        $(_0x215b10)["text"](oldResetText),
          $(_0x215b10)["parents"](_0x263744(0x143))[_0x263744(0x176)](),
          (x = 0x0),
          updateStep(),
          $(_0x263744(0x11b))[_0x263744(0x12f)](),
          $(_0x263744(0x171))["text"](oldSubmitText),
          $(_0x263744(0x171))[_0x263744(0x19b)](oldSubmitText),
          $(_0x215b10)[_0x263744(0x19b)](oldSubmitText),
          $(_0x263744(0x178))[_0x263744(0x191)](0x1),
          $(_0x263744(0x11b))
            [_0x263744(0x19c)](_0x263744(0x16c))
            [_0x263744(0xf5)](_0x263744(0xf1))
            [_0x263744(0x153)]("w--redirected-checked");
      }, 0x3e8);
  }),
  $("body")["on"](_0x599fef(0x177), function (_0x5901d1) {
    const _0x57b753 = _0x599fef;
    _0x5901d1[_0x57b753(0xde)] === 0xd &&
      fill &&
      ($(_0x57b753(0x15d))["data"](_0x57b753(0x117))
        ? ($("[data-form=\x22next-btn\x22]")[0x0][_0x57b753(0x1a2)](),
          _0x5901d1["preventDefault"](),
          _0x5901d1["stopPropagation"]())
        : (_0x5901d1["preventDefault"](), _0x5901d1["stopPropagation"]()));
  }),
  $(_0x599fef(0x174))[_0x599fef(0x10f)](function (_0x33dca8) {
    const _0x3f2d1e = _0x599fef;
    (_0x33dca8[_0x3f2d1e(0x189)] || _0x33dca8[_0x3f2d1e(0x155)]) &&
      _0x33dca8["keyCode"] == 0xd &&
      (x >= steps[_0x3f2d1e(0x134)] - 0x1 && fill
        ? $(steps[x])
            [_0x3f2d1e(0x19c)]("[data-form=\x22submit-btn\x22]:visible")
            [_0x3f2d1e(0x1a2)]()
        : (event["preventDefault"](), event["stopPropagation"]()));
  }),
  $(_0x599fef(0x14c))[_0x599fef(0x177)](function (_0x5402bb) {
    const _0x186507 = _0x599fef;
    $(this)["focus"](),
      _0x5402bb[_0x186507(0xf7)] == _0x186507(0x14e) &&
        (_0x5402bb[_0x186507(0x173)](), _0x5402bb[_0x186507(0xe1)]()),
      _0x5402bb[_0x186507(0x13d)] &&
        _0x5402bb[_0x186507(0xf7)] == "Enter" &&
        $(this)[_0x186507(0x19b)]($(this)[_0x186507(0x19b)]() + "\x0a");
  }),
  updateStep();
