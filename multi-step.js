// 15 Mar 2024
// Bug fix
// 1. Updated counter tracking feature

const _0x5bdb0a = _0x2d8d;
(function(_0x1fe290, _0xee92d0) {
    const _0x2eb6bc = _0x2d8d,
        _0x306314 = _0x1fe290();
    while (!![]) {
        try {
            const _0x436d59 = parseInt(_0x2eb6bc(0x1e7)) /
                0x1 + -parseInt(_0x2eb6bc(0x164)) / 0x2 * (parseInt(_0x2eb6bc(0x182)) / 0x3) + parseInt(
                    _0x2eb6bc(0xe2)) / 0x4 * (-parseInt(_0x2eb6bc(0x150)) / 0x5) + -parseInt(_0x2eb6bc(
                    0x120)) / 0x6 * (-parseInt(_0x2eb6bc(0x1bb)) / 0x7) + -parseInt(_0x2eb6bc(0xfa)) / 0x8 +
                -parseInt(_0x2eb6bc(0xf2)) / 0x9 * (parseInt(_0x2eb6bc(0x219)) / 0xa) + parseInt(
                    _0x2eb6bc(0x20f)) / 0xb;
            if (_0x436d59 === _0xee92d0) break;
            else _0x306314['push'](_0x306314['shift']());
        } catch (_0x54fd0b) {
            _0x306314['push'](
                _0x306314['shift']());
        }
    }
}(_0x544b, 0x59970));
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
    progressbarClone = $('[data-form=\x22progress-indicator\x22]')[_0x5bdb0a(0xf9)](),
    progressbar, weightedSelection = $(_0x5bdb0a(0x247))['data'](_0x5bdb0a(0x144)),
    weightedSelectionRange = $(_0x5bdb0a(0x24b))[_0x5bdb0a(0x1b0)](_0x5bdb0a(0x13a)),
    selectMultiple = $(_0x5bdb0a(0x11f))[_0x5bdb0a(0x1b0)](_0x5bdb0a(0x1d1)),
    customError = $(_0x5bdb0a(0x242))[_0x5bdb0a(0x1b0)](_0x5bdb0a(0xe1)),
    reinitIX = $(_0x5bdb0a(0x107))[_0x5bdb0a(0x1b0)](_0x5bdb0a(0x188)),
    memory = $(_0x5bdb0a(0x1f2))[_0x5bdb0a(0x1b0)](_0x5bdb0a(0x18f)),
    quiz = $('[data-quiz]')['data'](_0x5bdb0a(0x1fe));
const urlFormly = new URL(window[_0x5bdb0a(0x106)][_0x5bdb0a(0x14c)]);
let _params = $(_0x5bdb0a(0xda))[_0x5bdb0a(0x1b0)]('query-param'),
    logicExtra = $(_0x5bdb0a(0x118))[_0x5bdb0a(0x1b0)]('logic-extra'),
    oldSubmitText = $(_0x5bdb0a(0x1f6))[_0x5bdb0a(0x17b)](),
    oldResetText = $(_0x5bdb0a(0x155))[_0x5bdb0a(0x142)](),
    formReset = $(_0x5bdb0a(0x118))[_0x5bdb0a(0x1b0)](_0x5bdb0a(0x132)),
    resetDelay = $(_0x5bdb0a(0x1c2))[_0x5bdb0a(0x1b0)](_0x5bdb0a(0x15d)) ? $(_0x5bdb0a(0x1c2))[
        _0x5bdb0a(0x1b0)](_0x5bdb0a(0x15d)) : 0x7d0,
    redirectDelay = $(_0x5bdb0a(0x1fb))[_0x5bdb0a(0x1b0)](_0x5bdb0a(0x112)) ? $(_0x5bdb0a(0x1fb))[
        _0x5bdb0a(0x1b0)]('redirect-delay') : 0x64,
    phoneFormat = $('[data-form=\x22multistep\x22]')[_0x5bdb0a(0x1b0)]('phone-validation'),
    scrollToTop = $('[data-form=\x22multistep\x22]')['data'](_0x5bdb0a(0x22b)),
    trackLastStep = $(_0x5bdb0a(0xfe))[_0x5bdb0a(0x1b0)](_0x5bdb0a(0x1ac)),
    conditionalResult = $(_0x5bdb0a(0x20a))[_0x5bdb0a(0x1b0)]('conditional-result') === _0x5bdb0a(
        0x1f9),
    scrollTopOffset = parseInt($(_0x5bdb0a(0x118))[_0x5bdb0a(0x1b0)](_0x5bdb0a(0x217)));
const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
savedFilledInput = JSON['parse'](localStorage[_0x5bdb0a(0x223)]('filledInput')), formlyLastStep =
    JSON['parse'](localStorage[_0x5bdb0a(0x223)](_0x5bdb0a(0x16a))), formlyLastStepAnswer = JSON[
        _0x5bdb0a(0x1ed)](localStorage[_0x5bdb0a(0x223)](_0x5bdb0a(0x201)));
trackLastStep && (formlyLastStep > x && (x = formlyLastStep), formlyLastStepAnswer && (selections =
    formlyLastStepAnswer));
$(_0x5bdb0a(0x21b))[_0x5bdb0a(0x179)](function() {
    const _0x5b4816 = _0x5bdb0a;
    ogCloneArr[_0x5b4816(0x1cd)]({
        'name': $(this)[_0x5b4816(0x1b0)](_0x5b4816(
            0xf9)),
        'element': $(this)[_0x5b4816(0xf9)](!![]),
        'display': $('[data-display=\x22' +
            $(this)[_0x5b4816(0x1b0)](_0x5b4816(0xf9)) + '\x22]')['eq'](0x0)[_0x5b4816(0xf9)](!
            ![])
    });
});
$('div.g-recaptcha')[_0x5bdb0a(0x1b9)] > 0x0 && (notRobot = ![]);

function recaptcha(_0x2646b6) { notRobot = !![]; }
$('[data-count-card]')[_0x5bdb0a(0x1b9)] > 0x0 &&
    (countCard = $('[data-count-card]')[_0x5bdb0a(0x1b0)]('count-card'));
$(_0x5bdb0a(0xfb))[_0x5bdb0a(0x130)](), $(progressbarClone)[_0x5bdb0a(0x110)](_0x5bdb0a(0x205)), $(
    _0x5bdb0a(0x22a))[_0x5bdb0a(0x1b2)]()[_0x5bdb0a(0x1ec)](), $(_0x5bdb0a(0x1f6))['hide'](), $(
    '[data-form-ms=\x22submit-btn\x22]')[_0x5bdb0a(0x130)](), steps[_0x5bdb0a(0x179)](
    function() {
        const _0x4b7aaa = _0x5bdb0a;
        $(_0x4b7aaa(0x22a))[_0x4b7aaa(0x1ad)](progressbarClone[_0x4b7aaa(0xf9)](!![], !![]));
    }), $(
    _0x5bdb0a(0x178))[_0x5bdb0a(0x130)]();
countCard ? (curStep = curStep + 0x1, totalSteps = steps[_0x5bdb0a(0x1b9)], $(_0x5bdb0a(0x125))[
    'text'](totalSteps)) : ($(steps[x])[_0x5bdb0a(0x1b0)]('card') ? curStep = curStep + 0x0 :
    curStep = curStep + 0x1, totalSteps = $(_0x5bdb0a(0x1ef))[_0x5bdb0a(0x1b9)], $(_0x5bdb0a(
        0x125))['text'](totalSteps), $(_0x5bdb0a(0xf4))[_0x5bdb0a(0x179)](function() {
        const
            _0x336798 = _0x5bdb0a;
        $($(_0x336798(0x191))[$(this)['index']()])[_0x336798(0x130)]();
    }));
progressbar = $('[data-form=\x22progress\x22]')[_0x5bdb0a(0x1b2)](), $(
    '[data-form=\x22progress-indicator\x22]')['on'](_0x5bdb0a(0x1c5), clickableIndicator), $(
    _0x5bdb0a(0x1b8))[_0x5bdb0a(0x142)](curStep), steps[_0x5bdb0a(0x130)](), $(_0x5bdb0a(0x16e))[
    _0x5bdb0a(0x130)](), $(_0x5bdb0a(0x176))['each'](function() {
    const _0x580d80 = _0x5bdb0a;
    $(this)[_0x580d80(0x1f0)](_0x580d80(0xec), _0x580d80(0xde));
});

function getParams() {
    const _0x115d83 = _0x5bdb0a;
    urlFormly[_0x115d83(0x1c3)][_0x115d83(0x243)](function(_0x430a29, _0x3f0f10) {
        const _0x466426 =
            _0x115d83;
        searchQ[_0x466426(0x1cd)]({ 'val': _0x430a29, 'key': _0x3f0f10 });
    });
}

function getSafe(_0x532d27, _0x31edc7) {
    try { return _0x532d27(); } catch (
        _0x43e007) { return _0x31edc7; }
}

function _0x2d8d(_0x5b9b29, _0x5c57eb) {
    const _0x544bfa = _0x544b();
    return _0x2d8d = function(
        _0x2d8d76, _0x821c9d) {
        _0x2d8d76 = _0x2d8d76 - 0xda;
        let _0x242b62 = _0x544bfa[
            _0x2d8d76];
        return _0x242b62;
    }, _0x2d8d(_0x5b9b29, _0x5c57eb);
}

function phoneAutoFormat(_0x13d584) {
    var _0x530719 = '';
    return function(_0x58a3b7) {
        const
            _0x8a1b20 = _0x2d8d;
        var _0x3b10b9 = '',
            _0xa4d878 = _0x58a3b7[_0x8a1b20(0x181)](/\D/g, ''),
            _0x3abbb5 = 0x0,
            _0x56649c = 0x0;
        while (_0x3abbb5 < _0xa4d878['length'] && _0x56649c < _0x13d584[_0x8a1b20(
                0x1b9)]) {
            _0x13d584[_0x56649c] === 'x' ? (_0x3b10b9 += _0xa4d878[_0x3abbb5],
                _0x3abbb5++) : _0x3b10b9 += _0x13d584[_0x56649c], _0x56649c++;
        }
        if (_0x58a3b7[_0x8a1b20(
                0x1b9)] < _0x530719['length']) {
            var _0x556bea = _0x13d584['slice'](_0x56649c);
            _0x3b10b9 += _0x556bea['replace'](/x/g, '');
        }
        return _0x530719 = _0x3b10b9, _0x3b10b9;
    };
}

function validateURL(_0x5a4e61) { return urlPattern['test'](_0x5a4e61) ? !![] : ![]; }
quiz &&
    steps[_0x5bdb0a(0x179)](function() {
        const _0xf08cec = _0x5bdb0a;
        $(this)[_0xf08cec(0x1b2)]()[_0xf08cec(0x1f0)](_0xf08cec(0x19d), !![]), $(this)['children']()[
            _0xf08cec(0x1f0)]('data-radio-delay', 0xfa);
    });

function disableBtn(_0x12a16a) {
    const _0xc6bfc5 = _0x5bdb0a;
    fill = ![], !customError && ($(_0xc6bfc5(0x1aa))[_0xc6bfc5(0xf7)]({
            'opacity': _0xc6bfc5(
                0x1ca),
            'pointer-events': _0xc6bfc5(0x104)
        }), $(_0xc6bfc5(0x1aa))[_0xc6bfc5(0x1a9)](
            _0xc6bfc5(0x202)), $('[data-form=\x22submit-btn\x22]')[_0xc6bfc5(0xf7)]
        ({ 'opacity': _0xc6bfc5(0x1ca), 'pointer-events': _0xc6bfc5(0x104) }), $(_0xc6bfc5(0x1f6))[
            'addClass']('disabled'), $(_0xc6bfc5(0xee))['css']
        ({ 'opacity': '0.4', 'pointer-events': _0xc6bfc5(0x104) }), $(
            '[data-form-ms=\x22submit-btn\x22]')[_0xc6bfc5(0x1a9)](_0xc6bfc5(0x202)));
}

function enableBtn() {
    const _0x371985 = _0x5bdb0a;
    fill = !![], $(_0x371985(0x1aa))['css']({ 'pointer-events': _0x371985(0x1e9), 'opacity': '1' }),
        $('[data-form=\x22next-btn\x22]')[_0x371985(0x110)]('disabled'), $(_0x371985(0x1f6))['css']
        ({ 'pointer-events': _0x371985(0x1e9), 'opacity': '1' }), $(_0x371985(0x1f6))['removeClass'](
            _0x371985(0x202)), $(_0x371985(0xee))['css']({
            'pointer-events': _0x371985(
                0x1e9),
            'opacity': '1'
        }), $(_0x371985(0xee))[_0x371985(0x110)](_0x371985(0x202));
}

function saveLastAnswer(_0x35a3ab) {
    const _0x26a0f7 = _0x5bdb0a;
    localStorage['removeItem'](_0x26a0f7(0x201)), localStorage[_0x26a0f7(0x1e0)](_0x26a0f7(0x201),
        JSON[_0x26a0f7(0x13c)](_0x35a3ab));
}

function saveFilledInput() {
    const _0x1f2a3f = _0x5bdb0a;
    $(_0x1f2a3f(0x196))['not']('[type=\x22submit\x22]')['each'](function() {
            const _0x26efb5 =
                _0x1f2a3f;
            $(this)[_0x26efb5(0x1f0)](_0x26efb5(0xec)) === _0x26efb5(0x1f4) || $(this)[_0x26efb5(0x1f0)]
                (_0x26efb5(0xec)) === 'radio' ? $(this)[_0x26efb5(0x1cb)]('checked') && (filledInput[
                        _0x26efb5(0x127)](_0x368abc => _0x368abc['inputName'] === $(this)[_0x26efb5(0x1f0)](
                        'name')) ? (filledInput = filledInput[_0x26efb5(0x16d)](_0x3e7af7 => _0x3e7af7[
                            _0x26efb5(0x241)] !== $(this)['attr'](_0x26efb5(0x14d))), $(this)[_0x26efb5(0x17b)]
                        () !== '' && filledInput[_0x26efb5(0x1cd)]({
                            'inputName': $(this)[_0x26efb5(0x1f0)](
                                _0x26efb5(0x14d)),
                            'value': $(this)['val']()
                        })) : $(this)[_0x26efb5(0x17b)]() !==
                    '' && filledInput[_0x26efb5(0x1cd)]({
                        'inputName': $(this)['attr'](_0x26efb5(
                            0x14d)),
                        'value': $(this)['val']()
                    })) : filledInput['some'](_0x20e9ff => _0x20e9ff[
                    _0x26efb5(0x241)] === $(this)[_0x26efb5(0x1f0)](_0x26efb5(0x14d))) ? (filledInput =
                    filledInput['filter'](_0x4749f7 => _0x4749f7['inputName'] !== $(this)[_0x26efb5(0x1f0)](
                        _0x26efb5(0x14d))), $(this)[_0x26efb5(0x17b)]() !== '' && filledInput[_0x26efb5(
                        0x1cd)]({
                        'inputName': $(this)[_0x26efb5(0x1f0)](_0x26efb5(0x14d)),
                        'value': $(this)[
                            'val']()
                    })) : $(this)['val']() !== '' && filledInput[_0x26efb5(0x1cd)]
                ({
                    'inputName': $(this)[_0x26efb5(0x1f0)](_0x26efb5(0x14d)),
                    'value': $(this)['val']
                        ()
                });
        }), trackLastStep && (formlyLastStep > x ? lastStep = formlyLastStep : lastStep = x,
            localStorage['removeItem']('formlyLastStep'), localStorage[_0x1f2a3f(0x1e0)]('formlyLastStep',
                lastStep)), localStorage[_0x1f2a3f(0x21f)](_0x1f2a3f(0x1ab)), localStorage[_0x1f2a3f(0x1e0)]
        ('filledInput', JSON[_0x1f2a3f(0x13c)](filledInput));
}

function scrollTop() {
    const _0x58bda4 = _0x5bdb0a;
    scrollToTop && $(_0x58bda4(0x121))['animate']({
        'scrollTop': $(_0x58bda4(0x118))[_0x58bda4(0x227)]
            ()['top'] - scrollTopOffset
    }, 0x3e8);
}

function updateStep() {
    const _0x20694a = _0x5bdb0a;
    scrollTop(), skip = ![], $(_0x20694a(0x23c))[_0x20694a(0x110)](_0x20694a(0x202));
    $('[data-clickable]')[_0x20694a(0x1b0)]('clickable') && (steps[_0x20694a(0x109)](
            ':input[required]')[_0x20694a(0x179)](function() {
            const _0x240c58 = _0x20694a;
            $($('[data-form=\x22custom-progress-indicator\x22]')[$(this)[_0x240c58(0x246)](_0x240c58(
                0x15b))[_0x240c58(0x137)]()]), $(this)['val']() === '' && emptyInput++;
        }), emptyInput >
        0x0 ? $(_0x20694a(0x172))[_0x20694a(0x1a9)]('disabled') : $(_0x20694a(0x172))[_0x20694a(
            0x110)](_0x20694a(0x202)));
    $(_0x20694a(0x23c))[_0x20694a(0x110)](_0x20694a(0x205)), $(_0x20694a(0x23c))['addClass'](
            _0x20694a(0x202)), $($(_0x20694a(0x23c))[x])[_0x20694a(0x1a9)](_0x20694a(0x205)), selection =
        selections[_0x20694a(0x16d)](_0x170e21 => _0x170e21[_0x20694a(0x157)] === x - 0x1);
    next && (x = getSafe(() => selection[0x0][_0x20694a(0x22e)]) ? parseInt(getSafe(() => selection[
        0x0]['skipTo'])) : x);
    $(_0x20694a(0xf1))[_0x20694a(0x130)](), steps[_0x20694a(0x130)]();
    reinitIX === !![] && window['Webflow']['destroy']();
    $(progressbar)[_0x20694a(0x110)](_0x20694a(0x205));
    for (i = 0x0; i <= x; i++) {
        countCard ? $(
            progressbar[i])[_0x20694a(0x1a9)](_0x20694a(0x205)) : !$(steps[i])[_0x20694a(0x1b0)](
            _0x20694a(0x240)) && $(progressbar[i])[_0x20694a(0x1a9)]('current');
    }
    reinitIX === !![] ? (
        window['Webflow'] && window['Webflow'][_0x20694a(0x1f1)](_0x20694a(0x158))[_0x20694a(0x1f8)]
        (), document['dispatchEvent'](new Event(_0x20694a(0x17d))), $(steps[x])['show']()) : $(steps[
        x])[_0x20694a(0x1c7)]('slow');
    $(_0x20694a(0x147))[_0x20694a(0x110)](_0x20694a(0x1a0));
    x === 0x0 && !$(steps[x])[_0x20694a(0x1b0)](_0x20694a(0x240)) && ($(steps[x])[_0x20694a(0x109)](
        _0x20694a(0xf1))[_0x20694a(0x23a)](), $(steps[x])[_0x20694a(0x109)](_0x20694a(0xf1))[
        _0x20694a(0x1a9)](_0x20694a(0x1a0)));
    selection[_0x20694a(0x1b9)] > 0x0 ? ($(steps[x])[_0x20694a(0x109)](_0x20694a(0x200) + selection[
        0x0]['selected'] + '\x22]')[_0x20694a(0x23a)](), $(steps[x])[_0x20694a(0x109)](_0x20694a(
        0x200) + selection[0x0][_0x20694a(0x209)] + '\x22]')[_0x20694a(0x1a9)](_0x20694a(0x1a0))) : (
        $(steps[x])[_0x20694a(0x109)]('[data-answer=\x22' + answer + '\x22]')[_0x20694a(0x23a)](), $(
            steps[x])['find'](_0x20694a(0x200) + answer + '\x22]')[_0x20694a(0x1a9)](
            'active-answer-card'));
    if (x === 0x0) $(_0x20694a(0x1eb))[_0x20694a(0x130)](), $(_0x20694a(
        0x1aa))['show'](), $(_0x20694a(0x1f6))[_0x20694a(0x130)]();
    else {
        if (x === steps[_0x20694a(0x1b9)] - 0x1 || $(steps[x])['find'](_0x20694a(0x23f))[
                'length'] > 0x0) {
            $('[data-form=\x22next-btn\x22]')[_0x20694a(0x130)]();
            if ($(steps[x])[
                    _0x20694a(0x109)](_0x20694a(0x12a))['data'](_0x20694a(0x192))) $(steps[x])[_0x20694a(
                0x109)](_0x20694a(0x12a))[_0x20694a(0x23a)]();
            else $('[data-form=\x22next-btn\x22]')[_0x20694a(0x1b0)](_0x20694a(0x192)) && $(_0x20694a(
                0x1aa))['show']();
            $(_0x20694a(0x1f6))[_0x20694a(0x23a)](), $(_0x20694a(0xee))[_0x20694a(0x23a)](), $(_0x20694a(
                0x1eb))['show']();
        } else $('[data-form=\x22next-btn\x22]')['show'](), $(_0x20694a(0x1eb))[
                'show'](), $(_0x20694a(0x1f6))[_0x20694a(0x130)](), $(_0x20694a(0xee))[_0x20694a(0x130)]
            ();
    }
    $($(steps[x])[_0x20694a(0x109)](_0x20694a(0x163))[0x0])[_0x20694a(0xf8)](), $($(steps[x])[
        _0x20694a(0x109)](_0x20694a(0xed))[0x0])[_0x20694a(0xf8)]();
    !back && next && validation();
    for (
        idx = 0x0; idx <= x; idx++) { $($(_0x20694a(0x23c))[idx])['removeClass']('disabled'); }
}

function _0x544b() {
    const _0x448291 = ['\x22]\x20[data-clone=\x22', 'findIndex',
        ':input[type=\x22email\x22][required]', 'addClass', '[data-form=\x22next-btn\x22]',
        'filledInput', 'last-step', 'append', '[data-display=\x22',
        '<strong\x20class=\x22f-text-white\x22>Custom\x20Progress\x20Indicators\x20', 'data',
        '\x22]\x20[data-clone-input=\x22', 'children', ':input[type=\x22number\x22][required]',
        'select:not([data-prefill=\x22false\x22])', ':first', 'script[src=\x22', 'data-input-field',
        '[data-text=\x22current-step\x22]', 'length', 'style', '182bUwpzr', 'block-domain',
        'getElementById', '[data-progressive-input]:not(:visible)', ':input[type=\x22email\x22]',
        'select', '[data-enter=\x22true\x22]', '[data-reset-delay]', 'searchParams',
        'getElementsByTagName', 'click', '[data-cms-select=input]', 'fadeIn', 'file',
        ':input[type=\x22date\x22][required]', '0.4', 'prop',
        '<strong\x20class=\x22f-text-white\x22>Radio\x20Inputs\x20', 'push', 'cookie', 'log',
        '<div\x20data-range=\x22selection\x22\x20style=\x22display:none\x20!important\x22>',
        'select-multiple', 'clickable', 'body', 'textarea', 'required',
        ':input[type=\x22checkbox\x22][required]:checked',
        '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>Script\x20Location:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>',
        'wait', 'min-character', '.w-form-formradioinput',
        '<strong\x20class=\x22f-text-white\x22>ReCAPTCHA\x20', '[data-add-new]',
        'input[type=\x22checkbox\x22]:visible', '35%', '[data-selection-weight]', 'setItem',
        '\x0a\x20\x20<button\x20class=\x22f-openbtn\x22\x20onclick=\x22openNav()\x22>\x0a\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x2220px\x22\x20height=\x2220px\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M11\x2021h-1l1-7H7.5c-.88\x200-.33-.75-.31-.78C8.48\x2010.94\x2010.42\x207.54\x2013.01\x203h1l-1\x207h3.51c.4\x200\x20.62.19.4.66C12.97\x2017.55\x2011\x2021\x2011\x2021\x22></path>\x0a\x20\x20\x20\x20</svg>\x20Check\x20Form\x0a\x20\x20</button>\x0a\x20\x20<div\x20id=\x22f-mySidenav\x22\x20class=\x22f-sidenav\x22>\x0a\x20\x20\x20\x20<a\x20href=\x22javascript:void(0)\x22\x20class=\x22f-closebtn\x22\x20onclick=\x22closeNav()\x22>&times;</a>\x0a\x20\x20\x20\x20<div\x20class=\x22f-fc-main-content\x22>\x0a\x20\x20\x20\x20\x20\x20<h4\x20class=\x22f-text-header\x22>Formly\x20Support</h4>\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20If\x20you\x20have\x20spotted\x20a\x20bug\x20or\x20require\x20extra\x20support,\x20please\x20reach\x20out\x20to\x20us\x20via\x20Slack\x20or\x20email\x20us\x20at\x20developer@videsigns.uk.\x0a\x20\x20\x20\x20\x20\x20</p>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Form\x20Type</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>',
        'input[type=\x22text\x22][required]:visible', ':input[type=\x22password\x22]',
        '[data-success-card=\x22', '[data-clone-wrapper]', ':input[type=\x22checkbox\x22]:checked',
        '435824bDJmdK', 'keyCode', 'auto', 'select[name=\x22', '[data-form=\x22back-btn\x22]',
        'remove', 'parse', 'edit-step', '[data-form=\x22step\x22]:not([data-card=\x22true\x22])',
        'attr', 'require', '[data-memory]',
        '</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Number\x20of\x20steps:\x20',
        'checkbox', '\x22]\x20[data-input-field^=\x22', '[data-form=\x22submit-btn\x22]',
        'preventDefault', 'init', 'AND', ':input[type=\x22time\x22][required]',
        '[data-redirect-delay]', 'post', ':input[type=\x22url\x22][required]', 'quiz',
        'option[value=\x22$(this).val()\x22]', '[data-answer=\x22', 'formlyLastStepAnswer',
        'disabled', 'select[required]:visible', ':input[type=\x22checkbox\x22]', 'current',
        'add-new-limit', 'phone-autoformat', '\x22]\x20textarea', 'selected',
        '[data-conditional-result]', 'select[required]', '\x22]:checked', 'search', 'display',
        '2482007yILvyQ', '[data-radio-skip]:visible', 'parentNode', '[data-progressive-target=\x22',
        '[data-display-input-index=\x22', ':input[type=\x22text\x22][required]', 'f-show', ':input',
        'scroll-top-offset', 'fail', '2490NeKWvs', '[data-checkbox]', '[data-clone]', 'redirect',
        'FormlyLogic\x20enabled', 'closest', 'removeItem', 'toLowerCase',
        ':input[type=\x22checkbox\x22][required]', 'input[type=\x22email\x22]:visible', 'getItem',
        '\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a',
        '[data-display-input]', 'input[type=\x22radio\x22]:checked', 'offset', 'innerHTML',
        '\x22]\x20select', '[data-form=\x22progress\x22]', 'scroll-top', 'join',
        '[data-selection=\x22', 'skipTo', 'new-tab', 'ctrlKey', '.w-form-done',
        '[data-remove-upload]', 'textarea[required]', '[data-clone-input-wrapper]', 'includes',
        '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Submit\x20button\x20attribute\x20IS\x20on\x20Form\x20Submit\x20Button\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        'radio-skip', '\x22]\x20input', ':input[type=\x22time\x22]', 'show', 'keypress',
        '[data-form=\x22custom-progress-indicator\x22]', '[data-btn=\x22check\x22]',
        '\x0a\x20\x20.f-icon-embed-xxsmall-2\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#ff3232\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x20\x20.f-icon-embed-xxsmall\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#57ff4b\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20{\x0a\x20\x20\x20\x20height:\x20100%\x20!important;\x0a\x20\x20\x20\x20width:\x200;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20z-index:\x20999999999999\x20!important;\x0a\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20background-color:\x20#081019\x20!important;\x0a\x20\x20\x20\x20overflow-x:\x20hidden\x20!important;\x0a\x20\x20\x20\x20padding-top:\x2060px\x20!important;\x0a\x20\x20\x20\x20transition:\x200.5s\x20!important;\x0a\x20\x20\x20\x20font-size:\x2015px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73)\x20!important;\x0a\x20\x20\x20\x20font-family:system-ui\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-section-title-text,\x20.f-support-text,\x20.f-openbtn{\x0a\x20\x20\x20\x20font-size:\x2015px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73);\x0a\x20\x20\x20\x20font-family:system-ui\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20p,\x20.f-sidenav\x20strong\x20{\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20space-between\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x204px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73);\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20.f-closebtn\x20{\x0a\x20\x20\x20\x20position:\x20absolute\x20!important;\x0a\x20\x20\x20\x20top:\x2025px\x20!important;\x0a\x20\x20\x20\x20right:\x2025px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2036px\x20!important;\x0a\x20\x20\x20\x20margin-left:\x2050px\x20!important;\x0a\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20color:\x20#e7e7e7\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-core-setup\x20{\x0a\x20\x20\x20\x20padding:\x2012px\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x2011px\x20!important;\x0a\x20\x20\x20\x20border-radius:\x206px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20#f-main\x20{\x0a\x20\x20\x20\x20transition:\x20margin-left\x20.5s\x20!important;\x0a\x20\x20\x20\x20padding:\x2020px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-main-content\x20{\x0a\x20\x20\x20\x20transition:\x20margin-left\x20.5s\x20!important;\x0a\x20\x20\x20\x20padding:\x2020px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-form-step\x20{\x0a\x20\x20\x20\x20padding-left:\x2010px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-openbtn\x20{\x0a\x20\x20\x20\x20white-space:\x20nowrap\x20!important;\x0a\x20\x20\x20\x20cursor:\x20pointer\x20!important;\x0a\x20\x20\x20\x20box-shadow:\x200\x200\x200\x201px\x20rgba(0,\x200,\x200,\x20.1),\x200\x201px\x203px\x20rgba(0,\x200,\x200,\x20.1)\x20!important;\x0a\x20\x20\x20\x20visibility:\x20visible\x20!important;\x0a\x20\x20\x20\x20z-index:\x2099\x20!important;\x0a\x20\x20\x20\x20color:\x20#e7e7e7\x20!important;\x0a\x20\x20\x20\x20opacity:\x201\x20!important;\x0a\x20\x20\x20\x20width:\x20auto\x20!important;\x0a\x20\x20\x20\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20background-color:\x20#1e1e1e\x20!important;\x0a\x20\x20\x20\x20border-radius:\x203px\x20!important;\x0a\x20\x20\x20\x20margin:\x200\x20!important;\x0a\x20\x20\x20\x20padding:\x206px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2013px\x20!important;\x0a\x20\x20\x20\x20line-height:\x2014px\x20!important;\x0a\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20top:\x20auto\x20!important;\x0a\x20\x20\x20\x20bottom:\x2012px\x20!important;\x0a\x20\x20\x20\x20left:\x2012px\x20!important;\x0a\x20\x20\x20\x20right:\x20auto\x20!important;\x0a\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20transform:\x20none\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-text-header{\x0a\x20\x20\x20\x20color:\x20#fff\x20!important;\x0a\x20\x20\x20\x20font-size:\x201.8rem\x20!important;\x0a\x20\x20\x20\x20font-weight:\x20600\x20!important;\x0a\x20\x20\x20\x20line-height:\x201.2\x20!important;\x0a\x20\x20\x20\x20margin-bottom:4px\x0a\x20\x20}\x0a\x0a\x20\x20@media\x20screen\x20and\x20(max-height:\x20450px)\x20{\x0a\x20\x20\x20\x20.sidenav\x20{\x20padding-top:\x2015px\x20!important;\x20}\x0a\x20\x20\x20\x20.sidenav\x20a\x20{\x20font-size:\x2018px\x20!important;\x20}\x0a\x20\x20}\x0a\x0a\x20\x20.f-section-title-text{\x0a\x20\x20\x20\x20color:\x20#fff\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x2010px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2018px\x20!important;\x0a\x20\x20\x20\x20font-weight:\x20700\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-div-support-section{\x0a\x20\x20\x20\x20padding-top:1rem\x20!important;\x0a\x20\x20\x20\x20padding-bottom:1rem\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-text-white{\x0a\x20\x20\x20\x20color:\x20white\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-spacer{\x0a\x20\x20\x20\x20padding-top:8px\x20!important;\x0a\x20\x20}\x0a',
        '[data-form=\x22submit\x22]:visible', 'card', 'inputName', '[data-custom-error-message]',
        'forEach', 'input[type=\x22checkbox\x22][name=\x22', ':input[type=\x22file\x22]', 'parents',
        '[data-weighted-selection]', '[data-progressive-input=\x22', 'split',
        '\x22][data-progressive-input-value=\x22', '[data-weighted-selection-range]', 'radio-delay',
        'Failed\x20to\x20update\x20counter:', '[data-input-index=\x22', 'radio',
        '</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Attributes</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>1.\x20Form:\x20data-form=multistep\x20',
        '[data-query-param]', '\x22]:not([data-prefill=\x22false\x22])', 'div.g-recaptcha', 'submit',
        'button', 'PASS', '[data-clone=\x22', 'custom-error-message', '52revWwF', 'data-skip-to',
        'input[type=\x22radio\x22]', 'textarea[required]:visible', '[data-show-if]', 'data-name',
        '<option>', '[data-clone-wrapper=\x22', 'progressive-input-value', 'w--redirected-checked',
        'type', 'textarea[autofocus]', '[data-form-ms=\x22submit-btn\x22]', 'input', '[data-display]',
        '[data-answer]', '18558dWhBBq', ':input[type=\x22url\x22]',
        '[data-form=\x22step\x22][data-card]', ':input[type=\x22radio\x22]',
        '<strong\x20class=\x22f-text-white\x22>Checkboxes\x20', 'css', 'focus', 'clone',
        '1341056chqcks', '[data-text=\x22error-message\x22]', 'add-new', 'input:checkbox',
        '[data-last-step]', 'appendChild', 'input[type=\x22radio\x22][name=\x22', 'clickable-all',
        'option[value=\x22', 'trim', 'none', 'clone-input', 'location', '[data-reinit]',
        'stopPropagation', 'find', 'substring', 'input-field', 'trigger', 'value',
        '</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Formly\x20Script\x20Info</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>Script\x20URL:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>',
        'ajaxComplete', 'removeClass', 'startsWith', 'redirect-delay', 'input:radio[required]',
        '[data-form=\x22submit-btn\x22]:visible', 'span', '[data-add-new-input]',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20', '[data-form=\x22multistep\x22]',
        ':input[type=\x22password\x22][required]', 'getMonth', '\x22][value=\x22', 'relationship-',
        '[data-answer][data-radio-skip]:visible', 'f-mySidenav', '[data-select-multiple]',
        '163446bHzXSp', 'html,\x20body', '[data-display-wrapper=\x22',
        '[data-form=\x22remove-input-clone\x22]', 'input:radio[name=\x22',
        '[data-text=\x22total-steps\x22]', 'go-to', 'some', 'Please\x20wait...', 'keydown',
        '[data-form=\x22next-btn\x22][data-submit-show]', 'key', '[data-clone-input-wrapper=\x22',
        'data-show-if', 'backTo',
        '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>3.\x20Next\x20Buttons:\x20data-form=back-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Next\x20button\x20present?\x20',
        'hide', 'answer', 'reset', 'success', 'getResponse', '[data-btn=\x22edit\x22]',
        'https://webflow.com/api/v1/form/', 'index',
        '<strong\x20class=\x22f-text-white\x22>Press\x20\x22Enter\x22\x20To\x20Progress\x20',
        'input[name=\x22', 'weighted-selection-range', 'every', 'stringify', 'test', 'last', 'parent',
        '[data-progressive-target]', 'padding', 'text', 'true', 'weighted-selection',
        ':input[type=\x22tel\x22]', 'formly', '.active-answer-card', 'not',
        ':input[type=\x22checkbox\x22][required]:not(:checked)', 'progressive-input', 'checked',
        'href', 'name', '[data-progressive-input]', 'siblings', '59170okXfaJ', 'url',
        '[data-range]:contains(', '[data-add-new=\x22',
        '\x22][data-progressive-input-value=\x22*\x22]', '[data-btn=\x22reset\x22]', 'f-hide', 'step',
        'ix2', ':input[type=\x22text\x22]', '[data-selection]', '[data-form=\x22step\x22]',
        'click-addclass', 'reset-delay', 'https://videsigns-staging.co.uk/counter',
        '[type=\x22checkbox\x22]', '.w-checkbox-input', ':input[type=\x22file\x22][required]',
        'data-go-to', 'input[autofocus]', '2tMvwHQ', 'BODY', 'status', '[data-clickable-all]',
        '[data-radio-skip=\x22true\x22]', 'tagName', 'formlyLastStep', '[data-clone-input=\x22',
        'add-new-input-limit', 'filter', '[data-success-card]', '[data-cms-select=text]',
        '[data-input-field=\x22', 'form[data-form=\x22multistep\x22]', 'input[type=\x22submit\x22]',
        '[data-index=\x22', 'ms-field', 'textarea[name=\x22',
        '[data-form=\x22next-btn\x22][type=\x22submit\x22]', '</strong>', '[data-input-field]',
        'each', '[data-radio-delay]', 'val', 'skip-to', 'readystatechange', 'createElement',
        '[data-cms-select=cms]', '[data-selection=\x22other\x22]', 'replace', '503565GGZYBE',
        '[data-skip-to]', '[data-display-input=\x22', 'formly-support',
        '[aria-label=\x22Remove\x20file\x22]', 'field', 'reinit', '0px', 'selection', ':checked',
        '<strong\x20class=\x22f-text-white\x22>Press\x20\x22⌘\x20+\x20Enter\x20\x22\x20To\x20Submit\x20',
        '.w-radio-input', 'width', 'memory', '[data-form=\x22remove-clone\x22]',
        '[data-form=\x22progress-indicator\x22]', 'submit-show', 'change',
        ':input[type=\x22number\x22]', 'head', 'form[data-form=\x22multistep\x22]\x20:input',
        'querySelector', '[data-go-to]', 'src', 'remove-upload', ':input[type=\x22tel\x22][required]',
        '<strong\x20class=\x22f-text-white\x22>Automatic\x20Progress\x20Indicators\x20',
        'data-radio-skip', '_blank', 'multistep', 'active-answer-card',
        '<span\x20class=\x22f-icon-embed-xxsmall\x20w-embed\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010s10-4.48\x2010-10S17.52\x202\x2012\x202m-2\x2015l-5-5l1.41-1.41L10\x2014.17l7.59-7.59L19\x208z\x22></path></svg></span>',
        '[data-clone-input]', 'selections\x20email', '[data-callback=\x22recaptcha\x22]',
        ':input[type=\x22date\x22]'
    ];
    _0x544b = function() { return _0x448291; };
    return _0x544b();
}

function validateEmail(_0x1209be, _0x31fb2f, _0x56ec63) {
    const _0x68633c = _0x5bdb0a;
    let
        _0x176f43 = _0x1209be[_0x68633c(0x235)]('@') ? _0x1209be[_0x68633c(0x249)]('@')[0x1][_0x68633c(
            0x249)]('.')[0x0] : [];
    dom = [];
    _0x31fb2f !== undefined && _0x31fb2f['split'](',')[_0x68633c(0x243)](function(_0x598841) {
        const
            _0x12da30 = _0x68633c;
        _0x598841[_0x12da30(0x235)](_0x176f43) && dom[_0x12da30(0x1cd)](_0x176f43);
    });
    dom['length'] > 0x0 ? domainAllowed = ![] : domainAllowed = !![];
    var _0x317ac9 =
        /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,20})?$/;
    !_0x317ac9[_0x68633c(0x13d)](_0x1209be) || !
        domainAllowed ? (emailFilled = ![], unfilledArr[_0x68633c(0x1cd)]({ 'input': _0x56ec63 })) :
        emailFilled = !![];
}

function phoneValidation(_0x56522f, _0x5c0e9c, _0x15a048) {
    if (phoneFormat) return _0x5c0e9c >=
        _0x15a048 ? !![] : ![];
    else { if (_0x5c0e9c >= _0x15a048) return !![]; }
}

function validation() {
    const _0x3859f1 = _0x5bdb0a;
    $(steps[x])[_0x3859f1(0x1b0)]('card') && enableBtn();
    unfilledArr = [], inputFilled = !![], radioFilled = !![], checkboxFilled = !![], numFilled = !![],
        fileFilled = !![], dateFilled = !![], timeFilled = !![], selectFilled = !![], textareaFilled = !
        ![], telFilled = !![], emailFilled = !![], passwordFilled = !![], emptyInput = 0x0,
        empReqInput = [], empReqDate = [], empReqTime = [], empReqSelect = [], empReqTel = [],
        empReqTextarea = [], empReqNum = [], empReqFile = [], empReqRadio = [], textareaLength = $(
            steps[x])[_0x3859f1(0x109)](_0x3859f1(0xe5))[_0x3859f1(0x1b9)], textInputLength = $(steps[x])[
            _0x3859f1(0x109)](_0x3859f1(0x1e2))[_0x3859f1(0x1b9)], selectInputLength = $(steps[x])[
            _0x3859f1(0x109)](_0x3859f1(0x203))[_0x3859f1(0x1b9)], emailInputLength = $(steps[x])['find'](
            _0x3859f1(0x222))[_0x3859f1(0x1b9)], checkboxInputLength = $(steps[x])[_0x3859f1(0x109)](
            _0x3859f1(0x1dd))[_0x3859f1(0x1b9)];
    textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0 ? disableBtn() :
        enableBtn();
    checkCount = $(steps[x])['data']('checkbox') ? $(steps[x])['data']('checkbox') : $(steps[x])[
        'find'](_0x3859f1(0x21a))[_0x3859f1(0x1b9)] > 0x0 ? $(steps[x])[_0x3859f1(0x109)](
        '[data-checkbox]')[_0x3859f1(0x1b0)](_0x3859f1(0x1f4)) : 0x0;
    if (!logicExtra) $(steps[x])[
            _0x3859f1(0x109)](_0x3859f1(0x216))['is']('[type=\x22checkbox\x22]') && (checkCount === '*' ||
            checkCount > $(steps[x])[_0x3859f1(0x109)](_0x3859f1(0x204))['length'] ? $(steps[x])[
                _0x3859f1(0x109)](_0x3859f1(0x204))[_0x3859f1(0x179)](function() {
                const _0x2f5097 =
                    _0x3859f1;
                $(this)['is'](_0x2f5097(0x18b)) ? $(steps[x])[_0x2f5097(0x109)](_0x2f5097(0x221))[
                    'length'] < 0x1 && (checkboxFilled = !![], resetInputErrorMessage($(this)[_0x2f5097(
                    0x1f0)](_0x2f5097(0x14d)))) : (checkboxFilled = ![], unfilledArr[_0x2f5097(0x1cd)]
                    ({ 'input': $(this)[_0x2f5097(0x1f0)](_0x2f5097(0x14d)) }));
            }) : $(steps[x])['find'](
                _0x3859f1(0x1e6))[_0x3859f1(0x1b9)] >= checkCount ? $(steps[x])['find'](
                ':input[type=\x22checkbox\x22][required]')[_0x3859f1(0x1b9)] > 0x0 ? $(steps[x])[_0x3859f1(
                0x109)](_0x3859f1(0x221))['each'](function() {
                const _0x3bee49 = _0x3859f1;
                checkboxFilled = ![];
                let _0x30c5eb = $(steps[x])[_0x3bee49(0x109)](
                        ':input[type=\x22checkbox\x22][required]')[_0x3bee49(0x1b9)],
                    _0x4033e5 = $(steps[x])[_0x3bee49(0x109)](_0x3bee49(0x1d6))['length'];
                _0x30c5eb - _0x4033e5 === 0x0 ? (checkboxFilled = !![], resetInputErrorMessage($(steps[
                    x])[_0x3bee49(0x109)](_0x3bee49(0x204))['attr'](_0x3bee49(0x14d)))) : (
                    checkboxFilled = ![], $(steps[x])['find'](_0x3bee49(0x149))['each'](
                        function() {
                            const _0x459f77 = _0x3bee49;
                            unfilledArr[_0x459f77(0x1cd)]({
                                'input': $(this)[_0x459f77(0x1f0)](_0x459f77(
                                    0x14d))
                            });
                        }));
            }) : (checkboxFilled = !![], resetInputErrorMessage($(steps[x])[
                _0x3859f1(0x109)](_0x3859f1(0x204))[_0x3859f1(0x1f0)](_0x3859f1(0x14d)))) : (
                checkboxFilled = ![], $(steps[x])['find'](_0x3859f1(0x221))[_0x3859f1(0x179)](
                    function() {
                        const _0x4d6d2b = _0x3859f1;
                        $(this)['not'](_0x4d6d2b(0x18b)) && unfilledArr['push']({
                            'input': $(this)[_0x4d6d2b(
                                0x1f0)](_0x4d6d2b(0x14d))
                        });
                    }), unfilledArr[_0x3859f1(0x1cd)]({
                    'input': $(steps[
                        x])[_0x3859f1(0x109)](':input[type=\x22checkbox\x22]')['attr'](_0x3859f1(0x14d))
                }))),
        $(steps[x])['find']('input:radio[required]')[_0x3859f1(0x179)](function(_0x37efa7) {
            const
                _0x565e83 = _0x3859f1;
            var _0x5be0e8 = $(this)['attr'](_0x565e83(0x14d));
            $(_0x565e83(0x124) + _0x5be0e8 + '\x22]:checked')[_0x565e83(0x1b9)] == 0x0 ? (!empReqRadio[
                    'find'](_0x446130 => _0x446130['input'] === _0x37efa7) && empReqRadio[_0x565e83(
                    0x1cd)]({ 'input': _0x37efa7 }), unfilledArr[_0x565e83(0x1cd)]({
                    'input': $(this)[
                        _0x565e83(0x1f0)](_0x565e83(0x14d))
                })) : empReqRadio = empReqRadio[_0x565e83(0x16d)](
                    _0x1a3b94 => _0x1a3b94['input'] !== _0x37efa7), empReqRadio[_0x565e83(0x1b9)] === 0x0 ?
                radioFilled = !![] : radioFilled = ![];
        }), $(steps[x])[_0x3859f1(0x109)](
            ':input[type=\x22text\x22][required]')[_0x3859f1(0x179)](function(_0x93e629) {
            const
                _0x2ee457 = _0x3859f1;
            let _0x48d183 = $(this)[_0x2ee457(0x17b)]()[_0x2ee457(0x1b9)],
                _0x210a1c = $(this)['data'](_0x2ee457(0x1d9)) ? $(this)[_0x2ee457(0x1b0)](_0x2ee457(
                    0x1d9)) : 0x0;
            $(this)[_0x2ee457(0x17b)]() !== '' && _0x48d183 >= _0x210a1c ? empReqInput = empReqInput[
                    _0x2ee457(0x16d)](_0x5a15b2 => _0x5a15b2[_0x2ee457(0xef)] !== _0x93e629) : (!
                    empReqInput[_0x2ee457(0x109)](_0x14a701 => _0x14a701[_0x2ee457(0xef)] === _0x93e629) &&
                    empReqInput['push']({ 'input': _0x93e629 }), unfilledArr['push']({
                        'input': $(this)[
                            _0x2ee457(0x1f0)](_0x2ee457(0x14d))
                    })), empReqInput[_0x2ee457(0x1b9)] === 0x0 ?
                inputFilled = !![] : inputFilled = ![];
        }), $(steps[x])[_0x3859f1(0x109)](_0x3859f1(0x119))[
            _0x3859f1(0x179)](function(_0xc75c2d) {
            const _0x535fa8 = _0x3859f1;
            let _0x1a0618 = $(this)[
                    _0x535fa8(0x17b)]()[_0x535fa8(0x1b9)],
                _0x256994 = $(this)[_0x535fa8(0x1b0)](_0x535fa8(0x1d9)) ? $(this)[_0x535fa8(0x1b0)](
                    'min-character') : 0x0;
            $(this)[_0x535fa8(0x17b)]() !== '' && _0x1a0618 >= _0x256994 ? empReqPassword =
                empReqPassword['filter'](_0x1f654f => _0x1f654f['input'] !== _0xc75c2d) : (!
                    empReqPassword['find'](_0x20efb6 => _0x20efb6[_0x535fa8(0xef)] === _0xc75c2d) &&
                    empReqPassword['push']({ 'input': _0xc75c2d }), unfilledArr['push']({
                        'input': $(this)[
                            _0x535fa8(0x1f0)](_0x535fa8(0x14d))
                    })), empReqPassword['length'] === 0x0 ?
                passwordFilled = !![] : passwordFilled = ![];
        }), $(steps[x])['find'](_0x3859f1(0x1fd))[
            _0x3859f1(0x179)](function(_0xee6e49) {
            const _0x3924cd = _0x3859f1;
            let _0x233fff = $(this)[
                    _0x3924cd(0x17b)]()['length'],
                _0x31eec4 = $(this)[_0x3924cd(0x1b0)](_0x3924cd(0x1d9)) ? $(this)[_0x3924cd(0x1b0)](
                    _0x3924cd(0x1d9)) : 0x0;
            $(this)['val']() !== '' && _0x233fff >= _0x31eec4 ? empReqUrl = empReqUrl[_0x3924cd(0x16d)](
                _0x22fe00 => _0x22fe00[_0x3924cd(0xef)] !== _0xee6e49) : (!empReqTime[_0x3924cd(0x109)](
                    _0x10cd21 => _0x10cd21[_0x3924cd(0xef)] === _0xee6e49) && empReqUrl['push']
                ({ 'input': _0xee6e49 }), unfilledArr[_0x3924cd(0x1cd)]({
                    'input': $(this)[_0x3924cd(
                        0x1f0)](_0x3924cd(0x14d))
                })), empReqUrl[_0x3924cd(0x1b9)] === 0x0 && validateURL($(
                this)['val']()) ? urlFilled = !![] : urlFilled = ![];
        }), $(steps[x])[_0x3859f1(0x109)](
            _0x3859f1(0x1fa))[_0x3859f1(0x179)](function(_0x3df2b8) {
            const _0x55df24 = _0x3859f1;
            let
                _0x3a6aa4 = $(this)[_0x55df24(0x17b)]()[_0x55df24(0x1b9)],
                _0x20ad52 = $(this)['data']('min-character') ? $(this)['data'](_0x55df24(0x1d9)) : 0x0;
            $(this)['val']() !== '' && _0x3a6aa4 >= _0x20ad52 ? empReqTime = empReqTime[_0x55df24(
                    0x16d)](_0x2e2a7f => _0x2e2a7f[_0x55df24(0xef)] !== _0x3df2b8) : (!empReqTime[_0x55df24(
                        0x109)](_0x2f0ce5 => _0x2f0ce5['input'] === _0x3df2b8) && empReqTime['push']
                    ({ 'input': _0x3df2b8 }), unfilledArr[_0x55df24(0x1cd)]({
                        'input': $(this)['attr'](
                            _0x55df24(0x14d))
                    })), empReqTime['length'] === 0x0 ? timeFilled = !![] :
                timeFilled = ![];
        }), $(steps[x])['find'](_0x3859f1(0x1c9))[_0x3859f1(0x179)](function(
            _0x1b045c) {
            const _0x3c4b71 = _0x3859f1;
            $(this)[_0x3c4b71(0x17b)]() !== '' ? empReqDate = empReqDate[_0x3c4b71(0x16d)](_0x1dfc78 =>
                    _0x1dfc78[_0x3c4b71(0xef)] !== _0x1b045c) : (!empReqDate[_0x3c4b71(0x109)](_0x51eb92 =>
                        _0x51eb92['input'] === _0x1b045c) && empReqDate['push']({ 'input': _0x1b045c }),
                    unfilledArr[_0x3c4b71(0x1cd)]({ 'input': $(this)[_0x3c4b71(0x1f0)]('name') })),
                empReqDate[_0x3c4b71(0x1b9)] === 0x0 ? dateFilled = !![] : dateFilled = ![];
        }), $(steps[
            x])[_0x3859f1(0x109)](_0x3859f1(0x19b))[_0x3859f1(0x179)](function(_0xe1012) {
            const
                _0x3ee90c = _0x3859f1;
            if ($(this)[_0x3ee90c(0x17b)]() !== '') {
                let _0x2883d2 = $(this)[
                        _0x3ee90c(0x17b)]()[_0x3ee90c(0x1b9)],
                    _0x578fb6 = $(this)[_0x3ee90c(0x1b0)](_0x3ee90c(0x1d9)) ? $(this)['data'](_0x3ee90c(
                        0x1d9)) : 0x0;
                if ($(this)[_0x3ee90c(0x1b0)](_0x3ee90c(0x207))) {
                    var _0x26f768 =
                        phoneAutoFormat($(this)[_0x3ee90c(0x1b0)](_0x3ee90c(0x207)));
                    $(this)[_0x3ee90c(0x17b)](_0x26f768($(this)[_0x3ee90c(0x17b)]()));
                }
                phoneValidation($(
                    this)[_0x3ee90c(0x17b)](), _0x2883d2, _0x578fb6) ? empReqTel = empReqTel[_0x3ee90c(
                    0x16d)](_0x2e098d => _0x2e098d[_0x3ee90c(0xef)] !== _0xe1012) : empReqTel[_0x3ee90c(
                    0x1cd)]({ 'input': _0xe1012 });
            } else !empReqTel[_0x3ee90c(0x109)](_0x2fade4 =>
                    _0x2fade4[_0x3ee90c(0xef)] === _0xe1012) && empReqTel[_0x3ee90c(0x1cd)]
                ({ 'input': _0xe1012 }), unfilledArr[_0x3ee90c(0x1cd)]({
                    'input': $(this)[_0x3ee90c(0x1f0)](
                        _0x3ee90c(0x14d))
                });
            empReqTel[_0x3ee90c(0x1b9)] === 0x0 ? telFilled = !![] : telFilled = ![];
        }), $(steps[x])[
            'find'](_0x3859f1(0x161))[_0x3859f1(0x179)](function(_0x52edd0) {
            const _0x49c243 =
                _0x3859f1;
            $(this)[_0x49c243(0x17b)]() !== '' ? empReqFile = empReqFile[_0x49c243(0x16d)](_0x3b8c5f =>
                    _0x3b8c5f[_0x49c243(0xef)] !== _0x52edd0) : (!empReqFile['find'](_0x5c32c5 => _0x5c32c5[
                        _0x49c243(0xef)] === _0x52edd0) && empReqFile[_0x49c243(0x1cd)]
                    ({ 'input': _0x52edd0 }), unfilledArr['push']({
                        'input': $(this)[_0x49c243(0x1f0)](
                            'name')
                    })), empReqFile[_0x49c243(0x1b9)] === 0x0 ? fileFilled = !![] :
                fileFilled = ![];
        }), $(steps[x])[_0x3859f1(0x109)](_0x3859f1(0x1b3))[_0x3859f1(0x179)](
            function(_0x5e366e) {
                const _0x445988 = _0x3859f1;
                let _0x1c0377 = $(this)[_0x445988(0x17b)]
                    ()['length'],
                    _0xa524fa = $(this)[_0x445988(0x1b0)](_0x445988(0x1d9)) ? $(this)[_0x445988(0x1b0)](
                        _0x445988(0x1d9)) : 0x0;
                $(this)[_0x445988(0x17b)]() !== '' && _0x1c0377 >= _0xa524fa ? empReqNum = empReqNum[
                        'filter'](_0x54ac91 => _0x54ac91[_0x445988(0xef)] !== _0x5e366e) : (!empReqNum[
                        _0x445988(0x109)](_0x27c02c => _0x27c02c['input'] === _0x5e366e) && empReqNum[
                        _0x445988(0x1cd)]({ 'input': _0x5e366e }), unfilledArr[_0x445988(0x1cd)]({
                        'input': $(
                            this)[_0x445988(0x1f0)](_0x445988(0x14d))
                    })), empReqNum['length'] === 0x0 ?
                    numFilled = !![] : numFilled = ![];
            }), $(steps[x])['find'](_0x3859f1(0x20b))[_0x3859f1(
            0x179)](function(_0x5d2ac6) {
            const _0x11d8de = _0x3859f1;
            let _0x5289ca = $(this)['val']();
            _0x5289ca === '' && (_0x5289ca = null), _0x5289ca != null ? empReqSelect = empReqSelect[
                _0x11d8de(0x16d)](_0x21c841 => _0x21c841[_0x11d8de(0xef)] !== _0x5d2ac6) : (!
                empReqSelect[_0x11d8de(0x109)](_0x7f6458 => _0x7f6458['input'] === _0x5d2ac6) &&
                empReqSelect[_0x11d8de(0x1cd)]({ 'input': _0x5d2ac6 }), unfilledArr['push']
                ({ 'input': $(this)[_0x11d8de(0x1f0)](_0x11d8de(0x14d)) })), empReqSelect[_0x11d8de(
                0x1b9)] === 0x0 ? selectFilled = !![] : selectFilled = ![];
        }), $(steps[x])[_0x3859f1(
            0x109)](_0x3859f1(0x233))['each'](function(_0xfc873d) {
            const _0x24f404 = _0x3859f1;
            let
                _0x41427d = $(this)[_0x24f404(0x17b)]()[_0x24f404(0x1b9)],
                _0x4c6ca0 = $(this)[_0x24f404(0x1b0)](_0x24f404(0x1d9)) ? $(this)[_0x24f404(0x1b0)](
                    'min-character') : 0x0;
            $(this)[_0x24f404(0x17b)]() !== '' && _0x41427d >= _0x4c6ca0 ? empReqTextarea =
                empReqTextarea[_0x24f404(0x16d)](_0x4b9ca6 => _0x4b9ca6[_0x24f404(0xef)] !== _0xfc873d) :
                (!empReqTextarea[_0x24f404(0x109)](_0x1cfdfa => _0x1cfdfa[_0x24f404(0xef)] ===
                    _0xfc873d) && empReqTextarea[_0x24f404(0x1cd)]({ 'input': _0xfc873d }), unfilledArr[
                    _0x24f404(0x1cd)]({ 'input': $(this)[_0x24f404(0x1f0)](_0x24f404(0x14d)) })),
                empReqTextarea['length'] === 0x0 ? textareaFilled = !![] : textareaFilled = ![];
        }), $(
            steps[x])[_0x3859f1(0x109)](':input[type=\x22email\x22][required]')[_0x3859f1(0x179)](
            function() {
                const _0x2af425 = _0x3859f1;
                $(this)[_0x2af425(0x17b)]() !== '' ? validateEmail($(this)[_0x2af425(0x17b)](), $(this)[
                    'data'](_0x2af425(0x1bc)), $(this)[_0x2af425(0x1f0)](_0x2af425(0x14d))) : (
                    emailFilled = ![], unfilledArr[_0x2af425(0x1cd)]({
                        'input': $(this)[_0x2af425(0x1f0)](
                            _0x2af425(0x14d))
                    }));
            });
    else {
        if ($(steps[x])[_0x3859f1(0x1b0)](_0x3859f1(0x240))) answer = $(steps[x])[_0x3859f1(0x109)]
            (_0x3859f1(0x198))[_0x3859f1(0x1b0)](_0x3859f1(0x126)), selections = selections['filter'](
                _0x1a42c8 => _0x1a42c8['step'] !== x), selections[_0x3859f1(0x1cd)]
            ({ 'step': x, 'selected': answer });
        else $(steps[x])[_0x3859f1(0x109)](_0x3859f1(0x147))[_0x3859f1(0x1b0)](_0x3859f1(0x240)) && (
            answer = $(steps[x])[_0x3859f1(0x109)](_0x3859f1(0x147))['data'](_0x3859f1(0x126)),
            selections = selections[_0x3859f1(0x16d)](_0x900b84 => _0x900b84[_0x3859f1(0x157)] !== x),
            selections['push']({ 'step': x, 'selected': answer }));
        $(steps[x])[_0x3859f1(0x109)]('.active-answer-card')[_0x3859f1(0x109)](_0x3859f1(0x216))['is'](
                _0x3859f1(0x15f)) && (checkCount === '*' || checkCount > $(steps[x])[_0x3859f1(0x109)](
                    _0x3859f1(0x204))[_0x3859f1(0x1b9)] ? $(steps[x])[_0x3859f1(0x109)](_0x3859f1(0x204))[
                    _0x3859f1(0x179)](function() {
                    const _0x49caaa = _0x3859f1;
                    $(this)['is'](_0x49caaa(0x18b)) ? $(steps[x])[_0x49caaa(0x109)](':input[required]')[
                        'length'] < 0x1 && (skipTo = undefined, $(this)[_0x49caaa(0x246)](_0x49caaa(0x183))[
                            'data']('skip-to') && (skipTo = $(this)[_0x49caaa(0x246)](_0x49caaa(0x183))[
                            _0x49caaa(0x1b0)]('skip-to')), $(this)[_0x49caaa(0x246)](_0x49caaa(0x198))[
                            _0x49caaa(0x1f0)](_0x49caaa(0x162)) && (answer = $(this)[_0x49caaa(0x246)](
                                '[data-go-to]')[_0x49caaa(0x1f0)](_0x49caaa(0x162)), selections = selections[
                                'filter'](_0x12dc19 => _0x12dc19['step'] !== x), selections[_0x49caaa(0x1cd)]
                            ({ 'step': x, 'selected': answer }), skipTo && (selections[_0x49caaa(0x1cd)]
                                ({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x49caaa(
                                    0x1a7)](_0x51187d => _0x51187d[_0x49caaa(0x157)] === x), selections[objIndex][
                                    'skipTo'
                                ] = parseInt(skipTo) - 0x1, selections[objIndex][_0x49caaa(0x12e)] = x)),
                        checkboxFilled = !![], $(steps[x])[_0x49caaa(0x109)](_0x49caaa(0x1d6))[_0x49caaa(
                            0x1b9)] >= $(steps[x])[_0x49caaa(0x109)](_0x49caaa(0x221))['length'] &&
                        resetInputErrorMessage($(steps[x])[_0x49caaa(0x109)](_0x49caaa(0x204))[_0x49caaa(
                            0x1f0)](_0x49caaa(0x14d)))) : (checkboxFilled = ![], unfilledArr[_0x49caaa(0x1cd)]
                        ({ 'input': $(this)[_0x49caaa(0x1f0)]('name') }));
                }) : $(steps[x])[_0x3859f1(0x109)](
                    '.active-answer-card')[_0x3859f1(0x109)](_0x3859f1(0x1e6))[_0x3859f1(0x1b9)] >=
                checkCount ? ($(steps[x])[_0x3859f1(0x109)](_0x3859f1(0x147))[_0x3859f1(0x109)](_0x3859f1(
                        0x204))[_0x3859f1(0x246)](_0x3859f1(0x198))['attr'](_0x3859f1(0x162)) && (skipTo =
                        undefined, $(steps[x])[_0x3859f1(0x109)](_0x3859f1(0x147))[_0x3859f1(0x109)](_0x3859f1(
                            0x204))['parents']('[data-skip-to]')['attr'](_0x3859f1(0xe3)) && (skipTo = $(steps[
                            x])['find']('.active-answer-card')['find'](_0x3859f1(0x1e6))[_0x3859f1(0x246)](
                            _0x3859f1(0x183))[_0x3859f1(0x1f0)](_0x3859f1(0xe3))), answer = $(steps[x])['find'](
                            _0x3859f1(0x147))[_0x3859f1(0x109)](_0x3859f1(0x204))[_0x3859f1(0x246)](
                            '[data-go-to]')[_0x3859f1(0x1f0)]('data-go-to'), selections = selections[_0x3859f1(
                            0x16d)](_0x155dcc => _0x155dcc['step'] !== x), selections['push']
                        ({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x3859f1(0x16d)](
                            _0x3778cb => _0x3778cb[_0x3859f1(0x157)] !== skipTo - 0x2), selections[_0x3859f1(
                            0x1cd)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[
                            _0x3859f1(0x1a7)](_0x305e3d => _0x305e3d[_0x3859f1(0x157)] === x), selections[
                            objIndex][_0x3859f1(0x22e)] = parseInt(skipTo) - 0x1, selections[objIndex][
                            _0x3859f1(0x12e)
                        ] = x)), checkboxFilled = !![], $(steps[x])[_0x3859f1(0x109)](_0x3859f1(0x1d6))[
                        _0x3859f1(0x1b9)] >= $(steps[x])['find'](_0x3859f1(0x221))[_0x3859f1(0x1b9)] &&
                    resetInputErrorMessage($(steps[x])[_0x3859f1(0x109)](_0x3859f1(0x204))['attr']('name'))) :
                (checkboxFilled = ![], $(steps[x])[_0x3859f1(0x109)](_0x3859f1(0x221))[_0x3859f1(0x179)](
                    function() {
                        const _0x36dd49 = _0x3859f1;
                        $(this)['not'](_0x36dd49(0x18b)) && unfilledArr[_0x36dd49(0x1cd)]({
                            'input': $(this)[
                                'attr'](_0x36dd49(0x14d))
                        });
                    }))), $(steps[x])[_0x3859f1(0x109)](
                '.active-answer-card')[_0x3859f1(0x109)](_0x3859f1(0x113))['each'](function(
                _0x323c0d) {
                const _0x1c8a1b = _0x3859f1;
                var _0x5c1ab5 = $(this)[_0x1c8a1b(0x1f0)](
                    _0x1c8a1b(0x14d));
                $('input:radio[name=\x22' + _0x5c1ab5 + _0x1c8a1b(0x20c))[_0x1c8a1b(0x1b9)] == 0x0 ? (!
                    empReqRadio['find'](_0x303a91 => _0x303a91[_0x1c8a1b(0xef)] === _0x323c0d) &&
                    empReqRadio[_0x1c8a1b(0x1cd)]({ 'input': _0x323c0d }), unfilledArr[_0x1c8a1b(0x1cd)]
                    ({ 'input': $(this)['attr'](_0x1c8a1b(0x14d)) })) : empReqRadio = empReqRadio['filter'](
                    _0x565231 => _0x565231[_0x1c8a1b(0xef)] !== _0x323c0d), empReqRadio[_0x1c8a1b(
                    0x1b9)] === 0x0 ? radioFilled = !![] : radioFilled = ![];
            }), $(steps[x])[_0x3859f1(
                0x109)](_0x3859f1(0x147))[_0x3859f1(0x109)](_0x3859f1(0x214))['each'](function(
                _0x1dba9a) {
                const _0x517ed5 = _0x3859f1;
                let _0x35267a = $(this)[_0x517ed5(0x17b)]()[
                        _0x517ed5(0x1b9)],
                    _0x1dc3af = $(this)[_0x517ed5(0x1b0)](_0x517ed5(0x1d9)) ? $(this)['data'](_0x517ed5(
                        0x1d9)) : 0x0;
                $(this)['val']() !== '' && _0x35267a >= _0x1dc3af ? empReqInput = empReqInput[_0x517ed5(
                        0x16d)](_0x28957f => _0x28957f[_0x517ed5(0xef)] !== _0x1dba9a) : (!empReqInput[
                            _0x517ed5(0x109)](_0x9f8709 => _0x9f8709[_0x517ed5(0xef)] === _0x1dba9a) &&
                        empReqInput['push']({ 'input': _0x1dba9a }), unfilledArr[_0x517ed5(0x1cd)]
                        ({ 'input': $(this)[_0x517ed5(0x1f0)]('name') })), empReqInput[_0x517ed5(0x1b9)] ===
                    0x0 ? inputFilled = !![] : inputFilled = ![];
            }), $(steps[x])[_0x3859f1(0x109)](_0x3859f1(
                0x147))[_0x3859f1(0x109)](_0x3859f1(0x159))[_0x3859f1(0x179)](function(_0xa017c) {
                const
                    _0x5b34b9 = _0x3859f1;
                skipTo = undefined, $(this)[_0x5b34b9(0x246)]('[data-skip-to]')[_0x5b34b9(0x1b0)](
                    'skip-to') !== '' && (skipTo = $(this)[_0x5b34b9(0x246)]('[data-skip-to]')[_0x5b34b9(
                    0x1b0)](_0x5b34b9(0x17c))), $(this)[_0x5b34b9(0x246)]('[data-go-to]')[_0x5b34b9(
                    0x1f0)]('data-go-to') && (answer = $(this)[_0x5b34b9(0x246)](_0x5b34b9(0x198))[
                        _0x5b34b9(0x1f0)](_0x5b34b9(0x162)), selections = selections['filter'](_0x5d95e6 =>
                        _0x5d95e6[_0x5b34b9(0x157)] !== x), selections['push']
                    ({ 'step': x, 'selected': answer }), skipTo && (selections[_0x5b34b9(0x1cd)]
                        ({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x5b34b9(
                            0x1a7)](_0x44f5ac => _0x44f5ac['step'] === x), selections[objIndex][_0x5b34b9(
                            0x22e)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x5b34b9(0x12e)] = x));
            }), $(
                steps[x])[_0x3859f1(0x109)](_0x3859f1(0x147))[_0x3859f1(0x109)](_0x3859f1(0x119))[_0x3859f1(
                0x179)](function(_0x3bdaaa) {
                const _0x320e87 = _0x3859f1;
                let _0x5658a0 = $(this)['val']
                    ()['length'],
                    _0x5b3491 = $(this)[_0x320e87(0x1b0)]('min-character') ? $(this)[_0x320e87(0x1b0)](
                        _0x320e87(0x1d9)) : 0x0;
                $(this)[_0x320e87(0x17b)]() !== '' && _0x5658a0 >= _0x5b3491 ? empReqPassword =
                    empReqPassword[_0x320e87(0x16d)](_0x208778 => _0x208778[_0x320e87(0xef)] !==
                        _0x3bdaaa) : (!empReqPassword[_0x320e87(0x109)](_0x556215 => _0x556215['input'] ===
                        _0x3bdaaa) && empReqPassword[_0x320e87(0x1cd)]({ 'input': _0x3bdaaa }), unfilledArr[
                        _0x320e87(0x1cd)]({ 'input': $(this)[_0x320e87(0x1f0)]('name') })), empReqPassword[
                        _0x320e87(0x1b9)] === 0x0 ? passwordFilled = !![] : passwordFilled = ![];
            }), $(steps[
                x])[_0x3859f1(0x109)](_0x3859f1(0x147))[_0x3859f1(0x109)](_0x3859f1(0x1e3))[_0x3859f1(
                0x179)](function(_0x2a26c0) {
                const _0x559c5b = _0x3859f1;
                skipTo = undefined, $(this)['parents'](_0x559c5b(0x183))[_0x559c5b(0x1b0)](_0x559c5b(
                    0x17c)) !== '' && (skipTo = $(this)[_0x559c5b(0x246)](_0x559c5b(0x183))['data'](
                    _0x559c5b(0x17c))), $(this)[_0x559c5b(0x246)]('[data-go-to]')[_0x559c5b(0x1f0)](
                    _0x559c5b(0x162)) && (answer = $(this)['parents'](_0x559c5b(0x198))[_0x559c5b(0x1f0)](
                        _0x559c5b(0x162)), selections = selections['filter'](_0x163a5a => _0x163a5a[
                        _0x559c5b(0x157)] !== x), selections[_0x559c5b(0x1cd)]
                    ({ 'step': x, 'selected': answer }), skipTo && (selections[_0x559c5b(0x1cd)]
                        ({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x559c5b(
                            0x1a7)](_0x511451 => _0x511451[_0x559c5b(0x157)] === x), selections[objIndex][
                            _0x559c5b(0x22e)
                        ] = parseInt(skipTo) - 0x1, selections[objIndex][_0x559c5b(0x12e)] = x));
            }), $(steps[x])[
                _0x3859f1(0x109)](_0x3859f1(0x147))[_0x3859f1(0x109)](_0x3859f1(0x1fd))[_0x3859f1(0x179)](
                function(_0x44f990) {
                    const _0x5ebb8a = _0x3859f1;
                    let _0x245977 = $(this)[_0x5ebb8a(
                            0x17b)]()['length'],
                        _0xed3b9b = $(this)[_0x5ebb8a(0x1b0)](_0x5ebb8a(0x1d9)) ? $(this)[_0x5ebb8a(0x1b0)](
                            _0x5ebb8a(0x1d9)) : 0x0;
                    $(this)[_0x5ebb8a(0x17b)]() !== '' && _0x245977 >= _0xed3b9b ? empReqUrl = empReqUrl[
                        _0x5ebb8a(0x16d)](_0x32db1c => _0x32db1c[_0x5ebb8a(0xef)] !== _0x44f990) : (!
                        empReqUrl['find'](_0x5241f3 => _0x5241f3[_0x5ebb8a(0xef)] === _0x44f990) && empReqUrl[
                            'push']({ 'input': _0x44f990 }), unfilledArr[_0x5ebb8a(0x1cd)]({
                            'input': $(this)[
                                _0x5ebb8a(0x1f0)]('name')
                        })), empReqUrl[_0x5ebb8a(0x1b9)] === 0x0 && validateURL(
                        $(this)[_0x5ebb8a(0x17b)]()) ? urlFilled = !![] : urlFilled = ![];
                }), $(steps[x])[
                _0x3859f1(0x109)](_0x3859f1(0x147))['find'](_0x3859f1(0xf3))[_0x3859f1(0x179)](function(
                _0x1ef2fe) {
                const _0x4ee84d = _0x3859f1;
                skipTo = undefined, $(this)[_0x4ee84d(0x246)]('[data-skip-to]')[_0x4ee84d(0x1b0)](
                    _0x4ee84d(0x17c)) !== '' && (skipTo = $(this)[_0x4ee84d(0x246)](_0x4ee84d(0x183))[
                    _0x4ee84d(0x1b0)]('skip-to')), $(this)[_0x4ee84d(0x246)](_0x4ee84d(0x198))[_0x4ee84d(
                    0x1f0)](_0x4ee84d(0x162)) && (answer = $(this)[_0x4ee84d(0x246)]('[data-go-to]')[
                        _0x4ee84d(0x1f0)](_0x4ee84d(0x162)), selections = selections[_0x4ee84d(0x16d)](
                        _0x359822 => _0x359822['step'] !== x), selections[_0x4ee84d(0x1cd)]
                    ({ 'step': x, 'selected': answer }), skipTo && (selections[_0x4ee84d(0x1cd)]
                        ({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x4ee84d(
                            0x1a7)](_0x5a8567 => _0x5a8567[_0x4ee84d(0x157)] === x), selections[objIndex][
                            _0x4ee84d(0x22e)
                        ] = parseInt(skipTo) - 0x1, selections[objIndex]['backTo'] = x));
            }), $(steps[x])[_0x3859f1(
                0x109)](_0x3859f1(0x147))['find'](_0x3859f1(0x1c9))['each'](function(_0xe3aa61) {
                const
                    _0x52dc3e = _0x3859f1;
                $(this)[_0x52dc3e(0x17b)]() !== '' ? empReqDate = empReqDate[_0x52dc3e(0x16d)](
                        _0x484b50 => _0x484b50[_0x52dc3e(0xef)] !== _0xe3aa61) : (!empReqDate[_0x52dc3e(
                        0x109)](_0x521495 => _0x521495['input'] === _0xe3aa61) && empReqDate[_0x52dc3e(
                        0x1cd)]({ 'input': _0xe3aa61 }), unfilledArr['push']({
                        'input': $(this)[_0x52dc3e(
                            0x1f0)](_0x52dc3e(0x14d))
                    })), empReqDate[_0x52dc3e(0x1b9)] === 0x0 ? dateFilled = !
                    ![] : dateFilled = ![];
            }), $(steps[x])[_0x3859f1(0x109)]('.active-answer-card')[
                _0x3859f1(0x109)](_0x3859f1(0x1a5))['each'](function(_0x4af6b6) {
                const _0x5d8182 =
                    _0x3859f1;
                skipTo = undefined, $(this)[_0x5d8182(0x246)](_0x5d8182(0x183))[_0x5d8182(0x1b0)](
                    _0x5d8182(0x17c)) !== '' && (skipTo = $(this)[_0x5d8182(0x246)]('[data-skip-to]')[
                    _0x5d8182(0x1b0)](_0x5d8182(0x17c))), $(this)[_0x5d8182(0x246)]('[data-go-to]')[
                    _0x5d8182(0x1f0)](_0x5d8182(0x162)) && (answer = $(this)['parents'](_0x5d8182(0x198))[
                        _0x5d8182(0x1f0)](_0x5d8182(0x162)), selections = selections[_0x5d8182(0x16d)](
                        _0x4633be => _0x4633be['step'] !== x), selections[_0x5d8182(0x1cd)]
                    ({ 'step': x, 'selected': answer }), skipTo && (selections[_0x5d8182(0x1cd)]
                        ({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections['findIndex'](
                            _0x2b52e5 => _0x2b52e5[_0x5d8182(0x157)] === x), selections[objIndex][_0x5d8182(
                            0x22e)] = parseInt(skipTo) - 0x1, selections[objIndex]['backTo'] = x));
            }), $(steps[x])[
                _0x3859f1(0x109)](_0x3859f1(0x147))['find'](_0x3859f1(0x1fa))[_0x3859f1(0x179)](function(
                _0x2f7ba0) {
                const _0x1f4546 = _0x3859f1;
                $(this)[_0x1f4546(0x17b)]() !== '' ? empReqTime = empReqTime['filter'](_0x3bbefd =>
                        _0x3bbefd[_0x1f4546(0xef)] !== _0x2f7ba0) : (!empReqTime[_0x1f4546(0x109)](
                        _0x32f9e6 => _0x32f9e6[_0x1f4546(0xef)] === _0x2f7ba0) && empReqTime[_0x1f4546(
                        0x1cd)]({ 'input': _0x2f7ba0 }), unfilledArr[_0x1f4546(0x1cd)]({
                        'input': $(this)[
                            _0x1f4546(0x1f0)](_0x1f4546(0x14d))
                    })), empReqTime['length'] === 0x0 ?
                    timeFilled = !![] : timeFilled = ![];
            }), $(steps[x])['find'](_0x3859f1(0x147))[_0x3859f1(
                0x109)](_0x3859f1(0x239))[_0x3859f1(0x179)](function(_0x3075f) {
                const _0x3a4568 =
                    _0x3859f1;
                skipTo = undefined, $(this)['parents'](_0x3a4568(0x183))[_0x3a4568(0x1b0)](_0x3a4568(
                    0x17c)) !== '' && (skipTo = $(this)[_0x3a4568(0x246)](_0x3a4568(0x183))['data'](
                    _0x3a4568(0x17c))), $(this)[_0x3a4568(0x246)]('[data-go-to]')[_0x3a4568(0x1f0)](
                    _0x3a4568(0x162)) && (answer = $(this)['parents'](_0x3a4568(0x198))[_0x3a4568(0x1f0)](
                        _0x3a4568(0x162)), selections = selections['filter'](_0x4d6a9d => _0x4d6a9d[
                        _0x3a4568(0x157)] !== x), selections['push']({ 'step': x, 'selected': answer }),
                    skipTo && (selections[_0x3a4568(0x1cd)]({ 'step': skipTo - 0x2, 'selected': answer }),
                        objIndex = selections[_0x3a4568(0x1a7)](_0x3fdf1e => _0x3fdf1e[_0x3a4568(0x157)] ===
                            x), selections[objIndex][_0x3a4568(0x22e)] = parseInt(skipTo) - 0x1, selections[
                            objIndex][_0x3a4568(0x12e)] = x));
            }), $(steps[x])[_0x3859f1(0x109)](_0x3859f1(
                0x147))[_0x3859f1(0x109)](_0x3859f1(0x1b3))[_0x3859f1(0x179)](function(_0x3dcde5) {
                const
                    _0x1dc084 = _0x3859f1;
                let _0x95eb59 = $(this)[_0x1dc084(0x17b)]()[_0x1dc084(0x1b9)],
                    _0x41688e = $(this)[_0x1dc084(0x1b0)]('min-character') ? $(this)[_0x1dc084(0x1b0)](
                        _0x1dc084(0x1d9)) : 0x0;
                $(this)[_0x1dc084(0x17b)]() !== '' && _0x95eb59 >= _0x41688e ? empReqNum = empReqNum[
                        _0x1dc084(0x16d)](_0x428f85 => _0x428f85['input'] !== _0x3dcde5) : (!empReqNum['find']
                        (_0x1a3a23 => _0x1a3a23[_0x1dc084(0xef)] === _0x3dcde5) && empReqNum[_0x1dc084(0x1cd)]
                        ({ 'input': _0x3dcde5 }), unfilledArr[_0x1dc084(0x1cd)]({
                            'input': $(this)[_0x1dc084(
                                0x1f0)]('name')
                        })), empReqNum['length'] === 0x0 ? numFilled = !![] :
                    numFilled = ![];
            }), $(steps[x])[_0x3859f1(0x109)](_0x3859f1(0x147))[_0x3859f1(0x109)](
                _0x3859f1(0x194))[_0x3859f1(0x179)](function(_0x43c4c3) {
                const _0x16c218 = _0x3859f1;
                skipTo = undefined, $(this)['parents'](_0x16c218(0x183))[_0x16c218(0x1b0)]('skip-to') !==
                    '' && (skipTo = $(this)[_0x16c218(0x246)]('[data-skip-to]')[_0x16c218(0x1b0)](_0x16c218(
                        0x17c))), $(this)[_0x16c218(0x246)](_0x16c218(0x198))[_0x16c218(0x1f0)](
                        'data-go-to') && (answer = $(this)[_0x16c218(0x246)]('[data-go-to]')[_0x16c218(0x1f0)](
                            _0x16c218(0x162)), selections = selections[_0x16c218(0x16d)](_0x2a247c => _0x2a247c[
                            _0x16c218(0x157)] !== x), selections[_0x16c218(0x1cd)]
                        ({ 'step': x, 'selected': answer }), skipTo && (selections[_0x16c218(0x1cd)]
                            ({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x16c218(
                                0x1a7)](_0x376ba4 => _0x376ba4[_0x16c218(0x157)] === x), selections[objIndex][
                                _0x16c218(0x22e)
                            ] = parseInt(skipTo) - 0x1, selections[objIndex][_0x16c218(0x12e)] = x));
            }), $(steps[x])[
                _0x3859f1(0x109)](_0x3859f1(0x147))[_0x3859f1(0x109)](_0x3859f1(0x19b))[_0x3859f1(0x179)](
                function(_0x3667a6) {
                    const _0x1f6a98 = _0x3859f1;
                    if ($(this)[_0x1f6a98(0x17b)]() !==
                        '') {
                        let _0x368781 = $(this)[_0x1f6a98(0x17b)]()['length'],
                            _0x503bc2 = $(this)[_0x1f6a98(0x1b0)](_0x1f6a98(0x1d9)) ? $(this)[_0x1f6a98(0x1b0)](
                                _0x1f6a98(0x1d9)) : 0x0;
                        if ($(this)[_0x1f6a98(0x1b0)]('phone-autoformat')) {
                            var
                                _0x442a38 = phoneAutoFormat($(this)['data'](_0x1f6a98(0x207)));
                            $(this)[_0x1f6a98(0x17b)](_0x442a38($(this)[_0x1f6a98(0x17b)]()));
                        }
                        phoneValidation(
                                $(this)[_0x1f6a98(0x17b)](), _0x368781, _0x503bc2) ? empReqTel = empReqTel[
                                _0x1f6a98(0x16d)](_0xa7d4ce => _0xa7d4ce[_0x1f6a98(0xef)] !== _0x3667a6) :
                            empReqTel[_0x1f6a98(0x1cd)]({ 'input': _0x3667a6 });
                    } else !empReqTel[_0x1f6a98(
                        0x109)](_0x41b5f0 => _0x41b5f0[_0x1f6a98(0xef)] === _0x3667a6) && empReqTel[_0x1f6a98(
                        0x1cd)]({ 'input': _0x3667a6 }), unfilledArr[_0x1f6a98(0x1cd)]({
                        'input': $(this)[
                            _0x1f6a98(0x1f0)](_0x1f6a98(0x14d))
                    });
                    empReqTel[_0x1f6a98(0x1b9)] === 0x0 ? telFilled = !![] : telFilled = ![];
                }), $(steps[x])[
                _0x3859f1(0x109)]('.active-answer-card')['find'](_0x3859f1(0x145))[_0x3859f1(0x179)](
                function(_0x2f601b) {
                    const _0x408516 = _0x3859f1;
                    skipTo = undefined, $(this)['parents'](_0x408516(0x183))[_0x408516(0x1b0)]('skip-to') !==
                        '' && (skipTo = $(this)['parents']('[data-skip-to]')[_0x408516(0x1b0)](_0x408516(
                            0x17c))), $(this)[_0x408516(0x246)](_0x408516(0x198))[_0x408516(0x1f0)](
                            'data-go-to') && (answer = $(this)[_0x408516(0x246)](_0x408516(0x198))[_0x408516(0x1f0)]
                            ('data-go-to'), selections = selections[_0x408516(0x16d)](_0x1edd1b => _0x1edd1b[
                                _0x408516(0x157)] !== x), selections[_0x408516(0x1cd)]
                            ({ 'step': x, 'selected': answer }), skipTo && (selections[_0x408516(0x1cd)]
                                ({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x408516(
                                    0x1a7)](_0x5e5647 => _0x5e5647['step'] === x), selections[objIndex]['skipTo'] =
                                parseInt(skipTo) - 0x1, selections[objIndex]['backTo'] = x));
                }), $(steps[x])[
                _0x3859f1(0x109)](_0x3859f1(0x147))[_0x3859f1(0x109)](_0x3859f1(0x161))[_0x3859f1(0x179)](
                function(_0xcee265) {
                    const _0xcd4f3a = _0x3859f1;
                    $(this)[_0xcd4f3a(0x17b)]() !== '' ? empReqFile = empReqFile[_0xcd4f3a(0x16d)](
                            _0x5c1590 => _0x5c1590['input'] !== _0xcee265) : (!empReqFile[_0xcd4f3a(0x109)](
                            _0x461359 => _0x461359[_0xcd4f3a(0xef)] === _0xcee265) && empReqFile[_0xcd4f3a(
                            0x1cd)]({ 'input': _0xcee265 }), unfilledArr[_0xcd4f3a(0x1cd)]({
                            'input': $(this)[
                                _0xcd4f3a(0x1f0)]('name')
                        })), empReqFile['length'] === 0x0 ? fileFilled = !![] :
                        fileFilled = ![];
                }), $(steps[x])['find']('.active-answer-card')[_0x3859f1(0x109)](
                _0x3859f1(0x245))[_0x3859f1(0x179)](function(_0x52dbce) {
                const _0x4b1883 = _0x3859f1;
                skipTo = undefined, $(this)[_0x4b1883(0x246)](_0x4b1883(0x183))[_0x4b1883(0x1b0)](
                    _0x4b1883(0x17c)) !== '' && (skipTo = $(this)[_0x4b1883(0x246)](_0x4b1883(0x183))[
                    _0x4b1883(0x1b0)](_0x4b1883(0x17c))), $(this)[_0x4b1883(0x246)]('[data-go-to]')[
                    _0x4b1883(0x1f0)](_0x4b1883(0x162)) && (answer = $(this)[_0x4b1883(0x246)](_0x4b1883(
                    0x198))[_0x4b1883(0x1f0)](_0x4b1883(0x162)), selections = selections[_0x4b1883(
                    0x16d)](_0x8ac22e => _0x8ac22e[_0x4b1883(0x157)] !== x), selections[_0x4b1883(
                    0x1cd)]({ 'step': x, 'selected': answer }), skipTo && (selections['push']
                    ({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x4b1883(
                        0x1a7)](_0x804e29 => _0x804e29[_0x4b1883(0x157)] === x), selections[objIndex][
                        _0x4b1883(0x22e)
                    ] = parseInt(skipTo) - 0x1, selections[objIndex][_0x4b1883(0x12e)] = x));
            }), $(steps[x])[
                _0x3859f1(0x109)](_0x3859f1(0x147))[_0x3859f1(0x109)](_0x3859f1(0x20b))[_0x3859f1(0x179)](
                function(_0x4fb3e6) {
                    const _0x4846f6 = _0x3859f1;
                    $(this)[_0x4846f6(0x17b)]() !== null && $(this)['val']() !== '' ? empReqSelect =
                        empReqSelect[_0x4846f6(0x16d)](_0x2ab06d => _0x2ab06d[_0x4846f6(0xef)] !== _0x4fb3e6) :
                        (!empReqSelect[_0x4846f6(0x109)](_0x510027 => _0x510027[_0x4846f6(0xef)] ===
                            _0x4fb3e6) && empReqSelect[_0x4846f6(0x1cd)]({ 'input': _0x4fb3e6 }), unfilledArr[
                            _0x4846f6(0x1cd)]({ 'input': $(this)[_0x4846f6(0x1f0)](_0x4846f6(0x14d)) })),
                        empReqSelect[_0x4846f6(0x1b9)] === 0x0 ? selectFilled = !![] : selectFilled = ![];
                }),
            $(steps[x])[_0x3859f1(0x109)]('.active-answer-card')[_0x3859f1(0x109)](_0x3859f1(0x1c0))[
                _0x3859f1(0x179)](function(_0xe1531f) {
                const _0x554a57 = _0x3859f1;
                skipTo = undefined, $(this)['parents'](_0x554a57(0x183))[_0x554a57(0x1b0)](_0x554a57(
                    0x17c)) !== '' && (skipTo = $(this)['parents']('[data-skip-to]')['data'](_0x554a57(
                    0x17c))), $(this)['parents'](_0x554a57(0x198))[_0x554a57(0x1f0)]('data-go-to') && (
                    answer = $(this)[_0x554a57(0x246)](_0x554a57(0x198))[_0x554a57(0x1f0)](_0x554a57(
                        0x162)), selections = selections[_0x554a57(0x16d)](_0x491da2 => _0x491da2[_0x554a57(
                        0x157)] !== x), selections[_0x554a57(0x1cd)]({ 'step': x, 'selected': answer }),
                    skipTo && (selections['push']({ 'step': skipTo - 0x2, 'selected': answer }),
                        objIndex = selections[_0x554a57(0x1a7)](_0x14a962 => _0x14a962[_0x554a57(0x157)] ===
                            x), selections[objIndex]['skipTo'] = parseInt(skipTo) - 0x1, selections[objIndex][
                            _0x554a57(0x12e)
                        ] = x));
            }), $(steps[x])[_0x3859f1(0x109)](_0x3859f1(0x147))[_0x3859f1(0x109)](
                _0x3859f1(0x233))[_0x3859f1(0x179)](function(_0xe6f26b) {
                const _0x127916 = _0x3859f1;
                let
                    _0x5e1854 = $(this)[_0x127916(0x17b)]()[_0x127916(0x1b9)],
                    _0x4e134a = $(this)[_0x127916(0x1b0)](_0x127916(0x1d9)) ? $(this)[_0x127916(0x1b0)](
                        _0x127916(0x1d9)) : 0x0;
                $(this)[_0x127916(0x17b)]() !== '' && _0x5e1854 >= _0x4e134a ? empReqTextarea =
                    empReqTextarea[_0x127916(0x16d)](_0xa75d3e => _0xa75d3e['input'] !== _0xe6f26b) : (!
                        empReqTextarea['find'](_0x4213e1 => _0x4213e1[_0x127916(0xef)] === _0xe6f26b) &&
                        empReqTextarea[_0x127916(0x1cd)]({ 'input': _0xe6f26b }), unfilledArr['push']
                        ({ 'input': $(this)[_0x127916(0x1f0)](_0x127916(0x14d)) })), empReqTextarea[_0x127916(
                        0x1b9)] === 0x0 ? textareaFilled = !![] : textareaFilled = ![];
            }), $(steps[x])[
                _0x3859f1(0x109)]('.active-answer-card')[_0x3859f1(0x109)](_0x3859f1(0x1d4))[_0x3859f1(
                0x179)](function(_0x2ef5ab) {
                const _0x319d53 = _0x3859f1;
                skipTo = undefined, $(this)[_0x319d53(0x246)](_0x319d53(0x183))['data'](_0x319d53(
                    0x17c)) !== '' && (skipTo = $(this)[_0x319d53(0x246)](_0x319d53(0x183))[_0x319d53(
                    0x1b0)](_0x319d53(0x17c))), $(this)['parents'](_0x319d53(0x198))[_0x319d53(0x1f0)](
                    'data-go-to') && (answer = $(this)['parents'](_0x319d53(0x198))['attr'](_0x319d53(
                        0x162)), selections = selections[_0x319d53(0x16d)](_0x309ccd => _0x309ccd[_0x319d53(
                        0x157)] !== x), selections[_0x319d53(0x1cd)]({ 'step': x, 'selected': answer }),
                    skipTo && (selections[_0x319d53(0x1cd)]({ 'step': skipTo - 0x2, 'selected': answer }),
                        objIndex = selections[_0x319d53(0x1a7)](_0x2f5762 => _0x2f5762[_0x319d53(0x157)] ===
                            x), selections[objIndex][_0x319d53(0x22e)] = parseInt(skipTo) - 0x1, selections[
                            objIndex]['backTo'] = x));
            }), $(steps[x])[_0x3859f1(0x109)](_0x3859f1(0x147))[
                _0x3859f1(0x109)](_0x3859f1(0x1a8))[_0x3859f1(0x179)](function(_0x2e0a72) {
                const
                    _0x506fd0 = _0x3859f1;
                $(this)[_0x506fd0(0x17b)]() !== '' ? validateEmail($(this)['val'](), $(this)['data'](
                    _0x506fd0(0x1bc)), $(this)[_0x506fd0(0x1f0)](_0x506fd0(0x14d))) : (emailFilled = ![],
                    unfilledArr[_0x506fd0(0x1cd)]({ 'input': $(this)['attr']('name') }));
            }), $(steps[x])[
                _0x3859f1(0x109)](_0x3859f1(0x147))[_0x3859f1(0x109)](_0x3859f1(0x1bf))[_0x3859f1(0x179)](
                function(_0x11aa78) {
                    const _0x31e365 = _0x3859f1;
                    skipTo = undefined, $(this)['parents'](_0x31e365(0x183))[_0x31e365(0x1b0)](_0x31e365(
                            0x17c)) !== '' && (skipTo = $(this)['parents']('[data-skip-to]')[_0x31e365(0x1b0)](
                            _0x31e365(0x17c))), $(this)['parents'](_0x31e365(0x198))['attr'](_0x31e365(0x162)) &&
                        (answer = $(this)[_0x31e365(0x246)](_0x31e365(0x198))[_0x31e365(0x1f0)](_0x31e365(
                                0x162)), selections = selections['filter'](_0x1fee17 => _0x1fee17['step'] !== x),
                            console[_0x31e365(0x1cf)](_0x31e365(0x1a3), selections, x), selections[_0x31e365(
                                0x1cd)]({ 'step': x, 'selected': answer }), skipTo && (selections['push']
                                ({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x31e365(
                                    0x1a7)](_0x10353f => _0x10353f[_0x31e365(0x157)] === x), selections[objIndex][
                                    _0x31e365(0x22e)
                                ] = parseInt(skipTo) - 0x1, selections[objIndex][_0x31e365(0x12e)] = x));
                });
    }
    $(
            steps[x])[_0x3859f1(0x109)](_0x3859f1(0xf5))['is'](':checked') && (selArr = [], $(steps)[
                'find']('[data-selected]:checked')[_0x3859f1(0x179)](function(_0x35d780, _0x119e9b) {
                const
                    _0x319cbb = _0x3859f1;
                selArr[_0x319cbb(0x1cd)]({ 'selected': $(this)[_0x319cbb(0x1b0)](_0x319cbb(0x209)) });
            }),
            selString = [], selArr[_0x3859f1(0x243)](_0x15fcad => selString[_0x3859f1(0x1cd)](_0x15fcad[
                'selected'])), $(steps[x])[_0x3859f1(0x109)](_0x3859f1(0x147))[_0x3859f1(0x109)](
                ':input[type=\x27radio\x27]:checked')[_0x3859f1(0x179)](function() {
                const _0x1f32cf =
                    _0x3859f1;
                skipTo = undefined;
                if ($(this)['parents'](_0x1f32cf(0x183))[_0x1f32cf(0x1b0)](_0x1f32cf(
                        0x17c))) skipTo = $(this)[_0x1f32cf(0x246)](_0x1f32cf(0x183))[_0x1f32cf(0x1b0)](
                    _0x1f32cf(0x17c));
                else $(this)[_0x1f32cf(0x1b0)](_0x1f32cf(0x17c)) && (skipTo = $(this)[_0x1f32cf(0x1b0)](
                    'skip-to'));
                selections = selections[_0x1f32cf(0x16d)](_0x194648 => _0x194648['step'] !== x), console[
                    _0x1f32cf(0x1cf)](selections, curStep, x);
                if ($(this)[_0x1f32cf(0x1b0)](_0x1f32cf(
                        0x126))) answer = $(this)[_0x1f32cf(0x1f0)](_0x1f32cf(0x162)), selections[_0x1f32cf(
                    0x1cd)]({ 'step': x, 'selected': answer }), skipTo && (selections[_0x1f32cf(0x1cd)]
                    ({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x1f32cf(0x1a7)](
                        _0x24d93a => _0x24d93a['step'] === x), selections[objIndex][_0x1f32cf(0x22e)] =
                    parseInt(skipTo) - 0x1, selections[objIndex][_0x1f32cf(0x12e)] = x);
                else $(this)[_0x1f32cf(0x246)]('[data-go-to]')['data'](_0x1f32cf(0x126)) && (answer = $(
                        this)[_0x1f32cf(0x246)](_0x1f32cf(0x198))[_0x1f32cf(0x1b0)](_0x1f32cf(0x126)),
                    selections[_0x1f32cf(0x1cd)]({ 'step': x, 'selected': answer }), skipTo && (
                        selections[_0x1f32cf(0x1cd)]({ 'step': skipTo - 0x2, 'selected': answer }),
                        objIndex = selections[_0x1f32cf(0x1a7)](_0x30c612 => _0x30c612[_0x1f32cf(0x157)] ===
                            x), selections[objIndex][_0x1f32cf(0x22e)] = parseInt(skipTo) - 0x1, selections[
                            objIndex]['backTo'] = x));
            }), logicExtra ? ($(steps[x])['find'](_0x3859f1(0x147))[
                _0x3859f1(0x109)](_0x3859f1(0x210))['data'](_0x3859f1(0x237)) === !![] || $(steps[x])[
                'find'](_0x3859f1(0x11d))[_0x3859f1(0x1b0)](_0x3859f1(0x237)) === !![]) && (skip &&
                selections[_0x3859f1(0x16d)](_0x366881 => _0x366881[_0x3859f1(0x157)] === x)['length'] >
                0x0 && (textareaLength === 0x0 && textInputLength === 0x0 && emailInputLength === 0x0 &&
                    checkboxInputLength === 0x0 && setTimeout(function() {
                        next = !![], back = ![],
                            nextStep(), selectionQuiz();
                    }, $(steps[x])[_0x3859f1(0x109)](_0x3859f1(0x17a))[
                        _0x3859f1(0x1b0)](_0x3859f1(0x24c))))) : $(steps[x])[_0x3859f1(0x109)](_0x3859f1(
                0x210))[_0x3859f1(0x1b0)]('radio-skip') === !![] && (skip && (textareaLength === 0x0 &&
                textInputLength === 0x0 && emailInputLength === 0x0 && checkboxInputLength === 0x0 &&
                setTimeout(function() { next = !![], back = ![], nextStep(), selectionQuiz(); }, $(steps[
                    x])[_0x3859f1(0x109)](_0x3859f1(0x17a))[_0x3859f1(0x1b0)](_0x3859f1(0x24c)))))),
        inputFilled && fileFilled && numFilled && checkboxFilled && telFilled && radioFilled &&
        emailFilled && domainAllowed && selectFilled && textareaFilled && passwordFilled && urlFilled ?
        enableBtn() : disableBtn(), andLogic(), cloneRemove(), cloneRemoveInput();
}

function displayErrorMessage() {
    const _0x283567 = _0x5bdb0a;
    $('[data-text=\x22error-message\x22]')['hide'](), unfilledArr[_0x283567(0x1b9)] > 0x0 &&
        unfilledArr[_0x283567(0x243)](function(_0x35df0c) {
            const _0x521be9 = _0x283567;
            $(_0x521be9(0x139) + _0x35df0c[_0x521be9(0xef)] + '\x22]')[_0x521be9(0x14f)](_0x521be9(
                0xfb))[_0x521be9(0x1c7)](), $(_0x521be9(0x139) + _0x35df0c[_0x521be9(0xef)] + '\x22]')[
                _0x521be9(0x246)]()[_0x521be9(0x1b2)]('[data-text=\x22error-message\x22]')[_0x521be9(
                0x1c7)](), $(_0x521be9(0x175) + _0x35df0c[_0x521be9(0xef)] + '\x22]')[_0x521be9(0x14f)](
                '[data-text=\x22error-message\x22]')['fadeIn'](), $('select[name=\x22' + _0x35df0c[
                _0x521be9(0xef)] + '\x22]')[_0x521be9(0x14f)](_0x521be9(0xfb))[_0x521be9(0x1c7)]();
        });
}

function resetInputErrorMessage(_0x6d0092) {
    const _0x16ada3 = _0x5bdb0a;
    $('input[name=\x22' + _0x6d0092 + '\x22]')[_0x16ada3(0x14f)](_0x16ada3(0xfb))[_0x16ada3(0x130)](),
        $('input[name=\x22' + _0x6d0092 + '\x22]')[_0x16ada3(0x246)]()['children'](_0x16ada3(0xfb))[
            _0x16ada3(0x130)](), $(_0x16ada3(0x175) + _0x6d0092 + '\x22]')[_0x16ada3(0x14f)](
            '[data-text=\x22error-message\x22]')[_0x16ada3(0x130)](), $(_0x16ada3(0x1ea) + _0x6d0092 +
            '\x22]')[_0x16ada3(0x14f)](_0x16ada3(0xfb))[_0x16ada3(0x130)]();
}

function increaseCurstep() {
    const _0x3cf9ad = _0x5bdb0a;
    countCard ? (curStep = curStep + 0x1, $(_0x3cf9ad(0x125))[_0x3cf9ad(0x142)](steps[_0x3cf9ad(
            0x1b9)])) : $(steps[x])['data'](_0x3cf9ad(0x240)) ? curStep = curStep + 0x0 : curStep =
        curStep + 0x1, $(_0x3cf9ad(0x1b8))[_0x3cf9ad(0x142)](curStep);
}

function decreaseCurstep() {
    const _0x3fa752 = _0x5bdb0a;
    countCard ? (curStep = curStep - 0x1, $(_0x3fa752(0x125))[_0x3fa752(0x142)](steps[_0x3fa752(
            0x1b9)])) : $(steps[x])[_0x3fa752(0x1b0)](_0x3fa752(0x240)) ? curStep = curStep - 0x0 :
        curStep = curStep - 0x1, $(_0x3fa752(0x1b8))[_0x3fa752(0x142)](curStep);
}
$(_0x5bdb0a(0x1f6))[
    'on']('click', function(_0x4b0162) {
    const _0x171aad = _0x5bdb0a;
    $(this)['data'](_0x171aad(0x21c)) && (redirectTo = $(this)[_0x171aad(0x1b0)](_0x171aad(
            0x21c))), !$(this)['data'](_0x171aad(0x22f)) && (newTab = $(this)[_0x171aad(0x1b0)](
            'new-tab')), successCard = $(this)['data'](_0x171aad(0x133)), _0x4b0162[_0x171aad(0x1f7)]
        (), _0x4b0162[_0x171aad(0x108)](), logicExtra && ($(this)[_0x171aad(0x1cb)]('novalidate', !
            ![]), $(steps)[_0x171aad(0x109)](':input')[_0x171aad(0x1cb)](_0x171aad(0x1d5), ![])),
        localStorage[_0x171aad(0x21f)](_0x171aad(0x1ab)), fill ? ($(this)[_0x171aad(0x1b0)](
                _0x171aad(0x1d8)) ? (console['log']($(this)[_0x171aad(0x1b0)](_0x171aad(0x1d8))), $(
                this)[_0x171aad(0x142)]($(this)[_0x171aad(0x1b0)]('wait'))) : $(this)[_0x171aad(0x17b)](
                'Please\x20wait...')[_0x171aad(0x142)](_0x171aad(0x128)), $(_0x171aad(0x118))['submit']
            (), $(_0x171aad(0xdc))['length'] > 0x0 && (grecaptcha[_0x171aad(0x134)]()[_0x171aad(
                0x1b9)] === 0x0 && (form[_0x171aad(0x109)](_0x171aad(0x1f6))[_0x171aad(0x142)](
                oldSubmitText), form[_0x171aad(0x109)]('[data-form=\x22submit-btn\x22]')[_0x171aad(
                0x17b)](oldSubmitText))), customError && $(_0x171aad(0xfb))[_0x171aad(0x130)]()) :
        customError && displayErrorMessage();
});

function nextStep() {
    const _0x497c06 = _0x5bdb0a;
    customError ? ($(_0x497c06(0xfb))[_0x497c06(0x130)](), fill ? (x++, increaseCurstep(), progress =
            x, x <= steps[_0x497c06(0x1b9)] - 0x1 && (updateStep(), memory && saveFilledInput())) :
        displayErrorMessage()) : (x++, increaseCurstep(), x > progress && (progress = x), x <= steps[
        _0x497c06(0x1b9)] - 0x1 && (updateStep(), memory && saveFilledInput())), andLogic();
}

function backStep() {
    const _0x5d5275 = _0x5bdb0a;
    customError && $('[data-text=\x22error-message\x22]')[_0x5d5275(0x130)](), decreaseCurstep(), x >
        0x0 && ($(progressbar[x])[_0x5d5275(0x110)](_0x5d5275(0x205)), selections[_0x5d5275(0x16d)](
                _0x99ecae => _0x99ecae['skipTo'] === x)[_0x5d5275(0x1b9)] > 0x0 ? x = parseInt(getSafe(() =>
                selections[_0x5d5275(0x16d)](_0x2c256a => _0x2c256a['skipTo'] === x)[0x0]['backTo'])) : x--,
            updateStep()), ($(steps[x])[_0x5d5275(0x109)]('[data-radio-skip]:visible')[_0x5d5275(0x1b0)](
            _0x5d5275(0x237)) === !![] || $(steps[x])[_0x5d5275(0x109)](_0x5d5275(0x147))[_0x5d5275(
            0x109)]('[data-radio-skip]:visible')[_0x5d5275(0x1b0)](_0x5d5275(0x237)) === !![] || $(
            steps[x])[_0x5d5275(0x109)](_0x5d5275(0x11d))[_0x5d5275(0x1b0)](_0x5d5275(0x237)) === !![]) &&
        (all_data = all_data['filter'](_0x43566b => _0x43566b['field'] !== $(steps[x])[_0x5d5275(0x109)]
                ('input[type=\x22radio\x22]:checked')[_0x5d5275(0x1f0)](_0x5d5275(0x14d))), $(_0x5d5275(
                0x170) + $(steps[x])[_0x5d5275(0x109)](_0x5d5275(0x226))[_0x5d5275(0x1f0)](_0x5d5275(
                0x14d)) + '\x22]')[_0x5d5275(0x130)](), $(steps[x])[_0x5d5275(0x109)](
                'input[type=\x22radio\x22]')[_0x5d5275(0x1cb)](_0x5d5275(0x14b), ![]), $(steps[x])[
                _0x5d5275(0x109)](_0x5d5275(0x1da))[_0x5d5275(0x110)](_0x5d5275(0xeb)),
            validation());
}
weightedSelectionRange && $(_0x5bdb0a(0x15a))[_0x5bdb0a(0x179)](function() {
    const
        _0x436d3e = _0x5bdb0a;
    $(this)[_0x436d3e(0x1ad)](_0x436d3e(0x1d0) + $(this)['data']('selection') + '</div>');
});

function selectionQuiz() {
    const _0x345e01 = _0x5bdb0a;
    if ($(this)['find'](_0x345e01(0x23d))) {
        $(
            _0x345e01(0x15a))[_0x345e01(0x130)](), $(_0x345e01(0x1df))[_0x345e01(0x130)]();
        if (
            weightedSelection) {
            selTotal = 0x0, selArr[_0x345e01(0x243)](function(_0x35c931) {
                selTotal
                    = selTotal + _0x35c931['selected'];
            }), $('[data-text=\x22total-weight\x22]')[_0x345e01(
                0x142)](selTotal);
            if ($(_0x345e01(0x22d) + selTotal + '\x22]')['length'] > 0x0) $(
                _0x345e01(0x22d) + selTotal + '\x22]')['fadeIn']();
            else $('[data-range]:contains(' + selTotal + ')') ? $(_0x345e01(0x152) + selTotal + ')')[
                    _0x345e01(0x13f)]('[data-selection]')['eq'](0x0)['show']() : $(_0x345e01(0x180))['fadeIn']
                ();
        } else {
            let _0x3ec24c = -0x1;
            $('[data-selection]')[_0x345e01(0x179)](function(_0x3eb56e) {
                const _0x2c8515 = _0x345e01;
                $($('[data-selection]')[_0x3eb56e])['data'](_0x2c8515(0x18a))[_0x2c8515(0x235)](
                    selString[_0x2c8515(0x22c)]()) && (_0x3ec24c = _0x3eb56e);
            }), _0x3ec24c > -0x1 ? $($(
                _0x345e01(0x15a))[_0x3ec24c])[_0x345e01(0x1c7)]() : $('[data-selection=\x22other\x22]')[
                _0x345e01(0x1c7)]();
        }
    }
}

function triggerInputAllData() {
    const _0x1875f6 = _0x5bdb0a;
    if (savedFilledInput && memory)
        savedFilledInput[_0x1875f6(0x243)](_0x6cea0 => {
            const _0x1b3f07 = _0x1875f6;
            var _0x54f1d4 = $(
                    _0x1b3f07(0x139) + _0x6cea0['inputName'] + _0x1b3f07(0x11b) + _0x6cea0[_0x1b3f07(
                        0x10d)] + _0x1b3f07(0xdb)),
                _0x4675ae = $(_0x1b3f07(0x139) + _0x6cea0[_0x1b3f07(0x241)] + _0x1b3f07(0xdb)),
                _0x1251e3 = $('textarea[name=\x22' + _0x6cea0[_0x1b3f07(0x241)] + _0x1b3f07(0xdb)),
                _0x5c51d0 = $(_0x1b3f07(0x244) + _0x6cea0['inputName'] + '\x22]'),
                _0x117d6a = $(_0x1b3f07(0x100) + _0x6cea0['inputName'] + '\x22][value=\x22' + _0x6cea0[
                    _0x1b3f07(0x10d)] + _0x1b3f07(0xdb));
            if (_0x54f1d4[_0x1b3f07(0x1f0)]('type') !==
                'file') {
                if (_0x54f1d4[_0x1b3f07(0x1f0)]('type') === 'radio' && !_0x54f1d4[_0x1b3f07(
                        0x246)]('[data-radio-skip]')[_0x1b3f07(0x1b0)](_0x1b3f07(0x237))) _0x54f1d4[_0x1b3f07(
                    0x1c5)](), _0x54f1d4[_0x1b3f07(0x14f)](_0x1b3f07(0x18d))[_0x1b3f07(0x1a9)](_0x1b3f07(
                    0xeb)), _0x54f1d4[_0x1b3f07(0x10c)](_0x1b3f07(0xef));
                else _0x6cea0[_0x1b3f07(0x10d)] === 'on' ? (_0x4675ae[_0x1b3f07(0x1c5)](), _0x4675ae[
                    _0x1b3f07(0x14f)](_0x1b3f07(0x160))['addClass']('w--redirected-checked'), _0x4675ae[
                    _0x1b3f07(0x10c)](_0x1b3f07(0xef))) : (_0x4675ae['val'](_0x6cea0[_0x1b3f07(0x10d)]),
                    _0x1251e3['val'](_0x6cea0['value']), $(_0x1b3f07(0x1b4))[_0x1b3f07(0x109)](_0x1b3f07(
                        0x102) + _0x6cea0[_0x1b3f07(0x10d)] + '\x22]')[_0x1b3f07(0x1cb)](_0x1b3f07(0x209), !
                        ![]), _0x4675ae[_0x1b3f07(0x10c)](_0x1b3f07(0xef)), _0x4675ae[_0x1b3f07(0x10c)](
                        'change'));
                const _0x1781db = _0x117d6a['data']('click-addclass'),
                    _0x51fd0f = _0x5c51d0[_0x1b3f07(0x1b0)]('click-addclass');
                _0x117d6a[_0x1b3f07(0x13f)]()['addClass'](_0x1781db), _0x5c51d0['parent']()[_0x1b3f07(
                    0x1a9)](_0x51fd0f);
            }
        });
    else _params && (getParams(), searchQ[_0x1875f6(0x243)](_0x46ca8e => {
        const _0x9672b3 =
            _0x1875f6;
        if ($('input[name=\x22' + _0x46ca8e[_0x9672b3(0x241)] + _0x9672b3(0x11b) +
                _0x46ca8e['value'] + _0x9672b3(0xdb))[_0x9672b3(0x1f0)](_0x9672b3(0xec)) !==
            _0x9672b3(0x1c8)) {
            if ($(_0x9672b3(0x139) + _0x46ca8e[_0x9672b3(0x12b)] + _0x9672b3(
                    0x11b) + _0x46ca8e['val'] + _0x9672b3(0xdb))['attr'](_0x9672b3(0xec)) === _0x9672b3(
                    0x24f)) $(_0x9672b3(0x139) + _0x46ca8e[_0x9672b3(0x12b)] + _0x9672b3(0x11b) +
                _0x46ca8e[_0x9672b3(0x17b)] + _0x9672b3(0xdb))[_0x9672b3(0x1c5)](), $(_0x9672b3(
                0x139) + _0x46ca8e[_0x9672b3(0x12b)] + _0x9672b3(0x11b) + _0x46ca8e[_0x9672b3(
                0x17b)] + '\x22]:not([data-prefill=\x22false\x22])')[_0x9672b3(0x14f)](
                '.w-radio-input')[_0x9672b3(0x1a9)](_0x9672b3(0xeb)), $(_0x9672b3(0x139) +
                _0x46ca8e['key'] + _0x9672b3(0x11b) + _0x46ca8e[_0x9672b3(0x17b)] + _0x9672b3(0xdb)
            )['trigger'](_0x9672b3(0xef));
            else _0x46ca8e[_0x9672b3(0x17b)] === 'on' ? ($('input[name=\x22' + _0x46ca8e[_0x9672b3(
                0x12b)] + _0x9672b3(0xdb))['click'](), $('input[name=\x22' + _0x46ca8e[_0x9672b3(
                0x12b)] + _0x9672b3(0xdb))[_0x9672b3(0x14f)]('.w-checkbox-input')['addClass'](
                _0x9672b3(0xeb)), $(_0x9672b3(0x139) + _0x46ca8e[_0x9672b3(0x12b)] + '\x22]')[
                'trigger'](_0x9672b3(0xef))) : ($(_0x9672b3(0x139) + _0x46ca8e[_0x9672b3(0x12b)] +
                _0x9672b3(0xdb))[_0x9672b3(0x17b)](_0x46ca8e[_0x9672b3(0x17b)]), $(
                'textarea[name=\x22' + _0x46ca8e[_0x9672b3(0x12b)] +
                '\x22]:not([data-prefill=\x22false\x22])')['val'](_0x46ca8e[_0x9672b3(0x17b)]), $(
                _0x9672b3(0x1ea) + _0x46ca8e['key'] + _0x9672b3(0xdb))[_0x9672b3(0x109)](
                'option[value=\x22' + _0x46ca8e[_0x9672b3(0x17b)] + '\x22]')[_0x9672b3(0x1cb)](
                _0x9672b3(0x209), !![]), $('input[name=\x22' + _0x46ca8e['key'] + _0x9672b3(
                0xdb))[_0x9672b3(0x10c)](_0x9672b3(0xef)), $(_0x9672b3(0x139) + _0x46ca8e[_0x9672b3(
                0x12b)] + _0x9672b3(0xdb))[_0x9672b3(0x10c)](_0x9672b3(0x193)));
        }
    }));
}
$(_0x5bdb0a(
    0x1aa))['on'](_0x5bdb0a(0x1c5), function() {
    next = !![], back = ![], nextStep(),
        selectionQuiz();
}), $('[data-form=\x22back-btn\x22]')['on']('click', function() {
    next
        = ![], back = !![], backStep();
}), $(steps)[_0x5bdb0a(0x109)](_0x5bdb0a(0x216))[_0x5bdb0a(
    0x148)]('[type=\x22radio\x22]')['on'](_0x5bdb0a(0xef), function(_0x9d177d) {
    validation(),
        andLogic(), addClickClass();
}), $(steps)['find'](_0x5bdb0a(0xe4))['on'](_0x5bdb0a(0x1c5),
    function() { skip = !![], validation(), addClickClass(); });
$(_0x5bdb0a(0x167))[_0x5bdb0a(0x1b0)](_0x5bdb0a(0x101)) ? $(_0x5bdb0a(0x23c))[_0x5bdb0a(0x110)](
    _0x5bdb0a(0x202)) : $(_0x5bdb0a(0x23c))['addClass'](_0x5bdb0a(0x202));

function clickableIndicator() {
    const _0x540f0f = _0x5bdb0a;
    $('[data-clickable]')[_0x540f0f(0x1b0)](_0x540f0f(0x1d2)) && ($(
        '[data-form=\x22progress-indicator\x22]')[_0x540f0f(0x110)](_0x540f0f(0x205)), $(
        '[data-clickable]')[_0x540f0f(0x1b0)](_0x540f0f(0x101)) ? (x = $(this)[_0x540f0f(0x137)](),
        updateStep()) : $(this)[_0x540f0f(0x137)]() <= progress && (x = $(this)[_0x540f0f(0x137)](),
        updateStep())), $(_0x540f0f(0x1b8))['text'](x + 0x1);
}
$(_0x5bdb0a(0x23c))['on'](_0x5bdb0a(
    0x1c5), clickableIndicator);
$('[data-form=\x22multistep\x22]')[_0x5bdb0a(0x1b0)]('debug-mode') && ($('[data-go-to]')[_0x5bdb0a(
    0x179)](function() {
    const _0xd761db = _0x5bdb0a;
    $(this)[_0xd761db(0x1ad)]('<br>Data\x20Go\x20To\x20=\x20', $(this)[_0xd761db(0x1b0)](
        'go-to'));
}), $(_0x5bdb0a(0xf1))[_0x5bdb0a(0x179)](function() {
    const _0xca4429 =
        _0x5bdb0a;
    $(this)['append']('<br>Data\x20Answer\x20=\x20', $(this)['data'](_0xca4429(0x131)));
}));

function resetFormly() {
    const _0x3c16dd = _0x5bdb0a;
    $(_0x3c16dd(0x118))['trigger']('reset'), $('[data-form=\x22multistep\x22]')[_0x3c16dd(0x246)]()[
        _0x3c16dd(0x109)](_0x3c16dd(0x231))[_0x3c16dd(0x130)](), x = 0x0, updateStep(), $(_0x3c16dd(
        0x118))['show'](), $(_0x3c16dd(0x1f6))['text'](oldSubmitText), $(_0x3c16dd(0x1f6))[_0x3c16dd(
        0x17b)](oldSubmitText), $(_0x3c16dd(0x1b8))['text'](0x1), $(_0x3c16dd(0x118))[_0x3c16dd(
        0x109)](_0x3c16dd(0xfd))[_0x3c16dd(0x14f)](_0x3c16dd(0x160))[_0x3c16dd(0x110)](_0x3c16dd(
        0xeb));
}
$(document)[_0x5bdb0a(0x10f)](function(_0x2c0e6a, _0x1b6e02, _0x2f1ff9) {
        const
            _0x270db8 = _0x5bdb0a;
        if (_0x2f1ff9[_0x270db8(0x151)][_0x270db8(0x235)](_0x270db8(
                0x136))) {
            const _0xf98c96 = _0x1b6e02[_0x270db8(0x166)] === 0xc8,
                _0x35c60a = 'redirect-form-hehexd';
            redirectTo && _0xf98c96 && (newTab ? window['open'](redirectTo, _0x270db8(0x19e)) :
                    setTimeout(() => {
                        const _0x2ff76c = _0x270db8;
                        location[_0x2ff76c(0x14c)] = redirectTo;
                    }, redirectDelay)), _0xf98c96 &&
                successCard !== '' && $(_0x270db8(0x1e4) + successCard + '\x22]')[_0x270db8(0x1c7)](),
                _0xf98c96 && formReset && setTimeout(() => { resetFormly(); }, resetDelay), !_0xf98c96 &&
                ($(_0x270db8(0x1f6))['val'](_0x270db8(0x128)), $(_0x270db8(0x1f6))[_0x270db8(0x142)](
                    _0x270db8(0x128)));
        }
    }), $(_0x5bdb0a(0x135))['on'](_0x5bdb0a(0x1c5), function() {
        const
            _0xa92214 = _0x5bdb0a;
        var _0x5d4397 = $(this)[_0xa92214(0x13f)]()['find'](
            '[data-input-field]')[_0xa92214(0x1b0)](_0xa92214(0x10b));
        setTimeout(function() {
                const _0x1df374 = _0xa92214;
                $(_0x1df374(0x139) + _0x5d4397 + '\x22]')[_0x1df374(0xf8)]();
            }, 0x64), back = !![], x =
            $(this)[_0xa92214(0x1b0)](_0xa92214(0x1ee)) - 0x1, updateStep(), countCard ? (curStep = x +
                0x1, $('[data-text=\x22total-steps\x22]')[_0xa92214(0x142)](steps[_0xa92214(0x1b9)])) : $(
                steps[x])[_0xa92214(0x1b0)]('card') ? curStep = x + 0x0 : curStep = x + 0x1, $(_0xa92214(
                0x1b8))[_0xa92214(0x142)](curStep), back = ![];
    }), $(_0x5bdb0a(0x155))['on'](_0x5bdb0a(
        0x1c5), function() {
        const _0x331ea5 = _0x5bdb0a;
        $(_0x331ea5(0x118))[_0x331ea5(0x10c)]('reset');
        let _0x2fd57f = $(this);
        $(this)[_0x331ea5(0x142)](_0x331ea5(0x128)), setTimeout(function() {
            const _0x5df836 =
                _0x331ea5;
            $(_0x2fd57f)[_0x5df836(0x142)](oldResetText), $(_0x2fd57f)[_0x5df836(0x246)](_0x5df836(
                    0x231))['hide'](), x = 0x0, updateStep(), $(_0x5df836(0x118))[_0x5df836(0x23a)](),
                $(_0x5df836(0x1f6))[_0x5df836(0x142)](oldSubmitText), $(_0x5df836(0x1f6))['val'](
                    oldSubmitText), $(_0x2fd57f)[_0x5df836(0x17b)](oldSubmitText), $(
                    '[data-text=\x22current-step\x22]')[_0x5df836(0x142)](0x1), $(_0x5df836(0x118))[
                    _0x5df836(0x109)](_0x5df836(0xfd))['siblings'](_0x5df836(0x160))['removeClass'](
                    _0x5df836(0xeb));
        }, resetDelay);
    }), $(_0x5bdb0a(0x1d3))['on'](_0x5bdb0a(0x23b),
        function(_0x72c699) {
            const _0x752d5b = _0x5bdb0a;
            if (_0x72c699['keyCode'] ===
                0xd) {
                _0x72c699[_0x752d5b(0x1f7)](), _0x72c699[_0x752d5b(0x108)]();
                if ($(steps[x])[
                        _0x752d5b(0x109)](_0x752d5b(0x1d4))['is'](':focus')) $(steps[x])['find'](
                    'textarea:focus')['val']($(steps[x])[_0x752d5b(0x109)]('textarea:focus')[_0x752d5b(
                    0x17b)]() + '\x0a');
                else $('[data-enter]')[_0x752d5b(0x1b0)]('enter') && fill && (totalSteps > curStep && $(
                    _0x752d5b(0x1aa))[0x0][_0x752d5b(0x1c5)]());
            }
        }), $(_0x5bdb0a(0x1d3))[_0x5bdb0a(0x129)](
        function(_0x32a903) {
            const _0x22e009 = _0x5bdb0a;
            (_0x32a903['metaKey'] || _0x32a903[_0x22e009(0x230)]) && _0x32a903[_0x22e009(0x1e8)] == 0xd &&
                (x >= steps[_0x22e009(0x1b9)] - 0x1 && fill ? $(steps[x])[_0x22e009(0x109)](_0x22e009(
                    0x114))[_0x22e009(0x1c5)]() : (_0x32a903[_0x22e009(0x1f7)](), _0x32a903[_0x22e009(
                    0x108)]()));
        }), $(_0x5bdb0a(0x118))[_0x5bdb0a(0x109)](':input')['on']('change',
        function() {
            const _0x3e2155 = _0x5bdb0a;
            all_data = all_data[_0x3e2155(0x16d)](_0x25cd60 => _0x25cd60[_0x3e2155(0x187)] !== $(this)[
                    _0x3e2155(0x1f0)](_0x3e2155(0x14d))), $(this)[_0x3e2155(0x1f0)](_0x3e2155(0xec)) ===
                'checkbox' ? $(this)['is'](_0x3e2155(0x18b)) ? all_data[_0x3e2155(0x1cd)]({
                    'field': $(
                        this)[_0x3e2155(0x1f0)]('name'),
                    'value': $(this)[_0x3e2155(0x14f)](_0x3e2155(0x115))[
                        _0x3e2155(0x142)]()
                }) : $('[data-input-field=\x22' + $(this)[_0x3e2155(0x1f0)](
                    _0x3e2155(0x14d)) + '\x22]')['hide']() : (all_data[_0x3e2155(0x1cd)]({
                    'field': $(this)[
                        _0x3e2155(0x1f0)](_0x3e2155(0x14d)),
                    'value': $(this)[_0x3e2155(0x17b)]()
                }), $(this)[
                    'val']() !== '' && resetInputErrorMessage($(this)[_0x3e2155(0x1f0)](_0x3e2155(0x14d)))),
                all_data['forEach'](function(_0x2cfaa0) {
                    const _0x18c528 = _0x3e2155;
                    $(_0x18c528(0x170) + _0x2cfaa0[_0x18c528(0x187)] + '\x22]')[_0x18c528(0x23a)](), $(
                        '[data-input-field=\x22' + _0x2cfaa0[_0x18c528(0x187)] + '\x22]')[_0x18c528(0x142)](
                        _0x2cfaa0[_0x18c528(0x10d)]);
                });
        }), $(_0x5bdb0a(0x118))[_0x5bdb0a(0x109)](_0x5bdb0a(
        0x1d4))['on'](_0x5bdb0a(0x193), function() {
        const _0x59dd4c = _0x5bdb0a;
        $(this)[_0x59dd4c(0x17b)]() !== '' && resetInputErrorMessage($(this)['attr']('name')),
            all_data = all_data[_0x59dd4c(0x16d)](_0x58073f => _0x58073f[_0x59dd4c(0x187)] !== $(this)[
                _0x59dd4c(0x1f0)](_0x59dd4c(0x14d))), all_data[_0x59dd4c(0x1cd)]({
                'field': $(this)[
                    _0x59dd4c(0x1f0)](_0x59dd4c(0x14d)),
                'value': $(this)[_0x59dd4c(0x17b)]()
            }), all_data[
                _0x59dd4c(0x243)](function(_0x210888) {
                const _0x2ca875 = _0x59dd4c;
                $('[data-input-field=\x22' + _0x210888[_0x2ca875(0x187)] + '\x22]')['show'](), $(
                    _0x2ca875(0x170) + _0x210888['field'] + '\x22]')[_0x2ca875(0x142)](_0x210888[
                    _0x2ca875(0x10d)]);
            });
    }), $('[data-form=\x22multistep\x22]')['find'](_0x5bdb0a(0x1c0))[
        'on'](_0x5bdb0a(0x193), function() {
        const _0x338e6d = _0x5bdb0a;
        $(this)['val']() !== '' && resetInputErrorMessage($(this)['attr'](_0x338e6d(0x14d)));
        var
            _0x5495a5 = $(this)[_0x338e6d(0x1b0)](_0x338e6d(0x174));
        all_data = all_data['filter'](_0x56dea5 => _0x56dea5[_0x338e6d(0x187)] !== $(this)[_0x338e6d(
                0x1f0)](_0x338e6d(0x14d))), all_data[_0x338e6d(0x1cd)]({
                'field': $(this)[_0x338e6d(
                    0x1f0)](_0x338e6d(0x14d)),
                'value': _0x5495a5 ? $(this)[_0x338e6d(0x109)](_0x338e6d(
                    0x1ff))[_0x338e6d(0x142)]() : $(this)[_0x338e6d(0x17b)]()
            }), all_data[_0x338e6d(0x243)]
            (function(_0x235ce1) {
                const _0xb4c375 = _0x338e6d;
                $(_0xb4c375(0x170) + _0x235ce1['field'] + '\x22]')['show'](), $(_0xb4c375(0x170) +
                    _0x235ce1[_0xb4c375(0x187)] + '\x22]')['text'](_0x235ce1[_0xb4c375(0x10d)]);
            });
    }),
    updateStep(), triggerInputAllData(), $(_0x5bdb0a(0x17f))[_0x5bdb0a(0x179)](function() {
        const
            _0x4b3d17 = _0x5bdb0a,
            _0x2f43a3 = $(this)[_0x4b3d17(0x109)](_0x4b3d17(0x16f)),
            _0x1b282a = [];
        _0x2f43a3[_0x4b3d17(0x179)](function() {
            const _0x1c9c90 = _0x4b3d17;
            _0x1b282a[_0x1c9c90(0x1cd)]($(this)[_0x1c9c90(0x142)]()['trim']());
        });
        const _0xd4673b = $(
            this)[_0x4b3d17(0x14f)](_0x4b3d17(0x1c6));
        $[_0x4b3d17(0x179)](_0x1b282a, function(_0x4fe3d1, _0x2b49fa) {
            const _0x377b79 = _0x4b3d17,
                _0x4af4f3 = $(_0x377b79(0xe8))[_0x377b79(0x17b)](_0x2b49fa)[_0x377b79(0x142)](
                    _0x2b49fa);
            _0xd4673b[_0x377b79(0x1ad)](_0x4af4f3);
        });
    });

function cloneRemove() {
    const _0x223413 = _0x5bdb0a;
    $(_0x223413(0x1e5))[_0x223413(0x179)](function() {
        const _0x2d3391 = _0x223413;
        $(this)['find'](_0x2d3391(0x21b))[_0x2d3391(0x1b9)] < 0x2 ? $(this)[_0x2d3391(0x109)](
            _0x2d3391(0x190))['hide']() : $(this)[_0x2d3391(0x109)](
            '[data-form=\x22remove-clone\x22]')[_0x2d3391(0x23a)]();
    });
}

function cloneRemoveInput() {
    const _0x2aa727 = _0x5bdb0a;
    $(_0x2aa727(0x234))[_0x2aa727(0x179)](function() {
        const _0x1169bc = _0x2aa727;
        console[_0x1169bc(0x1cf)]($(this)[_0x1169bc(0x109)](_0x1169bc(0x1a2))[_0x1169bc(0x1b9)]), $(
            this)['find']('[data-clone-input]')[_0x1169bc(0x1b9)] < 0x2 ? $(this)['find'](_0x1169bc(
            0x123))['hide']() : $(this)['find'](_0x1169bc(0x123))['show']();
    });
}
$(_0x5bdb0a(0x190))[
    'on'](_0x5bdb0a(0x1c5), function() {
    const _0x24690c = _0x5bdb0a,
        _0x1fb539 = $(this)[_0x24690c(0x246)]('[data-clone]')['length'] > 0x0 ? $(this)['parents'](
            _0x24690c(0x21b))[_0x24690c(0x137)]() : $(this)[_0x24690c(0x246)](_0x24690c(0xf0))[
            'index'](),
        _0x3ec006 = $(this)[_0x24690c(0x246)]('[data-clone]')[_0x24690c(0x1b9)] > 0x0 ? $(this)[
            _0x24690c(0x246)]('[data-clone]')[_0x24690c(0x1b0)](_0x24690c(0xf9)) : $(this)[_0x24690c(
            0x246)](_0x24690c(0xf0))[_0x24690c(0x1b0)](_0x24690c(0x20e));
    $(_0x24690c(0xe0) + _0x3ec006 + '\x22]')['eq'](_0x1fb539)[_0x24690c(0x1ec)](), $(_0x24690c(
        0x1ae) + _0x3ec006 + '\x22]')['eq'](_0x1fb539)[_0x24690c(0x1ec)](), cloneRemove();
    let
        _0x5434f5 = $(_0x24690c(0x153) + _0x3ec006 + '\x22]')[_0x24690c(0x1b0)](_0x24690c(0x206)),
        _0x1b0328 = $('[data-clone=\x22' + _0x3ec006 + '\x22]')[_0x24690c(0x1b9)];
    console[_0x24690c(0x1cf)](_0x1b0328, _0x5434f5), _0x1b0328 < _0x5434f5 && (console[_0x24690c(
            0x1cf)](_0x24690c(0x23a)), $(_0x24690c(0x153) + _0x3ec006 + '\x22]')[_0x24690c(0x23a)]
        ()), validation();
}), $(_0x5bdb0a(0x123))['on'](_0x5bdb0a(0x1c5), function() {
    const
        _0x16d11d = _0x5bdb0a;
    let _0x4d3477 = $(this)[_0x16d11d(0x14f)]()[_0x16d11d(0x1f0)](
            'name'),
        _0x17f7d7 = $(this)['parents'](_0x16d11d(0x1a2))[_0x16d11d(0x1b0)](_0x16d11d(0x105));
    $(this)[_0x16d11d(0x13f)](_0x16d11d(0x1a2))[_0x16d11d(0x1ec)](), $(_0x16d11d(0x170) +
        _0x4d3477 + '\x22]')[_0x16d11d(0x13f)](_0x16d11d(0x225))['remove']();
    let _0x486e70 = $(
            '[data-add-new-input=\x22' + _0x17f7d7 + '\x22]')['data']('add-new-input-limit'),
        _0x3e8717 = $(_0x16d11d(0x16b) + _0x17f7d7 + '\x22]')[_0x16d11d(0x1b9)];
    _0x3e8717 < _0x486e70 && $('[data-add-new-input=\x22' + _0x17f7d7 + '\x22]')[_0x16d11d(0x23a)]
        (), validation();
}), $(_0x5bdb0a(0x1dc))['on'](_0x5bdb0a(0x1c5), function() {
    const
        _0x328ced = _0x5bdb0a;
    let _0x52661e = $(this)[_0x328ced(0x1b0)](_0x328ced(0xfc)),
        _0x408275 = $(this)[_0x328ced(0x1b0)](_0x328ced(0x206));
    var _0x1be5ff = $(_0x328ced(0xe0) +
            _0x52661e + '\x22]')['eq'](0x0)[_0x328ced(0xf9)](!![]),
        _0x20eabc = $('[data-display=\x22' + _0x52661e + '\x22]')['eq'](0x0)['clone'](!![]);
    let
        _0xf568d0 = '';
    $(this)[_0x328ced(0x109)](_0x328ced(0x190))[_0x328ced(0x23a)](), cloneRemove(), _0x1be5ff[
            _0x328ced(0x109)](_0x328ced(0x1a2))['find'](_0x328ced(0xef))[_0x328ced(0x17b)](''),
        _0x1be5ff[_0x328ced(0x109)](_0x328ced(0x1a2))['find']('select')[_0x328ced(0x17b)](''),
        _0x1be5ff['find']('[data-clone-input]')[_0x328ced(0x109)](_0x328ced(0x1d4))[_0x328ced(
            0x17b)](''), _0x1be5ff[_0x328ced(0x109)](_0x328ced(0x1a2))[_0x328ced(0x148)](_0x328ced(
            0x1b5))['remove'](), _0x1be5ff['find'](_0x328ced(0x1a2))[_0x328ced(0x109)](_0x328ced(
            0x186))[_0x328ced(0x1c5)](), _0x20eabc[_0x328ced(0x109)](_0x328ced(0x225))[_0x328ced(
            0x148)](_0x328ced(0x1b5))[_0x328ced(0x1ec)](), _0x1be5ff['find'](_0x328ced(0xef))[
            _0x328ced(0x179)](function() {
            const _0x507263 = _0x328ced;
            if ($(this)[_0x507263(0x21e)]
                (_0x507263(0x1a2))[_0x507263(0x1b9)] > 0x0) {
                let _0x4e2fb4 = 0x0;
                const _0x5b7c67 =
                    $(this)['closest'](_0x507263(0x1a2))[_0x507263(0x1b0)](_0x507263(0x105));
                $(_0x507263(0x16b) + _0x5b7c67 + _0x507263(0x238))[_0x507263(0x179)](
                    function() {
                        const _0x168aba = _0x507263,
                            _0x1cc7f3 = $(this)[_0x168aba(0x1f0)](_0x168aba(0x14d));
                        if (_0x1cc7f3 &&
                            _0x1cc7f3[_0x168aba(0x111)](_0x168aba(0x11c))) {
                            const _0x6d827a = parseInt(
                                _0x1cc7f3[_0x168aba(0x249)]('-')[0x1]);
                            !isNaN(_0x6d827a) && _0x6d827a >
                                _0x4e2fb4 && (_0x4e2fb4 = _0x6d827a);
                        }
                    }), _0x4e2fb4++, _0xf568d0 = this[
                    'name'] + '-' + _0x4e2fb4;
            } else _0xf568d0 = this[_0x507263(0x14d)] + '-' + (
                parseInt($(_0x507263(0xe0) + _0x52661e + '\x22]')[_0x507263(0x13e)]()[_0x507263(
                    0x137)]()) + 0x1);
            $(this)[_0x507263(0x17b)](''), $(this)['attr'](_0x507263(0x14d), _0xf568d0), $(this)[
                _0x507263(0x1f0)](_0x507263(0xe7), _0xf568d0);
        }), _0x1be5ff[_0x328ced(0x109)](
            'textarea')[_0x328ced(0x179)](function() {
            const _0x4c2d31 = _0x328ced;
            if ($(this)[
                    _0x4c2d31(0x21e)](_0x4c2d31(0x1a2))['length'] > 0x0) {
                let _0x390ce0 = 0x0;
                const
                    _0x2c12e0 = $(this)[_0x4c2d31(0x21e)](_0x4c2d31(0x1a2))[_0x4c2d31(0x1b0)](_0x4c2d31(
                        0x105));
                $(_0x4c2d31(0x16b) + _0x2c12e0 + '\x22]\x20textarea')['each'](function() {
                    const
                        _0x466d7b = _0x4c2d31,
                        _0x32f1cf = $(this)[_0x466d7b(0x1f0)](_0x466d7b(0x14d));
                    if (_0x32f1cf &&
                        _0x32f1cf[_0x466d7b(0x111)](_0x466d7b(0x11c))) {
                        const _0x126a5e = parseInt(
                            _0x32f1cf['split']('-')[0x1]);
                        !isNaN(_0x126a5e) && _0x126a5e > _0x390ce0 &&
                            (_0x390ce0 = _0x126a5e);
                    }
                }), _0x390ce0++, _0xf568d0 = this[_0x4c2d31(
                    0x14d)] + '-' + _0x390ce0;
            } else _0xf568d0 = this[_0x4c2d31(0x14d)] + '-' + (
                parseInt($(_0x4c2d31(0xe0) + _0x52661e + '\x22]')['last']()[_0x4c2d31(0x137)]()) +
                0x1);
            $(this)[_0x4c2d31(0x17b)](''), $(this)['attr'](_0x4c2d31(0x14d), _0xf568d0), $(this)[
                _0x4c2d31(0x1f0)](_0x4c2d31(0xe7), _0xf568d0);
        }), _0x1be5ff['find'](_0x328ced(0x1c0))[
            'each'](function() {
            const _0x3ea95c = _0x328ced;
            if ($(this)[_0x3ea95c(0x21e)](
                    '[data-clone-input]')[_0x3ea95c(0x1b9)] > 0x0) {
                let _0x5c3576 = 0x0;
                const
                    _0x2c5bbf = $(this)[_0x3ea95c(0x21e)](_0x3ea95c(0x1a2))[_0x3ea95c(0x1b0)](_0x3ea95c(
                        0x105));
                $(_0x3ea95c(0x16b) + _0x2c5bbf + _0x3ea95c(0x229))[_0x3ea95c(0x179)](
                    function() {
                        const _0x3867fc = _0x3ea95c,
                            _0x4b5cc1 = $(this)[_0x3867fc(0x1f0)](_0x3867fc(0x14d));
                        if (_0x4b5cc1 &&
                            _0x4b5cc1[_0x3867fc(0x111)](_0x3867fc(0x11c))) {
                            const _0x53d9a7 = parseInt(
                                _0x4b5cc1[_0x3867fc(0x249)]('-')[0x1]);
                            !isNaN(_0x53d9a7) && _0x53d9a7 >
                                _0x5c3576 && (_0x5c3576 = _0x53d9a7);
                        }
                    }), _0x5c3576++, _0xf568d0 = this[
                    _0x3ea95c(0x14d)] + '-' + _0x5c3576;
            } else _0xf568d0 = this[_0x3ea95c(0x14d)] +
                '-' + (parseInt($(_0x3ea95c(0xe0) + _0x52661e + '\x22]')['last']()[_0x3ea95c(0x137)]
                    ()) + 0x1);
            $(this)[_0x3ea95c(0x17b)](''), $(this)[_0x3ea95c(0x1f0)](_0x3ea95c(0x14d), _0xf568d0),
                $(this)[_0x3ea95c(0x1f0)](_0x3ea95c(0xe7), _0xf568d0);
        }), _0x20eabc[_0x328ced(0x109)](
            _0x328ced(0x178))['each'](function() {
            const _0x2f41fa = _0x328ced;
            if ($(this)['data'](
                    _0x2f41fa(0x10b))) {
                let _0xcb3973 = 0x0;
                const _0x5a3d20 = $(this)[_0x2f41fa(
                    0x1b0)](_0x2f41fa(0x10b))[_0x2f41fa(0x249)]('-')[0x0];
                $(_0x2f41fa(0x1ae) + _0x52661e + _0x2f41fa(0x1f5) + _0x5a3d20 + '\x22]')[_0x2f41fa(
                    0x179)](function() {
                    const _0xbe3049 = _0x2f41fa,
                        _0xa1173e = $(this)['attr'](_0xbe3049(0x1b7)),
                        _0x2c3c39 = parseInt(_0xa1173e['split']('-')[0x1]);
                    !isNaN(_0x2c3c39) &&
                        _0x2c3c39 > _0xcb3973 && (_0xcb3973 = _0x2c3c39);
                }), _0xcb3973++;
                const
                    _0x57aee8 = _0x5a3d20 + '-' + _0xcb3973;
                $(this)[_0x2f41fa(0x1f0)]('data-input-field', _0x57aee8);
            }
        }), $(_0x328ced(0xe9) +
            _0x52661e + '\x22]')[_0x328ced(0x1ad)](_0x1be5ff), $(_0x328ced(0x122) + _0x52661e +
            '\x22]')[_0x328ced(0x1ad)](_0x20eabc), $(_0x328ced(0x173) + _0x52661e + '\x22]')[
            _0x328ced(0x179)](function() {
            const _0x14aa37 = _0x328ced;
            $(this)['text']($(this)[_0x14aa37(0x246)]('[data-clone=\x22' + _0x52661e + '\x22]')[
                'index']() + 0x1);
        }), $('[data-display-index=\x22' + _0x52661e + '\x22]')[_0x328ced(
            0x179)](function() {
            const _0x5f044e = _0x328ced;
            $(this)[_0x5f044e(0x142)]($(this)[_0x5f044e(0x246)](_0x5f044e(0x1ae) + _0x52661e +
                '\x22]')[_0x5f044e(0x137)]() + 0x1);
        });
    let _0x34afa2 = $('[data-clone-wrapper=\x22' +
        _0x52661e + _0x328ced(0x1a6) + _0x52661e + '\x22]')[_0x328ced(0x1b9)];
    if (_0x34afa2 >=
        _0x408275) { $(this)[_0x328ced(0x130)](); return; }
    $(this)[_0x328ced(0x23a)](),
        validation();
}), $(_0x5bdb0a(0x116))['on'](_0x5bdb0a(0x1c5), function() {
    const _0x42d93d =
        _0x5bdb0a,
        _0x433637 = $(this)[_0x42d93d(0x246)](_0x42d93d(0x21b))['index']();
    let _0x2f603f = $(this)[
        'data']('add-new-input');
    var _0x400b55 = $('[data-clone-input=\x22' + _0x2f603f + '\x22]')[
            'eq'](0x0)['clone'](!![]),
        _0x3de485 = $(_0x42d93d(0x184) + _0x2f603f + '\x22]')['eq'](0x0)['clone'](!![]);
    let
        _0x2115ec = $(this)[_0x42d93d(0x1b0)](_0x42d93d(0x16c)),
        _0x428e41 = 0x0;
    $(_0x42d93d(0x16b) + _0x2f603f + _0x42d93d(0x238))[_0x42d93d(0x179)](function() {
            const
                _0x4820c9 = _0x42d93d,
                _0x33ac2e = $(this)['attr'](_0x4820c9(0x14d));
            if (_0x33ac2e) {
                const _0x2ea0a4 =
                    parseInt(_0x33ac2e[_0x4820c9(0x249)]('-')[0x1]);
                !isNaN(_0x2ea0a4) && _0x2ea0a4 >
                    _0x428e41 && (_0x428e41 = _0x2ea0a4);
            }
        }), $('[data-clone-input=\x22' + _0x2f603f +
            _0x42d93d(0x229))[_0x42d93d(0x179)](function() {
            const _0x436416 = _0x42d93d,
                _0x2f0556 = $(this)[_0x436416(0x1f0)]('name');
            if (_0x2f0556) {
                const _0x2feaab =
                    parseInt(_0x2f0556[_0x436416(0x249)]('-')[0x1]);
                !isNaN(_0x2feaab) && _0x2feaab >
                    _0x428e41 && (_0x428e41 = _0x2feaab);
            }
        }), $(_0x42d93d(0x16b) + _0x2f603f +
            _0x42d93d(0x208))['each'](function() {
            const _0x1bb485 = _0x42d93d,
                _0x195591 = $(this)[_0x1bb485(0x1f0)](_0x1bb485(0x14d));
            if (_0x195591) {
                const
                    _0x34e7e8 = parseInt(_0x195591[_0x1bb485(0x249)]('-')[0x1]);
                !isNaN(_0x34e7e8) &&
                    _0x34e7e8 > _0x428e41 && (_0x428e41 = _0x34e7e8);
            }
        }), _0x428e41++, _0x400b55['find']
        (_0x42d93d(0xef))[_0x42d93d(0x179)](function() {
            const _0x1547e8 = _0x42d93d,
                _0xd53e41 = $(this)[_0x1547e8(0x1f0)]('name');
            let _0x5abebe = _0xd53e41 + '-' +
                _0x428e41;
            $(this)[_0x1547e8(0x17b)](''), $(this)[_0x1547e8(0x1f0)](_0x1547e8(0x14d), _0x5abebe),
                $(this)[_0x1547e8(0x1f0)]('data-name', _0x5abebe);
        }), _0x400b55[_0x42d93d(0x109)](
            _0x42d93d(0x1c0))[_0x42d93d(0x179)](function() {
            const _0x855f79 = _0x42d93d,
                _0xb04f69 = $(this)['attr'](_0x855f79(0x14d));
            let _0x1c57c7 = _0xb04f69 + '-' +
                _0x428e41;
            $(this)[_0x855f79(0x17b)](''), $(this)['attr'](_0x855f79(0x14d), _0x1c57c7), $(this)[
                _0x855f79(0x1f0)]('data-name', _0x1c57c7);
        }), _0x400b55[_0x42d93d(0x109)](_0x42d93d(
            0x1d4))['each'](function() {
            const _0x1561e3 = _0x42d93d,
                _0x276fd9 = $(this)[_0x1561e3(0x1f0)](_0x1561e3(0x14d));
            let _0x1b9a33 = _0x276fd9 +
                '-' + _0x428e41;
            $(this)[_0x1561e3(0x17b)](''), $(this)['attr'](_0x1561e3(0x14d), _0x1b9a33), $(this)[
                _0x1561e3(0x1f0)](_0x1561e3(0xe7), _0x1b9a33);
        }), _0x3de485[_0x42d93d(0x109)](
            _0x42d93d(0x178))['each'](function() {
            const _0x9ceb1b = _0x42d93d;
            $(this)[_0x9ceb1b(0x1f0)]('data-input-field', _0x9ceb1b(0x11c) + _0x428e41);
        }), $(this)[
            _0x42d93d(0x14f)](_0x42d93d(0x12c) + _0x2f603f + '\x22]')[_0x42d93d(0x1ad)](_0x400b55), $(
            _0x42d93d(0xf0))['eq'](_0x433637)['find']('[data-display-input-wrapper=\x22' + _0x2f603f +
            '\x22]')[_0x42d93d(0x1ad)](_0x3de485), $(_0x42d93d(0x24e) + _0x2f603f + '\x22]')[
            _0x42d93d(0x179)](function() {
            const _0x311210 = _0x42d93d;
            $(this)[_0x311210(0x142)]($(this)[_0x311210(0x246)]('[data-clone-input=\x22' +
                _0x2f603f + '\x22]')[_0x311210(0x137)]() + 0x1);
        }), $(_0x42d93d(0x213) + _0x2f603f +
            '\x22]')[_0x42d93d(0x179)](function() {
            const _0x2e1766 = _0x42d93d;
            $(this)[_0x2e1766(0x142)]($(this)['parents']('[data-display-input=\x22' + _0x2f603f +
                '\x22]')['index']() + 0x1);
        });
    let _0x313f7e = $('[data-clone-input-wrapper=\x22' +
        _0x2f603f + _0x42d93d(0x1b1) + _0x2f603f + '\x22]')['length'];
    if (_0x313f7e >=
        _0x2115ec) { $(this)[_0x42d93d(0x130)](); return; }
    $(this)['show'](), cloneRemoveInput(),
        validation();
}), $(_0x5bdb0a(0x232))['on']('click', function() {
    const _0x497fa8 =
        _0x5bdb0a,
        _0x2cfbc4 = $(this)[_0x497fa8(0x1b0)](_0x497fa8(0x19a));
    $(_0x497fa8(0x139) + _0x2cfbc4 + '\x22]')[_0x497fa8(0x17b)](''), validation();
});

function andLogic() {
    const _0x5b0eb8 = _0x5bdb0a;
    conditionalResult && (steps['eq'](x)[_0x5b0eb8(0x109)](_0x5b0eb8(0xe6))[_0x5b0eb8(0x130)](),
        steps['eq'](x)['find']('[data-show-if]')['each'](function() {
            const _0x3cf793 = _0x5b0eb8;

            function _0x30d876(_0x1677b1) {
                const _0x3c65ba = _0x2d8d,
                    _0x1a5111 = _0x1677b1[_0x3c65ba(0x249)]('&'),
                    _0x201bbc = [];
                return _0x1a5111[_0x3c65ba(0x243)](_0xc632fc => {
                        const _0x1d15ef =
                            _0x3c65ba,
                            [_0x5a29d0, _0x13a08a] = _0xc632fc['split']('=');
                        _0x201bbc[_0x1d15ef(0x1cd)]({ 'field': _0x5a29d0, 'value': _0x13a08a });
                    }),
                    _0x201bbc;
            }
            const _0x364304 = $(this)['attr'](_0x3cf793(0x12d)),
                _0x5e1742 = _0x30d876(_0x364304);

            function _0x517d65(_0xc2dc48, _0x1f49c9) {
                const _0x588a1e = _0x3cf793;
                return _0x1f49c9[
                    _0x588a1e(0x127)]((_0x217b66, _0x565747) => {
                    const _0x66c2e3 = _0x588a1e;
                    if (
                        _0xc2dc48[0x0] && _0x217b66[_0x66c2e3(0x187)] === _0xc2dc48[0x0][_0x66c2e3(
                            0x187)]) return _0xc2dc48[_0x66c2e3(0x13b)]((_0x1fd7e0, _0x58186e) =>
                        _0x1f49c9[_0x565747 + _0x58186e] && _0x1f49c9[_0x565747 + _0x58186e][
                            'field'
                        ] === _0x1fd7e0[_0x66c2e3(0x187)] && _0x1f49c9[_0x565747 +
                            _0x58186e][_0x66c2e3(0x10d)] === _0x1fd7e0[_0x66c2e3(0x10d)]
                    );
                    return ![];
                });
            }
            const _0x100b5e = _0x517d65(_0x5e1742, all_data);
            _0x100b5e ? $(this)[_0x3cf793(0x23a)]() : $(this)[_0x3cf793(0x130)]();
        }));
}
$(_0x5bdb0a(
    0x140))['addClass']('hide'), $(_0x5bdb0a(0x14e))['on'](_0x5bdb0a(0xef), function() {
    const
        _0x4bea80 = _0x5bdb0a,
        _0x1bc0b9 = $(this)['data'](_0x4bea80(0x14a)),
        _0x5a936c = $(this)['val'](),
        _0x48af81 = $(_0x4bea80(0x212) + _0x1bc0b9 + '\x22]')['data'](_0x4bea80(0xea));
    let
        _0xd5fa02 = $(_0x4bea80(0x212) + _0x1bc0b9 + _0x4bea80(0x24a) + _0x5a936c + '\x22]'),
        _0x1d562b = $('[data-progressive-target=\x22' + _0x1bc0b9 + _0x4bea80(0x154));
    $(_0x4bea80(0x212) + _0x1bc0b9 + '\x22]')['addClass']('f-hide'), $(_0x4bea80(0x212) +
        _0x1bc0b9 + '\x22]')[_0x4bea80(0x110)](_0x4bea80(0x215));
    _0x5a936c !== '' && (_0x48af81 === '*' && _0x5a936c !== '' ? (_0x1d562b['removeClass'](
        _0x4bea80(0x156)), _0x1d562b[_0x4bea80(0x1a9)](_0x4bea80(0x215))) : (_0xd5fa02[
        _0x4bea80(0x110)](_0x4bea80(0x156)), _0xd5fa02[_0x4bea80(0x1a9)](_0x4bea80(0x215))));

    function _0x587fbb(_0x3c4e3b) {
        const _0x262532 = _0x4bea80;
        _0x3c4e3b && ($(_0x262532(0x248) + _0x3c4e3b + '\x22]')[_0x262532(0x17b)]() !== '' && $(
            '[data-progressive-input=\x22' + _0x3c4e3b + '\x22]')[_0x262532(0x10c)](_0x262532(
            0xef)));
    }
    let _0x5bcc41 = $(_0x4bea80(0x212) + _0x1bc0b9 + '\x22]')[_0x4bea80(0x109)](
        _0x4bea80(0x14e))[_0x4bea80(0x1b0)]('progressive-input');
    _0x587fbb(_0x5bcc41), $(_0x4bea80(0x1be))[_0x4bea80(0x179)](function() {
        const _0x7c02e0 =
            _0x4bea80,
            _0x3d61ff = $(this)[_0x7c02e0(0x1b0)](_0x7c02e0(0x14a));
        $(_0x7c02e0(0x212) + _0x3d61ff + '\x22]')[_0x7c02e0(0x110)]('f-show'), $(_0x7c02e0(
            0x212) + _0x3d61ff + '\x22]')[_0x7c02e0(0x1a9)](_0x7c02e0(0x156));
    });
});

function addClickClass() {
    const _0x5f3d50 = _0x5bdb0a,
        _0x56b01e = $(this)['data'](_0x5f3d50(0x15c)),
        _0xf6461a = $(this)[_0x5f3d50(0x1f0)](_0x5f3d50(0x14d));
    $(_0x5f3d50(0x139) + _0xf6461a + '\x22]')[_0x5f3d50(0x13f)]()['removeClass'](_0x56b01e), $(this)[
        'is'](_0x5f3d50(0x18b)) && $(this)['parent']()[_0x5f3d50(0x1a9)](_0x56b01e);
}
$(
    '[data-click-addclass]')['on'](_0x5bdb0a(0x193), addClickClass);

function updateCounter(_0x9941fd) {
    const _0x139b7b = _0x5bdb0a;
    var _0x3ef668 = new Date(),
        _0x435a22 = _0x3ef668[_0x139b7b(0x11a)](),
        _0x22ba87 = btoa('counter'),
        _0x12f1a0 = btoa(_0x435a22['toString']()),
        _0x1b0d01 = getCookie(_0x22ba87);
    !_0x1b0d01 || _0x1b0d01 !== _0x12f1a0 ? $[_0x139b7b(0x1fc)](
        _0x139b7b(0x15e),
        function() {
            const _0x1fec31 = _0x139b7b;
            console[_0x1fec31(0x1cf)]('Counter\x20updated\x20successfully.'), document[_0x1fec31(
                0x1ce)] = _0x22ba87 + '=' + _0x12f1a0;
        })[_0x139b7b(0x218)](function(_0xfbae81,
        _0x36727a, _0x455627) {
        const _0x20377d = _0x139b7b;
        console['error'](_0x20377d(0x24d), _0x455627);
    }) : console['log'](
        'Counter\x20already\x20updated\x20for\x20this\x20month.');
}

function getCookie(_0x4fb5cd) {
    const _0x791db8 = _0x5bdb0a;
    var _0x1a5d0f = null;
    if (document[
            _0x791db8(0x1ce)] && document[_0x791db8(0x1ce)] !== '') {
        var _0x225331 = document['cookie'][
            'split'
        ](';');
        for (var _0xef300 = 0x0; _0xef300 < _0x225331[_0x791db8(0x1b9)]; _0xef300++) {
            var
                _0x26b9e5 = _0x225331[_0xef300][_0x791db8(0x103)]();
            if (_0x26b9e5[_0x791db8(0x10a)](0x0,
                    _0x4fb5cd[_0x791db8(0x1b9)] + 0x1) === _0x4fb5cd + '=') {
                _0x1a5d0f = decodeURIComponent(
                    _0x26b9e5['substring'](_0x4fb5cd[_0x791db8(0x1b9)] + 0x1)
                );
                break;
            }
        }
    }
    return _0x1a5d0f;
}
updateCounter(), scrollTop(), cloneRemove(),
    cloneRemoveInput();
const formlyUrlParams = new URLSearchParams(window[_0x5bdb0a(0x106)][_0x5bdb0a(0x20d)]),
    formlySupportParam = formlyUrlParams['get'](_0x5bdb0a(0x185)),
    showButton = formlySupportParam === _0x5bdb0a(0x143),
    passIcon = _0x5bdb0a(0x1a1),
    failIcon =
    '<span\x20class=\x22f-icon-embed-xxsmall-2\x20w-embed\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--carbon\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2032\x2032\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M16\x202C8.2\x202\x202\x208.2\x202\x2016s6.2\x2014\x2014\x2014s14-6.2\x2014-14S23.8\x202\x2016\x202m5.4\x2021L16\x2017.6L10.6\x2023L9\x2021.4l5.4-5.4L9\x2010.6L10.6\x209l5.4\x205.4L21.4\x209l1.6\x201.6l-5.4\x205.4l5.4\x205.4z\x22></path></svg></span>';
let isScriptLoaded = !![],
    scriptLocation = _0x5bdb0a(0x195),
    isMultistepAttributePresent = !![],
    isMultistepOnFormElement = !![],
    areButtonsPresent = !![],
    isNextBtnOnSubmit = ![],
    isSubmitBtnOnSubmit = !![],
    isBackBtnOnSubmit = ![],
    formType = logicExtra ? _0x5bdb0a(0x21d) : 'Basic\x20(No\x20Formly\x20Logic)',
    resultStatus = _0x5bdb0a(0xdf),
    scriptSrcAdded = '';

function isElementPresent(_0x329c8c, _0x3f6fe2) {
    const _0x440da5 = _0x5bdb0a;
    return document[
            _0x440da5(0x197)]('[' + _0x3f6fe2 + '=\x22' + _0x329c8c + '\x22]') !==
        null;
}
isMultistepAttributePresent = isElementPresent(_0x5bdb0a(0x19f), 'data-form');
const multistepForm = document[_0x5bdb0a(0x197)](_0x5bdb0a(0x171)),
    formStepLength = multistepForm['querySelectorAll']('[data-form=\x22step\x22]')[_0x5bdb0a(0x1b9)];
isMultistepOnFormElement = multistepForm !== null;
const multistepContainer = document['querySelector']('[data-form=\x22multistep\x22]'),
    nextBtnExist = multistepContainer['querySelector'](_0x5bdb0a(0x1aa)),
    backBtnExist = multistepContainer[_0x5bdb0a(0x197)](_0x5bdb0a(0x1eb)),
    submitBtnExist = multistepContainer['querySelector']('[data-form=\x22submit-btn\x22]');
areButtonsPresent = nextBtnExist !== null && backBtnExist !== null && submitBtnExist !== null,
    isNextBtnOnSubmit = nextBtnExist && nextBtnExist[_0x5bdb0a(0x169)][_0x5bdb0a(0x220)]() ===
    _0x5bdb0a(0xef), isSubmitBtnOnSubmit = submitBtnExist && submitBtnExist[_0x5bdb0a(0x169)][
        _0x5bdb0a(0x220)
    ]() === _0x5bdb0a(0xef) && submitBtnExist[_0x5bdb0a(0xec)]['toLowerCase']() === _0x5bdb0a(0xdd),
    isBackBtnOnSubmit = backBtnExist && backBtnExist[_0x5bdb0a(0x169)][_0x5bdb0a(0x220)]() ===
    'input';
const checkPowerup = _0x43e582 => document['querySelector'](_0x43e582) !== null,
    progressBarAttr = checkPowerup(_0x5bdb0a(0x22a)),
    progressIndicatorAttr = checkPowerup(_0x5bdb0a(0x191)),
    customProgressAttr = checkPowerup('[data-form=\x22progress-indicator\x22]'),
    cardDivAttr = checkPowerup('[data-card=\x22true\x22]'),
    currentStepAttr = checkPowerup('[data-text=\x22current-step\x22]'),
    totalStepAttr = checkPowerup(_0x5bdb0a(0x125)),
    enterAttr = checkPowerup(_0x5bdb0a(0x1c1)),
    submitAttr = checkPowerup('[data-submit=\x22true\x22]'),
    radioSkipAttr = checkPowerup(_0x5bdb0a(0x168)),
    customCheckboxAttr = checkPowerup(_0x5bdb0a(0x21a)),
    recapatchaAttr = checkPowerup(_0x5bdb0a(0x1a4));
(!isScriptLoaded || scriptLocation !== 'head' || !isMultistepAttributePresent || !
    isMultistepOnFormElement || !areButtonsPresent || isNextBtnOnSubmit || !isSubmitBtnOnSubmit ||
    isBackBtnOnSubmit) && (resultStatus = 'FAIL');

function isScriptUrlMatch(_0x448b78, _0x3d8fe8) {
    for (var _0x18fde9 = 0x0; _0x18fde9 < _0x3d8fe8[
            'length']; _0x18fde9++) {
        if (_0x448b78['includes'](_0x3d8fe8[_0x18fde9])) return !
            ![];
    }
    return ![];
}
var keywordsToCheck = ['videsigns', _0x5bdb0a(0x146)],
    scripts = document[_0x5bdb0a(0x1c4)]('script'),
    matchedScripts = [];
for (var i = 0x0; i < scripts[_0x5bdb0a(0x1b9)]; i++) {
    var scriptSrcs = scripts[i][_0x5bdb0a(
        0x199)];
    isScriptUrlMatch(scriptSrcs, keywordsToCheck) && matchedScripts[_0x5bdb0a(0x1cd)](scriptSrcs);
}
if (matchedScripts[_0x5bdb0a(0x1b9)] > 0x0) {
    scriptSrcAdded = matchedScripts;
    const script =
        document['querySelector'](_0x5bdb0a(0x1b6) + scriptSrcAdded + '\x22]');
    script && (scriptLocation = script[_0x5bdb0a(0x211)][_0x5bdb0a(0x169)] === _0x5bdb0a(0x165) ?
        'Before\x20&lt;/body&gt;\x20tag' : 'Inside\x20<head>\x20tag');
} else scriptSrcAdded =
    'No\x20Formly\x20script\x20added\x20to\x20the\x20page!' + failIcon;
const newElement = document[_0x5bdb0a(0x17e)]('div'),
    newStyle = document[_0x5bdb0a(0x17e)](_0x5bdb0a(0x1ba));
newStyle[_0x5bdb0a(0x228)] = _0x5bdb0a(0x23e), document[_0x5bdb0a(0x195)][_0x5bdb0a(0xff)](
    newStyle);
showButton && document[_0x5bdb0a(0x1d3)][_0x5bdb0a(0xff)](newElement);
newElement['innerHTML'] = _0x5bdb0a(0x1e1) + formType + _0x5bdb0a(0x10e) + scriptSrcAdded +
    _0x5bdb0a(0x1d7) + scriptLocation + _0x5bdb0a(0x250) + (isMultistepOnFormElement ? passIcon :
        failIcon) +
    '</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Multistep\x20form\x20attribute\x20is\x20on\x20Form\x20element\x20and\x20not\x20on\x20Form\x20Block\x20element\x0a\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>2.\x20Form\x20Steps:\x20data-form=step\x0a\x20\x20\x20\x20\x20\x20\x20\x20' +
    (formStepLength > 0x0 ? passIcon : failIcon) + _0x5bdb0a(0x1f3) + formStepLength + _0x5bdb0a(
        0x12f) + (nextBtnExist ? passIcon : failIcon) +
    '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Next\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button\x20' +
    (isNextBtnOnSubmit ? failIcon : passIcon) +
    '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>4.\x20Back\x20Buttons:\x20data-form=next-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Back\x20button\x20present?\x20' +
    (backBtnExist ? passIcon : failIcon) +
    '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Back\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button' +
    (isBackBtnOnSubmit ? failIcon : passIcon) +
    '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>5.\x20Submit\x20Buttons:\x20data-form=next-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Submit\x20button\x20present?\x20' +
    (backBtnExist ? passIcon : failIcon) + _0x5bdb0a(0x236) + (isSubmitBtnOnSubmit ? passIcon :
        failIcon) +
    '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Powerups</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20' +
    (progressBarAttr && progressIndicatorAttr ? _0x5bdb0a(0x19c) + passIcon + _0x5bdb0a(0x177) : '') +
    _0x5bdb0a(0x117) + (customProgressAttr ? _0x5bdb0a(0x1af) + passIcon + '</strong>' : '') +
    '\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + (cardDivAttr ?
        '<strong\x20class=\x22f-text-white\x22>Intro\x20Cards\x20Or\x20Steps\x20Without\x20Inputs\x20' +
        passIcon + '</strong>' : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + (currentStepAttr ?
        '<strong\x20class=\x22f-text-white\x22>Current\x20Step\x20Text\x20' + passIcon + _0x5bdb0a(
            0x177) : '') + _0x5bdb0a(0x117) + (totalStepAttr ?
        '<strong\x20class=\x22f-text-white\x22>Total\x20Step\x20Text\x20' + passIcon + '</strong>' : ''
    ) + _0x5bdb0a(0x117) + (enterAttr ? _0x5bdb0a(0x138) + passIcon + _0x5bdb0a(0x177) : '') +
    _0x5bdb0a(0x117) + (submitAttr ? _0x5bdb0a(0x18c) + passIcon + _0x5bdb0a(0x177) : '') + _0x5bdb0a(
        0x117) + (radioSkipAttr ? _0x5bdb0a(0x1cc) + passIcon + '</strong>' : '') + _0x5bdb0a(0x117) + (
        customCheckboxAttr ? _0x5bdb0a(0xf6) + passIcon + _0x5bdb0a(0x177) : '') + _0x5bdb0a(0x117) + (
        recapatchaAttr ? _0x5bdb0a(0x1db) + passIcon + _0x5bdb0a(0x177) : '') + _0x5bdb0a(0x224);

function openNav() {
    const _0x31e26e = _0x5bdb0a;
    document[_0x31e26e(0x1bd)](_0x31e26e(0x11e))[_0x31e26e(0x1ba)][_0x31e26e(0x18e)] = _0x31e26e(
            0x1de), document[_0x31e26e(0x1bd)](_0x31e26e(0x11e))[_0x31e26e(0x1ba)][_0x31e26e(0x141)] =
        '12px';
}

function closeNav() {
    const _0xa44239 = _0x5bdb0a;
    document['getElementById'](_0xa44239(0x11e))[_0xa44239(0x1ba)][_0xa44239(0x18e)] = '0', document[
        'getElementById'](_0xa44239(0x11e))['style'][_0xa44239(0x141)] = _0xa44239(0x189);
}