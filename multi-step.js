// 13 Mar 2024
// Feature update and bug fix
// 1. Fix selections array issue
// 2. Fix progressive form issue
// 3. Updated class naming for progressive form

const _0x5851c4 = _0x1148;
(function(_0x40c0ed, _0xb753d9) {
    const _0x4e5444 = _0x1148,
        _0x229c45 = _0x40c0ed();
    while (!![]) {
        try {
            const _0x124551 = parseInt(_0x4e5444(0xe7)) /
                0x1 * (parseInt(_0x4e5444(0x180)) / 0x2) + parseInt(_0x4e5444(0xea)) / 0x3 + parseInt(
                    _0x4e5444(0x1ba)) / 0x4 * (-parseInt(_0x4e5444(0x17c)) / 0x5) + parseInt(_0x4e5444(
                    0x100)) / 0x6 + parseInt(_0x4e5444(0x1f3)) / 0x7 + -parseInt(_0x4e5444(0x118)) / 0x8 * (-parseInt(_0x4e5444(0x163)) / 0x9) + -parseInt(_0x4e5444(0x150)) / 0xa * (parseInt(
                    _0x4e5444(0xb7)) / 0xb);
            if (_0x124551 === _0xb753d9) break;
            else _0x229c45['push'](_0x229c45['shift']());
        } catch (_0x47317c) {
            _0x229c45['push'](
                _0x229c45['shift']());
        }
    }
}(_0xe03e, 0xbcfd2));
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
let steps = $(_0x5851c4(0x11c)),
    progressbarClone = $(_0x5851c4(0x130))[_0x5851c4(0xf1)](),
    progressbar, weightedSelection = $(_0x5851c4(0x1a2))[_0x5851c4(0x185)](_0x5851c4(0x1a0)),
    weightedSelectionRange = $(_0x5851c4(0x1ed))['data'](_0x5851c4(0x175)),
    selectMultiple = $(_0x5851c4(0xe9))[_0x5851c4(0x185)](_0x5851c4(0x169)),
    customError = $('[data-custom-error-message]')[_0x5851c4(0x185)](_0x5851c4(0xb6)),
    reinitIX = $('[data-reinit]')[_0x5851c4(0x185)](_0x5851c4(0x1eb)),
    memory = $('[data-memory]')[_0x5851c4(0x185)](_0x5851c4(0x188)),
    quiz = $('[data-quiz]')['data'](_0x5851c4(0xae));
const urlFormly = new URL(window[_0x5851c4(0x143)][_0x5851c4(0x1b9)]);
let _params = $('[data-query-param]')['data'](_0x5851c4(0x137)),
    logicExtra = $(_0x5851c4(0x12f))['data'](_0x5851c4(0x1ea)),
    oldSubmitText = $(_0x5851c4(0xbb))['val'](),
    oldResetText = $(_0x5851c4(0x197))[_0x5851c4(0x13d)](),
    formReset = $(_0x5851c4(0x12f))['data']('reset'),
    resetDelay = $(_0x5851c4(0x16b))['data'](_0x5851c4(0x21b)) ? $(_0x5851c4(0x16b))[_0x5851c4(0x185)]
    (_0x5851c4(0x21b)) : 0x7d0,
    redirectDelay = $(_0x5851c4(0x12d))[_0x5851c4(0x185)](_0x5851c4(0x151)) ? $(_0x5851c4(0x12d))[
        'data']('redirect-delay') : 0x7d0,
    phoneFormat = $(_0x5851c4(0x12f))['data'](_0x5851c4(0x14e)),
    scrollToTop = $('[data-form=\x22multistep\x22]')[_0x5851c4(0x185)](_0x5851c4(0x160)),
    trackLastStep = $(_0x5851c4(0xfa))[_0x5851c4(0x185)]('last-step'),
    conditionalResult = $(_0x5851c4(0x14d))[_0x5851c4(0x185)](_0x5851c4(0xe5)) === _0x5851c4(0x19f),
    scrollTopOffset = parseInt($(_0x5851c4(0x12f))[_0x5851c4(0x185)](_0x5851c4(0x15c)));
const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
savedFilledInput = JSON[_0x5851c4(0x187)](localStorage[_0x5851c4(0x20c)](_0x5851c4(0x233))),
    formlyLastStep = JSON[_0x5851c4(0x187)](localStorage[_0x5851c4(0x20c)](_0x5851c4(0xef))),
    formlyLastStepAnswer = JSON[_0x5851c4(0x187)](localStorage['getItem'](_0x5851c4(0xba)));
trackLastStep && (formlyLastStep > x && (x = formlyLastStep), formlyLastStepAnswer && (selections =
    formlyLastStepAnswer));
$(_0x5851c4(0x1d8))[_0x5851c4(0x161)](function() {
    const _0x524ac1 = _0x5851c4;
    ogCloneArr[_0x524ac1(0xac)]({
        'name': $(this)[_0x524ac1(0x185)]('clone'),
        'element': $(this)[
            _0x524ac1(0xf1)](!![]),
        'display': $('[data-display=\x22' + $(this)[_0x524ac1(0x185)](
            'clone') + '\x22]')['eq'](0x0)[_0x524ac1(0xf1)](!![])
    });
});
$('div.g-recaptcha')[_0x5851c4(0x18f)] > 0x0 && (notRobot = ![]);

function recaptcha(_0x1263e9) { notRobot = !![]; }
$('[data-count-card]')[_0x5851c4(0x18f)] > 0x0 &&
    (countCard = $(_0x5851c4(0x120))[_0x5851c4(0x185)](_0x5851c4(0x1ad)));
$(_0x5851c4(0x1f0))[_0x5851c4(0x1c6)](), $(progressbarClone)[_0x5851c4(0x1f1)](_0x5851c4(0x176)), $(
    _0x5851c4(0x14a))[_0x5851c4(0xc3)]()['remove'](), $(_0x5851c4(0xbb))[_0x5851c4(0x1c6)](), $(
    '[data-form-ms=\x22submit-btn\x22]')[_0x5851c4(0x1c6)](), steps[_0x5851c4(0x161)](
    function() {
        const _0x2bd8b8 = _0x5851c4;
        $(_0x2bd8b8(0x14a))['append'](progressbarClone[_0x2bd8b8(0xf1)](!![], !![]));
    }), $(_0x5851c4(
    0xe4))[_0x5851c4(0x1c6)]();
countCard ? (curStep = curStep + 0x1, totalSteps = steps[_0x5851c4(0x18f)], $(
    '[data-text=\x22total-steps\x22]')[_0x5851c4(0x13d)](totalSteps)) : ($(steps[x])[_0x5851c4(
    0x185)](_0x5851c4(0xf5)) ? curStep = curStep + 0x0 : curStep = curStep + 0x1, totalSteps = $(
    '[data-form=\x22step\x22]:not([data-card=\x22true\x22])')['length'], $(
    '[data-text=\x22total-steps\x22]')[_0x5851c4(0x13d)](totalSteps), $(
    '[data-form=\x22step\x22][data-card]')[_0x5851c4(0x161)](function() {
    const _0x45fabb =
        _0x5851c4;
    $($('[data-form=\x22progress-indicator\x22]')[$(this)[_0x45fabb(0x21c)]()])[_0x45fabb(
        0x1c6)]();
}));
progressbar = $(_0x5851c4(0x14a))[_0x5851c4(0xc3)](), $(_0x5851c4(0x130))['on'](_0x5851c4(0xb5),
    clickableIndicator), $(_0x5851c4(0x22f))[_0x5851c4(0x13d)](curStep), steps['hide'](), $(
    _0x5851c4(0x148))[_0x5851c4(0x1c6)](), $(_0x5851c4(0x1bd))[_0x5851c4(0x161)](function() {
    const
        _0x47c6cb = _0x5851c4;
    $(this)['attr'](_0x47c6cb(0xcf), 'button');
});

function getParams() {
    const _0x143b02 = _0x5851c4;
    urlFormly[_0x143b02(0x1b6)]['forEach'](function(_0x5edbc4, _0x5c11db) {
        const _0x99d1f3 =
            _0x143b02;
        searchQ[_0x99d1f3(0xac)]({ 'val': _0x5edbc4, 'key': _0x5c11db });
    });
}

function getSafe(_0x509c3b, _0x527561) {
    try { return _0x509c3b(); } catch (
        _0x3b47c0) { return _0x527561; }
}

function phoneAutoFormat(_0x173477) {
    var _0x1e3fb1 = '';
    return function(_0x251dda) {
        const
            _0x2135b3 = _0x1148;
        var _0x52215c = '',
            _0x3f713f = _0x251dda[_0x2135b3(0x127)](/\D/g, ''),
            _0x17f674 = 0x0,
            _0x177470 = 0x0;
        while (_0x17f674 < _0x3f713f['length'] && _0x177470 < _0x173477[_0x2135b3(
                0x18f)]) {
            _0x173477[_0x177470] === 'x' ? (_0x52215c += _0x3f713f[_0x17f674],
                _0x17f674++) : _0x52215c += _0x173477[_0x177470], _0x177470++;
        }
        if (_0x251dda[_0x2135b3(
                0x18f)] < _0x1e3fb1['length']) {
            var _0x35d7e5 = _0x173477[_0x2135b3(0x202)](_0x177470);
            _0x52215c += _0x35d7e5[_0x2135b3(0x127)](/x/g, '');
        }
        return _0x1e3fb1 = _0x52215c,
            _0x52215c;
    };
}

function validateURL(_0x2ae626) {
    const _0xba7f83 = _0x5851c4;
    return urlPattern[_0xba7f83(0x1e3)](
        _0x2ae626) ? !![] : ![];
}
quiz && steps[_0x5851c4(0x161)](function() {
    const _0xfab35a =
        _0x5851c4;
    $(this)[_0xfab35a(0xc3)]()[_0xfab35a(0x140)](_0xfab35a(0x19b), !![]), $(this)['children']()[
        _0xfab35a(0x140)](_0xfab35a(0xd0), 0xfa);
});

function disableBtn(_0x411e11) {
    const _0x280d71 = _0x5851c4;
    fill = ![], !customError && ($(_0x280d71(0xfd))[_0x280d71(0x10c)]({
            'opacity': _0x280d71(
                0x1b7),
            'pointer-events': _0x280d71(0x10e)
        }), $(_0x280d71(0xfd))[_0x280d71(0x214)](
            _0x280d71(0x212)), $(_0x280d71(0xbb))[_0x280d71(0x10c)]({
            'opacity': _0x280d71(
                0x1b7),
            'pointer-events': _0x280d71(0x10e)
        }), $(_0x280d71(0xbb))[_0x280d71(0x214)](
            _0x280d71(0x212)), $('[data-form-ms=\x22submit-btn\x22]')[_0x280d71(0x10c)]
        ({ 'opacity': _0x280d71(0x1b7), 'pointer-events': 'none' }), $(_0x280d71(0xdf))[_0x280d71(
            0x214)](_0x280d71(0x212)));
}

function enableBtn() {
    const _0x22fe78 = _0x5851c4;
    fill = !![], $('[data-form=\x22next-btn\x22]')[_0x22fe78(0x10c)]
        ({ 'pointer-events': 'auto', 'opacity': '1' }), $(_0x22fe78(0xfd))[_0x22fe78(0x1f1)](_0x22fe78(
            0x212)), $(_0x22fe78(0xbb))[_0x22fe78(0x10c)]({
            'pointer-events': _0x22fe78(
                0xad),
            'opacity': '1'
        }), $('[data-form=\x22submit-btn\x22]')[_0x22fe78(0x1f1)](_0x22fe78(
            0x212)), $(_0x22fe78(0xdf))[_0x22fe78(0x10c)]({
            'pointer-events': _0x22fe78(
                0xad),
            'opacity': '1'
        }), $(_0x22fe78(0xdf))[_0x22fe78(0x1f1)](_0x22fe78(0x212));
}

function saveLastAnswer(_0x56610f) {
    const _0xcb8e1d = _0x5851c4;
    localStorage['removeItem'](_0xcb8e1d(0xba)), localStorage[_0xcb8e1d(0x1bc)](_0xcb8e1d(0xba), JSON[
        'stringify'](_0x56610f));
}

function saveFilledInput() {
    const _0x4cbffb = _0x5851c4;
    $(_0x4cbffb(0x216))[_0x4cbffb(0x10b)](_0x4cbffb(0xb3))['each'](function() {
        const _0x3180dd =
            _0x4cbffb;
        $(this)[_0x3180dd(0x140)](_0x3180dd(0xcf)) === _0x3180dd(0x1d9) || $(this)[_0x3180dd(0x140)]
            ('type') === _0x3180dd(0xf6) ? $(this)[_0x3180dd(0x200)](_0x3180dd(0xc2)) && (filledInput[
                    _0x3180dd(0x16f)](_0x242847 => _0x242847[_0x3180dd(0xc0)] === $(this)['attr'](
                    'name')) ? (filledInput = filledInput['filter'](_0x493220 => _0x493220[_0x3180dd(
                        0xc0)] !== $(this)[_0x3180dd(0x140)](_0x3180dd(0x1c8))), $(this)[_0x3180dd(0xc1)]
                    () !== '' && filledInput[_0x3180dd(0xac)]({
                        'inputName': $(this)[_0x3180dd(0x140)](
                            'name'),
                        'value': $(this)[_0x3180dd(0xc1)]()
                    })) : $(this)[_0x3180dd(0xc1)]() !==
                '' && filledInput[_0x3180dd(0xac)]({
                    'inputName': $(this)['attr'](_0x3180dd(
                        0x1c8)),
                    'value': $(this)[_0x3180dd(0xc1)]()
                })) : filledInput['some'](_0x39a627 =>
                _0x39a627[_0x3180dd(0xc0)] === $(this)['attr'](_0x3180dd(0x1c8))) ? (filledInput =
                filledInput['filter'](_0x3a8d3a => _0x3a8d3a[_0x3180dd(0xc0)] !== $(this)[_0x3180dd(
                    0x140)](_0x3180dd(0x1c8))), $(this)[_0x3180dd(0xc1)]() !== '' && filledInput[
                    _0x3180dd(0xac)]({
                    'inputName': $(this)[_0x3180dd(0x140)](_0x3180dd(
                        0x1c8)),
                    'value': $(this)[_0x3180dd(0xc1)]()
                })) : $(this)[_0x3180dd(0xc1)]() !==
            '' && filledInput[_0x3180dd(0xac)]({
                'inputName': $(this)[_0x3180dd(0x140)](_0x3180dd(
                    0x1c8)),
                'value': $(this)[_0x3180dd(0xc1)]()
            });
    }), trackLastStep && (formlyLastStep >
        x ? lastStep = formlyLastStep : lastStep = x, localStorage['removeItem']('formlyLastStep'),
        localStorage[_0x4cbffb(0x1bc)](_0x4cbffb(0xef), lastStep)), localStorage[_0x4cbffb(0x106)](
        _0x4cbffb(0x233)), localStorage['setItem'](_0x4cbffb(0x233), JSON[_0x4cbffb(0x231)](
        filledInput));
}

function scrollTop() {
    const _0x49b906 = _0x5851c4;
    scrollToTop && $(_0x49b906(0x1ce))[_0x49b906(0x228)]({
        'scrollTop': $(_0x49b906(0x12f))[_0x49b906(
            0x229)]()[_0x49b906(0x116)] - scrollTopOffset
    }, 0x3e8);
}

function updateStep() {
    const _0xcabcb1 = _0x5851c4;
    scrollTop(), skip = ![], $('[data-form=\x22custom-progress-indicator\x22]')['removeClass'](
        _0xcabcb1(0x212));
    $(_0xcabcb1(0x181))[_0xcabcb1(0x185)](_0xcabcb1(0x22b)) && (steps['find'](_0xcabcb1(0x141))[
        'each'](function() {
        const _0x3e3e60 = _0xcabcb1;
        $($(_0x3e3e60(0xde))[$(this)[_0x3e3e60(0x15f)](_0x3e3e60(0x11c))[_0x3e3e60(0x21c)]()]), $(
            this)[_0x3e3e60(0xc1)]() === '' && emptyInput++;
    }), emptyInput > 0x0 ? $(_0xcabcb1(
        0xbf))[_0xcabcb1(0x214)]('disabled') : $(_0xcabcb1(0xbf))[_0xcabcb1(0x1f1)](_0xcabcb1(
        0x212)));
    $('[data-form=\x22custom-progress-indicator\x22]')[_0xcabcb1(0x1f1)](_0xcabcb1(0x176)), $(
        _0xcabcb1(0xde))['addClass'](_0xcabcb1(0x212)), $($(_0xcabcb1(0xde))[x])[_0xcabcb1(0x214)](
        _0xcabcb1(0x176)), selection = selections[_0xcabcb1(0x14b)](_0x42e1da => _0x42e1da[_0xcabcb1(
        0x1de)] === x - 0x1);
    next && (x = getSafe(() => selection[0x0][_0xcabcb1(0x13b)]) ? parseInt(getSafe(() => selection[
        0x0][_0xcabcb1(0x13b)])) : x);
    $(_0xcabcb1(0x167))['hide'](), steps['hide']();
    reinitIX === !![] && window[_0xcabcb1(0x138)]['destroy']();
    $(progressbar)[_0xcabcb1(0x1f1)](_0xcabcb1(0x176));
    for (i = 0x0; i <= x; i++) {
        countCard ? $(
            progressbar[i])['addClass'](_0xcabcb1(0x176)) : !$(steps[i])['data'](_0xcabcb1(0xf5)) && $(
            progressbar[i])[_0xcabcb1(0x214)](_0xcabcb1(0x176));
    }
    reinitIX === !![] ? (window[
            'Webflow'] && window[_0xcabcb1(0x138)][_0xcabcb1(0x13f)](_0xcabcb1(0x22e))[_0xcabcb1(0xc9)]
        (),
        document[_0xcabcb1(0x1b3)](new Event(_0xcabcb1(0x1e7))), $(steps[x])['show']()) : $(steps[x])[
        _0xcabcb1(0x125)](_0xcabcb1(0x157));
    $('.active-answer-card')[_0xcabcb1(0x1f1)](_0xcabcb1(0x1da));
    x === 0x0 && !$(steps[x])[_0xcabcb1(0x185)](_0xcabcb1(0xf5)) && ($(steps[x])[_0xcabcb1(0x170)](
        _0xcabcb1(0x167))[_0xcabcb1(0xd7)](), $(steps[x])[_0xcabcb1(0x170)]('[data-answer]')[
        _0xcabcb1(0x214)](_0xcabcb1(0x1da)));
    selection['length'] > 0x0 ? ($(steps[x])[_0xcabcb1(0x170)](_0xcabcb1(0x114) + selection[0x0][
        _0xcabcb1(0x1f6)
    ] + '\x22]')[_0xcabcb1(0xd7)](), $(steps[x])[_0xcabcb1(0x170)](_0xcabcb1(0x114) + selection[
        0x0][_0xcabcb1(0x1f6)] + '\x22]')[_0xcabcb1(0x214)](_0xcabcb1(0x1da))) : ($(steps[x])[
        _0xcabcb1(0x170)](_0xcabcb1(0x114) + answer + '\x22]')['show'](), $(steps[x])[_0xcabcb1(
        0x170)](_0xcabcb1(0x114) + answer + '\x22]')['addClass'](_0xcabcb1(0x1da)));
    if (x === 0x0) $(
        '[data-form=\x22back-btn\x22]')[_0xcabcb1(0x1c6)](), $(_0xcabcb1(0xfd))['show'](), $(
        _0xcabcb1(0xbb))[_0xcabcb1(0x1c6)]();
    else {
        if (x === steps[_0xcabcb1(0x18f)] - 0x1 || $(steps[x])[_0xcabcb1(0x170)](_0xcabcb1(0x1df))[
                'length'] > 0x0) {
            $(_0xcabcb1(0xfd))[_0xcabcb1(0x1c6)]();
            if ($(steps[x])[_0xcabcb1(0x170)]
                ('[data-form=\x22next-btn\x22][data-submit-show]')['data'](_0xcabcb1(0x224))) $(steps[x])[
                _0xcabcb1(0x170)](_0xcabcb1(0x122))[_0xcabcb1(0xd7)]();
            else $('[data-form=\x22next-btn\x22]')[_0xcabcb1(0x185)](_0xcabcb1(0x224)) && $(_0xcabcb1(
                0xfd))[_0xcabcb1(0xd7)]();
            $(_0xcabcb1(0xbb))['show'](), $('[data-form-ms=\x22submit-btn\x22]')[_0xcabcb1(0xd7)](), $(
                _0xcabcb1(0xd1))[_0xcabcb1(0xd7)]();
        } else $(_0xcabcb1(0xfd))[_0xcabcb1(0xd7)](), $(
            _0xcabcb1(0xd1))['show'](), $(_0xcabcb1(0xbb))['hide'](), $(_0xcabcb1(0xdf))[_0xcabcb1(
            0x1c6)]();
    }
    $($(steps[x])[_0xcabcb1(0x170)](_0xcabcb1(0x1a7))[0x0])[_0xcabcb1(0x1c5)](), $($(
        steps[x])[_0xcabcb1(0x170)](_0xcabcb1(0x20b))[0x0])['focus']();
    !back && next &&
        validation();
    for (idx = 0x0; idx <= x; idx++) {
        $($(_0xcabcb1(0xde))[idx])['removeClass'](
            'disabled');
    }
}

function validateEmail(_0x8c75d, _0x47c63c, _0x50e945) {
    const _0x5cf010 = _0x5851c4;
    let
        _0x35a5ec = _0x8c75d[_0x5cf010(0x199)]('@') ? _0x8c75d[_0x5cf010(0xbd)]('@')[0x1][_0x5cf010(
            0xbd)]('.')[0x0] : [];
    dom = [];
    _0x47c63c !== undefined && _0x47c63c[_0x5cf010(0xbd)](',')[_0x5cf010(0x1e5)](function(
        _0x1a65ab) {
        const _0x42f7c8 = _0x5cf010;
        _0x1a65ab[_0x42f7c8(0x199)](_0x35a5ec) && dom[_0x42f7c8(0xac)](_0x35a5ec);
    });
    dom[_0x5cf010(0x18f)] > 0x0 ? domainAllowed = ![] : domainAllowed = !![];
    var _0x211697 =
        /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,20})?$/;
    !_0x211697[_0x5cf010(0x1e3)](_0x8c75d) || !
        domainAllowed ? (emailFilled = ![], unfilledArr[_0x5cf010(0xac)]({ 'input': _0x50e945 })) :
        emailFilled = !![];
}

function phoneValidation(_0xf67876, _0x34396a, _0x2f21f3) {
    if (phoneFormat) return _0x34396a >=
        _0x2f21f3 ? !![] : ![];
    else { if (_0x34396a >= _0x2f21f3) return !![]; }
}

function validation() {
    const _0x80e4da = _0x5851c4;
    $(steps[x])[_0x80e4da(0x185)]('card') && enableBtn();
    unfilledArr = [], inputFilled = !![], radioFilled = !![], checkboxFilled = !![], numFilled = !![],
        fileFilled = !![], dateFilled = !![], timeFilled = !![], selectFilled = !![], textareaFilled = !
        ![], telFilled = !![], emailFilled = !![], passwordFilled = !![], emptyInput = 0x0,
        empReqInput = [], empReqDate = [], empReqTime = [], empReqSelect = [], empReqTel = [],
        empReqTextarea = [], empReqNum = [], empReqFile = [], empReqRadio = [], textareaLength = $(
            steps[x])[_0x80e4da(0x170)]('textarea[required]:visible')[_0x80e4da(0x18f)], textInputLength =
        $(steps[x])[_0x80e4da(0x170)]('input[type=\x22text\x22][required]:visible')[_0x80e4da(0x18f)],
        selectInputLength = $(steps[x])['find'](_0x80e4da(0x1cd))['length'], emailInputLength = $(steps[
            x])['find']('input[type=\x22email\x22]:visible')[_0x80e4da(0x18f)], checkboxInputLength = $(
            steps[x])[_0x80e4da(0x170)](_0x80e4da(0xf0))['length'];
    textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0 ? disableBtn() :
        enableBtn();
    checkCount = $(steps[x])[_0x80e4da(0x185)](_0x80e4da(0x1d9)) ? $(steps[x])[_0x80e4da(0x185)](
        _0x80e4da(0x1d9)) : $(steps[x])[_0x80e4da(0x170)](_0x80e4da(0x1d4))['length'] > 0x0 ? $(steps[
        x])['find'](_0x80e4da(0x1d4))['data'](_0x80e4da(0x1d9)) : 0x0;
    if (!logicExtra) $(steps[x])[
            'find'](_0x80e4da(0x1c9))['is']('[type=\x22checkbox\x22]') && (checkCount === '*' ||
            checkCount > $(steps[x])[_0x80e4da(0x170)](_0x80e4da(0x19d))[_0x80e4da(0x18f)] ? $(steps[x])[
                _0x80e4da(0x170)](_0x80e4da(0x19d))[_0x80e4da(0x161)](function() {
                const _0x3b77e5 =
                    _0x80e4da;
                $(this)['is'](_0x3b77e5(0x1e0)) ? $(steps[x])[_0x3b77e5(0x170)](_0x3b77e5(0x183))[
                    _0x3b77e5(0x18f)] < 0x1 && (checkboxFilled = !![], resetInputErrorMessage($(this)[
                    'attr'](_0x3b77e5(0x1c8)))) : (checkboxFilled = ![], unfilledArr['push']({
                    'input': $(
                        this)[_0x3b77e5(0x140)](_0x3b77e5(0x1c8))
                }));
            }) : $(steps[x])[_0x80e4da(0x170)](
                ':input[type=\x22checkbox\x22]:checked')[_0x80e4da(0x18f)] >= checkCount ? $(steps[x])[
                _0x80e4da(0x170)](':input[type=\x22checkbox\x22][required]')[_0x80e4da(0x18f)] > 0x0 ? $(
                steps[x])[_0x80e4da(0x170)](_0x80e4da(0x183))[_0x80e4da(0x161)](function() {
                const
                    _0x576eca = _0x80e4da;
                checkboxFilled = ![];
                let _0x260803 = $(steps[x])[_0x576eca(0x170)](
                        ':input[type=\x22checkbox\x22][required]')[_0x576eca(0x18f)],
                    _0x31672e = $(steps[x])[_0x576eca(0x170)](
                        ':input[type=\x22checkbox\x22][required]:checked')[_0x576eca(0x18f)];
                _0x260803 - _0x31672e === 0x0 ? (checkboxFilled = !![], resetInputErrorMessage($(steps[
                    x])['find'](_0x576eca(0x19d))[_0x576eca(0x140)](_0x576eca(0x1c8)))) : (
                    checkboxFilled = ![], $(steps[x])[_0x576eca(0x170)](_0x576eca(0x182))[_0x576eca(
                        0x161)](function() {
                        const _0xaedfcc = _0x576eca;
                        unfilledArr['push']({ 'input': $(this)[_0xaedfcc(0x140)](_0xaedfcc(0x1c8)) });
                    }));
            }) :
            (checkboxFilled = !![], resetInputErrorMessage($(steps[x])['find'](_0x80e4da(0x19d))[
                _0x80e4da(0x140)]('name'))) : (checkboxFilled = ![], $(steps[x])[_0x80e4da(0x170)](
                    _0x80e4da(0x183))[_0x80e4da(0x161)](function() {
                    const _0x53f0d3 = _0x80e4da;
                    $(this)[_0x53f0d3(0x10b)](_0x53f0d3(0x1e0)) && unfilledArr[_0x53f0d3(0xac)]
                        ({ 'input': $(this)[_0x53f0d3(0x140)](_0x53f0d3(0x1c8)) });
                }), unfilledArr[_0x80e4da(0xac)]
                ({ 'input': $(steps[x])[_0x80e4da(0x170)](_0x80e4da(0x19d))['attr'](_0x80e4da(0x1c8)) }))),
        $(steps[x])['find'](_0x80e4da(0x1ee))[_0x80e4da(0x161)](function(_0x3914a0) {
            const _0xc70f24 =
                _0x80e4da;
            var _0x59fc99 = $(this)[_0xc70f24(0x140)]('name');
            $('input:radio[name=\x22' + _0x59fc99 + _0xc70f24(0x119))['length'] == 0x0 ? (!empReqRadio[
                    _0xc70f24(0x170)](_0x413ae1 => _0x413ae1[_0xc70f24(0x190)] === _0x3914a0) &&
                empReqRadio[_0xc70f24(0xac)]({ 'input': _0x3914a0 }), unfilledArr[_0xc70f24(0xac)]
                ({ 'input': $(this)[_0xc70f24(0x140)]('name') })) : empReqRadio = empReqRadio[_0xc70f24(
                0x14b)](_0x4ab544 => _0x4ab544['input'] !== _0x3914a0), empReqRadio[_0xc70f24(
                0x18f)] === 0x0 ? radioFilled = !![] : radioFilled = ![];
        }), $(steps[x])[_0x80e4da(0x170)](
            _0x80e4da(0x226))[_0x80e4da(0x161)](function(_0x235a32) {
            const _0x4efd56 = _0x80e4da;
            let
                _0x212355 = $(this)['val']()[_0x4efd56(0x18f)],
                _0x1351bf = $(this)['data']('min-character') ? $(this)[_0x4efd56(0x185)](_0x4efd56(
                    0x129)) : 0x0;
            $(this)[_0x4efd56(0xc1)]() !== '' && _0x212355 >= _0x1351bf ? empReqInput = empReqInput[
                    'filter'](_0x3fcb35 => _0x3fcb35[_0x4efd56(0x190)] !== _0x235a32) : (!empReqInput[
                    'find'](_0x23ef01 => _0x23ef01[_0x4efd56(0x190)] === _0x235a32) && empReqInput[
                    _0x4efd56(0xac)]({ 'input': _0x235a32 }), unfilledArr[_0x4efd56(0xac)]({
                    'input': $(
                        this)['attr'](_0x4efd56(0x1c8))
                })), empReqInput[_0x4efd56(0x18f)] === 0x0 ?
                inputFilled = !![] : inputFilled = ![];
        }), $(steps[x])[_0x80e4da(0x170)](_0x80e4da(0x149))[
            _0x80e4da(0x161)](function(_0x9212ce) {
            const _0x1be1f6 = _0x80e4da;
            let _0x306af8 = $(this)[
                    'val']()[_0x1be1f6(0x18f)],
                _0xa6a44b = $(this)[_0x1be1f6(0x185)](_0x1be1f6(0x129)) ? $(this)[_0x1be1f6(0x185)](
                    _0x1be1f6(0x129)) : 0x0;
            $(this)[_0x1be1f6(0xc1)]() !== '' && _0x306af8 >= _0xa6a44b ? empReqPassword =
                empReqPassword[_0x1be1f6(0x14b)](_0x1f3d4f => _0x1f3d4f[_0x1be1f6(0x190)] !== _0x9212ce) :
                (!empReqPassword['find'](_0x30724f => _0x30724f[_0x1be1f6(0x190)] === _0x9212ce) &&
                    empReqPassword['push']({ 'input': _0x9212ce }), unfilledArr[_0x1be1f6(0xac)]
                    ({ 'input': $(this)[_0x1be1f6(0x140)](_0x1be1f6(0x1c8)) })), empReqPassword[_0x1be1f6(
                    0x18f)] === 0x0 ? passwordFilled = !![] : passwordFilled = ![];
        }), $(steps[x])[_0x80e4da(
            0x170)](_0x80e4da(0xcc))[_0x80e4da(0x161)](function(_0x44d7f9) {
            const _0x1923ce =
                _0x80e4da;
            let _0x192c27 = $(this)[_0x1923ce(0xc1)]()[_0x1923ce(0x18f)],
                _0x568103 = $(this)[_0x1923ce(0x185)](_0x1923ce(0x129)) ? $(this)[_0x1923ce(0x185)](
                    _0x1923ce(0x129)) : 0x0;
            $(this)[_0x1923ce(0xc1)]() !== '' && _0x192c27 >= _0x568103 ? empReqUrl = empReqUrl[
                    'filter'](_0x31dc84 => _0x31dc84[_0x1923ce(0x190)] !== _0x44d7f9) : (!empReqTime[
                        _0x1923ce(0x170)](_0x1d1ed6 => _0x1d1ed6[_0x1923ce(0x190)] === _0x44d7f9) &&
                    empReqUrl[_0x1923ce(0xac)]({ 'input': _0x44d7f9 }), unfilledArr['push']({
                        'input': $(
                            this)[_0x1923ce(0x140)](_0x1923ce(0x1c8))
                    })), empReqUrl[_0x1923ce(0x18f)] ===
                0x0 && validateURL($(this)[_0x1923ce(0xc1)]()) ? urlFilled = !![] : urlFilled = ![];
        }), $(
            steps[x])[_0x80e4da(0x170)](_0x80e4da(0x1b1))[_0x80e4da(0x161)](function(_0x4f7442) {
            const
                _0x1e3a12 = _0x80e4da;
            let _0x16ac9a = $(this)[_0x1e3a12(0xc1)]()[_0x1e3a12(0x18f)],
                _0x521098 = $(this)[_0x1e3a12(0x185)]('min-character') ? $(this)[_0x1e3a12(0x185)](
                    _0x1e3a12(0x129)) : 0x0;
            $(this)[_0x1e3a12(0xc1)]() !== '' && _0x16ac9a >= _0x521098 ? empReqTime = empReqTime[
                _0x1e3a12(0x14b)](_0x1243f7 => _0x1243f7['input'] !== _0x4f7442) : (!empReqTime[
                    _0x1e3a12(0x170)](_0x3e2ee9 => _0x3e2ee9[_0x1e3a12(0x190)] === _0x4f7442) &&
                empReqTime[_0x1e3a12(0xac)]({ 'input': _0x4f7442 }), unfilledArr[_0x1e3a12(0xac)]
                ({ 'input': $(this)[_0x1e3a12(0x140)](_0x1e3a12(0x1c8)) })), empReqTime[_0x1e3a12(
                0x18f)] === 0x0 ? timeFilled = !![] : timeFilled = ![];
        }), $(steps[x])['find'](
            ':input[type=\x22date\x22][required]')[_0x80e4da(0x161)](function(_0x4cd8a6) {
            const
                _0x20722c = _0x80e4da;
            $(this)['val']() !== '' ? empReqDate = empReqDate['filter'](_0x306e58 => _0x306e58[
                    _0x20722c(0x190)] !== _0x4cd8a6) : (!empReqDate[_0x20722c(0x170)](_0x1fb55b =>
                        _0x1fb55b[_0x20722c(0x190)] === _0x4cd8a6) && empReqDate['push']
                    ({ 'input': _0x4cd8a6 }), unfilledArr[_0x20722c(0xac)]({
                        'input': $(this)[_0x20722c(
                            0x140)](_0x20722c(0x1c8))
                    })), empReqDate[_0x20722c(0x18f)] === 0x0 ? dateFilled = !
                ![] : dateFilled = ![];
        }), $(steps[x])[_0x80e4da(0x170)](_0x80e4da(0x174))['each'](function(
            _0x5902ac) {
            const _0x3f2597 = _0x80e4da;
            if ($(this)['val']() !== '') {
                let _0x1b4364 = $(
                        this)[_0x3f2597(0xc1)]()[_0x3f2597(0x18f)],
                    _0x4f8fdf = $(this)[_0x3f2597(0x185)](_0x3f2597(0x129)) ? $(this)[_0x3f2597(0x185)](
                        'min-character') : 0x0;
                if ($(this)[_0x3f2597(0x185)]('phone-autoformat')) {
                    var
                        _0x2bd072 = phoneAutoFormat($(this)[_0x3f2597(0x185)](_0x3f2597(0x189)));
                    $(this)[_0x3f2597(0xc1)](_0x2bd072($(this)[_0x3f2597(0xc1)]()));
                }
                phoneValidation($(
                        this)['val'](), _0x1b4364, _0x4f8fdf) ? empReqTel = empReqTel[_0x3f2597(0x14b)](
                        _0x3c2478 => _0x3c2478[_0x3f2597(0x190)] !== _0x5902ac) : empReqTel['push']
                    ({ 'input': _0x5902ac });
            } else !empReqTel[_0x3f2597(0x170)](_0x3269d3 => _0x3269d3[
                    'input'] === _0x5902ac) && empReqTel[_0x3f2597(0xac)]({ 'input': _0x5902ac }),
                unfilledArr[_0x3f2597(0xac)]({ 'input': $(this)[_0x3f2597(0x140)](_0x3f2597(0x1c8)) });
            empReqTel[_0x3f2597(0x18f)] === 0x0 ? telFilled = !![] : telFilled = ![];
        }), $(steps[x])[
            'find'](_0x80e4da(0x1db))[_0x80e4da(0x161)](function(_0x3bc716) {
            const _0x366721 =
                _0x80e4da;
            $(this)[_0x366721(0xc1)]() !== '' ? empReqFile = empReqFile[_0x366721(0x14b)](_0x5c6b25 =>
                    _0x5c6b25['input'] !== _0x3bc716) : (!empReqFile[_0x366721(0x170)](_0x32c002 =>
                        _0x32c002['input'] === _0x3bc716) && empReqFile[_0x366721(0xac)]
                    ({ 'input': _0x3bc716 }), unfilledArr[_0x366721(0xac)]({
                        'input': $(this)[_0x366721(
                            0x140)](_0x366721(0x1c8))
                    })), empReqFile[_0x366721(0x18f)] === 0x0 ? fileFilled = !
                ![] : fileFilled = ![];
        }), $(steps[x])['find'](_0x80e4da(0x16d))[_0x80e4da(0x161)](function(
            _0x10cec7) {
            const _0x47219 = _0x80e4da;
            let _0x101dc3 = $(this)['val']()['length'],
                _0x3252e0 = $(this)[_0x47219(0x185)](_0x47219(0x129)) ? $(this)[_0x47219(0x185)](
                    'min-character') : 0x0;
            $(this)[_0x47219(0xc1)]() !== '' && _0x101dc3 >= _0x3252e0 ? empReqNum = empReqNum[_0x47219(
                    0x14b)](_0x274d3c => _0x274d3c['input'] !== _0x10cec7) : (!empReqNum[_0x47219(0x170)](
                        _0x326ee7 => _0x326ee7[_0x47219(0x190)] === _0x10cec7) && empReqNum['push']
                    ({ 'input': _0x10cec7 }), unfilledArr['push']({
                        'input': $(this)[_0x47219(0x140)](
                            _0x47219(0x1c8))
                    })), empReqNum['length'] === 0x0 ? numFilled = !![] :
                numFilled = ![];
        }), $(steps[x])[_0x80e4da(0x170)]('select[required]')[_0x80e4da(0x161)](
            function(_0x6b16c1) {
                const _0x64978c = _0x80e4da;
                let _0x242f33 = $(this)['val']();
                _0x242f33 === '' && (_0x242f33 = null), _0x242f33 != null ? empReqSelect = empReqSelect[
                        'filter'](_0x43c36f => _0x43c36f[_0x64978c(0x190)] !== _0x6b16c1) : (!empReqSelect[
                            _0x64978c(0x170)](_0x27b3db => _0x27b3db[_0x64978c(0x190)] === _0x6b16c1) &&
                        empReqSelect[_0x64978c(0xac)]({ 'input': _0x6b16c1 }), unfilledArr[_0x64978c(0xac)]
                        ({ 'input': $(this)['attr']('name') })), empReqSelect['length'] === 0x0 ?
                    selectFilled = !
                    ![] : selectFilled = ![];
            }), $(steps[x])[_0x80e4da(0x170)](_0x80e4da(0x209))[_0x80e4da(
            0x161)](function(_0x3a8780) {
            const _0x25fd16 = _0x80e4da;
            let _0x4c7c2c = $(this)['val']()[
                    _0x25fd16(0x18f)],
                _0x504e66 = $(this)[_0x25fd16(0x185)](_0x25fd16(0x129)) ? $(this)['data'](
                    'min-character') : 0x0;
            $(this)[_0x25fd16(0xc1)]() !== '' && _0x4c7c2c >= _0x504e66 ? empReqTextarea =
                empReqTextarea[_0x25fd16(0x14b)](_0x11602e => _0x11602e[_0x25fd16(0x190)] !== _0x3a8780) :
                (!empReqTextarea[_0x25fd16(0x170)](_0x3a010d => _0x3a010d[_0x25fd16(0x190)] ===
                        _0x3a8780) && empReqTextarea['push']({ 'input': _0x3a8780 }), unfilledArr['push']
                    ({ 'input': $(this)['attr'](_0x25fd16(0x1c8)) })), empReqTextarea['length'] === 0x0 ?
                textareaFilled = !![] : textareaFilled = ![];
        }), $(steps[x])[_0x80e4da(0x170)](_0x80e4da(
            0xfb))[_0x80e4da(0x161)](function() {
            const _0x29610a = _0x80e4da;
            $(this)[_0x29610a(0xc1)]() !== '' ? validateEmail($(this)[_0x29610a(0xc1)](), $(this)[
                'data'](_0x29610a(0x108)), $(this)[_0x29610a(0x140)](_0x29610a(0x1c8))) : (
                emailFilled = ![], unfilledArr[_0x29610a(0xac)]({
                    'input': $(this)[_0x29610a(0x140)](
                        _0x29610a(0x1c8))
                }));
        });
    else {
        if ($(steps[x])[_0x80e4da(0x185)]('card')) answer = $(steps[x])[_0x80e4da(0x170)](
                _0x80e4da(0xd3))[_0x80e4da(0x185)]('go-to'), selections = selections[_0x80e4da(0x14b)](
                _0x36d8df => _0x36d8df[_0x80e4da(0x1de)] !== x), selections[_0x80e4da(0xac)]
            ({ 'step': x, 'selected': answer });
        else $(steps[x])['find'](_0x80e4da(0x195))[_0x80e4da(0x185)]('card') && (answer = $(steps[x])[
                _0x80e4da(0x170)](_0x80e4da(0x195))[_0x80e4da(0x185)](_0x80e4da(0x18d)), selections =
            selections[_0x80e4da(0x14b)](_0x4a1cf3 => _0x4a1cf3[_0x80e4da(0x1de)] !== x), selections[
                _0x80e4da(0xac)]({ 'step': x, 'selected': answer }));
        $(steps[x])['find'](_0x80e4da(0x195))['find'](':input')['is']('[type=\x22checkbox\x22]') && (
                checkCount === '*' || checkCount > $(steps[x])[_0x80e4da(0x170)](_0x80e4da(0x19d))[
                    _0x80e4da(0x18f)] ? $(steps[x])[_0x80e4da(0x170)](_0x80e4da(0x19d))[_0x80e4da(0x161)](
                    function() {
                        const _0x5376f2 = _0x80e4da;
                        $(this)['is'](_0x5376f2(0x1e0)) ? $(steps[x])['find'](':input[required]')['length'] <
                            0x1 && (skipTo = undefined, $(this)['parents']('[data-skip-to]')['data'](_0x5376f2(
                                    0x10d)) && (skipTo = $(this)[_0x5376f2(0x15f)]('[data-skip-to]')[_0x5376f2(0x185)]
                                    (_0x5376f2(0x10d))), $(this)[_0x5376f2(0x15f)]('[data-go-to]')[_0x5376f2(0x140)](
                                    _0x5376f2(0x1c7)) && (answer = $(this)[_0x5376f2(0x15f)](_0x5376f2(0xd3))['attr'](
                                        _0x5376f2(0x1c7)), selections = selections[_0x5376f2(0x14b)](_0x770c1b =>
                                        _0x770c1b[_0x5376f2(0x1de)] !== x), selections[_0x5376f2(0xac)]
                                    ({ 'step': x, 'selected': answer }), skipTo && (selections[_0x5376f2(0xac)]
                                        ({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x5376f2(
                                            0xd9)](_0x43b15e => _0x43b15e[_0x5376f2(0x1de)] === x), selections[objIndex][
                                            _0x5376f2(0x13b)
                                        ] = parseInt(skipTo) - 0x1, selections[objIndex][_0x5376f2(0xf4)] = x)),
                                checkboxFilled = !![], $(steps[x])['find'](_0x5376f2(0xd4))['length'] >= $(steps[
                                    x])[_0x5376f2(0x170)](_0x5376f2(0x183))['length'] && resetInputErrorMessage($(
                                    steps[
                                        x])[_0x5376f2(0x170)](_0x5376f2(0x19d))[_0x5376f2(0x140)](_0x5376f2(0x1c8)))) :
                            (
                                checkboxFilled = ![], unfilledArr['push']({ 'input': $(this)['attr']('name') }));
                    }
                ) : $(steps[x])[_0x80e4da(0x170)]('.active-answer-card')['find'](_0x80e4da(0xbe))[
                    _0x80e4da(0x18f)] >= checkCount ? ($(steps[x])[_0x80e4da(0x170)]('.active-answer-card')[
                    'find'](_0x80e4da(0x19d))[_0x80e4da(0x15f)](_0x80e4da(0xd3))['attr'](_0x80e4da(
                    0x1c7)) && (skipTo = undefined, $(steps[x])[_0x80e4da(0x170)](_0x80e4da(0x195))[
                        _0x80e4da(
                            0x170)](_0x80e4da(0x19d))[_0x80e4da(0x15f)](_0x80e4da(0xdb))['attr'](_0x80e4da(
                        0x1ca)) && (skipTo = $(steps[x])[_0x80e4da(0x170)](_0x80e4da(0x195))['find'](
                        _0x80e4da(
                            0xbe))[_0x80e4da(0x15f)](_0x80e4da(0xdb))[_0x80e4da(0x140)](_0x80e4da(0x1ca))),
                    answer = $(steps[x])['find']('.active-answer-card')[_0x80e4da(0x170)](_0x80e4da(0x19d))[
                        'parents'](_0x80e4da(0xd3))[_0x80e4da(0x140)](_0x80e4da(0x1c7)), selections =
                    selections[_0x80e4da(0x14b)](_0x4adff1 => _0x4adff1[_0x80e4da(0x1de)] !== x),
                    selections[_0x80e4da(0xac)]({ 'step': x, 'selected': answer }), skipTo && (selections =
                        selections[_0x80e4da(0x14b)](_0x356565 => _0x356565[_0x80e4da(0x1de)] !== skipTo -
                            0x2), selections[_0x80e4da(0xac)]({ 'step': skipTo - 0x2, 'selected': answer }),
                        objIndex = selections[_0x80e4da(0xd9)](_0x120371 => _0x120371[_0x80e4da(0x1de)] ===
                            x), selections[objIndex][_0x80e4da(0x13b)] = parseInt(skipTo) - 0x1, selections[
                            objIndex][_0x80e4da(0xf4)] = x)), checkboxFilled = !![], $(steps[x])['find'](
                    _0x80e4da(0xd4))['length'] >= $(steps[x])[_0x80e4da(0x170)](_0x80e4da(0x183))[_0x80e4da(
                    0x18f)] && resetInputErrorMessage($(steps[x])[_0x80e4da(0x170)](
                    ':input[type=\x22checkbox\x22]')[_0x80e4da(0x140)](_0x80e4da(0x1c8)))) : (
                    checkboxFilled = ![], $(steps[x])[_0x80e4da(0x170)](_0x80e4da(0x183))[_0x80e4da(0x161)](
                        function() {
                            const _0x5d4069 = _0x80e4da;
                            $(this)[_0x5d4069(0x10b)](_0x5d4069(0x1e0)) && unfilledArr[_0x5d4069(0xac)]
                                ({ 'input': $(this)[_0x5d4069(0x140)]('name') });
                        }))), $(steps[x])[_0x80e4da(0x170)](
                _0x80e4da(0x195))[_0x80e4da(0x170)](_0x80e4da(0x1ee))['each'](function(_0x581398) {
                const
                    _0x153cfa = _0x80e4da;
                var _0x27bb17 = $(this)['attr']('name');
                $(_0x153cfa(0xf2) + _0x27bb17 + _0x153cfa(0x119))[_0x153cfa(0x18f)] == 0x0 ? (!
                        empReqRadio[_0x153cfa(0x170)](_0x25ca0c => _0x25ca0c['input'] === _0x581398) &&
                        empReqRadio[_0x153cfa(0xac)]({ 'input': _0x581398 }), unfilledArr['push']
                        ({ 'input': $(this)[_0x153cfa(0x140)](_0x153cfa(0x1c8)) })) : empReqRadio =
                    empReqRadio[
                        'filter'](_0x59642b => _0x59642b[_0x153cfa(0x190)] !== _0x581398), empReqRadio[
                        _0x153cfa(0x18f)] === 0x0 ? radioFilled = !![] : radioFilled = ![];
            }), $(steps[x])[
                _0x80e4da(0x170)](_0x80e4da(0x195))['find'](_0x80e4da(0x226))[_0x80e4da(0x161)](function(
                _0x1da2f6) {
                const _0x1bf9ca = _0x80e4da;
                let _0x54c47d = $(this)[_0x1bf9ca(0xc1)]()[
                        _0x1bf9ca(0x18f)],
                    _0x4f3e7c = $(this)[_0x1bf9ca(0x185)]('min-character') ? $(this)[_0x1bf9ca(0x185)](
                        _0x1bf9ca(0x129)) : 0x0;
                $(this)['val']() !== '' && _0x54c47d >= _0x4f3e7c ? empReqInput = empReqInput['filter'](
                        _0x154462 => _0x154462[_0x1bf9ca(0x190)] !== _0x1da2f6) : (!empReqInput[_0x1bf9ca(
                        0x170)](_0x145c4c => _0x145c4c[_0x1bf9ca(0x190)] === _0x1da2f6) && empReqInput[
                        'push']({ 'input': _0x1da2f6 }), unfilledArr['push']({
                        'input': $(this)[_0x1bf9ca(
                            0x140)](_0x1bf9ca(0x1c8))
                    })), empReqInput[_0x1bf9ca(0x18f)] === 0x0 ?
                    inputFilled = !![] : inputFilled = ![];
            }), $(steps[x])['find'](_0x80e4da(0x195))[
                _0x80e4da(0x170)](':input[type=\x22text\x22]')[_0x80e4da(0x161)](function(
                _0x22ee9a) {
                const _0x1d7e74 = _0x80e4da;
                skipTo = undefined, $(this)[_0x1d7e74(0x15f)](_0x1d7e74(0xdb))[_0x1d7e74(0x185)](
                    _0x1d7e74(0x10d)) !== '' && (skipTo = $(this)[_0x1d7e74(0x15f)]('[data-skip-to]')[
                    'data']('skip-to')), $(this)[_0x1d7e74(0x15f)](_0x1d7e74(0xd3))[_0x1d7e74(0x140)](
                    _0x1d7e74(0x1c7)) && (answer = $(this)['parents'](_0x1d7e74(0xd3))['attr'](_0x1d7e74(
                        0x1c7)), selections = selections['filter'](_0x24f2f7 => _0x24f2f7['step'] !== x),
                    selections[_0x1d7e74(0xac)]({ 'step': x, 'selected': answer }), skipTo && (selections[
                        'push']({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[
                        _0x1d7e74(0xd9)](_0x50c083 => _0x50c083['step'] === x), selections[objIndex][
                        _0x1d7e74(0x13b)
                    ] = parseInt(skipTo) - 0x1, selections[objIndex]['backTo'] = x));
            }), $(steps[x])['find'](
                _0x80e4da(0x195))[_0x80e4da(0x170)](_0x80e4da(0x149))[_0x80e4da(0x161)](function(
                _0x3cfe17) {
                const _0x7c8674 = _0x80e4da;
                let _0x14f086 = $(this)['val']()['length'],
                    _0x4dd445 = $(this)[_0x7c8674(0x185)](_0x7c8674(0x129)) ? $(this)[_0x7c8674(0x185)](
                        _0x7c8674(0x129)) : 0x0;
                $(this)['val']() !== '' && _0x14f086 >= _0x4dd445 ? empReqPassword = empReqPassword[
                        _0x7c8674(0x14b)](_0x2d12d9 => _0x2d12d9['input'] !== _0x3cfe17) : (!empReqPassword[
                        _0x7c8674(0x170)](_0x57ce84 => _0x57ce84['input'] === _0x3cfe17) && empReqPassword[
                        _0x7c8674(0xac)]({ 'input': _0x3cfe17 }), unfilledArr[_0x7c8674(0xac)]({
                        'input': $(
                            this)[_0x7c8674(0x140)](_0x7c8674(0x1c8))
                    })), empReqPassword[_0x7c8674(0x18f)] ===
                    0x0 ? passwordFilled = !![] : passwordFilled = ![];
            }), $(steps[x])[_0x80e4da(0x170)](
                '.active-answer-card')[_0x80e4da(0x170)](_0x80e4da(0x13e))[_0x80e4da(0x161)](function(
                _0x5c640a) {
                const _0x1aab9d = _0x80e4da;
                skipTo = undefined, $(this)[_0x1aab9d(0x15f)](_0x1aab9d(0xdb))[_0x1aab9d(0x185)](
                    'skip-to') !== '' && (skipTo = $(this)[_0x1aab9d(0x15f)](_0x1aab9d(0xdb))[_0x1aab9d(
                    0x185)](_0x1aab9d(0x10d))), $(this)['parents'](_0x1aab9d(0xd3))[_0x1aab9d(0x140)](
                    _0x1aab9d(0x1c7)) && (answer = $(this)[_0x1aab9d(0x15f)](_0x1aab9d(0xd3))[_0x1aab9d(
                        0x140)](_0x1aab9d(0x1c7)), selections = selections[_0x1aab9d(0x14b)](_0x36de77 =>
                        _0x36de77[_0x1aab9d(0x1de)] !== x), selections[_0x1aab9d(0xac)]
                    ({ 'step': x, 'selected': answer }), skipTo && (selections[_0x1aab9d(0xac)]
                        ({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x1aab9d(
                            0xd9)]
                        (_0x31bae9 => _0x31bae9[_0x1aab9d(0x1de)] === x), selections[objIndex][_0x1aab9d(
                            0x13b)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x1aab9d(0xf4)] = x));
            }), $(
                steps[x])['find'](_0x80e4da(0x195))[_0x80e4da(0x170)](_0x80e4da(0xcc))[_0x80e4da(0x161)](
                function(_0x513f22) {
                    const _0x4efbc6 = _0x80e4da;
                    let _0xdb9dc9 = $(this)[_0x4efbc6(0xc1)]
                        ()['length'],
                        _0x28fdfc = $(this)[_0x4efbc6(0x185)](_0x4efbc6(0x129)) ? $(this)[_0x4efbc6(0x185)](
                            _0x4efbc6(0x129)) : 0x0;
                    $(this)[_0x4efbc6(0xc1)]() !== '' && _0xdb9dc9 >= _0x28fdfc ? empReqUrl = empReqUrl[
                            'filter'](_0x820e9a => _0x820e9a[_0x4efbc6(0x190)] !== _0x513f22) : (!empReqUrl[
                                _0x4efbc6(0x170)](_0x47fb3d => _0x47fb3d[_0x4efbc6(0x190)] === _0x513f22) &&
                            empReqUrl['push']({ 'input': _0x513f22 }), unfilledArr[_0x4efbc6(0xac)]({
                                'input': $(
                                    this)['attr'](_0x4efbc6(0x1c8))
                            })), empReqUrl[_0x4efbc6(0x18f)] === 0x0 &&
                        validateURL($(this)[_0x4efbc6(0xc1)]()) ? urlFilled = !![] : urlFilled = ![];
                }), $(
                steps[x])[_0x80e4da(0x170)](_0x80e4da(0x195))['find'](_0x80e4da(0x1e6))[_0x80e4da(0x161)](
                function(_0x165131) {
                    const _0xac90ce = _0x80e4da;
                    skipTo = undefined, $(this)[_0xac90ce(0x15f)]('[data-skip-to]')['data'](_0xac90ce(
                        0x10d)) !== '' && (skipTo = $(this)[_0xac90ce(0x15f)](_0xac90ce(0xdb))[_0xac90ce(
                            0x185)]
                        (_0xac90ce(0x10d))), $(this)[_0xac90ce(0x15f)](_0xac90ce(0xd3))['attr'](_0xac90ce(
                        0x1c7)) && (answer = $(this)[_0xac90ce(0x15f)](_0xac90ce(0xd3))[_0xac90ce(0x140)](
                            _0xac90ce(0x1c7)), selections = selections[_0xac90ce(0x14b)](_0xfd6825 => _0xfd6825[
                            _0xac90ce(0x1de)] !== x), selections[_0xac90ce(0xac)]
                        ({ 'step': x, 'selected': answer }), skipTo && (selections[_0xac90ce(0xac)]
                            ({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0xac90ce(
                                0xd9)]
                            (_0x866718 => _0x866718['step'] === x), selections[objIndex]['skipTo'] = parseInt(
                                skipTo) - 0x1, selections[objIndex][_0xac90ce(0xf4)] = x));
                }), $(steps[x])[
                _0x80e4da(0x170)](_0x80e4da(0x195))['find'](_0x80e4da(0x1a1))['each'](function(
                _0x641f62) {
                const _0x2987c7 = _0x80e4da;
                $(this)['val']() !== '' ? empReqDate = empReqDate[_0x2987c7(0x14b)](_0x5ebc00 =>
                        _0x5ebc00['input'] !== _0x641f62) : (!empReqDate['find'](_0x4ba759 => _0x4ba759[
                            _0x2987c7(0x190)] === _0x641f62) && empReqDate[_0x2987c7(0xac)]
                        ({ 'input': _0x641f62 }), unfilledArr['push']({
                            'input': $(this)[_0x2987c7(0x140)](
                                'name')
                        })), empReqDate[_0x2987c7(0x18f)] === 0x0 ? dateFilled = !![] :
                    dateFilled = ![];
            }), $(steps[x])[_0x80e4da(0x170)](_0x80e4da(0x195))[_0x80e4da(0x170)](
                _0x80e4da(0x11b))[_0x80e4da(0x161)](function(_0x2125d9) {
                const _0x10c70b = _0x80e4da;
                skipTo = undefined, $(this)[_0x10c70b(0x15f)](_0x10c70b(0xdb))[_0x10c70b(0x185)](
                    _0x10c70b(0x10d)) !== '' && (skipTo = $(this)[_0x10c70b(0x15f)](_0x10c70b(0xdb))[
                    _0x10c70b(0x185)]('skip-to')), $(this)['parents'](_0x10c70b(0xd3))['attr'](_0x10c70b(
                    0x1c7)) && (answer = $(this)[_0x10c70b(0x15f)](_0x10c70b(0xd3))[_0x10c70b(0x140)](
                        _0x10c70b(0x1c7)), selections = selections[_0x10c70b(0x14b)](_0x240b98 => _0x240b98[
                        _0x10c70b(0x1de)] !== x), selections[_0x10c70b(0xac)]
                    ({ 'step': x, 'selected': answer }), skipTo && (selections[_0x10c70b(0xac)]
                        ({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x10c70b(
                            0xd9)]
                        (_0x26fb89 => _0x26fb89['step'] === x), selections[objIndex]['skipTo'] = parseInt(
                            skipTo) - 0x1, selections[objIndex]['backTo'] = x));
            }), $(steps[x])[_0x80e4da(0x170)](
                _0x80e4da(0x195))[_0x80e4da(0x170)](':input[type=\x22time\x22][required]')[_0x80e4da(0x161)]
            (function(_0x54644f) {
                const _0x31f816 = _0x80e4da;
                $(this)[_0x31f816(0xc1)]() !== '' ? empReqTime = empReqTime[_0x31f816(0x14b)](_0x942ca =>
                        _0x942ca['input'] !== _0x54644f) : (!empReqTime[_0x31f816(0x170)](_0x256d9e =>
                            _0x256d9e[_0x31f816(0x190)] === _0x54644f) && empReqTime['push']
                        ({ 'input': _0x54644f }), unfilledArr['push']({
                            'input': $(this)[_0x31f816(0x140)](
                                _0x31f816(0x1c8))
                        })), empReqTime['length'] === 0x0 ? timeFilled = !![] :
                    timeFilled = ![];
            }), $(steps[x])[_0x80e4da(0x170)](_0x80e4da(0x195))['find'](_0x80e4da(
                0x110))[_0x80e4da(0x161)](function(_0x25641c) {
                const _0x277a87 = _0x80e4da;
                skipTo = undefined, $(this)[_0x277a87(0x15f)](_0x277a87(0xdb))['data'](_0x277a87(
                    0x10d)) !== '' && (skipTo = $(this)[_0x277a87(0x15f)](_0x277a87(0xdb))['data'](
                    _0x277a87(0x10d))), $(this)[_0x277a87(0x15f)](_0x277a87(0xd3))['attr'](
                    'data-go-to') && (answer = $(this)[_0x277a87(0x15f)](_0x277a87(0xd3))[_0x277a87(
                        0x140)](
                        _0x277a87(0x1c7)), selections = selections[_0x277a87(0x14b)](_0x3c0bdc => _0x3c0bdc[
                        _0x277a87(0x1de)] !== x), selections[_0x277a87(0xac)]
                    ({ 'step': x, 'selected': answer }), skipTo && (selections[_0x277a87(0xac)]
                        ({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x277a87(
                            0xd9)]
                        (_0x4918a0 => _0x4918a0[_0x277a87(0x1de)] === x), selections[objIndex][_0x277a87(
                            0x13b)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x277a87(0xf4)] = x));
            }), $(
                steps[x])[_0x80e4da(0x170)]('.active-answer-card')[_0x80e4da(0x170)](_0x80e4da(0x16d))[
                _0x80e4da(0x161)](function(_0xe8be37) {
                const _0x31ed69 = _0x80e4da;
                let _0x7df18c = $(
                        this)[_0x31ed69(0xc1)]()['length'],
                    _0xfe92 = $(this)['data']('min-character') ? $(this)['data'](_0x31ed69(0x129)) : 0x0;
                $(this)[_0x31ed69(0xc1)]() !== '' && _0x7df18c >= _0xfe92 ? empReqNum = empReqNum[
                        _0x31ed69(0x14b)](_0x4ced08 => _0x4ced08[_0x31ed69(0x190)] !== _0xe8be37) : (!
                        empReqNum[_0x31ed69(0x170)](_0x5c9d4e => _0x5c9d4e['input'] === _0xe8be37) &&
                        empReqNum[_0x31ed69(0xac)]({ 'input': _0xe8be37 }), unfilledArr[_0x31ed69(0xac)]
                        ({ 'input': $(this)[_0x31ed69(0x140)]('name') })), empReqNum[_0x31ed69(0x18f)] ===
                    0x0 ?
                    numFilled = !![] : numFilled = ![];
            }), $(steps[x])['find'](_0x80e4da(0x195))[_0x80e4da(
                0x170)](_0x80e4da(0x1b5))[_0x80e4da(0x161)](function(_0x2ad902) {
                const _0x21e74f =
                    _0x80e4da;
                skipTo = undefined, $(this)['parents'](_0x21e74f(0xdb))[_0x21e74f(0x185)](_0x21e74f(
                    0x10d)) !== '' && (skipTo = $(this)[_0x21e74f(0x15f)](_0x21e74f(0xdb))['data'](
                    _0x21e74f(0x10d))), $(this)['parents'](_0x21e74f(0xd3))['attr'](_0x21e74f(0x1c7)) && (
                    answer = $(this)['parents'](_0x21e74f(0xd3))[_0x21e74f(0x140)](_0x21e74f(0x1c7)),
                    selections = selections[_0x21e74f(0x14b)](_0x510607 => _0x510607['step'] !== x),
                    selections[_0x21e74f(0xac)]({ 'step': x, 'selected': answer }), skipTo && (selections[
                            'push']({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[
                            'findIndex'](_0x169e8b => _0x169e8b[_0x21e74f(0x1de)] === x), selections[objIndex]
                        ['skipTo'] = parseInt(skipTo) - 0x1, selections[objIndex][_0x21e74f(0xf4)] = x));
            }), $(
                steps[x])[_0x80e4da(0x170)]('.active-answer-card')['find'](_0x80e4da(0x174))['each'](
                function(_0x20197a) {
                    const _0x4cde1b = _0x80e4da;
                    if ($(this)[_0x4cde1b(0xc1)]() !==
                        '') {
                        let _0x21b221 = $(this)[_0x4cde1b(0xc1)]()['length'],
                            _0xba7761 = $(this)[_0x4cde1b(0x185)](_0x4cde1b(0x129)) ? $(this)[_0x4cde1b(0x185)](
                                _0x4cde1b(0x129)) : 0x0;
                        if ($(this)['data'](_0x4cde1b(0x189))) {
                            var _0x53eb83 =
                                phoneAutoFormat($(this)['data'](_0x4cde1b(0x189)));
                            $(this)[_0x4cde1b(0xc1)](_0x53eb83($(this)['val']()));
                        }
                        phoneValidation($(this)[
                                'val'](), _0x21b221, _0xba7761) ? empReqTel = empReqTel[_0x4cde1b(0x14b)](
                                _0x3cef80 => _0x3cef80[_0x4cde1b(0x190)] !== _0x20197a) : empReqTel[_0x4cde1b(0xac)]
                            ({ 'input': _0x20197a });
                    } else !empReqTel[_0x4cde1b(0x170)](_0xec1cca => _0xec1cca[
                            _0x4cde1b(0x190)] === _0x20197a) && empReqTel['push']({ 'input': _0x20197a }),
                        unfilledArr[_0x4cde1b(0xac)]({ 'input': $(this)[_0x4cde1b(0x140)](_0x4cde1b(0x1c8)) });
                    empReqTel[_0x4cde1b(0x18f)] === 0x0 ? telFilled = !![] : telFilled = ![];
                }), $(steps[x])[
                _0x80e4da(0x170)]('.active-answer-card')[_0x80e4da(0x170)](_0x80e4da(0x144))[_0x80e4da(
                0x161)](function(_0x137feb) {
                const _0x543d36 = _0x80e4da;
                skipTo = undefined, $(this)[_0x543d36(0x15f)](_0x543d36(0xdb))[_0x543d36(0x185)](
                    'skip-to') !== '' && (skipTo = $(this)[_0x543d36(0x15f)]('[data-skip-to]')[_0x543d36(
                    0x185)](_0x543d36(0x10d))), $(this)[_0x543d36(0x15f)](_0x543d36(0xd3))[_0x543d36(
                    0x140)]('data-go-to') && (answer = $(this)[_0x543d36(0x15f)]('[data-go-to]')[
                        _0x543d36(0x140)](_0x543d36(0x1c7)), selections = selections[_0x543d36(0x14b)](
                        _0x159c09 => _0x159c09[_0x543d36(0x1de)] !== x), selections['push']
                    ({ 'step': x, 'selected': answer }), skipTo && (selections[_0x543d36(0xac)]
                        ({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections['findIndex'](
                            _0x4105c0 => _0x4105c0['step'] === x), selections[objIndex][_0x543d36(0x13b)] =
                        parseInt(skipTo) - 0x1, selections[objIndex]['backTo'] = x));
            }), $(steps[x])[_0x80e4da(
                0x170)](_0x80e4da(0x195))[_0x80e4da(0x170)](_0x80e4da(0x1db))[_0x80e4da(0x161)](function(
                _0x2d7abf) {
                const _0x579873 = _0x80e4da;
                $(this)[_0x579873(0xc1)]() !== '' ? empReqFile = empReqFile[_0x579873(0x14b)](_0x575699 =>
                    _0x575699['input'] !== _0x2d7abf) : (!empReqFile[_0x579873(0x170)](_0x4624be =>
                        _0x4624be['input'] === _0x2d7abf) && empReqFile['push']({ 'input': _0x2d7abf }),
                    unfilledArr[_0x579873(0xac)]({ 'input': $(this)[_0x579873(0x140)](_0x579873(0x1c8)) })
                ), empReqFile[_0x579873(0x18f)] === 0x0 ? fileFilled = !![] : fileFilled = ![];
            }), $(
                steps[x])['find'](_0x80e4da(0x195))[_0x80e4da(0x170)](_0x80e4da(0x211))[_0x80e4da(0x161)](
                function(_0x16bfed) {
                    const _0x53839d = _0x80e4da;
                    skipTo = undefined, $(this)[_0x53839d(0x15f)](_0x53839d(0xdb))[_0x53839d(0x185)](
                        _0x53839d(0x10d)) !== '' && (skipTo = $(this)[_0x53839d(0x15f)]('[data-skip-to]')[
                        _0x53839d(0x185)]('skip-to')), $(this)[_0x53839d(0x15f)](_0x53839d(0xd3))[_0x53839d(
                        0x140)]('data-go-to') && (answer = $(this)['parents'](_0x53839d(0xd3))[_0x53839d(
                            0x140)](_0x53839d(0x1c7)), selections = selections['filter'](_0x552f1f => _0x552f1f[
                            'step'] !== x), selections[_0x53839d(0xac)]({ 'step': x, 'selected': answer }),
                        skipTo && (selections['push']({ 'step': skipTo - 0x2, 'selected': answer }),
                            objIndex = selections[_0x53839d(0xd9)](_0x55479e => _0x55479e[_0x53839d(0x1de)] ===
                                x), selections[objIndex][_0x53839d(0x13b)] = parseInt(skipTo) - 0x1, selections[
                                objIndex]['backTo'] = x));
                }), $(steps[x])[_0x80e4da(0x170)](_0x80e4da(0x195))[
                'find'](_0x80e4da(0x1cc))['each'](function(_0x5a06c9) {
                const _0x2b86f4 = _0x80e4da;
                $(this)['val']() !== null && $(this)['val']() !== '' ? empReqSelect = empReqSelect[
                    _0x2b86f4(0x14b)](_0x3f2414 => _0x3f2414[_0x2b86f4(0x190)] !== _0x5a06c9) : (!
                    empReqSelect[_0x2b86f4(0x170)](_0xd4807e => _0xd4807e[_0x2b86f4(0x190)] ===
                        _0x5a06c9) && empReqSelect['push']({ 'input': _0x5a06c9 }), unfilledArr[_0x2b86f4(
                        0xac)]({ 'input': $(this)[_0x2b86f4(0x140)](_0x2b86f4(0x1c8)) })), empReqSelect[
                    _0x2b86f4(0x18f)] === 0x0 ? selectFilled = !![] : selectFilled = ![];
            }), $(steps[x])[
                _0x80e4da(0x170)](_0x80e4da(0x195))[_0x80e4da(0x170)](_0x80e4da(0x1f9))['each'](function(
                _0x52b5ad) {
                const _0x27d401 = _0x80e4da;
                skipTo = undefined, $(this)[_0x27d401(0x15f)]('[data-skip-to]')[_0x27d401(0x185)](
                    'skip-to') !== '' && (skipTo = $(this)[_0x27d401(0x15f)]('[data-skip-to]')[_0x27d401(
                    0x185)](_0x27d401(0x10d))), $(this)['parents'](_0x27d401(0xd3))[_0x27d401(0x140)](
                    _0x27d401(0x1c7)) && (answer = $(this)['parents'](_0x27d401(0xd3))[_0x27d401(0x140)](
                        'data-go-to'), selections = selections[_0x27d401(0x14b)](_0x1fd507 => _0x1fd507[
                        _0x27d401(0x1de)] !== x), selections[_0x27d401(0xac)]
                    ({ 'step': x, 'selected': answer }), skipTo && (selections['push']({
                            'step': skipTo -
                                0x2,
                            'selected': answer
                        }), objIndex = selections[_0x27d401(0xd9)](_0x4e066c =>
                            _0x4e066c[_0x27d401(0x1de)] === x), selections[objIndex][_0x27d401(0x13b)] =
                        parseInt(skipTo) - 0x1, selections[objIndex]['backTo'] = x));
            }), $(steps[x])[_0x80e4da(
                0x170)](_0x80e4da(0x195))[_0x80e4da(0x170)](_0x80e4da(0x209))[_0x80e4da(0x161)](function(
                _0x5b5282) {
                const _0x5ba9e3 = _0x80e4da;
                let _0x9a1122 = $(this)['val']()[_0x5ba9e3(
                        0x18f)],
                    _0x52f6f2 = $(this)[_0x5ba9e3(0x185)](_0x5ba9e3(0x129)) ? $(this)[_0x5ba9e3(0x185)](
                        _0x5ba9e3(0x129)) : 0x0;
                $(this)['val']() !== '' && _0x9a1122 >= _0x52f6f2 ? empReqTextarea = empReqTextarea[
                    'filter'](_0x2551bd => _0x2551bd[_0x5ba9e3(0x190)] !== _0x5b5282) : (!empReqTextarea[
                        _0x5ba9e3(0x170)](_0x3e9daf => _0x3e9daf[_0x5ba9e3(0x190)] === _0x5b5282) &&
                    empReqTextarea[_0x5ba9e3(0xac)]({ 'input': _0x5b5282 }), unfilledArr[_0x5ba9e3(0xac)]
                    ({ 'input': $(this)[_0x5ba9e3(0x140)](_0x5ba9e3(0x1c8)) })), empReqTextarea[_0x5ba9e3(
                    0x18f)] === 0x0 ? textareaFilled = !![] : textareaFilled = ![];
            }), $(steps[x])[_0x80e4da(
                0x170)]('.active-answer-card')[_0x80e4da(0x170)](_0x80e4da(0xeb))['each'](function(
                _0x1f98b4) {
                const _0x65bbbf = _0x80e4da;
                skipTo = undefined, $(this)[_0x65bbbf(0x15f)](_0x65bbbf(0xdb))[_0x65bbbf(0x185)](
                    _0x65bbbf(0x10d)) !== '' && (skipTo = $(this)['parents']('[data-skip-to]')[_0x65bbbf(
                    0x185)](_0x65bbbf(0x10d))), $(this)[_0x65bbbf(0x15f)](_0x65bbbf(0xd3))[_0x65bbbf(
                    0x140)](_0x65bbbf(0x1c7)) && (answer = $(this)['parents'](_0x65bbbf(0xd3))[_0x65bbbf(
                        0x140)](_0x65bbbf(0x1c7)), selections = selections[_0x65bbbf(0x14b)](_0x796f9c =>
                        _0x796f9c['step'] !== x), selections[_0x65bbbf(0xac)]
                    ({ 'step': x, 'selected': answer }), skipTo && (selections[_0x65bbbf(0xac)]
                        ({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x65bbbf(
                            0xd9)]
                        (_0x169a07 => _0x169a07['step'] === x), selections[objIndex]['skipTo'] = parseInt(
                            skipTo) - 0x1, selections[objIndex][_0x65bbbf(0xf4)] = x));
            }), $(steps[x])[_0x80e4da(
                0x170)](_0x80e4da(0x195))[_0x80e4da(0x170)](_0x80e4da(0xfb))['each'](function(
                _0x748acb) {
                const _0x106401 = _0x80e4da;
                $(this)[_0x106401(0xc1)]() !== '' ? validateEmail($(this)['val'](), $(this)[_0x106401(
                    0x185)](_0x106401(0x108)), $(this)[_0x106401(0x140)](_0x106401(0x1c8))) : (
                    emailFilled = ![], unfilledArr[_0x106401(0xac)]({
                        'input': $(this)[_0x106401(0x140)](
                            _0x106401(0x1c8))
                    }));
            }), $(steps[x])['find'](_0x80e4da(0x195))[_0x80e4da(0x170)](
                _0x80e4da(0x115))['each'](function(_0x3d228e) {
                const _0x7737ce = _0x80e4da;
                skipTo = undefined, $(this)[_0x7737ce(0x15f)](_0x7737ce(0xdb))['data'](_0x7737ce(
                    0x10d)) !== '' && (skipTo = $(this)[_0x7737ce(0x15f)](_0x7737ce(0xdb))[_0x7737ce(
                        0x185)]
                    (_0x7737ce(0x10d))), $(this)[_0x7737ce(0x15f)](_0x7737ce(0xd3))[_0x7737ce(0x140)](
                    _0x7737ce(0x1c7)) && (answer = $(this)[_0x7737ce(0x15f)](_0x7737ce(0xd3))[_0x7737ce(
                    0x140)](_0x7737ce(0x1c7)), selections = selections[_0x7737ce(0x14b)](_0x2f9967 =>
                    _0x2f9967['step'] !== x), console[_0x7737ce(0x146)](_0x7737ce(0x17e), selections,
                    x), selections['push']({ 'step': x, 'selected': answer }), skipTo && (selections[
                    'push']({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[
                    _0x7737ce(0xd9)](_0x374586 => _0x374586['step'] === x), selections[objIndex][
                    'skipTo'
                ] = parseInt(skipTo) - 0x1, selections[objIndex]['backTo'] = x));
            });
    }
    $(steps[x])[
            _0x80e4da(0x170)](_0x80e4da(0xed))['is'](_0x80e4da(0x1e0)) && (selArr = [], $(steps)[
                _0x80e4da(0x170)](_0x80e4da(0x205))['each'](function(_0x3f6b67, _0x33064f) {
                const
                    _0x236721 = _0x80e4da;
                selArr[_0x236721(0xac)]({ 'selected': $(this)[_0x236721(0x185)](_0x236721(0x1f6)) });
            }),
            selString = [], selArr[_0x80e4da(0x1e5)](_0x57a03a => selString['push'](_0x57a03a[_0x80e4da(
                0x1f6)])), $(steps[x])['find'](_0x80e4da(0x195))[_0x80e4da(0x170)](
                ':input[type=\x27radio\x27]:checked')[_0x80e4da(0x161)](function() {
                const _0x2ae468 =
                    _0x80e4da;
                skipTo = undefined;
                if ($(this)[_0x2ae468(0x15f)](_0x2ae468(0xdb))[_0x2ae468(0x185)](
                        'skip-to')) skipTo = $(this)[_0x2ae468(0x15f)]('[data-skip-to]')[_0x2ae468(0x185)](
                    _0x2ae468(0x10d));
                else $(this)[_0x2ae468(0x185)]('skip-to') && (skipTo = $(this)[_0x2ae468(0x185)](
                    _0x2ae468(0x10d)));
                selections = selections[_0x2ae468(0x14b)](_0x11496e => _0x11496e['step'] !== x), console[
                    'log'](selections, curStep, x);
                if ($(this)[_0x2ae468(0x185)](_0x2ae468(0x18d)))
                    answer = $(this)[_0x2ae468(0x140)](_0x2ae468(0x1c7)), selections[_0x2ae468(0xac)]
                    ({ 'step': x, 'selected': answer }), skipTo && (selections[_0x2ae468(0xac)]
                        ({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x2ae468(0xd9)]
                        (
                            _0x58357d => _0x58357d[_0x2ae468(0x1de)] === x), selections[objIndex]['skipTo'] =
                        parseInt(skipTo) - 0x1, selections[objIndex][_0x2ae468(0xf4)] = x);
                else $(this)[_0x2ae468(0x15f)](_0x2ae468(0xd3))[_0x2ae468(0x185)](_0x2ae468(0x18d)) && (
                    answer = $(this)[_0x2ae468(0x15f)](_0x2ae468(0xd3))[_0x2ae468(0x185)](_0x2ae468(
                        0x18d)), selections[_0x2ae468(0xac)]({ 'step': x, 'selected': answer }), skipTo && (
                        selections['push']({ 'step': skipTo - 0x2, 'selected': answer }), objIndex =
                        selections[_0x2ae468(0xd9)](_0x14e163 => _0x14e163[_0x2ae468(0x1de)] === x),
                        selections[objIndex][_0x2ae468(0x13b)] = parseInt(skipTo) - 0x1, selections[
                            objIndex][_0x2ae468(0xf4)] = x));
            }), logicExtra ? ($(steps[x])[_0x80e4da(0x170)](
                _0x80e4da(0x195))[_0x80e4da(0x170)](_0x80e4da(0x223))['data']('radio-skip') === !![] || $(
                steps[x])['find'](_0x80e4da(0x16c))[_0x80e4da(0x185)](_0x80e4da(0x1dd)) === !![]) && (
                skip && selections[_0x80e4da(0x14b)](_0x4ff6cd => _0x4ff6cd[_0x80e4da(0x1de)] === x)[
                    _0x80e4da(0x18f)] > 0x0 && (textareaLength === 0x0 && textInputLength === 0x0 &&
                    emailInputLength === 0x0 && checkboxInputLength === 0x0 && setTimeout(function() {
                        next
                            = !![], back = ![], nextStep(), selectionQuiz();
                    }, $(steps[x])['find'](_0x80e4da(
                        0x1fa))[_0x80e4da(0x185)](_0x80e4da(0x1f7))))) : $(steps[x])['find'](_0x80e4da(0x223))[
                _0x80e4da(0x185)](_0x80e4da(0x1dd)) === !![] && (skip && (textareaLength === 0x0 &&
                textInputLength === 0x0 && emailInputLength === 0x0 && checkboxInputLength === 0x0 &&
                setTimeout(function() { next = !![], back = ![], nextStep(), selectionQuiz(); }, $(steps[
                    x])[_0x80e4da(0x170)]('[data-radio-delay]')['data'](_0x80e4da(0x1f7)))))), inputFilled &&
        fileFilled && numFilled && checkboxFilled && telFilled && radioFilled && emailFilled &&
        domainAllowed && selectFilled && textareaFilled && passwordFilled && urlFilled ? enableBtn() :
        disableBtn(), andLogic(), cloneRemove(), cloneRemoveInput();
}

function displayErrorMessage() {
    const _0x4258d3 = _0x5851c4;
    $(_0x4258d3(0x1f0))['hide'](), unfilledArr[_0x4258d3(0x18f)] > 0x0 && unfilledArr['forEach'](
        function(_0xd9330) {
            const _0x106b93 = _0x4258d3;
            $(_0x106b93(0xdd) + _0xd9330[_0x106b93(0x190)] + '\x22]')['siblings'](_0x106b93(0x1f0))[
                _0x106b93(0x125)](), $(_0x106b93(0xdd) + _0xd9330[_0x106b93(0x190)] + '\x22]')[
                _0x106b93(0x15f)]()[_0x106b93(0xc3)](_0x106b93(0x1f0))[_0x106b93(0x125)](), $(_0x106b93(
                0xd6) + _0xd9330[_0x106b93(0x190)] + '\x22]')[_0x106b93(0x117)](
                '[data-text=\x22error-message\x22]')[_0x106b93(0x125)](), $(_0x106b93(0x1b4) + _0xd9330[
                _0x106b93(0x190)] + '\x22]')['siblings'](_0x106b93(0x1f0))[_0x106b93(0x125)]();
        });
}

function resetInputErrorMessage(_0x6fe42a) {
    const _0xb4826a = _0x5851c4;
    $(_0xb4826a(0xdd) + _0x6fe42a + '\x22]')[_0xb4826a(0x117)]('[data-text=\x22error-message\x22]')[
        _0xb4826a(0x1c6)](), $(_0xb4826a(0xdd) + _0x6fe42a + '\x22]')['parents']()[_0xb4826a(0xc3)](
        '[data-text=\x22error-message\x22]')['hide'](), $(_0xb4826a(0xd6) + _0x6fe42a + '\x22]')[
        _0xb4826a(0x117)](_0xb4826a(0x1f0))['hide'](), $(_0xb4826a(0x1b4) + _0x6fe42a + '\x22]')[
        _0xb4826a(0x117)](_0xb4826a(0x1f0))['hide']();
}

function increaseCurstep() {
    const _0x1c9aed = _0x5851c4;
    countCard ? (curStep = curStep + 0x1, $(_0x1c9aed(0x1d2))[_0x1c9aed(0x13d)](steps['length'])) : $(
        steps[x])[_0x1c9aed(0x185)]('card') ? curStep = curStep + 0x0 : curStep = curStep + 0x1, $(
        '[data-text=\x22current-step\x22]')[_0x1c9aed(0x13d)](curStep);
}

function decreaseCurstep() {
    const _0x53f4e5 = _0x5851c4;
    countCard ? (curStep = curStep - 0x1, $(_0x53f4e5(0x1d2))['text'](steps[_0x53f4e5(0x18f)])) : $(
            steps[x])[_0x53f4e5(0x185)](_0x53f4e5(0xf5)) ? curStep = curStep - 0x0 : curStep = curStep -
        0x1, $(_0x53f4e5(0x22f))[_0x53f4e5(0x13d)](curStep);
}

function _0x1148(_0x3e799f, _0x55dbcc) {
    const _0xe03e37 = _0xe03e();
    return _0x1148 = function(
        _0x1148a8, _0x5c13c8) {
        _0x1148a8 = _0x1148a8 - 0xac;
        let _0xc7aa82 = _0xe03e37[
            _0x1148a8];
        return _0xc7aa82;
    }, _0x1148(_0x3e799f, _0x55dbcc);
}
$(_0x5851c4(0xbb))['on'](
    'click',
    function(_0x155a74) {
        const _0xa74557 = _0x5851c4;
        $(this)[_0xa74557(0x185)](_0xa74557(0x1d6)) && (redirectTo = $(this)[_0xa74557(0x185)](
                _0xa74557(0x1d6))), !$(this)[_0xa74557(0x185)]('new-tab') && (newTab = $(this)[_0xa74557(
                0x185)](_0xa74557(0x124))), successCard = $(this)[_0xa74557(0x185)](_0xa74557(0x166)),
            _0x155a74[_0xa74557(0xe0)](), _0x155a74[_0xa74557(0x234)](), logicExtra && ($(this)['prop'](
                'novalidate', !![]), $(steps)[_0xa74557(0x170)](_0xa74557(0x1c9))[_0xa74557(0x200)](
                _0xa74557(0x184), ![])), localStorage[_0xa74557(0x106)](_0xa74557(0x233)), fill ? ($(
                    this)[_0xa74557(0x185)](_0xa74557(0xec)) ? (console['log']($(this)[_0xa74557(0x185)](
                    _0xa74557(0xec))), $(this)[_0xa74557(0x13d)]($(this)[_0xa74557(0x185)]('wait'))) : $(
                    this)[_0xa74557(0xc1)](_0xa74557(0xbc))[_0xa74557(0x13d)](_0xa74557(0xbc)), $(_0xa74557(
                    0x12f))[_0xa74557(0x133)](), $(_0xa74557(0x22c))[_0xa74557(0x18f)] > 0x0 && (grecaptcha[
                    'getResponse']()['length'] === 0x0 && (form['find'](_0xa74557(0xbb))[_0xa74557(0x13d)]
                    (oldSubmitText), form[_0xa74557(0x170)]('[data-form=\x22submit-btn\x22]')[_0xa74557(
                        0xc1)](oldSubmitText))), customError && $('[data-text=\x22error-message\x22]')['hide']
                ()) : customError && displayErrorMessage();
    });

function nextStep() {
    const _0x2df97a = _0x5851c4;
    customError ? ($(_0x2df97a(0x1f0))[_0x2df97a(0x1c6)](), fill ? (x++, increaseCurstep(), progress =
            x, x <= steps[_0x2df97a(0x18f)] - 0x1 && (updateStep(), memory && saveFilledInput())) :
        displayErrorMessage()) : (x++, increaseCurstep(), x > progress && (progress = x), x <= steps[
        _0x2df97a(0x18f)] - 0x1 && (updateStep(), memory && saveFilledInput())), andLogic();
}

function backStep() {
    const _0x255652 = _0x5851c4;
    customError && $(_0x255652(0x1f0))[_0x255652(0x1c6)](), decreaseCurstep(), x > 0x0 && ($(
        progressbar[x])['removeClass'](_0x255652(0x176)), selections['filter'](_0xd714d5 =>
        _0xd714d5[_0x255652(0x13b)] === x)[_0x255652(0x18f)] > 0x0 ? x = parseInt(getSafe(() =>
        selections[_0x255652(0x14b)](_0x3d9490 => _0x3d9490[_0x255652(0x13b)] === x)[0x0][
            'backTo'
        ])) : x--, updateStep()), ($(steps[x])['find']('[data-radio-skip]:visible')[
        _0x255652(0x185)](_0x255652(0x1dd)) === !![] || $(steps[x])[_0x255652(0x170)](_0x255652(
        0x195))['find'](_0x255652(0x223))[_0x255652(0x185)](_0x255652(0x1dd)) === !![] || $(steps[
        x])[_0x255652(0x170)](_0x255652(0x16c))[_0x255652(0x185)]('radio-skip') === !![]) && (
        all_data = all_data[_0x255652(0x14b)](_0x462a86 => _0x462a86[_0x255652(0x1f4)] !== $(steps[
            x])['find'](_0x255652(0x12b))[_0x255652(0x140)](_0x255652(0x1c8))), $(
            '[data-input-field=\x22' + $(steps[x])[_0x255652(0x170)](_0x255652(0x12b))['attr'](
                _0x255652(0x1c8)) + '\x22]')['hide'](), $(steps[x])[_0x255652(0x170)](_0x255652(0xff))[
            _0x255652(0x200)](_0x255652(0xc2), ![]), $(steps[x])['find'](_0x255652(0x18a))[_0x255652(
            0x1f1)](_0x255652(0x194)), validation());
}
weightedSelectionRange && $(_0x5851c4(0x210))[
    'each'](function() {
    const _0x423eab = _0x5851c4;
    $(this)['append'](_0x423eab(0xb0) + $(this)[_0x423eab(0x185)](_0x423eab(0x1d1)) +
        '</div>');
});

function selectionQuiz() {
    const _0xf683f8 = _0x5851c4;
    if ($(this)['find'](_0xf683f8(0x158))) {
        $(
            _0xf683f8(0x210))['hide'](), $(_0xf683f8(0x21e))[_0xf683f8(0x1c6)]();
        if (
            weightedSelection) {
            selTotal = 0x0, selArr[_0xf683f8(0x1e5)](function(_0x567282) {
                const
                    _0x215e5a = _0xf683f8;
                selTotal = selTotal + _0x567282[_0x215e5a(0x1f6)];
            }), $(_0xf683f8(0x22a))[_0xf683f8(
                0x13d)](selTotal);
            if ($('[data-selection=\x22' + selTotal + '\x22]')[_0xf683f8(0x18f)] >
                0x0) $(_0xf683f8(0x103) + selTotal + '\x22]')['fadeIn']();
            else $(_0xf683f8(0xf3) + selTotal + ')') ? $(_0xf683f8(0xf3) + selTotal + ')')[_0xf683f8(
                0x207)](_0xf683f8(0x210))['eq'](0x0)[_0xf683f8(0xd7)]() : $(_0xf683f8(0x1d0))[_0xf683f8(
                0x125)]();
        } else {
            let _0x3eef1e = -0x1;
            $(_0xf683f8(0x210))[_0xf683f8(0x161)](function(_0x3462b9) {
                const _0x16cc50 = _0xf683f8;
                $($(_0x16cc50(0x210))[_0x3462b9])['data'](_0x16cc50(0x1d1))[_0x16cc50(0x199)](selString[
                    _0x16cc50(0x12e)]()) && (_0x3eef1e = _0x3462b9);
            }), _0x3eef1e > -0x1 ? $($(_0xf683f8(
                0x210))[_0x3eef1e])[_0xf683f8(0x125)]() : $(_0xf683f8(0x1d0))[_0xf683f8(0x125)]();
        }
    }
}

function triggerInputAllData() {
    const _0x44906c = _0x5851c4;
    if (savedFilledInput && memory)
        savedFilledInput[_0x44906c(0x1e5)](_0x2c356a => {
            const _0x5b9ebb = _0x44906c;
            var _0x213e7c =
                $('input[name=\x22' + _0x2c356a[_0x5b9ebb(0xc0)] + _0x5b9ebb(0x1ab) + _0x2c356a['value'] +
                    _0x5b9ebb(0x107)),
                _0x979a70 = $(_0x5b9ebb(0xdd) + _0x2c356a[_0x5b9ebb(0xc0)] + _0x5b9ebb(0x107)),
                _0x30cc23 = $(_0x5b9ebb(0xd6) + _0x2c356a[_0x5b9ebb(0xc0)] + _0x5b9ebb(0x107)),
                _0x2edec3 = $('input[type=\x22checkbox\x22][name=\x22' + _0x2c356a[_0x5b9ebb(0xc0)] +
                    '\x22]'),
                _0x540eab = $(_0x5b9ebb(0x203) + _0x2c356a['inputName'] + _0x5b9ebb(0x1ab) + _0x2c356a[
                    _0x5b9ebb(0x16a)] + '\x22]:not([data-prefill=\x22false\x22])');
            if (_0x213e7c[_0x5b9ebb(
                    0x140)](_0x5b9ebb(0xcf)) !== 'file') {
                if (_0x213e7c['attr'](_0x5b9ebb(0xcf)) ===
                    _0x5b9ebb(0xf6) && !_0x213e7c[_0x5b9ebb(0x15f)]('[data-radio-skip]')[_0x5b9ebb(0x185)](
                        _0x5b9ebb(0x1dd))) _0x213e7c['click'](), _0x213e7c[_0x5b9ebb(0x117)](_0x5b9ebb(
                    0x145))[_0x5b9ebb(0x214)](_0x5b9ebb(0x194)), _0x213e7c[_0x5b9ebb(0xfc)]('input');
                else _0x2c356a[_0x5b9ebb(0x16a)] === 'on' ? (_0x979a70['click'](), _0x979a70[_0x5b9ebb(
                    0x117)](_0x5b9ebb(0x112))['addClass'](_0x5b9ebb(0x194)), _0x979a70['trigger'](
                    _0x5b9ebb(0x190))) : (_0x979a70['val'](_0x2c356a[_0x5b9ebb(0x16a)]), _0x30cc23['val'](
                        _0x2c356a[_0x5b9ebb(0x16a)]), $(_0x5b9ebb(0x10a))[_0x5b9ebb(0x170)](_0x5b9ebb(
                        0xc4) + _0x2c356a['value'] + '\x22]')[_0x5b9ebb(0x200)](_0x5b9ebb(0x1f6), !![]),
                    _0x979a70[_0x5b9ebb(0xfc)](_0x5b9ebb(0x190)), _0x979a70[_0x5b9ebb(0xfc)](_0x5b9ebb(
                        0x1cf)));
                const _0x50143a = _0x540eab[_0x5b9ebb(0x185)](_0x5b9ebb(0x1f8)),
                    _0x1fc09a = _0x2edec3[_0x5b9ebb(0x185)](_0x5b9ebb(0x1f8));
                _0x540eab['parent']()['addClass'](_0x50143a), _0x2edec3['parent']()[_0x5b9ebb(0x214)](
                    _0x1fc09a);
            }
        });
    else _params && (getParams(), searchQ[_0x44906c(0x1e5)](_0x24e34c => {
        const _0x308537 =
            _0x44906c;
        if ($('input[name=\x22' + _0x24e34c[_0x308537(0xc0)] + _0x308537(0x1ab) +
                _0x24e34c[_0x308537(0x16a)] + _0x308537(0x107))[_0x308537(0x140)](_0x308537(0xcf)) !==
            _0x308537(0x105)) {
            if ($(_0x308537(0xdd) + _0x24e34c['key'] + _0x308537(0x1ab) +
                    _0x24e34c['val'] + _0x308537(0x107))['attr']('type') === 'radio') $(
                    'input[name=\x22' + _0x24e34c[_0x308537(0x1d3)] + _0x308537(0x1ab) + _0x24e34c[
                        _0x308537(0xc1)] + _0x308537(0x107))[_0x308537(0xb5)](), $(_0x308537(0xdd) +
                    _0x24e34c[_0x308537(0x1d3)] + '\x22][value=\x22' + _0x24e34c[_0x308537(0xc1)] +
                    _0x308537(0x107))[_0x308537(0x117)](_0x308537(0x145))['addClass'](_0x308537(0x194)),
                $(_0x308537(0xdd) + _0x24e34c[_0x308537(0x1d3)] + _0x308537(0x1ab) + _0x24e34c[
                    _0x308537(0xc1)] + _0x308537(0x107))[_0x308537(0xfc)](_0x308537(0x190));
            else _0x24e34c[_0x308537(0xc1)] === 'on' ? ($('input[name=\x22' + _0x24e34c[_0x308537(
                0x1d3)] + _0x308537(0x107))[_0x308537(0xb5)](), $(_0x308537(0xdd) + _0x24e34c[
                _0x308537(0x1d3)] + _0x308537(0x107))[_0x308537(0x117)](_0x308537(0x112))[
                _0x308537(0x214)]('w--redirected-checked'), $(_0x308537(0xdd) + _0x24e34c[
                _0x308537(0x1d3)] + '\x22]')[_0x308537(0xfc)]('input')) : ($(_0x308537(0xdd) +
                _0x24e34c[_0x308537(0x1d3)] + '\x22]:not([data-prefill=\x22false\x22])')[
                _0x308537(0xc1)](_0x24e34c[_0x308537(0xc1)]), $('textarea[name=\x22' + _0x24e34c[
                _0x308537(0x1d3)] + _0x308537(0x107))[_0x308537(0xc1)](_0x24e34c['val']), $(
                _0x308537(0x1b4) + _0x24e34c[_0x308537(0x1d3)] + _0x308537(0x107))[_0x308537(
                0x170)]('option[value=\x22' + _0x24e34c['val'] + '\x22]')[_0x308537(0x200)](
                'selected', !![]), $(_0x308537(0xdd) + _0x24e34c[_0x308537(0x1d3)] + _0x308537(
                0x107))[_0x308537(0xfc)](_0x308537(0x190)), $(_0x308537(0xdd) + _0x24e34c[
                _0x308537(0x1d3)] + _0x308537(0x107))[_0x308537(0xfc)](_0x308537(0x1cf)));
        }
    }));
}
$(
    _0x5851c4(0xfd))['on'](_0x5851c4(0xb5), function() {
    next = !![], back = ![], nextStep(),
        selectionQuiz();
}), $('[data-form=\x22back-btn\x22]')['on'](_0x5851c4(0xb5),
    function() { next = ![], back = !![], backStep(); }), $(steps)['find'](_0x5851c4(0x1c9))[
    _0x5851c4(
        0x10b)](_0x5851c4(0x12c))['on'](_0x5851c4(0x190), function(_0x2577bf) {
    validation(),
        andLogic(), addClickClass();
}), $(steps)[_0x5851c4(0x170)]('input[type=\x22radio\x22]')['on'](
    'click',
    function() { skip = !![], validation(), addClickClass(); });
$(_0x5851c4(0x126))['data'](_0x5851c4(0xca)) ? $(_0x5851c4(0xde))['removeClass'](_0x5851c4(0x212)) :
    $('[data-form=\x22custom-progress-indicator\x22]')['addClass'](_0x5851c4(0x212));

function clickableIndicator() {
    const _0x258af0 = _0x5851c4;
    $(_0x258af0(0x181))['data']('clickable') && ($('[data-form=\x22progress-indicator\x22]')[
        'removeClass'](_0x258af0(0x176)), $(_0x258af0(0x181))['data']('clickable-all') ? (x = $(
        this)['index'](), updateStep()) : $(this)['index']() <= progress && (x = $(this)[_0x258af0(
        0x21c)](), updateStep())), $(_0x258af0(0x22f))[_0x258af0(0x13d)](x + 0x1);
}
$(_0x5851c4(0xde))[
    'on']('click', clickableIndicator);
$(_0x5851c4(0x12f))[_0x5851c4(0x185)]('debug-mode') && ($(_0x5851c4(0xd3))[_0x5851c4(0x161)](
        function() {
            const _0x177c20 = _0x5851c4;
            $(this)[_0x177c20(0xee)](_0x177c20(0x11e), $(this)[_0x177c20(0x185)](_0x177c20(0x18d)));
        }),
    $(_0x5851c4(0x167))['each'](function() {
        const _0x43c437 = _0x5851c4;
        $(this)[_0x43c437(0xee)](_0x43c437(0x21a), $(this)['data'](_0x43c437(0x104)));
    }));

function resetFormly() {
    const _0x28c525 = _0x5851c4;
    $('[data-form=\x22multistep\x22]')['trigger'](_0x28c525(0x1d5)), $(_0x28c525(0x12f))[_0x28c525(
        0x15f)]()[_0x28c525(0x170)](_0x28c525(0xdc))['hide'](), x = 0x0, updateStep(), $(
        '[data-form=\x22multistep\x22]')[_0x28c525(0xd7)](), $(_0x28c525(0xbb))['text'](
        oldSubmitText), $(_0x28c525(0xbb))['val'](oldSubmitText), $(
        '[data-text=\x22current-step\x22]')[
        _0x28c525(0x13d)](0x1), $(_0x28c525(0x12f))[_0x28c525(0x170)](_0x28c525(0x1d7))[_0x28c525(
        0x117)](_0x28c525(0x112))[_0x28c525(0x1f1)]('w--redirected-checked');
}
$(document)[_0x5851c4(
    0x1e2)](function(_0x449ec2, _0x3d8f92, _0x17c7af) {
    const _0x86797b = _0x5851c4;
    if (_0x17c7af[
            'url'][_0x86797b(0x199)](_0x86797b(0x1b0))) {
        const _0x593cb3 = _0x3d8f92[_0x86797b(
                0xcd)] === 0xc8,
            _0x24f25a = _0x86797b(0x191);
        redirectTo && _0x593cb3 && (newTab ? window['open'](redirectTo, '_blank') : setTimeout(
                () => { location['href'] = redirectTo; }, redirectDelay)), _0x593cb3 && successCard !==
            '' && $('[data-success-card=\x22' + successCard + '\x22]')['fadeIn'](), _0x593cb3 &&
            formReset && setTimeout(() => { resetFormly(); }, resetDelay), !_0x593cb3 && ($(
                '[data-form=\x22submit-btn\x22]')[_0x86797b(0xc1)](_0x86797b(0xbc)), $(_0x86797b(
                0xbb))[_0x86797b(0x13d)](_0x86797b(0xbc)));
    }
}), $(_0x5851c4(0xf8))['on'](_0x5851c4(
        0xb5),
    function() {
        const _0x49aee9 = _0x5851c4;
        var _0x4df745 = $(this)[_0x49aee9(0x207)]()[
            _0x49aee9(0x170)](_0x49aee9(0xe4))[_0x49aee9(0x185)](_0x49aee9(0x128));
        setTimeout(function() {
                const _0x478b65 = _0x49aee9;
                $(_0x478b65(0xdd) + _0x4df745 + '\x22]')[_0x478b65(0x1c5)]();
            }, 0x64), back = !![], x =
            $(this)['data'](_0x49aee9(0x18c)) - 0x1, updateStep(), countCard ? (curStep = x + 0x1, $(
                _0x49aee9(0x1d2))['text'](steps['length'])) : $(steps[x])['data'](_0x49aee9(0xf5)) ?
            curStep = x + 0x0 : curStep = x + 0x1, $(_0x49aee9(0x22f))[_0x49aee9(0x13d)](curStep),
            back = ![];
    }), $(_0x5851c4(0x197))['on'](_0x5851c4(0xb5), function() {
    const _0x363333 =
        _0x5851c4;
    $(_0x363333(0x12f))[_0x363333(0xfc)](_0x363333(0x1d5));
    let _0x4ca3ef = $(this);
    $(this)['text'](_0x363333(0xbc)), setTimeout(function() {
        const _0x3eb0c0 = _0x363333;
        $(_0x4ca3ef)['text'](oldResetText), $(_0x4ca3ef)[_0x3eb0c0(0x15f)]('.w-form-done')[
            _0x3eb0c0(0x1c6)](), x = 0x0, updateStep(), $(_0x3eb0c0(0x12f))['show'](), $(
            _0x3eb0c0(0xbb))[_0x3eb0c0(0x13d)](oldSubmitText), $(_0x3eb0c0(0xbb))[_0x3eb0c0(
            0xc1)](oldSubmitText), $(_0x4ca3ef)['val'](oldSubmitText), $(
            '[data-text=\x22current-step\x22]')[_0x3eb0c0(0x13d)](0x1), $(_0x3eb0c0(0x12f))[
            _0x3eb0c0(0x170)]('input:checkbox')[_0x3eb0c0(0x117)]('.w-checkbox-input')[
            _0x3eb0c0(0x1f1)](_0x3eb0c0(0x194));
    }, resetDelay);
}), $('body')['on'](_0x5851c4(0x218),
    function(_0x2b10f8) {
        const _0x16deeb = _0x5851c4;
        if (_0x2b10f8['keyCode'] ===
            0xd) {
            _0x2b10f8[_0x16deeb(0xe0)](), _0x2b10f8[_0x16deeb(0x234)]();
            if ($(steps[x])['find'](
                    'textarea')['is'](_0x16deeb(0x12a))) $(steps[x])[_0x16deeb(0x170)](_0x16deeb(0x208))[
                _0x16deeb(0xc1)]($(steps[x])['find'](_0x16deeb(0x208))['val']() + '\x0a');
            else $(_0x16deeb(0x1a8))[_0x16deeb(0x185)](_0x16deeb(0xd5)) && fill && (totalSteps >
                curStep && $('[data-form=\x22next-btn\x22]')[0x0][_0x16deeb(0xb5)]());
        }
    }), $(_0x5851c4(
    0x1f5))[_0x5851c4(0x1dc)](function(_0xfa54c1) {
    const _0x29de3c = _0x5851c4;
    (_0xfa54c1[_0x29de3c(0x136)] || _0xfa54c1[_0x29de3c(0x225)]) && _0xfa54c1['keyCode'] == 0xd &&
        (x >= steps[_0x29de3c(0x18f)] - 0x1 && fill ? $(steps[x])[_0x29de3c(0x170)](_0x29de3c(
            0x201))[_0x29de3c(0xb5)]() : (_0xfa54c1[_0x29de3c(0xe0)](), _0xfa54c1[_0x29de3c(0x234)]
            ()));
}), $(_0x5851c4(0x12f))[_0x5851c4(0x170)](_0x5851c4(0x1c9))['on'](_0x5851c4(0x1cf),
    function() {
        const _0x164976 = _0x5851c4;
        all_data = all_data['filter'](_0x2491c1 => _0x2491c1[_0x164976(0x1f4)] !== $(this)[_0x164976(
            0x140)](_0x164976(0x1c8))), $(this)['attr'](_0x164976(0xcf)) === _0x164976(0x1d9) ? $(
            this)['is'](_0x164976(0x1e0)) ? all_data[_0x164976(0xac)]({
            'field': $(this)['attr'](
                _0x164976(0x1c8)),
            'value': $(this)[_0x164976(0x117)](_0x164976(0xe3))['text']()
        }) : $(
            _0x164976(0x13a) + $(this)[_0x164976(0x140)](_0x164976(0x1c8)) + '\x22]')['hide']() : (
            all_data['push']({
                'field': $(this)['attr'](_0x164976(0x1c8)),
                'value': $(this)[_0x164976(
                    0xc1)]()
            }), $(this)['val']() !== '' && resetInputErrorMessage($(this)[_0x164976(
                0x140)](_0x164976(0x1c8)))), all_data[_0x164976(0x1e5)](function(_0x4c7611) {
            const
                _0x5c2e67 = _0x164976;
            $('[data-input-field=\x22' + _0x4c7611[_0x5c2e67(0x1f4)] + '\x22]')[_0x5c2e67(0xd7)](),
                $(_0x5c2e67(0x13a) + _0x4c7611[_0x5c2e67(0x1f4)] + '\x22]')[_0x5c2e67(0x13d)](
                    _0x4c7611[_0x5c2e67(0x16a)]);
        });
    }), $(_0x5851c4(0x12f))[_0x5851c4(0x170)](_0x5851c4(
    0xeb))['on'](_0x5851c4(0x1cf), function() {
    const _0x18c855 = _0x5851c4;
    $(this)[_0x18c855(0xc1)]() !== '' && resetInputErrorMessage($(this)[_0x18c855(0x140)](
        _0x18c855(0x1c8))), all_data = all_data['filter'](_0xf7f35b => _0xf7f35b[_0x18c855(
        0x1f4)] !== $(this)[_0x18c855(0x140)]('name')), all_data[_0x18c855(0xac)]({
        'field': $(
            this)[_0x18c855(0x140)]('name'),
        'value': $(this)[_0x18c855(0xc1)]()
    }), all_data[
        'forEach'](function(_0x4013c1) {
        const _0x41c868 = _0x18c855;
        $(_0x41c868(0x13a) + _0x4013c1[_0x41c868(0x1f4)] + '\x22]')['show'](), $(_0x41c868(
            0x13a) + _0x4013c1[_0x41c868(0x1f4)] + '\x22]')[_0x41c868(0x13d)](_0x4013c1[
            _0x41c868(0x16a)]);
    });
}), $(_0x5851c4(0x12f))[_0x5851c4(0x170)](_0x5851c4(0x1f9))['on'](
    'change',
    function() {
        const _0x41036f = _0x5851c4;
        $(this)[_0x41036f(0xc1)]() !== '' && resetInputErrorMessage($(this)['attr'](_0x41036f(
            0x1c8)));
        var _0x41f556 = $(this)[_0x41036f(0x185)](_0x41036f(0x1c4));
        all_data = all_data[_0x41036f(0x14b)](_0x25d5ad => _0x25d5ad[_0x41036f(0x1f4)] !== $(this)[
            _0x41036f(0x140)](_0x41036f(0x1c8))), all_data[_0x41036f(0xac)]({
            'field': $(this)[
                _0x41036f(0x140)]('name'),
            'value': _0x41f556 ? $(this)[_0x41036f(0x170)](_0x41036f(
                0x1ec))['text']() : $(this)[_0x41036f(0xc1)]()
        }), all_data[_0x41036f(0x1e5)](function(
            _0x8b7499) {
            const _0x3b33f1 = _0x41036f;
            $(_0x3b33f1(0x13a) + _0x8b7499[_0x3b33f1(0x1f4)] + '\x22]')['show'](), $(
                '[data-input-field=\x22' + _0x8b7499[_0x3b33f1(0x1f4)] + '\x22]')[_0x3b33f1(0x13d)](
                _0x8b7499[_0x3b33f1(0x16a)]);
        });
    }), updateStep(), triggerInputAllData(), $(
    '[data-cms-select=cms]')['each'](function() {
    const _0x4107b3 = _0x5851c4,
        _0x16b0fa = $(this)[_0x4107b3(0x170)](_0x4107b3(0x186)),
        _0x448b04 = [];
    _0x16b0fa[_0x4107b3(0x161)](function() {
        const _0x4dfd67 = _0x4107b3;
        _0x448b04[_0x4dfd67(0xac)]($(this)['text']()[_0x4dfd67(0x232)]());
    });
    const _0x20ae94 = $(
        this)[_0x4107b3(0x117)](_0x4107b3(0x1fd));
    $[_0x4107b3(0x161)](_0x448b04, function(_0x958fe9, _0x4747e9) {
        const _0x4c61f7 = _0x4107b3,
            _0x50f485 = $(_0x4c61f7(0x172))[_0x4c61f7(0xc1)](_0x4747e9)[_0x4c61f7(0x13d)](
                _0x4747e9);
        _0x20ae94[_0x4c61f7(0xee)](_0x50f485);
    });
});

function cloneRemove() {
    const _0x5e3f5d = _0x5851c4;
    $(_0x5e3f5d(0x19c))[_0x5e3f5d(0x161)](function() {
        const _0x3858ee = _0x5e3f5d;
        $(this)[_0x3858ee(0x170)](_0x3858ee(0x1d8))[_0x3858ee(0x18f)] < 0x2 ? $(this)[_0x3858ee(
            0x170)](_0x3858ee(0xb1))[_0x3858ee(0x1c6)]() : $(this)['find'](_0x3858ee(0xb1))[
            _0x3858ee(0xd7)]();
    });
}

function cloneRemoveInput() {
    const _0x17aef1 = _0x5851c4;
    $('[data-clone-input-wrapper]')[_0x17aef1(0x161)](function() {
        const _0x24e706 = _0x17aef1;
        console[_0x24e706(0x146)]($(this)['find']('[data-clone-input]')[_0x24e706(0x18f)]), $(this)[
            _0x24e706(0x170)]('[data-clone-input]')[_0x24e706(0x18f)] < 0x2 ? $(this)[_0x24e706(
            0x170)](_0x24e706(0x1a4))[_0x24e706(0x1c6)]() : $(this)[_0x24e706(0x170)](_0x24e706(
            0x1a4))[_0x24e706(0xd7)]();
    });
}
$(_0x5851c4(0xb1))['on'](_0x5851c4(0xb5),
    function() {
        const _0x496b12 = _0x5851c4,
            _0xc0ea75 = $(this)[_0x496b12(0x15f)](_0x496b12(0x1d8))[_0x496b12(0x18f)] > 0x0 ? $(this)[
                _0x496b12(0x15f)](_0x496b12(0x1d8))['index']() : $(this)[_0x496b12(0x15f)](_0x496b12(
                0x153))['index'](),
            _0x21038b = $(this)[_0x496b12(0x15f)](_0x496b12(0x1d8))[_0x496b12(0x18f)] > 0x0 ? $(this)[
                _0x496b12(0x15f)]('[data-clone]')[_0x496b12(0x185)](_0x496b12(0xf1)) : $(this)[_0x496b12(
                0x15f)]('[data-display]')[_0x496b12(0x185)](_0x496b12(0x10f));
        $('[data-clone=\x22' + _0x21038b + '\x22]')['eq'](_0xc0ea75)[_0x496b12(0x21d)](), $(
            '[data-display=\x22' + _0x21038b + '\x22]')['eq'](_0xc0ea75)['remove'](), cloneRemove();
        let
            _0x583297 = $(_0x496b12(0x18e) + _0x21038b + '\x22]')[_0x496b12(0x185)](_0x496b12(0x13c)),
            _0x2e48a6 = $(_0x496b12(0x1a5) + _0x21038b + '\x22]')[_0x496b12(0x18f)];
        console['log'](_0x2e48a6, _0x583297), _0x2e48a6 < _0x583297 && (console[_0x496b12(0x146)](
                _0x496b12(0xd7)), $(_0x496b12(0x18e) + _0x21038b + '\x22]')[_0x496b12(0xd7)]()),
            validation();
    }), $('[data-form=\x22remove-input-clone\x22]')['on'](_0x5851c4(0xb5),
    function() {
        const _0x1a2581 = _0x5851c4;
        let _0x58c8e6 = $(this)[_0x1a2581(0x117)]()['attr'](
                _0x1a2581(0x1c8)),
            _0x1a563e = $(this)[_0x1a2581(0x15f)](_0x1a2581(0xe2))['data'](_0x1a2581(0x17f));
        $(this)[_0x1a2581(0x207)](_0x1a2581(0xe2))[_0x1a2581(0x21d)](), $(_0x1a2581(0x13a) +
            _0x58c8e6 + '\x22]')[_0x1a2581(0x207)](_0x1a2581(0x17a))[_0x1a2581(0x21d)]();
        let
            _0x5137d6 = $('[data-add-new-input=\x22' + _0x1a563e + '\x22]')[_0x1a2581(0x185)](
                'add-new-input-limit'),
            _0x3abc03 = $(_0x1a2581(0xd2) + _0x1a563e + '\x22]')[_0x1a2581(0x18f)];
        _0x3abc03 < _0x5137d6 && $(_0x1a2581(0x217) + _0x1a563e + '\x22]')[_0x1a2581(0xd7)](),
            validation();
    }), $(_0x5851c4(0x142))['on'](_0x5851c4(0xb5), function() {
    const _0x4ad994 =
        _0x5851c4;
    let _0x4eef6e = $(this)[_0x4ad994(0x185)](_0x4ad994(0x171)),
        _0x2fd30f = $(this)[_0x4ad994(0x185)](_0x4ad994(0x13c));
    var _0x414038 = $(_0x4ad994(
            0x1a5) + _0x4eef6e + '\x22]')['eq'](0x0)[_0x4ad994(0xf1)](!![]),
        _0x1ecc69 = $(_0x4ad994(0x1e9) + _0x4eef6e + '\x22]')['eq'](0x0)[_0x4ad994(0xf1)](!![]);
    let
        _0x346fe9 = '';
    $(this)[_0x4ad994(0x170)](_0x4ad994(0xb1))['show'](), cloneRemove(), _0x414038[_0x4ad994(
            0x170)](_0x4ad994(0xe2))[_0x4ad994(0x170)](_0x4ad994(0x190))[_0x4ad994(0xc1)](''),
        _0x414038[_0x4ad994(0x170)](_0x4ad994(0xe2))[_0x4ad994(0x170)](_0x4ad994(0x1f9))[_0x4ad994(
            0xc1)](''), _0x414038['find'](_0x4ad994(0xe2))['find'](_0x4ad994(0xeb))[_0x4ad994(0xc1)](
            ''), _0x414038[_0x4ad994(0x170)]('[data-clone-input]')['not'](_0x4ad994(0x177))[_0x4ad994(
            0x21d)](), _0x414038[_0x4ad994(0x170)]('[data-clone-input]')['find'](
            '[aria-label=\x22Remove\x20file\x22]')[_0x4ad994(0xb5)](), _0x1ecc69[_0x4ad994(0x170)](
            _0x4ad994(0x17a))[_0x4ad994(0x10b)](_0x4ad994(0x177))[_0x4ad994(0x21d)](), _0x414038[
            _0x4ad994(0x170)](_0x4ad994(0x190))[_0x4ad994(0x161)](function() {
            const _0x133dcd =
                _0x4ad994;
            if ($(this)[_0x133dcd(0xc5)]('[data-clone-input]')[_0x133dcd(0x18f)] >
                0x0) {
                let _0x403b93 = 0x0;
                const _0x1e050a = $(this)[_0x133dcd(0xc5)](_0x133dcd(
                    0xe2))[_0x133dcd(0x185)](_0x133dcd(0x17f));
                $('[data-clone-input=\x22' + _0x1e050a + _0x133dcd(0x1e4))[_0x133dcd(0x161)](
                    function() {
                        const _0x26e117 = _0x133dcd,
                            _0x3478cb = $(this)[_0x26e117(0x140)](_0x26e117(0x1c8));
                        if (_0x3478cb &&
                            _0x3478cb[_0x26e117(0x164)](_0x26e117(0xe6))) {
                            const _0x1615f2 = parseInt(
                                _0x3478cb[_0x26e117(0xbd)]('-')[0x1]);
                            !isNaN(_0x1615f2) && _0x1615f2 >
                                _0x403b93 && (_0x403b93 = _0x1615f2);
                        }
                    }), _0x403b93++, _0x346fe9 = this[
                    'name'] + '-' + _0x403b93;
            } else _0x346fe9 = this[_0x133dcd(0x1c8)] + '-' + (
                parseInt($('[data-clone=\x22' + _0x4eef6e + '\x22]')[_0x133dcd(0x1be)]()[_0x133dcd(
                    0x21c)]()) + 0x1);
            $(this)['val'](''), $(this)['attr'](_0x133dcd(0x1c8), _0x346fe9), $(this)[_0x133dcd(
                0x140)](_0x133dcd(0xda), _0x346fe9);
        }), _0x414038[_0x4ad994(0x170)](_0x4ad994(0xeb))[
            _0x4ad994(0x161)](function() {
            const _0x2720d6 = _0x4ad994;
            if ($(this)[_0x2720d6(0xc5)](
                    _0x2720d6(0xe2))[_0x2720d6(0x18f)] > 0x0) {
                let _0x32f20e = 0x0;
                const _0x35194f =
                    $(this)[_0x2720d6(0xc5)](_0x2720d6(0xe2))[_0x2720d6(0x185)]('clone-input');
                $(_0x2720d6(0xd2) + _0x35194f + _0x2720d6(0xb4))[_0x2720d6(0x161)](function() {
                    const
                        _0x57afa7 = _0x2720d6,
                        _0x2234a7 = $(this)[_0x57afa7(0x140)](_0x57afa7(0x1c8));
                    if (_0x2234a7 &&
                        _0x2234a7[_0x57afa7(0x164)](_0x57afa7(0xe6))) {
                        const _0x388f96 = parseInt(
                            _0x2234a7['split']('-')[0x1]);
                        !isNaN(_0x388f96) && _0x388f96 > _0x32f20e &&
                            (_0x32f20e = _0x388f96);
                    }
                }), _0x32f20e++, _0x346fe9 = this[_0x2720d6(
                    0x1c8)] + '-' + _0x32f20e;
            } else _0x346fe9 = this['name'] + '-' + (parseInt($(
                '[data-clone=\x22' + _0x4eef6e + '\x22]')['last']()[_0x2720d6(0x21c)]()) + 0x1);
            $(this)[_0x2720d6(0xc1)](''), $(this)['attr']('name', _0x346fe9), $(this)[_0x2720d6(
                0x140)](_0x2720d6(0xda), _0x346fe9);
        }), _0x414038[_0x4ad994(0x170)](_0x4ad994(0x1f9))[
            _0x4ad994(0x161)](function() {
            const _0x5d159d = _0x4ad994;
            if ($(this)[_0x5d159d(0xc5)](
                    '[data-clone-input]')[_0x5d159d(0x18f)] > 0x0) {
                let _0x36fe4f = 0x0;
                const
                    _0xcf73dd = $(this)[_0x5d159d(0xc5)](_0x5d159d(0xe2))[_0x5d159d(0x185)](_0x5d159d(
                        0x17f));
                $(_0x5d159d(0xd2) + _0xcf73dd + _0x5d159d(0x20a))[_0x5d159d(0x161)](
                    function() {
                        const _0x4192c6 = _0x5d159d,
                            _0x4c8bc4 = $(this)[_0x4192c6(0x140)](_0x4192c6(0x1c8));
                        if (_0x4c8bc4 &&
                            _0x4c8bc4[_0x4192c6(0x164)](_0x4192c6(0xe6))) {
                            const _0x16e775 = parseInt(
                                _0x4c8bc4[_0x4192c6(0xbd)]('-')[0x1]);
                            !isNaN(_0x16e775) && _0x16e775 >
                                _0x36fe4f && (_0x36fe4f = _0x16e775);
                        }
                    }), _0x36fe4f++, _0x346fe9 = this[
                    'name'] + '-' + _0x36fe4f;
            } else _0x346fe9 = this[_0x5d159d(0x1c8)] + '-' + (
                parseInt($(_0x5d159d(0x1a5) + _0x4eef6e + '\x22]')[_0x5d159d(0x1be)]()[_0x5d159d(
                    0x21c)]()) + 0x1);
            $(this)['val'](''), $(this)[_0x5d159d(0x140)](_0x5d159d(0x1c8), _0x346fe9), $(this)[
                _0x5d159d(0x140)]('data-name', _0x346fe9);
        }), _0x1ecc69[_0x4ad994(0x170)](
            '[data-input-field]')[_0x4ad994(0x161)](function() {
            const _0x5d7e20 = _0x4ad994;
            if ($(
                    this)[_0x5d7e20(0x185)](_0x5d7e20(0x128))) {
                let _0x1a56cd = 0x0;
                const _0x28ff7a =
                    $(this)['data']('input-field')[_0x5d7e20(0xbd)]('-')[0x0];
                $(_0x5d7e20(0x1e9) + _0x4eef6e + _0x5d7e20(0x204) + _0x28ff7a + '\x22]')['each'](
                    function() {
                        const _0x2313d4 = $(this)['attr']('data-input-field'),
                            _0x4542ce = parseInt(_0x2313d4['split']('-')[0x1]);
                        !isNaN(_0x4542ce) &&
                            _0x4542ce > _0x1a56cd && (_0x1a56cd = _0x4542ce);
                    }), _0x1a56cd++;
                const
                    _0x2298a5 = _0x28ff7a + '-' + _0x1a56cd;
                $(this)[_0x5d7e20(0x140)](_0x5d7e20(0x20e), _0x2298a5);
            }
        }), $(_0x4ad994(0xd8) +
            _0x4eef6e + '\x22]')[_0x4ad994(0xee)](_0x414038), $(_0x4ad994(0x178) + _0x4eef6e +
            '\x22]')[_0x4ad994(0xee)](_0x1ecc69), $(_0x4ad994(0x173) + _0x4eef6e + '\x22]')['each'](
            function() {
                const _0x2fdf54 = _0x4ad994;
                $(this)[_0x2fdf54(0x13d)]($(this)[_0x2fdf54(0x15f)](_0x2fdf54(0x1a5) + _0x4eef6e +
                    '\x22]')[_0x2fdf54(0x21c)]() + 0x1);
            }), $('[data-display-index=\x22' + _0x4eef6e +
            '\x22]')[_0x4ad994(0x161)](function() {
            const _0x343bbc = _0x4ad994;
            $(this)[_0x343bbc(0x13d)]($(this)['parents'](_0x343bbc(0x1e9) + _0x4eef6e + '\x22]')[
                'index']() + 0x1);
        });
    let _0x279959 = $('[data-clone-wrapper=\x22' + _0x4eef6e +
        '\x22]\x20[data-clone=\x22' + _0x4eef6e + '\x22]')[_0x4ad994(0x18f)];
    if (_0x279959 >=
        _0x2fd30f) { $(this)['hide'](); return; }
    $(this)[_0x4ad994(0xd7)](), validation();
}), $(
    '[data-add-new-input]')['on'](_0x5851c4(0xb5), function() {
    const _0x36782d = _0x5851c4,
        _0x355f08 = $(this)[_0x36782d(0x15f)](_0x36782d(0x1d8))[_0x36782d(0x21c)]();
    let _0xa89293 =
        $(this)[_0x36782d(0x185)](_0x36782d(0x159));
    var _0x16df01 = $(_0x36782d(0xd2) + _0xa89293 +
            '\x22]')['eq'](0x0)[_0x36782d(0xf1)](!![]),
        _0x332780 = $('[data-display-input=\x22' + _0xa89293 + '\x22]')['eq'](0x0)[_0x36782d(0xf1)](!![]);
    let _0xf7f316 = $(this)[_0x36782d(0x185)]('add-new-input-limit'),
        _0x254acf = 0x0;
    $('[data-clone-input=\x22' + _0xa89293 + '\x22]\x20input')[_0x36782d(0x161)](
            function() {
                const _0x460150 = _0x36782d,
                    _0x4f1039 = $(this)[_0x460150(0x140)](_0x460150(0x1c8));
                if (_0x4f1039) {
                    const
                        _0x322161 = parseInt(_0x4f1039[_0x460150(0xbd)]('-')[0x1]);
                    !isNaN(_0x322161) &&
                        _0x322161 > _0x254acf && (_0x254acf = _0x322161);
                }
            }), $(_0x36782d(0xd2) +
            _0xa89293 + '\x22]\x20select')[_0x36782d(0x161)](function() {
            const _0xf09606 =
                _0x36782d,
                _0x649deb = $(this)[_0xf09606(0x140)](_0xf09606(0x1c8));
            if (_0x649deb) {
                const
                    _0x22c931 = parseInt(_0x649deb[_0xf09606(0xbd)]('-')[0x1]);
                !isNaN(_0x22c931) &&
                    _0x22c931 > _0x254acf && (_0x254acf = _0x22c931);
            }
        }), $(_0x36782d(0xd2) +
            _0xa89293 + _0x36782d(0xb4))[_0x36782d(0x161)](function() {
            const _0x47b0ff = _0x36782d,
                _0x2efd3e = $(this)[_0x47b0ff(0x140)](_0x47b0ff(0x1c8));
            if (_0x2efd3e) {
                const
                    _0x5b4937 = parseInt(_0x2efd3e[_0x47b0ff(0xbd)]('-')[0x1]);
                !isNaN(_0x5b4937) &&
                    _0x5b4937 > _0x254acf && (_0x254acf = _0x5b4937);
            }
        }), _0x254acf++, _0x16df01['find']
        (_0x36782d(0x190))[_0x36782d(0x161)](function() {
            const _0xf30545 = _0x36782d,
                _0x33a39c = $(this)[_0xf30545(0x140)](_0xf30545(0x1c8));
            let _0x465427 = _0x33a39c +
                '-' + _0x254acf;
            $(this)[_0xf30545(0xc1)](''), $(this)['attr']('name', _0x465427), $(this)['attr'](
                _0xf30545(0xda), _0x465427);
        }), _0x16df01[_0x36782d(0x170)](_0x36782d(0x1f9))['each'](
            function() {
                const _0x3de9e5 = _0x36782d,
                    _0x1c65d3 = $(this)[_0x3de9e5(0x140)](_0x3de9e5(0x1c8));
                let _0x491950 = _0x1c65d3 +
                    '-' + _0x254acf;
                $(this)['val'](''), $(this)[_0x3de9e5(0x140)](_0x3de9e5(0x1c8), _0x491950), $(this)[
                    _0x3de9e5(0x140)]('data-name', _0x491950);
            }), _0x16df01[_0x36782d(0x170)](_0x36782d(
            0xeb))['each'](function() {
            const _0x46fb97 = _0x36782d,
                _0x5f49fb = $(this)[_0x46fb97(0x140)](_0x46fb97(0x1c8));
            let _0xe0b4c8 = _0x5f49fb +
                '-' + _0x254acf;
            $(this)['val'](''), $(this)[_0x46fb97(0x140)]('name', _0xe0b4c8), $(this)['attr'](
                _0x46fb97(0xda), _0xe0b4c8);
        }), _0x332780['find'](_0x36782d(0xe4))[_0x36782d(0x161)](
            function() {
                const _0x30e40c = _0x36782d;
                $(this)[_0x30e40c(0x140)](_0x30e40c(0x20e), _0x30e40c(0xe6) + _0x254acf);
            }), $(this)[
            _0x36782d(0x117)](_0x36782d(0x15d) + _0xa89293 + '\x22]')['append'](_0x16df01), $(
            _0x36782d(0x153))['eq'](_0x355f08)['find']('[data-display-input-wrapper=\x22' +
            _0xa89293 + '\x22]')['append'](_0x332780), $(_0x36782d(0x1ff) + _0xa89293 + '\x22]')[
            _0x36782d(0x161)](function() {
            const _0x399a3b = _0x36782d;
            $(this)[_0x399a3b(0x13d)]($(this)['parents'](_0x399a3b(0xd2) + _0xa89293 + '\x22]')[
                'index']() + 0x1);
        }), $('[data-display-input-index=\x22' + _0xa89293 + '\x22]')['each']
        (function() {
            const _0x36ce4c = _0x36782d;
            $(this)[_0x36ce4c(0x13d)]($(this)['parents']('[data-display-input=\x22' + _0xa89293 +
                '\x22]')[_0x36ce4c(0x21c)]() + 0x1);
        });
    let _0x1101d0 = $(_0x36782d(0x15d) +
        _0xa89293 + _0x36782d(0x1ef) + _0xa89293 + '\x22]')[_0x36782d(0x18f)];
    if (_0x1101d0 >=
        _0xf7f316) { $(this)[_0x36782d(0x1c6)](); return; }
    $(this)['show'](), cloneRemoveInput(),
        validation();
}), $(_0x5851c4(0x1fe))['on'](_0x5851c4(0xb5), function() {
    const _0x5d122e =
        _0x5851c4,
        _0x26e71d = $(this)[_0x5d122e(0x185)](_0x5d122e(0x220));
    $(_0x5d122e(0xdd) + _0x26e71d + '\x22]')['val'](''), validation();
});

function andLogic() {
    const _0x12a020 = _0x5851c4;
    conditionalResult && (steps['eq'](x)[_0x12a020(0x170)](_0x12a020(0x121))[_0x12a020(0x1c6)](),
        steps['eq'](x)[_0x12a020(0x170)](_0x12a020(0x121))[_0x12a020(0x161)](function() {
            const
                _0xfac7a8 = _0x12a020;

            function _0x456f50(_0x3b531a) {
                const _0x516d79 = _0x1148,
                    _0x172a6e = _0x3b531a[_0x516d79(0xbd)]('&'),
                    _0x43bddd = [];
                return _0x172a6e[_0x516d79(0x1e5)](_0x4f85ef => {
                        const _0x10933a =
                            _0x516d79,
                            [_0x56a394, _0x559317] = _0x4f85ef[_0x10933a(0xbd)]('=');
                        _0x43bddd[_0x10933a(0xac)]({ 'field': _0x56a394, 'value': _0x559317 });
                    }),
                    _0x43bddd;
            }
            const _0xe8c74c = $(this)['attr'](_0xfac7a8(0x1c3)),
                _0x1b35aa = _0x456f50(_0xe8c74c);

            function _0x167e76(_0x12caf5, _0x53777d) {
                const _0x2ae736 = _0xfac7a8;
                return _0x53777d[
                    _0x2ae736(0x16f)]((_0x4f7c3f, _0x50fc32) => {
                    const _0x5446f7 = _0x2ae736;
                    if (
                        _0x12caf5[0x0] && _0x4f7c3f[_0x5446f7(0x1f4)] === _0x12caf5[0x0]['field'])
                        return _0x12caf5[_0x5446f7(0xb8)]((_0x4ceb14, _0x1d8998) => _0x53777d[
                            _0x50fc32 + _0x1d8998] && _0x53777d[_0x50fc32 + _0x1d8998][_0x5446f7(
                            0x1f4)] === _0x4ceb14['field'] && _0x53777d[_0x50fc32 + _0x1d8998][
                            _0x5446f7(0x16a)
                        ] === _0x4ceb14['value']);
                    return ![];
                });
            }
            const _0x568ab3 = _0x167e76(_0x1b35aa,
                all_data);
            _0x568ab3 ? $(this)['show']() : $(this)[_0xfac7a8(0x1c6)]();
        }));
}
$(_0x5851c4(0x109))[
    _0x5851c4(0x214)](_0x5851c4(0x1c6)), $('[data-progressive-input]')['on']('input',
    function() {
        const _0x31cf77 = _0x5851c4,
            _0x401f54 = $(this)[_0x31cf77(0x185)](_0x31cf77(0x1e1)),
            _0x5b5366 = $(this)[_0x31cf77(0xc1)](),
            _0x1d5c8e = $('[data-progressive-target=\x22' + _0x401f54 + '\x22]')[_0x31cf77(0x185)](
                _0x31cf77(0x227));
        let _0x3a8daa = $(_0x31cf77(0xcb) + _0x401f54 + _0x31cf77(0x192) +
                _0x5b5366 + '\x22]'),
            _0x723da6 = $(_0x31cf77(0xcb) + _0x401f54 +
                '\x22][data-progressive-input-value=\x22*\x22]');
        $(_0x31cf77(0xcb) + _0x401f54 + '\x22]')[_0x31cf77(0x214)](_0x31cf77(0x16e)), $(_0x31cf77(
            0xcb) + _0x401f54 + '\x22]')[_0x31cf77(0x1f1)](_0x31cf77(0x101));
        _0x5b5366 !== '' && (_0x1d5c8e === '*' && _0x5b5366 !== '' ? (_0x723da6[_0x31cf77(0x1f1)](
            _0x31cf77(0x16e)), _0x723da6[_0x31cf77(0x214)]('f-show')) : (_0x3a8daa[_0x31cf77(0x1f1)]
            (_0x31cf77(0x16e)), _0x3a8daa[_0x31cf77(0x214)]('f-show')));

        function _0x20c792(_0x523294) {
            const _0x58b03d = _0x31cf77;
            _0x523294 && ($('[data-progressive-input=\x22' + _0x523294 + '\x22]')[_0x58b03d(0xc1)]() !==
                '' && $(_0x58b03d(0x1fc) + _0x523294 + '\x22]')['trigger'](_0x58b03d(0x190)));
        }
        let
            _0x45771d = $(_0x31cf77(0xcb) + _0x401f54 + '\x22]')[_0x31cf77(0x170)](
                '[data-progressive-input]')[_0x31cf77(0x185)](_0x31cf77(0x1e1));
        _0x20c792(_0x45771d), $(_0x31cf77(0xc6))['each'](function() {
            const _0x18edd2 = _0x31cf77,
                _0x441ca6 = $(this)['data'](_0x18edd2(0x1e1));
            $(_0x18edd2(0xcb) + _0x441ca6 + '\x22]')[_0x18edd2(0x1f1)](_0x18edd2(0x101)), $(
                _0x18edd2(0xcb) + _0x441ca6 + '\x22]')[_0x18edd2(0x214)](_0x18edd2(0x16e));
        });
    });

function addClickClass() {
    const _0x13b57e = _0x5851c4,
        _0x5aca04 = $(this)[_0x13b57e(0x185)](_0x13b57e(0x1f8)),
        _0x39b94a = $(this)[_0x13b57e(0x140)]('name');
    $(_0x13b57e(0xdd) + _0x39b94a + '\x22]')['parent']()['removeClass'](_0x5aca04), $(this)['is'](
        ':checked') && $(this)[_0x13b57e(0x207)]()[_0x13b57e(0x214)](_0x5aca04);
}
$(
    '[data-click-addclass]')['on'](_0x5851c4(0x1cf), addClickClass);
const GET_COUNTER_URL = _0x5851c4(0x154),
    UPDATE_COUNTER_URL = _0x5851c4(0x154),
    GET_LIVE_COUNTER_URL = 'https://x8ki-letl-twmt.n7.xano.io/api:EbCCRNhB/counter/2',
    UPDATE_LIVE_COUNTER_URL = _0x5851c4(0x156);

function getCounter() {
    const _0x3980df = _0x5851c4;
    $[_0x3980df(0xf7)](GET_COUNTER_URL, function(_0x290e76) {
        const _0x5c4466 = _0x3980df;
        if (
            _0x290e76) {
            const _0x18cf6c = _0x290e76[_0x5c4466(0x20d)];
            updateCounter(_0x18cf6c + 0x1);
        } else console[_0x5c4466(0x179)](_0x5c4466(0xc8));
    });
}

function updateCounter(_0x4ea42b) {
    const _0x8d10cd = _0x5851c4;
    var _0x5a8b4c = new Date(),
        _0x4a734a = _0x5a8b4c['getMonth'](),
        _0x41ed3e = btoa(_0x8d10cd(0x131)),
        _0x2029f6 = btoa(_0x4a734a['toString']()),
        _0x29a8a5 = getCookie(_0x41ed3e);
    if (!_0x29a8a5 || _0x29a8a5 !== _0x2029f6) $['ajax']
        ({
            'url': UPDATE_COUNTER_URL,
            'type': _0x8d10cd(0x11a),
            'contentType': _0x8d10cd(
                0x162),
            'data': JSON[_0x8d10cd(0x231)]({ 'Total': _0x4ea42b }),
            'success': function(
                _0x4f51cd) {
                const _0x1f1d59 = _0x8d10cd;
                document[_0x1f1d59(0x132)] = _0x41ed3e + '=' + _0x2029f6;
            },
            'error': function(_0x4c2b68,
                _0x47d137, _0x105125) {}
        });
    else {}
}

function getCookie(_0x261057) {
    const _0x54c94f = _0x5851c4;
    var _0x35031a = null;
    if (document[
            _0x54c94f(0x132)] && document['cookie'] !== '') {
        var _0x4a0c39 = document['cookie']['split'](
            ';');
        for (var _0x597207 = 0x0; _0x597207 < _0x4a0c39[_0x54c94f(0x18f)]; _0x597207++) {
            var
                _0x1b1c31 = _0x4a0c39[_0x597207][_0x54c94f(0x232)]();
            if (_0x1b1c31['substring'](0x0,
                    _0x261057['length'] + 0x1) === _0x261057 + '=') {
                _0x35031a = decodeURIComponent(
                    _0x1b1c31[_0x54c94f(0x135)](_0x261057['length'] + 0x1)
                );
                break;
            }
        }
    }
    return _0x35031a;
}
getCounter(), scrollTop(), cloneRemove(),
    cloneRemoveInput();
const formlyUrlParams = new URLSearchParams(window[_0x5851c4(0x143)]['search']),
    formlySupportParam = formlyUrlParams['get']('formly-support'),
    showButton = formlySupportParam === _0x5851c4(0x1fb),
    passIcon =
    '<span\x20class=\x22f-icon-embed-xxsmall\x20w-embed\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010s10-4.48\x2010-10S17.52\x202\x2012\x202m-2\x2015l-5-5l1.41-1.41L10\x2014.17l7.59-7.59L19\x208z\x22></path></svg></span>',
    failIcon = _0x5851c4(0xc7);
let isScriptLoaded = !![],
    scriptLocation = 'head',
    isMultistepAttributePresent = !![],
    isMultistepOnFormElement = !![],
    areButtonsPresent = !![],
    isNextBtnOnSubmit = ![],
    isSubmitBtnOnSubmit = !![],
    isBackBtnOnSubmit = ![],
    formType = logicExtra ? _0x5851c4(0x134) : _0x5851c4(0x198),
    resultStatus = _0x5851c4(0x152),
    scriptSrcAdded = '';

function isElementPresent(_0x148adb, _0x589d73) {
    const _0x3b71ef = _0x5851c4;
    return document[
            _0x3b71ef(0x1f2)]('[' + _0x589d73 + '=\x22' + _0x148adb + '\x22]') !==
        null;
}
isMultistepAttributePresent = isElementPresent(_0x5851c4(0x20f), _0x5851c4(0x1af));
const multistepForm = document[_0x5851c4(0x1f2)](_0x5851c4(0xe8)),
    formStepLength = multistepForm[_0x5851c4(0x22d)](_0x5851c4(0x11c))[_0x5851c4(0x18f)];
isMultistepOnFormElement = multistepForm !== null;
const multistepContainer = document['querySelector'](_0x5851c4(0x12f)),
    nextBtnExist = multistepContainer['querySelector'](_0x5851c4(0xfd)),
    backBtnExist = multistepContainer[_0x5851c4(0x1f2)](_0x5851c4(0xd1)),
    submitBtnExist = multistepContainer[_0x5851c4(0x1f2)](_0x5851c4(0xbb));
areButtonsPresent = nextBtnExist !== null && backBtnExist !== null && submitBtnExist !== null,
    isNextBtnOnSubmit = nextBtnExist && nextBtnExist[_0x5851c4(0x1b8)][_0x5851c4(0xe1)]() === 'input',
    isSubmitBtnOnSubmit = submitBtnExist && submitBtnExist['tagName'][_0x5851c4(0xe1)]() ===
    _0x5851c4(0x190) && submitBtnExist[_0x5851c4(0xcf)][_0x5851c4(0xe1)]() === 'submit',
    isBackBtnOnSubmit = backBtnExist && backBtnExist['tagName'][_0x5851c4(0xe1)]() === _0x5851c4(
        0x190);
const checkPowerup = _0x902e51 => document['querySelector'](_0x902e51) !== null,
    progressBarAttr = checkPowerup(_0x5851c4(0x14a)),
    progressIndicatorAttr = checkPowerup(_0x5851c4(0x130)),
    customProgressAttr = checkPowerup(_0x5851c4(0x130)),
    cardDivAttr = checkPowerup(_0x5851c4(0x1b2)),
    currentStepAttr = checkPowerup('[data-text=\x22current-step\x22]'),
    totalStepAttr = checkPowerup('[data-text=\x22total-steps\x22]'),
    enterAttr = checkPowerup(_0x5851c4(0x213)),
    submitAttr = checkPowerup(_0x5851c4(0xb9)),
    radioSkipAttr = checkPowerup(_0x5851c4(0x147)),
    customCheckboxAttr = checkPowerup('[data-checkbox]'),
    recapatchaAttr = checkPowerup(_0x5851c4(0x111));
(!isScriptLoaded || scriptLocation !== _0x5851c4(0x193) || !isMultistepAttributePresent || !
    isMultistepOnFormElement || !areButtonsPresent || isNextBtnOnSubmit || !isSubmitBtnOnSubmit ||
    isBackBtnOnSubmit) && (resultStatus = _0x5851c4(0x21f));

function _0xe03e() {
    const _0x1ddf03 = ['150620eqERzD',
        '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Submit\x20button\x20attribute\x20IS\x20on\x20Form\x20Submit\x20Button\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        'setItem', '[data-form=\x22next-btn\x22][type=\x22submit\x22]', 'last', '35%', 'innerHTML',
        'getElementById', 'padding', 'data-show-if', 'ms-field', 'focus', 'hide', 'data-go-to',
        'name', ':input', 'data-skip-to', '0px', 'select[required]', 'select[required]:visible',
        'html,\x20body', 'change', '[data-selection=\x22other\x22]', 'selection',
        '[data-text=\x22total-steps\x22]', 'key', '[data-checkbox]', 'reset', 'redirect',
        'input:checkbox', '[data-clone]', 'checkbox', 'active-answer-card',
        ':input[type=\x22file\x22][required]', 'keydown', 'radio-skip', 'step',
        '[data-form=\x22submit\x22]:visible', ':checked', 'progressive-input', 'ajaxComplete', 'test',
        '\x22]\x20input', 'forEach', ':input[type=\x22url\x22]', 'readystatechange',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20', '[data-display=\x22', 'logic-extra', 'reinit',
        'option[value=\x22$(this).val()\x22]', '[data-weighted-selection-range]',
        'input:radio[required]', '\x22]\x20[data-clone-input=\x22',
        '[data-text=\x22error-message\x22]', 'removeClass', 'querySelector', '3256911iBXMZL', 'field',
        'body', 'selected', 'radio-delay', 'click-addclass', 'select', '[data-radio-delay]', 'true',
        '[data-progressive-input=\x22', '[data-cms-select=input]', '[data-remove-upload]',
        '[data-input-index=\x22', 'prop', '[data-form=\x22submit-btn\x22]:visible', 'slice',
        'input[type=\x22radio\x22][name=\x22', '\x22]\x20[data-input-field^=\x22',
        '[data-selected]:checked', 'createElement', 'parent', 'textarea:focus', 'textarea[required]',
        '\x22]\x20select', 'textarea[autofocus]', 'getItem', 'Total', 'data-input-field', 'multistep',
        '[data-selection]', ':input[type=\x22file\x22]', 'disabled', '[data-enter=\x22true\x22]',
        'addClass', '<strong\x20class=\x22f-text-white\x22>Radio\x20Inputs\x20',
        'form[data-form=\x22multistep\x22]\x20:input', '[data-add-new-input=\x22', 'keypress',
        '</strong>', '<br>Data\x20Answer\x20=\x20', 'reset-delay', 'index', 'remove',
        '[data-selection-weight]', 'FAIL', 'remove-upload',
        'No\x20Formly\x20script\x20added\x20to\x20the\x20page!', 'BODY', '[data-radio-skip]:visible',
        'submit-show', 'ctrlKey', ':input[type=\x22text\x22][required]', 'progressive-input-value',
        'animate', 'offset', '[data-text=\x22total-weight\x22]', 'clickable', 'div.g-recaptcha',
        'querySelectorAll', 'ix2', '[data-text=\x22current-step\x22]',
        '<strong\x20class=\x22f-text-white\x22>Checkboxes\x20', 'stringify', 'trim', 'filledInput',
        'stopPropagation', 'push', 'auto', 'quiz',
        '<strong\x20class=\x22f-text-white\x22>Custom\x20Progress\x20Indicators\x20',
        '<div\x20data-range=\x22selection\x22\x20style=\x22display:none\x20!important\x22>',
        '[data-form=\x22remove-clone\x22]', '<strong\x20class=\x22f-text-white\x22>ReCAPTCHA\x20',
        '[type=\x22submit\x22]', '\x22]\x20textarea', 'click', 'custom-error-message',
        '13993859VbJKbQ', 'every', '[data-submit=\x22true\x22]', 'formlyLastStepAnswer',
        '[data-form=\x22submit-btn\x22]', 'Please\x20wait...', 'split',
        ':input[type=\x22checkbox\x22]:checked', 'input[type=\x22submit\x22]', 'inputName', 'val',
        'checked', 'children', 'option[value=\x22', 'closest',
        '[data-progressive-input]:not(:visible)',
        '<span\x20class=\x22f-icon-embed-xxsmall-2\x20w-embed\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--carbon\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2032\x2032\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M16\x202C8.2\x202\x202\x208.2\x202\x2016s6.2\x2014\x2014\x2014s14-6.2\x2014-14S23.8\x202\x2016\x202m5.4\x2021L16\x2017.6L10.6\x2023L9\x2021.4l5.4-5.4L9\x2010.6L10.6\x209l5.4\x205.4L21.4\x209l1.6\x201.6l-5.4\x205.4l5.4\x205.4z\x22></path></svg></span>',
        'Failed\x20to\x20get\x20counter\x20value', 'init', 'clickable-all',
        '[data-progressive-target=\x22', ':input[type=\x22url\x22][required]', 'status',
        '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Next\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button\x20',
        'type', 'data-radio-delay', '[data-form=\x22back-btn\x22]', '[data-clone-input=\x22',
        '[data-go-to]', ':input[type=\x22checkbox\x22][required]:checked', 'enter',
        'textarea[name=\x22', 'show', '[data-clone-wrapper=\x22', 'findIndex', 'data-name',
        '[data-skip-to]', '.w-form-done', 'input[name=\x22',
        '[data-form=\x22custom-progress-indicator\x22]', '[data-form-ms=\x22submit-btn\x22]',
        'preventDefault', 'toLowerCase', '[data-clone-input]', 'span', '[data-input-field]',
        'conditional-result', 'relationship-', '11tgcxti', 'form[data-form=\x22multistep\x22]',
        '[data-select-multiple]', '293541ldMkcr', 'textarea', 'wait', ':input[type=\x22radio\x22]',
        'append', 'formlyLastStep', 'input[type=\x22checkbox\x22]:visible', 'clone',
        'input:radio[name=\x22', '[data-range]:contains(', 'backTo', 'card', 'radio', 'get',
        '[data-btn=\x22edit\x22]',
        '<strong\x20class=\x22f-text-white\x22>Automatic\x20Progress\x20Indicators\x20',
        '[data-last-step]', ':input[type=\x22email\x22][required]', 'trigger',
        '[data-form=\x22next-btn\x22]',
        '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Powerups</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        'input[type=\x22radio\x22]', '1938198btgxCj', 'f-show',
        '<strong\x20class=\x22f-text-white\x22>Press\x20\x22Enter\x22\x20To\x20Progress\x20',
        '[data-selection=\x22', 'answer', 'file', 'removeItem',
        '\x22]:not([data-prefill=\x22false\x22])', 'block-domain', '[data-progressive-target]',
        'select:not([data-prefill=\x22false\x22])', 'not', 'css', 'skip-to', 'none', 'display',
        ':input[type=\x22time\x22]', '[data-callback=\x22recaptcha\x22]', '.w-checkbox-input',
        'Inside\x20<head>\x20tag', '[data-answer=\x22', ':input[type=\x22email\x22]', 'top',
        'siblings', '3280FUjWog', '\x22]:checked', 'PATCH', ':input[type=\x22date\x22]',
        '[data-form=\x22step\x22]',
        '</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Number\x20of\x20steps:\x20',
        '<br>Data\x20Go\x20To\x20=\x20', 'getElementsByTagName', '[data-count-card]',
        '[data-show-if]', '[data-form=\x22next-btn\x22][data-submit-show]',
        '<strong\x20class=\x22f-text-white\x22>Intro\x20Cards\x20Or\x20Steps\x20Without\x20Inputs\x20',
        'new-tab', 'fadeIn', '[data-clickable-all]', 'replace', 'input-field', 'min-character',
        ':focus', 'input[type=\x22radio\x22]:checked', '[type=\x22radio\x22]',
        '[data-redirect-delay]', 'join', '[data-form=\x22multistep\x22]',
        '[data-form=\x22progress-indicator\x22]', 'counter', 'cookie', 'submit',
        'FormlyLogic\x20enabled', 'substring', 'metaKey', 'query-param', 'Webflow', 'appendChild',
        '[data-input-field=\x22', 'skipTo', 'add-new-limit', 'text', ':input[type=\x22password\x22]',
        'require', 'attr', ':input[required]', '[data-add-new]', 'location',
        ':input[type=\x22tel\x22]', '.w-radio-input', 'log', '[data-radio-skip=\x22true\x22]',
        '[data-success-card]', ':input[type=\x22password\x22][required]',
        '[data-form=\x22progress\x22]', 'filter',
        '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Back\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button',
        '[data-conditional-result]', 'phone-validation', 'div', '10ASFfrB', 'redirect-delay', 'PASS',
        '[data-display]', 'https://x8ki-letl-twmt.n7.xano.io/api:EbCCRNhB/counter/1', 'script',
        'https://x8ki-letl-twmt.n7.xano.io/api:EbCCRNhB/counter/2', 'slow',
        '[data-btn=\x22check\x22]', 'add-new-input',
        '\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a',
        '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>5.\x20Submit\x20Buttons:\x20data-form=next-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Submit\x20button\x20present?\x20',
        'scroll-top-offset', '[data-clone-input-wrapper=\x22',
        '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>4.\x20Back\x20Buttons:\x20data-form=next-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Back\x20button\x20present?\x20',
        'parents', 'scroll-top', 'each', 'application/json', '16209NCNgjc', 'startsWith', 'formly',
        'success', '[data-answer]',
        '<strong\x20class=\x22f-text-white\x22>Current\x20Step\x20Text\x20', 'select-multiple',
        'value', '[data-reset-delay]', '[data-answer][data-radio-skip]:visible',
        ':input[type=\x22number\x22][required]', 'f-hide', 'some', 'find', 'add-new', '<option>',
        '[data-index=\x22', ':input[type=\x22tel\x22][required]', 'weighted-selection-range',
        'current', ':first', '[data-display-wrapper=\x22', 'error', '[data-display-input]',
        '</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Attributes</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>1.\x20Form:\x20data-form=multistep\x20',
        '35lnhjeM', 'Before\x20&lt;/body&gt;\x20tag', 'selections\x20email', 'clone-input',
        '124598wUBpCI', '[data-clickable]', ':input[type=\x22checkbox\x22][required]:not(:checked)',
        ':input[type=\x22checkbox\x22][required]', 'required', 'data', '[data-cms-select=text]',
        'parse', 'memory', 'phone-autoformat', '.w-form-formradioinput', 'videsigns', 'edit-step',
        'go-to', '[data-add-new=\x22', 'length', 'input', 'redirect-form-hehexd',
        '\x22][data-progressive-input-value=\x22', 'head', 'w--redirected-checked',
        '.active-answer-card',
        '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>3.\x20Next\x20Buttons:\x20data-form=back-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Next\x20button\x20present?\x20',
        '[data-btn=\x22reset\x22]', 'Basic\x20(No\x20Formly\x20Logic)', 'includes',
        '</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Multistep\x20form\x20attribute\x20is\x20on\x20Form\x20element\x20and\x20not\x20on\x20Form\x20Block\x20element\x0a\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>2.\x20Form\x20Steps:\x20data-form=step\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        'data-radio-skip', '[data-clone-wrapper]', ':input[type=\x22checkbox\x22]',
        '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>Script\x20Location:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>',
        'AND', 'weighted-selection', ':input[type=\x22date\x22][required]',
        '[data-weighted-selection]', 'f-mySidenav', '[data-form=\x22remove-input-clone\x22]',
        '[data-clone=\x22', 'script[src=\x22', 'input[autofocus]', '[data-enter]',
        '</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Formly\x20Script\x20Info</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>Script\x20URL:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>',
        'style', '\x22][value=\x22', 'parentNode', 'count-card',
        '<strong\x20class=\x22f-text-white\x22>Press\x20\x22⌘\x20+\x20Enter\x20\x22\x20To\x20Submit\x20',
        'data-form', 'https://webflow.com/api/v1/form/', ':input[type=\x22time\x22][required]',
        '[data-card=\x22true\x22]', 'dispatchEvent', 'select[name=\x22',
        ':input[type=\x22number\x22]', 'searchParams', '0.4', 'tagName', 'href'
    ];
    _0xe03e = function() { return _0x1ddf03; };
    return _0xe03e();
}

function isScriptUrlMatch(_0xb07c95, _0x4fc229) {
    const _0x261073 = _0x5851c4;
    for (var _0xff53bc =
            0x0; _0xff53bc < _0x4fc229['length']; _0xff53bc++) {
        if (_0xb07c95[_0x261073(0x199)](
                _0x4fc229[_0xff53bc])) return !![];
    }
    return ![];
}
var keywordsToCheck = [_0x5851c4(0x18b), _0x5851c4(0x165)],
    scripts = document[_0x5851c4(0x11f)](_0x5851c4(0x155)),
    matchedScripts = [];
for (var i = 0x0; i < scripts[_0x5851c4(0x18f)]; i++) {
    var scriptSrcs = scripts[i]['src'];
    isScriptUrlMatch(scriptSrcs, keywordsToCheck) && matchedScripts[_0x5851c4(0xac)](scriptSrcs);
}
if (matchedScripts[_0x5851c4(0x18f)] > 0x0) {
    scriptSrcAdded = matchedScripts;
    const script =
        document[_0x5851c4(0x1f2)](_0x5851c4(0x1a6) + scriptSrcAdded + '\x22]');
    script && (scriptLocation = script[_0x5851c4(0x1ac)][_0x5851c4(0x1b8)] === _0x5851c4(0x222) ?
        _0x5851c4(0x17d) : _0x5851c4(0x113));
} else scriptSrcAdded = _0x5851c4(0x221) + failIcon;
const newElement = document['createElement'](_0x5851c4(0x14f)),
    newStyle = document[_0x5851c4(0x206)](_0x5851c4(0x1aa));
newStyle[_0x5851c4(0x1c0)] =
    '\x0a\x20\x20.f-icon-embed-xxsmall-2\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#ff3232\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x20\x20.f-icon-embed-xxsmall\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#57ff4b\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20{\x0a\x20\x20\x20\x20height:\x20100%\x20!important;\x0a\x20\x20\x20\x20width:\x200;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20z-index:\x20999999999999\x20!important;\x0a\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20background-color:\x20#081019\x20!important;\x0a\x20\x20\x20\x20overflow-x:\x20hidden\x20!important;\x0a\x20\x20\x20\x20padding-top:\x2060px\x20!important;\x0a\x20\x20\x20\x20transition:\x200.5s\x20!important;\x0a\x20\x20\x20\x20font-size:\x2015px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73)\x20!important;\x0a\x20\x20\x20\x20font-family:system-ui\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-section-title-text,\x20.f-support-text,\x20.f-openbtn{\x0a\x20\x20\x20\x20font-size:\x2015px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73);\x0a\x20\x20\x20\x20font-family:system-ui\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20p,\x20.f-sidenav\x20strong\x20{\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20space-between\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x204px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73);\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20.f-closebtn\x20{\x0a\x20\x20\x20\x20position:\x20absolute\x20!important;\x0a\x20\x20\x20\x20top:\x2025px\x20!important;\x0a\x20\x20\x20\x20right:\x2025px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2036px\x20!important;\x0a\x20\x20\x20\x20margin-left:\x2050px\x20!important;\x0a\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20color:\x20#e7e7e7\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-core-setup\x20{\x0a\x20\x20\x20\x20padding:\x2012px\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x2011px\x20!important;\x0a\x20\x20\x20\x20border-radius:\x206px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20#f-main\x20{\x0a\x20\x20\x20\x20transition:\x20margin-left\x20.5s\x20!important;\x0a\x20\x20\x20\x20padding:\x2020px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-main-content\x20{\x0a\x20\x20\x20\x20transition:\x20margin-left\x20.5s\x20!important;\x0a\x20\x20\x20\x20padding:\x2020px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-form-step\x20{\x0a\x20\x20\x20\x20padding-left:\x2010px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-openbtn\x20{\x0a\x20\x20\x20\x20white-space:\x20nowrap\x20!important;\x0a\x20\x20\x20\x20cursor:\x20pointer\x20!important;\x0a\x20\x20\x20\x20box-shadow:\x200\x200\x200\x201px\x20rgba(0,\x200,\x200,\x20.1),\x200\x201px\x203px\x20rgba(0,\x200,\x200,\x20.1)\x20!important;\x0a\x20\x20\x20\x20visibility:\x20visible\x20!important;\x0a\x20\x20\x20\x20z-index:\x2099\x20!important;\x0a\x20\x20\x20\x20color:\x20#e7e7e7\x20!important;\x0a\x20\x20\x20\x20opacity:\x201\x20!important;\x0a\x20\x20\x20\x20width:\x20auto\x20!important;\x0a\x20\x20\x20\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20background-color:\x20#1e1e1e\x20!important;\x0a\x20\x20\x20\x20border-radius:\x203px\x20!important;\x0a\x20\x20\x20\x20margin:\x200\x20!important;\x0a\x20\x20\x20\x20padding:\x206px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2013px\x20!important;\x0a\x20\x20\x20\x20line-height:\x2014px\x20!important;\x0a\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20top:\x20auto\x20!important;\x0a\x20\x20\x20\x20bottom:\x2012px\x20!important;\x0a\x20\x20\x20\x20left:\x2012px\x20!important;\x0a\x20\x20\x20\x20right:\x20auto\x20!important;\x0a\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20transform:\x20none\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-text-header{\x0a\x20\x20\x20\x20color:\x20#fff\x20!important;\x0a\x20\x20\x20\x20font-size:\x201.8rem\x20!important;\x0a\x20\x20\x20\x20font-weight:\x20600\x20!important;\x0a\x20\x20\x20\x20line-height:\x201.2\x20!important;\x0a\x20\x20\x20\x20margin-bottom:4px\x0a\x20\x20}\x0a\x0a\x20\x20@media\x20screen\x20and\x20(max-height:\x20450px)\x20{\x0a\x20\x20\x20\x20.sidenav\x20{\x20padding-top:\x2015px\x20!important;\x20}\x0a\x20\x20\x20\x20.sidenav\x20a\x20{\x20font-size:\x2018px\x20!important;\x20}\x0a\x20\x20}\x0a\x0a\x20\x20.f-section-title-text{\x0a\x20\x20\x20\x20color:\x20#fff\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x2010px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2018px\x20!important;\x0a\x20\x20\x20\x20font-weight:\x20700\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-div-support-section{\x0a\x20\x20\x20\x20padding-top:1rem\x20!important;\x0a\x20\x20\x20\x20padding-bottom:1rem\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-text-white{\x0a\x20\x20\x20\x20color:\x20white\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-spacer{\x0a\x20\x20\x20\x20padding-top:8px\x20!important;\x0a\x20\x20}\x0a',
    document['head'][_0x5851c4(0x139)](newStyle);
showButton && document[_0x5851c4(0x1f5)][_0x5851c4(0x139)](newElement);
newElement[_0x5851c4(0x1c0)] =
    '\x0a\x20\x20<button\x20class=\x22f-openbtn\x22\x20onclick=\x22openNav()\x22>\x0a\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x2220px\x22\x20height=\x2220px\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M11\x2021h-1l1-7H7.5c-.88\x200-.33-.75-.31-.78C8.48\x2010.94\x2010.42\x207.54\x2013.01\x203h1l-1\x207h3.51c.4\x200\x20.62.19.4.66C12.97\x2017.55\x2011\x2021\x2011\x2021\x22></path>\x0a\x20\x20\x20\x20</svg>\x20Check\x20Form\x0a\x20\x20</button>\x0a\x20\x20<div\x20id=\x22f-mySidenav\x22\x20class=\x22f-sidenav\x22>\x0a\x20\x20\x20\x20<a\x20href=\x22javascript:void(0)\x22\x20class=\x22f-closebtn\x22\x20onclick=\x22closeNav()\x22>&times;</a>\x0a\x20\x20\x20\x20<div\x20class=\x22f-fc-main-content\x22>\x0a\x20\x20\x20\x20\x20\x20<h4\x20class=\x22f-text-header\x22>Formly\x20Support</h4>\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20If\x20you\x20have\x20spotted\x20a\x20bug\x20or\x20require\x20extra\x20support,\x20please\x20reach\x20out\x20to\x20us\x20via\x20Slack\x20or\x20email\x20us\x20at\x20developer@videsigns.uk.\x0a\x20\x20\x20\x20\x20\x20</p>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Form\x20Type</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>' +
    formType + _0x5851c4(0x1a9) + scriptSrcAdded + _0x5851c4(0x19e) + scriptLocation + _0x5851c4(
        0x17b) + (isMultistepOnFormElement ? passIcon : failIcon) + _0x5851c4(0x19a) + (formStepLength >
        0x0 ? passIcon : failIcon) + _0x5851c4(0x11d) + formStepLength + _0x5851c4(0x196) + (
        nextBtnExist ? passIcon : failIcon) + _0x5851c4(0xce) + (isNextBtnOnSubmit ? failIcon :
        passIcon) + _0x5851c4(0x15e) + (backBtnExist ? passIcon : failIcon) + _0x5851c4(0x14c) + (
        isBackBtnOnSubmit ? failIcon : passIcon) + _0x5851c4(0x15b) + (backBtnExist ? passIcon :
        failIcon) + _0x5851c4(0x1bb) + (isSubmitBtnOnSubmit ? passIcon : failIcon) + _0x5851c4(0xfe) + (
        progressBarAttr && progressIndicatorAttr ? _0x5851c4(0xf9) + passIcon + '</strong>' : '') +
    _0x5851c4(0x1e8) + (customProgressAttr ? _0x5851c4(0xaf) + passIcon + _0x5851c4(0x219) : '') +
    _0x5851c4(0x1e8) + (cardDivAttr ? _0x5851c4(0x123) + passIcon + _0x5851c4(0x219) : '') +
    _0x5851c4(0x1e8) + (currentStepAttr ? _0x5851c4(0x168) + passIcon + _0x5851c4(0x219) : '') +
    _0x5851c4(0x1e8) + (totalStepAttr ?
        '<strong\x20class=\x22f-text-white\x22>Total\x20Step\x20Text\x20' + passIcon + _0x5851c4(
            0x219) : '') + _0x5851c4(0x1e8) + (enterAttr ? _0x5851c4(0x102) + passIcon + _0x5851c4(
            0x219) :
        '') + _0x5851c4(0x1e8) + (submitAttr ? _0x5851c4(0x1ae) + passIcon + '</strong>' : '') +
    '\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + (radioSkipAttr ? _0x5851c4(0x215) + passIcon + _0x5851c4(
        0x219) : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + (customCheckboxAttr ? _0x5851c4(0x230) +
        passIcon + _0x5851c4(0x219) : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + (recapatchaAttr ?
        _0x5851c4(0xb2) + passIcon + '</strong>' : '') + _0x5851c4(0x15a);

function openNav() {
    const _0x152e2a = _0x5851c4;
    document[_0x152e2a(0x1c1)](_0x152e2a(0x1a3))[_0x152e2a(0x1aa)]['width'] = _0x152e2a(0x1bf),
        document['getElementById']('f-mySidenav')[_0x152e2a(0x1aa)][_0x152e2a(0x1c2)] = '12px';
}

function closeNav() {
    const _0x14ad70 = _0x5851c4;
    document[_0x14ad70(0x1c1)]('f-mySidenav')['style']['width'] = '0', document['getElementById'](
        _0x14ad70(0x1a3))[_0x14ad70(0x1aa)][_0x14ad70(0x1c2)] = _0x14ad70(0x1cb);
}