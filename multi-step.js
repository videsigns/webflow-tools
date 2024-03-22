// 22/3/24
// Bug fixes
// 1. Fixed issue with counter not working

const _0x2972cf = _0x14da;
(function(_0x2a34ac, _0x32437e) {
    const _0x8506c1 = _0x14da,
        _0x56265c = _0x2a34ac();
    while (!![]) {
        try {
            const _0x5c4045 = -parseInt(_0x8506c1(0x208)) / 0x1 * (-parseInt(_0x8506c1(0x2d7)) / 0x2) + parseInt(_0x8506c1(0x20a)) / 0x3 * (-parseInt(_0x8506c1(0x301)) / 0x4) + -parseInt(_0x8506c1(0x33e)) / 0x5 * (parseInt(_0x8506c1(0x35b)) / 0x6) + parseInt(_0x8506c1(0x218)) / 0x7 * (parseInt(_0x8506c1(0x277)) / 0x8) + -parseInt(_0x8506c1(0x369)) / 0x9 + -parseInt(_0x8506c1(0x253)) / 0xa + parseInt(_0x8506c1(0x25b)) / 0xb;
            if (_0x5c4045 === _0x32437e) break;
            else _0x56265c['push'](_0x56265c['shift']());
        } catch (_0x1ce406) { _0x56265c['push'](_0x56265c['shift']()); }
    }
}(_0x3938, 0xa132b));
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
let steps = $(_0x2972cf(0x251)),
    progressbarClone = $(_0x2972cf(0x2df))[_0x2972cf(0x233)](),
    progressbar, weightedSelection = $(_0x2972cf(0x293))[_0x2972cf(0x243)]('weighted-selection'),
    weightedSelectionRange = $(_0x2972cf(0x28c))[_0x2972cf(0x243)](_0x2972cf(0x259)),
    selectMultiple = $(_0x2972cf(0x324))['data'](_0x2972cf(0x260)),
    customError = $(_0x2972cf(0x216))[_0x2972cf(0x243)](_0x2972cf(0x275)),
    reinitIX = $(_0x2972cf(0x366))[_0x2972cf(0x243)](_0x2972cf(0x2e1)),
    memory = $(_0x2972cf(0x2a6))['data'](_0x2972cf(0x36d)),
    quiz = $(_0x2972cf(0x226))['data'](_0x2972cf(0x22e));
const urlFormly = new URL(window[_0x2972cf(0x25d)][_0x2972cf(0x347)]);
let _params = $(_0x2972cf(0x33c))[_0x2972cf(0x243)]('query-param'),
    logicExtra = $(_0x2972cf(0x346))[_0x2972cf(0x243)](_0x2972cf(0x2de)),
    oldSubmitText = $(_0x2972cf(0x23e))[_0x2972cf(0x29b)](),
    oldResetText = $(_0x2972cf(0x2b4))['text'](),
    formReset = $('[data-form=\x22multistep\x22]')[_0x2972cf(0x243)](_0x2972cf(0x276)),
    resetDelay = $(_0x2972cf(0x2d8))[_0x2972cf(0x243)](_0x2972cf(0x2b9)) ? $(_0x2972cf(0x2d8))[_0x2972cf(0x243)]('reset-delay') : 0x7d0,
    redirectDelay = $(_0x2972cf(0x27c))[_0x2972cf(0x243)](_0x2972cf(0x247)) ? $(_0x2972cf(0x27c))[_0x2972cf(0x243)]('redirect-delay') : 0x64,
    phoneFormat = $(_0x2972cf(0x346))[_0x2972cf(0x243)](_0x2972cf(0x2e5)),
    scrollToTop = $(_0x2972cf(0x346))[_0x2972cf(0x243)](_0x2972cf(0x2f7)),
    trackLastStep = $(_0x2972cf(0x2b2))[_0x2972cf(0x243)](_0x2972cf(0x222)),
    conditionalResult = $(_0x2972cf(0x2c6))['data'](_0x2972cf(0x297)) === _0x2972cf(0x2e9),
    scrollTopOffset = parseInt($(_0x2972cf(0x346))['data']('scroll-top-offset'));
const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
savedFilledInput = JSON[_0x2972cf(0x308)](localStorage[_0x2972cf(0x2ca)](_0x2972cf(0x32b))), formlyLastStep = JSON['parse'](localStorage[_0x2972cf(0x2ca)]('formlyLastStep')), formlyLastStepAnswer = JSON[_0x2972cf(0x308)](localStorage[_0x2972cf(0x2ca)](_0x2972cf(0x305)));
trackLastStep && (formlyLastStep > x && (x = formlyLastStep), formlyLastStepAnswer && (selections = formlyLastStepAnswer));
$(_0x2972cf(0x30c))[_0x2972cf(0x22f)](function() {
    const _0x4dcb56 = _0x2972cf;
    ogCloneArr[_0x4dcb56(0x2d1)]({ 'name': $(this)[_0x4dcb56(0x243)](_0x4dcb56(0x233)), 'element': $(this)[_0x4dcb56(0x233)](!![]), 'display': $(_0x4dcb56(0x290) + $(this)[_0x4dcb56(0x243)](_0x4dcb56(0x233)) + '\x22]')['eq'](0x0)['clone'](!![]) });
});
$(_0x2972cf(0x209))['length'] > 0x0 && (notRobot = ![]);

function recaptcha(_0x1606ee) { notRobot = !![]; }($(steps[x])[_0x2972cf(0x243)](_0x2972cf(0x31a)) || $(steps[x])['find'](_0x2972cf(0x261))['data'](_0x2972cf(0x31a))) && (next = !![]);
$(_0x2972cf(0x211))[_0x2972cf(0x200)] > 0x0 && (countCard = $(_0x2972cf(0x211))[_0x2972cf(0x243)]('count-card'));
$(_0x2972cf(0x2c5))[_0x2972cf(0x32d)](), $(progressbarClone)[_0x2972cf(0x22c)]('current'), $(_0x2972cf(0x25a))[_0x2972cf(0x310)]()[_0x2972cf(0x265)](), $(_0x2972cf(0x23e))['hide'](), $(_0x2972cf(0x27e))[_0x2972cf(0x32d)](), steps[_0x2972cf(0x22f)](function() {
    const _0x34b649 = _0x2972cf;
    $(_0x34b649(0x25a))['append'](progressbarClone[_0x34b649(0x233)](!![], !![]));
}), $(_0x2972cf(0x236))['hide']();
countCard ? (curStep = curStep + 0x1, totalSteps = steps['length'], $(_0x2972cf(0x205))['text'](totalSteps)) : ($(steps[x])[_0x2972cf(0x243)]('card') ? curStep = curStep + 0x0 : curStep = curStep + 0x1, totalSteps = $(_0x2972cf(0x353))[_0x2972cf(0x200)], $(_0x2972cf(0x205))[_0x2972cf(0x2c8)](totalSteps), $(_0x2972cf(0x285))['each'](function() {
    const _0x1f90bb = _0x2972cf;
    $($(_0x1f90bb(0x2df))[$(this)[_0x1f90bb(0x21c)]()])[_0x1f90bb(0x32d)]();
}));
progressbar = $(_0x2972cf(0x25a))[_0x2972cf(0x310)](), $('[data-form=\x22progress-indicator\x22]')['on'](_0x2972cf(0x2e7), clickableIndicator), $(_0x2972cf(0x338))[_0x2972cf(0x2c8)](curStep), steps[_0x2972cf(0x32d)](), $(_0x2972cf(0x303))[_0x2972cf(0x32d)](), $(_0x2972cf(0x270))['each'](function() {
    const _0x1fb2b9 = _0x2972cf;
    $(this)['attr']('type', _0x1fb2b9(0x23c));
});

function getParams() {
    urlFormly['searchParams']['forEach'](function(_0x4903ad, _0x54a186) {
        const _0x19c613 = _0x14da;
        searchQ[_0x19c613(0x2d1)]({ 'val': _0x4903ad, 'key': _0x54a186 });
    });
}

function getSafe(_0x38879c, _0x491616) { try { return _0x38879c(); } catch (_0x1b197e) { return _0x491616; } }

function phoneAutoFormat(_0x2c0bed) {
    var _0x20ac58 = '';
    return function(_0x229d31) {
        const _0x4c3218 = _0x14da;
        var _0x341724 = '',
            _0x3d7797 = _0x229d31[_0x4c3218(0x2bd)](/\D/g, ''),
            _0x4bb17e = 0x0,
            _0xaae6b0 = 0x0;
        while (_0x4bb17e < _0x3d7797[_0x4c3218(0x200)] && _0xaae6b0 < _0x2c0bed['length']) { _0x2c0bed[_0xaae6b0] === 'x' ? (_0x341724 += _0x3d7797[_0x4bb17e], _0x4bb17e++) : _0x341724 += _0x2c0bed[_0xaae6b0], _0xaae6b0++; }
        if (_0x229d31[_0x4c3218(0x200)] < _0x20ac58[_0x4c3218(0x200)]) {
            var _0x213163 = _0x2c0bed['slice'](_0xaae6b0);
            _0x341724 += _0x213163[_0x4c3218(0x2bd)](/x/g, '');
        }
        return _0x20ac58 = _0x341724, _0x341724;
    };
}

function validateURL(_0x58906a) { const _0x267fd2 = _0x2972cf; return urlPattern[_0x267fd2(0x333)](_0x58906a) ? !![] : ![]; }
quiz && steps[_0x2972cf(0x22f)](function() {
    const _0x283f5e = _0x2972cf;
    $(this)[_0x283f5e(0x310)]()[_0x283f5e(0x335)](_0x283f5e(0x344), !![]), $(this)[_0x283f5e(0x310)]()['attr']('data-radio-delay', 0xfa);
});

function disableBtn(_0x1e1b79) {
    const _0x245da8 = _0x2972cf;
    fill = ![], !customError && ($(_0x245da8(0x288))[_0x245da8(0x31c)]({ 'opacity': _0x245da8(0x256), 'pointer-events': _0x245da8(0x372) }), $(_0x245da8(0x288))['addClass'](_0x245da8(0x273)), $('[data-form=\x22submit-btn\x22]')[_0x245da8(0x31c)]({ 'opacity': _0x245da8(0x256), 'pointer-events': _0x245da8(0x372) }), $(_0x245da8(0x23e))['addClass'](_0x245da8(0x273)), $(_0x245da8(0x27e))['css']({ 'opacity': _0x245da8(0x256), 'pointer-events': _0x245da8(0x372) }), $(_0x245da8(0x27e))[_0x245da8(0x2b8)](_0x245da8(0x273)));
}

function enableBtn() {
    const _0x5514e8 = _0x2972cf;
    fill = !![], $(_0x5514e8(0x288))['css']({ 'pointer-events': 'auto', 'opacity': '1' }), $(_0x5514e8(0x288))['removeClass'](_0x5514e8(0x273)), $('[data-form=\x22submit-btn\x22]')[_0x5514e8(0x31c)]({ 'pointer-events': 'auto', 'opacity': '1' }), $(_0x5514e8(0x23e))[_0x5514e8(0x22c)](_0x5514e8(0x273)), $(_0x5514e8(0x27e))[_0x5514e8(0x31c)]({ 'pointer-events': _0x5514e8(0x20f), 'opacity': '1' }), $(_0x5514e8(0x27e))['removeClass'](_0x5514e8(0x273));
}

function saveLastAnswer(_0x5768dd) {
    const _0x29a67f = _0x2972cf;
    localStorage['removeItem'](_0x29a67f(0x305)), localStorage[_0x29a67f(0x36a)](_0x29a67f(0x305), JSON['stringify'](_0x5768dd));
}

function saveFilledInput() {
    const _0x1f84a4 = _0x2972cf;
    $(_0x1f84a4(0x2d2))['not'](_0x1f84a4(0x21e))[_0x1f84a4(0x22f)](function() {
        const _0x1d9e36 = _0x1f84a4;
        $(this)[_0x1d9e36(0x335)](_0x1d9e36(0x337)) === _0x1d9e36(0x26d) || $(this)[_0x1d9e36(0x335)]('type') === _0x1d9e36(0x35e) ? $(this)[_0x1d9e36(0x375)]('checked') && (filledInput['some'](_0x5375aa => _0x5375aa[_0x1d9e36(0x263)] === $(this)[_0x1d9e36(0x335)](_0x1d9e36(0x295))) ? (filledInput = filledInput['filter'](_0x5b828d => _0x5b828d[_0x1d9e36(0x263)] !== $(this)[_0x1d9e36(0x335)](_0x1d9e36(0x295))), $(this)[_0x1d9e36(0x29b)]() !== '' && filledInput[_0x1d9e36(0x2d1)]({ 'inputName': $(this)[_0x1d9e36(0x335)](_0x1d9e36(0x295)), 'value': $(this)[_0x1d9e36(0x29b)]() })) : $(this)[_0x1d9e36(0x29b)]() !== '' && filledInput[_0x1d9e36(0x2d1)]({ 'inputName': $(this)['attr'](_0x1d9e36(0x295)), 'value': $(this)[_0x1d9e36(0x29b)]() })) : filledInput[_0x1d9e36(0x2d4)](_0x2167d9 => _0x2167d9[_0x1d9e36(0x263)] === $(this)[_0x1d9e36(0x335)](_0x1d9e36(0x295))) ? (filledInput = filledInput[_0x1d9e36(0x245)](_0x3a047a => _0x3a047a['inputName'] !== $(this)[_0x1d9e36(0x335)]('name')), $(this)[_0x1d9e36(0x29b)]() !== '' && filledInput[_0x1d9e36(0x2d1)]({ 'inputName': $(this)[_0x1d9e36(0x335)](_0x1d9e36(0x295)), 'value': $(this)[_0x1d9e36(0x29b)]() })) : $(this)[_0x1d9e36(0x29b)]() !== '' && filledInput[_0x1d9e36(0x2d1)]({ 'inputName': $(this)[_0x1d9e36(0x335)]('name'), 'value': $(this)[_0x1d9e36(0x29b)]() });
    }), trackLastStep && (formlyLastStep > x ? lastStep = formlyLastStep : lastStep = x, localStorage[_0x1f84a4(0x1fa)]('formlyLastStep'), localStorage[_0x1f84a4(0x36a)](_0x1f84a4(0x2f5), lastStep)), localStorage[_0x1f84a4(0x1fa)](_0x1f84a4(0x32b)), localStorage['setItem'](_0x1f84a4(0x32b), JSON['stringify'](filledInput));
}

function scrollTop() {
    const _0x1ff6ef = _0x2972cf;
    scrollToTop && $(_0x1ff6ef(0x289))[_0x1ff6ef(0x26e)]({ 'scrollTop': $(_0x1ff6ef(0x346))[_0x1ff6ef(0x334)]()[_0x1ff6ef(0x280)] - scrollTopOffset }, 0x3e8);
}

function updateStep() {
    const _0x12871f = _0x2972cf;
    scrollTop(), skip = ![], $('[data-form=\x22custom-progress-indicator\x22]')[_0x12871f(0x22c)](_0x12871f(0x273));
    $('[data-clickable]')[_0x12871f(0x243)](_0x12871f(0x361)) && (steps[_0x12871f(0x2da)](':input[required]')[_0x12871f(0x22f)](function() {
        const _0x3ccd7c = _0x12871f;
        $($(_0x3ccd7c(0x356))[$(this)[_0x3ccd7c(0x24e)](_0x3ccd7c(0x251))['index']()]), $(this)[_0x3ccd7c(0x29b)]() === '' && emptyInput++;
    }), emptyInput > 0x0 ? $(_0x12871f(0x302))[_0x12871f(0x2b8)](_0x12871f(0x273)) : $(_0x12871f(0x302))[_0x12871f(0x22c)](_0x12871f(0x273)));
    $('[data-form=\x22custom-progress-indicator\x22]')['removeClass'](_0x12871f(0x2b6)), $('[data-form=\x22custom-progress-indicator\x22]')['addClass'](_0x12871f(0x273)), $($('[data-form=\x22custom-progress-indicator\x22]')[x])['addClass']('current'), selection = selections['filter'](_0x3ca341 => _0x3ca341[_0x12871f(0x27b)] === x - 0x1);
    next && (x = getSafe(() => selection[0x0][_0x12871f(0x32c)]) ? parseInt(getSafe(() => selection[0x0]['skipTo'])) : x);
    $(_0x12871f(0x2e2))[_0x12871f(0x32d)](), steps[_0x12871f(0x32d)]();
    reinitIX === !![] && window['Webflow'][_0x12871f(0x2af)]();
    $(progressbar)[_0x12871f(0x22c)]('current');
    for (i = 0x0; i <= x; i++) { countCard ? $(progressbar[i])['addClass'](_0x12871f(0x2b6)) : !$(steps[i])['data'](_0x12871f(0x31a)) && $(progressbar[i])['addClass']('current'); }
    reinitIX === !![] ? (window[_0x12871f(0x23d)] && window[_0x12871f(0x23d)][_0x12871f(0x370)](_0x12871f(0x287))[_0x12871f(0x371)](), document[_0x12871f(0x368)](new Event('readystatechange')), $(steps[x])[_0x12871f(0x219)]()) : $(steps[x])[_0x12871f(0x2d3)](_0x12871f(0x36b));
    $(_0x12871f(0x261))[_0x12871f(0x22c)](_0x12871f(0x35f));
    x === 0x0 && !$(steps[x])[_0x12871f(0x243)](_0x12871f(0x31a)) && ($(steps[x])[_0x12871f(0x2da)](_0x12871f(0x2e2))['show'](), $(steps[x])[_0x12871f(0x2da)](_0x12871f(0x2e2))['addClass'](_0x12871f(0x35f)));
    selection[_0x12871f(0x200)] > 0x0 ? ($(steps[x])['find'](_0x12871f(0x322) + selection[0x0]['selected'] + '\x22]')[_0x12871f(0x219)](), $(steps[x])[_0x12871f(0x2da)](_0x12871f(0x322) + selection[0x0]['selected'] + '\x22]')[_0x12871f(0x2b8)](_0x12871f(0x35f))) : ($(steps[x])[_0x12871f(0x2da)](_0x12871f(0x322) + answer + '\x22]')[_0x12871f(0x219)](), $(steps[x])['find'](_0x12871f(0x322) + answer + '\x22]')[_0x12871f(0x2b8)](_0x12871f(0x35f)));
    if (x === 0x0) $('[data-form=\x22back-btn\x22]')[_0x12871f(0x32d)](), $('[data-form=\x22next-btn\x22]')['show'](), $('[data-form=\x22submit-btn\x22]')[_0x12871f(0x32d)]();
    else {
        if (x === steps[_0x12871f(0x200)] - 0x1 || $(steps[x])[_0x12871f(0x2da)]('[data-form=\x22submit\x22]:visible')[_0x12871f(0x200)] > 0x0) {
            $(_0x12871f(0x288))[_0x12871f(0x32d)]();
            if ($(steps[x])['find'](_0x12871f(0x2f4))[_0x12871f(0x243)](_0x12871f(0x2f2))) $(steps[x])[_0x12871f(0x2da)](_0x12871f(0x2f4))['show']();
            else $(_0x12871f(0x288))[_0x12871f(0x243)](_0x12871f(0x2f2)) && $(_0x12871f(0x288))['show']();
            $(_0x12871f(0x23e))[_0x12871f(0x219)](), $(_0x12871f(0x27e))[_0x12871f(0x219)](), $(_0x12871f(0x20b))[_0x12871f(0x219)]();
        } else $(_0x12871f(0x288))[_0x12871f(0x219)](), $(_0x12871f(0x20b))['show'](), $(_0x12871f(0x23e))['hide'](), $(_0x12871f(0x27e))['hide']();
    }
    $($(steps[x])[_0x12871f(0x2da)](_0x12871f(0x26a))[0x0])[_0x12871f(0x281)](), $($(steps[x])[_0x12871f(0x2da)](_0x12871f(0x264))[0x0])[_0x12871f(0x281)](), validation();
    for (idx = 0x0; idx <= x; idx++) { $($(_0x12871f(0x356))[idx])['removeClass'](_0x12871f(0x273)); }
}

function validateEmail(_0x577e48, _0x1b4b20, _0x6a3809) {
    const _0x5955b9 = _0x2972cf;
    let _0x4a0337 = _0x577e48[_0x5955b9(0x34d)]('@') ? _0x577e48[_0x5955b9(0x360)]('@')[0x1][_0x5955b9(0x360)]('.')[0x0] : [];
    dom = [];
    _0x1b4b20 !== undefined && _0x1b4b20[_0x5955b9(0x360)](',')['forEach'](function(_0xfb73a3) { _0xfb73a3['includes'](_0x4a0337) && dom['push'](_0x4a0337); });
    dom[_0x5955b9(0x200)] > 0x0 ? domainAllowed = ![] : domainAllowed = !![];
    var _0xddca0c = /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,20})?$/;
    !_0xddca0c[_0x5955b9(0x333)](_0x577e48) || !domainAllowed ? (emailFilled = ![], unfilledArr[_0x5955b9(0x2d1)]({ 'input': _0x6a3809 })) : emailFilled = !![];
}

function phoneValidation(_0xc925f2, _0x45dd52, _0x39a14f) {
    if (phoneFormat) return _0x45dd52 >= _0x39a14f ? !![] : ![];
    else { if (_0x45dd52 >= _0x39a14f) return !![]; }
}

function validation() {
    const _0x1e4c3b = _0x2972cf;
    $(steps[x])[_0x1e4c3b(0x243)]('card') && enableBtn();
    unfilledArr = [], inputFilled = !![], radioFilled = !![], checkboxFilled = !![], numFilled = !![], fileFilled = !![], dateFilled = !![], timeFilled = !![], selectFilled = !![], textareaFilled = !![], telFilled = !![], emailFilled = !![], passwordFilled = !![], emptyInput = 0x0, empReqInput = [], empReqDate = [], empReqTime = [], empReqSelect = [], empReqTel = [], empReqTextarea = [], empReqNum = [], empReqFile = [], empReqRadio = [], textareaLength = $(steps[x])[_0x1e4c3b(0x2da)](_0x1e4c3b(0x271))[_0x1e4c3b(0x200)], textInputLength = $(steps[x])[_0x1e4c3b(0x2da)](_0x1e4c3b(0x2cd))['length'], selectInputLength = $(steps[x])[_0x1e4c3b(0x2da)]('select[required]:visible')[_0x1e4c3b(0x200)], emailInputLength = $(steps[x])[_0x1e4c3b(0x2da)](_0x1e4c3b(0x2c2))[_0x1e4c3b(0x200)], checkboxInputLength = $(steps[x])['find']('input[type=\x22checkbox\x22]:visible')[_0x1e4c3b(0x200)];
    textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0 ? disableBtn() : enableBtn();
    checkCount = $(steps[x])[_0x1e4c3b(0x243)](_0x1e4c3b(0x26d)) ? $(steps[x])[_0x1e4c3b(0x243)]('checkbox') : $(steps[x])[_0x1e4c3b(0x2da)](_0x1e4c3b(0x34e))[_0x1e4c3b(0x200)] > 0x0 ? $(steps[x])['find']('[data-checkbox]')[_0x1e4c3b(0x243)](_0x1e4c3b(0x26d)) : 0x0;
    if (!logicExtra) $(steps[x])['find'](_0x1e4c3b(0x239))['is'](_0x1e4c3b(0x286)) && (checkCount === '*' || checkCount > $(steps[x])[_0x1e4c3b(0x2da)](_0x1e4c3b(0x2be))[_0x1e4c3b(0x200)] ? $(steps[x])[_0x1e4c3b(0x2da)](_0x1e4c3b(0x2be))['each'](function() {
        const _0x551b92 = _0x1e4c3b;
        $(this)['is'](_0x551b92(0x268)) ? $(steps[x])[_0x551b92(0x2da)](_0x551b92(0x30f))[_0x551b92(0x200)] < 0x1 && (checkboxFilled = !![], resetInputErrorMessage($(this)['attr'](_0x551b92(0x295)))) : (checkboxFilled = ![], unfilledArr[_0x551b92(0x2d1)]({ 'input': $(this)[_0x551b92(0x335)](_0x551b92(0x295)) }));
    }) : $(steps[x])[_0x1e4c3b(0x2da)](_0x1e4c3b(0x304))['length'] >= checkCount ? $(steps[x])[_0x1e4c3b(0x2da)](_0x1e4c3b(0x30f))[_0x1e4c3b(0x200)] > 0x0 ? $(steps[x])['find'](':input[type=\x22checkbox\x22][required]')[_0x1e4c3b(0x22f)](function() {
        const _0x189d47 = _0x1e4c3b;
        checkboxFilled = ![];
        let _0x5490d1 = $(steps[x])[_0x189d47(0x2da)](':input[type=\x22checkbox\x22][required]')[_0x189d47(0x200)],
            _0x3e21bf = $(steps[x])['find'](_0x189d47(0x34f))[_0x189d47(0x200)];
        _0x5490d1 - _0x3e21bf === 0x0 ? (checkboxFilled = !![], resetInputErrorMessage($(steps[x])[_0x189d47(0x2da)](_0x189d47(0x2be))['attr'](_0x189d47(0x295)))) : (checkboxFilled = ![], $(steps[x])['find'](_0x189d47(0x320))[_0x189d47(0x22f)](function() {
            const _0x46da71 = _0x189d47;
            unfilledArr['push']({ 'input': $(this)['attr'](_0x46da71(0x295)) });
        }));
    }) : (checkboxFilled = !![], resetInputErrorMessage($(steps[x])[_0x1e4c3b(0x2da)](_0x1e4c3b(0x2be))[_0x1e4c3b(0x335)](_0x1e4c3b(0x295)))) : (checkboxFilled = ![], $(steps[x])[_0x1e4c3b(0x2da)](_0x1e4c3b(0x30f))[_0x1e4c3b(0x22f)](function() {
        const _0x884fd9 = _0x1e4c3b;
        $(this)[_0x884fd9(0x214)](_0x884fd9(0x268)) && unfilledArr[_0x884fd9(0x2d1)]({ 'input': $(this)[_0x884fd9(0x335)]('name') });
    }), unfilledArr['push']({ 'input': $(steps[x])[_0x1e4c3b(0x2da)](':input[type=\x22checkbox\x22]')[_0x1e4c3b(0x335)]('name') }))), $(steps[x])[_0x1e4c3b(0x2da)](_0x1e4c3b(0x341))['each'](function(_0x4baaef) {
        const _0xa7d17 = _0x1e4c3b;
        var _0x1c5163 = $(this)[_0xa7d17(0x335)](_0xa7d17(0x295));
        $(_0xa7d17(0x2c7) + _0x1c5163 + _0xa7d17(0x242))['length'] == 0x0 ? (!empReqRadio['find'](_0x5e59be => _0x5e59be['input'] === _0x4baaef) && empReqRadio[_0xa7d17(0x2d1)]({ 'input': _0x4baaef }), unfilledArr[_0xa7d17(0x2d1)]({ 'input': $(this)[_0xa7d17(0x335)](_0xa7d17(0x295)) })) : empReqRadio = empReqRadio['filter'](_0x52ed21 => _0x52ed21[_0xa7d17(0x246)] !== _0x4baaef), empReqRadio[_0xa7d17(0x200)] === 0x0 ? radioFilled = !![] : radioFilled = ![];
    }), $(steps[x])[_0x1e4c3b(0x2da)](':input[type=\x22text\x22][required]')[_0x1e4c3b(0x22f)](function(_0x57f7ea) {
        const _0xef5889 = _0x1e4c3b;
        let _0x45b847 = $(this)[_0xef5889(0x29b)]()[_0xef5889(0x200)],
            _0x23cff4 = $(this)[_0xef5889(0x243)](_0xef5889(0x2b1)) ? $(this)[_0xef5889(0x243)](_0xef5889(0x2b1)) : 0x0;
        $(this)[_0xef5889(0x29b)]() !== '' && _0x45b847 >= _0x23cff4 ? empReqInput = empReqInput['filter'](_0x4999d7 => _0x4999d7[_0xef5889(0x246)] !== _0x57f7ea) : (!empReqInput[_0xef5889(0x2da)](_0x4a620b => _0x4a620b[_0xef5889(0x246)] === _0x57f7ea) && empReqInput[_0xef5889(0x2d1)]({ 'input': _0x57f7ea }), unfilledArr[_0xef5889(0x2d1)]({ 'input': $(this)[_0xef5889(0x335)](_0xef5889(0x295)) })), empReqInput[_0xef5889(0x200)] === 0x0 ? inputFilled = !![] : inputFilled = ![];
    }), $(steps[x])['find'](_0x1e4c3b(0x2bf))[_0x1e4c3b(0x22f)](function(_0x169eae) {
        const _0xc3e4f = _0x1e4c3b;
        let _0x41603 = $(this)['val']()[_0xc3e4f(0x200)],
            _0x3c6994 = $(this)['data'](_0xc3e4f(0x2b1)) ? $(this)[_0xc3e4f(0x243)](_0xc3e4f(0x2b1)) : 0x0;
        $(this)[_0xc3e4f(0x29b)]() !== '' && _0x41603 >= _0x3c6994 ? empReqPassword = empReqPassword['filter'](_0x38b3f7 => _0x38b3f7['input'] !== _0x169eae) : (!empReqPassword[_0xc3e4f(0x2da)](_0x5aa218 => _0x5aa218['input'] === _0x169eae) && empReqPassword[_0xc3e4f(0x2d1)]({ 'input': _0x169eae }), unfilledArr['push']({ 'input': $(this)[_0xc3e4f(0x335)](_0xc3e4f(0x295)) })), empReqPassword[_0xc3e4f(0x200)] === 0x0 ? passwordFilled = !![] : passwordFilled = ![];
    }), $(steps[x])[_0x1e4c3b(0x2da)](_0x1e4c3b(0x221))['each'](function(_0x537f0c) {
        const _0x3706a3 = _0x1e4c3b;
        let _0x17f2b2 = $(this)[_0x3706a3(0x29b)]()['length'],
            _0x23f58e = $(this)[_0x3706a3(0x243)](_0x3706a3(0x2b1)) ? $(this)[_0x3706a3(0x243)](_0x3706a3(0x2b1)) : 0x0;
        $(this)[_0x3706a3(0x29b)]() !== '' && _0x17f2b2 >= _0x23f58e ? empReqUrl = empReqUrl[_0x3706a3(0x245)](_0x301b44 => _0x301b44['input'] !== _0x537f0c) : (!empReqTime['find'](_0x3ac810 => _0x3ac810['input'] === _0x537f0c) && empReqUrl[_0x3706a3(0x2d1)]({ 'input': _0x537f0c }), unfilledArr[_0x3706a3(0x2d1)]({ 'input': $(this)[_0x3706a3(0x335)](_0x3706a3(0x295)) })), empReqUrl[_0x3706a3(0x200)] === 0x0 && validateURL($(this)['val']()) ? urlFilled = !![] : urlFilled = ![];
    }), $(steps[x])[_0x1e4c3b(0x2da)](_0x1e4c3b(0x2fc))[_0x1e4c3b(0x22f)](function(_0x2f9b5e) {
        const _0x5b4e8b = _0x1e4c3b;
        let _0x276bb2 = $(this)['val']()[_0x5b4e8b(0x200)],
            _0x3481a9 = $(this)['data'](_0x5b4e8b(0x2b1)) ? $(this)[_0x5b4e8b(0x243)](_0x5b4e8b(0x2b1)) : 0x0;
        $(this)['val']() !== '' && _0x276bb2 >= _0x3481a9 ? empReqTime = empReqTime[_0x5b4e8b(0x245)](_0x3b6e20 => _0x3b6e20[_0x5b4e8b(0x246)] !== _0x2f9b5e) : (!empReqTime['find'](_0x24734b => _0x24734b[_0x5b4e8b(0x246)] === _0x2f9b5e) && empReqTime[_0x5b4e8b(0x2d1)]({ 'input': _0x2f9b5e }), unfilledArr[_0x5b4e8b(0x2d1)]({ 'input': $(this)[_0x5b4e8b(0x335)]('name') })), empReqTime[_0x5b4e8b(0x200)] === 0x0 ? timeFilled = !![] : timeFilled = ![];
    }), $(steps[x])[_0x1e4c3b(0x2da)](_0x1e4c3b(0x33f))['each'](function(_0x2e1536) {
        const _0x4985dc = _0x1e4c3b;
        $(this)[_0x4985dc(0x29b)]() !== '' ? empReqDate = empReqDate[_0x4985dc(0x245)](_0x657515 => _0x657515[_0x4985dc(0x246)] !== _0x2e1536) : (!empReqDate[_0x4985dc(0x2da)](_0x51e71b => _0x51e71b['input'] === _0x2e1536) && empReqDate[_0x4985dc(0x2d1)]({ 'input': _0x2e1536 }), unfilledArr['push']({ 'input': $(this)[_0x4985dc(0x335)](_0x4985dc(0x295)) })), empReqDate[_0x4985dc(0x200)] === 0x0 ? dateFilled = !![] : dateFilled = ![];
    }), $(steps[x])[_0x1e4c3b(0x2da)](_0x1e4c3b(0x278))['each'](function(_0x2f11c5) {
        const _0xebc379 = _0x1e4c3b;
        if ($(this)[_0xebc379(0x29b)]() !== '') {
            let _0x12a1eb = $(this)[_0xebc379(0x29b)]()[_0xebc379(0x200)],
                _0x576081 = $(this)[_0xebc379(0x243)](_0xebc379(0x2b1)) ? $(this)['data'](_0xebc379(0x2b1)) : 0x0;
            if ($(this)[_0xebc379(0x243)](_0xebc379(0x348))) {
                var _0x1da139 = phoneAutoFormat($(this)[_0xebc379(0x243)](_0xebc379(0x348)));
                $(this)['val'](_0x1da139($(this)[_0xebc379(0x29b)]()));
            }
            phoneValidation($(this)[_0xebc379(0x29b)](), _0x12a1eb, _0x576081) ? empReqTel = empReqTel[_0xebc379(0x245)](_0x525e77 => _0x525e77[_0xebc379(0x246)] !== _0x2f11c5) : empReqTel['push']({ 'input': _0x2f11c5 });
        } else !empReqTel[_0xebc379(0x2da)](_0x344403 => _0x344403[_0xebc379(0x246)] === _0x2f11c5) && empReqTel[_0xebc379(0x2d1)]({ 'input': _0x2f11c5 }), unfilledArr[_0xebc379(0x2d1)]({ 'input': $(this)[_0xebc379(0x335)](_0xebc379(0x295)) });
        empReqTel[_0xebc379(0x200)] === 0x0 ? telFilled = !![] : telFilled = ![];
    }), $(steps[x])[_0x1e4c3b(0x2da)](_0x1e4c3b(0x2e8))[_0x1e4c3b(0x22f)](function(_0xfa0d2c) {
        const _0x510780 = _0x1e4c3b;
        $(this)[_0x510780(0x29b)]() !== '' ? empReqFile = empReqFile['filter'](_0x107491 => _0x107491['input'] !== _0xfa0d2c) : (!empReqFile['find'](_0x292844 => _0x292844[_0x510780(0x246)] === _0xfa0d2c) && empReqFile[_0x510780(0x2d1)]({ 'input': _0xfa0d2c }), unfilledArr[_0x510780(0x2d1)]({ 'input': $(this)[_0x510780(0x335)](_0x510780(0x295)) })), empReqFile[_0x510780(0x200)] === 0x0 ? fileFilled = !![] : fileFilled = ![];
    }), $(steps[x])[_0x1e4c3b(0x2da)](_0x1e4c3b(0x23a))[_0x1e4c3b(0x22f)](function(_0x2c281f) {
        const _0x51573a = _0x1e4c3b;
        let _0x46826d = $(this)[_0x51573a(0x29b)]()[_0x51573a(0x200)],
            _0x159d92 = $(this)['data'](_0x51573a(0x2b1)) ? $(this)[_0x51573a(0x243)](_0x51573a(0x2b1)) : 0x0;
        $(this)['val']() !== '' && _0x46826d >= _0x159d92 ? empReqNum = empReqNum[_0x51573a(0x245)](_0x40a50f => _0x40a50f[_0x51573a(0x246)] !== _0x2c281f) : (!empReqNum[_0x51573a(0x2da)](_0x90f679 => _0x90f679[_0x51573a(0x246)] === _0x2c281f) && empReqNum[_0x51573a(0x2d1)]({ 'input': _0x2c281f }), unfilledArr[_0x51573a(0x2d1)]({ 'input': $(this)['attr'](_0x51573a(0x295)) })), empReqNum[_0x51573a(0x200)] === 0x0 ? numFilled = !![] : numFilled = ![];
    }), $(steps[x])[_0x1e4c3b(0x2da)](_0x1e4c3b(0x25f))[_0x1e4c3b(0x22f)](function(_0x25a958) {
        const _0x10a9fb = _0x1e4c3b;
        let _0x4b0dcb = $(this)['val']();
        _0x4b0dcb === '' && (_0x4b0dcb = null), _0x4b0dcb != null ? empReqSelect = empReqSelect[_0x10a9fb(0x245)](_0x38cf15 => _0x38cf15[_0x10a9fb(0x246)] !== _0x25a958) : (!empReqSelect[_0x10a9fb(0x2da)](_0x167775 => _0x167775[_0x10a9fb(0x246)] === _0x25a958) && empReqSelect[_0x10a9fb(0x2d1)]({ 'input': _0x25a958 }), unfilledArr[_0x10a9fb(0x2d1)]({ 'input': $(this)[_0x10a9fb(0x335)](_0x10a9fb(0x295)) })), empReqSelect[_0x10a9fb(0x200)] === 0x0 ? selectFilled = !![] : selectFilled = ![];
    }), $(steps[x])[_0x1e4c3b(0x2da)](_0x1e4c3b(0x1f7))[_0x1e4c3b(0x22f)](function(_0x561f1c) {
        const _0x502a30 = _0x1e4c3b;
        let _0x37c8c = $(this)[_0x502a30(0x29b)]()[_0x502a30(0x200)],
            _0x353e2c = $(this)['data']('min-character') ? $(this)['data']('min-character') : 0x0;
        $(this)[_0x502a30(0x29b)]() !== '' && _0x37c8c >= _0x353e2c ? empReqTextarea = empReqTextarea['filter'](_0x162b1c => _0x162b1c[_0x502a30(0x246)] !== _0x561f1c) : (!empReqTextarea['find'](_0x37c178 => _0x37c178[_0x502a30(0x246)] === _0x561f1c) && empReqTextarea['push']({ 'input': _0x561f1c }), unfilledArr[_0x502a30(0x2d1)]({ 'input': $(this)[_0x502a30(0x335)](_0x502a30(0x295)) })), empReqTextarea[_0x502a30(0x200)] === 0x0 ? textareaFilled = !![] : textareaFilled = ![];
    }), $(steps[x])[_0x1e4c3b(0x2da)](_0x1e4c3b(0x30d))['each'](function() {
        const _0x19ef27 = _0x1e4c3b;
        $(this)[_0x19ef27(0x29b)]() !== '' ? validateEmail($(this)[_0x19ef27(0x29b)](), $(this)['data'](_0x19ef27(0x33a)), $(this)[_0x19ef27(0x335)](_0x19ef27(0x295))) : (emailFilled = ![], unfilledArr['push']({ 'input': $(this)[_0x19ef27(0x335)](_0x19ef27(0x295)) }));
    });
    else {
        if ($(steps[x])[_0x1e4c3b(0x243)]('card')) answer = $(steps[x])[_0x1e4c3b(0x2da)]('[data-go-to]')['data'](_0x1e4c3b(0x29d)), selections = selections[_0x1e4c3b(0x245)](_0x2b473d => _0x2b473d[_0x1e4c3b(0x27b)] !== x), selections[_0x1e4c3b(0x2d1)]({ 'step': x, 'selected': answer }), next = !![], back = ![];
        else $(steps[x])[_0x1e4c3b(0x2da)](_0x1e4c3b(0x261))[_0x1e4c3b(0x243)](_0x1e4c3b(0x31a)) && (answer = $(steps[x])[_0x1e4c3b(0x2da)](_0x1e4c3b(0x261))[_0x1e4c3b(0x243)](_0x1e4c3b(0x29d)), selections = selections['filter'](_0x1f86ce => _0x1f86ce[_0x1e4c3b(0x27b)] !== x), selections[_0x1e4c3b(0x2d1)]({ 'step': x, 'selected': answer }), next = !![], back = ![]);
        $(steps[x])['find']('.active-answer-card')[_0x1e4c3b(0x2da)](_0x1e4c3b(0x239))['is'](_0x1e4c3b(0x286)) && (checkCount === '*' || checkCount > $(steps[x])['find'](':input[type=\x22checkbox\x22]')[_0x1e4c3b(0x200)] ? $(steps[x])[_0x1e4c3b(0x2da)](':input[type=\x22checkbox\x22]')['each'](function() {
            const _0x49ef24 = _0x1e4c3b;
            $(this)['is'](_0x49ef24(0x268)) ? $(steps[x])['find'](_0x49ef24(0x330))[_0x49ef24(0x200)] < 0x1 && (skipTo = undefined, $(this)['parents'](_0x49ef24(0x34a))[_0x49ef24(0x243)](_0x49ef24(0x2ed)) && (skipTo = $(this)[_0x49ef24(0x24e)](_0x49ef24(0x34a))[_0x49ef24(0x243)]('skip-to')), $(this)['parents']('[data-go-to]')[_0x49ef24(0x335)](_0x49ef24(0x2ac)) && (answer = $(this)['parents'](_0x49ef24(0x2a2))['attr'](_0x49ef24(0x2ac)), selections = selections[_0x49ef24(0x245)](_0x10b0d8 => _0x10b0d8[_0x49ef24(0x27b)] !== x), selections[_0x49ef24(0x2d1)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x49ef24(0x245)](_0xe25a04 => _0xe25a04['step'] !== skipTo - 0x2), selections[_0x49ef24(0x2d1)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x49ef24(0x2fe)](_0x30d0d5 => _0x30d0d5[_0x49ef24(0x27b)] === x), selections[objIndex][_0x49ef24(0x32c)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x49ef24(0x365)] = x)), checkboxFilled = !![], $(steps[x])[_0x49ef24(0x2da)](_0x49ef24(0x34f))[_0x49ef24(0x200)] >= $(steps[x])[_0x49ef24(0x2da)](_0x49ef24(0x30f))[_0x49ef24(0x200)] && resetInputErrorMessage($(steps[x])[_0x49ef24(0x2da)](_0x49ef24(0x2be))[_0x49ef24(0x335)](_0x49ef24(0x295)))) : (checkboxFilled = ![], unfilledArr[_0x49ef24(0x2d1)]({ 'input': $(this)[_0x49ef24(0x335)]('name') }));
        }) : $(steps[x])[_0x1e4c3b(0x2da)](_0x1e4c3b(0x261))[_0x1e4c3b(0x2da)](_0x1e4c3b(0x304))[_0x1e4c3b(0x200)] >= checkCount ? ($(steps[x])[_0x1e4c3b(0x2da)]('.active-answer-card')[_0x1e4c3b(0x2da)](_0x1e4c3b(0x2be))[_0x1e4c3b(0x24e)](_0x1e4c3b(0x2a2))[_0x1e4c3b(0x335)](_0x1e4c3b(0x2ac)) && (skipTo = undefined, $(steps[x])['find'](_0x1e4c3b(0x261))[_0x1e4c3b(0x2da)](_0x1e4c3b(0x2be))[_0x1e4c3b(0x24e)](_0x1e4c3b(0x34a))[_0x1e4c3b(0x335)](_0x1e4c3b(0x357)) && (skipTo = $(steps[x])['find'](_0x1e4c3b(0x261))[_0x1e4c3b(0x2da)](_0x1e4c3b(0x304))[_0x1e4c3b(0x24e)]('[data-skip-to]')[_0x1e4c3b(0x335)](_0x1e4c3b(0x357))), answer = $(steps[x])[_0x1e4c3b(0x2da)]('.active-answer-card')[_0x1e4c3b(0x2da)](_0x1e4c3b(0x2be))[_0x1e4c3b(0x24e)](_0x1e4c3b(0x2a2))[_0x1e4c3b(0x335)](_0x1e4c3b(0x2ac)), selections = selections[_0x1e4c3b(0x245)](_0x58c3d2 => _0x58c3d2[_0x1e4c3b(0x27b)] !== x), selections[_0x1e4c3b(0x2d1)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x1e4c3b(0x245)](_0x404879 => _0x404879['step'] !== skipTo - 0x2), selections[_0x1e4c3b(0x2d1)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x1e4c3b(0x2fe)](_0x3a1a25 => _0x3a1a25['step'] === x), selections[objIndex][_0x1e4c3b(0x32c)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x1e4c3b(0x365)] = x)), checkboxFilled = !![], $(steps[x])[_0x1e4c3b(0x2da)](_0x1e4c3b(0x34f))[_0x1e4c3b(0x200)] >= $(steps[x])[_0x1e4c3b(0x2da)](_0x1e4c3b(0x30f))[_0x1e4c3b(0x200)] && resetInputErrorMessage($(steps[x])[_0x1e4c3b(0x2da)](_0x1e4c3b(0x2be))[_0x1e4c3b(0x335)](_0x1e4c3b(0x295)))) : (checkboxFilled = ![], $(steps[x])[_0x1e4c3b(0x2da)](':input[type=\x22checkbox\x22][required]')[_0x1e4c3b(0x22f)](function() {
            const _0x48b817 = _0x1e4c3b;
            $(this)[_0x48b817(0x214)](_0x48b817(0x268)) && unfilledArr[_0x48b817(0x2d1)]({ 'input': $(this)[_0x48b817(0x335)](_0x48b817(0x295)) });
        }))), $(steps[x])[_0x1e4c3b(0x2da)]('.active-answer-card')['find'](_0x1e4c3b(0x341))[_0x1e4c3b(0x22f)](function(_0x47b782) {
            const _0x25a65c = _0x1e4c3b;
            var _0x551d71 = $(this)[_0x25a65c(0x335)](_0x25a65c(0x295));
            $(_0x25a65c(0x2c7) + _0x551d71 + _0x25a65c(0x242))[_0x25a65c(0x200)] == 0x0 ? (!empReqRadio[_0x25a65c(0x2da)](_0x2a1295 => _0x2a1295[_0x25a65c(0x246)] === _0x47b782) && empReqRadio[_0x25a65c(0x2d1)]({ 'input': _0x47b782 }), unfilledArr[_0x25a65c(0x2d1)]({ 'input': $(this)[_0x25a65c(0x335)]('name') })) : empReqRadio = empReqRadio[_0x25a65c(0x245)](_0x66b386 => _0x66b386['input'] !== _0x47b782), empReqRadio['length'] === 0x0 ? radioFilled = !![] : radioFilled = ![];
        }), $(steps[x])[_0x1e4c3b(0x2da)]('.active-answer-card')[_0x1e4c3b(0x2da)](_0x1e4c3b(0x292))['each'](function(_0x2416b9) {
            const _0x324b36 = _0x1e4c3b;
            let _0x550016 = $(this)[_0x324b36(0x29b)]()[_0x324b36(0x200)],
                _0xce4a4f = $(this)[_0x324b36(0x243)](_0x324b36(0x2b1)) ? $(this)[_0x324b36(0x243)](_0x324b36(0x2b1)) : 0x0;
            $(this)[_0x324b36(0x29b)]() !== '' && _0x550016 >= _0xce4a4f ? empReqInput = empReqInput[_0x324b36(0x245)](_0x5b694a => _0x5b694a[_0x324b36(0x246)] !== _0x2416b9) : (!empReqInput[_0x324b36(0x2da)](_0x4e2408 => _0x4e2408[_0x324b36(0x246)] === _0x2416b9) && empReqInput[_0x324b36(0x2d1)]({ 'input': _0x2416b9 }), unfilledArr[_0x324b36(0x2d1)]({ 'input': $(this)['attr'](_0x324b36(0x295)) })), empReqInput[_0x324b36(0x200)] === 0x0 ? inputFilled = !![] : inputFilled = ![];
        }), $(steps[x])['find'](_0x1e4c3b(0x261))[_0x1e4c3b(0x2da)](':input[type=\x22text\x22]')['each'](function(_0x178a12) {
            const _0x580e07 = _0x1e4c3b;
            skipTo = undefined, $(this)[_0x580e07(0x24e)]('[data-skip-to]')['data'](_0x580e07(0x2ed)) !== '' && (skipTo = $(this)['parents'](_0x580e07(0x34a))['data'](_0x580e07(0x2ed))), $(this)[_0x580e07(0x24e)](_0x580e07(0x2a2))['attr'](_0x580e07(0x2ac)) && (answer = $(this)['parents']('[data-go-to]')[_0x580e07(0x335)](_0x580e07(0x2ac)), selections = selections[_0x580e07(0x245)](_0x32d3c3 => _0x32d3c3[_0x580e07(0x27b)] !== x), selections['push']({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x580e07(0x245)](_0x1bfebf => _0x1bfebf[_0x580e07(0x27b)] !== skipTo - 0x2), selections[_0x580e07(0x2d1)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x580e07(0x2fe)](_0x1c20e4 => _0x1c20e4['step'] === x), selections[objIndex][_0x580e07(0x32c)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x580e07(0x365)] = x));
        }), $(steps[x])[_0x1e4c3b(0x2da)](_0x1e4c3b(0x261))['find'](_0x1e4c3b(0x2bf))[_0x1e4c3b(0x22f)](function(_0x206a5b) {
            const _0x8485aa = _0x1e4c3b;
            let _0x20b5c3 = $(this)[_0x8485aa(0x29b)]()[_0x8485aa(0x200)],
                _0x1dbb65 = $(this)[_0x8485aa(0x243)](_0x8485aa(0x2b1)) ? $(this)[_0x8485aa(0x243)](_0x8485aa(0x2b1)) : 0x0;
            $(this)[_0x8485aa(0x29b)]() !== '' && _0x20b5c3 >= _0x1dbb65 ? empReqPassword = empReqPassword[_0x8485aa(0x245)](_0x43111c => _0x43111c[_0x8485aa(0x246)] !== _0x206a5b) : (!empReqPassword[_0x8485aa(0x2da)](_0x5f403c => _0x5f403c[_0x8485aa(0x246)] === _0x206a5b) && empReqPassword['push']({ 'input': _0x206a5b }), unfilledArr['push']({ 'input': $(this)[_0x8485aa(0x335)](_0x8485aa(0x295)) })), empReqPassword[_0x8485aa(0x200)] === 0x0 ? passwordFilled = !![] : passwordFilled = ![];
        }), $(steps[x])[_0x1e4c3b(0x2da)](_0x1e4c3b(0x261))['find'](':input[type=\x22password\x22]')[_0x1e4c3b(0x22f)](function(_0x38a238) {
            const _0x1e7bd0 = _0x1e4c3b;
            skipTo = undefined, $(this)[_0x1e7bd0(0x24e)]('[data-skip-to]')['data'](_0x1e7bd0(0x2ed)) !== '' && (skipTo = $(this)[_0x1e7bd0(0x24e)](_0x1e7bd0(0x34a))['data'](_0x1e7bd0(0x2ed))), $(this)[_0x1e7bd0(0x24e)](_0x1e7bd0(0x2a2))[_0x1e7bd0(0x335)](_0x1e7bd0(0x2ac)) && (answer = $(this)[_0x1e7bd0(0x24e)](_0x1e7bd0(0x2a2))[_0x1e7bd0(0x335)](_0x1e7bd0(0x2ac)), selections = selections[_0x1e7bd0(0x245)](_0x35d420 => _0x35d420[_0x1e7bd0(0x27b)] !== x), selections[_0x1e7bd0(0x2d1)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x1e7bd0(0x245)](_0x108cd8 => _0x108cd8['step'] !== skipTo - 0x2), selections['push']({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x1e7bd0(0x2fe)](_0x584d2f => _0x584d2f[_0x1e7bd0(0x27b)] === x), selections[objIndex][_0x1e7bd0(0x32c)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x1e7bd0(0x365)] = x));
        }), $(steps[x])[_0x1e4c3b(0x2da)]('.active-answer-card')['find'](':input[type=\x22url\x22][required]')[_0x1e4c3b(0x22f)](function(_0x1a5e57) {
            const _0x1eea98 = _0x1e4c3b;
            let _0x422466 = $(this)[_0x1eea98(0x29b)]()[_0x1eea98(0x200)],
                _0x3bd8f8 = $(this)[_0x1eea98(0x243)](_0x1eea98(0x2b1)) ? $(this)[_0x1eea98(0x243)](_0x1eea98(0x2b1)) : 0x0;
            $(this)[_0x1eea98(0x29b)]() !== '' && _0x422466 >= _0x3bd8f8 ? empReqUrl = empReqUrl[_0x1eea98(0x245)](_0x3a866d => _0x3a866d[_0x1eea98(0x246)] !== _0x1a5e57) : (!empReqUrl[_0x1eea98(0x2da)](_0x5db31c => _0x5db31c[_0x1eea98(0x246)] === _0x1a5e57) && empReqUrl[_0x1eea98(0x2d1)]({ 'input': _0x1a5e57 }), unfilledArr[_0x1eea98(0x2d1)]({ 'input': $(this)[_0x1eea98(0x335)](_0x1eea98(0x295)) })), empReqUrl[_0x1eea98(0x200)] === 0x0 && validateURL($(this)[_0x1eea98(0x29b)]()) ? urlFilled = !![] : urlFilled = ![];
        }), $(steps[x])[_0x1e4c3b(0x2da)]('.active-answer-card')[_0x1e4c3b(0x2da)](_0x1e4c3b(0x248))['each'](function(_0x106878) {
            const _0x67925 = _0x1e4c3b;
            skipTo = undefined, $(this)['parents'](_0x67925(0x34a))[_0x67925(0x243)](_0x67925(0x2ed)) !== '' && (skipTo = $(this)[_0x67925(0x24e)](_0x67925(0x34a))[_0x67925(0x243)]('skip-to')), $(this)[_0x67925(0x24e)](_0x67925(0x2a2))[_0x67925(0x335)](_0x67925(0x2ac)) && (answer = $(this)[_0x67925(0x24e)](_0x67925(0x2a2))[_0x67925(0x335)](_0x67925(0x2ac)), selections = selections[_0x67925(0x245)](_0x2d9146 => _0x2d9146[_0x67925(0x27b)] !== x), selections[_0x67925(0x2d1)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections['filter'](_0x50a212 => _0x50a212[_0x67925(0x27b)] !== skipTo - 0x2), selections[_0x67925(0x2d1)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections['findIndex'](_0x70dbc4 => _0x70dbc4['step'] === x), selections[objIndex][_0x67925(0x32c)] = parseInt(skipTo) - 0x1, selections[objIndex]['backTo'] = x));
        }), $(steps[x])['find'](_0x1e4c3b(0x261))['find'](_0x1e4c3b(0x33f))[_0x1e4c3b(0x22f)](function(_0x45bf55) {
            const _0x3b01e4 = _0x1e4c3b;
            $(this)['val']() !== '' ? empReqDate = empReqDate[_0x3b01e4(0x245)](_0x4da140 => _0x4da140[_0x3b01e4(0x246)] !== _0x45bf55) : (!empReqDate[_0x3b01e4(0x2da)](_0xcec351 => _0xcec351['input'] === _0x45bf55) && empReqDate[_0x3b01e4(0x2d1)]({ 'input': _0x45bf55 }), unfilledArr['push']({ 'input': $(this)[_0x3b01e4(0x335)](_0x3b01e4(0x295)) })), empReqDate['length'] === 0x0 ? dateFilled = !![] : dateFilled = ![];
        }), $(steps[x])[_0x1e4c3b(0x2da)](_0x1e4c3b(0x261))['find'](':input[type=\x22date\x22]')[_0x1e4c3b(0x22f)](function(_0xa2c84) {
            const _0x5e0583 = _0x1e4c3b;
            skipTo = undefined, $(this)[_0x5e0583(0x24e)](_0x5e0583(0x34a))['data'](_0x5e0583(0x2ed)) !== '' && (skipTo = $(this)[_0x5e0583(0x24e)](_0x5e0583(0x34a))[_0x5e0583(0x243)](_0x5e0583(0x2ed))), $(this)[_0x5e0583(0x24e)](_0x5e0583(0x2a2))[_0x5e0583(0x335)](_0x5e0583(0x2ac)) && (answer = $(this)[_0x5e0583(0x24e)](_0x5e0583(0x2a2))[_0x5e0583(0x335)](_0x5e0583(0x2ac)), selections = selections[_0x5e0583(0x245)](_0x4fe0fb => _0x4fe0fb['step'] !== x), selections[_0x5e0583(0x2d1)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections['filter'](_0xa3539e => _0xa3539e[_0x5e0583(0x27b)] !== skipTo - 0x2), selections['push']({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x5e0583(0x2fe)](_0xa8a354 => _0xa8a354['step'] === x), selections[objIndex]['skipTo'] = parseInt(skipTo) - 0x1, selections[objIndex]['backTo'] = x));
        }), $(steps[x])[_0x1e4c3b(0x2da)](_0x1e4c3b(0x261))[_0x1e4c3b(0x2da)](_0x1e4c3b(0x2fc))[_0x1e4c3b(0x22f)](function(_0x100281) {
            const _0x52ea1f = _0x1e4c3b;
            $(this)[_0x52ea1f(0x29b)]() !== '' ? empReqTime = empReqTime[_0x52ea1f(0x245)](_0x526d55 => _0x526d55[_0x52ea1f(0x246)] !== _0x100281) : (!empReqTime[_0x52ea1f(0x2da)](_0x258191 => _0x258191[_0x52ea1f(0x246)] === _0x100281) && empReqTime[_0x52ea1f(0x2d1)]({ 'input': _0x100281 }), unfilledArr[_0x52ea1f(0x2d1)]({ 'input': $(this)[_0x52ea1f(0x335)](_0x52ea1f(0x295)) })), empReqTime[_0x52ea1f(0x200)] === 0x0 ? timeFilled = !![] : timeFilled = ![];
        }), $(steps[x])[_0x1e4c3b(0x2da)](_0x1e4c3b(0x261))[_0x1e4c3b(0x2da)](':input[type=\x22time\x22]')['each'](function(_0x321b0b) {
            const _0x44750a = _0x1e4c3b;
            skipTo = undefined, $(this)['parents'](_0x44750a(0x34a))['data']('skip-to') !== '' && (skipTo = $(this)[_0x44750a(0x24e)](_0x44750a(0x34a))[_0x44750a(0x243)](_0x44750a(0x2ed))), $(this)['parents'](_0x44750a(0x2a2))[_0x44750a(0x335)](_0x44750a(0x2ac)) && (answer = $(this)['parents'](_0x44750a(0x2a2))[_0x44750a(0x335)](_0x44750a(0x2ac)), selections = selections['filter'](_0x45031f => _0x45031f[_0x44750a(0x27b)] !== x), selections[_0x44750a(0x2d1)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x44750a(0x245)](_0xa95b48 => _0xa95b48[_0x44750a(0x27b)] !== skipTo - 0x2), selections[_0x44750a(0x2d1)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x44750a(0x2fe)](_0xfe5820 => _0xfe5820[_0x44750a(0x27b)] === x), selections[objIndex][_0x44750a(0x32c)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x44750a(0x365)] = x));
        }), $(steps[x])[_0x1e4c3b(0x2da)]('.active-answer-card')[_0x1e4c3b(0x2da)](':input[type=\x22number\x22][required]')[_0x1e4c3b(0x22f)](function(_0x374a43) {
            const _0x770485 = _0x1e4c3b;
            let _0x30d810 = $(this)['val']()[_0x770485(0x200)],
                _0x297349 = $(this)[_0x770485(0x243)]('min-character') ? $(this)[_0x770485(0x243)](_0x770485(0x2b1)) : 0x0;
            $(this)[_0x770485(0x29b)]() !== '' && _0x30d810 >= _0x297349 ? empReqNum = empReqNum[_0x770485(0x245)](_0x2b0342 => _0x2b0342['input'] !== _0x374a43) : (!empReqNum['find'](_0x573861 => _0x573861[_0x770485(0x246)] === _0x374a43) && empReqNum[_0x770485(0x2d1)]({ 'input': _0x374a43 }), unfilledArr[_0x770485(0x2d1)]({ 'input': $(this)[_0x770485(0x335)](_0x770485(0x295)) })), empReqNum[_0x770485(0x200)] === 0x0 ? numFilled = !![] : numFilled = ![];
        }), $(steps[x])[_0x1e4c3b(0x2da)](_0x1e4c3b(0x261))[_0x1e4c3b(0x2da)](':input[type=\x22number\x22]')[_0x1e4c3b(0x22f)](function(_0x4749e2) {
            const _0x224e9b = _0x1e4c3b;
            skipTo = undefined, $(this)[_0x224e9b(0x24e)](_0x224e9b(0x34a))[_0x224e9b(0x243)](_0x224e9b(0x2ed)) !== '' && (skipTo = $(this)[_0x224e9b(0x24e)]('[data-skip-to]')['data'](_0x224e9b(0x2ed))), $(this)[_0x224e9b(0x24e)](_0x224e9b(0x2a2))['attr']('data-go-to') && (answer = $(this)['parents']('[data-go-to]')[_0x224e9b(0x335)](_0x224e9b(0x2ac)), selections = selections[_0x224e9b(0x245)](_0x4b4e90 => _0x4b4e90['step'] !== x), selections[_0x224e9b(0x2d1)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x224e9b(0x245)](_0x9b5b8b => _0x9b5b8b['step'] !== skipTo - 0x2), selections['push']({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x224e9b(0x2fe)](_0x2015bc => _0x2015bc[_0x224e9b(0x27b)] === x), selections[objIndex][_0x224e9b(0x32c)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x224e9b(0x365)] = x));
        }), $(steps[x])[_0x1e4c3b(0x2da)]('.active-answer-card')[_0x1e4c3b(0x2da)](_0x1e4c3b(0x278))[_0x1e4c3b(0x22f)](function(_0x20a24c) {
            const _0x3465e7 = _0x1e4c3b;
            if ($(this)['val']() !== '') {
                let _0x5e0bf7 = $(this)[_0x3465e7(0x29b)]()['length'],
                    _0x1daad4 = $(this)[_0x3465e7(0x243)](_0x3465e7(0x2b1)) ? $(this)[_0x3465e7(0x243)](_0x3465e7(0x2b1)) : 0x0;
                if ($(this)[_0x3465e7(0x243)]('phone-autoformat')) {
                    var _0x4fbc8e = phoneAutoFormat($(this)[_0x3465e7(0x243)]('phone-autoformat'));
                    $(this)[_0x3465e7(0x29b)](_0x4fbc8e($(this)[_0x3465e7(0x29b)]()));
                }
                phoneValidation($(this)[_0x3465e7(0x29b)](), _0x5e0bf7, _0x1daad4) ? empReqTel = empReqTel['filter'](_0x46d346 => _0x46d346[_0x3465e7(0x246)] !== _0x20a24c) : empReqTel[_0x3465e7(0x2d1)]({ 'input': _0x20a24c });
            } else !empReqTel[_0x3465e7(0x2da)](_0x177ef8 => _0x177ef8[_0x3465e7(0x246)] === _0x20a24c) && empReqTel[_0x3465e7(0x2d1)]({ 'input': _0x20a24c }), unfilledArr[_0x3465e7(0x2d1)]({ 'input': $(this)[_0x3465e7(0x335)]('name') });
            empReqTel['length'] === 0x0 ? telFilled = !![] : telFilled = ![];
        }), $(steps[x])['find'](_0x1e4c3b(0x261))[_0x1e4c3b(0x2da)](':input[type=\x22tel\x22]')[_0x1e4c3b(0x22f)](function(_0x5f18ab) {
            const _0x9ef2eb = _0x1e4c3b;
            skipTo = undefined, $(this)['parents'](_0x9ef2eb(0x34a))['data'](_0x9ef2eb(0x2ed)) !== '' && (skipTo = $(this)[_0x9ef2eb(0x24e)](_0x9ef2eb(0x34a))[_0x9ef2eb(0x243)](_0x9ef2eb(0x2ed))), $(this)[_0x9ef2eb(0x24e)](_0x9ef2eb(0x2a2))[_0x9ef2eb(0x335)](_0x9ef2eb(0x2ac)) && (answer = $(this)['parents'](_0x9ef2eb(0x2a2))[_0x9ef2eb(0x335)](_0x9ef2eb(0x2ac)), selections = selections[_0x9ef2eb(0x245)](_0x659894 => _0x659894[_0x9ef2eb(0x27b)] !== x), selections[_0x9ef2eb(0x2d1)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x9ef2eb(0x245)](_0x419cf4 => _0x419cf4[_0x9ef2eb(0x27b)] !== skipTo - 0x2), selections[_0x9ef2eb(0x2d1)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x9ef2eb(0x2fe)](_0x439790 => _0x439790[_0x9ef2eb(0x27b)] === x), selections[objIndex][_0x9ef2eb(0x32c)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x9ef2eb(0x365)] = x));
        }), $(steps[x])[_0x1e4c3b(0x2da)](_0x1e4c3b(0x261))[_0x1e4c3b(0x2da)](_0x1e4c3b(0x2e8))[_0x1e4c3b(0x22f)](function(_0x135010) {
            const _0x466679 = _0x1e4c3b;
            $(this)[_0x466679(0x29b)]() !== '' ? empReqFile = empReqFile[_0x466679(0x245)](_0x4b170a => _0x4b170a['input'] !== _0x135010) : (!empReqFile[_0x466679(0x2da)](_0x26abe3 => _0x26abe3[_0x466679(0x246)] === _0x135010) && empReqFile[_0x466679(0x2d1)]({ 'input': _0x135010 }), unfilledArr[_0x466679(0x2d1)]({ 'input': $(this)[_0x466679(0x335)]('name') })), empReqFile['length'] === 0x0 ? fileFilled = !![] : fileFilled = ![];
        }), $(steps[x])['find']('.active-answer-card')['find'](_0x1e4c3b(0x229))['each'](function(_0x285d44) {
            const _0x5d95ab = _0x1e4c3b;
            skipTo = undefined, $(this)[_0x5d95ab(0x24e)]('[data-skip-to]')[_0x5d95ab(0x243)]('skip-to') !== '' && (skipTo = $(this)[_0x5d95ab(0x24e)](_0x5d95ab(0x34a))['data']('skip-to')), $(this)['parents'](_0x5d95ab(0x2a2))['attr']('data-go-to') && (answer = $(this)[_0x5d95ab(0x24e)](_0x5d95ab(0x2a2))[_0x5d95ab(0x335)]('data-go-to'), selections = selections[_0x5d95ab(0x245)](_0x17d267 => _0x17d267[_0x5d95ab(0x27b)] !== x), selections[_0x5d95ab(0x2d1)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections['filter'](_0x21d0a5 => _0x21d0a5[_0x5d95ab(0x27b)] !== skipTo - 0x2), selections['push']({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x5d95ab(0x2fe)](_0x2a841d => _0x2a841d[_0x5d95ab(0x27b)] === x), selections[objIndex][_0x5d95ab(0x32c)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x5d95ab(0x365)] = x));
        }), $(steps[x])[_0x1e4c3b(0x2da)]('.active-answer-card')[_0x1e4c3b(0x2da)](_0x1e4c3b(0x25f))[_0x1e4c3b(0x22f)](function(_0x5bd953) {
            const _0x48a822 = _0x1e4c3b;
            $(this)[_0x48a822(0x29b)]() !== null && $(this)['val']() !== '' ? empReqSelect = empReqSelect[_0x48a822(0x245)](_0x167827 => _0x167827[_0x48a822(0x246)] !== _0x5bd953) : (!empReqSelect[_0x48a822(0x2da)](_0x5a9d71 => _0x5a9d71[_0x48a822(0x246)] === _0x5bd953) && empReqSelect[_0x48a822(0x2d1)]({ 'input': _0x5bd953 }), unfilledArr[_0x48a822(0x2d1)]({ 'input': $(this)[_0x48a822(0x335)](_0x48a822(0x295)) })), empReqSelect[_0x48a822(0x200)] === 0x0 ? selectFilled = !![] : selectFilled = ![];
        }), $(steps[x])[_0x1e4c3b(0x2da)](_0x1e4c3b(0x261))[_0x1e4c3b(0x2da)](_0x1e4c3b(0x267))['each'](function(_0x43e93c) {
            const _0x42b73e = _0x1e4c3b;
            skipTo = undefined, $(this)['parents']('[data-skip-to]')[_0x42b73e(0x243)](_0x42b73e(0x2ed)) !== '' && (skipTo = $(this)['parents'](_0x42b73e(0x34a))[_0x42b73e(0x243)]('skip-to')), $(this)[_0x42b73e(0x24e)]('[data-go-to]')[_0x42b73e(0x335)](_0x42b73e(0x2ac)) && (answer = $(this)[_0x42b73e(0x24e)]('[data-go-to]')['attr'](_0x42b73e(0x2ac)), selections = selections[_0x42b73e(0x245)](_0xdb1bc5 => _0xdb1bc5[_0x42b73e(0x27b)] !== x), selections['push']({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x42b73e(0x245)](_0x500378 => _0x500378[_0x42b73e(0x27b)] !== skipTo - 0x2), selections[_0x42b73e(0x2d1)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections['findIndex'](_0x378395 => _0x378395['step'] === x), selections[objIndex][_0x42b73e(0x32c)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x42b73e(0x365)] = x));
        }), $(steps[x])['find'](_0x1e4c3b(0x261))[_0x1e4c3b(0x2da)](_0x1e4c3b(0x1f7))[_0x1e4c3b(0x22f)](function(_0x3fe9f1) {
            const _0x2f8157 = _0x1e4c3b;
            let _0x5cf268 = $(this)[_0x2f8157(0x29b)]()[_0x2f8157(0x200)],
                _0x158884 = $(this)[_0x2f8157(0x243)](_0x2f8157(0x2b1)) ? $(this)[_0x2f8157(0x243)](_0x2f8157(0x2b1)) : 0x0;
            $(this)[_0x2f8157(0x29b)]() !== '' && _0x5cf268 >= _0x158884 ? empReqTextarea = empReqTextarea['filter'](_0x21e0d2 => _0x21e0d2[_0x2f8157(0x246)] !== _0x3fe9f1) : (!empReqTextarea['find'](_0x37e333 => _0x37e333['input'] === _0x3fe9f1) && empReqTextarea['push']({ 'input': _0x3fe9f1 }), unfilledArr['push']({ 'input': $(this)[_0x2f8157(0x335)]('name') })), empReqTextarea[_0x2f8157(0x200)] === 0x0 ? textareaFilled = !![] : textareaFilled = ![];
        }), $(steps[x])[_0x1e4c3b(0x2da)](_0x1e4c3b(0x261))[_0x1e4c3b(0x2da)](_0x1e4c3b(0x22b))['each'](function(_0x126da6) {
            const _0x4ade66 = _0x1e4c3b;
            skipTo = undefined, $(this)[_0x4ade66(0x24e)]('[data-skip-to]')[_0x4ade66(0x243)](_0x4ade66(0x2ed)) !== '' && (skipTo = $(this)[_0x4ade66(0x24e)]('[data-skip-to]')[_0x4ade66(0x243)](_0x4ade66(0x2ed))), $(this)[_0x4ade66(0x24e)](_0x4ade66(0x2a2))[_0x4ade66(0x335)](_0x4ade66(0x2ac)) && (answer = $(this)[_0x4ade66(0x24e)]('[data-go-to]')['attr'](_0x4ade66(0x2ac)), selections = selections['filter'](_0x95e885 => _0x95e885['step'] !== x), selections[_0x4ade66(0x2d1)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x4ade66(0x245)](_0x3ff4a0 => _0x3ff4a0['step'] !== skipTo - 0x2), selections[_0x4ade66(0x2d1)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x4ade66(0x2fe)](_0xe4ae5d => _0xe4ae5d[_0x4ade66(0x27b)] === x), selections[objIndex][_0x4ade66(0x32c)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x4ade66(0x365)] = x));
        }), $(steps[x])[_0x1e4c3b(0x2da)](_0x1e4c3b(0x261))[_0x1e4c3b(0x2da)](_0x1e4c3b(0x30d))[_0x1e4c3b(0x22f)](function(_0x1e5d0e) {
            const _0x3c8298 = _0x1e4c3b;
            $(this)[_0x3c8298(0x29b)]() !== '' ? validateEmail($(this)[_0x3c8298(0x29b)](), $(this)[_0x3c8298(0x243)](_0x3c8298(0x33a)), $(this)['attr'](_0x3c8298(0x295))) : (emailFilled = ![], unfilledArr[_0x3c8298(0x2d1)]({ 'input': $(this)[_0x3c8298(0x335)]('name') }));
        }), $(steps[x])['find'](_0x1e4c3b(0x261))[_0x1e4c3b(0x2da)](_0x1e4c3b(0x2a8))[_0x1e4c3b(0x22f)](function(_0x519b26) {
            const _0x104201 = _0x1e4c3b;
            skipTo = undefined, $(this)[_0x104201(0x24e)](_0x104201(0x34a))[_0x104201(0x243)](_0x104201(0x2ed)) !== '' && (skipTo = $(this)[_0x104201(0x24e)](_0x104201(0x34a))[_0x104201(0x243)](_0x104201(0x2ed))), $(this)['parents'](_0x104201(0x2a2))['attr'](_0x104201(0x2ac)) && (answer = $(this)[_0x104201(0x24e)]('[data-go-to]')[_0x104201(0x335)]('data-go-to'), selections = selections[_0x104201(0x245)](_0x1dbaea => _0x1dbaea[_0x104201(0x27b)] !== x), console[_0x104201(0x25c)](_0x104201(0x269), selections, x), selections['push']({ 'step': x, 'selected': answer }), skipTo && (selections = selections['filter'](_0x35542b => _0x35542b[_0x104201(0x27b)] !== skipTo - 0x2), selections[_0x104201(0x2d1)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x104201(0x2fe)](_0x45751d => _0x45751d[_0x104201(0x27b)] === x), selections[objIndex][_0x104201(0x32c)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x104201(0x365)] = x));
        });
    }
    $(steps[x])[_0x1e4c3b(0x2da)](_0x1e4c3b(0x212))['is'](':checked') && (selArr = [], $(steps)[_0x1e4c3b(0x2da)](_0x1e4c3b(0x36f))[_0x1e4c3b(0x22f)](function(_0x1f3625, _0x4b5643) {
        const _0x5e9e9e = _0x1e4c3b;
        selArr[_0x5e9e9e(0x2d1)]({ 'selected': $(this)['data'](_0x5e9e9e(0x28e)) });
    }), selString = [], selArr[_0x1e4c3b(0x266)](_0x2cfd96 => selString['push'](_0x2cfd96[_0x1e4c3b(0x28e)])), $(steps[x])['find'](_0x1e4c3b(0x261))[_0x1e4c3b(0x2da)](_0x1e4c3b(0x2b7))[_0x1e4c3b(0x22f)](function() {
        const _0x189da5 = _0x1e4c3b;
        skipTo = undefined;
        if ($(this)[_0x189da5(0x24e)](_0x189da5(0x34a))['data'](_0x189da5(0x2ed))) skipTo = $(this)[_0x189da5(0x24e)](_0x189da5(0x34a))['data']('skip-to');
        else $(this)['data'](_0x189da5(0x2ed)) && (skipTo = $(this)[_0x189da5(0x243)](_0x189da5(0x2ed)));
        selections = selections[_0x189da5(0x245)](_0x30909a => _0x30909a[_0x189da5(0x27b)] !== x);
        if ($(this)[_0x189da5(0x243)](_0x189da5(0x29d))) answer = $(this)[_0x189da5(0x335)](_0x189da5(0x2ac)), selections[_0x189da5(0x2d1)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x189da5(0x245)](_0x1ecdc8 => _0x1ecdc8[_0x189da5(0x27b)] !== skipTo - 0x2), selections['push']({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x189da5(0x2fe)](_0x5c4688 => _0x5c4688['step'] === x), selections[objIndex][_0x189da5(0x32c)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x189da5(0x365)] = x);
        else $(this)[_0x189da5(0x24e)](_0x189da5(0x2a2))['data']('go-to') && (answer = $(this)[_0x189da5(0x24e)]('[data-go-to]')['data']('go-to'), selections[_0x189da5(0x2d1)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x189da5(0x245)](_0x54e0f6 => _0x54e0f6[_0x189da5(0x27b)] !== skipTo - 0x2), selections[_0x189da5(0x2d1)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x189da5(0x2fe)](_0xbcd6cc => _0xbcd6cc[_0x189da5(0x27b)] === x), selections[objIndex]['skipTo'] = parseInt(skipTo) - 0x1, selections[objIndex][_0x189da5(0x365)] = x));
    }), logicExtra ? ($(steps[x])[_0x1e4c3b(0x2da)](_0x1e4c3b(0x261))[_0x1e4c3b(0x2da)](_0x1e4c3b(0x237))[_0x1e4c3b(0x243)](_0x1e4c3b(0x373)) === !![] || $(steps[x])[_0x1e4c3b(0x2da)](_0x1e4c3b(0x2cc))[_0x1e4c3b(0x243)]('radio-skip') === !![]) && (skip && selections['filter'](_0x2c889e => _0x2c889e['step'] === x)[_0x1e4c3b(0x200)] > 0x0 && (textareaLength === 0x0 && textInputLength === 0x0 && emailInputLength === 0x0 && checkboxInputLength === 0x0 && setTimeout(function() { next = !![], back = ![], nextStep(), selectionQuiz(); }, $(steps[x])[_0x1e4c3b(0x2da)]('[data-radio-delay]')[_0x1e4c3b(0x243)](_0x1e4c3b(0x30a))))) : $(steps[x])[_0x1e4c3b(0x2da)](_0x1e4c3b(0x237))[_0x1e4c3b(0x243)]('radio-skip') === !![] && (skip && (textareaLength === 0x0 && textInputLength === 0x0 && emailInputLength === 0x0 && checkboxInputLength === 0x0 && setTimeout(function() { next = !![], back = ![], nextStep(), selectionQuiz(); }, $(steps[x])['find'](_0x1e4c3b(0x2a0))['data'](_0x1e4c3b(0x30a)))))), inputFilled && fileFilled && numFilled && checkboxFilled && telFilled && radioFilled && emailFilled && domainAllowed && selectFilled && textareaFilled && passwordFilled && urlFilled ? enableBtn() : disableBtn(), andLogic(), cloneRemove(), cloneRemoveInput();
}

function displayErrorMessage() {
    const _0x4f329b = _0x2972cf;
    $(_0x4f329b(0x2c5))['hide'](), unfilledArr[_0x4f329b(0x200)] > 0x0 && unfilledArr[_0x4f329b(0x266)](function(_0x1465e6) {
        const _0x4e0fdd = _0x4f329b;
        $(_0x4e0fdd(0x2e3) + _0x1465e6[_0x4e0fdd(0x246)] + '\x22]')[_0x4e0fdd(0x20e)](_0x4e0fdd(0x2c5))[_0x4e0fdd(0x2d3)](), $('input[name=\x22' + _0x1465e6[_0x4e0fdd(0x246)] + '\x22]')[_0x4e0fdd(0x24e)]()['children'](_0x4e0fdd(0x2c5))[_0x4e0fdd(0x2d3)](), $(_0x4e0fdd(0x2ae) + _0x1465e6['input'] + '\x22]')[_0x4e0fdd(0x20e)](_0x4e0fdd(0x2c5))[_0x4e0fdd(0x2d3)](), $(_0x4e0fdd(0x340) + _0x1465e6[_0x4e0fdd(0x246)] + '\x22]')[_0x4e0fdd(0x20e)](_0x4e0fdd(0x2c5))[_0x4e0fdd(0x2d3)]();
    });
}

function resetInputErrorMessage(_0xda15d5) {
    const _0x2fcd85 = _0x2972cf;
    $(_0x2fcd85(0x2e3) + _0xda15d5 + '\x22]')[_0x2fcd85(0x20e)](_0x2fcd85(0x2c5))[_0x2fcd85(0x32d)](), $(_0x2fcd85(0x2e3) + _0xda15d5 + '\x22]')['parents']()[_0x2fcd85(0x310)](_0x2fcd85(0x2c5))['hide'](), $(_0x2fcd85(0x2ae) + _0xda15d5 + '\x22]')[_0x2fcd85(0x20e)](_0x2fcd85(0x2c5))[_0x2fcd85(0x32d)](), $(_0x2fcd85(0x340) + _0xda15d5 + '\x22]')[_0x2fcd85(0x20e)](_0x2fcd85(0x2c5))[_0x2fcd85(0x32d)]();
}

function increaseCurstep() {
    const _0x49d834 = _0x2972cf;
    countCard ? (curStep = curStep + 0x1, $(_0x49d834(0x205))[_0x49d834(0x2c8)](steps[_0x49d834(0x200)])) : $(steps[x])[_0x49d834(0x243)]('card') ? curStep = curStep + 0x0 : curStep = curStep + 0x1, $(_0x49d834(0x338))[_0x49d834(0x2c8)](curStep);
}

function decreaseCurstep() {
    const _0x52e50f = _0x2972cf;
    countCard ? (curStep = curStep - 0x1, $(_0x52e50f(0x205))[_0x52e50f(0x2c8)](steps[_0x52e50f(0x200)])) : $(steps[x])['data'](_0x52e50f(0x31a)) ? curStep = curStep - 0x0 : curStep = curStep - 0x1, $(_0x52e50f(0x338))['text'](curStep);
}
$(_0x2972cf(0x23e))['on'](_0x2972cf(0x2e7), function(_0x1aa0f1) {
    const _0x4e35b3 = _0x2972cf;
    $(this)[_0x4e35b3(0x243)](_0x4e35b3(0x31d)) && (redirectTo = $(this)[_0x4e35b3(0x243)](_0x4e35b3(0x31d))), !$(this)[_0x4e35b3(0x243)](_0x4e35b3(0x359)) && (newTab = $(this)['data'](_0x4e35b3(0x359))), successCard = $(this)[_0x4e35b3(0x243)]('success'), _0x1aa0f1['preventDefault'](), _0x1aa0f1[_0x4e35b3(0x201)](), logicExtra && ($(this)[_0x4e35b3(0x375)](_0x4e35b3(0x215), !![]), $(steps)[_0x4e35b3(0x2da)](_0x4e35b3(0x239))[_0x4e35b3(0x375)](_0x4e35b3(0x2aa), ![])), localStorage[_0x4e35b3(0x1fa)]('filledInput'), fill ? ($(this)[_0x4e35b3(0x243)](_0x4e35b3(0x36e)) ? (console[_0x4e35b3(0x25c)]($(this)[_0x4e35b3(0x243)](_0x4e35b3(0x36e))), $(this)[_0x4e35b3(0x2c8)]($(this)['data']('wait'))) : $(this)[_0x4e35b3(0x29b)](_0x4e35b3(0x244))[_0x4e35b3(0x2c8)](_0x4e35b3(0x244)), $(_0x4e35b3(0x346))[_0x4e35b3(0x30e)](), $(_0x4e35b3(0x209))[_0x4e35b3(0x200)] > 0x0 && (grecaptcha['getResponse']()['length'] === 0x0 && (form[_0x4e35b3(0x2da)](_0x4e35b3(0x23e))[_0x4e35b3(0x2c8)](oldSubmitText), form[_0x4e35b3(0x2da)](_0x4e35b3(0x23e))[_0x4e35b3(0x29b)](oldSubmitText))), customError && $(_0x4e35b3(0x2c5))[_0x4e35b3(0x32d)]()) : customError && displayErrorMessage();
});

function nextStep() {
    const _0x414227 = _0x2972cf;
    customError ? ($(_0x414227(0x2c5))[_0x414227(0x32d)](), fill ? (x++, increaseCurstep(), progress = x, x <= steps[_0x414227(0x200)] - 0x1 && (updateStep(), memory && saveFilledInput())) : displayErrorMessage()) : (x++, increaseCurstep(), x > progress && (progress = x), x <= steps['length'] - 0x1 && (updateStep(), memory && saveFilledInput())), andLogic();
}

function backStep() {
    const _0x37f089 = _0x2972cf;
    customError && $(_0x37f089(0x2c5))[_0x37f089(0x32d)](), decreaseCurstep(), x > 0x0 && ($(progressbar[x])['removeClass'](_0x37f089(0x2b6)), selections['filter'](_0x3bbe56 => _0x3bbe56[_0x37f089(0x32c)] === x)[_0x37f089(0x200)] > 0x0 ? x = parseInt(getSafe(() => selections[_0x37f089(0x245)](_0x3ba3fe => _0x3ba3fe[_0x37f089(0x32c)] === x)[0x0][_0x37f089(0x365)])) : x--, updateStep()), ($(steps[x])[_0x37f089(0x2da)]('[data-radio-skip]:visible')[_0x37f089(0x243)](_0x37f089(0x373)) === !![] || $(steps[x])['find'](_0x37f089(0x261))['find'](_0x37f089(0x237))[_0x37f089(0x243)](_0x37f089(0x373)) === !![] || $(steps[x])['find'](_0x37f089(0x2cc))[_0x37f089(0x243)](_0x37f089(0x373)) === !![]) && (all_data = all_data[_0x37f089(0x245)](_0x45dc17 => _0x45dc17[_0x37f089(0x203)] !== $(steps[x])[_0x37f089(0x2da)](_0x37f089(0x2bb))['attr'](_0x37f089(0x295))), $('[data-input-field=\x22' + $(steps[x])['find']('input[type=\x22radio\x22]:checked')[_0x37f089(0x335)]('name') + '\x22]')[_0x37f089(0x32d)](), $(steps[x])['find'](_0x37f089(0x2a4))[_0x37f089(0x375)](_0x37f089(0x207), ![]), $(steps[x])[_0x37f089(0x2da)](_0x37f089(0x31b))[_0x37f089(0x22c)](_0x37f089(0x2e4)), validation());
}
weightedSelectionRange && $(_0x2972cf(0x202))[_0x2972cf(0x22f)](function() {
    const _0x24ebf4 = _0x2972cf;
    $(this)[_0x24ebf4(0x23f)](_0x24ebf4(0x27f) + $(this)[_0x24ebf4(0x243)](_0x24ebf4(0x249)) + _0x24ebf4(0x27a));
});

function selectionQuiz() {
    const _0x5659c8 = _0x2972cf;
    if ($(this)['find'](_0x5659c8(0x232))) {
        $('[data-selection]')[_0x5659c8(0x32d)](), $(_0x5659c8(0x22a))[_0x5659c8(0x32d)]();
        if (weightedSelection) {
            selTotal = 0x0, selArr[_0x5659c8(0x266)](function(_0x3eab91) {
                const _0x4b10f1 = _0x5659c8;
                selTotal = selTotal + _0x3eab91[_0x4b10f1(0x28e)];
            }), $(_0x5659c8(0x1ff))[_0x5659c8(0x2c8)](selTotal);
            if ($(_0x5659c8(0x325) + selTotal + '\x22]')[_0x5659c8(0x200)] > 0x0) $(_0x5659c8(0x325) + selTotal + '\x22]')['fadeIn']();
            else $(_0x5659c8(0x326) + selTotal + ')') ? $(_0x5659c8(0x326) + selTotal + ')')[_0x5659c8(0x345)](_0x5659c8(0x202))['eq'](0x0)['show']() : $(_0x5659c8(0x364))['fadeIn']();
        } else {
            let _0xd1a8a3 = -0x1;
            $('[data-selection]')[_0x5659c8(0x22f)](function(_0x104c2d) {
                const _0x91d1cb = _0x5659c8;
                $($(_0x91d1cb(0x202))[_0x104c2d])[_0x91d1cb(0x243)](_0x91d1cb(0x249))['includes'](selString[_0x91d1cb(0x24f)]()) && (_0xd1a8a3 = _0x104c2d);
            }), _0xd1a8a3 > -0x1 ? $($(_0x5659c8(0x202))[_0xd1a8a3])[_0x5659c8(0x2d3)]() : $(_0x5659c8(0x364))[_0x5659c8(0x2d3)]();
        }
    }
}

function triggerInputAllData() {
    const _0x1e1802 = _0x2972cf;
    if (savedFilledInput && memory) savedFilledInput['forEach'](_0x2ba83b => {
        const _0x5ee5b2 = _0x14da;
        var _0xbafc20 = $(_0x5ee5b2(0x2e3) + _0x2ba83b['inputName'] + _0x5ee5b2(0x20c) + _0x2ba83b[_0x5ee5b2(0x274)] + _0x5ee5b2(0x2fd)),
            _0x57fa2a = $(_0x5ee5b2(0x2e3) + _0x2ba83b[_0x5ee5b2(0x263)] + _0x5ee5b2(0x2fd)),
            _0x4d2a75 = $('textarea[name=\x22' + _0x2ba83b['inputName'] + _0x5ee5b2(0x2fd)),
            _0x3635d5 = $(_0x5ee5b2(0x379) + _0x2ba83b[_0x5ee5b2(0x263)] + '\x22]'),
            _0x50194a = $(_0x5ee5b2(0x2d9) + _0x2ba83b[_0x5ee5b2(0x263)] + _0x5ee5b2(0x20c) + _0x2ba83b[_0x5ee5b2(0x274)] + _0x5ee5b2(0x2fd));
        if (_0xbafc20['attr']('type') !== 'file') {
            if (_0xbafc20[_0x5ee5b2(0x335)]('type') === 'radio' && !_0xbafc20[_0x5ee5b2(0x24e)]('[data-radio-skip]')['data']('radio-skip')) _0xbafc20['click'](), _0xbafc20[_0x5ee5b2(0x20e)]('.w-radio-input')[_0x5ee5b2(0x2b8)](_0x5ee5b2(0x2e4)), _0xbafc20[_0x5ee5b2(0x21f)](_0x5ee5b2(0x246));
            else _0x2ba83b['value'] === 'on' ? (_0x57fa2a[_0x5ee5b2(0x2e7)](), _0x57fa2a[_0x5ee5b2(0x20e)]('.w-checkbox-input')[_0x5ee5b2(0x2b8)](_0x5ee5b2(0x2e4)), _0x57fa2a['trigger']('input')) : (_0x57fa2a[_0x5ee5b2(0x29b)](_0x2ba83b['value']), _0x4d2a75[_0x5ee5b2(0x29b)](_0x2ba83b['value']), $(_0x5ee5b2(0x24d))[_0x5ee5b2(0x2da)](_0x5ee5b2(0x323) + _0x2ba83b[_0x5ee5b2(0x274)] + '\x22]')[_0x5ee5b2(0x375)]('selected', !![]), _0x57fa2a[_0x5ee5b2(0x21f)](_0x5ee5b2(0x246)), _0x57fa2a['trigger'](_0x5ee5b2(0x2a5)));
            const _0x301ef3 = _0x50194a['data'](_0x5ee5b2(0x31e)),
                _0x14ac8b = _0x3635d5['data']('click-addclass');
            _0x50194a[_0x5ee5b2(0x345)]()[_0x5ee5b2(0x2b8)](_0x301ef3), _0x3635d5[_0x5ee5b2(0x345)]()[_0x5ee5b2(0x2b8)](_0x14ac8b);
        }
    });
    else _params && (getParams(), searchQ[_0x1e1802(0x266)](_0x3ee946 => {
        const _0x4321a3 = _0x1e1802;
        if ($(_0x4321a3(0x2e3) + _0x3ee946[_0x4321a3(0x263)] + _0x4321a3(0x20c) + _0x3ee946[_0x4321a3(0x274)] + _0x4321a3(0x2fd))['attr'](_0x4321a3(0x337)) !== _0x4321a3(0x235)) {
            if ($(_0x4321a3(0x2e3) + _0x3ee946[_0x4321a3(0x272)] + _0x4321a3(0x20c) + _0x3ee946[_0x4321a3(0x29b)] + _0x4321a3(0x2fd))[_0x4321a3(0x335)](_0x4321a3(0x337)) === 'radio') $('input[name=\x22' + _0x3ee946['key'] + _0x4321a3(0x20c) + _0x3ee946[_0x4321a3(0x29b)] + _0x4321a3(0x2fd))[_0x4321a3(0x2e7)](), $('input[name=\x22' + _0x3ee946[_0x4321a3(0x272)] + '\x22][value=\x22' + _0x3ee946[_0x4321a3(0x29b)] + _0x4321a3(0x2fd))[_0x4321a3(0x20e)](_0x4321a3(0x217))['addClass'](_0x4321a3(0x2e4)), $(_0x4321a3(0x2e3) + _0x3ee946[_0x4321a3(0x272)] + '\x22][value=\x22' + _0x3ee946[_0x4321a3(0x29b)] + _0x4321a3(0x2fd))[_0x4321a3(0x21f)](_0x4321a3(0x246));
            else _0x3ee946[_0x4321a3(0x29b)] === 'on' ? ($(_0x4321a3(0x2e3) + _0x3ee946[_0x4321a3(0x272)] + _0x4321a3(0x2fd))['click'](), $(_0x4321a3(0x2e3) + _0x3ee946[_0x4321a3(0x272)] + '\x22]:not([data-prefill=\x22false\x22])')['siblings'](_0x4321a3(0x224))[_0x4321a3(0x2b8)]('w--redirected-checked'), $(_0x4321a3(0x2e3) + _0x3ee946[_0x4321a3(0x272)] + '\x22]')[_0x4321a3(0x21f)](_0x4321a3(0x246))) : ($('input[name=\x22' + _0x3ee946[_0x4321a3(0x272)] + _0x4321a3(0x2fd))['val'](_0x3ee946['val']), $(_0x4321a3(0x2ae) + _0x3ee946[_0x4321a3(0x272)] + _0x4321a3(0x2fd))[_0x4321a3(0x29b)](_0x3ee946[_0x4321a3(0x29b)]), $(_0x4321a3(0x340) + _0x3ee946[_0x4321a3(0x272)] + _0x4321a3(0x2fd))['find'](_0x4321a3(0x323) + _0x3ee946[_0x4321a3(0x29b)] + '\x22]')['prop'](_0x4321a3(0x28e), !![]), $('input[name=\x22' + _0x3ee946[_0x4321a3(0x272)] + '\x22]:not([data-prefill=\x22false\x22])')[_0x4321a3(0x21f)](_0x4321a3(0x246)), $(_0x4321a3(0x2e3) + _0x3ee946[_0x4321a3(0x272)] + _0x4321a3(0x2fd))[_0x4321a3(0x21f)]('change'));
        }
    }));
}
$('[data-form=\x22next-btn\x22]')['on'](_0x2972cf(0x2e7), function() { next = !![], back = ![], nextStep(), selectionQuiz(); }), $(_0x2972cf(0x20b))['on'](_0x2972cf(0x2e7), function() { next = ![], back = !![], backStep(); }), $(steps)[_0x2972cf(0x2da)](_0x2972cf(0x239))[_0x2972cf(0x214)](_0x2972cf(0x29c))['on']('input', function(_0x2c63cd) { validation(), andLogic(), addClickClass(); }), $(steps)[_0x2972cf(0x2da)](_0x2972cf(0x2a4))['on'](_0x2972cf(0x2e7), function() { skip = !![], validation(), addClickClass(); });
$(_0x2972cf(0x376))[_0x2972cf(0x243)]('clickable-all') ? $('[data-form=\x22custom-progress-indicator\x22]')[_0x2972cf(0x22c)](_0x2972cf(0x273)) : $(_0x2972cf(0x356))['addClass'](_0x2972cf(0x273));

function clickableIndicator() {
    const _0x29d950 = _0x2972cf;
    $(_0x29d950(0x336))[_0x29d950(0x243)]('clickable') && ($(_0x29d950(0x2df))[_0x29d950(0x22c)](_0x29d950(0x2b6)), $('[data-clickable]')['data']('clickable-all') ? (x = $(this)[_0x29d950(0x21c)](), updateStep()) : $(this)[_0x29d950(0x21c)]() <= progress && (x = $(this)[_0x29d950(0x21c)](), updateStep())), $(_0x29d950(0x338))['text'](x + 0x1);
}
$(_0x2972cf(0x356))['on']('click', clickableIndicator);
$(_0x2972cf(0x346))['data'](_0x2972cf(0x279)) && ($('[data-go-to]')['each'](function() {
    const _0x1e9123 = _0x2972cf;
    $(this)['append'](_0x1e9123(0x32e), $(this)[_0x1e9123(0x243)](_0x1e9123(0x29d)));
}), $(_0x2972cf(0x2e2))[_0x2972cf(0x22f)](function() {
    const _0x389b30 = _0x2972cf;
    $(this)[_0x389b30(0x23f)](_0x389b30(0x2cb), $(this)[_0x389b30(0x243)]('answer'));
}));

function resetFormly() {
    const _0x11edc8 = _0x2972cf;
    $(_0x11edc8(0x346))[_0x11edc8(0x21f)](_0x11edc8(0x276)), $('[data-form=\x22multistep\x22]')[_0x11edc8(0x24e)]()[_0x11edc8(0x2da)](_0x11edc8(0x342))[_0x11edc8(0x32d)](), x = 0x0, updateStep(), $(_0x11edc8(0x346))[_0x11edc8(0x219)](), $('[data-form=\x22submit-btn\x22]')['text'](oldSubmitText), $(_0x11edc8(0x23e))[_0x11edc8(0x29b)](oldSubmitText), $('[data-text=\x22current-step\x22]')['text'](0x1), $('[data-form=\x22multistep\x22]')[_0x11edc8(0x2da)](_0x11edc8(0x2a9))[_0x11edc8(0x20e)]('.w-checkbox-input')[_0x11edc8(0x22c)](_0x11edc8(0x2e4));
}
$(document)[_0x2972cf(0x2d0)](function(_0x2461bc, _0x2dc4f5, _0x5258c1) {
    const _0x451f81 = _0x2972cf;
    if (_0x5258c1[_0x451f81(0x26b)]['includes']('https://webflow.com/api/v1/form/')) {
        const _0x5afd0a = _0x2dc4f5[_0x451f81(0x283)] === 0xc8,
            _0x204c94 = _0x451f81(0x206);
        redirectTo && _0x5afd0a && (newTab ? window[_0x451f81(0x316)](redirectTo, _0x451f81(0x227)) : setTimeout(() => {
            const _0x1a9f3c = _0x451f81;
            location[_0x1a9f3c(0x347)] = redirectTo;
        }, redirectDelay)), _0x5afd0a && successCard !== '' && $(_0x451f81(0x29a) + successCard + '\x22]')['fadeIn'](), _0x5afd0a && formReset && setTimeout(() => { resetFormly(); }, resetDelay), !_0x5afd0a && ($(_0x451f81(0x23e))['val'](_0x451f81(0x244)), $(_0x451f81(0x23e))[_0x451f81(0x2c8)](_0x451f81(0x244)));
    }
}), $(_0x2972cf(0x29f))['on'](_0x2972cf(0x2e7), function() {
    const _0x4f778f = _0x2972cf;
    var _0x2b078a = $(this)[_0x4f778f(0x345)]()[_0x4f778f(0x2da)](_0x4f778f(0x236))['data'](_0x4f778f(0x252));
    setTimeout(function() {
        const _0x4875a6 = _0x4f778f;
        $(_0x4875a6(0x2e3) + _0x2b078a + '\x22]')['focus']();
    }, 0x64), back = !![], x = $(this)[_0x4f778f(0x243)](_0x4f778f(0x21d)) - 0x1, updateStep(), countCard ? (curStep = x + 0x1, $('[data-text=\x22total-steps\x22]')[_0x4f778f(0x2c8)](steps['length'])) : $(steps[x])[_0x4f778f(0x243)]('card') ? curStep = x + 0x0 : curStep = x + 0x1, $('[data-text=\x22current-step\x22]')[_0x4f778f(0x2c8)](curStep), back = ![];
}), $(_0x2972cf(0x2b4))['on']('click', function() {
    const _0x3f4bb1 = _0x2972cf;
    $(_0x3f4bb1(0x346))[_0x3f4bb1(0x21f)](_0x3f4bb1(0x276));
    let _0x491668 = $(this);
    $(this)[_0x3f4bb1(0x2c8)](_0x3f4bb1(0x244)), setTimeout(function() {
        const _0x4395bf = _0x3f4bb1;
        $(_0x491668)['text'](oldResetText), $(_0x491668)[_0x4395bf(0x24e)](_0x4395bf(0x342))[_0x4395bf(0x32d)](), x = 0x0, updateStep(), $(_0x4395bf(0x346))[_0x4395bf(0x219)](), $(_0x4395bf(0x23e))['text'](oldSubmitText), $('[data-form=\x22submit-btn\x22]')[_0x4395bf(0x29b)](oldSubmitText), $(_0x491668)[_0x4395bf(0x29b)](oldSubmitText), $(_0x4395bf(0x338))[_0x4395bf(0x2c8)](0x1), $(_0x4395bf(0x346))['find']('input:checkbox')[_0x4395bf(0x20e)]('.w-checkbox-input')[_0x4395bf(0x22c)]('w--redirected-checked');
    }, resetDelay);
}), $(_0x2972cf(0x2dd))['on'](_0x2972cf(0x298), function(_0x17e403) {
    const _0x33a3bf = _0x2972cf;
    if (_0x17e403[_0x33a3bf(0x20d)] === 0xd) {
        _0x17e403[_0x33a3bf(0x2a1)](), _0x17e403['stopPropagation']();
        if ($(steps[x])[_0x33a3bf(0x2da)](_0x33a3bf(0x22b))['is'](':focus')) $(steps[x])[_0x33a3bf(0x2da)](_0x33a3bf(0x225))[_0x33a3bf(0x29b)]($(steps[x])[_0x33a3bf(0x2da)](_0x33a3bf(0x225))['val']() + '\x0a');
        else $(_0x33a3bf(0x2c1))[_0x33a3bf(0x243)](_0x33a3bf(0x230)) && fill && (totalSteps > curStep && $('[data-form=\x22next-btn\x22]')[0x0]['click']());
    }
}), $(_0x2972cf(0x2dd))[_0x2972cf(0x2f3)](function(_0x31f06d) {
    const _0x30ccd9 = _0x2972cf;
    (_0x31f06d[_0x30ccd9(0x1fb)] || _0x31f06d['ctrlKey']) && _0x31f06d['keyCode'] == 0xd && (x >= steps['length'] - 0x1 && fill ? $(steps[x])['find'](_0x30ccd9(0x213))[_0x30ccd9(0x2e7)]() : (_0x31f06d[_0x30ccd9(0x2a1)](), _0x31f06d[_0x30ccd9(0x201)]()));
}), $(_0x2972cf(0x346))[_0x2972cf(0x2da)](_0x2972cf(0x239))['on'](_0x2972cf(0x2a5), function() {
    const _0x3de496 = _0x2972cf;
    all_data = all_data[_0x3de496(0x245)](_0x361f24 => _0x361f24[_0x3de496(0x203)] !== $(this)[_0x3de496(0x335)](_0x3de496(0x295))), $(this)[_0x3de496(0x335)](_0x3de496(0x337)) === _0x3de496(0x26d) ? $(this)['is'](_0x3de496(0x268)) ? all_data[_0x3de496(0x2d1)]({ 'field': $(this)['attr'](_0x3de496(0x295)), 'value': $(this)[_0x3de496(0x20e)](_0x3de496(0x2ba))[_0x3de496(0x2c8)]() }) : $(_0x3de496(0x328) + $(this)['attr'](_0x3de496(0x295)) + '\x22]')['hide']() : (all_data[_0x3de496(0x2d1)]({ 'field': $(this)['attr'](_0x3de496(0x295)), 'value': $(this)['val']() }), $(this)[_0x3de496(0x29b)]() !== '' && resetInputErrorMessage($(this)[_0x3de496(0x335)](_0x3de496(0x295)))), all_data[_0x3de496(0x266)](function(_0x599058) {
        const _0x5d0bbc = _0x3de496;
        $('[data-input-field=\x22' + _0x599058['field'] + '\x22]')[_0x5d0bbc(0x219)](), $(_0x5d0bbc(0x328) + _0x599058['field'] + '\x22]')[_0x5d0bbc(0x2c8)](_0x599058[_0x5d0bbc(0x274)]);
    });
}), $('[data-form=\x22multistep\x22]')[_0x2972cf(0x2da)]('textarea')['on'](_0x2972cf(0x2a5), function() {
    const _0x3df8ff = _0x2972cf;
    $(this)[_0x3df8ff(0x29b)]() !== '' && resetInputErrorMessage($(this)[_0x3df8ff(0x335)](_0x3df8ff(0x295))), all_data = all_data[_0x3df8ff(0x245)](_0x383e5e => _0x383e5e[_0x3df8ff(0x203)] !== $(this)[_0x3df8ff(0x335)](_0x3df8ff(0x295))), all_data['push']({ 'field': $(this)[_0x3df8ff(0x335)]('name'), 'value': $(this)[_0x3df8ff(0x29b)]() }), all_data[_0x3df8ff(0x266)](function(_0x288601) {
        const _0xb5da22 = _0x3df8ff;
        $(_0xb5da22(0x328) + _0x288601[_0xb5da22(0x203)] + '\x22]')[_0xb5da22(0x219)](), $(_0xb5da22(0x328) + _0x288601[_0xb5da22(0x203)] + '\x22]')[_0xb5da22(0x2c8)](_0x288601['value']);
    });
}), $(_0x2972cf(0x346))[_0x2972cf(0x2da)](_0x2972cf(0x267))['on']('change', function() {
    const _0x4c6be6 = _0x2972cf;
    $(this)['val']() !== '' && resetInputErrorMessage($(this)[_0x4c6be6(0x335)](_0x4c6be6(0x295)));
    var _0x11959e = $(this)[_0x4c6be6(0x243)](_0x4c6be6(0x2f1));
    all_data = all_data[_0x4c6be6(0x245)](_0x263f14 => _0x263f14[_0x4c6be6(0x203)] !== $(this)[_0x4c6be6(0x335)](_0x4c6be6(0x295))), all_data[_0x4c6be6(0x2d1)]({ 'field': $(this)['attr'](_0x4c6be6(0x295)), 'value': _0x11959e ? $(this)[_0x4c6be6(0x2da)](_0x4c6be6(0x311))[_0x4c6be6(0x2c8)]() : $(this)[_0x4c6be6(0x29b)]() }), all_data['forEach'](function(_0x1c5609) {
        const _0x3d146e = _0x4c6be6;
        $(_0x3d146e(0x328) + _0x1c5609['field'] + '\x22]')['show'](), $(_0x3d146e(0x328) + _0x1c5609[_0x3d146e(0x203)] + '\x22]')['text'](_0x1c5609['value']);
    });
}), updateStep(), triggerInputAllData(), $('[data-cms-select=cms]')[_0x2972cf(0x22f)](function() {
    const _0x2e74f7 = _0x2972cf,
        _0x2ed45d = $(this)['find']('[data-cms-select=text]'),
        _0x99f3 = [];
    _0x2ed45d[_0x2e74f7(0x22f)](function() {
        const _0x263b36 = _0x2e74f7;
        _0x99f3[_0x263b36(0x2d1)]($(this)['text']()[_0x263b36(0x2bc)]());
    });
    const _0x295c3e = $(this)['siblings'](_0x2e74f7(0x258));
    $['each'](_0x99f3, function(_0x4e18c9, _0x3954e3) {
        const _0x4d195a = _0x2e74f7,
            _0x102c32 = $(_0x4d195a(0x2b5))[_0x4d195a(0x29b)](_0x3954e3)[_0x4d195a(0x2c8)](_0x3954e3);
        _0x295c3e[_0x4d195a(0x23f)](_0x102c32);
    });
});

function cloneRemove() {
    const _0x3a49ff = _0x2972cf;
    $('[data-clone-wrapper]')[_0x3a49ff(0x22f)](function() {
        const _0x488102 = _0x3a49ff;
        $(this)[_0x488102(0x2da)](_0x488102(0x30c))[_0x488102(0x200)] < 0x2 ? $(this)[_0x488102(0x2da)](_0x488102(0x321))[_0x488102(0x32d)]() : $(this)[_0x488102(0x2da)]('[data-form=\x22remove-clone\x22]')[_0x488102(0x219)]();
    });
}

function cloneRemoveInput() {
    const _0x5cc390 = _0x2972cf;
    $(_0x5cc390(0x210))[_0x5cc390(0x22f)](function() {
        const _0x2dc436 = _0x5cc390;
        console[_0x2dc436(0x25c)]($(this)[_0x2dc436(0x2da)]('[data-clone-input]')['length']), $(this)['find'](_0x2dc436(0x231))[_0x2dc436(0x200)] < 0x2 ? $(this)[_0x2dc436(0x2da)](_0x2dc436(0x2e6))[_0x2dc436(0x32d)]() : $(this)[_0x2dc436(0x2da)](_0x2dc436(0x2e6))[_0x2dc436(0x219)]();
    });
}
$(_0x2972cf(0x321))['on']('click', function() {
    const _0x8f221c = _0x2972cf,
        _0x4f7410 = $(this)['parents'](_0x8f221c(0x30c))[_0x8f221c(0x200)] > 0x0 ? $(this)[_0x8f221c(0x24e)](_0x8f221c(0x30c))[_0x8f221c(0x21c)]() : $(this)[_0x8f221c(0x24e)](_0x8f221c(0x299))['index'](),
        _0x6aacaf = $(this)[_0x8f221c(0x24e)](_0x8f221c(0x30c))[_0x8f221c(0x200)] > 0x0 ? $(this)[_0x8f221c(0x24e)](_0x8f221c(0x30c))[_0x8f221c(0x243)](_0x8f221c(0x233)) : $(this)[_0x8f221c(0x24e)](_0x8f221c(0x299))[_0x8f221c(0x243)](_0x8f221c(0x307));
    $(_0x8f221c(0x262) + _0x6aacaf + '\x22]')['eq'](_0x4f7410)['remove'](), $(_0x8f221c(0x290) + _0x6aacaf + '\x22]')['eq'](_0x4f7410)[_0x8f221c(0x265)](), cloneRemove();
    let _0x1c8f90 = $('[data-add-new=\x22' + _0x6aacaf + '\x22]')[_0x8f221c(0x243)]('add-new-limit'),
        _0x121630 = $('[data-clone=\x22' + _0x6aacaf + '\x22]')['length'];
    console[_0x8f221c(0x25c)](_0x121630, _0x1c8f90), _0x121630 < _0x1c8f90 && (console[_0x8f221c(0x25c)](_0x8f221c(0x219)), $(_0x8f221c(0x238) + _0x6aacaf + '\x22]')[_0x8f221c(0x219)]()), validation();
}), $(_0x2972cf(0x2e6))['on'](_0x2972cf(0x2e7), function() {
    const _0x5d67e0 = _0x2972cf;
    let _0x475729 = $(this)[_0x5d67e0(0x20e)]()['attr']('name'),
        _0x83cb75 = $(this)[_0x5d67e0(0x24e)](_0x5d67e0(0x231))[_0x5d67e0(0x243)](_0x5d67e0(0x296));
    $(this)[_0x5d67e0(0x345)](_0x5d67e0(0x231))['remove'](), $('[data-input-field=\x22' + _0x475729 + '\x22]')[_0x5d67e0(0x345)](_0x5d67e0(0x314))['remove']();
    let _0x3bbacc = $(_0x5d67e0(0x25e) + _0x83cb75 + '\x22]')[_0x5d67e0(0x243)](_0x5d67e0(0x2c3)),
        _0xea1ef = $('[data-clone-input=\x22' + _0x83cb75 + '\x22]')[_0x5d67e0(0x200)];
    _0xea1ef < _0x3bbacc && $(_0x5d67e0(0x25e) + _0x83cb75 + '\x22]')['show'](), validation();
}), $(_0x2972cf(0x28f))['on'](_0x2972cf(0x2e7), function() {
    const _0x200c47 = _0x2972cf;
    let _0x13e967 = $(this)['data'](_0x200c47(0x313)),
        _0x1d811d = $(this)['data']('add-new-limit');
    var _0x55dbbc = $(_0x200c47(0x262) + _0x13e967 + '\x22]')['eq'](0x0)[_0x200c47(0x233)](!![]),
        _0x196282 = $('[data-display=\x22' + _0x13e967 + '\x22]')['eq'](0x0)[_0x200c47(0x233)](!![]);
    let _0x48ddce = '';
    $(this)[_0x200c47(0x2da)](_0x200c47(0x321))[_0x200c47(0x219)](), cloneRemove(), _0x55dbbc[_0x200c47(0x2da)]('[data-clone-input]')[_0x200c47(0x2da)](_0x200c47(0x246))[_0x200c47(0x29b)](''), _0x55dbbc[_0x200c47(0x2da)](_0x200c47(0x231))[_0x200c47(0x2da)](_0x200c47(0x267))[_0x200c47(0x29b)](''), _0x55dbbc[_0x200c47(0x2da)]('[data-clone-input]')['find'](_0x200c47(0x22b))['val'](''), _0x55dbbc[_0x200c47(0x2da)](_0x200c47(0x231))[_0x200c47(0x214)](':first')[_0x200c47(0x265)](), _0x55dbbc['find'](_0x200c47(0x231))['find'](_0x200c47(0x23b))['click'](), _0x196282[_0x200c47(0x2da)](_0x200c47(0x314))[_0x200c47(0x214)](':first')['remove'](), _0x55dbbc['find'](_0x200c47(0x246))[_0x200c47(0x22f)](function() {
        const _0xd362b3 = _0x200c47;
        if ($(this)[_0xd362b3(0x26f)](_0xd362b3(0x231))[_0xd362b3(0x200)] > 0x0) {
            let _0x45b17c = 0x0;
            const _0x13088b = $(this)[_0xd362b3(0x26f)](_0xd362b3(0x231))[_0xd362b3(0x243)]('clone-input');
            $('[data-clone-input=\x22' + _0x13088b + '\x22]\x20input')[_0xd362b3(0x22f)](function() {
                const _0x4a20cb = _0xd362b3,
                    _0x1609b4 = $(this)[_0x4a20cb(0x335)]('name');
                if (_0x1609b4 && _0x1609b4[_0x4a20cb(0x2c9)](_0x4a20cb(0x250))) { const _0x38832b = parseInt(_0x1609b4['split']('-')[0x1]);!isNaN(_0x38832b) && _0x38832b > _0x45b17c && (_0x45b17c = _0x38832b); }
            }), _0x45b17c++, _0x48ddce = this[_0xd362b3(0x295)] + '-' + _0x45b17c;
        } else _0x48ddce = this[_0xd362b3(0x295)] + '-' + (parseInt($('[data-clone=\x22' + _0x13e967 + '\x22]')['last']()[_0xd362b3(0x21c)]()) + 0x1);
        $(this)[_0xd362b3(0x29b)](''), $(this)['attr']('name', _0x48ddce), $(this)[_0xd362b3(0x335)]('data-name', _0x48ddce);
    }), _0x55dbbc[_0x200c47(0x2da)]('textarea')['each'](function() {
        const _0x262496 = _0x200c47;
        if ($(this)['closest']('[data-clone-input]')[_0x262496(0x200)] > 0x0) {
            let _0x9beb6f = 0x0;
            const _0x2d14ab = $(this)[_0x262496(0x26f)](_0x262496(0x231))[_0x262496(0x243)](_0x262496(0x296));
            $(_0x262496(0x234) + _0x2d14ab + _0x262496(0x377))[_0x262496(0x22f)](function() {
                const _0x3600cf = _0x262496,
                    _0x52fd03 = $(this)['attr']('name');
                if (_0x52fd03 && _0x52fd03[_0x3600cf(0x2c9)](_0x3600cf(0x250))) { const _0x5721f7 = parseInt(_0x52fd03[_0x3600cf(0x360)]('-')[0x1]);!isNaN(_0x5721f7) && _0x5721f7 > _0x9beb6f && (_0x9beb6f = _0x5721f7); }
            }), _0x9beb6f++, _0x48ddce = this[_0x262496(0x295)] + '-' + _0x9beb6f;
        } else _0x48ddce = this[_0x262496(0x295)] + '-' + (parseInt($(_0x262496(0x262) + _0x13e967 + '\x22]')['last']()['index']()) + 0x1);
        $(this)[_0x262496(0x29b)](''), $(this)[_0x262496(0x335)](_0x262496(0x295), _0x48ddce), $(this)[_0x262496(0x335)]('data-name', _0x48ddce);
    }), _0x55dbbc[_0x200c47(0x2da)](_0x200c47(0x267))[_0x200c47(0x22f)](function() {
        const _0x54169f = _0x200c47;
        if ($(this)[_0x54169f(0x26f)]('[data-clone-input]')[_0x54169f(0x200)] > 0x0) {
            let _0x5ebba4 = 0x0;
            const _0x5278ed = $(this)['closest']('[data-clone-input]')[_0x54169f(0x243)](_0x54169f(0x296));
            $('[data-clone-input=\x22' + _0x5278ed + _0x54169f(0x358))[_0x54169f(0x22f)](function() {
                const _0x14b9d0 = _0x54169f,
                    _0x8b7fcd = $(this)[_0x14b9d0(0x335)](_0x14b9d0(0x295));
                if (_0x8b7fcd && _0x8b7fcd[_0x14b9d0(0x2c9)]('relationship-')) { const _0x3bc260 = parseInt(_0x8b7fcd[_0x14b9d0(0x360)]('-')[0x1]);!isNaN(_0x3bc260) && _0x3bc260 > _0x5ebba4 && (_0x5ebba4 = _0x3bc260); }
            }), _0x5ebba4++, _0x48ddce = this[_0x54169f(0x295)] + '-' + _0x5ebba4;
        } else _0x48ddce = this[_0x54169f(0x295)] + '-' + (parseInt($(_0x54169f(0x262) + _0x13e967 + '\x22]')['last']()['index']()) + 0x1);
        $(this)[_0x54169f(0x29b)](''), $(this)[_0x54169f(0x335)](_0x54169f(0x295), _0x48ddce), $(this)['attr']('data-name', _0x48ddce);
    }), _0x196282[_0x200c47(0x2da)](_0x200c47(0x236))[_0x200c47(0x22f)](function() {
        const _0x26a03d = _0x200c47;
        if ($(this)[_0x26a03d(0x243)]('input-field')) {
            let _0x14178d = 0x0;
            const _0x570f1a = $(this)[_0x26a03d(0x243)](_0x26a03d(0x252))[_0x26a03d(0x360)]('-')[0x0];
            $(_0x26a03d(0x290) + _0x13e967 + _0x26a03d(0x2ff) + _0x570f1a + '\x22]')['each'](function() {
                const _0x408191 = _0x26a03d,
                    _0x117a72 = $(this)['attr'](_0x408191(0x2eb)),
                    _0x1c8f92 = parseInt(_0x117a72['split']('-')[0x1]);
                !isNaN(_0x1c8f92) && _0x1c8f92 > _0x14178d && (_0x14178d = _0x1c8f92);
            }), _0x14178d++;
            const _0x10a065 = _0x570f1a + '-' + _0x14178d;
            $(this)[_0x26a03d(0x335)](_0x26a03d(0x2eb), _0x10a065);
        }
    }), $('[data-clone-wrapper=\x22' + _0x13e967 + '\x22]')[_0x200c47(0x23f)](_0x55dbbc), $(_0x200c47(0x354) + _0x13e967 + '\x22]')[_0x200c47(0x23f)](_0x196282), $(_0x200c47(0x2ce) + _0x13e967 + '\x22]')['each'](function() {
        const _0x25d370 = _0x200c47;
        $(this)[_0x25d370(0x2c8)]($(this)[_0x25d370(0x24e)](_0x25d370(0x262) + _0x13e967 + '\x22]')[_0x25d370(0x21c)]() + 0x1);
    }), $(_0x200c47(0x223) + _0x13e967 + '\x22]')['each'](function() {
        const _0x118603 = _0x200c47;
        $(this)[_0x118603(0x2c8)]($(this)['parents']('[data-display=\x22' + _0x13e967 + '\x22]')['index']() + 0x1);
    });
    let _0x245b38 = $(_0x200c47(0x331) + _0x13e967 + _0x200c47(0x2e0) + _0x13e967 + '\x22]')[_0x200c47(0x200)];
    if (_0x245b38 >= _0x1d811d) { $(this)[_0x200c47(0x32d)](); return; }
    $(this)[_0x200c47(0x219)](), validation();
}), $(_0x2972cf(0x240))['on'](_0x2972cf(0x2e7), function() {
    const _0x4ba700 = _0x2972cf,
        _0x81cf49 = $(this)[_0x4ba700(0x24e)](_0x4ba700(0x30c))['index']();
    let _0x438568 = $(this)[_0x4ba700(0x243)](_0x4ba700(0x37a));
    var _0x1592d1 = $(_0x4ba700(0x234) + _0x438568 + '\x22]')['eq'](0x0)[_0x4ba700(0x233)](!![]),
        _0x211eb3 = $(_0x4ba700(0x26c) + _0x438568 + '\x22]')['eq'](0x0)['clone'](!![]);
    let _0x5b167b = $(this)[_0x4ba700(0x243)](_0x4ba700(0x2c3)),
        _0x2ea0f8 = 0x0;
    $(_0x4ba700(0x234) + _0x438568 + _0x4ba700(0x2fa))[_0x4ba700(0x22f)](function() {
        const _0x120c28 = _0x4ba700,
            _0x4dac08 = $(this)[_0x120c28(0x335)]('name');
        if (_0x4dac08) { const _0x55c3d8 = parseInt(_0x4dac08[_0x120c28(0x360)]('-')[0x1]);!isNaN(_0x55c3d8) && _0x55c3d8 > _0x2ea0f8 && (_0x2ea0f8 = _0x55c3d8); }
    }), $(_0x4ba700(0x234) + _0x438568 + _0x4ba700(0x358))['each'](function() {
        const _0x583d51 = _0x4ba700,
            _0x3b2ae2 = $(this)['attr'](_0x583d51(0x295));
        if (_0x3b2ae2) { const _0x2807fa = parseInt(_0x3b2ae2['split']('-')[0x1]);!isNaN(_0x2807fa) && _0x2807fa > _0x2ea0f8 && (_0x2ea0f8 = _0x2807fa); }
    }), $(_0x4ba700(0x234) + _0x438568 + _0x4ba700(0x377))[_0x4ba700(0x22f)](function() {
        const _0x2568b1 = _0x4ba700,
            _0x28502d = $(this)[_0x2568b1(0x335)](_0x2568b1(0x295));
        if (_0x28502d) { const _0x205e9f = parseInt(_0x28502d[_0x2568b1(0x360)]('-')[0x1]);!isNaN(_0x205e9f) && _0x205e9f > _0x2ea0f8 && (_0x2ea0f8 = _0x205e9f); }
    }), _0x2ea0f8++, _0x1592d1[_0x4ba700(0x2da)](_0x4ba700(0x246))['each'](function() {
        const _0x117124 = _0x4ba700,
            _0x458aa1 = $(this)[_0x117124(0x335)]('name');
        let _0x4e2c27 = _0x458aa1 + '-' + _0x2ea0f8;
        $(this)[_0x117124(0x29b)](''), $(this)[_0x117124(0x335)](_0x117124(0x295), _0x4e2c27), $(this)['attr']('data-name', _0x4e2c27);
    }), _0x1592d1['find'](_0x4ba700(0x267))[_0x4ba700(0x22f)](function() {
        const _0xd300bc = _0x4ba700,
            _0x47d434 = $(this)[_0xd300bc(0x335)](_0xd300bc(0x295));
        let _0x3c1919 = _0x47d434 + '-' + _0x2ea0f8;
        $(this)[_0xd300bc(0x29b)](''), $(this)['attr'](_0xd300bc(0x295), _0x3c1919), $(this)[_0xd300bc(0x335)]('data-name', _0x3c1919);
    }), _0x1592d1[_0x4ba700(0x2da)](_0x4ba700(0x22b))[_0x4ba700(0x22f)](function() {
        const _0x34b4ef = _0x4ba700,
            _0x5584f5 = $(this)[_0x34b4ef(0x335)](_0x34b4ef(0x295));
        let _0x53feea = _0x5584f5 + '-' + _0x2ea0f8;
        $(this)[_0x34b4ef(0x29b)](''), $(this)[_0x34b4ef(0x335)](_0x34b4ef(0x295), _0x53feea), $(this)['attr'](_0x34b4ef(0x1f4), _0x53feea);
    }), _0x211eb3['find'](_0x4ba700(0x236))['each'](function() {
        const _0x3d861a = _0x4ba700;
        $(this)[_0x3d861a(0x335)](_0x3d861a(0x2eb), _0x3d861a(0x250) + _0x2ea0f8);
    }), $(this)[_0x4ba700(0x20e)](_0x4ba700(0x294) + _0x438568 + '\x22]')[_0x4ba700(0x23f)](_0x1592d1), $(_0x4ba700(0x299))['eq'](_0x81cf49)[_0x4ba700(0x2da)](_0x4ba700(0x306) + _0x438568 + '\x22]')[_0x4ba700(0x23f)](_0x211eb3), $(_0x4ba700(0x24c) + _0x438568 + '\x22]')[_0x4ba700(0x22f)](function() {
        const _0x124cfc = _0x4ba700;
        $(this)['text']($(this)[_0x124cfc(0x24e)](_0x124cfc(0x234) + _0x438568 + '\x22]')[_0x124cfc(0x21c)]() + 0x1);
    }), $(_0x4ba700(0x24a) + _0x438568 + '\x22]')['each'](function() {
        const _0x2e227e = _0x4ba700;
        $(this)[_0x2e227e(0x2c8)]($(this)[_0x2e227e(0x24e)](_0x2e227e(0x26c) + _0x438568 + '\x22]')[_0x2e227e(0x21c)]() + 0x1);
    });
    let _0x13885d = $(_0x4ba700(0x294) + _0x438568 + _0x4ba700(0x24b) + _0x438568 + '\x22]')[_0x4ba700(0x200)];
    if (_0x13885d >= _0x5b167b) { $(this)[_0x4ba700(0x32d)](); return; }
    $(this)[_0x4ba700(0x219)](), cloneRemoveInput(), validation();
}), $('[data-remove-upload]')['on'](_0x2972cf(0x2e7), function() {
    const _0x2325ff = _0x2972cf,
        _0x121f1c = $(this)[_0x2325ff(0x243)](_0x2325ff(0x363));
    $(_0x2325ff(0x2e3) + _0x121f1c + '\x22]')['val'](''), validation();
});

function _0x14da(_0x11aadf, _0x589f9d) { const _0x3938ba = _0x3938(); return _0x14da = function(_0x14da38, _0x528ecf) { _0x14da38 = _0x14da38 - 0x1f4; let _0x27e546 = _0x3938ba[_0x14da38]; return _0x27e546; }, _0x14da(_0x11aadf, _0x589f9d); }

function andLogic() {
    const _0x130c1c = _0x2972cf;
    conditionalResult && (steps['eq'](x)[_0x130c1c(0x2da)](_0x130c1c(0x2f9))[_0x130c1c(0x32d)](), steps['eq'](x)['find']('[data-show-if]')[_0x130c1c(0x22f)](function() {
        const _0x52c1f5 = _0x130c1c;

        function _0x167f8e(_0x87bda6) {
            const _0x11137d = _0x14da,
                _0x50da52 = _0x87bda6['split']('&'),
                _0x14b51a = [];
            return _0x50da52[_0x11137d(0x266)](_0x2c9e06 => {
                const _0x4d3dbd = _0x11137d,
                    [_0x4e7fa7, _0x161400] = _0x2c9e06[_0x4d3dbd(0x360)]('=');
                _0x14b51a[_0x4d3dbd(0x2d1)]({ 'field': _0x4e7fa7, 'value': _0x161400 });
            }), _0x14b51a;
        }
        const _0x35faa7 = $(this)[_0x52c1f5(0x335)]('data-show-if'),
            _0x44d6f3 = _0x167f8e(_0x35faa7);

        function _0x1c8c35(_0x474cf9, _0x50bc58) { const _0x379c36 = _0x52c1f5; return _0x50bc58[_0x379c36(0x2d4)]((_0x4854fe, _0x5b9bd9) => { const _0x335742 = _0x379c36; if (_0x474cf9[0x0] && _0x4854fe[_0x335742(0x203)] === _0x474cf9[0x0]['field']) return _0x474cf9[_0x335742(0x2ec)]((_0x18c492, _0x43c816) => _0x50bc58[_0x5b9bd9 + _0x43c816] && _0x50bc58[_0x5b9bd9 + _0x43c816][_0x335742(0x203)] === _0x18c492[_0x335742(0x203)] && _0x50bc58[_0x5b9bd9 + _0x43c816][_0x335742(0x274)] === _0x18c492[_0x335742(0x274)]); return ![]; }); }
        const _0x23d6a1 = _0x1c8c35(_0x44d6f3, all_data);
        _0x23d6a1 ? $(this)['show']() : $(this)['hide']();
    }));
}
$('[data-progressive-target]')[_0x2972cf(0x2b8)]('hide'), $(_0x2972cf(0x339))['on'](_0x2972cf(0x246), function() {
    const _0x57089c = _0x2972cf,
        _0x35346a = $(this)[_0x57089c(0x243)](_0x57089c(0x32a)),
        _0x5ae926 = $(this)[_0x57089c(0x29b)](),
        _0x483f78 = $(_0x57089c(0x374) + _0x35346a + '\x22]')['data'](_0x57089c(0x28b));
    let _0x3b3906 = $(_0x57089c(0x374) + _0x35346a + '\x22][data-progressive-input-value=\x22' + _0x5ae926 + '\x22]'),
        _0x266fb8 = $(_0x57089c(0x374) + _0x35346a + _0x57089c(0x1f9));
    $(_0x57089c(0x374) + _0x35346a + '\x22]')[_0x57089c(0x2b8)](_0x57089c(0x1f6)), $(_0x57089c(0x374) + _0x35346a + '\x22]')[_0x57089c(0x22c)](_0x57089c(0x21a));
    _0x5ae926 !== '' && (_0x483f78 === '*' && _0x5ae926 !== '' ? (_0x266fb8['removeClass']('f-hide'), _0x266fb8[_0x57089c(0x2b8)]('f-show')) : (_0x3b3906['removeClass'](_0x57089c(0x1f6)), _0x3b3906[_0x57089c(0x2b8)](_0x57089c(0x21a))));

    function _0x4e913e(_0x278e92) {
        const _0x356306 = _0x57089c;
        _0x278e92 && ($('[data-progressive-input=\x22' + _0x278e92 + '\x22]')[_0x356306(0x29b)]() !== '' && $(_0x356306(0x28a) + _0x278e92 + '\x22]')[_0x356306(0x21f)]('input'));
    }
    let _0x332282 = $(_0x57089c(0x374) + _0x35346a + '\x22]')[_0x57089c(0x2da)](_0x57089c(0x339))[_0x57089c(0x243)]('progressive-input');
    _0x4e913e(_0x332282), $(_0x57089c(0x1fd))['each'](function() {
        const _0xd8f324 = _0x57089c,
            _0x61fd9 = $(this)[_0xd8f324(0x243)](_0xd8f324(0x32a));
        $(_0xd8f324(0x374) + _0x61fd9 + '\x22]')[_0xd8f324(0x22c)]('f-show'), $(_0xd8f324(0x374) + _0x61fd9 + '\x22]')[_0xd8f324(0x2b8)](_0xd8f324(0x1f6));
    });
});

function addClickClass() {
    const _0x3aadf7 = _0x2972cf,
        _0x23eda0 = $(this)['data'](_0x3aadf7(0x31e)),
        _0x210a3d = $(this)[_0x3aadf7(0x335)](_0x3aadf7(0x295));
    $(_0x3aadf7(0x2e3) + _0x210a3d + '\x22]')[_0x3aadf7(0x345)]()['removeClass'](_0x23eda0), $(this)['is'](_0x3aadf7(0x268)) && $(this)[_0x3aadf7(0x345)]()[_0x3aadf7(0x2b8)](_0x23eda0);
}
$(_0x2972cf(0x1f8))['on'](_0x2972cf(0x2a5), addClickClass);

function updateCounter(_0x3de7e2) {
    const _0x546117 = _0x2972cf;
    var _0x17d0e0 = new Date(),
        _0x1fb42b = _0x17d0e0['getMonth'](),
        _0x5490fc = btoa(_0x546117(0x352)),
        _0x4ff09c = btoa(_0x1fb42b['toString']()),
        _0x57345c = getCookie(_0x5490fc);
    !_0x57345c || _0x57345c !== _0x4ff09c ? $[_0x546117(0x220)]('https://videsigns-staging.co.uk/counter', function() {
        const _0x15b6fb = _0x546117;
        console[_0x15b6fb(0x25c)]('Counter\x20updated\x20successfully.'), document[_0x15b6fb(0x2c4)] = _0x5490fc + '=' + _0x4ff09c;
    })[_0x546117(0x22d)](function(_0x385584, _0xc84b4f, _0xb729e0) {
        const _0x48ad9a = _0x546117;
        console[_0x48ad9a(0x241)](_0x48ad9a(0x254), _0xb729e0);
    }) : console[_0x546117(0x25c)](_0x546117(0x2ef));
}

function getCookie(_0x401c9a) { const _0x54994e = _0x2972cf; var _0x39fb49 = null; if (document[_0x54994e(0x2c4)] && document[_0x54994e(0x2c4)] !== '') { var _0x57f0f8 = document[_0x54994e(0x2c4)][_0x54994e(0x360)](';'); for (var _0x3ec8b5 = 0x0; _0x3ec8b5 < _0x57f0f8[_0x54994e(0x200)]; _0x3ec8b5++) { var _0x1e5e11 = _0x57f0f8[_0x3ec8b5]['trim'](); if (_0x1e5e11[_0x54994e(0x35a)](0x0, _0x401c9a['length'] + 0x1) === _0x401c9a + '=') { _0x39fb49 = decodeURIComponent(_0x1e5e11[_0x54994e(0x35a)](_0x401c9a[_0x54994e(0x200)] + 0x1)); break; } } } return _0x39fb49; }
updateCounter(), scrollTop(), cloneRemove(), cloneRemoveInput();
const formlyUrlParams = new URLSearchParams(window[_0x2972cf(0x25d)][_0x2972cf(0x351)]),
    formlySupportParam = formlyUrlParams[_0x2972cf(0x317)](_0x2972cf(0x34b)),
    showButton = formlySupportParam === 'true',
    passIcon = _0x2972cf(0x36c),
    failIcon = _0x2972cf(0x291);
let isScriptLoaded = !![],
    scriptLocation = _0x2972cf(0x2d6),
    isMultistepAttributePresent = !![],
    isMultistepOnFormElement = !![],
    areButtonsPresent = !![],
    isNextBtnOnSubmit = ![],
    isSubmitBtnOnSubmit = !![],
    isBackBtnOnSubmit = ![],
    formType = logicExtra ? _0x2972cf(0x378) : _0x2972cf(0x2f0),
    resultStatus = _0x2972cf(0x2a3),
    scriptSrcAdded = '';

function isElementPresent(_0x336183, _0xb359a8) { const _0x413a24 = _0x2972cf; return document[_0x413a24(0x1fe)]('[' + _0xb359a8 + '=\x22' + _0x336183 + '\x22]') !== null; }
isMultistepAttributePresent = isElementPresent(_0x2972cf(0x349), _0x2972cf(0x204));
const multistepForm = document['querySelector'](_0x2972cf(0x315)),
    formStepLength = multistepForm[_0x2972cf(0x350)](_0x2972cf(0x251))[_0x2972cf(0x200)];
isMultistepOnFormElement = multistepForm !== null;
const multistepContainer = document[_0x2972cf(0x1fe)](_0x2972cf(0x346)),
    nextBtnExist = multistepContainer[_0x2972cf(0x1fe)](_0x2972cf(0x288)),
    backBtnExist = multistepContainer['querySelector'](_0x2972cf(0x20b)),
    submitBtnExist = multistepContainer['querySelector'](_0x2972cf(0x23e));

function _0x3938() {
    const _0x49ebff = ['trigger', 'post', ':input[type=\x22url\x22][required]', 'last-step', '[data-display-index=\x22', '.w-checkbox-input', 'textarea:focus', '[data-quiz]', '_blank', 'src', ':input[type=\x22file\x22]', '[data-selection-weight]', 'textarea', 'removeClass', 'fail', 'quiz', 'each', 'enter', '[data-clone-input]', '[data-btn=\x22check\x22]', 'clone', '[data-clone-input=\x22', 'file', '[data-input-field]', '[data-radio-skip]:visible', '[data-add-new=\x22', ':input', ':input[type=\x22number\x22][required]', '[aria-label=\x22Remove\x20file\x22]', 'button', 'Webflow', '[data-form=\x22submit-btn\x22]', 'append', '[data-add-new-input]', 'error', '\x22]:checked', 'data', 'Please\x20wait...', 'filter', 'input', 'redirect-delay', ':input[type=\x22url\x22]', 'selection', '[data-display-input-index=\x22', '\x22]\x20[data-clone-input=\x22', '[data-input-index=\x22', 'select:not([data-prefill=\x22false\x22])', 'parents', 'join', 'relationship-', '[data-form=\x22step\x22]', 'input-field', '11846960LEofzj', 'Failed\x20to\x20update\x20counter:', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>5.\x20Submit\x20Buttons:\x20data-form=next-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Submit\x20button\x20present?\x20', '0.4', '<strong\x20class=\x22f-text-white\x22>Press\x20\x22⌘\x20+\x20Enter\x20\x22\x20To\x20Submit\x20', '[data-cms-select=input]', 'weighted-selection-range', '[data-form=\x22progress\x22]', '11266156ZXDmWx', 'log', 'location', '[data-add-new-input=\x22', 'select[required]', 'select-multiple', '.active-answer-card', '[data-clone=\x22', 'inputName', 'textarea[autofocus]', 'remove', 'forEach', 'select', ':checked', 'selections\x20email', 'input[autofocus]', 'url', '[data-display-input=\x22', 'checkbox', 'animate', 'closest', '[data-form=\x22next-btn\x22][type=\x22submit\x22]', 'textarea[required]:visible', 'key', 'disabled', 'value', 'custom-error-message', 'reset', '6107048RlWwFG', ':input[type=\x22tel\x22][required]', 'debug-mode', '</div>', 'step', '[data-redirect-delay]', '<strong\x20class=\x22f-text-white\x22>Press\x20\x22Enter\x22\x20To\x20Progress\x20', '[data-form-ms=\x22submit-btn\x22]', '<div\x20data-range=\x22selection\x22\x20style=\x22display:none\x20!important\x22>', 'top', 'focus', '</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Formly\x20Script\x20Info</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>Script\x20URL:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>', 'status', '<strong\x20class=\x22f-text-white\x22>Custom\x20Progress\x20Indicators\x20', '[data-form=\x22step\x22][data-card]', '[type=\x22checkbox\x22]', 'ix2', '[data-form=\x22next-btn\x22]', 'html,\x20body', '[data-progressive-input=\x22', 'progressive-input-value', '[data-weighted-selection-range]', 'No\x20Formly\x20script\x20added\x20to\x20the\x20page!', 'selected', '[data-add-new]', '[data-display=\x22', '<span\x20class=\x22f-icon-embed-xxsmall-2\x20w-embed\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--carbon\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2032\x2032\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M16\x202C8.2\x202\x202\x208.2\x202\x2016s6.2\x2014\x2014\x2014s14-6.2\x2014-14S23.8\x202\x2016\x202m5.4\x2021L16\x2017.6L10.6\x2023L9\x2021.4l5.4-5.4L9\x2010.6L10.6\x209l5.4\x205.4L21.4\x209l1.6\x201.6l-5.4\x205.4l5.4\x205.4z\x22></path></svg></span>', ':input[type=\x22text\x22][required]', '[data-weighted-selection]', '[data-clone-input-wrapper=\x22', 'name', 'clone-input', 'conditional-result', 'keypress', '[data-display]', '[data-success-card=\x22', 'val', '[type=\x22radio\x22]', 'go-to', 'BODY', '[data-btn=\x22edit\x22]', '[data-radio-delay]', 'preventDefault', '[data-go-to]', 'PASS', 'input[type=\x22radio\x22]', 'change', '[data-memory]', 'padding', ':input[type=\x22email\x22]', 'input:checkbox', 'required', 'toLowerCase', 'data-go-to', 'FAIL', 'textarea[name=\x22', 'destroy', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Powerups</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'min-character', '[data-last-step]', 'div', '[data-btn=\x22reset\x22]', '<option>', 'current', ':input[type=\x27radio\x27]:checked', 'addClass', 'reset-delay', 'span', 'input[type=\x22radio\x22]:checked', 'trim', 'replace', ':input[type=\x22checkbox\x22]', ':input[type=\x22password\x22][required]', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>Script\x20Location:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>', '[data-enter]', 'input[type=\x22email\x22]:visible', 'add-new-input-limit', 'cookie', '[data-text=\x22error-message\x22]', '[data-conditional-result]', 'input:radio[name=\x22', 'text', 'startsWith', 'getItem', '<br>Data\x20Answer\x20=\x20', '[data-answer][data-radio-skip]:visible', 'input[type=\x22text\x22][required]:visible', '[data-index=\x22', 'style', 'ajaxComplete', 'push', 'form[data-form=\x22multistep\x22]\x20:input', 'fadeIn', 'some', 'parentNode', 'head', '2aOJdVt', '[data-reset-delay]', 'input[type=\x22radio\x22][name=\x22', 'find', '[data-callback=\x22recaptcha\x22]', '<strong\x20class=\x22f-text-white\x22>Checkboxes\x20', 'body', 'logic-extra', '[data-form=\x22progress-indicator\x22]', '\x22]\x20[data-clone=\x22', 'reinit', '[data-answer]', 'input[name=\x22', 'w--redirected-checked', 'phone-validation', '[data-form=\x22remove-input-clone\x22]', 'click', ':input[type=\x22file\x22][required]', 'AND', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>3.\x20Next\x20Buttons:\x20data-form=back-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Next\x20button\x20present?\x20', 'data-input-field', 'every', 'skip-to', 'script[src=\x22', 'Counter\x20already\x20updated\x20for\x20this\x20month.', 'Basic\x20(No\x20Formly\x20Logic)', 'ms-field', 'submit-show', 'keydown', '[data-form=\x22next-btn\x22][data-submit-show]', 'formlyLastStep', '[data-radio-skip=\x22true\x22]', 'scroll-top', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Next\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button\x20', '[data-show-if]', '\x22]\x20input', 'tagName', ':input[type=\x22time\x22][required]', '\x22]:not([data-prefill=\x22false\x22])', 'findIndex', '\x22]\x20[data-input-field^=\x22', '<strong\x20class=\x22f-text-white\x22>Radio\x20Inputs\x20', '1436aRmKZx', 'input[type=\x22submit\x22]', '[data-success-card]', ':input[type=\x22checkbox\x22]:checked', 'formlyLastStepAnswer', '[data-display-input-wrapper=\x22', 'display', 'parse', '<strong\x20class=\x22f-text-white\x22>Total\x20Step\x20Text\x20', 'radio-delay', '[data-card=\x22true\x22]', '[data-clone]', ':input[type=\x22email\x22][required]', 'submit', ':input[type=\x22checkbox\x22][required]', 'children', 'option[value=\x22$(this).val()\x22]', '<strong\x20class=\x22f-text-white\x22>ReCAPTCHA\x20', 'add-new', '[data-display-input]', 'form[data-form=\x22multistep\x22]', 'open', 'get', 'width', '</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Attributes</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>1.\x20Form:\x20data-form=multistep\x20', 'card', '.w-form-formradioinput', 'css', 'redirect', 'click-addclass', 'appendChild', ':input[type=\x22checkbox\x22][required]:not(:checked)', '[data-form=\x22remove-clone\x22]', '[data-answer=\x22', 'option[value=\x22', '[data-select-multiple]', '[data-selection=\x22', '[data-range]:contains(', '12px', '[data-input-field=\x22', 'createElement', 'progressive-input', 'filledInput', 'skipTo', 'hide', '<br>Data\x20Go\x20To\x20=\x20', '\x0a\x20\x20<button\x20class=\x22f-openbtn\x22\x20onclick=\x22openNav()\x22>\x0a\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x2220px\x22\x20height=\x2220px\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M11\x2021h-1l1-7H7.5c-.88\x200-.33-.75-.31-.78C8.48\x2010.94\x2010.42\x207.54\x2013.01\x203h1l-1\x207h3.51c.4\x200\x20.62.19.4.66C12.97\x2017.55\x2011\x2021\x2011\x2021\x22></path>\x0a\x20\x20\x20\x20</svg>\x20Check\x20Form\x0a\x20\x20</button>\x0a\x20\x20<div\x20id=\x22f-mySidenav\x22\x20class=\x22f-sidenav\x22>\x0a\x20\x20\x20\x20<a\x20href=\x22javascript:void(0)\x22\x20class=\x22f-closebtn\x22\x20onclick=\x22closeNav()\x22>&times;</a>\x0a\x20\x20\x20\x20<div\x20class=\x22f-fc-main-content\x22>\x0a\x20\x20\x20\x20\x20\x20<h4\x20class=\x22f-text-header\x22>Formly\x20Support</h4>\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20If\x20you\x20have\x20spotted\x20a\x20bug\x20or\x20require\x20extra\x20support,\x20please\x20reach\x20out\x20to\x20us\x20via\x20Slack\x20or\x20email\x20us\x20at\x20developer@videsigns.uk.\x0a\x20\x20\x20\x20\x20\x20</p>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Form\x20Type</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>', ':input[required]', '[data-clone-wrapper=\x22', 'Inside\x20<head>\x20tag', 'test', 'offset', 'attr', '[data-clickable]', 'type', '[data-text=\x22current-step\x22]', '[data-progressive-input]', 'block-domain', '[data-enter=\x22true\x22]', '[data-query-param]', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20', '695qtJHoe', ':input[type=\x22date\x22][required]', 'select[name=\x22', 'input:radio[required]', '.w-form-done', 'getElementsByTagName', 'data-radio-skip', 'parent', '[data-form=\x22multistep\x22]', 'href', 'phone-autoformat', 'multistep', '[data-skip-to]', 'formly-support', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>4.\x20Back\x20Buttons:\x20data-form=next-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Back\x20button\x20present?\x20', 'includes', '[data-checkbox]', ':input[type=\x22checkbox\x22][required]:checked', 'querySelectorAll', 'search', 'counter', '[data-form=\x22step\x22]:not([data-card=\x22true\x22])', '[data-display-wrapper=\x22', 'innerHTML', '[data-form=\x22custom-progress-indicator\x22]', 'data-skip-to', '\x22]\x20select', 'new-tab', 'substring', '38238JuVWKD', '35%', 'f-mySidenav', 'radio', 'active-answer-card', 'split', 'clickable', '<strong\x20class=\x22f-text-white\x22>Automatic\x20Progress\x20Indicators\x20', 'remove-upload', '[data-selection=\x22other\x22]', 'backTo', '[data-reinit]', 'getElementById', 'dispatchEvent', '969966ScvtNA', 'setItem', 'slow', '<span\x20class=\x22f-icon-embed-xxsmall\x20w-embed\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010s10-4.48\x2010-10S17.52\x202\x2012\x202m-2\x2015l-5-5l1.41-1.41L10\x2014.17l7.59-7.59L19\x208z\x22></path></svg></span>', 'memory', 'wait', '[data-selected]:checked', 'require', 'init', 'none', 'radio-skip', '[data-progressive-target=\x22', 'prop', '[data-clickable-all]', '\x22]\x20textarea', 'FormlyLogic\x20enabled', 'input[type=\x22checkbox\x22][name=\x22', 'add-new-input', 'data-name', '\x0a\x20\x20.f-icon-embed-xxsmall-2\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#ff3232\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x20\x20.f-icon-embed-xxsmall\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#57ff4b\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20{\x0a\x20\x20\x20\x20height:\x20100%\x20!important;\x0a\x20\x20\x20\x20width:\x200;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20z-index:\x20999999999999\x20!important;\x0a\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20background-color:\x20#081019\x20!important;\x0a\x20\x20\x20\x20overflow-x:\x20hidden\x20!important;\x0a\x20\x20\x20\x20padding-top:\x2060px\x20!important;\x0a\x20\x20\x20\x20transition:\x200.5s\x20!important;\x0a\x20\x20\x20\x20font-size:\x2015px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73)\x20!important;\x0a\x20\x20\x20\x20font-family:system-ui\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-section-title-text,\x20.f-support-text,\x20.f-openbtn{\x0a\x20\x20\x20\x20font-size:\x2015px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73);\x0a\x20\x20\x20\x20font-family:system-ui\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20p,\x20.f-sidenav\x20strong\x20{\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20space-between\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x204px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73);\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20.f-closebtn\x20{\x0a\x20\x20\x20\x20position:\x20absolute\x20!important;\x0a\x20\x20\x20\x20top:\x2025px\x20!important;\x0a\x20\x20\x20\x20right:\x2025px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2036px\x20!important;\x0a\x20\x20\x20\x20margin-left:\x2050px\x20!important;\x0a\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20color:\x20#e7e7e7\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-core-setup\x20{\x0a\x20\x20\x20\x20padding:\x2012px\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x2011px\x20!important;\x0a\x20\x20\x20\x20border-radius:\x206px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20#f-main\x20{\x0a\x20\x20\x20\x20transition:\x20margin-left\x20.5s\x20!important;\x0a\x20\x20\x20\x20padding:\x2020px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-main-content\x20{\x0a\x20\x20\x20\x20transition:\x20margin-left\x20.5s\x20!important;\x0a\x20\x20\x20\x20padding:\x2020px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-form-step\x20{\x0a\x20\x20\x20\x20padding-left:\x2010px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-openbtn\x20{\x0a\x20\x20\x20\x20white-space:\x20nowrap\x20!important;\x0a\x20\x20\x20\x20cursor:\x20pointer\x20!important;\x0a\x20\x20\x20\x20box-shadow:\x200\x200\x200\x201px\x20rgba(0,\x200,\x200,\x20.1),\x200\x201px\x203px\x20rgba(0,\x200,\x200,\x20.1)\x20!important;\x0a\x20\x20\x20\x20visibility:\x20visible\x20!important;\x0a\x20\x20\x20\x20z-index:\x2099\x20!important;\x0a\x20\x20\x20\x20color:\x20#e7e7e7\x20!important;\x0a\x20\x20\x20\x20opacity:\x201\x20!important;\x0a\x20\x20\x20\x20width:\x20auto\x20!important;\x0a\x20\x20\x20\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20background-color:\x20#1e1e1e\x20!important;\x0a\x20\x20\x20\x20border-radius:\x203px\x20!important;\x0a\x20\x20\x20\x20margin:\x200\x20!important;\x0a\x20\x20\x20\x20padding:\x206px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2013px\x20!important;\x0a\x20\x20\x20\x20line-height:\x2014px\x20!important;\x0a\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20top:\x20auto\x20!important;\x0a\x20\x20\x20\x20bottom:\x2012px\x20!important;\x0a\x20\x20\x20\x20left:\x2012px\x20!important;\x0a\x20\x20\x20\x20right:\x20auto\x20!important;\x0a\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20transform:\x20none\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-text-header{\x0a\x20\x20\x20\x20color:\x20#fff\x20!important;\x0a\x20\x20\x20\x20font-size:\x201.8rem\x20!important;\x0a\x20\x20\x20\x20font-weight:\x20600\x20!important;\x0a\x20\x20\x20\x20line-height:\x201.2\x20!important;\x0a\x20\x20\x20\x20margin-bottom:4px\x0a\x20\x20}\x0a\x0a\x20\x20@media\x20screen\x20and\x20(max-height:\x20450px)\x20{\x0a\x20\x20\x20\x20.sidenav\x20{\x20padding-top:\x2015px\x20!important;\x20}\x0a\x20\x20\x20\x20.sidenav\x20a\x20{\x20font-size:\x2018px\x20!important;\x20}\x0a\x20\x20}\x0a\x0a\x20\x20.f-section-title-text{\x0a\x20\x20\x20\x20color:\x20#fff\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x2010px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2018px\x20!important;\x0a\x20\x20\x20\x20font-weight:\x20700\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-div-support-section{\x0a\x20\x20\x20\x20padding-top:1rem\x20!important;\x0a\x20\x20\x20\x20padding-bottom:1rem\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-text-white{\x0a\x20\x20\x20\x20color:\x20white\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-spacer{\x0a\x20\x20\x20\x20padding-top:8px\x20!important;\x0a\x20\x20}\x0a', 'f-hide', 'textarea[required]', '[data-click-addclass]', '\x22][data-progressive-input-value=\x22*\x22]', 'removeItem', 'metaKey', '</strong>', '[data-progressive-input]:not(:visible)', 'querySelector', '[data-text=\x22total-weight\x22]', 'length', 'stopPropagation', '[data-selection]', 'field', 'data-form', '[data-text=\x22total-steps\x22]', 'redirect-form-hehexd', 'checked', '1133218GTjZvk', 'div.g-recaptcha', '687YLvalp', '[data-form=\x22back-btn\x22]', '\x22][value=\x22', 'keyCode', 'siblings', 'auto', '[data-clone-input-wrapper]', '[data-count-card]', ':input[type=\x22radio\x22]', '[data-form=\x22submit-btn\x22]:visible', 'not', 'novalidate', '[data-custom-error-message]', '.w-radio-input', '7aQNyOQ', 'show', 'f-show', '</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Number\x20of\x20steps:\x20', 'index', 'edit-step', '[type=\x22submit\x22]'];
    _0x3938 = function() { return _0x49ebff; };
    return _0x3938();
}
areButtonsPresent = nextBtnExist !== null && backBtnExist !== null && submitBtnExist !== null, isNextBtnOnSubmit = nextBtnExist && nextBtnExist[_0x2972cf(0x2fb)]['toLowerCase']() === _0x2972cf(0x246), isSubmitBtnOnSubmit = submitBtnExist && submitBtnExist[_0x2972cf(0x2fb)]['toLowerCase']() === 'input' && submitBtnExist[_0x2972cf(0x337)][_0x2972cf(0x2ab)]() === _0x2972cf(0x30e), isBackBtnOnSubmit = backBtnExist && backBtnExist[_0x2972cf(0x2fb)]['toLowerCase']() === _0x2972cf(0x246);
const checkPowerup = _0x336fb7 => document[_0x2972cf(0x1fe)](_0x336fb7) !== null,
    progressBarAttr = checkPowerup(_0x2972cf(0x25a)),
    progressIndicatorAttr = checkPowerup(_0x2972cf(0x2df)),
    customProgressAttr = checkPowerup('[data-form=\x22progress-indicator\x22]'),
    cardDivAttr = checkPowerup(_0x2972cf(0x30b)),
    currentStepAttr = checkPowerup(_0x2972cf(0x338)),
    totalStepAttr = checkPowerup(_0x2972cf(0x205)),
    enterAttr = checkPowerup(_0x2972cf(0x33b)),
    submitAttr = checkPowerup('[data-submit=\x22true\x22]'),
    radioSkipAttr = checkPowerup(_0x2972cf(0x2f6)),
    customCheckboxAttr = checkPowerup('[data-checkbox]'),
    recapatchaAttr = checkPowerup(_0x2972cf(0x2db));
(!isScriptLoaded || scriptLocation !== 'head' || !isMultistepAttributePresent || !isMultistepOnFormElement || !areButtonsPresent || isNextBtnOnSubmit || !isSubmitBtnOnSubmit || isBackBtnOnSubmit) && (resultStatus = _0x2972cf(0x2ad));

function isScriptUrlMatch(_0x2298fd, _0x1958dd) { const _0x41fed8 = _0x2972cf; for (var _0x14ed61 = 0x0; _0x14ed61 < _0x1958dd[_0x41fed8(0x200)]; _0x14ed61++) { if (_0x2298fd[_0x41fed8(0x34d)](_0x1958dd[_0x14ed61])) return !![]; } return ![]; }
var keywordsToCheck = ['videsigns', 'formly'],
    scripts = document[_0x2972cf(0x343)]('script'),
    matchedScripts = [];
for (var i = 0x0; i < scripts['length']; i++) {
    var scriptSrcs = scripts[i][_0x2972cf(0x228)];
    isScriptUrlMatch(scriptSrcs, keywordsToCheck) && matchedScripts[_0x2972cf(0x2d1)](scriptSrcs);
}
if (matchedScripts[_0x2972cf(0x200)] > 0x0) {
    scriptSrcAdded = matchedScripts;
    const script = document[_0x2972cf(0x1fe)](_0x2972cf(0x2ee) + scriptSrcAdded + '\x22]');
    script && (scriptLocation = script[_0x2972cf(0x2d5)][_0x2972cf(0x2fb)] === _0x2972cf(0x29e) ? 'Before\x20&lt;/body&gt;\x20tag' : _0x2972cf(0x332));
} else scriptSrcAdded = _0x2972cf(0x28d) + failIcon;
const newElement = document[_0x2972cf(0x329)](_0x2972cf(0x2b3)),
    newStyle = document['createElement'](_0x2972cf(0x2cf));
newStyle[_0x2972cf(0x355)] = _0x2972cf(0x1f5), document[_0x2972cf(0x2d6)]['appendChild'](newStyle);
showButton && document[_0x2972cf(0x2dd)][_0x2972cf(0x31f)](newElement);
newElement[_0x2972cf(0x355)] = _0x2972cf(0x32f) + formType + _0x2972cf(0x282) + scriptSrcAdded + _0x2972cf(0x2c0) + scriptLocation + _0x2972cf(0x319) + (isMultistepOnFormElement ? passIcon : failIcon) + '</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Multistep\x20form\x20attribute\x20is\x20on\x20Form\x20element\x20and\x20not\x20on\x20Form\x20Block\x20element\x0a\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>2.\x20Form\x20Steps:\x20data-form=step\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + (formStepLength > 0x0 ? passIcon : failIcon) + _0x2972cf(0x21b) + formStepLength + _0x2972cf(0x2ea) + (nextBtnExist ? passIcon : failIcon) + _0x2972cf(0x2f8) + (isNextBtnOnSubmit ? failIcon : passIcon) + _0x2972cf(0x34c) + (backBtnExist ? passIcon : failIcon) + '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Back\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button' + (isBackBtnOnSubmit ? failIcon : passIcon) + _0x2972cf(0x255) + (backBtnExist ? passIcon : failIcon) + '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Submit\x20button\x20attribute\x20IS\x20on\x20Form\x20Submit\x20Button\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + (isSubmitBtnOnSubmit ? passIcon : failIcon) + _0x2972cf(0x2b0) + (progressBarAttr && progressIndicatorAttr ? _0x2972cf(0x362) + passIcon + _0x2972cf(0x1fc) : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + (customProgressAttr ? _0x2972cf(0x284) + passIcon + _0x2972cf(0x1fc) : '') + _0x2972cf(0x33d) + (cardDivAttr ? '<strong\x20class=\x22f-text-white\x22>Intro\x20Cards\x20Or\x20Steps\x20Without\x20Inputs\x20' + passIcon + _0x2972cf(0x1fc) : '') + _0x2972cf(0x33d) + (currentStepAttr ? '<strong\x20class=\x22f-text-white\x22>Current\x20Step\x20Text\x20' + passIcon + _0x2972cf(0x1fc) : '') + _0x2972cf(0x33d) + (totalStepAttr ? _0x2972cf(0x309) + passIcon + _0x2972cf(0x1fc) : '') + _0x2972cf(0x33d) + (enterAttr ? _0x2972cf(0x27d) + passIcon + _0x2972cf(0x1fc) : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + (submitAttr ? _0x2972cf(0x257) + passIcon + _0x2972cf(0x1fc) : '') + _0x2972cf(0x33d) + (radioSkipAttr ? _0x2972cf(0x300) + passIcon + _0x2972cf(0x1fc) : '') + _0x2972cf(0x33d) + (customCheckboxAttr ? _0x2972cf(0x2dc) + passIcon + '</strong>' : '') + _0x2972cf(0x33d) + (recapatchaAttr ? _0x2972cf(0x312) + passIcon + _0x2972cf(0x1fc) : '') + '\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a';

function openNav() {
    const _0x2cf8c4 = _0x2972cf;
    document[_0x2cf8c4(0x367)](_0x2cf8c4(0x35d))['style'][_0x2cf8c4(0x318)] = _0x2cf8c4(0x35c), document[_0x2cf8c4(0x367)](_0x2cf8c4(0x35d))[_0x2cf8c4(0x2cf)][_0x2cf8c4(0x2a7)] = _0x2cf8c4(0x327);
}

function closeNav() {
    const _0x180d48 = _0x2972cf;
    document[_0x180d48(0x367)](_0x180d48(0x35d))[_0x180d48(0x2cf)][_0x180d48(0x318)] = '0', document[_0x180d48(0x367)]('f-mySidenav')[_0x180d48(0x2cf)][_0x180d48(0x2a7)] = '0px';
}