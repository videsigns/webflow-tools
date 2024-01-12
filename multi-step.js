//13th Jan 2023 -- force update
//Bug fix
//1. Updated class name for formly support

const _0x1f0c14 = _0x33c1;
(function (_0x3817bf, _0x553508) {
  const _0x4a4e50 = _0x33c1,
    _0x5b1e13 = _0x3817bf();
  while (!![]) {
    try {
      const _0x149a9c =
        (parseInt(_0x4a4e50(0xfa)) / 0x1) *
          (-parseInt(_0x4a4e50(0x12b)) / 0x2) +
        parseInt(_0x4a4e50(0xbc)) / 0x3 +
        parseInt(_0x4a4e50(0x1c0)) / 0x4 +
        -parseInt(_0x4a4e50(0x140)) / 0x5 +
        parseInt(_0x4a4e50(0x1ec)) / 0x6 +
        parseInt(_0x4a4e50(0x101)) / 0x7 +
        -parseInt(_0x4a4e50(0x133)) / 0x8;
      if (_0x149a9c === _0x553508) break;
      else _0x5b1e13["push"](_0x5b1e13["shift"]());
    } catch (_0x53c9c0) {
      _0x5b1e13["push"](_0x5b1e13["shift"]());
    }
  }
})(_0x406c, 0x1a7c5);
function _0x33c1(_0x31f342, _0x28bad8) {
  const _0x406c68 = _0x406c();
  return (
    (_0x33c1 = function (_0x33c1a3, _0x5ca653) {
      _0x33c1a3 = _0x33c1a3 - 0x90;
      let _0x3e185f = _0x406c68[_0x33c1a3];
      return _0x3e185f;
    }),
    _0x33c1(_0x31f342, _0x28bad8)
  );
}
let x = 0x0,
  curStep = 0x0,
  steps = $(_0x1f0c14(0x12a)),
  progressbarClone = $(_0x1f0c14(0xd0))[_0x1f0c14(0x9d)](),
  progressbar,
  countCard = !![],
  weightedSelection = $(_0x1f0c14(0x129))["data"](_0x1f0c14(0x1b7)),
  weightedSelectionRange = $(_0x1f0c14(0xf2))[_0x1f0c14(0x10e)](
    _0x1f0c14(0x97)
  ),
  selectMultiple = $("[data-select-multiple]")[_0x1f0c14(0x10e)](
    _0x1f0c14(0x11a)
  ),
  customError = $(_0x1f0c14(0x114))["data"](_0x1f0c14(0x1a2)),
  fill = ![],
  inputFilled = !![],
  skip,
  urlFilled = !![],
  selectFilled = !![],
  radioFilled = !![],
  dateFilled = !![],
  timeFilled = !![],
  checkboxFilled = !![],
  emailFilled = !![],
  textareaFilled = !![],
  telFilled = !![],
  passwordFilled = !![],
  fileFilled = !![],
  numFilled = !![],
  answer = "",
  selections = [],
  selection = [],
  empReqInput = [],
  empReqUrl = [],
  empReqDate = [],
  empReqTime = [],
  empReqRadio = [],
  empReqSelect = [],
  empReqTextarea = [],
  empReqFile = [],
  empReqPassword = [],
  empReqNum = [],
  empReqEmail = [],
  empReqTel = [],
  reinitIX = $(_0x1f0c14(0x1b6))["data"](_0x1f0c14(0x1b0)),
  textareaLength = 0x0,
  textInputLength = 0x0,
  emailInputLength = 0x0,
  selectInputLength = 0x0,
  checkboxInputLength = 0x0,
  filledInput = [],
  savedFilledInput = [],
  memory = $(_0x1f0c14(0x190))[_0x1f0c14(0x10e)](_0x1f0c14(0xe3)),
  quiz = $(_0x1f0c14(0x1a9))[_0x1f0c14(0x10e)](_0x1f0c14(0x185)),
  progress = 0x0;
const urlFormly = new URL(window[_0x1f0c14(0x16c)][_0x1f0c14(0x126)]);
let _params = $("[data-query-param]")[_0x1f0c14(0x10e)](_0x1f0c14(0x191)),
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
  logicExtra = $(_0x1f0c14(0x17e))["data"](_0x1f0c14(0xbb)),
  oldSubmitText = $(_0x1f0c14(0x1f6))["val"](),
  oldResetText = $(_0x1f0c14(0x1c3))[_0x1f0c14(0xbe)](),
  formReset = $(_0x1f0c14(0x17e))[_0x1f0c14(0x10e)](_0x1f0c14(0xa1)),
  successCard = "",
  redirectTo = "",
  totalSteps = 0x0,
  checkCount = 0x0,
  resetDelay = $(_0x1f0c14(0x90))["data"](_0x1f0c14(0xd9))
    ? $(_0x1f0c14(0x90))["data"](_0x1f0c14(0xd9))
    : 0x7d0,
  redirectDelay = $(_0x1f0c14(0xae))[_0x1f0c14(0x10e)](_0x1f0c14(0x17f))
    ? $("[data-redirect-delay]")[_0x1f0c14(0x10e)](_0x1f0c14(0x17f))
    : 0x7d0,
  newTab = !![],
  unfilledArr = [],
  phoneFormat = $(_0x1f0c14(0x17e))["data"]("phone-validation"),
  scrollToTop = $(_0x1f0c14(0x17e))[_0x1f0c14(0x10e)]("scroll-top"),
  conditionalResult =
    $(_0x1f0c14(0x9e))["data"](_0x1f0c14(0x192)) === _0x1f0c14(0xdc),
  scrollTopOffset = parseInt(
    $(_0x1f0c14(0x17e))[_0x1f0c14(0x10e)](_0x1f0c14(0x17a))
  ),
  notRobot = !![],
  all_data = [];
const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
savedFilledInput = JSON[_0x1f0c14(0x156)](
  localStorage[_0x1f0c14(0xc3)](_0x1f0c14(0x19d))
);
var ogCloneArr = [];
$("[data-clone]")[_0x1f0c14(0x1bc)](function () {
  const _0x2bee6c = _0x1f0c14;
  ogCloneArr[_0x2bee6c(0x1dd)]({
    name: $(this)[_0x2bee6c(0x10e)]("clone"),
    element: $(this)[_0x2bee6c(0x9d)](!![]),
    display: $(
      "[data-display=\x22" +
        $(this)[_0x2bee6c(0x10e)](_0x2bee6c(0x9d)) +
        "\x22]"
    )
      ["eq"](0x0)
      [_0x2bee6c(0x9d)](!![]),
  });
});
$("div.g-recaptcha")[_0x1f0c14(0x167)] > 0x0 && (notRobot = ![]);
function recaptcha(_0x3273fc) {
  notRobot = !![];
}
$(_0x1f0c14(0x187))[_0x1f0c14(0x167)] > 0x0 &&
  (countCard = $(_0x1f0c14(0x187))[_0x1f0c14(0x10e)](_0x1f0c14(0x11c)));
$(_0x1f0c14(0x9b))["hide"](),
  $(progressbarClone)[_0x1f0c14(0x125)](_0x1f0c14(0x127)),
  $(_0x1f0c14(0x1c9))["children"]()[_0x1f0c14(0x119)](),
  $(_0x1f0c14(0x1f6))[_0x1f0c14(0x1a3)](),
  $(_0x1f0c14(0x1aa))[_0x1f0c14(0x1a3)](),
  steps["each"](function () {
    const _0x271333 = _0x1f0c14;
    $(_0x271333(0x1c9))[_0x271333(0xb8)](
      progressbarClone[_0x271333(0x9d)](!![], !![])
    );
  }),
  $(_0x1f0c14(0x1e6))[_0x1f0c14(0x1a3)]();
countCard
  ? ((curStep = curStep + 0x1),
    (totalSteps = steps[_0x1f0c14(0x167)]),
    $(_0x1f0c14(0x151))[_0x1f0c14(0xbe)](totalSteps))
  : ($(steps[x])[_0x1f0c14(0x10e)](_0x1f0c14(0xfe))
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    (totalSteps = $("[data-form=\x22step\x22]:not([data-card=\x22true\x22])")[
      "length"
    ]),
    $("[data-text=\x22total-steps\x22]")[_0x1f0c14(0xbe)](totalSteps),
    $(_0x1f0c14(0xa6))[_0x1f0c14(0x1bc)](function () {
      const _0x3aefa4 = _0x1f0c14;
      $($(_0x3aefa4(0xd0))[$(this)[_0x3aefa4(0x15f)]()])[_0x3aefa4(0x1a3)]();
    }));
(progressbar = $("[data-form=\x22progress\x22]")[_0x1f0c14(0xc2)]()),
  $(_0x1f0c14(0xd0))["on"](_0x1f0c14(0x1a6), clickableIndicator),
  $(_0x1f0c14(0xf5))["text"](curStep),
  steps[_0x1f0c14(0x1a3)](),
  $(_0x1f0c14(0xd6))[_0x1f0c14(0x1a3)](),
  $(_0x1f0c14(0x166))[_0x1f0c14(0x1bc)](function () {
    const _0x3f4d36 = _0x1f0c14;
    $(this)[_0x3f4d36(0x198)](_0x3f4d36(0x1e4), _0x3f4d36(0x9a));
  });
function getParams() {
  urlFormly["searchParams"]["forEach"](function (_0x4491ec, _0x54b9de) {
    const _0x2db1e3 = _0x33c1;
    searchQ[_0x2db1e3(0x1dd)]({ val: _0x4491ec, key: _0x54b9de });
  });
}
function getSafe(_0x29a665, _0x86d661) {
  try {
    return _0x29a665();
  } catch (_0x36fc87) {
    return _0x86d661;
  }
}
function phoneAutoFormat(_0xe89740) {
  var _0x271054 = "";
  return function (_0x4d896b) {
    const _0x1fc2cb = _0x33c1;
    var _0xe6ad65 = "",
      _0x8c132 = _0x4d896b[_0x1fc2cb(0xc9)](/\D/g, ""),
      _0x199805 = 0x0,
      _0x556d24 = 0x0;
    while (
      _0x199805 < _0x8c132[_0x1fc2cb(0x167)] &&
      _0x556d24 < _0xe89740[_0x1fc2cb(0x167)]
    ) {
      _0xe89740[_0x556d24] === "x"
        ? ((_0xe6ad65 += _0x8c132[_0x199805]), _0x199805++)
        : (_0xe6ad65 += _0xe89740[_0x556d24]),
        _0x556d24++;
    }
    if (_0x4d896b[_0x1fc2cb(0x167)] < _0x271054[_0x1fc2cb(0x167)]) {
      var _0x51df94 = _0xe89740[_0x1fc2cb(0x91)](_0x556d24);
      _0xe6ad65 += _0x51df94[_0x1fc2cb(0xc9)](/x/g, "");
    }
    return (_0x271054 = _0xe6ad65), _0xe6ad65;
  };
}
function validateURL(_0x121cbc) {
  const _0x1996fb = _0x1f0c14;
  return urlPattern[_0x1996fb(0xa5)](_0x121cbc) ? !![] : ![];
}
quiz &&
  steps[_0x1f0c14(0x1bc)](function () {
    const _0x92178 = _0x1f0c14;
    $(this)["children"]()[_0x92178(0x198)](_0x92178(0xdb), !![]),
      $(this)["children"]()[_0x92178(0x198)](_0x92178(0x193), 0xfa);
  });
function _0x406c() {
  const _0x1506b4 = [
    "\x22][value=\x22",
    "submit",
    "<option>",
    "clickable-all",
    "siblings",
    "[data-cms-select=text]",
    "running",
    "[data-clone-input=\x22",
    "selected",
    "appendChild",
    "[data-text=\x22total-steps\x22]",
    "[data-go-to]",
    "[data-clone]",
    "data-skip-to",
    "div",
    "parse",
    "inputName",
    "innerHTML",
    "findIndex",
    "parent",
    "[data-input-index=\x22",
    "style",
    "stringify",
    "[data-enter=\x22true\x22]",
    "index",
    "[data-form=\x22submit-btn\x22]:visible",
    "redirect-form-hehexd",
    "preventDefault",
    "input[type=\x22email\x22]:visible",
    "[data-display-input=\x22",
    "setItem",
    "[data-form=\x22next-btn\x22][type=\x22submit\x22]",
    "length",
    "slow",
    ":input",
    "</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Attributes</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>1.\x20Form:\x20data-form=multistep\x20",
    "block-domain",
    "location",
    ":input[type=\x22checkbox\x22]",
    "removeItem",
    "remove-upload",
    ".active-answer-card",
    "w--redirected-checked",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>5.\x20Submit\x20Buttons:\x20data-form=next-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Submit\x20button\x20present?\x20",
    "[data-clone=\x22",
    "[data-progressive-target=\x22",
    ":input[type=\x22checkbox\x22][required]",
    "progressive-input",
    "ix2",
    "[data-callback=\x22recaptcha\x22]",
    "input[type=\x22radio\x22]",
    "scroll-top-offset",
    "add-new",
    "submit-show",
    "[data-selection=\x22",
    "[data-form=\x22multistep\x22]",
    "redirect-delay",
    ":input[type=\x22checkbox\x22]:checked",
    "</div>",
    "open",
    "[type=\x22submit\x22]",
    "edit-step",
    "quiz",
    ":first",
    "[data-count-card]",
    "success",
    "active-answer-card",
    "<strong\x20class=\x22f-text-white\x22>Current\x20Step\x20Text\x20",
    "radio-skip",
    "checkbox",
    "<strong\x20class=\x22f-text-white\x22>Total\x20Step\x20Text\x20",
    "[data-form=\x22submit\x22]:visible",
    "[data-answer=\x22",
    "[data-memory]",
    "query-param",
    "conditional-result",
    "data-radio-delay",
    "top",
    "clicked\x20enter",
    "ctrlKey",
    "[data-display]",
    "attr",
    "createElement",
    "addClass",
    "input:checkbox",
    "\x0a\x20\x20<button\x20class=\x22f-openbtn\x22\x20onclick=\x22openNav()\x22>\x0a\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x2220px\x22\x20height=\x2220px\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M11\x2021h-1l1-7H7.5c-.88\x200-.33-.75-.31-.78C8.48\x2010.94\x2010.42\x207.54\x2013.01\x203h1l-1\x207h3.51c.4\x200\x20.62.19.4.66C12.97\x2017.55\x2011\x2021\x2011\x2021\x22></path>\x0a\x20\x20\x20\x20</svg>\x20Check\x20Form\x0a\x20\x20</button>\x0a\x20\x20<div\x20id=\x22f-mySidenav\x22\x20class=\x22f-sidenav\x22>\x0a\x20\x20\x20\x20<a\x20href=\x22javascript:void(0)\x22\x20class=\x22f-closebtn\x22\x20onclick=\x22closeNav()\x22>&times;</a>\x0a\x20\x20\x20\x20<div\x20class=\x22f-fc-main-content\x22>\x0a\x20\x20\x20\x20\x20\x20<h4\x20class=\x22f-text-header\x22>Formly\x20Support</h4>\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20If\x20you\x20have\x20spotted\x20a\x20bug\x20or\x20require\x20extra\x20support,\x20please\x20reach\x20out\x20to\x20us\x20via\x20Slack\x20or\x20email\x20us\x20at\x20developer@videsigns.uk.\x0a\x20\x20\x20\x20\x20\x20</p>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Form\x20Type</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>",
    "filledInput",
    "<strong\x20class=\x22f-text-white\x22>ReCAPTCHA\x20",
    "<strong\x20class=\x22f-text-white\x22>Custom\x20Progress\x20Indicators\x20",
    ":checked",
    "backTo",
    "custom-error-message",
    "hide",
    "Basic\x20(No\x20Formly\x20Logic)",
    "min-character",
    "click",
    ":input[type=\x22file\x22][required]",
    "keydown",
    "[data-quiz]",
    "[data-form-ms=\x22submit-btn\x22]",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "[data-selection=\x22other\x22]",
    "https://webflow.com/api/v1/form/",
    "\x22]:not([data-prefill=\x22false\x22])",
    "input[autofocus]",
    "reinit",
    "form[data-form=\x22multistep\x22]",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a",
    "[data-cms-select=input]",
    "[data-form=\x22back-btn\x22]",
    "<span\x20class=\x22f-icon-embed-xxsmall-2\x20w-embed\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--carbon\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2032\x2032\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M16\x202C8.2\x202\x202\x208.2\x202\x2016s6.2\x2014\x2014\x2014s14-6.2\x2014-14S23.8\x202\x2016\x202m5.4\x2021L16\x2017.6L10.6\x2023L9\x2021.4l5.4-5.4L9\x2010.6L10.6\x209l5.4\x205.4L21.4\x209l1.6\x201.6l-5.4\x205.4l5.4\x205.4z\x22></path></svg></span>",
    "[data-reinit]",
    "weighted-selection",
    "[data-form=\x22next-btn\x22][data-submit-show]",
    "split",
    "[data-display-input-wrapper=\x22",
    "0px",
    "each",
    "textarea[autofocus]",
    ":input[type=\x22date\x22][required]",
    "35%",
    "639288hCxYAo",
    "[data-skip-to]",
    "[data-display=\x22",
    "[data-btn=\x22reset\x22]",
    "[data-display-input]",
    "file",
    ":input[type=\x22password\x22]",
    "Webflow",
    "getElementById",
    "[data-form=\x22progress\x22]",
    "Please\x20wait...",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Next\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button\x20",
    "<br>Data\x20Go\x20To\x20=\x20",
    "querySelector",
    ".w-radio-input",
    "div.g-recaptcha",
    "input:radio[name=\x22",
    "join",
    "value",
    "input[type=\x22checkbox\x22]:visible",
    "offset",
    "[data-submit=\x22true\x22]",
    "head",
    "prop",
    "last",
    "<strong\x20class=\x22f-text-white\x22>Automatic\x20Progress\x20Indicators\x20",
    "true",
    "body",
    "[data-remove-upload]",
    "push",
    "[data-display-wrapper=\x22",
    "<strong\x20class=\x22f-text-white\x22>Press\x20\x22⌘\x20+\x20Enter\x20\x22\x20To\x20Submit\x20",
    "selection",
    "not",
    "PASS",
    "go-to",
    "type",
    "[data-clickable-all]",
    "[data-input-field]",
    "log",
    ":input[required]",
    "[data-range]:contains(",
    "[type=\x22radio\x22]",
    "fadeIn",
    "440664CsLsgT",
    "radio",
    "find",
    "src",
    ":input[type=\x22email\x22][required]",
    "FormlyLogic\x20enabled",
    "phone-autoformat",
    ":input[type=\x22file\x22]",
    "padding",
    "disabled",
    "[data-form=\x22submit-btn\x22]",
    "[data-reset-delay]",
    "slice",
    "formly-support",
    "checked",
    "[data-add-new-input]",
    "[data-radio-delay]",
    "No\x20Formly\x20script\x20added\x20to\x20the\x20page!",
    "weighted-selection-range",
    "wait",
    "name",
    "button",
    "[data-text=\x22error-message\x22]",
    "[data-form=\x22custom-progress-indicator\x22]",
    "clone",
    "[data-conditional-result]",
    "[data-enter]",
    "none",
    "reset",
    "search",
    "dispatchEvent",
    "parents",
    "test",
    "[data-form=\x22step\x22][data-card]",
    "input[type=\x22submit\x22]",
    "field",
    "some",
    "f-mySidenav",
    "formly",
    "data-name",
    "\x22]\x20input",
    "[data-redirect-delay]",
    "<strong\x20class=\x22f-text-white\x22>Radio\x20Inputs\x20",
    "input-field",
    "[data-form=\x22remove-clone\x22]",
    "closest",
    "stopPropagation",
    "data-go-to",
    "Before\x20&lt;/body&gt;\x20tag",
    "ms-field",
    "[data-clickable]",
    "append",
    "[data-radio-skip]:visible",
    ":input[type=\x22password\x22][required]",
    "logic-extra",
    "314256HzwuAn",
    "destroy",
    "text",
    "[data-show-if]",
    "videsigns",
    "parentNode",
    "children",
    "getItem",
    "script",
    ":input[type=\x27radio\x27]:checked",
    "debug-mode",
    "BODY",
    "<br>Data\x20Answer\x20=\x20",
    "replace",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>Script\x20Location:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>",
    "step",
    "textarea",
    "[data-display-index=\x22",
    "required",
    ":input[type=\x22time\x22]",
    "[data-form=\x22progress-indicator\x22]",
    "filter",
    "input",
    "multistep",
    "val",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Powerups</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "[data-success-card]",
    "[data-display-input-index=\x22",
    "trim",
    "reset-delay",
    "add-new-input",
    "data-radio-skip",
    "AND",
    "[data-radio-skip=\x22true\x22]",
    ":input[type=\x22time\x22][required]",
    "startsWith",
    "\x22]\x20[data-input-field^=\x22",
    "width",
    "0.4",
    "memory",
    "key",
    "<div\x20data-range=\x22selection\x22\x20style=\x22display:none\x20!important\x22>",
    "\x22][data-progressive-input-value=\x22",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Multistep\x20form\x20attribute\x20is\x20on\x20Form\x20element\x20and\x20not\x20on\x20Form\x20Block\x20element\x0a\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>2.\x20Form\x20Steps:\x20data-form=step\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "[data-clone-wrapper]",
    "[data-selection]",
    "[data-progressive-input]",
    "[data-progressive-input=\x22",
    ":input[type=\x22checkbox\x22][required]:checked",
    "clicked",
    "[type=\x22checkbox\x22]",
    "[data-answer][data-radio-skip]:visible",
    "status",
    "focus",
    "[data-weighted-selection-range]",
    "[data-answer]",
    "redirect",
    "[data-text=\x22current-step\x22]",
    ":input[type=\x22radio\x22]",
    "keypress",
    "textarea:focus",
    "every",
    "163680cpLFBH",
    "select",
    ":input[type=\x22tel\x22]",
    "[data-success-card=\x22",
    "card",
    "clone-input",
    "select[name=\x22",
    "1456623gmTCSe",
    "display",
    "get",
    "select[required]",
    "trigger",
    "option[value=\x22$(this).val()\x22]",
    "input:radio[required]",
    "<strong\x20class=\x22f-text-white\x22>Checkboxes\x20",
    "relationship-",
    "[data-index=\x22",
    "select:not([data-prefill=\x22false\x22])",
    "input[type=\x22radio\x22]:checked",
    ".w-form-formradioinput",
    "data",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>4.\x20Back\x20Buttons:\x20data-form=next-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Back\x20button\x20present?\x20",
    "[data-btn=\x22edit\x22]",
    ":input[type=\x22number\x22][required]",
    ":input[type=\x22text\x22][required]",
    "data-input-field",
    "[data-custom-error-message]",
    "[data-selected]:checked",
    "select[required]:visible",
    "change",
    "tagName",
    "remove",
    "select-multiple",
    "show",
    "count-card",
    "[data-input-field=\x22",
    "css",
    "</strong>",
    "url",
    "[data-form=\x22next-btn\x22]",
    "skip-to",
    "[data-form=\x22remove-input-clone\x22]",
    "require",
    "removeClass",
    "href",
    "current",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>3.\x20Next\x20Buttons:\x20data-form=back-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Next\x20button\x20present?\x20",
    "[data-weighted-selection]",
    "[data-form=\x22step\x22]",
    "2BRTwyV",
    "forEach",
    "<strong\x20class=\x22f-text-white\x22>Intro\x20Cards\x20Or\x20Steps\x20Without\x20Inputs\x20",
    "<span\x20class=\x22f-icon-embed-xxsmall\x20w-embed\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010s10-4.48\x2010-10S17.52\x202\x2012\x202m-2\x2015l-5-5l1.41-1.41L10\x2014.17l7.59-7.59L19\x208z\x22></path></svg></span>",
    ".w-checkbox-input",
    "new-tab",
    "auto",
    ":focus",
    "1597880pSpHOP",
    "_blank",
    "form[data-form=\x22multistep\x22]\x20:input",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Back\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button",
    "option[value=\x22",
    "readystatechange",
    "textarea[required]:visible",
    "toLowerCase",
    "ajaxComplete",
    ".w-form-done",
    "input[type=\x22text\x22][required]:visible",
    "skipTo",
    "[data-clone-input-wrapper]",
    "371035OvgbhJ",
    "[data-progressive-input]:not(:visible)",
    "[data-clone-input]",
    "[data-checkbox]",
    "includes",
    "input[name=\x22",
    "textarea[name=\x22",
  ];
  _0x406c = function () {
    return _0x1506b4;
  };
  return _0x406c();
}
function disableBtn(_0xffb7a4) {
  const _0x34d833 = _0x1f0c14;
  (fill = ![]),
    !customError &&
      ($(_0x34d833(0x121))["css"]({
        opacity: _0x34d833(0xe2),
        "pointer-events": _0x34d833(0xa0),
      }),
      $("[data-form=\x22next-btn\x22]")[_0x34d833(0x19a)](_0x34d833(0x1f5)),
      $(_0x34d833(0x1f6))[_0x34d833(0x11e)]({
        opacity: _0x34d833(0xe2),
        "pointer-events": _0x34d833(0xa0),
      }),
      $(_0x34d833(0x1f6))[_0x34d833(0x19a)](_0x34d833(0x1f5)),
      $(_0x34d833(0x1aa))[_0x34d833(0x11e)]({
        opacity: "0.4",
        "pointer-events": _0x34d833(0xa0),
      }),
      $(_0x34d833(0x1aa))[_0x34d833(0x19a)]("disabled"));
}
function enableBtn() {
  const _0x1f892f = _0x1f0c14;
  (fill = !![]),
    $(_0x1f892f(0x121))[_0x1f892f(0x11e)]({
      "pointer-events": _0x1f892f(0x131),
      opacity: "1",
    }),
    $("[data-form=\x22next-btn\x22]")[_0x1f892f(0x125)](_0x1f892f(0x1f5)),
    $(_0x1f892f(0x1f6))[_0x1f892f(0x11e)]({
      "pointer-events": "auto",
      opacity: "1",
    }),
    $(_0x1f892f(0x1f6))["removeClass"](_0x1f892f(0x1f5)),
    $(_0x1f892f(0x1aa))[_0x1f892f(0x11e)]({
      "pointer-events": _0x1f892f(0x131),
      opacity: "1",
    }),
    $(_0x1f892f(0x1aa))[_0x1f892f(0x125)](_0x1f892f(0x1f5));
}
function saveFilledInput() {
  const _0x2d8368 = _0x1f0c14;
  $(_0x2d8368(0x135))
    ["not"](_0x2d8368(0x183))
    ["each"](function () {
      const _0x49991b = _0x2d8368;
      $(this)[_0x49991b(0x198)](_0x49991b(0x1e4)) === _0x49991b(0x18c) ||
      $(this)[_0x49991b(0x198)]("type") === _0x49991b(0x1ed)
        ? $(this)[_0x49991b(0x1d7)](_0x49991b(0x93)) &&
          (filledInput["some"](
            (_0x2ac48f) =>
              _0x2ac48f[_0x49991b(0x157)] ===
              $(this)[_0x49991b(0x198)](_0x49991b(0x99))
          )
            ? ((filledInput = filledInput[_0x49991b(0xd1)](
                (_0x582724) =>
                  _0x582724[_0x49991b(0x157)] !==
                  $(this)[_0x49991b(0x198)](_0x49991b(0x99))
              )),
              $(this)["val"]() !== "" &&
                filledInput[_0x49991b(0x1dd)]({
                  inputName: $(this)["attr"](_0x49991b(0x99)),
                  value: $(this)[_0x49991b(0xd4)](),
                }))
            : $(this)[_0x49991b(0xd4)]() !== "" &&
              filledInput["push"]({
                inputName: $(this)[_0x49991b(0x198)](_0x49991b(0x99)),
                value: $(this)[_0x49991b(0xd4)](),
              }))
        : filledInput[_0x49991b(0xa9)](
            (_0x4b7655) =>
              _0x4b7655["inputName"] ===
              $(this)[_0x49991b(0x198)](_0x49991b(0x99))
          )
        ? ((filledInput = filledInput[_0x49991b(0xd1)](
            (_0x399ea2) =>
              _0x399ea2[_0x49991b(0x157)] !==
              $(this)[_0x49991b(0x198)](_0x49991b(0x99))
          )),
          $(this)[_0x49991b(0xd4)]() !== "" &&
            filledInput[_0x49991b(0x1dd)]({
              inputName: $(this)["attr"]("name"),
              value: $(this)["val"](),
            }))
        : $(this)[_0x49991b(0xd4)]() !== "" &&
          filledInput["push"]({
            inputName: $(this)[_0x49991b(0x198)](_0x49991b(0x99)),
            value: $(this)[_0x49991b(0xd4)](),
          });
    }),
    localStorage[_0x2d8368(0x16e)]("filledInput"),
    localStorage[_0x2d8368(0x165)](
      "filledInput",
      JSON[_0x2d8368(0x15d)](filledInput)
    );
}
function scrollTop() {
  const _0x31a554 = _0x1f0c14;
  scrollToTop &&
    $("html,\x20body")["animate"](
      {
        scrollTop:
          $(_0x31a554(0x17e))[_0x31a554(0x1d4)]()[_0x31a554(0x194)] -
          scrollTopOffset,
      },
      0x3e8
    );
}
function updateStep() {
  const _0xc178d5 = _0x1f0c14;
  scrollTop(),
    (skip = ![]),
    $(_0xc178d5(0x9c))[_0xc178d5(0x125)](_0xc178d5(0x1f5));
  $(_0xc178d5(0xb7))[_0xc178d5(0x10e)]("clickable") &&
    (steps[_0xc178d5(0x1ee)](_0xc178d5(0x1e8))["each"](function () {
      const _0x3955e3 = _0xc178d5;
      $(
        $("[data-form=\x22custom-progress-indicator\x22]")[
          $(this)[_0x3955e3(0xa4)](_0x3955e3(0x12a))[_0x3955e3(0x15f)]()
        ]
      ),
        $(this)[_0x3955e3(0xd4)]() === "" && emptyInput++;
    }),
    emptyInput > 0x0
      ? $(_0xc178d5(0xa7))["addClass"](_0xc178d5(0x1f5))
      : $("input[type=\x22submit\x22]")["removeClass"](_0xc178d5(0x1f5)));
  $("[data-form=\x22custom-progress-indicator\x22]")[_0xc178d5(0x125)](
    _0xc178d5(0x127)
  ),
    $(_0xc178d5(0x9c))[_0xc178d5(0x19a)](_0xc178d5(0x1f5)),
    $($("[data-form=\x22custom-progress-indicator\x22]")[x])[_0xc178d5(0x19a)](
      _0xc178d5(0x127)
    ),
    (selection = selections[_0xc178d5(0xd1)](
      (_0x5769f1) => _0x5769f1[_0xc178d5(0xcb)] === x - 0x1
    ));
  next &&
    (x = getSafe(() => selection[0x0]["skipTo"])
      ? parseInt(getSafe(() => selection[0x0][_0xc178d5(0x13e)]))
      : x);
  $(_0xc178d5(0xf3))[_0xc178d5(0x1a3)](), steps[_0xc178d5(0x1a3)]();
  reinitIX === !![] && window[_0xc178d5(0x1c7)][_0xc178d5(0xbd)]();
  $(progressbar)[_0xc178d5(0x125)](_0xc178d5(0x127));
  for (i = 0x0; i <= x; i++) {
    countCard
      ? $(progressbar[i])[_0xc178d5(0x19a)](_0xc178d5(0x127))
      : !$(steps[i])[_0xc178d5(0x10e)](_0xc178d5(0xfe)) &&
        $(progressbar[i])["addClass"]("current");
  }
  reinitIX === !![]
    ? (window[_0xc178d5(0x1c7)] &&
        window[_0xc178d5(0x1c7)][_0xc178d5(0x124)](_0xc178d5(0x177))["init"](),
      document[_0xc178d5(0xa3)](new Event(_0xc178d5(0x138))),
      $(steps[x])[_0xc178d5(0x11b)]())
    : $(steps[x])["fadeIn"](_0xc178d5(0x168));
  $(".active-answer-card")[_0xc178d5(0x125)](_0xc178d5(0x189));
  x === 0x0 &&
    !$(steps[x])["data"](_0xc178d5(0xfe)) &&
    ($(steps[x])["find"](_0xc178d5(0xf3))[_0xc178d5(0x11b)](),
    $(steps[x])
      [_0xc178d5(0x1ee)]("[data-answer]")
      [_0xc178d5(0x19a)](_0xc178d5(0x189)));
  selection["length"] > 0x0
    ? ($(steps[x])
        [_0xc178d5(0x1ee)](
          _0xc178d5(0x18f) + selection[0x0][_0xc178d5(0x14f)] + "\x22]"
        )
        ["show"](),
      $(steps[x])
        [_0xc178d5(0x1ee)](
          _0xc178d5(0x18f) + selection[0x0]["selected"] + "\x22]"
        )
        ["addClass"](_0xc178d5(0x189)))
    : ($(steps[x])
        [_0xc178d5(0x1ee)](_0xc178d5(0x18f) + answer + "\x22]")
        ["show"](),
      $(steps[x])
        [_0xc178d5(0x1ee)](_0xc178d5(0x18f) + answer + "\x22]")
        [_0xc178d5(0x19a)](_0xc178d5(0x189)));
  if (x === 0x0)
    $(_0xc178d5(0x1b4))[_0xc178d5(0x1a3)](),
      $(_0xc178d5(0x121))[_0xc178d5(0x11b)](),
      $(_0xc178d5(0x1f6))[_0xc178d5(0x1a3)]();
  else {
    if (
      x === steps[_0xc178d5(0x167)] - 0x1 ||
      $(steps[x])["find"](_0xc178d5(0x18e))[_0xc178d5(0x167)] > 0x0
    ) {
      $(_0xc178d5(0x121))[_0xc178d5(0x1a3)]();
      if (
        $(steps[x])
          ["find"]("[data-form=\x22next-btn\x22][data-submit-show]")
          ["data"](_0xc178d5(0x17c))
      )
        $(steps[x])[_0xc178d5(0x1ee)](_0xc178d5(0x1b8))[_0xc178d5(0x11b)]();
      else
        $(_0xc178d5(0x121))["data"](_0xc178d5(0x17c)) &&
          $(_0xc178d5(0x121))["show"]();
      $("[data-form=\x22submit-btn\x22]")[_0xc178d5(0x11b)](),
        $(_0xc178d5(0x1aa))[_0xc178d5(0x11b)](),
        $(_0xc178d5(0x1b4))[_0xc178d5(0x11b)]();
    } else
      $(_0xc178d5(0x121))[_0xc178d5(0x11b)](),
        $(_0xc178d5(0x1b4))["show"](),
        $(_0xc178d5(0x1f6))[_0xc178d5(0x1a3)](),
        $(_0xc178d5(0x1aa))[_0xc178d5(0x1a3)]();
  }
  $($(steps[x])[_0xc178d5(0x1ee)](_0xc178d5(0x1af))[0x0])[_0xc178d5(0xf1)](),
    $($(steps[x])[_0xc178d5(0x1ee)](_0xc178d5(0x1bd))[0x0])[_0xc178d5(0xf1)](),
    validation();
  for (idx = 0x0; idx <= x; idx++) {
    $($(_0xc178d5(0x9c))[idx])[_0xc178d5(0x125)](_0xc178d5(0x1f5));
  }
}
function validateEmail(_0x5eb327, _0x830328, _0x598fca) {
  const _0xa73b35 = _0x1f0c14;
  let _0x28af7f = _0x5eb327[_0xa73b35(0x144)]("@")
    ? _0x5eb327[_0xa73b35(0x1b9)]("@")[0x1][_0xa73b35(0x1b9)](".")[0x0]
    : [];
  dom = [];
  _0x830328 !== undefined &&
    _0x830328[_0xa73b35(0x1b9)](",")[_0xa73b35(0x12c)](function (_0x4d008d) {
      const _0x4924be = _0xa73b35;
      _0x4d008d[_0x4924be(0x144)](_0x28af7f) && dom["push"](_0x28af7f);
    });
  dom[_0xa73b35(0x167)] > 0x0 ? (domainAllowed = ![]) : (domainAllowed = !![]);
  var _0x1703a6 = /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,20})?$/;
  console[_0xa73b35(0x1e7)](_0x1703a6["test"](_0x5eb327)),
    !_0x1703a6[_0xa73b35(0xa5)](_0x5eb327) || !domainAllowed
      ? ((emailFilled = ![]), unfilledArr["push"]({ input: _0x598fca }))
      : (emailFilled = !![]);
}
function phoneValidation(_0x5890b9, _0x335e9f, _0x4d4896) {
  if (phoneFormat) return _0x335e9f >= _0x4d4896 ? !![] : ![];
  else {
    if (_0x335e9f >= _0x4d4896) return !![];
  }
}
function validation() {
  const _0x1854a4 = _0x1f0c14;
  $(steps[x])[_0x1854a4(0x10e)]("card") && enableBtn();
  (unfilledArr = []),
    (inputFilled = !![]),
    (radioFilled = !![]),
    (checkboxFilled = !![]),
    (numFilled = !![]),
    (fileFilled = !![]),
    (dateFilled = !![]),
    (timeFilled = !![]),
    (selectFilled = !![]),
    (textareaFilled = !![]),
    (telFilled = !![]),
    (emailFilled = !![]),
    (passwordFilled = !![]),
    (emptyInput = 0x0),
    (empReqInput = []),
    (empReqDate = []),
    (empReqTime = []),
    (empReqSelect = []),
    (empReqTextarea = []),
    (empReqNum = []),
    (empReqFile = []),
    (empReqRadio = []),
    (textareaLength = $(steps[x])["find"](_0x1854a4(0x139))[_0x1854a4(0x167)]),
    (textInputLength = $(steps[x])[_0x1854a4(0x1ee)](_0x1854a4(0x13d))[
      _0x1854a4(0x167)
    ]),
    (selectInputLength = $(steps[x])[_0x1854a4(0x1ee)](_0x1854a4(0x116))[
      _0x1854a4(0x167)
    ]),
    (emailInputLength = $(steps[x])["find"](_0x1854a4(0x163))[
      _0x1854a4(0x167)
    ]),
    (checkboxInputLength = $(steps[x])["find"](_0x1854a4(0x1d3))["length"]);
  textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0
    ? disableBtn()
    : enableBtn();
  checkCount = $(steps[x])[_0x1854a4(0x10e)](_0x1854a4(0x18c))
    ? $(steps[x])[_0x1854a4(0x10e)](_0x1854a4(0x18c))
    : $(steps[x])[_0x1854a4(0x1ee)](_0x1854a4(0x143))[_0x1854a4(0x167)] > 0x0
    ? $(steps[x])
        [_0x1854a4(0x1ee)](_0x1854a4(0x143))
        [_0x1854a4(0x10e)](_0x1854a4(0x18c))
    : 0x0;
  if (!logicExtra)
    $(steps[x])["find"](_0x1854a4(0x169))["is"](_0x1854a4(0xee)) &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])[_0x1854a4(0x1ee)](_0x1854a4(0x16d))[_0x1854a4(0x167)]
        ? $(steps[x])
            [_0x1854a4(0x1ee)](_0x1854a4(0x16d))
            ["each"](function () {
              const _0x224ff6 = _0x1854a4;
              $(this)["is"](":checked")
                ? $(steps[x])[_0x224ff6(0x1ee)](_0x224ff6(0x175))["length"] <
                    0x1 &&
                  ((checkboxFilled = !![]),
                  resetInputErrorMessage($(this)["attr"]("name")))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0x224ff6(0x1dd)]({
                    input: $(this)[_0x224ff6(0x198)](_0x224ff6(0x99)),
                  }));
            })
        : $(steps[x])["find"](_0x1854a4(0x180))[_0x1854a4(0x167)] >= checkCount
        ? $(steps[x])[_0x1854a4(0x1ee)](_0x1854a4(0x175))[_0x1854a4(0x167)] >
          0x0
          ? $(steps[x])
              ["find"](_0x1854a4(0x175))
              [_0x1854a4(0x1bc)](function () {
                const _0x5b8010 = _0x1854a4;
                checkboxFilled = ![];
                let _0x59c7cb = $(steps[x])["find"](_0x5b8010(0x175))[
                    _0x5b8010(0x167)
                  ],
                  _0x284821 = $(steps[x])[_0x5b8010(0x1ee)](_0x5b8010(0xec))[
                    _0x5b8010(0x167)
                  ];
                console["log"](_0x59c7cb - _0x284821),
                  _0x59c7cb - _0x284821 === 0x0
                    ? ((checkboxFilled = !![]),
                      resetInputErrorMessage(
                        $(steps[x])
                          ["find"](_0x5b8010(0x16d))
                          [_0x5b8010(0x198)](_0x5b8010(0x99))
                      ))
                    : ((checkboxFilled = ![]),
                      $(steps[x])
                        [_0x5b8010(0x1ee)](
                          ":input[type=\x22checkbox\x22][required]:not(:checked)"
                        )
                        [_0x5b8010(0x1bc)](function () {
                          const _0x43c781 = _0x5b8010;
                          unfilledArr[_0x43c781(0x1dd)]({
                            input: $(this)[_0x43c781(0x198)]("name"),
                          });
                        }));
              })
          : ((checkboxFilled = !![]),
            resetInputErrorMessage(
              $(steps[x])
                [_0x1854a4(0x1ee)](":input[type=\x22checkbox\x22]")
                [_0x1854a4(0x198)](_0x1854a4(0x99))
            ))
        : ((checkboxFilled = ![]),
          $(steps[x])
            [_0x1854a4(0x1ee)](_0x1854a4(0x175))
            [_0x1854a4(0x1bc)](function () {
              const _0x4d4223 = _0x1854a4;
              $(this)[_0x4d4223(0x1e1)](_0x4d4223(0x1a0)) &&
                unfilledArr[_0x4d4223(0x1dd)]({
                  input: $(this)[_0x4d4223(0x198)]("name"),
                });
            }),
          unfilledArr[_0x1854a4(0x1dd)]({
            input: $(steps[x])
              [_0x1854a4(0x1ee)](":input[type=\x22checkbox\x22]")
              [_0x1854a4(0x198)](_0x1854a4(0x99)),
          }))),
      $(steps[x])
        [_0x1854a4(0x1ee)](_0x1854a4(0x107))
        ["each"](function (_0x1c4059) {
          const _0x2f8c17 = _0x1854a4;
          var _0x41fc3c = $(this)[_0x2f8c17(0x198)](_0x2f8c17(0x99));
          $(_0x2f8c17(0x1d0) + _0x41fc3c + "\x22]:checked")[_0x2f8c17(0x167)] ==
          0x0
            ? (!empReqRadio[_0x2f8c17(0x1ee)](
                (_0x1abb31) => _0x1abb31["input"] === _0x1c4059
              ) && empReqRadio[_0x2f8c17(0x1dd)]({ input: _0x1c4059 }),
              unfilledArr[_0x2f8c17(0x1dd)]({
                input: $(this)[_0x2f8c17(0x198)](_0x2f8c17(0x99)),
              }))
            : (empReqRadio = empReqRadio[_0x2f8c17(0xd1)](
                (_0x38a7f0) => _0x38a7f0["input"] !== _0x1c4059
              )),
            empReqRadio["length"] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0x1854a4(0x1ee)](_0x1854a4(0x112))
        [_0x1854a4(0x1bc)](function (_0x3cb37a) {
          const _0xf61574 = _0x1854a4;
          let _0x1bd7b8 = $(this)[_0xf61574(0xd4)]()["length"],
            _0xc53414 = $(this)["data"]("min-character")
              ? $(this)[_0xf61574(0x10e)](_0xf61574(0x1a5))
              : 0x0;
          $(this)[_0xf61574(0xd4)]() !== "" && _0x1bd7b8 >= _0xc53414
            ? (empReqInput = empReqInput[_0xf61574(0xd1)](
                (_0x2390f5) => _0x2390f5["input"] !== _0x3cb37a
              ))
            : (!empReqInput[_0xf61574(0x1ee)](
                (_0x4a3338) => _0x4a3338[_0xf61574(0xd2)] === _0x3cb37a
              ) && empReqInput["push"]({ input: _0x3cb37a }),
              unfilledArr[_0xf61574(0x1dd)]({
                input: $(this)[_0xf61574(0x198)](_0xf61574(0x99)),
              })),
            empReqInput[_0xf61574(0x167)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x1854a4(0xba))
        ["each"](function (_0x1d67da) {
          const _0x2a6b28 = _0x1854a4;
          let _0x2e980e = $(this)["val"]()[_0x2a6b28(0x167)],
            _0x14ed56 = $(this)[_0x2a6b28(0x10e)]("min-character")
              ? $(this)[_0x2a6b28(0x10e)]("min-character")
              : 0x0;
          $(this)[_0x2a6b28(0xd4)]() !== "" && _0x2e980e >= _0x14ed56
            ? (empReqPassword = empReqPassword[_0x2a6b28(0xd1)](
                (_0x6f4c04) => _0x6f4c04[_0x2a6b28(0xd2)] !== _0x1d67da
              ))
            : (!empReqPassword[_0x2a6b28(0x1ee)](
                (_0x18f8bd) => _0x18f8bd[_0x2a6b28(0xd2)] === _0x1d67da
              ) && empReqPassword["push"]({ input: _0x1d67da }),
              unfilledArr["push"]({
                input: $(this)[_0x2a6b28(0x198)](_0x2a6b28(0x99)),
              })),
            empReqPassword[_0x2a6b28(0x167)] === 0x0
              ? (passwordFilled = !![])
              : (passwordFilled = ![]);
        }),
      $(steps[x])
        [_0x1854a4(0x1ee)](":input[type=\x22url\x22][required]")
        [_0x1854a4(0x1bc)](function (_0x3f6fba) {
          const _0x47d44b = _0x1854a4;
          let _0x554693 = $(this)[_0x47d44b(0xd4)]()[_0x47d44b(0x167)],
            _0x557ebb = $(this)["data"]("min-character")
              ? $(this)["data"](_0x47d44b(0x1a5))
              : 0x0;
          $(this)[_0x47d44b(0xd4)]() !== "" && _0x554693 >= _0x557ebb
            ? (empReqTime = empReqTime[_0x47d44b(0xd1)](
                (_0x37700d) => _0x37700d["input"] !== _0x3f6fba
              ))
            : (!empReqTime["find"](
                (_0x61aafb) => _0x61aafb[_0x47d44b(0xd2)] === _0x3f6fba
              ) && empReqUrl[_0x47d44b(0x1dd)]({ input: _0x3f6fba }),
              unfilledArr[_0x47d44b(0x1dd)]({
                input: $(this)[_0x47d44b(0x198)](_0x47d44b(0x99)),
              })),
            empReqTime["length"] === 0x0 &&
            validateURL($(this)[_0x47d44b(0xd4)]())
              ? ((timeFilled = !![]), console[_0x47d44b(0x1e7)](timeFilled))
              : (timeFilled = ![]);
        }),
      $(steps[x])
        [_0x1854a4(0x1ee)](_0x1854a4(0xde))
        [_0x1854a4(0x1bc)](function (_0x436bb9) {
          const _0x21a108 = _0x1854a4;
          let _0x40b336 = $(this)["val"]()[_0x21a108(0x167)],
            _0x103573 = $(this)[_0x21a108(0x10e)](_0x21a108(0x1a5))
              ? $(this)["data"]("min-character")
              : 0x0;
          $(this)[_0x21a108(0xd4)]() !== "" && _0x40b336 >= _0x103573
            ? (empReqUrl = empReqUrl[_0x21a108(0xd1)](
                (_0x59f724) => _0x59f724[_0x21a108(0xd2)] !== _0x436bb9
              ))
            : (!empReqUrl[_0x21a108(0x1ee)](
                (_0x407224) => _0x407224[_0x21a108(0xd2)] === _0x436bb9
              ) && empReqUrl["push"]({ input: _0x436bb9 }),
              unfilledArr[_0x21a108(0x1dd)]({
                input: $(this)["attr"]("name"),
              })),
            empReqUrl[_0x21a108(0x167)] === 0x0 &&
            validateURL($(this)[_0x21a108(0xd4)]())
              ? ((urlFilled = !![]), console["log"](urlFilled))
              : (urlFilled = ![]);
        }),
      $(steps[x])
        [_0x1854a4(0x1ee)](_0x1854a4(0x1be))
        [_0x1854a4(0x1bc)](function (_0x56fb10) {
          const _0x488a92 = _0x1854a4;
          $(this)[_0x488a92(0xd4)]() !== ""
            ? (empReqDate = empReqDate[_0x488a92(0xd1)](
                (_0x31e43d) => _0x31e43d[_0x488a92(0xd2)] !== _0x56fb10
              ))
            : (!empReqDate["find"](
                (_0x3d99d7) => _0x3d99d7[_0x488a92(0xd2)] === _0x56fb10
              ) && empReqDate["push"]({ input: _0x56fb10 }),
              unfilledArr[_0x488a92(0x1dd)]({
                input: $(this)[_0x488a92(0x198)](_0x488a92(0x99)),
              })),
            empReqDate[_0x488a92(0x167)] === 0x0
              ? (dateFilled = !![])
              : (dateFilled = ![]);
        }),
      $(steps[x])
        [_0x1854a4(0x1ee)](":input[type=\x22tel\x22][required]")
        [_0x1854a4(0x1bc)](function (_0x1eb71a) {
          const _0x322c7b = _0x1854a4;
          if ($(this)[_0x322c7b(0xd4)]() !== "") {
            let _0x1abf4a = $(this)["val"]()[_0x322c7b(0x167)],
              _0x36b90a = $(this)[_0x322c7b(0x10e)](_0x322c7b(0x1a5))
                ? $(this)["data"](_0x322c7b(0x1a5))
                : 0x0;
            if ($(this)[_0x322c7b(0x10e)](_0x322c7b(0x1f2))) {
              var _0x3301df = phoneAutoFormat(
                $(this)[_0x322c7b(0x10e)](_0x322c7b(0x1f2))
              );
              $(this)[_0x322c7b(0xd4)](_0x3301df($(this)[_0x322c7b(0xd4)]()));
            }
            phoneValidation($(this)[_0x322c7b(0xd4)](), _0x1abf4a, _0x36b90a)
              ? (empReqTel = empReqTel[_0x322c7b(0xd1)](
                  (_0x5e43df) => _0x5e43df[_0x322c7b(0xd2)] !== _0x1eb71a
                ))
              : empReqTel[_0x322c7b(0x1dd)]({ input: _0x1eb71a });
          } else !empReqTel[_0x322c7b(0x1ee)]((_0x22f2b4) => _0x22f2b4[_0x322c7b(0xd2)] === _0x1eb71a) && empReqTel[_0x322c7b(0x1dd)]({ input: _0x1eb71a }), unfilledArr[_0x322c7b(0x1dd)]({ input: $(this)[_0x322c7b(0x198)](_0x322c7b(0x99)) });
          empReqTel[_0x322c7b(0x167)] === 0x0
            ? (telFilled = !![])
            : (telFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x1854a4(0x1a7))
        [_0x1854a4(0x1bc)](function (_0x3299e5) {
          const _0x5c53dc = _0x1854a4;
          $(this)[_0x5c53dc(0xd4)]() !== ""
            ? (empReqFile = empReqFile["filter"](
                (_0x4dfc10) => _0x4dfc10[_0x5c53dc(0xd2)] !== _0x3299e5
              ))
            : (!empReqFile[_0x5c53dc(0x1ee)](
                (_0x474fdd) => _0x474fdd[_0x5c53dc(0xd2)] === _0x3299e5
              ) && empReqFile[_0x5c53dc(0x1dd)]({ input: _0x3299e5 }),
              unfilledArr["push"]({
                input: $(this)[_0x5c53dc(0x198)](_0x5c53dc(0x99)),
              })),
            empReqFile[_0x5c53dc(0x167)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x1854a4(0x1ee)](_0x1854a4(0x111))
        [_0x1854a4(0x1bc)](function (_0xf32a3a) {
          const _0x297f38 = _0x1854a4;
          let _0x7291d = $(this)[_0x297f38(0xd4)]()[_0x297f38(0x167)],
            _0x3cac1c = $(this)[_0x297f38(0x10e)](_0x297f38(0x1a5))
              ? $(this)["data"](_0x297f38(0x1a5))
              : 0x0;
          $(this)[_0x297f38(0xd4)]() !== "" && _0x7291d >= _0x3cac1c
            ? (empReqNum = empReqNum[_0x297f38(0xd1)](
                (_0x52c1af) => _0x52c1af[_0x297f38(0xd2)] !== _0xf32a3a
              ))
            : (!empReqNum[_0x297f38(0x1ee)](
                (_0x24df6d) => _0x24df6d[_0x297f38(0xd2)] === _0xf32a3a
              ) && empReqNum["push"]({ input: _0xf32a3a }),
              unfilledArr[_0x297f38(0x1dd)]({
                input: $(this)[_0x297f38(0x198)]("name"),
              })),
            empReqNum[_0x297f38(0x167)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x1854a4(0x1ee)](_0x1854a4(0x104))
        [_0x1854a4(0x1bc)](function (_0xd7f197) {
          const _0x3e216d = _0x1854a4;
          let _0x165073 = $(this)["val"]();
          _0x165073 === "" && (_0x165073 = null),
            _0x165073 != null
              ? (empReqSelect = empReqSelect[_0x3e216d(0xd1)](
                  (_0x762663) => _0x762663[_0x3e216d(0xd2)] !== _0xd7f197
                ))
              : (!empReqSelect["find"](
                  (_0x55a76b) => _0x55a76b[_0x3e216d(0xd2)] === _0xd7f197
                ) && empReqSelect[_0x3e216d(0x1dd)]({ input: _0xd7f197 }),
                unfilledArr[_0x3e216d(0x1dd)]({
                  input: $(this)[_0x3e216d(0x198)](_0x3e216d(0x99)),
                })),
            empReqSelect[_0x3e216d(0x167)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x1854a4(0x1ee)]("textarea[required]")
        [_0x1854a4(0x1bc)](function (_0x25d504) {
          const _0x2968e5 = _0x1854a4;
          let _0x50e9a5 = $(this)[_0x2968e5(0xd4)]()[_0x2968e5(0x167)],
            _0x419fa6 = $(this)["data"](_0x2968e5(0x1a5))
              ? $(this)[_0x2968e5(0x10e)](_0x2968e5(0x1a5))
              : 0x0;
          $(this)["val"]() !== "" && _0x50e9a5 >= _0x419fa6
            ? (empReqTextarea = empReqTextarea[_0x2968e5(0xd1)](
                (_0x24a1ba) => _0x24a1ba["input"] !== _0x25d504
              ))
            : (!empReqTextarea[_0x2968e5(0x1ee)](
                (_0x5416d8) => _0x5416d8[_0x2968e5(0xd2)] === _0x25d504
              ) && empReqTextarea[_0x2968e5(0x1dd)]({ input: _0x25d504 }),
              unfilledArr[_0x2968e5(0x1dd)]({
                input: $(this)[_0x2968e5(0x198)](_0x2968e5(0x99)),
              })),
            empReqTextarea[_0x2968e5(0x167)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x1854a4(0x1ee)](_0x1854a4(0x1f0))
        [_0x1854a4(0x1bc)](function () {
          const _0x276ae0 = _0x1854a4;
          $(this)["val"]() !== ""
            ? validateEmail(
                $(this)["val"](),
                $(this)["data"](_0x276ae0(0x16b)),
                $(this)[_0x276ae0(0x198)](_0x276ae0(0x99))
              )
            : ((emailFilled = ![]),
              unfilledArr["push"]({
                input: $(this)[_0x276ae0(0x198)](_0x276ae0(0x99)),
              }));
        });
  else {
    if ($(steps[x])[_0x1854a4(0x10e)]("card"))
      (answer = $(steps[x])
        [_0x1854a4(0x1ee)](_0x1854a4(0x152))
        [_0x1854a4(0x10e)](_0x1854a4(0x1e3))),
        (selections = selections[_0x1854a4(0xd1)](
          (_0x5623d8) => _0x5623d8[_0x1854a4(0xcb)] !== x
        )),
        selections[_0x1854a4(0x1dd)]({ step: x, selected: answer });
    else
      $(steps[x])
        [_0x1854a4(0x1ee)](_0x1854a4(0x170))
        ["data"](_0x1854a4(0xfe)) &&
        ((answer = $(steps[x])
          [_0x1854a4(0x1ee)](_0x1854a4(0x170))
          [_0x1854a4(0x10e)]("go-to")),
        (selections = selections["filter"](
          (_0x25fd2a) => _0x25fd2a[_0x1854a4(0xcb)] !== x
        )),
        selections[_0x1854a4(0x1dd)]({ step: x, selected: answer }));
    $(steps[x])
      [_0x1854a4(0x1ee)](_0x1854a4(0x170))
      [_0x1854a4(0x1ee)](_0x1854a4(0x169))
      ["is"](_0x1854a4(0xee)) &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])[_0x1854a4(0x1ee)](":input[type=\x22checkbox\x22]")[
          _0x1854a4(0x167)
        ]
        ? (console[_0x1854a4(0x1e7)](_0x1854a4(0xa5)),
          $(steps[x])
            [_0x1854a4(0x1ee)](_0x1854a4(0x16d))
            [_0x1854a4(0x1bc)](function () {
              const _0x352b3b = _0x1854a4;
              $(this)["is"](_0x352b3b(0x1a0))
                ? $(steps[x])[_0x352b3b(0x1ee)](_0x352b3b(0x1e8))[
                    _0x352b3b(0x167)
                  ] < 0x1 &&
                  ((skipTo = undefined),
                  $(this)
                    [_0x352b3b(0xa4)](_0x352b3b(0x1c1))
                    [_0x352b3b(0x10e)]("skip-to") &&
                    (skipTo = $(this)
                      [_0x352b3b(0xa4)](_0x352b3b(0x1c1))
                      [_0x352b3b(0x10e)](_0x352b3b(0x122))),
                  $(this)
                    [_0x352b3b(0xa4)](_0x352b3b(0x152))
                    [_0x352b3b(0x198)](_0x352b3b(0xb4)) &&
                    ((answer = $(this)
                      [_0x352b3b(0xa4)](_0x352b3b(0x152))
                      [_0x352b3b(0x198)](_0x352b3b(0xb4))),
                    (selections = selections[_0x352b3b(0xd1)](
                      (_0x63b1b6) => _0x63b1b6[_0x352b3b(0xcb)] !== x
                    )),
                    selections["push"]({ step: x, selected: answer }),
                    skipTo &&
                      (selections[_0x352b3b(0x1dd)]({
                        step: skipTo - 0x2,
                        selected: answer,
                      }),
                      (objIndex = selections[_0x352b3b(0x159)](
                        (_0x30043c) => _0x30043c[_0x352b3b(0xcb)] === x
                      )),
                      (selections[objIndex][_0x352b3b(0x13e)] =
                        parseInt(skipTo) - 0x1),
                      (selections[objIndex][_0x352b3b(0x1a1)] = x))),
                  (checkboxFilled = !![]),
                  $(steps[x])["find"](
                    ":input[type=\x22checkbox\x22][required]:checked"
                  )[_0x352b3b(0x167)] >=
                    $(steps[x])[_0x352b3b(0x1ee)](
                      ":input[type=\x22checkbox\x22][required]"
                    )["length"] &&
                    resetInputErrorMessage(
                      $(steps[x])
                        [_0x352b3b(0x1ee)](_0x352b3b(0x16d))
                        ["attr"](_0x352b3b(0x99))
                    ))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0x352b3b(0x1dd)]({
                    input: $(this)[_0x352b3b(0x198)]("name"),
                  }));
            }))
        : $(steps[x])
            [_0x1854a4(0x1ee)](".active-answer-card")
            ["find"](_0x1854a4(0x180))["length"] >= checkCount
        ? ($(steps[x])
            [_0x1854a4(0x1ee)](_0x1854a4(0x170))
            ["find"](_0x1854a4(0x16d))
            [_0x1854a4(0xa4)](_0x1854a4(0x152))
            ["attr"](_0x1854a4(0xb4)) &&
            ((skipTo = undefined),
            $(steps[x])
              [_0x1854a4(0x1ee)](_0x1854a4(0x170))
              [_0x1854a4(0x1ee)](":input[type=\x22checkbox\x22]")
              [_0x1854a4(0xa4)](_0x1854a4(0x1c1))
              [_0x1854a4(0x198)]("data-skip-to") &&
              (skipTo = $(steps[x])
                [_0x1854a4(0x1ee)](".active-answer-card")
                [_0x1854a4(0x1ee)](":input[type=\x22checkbox\x22]:checked")
                [_0x1854a4(0xa4)](_0x1854a4(0x1c1))
                ["attr"](_0x1854a4(0x154))),
            (answer = $(steps[x])
              [_0x1854a4(0x1ee)](".active-answer-card")
              [_0x1854a4(0x1ee)](_0x1854a4(0x16d))
              [_0x1854a4(0xa4)](_0x1854a4(0x152))
              [_0x1854a4(0x198)]("data-go-to")),
            (selections = selections[_0x1854a4(0xd1)](
              (_0x38b95f) => _0x38b95f["step"] !== x
            )),
            selections[_0x1854a4(0x1dd)]({ step: x, selected: answer }),
            skipTo &&
              ((selections = selections[_0x1854a4(0xd1)](
                (_0x3b6b1a) => _0x3b6b1a[_0x1854a4(0xcb)] !== skipTo - 0x2
              )),
              selections[_0x1854a4(0x1dd)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections["findIndex"](
                (_0x3d3ee3) => _0x3d3ee3[_0x1854a4(0xcb)] === x
              )),
              console[_0x1854a4(0x1e7)](objIndex),
              (selections[objIndex][_0x1854a4(0x13e)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x1854a4(0x1a1)] = x),
              console[_0x1854a4(0x1e7)](_0x1854a4(0x14d)))),
          (checkboxFilled = !![]),
          $(steps[x])["find"](_0x1854a4(0xec))[_0x1854a4(0x167)] >=
            $(steps[x])["find"](_0x1854a4(0x175))[_0x1854a4(0x167)] &&
            resetInputErrorMessage(
              $(steps[x])
                [_0x1854a4(0x1ee)](":input[type=\x22checkbox\x22]")
                ["attr"](_0x1854a4(0x99))
            ))
        : ((checkboxFilled = ![]),
          $(steps[x])
            [_0x1854a4(0x1ee)](_0x1854a4(0x175))
            ["each"](function () {
              const _0x4e2e1a = _0x1854a4;
              $(this)["not"](_0x4e2e1a(0x1a0)) &&
                unfilledArr[_0x4e2e1a(0x1dd)]({
                  input: $(this)[_0x4e2e1a(0x198)](_0x4e2e1a(0x99)),
                });
            }))),
      $(steps[x])
        [_0x1854a4(0x1ee)](_0x1854a4(0x170))
        [_0x1854a4(0x1ee)](_0x1854a4(0x107))
        [_0x1854a4(0x1bc)](function (_0x311ad9) {
          const _0x5547d1 = _0x1854a4;
          var _0x4a6178 = $(this)["attr"](_0x5547d1(0x99));
          $(_0x5547d1(0x1d0) + _0x4a6178 + "\x22]:checked")[_0x5547d1(0x167)] ==
          0x0
            ? (!empReqRadio[_0x5547d1(0x1ee)](
                (_0x323ac1) => _0x323ac1["input"] === _0x311ad9
              ) && empReqRadio[_0x5547d1(0x1dd)]({ input: _0x311ad9 }),
              unfilledArr[_0x5547d1(0x1dd)]({
                input: $(this)[_0x5547d1(0x198)](_0x5547d1(0x99)),
              }))
            : (empReqRadio = empReqRadio[_0x5547d1(0xd1)](
                (_0xdb4e08) => _0xdb4e08[_0x5547d1(0xd2)] !== _0x311ad9
              )),
            empReqRadio[_0x5547d1(0x167)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0x1854a4(0x1ee)](_0x1854a4(0x170))
        [_0x1854a4(0x1ee)](_0x1854a4(0x112))
        [_0x1854a4(0x1bc)](function (_0x5d5aa7) {
          const _0x15b1bc = _0x1854a4;
          let _0x5c36b3 = $(this)[_0x15b1bc(0xd4)]()[_0x15b1bc(0x167)],
            _0x1b60d7 = $(this)["data"](_0x15b1bc(0x1a5))
              ? $(this)["data"](_0x15b1bc(0x1a5))
              : 0x0;
          $(this)["val"]() !== "" && _0x5c36b3 >= _0x1b60d7
            ? (empReqInput = empReqInput[_0x15b1bc(0xd1)](
                (_0xfaff82) => _0xfaff82[_0x15b1bc(0xd2)] !== _0x5d5aa7
              ))
            : (!empReqInput[_0x15b1bc(0x1ee)](
                (_0x5a37e7) => _0x5a37e7[_0x15b1bc(0xd2)] === _0x5d5aa7
              ) && empReqInput[_0x15b1bc(0x1dd)]({ input: _0x5d5aa7 }),
              unfilledArr[_0x15b1bc(0x1dd)]({
                input: $(this)[_0x15b1bc(0x198)](_0x15b1bc(0x99)),
              })),
            empReqInput[_0x15b1bc(0x167)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x1854a4(0x1ee)](_0x1854a4(0x170))
        [_0x1854a4(0x1ee)](":input[type=\x22text\x22]")
        [_0x1854a4(0x1bc)](function (_0x1002c7) {
          const _0x47e1bd = _0x1854a4;
          (skipTo = undefined),
            $(this)
              [_0x47e1bd(0xa4)]("[data-skip-to]")
              [_0x47e1bd(0x10e)](_0x47e1bd(0x122)) !== "" &&
              (skipTo = $(this)
                [_0x47e1bd(0xa4)](_0x47e1bd(0x1c1))
                [_0x47e1bd(0x10e)]("skip-to")),
            $(this)
              [_0x47e1bd(0xa4)](_0x47e1bd(0x152))
              [_0x47e1bd(0x198)](_0x47e1bd(0xb4)) &&
              ((answer = $(this)
                [_0x47e1bd(0xa4)](_0x47e1bd(0x152))
                [_0x47e1bd(0x198)](_0x47e1bd(0xb4))),
              (selections = selections[_0x47e1bd(0xd1)](
                (_0x26642c) => _0x26642c["step"] !== x
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x47e1bd(0x1dd)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x47e1bd(0x159)](
                  (_0x57f39c) => _0x57f39c[_0x47e1bd(0xcb)] === x
                )),
                (selections[objIndex][_0x47e1bd(0x13e)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x47e1bd(0x1a1)] = x)));
        }),
      $(steps[x])
        ["find"](_0x1854a4(0x170))
        ["find"](_0x1854a4(0xba))
        [_0x1854a4(0x1bc)](function (_0x5724fc) {
          const _0x3dca5e = _0x1854a4;
          let _0x4daf2a = $(this)[_0x3dca5e(0xd4)]()[_0x3dca5e(0x167)],
            _0x227907 = $(this)["data"](_0x3dca5e(0x1a5))
              ? $(this)[_0x3dca5e(0x10e)]("min-character")
              : 0x0;
          $(this)[_0x3dca5e(0xd4)]() !== "" && _0x4daf2a >= _0x227907
            ? (empReqPassword = empReqPassword["filter"](
                (_0x3e334f) => _0x3e334f["input"] !== _0x5724fc
              ))
            : (!empReqPassword[_0x3dca5e(0x1ee)](
                (_0x7f330c) => _0x7f330c["input"] === _0x5724fc
              ) && empReqPassword[_0x3dca5e(0x1dd)]({ input: _0x5724fc }),
              unfilledArr[_0x3dca5e(0x1dd)]({
                input: $(this)[_0x3dca5e(0x198)](_0x3dca5e(0x99)),
              })),
            empReqPassword[_0x3dca5e(0x167)] === 0x0
              ? (passwordFilled = !![])
              : (passwordFilled = ![]);
        }),
      $(steps[x])
        [_0x1854a4(0x1ee)](_0x1854a4(0x170))
        [_0x1854a4(0x1ee)](_0x1854a4(0x1c6))
        [_0x1854a4(0x1bc)](function (_0x159157) {
          const _0x4d371d = _0x1854a4;
          (skipTo = undefined),
            $(this)["parents"]("[data-skip-to]")["data"](_0x4d371d(0x122)) !==
              "" &&
              (skipTo = $(this)
                [_0x4d371d(0xa4)](_0x4d371d(0x1c1))
                ["data"](_0x4d371d(0x122))),
            $(this)[_0x4d371d(0xa4)]("[data-go-to]")["attr"](_0x4d371d(0xb4)) &&
              ((answer = $(this)
                [_0x4d371d(0xa4)](_0x4d371d(0x152))
                ["attr"]("data-go-to")),
              (selections = selections[_0x4d371d(0xd1)](
                (_0x3757d5) => _0x3757d5[_0x4d371d(0xcb)] !== x
              )),
              selections[_0x4d371d(0x1dd)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections["findIndex"](
                  (_0x5b68d0) => _0x5b68d0["step"] === x
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        ["find"](_0x1854a4(0x170))
        [_0x1854a4(0x1ee)](":input[type=\x22url\x22][required]")
        [_0x1854a4(0x1bc)](function (_0x5ac01c) {
          const _0x3e9cb8 = _0x1854a4;
          let _0x12b141 = $(this)[_0x3e9cb8(0xd4)]()[_0x3e9cb8(0x167)],
            _0x4bce93 = $(this)[_0x3e9cb8(0x10e)](_0x3e9cb8(0x1a5))
              ? $(this)[_0x3e9cb8(0x10e)](_0x3e9cb8(0x1a5))
              : 0x0;
          $(this)[_0x3e9cb8(0xd4)]() !== "" && _0x12b141 >= _0x4bce93
            ? (empReqUrl = empReqUrl[_0x3e9cb8(0xd1)](
                (_0x387037) => _0x387037[_0x3e9cb8(0xd2)] !== _0x5ac01c
              ))
            : (!empReqUrl[_0x3e9cb8(0x1ee)](
                (_0x313555) => _0x313555["input"] === _0x5ac01c
              ) && empReqUrl[_0x3e9cb8(0x1dd)]({ input: _0x5ac01c }),
              unfilledArr[_0x3e9cb8(0x1dd)]({
                input: $(this)[_0x3e9cb8(0x198)](_0x3e9cb8(0x99)),
              })),
            empReqUrl[_0x3e9cb8(0x167)] === 0x0 && validateURL($(this)["val"]())
              ? (urlFilled = !![])
              : (urlFilled = ![]);
        }),
      $(steps[x])
        [_0x1854a4(0x1ee)](_0x1854a4(0x170))
        [_0x1854a4(0x1ee)](":input[type=\x22url\x22]")
        [_0x1854a4(0x1bc)](function (_0x236e55) {
          const _0x1aaf4a = _0x1854a4;
          (skipTo = undefined),
            $(this)
              [_0x1aaf4a(0xa4)](_0x1aaf4a(0x1c1))
              [_0x1aaf4a(0x10e)](_0x1aaf4a(0x122)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0x1aaf4a(0x1c1))
                [_0x1aaf4a(0x10e)](_0x1aaf4a(0x122))),
            $(this)
              ["parents"](_0x1aaf4a(0x152))
              [_0x1aaf4a(0x198)](_0x1aaf4a(0xb4)) &&
              ((answer = $(this)
                ["parents"](_0x1aaf4a(0x152))
                ["attr"](_0x1aaf4a(0xb4))),
              (selections = selections[_0x1aaf4a(0xd1)](
                (_0x4d6331) => _0x4d6331[_0x1aaf4a(0xcb)] !== x
              )),
              selections[_0x1aaf4a(0x1dd)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x1aaf4a(0x1dd)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x3f4882) => _0x3f4882["step"] === x
                )),
                (selections[objIndex][_0x1aaf4a(0x13e)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x1854a4(0x1ee)](_0x1854a4(0x170))
        [_0x1854a4(0x1ee)](_0x1854a4(0x1be))
        [_0x1854a4(0x1bc)](function (_0x49a339) {
          const _0x1d58ca = _0x1854a4;
          $(this)["val"]() !== ""
            ? (empReqDate = empReqDate[_0x1d58ca(0xd1)](
                (_0x861b27) => _0x861b27[_0x1d58ca(0xd2)] !== _0x49a339
              ))
            : (!empReqDate[_0x1d58ca(0x1ee)](
                (_0x1a5c7f) => _0x1a5c7f[_0x1d58ca(0xd2)] === _0x49a339
              ) && empReqDate[_0x1d58ca(0x1dd)]({ input: _0x49a339 }),
              unfilledArr["push"]({ input: $(this)["attr"]("name") })),
            empReqDate["length"] === 0x0
              ? (dateFilled = !![])
              : (dateFilled = ![]);
        }),
      $(steps[x])
        [_0x1854a4(0x1ee)](_0x1854a4(0x170))
        [_0x1854a4(0x1ee)](":input[type=\x22date\x22]")
        [_0x1854a4(0x1bc)](function (_0x5d24c9) {
          const _0x57c7da = _0x1854a4;
          (skipTo = undefined),
            $(this)
              ["parents"]("[data-skip-to]")
              [_0x57c7da(0x10e)]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0x57c7da(0xa4)](_0x57c7da(0x1c1))
                ["data"](_0x57c7da(0x122))),
            $(this)
              [_0x57c7da(0xa4)](_0x57c7da(0x152))
              [_0x57c7da(0x198)](_0x57c7da(0xb4)) &&
              ((answer = $(this)
                [_0x57c7da(0xa4)](_0x57c7da(0x152))
                [_0x57c7da(0x198)](_0x57c7da(0xb4))),
              (selections = selections["filter"](
                (_0x5a1b86) => _0x5a1b86["step"] !== x
              )),
              selections[_0x57c7da(0x1dd)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x57c7da(0x1dd)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x57c7da(0x159)](
                  (_0x748c8a) => _0x748c8a["step"] === x
                )),
                (selections[objIndex][_0x57c7da(0x13e)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x57c7da(0x1a1)] = x)));
        }),
      $(steps[x])
        ["find"](".active-answer-card")
        [_0x1854a4(0x1ee)](_0x1854a4(0xde))
        ["each"](function (_0x550635) {
          const _0x54a2a9 = _0x1854a4;
          $(this)[_0x54a2a9(0xd4)]() !== ""
            ? (empReqTime = empReqTime[_0x54a2a9(0xd1)](
                (_0xa0554) => _0xa0554["input"] !== _0x550635
              ))
            : (!empReqTime[_0x54a2a9(0x1ee)](
                (_0x3cf213) => _0x3cf213[_0x54a2a9(0xd2)] === _0x550635
              ) && empReqTime["push"]({ input: _0x550635 }),
              unfilledArr[_0x54a2a9(0x1dd)]({
                input: $(this)["attr"](_0x54a2a9(0x99)),
              })),
            empReqTime[_0x54a2a9(0x167)] === 0x0
              ? (timeFilled = !![])
              : (timeFilled = ![]);
        }),
      $(steps[x])
        ["find"](".active-answer-card")
        [_0x1854a4(0x1ee)](_0x1854a4(0xcf))
        [_0x1854a4(0x1bc)](function (_0x45a7f2) {
          const _0x460d76 = _0x1854a4;
          (skipTo = undefined),
            $(this)
              [_0x460d76(0xa4)](_0x460d76(0x1c1))
              [_0x460d76(0x10e)](_0x460d76(0x122)) !== "" &&
              (skipTo = $(this)
                ["parents"]("[data-skip-to]")
                [_0x460d76(0x10e)](_0x460d76(0x122))),
            $(this)
              [_0x460d76(0xa4)](_0x460d76(0x152))
              [_0x460d76(0x198)](_0x460d76(0xb4)) &&
              ((answer = $(this)
                [_0x460d76(0xa4)](_0x460d76(0x152))
                [_0x460d76(0x198)](_0x460d76(0xb4))),
              (selections = selections[_0x460d76(0xd1)](
                (_0x4a39dd) => _0x4a39dd["step"] !== x
              )),
              selections[_0x460d76(0x1dd)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0x460d76(0x159)](
                  (_0x5a41ac) => _0x5a41ac[_0x460d76(0xcb)] === x
                )),
                (selections[objIndex][_0x460d76(0x13e)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x460d76(0x1a1)] = x)));
        }),
      $(steps[x])
        [_0x1854a4(0x1ee)](_0x1854a4(0x170))
        [_0x1854a4(0x1ee)](":input[type=\x22number\x22][required]")
        ["each"](function (_0x79a0cd) {
          const _0x2900e3 = _0x1854a4;
          let _0x3d94b6 = $(this)[_0x2900e3(0xd4)]()["length"],
            _0x766980 = $(this)[_0x2900e3(0x10e)](_0x2900e3(0x1a5))
              ? $(this)[_0x2900e3(0x10e)](_0x2900e3(0x1a5))
              : 0x0;
          $(this)[_0x2900e3(0xd4)]() !== "" && _0x3d94b6 >= _0x766980
            ? (empReqNum = empReqNum[_0x2900e3(0xd1)](
                (_0x11ddf8) => _0x11ddf8[_0x2900e3(0xd2)] !== _0x79a0cd
              ))
            : (!empReqNum["find"](
                (_0x2bdc21) => _0x2bdc21[_0x2900e3(0xd2)] === _0x79a0cd
              ) && empReqNum[_0x2900e3(0x1dd)]({ input: _0x79a0cd }),
              unfilledArr["push"]({
                input: $(this)[_0x2900e3(0x198)](_0x2900e3(0x99)),
              })),
            empReqNum[_0x2900e3(0x167)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x1854a4(0x1ee)](_0x1854a4(0x170))
        [_0x1854a4(0x1ee)](":input[type=\x22number\x22]")
        [_0x1854a4(0x1bc)](function (_0x531888) {
          const _0x14f28c = _0x1854a4;
          (skipTo = undefined),
            $(this)
              [_0x14f28c(0xa4)](_0x14f28c(0x1c1))
              [_0x14f28c(0x10e)]("skip-to") !== "" &&
              (skipTo = $(this)
                ["parents"](_0x14f28c(0x1c1))
                [_0x14f28c(0x10e)](_0x14f28c(0x122))),
            $(this)
              [_0x14f28c(0xa4)](_0x14f28c(0x152))
              [_0x14f28c(0x198)](_0x14f28c(0xb4)) &&
              ((answer = $(this)
                [_0x14f28c(0xa4)](_0x14f28c(0x152))
                ["attr"](_0x14f28c(0xb4))),
              (selections = selections["filter"](
                (_0x1fa254) => _0x1fa254[_0x14f28c(0xcb)] !== x
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x14f28c(0x1dd)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x14f28c(0x159)](
                  (_0x511f6d) => _0x511f6d["step"] === x
                )),
                (selections[objIndex][_0x14f28c(0x13e)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x14f28c(0x1a1)] = x)));
        }),
      $(steps[x])
        [_0x1854a4(0x1ee)](_0x1854a4(0x170))
        [_0x1854a4(0x1ee)](":input[type=\x22tel\x22][required]")
        [_0x1854a4(0x1bc)](function (_0x2fd7d3) {
          const _0x10fc31 = _0x1854a4;
          if ($(this)[_0x10fc31(0xd4)]() !== "") {
            let _0x3d2ba7 = $(this)[_0x10fc31(0xd4)]()[_0x10fc31(0x167)],
              _0xb3f0bc = $(this)["data"](_0x10fc31(0x1a5))
                ? $(this)[_0x10fc31(0x10e)](_0x10fc31(0x1a5))
                : 0x0;
            if ($(this)[_0x10fc31(0x10e)](_0x10fc31(0x1f2))) {
              var _0x349853 = phoneAutoFormat(
                $(this)["data"](_0x10fc31(0x1f2))
              );
              $(this)[_0x10fc31(0xd4)](_0x349853($(this)[_0x10fc31(0xd4)]()));
            }
            phoneValidation($(this)[_0x10fc31(0xd4)](), _0x3d2ba7, _0xb3f0bc)
              ? (empReqTel = empReqTel[_0x10fc31(0xd1)](
                  (_0xd7c4f6) => _0xd7c4f6[_0x10fc31(0xd2)] !== _0x2fd7d3
                ))
              : empReqTel[_0x10fc31(0x1dd)]({ input: _0x2fd7d3 });
          } else !empReqTel[_0x10fc31(0x1ee)]((_0x2ab8be) => _0x2ab8be[_0x10fc31(0xd2)] === _0x2fd7d3) && empReqTel[_0x10fc31(0x1dd)]({ input: _0x2fd7d3 }), unfilledArr[_0x10fc31(0x1dd)]({ input: $(this)[_0x10fc31(0x198)](_0x10fc31(0x99)) });
          empReqTel[_0x10fc31(0x167)] === 0x0
            ? (telFilled = !![])
            : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x1854a4(0x1ee)](_0x1854a4(0x170))
        ["find"](_0x1854a4(0xfc))
        [_0x1854a4(0x1bc)](function (_0x1279b7) {
          const _0x24b321 = _0x1854a4;
          (skipTo = undefined),
            $(this)
              ["parents"]("[data-skip-to]")
              [_0x24b321(0x10e)]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0x24b321(0xa4)](_0x24b321(0x1c1))
                [_0x24b321(0x10e)](_0x24b321(0x122))),
            $(this)
              [_0x24b321(0xa4)](_0x24b321(0x152))
              [_0x24b321(0x198)](_0x24b321(0xb4)) &&
              ((answer = $(this)
                ["parents"](_0x24b321(0x152))
                ["attr"]("data-go-to")),
              (selections = selections[_0x24b321(0xd1)](
                (_0xd30558) => _0xd30558["step"] !== x
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections["findIndex"](
                  (_0x34ade2) => _0x34ade2["step"] === x
                )),
                (selections[objIndex][_0x24b321(0x13e)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x24b321(0x1a1)] = x)));
        }),
      $(steps[x])
        [_0x1854a4(0x1ee)](_0x1854a4(0x170))
        [_0x1854a4(0x1ee)](":input[type=\x22file\x22][required]")
        [_0x1854a4(0x1bc)](function (_0x17b66e) {
          const _0x13837b = _0x1854a4;
          $(this)[_0x13837b(0xd4)]() !== ""
            ? (empReqFile = empReqFile[_0x13837b(0xd1)](
                (_0xf4c247) => _0xf4c247[_0x13837b(0xd2)] !== _0x17b66e
              ))
            : (!empReqFile[_0x13837b(0x1ee)](
                (_0x37afbb) => _0x37afbb[_0x13837b(0xd2)] === _0x17b66e
              ) && empReqFile[_0x13837b(0x1dd)]({ input: _0x17b66e }),
              unfilledArr[_0x13837b(0x1dd)]({
                input: $(this)[_0x13837b(0x198)](_0x13837b(0x99)),
              })),
            empReqFile[_0x13837b(0x167)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x1854a4(0x1ee)](".active-answer-card")
        ["find"](_0x1854a4(0x1f3))
        [_0x1854a4(0x1bc)](function (_0x3b5c9c) {
          const _0x4df38b = _0x1854a4;
          (skipTo = undefined),
            $(this)[_0x4df38b(0xa4)]("[data-skip-to]")["data"]("skip-to") !==
              "" &&
              (skipTo = $(this)
                [_0x4df38b(0xa4)](_0x4df38b(0x1c1))
                [_0x4df38b(0x10e)](_0x4df38b(0x122))),
            $(this)
              [_0x4df38b(0xa4)](_0x4df38b(0x152))
              [_0x4df38b(0x198)](_0x4df38b(0xb4)) &&
              ((answer = $(this)
                ["parents"](_0x4df38b(0x152))
                [_0x4df38b(0x198)]("data-go-to")),
              (selections = selections[_0x4df38b(0xd1)](
                (_0x459d67) => _0x459d67[_0x4df38b(0xcb)] !== x
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x4df38b(0x1dd)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x4df38b(0x159)](
                  (_0x5248de) => _0x5248de[_0x4df38b(0xcb)] === x
                )),
                (selections[objIndex][_0x4df38b(0x13e)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x1854a4(0x1ee)](_0x1854a4(0x170))
        [_0x1854a4(0x1ee)](_0x1854a4(0x104))
        [_0x1854a4(0x1bc)](function (_0x3c1c2f) {
          const _0xcffb02 = _0x1854a4;
          console["log"]($(this)[_0xcffb02(0xd4)]()),
            $(this)[_0xcffb02(0xd4)]() !== null &&
            $(this)[_0xcffb02(0xd4)]() !== ""
              ? (empReqSelect = empReqSelect[_0xcffb02(0xd1)](
                  (_0x1974c5) => _0x1974c5["input"] !== _0x3c1c2f
                ))
              : (!empReqSelect[_0xcffb02(0x1ee)](
                  (_0x1819fc) => _0x1819fc["input"] === _0x3c1c2f
                ) && empReqSelect["push"]({ input: _0x3c1c2f }),
                unfilledArr[_0xcffb02(0x1dd)]({
                  input: $(this)[_0xcffb02(0x198)]("name"),
                })),
            empReqSelect[_0xcffb02(0x167)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x1854a4(0x1ee)](_0x1854a4(0x170))
        [_0x1854a4(0x1ee)](_0x1854a4(0xfb))
        [_0x1854a4(0x1bc)](function (_0x46643f) {
          const _0x29e7c1 = _0x1854a4;
          (skipTo = undefined),
            $(this)
              [_0x29e7c1(0xa4)](_0x29e7c1(0x1c1))
              [_0x29e7c1(0x10e)](_0x29e7c1(0x122)) !== "" &&
              (skipTo = $(this)
                [_0x29e7c1(0xa4)]("[data-skip-to]")
                [_0x29e7c1(0x10e)](_0x29e7c1(0x122))),
            $(this)[_0x29e7c1(0xa4)]("[data-go-to]")["attr"]("data-go-to") &&
              ((answer = $(this)
                [_0x29e7c1(0xa4)](_0x29e7c1(0x152))
                [_0x29e7c1(0x198)](_0x29e7c1(0xb4))),
              (selections = selections["filter"](
                (_0x1ec4d7) => _0x1ec4d7[_0x29e7c1(0xcb)] !== x
              )),
              selections[_0x29e7c1(0x1dd)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x29e7c1(0x1dd)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x29e7c1(0x159)](
                  (_0xbe351e) => _0xbe351e[_0x29e7c1(0xcb)] === x
                )),
                (selections[objIndex][_0x29e7c1(0x13e)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x29e7c1(0x1a1)] = x)));
        }),
      $(steps[x])
        [_0x1854a4(0x1ee)](_0x1854a4(0x170))
        ["find"]("textarea[required]")
        [_0x1854a4(0x1bc)](function (_0xad56aa) {
          const _0x2c89c0 = _0x1854a4;
          let _0x1ca81b = $(this)[_0x2c89c0(0xd4)]()[_0x2c89c0(0x167)],
            _0x3d6cf1 = $(this)["data"](_0x2c89c0(0x1a5))
              ? $(this)["data"]("min-character")
              : 0x0;
          $(this)[_0x2c89c0(0xd4)]() !== "" && _0x1ca81b >= _0x3d6cf1
            ? (empReqTextarea = empReqTextarea[_0x2c89c0(0xd1)](
                (_0x78f13f) => _0x78f13f[_0x2c89c0(0xd2)] !== _0xad56aa
              ))
            : (!empReqTextarea["find"](
                (_0x5f5527) => _0x5f5527["input"] === _0xad56aa
              ) && empReqTextarea[_0x2c89c0(0x1dd)]({ input: _0xad56aa }),
              unfilledArr["push"]({
                input: $(this)[_0x2c89c0(0x198)](_0x2c89c0(0x99)),
              })),
            empReqTextarea[_0x2c89c0(0x167)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x1854a4(0x1ee)](_0x1854a4(0x170))
        [_0x1854a4(0x1ee)](_0x1854a4(0xcc))
        [_0x1854a4(0x1bc)](function (_0x23c8cd) {
          const _0x4712ee = _0x1854a4;
          (skipTo = undefined),
            $(this)
              [_0x4712ee(0xa4)](_0x4712ee(0x1c1))
              [_0x4712ee(0x10e)](_0x4712ee(0x122)) !== "" &&
              (skipTo = $(this)
                ["parents"]("[data-skip-to]")
                [_0x4712ee(0x10e)]("skip-to")),
            $(this)["parents"](_0x4712ee(0x152))["attr"](_0x4712ee(0xb4)) &&
              ((answer = $(this)
                [_0x4712ee(0xa4)](_0x4712ee(0x152))
                [_0x4712ee(0x198)](_0x4712ee(0xb4))),
              (selections = selections[_0x4712ee(0xd1)](
                (_0x4a0339) => _0x4a0339[_0x4712ee(0xcb)] !== x
              )),
              selections[_0x4712ee(0x1dd)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x4712ee(0x1dd)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x4712ee(0x159)](
                  (_0x440d8b) => _0x440d8b[_0x4712ee(0xcb)] === x
                )),
                (selections[objIndex][_0x4712ee(0x13e)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x4712ee(0x1a1)] = x)));
        }),
      $(steps[x])
        ["find"](_0x1854a4(0x170))
        [_0x1854a4(0x1ee)](_0x1854a4(0x1f0))
        [_0x1854a4(0x1bc)](function (_0x53a141) {
          const _0x59dbed = _0x1854a4;
          $(this)[_0x59dbed(0xd4)]() !== ""
            ? validateEmail(
                $(this)["val"](),
                $(this)[_0x59dbed(0x10e)]("block-domain"),
                $(this)[_0x59dbed(0x198)](_0x59dbed(0x99))
              )
            : ((emailFilled = ![]),
              unfilledArr[_0x59dbed(0x1dd)]({
                input: $(this)[_0x59dbed(0x198)](_0x59dbed(0x99)),
              }));
        }),
      $(steps[x])
        ["find"](_0x1854a4(0x170))
        [_0x1854a4(0x1ee)](":input[type=\x22email\x22]")
        [_0x1854a4(0x1bc)](function (_0xf65201) {
          const _0x47f54f = _0x1854a4;
          (skipTo = undefined),
            $(this)
              [_0x47f54f(0xa4)]("[data-skip-to]")
              [_0x47f54f(0x10e)](_0x47f54f(0x122)) !== "" &&
              (skipTo = $(this)
                [_0x47f54f(0xa4)](_0x47f54f(0x1c1))
                [_0x47f54f(0x10e)]("skip-to")),
            $(this)["parents"](_0x47f54f(0x152))["attr"]("data-go-to") &&
              ((answer = $(this)
                [_0x47f54f(0xa4)](_0x47f54f(0x152))
                ["attr"](_0x47f54f(0xb4))),
              (selections = selections[_0x47f54f(0xd1)](
                (_0x2c6aa7) => _0x2c6aa7["step"] !== x
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x47f54f(0x1dd)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x47f54f(0x159)](
                  (_0x404f97) => _0x404f97[_0x47f54f(0xcb)] === x
                )),
                (selections[objIndex][_0x47f54f(0x13e)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x47f54f(0x1a1)] = x)));
        });
  }
  $(steps[x])["find"](_0x1854a4(0xf6))["is"](_0x1854a4(0x1a0)) &&
    ((selArr = []),
    $(steps)
      [_0x1854a4(0x1ee)](_0x1854a4(0x115))
      [_0x1854a4(0x1bc)](function (_0xad5ace, _0xe1d1bd) {
        const _0x167036 = _0x1854a4;
        selArr["push"]({ selected: $(this)["data"](_0x167036(0x14f)) });
      }),
    (selString = []),
    selArr[_0x1854a4(0x12c)]((_0x14154b) =>
      selString[_0x1854a4(0x1dd)](_0x14154b[_0x1854a4(0x14f)])
    ),
    $(steps[x])
      [_0x1854a4(0x1ee)](_0x1854a4(0x170))
      [_0x1854a4(0x1ee)](_0x1854a4(0xc5))
      ["each"](function () {
        const _0x4d310f = _0x1854a4;
        skipTo = undefined;
        if (
          $(this)
            [_0x4d310f(0xa4)](_0x4d310f(0x1c1))
            [_0x4d310f(0x10e)](_0x4d310f(0x122))
        )
          skipTo = $(this)
            ["parents"](_0x4d310f(0x1c1))
            ["data"](_0x4d310f(0x122));
        else
          $(this)[_0x4d310f(0x10e)](_0x4d310f(0x122)) &&
            (skipTo = $(this)[_0x4d310f(0x10e)](_0x4d310f(0x122)));
        selections = selections[_0x4d310f(0xd1)](
          (_0xf24922) => _0xf24922[_0x4d310f(0xcb)] !== x
        );
        if ($(this)[_0x4d310f(0x10e)](_0x4d310f(0x1e3)))
          (answer = $(this)[_0x4d310f(0x198)](_0x4d310f(0xb4))),
            console["log"](answer, selections),
            selections[_0x4d310f(0x1dd)]({ step: x, selected: answer }),
            skipTo &&
              (selections["push"]({ step: skipTo - 0x2, selected: answer }),
              (objIndex = selections[_0x4d310f(0x159)](
                (_0x4d4590) => _0x4d4590[_0x4d310f(0xcb)] === x
              )),
              (selections[objIndex][_0x4d310f(0x13e)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x4d310f(0x1a1)] = x));
        else
          $(this)
            [_0x4d310f(0xa4)](_0x4d310f(0x152))
            [_0x4d310f(0x10e)](_0x4d310f(0x1e3)) &&
            ((answer = $(this)
              [_0x4d310f(0xa4)](_0x4d310f(0x152))
              [_0x4d310f(0x10e)](_0x4d310f(0x1e3))),
            selections[_0x4d310f(0x1dd)]({ step: x, selected: answer }),
            skipTo &&
              (selections["push"]({ step: skipTo - 0x2, selected: answer }),
              (objIndex = selections[_0x4d310f(0x159)](
                (_0x4a2609) => _0x4a2609[_0x4d310f(0xcb)] === x
              )),
              (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x4d310f(0x1a1)] = x)));
      }),
    logicExtra
      ? ($(steps[x])
          [_0x1854a4(0x1ee)](_0x1854a4(0x170))
          ["find"]("[data-radio-skip]:visible")
          [_0x1854a4(0x10e)](_0x1854a4(0x18b)) === !![] ||
          $(steps[x])
            [_0x1854a4(0x1ee)](_0x1854a4(0xef))
            [_0x1854a4(0x10e)](_0x1854a4(0x18b)) === !![]) &&
        skip &&
        selections["filter"]((_0x4438c8) => _0x4438c8[_0x1854a4(0xcb)] === x)[
          _0x1854a4(0x167)
        ] > 0x0 &&
        textareaLength === 0x0 &&
        textInputLength === 0x0 &&
        emailInputLength === 0x0 &&
        checkboxInputLength === 0x0 &&
        setTimeout(function () {
          (next = !![]), nextStep(), selectionQuiz();
        }, $(steps[x])
          [_0x1854a4(0x1ee)](_0x1854a4(0x95))
          [_0x1854a4(0x10e)]("radio-delay"))
      : $(steps[x])
          ["find"]("[data-radio-skip]:visible")
          [_0x1854a4(0x10e)]("radio-skip") === !![] &&
        skip &&
        textareaLength === 0x0 &&
        textInputLength === 0x0 &&
        emailInputLength === 0x0 &&
        checkboxInputLength === 0x0 &&
        setTimeout(function () {
          (next = !![]), nextStep(), selectionQuiz();
        }, $(steps[x])
          ["find"](_0x1854a4(0x95))
          [_0x1854a4(0x10e)]("radio-delay"))),
    inputFilled &&
    fileFilled &&
    numFilled &&
    checkboxFilled &&
    telFilled &&
    radioFilled &&
    emailFilled &&
    domainAllowed &&
    selectFilled &&
    textareaFilled &&
    passwordFilled &&
    urlFilled
      ? enableBtn()
      : disableBtn(),
    andLogic(),
    cloneRemove(),
    cloneRemoveInput();
}
function displayErrorMessage() {
  $("[data-text=\x22error-message\x22]")["hide"](),
    unfilledArr["length"] > 0x0 &&
      unfilledArr["forEach"](function (_0x1e9600) {
        const _0x106334 = _0x33c1;
        $(_0x106334(0x145) + _0x1e9600[_0x106334(0xd2)] + "\x22]")
          [_0x106334(0x14b)](_0x106334(0x9b))
          [_0x106334(0x1eb)](),
          $("input[name=\x22" + _0x1e9600[_0x106334(0xd2)] + "\x22]")
            [_0x106334(0xa4)]()
            ["children"](_0x106334(0x9b))
            [_0x106334(0x1eb)](),
          $(_0x106334(0x146) + _0x1e9600[_0x106334(0xd2)] + "\x22]")
            ["siblings"]("[data-text=\x22error-message\x22]")
            [_0x106334(0x1eb)](),
          $(_0x106334(0x100) + _0x1e9600[_0x106334(0xd2)] + "\x22]")
            [_0x106334(0x14b)](_0x106334(0x9b))
            [_0x106334(0x1eb)]();
      });
}
function resetInputErrorMessage(_0x3a76b1) {
  const _0x4d0009 = _0x1f0c14;
  $(_0x4d0009(0x145) + _0x3a76b1 + "\x22]")
    [_0x4d0009(0x14b)](_0x4d0009(0x9b))
    [_0x4d0009(0x1a3)](),
    $("input[name=\x22" + _0x3a76b1 + "\x22]")
      [_0x4d0009(0xa4)]()
      ["children"]("[data-text=\x22error-message\x22]")
      [_0x4d0009(0x1a3)](),
    $(_0x4d0009(0x146) + _0x3a76b1 + "\x22]")
      [_0x4d0009(0x14b)](_0x4d0009(0x9b))
      [_0x4d0009(0x1a3)](),
    $(_0x4d0009(0x100) + _0x3a76b1 + "\x22]")
      [_0x4d0009(0x14b)]("[data-text=\x22error-message\x22]")
      ["hide"]();
}
function increaseCurstep() {
  const _0x379bd9 = _0x1f0c14;
  countCard
    ? ((curStep = curStep + 0x1),
      $(_0x379bd9(0x151))[_0x379bd9(0xbe)](steps["length"]))
    : $(steps[x])[_0x379bd9(0x10e)]("card")
    ? (curStep = curStep + 0x0)
    : (curStep = curStep + 0x1),
    $(_0x379bd9(0xf5))[_0x379bd9(0xbe)](curStep);
}
function decreaseCurstep() {
  const _0x14bd68 = _0x1f0c14;
  countCard
    ? ((curStep = curStep - 0x1),
      $(_0x14bd68(0x151))[_0x14bd68(0xbe)](steps["length"]))
    : $(steps[x])["data"](_0x14bd68(0xfe))
    ? (curStep = curStep - 0x0)
    : (curStep = curStep - 0x1),
    $(_0x14bd68(0xf5))[_0x14bd68(0xbe)](curStep);
}
$(_0x1f0c14(0x1f6))["on"]("click", function (_0xeb8af6) {
  const _0x248f2b = _0x1f0c14;
  console["log"](_0x248f2b(0x195)),
    $(this)[_0x248f2b(0x10e)]("redirect") &&
      (redirectTo = $(this)[_0x248f2b(0x10e)](_0x248f2b(0xf4))),
    !$(this)[_0x248f2b(0x10e)]("new-tab") &&
      (newTab = $(this)["data"](_0x248f2b(0x130))),
    (successCard = $(this)["data"](_0x248f2b(0x188))),
    _0xeb8af6[_0x248f2b(0x162)](),
    _0xeb8af6["stopPropagation"](),
    logicExtra &&
      ($(this)[_0x248f2b(0x1d7)]("novalidate", !![]),
      $(steps)
        [_0x248f2b(0x1ee)](_0x248f2b(0x169))
        ["prop"](_0x248f2b(0xce), ![])),
    localStorage["removeItem"]("filledInput"),
    fill
      ? ($(this)[_0x248f2b(0x10e)](_0x248f2b(0x98))
          ? (console[_0x248f2b(0x1e7)](
              $(this)[_0x248f2b(0x10e)](_0x248f2b(0x98))
            ),
            $(this)["text"]($(this)[_0x248f2b(0x10e)](_0x248f2b(0x98))))
          : $(this)
              [_0x248f2b(0xd4)](_0x248f2b(0x1ca))
              [_0x248f2b(0xbe)](_0x248f2b(0x1ca)),
        $("[data-form=\x22multistep\x22]")[_0x248f2b(0x148)](),
        $(_0x248f2b(0x1cf))[_0x248f2b(0x167)] > 0x0 &&
          grecaptcha["getResponse"]()[_0x248f2b(0x167)] === 0x0 &&
          (form[_0x248f2b(0x1ee)](_0x248f2b(0x1f6))[_0x248f2b(0xbe)](
            oldSubmitText
          ),
          form[_0x248f2b(0x1ee)](_0x248f2b(0x1f6))[_0x248f2b(0xd4)](
            oldSubmitText
          )),
        customError && $(_0x248f2b(0x9b))[_0x248f2b(0x1a3)]())
      : customError && displayErrorMessage();
});
function nextStep() {
  const _0x1a115e = _0x1f0c14;
  customError
    ? ($(_0x1a115e(0x9b))["hide"](),
      fill
        ? (x++,
          increaseCurstep(),
          (progress = x),
          x <= steps[_0x1a115e(0x167)] - 0x1 &&
            (updateStep(), memory && saveFilledInput()))
        : displayErrorMessage())
    : (x++,
      increaseCurstep(),
      x > progress && (progress = x),
      x <= steps[_0x1a115e(0x167)] - 0x1 &&
        (updateStep(), memory && saveFilledInput())),
    andLogic();
}
function backStep() {
  const _0x28173f = _0x1f0c14;
  customError && $(_0x28173f(0x9b))["hide"](),
    decreaseCurstep(),
    x > 0x0 &&
      ($(progressbar[x])[_0x28173f(0x125)]("current"),
      selections[_0x28173f(0xd1)](
        (_0x4800ce) => _0x4800ce[_0x28173f(0x13e)] === x
      )["length"] > 0x0
        ? (x = parseInt(
            getSafe(
              () =>
                selections[_0x28173f(0xd1)](
                  (_0x7b9029) => _0x7b9029[_0x28173f(0x13e)] === x
                )[0x0][_0x28173f(0x1a1)]
            )
          ))
        : x--,
      updateStep()),
    ($(steps[x])
      [_0x28173f(0x1ee)](_0x28173f(0xb9))
      [_0x28173f(0x10e)](_0x28173f(0x18b)) === !![] ||
      $(steps[x])
        [_0x28173f(0x1ee)](".active-answer-card")
        [_0x28173f(0x1ee)]("[data-radio-skip]:visible")
        [_0x28173f(0x10e)](_0x28173f(0x18b)) === !![] ||
      $(steps[x])["find"](_0x28173f(0xef))["data"](_0x28173f(0x18b)) ===
        !![]) &&
      ((all_data = all_data[_0x28173f(0xd1)](
        (_0x2b2977) =>
          _0x2b2977[_0x28173f(0xa8)] !==
          $(steps[x])
            [_0x28173f(0x1ee)](_0x28173f(0x10c))
            [_0x28173f(0x198)](_0x28173f(0x99))
      )),
      $(
        _0x28173f(0x11d) +
          $(steps[x])
            [_0x28173f(0x1ee)](_0x28173f(0x10c))
            [_0x28173f(0x198)](_0x28173f(0x99)) +
          "\x22]"
      )["hide"](),
      $(steps[x])
        [_0x28173f(0x1ee)](_0x28173f(0x179))
        [_0x28173f(0x1d7)](_0x28173f(0x93), ![]),
      $(steps[x])
        [_0x28173f(0x1ee)](_0x28173f(0x10d))
        [_0x28173f(0x125)](_0x28173f(0x171)),
      validation());
}
weightedSelectionRange &&
  $("[data-selection]")["each"](function () {
    const _0x19115b = _0x1f0c14;
    $(this)[_0x19115b(0xb8)](
      _0x19115b(0xe5) +
        $(this)[_0x19115b(0x10e)](_0x19115b(0x1e0)) +
        _0x19115b(0x181)
    );
  });
function selectionQuiz() {
  const _0x3097a5 = _0x1f0c14;
  if ($(this)[_0x3097a5(0x1ee)]("[data-btn=\x22check\x22]")) {
    $(_0x3097a5(0xe9))[_0x3097a5(0x1a3)](),
      $("[data-selection-weight]")["hide"]();
    if (weightedSelection) {
      (selTotal = 0x0),
        selArr[_0x3097a5(0x12c)](function (_0x1ea511) {
          const _0x2dd9b5 = _0x3097a5;
          selTotal = selTotal + _0x1ea511[_0x2dd9b5(0x14f)];
        }),
        $("[data-text=\x22total-weight\x22]")[_0x3097a5(0xbe)](selTotal);
      if ($("[data-selection=\x22" + selTotal + "\x22]")["length"] > 0x0)
        $(_0x3097a5(0x17d) + selTotal + "\x22]")["fadeIn"]();
      else
        $(_0x3097a5(0x1e9) + selTotal + ")")
          ? $("[data-range]:contains(" + selTotal + ")")
              [_0x3097a5(0x15a)]("[data-selection]")
              ["eq"](0x0)
              [_0x3097a5(0x11b)]()
          : $(_0x3097a5(0x1ac))[_0x3097a5(0x1eb)]();
    } else {
      let _0x483b8d = -0x1;
      $(_0x3097a5(0xe9))[_0x3097a5(0x1bc)](function (_0x231d4e) {
        const _0x556301 = _0x3097a5;
        $($(_0x556301(0xe9))[_0x231d4e])
          ["data"](_0x556301(0x1e0))
          [_0x556301(0x144)](selString[_0x556301(0x1d1)]()) &&
          (_0x483b8d = _0x231d4e);
      }),
        _0x483b8d > -0x1
          ? $($("[data-selection]")[_0x483b8d])[_0x3097a5(0x1eb)]()
          : $(_0x3097a5(0x1ac))["fadeIn"]();
    }
  }
}
function triggerInputAllData() {
  const _0x812ef7 = _0x1f0c14;
  if (savedFilledInput && memory)
    console[_0x812ef7(0x1e7)](savedFilledInput),
      savedFilledInput[_0x812ef7(0x12c)]((_0x4603be) => {
        const _0x20d398 = _0x812ef7;
        var _0x18ec1d = $(
            _0x20d398(0x145) +
              _0x4603be[_0x20d398(0x157)] +
              _0x20d398(0x147) +
              _0x4603be["value"] +
              _0x20d398(0x1ae)
          ),
          _0x2011e3 = $(
            _0x20d398(0x145) +
              _0x4603be[_0x20d398(0x157)] +
              "\x22]:not([data-prefill=\x22false\x22])"
          ),
          _0x60c493 = $(
            _0x20d398(0x146) + _0x4603be[_0x20d398(0x157)] + _0x20d398(0x1ae)
          );
        if (_0x18ec1d[_0x20d398(0x198)]("type") !== _0x20d398(0x1c5)) {
          if (
            _0x18ec1d[_0x20d398(0x198)]("type") === "radio" &&
            !_0x18ec1d[_0x20d398(0xa4)]("[data-radio-skip]")["data"](
              _0x20d398(0x18b)
            )
          )
            _0x18ec1d[_0x20d398(0x1a6)](),
              _0x18ec1d[_0x20d398(0x14b)](_0x20d398(0x1ce))[_0x20d398(0x19a)](
                _0x20d398(0x171)
              ),
              _0x18ec1d[_0x20d398(0x105)](_0x20d398(0xd2));
          else
            _0x4603be[_0x20d398(0x1d2)] === "on"
              ? (_0x2011e3["click"](),
                _0x2011e3[_0x20d398(0x14b)](_0x20d398(0x12f))[_0x20d398(0x19a)](
                  _0x20d398(0x171)
                ),
                _0x2011e3[_0x20d398(0x105)](_0x20d398(0xd2)))
              : (_0x2011e3[_0x20d398(0xd4)](_0x4603be["value"]),
                _0x60c493[_0x20d398(0xd4)](_0x4603be["value"]),
                $(_0x20d398(0x10b))
                  [_0x20d398(0x1ee)](
                    _0x20d398(0x137) + _0x4603be["value"] + "\x22]"
                  )
                  [_0x20d398(0x1d7)](_0x20d398(0x14f), !![]),
                _0x2011e3[_0x20d398(0x105)](_0x20d398(0xd2)),
                _0x2011e3[_0x20d398(0x105)](_0x20d398(0x117)));
        }
      });
  else
    _params &&
      (getParams(),
      searchQ[_0x812ef7(0x12c)]((_0x5123ed) => {
        const _0x1b83d2 = _0x812ef7;
        if (
          $(
            "input[name=\x22" +
              _0x5123ed[_0x1b83d2(0x157)] +
              _0x1b83d2(0x147) +
              _0x5123ed[_0x1b83d2(0x1d2)] +
              _0x1b83d2(0x1ae)
          )[_0x1b83d2(0x198)](_0x1b83d2(0x1e4)) !== _0x1b83d2(0x1c5)
        ) {
          if (
            $(
              _0x1b83d2(0x145) +
                _0x5123ed["key"] +
                "\x22][value=\x22" +
                _0x5123ed[_0x1b83d2(0xd4)] +
                _0x1b83d2(0x1ae)
            )[_0x1b83d2(0x198)](_0x1b83d2(0x1e4)) === _0x1b83d2(0x1ed)
          )
            $(
              _0x1b83d2(0x145) +
                _0x5123ed[_0x1b83d2(0xe4)] +
                "\x22][value=\x22" +
                _0x5123ed[_0x1b83d2(0xd4)] +
                "\x22]:not([data-prefill=\x22false\x22])"
            )[_0x1b83d2(0x1a6)](),
              $(
                _0x1b83d2(0x145) +
                  _0x5123ed[_0x1b83d2(0xe4)] +
                  "\x22][value=\x22" +
                  _0x5123ed["val"] +
                  _0x1b83d2(0x1ae)
              )
                [_0x1b83d2(0x14b)](".w-radio-input")
                [_0x1b83d2(0x19a)]("w--redirected-checked"),
              $(
                "input[name=\x22" +
                  _0x5123ed[_0x1b83d2(0xe4)] +
                  _0x1b83d2(0x147) +
                  _0x5123ed["val"] +
                  "\x22]:not([data-prefill=\x22false\x22])"
              )[_0x1b83d2(0x105)]("input");
          else
            _0x5123ed["val"] === "on"
              ? ($(
                  "input[name=\x22" +
                    _0x5123ed[_0x1b83d2(0xe4)] +
                    "\x22]:not([data-prefill=\x22false\x22])"
                )["click"](),
                $(
                  _0x1b83d2(0x145) +
                    _0x5123ed[_0x1b83d2(0xe4)] +
                    "\x22]:not([data-prefill=\x22false\x22])"
                )
                  ["siblings"](_0x1b83d2(0x12f))
                  [_0x1b83d2(0x19a)](_0x1b83d2(0x171)),
                $(_0x1b83d2(0x145) + _0x5123ed[_0x1b83d2(0xe4)] + "\x22]")[
                  _0x1b83d2(0x105)
                ](_0x1b83d2(0xd2)))
              : ($(_0x1b83d2(0x145) + _0x5123ed["key"] + _0x1b83d2(0x1ae))[
                  _0x1b83d2(0xd4)
                ](_0x5123ed[_0x1b83d2(0xd4)]),
                $(
                  _0x1b83d2(0x146) +
                    _0x5123ed[_0x1b83d2(0xe4)] +
                    _0x1b83d2(0x1ae)
                )[_0x1b83d2(0xd4)](_0x5123ed[_0x1b83d2(0xd4)]),
                $(
                  "select[name=\x22" +
                    _0x5123ed["key"] +
                    "\x22]:not([data-prefill=\x22false\x22])"
                )
                  [_0x1b83d2(0x1ee)](
                    _0x1b83d2(0x137) + _0x5123ed[_0x1b83d2(0xd4)] + "\x22]"
                  )
                  [_0x1b83d2(0x1d7)](_0x1b83d2(0x14f), !![]),
                $(
                  _0x1b83d2(0x145) +
                    _0x5123ed[_0x1b83d2(0xe4)] +
                    _0x1b83d2(0x1ae)
                )[_0x1b83d2(0x105)](_0x1b83d2(0xd2)),
                $(
                  _0x1b83d2(0x145) +
                    _0x5123ed[_0x1b83d2(0xe4)] +
                    _0x1b83d2(0x1ae)
                )["trigger"](_0x1b83d2(0x117)));
        }
      }));
}
$(_0x1f0c14(0x121))["on"]("click", function () {
  (next = !![]), nextStep(), selectionQuiz();
}),
  $(_0x1f0c14(0x1b4))["on"](_0x1f0c14(0x1a6), function () {
    (next = ![]), (back = !![]), backStep();
  }),
  $(steps)
    ["find"](":input")
    [_0x1f0c14(0x1e1)](_0x1f0c14(0x1ea))
    ["on"](_0x1f0c14(0xd2), function (_0x18b70e) {
      validation(), andLogic();
    }),
  $(steps)
    [_0x1f0c14(0x1ee)](_0x1f0c14(0x179))
    ["on"](_0x1f0c14(0x1a6), function () {
      (skip = !![]), validation();
    });
$(_0x1f0c14(0x1e5))["data"]("clickable-all")
  ? $("[data-form=\x22custom-progress-indicator\x22]")["removeClass"](
      _0x1f0c14(0x1f5)
    )
  : $(_0x1f0c14(0x9c))[_0x1f0c14(0x19a)](_0x1f0c14(0x1f5));
function clickableIndicator() {
  const _0x3835cd = _0x1f0c14;
  $(_0x3835cd(0xb7))[_0x3835cd(0x10e)]("clickable") &&
    ($(_0x3835cd(0xd0))[_0x3835cd(0x125)](_0x3835cd(0x127)),
    $("[data-clickable]")[_0x3835cd(0x10e)](_0x3835cd(0x14a))
      ? ((x = $(this)[_0x3835cd(0x15f)]()), updateStep())
      : $(this)["index"]() <= progress &&
        ((x = $(this)[_0x3835cd(0x15f)]()), updateStep())),
    $(_0x3835cd(0xf5))[_0x3835cd(0xbe)](x + 0x1);
}
$(_0x1f0c14(0x9c))["on"](_0x1f0c14(0x1a6), clickableIndicator);
$(_0x1f0c14(0x17e))["data"](_0x1f0c14(0xc6)) &&
  ($("[data-go-to]")[_0x1f0c14(0x1bc)](function () {
    const _0x11addc = _0x1f0c14;
    $(this)["append"](_0x11addc(0x1cc), $(this)["data"](_0x11addc(0x1e3)));
  }),
  $(_0x1f0c14(0xf3))[_0x1f0c14(0x1bc)](function () {
    const _0x1a2cc4 = _0x1f0c14;
    $(this)[_0x1a2cc4(0xb8)](
      _0x1a2cc4(0xc8),
      $(this)[_0x1a2cc4(0x10e)]("answer")
    );
  }));
function resetFormly() {
  const _0x2b58d9 = _0x1f0c14;
  $(_0x2b58d9(0x17e))["trigger"](_0x2b58d9(0xa1)),
    $(_0x2b58d9(0x17e))
      ["parents"]()
      ["find"](_0x2b58d9(0x13c))
      [_0x2b58d9(0x1a3)](),
    (x = 0x0),
    updateStep(),
    $(_0x2b58d9(0x17e))[_0x2b58d9(0x11b)](),
    $("[data-form=\x22submit-btn\x22]")[_0x2b58d9(0xbe)](oldSubmitText),
    $(_0x2b58d9(0x1f6))[_0x2b58d9(0xd4)](oldSubmitText),
    $(_0x2b58d9(0xf5))[_0x2b58d9(0xbe)](0x1),
    $(_0x2b58d9(0x17e))
      [_0x2b58d9(0x1ee)](_0x2b58d9(0x19b))
      [_0x2b58d9(0x14b)](".w-checkbox-input")
      [_0x2b58d9(0x125)](_0x2b58d9(0x171));
}
$(document)[_0x1f0c14(0x13b)](function (_0x377e9f, _0x4d8dc3, _0x34fa7f) {
  const _0x40c91c = _0x1f0c14;
  if (_0x34fa7f[_0x40c91c(0x120)][_0x40c91c(0x144)](_0x40c91c(0x1ad))) {
    const _0x599891 = _0x4d8dc3[_0x40c91c(0xf0)] === 0xc8,
      _0x4d46cb = _0x40c91c(0x161);
    redirectTo &&
      _0x599891 &&
      (newTab
        ? window[_0x40c91c(0x182)](redirectTo, _0x40c91c(0x134))
        : setTimeout(() => {
            const _0x26ca09 = _0x40c91c;
            location[_0x26ca09(0x126)] = redirectTo;
          }, redirectDelay)),
      _0x599891 &&
        successCard !== "" &&
        $(_0x40c91c(0xfd) + successCard + "\x22]")["fadeIn"](),
      _0x599891 &&
        formReset &&
        setTimeout(() => {
          resetFormly();
        }, resetDelay),
      !_0x599891 &&
        ($(_0x40c91c(0x1f6))[_0x40c91c(0xd4)](_0x40c91c(0x1ca)),
        $(_0x40c91c(0x1f6))["text"](_0x40c91c(0x1ca)));
  }
}),
  $(_0x1f0c14(0x110))["on"](_0x1f0c14(0x1a6), function () {
    const _0x4bca04 = _0x1f0c14;
    var _0x14e702 = $(this)
      [_0x4bca04(0x15a)]()
      [_0x4bca04(0x1ee)](_0x4bca04(0x1e6))
      [_0x4bca04(0x10e)](_0x4bca04(0xb0));
    setTimeout(function () {
      const _0x2aefd2 = _0x4bca04;
      $(_0x2aefd2(0x145) + _0x14e702 + "\x22]")[_0x2aefd2(0xf1)]();
    }, 0x64),
      (back = !![]),
      (x = $(this)[_0x4bca04(0x10e)](_0x4bca04(0x184)) - 0x1),
      updateStep(),
      countCard
        ? ((curStep = x + 0x1),
          $("[data-text=\x22total-steps\x22]")[_0x4bca04(0xbe)](
            steps[_0x4bca04(0x167)]
          ))
        : $(steps[x])[_0x4bca04(0x10e)](_0x4bca04(0xfe))
        ? (curStep = x + 0x0)
        : (curStep = x + 0x1),
      $(_0x4bca04(0xf5))[_0x4bca04(0xbe)](curStep),
      (back = ![]);
  }),
  $(_0x1f0c14(0x1c3))["on"]("click", function () {
    const _0x4774e4 = _0x1f0c14;
    $(_0x4774e4(0x17e))["trigger"](_0x4774e4(0xa1));
    let _0x953aee = $(this);
    $(this)[_0x4774e4(0xbe)]("Please\x20wait..."),
      setTimeout(function () {
        const _0x205ba3 = _0x4774e4;
        $(_0x953aee)["text"](oldResetText),
          $(_0x953aee)[_0x205ba3(0xa4)](".w-form-done")[_0x205ba3(0x1a3)](),
          (x = 0x0),
          updateStep(),
          $("[data-form=\x22multistep\x22]")[_0x205ba3(0x11b)](),
          $("[data-form=\x22submit-btn\x22]")[_0x205ba3(0xbe)](oldSubmitText),
          $(_0x205ba3(0x1f6))[_0x205ba3(0xd4)](oldSubmitText),
          $(_0x953aee)[_0x205ba3(0xd4)](oldSubmitText),
          $(_0x205ba3(0xf5))[_0x205ba3(0xbe)](0x1),
          $(_0x205ba3(0x17e))
            ["find"]("input:checkbox")
            [_0x205ba3(0x14b)](_0x205ba3(0x12f))
            [_0x205ba3(0x125)]("w--redirected-checked");
      }, resetDelay);
  }),
  $(_0x1f0c14(0x1db))["on"](_0x1f0c14(0xf7), function (_0x452ff8) {
    const _0x3c2691 = _0x1f0c14;
    if (_0x452ff8["keyCode"] === 0xd) {
      _0x452ff8["preventDefault"](), _0x452ff8[_0x3c2691(0xb3)]();
      if (
        $(steps[x])[_0x3c2691(0x1ee)](_0x3c2691(0xcc))["is"](_0x3c2691(0x132))
      )
        $(steps[x])
          ["find"](_0x3c2691(0xf8))
          [_0x3c2691(0xd4)](
            $(steps[x])[_0x3c2691(0x1ee)]("textarea:focus")["val"]() + "\x0a"
          );
      else
        $(_0x3c2691(0x9f))[_0x3c2691(0x10e)]("enter") &&
          fill &&
          totalSteps > curStep &&
          $(_0x3c2691(0x121))[0x0]["click"]();
    }
  }),
  $(_0x1f0c14(0x1db))[_0x1f0c14(0x1a8)](function (_0x44a125) {
    const _0xbc112b = _0x1f0c14;
    (_0x44a125["metaKey"] || _0x44a125[_0xbc112b(0x196)]) &&
      _0x44a125["keyCode"] == 0xd &&
      (x >= steps[_0xbc112b(0x167)] - 0x1 && fill
        ? $(steps[x])[_0xbc112b(0x1ee)](_0xbc112b(0x160))[_0xbc112b(0x1a6)]()
        : (_0x44a125[_0xbc112b(0x162)](), _0x44a125[_0xbc112b(0xb3)]()));
  }),
  $(_0x1f0c14(0x17e))
    ["find"](_0x1f0c14(0x169))
    ["on"](_0x1f0c14(0x117), function () {
      const _0xc90313 = _0x1f0c14;
      (all_data = all_data["filter"](
        (_0x22368b) =>
          _0x22368b[_0xc90313(0xa8)] !==
          $(this)[_0xc90313(0x198)](_0xc90313(0x99))
      )),
        $(this)[_0xc90313(0x198)](_0xc90313(0x1e4)) === _0xc90313(0x18c)
          ? $(this)["is"](_0xc90313(0x1a0))
            ? all_data["push"]({
                field: $(this)[_0xc90313(0x198)]("name"),
                value: $(this)["siblings"]("span")[_0xc90313(0xbe)](),
              })
            : $(
                _0xc90313(0x11d) +
                  $(this)[_0xc90313(0x198)](_0xc90313(0x99)) +
                  "\x22]"
              )[_0xc90313(0x1a3)]()
          : (all_data[_0xc90313(0x1dd)]({
              field: $(this)[_0xc90313(0x198)]("name"),
              value: $(this)[_0xc90313(0xd4)](),
            }),
            $(this)[_0xc90313(0xd4)]() !== "" &&
              resetInputErrorMessage($(this)["attr"](_0xc90313(0x99)))),
        all_data[_0xc90313(0x12c)](function (_0x4fa510) {
          const _0xc9b61c = _0xc90313;
          $(_0xc9b61c(0x11d) + _0x4fa510[_0xc9b61c(0xa8)] + "\x22]")["show"](),
            $(_0xc9b61c(0x11d) + _0x4fa510[_0xc9b61c(0xa8)] + "\x22]")[
              _0xc9b61c(0xbe)
            ](_0x4fa510[_0xc9b61c(0x1d2)]);
        });
    }),
  $(_0x1f0c14(0x17e))
    [_0x1f0c14(0x1ee)]("textarea")
    ["on"](_0x1f0c14(0x117), function () {
      const _0x2423d3 = _0x1f0c14;
      $(this)["val"]() !== "" &&
        resetInputErrorMessage($(this)[_0x2423d3(0x198)](_0x2423d3(0x99))),
        (all_data = all_data["filter"](
          (_0x4ac98b) =>
            _0x4ac98b[_0x2423d3(0xa8)] !== $(this)[_0x2423d3(0x198)]("name")
        )),
        all_data[_0x2423d3(0x1dd)]({
          field: $(this)["attr"]("name"),
          value: $(this)[_0x2423d3(0xd4)](),
        }),
        all_data[_0x2423d3(0x12c)](function (_0xf0d8d0) {
          const _0x3b15a1 = _0x2423d3;
          $(_0x3b15a1(0x11d) + _0xf0d8d0[_0x3b15a1(0xa8)] + "\x22]")[
            _0x3b15a1(0x11b)
          ](),
            $(_0x3b15a1(0x11d) + _0xf0d8d0[_0x3b15a1(0xa8)] + "\x22]")["text"](
              _0xf0d8d0[_0x3b15a1(0x1d2)]
            );
        });
    }),
  $(_0x1f0c14(0x17e))
    [_0x1f0c14(0x1ee)]("select")
    ["on"]("change", function () {
      const _0x267dbe = _0x1f0c14;
      $(this)[_0x267dbe(0xd4)]() !== "" &&
        resetInputErrorMessage($(this)[_0x267dbe(0x198)](_0x267dbe(0x99)));
      var _0x3b3645 = $(this)["data"](_0x267dbe(0xb6));
      (all_data = all_data["filter"](
        (_0x4c0344) =>
          _0x4c0344[_0x267dbe(0xa8)] !== $(this)["attr"](_0x267dbe(0x99))
      )),
        all_data[_0x267dbe(0x1dd)]({
          field: $(this)[_0x267dbe(0x198)](_0x267dbe(0x99)),
          value: _0x3b3645
            ? $(this)[_0x267dbe(0x1ee)](_0x267dbe(0x106))[_0x267dbe(0xbe)]()
            : $(this)[_0x267dbe(0xd4)](),
        }),
        all_data[_0x267dbe(0x12c)](function (_0x4fc4a0) {
          const _0x102376 = _0x267dbe;
          $(_0x102376(0x11d) + _0x4fc4a0[_0x102376(0xa8)] + "\x22]")["show"](),
            $(_0x102376(0x11d) + _0x4fc4a0[_0x102376(0xa8)] + "\x22]")[
              _0x102376(0xbe)
            ](_0x4fc4a0[_0x102376(0x1d2)]);
        });
    }),
  updateStep(),
  triggerInputAllData(),
  $("[data-cms-select=cms]")[_0x1f0c14(0x1bc)](function () {
    const _0x448256 = _0x1f0c14,
      _0x128e74 = $(this)[_0x448256(0x1ee)](_0x448256(0x14c)),
      _0x5e076e = [];
    console[_0x448256(0x1e7)](_0x5e076e),
      _0x128e74["each"](function () {
        const _0x18f59b = _0x448256;
        _0x5e076e[_0x18f59b(0x1dd)](
          $(this)[_0x18f59b(0xbe)]()[_0x18f59b(0xd8)]()
        );
      });
    const _0x3c8962 = $(this)["siblings"](_0x448256(0x1b3));
    $[_0x448256(0x1bc)](_0x5e076e, function (_0x3a6b63, _0x49b95a) {
      const _0x59417b = _0x448256,
        _0x4113a4 = $(_0x59417b(0x149))
          [_0x59417b(0xd4)](_0x49b95a)
          [_0x59417b(0xbe)](_0x49b95a);
      _0x3c8962[_0x59417b(0xb8)](_0x4113a4);
    });
  });
function cloneRemove() {
  const _0x1c7618 = _0x1f0c14;
  $(_0x1c7618(0xe8))[_0x1c7618(0x1bc)](function () {
    const _0x582bed = _0x1c7618;
    $(this)[_0x582bed(0x1ee)](_0x582bed(0x153))[_0x582bed(0x167)] < 0x2
      ? $(this)["find"](_0x582bed(0xb1))["hide"]()
      : $(this)
          [_0x582bed(0x1ee)]("[data-form=\x22remove-clone\x22]")
          [_0x582bed(0x11b)]();
  });
}
function cloneRemoveInput() {
  const _0x4f9bea = _0x1f0c14;
  $(_0x4f9bea(0x13f))["each"](function () {
    const _0xc342d7 = _0x4f9bea;
    $(this)[_0xc342d7(0x1ee)](_0xc342d7(0x142))[_0xc342d7(0x167)] < 0x2
      ? $(this)
          [_0xc342d7(0x1ee)]("[data-form=\x22remove-input-clone\x22]")
          [_0xc342d7(0x1a3)]()
      : $(this)["find"](_0xc342d7(0x123))[_0xc342d7(0x11b)]();
  });
}
$(_0x1f0c14(0xb1))["on"]("click", function () {
  const _0x1b0833 = _0x1f0c14,
    _0x340813 =
      $(this)[_0x1b0833(0xa4)](_0x1b0833(0x153))[_0x1b0833(0x167)] > 0x0
        ? $(this)[_0x1b0833(0xa4)](_0x1b0833(0x153))["index"]()
        : $(this)[_0x1b0833(0xa4)](_0x1b0833(0x197))["index"](),
    _0x5b969a =
      $(this)[_0x1b0833(0xa4)](_0x1b0833(0x153))[_0x1b0833(0x167)] > 0x0
        ? $(this)
            ["parents"](_0x1b0833(0x153))
            [_0x1b0833(0x10e)](_0x1b0833(0x9d))
        : $(this)
            [_0x1b0833(0xa4)](_0x1b0833(0x197))
            [_0x1b0833(0x10e)](_0x1b0833(0x102));
  $(_0x1b0833(0x173) + _0x5b969a + "\x22]")
    ["eq"](_0x340813)
    [_0x1b0833(0x119)](),
    $(_0x1b0833(0x1c2) + _0x5b969a + "\x22]")
      ["eq"](_0x340813)
      ["remove"](),
    cloneRemove(),
    validation();
}),
  $(_0x1f0c14(0x123))["on"](_0x1f0c14(0x1a6), function () {
    const _0x4da4f9 = _0x1f0c14;
    let _0x1d64e4 = $(this)
      [_0x4da4f9(0x14b)]()
      [_0x4da4f9(0x198)](_0x4da4f9(0x99));
    $(this)[_0x4da4f9(0x15a)](_0x4da4f9(0x142))[_0x4da4f9(0x119)](),
      $(_0x4da4f9(0x11d) + _0x1d64e4 + "\x22]")
        ["parent"]("[data-display-input]")
        ["remove"](),
      cloneRemove(),
      validation();
  }),
  $("[data-add-new]")["on"](_0x1f0c14(0x1a6), function () {
    const _0x57901e = _0x1f0c14;
    let _0x25c450 = $(this)[_0x57901e(0x10e)](_0x57901e(0x17b));
    var _0x279c18 = $("[data-clone=\x22" + _0x25c450 + "\x22]")
        ["eq"](0x0)
        [_0x57901e(0x9d)](!![]),
      _0x378a8c = $(_0x57901e(0x1c2) + _0x25c450 + "\x22]")
        ["eq"](0x0)
        ["clone"](!![]);
    let _0x36f9a3 = "";
    $(this)["find"](_0x57901e(0xb1))[_0x57901e(0x11b)](),
      cloneRemove(),
      _0x279c18["find"](_0x57901e(0x142))[_0x57901e(0x1ee)]("input")["val"](""),
      _0x279c18[_0x57901e(0x1ee)]("[data-clone-input]")
        ["not"](_0x57901e(0x186))
        [_0x57901e(0x119)](),
      _0x378a8c[_0x57901e(0x1ee)](_0x57901e(0x1c4))
        [_0x57901e(0x1e1)](_0x57901e(0x186))
        [_0x57901e(0x119)](),
      _0x279c18["find"]("input")[_0x57901e(0x1bc)](function () {
        const _0x3923ee = _0x57901e;
        if ($(this)["closest"]("[data-clone-input]")["length"] > 0x0) {
          let _0x1853d8 = 0x0;
          const _0xb86f4b = $(this)
            [_0x3923ee(0xb2)](_0x3923ee(0x142))
            [_0x3923ee(0x10e)](_0x3923ee(0xff));
          console[_0x3923ee(0x1e7)](
            $(this)
              [_0x3923ee(0xb2)](_0x3923ee(0x142))
              [_0x3923ee(0x10e)](_0x3923ee(0xff)),
            this[_0x3923ee(0x99)]
          ),
            $("[data-clone-input=\x22" + _0xb86f4b + _0x3923ee(0xad))["each"](
              function () {
                const _0x379085 = _0x3923ee,
                  _0x59d000 = $(this)[_0x379085(0x198)]("name");
                if (_0x59d000 && _0x59d000["startsWith"](_0x379085(0x109))) {
                  const _0x5f03bf = parseInt(
                    _0x59d000[_0x379085(0x1b9)]("-")[0x1]
                  );
                  !isNaN(_0x5f03bf) &&
                    _0x5f03bf > _0x1853d8 &&
                    (_0x1853d8 = _0x5f03bf);
                }
              }
            ),
            _0x1853d8++,
            (_0x36f9a3 = this[_0x3923ee(0x99)] + "-" + _0x1853d8),
            console[_0x3923ee(0x1e7)](_0xb86f4b, _0x36f9a3);
        } else
          _0x36f9a3 =
            this[_0x3923ee(0x99)] +
            "-" +
            (parseInt(
              $(_0x3923ee(0x173) + _0x25c450 + "\x22]")
                [_0x3923ee(0x1d8)]()
                [_0x3923ee(0x15f)]()
            ) +
              0x1);
        $(this)["val"](""),
          $(this)[_0x3923ee(0x198)](_0x3923ee(0x99), _0x36f9a3),
          $(this)[_0x3923ee(0x198)]("data-name", _0x36f9a3);
      }),
      _0x378a8c["find"](_0x57901e(0x1e6))[_0x57901e(0x1bc)](function () {
        const _0x5ea841 = _0x57901e;
        if ($(this)[_0x5ea841(0x10e)](_0x5ea841(0xb0))) {
          let _0x20b179 = 0x0;
          const _0x265d2d = $(this)["data"](_0x5ea841(0xb0))["split"]("-")[0x0];
          $(
            "[data-display=\x22" +
              _0x25c450 +
              _0x5ea841(0xe0) +
              _0x265d2d +
              "\x22]"
          )[_0x5ea841(0x1bc)](function () {
            const _0xd9c666 = _0x5ea841,
              _0x26850a = $(this)[_0xd9c666(0x198)]("data-input-field"),
              _0x316107 = parseInt(_0x26850a[_0xd9c666(0x1b9)]("-")[0x1]);
            !isNaN(_0x316107) &&
              _0x316107 > _0x20b179 &&
              (_0x20b179 = _0x316107);
          }),
            _0x20b179++;
          const _0x1137dc = _0x265d2d + "-" + _0x20b179;
          console[_0x5ea841(0x1e7)](_0x1137dc),
            $(this)[_0x5ea841(0x198)](_0x5ea841(0x113), _0x1137dc);
        }
      }),
      $("[data-clone-wrapper=\x22" + _0x25c450 + "\x22]")[_0x57901e(0xb8)](
        _0x279c18
      ),
      $(_0x57901e(0x1de) + _0x25c450 + "\x22]")[_0x57901e(0xb8)](_0x378a8c),
      $(_0x57901e(0x10a) + _0x25c450 + "\x22]")["each"](function () {
        const _0x25b9bc = _0x57901e;
        $(this)[_0x25b9bc(0xbe)](
          $(this)
            [_0x25b9bc(0xa4)](_0x25b9bc(0x173) + _0x25c450 + "\x22]")
            [_0x25b9bc(0x15f)]() + 0x1
        );
      }),
      $(_0x57901e(0xcd) + _0x25c450 + "\x22]")[_0x57901e(0x1bc)](function () {
        const _0x3dc7bd = _0x57901e;
        $(this)["text"](
          $(this)
            [_0x3dc7bd(0xa4)]("[data-display=\x22" + _0x25c450 + "\x22]")
            [_0x3dc7bd(0x15f)]() + 0x1
        );
      }),
      validation();
  }),
  $(_0x1f0c14(0x94))["on"](_0x1f0c14(0x1a6), function () {
    const _0x4a72ac = _0x1f0c14,
      _0x324bd7 = $(this)
        [_0x4a72ac(0xa4)](_0x4a72ac(0x153))
        [_0x4a72ac(0x15f)]();
    let _0x3cdd47 = $(this)[_0x4a72ac(0x10e)](_0x4a72ac(0xda));
    var _0x3aed94 = $(_0x4a72ac(0x14e) + _0x3cdd47 + "\x22]")
        ["eq"](0x0)
        ["clone"](!![]),
      _0x31cb56 = $(_0x4a72ac(0x164) + _0x3cdd47 + "\x22]")
        ["eq"](0x0)
        [_0x4a72ac(0x9d)](!![]);
    $(this)["find"]("[data-form=\x22remove-input-clone\x22]")["show"](),
      cloneRemoveInput();
    let _0x5b730c = 0x0;
    $(_0x4a72ac(0x14e) + _0x3cdd47 + _0x4a72ac(0xad))[_0x4a72ac(0x1bc)](
      function () {
        const _0x6069d4 = _0x4a72ac,
          _0x4965c8 = $(this)["attr"]("name");
        if (_0x4965c8 && _0x4965c8[_0x6069d4(0xdf)](_0x6069d4(0x109))) {
          const _0x5d5ca2 = parseInt(_0x4965c8[_0x6069d4(0x1b9)]("-")[0x1]);
          !isNaN(_0x5d5ca2) && _0x5d5ca2 > _0x5b730c && (_0x5b730c = _0x5d5ca2);
        }
      }
    ),
      _0x5b730c++,
      _0x3aed94[_0x4a72ac(0x1ee)](_0x4a72ac(0xd2))["each"](function () {
        const _0x488416 = _0x4a72ac;
        let _0x1dd0cb = _0x488416(0x109) + _0x5b730c;
        $(this)[_0x488416(0xd4)](""),
          $(this)["attr"]("name", _0x1dd0cb),
          $(this)[_0x488416(0x198)](_0x488416(0xac), _0x1dd0cb);
      }),
      _0x31cb56[_0x4a72ac(0x1ee)](_0x4a72ac(0x1e6))[_0x4a72ac(0x1bc)](
        function () {
          const _0x589887 = _0x4a72ac;
          $(this)[_0x589887(0x198)](
            _0x589887(0x113),
            "relationship-" + _0x5b730c
          );
        }
      ),
      $(this)
        ["siblings"]("[data-clone-input-wrapper=\x22" + _0x3cdd47 + "\x22]")
        ["append"](_0x3aed94),
      $(_0x4a72ac(0x197))
        ["eq"](_0x324bd7)
        ["find"](_0x4a72ac(0x1ba) + _0x3cdd47 + "\x22]")
        [_0x4a72ac(0xb8)](_0x31cb56),
      $(_0x4a72ac(0x15b) + _0x3cdd47 + "\x22]")["each"](function () {
        const _0x18fc19 = _0x4a72ac;
        $(this)[_0x18fc19(0xbe)](
          $(this)
            [_0x18fc19(0xa4)]("[data-clone-input=\x22" + _0x3cdd47 + "\x22]")
            [_0x18fc19(0x15f)]() + 0x1
        );
      }),
      $(_0x4a72ac(0xd7) + _0x3cdd47 + "\x22]")[_0x4a72ac(0x1bc)](function () {
        const _0x21e415 = _0x4a72ac;
        $(this)[_0x21e415(0xbe)](
          $(this)
            ["parents"](_0x21e415(0x164) + _0x3cdd47 + "\x22]")
            ["index"]() + 0x1
        );
      }),
      validation();
  }),
  $(_0x1f0c14(0x1dc))["on"](_0x1f0c14(0x1a6), function () {
    const _0x5a0916 = _0x1f0c14,
      _0x2fc0df = $(this)["data"](_0x5a0916(0x16f));
    $(_0x5a0916(0x145) + _0x2fc0df + "\x22]")[_0x5a0916(0xd4)](""),
      validation();
  });
function andLogic() {
  const _0x7838d6 = _0x1f0c14;
  conditionalResult &&
    (steps["eq"](x)[_0x7838d6(0x1ee)](_0x7838d6(0xbf))[_0x7838d6(0x1a3)](),
    console[_0x7838d6(0x1e7)](_0x7838d6(0xed)),
    steps["eq"](x)
      [_0x7838d6(0x1ee)](_0x7838d6(0xbf))
      ["each"](function () {
        const _0x3fd70a = _0x7838d6;
        function _0x30fba2(_0x416da2) {
          const _0x34f6aa = _0x33c1,
            _0xc7e169 = _0x416da2[_0x34f6aa(0x1b9)]("&"),
            _0x47f084 = [];
          return (
            _0xc7e169[_0x34f6aa(0x12c)]((_0x3f1814) => {
              const _0x56e6a9 = _0x34f6aa,
                [_0x30d1de, _0x2f8aac] = _0x3f1814[_0x56e6a9(0x1b9)]("=");
              _0x47f084[_0x56e6a9(0x1dd)]({
                field: _0x30d1de,
                value: _0x2f8aac,
              });
            }),
            _0x47f084
          );
        }
        const _0x39f7a9 = $(this)[_0x3fd70a(0x198)]("data-show-if");
        console["log"](_0x39f7a9);
        const _0x40f6b4 = _0x30fba2(_0x39f7a9);
        function _0x5275eb(_0x324230, _0x32705f) {
          const _0x53a42d = _0x3fd70a;
          return _0x32705f[_0x53a42d(0xa9)]((_0x391047, _0x10088a) => {
            const _0x57f5e5 = _0x53a42d;
            if (
              _0x324230[0x0] &&
              _0x391047[_0x57f5e5(0xa8)] === _0x324230[0x0]["field"]
            )
              return _0x324230[_0x57f5e5(0xf9)](
                (_0x2d8dbf, _0x5d8cc4) =>
                  _0x32705f[_0x10088a + _0x5d8cc4] &&
                  _0x32705f[_0x10088a + _0x5d8cc4]["field"] ===
                    _0x2d8dbf[_0x57f5e5(0xa8)] &&
                  _0x32705f[_0x10088a + _0x5d8cc4][_0x57f5e5(0x1d2)] ===
                    _0x2d8dbf[_0x57f5e5(0x1d2)]
              );
            return ![];
          });
        }
        const _0x502149 = _0x5275eb(_0x40f6b4, all_data);
        _0x502149 ? $(this)[_0x3fd70a(0x11b)]() : $(this)[_0x3fd70a(0x1a3)]();
      }));
}
$("[data-progressive-target]")[_0x1f0c14(0x19a)](_0x1f0c14(0x1a3)),
  $(_0x1f0c14(0xea))["on"](_0x1f0c14(0xd2), function () {
    const _0x1f46ca = _0x1f0c14,
      _0xe6c07f = $(this)["data"](_0x1f46ca(0x176)),
      _0x3acf71 = $(this)[_0x1f46ca(0xd4)]();
    $(_0x1f46ca(0x174) + _0xe6c07f + "\x22]")["addClass"](_0x1f46ca(0x1a3)),
      $(_0x1f46ca(0x174) + _0xe6c07f + "\x22]")[_0x1f46ca(0x125)](
        _0x1f46ca(0x11b)
      ),
      $(_0x1f46ca(0x174) + _0xe6c07f + _0x1f46ca(0xe6) + _0x3acf71 + "\x22]")[
        _0x1f46ca(0x19a)
      ](_0x1f46ca(0x11b));
    let _0x55095e = $("[data-progressive-target=\x22" + _0xe6c07f + "\x22]")
      ["find"]("[data-progressive-input]")
      [_0x1f46ca(0x10e)]("progressive-input");
    console["log"](_0x55095e),
      _0x55095e &&
        $(_0x1f46ca(0xeb) + _0x55095e + "\x22]")[_0x1f46ca(0xd4)]() !== "" &&
        $(_0x1f46ca(0xeb) + _0x55095e + "\x22]")[_0x1f46ca(0x105)]("input"),
      $(_0x1f46ca(0x141))[_0x1f46ca(0x1bc)](function () {
        const _0x2b38c0 = _0x1f46ca,
          _0x480dac = $(this)["data"]("progressive-input");
        $(_0x2b38c0(0x174) + _0x480dac + "\x22]")[_0x2b38c0(0x125)](
          _0x2b38c0(0x11b)
        ),
          $("[data-progressive-target=\x22" + _0x480dac + "\x22]")["addClass"](
            _0x2b38c0(0x1a3)
          );
      });
  }),
  scrollTop(),
  cloneRemove(),
  cloneRemoveInput();
const formlyUrlParams = new URLSearchParams(
    window[_0x1f0c14(0x16c)][_0x1f0c14(0xa2)]
  ),
  formlySupportParam = formlyUrlParams[_0x1f0c14(0x103)](_0x1f0c14(0x92)),
  showButton = formlySupportParam === _0x1f0c14(0x1da),
  passIcon = _0x1f0c14(0x12e),
  failIcon = _0x1f0c14(0x1b5);
let isScriptLoaded = !![],
  scriptLocation = _0x1f0c14(0x1d6),
  isMultistepAttributePresent = !![],
  isMultistepOnFormElement = !![],
  areButtonsPresent = !![],
  isNextBtnOnSubmit = ![],
  isSubmitBtnOnSubmit = !![],
  isBackBtnOnSubmit = ![],
  formType = logicExtra ? _0x1f0c14(0x1f1) : _0x1f0c14(0x1a4),
  resultStatus = _0x1f0c14(0x1e2),
  scriptSrcAdded = "";
function isElementPresent(_0x412053, _0x220955) {
  const _0xe14fdd = _0x1f0c14;
  return (
    document[_0xe14fdd(0x1cd)](
      "[" + _0x220955 + "=\x22" + _0x412053 + "\x22]"
    ) !== null
  );
}
isMultistepAttributePresent = isElementPresent(_0x1f0c14(0xd3), "data-form");
const multistepForm = document[_0x1f0c14(0x1cd)](_0x1f0c14(0x1b1)),
  formStepLength = multistepForm["querySelectorAll"](
    "[data-form=\x22step\x22]"
  )[_0x1f0c14(0x167)];
isMultistepOnFormElement = multistepForm !== null;
const multistepContainer = document[_0x1f0c14(0x1cd)](_0x1f0c14(0x17e)),
  nextBtn = multistepContainer[_0x1f0c14(0x1cd)](_0x1f0c14(0x121)),
  backBtn = multistepContainer[_0x1f0c14(0x1cd)](
    "[data-form=\x22back-btn\x22]"
  ),
  submitBtn = multistepContainer["querySelector"](_0x1f0c14(0x1f6));
(areButtonsPresent =
  nextBtn !== null && backBtn !== null && submitBtn !== null),
  (isNextBtnOnSubmit =
    nextBtn && nextBtn["tagName"]["toLowerCase"]() === _0x1f0c14(0xd2)),
  (isSubmitBtnOnSubmit =
    submitBtn &&
    submitBtn[_0x1f0c14(0x118)][_0x1f0c14(0x13a)]() === _0x1f0c14(0xd2) &&
    submitBtn[_0x1f0c14(0x1e4)]["toLowerCase"]() === _0x1f0c14(0x148)),
  (isBackBtnOnSubmit =
    backBtn && backBtn["tagName"]["toLowerCase"]() === _0x1f0c14(0xd2));
const checkPowerup = (_0x1fc9b2) =>
    document[_0x1f0c14(0x1cd)](_0x1fc9b2) !== null,
  progressBarAttr = checkPowerup(_0x1f0c14(0x1c9)),
  progressIndicatorAttr = checkPowerup(
    "[data-form=\x22progress-indicator\x22]"
  ),
  customProgressAttr = checkPowerup(_0x1f0c14(0xd0)),
  cardDivAttr = checkPowerup("[data-card=\x22true\x22]"),
  currentStepAttr = checkPowerup(_0x1f0c14(0xf5)),
  totalStepAttr = checkPowerup(_0x1f0c14(0x151)),
  enterAttr = checkPowerup(_0x1f0c14(0x15e)),
  submitAttr = checkPowerup(_0x1f0c14(0x1d5)),
  radioSkipAttr = checkPowerup(_0x1f0c14(0xdd)),
  customCheckboxAttr = checkPowerup(_0x1f0c14(0x143)),
  recapatchaAttr = checkPowerup(_0x1f0c14(0x178));
(!isScriptLoaded ||
  scriptLocation !== _0x1f0c14(0x1d6) ||
  !isMultistepAttributePresent ||
  !isMultistepOnFormElement ||
  !areButtonsPresent ||
  isNextBtnOnSubmit ||
  !isSubmitBtnOnSubmit ||
  isBackBtnOnSubmit) &&
  (resultStatus = "FAIL");
function isScriptUrlMatch(_0x4b0f4d, _0x30d7bd) {
  const _0x15cb94 = _0x1f0c14;
  for (
    var _0x437b90 = 0x0;
    _0x437b90 < _0x30d7bd[_0x15cb94(0x167)];
    _0x437b90++
  ) {
    if (_0x4b0f4d[_0x15cb94(0x144)](_0x30d7bd[_0x437b90])) return !![];
  }
  return ![];
}
var keywordsToCheck = [_0x1f0c14(0xc0), _0x1f0c14(0xab)],
  scripts = document["getElementsByTagName"](_0x1f0c14(0xc4)),
  matchedScripts = [];
for (var i = 0x0; i < scripts[_0x1f0c14(0x167)]; i++) {
  var scriptSrcs = scripts[i][_0x1f0c14(0x1ef)];
  isScriptUrlMatch(scriptSrcs, keywordsToCheck) &&
    matchedScripts[_0x1f0c14(0x1dd)](scriptSrcs);
}
if (matchedScripts[_0x1f0c14(0x167)] > 0x0) {
  scriptSrcAdded = matchedScripts;
  const script = document[_0x1f0c14(0x1cd)](
    "script[src=\x22" + scriptSrcAdded + "\x22]"
  );
  script &&
    (scriptLocation =
      script[_0x1f0c14(0xc1)][_0x1f0c14(0x118)] === _0x1f0c14(0xc7)
        ? _0x1f0c14(0xb5)
        : "Inside\x20<head>\x20tag");
} else scriptSrcAdded = _0x1f0c14(0x96) + failIcon;
const newElement = document[_0x1f0c14(0x199)](_0x1f0c14(0x155)),
  newStyle = document[_0x1f0c14(0x199)](_0x1f0c14(0x15c));
(newStyle[_0x1f0c14(0x158)] =
  "\x0a\x20\x20.f-icon-embed-xxsmall-2\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#ff3232\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x20\x20.f-icon-embed-xxsmall\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#57ff4b\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20{\x0a\x20\x20\x20\x20height:\x20100%\x20!important;\x0a\x20\x20\x20\x20width:\x200;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20z-index:\x20999999999999\x20!important;\x0a\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20background-color:\x20#081019\x20!important;\x0a\x20\x20\x20\x20overflow-x:\x20hidden\x20!important;\x0a\x20\x20\x20\x20padding-top:\x2060px\x20!important;\x0a\x20\x20\x20\x20transition:\x200.5s\x20!important;\x0a\x20\x20\x20\x20font-size:\x2015px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73)\x20!important;\x0a\x20\x20\x20\x20font-family:system-ui\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-section-title-text,\x20.f-support-text,\x20.f-openbtn{\x0a\x20\x20\x20\x20font-size:\x2015px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73);\x0a\x20\x20\x20\x20font-family:system-ui\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20p,\x20.f-sidenav\x20strong\x20{\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20space-between\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x204px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73);\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20.f-closebtn\x20{\x0a\x20\x20\x20\x20position:\x20absolute\x20!important;\x0a\x20\x20\x20\x20top:\x2025px\x20!important;\x0a\x20\x20\x20\x20right:\x2025px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2036px\x20!important;\x0a\x20\x20\x20\x20margin-left:\x2050px\x20!important;\x0a\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20color:\x20#e7e7e7\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-core-setup\x20{\x0a\x20\x20\x20\x20padding:\x2012px\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x2011px\x20!important;\x0a\x20\x20\x20\x20border-radius:\x206px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20#f-main\x20{\x0a\x20\x20\x20\x20transition:\x20margin-left\x20.5s\x20!important;\x0a\x20\x20\x20\x20padding:\x2020px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-main-content\x20{\x0a\x20\x20\x20\x20transition:\x20margin-left\x20.5s\x20!important;\x0a\x20\x20\x20\x20padding:\x2020px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-form-step\x20{\x0a\x20\x20\x20\x20padding-left:\x2010px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-openbtn\x20{\x0a\x20\x20\x20\x20white-space:\x20nowrap\x20!important;\x0a\x20\x20\x20\x20cursor:\x20pointer\x20!important;\x0a\x20\x20\x20\x20box-shadow:\x200\x200\x200\x201px\x20rgba(0,\x200,\x200,\x20.1),\x200\x201px\x203px\x20rgba(0,\x200,\x200,\x20.1)\x20!important;\x0a\x20\x20\x20\x20visibility:\x20visible\x20!important;\x0a\x20\x20\x20\x20z-index:\x2099\x20!important;\x0a\x20\x20\x20\x20color:\x20#e7e7e7\x20!important;\x0a\x20\x20\x20\x20opacity:\x201\x20!important;\x0a\x20\x20\x20\x20width:\x20auto\x20!important;\x0a\x20\x20\x20\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20background-color:\x20#1e1e1e\x20!important;\x0a\x20\x20\x20\x20border-radius:\x203px\x20!important;\x0a\x20\x20\x20\x20margin:\x200\x20!important;\x0a\x20\x20\x20\x20padding:\x206px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2013px\x20!important;\x0a\x20\x20\x20\x20line-height:\x2014px\x20!important;\x0a\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20top:\x20auto\x20!important;\x0a\x20\x20\x20\x20bottom:\x2012px\x20!important;\x0a\x20\x20\x20\x20left:\x2012px\x20!important;\x0a\x20\x20\x20\x20right:\x20auto\x20!important;\x0a\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20transform:\x20none\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-text-header{\x0a\x20\x20\x20\x20color:\x20#fff\x20!important;\x0a\x20\x20\x20\x20font-size:\x201.8rem\x20!important;\x0a\x20\x20\x20\x20font-weight:\x20600\x20!important;\x0a\x20\x20\x20\x20line-height:\x201.2\x20!important;\x0a\x20\x20\x20\x20margin-bottom:4px\x0a\x20\x20}\x0a\x0a\x20\x20@media\x20screen\x20and\x20(max-height:\x20450px)\x20{\x0a\x20\x20\x20\x20.sidenav\x20{\x20padding-top:\x2015px\x20!important;\x20}\x0a\x20\x20\x20\x20.sidenav\x20a\x20{\x20font-size:\x2018px\x20!important;\x20}\x0a\x20\x20}\x0a\x0a\x20\x20.f-section-title-text{\x0a\x20\x20\x20\x20color:\x20#fff\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x2010px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2018px\x20!important;\x0a\x20\x20\x20\x20font-weight:\x20700\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-div-support-section{\x0a\x20\x20\x20\x20padding-top:1rem\x20!important;\x0a\x20\x20\x20\x20padding-bottom:1rem\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-text-white{\x0a\x20\x20\x20\x20color:\x20white\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-spacer{\x0a\x20\x20\x20\x20padding-top:8px\x20!important;\x0a\x20\x20}\x0a"),
  document[_0x1f0c14(0x1d6)][_0x1f0c14(0x150)](newStyle);
showButton && document[_0x1f0c14(0x1db)][_0x1f0c14(0x150)](newElement);
newElement["innerHTML"] =
  _0x1f0c14(0x19c) +
  formType +
  "</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Formly\x20Script\x20Info</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>Script\x20URL:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>" +
  scriptSrcAdded +
  _0x1f0c14(0xca) +
  scriptLocation +
  _0x1f0c14(0x16a) +
  (isMultistepOnFormElement ? passIcon : failIcon) +
  _0x1f0c14(0xe7) +
  (formStepLength > 0x0 ? passIcon : failIcon) +
  "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Number\x20of\x20steps:\x20" +
  formStepLength +
  _0x1f0c14(0x128) +
  (nextBtn ? passIcon : failIcon) +
  _0x1f0c14(0x1cb) +
  (isNextBtnOnSubmit ? failIcon : passIcon) +
  _0x1f0c14(0x10f) +
  (backBtn ? passIcon : failIcon) +
  _0x1f0c14(0x136) +
  (isBackBtnOnSubmit ? failIcon : passIcon) +
  _0x1f0c14(0x172) +
  (backBtn ? passIcon : failIcon) +
  "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Submit\x20button\x20attribute\x20IS\x20on\x20Form\x20Submit\x20Button\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
  (isSubmitBtnOnSubmit ? passIcon : failIcon) +
  _0x1f0c14(0xd5) +
  (progressBarAttr && progressIndicatorAttr
    ? _0x1f0c14(0x1d9) + passIcon + "</strong>"
    : "") +
  _0x1f0c14(0x1ab) +
  (customProgressAttr ? _0x1f0c14(0x19f) + passIcon + _0x1f0c14(0x11f) : "") +
  _0x1f0c14(0x1ab) +
  (cardDivAttr ? _0x1f0c14(0x12d) + passIcon + "</strong>" : "") +
  _0x1f0c14(0x1ab) +
  (currentStepAttr ? _0x1f0c14(0x18a) + passIcon + _0x1f0c14(0x11f) : "") +
  _0x1f0c14(0x1ab) +
  (totalStepAttr ? _0x1f0c14(0x18d) + passIcon + "</strong>" : "") +
  _0x1f0c14(0x1ab) +
  (enterAttr
    ? "<strong\x20class=\x22f-text-white\x22>Press\x20\x22Enter\x22\x20To\x20Progress\x20" +
      passIcon +
      _0x1f0c14(0x11f)
    : "") +
  "\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
  (submitAttr ? _0x1f0c14(0x1df) + passIcon + _0x1f0c14(0x11f) : "") +
  _0x1f0c14(0x1ab) +
  (radioSkipAttr ? _0x1f0c14(0xaf) + passIcon + _0x1f0c14(0x11f) : "") +
  "\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
  (customCheckboxAttr ? _0x1f0c14(0x108) + passIcon + _0x1f0c14(0x11f) : "") +
  "\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
  (recapatchaAttr ? _0x1f0c14(0x19e) + passIcon + _0x1f0c14(0x11f) : "") +
  _0x1f0c14(0x1b2);
function openNav() {
  const _0xf3a284 = _0x1f0c14;
  (document[_0xf3a284(0x1c8)](_0xf3a284(0xaa))[_0xf3a284(0x15c)][
    _0xf3a284(0xe1)
  ] = _0xf3a284(0x1bf)),
    (document[_0xf3a284(0x1c8)](_0xf3a284(0xaa))[_0xf3a284(0x15c)][
      _0xf3a284(0x1f4)
    ] = "12px");
}
function closeNav() {
  const _0x3ed1fe = _0x1f0c14;
  (document[_0x3ed1fe(0x1c8)](_0x3ed1fe(0xaa))[_0x3ed1fe(0x15c)]["width"] =
    "0"),
    (document["getElementById"](_0x3ed1fe(0xaa))["style"][_0x3ed1fe(0x1f4)] =
      _0x3ed1fe(0x1bb));
}
