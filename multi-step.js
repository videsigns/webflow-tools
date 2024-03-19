// 19/3/24
// Major bug fixes
// 1. Data card not working
// 2. Back button validation issue
// 3. Radio + data skip issues with validation
// 4. Removed console log

const _0x52d52a = _0x46cd;
(function(_0x3ac4d7, _0x3ed3a8) {
    const _0x5b742a = _0x46cd,
        _0x47b4cc = _0x3ac4d7();
    while (!![]) {
        try {
            const _0x38187a = -parseInt(_0x5b742a(0x2cd)) / 0x1 + parseInt(_0x5b742a(0x1e6)) / 0x2 + parseInt(_0x5b742a(0x28e)) / 0x3 + parseInt(_0x5b742a(0x251)) / 0x4 * (parseInt(_0x5b742a(0x264)) / 0x5) + parseInt(_0x5b742a(0x1c4)) / 0x6 * (parseInt(_0x5b742a(0x198)) / 0x7) + -parseInt(_0x5b742a(0x21c)) / 0x8 + -parseInt(_0x5b742a(0x2c8)) / 0x9;
            if (_0x38187a === _0x3ed3a8) break;
            else _0x47b4cc['push'](_0x47b4cc['shift']());
        } catch (_0x3f4225) { _0x47b4cc['push'](_0x47b4cc['shift']()); }
    }
}(_0x9ddd, 0x29880));
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
let steps = $(_0x52d52a(0x277)),
    progressbarClone = $(_0x52d52a(0x253))[_0x52d52a(0x21a)](),
    progressbar, weightedSelection = $(_0x52d52a(0x19d))[_0x52d52a(0x284)](_0x52d52a(0x2b4)),
    weightedSelectionRange = $(_0x52d52a(0x27d))['data'](_0x52d52a(0x171)),
    selectMultiple = $(_0x52d52a(0x17b))[_0x52d52a(0x284)]('select-multiple'),
    customError = $('[data-custom-error-message]')[_0x52d52a(0x284)](_0x52d52a(0x185)),
    reinitIX = $(_0x52d52a(0x22b))[_0x52d52a(0x284)](_0x52d52a(0x23b)),
    memory = $('[data-memory]')[_0x52d52a(0x284)](_0x52d52a(0x1c1)),
    quiz = $(_0x52d52a(0x1d7))[_0x52d52a(0x284)]('quiz');
const urlFormly = new URL(window['location']['href']);
let _params = $(_0x52d52a(0x1df))[_0x52d52a(0x284)](_0x52d52a(0x269)),
    logicExtra = $(_0x52d52a(0x294))[_0x52d52a(0x284)](_0x52d52a(0x1b1)),
    oldSubmitText = $(_0x52d52a(0x2d3))[_0x52d52a(0x200)](),
    oldResetText = $(_0x52d52a(0x268))[_0x52d52a(0x237)](),
    formReset = $(_0x52d52a(0x294))[_0x52d52a(0x284)](_0x52d52a(0x2aa)),
    resetDelay = $(_0x52d52a(0x19f))[_0x52d52a(0x284)](_0x52d52a(0x285)) ? $('[data-reset-delay]')[_0x52d52a(0x284)]('reset-delay') : 0x7d0,
    redirectDelay = $(_0x52d52a(0x1e9))[_0x52d52a(0x284)](_0x52d52a(0x24a)) ? $('[data-redirect-delay]')[_0x52d52a(0x284)](_0x52d52a(0x24a)) : 0x64,
    phoneFormat = $('[data-form=\x22multistep\x22]')[_0x52d52a(0x284)](_0x52d52a(0x1c9)),
    scrollToTop = $('[data-form=\x22multistep\x22]')[_0x52d52a(0x284)](_0x52d52a(0x1e1)),
    trackLastStep = $(_0x52d52a(0x2a2))['data'](_0x52d52a(0x24c)),
    conditionalResult = $(_0x52d52a(0x2cf))[_0x52d52a(0x284)]('conditional-result') === _0x52d52a(0x295),
    scrollTopOffset = parseInt($(_0x52d52a(0x294))[_0x52d52a(0x284)](_0x52d52a(0x25f)));
const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
savedFilledInput = JSON[_0x52d52a(0x1f6)](localStorage[_0x52d52a(0x254)](_0x52d52a(0x231))), formlyLastStep = JSON[_0x52d52a(0x1f6)](localStorage[_0x52d52a(0x254)](_0x52d52a(0x22a))), formlyLastStepAnswer = JSON['parse'](localStorage[_0x52d52a(0x254)](_0x52d52a(0x276)));
trackLastStep && (formlyLastStep > x && (x = formlyLastStep), formlyLastStepAnswer && (selections = formlyLastStepAnswer));
$(_0x52d52a(0x180))['each'](function() {
    const _0x195ff6 = _0x52d52a;
    ogCloneArr[_0x195ff6(0x241)]({ 'name': $(this)['data']('clone'), 'element': $(this)[_0x195ff6(0x21a)](!![]), 'display': $(_0x195ff6(0x290) + $(this)[_0x195ff6(0x284)]('clone') + '\x22]')['eq'](0x0)[_0x195ff6(0x21a)](!![]) });
});
$(_0x52d52a(0x25d))[_0x52d52a(0x1f3)] > 0x0 && (notRobot = ![]);

function recaptcha(_0x46bd8a) { notRobot = !![]; }($(steps[x])[_0x52d52a(0x284)]('card') || $(steps[x])['find']('.active-answer-card')[_0x52d52a(0x284)]('card')) && (next = !![]);
$('[data-count-card]')[_0x52d52a(0x1f3)] > 0x0 && (countCard = $('[data-count-card]')['data'](_0x52d52a(0x191)));
$(_0x52d52a(0x1ad))[_0x52d52a(0x218)](), $(progressbarClone)['removeClass']('current'), $(_0x52d52a(0x184))['children']()[_0x52d52a(0x258)](), $('[data-form=\x22submit-btn\x22]')[_0x52d52a(0x218)](), $(_0x52d52a(0x192))['hide'](), steps[_0x52d52a(0x2b6)](function() {
    const _0x36af85 = _0x52d52a;
    $('[data-form=\x22progress\x22]')[_0x36af85(0x29b)](progressbarClone[_0x36af85(0x21a)](!![], !![]));
}), $('[data-input-field]')[_0x52d52a(0x218)]();
countCard ? (curStep = curStep + 0x1, totalSteps = steps['length'], $(_0x52d52a(0x1a5))['text'](totalSteps)) : ($(steps[x])[_0x52d52a(0x284)](_0x52d52a(0x23f)) ? curStep = curStep + 0x0 : curStep = curStep + 0x1, totalSteps = $(_0x52d52a(0x204))['length'], $(_0x52d52a(0x1a5))[_0x52d52a(0x237)](totalSteps), $(_0x52d52a(0x29d))['each'](function() {
    const _0x171303 = _0x52d52a;
    $($(_0x171303(0x253))[$(this)[_0x171303(0x234)]()])[_0x171303(0x218)]();
}));
progressbar = $(_0x52d52a(0x184))[_0x52d52a(0x1a6)](), $('[data-form=\x22progress-indicator\x22]')['on'](_0x52d52a(0x2d5), clickableIndicator), $(_0x52d52a(0x297))['text'](curStep), steps['hide'](), $(_0x52d52a(0x1ff))['hide'](), $(_0x52d52a(0x243))[_0x52d52a(0x2b6)](function() {
    const _0x4abec5 = _0x52d52a;
    $(this)[_0x4abec5(0x2c3)]('type', 'button');
});

function getParams() {
    const _0x1a53ca = _0x52d52a;
    urlFormly[_0x1a53ca(0x19e)][_0x1a53ca(0x2b9)](function(_0x446826, _0x500699) {
        const _0x1d74b1 = _0x1a53ca;
        searchQ[_0x1d74b1(0x241)]({ 'val': _0x446826, 'key': _0x500699 });
    });
}

function getSafe(_0x77a0f8, _0x466c44) { try { return _0x77a0f8(); } catch (_0x15d954) { return _0x466c44; } }

function phoneAutoFormat(_0x4b31eb) {
    var _0x5c8c98 = '';
    return function(_0x4174f5) {
        const _0x208b53 = _0x46cd;
        var _0x247179 = '',
            _0x1a0719 = _0x4174f5['replace'](/\D/g, ''),
            _0x16133b = 0x0,
            _0x345197 = 0x0;
        while (_0x16133b < _0x1a0719['length'] && _0x345197 < _0x4b31eb[_0x208b53(0x1f3)]) { _0x4b31eb[_0x345197] === 'x' ? (_0x247179 += _0x1a0719[_0x16133b], _0x16133b++) : _0x247179 += _0x4b31eb[_0x345197], _0x345197++; }
        if (_0x4174f5[_0x208b53(0x1f3)] < _0x5c8c98[_0x208b53(0x1f3)]) {
            var _0x34a4b6 = _0x4b31eb[_0x208b53(0x1a3)](_0x345197);
            _0x247179 += _0x34a4b6[_0x208b53(0x2c2)](/x/g, '');
        }
        return _0x5c8c98 = _0x247179, _0x247179;
    };
}

function validateURL(_0x468b23) { return urlPattern['test'](_0x468b23) ? !![] : ![]; }
quiz && steps[_0x52d52a(0x2b6)](function() {
    const _0x336343 = _0x52d52a;
    $(this)[_0x336343(0x1a6)]()[_0x336343(0x2c3)](_0x336343(0x2ad), !![]), $(this)[_0x336343(0x1a6)]()[_0x336343(0x2c3)]('data-radio-delay', 0xfa);
});

function disableBtn(_0x38cecf) {
    const _0x31cf2f = _0x52d52a;
    fill = ![], !customError && ($('[data-form=\x22next-btn\x22]')[_0x31cf2f(0x17a)]({ 'opacity': _0x31cf2f(0x2b8), 'pointer-events': _0x31cf2f(0x223) }), $(_0x31cf2f(0x1cc))[_0x31cf2f(0x272)](_0x31cf2f(0x1ae)), $(_0x31cf2f(0x2d3))['css']({ 'opacity': _0x31cf2f(0x2b8), 'pointer-events': _0x31cf2f(0x223) }), $('[data-form=\x22submit-btn\x22]')[_0x31cf2f(0x272)](_0x31cf2f(0x1ae)), $(_0x31cf2f(0x192))[_0x31cf2f(0x17a)]({ 'opacity': _0x31cf2f(0x2b8), 'pointer-events': _0x31cf2f(0x223) }), $(_0x31cf2f(0x192))['addClass'](_0x31cf2f(0x1ae)));
}

function enableBtn() {
    const _0x8569ac = _0x52d52a;
    fill = !![], $(_0x8569ac(0x1cc))[_0x8569ac(0x17a)]({ 'pointer-events': 'auto', 'opacity': '1' }), $(_0x8569ac(0x1cc))[_0x8569ac(0x1b3)]('disabled'), $(_0x8569ac(0x2d3))['css']({ 'pointer-events': _0x8569ac(0x2e8), 'opacity': '1' }), $(_0x8569ac(0x2d3))['removeClass'](_0x8569ac(0x1ae)), $(_0x8569ac(0x192))[_0x8569ac(0x17a)]({ 'pointer-events': _0x8569ac(0x2e8), 'opacity': '1' }), $(_0x8569ac(0x192))[_0x8569ac(0x1b3)]('disabled');
}

function saveLastAnswer(_0x53f85d) {
    const _0x18a354 = _0x52d52a;
    localStorage[_0x18a354(0x2de)](_0x18a354(0x276)), localStorage[_0x18a354(0x2ea)](_0x18a354(0x276), JSON[_0x18a354(0x2da)](_0x53f85d));
}

function saveFilledInput() {
    const _0x218106 = _0x52d52a;
    $('form[data-form=\x22multistep\x22]\x20:input')[_0x218106(0x286)]('[type=\x22submit\x22]')[_0x218106(0x2b6)](function() {
        const _0x32bca4 = _0x218106;
        $(this)[_0x32bca4(0x2c3)](_0x32bca4(0x182)) === _0x32bca4(0x1ab) || $(this)[_0x32bca4(0x2c3)](_0x32bca4(0x182)) === _0x32bca4(0x201) ? $(this)[_0x32bca4(0x242)](_0x32bca4(0x2ec)) && (filledInput[_0x32bca4(0x1f5)](_0xb17739 => _0xb17739['inputName'] === $(this)['attr']('name')) ? (filledInput = filledInput[_0x32bca4(0x216)](_0x596eb1 => _0x596eb1[_0x32bca4(0x212)] !== $(this)[_0x32bca4(0x2c3)]('name')), $(this)[_0x32bca4(0x200)]() !== '' && filledInput[_0x32bca4(0x241)]({ 'inputName': $(this)[_0x32bca4(0x2c3)](_0x32bca4(0x27f)), 'value': $(this)[_0x32bca4(0x200)]() })) : $(this)[_0x32bca4(0x200)]() !== '' && filledInput[_0x32bca4(0x241)]({ 'inputName': $(this)[_0x32bca4(0x2c3)]('name'), 'value': $(this)['val']() })) : filledInput[_0x32bca4(0x1f5)](_0x22928d => _0x22928d['inputName'] === $(this)[_0x32bca4(0x2c3)](_0x32bca4(0x27f))) ? (filledInput = filledInput[_0x32bca4(0x216)](_0x3b90d1 => _0x3b90d1[_0x32bca4(0x212)] !== $(this)['attr']('name')), $(this)[_0x32bca4(0x200)]() !== '' && filledInput[_0x32bca4(0x241)]({ 'inputName': $(this)['attr']('name'), 'value': $(this)['val']() })) : $(this)[_0x32bca4(0x200)]() !== '' && filledInput['push']({ 'inputName': $(this)[_0x32bca4(0x2c3)](_0x32bca4(0x27f)), 'value': $(this)[_0x32bca4(0x200)]() });
    }), trackLastStep && (formlyLastStep > x ? lastStep = formlyLastStep : lastStep = x, localStorage[_0x218106(0x2de)](_0x218106(0x22a)), localStorage[_0x218106(0x2ea)](_0x218106(0x22a), lastStep)), localStorage[_0x218106(0x2de)](_0x218106(0x231)), localStorage[_0x218106(0x2ea)](_0x218106(0x231), JSON[_0x218106(0x2da)](filledInput));
}

function scrollTop() {
    const _0x512825 = _0x52d52a;
    scrollToTop && $(_0x512825(0x26d))[_0x512825(0x1ca)]({ 'scrollTop': $('[data-form=\x22multistep\x22]')[_0x512825(0x211)]()[_0x512825(0x1c5)] - scrollTopOffset }, 0x3e8);
}

function updateStep() {
    const _0x239c5f = _0x52d52a;
    scrollTop(), skip = ![], $(_0x239c5f(0x178))['removeClass']('disabled');
    $(_0x239c5f(0x1fb))[_0x239c5f(0x284)]('clickable') && (steps[_0x239c5f(0x1ba)](':input[required]')['each'](function() {
        const _0x22cc19 = _0x239c5f;
        $($(_0x22cc19(0x178))[$(this)['parents'](_0x22cc19(0x277))[_0x22cc19(0x234)]()]), $(this)[_0x22cc19(0x200)]() === '' && emptyInput++;
    }), emptyInput > 0x0 ? $('input[type=\x22submit\x22]')[_0x239c5f(0x272)]('disabled') : $(_0x239c5f(0x225))[_0x239c5f(0x1b3)](_0x239c5f(0x1ae)));
    $('[data-form=\x22custom-progress-indicator\x22]')['removeClass'](_0x239c5f(0x1d4)), $('[data-form=\x22custom-progress-indicator\x22]')[_0x239c5f(0x272)](_0x239c5f(0x1ae)), $($(_0x239c5f(0x178))[x])[_0x239c5f(0x272)](_0x239c5f(0x1d4)), selection = selections[_0x239c5f(0x216)](_0x5c0b65 => _0x5c0b65[_0x239c5f(0x2c4)] === x - 0x1);
    next && (x = getSafe(() => selection[0x0][_0x239c5f(0x265)]) ? parseInt(getSafe(() => selection[0x0]['skipTo'])) : x);
    $(_0x239c5f(0x2e0))['hide'](), steps['hide']();
    reinitIX === !![] && window[_0x239c5f(0x2d1)][_0x239c5f(0x24b)]();
    $(progressbar)[_0x239c5f(0x1b3)]('current');
    for (i = 0x0; i <= x; i++) { countCard ? $(progressbar[i])['addClass']('current') : !$(steps[i])[_0x239c5f(0x284)](_0x239c5f(0x23f)) && $(progressbar[i])[_0x239c5f(0x272)](_0x239c5f(0x1d4)); }
    reinitIX === !![] ? (window[_0x239c5f(0x2d1)] && window[_0x239c5f(0x2d1)]['require'](_0x239c5f(0x2dd))[_0x239c5f(0x299)](), document[_0x239c5f(0x29e)](new Event('readystatechange')), $(steps[x])['show']()) : $(steps[x])[_0x239c5f(0x20f)](_0x239c5f(0x2a7));
    $(_0x239c5f(0x28d))[_0x239c5f(0x1b3)](_0x239c5f(0x17e));
    x === 0x0 && !$(steps[x])[_0x239c5f(0x284)](_0x239c5f(0x23f)) && ($(steps[x])[_0x239c5f(0x1ba)]('[data-answer]')[_0x239c5f(0x25b)](), $(steps[x])['find'](_0x239c5f(0x2e0))[_0x239c5f(0x272)](_0x239c5f(0x17e)));
    selection[_0x239c5f(0x1f3)] > 0x0 ? ($(steps[x])['find'](_0x239c5f(0x249) + selection[0x0][_0x239c5f(0x296)] + '\x22]')[_0x239c5f(0x25b)](), $(steps[x])['find']('[data-answer=\x22' + selection[0x0][_0x239c5f(0x296)] + '\x22]')[_0x239c5f(0x272)](_0x239c5f(0x17e))) : ($(steps[x])[_0x239c5f(0x1ba)](_0x239c5f(0x249) + answer + '\x22]')[_0x239c5f(0x25b)](), $(steps[x])[_0x239c5f(0x1ba)](_0x239c5f(0x249) + answer + '\x22]')[_0x239c5f(0x272)](_0x239c5f(0x17e)));
    if (x === 0x0) $(_0x239c5f(0x227))[_0x239c5f(0x218)](), $(_0x239c5f(0x1cc))['show'](), $('[data-form=\x22submit-btn\x22]')[_0x239c5f(0x218)]();
    else {
        if (x === steps[_0x239c5f(0x1f3)] - 0x1 || $(steps[x])[_0x239c5f(0x1ba)](_0x239c5f(0x2ab))[_0x239c5f(0x1f3)] > 0x0) {
            $(_0x239c5f(0x1cc))[_0x239c5f(0x218)]();
            if ($(steps[x])['find'](_0x239c5f(0x220))[_0x239c5f(0x284)](_0x239c5f(0x2c0))) $(steps[x])[_0x239c5f(0x1ba)]('[data-form=\x22next-btn\x22][data-submit-show]')[_0x239c5f(0x25b)]();
            else $(_0x239c5f(0x1cc))[_0x239c5f(0x284)](_0x239c5f(0x2c0)) && $('[data-form=\x22next-btn\x22]')['show']();
            $(_0x239c5f(0x2d3))[_0x239c5f(0x25b)](), $(_0x239c5f(0x192))[_0x239c5f(0x25b)](), $(_0x239c5f(0x227))[_0x239c5f(0x25b)]();
        } else $(_0x239c5f(0x1cc))[_0x239c5f(0x25b)](), $(_0x239c5f(0x227))[_0x239c5f(0x25b)](), $(_0x239c5f(0x2d3))[_0x239c5f(0x218)](), $(_0x239c5f(0x192))[_0x239c5f(0x218)]();
    }
    $($(steps[x])[_0x239c5f(0x1ba)](_0x239c5f(0x2bd))[0x0])[_0x239c5f(0x1cf)](), $($(steps[x])[_0x239c5f(0x1ba)]('textarea[autofocus]')[0x0])['focus'](), validation();
    for (idx = 0x0; idx <= x; idx++) { $($(_0x239c5f(0x178))[idx])[_0x239c5f(0x1b3)](_0x239c5f(0x1ae)); }
}

function validateEmail(_0x1cfa33, _0x5a8661, _0x375093) {
    const _0x5cf303 = _0x52d52a;
    let _0x4c2163 = _0x1cfa33[_0x5cf303(0x2e7)]('@') ? _0x1cfa33[_0x5cf303(0x2e3)]('@')[0x1][_0x5cf303(0x2e3)]('.')[0x0] : [];
    dom = [];
    _0x5a8661 !== undefined && _0x5a8661[_0x5cf303(0x2e3)](',')[_0x5cf303(0x2b9)](function(_0x4becad) {
        const _0x520b8b = _0x5cf303;
        _0x4becad[_0x520b8b(0x2e7)](_0x4c2163) && dom[_0x520b8b(0x241)](_0x4c2163);
    });
    dom[_0x5cf303(0x1f3)] > 0x0 ? domainAllowed = ![] : domainAllowed = !![];
    var _0x232702 = /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,20})?$/;
    !_0x232702[_0x5cf303(0x187)](_0x1cfa33) || !domainAllowed ? (emailFilled = ![], unfilledArr[_0x5cf303(0x241)]({ 'input': _0x375093 })) : emailFilled = !![];
}

function phoneValidation(_0xe8f75f, _0x2e73bb, _0x3625a) {
    if (phoneFormat) return _0x2e73bb >= _0x3625a ? !![] : ![];
    else { if (_0x2e73bb >= _0x3625a) return !![]; }
}

function validation() {
    const _0x13bd72 = _0x52d52a;
    $(steps[x])[_0x13bd72(0x284)](_0x13bd72(0x23f)) && enableBtn();
    unfilledArr = [], inputFilled = !![], radioFilled = !![], checkboxFilled = !![], numFilled = !![], fileFilled = !![], dateFilled = !![], timeFilled = !![], selectFilled = !![], textareaFilled = !![], telFilled = !![], emailFilled = !![], passwordFilled = !![], emptyInput = 0x0, empReqInput = [], empReqDate = [], empReqTime = [], empReqSelect = [], empReqTel = [], empReqTextarea = [], empReqNum = [], empReqFile = [], empReqRadio = [], textareaLength = $(steps[x])[_0x13bd72(0x1ba)](_0x13bd72(0x21d))[_0x13bd72(0x1f3)], textInputLength = $(steps[x])[_0x13bd72(0x1ba)](_0x13bd72(0x2db))['length'], selectInputLength = $(steps[x])[_0x13bd72(0x1ba)]('select[required]:visible')['length'], emailInputLength = $(steps[x])[_0x13bd72(0x1ba)](_0x13bd72(0x27e))['length'], checkboxInputLength = $(steps[x])[_0x13bd72(0x1ba)](_0x13bd72(0x1bd))[_0x13bd72(0x1f3)];
    textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0 ? disableBtn() : enableBtn();
    checkCount = $(steps[x])[_0x13bd72(0x284)](_0x13bd72(0x1ab)) ? $(steps[x])[_0x13bd72(0x284)](_0x13bd72(0x1ab)) : $(steps[x])['find'](_0x13bd72(0x1f7))[_0x13bd72(0x1f3)] > 0x0 ? $(steps[x])[_0x13bd72(0x1ba)](_0x13bd72(0x1f7))[_0x13bd72(0x284)](_0x13bd72(0x1ab)) : 0x0;
    if (!logicExtra) $(steps[x])['find'](':input')['is']('[type=\x22checkbox\x22]') && (checkCount === '*' || checkCount > $(steps[x])['find'](':input[type=\x22checkbox\x22]')[_0x13bd72(0x1f3)] ? $(steps[x])[_0x13bd72(0x1ba)](_0x13bd72(0x1e5))[_0x13bd72(0x2b6)](function() {
        const _0x3ffd55 = _0x13bd72;
        $(this)['is'](_0x3ffd55(0x1db)) ? $(steps[x])[_0x3ffd55(0x1ba)](_0x3ffd55(0x2e2))[_0x3ffd55(0x1f3)] < 0x1 && (checkboxFilled = !![], resetInputErrorMessage($(this)[_0x3ffd55(0x2c3)](_0x3ffd55(0x27f)))) : (checkboxFilled = ![], unfilledArr[_0x3ffd55(0x241)]({ 'input': $(this)[_0x3ffd55(0x2c3)](_0x3ffd55(0x27f)) }));
    }) : $(steps[x])[_0x13bd72(0x1ba)](':input[type=\x22checkbox\x22]:checked')['length'] >= checkCount ? $(steps[x])[_0x13bd72(0x1ba)](_0x13bd72(0x2e2))['length'] > 0x0 ? $(steps[x])[_0x13bd72(0x1ba)](_0x13bd72(0x2e2))[_0x13bd72(0x2b6)](function() {
        const _0x3aa3a2 = _0x13bd72;
        checkboxFilled = ![];
        let _0x15a501 = $(steps[x])[_0x3aa3a2(0x1ba)](':input[type=\x22checkbox\x22][required]')[_0x3aa3a2(0x1f3)],
            _0x2718e5 = $(steps[x])['find'](':input[type=\x22checkbox\x22][required]:checked')[_0x3aa3a2(0x1f3)];
        _0x15a501 - _0x2718e5 === 0x0 ? (checkboxFilled = !![], resetInputErrorMessage($(steps[x])[_0x3aa3a2(0x1ba)](':input[type=\x22checkbox\x22]')[_0x3aa3a2(0x2c3)](_0x3aa3a2(0x27f)))) : (checkboxFilled = ![], $(steps[x])['find'](_0x3aa3a2(0x183))['each'](function() {
            const _0x2d5f5c = _0x3aa3a2;
            unfilledArr[_0x2d5f5c(0x241)]({ 'input': $(this)[_0x2d5f5c(0x2c3)](_0x2d5f5c(0x27f)) });
        }));
    }) : (checkboxFilled = !![], resetInputErrorMessage($(steps[x])[_0x13bd72(0x1ba)](_0x13bd72(0x1e5))[_0x13bd72(0x2c3)]('name'))) : (checkboxFilled = ![], $(steps[x])[_0x13bd72(0x1ba)](':input[type=\x22checkbox\x22][required]')[_0x13bd72(0x2b6)](function() {
        const _0x87877f = _0x13bd72;
        $(this)[_0x87877f(0x286)](_0x87877f(0x1db)) && unfilledArr[_0x87877f(0x241)]({ 'input': $(this)[_0x87877f(0x2c3)](_0x87877f(0x27f)) });
    }), unfilledArr[_0x13bd72(0x241)]({ 'input': $(steps[x])['find'](_0x13bd72(0x1e5))[_0x13bd72(0x2c3)](_0x13bd72(0x27f)) }))), $(steps[x])[_0x13bd72(0x1ba)](_0x13bd72(0x2e9))['each'](function(_0x4c17d6) {
        const _0x38237a = _0x13bd72;
        var _0x3a3201 = $(this)['attr']('name');
        $('input:radio[name=\x22' + _0x3a3201 + _0x38237a(0x267))[_0x38237a(0x1f3)] == 0x0 ? (!empReqRadio[_0x38237a(0x1ba)](_0x4db1d2 => _0x4db1d2[_0x38237a(0x259)] === _0x4c17d6) && empReqRadio[_0x38237a(0x241)]({ 'input': _0x4c17d6 }), unfilledArr[_0x38237a(0x241)]({ 'input': $(this)[_0x38237a(0x2c3)]('name') })) : empReqRadio = empReqRadio['filter'](_0x2d6b96 => _0x2d6b96[_0x38237a(0x259)] !== _0x4c17d6), empReqRadio[_0x38237a(0x1f3)] === 0x0 ? radioFilled = !![] : radioFilled = ![];
    }), $(steps[x])['find'](_0x13bd72(0x2e6))[_0x13bd72(0x2b6)](function(_0x15e812) {
        const _0x3eae43 = _0x13bd72;
        let _0x499724 = $(this)[_0x3eae43(0x200)]()[_0x3eae43(0x1f3)],
            _0x1776bb = $(this)[_0x3eae43(0x284)](_0x3eae43(0x173)) ? $(this)[_0x3eae43(0x284)](_0x3eae43(0x173)) : 0x0;
        $(this)[_0x3eae43(0x200)]() !== '' && _0x499724 >= _0x1776bb ? empReqInput = empReqInput['filter'](_0x22121c => _0x22121c['input'] !== _0x15e812) : (!empReqInput[_0x3eae43(0x1ba)](_0x58b471 => _0x58b471[_0x3eae43(0x259)] === _0x15e812) && empReqInput[_0x3eae43(0x241)]({ 'input': _0x15e812 }), unfilledArr['push']({ 'input': $(this)[_0x3eae43(0x2c3)](_0x3eae43(0x27f)) })), empReqInput['length'] === 0x0 ? inputFilled = !![] : inputFilled = ![];
    }), $(steps[x])[_0x13bd72(0x1ba)](_0x13bd72(0x208))['each'](function(_0x999c0d) {
        const _0x39fabf = _0x13bd72;
        let _0x4b0aea = $(this)['val']()[_0x39fabf(0x1f3)],
            _0x4774d7 = $(this)['data'](_0x39fabf(0x173)) ? $(this)[_0x39fabf(0x284)](_0x39fabf(0x173)) : 0x0;
        $(this)[_0x39fabf(0x200)]() !== '' && _0x4b0aea >= _0x4774d7 ? empReqPassword = empReqPassword[_0x39fabf(0x216)](_0x175e2c => _0x175e2c[_0x39fabf(0x259)] !== _0x999c0d) : (!empReqPassword[_0x39fabf(0x1ba)](_0x123fb8 => _0x123fb8[_0x39fabf(0x259)] === _0x999c0d) && empReqPassword[_0x39fabf(0x241)]({ 'input': _0x999c0d }), unfilledArr[_0x39fabf(0x241)]({ 'input': $(this)['attr'](_0x39fabf(0x27f)) })), empReqPassword[_0x39fabf(0x1f3)] === 0x0 ? passwordFilled = !![] : passwordFilled = ![];
    }), $(steps[x])['find'](':input[type=\x22url\x22][required]')[_0x13bd72(0x2b6)](function(_0x3841a4) {
        const _0x5f45c5 = _0x13bd72;
        let _0x5adbc2 = $(this)[_0x5f45c5(0x200)]()[_0x5f45c5(0x1f3)],
            _0x19d394 = $(this)[_0x5f45c5(0x284)](_0x5f45c5(0x173)) ? $(this)[_0x5f45c5(0x284)](_0x5f45c5(0x173)) : 0x0;
        $(this)[_0x5f45c5(0x200)]() !== '' && _0x5adbc2 >= _0x19d394 ? empReqUrl = empReqUrl[_0x5f45c5(0x216)](_0x430888 => _0x430888[_0x5f45c5(0x259)] !== _0x3841a4) : (!empReqTime[_0x5f45c5(0x1ba)](_0x336c28 => _0x336c28[_0x5f45c5(0x259)] === _0x3841a4) && empReqUrl['push']({ 'input': _0x3841a4 }), unfilledArr[_0x5f45c5(0x241)]({ 'input': $(this)['attr'](_0x5f45c5(0x27f)) })), empReqUrl['length'] === 0x0 && validateURL($(this)[_0x5f45c5(0x200)]()) ? urlFilled = !![] : urlFilled = ![];
    }), $(steps[x])[_0x13bd72(0x1ba)](_0x13bd72(0x1ed))[_0x13bd72(0x2b6)](function(_0x29cf2a) {
        const _0x5345c0 = _0x13bd72;
        let _0x2315c7 = $(this)[_0x5345c0(0x200)]()[_0x5345c0(0x1f3)],
            _0x1f81b3 = $(this)['data']('min-character') ? $(this)[_0x5345c0(0x284)](_0x5345c0(0x173)) : 0x0;
        $(this)[_0x5345c0(0x200)]() !== '' && _0x2315c7 >= _0x1f81b3 ? empReqTime = empReqTime[_0x5345c0(0x216)](_0x33b917 => _0x33b917[_0x5345c0(0x259)] !== _0x29cf2a) : (!empReqTime[_0x5345c0(0x1ba)](_0x3e9fab => _0x3e9fab[_0x5345c0(0x259)] === _0x29cf2a) && empReqTime['push']({ 'input': _0x29cf2a }), unfilledArr['push']({ 'input': $(this)[_0x5345c0(0x2c3)](_0x5345c0(0x27f)) })), empReqTime[_0x5345c0(0x1f3)] === 0x0 ? timeFilled = !![] : timeFilled = ![];
    }), $(steps[x])[_0x13bd72(0x1ba)](_0x13bd72(0x2cc))[_0x13bd72(0x2b6)](function(_0x59aece) {
        const _0x49f3ed = _0x13bd72;
        $(this)[_0x49f3ed(0x200)]() !== '' ? empReqDate = empReqDate['filter'](_0x4ada2f => _0x4ada2f['input'] !== _0x59aece) : (!empReqDate[_0x49f3ed(0x1ba)](_0x212291 => _0x212291[_0x49f3ed(0x259)] === _0x59aece) && empReqDate[_0x49f3ed(0x241)]({ 'input': _0x59aece }), unfilledArr[_0x49f3ed(0x241)]({ 'input': $(this)[_0x49f3ed(0x2c3)](_0x49f3ed(0x27f)) })), empReqDate[_0x49f3ed(0x1f3)] === 0x0 ? dateFilled = !![] : dateFilled = ![];
    }), $(steps[x])[_0x13bd72(0x1ba)](_0x13bd72(0x23e))[_0x13bd72(0x2b6)](function(_0x528886) {
        const _0x23fef5 = _0x13bd72;
        if ($(this)['val']() !== '') {
            let _0x551d0b = $(this)[_0x23fef5(0x200)]()['length'],
                _0x58c316 = $(this)[_0x23fef5(0x284)](_0x23fef5(0x173)) ? $(this)['data'](_0x23fef5(0x173)) : 0x0;
            if ($(this)[_0x23fef5(0x284)]('phone-autoformat')) {
                var _0x531e1f = phoneAutoFormat($(this)[_0x23fef5(0x284)](_0x23fef5(0x2ac)));
                $(this)[_0x23fef5(0x200)](_0x531e1f($(this)[_0x23fef5(0x200)]()));
            }
            phoneValidation($(this)[_0x23fef5(0x200)](), _0x551d0b, _0x58c316) ? empReqTel = empReqTel['filter'](_0x2f5aee => _0x2f5aee[_0x23fef5(0x259)] !== _0x528886) : empReqTel[_0x23fef5(0x241)]({ 'input': _0x528886 });
        } else !empReqTel[_0x23fef5(0x1ba)](_0x4d1c71 => _0x4d1c71['input'] === _0x528886) && empReqTel[_0x23fef5(0x241)]({ 'input': _0x528886 }), unfilledArr[_0x23fef5(0x241)]({ 'input': $(this)[_0x23fef5(0x2c3)](_0x23fef5(0x27f)) });
        empReqTel[_0x23fef5(0x1f3)] === 0x0 ? telFilled = !![] : telFilled = ![];
    }), $(steps[x])[_0x13bd72(0x1ba)](':input[type=\x22file\x22][required]')[_0x13bd72(0x2b6)](function(_0x3ae749) {
        const _0x3ae59f = _0x13bd72;
        $(this)[_0x3ae59f(0x200)]() !== '' ? empReqFile = empReqFile['filter'](_0x21c7e4 => _0x21c7e4[_0x3ae59f(0x259)] !== _0x3ae749) : (!empReqFile['find'](_0x352dda => _0x352dda[_0x3ae59f(0x259)] === _0x3ae749) && empReqFile[_0x3ae59f(0x241)]({ 'input': _0x3ae749 }), unfilledArr[_0x3ae59f(0x241)]({ 'input': $(this)['attr'](_0x3ae59f(0x27f)) })), empReqFile[_0x3ae59f(0x1f3)] === 0x0 ? fileFilled = !![] : fileFilled = ![];
    }), $(steps[x])['find'](_0x13bd72(0x1c3))['each'](function(_0x5a33cf) {
        const _0x59b998 = _0x13bd72;
        let _0x256b02 = $(this)[_0x59b998(0x200)]()[_0x59b998(0x1f3)],
            _0xb8fc1c = $(this)[_0x59b998(0x284)](_0x59b998(0x173)) ? $(this)[_0x59b998(0x284)](_0x59b998(0x173)) : 0x0;
        $(this)['val']() !== '' && _0x256b02 >= _0xb8fc1c ? empReqNum = empReqNum[_0x59b998(0x216)](_0x48489a => _0x48489a[_0x59b998(0x259)] !== _0x5a33cf) : (!empReqNum['find'](_0x3a8816 => _0x3a8816['input'] === _0x5a33cf) && empReqNum['push']({ 'input': _0x5a33cf }), unfilledArr['push']({ 'input': $(this)[_0x59b998(0x2c3)](_0x59b998(0x27f)) })), empReqNum[_0x59b998(0x1f3)] === 0x0 ? numFilled = !![] : numFilled = ![];
    }), $(steps[x])['find'](_0x13bd72(0x21b))[_0x13bd72(0x2b6)](function(_0x3c3513) {
        const _0x182cbd = _0x13bd72;
        let _0x23445d = $(this)['val']();
        _0x23445d === '' && (_0x23445d = null), _0x23445d != null ? empReqSelect = empReqSelect[_0x182cbd(0x216)](_0x12475f => _0x12475f['input'] !== _0x3c3513) : (!empReqSelect[_0x182cbd(0x1ba)](_0x5859ee => _0x5859ee[_0x182cbd(0x259)] === _0x3c3513) && empReqSelect['push']({ 'input': _0x3c3513 }), unfilledArr[_0x182cbd(0x241)]({ 'input': $(this)['attr'](_0x182cbd(0x27f)) })), empReqSelect[_0x182cbd(0x1f3)] === 0x0 ? selectFilled = !![] : selectFilled = ![];
    }), $(steps[x])['find']('textarea[required]')['each'](function(_0x3a4add) {
        const _0x1ef592 = _0x13bd72;
        let _0x1a0269 = $(this)[_0x1ef592(0x200)]()[_0x1ef592(0x1f3)],
            _0x550c33 = $(this)[_0x1ef592(0x284)](_0x1ef592(0x173)) ? $(this)[_0x1ef592(0x284)](_0x1ef592(0x173)) : 0x0;
        $(this)[_0x1ef592(0x200)]() !== '' && _0x1a0269 >= _0x550c33 ? empReqTextarea = empReqTextarea[_0x1ef592(0x216)](_0xbac4d3 => _0xbac4d3['input'] !== _0x3a4add) : (!empReqTextarea['find'](_0x646a16 => _0x646a16['input'] === _0x3a4add) && empReqTextarea['push']({ 'input': _0x3a4add }), unfilledArr[_0x1ef592(0x241)]({ 'input': $(this)[_0x1ef592(0x2c3)](_0x1ef592(0x27f)) })), empReqTextarea[_0x1ef592(0x1f3)] === 0x0 ? textareaFilled = !![] : textareaFilled = ![];
    }), $(steps[x])[_0x13bd72(0x1ba)](_0x13bd72(0x25c))[_0x13bd72(0x2b6)](function() {
        const _0x3e60e2 = _0x13bd72;
        $(this)['val']() !== '' ? validateEmail($(this)[_0x3e60e2(0x200)](), $(this)[_0x3e60e2(0x284)](_0x3e60e2(0x274)), $(this)['attr'](_0x3e60e2(0x27f))) : (emailFilled = ![], unfilledArr['push']({ 'input': $(this)[_0x3e60e2(0x2c3)]('name') }));
    });
    else {
        if ($(steps[x])[_0x13bd72(0x284)](_0x13bd72(0x23f))) answer = $(steps[x])[_0x13bd72(0x1ba)](_0x13bd72(0x2e1))['data'](_0x13bd72(0x27a)), selections = selections[_0x13bd72(0x216)](_0x5df90f => _0x5df90f[_0x13bd72(0x2c4)] !== x), selections[_0x13bd72(0x241)]({ 'step': x, 'selected': answer }), next = !![], back = ![];
        else $(steps[x])[_0x13bd72(0x1ba)](_0x13bd72(0x28d))[_0x13bd72(0x284)](_0x13bd72(0x23f)) && (answer = $(steps[x])[_0x13bd72(0x1ba)]('.active-answer-card')['data']('go-to'), selections = selections[_0x13bd72(0x216)](_0x5d697c => _0x5d697c[_0x13bd72(0x2c4)] !== x), selections[_0x13bd72(0x241)]({ 'step': x, 'selected': answer }), next = !![], back = ![]);
        $(steps[x])['find'](_0x13bd72(0x28d))['find'](':input')['is'](_0x13bd72(0x176)) && (checkCount === '*' || checkCount > $(steps[x])[_0x13bd72(0x1ba)](':input[type=\x22checkbox\x22]')[_0x13bd72(0x1f3)] ? $(steps[x])[_0x13bd72(0x1ba)](_0x13bd72(0x1e5))['each'](function() {
            const _0x14fb96 = _0x13bd72;
            $(this)['is'](':checked') ? $(steps[x])[_0x14fb96(0x1ba)](_0x14fb96(0x1b4))[_0x14fb96(0x1f3)] < 0x1 && (skipTo = undefined, $(this)[_0x14fb96(0x215)](_0x14fb96(0x2c6))[_0x14fb96(0x284)](_0x14fb96(0x271)) && (skipTo = $(this)[_0x14fb96(0x215)]('[data-skip-to]')[_0x14fb96(0x284)](_0x14fb96(0x271))), $(this)[_0x14fb96(0x215)](_0x14fb96(0x2e1))['attr'](_0x14fb96(0x19c)) && (answer = $(this)[_0x14fb96(0x215)](_0x14fb96(0x2e1))[_0x14fb96(0x2c3)]('data-go-to'), selections = selections[_0x14fb96(0x216)](_0x19c809 => _0x19c809[_0x14fb96(0x2c4)] !== x), selections[_0x14fb96(0x241)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x14fb96(0x216)](_0x4fab92 => _0x4fab92[_0x14fb96(0x2c4)] !== skipTo - 0x2), selections[_0x14fb96(0x241)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x14fb96(0x19a)](_0x34b965 => _0x34b965[_0x14fb96(0x2c4)] === x), selections[objIndex]['skipTo'] = parseInt(skipTo) - 0x1, selections[objIndex][_0x14fb96(0x2d6)] = x)), checkboxFilled = !![], $(steps[x])[_0x14fb96(0x1ba)](_0x14fb96(0x197))[_0x14fb96(0x1f3)] >= $(steps[x])['find'](_0x14fb96(0x2e2))[_0x14fb96(0x1f3)] && resetInputErrorMessage($(steps[x])[_0x14fb96(0x1ba)](_0x14fb96(0x1e5))['attr']('name'))) : (checkboxFilled = ![], unfilledArr[_0x14fb96(0x241)]({ 'input': $(this)[_0x14fb96(0x2c3)](_0x14fb96(0x27f)) }));
        }) : $(steps[x])[_0x13bd72(0x1ba)](_0x13bd72(0x28d))['find'](':input[type=\x22checkbox\x22]:checked')['length'] >= checkCount ? ($(steps[x])[_0x13bd72(0x1ba)](_0x13bd72(0x28d))[_0x13bd72(0x1ba)](_0x13bd72(0x1e5))[_0x13bd72(0x215)](_0x13bd72(0x2e1))[_0x13bd72(0x2c3)]('data-go-to') && (skipTo = undefined, $(steps[x])[_0x13bd72(0x1ba)]('.active-answer-card')['find'](_0x13bd72(0x1e5))[_0x13bd72(0x215)](_0x13bd72(0x2c6))[_0x13bd72(0x2c3)](_0x13bd72(0x293)) && (skipTo = $(steps[x])[_0x13bd72(0x1ba)](_0x13bd72(0x28d))[_0x13bd72(0x1ba)](_0x13bd72(0x2bc))['parents'](_0x13bd72(0x2c6))[_0x13bd72(0x2c3)](_0x13bd72(0x293))), answer = $(steps[x])[_0x13bd72(0x1ba)]('.active-answer-card')['find'](':input[type=\x22checkbox\x22]')[_0x13bd72(0x215)](_0x13bd72(0x2e1))[_0x13bd72(0x2c3)]('data-go-to'), selections = selections['filter'](_0x51f4a6 => _0x51f4a6[_0x13bd72(0x2c4)] !== x), selections[_0x13bd72(0x241)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x13bd72(0x216)](_0x23a493 => _0x23a493[_0x13bd72(0x2c4)] !== skipTo - 0x2), selections[_0x13bd72(0x241)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x13bd72(0x19a)](_0x57457c => _0x57457c[_0x13bd72(0x2c4)] === x), selections[objIndex][_0x13bd72(0x265)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x13bd72(0x2d6)] = x)), checkboxFilled = !![], $(steps[x])['find'](_0x13bd72(0x197))[_0x13bd72(0x1f3)] >= $(steps[x])[_0x13bd72(0x1ba)](_0x13bd72(0x2e2))[_0x13bd72(0x1f3)] && resetInputErrorMessage($(steps[x])['find'](_0x13bd72(0x1e5))[_0x13bd72(0x2c3)](_0x13bd72(0x27f)))) : (checkboxFilled = ![], $(steps[x])[_0x13bd72(0x1ba)](':input[type=\x22checkbox\x22][required]')[_0x13bd72(0x2b6)](function() {
            const _0x1b8693 = _0x13bd72;
            $(this)[_0x1b8693(0x286)](':checked') && unfilledArr[_0x1b8693(0x241)]({ 'input': $(this)[_0x1b8693(0x2c3)](_0x1b8693(0x27f)) });
        }))), $(steps[x])[_0x13bd72(0x1ba)]('.active-answer-card')[_0x13bd72(0x1ba)]('input:radio[required]')[_0x13bd72(0x2b6)](function(_0x31526b) {
            const _0x5e301a = _0x13bd72;
            var _0xb2a7c8 = $(this)[_0x5e301a(0x2c3)](_0x5e301a(0x27f));
            $(_0x5e301a(0x20b) + _0xb2a7c8 + _0x5e301a(0x267))[_0x5e301a(0x1f3)] == 0x0 ? (!empReqRadio[_0x5e301a(0x1ba)](_0x712ff8 => _0x712ff8['input'] === _0x31526b) && empReqRadio['push']({ 'input': _0x31526b }), unfilledArr[_0x5e301a(0x241)]({ 'input': $(this)[_0x5e301a(0x2c3)]('name') })) : empReqRadio = empReqRadio['filter'](_0x42ba0f => _0x42ba0f['input'] !== _0x31526b), empReqRadio[_0x5e301a(0x1f3)] === 0x0 ? radioFilled = !![] : radioFilled = ![];
        }), $(steps[x])[_0x13bd72(0x1ba)](_0x13bd72(0x28d))['find'](_0x13bd72(0x2e6))[_0x13bd72(0x2b6)](function(_0x27faba) {
            const _0x4442b7 = _0x13bd72;
            let _0x23e66a = $(this)[_0x4442b7(0x200)]()[_0x4442b7(0x1f3)],
                _0x1b1ea4 = $(this)['data'](_0x4442b7(0x173)) ? $(this)['data']('min-character') : 0x0;
            $(this)[_0x4442b7(0x200)]() !== '' && _0x23e66a >= _0x1b1ea4 ? empReqInput = empReqInput['filter'](_0x1b08a6 => _0x1b08a6['input'] !== _0x27faba) : (!empReqInput[_0x4442b7(0x1ba)](_0x3b046b => _0x3b046b[_0x4442b7(0x259)] === _0x27faba) && empReqInput[_0x4442b7(0x241)]({ 'input': _0x27faba }), unfilledArr[_0x4442b7(0x241)]({ 'input': $(this)[_0x4442b7(0x2c3)]('name') })), empReqInput[_0x4442b7(0x1f3)] === 0x0 ? inputFilled = !![] : inputFilled = ![];
        }), $(steps[x])[_0x13bd72(0x1ba)](_0x13bd72(0x28d))['find'](_0x13bd72(0x17d))[_0x13bd72(0x2b6)](function(_0x5476c6) {
            const _0x389857 = _0x13bd72;
            skipTo = undefined, $(this)['parents'](_0x389857(0x2c6))[_0x389857(0x284)]('skip-to') !== '' && (skipTo = $(this)[_0x389857(0x215)](_0x389857(0x2c6))[_0x389857(0x284)](_0x389857(0x271))), $(this)[_0x389857(0x215)](_0x389857(0x2e1))[_0x389857(0x2c3)](_0x389857(0x19c)) && (answer = $(this)[_0x389857(0x215)]('[data-go-to]')[_0x389857(0x2c3)](_0x389857(0x19c)), selections = selections['filter'](_0x427767 => _0x427767[_0x389857(0x2c4)] !== x), selections[_0x389857(0x241)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x389857(0x216)](_0x4a5192 => _0x4a5192[_0x389857(0x2c4)] !== skipTo - 0x2), selections[_0x389857(0x241)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x389857(0x19a)](_0x353c0c => _0x353c0c['step'] === x), selections[objIndex][_0x389857(0x265)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x389857(0x2d6)] = x));
        }), $(steps[x])['find']('.active-answer-card')[_0x13bd72(0x1ba)](_0x13bd72(0x208))[_0x13bd72(0x2b6)](function(_0x308361) {
            const _0x564108 = _0x13bd72;
            let _0x31e7da = $(this)['val']()['length'],
                _0x7ac922 = $(this)['data'](_0x564108(0x173)) ? $(this)[_0x564108(0x284)](_0x564108(0x173)) : 0x0;
            $(this)[_0x564108(0x200)]() !== '' && _0x31e7da >= _0x7ac922 ? empReqPassword = empReqPassword[_0x564108(0x216)](_0xe78bc7 => _0xe78bc7['input'] !== _0x308361) : (!empReqPassword[_0x564108(0x1ba)](_0xd1b3c1 => _0xd1b3c1[_0x564108(0x259)] === _0x308361) && empReqPassword[_0x564108(0x241)]({ 'input': _0x308361 }), unfilledArr[_0x564108(0x241)]({ 'input': $(this)[_0x564108(0x2c3)](_0x564108(0x27f)) })), empReqPassword[_0x564108(0x1f3)] === 0x0 ? passwordFilled = !![] : passwordFilled = ![];
        }), $(steps[x])['find']('.active-answer-card')[_0x13bd72(0x1ba)](':input[type=\x22password\x22]')[_0x13bd72(0x2b6)](function(_0x24d511) {
            const _0x513296 = _0x13bd72;
            skipTo = undefined, $(this)[_0x513296(0x215)](_0x513296(0x2c6))[_0x513296(0x284)](_0x513296(0x271)) !== '' && (skipTo = $(this)[_0x513296(0x215)](_0x513296(0x2c6))[_0x513296(0x284)](_0x513296(0x271))), $(this)[_0x513296(0x215)](_0x513296(0x2e1))[_0x513296(0x2c3)]('data-go-to') && (answer = $(this)['parents'](_0x513296(0x2e1))[_0x513296(0x2c3)]('data-go-to'), selections = selections[_0x513296(0x216)](_0x262d5e => _0x262d5e[_0x513296(0x2c4)] !== x), selections[_0x513296(0x241)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections['filter'](_0x6aeadd => _0x6aeadd[_0x513296(0x2c4)] !== skipTo - 0x2), selections[_0x513296(0x241)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections['findIndex'](_0x4d748c => _0x4d748c['step'] === x), selections[objIndex]['skipTo'] = parseInt(skipTo) - 0x1, selections[objIndex][_0x513296(0x2d6)] = x));
        }), $(steps[x])['find']('.active-answer-card')['find'](':input[type=\x22url\x22][required]')['each'](function(_0x2fd391) {
            const _0x349c4c = _0x13bd72;
            let _0x1d0cc1 = $(this)[_0x349c4c(0x200)]()[_0x349c4c(0x1f3)],
                _0x187da1 = $(this)[_0x349c4c(0x284)](_0x349c4c(0x173)) ? $(this)['data']('min-character') : 0x0;
            $(this)[_0x349c4c(0x200)]() !== '' && _0x1d0cc1 >= _0x187da1 ? empReqUrl = empReqUrl[_0x349c4c(0x216)](_0x2ad4b2 => _0x2ad4b2[_0x349c4c(0x259)] !== _0x2fd391) : (!empReqUrl[_0x349c4c(0x1ba)](_0x3408d8 => _0x3408d8['input'] === _0x2fd391) && empReqUrl[_0x349c4c(0x241)]({ 'input': _0x2fd391 }), unfilledArr[_0x349c4c(0x241)]({ 'input': $(this)[_0x349c4c(0x2c3)](_0x349c4c(0x27f)) })), empReqUrl[_0x349c4c(0x1f3)] === 0x0 && validateURL($(this)[_0x349c4c(0x200)]()) ? urlFilled = !![] : urlFilled = ![];
        }), $(steps[x])[_0x13bd72(0x1ba)](_0x13bd72(0x28d))[_0x13bd72(0x1ba)](_0x13bd72(0x2d8))[_0x13bd72(0x2b6)](function(_0x218ec9) {
            const _0x3e20ce = _0x13bd72;
            skipTo = undefined, $(this)[_0x3e20ce(0x215)](_0x3e20ce(0x2c6))['data'](_0x3e20ce(0x271)) !== '' && (skipTo = $(this)[_0x3e20ce(0x215)](_0x3e20ce(0x2c6))[_0x3e20ce(0x284)](_0x3e20ce(0x271))), $(this)['parents'](_0x3e20ce(0x2e1))[_0x3e20ce(0x2c3)](_0x3e20ce(0x19c)) && (answer = $(this)[_0x3e20ce(0x215)]('[data-go-to]')['attr'](_0x3e20ce(0x19c)), selections = selections[_0x3e20ce(0x216)](_0x38c9de => _0x38c9de[_0x3e20ce(0x2c4)] !== x), selections[_0x3e20ce(0x241)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x3e20ce(0x216)](_0x1212ec => _0x1212ec[_0x3e20ce(0x2c4)] !== skipTo - 0x2), selections[_0x3e20ce(0x241)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x3e20ce(0x19a)](_0x4b73a7 => _0x4b73a7['step'] === x), selections[objIndex][_0x3e20ce(0x265)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x3e20ce(0x2d6)] = x));
        }), $(steps[x])[_0x13bd72(0x1ba)](_0x13bd72(0x28d))[_0x13bd72(0x1ba)](_0x13bd72(0x2cc))[_0x13bd72(0x2b6)](function(_0x2c1702) {
            const _0x32c16e = _0x13bd72;
            $(this)[_0x32c16e(0x200)]() !== '' ? empReqDate = empReqDate[_0x32c16e(0x216)](_0x11c57f => _0x11c57f[_0x32c16e(0x259)] !== _0x2c1702) : (!empReqDate['find'](_0x13b4ea => _0x13b4ea[_0x32c16e(0x259)] === _0x2c1702) && empReqDate[_0x32c16e(0x241)]({ 'input': _0x2c1702 }), unfilledArr[_0x32c16e(0x241)]({ 'input': $(this)['attr'](_0x32c16e(0x27f)) })), empReqDate[_0x32c16e(0x1f3)] === 0x0 ? dateFilled = !![] : dateFilled = ![];
        }), $(steps[x])[_0x13bd72(0x1ba)]('.active-answer-card')[_0x13bd72(0x1ba)](_0x13bd72(0x2af))['each'](function(_0x75189e) {
            const _0xe589f1 = _0x13bd72;
            skipTo = undefined, $(this)[_0xe589f1(0x215)]('[data-skip-to]')[_0xe589f1(0x284)](_0xe589f1(0x271)) !== '' && (skipTo = $(this)['parents'](_0xe589f1(0x2c6))[_0xe589f1(0x284)](_0xe589f1(0x271))), $(this)[_0xe589f1(0x215)](_0xe589f1(0x2e1))[_0xe589f1(0x2c3)](_0xe589f1(0x19c)) && (answer = $(this)[_0xe589f1(0x215)](_0xe589f1(0x2e1))[_0xe589f1(0x2c3)](_0xe589f1(0x19c)), selections = selections[_0xe589f1(0x216)](_0x11386e => _0x11386e[_0xe589f1(0x2c4)] !== x), selections[_0xe589f1(0x241)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections['filter'](_0x4885a3 => _0x4885a3[_0xe589f1(0x2c4)] !== skipTo - 0x2), selections[_0xe589f1(0x241)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections['findIndex'](_0x3ffcbc => _0x3ffcbc[_0xe589f1(0x2c4)] === x), selections[objIndex][_0xe589f1(0x265)] = parseInt(skipTo) - 0x1, selections[objIndex][_0xe589f1(0x2d6)] = x));
        }), $(steps[x])[_0x13bd72(0x1ba)](_0x13bd72(0x28d))[_0x13bd72(0x1ba)](':input[type=\x22time\x22][required]')['each'](function(_0x8aace0) {
            const _0x1a8097 = _0x13bd72;
            $(this)[_0x1a8097(0x200)]() !== '' ? empReqTime = empReqTime['filter'](_0x33c838 => _0x33c838[_0x1a8097(0x259)] !== _0x8aace0) : (!empReqTime[_0x1a8097(0x1ba)](_0x5e1c8e => _0x5e1c8e[_0x1a8097(0x259)] === _0x8aace0) && empReqTime['push']({ 'input': _0x8aace0 }), unfilledArr['push']({ 'input': $(this)[_0x1a8097(0x2c3)](_0x1a8097(0x27f)) })), empReqTime[_0x1a8097(0x1f3)] === 0x0 ? timeFilled = !![] : timeFilled = ![];
        }), $(steps[x])[_0x13bd72(0x1ba)](_0x13bd72(0x28d))['find'](_0x13bd72(0x1f2))['each'](function(_0x19d2ca) {
            const _0x2cb0fb = _0x13bd72;
            skipTo = undefined, $(this)[_0x2cb0fb(0x215)](_0x2cb0fb(0x2c6))[_0x2cb0fb(0x284)](_0x2cb0fb(0x271)) !== '' && (skipTo = $(this)[_0x2cb0fb(0x215)](_0x2cb0fb(0x2c6))['data'](_0x2cb0fb(0x271))), $(this)['parents'](_0x2cb0fb(0x2e1))[_0x2cb0fb(0x2c3)](_0x2cb0fb(0x19c)) && (answer = $(this)[_0x2cb0fb(0x215)](_0x2cb0fb(0x2e1))[_0x2cb0fb(0x2c3)]('data-go-to'), selections = selections[_0x2cb0fb(0x216)](_0x31d883 => _0x31d883[_0x2cb0fb(0x2c4)] !== x), selections['push']({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x2cb0fb(0x216)](_0xd86532 => _0xd86532[_0x2cb0fb(0x2c4)] !== skipTo - 0x2), selections[_0x2cb0fb(0x241)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x2cb0fb(0x19a)](_0x2825e7 => _0x2825e7['step'] === x), selections[objIndex]['skipTo'] = parseInt(skipTo) - 0x1, selections[objIndex][_0x2cb0fb(0x2d6)] = x));
        }), $(steps[x])[_0x13bd72(0x1ba)](_0x13bd72(0x28d))[_0x13bd72(0x1ba)](_0x13bd72(0x1c3))[_0x13bd72(0x2b6)](function(_0x42c253) {
            const _0x59bd21 = _0x13bd72;
            let _0x54a59e = $(this)[_0x59bd21(0x200)]()['length'],
                _0x1f95ac = $(this)[_0x59bd21(0x284)](_0x59bd21(0x173)) ? $(this)[_0x59bd21(0x284)]('min-character') : 0x0;
            $(this)[_0x59bd21(0x200)]() !== '' && _0x54a59e >= _0x1f95ac ? empReqNum = empReqNum[_0x59bd21(0x216)](_0x29c713 => _0x29c713[_0x59bd21(0x259)] !== _0x42c253) : (!empReqNum[_0x59bd21(0x1ba)](_0x3118b2 => _0x3118b2[_0x59bd21(0x259)] === _0x42c253) && empReqNum[_0x59bd21(0x241)]({ 'input': _0x42c253 }), unfilledArr[_0x59bd21(0x241)]({ 'input': $(this)[_0x59bd21(0x2c3)](_0x59bd21(0x27f)) })), empReqNum[_0x59bd21(0x1f3)] === 0x0 ? numFilled = !![] : numFilled = ![];
        }), $(steps[x])[_0x13bd72(0x1ba)](_0x13bd72(0x28d))[_0x13bd72(0x1ba)](_0x13bd72(0x1b2))[_0x13bd72(0x2b6)](function(_0x2a5f68) {
            const _0x5aaf00 = _0x13bd72;
            skipTo = undefined, $(this)[_0x5aaf00(0x215)]('[data-skip-to]')[_0x5aaf00(0x284)](_0x5aaf00(0x271)) !== '' && (skipTo = $(this)[_0x5aaf00(0x215)](_0x5aaf00(0x2c6))[_0x5aaf00(0x284)](_0x5aaf00(0x271))), $(this)[_0x5aaf00(0x215)](_0x5aaf00(0x2e1))[_0x5aaf00(0x2c3)](_0x5aaf00(0x19c)) && (answer = $(this)[_0x5aaf00(0x215)](_0x5aaf00(0x2e1))[_0x5aaf00(0x2c3)](_0x5aaf00(0x19c)), selections = selections[_0x5aaf00(0x216)](_0x39605b => _0x39605b[_0x5aaf00(0x2c4)] !== x), selections[_0x5aaf00(0x241)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x5aaf00(0x216)](_0x13f256 => _0x13f256[_0x5aaf00(0x2c4)] !== skipTo - 0x2), selections['push']({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections['findIndex'](_0x7db481 => _0x7db481[_0x5aaf00(0x2c4)] === x), selections[objIndex][_0x5aaf00(0x265)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x5aaf00(0x2d6)] = x));
        }), $(steps[x])[_0x13bd72(0x1ba)](_0x13bd72(0x28d))[_0x13bd72(0x1ba)](_0x13bd72(0x23e))[_0x13bd72(0x2b6)](function(_0x577c89) {
            const _0x101033 = _0x13bd72;
            if ($(this)[_0x101033(0x200)]() !== '') {
                let _0x423faf = $(this)[_0x101033(0x200)]()[_0x101033(0x1f3)],
                    _0x52f40d = $(this)['data'](_0x101033(0x173)) ? $(this)[_0x101033(0x284)](_0x101033(0x173)) : 0x0;
                if ($(this)[_0x101033(0x284)]('phone-autoformat')) {
                    var _0x1115a1 = phoneAutoFormat($(this)[_0x101033(0x284)](_0x101033(0x2ac)));
                    $(this)[_0x101033(0x200)](_0x1115a1($(this)[_0x101033(0x200)]()));
                }
                phoneValidation($(this)[_0x101033(0x200)](), _0x423faf, _0x52f40d) ? empReqTel = empReqTel[_0x101033(0x216)](_0x7232d5 => _0x7232d5[_0x101033(0x259)] !== _0x577c89) : empReqTel[_0x101033(0x241)]({ 'input': _0x577c89 });
            } else !empReqTel['find'](_0x2d3644 => _0x2d3644['input'] === _0x577c89) && empReqTel[_0x101033(0x241)]({ 'input': _0x577c89 }), unfilledArr[_0x101033(0x241)]({ 'input': $(this)[_0x101033(0x2c3)](_0x101033(0x27f)) });
            empReqTel[_0x101033(0x1f3)] === 0x0 ? telFilled = !![] : telFilled = ![];
        }), $(steps[x])['find']('.active-answer-card')[_0x13bd72(0x1ba)](_0x13bd72(0x1f9))[_0x13bd72(0x2b6)](function(_0x4f2e27) {
            const _0x47a44a = _0x13bd72;
            skipTo = undefined, $(this)[_0x47a44a(0x215)](_0x47a44a(0x2c6))[_0x47a44a(0x284)](_0x47a44a(0x271)) !== '' && (skipTo = $(this)[_0x47a44a(0x215)](_0x47a44a(0x2c6))['data'](_0x47a44a(0x271))), $(this)[_0x47a44a(0x215)](_0x47a44a(0x2e1))[_0x47a44a(0x2c3)](_0x47a44a(0x19c)) && (answer = $(this)[_0x47a44a(0x215)](_0x47a44a(0x2e1))[_0x47a44a(0x2c3)](_0x47a44a(0x19c)), selections = selections[_0x47a44a(0x216)](_0x294765 => _0x294765[_0x47a44a(0x2c4)] !== x), selections['push']({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x47a44a(0x216)](_0x150a30 => _0x150a30[_0x47a44a(0x2c4)] !== skipTo - 0x2), selections[_0x47a44a(0x241)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x47a44a(0x19a)](_0x367f92 => _0x367f92['step'] === x), selections[objIndex][_0x47a44a(0x265)] = parseInt(skipTo) - 0x1, selections[objIndex]['backTo'] = x));
        }), $(steps[x])[_0x13bd72(0x1ba)](_0x13bd72(0x28d))[_0x13bd72(0x1ba)](_0x13bd72(0x1d2))[_0x13bd72(0x2b6)](function(_0x3f7a0a) {
            const _0x156edf = _0x13bd72;
            $(this)['val']() !== '' ? empReqFile = empReqFile[_0x156edf(0x216)](_0x5f34d3 => _0x5f34d3[_0x156edf(0x259)] !== _0x3f7a0a) : (!empReqFile['find'](_0x199f6d => _0x199f6d[_0x156edf(0x259)] === _0x3f7a0a) && empReqFile[_0x156edf(0x241)]({ 'input': _0x3f7a0a }), unfilledArr[_0x156edf(0x241)]({ 'input': $(this)['attr'](_0x156edf(0x27f)) })), empReqFile['length'] === 0x0 ? fileFilled = !![] : fileFilled = ![];
        }), $(steps[x])[_0x13bd72(0x1ba)](_0x13bd72(0x28d))[_0x13bd72(0x1ba)](_0x13bd72(0x190))[_0x13bd72(0x2b6)](function(_0x2756a0) {
            const _0x34011b = _0x13bd72;
            skipTo = undefined, $(this)['parents']('[data-skip-to]')[_0x34011b(0x284)]('skip-to') !== '' && (skipTo = $(this)['parents'](_0x34011b(0x2c6))['data'](_0x34011b(0x271))), $(this)[_0x34011b(0x215)]('[data-go-to]')[_0x34011b(0x2c3)](_0x34011b(0x19c)) && (answer = $(this)[_0x34011b(0x215)](_0x34011b(0x2e1))[_0x34011b(0x2c3)](_0x34011b(0x19c)), selections = selections[_0x34011b(0x216)](_0x39f7a6 => _0x39f7a6[_0x34011b(0x2c4)] !== x), selections[_0x34011b(0x241)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x34011b(0x216)](_0x16d474 => _0x16d474[_0x34011b(0x2c4)] !== skipTo - 0x2), selections[_0x34011b(0x241)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections['findIndex'](_0xb887c2 => _0xb887c2[_0x34011b(0x2c4)] === x), selections[objIndex]['skipTo'] = parseInt(skipTo) - 0x1, selections[objIndex]['backTo'] = x));
        }), $(steps[x])[_0x13bd72(0x1ba)](_0x13bd72(0x28d))[_0x13bd72(0x1ba)](_0x13bd72(0x21b))[_0x13bd72(0x2b6)](function(_0x3f6c12) {
            const _0x1a7487 = _0x13bd72;
            $(this)[_0x1a7487(0x200)]() !== null && $(this)[_0x1a7487(0x200)]() !== '' ? empReqSelect = empReqSelect['filter'](_0x543881 => _0x543881['input'] !== _0x3f6c12) : (!empReqSelect['find'](_0x325b42 => _0x325b42['input'] === _0x3f6c12) && empReqSelect[_0x1a7487(0x241)]({ 'input': _0x3f6c12 }), unfilledArr[_0x1a7487(0x241)]({ 'input': $(this)[_0x1a7487(0x2c3)](_0x1a7487(0x27f)) })), empReqSelect['length'] === 0x0 ? selectFilled = !![] : selectFilled = ![];
        }), $(steps[x])['find'](_0x13bd72(0x28d))['find']('select')[_0x13bd72(0x2b6)](function(_0x14b94f) {
            const _0x40f38c = _0x13bd72;
            skipTo = undefined, $(this)['parents'](_0x40f38c(0x2c6))[_0x40f38c(0x284)](_0x40f38c(0x271)) !== '' && (skipTo = $(this)['parents'](_0x40f38c(0x2c6))['data'](_0x40f38c(0x271))), $(this)[_0x40f38c(0x215)](_0x40f38c(0x2e1))[_0x40f38c(0x2c3)](_0x40f38c(0x19c)) && (answer = $(this)[_0x40f38c(0x215)]('[data-go-to]')[_0x40f38c(0x2c3)](_0x40f38c(0x19c)), selections = selections[_0x40f38c(0x216)](_0x278635 => _0x278635['step'] !== x), selections[_0x40f38c(0x241)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x40f38c(0x216)](_0x55aafb => _0x55aafb[_0x40f38c(0x2c4)] !== skipTo - 0x2), selections[_0x40f38c(0x241)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x40f38c(0x19a)](_0x3ac0a3 => _0x3ac0a3[_0x40f38c(0x2c4)] === x), selections[objIndex][_0x40f38c(0x265)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x40f38c(0x2d6)] = x));
        }), $(steps[x])[_0x13bd72(0x1ba)]('.active-answer-card')[_0x13bd72(0x1ba)](_0x13bd72(0x233))[_0x13bd72(0x2b6)](function(_0x8e18a0) {
            const _0x3ba627 = _0x13bd72;
            let _0x53275e = $(this)[_0x3ba627(0x200)]()['length'],
                _0x81ca90 = $(this)[_0x3ba627(0x284)](_0x3ba627(0x173)) ? $(this)[_0x3ba627(0x284)](_0x3ba627(0x173)) : 0x0;
            $(this)[_0x3ba627(0x200)]() !== '' && _0x53275e >= _0x81ca90 ? empReqTextarea = empReqTextarea[_0x3ba627(0x216)](_0x296ae3 => _0x296ae3['input'] !== _0x8e18a0) : (!empReqTextarea[_0x3ba627(0x1ba)](_0x9359ca => _0x9359ca['input'] === _0x8e18a0) && empReqTextarea[_0x3ba627(0x241)]({ 'input': _0x8e18a0 }), unfilledArr[_0x3ba627(0x241)]({ 'input': $(this)[_0x3ba627(0x2c3)](_0x3ba627(0x27f)) })), empReqTextarea[_0x3ba627(0x1f3)] === 0x0 ? textareaFilled = !![] : textareaFilled = ![];
        }), $(steps[x])['find'](_0x13bd72(0x28d))[_0x13bd72(0x1ba)](_0x13bd72(0x188))['each'](function(_0x1120b8) {
            const _0x596dfe = _0x13bd72;
            skipTo = undefined, $(this)['parents'](_0x596dfe(0x2c6))['data'](_0x596dfe(0x271)) !== '' && (skipTo = $(this)[_0x596dfe(0x215)](_0x596dfe(0x2c6))['data']('skip-to')), $(this)['parents'](_0x596dfe(0x2e1))[_0x596dfe(0x2c3)](_0x596dfe(0x19c)) && (answer = $(this)[_0x596dfe(0x215)]('[data-go-to]')['attr'](_0x596dfe(0x19c)), selections = selections['filter'](_0xa228f0 => _0xa228f0[_0x596dfe(0x2c4)] !== x), selections[_0x596dfe(0x241)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x596dfe(0x216)](_0x147649 => _0x147649['step'] !== skipTo - 0x2), selections[_0x596dfe(0x241)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x596dfe(0x19a)](_0x69c6f4 => _0x69c6f4[_0x596dfe(0x2c4)] === x), selections[objIndex][_0x596dfe(0x265)] = parseInt(skipTo) - 0x1, selections[objIndex]['backTo'] = x));
        }), $(steps[x])[_0x13bd72(0x1ba)](_0x13bd72(0x28d))['find'](_0x13bd72(0x25c))[_0x13bd72(0x2b6)](function(_0x31930c) {
            const _0x358d29 = _0x13bd72;
            $(this)['val']() !== '' ? validateEmail($(this)[_0x358d29(0x200)](), $(this)[_0x358d29(0x284)](_0x358d29(0x274)), $(this)[_0x358d29(0x2c3)]('name')) : (emailFilled = ![], unfilledArr[_0x358d29(0x241)]({ 'input': $(this)[_0x358d29(0x2c3)](_0x358d29(0x27f)) }));
        }), $(steps[x])[_0x13bd72(0x1ba)](_0x13bd72(0x28d))[_0x13bd72(0x1ba)](_0x13bd72(0x2df))[_0x13bd72(0x2b6)](function(_0x15fc86) {
            const _0x32292a = _0x13bd72;
            skipTo = undefined, $(this)[_0x32292a(0x215)]('[data-skip-to]')['data'](_0x32292a(0x271)) !== '' && (skipTo = $(this)[_0x32292a(0x215)]('[data-skip-to]')['data'](_0x32292a(0x271))), $(this)['parents'](_0x32292a(0x2e1))[_0x32292a(0x2c3)](_0x32292a(0x19c)) && (answer = $(this)['parents']('[data-go-to]')[_0x32292a(0x2c3)]('data-go-to'), selections = selections[_0x32292a(0x216)](_0x42216d => _0x42216d['step'] !== x), console[_0x32292a(0x1ec)](_0x32292a(0x279), selections, x), selections['push']({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x32292a(0x216)](_0x4f3af3 => _0x4f3af3['step'] !== skipTo - 0x2), selections[_0x32292a(0x241)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x32292a(0x19a)](_0x392f26 => _0x392f26[_0x32292a(0x2c4)] === x), selections[objIndex]['skipTo'] = parseInt(skipTo) - 0x1, selections[objIndex][_0x32292a(0x2d6)] = x));
        });
    }
    $(steps[x])[_0x13bd72(0x1ba)](_0x13bd72(0x22c))['is'](_0x13bd72(0x1db)) && (selArr = [], $(steps)[_0x13bd72(0x1ba)]('[data-selected]:checked')['each'](function(_0xacfc7d, _0x439a42) {
        const _0x423c84 = _0x13bd72;
        selArr['push']({ 'selected': $(this)[_0x423c84(0x284)](_0x423c84(0x296)) });
    }), selString = [], selArr[_0x13bd72(0x2b9)](_0x211889 => selString[_0x13bd72(0x241)](_0x211889[_0x13bd72(0x296)])), $(steps[x])['find'](_0x13bd72(0x28d))[_0x13bd72(0x1ba)](':input[type=\x27radio\x27]:checked')[_0x13bd72(0x2b6)](function() {
        const _0x4d2488 = _0x13bd72;
        skipTo = undefined;
        if ($(this)[_0x4d2488(0x215)]('[data-skip-to]')[_0x4d2488(0x284)](_0x4d2488(0x271))) skipTo = $(this)[_0x4d2488(0x215)](_0x4d2488(0x2c6))[_0x4d2488(0x284)]('skip-to');
        else $(this)[_0x4d2488(0x284)](_0x4d2488(0x271)) && (skipTo = $(this)['data'](_0x4d2488(0x271)));
        selections = selections[_0x4d2488(0x216)](_0x4d4e68 => _0x4d4e68['step'] !== x);
        if ($(this)[_0x4d2488(0x284)](_0x4d2488(0x27a))) answer = $(this)[_0x4d2488(0x2c3)]('data-go-to'), selections[_0x4d2488(0x241)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x4d2488(0x216)](_0x356820 => _0x356820[_0x4d2488(0x2c4)] !== skipTo - 0x2), selections[_0x4d2488(0x241)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections['findIndex'](_0x254b3c => _0x254b3c['step'] === x), selections[objIndex][_0x4d2488(0x265)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x4d2488(0x2d6)] = x);
        else $(this)[_0x4d2488(0x215)](_0x4d2488(0x2e1))[_0x4d2488(0x284)](_0x4d2488(0x27a)) && (answer = $(this)[_0x4d2488(0x215)](_0x4d2488(0x2e1))[_0x4d2488(0x284)](_0x4d2488(0x27a)), selections[_0x4d2488(0x241)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x4d2488(0x216)](_0x34b46f => _0x34b46f['step'] !== skipTo - 0x2), selections[_0x4d2488(0x241)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x4d2488(0x19a)](_0x2af678 => _0x2af678[_0x4d2488(0x2c4)] === x), selections[objIndex]['skipTo'] = parseInt(skipTo) - 0x1, selections[objIndex][_0x4d2488(0x2d6)] = x));
    }), logicExtra ? ($(steps[x])[_0x13bd72(0x1ba)]('.active-answer-card')['find'](_0x13bd72(0x1ea))[_0x13bd72(0x284)](_0x13bd72(0x1fa)) === !![] || $(steps[x])['find']('[data-answer][data-radio-skip]:visible')[_0x13bd72(0x284)](_0x13bd72(0x1fa)) === !![]) && (skip && selections[_0x13bd72(0x216)](_0x25ee5a => _0x25ee5a[_0x13bd72(0x2c4)] === x)[_0x13bd72(0x1f3)] > 0x0 && (textareaLength === 0x0 && textInputLength === 0x0 && emailInputLength === 0x0 && checkboxInputLength === 0x0 && setTimeout(function() { next = !![], back = ![], nextStep(), selectionQuiz(); }, $(steps[x])[_0x13bd72(0x1ba)](_0x13bd72(0x203))[_0x13bd72(0x284)](_0x13bd72(0x23a))))) : $(steps[x])[_0x13bd72(0x1ba)]('[data-radio-skip]:visible')[_0x13bd72(0x284)](_0x13bd72(0x1fa)) === !![] && (skip && (textareaLength === 0x0 && textInputLength === 0x0 && emailInputLength === 0x0 && checkboxInputLength === 0x0 && setTimeout(function() { next = !![], back = ![], nextStep(), selectionQuiz(); }, $(steps[x])['find'](_0x13bd72(0x203))[_0x13bd72(0x284)](_0x13bd72(0x23a)))))), inputFilled && fileFilled && numFilled && checkboxFilled && telFilled && radioFilled && emailFilled && domainAllowed && selectFilled && textareaFilled && passwordFilled && urlFilled ? enableBtn() : disableBtn(), andLogic(), cloneRemove(), cloneRemoveInput();
}

function _0x46cd(_0x46ac59, _0x5371ab) { const _0x9dddc3 = _0x9ddd(); return _0x46cd = function(_0x46cdb4, _0x221f41) { _0x46cdb4 = _0x46cdb4 - 0x16e; let _0x556a05 = _0x9dddc3[_0x46cdb4]; return _0x556a05; }, _0x46cd(_0x46ac59, _0x5371ab); }

function displayErrorMessage() {
    const _0x4084b6 = _0x52d52a;
    $(_0x4084b6(0x1ad))[_0x4084b6(0x218)](), unfilledArr['length'] > 0x0 && unfilledArr[_0x4084b6(0x2b9)](function(_0x188b67) {
        const _0x52d7bd = _0x4084b6;
        $('input[name=\x22' + _0x188b67[_0x52d7bd(0x259)] + '\x22]')[_0x52d7bd(0x2d7)](_0x52d7bd(0x1ad))[_0x52d7bd(0x20f)](), $(_0x52d7bd(0x1f8) + _0x188b67[_0x52d7bd(0x259)] + '\x22]')[_0x52d7bd(0x215)]()['children'](_0x52d7bd(0x1ad))['fadeIn'](), $(_0x52d7bd(0x256) + _0x188b67[_0x52d7bd(0x259)] + '\x22]')[_0x52d7bd(0x2d7)](_0x52d7bd(0x1ad))[_0x52d7bd(0x20f)](), $(_0x52d7bd(0x214) + _0x188b67[_0x52d7bd(0x259)] + '\x22]')['siblings'](_0x52d7bd(0x1ad))['fadeIn']();
    });
}

function resetInputErrorMessage(_0x27c9ed) {
    const _0x4e86bf = _0x52d52a;
    $(_0x4e86bf(0x1f8) + _0x27c9ed + '\x22]')['siblings'](_0x4e86bf(0x1ad))['hide'](), $(_0x4e86bf(0x1f8) + _0x27c9ed + '\x22]')[_0x4e86bf(0x215)]()['children'](_0x4e86bf(0x1ad))[_0x4e86bf(0x218)](), $(_0x4e86bf(0x256) + _0x27c9ed + '\x22]')[_0x4e86bf(0x2d7)]('[data-text=\x22error-message\x22]')['hide'](), $(_0x4e86bf(0x214) + _0x27c9ed + '\x22]')[_0x4e86bf(0x2d7)](_0x4e86bf(0x1ad))['hide']();
}

function increaseCurstep() {
    const _0x35d98a = _0x52d52a;
    countCard ? (curStep = curStep + 0x1, $(_0x35d98a(0x1a5))[_0x35d98a(0x237)](steps['length'])) : $(steps[x])[_0x35d98a(0x284)](_0x35d98a(0x23f)) ? curStep = curStep + 0x0 : curStep = curStep + 0x1, $(_0x35d98a(0x297))[_0x35d98a(0x237)](curStep);
}

function decreaseCurstep() {
    const _0x30bc44 = _0x52d52a;
    countCard ? (curStep = curStep - 0x1, $('[data-text=\x22total-steps\x22]')[_0x30bc44(0x237)](steps[_0x30bc44(0x1f3)])) : $(steps[x])['data'](_0x30bc44(0x23f)) ? curStep = curStep - 0x0 : curStep = curStep - 0x1, $('[data-text=\x22current-step\x22]')[_0x30bc44(0x237)](curStep);
}

function _0x9ddd() {
    const _0x4bc33a = [':first', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>Script\x20Location:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>', '<strong\x20class=\x22f-text-white\x22>Radio\x20Inputs\x20', 'slice', 'add-new', '[data-text=\x22total-steps\x22]', 'children', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>3.\x20Next\x20Buttons:\x20data-form=back-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Next\x20button\x20present?\x20', '[data-progressive-target]', 'getMonth', '<option>', 'checkbox', 'formly', '[data-text=\x22error-message\x22]', 'disabled', '[data-selection]', '[data-cms-select=input]', 'logic-extra', ':input[type=\x22number\x22]', 'removeClass', ':input[required]', '[data-clone=\x22', '[data-progressive-input=\x22', '[data-cms-select=cms]', '[data-clone-wrapper=\x22', 'span', 'find', 'selection', 'Please\x20wait...', 'input[type=\x22checkbox\x22]:visible', '[data-clone-wrapper]', '<strong\x20class=\x22f-text-white\x22>Custom\x20Progress\x20Indicators\x20', 'clone-input', 'memory', 'formly-support', ':input[type=\x22number\x22][required]', '144444NsnHHM', 'top', '<br>Data\x20Answer\x20=\x20', '</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Multistep\x20form\x20attribute\x20is\x20on\x20Form\x20element\x20and\x20not\x20on\x20Form\x20Block\x20element\x0a\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>2.\x20Form\x20Steps:\x20data-form=step\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'cookie', 'phone-validation', 'animate', '[data-display-input-index=\x22', '[data-form=\x22next-btn\x22]', '\x22][value=\x22', '\x22]\x20input', 'focus', '[data-clone-input]', 'getElementsByTagName', ':input[type=\x22file\x22][required]', '[data-enter]', 'current', 'answer', 'file', '[data-quiz]', '<strong\x20class=\x22f-text-white\x22>Total\x20Step\x20Text\x20', 'field', 'trim', ':checked', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Powerups</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', '<strong\x20class=\x22f-text-white\x22>Press\x20\x22Enter\x22\x20To\x20Progress\x20', 'getResponse', '[data-query-param]', 'f-show', 'scroll-top', 'ajaxComplete', 'toLowerCase', 'toString', ':input[type=\x22checkbox\x22]', '26140HEGFGi', ':input', '[data-progressive-input]', '[data-redirect-delay]', '[data-radio-skip]:visible', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'log', ':input[type=\x22time\x22][required]', 'enter', '[data-clickable-all]', 'preventDefault', '<strong\x20class=\x22f-text-white\x22>Intro\x20Cards\x20Or\x20Steps\x20Without\x20Inputs\x20', ':input[type=\x22time\x22]', 'length', 'option[value=\x22$(this).val()\x22]', 'some', 'parse', '[data-checkbox]', 'input[name=\x22', ':input[type=\x22tel\x22]', 'radio-skip', '[data-clickable]', 'https://webflow.com/api/v1/form/', 'script', 'wait', '[data-success-card]', 'val', 'radio', '</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Number\x20of\x20steps:\x20', '[data-radio-delay]', '[data-form=\x22step\x22]:not([data-card=\x22true\x22])', '[data-add-new-input=\x22', 'getElementById', '\x0a\x20\x20.f-icon-embed-xxsmall-2\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#ff3232\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x20\x20.f-icon-embed-xxsmall\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#57ff4b\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20{\x0a\x20\x20\x20\x20height:\x20100%\x20!important;\x0a\x20\x20\x20\x20width:\x200;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20z-index:\x20999999999999\x20!important;\x0a\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20background-color:\x20#081019\x20!important;\x0a\x20\x20\x20\x20overflow-x:\x20hidden\x20!important;\x0a\x20\x20\x20\x20padding-top:\x2060px\x20!important;\x0a\x20\x20\x20\x20transition:\x200.5s\x20!important;\x0a\x20\x20\x20\x20font-size:\x2015px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73)\x20!important;\x0a\x20\x20\x20\x20font-family:system-ui\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-section-title-text,\x20.f-support-text,\x20.f-openbtn{\x0a\x20\x20\x20\x20font-size:\x2015px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73);\x0a\x20\x20\x20\x20font-family:system-ui\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20p,\x20.f-sidenav\x20strong\x20{\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20space-between\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x204px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73);\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20.f-closebtn\x20{\x0a\x20\x20\x20\x20position:\x20absolute\x20!important;\x0a\x20\x20\x20\x20top:\x2025px\x20!important;\x0a\x20\x20\x20\x20right:\x2025px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2036px\x20!important;\x0a\x20\x20\x20\x20margin-left:\x2050px\x20!important;\x0a\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20color:\x20#e7e7e7\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-core-setup\x20{\x0a\x20\x20\x20\x20padding:\x2012px\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x2011px\x20!important;\x0a\x20\x20\x20\x20border-radius:\x206px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20#f-main\x20{\x0a\x20\x20\x20\x20transition:\x20margin-left\x20.5s\x20!important;\x0a\x20\x20\x20\x20padding:\x2020px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-main-content\x20{\x0a\x20\x20\x20\x20transition:\x20margin-left\x20.5s\x20!important;\x0a\x20\x20\x20\x20padding:\x2020px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-form-step\x20{\x0a\x20\x20\x20\x20padding-left:\x2010px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-openbtn\x20{\x0a\x20\x20\x20\x20white-space:\x20nowrap\x20!important;\x0a\x20\x20\x20\x20cursor:\x20pointer\x20!important;\x0a\x20\x20\x20\x20box-shadow:\x200\x200\x200\x201px\x20rgba(0,\x200,\x200,\x20.1),\x200\x201px\x203px\x20rgba(0,\x200,\x200,\x20.1)\x20!important;\x0a\x20\x20\x20\x20visibility:\x20visible\x20!important;\x0a\x20\x20\x20\x20z-index:\x2099\x20!important;\x0a\x20\x20\x20\x20color:\x20#e7e7e7\x20!important;\x0a\x20\x20\x20\x20opacity:\x201\x20!important;\x0a\x20\x20\x20\x20width:\x20auto\x20!important;\x0a\x20\x20\x20\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20background-color:\x20#1e1e1e\x20!important;\x0a\x20\x20\x20\x20border-radius:\x203px\x20!important;\x0a\x20\x20\x20\x20margin:\x200\x20!important;\x0a\x20\x20\x20\x20padding:\x206px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2013px\x20!important;\x0a\x20\x20\x20\x20line-height:\x2014px\x20!important;\x0a\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20top:\x20auto\x20!important;\x0a\x20\x20\x20\x20bottom:\x2012px\x20!important;\x0a\x20\x20\x20\x20left:\x2012px\x20!important;\x0a\x20\x20\x20\x20right:\x20auto\x20!important;\x0a\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20transform:\x20none\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-text-header{\x0a\x20\x20\x20\x20color:\x20#fff\x20!important;\x0a\x20\x20\x20\x20font-size:\x201.8rem\x20!important;\x0a\x20\x20\x20\x20font-weight:\x20600\x20!important;\x0a\x20\x20\x20\x20line-height:\x201.2\x20!important;\x0a\x20\x20\x20\x20margin-bottom:4px\x0a\x20\x20}\x0a\x0a\x20\x20@media\x20screen\x20and\x20(max-height:\x20450px)\x20{\x0a\x20\x20\x20\x20.sidenav\x20{\x20padding-top:\x2015px\x20!important;\x20}\x0a\x20\x20\x20\x20.sidenav\x20a\x20{\x20font-size:\x2018px\x20!important;\x20}\x0a\x20\x20}\x0a\x0a\x20\x20.f-section-title-text{\x0a\x20\x20\x20\x20color:\x20#fff\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x2010px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2018px\x20!important;\x0a\x20\x20\x20\x20font-weight:\x20700\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-div-support-section{\x0a\x20\x20\x20\x20padding-top:1rem\x20!important;\x0a\x20\x20\x20\x20padding-bottom:1rem\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-text-white{\x0a\x20\x20\x20\x20color:\x20white\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-spacer{\x0a\x20\x20\x20\x20padding-top:8px\x20!important;\x0a\x20\x20}\x0a', ':input[type=\x22password\x22][required]', '[data-submit=\x22true\x22]', 'ms-field', 'input:radio[name=\x22', '<strong\x20class=\x22f-text-white\x22>Press\x20\x22⌘\x20+\x20Enter\x20\x22\x20To\x20Submit\x20', 'clickable', '[data-input-field=\x22', 'fadeIn', 'relationship-', 'offset', 'inputName', 'add-new-limit', 'select[name=\x22', 'parents', 'filter', 'keydown', 'hide', '\x22]:not([data-prefill=\x22false\x22])', 'clone', 'select[required]', '161120NpKvAe', 'textarea[required]:visible', 'querySelectorAll', 'input-field', '[data-form=\x22next-btn\x22][data-submit-show]', '[data-selection=\x22', 'data-input-field', 'none', 'click-addclass', 'input[type=\x22submit\x22]', 'clickable-all', '[data-form=\x22back-btn\x22]', 'script[src=\x22', 'every', 'formlyLastStep', '[data-reinit]', ':input[type=\x22radio\x22]', '[data-clone-input=\x22', '</div>', 'select', 'input[type=\x22radio\x22]', 'filledInput', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>4.\x20Back\x20Buttons:\x20data-form=next-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Back\x20button\x20present?\x20', 'textarea[required]', 'index', '.w-radio-input', '12px', 'text', 'BODY', '_blank', 'radio-delay', 'reinit', 'progressive-input-value', '[data-form=\x22submit-btn\x22]:visible', ':input[type=\x22tel\x22][required]', 'card', 'status', 'push', 'prop', '[data-form=\x22next-btn\x22][type=\x22submit\x22]', 'parent', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Next\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button\x20', '[data-form=\x22remove-clone\x22]', '[data-add-new=\x22', '\x22][data-progressive-input-value=\x22*\x22]', '[data-answer=\x22', 'redirect-delay', 'destroy', 'last-step', '[data-form=\x22remove-input-clone\x22]', 'join', 'padding', 'No\x20Formly\x20script\x20added\x20to\x20the\x20page!', '197740BWZZXy', 'src', '[data-form=\x22progress-indicator\x22]', 'getItem', '[data-input-index=\x22', 'textarea[name=\x22', '[data-display-wrapper=\x22', 'remove', 'input', 'last', 'show', ':input[type=\x22email\x22][required]', 'div.g-recaptcha', '[data-cms-select=text]', 'scroll-top-offset', '\x0a\x20\x20<button\x20class=\x22f-openbtn\x22\x20onclick=\x22openNav()\x22>\x0a\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x2220px\x22\x20height=\x2220px\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M11\x2021h-1l1-7H7.5c-.88\x200-.33-.75-.31-.78C8.48\x2010.94\x2010.42\x207.54\x2013.01\x203h1l-1\x207h3.51c.4\x200\x20.62.19.4.66C12.97\x2017.55\x2011\x2021\x2011\x2021\x22></path>\x0a\x20\x20\x20\x20</svg>\x20Check\x20Form\x0a\x20\x20</button>\x0a\x20\x20<div\x20id=\x22f-mySidenav\x22\x20class=\x22f-sidenav\x22>\x0a\x20\x20\x20\x20<a\x20href=\x22javascript:void(0)\x22\x20class=\x22f-closebtn\x22\x20onclick=\x22closeNav()\x22>&times;</a>\x0a\x20\x20\x20\x20<div\x20class=\x22f-fc-main-content\x22>\x0a\x20\x20\x20\x20\x20\x20<h4\x20class=\x22f-text-header\x22>Formly\x20Support</h4>\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20If\x20you\x20have\x20spotted\x20a\x20bug\x20or\x20require\x20extra\x20support,\x20please\x20reach\x20out\x20to\x20us\x20via\x20Slack\x20or\x20email\x20us\x20at\x20developer@videsigns.uk.\x0a\x20\x20\x20\x20\x20\x20</p>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Form\x20Type</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>', '<br>Data\x20Go\x20To\x20=\x20', 'Inside\x20<head>\x20tag', '[data-radio-skip]', '25mDKecE', 'skipTo', 'data-show-if', '\x22]:checked', '[data-btn=\x22reset\x22]', 'query-param', 'add-new-input-limit', '.w-form-formradioinput', 'width', 'html,\x20body', 'closest', 'location', '<strong\x20class=\x22f-text-white\x22>Automatic\x20Progress\x20Indicators\x20', 'skip-to', 'addClass', 'key', 'block-domain', '<strong\x20class=\x22f-text-white\x22>Current\x20Step\x20Text\x20', 'formlyLastStepAnswer', '[data-form=\x22step\x22]', 'submit', 'selections\x20email', 'go-to', 'FAIL', '0px', '[data-weighted-selection-range]', 'input[type=\x22email\x22]:visible', 'name', '\x22]\x20select', 'new-tab', 'innerHTML', 'search', 'data', 'reset-delay', 'not', '[data-success-card=\x22', '[data-show-if]', '\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a', 'href', 'Basic\x20(No\x20Formly\x20Logic)', 'open', '.active-answer-card', '942297MsLCZd', 'get', '[data-display=\x22', '.w-checkbox-input', '[data-btn=\x22edit\x22]', 'data-skip-to', '[data-form=\x22multistep\x22]', 'AND', 'selected', '[data-text=\x22current-step\x22]', '[data-clone-input-wrapper]', 'init', 'trigger', 'append', '[data-btn=\x22check\x22]', '[data-form=\x22step\x22][data-card]', 'dispatchEvent', 'textarea:focus', '[data-click-addclass]', '[data-display-input-wrapper=\x22', '[data-last-step]', '[data-progressive-input]:not(:visible)', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>5.\x20Submit\x20Buttons:\x20data-form=next-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Submit\x20button\x20present?\x20', 'add-new-input', 'true', 'slow', 'div', '[data-range]:contains(', 'reset', '[data-form=\x22submit\x22]:visible', 'phone-autoformat', 'data-radio-skip', '</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Formly\x20Script\x20Info</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>Script\x20URL:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>', ':input[type=\x22date\x22]', 'appendChild', 'counter', 'PASS', 'multistep', 'weighted-selection', 'stopPropagation', 'each', '[data-answer][data-radio-skip]:visible', '0.4', 'forEach', '</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Attributes</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>1.\x20Form:\x20data-form=multistep\x20', 'data-name', ':input[type=\x22checkbox\x22]:checked', 'input[autofocus]', 'substring', 'remove-upload', 'submit-show', '[data-input-field]', 'replace', 'attr', 'step', '[data-index=\x22', '[data-skip-to]', 'w--redirected-checked', '3434427LNkkKA', 'Before\x20&lt;/body&gt;\x20tag', 'head', '<span\x20class=\x22f-icon-embed-xxsmall\x20w-embed\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010s10-4.48\x2010-10S17.52\x202\x2012\x202m-2\x2015l-5-5l1.41-1.41L10\x2014.17l7.59-7.59L19\x208z\x22></path></svg></span>', ':input[type=\x22date\x22][required]', '26563uSDsBW', 'keypress', '[data-conditional-result]', 'metaKey', 'Webflow', '[data-progressive-target=\x22', '[data-form=\x22submit-btn\x22]', '</strong>', 'click', 'backTo', 'siblings', ':input[type=\x22url\x22]', 'debug-mode', 'stringify', 'input[type=\x22text\x22][required]:visible', 'style', 'ix2', 'removeItem', ':input[type=\x22email\x22]', '[data-answer]', '[data-go-to]', ':input[type=\x22checkbox\x22][required]', 'split', 'select:not([data-prefill=\x22false\x22])', '[data-card=\x22true\x22]', ':input[type=\x22text\x22][required]', 'includes', 'auto', 'input:radio[required]', 'setItem', '[data-remove-upload]', 'checked', 'startsWith', '[data-display]', 'FormlyLogic\x20enabled', 'weighted-selection-range', '[data-display-input=\x22', 'min-character', '<span\x20class=\x22f-icon-embed-xxsmall-2\x20w-embed\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--carbon\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2032\x2032\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M16\x202C8.2\x202\x202\x208.2\x202\x2016s6.2\x2014\x2014\x2014s14-6.2\x2014-14S23.8\x202\x2016\x202m5.4\x2021L16\x2017.6L10.6\x2023L9\x2021.4l5.4-5.4L9\x2010.6L10.6\x209l5.4\x205.4L21.4\x209l1.6\x201.6l-5.4\x205.4l5.4\x205.4z\x22></path></svg></span>', ':focus', '[type=\x22checkbox\x22]', '[data-add-new]', '[data-form=\x22custom-progress-indicator\x22]', '[data-clone-input-wrapper=\x22', 'css', '[data-select-multiple]', 'tagName', ':input[type=\x22text\x22]', 'active-answer-card', '.w-form-done', '[data-clone]', 'f-mySidenav', 'type', ':input[type=\x22checkbox\x22][required]:not(:checked)', '[data-form=\x22progress\x22]', 'custom-error-message', 'value', 'test', 'textarea', '\x22]\x20textarea', 'input[type=\x22radio\x22]:checked', 'querySelector', 'required', 'change', '<strong\x20class=\x22f-text-white\x22>Checkboxes\x20', 'progressive-input', ':input[type=\x22file\x22]', 'count-card', '[data-form-ms=\x22submit-btn\x22]', 'f-hide', '[data-text=\x22total-weight\x22]', 'body', 'input:checkbox', ':input[type=\x22checkbox\x22][required]:checked', '7QYenGb', 'redirect-form-hehexd', 'findIndex', '[data-radio-skip=\x22true\x22]', 'data-go-to', '[data-weighted-selection]', 'searchParams', '[data-reset-delay]'];
    _0x9ddd = function() { return _0x4bc33a; };
    return _0x9ddd();
}
$(_0x52d52a(0x2d3))['on'](_0x52d52a(0x2d5), function(_0x35e9e0) {
    const _0x32b769 = _0x52d52a;
    $(this)[_0x32b769(0x284)]('redirect') && (redirectTo = $(this)[_0x32b769(0x284)]('redirect')), !$(this)[_0x32b769(0x284)](_0x32b769(0x281)) && (newTab = $(this)[_0x32b769(0x284)](_0x32b769(0x281))), successCard = $(this)[_0x32b769(0x284)]('success'), _0x35e9e0[_0x32b769(0x1f0)](), _0x35e9e0['stopPropagation'](), logicExtra && ($(this)[_0x32b769(0x242)]('novalidate', !![]), $(steps)['find'](_0x32b769(0x1e7))[_0x32b769(0x242)](_0x32b769(0x18c), ![])), localStorage[_0x32b769(0x2de)](_0x32b769(0x231)), fill ? ($(this)[_0x32b769(0x284)](_0x32b769(0x1fe)) ? (console[_0x32b769(0x1ec)]($(this)['data'](_0x32b769(0x1fe))), $(this)['text']($(this)['data'](_0x32b769(0x1fe)))) : $(this)[_0x32b769(0x200)](_0x32b769(0x1bc))[_0x32b769(0x237)]('Please\x20wait...'), $(_0x32b769(0x294))['submit'](), $(_0x32b769(0x25d))[_0x32b769(0x1f3)] > 0x0 && (grecaptcha[_0x32b769(0x1de)]()[_0x32b769(0x1f3)] === 0x0 && (form['find'](_0x32b769(0x2d3))[_0x32b769(0x237)](oldSubmitText), form['find'](_0x32b769(0x2d3))[_0x32b769(0x200)](oldSubmitText))), customError && $(_0x32b769(0x1ad))['hide']()) : customError && displayErrorMessage();
});

function nextStep() {
    const _0x5b8b18 = _0x52d52a;
    customError ? ($('[data-text=\x22error-message\x22]')[_0x5b8b18(0x218)](), fill ? (x++, increaseCurstep(), progress = x, x <= steps[_0x5b8b18(0x1f3)] - 0x1 && (updateStep(), memory && saveFilledInput())) : displayErrorMessage()) : (x++, increaseCurstep(), x > progress && (progress = x), x <= steps[_0x5b8b18(0x1f3)] - 0x1 && (updateStep(), memory && saveFilledInput())), andLogic();
}

function backStep() {
    const _0x1f00b9 = _0x52d52a;
    customError && $(_0x1f00b9(0x1ad))[_0x1f00b9(0x218)](), decreaseCurstep(), x > 0x0 && ($(progressbar[x])[_0x1f00b9(0x1b3)](_0x1f00b9(0x1d4)), selections['filter'](_0x548f07 => _0x548f07[_0x1f00b9(0x265)] === x)[_0x1f00b9(0x1f3)] > 0x0 ? x = parseInt(getSafe(() => selections[_0x1f00b9(0x216)](_0x4f50e6 => _0x4f50e6[_0x1f00b9(0x265)] === x)[0x0]['backTo'])) : x--, updateStep()), ($(steps[x])[_0x1f00b9(0x1ba)](_0x1f00b9(0x1ea))['data'](_0x1f00b9(0x1fa)) === !![] || $(steps[x])[_0x1f00b9(0x1ba)](_0x1f00b9(0x28d))[_0x1f00b9(0x1ba)](_0x1f00b9(0x1ea))[_0x1f00b9(0x284)]('radio-skip') === !![] || $(steps[x])[_0x1f00b9(0x1ba)](_0x1f00b9(0x2b7))[_0x1f00b9(0x284)](_0x1f00b9(0x1fa)) === !![]) && (all_data = all_data[_0x1f00b9(0x216)](_0x160e00 => _0x160e00[_0x1f00b9(0x1d9)] !== $(steps[x])[_0x1f00b9(0x1ba)](_0x1f00b9(0x18a))[_0x1f00b9(0x2c3)](_0x1f00b9(0x27f))), $(_0x1f00b9(0x20e) + $(steps[x])['find']('input[type=\x22radio\x22]:checked')[_0x1f00b9(0x2c3)]('name') + '\x22]')[_0x1f00b9(0x218)](), $(steps[x])[_0x1f00b9(0x1ba)]('input[type=\x22radio\x22]')[_0x1f00b9(0x242)](_0x1f00b9(0x2ec), ![]), $(steps[x])['find'](_0x1f00b9(0x26b))[_0x1f00b9(0x1b3)](_0x1f00b9(0x2c7)), validation());
}
weightedSelectionRange && $('[data-selection]')[_0x52d52a(0x2b6)](function() {
    const _0x5caf6f = _0x52d52a;
    $(this)[_0x5caf6f(0x29b)]('<div\x20data-range=\x22selection\x22\x20style=\x22display:none\x20!important\x22>' + $(this)[_0x5caf6f(0x284)](_0x5caf6f(0x1bb)) + _0x5caf6f(0x22e));
});

function selectionQuiz() {
    const _0x48af17 = _0x52d52a;
    if ($(this)['find'](_0x48af17(0x29c))) {
        $(_0x48af17(0x1af))[_0x48af17(0x218)](), $('[data-selection-weight]')[_0x48af17(0x218)]();
        if (weightedSelection) {
            selTotal = 0x0, selArr[_0x48af17(0x2b9)](function(_0x2b182e) { selTotal = selTotal + _0x2b182e['selected']; }), $(_0x48af17(0x194))[_0x48af17(0x237)](selTotal);
            if ($(_0x48af17(0x221) + selTotal + '\x22]')[_0x48af17(0x1f3)] > 0x0) $(_0x48af17(0x221) + selTotal + '\x22]')['fadeIn']();
            else $(_0x48af17(0x2a9) + selTotal + ')') ? $(_0x48af17(0x2a9) + selTotal + ')')[_0x48af17(0x244)](_0x48af17(0x1af))['eq'](0x0)['show']() : $('[data-selection=\x22other\x22]')[_0x48af17(0x20f)]();
        } else {
            let _0x590163 = -0x1;
            $('[data-selection]')[_0x48af17(0x2b6)](function(_0x1f374a) {
                const _0x147899 = _0x48af17;
                $($(_0x147899(0x1af))[_0x1f374a])[_0x147899(0x284)](_0x147899(0x1bb))[_0x147899(0x2e7)](selString[_0x147899(0x24e)]()) && (_0x590163 = _0x1f374a);
            }), _0x590163 > -0x1 ? $($(_0x48af17(0x1af))[_0x590163])[_0x48af17(0x20f)]() : $('[data-selection=\x22other\x22]')[_0x48af17(0x20f)]();
        }
    }
}

function triggerInputAllData() {
    const _0x3b45f1 = _0x52d52a;
    if (savedFilledInput && memory) savedFilledInput[_0x3b45f1(0x2b9)](_0x34c138 => {
        const _0x8cceb2 = _0x3b45f1;
        var _0x5ba7ba = $('input[name=\x22' + _0x34c138['inputName'] + '\x22][value=\x22' + _0x34c138['value'] + '\x22]:not([data-prefill=\x22false\x22])'),
            _0x564885 = $(_0x8cceb2(0x1f8) + _0x34c138[_0x8cceb2(0x212)] + _0x8cceb2(0x219)),
            _0x444aba = $('textarea[name=\x22' + _0x34c138['inputName'] + _0x8cceb2(0x219)),
            _0x440737 = $('input[type=\x22checkbox\x22][name=\x22' + _0x34c138[_0x8cceb2(0x212)] + '\x22]'),
            _0x1c0833 = $('input[type=\x22radio\x22][name=\x22' + _0x34c138[_0x8cceb2(0x212)] + _0x8cceb2(0x1cd) + _0x34c138['value'] + _0x8cceb2(0x219));
        if (_0x5ba7ba[_0x8cceb2(0x2c3)](_0x8cceb2(0x182)) !== _0x8cceb2(0x1d6)) {
            if (_0x5ba7ba[_0x8cceb2(0x2c3)](_0x8cceb2(0x182)) === _0x8cceb2(0x201) && !_0x5ba7ba['parents'](_0x8cceb2(0x263))[_0x8cceb2(0x284)](_0x8cceb2(0x1fa))) _0x5ba7ba['click'](), _0x5ba7ba['siblings']('.w-radio-input')[_0x8cceb2(0x272)]('w--redirected-checked'), _0x5ba7ba[_0x8cceb2(0x29a)](_0x8cceb2(0x259));
            else _0x34c138[_0x8cceb2(0x186)] === 'on' ? (_0x564885[_0x8cceb2(0x2d5)](), _0x564885['siblings']('.w-checkbox-input')[_0x8cceb2(0x272)](_0x8cceb2(0x2c7)), _0x564885['trigger'](_0x8cceb2(0x259))) : (_0x564885[_0x8cceb2(0x200)](_0x34c138[_0x8cceb2(0x186)]), _0x444aba[_0x8cceb2(0x200)](_0x34c138[_0x8cceb2(0x186)]), $(_0x8cceb2(0x2e4))[_0x8cceb2(0x1ba)]('option[value=\x22' + _0x34c138['value'] + '\x22]')[_0x8cceb2(0x242)]('selected', !![]), _0x564885['trigger']('input'), _0x564885[_0x8cceb2(0x29a)](_0x8cceb2(0x18d)));
            const _0x23503d = _0x1c0833[_0x8cceb2(0x284)](_0x8cceb2(0x224)),
                _0x3f0382 = _0x440737[_0x8cceb2(0x284)]('click-addclass');
            _0x1c0833[_0x8cceb2(0x244)]()[_0x8cceb2(0x272)](_0x23503d), _0x440737[_0x8cceb2(0x244)]()['addClass'](_0x3f0382);
        }
    });
    else _params && (getParams(), searchQ[_0x3b45f1(0x2b9)](_0x3e998d => {
        const _0x1e26f8 = _0x3b45f1;
        if ($('input[name=\x22' + _0x3e998d[_0x1e26f8(0x212)] + _0x1e26f8(0x1cd) + _0x3e998d[_0x1e26f8(0x186)] + _0x1e26f8(0x219))[_0x1e26f8(0x2c3)](_0x1e26f8(0x182)) !== 'file') {
            if ($(_0x1e26f8(0x1f8) + _0x3e998d[_0x1e26f8(0x273)] + _0x1e26f8(0x1cd) + _0x3e998d[_0x1e26f8(0x200)] + _0x1e26f8(0x219))['attr'](_0x1e26f8(0x182)) === _0x1e26f8(0x201)) $(_0x1e26f8(0x1f8) + _0x3e998d[_0x1e26f8(0x273)] + _0x1e26f8(0x1cd) + _0x3e998d['val'] + _0x1e26f8(0x219))['click'](), $(_0x1e26f8(0x1f8) + _0x3e998d['key'] + _0x1e26f8(0x1cd) + _0x3e998d[_0x1e26f8(0x200)] + '\x22]:not([data-prefill=\x22false\x22])')[_0x1e26f8(0x2d7)](_0x1e26f8(0x235))[_0x1e26f8(0x272)]('w--redirected-checked'), $('input[name=\x22' + _0x3e998d['key'] + _0x1e26f8(0x1cd) + _0x3e998d[_0x1e26f8(0x200)] + _0x1e26f8(0x219))[_0x1e26f8(0x29a)](_0x1e26f8(0x259));
            else _0x3e998d[_0x1e26f8(0x200)] === 'on' ? ($(_0x1e26f8(0x1f8) + _0x3e998d[_0x1e26f8(0x273)] + _0x1e26f8(0x219))[_0x1e26f8(0x2d5)](), $(_0x1e26f8(0x1f8) + _0x3e998d['key'] + _0x1e26f8(0x219))[_0x1e26f8(0x2d7)](_0x1e26f8(0x291))[_0x1e26f8(0x272)](_0x1e26f8(0x2c7)), $(_0x1e26f8(0x1f8) + _0x3e998d['key'] + '\x22]')[_0x1e26f8(0x29a)]('input')) : ($('input[name=\x22' + _0x3e998d[_0x1e26f8(0x273)] + _0x1e26f8(0x219))[_0x1e26f8(0x200)](_0x3e998d[_0x1e26f8(0x200)]), $('textarea[name=\x22' + _0x3e998d[_0x1e26f8(0x273)] + _0x1e26f8(0x219))[_0x1e26f8(0x200)](_0x3e998d[_0x1e26f8(0x200)]), $(_0x1e26f8(0x214) + _0x3e998d[_0x1e26f8(0x273)] + _0x1e26f8(0x219))[_0x1e26f8(0x1ba)]('option[value=\x22' + _0x3e998d[_0x1e26f8(0x200)] + '\x22]')[_0x1e26f8(0x242)](_0x1e26f8(0x296), !![]), $(_0x1e26f8(0x1f8) + _0x3e998d[_0x1e26f8(0x273)] + '\x22]:not([data-prefill=\x22false\x22])')[_0x1e26f8(0x29a)](_0x1e26f8(0x259)), $('input[name=\x22' + _0x3e998d[_0x1e26f8(0x273)] + _0x1e26f8(0x219))['trigger'](_0x1e26f8(0x18d)));
        }
    }));
}
$(_0x52d52a(0x1cc))['on'](_0x52d52a(0x2d5), function() { next = !![], back = ![], nextStep(), selectionQuiz(); }), $(_0x52d52a(0x227))['on'](_0x52d52a(0x2d5), function() { next = ![], back = !![], backStep(); }), $(steps)[_0x52d52a(0x1ba)](':input')[_0x52d52a(0x286)]('[type=\x22radio\x22]')['on'](_0x52d52a(0x259), function(_0x4967e0) { validation(), andLogic(), addClickClass(); }), $(steps)[_0x52d52a(0x1ba)](_0x52d52a(0x230))['on'](_0x52d52a(0x2d5), function() { skip = !![], validation(), addClickClass(); });
$(_0x52d52a(0x1ef))[_0x52d52a(0x284)](_0x52d52a(0x226)) ? $(_0x52d52a(0x178))[_0x52d52a(0x1b3)](_0x52d52a(0x1ae)) : $(_0x52d52a(0x178))[_0x52d52a(0x272)](_0x52d52a(0x1ae));

function clickableIndicator() {
    const _0xea3f5c = _0x52d52a;
    $(_0xea3f5c(0x1fb))[_0xea3f5c(0x284)](_0xea3f5c(0x20d)) && ($(_0xea3f5c(0x253))['removeClass'](_0xea3f5c(0x1d4)), $(_0xea3f5c(0x1fb))[_0xea3f5c(0x284)](_0xea3f5c(0x226)) ? (x = $(this)[_0xea3f5c(0x234)](), updateStep()) : $(this)[_0xea3f5c(0x234)]() <= progress && (x = $(this)[_0xea3f5c(0x234)](), updateStep())), $('[data-text=\x22current-step\x22]')[_0xea3f5c(0x237)](x + 0x1);
}
$('[data-form=\x22custom-progress-indicator\x22]')['on'](_0x52d52a(0x2d5), clickableIndicator);
$(_0x52d52a(0x294))[_0x52d52a(0x284)](_0x52d52a(0x2d9)) && ($(_0x52d52a(0x2e1))[_0x52d52a(0x2b6)](function() {
    const _0x2aa9da = _0x52d52a;
    $(this)[_0x2aa9da(0x29b)](_0x2aa9da(0x261), $(this)['data'](_0x2aa9da(0x27a)));
}), $(_0x52d52a(0x2e0))['each'](function() {
    const _0x42cffc = _0x52d52a;
    $(this)['append'](_0x42cffc(0x1c6), $(this)[_0x42cffc(0x284)](_0x42cffc(0x1d5)));
}));

function resetFormly() {
    const _0x213a13 = _0x52d52a;
    $(_0x213a13(0x294))[_0x213a13(0x29a)](_0x213a13(0x2aa)), $(_0x213a13(0x294))[_0x213a13(0x215)]()[_0x213a13(0x1ba)](_0x213a13(0x17f))['hide'](), x = 0x0, updateStep(), $(_0x213a13(0x294))[_0x213a13(0x25b)](), $(_0x213a13(0x2d3))[_0x213a13(0x237)](oldSubmitText), $('[data-form=\x22submit-btn\x22]')['val'](oldSubmitText), $(_0x213a13(0x297))[_0x213a13(0x237)](0x1), $('[data-form=\x22multistep\x22]')[_0x213a13(0x1ba)](_0x213a13(0x196))[_0x213a13(0x2d7)](_0x213a13(0x291))[_0x213a13(0x1b3)]('w--redirected-checked');
}
$(document)[_0x52d52a(0x1e2)](function(_0x5d8cb8, _0x1e6231, _0x30b475) {
    const _0x58fe1a = _0x52d52a;
    if (_0x30b475['url'][_0x58fe1a(0x2e7)](_0x58fe1a(0x1fc))) {
        const _0x22d85a = _0x1e6231[_0x58fe1a(0x240)] === 0xc8,
            _0x46e093 = _0x58fe1a(0x199);
        redirectTo && _0x22d85a && (newTab ? window[_0x58fe1a(0x28c)](redirectTo, _0x58fe1a(0x239)) : setTimeout(() => {
            const _0x2dce40 = _0x58fe1a;
            location[_0x2dce40(0x28a)] = redirectTo;
        }, redirectDelay)), _0x22d85a && successCard !== '' && $(_0x58fe1a(0x287) + successCard + '\x22]')['fadeIn'](), _0x22d85a && formReset && setTimeout(() => { resetFormly(); }, resetDelay), !_0x22d85a && ($(_0x58fe1a(0x2d3))[_0x58fe1a(0x200)](_0x58fe1a(0x1bc)), $(_0x58fe1a(0x2d3))[_0x58fe1a(0x237)]('Please\x20wait...'));
    }
}), $(_0x52d52a(0x292))['on'](_0x52d52a(0x2d5), function() {
    const _0x1b0429 = _0x52d52a;
    var _0x1edcf1 = $(this)[_0x1b0429(0x244)]()[_0x1b0429(0x1ba)](_0x1b0429(0x2c1))[_0x1b0429(0x284)]('input-field');
    setTimeout(function() {
        const _0x41e870 = _0x1b0429;
        $(_0x41e870(0x1f8) + _0x1edcf1 + '\x22]')[_0x41e870(0x1cf)]();
    }, 0x64), back = !![], x = $(this)[_0x1b0429(0x284)]('edit-step') - 0x1, updateStep(), countCard ? (curStep = x + 0x1, $(_0x1b0429(0x1a5))[_0x1b0429(0x237)](steps[_0x1b0429(0x1f3)])) : $(steps[x])[_0x1b0429(0x284)](_0x1b0429(0x23f)) ? curStep = x + 0x0 : curStep = x + 0x1, $('[data-text=\x22current-step\x22]')[_0x1b0429(0x237)](curStep), back = ![];
}), $('[data-btn=\x22reset\x22]')['on']('click', function() {
    const _0x2e7c34 = _0x52d52a;
    $(_0x2e7c34(0x294))['trigger'](_0x2e7c34(0x2aa));
    let _0x3b22c3 = $(this);
    $(this)[_0x2e7c34(0x237)]('Please\x20wait...'), setTimeout(function() {
        const _0x5103dd = _0x2e7c34;
        $(_0x3b22c3)[_0x5103dd(0x237)](oldResetText), $(_0x3b22c3)[_0x5103dd(0x215)]('.w-form-done')['hide'](), x = 0x0, updateStep(), $(_0x5103dd(0x294))['show'](), $(_0x5103dd(0x2d3))['text'](oldSubmitText), $(_0x5103dd(0x2d3))[_0x5103dd(0x200)](oldSubmitText), $(_0x3b22c3)[_0x5103dd(0x200)](oldSubmitText), $(_0x5103dd(0x297))[_0x5103dd(0x237)](0x1), $('[data-form=\x22multistep\x22]')[_0x5103dd(0x1ba)](_0x5103dd(0x196))[_0x5103dd(0x2d7)](_0x5103dd(0x291))[_0x5103dd(0x1b3)](_0x5103dd(0x2c7));
    }, resetDelay);
}), $(_0x52d52a(0x195))['on'](_0x52d52a(0x2ce), function(_0x29edfd) {
    const _0x6079f8 = _0x52d52a;
    if (_0x29edfd['keyCode'] === 0xd) {
        _0x29edfd[_0x6079f8(0x1f0)](), _0x29edfd[_0x6079f8(0x2b5)]();
        if ($(steps[x])[_0x6079f8(0x1ba)]('textarea')['is'](_0x6079f8(0x175))) $(steps[x])[_0x6079f8(0x1ba)](_0x6079f8(0x29f))[_0x6079f8(0x200)]($(steps[x])[_0x6079f8(0x1ba)]('textarea:focus')['val']() + '\x0a');
        else $(_0x6079f8(0x1d3))['data'](_0x6079f8(0x1ee)) && fill && (totalSteps > curStep && $(_0x6079f8(0x1cc))[0x0][_0x6079f8(0x2d5)]());
    }
}), $(_0x52d52a(0x195))[_0x52d52a(0x217)](function(_0x532407) {
    const _0x2cb31c = _0x52d52a;
    (_0x532407[_0x2cb31c(0x2d0)] || _0x532407['ctrlKey']) && _0x532407['keyCode'] == 0xd && (x >= steps[_0x2cb31c(0x1f3)] - 0x1 && fill ? $(steps[x])[_0x2cb31c(0x1ba)](_0x2cb31c(0x23d))[_0x2cb31c(0x2d5)]() : (_0x532407[_0x2cb31c(0x1f0)](), _0x532407[_0x2cb31c(0x2b5)]()));
}), $('[data-form=\x22multistep\x22]')[_0x52d52a(0x1ba)](_0x52d52a(0x1e7))['on']('change', function() {
    const _0x247690 = _0x52d52a;
    all_data = all_data[_0x247690(0x216)](_0x3a5685 => _0x3a5685[_0x247690(0x1d9)] !== $(this)[_0x247690(0x2c3)](_0x247690(0x27f))), $(this)[_0x247690(0x2c3)](_0x247690(0x182)) === _0x247690(0x1ab) ? $(this)['is'](_0x247690(0x1db)) ? all_data[_0x247690(0x241)]({ 'field': $(this)[_0x247690(0x2c3)]('name'), 'value': $(this)['siblings'](_0x247690(0x1b9))[_0x247690(0x237)]() }) : $('[data-input-field=\x22' + $(this)[_0x247690(0x2c3)](_0x247690(0x27f)) + '\x22]')['hide']() : (all_data[_0x247690(0x241)]({ 'field': $(this)[_0x247690(0x2c3)](_0x247690(0x27f)), 'value': $(this)[_0x247690(0x200)]() }), $(this)[_0x247690(0x200)]() !== '' && resetInputErrorMessage($(this)[_0x247690(0x2c3)](_0x247690(0x27f)))), all_data[_0x247690(0x2b9)](function(_0x746936) {
        const _0xc1cb2d = _0x247690;
        $(_0xc1cb2d(0x20e) + _0x746936[_0xc1cb2d(0x1d9)] + '\x22]')[_0xc1cb2d(0x25b)](), $('[data-input-field=\x22' + _0x746936[_0xc1cb2d(0x1d9)] + '\x22]')[_0xc1cb2d(0x237)](_0x746936[_0xc1cb2d(0x186)]);
    });
}), $(_0x52d52a(0x294))['find']('textarea')['on']('change', function() {
    const _0x3a6aaa = _0x52d52a;
    $(this)[_0x3a6aaa(0x200)]() !== '' && resetInputErrorMessage($(this)[_0x3a6aaa(0x2c3)](_0x3a6aaa(0x27f))), all_data = all_data[_0x3a6aaa(0x216)](_0x2fcd5f => _0x2fcd5f[_0x3a6aaa(0x1d9)] !== $(this)['attr'](_0x3a6aaa(0x27f))), all_data[_0x3a6aaa(0x241)]({ 'field': $(this)['attr'](_0x3a6aaa(0x27f)), 'value': $(this)[_0x3a6aaa(0x200)]() }), all_data[_0x3a6aaa(0x2b9)](function(_0x34102b) {
        const _0x5146f5 = _0x3a6aaa;
        $(_0x5146f5(0x20e) + _0x34102b[_0x5146f5(0x1d9)] + '\x22]')[_0x5146f5(0x25b)](), $(_0x5146f5(0x20e) + _0x34102b['field'] + '\x22]')[_0x5146f5(0x237)](_0x34102b['value']);
    });
}), $(_0x52d52a(0x294))['find'](_0x52d52a(0x22f))['on'](_0x52d52a(0x18d), function() {
    const _0x23e366 = _0x52d52a;
    $(this)['val']() !== '' && resetInputErrorMessage($(this)[_0x23e366(0x2c3)]('name'));
    var _0x432d88 = $(this)[_0x23e366(0x284)](_0x23e366(0x20a));
    all_data = all_data[_0x23e366(0x216)](_0x4ca8c5 => _0x4ca8c5[_0x23e366(0x1d9)] !== $(this)['attr'](_0x23e366(0x27f))), all_data[_0x23e366(0x241)]({ 'field': $(this)['attr'](_0x23e366(0x27f)), 'value': _0x432d88 ? $(this)[_0x23e366(0x1ba)](_0x23e366(0x1f4))['text']() : $(this)[_0x23e366(0x200)]() }), all_data[_0x23e366(0x2b9)](function(_0x2cf538) {
        const _0x45397d = _0x23e366;
        $('[data-input-field=\x22' + _0x2cf538[_0x45397d(0x1d9)] + '\x22]')[_0x45397d(0x25b)](), $(_0x45397d(0x20e) + _0x2cf538[_0x45397d(0x1d9)] + '\x22]')[_0x45397d(0x237)](_0x2cf538['value']);
    });
}), updateStep(), triggerInputAllData(), $(_0x52d52a(0x1b7))['each'](function() {
    const _0x44f06b = _0x52d52a,
        _0x1d9211 = $(this)[_0x44f06b(0x1ba)](_0x44f06b(0x25e)),
        _0x31aeb7 = [];
    _0x1d9211['each'](function() {
        const _0x1925a6 = _0x44f06b;
        _0x31aeb7[_0x1925a6(0x241)]($(this)[_0x1925a6(0x237)]()[_0x1925a6(0x1da)]());
    });
    const _0x261086 = $(this)[_0x44f06b(0x2d7)](_0x44f06b(0x1b0));
    $[_0x44f06b(0x2b6)](_0x31aeb7, function(_0x39cb48, _0x3e9c45) {
        const _0x3c0818 = _0x44f06b,
            _0xf6cc73 = $(_0x3c0818(0x1aa))[_0x3c0818(0x200)](_0x3e9c45)['text'](_0x3e9c45);
        _0x261086[_0x3c0818(0x29b)](_0xf6cc73);
    });
});

function cloneRemove() {
    const _0x3c5620 = _0x52d52a;
    $(_0x3c5620(0x1be))[_0x3c5620(0x2b6)](function() {
        const _0x29187c = _0x3c5620;
        $(this)[_0x29187c(0x1ba)]('[data-clone]')[_0x29187c(0x1f3)] < 0x2 ? $(this)['find'](_0x29187c(0x246))['hide']() : $(this)['find'](_0x29187c(0x246))[_0x29187c(0x25b)]();
    });
}

function cloneRemoveInput() {
    const _0x581154 = _0x52d52a;
    $(_0x581154(0x298))[_0x581154(0x2b6)](function() {
        const _0x4c6254 = _0x581154;
        console[_0x4c6254(0x1ec)]($(this)[_0x4c6254(0x1ba)](_0x4c6254(0x1d0))['length']), $(this)['find']('[data-clone-input]')[_0x4c6254(0x1f3)] < 0x2 ? $(this)[_0x4c6254(0x1ba)](_0x4c6254(0x24d))[_0x4c6254(0x218)]() : $(this)['find'](_0x4c6254(0x24d))[_0x4c6254(0x25b)]();
    });
}
$(_0x52d52a(0x246))['on'](_0x52d52a(0x2d5), function() {
    const _0x2ab77f = _0x52d52a,
        _0xfe1c5 = $(this)[_0x2ab77f(0x215)](_0x2ab77f(0x180))[_0x2ab77f(0x1f3)] > 0x0 ? $(this)['parents'](_0x2ab77f(0x180))['index']() : $(this)['parents'](_0x2ab77f(0x16f))[_0x2ab77f(0x234)](),
        _0x1b82ac = $(this)[_0x2ab77f(0x215)]('[data-clone]')[_0x2ab77f(0x1f3)] > 0x0 ? $(this)[_0x2ab77f(0x215)]('[data-clone]')[_0x2ab77f(0x284)](_0x2ab77f(0x21a)) : $(this)[_0x2ab77f(0x215)]('[data-display]')[_0x2ab77f(0x284)]('display');
    $(_0x2ab77f(0x1b5) + _0x1b82ac + '\x22]')['eq'](_0xfe1c5)[_0x2ab77f(0x258)](), $(_0x2ab77f(0x290) + _0x1b82ac + '\x22]')['eq'](_0xfe1c5)[_0x2ab77f(0x258)](), cloneRemove();
    let _0x17f757 = $(_0x2ab77f(0x247) + _0x1b82ac + '\x22]')['data'](_0x2ab77f(0x213)),
        _0x536967 = $('[data-clone=\x22' + _0x1b82ac + '\x22]')[_0x2ab77f(0x1f3)];
    console[_0x2ab77f(0x1ec)](_0x536967, _0x17f757), _0x536967 < _0x17f757 && (console[_0x2ab77f(0x1ec)](_0x2ab77f(0x25b)), $(_0x2ab77f(0x247) + _0x1b82ac + '\x22]')['show']()), validation();
}), $(_0x52d52a(0x24d))['on'](_0x52d52a(0x2d5), function() {
    const _0xd35e54 = _0x52d52a;
    let _0x5a6a6a = $(this)[_0xd35e54(0x2d7)]()['attr'](_0xd35e54(0x27f)),
        _0x5a3d7e = $(this)['parents'](_0xd35e54(0x1d0))[_0xd35e54(0x284)](_0xd35e54(0x1c0));
    $(this)[_0xd35e54(0x244)]('[data-clone-input]')['remove'](), $(_0xd35e54(0x20e) + _0x5a6a6a + '\x22]')[_0xd35e54(0x244)]('[data-display-input]')['remove']();
    let _0x142bb1 = $(_0xd35e54(0x205) + _0x5a3d7e + '\x22]')['data'](_0xd35e54(0x26a)),
        _0x37c4d2 = $('[data-clone-input=\x22' + _0x5a3d7e + '\x22]')[_0xd35e54(0x1f3)];
    _0x37c4d2 < _0x142bb1 && $(_0xd35e54(0x205) + _0x5a3d7e + '\x22]')[_0xd35e54(0x25b)](), validation();
}), $(_0x52d52a(0x177))['on'](_0x52d52a(0x2d5), function() {
    const _0x5e074b = _0x52d52a;
    let _0x16346b = $(this)[_0x5e074b(0x284)](_0x5e074b(0x1a4)),
        _0x24ecfe = $(this)[_0x5e074b(0x284)](_0x5e074b(0x213));
    var _0x2b7b6d = $(_0x5e074b(0x1b5) + _0x16346b + '\x22]')['eq'](0x0)[_0x5e074b(0x21a)](!![]),
        _0x16d03c = $(_0x5e074b(0x290) + _0x16346b + '\x22]')['eq'](0x0)[_0x5e074b(0x21a)](!![]);
    let _0x31f5c7 = '';
    $(this)[_0x5e074b(0x1ba)]('[data-form=\x22remove-clone\x22]')[_0x5e074b(0x25b)](), cloneRemove(), _0x2b7b6d[_0x5e074b(0x1ba)](_0x5e074b(0x1d0))[_0x5e074b(0x1ba)](_0x5e074b(0x259))['val'](''), _0x2b7b6d[_0x5e074b(0x1ba)](_0x5e074b(0x1d0))[_0x5e074b(0x1ba)]('select')[_0x5e074b(0x200)](''), _0x2b7b6d[_0x5e074b(0x1ba)](_0x5e074b(0x1d0))['find']('textarea')['val'](''), _0x2b7b6d['find']('[data-clone-input]')[_0x5e074b(0x286)](_0x5e074b(0x1a0))[_0x5e074b(0x258)](), _0x2b7b6d[_0x5e074b(0x1ba)](_0x5e074b(0x1d0))[_0x5e074b(0x1ba)]('[aria-label=\x22Remove\x20file\x22]')['click'](), _0x16d03c[_0x5e074b(0x1ba)]('[data-display-input]')[_0x5e074b(0x286)](_0x5e074b(0x1a0))[_0x5e074b(0x258)](), _0x2b7b6d['find']('input')[_0x5e074b(0x2b6)](function() {
        const _0x1e81a2 = _0x5e074b;
        if ($(this)[_0x1e81a2(0x26e)](_0x1e81a2(0x1d0))['length'] > 0x0) {
            let _0x8d03b1 = 0x0;
            const _0xed5dfe = $(this)[_0x1e81a2(0x26e)](_0x1e81a2(0x1d0))[_0x1e81a2(0x284)](_0x1e81a2(0x1c0));
            $(_0x1e81a2(0x22d) + _0xed5dfe + _0x1e81a2(0x1ce))['each'](function() {
                const _0x122145 = _0x1e81a2,
                    _0x1e308e = $(this)['attr']('name');
                if (_0x1e308e && _0x1e308e[_0x122145(0x16e)](_0x122145(0x210))) { const _0x4e629e = parseInt(_0x1e308e[_0x122145(0x2e3)]('-')[0x1]);!isNaN(_0x4e629e) && _0x4e629e > _0x8d03b1 && (_0x8d03b1 = _0x4e629e); }
            }), _0x8d03b1++, _0x31f5c7 = this[_0x1e81a2(0x27f)] + '-' + _0x8d03b1;
        } else _0x31f5c7 = this[_0x1e81a2(0x27f)] + '-' + (parseInt($(_0x1e81a2(0x1b5) + _0x16346b + '\x22]')[_0x1e81a2(0x25a)]()[_0x1e81a2(0x234)]()) + 0x1);
        $(this)['val'](''), $(this)[_0x1e81a2(0x2c3)](_0x1e81a2(0x27f), _0x31f5c7), $(this)[_0x1e81a2(0x2c3)](_0x1e81a2(0x2bb), _0x31f5c7);
    }), _0x2b7b6d['find'](_0x5e074b(0x188))['each'](function() {
        const _0x3796be = _0x5e074b;
        if ($(this)[_0x3796be(0x26e)](_0x3796be(0x1d0))[_0x3796be(0x1f3)] > 0x0) {
            let _0x3624e8 = 0x0;
            const _0x406928 = $(this)['closest'](_0x3796be(0x1d0))[_0x3796be(0x284)](_0x3796be(0x1c0));
            $(_0x3796be(0x22d) + _0x406928 + '\x22]\x20textarea')[_0x3796be(0x2b6)](function() {
                const _0x307240 = _0x3796be,
                    _0x3df676 = $(this)['attr'](_0x307240(0x27f));
                if (_0x3df676 && _0x3df676[_0x307240(0x16e)](_0x307240(0x210))) { const _0x37cb9f = parseInt(_0x3df676[_0x307240(0x2e3)]('-')[0x1]);!isNaN(_0x37cb9f) && _0x37cb9f > _0x3624e8 && (_0x3624e8 = _0x37cb9f); }
            }), _0x3624e8++, _0x31f5c7 = this['name'] + '-' + _0x3624e8;
        } else _0x31f5c7 = this[_0x3796be(0x27f)] + '-' + (parseInt($(_0x3796be(0x1b5) + _0x16346b + '\x22]')[_0x3796be(0x25a)]()[_0x3796be(0x234)]()) + 0x1);
        $(this)['val'](''), $(this)[_0x3796be(0x2c3)](_0x3796be(0x27f), _0x31f5c7), $(this)['attr'](_0x3796be(0x2bb), _0x31f5c7);
    }), _0x2b7b6d[_0x5e074b(0x1ba)]('select')['each'](function() {
        const _0x4f5201 = _0x5e074b;
        if ($(this)[_0x4f5201(0x26e)](_0x4f5201(0x1d0))['length'] > 0x0) {
            let _0x27fb2b = 0x0;
            const _0x1a5afe = $(this)['closest'](_0x4f5201(0x1d0))[_0x4f5201(0x284)](_0x4f5201(0x1c0));
            $(_0x4f5201(0x22d) + _0x1a5afe + _0x4f5201(0x280))['each'](function() {
                const _0x25f838 = _0x4f5201,
                    _0x69320 = $(this)[_0x25f838(0x2c3)]('name');
                if (_0x69320 && _0x69320['startsWith'](_0x25f838(0x210))) { const _0x37e8e5 = parseInt(_0x69320[_0x25f838(0x2e3)]('-')[0x1]);!isNaN(_0x37e8e5) && _0x37e8e5 > _0x27fb2b && (_0x27fb2b = _0x37e8e5); }
            }), _0x27fb2b++, _0x31f5c7 = this['name'] + '-' + _0x27fb2b;
        } else _0x31f5c7 = this[_0x4f5201(0x27f)] + '-' + (parseInt($(_0x4f5201(0x1b5) + _0x16346b + '\x22]')[_0x4f5201(0x25a)]()['index']()) + 0x1);
        $(this)[_0x4f5201(0x200)](''), $(this)[_0x4f5201(0x2c3)](_0x4f5201(0x27f), _0x31f5c7), $(this)['attr'](_0x4f5201(0x2bb), _0x31f5c7);
    }), _0x16d03c[_0x5e074b(0x1ba)]('[data-input-field]')[_0x5e074b(0x2b6)](function() {
        const _0x5ed3ce = _0x5e074b;
        if ($(this)[_0x5ed3ce(0x284)]('input-field')) {
            let _0x525c8a = 0x0;
            const _0x15e261 = $(this)[_0x5ed3ce(0x284)](_0x5ed3ce(0x21f))[_0x5ed3ce(0x2e3)]('-')[0x0];
            $(_0x5ed3ce(0x290) + _0x16346b + '\x22]\x20[data-input-field^=\x22' + _0x15e261 + '\x22]')['each'](function() {
                const _0xf4e0d2 = _0x5ed3ce,
                    _0x4c72c1 = $(this)[_0xf4e0d2(0x2c3)]('data-input-field'),
                    _0xce2bc6 = parseInt(_0x4c72c1[_0xf4e0d2(0x2e3)]('-')[0x1]);
                !isNaN(_0xce2bc6) && _0xce2bc6 > _0x525c8a && (_0x525c8a = _0xce2bc6);
            }), _0x525c8a++;
            const _0x1fb429 = _0x15e261 + '-' + _0x525c8a;
            $(this)['attr']('data-input-field', _0x1fb429);
        }
    }), $('[data-clone-wrapper=\x22' + _0x16346b + '\x22]')[_0x5e074b(0x29b)](_0x2b7b6d), $(_0x5e074b(0x257) + _0x16346b + '\x22]')[_0x5e074b(0x29b)](_0x16d03c), $(_0x5e074b(0x2c5) + _0x16346b + '\x22]')['each'](function() {
        const _0xe04bf7 = _0x5e074b;
        $(this)[_0xe04bf7(0x237)]($(this)[_0xe04bf7(0x215)](_0xe04bf7(0x1b5) + _0x16346b + '\x22]')[_0xe04bf7(0x234)]() + 0x1);
    }), $('[data-display-index=\x22' + _0x16346b + '\x22]')[_0x5e074b(0x2b6)](function() {
        const _0x5d7499 = _0x5e074b;
        $(this)[_0x5d7499(0x237)]($(this)[_0x5d7499(0x215)]('[data-display=\x22' + _0x16346b + '\x22]')[_0x5d7499(0x234)]() + 0x1);
    });
    let _0x1103ff = $(_0x5e074b(0x1b8) + _0x16346b + '\x22]\x20[data-clone=\x22' + _0x16346b + '\x22]')[_0x5e074b(0x1f3)];
    if (_0x1103ff >= _0x24ecfe) { $(this)['hide'](); return; }
    $(this)['show'](), validation();
}), $('[data-add-new-input]')['on'](_0x52d52a(0x2d5), function() {
    const _0x19e4a5 = _0x52d52a,
        _0x3ed9a1 = $(this)[_0x19e4a5(0x215)](_0x19e4a5(0x180))[_0x19e4a5(0x234)]();
    let _0x31c461 = $(this)[_0x19e4a5(0x284)](_0x19e4a5(0x2a5));
    var _0x5c2594 = $(_0x19e4a5(0x22d) + _0x31c461 + '\x22]')['eq'](0x0)[_0x19e4a5(0x21a)](!![]),
        _0x437414 = $(_0x19e4a5(0x172) + _0x31c461 + '\x22]')['eq'](0x0)[_0x19e4a5(0x21a)](!![]);
    let _0x4899a7 = $(this)['data'](_0x19e4a5(0x26a)),
        _0x339471 = 0x0;
    $(_0x19e4a5(0x22d) + _0x31c461 + _0x19e4a5(0x1ce))['each'](function() {
        const _0x5eb3b2 = _0x19e4a5,
            _0x925bad = $(this)[_0x5eb3b2(0x2c3)](_0x5eb3b2(0x27f));
        if (_0x925bad) { const _0x31e04d = parseInt(_0x925bad[_0x5eb3b2(0x2e3)]('-')[0x1]);!isNaN(_0x31e04d) && _0x31e04d > _0x339471 && (_0x339471 = _0x31e04d); }
    }), $('[data-clone-input=\x22' + _0x31c461 + _0x19e4a5(0x280))['each'](function() {
        const _0x270c65 = _0x19e4a5,
            _0x4e9b8f = $(this)['attr'](_0x270c65(0x27f));
        if (_0x4e9b8f) { const _0x5c40b3 = parseInt(_0x4e9b8f[_0x270c65(0x2e3)]('-')[0x1]);!isNaN(_0x5c40b3) && _0x5c40b3 > _0x339471 && (_0x339471 = _0x5c40b3); }
    }), $(_0x19e4a5(0x22d) + _0x31c461 + _0x19e4a5(0x189))[_0x19e4a5(0x2b6)](function() {
        const _0x24d616 = _0x19e4a5,
            _0x1db81f = $(this)[_0x24d616(0x2c3)](_0x24d616(0x27f));
        if (_0x1db81f) { const _0x71b0d0 = parseInt(_0x1db81f[_0x24d616(0x2e3)]('-')[0x1]);!isNaN(_0x71b0d0) && _0x71b0d0 > _0x339471 && (_0x339471 = _0x71b0d0); }
    }), _0x339471++, _0x5c2594[_0x19e4a5(0x1ba)](_0x19e4a5(0x259))[_0x19e4a5(0x2b6)](function() {
        const _0x55116 = _0x19e4a5,
            _0x1fe5f8 = $(this)[_0x55116(0x2c3)]('name');
        let _0x2f8465 = _0x1fe5f8 + '-' + _0x339471;
        $(this)[_0x55116(0x200)](''), $(this)[_0x55116(0x2c3)](_0x55116(0x27f), _0x2f8465), $(this)['attr']('data-name', _0x2f8465);
    }), _0x5c2594[_0x19e4a5(0x1ba)](_0x19e4a5(0x22f))['each'](function() {
        const _0x23c09c = _0x19e4a5,
            _0x567def = $(this)[_0x23c09c(0x2c3)](_0x23c09c(0x27f));
        let _0x5a83da = _0x567def + '-' + _0x339471;
        $(this)[_0x23c09c(0x200)](''), $(this)[_0x23c09c(0x2c3)](_0x23c09c(0x27f), _0x5a83da), $(this)[_0x23c09c(0x2c3)](_0x23c09c(0x2bb), _0x5a83da);
    }), _0x5c2594[_0x19e4a5(0x1ba)](_0x19e4a5(0x188))['each'](function() {
        const _0x244145 = _0x19e4a5,
            _0x42a561 = $(this)[_0x244145(0x2c3)](_0x244145(0x27f));
        let _0x451f63 = _0x42a561 + '-' + _0x339471;
        $(this)[_0x244145(0x200)](''), $(this)[_0x244145(0x2c3)](_0x244145(0x27f), _0x451f63), $(this)[_0x244145(0x2c3)](_0x244145(0x2bb), _0x451f63);
    }), _0x437414[_0x19e4a5(0x1ba)](_0x19e4a5(0x2c1))[_0x19e4a5(0x2b6)](function() {
        const _0x3ea9fd = _0x19e4a5;
        $(this)['attr'](_0x3ea9fd(0x222), _0x3ea9fd(0x210) + _0x339471);
    }), $(this)['siblings'](_0x19e4a5(0x179) + _0x31c461 + '\x22]')['append'](_0x5c2594), $('[data-display]')['eq'](_0x3ed9a1)[_0x19e4a5(0x1ba)](_0x19e4a5(0x2a1) + _0x31c461 + '\x22]')[_0x19e4a5(0x29b)](_0x437414), $(_0x19e4a5(0x255) + _0x31c461 + '\x22]')['each'](function() {
        const _0x41d1fa = _0x19e4a5;
        $(this)[_0x41d1fa(0x237)]($(this)[_0x41d1fa(0x215)]('[data-clone-input=\x22' + _0x31c461 + '\x22]')['index']() + 0x1);
    }), $(_0x19e4a5(0x1cb) + _0x31c461 + '\x22]')[_0x19e4a5(0x2b6)](function() {
        const _0x2dcec8 = _0x19e4a5;
        $(this)[_0x2dcec8(0x237)]($(this)[_0x2dcec8(0x215)]('[data-display-input=\x22' + _0x31c461 + '\x22]')[_0x2dcec8(0x234)]() + 0x1);
    });
    let _0x199082 = $(_0x19e4a5(0x179) + _0x31c461 + '\x22]\x20[data-clone-input=\x22' + _0x31c461 + '\x22]')[_0x19e4a5(0x1f3)];
    if (_0x199082 >= _0x4899a7) { $(this)[_0x19e4a5(0x218)](); return; }
    $(this)['show'](), cloneRemoveInput(), validation();
}), $(_0x52d52a(0x2eb))['on']('click', function() {
    const _0x445490 = _0x52d52a,
        _0x3b3030 = $(this)[_0x445490(0x284)](_0x445490(0x2bf));
    $('input[name=\x22' + _0x3b3030 + '\x22]')[_0x445490(0x200)](''), validation();
});

function andLogic() {
    const _0x37d025 = _0x52d52a;
    conditionalResult && (steps['eq'](x)[_0x37d025(0x1ba)](_0x37d025(0x288))[_0x37d025(0x218)](), steps['eq'](x)[_0x37d025(0x1ba)](_0x37d025(0x288))['each'](function() {
        const _0xedd24e = _0x37d025;

        function _0x589388(_0x23a486) {
            const _0xd6e050 = _0x46cd,
                _0x176519 = _0x23a486[_0xd6e050(0x2e3)]('&'),
                _0x52837c = [];
            return _0x176519[_0xd6e050(0x2b9)](_0x448e90 => {
                const [_0x521787, _0x48f587] = _0x448e90['split']('=');
                _0x52837c['push']({ 'field': _0x521787, 'value': _0x48f587 });
            }), _0x52837c;
        }
        const _0x48de0a = $(this)[_0xedd24e(0x2c3)](_0xedd24e(0x266)),
            _0x48d64a = _0x589388(_0x48de0a);

        function _0x3b710a(_0xe46435, _0x35f073) { return _0x35f073['some']((_0x10a6cd, _0x1bad52) => { const _0x5f3119 = _0x46cd; if (_0xe46435[0x0] && _0x10a6cd[_0x5f3119(0x1d9)] === _0xe46435[0x0][_0x5f3119(0x1d9)]) return _0xe46435[_0x5f3119(0x229)]((_0x4d382e, _0x48659c) => _0x35f073[_0x1bad52 + _0x48659c] && _0x35f073[_0x1bad52 + _0x48659c]['field'] === _0x4d382e['field'] && _0x35f073[_0x1bad52 + _0x48659c][_0x5f3119(0x186)] === _0x4d382e[_0x5f3119(0x186)]); return ![]; }); }
        const _0x2065d7 = _0x3b710a(_0x48d64a, all_data);
        _0x2065d7 ? $(this)[_0xedd24e(0x25b)]() : $(this)[_0xedd24e(0x218)]();
    }));
}
$(_0x52d52a(0x1a8))['addClass'](_0x52d52a(0x218)), $('[data-progressive-input]')['on'](_0x52d52a(0x259), function() {
    const _0x48d5f9 = _0x52d52a,
        _0x31fbe4 = $(this)['data']('progressive-input'),
        _0x5204dd = $(this)['val'](),
        _0x2723c9 = $(_0x48d5f9(0x2d2) + _0x31fbe4 + '\x22]')[_0x48d5f9(0x284)](_0x48d5f9(0x23c));
    let _0x1d3e11 = $(_0x48d5f9(0x2d2) + _0x31fbe4 + '\x22][data-progressive-input-value=\x22' + _0x5204dd + '\x22]'),
        _0xc61719 = $(_0x48d5f9(0x2d2) + _0x31fbe4 + _0x48d5f9(0x248));
    $('[data-progressive-target=\x22' + _0x31fbe4 + '\x22]')[_0x48d5f9(0x272)]('f-hide'), $(_0x48d5f9(0x2d2) + _0x31fbe4 + '\x22]')['removeClass'](_0x48d5f9(0x1e0));
    _0x5204dd !== '' && (_0x2723c9 === '*' && _0x5204dd !== '' ? (_0xc61719[_0x48d5f9(0x1b3)](_0x48d5f9(0x193)), _0xc61719[_0x48d5f9(0x272)]('f-show')) : (_0x1d3e11[_0x48d5f9(0x1b3)](_0x48d5f9(0x193)), _0x1d3e11[_0x48d5f9(0x272)](_0x48d5f9(0x1e0))));

    function _0x5be944(_0xfd4981) {
        const _0x127304 = _0x48d5f9;
        _0xfd4981 && ($('[data-progressive-input=\x22' + _0xfd4981 + '\x22]')[_0x127304(0x200)]() !== '' && $(_0x127304(0x1b6) + _0xfd4981 + '\x22]')[_0x127304(0x29a)](_0x127304(0x259)));
    }
    let _0x2ad12f = $(_0x48d5f9(0x2d2) + _0x31fbe4 + '\x22]')[_0x48d5f9(0x1ba)](_0x48d5f9(0x1e8))[_0x48d5f9(0x284)](_0x48d5f9(0x18f));
    _0x5be944(_0x2ad12f), $(_0x48d5f9(0x2a3))[_0x48d5f9(0x2b6)](function() {
        const _0x160244 = _0x48d5f9,
            _0x1f5f38 = $(this)['data'](_0x160244(0x18f));
        $(_0x160244(0x2d2) + _0x1f5f38 + '\x22]')[_0x160244(0x1b3)]('f-show'), $('[data-progressive-target=\x22' + _0x1f5f38 + '\x22]')[_0x160244(0x272)]('f-hide');
    });
});

function addClickClass() {
    const _0x442db1 = _0x52d52a,
        _0x46383f = $(this)[_0x442db1(0x284)](_0x442db1(0x224)),
        _0x24f069 = $(this)[_0x442db1(0x2c3)](_0x442db1(0x27f));
    $(_0x442db1(0x1f8) + _0x24f069 + '\x22]')[_0x442db1(0x244)]()[_0x442db1(0x1b3)](_0x46383f), $(this)['is'](':checked') && $(this)[_0x442db1(0x244)]()[_0x442db1(0x272)](_0x46383f);
}
$(_0x52d52a(0x2a0))['on'](_0x52d52a(0x18d), addClickClass);

function updateCounter(_0x130953) {
    const _0x256794 = _0x52d52a;
    var _0x3de244 = new Date(),
        _0x2dc99d = _0x3de244[_0x256794(0x1a9)](),
        _0x3c7666 = btoa(_0x256794(0x2b1)),
        _0x59071b = btoa(_0x2dc99d[_0x256794(0x1e4)]()),
        _0x4c15e8 = getCookie(_0x3c7666);
    if (!_0x4c15e8 || _0x4c15e8 !== _0x59071b) {} else console[_0x256794(0x1ec)]('Counter\x20already\x20updated\x20for\x20this\x20month.');
}

function getCookie(_0x5e25ae) { const _0x91038f = _0x52d52a; var _0x326922 = null; if (document['cookie'] && document[_0x91038f(0x1c8)] !== '') { var _0x51412c = document[_0x91038f(0x1c8)][_0x91038f(0x2e3)](';'); for (var _0x42d01c = 0x0; _0x42d01c < _0x51412c['length']; _0x42d01c++) { var _0x2721f8 = _0x51412c[_0x42d01c]['trim'](); if (_0x2721f8[_0x91038f(0x2be)](0x0, _0x5e25ae['length'] + 0x1) === _0x5e25ae + '=') { _0x326922 = decodeURIComponent(_0x2721f8[_0x91038f(0x2be)](_0x5e25ae[_0x91038f(0x1f3)] + 0x1)); break; } } } return _0x326922; }
updateCounter(), scrollTop(), cloneRemove(), cloneRemoveInput();
const formlyUrlParams = new URLSearchParams(window[_0x52d52a(0x26f)][_0x52d52a(0x283)]),
    formlySupportParam = formlyUrlParams[_0x52d52a(0x28f)](_0x52d52a(0x1c2)),
    showButton = formlySupportParam === _0x52d52a(0x2a6),
    passIcon = _0x52d52a(0x2cb),
    failIcon = _0x52d52a(0x174);
let isScriptLoaded = !![],
    scriptLocation = _0x52d52a(0x2ca),
    isMultistepAttributePresent = !![],
    isMultistepOnFormElement = !![],
    areButtonsPresent = !![],
    isNextBtnOnSubmit = ![],
    isSubmitBtnOnSubmit = !![],
    isBackBtnOnSubmit = ![],
    formType = logicExtra ? _0x52d52a(0x170) : _0x52d52a(0x28b),
    resultStatus = _0x52d52a(0x2b2),
    scriptSrcAdded = '';

function isElementPresent(_0x31117b, _0x137485) { const _0x4fa3d2 = _0x52d52a; return document[_0x4fa3d2(0x18b)]('[' + _0x137485 + '=\x22' + _0x31117b + '\x22]') !== null; }
isMultistepAttributePresent = isElementPresent(_0x52d52a(0x2b3), 'data-form');
const multistepForm = document[_0x52d52a(0x18b)]('form[data-form=\x22multistep\x22]'),
    formStepLength = multistepForm[_0x52d52a(0x21e)](_0x52d52a(0x277))[_0x52d52a(0x1f3)];
isMultistepOnFormElement = multistepForm !== null;
const multistepContainer = document['querySelector'](_0x52d52a(0x294)),
    nextBtnExist = multistepContainer[_0x52d52a(0x18b)](_0x52d52a(0x1cc)),
    backBtnExist = multistepContainer[_0x52d52a(0x18b)](_0x52d52a(0x227)),
    submitBtnExist = multistepContainer[_0x52d52a(0x18b)](_0x52d52a(0x2d3));
areButtonsPresent = nextBtnExist !== null && backBtnExist !== null && submitBtnExist !== null, isNextBtnOnSubmit = nextBtnExist && nextBtnExist[_0x52d52a(0x17c)]['toLowerCase']() === _0x52d52a(0x259), isSubmitBtnOnSubmit = submitBtnExist && submitBtnExist[_0x52d52a(0x17c)][_0x52d52a(0x1e3)]() === _0x52d52a(0x259) && submitBtnExist['type'][_0x52d52a(0x1e3)]() === _0x52d52a(0x278), isBackBtnOnSubmit = backBtnExist && backBtnExist['tagName'][_0x52d52a(0x1e3)]() === _0x52d52a(0x259);
const checkPowerup = _0x558736 => document['querySelector'](_0x558736) !== null,
    progressBarAttr = checkPowerup(_0x52d52a(0x184)),
    progressIndicatorAttr = checkPowerup(_0x52d52a(0x253)),
    customProgressAttr = checkPowerup(_0x52d52a(0x253)),
    cardDivAttr = checkPowerup(_0x52d52a(0x2e5)),
    currentStepAttr = checkPowerup(_0x52d52a(0x297)),
    totalStepAttr = checkPowerup('[data-text=\x22total-steps\x22]'),
    enterAttr = checkPowerup('[data-enter=\x22true\x22]'),
    submitAttr = checkPowerup(_0x52d52a(0x209)),
    radioSkipAttr = checkPowerup(_0x52d52a(0x19b)),
    customCheckboxAttr = checkPowerup(_0x52d52a(0x1f7)),
    recapatchaAttr = checkPowerup('[data-callback=\x22recaptcha\x22]');
(!isScriptLoaded || scriptLocation !== 'head' || !isMultistepAttributePresent || !isMultistepOnFormElement || !areButtonsPresent || isNextBtnOnSubmit || !isSubmitBtnOnSubmit || isBackBtnOnSubmit) && (resultStatus = _0x52d52a(0x27b));

function isScriptUrlMatch(_0x529dc0, _0x2468f9) { const _0x30d5ce = _0x52d52a; for (var _0x1061b8 = 0x0; _0x1061b8 < _0x2468f9[_0x30d5ce(0x1f3)]; _0x1061b8++) { if (_0x529dc0[_0x30d5ce(0x2e7)](_0x2468f9[_0x1061b8])) return !![]; } return ![]; }
var keywordsToCheck = ['videsigns', _0x52d52a(0x1ac)],
    scripts = document[_0x52d52a(0x1d1)](_0x52d52a(0x1fd)),
    matchedScripts = [];
for (var i = 0x0; i < scripts[_0x52d52a(0x1f3)]; i++) {
    var scriptSrcs = scripts[i][_0x52d52a(0x252)];
    isScriptUrlMatch(scriptSrcs, keywordsToCheck) && matchedScripts[_0x52d52a(0x241)](scriptSrcs);
}
if (matchedScripts['length'] > 0x0) {
    scriptSrcAdded = matchedScripts;
    const script = document['querySelector'](_0x52d52a(0x228) + scriptSrcAdded + '\x22]');
    script && (scriptLocation = script['parentNode']['tagName'] === _0x52d52a(0x238) ? _0x52d52a(0x2c9) : _0x52d52a(0x262));
} else scriptSrcAdded = _0x52d52a(0x250) + failIcon;
const newElement = document['createElement'](_0x52d52a(0x2a8)),
    newStyle = document['createElement']('style');
newStyle[_0x52d52a(0x282)] = _0x52d52a(0x207), document[_0x52d52a(0x2ca)][_0x52d52a(0x2b0)](newStyle);
showButton && document[_0x52d52a(0x195)][_0x52d52a(0x2b0)](newElement);
newElement[_0x52d52a(0x282)] = _0x52d52a(0x260) + formType + _0x52d52a(0x2ae) + scriptSrcAdded + _0x52d52a(0x1a1) + scriptLocation + _0x52d52a(0x2ba) + (isMultistepOnFormElement ? passIcon : failIcon) + _0x52d52a(0x1c7) + (formStepLength > 0x0 ? passIcon : failIcon) + _0x52d52a(0x202) + formStepLength + _0x52d52a(0x1a7) + (nextBtnExist ? passIcon : failIcon) + _0x52d52a(0x245) + (isNextBtnOnSubmit ? failIcon : passIcon) + _0x52d52a(0x232) + (backBtnExist ? passIcon : failIcon) + '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Back\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button' + (isBackBtnOnSubmit ? failIcon : passIcon) + _0x52d52a(0x2a4) + (backBtnExist ? passIcon : failIcon) + '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Submit\x20button\x20attribute\x20IS\x20on\x20Form\x20Submit\x20Button\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + (isSubmitBtnOnSubmit ? passIcon : failIcon) + _0x52d52a(0x1dc) + (progressBarAttr && progressIndicatorAttr ? _0x52d52a(0x270) + passIcon + '</strong>' : '') + _0x52d52a(0x1eb) + (customProgressAttr ? _0x52d52a(0x1bf) + passIcon + _0x52d52a(0x2d4) : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + (cardDivAttr ? _0x52d52a(0x1f1) + passIcon + '</strong>' : '') + _0x52d52a(0x1eb) + (currentStepAttr ? _0x52d52a(0x275) + passIcon + _0x52d52a(0x2d4) : '') + _0x52d52a(0x1eb) + (totalStepAttr ? _0x52d52a(0x1d8) + passIcon + _0x52d52a(0x2d4) : '') + _0x52d52a(0x1eb) + (enterAttr ? _0x52d52a(0x1dd) + passIcon + _0x52d52a(0x2d4) : '') + _0x52d52a(0x1eb) + (submitAttr ? _0x52d52a(0x20c) + passIcon + _0x52d52a(0x2d4) : '') + _0x52d52a(0x1eb) + (radioSkipAttr ? _0x52d52a(0x1a2) + passIcon + _0x52d52a(0x2d4) : '') + _0x52d52a(0x1eb) + (customCheckboxAttr ? _0x52d52a(0x18e) + passIcon + _0x52d52a(0x2d4) : '') + _0x52d52a(0x1eb) + (recapatchaAttr ? '<strong\x20class=\x22f-text-white\x22>ReCAPTCHA\x20' + passIcon + _0x52d52a(0x2d4) : '') + _0x52d52a(0x289);

function openNav() {
    const _0xa3a14e = _0x52d52a;
    document[_0xa3a14e(0x206)](_0xa3a14e(0x181))[_0xa3a14e(0x2dc)][_0xa3a14e(0x26c)] = '35%', document[_0xa3a14e(0x206)](_0xa3a14e(0x181))[_0xa3a14e(0x2dc)][_0xa3a14e(0x24f)] = _0xa3a14e(0x236);
}

function closeNav() {
    const _0x22b4bb = _0x52d52a;
    document[_0x22b4bb(0x206)](_0x22b4bb(0x181))[_0x22b4bb(0x2dc)][_0x22b4bb(0x26c)] = '0', document[_0x22b4bb(0x206)](_0x22b4bb(0x181))[_0x22b4bb(0x2dc)][_0x22b4bb(0x24f)] = _0x22b4bb(0x27c);
}