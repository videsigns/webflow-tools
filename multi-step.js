// 19/3/24
// Major bug fixes
// 1. Data card not working
// 2. Back button validation issue
// 3. Radio + data skip issues with validation

const _0x1b6e15 = _0x2051;
(function(_0x9b1b0, _0x501c0e) {
    const _0x3fc7d2 = _0x2051,
        _0x551f38 = _0x9b1b0();
    while (!![]) {
        try {
            const _0x4d3e69 = parseInt(_0x3fc7d2(0xd6)) / 0x1 * (-parseInt(_0x3fc7d2(0x10d)) / 0x2) + parseInt(_0x3fc7d2(0x1d6)) / 0x3 + -parseInt(_0x3fc7d2(0x19a)) / 0x4 + parseInt(_0x3fc7d2(0x218)) / 0x5 + parseInt(_0x3fc7d2(0x151)) / 0x6 + -parseInt(_0x3fc7d2(0xf4)) / 0x7 * (parseInt(_0x3fc7d2(0xf6)) / 0x8) + parseInt(_0x3fc7d2(0x9f)) / 0x9 * (-parseInt(_0x3fc7d2(0x150)) / 0xa);
            if (_0x4d3e69 === _0x501c0e) break;
            else _0x551f38['push'](_0x551f38['shift']());
        } catch (_0x3ea5b2) { _0x551f38['push'](_0x551f38['shift']()); }
    }
}(_0x1347, 0x5fa15));
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
let steps = $(_0x1b6e15(0x211)),
    progressbarClone = $(_0x1b6e15(0x13b))[_0x1b6e15(0x210)](),
    progressbar, weightedSelection = $(_0x1b6e15(0xf2))[_0x1b6e15(0x13d)](_0x1b6e15(0x1bd)),
    weightedSelectionRange = $(_0x1b6e15(0x15b))['data'](_0x1b6e15(0xc2)),
    selectMultiple = $(_0x1b6e15(0x1cf))[_0x1b6e15(0x13d)](_0x1b6e15(0x190)),
    customError = $(_0x1b6e15(0x1c6))[_0x1b6e15(0x13d)](_0x1b6e15(0x1c1)),
    reinitIX = $(_0x1b6e15(0x135))[_0x1b6e15(0x13d)](_0x1b6e15(0x11f)),
    memory = $('[data-memory]')[_0x1b6e15(0x13d)](_0x1b6e15(0x173)),
    quiz = $('[data-quiz]')['data'](_0x1b6e15(0x159));
const urlFormly = new URL(window[_0x1b6e15(0x1b3)][_0x1b6e15(0xac)]);
let _params = $(_0x1b6e15(0xdd))['data']('query-param'),
    logicExtra = $(_0x1b6e15(0x12e))[_0x1b6e15(0x13d)](_0x1b6e15(0x157)),
    oldSubmitText = $('[data-form=\x22submit-btn\x22]')['val'](),
    oldResetText = $(_0x1b6e15(0x20b))[_0x1b6e15(0x200)](),
    formReset = $(_0x1b6e15(0x12e))[_0x1b6e15(0x13d)]('reset'),
    resetDelay = $('[data-reset-delay]')[_0x1b6e15(0x13d)](_0x1b6e15(0x217)) ? $('[data-reset-delay]')[_0x1b6e15(0x13d)](_0x1b6e15(0x217)) : 0x7d0,
    redirectDelay = $(_0x1b6e15(0xe7))[_0x1b6e15(0x13d)](_0x1b6e15(0xb9)) ? $(_0x1b6e15(0xe7))[_0x1b6e15(0x13d)]('redirect-delay') : 0x64,
    phoneFormat = $(_0x1b6e15(0x12e))[_0x1b6e15(0x13d)](_0x1b6e15(0x19c)),
    scrollToTop = $(_0x1b6e15(0x12e))[_0x1b6e15(0x13d)]('scroll-top'),
    trackLastStep = $(_0x1b6e15(0x1d5))['data'](_0x1b6e15(0x16c)),
    conditionalResult = $('[data-conditional-result]')['data']('conditional-result') === _0x1b6e15(0xdb),
    scrollTopOffset = parseInt($(_0x1b6e15(0x12e))[_0x1b6e15(0x13d)](_0x1b6e15(0x1c0)));
const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
savedFilledInput = JSON[_0x1b6e15(0xef)](localStorage[_0x1b6e15(0x183)]('filledInput')), formlyLastStep = JSON['parse'](localStorage[_0x1b6e15(0x183)](_0x1b6e15(0x1f2))), formlyLastStepAnswer = JSON[_0x1b6e15(0xef)](localStorage['getItem'](_0x1b6e15(0x1a9)));
trackLastStep && (formlyLastStep > x && (x = formlyLastStep), formlyLastStepAnswer && (selections = formlyLastStepAnswer));
$(_0x1b6e15(0xd7))[_0x1b6e15(0x201)](function() {
    const _0xd3e207 = _0x1b6e15;
    ogCloneArr[_0xd3e207(0xfa)]({ 'name': $(this)[_0xd3e207(0x13d)](_0xd3e207(0x210)), 'element': $(this)[_0xd3e207(0x210)](!![]), 'display': $(_0xd3e207(0x216) + $(this)['data'](_0xd3e207(0x210)) + '\x22]')['eq'](0x0)[_0xd3e207(0x210)](!![]) });
});
$(_0x1b6e15(0x1ab))[_0x1b6e15(0xe5)] > 0x0 && (notRobot = ![]);

function recaptcha(_0x4737d5) { notRobot = !![]; }($(steps[x])[_0x1b6e15(0x13d)](_0x1b6e15(0x1d9)) || $(steps[x])[_0x1b6e15(0x109)](_0x1b6e15(0x13e))[_0x1b6e15(0x13d)]('card')) && (next = !![]);
$('[data-count-card]')[_0x1b6e15(0xe5)] > 0x0 && (countCard = $('[data-count-card]')[_0x1b6e15(0x13d)](_0x1b6e15(0x21b)));
$('[data-text=\x22error-message\x22]')[_0x1b6e15(0x11c)](), $(progressbarClone)['removeClass'](_0x1b6e15(0x10b)), $(_0x1b6e15(0x1ba))[_0x1b6e15(0x100)]()[_0x1b6e15(0xb5)](), $('[data-form=\x22submit-btn\x22]')['hide'](), $(_0x1b6e15(0xc9))[_0x1b6e15(0x11c)](), steps[_0x1b6e15(0x201)](function() {
    const _0x3a961e = _0x1b6e15;
    $(_0x3a961e(0x1ba))[_0x3a961e(0xb7)](progressbarClone[_0x3a961e(0x210)](!![], !![]));
}), $(_0x1b6e15(0xaf))[_0x1b6e15(0x11c)]();
countCard ? (curStep = curStep + 0x1, totalSteps = steps[_0x1b6e15(0xe5)], $(_0x1b6e15(0xff))[_0x1b6e15(0x200)](totalSteps)) : ($(steps[x])[_0x1b6e15(0x13d)]('card') ? curStep = curStep + 0x0 : curStep = curStep + 0x1, totalSteps = $(_0x1b6e15(0x1be))[_0x1b6e15(0xe5)], $(_0x1b6e15(0xff))[_0x1b6e15(0x200)](totalSteps), $('[data-form=\x22step\x22][data-card]')[_0x1b6e15(0x201)](function() {
    const _0x583c7c = _0x1b6e15;
    $($(_0x583c7c(0x13b))[$(this)['index']()])[_0x583c7c(0x11c)]();
}));
progressbar = $(_0x1b6e15(0x1ba))[_0x1b6e15(0x100)](), $(_0x1b6e15(0x13b))['on'](_0x1b6e15(0x20f), clickableIndicator), $(_0x1b6e15(0x1ec))[_0x1b6e15(0x200)](curStep), steps['hide'](), $(_0x1b6e15(0xd0))['hide'](), $(_0x1b6e15(0x10f))['each'](function() {
    const _0x5576ec = _0x1b6e15;
    $(this)['attr'](_0x5576ec(0x168), _0x5576ec(0x124));
});

function getParams() {
    const _0x5349f3 = _0x1b6e15;
    urlFormly[_0x5349f3(0x142)][_0x5349f3(0x180)](function(_0x5c1d99, _0x38c6f3) {
        const _0x1532c3 = _0x5349f3;
        searchQ[_0x1532c3(0xfa)]({ 'val': _0x5c1d99, 'key': _0x38c6f3 });
    });
}

function getSafe(_0x46a9bb, _0x21a17a) { try { return _0x46a9bb(); } catch (_0x28f06c) { return _0x21a17a; } }

function phoneAutoFormat(_0x2a882c) {
    var _0x36a095 = '';
    return function(_0x473799) {
        const _0x21a42e = _0x2051;
        var _0x3b10d1 = '',
            _0x2471f2 = _0x473799[_0x21a42e(0xbf)](/\D/g, ''),
            _0x3ee423 = 0x0,
            _0x5d7fca = 0x0;
        while (_0x3ee423 < _0x2471f2[_0x21a42e(0xe5)] && _0x5d7fca < _0x2a882c[_0x21a42e(0xe5)]) { _0x2a882c[_0x5d7fca] === 'x' ? (_0x3b10d1 += _0x2471f2[_0x3ee423], _0x3ee423++) : _0x3b10d1 += _0x2a882c[_0x5d7fca], _0x5d7fca++; }
        if (_0x473799[_0x21a42e(0xe5)] < _0x36a095['length']) {
            var _0x648891 = _0x2a882c[_0x21a42e(0x138)](_0x5d7fca);
            _0x3b10d1 += _0x648891['replace'](/x/g, '');
        }
        return _0x36a095 = _0x3b10d1, _0x3b10d1;
    };
}

function validateURL(_0x17ee58) { const _0x44ec24 = _0x1b6e15; return urlPattern[_0x44ec24(0x1b2)](_0x17ee58) ? !![] : ![]; }
quiz && steps[_0x1b6e15(0x201)](function() {
    const _0x13c826 = _0x1b6e15;
    $(this)['children']()[_0x13c826(0x1a4)](_0x13c826(0x17c), !![]), $(this)[_0x13c826(0x100)]()['attr'](_0x13c826(0x1cd), 0xfa);
});

function disableBtn(_0x419729) {
    const _0x221c4e = _0x1b6e15;
    fill = ![], !customError && ($(_0x221c4e(0x117))[_0x221c4e(0x203)]({ 'opacity': _0x221c4e(0x1e5), 'pointer-events': _0x221c4e(0x103) }), $(_0x221c4e(0x117))['addClass'](_0x221c4e(0x111)), $('[data-form=\x22submit-btn\x22]')['css']({ 'opacity': _0x221c4e(0x1e5), 'pointer-events': _0x221c4e(0x103) }), $(_0x221c4e(0x1fd))[_0x221c4e(0x1c9)](_0x221c4e(0x111)), $(_0x221c4e(0xc9))[_0x221c4e(0x203)]({ 'opacity': _0x221c4e(0x1e5), 'pointer-events': _0x221c4e(0x103) }), $('[data-form-ms=\x22submit-btn\x22]')[_0x221c4e(0x1c9)]('disabled'));
}

function enableBtn() {
    const _0xf98058 = _0x1b6e15;
    fill = !![], $(_0xf98058(0x117))[_0xf98058(0x203)]({ 'pointer-events': _0xf98058(0xe6), 'opacity': '1' }), $(_0xf98058(0x117))['removeClass']('disabled'), $(_0xf98058(0x1fd))['css']({ 'pointer-events': _0xf98058(0xe6), 'opacity': '1' }), $(_0xf98058(0x1fd))['removeClass'](_0xf98058(0x111)), $(_0xf98058(0xc9))['css']({ 'pointer-events': 'auto', 'opacity': '1' }), $('[data-form-ms=\x22submit-btn\x22]')[_0xf98058(0xa7)](_0xf98058(0x111));
}

function saveLastAnswer(_0x1bcf04) {
    const _0x19c0ea = _0x1b6e15;
    localStorage[_0x19c0ea(0x1db)](_0x19c0ea(0x1a9)), localStorage[_0x19c0ea(0x161)]('formlyLastStepAnswer', JSON[_0x19c0ea(0xd2)](_0x1bcf04));
}

function saveFilledInput() {
    const _0x64b1f4 = _0x1b6e15;
    $(_0x64b1f4(0x197))['not'](_0x64b1f4(0x15c))[_0x64b1f4(0x201)](function() {
        const _0xf70702 = _0x64b1f4;
        $(this)[_0xf70702(0x1a4)](_0xf70702(0x168)) === _0xf70702(0x1e6) || $(this)[_0xf70702(0x1a4)](_0xf70702(0x168)) === _0xf70702(0x13c) ? $(this)[_0xf70702(0x206)]('checked') && (filledInput[_0xf70702(0x20e)](_0x2318c8 => _0x2318c8[_0xf70702(0x1cb)] === $(this)[_0xf70702(0x1a4)](_0xf70702(0x1de))) ? (filledInput = filledInput[_0xf70702(0x119)](_0x79941d => _0x79941d[_0xf70702(0x1cb)] !== $(this)[_0xf70702(0x1a4)](_0xf70702(0x1de))), $(this)[_0xf70702(0x1e0)]() !== '' && filledInput['push']({ 'inputName': $(this)[_0xf70702(0x1a4)](_0xf70702(0x1de)), 'value': $(this)[_0xf70702(0x1e0)]() })) : $(this)[_0xf70702(0x1e0)]() !== '' && filledInput[_0xf70702(0xfa)]({ 'inputName': $(this)[_0xf70702(0x1a4)]('name'), 'value': $(this)[_0xf70702(0x1e0)]() })) : filledInput[_0xf70702(0x20e)](_0x29a5a2 => _0x29a5a2[_0xf70702(0x1cb)] === $(this)[_0xf70702(0x1a4)]('name')) ? (filledInput = filledInput[_0xf70702(0x119)](_0x2e941e => _0x2e941e[_0xf70702(0x1cb)] !== $(this)['attr'](_0xf70702(0x1de))), $(this)[_0xf70702(0x1e0)]() !== '' && filledInput[_0xf70702(0xfa)]({ 'inputName': $(this)['attr'](_0xf70702(0x1de)), 'value': $(this)[_0xf70702(0x1e0)]() })) : $(this)['val']() !== '' && filledInput['push']({ 'inputName': $(this)[_0xf70702(0x1a4)]('name'), 'value': $(this)[_0xf70702(0x1e0)]() });
    }), trackLastStep && (formlyLastStep > x ? lastStep = formlyLastStep : lastStep = x, localStorage[_0x64b1f4(0x1db)](_0x64b1f4(0x1f2)), localStorage[_0x64b1f4(0x161)](_0x64b1f4(0x1f2), lastStep)), localStorage[_0x64b1f4(0x1db)]('filledInput'), localStorage[_0x64b1f4(0x161)](_0x64b1f4(0x16a), JSON[_0x64b1f4(0xd2)](filledInput));
}

function scrollTop() {
    const _0x12ac61 = _0x1b6e15;
    scrollToTop && $(_0x12ac61(0x1f7))[_0x12ac61(0xfb)]({ 'scrollTop': $('[data-form=\x22multistep\x22]')[_0x12ac61(0x14d)]()[_0x12ac61(0x10e)] - scrollTopOffset }, 0x3e8);
}

function updateStep() {
    const _0x2d3c58 = _0x1b6e15;
    scrollTop(), skip = ![], $(_0x2d3c58(0x1bb))[_0x2d3c58(0xa7)]('disabled');
    $(_0x2d3c58(0x128))[_0x2d3c58(0x13d)]('clickable') && (steps[_0x2d3c58(0x109)](_0x2d3c58(0xba))[_0x2d3c58(0x201)](function() {
        const _0x621457 = _0x2d3c58;
        $($(_0x621457(0x1bb))[$(this)['parents'](_0x621457(0x211))[_0x621457(0x156)]()]), $(this)['val']() === '' && emptyInput++;
    }), emptyInput > 0x0 ? $(_0x2d3c58(0xf1))[_0x2d3c58(0x1c9)](_0x2d3c58(0x111)) : $(_0x2d3c58(0xf1))[_0x2d3c58(0xa7)](_0x2d3c58(0x111)));
    $(_0x2d3c58(0x1bb))['removeClass'](_0x2d3c58(0x10b)), $(_0x2d3c58(0x1bb))['addClass'](_0x2d3c58(0x111)), $($(_0x2d3c58(0x1bb))[x])[_0x2d3c58(0x1c9)](_0x2d3c58(0x10b)), selection = selections[_0x2d3c58(0x119)](_0x272897 => _0x272897[_0x2d3c58(0x1e4)] === x - 0x1);
    next && (x = getSafe(() => selection[0x0]['skipTo']) ? parseInt(getSafe(() => selection[0x0][_0x2d3c58(0x18f)])) : x);
    $(_0x2d3c58(0x104))[_0x2d3c58(0x11c)](), steps[_0x2d3c58(0x11c)]();
    reinitIX === !![] && window[_0x2d3c58(0x1eb)][_0x2d3c58(0xf7)]();
    $(progressbar)[_0x2d3c58(0xa7)](_0x2d3c58(0x10b));
    for (i = 0x0; i <= x; i++) { countCard ? $(progressbar[i])['addClass']('current') : !$(steps[i])[_0x2d3c58(0x13d)](_0x2d3c58(0x1d9)) && $(progressbar[i])[_0x2d3c58(0x1c9)](_0x2d3c58(0x10b)); }
    reinitIX === !![] ? (window['Webflow'] && window[_0x2d3c58(0x1eb)][_0x2d3c58(0xbc)]('ix2')[_0x2d3c58(0xca)](), document[_0x2d3c58(0xb1)](new Event(_0x2d3c58(0x1ac))), $(steps[x])[_0x2d3c58(0x129)]()) : $(steps[x])[_0x2d3c58(0x214)]('slow');
    $(_0x2d3c58(0x13e))[_0x2d3c58(0xa7)](_0x2d3c58(0xb3));
    x === 0x0 && !$(steps[x])[_0x2d3c58(0x13d)]('card') && ($(steps[x])[_0x2d3c58(0x109)]('[data-answer]')[_0x2d3c58(0x129)](), $(steps[x])[_0x2d3c58(0x109)](_0x2d3c58(0x104))['addClass'](_0x2d3c58(0xb3)));
    selection[_0x2d3c58(0xe5)] > 0x0 ? ($(steps[x])[_0x2d3c58(0x109)](_0x2d3c58(0x105) + selection[0x0]['selected'] + '\x22]')['show'](), $(steps[x])[_0x2d3c58(0x109)](_0x2d3c58(0x105) + selection[0x0][_0x2d3c58(0x116)] + '\x22]')[_0x2d3c58(0x1c9)](_0x2d3c58(0xb3))) : ($(steps[x])[_0x2d3c58(0x109)]('[data-answer=\x22' + answer + '\x22]')[_0x2d3c58(0x129)](), $(steps[x])['find'](_0x2d3c58(0x105) + answer + '\x22]')[_0x2d3c58(0x1c9)](_0x2d3c58(0xb3)));
    if (x === 0x0) $(_0x2d3c58(0xb8))[_0x2d3c58(0x11c)](), $(_0x2d3c58(0x117))[_0x2d3c58(0x129)](), $('[data-form=\x22submit-btn\x22]')['hide']();
    else {
        if (x === steps[_0x2d3c58(0xe5)] - 0x1 || $(steps[x])[_0x2d3c58(0x109)](_0x2d3c58(0xc0))[_0x2d3c58(0xe5)] > 0x0) {
            $(_0x2d3c58(0x117))[_0x2d3c58(0x11c)]();
            if ($(steps[x])['find']('[data-form=\x22next-btn\x22][data-submit-show]')['data'](_0x2d3c58(0xf5))) $(steps[x])[_0x2d3c58(0x109)](_0x2d3c58(0x174))[_0x2d3c58(0x129)]();
            else $(_0x2d3c58(0x117))[_0x2d3c58(0x13d)](_0x2d3c58(0xf5)) && $('[data-form=\x22next-btn\x22]')[_0x2d3c58(0x129)]();
            $(_0x2d3c58(0x1fd))[_0x2d3c58(0x129)](), $(_0x2d3c58(0xc9))[_0x2d3c58(0x129)](), $(_0x2d3c58(0xb8))[_0x2d3c58(0x129)]();
        } else $('[data-form=\x22next-btn\x22]')[_0x2d3c58(0x129)](), $(_0x2d3c58(0xb8))[_0x2d3c58(0x129)](), $(_0x2d3c58(0x1fd))[_0x2d3c58(0x11c)](), $(_0x2d3c58(0xc9))[_0x2d3c58(0x11c)]();
    }
    $($(steps[x])[_0x2d3c58(0x109)](_0x2d3c58(0x121))[0x0])[_0x2d3c58(0xf3)](), $($(steps[x])['find'](_0x2d3c58(0xcc))[0x0])[_0x2d3c58(0xf3)](), validation();
    for (idx = 0x0; idx <= x; idx++) { $($(_0x2d3c58(0x1bb))[idx])[_0x2d3c58(0xa7)](_0x2d3c58(0x111)); }
}

function validateEmail(_0x41aaae, _0xc11fcd, _0x5bb974) {
    const _0x4ee17e = _0x1b6e15;
    let _0x5d8534 = _0x41aaae[_0x4ee17e(0xc1)]('@') ? _0x41aaae[_0x4ee17e(0x1a3)]('@')[0x1][_0x4ee17e(0x1a3)]('.')[0x0] : [];
    dom = [];
    _0xc11fcd !== undefined && _0xc11fcd[_0x4ee17e(0x1a3)](',')[_0x4ee17e(0x180)](function(_0x4b2565) {
        const _0x171154 = _0x4ee17e;
        _0x4b2565[_0x171154(0xc1)](_0x5d8534) && dom['push'](_0x5d8534);
    });
    dom[_0x4ee17e(0xe5)] > 0x0 ? domainAllowed = ![] : domainAllowed = !![];
    var _0x24f37e = /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,20})?$/;
    !_0x24f37e['test'](_0x41aaae) || !domainAllowed ? (emailFilled = ![], unfilledArr[_0x4ee17e(0xfa)]({ 'input': _0x5bb974 })) : emailFilled = !![];
}

function phoneValidation(_0x21e79f, _0x299dbc, _0xe18a98) {
    if (phoneFormat) return _0x299dbc >= _0xe18a98 ? !![] : ![];
    else { if (_0x299dbc >= _0xe18a98) return !![]; }
}

function validation() {
    const _0xaa6072 = _0x1b6e15;
    $(steps[x])[_0xaa6072(0x13d)](_0xaa6072(0x1d9)) && enableBtn();
    unfilledArr = [], inputFilled = !![], radioFilled = !![], checkboxFilled = !![], numFilled = !![], fileFilled = !![], dateFilled = !![], timeFilled = !![], selectFilled = !![], textareaFilled = !![], telFilled = !![], emailFilled = !![], passwordFilled = !![], emptyInput = 0x0, empReqInput = [], empReqDate = [], empReqTime = [], empReqSelect = [], empReqTel = [], empReqTextarea = [], empReqNum = [], empReqFile = [], empReqRadio = [], textareaLength = $(steps[x])[_0xaa6072(0x109)]('textarea[required]:visible')[_0xaa6072(0xe5)], textInputLength = $(steps[x])['find'](_0xaa6072(0x205))[_0xaa6072(0xe5)], selectInputLength = $(steps[x])[_0xaa6072(0x109)](_0xaa6072(0x186))[_0xaa6072(0xe5)], emailInputLength = $(steps[x])[_0xaa6072(0x109)](_0xaa6072(0xd5))[_0xaa6072(0xe5)], checkboxInputLength = $(steps[x])[_0xaa6072(0x109)](_0xaa6072(0x1e9))[_0xaa6072(0xe5)];
    textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0 ? disableBtn() : enableBtn();
    checkCount = $(steps[x])[_0xaa6072(0x13d)](_0xaa6072(0x1e6)) ? $(steps[x])[_0xaa6072(0x13d)](_0xaa6072(0x1e6)) : $(steps[x])[_0xaa6072(0x109)]('[data-checkbox]')[_0xaa6072(0xe5)] > 0x0 ? $(steps[x])[_0xaa6072(0x109)]('[data-checkbox]')[_0xaa6072(0x13d)](_0xaa6072(0x1e6)) : 0x0;
    if (!logicExtra) $(steps[x])[_0xaa6072(0x109)](_0xaa6072(0x107))['is'](_0xaa6072(0x139)) && (checkCount === '*' || checkCount > $(steps[x])[_0xaa6072(0x109)](_0xaa6072(0xe0))[_0xaa6072(0xe5)] ? $(steps[x])[_0xaa6072(0x109)](_0xaa6072(0xe0))[_0xaa6072(0x201)](function() {
        const _0x342d50 = _0xaa6072;
        $(this)['is'](_0x342d50(0x1e2)) ? $(steps[x])[_0x342d50(0x109)](_0x342d50(0xa2))[_0x342d50(0xe5)] < 0x1 && (checkboxFilled = !![], resetInputErrorMessage($(this)[_0x342d50(0x1a4)]('name'))) : (checkboxFilled = ![], unfilledArr[_0x342d50(0xfa)]({ 'input': $(this)['attr']('name') }));
    }) : $(steps[x])[_0xaa6072(0x109)](_0xaa6072(0x11b))[_0xaa6072(0xe5)] >= checkCount ? $(steps[x])[_0xaa6072(0x109)](_0xaa6072(0xa2))[_0xaa6072(0xe5)] > 0x0 ? $(steps[x])[_0xaa6072(0x109)](_0xaa6072(0xa2))[_0xaa6072(0x201)](function() {
        const _0x5c3e24 = _0xaa6072;
        checkboxFilled = ![];
        let _0x35767d = $(steps[x])[_0x5c3e24(0x109)](_0x5c3e24(0xa2))[_0x5c3e24(0xe5)],
            _0x693541 = $(steps[x])['find'](_0x5c3e24(0x1fc))[_0x5c3e24(0xe5)];
        _0x35767d - _0x693541 === 0x0 ? (checkboxFilled = !![], resetInputErrorMessage($(steps[x])['find'](':input[type=\x22checkbox\x22]')['attr'](_0x5c3e24(0x1de)))) : (checkboxFilled = ![], $(steps[x])['find'](':input[type=\x22checkbox\x22][required]:not(:checked)')[_0x5c3e24(0x201)](function() {
            const _0x308cb8 = _0x5c3e24;
            unfilledArr[_0x308cb8(0xfa)]({ 'input': $(this)[_0x308cb8(0x1a4)]('name') });
        }));
    }) : (checkboxFilled = !![], resetInputErrorMessage($(steps[x])['find'](_0xaa6072(0xe0))['attr'](_0xaa6072(0x1de)))) : (checkboxFilled = ![], $(steps[x])['find'](_0xaa6072(0xa2))[_0xaa6072(0x201)](function() {
        const _0x549545 = _0xaa6072;
        $(this)['not'](_0x549545(0x1e2)) && unfilledArr[_0x549545(0xfa)]({ 'input': $(this)[_0x549545(0x1a4)](_0x549545(0x1de)) });
    }), unfilledArr[_0xaa6072(0xfa)]({ 'input': $(steps[x])['find'](':input[type=\x22checkbox\x22]')[_0xaa6072(0x1a4)](_0xaa6072(0x1de)) }))), $(steps[x])[_0xaa6072(0x109)](_0xaa6072(0x21e))[_0xaa6072(0x201)](function(_0x439438) {
        const _0xd2a736 = _0xaa6072;
        var _0x30ce7d = $(this)[_0xd2a736(0x1a4)](_0xd2a736(0x1de));
        $(_0xd2a736(0x10c) + _0x30ce7d + '\x22]:checked')[_0xd2a736(0xe5)] == 0x0 ? (!empReqRadio['find'](_0x23dcf4 => _0x23dcf4[_0xd2a736(0x1e1)] === _0x439438) && empReqRadio['push']({ 'input': _0x439438 }), unfilledArr['push']({ 'input': $(this)[_0xd2a736(0x1a4)](_0xd2a736(0x1de)) })) : empReqRadio = empReqRadio['filter'](_0x515b83 => _0x515b83['input'] !== _0x439438), empReqRadio[_0xd2a736(0xe5)] === 0x0 ? radioFilled = !![] : radioFilled = ![];
    }), $(steps[x])[_0xaa6072(0x109)](_0xaa6072(0x16f))[_0xaa6072(0x201)](function(_0x47fa35) {
        const _0x430ef5 = _0xaa6072;
        let _0x36c83d = $(this)['val']()[_0x430ef5(0xe5)],
            _0x67a9d1 = $(this)[_0x430ef5(0x13d)](_0x430ef5(0x146)) ? $(this)[_0x430ef5(0x13d)]('min-character') : 0x0;
        $(this)[_0x430ef5(0x1e0)]() !== '' && _0x36c83d >= _0x67a9d1 ? empReqInput = empReqInput[_0x430ef5(0x119)](_0x58c42c => _0x58c42c['input'] !== _0x47fa35) : (!empReqInput['find'](_0x1e61d6 => _0x1e61d6[_0x430ef5(0x1e1)] === _0x47fa35) && empReqInput[_0x430ef5(0xfa)]({ 'input': _0x47fa35 }), unfilledArr[_0x430ef5(0xfa)]({ 'input': $(this)[_0x430ef5(0x1a4)](_0x430ef5(0x1de)) })), empReqInput[_0x430ef5(0xe5)] === 0x0 ? inputFilled = !![] : inputFilled = ![];
    }), $(steps[x])[_0xaa6072(0x109)](_0xaa6072(0x188))[_0xaa6072(0x201)](function(_0x581ef3) {
        const _0x3c5132 = _0xaa6072;
        let _0x57fbfa = $(this)[_0x3c5132(0x1e0)]()[_0x3c5132(0xe5)],
            _0x2848ec = $(this)[_0x3c5132(0x13d)](_0x3c5132(0x146)) ? $(this)[_0x3c5132(0x13d)]('min-character') : 0x0;
        $(this)['val']() !== '' && _0x57fbfa >= _0x2848ec ? empReqPassword = empReqPassword[_0x3c5132(0x119)](_0x3372e9 => _0x3372e9[_0x3c5132(0x1e1)] !== _0x581ef3) : (!empReqPassword[_0x3c5132(0x109)](_0x4523d5 => _0x4523d5[_0x3c5132(0x1e1)] === _0x581ef3) && empReqPassword[_0x3c5132(0xfa)]({ 'input': _0x581ef3 }), unfilledArr[_0x3c5132(0xfa)]({ 'input': $(this)['attr'](_0x3c5132(0x1de)) })), empReqPassword[_0x3c5132(0xe5)] === 0x0 ? passwordFilled = !![] : passwordFilled = ![];
    }), $(steps[x])[_0xaa6072(0x109)](_0xaa6072(0x17e))[_0xaa6072(0x201)](function(_0x448fe5) {
        const _0x264b52 = _0xaa6072;
        let _0x2a3836 = $(this)[_0x264b52(0x1e0)]()[_0x264b52(0xe5)],
            _0x212fb9 = $(this)[_0x264b52(0x13d)](_0x264b52(0x146)) ? $(this)[_0x264b52(0x13d)](_0x264b52(0x146)) : 0x0;
        $(this)[_0x264b52(0x1e0)]() !== '' && _0x2a3836 >= _0x212fb9 ? empReqUrl = empReqUrl[_0x264b52(0x119)](_0x7bd6b6 => _0x7bd6b6[_0x264b52(0x1e1)] !== _0x448fe5) : (!empReqTime['find'](_0x2b224f => _0x2b224f[_0x264b52(0x1e1)] === _0x448fe5) && empReqUrl[_0x264b52(0xfa)]({ 'input': _0x448fe5 }), unfilledArr[_0x264b52(0xfa)]({ 'input': $(this)[_0x264b52(0x1a4)](_0x264b52(0x1de)) })), empReqUrl[_0x264b52(0xe5)] === 0x0 && validateURL($(this)[_0x264b52(0x1e0)]()) ? urlFilled = !![] : urlFilled = ![];
    }), $(steps[x])[_0xaa6072(0x109)](_0xaa6072(0x1e7))[_0xaa6072(0x201)](function(_0x1fa487) {
        const _0x12f0bf = _0xaa6072;
        let _0x4b802e = $(this)[_0x12f0bf(0x1e0)]()['length'],
            _0x35ebf6 = $(this)[_0x12f0bf(0x13d)](_0x12f0bf(0x146)) ? $(this)[_0x12f0bf(0x13d)](_0x12f0bf(0x146)) : 0x0;
        $(this)[_0x12f0bf(0x1e0)]() !== '' && _0x4b802e >= _0x35ebf6 ? empReqTime = empReqTime[_0x12f0bf(0x119)](_0x1dd2ee => _0x1dd2ee['input'] !== _0x1fa487) : (!empReqTime[_0x12f0bf(0x109)](_0x2bb9ce => _0x2bb9ce['input'] === _0x1fa487) && empReqTime[_0x12f0bf(0xfa)]({ 'input': _0x1fa487 }), unfilledArr['push']({ 'input': $(this)[_0x12f0bf(0x1a4)](_0x12f0bf(0x1de)) })), empReqTime[_0x12f0bf(0xe5)] === 0x0 ? timeFilled = !![] : timeFilled = ![];
    }), $(steps[x])[_0xaa6072(0x109)](_0xaa6072(0xf9))[_0xaa6072(0x201)](function(_0x4db5fa) {
        const _0x18954d = _0xaa6072;
        $(this)[_0x18954d(0x1e0)]() !== '' ? empReqDate = empReqDate[_0x18954d(0x119)](_0xeadd47 => _0xeadd47[_0x18954d(0x1e1)] !== _0x4db5fa) : (!empReqDate['find'](_0x2d42e5 => _0x2d42e5[_0x18954d(0x1e1)] === _0x4db5fa) && empReqDate[_0x18954d(0xfa)]({ 'input': _0x4db5fa }), unfilledArr[_0x18954d(0xfa)]({ 'input': $(this)['attr'](_0x18954d(0x1de)) })), empReqDate[_0x18954d(0xe5)] === 0x0 ? dateFilled = !![] : dateFilled = ![];
    }), $(steps[x])[_0xaa6072(0x109)](':input[type=\x22tel\x22][required]')['each'](function(_0x3a1981) {
        const _0x3ede27 = _0xaa6072;
        if ($(this)[_0x3ede27(0x1e0)]() !== '') {
            let _0x292b33 = $(this)['val']()[_0x3ede27(0xe5)],
                _0xea4aba = $(this)[_0x3ede27(0x13d)](_0x3ede27(0x146)) ? $(this)['data'](_0x3ede27(0x146)) : 0x0;
            if ($(this)['data']('phone-autoformat')) {
                var _0x5219a0 = phoneAutoFormat($(this)[_0x3ede27(0x13d)]('phone-autoformat'));
                $(this)['val'](_0x5219a0($(this)[_0x3ede27(0x1e0)]()));
            }
            phoneValidation($(this)['val'](), _0x292b33, _0xea4aba) ? empReqTel = empReqTel['filter'](_0x130df0 => _0x130df0[_0x3ede27(0x1e1)] !== _0x3a1981) : empReqTel[_0x3ede27(0xfa)]({ 'input': _0x3a1981 });
        } else !empReqTel[_0x3ede27(0x109)](_0x3e6644 => _0x3e6644[_0x3ede27(0x1e1)] === _0x3a1981) && empReqTel[_0x3ede27(0xfa)]({ 'input': _0x3a1981 }), unfilledArr[_0x3ede27(0xfa)]({ 'input': $(this)[_0x3ede27(0x1a4)](_0x3ede27(0x1de)) });
        empReqTel[_0x3ede27(0xe5)] === 0x0 ? telFilled = !![] : telFilled = ![];
    }), $(steps[x])[_0xaa6072(0x109)](_0xaa6072(0x1ad))[_0xaa6072(0x201)](function(_0xff291f) {
        const _0x496917 = _0xaa6072;
        $(this)['val']() !== '' ? empReqFile = empReqFile['filter'](_0x240060 => _0x240060[_0x496917(0x1e1)] !== _0xff291f) : (!empReqFile['find'](_0x44a39d => _0x44a39d[_0x496917(0x1e1)] === _0xff291f) && empReqFile[_0x496917(0xfa)]({ 'input': _0xff291f }), unfilledArr[_0x496917(0xfa)]({ 'input': $(this)[_0x496917(0x1a4)](_0x496917(0x1de)) })), empReqFile['length'] === 0x0 ? fileFilled = !![] : fileFilled = ![];
    }), $(steps[x])[_0xaa6072(0x109)](_0xaa6072(0xda))['each'](function(_0x3052e3) {
        const _0x31a6c3 = _0xaa6072;
        let _0x1fe60a = $(this)[_0x31a6c3(0x1e0)]()[_0x31a6c3(0xe5)],
            _0x4d8e84 = $(this)[_0x31a6c3(0x13d)](_0x31a6c3(0x146)) ? $(this)[_0x31a6c3(0x13d)](_0x31a6c3(0x146)) : 0x0;
        $(this)[_0x31a6c3(0x1e0)]() !== '' && _0x1fe60a >= _0x4d8e84 ? empReqNum = empReqNum[_0x31a6c3(0x119)](_0x466393 => _0x466393['input'] !== _0x3052e3) : (!empReqNum[_0x31a6c3(0x109)](_0x4f0efc => _0x4f0efc['input'] === _0x3052e3) && empReqNum[_0x31a6c3(0xfa)]({ 'input': _0x3052e3 }), unfilledArr['push']({ 'input': $(this)[_0x31a6c3(0x1a4)](_0x31a6c3(0x1de)) })), empReqNum['length'] === 0x0 ? numFilled = !![] : numFilled = ![];
    }), $(steps[x])[_0xaa6072(0x109)]('select[required]')['each'](function(_0x222f1b) {
        const _0x10f355 = _0xaa6072;
        let _0x4d8018 = $(this)[_0x10f355(0x1e0)]();
        _0x4d8018 === '' && (_0x4d8018 = null), _0x4d8018 != null ? empReqSelect = empReqSelect[_0x10f355(0x119)](_0x562d3e => _0x562d3e[_0x10f355(0x1e1)] !== _0x222f1b) : (!empReqSelect[_0x10f355(0x109)](_0x9a870d => _0x9a870d['input'] === _0x222f1b) && empReqSelect['push']({ 'input': _0x222f1b }), unfilledArr['push']({ 'input': $(this)[_0x10f355(0x1a4)](_0x10f355(0x1de)) })), empReqSelect[_0x10f355(0xe5)] === 0x0 ? selectFilled = !![] : selectFilled = ![];
    }), $(steps[x])[_0xaa6072(0x109)](_0xaa6072(0x1ee))[_0xaa6072(0x201)](function(_0x2aeebb) {
        const _0x5b1f33 = _0xaa6072;
        let _0x7ca50b = $(this)[_0x5b1f33(0x1e0)]()[_0x5b1f33(0xe5)],
            _0x3cf49a = $(this)[_0x5b1f33(0x13d)](_0x5b1f33(0x146)) ? $(this)[_0x5b1f33(0x13d)](_0x5b1f33(0x146)) : 0x0;
        $(this)['val']() !== '' && _0x7ca50b >= _0x3cf49a ? empReqTextarea = empReqTextarea[_0x5b1f33(0x119)](_0x4da2e1 => _0x4da2e1[_0x5b1f33(0x1e1)] !== _0x2aeebb) : (!empReqTextarea[_0x5b1f33(0x109)](_0x3eda37 => _0x3eda37['input'] === _0x2aeebb) && empReqTextarea['push']({ 'input': _0x2aeebb }), unfilledArr[_0x5b1f33(0xfa)]({ 'input': $(this)['attr'](_0x5b1f33(0x1de)) })), empReqTextarea[_0x5b1f33(0xe5)] === 0x0 ? textareaFilled = !![] : textareaFilled = ![];
    }), $(steps[x])[_0xaa6072(0x109)](_0xaa6072(0x1fa))[_0xaa6072(0x201)](function() {
        const _0x297017 = _0xaa6072;
        $(this)[_0x297017(0x1e0)]() !== '' ? validateEmail($(this)['val'](), $(this)['data']('block-domain'), $(this)['attr'](_0x297017(0x1de))) : (emailFilled = ![], unfilledArr[_0x297017(0xfa)]({ 'input': $(this)[_0x297017(0x1a4)](_0x297017(0x1de)) }));
    });
    else {
        if ($(steps[x])[_0xaa6072(0x13d)](_0xaa6072(0x1d9))) answer = $(steps[x])[_0xaa6072(0x109)]('[data-go-to]')[_0xaa6072(0x13d)](_0xaa6072(0x152)), selections = selections[_0xaa6072(0x119)](_0x2d3e06 => _0x2d3e06[_0xaa6072(0x1e4)] !== x), selections['push']({ 'step': x, 'selected': answer }), next = !![], back = ![];
        else $(steps[x])[_0xaa6072(0x109)](_0xaa6072(0x13e))[_0xaa6072(0x13d)]('card') && (answer = $(steps[x])['find']('.active-answer-card')[_0xaa6072(0x13d)](_0xaa6072(0x152)), selections = selections['filter'](_0xda44ae => _0xda44ae['step'] !== x), selections[_0xaa6072(0xfa)]({ 'step': x, 'selected': answer }), next = !![], back = ![]);
        $(steps[x])[_0xaa6072(0x109)](_0xaa6072(0x13e))[_0xaa6072(0x109)](_0xaa6072(0x107))['is']('[type=\x22checkbox\x22]') && (checkCount === '*' || checkCount > $(steps[x])[_0xaa6072(0x109)](_0xaa6072(0xe0))['length'] ? $(steps[x])['find'](':input[type=\x22checkbox\x22]')[_0xaa6072(0x201)](function() {
            const _0x4793b0 = _0xaa6072;
            $(this)['is'](_0x4793b0(0x1e2)) ? $(steps[x])[_0x4793b0(0x109)](_0x4793b0(0xba))[_0x4793b0(0xe5)] < 0x1 && (skipTo = undefined, $(this)['parents'](_0x4793b0(0xcd))['data'](_0x4793b0(0x123)) && (skipTo = $(this)['parents'](_0x4793b0(0xcd))['data'](_0x4793b0(0x123))), $(this)[_0x4793b0(0xeb)](_0x4793b0(0x202))['attr'](_0x4793b0(0x18b)) && (answer = $(this)[_0x4793b0(0xeb)](_0x4793b0(0x202))[_0x4793b0(0x1a4)](_0x4793b0(0x18b)), selections = selections[_0x4793b0(0x119)](_0x397e6f => _0x397e6f[_0x4793b0(0x1e4)] !== x), selections[_0x4793b0(0xfa)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x4793b0(0x119)](_0x46624f => _0x46624f[_0x4793b0(0x1e4)] !== skipTo - 0x2), selections[_0x4793b0(0xfa)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x4793b0(0x1b4)](_0x47b0e5 => _0x47b0e5[_0x4793b0(0x1e4)] === x), selections[objIndex]['skipTo'] = parseInt(skipTo) - 0x1, selections[objIndex]['backTo'] = x)), checkboxFilled = !![], $(steps[x])[_0x4793b0(0x109)](_0x4793b0(0x1fc))[_0x4793b0(0xe5)] >= $(steps[x])['find'](_0x4793b0(0xa2))[_0x4793b0(0xe5)] && resetInputErrorMessage($(steps[x])[_0x4793b0(0x109)](_0x4793b0(0xe0))[_0x4793b0(0x1a4)]('name'))) : (checkboxFilled = ![], unfilledArr['push']({ 'input': $(this)[_0x4793b0(0x1a4)](_0x4793b0(0x1de)) }));
        }) : $(steps[x])[_0xaa6072(0x109)]('.active-answer-card')[_0xaa6072(0x109)](_0xaa6072(0x11b))[_0xaa6072(0xe5)] >= checkCount ? ($(steps[x])['find'](_0xaa6072(0x13e))[_0xaa6072(0x109)](_0xaa6072(0xe0))[_0xaa6072(0xeb)](_0xaa6072(0x202))[_0xaa6072(0x1a4)](_0xaa6072(0x18b)) && (skipTo = undefined, $(steps[x])[_0xaa6072(0x109)]('.active-answer-card')[_0xaa6072(0x109)](_0xaa6072(0xe0))[_0xaa6072(0xeb)](_0xaa6072(0xcd))[_0xaa6072(0x1a4)](_0xaa6072(0x1aa)) && (skipTo = $(steps[x])['find']('.active-answer-card')[_0xaa6072(0x109)](_0xaa6072(0x11b))[_0xaa6072(0xeb)](_0xaa6072(0xcd))[_0xaa6072(0x1a4)](_0xaa6072(0x1aa))), answer = $(steps[x])[_0xaa6072(0x109)](_0xaa6072(0x13e))[_0xaa6072(0x109)](_0xaa6072(0xe0))[_0xaa6072(0xeb)]('[data-go-to]')['attr']('data-go-to'), selections = selections['filter'](_0x544e7e => _0x544e7e['step'] !== x), selections[_0xaa6072(0xfa)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0xaa6072(0x119)](_0x2d748b => _0x2d748b['step'] !== skipTo - 0x2), selections[_0xaa6072(0xfa)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections['findIndex'](_0x1de2e6 => _0x1de2e6['step'] === x), selections[objIndex][_0xaa6072(0x18f)] = parseInt(skipTo) - 0x1, selections[objIndex][_0xaa6072(0xd9)] = x)), checkboxFilled = !![], $(steps[x])[_0xaa6072(0x109)](_0xaa6072(0x1fc))['length'] >= $(steps[x])['find'](_0xaa6072(0xa2))[_0xaa6072(0xe5)] && resetInputErrorMessage($(steps[x])[_0xaa6072(0x109)](_0xaa6072(0xe0))['attr'](_0xaa6072(0x1de)))) : (checkboxFilled = ![], $(steps[x])[_0xaa6072(0x109)](':input[type=\x22checkbox\x22][required]')['each'](function() {
            const _0xefdcb2 = _0xaa6072;
            $(this)[_0xefdcb2(0x194)](_0xefdcb2(0x1e2)) && unfilledArr[_0xefdcb2(0xfa)]({ 'input': $(this)[_0xefdcb2(0x1a4)](_0xefdcb2(0x1de)) });
        }))), $(steps[x])[_0xaa6072(0x109)](_0xaa6072(0x13e))[_0xaa6072(0x109)](_0xaa6072(0x21e))[_0xaa6072(0x201)](function(_0x44edc9) {
            const _0x2ec47f = _0xaa6072;
            var _0x3b89da = $(this)[_0x2ec47f(0x1a4)](_0x2ec47f(0x1de));
            $(_0x2ec47f(0x10c) + _0x3b89da + _0x2ec47f(0x134))[_0x2ec47f(0xe5)] == 0x0 ? (!empReqRadio['find'](_0xaaa742 => _0xaaa742[_0x2ec47f(0x1e1)] === _0x44edc9) && empReqRadio['push']({ 'input': _0x44edc9 }), unfilledArr['push']({ 'input': $(this)[_0x2ec47f(0x1a4)](_0x2ec47f(0x1de)) })) : empReqRadio = empReqRadio[_0x2ec47f(0x119)](_0x4fd8fb => _0x4fd8fb[_0x2ec47f(0x1e1)] !== _0x44edc9), empReqRadio[_0x2ec47f(0xe5)] === 0x0 ? radioFilled = !![] : radioFilled = ![];
        }), $(steps[x])[_0xaa6072(0x109)]('.active-answer-card')[_0xaa6072(0x109)](_0xaa6072(0x16f))[_0xaa6072(0x201)](function(_0x57ed52) {
            const _0x621046 = _0xaa6072;
            let _0x430669 = $(this)[_0x621046(0x1e0)]()[_0x621046(0xe5)],
                _0x345a80 = $(this)[_0x621046(0x13d)]('min-character') ? $(this)[_0x621046(0x13d)](_0x621046(0x146)) : 0x0;
            $(this)['val']() !== '' && _0x430669 >= _0x345a80 ? empReqInput = empReqInput[_0x621046(0x119)](_0x2fbdc0 => _0x2fbdc0['input'] !== _0x57ed52) : (!empReqInput[_0x621046(0x109)](_0xbd2963 => _0xbd2963[_0x621046(0x1e1)] === _0x57ed52) && empReqInput[_0x621046(0xfa)]({ 'input': _0x57ed52 }), unfilledArr['push']({ 'input': $(this)['attr'](_0x621046(0x1de)) })), empReqInput[_0x621046(0xe5)] === 0x0 ? inputFilled = !![] : inputFilled = ![];
        }), $(steps[x])[_0xaa6072(0x109)](_0xaa6072(0x13e))['find'](':input[type=\x22text\x22]')[_0xaa6072(0x201)](function(_0x18ce3c) {
            const _0x2d364d = _0xaa6072;
            skipTo = undefined, $(this)[_0x2d364d(0xeb)](_0x2d364d(0xcd))[_0x2d364d(0x13d)](_0x2d364d(0x123)) !== '' && (skipTo = $(this)[_0x2d364d(0xeb)](_0x2d364d(0xcd))[_0x2d364d(0x13d)](_0x2d364d(0x123))), $(this)['parents']('[data-go-to]')['attr'](_0x2d364d(0x18b)) && (answer = $(this)[_0x2d364d(0xeb)]('[data-go-to]')['attr']('data-go-to'), selections = selections['filter'](_0x168a1a => _0x168a1a[_0x2d364d(0x1e4)] !== x), selections['push']({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x2d364d(0x119)](_0x47e693 => _0x47e693[_0x2d364d(0x1e4)] !== skipTo - 0x2), selections['push']({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x2d364d(0x1b4)](_0xacddcb => _0xacddcb['step'] === x), selections[objIndex][_0x2d364d(0x18f)] = parseInt(skipTo) - 0x1, selections[objIndex]['backTo'] = x));
        }), $(steps[x])[_0xaa6072(0x109)](_0xaa6072(0x13e))[_0xaa6072(0x109)](':input[type=\x22password\x22][required]')[_0xaa6072(0x201)](function(_0x19d984) {
            const _0x300acb = _0xaa6072;
            let _0x3134e5 = $(this)[_0x300acb(0x1e0)]()[_0x300acb(0xe5)],
                _0xae33b7 = $(this)[_0x300acb(0x13d)](_0x300acb(0x146)) ? $(this)['data'](_0x300acb(0x146)) : 0x0;
            $(this)['val']() !== '' && _0x3134e5 >= _0xae33b7 ? empReqPassword = empReqPassword[_0x300acb(0x119)](_0xceaaa4 => _0xceaaa4['input'] !== _0x19d984) : (!empReqPassword[_0x300acb(0x109)](_0x545d38 => _0x545d38['input'] === _0x19d984) && empReqPassword[_0x300acb(0xfa)]({ 'input': _0x19d984 }), unfilledArr[_0x300acb(0xfa)]({ 'input': $(this)[_0x300acb(0x1a4)](_0x300acb(0x1de)) })), empReqPassword['length'] === 0x0 ? passwordFilled = !![] : passwordFilled = ![];
        }), $(steps[x])[_0xaa6072(0x109)]('.active-answer-card')[_0xaa6072(0x109)](_0xaa6072(0x137))['each'](function(_0x10f6b2) {
            const _0x2cab50 = _0xaa6072;
            skipTo = undefined, $(this)[_0x2cab50(0xeb)](_0x2cab50(0xcd))['data']('skip-to') !== '' && (skipTo = $(this)[_0x2cab50(0xeb)](_0x2cab50(0xcd))[_0x2cab50(0x13d)](_0x2cab50(0x123))), $(this)[_0x2cab50(0xeb)](_0x2cab50(0x202))['attr']('data-go-to') && (answer = $(this)['parents'](_0x2cab50(0x202))[_0x2cab50(0x1a4)]('data-go-to'), selections = selections[_0x2cab50(0x119)](_0x4ee2a3 => _0x4ee2a3[_0x2cab50(0x1e4)] !== x), selections['push']({ 'step': x, 'selected': answer }), skipTo && (selections = selections['filter'](_0x49cd15 => _0x49cd15[_0x2cab50(0x1e4)] !== skipTo - 0x2), selections[_0x2cab50(0xfa)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x2cab50(0x1b4)](_0x5e4121 => _0x5e4121[_0x2cab50(0x1e4)] === x), selections[objIndex]['skipTo'] = parseInt(skipTo) - 0x1, selections[objIndex][_0x2cab50(0xd9)] = x));
        }), $(steps[x])['find'](_0xaa6072(0x13e))[_0xaa6072(0x109)](_0xaa6072(0x17e))[_0xaa6072(0x201)](function(_0x5e7bd2) {
            const _0x1eebee = _0xaa6072;
            let _0x2ab820 = $(this)['val']()[_0x1eebee(0xe5)],
                _0x4dbd03 = $(this)[_0x1eebee(0x13d)](_0x1eebee(0x146)) ? $(this)[_0x1eebee(0x13d)](_0x1eebee(0x146)) : 0x0;
            $(this)['val']() !== '' && _0x2ab820 >= _0x4dbd03 ? empReqUrl = empReqUrl[_0x1eebee(0x119)](_0x24573f => _0x24573f[_0x1eebee(0x1e1)] !== _0x5e7bd2) : (!empReqUrl[_0x1eebee(0x109)](_0x4d66b6 => _0x4d66b6[_0x1eebee(0x1e1)] === _0x5e7bd2) && empReqUrl[_0x1eebee(0xfa)]({ 'input': _0x5e7bd2 }), unfilledArr[_0x1eebee(0xfa)]({ 'input': $(this)[_0x1eebee(0x1a4)](_0x1eebee(0x1de)) })), empReqUrl['length'] === 0x0 && validateURL($(this)['val']()) ? urlFilled = !![] : urlFilled = ![];
        }), $(steps[x])['find'](_0xaa6072(0x13e))['find'](':input[type=\x22url\x22]')[_0xaa6072(0x201)](function(_0x13e37d) {
            const _0x70e8c6 = _0xaa6072;
            skipTo = undefined, $(this)[_0x70e8c6(0xeb)](_0x70e8c6(0xcd))['data'](_0x70e8c6(0x123)) !== '' && (skipTo = $(this)[_0x70e8c6(0xeb)](_0x70e8c6(0xcd))[_0x70e8c6(0x13d)](_0x70e8c6(0x123))), $(this)[_0x70e8c6(0xeb)](_0x70e8c6(0x202))[_0x70e8c6(0x1a4)]('data-go-to') && (answer = $(this)[_0x70e8c6(0xeb)](_0x70e8c6(0x202))['attr'](_0x70e8c6(0x18b)), selections = selections[_0x70e8c6(0x119)](_0x22bd2a => _0x22bd2a[_0x70e8c6(0x1e4)] !== x), selections['push']({ 'step': x, 'selected': answer }), skipTo && (selections = selections['filter'](_0x5e0e01 => _0x5e0e01[_0x70e8c6(0x1e4)] !== skipTo - 0x2), selections[_0x70e8c6(0xfa)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections['findIndex'](_0x27837b => _0x27837b[_0x70e8c6(0x1e4)] === x), selections[objIndex][_0x70e8c6(0x18f)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x70e8c6(0xd9)] = x));
        }), $(steps[x])['find'](_0xaa6072(0x13e))[_0xaa6072(0x109)](':input[type=\x22date\x22][required]')[_0xaa6072(0x201)](function(_0x2cf6e4) {
            const _0x2e7e37 = _0xaa6072;
            $(this)[_0x2e7e37(0x1e0)]() !== '' ? empReqDate = empReqDate[_0x2e7e37(0x119)](_0xc830c8 => _0xc830c8[_0x2e7e37(0x1e1)] !== _0x2cf6e4) : (!empReqDate[_0x2e7e37(0x109)](_0x475209 => _0x475209['input'] === _0x2cf6e4) && empReqDate[_0x2e7e37(0xfa)]({ 'input': _0x2cf6e4 }), unfilledArr['push']({ 'input': $(this)[_0x2e7e37(0x1a4)]('name') })), empReqDate[_0x2e7e37(0xe5)] === 0x0 ? dateFilled = !![] : dateFilled = ![];
        }), $(steps[x])[_0xaa6072(0x109)](_0xaa6072(0x13e))[_0xaa6072(0x109)](_0xaa6072(0x1fe))[_0xaa6072(0x201)](function(_0x5ca6ad) {
            const _0x137fcb = _0xaa6072;
            skipTo = undefined, $(this)[_0x137fcb(0xeb)](_0x137fcb(0xcd))[_0x137fcb(0x13d)](_0x137fcb(0x123)) !== '' && (skipTo = $(this)[_0x137fcb(0xeb)](_0x137fcb(0xcd))[_0x137fcb(0x13d)](_0x137fcb(0x123))), $(this)[_0x137fcb(0xeb)]('[data-go-to]')[_0x137fcb(0x1a4)](_0x137fcb(0x18b)) && (answer = $(this)[_0x137fcb(0xeb)](_0x137fcb(0x202))[_0x137fcb(0x1a4)](_0x137fcb(0x18b)), selections = selections[_0x137fcb(0x119)](_0x30f014 => _0x30f014[_0x137fcb(0x1e4)] !== x), selections['push']({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x137fcb(0x119)](_0x1af493 => _0x1af493['step'] !== skipTo - 0x2), selections[_0x137fcb(0xfa)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x137fcb(0x1b4)](_0x292ea7 => _0x292ea7['step'] === x), selections[objIndex][_0x137fcb(0x18f)] = parseInt(skipTo) - 0x1, selections[objIndex]['backTo'] = x));
        }), $(steps[x])[_0xaa6072(0x109)](_0xaa6072(0x13e))[_0xaa6072(0x109)](_0xaa6072(0x1e7))[_0xaa6072(0x201)](function(_0x19f0bf) {
            const _0x49d66a = _0xaa6072;
            $(this)[_0x49d66a(0x1e0)]() !== '' ? empReqTime = empReqTime[_0x49d66a(0x119)](_0x44d4ff => _0x44d4ff[_0x49d66a(0x1e1)] !== _0x19f0bf) : (!empReqTime[_0x49d66a(0x109)](_0x658e4c => _0x658e4c[_0x49d66a(0x1e1)] === _0x19f0bf) && empReqTime[_0x49d66a(0xfa)]({ 'input': _0x19f0bf }), unfilledArr[_0x49d66a(0xfa)]({ 'input': $(this)[_0x49d66a(0x1a4)](_0x49d66a(0x1de)) })), empReqTime[_0x49d66a(0xe5)] === 0x0 ? timeFilled = !![] : timeFilled = ![];
        }), $(steps[x])['find'](_0xaa6072(0x13e))[_0xaa6072(0x109)](_0xaa6072(0x1d0))[_0xaa6072(0x201)](function(_0x23d63a) {
            const _0x5abfa8 = _0xaa6072;
            skipTo = undefined, $(this)[_0x5abfa8(0xeb)](_0x5abfa8(0xcd))[_0x5abfa8(0x13d)](_0x5abfa8(0x123)) !== '' && (skipTo = $(this)[_0x5abfa8(0xeb)](_0x5abfa8(0xcd))[_0x5abfa8(0x13d)](_0x5abfa8(0x123))), $(this)[_0x5abfa8(0xeb)](_0x5abfa8(0x202))[_0x5abfa8(0x1a4)](_0x5abfa8(0x18b)) && (answer = $(this)[_0x5abfa8(0xeb)](_0x5abfa8(0x202))[_0x5abfa8(0x1a4)](_0x5abfa8(0x18b)), selections = selections[_0x5abfa8(0x119)](_0x31c9b4 => _0x31c9b4[_0x5abfa8(0x1e4)] !== x), selections[_0x5abfa8(0xfa)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x5abfa8(0x119)](_0x9489d7 => _0x9489d7['step'] !== skipTo - 0x2), selections[_0x5abfa8(0xfa)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections['findIndex'](_0x2b35cb => _0x2b35cb[_0x5abfa8(0x1e4)] === x), selections[objIndex][_0x5abfa8(0x18f)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x5abfa8(0xd9)] = x));
        }), $(steps[x])[_0xaa6072(0x109)](_0xaa6072(0x13e))[_0xaa6072(0x109)](_0xaa6072(0xda))[_0xaa6072(0x201)](function(_0x3e0da4) {
            const _0x2a53bd = _0xaa6072;
            let _0x27d533 = $(this)[_0x2a53bd(0x1e0)]()[_0x2a53bd(0xe5)],
                _0xb98709 = $(this)[_0x2a53bd(0x13d)](_0x2a53bd(0x146)) ? $(this)['data'](_0x2a53bd(0x146)) : 0x0;
            $(this)[_0x2a53bd(0x1e0)]() !== '' && _0x27d533 >= _0xb98709 ? empReqNum = empReqNum['filter'](_0x3ad68a => _0x3ad68a[_0x2a53bd(0x1e1)] !== _0x3e0da4) : (!empReqNum[_0x2a53bd(0x109)](_0x4eb20b => _0x4eb20b['input'] === _0x3e0da4) && empReqNum[_0x2a53bd(0xfa)]({ 'input': _0x3e0da4 }), unfilledArr[_0x2a53bd(0xfa)]({ 'input': $(this)[_0x2a53bd(0x1a4)](_0x2a53bd(0x1de)) })), empReqNum[_0x2a53bd(0xe5)] === 0x0 ? numFilled = !![] : numFilled = ![];
        }), $(steps[x])[_0xaa6072(0x109)]('.active-answer-card')[_0xaa6072(0x109)](_0xaa6072(0x1f9))['each'](function(_0x3d0ec5) {
            const _0x517105 = _0xaa6072;
            skipTo = undefined, $(this)[_0x517105(0xeb)](_0x517105(0xcd))['data'](_0x517105(0x123)) !== '' && (skipTo = $(this)[_0x517105(0xeb)](_0x517105(0xcd))['data'](_0x517105(0x123))), $(this)[_0x517105(0xeb)](_0x517105(0x202))[_0x517105(0x1a4)]('data-go-to') && (answer = $(this)[_0x517105(0xeb)](_0x517105(0x202))['attr']('data-go-to'), selections = selections['filter'](_0x3cb57c => _0x3cb57c[_0x517105(0x1e4)] !== x), selections[_0x517105(0xfa)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x517105(0x119)](_0x239de9 => _0x239de9[_0x517105(0x1e4)] !== skipTo - 0x2), selections['push']({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x517105(0x1b4)](_0x3082a0 => _0x3082a0[_0x517105(0x1e4)] === x), selections[objIndex][_0x517105(0x18f)] = parseInt(skipTo) - 0x1, selections[objIndex]['backTo'] = x));
        }), $(steps[x])['find']('.active-answer-card')['find'](_0xaa6072(0x1f8))[_0xaa6072(0x201)](function(_0x467336) {
            const _0x34976d = _0xaa6072;
            if ($(this)[_0x34976d(0x1e0)]() !== '') {
                let _0x355a2d = $(this)[_0x34976d(0x1e0)]()['length'],
                    _0x21a243 = $(this)[_0x34976d(0x13d)](_0x34976d(0x146)) ? $(this)[_0x34976d(0x13d)](_0x34976d(0x146)) : 0x0;
                if ($(this)['data'](_0x34976d(0x112))) {
                    var _0x20c5d6 = phoneAutoFormat($(this)[_0x34976d(0x13d)](_0x34976d(0x112)));
                    $(this)[_0x34976d(0x1e0)](_0x20c5d6($(this)[_0x34976d(0x1e0)]()));
                }
                phoneValidation($(this)[_0x34976d(0x1e0)](), _0x355a2d, _0x21a243) ? empReqTel = empReqTel['filter'](_0x4e34b9 => _0x4e34b9[_0x34976d(0x1e1)] !== _0x467336) : empReqTel[_0x34976d(0xfa)]({ 'input': _0x467336 });
            } else !empReqTel[_0x34976d(0x109)](_0x3e713f => _0x3e713f['input'] === _0x467336) && empReqTel[_0x34976d(0xfa)]({ 'input': _0x467336 }), unfilledArr[_0x34976d(0xfa)]({ 'input': $(this)[_0x34976d(0x1a4)]('name') });
            empReqTel[_0x34976d(0xe5)] === 0x0 ? telFilled = !![] : telFilled = ![];
        }), $(steps[x])[_0xaa6072(0x109)]('.active-answer-card')['find'](_0xaa6072(0xfd))[_0xaa6072(0x201)](function(_0x31ebb4) {
            const _0x311b1f = _0xaa6072;
            skipTo = undefined, $(this)[_0x311b1f(0xeb)](_0x311b1f(0xcd))[_0x311b1f(0x13d)](_0x311b1f(0x123)) !== '' && (skipTo = $(this)['parents'](_0x311b1f(0xcd))['data'](_0x311b1f(0x123))), $(this)[_0x311b1f(0xeb)]('[data-go-to]')[_0x311b1f(0x1a4)](_0x311b1f(0x18b)) && (answer = $(this)[_0x311b1f(0xeb)](_0x311b1f(0x202))[_0x311b1f(0x1a4)](_0x311b1f(0x18b)), selections = selections[_0x311b1f(0x119)](_0x353835 => _0x353835[_0x311b1f(0x1e4)] !== x), selections[_0x311b1f(0xfa)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x311b1f(0x119)](_0x1a6acc => _0x1a6acc['step'] !== skipTo - 0x2), selections['push']({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x311b1f(0x1b4)](_0x4c3ffd => _0x4c3ffd[_0x311b1f(0x1e4)] === x), selections[objIndex]['skipTo'] = parseInt(skipTo) - 0x1, selections[objIndex][_0x311b1f(0xd9)] = x));
        }), $(steps[x])[_0xaa6072(0x109)]('.active-answer-card')['find'](_0xaa6072(0x1ad))[_0xaa6072(0x201)](function(_0x581e55) {
            const _0x21d131 = _0xaa6072;
            $(this)[_0x21d131(0x1e0)]() !== '' ? empReqFile = empReqFile['filter'](_0x17265e => _0x17265e[_0x21d131(0x1e1)] !== _0x581e55) : (!empReqFile[_0x21d131(0x109)](_0x107974 => _0x107974[_0x21d131(0x1e1)] === _0x581e55) && empReqFile[_0x21d131(0xfa)]({ 'input': _0x581e55 }), unfilledArr[_0x21d131(0xfa)]({ 'input': $(this)[_0x21d131(0x1a4)](_0x21d131(0x1de)) })), empReqFile[_0x21d131(0xe5)] === 0x0 ? fileFilled = !![] : fileFilled = ![];
        }), $(steps[x])[_0xaa6072(0x109)](_0xaa6072(0x13e))[_0xaa6072(0x109)](_0xaa6072(0x11e))[_0xaa6072(0x201)](function(_0x1c5c6f) {
            const _0x5245f5 = _0xaa6072;
            skipTo = undefined, $(this)[_0x5245f5(0xeb)]('[data-skip-to]')[_0x5245f5(0x13d)](_0x5245f5(0x123)) !== '' && (skipTo = $(this)[_0x5245f5(0xeb)](_0x5245f5(0xcd))['data']('skip-to')), $(this)[_0x5245f5(0xeb)](_0x5245f5(0x202))[_0x5245f5(0x1a4)](_0x5245f5(0x18b)) && (answer = $(this)['parents']('[data-go-to]')['attr'](_0x5245f5(0x18b)), selections = selections[_0x5245f5(0x119)](_0x2a3389 => _0x2a3389['step'] !== x), selections[_0x5245f5(0xfa)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x5245f5(0x119)](_0x514f5a => _0x514f5a[_0x5245f5(0x1e4)] !== skipTo - 0x2), selections[_0x5245f5(0xfa)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x5245f5(0x1b4)](_0x25c4f2 => _0x25c4f2[_0x5245f5(0x1e4)] === x), selections[objIndex][_0x5245f5(0x18f)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x5245f5(0xd9)] = x));
        }), $(steps[x])[_0xaa6072(0x109)](_0xaa6072(0x13e))[_0xaa6072(0x109)](_0xaa6072(0x15d))[_0xaa6072(0x201)](function(_0x2b2dca) {
            const _0x59119b = _0xaa6072;
            $(this)[_0x59119b(0x1e0)]() !== null && $(this)[_0x59119b(0x1e0)]() !== '' ? empReqSelect = empReqSelect[_0x59119b(0x119)](_0x47e7c3 => _0x47e7c3['input'] !== _0x2b2dca) : (!empReqSelect[_0x59119b(0x109)](_0x54a666 => _0x54a666[_0x59119b(0x1e1)] === _0x2b2dca) && empReqSelect[_0x59119b(0xfa)]({ 'input': _0x2b2dca }), unfilledArr[_0x59119b(0xfa)]({ 'input': $(this)[_0x59119b(0x1a4)](_0x59119b(0x1de)) })), empReqSelect[_0x59119b(0xe5)] === 0x0 ? selectFilled = !![] : selectFilled = ![];
        }), $(steps[x])[_0xaa6072(0x109)](_0xaa6072(0x13e))['find'](_0xaa6072(0x155))['each'](function(_0x38a2a0) {
            const _0x46519d = _0xaa6072;
            skipTo = undefined, $(this)[_0x46519d(0xeb)]('[data-skip-to]')['data'](_0x46519d(0x123)) !== '' && (skipTo = $(this)[_0x46519d(0xeb)](_0x46519d(0xcd))['data']('skip-to')), $(this)[_0x46519d(0xeb)](_0x46519d(0x202))['attr']('data-go-to') && (answer = $(this)[_0x46519d(0xeb)](_0x46519d(0x202))[_0x46519d(0x1a4)](_0x46519d(0x18b)), selections = selections[_0x46519d(0x119)](_0x52527f => _0x52527f['step'] !== x), selections['push']({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x46519d(0x119)](_0x51de81 => _0x51de81[_0x46519d(0x1e4)] !== skipTo - 0x2), selections[_0x46519d(0xfa)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x46519d(0x1b4)](_0x1b0bd3 => _0x1b0bd3[_0x46519d(0x1e4)] === x), selections[objIndex][_0x46519d(0x18f)] = parseInt(skipTo) - 0x1, selections[objIndex]['backTo'] = x));
        }), $(steps[x])[_0xaa6072(0x109)](_0xaa6072(0x13e))[_0xaa6072(0x109)]('textarea[required]')['each'](function(_0x11a4d5) {
            const _0x188a01 = _0xaa6072;
            let _0x533015 = $(this)['val']()['length'],
                _0x1f83b0 = $(this)[_0x188a01(0x13d)](_0x188a01(0x146)) ? $(this)[_0x188a01(0x13d)](_0x188a01(0x146)) : 0x0;
            $(this)['val']() !== '' && _0x533015 >= _0x1f83b0 ? empReqTextarea = empReqTextarea[_0x188a01(0x119)](_0x213e84 => _0x213e84[_0x188a01(0x1e1)] !== _0x11a4d5) : (!empReqTextarea[_0x188a01(0x109)](_0x2889c5 => _0x2889c5[_0x188a01(0x1e1)] === _0x11a4d5) && empReqTextarea[_0x188a01(0xfa)]({ 'input': _0x11a4d5 }), unfilledArr['push']({ 'input': $(this)[_0x188a01(0x1a4)](_0x188a01(0x1de)) })), empReqTextarea[_0x188a01(0xe5)] === 0x0 ? textareaFilled = !![] : textareaFilled = ![];
        }), $(steps[x])[_0xaa6072(0x109)](_0xaa6072(0x13e))[_0xaa6072(0x109)](_0xaa6072(0x196))['each'](function(_0x21ee07) {
            const _0x776c35 = _0xaa6072;
            skipTo = undefined, $(this)['parents']('[data-skip-to]')[_0x776c35(0x13d)]('skip-to') !== '' && (skipTo = $(this)[_0x776c35(0xeb)](_0x776c35(0xcd))[_0x776c35(0x13d)](_0x776c35(0x123))), $(this)[_0x776c35(0xeb)]('[data-go-to]')[_0x776c35(0x1a4)](_0x776c35(0x18b)) && (answer = $(this)['parents'](_0x776c35(0x202))[_0x776c35(0x1a4)](_0x776c35(0x18b)), selections = selections[_0x776c35(0x119)](_0x2469e1 => _0x2469e1[_0x776c35(0x1e4)] !== x), selections[_0x776c35(0xfa)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x776c35(0x119)](_0x2cdc11 => _0x2cdc11['step'] !== skipTo - 0x2), selections[_0x776c35(0xfa)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x776c35(0x1b4)](_0xae7bd => _0xae7bd[_0x776c35(0x1e4)] === x), selections[objIndex]['skipTo'] = parseInt(skipTo) - 0x1, selections[objIndex]['backTo'] = x));
        }), $(steps[x])[_0xaa6072(0x109)]('.active-answer-card')[_0xaa6072(0x109)](_0xaa6072(0x1fa))['each'](function(_0x361827) {
            const _0x4d7331 = _0xaa6072;
            $(this)['val']() !== '' ? validateEmail($(this)['val'](), $(this)['data'](_0x4d7331(0x160)), $(this)[_0x4d7331(0x1a4)]('name')) : (emailFilled = ![], unfilledArr[_0x4d7331(0xfa)]({ 'input': $(this)['attr'](_0x4d7331(0x1de)) }));
        }), $(steps[x])['find'](_0xaa6072(0x13e))['find'](_0xaa6072(0x167))[_0xaa6072(0x201)](function(_0x36cac3) {
            const _0x265191 = _0xaa6072;
            skipTo = undefined, $(this)[_0x265191(0xeb)](_0x265191(0xcd))[_0x265191(0x13d)](_0x265191(0x123)) !== '' && (skipTo = $(this)['parents']('[data-skip-to]')[_0x265191(0x13d)](_0x265191(0x123))), $(this)[_0x265191(0xeb)](_0x265191(0x202))['attr'](_0x265191(0x18b)) && (answer = $(this)[_0x265191(0xeb)]('[data-go-to]')[_0x265191(0x1a4)](_0x265191(0x18b)), selections = selections[_0x265191(0x119)](_0x3bf3ab => _0x3bf3ab[_0x265191(0x1e4)] !== x), console[_0x265191(0x1b8)]('selections\x20email', selections, x), selections[_0x265191(0xfa)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x265191(0x119)](_0x21545e => _0x21545e[_0x265191(0x1e4)] !== skipTo - 0x2), selections['push']({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections['findIndex'](_0x21690f => _0x21690f[_0x265191(0x1e4)] === x), selections[objIndex][_0x265191(0x18f)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x265191(0xd9)] = x));
        });
    }
    $(steps[x])[_0xaa6072(0x109)](_0xaa6072(0x1b6))['is'](_0xaa6072(0x1e2)) && (selArr = [], $(steps)[_0xaa6072(0x109)]('[data-selected]:checked')['each'](function(_0xfaa1bb, _0x89d851) {
        const _0x162609 = _0xaa6072;
        selArr['push']({ 'selected': $(this)[_0x162609(0x13d)](_0x162609(0x116)) });
    }), selString = [], selArr[_0xaa6072(0x180)](_0x361724 => selString[_0xaa6072(0xfa)](_0x361724['selected'])), $(steps[x])[_0xaa6072(0x109)](_0xaa6072(0x13e))[_0xaa6072(0x109)](_0xaa6072(0x16b))[_0xaa6072(0x201)](function() {
        const _0x3ae487 = _0xaa6072;
        skipTo = undefined;
        if ($(this)[_0x3ae487(0xeb)]('[data-skip-to]')[_0x3ae487(0x13d)](_0x3ae487(0x123))) skipTo = $(this)[_0x3ae487(0xeb)](_0x3ae487(0xcd))[_0x3ae487(0x13d)](_0x3ae487(0x123));
        else $(this)['data'](_0x3ae487(0x123)) && (skipTo = $(this)['data'](_0x3ae487(0x123)));
        selections = selections[_0x3ae487(0x119)](_0x425994 => _0x425994[_0x3ae487(0x1e4)] !== x), console[_0x3ae487(0x1b8)](selections, curStep, x);
        if ($(this)['data'](_0x3ae487(0x152))) answer = $(this)[_0x3ae487(0x1a4)](_0x3ae487(0x18b)), selections['push']({ 'step': x, 'selected': answer }), console['log'](0x1, selections, x), skipTo && (selections = selections['filter'](_0x5a7552 => _0x5a7552['step'] !== skipTo - 0x2), selections[_0x3ae487(0xfa)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x3ae487(0x1b4)](_0x356d28 => _0x356d28[_0x3ae487(0x1e4)] === x), selections[objIndex][_0x3ae487(0x18f)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x3ae487(0xd9)] = x, console[_0x3ae487(0x1b8)](0x2, selections, x));
        else $(this)['parents'](_0x3ae487(0x202))[_0x3ae487(0x13d)]('go-to') && (answer = $(this)['parents'](_0x3ae487(0x202))[_0x3ae487(0x13d)](_0x3ae487(0x152)), selections['push']({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x3ae487(0x119)](_0x4bf214 => _0x4bf214[_0x3ae487(0x1e4)] !== skipTo - 0x2), selections[_0x3ae487(0xfa)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x3ae487(0x1b4)](_0x4476ef => _0x4476ef['step'] === x), selections[objIndex][_0x3ae487(0x18f)] = parseInt(skipTo) - 0x1, selections[objIndex]['backTo'] = x, console[_0x3ae487(0x1b8)](0x3, selections, x)));
    }), logicExtra ? ($(steps[x])[_0xaa6072(0x109)](_0xaa6072(0x13e))[_0xaa6072(0x109)](_0xaa6072(0x1b0))['data'](_0xaa6072(0xfc)) === !![] || $(steps[x])[_0xaa6072(0x109)](_0xaa6072(0x207))['data'](_0xaa6072(0xfc)) === !![]) && (skip && selections[_0xaa6072(0x119)](_0x39803b => _0x39803b[_0xaa6072(0x1e4)] === x)[_0xaa6072(0xe5)] > 0x0 && (textareaLength === 0x0 && textInputLength === 0x0 && emailInputLength === 0x0 && checkboxInputLength === 0x0 && setTimeout(function() { next = !![], back = ![], nextStep(), selectionQuiz(); }, $(steps[x])['find']('[data-radio-delay]')[_0xaa6072(0x13d)]('radio-delay')))) : $(steps[x])[_0xaa6072(0x109)](_0xaa6072(0x1b0))[_0xaa6072(0x13d)]('radio-skip') === !![] && (skip && (textareaLength === 0x0 && textInputLength === 0x0 && emailInputLength === 0x0 && checkboxInputLength === 0x0 && setTimeout(function() { next = !![], back = ![], nextStep(), selectionQuiz(); }, $(steps[x])['find']('[data-radio-delay]')[_0xaa6072(0x13d)]('radio-delay'))))), inputFilled && fileFilled && numFilled && checkboxFilled && telFilled && radioFilled && emailFilled && domainAllowed && selectFilled && textareaFilled && passwordFilled && urlFilled ? enableBtn() : disableBtn(), andLogic(), cloneRemove(), cloneRemoveInput();
}

function displayErrorMessage() {
    const _0x1a31c2 = _0x1b6e15;
    $(_0x1a31c2(0x164))['hide'](), unfilledArr[_0x1a31c2(0xe5)] > 0x0 && unfilledArr[_0x1a31c2(0x180)](function(_0x5d3bad) {
        const _0x383e87 = _0x1a31c2;
        $(_0x383e87(0x101) + _0x5d3bad['input'] + '\x22]')[_0x383e87(0x198)](_0x383e87(0x164))['fadeIn'](), $(_0x383e87(0x101) + _0x5d3bad[_0x383e87(0x1e1)] + '\x22]')[_0x383e87(0xeb)]()[_0x383e87(0x100)](_0x383e87(0x164))['fadeIn'](), $(_0x383e87(0xd8) + _0x5d3bad[_0x383e87(0x1e1)] + '\x22]')[_0x383e87(0x198)](_0x383e87(0x164))[_0x383e87(0x214)](), $(_0x383e87(0xa4) + _0x5d3bad['input'] + '\x22]')[_0x383e87(0x198)](_0x383e87(0x164))['fadeIn']();
    });
}

function resetInputErrorMessage(_0x1718e5) {
    const _0x5eb1f0 = _0x1b6e15;
    $(_0x5eb1f0(0x101) + _0x1718e5 + '\x22]')['siblings'](_0x5eb1f0(0x164))[_0x5eb1f0(0x11c)](), $(_0x5eb1f0(0x101) + _0x1718e5 + '\x22]')[_0x5eb1f0(0xeb)]()[_0x5eb1f0(0x100)](_0x5eb1f0(0x164))[_0x5eb1f0(0x11c)](), $('textarea[name=\x22' + _0x1718e5 + '\x22]')[_0x5eb1f0(0x198)](_0x5eb1f0(0x164))['hide'](), $(_0x5eb1f0(0xa4) + _0x1718e5 + '\x22]')[_0x5eb1f0(0x198)](_0x5eb1f0(0x164))['hide']();
}

function increaseCurstep() {
    const _0x324ee1 = _0x1b6e15;
    countCard ? (curStep = curStep + 0x1, $(_0x324ee1(0xff))[_0x324ee1(0x200)](steps[_0x324ee1(0xe5)])) : $(steps[x])[_0x324ee1(0x13d)](_0x324ee1(0x1d9)) ? curStep = curStep + 0x0 : curStep = curStep + 0x1, $(_0x324ee1(0x1ec))[_0x324ee1(0x200)](curStep);
}

function decreaseCurstep() {
    const _0x387997 = _0x1b6e15;
    countCard ? (curStep = curStep - 0x1, $(_0x387997(0xff))['text'](steps[_0x387997(0xe5)])) : $(steps[x])[_0x387997(0x13d)](_0x387997(0x1d9)) ? curStep = curStep - 0x0 : curStep = curStep - 0x1, $(_0x387997(0x1ec))[_0x387997(0x200)](curStep);
}
$('[data-form=\x22submit-btn\x22]')['on']('click', function(_0x200ae1) {
    const _0x1df05a = _0x1b6e15;
    $(this)[_0x1df05a(0x13d)](_0x1df05a(0x1c7)) && (redirectTo = $(this)[_0x1df05a(0x13d)](_0x1df05a(0x1c7))), !$(this)['data']('new-tab') && (newTab = $(this)[_0x1df05a(0x13d)](_0x1df05a(0xf8))), successCard = $(this)[_0x1df05a(0x13d)](_0x1df05a(0x19b)), _0x200ae1[_0x1df05a(0xa9)](), _0x200ae1[_0x1df05a(0x11a)](), logicExtra && ($(this)[_0x1df05a(0x206)](_0x1df05a(0x215), !![]), $(steps)[_0x1df05a(0x109)](':input')['prop'](_0x1df05a(0x153), ![])), localStorage[_0x1df05a(0x1db)](_0x1df05a(0x16a)), fill ? ($(this)[_0x1df05a(0x13d)](_0x1df05a(0x18e)) ? (console[_0x1df05a(0x1b8)]($(this)['data'](_0x1df05a(0x18e))), $(this)[_0x1df05a(0x200)]($(this)[_0x1df05a(0x13d)](_0x1df05a(0x18e)))) : $(this)[_0x1df05a(0x1e0)](_0x1df05a(0x181))[_0x1df05a(0x200)](_0x1df05a(0x181)), $('[data-form=\x22multistep\x22]')[_0x1df05a(0x184)](), $('div.g-recaptcha')[_0x1df05a(0xe5)] > 0x0 && (grecaptcha[_0x1df05a(0xad)]()[_0x1df05a(0xe5)] === 0x0 && (form[_0x1df05a(0x109)](_0x1df05a(0x1fd))[_0x1df05a(0x200)](oldSubmitText), form[_0x1df05a(0x109)](_0x1df05a(0x1fd))[_0x1df05a(0x1e0)](oldSubmitText))), customError && $(_0x1df05a(0x164))[_0x1df05a(0x11c)]()) : customError && displayErrorMessage();
});

function nextStep() {
    const _0x5d2e51 = _0x1b6e15;
    customError ? ($(_0x5d2e51(0x164))[_0x5d2e51(0x11c)](), fill ? (x++, increaseCurstep(), progress = x, x <= steps['length'] - 0x1 && (updateStep(), memory && saveFilledInput())) : displayErrorMessage()) : (x++, increaseCurstep(), x > progress && (progress = x), x <= steps[_0x5d2e51(0xe5)] - 0x1 && (updateStep(), memory && saveFilledInput())), andLogic();
}

function backStep() {
    const _0xc7d0ef = _0x1b6e15;
    customError && $('[data-text=\x22error-message\x22]')['hide'](), decreaseCurstep(), x > 0x0 && ($(progressbar[x])['removeClass'](_0xc7d0ef(0x10b)), selections['filter'](_0x25c41b => _0x25c41b[_0xc7d0ef(0x18f)] === x)[_0xc7d0ef(0xe5)] > 0x0 ? x = parseInt(getSafe(() => selections[_0xc7d0ef(0x119)](_0x450126 => _0x450126[_0xc7d0ef(0x18f)] === x)[0x0][_0xc7d0ef(0xd9)])) : x--, updateStep()), ($(steps[x])['find']('[data-radio-skip]:visible')[_0xc7d0ef(0x13d)](_0xc7d0ef(0xfc)) === !![] || $(steps[x])[_0xc7d0ef(0x109)](_0xc7d0ef(0x13e))[_0xc7d0ef(0x109)](_0xc7d0ef(0x1b0))[_0xc7d0ef(0x13d)](_0xc7d0ef(0xfc)) === !![] || $(steps[x])[_0xc7d0ef(0x109)](_0xc7d0ef(0x207))['data'](_0xc7d0ef(0xfc)) === !![]) && (all_data = all_data[_0xc7d0ef(0x119)](_0x511ec7 => _0x511ec7[_0xc7d0ef(0x193)] !== $(steps[x])[_0xc7d0ef(0x109)]('input[type=\x22radio\x22]:checked')[_0xc7d0ef(0x1a4)](_0xc7d0ef(0x1de))), $(_0xc7d0ef(0x166) + $(steps[x])[_0xc7d0ef(0x109)](_0xc7d0ef(0x192))['attr'](_0xc7d0ef(0x1de)) + '\x22]')[_0xc7d0ef(0x11c)](), $(steps[x])[_0xc7d0ef(0x109)](_0xc7d0ef(0xb6))[_0xc7d0ef(0x206)](_0xc7d0ef(0x171), ![]), $(steps[x])[_0xc7d0ef(0x109)](_0xc7d0ef(0x212))[_0xc7d0ef(0xa7)](_0xc7d0ef(0x162)), validation());
}
weightedSelectionRange && $('[data-selection]')[_0x1b6e15(0x201)](function() {
    const _0x4b6448 = _0x1b6e15;
    $(this)[_0x4b6448(0xb7)]('<div\x20data-range=\x22selection\x22\x20style=\x22display:none\x20!important\x22>' + $(this)['data'](_0x4b6448(0xee)) + _0x4b6448(0x12d));
});

function selectionQuiz() {
    const _0xcc9f79 = _0x1b6e15;
    if ($(this)[_0xcc9f79(0x109)]('[data-btn=\x22check\x22]')) {
        $(_0xcc9f79(0x1f0))[_0xcc9f79(0x11c)](), $(_0xcc9f79(0x182))[_0xcc9f79(0x11c)]();
        if (weightedSelection) {
            selTotal = 0x0, selArr['forEach'](function(_0x566d1f) {
                const _0x329831 = _0xcc9f79;
                selTotal = selTotal + _0x566d1f[_0x329831(0x116)];
            }), $(_0xcc9f79(0x1ed))['text'](selTotal);
            if ($('[data-selection=\x22' + selTotal + '\x22]')[_0xcc9f79(0xe5)] > 0x0) $(_0xcc9f79(0xd4) + selTotal + '\x22]')[_0xcc9f79(0x214)]();
            else $('[data-range]:contains(' + selTotal + ')') ? $('[data-range]:contains(' + selTotal + ')')['parent'](_0xcc9f79(0x1f0))['eq'](0x0)['show']() : $(_0xcc9f79(0x144))['fadeIn']();
        } else {
            let _0x2aa5f2 = -0x1;
            $(_0xcc9f79(0x1f0))[_0xcc9f79(0x201)](function(_0x3d9195) {
                const _0x57bdd2 = _0xcc9f79;
                $($(_0x57bdd2(0x1f0))[_0x3d9195])[_0x57bdd2(0x13d)](_0x57bdd2(0xee))[_0x57bdd2(0xc1)](selString[_0x57bdd2(0xe3)]()) && (_0x2aa5f2 = _0x3d9195);
            }), _0x2aa5f2 > -0x1 ? $($('[data-selection]')[_0x2aa5f2])[_0xcc9f79(0x214)]() : $(_0xcc9f79(0x144))[_0xcc9f79(0x214)]();
        }
    }
}

function triggerInputAllData() {
    const _0x12ab4e = _0x1b6e15;
    if (savedFilledInput && memory) savedFilledInput[_0x12ab4e(0x180)](_0x47cdd2 => {
        const _0x313b43 = _0x12ab4e;
        var _0x2482b7 = $(_0x313b43(0x101) + _0x47cdd2[_0x313b43(0x1cb)] + '\x22][value=\x22' + _0x47cdd2[_0x313b43(0xa8)] + _0x313b43(0xa1)),
            _0x4f484b = $('input[name=\x22' + _0x47cdd2['inputName'] + _0x313b43(0xa1)),
            _0x29c246 = $(_0x313b43(0xd8) + _0x47cdd2['inputName'] + _0x313b43(0xa1)),
            _0x45c1ed = $(_0x313b43(0x14c) + _0x47cdd2['inputName'] + '\x22]'),
            _0x3f515d = $(_0x313b43(0x15e) + _0x47cdd2[_0x313b43(0x1cb)] + _0x313b43(0x1b5) + _0x47cdd2[_0x313b43(0xa8)] + _0x313b43(0xa1));
        if (_0x2482b7[_0x313b43(0x1a4)]('type') !== 'file') {
            if (_0x2482b7[_0x313b43(0x1a4)]('type') === _0x313b43(0x13c) && !_0x2482b7[_0x313b43(0xeb)]('[data-radio-skip]')[_0x313b43(0x13d)](_0x313b43(0xfc))) _0x2482b7[_0x313b43(0x20f)](), _0x2482b7[_0x313b43(0x198)]('.w-radio-input')[_0x313b43(0x1c9)](_0x313b43(0x162)), _0x2482b7[_0x313b43(0x113)](_0x313b43(0x1e1));
            else _0x47cdd2[_0x313b43(0xa8)] === 'on' ? (_0x4f484b[_0x313b43(0x20f)](), _0x4f484b[_0x313b43(0x198)](_0x313b43(0xa6))[_0x313b43(0x1c9)](_0x313b43(0x162)), _0x4f484b[_0x313b43(0x113)](_0x313b43(0x1e1))) : (_0x4f484b[_0x313b43(0x1e0)](_0x47cdd2['value']), _0x29c246['val'](_0x47cdd2[_0x313b43(0xa8)]), $(_0x313b43(0x13f))[_0x313b43(0x109)](_0x313b43(0x1ea) + _0x47cdd2[_0x313b43(0xa8)] + '\x22]')['prop'](_0x313b43(0x116), !![]), _0x4f484b['trigger'](_0x313b43(0x1e1)), _0x4f484b[_0x313b43(0x113)]('change'));
            const _0x574791 = _0x3f515d[_0x313b43(0x13d)]('click-addclass'),
                _0x4de2e4 = _0x45c1ed[_0x313b43(0x13d)](_0x313b43(0xe2));
            _0x3f515d['parent']()[_0x313b43(0x1c9)](_0x574791), _0x45c1ed[_0x313b43(0x177)]()[_0x313b43(0x1c9)](_0x4de2e4);
        }
    });
    else _params && (getParams(), searchQ[_0x12ab4e(0x180)](_0x25f5d9 => {
        const _0x4c4b70 = _0x12ab4e;
        if ($(_0x4c4b70(0x101) + _0x25f5d9[_0x4c4b70(0x1cb)] + '\x22][value=\x22' + _0x25f5d9[_0x4c4b70(0xa8)] + _0x4c4b70(0xa1))[_0x4c4b70(0x1a4)](_0x4c4b70(0x168)) !== _0x4c4b70(0x16d)) {
            if ($('input[name=\x22' + _0x25f5d9[_0x4c4b70(0x21f)] + _0x4c4b70(0x1b5) + _0x25f5d9[_0x4c4b70(0x1e0)] + '\x22]:not([data-prefill=\x22false\x22])')[_0x4c4b70(0x1a4)](_0x4c4b70(0x168)) === _0x4c4b70(0x13c)) $(_0x4c4b70(0x101) + _0x25f5d9[_0x4c4b70(0x21f)] + _0x4c4b70(0x1b5) + _0x25f5d9[_0x4c4b70(0x1e0)] + '\x22]:not([data-prefill=\x22false\x22])')[_0x4c4b70(0x20f)](), $('input[name=\x22' + _0x25f5d9[_0x4c4b70(0x21f)] + _0x4c4b70(0x1b5) + _0x25f5d9[_0x4c4b70(0x1e0)] + '\x22]:not([data-prefill=\x22false\x22])')['siblings'](_0x4c4b70(0x12b))[_0x4c4b70(0x1c9)](_0x4c4b70(0x162)), $(_0x4c4b70(0x101) + _0x25f5d9[_0x4c4b70(0x21f)] + '\x22][value=\x22' + _0x25f5d9[_0x4c4b70(0x1e0)] + '\x22]:not([data-prefill=\x22false\x22])')['trigger'](_0x4c4b70(0x1e1));
            else _0x25f5d9[_0x4c4b70(0x1e0)] === 'on' ? ($(_0x4c4b70(0x101) + _0x25f5d9[_0x4c4b70(0x21f)] + _0x4c4b70(0xa1))[_0x4c4b70(0x20f)](), $(_0x4c4b70(0x101) + _0x25f5d9[_0x4c4b70(0x21f)] + _0x4c4b70(0xa1))[_0x4c4b70(0x198)](_0x4c4b70(0xa6))['addClass'](_0x4c4b70(0x162)), $(_0x4c4b70(0x101) + _0x25f5d9['key'] + '\x22]')[_0x4c4b70(0x113)](_0x4c4b70(0x1e1))) : ($('input[name=\x22' + _0x25f5d9['key'] + '\x22]:not([data-prefill=\x22false\x22])')[_0x4c4b70(0x1e0)](_0x25f5d9[_0x4c4b70(0x1e0)]), $(_0x4c4b70(0xd8) + _0x25f5d9[_0x4c4b70(0x21f)] + _0x4c4b70(0xa1))['val'](_0x25f5d9[_0x4c4b70(0x1e0)]), $(_0x4c4b70(0xa4) + _0x25f5d9[_0x4c4b70(0x21f)] + _0x4c4b70(0xa1))[_0x4c4b70(0x109)](_0x4c4b70(0x1ea) + _0x25f5d9[_0x4c4b70(0x1e0)] + '\x22]')[_0x4c4b70(0x206)]('selected', !![]), $('input[name=\x22' + _0x25f5d9['key'] + _0x4c4b70(0xa1))[_0x4c4b70(0x113)](_0x4c4b70(0x1e1)), $(_0x4c4b70(0x101) + _0x25f5d9[_0x4c4b70(0x21f)] + _0x4c4b70(0xa1))[_0x4c4b70(0x113)](_0x4c4b70(0x165)));
        }
    }));
}
$(_0x1b6e15(0x117))['on']('click', function() { next = !![], back = ![], nextStep(), selectionQuiz(); }), $(_0x1b6e15(0xb8))['on'](_0x1b6e15(0x20f), function() { next = ![], back = !![], backStep(); }), $(steps)[_0x1b6e15(0x109)](_0x1b6e15(0x107))[_0x1b6e15(0x194)](_0x1b6e15(0xcb))['on'](_0x1b6e15(0x1e1), function(_0x54ed52) { validation(), andLogic(), addClickClass(); }), $(steps)['find'](_0x1b6e15(0xb6))['on'](_0x1b6e15(0x20f), function() { skip = !![], validation(), addClickClass(); });
$(_0x1b6e15(0x1b9))['data'](_0x1b6e15(0x178)) ? $('[data-form=\x22custom-progress-indicator\x22]')[_0x1b6e15(0xa7)](_0x1b6e15(0x111)) : $('[data-form=\x22custom-progress-indicator\x22]')[_0x1b6e15(0x1c9)](_0x1b6e15(0x111));

function clickableIndicator() {
    const _0x5144d6 = _0x1b6e15;
    $('[data-clickable]')[_0x5144d6(0x13d)](_0x5144d6(0x114)) && ($(_0x5144d6(0x13b))[_0x5144d6(0xa7)](_0x5144d6(0x10b)), $('[data-clickable]')[_0x5144d6(0x13d)](_0x5144d6(0x178)) ? (x = $(this)['index'](), updateStep()) : $(this)[_0x5144d6(0x156)]() <= progress && (x = $(this)['index'](), updateStep())), $(_0x5144d6(0x1ec))[_0x5144d6(0x200)](x + 0x1);
}
$(_0x1b6e15(0x1bb))['on'](_0x1b6e15(0x20f), clickableIndicator);
$(_0x1b6e15(0x12e))['data'](_0x1b6e15(0x19d)) && ($('[data-go-to]')[_0x1b6e15(0x201)](function() {
    const _0x4e690d = _0x1b6e15;
    $(this)[_0x4e690d(0xb7)](_0x4e690d(0x16e), $(this)[_0x4e690d(0x13d)](_0x4e690d(0x152)));
}), $(_0x1b6e15(0x104))[_0x1b6e15(0x201)](function() {
    const _0x1cf4db = _0x1b6e15;
    $(this)['append']('<br>Data\x20Answer\x20=\x20', $(this)[_0x1cf4db(0x13d)](_0x1cf4db(0x21d)));
}));

function resetFormly() {
    const _0x256365 = _0x1b6e15;
    $(_0x256365(0x12e))[_0x256365(0x113)]('reset'), $(_0x256365(0x12e))[_0x256365(0xeb)]()[_0x256365(0x109)](_0x256365(0x1e3))[_0x256365(0x11c)](), x = 0x0, updateStep(), $(_0x256365(0x12e))[_0x256365(0x129)](), $(_0x256365(0x1fd))['text'](oldSubmitText), $('[data-form=\x22submit-btn\x22]')[_0x256365(0x1e0)](oldSubmitText), $(_0x256365(0x1ec))['text'](0x1), $('[data-form=\x22multistep\x22]')[_0x256365(0x109)]('input:checkbox')['siblings'](_0x256365(0xa6))['removeClass'](_0x256365(0x162));
}
$(document)['ajaxComplete'](function(_0x2c2ffb, _0xf68ba4, _0x5360bb) {
    const _0xed86d7 = _0x1b6e15;
    if (_0x5360bb[_0xed86d7(0x199)][_0xed86d7(0xc1)](_0xed86d7(0xae))) {
        const _0x9127ef = _0xf68ba4[_0xed86d7(0x179)] === 0xc8,
            _0x137542 = 'redirect-form-hehexd';
        redirectTo && _0x9127ef && (newTab ? window['open'](redirectTo, _0xed86d7(0x15a)) : setTimeout(() => {
            const _0x5a17dc = _0xed86d7;
            location[_0x5a17dc(0xac)] = redirectTo;
        }, redirectDelay)), _0x9127ef && successCard !== '' && $(_0xed86d7(0xdc) + successCard + '\x22]')[_0xed86d7(0x214)](), _0x9127ef && formReset && setTimeout(() => { resetFormly(); }, resetDelay), !_0x9127ef && ($('[data-form=\x22submit-btn\x22]')[_0xed86d7(0x1e0)](_0xed86d7(0x181)), $(_0xed86d7(0x1fd))['text'](_0xed86d7(0x181)));
    }
}), $(_0x1b6e15(0x14b))['on'](_0x1b6e15(0x20f), function() {
    const _0x9f102 = _0x1b6e15;
    var _0x36f6bb = $(this)[_0x9f102(0x177)]()['find'](_0x9f102(0xaf))[_0x9f102(0x13d)]('input-field');
    setTimeout(function() {
        const _0x44d791 = _0x9f102;
        $(_0x44d791(0x101) + _0x36f6bb + '\x22]')[_0x44d791(0xf3)]();
    }, 0x64), back = !![], x = $(this)[_0x9f102(0x13d)]('edit-step') - 0x1, updateStep(), countCard ? (curStep = x + 0x1, $('[data-text=\x22total-steps\x22]')[_0x9f102(0x200)](steps[_0x9f102(0xe5)])) : $(steps[x])['data'](_0x9f102(0x1d9)) ? curStep = x + 0x0 : curStep = x + 0x1, $(_0x9f102(0x1ec))[_0x9f102(0x200)](curStep), back = ![];
}), $(_0x1b6e15(0x20b))['on'](_0x1b6e15(0x20f), function() {
    const _0x56d754 = _0x1b6e15;
    $(_0x56d754(0x12e))[_0x56d754(0x113)](_0x56d754(0x1fb));
    let _0x5dd632 = $(this);
    $(this)[_0x56d754(0x200)]('Please\x20wait...'), setTimeout(function() {
        const _0x1c46f6 = _0x56d754;
        $(_0x5dd632)[_0x1c46f6(0x200)](oldResetText), $(_0x5dd632)[_0x1c46f6(0xeb)](_0x1c46f6(0x1e3))['hide'](), x = 0x0, updateStep(), $(_0x1c46f6(0x12e))[_0x1c46f6(0x129)](), $(_0x1c46f6(0x1fd))['text'](oldSubmitText), $(_0x1c46f6(0x1fd))[_0x1c46f6(0x1e0)](oldSubmitText), $(_0x5dd632)['val'](oldSubmitText), $('[data-text=\x22current-step\x22]')[_0x1c46f6(0x200)](0x1), $(_0x1c46f6(0x12e))['find'](_0x1c46f6(0xa0))[_0x1c46f6(0x198)](_0x1c46f6(0xa6))[_0x1c46f6(0xa7)]('w--redirected-checked');
    }, resetDelay);
}), $(_0x1b6e15(0x131))['on'](_0x1b6e15(0x140), function(_0x462d15) {
    const _0x393158 = _0x1b6e15;
    if (_0x462d15[_0x393158(0x172)] === 0xd) {
        _0x462d15[_0x393158(0xa9)](), _0x462d15[_0x393158(0x11a)]();
        if ($(steps[x])[_0x393158(0x109)](_0x393158(0x196))['is'](_0x393158(0x126))) $(steps[x])[_0x393158(0x109)](_0x393158(0xe4))['val']($(steps[x])['find'](_0x393158(0xe4))[_0x393158(0x1e0)]() + '\x0a');
        else $('[data-enter]')['data'](_0x393158(0xf0)) && fill && (totalSteps > curStep && $('[data-form=\x22next-btn\x22]')[0x0][_0x393158(0x20f)]());
    }
}), $('body')['keydown'](function(_0x18cce3) {
    const _0x5b3ab7 = _0x1b6e15;
    (_0x18cce3[_0x5b3ab7(0x1c2)] || _0x18cce3['ctrlKey']) && _0x18cce3[_0x5b3ab7(0x172)] == 0xd && (x >= steps[_0x5b3ab7(0xe5)] - 0x1 && fill ? $(steps[x])['find']('[data-form=\x22submit-btn\x22]:visible')[_0x5b3ab7(0x20f)]() : (_0x18cce3['preventDefault'](), _0x18cce3[_0x5b3ab7(0x11a)]()));
}), $(_0x1b6e15(0x12e))[_0x1b6e15(0x109)](_0x1b6e15(0x107))['on'](_0x1b6e15(0x165), function() {
    const _0x523399 = _0x1b6e15;
    all_data = all_data[_0x523399(0x119)](_0x5d0c14 => _0x5d0c14[_0x523399(0x193)] !== $(this)['attr'](_0x523399(0x1de))), $(this)[_0x523399(0x1a4)](_0x523399(0x168)) === _0x523399(0x1e6) ? $(this)['is'](_0x523399(0x1e2)) ? all_data['push']({ 'field': $(this)[_0x523399(0x1a4)](_0x523399(0x1de)), 'value': $(this)[_0x523399(0x198)](_0x523399(0x189))[_0x523399(0x200)]() }) : $('[data-input-field=\x22' + $(this)['attr'](_0x523399(0x1de)) + '\x22]')[_0x523399(0x11c)]() : (all_data[_0x523399(0xfa)]({ 'field': $(this)[_0x523399(0x1a4)](_0x523399(0x1de)), 'value': $(this)[_0x523399(0x1e0)]() }), $(this)['val']() !== '' && resetInputErrorMessage($(this)[_0x523399(0x1a4)]('name'))), all_data[_0x523399(0x180)](function(_0x123139) {
        const _0x367b8c = _0x523399;
        $(_0x367b8c(0x166) + _0x123139['field'] + '\x22]')['show'](), $('[data-input-field=\x22' + _0x123139['field'] + '\x22]')[_0x367b8c(0x200)](_0x123139[_0x367b8c(0xa8)]);
    });
}), $(_0x1b6e15(0x12e))[_0x1b6e15(0x109)](_0x1b6e15(0x196))['on'](_0x1b6e15(0x165), function() {
    const _0x474b63 = _0x1b6e15;
    $(this)['val']() !== '' && resetInputErrorMessage($(this)[_0x474b63(0x1a4)](_0x474b63(0x1de))), all_data = all_data['filter'](_0x4cb66d => _0x4cb66d['field'] !== $(this)[_0x474b63(0x1a4)](_0x474b63(0x1de))), all_data[_0x474b63(0xfa)]({ 'field': $(this)[_0x474b63(0x1a4)](_0x474b63(0x1de)), 'value': $(this)['val']() }), all_data[_0x474b63(0x180)](function(_0x12b8c0) {
        const _0x3848f3 = _0x474b63;
        $(_0x3848f3(0x166) + _0x12b8c0[_0x3848f3(0x193)] + '\x22]')[_0x3848f3(0x129)](), $(_0x3848f3(0x166) + _0x12b8c0[_0x3848f3(0x193)] + '\x22]')['text'](_0x12b8c0[_0x3848f3(0xa8)]);
    });
}), $('[data-form=\x22multistep\x22]')[_0x1b6e15(0x109)](_0x1b6e15(0x155))['on'](_0x1b6e15(0x165), function() {
    const _0x57fb33 = _0x1b6e15;
    $(this)['val']() !== '' && resetInputErrorMessage($(this)[_0x57fb33(0x1a4)](_0x57fb33(0x1de)));
    var _0x42ba2a = $(this)[_0x57fb33(0x13d)](_0x57fb33(0xc6));
    all_data = all_data[_0x57fb33(0x119)](_0x1c47e2 => _0x1c47e2[_0x57fb33(0x193)] !== $(this)[_0x57fb33(0x1a4)]('name')), all_data['push']({ 'field': $(this)['attr'](_0x57fb33(0x1de)), 'value': _0x42ba2a ? $(this)[_0x57fb33(0x109)](_0x57fb33(0x1b1))['text']() : $(this)[_0x57fb33(0x1e0)]() }), all_data['forEach'](function(_0x1ec440) {
        const _0x5b1334 = _0x57fb33;
        $(_0x5b1334(0x166) + _0x1ec440[_0x5b1334(0x193)] + '\x22]')['show'](), $(_0x5b1334(0x166) + _0x1ec440[_0x5b1334(0x193)] + '\x22]')[_0x5b1334(0x200)](_0x1ec440[_0x5b1334(0xa8)]);
    });
}), updateStep(), triggerInputAllData(), $('[data-cms-select=cms]')[_0x1b6e15(0x201)](function() {
    const _0x1097df = _0x1b6e15,
        _0x16bc1e = $(this)[_0x1097df(0x109)](_0x1097df(0xea)),
        _0x1ca570 = [];
    _0x16bc1e[_0x1097df(0x201)](function() {
        const _0x20eab8 = _0x1097df;
        _0x1ca570[_0x20eab8(0xfa)]($(this)['text']()['trim']());
    });
    const _0xd0eadd = $(this)[_0x1097df(0x198)](_0x1097df(0x1d8));
    $[_0x1097df(0x201)](_0x1ca570, function(_0x31982b, _0x21d7ce) {
        const _0x319162 = _0x1097df,
            _0x58dca1 = $(_0x319162(0x148))[_0x319162(0x1e0)](_0x21d7ce)[_0x319162(0x200)](_0x21d7ce);
        _0xd0eadd['append'](_0x58dca1);
    });
});

function cloneRemove() {
    const _0x410df5 = _0x1b6e15;
    $(_0x410df5(0xd1))[_0x410df5(0x201)](function() {
        const _0x459f6d = _0x410df5;
        $(this)[_0x459f6d(0x109)](_0x459f6d(0xd7))[_0x459f6d(0xe5)] < 0x2 ? $(this)['find'](_0x459f6d(0x145))[_0x459f6d(0x11c)]() : $(this)[_0x459f6d(0x109)](_0x459f6d(0x145))[_0x459f6d(0x129)]();
    });
}

function cloneRemoveInput() {
    const _0x3de5bf = _0x1b6e15;
    $(_0x3de5bf(0x19e))[_0x3de5bf(0x201)](function() {
        const _0x5b5655 = _0x3de5bf;
        console[_0x5b5655(0x1b8)]($(this)['find'](_0x5b5655(0x20d))['length']), $(this)['find'](_0x5b5655(0x20d))[_0x5b5655(0xe5)] < 0x2 ? $(this)['find'](_0x5b5655(0x1a0))[_0x5b5655(0x11c)]() : $(this)[_0x5b5655(0x109)](_0x5b5655(0x1a0))['show']();
    });
}
$(_0x1b6e15(0x145))['on']('click', function() {
    const _0x234e47 = _0x1b6e15,
        _0x17a367 = $(this)['parents'](_0x234e47(0xd7))[_0x234e47(0xe5)] > 0x0 ? $(this)[_0x234e47(0xeb)](_0x234e47(0xd7))[_0x234e47(0x156)]() : $(this)[_0x234e47(0xeb)]('[data-display]')['index'](),
        _0x197fac = $(this)[_0x234e47(0xeb)](_0x234e47(0xd7))['length'] > 0x0 ? $(this)[_0x234e47(0xeb)](_0x234e47(0xd7))['data'](_0x234e47(0x210)) : $(this)[_0x234e47(0xeb)](_0x234e47(0x147))[_0x234e47(0x13d)]('display');
    $(_0x234e47(0x13a) + _0x197fac + '\x22]')['eq'](_0x17a367)[_0x234e47(0xb5)](), $(_0x234e47(0x216) + _0x197fac + '\x22]')['eq'](_0x17a367)[_0x234e47(0xb5)](), cloneRemove();
    let _0x4d2e59 = $(_0x234e47(0x136) + _0x197fac + '\x22]')[_0x234e47(0x13d)](_0x234e47(0x1df)),
        _0x3a164a = $('[data-clone=\x22' + _0x197fac + '\x22]')[_0x234e47(0xe5)];
    console['log'](_0x3a164a, _0x4d2e59), _0x3a164a < _0x4d2e59 && (console[_0x234e47(0x1b8)]('show'), $(_0x234e47(0x136) + _0x197fac + '\x22]')[_0x234e47(0x129)]()), validation();
}), $(_0x1b6e15(0x1a0))['on'](_0x1b6e15(0x20f), function() {
    const _0x47add8 = _0x1b6e15;
    let _0x2a68cb = $(this)[_0x47add8(0x198)]()['attr'](_0x47add8(0x1de)),
        _0x3aa762 = $(this)[_0x47add8(0xeb)](_0x47add8(0x20d))[_0x47add8(0x13d)](_0x47add8(0x1f5));
    $(this)[_0x47add8(0x177)](_0x47add8(0x20d))[_0x47add8(0xb5)](), $('[data-input-field=\x22' + _0x2a68cb + '\x22]')[_0x47add8(0x177)](_0x47add8(0x1e8))['remove']();
    let _0x219019 = $('[data-add-new-input=\x22' + _0x3aa762 + '\x22]')[_0x47add8(0x13d)](_0x47add8(0x176)),
        _0x220830 = $(_0x47add8(0xed) + _0x3aa762 + '\x22]')['length'];
    _0x220830 < _0x219019 && $('[data-add-new-input=\x22' + _0x3aa762 + '\x22]')['show'](), validation();
}), $(_0x1b6e15(0x1a6))['on'](_0x1b6e15(0x20f), function() {
    const _0x5f166e = _0x1b6e15;
    let _0x131972 = $(this)[_0x5f166e(0x13d)]('add-new'),
        _0x14dd12 = $(this)[_0x5f166e(0x13d)]('add-new-limit');
    var _0x5c9322 = $('[data-clone=\x22' + _0x131972 + '\x22]')['eq'](0x0)[_0x5f166e(0x210)](!![]),
        _0x3cce36 = $(_0x5f166e(0x216) + _0x131972 + '\x22]')['eq'](0x0)['clone'](!![]);
    let _0x3c0da3 = '';
    $(this)[_0x5f166e(0x109)]('[data-form=\x22remove-clone\x22]')[_0x5f166e(0x129)](), cloneRemove(), _0x5c9322[_0x5f166e(0x109)]('[data-clone-input]')[_0x5f166e(0x109)](_0x5f166e(0x1e1))['val'](''), _0x5c9322[_0x5f166e(0x109)](_0x5f166e(0x20d))['find']('select')[_0x5f166e(0x1e0)](''), _0x5c9322[_0x5f166e(0x109)](_0x5f166e(0x20d))[_0x5f166e(0x109)]('textarea')[_0x5f166e(0x1e0)](''), _0x5c9322[_0x5f166e(0x109)](_0x5f166e(0x20d))['not'](_0x5f166e(0x170))[_0x5f166e(0xb5)](), _0x5c9322[_0x5f166e(0x109)](_0x5f166e(0x20d))[_0x5f166e(0x109)](_0x5f166e(0x1dc))[_0x5f166e(0x20f)](), _0x3cce36['find'](_0x5f166e(0x1e8))['not'](_0x5f166e(0x170))[_0x5f166e(0xb5)](), _0x5c9322[_0x5f166e(0x109)]('input')[_0x5f166e(0x201)](function() {
        const _0x33e21f = _0x5f166e;
        if ($(this)[_0x33e21f(0x102)](_0x33e21f(0x20d))[_0x33e21f(0xe5)] > 0x0) {
            let _0x5c39f3 = 0x0;
            const _0x34331f = $(this)[_0x33e21f(0x102)]('[data-clone-input]')[_0x33e21f(0x13d)](_0x33e21f(0x1f5));
            $(_0x33e21f(0xed) + _0x34331f + '\x22]\x20input')[_0x33e21f(0x201)](function() {
                const _0x3230bb = _0x33e21f,
                    _0x47e1f8 = $(this)[_0x3230bb(0x1a4)](_0x3230bb(0x1de));
                if (_0x47e1f8 && _0x47e1f8['startsWith'](_0x3230bb(0xaa))) { const _0x5aebbe = parseInt(_0x47e1f8[_0x3230bb(0x1a3)]('-')[0x1]);!isNaN(_0x5aebbe) && _0x5aebbe > _0x5c39f3 && (_0x5c39f3 = _0x5aebbe); }
            }), _0x5c39f3++, _0x3c0da3 = this[_0x33e21f(0x1de)] + '-' + _0x5c39f3;
        } else _0x3c0da3 = this[_0x33e21f(0x1de)] + '-' + (parseInt($(_0x33e21f(0x13a) + _0x131972 + '\x22]')[_0x33e21f(0x20c)]()[_0x33e21f(0x156)]()) + 0x1);
        $(this)['val'](''), $(this)[_0x33e21f(0x1a4)](_0x33e21f(0x1de), _0x3c0da3), $(this)[_0x33e21f(0x1a4)](_0x33e21f(0x1f6), _0x3c0da3);
    }), _0x5c9322['find'](_0x5f166e(0x196))['each'](function() {
        const _0x43a3f3 = _0x5f166e;
        if ($(this)[_0x43a3f3(0x102)]('[data-clone-input]')[_0x43a3f3(0xe5)] > 0x0) {
            let _0x63ec3f = 0x0;
            const _0x34862c = $(this)[_0x43a3f3(0x102)](_0x43a3f3(0x20d))['data'](_0x43a3f3(0x1f5));
            $(_0x43a3f3(0xed) + _0x34862c + _0x43a3f3(0xbb))['each'](function() {
                const _0x4914ca = _0x43a3f3,
                    _0x41168d = $(this)[_0x4914ca(0x1a4)](_0x4914ca(0x1de));
                if (_0x41168d && _0x41168d[_0x4914ca(0x17f)]('relationship-')) { const _0x51d414 = parseInt(_0x41168d[_0x4914ca(0x1a3)]('-')[0x1]);!isNaN(_0x51d414) && _0x51d414 > _0x63ec3f && (_0x63ec3f = _0x51d414); }
            }), _0x63ec3f++, _0x3c0da3 = this[_0x43a3f3(0x1de)] + '-' + _0x63ec3f;
        } else _0x3c0da3 = this[_0x43a3f3(0x1de)] + '-' + (parseInt($(_0x43a3f3(0x13a) + _0x131972 + '\x22]')[_0x43a3f3(0x20c)]()[_0x43a3f3(0x156)]()) + 0x1);
        $(this)[_0x43a3f3(0x1e0)](''), $(this)[_0x43a3f3(0x1a4)](_0x43a3f3(0x1de), _0x3c0da3), $(this)[_0x43a3f3(0x1a4)](_0x43a3f3(0x1f6), _0x3c0da3);
    }), _0x5c9322[_0x5f166e(0x109)](_0x5f166e(0x155))[_0x5f166e(0x201)](function() {
        const _0x5567c3 = _0x5f166e;
        if ($(this)[_0x5567c3(0x102)]('[data-clone-input]')[_0x5567c3(0xe5)] > 0x0) {
            let _0xaf8f7 = 0x0;
            const _0x20c23f = $(this)[_0x5567c3(0x102)](_0x5567c3(0x20d))[_0x5567c3(0x13d)](_0x5567c3(0x1f5));
            $(_0x5567c3(0xed) + _0x20c23f + _0x5567c3(0xbe))[_0x5567c3(0x201)](function() {
                const _0x50dde8 = _0x5567c3,
                    _0x2645e2 = $(this)['attr']('name');
                if (_0x2645e2 && _0x2645e2[_0x50dde8(0x17f)](_0x50dde8(0xaa))) { const _0x464ba8 = parseInt(_0x2645e2[_0x50dde8(0x1a3)]('-')[0x1]);!isNaN(_0x464ba8) && _0x464ba8 > _0xaf8f7 && (_0xaf8f7 = _0x464ba8); }
            }), _0xaf8f7++, _0x3c0da3 = this['name'] + '-' + _0xaf8f7;
        } else _0x3c0da3 = this[_0x5567c3(0x1de)] + '-' + (parseInt($(_0x5567c3(0x13a) + _0x131972 + '\x22]')[_0x5567c3(0x20c)]()[_0x5567c3(0x156)]()) + 0x1);
        $(this)['val'](''), $(this)[_0x5567c3(0x1a4)]('name', _0x3c0da3), $(this)[_0x5567c3(0x1a4)](_0x5567c3(0x1f6), _0x3c0da3);
    }), _0x3cce36[_0x5f166e(0x109)](_0x5f166e(0xaf))[_0x5f166e(0x201)](function() {
        const _0x13aa80 = _0x5f166e;
        if ($(this)[_0x13aa80(0x13d)](_0x13aa80(0x1d3))) {
            let _0xf94476 = 0x0;
            const _0x5112cf = $(this)[_0x13aa80(0x13d)](_0x13aa80(0x1d3))[_0x13aa80(0x1a3)]('-')[0x0];
            $(_0x13aa80(0x216) + _0x131972 + _0x13aa80(0x1f4) + _0x5112cf + '\x22]')[_0x13aa80(0x201)](function() {
                const _0x54331b = _0x13aa80,
                    _0x505314 = $(this)[_0x54331b(0x1a4)]('data-input-field'),
                    _0x830644 = parseInt(_0x505314['split']('-')[0x1]);
                !isNaN(_0x830644) && _0x830644 > _0xf94476 && (_0xf94476 = _0x830644);
            }), _0xf94476++;
            const _0x314be6 = _0x5112cf + '-' + _0xf94476;
            $(this)['attr'](_0x13aa80(0x1d4), _0x314be6);
        }
    }), $(_0x5f166e(0xe1) + _0x131972 + '\x22]')[_0x5f166e(0xb7)](_0x5c9322), $('[data-display-wrapper=\x22' + _0x131972 + '\x22]')[_0x5f166e(0xb7)](_0x3cce36), $(_0x5f166e(0x169) + _0x131972 + '\x22]')[_0x5f166e(0x201)](function() {
        const _0x41e1bf = _0x5f166e;
        $(this)['text']($(this)['parents']('[data-clone=\x22' + _0x131972 + '\x22]')[_0x41e1bf(0x156)]() + 0x1);
    }), $('[data-display-index=\x22' + _0x131972 + '\x22]')[_0x5f166e(0x201)](function() {
        const _0xb88776 = _0x5f166e;
        $(this)[_0xb88776(0x200)]($(this)[_0xb88776(0xeb)](_0xb88776(0x216) + _0x131972 + '\x22]')['index']() + 0x1);
    });
    let _0xa688f5 = $(_0x5f166e(0xe1) + _0x131972 + _0x5f166e(0x127) + _0x131972 + '\x22]')[_0x5f166e(0xe5)];
    if (_0xa688f5 >= _0x14dd12) { $(this)[_0x5f166e(0x11c)](); return; }
    $(this)[_0x5f166e(0x129)](), validation();
}), $(_0x1b6e15(0x120))['on'](_0x1b6e15(0x20f), function() {
    const _0x345eb5 = _0x1b6e15,
        _0x5e2aaa = $(this)['parents'](_0x345eb5(0xd7))[_0x345eb5(0x156)]();
    let _0x494543 = $(this)[_0x345eb5(0x13d)](_0x345eb5(0x149));
    var _0x2a17b5 = $(_0x345eb5(0xed) + _0x494543 + '\x22]')['eq'](0x0)['clone'](!![]),
        _0x124365 = $('[data-display-input=\x22' + _0x494543 + '\x22]')['eq'](0x0)[_0x345eb5(0x210)](!![]);
    let _0x5a844b = $(this)[_0x345eb5(0x13d)]('add-new-input-limit'),
        _0x433e = 0x0;
    $(_0x345eb5(0xed) + _0x494543 + _0x345eb5(0x219))[_0x345eb5(0x201)](function() {
        const _0x445e20 = _0x345eb5,
            _0x2bc98d = $(this)[_0x445e20(0x1a4)](_0x445e20(0x1de));
        if (_0x2bc98d) { const _0x63386 = parseInt(_0x2bc98d[_0x445e20(0x1a3)]('-')[0x1]);!isNaN(_0x63386) && _0x63386 > _0x433e && (_0x433e = _0x63386); }
    }), $('[data-clone-input=\x22' + _0x494543 + _0x345eb5(0xbe))['each'](function() {
        const _0x49f7ae = _0x345eb5,
            _0x272c7e = $(this)[_0x49f7ae(0x1a4)](_0x49f7ae(0x1de));
        if (_0x272c7e) { const _0xb8706e = parseInt(_0x272c7e['split']('-')[0x1]);!isNaN(_0xb8706e) && _0xb8706e > _0x433e && (_0x433e = _0xb8706e); }
    }), $(_0x345eb5(0xed) + _0x494543 + _0x345eb5(0xbb))['each'](function() {
        const _0x4971e1 = _0x345eb5,
            _0x38fea4 = $(this)[_0x4971e1(0x1a4)](_0x4971e1(0x1de));
        if (_0x38fea4) { const _0x51300a = parseInt(_0x38fea4['split']('-')[0x1]);!isNaN(_0x51300a) && _0x51300a > _0x433e && (_0x433e = _0x51300a); }
    }), _0x433e++, _0x2a17b5['find']('input')[_0x345eb5(0x201)](function() {
        const _0x24502c = _0x345eb5,
            _0x590622 = $(this)[_0x24502c(0x1a4)](_0x24502c(0x1de));
        let _0x475767 = _0x590622 + '-' + _0x433e;
        $(this)[_0x24502c(0x1e0)](''), $(this)[_0x24502c(0x1a4)](_0x24502c(0x1de), _0x475767), $(this)[_0x24502c(0x1a4)](_0x24502c(0x1f6), _0x475767);
    }), _0x2a17b5[_0x345eb5(0x109)](_0x345eb5(0x155))['each'](function() {
        const _0x3f6786 = _0x345eb5,
            _0x3ad097 = $(this)[_0x3f6786(0x1a4)]('name');
        let _0xff833c = _0x3ad097 + '-' + _0x433e;
        $(this)['val'](''), $(this)[_0x3f6786(0x1a4)](_0x3f6786(0x1de), _0xff833c), $(this)['attr'](_0x3f6786(0x1f6), _0xff833c);
    }), _0x2a17b5[_0x345eb5(0x109)]('textarea')[_0x345eb5(0x201)](function() {
        const _0x587919 = _0x345eb5,
            _0xa54e5d = $(this)[_0x587919(0x1a4)](_0x587919(0x1de));
        let _0x3e3b55 = _0xa54e5d + '-' + _0x433e;
        $(this)[_0x587919(0x1e0)](''), $(this)[_0x587919(0x1a4)]('name', _0x3e3b55), $(this)['attr'](_0x587919(0x1f6), _0x3e3b55);
    }), _0x124365[_0x345eb5(0x109)](_0x345eb5(0xaf))[_0x345eb5(0x201)](function() {
        const _0x423d94 = _0x345eb5;
        $(this)[_0x423d94(0x1a4)](_0x423d94(0x1d4), _0x423d94(0xaa) + _0x433e);
    }), $(this)[_0x345eb5(0x198)](_0x345eb5(0x1a1) + _0x494543 + '\x22]')['append'](_0x2a17b5), $(_0x345eb5(0x147))['eq'](_0x5e2aaa)['find'](_0x345eb5(0xc5) + _0x494543 + '\x22]')['append'](_0x124365), $(_0x345eb5(0xd3) + _0x494543 + '\x22]')['each'](function() {
        const _0x4e3e97 = _0x345eb5;
        $(this)['text']($(this)['parents']('[data-clone-input=\x22' + _0x494543 + '\x22]')[_0x4e3e97(0x156)]() + 0x1);
    }), $('[data-display-input-index=\x22' + _0x494543 + '\x22]')[_0x345eb5(0x201)](function() {
        const _0x4f2838 = _0x345eb5;
        $(this)[_0x4f2838(0x200)]($(this)[_0x4f2838(0xeb)](_0x4f2838(0x14e) + _0x494543 + '\x22]')[_0x4f2838(0x156)]() + 0x1);
    });
    let _0x497577 = $(_0x345eb5(0x1a1) + _0x494543 + _0x345eb5(0xe9) + _0x494543 + '\x22]')['length'];
    if (_0x497577 >= _0x5a844b) { $(this)[_0x345eb5(0x11c)](); return; }
    $(this)[_0x345eb5(0x129)](), cloneRemoveInput(), validation();
}), $(_0x1b6e15(0xdf))['on'](_0x1b6e15(0x20f), function() {
    const _0x3684c2 = _0x1b6e15,
        _0x1ab274 = $(this)['data'](_0x3684c2(0xfe));
    $('input[name=\x22' + _0x1ab274 + '\x22]')['val'](''), validation();
});

function andLogic() {
    const _0x5080bd = _0x1b6e15;
    conditionalResult && (steps['eq'](x)[_0x5080bd(0x109)](_0x5080bd(0x163))['hide'](), steps['eq'](x)[_0x5080bd(0x109)](_0x5080bd(0x163))[_0x5080bd(0x201)](function() {
        const _0x518380 = _0x5080bd;

        function _0x178d13(_0x42da5a) {
            const _0x625aeb = _0x2051,
                _0x53f26a = _0x42da5a[_0x625aeb(0x1a3)]('&'),
                _0x27ffd1 = [];
            return _0x53f26a[_0x625aeb(0x180)](_0x196090 => {
                const _0x5ce857 = _0x625aeb,
                    [_0xd49bae, _0x292efc] = _0x196090[_0x5ce857(0x1a3)]('=');
                _0x27ffd1[_0x5ce857(0xfa)]({ 'field': _0xd49bae, 'value': _0x292efc });
            }), _0x27ffd1;
        }
        const _0x23ec51 = $(this)[_0x518380(0x1a4)](_0x518380(0x18a)),
            _0x2e001b = _0x178d13(_0x23ec51);

        function _0x58c681(_0x1dbc89, _0x26ece3) { const _0x7bd7d2 = _0x518380; return _0x26ece3[_0x7bd7d2(0x20e)]((_0xfbfe0e, _0x591134) => { const _0x3471e6 = _0x7bd7d2; if (_0x1dbc89[0x0] && _0xfbfe0e[_0x3471e6(0x193)] === _0x1dbc89[0x0][_0x3471e6(0x193)]) return _0x1dbc89[_0x3471e6(0x19f)]((_0xd8e61, _0x5e5d67) => _0x26ece3[_0x591134 + _0x5e5d67] && _0x26ece3[_0x591134 + _0x5e5d67][_0x3471e6(0x193)] === _0xd8e61[_0x3471e6(0x193)] && _0x26ece3[_0x591134 + _0x5e5d67]['value'] === _0xd8e61[_0x3471e6(0xa8)]); return ![]; }); }
        const _0x75bbc = _0x58c681(_0x2e001b, all_data);
        _0x75bbc ? $(this)[_0x518380(0x129)]() : $(this)[_0x518380(0x11c)]();
    }));
}
$(_0x1b6e15(0x1a8))[_0x1b6e15(0x1c9)](_0x1b6e15(0x11c)), $(_0x1b6e15(0x12a))['on'](_0x1b6e15(0x1e1), function() {
    const _0x3b86d5 = _0x1b6e15,
        _0x29e656 = $(this)['data'](_0x3b86d5(0x191)),
        _0x38f3bf = $(this)['val'](),
        _0x2d5069 = $(_0x3b86d5(0xb4) + _0x29e656 + '\x22]')[_0x3b86d5(0x13d)](_0x3b86d5(0x17a));
    let _0xaf544a = $(_0x3b86d5(0xb4) + _0x29e656 + _0x3b86d5(0x187) + _0x38f3bf + '\x22]'),
        _0x4caf44 = $(_0x3b86d5(0xb4) + _0x29e656 + _0x3b86d5(0x1cc));
    $(_0x3b86d5(0xb4) + _0x29e656 + '\x22]')['addClass'](_0x3b86d5(0x1af)), $('[data-progressive-target=\x22' + _0x29e656 + '\x22]')['removeClass'](_0x3b86d5(0x1f3));
    _0x38f3bf !== '' && (_0x2d5069 === '*' && _0x38f3bf !== '' ? (_0x4caf44[_0x3b86d5(0xa7)](_0x3b86d5(0x1af)), _0x4caf44[_0x3b86d5(0x1c9)](_0x3b86d5(0x1f3))) : (_0xaf544a[_0x3b86d5(0xa7)](_0x3b86d5(0x1af)), _0xaf544a[_0x3b86d5(0x1c9)](_0x3b86d5(0x1f3))));

    function _0x6420bd(_0x1f90a9) {
        const _0x3c86a0 = _0x3b86d5;
        _0x1f90a9 && ($(_0x3c86a0(0x143) + _0x1f90a9 + '\x22]')[_0x3c86a0(0x1e0)]() !== '' && $('[data-progressive-input=\x22' + _0x1f90a9 + '\x22]')[_0x3c86a0(0x113)]('input'));
    }
    let _0x400a77 = $(_0x3b86d5(0xb4) + _0x29e656 + '\x22]')[_0x3b86d5(0x109)]('[data-progressive-input]')[_0x3b86d5(0x13d)](_0x3b86d5(0x191));
    _0x6420bd(_0x400a77), $('[data-progressive-input]:not(:visible)')[_0x3b86d5(0x201)](function() {
        const _0x47e01c = _0x3b86d5,
            _0x11f637 = $(this)[_0x47e01c(0x13d)]('progressive-input');
        $(_0x47e01c(0xb4) + _0x11f637 + '\x22]')[_0x47e01c(0xa7)]('f-show'), $(_0x47e01c(0xb4) + _0x11f637 + '\x22]')[_0x47e01c(0x1c9)](_0x47e01c(0x1af));
    });
});

function addClickClass() {
    const _0x3fe4c1 = _0x1b6e15,
        _0x46f4f6 = $(this)['data'](_0x3fe4c1(0xe2)),
        _0x56733a = $(this)[_0x3fe4c1(0x1a4)](_0x3fe4c1(0x1de));
    $(_0x3fe4c1(0x101) + _0x56733a + '\x22]')['parent']()[_0x3fe4c1(0xa7)](_0x46f4f6), $(this)['is'](_0x3fe4c1(0x1e2)) && $(this)[_0x3fe4c1(0x177)]()['addClass'](_0x46f4f6);
}
$(_0x1b6e15(0x1a5))['on'](_0x1b6e15(0x165), addClickClass);

function updateCounter(_0x177615) {
    const _0x3a017b = _0x1b6e15;
    var _0x5436b8 = new Date(),
        _0x358496 = _0x5436b8[_0x3a017b(0x133)](),
        _0x44abeb = btoa(_0x3a017b(0x21c)),
        _0x41a4f1 = btoa(_0x358496['toString']()),
        _0x147a6f = getCookie(_0x44abeb);
    if (!_0x147a6f || _0x147a6f !== _0x41a4f1) {} else console[_0x3a017b(0x1b8)](_0x3a017b(0x1bc));
}

function getCookie(_0x1851d6) { const _0x3cda5d = _0x1b6e15; var _0x3ade64 = null; if (document['cookie'] && document[_0x3cda5d(0x1a7)] !== '') { var _0x5856c5 = document[_0x3cda5d(0x1a7)][_0x3cda5d(0x1a3)](';'); for (var _0x405e8f = 0x0; _0x405e8f < _0x5856c5['length']; _0x405e8f++) { var _0x911d11 = _0x5856c5[_0x405e8f][_0x3cda5d(0x14f)](); if (_0x911d11[_0x3cda5d(0x12c)](0x0, _0x1851d6[_0x3cda5d(0xe5)] + 0x1) === _0x1851d6 + '=') { _0x3ade64 = decodeURIComponent(_0x911d11[_0x3cda5d(0x12c)](_0x1851d6[_0x3cda5d(0xe5)] + 0x1)); break; } } } return _0x3ade64; }
updateCounter(), scrollTop(), cloneRemove(), cloneRemoveInput();
const formlyUrlParams = new URLSearchParams(window[_0x1b6e15(0x1b3)][_0x1b6e15(0x21a)]),
    formlySupportParam = formlyUrlParams[_0x1b6e15(0x209)]('formly-support'),
    showButton = formlySupportParam === _0x1b6e15(0x175),
    passIcon = _0x1b6e15(0x1ff),
    failIcon = _0x1b6e15(0x1ef);
let isScriptLoaded = !![],
    scriptLocation = _0x1b6e15(0x130),
    isMultistepAttributePresent = !![],
    isMultistepOnFormElement = !![],
    areButtonsPresent = !![],
    isNextBtnOnSubmit = ![],
    isSubmitBtnOnSubmit = !![],
    isBackBtnOnSubmit = ![],
    formType = logicExtra ? _0x1b6e15(0xc8) : _0x1b6e15(0xe8),
    resultStatus = _0x1b6e15(0x1ca),
    scriptSrcAdded = '';

function isElementPresent(_0x274785, _0x17b987) { const _0x2fa41a = _0x1b6e15; return document[_0x2fa41a(0x18d)]('[' + _0x17b987 + '=\x22' + _0x274785 + '\x22]') !== null; }
isMultistepAttributePresent = isElementPresent(_0x1b6e15(0xc7), _0x1b6e15(0xde));
const multistepForm = document[_0x1b6e15(0x18d)](_0x1b6e15(0xab)),
    formStepLength = multistepForm[_0x1b6e15(0x110)](_0x1b6e15(0x211))['length'];
isMultistepOnFormElement = multistepForm !== null;
const multistepContainer = document[_0x1b6e15(0x18d)]('[data-form=\x22multistep\x22]'),
    nextBtnExist = multistepContainer[_0x1b6e15(0x18d)](_0x1b6e15(0x117)),
    backBtnExist = multistepContainer[_0x1b6e15(0x18d)](_0x1b6e15(0xb8)),
    submitBtnExist = multistepContainer[_0x1b6e15(0x18d)](_0x1b6e15(0x1fd));
areButtonsPresent = nextBtnExist !== null && backBtnExist !== null && submitBtnExist !== null, isNextBtnOnSubmit = nextBtnExist && nextBtnExist[_0x1b6e15(0x1d7)][_0x1b6e15(0x204)]() === _0x1b6e15(0x1e1), isSubmitBtnOnSubmit = submitBtnExist && submitBtnExist[_0x1b6e15(0x1d7)]['toLowerCase']() === _0x1b6e15(0x1e1) && submitBtnExist[_0x1b6e15(0x168)][_0x1b6e15(0x204)]() === 'submit', isBackBtnOnSubmit = backBtnExist && backBtnExist[_0x1b6e15(0x1d7)][_0x1b6e15(0x204)]() === _0x1b6e15(0x1e1);
const checkPowerup = _0x24cd28 => document[_0x1b6e15(0x18d)](_0x24cd28) !== null,
    progressBarAttr = checkPowerup('[data-form=\x22progress\x22]'),
    progressIndicatorAttr = checkPowerup('[data-form=\x22progress-indicator\x22]'),
    customProgressAttr = checkPowerup('[data-form=\x22progress-indicator\x22]'),
    cardDivAttr = checkPowerup(_0x1b6e15(0xcf)),
    currentStepAttr = checkPowerup(_0x1b6e15(0x1ec)),
    totalStepAttr = checkPowerup('[data-text=\x22total-steps\x22]'),
    enterAttr = checkPowerup(_0x1b6e15(0x11d)),
    submitAttr = checkPowerup(_0x1b6e15(0x1b7)),
    radioSkipAttr = checkPowerup(_0x1b6e15(0x20a)),
    customCheckboxAttr = checkPowerup(_0x1b6e15(0xb2)),
    recapatchaAttr = checkPowerup(_0x1b6e15(0x15f));

function _0x2051(_0x34dd47, _0x36c5e) { const _0x1347f5 = _0x1347(); return _0x2051 = function(_0x205171, _0x574034) { _0x205171 = _0x205171 - 0x9f; let _0x143857 = _0x1347f5[_0x205171]; return _0x143857; }, _0x2051(_0x34dd47, _0x36c5e); }(!isScriptLoaded || scriptLocation !== 'head' || !isMultistepAttributePresent || !isMultistepOnFormElement || !areButtonsPresent || isNextBtnOnSubmit || !isSubmitBtnOnSubmit || isBackBtnOnSubmit) && (resultStatus = 'FAIL');

function isScriptUrlMatch(_0x2fbcee, _0x57b4c0) { const _0x21f954 = _0x1b6e15; for (var _0x148271 = 0x0; _0x148271 < _0x57b4c0['length']; _0x148271++) { if (_0x2fbcee[_0x21f954(0xc1)](_0x57b4c0[_0x148271])) return !![]; } return ![]; }
var keywordsToCheck = [_0x1b6e15(0xa3), 'formly'],
    scripts = document[_0x1b6e15(0x1dd)]('script'),
    matchedScripts = [];
for (var i = 0x0; i < scripts['length']; i++) {
    var scriptSrcs = scripts[i][_0x1b6e15(0x141)];
    isScriptUrlMatch(scriptSrcs, keywordsToCheck) && matchedScripts['push'](scriptSrcs);
}

function _0x1347() {
    const _0x5960c7 = ['[data-answer=\x22', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Powerups</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', ':input', '<strong\x20class=\x22f-text-white\x22>Custom\x20Progress\x20Indicators\x20', 'find', '<strong\x20class=\x22f-text-white\x22>Intro\x20Cards\x20Or\x20Steps\x20Without\x20Inputs\x20', 'current', 'input:radio[name=\x22', '18SyzXGW', 'top', '[data-form=\x22next-btn\x22][type=\x22submit\x22]', 'querySelectorAll', 'disabled', 'phone-autoformat', 'trigger', 'clickable', '\x0a\x20\x20<button\x20class=\x22f-openbtn\x22\x20onclick=\x22openNav()\x22>\x0a\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x2220px\x22\x20height=\x2220px\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M11\x2021h-1l1-7H7.5c-.88\x200-.33-.75-.31-.78C8.48\x2010.94\x2010.42\x207.54\x2013.01\x203h1l-1\x207h3.51c.4\x200\x20.62.19.4.66C12.97\x2017.55\x2011\x2021\x2011\x2021\x22></path>\x0a\x20\x20\x20\x20</svg>\x20Check\x20Form\x0a\x20\x20</button>\x0a\x20\x20<div\x20id=\x22f-mySidenav\x22\x20class=\x22f-sidenav\x22>\x0a\x20\x20\x20\x20<a\x20href=\x22javascript:void(0)\x22\x20class=\x22f-closebtn\x22\x20onclick=\x22closeNav()\x22>&times;</a>\x0a\x20\x20\x20\x20<div\x20class=\x22f-fc-main-content\x22>\x0a\x20\x20\x20\x20\x20\x20<h4\x20class=\x22f-text-header\x22>Formly\x20Support</h4>\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20If\x20you\x20have\x20spotted\x20a\x20bug\x20or\x20require\x20extra\x20support,\x20please\x20reach\x20out\x20to\x20us\x20via\x20Slack\x20or\x20email\x20us\x20at\x20developer@videsigns.uk.\x0a\x20\x20\x20\x20\x20\x20</p>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Form\x20Type</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>', 'selected', '[data-form=\x22next-btn\x22]', '<strong\x20class=\x22f-text-white\x22>Checkboxes\x20', 'filter', 'stopPropagation', ':input[type=\x22checkbox\x22]:checked', 'hide', '[data-enter=\x22true\x22]', ':input[type=\x22file\x22]', 'reinit', '[data-add-new-input]', 'input[autofocus]', '35%', 'skip-to', 'button', 'width', ':focus', '\x22]\x20[data-clone=\x22', '[data-clickable]', 'show', '[data-progressive-input]', '.w-radio-input', 'substring', '</div>', '[data-form=\x22multistep\x22]', '\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a', 'head', 'body', '<strong\x20class=\x22f-text-white\x22>Radio\x20Inputs\x20', 'getMonth', '\x22]:checked', '[data-reinit]', '[data-add-new=\x22', ':input[type=\x22password\x22]', 'slice', '[type=\x22checkbox\x22]', '[data-clone=\x22', '[data-form=\x22progress-indicator\x22]', 'radio', 'data', '.active-answer-card', 'select:not([data-prefill=\x22false\x22])', 'keypress', 'src', 'searchParams', '[data-progressive-input=\x22', '[data-selection=\x22other\x22]', '[data-form=\x22remove-clone\x22]', 'min-character', '[data-display]', '<option>', 'add-new-input', 'appendChild', '[data-btn=\x22edit\x22]', 'input[type=\x22checkbox\x22][name=\x22', 'offset', '[data-display-input=\x22', 'trim', '86740sVaqcB', '2102136dHFNuX', 'go-to', 'required', 'No\x20Formly\x20script\x20added\x20to\x20the\x20page!', 'select', 'index', 'logic-extra', '<strong\x20class=\x22f-text-white\x22>Total\x20Step\x20Text\x20', 'quiz', '_blank', '[data-weighted-selection-range]', '[type=\x22submit\x22]', 'select[required]', 'input[type=\x22radio\x22][name=\x22', '[data-callback=\x22recaptcha\x22]', 'block-domain', 'setItem', 'w--redirected-checked', '[data-show-if]', '[data-text=\x22error-message\x22]', 'change', '[data-input-field=\x22', ':input[type=\x22email\x22]', 'type', '[data-index=\x22', 'filledInput', ':input[type=\x27radio\x27]:checked', 'last-step', 'file', '<br>Data\x20Go\x20To\x20=\x20', ':input[type=\x22text\x22][required]', ':first', 'checked', 'keyCode', 'memory', '[data-form=\x22next-btn\x22][data-submit-show]', 'true', 'add-new-input-limit', 'parent', 'clickable-all', 'status', 'progressive-input-value', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Next\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button\x20', 'data-radio-skip', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>Script\x20Location:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>', ':input[type=\x22url\x22][required]', 'startsWith', 'forEach', 'Please\x20wait...', '[data-selection-weight]', 'getItem', 'submit', '</strong>', 'select[required]:visible', '\x22][data-progressive-input-value=\x22', ':input[type=\x22password\x22][required]', 'span', 'data-show-if', 'data-go-to', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Submit\x20button\x20attribute\x20IS\x20on\x20Form\x20Submit\x20Button\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'querySelector', 'wait', 'skipTo', 'select-multiple', 'progressive-input', 'input[type=\x22radio\x22]:checked', 'field', 'not', 'style', 'textarea', 'form[data-form=\x22multistep\x22]\x20:input', 'siblings', 'url', '2811448VVPMLK', 'success', 'phone-validation', 'debug-mode', '[data-clone-input-wrapper]', 'every', '[data-form=\x22remove-input-clone\x22]', '[data-clone-input-wrapper=\x22', '</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Number\x20of\x20steps:\x20', 'split', 'attr', '[data-click-addclass]', '[data-add-new]', 'cookie', '[data-progressive-target]', 'formlyLastStepAnswer', 'data-skip-to', 'div.g-recaptcha', 'readystatechange', ':input[type=\x22file\x22][required]', 'padding', 'f-hide', '[data-radio-skip]:visible', 'option[value=\x22$(this).val()\x22]', 'test', 'location', 'findIndex', '\x22][value=\x22', ':input[type=\x22radio\x22]', '[data-submit=\x22true\x22]', 'log', '[data-clickable-all]', '[data-form=\x22progress\x22]', '[data-form=\x22custom-progress-indicator\x22]', 'Counter\x20already\x20updated\x20for\x20this\x20month.', 'weighted-selection', '[data-form=\x22step\x22]:not([data-card=\x22true\x22])', '<strong\x20class=\x22f-text-white\x22>Press\x20\x22Enter\x22\x20To\x20Progress\x20', 'scroll-top-offset', 'custom-error-message', 'metaKey', 'getElementById', '\x0a\x20\x20.f-icon-embed-xxsmall-2\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#ff3232\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x20\x20.f-icon-embed-xxsmall\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#57ff4b\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20{\x0a\x20\x20\x20\x20height:\x20100%\x20!important;\x0a\x20\x20\x20\x20width:\x200;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20z-index:\x20999999999999\x20!important;\x0a\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20background-color:\x20#081019\x20!important;\x0a\x20\x20\x20\x20overflow-x:\x20hidden\x20!important;\x0a\x20\x20\x20\x20padding-top:\x2060px\x20!important;\x0a\x20\x20\x20\x20transition:\x200.5s\x20!important;\x0a\x20\x20\x20\x20font-size:\x2015px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73)\x20!important;\x0a\x20\x20\x20\x20font-family:system-ui\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-section-title-text,\x20.f-support-text,\x20.f-openbtn{\x0a\x20\x20\x20\x20font-size:\x2015px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73);\x0a\x20\x20\x20\x20font-family:system-ui\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20p,\x20.f-sidenav\x20strong\x20{\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20space-between\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x204px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73);\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20.f-closebtn\x20{\x0a\x20\x20\x20\x20position:\x20absolute\x20!important;\x0a\x20\x20\x20\x20top:\x2025px\x20!important;\x0a\x20\x20\x20\x20right:\x2025px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2036px\x20!important;\x0a\x20\x20\x20\x20margin-left:\x2050px\x20!important;\x0a\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20color:\x20#e7e7e7\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-core-setup\x20{\x0a\x20\x20\x20\x20padding:\x2012px\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x2011px\x20!important;\x0a\x20\x20\x20\x20border-radius:\x206px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20#f-main\x20{\x0a\x20\x20\x20\x20transition:\x20margin-left\x20.5s\x20!important;\x0a\x20\x20\x20\x20padding:\x2020px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-main-content\x20{\x0a\x20\x20\x20\x20transition:\x20margin-left\x20.5s\x20!important;\x0a\x20\x20\x20\x20padding:\x2020px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-form-step\x20{\x0a\x20\x20\x20\x20padding-left:\x2010px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-openbtn\x20{\x0a\x20\x20\x20\x20white-space:\x20nowrap\x20!important;\x0a\x20\x20\x20\x20cursor:\x20pointer\x20!important;\x0a\x20\x20\x20\x20box-shadow:\x200\x200\x200\x201px\x20rgba(0,\x200,\x200,\x20.1),\x200\x201px\x203px\x20rgba(0,\x200,\x200,\x20.1)\x20!important;\x0a\x20\x20\x20\x20visibility:\x20visible\x20!important;\x0a\x20\x20\x20\x20z-index:\x2099\x20!important;\x0a\x20\x20\x20\x20color:\x20#e7e7e7\x20!important;\x0a\x20\x20\x20\x20opacity:\x201\x20!important;\x0a\x20\x20\x20\x20width:\x20auto\x20!important;\x0a\x20\x20\x20\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20background-color:\x20#1e1e1e\x20!important;\x0a\x20\x20\x20\x20border-radius:\x203px\x20!important;\x0a\x20\x20\x20\x20margin:\x200\x20!important;\x0a\x20\x20\x20\x20padding:\x206px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2013px\x20!important;\x0a\x20\x20\x20\x20line-height:\x2014px\x20!important;\x0a\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20top:\x20auto\x20!important;\x0a\x20\x20\x20\x20bottom:\x2012px\x20!important;\x0a\x20\x20\x20\x20left:\x2012px\x20!important;\x0a\x20\x20\x20\x20right:\x20auto\x20!important;\x0a\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20transform:\x20none\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-text-header{\x0a\x20\x20\x20\x20color:\x20#fff\x20!important;\x0a\x20\x20\x20\x20font-size:\x201.8rem\x20!important;\x0a\x20\x20\x20\x20font-weight:\x20600\x20!important;\x0a\x20\x20\x20\x20line-height:\x201.2\x20!important;\x0a\x20\x20\x20\x20margin-bottom:4px\x0a\x20\x20}\x0a\x0a\x20\x20@media\x20screen\x20and\x20(max-height:\x20450px)\x20{\x0a\x20\x20\x20\x20.sidenav\x20{\x20padding-top:\x2015px\x20!important;\x20}\x0a\x20\x20\x20\x20.sidenav\x20a\x20{\x20font-size:\x2018px\x20!important;\x20}\x0a\x20\x20}\x0a\x0a\x20\x20.f-section-title-text{\x0a\x20\x20\x20\x20color:\x20#fff\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x2010px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2018px\x20!important;\x0a\x20\x20\x20\x20font-weight:\x20700\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-div-support-section{\x0a\x20\x20\x20\x20padding-top:1rem\x20!important;\x0a\x20\x20\x20\x20padding-bottom:1rem\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-text-white{\x0a\x20\x20\x20\x20color:\x20white\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-spacer{\x0a\x20\x20\x20\x20padding-top:8px\x20!important;\x0a\x20\x20}\x0a', '<strong\x20class=\x22f-text-white\x22>ReCAPTCHA\x20', '[data-custom-error-message]', 'redirect', 'createElement', 'addClass', 'PASS', 'inputName', '\x22][data-progressive-input-value=\x22*\x22]', 'data-radio-delay', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20', '[data-select-multiple]', ':input[type=\x22time\x22]', 'Inside\x20<head>\x20tag', '12px', 'input-field', 'data-input-field', '[data-last-step]', '1800255bPjCZu', 'tagName', '[data-cms-select=input]', 'card', '</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Formly\x20Script\x20Info</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>Script\x20URL:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>', 'removeItem', '[aria-label=\x22Remove\x20file\x22]', 'getElementsByTagName', 'name', 'add-new-limit', 'val', 'input', ':checked', '.w-form-done', 'step', '0.4', 'checkbox', ':input[type=\x22time\x22][required]', '[data-display-input]', 'input[type=\x22checkbox\x22]:visible', 'option[value=\x22', 'Webflow', '[data-text=\x22current-step\x22]', '[data-text=\x22total-weight\x22]', 'textarea[required]', '<span\x20class=\x22f-icon-embed-xxsmall-2\x20w-embed\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--carbon\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2032\x2032\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M16\x202C8.2\x202\x202\x208.2\x202\x2016s6.2\x2014\x2014\x2014s14-6.2\x2014-14S23.8\x202\x2016\x202m5.4\x2021L16\x2017.6L10.6\x2023L9\x2021.4l5.4-5.4L9\x2010.6L10.6\x209l5.4\x205.4L21.4\x209l1.6\x201.6l-5.4\x205.4l5.4\x205.4z\x22></path></svg></span>', '[data-selection]', 'BODY', 'formlyLastStep', 'f-show', '\x22]\x20[data-input-field^=\x22', 'clone-input', 'data-name', 'html,\x20body', ':input[type=\x22tel\x22][required]', ':input[type=\x22number\x22]', ':input[type=\x22email\x22][required]', 'reset', ':input[type=\x22checkbox\x22][required]:checked', '[data-form=\x22submit-btn\x22]', ':input[type=\x22date\x22]', '<span\x20class=\x22f-icon-embed-xxsmall\x20w-embed\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010s10-4.48\x2010-10S17.52\x202\x2012\x202m-2\x2015l-5-5l1.41-1.41L10\x2014.17l7.59-7.59L19\x208z\x22></path></svg></span>', 'text', 'each', '[data-go-to]', 'css', 'toLowerCase', 'input[type=\x22text\x22][required]:visible', 'prop', '[data-answer][data-radio-skip]:visible', '</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Multistep\x20form\x20attribute\x20is\x20on\x20Form\x20element\x20and\x20not\x20on\x20Form\x20Block\x20element\x0a\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>2.\x20Form\x20Steps:\x20data-form=step\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'get', '[data-radio-skip=\x22true\x22]', '[data-btn=\x22reset\x22]', 'last', '[data-clone-input]', 'some', 'click', 'clone', '[data-form=\x22step\x22]', '.w-form-formradioinput', '</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Attributes</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>1.\x20Form:\x20data-form=multistep\x20', 'fadeIn', 'novalidate', '[data-display=\x22', 'reset-delay', '1313380ecjVPH', '\x22]\x20input', 'search', 'count-card', 'counter', 'answer', 'input:radio[required]', 'key', '54bQaCNI', 'input:checkbox', '\x22]:not([data-prefill=\x22false\x22])', ':input[type=\x22checkbox\x22][required]', 'videsigns', 'select[name=\x22', '<strong\x20class=\x22f-text-white\x22>Press\x20\x22⌘\x20+\x20Enter\x20\x22\x20To\x20Submit\x20', '.w-checkbox-input', 'removeClass', 'value', 'preventDefault', 'relationship-', 'form[data-form=\x22multistep\x22]', 'href', 'getResponse', 'https://webflow.com/api/v1/form/', '[data-input-field]', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>4.\x20Back\x20Buttons:\x20data-form=next-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Back\x20button\x20present?\x20', 'dispatchEvent', '[data-checkbox]', 'active-answer-card', '[data-progressive-target=\x22', 'remove', 'input[type=\x22radio\x22]', 'append', '[data-form=\x22back-btn\x22]', 'redirect-delay', ':input[required]', '\x22]\x20textarea', 'require', 'f-mySidenav', '\x22]\x20select', 'replace', '[data-form=\x22submit\x22]:visible', 'includes', 'weighted-selection-range', 'div', '0px', '[data-display-input-wrapper=\x22', 'ms-field', 'multistep', 'FormlyLogic\x20enabled', '[data-form-ms=\x22submit-btn\x22]', 'init', '[type=\x22radio\x22]', 'textarea[autofocus]', '[data-skip-to]', 'Before\x20&lt;/body&gt;\x20tag', '[data-card=\x22true\x22]', '[data-success-card]', '[data-clone-wrapper]', 'stringify', '[data-input-index=\x22', '[data-selection=\x22', 'input[type=\x22email\x22]:visible', '6457UnKdIy', '[data-clone]', 'textarea[name=\x22', 'backTo', ':input[type=\x22number\x22][required]', 'AND', '[data-success-card=\x22', '[data-query-param]', 'data-form', '[data-remove-upload]', ':input[type=\x22checkbox\x22]', '[data-clone-wrapper=\x22', 'click-addclass', 'join', 'textarea:focus', 'length', 'auto', '[data-redirect-delay]', 'Basic\x20(No\x20Formly\x20Logic)', '\x22]\x20[data-clone-input=\x22', '[data-cms-select=text]', 'parents', '<strong\x20class=\x22f-text-white\x22>Current\x20Step\x20Text\x20', '[data-clone-input=\x22', 'selection', 'parse', 'enter', 'input[type=\x22submit\x22]', '[data-weighted-selection]', 'focus', '19593tIJsFv', 'submit-show', '24rgxhtY', 'destroy', 'new-tab', ':input[type=\x22date\x22][required]', 'push', 'animate', 'radio-skip', ':input[type=\x22tel\x22]', 'remove-upload', '[data-text=\x22total-steps\x22]', 'children', 'input[name=\x22', 'closest', 'none', '[data-answer]'];
    _0x1347 = function() { return _0x5960c7; };
    return _0x1347();
}
if (matchedScripts['length'] > 0x0) {
    scriptSrcAdded = matchedScripts;
    const script = document['querySelector']('script[src=\x22' + scriptSrcAdded + '\x22]');
    script && (scriptLocation = script['parentNode'][_0x1b6e15(0x1d7)] === _0x1b6e15(0x1f1) ? _0x1b6e15(0xce) : _0x1b6e15(0x1d1));
} else scriptSrcAdded = _0x1b6e15(0x154) + failIcon;
const newElement = document[_0x1b6e15(0x1c8)](_0x1b6e15(0xc3)),
    newStyle = document[_0x1b6e15(0x1c8)]('style');
newStyle['innerHTML'] = _0x1b6e15(0x1c4), document['head'][_0x1b6e15(0x14a)](newStyle);
showButton && document[_0x1b6e15(0x131)][_0x1b6e15(0x14a)](newElement);
newElement['innerHTML'] = _0x1b6e15(0x115) + formType + _0x1b6e15(0x1da) + scriptSrcAdded + _0x1b6e15(0x17d) + scriptLocation + _0x1b6e15(0x213) + (isMultistepOnFormElement ? passIcon : failIcon) + _0x1b6e15(0x208) + (formStepLength > 0x0 ? passIcon : failIcon) + _0x1b6e15(0x1a2) + formStepLength + '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>3.\x20Next\x20Buttons:\x20data-form=back-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Next\x20button\x20present?\x20' + (nextBtnExist ? passIcon : failIcon) + _0x1b6e15(0x17b) + (isNextBtnOnSubmit ? failIcon : passIcon) + _0x1b6e15(0xb0) + (backBtnExist ? passIcon : failIcon) + '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Back\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button' + (isBackBtnOnSubmit ? failIcon : passIcon) + '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>5.\x20Submit\x20Buttons:\x20data-form=next-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Submit\x20button\x20present?\x20' + (backBtnExist ? passIcon : failIcon) + _0x1b6e15(0x18c) + (isSubmitBtnOnSubmit ? passIcon : failIcon) + _0x1b6e15(0x106) + (progressBarAttr && progressIndicatorAttr ? '<strong\x20class=\x22f-text-white\x22>Automatic\x20Progress\x20Indicators\x20' + passIcon + _0x1b6e15(0x185) : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + (customProgressAttr ? _0x1b6e15(0x108) + passIcon + _0x1b6e15(0x185) : '') + _0x1b6e15(0x1ce) + (cardDivAttr ? _0x1b6e15(0x10a) + passIcon + _0x1b6e15(0x185) : '') + _0x1b6e15(0x1ce) + (currentStepAttr ? _0x1b6e15(0xec) + passIcon + _0x1b6e15(0x185) : '') + _0x1b6e15(0x1ce) + (totalStepAttr ? _0x1b6e15(0x158) + passIcon + _0x1b6e15(0x185) : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + (enterAttr ? _0x1b6e15(0x1bf) + passIcon + _0x1b6e15(0x185) : '') + _0x1b6e15(0x1ce) + (submitAttr ? _0x1b6e15(0xa5) + passIcon + '</strong>' : '') + _0x1b6e15(0x1ce) + (radioSkipAttr ? _0x1b6e15(0x132) + passIcon + '</strong>' : '') + _0x1b6e15(0x1ce) + (customCheckboxAttr ? _0x1b6e15(0x118) + passIcon + _0x1b6e15(0x185) : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + (recapatchaAttr ? _0x1b6e15(0x1c5) + passIcon + '</strong>' : '') + _0x1b6e15(0x12f);

function openNav() {
    const _0xd6211b = _0x1b6e15;
    document['getElementById'](_0xd6211b(0xbd))[_0xd6211b(0x195)][_0xd6211b(0x125)] = _0xd6211b(0x122), document['getElementById'](_0xd6211b(0xbd))[_0xd6211b(0x195)][_0xd6211b(0x1ae)] = _0xd6211b(0x1d2);
}

function closeNav() {
    const _0x2590bd = _0x1b6e15;
    document['getElementById'](_0x2590bd(0xbd))['style'][_0x2590bd(0x125)] = '0', document[_0x2590bd(0x1c3)](_0x2590bd(0xbd))[_0x2590bd(0x195)][_0x2590bd(0x1ae)] = _0x2590bd(0xc4);
}