// 5 Mar 2024
// New feature
// User counter

const _0x13ace7 = _0x42cf;
(function(_0x376e3f, _0x2793e0) {
    const _0xb5310c = _0x42cf,
        _0xc6a575 = _0x376e3f();
    while (!![]) {
        try {
            const _0x7cc755 = -parseInt(_0xb5310c(0x262)) /
                0x1 * (parseInt(_0xb5310c(0x216)) / 0x2) + -parseInt(_0xb5310c(0x232)) / 0x3 * (-parseInt(
                    _0xb5310c(0x166)) / 0x4) + parseInt(_0xb5310c(0x1d4)) / 0x5 + -parseInt(_0xb5310c(
                    0x1bb)) / 0x6 + -parseInt(_0xb5310c(0x29b)) / 0x7 * (-parseInt(_0xb5310c(0x2c0)) /
                    0x8) + parseInt(_0xb5310c(0x2ba)) / 0x9 * (-parseInt(_0xb5310c(0x290)) / 0xa) + -
                parseInt(
                    _0xb5310c(0x18d)) / 0xb;
            if (_0x7cc755 === _0x2793e0) break;
            else _0xc6a575['push'](_0xc6a575['shift']());
        } catch (_0x2900b5) {
            _0xc6a575['push'](
                _0xc6a575['shift']());
        }
    }
}(_0x5d2e, 0x42520));
let x = 0x0,
    lastStep = 0x0,
    curStep = 0x0,
    countCard = !![],
    fill = ![],
    inputFilled = !![],
    skip, urlFilled = !![],
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
    answer = '',
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
    empReqTel = [],
    textareaLength = 0x0,
    textInputLength = 0x0,
    emailInputLength = 0x0,
    selectInputLength = 0x0,
    checkboxInputLength = 0x0,
    filledInput = [],
    savedFilledInput = [],
    progress = 0x0,
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
    successCard = '',
    redirectTo = '',
    totalSteps = 0x0,
    checkCount = 0x0,
    newTab = !![],
    unfilledArr = [],
    notRobot = !![],
    all_data = [];
var ogCloneArr = [];
let steps = $('[data-form=\x22step\x22]'),
    progressbarClone = $(_0x13ace7(0x1e6))[_0x13ace7(0x238)](),
    progressbar, weightedSelection = $(_0x13ace7(0x1cb))[_0x13ace7(0x273)](_0x13ace7(0x2bd)),
    weightedSelectionRange = $(_0x13ace7(0x173))[_0x13ace7(0x273)](_0x13ace7(0x1a1)),
    selectMultiple = $(_0x13ace7(0x1fb))['data']('select-multiple'),
    customError = $(_0x13ace7(0x191))['data']('custom-error-message'),
    reinitIX = $(_0x13ace7(0x16b))[_0x13ace7(0x273)](_0x13ace7(0x252)),
    memory = $('[data-memory]')[_0x13ace7(0x273)](_0x13ace7(0x27d)),
    quiz = $(_0x13ace7(0x18b))[_0x13ace7(0x273)](_0x13ace7(0x19c));
const urlFormly = new URL(window[_0x13ace7(0x1c9)][_0x13ace7(0x1b3)]);
let _params = $(_0x13ace7(0x204))[_0x13ace7(0x273)](_0x13ace7(0x275)),
    logicExtra = $('[data-form=\x22multistep\x22]')[_0x13ace7(0x273)](_0x13ace7(0x21b)),
    oldSubmitText = $(_0x13ace7(0x185))['val'](),
    oldResetText = $('[data-btn=\x22reset\x22]')['text'](),
    formReset = $(_0x13ace7(0x245))['data'](_0x13ace7(0x236)),
    resetDelay = $(_0x13ace7(0x28b))[_0x13ace7(0x273)](_0x13ace7(0x21f)) ? $(_0x13ace7(0x28b))[
        _0x13ace7(0x273)]('reset-delay') : 0x7d0,
    redirectDelay = $('[data-redirect-delay]')[_0x13ace7(0x273)](_0x13ace7(0x1fa)) ? $(_0x13ace7(
        0x265))[_0x13ace7(0x273)]('redirect-delay') : 0x7d0,
    phoneFormat = $(_0x13ace7(0x245))[_0x13ace7(0x273)](_0x13ace7(0x24a)),
    scrollToTop = $(_0x13ace7(0x245))[_0x13ace7(0x273)](_0x13ace7(0x281)),
    trackLastStep = $('[data-last-step]')[_0x13ace7(0x273)]('last-step'),
    conditionalResult = $(_0x13ace7(0x2c4))[_0x13ace7(0x273)](_0x13ace7(0x170)) === _0x13ace7(0x1f0),
    scrollTopOffset = parseInt($('[data-form=\x22multistep\x22]')[_0x13ace7(0x273)](_0x13ace7(
        0x18e)));
const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
savedFilledInput = JSON[_0x13ace7(0x28a)](localStorage[_0x13ace7(0x1f2)](_0x13ace7(0x181))),
    formlyLastStep = JSON[_0x13ace7(0x28a)](localStorage['getItem'](_0x13ace7(0x289))),
    formlyLastStepAnswer = JSON[_0x13ace7(0x28a)](localStorage[_0x13ace7(0x1f2)](_0x13ace7(0x1b1)));
trackLastStep && (formlyLastStep > x && (x = formlyLastStep), formlyLastStepAnswer && (selections =
    formlyLastStepAnswer));
$('[data-clone]')[_0x13ace7(0x176)](function() {
    const _0x1ef18b = _0x13ace7;
    ogCloneArr[_0x1ef18b(0x1e7)]({
        'name': $(this)[_0x1ef18b(0x273)](_0x1ef18b(
            0x238)),
        'element': $(this)[_0x1ef18b(0x238)](!![]),
        'display': $(_0x1ef18b(0x2b5) + $(
            this)[_0x1ef18b(0x273)](_0x1ef18b(0x238)) + '\x22]')['eq'](0x0)[_0x1ef18b(0x238)](!
            ![])
    });
});
$('div.g-recaptcha')[_0x13ace7(0x2b1)] > 0x0 && (notRobot = ![]);

function recaptcha(_0x9fe8f) { notRobot = !![]; }
$(_0x13ace7(0x1bc))[_0x13ace7(0x2b1)] > 0x0 && (
    countCard = $(_0x13ace7(0x1bc))[_0x13ace7(0x273)]('count-card'));
$(_0x13ace7(0x218))[_0x13ace7(0x1e8)](), $(progressbarClone)[_0x13ace7(0x195)](_0x13ace7(0x1b7)), $(
    '[data-form=\x22progress\x22]')[_0x13ace7(0x1f6)]()[_0x13ace7(0x1b2)](), $(_0x13ace7(0x185))[
    _0x13ace7(0x1e8)](), $('[data-form-ms=\x22submit-btn\x22]')['hide'](), steps[_0x13ace7(0x176)](
    function() {
        const _0x31ffba = _0x13ace7;
        $(_0x31ffba(0x1ce))[_0x31ffba(0x208)](progressbarClone['clone'](!![], !![]));
    }), $(_0x13ace7(
    0x2aa))[_0x13ace7(0x1e8)]();
countCard ? (curStep = curStep + 0x1, totalSteps = steps[_0x13ace7(0x2b1)], $(
    '[data-text=\x22total-steps\x22]')[_0x13ace7(0x274)](totalSteps)) : ($(steps[x])[_0x13ace7(
    0x273)](_0x13ace7(0x171)) ? curStep = curStep + 0x0 : curStep = curStep + 0x1, totalSteps = $(
    _0x13ace7(0x1c7))[_0x13ace7(0x2b1)], $(_0x13ace7(0x22a))[_0x13ace7(0x274)](totalSteps), $(
    _0x13ace7(0x189))[_0x13ace7(0x176)](function() {
    const _0x3301f4 = _0x13ace7;
    $($(_0x3301f4(0x1e6))[$(this)[_0x3301f4(0x196)]()])['hide']();
}));
progressbar = $(_0x13ace7(0x1ce))[_0x13ace7(0x1f6)](), $(_0x13ace7(0x1e6))['on'](_0x13ace7(0x244),
    clickableIndicator), $(_0x13ace7(0x1aa))['text'](curStep), steps[_0x13ace7(0x1e8)](), $(
    _0x13ace7(0x280))[_0x13ace7(0x1e8)](), $('[data-form=\x22next-btn\x22][type=\x22submit\x22]')[
    _0x13ace7(0x176)](function() {
    const _0x406920 = _0x13ace7;
    $(this)[_0x406920(0x164)](_0x406920(0x272), _0x406920(0x27c));
});

function getParams() {
    const _0x40224d = _0x13ace7;
    urlFormly[_0x40224d(0x278)]['forEach'](function(_0x4bcad3, _0x22ffe8) {
        const _0x51983b =
            _0x40224d;
        searchQ[_0x51983b(0x1e7)]({ 'val': _0x4bcad3, 'key': _0x22ffe8 });
    });
}

function getSafe(_0x1ccc11, _0x3153e9) {
    try { return _0x1ccc11(); } catch (
        _0x212c21) { return _0x3153e9; }
}

function phoneAutoFormat(_0x2a68b8) {
    var _0x2ffad2 = '';
    return function(_0x4e9d70) {
        const
            _0x4a598f = _0x42cf;
        var _0x1a80c6 = '',
            _0x33fdad = _0x4e9d70[_0x4a598f(0x1d5)](/\D/g, ''),
            _0x310b7f = 0x0,
            _0x302cca = 0x0;
        while (_0x310b7f < _0x33fdad['length'] && _0x302cca < _0x2a68b8[_0x4a598f(
                0x2b1)]) {
            _0x2a68b8[_0x302cca] === 'x' ? (_0x1a80c6 += _0x33fdad[_0x310b7f],
                _0x310b7f++) : _0x1a80c6 += _0x2a68b8[_0x302cca], _0x302cca++;
        }
        if (_0x4e9d70[_0x4a598f(
                0x2b1)] < _0x2ffad2[_0x4a598f(0x2b1)]) {
            var _0x4ebde7 = _0x2a68b8[_0x4a598f(0x17a)](
                _0x302cca);
            _0x1a80c6 += _0x4ebde7[_0x4a598f(0x1d5)](/x/g, '');
        }
        return _0x2ffad2 = _0x1a80c6,
            _0x1a80c6;
    };
}

function validateURL(_0x1ac167) {
    const _0x325b08 = _0x13ace7;
    return urlPattern[_0x325b08(0x23f)](
        _0x1ac167) ? !![] : ![];
}
quiz && steps[_0x13ace7(0x176)](function() {
    const _0x187d64 =
        _0x13ace7;
    $(this)[_0x187d64(0x1f6)]()[_0x187d64(0x164)](_0x187d64(0x1bd), !![]), $(this)[_0x187d64(
        0x1f6)]()[_0x187d64(0x164)](_0x187d64(0x19b), 0xfa);
});

function disableBtn(_0xe66f29) {
    const _0x2c4317 = _0x13ace7;
    fill = ![], !customError && ($(_0x2c4317(0x286))[_0x2c4317(0x217)]({
        'opacity': _0x2c4317(
            0x1b8),
        'pointer-events': 'none'
    }), $(_0x2c4317(0x286))['addClass'](_0x2c4317(0x203)), $(
        _0x2c4317(0x185))[_0x2c4317(0x217)]({
        'opacity': '0.4',
        'pointer-events': _0x2c4317(
            0x26d)
    }), $(_0x2c4317(0x185))[_0x2c4317(0x1fd)](_0x2c4317(0x203)), $(_0x2c4317(0x222))[
        _0x2c4317(0x217)]({ 'opacity': _0x2c4317(0x1b8), 'pointer-events': _0x2c4317(0x26d) }), $(
        _0x2c4317(0x222))[_0x2c4317(0x1fd)](_0x2c4317(0x203)));
}

function enableBtn() {
    const _0x21c756 = _0x13ace7;
    fill = !![], $(_0x21c756(0x286))[_0x21c756(0x217)]({
        'pointer-events': _0x21c756(
            0x213),
        'opacity': '1'
    }), $('[data-form=\x22next-btn\x22]')[_0x21c756(0x195)](_0x21c756(
        0x203)), $(_0x21c756(0x185))[_0x21c756(0x217)]({
        'pointer-events': _0x21c756(
            0x213),
        'opacity': '1'
    }), $('[data-form=\x22submit-btn\x22]')['removeClass'](_0x21c756(
        0x203)), $(_0x21c756(0x222))['css']({ 'pointer-events': 'auto', 'opacity': '1' }), $(
        _0x21c756(0x222))[_0x21c756(0x195)](_0x21c756(0x203));
}

function _0x5d2e() {
    const _0x4b0ad4 = ['length', 'every', ':input[type=\x22url\x22][required]',
        'option[value=\x22', '[data-display=\x22', 'require', '[data-clone-wrapper]', 'toLowerCase',
        'ms-field', '9HPGmvY', 'FormlyLogic\x20enabled', ':input[type=\x22time\x22][required]',
        'weighted-selection', 'ajaxComplete', '[data-callback=\x22recaptcha\x22]', '2992DKSJyT',
        ':input[type=\x22text\x22][required]',
        '</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Formly\x20Script\x20Info</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>Script\x20URL:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>',
        ':focus', '[data-conditional-result]', '[data-clone=\x22', 'data-input-field',
        'querySelector', '[type=\x22radio\x22]', 'destroy', '[data-form=\x22remove-clone\x22]',
        '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Back\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button',
        'top', 'getResponse', 'getElementById', '\x22]\x20textarea', 'progressive-input', 'trigger',
        'Failed\x20to\x20get\x20counter\x20value', 'tagName', 'slow', 'parents', 'formly',
        'querySelectorAll', 'attr', '[data-skip-to]', '2053124NJbZKb', '[data-progressive-target]',
        ':input[type=\x22file\x22]', 'block-domain', 'closest', '[data-reinit]',
        '[data-form=\x22next-btn\x22][data-submit-show]', ':input[type=\x22text\x22]',
        '[data-form=\x22submit\x22]:visible', 'w--redirected-checked', 'conditional-result', 'card',
        '[data-display]', '[data-weighted-selection-range]', 'input[type=\x22radio\x22]',
        '[data-input-field=\x22', 'each', 'radio-delay', ':input[type=\x22email\x22]',
        '\x22]\x20input', 'slice', 'input[type=\x22submit\x22]', ':checked', 'Total', 'answer',
        'radio-skip', '[data-index=\x22', 'filledInput', '\x20times.', 'data-form', 'stopPropagation',
        '[data-form=\x22submit-btn\x22]', '[data-go-to]', '[data-input-index=\x22',
        '[data-form=\x22step\x22]', '[data-form=\x22step\x22][data-card]',
        '<strong\x20class=\x22f-text-white\x22>ReCAPTCHA\x20', '[data-quiz]',
        ':input[type=\x22email\x22][required]', '2040170fVBHxD', 'scroll-top-offset',
        '[data-btn=\x22check\x22]', ':input[type=\x22tel\x22][required]',
        '[data-custom-error-message]', 'textarea[name=\x22', '[data-click-addclass]', 'backTo',
        'removeClass', 'index', ':input[type=\x22checkbox\x22][required]:checked',
        '[type=\x22checkbox\x22]', 'startsWith',
        '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Next\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button\x20',
        'data-radio-delay', 'quiz', '[data-selection=\x22other\x22]',
        'option[value=\x22$(this).val()\x22]', '[data-selection]', 'some', 'weighted-selection-range',
        'stringify', 'data-name', 'true', '[data-radio-skip]:visible',
        'No\x20Formly\x20script\x20added\x20to\x20the\x20page!',
        '\x22][data-progressive-input-value=\x22', 'required', 'filter',
        '[data-text=\x22current-step\x22]', 'input', 'select', '[data-selected]:checked', 'join',
        '<strong\x20class=\x22f-text-white\x22>Press\x20\x22Enter\x22\x20To\x20Progress\x20',
        'This\x20script\x20has\x20been\x20used\x20', 'formlyLastStepAnswer', 'remove', 'href',
        '[data-checkbox]', 'focus', '[data-selection-weight]', 'current', '0.4',
        '<strong\x20class=\x22f-text-white\x22>Press\x20\x22⌘\x20+\x20Enter\x20\x22\x20To\x20Submit\x20',
        'data-go-to', '347952smbDtf', '[data-count-card]', 'data-radio-skip', 'last',
        '.w-radio-input', '[data-display-input=\x22', '_blank', 'Please\x20wait...', 'padding',
        'prop', 'step', 'parent', '[data-form=\x22step\x22]:not([data-card=\x22true\x22])',
        '</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Number\x20of\x20steps:\x20',
        'location', 'body', '[data-weighted-selection]', 'FAIL', 'createElement',
        '[data-form=\x22progress\x22]', 'get', 'add-new', 'show', 'input[name=\x22',
        'form[data-form=\x22multistep\x22]', '1772330RPNVDy', 'replace', 'val', 'go-to', 'removeItem',
        '[data-display-input-index=\x22', 'sfte', 'keypress', 'submit',
        '[data-form=\x22remove-input-clone\x22]', 'Basic\x20(No\x20Formly\x20Logic)', 'selection',
        ':input[required]',
        '<strong\x20class=\x22f-text-white\x22>Intro\x20Cards\x20Or\x20Steps\x20Without\x20Inputs\x20',
        '[data-enter=\x22true\x22]', 'skip-to', 'head', ':first',
        '[data-form=\x22progress-indicator\x22]', 'push', 'hide', 'div', '35%',
        '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>4.\x20Back\x20Buttons:\x20data-form=next-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Back\x20button\x20present?\x20',
        'relationship-', 'textarea:focus', 'animate', 'select[required]', 'AND',
        '[data-progressive-input]:not(:visible)', 'getItem', 'value', '.active-answer-card', 'log',
        'children', 'preventDefault', '\x22]\x20select', 'script', 'redirect-delay',
        '[data-select-multiple]', 'min-character', 'addClass', 'enter',
        '<strong\x20class=\x22f-text-white\x22>Radio\x20Inputs\x20', '0px',
        '[data-clone-input-wrapper]', 'BODY', 'disabled', '[data-query-param]',
        '[data-progressive-target=\x22', 'forEach', 'siblings', 'append', '[data-cms-select=cms]',
        '[data-selection=\x22', 'script[src=\x22', 'span', 'html,\x20body', '.w-checkbox-input',
        '[data-show-if]',
        '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Powerups</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        'submit-show', 'file', 'auto', ':input[type=\x22date\x22]', 'inputName', '4sHeKZp', 'css',
        '[data-text=\x22error-message\x22]',
        '<div\x20data-range=\x22selection\x22\x20style=\x22display:none\x20!important\x22>',
        'clone-input', 'logic-extra', '[data-text=\x22total-weight\x22]', 'textarea', 'ajax',
        'reset-delay', '<strong\x20class=\x22f-text-white\x22>Current\x20Step\x20Text\x20',
        'select:not([data-prefill=\x22false\x22])', '[data-form-ms=\x22submit-btn\x22]',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20', ':input[type=\x22date\x22][required]', 'includes',
        'input:radio[name=\x22', '[data-display-index=\x22', 'debug-mode', 'search',
        '[data-text=\x22total-steps\x22]', 'radio', 'selected', 'phone-autoformat',
        ':input[type=\x22password\x22]',
        '<strong\x20class=\x22f-text-white\x22>Total\x20Step\x20Text\x20', '[data-clone-wrapper=\x22',
        '[data-answer=\x22', '3hTKUHQ', 'https://x8ki-letl-twmt.n7.xano.io/api:EbCCRNhB/counter/2',
        'clickable-all', '[data-progressive-input=\x22', 'reset', '[data-display-input]', 'clone',
        'getElementsByTagName', 'textarea[required]', 'select[name=\x22',
        '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>Script\x20Location:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>',
        'not', '[data-clone-input=\x22', 'test', '[data-range]:contains(', 'Webflow',
        '[data-form=\x22submit-btn\x22]:visible', 'error', 'click', '[data-form=\x22multistep\x22]',
        'input[type=\x22checkbox\x22]:visible',
        '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>5.\x20Submit\x20Buttons:\x20data-form=next-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Submit\x20button\x20present?\x20',
        ':input', 'key', 'phone-validation', 'data-skip-to', '[data-cms-select=text]',
        '[data-progressive-input]', 'width', 'input-field',
        '</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Multistep\x20form\x20attribute\x20is\x20on\x20Form\x20element\x20and\x20not\x20on\x20Form\x20Block\x20element\x0a\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>2.\x20Form\x20Steps:\x20data-form=step\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        'novalidate', 'reinit', 'skipTo', '[data-answer][data-radio-skip]:visible', 'keyCode', 'wait',
        'add-new-input', 'https://x8ki-letl-twmt.n7.xano.io/api:EbCCRNhB/counter/1', '[data-clone]',
        'success', 'input[type=\x22text\x22][required]:visible', 'change',
        '<strong\x20class=\x22f-text-white\x22>Automatic\x20Progress\x20Indicators\x20',
        ':input[type=\x22radio\x22]', 'fadeIn', '.w-form-done', 'appendChild', '69466JUkAPJ',
        '[data-radio-delay]', '[data-clickable]', '[data-redirect-delay]', 'videsigns',
        'active-answer-card', 'init', '[data-submit=\x22true\x22]', '[data-display-wrapper=\x22',
        '</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Attributes</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>1.\x20Form:\x20data-form=multistep\x20',
        'setItem', 'none', ':input[type=\x27radio\x27]:checked', '[data-success-card=\x22', 'metaKey',
        'formly-support', 'type', 'data', 'text', 'query-param',
        'input[type=\x22checkbox\x22][name=\x22', '[data-clickable-all]', 'searchParams', 'split',
        ':input[type=\x22number\x22][required]', ':input[type=\x22url\x22]', 'button', 'memory',
        '\x22]\x20[data-input-field^=\x22', ':input[type=\x22checkbox\x22]:checked',
        '[data-success-card]', 'scroll-top', 'redirect-form-hehexd', 'find',
        ':input[type=\x22password\x22][required]', '[data-clone-input]',
        '[data-form=\x22next-btn\x22]', 'field', 'keydown', 'formlyLastStep', 'parse',
        '[data-reset-delay]', '\x22]:checked', 'application/json', 'checkbox',
        '[data-form=\x22back-btn\x22]', '4003310ZhzJoL', 'findIndex', '<br>Data\x20Go\x20To\x20=\x20',
        'div.g-recaptcha', ':input[type=\x22checkbox\x22]', '<br>Data\x20Answer\x20=\x20',
        '</strong>', 'innerHTML', 'display', 'clickable', 'parentNode', '3493AinsZS', 'style',
        ':input[type=\x22checkbox\x22][required]', 'input:checkbox',
        '<span\x20class=\x22f-icon-embed-xxsmall-2\x20w-embed\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--carbon\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2032\x2032\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M16\x202C8.2\x202\x202\x208.2\x202\x2016s6.2\x2014\x2014\x2014s14-6.2\x2014-14S23.8\x202\x2016\x202m5.4\x2021L16\x2017.6L10.6\x2023L9\x2021.4l5.4-5.4L9\x2010.6L10.6\x209l5.4\x205.4L21.4\x209l1.6\x201.6l-5.4\x205.4l5.4\x205.4z\x22></path></svg></span>',
        '\x22]:not([data-prefill=\x22false\x22])', 'select[required]:visible', '[data-answer]',
        '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>3.\x20Next\x20Buttons:\x20data-form=back-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Next\x20button\x20present?\x20',
        'input[type=\x22email\x22]:visible', '<option>',
        '<span\x20class=\x22f-icon-embed-xxsmall\x20w-embed\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010s10-4.48\x2010-10S17.52\x202\x2012\x202m-2\x2015l-5-5l1.41-1.41L10\x2014.17l7.59-7.59L19\x208z\x22></path></svg></span>',
        '[data-form=\x22custom-progress-indicator\x22]', '\x22][value=\x22', 'click-addclass',
        '[data-input-field]', 'f-mySidenav', '[data-btn=\x22edit\x22]', 'ctrlKey', 'name', 'redirect',
        '[data-radio-skip]'
    ];
    _0x5d2e = function() { return _0x4b0ad4; };
    return _0x5d2e();
}

function saveLastAnswer(_0x53372f) {
    const _0x304e24 = _0x13ace7;
    localStorage[_0x304e24(0x1d8)](_0x304e24(0x1b1)), localStorage[_0x304e24(0x26c)](_0x304e24(0x1b1),
        JSON[_0x304e24(0x1a2)](_0x53372f));
}

function saveFilledInput() {
    const _0x4c7ee8 = _0x13ace7;
    $('form[data-form=\x22multistep\x22]\x20:input')[_0x4c7ee8(0x23d)]('[type=\x22submit\x22]')[
            'each'](function() {
            const _0x38c37e = _0x4c7ee8;
            $(this)['attr'](_0x38c37e(0x272)) === _0x38c37e(0x28e) || $(this)[_0x38c37e(0x164)](
                'type') === _0x38c37e(0x22b) ? $(this)[_0x38c37e(0x1c4)]('checked') && (filledInput[
                    'some'](_0x1f9acc => _0x1f9acc[_0x38c37e(0x215)] === $(this)[_0x38c37e(0x164)](
                    'name')) ? (filledInput = filledInput[_0x38c37e(0x1a9)](_0x1b6085 => _0x1b6085[
                        _0x38c37e(0x215)] !== $(this)['attr'](_0x38c37e(0x2ae))), $(this)[_0x38c37e(0x1d6)]
                    () !== '' && filledInput[_0x38c37e(0x1e7)]({
                        'inputName': $(this)[_0x38c37e(0x164)](
                            'name'),
                        'value': $(this)[_0x38c37e(0x1d6)]()
                    })) : $(this)[_0x38c37e(0x1d6)]() !==
                '' && filledInput['push']({
                    'inputName': $(this)[_0x38c37e(0x164)]('name'),
                    'value': $(
                        this)['val']()
                })) : filledInput[_0x38c37e(0x1a0)](_0x351bc3 => _0x351bc3[
                'inputName'] === $(this)[_0x38c37e(0x164)](_0x38c37e(0x2ae))) ? (filledInput =
                filledInput['filter'](_0x4f0edb => _0x4f0edb['inputName'] !== $(this)[_0x38c37e(0x164)](
                    'name')), $(this)[_0x38c37e(0x1d6)]() !== '' && filledInput[_0x38c37e(0x1e7)]
                ({
                    'inputName': $(this)[_0x38c37e(0x164)](_0x38c37e(0x2ae)),
                    'value': $(this)['val']
                        ()
                })) : $(this)['val']() !== '' && filledInput[_0x38c37e(0x1e7)]({
                'inputName': $(
                    this)[_0x38c37e(0x164)](_0x38c37e(0x2ae)),
                'value': $(this)[_0x38c37e(0x1d6)]()
            });
        }),
        trackLastStep && (formlyLastStep > x ? lastStep = formlyLastStep : lastStep = x, localStorage[
            _0x4c7ee8(0x1d8)](_0x4c7ee8(0x289)), localStorage[_0x4c7ee8(0x26c)](_0x4c7ee8(0x289),
            lastStep)), localStorage[_0x4c7ee8(0x1d8)](_0x4c7ee8(0x181)), localStorage[_0x4c7ee8(0x26c)](
            _0x4c7ee8(0x181), JSON[_0x4c7ee8(0x1a2)](filledInput));
}

function scrollTop() {
    const _0x30ad5a = _0x13ace7;
    scrollToTop && $(_0x30ad5a(0x20d))[_0x30ad5a(0x1ee)]({
        'scrollTop': $(_0x30ad5a(0x245))['offset']
            ()[_0x30ad5a(0x158)] - scrollTopOffset
    }, 0x3e8);
}

function updateStep() {
    const _0x499d3b = _0x13ace7;
    scrollTop(), skip = ![], $(_0x499d3b(0x2a7))[_0x499d3b(0x195)](_0x499d3b(0x203));
    $(_0x499d3b(0x264))['data'](_0x499d3b(0x299)) && (steps[_0x499d3b(0x283)](_0x499d3b(0x1e0))[
            _0x499d3b(0x176)](function() {
            const _0x250f7a = _0x499d3b;
            $($('[data-form=\x22custom-progress-indicator\x22]')[$(this)[_0x250f7a(0x161)](_0x250f7a(
                0x188))[_0x250f7a(0x196)]()]), $(this)['val']() === '' && emptyInput++;
        }), emptyInput >
        0x0 ? $('input[type=\x22submit\x22]')[_0x499d3b(0x1fd)](_0x499d3b(0x203)) : $(_0x499d3b(
            0x17b))[_0x499d3b(0x195)](_0x499d3b(0x203)));
    $(_0x499d3b(0x2a7))[_0x499d3b(0x195)](_0x499d3b(0x1b7)), $(
        '[data-form=\x22custom-progress-indicator\x22]')['addClass']('disabled'), $($(_0x499d3b(
        0x2a7))[x])['addClass'](_0x499d3b(0x1b7)), selection = selections[_0x499d3b(0x1a9)](
        _0x505b92 => _0x505b92[_0x499d3b(0x1c5)] === x - 0x1), console[_0x499d3b(0x1f5)](_0x499d3b(
        0x1da), x);
    next && (x = getSafe(() => selection[0x0][_0x499d3b(0x253)]) ? parseInt(getSafe(() => selection[
        0x0][_0x499d3b(0x253)])) : x, console[_0x499d3b(0x1f5)]('test', x));
    $(_0x499d3b(0x2a2))[_0x499d3b(0x1e8)](), steps['hide']();
    reinitIX === !![] && window[_0x499d3b(0x241)][_0x499d3b(0x2c9)]();
    $(progressbar)[_0x499d3b(0x195)](_0x499d3b(0x1b7));
    for (i = 0x0; i <= x; i++) {
        countCard ? $(
            progressbar[i])['addClass']('current') : !$(steps[i])['data']('card') && $(progressbar[i])[
            _0x499d3b(0x1fd)](_0x499d3b(0x1b7));
    }
    reinitIX === !![] ? (window['Webflow'] && window[
        _0x499d3b(0x241)][_0x499d3b(0x2b6)]('ix2')[_0x499d3b(0x268)](), document['dispatchEvent'](
        new Event('readystatechange')), $(steps[x])[_0x499d3b(0x1d1)]()) : $(steps[x])[_0x499d3b(
        0x25f)](_0x499d3b(0x160));
    $('.active-answer-card')[_0x499d3b(0x195)](_0x499d3b(0x267));
    x === 0x0 && !$(steps[x])[_0x499d3b(0x273)](_0x499d3b(0x171)) && ($(steps[x])[_0x499d3b(0x283)](
            '[data-answer]')[_0x499d3b(0x1d1)](), $(steps[x])['find']('[data-answer]')[_0x499d3b(0x1fd)]
        (_0x499d3b(0x267)));
    selection[_0x499d3b(0x2b1)] > 0x0 ? ($(steps[x])['find']('[data-answer=\x22' + selection[0x0][
        _0x499d3b(0x22c)
    ] + '\x22]')[_0x499d3b(0x1d1)](), $(steps[x])[_0x499d3b(0x283)](_0x499d3b(0x231) + selection[
        0x0][_0x499d3b(0x22c)] + '\x22]')[_0x499d3b(0x1fd)](_0x499d3b(0x267))) : ($(steps[x])['find'](
        _0x499d3b(0x231) + answer + '\x22]')[_0x499d3b(0x1d1)](), $(steps[x])[_0x499d3b(0x283)](
        _0x499d3b(0x231) + answer + '\x22]')[_0x499d3b(0x1fd)](_0x499d3b(0x267)));
    if (x === 0x0) $(
        _0x499d3b(0x28f))['hide'](), $(_0x499d3b(0x286))[_0x499d3b(0x1d1)](), $(_0x499d3b(0x185))[
        _0x499d3b(0x1e8)]();
    else {
        if (x === steps[_0x499d3b(0x2b1)] - 0x1 || $(steps[x])[_0x499d3b(0x283)](_0x499d3b(0x16e))[
                _0x499d3b(0x2b1)] > 0x0) {
            $(_0x499d3b(0x286))['hide']();
            if ($(steps[x])['find'](
                    '[data-form=\x22next-btn\x22][data-submit-show]')[_0x499d3b(0x273)](_0x499d3b(0x211))) $(
                steps[x])[_0x499d3b(0x283)](_0x499d3b(0x16c))[_0x499d3b(0x1d1)]();
            else $(_0x499d3b(0x286))[_0x499d3b(0x273)]('submit-show') && $(
                '[data-form=\x22next-btn\x22]')[_0x499d3b(0x1d1)]();
            $('[data-form=\x22submit-btn\x22]')[_0x499d3b(0x1d1)](), $(_0x499d3b(0x222))[_0x499d3b(0x1d1)]
                (), $('[data-form=\x22back-btn\x22]')[_0x499d3b(0x1d1)]();
        } else $(_0x499d3b(0x286))[
            'show'](), $(_0x499d3b(0x28f))['show'](), $(_0x499d3b(0x185))['hide'](), $(
            '[data-form-ms=\x22submit-btn\x22]')[_0x499d3b(0x1e8)]();
    }
    $($(steps[x])[_0x499d3b(0x283)](
        'input[autofocus]')[0x0])[_0x499d3b(0x1b5)](), $($(steps[x])['find']('textarea[autofocus]')[
        0x0])[_0x499d3b(0x1b5)](), validation();
    for (idx = 0x0; idx <= x; idx++) {
        $($(
            '[data-form=\x22custom-progress-indicator\x22]')[idx])[_0x499d3b(0x195)]('disabled');
    }
}

function validateEmail(_0x36baa7, _0x1f6c02, _0x417221) {
    const _0x1e5581 = _0x13ace7;
    let
        _0x31b0d1 = _0x36baa7['includes']('@') ? _0x36baa7['split']('@')[0x1][_0x1e5581(0x279)]('.')[
            0x0] : [];
    dom = [];
    _0x1f6c02 !== undefined && _0x1f6c02[_0x1e5581(0x279)](',')[_0x1e5581(0x206)](function(
        _0x287ab9) {
        const _0x20e484 = _0x1e5581;
        _0x287ab9[_0x20e484(0x225)](_0x31b0d1) && dom['push'](_0x31b0d1);
    });
    dom[_0x1e5581(0x2b1)] > 0x0 ? domainAllowed = ![] : domainAllowed = !![];
    var _0xb7adc4 =
        /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,20})?$/;
    !_0xb7adc4[_0x1e5581(0x23f)](_0x36baa7) || !
        domainAllowed ? (emailFilled = ![], unfilledArr[_0x1e5581(0x1e7)]({ 'input': _0x417221 })) :
        emailFilled = !![];
}

function phoneValidation(_0x21c541, _0x22d017, _0x2656a0) {
    if (phoneFormat) return _0x22d017 >=
        _0x2656a0 ? !![] : ![];
    else { if (_0x22d017 >= _0x2656a0) return !![]; }
}

function validation() {
    const _0x33cec4 = _0x13ace7;
    $(steps[x])[_0x33cec4(0x273)](_0x33cec4(0x171)) && enableBtn();
    unfilledArr = [], inputFilled = !![], radioFilled = !![], checkboxFilled = !![], numFilled = !![],
        fileFilled = !![], dateFilled = !![], timeFilled = !![], selectFilled = !![], textareaFilled = !
        ![], telFilled = !![], emailFilled = !![], passwordFilled = !![], emptyInput = 0x0,
        empReqInput = [], empReqDate = [], empReqTime = [], empReqSelect = [], empReqTel = [],
        empReqTextarea = [], empReqNum = [], empReqFile = [], empReqRadio = [], textareaLength = $(
            steps[x])['find']('textarea[required]:visible')[_0x33cec4(0x2b1)], textInputLength = $(steps[
            x])[_0x33cec4(0x283)](_0x33cec4(0x25b))[_0x33cec4(0x2b1)], selectInputLength = $(steps[x])[
            _0x33cec4(0x283)](_0x33cec4(0x2a1))[_0x33cec4(0x2b1)], emailInputLength = $(steps[x])[
            _0x33cec4(0x283)](_0x33cec4(0x2a4))[_0x33cec4(0x2b1)], checkboxInputLength = $(steps[x])[
            _0x33cec4(0x283)](_0x33cec4(0x246))[_0x33cec4(0x2b1)];
    textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0 ? disableBtn() :
        enableBtn();
    checkCount = $(steps[x])[_0x33cec4(0x273)](_0x33cec4(0x28e)) ? $(steps[x])['data'](_0x33cec4(
        0x28e)) : $(steps[x])[_0x33cec4(0x283)](_0x33cec4(0x1b4))['length'] > 0x0 ? $(steps[x])[
        _0x33cec4(0x283)](_0x33cec4(0x1b4))[_0x33cec4(0x273)](_0x33cec4(0x28e)) : 0x0;
    if (!logicExtra)
        $(steps[x])[_0x33cec4(0x283)](_0x33cec4(0x248))['is'](_0x33cec4(0x198)) && (checkCount ===
            '*' || checkCount > $(steps[x])[_0x33cec4(0x283)](':input[type=\x22checkbox\x22]')['length'] ?
            $(steps[x])[_0x33cec4(0x283)](':input[type=\x22checkbox\x22]')['each'](function() {
                const
                    _0x1968a4 = _0x33cec4;
                $(this)['is'](_0x1968a4(0x17c)) ? $(steps[x])[_0x1968a4(0x283)](_0x1968a4(0x29d))[
                    _0x1968a4(0x2b1)] < 0x1 && (checkboxFilled = !![], resetInputErrorMessage($(this)[
                    _0x1968a4(0x164)](_0x1968a4(0x2ae)))) : (checkboxFilled = ![], unfilledArr[_0x1968a4(
                    0x1e7)]({ 'input': $(this)[_0x1968a4(0x164)](_0x1968a4(0x2ae)) }));
            }) : $(steps[x])[
                _0x33cec4(0x283)](_0x33cec4(0x27f))[_0x33cec4(0x2b1)] >= checkCount ? $(steps[x])[_0x33cec4(
                0x283)](_0x33cec4(0x29d))[_0x33cec4(0x2b1)] > 0x0 ? $(steps[x])[_0x33cec4(0x283)](_0x33cec4(
                0x29d))[_0x33cec4(0x176)](function() {
                const _0x48c682 = _0x33cec4;
                checkboxFilled = ![];
                let _0x5c0327 = $(steps[x])[_0x48c682(0x283)](_0x48c682(0x29d))[
                        'length'],
                    _0x5afa71 = $(steps[x])[_0x48c682(0x283)](
                        ':input[type=\x22checkbox\x22][required]:checked')[_0x48c682(0x2b1)];
                _0x5c0327 - _0x5afa71 === 0x0 ? (checkboxFilled = !![], resetInputErrorMessage($(steps[
                    x])[_0x48c682(0x283)](_0x48c682(0x294))['attr']('name'))) : (checkboxFilled = ![], $(
                    steps[x])[_0x48c682(0x283)](
                    ':input[type=\x22checkbox\x22][required]:not(:checked)')[_0x48c682(0x176)](
                    function() {
                        const _0x3b5c55 = _0x48c682;
                        unfilledArr[_0x3b5c55(0x1e7)]({ 'input': $(this)['attr'](_0x3b5c55(0x2ae)) });
                    }));
            }) :
            (checkboxFilled = !![], resetInputErrorMessage($(steps[x])[_0x33cec4(0x283)](_0x33cec4(
                0x294))[_0x33cec4(0x164)](_0x33cec4(0x2ae)))) : (checkboxFilled = ![], $(steps[x])[
                _0x33cec4(0x283)](_0x33cec4(0x29d))[_0x33cec4(0x176)](function() {
                const _0x1b8511 =
                    _0x33cec4;
                $(this)['not'](_0x1b8511(0x17c)) && unfilledArr[_0x1b8511(0x1e7)]({
                    'input': $(this)[
                        'attr'](_0x1b8511(0x2ae))
                });
            }), unfilledArr[_0x33cec4(0x1e7)]({
                'input': $(steps[
                    x])[_0x33cec4(0x283)](_0x33cec4(0x294))['attr']('name')
            }))), $(steps[x])[_0x33cec4(
            0x283)]('input:radio[required]')['each'](function(_0x4d0c16) {
            const _0x1adb7c =
                _0x33cec4;
            var _0x415d29 = $(this)[_0x1adb7c(0x164)](_0x1adb7c(0x2ae));
            $(_0x1adb7c(0x226) + _0x415d29 + _0x1adb7c(0x28c))[_0x1adb7c(0x2b1)] == 0x0 ? (!empReqRadio[
                    'find'](_0x26c6e3 => _0x26c6e3[_0x1adb7c(0x1ab)] === _0x4d0c16) && empReqRadio[
                    _0x1adb7c(0x1e7)]({ 'input': _0x4d0c16 }), unfilledArr[_0x1adb7c(0x1e7)]({
                    'input': $(
                        this)['attr'](_0x1adb7c(0x2ae))
                })) : empReqRadio = empReqRadio[_0x1adb7c(0x1a9)](
                    _0x2bb143 => _0x2bb143['input'] !== _0x4d0c16), empReqRadio[_0x1adb7c(0x2b1)] === 0x0 ?
                radioFilled = !![] : radioFilled = ![];
        }), $(steps[x])[_0x33cec4(0x283)](_0x33cec4(0x2c1))[
            'each'](function(_0x572224) {
            const _0xbb0bf8 = _0x33cec4;
            let _0x51b60d = $(this)[_0xbb0bf8(
                    0x1d6)]()[_0xbb0bf8(0x2b1)],
                _0x3effbe = $(this)['data'](_0xbb0bf8(0x1fc)) ? $(this)[_0xbb0bf8(0x273)](
                    'min-character') : 0x0;
            $(this)[_0xbb0bf8(0x1d6)]() !== '' && _0x51b60d >= _0x3effbe ? empReqInput = empReqInput[
                    'filter'](_0x554bf9 => _0x554bf9[_0xbb0bf8(0x1ab)] !== _0x572224) : (!empReqInput[
                    _0xbb0bf8(0x283)](_0x16ad8d => _0x16ad8d['input'] === _0x572224) && empReqInput[
                    _0xbb0bf8(0x1e7)]({ 'input': _0x572224 }), unfilledArr[_0xbb0bf8(0x1e7)]({
                    'input': $(
                        this)['attr'](_0xbb0bf8(0x2ae))
                })), empReqInput[_0xbb0bf8(0x2b1)] === 0x0 ?
                inputFilled = !![] : inputFilled = ![];
        }), $(steps[x])[_0x33cec4(0x283)](_0x33cec4(0x284))[
            _0x33cec4(0x176)](function(_0x10b023) {
            const _0x1e1228 = _0x33cec4;
            let _0x5021e6 = $(this)[
                    _0x1e1228(0x1d6)]()[_0x1e1228(0x2b1)],
                _0x181148 = $(this)[_0x1e1228(0x273)](_0x1e1228(0x1fc)) ? $(this)[_0x1e1228(0x273)](
                    _0x1e1228(0x1fc)) : 0x0;
            $(this)['val']() !== '' && _0x5021e6 >= _0x181148 ? empReqPassword = empReqPassword[
                    _0x1e1228(0x1a9)](_0x2c89a4 => _0x2c89a4[_0x1e1228(0x1ab)] !== _0x10b023) : (!
                    empReqPassword[_0x1e1228(0x283)](_0x4aaa7a => _0x4aaa7a['input'] === _0x10b023) &&
                    empReqPassword[_0x1e1228(0x1e7)]({ 'input': _0x10b023 }), unfilledArr[_0x1e1228(0x1e7)]
                    ({ 'input': $(this)[_0x1e1228(0x164)]('name') })), empReqPassword[_0x1e1228(0x2b1)] ===
                0x0 ? passwordFilled = !![] : passwordFilled = ![];
        }), $(steps[x])[_0x33cec4(0x283)](
            _0x33cec4(0x2b3))['each'](function(_0x5c00d2) {
            const _0x58430a = _0x33cec4;
            let _0x4c0a04 =
                $(this)[_0x58430a(0x1d6)]()[_0x58430a(0x2b1)],
                _0x525461 = $(this)[_0x58430a(0x273)]('min-character') ? $(this)[_0x58430a(0x273)](
                    _0x58430a(0x1fc)) : 0x0;
            $(this)[_0x58430a(0x1d6)]() !== '' && _0x4c0a04 >= _0x525461 ? empReqUrl = empReqUrl[
                    _0x58430a(0x1a9)](_0x4f16d0 => _0x4f16d0[_0x58430a(0x1ab)] !== _0x5c00d2) : (!
                    empReqTime[_0x58430a(0x283)](_0x3fa42a => _0x3fa42a['input'] === _0x5c00d2) &&
                    empReqUrl[_0x58430a(0x1e7)]({ 'input': _0x5c00d2 }), unfilledArr[_0x58430a(0x1e7)]
                    ({ 'input': $(this)['attr'](_0x58430a(0x2ae)) })), empReqUrl[_0x58430a(0x2b1)] ===
                0x0 &&
                validateURL($(this)[_0x58430a(0x1d6)]()) ? urlFilled = !![] : urlFilled = ![];
        }), $(steps[
            x])[_0x33cec4(0x283)](_0x33cec4(0x2bc))[_0x33cec4(0x176)](function(_0x5380e3) {
            const
                _0x4b416b = _0x33cec4;
            let _0x31b964 = $(this)[_0x4b416b(0x1d6)]()[_0x4b416b(0x2b1)],
                _0x47c308 = $(this)['data'](_0x4b416b(0x1fc)) ? $(this)[_0x4b416b(0x273)](
                    'min-character') : 0x0;
            $(this)[_0x4b416b(0x1d6)]() !== '' && _0x31b964 >= _0x47c308 ? empReqTime = empReqTime[
                    _0x4b416b(0x1a9)](_0x2d6138 => _0x2d6138[_0x4b416b(0x1ab)] !== _0x5380e3) : (!
                    empReqTime['find'](_0x1e83c3 => _0x1e83c3[_0x4b416b(0x1ab)] === _0x5380e3) &&
                    empReqTime[_0x4b416b(0x1e7)]({ 'input': _0x5380e3 }), unfilledArr['push']({
                        'input': $(
                            this)[_0x4b416b(0x164)](_0x4b416b(0x2ae))
                    })), empReqTime[_0x4b416b(0x2b1)] ===
                0x0 ? timeFilled = !![] : timeFilled = ![];
        }), $(steps[x])[_0x33cec4(0x283)](_0x33cec4(
            0x224))[_0x33cec4(0x176)](function(_0xf346be) {
            const _0x6bdc12 = _0x33cec4;
            $(this)[_0x6bdc12(0x1d6)]() !== '' ? empReqDate = empReqDate[_0x6bdc12(0x1a9)](_0x32f132 =>
                    _0x32f132['input'] !== _0xf346be) : (!empReqDate[_0x6bdc12(0x283)](_0x2f06a4 =>
                        _0x2f06a4[_0x6bdc12(0x1ab)] === _0xf346be) && empReqDate[_0x6bdc12(0x1e7)]
                    ({ 'input': _0xf346be }), unfilledArr[_0x6bdc12(0x1e7)]({
                        'input': $(this)[_0x6bdc12(
                            0x164)](_0x6bdc12(0x2ae))
                    })), empReqDate[_0x6bdc12(0x2b1)] === 0x0 ? dateFilled = !
                ![] : dateFilled = ![];
        }), $(steps[x])['find'](_0x33cec4(0x190))[_0x33cec4(0x176)](function(
            _0x2db02c) {
            const _0x50ff3a = _0x33cec4;
            if ($(this)[_0x50ff3a(0x1d6)]() !== '') {
                let
                    _0xea8e71 = $(this)[_0x50ff3a(0x1d6)]()[_0x50ff3a(0x2b1)],
                    _0x588f1c = $(this)['data'](_0x50ff3a(0x1fc)) ? $(this)['data'](_0x50ff3a(0x1fc)) :
                    0x0;
                if ($(this)['data'](_0x50ff3a(0x22d))) {
                    var _0x5c1432 = phoneAutoFormat($(this)[
                        'data'](_0x50ff3a(0x22d)));
                    $(this)[_0x50ff3a(0x1d6)](_0x5c1432($(this)[_0x50ff3a(0x1d6)]()));
                }
                phoneValidation($(
                    this)[_0x50ff3a(0x1d6)](), _0xea8e71, _0x588f1c) ? (empReqTel = empReqTel[_0x50ff3a(
                    0x1a9)](_0x529456 => _0x529456[_0x50ff3a(0x1ab)] !== _0x2db02c), console[_0x50ff3a(
                    0x1f5)](empReqTel)) : empReqTel[_0x50ff3a(0x1e7)]({ 'input': _0x2db02c });
            } else !
                empReqTel[_0x50ff3a(0x283)](_0x3807bf => _0x3807bf[_0x50ff3a(0x1ab)] === _0x2db02c) &&
                empReqTel[_0x50ff3a(0x1e7)]({ 'input': _0x2db02c }), unfilledArr['push']({
                    'input': $(
                        this)[_0x50ff3a(0x164)]('name')
                });
            empReqTel[_0x50ff3a(0x2b1)] === 0x0 ? telFilled = !![] : telFilled = ![];
        }), $(steps[x])[
            _0x33cec4(0x283)](':input[type=\x22file\x22][required]')[_0x33cec4(0x176)](function(
            _0x848845) {
            const _0x138099 = _0x33cec4;
            $(this)[_0x138099(0x1d6)]() !== '' ? empReqFile = empReqFile[_0x138099(0x1a9)](_0x23dfc5 =>
                    _0x23dfc5[_0x138099(0x1ab)] !== _0x848845) : (!empReqFile[_0x138099(0x283)](_0x341326 =>
                        _0x341326[_0x138099(0x1ab)] === _0x848845) && empReqFile['push']
                    ({ 'input': _0x848845 }), unfilledArr[_0x138099(0x1e7)]({
                        'input': $(this)['attr'](
                            _0x138099(0x2ae))
                    })), empReqFile['length'] === 0x0 ? fileFilled = !![] :
                fileFilled = ![];
        }), $(steps[x])[_0x33cec4(0x283)](
            ':input[type=\x22number\x22][required]')[_0x33cec4(0x176)](function(_0x2c16da) {
            const
                _0x273b5d = _0x33cec4;
            let _0x2aefd1 = $(this)['val']()['length'],
                _0x4fb649 = $(this)[_0x273b5d(0x273)](_0x273b5d(0x1fc)) ? $(this)['data'](_0x273b5d(
                    0x1fc)) : 0x0;
            $(this)[_0x273b5d(0x1d6)]() !== '' && _0x2aefd1 >= _0x4fb649 ? empReqNum = empReqNum[
                    'filter'](_0x26f089 => _0x26f089[_0x273b5d(0x1ab)] !== _0x2c16da) : (!empReqNum['find'](
                        _0x402baa => _0x402baa[_0x273b5d(0x1ab)] === _0x2c16da) && empReqNum['push']
                    ({ 'input': _0x2c16da }), unfilledArr[_0x273b5d(0x1e7)]({
                        'input': $(this)[_0x273b5d(
                            0x164)](_0x273b5d(0x2ae))
                    })), empReqNum[_0x273b5d(0x2b1)] === 0x0 ? numFilled = !
                ![] : numFilled = ![];
        }), $(steps[x])[_0x33cec4(0x283)](_0x33cec4(0x1ef))[_0x33cec4(0x176)](
            function(_0x50351e) {
                const _0x4a0764 = _0x33cec4;
                let _0x5665ed = $(this)['val']();
                _0x5665ed === '' && (_0x5665ed = null), _0x5665ed != null ? empReqSelect = empReqSelect[
                        'filter'](_0x153848 => _0x153848[_0x4a0764(0x1ab)] !== _0x50351e) : (!empReqSelect[
                        'find'](_0x1415b7 => _0x1415b7[_0x4a0764(0x1ab)] === _0x50351e) && empReqSelect[
                        'push']({ 'input': _0x50351e }), unfilledArr[_0x4a0764(0x1e7)]({
                        'input': $(this)[
                            'attr'](_0x4a0764(0x2ae))
                    })), empReqSelect[_0x4a0764(0x2b1)] === 0x0 ?
                    selectFilled = !![] : selectFilled = ![];
            }), $(steps[x])[_0x33cec4(0x283)](_0x33cec4(
            0x23a))[_0x33cec4(0x176)](function(_0x4a0699) {
            const _0x3f7d51 = _0x33cec4;
            let _0x426515 =
                $(this)[_0x3f7d51(0x1d6)]()['length'],
                _0x1900e1 = $(this)['data']('min-character') ? $(this)[_0x3f7d51(0x273)](_0x3f7d51(
                    0x1fc)) : 0x0;
            $(this)[_0x3f7d51(0x1d6)]() !== '' && _0x426515 >= _0x1900e1 ? empReqTextarea =
                empReqTextarea[_0x3f7d51(0x1a9)](_0xa4712f => _0xa4712f['input'] !== _0x4a0699) : (!
                    empReqTextarea[_0x3f7d51(0x283)](_0x51f2b7 => _0x51f2b7[_0x3f7d51(0x1ab)] ===
                        _0x4a0699) && empReqTextarea[_0x3f7d51(0x1e7)]({ 'input': _0x4a0699 }), unfilledArr[
                        _0x3f7d51(0x1e7)]({ 'input': $(this)['attr'](_0x3f7d51(0x2ae)) })), empReqTextarea[
                    _0x3f7d51(0x2b1)] === 0x0 ? textareaFilled = !![] : textareaFilled = ![];
        }), $(steps[x])[
            _0x33cec4(0x283)](_0x33cec4(0x18c))[_0x33cec4(0x176)](function() {
            const _0x47087a =
                _0x33cec4;
            $(this)[_0x47087a(0x1d6)]() !== '' ? validateEmail($(this)[_0x47087a(0x1d6)](), $(this)[
                'data'](_0x47087a(0x169)), $(this)[_0x47087a(0x164)](_0x47087a(0x2ae))) : (
                emailFilled = ![], unfilledArr[_0x47087a(0x1e7)]({
                    'input': $(this)[_0x47087a(0x164)](
                        _0x47087a(0x2ae))
                }));
        });
    else {
        if ($(steps[x])[_0x33cec4(0x273)](_0x33cec4(0x171))) answer = $(steps[x])[_0x33cec4(0x283)]
            ('[data-go-to]')[_0x33cec4(0x273)](_0x33cec4(0x1d7)), selections = selections[_0x33cec4(
                0x1a9)](_0xcd766a => _0xcd766a[_0x33cec4(0x1c5)] !== x), selections[_0x33cec4(0x1e7)]
            ({ 'step': x, 'selected': answer });
        else $(steps[x])[_0x33cec4(0x283)](_0x33cec4(0x1f4))['data'](_0x33cec4(0x171)) && (answer = $(
                steps[x])[_0x33cec4(0x283)]('.active-answer-card')['data']('go-to'), selections =
            selections[_0x33cec4(0x1a9)](_0x5dbde8 => _0x5dbde8[_0x33cec4(0x1c5)] !== x), selections[
                _0x33cec4(0x1e7)]({ 'step': x, 'selected': answer }));
        $(steps[x])[_0x33cec4(0x283)]('.active-answer-card')[_0x33cec4(0x283)](_0x33cec4(0x248))['is'](
            _0x33cec4(0x198)) && (checkCount === '*' || checkCount > $(steps[x])[_0x33cec4(0x283)](
            _0x33cec4(0x294))[_0x33cec4(0x2b1)] ? $(steps[x])[_0x33cec4(0x283)](
            ':input[type=\x22checkbox\x22]')[_0x33cec4(0x176)](function() {
            const _0x7b84d7 =
                _0x33cec4;
            $(this)['is'](_0x7b84d7(0x17c)) ? $(steps[x])[_0x7b84d7(0x283)](':input[required]')[
                _0x7b84d7(0x2b1)] < 0x1 && (skipTo = undefined, $(this)[_0x7b84d7(0x161)](_0x7b84d7(
                    0x165))[_0x7b84d7(0x273)](_0x7b84d7(0x1e3)) && (skipTo = $(this)[_0x7b84d7(0x161)]
                    (_0x7b84d7(0x165))['data']('skip-to')), $(this)[_0x7b84d7(0x161)](_0x7b84d7(
                    0x186))[_0x7b84d7(0x164)]('data-go-to') && (answer = $(this)[_0x7b84d7(0x161)](
                        '[data-go-to]')['attr']('data-go-to'), selections = selections['filter'](
                        _0x2396ae => _0x2396ae[_0x7b84d7(0x1c5)] !== x), selections[_0x7b84d7(0x1e7)]
                    ({ 'step': x, 'selected': answer }), skipTo && (selections[_0x7b84d7(0x1e7)]
                        ({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x7b84d7(
                            0x291)](_0x13abb8 => _0x13abb8[_0x7b84d7(0x1c5)] === x), selections[objIndex][
                            _0x7b84d7(0x253)
                        ] = parseInt(skipTo) - 0x1, selections[objIndex][_0x7b84d7(0x194)] = x)),
                checkboxFilled = !![], $(steps[x])['find'](_0x7b84d7(0x197))[_0x7b84d7(0x2b1)] >= $(
                    steps[x])['find'](_0x7b84d7(0x29d))[_0x7b84d7(0x2b1)] && resetInputErrorMessage($(
                    steps[x])[_0x7b84d7(0x283)](_0x7b84d7(0x294))['attr'](_0x7b84d7(0x2ae)))) : (
                checkboxFilled = ![], unfilledArr[_0x7b84d7(0x1e7)]({
                    'input': $(this)[_0x7b84d7(
                        0x164)]('name')
                }));
        }) : $(steps[x])[_0x33cec4(0x283)](_0x33cec4(0x1f4))['find'](
            _0x33cec4(0x27f))[_0x33cec4(0x2b1)] >= checkCount ? ($(steps[x])['find'](_0x33cec4(
                0x1f4))[_0x33cec4(0x283)](':input[type=\x22checkbox\x22]')[_0x33cec4(0x161)](_0x33cec4(
                0x186))[_0x33cec4(0x164)]('data-go-to') && (skipTo = undefined, $(steps[x])[_0x33cec4(
                    0x283)](_0x33cec4(0x1f4))[_0x33cec4(0x283)](_0x33cec4(0x294))['parents'](_0x33cec4(
                    0x165))[_0x33cec4(0x164)](_0x33cec4(0x24b)) && (skipTo = $(steps[x])[_0x33cec4(0x283)]
                    (_0x33cec4(0x1f4))[_0x33cec4(0x283)](_0x33cec4(0x27f))[_0x33cec4(0x161)](_0x33cec4(
                        0x165))[_0x33cec4(0x164)](_0x33cec4(0x24b))), answer = $(steps[x])['find'](
                    '.active-answer-card')[_0x33cec4(0x283)](_0x33cec4(0x294))[_0x33cec4(0x161)](
                    _0x33cec4(0x186))[_0x33cec4(0x164)](_0x33cec4(0x1ba)), selections = selections[
                    _0x33cec4(0x1a9)](_0x2b6e09 => _0x2b6e09['step'] !== x), selections[_0x33cec4(0x1e7)]
                ({ 'step': x, 'selected': answer }), skipTo && (selections = selections['filter'](
                        _0x1f531a => _0x1f531a['step'] !== skipTo - 0x2), selections[_0x33cec4(0x1e7)]
                    ({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x33cec4(
                        0x291)](
                        _0x248e3c => _0x248e3c[_0x33cec4(0x1c5)] === x), selections[objIndex][_0x33cec4(
                        0x253)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x33cec4(0x194)] = x)),
            checkboxFilled = !![], $(steps[x])['find'](
                ':input[type=\x22checkbox\x22][required]:checked')['length'] >= $(steps[x])[_0x33cec4(
                0x283)](':input[type=\x22checkbox\x22][required]')[_0x33cec4(0x2b1)] &&
            resetInputErrorMessage($(steps[x])[_0x33cec4(0x283)](_0x33cec4(0x294))[_0x33cec4(0x164)](
                'name'))) : (checkboxFilled = ![], $(steps[x])['find'](_0x33cec4(0x29d))[_0x33cec4(
            0x176)](function() {
            const _0xd2f866 = _0x33cec4;
            $(this)[_0xd2f866(0x23d)](_0xd2f866(0x17c)) && unfilledArr[_0xd2f866(0x1e7)]
                ({ 'input': $(this)[_0xd2f866(0x164)]('name') });
        }))), $(steps[x])['find'](
            '.active-answer-card')[_0x33cec4(0x283)]('input:radio[required]')[_0x33cec4(0x176)](
            function(_0x3267a7) {
                const _0x36b925 = _0x33cec4;
                var _0x259ae7 = $(this)['attr'](
                    _0x36b925(0x2ae));
                $(_0x36b925(0x226) + _0x259ae7 + _0x36b925(0x28c))[_0x36b925(0x2b1)] == 0x0 ? (!
                        empReqRadio['find'](_0x360c49 => _0x360c49[_0x36b925(0x1ab)] === _0x3267a7) &&
                        empReqRadio[_0x36b925(0x1e7)]({ 'input': _0x3267a7 }), unfilledArr[_0x36b925(0x1e7)]
                        ({ 'input': $(this)[_0x36b925(0x164)](_0x36b925(0x2ae)) })) : empReqRadio =
                    empReqRadio[
                        _0x36b925(0x1a9)](_0x203e1b => _0x203e1b['input'] !== _0x3267a7), empReqRadio[
                        _0x36b925(0x2b1)] === 0x0 ? radioFilled = !![] : radioFilled = ![];
            }), $(steps[x])[
            'find'](_0x33cec4(0x1f4))[_0x33cec4(0x283)](_0x33cec4(0x2c1))[_0x33cec4(0x176)](function(
            _0x28f6c7) {
            const _0x5e7281 = _0x33cec4;
            let _0x3eb8f1 = $(this)[_0x5e7281(0x1d6)]()[
                    _0x5e7281(0x2b1)],
                _0x46a033 = $(this)[_0x5e7281(0x273)](_0x5e7281(0x1fc)) ? $(this)[_0x5e7281(0x273)](
                    _0x5e7281(0x1fc)) : 0x0;
            $(this)[_0x5e7281(0x1d6)]() !== '' && _0x3eb8f1 >= _0x46a033 ? empReqInput = empReqInput[
                    'filter'](_0x720ce9 => _0x720ce9[_0x5e7281(0x1ab)] !== _0x28f6c7) : (!empReqInput[
                        _0x5e7281(0x283)](_0x2d084a => _0x2d084a[_0x5e7281(0x1ab)] === _0x28f6c7) &&
                    empReqInput[_0x5e7281(0x1e7)]({ 'input': _0x28f6c7 }), unfilledArr[_0x5e7281(0x1e7)]
                    ({ 'input': $(this)['attr']('name') })), empReqInput[_0x5e7281(0x2b1)] === 0x0 ?
                inputFilled = !![] : inputFilled = ![];
        }), $(steps[x])['find'](_0x33cec4(0x1f4))[
            _0x33cec4(0x283)](_0x33cec4(0x16d))['each'](function(_0x229679) {
            const _0x331cc5 =
                _0x33cec4;
            skipTo = undefined, $(this)[_0x331cc5(0x161)](_0x331cc5(0x165))[_0x331cc5(0x273)](
                _0x331cc5(0x1e3)) !== '' && (skipTo = $(this)[_0x331cc5(0x161)]('[data-skip-to]')[
                _0x331cc5(0x273)](_0x331cc5(0x1e3))), $(this)['parents'](_0x331cc5(0x186))[_0x331cc5(
                0x164)](_0x331cc5(0x1ba)) && (answer = $(this)[_0x331cc5(0x161)](_0x331cc5(0x186))[
                    _0x331cc5(0x164)](_0x331cc5(0x1ba)), selections = selections['filter'](_0x4d03f7 =>
                    _0x4d03f7[_0x331cc5(0x1c5)] !== x), selections[_0x331cc5(0x1e7)]
                ({ 'step': x, 'selected': answer }), skipTo && (selections['push']({
                        'step': skipTo -
                            0x2,
                        'selected': answer
                    }), objIndex = selections[_0x331cc5(0x291)](_0x390b27 =>
                        _0x390b27[_0x331cc5(0x1c5)] === x), selections[objIndex][_0x331cc5(0x253)] =
                    parseInt(skipTo) - 0x1, selections[objIndex]['backTo'] = x));
        }), $(steps[x])[_0x33cec4(
            0x283)](_0x33cec4(0x1f4))[_0x33cec4(0x283)](':input[type=\x22password\x22][required]')[
            _0x33cec4(0x176)](function(_0x2ed9b9) {
            const _0x22ed12 = _0x33cec4;
            let _0x3237de = $(
                    this)['val']()['length'],
                _0x2f92dd = $(this)[_0x22ed12(0x273)](_0x22ed12(0x1fc)) ? $(this)[_0x22ed12(0x273)](
                    _0x22ed12(0x1fc)) : 0x0;
            $(this)['val']() !== '' && _0x3237de >= _0x2f92dd ? empReqPassword = empReqPassword[
                _0x22ed12(0x1a9)](_0x18af6e => _0x18af6e[_0x22ed12(0x1ab)] !== _0x2ed9b9) : (!
                empReqPassword[_0x22ed12(0x283)](_0xeae136 => _0xeae136[_0x22ed12(0x1ab)] ===
                    _0x2ed9b9) && empReqPassword['push']({ 'input': _0x2ed9b9 }), unfilledArr[_0x22ed12(
                    0x1e7)]({ 'input': $(this)[_0x22ed12(0x164)]('name') })), empReqPassword[_0x22ed12(
                0x2b1)] === 0x0 ? passwordFilled = !![] : passwordFilled = ![];
        }), $(steps[x])[_0x33cec4(
            0x283)](_0x33cec4(0x1f4))[_0x33cec4(0x283)](_0x33cec4(0x22e))[_0x33cec4(0x176)](function(
            _0x21b416) {
            const _0x359d76 = _0x33cec4;
            skipTo = undefined, $(this)[_0x359d76(0x161)](_0x359d76(0x165))[_0x359d76(0x273)](
                _0x359d76(0x1e3)) !== '' && (skipTo = $(this)[_0x359d76(0x161)](_0x359d76(0x165))[
                _0x359d76(0x273)](_0x359d76(0x1e3))), $(this)[_0x359d76(0x161)](_0x359d76(0x186))[
                _0x359d76(0x164)](_0x359d76(0x1ba)) && (answer = $(this)['parents'](_0x359d76(0x186))[
                    'attr'](_0x359d76(0x1ba)), selections = selections[_0x359d76(0x1a9)](_0x6a6ae6 =>
                    _0x6a6ae6[_0x359d76(0x1c5)] !== x), selections[_0x359d76(0x1e7)]
                ({ 'step': x, 'selected': answer }), skipTo && (selections[_0x359d76(0x1e7)]
                    ({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x359d76(
                        0x291)](_0x180408 => _0x180408['step'] === x), selections[objIndex][_0x359d76(
                        0x253)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x359d76(0x194)] = x));
        }), $(
            steps[x])[_0x33cec4(0x283)](_0x33cec4(0x1f4))[_0x33cec4(0x283)](_0x33cec4(0x2b3))[_0x33cec4(
            0x176)](function(_0x40a9f9) {
            const _0x165b8d = _0x33cec4;
            let _0xb16b8d = $(this)['val']
                ()['length'],
                _0x338af4 = $(this)[_0x165b8d(0x273)](_0x165b8d(0x1fc)) ? $(this)['data'](_0x165b8d(
                    0x1fc)) : 0x0;
            $(this)[_0x165b8d(0x1d6)]() !== '' && _0xb16b8d >= _0x338af4 ? empReqUrl = empReqUrl[
                    _0x165b8d(0x1a9)](_0x2860d9 => _0x2860d9[_0x165b8d(0x1ab)] !== _0x40a9f9) : (!
                    empReqUrl['find'](_0x2a881d => _0x2a881d[_0x165b8d(0x1ab)] === _0x40a9f9) &&
                    empReqUrl[_0x165b8d(0x1e7)]({ 'input': _0x40a9f9 }), unfilledArr[_0x165b8d(0x1e7)]
                    ({ 'input': $(this)[_0x165b8d(0x164)](_0x165b8d(0x2ae)) })), empReqUrl[_0x165b8d(
                    0x2b1)] === 0x0 && validateURL($(this)[_0x165b8d(0x1d6)]()) ? urlFilled = !![] :
                urlFilled = ![];
        }), $(steps[x])[_0x33cec4(0x283)](_0x33cec4(0x1f4))['find'](_0x33cec4(
            0x27b))[_0x33cec4(0x176)](function(_0x52d50b) {
            const _0x41f84a = _0x33cec4;
            skipTo = undefined, $(this)[_0x41f84a(0x161)](_0x41f84a(0x165))[_0x41f84a(0x273)](
                _0x41f84a(0x1e3)) !== '' && (skipTo = $(this)[_0x41f84a(0x161)]('[data-skip-to]')[
                _0x41f84a(0x273)](_0x41f84a(0x1e3))), $(this)[_0x41f84a(0x161)](_0x41f84a(0x186))[
                _0x41f84a(0x164)]('data-go-to') && (answer = $(this)[_0x41f84a(0x161)](
                    '[data-go-to]')['attr'](_0x41f84a(0x1ba)), selections = selections['filter'](
                    _0x159979 => _0x159979['step'] !== x), selections[_0x41f84a(0x1e7)]
                ({ 'step': x, 'selected': answer }), skipTo && (selections[_0x41f84a(0x1e7)]
                    ({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections['findIndex'](
                        _0x823faa => _0x823faa[_0x41f84a(0x1c5)] === x), selections[objIndex][_0x41f84a(
                        0x253)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x41f84a(0x194)] = x));
        }), $(
            steps[x])[_0x33cec4(0x283)](_0x33cec4(0x1f4))[_0x33cec4(0x283)](_0x33cec4(0x224))['each'](
            function(_0x8a3d9d) {
                const _0x2d6b29 = _0x33cec4;
                $(this)[_0x2d6b29(0x1d6)]() !== '' ? empReqDate = empReqDate[_0x2d6b29(0x1a9)](
                        _0x2760e3 => _0x2760e3[_0x2d6b29(0x1ab)] !== _0x8a3d9d) : (!empReqDate['find'](
                            _0x35af01 => _0x35af01[_0x2d6b29(0x1ab)] === _0x8a3d9d) && empReqDate['push']
                        ({ 'input': _0x8a3d9d }), unfilledArr[_0x2d6b29(0x1e7)]({
                            'input': $(this)[_0x2d6b29(
                                0x164)](_0x2d6b29(0x2ae))
                        })), empReqDate['length'] === 0x0 ? dateFilled = !![] :
                    dateFilled = ![];
            }), $(steps[x])[_0x33cec4(0x283)](_0x33cec4(0x1f4))[_0x33cec4(0x283)](
            _0x33cec4(0x214))[_0x33cec4(0x176)](function(_0x44a4c5) {
            const _0x1aa62f = _0x33cec4;
            skipTo = undefined, $(this)[_0x1aa62f(0x161)](_0x1aa62f(0x165))[_0x1aa62f(0x273)](
                _0x1aa62f(0x1e3)) !== '' && (skipTo = $(this)[_0x1aa62f(0x161)](_0x1aa62f(0x165))[
                _0x1aa62f(0x273)](_0x1aa62f(0x1e3))), $(this)['parents']('[data-go-to]')[_0x1aa62f(
                0x164)]('data-go-to') && (answer = $(this)[_0x1aa62f(0x161)](_0x1aa62f(0x186))[
                    _0x1aa62f(0x164)](_0x1aa62f(0x1ba)), selections = selections[_0x1aa62f(0x1a9)](
                    _0x3a9571 => _0x3a9571[_0x1aa62f(0x1c5)] !== x), selections[_0x1aa62f(0x1e7)]
                ({ 'step': x, 'selected': answer }), skipTo && (selections[_0x1aa62f(0x1e7)]
                    ({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections['findIndex'](
                        _0x377891 => _0x377891[_0x1aa62f(0x1c5)] === x), selections[objIndex][_0x1aa62f(
                        0x253)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x1aa62f(0x194)] = x));
        }), $(
            steps[x])['find'](_0x33cec4(0x1f4))[_0x33cec4(0x283)](
            ':input[type=\x22time\x22][required]')[_0x33cec4(0x176)](function(_0x561c67) {
            const
                _0x9d1b26 = _0x33cec4;
            $(this)[_0x9d1b26(0x1d6)]() !== '' ? empReqTime = empReqTime[_0x9d1b26(0x1a9)](
                    _0x259da6 => _0x259da6[_0x9d1b26(0x1ab)] !== _0x561c67) : (!empReqTime[_0x9d1b26(
                    0x283)](_0x2392fc => _0x2392fc[_0x9d1b26(0x1ab)] === _0x561c67) && empReqTime[
                    'push']({ 'input': _0x561c67 }), unfilledArr[_0x9d1b26(0x1e7)]({
                    'input': $(this)[
                        _0x9d1b26(0x164)]('name')
                })), empReqTime['length'] === 0x0 ? timeFilled = !![] :
                timeFilled = ![];
        }), $(steps[x])[_0x33cec4(0x283)](_0x33cec4(0x1f4))['find'](
            ':input[type=\x22time\x22]')['each'](function(_0x23f9b6) {
            const _0x2d4e2d = _0x33cec4;
            skipTo = undefined, $(this)[_0x2d4e2d(0x161)](_0x2d4e2d(0x165))[_0x2d4e2d(0x273)](
                'skip-to') !== '' && (skipTo = $(this)[_0x2d4e2d(0x161)]('[data-skip-to]')[_0x2d4e2d(
                0x273)](_0x2d4e2d(0x1e3))), $(this)['parents'](_0x2d4e2d(0x186))[_0x2d4e2d(0x164)](
                'data-go-to') && (answer = $(this)['parents'](_0x2d4e2d(0x186))[_0x2d4e2d(0x164)](
                    _0x2d4e2d(0x1ba)), selections = selections[_0x2d4e2d(0x1a9)](_0x46b7df => _0x46b7df[
                    _0x2d4e2d(0x1c5)] !== x), selections[_0x2d4e2d(0x1e7)]
                ({ 'step': x, 'selected': answer }), skipTo && (selections[_0x2d4e2d(0x1e7)]
                    ({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x2d4e2d(
                        0x291)](_0x26c67f => _0x26c67f[_0x2d4e2d(0x1c5)] === x), selections[objIndex][
                        _0x2d4e2d(0x253)
                    ] = parseInt(skipTo) - 0x1, selections[objIndex][_0x2d4e2d(0x194)] = x));
        }), $(steps[x])[
            _0x33cec4(0x283)](_0x33cec4(0x1f4))['find'](_0x33cec4(0x27a))[_0x33cec4(0x176)](function(
            _0x3d6e89) {
            const _0xa22624 = _0x33cec4;
            let _0x52be5c = $(this)[_0xa22624(0x1d6)]()[
                    _0xa22624(0x2b1)],
                _0x2b90ec = $(this)[_0xa22624(0x273)]('min-character') ? $(this)[_0xa22624(0x273)](
                    _0xa22624(0x1fc)) : 0x0;
            $(this)[_0xa22624(0x1d6)]() !== '' && _0x52be5c >= _0x2b90ec ? empReqNum = empReqNum[
                    _0xa22624(0x1a9)](_0x5f2e68 => _0x5f2e68[_0xa22624(0x1ab)] !== _0x3d6e89) : (!
                    empReqNum[_0xa22624(0x283)](_0x57efc7 => _0x57efc7[_0xa22624(0x1ab)] === _0x3d6e89) &&
                    empReqNum[_0xa22624(0x1e7)]({ 'input': _0x3d6e89 }), unfilledArr['push']({
                        'input': $(
                            this)[_0xa22624(0x164)](_0xa22624(0x2ae))
                    })), empReqNum[_0xa22624(0x2b1)] ===
                0x0 ? numFilled = !![] : numFilled = ![];
        }), $(steps[x])[_0x33cec4(0x283)](_0x33cec4(
            0x1f4))[_0x33cec4(0x283)](':input[type=\x22number\x22]')[_0x33cec4(0x176)](function(
            _0x35c877) {
            const _0x23ccc8 = _0x33cec4;
            skipTo = undefined, $(this)[_0x23ccc8(0x161)]('[data-skip-to]')['data'](_0x23ccc8(
                0x1e3)) !== '' && (skipTo = $(this)[_0x23ccc8(0x161)](_0x23ccc8(0x165))['data'](
                'skip-to')), $(this)[_0x23ccc8(0x161)](_0x23ccc8(0x186))['attr']('data-go-to') && (
                answer = $(this)['parents'](_0x23ccc8(0x186))[_0x23ccc8(0x164)](_0x23ccc8(0x1ba)),
                selections = selections[_0x23ccc8(0x1a9)](_0x234119 => _0x234119[_0x23ccc8(0x1c5)] !==
                    x), selections['push']({ 'step': x, 'selected': answer }), skipTo && (selections[
                        _0x23ccc8(0x1e7)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex =
                    selections[_0x23ccc8(0x291)](_0x8efb2d => _0x8efb2d[_0x23ccc8(0x1c5)] === x),
                    selections[objIndex]['skipTo'] = parseInt(skipTo) - 0x1, selections[objIndex][
                        _0x23ccc8(0x194)
                    ] = x));
        }), $(steps[x])[_0x33cec4(0x283)](_0x33cec4(0x1f4))[_0x33cec4(0x283)](
            ':input[type=\x22tel\x22][required]')[_0x33cec4(0x176)](function(_0x24b482) {
            const
                _0x31f2b2 = _0x33cec4;
            if ($(this)[_0x31f2b2(0x1d6)]() !== '') {
                let _0x3f61f8 = $(
                        this)[_0x31f2b2(0x1d6)]()[_0x31f2b2(0x2b1)],
                    _0x301fa0 = $(this)[_0x31f2b2(0x273)](_0x31f2b2(0x1fc)) ? $(this)[_0x31f2b2(0x273)](
                        'min-character') : 0x0;
                if ($(this)[_0x31f2b2(0x273)]('phone-autoformat')) {
                    var
                        _0x4ff010 = phoneAutoFormat($(this)['data'](_0x31f2b2(0x22d)));
                    $(this)[_0x31f2b2(0x1d6)](_0x4ff010($(this)['val']()));
                }
                phoneValidation($(this)[
                        _0x31f2b2(0x1d6)](), _0x3f61f8, _0x301fa0) ? empReqTel = empReqTel[_0x31f2b2(0x1a9)]
                    (_0x2fec28 => _0x2fec28[_0x31f2b2(0x1ab)] !== _0x24b482) : empReqTel[_0x31f2b2(0x1e7)]
                    ({ 'input': _0x24b482 });
            } else !empReqTel[_0x31f2b2(0x283)](_0x22eef5 => _0x22eef5[
                    'input'] === _0x24b482) && empReqTel[_0x31f2b2(0x1e7)]({ 'input': _0x24b482 }),
                unfilledArr[_0x31f2b2(0x1e7)]({ 'input': $(this)[_0x31f2b2(0x164)]('name') });
            empReqTel[_0x31f2b2(0x2b1)] === 0x0 ? telFilled = !![] : telFilled = ![];
        }), $(steps[x])[
            'find'](_0x33cec4(0x1f4))[_0x33cec4(0x283)](':input[type=\x22tel\x22]')[_0x33cec4(0x176)](
            function(_0x1e0168) {
                const _0xf78363 = _0x33cec4;
                skipTo = undefined, $(this)[_0xf78363(0x161)](_0xf78363(0x165))[_0xf78363(0x273)](
                    _0xf78363(0x1e3)) !== '' && (skipTo = $(this)[_0xf78363(0x161)](_0xf78363(0x165))[
                    _0xf78363(0x273)](_0xf78363(0x1e3))), $(this)[_0xf78363(0x161)](_0xf78363(0x186))[
                    _0xf78363(0x164)](_0xf78363(0x1ba)) && (answer = $(this)['parents'](_0xf78363(0x186))[
                        _0xf78363(0x164)]('data-go-to'), selections = selections[_0xf78363(0x1a9)](
                        _0x4c22f8 => _0x4c22f8[_0xf78363(0x1c5)] !== x), selections[_0xf78363(0x1e7)]
                    ({ 'step': x, 'selected': answer }), skipTo && (selections[_0xf78363(0x1e7)]
                        ({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections['findIndex'](
                            _0xfe5500 => _0xfe5500['step'] === x), selections[objIndex]['skipTo'] = parseInt(
                            skipTo) - 0x1, selections[objIndex][_0xf78363(0x194)] = x));
            }), $(steps[x])[_0x33cec4(
            0x283)](_0x33cec4(0x1f4))['find'](':input[type=\x22file\x22][required]')['each'](function(
            _0x2e8a5e) {
            const _0x4ac2e3 = _0x33cec4;
            $(this)[_0x4ac2e3(0x1d6)]() !== '' ? empReqFile = empReqFile[_0x4ac2e3(0x1a9)](
                    _0x5f53b8 => _0x5f53b8[_0x4ac2e3(0x1ab)] !== _0x2e8a5e) : (!empReqFile[_0x4ac2e3(
                        0x283)](_0x43064d => _0x43064d[_0x4ac2e3(0x1ab)] === _0x2e8a5e) && empReqFile[
                        _0x4ac2e3(0x1e7)]({ 'input': _0x2e8a5e }), unfilledArr[_0x4ac2e3(0x1e7)]
                    ({ 'input': $(this)['attr']('name') })), empReqFile['length'] === 0x0 ? fileFilled = !
                ![] : fileFilled = ![];
        }), $(steps[x])[_0x33cec4(0x283)](_0x33cec4(0x1f4))[_0x33cec4(
            0x283)](_0x33cec4(0x168))[_0x33cec4(0x176)](function(_0x21f2d3) {
            const _0x2d049f =
                _0x33cec4;
            skipTo = undefined, $(this)[_0x2d049f(0x161)](_0x2d049f(0x165))[_0x2d049f(0x273)](
                _0x2d049f(0x1e3)) !== '' && (skipTo = $(this)[_0x2d049f(0x161)](_0x2d049f(0x165))[
                _0x2d049f(0x273)](_0x2d049f(0x1e3))), $(this)['parents'](_0x2d049f(0x186))['attr'](
                _0x2d049f(0x1ba)) && (answer = $(this)[_0x2d049f(0x161)]('[data-go-to]')['attr'](
                    _0x2d049f(0x1ba)), selections = selections[_0x2d049f(0x1a9)](_0xab291b => _0xab291b[
                    _0x2d049f(0x1c5)] !== x), selections[_0x2d049f(0x1e7)]
                ({ 'step': x, 'selected': answer }), skipTo && (selections['push']({
                        'step': skipTo -
                            0x2,
                        'selected': answer
                    }), objIndex = selections[_0x2d049f(0x291)](_0x2e72d4 =>
                        _0x2e72d4[_0x2d049f(0x1c5)] === x), selections[objIndex][_0x2d049f(0x253)] =
                    parseInt(skipTo) - 0x1, selections[objIndex]['backTo'] = x));
        }), $(steps[x])[_0x33cec4(
            0x283)]('.active-answer-card')[_0x33cec4(0x283)]('select[required]')[_0x33cec4(0x176)](
            function(_0x4a4782) {
                const _0x51e009 = _0x33cec4;
                $(this)[_0x51e009(0x1d6)]() !== null && $(this)[_0x51e009(0x1d6)]() !== '' ?
                    empReqSelect = empReqSelect[_0x51e009(0x1a9)](_0xa4f176 => _0xa4f176['input'] !==
                        _0x4a4782) : (!empReqSelect[_0x51e009(0x283)](_0x351d8c => _0x351d8c[_0x51e009(
                            0x1ab)] === _0x4a4782) && empReqSelect[_0x51e009(0x1e7)]({ 'input': _0x4a4782 }),
                        unfilledArr['push']({ 'input': $(this)[_0x51e009(0x164)](_0x51e009(0x2ae)) })),
                    empReqSelect['length'] === 0x0 ? selectFilled = !![] : selectFilled = ![];
            }), $(steps[
            x])[_0x33cec4(0x283)](_0x33cec4(0x1f4))['find']('select')[_0x33cec4(0x176)](function(
            _0x2a4037) {
            const _0x383932 = _0x33cec4;
            skipTo = undefined, $(this)['parents'](_0x383932(0x165))[_0x383932(0x273)](_0x383932(
                0x1e3)) !== '' && (skipTo = $(this)[_0x383932(0x161)](_0x383932(0x165))[_0x383932(
                0x273)](_0x383932(0x1e3))), $(this)[_0x383932(0x161)](_0x383932(0x186))[_0x383932(
                0x164)](_0x383932(0x1ba)) && (answer = $(this)[_0x383932(0x161)](_0x383932(0x186))[
                    _0x383932(0x164)]('data-go-to'), selections = selections[_0x383932(0x1a9)](
                    _0x788612 => _0x788612[_0x383932(0x1c5)] !== x), selections[_0x383932(0x1e7)]
                ({ 'step': x, 'selected': answer }), skipTo && (selections[_0x383932(0x1e7)]
                    ({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections['findIndex'](
                        _0x1bb66b => _0x1bb66b[_0x383932(0x1c5)] === x), selections[objIndex][_0x383932(
                        0x253)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x383932(0x194)] = x));
        }), $(
            steps[x])[_0x33cec4(0x283)](_0x33cec4(0x1f4))[_0x33cec4(0x283)](_0x33cec4(0x23a))['each'](
            function(_0x7d1042) {
                const _0x142c4e = _0x33cec4;
                let _0x5f300b = $(this)[_0x142c4e(
                        0x1d6)]()[_0x142c4e(0x2b1)],
                    _0x58ea71 = $(this)[_0x142c4e(0x273)]('min-character') ? $(this)[_0x142c4e(0x273)](
                        _0x142c4e(0x1fc)) : 0x0;
                $(this)[_0x142c4e(0x1d6)]() !== '' && _0x5f300b >= _0x58ea71 ? empReqTextarea =
                    empReqTextarea['filter'](_0x3d6bc3 => _0x3d6bc3[_0x142c4e(0x1ab)] !== _0x7d1042) : (!
                        empReqTextarea['find'](_0x15e240 => _0x15e240[_0x142c4e(0x1ab)] === _0x7d1042) &&
                        empReqTextarea['push']({ 'input': _0x7d1042 }), unfilledArr[_0x142c4e(0x1e7)]
                        ({ 'input': $(this)[_0x142c4e(0x164)]('name') })), empReqTextarea[_0x142c4e(
                        0x2b1)] ===
                    0x0 ? textareaFilled = !![] : textareaFilled = ![];
            }), $(steps[x])[_0x33cec4(0x283)](
            '.active-answer-card')[_0x33cec4(0x283)](_0x33cec4(0x21d))[_0x33cec4(0x176)](function(
            _0x4fae2f) {
            const _0x31f004 = _0x33cec4;
            skipTo = undefined, $(this)['parents'](_0x31f004(0x165))['data'](_0x31f004(0x1e3)) !==
                '' && (skipTo = $(this)[_0x31f004(0x161)]('[data-skip-to]')[_0x31f004(0x273)](
                    'skip-to')), $(this)[_0x31f004(0x161)](_0x31f004(0x186))[_0x31f004(0x164)](_0x31f004(
                    0x1ba)) && (answer = $(this)[_0x31f004(0x161)]('[data-go-to]')['attr'](_0x31f004(
                    0x1ba)), selections = selections[_0x31f004(0x1a9)](_0x53aef5 => _0x53aef5[_0x31f004(
                    0x1c5)] !== x), selections['push']({ 'step': x, 'selected': answer }), skipTo && (
                    selections['push']({ 'step': skipTo - 0x2, 'selected': answer }), objIndex =
                    selections[_0x31f004(0x291)](_0x43d90a => _0x43d90a[_0x31f004(0x1c5)] === x),
                    selections[objIndex][_0x31f004(0x253)] = parseInt(skipTo) - 0x1, selections[
                        objIndex][_0x31f004(0x194)] = x));
        }), $(steps[x])['find'](_0x33cec4(0x1f4))[
            _0x33cec4(0x283)](_0x33cec4(0x18c))['each'](function(_0x20e3d0) {
            const _0x371433 =
                _0x33cec4;
            $(this)[_0x371433(0x1d6)]() !== '' ? validateEmail($(this)[_0x371433(0x1d6)](), $(this)[
                _0x371433(0x273)](_0x371433(0x169)), $(this)[_0x371433(0x164)]('name')) : (
                emailFilled = ![], unfilledArr[_0x371433(0x1e7)]({
                    'input': $(this)['attr'](_0x371433(
                        0x2ae))
                }));
        }), $(steps[x])[_0x33cec4(0x283)](_0x33cec4(0x1f4))[_0x33cec4(0x283)](
            _0x33cec4(0x178))[_0x33cec4(0x176)](function(_0x1c6cdb) {
            const _0x144a78 = _0x33cec4;
            skipTo = undefined, $(this)[_0x144a78(0x161)]('[data-skip-to]')[_0x144a78(0x273)](
                _0x144a78(0x1e3)) !== '' && (skipTo = $(this)[_0x144a78(0x161)](_0x144a78(0x165))[
                _0x144a78(0x273)](_0x144a78(0x1e3))), $(this)[_0x144a78(0x161)](_0x144a78(0x186))[
                _0x144a78(0x164)](_0x144a78(0x1ba)) && (answer = $(this)[_0x144a78(0x161)](_0x144a78(
                    0x186))['attr']('data-go-to'), selections = selections[_0x144a78(0x1a9)](
                    _0x1ae05d => _0x1ae05d[_0x144a78(0x1c5)] !== x), selections[_0x144a78(0x1e7)]
                ({ 'step': x, 'selected': answer }), skipTo && (selections['push']({
                        'step': skipTo -
                            0x2,
                        'selected': answer
                    }), objIndex = selections[_0x144a78(0x291)](_0x15b666 =>
                        _0x15b666[_0x144a78(0x1c5)] === x), selections[objIndex][_0x144a78(0x253)] =
                    parseInt(skipTo) - 0x1, selections[objIndex][_0x144a78(0x194)] = x));
        });
    }
    $(steps[x])[
            _0x33cec4(0x283)](_0x33cec4(0x25e))['is'](':checked') && (selArr = [], $(steps)['find'](
                _0x33cec4(0x1ad))[_0x33cec4(0x176)](function(_0x22882c, _0x1fb452) {
                const _0x5a73b0 =
                    _0x33cec4;
                selArr[_0x5a73b0(0x1e7)]({ 'selected': $(this)[_0x5a73b0(0x273)]('selected') });
            }),
            selString = [], selArr[_0x33cec4(0x206)](_0x326c8f => selString[_0x33cec4(0x1e7)](_0x326c8f[
                _0x33cec4(0x22c)])), $(steps[x])[_0x33cec4(0x283)](_0x33cec4(0x1f4))['find'](_0x33cec4(
                0x26e))[_0x33cec4(0x176)](function() {
                const _0x1cae44 = _0x33cec4;
                skipTo = undefined;
                if ($(this)[_0x1cae44(0x161)](_0x1cae44(0x165))['data'](_0x1cae44(
                        0x1e3))) skipTo = $(this)['parents']('[data-skip-to]')['data'](_0x1cae44(0x1e3));
                else $(this)[_0x1cae44(0x273)](_0x1cae44(0x1e3)) && (skipTo = $(this)[_0x1cae44(0x273)](
                    _0x1cae44(0x1e3)));
                selections = selections['filter'](_0x106b94 => _0x106b94[_0x1cae44(0x1c5)] !== x);
                if ($(
                        this)[_0x1cae44(0x273)](_0x1cae44(0x1d7))) answer = $(this)[_0x1cae44(0x164)](
                        _0x1cae44(0x1ba)), selections[_0x1cae44(0x1e7)]({ 'step': x, 'selected': answer }),
                    skipTo && (selections[_0x1cae44(0x1e7)]({ 'step': skipTo - 0x2, 'selected': answer }),
                        objIndex = selections[_0x1cae44(0x291)](_0x3796e2 => _0x3796e2['step'] === x),
                        selections[objIndex][_0x1cae44(0x253)] = parseInt(skipTo) - 0x1, selections[objIndex][
                            'backTo'
                        ] = x, console['log'](selections, x));
                else $(this)[_0x1cae44(0x161)](_0x1cae44(0x186))['data'](_0x1cae44(0x1d7)) && (answer = $(
                        this)[_0x1cae44(0x161)](_0x1cae44(0x186))[_0x1cae44(0x273)](_0x1cae44(0x1d7)),
                    selections[_0x1cae44(0x1e7)]({ 'step': x, 'selected': answer }), skipTo && (
                        selections[_0x1cae44(0x1e7)]({ 'step': skipTo - 0x2, 'selected': answer }),
                        objIndex = selections[_0x1cae44(0x291)](_0x772120 => _0x772120[_0x1cae44(0x1c5)] ===
                            x), selections[objIndex][_0x1cae44(0x253)] = parseInt(skipTo) - 0x1, selections[
                            objIndex][_0x1cae44(0x194)] = x));
            }), logicExtra ? ($(steps[x])[_0x33cec4(0x283)](
                '.active-answer-card')[_0x33cec4(0x283)](_0x33cec4(0x1a5))[_0x33cec4(0x273)](
                'radio-skip') === !![] || $(steps[x])['find'](_0x33cec4(0x254))[_0x33cec4(0x273)](
                _0x33cec4(
                    0x17f)) === !![]) && (skip && selections[_0x33cec4(0x1a9)](_0x7d2c6 => _0x7d2c6[
                'step'] === x)[_0x33cec4(0x2b1)] > 0x0 && (textareaLength === 0x0 && textInputLength ===
                0x0 && emailInputLength === 0x0 && checkboxInputLength === 0x0 && setTimeout(
                    function() { next = !![], nextStep(), selectionQuiz(); }, $(steps[x])['find'](
                        _0x33cec4(
                            0x263))[_0x33cec4(0x273)](_0x33cec4(0x177))))) : $(steps[x])[_0x33cec4(0x283)](
                _0x33cec4(
                    0x1a5))[_0x33cec4(0x273)](_0x33cec4(0x17f)) === !![] && (skip && (textareaLength ===
                0x0 &&
                textInputLength === 0x0 && emailInputLength === 0x0 && checkboxInputLength === 0x0 &&
                setTimeout(function() { next = !![], nextStep(), selectionQuiz(); }, $(steps[x])['find'](
                    '[data-radio-delay]')[_0x33cec4(0x273)](_0x33cec4(0x177)))))), inputFilled &&
        fileFilled && numFilled && checkboxFilled && telFilled && radioFilled && emailFilled &&
        domainAllowed && selectFilled && textareaFilled && passwordFilled && urlFilled ? enableBtn() :
        disableBtn(), andLogic(), cloneRemove(), cloneRemoveInput();
}

function displayErrorMessage() {
    const _0x5a5a88 = _0x13ace7;
    $('[data-text=\x22error-message\x22]')[_0x5a5a88(0x1e8)](), unfilledArr['length'] > 0x0 &&
        unfilledArr[_0x5a5a88(0x206)](function(_0x35060c) {
            const _0x556c1e = _0x5a5a88;
            $(_0x556c1e(0x1d2) + _0x35060c[_0x556c1e(0x1ab)] + '\x22]')[_0x556c1e(0x207)](_0x556c1e(
                    0x218))['fadeIn'](), $(_0x556c1e(0x1d2) + _0x35060c['input'] + '\x22]')['parents']()[
                    _0x556c1e(0x1f6)]('[data-text=\x22error-message\x22]')[_0x556c1e(0x25f)](), $(_0x556c1e(
                    0x192) + _0x35060c[_0x556c1e(0x1ab)] + '\x22]')['siblings'](_0x556c1e(0x218))[_0x556c1e(
                    0x25f)](), $(_0x556c1e(0x23b) + _0x35060c[_0x556c1e(0x1ab)] + '\x22]')[_0x556c1e(0x207)]
                ('[data-text=\x22error-message\x22]')[_0x556c1e(0x25f)]();
        });
}

function resetInputErrorMessage(_0x30fd4c) {
    const _0x393fff = _0x13ace7;
    $(_0x393fff(0x1d2) + _0x30fd4c + '\x22]')[_0x393fff(0x207)](_0x393fff(0x218))['hide'](), $(
        'input[name=\x22' + _0x30fd4c + '\x22]')[_0x393fff(0x161)]()['children'](
        '[data-text=\x22error-message\x22]')[_0x393fff(0x1e8)](), $(_0x393fff(0x192) + _0x30fd4c +
        '\x22]')[_0x393fff(0x207)]('[data-text=\x22error-message\x22]')[_0x393fff(0x1e8)](), $(
        'select[name=\x22' + _0x30fd4c + '\x22]')['siblings'](_0x393fff(0x218))['hide']();
}

function increaseCurstep() {
    const _0x56d156 = _0x13ace7;
    countCard ? (curStep = curStep + 0x1, $(_0x56d156(0x22a))[_0x56d156(0x274)](steps[_0x56d156(
            0x2b1)])) : $(steps[x])[_0x56d156(0x273)](_0x56d156(0x171)) ? curStep = curStep + 0x0 :
        curStep = curStep + 0x1, $(_0x56d156(0x1aa))[_0x56d156(0x274)](curStep);
}

function decreaseCurstep() {
    const _0x3086f8 = _0x13ace7;
    countCard ? (curStep = curStep - 0x1, $(_0x3086f8(0x22a))[_0x3086f8(0x274)](steps[_0x3086f8(
            0x2b1)])) : $(steps[x])[_0x3086f8(0x273)](_0x3086f8(0x171)) ? curStep = curStep - 0x0 :
        curStep = curStep - 0x1, $(_0x3086f8(0x1aa))[_0x3086f8(0x274)](curStep);
}
$(
    '[data-form=\x22submit-btn\x22]')['on'](_0x13ace7(0x244), function(_0x188a5b) {
    const
        _0x3b2064 = _0x13ace7;
    $(this)['data'](_0x3b2064(0x2af)) && (redirectTo = $(this)[_0x3b2064(0x273)](_0x3b2064(
            0x2af))), !$(this)[_0x3b2064(0x273)]('new-tab') && (newTab = $(this)['data']('new-tab')),
        successCard = $(this)[_0x3b2064(0x273)](_0x3b2064(0x25a)), _0x188a5b['preventDefault'](),
        _0x188a5b[_0x3b2064(0x184)](), logicExtra && ($(this)['prop'](_0x3b2064(0x251), !![]), $(
            steps)[_0x3b2064(0x283)](_0x3b2064(0x248))[_0x3b2064(0x1c4)](_0x3b2064(0x1a8), ![])),
        localStorage[_0x3b2064(0x1d8)](_0x3b2064(0x181)), fill ? ($(this)[_0x3b2064(0x273)](
                _0x3b2064(0x256)) ? (console['log']($(this)[_0x3b2064(0x273)]('wait')), $(this)['text'](
                $(this)[_0x3b2064(0x273)]('wait'))) : $(this)[_0x3b2064(0x1d6)](_0x3b2064(0x1c2))[
                _0x3b2064(0x274)](_0x3b2064(0x1c2)), $('[data-form=\x22multistep\x22]')[_0x3b2064(
                0x1dc)](), $(_0x3b2064(0x293))['length'] > 0x0 && (grecaptcha[_0x3b2064(0x159)]()[
                _0x3b2064(0x2b1)] === 0x0 && (form['find'](_0x3b2064(0x185))['text'](oldSubmitText),
                form[_0x3b2064(0x283)](_0x3b2064(0x185))[_0x3b2064(0x1d6)](oldSubmitText))),
            customError && $(_0x3b2064(0x218))[_0x3b2064(0x1e8)]()) : customError &&
        displayErrorMessage();
});

function nextStep() {
    const _0x3fb0d0 = _0x13ace7;
    customError ? ($('[data-text=\x22error-message\x22]')[_0x3fb0d0(0x1e8)](), fill ? (x++,
        increaseCurstep(), progress = x, x <= steps[_0x3fb0d0(0x2b1)] - 0x1 && (updateStep(),
            memory && saveFilledInput())) : displayErrorMessage()) : (x++, increaseCurstep(), x >
        progress && (progress = x), x <= steps[_0x3fb0d0(0x2b1)] - 0x1 && (updateStep(), memory &&
            saveFilledInput())), andLogic();
}

function backStep() {
    const _0x39a460 = _0x13ace7;
    customError && $('[data-text=\x22error-message\x22]')[_0x39a460(0x1e8)](), decreaseCurstep(), x >
        0x0 && ($(progressbar[x])[_0x39a460(0x195)](_0x39a460(0x1b7)), selections['filter'](_0x3726ec =>
                _0x3726ec['skipTo'] === x)[_0x39a460(0x2b1)] > 0x0 ? x = parseInt(getSafe(() => selections[
                'filter'](_0x1d4a79 => _0x1d4a79[_0x39a460(0x253)] === x)[0x0][_0x39a460(0x194)])) : x--,
            updateStep()), ($(steps[x])[_0x39a460(0x283)]('[data-radio-skip]:visible')['data'](
                'radio-skip') === !![] || $(steps[x])[_0x39a460(0x283)](_0x39a460(0x1f4))[_0x39a460(0x283)](
                '[data-radio-skip]:visible')['data'](_0x39a460(0x17f)) === !![] || $(steps[x])[_0x39a460(
                0x283)]('[data-answer][data-radio-skip]:visible')[_0x39a460(0x273)](_0x39a460(0x17f)) === !
            ![]) && (all_data = all_data['filter'](_0x18e607 => _0x18e607[_0x39a460(0x287)] !== $(steps[
            x])[_0x39a460(0x283)]('input[type=\x22radio\x22]:checked')[_0x39a460(0x164)]('name')), $(
            '[data-input-field=\x22' + $(steps[x])[_0x39a460(0x283)](
                'input[type=\x22radio\x22]:checked')[_0x39a460(0x164)](_0x39a460(0x2ae)) + '\x22]')[
            'hide'](), $(steps[x])[_0x39a460(0x283)](_0x39a460(0x174))[_0x39a460(0x1c4)]('checked', ![]), $(steps[x])[_0x39a460(0x283)]('.w-form-formradioinput')[_0x39a460(0x195)](_0x39a460(
            0x16f)), validation());
}
weightedSelectionRange && $('[data-selection]')[_0x13ace7(0x176)](
    function() {
        const _0x45d761 = _0x13ace7;
        $(this)[_0x45d761(0x208)](_0x45d761(0x219) + $(this)[_0x45d761(0x273)](_0x45d761(0x1df)) +
            '</div>');
    });

function selectionQuiz() {
    const _0x16a2d0 = _0x13ace7;
    if ($(this)[_0x16a2d0(0x283)](_0x16a2d0(
            0x18f))) {
        $('[data-selection]')[_0x16a2d0(0x1e8)](), $(_0x16a2d0(0x1b6))[_0x16a2d0(0x1e8)]
            ();
        if (weightedSelection) {
            selTotal = 0x0, selArr['forEach'](function(_0xd183e4) {
                const
                    _0x30092b = _0x16a2d0;
                selTotal = selTotal + _0xd183e4[_0x30092b(0x22c)];
            }), $(_0x16a2d0(0x21c))[_0x16a2d0(
                0x274)](selTotal);
            if ($(_0x16a2d0(0x20a) + selTotal + '\x22]')[_0x16a2d0(0x2b1)] > 0x0) $(
                _0x16a2d0(0x20a) + selTotal + '\x22]')['fadeIn']();
            else $(_0x16a2d0(0x240) + selTotal + ')') ? $('[data-range]:contains(' + selTotal + ')')[
                _0x16a2d0(0x1c6)](_0x16a2d0(0x19f))['eq'](0x0)['show']() : $(_0x16a2d0(0x19d))[_0x16a2d0(
                0x25f)]();
        } else {
            let _0x431a21 = -0x1;
            $(_0x16a2d0(0x19f))['each'](function(_0xfa23ce) {
                const _0xcbdf7 = _0x16a2d0;
                $($(_0xcbdf7(0x19f))[_0xfa23ce])[_0xcbdf7(0x273)](_0xcbdf7(0x1df))[_0xcbdf7(0x225)](
                    selString[_0xcbdf7(0x1ae)]()) && (_0x431a21 = _0xfa23ce);
            }), _0x431a21 > -0x1 ? $($(
                _0x16a2d0(0x19f))[_0x431a21])[_0x16a2d0(0x25f)]() : $(_0x16a2d0(0x19d))['fadeIn']();
        }
    }
}

function triggerInputAllData() {
    const _0x2d96ff = _0x13ace7;
    if (savedFilledInput && memory)
        savedFilledInput[_0x2d96ff(0x206)](_0xed1528 => {
            const _0x33d1dc = _0x2d96ff;
            var _0xfeef51 =
                $('input[name=\x22' + _0xed1528['inputName'] + '\x22][value=\x22' + _0xed1528[_0x33d1dc(
                    0x1f3)] + _0x33d1dc(0x2a0)),
                _0x51fe45 = $('input[name=\x22' + _0xed1528[_0x33d1dc(0x215)] + _0x33d1dc(0x2a0)),
                _0x36e432 = $(_0x33d1dc(0x192) + _0xed1528['inputName'] +
                    '\x22]:not([data-prefill=\x22false\x22])'),
                _0x9741df = $(_0x33d1dc(0x276) + _0xed1528[_0x33d1dc(0x215)] + '\x22]'),
                _0x351b50 = $('input[type=\x22radio\x22][name=\x22' + _0xed1528[_0x33d1dc(0x215)] +
                    _0x33d1dc(0x2a8) + _0xed1528[_0x33d1dc(0x1f3)] + _0x33d1dc(0x2a0));
            if (_0xfeef51[
                    _0x33d1dc(0x164)]('type') !== _0x33d1dc(0x212)) {
                if (_0xfeef51[_0x33d1dc(0x164)](
                        'type') === _0x33d1dc(0x22b) && !_0xfeef51['parents'](_0x33d1dc(0x2b0))[_0x33d1dc(
                        0x273)](_0x33d1dc(0x17f))) _0xfeef51[_0x33d1dc(0x244)](), _0xfeef51[_0x33d1dc(0x207)](
                    _0x33d1dc(0x1bf))['addClass'](_0x33d1dc(0x16f)), _0xfeef51[_0x33d1dc(0x15d)](
                    _0x33d1dc(0x1ab));
                else _0xed1528[_0x33d1dc(0x1f3)] === 'on' ? (_0x51fe45['click'](), _0x51fe45[_0x33d1dc(
                    0x207)]('.w-checkbox-input')[_0x33d1dc(0x1fd)]('w--redirected-checked'), _0x51fe45[
                    _0x33d1dc(0x15d)](_0x33d1dc(0x1ab))) : (_0x51fe45[_0x33d1dc(0x1d6)](_0xed1528[
                        'value']), _0x36e432['val'](_0xed1528[_0x33d1dc(0x1f3)]), $(_0x33d1dc(0x221))[
                        _0x33d1dc(0x283)](_0x33d1dc(0x2b4) + _0xed1528[_0x33d1dc(0x1f3)] + '\x22]')[
                        _0x33d1dc(0x1c4)](_0x33d1dc(0x22c), !![]), _0x51fe45[_0x33d1dc(0x15d)]('input'),
                    _0x51fe45[_0x33d1dc(0x15d)]('change'));
                const _0x45d10f = _0x351b50[_0x33d1dc(0x273)](
                        _0x33d1dc(0x2a9)),
                    _0x14160e = _0x9741df[_0x33d1dc(0x273)](_0x33d1dc(0x2a9));
                _0x351b50[_0x33d1dc(0x1c6)]()[_0x33d1dc(0x1fd)](_0x45d10f), _0x9741df[_0x33d1dc(0x1c6)]()[
                    _0x33d1dc(0x1fd)](_0x14160e);
            }
        });
    else _params && (getParams(), searchQ['forEach'](_0x3eff0f => {
        const _0x1cb3e7 = _0x2d96ff;
        if (
            $(_0x1cb3e7(0x1d2) + _0x3eff0f[_0x1cb3e7(0x215)] + _0x1cb3e7(0x2a8) + _0x3eff0f[
                'value'] + _0x1cb3e7(0x2a0))[_0x1cb3e7(0x164)](_0x1cb3e7(0x272)) !== _0x1cb3e7(0x212)
        ) {
            if ($(_0x1cb3e7(0x1d2) + _0x3eff0f[_0x1cb3e7(0x249)] + '\x22][value=\x22' +
                    _0x3eff0f[_0x1cb3e7(0x1d6)] + '\x22]:not([data-prefill=\x22false\x22])')[_0x1cb3e7(
                    0x164)](_0x1cb3e7(0x272)) === _0x1cb3e7(0x22b)) $('input[name=\x22' + _0x3eff0f[
                    'key'] + '\x22][value=\x22' + _0x3eff0f[_0x1cb3e7(0x1d6)] + _0x1cb3e7(0x2a0))[
                    'click'](), $(_0x1cb3e7(0x1d2) + _0x3eff0f[_0x1cb3e7(0x249)] + '\x22][value=\x22' +
                    _0x3eff0f['val'] + _0x1cb3e7(0x2a0))[_0x1cb3e7(0x207)](_0x1cb3e7(0x1bf))['addClass']
                ('w--redirected-checked'), $(_0x1cb3e7(0x1d2) + _0x3eff0f[_0x1cb3e7(0x249)] +
                    _0x1cb3e7(0x2a8) + _0x3eff0f[_0x1cb3e7(0x1d6)] +
                    '\x22]:not([data-prefill=\x22false\x22])')[_0x1cb3e7(0x15d)](_0x1cb3e7(0x1ab));
            else _0x3eff0f[_0x1cb3e7(0x1d6)] === 'on' ? ($(_0x1cb3e7(0x1d2) + _0x3eff0f['key'] +
                _0x1cb3e7(0x2a0))[_0x1cb3e7(0x244)](), $('input[name=\x22' + _0x3eff0f[_0x1cb3e7(
                0x249)] + _0x1cb3e7(0x2a0))[_0x1cb3e7(0x207)](_0x1cb3e7(0x20e))[_0x1cb3e7(0x1fd)](
                _0x1cb3e7(0x16f)), $(_0x1cb3e7(0x1d2) + _0x3eff0f['key'] + '\x22]')[_0x1cb3e7(
                0x15d)]('input')) : ($(_0x1cb3e7(0x1d2) + _0x3eff0f['key'] + _0x1cb3e7(0x2a0))[
                _0x1cb3e7(0x1d6)](_0x3eff0f[_0x1cb3e7(0x1d6)]), $(_0x1cb3e7(0x192) + _0x3eff0f[
                _0x1cb3e7(0x249)] + '\x22]:not([data-prefill=\x22false\x22])')[_0x1cb3e7(0x1d6)](
                _0x3eff0f[_0x1cb3e7(0x1d6)]), $('select[name=\x22' + _0x3eff0f[_0x1cb3e7(0x249)] +
                _0x1cb3e7(0x2a0))[_0x1cb3e7(0x283)](_0x1cb3e7(0x2b4) + _0x3eff0f[_0x1cb3e7(
                0x1d6)] + '\x22]')[_0x1cb3e7(0x1c4)](_0x1cb3e7(0x22c), !![]), $(_0x1cb3e7(0x1d2) +
                _0x3eff0f[_0x1cb3e7(0x249)] + _0x1cb3e7(0x2a0))[_0x1cb3e7(0x15d)]('input'), $(
                _0x1cb3e7(0x1d2) + _0x3eff0f[_0x1cb3e7(0x249)] + _0x1cb3e7(0x2a0))['trigger'](
                'change'));
        }
    }));
}
$('[data-form=\x22next-btn\x22]')['on'](_0x13ace7(0x244),
    function() { next = !![], nextStep(), selectionQuiz(); }), $(_0x13ace7(0x28f))['on'](_0x13ace7(
    0x244), function() { next = ![], back = !![], backStep(); }), $(steps)[_0x13ace7(0x283)](
    ':input')[_0x13ace7(0x23d)](_0x13ace7(0x2c8))['on']('input', function(_0x4fa1e5) {
    validation
        (), andLogic(), addClickClass();
}), $(steps)[_0x13ace7(0x283)]('input[type=\x22radio\x22]')[
    'on'](_0x13ace7(0x244), function() { skip = !![], validation(), addClickClass(); });
$(_0x13ace7(0x277))[_0x13ace7(0x273)](_0x13ace7(0x234)) ? $(_0x13ace7(0x2a7))['removeClass'](
    _0x13ace7(0x203)) : $(_0x13ace7(0x2a7))[_0x13ace7(0x1fd)](_0x13ace7(0x203));

function clickableIndicator() {
    const _0x345945 = _0x13ace7;
    $(_0x345945(0x264))[_0x345945(0x273)](_0x345945(0x299)) && ($(_0x345945(0x1e6))[_0x345945(0x195)](
        _0x345945(0x1b7)), $('[data-clickable]')['data']('clickable-all') ? (x = $(this)['index'](),
        updateStep()) : $(this)[_0x345945(0x196)]() <= progress && (x = $(this)['index'](),
        updateStep())), $('[data-text=\x22current-step\x22]')[_0x345945(0x274)](x + 0x1);
}
$(
    '[data-form=\x22custom-progress-indicator\x22]')['on'](_0x13ace7(0x244), clickableIndicator);
$(_0x13ace7(0x245))[_0x13ace7(0x273)](_0x13ace7(0x228)) && ($(_0x13ace7(0x186))['each'](
        function() {
            const _0x252416 = _0x13ace7;
            $(this)[_0x252416(0x208)](_0x252416(0x292), $(this)[_0x252416(0x273)](_0x252416(0x1d7)));
        }),
    $(_0x13ace7(0x2a2))['each'](function() {
        const _0x4cca0a = _0x13ace7;
        $(this)[_0x4cca0a(0x208)](_0x4cca0a(0x295), $(this)[_0x4cca0a(0x273)](_0x4cca0a(0x17e)));
    }));

function resetFormly() {
    const _0x2eb4d5 = _0x13ace7;
    $(_0x2eb4d5(0x245))['trigger']('reset'), $(_0x2eb4d5(0x245))[_0x2eb4d5(0x161)]()[_0x2eb4d5(0x283)]
        (_0x2eb4d5(0x260))[_0x2eb4d5(0x1e8)](), x = 0x0, updateStep(), $(
            '[data-form=\x22multistep\x22]')[_0x2eb4d5(0x1d1)](), $(_0x2eb4d5(0x185))['text'](
            oldSubmitText), $(_0x2eb4d5(0x185))[_0x2eb4d5(0x1d6)](oldSubmitText), $(_0x2eb4d5(0x1aa))[
            _0x2eb4d5(0x274)](0x1), $(_0x2eb4d5(0x245))[_0x2eb4d5(0x283)](_0x2eb4d5(0x29e))['siblings'](
            _0x2eb4d5(0x20e))[_0x2eb4d5(0x195)]('w--redirected-checked');
}
$(document)[_0x13ace7(0x2be)](
    function(_0x2a0cc5, _0x41c1d6, _0x449f10) {
        const _0x40eee6 = _0x13ace7;
        if (_0x449f10['url'][
                'includes'
            ]('https://webflow.com/api/v1/form/')) {
            const _0x51c538 = _0x41c1d6['status'] === 0xc8,
                _0x28d4ca = _0x40eee6(0x282);
            redirectTo && _0x51c538 && (newTab ? window['open'](redirectTo, _0x40eee6(0x1c1)) :
                    setTimeout(() => {
                        const _0x47b0d2 = _0x40eee6;
                        location[_0x47b0d2(0x1b3)] = redirectTo;
                    }, redirectDelay)), _0x51c538 &&
                successCard !== '' && $(_0x40eee6(0x26f) + successCard + '\x22]')['fadeIn'](),
                _0x51c538 && formReset && setTimeout(() => { resetFormly(); }, resetDelay), !_0x51c538 &&
                ($(_0x40eee6(0x185))[_0x40eee6(0x1d6)](_0x40eee6(0x1c2)), $(
                    '[data-form=\x22submit-btn\x22]')[_0x40eee6(0x274)](_0x40eee6(0x1c2)));
        }
    }), $(
    _0x13ace7(0x2ac))['on'](_0x13ace7(0x244), function() {
    const _0x291b9f = _0x13ace7;
    var
        _0x3633ad = $(this)[_0x291b9f(0x1c6)]()['find'](_0x291b9f(0x2aa))[_0x291b9f(0x273)](
            _0x291b9f(0x24f));
    setTimeout(function() {
            const _0x44a739 = _0x291b9f;
            $('input[name=\x22' + _0x3633ad + '\x22]')[_0x44a739(0x1b5)]();
        }, 0x64), back = !![], x =
        $(this)['data']('edit-step') - 0x1, updateStep(), countCard ? (curStep = x + 0x1, $(
            '[data-text=\x22total-steps\x22]')['text'](steps[_0x291b9f(0x2b1)])) : $(steps[x])['data']
        (_0x291b9f(0x171)) ? curStep = x + 0x0 : curStep = x + 0x1, $(
            '[data-text=\x22current-step\x22]')['text'](curStep), back = ![];
}), $(
    '[data-btn=\x22reset\x22]')['on'](_0x13ace7(0x244), function() {
    const _0x22cf73 = _0x13ace7;
    $(_0x22cf73(0x245))[_0x22cf73(0x15d)]('reset');
    let _0x166d90 = $(this);
    $(this)['text']('Please\x20wait...'), setTimeout(function() {
        const _0x185b80 = _0x22cf73;
        $(_0x166d90)[_0x185b80(0x274)](oldResetText), $(_0x166d90)['parents'](_0x185b80(0x260))[
            'hide'](), x = 0x0, updateStep(), $(_0x185b80(0x245))[_0x185b80(0x1d1)](), $(
            '[data-form=\x22submit-btn\x22]')[_0x185b80(0x274)](oldSubmitText), $(_0x185b80(
            0x185))[_0x185b80(0x1d6)](oldSubmitText), $(_0x166d90)[_0x185b80(0x1d6)](
            oldSubmitText), $(_0x185b80(0x1aa))[_0x185b80(0x274)](0x1), $(_0x185b80(0x245))[
            _0x185b80(0x283)]('input:checkbox')['siblings'](_0x185b80(0x20e))[_0x185b80(0x195)](
            _0x185b80(0x16f));
    }, resetDelay);
}), $(_0x13ace7(0x1ca))['on'](_0x13ace7(0x1db),
    function(_0x5da821) {
        const _0x2ab340 = _0x13ace7;
        if (_0x5da821[_0x2ab340(0x255)] ===
            0xd) {
            _0x5da821[_0x2ab340(0x1f7)](), _0x5da821['stopPropagation']();
            if ($(steps[x])[
                    'find'](_0x2ab340(0x21d))['is'](_0x2ab340(0x2c3))) $(steps[x])[_0x2ab340(0x283)](
                _0x2ab340(0x1ed))[_0x2ab340(0x1d6)]($(steps[x])[_0x2ab340(0x283)](_0x2ab340(0x1ed))[
                _0x2ab340(0x1d6)]() + '\x0a');
            else $('[data-enter]')[_0x2ab340(0x273)](_0x2ab340(0x1fe)) && fill && (totalSteps >
                curStep && $(_0x2ab340(0x286))[0x0][_0x2ab340(0x244)]());
        }
    }), $(_0x13ace7(0x1ca))[
    _0x13ace7(0x288)](function(_0xa88240) {
    const _0x405cb1 = _0x13ace7;
    (_0xa88240[_0x405cb1(0x270)] || _0xa88240[_0x405cb1(0x2ad)]) && _0xa88240[_0x405cb1(0x255)] ==
        0xd && (x >= steps['length'] - 0x1 && fill ? $(steps[x])[_0x405cb1(0x283)](_0x405cb1(
            0x242))[_0x405cb1(0x244)]() : (_0xa88240[_0x405cb1(0x1f7)](), _0xa88240[_0x405cb1(
                0x184)]
            ()));
}), $('[data-form=\x22multistep\x22]')[_0x13ace7(0x283)](_0x13ace7(0x248))['on'](
    'change',
    function() {
        const _0x4a97e5 = _0x13ace7;
        all_data = all_data[_0x4a97e5(0x1a9)](_0x4ad620 => _0x4ad620[_0x4a97e5(0x287)] !== $(this)[
                _0x4a97e5(0x164)](_0x4a97e5(0x2ae))), $(this)[_0x4a97e5(0x164)](_0x4a97e5(0x272)) ===
            _0x4a97e5(0x28e) ? $(this)['is'](':checked') ? all_data[_0x4a97e5(0x1e7)]({
                'field': $(
                    this)['attr'](_0x4a97e5(0x2ae)),
                'value': $(this)['siblings'](_0x4a97e5(0x20c))[
                    _0x4a97e5(0x274)]()
            }) : $(_0x4a97e5(0x175) + $(this)[_0x4a97e5(0x164)](_0x4a97e5(
                0x2ae)) + '\x22]')[_0x4a97e5(0x1e8)]() : (all_data[_0x4a97e5(0x1e7)]({
                'field': $(this)[
                    _0x4a97e5(0x164)](_0x4a97e5(0x2ae)),
                'value': $(this)[_0x4a97e5(0x1d6)]()
            }), $(this)[
                _0x4a97e5(0x1d6)]() !== '' && resetInputErrorMessage($(this)[_0x4a97e5(0x164)](
                _0x4a97e5(0x2ae)))), all_data[_0x4a97e5(0x206)](function(_0x4addc8) {
                const _0x1d210c =
                    _0x4a97e5;
                $(_0x1d210c(0x175) + _0x4addc8['field'] + '\x22]')[_0x1d210c(0x1d1)](), $(_0x1d210c(
                    0x175) + _0x4addc8[_0x1d210c(0x287)] + '\x22]')[_0x1d210c(0x274)](_0x4addc8[
                    _0x1d210c(0x1f3)]);
            });
    }), $(_0x13ace7(0x245))['find'](_0x13ace7(0x21d))['on'](
    _0x13ace7(0x25c),
    function() {
        const _0x5bb37b = _0x13ace7;
        $(this)[_0x5bb37b(0x1d6)]() !== '' && resetInputErrorMessage($(this)[_0x5bb37b(0x164)](
            _0x5bb37b(0x2ae))), all_data = all_data['filter'](_0x21a6d0 => _0x21a6d0[_0x5bb37b(
            0x287)] !== $(this)[_0x5bb37b(0x164)](_0x5bb37b(0x2ae))), all_data['push']({
            'field': $(
                this)['attr'](_0x5bb37b(0x2ae)),
            'value': $(this)[_0x5bb37b(0x1d6)]()
        }), all_data[
            _0x5bb37b(0x206)](function(_0x269531) {
            const _0x3a7b2d = _0x5bb37b;
            $(_0x3a7b2d(0x175) + _0x269531['field'] + '\x22]')['show'](), $(_0x3a7b2d(0x175) +
                _0x269531[_0x3a7b2d(0x287)] + '\x22]')[_0x3a7b2d(0x274)](_0x269531['value']);
        });
    }), $(
    _0x13ace7(0x245))[_0x13ace7(0x283)](_0x13ace7(0x1ac))['on']('change', function() {
    const
        _0x10d5b3 = _0x13ace7;
    $(this)['val']() !== '' && resetInputErrorMessage($(this)[_0x10d5b3(0x164)](_0x10d5b3(
        0x2ae)));
    var _0x92c785 = $(this)[_0x10d5b3(0x273)](_0x10d5b3(0x2b9));
    all_data = all_data[_0x10d5b3(0x1a9)](_0x253d95 => _0x253d95[_0x10d5b3(0x287)] !== $(this)[
        _0x10d5b3(0x164)](_0x10d5b3(0x2ae))), all_data['push']({
        'field': $(this)[_0x10d5b3(
            0x164)]('name'),
        'value': _0x92c785 ? $(this)[_0x10d5b3(0x283)](_0x10d5b3(0x19e))[
            'text']() : $(this)['val']()
    }), all_data['forEach'](function(_0x2190c0) {
        const
            _0x52b87c = _0x10d5b3;
        $('[data-input-field=\x22' + _0x2190c0[_0x52b87c(0x287)] + '\x22]')[_0x52b87c(0x1d1)](),
            $(_0x52b87c(0x175) + _0x2190c0[_0x52b87c(0x287)] + '\x22]')[_0x52b87c(0x274)](
                _0x2190c0['value']);
    });
}), updateStep(), triggerInputAllData(), $(_0x13ace7(0x209))[
    _0x13ace7(0x176)](function() {
    const _0x2867f9 = _0x13ace7,
        _0x504dc9 = $(this)['find'](_0x2867f9(0x24c)),
        _0xc35cdf = [];
    _0x504dc9[_0x2867f9(0x176)](function() {
        const _0xbfd0b1 = _0x2867f9;
        _0xc35cdf[_0xbfd0b1(0x1e7)]($(this)['text']()['trim']());
    });
    const _0x36c3ea = $(this)[
        'siblings']('[data-cms-select=input]');
    $[_0x2867f9(0x176)](_0xc35cdf, function(_0x48e6c2, _0x4397aa) {
        const _0x9b3aef = _0x2867f9,
            _0x3e2e2c = $(_0x9b3aef(0x2a5))[_0x9b3aef(0x1d6)](_0x4397aa)[_0x9b3aef(0x274)](
                _0x4397aa);
        _0x36c3ea[_0x9b3aef(0x208)](_0x3e2e2c);
    });
});

function cloneRemove() {
    const _0x413c80 = _0x13ace7;
    $(_0x413c80(0x2b7))['each'](function() {
        const _0xa81d4b = _0x413c80;
        $(this)['find'](_0xa81d4b(0x259))[_0xa81d4b(0x2b1)] < 0x2 ? $(this)[_0xa81d4b(0x283)](
            '[data-form=\x22remove-clone\x22]')[_0xa81d4b(0x1e8)]() : $(this)[_0xa81d4b(0x283)](
            _0xa81d4b(0x156))[_0xa81d4b(0x1d1)]();
    });
}

function cloneRemoveInput() {
    const _0x3cf2d7 = _0x13ace7;
    $(_0x3cf2d7(0x201))[_0x3cf2d7(0x176)](function() {
        const _0x28c13a = _0x3cf2d7;
        $(this)[_0x28c13a(0x283)]('[data-clone-input]')[_0x28c13a(0x2b1)] < 0x2 ? $(this)[_0x28c13a(
            0x283)](_0x28c13a(0x1dd))[_0x28c13a(0x1e8)]() : $(this)[_0x28c13a(0x283)](_0x28c13a(
            0x1dd))[_0x28c13a(0x1d1)]();
    });
}
$('[data-form=\x22remove-clone\x22]')['on'](_0x13ace7(
    0x244), function() {
    const _0x58b181 = _0x13ace7,
        _0x2731de = $(this)[_0x58b181(0x161)](_0x58b181(0x259))['length'] > 0x0 ? $(this)['parents']
        ('[data-clone]')[_0x58b181(0x196)]() : $(this)[_0x58b181(0x161)](_0x58b181(0x172))[
            _0x58b181(0x196)](),
        _0x1888f0 = $(this)[_0x58b181(0x161)](_0x58b181(0x259))[_0x58b181(0x2b1)] > 0x0 ? $(this)[
            _0x58b181(0x161)](_0x58b181(0x259))[_0x58b181(0x273)](_0x58b181(0x238)) : $(this)[
            'parents'](_0x58b181(0x172))[_0x58b181(0x273)](_0x58b181(0x298));
    $('[data-clone=\x22' + _0x1888f0 + '\x22]')['eq'](_0x2731de)[_0x58b181(0x1b2)](), $(_0x58b181(
            0x2b5) + _0x1888f0 + '\x22]')['eq'](_0x2731de)[_0x58b181(0x1b2)](), cloneRemove(),
        validation();
}), $(_0x13ace7(0x1dd))['on'](_0x13ace7(0x244), function() {
    const _0xfab1e9 =
        _0x13ace7;
    let _0x510121 = $(this)[_0xfab1e9(0x207)]()['attr']('name');
    $(this)[_0xfab1e9(0x1c6)](_0xfab1e9(0x285))[_0xfab1e9(0x1b2)](), $(_0xfab1e9(0x175) +
            _0x510121 + '\x22]')['parent'](_0xfab1e9(0x237))[_0xfab1e9(0x1b2)](), cloneRemove(),
        validation();
}), $('[data-add-new]')['on'](_0x13ace7(0x244), function() {
    const _0x3c693b =
        _0x13ace7;
    let _0x69ccf3 = $(this)['data'](_0x3c693b(0x1d0));
    var _0x47c580 = $(_0x3c693b(
            0x2c5) + _0x69ccf3 + '\x22]')['eq'](0x0)[_0x3c693b(0x238)](!![]),
        _0x2f41a3 = $(_0x3c693b(0x2b5) + _0x69ccf3 + '\x22]')['eq'](0x0)[_0x3c693b(0x238)](!
            ![]);
    let _0xdd4a42 = '';
    $(this)[_0x3c693b(0x283)](_0x3c693b(0x156))[_0x3c693b(0x1d1)](), cloneRemove(), _0x47c580[
            'find'](_0x3c693b(0x285))['find'](_0x3c693b(0x1ab))['val'](''), _0x47c580['find'](
            _0x3c693b(0x285))['find'](_0x3c693b(0x1ac))[_0x3c693b(0x1d6)](''), _0x47c580[_0x3c693b(
            0x283)](_0x3c693b(0x285))[_0x3c693b(0x283)]('textarea')[_0x3c693b(0x1d6)](''), _0x47c580[
            _0x3c693b(0x283)](_0x3c693b(0x285))[_0x3c693b(0x23d)](':first')['remove'](), _0x47c580[
            _0x3c693b(0x283)]('[data-clone-input]')[_0x3c693b(0x283)](
            '[aria-label=\x22Remove\x20file\x22]')[_0x3c693b(0x244)](), _0x2f41a3[_0x3c693b(0x283)](
            _0x3c693b(0x237))[_0x3c693b(0x23d)](_0x3c693b(0x1e5))[_0x3c693b(0x1b2)](), _0x47c580[
            'find'](_0x3c693b(0x1ab))[_0x3c693b(0x176)](function() {
            const _0x43bb16 =
                _0x3c693b;
            if ($(this)['closest'](_0x43bb16(0x285))[_0x43bb16(0x2b1)] > 0x0) {
                let
                    _0x232d9d = 0x0;
                const _0xcf105f = $(this)['closest']('[data-clone-input]')[
                    _0x43bb16(0x273)]('clone-input');
                $(_0x43bb16(0x23e) + _0xcf105f + _0x43bb16(0x179))['each'](function() {
                    const
                        _0x2ec5af = _0x43bb16,
                        _0x91e7f1 = $(this)[_0x2ec5af(0x164)]('name');
                    if (_0x91e7f1 && _0x91e7f1[
                            _0x2ec5af(0x199)](_0x2ec5af(0x1ec))) {
                        const _0x25d597 = parseInt(_0x91e7f1[
                            _0x2ec5af(0x279)]('-')[0x1]);
                        !isNaN(_0x25d597) && _0x25d597 > _0x232d9d && (
                            _0x232d9d = _0x25d597);
                    }
                }), _0x232d9d++, _0xdd4a42 = this[_0x43bb16(
                    0x2ae)] + '-' + _0x232d9d;
            } else _0xdd4a42 = this[_0x43bb16(0x2ae)] + '-' + (
                parseInt($(_0x43bb16(0x2c5) + _0x69ccf3 + '\x22]')[_0x43bb16(0x1be)]()['index']()) +
                0x1);
            $(this)[_0x43bb16(0x1d6)](''), $(this)[_0x43bb16(0x164)](_0x43bb16(0x2ae), _0xdd4a42),
                $(this)[_0x43bb16(0x164)](_0x43bb16(0x1a3), _0xdd4a42);
        }), _0x47c580['find'](_0x3c693b(
            0x21d))[_0x3c693b(0x176)](function() {
            const _0x47b26a = _0x3c693b;
            if ($(this)[
                    _0x47b26a(0x16a)]('[data-clone-input]')[_0x47b26a(0x2b1)] > 0x0) {
                let _0x57e128 =
                    0x0;
                const _0x5d15c2 = $(this)[_0x47b26a(0x16a)]('[data-clone-input]')[_0x47b26a(
                    0x273)]('clone-input');
                $(_0x47b26a(0x23e) + _0x5d15c2 + '\x22]\x20textarea')[_0x47b26a(0x176)](
                    function() {
                        const _0x367250 = _0x47b26a,
                            _0x2d9e59 = $(this)[_0x367250(0x164)](_0x367250(0x2ae));
                        if (_0x2d9e59 &&
                            _0x2d9e59[_0x367250(0x199)]('relationship-')) {
                            const _0x2abca8 = parseInt(
                                _0x2d9e59['split']('-')[0x1]);
                            !isNaN(_0x2abca8) && _0x2abca8 > _0x57e128 &&
                                (_0x57e128 = _0x2abca8);
                        }
                    }), _0x57e128++, _0xdd4a42 = this[_0x47b26a(
                    0x2ae)] + '-' + _0x57e128;
            } else _0xdd4a42 = this[_0x47b26a(0x2ae)] + '-' + (
                parseInt($(_0x47b26a(0x2c5) + _0x69ccf3 + '\x22]')[_0x47b26a(0x1be)]()['index']()) +
                0x1);
            $(this)[_0x47b26a(0x1d6)](''), $(this)[_0x47b26a(0x164)]('name', _0xdd4a42), $(this)[
                _0x47b26a(0x164)](_0x47b26a(0x1a3), _0xdd4a42);
        }), _0x47c580[_0x3c693b(0x283)](
            _0x3c693b(0x1ac))['each'](function() {
            const _0xb2ea68 = _0x3c693b;
            if ($(this)[
                    _0xb2ea68(0x16a)](_0xb2ea68(0x285))[_0xb2ea68(0x2b1)] > 0x0) {
                let _0x120879 =
                    0x0;
                const _0x4ce9e5 = $(this)[_0xb2ea68(0x16a)](_0xb2ea68(0x285))['data'](_0xb2ea68(
                    0x21a));
                $(_0xb2ea68(0x23e) + _0x4ce9e5 + _0xb2ea68(0x1f8))[_0xb2ea68(0x176)](
                    function() {
                        const _0x89e0a = _0xb2ea68,
                            _0x3d4a1f = $(this)[_0x89e0a(0x164)](_0x89e0a(0x2ae));
                        if (_0x3d4a1f &&
                            _0x3d4a1f['startsWith'](_0x89e0a(0x1ec))) {
                            const _0xf1493e = parseInt(
                                _0x3d4a1f['split']('-')[0x1]);
                            !isNaN(_0xf1493e) && _0xf1493e > _0x120879 &&
                                (_0x120879 = _0xf1493e);
                        }
                    }), _0x120879++, _0xdd4a42 = this[_0xb2ea68(
                    0x2ae)] + '-' + _0x120879;
            } else _0xdd4a42 = this[_0xb2ea68(0x2ae)] + '-' + (
                parseInt($(_0xb2ea68(0x2c5) + _0x69ccf3 + '\x22]')['last']()[_0xb2ea68(0x196)]()) +
                0x1);
            $(this)[_0xb2ea68(0x1d6)](''), $(this)[_0xb2ea68(0x164)]('name', _0xdd4a42), $(this)[
                _0xb2ea68(0x164)](_0xb2ea68(0x1a3), _0xdd4a42);
        }), _0x2f41a3[_0x3c693b(0x283)](
            _0x3c693b(0x2aa))['each'](function() {
            const _0x17fc7a = _0x3c693b;
            if ($(this)['data'](
                    _0x17fc7a(0x24f))) {
                let _0x1949d9 = 0x0;
                const _0x43e1bd = $(this)[_0x17fc7a(
                    0x273)](_0x17fc7a(0x24f))[_0x17fc7a(0x279)]('-')[0x0];
                $('[data-display=\x22' + _0x69ccf3 + _0x17fc7a(0x27e) + _0x43e1bd + '\x22]')[
                        _0x17fc7a(0x176)](function() {
                        const _0x194381 = _0x17fc7a,
                            _0x51f6bd = $(this)[_0x194381(0x164)](_0x194381(0x2c6)),
                            _0x27da5f = parseInt(_0x51f6bd[_0x194381(0x279)]('-')[0x1]);
                        !isNaN(
                            _0x27da5f) && _0x27da5f > _0x1949d9 && (_0x1949d9 = _0x27da5f);
                    }),
                    _0x1949d9++;
                const _0x2a0bd8 = _0x43e1bd + '-' + _0x1949d9;
                $(this)[_0x17fc7a(0x164)]('data-input-field', _0x2a0bd8);
            }
        }), $(_0x3c693b(0x230) +
            _0x69ccf3 + '\x22]')[_0x3c693b(0x208)](_0x47c580), $(_0x3c693b(0x26a) + _0x69ccf3 +
            '\x22]')['append'](_0x2f41a3), $(_0x3c693b(0x180) + _0x69ccf3 + '\x22]')[_0x3c693b(0x176)]
        (function() {
            const _0x2502d9 = _0x3c693b;
            $(this)['text']($(this)[_0x2502d9(0x161)](_0x2502d9(0x2c5) + _0x69ccf3 + '\x22]')[
                _0x2502d9(0x196)]() + 0x1);
        }), $(_0x3c693b(0x227) + _0x69ccf3 + '\x22]')['each'](
            function() {
                const _0x513a07 = _0x3c693b;
                $(this)['text']($(this)[_0x513a07(0x161)](_0x513a07(0x2b5) + _0x69ccf3 + '\x22]')[
                    'index']() + 0x1);
            }), validation();
}), $('[data-add-new-input]')['on']('click',
    function() {
        const _0xa11d46 = _0x13ace7,
            _0x500a6e = $(this)[_0xa11d46(0x161)]('[data-clone]')[_0xa11d46(0x196)]();
        let _0x881c2a =
            $(this)[_0xa11d46(0x273)](_0xa11d46(0x257));
        var _0x4247b4 = $(_0xa11d46(0x23e) +
                _0x881c2a + '\x22]')['eq'](0x0)['clone'](!![]),
            _0x5dbd2a = $(_0xa11d46(0x1c0) + _0x881c2a + '\x22]')['eq'](0x0)[_0xa11d46(0x238)](!![]);
        $(this)[_0xa11d46(0x283)](_0xa11d46(0x1dd))[_0xa11d46(0x1d1)](), cloneRemoveInput();
        let
            _0x5079b5 = 0x0;
        $(_0xa11d46(0x23e) + _0x881c2a + _0xa11d46(0x179))['each'](function() {
                const _0x24be22 = $(
                    this)['attr']('name');
                if (_0x24be22) {
                    const _0x5bf218 = parseInt(_0x24be22['split'](
                        '-')[0x1]);
                    !isNaN(_0x5bf218) && _0x5bf218 > _0x5079b5 && (_0x5079b5 =
                        _0x5bf218);
                }
            }), $('[data-clone-input=\x22' + _0x881c2a + '\x22]\x20select')['each'](
                function() {
                    const _0x78920f = _0xa11d46,
                        _0x4b8704 = $(this)[_0x78920f(0x164)](_0x78920f(0x2ae));
                    if (_0x4b8704) {
                        const
                            _0x20cd05 = parseInt(_0x4b8704[_0x78920f(0x279)]('-')[0x1]);
                        !isNaN(_0x20cd05) &&
                            _0x20cd05 > _0x5079b5 && (_0x5079b5 = _0x20cd05);
                    }
                }), $(_0xa11d46(0x23e) +
                _0x881c2a + _0xa11d46(0x15b))['each'](function() {
                const _0x24df73 = _0xa11d46,
                    _0x1b9cd3 = $(this)[_0x24df73(0x164)](_0x24df73(0x2ae));
                if (_0x1b9cd3) {
                    const
                        _0x3cd259 = parseInt(_0x1b9cd3[_0x24df73(0x279)]('-')[0x1]);
                    !isNaN(_0x3cd259) &&
                        _0x3cd259 > _0x5079b5 && (_0x5079b5 = _0x3cd259);
                }
            }), _0x5079b5++, _0x4247b4['find']
            (_0xa11d46(0x1ab))[_0xa11d46(0x176)](function() {
                const _0x15190d = _0xa11d46,
                    _0x45641c = $(this)['attr'](_0x15190d(0x2ae));
                let _0x14530c = _0x45641c + '-' +
                    _0x5079b5;
                $(this)[_0x15190d(0x1d6)](''), $(this)[_0x15190d(0x164)](_0x15190d(0x2ae), _0x14530c),
                    $(this)[_0x15190d(0x164)](_0x15190d(0x1a3), _0x14530c);
            }), _0x4247b4[_0xa11d46(0x283)](
                _0xa11d46(0x1ac))[_0xa11d46(0x176)](function() {
                const _0x54e7c6 = _0xa11d46,
                    _0x11f10a = $(this)[_0x54e7c6(0x164)](_0x54e7c6(0x2ae));
                let _0x1c42c6 = _0x11f10a +
                    '-' + _0x5079b5;
                $(this)['val'](''), $(this)[_0x54e7c6(0x164)](_0x54e7c6(0x2ae), _0x1c42c6), $(this)[
                    _0x54e7c6(0x164)](_0x54e7c6(0x1a3), _0x1c42c6);
            }), _0x4247b4[_0xa11d46(0x283)](
                'textarea')[_0xa11d46(0x176)](function() {
                const _0x4dded1 = _0xa11d46,
                    _0x20e0ad = $(this)[_0x4dded1(0x164)](_0x4dded1(0x2ae));
                let _0x57a755 = _0x20e0ad +
                    '-' + _0x5079b5;
                $(this)[_0x4dded1(0x1d6)](''), $(this)['attr']('name', _0x57a755), $(this)[_0x4dded1(
                    0x164)](_0x4dded1(0x1a3), _0x57a755);
            }), _0x5dbd2a[_0xa11d46(0x283)](
                '[data-input-field]')[_0xa11d46(0x176)](function() {
                const _0x3f9898 = _0xa11d46;
                $(this)[_0x3f9898(0x164)](_0x3f9898(0x2c6), _0x3f9898(0x1ec) + _0x5079b5);
            }), $(this)[
                _0xa11d46(0x207)]('[data-clone-input-wrapper=\x22' + _0x881c2a + '\x22]')[_0xa11d46(
                0x208)](_0x4247b4), $(_0xa11d46(0x172))['eq'](_0x500a6e)[_0xa11d46(0x283)](
                '[data-display-input-wrapper=\x22' + _0x881c2a + '\x22]')[_0xa11d46(0x208)](_0x5dbd2a), $(
                _0xa11d46(0x187) + _0x881c2a + '\x22]')[_0xa11d46(0x176)](function() {
                const _0x50c665 =
                    _0xa11d46;
                $(this)['text']($(this)[_0x50c665(0x161)](_0x50c665(0x23e) + _0x881c2a + '\x22]')[
                    _0x50c665(0x196)]() + 0x1);
            }), $(_0xa11d46(0x1d9) + _0x881c2a + '\x22]')[_0xa11d46(
                0x176)](function() {
                const _0x454d14 = _0xa11d46;
                $(this)[_0x454d14(0x274)]($(this)['parents'](_0x454d14(0x1c0) + _0x881c2a + '\x22]')[
                    _0x454d14(0x196)]() + 0x1);
            }), validation();
    }), $('[data-remove-upload]')['on'](
    _0x13ace7(0x244),
    function() {
        const _0x4f33bf = _0x13ace7,
            _0x37d1e0 = $(this)[_0x4f33bf(0x273)]('remove-upload');
        $(_0x4f33bf(0x1d2) + _0x37d1e0 + '\x22]')[_0x4f33bf(0x1d6)](''), validation();
    });

function andLogic() {
    const _0x11b4eb = _0x13ace7;
    conditionalResult && (steps['eq'](x)[_0x11b4eb(0x283)](_0x11b4eb(0x20f))[_0x11b4eb(0x1e8)](),
        steps['eq'](x)[_0x11b4eb(0x283)]('[data-show-if]')['each'](function() {
            const _0x28cb61 =
                _0x11b4eb;

            function _0x3bba20(_0x28fd4b) {
                const _0x33c03c = _0x42cf,
                    _0x2578df = _0x28fd4b[_0x33c03c(0x279)]('&'),
                    _0x975d8b = [];
                return _0x2578df[_0x33c03c(0x206)](_0x52815d => {
                        const _0x37f79f =
                            _0x33c03c,
                            [_0xb76aba, _0xfae298] = _0x52815d[_0x37f79f(0x279)]('=');
                        _0x975d8b[_0x37f79f(0x1e7)]({ 'field': _0xb76aba, 'value': _0xfae298 });
                    }),
                    _0x975d8b;
            }
            const _0x10246c = $(this)[_0x28cb61(0x164)]('data-show-if'),
                _0x726a11 = _0x3bba20(_0x10246c);

            function _0x35e1cc(_0x26742e, _0x5637ac) {
                const _0x18b441 = _0x28cb61;
                return _0x5637ac[
                    _0x18b441(0x1a0)]((_0x45ebb0, _0x9669b9) => {
                    const _0x156017 = _0x18b441;
                    if (
                        _0x26742e[0x0] && _0x45ebb0['field'] === _0x26742e[0x0][_0x156017(0x287)])
                        return _0x26742e[_0x156017(0x2b2)]((_0xa17ac6, _0x143e64) => _0x5637ac[
                                _0x9669b9 + _0x143e64] && _0x5637ac[_0x9669b9 + _0x143e64]['field'] ===
                            _0xa17ac6[_0x156017(0x287)] && _0x5637ac[_0x9669b9 + _0x143e64][_0x156017(
                                0x1f3)] === _0xa17ac6[_0x156017(0x1f3)]);
                    return ![];
                });
            }
            const _0x1a857d =
                _0x35e1cc(_0x726a11, all_data);
            _0x1a857d ? $(this)[_0x28cb61(0x1d1)]() : $(this)[_0x28cb61(0x1e8)]();
        }));
}
$(_0x13ace7(
    0x167))[_0x13ace7(0x1fd)](_0x13ace7(0x1e8)), $(_0x13ace7(0x24d))['on'](_0x13ace7(0x1ab),
    function() {
        const _0x26c988 = _0x13ace7,
            _0x1eb5d2 = $(this)[_0x26c988(0x273)](_0x26c988(0x15c)),
            _0x5e5cc6 = $(this)[_0x26c988(0x1d6)](),
            _0x532278 = $('[data-progressive-target=\x22' + _0x1eb5d2 + '\x22]')[_0x26c988(0x273)](
                'progressive-input-value');
        let _0x5f2612 = $(_0x26c988(0x205) + _0x1eb5d2 + _0x26c988(
                0x1a7) + _0x5e5cc6 + '\x22]'),
            _0x59c639 = $(_0x26c988(0x205) + _0x1eb5d2 +
                '\x22][data-progressive-input-value=\x22*\x22]');
        $(_0x26c988(0x205) + _0x1eb5d2 + '\x22]')[_0x26c988(0x1fd)](_0x26c988(0x1e8)), $(
            '[data-progressive-target=\x22' + _0x1eb5d2 + '\x22]')['removeClass'](_0x26c988(0x1d1));
        _0x5e5cc6 !== '' && (_0x532278 === '*' && _0x5e5cc6 !== '' ? (_0x59c639[_0x26c988(0x195)](
            _0x26c988(0x1e8)), _0x59c639[_0x26c988(0x1fd)](_0x26c988(0x1d1))) : (_0x5f2612[
            _0x26c988(0x195)](_0x26c988(0x1e8)), _0x5f2612[_0x26c988(0x1fd)]('show')));

        function _0x25a2c1(_0xe983f1) {
            const _0x18e57f = _0x26c988;
            _0xe983f1 && ($(_0x18e57f(0x235) + _0xe983f1 + '\x22]')[_0x18e57f(0x1d6)]() !== '' && $(
                _0x18e57f(0x235) + _0xe983f1 + '\x22]')[_0x18e57f(0x15d)]('input'));
        }
        let _0xcd87e0 = $(
            '[data-progressive-target=\x22' + _0x1eb5d2 + '\x22]')[_0x26c988(0x283)](_0x26c988(
            0x24d))[_0x26c988(0x273)](_0x26c988(0x15c));
        _0x25a2c1(_0xcd87e0), $(_0x26c988(0x1f1))[_0x26c988(0x176)](function() {
            const _0x29b67f =
                _0x26c988,
                _0x49da6b = $(this)[_0x29b67f(0x273)](_0x29b67f(0x15c));
            $(_0x29b67f(0x205) + _0x49da6b + '\x22]')[_0x29b67f(0x195)](_0x29b67f(0x1d1)), $(
                _0x29b67f(0x205) + _0x49da6b + '\x22]')[_0x29b67f(0x1fd)](_0x29b67f(0x1e8));
        });
    });

function addClickClass() {
    const _0x4608ae = _0x13ace7,
        _0x249317 = $(this)[_0x4608ae(0x273)]('click-addclass'),
        _0x1a9cb7 = $(this)['attr'](_0x4608ae(0x2ae));
    $(_0x4608ae(0x1d2) + _0x1a9cb7 + '\x22]')[_0x4608ae(0x1c6)]()[_0x4608ae(0x195)](_0x249317), $(
        this)['is'](':checked') && $(this)[_0x4608ae(0x1c6)]()[_0x4608ae(0x1fd)](_0x249317);
}
$(
    _0x13ace7(0x193))['on'](_0x13ace7(0x25c), addClickClass);
const GET_COUNTER_URL = _0x13ace7(0x258),
    UPDATE_COUNTER_URL = 'https://x8ki-letl-twmt.n7.xano.io/api:EbCCRNhB/counter/1',
    GET_LIVE_COUNTER_URL = _0x13ace7(0x233),
    UPDATE_LIVE_COUNTER_URL = _0x13ace7(0x233);

function getCounter() {
    const _0x1c0e06 = _0x13ace7;
    $[_0x1c0e06(0x1cf)](GET_COUNTER_URL, function(_0x5d1091) {
        const _0xed1f40 = _0x1c0e06;
        if (
            _0x5d1091) {
            const _0x467660 = _0x5d1091[_0xed1f40(0x17d)];
            updateCounter(_0x467660 + 0x1);
        } else console[_0xed1f40(0x243)](_0xed1f40(0x15e));
    });
}

function updateCounter(_0x246246) {
    const _0x4b2a77 = _0x13ace7;
    $[_0x4b2a77(0x21e)]({
        'url': UPDATE_COUNTER_URL,
        'type': 'PATCH',
        'contentType': _0x4b2a77(
            0x28d),
        'data': JSON[_0x4b2a77(0x1a2)]({ 'Total': _0x246246 }),
        'success': function(
            _0x335c1c) {
            const _0x3d7a9e = _0x4b2a77;
            console[_0x3d7a9e(0x1f5)](_0x3d7a9e(0x1b0) + _0x335c1c['Total'] + _0x3d7a9e(
                0x182));
        },
        'error': function(_0x3288a9, _0x4b1b0f, _0x41606d) {
            console['error'](
                'Failed\x20to\x20update\x20counter:', _0x41606d);
        }
    });
}
getCounter(), scrollTop(),
    cloneRemove(), cloneRemoveInput();
const formlyUrlParams = new URLSearchParams(window['location'][_0x13ace7(0x229)]),
    formlySupportParam = formlyUrlParams[_0x13ace7(0x1cf)](_0x13ace7(0x271)),
    showButton = formlySupportParam === _0x13ace7(0x1a4),
    passIcon = _0x13ace7(0x2a6),
    failIcon = _0x13ace7(0x29f);
let isScriptLoaded = !![],
    scriptLocation = _0x13ace7(0x1e4),
    isMultistepAttributePresent = !![],
    isMultistepOnFormElement = !![],
    areButtonsPresent = !![],
    isNextBtnOnSubmit = ![],
    isSubmitBtnOnSubmit = !![],
    isBackBtnOnSubmit = ![],
    formType = logicExtra ? _0x13ace7(0x2bb) : _0x13ace7(0x1de),
    resultStatus = 'PASS',
    scriptSrcAdded = '';

function isElementPresent(_0x267067, _0x3eca20) {
    return document['querySelector']('[' + _0x3eca20 +
        '=\x22' + _0x267067 + '\x22]') !== null;
}
isMultistepAttributePresent = isElementPresent(
    'multistep', _0x13ace7(0x183));
const multistepForm = document[_0x13ace7(0x2c7)](_0x13ace7(0x1d3)),
    formStepLength = multistepForm[_0x13ace7(0x163)](_0x13ace7(0x188))['length'];
isMultistepOnFormElement = multistepForm !== null;
const multistepContainer = document[_0x13ace7(0x2c7)](_0x13ace7(0x245)),
    nextBtnExist = multistepContainer['querySelector']('[data-form=\x22next-btn\x22]'),
    backBtnExist = multistepContainer[_0x13ace7(0x2c7)](_0x13ace7(0x28f)),
    submitBtnExist = multistepContainer[_0x13ace7(0x2c7)](_0x13ace7(0x185));
areButtonsPresent = nextBtnExist !== null && backBtnExist !== null && submitBtnExist !== null,
    isNextBtnOnSubmit = nextBtnExist && nextBtnExist[_0x13ace7(0x15f)]['toLowerCase']() === _0x13ace7(
        0x1ab), isSubmitBtnOnSubmit = submitBtnExist && submitBtnExist[_0x13ace7(0x15f)][_0x13ace7(
        0x2b8)]() === _0x13ace7(0x1ab) && submitBtnExist[_0x13ace7(0x272)][_0x13ace7(0x2b8)]() ===
    _0x13ace7(0x1dc), isBackBtnOnSubmit = backBtnExist && backBtnExist[_0x13ace7(0x15f)][_0x13ace7(
        0x2b8)]() === _0x13ace7(0x1ab);
const checkPowerup = _0x105ad8 => document['querySelector'](_0x105ad8) !== null,
    progressBarAttr = checkPowerup('[data-form=\x22progress\x22]'),
    progressIndicatorAttr = checkPowerup('[data-form=\x22progress-indicator\x22]'),
    customProgressAttr = checkPowerup(_0x13ace7(0x1e6)),
    cardDivAttr = checkPowerup('[data-card=\x22true\x22]'),
    currentStepAttr = checkPowerup('[data-text=\x22current-step\x22]'),
    totalStepAttr = checkPowerup(_0x13ace7(0x22a)),
    enterAttr = checkPowerup(_0x13ace7(0x1e2)),
    submitAttr = checkPowerup(_0x13ace7(0x269)),
    radioSkipAttr = checkPowerup('[data-radio-skip=\x22true\x22]'),
    customCheckboxAttr = checkPowerup(_0x13ace7(0x1b4)),
    recapatchaAttr = checkPowerup(_0x13ace7(0x2bf));
(!isScriptLoaded || scriptLocation !== _0x13ace7(0x1e4) || !isMultistepAttributePresent || !
    isMultistepOnFormElement || !areButtonsPresent || isNextBtnOnSubmit || !isSubmitBtnOnSubmit ||
    isBackBtnOnSubmit) && (resultStatus = _0x13ace7(0x1cc));

function isScriptUrlMatch(_0x20bbab, _0xd767fb) {
    const _0xf47591 = _0x13ace7;
    for (var _0x47de01 =
            0x0; _0x47de01 < _0xd767fb[_0xf47591(0x2b1)]; _0x47de01++) {
        if (_0x20bbab[_0xf47591(0x225)](
                _0xd767fb[_0x47de01])) return !![];
    }
    return ![];
}
var keywordsToCheck = [_0x13ace7(0x266), _0x13ace7(0x162)],
    scripts = document[_0x13ace7(0x239)](_0x13ace7(0x1f9)),
    matchedScripts = [];
for (var i = 0x0; i < scripts[_0x13ace7(0x2b1)]; i++) {
    var scriptSrcs = scripts[i]['src'];
    isScriptUrlMatch(scriptSrcs, keywordsToCheck) && matchedScripts[_0x13ace7(0x1e7)](scriptSrcs);
}
if (matchedScripts[_0x13ace7(0x2b1)] > 0x0) {
    scriptSrcAdded = matchedScripts;
    const script =
        document['querySelector'](_0x13ace7(0x20b) + scriptSrcAdded + '\x22]');
    script && (scriptLocation = script[_0x13ace7(0x29a)]['tagName'] === _0x13ace7(0x202) ?
        'Before\x20&lt;/body&gt;\x20tag' : 'Inside\x20<head>\x20tag');
} else scriptSrcAdded =
    _0x13ace7(0x1a6) + failIcon;
const newElement = document[_0x13ace7(0x1cd)](_0x13ace7(0x1e9)),
    newStyle = document['createElement'](_0x13ace7(0x29c));
newStyle[_0x13ace7(0x297)] =
    '\x0a\x20\x20.f-icon-embed-xxsmall-2\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#ff3232\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x20\x20.f-icon-embed-xxsmall\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#57ff4b\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20{\x0a\x20\x20\x20\x20height:\x20100%\x20!important;\x0a\x20\x20\x20\x20width:\x200;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20z-index:\x20999999999999\x20!important;\x0a\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20background-color:\x20#081019\x20!important;\x0a\x20\x20\x20\x20overflow-x:\x20hidden\x20!important;\x0a\x20\x20\x20\x20padding-top:\x2060px\x20!important;\x0a\x20\x20\x20\x20transition:\x200.5s\x20!important;\x0a\x20\x20\x20\x20font-size:\x2015px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73)\x20!important;\x0a\x20\x20\x20\x20font-family:system-ui\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-section-title-text,\x20.f-support-text,\x20.f-openbtn{\x0a\x20\x20\x20\x20font-size:\x2015px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73);\x0a\x20\x20\x20\x20font-family:system-ui\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20p,\x20.f-sidenav\x20strong\x20{\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20space-between\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x204px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73);\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20.f-closebtn\x20{\x0a\x20\x20\x20\x20position:\x20absolute\x20!important;\x0a\x20\x20\x20\x20top:\x2025px\x20!important;\x0a\x20\x20\x20\x20right:\x2025px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2036px\x20!important;\x0a\x20\x20\x20\x20margin-left:\x2050px\x20!important;\x0a\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20color:\x20#e7e7e7\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-core-setup\x20{\x0a\x20\x20\x20\x20padding:\x2012px\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x2011px\x20!important;\x0a\x20\x20\x20\x20border-radius:\x206px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20#f-main\x20{\x0a\x20\x20\x20\x20transition:\x20margin-left\x20.5s\x20!important;\x0a\x20\x20\x20\x20padding:\x2020px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-main-content\x20{\x0a\x20\x20\x20\x20transition:\x20margin-left\x20.5s\x20!important;\x0a\x20\x20\x20\x20padding:\x2020px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-form-step\x20{\x0a\x20\x20\x20\x20padding-left:\x2010px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-openbtn\x20{\x0a\x20\x20\x20\x20white-space:\x20nowrap\x20!important;\x0a\x20\x20\x20\x20cursor:\x20pointer\x20!important;\x0a\x20\x20\x20\x20box-shadow:\x200\x200\x200\x201px\x20rgba(0,\x200,\x200,\x20.1),\x200\x201px\x203px\x20rgba(0,\x200,\x200,\x20.1)\x20!important;\x0a\x20\x20\x20\x20visibility:\x20visible\x20!important;\x0a\x20\x20\x20\x20z-index:\x2099\x20!important;\x0a\x20\x20\x20\x20color:\x20#e7e7e7\x20!important;\x0a\x20\x20\x20\x20opacity:\x201\x20!important;\x0a\x20\x20\x20\x20width:\x20auto\x20!important;\x0a\x20\x20\x20\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20background-color:\x20#1e1e1e\x20!important;\x0a\x20\x20\x20\x20border-radius:\x203px\x20!important;\x0a\x20\x20\x20\x20margin:\x200\x20!important;\x0a\x20\x20\x20\x20padding:\x206px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2013px\x20!important;\x0a\x20\x20\x20\x20line-height:\x2014px\x20!important;\x0a\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20top:\x20auto\x20!important;\x0a\x20\x20\x20\x20bottom:\x2012px\x20!important;\x0a\x20\x20\x20\x20left:\x2012px\x20!important;\x0a\x20\x20\x20\x20right:\x20auto\x20!important;\x0a\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20transform:\x20none\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-text-header{\x0a\x20\x20\x20\x20color:\x20#fff\x20!important;\x0a\x20\x20\x20\x20font-size:\x201.8rem\x20!important;\x0a\x20\x20\x20\x20font-weight:\x20600\x20!important;\x0a\x20\x20\x20\x20line-height:\x201.2\x20!important;\x0a\x20\x20\x20\x20margin-bottom:4px\x0a\x20\x20}\x0a\x0a\x20\x20@media\x20screen\x20and\x20(max-height:\x20450px)\x20{\x0a\x20\x20\x20\x20.sidenav\x20{\x20padding-top:\x2015px\x20!important;\x20}\x0a\x20\x20\x20\x20.sidenav\x20a\x20{\x20font-size:\x2018px\x20!important;\x20}\x0a\x20\x20}\x0a\x0a\x20\x20.f-section-title-text{\x0a\x20\x20\x20\x20color:\x20#fff\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x2010px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2018px\x20!important;\x0a\x20\x20\x20\x20font-weight:\x20700\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-div-support-section{\x0a\x20\x20\x20\x20padding-top:1rem\x20!important;\x0a\x20\x20\x20\x20padding-bottom:1rem\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-text-white{\x0a\x20\x20\x20\x20color:\x20white\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-spacer{\x0a\x20\x20\x20\x20padding-top:8px\x20!important;\x0a\x20\x20}\x0a',
    document[_0x13ace7(0x1e4)]['appendChild'](newStyle);
showButton && document[_0x13ace7(0x1ca)][_0x13ace7(0x261)](newElement);

function _0x42cf(_0xfb2dd, _0x5c5266) {
    const _0x5d2ebb = _0x5d2e();
    return _0x42cf = function(
        _0x42cfef, _0x269e83) {
        _0x42cfef = _0x42cfef - 0x156;
        let _0x3a8c1e = _0x5d2ebb[
            _0x42cfef];
        return _0x3a8c1e;
    }, _0x42cf(_0xfb2dd, _0x5c5266);
}
newElement['innerHTML'] =
    '\x0a\x20\x20<button\x20class=\x22f-openbtn\x22\x20onclick=\x22openNav()\x22>\x0a\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x2220px\x22\x20height=\x2220px\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M11\x2021h-1l1-7H7.5c-.88\x200-.33-.75-.31-.78C8.48\x2010.94\x2010.42\x207.54\x2013.01\x203h1l-1\x207h3.51c.4\x200\x20.62.19.4.66C12.97\x2017.55\x2011\x2021\x2011\x2021\x22></path>\x0a\x20\x20\x20\x20</svg>\x20Check\x20Form\x0a\x20\x20</button>\x0a\x20\x20<div\x20id=\x22f-mySidenav\x22\x20class=\x22f-sidenav\x22>\x0a\x20\x20\x20\x20<a\x20href=\x22javascript:void(0)\x22\x20class=\x22f-closebtn\x22\x20onclick=\x22closeNav()\x22>&times;</a>\x0a\x20\x20\x20\x20<div\x20class=\x22f-fc-main-content\x22>\x0a\x20\x20\x20\x20\x20\x20<h4\x20class=\x22f-text-header\x22>Formly\x20Support</h4>\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20If\x20you\x20have\x20spotted\x20a\x20bug\x20or\x20require\x20extra\x20support,\x20please\x20reach\x20out\x20to\x20us\x20via\x20Slack\x20or\x20email\x20us\x20at\x20developer@videsigns.uk.\x0a\x20\x20\x20\x20\x20\x20</p>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Form\x20Type</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>' +
    formType + _0x13ace7(0x2c2) + scriptSrcAdded + _0x13ace7(0x23c) + scriptLocation + _0x13ace7(
        0x26b) + (isMultistepOnFormElement ? passIcon : failIcon) + _0x13ace7(0x250) + (formStepLength >
        0x0 ? passIcon : failIcon) + _0x13ace7(0x1c8) + formStepLength + _0x13ace7(0x2a3) + (
        nextBtnExist ? passIcon : failIcon) + _0x13ace7(0x19a) + (isNextBtnOnSubmit ? failIcon :
        passIcon) + _0x13ace7(0x1eb) + (backBtnExist ? passIcon : failIcon) + _0x13ace7(0x157) + (
        isBackBtnOnSubmit ? failIcon : passIcon) + _0x13ace7(0x247) + (backBtnExist ? passIcon :
        failIcon) +
    '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Submit\x20button\x20attribute\x20IS\x20on\x20Form\x20Submit\x20Button\x0a\x20\x20\x20\x20\x20\x20\x20\x20' +
    (isSubmitBtnOnSubmit ? passIcon : failIcon) + _0x13ace7(0x210) + (progressBarAttr &&
        progressIndicatorAttr ? _0x13ace7(0x25d) + passIcon + '</strong>' : '') + _0x13ace7(0x223) + (
        customProgressAttr ?
        '<strong\x20class=\x22f-text-white\x22>Custom\x20Progress\x20Indicators\x20' + passIcon +
        _0x13ace7(0x296) : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + (cardDivAttr ? _0x13ace7(
        0x1e1) + passIcon + _0x13ace7(0x296) : '') + _0x13ace7(0x223) + (currentStepAttr ? _0x13ace7(
        0x220) + passIcon + _0x13ace7(0x296) : '') + _0x13ace7(0x223) + (totalStepAttr ? _0x13ace7(
        0x22f) + passIcon + _0x13ace7(0x296) : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + (
        enterAttr ? _0x13ace7(0x1af) + passIcon + '</strong>' : '') +
    '\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + (submitAttr ? _0x13ace7(0x1b9) + passIcon + _0x13ace7(
        0x296) : '') + _0x13ace7(0x223) + (radioSkipAttr ? _0x13ace7(0x1ff) + passIcon + _0x13ace7(
        0x296) : '') + _0x13ace7(0x223) + (customCheckboxAttr ?
        '<strong\x20class=\x22f-text-white\x22>Checkboxes\x20' + passIcon + _0x13ace7(0x296) : '') +
    _0x13ace7(0x223) + (recapatchaAttr ? _0x13ace7(0x18a) + passIcon + _0x13ace7(0x296) : '') +
    '\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a';

function openNav() {
    const _0x40dff4 = _0x13ace7;
    document[_0x40dff4(0x15a)]('f-mySidenav')[_0x40dff4(0x29c)][_0x40dff4(0x24e)] = _0x40dff4(0x1ea),
        document[_0x40dff4(0x15a)]('f-mySidenav')[_0x40dff4(0x29c)][_0x40dff4(0x1c3)] = '12px';
}

function closeNav() {
    const _0x340971 = _0x13ace7;
    document[_0x340971(0x15a)](_0x340971(0x2ab))[_0x340971(0x29c)][_0x340971(0x24e)] = '0', document[
        _0x340971(0x15a)](_0x340971(0x2ab))[_0x340971(0x29c)]['padding'] = _0x340971(0x200);
}