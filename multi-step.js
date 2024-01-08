//8th Jan 2023
//Bug fix
//1. textarea memory bug

const _0x412c6a = _0x3df8;
(function (_0x19fe1d, _0x35b5c4) {
  const _0x1e330a = _0x3df8,
    _0x1493b9 = _0x19fe1d();
  while (!![]) {
    try {
      const _0x28f8ef =
        parseInt(_0x1e330a(0x15f)) / 0x1 +
        (-parseInt(_0x1e330a(0x258)) / 0x2) *
          (-parseInt(_0x1e330a(0x149)) / 0x3) +
        (parseInt(_0x1e330a(0x1ca)) / 0x4) *
          (parseInt(_0x1e330a(0x130)) / 0x5) +
        -parseInt(_0x1e330a(0x145)) / 0x6 +
        parseInt(_0x1e330a(0x144)) / 0x7 +
        parseInt(_0x1e330a(0x265)) / 0x8 +
        -parseInt(_0x1e330a(0x23c)) / 0x9;
      if (_0x28f8ef === _0x35b5c4) break;
      else _0x1493b9["push"](_0x1493b9["shift"]());
    } catch (_0x59bf3a) {
      _0x1493b9["push"](_0x1493b9["shift"]());
    }
  }
})(_0x275a, 0xe1489);
let x = 0x0,
  curStep = 0x0,
  steps = $(_0x412c6a(0x1b7)),
  progressbarClone = $(_0x412c6a(0x1e4))[_0x412c6a(0x1a6)](),
  progressbar,
  countCard = !![],
  weightedSelection = $(_0x412c6a(0x13f))["data"](_0x412c6a(0x1a8)),
  weightedSelectionRange = $(_0x412c6a(0x165))["data"](_0x412c6a(0x241)),
  selectMultiple = $("[data-select-multiple]")[_0x412c6a(0x200)](
    _0x412c6a(0x222),
  ),
  customError = $(_0x412c6a(0x16f))[_0x412c6a(0x200)](_0x412c6a(0x254)),
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
  reinitIX = $(_0x412c6a(0x273))[_0x412c6a(0x200)]("reinit"),
  textareaLength = 0x0,
  textInputLength = 0x0,
  emailInputLength = 0x0,
  selectInputLength = 0x0,
  checkboxInputLength = 0x0,
  filledInput = [],
  savedFilledInput = [],
  memory = $("[data-memory]")[_0x412c6a(0x200)](_0x412c6a(0x169)),
  quiz = $("[data-quiz]")[_0x412c6a(0x200)](_0x412c6a(0x221)),
  progress = 0x0;
const urlFormly = new URL(window[_0x412c6a(0x123)][_0x412c6a(0x133)]);
let _params = $(_0x412c6a(0x1d7))[_0x412c6a(0x200)]("query-param"),
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
  logicExtra = $(_0x412c6a(0x138))["data"](_0x412c6a(0x178)),
  oldSubmitText = $(_0x412c6a(0x147))[_0x412c6a(0x219)](),
  oldResetText = $(_0x412c6a(0x244))[_0x412c6a(0x1d4)](),
  formReset = $("[data-form=\x22multistep\x22]")[_0x412c6a(0x200)](
    _0x412c6a(0x1df),
  ),
  successCard = "",
  redirectTo = "",
  totalSteps = 0x0,
  checkCount = 0x0,
  resetDelay = $("[data-reset-delay]")[_0x412c6a(0x200)](_0x412c6a(0x136))
    ? $(_0x412c6a(0x173))[_0x412c6a(0x200)](_0x412c6a(0x136))
    : 0x7d0,
  redirectDelay = $(_0x412c6a(0x1ff))[_0x412c6a(0x200)](_0x412c6a(0x160))
    ? $(_0x412c6a(0x1ff))[_0x412c6a(0x200)]("redirect-delay")
    : 0x7d0,
  newTab = !![],
  unfilledArr = [],
  phoneFormat = $(_0x412c6a(0x138))[_0x412c6a(0x200)](_0x412c6a(0x1fd)),
  scrollToTop = $(_0x412c6a(0x138))[_0x412c6a(0x200)](_0x412c6a(0x25b)),
  conditionalResult =
    $("[data-conditional-result]")[_0x412c6a(0x200)]("conditional-result") ===
    "AND",
  scrollTopOffset = parseInt($(_0x412c6a(0x138))["data"](_0x412c6a(0x220))),
  notRobot = !![],
  all_data = [];
const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
savedFilledInput = JSON[_0x412c6a(0x226)](
  localStorage[_0x412c6a(0x19f)](_0x412c6a(0x23b)),
);
var ogCloneArr = [];
$(_0x412c6a(0x26f))["each"](function () {
  const _0x49df9d = _0x412c6a;
  ogCloneArr[_0x49df9d(0x1c3)]({
    name: $(this)[_0x49df9d(0x200)](_0x49df9d(0x1a6)),
    element: $(this)[_0x49df9d(0x1a6)](!![]),
    display: $(
      _0x49df9d(0x1f1) + $(this)[_0x49df9d(0x200)](_0x49df9d(0x1a6)) + "\x22]",
    )
      ["eq"](0x0)
      ["clone"](!![]),
  });
});
$(_0x412c6a(0x1dc))[_0x412c6a(0x270)] > 0x0 && (notRobot = ![]);
function recaptcha(_0x404a5c) {
  notRobot = !![];
}
$(_0x412c6a(0x1ba))[_0x412c6a(0x270)] > 0x0 &&
  (countCard = $(_0x412c6a(0x1ba))["data"](_0x412c6a(0x233)));
$(_0x412c6a(0x24a))["hide"](),
  $(progressbarClone)[_0x412c6a(0x205)](_0x412c6a(0x20c)),
  $(_0x412c6a(0x1c2))[_0x412c6a(0x1ac)]()["remove"](),
  $("[data-form=\x22submit-btn\x22]")[_0x412c6a(0x124)](),
  $("[data-form-ms=\x22submit-btn\x22]")[_0x412c6a(0x124)](),
  steps[_0x412c6a(0x14e)](function () {
    const _0x384266 = _0x412c6a;
    $(_0x384266(0x1c2))["append"](
      progressbarClone[_0x384266(0x1a6)](!![], !![]),
    );
  }),
  $(_0x412c6a(0x125))[_0x412c6a(0x124)]();
function _0x275a() {
  const _0x11d06c = [
    "reset",
    "[data-input-index=\x22",
    "input[type=\x22email\x22]:visible",
    "name",
    "slice",
    "[data-form=\x22progress-indicator\x22]",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-white\x22>5.\x20Submit\x20Buttons:\x20data-form=next-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>Submit\x20button\x20present?\x20",
    "siblings",
    ":input[type=\x22checkbox\x22][required]:checked",
    "auto",
    "FAIL",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-white\x22>4.\x20Back\x20Buttons:\x20data-form=next-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>Back\x20button\x20present?\x20",
    "textarea[required]:visible",
    ".w-form-done",
    "skipTo",
    "data-go-to",
    "0px",
    "input:radio[name=\x22",
    "[data-display=\x22",
    "wait",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>Submit\x20button\x20attribute\x20IS\x20on\x20Form\x20Submit\x20Button\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "[data-clone-wrapper]",
    "\x22][value=\x22",
    "mySidenav",
    "[data-skip-to]",
    "clicked",
    "inputName",
    ":input[type=\x22date\x22][required]",
    "[data-checkbox]",
    "checkbox",
    "phone-validation",
    "replace",
    "[data-redirect-delay]",
    "data",
    "[data-form=\x22remove-clone\x22]",
    "[data-enter]",
    "[data-form=\x22remove-input-clone\x22]",
    "relationship-",
    "removeClass",
    "No\x20Formly\x20script\x20added\x20to\x20the\x20page!",
    "html,\x20body",
    "formly-support",
    "not",
    "[data-clone-input]",
    "clickable-all",
    "current",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>Multistep\x20form\x20attribute\x20is\x20on\x20Form\x20element\x20and\x20not\x20on\x20Form\x20Block\x20element\x0a\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-white\x22>2.\x20Form\x20Steps:\x20data-form=step\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "src",
    "[data-display-input-wrapper=\x22",
    "status",
    "clickable",
    "data-radio-skip",
    "[data-form=\x22next-btn\x22][type=\x22submit\x22]",
    "[data-form=\x22step\x22][data-card]",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spacer\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-white\x22>Script\x20Location:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>",
    "parents",
    "createElement",
    "FormlyLogic\x20enabled",
    "val",
    "select[required]:visible",
    "debug-mode",
    "disabled",
    ".active-answer-card",
    ":input[type=\x22number\x22][required]",
    "script[src=\x22",
    "scroll-top-offset",
    "quiz",
    "select-multiple",
    "searchParams",
    "radio",
    "[data-radio-skip]",
    "parse",
    "input-field",
    "[data-answer=\x22",
    "active-answer-card",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>Number\x20of\x20steps:\x20",
    ":input[type=\x22tel\x22]",
    "getElementById",
    "textarea",
    "[data-selection]",
    "focus",
    "style",
    "[data-add-new-input]",
    "clicked\x20enter",
    "count-card",
    "[data-selection=\x22other\x22]",
    "[data-form=\x22back-btn\x22]",
    "<strong\x20class=\x22text-white\x22>Intro\x20Cards\x20Or\x20Steps\x20Without\x20Inputs\x20",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a",
    "option[value=\x22",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>Next\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button\x20",
    "videsigns",
    "filledInput",
    "31836672gnbKBn",
    "[data-btn=\x22check\x22]",
    "input:checkbox",
    "running",
    "[data-selection=\x22",
    "weighted-selection-range",
    ":checked",
    ":input[type=\x22checkbox\x22][required]:not(:checked)",
    "[data-btn=\x22reset\x22]",
    ":input[type=\x22time\x22][required]",
    "textarea:focus",
    "slow",
    ":input[type=\x22password\x22][required]",
    "block-domain",
    "[data-text=\x22error-message\x22]",
    "input[type=\x22radio\x22]:checked",
    "input[type=\x22text\x22][required]:visible",
    "get",
    "offset",
    "closest",
    "[data-radio-delay]",
    "redirect",
    "ms-field",
    "key",
    "custom-error-message",
    "clone-input",
    "input[name=\x22",
    "removeItem",
    "2888jnhNQn",
    "body",
    "[data-cms-select=cms]",
    "scroll-top",
    "prop",
    "radio-skip",
    "data-skip-to",
    "backTo",
    "[data-text=\x22current-step\x22]",
    "startsWith",
    "Before\x20&lt;/body&gt;\x20tag",
    "append",
    "padding",
    "11221976wKEXwk",
    "[data-display]",
    "https://webflow.com/api/v1/form/",
    "includes",
    "data-input-field",
    "\x22]\x20[data-input-field^=\x22",
    "stopPropagation",
    "file",
    "css",
    "toLowerCase",
    "[data-clone]",
    "length",
    "metaKey",
    "filter",
    "[data-reinit]",
    "checked",
    "findIndex",
    "</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22section-title-text\x22>Formly\x20Script\x20Info</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-white\x22>Script\x20URL:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>",
    "preventDefault",
    "phone-autoformat",
    "<strong\x20class=\x22text-white\x22>Current\x20Step\x20Text\x20",
    "location",
    "hide",
    "[data-input-field]",
    "every",
    "change",
    ":input[type=\x22checkbox\x22]",
    "\x22]\x20input",
    "<strong\x20class=\x22text-white\x22>Press\x20\x22⌘\x20+\x20Enter\x20\x22\x20To\x20Submit\x20",
    "search",
    "script",
    ":input[type=\x22email\x22]",
    "forEach",
    "trigger",
    "5xeRwzU",
    "parentNode",
    "[data-display-index=\x22",
    "href",
    "log",
    ":input[type=\x22number\x22]",
    "reset-delay",
    "[data-clone=\x22",
    "[data-form=\x22multistep\x22]",
    "none",
    "[data-cms-select=text]",
    "[data-answer]",
    "remove-upload",
    "textarea[name=\x22",
    "12px",
    "[data-weighted-selection]",
    "[data-radio-skip]:visible",
    "[data-text=\x22total-steps\x22]",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "[type=\x22submit\x22]",
    "3169397GNujHQ",
    "6706614AObXzq",
    "[data-card=\x22true\x22]",
    "[data-form=\x22submit-btn\x22]",
    "[data-clone-input-wrapper=\x22",
    "3762HHYxDJ",
    ":focus",
    "skip-to",
    "input",
    "<strong\x20class=\x22text-white\x22>Custom\x20Progress\x20Indicators\x20",
    "each",
    "data-radio-delay",
    "keyCode",
    "type",
    "input:radio[required]",
    "attr",
    "form[data-form=\x22multistep\x22]\x20:input",
    "min-character",
    "new-tab",
    "\x0a\x20\x20<button\x20class=\x22openbtn\x22\x20onclick=\x22openNav()\x22>\x0a\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x2220px\x22\x20height=\x2220px\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M11\x2021h-1l1-7H7.5c-.88\x200-.33-.75-.31-.78C8.48\x2010.94\x2010.42\x207.54\x2013.01\x203h1l-1\x207h3.51c.4\x200\x20.62.19.4.66C12.97\x2017.55\x2011\x2021\x2011\x2021\x22></path>\x0a\x20\x20\x20\x20</svg>\x20Check\x20Form\x0a\x20\x20</button>\x0a\x20\x20<div\x20id=\x22mySidenav\x22\x20class=\x22sidenav\x22>\x0a\x20\x20\x20\x20<a\x20href=\x22javascript:void(0)\x22\x20class=\x22closebtn\x22\x20onclick=\x22closeNav()\x22>&times;</a>\x0a\x20\x20\x20\x20<div\x20class=\x22fc-main-content\x22>\x0a\x20\x20\x20\x20\x20\x20<h4\x20class=\x22text-header\x22>Formly\x20Support</h4>\x0a\x20\x20\x20\x20\x20\x20<p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20If\x20you\x20have\x20spotted\x20a\x20bug\x20or\x20require\x20extra\x20support,\x20please\x20reach\x20out\x20to\x20us\x20via\x20Slack\x20or\x20email\x20us\x20at\x20developer@videsigns.uk.\x0a\x20\x20\x20\x20\x20\x20</p>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22section-title-text\x22>Form\x20Type</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>",
    "input[autofocus]",
    "head",
    "<strong\x20class=\x22text-white\x22>ReCAPTCHA\x20",
    "selected",
    "[data-clickable]",
    "<span\x20class=\x22icon-embed-xxsmall\x20w-embed\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010s10-4.48\x2010-10S17.52\x202\x2012\x202m-2\x2015l-5-5l1.41-1.41L10\x2014.17l7.59-7.59L19\x208z\x22></path></svg></span>",
    "success",
    "1573036BQynWL",
    "redirect-delay",
    "ajaxComplete",
    "option[value=\x22$(this).val()\x22]",
    ":input[type=\x22text\x22]",
    "[data-go-to]",
    "[data-weighted-selection-range]",
    ":input[type=\x22checkbox\x22][required]",
    "url",
    "card",
    "memory",
    "[data-form=\x22next-btn\x22]",
    "keypress",
    "w--redirected-checked",
    "innerHTML",
    "[type=\x22radio\x22]",
    "[data-custom-error-message]",
    "[data-success-card]",
    "addClass",
    "remove",
    "[data-reset-delay]",
    "find",
    "keydown",
    "index",
    "[data-callback=\x22recaptcha\x22]",
    "logic-extra",
    "_blank",
    "[data-display-input]",
    "[data-enter=\x22true\x22]",
    "<strong\x20class=\x22text-white\x22>Press\x20\x22Enter\x22\x20To\x20Progress\x20",
    "querySelector",
    "\x0a\x20\x20.icon-embed-xxsmall-2\x20{\x0a\x20\x20\x20\x20width:\x201.3rem;\x0a\x20\x20\x20\x20height:\x201.3rem;\x0a\x20\x20\x20\x20color:\x20#ff3232;\x0a\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20}\x0a\x20\x20.icon-embed-xxsmall\x20{\x0a\x20\x20\x20\x20width:\x201.3rem;\x0a\x20\x20\x20\x20height:\x201.3rem;\x0a\x20\x20\x20\x20color:\x20#57ff4b;\x0a\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20}\x0a\x0a\x20\x20.sidenav\x20{\x0a\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20width:\x200;\x0a\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20z-index:\x20100;\x0a\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20background-color:\x20#081019;\x0a\x20\x20\x20\x20overflow-x:\x20hidden;\x0a\x20\x20\x20\x20padding-top:\x2060px;\x0a\x20\x20\x20\x20transition:\x200.5s;\x0a\x20\x20\x20\x20font-size:\x2015px;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73);\x0a\x20\x20\x20\x20font-family:system-ui,\x20-apple-system,\x20BlinkMacSystemFont,\x20Segoe\x20UI,\x20Roboto,\x20Noto\x20Sans,\x20Ubuntu,\x20Cantarell,\x20Helvetica\x20Neue,\x20Oxygen,\x20Fira\x20Sans,\x20Droid\x20Sans,\x20sans-serif;\x0a\x20\x20}\x0a\x0a\x20\x20.sidenav\x20p,\x20.sidenav\x20strong\x20{\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20justify-content:\x20space-between;\x0a\x20\x20\x20\x20margin-bottom:\x204px;\x0a\x20\x20}\x0a\x0a\x20\x20.sidenav\x20.closebtn\x20{\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20right:\x2025px;\x0a\x20\x20\x20\x20font-size:\x2036px;\x0a\x20\x20\x20\x20margin-left:\x2050px;\x0a\x20\x20\x20\x20text-decoration:\x20none;\x0a\x20\x20\x20\x20color:\x20#e7e7e7;\x0a\x20\x20}\x0a\x0a\x20\x20.fc-core-setup\x20{\x0a\x20\x20\x20\x20padding:\x2012px;\x0a\x20\x20\x20\x20margin-bottom:\x2011px;\x0a\x20\x20\x20\x20border-radius:\x206px;\x0a\x20\x20}\x0a\x0a\x20\x20#main\x20{\x0a\x20\x20\x20\x20transition:\x20margin-left\x20.5s;\x0a\x20\x20\x20\x20padding:\x2020px;\x0a\x20\x20}\x0a\x0a\x20\x20.fc-main-content\x20{\x0a\x20\x20\x20\x20transition:\x20margin-left\x20.5s;\x0a\x20\x20\x20\x20padding:\x2020px;\x0a\x20\x20}\x0a\x0a\x20\x20.fc-form-step\x20{\x0a\x20\x20\x20\x20padding-left:\x2010px;\x0a\x20\x20}\x0a\x0a\x20\x20.openbtn\x20{\x0a\x20\x20\x20\x20white-space:\x20nowrap;\x0a\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20box-shadow:\x200\x200\x200\x201px\x20rgba(0,\x200,\x200,\x20.1),\x200\x201px\x203px\x20rgba(0,\x200,\x200,\x20.1);\x0a\x20\x20\x20\x20visibility:\x20visible\x20!important;\x0a\x20\x20\x20\x20z-index:\x2099\x20!important;\x0a\x20\x20\x20\x20color:\x20#e7e7e7\x20!important;\x0a\x20\x20\x20\x20opacity:\x201\x20!important;\x0a\x20\x20\x20\x20width:\x20auto\x20!important;\x0a\x20\x20\x20\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20background-color:\x20#1e1e1e\x20!important;\x0a\x20\x20\x20\x20border-radius:\x203px\x20!important;\x0a\x20\x20\x20\x20margin:\x200\x20!important;\x0a\x20\x20\x20\x20padding:\x206px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2013px\x20!important;\x0a\x20\x20\x20\x20line-height:\x2014px\x20!important;\x0a\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20top:\x20auto\x20!important;\x0a\x20\x20\x20\x20bottom:\x2012px\x20!important;\x0a\x20\x20\x20\x20left:\x2012px\x20!important;\x0a\x20\x20\x20\x20right:\x20auto\x20!important;\x0a\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20transform:\x20none\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20}\x0a\x0a\x20\x20.text-header{\x0a\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20\x20\x20font-size:\x201.8rem;\x0a\x20\x20\x20\x20font-weight:\x20600;\x0a\x20\x20\x20\x20line-height:\x201.2;\x0a\x20\x20\x20\x20margin-bottom:4px\x0a\x20\x20}\x0a\x0a\x20\x20@media\x20screen\x20and\x20(max-height:\x20450px)\x20{\x0a\x20\x20\x20\x20.sidenav\x20{\x20padding-top:\x2015px;\x20}\x0a\x20\x20\x20\x20.sidenav\x20a\x20{\x20font-size:\x2018px;\x20}\x0a\x20\x20}\x0a\x0a\x20\x20.section-title-text{\x0a\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20\x20\x20margin-bottom:\x2010px;\x0a\x20\x20\x20\x20font-size:\x2018px;\x0a\x20\x20\x20\x20font-weight:\x20700;\x0a\x20\x20}\x0a\x0a\x20\x20.div-support-section{\x0a\x20\x20\x20\x20padding-top:1rem;\x0a\x20\x20\x20\x20padding-bottom:1rem;\x0a\x20\x20}\x0a\x0a\x20\x20.text-white{\x0a\x20\x20\x20\x20color:\x20white;\x0a\x20\x20}\x0a\x0a\x20\x20.spacer{\x0a\x20\x20\x20\x20padding-top:8px\x0a\x20\x20}\x0a",
    "add-new",
    "[data-clickable-all]",
    "input[type=\x22submit\x22]",
    "[data-btn=\x22edit\x22]",
    "value",
    "[data-add-new]",
    "[data-form-ms=\x22submit-btn\x22]",
    "init",
    "getResponse",
    "readystatechange",
    ":first",
    "select[name=\x22",
    "radio-delay",
    "[data-form=\x22step\x22]:not([data-card=\x22true\x22])",
    ".w-form-formradioinput",
    "[data-display-input-index=\x22",
    ":input[type=\x22password\x22]",
    "[data-remove-upload]",
    "add-new-input",
    "parent",
    "select[required]",
    ":input[type=\x22url\x22][required]",
    "Please\x20wait...",
    ":input[type=\x22file\x22][required]",
    "tagName",
    "<strong\x20class=\x22text-white\x22>Checkboxes\x20",
    ":input[type=\x27radio\x27]:checked",
    "click",
    ":input[type=\x22text\x22][required]",
    "[data-radio-skip=\x22true\x22]",
    "go-to",
    "dispatchEvent",
    "getItem",
    "[data-answer][data-radio-skip]:visible",
    "Webflow",
    ":input[type=\x22email\x22][required]",
    ":input",
    "stringify",
    "select",
    "clone",
    ".w-radio-input",
    "weighted-selection",
    ":input[type=\x22checkbox\x22]:checked",
    "split",
    "<strong\x20class=\x22text-white\x22>Automatic\x20Progress\x20Indicators\x20",
    "children",
    "some",
    "join",
    "[data-form=\x22custom-progress-indicator\x22]",
    "step",
    "0.4",
    "top",
    "test",
    "answer",
    "textarea[required]",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spacer\x22></div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22section-title-text\x22>Powerups</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "[data-form=\x22step\x22]",
    "[data-show-if]",
    "[data-display-input=\x22",
    "[data-count-card]",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-white\x22>3.\x20Next\x20Buttons:\x20data-form=back-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>Next\x20button\x20present?\x20",
    "selection",
    "[data-range]:contains(",
    "getElementsByTagName",
    "show",
    "input[type=\x22radio\x22]",
    "data-show-if",
    "[data-form=\x22progress\x22]",
    "push",
    "true",
    "animate",
    "[data-clone-input=\x22",
    ":input[type=\x22date\x22]",
    "destroy",
    "<span\x20class=\x22icon-embed-xxsmall-2\x20w-embed\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--carbon\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2032\x2032\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M16\x202C8.2\x202\x202\x208.2\x202\x2016s6.2\x2014\x2014\x2014s14-6.2\x2014-14S23.8\x202\x2016\x202m5.4\x2021L16\x2017.6L10.6\x2023L9\x2021.4l5.4-5.4L9\x2010.6L10.6\x209l5.4\x205.4L21.4\x209l1.6\x201.6l-5.4\x205.4l5.4\x205.4z\x22></path></svg></span>",
    "1354432YpGxXu",
    "div",
    "width",
    "data-name",
    "submit",
    "fadeIn",
    "[data-selection-weight]",
    "[data-success-card=\x22",
    "submit-show",
    "multistep",
    "text",
    "field",
    ".w-checkbox-input",
    "[data-query-param]",
    "Inside\x20<head>\x20tag",
    "[data-display-wrapper=\x22",
    "</strong>",
    ":input[type=\x22tel\x22][required]",
    "div.g-recaptcha",
    "[type=\x22checkbox\x22]",
    "[data-input-field=\x22",
  ];
  _0x275a = function () {
    return _0x11d06c;
  };
  return _0x275a();
}
countCard
  ? ((curStep = curStep + 0x1),
    (totalSteps = steps[_0x412c6a(0x270)]),
    $(_0x412c6a(0x141))["text"](totalSteps))
  : ($(steps[x])[_0x412c6a(0x200)](_0x412c6a(0x168))
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    (totalSteps = $(_0x412c6a(0x18c))[_0x412c6a(0x270)]),
    $("[data-text=\x22total-steps\x22]")[_0x412c6a(0x1d4)](totalSteps),
    $(_0x412c6a(0x214))[_0x412c6a(0x14e)](function () {
      const _0x309ea0 = _0x412c6a;
      $($(_0x309ea0(0x1e4))[$(this)[_0x309ea0(0x176)]()])[_0x309ea0(0x124)]();
    }));
(progressbar = $(_0x412c6a(0x1c2))["children"]()),
  $(_0x412c6a(0x1e4))["on"](_0x412c6a(0x19a), clickableIndicator),
  $("[data-text=\x22current-step\x22]")[_0x412c6a(0x1d4)](curStep),
  steps[_0x412c6a(0x124)](),
  $(_0x412c6a(0x170))[_0x412c6a(0x124)](),
  $(_0x412c6a(0x213))[_0x412c6a(0x14e)](function () {
    const _0x5b76a0 = _0x412c6a;
    $(this)["attr"](_0x5b76a0(0x151), "button");
  });
function getParams() {
  const _0x4f3e19 = _0x412c6a;
  urlFormly[_0x4f3e19(0x223)][_0x4f3e19(0x12e)](
    function (_0x405775, _0x26e7ca) {
      const _0x5d10ee = _0x4f3e19;
      searchQ[_0x5d10ee(0x1c3)]({ val: _0x405775, key: _0x26e7ca });
    },
  );
}
function getSafe(_0x14382b, _0x46d25d) {
  try {
    return _0x14382b();
  } catch (_0x4de789) {
    return _0x46d25d;
  }
}
function phoneAutoFormat(_0x4bb796) {
  var _0xe3b8c8 = "";
  return function (_0xce6c03) {
    const _0x550b55 = _0x3df8;
    var _0x11c5e0 = "",
      _0x3f92b0 = _0xce6c03[_0x550b55(0x1fe)](/\D/g, ""),
      _0x4a9af2 = 0x0,
      _0x42299a = 0x0;
    while (
      _0x4a9af2 < _0x3f92b0[_0x550b55(0x270)] &&
      _0x42299a < _0x4bb796[_0x550b55(0x270)]
    ) {
      _0x4bb796[_0x42299a] === "x"
        ? ((_0x11c5e0 += _0x3f92b0[_0x4a9af2]), _0x4a9af2++)
        : (_0x11c5e0 += _0x4bb796[_0x42299a]),
        _0x42299a++;
    }
    if (_0xce6c03["length"] < _0xe3b8c8["length"]) {
      var _0x5d8e8b = _0x4bb796[_0x550b55(0x1e3)](_0x42299a);
      _0x11c5e0 += _0x5d8e8b[_0x550b55(0x1fe)](/x/g, "");
    }
    return (_0xe3b8c8 = _0x11c5e0), _0x11c5e0;
  };
}
function validateURL(_0x20b9e6) {
  const _0xab483f = _0x412c6a;
  return urlPattern[_0xab483f(0x1b3)](_0x20b9e6) ? !![] : ![];
}
quiz &&
  steps[_0x412c6a(0x14e)](function () {
    const _0x5c7b4a = _0x412c6a;
    $(this)["children"]()["attr"](_0x5c7b4a(0x212), !![]),
      $(this)["children"]()[_0x5c7b4a(0x153)](_0x5c7b4a(0x14f), 0xfa);
  });
function _0x3df8(_0x552388, _0x3c1006) {
  const _0x275a1f = _0x275a();
  return (
    (_0x3df8 = function (_0x3df8f1, _0x36f92a) {
      _0x3df8f1 = _0x3df8f1 - 0x120;
      let _0x109129 = _0x275a1f[_0x3df8f1];
      return _0x109129;
    }),
    _0x3df8(_0x552388, _0x3c1006)
  );
}
function disableBtn(_0x2f2e42) {
  const _0x2f2df4 = _0x412c6a;
  (fill = ![]),
    !customError &&
      ($(_0x2f2df4(0x16a))["css"]({
        opacity: _0x2f2df4(0x1b1),
        "pointer-events": "none",
      }),
      $(_0x2f2df4(0x16a))[_0x2f2df4(0x171)](_0x2f2df4(0x21c)),
      $("[data-form=\x22submit-btn\x22]")[_0x2f2df4(0x26d)]({
        opacity: _0x2f2df4(0x1b1),
        "pointer-events": _0x2f2df4(0x139),
      }),
      $("[data-form=\x22submit-btn\x22]")[_0x2f2df4(0x171)](_0x2f2df4(0x21c)),
      $(_0x2f2df4(0x185))[_0x2f2df4(0x26d)]({
        opacity: _0x2f2df4(0x1b1),
        "pointer-events": _0x2f2df4(0x139),
      }),
      $(_0x2f2df4(0x185))[_0x2f2df4(0x171)](_0x2f2df4(0x21c)));
}
function enableBtn() {
  const _0x2c0f8f = _0x412c6a;
  (fill = !![]),
    $(_0x2c0f8f(0x16a))[_0x2c0f8f(0x26d)]({
      "pointer-events": _0x2c0f8f(0x1e8),
      opacity: "1",
    }),
    $(_0x2c0f8f(0x16a))[_0x2c0f8f(0x205)](_0x2c0f8f(0x21c)),
    $("[data-form=\x22submit-btn\x22]")["css"]({
      "pointer-events": "auto",
      opacity: "1",
    }),
    $(_0x2c0f8f(0x147))["removeClass"](_0x2c0f8f(0x21c)),
    $(_0x2c0f8f(0x185))[_0x2c0f8f(0x26d)]({
      "pointer-events": _0x2c0f8f(0x1e8),
      opacity: "1",
    }),
    $(_0x2c0f8f(0x185))[_0x2c0f8f(0x205)]("disabled");
}
function saveFilledInput() {
  const _0x4c9beb = _0x412c6a;
  $(_0x4c9beb(0x154))
    ["not"](_0x4c9beb(0x143))
    [_0x4c9beb(0x14e)](function () {
      const _0x55072c = _0x4c9beb;
      $(this)[_0x55072c(0x153)](_0x55072c(0x151)) === _0x55072c(0x1fc) ||
      $(this)[_0x55072c(0x153)](_0x55072c(0x151)) === _0x55072c(0x224)
        ? $(this)[_0x55072c(0x25c)](_0x55072c(0x274)) &&
          (filledInput[_0x55072c(0x1ad)](
            (_0x558e6a) =>
              _0x558e6a[_0x55072c(0x1f9)] === $(this)["attr"](_0x55072c(0x1e2)),
          )
            ? ((filledInput = filledInput[_0x55072c(0x272)](
                (_0x562b86) =>
                  _0x562b86[_0x55072c(0x1f9)] !==
                  $(this)[_0x55072c(0x153)](_0x55072c(0x1e2)),
              )),
              $(this)[_0x55072c(0x219)]() !== "" &&
                filledInput[_0x55072c(0x1c3)]({
                  inputName: $(this)[_0x55072c(0x153)](_0x55072c(0x1e2)),
                  value: $(this)[_0x55072c(0x219)](),
                }))
            : $(this)[_0x55072c(0x219)]() !== "" &&
              filledInput["push"]({
                inputName: $(this)["attr"](_0x55072c(0x1e2)),
                value: $(this)[_0x55072c(0x219)](),
              }))
        : filledInput[_0x55072c(0x1ad)](
              (_0x13a740) =>
                _0x13a740[_0x55072c(0x1f9)] ===
                $(this)[_0x55072c(0x153)]("name"),
            )
          ? ((filledInput = filledInput[_0x55072c(0x272)](
              (_0x35b035) =>
                _0x35b035[_0x55072c(0x1f9)] !==
                $(this)["attr"](_0x55072c(0x1e2)),
            )),
            $(this)[_0x55072c(0x219)]() !== "" &&
              filledInput[_0x55072c(0x1c3)]({
                inputName: $(this)[_0x55072c(0x153)](_0x55072c(0x1e2)),
                value: $(this)[_0x55072c(0x219)](),
              }))
          : $(this)[_0x55072c(0x219)]() !== "" &&
            filledInput[_0x55072c(0x1c3)]({
              inputName: $(this)[_0x55072c(0x153)]("name"),
              value: $(this)[_0x55072c(0x219)](),
            });
    }),
    localStorage[_0x4c9beb(0x257)]("filledInput"),
    localStorage["setItem"](
      _0x4c9beb(0x23b),
      JSON[_0x4c9beb(0x1a4)](filledInput),
    );
}
function scrollTop() {
  const _0x463404 = _0x412c6a;
  scrollToTop &&
    $(_0x463404(0x207))[_0x463404(0x1c5)](
      {
        scrollTop:
          $(_0x463404(0x138))[_0x463404(0x24e)]()[_0x463404(0x1b2)] -
          scrollTopOffset,
      },
      0x3e8,
    );
}
function updateStep() {
  const _0x5183f6 = _0x412c6a;
  scrollTop(),
    (skip = ![]),
    $(_0x5183f6(0x1af))[_0x5183f6(0x205)](_0x5183f6(0x21c));
  $(_0x5183f6(0x15c))[_0x5183f6(0x200)]("clickable") &&
    (steps[_0x5183f6(0x174)](":input[required]")[_0x5183f6(0x14e)](function () {
      const _0x4bf7c0 = _0x5183f6;
      $(
        $(_0x4bf7c0(0x1af))[
          $(this)
            [_0x4bf7c0(0x216)]("[data-form=\x22step\x22]")
            [_0x4bf7c0(0x176)]()
        ],
      ),
        $(this)[_0x4bf7c0(0x219)]() === "" && emptyInput++;
    }),
    emptyInput > 0x0
      ? $(_0x5183f6(0x181))[_0x5183f6(0x171)](_0x5183f6(0x21c))
      : $(_0x5183f6(0x181))[_0x5183f6(0x205)](_0x5183f6(0x21c)));
  $(_0x5183f6(0x1af))[_0x5183f6(0x205)](_0x5183f6(0x20c)),
    $(_0x5183f6(0x1af))[_0x5183f6(0x171)](_0x5183f6(0x21c)),
    $($(_0x5183f6(0x1af))[x])[_0x5183f6(0x171)](_0x5183f6(0x20c)),
    (selection = selections["filter"](
      (_0x2bfe3c) => _0x2bfe3c[_0x5183f6(0x1b0)] === x - 0x1,
    ));
  next &&
    (x = getSafe(() => selection[0x0][_0x5183f6(0x1ed)])
      ? parseInt(getSafe(() => selection[0x0]["skipTo"]))
      : x);
  $(_0x5183f6(0x13b))[_0x5183f6(0x124)](), steps["hide"]();
  reinitIX === !![] && window["Webflow"][_0x5183f6(0x1c8)]();
  $(progressbar)[_0x5183f6(0x205)](_0x5183f6(0x20c));
  for (i = 0x0; i <= x; i++) {
    countCard
      ? $(progressbar[i])[_0x5183f6(0x171)](_0x5183f6(0x20c))
      : !$(steps[i])["data"](_0x5183f6(0x168)) &&
        $(progressbar[i])[_0x5183f6(0x171)](_0x5183f6(0x20c));
  }
  reinitIX === !![]
    ? (window["Webflow"] &&
        window[_0x5183f6(0x1a1)]["require"]("ix2")[_0x5183f6(0x186)](),
      document[_0x5183f6(0x19e)](new Event(_0x5183f6(0x188))),
      $(steps[x])[_0x5183f6(0x1bf)]())
    : $(steps[x])[_0x5183f6(0x1cf)](_0x5183f6(0x247));
  $(".active-answer-card")[_0x5183f6(0x205)](_0x5183f6(0x229));
  x === 0x0 &&
    !$(steps[x])[_0x5183f6(0x200)](_0x5183f6(0x168)) &&
    ($(steps[x])["find"](_0x5183f6(0x13b))["show"](),
    $(steps[x])
      [_0x5183f6(0x174)]("[data-answer]")
      [_0x5183f6(0x171)](_0x5183f6(0x229)));
  selection["length"] > 0x0
    ? ($(steps[x])
        [_0x5183f6(0x174)](
          _0x5183f6(0x228) + selection[0x0][_0x5183f6(0x15b)] + "\x22]",
        )
        ["show"](),
      $(steps[x])
        [_0x5183f6(0x174)](
          _0x5183f6(0x228) + selection[0x0][_0x5183f6(0x15b)] + "\x22]",
        )
        [_0x5183f6(0x171)](_0x5183f6(0x229)))
    : ($(steps[x])
        ["find"](_0x5183f6(0x228) + answer + "\x22]")
        [_0x5183f6(0x1bf)](),
      $(steps[x])
        [_0x5183f6(0x174)](_0x5183f6(0x228) + answer + "\x22]")
        [_0x5183f6(0x171)]("active-answer-card"));
  if (x === 0x0)
    $(_0x5183f6(0x235))[_0x5183f6(0x124)](),
      $("[data-form=\x22next-btn\x22]")["show"](),
      $(_0x5183f6(0x147))[_0x5183f6(0x124)]();
  else {
    if (
      x === steps[_0x5183f6(0x270)] - 0x1 ||
      $(steps[x])[_0x5183f6(0x174)]("[data-form=\x22submit\x22]:visible")[
        _0x5183f6(0x270)
      ] > 0x0
    ) {
      $(_0x5183f6(0x16a))["hide"]();
      if (
        $(steps[x])
          [_0x5183f6(0x174)]("[data-form=\x22next-btn\x22][data-submit-show]")
          [_0x5183f6(0x200)](_0x5183f6(0x1d2))
      )
        $(steps[x])
          [_0x5183f6(0x174)]("[data-form=\x22next-btn\x22][data-submit-show]")
          ["show"]();
      else
        $(_0x5183f6(0x16a))[_0x5183f6(0x200)]("submit-show") &&
          $("[data-form=\x22next-btn\x22]")[_0x5183f6(0x1bf)]();
      $(_0x5183f6(0x147))[_0x5183f6(0x1bf)](),
        $(_0x5183f6(0x185))[_0x5183f6(0x1bf)](),
        $(_0x5183f6(0x235))[_0x5183f6(0x1bf)]();
    } else
      $("[data-form=\x22next-btn\x22]")[_0x5183f6(0x1bf)](),
        $(_0x5183f6(0x235))[_0x5183f6(0x1bf)](),
        $(_0x5183f6(0x147))[_0x5183f6(0x124)](),
        $(_0x5183f6(0x185))[_0x5183f6(0x124)]();
  }
  $($(steps[x])[_0x5183f6(0x174)](_0x5183f6(0x158))[0x0])[_0x5183f6(0x22f)](),
    $($(steps[x])["find"]("textarea[autofocus]")[0x0])["focus"](),
    validation();
  for (idx = 0x0; idx <= x; idx++) {
    $($(_0x5183f6(0x1af))[idx])["removeClass"]("disabled");
  }
}
function validateEmail(_0x5483ce, _0x2ec2d0, _0x1016f3) {
  const _0x304b75 = _0x412c6a;
  let _0x492828 = _0x5483ce[_0x304b75(0x268)]("@")
    ? _0x5483ce[_0x304b75(0x1aa)]("@")[0x1][_0x304b75(0x1aa)](".")[0x0]
    : [];
  dom = [];
  _0x2ec2d0 !== undefined &&
    _0x2ec2d0[_0x304b75(0x1aa)](",")[_0x304b75(0x12e)](function (_0x4a5f0e) {
      const _0x1ad73e = _0x304b75;
      _0x4a5f0e[_0x1ad73e(0x268)](_0x492828) &&
        dom[_0x1ad73e(0x1c3)](_0x492828);
    });
  dom[_0x304b75(0x270)] > 0x0 ? (domainAllowed = ![]) : (domainAllowed = !![]);
  var _0x1d5dc2 = /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,20})?$/;
  console[_0x304b75(0x134)](_0x1d5dc2[_0x304b75(0x1b3)](_0x5483ce)),
    !_0x1d5dc2["test"](_0x5483ce) || !domainAllowed
      ? ((emailFilled = ![]),
        unfilledArr[_0x304b75(0x1c3)]({ input: _0x1016f3 }))
      : (emailFilled = !![]);
}
function phoneValidation(_0x2e92db, _0x29cb67, _0x4790fa) {
  if (phoneFormat) return _0x29cb67 >= _0x4790fa ? !![] : ![];
  else {
    if (_0x29cb67 >= _0x4790fa) return !![];
  }
}
function validation() {
  const _0x58b549 = _0x412c6a;
  $(steps[x])[_0x58b549(0x200)](_0x58b549(0x168)) && enableBtn();
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
    (textareaLength = $(steps[x])[_0x58b549(0x174)](_0x58b549(0x1eb))[
      _0x58b549(0x270)
    ]),
    (textInputLength = $(steps[x])[_0x58b549(0x174)](_0x58b549(0x24c))[
      "length"
    ]),
    (selectInputLength = $(steps[x])[_0x58b549(0x174)](_0x58b549(0x21a))[
      "length"
    ]),
    (emailInputLength = $(steps[x])[_0x58b549(0x174)](_0x58b549(0x1e1))[
      _0x58b549(0x270)
    ]),
    (checkboxInputLength = $(steps[x])[_0x58b549(0x174)](
      "input[type=\x22checkbox\x22]:visible",
    )[_0x58b549(0x270)]);
  textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0
    ? disableBtn()
    : enableBtn();
  checkCount = $(steps[x])[_0x58b549(0x200)]("checkbox")
    ? $(steps[x])[_0x58b549(0x200)](_0x58b549(0x1fc))
    : $(steps[x])[_0x58b549(0x174)](_0x58b549(0x1fb))["length"] > 0x0
      ? $(steps[x])
          [_0x58b549(0x174)](_0x58b549(0x1fb))
          [_0x58b549(0x200)](_0x58b549(0x1fc))
      : 0x0;
  if (!logicExtra)
    $(steps[x])[_0x58b549(0x174)](_0x58b549(0x1a3))["is"](_0x58b549(0x1dd)) &&
      (checkCount === "*" ||
      checkCount > $(steps[x])[_0x58b549(0x174)](_0x58b549(0x128))["length"]
        ? $(steps[x])
            [_0x58b549(0x174)](":input[type=\x22checkbox\x22]")
            [_0x58b549(0x14e)](function () {
              const _0x3b8b5f = _0x58b549;
              $(this)["is"](_0x3b8b5f(0x242))
                ? $(steps[x])[_0x3b8b5f(0x174)](_0x3b8b5f(0x166))[
                    _0x3b8b5f(0x270)
                  ] < 0x1 &&
                  ((checkboxFilled = !![]),
                  resetInputErrorMessage(
                    $(this)[_0x3b8b5f(0x153)](_0x3b8b5f(0x1e2)),
                  ))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0x3b8b5f(0x1c3)]({
                    input: $(this)["attr"](_0x3b8b5f(0x1e2)),
                  }));
            })
        : $(steps[x])[_0x58b549(0x174)](_0x58b549(0x1a9))[_0x58b549(0x270)] >=
            checkCount
          ? $(steps[x])[_0x58b549(0x174)](_0x58b549(0x166))[_0x58b549(0x270)] >
            0x0
            ? $(steps[x])
                ["find"](_0x58b549(0x166))
                ["each"](function () {
                  const _0x1cf972 = _0x58b549;
                  checkboxFilled = ![];
                  let _0x11e18d = $(steps[x])[_0x1cf972(0x174)](
                      _0x1cf972(0x166),
                    )[_0x1cf972(0x270)],
                    _0x309251 = $(steps[x])[_0x1cf972(0x174)](
                      ":input[type=\x22checkbox\x22][required]:checked",
                    )[_0x1cf972(0x270)];
                  console["log"](_0x11e18d - _0x309251),
                    _0x11e18d - _0x309251 === 0x0
                      ? ((checkboxFilled = !![]),
                        resetInputErrorMessage(
                          $(steps[x])
                            [_0x1cf972(0x174)](_0x1cf972(0x128))
                            [_0x1cf972(0x153)](_0x1cf972(0x1e2)),
                        ))
                      : ((checkboxFilled = ![]),
                        $(steps[x])
                          [_0x1cf972(0x174)](_0x1cf972(0x243))
                          [_0x1cf972(0x14e)](function () {
                            const _0x1f3c7b = _0x1cf972;
                            unfilledArr[_0x1f3c7b(0x1c3)]({
                              input: $(this)[_0x1f3c7b(0x153)](
                                _0x1f3c7b(0x1e2),
                              ),
                            });
                          }));
                })
            : ((checkboxFilled = !![]),
              resetInputErrorMessage(
                $(steps[x])
                  ["find"](_0x58b549(0x128))
                  [_0x58b549(0x153)](_0x58b549(0x1e2)),
              ))
          : ((checkboxFilled = ![]),
            $(steps[x])
              [_0x58b549(0x174)](_0x58b549(0x166))
              ["each"](function () {
                const _0x29e6ef = _0x58b549;
                $(this)["not"](_0x29e6ef(0x242)) &&
                  unfilledArr[_0x29e6ef(0x1c3)]({
                    input: $(this)[_0x29e6ef(0x153)]("name"),
                  });
              }),
            unfilledArr[_0x58b549(0x1c3)]({
              input: $(steps[x])
                ["find"](_0x58b549(0x128))
                [_0x58b549(0x153)](_0x58b549(0x1e2)),
            }))),
      $(steps[x])
        [_0x58b549(0x174)]("input:radio[required]")
        ["each"](function (_0x5d0c06) {
          const _0x5db9d8 = _0x58b549;
          var _0x61aed4 = $(this)[_0x5db9d8(0x153)](_0x5db9d8(0x1e2));
          $(_0x5db9d8(0x1f0) + _0x61aed4 + "\x22]:checked")[_0x5db9d8(0x270)] ==
          0x0
            ? (!empReqRadio[_0x5db9d8(0x174)](
                (_0x3d8205) => _0x3d8205[_0x5db9d8(0x14c)] === _0x5d0c06,
              ) && empReqRadio[_0x5db9d8(0x1c3)]({ input: _0x5d0c06 }),
              unfilledArr["push"]({
                input: $(this)[_0x5db9d8(0x153)](_0x5db9d8(0x1e2)),
              }))
            : (empReqRadio = empReqRadio[_0x5db9d8(0x272)](
                (_0x1c0258) => _0x1c0258[_0x5db9d8(0x14c)] !== _0x5d0c06,
              )),
            empReqRadio[_0x5db9d8(0x270)] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0x58b549(0x174)](_0x58b549(0x19b))
        ["each"](function (_0x16b216) {
          const _0x2a110f = _0x58b549;
          let _0x2b4bf6 = $(this)[_0x2a110f(0x219)]()[_0x2a110f(0x270)],
            _0x3547be = $(this)[_0x2a110f(0x200)]("min-character")
              ? $(this)["data"]("min-character")
              : 0x0;
          $(this)[_0x2a110f(0x219)]() !== "" && _0x2b4bf6 >= _0x3547be
            ? (empReqInput = empReqInput[_0x2a110f(0x272)](
                (_0x4ddca5) => _0x4ddca5["input"] !== _0x16b216,
              ))
            : (!empReqInput["find"](
                (_0x57557) => _0x57557[_0x2a110f(0x14c)] === _0x16b216,
              ) && empReqInput["push"]({ input: _0x16b216 }),
              unfilledArr[_0x2a110f(0x1c3)]({
                input: $(this)["attr"](_0x2a110f(0x1e2)),
              })),
            empReqInput[_0x2a110f(0x270)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x58b549(0x174)](_0x58b549(0x248))
        [_0x58b549(0x14e)](function (_0x58910e) {
          const _0x108028 = _0x58b549;
          let _0x272539 = $(this)[_0x108028(0x219)]()[_0x108028(0x270)],
            _0x3b59af = $(this)[_0x108028(0x200)](_0x108028(0x155))
              ? $(this)[_0x108028(0x200)](_0x108028(0x155))
              : 0x0;
          $(this)[_0x108028(0x219)]() !== "" && _0x272539 >= _0x3b59af
            ? (empReqPassword = empReqPassword[_0x108028(0x272)](
                (_0x29f89c) => _0x29f89c[_0x108028(0x14c)] !== _0x58910e,
              ))
            : (!empReqPassword[_0x108028(0x174)](
                (_0x1be61f) => _0x1be61f[_0x108028(0x14c)] === _0x58910e,
              ) && empReqPassword[_0x108028(0x1c3)]({ input: _0x58910e }),
              unfilledArr[_0x108028(0x1c3)]({
                input: $(this)[_0x108028(0x153)]("name"),
              })),
            empReqPassword[_0x108028(0x270)] === 0x0
              ? (passwordFilled = !![])
              : (passwordFilled = ![]);
        }),
      $(steps[x])
        [_0x58b549(0x174)](":input[type=\x22url\x22][required]")
        [_0x58b549(0x14e)](function (_0x30511c) {
          const _0x48d86b = _0x58b549;
          let _0x281b6d = $(this)[_0x48d86b(0x219)]()[_0x48d86b(0x270)],
            _0x205294 = $(this)[_0x48d86b(0x200)](_0x48d86b(0x155))
              ? $(this)["data"](_0x48d86b(0x155))
              : 0x0;
          $(this)[_0x48d86b(0x219)]() !== "" && _0x281b6d >= _0x205294
            ? (empReqTime = empReqTime["filter"](
                (_0x2e4b48) => _0x2e4b48[_0x48d86b(0x14c)] !== _0x30511c,
              ))
            : (!empReqTime[_0x48d86b(0x174)](
                (_0x5ec280) => _0x5ec280[_0x48d86b(0x14c)] === _0x30511c,
              ) && empReqUrl[_0x48d86b(0x1c3)]({ input: _0x30511c }),
              unfilledArr[_0x48d86b(0x1c3)]({
                input: $(this)[_0x48d86b(0x153)](_0x48d86b(0x1e2)),
              })),
            empReqTime[_0x48d86b(0x270)] === 0x0 &&
            validateURL($(this)[_0x48d86b(0x219)]())
              ? ((timeFilled = !![]), console[_0x48d86b(0x134)](timeFilled))
              : (timeFilled = ![]);
        }),
      $(steps[x])
        [_0x58b549(0x174)](":input[type=\x22time\x22][required]")
        [_0x58b549(0x14e)](function (_0x27948a) {
          const _0x4687f0 = _0x58b549;
          let _0x582b64 = $(this)[_0x4687f0(0x219)]()["length"],
            _0x17105e = $(this)[_0x4687f0(0x200)](_0x4687f0(0x155))
              ? $(this)[_0x4687f0(0x200)](_0x4687f0(0x155))
              : 0x0;
          $(this)[_0x4687f0(0x219)]() !== "" && _0x582b64 >= _0x17105e
            ? (empReqUrl = empReqUrl[_0x4687f0(0x272)](
                (_0x50f5c6) => _0x50f5c6[_0x4687f0(0x14c)] !== _0x27948a,
              ))
            : (!empReqUrl["find"](
                (_0x21a8db) => _0x21a8db["input"] === _0x27948a,
              ) && empReqUrl["push"]({ input: _0x27948a }),
              unfilledArr["push"]({
                input: $(this)[_0x4687f0(0x153)](_0x4687f0(0x1e2)),
              })),
            empReqUrl[_0x4687f0(0x270)] === 0x0 && validateURL($(this)["val"]())
              ? ((urlFilled = !![]), console[_0x4687f0(0x134)](urlFilled))
              : (urlFilled = ![]);
        }),
      $(steps[x])
        [_0x58b549(0x174)](_0x58b549(0x1fa))
        ["each"](function (_0x183c4e) {
          const _0x59d5da = _0x58b549;
          $(this)["val"]() !== ""
            ? (empReqDate = empReqDate[_0x59d5da(0x272)](
                (_0x152b84) => _0x152b84[_0x59d5da(0x14c)] !== _0x183c4e,
              ))
            : (!empReqDate[_0x59d5da(0x174)](
                (_0x3d97d6) => _0x3d97d6[_0x59d5da(0x14c)] === _0x183c4e,
              ) && empReqDate["push"]({ input: _0x183c4e }),
              unfilledArr[_0x59d5da(0x1c3)]({
                input: $(this)[_0x59d5da(0x153)]("name"),
              })),
            empReqDate[_0x59d5da(0x270)] === 0x0
              ? (dateFilled = !![])
              : (dateFilled = ![]);
        }),
      $(steps[x])
        [_0x58b549(0x174)](_0x58b549(0x1db))
        [_0x58b549(0x14e)](function (_0x20aee7) {
          const _0x3373a2 = _0x58b549;
          if ($(this)[_0x3373a2(0x219)]() !== "") {
            let _0x12ca82 = $(this)[_0x3373a2(0x219)]()[_0x3373a2(0x270)],
              _0x2d3ba7 = $(this)[_0x3373a2(0x200)](_0x3373a2(0x155))
                ? $(this)[_0x3373a2(0x200)](_0x3373a2(0x155))
                : 0x0;
            if ($(this)["data"](_0x3373a2(0x121))) {
              var _0xc806cb = phoneAutoFormat(
                $(this)[_0x3373a2(0x200)](_0x3373a2(0x121)),
              );
              $(this)["val"](_0xc806cb($(this)[_0x3373a2(0x219)]()));
            }
            phoneValidation($(this)[_0x3373a2(0x219)](), _0x12ca82, _0x2d3ba7)
              ? (empReqTel = empReqTel[_0x3373a2(0x272)](
                  (_0x1abfe2) => _0x1abfe2[_0x3373a2(0x14c)] !== _0x20aee7,
                ))
              : empReqTel[_0x3373a2(0x1c3)]({ input: _0x20aee7 });
          } else
            !empReqTel[_0x3373a2(0x174)](
              (_0x4d122a) => _0x4d122a[_0x3373a2(0x14c)] === _0x20aee7,
            ) && empReqTel[_0x3373a2(0x1c3)]({ input: _0x20aee7 }),
              unfilledArr[_0x3373a2(0x1c3)]({
                input: $(this)[_0x3373a2(0x153)](_0x3373a2(0x1e2)),
              });
          empReqTel[_0x3373a2(0x270)] === 0x0
            ? (telFilled = !![])
            : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x58b549(0x174)](_0x58b549(0x196))
        ["each"](function (_0x55904c) {
          const _0x41d415 = _0x58b549;
          $(this)[_0x41d415(0x219)]() !== ""
            ? (empReqFile = empReqFile[_0x41d415(0x272)](
                (_0x56a2d6) => _0x56a2d6[_0x41d415(0x14c)] !== _0x55904c,
              ))
            : (!empReqFile[_0x41d415(0x174)](
                (_0x3016e6) => _0x3016e6[_0x41d415(0x14c)] === _0x55904c,
              ) && empReqFile[_0x41d415(0x1c3)]({ input: _0x55904c }),
              unfilledArr[_0x41d415(0x1c3)]({
                input: $(this)[_0x41d415(0x153)]("name"),
              })),
            empReqFile[_0x41d415(0x270)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x58b549(0x174)](_0x58b549(0x21e))
        [_0x58b549(0x14e)](function (_0x3881a0) {
          const _0x2868cd = _0x58b549;
          let _0x3fa7c0 = $(this)["val"]()[_0x2868cd(0x270)],
            _0x65598c = $(this)["data"](_0x2868cd(0x155))
              ? $(this)["data"](_0x2868cd(0x155))
              : 0x0;
          $(this)["val"]() !== "" && _0x3fa7c0 >= _0x65598c
            ? (empReqNum = empReqNum[_0x2868cd(0x272)](
                (_0x4d77eb) => _0x4d77eb["input"] !== _0x3881a0,
              ))
            : (!empReqNum["find"](
                (_0x541ed6) => _0x541ed6[_0x2868cd(0x14c)] === _0x3881a0,
              ) && empReqNum[_0x2868cd(0x1c3)]({ input: _0x3881a0 }),
              unfilledArr[_0x2868cd(0x1c3)]({
                input: $(this)[_0x2868cd(0x153)](_0x2868cd(0x1e2)),
              })),
            empReqNum[_0x2868cd(0x270)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x58b549(0x174)](_0x58b549(0x193))
        [_0x58b549(0x14e)](function (_0x34ff9b) {
          const _0x3c9251 = _0x58b549;
          let _0x22a582 = $(this)[_0x3c9251(0x219)]();
          _0x22a582 === "" && (_0x22a582 = null),
            _0x22a582 != null
              ? (empReqSelect = empReqSelect[_0x3c9251(0x272)](
                  (_0x614103) => _0x614103[_0x3c9251(0x14c)] !== _0x34ff9b,
                ))
              : (!empReqSelect[_0x3c9251(0x174)](
                  (_0x55bd3b) => _0x55bd3b["input"] === _0x34ff9b,
                ) && empReqSelect[_0x3c9251(0x1c3)]({ input: _0x34ff9b }),
                unfilledArr[_0x3c9251(0x1c3)]({
                  input: $(this)[_0x3c9251(0x153)](_0x3c9251(0x1e2)),
                })),
            empReqSelect["length"] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x58b549(0x174)](_0x58b549(0x1b5))
        [_0x58b549(0x14e)](function (_0x2c8927) {
          const _0x35da88 = _0x58b549;
          let _0x5f4403 = $(this)[_0x35da88(0x219)]()[_0x35da88(0x270)],
            _0x1afef4 = $(this)[_0x35da88(0x200)]("min-character")
              ? $(this)["data"]("min-character")
              : 0x0;
          $(this)[_0x35da88(0x219)]() !== "" && _0x5f4403 >= _0x1afef4
            ? (empReqTextarea = empReqTextarea[_0x35da88(0x272)](
                (_0x306fec) => _0x306fec[_0x35da88(0x14c)] !== _0x2c8927,
              ))
            : (!empReqTextarea[_0x35da88(0x174)](
                (_0x584623) => _0x584623["input"] === _0x2c8927,
              ) && empReqTextarea[_0x35da88(0x1c3)]({ input: _0x2c8927 }),
              unfilledArr[_0x35da88(0x1c3)]({
                input: $(this)[_0x35da88(0x153)](_0x35da88(0x1e2)),
              })),
            empReqTextarea[_0x35da88(0x270)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x58b549(0x1a2))
        ["each"](function () {
          const _0x42196d = _0x58b549;
          $(this)[_0x42196d(0x219)]() !== ""
            ? validateEmail(
                $(this)[_0x42196d(0x219)](),
                $(this)[_0x42196d(0x200)](_0x42196d(0x249)),
                $(this)[_0x42196d(0x153)](_0x42196d(0x1e2)),
              )
            : ((emailFilled = ![]),
              unfilledArr["push"]({
                input: $(this)[_0x42196d(0x153)](_0x42196d(0x1e2)),
              }));
        });
  else {
    if ($(steps[x])[_0x58b549(0x200)](_0x58b549(0x168)))
      (answer = $(steps[x])
        [_0x58b549(0x174)](_0x58b549(0x164))
        [_0x58b549(0x200)]("go-to")),
        (selections = selections["filter"](
          (_0x5a52f7) => _0x5a52f7[_0x58b549(0x1b0)] !== x,
        )),
        selections["push"]({ step: x, selected: answer });
    else
      $(steps[x])
        [_0x58b549(0x174)](".active-answer-card")
        ["data"](_0x58b549(0x168)) &&
        ((answer = $(steps[x])
          [_0x58b549(0x174)](_0x58b549(0x21d))
          [_0x58b549(0x200)]("go-to")),
        (selections = selections["filter"](
          (_0x47bd39) => _0x47bd39[_0x58b549(0x1b0)] !== x,
        )),
        selections[_0x58b549(0x1c3)]({ step: x, selected: answer }));
    $(steps[x])
      [_0x58b549(0x174)](_0x58b549(0x21d))
      [_0x58b549(0x174)](_0x58b549(0x1a3))
      ["is"]("[type=\x22checkbox\x22]") &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])[_0x58b549(0x174)](":input[type=\x22checkbox\x22]")[
          _0x58b549(0x270)
        ]
        ? (console["log"](_0x58b549(0x1b3)),
          $(steps[x])
            ["find"](":input[type=\x22checkbox\x22]")
            ["each"](function () {
              const _0x297f64 = _0x58b549;
              $(this)["is"](_0x297f64(0x242))
                ? $(steps[x])["find"](":input[required]")[_0x297f64(0x270)] <
                    0x1 &&
                  ((skipTo = undefined),
                  $(this)
                    [_0x297f64(0x216)]("[data-skip-to]")
                    [_0x297f64(0x200)](_0x297f64(0x14b)) &&
                    (skipTo = $(this)
                      [_0x297f64(0x216)](_0x297f64(0x1f7))
                      ["data"](_0x297f64(0x14b))),
                  $(this)
                    [_0x297f64(0x216)](_0x297f64(0x164))
                    [_0x297f64(0x153)](_0x297f64(0x1ee)) &&
                    ((answer = $(this)
                      [_0x297f64(0x216)]("[data-go-to]")
                      ["attr"](_0x297f64(0x1ee))),
                    (selections = selections[_0x297f64(0x272)](
                      (_0x25da89) => _0x25da89[_0x297f64(0x1b0)] !== x,
                    )),
                    selections[_0x297f64(0x1c3)]({ step: x, selected: answer }),
                    skipTo &&
                      (selections["push"]({
                        step: skipTo - 0x2,
                        selected: answer,
                      }),
                      (objIndex = selections[_0x297f64(0x275)](
                        (_0x53752c) => _0x53752c[_0x297f64(0x1b0)] === x,
                      )),
                      (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                      (selections[objIndex][_0x297f64(0x25f)] = x))),
                  (checkboxFilled = !![]),
                  $(steps[x])[_0x297f64(0x174)](_0x297f64(0x1e7))["length"] >=
                    $(steps[x])[_0x297f64(0x174)](_0x297f64(0x166))["length"] &&
                    resetInputErrorMessage(
                      $(steps[x])
                        ["find"](_0x297f64(0x128))
                        [_0x297f64(0x153)]("name"),
                    ))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0x297f64(0x1c3)]({
                    input: $(this)["attr"]("name"),
                  }));
            }))
        : $(steps[x])
              [_0x58b549(0x174)](_0x58b549(0x21d))
              [_0x58b549(0x174)](_0x58b549(0x1a9))["length"] >= checkCount
          ? ($(steps[x])
              ["find"](_0x58b549(0x21d))
              [_0x58b549(0x174)](":input[type=\x22checkbox\x22]")
              ["parents"](_0x58b549(0x164))
              ["attr"](_0x58b549(0x1ee)) &&
              ((skipTo = undefined),
              $(steps[x])
                [_0x58b549(0x174)](_0x58b549(0x21d))
                ["find"](_0x58b549(0x128))
                [_0x58b549(0x216)]("[data-skip-to]")
                ["attr"](_0x58b549(0x25e)) &&
                (skipTo = $(steps[x])
                  ["find"](".active-answer-card")
                  [_0x58b549(0x174)](_0x58b549(0x1a9))
                  [_0x58b549(0x216)]("[data-skip-to]")
                  ["attr"](_0x58b549(0x25e))),
              (answer = $(steps[x])
                [_0x58b549(0x174)](_0x58b549(0x21d))
                ["find"](":input[type=\x22checkbox\x22]")
                [_0x58b549(0x216)](_0x58b549(0x164))
                [_0x58b549(0x153)](_0x58b549(0x1ee))),
              (selections = selections[_0x58b549(0x272)](
                (_0x4e4b43) => _0x4e4b43[_0x58b549(0x1b0)] !== x,
              )),
              selections[_0x58b549(0x1c3)]({ step: x, selected: answer }),
              skipTo &&
                ((selections = selections[_0x58b549(0x272)](
                  (_0x19c829) => _0x19c829["step"] !== skipTo - 0x2,
                )),
                selections[_0x58b549(0x1c3)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x58b549(0x275)](
                  (_0x5da2e9) => _0x5da2e9[_0x58b549(0x1b0)] === x,
                )),
                console[_0x58b549(0x134)](objIndex),
                (selections[objIndex][_0x58b549(0x1ed)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x58b549(0x25f)] = x),
                console[_0x58b549(0x134)](_0x58b549(0x23f)))),
            (checkboxFilled = !![]),
            $(steps[x])[_0x58b549(0x174)](_0x58b549(0x1e7))[_0x58b549(0x270)] >=
              $(steps[x])[_0x58b549(0x174)](
                ":input[type=\x22checkbox\x22][required]",
              )["length"] &&
              resetInputErrorMessage(
                $(steps[x])
                  [_0x58b549(0x174)](_0x58b549(0x128))
                  [_0x58b549(0x153)](_0x58b549(0x1e2)),
              ))
          : ((checkboxFilled = ![]),
            $(steps[x])
              [_0x58b549(0x174)](_0x58b549(0x166))
              ["each"](function () {
                const _0x4e78d8 = _0x58b549;
                $(this)[_0x4e78d8(0x209)](_0x4e78d8(0x242)) &&
                  unfilledArr["push"]({
                    input: $(this)[_0x4e78d8(0x153)]("name"),
                  });
              }))),
      $(steps[x])
        ["find"](_0x58b549(0x21d))
        [_0x58b549(0x174)](_0x58b549(0x152))
        [_0x58b549(0x14e)](function (_0x27c4fb) {
          const _0x576289 = _0x58b549;
          var _0x292794 = $(this)[_0x576289(0x153)](_0x576289(0x1e2));
          $(_0x576289(0x1f0) + _0x292794 + "\x22]:checked")[_0x576289(0x270)] ==
          0x0
            ? (!empReqRadio[_0x576289(0x174)](
                (_0x531534) => _0x531534["input"] === _0x27c4fb,
              ) && empReqRadio[_0x576289(0x1c3)]({ input: _0x27c4fb }),
              unfilledArr[_0x576289(0x1c3)]({
                input: $(this)[_0x576289(0x153)](_0x576289(0x1e2)),
              }))
            : (empReqRadio = empReqRadio["filter"](
                (_0xd6384d) => _0xd6384d[_0x576289(0x14c)] !== _0x27c4fb,
              )),
            empReqRadio["length"] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0x58b549(0x174)](".active-answer-card")
        [_0x58b549(0x174)](":input[type=\x22text\x22][required]")
        [_0x58b549(0x14e)](function (_0x5705ca) {
          const _0x143be6 = _0x58b549;
          let _0x1a1fdc = $(this)["val"]()["length"],
            _0x22df2f = $(this)[_0x143be6(0x200)](_0x143be6(0x155))
              ? $(this)["data"](_0x143be6(0x155))
              : 0x0;
          $(this)[_0x143be6(0x219)]() !== "" && _0x1a1fdc >= _0x22df2f
            ? (empReqInput = empReqInput[_0x143be6(0x272)](
                (_0x42b3b2) => _0x42b3b2[_0x143be6(0x14c)] !== _0x5705ca,
              ))
            : (!empReqInput[_0x143be6(0x174)](
                (_0x5eece6) => _0x5eece6[_0x143be6(0x14c)] === _0x5705ca,
              ) && empReqInput["push"]({ input: _0x5705ca }),
              unfilledArr[_0x143be6(0x1c3)]({
                input: $(this)[_0x143be6(0x153)](_0x143be6(0x1e2)),
              })),
            empReqInput[_0x143be6(0x270)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x58b549(0x21d))
        ["find"](_0x58b549(0x163))
        [_0x58b549(0x14e)](function (_0x1787f1) {
          const _0x421552 = _0x58b549;
          (skipTo = undefined),
            $(this)
              [_0x421552(0x216)](_0x421552(0x1f7))
              ["data"](_0x421552(0x14b)) !== "" &&
              (skipTo = $(this)
                ["parents"]("[data-skip-to]")
                [_0x421552(0x200)](_0x421552(0x14b))),
            $(this)
              [_0x421552(0x216)](_0x421552(0x164))
              [_0x421552(0x153)](_0x421552(0x1ee)) &&
              ((answer = $(this)
                [_0x421552(0x216)]("[data-go-to]")
                [_0x421552(0x153)](_0x421552(0x1ee))),
              (selections = selections["filter"](
                (_0x427e30) => _0x427e30[_0x421552(0x1b0)] !== x,
              )),
              selections[_0x421552(0x1c3)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0x421552(0x275)](
                  (_0x36374b) => _0x36374b["step"] === x,
                )),
                (selections[objIndex][_0x421552(0x1ed)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x421552(0x25f)] = x)));
        }),
      $(steps[x])
        [_0x58b549(0x174)](_0x58b549(0x21d))
        ["find"](_0x58b549(0x248))
        ["each"](function (_0x54ecb0) {
          const _0x56a5cc = _0x58b549;
          let _0x32a9be = $(this)[_0x56a5cc(0x219)]()[_0x56a5cc(0x270)],
            _0xa506ac = $(this)["data"]("min-character")
              ? $(this)[_0x56a5cc(0x200)]("min-character")
              : 0x0;
          $(this)[_0x56a5cc(0x219)]() !== "" && _0x32a9be >= _0xa506ac
            ? (empReqPassword = empReqPassword[_0x56a5cc(0x272)](
                (_0x5fadb) => _0x5fadb[_0x56a5cc(0x14c)] !== _0x54ecb0,
              ))
            : (!empReqPassword[_0x56a5cc(0x174)](
                (_0x2864e0) => _0x2864e0[_0x56a5cc(0x14c)] === _0x54ecb0,
              ) && empReqPassword[_0x56a5cc(0x1c3)]({ input: _0x54ecb0 }),
              unfilledArr[_0x56a5cc(0x1c3)]({
                input: $(this)[_0x56a5cc(0x153)](_0x56a5cc(0x1e2)),
              })),
            empReqPassword[_0x56a5cc(0x270)] === 0x0
              ? (passwordFilled = !![])
              : (passwordFilled = ![]);
        }),
      $(steps[x])
        [_0x58b549(0x174)](_0x58b549(0x21d))
        [_0x58b549(0x174)](_0x58b549(0x18f))
        ["each"](function (_0x2fc0d3) {
          const _0x565691 = _0x58b549;
          (skipTo = undefined),
            $(this)
              [_0x565691(0x216)](_0x565691(0x1f7))
              ["data"](_0x565691(0x14b)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0x565691(0x1f7))
                ["data"](_0x565691(0x14b))),
            $(this)["parents"](_0x565691(0x164))["attr"]("data-go-to") &&
              ((answer = $(this)
                [_0x565691(0x216)](_0x565691(0x164))
                ["attr"](_0x565691(0x1ee))),
              (selections = selections[_0x565691(0x272)](
                (_0x5c56b0) => _0x5c56b0[_0x565691(0x1b0)] !== x,
              )),
              selections[_0x565691(0x1c3)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x565691(0x1c3)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x565691(0x275)](
                  (_0x381319) => _0x381319["step"] === x,
                )),
                (selections[objIndex][_0x565691(0x1ed)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x565691(0x25f)] = x)));
        }),
      $(steps[x])
        ["find"](_0x58b549(0x21d))
        ["find"](_0x58b549(0x194))
        [_0x58b549(0x14e)](function (_0x25d69c) {
          const _0x6f21e2 = _0x58b549;
          let _0x2b5dfa = $(this)[_0x6f21e2(0x219)]()[_0x6f21e2(0x270)],
            _0x584163 = $(this)["data"](_0x6f21e2(0x155))
              ? $(this)[_0x6f21e2(0x200)](_0x6f21e2(0x155))
              : 0x0;
          $(this)[_0x6f21e2(0x219)]() !== "" && _0x2b5dfa >= _0x584163
            ? (empReqUrl = empReqUrl[_0x6f21e2(0x272)](
                (_0x308fa9) => _0x308fa9[_0x6f21e2(0x14c)] !== _0x25d69c,
              ))
            : (!empReqUrl[_0x6f21e2(0x174)](
                (_0x2f0b71) => _0x2f0b71[_0x6f21e2(0x14c)] === _0x25d69c,
              ) && empReqUrl[_0x6f21e2(0x1c3)]({ input: _0x25d69c }),
              unfilledArr[_0x6f21e2(0x1c3)]({
                input: $(this)["attr"]("name"),
              })),
            empReqUrl[_0x6f21e2(0x270)] === 0x0 && validateURL($(this)["val"]())
              ? (urlFilled = !![])
              : (urlFilled = ![]);
        }),
      $(steps[x])
        [_0x58b549(0x174)](".active-answer-card")
        [_0x58b549(0x174)](":input[type=\x22url\x22]")
        ["each"](function (_0x2e1e21) {
          const _0x1f8c3d = _0x58b549;
          (skipTo = undefined),
            $(this)[_0x1f8c3d(0x216)]("[data-skip-to]")["data"]("skip-to") !==
              "" &&
              (skipTo = $(this)
                [_0x1f8c3d(0x216)](_0x1f8c3d(0x1f7))
                [_0x1f8c3d(0x200)]("skip-to")),
            $(this)
              ["parents"](_0x1f8c3d(0x164))
              [_0x1f8c3d(0x153)](_0x1f8c3d(0x1ee)) &&
              ((answer = $(this)
                [_0x1f8c3d(0x216)](_0x1f8c3d(0x164))
                [_0x1f8c3d(0x153)](_0x1f8c3d(0x1ee))),
              (selections = selections[_0x1f8c3d(0x272)](
                (_0x196060) => _0x196060[_0x1f8c3d(0x1b0)] !== x,
              )),
              selections[_0x1f8c3d(0x1c3)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x1f8c3d(0x1c3)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x515150) => _0x515150[_0x1f8c3d(0x1b0)] === x,
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x1f8c3d(0x25f)] = x)));
        }),
      $(steps[x])
        ["find"](_0x58b549(0x21d))
        [_0x58b549(0x174)](":input[type=\x22date\x22][required]")
        ["each"](function (_0x5a5177) {
          const _0x4e37d8 = _0x58b549;
          $(this)[_0x4e37d8(0x219)]() !== ""
            ? (empReqDate = empReqDate[_0x4e37d8(0x272)](
                (_0x27afe3) => _0x27afe3[_0x4e37d8(0x14c)] !== _0x5a5177,
              ))
            : (!empReqDate["find"](
                (_0xe5ea0f) => _0xe5ea0f[_0x4e37d8(0x14c)] === _0x5a5177,
              ) && empReqDate[_0x4e37d8(0x1c3)]({ input: _0x5a5177 }),
              unfilledArr[_0x4e37d8(0x1c3)]({
                input: $(this)["attr"](_0x4e37d8(0x1e2)),
              })),
            empReqDate["length"] === 0x0
              ? (dateFilled = !![])
              : (dateFilled = ![]);
        }),
      $(steps[x])
        [_0x58b549(0x174)](_0x58b549(0x21d))
        [_0x58b549(0x174)](_0x58b549(0x1c7))
        [_0x58b549(0x14e)](function (_0x4101bc) {
          const _0x18c0c7 = _0x58b549;
          (skipTo = undefined),
            $(this)
              ["parents"](_0x18c0c7(0x1f7))
              [_0x18c0c7(0x200)](_0x18c0c7(0x14b)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0x18c0c7(0x1f7))
                [_0x18c0c7(0x200)]("skip-to")),
            $(this)
              [_0x18c0c7(0x216)](_0x18c0c7(0x164))
              ["attr"](_0x18c0c7(0x1ee)) &&
              ((answer = $(this)
                [_0x18c0c7(0x216)]("[data-go-to]")
                [_0x18c0c7(0x153)]("data-go-to")),
              (selections = selections[_0x18c0c7(0x272)](
                (_0x4e2760) => _0x4e2760[_0x18c0c7(0x1b0)] !== x,
              )),
              selections[_0x18c0c7(0x1c3)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x18c0c7(0x1c3)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x18c0c7(0x275)](
                  (_0x1e0a2e) => _0x1e0a2e[_0x18c0c7(0x1b0)] === x,
                )),
                (selections[objIndex][_0x18c0c7(0x1ed)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        ["find"](_0x58b549(0x21d))
        ["find"](_0x58b549(0x245))
        [_0x58b549(0x14e)](function (_0xbe83d5) {
          const _0x412794 = _0x58b549;
          $(this)["val"]() !== ""
            ? (empReqTime = empReqTime[_0x412794(0x272)](
                (_0xfe6a14) => _0xfe6a14[_0x412794(0x14c)] !== _0xbe83d5,
              ))
            : (!empReqTime[_0x412794(0x174)](
                (_0x359c31) => _0x359c31[_0x412794(0x14c)] === _0xbe83d5,
              ) && empReqTime[_0x412794(0x1c3)]({ input: _0xbe83d5 }),
              unfilledArr["push"]({
                input: $(this)[_0x412794(0x153)](_0x412794(0x1e2)),
              })),
            empReqTime["length"] === 0x0
              ? (timeFilled = !![])
              : (timeFilled = ![]);
        }),
      $(steps[x])
        [_0x58b549(0x174)](_0x58b549(0x21d))
        [_0x58b549(0x174)](":input[type=\x22time\x22]")
        [_0x58b549(0x14e)](function (_0x31a1cc) {
          const _0x578b6e = _0x58b549;
          (skipTo = undefined),
            $(this)
              [_0x578b6e(0x216)](_0x578b6e(0x1f7))
              [_0x578b6e(0x200)]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0x578b6e(0x216)](_0x578b6e(0x1f7))
                [_0x578b6e(0x200)](_0x578b6e(0x14b))),
            $(this)
              [_0x578b6e(0x216)](_0x578b6e(0x164))
              [_0x578b6e(0x153)](_0x578b6e(0x1ee)) &&
              ((answer = $(this)
                [_0x578b6e(0x216)](_0x578b6e(0x164))
                ["attr"](_0x578b6e(0x1ee))),
              (selections = selections[_0x578b6e(0x272)](
                (_0x18788b) => _0x18788b["step"] !== x,
              )),
              selections[_0x578b6e(0x1c3)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x578b6e(0x1c3)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x578b6e(0x275)](
                  (_0x479d09) => _0x479d09[_0x578b6e(0x1b0)] === x,
                )),
                (selections[objIndex][_0x578b6e(0x1ed)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        ["find"](_0x58b549(0x21d))
        ["find"](_0x58b549(0x21e))
        ["each"](function (_0x2b0d00) {
          const _0x1a9215 = _0x58b549;
          let _0x5643dd = $(this)[_0x1a9215(0x219)]()[_0x1a9215(0x270)],
            _0x19b2bf = $(this)["data"](_0x1a9215(0x155))
              ? $(this)["data"](_0x1a9215(0x155))
              : 0x0;
          $(this)[_0x1a9215(0x219)]() !== "" && _0x5643dd >= _0x19b2bf
            ? (empReqNum = empReqNum[_0x1a9215(0x272)](
                (_0x5735f8) => _0x5735f8[_0x1a9215(0x14c)] !== _0x2b0d00,
              ))
            : (!empReqNum[_0x1a9215(0x174)](
                (_0x2039ac) => _0x2039ac[_0x1a9215(0x14c)] === _0x2b0d00,
              ) && empReqNum["push"]({ input: _0x2b0d00 }),
              unfilledArr[_0x1a9215(0x1c3)]({
                input: $(this)[_0x1a9215(0x153)](_0x1a9215(0x1e2)),
              })),
            empReqNum[_0x1a9215(0x270)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x58b549(0x174)](_0x58b549(0x21d))
        [_0x58b549(0x174)](_0x58b549(0x135))
        ["each"](function (_0x4b7530) {
          const _0x1775c8 = _0x58b549;
          (skipTo = undefined),
            $(this)
              [_0x1775c8(0x216)](_0x1775c8(0x1f7))
              ["data"](_0x1775c8(0x14b)) !== "" &&
              (skipTo = $(this)
                [_0x1775c8(0x216)](_0x1775c8(0x1f7))
                [_0x1775c8(0x200)]("skip-to")),
            $(this)["parents"](_0x1775c8(0x164))["attr"]("data-go-to") &&
              ((answer = $(this)
                [_0x1775c8(0x216)]("[data-go-to]")
                ["attr"](_0x1775c8(0x1ee))),
              (selections = selections[_0x1775c8(0x272)](
                (_0x4b0966) => _0x4b0966[_0x1775c8(0x1b0)] !== x,
              )),
              selections[_0x1775c8(0x1c3)]({ step: x, selected: answer }),
              skipTo &&
                (selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0x1775c8(0x275)](
                  (_0x336623) => _0x336623[_0x1775c8(0x1b0)] === x,
                )),
                (selections[objIndex][_0x1775c8(0x1ed)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x1775c8(0x25f)] = x)));
        }),
      $(steps[x])
        ["find"](_0x58b549(0x21d))
        [_0x58b549(0x174)](":input[type=\x22tel\x22][required]")
        [_0x58b549(0x14e)](function (_0xc99d93) {
          const _0xfc606f = _0x58b549;
          if ($(this)["val"]() !== "") {
            let _0x28f53b = $(this)[_0xfc606f(0x219)]()["length"],
              _0x2cf5ae = $(this)[_0xfc606f(0x200)](_0xfc606f(0x155))
                ? $(this)[_0xfc606f(0x200)](_0xfc606f(0x155))
                : 0x0;
            if ($(this)[_0xfc606f(0x200)]("phone-autoformat")) {
              var _0x2f719a = phoneAutoFormat(
                $(this)[_0xfc606f(0x200)]("phone-autoformat"),
              );
              $(this)[_0xfc606f(0x219)](_0x2f719a($(this)[_0xfc606f(0x219)]()));
            }
            phoneValidation($(this)[_0xfc606f(0x219)](), _0x28f53b, _0x2cf5ae)
              ? (empReqTel = empReqTel[_0xfc606f(0x272)](
                  (_0x478e85) => _0x478e85[_0xfc606f(0x14c)] !== _0xc99d93,
                ))
              : empReqTel["push"]({ input: _0xc99d93 });
          } else
            !empReqTel["find"](
              (_0x172b86) => _0x172b86["input"] === _0xc99d93,
            ) && empReqTel[_0xfc606f(0x1c3)]({ input: _0xc99d93 }),
              unfilledArr[_0xfc606f(0x1c3)]({
                input: $(this)[_0xfc606f(0x153)](_0xfc606f(0x1e2)),
              });
          empReqTel["length"] === 0x0 ? (telFilled = !![]) : (telFilled = ![]);
        }),
      $(steps[x])
        ["find"](".active-answer-card")
        [_0x58b549(0x174)](_0x58b549(0x22b))
        ["each"](function (_0x6e9a85) {
          const _0x9d5a07 = _0x58b549;
          (skipTo = undefined),
            $(this)["parents"](_0x9d5a07(0x1f7))["data"]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0x9d5a07(0x216)]("[data-skip-to]")
                [_0x9d5a07(0x200)](_0x9d5a07(0x14b))),
            $(this)
              [_0x9d5a07(0x216)]("[data-go-to]")
              [_0x9d5a07(0x153)]("data-go-to") &&
              ((answer = $(this)
                ["parents"](_0x9d5a07(0x164))
                ["attr"](_0x9d5a07(0x1ee))),
              (selections = selections[_0x9d5a07(0x272)](
                (_0x54dfd2) => _0x54dfd2[_0x9d5a07(0x1b0)] !== x,
              )),
              selections[_0x9d5a07(0x1c3)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x9d5a07(0x1c3)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x9d5a07(0x275)](
                  (_0x55bd62) => _0x55bd62[_0x9d5a07(0x1b0)] === x,
                )),
                (selections[objIndex][_0x9d5a07(0x1ed)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x58b549(0x174)](_0x58b549(0x21d))
        [_0x58b549(0x174)](_0x58b549(0x196))
        [_0x58b549(0x14e)](function (_0x25de7c) {
          const _0x520907 = _0x58b549;
          $(this)[_0x520907(0x219)]() !== ""
            ? (empReqFile = empReqFile[_0x520907(0x272)](
                (_0x4c2a4c) => _0x4c2a4c["input"] !== _0x25de7c,
              ))
            : (!empReqFile[_0x520907(0x174)](
                (_0x316ef0) => _0x316ef0[_0x520907(0x14c)] === _0x25de7c,
              ) && empReqFile[_0x520907(0x1c3)]({ input: _0x25de7c }),
              unfilledArr["push"]({
                input: $(this)[_0x520907(0x153)](_0x520907(0x1e2)),
              })),
            empReqFile[_0x520907(0x270)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x58b549(0x174)](".active-answer-card")
        [_0x58b549(0x174)](":input[type=\x22file\x22]")
        ["each"](function (_0x3e71be) {
          const _0x131757 = _0x58b549;
          (skipTo = undefined),
            $(this)
              [_0x131757(0x216)](_0x131757(0x1f7))
              [_0x131757(0x200)]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0x131757(0x216)]("[data-skip-to]")
                ["data"](_0x131757(0x14b))),
            $(this)
              [_0x131757(0x216)](_0x131757(0x164))
              [_0x131757(0x153)](_0x131757(0x1ee)) &&
              ((answer = $(this)
                [_0x131757(0x216)](_0x131757(0x164))
                [_0x131757(0x153)](_0x131757(0x1ee))),
              (selections = selections[_0x131757(0x272)](
                (_0x1afb2f) => _0x1afb2f[_0x131757(0x1b0)] !== x,
              )),
              selections[_0x131757(0x1c3)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x131757(0x1c3)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x131757(0x275)](
                  (_0x7b70f1) => _0x7b70f1[_0x131757(0x1b0)] === x,
                )),
                (selections[objIndex][_0x131757(0x1ed)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x131757(0x25f)] = x)));
        }),
      $(steps[x])
        [_0x58b549(0x174)](_0x58b549(0x21d))
        [_0x58b549(0x174)](_0x58b549(0x193))
        [_0x58b549(0x14e)](function (_0x1ab523) {
          const _0x16f743 = _0x58b549;
          console[_0x16f743(0x134)]($(this)[_0x16f743(0x219)]()),
            $(this)[_0x16f743(0x219)]() !== null &&
            $(this)[_0x16f743(0x219)]() !== ""
              ? (empReqSelect = empReqSelect["filter"](
                  (_0x1f1b83) => _0x1f1b83[_0x16f743(0x14c)] !== _0x1ab523,
                ))
              : (!empReqSelect["find"](
                  (_0x151374) => _0x151374[_0x16f743(0x14c)] === _0x1ab523,
                ) && empReqSelect[_0x16f743(0x1c3)]({ input: _0x1ab523 }),
                unfilledArr[_0x16f743(0x1c3)]({
                  input: $(this)[_0x16f743(0x153)]("name"),
                })),
            empReqSelect[_0x16f743(0x270)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x58b549(0x174)](_0x58b549(0x21d))
        [_0x58b549(0x174)](_0x58b549(0x1a5))
        ["each"](function (_0x11f4be) {
          const _0x283aa8 = _0x58b549;
          (skipTo = undefined),
            $(this)
              [_0x283aa8(0x216)](_0x283aa8(0x1f7))
              ["data"](_0x283aa8(0x14b)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0x283aa8(0x1f7))
                [_0x283aa8(0x200)](_0x283aa8(0x14b))),
            $(this)
              [_0x283aa8(0x216)](_0x283aa8(0x164))
              ["attr"](_0x283aa8(0x1ee)) &&
              ((answer = $(this)
                [_0x283aa8(0x216)](_0x283aa8(0x164))
                [_0x283aa8(0x153)](_0x283aa8(0x1ee))),
              (selections = selections[_0x283aa8(0x272)](
                (_0x5c04e8) => _0x5c04e8[_0x283aa8(0x1b0)] !== x,
              )),
              selections[_0x283aa8(0x1c3)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x283aa8(0x1c3)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x37f3fc) => _0x37f3fc["step"] === x,
                )),
                (selections[objIndex][_0x283aa8(0x1ed)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x283aa8(0x25f)] = x)));
        }),
      $(steps[x])
        [_0x58b549(0x174)](_0x58b549(0x21d))
        ["find"](_0x58b549(0x1b5))
        ["each"](function (_0x4df8c7) {
          const _0x43688c = _0x58b549;
          let _0x24cc1f = $(this)[_0x43688c(0x219)]()[_0x43688c(0x270)],
            _0x28bcaa = $(this)[_0x43688c(0x200)](_0x43688c(0x155))
              ? $(this)[_0x43688c(0x200)](_0x43688c(0x155))
              : 0x0;
          $(this)[_0x43688c(0x219)]() !== "" && _0x24cc1f >= _0x28bcaa
            ? (empReqTextarea = empReqTextarea[_0x43688c(0x272)](
                (_0x3ba43e) => _0x3ba43e[_0x43688c(0x14c)] !== _0x4df8c7,
              ))
            : (!empReqTextarea[_0x43688c(0x174)](
                (_0x23e8ee) => _0x23e8ee["input"] === _0x4df8c7,
              ) && empReqTextarea[_0x43688c(0x1c3)]({ input: _0x4df8c7 }),
              unfilledArr["push"]({
                input: $(this)[_0x43688c(0x153)](_0x43688c(0x1e2)),
              })),
            empReqTextarea[_0x43688c(0x270)] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x58b549(0x174)](_0x58b549(0x21d))
        [_0x58b549(0x174)]("textarea")
        [_0x58b549(0x14e)](function (_0x29d38c) {
          const _0x267a63 = _0x58b549;
          (skipTo = undefined),
            $(this)
              [_0x267a63(0x216)](_0x267a63(0x1f7))
              [_0x267a63(0x200)]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0x267a63(0x216)](_0x267a63(0x1f7))
                [_0x267a63(0x200)]("skip-to")),
            $(this)
              [_0x267a63(0x216)](_0x267a63(0x164))
              ["attr"](_0x267a63(0x1ee)) &&
              ((answer = $(this)
                [_0x267a63(0x216)](_0x267a63(0x164))
                ["attr"]("data-go-to")),
              (selections = selections[_0x267a63(0x272)](
                (_0x183ac0) => _0x183ac0[_0x267a63(0x1b0)] !== x,
              )),
              selections[_0x267a63(0x1c3)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x267a63(0x1c3)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x57024e) => _0x57024e[_0x267a63(0x1b0)] === x,
                )),
                (selections[objIndex][_0x267a63(0x1ed)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x267a63(0x25f)] = x)));
        }),
      $(steps[x])
        [_0x58b549(0x174)](".active-answer-card")
        ["find"](_0x58b549(0x1a2))
        [_0x58b549(0x14e)](function (_0x49eb62) {
          const _0x40a83f = _0x58b549;
          $(this)[_0x40a83f(0x219)]() !== ""
            ? validateEmail(
                $(this)[_0x40a83f(0x219)](),
                $(this)["data"]("block-domain"),
                $(this)[_0x40a83f(0x153)](_0x40a83f(0x1e2)),
              )
            : ((emailFilled = ![]),
              unfilledArr[_0x40a83f(0x1c3)]({
                input: $(this)[_0x40a83f(0x153)](_0x40a83f(0x1e2)),
              }));
        }),
      $(steps[x])
        [_0x58b549(0x174)](".active-answer-card")
        [_0x58b549(0x174)](_0x58b549(0x12d))
        [_0x58b549(0x14e)](function (_0xe72c4f) {
          const _0x156287 = _0x58b549;
          (skipTo = undefined),
            $(this)
              ["parents"](_0x156287(0x1f7))
              [_0x156287(0x200)](_0x156287(0x14b)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0x156287(0x1f7))
                [_0x156287(0x200)]("skip-to")),
            $(this)[_0x156287(0x216)](_0x156287(0x164))["attr"]("data-go-to") &&
              ((answer = $(this)
                [_0x156287(0x216)]("[data-go-to]")
                [_0x156287(0x153)](_0x156287(0x1ee))),
              (selections = selections[_0x156287(0x272)](
                (_0x50ebdb) => _0x50ebdb[_0x156287(0x1b0)] !== x,
              )),
              selections[_0x156287(0x1c3)]({ step: x, selected: answer }),
              skipTo &&
                (selections[_0x156287(0x1c3)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x47b4da) => _0x47b4da["step"] === x,
                )),
                (selections[objIndex][_0x156287(0x1ed)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x156287(0x25f)] = x)));
        });
  }
  $(steps[x])
    [_0x58b549(0x174)](":input[type=\x22radio\x22]")
    ["is"](_0x58b549(0x242)) &&
    ((selArr = []),
    $(steps)
      [_0x58b549(0x174)]("[data-selected]:checked")
      [_0x58b549(0x14e)](function (_0x36e2fb, _0xb29f93) {
        const _0x423557 = _0x58b549;
        selArr["push"]({
          selected: $(this)[_0x423557(0x200)](_0x423557(0x15b)),
        });
      }),
    (selString = []),
    selArr["forEach"]((_0x5ad3b2) =>
      selString[_0x58b549(0x1c3)](_0x5ad3b2["selected"]),
    ),
    $(steps[x])
      [_0x58b549(0x174)](_0x58b549(0x21d))
      [_0x58b549(0x174)](_0x58b549(0x199))
      [_0x58b549(0x14e)](function () {
        const _0xacce54 = _0x58b549;
        skipTo = undefined;
        if (
          $(this)
            [_0xacce54(0x216)](_0xacce54(0x1f7))
            [_0xacce54(0x200)]("skip-to")
        )
          skipTo = $(this)
            [_0xacce54(0x216)](_0xacce54(0x1f7))
            [_0xacce54(0x200)](_0xacce54(0x14b));
        else
          $(this)[_0xacce54(0x200)](_0xacce54(0x14b)) &&
            (skipTo = $(this)[_0xacce54(0x200)](_0xacce54(0x14b)));
        selections = selections[_0xacce54(0x272)](
          (_0x4625e7) => _0x4625e7["step"] !== x,
        );
        if ($(this)[_0xacce54(0x200)](_0xacce54(0x19d)))
          (answer = $(this)["attr"]("data-go-to")),
            console[_0xacce54(0x134)](answer, selections),
            selections["push"]({ step: x, selected: answer }),
            skipTo &&
              (selections["push"]({ step: skipTo - 0x2, selected: answer }),
              (objIndex = selections[_0xacce54(0x275)](
                (_0x5c64d0) => _0x5c64d0[_0xacce54(0x1b0)] === x,
              )),
              (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0xacce54(0x25f)] = x));
        else
          $(this)
            [_0xacce54(0x216)](_0xacce54(0x164))
            [_0xacce54(0x200)](_0xacce54(0x19d)) &&
            ((answer = $(this)
              [_0xacce54(0x216)](_0xacce54(0x164))
              [_0xacce54(0x200)](_0xacce54(0x19d))),
            selections["push"]({ step: x, selected: answer }),
            skipTo &&
              (selections[_0xacce54(0x1c3)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections["findIndex"](
                (_0xada49) => _0xada49[_0xacce54(0x1b0)] === x,
              )),
              (selections[objIndex][_0xacce54(0x1ed)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0xacce54(0x25f)] = x)));
      }),
    logicExtra
      ? ($(steps[x])
          [_0x58b549(0x174)](_0x58b549(0x21d))
          [_0x58b549(0x174)](_0x58b549(0x140))
          [_0x58b549(0x200)]("radio-skip") === !![] ||
          $(steps[x])
            ["find"](_0x58b549(0x1a0))
            [_0x58b549(0x200)](_0x58b549(0x25d)) === !![]) &&
        skip &&
        selections[_0x58b549(0x272)](
          (_0x51cb18) => _0x51cb18[_0x58b549(0x1b0)] === x,
        )[_0x58b549(0x270)] > 0x0 &&
        textareaLength === 0x0 &&
        textInputLength === 0x0 &&
        emailInputLength === 0x0 &&
        checkboxInputLength === 0x0 &&
        setTimeout(
          function () {
            (next = !![]), nextStep(), selectionQuiz();
          },
          $(steps[x])
            ["find"](_0x58b549(0x250))
            [_0x58b549(0x200)](_0x58b549(0x18b)),
        )
      : $(steps[x])
          [_0x58b549(0x174)](_0x58b549(0x140))
          [_0x58b549(0x200)](_0x58b549(0x25d)) === !![] &&
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
            [_0x58b549(0x174)](_0x58b549(0x250))
            ["data"](_0x58b549(0x18b)),
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
  const _0x2949e5 = _0x412c6a;
  $(_0x2949e5(0x24a))[_0x2949e5(0x124)](),
    unfilledArr[_0x2949e5(0x270)] > 0x0 &&
      unfilledArr[_0x2949e5(0x12e)](function (_0x4e696e) {
        const _0x37fdab = _0x2949e5;
        $(_0x37fdab(0x256) + _0x4e696e[_0x37fdab(0x14c)] + "\x22]")
          [_0x37fdab(0x1e6)](_0x37fdab(0x24a))
          [_0x37fdab(0x1cf)](),
          $(_0x37fdab(0x256) + _0x4e696e[_0x37fdab(0x14c)] + "\x22]")
            [_0x37fdab(0x216)]()
            ["children"](_0x37fdab(0x24a))
            ["fadeIn"](),
          $(_0x37fdab(0x13d) + _0x4e696e[_0x37fdab(0x14c)] + "\x22]")
            ["siblings"](_0x37fdab(0x24a))
            [_0x37fdab(0x1cf)](),
          $(_0x37fdab(0x18a) + _0x4e696e[_0x37fdab(0x14c)] + "\x22]")
            [_0x37fdab(0x1e6)](_0x37fdab(0x24a))
            [_0x37fdab(0x1cf)]();
      });
}
function resetInputErrorMessage(_0x3b94f6) {
  const _0x32718b = _0x412c6a;
  $(_0x32718b(0x256) + _0x3b94f6 + "\x22]")
    [_0x32718b(0x1e6)](_0x32718b(0x24a))
    ["hide"](),
    $(_0x32718b(0x256) + _0x3b94f6 + "\x22]")
      [_0x32718b(0x216)]()
      [_0x32718b(0x1ac)](_0x32718b(0x24a))
      [_0x32718b(0x124)](),
    $("textarea[name=\x22" + _0x3b94f6 + "\x22]")
      [_0x32718b(0x1e6)](_0x32718b(0x24a))
      [_0x32718b(0x124)](),
    $(_0x32718b(0x18a) + _0x3b94f6 + "\x22]")
      [_0x32718b(0x1e6)](_0x32718b(0x24a))
      ["hide"]();
}
function increaseCurstep() {
  const _0x4e7472 = _0x412c6a;
  countCard
    ? ((curStep = curStep + 0x1),
      $("[data-text=\x22total-steps\x22]")[_0x4e7472(0x1d4)](steps["length"]))
    : $(steps[x])[_0x4e7472(0x200)]("card")
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    $("[data-text=\x22current-step\x22]")[_0x4e7472(0x1d4)](curStep);
}
function decreaseCurstep() {
  const _0x43140d = _0x412c6a;
  countCard
    ? ((curStep = curStep - 0x1),
      $(_0x43140d(0x141))["text"](steps[_0x43140d(0x270)]))
    : $(steps[x])[_0x43140d(0x200)]("card")
      ? (curStep = curStep - 0x0)
      : (curStep = curStep - 0x1),
    $(_0x43140d(0x260))[_0x43140d(0x1d4)](curStep);
}
$("[data-form=\x22submit-btn\x22]")["on"](
  _0x412c6a(0x19a),
  function (_0x5af65a) {
    const _0x26d460 = _0x412c6a;
    console[_0x26d460(0x134)](_0x26d460(0x232)),
      $(this)[_0x26d460(0x200)](_0x26d460(0x251)) &&
        (redirectTo = $(this)["data"](_0x26d460(0x251))),
      !$(this)[_0x26d460(0x200)](_0x26d460(0x156)) &&
        (newTab = $(this)["data"](_0x26d460(0x156))),
      (successCard = $(this)[_0x26d460(0x200)](_0x26d460(0x15e))),
      _0x5af65a[_0x26d460(0x120)](),
      _0x5af65a[_0x26d460(0x26b)](),
      logicExtra &&
        ($(this)[_0x26d460(0x25c)]("novalidate", !![]),
        $(steps)
          [_0x26d460(0x174)](_0x26d460(0x1a3))
          [_0x26d460(0x25c)]("required", ![])),
      localStorage[_0x26d460(0x257)]("filledInput"),
      fill
        ? ($(this)[_0x26d460(0x200)](_0x26d460(0x1f2))
            ? (console[_0x26d460(0x134)](
                $(this)[_0x26d460(0x200)](_0x26d460(0x1f2)),
              ),
              $(this)[_0x26d460(0x1d4)](
                $(this)[_0x26d460(0x200)](_0x26d460(0x1f2)),
              ))
            : $(this)
                [_0x26d460(0x219)](_0x26d460(0x195))
                [_0x26d460(0x1d4)](_0x26d460(0x195)),
          $("[data-form=\x22multistep\x22]")[_0x26d460(0x1ce)](),
          $("div.g-recaptcha")[_0x26d460(0x270)] > 0x0 &&
            grecaptcha[_0x26d460(0x187)]()[_0x26d460(0x270)] === 0x0 &&
            (form["find"](_0x26d460(0x147))[_0x26d460(0x1d4)](oldSubmitText),
            form[_0x26d460(0x174)](_0x26d460(0x147))["val"](oldSubmitText)),
          customError && $(_0x26d460(0x24a))["hide"]())
        : customError && displayErrorMessage();
  },
);
function nextStep() {
  const _0x14894b = _0x412c6a;
  customError
    ? ($(_0x14894b(0x24a))["hide"](),
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
  const _0x1fe4ed = _0x412c6a;
  customError && $("[data-text=\x22error-message\x22]")[_0x1fe4ed(0x124)](),
    decreaseCurstep(),
    x > 0x0 &&
      ($(progressbar[x])[_0x1fe4ed(0x205)](_0x1fe4ed(0x20c)),
      selections[_0x1fe4ed(0x272)](
        (_0x23e991) => _0x23e991[_0x1fe4ed(0x1ed)] === x,
      )[_0x1fe4ed(0x270)] > 0x0
        ? (x = parseInt(
            getSafe(
              () =>
                selections[_0x1fe4ed(0x272)](
                  (_0x26a2a0) => _0x26a2a0[_0x1fe4ed(0x1ed)] === x,
                )[0x0]["backTo"],
            ),
          ))
        : x--,
      updateStep()),
    ($(steps[x])
      [_0x1fe4ed(0x174)](_0x1fe4ed(0x140))
      ["data"](_0x1fe4ed(0x25d)) === !![] ||
      $(steps[x])
        [_0x1fe4ed(0x174)](_0x1fe4ed(0x21d))
        [_0x1fe4ed(0x174)]("[data-radio-skip]:visible")
        ["data"](_0x1fe4ed(0x25d)) === !![] ||
      $(steps[x])["find"](_0x1fe4ed(0x1a0))[_0x1fe4ed(0x200)]("radio-skip") ===
        !![]) &&
      ((all_data = all_data["filter"](
        (_0x524d50) =>
          _0x524d50["field"] !==
          $(steps[x])[_0x1fe4ed(0x174)](_0x1fe4ed(0x24b))["attr"]("name"),
      )),
      $(
        _0x1fe4ed(0x1de) +
          $(steps[x])
            [_0x1fe4ed(0x174)]("input[type=\x22radio\x22]:checked")
            [_0x1fe4ed(0x153)](_0x1fe4ed(0x1e2)) +
          "\x22]",
      )["hide"](),
      $(steps[x])["find"](_0x1fe4ed(0x1c0))[_0x1fe4ed(0x25c)]("checked", ![]),
      $(steps[x])
        [_0x1fe4ed(0x174)](_0x1fe4ed(0x18d))
        [_0x1fe4ed(0x205)](_0x1fe4ed(0x16c)),
      validation());
}
weightedSelectionRange &&
  $("[data-selection]")["each"](function () {
    const _0x19e4fc = _0x412c6a;
    $(this)[_0x19e4fc(0x263)](
      "<div\x20data-range=\x22selection\x22\x20style=\x22display:none\x20!important\x22>" +
        $(this)["data"](_0x19e4fc(0x1bc)) +
        "</div>",
    );
  });
function selectionQuiz() {
  const _0x2122cf = _0x412c6a;
  if ($(this)[_0x2122cf(0x174)](_0x2122cf(0x23d))) {
    $("[data-selection]")[_0x2122cf(0x124)](),
      $(_0x2122cf(0x1d0))[_0x2122cf(0x124)]();
    if (weightedSelection) {
      (selTotal = 0x0),
        selArr[_0x2122cf(0x12e)](function (_0x890fd4) {
          const _0x2b7664 = _0x2122cf;
          selTotal = selTotal + _0x890fd4[_0x2b7664(0x15b)];
        }),
        $("[data-text=\x22total-weight\x22]")[_0x2122cf(0x1d4)](selTotal);
      if ($(_0x2122cf(0x240) + selTotal + "\x22]")[_0x2122cf(0x270)] > 0x0)
        $(_0x2122cf(0x240) + selTotal + "\x22]")[_0x2122cf(0x1cf)]();
      else
        $(_0x2122cf(0x1bd) + selTotal + ")")
          ? $(_0x2122cf(0x1bd) + selTotal + ")")
              [_0x2122cf(0x192)](_0x2122cf(0x22e))
              ["eq"](0x0)
              [_0x2122cf(0x1bf)]()
          : $(_0x2122cf(0x234))[_0x2122cf(0x1cf)]();
    } else {
      let _0x4b3a72 = -0x1;
      $(_0x2122cf(0x22e))[_0x2122cf(0x14e)](function (_0x5bdd78) {
        const _0x591dfc = _0x2122cf;
        $($(_0x591dfc(0x22e))[_0x5bdd78])
          [_0x591dfc(0x200)](_0x591dfc(0x1bc))
          [_0x591dfc(0x268)](selString[_0x591dfc(0x1ae)]()) &&
          (_0x4b3a72 = _0x5bdd78);
      }),
        _0x4b3a72 > -0x1
          ? $($(_0x2122cf(0x22e))[_0x4b3a72])[_0x2122cf(0x1cf)]()
          : $("[data-selection=\x22other\x22]")[_0x2122cf(0x1cf)]();
    }
  }
}
function triggerInputAllData() {
  const _0x10c333 = _0x412c6a;
  if (savedFilledInput && memory)
    console[_0x10c333(0x134)](savedFilledInput),
      savedFilledInput["forEach"]((_0x5b50e5) => {
        const _0x2aadc8 = _0x10c333;
        var _0x1195e3 = $(
            "input[name=\x22" +
              _0x5b50e5[_0x2aadc8(0x1f9)] +
              _0x2aadc8(0x1f5) +
              _0x5b50e5[_0x2aadc8(0x183)] +
              "\x22]",
          ),
          _0x2415de = $("input[name=\x22" + _0x5b50e5["inputName"] + "\x22]"),
          _0x53b8e2 = $(
            "textarea[name=\x22" + _0x5b50e5["inputName"] + "\x22]",
          );
        if (
          _0x1195e3[_0x2aadc8(0x153)](_0x2aadc8(0x151)) !== _0x2aadc8(0x26c)
        ) {
          if (
            _0x1195e3[_0x2aadc8(0x153)](_0x2aadc8(0x151)) ===
              _0x2aadc8(0x224) &&
            !_0x1195e3[_0x2aadc8(0x216)](_0x2aadc8(0x225))[_0x2aadc8(0x200)](
              _0x2aadc8(0x25d),
            )
          )
            _0x1195e3["click"](),
              _0x1195e3[_0x2aadc8(0x1e6)](_0x2aadc8(0x1a7))["addClass"](
                "w--redirected-checked",
              ),
              _0x1195e3[_0x2aadc8(0x12f)]("input");
          else
            _0x5b50e5[_0x2aadc8(0x183)] === "on"
              ? (_0x2415de["click"](),
                _0x2415de[_0x2aadc8(0x1e6)](".w-checkbox-input")[
                  _0x2aadc8(0x171)
                ]("w--redirected-checked"),
                _0x2415de["trigger"](_0x2aadc8(0x14c)))
              : (_0x2415de[_0x2aadc8(0x219)](_0x5b50e5[_0x2aadc8(0x183)]),
                _0x53b8e2[_0x2aadc8(0x219)](_0x5b50e5[_0x2aadc8(0x183)]),
                $(_0x2aadc8(0x238) + _0x5b50e5[_0x2aadc8(0x183)] + "\x22]")[
                  _0x2aadc8(0x25c)
                ]("selected", !![]),
                _0x2415de[_0x2aadc8(0x12f)](_0x2aadc8(0x14c)),
                _0x2415de[_0x2aadc8(0x12f)]("change"));
        }
      });
  else
    _params &&
      (getParams(),
      searchQ["forEach"]((_0x3eea2c) => {
        const _0x1d80ff = _0x10c333;
        if (
          $(
            _0x1d80ff(0x256) +
              _0x3eea2c[_0x1d80ff(0x1f9)] +
              _0x1d80ff(0x1f5) +
              _0x3eea2c["value"] +
              "\x22]",
          )[_0x1d80ff(0x153)](_0x1d80ff(0x151)) !== _0x1d80ff(0x26c)
        ) {
          if (
            $(
              _0x1d80ff(0x256) +
                _0x3eea2c[_0x1d80ff(0x253)] +
                _0x1d80ff(0x1f5) +
                _0x3eea2c[_0x1d80ff(0x219)] +
                "\x22]",
            )["attr"](_0x1d80ff(0x151)) === _0x1d80ff(0x224)
          )
            $(
              _0x1d80ff(0x256) +
                _0x3eea2c[_0x1d80ff(0x253)] +
                _0x1d80ff(0x1f5) +
                _0x3eea2c["val"] +
                "\x22]",
            )[_0x1d80ff(0x19a)](),
              $(
                _0x1d80ff(0x256) +
                  _0x3eea2c["key"] +
                  _0x1d80ff(0x1f5) +
                  _0x3eea2c[_0x1d80ff(0x219)] +
                  "\x22]",
              )
                [_0x1d80ff(0x1e6)](_0x1d80ff(0x1a7))
                [_0x1d80ff(0x171)](_0x1d80ff(0x16c)),
              $(
                _0x1d80ff(0x256) +
                  _0x3eea2c[_0x1d80ff(0x253)] +
                  _0x1d80ff(0x1f5) +
                  _0x3eea2c["val"] +
                  "\x22]",
              )["trigger"](_0x1d80ff(0x14c));
          else
            _0x3eea2c["val"] === "on"
              ? ($(_0x1d80ff(0x256) + _0x3eea2c["key"] + "\x22]")[
                  _0x1d80ff(0x19a)
                ](),
                $(_0x1d80ff(0x256) + _0x3eea2c[_0x1d80ff(0x253)] + "\x22]")
                  [_0x1d80ff(0x1e6)](".w-checkbox-input")
                  [_0x1d80ff(0x171)](_0x1d80ff(0x16c)),
                $("input[name=\x22" + _0x3eea2c["key"] + "\x22]")["trigger"](
                  "input",
                ))
              : ($(_0x1d80ff(0x256) + _0x3eea2c[_0x1d80ff(0x253)] + "\x22]")[
                  _0x1d80ff(0x219)
                ](_0x3eea2c["val"]),
                $(_0x1d80ff(0x13d) + _0x3eea2c[_0x1d80ff(0x253)] + "\x22]")[
                  "val"
                ](_0x3eea2c[_0x1d80ff(0x219)]),
                $(_0x1d80ff(0x18a) + _0x3eea2c[_0x1d80ff(0x253)] + "\x22]")
                  [_0x1d80ff(0x174)](
                    _0x1d80ff(0x238) + _0x3eea2c[_0x1d80ff(0x219)] + "\x22]",
                  )
                  [_0x1d80ff(0x25c)](_0x1d80ff(0x15b), !![]),
                $("input[name=\x22" + _0x3eea2c[_0x1d80ff(0x253)] + "\x22]")[
                  "trigger"
                ](_0x1d80ff(0x14c)),
                $(_0x1d80ff(0x256) + _0x3eea2c[_0x1d80ff(0x253)] + "\x22]")[
                  _0x1d80ff(0x12f)
                ](_0x1d80ff(0x127)));
        }
      }));
}
$(_0x412c6a(0x16a))["on"](_0x412c6a(0x19a), function () {
  (next = !![]), nextStep(), selectionQuiz();
}),
  $("[data-form=\x22back-btn\x22]")["on"]("click", function () {
    (next = ![]), (back = !![]), backStep();
  }),
  $(steps)
    ["find"](_0x412c6a(0x1a3))
    [_0x412c6a(0x209)](_0x412c6a(0x16e))
    ["on"](_0x412c6a(0x14c), function (_0x48a8af) {
      validation(), andLogic();
    }),
  $(steps)
    [_0x412c6a(0x174)](_0x412c6a(0x1c0))
    ["on"](_0x412c6a(0x19a), function () {
      (skip = !![]), validation();
    });
$(_0x412c6a(0x180))[_0x412c6a(0x200)]("clickable-all")
  ? $(_0x412c6a(0x1af))[_0x412c6a(0x205)]("disabled")
  : $("[data-form=\x22custom-progress-indicator\x22]")[_0x412c6a(0x171)](
      _0x412c6a(0x21c),
    );
function clickableIndicator() {
  const _0x2cf8f0 = _0x412c6a;
  $("[data-clickable]")[_0x2cf8f0(0x200)](_0x2cf8f0(0x211)) &&
    ($("[data-form=\x22progress-indicator\x22]")["removeClass"]("current"),
    $(_0x2cf8f0(0x15c))[_0x2cf8f0(0x200)](_0x2cf8f0(0x20b))
      ? ((x = $(this)["index"]()), updateStep())
      : $(this)[_0x2cf8f0(0x176)]() <= progress &&
        ((x = $(this)[_0x2cf8f0(0x176)]()), updateStep())),
    $(_0x2cf8f0(0x260))["text"](x + 0x1);
}
$(_0x412c6a(0x1af))["on"](_0x412c6a(0x19a), clickableIndicator);
$("[data-form=\x22multistep\x22]")[_0x412c6a(0x200)](_0x412c6a(0x21b)) &&
  ($("[data-go-to]")[_0x412c6a(0x14e)](function () {
    const _0x50f6de = _0x412c6a;
    $(this)[_0x50f6de(0x263)](
      "<br>Data\x20Go\x20To\x20=\x20",
      $(this)[_0x50f6de(0x200)](_0x50f6de(0x19d)),
    );
  }),
  $(_0x412c6a(0x13b))[_0x412c6a(0x14e)](function () {
    const _0x269c7a = _0x412c6a;
    $(this)[_0x269c7a(0x263)](
      "<br>Data\x20Answer\x20=\x20",
      $(this)[_0x269c7a(0x200)](_0x269c7a(0x1b4)),
    );
  }));
function resetFormly() {
  const _0x5d5def = _0x412c6a;
  $(_0x5d5def(0x138))[_0x5d5def(0x12f)](_0x5d5def(0x1df)),
    $("[data-form=\x22multistep\x22]")
      [_0x5d5def(0x216)]()
      [_0x5d5def(0x174)](_0x5d5def(0x1ec))
      ["hide"](),
    (x = 0x0),
    updateStep(),
    $("[data-form=\x22multistep\x22]")[_0x5d5def(0x1bf)](),
    $(_0x5d5def(0x147))[_0x5d5def(0x1d4)](oldSubmitText),
    $(_0x5d5def(0x147))[_0x5d5def(0x219)](oldSubmitText),
    $(_0x5d5def(0x260))[_0x5d5def(0x1d4)](0x1),
    $(_0x5d5def(0x138))
      [_0x5d5def(0x174)](_0x5d5def(0x23e))
      [_0x5d5def(0x1e6)](_0x5d5def(0x1d6))
      [_0x5d5def(0x205)](_0x5d5def(0x16c));
}
$(document)[_0x412c6a(0x161)](function (_0x2f8645, _0x39b5aa, _0x4cc7b6) {
  const _0x58f2ec = _0x412c6a;
  if (_0x4cc7b6[_0x58f2ec(0x167)][_0x58f2ec(0x268)](_0x58f2ec(0x267))) {
    const _0x3e2b60 = _0x39b5aa[_0x58f2ec(0x210)] === 0xc8,
      _0x5cec71 = "redirect-form-hehexd";
    redirectTo &&
      _0x3e2b60 &&
      (newTab
        ? window["open"](redirectTo, _0x58f2ec(0x179))
        : setTimeout(() => {
            const _0x4e7c31 = _0x58f2ec;
            location[_0x4e7c31(0x133)] = redirectTo;
          }, redirectDelay)),
      _0x3e2b60 &&
        successCard !== "" &&
        $(_0x58f2ec(0x1d1) + successCard + "\x22]")[_0x58f2ec(0x1cf)](),
      _0x3e2b60 &&
        formReset &&
        setTimeout(() => {
          resetFormly();
        }, resetDelay),
      !_0x3e2b60 &&
        ($("[data-form=\x22submit-btn\x22]")[_0x58f2ec(0x219)](
          "Please\x20wait...",
        ),
        $(_0x58f2ec(0x147))[_0x58f2ec(0x1d4)](_0x58f2ec(0x195)));
  }
}),
  $(_0x412c6a(0x182))["on"](_0x412c6a(0x19a), function () {
    const _0x52397b = _0x412c6a;
    var _0x140830 = $(this)
      [_0x52397b(0x192)]()
      [_0x52397b(0x174)](_0x52397b(0x125))
      ["data"](_0x52397b(0x227));
    setTimeout(function () {
      const _0x5f4e71 = _0x52397b;
      $(_0x5f4e71(0x256) + _0x140830 + "\x22]")[_0x5f4e71(0x22f)]();
    }, 0x64),
      (back = !![]),
      (x = $(this)[_0x52397b(0x200)]("edit-step") - 0x1),
      updateStep(),
      countCard
        ? ((curStep = x + 0x1),
          $(_0x52397b(0x141))[_0x52397b(0x1d4)](steps[_0x52397b(0x270)]))
        : $(steps[x])[_0x52397b(0x200)](_0x52397b(0x168))
          ? (curStep = x + 0x0)
          : (curStep = x + 0x1),
      $(_0x52397b(0x260))[_0x52397b(0x1d4)](curStep),
      (back = ![]);
  }),
  $(_0x412c6a(0x244))["on"](_0x412c6a(0x19a), function () {
    const _0x3b73f8 = _0x412c6a;
    $(_0x3b73f8(0x138))[_0x3b73f8(0x12f)](_0x3b73f8(0x1df));
    let _0x93896a = $(this);
    $(this)[_0x3b73f8(0x1d4)](_0x3b73f8(0x195)),
      setTimeout(function () {
        const _0x5b606c = _0x3b73f8;
        $(_0x93896a)[_0x5b606c(0x1d4)](oldResetText),
          $(_0x93896a)[_0x5b606c(0x216)](_0x5b606c(0x1ec))[_0x5b606c(0x124)](),
          (x = 0x0),
          updateStep(),
          $("[data-form=\x22multistep\x22]")["show"](),
          $("[data-form=\x22submit-btn\x22]")[_0x5b606c(0x1d4)](oldSubmitText),
          $(_0x5b606c(0x147))[_0x5b606c(0x219)](oldSubmitText),
          $(_0x93896a)[_0x5b606c(0x219)](oldSubmitText),
          $(_0x5b606c(0x260))["text"](0x1),
          $(_0x5b606c(0x138))
            [_0x5b606c(0x174)](_0x5b606c(0x23e))
            [_0x5b606c(0x1e6)](_0x5b606c(0x1d6))
            ["removeClass"](_0x5b606c(0x16c));
      }, resetDelay);
  }),
  $(_0x412c6a(0x259))["on"](_0x412c6a(0x16b), function (_0x1eb91e) {
    const _0x5bc068 = _0x412c6a;
    if (_0x1eb91e[_0x5bc068(0x150)] === 0xd) {
      _0x1eb91e[_0x5bc068(0x120)](), _0x1eb91e["stopPropagation"]();
      if (
        $(steps[x])[_0x5bc068(0x174)](_0x5bc068(0x22d))["is"](_0x5bc068(0x14a))
      )
        $(steps[x])
          ["find"](_0x5bc068(0x246))
          [_0x5bc068(0x219)](
            $(steps[x])["find"](_0x5bc068(0x246))["val"]() + "\x0a",
          );
      else
        $(_0x5bc068(0x202))[_0x5bc068(0x200)]("enter") &&
          fill &&
          totalSteps > curStep &&
          $("[data-form=\x22next-btn\x22]")[0x0]["click"]();
    }
  }),
  $(_0x412c6a(0x259))[_0x412c6a(0x175)](function (_0x187779) {
    const _0x3785ee = _0x412c6a;
    (_0x187779[_0x3785ee(0x271)] || _0x187779["ctrlKey"]) &&
      _0x187779["keyCode"] == 0xd &&
      (x >= steps[_0x3785ee(0x270)] - 0x1 && fill
        ? $(steps[x])
            [_0x3785ee(0x174)]("[data-form=\x22submit-btn\x22]:visible")
            [_0x3785ee(0x19a)]()
        : (_0x187779[_0x3785ee(0x120)](), _0x187779[_0x3785ee(0x26b)]()));
  }),
  $(_0x412c6a(0x138))
    ["find"](_0x412c6a(0x1a3))
    ["on"](_0x412c6a(0x127), function () {
      const _0xb4810a = _0x412c6a;
      (all_data = all_data[_0xb4810a(0x272)](
        (_0xbbdaa1) =>
          _0xbbdaa1[_0xb4810a(0x1d5)] !== $(this)[_0xb4810a(0x153)]("name"),
      )),
        $(this)[_0xb4810a(0x153)](_0xb4810a(0x151)) === _0xb4810a(0x1fc)
          ? $(this)["is"](_0xb4810a(0x242))
            ? all_data[_0xb4810a(0x1c3)]({
                field: $(this)[_0xb4810a(0x153)](_0xb4810a(0x1e2)),
                value: $(this)[_0xb4810a(0x1e6)]("span")[_0xb4810a(0x1d4)](),
              })
            : $(_0xb4810a(0x1de) + $(this)[_0xb4810a(0x153)]("name") + "\x22]")[
                _0xb4810a(0x124)
              ]()
          : (all_data["push"]({
              field: $(this)[_0xb4810a(0x153)]("name"),
              value: $(this)[_0xb4810a(0x219)](),
            }),
            $(this)[_0xb4810a(0x219)]() !== "" &&
              resetInputErrorMessage(
                $(this)[_0xb4810a(0x153)](_0xb4810a(0x1e2)),
              )),
        all_data[_0xb4810a(0x12e)](function (_0x705e11) {
          const _0x1e5f74 = _0xb4810a;
          $(_0x1e5f74(0x1de) + _0x705e11[_0x1e5f74(0x1d5)] + "\x22]")["show"](),
            $("[data-input-field=\x22" + _0x705e11[_0x1e5f74(0x1d5)] + "\x22]")[
              _0x1e5f74(0x1d4)
            ](_0x705e11[_0x1e5f74(0x183)]);
        });
    }),
  $(_0x412c6a(0x138))
    ["find"](_0x412c6a(0x22d))
    ["on"](_0x412c6a(0x127), function () {
      const _0x40f6ca = _0x412c6a;
      $(this)["val"]() !== "" &&
        resetInputErrorMessage($(this)[_0x40f6ca(0x153)]("name")),
        (all_data = all_data["filter"](
          (_0x25f484) =>
            _0x25f484[_0x40f6ca(0x1d5)] !== $(this)[_0x40f6ca(0x153)]("name"),
        )),
        all_data[_0x40f6ca(0x1c3)]({
          field: $(this)[_0x40f6ca(0x153)]("name"),
          value: $(this)[_0x40f6ca(0x219)](),
        }),
        all_data[_0x40f6ca(0x12e)](function (_0x2e7feb) {
          const _0x48e48f = _0x40f6ca;
          $(_0x48e48f(0x1de) + _0x2e7feb["field"] + "\x22]")[
            _0x48e48f(0x1bf)
          ](),
            $(_0x48e48f(0x1de) + _0x2e7feb["field"] + "\x22]")["text"](
              _0x2e7feb["value"],
            );
        });
    }),
  $(_0x412c6a(0x138))
    [_0x412c6a(0x174)]("select")
    ["on"](_0x412c6a(0x127), function () {
      const _0x56f09e = _0x412c6a;
      $(this)[_0x56f09e(0x219)]() !== "" &&
        resetInputErrorMessage($(this)[_0x56f09e(0x153)](_0x56f09e(0x1e2)));
      var _0x43d948 = $(this)[_0x56f09e(0x200)](_0x56f09e(0x252));
      (all_data = all_data[_0x56f09e(0x272)](
        (_0x30f114) =>
          _0x30f114[_0x56f09e(0x1d5)] !== $(this)["attr"](_0x56f09e(0x1e2)),
      )),
        all_data[_0x56f09e(0x1c3)]({
          field: $(this)["attr"](_0x56f09e(0x1e2)),
          value: _0x43d948
            ? $(this)["find"](_0x56f09e(0x162))["text"]()
            : $(this)[_0x56f09e(0x219)](),
        }),
        all_data[_0x56f09e(0x12e)](function (_0x370a92) {
          const _0x2f1044 = _0x56f09e;
          $(_0x2f1044(0x1de) + _0x370a92[_0x2f1044(0x1d5)] + "\x22]")["show"](),
            $(_0x2f1044(0x1de) + _0x370a92[_0x2f1044(0x1d5)] + "\x22]")[
              _0x2f1044(0x1d4)
            ](_0x370a92[_0x2f1044(0x183)]);
        });
    }),
  updateStep(),
  triggerInputAllData(),
  $(_0x412c6a(0x25a))[_0x412c6a(0x14e)](function () {
    const _0x30dd57 = _0x412c6a,
      _0x53556b = $(this)[_0x30dd57(0x174)](_0x30dd57(0x13a)),
      _0x5deadd = [];
    console["log"](_0x5deadd),
      _0x53556b[_0x30dd57(0x14e)](function () {
        const _0x5dc7cb = _0x30dd57;
        _0x5deadd["push"]($(this)[_0x5dc7cb(0x1d4)]()["trim"]());
      });
    const _0x147f1e = $(this)[_0x30dd57(0x1e6)]("[data-cms-select=input]");
    $[_0x30dd57(0x14e)](_0x5deadd, function (_0x20f3f9, _0x22e2b6) {
      const _0x190e9e = _0x30dd57,
        _0x49d6e9 = $("<option>")["val"](_0x22e2b6)["text"](_0x22e2b6);
      _0x147f1e[_0x190e9e(0x263)](_0x49d6e9);
    });
  });
function cloneRemove() {
  const _0x29c23c = _0x412c6a;
  $(_0x29c23c(0x1f4))["each"](function () {
    const _0x3dd410 = _0x29c23c;
    $(this)["find"](_0x3dd410(0x26f))[_0x3dd410(0x270)] < 0x2
      ? $(this)[_0x3dd410(0x174)](_0x3dd410(0x201))[_0x3dd410(0x124)]()
      : $(this)
          [_0x3dd410(0x174)]("[data-form=\x22remove-clone\x22]")
          [_0x3dd410(0x1bf)]();
  });
}
function cloneRemoveInput() {
  $("[data-clone-input-wrapper]")["each"](function () {
    const _0x442ea1 = _0x3df8;
    $(this)[_0x442ea1(0x174)](_0x442ea1(0x20a))["length"] < 0x2
      ? $(this)[_0x442ea1(0x174)](_0x442ea1(0x203))[_0x442ea1(0x124)]()
      : $(this)[_0x442ea1(0x174)](_0x442ea1(0x203))[_0x442ea1(0x1bf)]();
  });
}
$(_0x412c6a(0x201))["on"]("click", function () {
  const _0x570e87 = _0x412c6a,
    _0x42879a =
      $(this)[_0x570e87(0x216)](_0x570e87(0x26f))[_0x570e87(0x270)] > 0x0
        ? $(this)["parents"](_0x570e87(0x26f))["index"]()
        : $(this)[_0x570e87(0x216)](_0x570e87(0x266))[_0x570e87(0x176)](),
    _0x46b1df =
      $(this)[_0x570e87(0x216)](_0x570e87(0x26f))[_0x570e87(0x270)] > 0x0
        ? $(this)
            [_0x570e87(0x216)](_0x570e87(0x26f))
            [_0x570e87(0x200)](_0x570e87(0x1a6))
        : $(this)[_0x570e87(0x216)]("[data-display]")["data"]("display");
  $(_0x570e87(0x137) + _0x46b1df + "\x22]")
    ["eq"](_0x42879a)
    ["remove"](),
    $(_0x570e87(0x1f1) + _0x46b1df + "\x22]")
      ["eq"](_0x42879a)
      [_0x570e87(0x172)](),
    cloneRemove(),
    validation();
}),
  $(_0x412c6a(0x203))["on"](_0x412c6a(0x19a), function () {
    const _0x4a6570 = _0x412c6a;
    let _0x3759ef = $(this)["siblings"]()["attr"](_0x4a6570(0x1e2));
    $(this)[_0x4a6570(0x192)](_0x4a6570(0x20a))[_0x4a6570(0x172)](),
      $(_0x4a6570(0x1de) + _0x3759ef + "\x22]")
        [_0x4a6570(0x192)](_0x4a6570(0x17a))
        [_0x4a6570(0x172)](),
      cloneRemove(),
      validation();
  }),
  $(_0x412c6a(0x184))["on"](_0x412c6a(0x19a), function () {
    const _0x21dfee = _0x412c6a;
    let _0x437eef = $(this)["data"](_0x21dfee(0x17f));
    var _0x53cf82 = $("[data-clone=\x22" + _0x437eef + "\x22]")
        ["eq"](0x0)
        ["clone"](!![]),
      _0x364668 = $("[data-display=\x22" + _0x437eef + "\x22]")
        ["eq"](0x0)
        [_0x21dfee(0x1a6)](!![]);
    let _0x3b28c5 = "";
    $(this)["find"](_0x21dfee(0x201))["show"](),
      cloneRemove(),
      _0x53cf82[_0x21dfee(0x174)]("[data-clone-input]")
        [_0x21dfee(0x174)]("input")
        [_0x21dfee(0x219)](""),
      _0x53cf82[_0x21dfee(0x174)](_0x21dfee(0x20a))
        [_0x21dfee(0x209)](_0x21dfee(0x189))
        [_0x21dfee(0x172)](),
      _0x364668["find"]("[data-display-input]")
        [_0x21dfee(0x209)](_0x21dfee(0x189))
        [_0x21dfee(0x172)](),
      _0x53cf82[_0x21dfee(0x174)](_0x21dfee(0x14c))["each"](function () {
        const _0x1d261d = _0x21dfee;
        if ($(this)["closest"](_0x1d261d(0x20a))[_0x1d261d(0x270)] > 0x0) {
          let _0xadfb92 = 0x0;
          const _0x4cbeb7 = $(this)
            ["closest"](_0x1d261d(0x20a))
            [_0x1d261d(0x200)](_0x1d261d(0x255));
          console[_0x1d261d(0x134)](
            $(this)
              [_0x1d261d(0x24f)](_0x1d261d(0x20a))
              ["data"](_0x1d261d(0x255)),
            this[_0x1d261d(0x1e2)],
          ),
            $("[data-clone-input=\x22" + _0x4cbeb7 + "\x22]\x20input")[
              _0x1d261d(0x14e)
            ](function () {
              const _0x319fb6 = _0x1d261d,
                _0x1dc72c = $(this)["attr"]("name");
              if (_0x1dc72c && _0x1dc72c["startsWith"](_0x319fb6(0x204))) {
                const _0x1c5ef9 = parseInt(
                  _0x1dc72c[_0x319fb6(0x1aa)]("-")[0x1],
                );
                !isNaN(_0x1c5ef9) &&
                  _0x1c5ef9 > _0xadfb92 &&
                  (_0xadfb92 = _0x1c5ef9);
              }
            }),
            _0xadfb92++,
            (_0x3b28c5 = this[_0x1d261d(0x1e2)] + "-" + _0xadfb92),
            console[_0x1d261d(0x134)](_0x4cbeb7, _0x3b28c5);
        } else
          _0x3b28c5 =
            this[_0x1d261d(0x1e2)] +
            "-" +
            (parseInt(
              $(_0x1d261d(0x137) + _0x437eef + "\x22]")
                ["last"]()
                ["index"](),
            ) +
              0x1);
        $(this)[_0x1d261d(0x219)](""),
          $(this)[_0x1d261d(0x153)](_0x1d261d(0x1e2), _0x3b28c5),
          $(this)["attr"]("data-name", _0x3b28c5);
      }),
      _0x364668[_0x21dfee(0x174)](_0x21dfee(0x125))[_0x21dfee(0x14e)](
        function () {
          const _0x5ddbbc = _0x21dfee;
          if ($(this)[_0x5ddbbc(0x200)](_0x5ddbbc(0x227))) {
            let _0xc0d720 = 0x0;
            const _0x49e1c0 = $(this)
              ["data"](_0x5ddbbc(0x227))
              [_0x5ddbbc(0x1aa)]("-")[0x0];
            $(
              _0x5ddbbc(0x1f1) +
                _0x437eef +
                _0x5ddbbc(0x26a) +
                _0x49e1c0 +
                "\x22]",
            )[_0x5ddbbc(0x14e)](function () {
              const _0xa3fd89 = _0x5ddbbc,
                _0xafe2ea = $(this)[_0xa3fd89(0x153)](_0xa3fd89(0x269)),
                _0x3630a9 = parseInt(_0xafe2ea["split"]("-")[0x1]);
              !isNaN(_0x3630a9) &&
                _0x3630a9 > _0xc0d720 &&
                (_0xc0d720 = _0x3630a9);
            }),
              _0xc0d720++;
            const _0x50f8dc = _0x49e1c0 + "-" + _0xc0d720;
            console[_0x5ddbbc(0x134)](_0x50f8dc),
              $(this)[_0x5ddbbc(0x153)](_0x5ddbbc(0x269), _0x50f8dc);
          }
        },
      ),
      $("[data-clone-wrapper=\x22" + _0x437eef + "\x22]")["append"](_0x53cf82),
      $(_0x21dfee(0x1d9) + _0x437eef + "\x22]")[_0x21dfee(0x263)](_0x364668),
      $("[data-index=\x22" + _0x437eef + "\x22]")[_0x21dfee(0x14e)](
        function () {
          const _0x16eade = _0x21dfee;
          $(this)[_0x16eade(0x1d4)](
            $(this)
              ["parents"](_0x16eade(0x137) + _0x437eef + "\x22]")
              [_0x16eade(0x176)]() + 0x1,
          );
        },
      ),
      $(_0x21dfee(0x132) + _0x437eef + "\x22]")[_0x21dfee(0x14e)](function () {
        const _0x182a90 = _0x21dfee;
        $(this)[_0x182a90(0x1d4)](
          $(this)
            [_0x182a90(0x216)](_0x182a90(0x1f1) + _0x437eef + "\x22]")
            [_0x182a90(0x176)]() + 0x1,
        );
      }),
      validation();
  }),
  $(_0x412c6a(0x231))["on"]("click", function () {
    const _0x3066d4 = _0x412c6a,
      _0x4d3e02 = $(this)[_0x3066d4(0x216)]("[data-clone]")[_0x3066d4(0x176)]();
    let _0x4ce6fd = $(this)[_0x3066d4(0x200)](_0x3066d4(0x191));
    var _0x5a5573 = $(_0x3066d4(0x1c6) + _0x4ce6fd + "\x22]")
        ["eq"](0x0)
        [_0x3066d4(0x1a6)](!![]),
      _0x4b5475 = $("[data-display-input=\x22" + _0x4ce6fd + "\x22]")
        ["eq"](0x0)
        ["clone"](!![]);
    $(this)
      ["find"]("[data-form=\x22remove-input-clone\x22]")
      [_0x3066d4(0x1bf)](),
      cloneRemoveInput();
    let _0xe9c475 = 0x0;
    $("[data-clone-input=\x22" + _0x4ce6fd + _0x3066d4(0x129))["each"](
      function () {
        const _0x1880e2 = _0x3066d4,
          _0x2bf365 = $(this)["attr"](_0x1880e2(0x1e2));
        if (_0x2bf365 && _0x2bf365[_0x1880e2(0x261)](_0x1880e2(0x204))) {
          const _0x70d81c = parseInt(_0x2bf365["split"]("-")[0x1]);
          !isNaN(_0x70d81c) && _0x70d81c > _0xe9c475 && (_0xe9c475 = _0x70d81c);
        }
      },
    ),
      _0xe9c475++,
      _0x5a5573["find"](_0x3066d4(0x14c))[_0x3066d4(0x14e)](function () {
        const _0x3d94a7 = _0x3066d4;
        let _0x356f64 = _0x3d94a7(0x204) + _0xe9c475;
        $(this)[_0x3d94a7(0x219)](""),
          $(this)["attr"](_0x3d94a7(0x1e2), _0x356f64),
          $(this)["attr"](_0x3d94a7(0x1cd), _0x356f64);
      }),
      _0x4b5475[_0x3066d4(0x174)](_0x3066d4(0x125))[_0x3066d4(0x14e)](
        function () {
          const _0x1d7a25 = _0x3066d4;
          $(this)[_0x1d7a25(0x153)](
            _0x1d7a25(0x269),
            "relationship-" + _0xe9c475,
          );
        },
      ),
      $(this)
        [_0x3066d4(0x1e6)](_0x3066d4(0x148) + _0x4ce6fd + "\x22]")
        [_0x3066d4(0x263)](_0x5a5573),
      $(_0x3066d4(0x266))
        ["eq"](_0x4d3e02)
        [_0x3066d4(0x174)](_0x3066d4(0x20f) + _0x4ce6fd + "\x22]")
        ["append"](_0x4b5475),
      $(_0x3066d4(0x1e0) + _0x4ce6fd + "\x22]")[_0x3066d4(0x14e)](function () {
        const _0x278cf8 = _0x3066d4;
        $(this)[_0x278cf8(0x1d4)](
          $(this)
            ["parents"](_0x278cf8(0x1c6) + _0x4ce6fd + "\x22]")
            [_0x278cf8(0x176)]() + 0x1,
        );
      }),
      $(_0x3066d4(0x18e) + _0x4ce6fd + "\x22]")[_0x3066d4(0x14e)](function () {
        const _0x5f8c39 = _0x3066d4;
        $(this)["text"](
          $(this)
            [_0x5f8c39(0x216)](_0x5f8c39(0x1b9) + _0x4ce6fd + "\x22]")
            [_0x5f8c39(0x176)]() + 0x1,
        );
      }),
      validation();
  }),
  $(_0x412c6a(0x190))["on"]("click", function () {
    const _0x25dcf3 = _0x412c6a,
      _0x4e8328 = $(this)["data"](_0x25dcf3(0x13c));
    $("input[name=\x22" + _0x4e8328 + "\x22]")["val"](""), validation();
  });
function andLogic() {
  const _0x23c846 = _0x412c6a;
  conditionalResult &&
    (steps["eq"](x)[_0x23c846(0x174)]("[data-show-if]")[_0x23c846(0x124)](),
    console["log"](_0x23c846(0x1f8)),
    steps["eq"](x)
      ["find"](_0x23c846(0x1b8))
      [_0x23c846(0x14e)](function () {
        const _0x1088e3 = _0x23c846;
        function _0x5e5add(_0xdf6f68) {
          const _0x5aec48 = _0x3df8,
            _0xa90d81 = _0xdf6f68[_0x5aec48(0x1aa)]("&"),
            _0x5d4220 = [];
          return (
            _0xa90d81["forEach"]((_0x1564ff) => {
              const _0x46712d = _0x5aec48,
                [_0x4da326, _0x5e6a3f] = _0x1564ff["split"]("=");
              _0x5d4220[_0x46712d(0x1c3)]({
                field: _0x4da326,
                value: _0x5e6a3f,
              });
            }),
            _0x5d4220
          );
        }
        const _0x459ff7 = $(this)[_0x1088e3(0x153)](_0x1088e3(0x1c1));
        console[_0x1088e3(0x134)](_0x459ff7);
        const _0x358a36 = _0x5e5add(_0x459ff7);
        function _0x5e23fd(_0x39acec, _0x42119b) {
          const _0x2316f3 = _0x1088e3;
          return _0x42119b[_0x2316f3(0x1ad)]((_0x2d33a5, _0x257b16) => {
            const _0x3eae5 = _0x2316f3;
            if (
              _0x39acec[0x0] &&
              _0x2d33a5["field"] === _0x39acec[0x0][_0x3eae5(0x1d5)]
            )
              return _0x39acec[_0x3eae5(0x126)](
                (_0x4e56ae, _0xab0104) =>
                  _0x42119b[_0x257b16 + _0xab0104] &&
                  _0x42119b[_0x257b16 + _0xab0104][_0x3eae5(0x1d5)] ===
                    _0x4e56ae[_0x3eae5(0x1d5)] &&
                  _0x42119b[_0x257b16 + _0xab0104]["value"] ===
                    _0x4e56ae[_0x3eae5(0x183)],
              );
            return ![];
          });
        }
        const _0x40e311 = _0x5e23fd(_0x358a36, all_data);
        _0x40e311 ? $(this)[_0x1088e3(0x1bf)]() : $(this)[_0x1088e3(0x124)]();
      }));
}
scrollTop(), cloneRemove(), cloneRemoveInput();
const formlyUrlParams = new URLSearchParams(
    window[_0x412c6a(0x123)][_0x412c6a(0x12b)],
  ),
  formlySupportParam = formlyUrlParams[_0x412c6a(0x24d)](_0x412c6a(0x208)),
  showButton = formlySupportParam === _0x412c6a(0x1c4),
  passIcon = _0x412c6a(0x15d),
  failIcon = _0x412c6a(0x1c9);
let isScriptLoaded = !![],
  scriptLocation = "head",
  isMultistepAttributePresent = !![],
  isMultistepOnFormElement = !![],
  areButtonsPresent = !![],
  isNextBtnOnSubmit = ![],
  isSubmitBtnOnSubmit = !![],
  isBackBtnOnSubmit = ![],
  formType = logicExtra ? _0x412c6a(0x218) : "Basic\x20(No\x20Formly\x20Logic)",
  resultStatus = "PASS",
  scriptSrcAdded = "";
function isElementPresent(_0x22ad85, _0x22619e) {
  const _0x5b483f = _0x412c6a;
  return (
    document[_0x5b483f(0x17d)](
      "[" + _0x22619e + "=\x22" + _0x22ad85 + "\x22]",
    ) !== null
  );
}
isMultistepAttributePresent = isElementPresent(_0x412c6a(0x1d3), "data-form");
const multistepForm = document["querySelector"](
    "form[data-form=\x22multistep\x22]",
  ),
  formStepLength = multistepForm["querySelectorAll"](
    "[data-form=\x22step\x22]",
  )["length"];
isMultistepOnFormElement = multistepForm !== null;
const multistepContainer = document["querySelector"](_0x412c6a(0x138)),
  nextBtn = multistepContainer["querySelector"](_0x412c6a(0x16a)),
  backBtn = multistepContainer["querySelector"](_0x412c6a(0x235)),
  submitBtn = multistepContainer["querySelector"](_0x412c6a(0x147));
(areButtonsPresent =
  nextBtn !== null && backBtn !== null && submitBtn !== null),
  (isNextBtnOnSubmit =
    nextBtn && nextBtn[_0x412c6a(0x197)]["toLowerCase"]() === "input"),
  (isSubmitBtnOnSubmit =
    submitBtn &&
    submitBtn[_0x412c6a(0x197)][_0x412c6a(0x26e)]() === _0x412c6a(0x14c) &&
    submitBtn[_0x412c6a(0x151)][_0x412c6a(0x26e)]() === _0x412c6a(0x1ce)),
  (isBackBtnOnSubmit =
    backBtn && backBtn[_0x412c6a(0x197)][_0x412c6a(0x26e)]() === "input");
const checkPowerup = (_0x42c70) =>
    document[_0x412c6a(0x17d)](_0x42c70) !== null,
  progressBarAttr = checkPowerup("[data-form=\x22progress\x22]"),
  progressIndicatorAttr = checkPowerup(
    "[data-form=\x22progress-indicator\x22]",
  ),
  customProgressAttr = checkPowerup(_0x412c6a(0x1e4)),
  cardDivAttr = checkPowerup(_0x412c6a(0x146)),
  currentStepAttr = checkPowerup("[data-text=\x22current-step\x22]"),
  totalStepAttr = checkPowerup(_0x412c6a(0x141)),
  enterAttr = checkPowerup(_0x412c6a(0x17b)),
  submitAttr = checkPowerup("[data-submit=\x22true\x22]"),
  radioSkipAttr = checkPowerup(_0x412c6a(0x19c)),
  customCheckboxAttr = checkPowerup(_0x412c6a(0x1fb)),
  recapatchaAttr = checkPowerup(_0x412c6a(0x177));
(!isScriptLoaded ||
  scriptLocation !== "head" ||
  !isMultistepAttributePresent ||
  !isMultistepOnFormElement ||
  !areButtonsPresent ||
  isNextBtnOnSubmit ||
  !isSubmitBtnOnSubmit ||
  isBackBtnOnSubmit) &&
  (resultStatus = _0x412c6a(0x1e9));
function isScriptUrlMatch(_0x2553c7, _0x5bf61b) {
  const _0x394b59 = _0x412c6a;
  for (
    var _0x18a6a1 = 0x0;
    _0x18a6a1 < _0x5bf61b[_0x394b59(0x270)];
    _0x18a6a1++
  ) {
    if (_0x2553c7[_0x394b59(0x268)](_0x5bf61b[_0x18a6a1])) return !![];
  }
  return ![];
}
var keywordsToCheck = [_0x412c6a(0x23a), "formly"],
  scripts = document[_0x412c6a(0x1be)](_0x412c6a(0x12c)),
  matchedScripts = [];
for (var i = 0x0; i < scripts["length"]; i++) {
  var scriptSrcs = scripts[i][_0x412c6a(0x20e)];
  isScriptUrlMatch(scriptSrcs, keywordsToCheck) &&
    matchedScripts["push"](scriptSrcs);
}
if (matchedScripts["length"] > 0x0) {
  scriptSrcAdded = matchedScripts;
  const script = document[_0x412c6a(0x17d)](
    _0x412c6a(0x21f) + scriptSrcAdded + "\x22]",
  );
  script &&
    (scriptLocation =
      script[_0x412c6a(0x131)][_0x412c6a(0x197)] === "BODY"
        ? _0x412c6a(0x262)
        : _0x412c6a(0x1d8));
} else scriptSrcAdded = _0x412c6a(0x206) + failIcon;
const newElement = document[_0x412c6a(0x217)](_0x412c6a(0x1cb)),
  newStyle = document[_0x412c6a(0x217)]("style");
(newStyle[_0x412c6a(0x16d)] = _0x412c6a(0x17e)),
  document[_0x412c6a(0x159)]["appendChild"](newStyle);
showButton && document["body"]["appendChild"](newElement);
newElement["innerHTML"] =
  _0x412c6a(0x157) +
  formType +
  _0x412c6a(0x276) +
  scriptSrcAdded +
  _0x412c6a(0x215) +
  scriptLocation +
  "</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22section-title-text\x22>Attributes</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-white\x22>1.\x20Form:\x20data-form=multistep\x20" +
  (isMultistepOnFormElement ? passIcon : failIcon) +
  _0x412c6a(0x20d) +
  (formStepLength > 0x0 ? passIcon : failIcon) +
  _0x412c6a(0x22a) +
  formStepLength +
  _0x412c6a(0x1bb) +
  (nextBtn ? passIcon : failIcon) +
  _0x412c6a(0x239) +
  (isNextBtnOnSubmit ? failIcon : passIcon) +
  _0x412c6a(0x1ea) +
  (backBtn ? passIcon : failIcon) +
  "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>Back\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button" +
  (isBackBtnOnSubmit ? failIcon : passIcon) +
  _0x412c6a(0x1e5) +
  (backBtn ? passIcon : failIcon) +
  _0x412c6a(0x1f3) +
  (isSubmitBtnOnSubmit ? passIcon : failIcon) +
  _0x412c6a(0x1b6) +
  (progressBarAttr && progressIndicatorAttr
    ? _0x412c6a(0x1ab) + passIcon + _0x412c6a(0x1da)
    : "") +
  _0x412c6a(0x142) +
  (customProgressAttr ? _0x412c6a(0x14d) + passIcon + _0x412c6a(0x1da) : "") +
  _0x412c6a(0x142) +
  (cardDivAttr ? _0x412c6a(0x236) + passIcon + "</strong>" : "") +
  _0x412c6a(0x142) +
  (currentStepAttr ? _0x412c6a(0x122) + passIcon + _0x412c6a(0x1da) : "") +
  _0x412c6a(0x142) +
  (totalStepAttr
    ? "<strong\x20class=\x22text-white\x22>Total\x20Step\x20Text\x20" +
      passIcon +
      _0x412c6a(0x1da)
    : "") +
  _0x412c6a(0x142) +
  (enterAttr ? _0x412c6a(0x17c) + passIcon + _0x412c6a(0x1da) : "") +
  _0x412c6a(0x142) +
  (submitAttr ? _0x412c6a(0x12a) + passIcon + "</strong>" : "") +
  _0x412c6a(0x142) +
  (radioSkipAttr
    ? "<strong\x20class=\x22text-white\x22>Radio\x20Inputs\x20" +
      passIcon +
      _0x412c6a(0x1da)
    : "") +
  _0x412c6a(0x142) +
  (customCheckboxAttr ? _0x412c6a(0x198) + passIcon + _0x412c6a(0x1da) : "") +
  _0x412c6a(0x142) +
  (recapatchaAttr ? _0x412c6a(0x15a) + passIcon + _0x412c6a(0x1da) : "") +
  _0x412c6a(0x237);
function openNav() {
  const _0xb5242c = _0x412c6a;
  (document["getElementById"](_0xb5242c(0x1f6))[_0xb5242c(0x230)][
    _0xb5242c(0x1cc)
  ] = "35%"),
    (document[_0xb5242c(0x22c)](_0xb5242c(0x1f6))[_0xb5242c(0x230)][
      _0xb5242c(0x264)
    ] = _0xb5242c(0x13e));
}
function closeNav() {
  const _0x36ff4e = _0x412c6a;
  (document[_0x36ff4e(0x22c)]("mySidenav")["style"][_0x36ff4e(0x1cc)] = "0"),
    (document[_0x36ff4e(0x22c)](_0x36ff4e(0x1f6))[_0x36ff4e(0x230)]["padding"] =
      _0x36ff4e(0x1ef));
}
