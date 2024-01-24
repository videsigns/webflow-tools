//24th Jan 2023
//Bug fix
//1. Recurring input issue on select and textarea

const _0x1bf583 = _0xd5f3;
(function (_0x488321, _0x304af1) {
  const _0x271c1e = _0xd5f3,
    _0x5bff95 = _0x488321();
  while (!![]) {
    try {
      const _0x20bfb4 =
        parseInt(_0x271c1e(0x109)) / 0x1 +
        -parseInt(_0x271c1e(0x16b)) / 0x2 +
        (-parseInt(_0x271c1e(0x141)) / 0x3) *
          (-parseInt(_0x271c1e(0x1af)) / 0x4) +
        parseInt(_0x271c1e(0x15b)) / 0x5 +
        (parseInt(_0x271c1e(0x14a)) / 0x6) *
          (-parseInt(_0x271c1e(0x112)) / 0x7) +
        -parseInt(_0x271c1e(0x198)) / 0x8 +
        (-parseInt(_0x271c1e(0x8a)) / 0x9) * (parseInt(_0x271c1e(0x1d8)) / 0xa);
      if (_0x20bfb4 === _0x304af1) break;
      else _0x5bff95["push"](_0x5bff95["shift"]());
    } catch (_0x39bbd0) {
      _0x5bff95["push"](_0x5bff95["shift"]());
    }
  }
})(_0x3ae5, 0x90817);
let x = 0x0,
  curStep = 0x0,
  steps = $("[data-form=\x22step\x22]"),
  progressbarClone = $(_0x1bf583(0x142))[_0x1bf583(0xe3)](),
  progressbar,
  countCard = !![],
  weightedSelection = $("[data-weighted-selection]")[_0x1bf583(0x1a1)](
    _0x1bf583(0x128),
  ),
  weightedSelectionRange = $(_0x1bf583(0x8f))[_0x1bf583(0x1a1)](
    _0x1bf583(0x1e0),
  ),
  selectMultiple = $(_0x1bf583(0xc8))[_0x1bf583(0x1a1)](_0x1bf583(0xe6)),
  customError = $(_0x1bf583(0x1f4))["data"]("custom-error-message"),
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
  reinitIX = $("[data-reinit]")[_0x1bf583(0x1a1)](_0x1bf583(0x12b)),
  textareaLength = 0x0,
  textInputLength = 0x0,
  emailInputLength = 0x0,
  selectInputLength = 0x0,
  checkboxInputLength = 0x0,
  filledInput = [],
  savedFilledInput = [],
  memory = $(_0x1bf583(0x96))[_0x1bf583(0x1a1)](_0x1bf583(0x116)),
  quiz = $(_0x1bf583(0x17c))[_0x1bf583(0x1a1)](_0x1bf583(0x104)),
  progress = 0x0;
const urlFormly = new URL(window[_0x1bf583(0xd1)][_0x1bf583(0x12c)]);
let _params = $("[data-query-param]")[_0x1bf583(0x1a1)]("query-param"),
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
  logicExtra = $(_0x1bf583(0x1f3))[_0x1bf583(0x1a1)]("logic-extra"),
  oldSubmitText = $(_0x1bf583(0x1bc))[_0x1bf583(0x114)](),
  oldResetText = $(_0x1bf583(0x19f))["text"](),
  formReset = $(_0x1bf583(0x1f3))["data"](_0x1bf583(0x195)),
  successCard = "",
  redirectTo = "",
  totalSteps = 0x0,
  checkCount = 0x0,
  resetDelay = $(_0x1bf583(0xbe))[_0x1bf583(0x1a1)]("reset-delay")
    ? $(_0x1bf583(0xbe))[_0x1bf583(0x1a1)](_0x1bf583(0xd6))
    : 0x7d0,
  redirectDelay = $("[data-redirect-delay]")["data"]("redirect-delay")
    ? $(_0x1bf583(0x13a))[_0x1bf583(0x1a1)]("redirect-delay")
    : 0x7d0,
  newTab = !![],
  unfilledArr = [],
  phoneFormat = $("[data-form=\x22multistep\x22]")[_0x1bf583(0x1a1)](
    _0x1bf583(0xff),
  ),
  scrollToTop = $(_0x1bf583(0x1f3))[_0x1bf583(0x1a1)](_0x1bf583(0x192)),
  conditionalResult =
    $("[data-conditional-result]")[_0x1bf583(0x1a1)](_0x1bf583(0x90)) ===
    _0x1bf583(0x168),
  scrollTopOffset = parseInt($(_0x1bf583(0x1f3))["data"]("scroll-top-offset")),
  notRobot = !![],
  all_data = [];
const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
savedFilledInput = JSON[_0x1bf583(0x17d)](
  localStorage[_0x1bf583(0x1b3)](_0x1bf583(0x190)),
);
var ogCloneArr = [];
$(_0x1bf583(0x171))[_0x1bf583(0x1e5)](function () {
  const _0x27abd1 = _0x1bf583;
  ogCloneArr[_0x27abd1(0xaa)]({
    name: $(this)[_0x27abd1(0x1a1)](_0x27abd1(0xe3)),
    element: $(this)[_0x27abd1(0xe3)](!![]),
    display: $(
      _0x27abd1(0x1c1) + $(this)[_0x27abd1(0x1a1)](_0x27abd1(0xe3)) + "\x22]",
    )
      ["eq"](0x0)
      [_0x27abd1(0xe3)](!![]),
  });
});
$(_0x1bf583(0xa4))["length"] > 0x0 && (notRobot = ![]);
function recaptcha(_0x4fb4f0) {
  notRobot = !![];
}
$("[data-count-card]")[_0x1bf583(0x1b0)] > 0x0 &&
  (countCard = $(_0x1bf583(0x133))["data"](_0x1bf583(0x11b)));
$(_0x1bf583(0x106))[_0x1bf583(0xc0)](),
  $(progressbarClone)[_0x1bf583(0x1de)](_0x1bf583(0x164)),
  $(_0x1bf583(0x1d3))[_0x1bf583(0xbb)]()["remove"](),
  $(_0x1bf583(0x1bc))["hide"](),
  $("[data-form-ms=\x22submit-btn\x22]")[_0x1bf583(0xc0)](),
  steps[_0x1bf583(0x1e5)](function () {
    const _0x4e3dbc = _0x1bf583;
    $("[data-form=\x22progress\x22]")[_0x4e3dbc(0x115)](
      progressbarClone["clone"](!![], !![]),
    );
  }),
  $(_0x1bf583(0xb9))[_0x1bf583(0xc0)]();
countCard
  ? ((curStep = curStep + 0x1),
    (totalSteps = steps[_0x1bf583(0x1b0)]),
    $(_0x1bf583(0x8c))["text"](totalSteps))
  : ($(steps[x])[_0x1bf583(0x1a1)](_0x1bf583(0x1ac))
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    (totalSteps = $("[data-form=\x22step\x22]:not([data-card=\x22true\x22])")[
      _0x1bf583(0x1b0)
    ]),
    $(_0x1bf583(0x8c))["text"](totalSteps),
    $("[data-form=\x22step\x22][data-card]")["each"](function () {
      const _0x210787 = _0x1bf583;
      $($(_0x210787(0x142))[$(this)[_0x210787(0x10d)]()])[_0x210787(0xc0)]();
    }));
function _0x3ae5() {
  const _0x1bba1d = [
    "[data-input-field]",
    "ms-field",
    "children",
    "[data-display-input-wrapper=\x22",
    "data-show-if",
    "[data-reset-delay]",
    "focus",
    "hide",
    "<strong\x20class=\x22f-text-white\x22>Current\x20Step\x20Text\x20",
    "<br>Data\x20Go\x20To\x20=\x20",
    "innerHTML",
    "remove",
    "[data-cms-select=input]",
    "select",
    "Inside\x20<head>\x20tag",
    "[data-select-multiple]",
    "[data-cms-select=text]",
    "head",
    "min-character",
    ".w-checkbox-input",
    "edit-step",
    ":input[required]",
    "dispatchEvent",
    "FormlyLogic\x20enabled",
    "location",
    "ix2",
    "phone-autoformat",
    "<strong\x20class=\x22f-text-white\x22>Press\x20\x22Enter\x22\x20To\x20Progress\x20",
    "data-input-field",
    "reset-delay",
    ":input[type=\x22number\x22][required]",
    "<option>",
    "backTo",
    "</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Formly\x20Script\x20Info</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>Script\x20URL:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>",
    "parents",
    ":input[type=\x22text\x22]",
    "[type=\x22checkbox\x22]",
    "not",
    "\x22][data-progressive-input-value=\x22",
    "[data-success-card=\x22",
    "trigger",
    "html,\x20body",
    "clone",
    "</strong>",
    "[data-card=\x22true\x22]",
    "select-multiple",
    "toLowerCase",
    "[data-cms-select=cms]",
    "<strong\x20class=\x22f-text-white\x22>Automatic\x20Progress\x20Indicators\x20",
    ":input[type=\x22url\x22]",
    "[data-radio-skip=\x22true\x22]",
    "disabled",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Powerups</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "data-form",
    "field",
    "last",
    "width",
    "startsWith",
    "[data-progressive-target]",
    "parentNode",
    "clickable",
    "input:radio[required]",
    "style",
    "every",
    ".w-radio-input",
    ".w-form-done",
    ":input[type=\x22checkbox\x22][required]:checked",
    "input",
    "debug-mode",
    "createElement",
    "phone-validation",
    "data-skip-to",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>5.\x20Submit\x20Buttons:\x20data-form=next-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Submit\x20button\x20present?\x20",
    "form[data-form=\x22multistep\x22]\x20:input",
    ":input[type=\x22checkbox\x22][required]:not(:checked)",
    "quiz",
    "new-tab",
    "[data-text=\x22error-message\x22]",
    "input:checkbox",
    "[data-clickable-all]",
    "388874hXSZgI",
    "35%",
    "split",
    "\x0a\x20\x20<button\x20class=\x22f-openbtn\x22\x20onclick=\x22openNav()\x22>\x0a\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x2220px\x22\x20height=\x2220px\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M11\x2021h-1l1-7H7.5c-.88\x200-.33-.75-.31-.78C8.48\x2010.94\x2010.42\x207.54\x2013.01\x203h1l-1\x207h3.51c.4\x200\x20.62.19.4.66C12.97\x2017.55\x2011\x2021\x2011\x2021\x22></path>\x0a\x20\x20\x20\x20</svg>\x20Check\x20Form\x0a\x20\x20</button>\x0a\x20\x20<div\x20id=\x22f-mySidenav\x22\x20class=\x22f-sidenav\x22>\x0a\x20\x20\x20\x20<a\x20href=\x22javascript:void(0)\x22\x20class=\x22f-closebtn\x22\x20onclick=\x22closeNav()\x22>&times;</a>\x0a\x20\x20\x20\x20<div\x20class=\x22f-fc-main-content\x22>\x0a\x20\x20\x20\x20\x20\x20<h4\x20class=\x22f-text-header\x22>Formly\x20Support</h4>\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20If\x20you\x20have\x20spotted\x20a\x20bug\x20or\x20require\x20extra\x20support,\x20please\x20reach\x20out\x20to\x20us\x20via\x20Slack\x20or\x20email\x20us\x20at\x20developer@videsigns.uk.\x0a\x20\x20\x20\x20\x20\x20</p>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Form\x20Type</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>",
    "index",
    "clicked\x20enter",
    "metaKey",
    "select:not([data-prefill=\x22false\x22])",
    "[data-clone-wrapper]",
    "964026MhjNtt",
    ":input[type=\x22tel\x22][required]",
    "val",
    "append",
    "memory",
    "[data-form-ms=\x22submit-btn\x22]",
    "radio",
    "ctrlKey",
    "[data-display-input]",
    "count-card",
    "enter",
    "[data-btn=\x22check\x22]",
    "closest",
    "Before\x20&lt;/body&gt;\x20tag",
    ":input[type=\x22email\x22]",
    "addClass",
    "\x0a\x20\x20.f-icon-embed-xxsmall-2\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#ff3232\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x20\x20.f-icon-embed-xxsmall\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#57ff4b\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20{\x0a\x20\x20\x20\x20height:\x20100%\x20!important;\x0a\x20\x20\x20\x20width:\x200;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20z-index:\x20999999999999\x20!important;\x0a\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20background-color:\x20#081019\x20!important;\x0a\x20\x20\x20\x20overflow-x:\x20hidden\x20!important;\x0a\x20\x20\x20\x20padding-top:\x2060px\x20!important;\x0a\x20\x20\x20\x20transition:\x200.5s\x20!important;\x0a\x20\x20\x20\x20font-size:\x2015px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73)\x20!important;\x0a\x20\x20\x20\x20font-family:system-ui\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-section-title-text,\x20.f-support-text,\x20.f-openbtn{\x0a\x20\x20\x20\x20font-size:\x2015px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73);\x0a\x20\x20\x20\x20font-family:system-ui\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20p,\x20.f-sidenav\x20strong\x20{\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20space-between\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x204px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73);\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20.f-closebtn\x20{\x0a\x20\x20\x20\x20position:\x20absolute\x20!important;\x0a\x20\x20\x20\x20top:\x2025px\x20!important;\x0a\x20\x20\x20\x20right:\x2025px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2036px\x20!important;\x0a\x20\x20\x20\x20margin-left:\x2050px\x20!important;\x0a\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20color:\x20#e7e7e7\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-core-setup\x20{\x0a\x20\x20\x20\x20padding:\x2012px\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x2011px\x20!important;\x0a\x20\x20\x20\x20border-radius:\x206px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20#f-main\x20{\x0a\x20\x20\x20\x20transition:\x20margin-left\x20.5s\x20!important;\x0a\x20\x20\x20\x20padding:\x2020px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-main-content\x20{\x0a\x20\x20\x20\x20transition:\x20margin-left\x20.5s\x20!important;\x0a\x20\x20\x20\x20padding:\x2020px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-form-step\x20{\x0a\x20\x20\x20\x20padding-left:\x2010px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-openbtn\x20{\x0a\x20\x20\x20\x20white-space:\x20nowrap\x20!important;\x0a\x20\x20\x20\x20cursor:\x20pointer\x20!important;\x0a\x20\x20\x20\x20box-shadow:\x200\x200\x200\x201px\x20rgba(0,\x200,\x200,\x20.1),\x200\x201px\x203px\x20rgba(0,\x200,\x200,\x20.1)\x20!important;\x0a\x20\x20\x20\x20visibility:\x20visible\x20!important;\x0a\x20\x20\x20\x20z-index:\x2099\x20!important;\x0a\x20\x20\x20\x20color:\x20#e7e7e7\x20!important;\x0a\x20\x20\x20\x20opacity:\x201\x20!important;\x0a\x20\x20\x20\x20width:\x20auto\x20!important;\x0a\x20\x20\x20\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20background-color:\x20#1e1e1e\x20!important;\x0a\x20\x20\x20\x20border-radius:\x203px\x20!important;\x0a\x20\x20\x20\x20margin:\x200\x20!important;\x0a\x20\x20\x20\x20padding:\x206px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2013px\x20!important;\x0a\x20\x20\x20\x20line-height:\x2014px\x20!important;\x0a\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20top:\x20auto\x20!important;\x0a\x20\x20\x20\x20bottom:\x2012px\x20!important;\x0a\x20\x20\x20\x20left:\x2012px\x20!important;\x0a\x20\x20\x20\x20right:\x20auto\x20!important;\x0a\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20transform:\x20none\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-text-header{\x0a\x20\x20\x20\x20color:\x20#fff\x20!important;\x0a\x20\x20\x20\x20font-size:\x201.8rem\x20!important;\x0a\x20\x20\x20\x20font-weight:\x20600\x20!important;\x0a\x20\x20\x20\x20line-height:\x201.2\x20!important;\x0a\x20\x20\x20\x20margin-bottom:4px\x0a\x20\x20}\x0a\x0a\x20\x20@media\x20screen\x20and\x20(max-height:\x20450px)\x20{\x0a\x20\x20\x20\x20.sidenav\x20{\x20padding-top:\x2015px\x20!important;\x20}\x0a\x20\x20\x20\x20.sidenav\x20a\x20{\x20font-size:\x2018px\x20!important;\x20}\x0a\x20\x20}\x0a\x0a\x20\x20.f-section-title-text{\x0a\x20\x20\x20\x20color:\x20#fff\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x2010px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2018px\x20!important;\x0a\x20\x20\x20\x20font-weight:\x20700\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-div-support-section{\x0a\x20\x20\x20\x20padding-top:1rem\x20!important;\x0a\x20\x20\x20\x20padding-bottom:1rem\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-text-white{\x0a\x20\x20\x20\x20color:\x20white\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-spacer{\x0a\x20\x20\x20\x20padding-top:8px\x20!important;\x0a\x20\x20}\x0a",
    "[data-show-if]",
    "clicked",
    "https://webflow.com/api/v1/form/",
    "value",
    "<span\x20class=\x22f-icon-embed-xxsmall-2\x20w-embed\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--carbon\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2032\x2032\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M16\x202C8.2\x202\x202\x208.2\x202\x2016s6.2\x2014\x2014\x2014s14-6.2\x2014-14S23.8\x202\x2016\x202m5.4\x2021L16\x2017.6L10.6\x2023L9\x2021.4l5.4-5.4L9\x2010.6L10.6\x209l5.4\x205.4L21.4\x209l1.6\x201.6l-5.4\x205.4l5.4\x205.4z\x22></path></svg></span>",
    "weighted-selection",
    "radio-delay",
    "<span\x20class=\x22f-icon-embed-xxsmall\x20w-embed\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010s10-4.48\x2010-10S17.52\x202\x2012\x202m-2\x2015l-5-5l1.41-1.41L10\x2014.17l7.59-7.59L19\x208z\x22></path></svg></span>",
    "reinit",
    "href",
    "select[name=\x22",
    ":input[type=\x22checkbox\x22]",
    "input:radio[name=\x22",
    "submit",
    "[data-text=\x22total-weight\x22]",
    "[data-progressive-target=\x22",
    "[data-count-card]",
    "[data-clone-input-wrapper=\x22",
    "[data-display]",
    "display",
    "redirect",
    "[data-progressive-input]:not(:visible)",
    "prop",
    "[data-redirect-delay]",
    "[data-display-input=\x22",
    "<br>Data\x20Answer\x20=\x20",
    "filter",
    "relationship-",
    "</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Attributes</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>1.\x20Form:\x20data-form=multistep\x20",
    "css",
    "9QJTMdx",
    "[data-form=\x22progress-indicator\x22]",
    ":input[type=\x22email\x22][required]",
    ":input[type=\x22url\x22][required]",
    "forEach",
    "PASS",
    "ajaxComplete",
    "\x22][value=\x22",
    "fadeIn",
    "6YaATvc",
    "[data-index=\x22",
    "success",
    "[data-form=\x22remove-clone\x22]",
    "w--redirected-checked",
    "keypress",
    "body",
    "multistep",
    "[data-answer=\x22",
    ":input[type=\x22file\x22]",
    "<div\x20data-range=\x22selection\x22\x20style=\x22display:none\x20!important\x22>",
    "appendChild",
    "\x22]\x20textarea",
    "click",
    "search",
    "[data-selection=\x22",
    "find",
    "4369385XDeAoO",
    "div",
    "checkbox",
    "0.4",
    ":input[type=\x22password\x22]",
    "textarea",
    "[data-form=\x22custom-progress-indicator\x22]",
    "answer",
    "<strong\x20class=\x22f-text-white\x22>Custom\x20Progress\x20Indicators\x20",
    "current",
    "siblings",
    "padding",
    "\x22]\x20select",
    "AND",
    "[data-clone=\x22",
    "name",
    "1238686aagJlr",
    "url",
    "input[type=\x22submit\x22]",
    "[data-form=\x22next-btn\x22][data-submit-show]",
    "textarea[name=\x22",
    "checked",
    "[data-clone]",
    "input[type=\x22email\x22]:visible",
    "clickable-all",
    "progressive-input",
    "[data-clone-input=\x22",
    "file",
    "<strong\x20class=\x22f-text-white\x22>Intro\x20Cards\x20Or\x20Steps\x20Without\x20Inputs\x20",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>4.\x20Back\x20Buttons:\x20data-form=next-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Back\x20button\x20present?\x20",
    "[data-form=\x22next-btn\x22][type=\x22submit\x22]",
    "data-name",
    ":input[type=\x22checkbox\x22]:checked",
    "[data-quiz]",
    "parse",
    "input[autofocus]",
    ":checked",
    "[data-go-to]",
    "[data-text=\x22current-step\x22]",
    "data-radio-delay",
    "[data-radio-skip]:visible",
    "test",
    "[data-form=\x22back-btn\x22]",
    "</div>",
    "trim",
    "FAIL",
    "stringify",
    "[data-selection=\x22other\x22]",
    "[data-enter=\x22true\x22]",
    ":input",
    ":input[type=\x22time\x22]",
    "[data-progressive-input]",
    "[data-form=\x22step\x22]",
    "filledInput",
    "[data-answer]",
    "scroll-top",
    "videsigns",
    "[data-selection]",
    "reset",
    "data-radio-skip",
    "click-addclass",
    "4476856UzuzBk",
    "input[name=\x22",
    "go-to",
    "span",
    "[data-radio-delay]",
    "getResponse",
    "none",
    "[data-btn=\x22reset\x22]",
    "[data-skip-to]",
    "data",
    "script[src=\x22",
    "inputName",
    "step",
    ":input[type=\x22date\x22]",
    "formly",
    "novalidate",
    "script",
    "<strong\x20class=\x22f-text-white\x22>Press\x20\x22⌘\x20+\x20Enter\x20\x22\x20To\x20Submit\x20",
    "f-mySidenav",
    ".active-answer-card",
    "card",
    "[data-clone-input-wrapper]",
    "textarea[required]",
    "1366052KPUuVj",
    "length",
    ":input[type=\x22file\x22][required]",
    "skipTo",
    "getItem",
    "input[type=\x22radio\x22]",
    "[data-form=\x22submit\x22]:visible",
    "<strong\x20class=\x22f-text-white\x22>Checkboxes\x20",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>3.\x20Next\x20Buttons:\x20data-form=back-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Next\x20button\x20present?\x20",
    "[type=\x22radio\x22]",
    "button",
    ":focus",
    "\x22][data-progressive-input-value=\x22*\x22]",
    "[data-form=\x22submit-btn\x22]",
    "[data-form=\x22remove-input-clone\x22]",
    "input[type=\x22radio\x22]:checked",
    "data-go-to",
    "BODY",
    "[data-display=\x22",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Back\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "[data-form=\x22next-btn\x22]",
    "[data-add-new-input]",
    "includes",
    "textarea[required]:visible",
    "[data-clickable]",
    "\x22]:not([data-prefill=\x22false\x22])",
    "[data-submit=\x22true\x22]",
    "getElementsByTagName",
    ":input[type=\x22text\x22][required]",
    "replace",
    "[data-input-index=\x22",
    "findIndex",
    "destroy",
    "add-new-input",
    "[data-display-wrapper=\x22",
    "[data-form=\x22progress\x22]",
    "skip-to",
    "type",
    "Please\x20wait...",
    "\x22]:checked",
    "10ePHQUV",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Next\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button\x20",
    "required",
    "querySelector",
    "active-answer-card",
    "slow",
    "removeClass",
    "_blank",
    "weighted-selection-range",
    "text",
    ":input[type=\x27radio\x27]:checked",
    "\x22]\x20input",
    "log",
    "each",
    "[data-selection-weight]",
    "join",
    ":input[type=\x22password\x22][required]",
    "[data-answer][data-radio-skip]:visible",
    "[data-click-addclass]",
    "parent",
    "selection",
    ":first",
    "[data-clone-input]",
    "wait",
    "submit-show",
    "select[required]",
    "selected",
    "[data-form=\x22multistep\x22]",
    "[data-custom-error-message]",
    "[data-btn=\x22edit\x22]",
    ":input[type=\x22checkbox\x22][required]",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Submit\x20button\x20attribute\x20IS\x20on\x20Form\x20Submit\x20Button\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "form[data-form=\x22multistep\x22]",
    "3408543agaXfg",
    "textarea[autofocus]",
    "[data-text=\x22total-steps\x22]",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Number\x20of\x20steps:\x20",
    "stopPropagation",
    "[data-weighted-selection-range]",
    "conditional-result",
    "[data-add-new]",
    "\x22]\x20[data-input-field^=\x22",
    "keydown",
    "Webflow",
    "[data-clone-wrapper=\x22",
    "[data-memory]",
    ":input[type=\x22date\x22][required]",
    "attr",
    "key",
    ":input[type=\x22time\x22][required]",
    "change",
    "tagName",
    "show",
    "[data-range]:contains(",
    "[data-checkbox]",
    "clone-input",
    "running",
    "radio-skip",
    "0px",
    "div.g-recaptcha",
    "setItem",
    "auto",
    "getElementById",
    "some",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>Script\x20Location:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>",
    "push",
    "input[type=\x22checkbox\x22]:visible",
    "block-domain",
    "textarea:focus",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a",
    "[data-callback=\x22recaptcha\x22]",
    "get",
    "[data-progressive-input=\x22",
    "<strong\x20class=\x22f-text-white\x22>ReCAPTCHA\x20",
    "preventDefault",
    "[data-display-index=\x22",
    "removeItem",
    "[data-input-field=\x22",
    "input-field",
    "[data-enter]",
  ];
  _0x3ae5 = function () {
    return _0x1bba1d;
  };
  return _0x3ae5();
}
(progressbar = $(_0x1bf583(0x1d3))[_0x1bf583(0xbb)]()),
  $(_0x1bf583(0x142))["on"](_0x1bf583(0x157), clickableIndicator),
  $(_0x1bf583(0x181))[_0x1bf583(0x1e1)](curStep),
  steps["hide"](),
  $("[data-success-card]")[_0x1bf583(0xc0)](),
  $(_0x1bf583(0x179))[_0x1bf583(0x1e5)](function () {
    const _0x36a275 = _0x1bf583;
    $(this)[_0x36a275(0x98)](_0x36a275(0x1d5), _0x36a275(0x1b9));
  });
function getParams() {
  const _0x407e44 = _0x1bf583;
  urlFormly["searchParams"][_0x407e44(0x145)](function (_0x598818, _0x26e9ca) {
    const _0x1c1088 = _0x407e44;
    searchQ[_0x1c1088(0xaa)]({ val: _0x598818, key: _0x26e9ca });
  });
}
function getSafe(_0x2b48fe, _0x36326d) {
  try {
    return _0x2b48fe();
  } catch (_0x121ea5) {
    return _0x36326d;
  }
}
function phoneAutoFormat(_0x174b03) {
  var _0x41721e = "";
  return function (_0x15a5ca) {
    const _0x1c48b4 = _0xd5f3;
    var _0x1f239e = "",
      _0x58afff = _0x15a5ca[_0x1c48b4(0x1cd)](/\D/g, ""),
      _0x25e384 = 0x0,
      _0x513666 = 0x0;
    while (
      _0x25e384 < _0x58afff[_0x1c48b4(0x1b0)] &&
      _0x513666 < _0x174b03[_0x1c48b4(0x1b0)]
    ) {
      _0x174b03[_0x513666] === "x"
        ? ((_0x1f239e += _0x58afff[_0x25e384]), _0x25e384++)
        : (_0x1f239e += _0x174b03[_0x513666]),
        _0x513666++;
    }
    if (_0x15a5ca[_0x1c48b4(0x1b0)] < _0x41721e[_0x1c48b4(0x1b0)]) {
      var _0x36c789 = _0x174b03["slice"](_0x513666);
      _0x1f239e += _0x36c789[_0x1c48b4(0x1cd)](/x/g, "");
    }
    return (_0x41721e = _0x1f239e), _0x1f239e;
  };
}
function validateURL(_0x4b1e20) {
  return urlPattern["test"](_0x4b1e20) ? !![] : ![];
}
quiz &&
  steps[_0x1bf583(0x1e5)](function () {
    const _0x588549 = _0x1bf583;
    $(this)[_0x588549(0xbb)]()[_0x588549(0x98)](_0x588549(0x196), !![]),
      $(this)["children"]()[_0x588549(0x98)](_0x588549(0x182), 0xfa);
  });
function disableBtn(_0x9678ff) {
  const _0x302bd7 = _0x1bf583;
  (fill = ![]),
    !customError &&
      ($(_0x302bd7(0x1c4))[_0x302bd7(0x140)]({
        opacity: _0x302bd7(0x15e),
        "pointer-events": _0x302bd7(0x19e),
      }),
      $(_0x302bd7(0x1c4))["addClass"]("disabled"),
      $("[data-form=\x22submit-btn\x22]")[_0x302bd7(0x140)]({
        opacity: _0x302bd7(0x15e),
        "pointer-events": _0x302bd7(0x19e),
      }),
      $(_0x302bd7(0x1bc))[_0x302bd7(0x121)](_0x302bd7(0xec)),
      $(_0x302bd7(0x117))[_0x302bd7(0x140)]({
        opacity: _0x302bd7(0x15e),
        "pointer-events": "none",
      }),
      $(_0x302bd7(0x117))[_0x302bd7(0x121)](_0x302bd7(0xec)));
}
function enableBtn() {
  const _0x481329 = _0x1bf583;
  (fill = !![]),
    $(_0x481329(0x1c4))[_0x481329(0x140)]({
      "pointer-events": _0x481329(0xa6),
      opacity: "1",
    }),
    $("[data-form=\x22next-btn\x22]")[_0x481329(0x1de)](_0x481329(0xec)),
    $(_0x481329(0x1bc))[_0x481329(0x140)]({
      "pointer-events": _0x481329(0xa6),
      opacity: "1",
    }),
    $(_0x481329(0x1bc))["removeClass"](_0x481329(0xec)),
    $(_0x481329(0x117))["css"]({
      "pointer-events": _0x481329(0xa6),
      opacity: "1",
    }),
    $(_0x481329(0x117))[_0x481329(0x1de)]("disabled");
}
function saveFilledInput() {
  const _0x301dd5 = _0x1bf583;
  $(_0x301dd5(0x102))
    ["not"]("[type=\x22submit\x22]")
    ["each"](function () {
      const _0x7cf584 = _0x301dd5;
      $(this)[_0x7cf584(0x98)](_0x7cf584(0x1d5)) === _0x7cf584(0x15d) ||
      $(this)[_0x7cf584(0x98)](_0x7cf584(0x1d5)) === _0x7cf584(0x118)
        ? $(this)[_0x7cf584(0x139)](_0x7cf584(0x170)) &&
          (filledInput[_0x7cf584(0xa8)](
            (_0x311b11) =>
              _0x311b11[_0x7cf584(0x1a3)] ===
              $(this)[_0x7cf584(0x98)](_0x7cf584(0x16a)),
          )
            ? ((filledInput = filledInput[_0x7cf584(0x13d)](
                (_0x163e79) =>
                  _0x163e79[_0x7cf584(0x1a3)] !==
                  $(this)[_0x7cf584(0x98)]("name"),
              )),
              $(this)[_0x7cf584(0x114)]() !== "" &&
                filledInput[_0x7cf584(0xaa)]({
                  inputName: $(this)["attr"](_0x7cf584(0x16a)),
                  value: $(this)[_0x7cf584(0x114)](),
                }))
            : $(this)[_0x7cf584(0x114)]() !== "" &&
              filledInput[_0x7cf584(0xaa)]({
                inputName: $(this)[_0x7cf584(0x98)]("name"),
                value: $(this)[_0x7cf584(0x114)](),
              }))
        : filledInput[_0x7cf584(0xa8)](
              (_0x343ccf) =>
                _0x343ccf[_0x7cf584(0x1a3)] ===
                $(this)[_0x7cf584(0x98)](_0x7cf584(0x16a)),
            )
          ? ((filledInput = filledInput[_0x7cf584(0x13d)](
              (_0x76a5d2) =>
                _0x76a5d2[_0x7cf584(0x1a3)] !==
                $(this)[_0x7cf584(0x98)](_0x7cf584(0x16a)),
            )),
            $(this)["val"]() !== "" &&
              filledInput[_0x7cf584(0xaa)]({
                inputName: $(this)["attr"](_0x7cf584(0x16a)),
                value: $(this)[_0x7cf584(0x114)](),
              }))
          : $(this)[_0x7cf584(0x114)]() !== "" &&
            filledInput[_0x7cf584(0xaa)]({
              inputName: $(this)[_0x7cf584(0x98)](_0x7cf584(0x16a)),
              value: $(this)["val"](),
            });
    }),
    localStorage[_0x301dd5(0xb5)](_0x301dd5(0x190)),
    localStorage[_0x301dd5(0xa5)](
      _0x301dd5(0x190),
      JSON[_0x301dd5(0x189)](filledInput),
    );
}
function scrollTop() {
  const _0x185773 = _0x1bf583;
  scrollToTop &&
    $(_0x185773(0xe2))["animate"](
      { scrollTop: $(_0x185773(0x1f3))["offset"]()["top"] - scrollTopOffset },
      0x3e8,
    );
}
function updateStep() {
  const _0x11f1b0 = _0x1bf583;
  scrollTop(),
    (skip = ![]),
    $(_0x11f1b0(0x161))[_0x11f1b0(0x1de)](_0x11f1b0(0xec));
  $(_0x11f1b0(0x1c8))[_0x11f1b0(0x1a1)](_0x11f1b0(0xf5)) &&
    (steps["find"](_0x11f1b0(0xce))["each"](function () {
      const _0xe9250d = _0x11f1b0;
      $(
        $(_0xe9250d(0x161))[
          $(this)[_0xe9250d(0xdb)](_0xe9250d(0x18f))[_0xe9250d(0x10d)]()
        ],
      ),
        $(this)[_0xe9250d(0x114)]() === "" && emptyInput++;
    }),
    emptyInput > 0x0
      ? $(_0x11f1b0(0x16d))[_0x11f1b0(0x121)](_0x11f1b0(0xec))
      : $("input[type=\x22submit\x22]")[_0x11f1b0(0x1de)](_0x11f1b0(0xec)));
  $("[data-form=\x22custom-progress-indicator\x22]")[_0x11f1b0(0x1de)](
    _0x11f1b0(0x164),
  ),
    $(_0x11f1b0(0x161))[_0x11f1b0(0x121)]("disabled"),
    $($(_0x11f1b0(0x161))[x])["addClass"](_0x11f1b0(0x164)),
    (selection = selections[_0x11f1b0(0x13d)](
      (_0x1a6dc1) => _0x1a6dc1[_0x11f1b0(0x1a4)] === x - 0x1,
    ));
  next &&
    (x = getSafe(() => selection[0x0]["skipTo"])
      ? parseInt(getSafe(() => selection[0x0][_0x11f1b0(0x1b2)]))
      : x);
  $("[data-answer]")[_0x11f1b0(0xc0)](), steps[_0x11f1b0(0xc0)]();
  reinitIX === !![] && window[_0x11f1b0(0x94)][_0x11f1b0(0x1d0)]();
  $(progressbar)["removeClass"](_0x11f1b0(0x164));
  for (i = 0x0; i <= x; i++) {
    countCard
      ? $(progressbar[i])[_0x11f1b0(0x121)](_0x11f1b0(0x164))
      : !$(steps[i])["data"](_0x11f1b0(0x1ac)) &&
        $(progressbar[i])["addClass"](_0x11f1b0(0x164));
  }
  reinitIX === !![]
    ? (window[_0x11f1b0(0x94)] &&
        window["Webflow"]["require"](_0x11f1b0(0xd2))["init"](),
      document[_0x11f1b0(0xcf)](new Event("readystatechange")),
      $(steps[x])["show"]())
    : $(steps[x])[_0x11f1b0(0x149)](_0x11f1b0(0x1dd));
  $(_0x11f1b0(0x1ab))[_0x11f1b0(0x1de)](_0x11f1b0(0x1dc));
  x === 0x0 &&
    !$(steps[x])["data"](_0x11f1b0(0x1ac)) &&
    ($(steps[x])[_0x11f1b0(0x15a)](_0x11f1b0(0x191))["show"](),
    $(steps[x])["find"](_0x11f1b0(0x191))[_0x11f1b0(0x121)](_0x11f1b0(0x1dc)));
  selection["length"] > 0x0
    ? ($(steps[x])
        ["find"](
          "[data-answer=\x22" + selection[0x0][_0x11f1b0(0x1f2)] + "\x22]",
        )
        ["show"](),
      $(steps[x])
        [_0x11f1b0(0x15a)](
          _0x11f1b0(0x152) + selection[0x0]["selected"] + "\x22]",
        )
        [_0x11f1b0(0x121)](_0x11f1b0(0x1dc)))
    : ($(steps[x])
        ["find"]("[data-answer=\x22" + answer + "\x22]")
        ["show"](),
      $(steps[x])
        [_0x11f1b0(0x15a)](_0x11f1b0(0x152) + answer + "\x22]")
        [_0x11f1b0(0x121)](_0x11f1b0(0x1dc)));
  if (x === 0x0)
    $("[data-form=\x22back-btn\x22]")[_0x11f1b0(0xc0)](),
      $(_0x11f1b0(0x1c4))["show"](),
      $(_0x11f1b0(0x1bc))[_0x11f1b0(0xc0)]();
  else {
    if (
      x === steps[_0x11f1b0(0x1b0)] - 0x1 ||
      $(steps[x])[_0x11f1b0(0x15a)](_0x11f1b0(0x1b5))[_0x11f1b0(0x1b0)] > 0x0
    ) {
      $("[data-form=\x22next-btn\x22]")["hide"]();
      if (
        $(steps[x])
          [_0x11f1b0(0x15a)](_0x11f1b0(0x16e))
          ["data"](_0x11f1b0(0x1f0))
      )
        $(steps[x])
          [_0x11f1b0(0x15a)]("[data-form=\x22next-btn\x22][data-submit-show]")
          ["show"]();
      else
        $(_0x11f1b0(0x1c4))["data"](_0x11f1b0(0x1f0)) &&
          $(_0x11f1b0(0x1c4))[_0x11f1b0(0x9d)]();
      $("[data-form=\x22submit-btn\x22]")[_0x11f1b0(0x9d)](),
        $(_0x11f1b0(0x117))[_0x11f1b0(0x9d)](),
        $(_0x11f1b0(0x185))[_0x11f1b0(0x9d)]();
    } else
      $(_0x11f1b0(0x1c4))[_0x11f1b0(0x9d)](),
        $("[data-form=\x22back-btn\x22]")[_0x11f1b0(0x9d)](),
        $(_0x11f1b0(0x1bc))[_0x11f1b0(0xc0)](),
        $(_0x11f1b0(0x117))[_0x11f1b0(0xc0)]();
  }
  $($(steps[x])["find"](_0x11f1b0(0x17e))[0x0])[_0x11f1b0(0xbf)](),
    $($(steps[x])[_0x11f1b0(0x15a)](_0x11f1b0(0x8b))[0x0])[_0x11f1b0(0xbf)](),
    validation();
  for (idx = 0x0; idx <= x; idx++) {
    $($(_0x11f1b0(0x161))[idx])["removeClass"](_0x11f1b0(0xec));
  }
}
function validateEmail(_0x161879, _0x234abb, _0x4b796b) {
  const _0x3f2800 = _0x1bf583;
  let _0x12bd6a = _0x161879[_0x3f2800(0x1c6)]("@")
    ? _0x161879["split"]("@")[0x1][_0x3f2800(0x10b)](".")[0x0]
    : [];
  dom = [];
  _0x234abb !== undefined &&
    _0x234abb[_0x3f2800(0x10b)](",")[_0x3f2800(0x145)](function (_0x429aeb) {
      const _0x29d746 = _0x3f2800;
      _0x429aeb["includes"](_0x12bd6a) && dom[_0x29d746(0xaa)](_0x12bd6a);
    });
  dom[_0x3f2800(0x1b0)] > 0x0 ? (domainAllowed = ![]) : (domainAllowed = !![]);
  var _0x70d0d7 = /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,20})?$/;
  console[_0x3f2800(0x1e4)](_0x70d0d7[_0x3f2800(0x184)](_0x161879)),
    !_0x70d0d7[_0x3f2800(0x184)](_0x161879) || !domainAllowed
      ? ((emailFilled = ![]),
        unfilledArr[_0x3f2800(0xaa)]({ input: _0x4b796b }))
      : (emailFilled = !![]);
}
function phoneValidation(_0x5c8fad, _0xb1f3a5, _0x41e99c) {
  if (phoneFormat) return _0xb1f3a5 >= _0x41e99c ? !![] : ![];
  else {
    if (_0xb1f3a5 >= _0x41e99c) return !![];
  }
}
function validation() {
  const _0x2a95a6 = _0x1bf583;
  $(steps[x])[_0x2a95a6(0x1a1)](_0x2a95a6(0x1ac)) && enableBtn();
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
    (textareaLength = $(steps[x])[_0x2a95a6(0x15a)](_0x2a95a6(0x1c7))[
      _0x2a95a6(0x1b0)
    ]),
    (textInputLength = $(steps[x])[_0x2a95a6(0x15a)](
      "input[type=\x22text\x22][required]:visible",
    )[_0x2a95a6(0x1b0)]),
    (selectInputLength = $(steps[x])[_0x2a95a6(0x15a)](
      "select[required]:visible",
    )[_0x2a95a6(0x1b0)]),
    (emailInputLength = $(steps[x])[_0x2a95a6(0x15a)](_0x2a95a6(0x172))[
      _0x2a95a6(0x1b0)
    ]),
    (checkboxInputLength = $(steps[x])[_0x2a95a6(0x15a)](_0x2a95a6(0xab))[
      "length"
    ]);
  textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0
    ? disableBtn()
    : enableBtn();
  checkCount = $(steps[x])[_0x2a95a6(0x1a1)]("checkbox")
    ? $(steps[x])[_0x2a95a6(0x1a1)]("checkbox")
    : $(steps[x])["find"](_0x2a95a6(0x9f))[_0x2a95a6(0x1b0)] > 0x0
      ? $(steps[x])
          [_0x2a95a6(0x15a)](_0x2a95a6(0x9f))
          [_0x2a95a6(0x1a1)](_0x2a95a6(0x15d))
      : 0x0;
  if (!logicExtra)
    $(steps[x])[_0x2a95a6(0x15a)](_0x2a95a6(0x18c))["is"](_0x2a95a6(0xdd)) &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])[_0x2a95a6(0x15a)](":input[type=\x22checkbox\x22]")[
          _0x2a95a6(0x1b0)
        ]
        ? $(steps[x])
            [_0x2a95a6(0x15a)](_0x2a95a6(0x12e))
            [_0x2a95a6(0x1e5)](function () {
              const _0x7f7394 = _0x2a95a6;
              $(this)["is"](_0x7f7394(0x17f))
                ? $(steps[x])[_0x7f7394(0x15a)](_0x7f7394(0x1f6))[
                    _0x7f7394(0x1b0)
                  ] < 0x1 &&
                  ((checkboxFilled = !![]),
                  resetInputErrorMessage($(this)["attr"](_0x7f7394(0x16a))))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0x7f7394(0xaa)]({
                    input: $(this)["attr"](_0x7f7394(0x16a)),
                  }));
            })
        : $(steps[x])[_0x2a95a6(0x15a)](_0x2a95a6(0x17b))[_0x2a95a6(0x1b0)] >=
            checkCount
          ? $(steps[x])[_0x2a95a6(0x15a)](_0x2a95a6(0x1f6))["length"] > 0x0
            ? $(steps[x])
                [_0x2a95a6(0x15a)](_0x2a95a6(0x1f6))
                [_0x2a95a6(0x1e5)](function () {
                  const _0xb74f5b = _0x2a95a6;
                  checkboxFilled = ![];
                  let _0x5c6b3c = $(steps[x])["find"](_0xb74f5b(0x1f6))[
                      "length"
                    ],
                    _0x32642e = $(steps[x])[_0xb74f5b(0x15a)](
                      ":input[type=\x22checkbox\x22][required]:checked",
                    )[_0xb74f5b(0x1b0)];
                  console[_0xb74f5b(0x1e4)](_0x5c6b3c - _0x32642e),
                    _0x5c6b3c - _0x32642e === 0x0
                      ? ((checkboxFilled = !![]),
                        resetInputErrorMessage(
                          $(steps[x])
                            [_0xb74f5b(0x15a)](_0xb74f5b(0x12e))
                            [_0xb74f5b(0x98)]("name"),
                        ))
                      : ((checkboxFilled = ![]),
                        $(steps[x])
                          [_0xb74f5b(0x15a)](_0xb74f5b(0x103))
                          [_0xb74f5b(0x1e5)](function () {
                            const _0x3df148 = _0xb74f5b;
                            unfilledArr[_0x3df148(0xaa)]({
                              input: $(this)[_0x3df148(0x98)]("name"),
                            });
                          }));
                })
            : ((checkboxFilled = !![]),
              resetInputErrorMessage(
                $(steps[x])
                  [_0x2a95a6(0x15a)](_0x2a95a6(0x12e))
                  [_0x2a95a6(0x98)](_0x2a95a6(0x16a)),
              ))
          : ((checkboxFilled = ![]),
            $(steps[x])
              ["find"](_0x2a95a6(0x1f6))
              [_0x2a95a6(0x1e5)](function () {
                const _0x3d7219 = _0x2a95a6;
                $(this)["not"](_0x3d7219(0x17f)) &&
                  unfilledArr[_0x3d7219(0xaa)]({
                    input: $(this)[_0x3d7219(0x98)]("name"),
                  });
              }),
            unfilledArr["push"]({
              input: $(steps[x])
                ["find"](_0x2a95a6(0x12e))
                [_0x2a95a6(0x98)](_0x2a95a6(0x16a)),
            }))),
      $(steps[x])
        [_0x2a95a6(0x15a)](_0x2a95a6(0xf6))
        [_0x2a95a6(0x1e5)](function (_0x2b23d1) {
          const _0x1c2653 = _0x2a95a6;
          var _0xe77b7e = $(this)[_0x1c2653(0x98)](_0x1c2653(0x16a));
          $(_0x1c2653(0x12f) + _0xe77b7e + _0x1c2653(0x1d7))[
            _0x1c2653(0x1b0)
          ] == 0x0
            ? (!empReqRadio[_0x1c2653(0x15a)](
                (_0xbb714c) => _0xbb714c[_0x1c2653(0xfc)] === _0x2b23d1,
              ) && empReqRadio[_0x1c2653(0xaa)]({ input: _0x2b23d1 }),
              unfilledArr[_0x1c2653(0xaa)]({ input: $(this)["attr"]("name") }))
            : (empReqRadio = empReqRadio[_0x1c2653(0x13d)](
                (_0xd7274e) => _0xd7274e["input"] !== _0x2b23d1,
              )),
            empReqRadio[_0x1c2653(0x1b0)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x2a95a6(0x1cc))
        ["each"](function (_0x2d6c96) {
          const _0x47d6dd = _0x2a95a6;
          let _0x1564fc = $(this)[_0x47d6dd(0x114)]()[_0x47d6dd(0x1b0)],
            _0x1ccdad = $(this)["data"](_0x47d6dd(0xcb))
              ? $(this)[_0x47d6dd(0x1a1)](_0x47d6dd(0xcb))
              : 0x0;
          $(this)["val"]() !== "" && _0x1564fc >= _0x1ccdad
            ? (empReqInput = empReqInput["filter"](
                (_0x218db3) => _0x218db3[_0x47d6dd(0xfc)] !== _0x2d6c96,
              ))
            : (!empReqInput[_0x47d6dd(0x15a)](
                (_0x200de) => _0x200de[_0x47d6dd(0xfc)] === _0x2d6c96,
              ) && empReqInput[_0x47d6dd(0xaa)]({ input: _0x2d6c96 }),
              unfilledArr["push"]({
                input: $(this)[_0x47d6dd(0x98)](_0x47d6dd(0x16a)),
              })),
            empReqInput[_0x47d6dd(0x1b0)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x2a95a6(0x1e8))
        ["each"](function (_0x128f50) {
          const _0x1ba900 = _0x2a95a6;
          let _0x5eda62 = $(this)[_0x1ba900(0x114)]()[_0x1ba900(0x1b0)],
            _0x1ec3db = $(this)[_0x1ba900(0x1a1)](_0x1ba900(0xcb))
              ? $(this)[_0x1ba900(0x1a1)](_0x1ba900(0xcb))
              : 0x0;
          $(this)[_0x1ba900(0x114)]() !== "" && _0x5eda62 >= _0x1ec3db
            ? (empReqPassword = empReqPassword[_0x1ba900(0x13d)](
                (_0x10ea4e) => _0x10ea4e[_0x1ba900(0xfc)] !== _0x128f50,
              ))
            : (!empReqPassword[_0x1ba900(0x15a)](
                (_0x202fd6) => _0x202fd6[_0x1ba900(0xfc)] === _0x128f50,
              ) && empReqPassword["push"]({ input: _0x128f50 }),
              unfilledArr[_0x1ba900(0xaa)]({ input: $(this)["attr"]("name") })),
            empReqPassword["length"] === 0x0
              ? (passwordFilled = !![])
              : (passwordFilled = ![]);
        }),
      $(steps[x])
        [_0x2a95a6(0x15a)](_0x2a95a6(0x144))
        [_0x2a95a6(0x1e5)](function (_0x15f37c) {
          const _0x39e609 = _0x2a95a6;
          let _0x3cb056 = $(this)[_0x39e609(0x114)]()["length"],
            _0x1c28d4 = $(this)[_0x39e609(0x1a1)]("min-character")
              ? $(this)["data"](_0x39e609(0xcb))
              : 0x0;
          $(this)[_0x39e609(0x114)]() !== "" && _0x3cb056 >= _0x1c28d4
            ? (empReqTime = empReqTime["filter"](
                (_0xf3f295) => _0xf3f295["input"] !== _0x15f37c,
              ))
            : (!empReqTime[_0x39e609(0x15a)](
                (_0x543963) => _0x543963["input"] === _0x15f37c,
              ) && empReqUrl[_0x39e609(0xaa)]({ input: _0x15f37c }),
              unfilledArr[_0x39e609(0xaa)]({
                input: $(this)[_0x39e609(0x98)](_0x39e609(0x16a)),
              })),
            empReqTime["length"] === 0x0 &&
            validateURL($(this)[_0x39e609(0x114)]())
              ? ((timeFilled = !![]), console["log"](timeFilled))
              : (timeFilled = ![]);
        }),
      $(steps[x])
        [_0x2a95a6(0x15a)](_0x2a95a6(0x9a))
        ["each"](function (_0x10f7e4) {
          const _0x3e3682 = _0x2a95a6;
          let _0x3f12ce = $(this)[_0x3e3682(0x114)]()[_0x3e3682(0x1b0)],
            _0xdc447e = $(this)[_0x3e3682(0x1a1)](_0x3e3682(0xcb))
              ? $(this)["data"](_0x3e3682(0xcb))
              : 0x0;
          $(this)[_0x3e3682(0x114)]() !== "" && _0x3f12ce >= _0xdc447e
            ? (empReqUrl = empReqUrl[_0x3e3682(0x13d)](
                (_0x47b695) => _0x47b695[_0x3e3682(0xfc)] !== _0x10f7e4,
              ))
            : (!empReqUrl[_0x3e3682(0x15a)](
                (_0xecd778) => _0xecd778[_0x3e3682(0xfc)] === _0x10f7e4,
              ) && empReqUrl["push"]({ input: _0x10f7e4 }),
              unfilledArr[_0x3e3682(0xaa)]({
                input: $(this)["attr"](_0x3e3682(0x16a)),
              })),
            empReqUrl[_0x3e3682(0x1b0)] === 0x0 &&
            validateURL($(this)[_0x3e3682(0x114)]())
              ? ((urlFilled = !![]), console["log"](urlFilled))
              : (urlFilled = ![]);
        }),
      $(steps[x])
        [_0x2a95a6(0x15a)](_0x2a95a6(0x97))
        ["each"](function (_0x328011) {
          const _0x5a3a2a = _0x2a95a6;
          $(this)["val"]() !== ""
            ? (empReqDate = empReqDate[_0x5a3a2a(0x13d)](
                (_0x4f6cec) => _0x4f6cec[_0x5a3a2a(0xfc)] !== _0x328011,
              ))
            : (!empReqDate[_0x5a3a2a(0x15a)](
                (_0xee7e6c) => _0xee7e6c[_0x5a3a2a(0xfc)] === _0x328011,
              ) && empReqDate[_0x5a3a2a(0xaa)]({ input: _0x328011 }),
              unfilledArr["push"]({
                input: $(this)[_0x5a3a2a(0x98)](_0x5a3a2a(0x16a)),
              })),
            empReqDate[_0x5a3a2a(0x1b0)] === 0x0
              ? (dateFilled = !![])
              : (dateFilled = ![]);
        }),
      $(steps[x])
        [_0x2a95a6(0x15a)](_0x2a95a6(0x113))
        [_0x2a95a6(0x1e5)](function (_0x295562) {
          const _0x181af1 = _0x2a95a6;
          if ($(this)[_0x181af1(0x114)]() !== "") {
            let _0x5ecf3a = $(this)[_0x181af1(0x114)]()[_0x181af1(0x1b0)],
              _0x5215c3 = $(this)[_0x181af1(0x1a1)](_0x181af1(0xcb))
                ? $(this)[_0x181af1(0x1a1)](_0x181af1(0xcb))
                : 0x0;
            if ($(this)["data"](_0x181af1(0xd3))) {
              var _0x58e290 = phoneAutoFormat(
                $(this)[_0x181af1(0x1a1)]("phone-autoformat"),
              );
              $(this)[_0x181af1(0x114)](_0x58e290($(this)[_0x181af1(0x114)]()));
            }
            phoneValidation($(this)[_0x181af1(0x114)](), _0x5ecf3a, _0x5215c3)
              ? (empReqTel = empReqTel[_0x181af1(0x13d)](
                  (_0x1f0fd2) => _0x1f0fd2[_0x181af1(0xfc)] !== _0x295562,
                ))
              : empReqTel[_0x181af1(0xaa)]({ input: _0x295562 });
          } else
            !empReqTel[_0x181af1(0x15a)](
              (_0x23f305) => _0x23f305["input"] === _0x295562,
            ) && empReqTel[_0x181af1(0xaa)]({ input: _0x295562 }),
              unfilledArr[_0x181af1(0xaa)]({
                input: $(this)[_0x181af1(0x98)](_0x181af1(0x16a)),
              });
          empReqTel["length"] === 0x0 ? (telFilled = !![]) : (telFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x2a95a6(0x1b1))
        [_0x2a95a6(0x1e5)](function (_0x2b501f) {
          const _0x3f7c22 = _0x2a95a6;
          $(this)[_0x3f7c22(0x114)]() !== ""
            ? (empReqFile = empReqFile[_0x3f7c22(0x13d)](
                (_0x321c99) => _0x321c99[_0x3f7c22(0xfc)] !== _0x2b501f,
              ))
            : (!empReqFile[_0x3f7c22(0x15a)](
                (_0x325db4) => _0x325db4[_0x3f7c22(0xfc)] === _0x2b501f,
              ) && empReqFile[_0x3f7c22(0xaa)]({ input: _0x2b501f }),
              unfilledArr[_0x3f7c22(0xaa)]({
                input: $(this)[_0x3f7c22(0x98)](_0x3f7c22(0x16a)),
              })),
            empReqFile[_0x3f7c22(0x1b0)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x2a95a6(0x15a)](":input[type=\x22number\x22][required]")
        [_0x2a95a6(0x1e5)](function (_0x4530e5) {
          const _0x53033c = _0x2a95a6;
          let _0x1693f4 = $(this)["val"]()[_0x53033c(0x1b0)],
            _0x429c8b = $(this)[_0x53033c(0x1a1)](_0x53033c(0xcb))
              ? $(this)[_0x53033c(0x1a1)](_0x53033c(0xcb))
              : 0x0;
          $(this)[_0x53033c(0x114)]() !== "" && _0x1693f4 >= _0x429c8b
            ? (empReqNum = empReqNum[_0x53033c(0x13d)](
                (_0x52cd50) => _0x52cd50["input"] !== _0x4530e5,
              ))
            : (!empReqNum["find"](
                (_0x170204) => _0x170204["input"] === _0x4530e5,
              ) && empReqNum["push"]({ input: _0x4530e5 }),
              unfilledArr["push"]({ input: $(this)["attr"]("name") })),
            empReqNum["length"] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x2a95a6(0x15a)](_0x2a95a6(0x1f1))
        ["each"](function (_0x39002e) {
          const _0x2e2fab = _0x2a95a6;
          let _0x5d1ff6 = $(this)["val"]();
          _0x5d1ff6 === "" && (_0x5d1ff6 = null),
            _0x5d1ff6 != null
              ? (empReqSelect = empReqSelect[_0x2e2fab(0x13d)](
                  (_0x3f7920) => _0x3f7920["input"] !== _0x39002e,
                ))
              : (!empReqSelect[_0x2e2fab(0x15a)](
                  (_0x13a0eb) => _0x13a0eb[_0x2e2fab(0xfc)] === _0x39002e,
                ) && empReqSelect[_0x2e2fab(0xaa)]({ input: _0x39002e }),
                unfilledArr[_0x2e2fab(0xaa)]({
                  input: $(this)[_0x2e2fab(0x98)](_0x2e2fab(0x16a)),
                })),
            empReqSelect[_0x2e2fab(0x1b0)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x2a95a6(0x15a)](_0x2a95a6(0x1ae))
        [_0x2a95a6(0x1e5)](function (_0xaf3c82) {
          const _0x19fe61 = _0x2a95a6;
          let _0x4a1598 = $(this)["val"]()[_0x19fe61(0x1b0)],
            _0x555346 = $(this)[_0x19fe61(0x1a1)](_0x19fe61(0xcb))
              ? $(this)[_0x19fe61(0x1a1)]("min-character")
              : 0x0;
          $(this)[_0x19fe61(0x114)]() !== "" && _0x4a1598 >= _0x555346
            ? (empReqTextarea = empReqTextarea[_0x19fe61(0x13d)](
                (_0x211ceb) => _0x211ceb[_0x19fe61(0xfc)] !== _0xaf3c82,
              ))
            : (!empReqTextarea[_0x19fe61(0x15a)](
                (_0x27eb5b) => _0x27eb5b["input"] === _0xaf3c82,
              ) && empReqTextarea[_0x19fe61(0xaa)]({ input: _0xaf3c82 }),
              unfilledArr[_0x19fe61(0xaa)]({
                input: $(this)[_0x19fe61(0x98)](_0x19fe61(0x16a)),
              })),
            empReqTextarea["length"] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x2a95a6(0x15a)](_0x2a95a6(0x143))
        [_0x2a95a6(0x1e5)](function () {
          const _0x2bfebe = _0x2a95a6;
          $(this)[_0x2bfebe(0x114)]() !== ""
            ? validateEmail(
                $(this)[_0x2bfebe(0x114)](),
                $(this)[_0x2bfebe(0x1a1)]("block-domain"),
                $(this)[_0x2bfebe(0x98)]("name"),
              )
            : ((emailFilled = ![]),
              unfilledArr[_0x2bfebe(0xaa)]({
                input: $(this)[_0x2bfebe(0x98)](_0x2bfebe(0x16a)),
              }));
        });
  else {
    if ($(steps[x])["data"](_0x2a95a6(0x1ac)))
      (answer = $(steps[x])
        [_0x2a95a6(0x15a)](_0x2a95a6(0x180))
        [_0x2a95a6(0x1a1)]("go-to")),
        (selections = selections[_0x2a95a6(0x13d)](
          (_0x49167f) => _0x49167f[_0x2a95a6(0x1a4)] !== x,
        )),
        selections[_0x2a95a6(0xaa)]({ step: x, selected: answer });
    else
      $(steps[x])
        [_0x2a95a6(0x15a)](_0x2a95a6(0x1ab))
        [_0x2a95a6(0x1a1)](_0x2a95a6(0x1ac)) &&
        ((answer = $(steps[x])
          [_0x2a95a6(0x15a)](_0x2a95a6(0x1ab))
          [_0x2a95a6(0x1a1)]("go-to")),
        (selections = selections["filter"](
          (_0x38869b) => _0x38869b["step"] !== x,
        )),
        selections[_0x2a95a6(0xaa)]({ step: x, selected: answer }));
    $(steps[x])
      [_0x2a95a6(0x15a)](".active-answer-card")
      [_0x2a95a6(0x15a)](_0x2a95a6(0x18c))
      ["is"](_0x2a95a6(0xdd)) &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])[_0x2a95a6(0x15a)](_0x2a95a6(0x12e))[_0x2a95a6(0x1b0)]
        ? (console["log"]("test"),
          $(steps[x])
            ["find"](_0x2a95a6(0x12e))
            [_0x2a95a6(0x1e5)](function () {
              const _0x33175c = _0x2a95a6;
              $(this)["is"](_0x33175c(0x17f))
                ? $(steps[x])["find"](_0x33175c(0xce))["length"] < 0x1 &&
                  ((skipTo = undefined),
                  $(this)
                    [_0x33175c(0xdb)]("[data-skip-to]")
                    ["data"](_0x33175c(0x1d4)) &&
                    (skipTo = $(this)
                      ["parents"](_0x33175c(0x1a0))
                      [_0x33175c(0x1a1)](_0x33175c(0x1d4))),
                  $(this)
                    [_0x33175c(0xdb)](_0x33175c(0x180))
                    [_0x33175c(0x98)]("data-go-to") &&
                    ((answer = $(this)
                      [_0x33175c(0xdb)](_0x33175c(0x180))
                      [_0x33175c(0x98)](_0x33175c(0x1bf))),
                    (selections = selections[_0x33175c(0x13d)](
                      (_0x35248d) => _0x35248d[_0x33175c(0x1a4)] !== x,
                    )),
                    selections[_0x33175c(0xaa)]({ step: x, selected: answer }),
                    skipTo &&
                      (selections[_0x33175c(0xaa)]({
                        step: skipTo - 0x2,
                        selected: answer,
                      }),
                      (objIndex = selections["findIndex"](
                        (_0x335686) => _0x335686[_0x33175c(0x1a4)] === x,
                      )),
                      (selections[objIndex][_0x33175c(0x1b2)] =
                        parseInt(skipTo) - 0x1),
                      (selections[objIndex][_0x33175c(0xd9)] = x))),
                  (checkboxFilled = !![]),
                  $(steps[x])["find"](_0x33175c(0xfb))[_0x33175c(0x1b0)] >=
                    $(steps[x])[_0x33175c(0x15a)](_0x33175c(0x1f6))[
                      _0x33175c(0x1b0)
                    ] &&
                    resetInputErrorMessage(
                      $(steps[x])
                        [_0x33175c(0x15a)](_0x33175c(0x12e))
                        ["attr"](_0x33175c(0x16a)),
                    ))
                : ((checkboxFilled = ![]),
                  unfilledArr["push"]({
                    input: $(this)[_0x33175c(0x98)](_0x33175c(0x16a)),
                  }));
            }))
        : $(steps[x])
              ["find"](_0x2a95a6(0x1ab))
              [_0x2a95a6(0x15a)](_0x2a95a6(0x17b))["length"] >= checkCount
          ? ($(steps[x])
              [_0x2a95a6(0x15a)](".active-answer-card")
              [_0x2a95a6(0x15a)](":input[type=\x22checkbox\x22]")
              [_0x2a95a6(0xdb)](_0x2a95a6(0x180))
              ["attr"](_0x2a95a6(0x1bf)) &&
              ((skipTo = undefined),
              $(steps[x])
                ["find"](_0x2a95a6(0x1ab))
                [_0x2a95a6(0x15a)](":input[type=\x22checkbox\x22]")
                [_0x2a95a6(0xdb)]("[data-skip-to]")
                [_0x2a95a6(0x98)](_0x2a95a6(0x100)) &&
                (skipTo = $(steps[x])
                  [_0x2a95a6(0x15a)](_0x2a95a6(0x1ab))
                  ["find"](_0x2a95a6(0x17b))
                  [_0x2a95a6(0xdb)](_0x2a95a6(0x1a0))
                  [_0x2a95a6(0x98)](_0x2a95a6(0x100))),
              (answer = $(steps[x])
                [_0x2a95a6(0x15a)](".active-answer-card")
                ["find"](_0x2a95a6(0x12e))
                [_0x2a95a6(0xdb)]("[data-go-to]")
                ["attr"]("data-go-to")),
              (selections = selections["filter"](
                (_0x18d276) => _0x18d276[_0x2a95a6(0x1a4)] !== x,
              )),
              selections[_0x2a95a6(0xaa)]({ step: x, selected: answer }),
              skipTo &&
                ((selections = selections[_0x2a95a6(0x13d)](
                  (_0x41f574) => _0x41f574[_0x2a95a6(0x1a4)] !== skipTo - 0x2,
                )),
                selections[_0x2a95a6(0xaa)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x2a95a6(0x1cf)](
                  (_0x3f5052) => _0x3f5052[_0x2a95a6(0x1a4)] === x,
                )),
                console[_0x2a95a6(0x1e4)](objIndex),
                (selections[objIndex][_0x2a95a6(0x1b2)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x),
                console["log"](_0x2a95a6(0xa1)))),
            (checkboxFilled = !![]),
            $(steps[x])[_0x2a95a6(0x15a)](_0x2a95a6(0xfb))[_0x2a95a6(0x1b0)] >=
              $(steps[x])["find"](":input[type=\x22checkbox\x22][required]")[
                _0x2a95a6(0x1b0)
              ] &&
              resetInputErrorMessage(
                $(steps[x])
                  [_0x2a95a6(0x15a)](_0x2a95a6(0x12e))
                  [_0x2a95a6(0x98)](_0x2a95a6(0x16a)),
              ))
          : ((checkboxFilled = ![]),
            $(steps[x])
              [_0x2a95a6(0x15a)](_0x2a95a6(0x1f6))
              [_0x2a95a6(0x1e5)](function () {
                const _0x5c2867 = _0x2a95a6;
                $(this)[_0x5c2867(0xde)](_0x5c2867(0x17f)) &&
                  unfilledArr["push"]({
                    input: $(this)[_0x5c2867(0x98)]("name"),
                  });
              }))),
      $(steps[x])
        ["find"](_0x2a95a6(0x1ab))
        ["find"](_0x2a95a6(0xf6))
        [_0x2a95a6(0x1e5)](function (_0x17fa9a) {
          const _0x3766d8 = _0x2a95a6;
          var _0x3914ab = $(this)[_0x3766d8(0x98)](_0x3766d8(0x16a));
          $(_0x3766d8(0x12f) + _0x3914ab + "\x22]:checked")[_0x3766d8(0x1b0)] ==
          0x0
            ? (!empReqRadio["find"](
                (_0xa6e85f) => _0xa6e85f["input"] === _0x17fa9a,
              ) && empReqRadio[_0x3766d8(0xaa)]({ input: _0x17fa9a }),
              unfilledArr[_0x3766d8(0xaa)]({
                input: $(this)[_0x3766d8(0x98)](_0x3766d8(0x16a)),
              }))
            : (empReqRadio = empReqRadio["filter"](
                (_0x3f835c) => _0x3f835c[_0x3766d8(0xfc)] !== _0x17fa9a,
              )),
            empReqRadio["length"] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0x2a95a6(0x15a)](_0x2a95a6(0x1ab))
        [_0x2a95a6(0x15a)](_0x2a95a6(0x1cc))
        ["each"](function (_0x5a83ca) {
          const _0x38819a = _0x2a95a6;
          let _0x2cb3f3 = $(this)[_0x38819a(0x114)]()["length"],
            _0x47c568 = $(this)[_0x38819a(0x1a1)](_0x38819a(0xcb))
              ? $(this)[_0x38819a(0x1a1)](_0x38819a(0xcb))
              : 0x0;
          $(this)[_0x38819a(0x114)]() !== "" && _0x2cb3f3 >= _0x47c568
            ? (empReqInput = empReqInput[_0x38819a(0x13d)](
                (_0x2d5e93) => _0x2d5e93[_0x38819a(0xfc)] !== _0x5a83ca,
              ))
            : (!empReqInput["find"](
                (_0x44a18c) => _0x44a18c[_0x38819a(0xfc)] === _0x5a83ca,
              ) && empReqInput[_0x38819a(0xaa)]({ input: _0x5a83ca }),
              unfilledArr["push"]({
                input: $(this)[_0x38819a(0x98)](_0x38819a(0x16a)),
              })),
            empReqInput[_0x38819a(0x1b0)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x2a95a6(0x15a)](".active-answer-card")
        [_0x2a95a6(0x15a)](_0x2a95a6(0xdc))
        ["each"](function (_0x59af9b) {
          const _0x2b339d = _0x2a95a6;
          (skipTo = undefined),
            $(this)
              [_0x2b339d(0xdb)]("[data-skip-to]")
              ["data"](_0x2b339d(0x1d4)) !== "" &&
              (skipTo = $(this)
                [_0x2b339d(0xdb)]("[data-skip-to]")
                [_0x2b339d(0x1a1)](_0x2b339d(0x1d4))),
            $(this)[_0x2b339d(0xdb)](_0x2b339d(0x180))["attr"]("data-go-to") &&
              ((answer = $(this)
                ["parents"](_0x2b339d(0x180))
                [_0x2b339d(0x98)](_0x2b339d(0x1bf))),
              (selections = selections[_0x2b339d(0x13d)](
                (_0x2d1db8) => _0x2d1db8[_0x2b339d(0x1a4)] !== x,
              )),
              selections[_0x2b339d(0xaa)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x2b339d(0xaa)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x2b339d(0x1cf)](
                  (_0x5bccf9) => _0x5bccf9[_0x2b339d(0x1a4)] === x,
                )),
                (selections[objIndex][_0x2b339d(0x1b2)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x2b339d(0xd9)] = x)));
        }),
      $(steps[x])
        ["find"](_0x2a95a6(0x1ab))
        ["find"](_0x2a95a6(0x1e8))
        [_0x2a95a6(0x1e5)](function (_0x44ad6d) {
          const _0x2e8869 = _0x2a95a6;
          let _0x1f775e = $(this)[_0x2e8869(0x114)]()[_0x2e8869(0x1b0)],
            _0x264ed8 = $(this)[_0x2e8869(0x1a1)](_0x2e8869(0xcb))
              ? $(this)[_0x2e8869(0x1a1)](_0x2e8869(0xcb))
              : 0x0;
          $(this)[_0x2e8869(0x114)]() !== "" && _0x1f775e >= _0x264ed8
            ? (empReqPassword = empReqPassword[_0x2e8869(0x13d)](
                (_0x2a38fc) => _0x2a38fc[_0x2e8869(0xfc)] !== _0x44ad6d,
              ))
            : (!empReqPassword["find"](
                (_0x1b7733) => _0x1b7733["input"] === _0x44ad6d,
              ) && empReqPassword[_0x2e8869(0xaa)]({ input: _0x44ad6d }),
              unfilledArr[_0x2e8869(0xaa)]({
                input: $(this)["attr"](_0x2e8869(0x16a)),
              })),
            empReqPassword[_0x2e8869(0x1b0)] === 0x0
              ? (passwordFilled = !![])
              : (passwordFilled = ![]);
        }),
      $(steps[x])
        [_0x2a95a6(0x15a)](_0x2a95a6(0x1ab))
        [_0x2a95a6(0x15a)](_0x2a95a6(0x15f))
        [_0x2a95a6(0x1e5)](function (_0x4b34be) {
          const _0xb2faad = _0x2a95a6;
          (skipTo = undefined),
            $(this)
              [_0xb2faad(0xdb)](_0xb2faad(0x1a0))
              [_0xb2faad(0x1a1)](_0xb2faad(0x1d4)) !== "" &&
              (skipTo = $(this)
                [_0xb2faad(0xdb)](_0xb2faad(0x1a0))
                [_0xb2faad(0x1a1)](_0xb2faad(0x1d4))),
            $(this)
              ["parents"](_0xb2faad(0x180))
              [_0xb2faad(0x98)](_0xb2faad(0x1bf)) &&
              ((answer = $(this)
                [_0xb2faad(0xdb)](_0xb2faad(0x180))
                [_0xb2faad(0x98)](_0xb2faad(0x1bf))),
              (selections = selections["filter"](
                (_0x4ab691) => _0x4ab691[_0xb2faad(0x1a4)] !== x,
              )),
              selections[_0xb2faad(0xaa)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0xb2faad(0xaa)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0xb2faad(0x1cf)](
                  (_0x9398b7) => _0x9398b7[_0xb2faad(0x1a4)] === x,
                )),
                (selections[objIndex][_0xb2faad(0x1b2)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0xb2faad(0xd9)] = x)));
        }),
      $(steps[x])
        [_0x2a95a6(0x15a)](".active-answer-card")
        [_0x2a95a6(0x15a)](_0x2a95a6(0x144))
        [_0x2a95a6(0x1e5)](function (_0x38d1de) {
          const _0x3d0044 = _0x2a95a6;
          let _0x593c3d = $(this)[_0x3d0044(0x114)]()["length"],
            _0x348593 = $(this)[_0x3d0044(0x1a1)](_0x3d0044(0xcb))
              ? $(this)[_0x3d0044(0x1a1)](_0x3d0044(0xcb))
              : 0x0;
          $(this)["val"]() !== "" && _0x593c3d >= _0x348593
            ? (empReqUrl = empReqUrl["filter"](
                (_0x1ded29) => _0x1ded29["input"] !== _0x38d1de,
              ))
            : (!empReqUrl["find"](
                (_0x326918) => _0x326918["input"] === _0x38d1de,
              ) && empReqUrl[_0x3d0044(0xaa)]({ input: _0x38d1de }),
              unfilledArr[_0x3d0044(0xaa)]({
                input: $(this)[_0x3d0044(0x98)]("name"),
              })),
            empReqUrl[_0x3d0044(0x1b0)] === 0x0 &&
            validateURL($(this)[_0x3d0044(0x114)]())
              ? (urlFilled = !![])
              : (urlFilled = ![]);
        }),
      $(steps[x])
        [_0x2a95a6(0x15a)](_0x2a95a6(0x1ab))
        [_0x2a95a6(0x15a)](_0x2a95a6(0xea))
        [_0x2a95a6(0x1e5)](function (_0x27c7be) {
          const _0x449d2a = _0x2a95a6;
          (skipTo = undefined),
            $(this)
              [_0x449d2a(0xdb)](_0x449d2a(0x1a0))
              [_0x449d2a(0x1a1)](_0x449d2a(0x1d4)) !== "" &&
              (skipTo = $(this)
                [_0x449d2a(0xdb)](_0x449d2a(0x1a0))
                ["data"](_0x449d2a(0x1d4))),
            $(this)[_0x449d2a(0xdb)](_0x449d2a(0x180))["attr"]("data-go-to") &&
              ((answer = $(this)
                [_0x449d2a(0xdb)](_0x449d2a(0x180))
                [_0x449d2a(0x98)]("data-go-to")),
              (selections = selections[_0x449d2a(0x13d)](
                (_0x59dde0) => _0x59dde0[_0x449d2a(0x1a4)] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x449d2a(0xaa)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x449d2a(0x1cf)](
                  (_0x42520a) => _0x42520a[_0x449d2a(0x1a4)] === x,
                )),
                (selections[objIndex][_0x449d2a(0x1b2)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        ["find"](_0x2a95a6(0x1ab))
        ["find"](_0x2a95a6(0x97))
        [_0x2a95a6(0x1e5)](function (_0x3d87bc) {
          const _0x54f909 = _0x2a95a6;
          $(this)[_0x54f909(0x114)]() !== ""
            ? (empReqDate = empReqDate[_0x54f909(0x13d)](
                (_0x58c5c7) => _0x58c5c7["input"] !== _0x3d87bc,
              ))
            : (!empReqDate[_0x54f909(0x15a)](
                (_0x3255b5) => _0x3255b5[_0x54f909(0xfc)] === _0x3d87bc,
              ) && empReqDate[_0x54f909(0xaa)]({ input: _0x3d87bc }),
              unfilledArr[_0x54f909(0xaa)]({
                input: $(this)[_0x54f909(0x98)]("name"),
              })),
            empReqDate["length"] === 0x0
              ? (dateFilled = !![])
              : (dateFilled = ![]);
        }),
      $(steps[x])
        [_0x2a95a6(0x15a)](_0x2a95a6(0x1ab))
        [_0x2a95a6(0x15a)](_0x2a95a6(0x1a5))
        ["each"](function (_0x560fce) {
          const _0x6669ca = _0x2a95a6;
          (skipTo = undefined),
            $(this)
              [_0x6669ca(0xdb)](_0x6669ca(0x1a0))
              [_0x6669ca(0x1a1)](_0x6669ca(0x1d4)) !== "" &&
              (skipTo = $(this)
                [_0x6669ca(0xdb)]("[data-skip-to]")
                [_0x6669ca(0x1a1)](_0x6669ca(0x1d4))),
            $(this)
              ["parents"]("[data-go-to]")
              [_0x6669ca(0x98)](_0x6669ca(0x1bf)) &&
              ((answer = $(this)
                [_0x6669ca(0xdb)]("[data-go-to]")
                ["attr"](_0x6669ca(0x1bf))),
              (selections = selections[_0x6669ca(0x13d)](
                (_0x3d244d) => _0x3d244d[_0x6669ca(0x1a4)] !== x,
              )),
              selections[_0x6669ca(0xaa)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x6669ca(0xaa)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x6669ca(0x1cf)](
                  (_0x454c6c) => _0x454c6c[_0x6669ca(0x1a4)] === x,
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x2a95a6(0x15a)](_0x2a95a6(0x1ab))
        [_0x2a95a6(0x15a)](_0x2a95a6(0x9a))
        ["each"](function (_0x4e3c5c) {
          const _0x338310 = _0x2a95a6;
          $(this)[_0x338310(0x114)]() !== ""
            ? (empReqTime = empReqTime[_0x338310(0x13d)](
                (_0x6f976d) => _0x6f976d[_0x338310(0xfc)] !== _0x4e3c5c,
              ))
            : (!empReqTime[_0x338310(0x15a)](
                (_0x8e44c6) => _0x8e44c6[_0x338310(0xfc)] === _0x4e3c5c,
              ) && empReqTime["push"]({ input: _0x4e3c5c }),
              unfilledArr[_0x338310(0xaa)]({
                input: $(this)[_0x338310(0x98)](_0x338310(0x16a)),
              })),
            empReqTime[_0x338310(0x1b0)] === 0x0
              ? (timeFilled = !![])
              : (timeFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x2a95a6(0x1ab))
        [_0x2a95a6(0x15a)](_0x2a95a6(0x18d))
        [_0x2a95a6(0x1e5)](function (_0x4924aa) {
          const _0x574849 = _0x2a95a6;
          (skipTo = undefined),
            $(this)
              [_0x574849(0xdb)](_0x574849(0x1a0))
              ["data"](_0x574849(0x1d4)) !== "" &&
              (skipTo = $(this)
                [_0x574849(0xdb)](_0x574849(0x1a0))
                [_0x574849(0x1a1)](_0x574849(0x1d4))),
            $(this)
              ["parents"](_0x574849(0x180))
              [_0x574849(0x98)](_0x574849(0x1bf)) &&
              ((answer = $(this)
                [_0x574849(0xdb)]("[data-go-to]")
                [_0x574849(0x98)](_0x574849(0x1bf))),
              (selections = selections[_0x574849(0x13d)](
                (_0xe3ffb9) => _0xe3ffb9[_0x574849(0x1a4)] !== x,
              )),
              selections[_0x574849(0xaa)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x574849(0xaa)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x574849(0x1cf)](
                  (_0x51b804) => _0x51b804[_0x574849(0x1a4)] === x,
                )),
                (selections[objIndex][_0x574849(0x1b2)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        ["find"](_0x2a95a6(0x1ab))
        ["find"](_0x2a95a6(0xd7))
        [_0x2a95a6(0x1e5)](function (_0x483ae2) {
          const _0x3fc879 = _0x2a95a6;
          let _0x339d7f = $(this)[_0x3fc879(0x114)]()["length"],
            _0x3c1633 = $(this)[_0x3fc879(0x1a1)]("min-character")
              ? $(this)[_0x3fc879(0x1a1)]("min-character")
              : 0x0;
          $(this)[_0x3fc879(0x114)]() !== "" && _0x339d7f >= _0x3c1633
            ? (empReqNum = empReqNum[_0x3fc879(0x13d)](
                (_0x1a47b2) => _0x1a47b2[_0x3fc879(0xfc)] !== _0x483ae2,
              ))
            : (!empReqNum[_0x3fc879(0x15a)](
                (_0xc34723) => _0xc34723["input"] === _0x483ae2,
              ) && empReqNum[_0x3fc879(0xaa)]({ input: _0x483ae2 }),
              unfilledArr[_0x3fc879(0xaa)]({
                input: $(this)[_0x3fc879(0x98)](_0x3fc879(0x16a)),
              })),
            empReqNum["length"] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x2a95a6(0x15a)](_0x2a95a6(0x1ab))
        [_0x2a95a6(0x15a)](":input[type=\x22number\x22]")
        [_0x2a95a6(0x1e5)](function (_0x238d0a) {
          const _0x29014b = _0x2a95a6;
          (skipTo = undefined),
            $(this)
              [_0x29014b(0xdb)](_0x29014b(0x1a0))
              [_0x29014b(0x1a1)](_0x29014b(0x1d4)) !== "" &&
              (skipTo = $(this)
                [_0x29014b(0xdb)]("[data-skip-to]")
                [_0x29014b(0x1a1)](_0x29014b(0x1d4))),
            $(this)
              ["parents"](_0x29014b(0x180))
              [_0x29014b(0x98)]("data-go-to") &&
              ((answer = $(this)
                ["parents"](_0x29014b(0x180))
                ["attr"]("data-go-to")),
              (selections = selections[_0x29014b(0x13d)](
                (_0x299f1d) => _0x299f1d["step"] !== x,
              )),
              selections[_0x29014b(0xaa)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections["findIndex"](
                  (_0x52cdf5) => _0x52cdf5["step"] === x,
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        ["find"](".active-answer-card")
        [_0x2a95a6(0x15a)](_0x2a95a6(0x113))
        ["each"](function (_0x473f4d) {
          const _0x1e86f2 = _0x2a95a6;
          if ($(this)["val"]() !== "") {
            let _0x28f96c = $(this)[_0x1e86f2(0x114)]()[_0x1e86f2(0x1b0)],
              _0x33844f = $(this)[_0x1e86f2(0x1a1)](_0x1e86f2(0xcb))
                ? $(this)[_0x1e86f2(0x1a1)]("min-character")
                : 0x0;
            if ($(this)[_0x1e86f2(0x1a1)](_0x1e86f2(0xd3))) {
              var _0x182302 = phoneAutoFormat(
                $(this)[_0x1e86f2(0x1a1)](_0x1e86f2(0xd3)),
              );
              $(this)[_0x1e86f2(0x114)](_0x182302($(this)["val"]()));
            }
            phoneValidation($(this)[_0x1e86f2(0x114)](), _0x28f96c, _0x33844f)
              ? (empReqTel = empReqTel["filter"](
                  (_0x2583fc) => _0x2583fc["input"] !== _0x473f4d,
                ))
              : empReqTel["push"]({ input: _0x473f4d });
          } else
            !empReqTel[_0x1e86f2(0x15a)](
              (_0x47826f) => _0x47826f["input"] === _0x473f4d,
            ) && empReqTel[_0x1e86f2(0xaa)]({ input: _0x473f4d }),
              unfilledArr["push"]({
                input: $(this)[_0x1e86f2(0x98)](_0x1e86f2(0x16a)),
              });
          empReqTel[_0x1e86f2(0x1b0)] === 0x0
            ? (telFilled = !![])
            : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x2a95a6(0x15a)](_0x2a95a6(0x1ab))
        [_0x2a95a6(0x15a)](":input[type=\x22tel\x22]")
        [_0x2a95a6(0x1e5)](function (_0x5ed552) {
          const _0x14fe50 = _0x2a95a6;
          (skipTo = undefined),
            $(this)[_0x14fe50(0xdb)](_0x14fe50(0x1a0))["data"]("skip-to") !==
              "" &&
              (skipTo = $(this)
                [_0x14fe50(0xdb)](_0x14fe50(0x1a0))
                [_0x14fe50(0x1a1)]("skip-to")),
            $(this)
              ["parents"](_0x14fe50(0x180))
              [_0x14fe50(0x98)]("data-go-to") &&
              ((answer = $(this)
                ["parents"](_0x14fe50(0x180))
                [_0x14fe50(0x98)](_0x14fe50(0x1bf))),
              (selections = selections["filter"](
                (_0x18aa18) => _0x18aa18[_0x14fe50(0x1a4)] !== x,
              )),
              selections[_0x14fe50(0xaa)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x14fe50(0xaa)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x14fe50(0x1cf)](
                  (_0x5b3fcc) => _0x5b3fcc[_0x14fe50(0x1a4)] === x,
                )),
                (selections[objIndex][_0x14fe50(0x1b2)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x14fe50(0xd9)] = x)));
        }),
      $(steps[x])
        ["find"](_0x2a95a6(0x1ab))
        [_0x2a95a6(0x15a)](_0x2a95a6(0x1b1))
        [_0x2a95a6(0x1e5)](function (_0x228de4) {
          const _0x421ea3 = _0x2a95a6;
          $(this)[_0x421ea3(0x114)]() !== ""
            ? (empReqFile = empReqFile["filter"](
                (_0x1ee422) => _0x1ee422[_0x421ea3(0xfc)] !== _0x228de4,
              ))
            : (!empReqFile["find"](
                (_0x33424f) => _0x33424f[_0x421ea3(0xfc)] === _0x228de4,
              ) && empReqFile[_0x421ea3(0xaa)]({ input: _0x228de4 }),
              unfilledArr["push"]({ input: $(this)[_0x421ea3(0x98)]("name") })),
            empReqFile[_0x421ea3(0x1b0)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x2a95a6(0x15a)](_0x2a95a6(0x1ab))
        [_0x2a95a6(0x15a)](_0x2a95a6(0x153))
        [_0x2a95a6(0x1e5)](function (_0x31d6eb) {
          const _0x42b300 = _0x2a95a6;
          (skipTo = undefined),
            $(this)
              ["parents"](_0x42b300(0x1a0))
              [_0x42b300(0x1a1)](_0x42b300(0x1d4)) !== "" &&
              (skipTo = $(this)
                [_0x42b300(0xdb)](_0x42b300(0x1a0))
                ["data"]("skip-to")),
            $(this)
              [_0x42b300(0xdb)](_0x42b300(0x180))
              [_0x42b300(0x98)]("data-go-to") &&
              ((answer = $(this)
                [_0x42b300(0xdb)](_0x42b300(0x180))
                [_0x42b300(0x98)](_0x42b300(0x1bf))),
              (selections = selections[_0x42b300(0x13d)](
                (_0x5ce8f5) => _0x5ce8f5["step"] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x42b300(0xaa)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x1f955d) => _0x1f955d[_0x42b300(0x1a4)] === x,
                )),
                (selections[objIndex][_0x42b300(0x1b2)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x42b300(0xd9)] = x)));
        }),
      $(steps[x])
        ["find"](".active-answer-card")
        ["find"](_0x2a95a6(0x1f1))
        [_0x2a95a6(0x1e5)](function (_0x403712) {
          const _0x4bbdec = _0x2a95a6;
          console["log"]($(this)["val"]()),
            $(this)[_0x4bbdec(0x114)]() !== null && $(this)["val"]() !== ""
              ? (empReqSelect = empReqSelect[_0x4bbdec(0x13d)](
                  (_0x4c7ac0) => _0x4c7ac0[_0x4bbdec(0xfc)] !== _0x403712,
                ))
              : (!empReqSelect[_0x4bbdec(0x15a)](
                  (_0x40d6e4) => _0x40d6e4["input"] === _0x403712,
                ) && empReqSelect[_0x4bbdec(0xaa)]({ input: _0x403712 }),
                unfilledArr[_0x4bbdec(0xaa)]({
                  input: $(this)[_0x4bbdec(0x98)](_0x4bbdec(0x16a)),
                })),
            empReqSelect["length"] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x2a95a6(0x15a)](_0x2a95a6(0x1ab))
        [_0x2a95a6(0x15a)]("select")
        [_0x2a95a6(0x1e5)](function (_0x3e3aad) {
          const _0x481c07 = _0x2a95a6;
          (skipTo = undefined),
            $(this)
              [_0x481c07(0xdb)]("[data-skip-to]")
              [_0x481c07(0x1a1)](_0x481c07(0x1d4)) !== "" &&
              (skipTo = $(this)
                [_0x481c07(0xdb)](_0x481c07(0x1a0))
                [_0x481c07(0x1a1)](_0x481c07(0x1d4))),
            $(this)
              [_0x481c07(0xdb)](_0x481c07(0x180))
              [_0x481c07(0x98)](_0x481c07(0x1bf)) &&
              ((answer = $(this)
                [_0x481c07(0xdb)]("[data-go-to]")
                [_0x481c07(0x98)](_0x481c07(0x1bf))),
              (selections = selections[_0x481c07(0x13d)](
                (_0x39fecf) => _0x39fecf["step"] !== x,
              )),
              selections[_0x481c07(0xaa)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x481c07(0xaa)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x94d537) => _0x94d537["step"] === x,
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x2a95a6(0x15a)](_0x2a95a6(0x1ab))
        ["find"](_0x2a95a6(0x1ae))
        [_0x2a95a6(0x1e5)](function (_0x1f0742) {
          const _0xa087ed = _0x2a95a6;
          let _0x433f44 = $(this)[_0xa087ed(0x114)]()[_0xa087ed(0x1b0)],
            _0x3da686 = $(this)[_0xa087ed(0x1a1)]("min-character")
              ? $(this)["data"](_0xa087ed(0xcb))
              : 0x0;
          $(this)["val"]() !== "" && _0x433f44 >= _0x3da686
            ? (empReqTextarea = empReqTextarea[_0xa087ed(0x13d)](
                (_0x7ae556) => _0x7ae556[_0xa087ed(0xfc)] !== _0x1f0742,
              ))
            : (!empReqTextarea[_0xa087ed(0x15a)](
                (_0x174eb5) => _0x174eb5[_0xa087ed(0xfc)] === _0x1f0742,
              ) && empReqTextarea[_0xa087ed(0xaa)]({ input: _0x1f0742 }),
              unfilledArr[_0xa087ed(0xaa)]({
                input: $(this)["attr"](_0xa087ed(0x16a)),
              })),
            empReqTextarea[_0xa087ed(0x1b0)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x2a95a6(0x15a)](_0x2a95a6(0x1ab))
        [_0x2a95a6(0x15a)](_0x2a95a6(0x160))
        ["each"](function (_0x59f704) {
          const _0x3246e3 = _0x2a95a6;
          (skipTo = undefined),
            $(this)
              [_0x3246e3(0xdb)]("[data-skip-to]")
              ["data"](_0x3246e3(0x1d4)) !== "" &&
              (skipTo = $(this)
                [_0x3246e3(0xdb)](_0x3246e3(0x1a0))
                ["data"](_0x3246e3(0x1d4))),
            $(this)
              [_0x3246e3(0xdb)]("[data-go-to]")
              [_0x3246e3(0x98)]("data-go-to") &&
              ((answer = $(this)
                [_0x3246e3(0xdb)](_0x3246e3(0x180))
                [_0x3246e3(0x98)](_0x3246e3(0x1bf))),
              (selections = selections["filter"](
                (_0x3ca79a) => _0x3ca79a[_0x3246e3(0x1a4)] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x3246e3(0xaa)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x3246e3(0x1cf)](
                  (_0x35d39c) => _0x35d39c[_0x3246e3(0x1a4)] === x,
                )),
                (selections[objIndex][_0x3246e3(0x1b2)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x3246e3(0xd9)] = x)));
        }),
      $(steps[x])
        [_0x2a95a6(0x15a)](_0x2a95a6(0x1ab))
        [_0x2a95a6(0x15a)](_0x2a95a6(0x143))
        [_0x2a95a6(0x1e5)](function (_0x417233) {
          const _0x5077a2 = _0x2a95a6;
          $(this)[_0x5077a2(0x114)]() !== ""
            ? validateEmail(
                $(this)["val"](),
                $(this)["data"](_0x5077a2(0xac)),
                $(this)["attr"](_0x5077a2(0x16a)),
              )
            : ((emailFilled = ![]),
              unfilledArr[_0x5077a2(0xaa)]({
                input: $(this)["attr"](_0x5077a2(0x16a)),
              }));
        }),
      $(steps[x])
        [_0x2a95a6(0x15a)](".active-answer-card")
        [_0x2a95a6(0x15a)](_0x2a95a6(0x120))
        [_0x2a95a6(0x1e5)](function (_0x95aad9) {
          const _0x16471c = _0x2a95a6;
          (skipTo = undefined),
            $(this)
              ["parents"](_0x16471c(0x1a0))
              [_0x16471c(0x1a1)](_0x16471c(0x1d4)) !== "" &&
              (skipTo = $(this)
                [_0x16471c(0xdb)]("[data-skip-to]")
                [_0x16471c(0x1a1)](_0x16471c(0x1d4))),
            $(this)
              [_0x16471c(0xdb)]("[data-go-to]")
              [_0x16471c(0x98)]("data-go-to") &&
              ((answer = $(this)
                [_0x16471c(0xdb)](_0x16471c(0x180))
                [_0x16471c(0x98)](_0x16471c(0x1bf))),
              (selections = selections[_0x16471c(0x13d)](
                (_0x4e25eb) => _0x4e25eb[_0x16471c(0x1a4)] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0x16471c(0x1cf)](
                  (_0x2ac0fa) => _0x2ac0fa[_0x16471c(0x1a4)] === x,
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        });
  }
  $(steps[x])
    [_0x2a95a6(0x15a)](":input[type=\x22radio\x22]")
    ["is"](_0x2a95a6(0x17f)) &&
    ((selArr = []),
    $(steps)
      [_0x2a95a6(0x15a)]("[data-selected]:checked")
      [_0x2a95a6(0x1e5)](function (_0x4563b7, _0x368344) {
        const _0x1ecc5b = _0x2a95a6;
        selArr[_0x1ecc5b(0xaa)]({
          selected: $(this)[_0x1ecc5b(0x1a1)](_0x1ecc5b(0x1f2)),
        });
      }),
    (selString = []),
    selArr[_0x2a95a6(0x145)]((_0x4961f1) =>
      selString[_0x2a95a6(0xaa)](_0x4961f1[_0x2a95a6(0x1f2)]),
    ),
    $(steps[x])
      [_0x2a95a6(0x15a)](_0x2a95a6(0x1ab))
      [_0x2a95a6(0x15a)](_0x2a95a6(0x1e2))
      [_0x2a95a6(0x1e5)](function () {
        const _0x55a04d = _0x2a95a6;
        skipTo = undefined;
        if (
          $(this)
            [_0x55a04d(0xdb)]("[data-skip-to]")
            [_0x55a04d(0x1a1)](_0x55a04d(0x1d4))
        )
          skipTo = $(this)
            [_0x55a04d(0xdb)](_0x55a04d(0x1a0))
            ["data"](_0x55a04d(0x1d4));
        else
          $(this)[_0x55a04d(0x1a1)](_0x55a04d(0x1d4)) &&
            (skipTo = $(this)[_0x55a04d(0x1a1)](_0x55a04d(0x1d4)));
        selections = selections["filter"](
          (_0xa51bab) => _0xa51bab[_0x55a04d(0x1a4)] !== x,
        );
        if ($(this)[_0x55a04d(0x1a1)](_0x55a04d(0x19a)))
          (answer = $(this)[_0x55a04d(0x98)](_0x55a04d(0x1bf))),
            console[_0x55a04d(0x1e4)](answer, selections),
            selections[_0x55a04d(0xaa)]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0x55a04d(0xaa)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections["findIndex"](
                (_0x2b34d2) => _0x2b34d2[_0x55a04d(0x1a4)] === x,
              )),
              (selections[objIndex][_0x55a04d(0x1b2)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x55a04d(0xd9)] = x));
        else
          $(this)
            [_0x55a04d(0xdb)](_0x55a04d(0x180))
            [_0x55a04d(0x1a1)](_0x55a04d(0x19a)) &&
            ((answer = $(this)
              ["parents"](_0x55a04d(0x180))
              [_0x55a04d(0x1a1)](_0x55a04d(0x19a))),
            selections[_0x55a04d(0xaa)]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0x55a04d(0xaa)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections["findIndex"](
                (_0x4c1a61) => _0x4c1a61[_0x55a04d(0x1a4)] === x,
              )),
              (selections[objIndex][_0x55a04d(0x1b2)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x55a04d(0xd9)] = x)));
      }),
    logicExtra
      ? ($(steps[x])
          [_0x2a95a6(0x15a)](".active-answer-card")
          [_0x2a95a6(0x15a)]("[data-radio-skip]:visible")
          [_0x2a95a6(0x1a1)](_0x2a95a6(0xa2)) === !![] ||
          $(steps[x])
            ["find"](_0x2a95a6(0x1e9))
            [_0x2a95a6(0x1a1)]("radio-skip") === !![]) &&
        skip &&
        selections[_0x2a95a6(0x13d)](
          (_0x5e5d95) => _0x5e5d95[_0x2a95a6(0x1a4)] === x,
        )[_0x2a95a6(0x1b0)] > 0x0 &&
        textareaLength === 0x0 &&
        textInputLength === 0x0 &&
        emailInputLength === 0x0 &&
        checkboxInputLength === 0x0 &&
        setTimeout(
          function () {
            (next = !![]), nextStep(), selectionQuiz();
          },
          $(steps[x])
            [_0x2a95a6(0x15a)](_0x2a95a6(0x19c))
            [_0x2a95a6(0x1a1)](_0x2a95a6(0x129)),
        )
      : $(steps[x])
          [_0x2a95a6(0x15a)](_0x2a95a6(0x183))
          ["data"]("radio-skip") === !![] &&
        skip &&
        textareaLength === 0x0 &&
        textInputLength === 0x0 &&
        emailInputLength === 0x0 &&
        checkboxInputLength === 0x0 &&
        setTimeout(
          function () {
            (next = !![]), nextStep(), selectionQuiz();
          },
          $(steps[x])
            [_0x2a95a6(0x15a)](_0x2a95a6(0x19c))
            [_0x2a95a6(0x1a1)]("radio-delay"),
        )),
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
  const _0x1bd35f = _0x1bf583;
  $("[data-text=\x22error-message\x22]")[_0x1bd35f(0xc0)](),
    unfilledArr[_0x1bd35f(0x1b0)] > 0x0 &&
      unfilledArr["forEach"](function (_0x113bfd) {
        const _0x20b4ed = _0x1bd35f;
        $(_0x20b4ed(0x199) + _0x113bfd[_0x20b4ed(0xfc)] + "\x22]")
          [_0x20b4ed(0x165)]("[data-text=\x22error-message\x22]")
          [_0x20b4ed(0x149)](),
          $(_0x20b4ed(0x199) + _0x113bfd[_0x20b4ed(0xfc)] + "\x22]")
            [_0x20b4ed(0xdb)]()
            ["children"](_0x20b4ed(0x106))
            [_0x20b4ed(0x149)](),
          $(_0x20b4ed(0x16f) + _0x113bfd["input"] + "\x22]")
            ["siblings"](_0x20b4ed(0x106))
            [_0x20b4ed(0x149)](),
          $(_0x20b4ed(0x12d) + _0x113bfd[_0x20b4ed(0xfc)] + "\x22]")
            [_0x20b4ed(0x165)](_0x20b4ed(0x106))
            [_0x20b4ed(0x149)]();
      });
}
function resetInputErrorMessage(_0x32a1ff) {
  const _0x3567ac = _0x1bf583;
  $("input[name=\x22" + _0x32a1ff + "\x22]")
    [_0x3567ac(0x165)]("[data-text=\x22error-message\x22]")
    [_0x3567ac(0xc0)](),
    $(_0x3567ac(0x199) + _0x32a1ff + "\x22]")
      [_0x3567ac(0xdb)]()
      ["children"](_0x3567ac(0x106))
      [_0x3567ac(0xc0)](),
    $(_0x3567ac(0x16f) + _0x32a1ff + "\x22]")
      [_0x3567ac(0x165)](_0x3567ac(0x106))
      ["hide"](),
    $(_0x3567ac(0x12d) + _0x32a1ff + "\x22]")
      [_0x3567ac(0x165)](_0x3567ac(0x106))
      ["hide"]();
}
function increaseCurstep() {
  const _0x14c994 = _0x1bf583;
  countCard
    ? ((curStep = curStep + 0x1),
      $(_0x14c994(0x8c))[_0x14c994(0x1e1)](steps["length"]))
    : $(steps[x])[_0x14c994(0x1a1)](_0x14c994(0x1ac))
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    $(_0x14c994(0x181))["text"](curStep);
}
function decreaseCurstep() {
  const _0x52fc3e = _0x1bf583;
  countCard
    ? ((curStep = curStep - 0x1),
      $(_0x52fc3e(0x8c))[_0x52fc3e(0x1e1)](steps[_0x52fc3e(0x1b0)]))
    : $(steps[x])["data"](_0x52fc3e(0x1ac))
      ? (curStep = curStep - 0x0)
      : (curStep = curStep - 0x1),
    $("[data-text=\x22current-step\x22]")["text"](curStep);
}
$("[data-form=\x22submit-btn\x22]")["on"]("click", function (_0x5a54ac) {
  const _0x4411fa = _0x1bf583;
  console[_0x4411fa(0x1e4)](_0x4411fa(0x10e)),
    $(this)[_0x4411fa(0x1a1)](_0x4411fa(0x137)) &&
      (redirectTo = $(this)[_0x4411fa(0x1a1)](_0x4411fa(0x137))),
    !$(this)[_0x4411fa(0x1a1)]("new-tab") &&
      (newTab = $(this)["data"](_0x4411fa(0x105))),
    (successCard = $(this)[_0x4411fa(0x1a1)](_0x4411fa(0x14c))),
    _0x5a54ac["preventDefault"](),
    _0x5a54ac[_0x4411fa(0x8e)](),
    logicExtra &&
      ($(this)[_0x4411fa(0x139)](_0x4411fa(0x1a7), !![]),
      $(steps)
        [_0x4411fa(0x15a)](_0x4411fa(0x18c))
        [_0x4411fa(0x139)](_0x4411fa(0x1da), ![])),
    localStorage[_0x4411fa(0xb5)](_0x4411fa(0x190)),
    fill
      ? ($(this)[_0x4411fa(0x1a1)](_0x4411fa(0x1ef))
          ? (console[_0x4411fa(0x1e4)]($(this)["data"]("wait")),
            $(this)["text"]($(this)[_0x4411fa(0x1a1)]("wait")))
          : $(this)
              ["val"]("Please\x20wait...")
              [_0x4411fa(0x1e1)](_0x4411fa(0x1d6)),
        $("[data-form=\x22multistep\x22]")[_0x4411fa(0x130)](),
        $(_0x4411fa(0xa4))[_0x4411fa(0x1b0)] > 0x0 &&
          grecaptcha[_0x4411fa(0x19d)]()[_0x4411fa(0x1b0)] === 0x0 &&
          (form["find"](_0x4411fa(0x1bc))["text"](oldSubmitText),
          form[_0x4411fa(0x15a)](_0x4411fa(0x1bc))["val"](oldSubmitText)),
        customError && $(_0x4411fa(0x106))[_0x4411fa(0xc0)]())
      : customError && displayErrorMessage();
});
function nextStep() {
  const _0x52de13 = _0x1bf583;
  customError
    ? ($(_0x52de13(0x106))[_0x52de13(0xc0)](),
      fill
        ? (x++,
          increaseCurstep(),
          (progress = x),
          x <= steps[_0x52de13(0x1b0)] - 0x1 &&
            (updateStep(), memory && saveFilledInput()))
        : displayErrorMessage())
    : (x++,
      increaseCurstep(),
      x > progress && (progress = x),
      x <= steps["length"] - 0x1 &&
        (updateStep(), memory && saveFilledInput())),
    andLogic();
}
function backStep() {
  const _0x14494c = _0x1bf583;
  customError && $("[data-text=\x22error-message\x22]")[_0x14494c(0xc0)](),
    decreaseCurstep(),
    x > 0x0 &&
      ($(progressbar[x])["removeClass"]("current"),
      selections[_0x14494c(0x13d)](
        (_0x36e600) => _0x36e600[_0x14494c(0x1b2)] === x,
      )[_0x14494c(0x1b0)] > 0x0
        ? (x = parseInt(
            getSafe(
              () =>
                selections[_0x14494c(0x13d)](
                  (_0x13e624) => _0x13e624[_0x14494c(0x1b2)] === x,
                )[0x0][_0x14494c(0xd9)],
            ),
          ))
        : x--,
      updateStep()),
    ($(steps[x])
      [_0x14494c(0x15a)](_0x14494c(0x183))
      [_0x14494c(0x1a1)](_0x14494c(0xa2)) === !![] ||
      $(steps[x])
        ["find"](_0x14494c(0x1ab))
        [_0x14494c(0x15a)](_0x14494c(0x183))
        [_0x14494c(0x1a1)]("radio-skip") === !![] ||
      $(steps[x])
        [_0x14494c(0x15a)]("[data-answer][data-radio-skip]:visible")
        ["data"](_0x14494c(0xa2)) === !![]) &&
      ((all_data = all_data[_0x14494c(0x13d)](
        (_0x34fe84) =>
          _0x34fe84[_0x14494c(0xef)] !==
          $(steps[x])
            [_0x14494c(0x15a)]("input[type=\x22radio\x22]:checked")
            [_0x14494c(0x98)](_0x14494c(0x16a)),
      )),
      $(
        _0x14494c(0xb6) +
          $(steps[x])
            [_0x14494c(0x15a)](_0x14494c(0x1be))
            [_0x14494c(0x98)](_0x14494c(0x16a)) +
          "\x22]",
      )[_0x14494c(0xc0)](),
      $(steps[x])
        [_0x14494c(0x15a)](_0x14494c(0x1b4))
        [_0x14494c(0x139)]("checked", ![]),
      $(steps[x])
        ["find"](".w-form-formradioinput")
        [_0x14494c(0x1de)]("w--redirected-checked"),
      validation());
}
weightedSelectionRange &&
  $(_0x1bf583(0x194))[_0x1bf583(0x1e5)](function () {
    const _0x4c50db = _0x1bf583;
    $(this)["append"](
      _0x4c50db(0x154) +
        $(this)[_0x4c50db(0x1a1)](_0x4c50db(0x1ec)) +
        _0x4c50db(0x186),
    );
  });
function selectionQuiz() {
  const _0x21efa7 = _0x1bf583;
  if ($(this)[_0x21efa7(0x15a)](_0x21efa7(0x11d))) {
    $(_0x21efa7(0x194))[_0x21efa7(0xc0)](),
      $(_0x21efa7(0x1e6))[_0x21efa7(0xc0)]();
    if (weightedSelection) {
      (selTotal = 0x0),
        selArr[_0x21efa7(0x145)](function (_0x21e21c) {
          const _0x519e19 = _0x21efa7;
          selTotal = selTotal + _0x21e21c[_0x519e19(0x1f2)];
        }),
        $(_0x21efa7(0x131))[_0x21efa7(0x1e1)](selTotal);
      if ($(_0x21efa7(0x159) + selTotal + "\x22]")["length"] > 0x0)
        $(_0x21efa7(0x159) + selTotal + "\x22]")[_0x21efa7(0x149)]();
      else
        $(_0x21efa7(0x9e) + selTotal + ")")
          ? $("[data-range]:contains(" + selTotal + ")")
              [_0x21efa7(0x1eb)](_0x21efa7(0x194))
              ["eq"](0x0)
              [_0x21efa7(0x9d)]()
          : $(_0x21efa7(0x18a))[_0x21efa7(0x149)]();
    } else {
      let _0x38e446 = -0x1;
      $("[data-selection]")[_0x21efa7(0x1e5)](function (_0x3508ee) {
        const _0x1e1b3d = _0x21efa7;
        $($(_0x1e1b3d(0x194))[_0x3508ee])
          [_0x1e1b3d(0x1a1)](_0x1e1b3d(0x1ec))
          [_0x1e1b3d(0x1c6)](selString[_0x1e1b3d(0x1e7)]()) &&
          (_0x38e446 = _0x3508ee);
      }),
        _0x38e446 > -0x1
          ? $($("[data-selection]")[_0x38e446])[_0x21efa7(0x149)]()
          : $("[data-selection=\x22other\x22]")["fadeIn"]();
    }
  }
}
function triggerInputAllData() {
  const _0x3da8e4 = _0x1bf583;
  if (savedFilledInput && memory)
    console[_0x3da8e4(0x1e4)](savedFilledInput),
      savedFilledInput["forEach"]((_0x1c8099) => {
        const _0x2bcccd = _0x3da8e4;
        var _0x3179f2 = $(
            _0x2bcccd(0x199) +
              _0x1c8099[_0x2bcccd(0x1a3)] +
              "\x22][value=\x22" +
              _0x1c8099[_0x2bcccd(0x126)] +
              _0x2bcccd(0x1c9),
          ),
          _0x144a6f = $(
            "input[name=\x22" + _0x1c8099[_0x2bcccd(0x1a3)] + _0x2bcccd(0x1c9),
          ),
          _0x190368 = $(
            _0x2bcccd(0x16f) + _0x1c8099[_0x2bcccd(0x1a3)] + _0x2bcccd(0x1c9),
          );
        if (_0x3179f2["attr"]("type") !== _0x2bcccd(0x176)) {
          if (
            _0x3179f2[_0x2bcccd(0x98)](_0x2bcccd(0x1d5)) === _0x2bcccd(0x118) &&
            !_0x3179f2[_0x2bcccd(0xdb)]("[data-radio-skip]")[_0x2bcccd(0x1a1)](
              "radio-skip",
            )
          )
            _0x3179f2["click"](),
              addClickClass(),
              _0x3179f2[_0x2bcccd(0x165)](_0x2bcccd(0xf9))[_0x2bcccd(0x121)](
                "w--redirected-checked",
              ),
              _0x3179f2[_0x2bcccd(0xe1)](_0x2bcccd(0xfc));
          else
            _0x1c8099[_0x2bcccd(0x126)] === "on"
              ? (_0x144a6f["click"](),
                _0x144a6f[_0x2bcccd(0x165)](_0x2bcccd(0xcc))[_0x2bcccd(0x121)](
                  "w--redirected-checked",
                ),
                _0x144a6f["trigger"]("input"))
              : (_0x144a6f["val"](_0x1c8099[_0x2bcccd(0x126)]),
                _0x190368[_0x2bcccd(0x114)](_0x1c8099["value"]),
                $(_0x2bcccd(0x110))
                  [_0x2bcccd(0x15a)](
                    "option[value=\x22" + _0x1c8099[_0x2bcccd(0x126)] + "\x22]",
                  )
                  [_0x2bcccd(0x139)](_0x2bcccd(0x1f2), !![]),
                _0x144a6f["trigger"](_0x2bcccd(0xfc)),
                _0x144a6f[_0x2bcccd(0xe1)](_0x2bcccd(0x9b)));
        }
      });
  else
    _params &&
      (getParams(),
      searchQ[_0x3da8e4(0x145)]((_0xc632e3) => {
        const _0x1394bb = _0x3da8e4;
        if (
          $(
            _0x1394bb(0x199) +
              _0xc632e3[_0x1394bb(0x1a3)] +
              _0x1394bb(0x148) +
              _0xc632e3[_0x1394bb(0x126)] +
              _0x1394bb(0x1c9),
          )["attr"](_0x1394bb(0x1d5)) !== _0x1394bb(0x176)
        ) {
          if (
            $(
              _0x1394bb(0x199) +
                _0xc632e3[_0x1394bb(0x99)] +
                _0x1394bb(0x148) +
                _0xc632e3[_0x1394bb(0x114)] +
                "\x22]:not([data-prefill=\x22false\x22])",
            )[_0x1394bb(0x98)](_0x1394bb(0x1d5)) === "radio"
          )
            $(
              "input[name=\x22" +
                _0xc632e3["key"] +
                _0x1394bb(0x148) +
                _0xc632e3[_0x1394bb(0x114)] +
                _0x1394bb(0x1c9),
            )[_0x1394bb(0x157)](),
              $(
                _0x1394bb(0x199) +
                  _0xc632e3[_0x1394bb(0x99)] +
                  "\x22][value=\x22" +
                  _0xc632e3["val"] +
                  _0x1394bb(0x1c9),
              )
                [_0x1394bb(0x165)](_0x1394bb(0xf9))
                [_0x1394bb(0x121)](_0x1394bb(0x14e)),
              $(
                _0x1394bb(0x199) +
                  _0xc632e3[_0x1394bb(0x99)] +
                  "\x22][value=\x22" +
                  _0xc632e3[_0x1394bb(0x114)] +
                  _0x1394bb(0x1c9),
              )[_0x1394bb(0xe1)]("input");
          else
            _0xc632e3[_0x1394bb(0x114)] === "on"
              ? ($(
                  "input[name=\x22" +
                    _0xc632e3["key"] +
                    "\x22]:not([data-prefill=\x22false\x22])",
                )[_0x1394bb(0x157)](),
                $(
                  _0x1394bb(0x199) +
                    _0xc632e3[_0x1394bb(0x99)] +
                    _0x1394bb(0x1c9),
                )
                  [_0x1394bb(0x165)](_0x1394bb(0xcc))
                  [_0x1394bb(0x121)](_0x1394bb(0x14e)),
                $(_0x1394bb(0x199) + _0xc632e3["key"] + "\x22]")["trigger"](
                  "input",
                ))
              : ($(
                  _0x1394bb(0x199) +
                    _0xc632e3[_0x1394bb(0x99)] +
                    _0x1394bb(0x1c9),
                )["val"](_0xc632e3[_0x1394bb(0x114)]),
                $(
                  "textarea[name=\x22" +
                    _0xc632e3["key"] +
                    "\x22]:not([data-prefill=\x22false\x22])",
                )[_0x1394bb(0x114)](_0xc632e3[_0x1394bb(0x114)]),
                $(_0x1394bb(0x12d) + _0xc632e3["key"] + _0x1394bb(0x1c9))
                  ["find"]("option[value=\x22" + _0xc632e3["val"] + "\x22]")
                  [_0x1394bb(0x139)](_0x1394bb(0x1f2), !![]),
                $(
                  _0x1394bb(0x199) +
                    _0xc632e3[_0x1394bb(0x99)] +
                    _0x1394bb(0x1c9),
                )["trigger"](_0x1394bb(0xfc)),
                $(
                  _0x1394bb(0x199) +
                    _0xc632e3[_0x1394bb(0x99)] +
                    "\x22]:not([data-prefill=\x22false\x22])",
                )["trigger"](_0x1394bb(0x9b)));
        }
      }));
}
$(_0x1bf583(0x1c4))["on"](_0x1bf583(0x157), function () {
  (next = !![]), nextStep(), selectionQuiz();
}),
  $(_0x1bf583(0x185))["on"](_0x1bf583(0x157), function () {
    (next = ![]), (back = !![]), backStep();
  }),
  $(steps)
    [_0x1bf583(0x15a)](_0x1bf583(0x18c))
    [_0x1bf583(0xde)](_0x1bf583(0x1b8))
    ["on"](_0x1bf583(0xfc), function (_0xe9461d) {
      validation(), andLogic(), addClickClass();
    }),
  $(steps)
    [_0x1bf583(0x15a)](_0x1bf583(0x1b4))
    ["on"](_0x1bf583(0x157), function () {
      (skip = !![]), validation(), addClickClass();
    });
$(_0x1bf583(0x108))[_0x1bf583(0x1a1)](_0x1bf583(0x173))
  ? $(_0x1bf583(0x161))[_0x1bf583(0x1de)](_0x1bf583(0xec))
  : $(_0x1bf583(0x161))[_0x1bf583(0x121)](_0x1bf583(0xec));
function clickableIndicator() {
  const _0x5c6cd2 = _0x1bf583;
  $(_0x5c6cd2(0x1c8))[_0x5c6cd2(0x1a1)]("clickable") &&
    ($(_0x5c6cd2(0x142))[_0x5c6cd2(0x1de)](_0x5c6cd2(0x164)),
    $(_0x5c6cd2(0x1c8))[_0x5c6cd2(0x1a1)](_0x5c6cd2(0x173))
      ? ((x = $(this)[_0x5c6cd2(0x10d)]()), updateStep())
      : $(this)[_0x5c6cd2(0x10d)]() <= progress &&
        ((x = $(this)[_0x5c6cd2(0x10d)]()), updateStep())),
    $(_0x5c6cd2(0x181))["text"](x + 0x1);
}
$("[data-form=\x22custom-progress-indicator\x22]")["on"](
  _0x1bf583(0x157),
  clickableIndicator,
);
$(_0x1bf583(0x1f3))["data"](_0x1bf583(0xfd)) &&
  ($(_0x1bf583(0x180))[_0x1bf583(0x1e5)](function () {
    const _0x2c3cc1 = _0x1bf583;
    $(this)[_0x2c3cc1(0x115)](
      _0x2c3cc1(0xc2),
      $(this)[_0x2c3cc1(0x1a1)](_0x2c3cc1(0x19a)),
    );
  }),
  $(_0x1bf583(0x191))[_0x1bf583(0x1e5)](function () {
    const _0x284855 = _0x1bf583;
    $(this)["append"](_0x284855(0x13c), $(this)["data"](_0x284855(0x162)));
  }));
function resetFormly() {
  const _0x44357f = _0x1bf583;
  $("[data-form=\x22multistep\x22]")[_0x44357f(0xe1)](_0x44357f(0x195)),
    $(_0x44357f(0x1f3))
      ["parents"]()
      ["find"](_0x44357f(0xfa))
      [_0x44357f(0xc0)](),
    (x = 0x0),
    updateStep(),
    $(_0x44357f(0x1f3))[_0x44357f(0x9d)](),
    $(_0x44357f(0x1bc))["text"](oldSubmitText),
    $(_0x44357f(0x1bc))[_0x44357f(0x114)](oldSubmitText),
    $(_0x44357f(0x181))[_0x44357f(0x1e1)](0x1),
    $("[data-form=\x22multistep\x22]")
      [_0x44357f(0x15a)](_0x44357f(0x107))
      [_0x44357f(0x165)](_0x44357f(0xcc))
      [_0x44357f(0x1de)]("w--redirected-checked");
}
$(document)[_0x1bf583(0x147)](function (_0x3e11a1, _0x3535c0, _0x1de99f) {
  const _0x29f7c8 = _0x1bf583;
  if (_0x1de99f[_0x29f7c8(0x16c)]["includes"](_0x29f7c8(0x125))) {
    const _0x1662ad = _0x3535c0["status"] === 0xc8,
      _0x5efd97 = "redirect-form-hehexd";
    redirectTo &&
      _0x1662ad &&
      (newTab
        ? window["open"](redirectTo, _0x29f7c8(0x1df))
        : setTimeout(() => {
            location["href"] = redirectTo;
          }, redirectDelay)),
      _0x1662ad &&
        successCard !== "" &&
        $(_0x29f7c8(0xe0) + successCard + "\x22]")[_0x29f7c8(0x149)](),
      _0x1662ad &&
        formReset &&
        setTimeout(() => {
          resetFormly();
        }, resetDelay),
      !_0x1662ad &&
        ($("[data-form=\x22submit-btn\x22]")[_0x29f7c8(0x114)](
          _0x29f7c8(0x1d6),
        ),
        $(_0x29f7c8(0x1bc))[_0x29f7c8(0x1e1)](_0x29f7c8(0x1d6)));
  }
}),
  $(_0x1bf583(0x1f5))["on"](_0x1bf583(0x157), function () {
    const _0x324f76 = _0x1bf583;
    var _0x3a3f14 = $(this)
      ["parent"]()
      ["find"](_0x324f76(0xb9))
      [_0x324f76(0x1a1)](_0x324f76(0xb7));
    setTimeout(function () {
      const _0x1c4e58 = _0x324f76;
      $(_0x1c4e58(0x199) + _0x3a3f14 + "\x22]")[_0x1c4e58(0xbf)]();
    }, 0x64),
      (back = !![]),
      (x = $(this)["data"](_0x324f76(0xcd)) - 0x1),
      updateStep(),
      countCard
        ? ((curStep = x + 0x1),
          $(_0x324f76(0x8c))[_0x324f76(0x1e1)](steps["length"]))
        : $(steps[x])[_0x324f76(0x1a1)](_0x324f76(0x1ac))
          ? (curStep = x + 0x0)
          : (curStep = x + 0x1),
      $("[data-text=\x22current-step\x22]")[_0x324f76(0x1e1)](curStep),
      (back = ![]);
  }),
  $(_0x1bf583(0x19f))["on"]("click", function () {
    const _0x122fa8 = _0x1bf583;
    $(_0x122fa8(0x1f3))[_0x122fa8(0xe1)](_0x122fa8(0x195));
    let _0x4df940 = $(this);
    $(this)[_0x122fa8(0x1e1)](_0x122fa8(0x1d6)),
      setTimeout(function () {
        const _0x2a6ee5 = _0x122fa8;
        $(_0x4df940)[_0x2a6ee5(0x1e1)](oldResetText),
          $(_0x4df940)[_0x2a6ee5(0xdb)](_0x2a6ee5(0xfa))[_0x2a6ee5(0xc0)](),
          (x = 0x0),
          updateStep(),
          $(_0x2a6ee5(0x1f3))[_0x2a6ee5(0x9d)](),
          $("[data-form=\x22submit-btn\x22]")[_0x2a6ee5(0x1e1)](oldSubmitText),
          $(_0x2a6ee5(0x1bc))[_0x2a6ee5(0x114)](oldSubmitText),
          $(_0x4df940)[_0x2a6ee5(0x114)](oldSubmitText),
          $(_0x2a6ee5(0x181))[_0x2a6ee5(0x1e1)](0x1),
          $("[data-form=\x22multistep\x22]")
            [_0x2a6ee5(0x15a)](_0x2a6ee5(0x107))
            [_0x2a6ee5(0x165)](_0x2a6ee5(0xcc))
            [_0x2a6ee5(0x1de)](_0x2a6ee5(0x14e));
      }, resetDelay);
  }),
  $("body")["on"](_0x1bf583(0x14f), function (_0x245bdc) {
    const _0xad21f5 = _0x1bf583;
    if (_0x245bdc["keyCode"] === 0xd) {
      _0x245bdc[_0xad21f5(0xb3)](), _0x245bdc["stopPropagation"]();
      if ($(steps[x])["find"](_0xad21f5(0x160))["is"](_0xad21f5(0x1ba)))
        $(steps[x])
          ["find"](_0xad21f5(0xad))
          [_0xad21f5(0x114)](
            $(steps[x])
              [_0xad21f5(0x15a)]("textarea:focus")
              [_0xad21f5(0x114)]() + "\x0a",
          );
      else
        $(_0xad21f5(0xb8))["data"](_0xad21f5(0x11c)) &&
          fill &&
          totalSteps > curStep &&
          $("[data-form=\x22next-btn\x22]")[0x0][_0xad21f5(0x157)]();
    }
  }),
  $(_0x1bf583(0x150))[_0x1bf583(0x93)](function (_0x5cba6d) {
    const _0x28050e = _0x1bf583;
    (_0x5cba6d[_0x28050e(0x10f)] || _0x5cba6d[_0x28050e(0x119)]) &&
      _0x5cba6d["keyCode"] == 0xd &&
      (x >= steps[_0x28050e(0x1b0)] - 0x1 && fill
        ? $(steps[x])
            [_0x28050e(0x15a)]("[data-form=\x22submit-btn\x22]:visible")
            [_0x28050e(0x157)]()
        : (_0x5cba6d["preventDefault"](), _0x5cba6d[_0x28050e(0x8e)]()));
  }),
  $(_0x1bf583(0x1f3))
    [_0x1bf583(0x15a)](_0x1bf583(0x18c))
    ["on"](_0x1bf583(0x9b), function () {
      const _0x2fe265 = _0x1bf583;
      (all_data = all_data["filter"](
        (_0x48cfea) =>
          _0x48cfea[_0x2fe265(0xef)] !== $(this)["attr"](_0x2fe265(0x16a)),
      )),
        $(this)[_0x2fe265(0x98)]("type") === _0x2fe265(0x15d)
          ? $(this)["is"](":checked")
            ? all_data["push"]({
                field: $(this)[_0x2fe265(0x98)](_0x2fe265(0x16a)),
                value: $(this)[_0x2fe265(0x165)](_0x2fe265(0x19b))["text"](),
              })
            : $(
                _0x2fe265(0xb6) +
                  $(this)[_0x2fe265(0x98)](_0x2fe265(0x16a)) +
                  "\x22]",
              )["hide"]()
          : (all_data["push"]({
              field: $(this)["attr"]("name"),
              value: $(this)[_0x2fe265(0x114)](),
            }),
            $(this)[_0x2fe265(0x114)]() !== "" &&
              resetInputErrorMessage($(this)[_0x2fe265(0x98)]("name"))),
        all_data[_0x2fe265(0x145)](function (_0x365269) {
          const _0x1bf925 = _0x2fe265;
          $("[data-input-field=\x22" + _0x365269["field"] + "\x22]")["show"](),
            $("[data-input-field=\x22" + _0x365269[_0x1bf925(0xef)] + "\x22]")[
              _0x1bf925(0x1e1)
            ](_0x365269[_0x1bf925(0x126)]);
        });
    }),
  $("[data-form=\x22multistep\x22]")
    [_0x1bf583(0x15a)](_0x1bf583(0x160))
    ["on"](_0x1bf583(0x9b), function () {
      const _0x2b4415 = _0x1bf583;
      $(this)[_0x2b4415(0x114)]() !== "" &&
        resetInputErrorMessage($(this)[_0x2b4415(0x98)](_0x2b4415(0x16a))),
        (all_data = all_data["filter"](
          (_0x313849) =>
            _0x313849[_0x2b4415(0xef)] !==
            $(this)[_0x2b4415(0x98)](_0x2b4415(0x16a)),
        )),
        all_data[_0x2b4415(0xaa)]({
          field: $(this)["attr"]("name"),
          value: $(this)[_0x2b4415(0x114)](),
        }),
        all_data[_0x2b4415(0x145)](function (_0x4be7bc) {
          const _0x7165a3 = _0x2b4415;
          $(_0x7165a3(0xb6) + _0x4be7bc[_0x7165a3(0xef)] + "\x22]")[
            _0x7165a3(0x9d)
          ](),
            $(_0x7165a3(0xb6) + _0x4be7bc[_0x7165a3(0xef)] + "\x22]")[
              _0x7165a3(0x1e1)
            ](_0x4be7bc[_0x7165a3(0x126)]);
        });
    }),
  $(_0x1bf583(0x1f3))
    [_0x1bf583(0x15a)](_0x1bf583(0xc6))
    ["on"]("change", function () {
      const _0x2f17fa = _0x1bf583;
      $(this)[_0x2f17fa(0x114)]() !== "" &&
        resetInputErrorMessage($(this)[_0x2f17fa(0x98)]("name"));
      var _0x6fe514 = $(this)[_0x2f17fa(0x1a1)](_0x2f17fa(0xba));
      (all_data = all_data[_0x2f17fa(0x13d)](
        (_0xf559cd) =>
          _0xf559cd[_0x2f17fa(0xef)] !==
          $(this)[_0x2f17fa(0x98)](_0x2f17fa(0x16a)),
      )),
        all_data["push"]({
          field: $(this)["attr"](_0x2f17fa(0x16a)),
          value: _0x6fe514
            ? $(this)
                [_0x2f17fa(0x15a)]("option[value=\x22$(this).val()\x22]")
                [_0x2f17fa(0x1e1)]()
            : $(this)[_0x2f17fa(0x114)](),
        }),
        all_data[_0x2f17fa(0x145)](function (_0x39b1ae) {
          const _0x381f3d = _0x2f17fa;
          $(_0x381f3d(0xb6) + _0x39b1ae[_0x381f3d(0xef)] + "\x22]")[
            _0x381f3d(0x9d)
          ](),
            $(_0x381f3d(0xb6) + _0x39b1ae[_0x381f3d(0xef)] + "\x22]")[
              _0x381f3d(0x1e1)
            ](_0x39b1ae[_0x381f3d(0x126)]);
        });
    }),
  updateStep(),
  triggerInputAllData(),
  $(_0x1bf583(0xe8))["each"](function () {
    const _0x2d26d2 = _0x1bf583,
      _0x14db4f = $(this)["find"](_0x2d26d2(0xc9)),
      _0x3f6294 = [];
    console[_0x2d26d2(0x1e4)](_0x3f6294),
      _0x14db4f[_0x2d26d2(0x1e5)](function () {
        const _0x5a4c57 = _0x2d26d2;
        _0x3f6294[_0x5a4c57(0xaa)](
          $(this)[_0x5a4c57(0x1e1)]()[_0x5a4c57(0x187)](),
        );
      });
    const _0x1733d7 = $(this)["siblings"](_0x2d26d2(0xc5));
    $["each"](_0x3f6294, function (_0x268308, _0x4c4ee9) {
      const _0x291cec = _0x2d26d2,
        _0x2a588b = $(_0x291cec(0xd8))
          [_0x291cec(0x114)](_0x4c4ee9)
          ["text"](_0x4c4ee9);
      _0x1733d7[_0x291cec(0x115)](_0x2a588b);
    });
  });
function cloneRemove() {
  const _0x128b79 = _0x1bf583;
  $(_0x128b79(0x111))[_0x128b79(0x1e5)](function () {
    const _0x301e3c = _0x128b79;
    $(this)[_0x301e3c(0x15a)](_0x301e3c(0x171))[_0x301e3c(0x1b0)] < 0x2
      ? $(this)
          [_0x301e3c(0x15a)]("[data-form=\x22remove-clone\x22]")
          [_0x301e3c(0xc0)]()
      : $(this)[_0x301e3c(0x15a)]("[data-form=\x22remove-clone\x22]")["show"]();
  });
}
function cloneRemoveInput() {
  const _0x210791 = _0x1bf583;
  $(_0x210791(0x1ad))["each"](function () {
    const _0x23ff21 = _0x210791;
    $(this)[_0x23ff21(0x15a)]("[data-clone-input]")[_0x23ff21(0x1b0)] < 0x2
      ? $(this)[_0x23ff21(0x15a)](_0x23ff21(0x1bd))[_0x23ff21(0xc0)]()
      : $(this)[_0x23ff21(0x15a)](_0x23ff21(0x1bd))[_0x23ff21(0x9d)]();
  });
}
$(_0x1bf583(0x14d))["on"](_0x1bf583(0x157), function () {
  const _0x50405e = _0x1bf583,
    _0x2bbbd8 =
      $(this)[_0x50405e(0xdb)](_0x50405e(0x171))[_0x50405e(0x1b0)] > 0x0
        ? $(this)[_0x50405e(0xdb)](_0x50405e(0x171))[_0x50405e(0x10d)]()
        : $(this)["parents"](_0x50405e(0x135))[_0x50405e(0x10d)](),
    _0x2c8fa4 =
      $(this)[_0x50405e(0xdb)](_0x50405e(0x171))["length"] > 0x0
        ? $(this)[_0x50405e(0xdb)](_0x50405e(0x171))["data"](_0x50405e(0xe3))
        : $(this)[_0x50405e(0xdb)]("[data-display]")["data"](_0x50405e(0x136));
  $(_0x50405e(0x169) + _0x2c8fa4 + "\x22]")
    ["eq"](_0x2bbbd8)
    [_0x50405e(0xc4)](),
    $("[data-display=\x22" + _0x2c8fa4 + "\x22]")
      ["eq"](_0x2bbbd8)
      ["remove"](),
    cloneRemove(),
    validation();
}),
  $(_0x1bf583(0x1bd))["on"](_0x1bf583(0x157), function () {
    const _0xc9695e = _0x1bf583;
    let _0x45078f = $(this)
      [_0xc9695e(0x165)]()
      [_0xc9695e(0x98)](_0xc9695e(0x16a));
    $(this)[_0xc9695e(0x1eb)](_0xc9695e(0x1ee))[_0xc9695e(0xc4)](),
      $("[data-input-field=\x22" + _0x45078f + "\x22]")
        [_0xc9695e(0x1eb)](_0xc9695e(0x11a))
        ["remove"](),
      cloneRemove(),
      validation();
  }),
  $(_0x1bf583(0x91))["on"]("click", function () {
    const _0x2c48bf = _0x1bf583;
    let _0x4a5192 = $(this)["data"]("add-new");
    var _0x215816 = $("[data-clone=\x22" + _0x4a5192 + "\x22]")
        ["eq"](0x0)
        [_0x2c48bf(0xe3)](!![]),
      _0x2424ea = $(_0x2c48bf(0x1c1) + _0x4a5192 + "\x22]")
        ["eq"](0x0)
        ["clone"](!![]);
    let _0x44eaec = "";
    $(this)[_0x2c48bf(0x15a)](_0x2c48bf(0x14d))[_0x2c48bf(0x9d)](),
      cloneRemove(),
      _0x215816["find"](_0x2c48bf(0x1ee))
        [_0x2c48bf(0x15a)](_0x2c48bf(0xfc))
        [_0x2c48bf(0x114)](""),
      _0x215816["find"](_0x2c48bf(0x1ee))
        [_0x2c48bf(0x15a)]("select")
        [_0x2c48bf(0x114)](""),
      _0x215816["find"](_0x2c48bf(0x1ee))
        [_0x2c48bf(0x15a)](_0x2c48bf(0x160))
        [_0x2c48bf(0x114)](""),
      _0x215816[_0x2c48bf(0x15a)](_0x2c48bf(0x1ee))
        [_0x2c48bf(0xde)](":first")
        [_0x2c48bf(0xc4)](),
      _0x2424ea[_0x2c48bf(0x15a)]("[data-display-input]")
        [_0x2c48bf(0xde)](_0x2c48bf(0x1ed))
        [_0x2c48bf(0xc4)](),
      _0x215816[_0x2c48bf(0x15a)](_0x2c48bf(0xfc))[_0x2c48bf(0x1e5)](
        function () {
          const _0x2c98af = _0x2c48bf;
          if (
            $(this)[_0x2c98af(0x11e)](_0x2c98af(0x1ee))[_0x2c98af(0x1b0)] > 0x0
          ) {
            let _0x4186f7 = 0x0;
            const _0x8e853a = $(this)
              [_0x2c98af(0x11e)](_0x2c98af(0x1ee))
              [_0x2c98af(0x1a1)](_0x2c98af(0xa0));
            console[_0x2c98af(0x1e4)](
              $(this)
                [_0x2c98af(0x11e)](_0x2c98af(0x1ee))
                [_0x2c98af(0x1a1)](_0x2c98af(0xa0)),
              this[_0x2c98af(0x16a)],
            ),
              $(_0x2c98af(0x175) + _0x8e853a + _0x2c98af(0x1e3))[
                _0x2c98af(0x1e5)
              ](function () {
                const _0x39dfdf = _0x2c98af,
                  _0x220227 = $(this)[_0x39dfdf(0x98)](_0x39dfdf(0x16a));
                if (_0x220227 && _0x220227[_0x39dfdf(0xf2)]("relationship-")) {
                  const _0x1024da = parseInt(_0x220227["split"]("-")[0x1]);
                  !isNaN(_0x1024da) &&
                    _0x1024da > _0x4186f7 &&
                    (_0x4186f7 = _0x1024da);
                }
              }),
              _0x4186f7++,
              (_0x44eaec = this[_0x2c98af(0x16a)] + "-" + _0x4186f7),
              console[_0x2c98af(0x1e4)](_0x8e853a, _0x44eaec);
          } else
            _0x44eaec =
              this["name"] +
              "-" +
              (parseInt(
                $(_0x2c98af(0x169) + _0x4a5192 + "\x22]")
                  [_0x2c98af(0xf0)]()
                  [_0x2c98af(0x10d)](),
              ) +
                0x1);
          $(this)[_0x2c98af(0x114)](""),
            $(this)[_0x2c98af(0x98)](_0x2c98af(0x16a), _0x44eaec),
            $(this)[_0x2c98af(0x98)](_0x2c98af(0x17a), _0x44eaec);
        },
      ),
      _0x215816[_0x2c48bf(0x15a)](_0x2c48bf(0x160))[_0x2c48bf(0x1e5)](
        function () {
          const _0x2fc702 = _0x2c48bf;
          if (
            $(this)[_0x2fc702(0x11e)](_0x2fc702(0x1ee))[_0x2fc702(0x1b0)] > 0x0
          ) {
            let _0x2dbea8 = 0x0;
            const _0x53aebc = $(this)
              ["closest"](_0x2fc702(0x1ee))
              [_0x2fc702(0x1a1)](_0x2fc702(0xa0));
            console[_0x2fc702(0x1e4)](
              $(this)["closest"](_0x2fc702(0x1ee))["data"](_0x2fc702(0xa0)),
              this[_0x2fc702(0x16a)],
            ),
              $("[data-clone-input=\x22" + _0x53aebc + _0x2fc702(0x156))[
                "each"
              ](function () {
                const _0x2a8956 = _0x2fc702,
                  _0x315367 = $(this)[_0x2a8956(0x98)]("name");
                if (_0x315367 && _0x315367[_0x2a8956(0xf2)](_0x2a8956(0x13e))) {
                  const _0x584890 = parseInt(
                    _0x315367[_0x2a8956(0x10b)]("-")[0x1],
                  );
                  !isNaN(_0x584890) &&
                    _0x584890 > _0x2dbea8 &&
                    (_0x2dbea8 = _0x584890);
                }
              }),
              _0x2dbea8++,
              (_0x44eaec = this[_0x2fc702(0x16a)] + "-" + _0x2dbea8),
              console[_0x2fc702(0x1e4)](_0x53aebc, _0x44eaec);
          } else
            _0x44eaec =
              this[_0x2fc702(0x16a)] +
              "-" +
              (parseInt(
                $(_0x2fc702(0x169) + _0x4a5192 + "\x22]")
                  [_0x2fc702(0xf0)]()
                  ["index"](),
              ) +
                0x1);
          $(this)[_0x2fc702(0x114)](""),
            $(this)[_0x2fc702(0x98)]("name", _0x44eaec),
            $(this)[_0x2fc702(0x98)](_0x2fc702(0x17a), _0x44eaec);
        },
      ),
      _0x215816[_0x2c48bf(0x15a)](_0x2c48bf(0xc6))["each"](function () {
        const _0x44a060 = _0x2c48bf;
        if (
          $(this)[_0x44a060(0x11e)](_0x44a060(0x1ee))[_0x44a060(0x1b0)] > 0x0
        ) {
          let _0x38b22b = 0x0;
          const _0x5c3c02 = $(this)
            [_0x44a060(0x11e)](_0x44a060(0x1ee))
            [_0x44a060(0x1a1)](_0x44a060(0xa0));
          console[_0x44a060(0x1e4)](
            $(this)
              [_0x44a060(0x11e)](_0x44a060(0x1ee))
              [_0x44a060(0x1a1)](_0x44a060(0xa0)),
            this[_0x44a060(0x16a)],
          ),
            $(_0x44a060(0x175) + _0x5c3c02 + _0x44a060(0x167))[
              _0x44a060(0x1e5)
            ](function () {
              const _0x45cdb9 = _0x44a060,
                _0x1c3bea = $(this)["attr"](_0x45cdb9(0x16a));
              if (_0x1c3bea && _0x1c3bea[_0x45cdb9(0xf2)](_0x45cdb9(0x13e))) {
                const _0x1419bf = parseInt(_0x1c3bea["split"]("-")[0x1]);
                !isNaN(_0x1419bf) &&
                  _0x1419bf > _0x38b22b &&
                  (_0x38b22b = _0x1419bf);
              }
            }),
            _0x38b22b++,
            (_0x44eaec = this[_0x44a060(0x16a)] + "-" + _0x38b22b),
            console["log"](_0x5c3c02, _0x44eaec);
        } else
          _0x44eaec =
            this[_0x44a060(0x16a)] +
            "-" +
            (parseInt(
              $("[data-clone=\x22" + _0x4a5192 + "\x22]")
                [_0x44a060(0xf0)]()
                [_0x44a060(0x10d)](),
            ) +
              0x1);
        $(this)[_0x44a060(0x114)](""),
          $(this)[_0x44a060(0x98)](_0x44a060(0x16a), _0x44eaec),
          $(this)[_0x44a060(0x98)]("data-name", _0x44eaec);
      }),
      _0x2424ea["find"](_0x2c48bf(0xb9))[_0x2c48bf(0x1e5)](function () {
        const _0xbf3ebf = _0x2c48bf;
        if ($(this)[_0xbf3ebf(0x1a1)](_0xbf3ebf(0xb7))) {
          let _0x5ba232 = 0x0;
          const _0x4561f0 = $(this)
            [_0xbf3ebf(0x1a1)](_0xbf3ebf(0xb7))
            [_0xbf3ebf(0x10b)]("-")[0x0];
          $(
            _0xbf3ebf(0x1c1) +
              _0x4a5192 +
              _0xbf3ebf(0x92) +
              _0x4561f0 +
              "\x22]",
          )[_0xbf3ebf(0x1e5)](function () {
            const _0x4d6eb6 = _0xbf3ebf,
              _0x53b439 = $(this)["attr"]("data-input-field"),
              _0x43fce3 = parseInt(_0x53b439[_0x4d6eb6(0x10b)]("-")[0x1]);
            !isNaN(_0x43fce3) &&
              _0x43fce3 > _0x5ba232 &&
              (_0x5ba232 = _0x43fce3);
          }),
            _0x5ba232++;
          const _0x1cbfea = _0x4561f0 + "-" + _0x5ba232;
          console[_0xbf3ebf(0x1e4)](_0x1cbfea),
            $(this)[_0xbf3ebf(0x98)](_0xbf3ebf(0xd5), _0x1cbfea);
        }
      }),
      $(_0x2c48bf(0x95) + _0x4a5192 + "\x22]")[_0x2c48bf(0x115)](_0x215816),
      $(_0x2c48bf(0x1d2) + _0x4a5192 + "\x22]")["append"](_0x2424ea),
      $(_0x2c48bf(0x14b) + _0x4a5192 + "\x22]")[_0x2c48bf(0x1e5)](function () {
        const _0x29af79 = _0x2c48bf;
        $(this)[_0x29af79(0x1e1)](
          $(this)
            [_0x29af79(0xdb)](_0x29af79(0x169) + _0x4a5192 + "\x22]")
            ["index"]() + 0x1,
        );
      }),
      $(_0x2c48bf(0xb4) + _0x4a5192 + "\x22]")[_0x2c48bf(0x1e5)](function () {
        const _0x247c42 = _0x2c48bf;
        $(this)["text"](
          $(this)
            [_0x247c42(0xdb)](_0x247c42(0x1c1) + _0x4a5192 + "\x22]")
            [_0x247c42(0x10d)]() + 0x1,
        );
      }),
      validation();
  }),
  $(_0x1bf583(0x1c5))["on"](_0x1bf583(0x157), function () {
    const _0xe7f0a5 = _0x1bf583,
      _0x424092 = $(this)["parents"](_0xe7f0a5(0x171))[_0xe7f0a5(0x10d)]();
    let _0x22fdd0 = $(this)[_0xe7f0a5(0x1a1)](_0xe7f0a5(0x1d1));
    var _0x91349b = $(_0xe7f0a5(0x175) + _0x22fdd0 + "\x22]")
        ["eq"](0x0)
        ["clone"](!![]),
      _0x237a89 = $(_0xe7f0a5(0x13b) + _0x22fdd0 + "\x22]")
        ["eq"](0x0)
        [_0xe7f0a5(0xe3)](!![]);
    $(this)["find"]("[data-form=\x22remove-input-clone\x22]")["show"](),
      cloneRemoveInput();
    let _0x3b4b13 = 0x0;
    $(_0xe7f0a5(0x175) + _0x22fdd0 + _0xe7f0a5(0x1e3))["each"](function () {
      const _0x3f372b = _0xe7f0a5,
        _0x516283 = $(this)[_0x3f372b(0x98)](_0x3f372b(0x16a));
      if (_0x516283) {
        const _0x1d12ea = parseInt(_0x516283["split"]("-")[0x1]);
        !isNaN(_0x1d12ea) && _0x1d12ea > _0x3b4b13 && (_0x3b4b13 = _0x1d12ea);
      }
    }),
      $(_0xe7f0a5(0x175) + _0x22fdd0 + _0xe7f0a5(0x167))[_0xe7f0a5(0x1e5)](
        function () {
          const _0x1b449e = _0xe7f0a5,
            _0x314d7e = $(this)[_0x1b449e(0x98)](_0x1b449e(0x16a));
          if (_0x314d7e) {
            const _0x2ca6e7 = parseInt(_0x314d7e[_0x1b449e(0x10b)]("-")[0x1]);
            !isNaN(_0x2ca6e7) &&
              _0x2ca6e7 > _0x3b4b13 &&
              (_0x3b4b13 = _0x2ca6e7);
          }
        },
      ),
      $("[data-clone-input=\x22" + _0x22fdd0 + _0xe7f0a5(0x156))[
        _0xe7f0a5(0x1e5)
      ](function () {
        const _0x431396 = _0xe7f0a5,
          _0x5676e3 = $(this)[_0x431396(0x98)](_0x431396(0x16a));
        if (_0x5676e3) {
          const _0x574056 = parseInt(_0x5676e3[_0x431396(0x10b)]("-")[0x1]);
          !isNaN(_0x574056) && _0x574056 > _0x3b4b13 && (_0x3b4b13 = _0x574056);
        }
      }),
      _0x3b4b13++,
      _0x91349b["find"](_0xe7f0a5(0xfc))[_0xe7f0a5(0x1e5)](function () {
        const _0x3c7582 = _0xe7f0a5,
          _0x5d1b3e = $(this)[_0x3c7582(0x98)]("name");
        let _0x16d18a = _0x5d1b3e + "-" + _0x3b4b13;
        $(this)["val"](""),
          $(this)[_0x3c7582(0x98)](_0x3c7582(0x16a), _0x16d18a),
          $(this)[_0x3c7582(0x98)](_0x3c7582(0x17a), _0x16d18a);
      }),
      _0x91349b["find"](_0xe7f0a5(0xc6))[_0xe7f0a5(0x1e5)](function () {
        const _0x3f57dd = _0xe7f0a5,
          _0x367b3e = $(this)[_0x3f57dd(0x98)](_0x3f57dd(0x16a));
        let _0x269117 = _0x367b3e + "-" + _0x3b4b13;
        $(this)[_0x3f57dd(0x114)](""),
          $(this)[_0x3f57dd(0x98)](_0x3f57dd(0x16a), _0x269117),
          $(this)[_0x3f57dd(0x98)](_0x3f57dd(0x17a), _0x269117);
      }),
      _0x91349b[_0xe7f0a5(0x15a)]("textarea")[_0xe7f0a5(0x1e5)](function () {
        const _0x4d1d43 = _0xe7f0a5,
          _0x3e172c = $(this)[_0x4d1d43(0x98)]("name");
        let _0x12844e = _0x3e172c + "-" + _0x3b4b13;
        $(this)[_0x4d1d43(0x114)](""),
          $(this)[_0x4d1d43(0x98)](_0x4d1d43(0x16a), _0x12844e),
          $(this)[_0x4d1d43(0x98)](_0x4d1d43(0x17a), _0x12844e);
      }),
      _0x237a89[_0xe7f0a5(0x15a)](_0xe7f0a5(0xb9))[_0xe7f0a5(0x1e5)](
        function () {
          const _0x2dc5f6 = _0xe7f0a5;
          $(this)[_0x2dc5f6(0x98)](
            _0x2dc5f6(0xd5),
            _0x2dc5f6(0x13e) + _0x3b4b13,
          );
        },
      ),
      $(this)
        [_0xe7f0a5(0x165)](_0xe7f0a5(0x134) + _0x22fdd0 + "\x22]")
        [_0xe7f0a5(0x115)](_0x91349b),
      $(_0xe7f0a5(0x135))
        ["eq"](_0x424092)
        [_0xe7f0a5(0x15a)](_0xe7f0a5(0xbc) + _0x22fdd0 + "\x22]")
        [_0xe7f0a5(0x115)](_0x237a89),
      $(_0xe7f0a5(0x1ce) + _0x22fdd0 + "\x22]")[_0xe7f0a5(0x1e5)](function () {
        const _0x549619 = _0xe7f0a5;
        $(this)["text"](
          $(this)
            [_0x549619(0xdb)](_0x549619(0x175) + _0x22fdd0 + "\x22]")
            ["index"]() + 0x1,
        );
      }),
      $("[data-display-input-index=\x22" + _0x22fdd0 + "\x22]")[
        _0xe7f0a5(0x1e5)
      ](function () {
        const _0x267b7c = _0xe7f0a5;
        $(this)[_0x267b7c(0x1e1)](
          $(this)
            [_0x267b7c(0xdb)](_0x267b7c(0x13b) + _0x22fdd0 + "\x22]")
            [_0x267b7c(0x10d)]() + 0x1,
        );
      }),
      validation();
  }),
  $("[data-remove-upload]")["on"]("click", function () {
    const _0x20c488 = _0x1bf583,
      _0x372288 = $(this)["data"]("remove-upload");
    $(_0x20c488(0x199) + _0x372288 + "\x22]")[_0x20c488(0x114)](""),
      validation();
  });
function andLogic() {
  const _0x5d1631 = _0x1bf583;
  conditionalResult &&
    (steps["eq"](x)[_0x5d1631(0x15a)](_0x5d1631(0x123))[_0x5d1631(0xc0)](),
    console[_0x5d1631(0x1e4)](_0x5d1631(0x124)),
    steps["eq"](x)
      [_0x5d1631(0x15a)](_0x5d1631(0x123))
      [_0x5d1631(0x1e5)](function () {
        const _0x197a73 = _0x5d1631;
        function _0x44ba46(_0x221531) {
          const _0x41eeee = _0xd5f3,
            _0x417f7f = _0x221531[_0x41eeee(0x10b)]("&"),
            _0x24fbc3 = [];
          return (
            _0x417f7f[_0x41eeee(0x145)]((_0x25687e) => {
              const _0x5bf321 = _0x41eeee,
                [_0x43311a, _0x4ef609] = _0x25687e[_0x5bf321(0x10b)]("=");
              _0x24fbc3["push"]({ field: _0x43311a, value: _0x4ef609 });
            }),
            _0x24fbc3
          );
        }
        const _0x4b60ac = $(this)[_0x197a73(0x98)](_0x197a73(0xbd));
        console["log"](_0x4b60ac);
        const _0x54367d = _0x44ba46(_0x4b60ac);
        function _0x1006ce(_0x7c1d73, _0x1f844a) {
          const _0x740d89 = _0x197a73;
          return _0x1f844a[_0x740d89(0xa8)]((_0x2bb5d6, _0x166234) => {
            const _0x28ddf7 = _0x740d89;
            if (
              _0x7c1d73[0x0] &&
              _0x2bb5d6[_0x28ddf7(0xef)] === _0x7c1d73[0x0][_0x28ddf7(0xef)]
            )
              return _0x7c1d73[_0x28ddf7(0xf8)](
                (_0x245dcf, _0xb8263) =>
                  _0x1f844a[_0x166234 + _0xb8263] &&
                  _0x1f844a[_0x166234 + _0xb8263][_0x28ddf7(0xef)] ===
                    _0x245dcf[_0x28ddf7(0xef)] &&
                  _0x1f844a[_0x166234 + _0xb8263][_0x28ddf7(0x126)] ===
                    _0x245dcf[_0x28ddf7(0x126)],
              );
            return ![];
          });
        }
        const _0x253bc8 = _0x1006ce(_0x54367d, all_data);
        _0x253bc8 ? $(this)["show"]() : $(this)[_0x197a73(0xc0)]();
      }));
}
$(_0x1bf583(0xf3))[_0x1bf583(0x121)](_0x1bf583(0xc0)),
  $(_0x1bf583(0x18e))["on"](_0x1bf583(0xfc), function () {
    const _0x1f9ba8 = _0x1bf583,
      _0x5a87e2 = $(this)[_0x1f9ba8(0x1a1)](_0x1f9ba8(0x174)),
      _0x404468 = $(this)[_0x1f9ba8(0x114)](),
      _0x4ade77 = $(_0x1f9ba8(0x132) + _0x5a87e2 + "\x22]")[_0x1f9ba8(0x1a1)](
        "progressive-input-value",
      );
    let _0x4ab748 = $(
        _0x1f9ba8(0x132) + _0x5a87e2 + _0x1f9ba8(0xdf) + _0x404468 + "\x22]",
      ),
      _0x4acb88 = $(
        "[data-progressive-target=\x22" + _0x5a87e2 + _0x1f9ba8(0x1bb),
      );
    $("[data-progressive-target=\x22" + _0x5a87e2 + "\x22]")[_0x1f9ba8(0x121)](
      _0x1f9ba8(0xc0),
    ),
      $(_0x1f9ba8(0x132) + _0x5a87e2 + "\x22]")["removeClass"](_0x1f9ba8(0x9d));
    _0x404468 !== "" &&
      (_0x4ade77 === "*" && _0x404468 !== ""
        ? (_0x4acb88[_0x1f9ba8(0x1de)](_0x1f9ba8(0xc0)),
          _0x4acb88[_0x1f9ba8(0x121)](_0x1f9ba8(0x9d)))
        : (_0x4ab748["removeClass"](_0x1f9ba8(0xc0)),
          _0x4ab748[_0x1f9ba8(0x121)](_0x1f9ba8(0x9d))));
    function _0x399b34(_0x277cd6) {
      const _0x7e8be2 = _0x1f9ba8;
      _0x277cd6 &&
        $(_0x7e8be2(0xb1) + _0x277cd6 + "\x22]")[_0x7e8be2(0x114)]() !== "" &&
        $(_0x7e8be2(0xb1) + _0x277cd6 + "\x22]")[_0x7e8be2(0xe1)](
          _0x7e8be2(0xfc),
        );
    }
    let _0xb4fadf = $("[data-progressive-target=\x22" + _0x5a87e2 + "\x22]")
      ["find"]("[data-progressive-input]")
      [_0x1f9ba8(0x1a1)](_0x1f9ba8(0x174));
    _0x399b34(_0xb4fadf),
      $(_0x1f9ba8(0x138))["each"](function () {
        const _0x4cc3c7 = _0x1f9ba8,
          _0x296e01 = $(this)[_0x4cc3c7(0x1a1)](_0x4cc3c7(0x174));
        $(_0x4cc3c7(0x132) + _0x296e01 + "\x22]")["removeClass"]("show"),
          $("[data-progressive-target=\x22" + _0x296e01 + "\x22]")[
            _0x4cc3c7(0x121)
          ](_0x4cc3c7(0xc0));
      });
  });
function addClickClass() {
  const _0x16009a = _0x1bf583,
    _0x58e94d = $(this)[_0x16009a(0x1a1)](_0x16009a(0x197)),
    _0x9cc42c = $(this)["attr"](_0x16009a(0x1d5)),
    _0x5c86a0 = $(this)[_0x16009a(0x98)](_0x16009a(0x16a));
  console[_0x16009a(0x1e4)](
    _0x16009a(0x118),
    $(this)["is"](_0x16009a(0x17f)),
    $(this)[_0x16009a(0x98)](_0x16009a(0x16a)),
  ),
    $(_0x16009a(0x199) + _0x5c86a0 + "\x22]")
      [_0x16009a(0x1eb)]()
      [_0x16009a(0x1de)](_0x58e94d),
    $(this)["is"](":checked") &&
      $(this)["parent"]()[_0x16009a(0x121)](_0x58e94d);
}
$(_0x1bf583(0x1ea))["on"](_0x1bf583(0x9b), addClickClass),
  scrollTop(),
  cloneRemove(),
  cloneRemoveInput();
const formlyUrlParams = new URLSearchParams(
    window["location"][_0x1bf583(0x158)],
  ),
  formlySupportParam = formlyUrlParams[_0x1bf583(0xb0)]("formly-support"),
  showButton = formlySupportParam === "true",
  passIcon = _0x1bf583(0x12a),
  failIcon = _0x1bf583(0x127);
let isScriptLoaded = !![],
  scriptLocation = _0x1bf583(0xca),
  isMultistepAttributePresent = !![],
  isMultistepOnFormElement = !![],
  areButtonsPresent = !![],
  isNextBtnOnSubmit = ![],
  isSubmitBtnOnSubmit = !![],
  isBackBtnOnSubmit = ![],
  formType = logicExtra ? _0x1bf583(0xd0) : "Basic\x20(No\x20Formly\x20Logic)",
  resultStatus = _0x1bf583(0x146),
  scriptSrcAdded = "";
function isElementPresent(_0x1a511b, _0x53fee9) {
  const _0x34f1a6 = _0x1bf583;
  return (
    document[_0x34f1a6(0x1db)](
      "[" + _0x53fee9 + "=\x22" + _0x1a511b + "\x22]",
    ) !== null
  );
}
isMultistepAttributePresent = isElementPresent(
  _0x1bf583(0x151),
  _0x1bf583(0xee),
);
const multistepForm = document[_0x1bf583(0x1db)](_0x1bf583(0x89)),
  formStepLength = multistepForm["querySelectorAll"](_0x1bf583(0x18f))[
    "length"
  ];
isMultistepOnFormElement = multistepForm !== null;
const multistepContainer = document[_0x1bf583(0x1db)](_0x1bf583(0x1f3)),
  nextBtn = multistepContainer[_0x1bf583(0x1db)](
    "[data-form=\x22next-btn\x22]",
  ),
  backBtn = multistepContainer["querySelector"](_0x1bf583(0x185)),
  submitBtn = multistepContainer[_0x1bf583(0x1db)](_0x1bf583(0x1bc));
(areButtonsPresent =
  nextBtn !== null && backBtn !== null && submitBtn !== null),
  (isNextBtnOnSubmit =
    nextBtn && nextBtn[_0x1bf583(0x9c)][_0x1bf583(0xe7)]() === "input"),
  (isSubmitBtnOnSubmit =
    submitBtn &&
    submitBtn["tagName"][_0x1bf583(0xe7)]() === "input" &&
    submitBtn["type"][_0x1bf583(0xe7)]() === _0x1bf583(0x130)),
  (isBackBtnOnSubmit =
    backBtn && backBtn[_0x1bf583(0x9c)]["toLowerCase"]() === "input");
const checkPowerup = (_0x1ef941) =>
    document[_0x1bf583(0x1db)](_0x1ef941) !== null,
  progressBarAttr = checkPowerup(_0x1bf583(0x1d3)),
  progressIndicatorAttr = checkPowerup(_0x1bf583(0x142)),
  customProgressAttr = checkPowerup("[data-form=\x22progress-indicator\x22]"),
  cardDivAttr = checkPowerup(_0x1bf583(0xe5)),
  currentStepAttr = checkPowerup("[data-text=\x22current-step\x22]"),
  totalStepAttr = checkPowerup("[data-text=\x22total-steps\x22]"),
  enterAttr = checkPowerup(_0x1bf583(0x18b)),
  submitAttr = checkPowerup(_0x1bf583(0x1ca)),
  radioSkipAttr = checkPowerup(_0x1bf583(0xeb)),
  customCheckboxAttr = checkPowerup(_0x1bf583(0x9f)),
  recapatchaAttr = checkPowerup(_0x1bf583(0xaf));
(!isScriptLoaded ||
  scriptLocation !== _0x1bf583(0xca) ||
  !isMultistepAttributePresent ||
  !isMultistepOnFormElement ||
  !areButtonsPresent ||
  isNextBtnOnSubmit ||
  !isSubmitBtnOnSubmit ||
  isBackBtnOnSubmit) &&
  (resultStatus = _0x1bf583(0x188));
function isScriptUrlMatch(_0x21114a, _0x50331e) {
  const _0xfeced = _0x1bf583;
  for (
    var _0x23265c = 0x0;
    _0x23265c < _0x50331e[_0xfeced(0x1b0)];
    _0x23265c++
  ) {
    if (_0x21114a[_0xfeced(0x1c6)](_0x50331e[_0x23265c])) return !![];
  }
  return ![];
}
var keywordsToCheck = [_0x1bf583(0x193), _0x1bf583(0x1a6)],
  scripts = document[_0x1bf583(0x1cb)](_0x1bf583(0x1a8)),
  matchedScripts = [];
for (var i = 0x0; i < scripts[_0x1bf583(0x1b0)]; i++) {
  var scriptSrcs = scripts[i]["src"];
  isScriptUrlMatch(scriptSrcs, keywordsToCheck) &&
    matchedScripts[_0x1bf583(0xaa)](scriptSrcs);
}
if (matchedScripts[_0x1bf583(0x1b0)] > 0x0) {
  scriptSrcAdded = matchedScripts;
  const script = document[_0x1bf583(0x1db)](
    _0x1bf583(0x1a2) + scriptSrcAdded + "\x22]",
  );
  script &&
    (scriptLocation =
      script[_0x1bf583(0xf4)][_0x1bf583(0x9c)] === _0x1bf583(0x1c0)
        ? _0x1bf583(0x11f)
        : _0x1bf583(0xc7));
} else
  scriptSrcAdded =
    "No\x20Formly\x20script\x20added\x20to\x20the\x20page!" + failIcon;
const newElement = document[_0x1bf583(0xfe)](_0x1bf583(0x15c)),
  newStyle = document[_0x1bf583(0xfe)](_0x1bf583(0xf7));
(newStyle[_0x1bf583(0xc3)] = _0x1bf583(0x122)),
  document[_0x1bf583(0xca)][_0x1bf583(0x155)](newStyle);
showButton && document[_0x1bf583(0x150)]["appendChild"](newElement);
newElement["innerHTML"] =
  _0x1bf583(0x10c) +
  formType +
  _0x1bf583(0xda) +
  scriptSrcAdded +
  _0x1bf583(0xa9) +
  scriptLocation +
  _0x1bf583(0x13f) +
  (isMultistepOnFormElement ? passIcon : failIcon) +
  "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Multistep\x20form\x20attribute\x20is\x20on\x20Form\x20element\x20and\x20not\x20on\x20Form\x20Block\x20element\x0a\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>2.\x20Form\x20Steps:\x20data-form=step\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
  (formStepLength > 0x0 ? passIcon : failIcon) +
  _0x1bf583(0x8d) +
  formStepLength +
  _0x1bf583(0x1b7) +
  (nextBtn ? passIcon : failIcon) +
  _0x1bf583(0x1d9) +
  (isNextBtnOnSubmit ? failIcon : passIcon) +
  _0x1bf583(0x178) +
  (backBtn ? passIcon : failIcon) +
  _0x1bf583(0x1c2) +
  (isBackBtnOnSubmit ? failIcon : passIcon) +
  _0x1bf583(0x101) +
  (backBtn ? passIcon : failIcon) +
  _0x1bf583(0x88) +
  (isSubmitBtnOnSubmit ? passIcon : failIcon) +
  _0x1bf583(0xed) +
  (progressBarAttr && progressIndicatorAttr
    ? _0x1bf583(0xe9) + passIcon + _0x1bf583(0xe4)
    : "") +
  _0x1bf583(0x1c3) +
  (customProgressAttr ? _0x1bf583(0x163) + passIcon + _0x1bf583(0xe4) : "") +
  _0x1bf583(0x1c3) +
  (cardDivAttr ? _0x1bf583(0x177) + passIcon + "</strong>" : "") +
  _0x1bf583(0x1c3) +
  (currentStepAttr ? _0x1bf583(0xc1) + passIcon + _0x1bf583(0xe4) : "") +
  _0x1bf583(0x1c3) +
  (totalStepAttr
    ? "<strong\x20class=\x22f-text-white\x22>Total\x20Step\x20Text\x20" +
      passIcon +
      "</strong>"
    : "") +
  _0x1bf583(0x1c3) +
  (enterAttr ? _0x1bf583(0xd4) + passIcon + _0x1bf583(0xe4) : "") +
  _0x1bf583(0x1c3) +
  (submitAttr ? _0x1bf583(0x1a9) + passIcon + _0x1bf583(0xe4) : "") +
  _0x1bf583(0x1c3) +
  (radioSkipAttr
    ? "<strong\x20class=\x22f-text-white\x22>Radio\x20Inputs\x20" +
      passIcon +
      "</strong>"
    : "") +
  _0x1bf583(0x1c3) +
  (customCheckboxAttr ? _0x1bf583(0x1b6) + passIcon + _0x1bf583(0xe4) : "") +
  _0x1bf583(0x1c3) +
  (recapatchaAttr ? _0x1bf583(0xb2) + passIcon + _0x1bf583(0xe4) : "") +
  _0x1bf583(0xae);
function openNav() {
  const _0x1eb601 = _0x1bf583;
  (document[_0x1eb601(0xa7)]("f-mySidenav")[_0x1eb601(0xf7)][_0x1eb601(0xf1)] =
    _0x1eb601(0x10a)),
    (document[_0x1eb601(0xa7)](_0x1eb601(0x1aa))["style"][_0x1eb601(0x166)] =
      "12px");
}
function _0xd5f3(_0x6690e9, _0x5457b3) {
  const _0x3ae5aa = _0x3ae5();
  return (
    (_0xd5f3 = function (_0xd5f31e, _0x28450a) {
      _0xd5f31e = _0xd5f31e - 0x88;
      let _0x5ee6a0 = _0x3ae5aa[_0xd5f31e];
      return _0x5ee6a0;
    }),
    _0xd5f3(_0x6690e9, _0x5457b3)
  );
}
function closeNav() {
  const _0x1ef93d = _0x1bf583;
  (document[_0x1ef93d(0xa7)](_0x1ef93d(0x1aa))[_0x1ef93d(0xf7)]["width"] = "0"),
    (document[_0x1ef93d(0xa7)]("f-mySidenav")[_0x1ef93d(0xf7)][
      _0x1ef93d(0x166)
    ] = _0x1ef93d(0xa3));
}
