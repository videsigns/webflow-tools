//30th Jan 2023
//Bug fix
//2. Commented out console log

const _0x4d9eeb = _0x4c4b;
(function (_0x47a3f5, _0x5a0187) {
  const _0x2e186c = _0x4c4b,
    _0x3a1885 = _0x47a3f5();
  while (!![]) {
    try {
      const _0x2777c3 =
        parseInt(_0x2e186c(0x17c)) / 0x1 +
        (parseInt(_0x2e186c(0x234)) / 0x2) *
          (parseInt(_0x2e186c(0x147)) / 0x3) +
        (-parseInt(_0x2e186c(0x1e0)) / 0x4) *
          (parseInt(_0x2e186c(0x10c)) / 0x5) +
        (-parseInt(_0x2e186c(0x275)) / 0x6) *
          (parseInt(_0x2e186c(0x277)) / 0x7) +
        (parseInt(_0x2e186c(0x1a1)) / 0x8) *
          (parseInt(_0x2e186c(0x179)) / 0x9) +
        (-parseInt(_0x2e186c(0x238)) / 0xa) *
          (-parseInt(_0x2e186c(0x1e9)) / 0xb) +
        -parseInt(_0x2e186c(0x22e)) / 0xc;
      if (_0x2777c3 === _0x5a0187) break;
      else _0x3a1885["push"](_0x3a1885["shift"]());
    } catch (_0x341216) {
      _0x3a1885["push"](_0x3a1885["shift"]());
    }
  }
})(_0x4d08, 0xccf35);
let x = 0x0,
  lastStep = 0x0,
  curStep = 0x0,
  steps = $("[data-form=\x22step\x22]"),
  progressbarClone = $(_0x4d9eeb(0x168))[_0x4d9eeb(0x1ab)](),
  progressbar,
  countCard = !![],
  weightedSelection = $(_0x4d9eeb(0x1f5))["data"](_0x4d9eeb(0x1f4)),
  weightedSelectionRange = $("[data-weighted-selection-range]")[
    _0x4d9eeb(0x241)
  ]("weighted-selection-range"),
  selectMultiple = $(_0x4d9eeb(0x148))["data"](_0x4d9eeb(0x129)),
  customError = $(_0x4d9eeb(0x159))[_0x4d9eeb(0x241)](_0x4d9eeb(0x169)),
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
  reinitIX = $("[data-reinit]")[_0x4d9eeb(0x241)](_0x4d9eeb(0x1ef)),
  textareaLength = 0x0,
  textInputLength = 0x0,
  emailInputLength = 0x0,
  selectInputLength = 0x0,
  checkboxInputLength = 0x0,
  filledInput = [],
  savedFilledInput = [],
  memory = $(_0x4d9eeb(0x210))[_0x4d9eeb(0x241)](_0x4d9eeb(0x163)),
  quiz = $(_0x4d9eeb(0x1e3))["data"](_0x4d9eeb(0x14a)),
  progress = 0x0;
const urlFormly = new URL(window[_0x4d9eeb(0x10d)][_0x4d9eeb(0x1f7)]);
let _params = $(_0x4d9eeb(0x1b0))["data"](_0x4d9eeb(0x206)),
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
  logicExtra = $(_0x4d9eeb(0x157))[_0x4d9eeb(0x241)](_0x4d9eeb(0x233)),
  oldSubmitText = $(_0x4d9eeb(0x269))["val"](),
  oldResetText = $(_0x4d9eeb(0x20b))[_0x4d9eeb(0x1c7)](),
  formReset = $(_0x4d9eeb(0x157))[_0x4d9eeb(0x241)](_0x4d9eeb(0x215)),
  successCard = "",
  redirectTo = "",
  totalSteps = 0x0,
  checkCount = 0x0,
  resetDelay = $(_0x4d9eeb(0x14d))[_0x4d9eeb(0x241)](_0x4d9eeb(0x213))
    ? $("[data-reset-delay]")[_0x4d9eeb(0x241)](_0x4d9eeb(0x213))
    : 0x7d0,
  redirectDelay = $(_0x4d9eeb(0x1e5))[_0x4d9eeb(0x241)](_0x4d9eeb(0x1e6))
    ? $(_0x4d9eeb(0x1e5))[_0x4d9eeb(0x241)]("redirect-delay")
    : 0x7d0,
  newTab = !![],
  unfilledArr = [],
  phoneFormat = $("[data-form=\x22multistep\x22]")[_0x4d9eeb(0x241)](
    _0x4d9eeb(0x19d),
  ),
  scrollToTop = $(_0x4d9eeb(0x157))["data"]("scroll-top"),
  trackLastStep = $(_0x4d9eeb(0x1ed))[_0x4d9eeb(0x241)](_0x4d9eeb(0x21e)),
  conditionalResult =
    $(_0x4d9eeb(0x1ea))[_0x4d9eeb(0x241)]("conditional-result") ===
    _0x4d9eeb(0x243),
  scrollTopOffset = parseInt(
    $("[data-form=\x22multistep\x22]")["data"]("scroll-top-offset"),
  ),
  notRobot = !![],
  all_data = [];
const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
(savedFilledInput = JSON["parse"](
  localStorage[_0x4d9eeb(0x23b)](_0x4d9eeb(0x202)),
)),
  (formlyLastStep = JSON[_0x4d9eeb(0x164)](
    localStorage["getItem"]("formlyLastStep"),
  )),
  (formlyLastStepAnswer = JSON[_0x4d9eeb(0x164)](
    localStorage[_0x4d9eeb(0x23b)](_0x4d9eeb(0x1d9)),
  ));
function _0x4c4b(_0x2c2194, _0x586fa) {
  const _0x4d082e = _0x4d08();
  return (
    (_0x4c4b = function (_0x4c4be5, _0x28cdd2) {
      _0x4c4be5 = _0x4c4be5 - 0x106;
      let _0x493be9 = _0x4d082e[_0x4c4be5];
      return _0x493be9;
    }),
    _0x4c4b(_0x2c2194, _0x586fa)
  );
}
var ogCloneArr = [];
trackLastStep &&
  (formlyLastStep > x && (x = formlyLastStep),
  formlyLastStepAnswer && (selections = formlyLastStepAnswer));
$(_0x4d9eeb(0x108))[_0x4d9eeb(0x24c)](function () {
  const _0x2fdd46 = _0x4d9eeb;
  ogCloneArr[_0x2fdd46(0x17e)]({
    name: $(this)[_0x2fdd46(0x241)]("clone"),
    element: $(this)[_0x2fdd46(0x1ab)](!![]),
    display: $(
      _0x2fdd46(0x20e) + $(this)[_0x2fdd46(0x241)](_0x2fdd46(0x1ab)) + "\x22]",
    )
      ["eq"](0x0)
      [_0x2fdd46(0x1ab)](!![]),
  });
});
function _0x4d08() {
  const _0x2b67c1 = [
    "ms-field",
    "each",
    "skip-to",
    "[data-callback=\x22recaptcha\x22]",
    "none",
    "true",
    "append",
    "change",
    "span",
    "form[data-form=\x22multistep\x22]",
    "checkbox",
    "index",
    "videsigns",
    "focus",
    "keyCode",
    ":input[type=\x22password\x22]",
    "[data-display]",
    ":input[type=\x22file\x22][required]",
    ":input",
    "select[required]:visible",
    "radio",
    "inputName",
    "_blank",
    "[data-click-addclass]",
    "<strong\x20class=\x22f-text-white\x22>Current\x20Step\x20Text\x20",
    "[data-display-index=\x22",
    "[data-index=\x22",
    "w--redirected-checked",
    "auto",
    "redirect-form-hehexd",
    "[data-form=\x22submit-btn\x22]",
    "top",
    "[data-progressive-target=\x22",
    "formlyLastStep",
    "\x22]:checked",
    "querySelector",
    "data-input-field",
    "children",
    "getElementById",
    "checked",
    "[data-input-field]",
    "disabled",
    "1730238qZUijT",
    ".w-form-done",
    "7uKMdRN",
    "[data-display-input]",
    ".active-answer-card",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Multistep\x20form\x20attribute\x20is\x20on\x20Form\x20element\x20and\x20not\x20on\x20Form\x20Block\x20element\x0a\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>2.\x20Form\x20Steps:\x20data-form=step\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "[data-clone]",
    "\x22][data-progressive-input-value=\x22",
    "answer",
    "searchParams",
    "78940LYbGhh",
    "location",
    "new-tab",
    "[data-go-to]",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    ":input[type=\x22checkbox\x22]:checked",
    "formly",
    "[data-progressive-input=\x22",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Submit\x20button\x20attribute\x20IS\x20on\x20Form\x20Submit\x20Button\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>5.\x20Submit\x20Buttons:\x20data-form=next-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Submit\x20button\x20present?\x20",
    "\x22]\x20input",
    "value",
    "slow",
    "[data-cms-select=input]",
    "\x22]\x20select",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>3.\x20Next\x20Buttons:\x20data-form=back-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Next\x20button\x20present?\x20",
    "selection",
    "</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Attributes</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>1.\x20Form:\x20data-form=multistep\x20",
    "textarea",
    ":input[type=\x22date\x22]",
    "[data-form=\x22custom-progress-indicator\x22]",
    "body",
    "[data-btn=\x22edit\x22]",
    "name",
    "<strong\x20class=\x22f-text-white\x22>Automatic\x20Progress\x20Indicators\x20",
    "[data-card=\x22true\x22]",
    "slice",
    "option[value=\x22",
    "data-skip-to",
    "select-multiple",
    "[data-text=\x22current-step\x22]",
    "tagName",
    "div.g-recaptcha",
    "No\x20Formly\x20script\x20added\x20to\x20the\x20page!",
    "click",
    "</strong>",
    "clone-input",
    "textarea:focus",
    "[data-input-field=\x22",
    "[data-form=\x22step\x22]",
    "data-go-to",
    ":input[type=\x27radio\x27]:checked",
    "trim",
    "input:checkbox",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a",
    "innerHTML",
    "add-new-input",
    "join",
    "<strong\x20class=\x22f-text-white\x22>Total\x20Step\x20Text\x20",
    "<strong\x20class=\x22f-text-white\x22>Press\x20\x22⌘\x20+\x20Enter\x20\x22\x20To\x20Submit\x20",
    ".w-radio-input",
    ":input[type=\x22checkbox\x22]",
    "textarea[required]:visible",
    "[data-form=\x22step\x22]:not([data-card=\x22true\x22])",
    "multistep",
    "startsWith",
    "[type=\x22radio\x22]",
    "0px",
    ".w-form-formradioinput",
    "1255791qcHlYI",
    "[data-select-multiple]",
    "parent",
    "quiz",
    "radio-delay",
    "skipTo",
    "[data-reset-delay]",
    "[data-text=\x22error-message\x22]",
    ":input[type=\x22radio\x22]",
    "[data-show-if]",
    "preventDefault",
    "input[type=\x22radio\x22]",
    "input[name=\x22",
    "progressive-input-value",
    "closest",
    "[data-selection-weight]",
    "[data-form=\x22multistep\x22]",
    "[data-display-wrapper=\x22",
    "[data-custom-error-message]",
    "[data-progressive-target]",
    "width",
    "[data-answer][data-radio-skip]:visible",
    "option[value=\x22$(this).val()\x22]",
    "\x22]\x20textarea",
    "[data-clone-wrapper=\x22",
    "phone-autoformat",
    "setItem",
    ":input[type=\x22tel\x22][required]",
    "memory",
    "parse",
    "[data-radio-skip]:visible",
    "open",
    "[data-submit=\x22true\x22]",
    "[data-form=\x22progress-indicator\x22]",
    "custom-error-message",
    "replace",
    "data-name",
    "padding",
    "debug-mode",
    "BODY",
    "<br>Data\x20Answer\x20=\x20",
    "script",
    "input[type=\x22text\x22][required]:visible",
    "[data-count-card]",
    "[data-display-input=\x22",
    "test",
    "[data-form=\x22remove-clone\x22]",
    "[data-clickable]",
    "appendChild",
    "Before\x20&lt;/body&gt;\x20tag",
    "1187271uPQJxS",
    "wait",
    "<strong\x20class=\x22f-text-white\x22>Intro\x20Cards\x20Or\x20Steps\x20Without\x20Inputs\x20",
    "829918lrFkvc",
    "[data-selected]:checked",
    "push",
    "fadeIn",
    "[data-checkbox]",
    "radio-skip",
    "stopPropagation",
    "<strong\x20class=\x22f-text-white\x22>ReCAPTCHA\x20",
    "find",
    "createElement",
    "\x22][value=\x22",
    "[data-add-new]",
    "last",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Number\x20of\x20steps:\x20",
    "textarea[required]",
    "block-domain",
    "[data-form=\x22progress\x22]",
    ":input[type=\x22date\x22][required]",
    "button",
    "[data-cms-select=cms]",
    "</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Formly\x20Script\x20Info</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>Script\x20URL:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>",
    "<strong\x20class=\x22f-text-white\x22>Press\x20\x22Enter\x22\x20To\x20Progress\x20",
    "novalidate",
    "script[src=\x22",
    "relationship-",
    "[data-selection]",
    "\x0a\x20\x20<button\x20class=\x22f-openbtn\x22\x20onclick=\x22openNav()\x22>\x0a\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x2220px\x22\x20height=\x2220px\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M11\x2021h-1l1-7H7.5c-.88\x200-.33-.75-.31-.78C8.48\x2010.94\x2010.42\x207.54\x2013.01\x203h1l-1\x207h3.51c.4\x200\x20.62.19.4.66C12.97\x2017.55\x2011\x2021\x2011\x2021\x22></path>\x0a\x20\x20\x20\x20</svg>\x20Check\x20Form\x0a\x20\x20</button>\x0a\x20\x20<div\x20id=\x22f-mySidenav\x22\x20class=\x22f-sidenav\x22>\x0a\x20\x20\x20\x20<a\x20href=\x22javascript:void(0)\x22\x20class=\x22f-closebtn\x22\x20onclick=\x22closeNav()\x22>&times;</a>\x0a\x20\x20\x20\x20<div\x20class=\x22f-fc-main-content\x22>\x0a\x20\x20\x20\x20\x20\x20<h4\x20class=\x22f-text-header\x22>Formly\x20Support</h4>\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20If\x20you\x20have\x20spotted\x20a\x20bug\x20or\x20require\x20extra\x20support,\x20please\x20reach\x20out\x20to\x20us\x20via\x20Slack\x20or\x20email\x20us\x20at\x20developer@videsigns.uk.\x0a\x20\x20\x20\x20\x20\x20</p>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Form\x20Type</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>",
    "step",
    "PASS",
    "[data-radio-delay]",
    ":input[type=\x22time\x22]",
    "[data-range]:contains(",
    "select:not([data-prefill=\x22false\x22])",
    "phone-validation",
    "[data-skip-to]",
    "input[type=\x22radio\x22]:checked",
    "[data-clone-input]",
    "24YwqUWO",
    "prop",
    "css",
    "removeItem",
    "includes",
    "\x0a\x20\x20.f-icon-embed-xxsmall-2\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#ff3232\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x20\x20.f-icon-embed-xxsmall\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#57ff4b\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20{\x0a\x20\x20\x20\x20height:\x20100%\x20!important;\x0a\x20\x20\x20\x20width:\x200;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20z-index:\x20999999999999\x20!important;\x0a\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20background-color:\x20#081019\x20!important;\x0a\x20\x20\x20\x20overflow-x:\x20hidden\x20!important;\x0a\x20\x20\x20\x20padding-top:\x2060px\x20!important;\x0a\x20\x20\x20\x20transition:\x200.5s\x20!important;\x0a\x20\x20\x20\x20font-size:\x2015px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73)\x20!important;\x0a\x20\x20\x20\x20font-family:system-ui\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-section-title-text,\x20.f-support-text,\x20.f-openbtn{\x0a\x20\x20\x20\x20font-size:\x2015px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73);\x0a\x20\x20\x20\x20font-family:system-ui\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20p,\x20.f-sidenav\x20strong\x20{\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20space-between\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x204px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73);\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20.f-closebtn\x20{\x0a\x20\x20\x20\x20position:\x20absolute\x20!important;\x0a\x20\x20\x20\x20top:\x2025px\x20!important;\x0a\x20\x20\x20\x20right:\x2025px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2036px\x20!important;\x0a\x20\x20\x20\x20margin-left:\x2050px\x20!important;\x0a\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20color:\x20#e7e7e7\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-core-setup\x20{\x0a\x20\x20\x20\x20padding:\x2012px\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x2011px\x20!important;\x0a\x20\x20\x20\x20border-radius:\x206px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20#f-main\x20{\x0a\x20\x20\x20\x20transition:\x20margin-left\x20.5s\x20!important;\x0a\x20\x20\x20\x20padding:\x2020px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-main-content\x20{\x0a\x20\x20\x20\x20transition:\x20margin-left\x20.5s\x20!important;\x0a\x20\x20\x20\x20padding:\x2020px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-form-step\x20{\x0a\x20\x20\x20\x20padding-left:\x2010px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-openbtn\x20{\x0a\x20\x20\x20\x20white-space:\x20nowrap\x20!important;\x0a\x20\x20\x20\x20cursor:\x20pointer\x20!important;\x0a\x20\x20\x20\x20box-shadow:\x200\x200\x200\x201px\x20rgba(0,\x200,\x200,\x20.1),\x200\x201px\x203px\x20rgba(0,\x200,\x200,\x20.1)\x20!important;\x0a\x20\x20\x20\x20visibility:\x20visible\x20!important;\x0a\x20\x20\x20\x20z-index:\x2099\x20!important;\x0a\x20\x20\x20\x20color:\x20#e7e7e7\x20!important;\x0a\x20\x20\x20\x20opacity:\x201\x20!important;\x0a\x20\x20\x20\x20width:\x20auto\x20!important;\x0a\x20\x20\x20\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20background-color:\x20#1e1e1e\x20!important;\x0a\x20\x20\x20\x20border-radius:\x203px\x20!important;\x0a\x20\x20\x20\x20margin:\x200\x20!important;\x0a\x20\x20\x20\x20padding:\x206px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2013px\x20!important;\x0a\x20\x20\x20\x20line-height:\x2014px\x20!important;\x0a\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20top:\x20auto\x20!important;\x0a\x20\x20\x20\x20bottom:\x2012px\x20!important;\x0a\x20\x20\x20\x20left:\x2012px\x20!important;\x0a\x20\x20\x20\x20right:\x20auto\x20!important;\x0a\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20transform:\x20none\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-text-header{\x0a\x20\x20\x20\x20color:\x20#fff\x20!important;\x0a\x20\x20\x20\x20font-size:\x201.8rem\x20!important;\x0a\x20\x20\x20\x20font-weight:\x20600\x20!important;\x0a\x20\x20\x20\x20line-height:\x201.2\x20!important;\x0a\x20\x20\x20\x20margin-bottom:4px\x0a\x20\x20}\x0a\x0a\x20\x20@media\x20screen\x20and\x20(max-height:\x20450px)\x20{\x0a\x20\x20\x20\x20.sidenav\x20{\x20padding-top:\x2015px\x20!important;\x20}\x0a\x20\x20\x20\x20.sidenav\x20a\x20{\x20font-size:\x2018px\x20!important;\x20}\x0a\x20\x20}\x0a\x0a\x20\x20.f-section-title-text{\x0a\x20\x20\x20\x20color:\x20#fff\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x2010px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2018px\x20!important;\x0a\x20\x20\x20\x20font-weight:\x20700\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-div-support-section{\x0a\x20\x20\x20\x20padding-top:1rem\x20!important;\x0a\x20\x20\x20\x20padding-bottom:1rem\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-text-white{\x0a\x20\x20\x20\x20color:\x20white\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-spacer{\x0a\x20\x20\x20\x20padding-top:8px\x20!important;\x0a\x20\x20}\x0a",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Powerups</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "siblings",
    "show",
    "[data-clone=\x22",
    "clone",
    "</div>",
    "[data-form=\x22next-btn\x22][data-submit-show]",
    "35%",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>Script\x20Location:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>",
    "[data-query-param]",
    "not",
    "input[type=\x22checkbox\x22][name=\x22",
    "removeClass",
    "Webflow",
    "redirect",
    ":input[type=\x22email\x22]",
    "offset",
    "data-show-if",
    ":input[type=\x22checkbox\x22][required]",
    "edit-step",
    ":checked",
    "init",
    "ix2",
    ":input[type=\x22number\x22][required]",
    ":input[required]",
    "querySelectorAll",
    "data-radio-skip",
    "hide",
    "stringify",
    "key",
    "input",
    "click-addclass",
    "text",
    "count-card",
    ":input[type=\x22checkbox\x22][required]:checked",
    "parentNode",
    "trigger",
    "style",
    "submit",
    "min-character",
    "selected",
    "enter",
    ":input[type=\x22text\x22]",
    "[data-display-input-wrapper=\x22",
    "<strong\x20class=\x22f-text-white\x22>Radio\x20Inputs\x20",
    "remove-upload",
    "[data-text=\x22total-steps\x22]",
    "some",
    "data-form",
    "animate",
    "formlyLastStepAnswer",
    "[data-clone-input-wrapper]",
    "keydown",
    "forEach",
    "[data-form=\x22remove-input-clone\x22]",
    "[data-btn=\x22check\x22]",
    ":input[type=\x22checkbox\x22][required]:not(:checked)",
    "412SToils",
    "[data-selection=\x22",
    "select",
    "[data-quiz]",
    "every",
    "[data-redirect-delay]",
    "redirect-delay",
    "FAIL",
    "[data-success-card]",
    "17188006DxBPHA",
    "[data-conditional-result]",
    "[data-form=\x22back-btn\x22]",
    "destroy",
    "[data-last-step]",
    "dispatchEvent",
    "reinit",
    ":input[type=\x22time\x22][required]",
    "select[required]",
    "0.4",
    "[data-enter=\x22true\x22]",
    "weighted-selection",
    "[data-weighted-selection]",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Next\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button\x20",
    "href",
    ":focus",
    "go-to",
    "[data-display-input-index=\x22",
    "attr",
    "\x22]:not([data-prefill=\x22false\x22])",
    ":input[type=\x22email\x22][required]",
    "<br>Data\x20Go\x20To\x20=\x20",
    "f-mySidenav",
    "textarea[name=\x22",
    "clickable-all",
    "filledInput",
    "[data-add-new-input]",
    "input:radio[required]",
    "\x22][data-progressive-input-value=\x22*\x22]",
    "query-param",
    "parents",
    "Please\x20wait...",
    "addClass",
    "filter",
    "[data-btn=\x22reset\x22]",
    "findIndex",
    "field",
    "[data-display=\x22",
    ".w-checkbox-input",
    "[data-memory]",
    "textarea[autofocus]",
    "progressive-input",
    "reset-delay",
    "<option>",
    "reset",
    "\x22]\x20[data-input-field^=\x22",
    "require",
    "[data-form=\x22next-btn\x22]",
    "backTo",
    "type",
    "input-field",
    "val",
    "[data-form-ms=\x22submit-btn\x22]",
    "last-step",
    "head",
    "<strong\x20class=\x22f-text-white\x22>Checkboxes\x20",
    "url",
    "[data-form=\x22submit-btn\x22]:visible",
    ":input[type=\x22text\x22][required]",
    "[data-answer]",
    "Inside\x20<head>\x20tag",
    "[data-cms-select=text]",
    ":input[type=\x22file\x22]",
    "https://webflow.com/api/v1/form/",
    "toLowerCase",
    "length",
    "data-radio-delay",
    "input:radio[name=\x22",
    "card",
    "10456812tHNvTS",
    "current",
    "active-answer-card",
    "clickable",
    "remove",
    "logic-extra",
    "4mynkyv",
    "[data-clone-input=\x22",
    "select[name=\x22",
    "[data-clone-input-wrapper=\x22",
    "10QEThYR",
    "[data-answer=\x22",
    "[data-radio-skip]",
    "getItem",
    ":input[type=\x22tel\x22]",
    "<strong\x20class=\x22f-text-white\x22>Custom\x20Progress\x20Indicators\x20",
    "FormlyLogic\x20enabled",
    ":input[type=\x22url\x22][required]",
    ":input[type=\x22number\x22]",
    "data",
    "input[type=\x22submit\x22]",
    "AND",
    "[data-remove-upload]",
    "split",
    "src",
    ":input[type=\x22password\x22][required]",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>4.\x20Back\x20Buttons:\x20data-form=next-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Back\x20button\x20present?\x20",
    "get",
    "[data-progressive-input]",
  ];
  _0x4d08 = function () {
    return _0x2b67c1;
  };
  return _0x4d08();
}
$(_0x4d9eeb(0x12c))[_0x4d9eeb(0x22a)] > 0x0 && (notRobot = ![]);
function recaptcha(_0x5200f7) {
  notRobot = !![];
}
$(_0x4d9eeb(0x172))[_0x4d9eeb(0x22a)] > 0x0 &&
  (countCard = $(_0x4d9eeb(0x172))[_0x4d9eeb(0x241)](_0x4d9eeb(0x1c8)));
$("[data-text=\x22error-message\x22]")[_0x4d9eeb(0x1c2)](),
  $(progressbarClone)["removeClass"](_0x4d9eeb(0x22f)),
  $("[data-form=\x22progress\x22]")[_0x4d9eeb(0x270)]()["remove"](),
  $(_0x4d9eeb(0x269))[_0x4d9eeb(0x1c2)](),
  $(_0x4d9eeb(0x21d))[_0x4d9eeb(0x1c2)](),
  steps["each"](function () {
    const _0x3a941c = _0x4d9eeb;
    $("[data-form=\x22progress\x22]")[_0x3a941c(0x251)](
      progressbarClone["clone"](!![], !![]),
    );
  }),
  $("[data-input-field]")[_0x4d9eeb(0x1c2)]();
countCard
  ? ((curStep = curStep + 0x1),
    (totalSteps = steps[_0x4d9eeb(0x22a)]),
    $(_0x4d9eeb(0x1d5))[_0x4d9eeb(0x1c7)](totalSteps))
  : ($(steps[x])["data"]("card")
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    (totalSteps = $(_0x4d9eeb(0x141))["length"]),
    $(_0x4d9eeb(0x1d5))["text"](totalSteps),
    $("[data-form=\x22step\x22][data-card]")["each"](function () {
      const _0x2e3aa1 = _0x4d9eeb;
      $(
        $("[data-form=\x22progress-indicator\x22]")[
          $(this)[_0x2e3aa1(0x256)]()
        ],
      )[_0x2e3aa1(0x1c2)]();
    }));
(progressbar = $(_0x4d9eeb(0x18c))[_0x4d9eeb(0x270)]()),
  $(_0x4d9eeb(0x168))["on"](_0x4d9eeb(0x12e), clickableIndicator),
  $(_0x4d9eeb(0x12a))[_0x4d9eeb(0x1c7)](curStep),
  steps[_0x4d9eeb(0x1c2)](),
  $(_0x4d9eeb(0x1e8))["hide"](),
  $("[data-form=\x22next-btn\x22][type=\x22submit\x22]")["each"](function () {
    const _0x1b4eae = _0x4d9eeb;
    $(this)[_0x1b4eae(0x1fb)]("type", _0x1b4eae(0x18e));
  });
function getParams() {
  const _0x673d6d = _0x4d9eeb;
  urlFormly[_0x673d6d(0x10b)]["forEach"](function (_0x1bd3cf, _0x5966af) {
    searchQ["push"]({ val: _0x1bd3cf, key: _0x5966af });
  });
}
function getSafe(_0x2cc241, _0x57f669) {
  try {
    return _0x2cc241();
  } catch (_0x46cd83) {
    return _0x57f669;
  }
}
function phoneAutoFormat(_0x3b2b78) {
  var _0x48520d = "";
  return function (_0x4e7e0c) {
    const _0x567a7e = _0x4c4b;
    var _0x26e3c5 = "",
      _0x3daa42 = _0x4e7e0c[_0x567a7e(0x16a)](/\D/g, ""),
      _0x4c62a0 = 0x0,
      _0x119210 = 0x0;
    while (
      _0x4c62a0 < _0x3daa42[_0x567a7e(0x22a)] &&
      _0x119210 < _0x3b2b78[_0x567a7e(0x22a)]
    ) {
      _0x3b2b78[_0x119210] === "x"
        ? ((_0x26e3c5 += _0x3daa42[_0x4c62a0]), _0x4c62a0++)
        : (_0x26e3c5 += _0x3b2b78[_0x119210]),
        _0x119210++;
    }
    if (_0x4e7e0c["length"] < _0x48520d[_0x567a7e(0x22a)]) {
      var _0x43f376 = _0x3b2b78[_0x567a7e(0x126)](_0x119210);
      _0x26e3c5 += _0x43f376["replace"](/x/g, "");
    }
    return (_0x48520d = _0x26e3c5), _0x26e3c5;
  };
}
function validateURL(_0x46b798) {
  const _0x50ab78 = _0x4d9eeb;
  return urlPattern[_0x50ab78(0x174)](_0x46b798) ? !![] : ![];
}
quiz &&
  steps[_0x4d9eeb(0x24c)](function () {
    const _0x32ab87 = _0x4d9eeb;
    $(this)["children"]()["attr"](_0x32ab87(0x1c1), !![]),
      $(this)[_0x32ab87(0x270)]()["attr"](_0x32ab87(0x22b), 0xfa);
  });
function disableBtn(_0xa38985) {
  const _0x458740 = _0x4d9eeb;
  (fill = ![]),
    !customError &&
      ($(_0x458740(0x218))[_0x458740(0x1a3)]({
        opacity: _0x458740(0x1f2),
        "pointer-events": _0x458740(0x24f),
      }),
      $(_0x458740(0x218))[_0x458740(0x209)](_0x458740(0x274)),
      $(_0x458740(0x269))[_0x458740(0x1a3)]({
        opacity: _0x458740(0x1f2),
        "pointer-events": _0x458740(0x24f),
      }),
      $("[data-form=\x22submit-btn\x22]")[_0x458740(0x209)](_0x458740(0x274)),
      $(_0x458740(0x21d))["css"]({
        opacity: _0x458740(0x1f2),
        "pointer-events": _0x458740(0x24f),
      }),
      $("[data-form-ms=\x22submit-btn\x22]")[_0x458740(0x209)](
        _0x458740(0x274),
      ));
}
function enableBtn() {
  const _0x1100ee = _0x4d9eeb;
  (fill = !![]),
    $(_0x1100ee(0x218))[_0x1100ee(0x1a3)]({
      "pointer-events": _0x1100ee(0x267),
      opacity: "1",
    }),
    $("[data-form=\x22next-btn\x22]")[_0x1100ee(0x1b3)]("disabled"),
    $(_0x1100ee(0x269))[_0x1100ee(0x1a3)]({
      "pointer-events": _0x1100ee(0x267),
      opacity: "1",
    }),
    $(_0x1100ee(0x269))[_0x1100ee(0x1b3)](_0x1100ee(0x274)),
    $("[data-form-ms=\x22submit-btn\x22]")[_0x1100ee(0x1a3)]({
      "pointer-events": "auto",
      opacity: "1",
    }),
    $(_0x1100ee(0x21d))["removeClass"]("disabled");
}
function saveLastAnswer(_0xcdb042) {
  const _0x46dc59 = _0x4d9eeb;
  localStorage["removeItem"](_0x46dc59(0x1d9)),
    localStorage[_0x46dc59(0x161)](
      _0x46dc59(0x1d9),
      JSON[_0x46dc59(0x1c3)](_0xcdb042),
    );
}
function saveFilledInput() {
  const _0x548cc0 = _0x4d9eeb;
  $("form[data-form=\x22multistep\x22]\x20:input")
    [_0x548cc0(0x1b1)]("[type=\x22submit\x22]")
    ["each"](function () {
      const _0x4b4845 = _0x548cc0;
      $(this)[_0x4b4845(0x1fb)](_0x4b4845(0x21a)) === _0x4b4845(0x255) ||
      $(this)[_0x4b4845(0x1fb)](_0x4b4845(0x21a)) === _0x4b4845(0x25f)
        ? $(this)[_0x4b4845(0x1a2)](_0x4b4845(0x272)) &&
          (filledInput[_0x4b4845(0x1d6)](
            (_0x159a71) =>
              _0x159a71["inputName"] ===
              $(this)[_0x4b4845(0x1fb)](_0x4b4845(0x123)),
          )
            ? ((filledInput = filledInput[_0x4b4845(0x20a)](
                (_0xc581d9) =>
                  _0xc581d9["inputName"] !==
                  $(this)[_0x4b4845(0x1fb)](_0x4b4845(0x123)),
              )),
              $(this)[_0x4b4845(0x21c)]() !== "" &&
                filledInput["push"]({
                  inputName: $(this)[_0x4b4845(0x1fb)]("name"),
                  value: $(this)["val"](),
                }))
            : $(this)[_0x4b4845(0x21c)]() !== "" &&
              filledInput[_0x4b4845(0x17e)]({
                inputName: $(this)[_0x4b4845(0x1fb)]("name"),
                value: $(this)["val"](),
              }))
        : filledInput[_0x4b4845(0x1d6)](
              (_0x105947) =>
                _0x105947[_0x4b4845(0x260)] ===
                $(this)[_0x4b4845(0x1fb)](_0x4b4845(0x123)),
            )
          ? ((filledInput = filledInput[_0x4b4845(0x20a)](
              (_0x3a9230) =>
                _0x3a9230[_0x4b4845(0x260)] !==
                $(this)[_0x4b4845(0x1fb)](_0x4b4845(0x123)),
            )),
            $(this)[_0x4b4845(0x21c)]() !== "" &&
              filledInput["push"]({
                inputName: $(this)[_0x4b4845(0x1fb)](_0x4b4845(0x123)),
                value: $(this)["val"](),
              }))
          : $(this)[_0x4b4845(0x21c)]() !== "" &&
            filledInput[_0x4b4845(0x17e)]({
              inputName: $(this)["attr"](_0x4b4845(0x123)),
              value: $(this)[_0x4b4845(0x21c)](),
            });
    }),
    trackLastStep &&
      (formlyLastStep > x ? (lastStep = formlyLastStep) : (lastStep = x),
      localStorage[_0x548cc0(0x1a4)](_0x548cc0(0x26c)),
      localStorage["setItem"](_0x548cc0(0x26c), lastStep)),
    localStorage[_0x548cc0(0x1a4)](_0x548cc0(0x202)),
    localStorage[_0x548cc0(0x161)](
      _0x548cc0(0x202),
      JSON["stringify"](filledInput),
    );
}
function scrollTop() {
  const _0x4d2b1d = _0x4d9eeb;
  scrollToTop &&
    $("html,\x20body")[_0x4d2b1d(0x1d8)](
      {
        scrollTop:
          $(_0x4d2b1d(0x157))[_0x4d2b1d(0x1b7)]()[_0x4d2b1d(0x26a)] -
          scrollTopOffset,
      },
      0x3e8,
    );
}
function updateStep() {
  const _0x5e09c1 = _0x4d9eeb;
  scrollTop(),
    (skip = ![]),
    $(_0x5e09c1(0x120))[_0x5e09c1(0x1b3)](_0x5e09c1(0x274));
  $(_0x5e09c1(0x176))[_0x5e09c1(0x241)](_0x5e09c1(0x231)) &&
    (steps[_0x5e09c1(0x184)](_0x5e09c1(0x1bf))[_0x5e09c1(0x24c)](function () {
      const _0x5158e7 = _0x5e09c1;
      $(
        $("[data-form=\x22custom-progress-indicator\x22]")[
          $(this)["parents"](_0x5158e7(0x133))[_0x5158e7(0x256)]()
        ],
      ),
        $(this)[_0x5158e7(0x21c)]() === "" && emptyInput++;
    }),
    emptyInput > 0x0
      ? $(_0x5e09c1(0x242))["addClass"](_0x5e09c1(0x274))
      : $(_0x5e09c1(0x242))[_0x5e09c1(0x1b3)](_0x5e09c1(0x274)));
  $("[data-form=\x22custom-progress-indicator\x22]")[_0x5e09c1(0x1b3)](
    _0x5e09c1(0x22f),
  ),
    $(_0x5e09c1(0x120))["addClass"](_0x5e09c1(0x274)),
    $($(_0x5e09c1(0x120))[x])[_0x5e09c1(0x209)](_0x5e09c1(0x22f)),
    (selection = selections[_0x5e09c1(0x20a)](
      (_0x17c605) => _0x17c605[_0x5e09c1(0x197)] === x - 0x1,
    ));
  next &&
    (x = getSafe(() => selection[0x0]["skipTo"])
      ? parseInt(getSafe(() => selection[0x0][_0x5e09c1(0x14c)]))
      : x);
  $(_0x5e09c1(0x224))[_0x5e09c1(0x1c2)](), steps[_0x5e09c1(0x1c2)]();
  reinitIX === !![] && window[_0x5e09c1(0x1b4)][_0x5e09c1(0x1ec)]();
  $(progressbar)[_0x5e09c1(0x1b3)](_0x5e09c1(0x22f));
  for (i = 0x0; i <= x; i++) {
    countCard
      ? $(progressbar[i])["addClass"](_0x5e09c1(0x22f))
      : !$(steps[i])[_0x5e09c1(0x241)](_0x5e09c1(0x22d)) &&
        $(progressbar[i])[_0x5e09c1(0x209)](_0x5e09c1(0x22f));
  }
  reinitIX === !![]
    ? (window["Webflow"] &&
        window["Webflow"]
          [_0x5e09c1(0x217)](_0x5e09c1(0x1bd))
          [_0x5e09c1(0x1bc)](),
      document[_0x5e09c1(0x1ee)](new Event("readystatechange")),
      $(steps[x])[_0x5e09c1(0x1a9)]())
    : $(steps[x])[_0x5e09c1(0x17f)](_0x5e09c1(0x118));
  $(".active-answer-card")[_0x5e09c1(0x1b3)](_0x5e09c1(0x230));
  x === 0x0 &&
    !$(steps[x])[_0x5e09c1(0x241)](_0x5e09c1(0x22d)) &&
    ($(steps[x])["find"](_0x5e09c1(0x224))["show"](),
    $(steps[x])
      [_0x5e09c1(0x184)](_0x5e09c1(0x224))
      [_0x5e09c1(0x209)](_0x5e09c1(0x230)));
  selection[_0x5e09c1(0x22a)] > 0x0
    ? ($(steps[x])
        [_0x5e09c1(0x184)](
          "[data-answer=\x22" + selection[0x0][_0x5e09c1(0x1cf)] + "\x22]",
        )
        [_0x5e09c1(0x1a9)](),
      $(steps[x])
        [_0x5e09c1(0x184)](
          _0x5e09c1(0x239) + selection[0x0][_0x5e09c1(0x1cf)] + "\x22]",
        )
        [_0x5e09c1(0x209)](_0x5e09c1(0x230)))
    : ($(steps[x])
        [_0x5e09c1(0x184)](_0x5e09c1(0x239) + answer + "\x22]")
        ["show"](),
      $(steps[x])
        [_0x5e09c1(0x184)]("[data-answer=\x22" + answer + "\x22]")
        [_0x5e09c1(0x209)]("active-answer-card"));
  if (x === 0x0)
    $(_0x5e09c1(0x1eb))["hide"](),
      $(_0x5e09c1(0x218))[_0x5e09c1(0x1a9)](),
      $(_0x5e09c1(0x269))[_0x5e09c1(0x1c2)]();
  else {
    if (
      x === steps[_0x5e09c1(0x22a)] - 0x1 ||
      $(steps[x])[_0x5e09c1(0x184)]("[data-form=\x22submit\x22]:visible")[
        _0x5e09c1(0x22a)
      ] > 0x0
    ) {
      $("[data-form=\x22next-btn\x22]")[_0x5e09c1(0x1c2)]();
      if (
        $(steps[x])
          ["find"]("[data-form=\x22next-btn\x22][data-submit-show]")
          [_0x5e09c1(0x241)]("submit-show")
      )
        $(steps[x])[_0x5e09c1(0x184)](_0x5e09c1(0x1ad))["show"]();
      else
        $("[data-form=\x22next-btn\x22]")[_0x5e09c1(0x241)]("submit-show") &&
          $("[data-form=\x22next-btn\x22]")[_0x5e09c1(0x1a9)]();
      $("[data-form=\x22submit-btn\x22]")[_0x5e09c1(0x1a9)](),
        $("[data-form-ms=\x22submit-btn\x22]")[_0x5e09c1(0x1a9)](),
        $(_0x5e09c1(0x1eb))[_0x5e09c1(0x1a9)]();
    } else
      $("[data-form=\x22next-btn\x22]")[_0x5e09c1(0x1a9)](),
        $(_0x5e09c1(0x1eb))["show"](),
        $(_0x5e09c1(0x269))["hide"](),
        $("[data-form-ms=\x22submit-btn\x22]")[_0x5e09c1(0x1c2)]();
  }
  $($(steps[x])[_0x5e09c1(0x184)]("input[autofocus]")[0x0])["focus"](),
    $($(steps[x])[_0x5e09c1(0x184)](_0x5e09c1(0x211))[0x0])[_0x5e09c1(0x258)](),
    validation();
  for (idx = 0x0; idx <= x; idx++) {
    $($(_0x5e09c1(0x120))[idx])["removeClass"]("disabled");
  }
}
function validateEmail(_0x34913f, _0x4cd4b2, _0x4aa73a) {
  const _0x226e1d = _0x4d9eeb;
  let _0xbadf5d = _0x34913f[_0x226e1d(0x1a5)]("@")
    ? _0x34913f[_0x226e1d(0x245)]("@")[0x1][_0x226e1d(0x245)](".")[0x0]
    : [];
  dom = [];
  _0x4cd4b2 !== undefined &&
    _0x4cd4b2[_0x226e1d(0x245)](",")[_0x226e1d(0x1dc)](function (_0x3d02c1) {
      const _0x2afd59 = _0x226e1d;
      _0x3d02c1[_0x2afd59(0x1a5)](_0xbadf5d) &&
        dom[_0x2afd59(0x17e)](_0xbadf5d);
    });
  dom[_0x226e1d(0x22a)] > 0x0 ? (domainAllowed = ![]) : (domainAllowed = !![]);
  var _0x2de89f = /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,20})?$/;
  !_0x2de89f["test"](_0x34913f) || !domainAllowed
    ? ((emailFilled = ![]), unfilledArr[_0x226e1d(0x17e)]({ input: _0x4aa73a }))
    : (emailFilled = !![]);
}
function phoneValidation(_0x495d35, _0x1b9d87, _0x498e91) {
  if (phoneFormat) return _0x1b9d87 >= _0x498e91 ? !![] : ![];
  else {
    if (_0x1b9d87 >= _0x498e91) return !![];
  }
}
function validation() {
  const _0x40f1a1 = _0x4d9eeb;
  $(steps[x])[_0x40f1a1(0x241)]("card") && enableBtn();
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
    (textareaLength = $(steps[x])[_0x40f1a1(0x184)](_0x40f1a1(0x140))[
      _0x40f1a1(0x22a)
    ]),
    (textInputLength = $(steps[x])["find"](_0x40f1a1(0x171))[_0x40f1a1(0x22a)]),
    (selectInputLength = $(steps[x])[_0x40f1a1(0x184)](_0x40f1a1(0x25e))[
      _0x40f1a1(0x22a)
    ]),
    (emailInputLength = $(steps[x])[_0x40f1a1(0x184)](
      "input[type=\x22email\x22]:visible",
    )["length"]),
    (checkboxInputLength = $(steps[x])[_0x40f1a1(0x184)](
      "input[type=\x22checkbox\x22]:visible",
    )[_0x40f1a1(0x22a)]);
  textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0
    ? disableBtn()
    : enableBtn();
  checkCount = $(steps[x])[_0x40f1a1(0x241)](_0x40f1a1(0x255))
    ? $(steps[x])[_0x40f1a1(0x241)](_0x40f1a1(0x255))
    : $(steps[x])[_0x40f1a1(0x184)](_0x40f1a1(0x180))[_0x40f1a1(0x22a)] > 0x0
      ? $(steps[x])
          [_0x40f1a1(0x184)](_0x40f1a1(0x180))
          [_0x40f1a1(0x241)](_0x40f1a1(0x255))
      : 0x0;
  if (!logicExtra)
    $(steps[x])
      [_0x40f1a1(0x184)](_0x40f1a1(0x25d))
      ["is"]("[type=\x22checkbox\x22]") &&
      (checkCount === "*" ||
      checkCount > $(steps[x])["find"](_0x40f1a1(0x13f))[_0x40f1a1(0x22a)]
        ? $(steps[x])
            [_0x40f1a1(0x184)](_0x40f1a1(0x13f))
            ["each"](function () {
              const _0x9046d = _0x40f1a1;
              $(this)["is"](_0x9046d(0x1bb))
                ? $(steps[x])[_0x9046d(0x184)](_0x9046d(0x1b9))["length"] <
                    0x1 &&
                  ((checkboxFilled = !![]),
                  resetInputErrorMessage($(this)["attr"]("name")))
                : ((checkboxFilled = ![]),
                  unfilledArr["push"]({
                    input: $(this)[_0x9046d(0x1fb)](_0x9046d(0x123)),
                  }));
            })
        : $(steps[x])["find"](_0x40f1a1(0x111))["length"] >= checkCount
          ? $(steps[x])[_0x40f1a1(0x184)](_0x40f1a1(0x1b9))[_0x40f1a1(0x22a)] >
            0x0
            ? $(steps[x])
                [_0x40f1a1(0x184)](":input[type=\x22checkbox\x22][required]")
                [_0x40f1a1(0x24c)](function () {
                  const _0x5a016f = _0x40f1a1;
                  checkboxFilled = ![];
                  let _0x19d45f = $(steps[x])[_0x5a016f(0x184)](
                      _0x5a016f(0x1b9),
                    )[_0x5a016f(0x22a)],
                    _0x127777 = $(steps[x])[_0x5a016f(0x184)](_0x5a016f(0x1c9))[
                      "length"
                    ];
                  _0x19d45f - _0x127777 === 0x0
                    ? ((checkboxFilled = !![]),
                      resetInputErrorMessage(
                        $(steps[x])
                          [_0x5a016f(0x184)](_0x5a016f(0x13f))
                          [_0x5a016f(0x1fb)]("name"),
                      ))
                    : ((checkboxFilled = ![]),
                      $(steps[x])
                        ["find"](_0x5a016f(0x1df))
                        [_0x5a016f(0x24c)](function () {
                          const _0x23ed17 = _0x5a016f;
                          unfilledArr["push"]({
                            input: $(this)[_0x23ed17(0x1fb)](_0x23ed17(0x123)),
                          });
                        }));
                })
            : ((checkboxFilled = !![]),
              resetInputErrorMessage(
                $(steps[x])
                  [_0x40f1a1(0x184)](":input[type=\x22checkbox\x22]")
                  [_0x40f1a1(0x1fb)](_0x40f1a1(0x123)),
              ))
          : ((checkboxFilled = ![]),
            $(steps[x])
              [_0x40f1a1(0x184)](_0x40f1a1(0x1b9))
              [_0x40f1a1(0x24c)](function () {
                const _0x1b88a9 = _0x40f1a1;
                $(this)["not"](_0x1b88a9(0x1bb)) &&
                  unfilledArr[_0x1b88a9(0x17e)]({
                    input: $(this)[_0x1b88a9(0x1fb)](_0x1b88a9(0x123)),
                  });
              }),
            unfilledArr["push"]({
              input: $(steps[x])
                [_0x40f1a1(0x184)](_0x40f1a1(0x13f))
                ["attr"](_0x40f1a1(0x123)),
            }))),
      $(steps[x])
        ["find"](_0x40f1a1(0x204))
        [_0x40f1a1(0x24c)](function (_0x549699) {
          const _0x5297ac = _0x40f1a1;
          var _0x306878 = $(this)[_0x5297ac(0x1fb)](_0x5297ac(0x123));
          $("input:radio[name=\x22" + _0x306878 + _0x5297ac(0x26d))[
            _0x5297ac(0x22a)
          ] == 0x0
            ? (!empReqRadio[_0x5297ac(0x184)](
                (_0x5f3aee) => _0x5f3aee[_0x5297ac(0x1c5)] === _0x549699,
              ) && empReqRadio["push"]({ input: _0x549699 }),
              unfilledArr[_0x5297ac(0x17e)]({
                input: $(this)["attr"](_0x5297ac(0x123)),
              }))
            : (empReqRadio = empReqRadio[_0x5297ac(0x20a)](
                (_0x5aa971) => _0x5aa971[_0x5297ac(0x1c5)] !== _0x549699,
              )),
            empReqRadio[_0x5297ac(0x22a)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0x40f1a1(0x184)](_0x40f1a1(0x223))
        [_0x40f1a1(0x24c)](function (_0x3cd056) {
          const _0xa8765a = _0x40f1a1;
          let _0x329cea = $(this)[_0xa8765a(0x21c)]()[_0xa8765a(0x22a)],
            _0x40cf62 = $(this)["data"]("min-character")
              ? $(this)[_0xa8765a(0x241)](_0xa8765a(0x1ce))
              : 0x0;
          $(this)[_0xa8765a(0x21c)]() !== "" && _0x329cea >= _0x40cf62
            ? (empReqInput = empReqInput["filter"](
                (_0x5b9772) => _0x5b9772[_0xa8765a(0x1c5)] !== _0x3cd056,
              ))
            : (!empReqInput[_0xa8765a(0x184)](
                (_0x1d85fd) => _0x1d85fd["input"] === _0x3cd056,
              ) && empReqInput[_0xa8765a(0x17e)]({ input: _0x3cd056 }),
              unfilledArr["push"]({
                input: $(this)[_0xa8765a(0x1fb)](_0xa8765a(0x123)),
              })),
            empReqInput[_0xa8765a(0x22a)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x40f1a1(0x247))
        [_0x40f1a1(0x24c)](function (_0x17c40b) {
          const _0x354b49 = _0x40f1a1;
          let _0x455833 = $(this)["val"]()[_0x354b49(0x22a)],
            _0x5e6284 = $(this)["data"](_0x354b49(0x1ce))
              ? $(this)[_0x354b49(0x241)](_0x354b49(0x1ce))
              : 0x0;
          $(this)["val"]() !== "" && _0x455833 >= _0x5e6284
            ? (empReqPassword = empReqPassword[_0x354b49(0x20a)](
                (_0x2af32b) => _0x2af32b["input"] !== _0x17c40b,
              ))
            : (!empReqPassword["find"](
                (_0x1458b7) => _0x1458b7[_0x354b49(0x1c5)] === _0x17c40b,
              ) && empReqPassword[_0x354b49(0x17e)]({ input: _0x17c40b }),
              unfilledArr[_0x354b49(0x17e)]({
                input: $(this)["attr"](_0x354b49(0x123)),
              })),
            empReqPassword["length"] === 0x0
              ? (passwordFilled = !![])
              : (passwordFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x40f1a1(0x23f))
        [_0x40f1a1(0x24c)](function (_0x3a08d5) {
          const _0x50ccb6 = _0x40f1a1;
          let _0x14a3ad = $(this)[_0x50ccb6(0x21c)]()[_0x50ccb6(0x22a)],
            _0xcfdf8c = $(this)[_0x50ccb6(0x241)](_0x50ccb6(0x1ce))
              ? $(this)[_0x50ccb6(0x241)]("min-character")
              : 0x0;
          $(this)[_0x50ccb6(0x21c)]() !== "" && _0x14a3ad >= _0xcfdf8c
            ? (empReqTime = empReqTime["filter"](
                (_0x447d3b) => _0x447d3b["input"] !== _0x3a08d5,
              ))
            : (!empReqTime[_0x50ccb6(0x184)](
                (_0x4d2b38) => _0x4d2b38[_0x50ccb6(0x1c5)] === _0x3a08d5,
              ) && empReqUrl[_0x50ccb6(0x17e)]({ input: _0x3a08d5 }),
              unfilledArr["push"]({
                input: $(this)[_0x50ccb6(0x1fb)]("name"),
              })),
            empReqTime[_0x50ccb6(0x22a)] === 0x0 &&
            validateURL($(this)[_0x50ccb6(0x21c)]())
              ? (timeFilled = !![])
              : (timeFilled = ![]);
        }),
      $(steps[x])
        [_0x40f1a1(0x184)](_0x40f1a1(0x1f0))
        ["each"](function (_0x3970bb) {
          const _0x488e34 = _0x40f1a1;
          let _0x379f4a = $(this)[_0x488e34(0x21c)]()[_0x488e34(0x22a)],
            _0x15b1f4 = $(this)[_0x488e34(0x241)](_0x488e34(0x1ce))
              ? $(this)[_0x488e34(0x241)](_0x488e34(0x1ce))
              : 0x0;
          $(this)[_0x488e34(0x21c)]() !== "" && _0x379f4a >= _0x15b1f4
            ? (empReqUrl = empReqUrl[_0x488e34(0x20a)](
                (_0x5c6adc) => _0x5c6adc[_0x488e34(0x1c5)] !== _0x3970bb,
              ))
            : (!empReqUrl[_0x488e34(0x184)](
                (_0xfb6287) => _0xfb6287["input"] === _0x3970bb,
              ) && empReqUrl[_0x488e34(0x17e)]({ input: _0x3970bb }),
              unfilledArr[_0x488e34(0x17e)]({
                input: $(this)[_0x488e34(0x1fb)](_0x488e34(0x123)),
              })),
            empReqUrl[_0x488e34(0x22a)] === 0x0 &&
            validateURL($(this)[_0x488e34(0x21c)]())
              ? (urlFilled = !![])
              : (urlFilled = ![]);
        }),
      $(steps[x])
        [_0x40f1a1(0x184)](":input[type=\x22date\x22][required]")
        [_0x40f1a1(0x24c)](function (_0x1a32b4) {
          const _0x410076 = _0x40f1a1;
          $(this)[_0x410076(0x21c)]() !== ""
            ? (empReqDate = empReqDate[_0x410076(0x20a)](
                (_0x24cb9a) => _0x24cb9a["input"] !== _0x1a32b4,
              ))
            : (!empReqDate["find"](
                (_0x35b1d6) => _0x35b1d6[_0x410076(0x1c5)] === _0x1a32b4,
              ) && empReqDate["push"]({ input: _0x1a32b4 }),
              unfilledArr["push"]({
                input: $(this)["attr"](_0x410076(0x123)),
              })),
            empReqDate[_0x410076(0x22a)] === 0x0
              ? (dateFilled = !![])
              : (dateFilled = ![]);
        }),
      $(steps[x])
        [_0x40f1a1(0x184)](_0x40f1a1(0x162))
        [_0x40f1a1(0x24c)](function (_0x4e4bfd) {
          const _0x42e173 = _0x40f1a1;
          if ($(this)[_0x42e173(0x21c)]() !== "") {
            let _0x27a021 = $(this)[_0x42e173(0x21c)]()[_0x42e173(0x22a)],
              _0x23a262 = $(this)[_0x42e173(0x241)](_0x42e173(0x1ce))
                ? $(this)["data"](_0x42e173(0x1ce))
                : 0x0;
            if ($(this)[_0x42e173(0x241)]("phone-autoformat")) {
              var _0x2a16fc = phoneAutoFormat(
                $(this)[_0x42e173(0x241)](_0x42e173(0x160)),
              );
              $(this)[_0x42e173(0x21c)](_0x2a16fc($(this)[_0x42e173(0x21c)]()));
            }
            phoneValidation($(this)["val"](), _0x27a021, _0x23a262)
              ? (empReqTel = empReqTel[_0x42e173(0x20a)](
                  (_0x1e5cc0) => _0x1e5cc0[_0x42e173(0x1c5)] !== _0x4e4bfd,
                ))
              : empReqTel[_0x42e173(0x17e)]({ input: _0x4e4bfd });
          } else
            !empReqTel[_0x42e173(0x184)](
              (_0x395a76) => _0x395a76["input"] === _0x4e4bfd,
            ) && empReqTel[_0x42e173(0x17e)]({ input: _0x4e4bfd }),
              unfilledArr[_0x42e173(0x17e)]({ input: $(this)["attr"]("name") });
          empReqTel[_0x42e173(0x22a)] === 0x0
            ? (telFilled = !![])
            : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x40f1a1(0x184)](":input[type=\x22file\x22][required]")
        ["each"](function (_0x4d6609) {
          const _0x177266 = _0x40f1a1;
          $(this)[_0x177266(0x21c)]() !== ""
            ? (empReqFile = empReqFile[_0x177266(0x20a)](
                (_0x294120) => _0x294120[_0x177266(0x1c5)] !== _0x4d6609,
              ))
            : (!empReqFile[_0x177266(0x184)](
                (_0x3972a5) => _0x3972a5[_0x177266(0x1c5)] === _0x4d6609,
              ) && empReqFile["push"]({ input: _0x4d6609 }),
              unfilledArr[_0x177266(0x17e)]({
                input: $(this)["attr"](_0x177266(0x123)),
              })),
            empReqFile[_0x177266(0x22a)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x40f1a1(0x184)](_0x40f1a1(0x1be))
        ["each"](function (_0x48d649) {
          const _0x1925df = _0x40f1a1;
          let _0x5c4f0c = $(this)[_0x1925df(0x21c)]()[_0x1925df(0x22a)],
            _0x5ce7df = $(this)[_0x1925df(0x241)]("min-character")
              ? $(this)["data"](_0x1925df(0x1ce))
              : 0x0;
          $(this)[_0x1925df(0x21c)]() !== "" && _0x5c4f0c >= _0x5ce7df
            ? (empReqNum = empReqNum[_0x1925df(0x20a)](
                (_0x1e448d) => _0x1e448d[_0x1925df(0x1c5)] !== _0x48d649,
              ))
            : (!empReqNum[_0x1925df(0x184)](
                (_0x2c96d1) => _0x2c96d1[_0x1925df(0x1c5)] === _0x48d649,
              ) && empReqNum[_0x1925df(0x17e)]({ input: _0x48d649 }),
              unfilledArr[_0x1925df(0x17e)]({
                input: $(this)[_0x1925df(0x1fb)]("name"),
              })),
            empReqNum["length"] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x40f1a1(0x184)](_0x40f1a1(0x1f1))
        [_0x40f1a1(0x24c)](function (_0x45cdd7) {
          const _0x125768 = _0x40f1a1;
          let _0x4db6f1 = $(this)["val"]();
          _0x4db6f1 === "" && (_0x4db6f1 = null),
            _0x4db6f1 != null
              ? (empReqSelect = empReqSelect[_0x125768(0x20a)](
                  (_0x300b8e) => _0x300b8e[_0x125768(0x1c5)] !== _0x45cdd7,
                ))
              : (!empReqSelect[_0x125768(0x184)](
                  (_0x47377a) => _0x47377a[_0x125768(0x1c5)] === _0x45cdd7,
                ) && empReqSelect[_0x125768(0x17e)]({ input: _0x45cdd7 }),
                unfilledArr[_0x125768(0x17e)]({
                  input: $(this)["attr"](_0x125768(0x123)),
                })),
            empReqSelect[_0x125768(0x22a)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x40f1a1(0x184)](_0x40f1a1(0x18a))
        ["each"](function (_0x449dce) {
          const _0x3c8a8e = _0x40f1a1;
          let _0x4815bf = $(this)[_0x3c8a8e(0x21c)]()[_0x3c8a8e(0x22a)],
            _0x344aa9 = $(this)[_0x3c8a8e(0x241)]("min-character")
              ? $(this)[_0x3c8a8e(0x241)](_0x3c8a8e(0x1ce))
              : 0x0;
          $(this)[_0x3c8a8e(0x21c)]() !== "" && _0x4815bf >= _0x344aa9
            ? (empReqTextarea = empReqTextarea[_0x3c8a8e(0x20a)](
                (_0x2aa8aa) => _0x2aa8aa[_0x3c8a8e(0x1c5)] !== _0x449dce,
              ))
            : (!empReqTextarea[_0x3c8a8e(0x184)](
                (_0x19aff8) => _0x19aff8[_0x3c8a8e(0x1c5)] === _0x449dce,
              ) && empReqTextarea[_0x3c8a8e(0x17e)]({ input: _0x449dce }),
              unfilledArr[_0x3c8a8e(0x17e)]({
                input: $(this)[_0x3c8a8e(0x1fb)](_0x3c8a8e(0x123)),
              })),
            empReqTextarea[_0x3c8a8e(0x22a)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x40f1a1(0x1fd))
        ["each"](function () {
          const _0x5a0659 = _0x40f1a1;
          $(this)[_0x5a0659(0x21c)]() !== ""
            ? validateEmail(
                $(this)[_0x5a0659(0x21c)](),
                $(this)[_0x5a0659(0x241)](_0x5a0659(0x18b)),
                $(this)["attr"](_0x5a0659(0x123)),
              )
            : ((emailFilled = ![]),
              unfilledArr[_0x5a0659(0x17e)]({
                input: $(this)[_0x5a0659(0x1fb)](_0x5a0659(0x123)),
              }));
        });
  else {
    if ($(steps[x])[_0x40f1a1(0x241)](_0x40f1a1(0x22d)))
      (answer = $(steps[x])
        [_0x40f1a1(0x184)](_0x40f1a1(0x10f))
        ["data"](_0x40f1a1(0x1f9))),
        (selections = selections[_0x40f1a1(0x20a)](
          (_0x183e8a) => _0x183e8a[_0x40f1a1(0x197)] !== x,
        )),
        selections["push"]({ step: x, selected: answer });
    else
      $(steps[x])
        [_0x40f1a1(0x184)](_0x40f1a1(0x106))
        [_0x40f1a1(0x241)](_0x40f1a1(0x22d)) &&
        ((answer = $(steps[x])
          ["find"](_0x40f1a1(0x106))
          [_0x40f1a1(0x241)](_0x40f1a1(0x1f9))),
        (selections = selections["filter"](
          (_0x4decf1) => _0x4decf1["step"] !== x,
        )),
        selections[_0x40f1a1(0x17e)]({ step: x, selected: answer }));
    $(steps[x])
      [_0x40f1a1(0x184)](_0x40f1a1(0x106))
      [_0x40f1a1(0x184)](_0x40f1a1(0x25d))
      ["is"]("[type=\x22checkbox\x22]") &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])["find"](":input[type=\x22checkbox\x22]")[_0x40f1a1(0x22a)]
        ? $(steps[x])
            ["find"](_0x40f1a1(0x13f))
            ["each"](function () {
              const _0x140593 = _0x40f1a1;
              $(this)["is"](_0x140593(0x1bb))
                ? $(steps[x])[_0x140593(0x184)](_0x140593(0x1bf))[
                    _0x140593(0x22a)
                  ] < 0x1 &&
                  ((skipTo = undefined),
                  $(this)
                    [_0x140593(0x207)](_0x140593(0x19e))
                    ["data"](_0x140593(0x24d)) &&
                    (skipTo = $(this)
                      [_0x140593(0x207)](_0x140593(0x19e))
                      ["data"](_0x140593(0x24d))),
                  $(this)
                    ["parents"](_0x140593(0x10f))
                    [_0x140593(0x1fb)](_0x140593(0x134)) &&
                    ((answer = $(this)
                      [_0x140593(0x207)](_0x140593(0x10f))
                      [_0x140593(0x1fb)]("data-go-to")),
                    (selections = selections["filter"](
                      (_0x44f503) => _0x44f503[_0x140593(0x197)] !== x,
                    )),
                    selections[_0x140593(0x17e)]({ step: x, selected: answer }),
                    skipTo &&
                      (selections[_0x140593(0x17e)]({
                        step: skipTo - 0x2,
                        selected: answer,
                      }),
                      (objIndex = selections[_0x140593(0x20c)](
                        (_0x39b848) => _0x39b848["step"] === x,
                      )),
                      (selections[objIndex][_0x140593(0x14c)] =
                        parseInt(skipTo) - 0x1),
                      (selections[objIndex][_0x140593(0x219)] = x))),
                  (checkboxFilled = !![]),
                  $(steps[x])[_0x140593(0x184)](_0x140593(0x1c9))[
                    _0x140593(0x22a)
                  ] >=
                    $(steps[x])[_0x140593(0x184)](
                      ":input[type=\x22checkbox\x22][required]",
                    )[_0x140593(0x22a)] &&
                    resetInputErrorMessage(
                      $(steps[x])
                        [_0x140593(0x184)](_0x140593(0x13f))
                        [_0x140593(0x1fb)](_0x140593(0x123)),
                    ))
                : ((checkboxFilled = ![]),
                  unfilledArr["push"]({
                    input: $(this)[_0x140593(0x1fb)](_0x140593(0x123)),
                  }));
            })
        : $(steps[x])
              [_0x40f1a1(0x184)](_0x40f1a1(0x106))
              ["find"](":input[type=\x22checkbox\x22]:checked")[
              _0x40f1a1(0x22a)
            ] >= checkCount
          ? ($(steps[x])
              ["find"](_0x40f1a1(0x106))
              [_0x40f1a1(0x184)](_0x40f1a1(0x13f))
              ["parents"](_0x40f1a1(0x10f))
              [_0x40f1a1(0x1fb)](_0x40f1a1(0x134)) &&
              ((skipTo = undefined),
              $(steps[x])
                [_0x40f1a1(0x184)](_0x40f1a1(0x106))
                [_0x40f1a1(0x184)](_0x40f1a1(0x13f))
                ["parents"](_0x40f1a1(0x19e))
                ["attr"](_0x40f1a1(0x128)) &&
                (skipTo = $(steps[x])
                  [_0x40f1a1(0x184)](_0x40f1a1(0x106))
                  [_0x40f1a1(0x184)](":input[type=\x22checkbox\x22]:checked")
                  [_0x40f1a1(0x207)](_0x40f1a1(0x19e))
                  ["attr"](_0x40f1a1(0x128))),
              (answer = $(steps[x])
                [_0x40f1a1(0x184)](_0x40f1a1(0x106))
                [_0x40f1a1(0x184)](_0x40f1a1(0x13f))
                [_0x40f1a1(0x207)](_0x40f1a1(0x10f))
                [_0x40f1a1(0x1fb)]("data-go-to")),
              (selections = selections["filter"](
                (_0x1a6143) => _0x1a6143[_0x40f1a1(0x197)] !== x,
              )),
              selections[_0x40f1a1(0x17e)]({ step: x, selected: answer }),
              skipTo &&
                ((selections = selections["filter"](
                  (_0x2fbb43) => _0x2fbb43[_0x40f1a1(0x197)] !== skipTo - 0x2,
                )),
                selections[_0x40f1a1(0x17e)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x40f1a1(0x20c)](
                  (_0x4516bf) => _0x4516bf["step"] === x,
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x))),
            (checkboxFilled = !![]),
            $(steps[x])["find"](_0x40f1a1(0x1c9))[_0x40f1a1(0x22a)] >=
              $(steps[x])[_0x40f1a1(0x184)](
                ":input[type=\x22checkbox\x22][required]",
              )[_0x40f1a1(0x22a)] &&
              resetInputErrorMessage(
                $(steps[x])
                  [_0x40f1a1(0x184)](":input[type=\x22checkbox\x22]")
                  [_0x40f1a1(0x1fb)](_0x40f1a1(0x123)),
              ))
          : ((checkboxFilled = ![]),
            $(steps[x])
              [_0x40f1a1(0x184)](_0x40f1a1(0x1b9))
              [_0x40f1a1(0x24c)](function () {
                const _0xfe77a0 = _0x40f1a1;
                $(this)[_0xfe77a0(0x1b1)](_0xfe77a0(0x1bb)) &&
                  unfilledArr[_0xfe77a0(0x17e)]({
                    input: $(this)[_0xfe77a0(0x1fb)]("name"),
                  });
              }))),
      $(steps[x])
        ["find"](_0x40f1a1(0x106))
        [_0x40f1a1(0x184)]("input:radio[required]")
        ["each"](function (_0x52def1) {
          const _0x2def46 = _0x40f1a1;
          var _0xb7a339 = $(this)["attr"](_0x2def46(0x123));
          $(_0x2def46(0x22c) + _0xb7a339 + "\x22]:checked")[_0x2def46(0x22a)] ==
          0x0
            ? (!empReqRadio[_0x2def46(0x184)](
                (_0xfa7c68) => _0xfa7c68[_0x2def46(0x1c5)] === _0x52def1,
              ) && empReqRadio["push"]({ input: _0x52def1 }),
              unfilledArr["push"]({
                input: $(this)[_0x2def46(0x1fb)](_0x2def46(0x123)),
              }))
            : (empReqRadio = empReqRadio[_0x2def46(0x20a)](
                (_0x5aa7be) => _0x5aa7be["input"] !== _0x52def1,
              )),
            empReqRadio[_0x2def46(0x22a)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0x40f1a1(0x184)](".active-answer-card")
        [_0x40f1a1(0x184)](_0x40f1a1(0x223))
        [_0x40f1a1(0x24c)](function (_0x1b6fdb) {
          const _0x29ad00 = _0x40f1a1;
          let _0x154e53 = $(this)[_0x29ad00(0x21c)]()[_0x29ad00(0x22a)],
            _0x14df9b = $(this)[_0x29ad00(0x241)]("min-character")
              ? $(this)[_0x29ad00(0x241)](_0x29ad00(0x1ce))
              : 0x0;
          $(this)["val"]() !== "" && _0x154e53 >= _0x14df9b
            ? (empReqInput = empReqInput["filter"](
                (_0x51456e) => _0x51456e["input"] !== _0x1b6fdb,
              ))
            : (!empReqInput[_0x29ad00(0x184)](
                (_0x372932) => _0x372932[_0x29ad00(0x1c5)] === _0x1b6fdb,
              ) && empReqInput["push"]({ input: _0x1b6fdb }),
              unfilledArr["push"]({
                input: $(this)[_0x29ad00(0x1fb)](_0x29ad00(0x123)),
              })),
            empReqInput["length"] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x40f1a1(0x184)](".active-answer-card")
        [_0x40f1a1(0x184)](_0x40f1a1(0x1d1))
        ["each"](function (_0x25ce13) {
          const _0x224b8a = _0x40f1a1;
          (skipTo = undefined),
            $(this)
              [_0x224b8a(0x207)](_0x224b8a(0x19e))
              [_0x224b8a(0x241)](_0x224b8a(0x24d)) !== "" &&
              (skipTo = $(this)
                [_0x224b8a(0x207)]("[data-skip-to]")
                [_0x224b8a(0x241)](_0x224b8a(0x24d))),
            $(this)
              ["parents"]("[data-go-to]")
              [_0x224b8a(0x1fb)]("data-go-to") &&
              ((answer = $(this)
                ["parents"](_0x224b8a(0x10f))
                ["attr"](_0x224b8a(0x134))),
              (selections = selections[_0x224b8a(0x20a)](
                (_0x48dc34) => _0x48dc34[_0x224b8a(0x197)] !== x,
              )),
              selections[_0x224b8a(0x17e)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections["findIndex"](
                  (_0x4d626d) => _0x4d626d[_0x224b8a(0x197)] === x,
                )),
                (selections[objIndex][_0x224b8a(0x14c)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x224b8a(0x219)] = x)));
        }),
      $(steps[x])
        ["find"](".active-answer-card")
        [_0x40f1a1(0x184)](_0x40f1a1(0x247))
        [_0x40f1a1(0x24c)](function (_0x3cb736) {
          const _0x511e8c = _0x40f1a1;
          let _0x1618c3 = $(this)[_0x511e8c(0x21c)]()[_0x511e8c(0x22a)],
            _0x1fd0b2 = $(this)[_0x511e8c(0x241)](_0x511e8c(0x1ce))
              ? $(this)["data"](_0x511e8c(0x1ce))
              : 0x0;
          $(this)[_0x511e8c(0x21c)]() !== "" && _0x1618c3 >= _0x1fd0b2
            ? (empReqPassword = empReqPassword[_0x511e8c(0x20a)](
                (_0x56749c) => _0x56749c[_0x511e8c(0x1c5)] !== _0x3cb736,
              ))
            : (!empReqPassword["find"](
                (_0x2cfed2) => _0x2cfed2[_0x511e8c(0x1c5)] === _0x3cb736,
              ) && empReqPassword["push"]({ input: _0x3cb736 }),
              unfilledArr[_0x511e8c(0x17e)]({
                input: $(this)["attr"](_0x511e8c(0x123)),
              })),
            empReqPassword[_0x511e8c(0x22a)] === 0x0
              ? (passwordFilled = !![])
              : (passwordFilled = ![]);
        }),
      $(steps[x])
        [_0x40f1a1(0x184)](".active-answer-card")
        [_0x40f1a1(0x184)](_0x40f1a1(0x25a))
        [_0x40f1a1(0x24c)](function (_0x37a106) {
          const _0x2b56e4 = _0x40f1a1;
          (skipTo = undefined),
            $(this)
              [_0x2b56e4(0x207)](_0x2b56e4(0x19e))
              ["data"](_0x2b56e4(0x24d)) !== "" &&
              (skipTo = $(this)
                [_0x2b56e4(0x207)]("[data-skip-to]")
                [_0x2b56e4(0x241)](_0x2b56e4(0x24d))),
            $(this)
              ["parents"](_0x2b56e4(0x10f))
              [_0x2b56e4(0x1fb)](_0x2b56e4(0x134)) &&
              ((answer = $(this)
                [_0x2b56e4(0x207)](_0x2b56e4(0x10f))
                ["attr"](_0x2b56e4(0x134))),
              (selections = selections["filter"](
                (_0x1c436e) => _0x1c436e[_0x2b56e4(0x197)] !== x,
              )),
              selections[_0x2b56e4(0x17e)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0x2b56e4(0x20c)](
                  (_0xcd365f) => _0xcd365f[_0x2b56e4(0x197)] === x,
                )),
                (selections[objIndex][_0x2b56e4(0x14c)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x2b56e4(0x219)] = x)));
        }),
      $(steps[x])
        [_0x40f1a1(0x184)](".active-answer-card")
        [_0x40f1a1(0x184)](_0x40f1a1(0x23f))
        [_0x40f1a1(0x24c)](function (_0x49a763) {
          const _0x19e7f4 = _0x40f1a1;
          let _0x4cd00d = $(this)[_0x19e7f4(0x21c)]()["length"],
            _0x580024 = $(this)[_0x19e7f4(0x241)](_0x19e7f4(0x1ce))
              ? $(this)[_0x19e7f4(0x241)](_0x19e7f4(0x1ce))
              : 0x0;
          $(this)["val"]() !== "" && _0x4cd00d >= _0x580024
            ? (empReqUrl = empReqUrl[_0x19e7f4(0x20a)](
                (_0x4348f3) => _0x4348f3["input"] !== _0x49a763,
              ))
            : (!empReqUrl["find"](
                (_0x3d0010) => _0x3d0010[_0x19e7f4(0x1c5)] === _0x49a763,
              ) && empReqUrl["push"]({ input: _0x49a763 }),
              unfilledArr[_0x19e7f4(0x17e)]({
                input: $(this)["attr"](_0x19e7f4(0x123)),
              })),
            empReqUrl["length"] === 0x0 && validateURL($(this)["val"]())
              ? (urlFilled = !![])
              : (urlFilled = ![]);
        }),
      $(steps[x])
        [_0x40f1a1(0x184)](_0x40f1a1(0x106))
        [_0x40f1a1(0x184)](":input[type=\x22url\x22]")
        [_0x40f1a1(0x24c)](function (_0x480ad1) {
          const _0x1d0cc2 = _0x40f1a1;
          (skipTo = undefined),
            $(this)
              [_0x1d0cc2(0x207)](_0x1d0cc2(0x19e))
              [_0x1d0cc2(0x241)](_0x1d0cc2(0x24d)) !== "" &&
              (skipTo = $(this)
                [_0x1d0cc2(0x207)](_0x1d0cc2(0x19e))
                [_0x1d0cc2(0x241)]("skip-to")),
            $(this)
              [_0x1d0cc2(0x207)](_0x1d0cc2(0x10f))
              [_0x1d0cc2(0x1fb)]("data-go-to") &&
              ((answer = $(this)
                [_0x1d0cc2(0x207)](_0x1d0cc2(0x10f))
                [_0x1d0cc2(0x1fb)](_0x1d0cc2(0x134))),
              (selections = selections[_0x1d0cc2(0x20a)](
                (_0x574f85) => _0x574f85[_0x1d0cc2(0x197)] !== x,
              )),
              selections[_0x1d0cc2(0x17e)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x1d0cc2(0x17e)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x1d0cc2(0x20c)](
                  (_0x8ceae4) => _0x8ceae4[_0x1d0cc2(0x197)] === x,
                )),
                (selections[objIndex][_0x1d0cc2(0x14c)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x1d0cc2(0x219)] = x)));
        }),
      $(steps[x])
        [_0x40f1a1(0x184)](_0x40f1a1(0x106))
        [_0x40f1a1(0x184)](_0x40f1a1(0x18d))
        [_0x40f1a1(0x24c)](function (_0x52d5e0) {
          const _0x595aa6 = _0x40f1a1;
          $(this)[_0x595aa6(0x21c)]() !== ""
            ? (empReqDate = empReqDate[_0x595aa6(0x20a)](
                (_0x507a90) => _0x507a90["input"] !== _0x52d5e0,
              ))
            : (!empReqDate[_0x595aa6(0x184)](
                (_0x37b8c0) => _0x37b8c0[_0x595aa6(0x1c5)] === _0x52d5e0,
              ) && empReqDate[_0x595aa6(0x17e)]({ input: _0x52d5e0 }),
              unfilledArr[_0x595aa6(0x17e)]({
                input: $(this)[_0x595aa6(0x1fb)]("name"),
              })),
            empReqDate[_0x595aa6(0x22a)] === 0x0
              ? (dateFilled = !![])
              : (dateFilled = ![]);
        }),
      $(steps[x])
        [_0x40f1a1(0x184)](_0x40f1a1(0x106))
        ["find"](_0x40f1a1(0x11f))
        [_0x40f1a1(0x24c)](function (_0x1c46a2) {
          const _0xeae156 = _0x40f1a1;
          (skipTo = undefined),
            $(this)[_0xeae156(0x207)](_0xeae156(0x19e))["data"]("skip-to") !==
              "" &&
              (skipTo = $(this)
                [_0xeae156(0x207)]("[data-skip-to]")
                [_0xeae156(0x241)](_0xeae156(0x24d))),
            $(this)
              ["parents"](_0xeae156(0x10f))
              [_0xeae156(0x1fb)]("data-go-to") &&
              ((answer = $(this)
                ["parents"]("[data-go-to]")
                ["attr"]("data-go-to")),
              (selections = selections[_0xeae156(0x20a)](
                (_0x2a267a) => _0x2a267a[_0xeae156(0x197)] !== x,
              )),
              selections[_0xeae156(0x17e)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0xeae156(0x17e)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0xeae156(0x20c)](
                  (_0x2f0359) => _0x2f0359[_0xeae156(0x197)] === x,
                )),
                (selections[objIndex][_0xeae156(0x14c)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        ["find"](_0x40f1a1(0x106))
        ["find"](":input[type=\x22time\x22][required]")
        ["each"](function (_0x20c5d3) {
          const _0xa7141 = _0x40f1a1;
          $(this)[_0xa7141(0x21c)]() !== ""
            ? (empReqTime = empReqTime[_0xa7141(0x20a)](
                (_0x17eacd) => _0x17eacd[_0xa7141(0x1c5)] !== _0x20c5d3,
              ))
            : (!empReqTime["find"](
                (_0x4f165c) => _0x4f165c[_0xa7141(0x1c5)] === _0x20c5d3,
              ) && empReqTime[_0xa7141(0x17e)]({ input: _0x20c5d3 }),
              unfilledArr[_0xa7141(0x17e)]({
                input: $(this)["attr"](_0xa7141(0x123)),
              })),
            empReqTime[_0xa7141(0x22a)] === 0x0
              ? (timeFilled = !![])
              : (timeFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x40f1a1(0x106))
        ["find"](_0x40f1a1(0x19a))
        [_0x40f1a1(0x24c)](function (_0x16d30) {
          const _0x55bf5d = _0x40f1a1;
          (skipTo = undefined),
            $(this)
              [_0x55bf5d(0x207)]("[data-skip-to]")
              [_0x55bf5d(0x241)]("skip-to") !== "" &&
              (skipTo = $(this)
                ["parents"](_0x55bf5d(0x19e))
                [_0x55bf5d(0x241)]("skip-to")),
            $(this)
              ["parents"](_0x55bf5d(0x10f))
              [_0x55bf5d(0x1fb)](_0x55bf5d(0x134)) &&
              ((answer = $(this)
                [_0x55bf5d(0x207)](_0x55bf5d(0x10f))
                [_0x55bf5d(0x1fb)]("data-go-to")),
              (selections = selections[_0x55bf5d(0x20a)](
                (_0x49bbed) => _0x49bbed[_0x55bf5d(0x197)] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x55bf5d(0x17e)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x55bf5d(0x20c)](
                  (_0x3c5c05) => _0x3c5c05[_0x55bf5d(0x197)] === x,
                )),
                (selections[objIndex][_0x55bf5d(0x14c)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x55bf5d(0x219)] = x)));
        }),
      $(steps[x])
        [_0x40f1a1(0x184)](_0x40f1a1(0x106))
        [_0x40f1a1(0x184)](_0x40f1a1(0x1be))
        [_0x40f1a1(0x24c)](function (_0x1100f5) {
          const _0x5deaa4 = _0x40f1a1;
          let _0x34be05 = $(this)["val"]()[_0x5deaa4(0x22a)],
            _0x1f9f82 = $(this)["data"]("min-character")
              ? $(this)["data"]("min-character")
              : 0x0;
          $(this)["val"]() !== "" && _0x34be05 >= _0x1f9f82
            ? (empReqNum = empReqNum["filter"](
                (_0x24d3f3) => _0x24d3f3[_0x5deaa4(0x1c5)] !== _0x1100f5,
              ))
            : (!empReqNum[_0x5deaa4(0x184)](
                (_0x59e0cc) => _0x59e0cc["input"] === _0x1100f5,
              ) && empReqNum[_0x5deaa4(0x17e)]({ input: _0x1100f5 }),
              unfilledArr["push"]({
                input: $(this)[_0x5deaa4(0x1fb)](_0x5deaa4(0x123)),
              })),
            empReqNum[_0x5deaa4(0x22a)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x40f1a1(0x106))
        [_0x40f1a1(0x184)](_0x40f1a1(0x240))
        [_0x40f1a1(0x24c)](function (_0x284346) {
          const _0x2b81fa = _0x40f1a1;
          (skipTo = undefined),
            $(this)
              [_0x2b81fa(0x207)](_0x2b81fa(0x19e))
              ["data"](_0x2b81fa(0x24d)) !== "" &&
              (skipTo = $(this)
                [_0x2b81fa(0x207)](_0x2b81fa(0x19e))
                [_0x2b81fa(0x241)]("skip-to")),
            $(this)
              [_0x2b81fa(0x207)](_0x2b81fa(0x10f))
              [_0x2b81fa(0x1fb)]("data-go-to") &&
              ((answer = $(this)
                [_0x2b81fa(0x207)](_0x2b81fa(0x10f))
                [_0x2b81fa(0x1fb)](_0x2b81fa(0x134))),
              (selections = selections["filter"](
                (_0x6ef13d) => _0x6ef13d[_0x2b81fa(0x197)] !== x,
              )),
              selections[_0x2b81fa(0x17e)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x2b81fa(0x17e)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x2b81fa(0x20c)](
                  (_0x522f2c) => _0x522f2c[_0x2b81fa(0x197)] === x,
                )),
                (selections[objIndex][_0x2b81fa(0x14c)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x2b81fa(0x219)] = x)));
        }),
      $(steps[x])
        [_0x40f1a1(0x184)](_0x40f1a1(0x106))
        [_0x40f1a1(0x184)](_0x40f1a1(0x162))
        ["each"](function (_0x26d289) {
          const _0x322749 = _0x40f1a1;
          if ($(this)[_0x322749(0x21c)]() !== "") {
            let _0x1d67fd = $(this)[_0x322749(0x21c)]()[_0x322749(0x22a)],
              _0x3044bc = $(this)[_0x322749(0x241)]("min-character")
                ? $(this)["data"](_0x322749(0x1ce))
                : 0x0;
            if ($(this)[_0x322749(0x241)]("phone-autoformat")) {
              var _0x37f5d6 = phoneAutoFormat(
                $(this)[_0x322749(0x241)](_0x322749(0x160)),
              );
              $(this)["val"](_0x37f5d6($(this)[_0x322749(0x21c)]()));
            }
            phoneValidation($(this)[_0x322749(0x21c)](), _0x1d67fd, _0x3044bc)
              ? (empReqTel = empReqTel[_0x322749(0x20a)](
                  (_0x5c09e6) => _0x5c09e6["input"] !== _0x26d289,
                ))
              : empReqTel["push"]({ input: _0x26d289 });
          } else
            !empReqTel[_0x322749(0x184)](
              (_0x558a13) => _0x558a13[_0x322749(0x1c5)] === _0x26d289,
            ) && empReqTel["push"]({ input: _0x26d289 }),
              unfilledArr[_0x322749(0x17e)]({
                input: $(this)["attr"](_0x322749(0x123)),
              });
          empReqTel["length"] === 0x0 ? (telFilled = !![]) : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x40f1a1(0x184)](_0x40f1a1(0x106))
        [_0x40f1a1(0x184)](_0x40f1a1(0x23c))
        ["each"](function (_0x53ad9c) {
          const _0x2f249c = _0x40f1a1;
          (skipTo = undefined),
            $(this)
              [_0x2f249c(0x207)](_0x2f249c(0x19e))
              ["data"](_0x2f249c(0x24d)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0x2f249c(0x19e))
                [_0x2f249c(0x241)]("skip-to")),
            $(this)
              ["parents"](_0x2f249c(0x10f))
              [_0x2f249c(0x1fb)](_0x2f249c(0x134)) &&
              ((answer = $(this)
                [_0x2f249c(0x207)](_0x2f249c(0x10f))
                [_0x2f249c(0x1fb)](_0x2f249c(0x134))),
              (selections = selections[_0x2f249c(0x20a)](
                (_0x356bea) => _0x356bea["step"] !== x,
              )),
              selections[_0x2f249c(0x17e)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0x2f249c(0x20c)](
                  (_0xe4d060) => _0xe4d060[_0x2f249c(0x197)] === x,
                )),
                (selections[objIndex][_0x2f249c(0x14c)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x2f249c(0x219)] = x)));
        }),
      $(steps[x])
        [_0x40f1a1(0x184)](".active-answer-card")
        [_0x40f1a1(0x184)](_0x40f1a1(0x25c))
        [_0x40f1a1(0x24c)](function (_0x360f77) {
          const _0x5b24a9 = _0x40f1a1;
          $(this)[_0x5b24a9(0x21c)]() !== ""
            ? (empReqFile = empReqFile[_0x5b24a9(0x20a)](
                (_0x77e4db) => _0x77e4db[_0x5b24a9(0x1c5)] !== _0x360f77,
              ))
            : (!empReqFile[_0x5b24a9(0x184)](
                (_0x540083) => _0x540083[_0x5b24a9(0x1c5)] === _0x360f77,
              ) && empReqFile[_0x5b24a9(0x17e)]({ input: _0x360f77 }),
              unfilledArr[_0x5b24a9(0x17e)]({
                input: $(this)["attr"](_0x5b24a9(0x123)),
              })),
            empReqFile[_0x5b24a9(0x22a)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x40f1a1(0x184)](".active-answer-card")
        ["find"](_0x40f1a1(0x227))
        [_0x40f1a1(0x24c)](function (_0x1130b5) {
          const _0x3d8a16 = _0x40f1a1;
          (skipTo = undefined),
            $(this)
              ["parents"](_0x3d8a16(0x19e))
              [_0x3d8a16(0x241)](_0x3d8a16(0x24d)) !== "" &&
              (skipTo = $(this)
                [_0x3d8a16(0x207)](_0x3d8a16(0x19e))
                [_0x3d8a16(0x241)](_0x3d8a16(0x24d))),
            $(this)
              [_0x3d8a16(0x207)](_0x3d8a16(0x10f))
              [_0x3d8a16(0x1fb)](_0x3d8a16(0x134)) &&
              ((answer = $(this)
                [_0x3d8a16(0x207)](_0x3d8a16(0x10f))
                [_0x3d8a16(0x1fb)](_0x3d8a16(0x134))),
              (selections = selections[_0x3d8a16(0x20a)](
                (_0x21ce15) => _0x21ce15[_0x3d8a16(0x197)] !== x,
              )),
              selections[_0x3d8a16(0x17e)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x3d8a16(0x17e)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x40a126) => _0x40a126[_0x3d8a16(0x197)] === x,
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x3d8a16(0x219)] = x)));
        }),
      $(steps[x])
        ["find"](_0x40f1a1(0x106))
        ["find"](_0x40f1a1(0x1f1))
        ["each"](function (_0x57d64d) {
          const _0x5783c0 = _0x40f1a1;
          $(this)[_0x5783c0(0x21c)]() !== null &&
          $(this)[_0x5783c0(0x21c)]() !== ""
            ? (empReqSelect = empReqSelect[_0x5783c0(0x20a)](
                (_0x1cbb0b) => _0x1cbb0b[_0x5783c0(0x1c5)] !== _0x57d64d,
              ))
            : (!empReqSelect[_0x5783c0(0x184)](
                (_0x43f021) => _0x43f021["input"] === _0x57d64d,
              ) && empReqSelect[_0x5783c0(0x17e)]({ input: _0x57d64d }),
              unfilledArr[_0x5783c0(0x17e)]({
                input: $(this)[_0x5783c0(0x1fb)](_0x5783c0(0x123)),
              })),
            empReqSelect[_0x5783c0(0x22a)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x40f1a1(0x106))
        [_0x40f1a1(0x184)](_0x40f1a1(0x1e2))
        [_0x40f1a1(0x24c)](function (_0x1d2771) {
          const _0x54e50f = _0x40f1a1;
          (skipTo = undefined),
            $(this)
              [_0x54e50f(0x207)](_0x54e50f(0x19e))
              [_0x54e50f(0x241)](_0x54e50f(0x24d)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0x54e50f(0x19e))
                [_0x54e50f(0x241)]("skip-to")),
            $(this)
              [_0x54e50f(0x207)](_0x54e50f(0x10f))
              [_0x54e50f(0x1fb)](_0x54e50f(0x134)) &&
              ((answer = $(this)
                [_0x54e50f(0x207)](_0x54e50f(0x10f))
                [_0x54e50f(0x1fb)](_0x54e50f(0x134))),
              (selections = selections[_0x54e50f(0x20a)](
                (_0x2ff384) => _0x2ff384[_0x54e50f(0x197)] !== x,
              )),
              selections[_0x54e50f(0x17e)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x54e50f(0x17e)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x54e50f(0x20c)](
                  (_0x187a87) => _0x187a87[_0x54e50f(0x197)] === x,
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x54e50f(0x219)] = x)));
        }),
      $(steps[x])
        [_0x40f1a1(0x184)](_0x40f1a1(0x106))
        [_0x40f1a1(0x184)](_0x40f1a1(0x18a))
        ["each"](function (_0x2d076) {
          const _0x2a66a0 = _0x40f1a1;
          let _0x27e17d = $(this)[_0x2a66a0(0x21c)]()[_0x2a66a0(0x22a)],
            _0x510fd4 = $(this)[_0x2a66a0(0x241)](_0x2a66a0(0x1ce))
              ? $(this)[_0x2a66a0(0x241)](_0x2a66a0(0x1ce))
              : 0x0;
          $(this)[_0x2a66a0(0x21c)]() !== "" && _0x27e17d >= _0x510fd4
            ? (empReqTextarea = empReqTextarea[_0x2a66a0(0x20a)](
                (_0x567622) => _0x567622[_0x2a66a0(0x1c5)] !== _0x2d076,
              ))
            : (!empReqTextarea[_0x2a66a0(0x184)](
                (_0x2a5f9c) => _0x2a5f9c[_0x2a66a0(0x1c5)] === _0x2d076,
              ) && empReqTextarea[_0x2a66a0(0x17e)]({ input: _0x2d076 }),
              unfilledArr[_0x2a66a0(0x17e)]({
                input: $(this)[_0x2a66a0(0x1fb)](_0x2a66a0(0x123)),
              })),
            empReqTextarea[_0x2a66a0(0x22a)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x40f1a1(0x184)](_0x40f1a1(0x106))
        [_0x40f1a1(0x184)]("textarea")
        [_0x40f1a1(0x24c)](function (_0x206a80) {
          const _0x3981ed = _0x40f1a1;
          (skipTo = undefined),
            $(this)
              ["parents"](_0x3981ed(0x19e))
              [_0x3981ed(0x241)]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0x3981ed(0x207)]("[data-skip-to]")
                [_0x3981ed(0x241)](_0x3981ed(0x24d))),
            $(this)
              [_0x3981ed(0x207)]("[data-go-to]")
              [_0x3981ed(0x1fb)]("data-go-to") &&
              ((answer = $(this)
                [_0x3981ed(0x207)](_0x3981ed(0x10f))
                [_0x3981ed(0x1fb)]("data-go-to")),
              (selections = selections[_0x3981ed(0x20a)](
                (_0x3deb7e) => _0x3deb7e[_0x3981ed(0x197)] !== x,
              )),
              selections[_0x3981ed(0x17e)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x3981ed(0x17e)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x19f45d) => _0x19f45d[_0x3981ed(0x197)] === x,
                )),
                (selections[objIndex][_0x3981ed(0x14c)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x40f1a1(0x184)](".active-answer-card")
        [_0x40f1a1(0x184)](_0x40f1a1(0x1fd))
        ["each"](function (_0x453dfb) {
          const _0x49bfba = _0x40f1a1;
          $(this)["val"]() !== ""
            ? validateEmail(
                $(this)[_0x49bfba(0x21c)](),
                $(this)[_0x49bfba(0x241)](_0x49bfba(0x18b)),
                $(this)[_0x49bfba(0x1fb)]("name"),
              )
            : ((emailFilled = ![]),
              unfilledArr[_0x49bfba(0x17e)]({
                input: $(this)[_0x49bfba(0x1fb)]("name"),
              }));
        }),
      $(steps[x])
        [_0x40f1a1(0x184)](".active-answer-card")
        ["find"](_0x40f1a1(0x1b6))
        [_0x40f1a1(0x24c)](function (_0x456a23) {
          const _0x4d1c1c = _0x40f1a1;
          (skipTo = undefined),
            $(this)[_0x4d1c1c(0x207)]("[data-skip-to]")["data"]("skip-to") !==
              "" &&
              (skipTo = $(this)
                [_0x4d1c1c(0x207)](_0x4d1c1c(0x19e))
                [_0x4d1c1c(0x241)](_0x4d1c1c(0x24d))),
            $(this)
              ["parents"](_0x4d1c1c(0x10f))
              [_0x4d1c1c(0x1fb)](_0x4d1c1c(0x134)) &&
              ((answer = $(this)
                ["parents"](_0x4d1c1c(0x10f))
                [_0x4d1c1c(0x1fb)](_0x4d1c1c(0x134))),
              (selections = selections[_0x4d1c1c(0x20a)](
                (_0x4344cb) => _0x4344cb[_0x4d1c1c(0x197)] !== x,
              )),
              selections[_0x4d1c1c(0x17e)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x4d1c1c(0x17e)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x4d1c1c(0x20c)](
                  (_0x3fa2fd) => _0x3fa2fd[_0x4d1c1c(0x197)] === x,
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      trackLastStep && saveLastAnswer(selections);
  }
  $(steps[x])[_0x40f1a1(0x184)](_0x40f1a1(0x14f))["is"](_0x40f1a1(0x1bb)) &&
    ((selArr = []),
    $(steps)
      [_0x40f1a1(0x184)](_0x40f1a1(0x17d))
      [_0x40f1a1(0x24c)](function (_0x218196, _0x460478) {
        const _0x4d7732 = _0x40f1a1;
        selArr[_0x4d7732(0x17e)]({
          selected: $(this)["data"](_0x4d7732(0x1cf)),
        });
      }),
    (selString = []),
    selArr[_0x40f1a1(0x1dc)]((_0x35cf93) =>
      selString[_0x40f1a1(0x17e)](_0x35cf93[_0x40f1a1(0x1cf)]),
    ),
    $(steps[x])
      [_0x40f1a1(0x184)](_0x40f1a1(0x106))
      ["find"](_0x40f1a1(0x135))
      [_0x40f1a1(0x24c)](function () {
        const _0x4a6766 = _0x40f1a1;
        skipTo = undefined;
        if (
          $(this)
            [_0x4a6766(0x207)](_0x4a6766(0x19e))
            [_0x4a6766(0x241)](_0x4a6766(0x24d))
        )
          skipTo = $(this)
            [_0x4a6766(0x207)](_0x4a6766(0x19e))
            [_0x4a6766(0x241)](_0x4a6766(0x24d));
        else
          $(this)[_0x4a6766(0x241)](_0x4a6766(0x24d)) &&
            (skipTo = $(this)[_0x4a6766(0x241)]("skip-to"));
        selections = selections["filter"](
          (_0xc64872) => _0xc64872[_0x4a6766(0x197)] !== x,
        );
        if ($(this)["data"](_0x4a6766(0x1f9)))
          (answer = $(this)["attr"](_0x4a6766(0x134))),
            selections[_0x4a6766(0x17e)]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0x4a6766(0x17e)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0x4a6766(0x20c)](
                (_0x3adc3b) => _0x3adc3b[_0x4a6766(0x197)] === x,
              )),
              (selections[objIndex][_0x4a6766(0x14c)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x4a6766(0x219)] = x));
        else
          $(this)
            [_0x4a6766(0x207)](_0x4a6766(0x10f))
            [_0x4a6766(0x241)]("go-to") &&
            ((answer = $(this)
              [_0x4a6766(0x207)](_0x4a6766(0x10f))
              [_0x4a6766(0x241)](_0x4a6766(0x1f9))),
            selections[_0x4a6766(0x17e)]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0x4a6766(0x17e)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections["findIndex"](
                (_0x1df26e) => _0x1df26e[_0x4a6766(0x197)] === x,
              )),
              (selections[objIndex][_0x4a6766(0x14c)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x4a6766(0x219)] = x)));
      }),
    logicExtra
      ? ($(steps[x])
          [_0x40f1a1(0x184)](_0x40f1a1(0x106))
          [_0x40f1a1(0x184)](_0x40f1a1(0x165))
          ["data"]("radio-skip") === !![] ||
          $(steps[x])
            [_0x40f1a1(0x184)](_0x40f1a1(0x15c))
            [_0x40f1a1(0x241)]("radio-skip") === !![]) &&
        skip &&
        selections[_0x40f1a1(0x20a)](
          (_0x56641c) => _0x56641c[_0x40f1a1(0x197)] === x,
        )[_0x40f1a1(0x22a)] > 0x0 &&
        textareaLength === 0x0 &&
        textInputLength === 0x0 &&
        emailInputLength === 0x0 &&
        checkboxInputLength === 0x0 &&
        setTimeout(
          function () {
            (next = !![]), nextStep(), selectionQuiz();
          },
          $(steps[x])
            [_0x40f1a1(0x184)]("[data-radio-delay]")
            [_0x40f1a1(0x241)](_0x40f1a1(0x14b)),
        )
      : $(steps[x])
          [_0x40f1a1(0x184)](_0x40f1a1(0x165))
          ["data"](_0x40f1a1(0x181)) === !![] &&
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
            [_0x40f1a1(0x184)](_0x40f1a1(0x199))
            [_0x40f1a1(0x241)](_0x40f1a1(0x14b)),
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
  const _0x29cd22 = _0x4d9eeb;
  $(_0x29cd22(0x14e))[_0x29cd22(0x1c2)](),
    unfilledArr[_0x29cd22(0x22a)] > 0x0 &&
      unfilledArr[_0x29cd22(0x1dc)](function (_0x278d18) {
        const _0x47196f = _0x29cd22;
        $(_0x47196f(0x153) + _0x278d18[_0x47196f(0x1c5)] + "\x22]")
          [_0x47196f(0x1a8)]("[data-text=\x22error-message\x22]")
          [_0x47196f(0x17f)](),
          $("input[name=\x22" + _0x278d18["input"] + "\x22]")
            ["parents"]()
            [_0x47196f(0x270)](_0x47196f(0x14e))
            ["fadeIn"](),
          $("textarea[name=\x22" + _0x278d18[_0x47196f(0x1c5)] + "\x22]")
            ["siblings"](_0x47196f(0x14e))
            ["fadeIn"](),
          $("select[name=\x22" + _0x278d18[_0x47196f(0x1c5)] + "\x22]")
            [_0x47196f(0x1a8)](_0x47196f(0x14e))
            ["fadeIn"]();
      });
}
function resetInputErrorMessage(_0x1126b8) {
  const _0x472f57 = _0x4d9eeb;
  $(_0x472f57(0x153) + _0x1126b8 + "\x22]")
    ["siblings"](_0x472f57(0x14e))
    [_0x472f57(0x1c2)](),
    $(_0x472f57(0x153) + _0x1126b8 + "\x22]")
      [_0x472f57(0x207)]()
      [_0x472f57(0x270)]("[data-text=\x22error-message\x22]")
      [_0x472f57(0x1c2)](),
    $(_0x472f57(0x200) + _0x1126b8 + "\x22]")
      [_0x472f57(0x1a8)](_0x472f57(0x14e))
      [_0x472f57(0x1c2)](),
    $(_0x472f57(0x236) + _0x1126b8 + "\x22]")
      [_0x472f57(0x1a8)]("[data-text=\x22error-message\x22]")
      [_0x472f57(0x1c2)]();
}
function increaseCurstep() {
  const _0x5837be = _0x4d9eeb;
  countCard
    ? ((curStep = curStep + 0x1),
      $(_0x5837be(0x1d5))[_0x5837be(0x1c7)](steps[_0x5837be(0x22a)]))
    : $(steps[x])["data"](_0x5837be(0x22d))
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    $(_0x5837be(0x12a))[_0x5837be(0x1c7)](curStep);
}
function decreaseCurstep() {
  const _0x14c79 = _0x4d9eeb;
  countCard
    ? ((curStep = curStep - 0x1),
      $(_0x14c79(0x1d5))[_0x14c79(0x1c7)](steps[_0x14c79(0x22a)]))
    : $(steps[x])[_0x14c79(0x241)](_0x14c79(0x22d))
      ? (curStep = curStep - 0x0)
      : (curStep = curStep - 0x1),
    $("[data-text=\x22current-step\x22]")[_0x14c79(0x1c7)](curStep);
}
$(_0x4d9eeb(0x269))["on"](_0x4d9eeb(0x12e), function (_0x34e70c) {
  const _0x10119f = _0x4d9eeb;
  $(this)[_0x10119f(0x241)](_0x10119f(0x1b5)) &&
    (redirectTo = $(this)[_0x10119f(0x241)]("redirect")),
    !$(this)[_0x10119f(0x241)]("new-tab") &&
      (newTab = $(this)[_0x10119f(0x241)](_0x10119f(0x10e))),
    (successCard = $(this)[_0x10119f(0x241)]("success")),
    _0x34e70c["preventDefault"](),
    _0x34e70c[_0x10119f(0x182)](),
    logicExtra &&
      ($(this)["prop"](_0x10119f(0x192), !![]),
      $(steps)[_0x10119f(0x184)](":input")["prop"]("required", ![])),
    localStorage[_0x10119f(0x1a4)](_0x10119f(0x202)),
    fill
      ? ($(this)[_0x10119f(0x241)](_0x10119f(0x17a))
          ? (console["log"]($(this)["data"]("wait")),
            $(this)[_0x10119f(0x1c7)]($(this)[_0x10119f(0x241)]("wait")))
          : $(this)
              [_0x10119f(0x21c)](_0x10119f(0x208))
              [_0x10119f(0x1c7)](_0x10119f(0x208)),
        $(_0x10119f(0x157))[_0x10119f(0x1cd)](),
        $(_0x10119f(0x12c))[_0x10119f(0x22a)] > 0x0 &&
          grecaptcha["getResponse"]()[_0x10119f(0x22a)] === 0x0 &&
          (form[_0x10119f(0x184)]("[data-form=\x22submit-btn\x22]")[
            _0x10119f(0x1c7)
          ](oldSubmitText),
          form[_0x10119f(0x184)](_0x10119f(0x269))[_0x10119f(0x21c)](
            oldSubmitText,
          )),
        customError && $(_0x10119f(0x14e))["hide"]())
      : customError && displayErrorMessage();
});
function nextStep() {
  const _0x7953f3 = _0x4d9eeb;
  customError
    ? ($(_0x7953f3(0x14e))["hide"](),
      fill
        ? (x++,
          increaseCurstep(),
          (progress = x),
          x <= steps["length"] - 0x1 &&
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
  const _0x4ebdac = _0x4d9eeb;
  customError && $("[data-text=\x22error-message\x22]")["hide"](),
    decreaseCurstep(),
    x > 0x0 &&
      ($(progressbar[x])[_0x4ebdac(0x1b3)](_0x4ebdac(0x22f)),
      selections[_0x4ebdac(0x20a)]((_0x4d4ece) => _0x4d4ece["skipTo"] === x)[
        "length"
      ] > 0x0
        ? (x = parseInt(
            getSafe(
              () =>
                selections["filter"](
                  (_0x546daa) => _0x546daa[_0x4ebdac(0x14c)] === x,
                )[0x0][_0x4ebdac(0x219)],
            ),
          ))
        : x--,
      updateStep()),
    ($(steps[x])
      [_0x4ebdac(0x184)](_0x4ebdac(0x165))
      [_0x4ebdac(0x241)]("radio-skip") === !![] ||
      $(steps[x])
        [_0x4ebdac(0x184)](_0x4ebdac(0x106))
        [_0x4ebdac(0x184)](_0x4ebdac(0x165))
        [_0x4ebdac(0x241)]("radio-skip") === !![] ||
      $(steps[x])
        [_0x4ebdac(0x184)]("[data-answer][data-radio-skip]:visible")
        [_0x4ebdac(0x241)](_0x4ebdac(0x181)) === !![]) &&
      ((all_data = all_data[_0x4ebdac(0x20a)](
        (_0x38729c) =>
          _0x38729c[_0x4ebdac(0x20d)] !==
          $(steps[x])
            [_0x4ebdac(0x184)](_0x4ebdac(0x19f))
            ["attr"](_0x4ebdac(0x123)),
      )),
      $(
        _0x4ebdac(0x132) +
          $(steps[x])
            [_0x4ebdac(0x184)]("input[type=\x22radio\x22]:checked")
            [_0x4ebdac(0x1fb)](_0x4ebdac(0x123)) +
          "\x22]",
      )[_0x4ebdac(0x1c2)](),
      $(steps[x])
        ["find"]("input[type=\x22radio\x22]")
        [_0x4ebdac(0x1a2)](_0x4ebdac(0x272), ![]),
      $(steps[x])
        [_0x4ebdac(0x184)](_0x4ebdac(0x146))
        [_0x4ebdac(0x1b3)](_0x4ebdac(0x266)),
      validation());
}
weightedSelectionRange &&
  $(_0x4d9eeb(0x195))[_0x4d9eeb(0x24c)](function () {
    const _0x2527cd = _0x4d9eeb;
    $(this)["append"](
      "<div\x20data-range=\x22selection\x22\x20style=\x22display:none\x20!important\x22>" +
        $(this)[_0x2527cd(0x241)](_0x2527cd(0x11c)) +
        _0x2527cd(0x1ac),
    );
  });
function selectionQuiz() {
  const _0x273647 = _0x4d9eeb;
  if ($(this)["find"](_0x273647(0x1de))) {
    $("[data-selection]")[_0x273647(0x1c2)](), $(_0x273647(0x156))["hide"]();
    if (weightedSelection) {
      (selTotal = 0x0),
        selArr[_0x273647(0x1dc)](function (_0x12307c) {
          selTotal = selTotal + _0x12307c["selected"];
        }),
        $("[data-text=\x22total-weight\x22]")[_0x273647(0x1c7)](selTotal);
      if ($(_0x273647(0x1e1) + selTotal + "\x22]")[_0x273647(0x22a)] > 0x0)
        $(_0x273647(0x1e1) + selTotal + "\x22]")[_0x273647(0x17f)]();
      else
        $(_0x273647(0x19b) + selTotal + ")")
          ? $("[data-range]:contains(" + selTotal + ")")
              [_0x273647(0x149)](_0x273647(0x195))
              ["eq"](0x0)
              [_0x273647(0x1a9)]()
          : $("[data-selection=\x22other\x22]")[_0x273647(0x17f)]();
    } else {
      let _0x46089c = -0x1;
      $(_0x273647(0x195))[_0x273647(0x24c)](function (_0x2daf70) {
        const _0x40bdca = _0x273647;
        $($("[data-selection]")[_0x2daf70])
          [_0x40bdca(0x241)](_0x40bdca(0x11c))
          [_0x40bdca(0x1a5)](selString[_0x40bdca(0x13b)]()) &&
          (_0x46089c = _0x2daf70);
      }),
        _0x46089c > -0x1
          ? $($(_0x273647(0x195))[_0x46089c])[_0x273647(0x17f)]()
          : $("[data-selection=\x22other\x22]")["fadeIn"]();
    }
  }
}
function triggerInputAllData() {
  const _0x30fb33 = _0x4d9eeb;
  if (savedFilledInput && memory)
    savedFilledInput[_0x30fb33(0x1dc)]((_0x1d8449) => {
      const _0x114774 = _0x30fb33;
      var _0x3a5754 = $(
          _0x114774(0x153) +
            _0x1d8449[_0x114774(0x260)] +
            _0x114774(0x186) +
            _0x1d8449[_0x114774(0x117)] +
            _0x114774(0x1fc),
        ),
        _0x4acdfd = $(
          _0x114774(0x153) + _0x1d8449[_0x114774(0x260)] + _0x114774(0x1fc),
        ),
        _0x422dd8 = $(
          _0x114774(0x200) + _0x1d8449[_0x114774(0x260)] + _0x114774(0x1fc),
        ),
        _0x50fcac = $(_0x114774(0x1b2) + _0x1d8449[_0x114774(0x260)] + "\x22]"),
        _0x3fda71 = $(
          "input[type=\x22radio\x22][name=\x22" +
            _0x1d8449[_0x114774(0x260)] +
            _0x114774(0x186) +
            _0x1d8449[_0x114774(0x117)] +
            _0x114774(0x1fc),
        );
      if (_0x3a5754["attr"]("type") !== "file") {
        if (
          _0x3a5754[_0x114774(0x1fb)](_0x114774(0x21a)) === "radio" &&
          !_0x3a5754["parents"](_0x114774(0x23a))[_0x114774(0x241)](
            "radio-skip",
          )
        )
          _0x3a5754[_0x114774(0x12e)](),
            _0x3a5754[_0x114774(0x1a8)](".w-radio-input")[_0x114774(0x209)](
              _0x114774(0x266),
            ),
            _0x3a5754[_0x114774(0x1cb)](_0x114774(0x1c5));
        else
          _0x1d8449["value"] === "on"
            ? (_0x4acdfd[_0x114774(0x12e)](),
              _0x4acdfd["siblings"](_0x114774(0x20f))[_0x114774(0x209)](
                _0x114774(0x266),
              ),
              _0x4acdfd[_0x114774(0x1cb)](_0x114774(0x1c5)))
            : (_0x4acdfd["val"](_0x1d8449[_0x114774(0x117)]),
              _0x422dd8["val"](_0x1d8449["value"]),
              $(_0x114774(0x19c))
                [_0x114774(0x184)](
                  "option[value=\x22" + _0x1d8449["value"] + "\x22]",
                )
                [_0x114774(0x1a2)](_0x114774(0x1cf), !![]),
              _0x4acdfd[_0x114774(0x1cb)](_0x114774(0x1c5)),
              _0x4acdfd[_0x114774(0x1cb)](_0x114774(0x252)));
        const _0x44bdc1 = _0x3fda71[_0x114774(0x241)](_0x114774(0x1c6)),
          _0x3249a5 = _0x50fcac["data"]("click-addclass");
        _0x3fda71[_0x114774(0x149)]()[_0x114774(0x209)](_0x44bdc1),
          _0x50fcac[_0x114774(0x149)]()[_0x114774(0x209)](_0x3249a5);
      }
    });
  else
    _params &&
      (getParams(),
      searchQ[_0x30fb33(0x1dc)]((_0x4d877c) => {
        const _0x51d324 = _0x30fb33;
        if (
          $(
            _0x51d324(0x153) +
              _0x4d877c[_0x51d324(0x260)] +
              "\x22][value=\x22" +
              _0x4d877c[_0x51d324(0x117)] +
              _0x51d324(0x1fc),
          )["attr"]("type") !== "file"
        ) {
          if (
            $(
              _0x51d324(0x153) +
                _0x4d877c["key"] +
                _0x51d324(0x186) +
                _0x4d877c[_0x51d324(0x21c)] +
                _0x51d324(0x1fc),
            )[_0x51d324(0x1fb)](_0x51d324(0x21a)) === _0x51d324(0x25f)
          )
            $(
              _0x51d324(0x153) +
                _0x4d877c[_0x51d324(0x1c4)] +
                _0x51d324(0x186) +
                _0x4d877c[_0x51d324(0x21c)] +
                _0x51d324(0x1fc),
            )[_0x51d324(0x12e)](),
              $(
                _0x51d324(0x153) +
                  _0x4d877c[_0x51d324(0x1c4)] +
                  _0x51d324(0x186) +
                  _0x4d877c[_0x51d324(0x21c)] +
                  _0x51d324(0x1fc),
              )
                [_0x51d324(0x1a8)](_0x51d324(0x13e))
                ["addClass"](_0x51d324(0x266)),
              $(
                _0x51d324(0x153) +
                  _0x4d877c[_0x51d324(0x1c4)] +
                  _0x51d324(0x186) +
                  _0x4d877c["val"] +
                  "\x22]:not([data-prefill=\x22false\x22])",
              )[_0x51d324(0x1cb)](_0x51d324(0x1c5));
          else
            _0x4d877c["val"] === "on"
              ? ($(
                  _0x51d324(0x153) +
                    _0x4d877c[_0x51d324(0x1c4)] +
                    "\x22]:not([data-prefill=\x22false\x22])",
                )[_0x51d324(0x12e)](),
                $(_0x51d324(0x153) + _0x4d877c["key"] + _0x51d324(0x1fc))
                  ["siblings"](_0x51d324(0x20f))
                  [_0x51d324(0x209)]("w--redirected-checked"),
                $(_0x51d324(0x153) + _0x4d877c[_0x51d324(0x1c4)] + "\x22]")[
                  _0x51d324(0x1cb)
                ](_0x51d324(0x1c5)))
              : ($(
                  "input[name=\x22" +
                    _0x4d877c[_0x51d324(0x1c4)] +
                    _0x51d324(0x1fc),
                )[_0x51d324(0x21c)](_0x4d877c[_0x51d324(0x21c)]),
                $(
                  _0x51d324(0x200) +
                    _0x4d877c[_0x51d324(0x1c4)] +
                    _0x51d324(0x1fc),
                )["val"](_0x4d877c["val"]),
                $(
                  _0x51d324(0x236) +
                    _0x4d877c[_0x51d324(0x1c4)] +
                    _0x51d324(0x1fc),
                )
                  [_0x51d324(0x184)](
                    _0x51d324(0x127) + _0x4d877c[_0x51d324(0x21c)] + "\x22]",
                  )
                  [_0x51d324(0x1a2)](_0x51d324(0x1cf), !![]),
                $(
                  _0x51d324(0x153) +
                    _0x4d877c[_0x51d324(0x1c4)] +
                    _0x51d324(0x1fc),
                )[_0x51d324(0x1cb)]("input"),
                $(
                  _0x51d324(0x153) +
                    _0x4d877c[_0x51d324(0x1c4)] +
                    "\x22]:not([data-prefill=\x22false\x22])",
                )[_0x51d324(0x1cb)](_0x51d324(0x252)));
        }
      }));
}
$(_0x4d9eeb(0x218))["on"](_0x4d9eeb(0x12e), function () {
  (next = !![]), nextStep(), selectionQuiz();
}),
  $("[data-form=\x22back-btn\x22]")["on"]("click", function () {
    (next = ![]), (back = !![]), backStep();
  }),
  $(steps)
    [_0x4d9eeb(0x184)](_0x4d9eeb(0x25d))
    ["not"](_0x4d9eeb(0x144))
    ["on"](_0x4d9eeb(0x1c5), function (_0x4c5b39) {
      validation(), andLogic(), addClickClass();
    }),
  $(steps)
    [_0x4d9eeb(0x184)](_0x4d9eeb(0x152))
    ["on"]("click", function () {
      (skip = !![]), validation(), addClickClass();
    });
$("[data-clickable-all]")["data"](_0x4d9eeb(0x201))
  ? $("[data-form=\x22custom-progress-indicator\x22]")[_0x4d9eeb(0x1b3)](
      _0x4d9eeb(0x274),
    )
  : $("[data-form=\x22custom-progress-indicator\x22]")[_0x4d9eeb(0x209)](
      _0x4d9eeb(0x274),
    );
function clickableIndicator() {
  const _0x5ccf75 = _0x4d9eeb;
  $("[data-clickable]")[_0x5ccf75(0x241)](_0x5ccf75(0x231)) &&
    ($(_0x5ccf75(0x168))[_0x5ccf75(0x1b3)]("current"),
    $("[data-clickable]")[_0x5ccf75(0x241)](_0x5ccf75(0x201))
      ? ((x = $(this)[_0x5ccf75(0x256)]()), updateStep())
      : $(this)[_0x5ccf75(0x256)]() <= progress &&
        ((x = $(this)[_0x5ccf75(0x256)]()), updateStep())),
    $(_0x5ccf75(0x12a))[_0x5ccf75(0x1c7)](x + 0x1);
}
$(_0x4d9eeb(0x120))["on"](_0x4d9eeb(0x12e), clickableIndicator);
$(_0x4d9eeb(0x157))[_0x4d9eeb(0x241)](_0x4d9eeb(0x16d)) &&
  ($(_0x4d9eeb(0x10f))["each"](function () {
    const _0x4cc52b = _0x4d9eeb;
    $(this)[_0x4cc52b(0x251)](
      _0x4cc52b(0x1fe),
      $(this)[_0x4cc52b(0x241)](_0x4cc52b(0x1f9)),
    );
  }),
  $(_0x4d9eeb(0x224))["each"](function () {
    const _0xe355cb = _0x4d9eeb;
    $(this)["append"](_0xe355cb(0x16f), $(this)["data"](_0xe355cb(0x10a)));
  }));
function resetFormly() {
  const _0x47ec1a = _0x4d9eeb;
  $(_0x47ec1a(0x157))["trigger"](_0x47ec1a(0x215)),
    $("[data-form=\x22multistep\x22]")
      [_0x47ec1a(0x207)]()
      ["find"](_0x47ec1a(0x276))
      [_0x47ec1a(0x1c2)](),
    (x = 0x0),
    updateStep(),
    $("[data-form=\x22multistep\x22]")["show"](),
    $(_0x47ec1a(0x269))["text"](oldSubmitText),
    $(_0x47ec1a(0x269))[_0x47ec1a(0x21c)](oldSubmitText),
    $(_0x47ec1a(0x12a))[_0x47ec1a(0x1c7)](0x1),
    $("[data-form=\x22multistep\x22]")
      [_0x47ec1a(0x184)](_0x47ec1a(0x137))
      [_0x47ec1a(0x1a8)](_0x47ec1a(0x20f))
      [_0x47ec1a(0x1b3)]("w--redirected-checked");
}
$(document)["ajaxComplete"](function (_0x1fd694, _0x4743d2, _0x595b06) {
  const _0x4e2a7c = _0x4d9eeb;
  if (_0x595b06[_0x4e2a7c(0x221)]["includes"](_0x4e2a7c(0x228))) {
    const _0x26028c = _0x4743d2["status"] === 0xc8,
      _0x492dfc = _0x4e2a7c(0x268);
    redirectTo &&
      _0x26028c &&
      (newTab
        ? window[_0x4e2a7c(0x166)](redirectTo, _0x4e2a7c(0x261))
        : setTimeout(() => {
            location["href"] = redirectTo;
          }, redirectDelay)),
      _0x26028c &&
        successCard !== "" &&
        $("[data-success-card=\x22" + successCard + "\x22]")[
          _0x4e2a7c(0x17f)
        ](),
      _0x26028c &&
        formReset &&
        setTimeout(() => {
          resetFormly();
        }, resetDelay),
      !_0x26028c &&
        ($(_0x4e2a7c(0x269))[_0x4e2a7c(0x21c)](_0x4e2a7c(0x208)),
        $(_0x4e2a7c(0x269))[_0x4e2a7c(0x1c7)](_0x4e2a7c(0x208)));
  }
}),
  $(_0x4d9eeb(0x122))["on"](_0x4d9eeb(0x12e), function () {
    const _0x1108b7 = _0x4d9eeb;
    var _0x27f267 = $(this)
      [_0x1108b7(0x149)]()
      ["find"]("[data-input-field]")
      [_0x1108b7(0x241)](_0x1108b7(0x21b));
    setTimeout(function () {
      const _0x452f6f = _0x1108b7;
      $(_0x452f6f(0x153) + _0x27f267 + "\x22]")["focus"]();
    }, 0x64),
      (back = !![]),
      (x = $(this)["data"](_0x1108b7(0x1ba)) - 0x1),
      updateStep(),
      countCard
        ? ((curStep = x + 0x1),
          $(_0x1108b7(0x1d5))[_0x1108b7(0x1c7)](steps[_0x1108b7(0x22a)]))
        : $(steps[x])[_0x1108b7(0x241)](_0x1108b7(0x22d))
          ? (curStep = x + 0x0)
          : (curStep = x + 0x1),
      $(_0x1108b7(0x12a))[_0x1108b7(0x1c7)](curStep),
      (back = ![]);
  }),
  $("[data-btn=\x22reset\x22]")["on"](_0x4d9eeb(0x12e), function () {
    const _0x2b0ea5 = _0x4d9eeb;
    $(_0x2b0ea5(0x157))[_0x2b0ea5(0x1cb)]("reset");
    let _0x7a270a = $(this);
    $(this)[_0x2b0ea5(0x1c7)]("Please\x20wait..."),
      setTimeout(function () {
        const _0x464e92 = _0x2b0ea5;
        $(_0x7a270a)[_0x464e92(0x1c7)](oldResetText),
          $(_0x7a270a)[_0x464e92(0x207)](".w-form-done")[_0x464e92(0x1c2)](),
          (x = 0x0),
          updateStep(),
          $(_0x464e92(0x157))[_0x464e92(0x1a9)](),
          $(_0x464e92(0x269))[_0x464e92(0x1c7)](oldSubmitText),
          $(_0x464e92(0x269))[_0x464e92(0x21c)](oldSubmitText),
          $(_0x7a270a)[_0x464e92(0x21c)](oldSubmitText),
          $(_0x464e92(0x12a))[_0x464e92(0x1c7)](0x1),
          $(_0x464e92(0x157))
            [_0x464e92(0x184)]("input:checkbox")
            [_0x464e92(0x1a8)](".w-checkbox-input")
            [_0x464e92(0x1b3)](_0x464e92(0x266));
      }, resetDelay);
  }),
  $("body")["on"]("keypress", function (_0x4ad965) {
    const _0x1d9b40 = _0x4d9eeb;
    if (_0x4ad965[_0x1d9b40(0x259)] === 0xd) {
      _0x4ad965[_0x1d9b40(0x151)](), _0x4ad965["stopPropagation"]();
      if (
        $(steps[x])[_0x1d9b40(0x184)](_0x1d9b40(0x11e))["is"](_0x1d9b40(0x1f8))
      )
        $(steps[x])
          ["find"](_0x1d9b40(0x131))
          [_0x1d9b40(0x21c)](
            $(steps[x])
              [_0x1d9b40(0x184)](_0x1d9b40(0x131))
              [_0x1d9b40(0x21c)]() + "\x0a",
          );
      else
        $("[data-enter]")[_0x1d9b40(0x241)](_0x1d9b40(0x1d0)) &&
          fill &&
          totalSteps > curStep &&
          $("[data-form=\x22next-btn\x22]")[0x0][_0x1d9b40(0x12e)]();
    }
  }),
  $(_0x4d9eeb(0x121))[_0x4d9eeb(0x1db)](function (_0x4407ce) {
    const _0x4500af = _0x4d9eeb;
    (_0x4407ce["metaKey"] || _0x4407ce["ctrlKey"]) &&
      _0x4407ce["keyCode"] == 0xd &&
      (x >= steps["length"] - 0x1 && fill
        ? $(steps[x])[_0x4500af(0x184)](_0x4500af(0x222))["click"]()
        : (_0x4407ce[_0x4500af(0x151)](), _0x4407ce[_0x4500af(0x182)]()));
  }),
  $("[data-form=\x22multistep\x22]")
    ["find"](_0x4d9eeb(0x25d))
    ["on"]("change", function () {
      const _0x3b77b3 = _0x4d9eeb;
      (all_data = all_data[_0x3b77b3(0x20a)](
        (_0x2f4074) =>
          _0x2f4074[_0x3b77b3(0x20d)] !==
          $(this)[_0x3b77b3(0x1fb)](_0x3b77b3(0x123)),
      )),
        $(this)["attr"](_0x3b77b3(0x21a)) === _0x3b77b3(0x255)
          ? $(this)["is"](":checked")
            ? all_data[_0x3b77b3(0x17e)]({
                field: $(this)[_0x3b77b3(0x1fb)]("name"),
                value: $(this)
                  ["siblings"](_0x3b77b3(0x253))
                  [_0x3b77b3(0x1c7)](),
              })
            : $(
                _0x3b77b3(0x132) +
                  $(this)[_0x3b77b3(0x1fb)](_0x3b77b3(0x123)) +
                  "\x22]",
              )[_0x3b77b3(0x1c2)]()
          : (all_data[_0x3b77b3(0x17e)]({
              field: $(this)[_0x3b77b3(0x1fb)](_0x3b77b3(0x123)),
              value: $(this)[_0x3b77b3(0x21c)](),
            }),
            $(this)[_0x3b77b3(0x21c)]() !== "" &&
              resetInputErrorMessage(
                $(this)[_0x3b77b3(0x1fb)](_0x3b77b3(0x123)),
              )),
        all_data[_0x3b77b3(0x1dc)](function (_0xe737ce) {
          const _0x14c823 = _0x3b77b3;
          $("[data-input-field=\x22" + _0xe737ce[_0x14c823(0x20d)] + "\x22]")[
            _0x14c823(0x1a9)
          ](),
            $(_0x14c823(0x132) + _0xe737ce[_0x14c823(0x20d)] + "\x22]")[
              _0x14c823(0x1c7)
            ](_0xe737ce[_0x14c823(0x117)]);
        });
    }),
  $(_0x4d9eeb(0x157))
    [_0x4d9eeb(0x184)](_0x4d9eeb(0x11e))
    ["on"](_0x4d9eeb(0x252), function () {
      const _0x3e12a0 = _0x4d9eeb;
      $(this)["val"]() !== "" &&
        resetInputErrorMessage($(this)[_0x3e12a0(0x1fb)]("name")),
        (all_data = all_data["filter"](
          (_0x368b2e) =>
            _0x368b2e[_0x3e12a0(0x20d)] !== $(this)["attr"](_0x3e12a0(0x123)),
        )),
        all_data[_0x3e12a0(0x17e)]({
          field: $(this)[_0x3e12a0(0x1fb)](_0x3e12a0(0x123)),
          value: $(this)[_0x3e12a0(0x21c)](),
        }),
        all_data[_0x3e12a0(0x1dc)](function (_0x26c9b7) {
          const _0x3b9eff = _0x3e12a0;
          $(_0x3b9eff(0x132) + _0x26c9b7["field"] + "\x22]")[
            _0x3b9eff(0x1a9)
          ](),
            $(_0x3b9eff(0x132) + _0x26c9b7[_0x3b9eff(0x20d)] + "\x22]")["text"](
              _0x26c9b7[_0x3b9eff(0x117)],
            );
        });
    }),
  $(_0x4d9eeb(0x157))
    [_0x4d9eeb(0x184)](_0x4d9eeb(0x1e2))
    ["on"](_0x4d9eeb(0x252), function () {
      const _0x55cc0c = _0x4d9eeb;
      $(this)[_0x55cc0c(0x21c)]() !== "" &&
        resetInputErrorMessage($(this)[_0x55cc0c(0x1fb)](_0x55cc0c(0x123)));
      var _0x26f498 = $(this)[_0x55cc0c(0x241)](_0x55cc0c(0x24b));
      (all_data = all_data[_0x55cc0c(0x20a)](
        (_0x39dcc5) =>
          _0x39dcc5[_0x55cc0c(0x20d)] !== $(this)[_0x55cc0c(0x1fb)]("name"),
      )),
        all_data[_0x55cc0c(0x17e)]({
          field: $(this)["attr"]("name"),
          value: _0x26f498
            ? $(this)[_0x55cc0c(0x184)](_0x55cc0c(0x15d))[_0x55cc0c(0x1c7)]()
            : $(this)[_0x55cc0c(0x21c)](),
        }),
        all_data[_0x55cc0c(0x1dc)](function (_0x57f37a) {
          const _0x1b4619 = _0x55cc0c;
          $("[data-input-field=\x22" + _0x57f37a[_0x1b4619(0x20d)] + "\x22]")[
            _0x1b4619(0x1a9)
          ](),
            $(_0x1b4619(0x132) + _0x57f37a[_0x1b4619(0x20d)] + "\x22]")[
              _0x1b4619(0x1c7)
            ](_0x57f37a[_0x1b4619(0x117)]);
        });
    }),
  updateStep(),
  triggerInputAllData(),
  $(_0x4d9eeb(0x18f))[_0x4d9eeb(0x24c)](function () {
    const _0x3e41d6 = _0x4d9eeb,
      _0x181776 = $(this)[_0x3e41d6(0x184)](_0x3e41d6(0x226)),
      _0x1df7ae = [];
    _0x181776[_0x3e41d6(0x24c)](function () {
      const _0x69c282 = _0x3e41d6;
      _0x1df7ae[_0x69c282(0x17e)](
        $(this)[_0x69c282(0x1c7)]()[_0x69c282(0x136)](),
      );
    });
    const _0x35231b = $(this)["siblings"](_0x3e41d6(0x119));
    $[_0x3e41d6(0x24c)](_0x1df7ae, function (_0x1a7ad9, _0x5d4f74) {
      const _0xc1a42e = _0x3e41d6,
        _0x11f81e = $(_0xc1a42e(0x214))
          [_0xc1a42e(0x21c)](_0x5d4f74)
          [_0xc1a42e(0x1c7)](_0x5d4f74);
      _0x35231b[_0xc1a42e(0x251)](_0x11f81e);
    });
  });
function cloneRemove() {
  const _0x23adc1 = _0x4d9eeb;
  $("[data-clone-wrapper]")[_0x23adc1(0x24c)](function () {
    const _0x48472d = _0x23adc1;
    $(this)["find"]("[data-clone]")["length"] < 0x2
      ? $(this)[_0x48472d(0x184)](_0x48472d(0x175))[_0x48472d(0x1c2)]()
      : $(this)
          [_0x48472d(0x184)]("[data-form=\x22remove-clone\x22]")
          [_0x48472d(0x1a9)]();
  });
}
function cloneRemoveInput() {
  const _0x4dfec8 = _0x4d9eeb;
  $(_0x4dfec8(0x1da))[_0x4dfec8(0x24c)](function () {
    const _0x11371b = _0x4dfec8;
    $(this)[_0x11371b(0x184)]("[data-clone-input]")[_0x11371b(0x22a)] < 0x2
      ? $(this)[_0x11371b(0x184)](_0x11371b(0x1dd))[_0x11371b(0x1c2)]()
      : $(this)["find"](_0x11371b(0x1dd))[_0x11371b(0x1a9)]();
  });
}
$(_0x4d9eeb(0x175))["on"]("click", function () {
  const _0x8ad6e = _0x4d9eeb,
    _0x371d49 =
      $(this)[_0x8ad6e(0x207)]("[data-clone]")[_0x8ad6e(0x22a)] > 0x0
        ? $(this)[_0x8ad6e(0x207)]("[data-clone]")[_0x8ad6e(0x256)]()
        : $(this)["parents"](_0x8ad6e(0x25b))[_0x8ad6e(0x256)](),
    _0x57d7cc =
      $(this)[_0x8ad6e(0x207)](_0x8ad6e(0x108))[_0x8ad6e(0x22a)] > 0x0
        ? $(this)
            [_0x8ad6e(0x207)]("[data-clone]")
            [_0x8ad6e(0x241)](_0x8ad6e(0x1ab))
        : $(this)[_0x8ad6e(0x207)](_0x8ad6e(0x25b))[_0x8ad6e(0x241)]("display");
  $(_0x8ad6e(0x1aa) + _0x57d7cc + "\x22]")
    ["eq"](_0x371d49)
    [_0x8ad6e(0x232)](),
    $("[data-display=\x22" + _0x57d7cc + "\x22]")
      ["eq"](_0x371d49)
      ["remove"](),
    cloneRemove(),
    validation();
}),
  $(_0x4d9eeb(0x1dd))["on"]("click", function () {
    const _0x45a8f6 = _0x4d9eeb;
    let _0x3a8b4f = $(this)["siblings"]()[_0x45a8f6(0x1fb)](_0x45a8f6(0x123));
    $(this)["parent"](_0x45a8f6(0x1a0))[_0x45a8f6(0x232)](),
      $(_0x45a8f6(0x132) + _0x3a8b4f + "\x22]")
        [_0x45a8f6(0x149)](_0x45a8f6(0x278))
        [_0x45a8f6(0x232)](),
      cloneRemove(),
      validation();
  }),
  $(_0x4d9eeb(0x187))["on"](_0x4d9eeb(0x12e), function () {
    const _0x48ba36 = _0x4d9eeb;
    let _0x1bdf52 = $(this)["data"]("add-new");
    var _0x40278d = $(_0x48ba36(0x1aa) + _0x1bdf52 + "\x22]")
        ["eq"](0x0)
        [_0x48ba36(0x1ab)](!![]),
      _0x27b150 = $(_0x48ba36(0x20e) + _0x1bdf52 + "\x22]")
        ["eq"](0x0)
        [_0x48ba36(0x1ab)](!![]);
    let _0x4049e0 = "";
    $(this)[_0x48ba36(0x184)](_0x48ba36(0x175))[_0x48ba36(0x1a9)](),
      cloneRemove(),
      _0x40278d[_0x48ba36(0x184)]("[data-clone-input]")
        [_0x48ba36(0x184)]("input")
        [_0x48ba36(0x21c)](""),
      _0x40278d["find"](_0x48ba36(0x1a0))
        ["find"]("select")
        [_0x48ba36(0x21c)](""),
      _0x40278d[_0x48ba36(0x184)]("[data-clone-input]")
        ["find"]("textarea")
        [_0x48ba36(0x21c)](""),
      _0x40278d[_0x48ba36(0x184)]("[data-clone-input]")
        [_0x48ba36(0x1b1)](":first")
        [_0x48ba36(0x232)](),
      _0x27b150[_0x48ba36(0x184)]("[data-display-input]")
        [_0x48ba36(0x1b1)](":first")
        [_0x48ba36(0x232)](),
      _0x40278d[_0x48ba36(0x184)](_0x48ba36(0x1c5))["each"](function () {
        const _0xa3c59b = _0x48ba36;
        if (
          $(this)[_0xa3c59b(0x155)]("[data-clone-input]")[_0xa3c59b(0x22a)] >
          0x0
        ) {
          let _0xd04996 = 0x0;
          const _0x45e0a1 = $(this)
            [_0xa3c59b(0x155)]("[data-clone-input]")
            [_0xa3c59b(0x241)](_0xa3c59b(0x130));
          $(_0xa3c59b(0x235) + _0x45e0a1 + _0xa3c59b(0x116))[_0xa3c59b(0x24c)](
            function () {
              const _0x5be0d5 = _0xa3c59b,
                _0x3785e1 = $(this)["attr"](_0x5be0d5(0x123));
              if (_0x3785e1 && _0x3785e1[_0x5be0d5(0x143)](_0x5be0d5(0x194))) {
                const _0x1054a2 = parseInt(
                  _0x3785e1[_0x5be0d5(0x245)]("-")[0x1],
                );
                !isNaN(_0x1054a2) &&
                  _0x1054a2 > _0xd04996 &&
                  (_0xd04996 = _0x1054a2);
              }
            },
          ),
            _0xd04996++,
            (_0x4049e0 = this[_0xa3c59b(0x123)] + "-" + _0xd04996);
        } else
          _0x4049e0 =
            this[_0xa3c59b(0x123)] +
            "-" +
            (parseInt(
              $(_0xa3c59b(0x1aa) + _0x1bdf52 + "\x22]")
                ["last"]()
                [_0xa3c59b(0x256)](),
            ) +
              0x1);
        $(this)[_0xa3c59b(0x21c)](""),
          $(this)[_0xa3c59b(0x1fb)](_0xa3c59b(0x123), _0x4049e0),
          $(this)[_0xa3c59b(0x1fb)](_0xa3c59b(0x16b), _0x4049e0);
      }),
      _0x40278d["find"](_0x48ba36(0x11e))[_0x48ba36(0x24c)](function () {
        const _0xc93349 = _0x48ba36;
        if ($(this)["closest"](_0xc93349(0x1a0))["length"] > 0x0) {
          let _0x342675 = 0x0;
          const _0x37ce58 = $(this)
            [_0xc93349(0x155)]("[data-clone-input]")
            [_0xc93349(0x241)](_0xc93349(0x130));
          $(_0xc93349(0x235) + _0x37ce58 + _0xc93349(0x15e))["each"](
            function () {
              const _0x288524 = _0xc93349,
                _0xbfcdbc = $(this)["attr"](_0x288524(0x123));
              if (_0xbfcdbc && _0xbfcdbc["startsWith"](_0x288524(0x194))) {
                const _0x48c66c = parseInt(
                  _0xbfcdbc[_0x288524(0x245)]("-")[0x1],
                );
                !isNaN(_0x48c66c) &&
                  _0x48c66c > _0x342675 &&
                  (_0x342675 = _0x48c66c);
              }
            },
          ),
            _0x342675++,
            (_0x4049e0 = this["name"] + "-" + _0x342675);
        } else
          _0x4049e0 =
            this[_0xc93349(0x123)] +
            "-" +
            (parseInt(
              $(_0xc93349(0x1aa) + _0x1bdf52 + "\x22]")
                [_0xc93349(0x188)]()
                ["index"](),
            ) +
              0x1);
        $(this)[_0xc93349(0x21c)](""),
          $(this)[_0xc93349(0x1fb)]("name", _0x4049e0),
          $(this)["attr"](_0xc93349(0x16b), _0x4049e0);
      }),
      _0x40278d[_0x48ba36(0x184)](_0x48ba36(0x1e2))["each"](function () {
        const _0x13b92c = _0x48ba36;
        if ($(this)["closest"]("[data-clone-input]")[_0x13b92c(0x22a)] > 0x0) {
          let _0x36ac82 = 0x0;
          const _0x59f5e8 = $(this)
            ["closest"](_0x13b92c(0x1a0))
            [_0x13b92c(0x241)](_0x13b92c(0x130));
          $(_0x13b92c(0x235) + _0x59f5e8 + _0x13b92c(0x11a))[_0x13b92c(0x24c)](
            function () {
              const _0x5f761c = _0x13b92c,
                _0x447fe7 = $(this)[_0x5f761c(0x1fb)](_0x5f761c(0x123));
              if (_0x447fe7 && _0x447fe7[_0x5f761c(0x143)](_0x5f761c(0x194))) {
                const _0x4cc5b9 = parseInt(
                  _0x447fe7[_0x5f761c(0x245)]("-")[0x1],
                );
                !isNaN(_0x4cc5b9) &&
                  _0x4cc5b9 > _0x36ac82 &&
                  (_0x36ac82 = _0x4cc5b9);
              }
            },
          ),
            _0x36ac82++,
            (_0x4049e0 = this["name"] + "-" + _0x36ac82);
        } else
          _0x4049e0 =
            this[_0x13b92c(0x123)] +
            "-" +
            (parseInt(
              $("[data-clone=\x22" + _0x1bdf52 + "\x22]")
                [_0x13b92c(0x188)]()
                [_0x13b92c(0x256)](),
            ) +
              0x1);
        $(this)["val"](""),
          $(this)[_0x13b92c(0x1fb)](_0x13b92c(0x123), _0x4049e0),
          $(this)[_0x13b92c(0x1fb)](_0x13b92c(0x16b), _0x4049e0);
      }),
      _0x27b150[_0x48ba36(0x184)](_0x48ba36(0x273))[_0x48ba36(0x24c)](
        function () {
          const _0x3581c1 = _0x48ba36;
          if ($(this)["data"](_0x3581c1(0x21b))) {
            let _0x85ff95 = 0x0;
            const _0x40cf9d = $(this)
              [_0x3581c1(0x241)](_0x3581c1(0x21b))
              ["split"]("-")[0x0];
            $(
              _0x3581c1(0x20e) +
                _0x1bdf52 +
                _0x3581c1(0x216) +
                _0x40cf9d +
                "\x22]",
            )["each"](function () {
              const _0x55dba3 = _0x3581c1,
                _0x5a7511 = $(this)[_0x55dba3(0x1fb)](_0x55dba3(0x26f)),
                _0x36ed7a = parseInt(_0x5a7511["split"]("-")[0x1]);
              !isNaN(_0x36ed7a) &&
                _0x36ed7a > _0x85ff95 &&
                (_0x85ff95 = _0x36ed7a);
            }),
              _0x85ff95++;
            const _0x59a631 = _0x40cf9d + "-" + _0x85ff95;
            $(this)[_0x3581c1(0x1fb)](_0x3581c1(0x26f), _0x59a631);
          }
        },
      ),
      $(_0x48ba36(0x15f) + _0x1bdf52 + "\x22]")[_0x48ba36(0x251)](_0x40278d),
      $(_0x48ba36(0x158) + _0x1bdf52 + "\x22]")[_0x48ba36(0x251)](_0x27b150),
      $(_0x48ba36(0x265) + _0x1bdf52 + "\x22]")[_0x48ba36(0x24c)](function () {
        const _0x5c89b9 = _0x48ba36;
        $(this)["text"](
          $(this)
            ["parents"](_0x5c89b9(0x1aa) + _0x1bdf52 + "\x22]")
            [_0x5c89b9(0x256)]() + 0x1,
        );
      }),
      $(_0x48ba36(0x264) + _0x1bdf52 + "\x22]")[_0x48ba36(0x24c)](function () {
        const _0x4c6246 = _0x48ba36;
        $(this)[_0x4c6246(0x1c7)](
          $(this)
            [_0x4c6246(0x207)](_0x4c6246(0x20e) + _0x1bdf52 + "\x22]")
            [_0x4c6246(0x256)]() + 0x1,
        );
      }),
      validation();
  }),
  $(_0x4d9eeb(0x203))["on"](_0x4d9eeb(0x12e), function () {
    const _0x4df893 = _0x4d9eeb,
      _0x377165 = $(this)[_0x4df893(0x207)](_0x4df893(0x108))["index"]();
    let _0x44c389 = $(this)[_0x4df893(0x241)](_0x4df893(0x13a));
    var _0x46f329 = $(_0x4df893(0x235) + _0x44c389 + "\x22]")
        ["eq"](0x0)
        [_0x4df893(0x1ab)](!![]),
      _0x625090 = $("[data-display-input=\x22" + _0x44c389 + "\x22]")
        ["eq"](0x0)
        [_0x4df893(0x1ab)](!![]);
    $(this)[_0x4df893(0x184)](_0x4df893(0x1dd))[_0x4df893(0x1a9)](),
      cloneRemoveInput();
    let _0x36b52e = 0x0;
    $(_0x4df893(0x235) + _0x44c389 + _0x4df893(0x116))[_0x4df893(0x24c)](
      function () {
        const _0xb0c477 = _0x4df893,
          _0x5bb03b = $(this)[_0xb0c477(0x1fb)](_0xb0c477(0x123));
        if (_0x5bb03b) {
          const _0xdcc32e = parseInt(_0x5bb03b[_0xb0c477(0x245)]("-")[0x1]);
          !isNaN(_0xdcc32e) && _0xdcc32e > _0x36b52e && (_0x36b52e = _0xdcc32e);
        }
      },
    ),
      $(_0x4df893(0x235) + _0x44c389 + "\x22]\x20select")[_0x4df893(0x24c)](
        function () {
          const _0x9b6e5f = _0x4df893,
            _0x142bee = $(this)[_0x9b6e5f(0x1fb)](_0x9b6e5f(0x123));
          if (_0x142bee) {
            const _0x36bdf4 = parseInt(_0x142bee[_0x9b6e5f(0x245)]("-")[0x1]);
            !isNaN(_0x36bdf4) &&
              _0x36bdf4 > _0x36b52e &&
              (_0x36b52e = _0x36bdf4);
          }
        },
      ),
      $(_0x4df893(0x235) + _0x44c389 + _0x4df893(0x15e))[_0x4df893(0x24c)](
        function () {
          const _0x534225 = _0x4df893,
            _0x3fe0e9 = $(this)[_0x534225(0x1fb)](_0x534225(0x123));
          if (_0x3fe0e9) {
            const _0x4da2da = parseInt(_0x3fe0e9[_0x534225(0x245)]("-")[0x1]);
            !isNaN(_0x4da2da) &&
              _0x4da2da > _0x36b52e &&
              (_0x36b52e = _0x4da2da);
          }
        },
      ),
      _0x36b52e++,
      _0x46f329["find"]("input")[_0x4df893(0x24c)](function () {
        const _0xb7d11d = _0x4df893,
          _0x33247f = $(this)[_0xb7d11d(0x1fb)](_0xb7d11d(0x123));
        let _0x53d34d = _0x33247f + "-" + _0x36b52e;
        $(this)[_0xb7d11d(0x21c)](""),
          $(this)[_0xb7d11d(0x1fb)]("name", _0x53d34d),
          $(this)[_0xb7d11d(0x1fb)](_0xb7d11d(0x16b), _0x53d34d);
      }),
      _0x46f329["find"]("select")[_0x4df893(0x24c)](function () {
        const _0x3ce3fb = _0x4df893,
          _0x3d0982 = $(this)["attr"](_0x3ce3fb(0x123));
        let _0x2dba3a = _0x3d0982 + "-" + _0x36b52e;
        $(this)[_0x3ce3fb(0x21c)](""),
          $(this)[_0x3ce3fb(0x1fb)](_0x3ce3fb(0x123), _0x2dba3a),
          $(this)[_0x3ce3fb(0x1fb)](_0x3ce3fb(0x16b), _0x2dba3a);
      }),
      _0x46f329[_0x4df893(0x184)]("textarea")[_0x4df893(0x24c)](function () {
        const _0x172758 = _0x4df893,
          _0x4b6d1b = $(this)[_0x172758(0x1fb)](_0x172758(0x123));
        let _0x6ebdde = _0x4b6d1b + "-" + _0x36b52e;
        $(this)[_0x172758(0x21c)](""),
          $(this)[_0x172758(0x1fb)](_0x172758(0x123), _0x6ebdde),
          $(this)[_0x172758(0x1fb)](_0x172758(0x16b), _0x6ebdde);
      }),
      _0x625090[_0x4df893(0x184)](_0x4df893(0x273))[_0x4df893(0x24c)](
        function () {
          const _0x43dc19 = _0x4df893;
          $(this)[_0x43dc19(0x1fb)](
            _0x43dc19(0x26f),
            _0x43dc19(0x194) + _0x36b52e,
          );
        },
      ),
      $(this)
        ["siblings"](_0x4df893(0x237) + _0x44c389 + "\x22]")
        ["append"](_0x46f329),
      $(_0x4df893(0x25b))
        ["eq"](_0x377165)
        [_0x4df893(0x184)](_0x4df893(0x1d2) + _0x44c389 + "\x22]")
        [_0x4df893(0x251)](_0x625090),
      $("[data-input-index=\x22" + _0x44c389 + "\x22]")["each"](function () {
        const _0x3e8c9f = _0x4df893;
        $(this)[_0x3e8c9f(0x1c7)](
          $(this)
            [_0x3e8c9f(0x207)](_0x3e8c9f(0x235) + _0x44c389 + "\x22]")
            [_0x3e8c9f(0x256)]() + 0x1,
        );
      }),
      $(_0x4df893(0x1fa) + _0x44c389 + "\x22]")[_0x4df893(0x24c)](function () {
        const _0x5a342f = _0x4df893;
        $(this)[_0x5a342f(0x1c7)](
          $(this)
            [_0x5a342f(0x207)](_0x5a342f(0x173) + _0x44c389 + "\x22]")
            ["index"]() + 0x1,
        );
      }),
      validation();
  }),
  $(_0x4d9eeb(0x244))["on"](_0x4d9eeb(0x12e), function () {
    const _0x30eea8 = _0x4d9eeb,
      _0x45bc7f = $(this)[_0x30eea8(0x241)](_0x30eea8(0x1d4));
    $(_0x30eea8(0x153) + _0x45bc7f + "\x22]")[_0x30eea8(0x21c)](""),
      validation();
  });
function andLogic() {
  const _0x348f39 = _0x4d9eeb;
  conditionalResult &&
    (steps["eq"](x)[_0x348f39(0x184)](_0x348f39(0x150))[_0x348f39(0x1c2)](),
    steps["eq"](x)
      [_0x348f39(0x184)](_0x348f39(0x150))
      [_0x348f39(0x24c)](function () {
        const _0xd344db = _0x348f39;
        function _0x4ae927(_0x4eb1ee) {
          const _0x4af483 = _0x4c4b,
            _0x50abef = _0x4eb1ee[_0x4af483(0x245)]("&"),
            _0x171f1f = [];
          return (
            _0x50abef["forEach"]((_0x5a67a4) => {
              const _0xe0de1b = _0x4af483,
                [_0x3533b7, _0x6dd874] = _0x5a67a4[_0xe0de1b(0x245)]("=");
              _0x171f1f["push"]({ field: _0x3533b7, value: _0x6dd874 });
            }),
            _0x171f1f
          );
        }
        const _0x330f58 = $(this)[_0xd344db(0x1fb)](_0xd344db(0x1b8)),
          _0x498886 = _0x4ae927(_0x330f58);
        function _0x49f645(_0x3e44c1, _0x43de3a) {
          const _0x5955e3 = _0xd344db;
          return _0x43de3a[_0x5955e3(0x1d6)]((_0x30852a, _0x4dd0c0) => {
            const _0x3c5c69 = _0x5955e3;
            if (
              _0x3e44c1[0x0] &&
              _0x30852a[_0x3c5c69(0x20d)] === _0x3e44c1[0x0][_0x3c5c69(0x20d)]
            )
              return _0x3e44c1[_0x3c5c69(0x1e4)](
                (_0xdf38c5, _0x28c763) =>
                  _0x43de3a[_0x4dd0c0 + _0x28c763] &&
                  _0x43de3a[_0x4dd0c0 + _0x28c763][_0x3c5c69(0x20d)] ===
                    _0xdf38c5[_0x3c5c69(0x20d)] &&
                  _0x43de3a[_0x4dd0c0 + _0x28c763][_0x3c5c69(0x117)] ===
                    _0xdf38c5[_0x3c5c69(0x117)],
              );
            return ![];
          });
        }
        const _0x463fbc = _0x49f645(_0x498886, all_data);
        _0x463fbc ? $(this)[_0xd344db(0x1a9)]() : $(this)["hide"]();
      }));
}
$(_0x4d9eeb(0x15a))[_0x4d9eeb(0x209)]("hide"),
  $(_0x4d9eeb(0x24a))["on"]("input", function () {
    const _0x426f68 = _0x4d9eeb,
      _0x24ea3d = $(this)["data"](_0x426f68(0x212)),
      _0x2a8c17 = $(this)[_0x426f68(0x21c)](),
      _0x4da858 = $("[data-progressive-target=\x22" + _0x24ea3d + "\x22]")[
        _0x426f68(0x241)
      ](_0x426f68(0x154));
    let _0x16a8ee = $(
        _0x426f68(0x26b) + _0x24ea3d + _0x426f68(0x109) + _0x2a8c17 + "\x22]",
      ),
      _0x47dd84 = $(_0x426f68(0x26b) + _0x24ea3d + _0x426f68(0x205));
    $(_0x426f68(0x26b) + _0x24ea3d + "\x22]")[_0x426f68(0x209)]("hide"),
      $("[data-progressive-target=\x22" + _0x24ea3d + "\x22]")[
        _0x426f68(0x1b3)
      ](_0x426f68(0x1a9));
    _0x2a8c17 !== "" &&
      (_0x4da858 === "*" && _0x2a8c17 !== ""
        ? (_0x47dd84["removeClass"]("hide"),
          _0x47dd84[_0x426f68(0x209)](_0x426f68(0x1a9)))
        : (_0x16a8ee[_0x426f68(0x1b3)](_0x426f68(0x1c2)),
          _0x16a8ee[_0x426f68(0x209)](_0x426f68(0x1a9))));
    function _0x380c7b(_0x51ba66) {
      const _0x3cbc21 = _0x426f68;
      _0x51ba66 &&
        $(_0x3cbc21(0x113) + _0x51ba66 + "\x22]")[_0x3cbc21(0x21c)]() !== "" &&
        $(_0x3cbc21(0x113) + _0x51ba66 + "\x22]")[_0x3cbc21(0x1cb)](
          _0x3cbc21(0x1c5),
        );
    }
    let _0x44bf7c = $(_0x426f68(0x26b) + _0x24ea3d + "\x22]")
      [_0x426f68(0x184)](_0x426f68(0x24a))
      [_0x426f68(0x241)](_0x426f68(0x212));
    _0x380c7b(_0x44bf7c),
      $("[data-progressive-input]:not(:visible)")[_0x426f68(0x24c)](
        function () {
          const _0x58617e = _0x426f68,
            _0x435150 = $(this)[_0x58617e(0x241)](_0x58617e(0x212));
          $("[data-progressive-target=\x22" + _0x435150 + "\x22]")[
            "removeClass"
          ](_0x58617e(0x1a9)),
            $(_0x58617e(0x26b) + _0x435150 + "\x22]")["addClass"]("hide");
        },
      );
  });
function addClickClass() {
  const _0xb89486 = _0x4d9eeb,
    _0x13e8ec = $(this)[_0xb89486(0x241)](_0xb89486(0x1c6)),
    _0x34f2d2 = $(this)[_0xb89486(0x1fb)](_0xb89486(0x21a)),
    _0xef6305 = $(this)[_0xb89486(0x1fb)](_0xb89486(0x123));
  $(_0xb89486(0x153) + _0xef6305 + "\x22]")
    ["parent"]()
    [_0xb89486(0x1b3)](_0x13e8ec),
    $(this)["is"](_0xb89486(0x1bb)) &&
      $(this)[_0xb89486(0x149)]()[_0xb89486(0x209)](_0x13e8ec);
}
$(_0x4d9eeb(0x262))["on"](_0x4d9eeb(0x252), addClickClass),
  scrollTop(),
  cloneRemove(),
  cloneRemoveInput();
const formlyUrlParams = new URLSearchParams(window["location"]["search"]),
  formlySupportParam = formlyUrlParams[_0x4d9eeb(0x249)]("formly-support"),
  showButton = formlySupportParam === _0x4d9eeb(0x250),
  passIcon =
    "<span\x20class=\x22f-icon-embed-xxsmall\x20w-embed\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010s10-4.48\x2010-10S17.52\x202\x2012\x202m-2\x2015l-5-5l1.41-1.41L10\x2014.17l7.59-7.59L19\x208z\x22></path></svg></span>",
  failIcon =
    "<span\x20class=\x22f-icon-embed-xxsmall-2\x20w-embed\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--carbon\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2032\x2032\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M16\x202C8.2\x202\x202\x208.2\x202\x2016s6.2\x2014\x2014\x2014s14-6.2\x2014-14S23.8\x202\x2016\x202m5.4\x2021L16\x2017.6L10.6\x2023L9\x2021.4l5.4-5.4L9\x2010.6L10.6\x209l5.4\x205.4L21.4\x209l1.6\x201.6l-5.4\x205.4l5.4\x205.4z\x22></path></svg></span>";
let isScriptLoaded = !![],
  scriptLocation = "head",
  isMultistepAttributePresent = !![],
  isMultistepOnFormElement = !![],
  areButtonsPresent = !![],
  isNextBtnOnSubmit = ![],
  isSubmitBtnOnSubmit = !![],
  isBackBtnOnSubmit = ![],
  formType = logicExtra ? _0x4d9eeb(0x23e) : "Basic\x20(No\x20Formly\x20Logic)",
  resultStatus = _0x4d9eeb(0x198),
  scriptSrcAdded = "";
function isElementPresent(_0xb17fd2, _0x109cf0) {
  const _0x5c1308 = _0x4d9eeb;
  return (
    document[_0x5c1308(0x26e)](
      "[" + _0x109cf0 + "=\x22" + _0xb17fd2 + "\x22]",
    ) !== null
  );
}
isMultistepAttributePresent = isElementPresent(
  _0x4d9eeb(0x142),
  _0x4d9eeb(0x1d7),
);
const multistepForm = document[_0x4d9eeb(0x26e)](_0x4d9eeb(0x254)),
  formStepLength = multistepForm[_0x4d9eeb(0x1c0)](_0x4d9eeb(0x133))[
    _0x4d9eeb(0x22a)
  ];
isMultistepOnFormElement = multistepForm !== null;
const multistepContainer = document[_0x4d9eeb(0x26e)](_0x4d9eeb(0x157)),
  nextBtn = multistepContainer[_0x4d9eeb(0x26e)](
    "[data-form=\x22next-btn\x22]",
  ),
  backBtn = multistepContainer[_0x4d9eeb(0x26e)](_0x4d9eeb(0x1eb)),
  submitBtn = multistepContainer[_0x4d9eeb(0x26e)](_0x4d9eeb(0x269));
(areButtonsPresent =
  nextBtn !== null && backBtn !== null && submitBtn !== null),
  (isNextBtnOnSubmit =
    nextBtn && nextBtn["tagName"]["toLowerCase"]() === "input"),
  (isSubmitBtnOnSubmit =
    submitBtn &&
    submitBtn[_0x4d9eeb(0x12b)][_0x4d9eeb(0x229)]() === _0x4d9eeb(0x1c5) &&
    submitBtn[_0x4d9eeb(0x21a)][_0x4d9eeb(0x229)]() === _0x4d9eeb(0x1cd)),
  (isBackBtnOnSubmit =
    backBtn && backBtn[_0x4d9eeb(0x12b)]["toLowerCase"]() === _0x4d9eeb(0x1c5));
const checkPowerup = (_0x5d822a) =>
    document["querySelector"](_0x5d822a) !== null,
  progressBarAttr = checkPowerup(_0x4d9eeb(0x18c)),
  progressIndicatorAttr = checkPowerup(
    "[data-form=\x22progress-indicator\x22]",
  ),
  customProgressAttr = checkPowerup(_0x4d9eeb(0x168)),
  cardDivAttr = checkPowerup(_0x4d9eeb(0x125)),
  currentStepAttr = checkPowerup("[data-text=\x22current-step\x22]"),
  totalStepAttr = checkPowerup(_0x4d9eeb(0x1d5)),
  enterAttr = checkPowerup(_0x4d9eeb(0x1f3)),
  submitAttr = checkPowerup(_0x4d9eeb(0x167)),
  radioSkipAttr = checkPowerup("[data-radio-skip=\x22true\x22]"),
  customCheckboxAttr = checkPowerup(_0x4d9eeb(0x180)),
  recapatchaAttr = checkPowerup(_0x4d9eeb(0x24e));
(!isScriptLoaded ||
  scriptLocation !== "head" ||
  !isMultistepAttributePresent ||
  !isMultistepOnFormElement ||
  !areButtonsPresent ||
  isNextBtnOnSubmit ||
  !isSubmitBtnOnSubmit ||
  isBackBtnOnSubmit) &&
  (resultStatus = _0x4d9eeb(0x1e7));
function isScriptUrlMatch(_0xf95e07, _0x80080b) {
  const _0x399142 = _0x4d9eeb;
  for (
    var _0x185cba = 0x0;
    _0x185cba < _0x80080b[_0x399142(0x22a)];
    _0x185cba++
  ) {
    if (_0xf95e07[_0x399142(0x1a5)](_0x80080b[_0x185cba])) return !![];
  }
  return ![];
}
var keywordsToCheck = [_0x4d9eeb(0x257), _0x4d9eeb(0x112)],
  scripts = document["getElementsByTagName"](_0x4d9eeb(0x170)),
  matchedScripts = [];
for (var i = 0x0; i < scripts["length"]; i++) {
  var scriptSrcs = scripts[i][_0x4d9eeb(0x246)];
  isScriptUrlMatch(scriptSrcs, keywordsToCheck) &&
    matchedScripts[_0x4d9eeb(0x17e)](scriptSrcs);
}
if (matchedScripts[_0x4d9eeb(0x22a)] > 0x0) {
  scriptSrcAdded = matchedScripts;
  const script = document[_0x4d9eeb(0x26e)](
    _0x4d9eeb(0x193) + scriptSrcAdded + "\x22]",
  );
  script &&
    (scriptLocation =
      script[_0x4d9eeb(0x1ca)]["tagName"] === _0x4d9eeb(0x16e)
        ? _0x4d9eeb(0x178)
        : _0x4d9eeb(0x225));
} else scriptSrcAdded = _0x4d9eeb(0x12d) + failIcon;
const newElement = document[_0x4d9eeb(0x185)]("div"),
  newStyle = document[_0x4d9eeb(0x185)](_0x4d9eeb(0x1cc));
(newStyle[_0x4d9eeb(0x139)] = _0x4d9eeb(0x1a6)),
  document[_0x4d9eeb(0x21f)]["appendChild"](newStyle);
showButton && document[_0x4d9eeb(0x121)][_0x4d9eeb(0x177)](newElement);
newElement[_0x4d9eeb(0x139)] =
  _0x4d9eeb(0x196) +
  formType +
  _0x4d9eeb(0x190) +
  scriptSrcAdded +
  _0x4d9eeb(0x1af) +
  scriptLocation +
  _0x4d9eeb(0x11d) +
  (isMultistepOnFormElement ? passIcon : failIcon) +
  _0x4d9eeb(0x107) +
  (formStepLength > 0x0 ? passIcon : failIcon) +
  _0x4d9eeb(0x189) +
  formStepLength +
  _0x4d9eeb(0x11b) +
  (nextBtn ? passIcon : failIcon) +
  _0x4d9eeb(0x1f6) +
  (isNextBtnOnSubmit ? failIcon : passIcon) +
  _0x4d9eeb(0x248) +
  (backBtn ? passIcon : failIcon) +
  "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Back\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button" +
  (isBackBtnOnSubmit ? failIcon : passIcon) +
  _0x4d9eeb(0x115) +
  (backBtn ? passIcon : failIcon) +
  _0x4d9eeb(0x114) +
  (isSubmitBtnOnSubmit ? passIcon : failIcon) +
  _0x4d9eeb(0x1a7) +
  (progressBarAttr && progressIndicatorAttr
    ? _0x4d9eeb(0x124) + passIcon + "</strong>"
    : "") +
  _0x4d9eeb(0x110) +
  (customProgressAttr ? _0x4d9eeb(0x23d) + passIcon + "</strong>" : "") +
  _0x4d9eeb(0x110) +
  (cardDivAttr ? _0x4d9eeb(0x17b) + passIcon + "</strong>" : "") +
  _0x4d9eeb(0x110) +
  (currentStepAttr ? _0x4d9eeb(0x263) + passIcon + _0x4d9eeb(0x12f) : "") +
  _0x4d9eeb(0x110) +
  (totalStepAttr ? _0x4d9eeb(0x13c) + passIcon + "</strong>" : "") +
  _0x4d9eeb(0x110) +
  (enterAttr ? _0x4d9eeb(0x191) + passIcon + _0x4d9eeb(0x12f) : "") +
  "\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
  (submitAttr ? _0x4d9eeb(0x13d) + passIcon + _0x4d9eeb(0x12f) : "") +
  _0x4d9eeb(0x110) +
  (radioSkipAttr ? _0x4d9eeb(0x1d3) + passIcon + _0x4d9eeb(0x12f) : "") +
  _0x4d9eeb(0x110) +
  (customCheckboxAttr ? _0x4d9eeb(0x220) + passIcon + _0x4d9eeb(0x12f) : "") +
  "\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
  (recapatchaAttr ? _0x4d9eeb(0x183) + passIcon + _0x4d9eeb(0x12f) : "") +
  _0x4d9eeb(0x138);
function openNav() {
  const _0xffc70e = _0x4d9eeb;
  (document[_0xffc70e(0x271)](_0xffc70e(0x1ff))[_0xffc70e(0x1cc)]["width"] =
    _0xffc70e(0x1ae)),
    (document[_0xffc70e(0x271)](_0xffc70e(0x1ff))["style"][_0xffc70e(0x16c)] =
      "12px");
}
function closeNav() {
  const _0x422a99 = _0x4d9eeb;
  (document[_0x422a99(0x271)](_0x422a99(0x1ff))["style"][_0x422a99(0x15b)] =
    "0"),
    (document[_0x422a99(0x271)](_0x422a99(0x1ff))[_0x422a99(0x1cc)][
      _0x422a99(0x16c)
    ] = _0x422a99(0x145));
}
