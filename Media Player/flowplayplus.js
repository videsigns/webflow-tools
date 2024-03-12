// 12 Mar 2024
// Bug fix
// 1. Clicking unmute on a muted video not working
// 2. Autoplay video is muted by default

const _0x37f079 = _0x31ef;
(function(_0x4563e6, _0x3397ca) {
    const _0x154277 = _0x31ef,
        _0xac2fb7 = _0x4563e6();
    while (!![]) {
        try {
            const _0x9ccc58 = -parseInt(_0x154277(0x26c)) /
                0x1 * (parseInt(_0x154277(0x211)) / 0x2) + parseInt(_0x154277(0x8b)) / 0x3 * (parseInt(
                    _0x154277(0x119)) / 0x4) + parseInt(_0x154277(0x221)) / 0x5 * (parseInt(_0x154277(
                    0x28a)) / 0x6) + parseInt(_0x154277(0x15b)) / 0x7 * (-parseInt(_0x154277(0x259)) /
                    0x8) + -parseInt(_0x154277(0xba)) / 0x9 + -parseInt(_0x154277(0x17c)) / 0xa * (-parseInt(
                    _0x154277(0x28e)) / 0xb) + parseInt(_0x154277(0x1be)) / 0xc * (parseInt(_0x154277(
                    0xf7)) / 0xd);
            if (_0x9ccc58 === _0x3397ca) break;
            else _0xac2fb7['push'](_0xac2fb7['shift']());
        } catch (_0x4c94c) {
            _0xac2fb7['push'](
                _0xac2fb7['shift']());
        }
    }
}(_0x3214, 0xc4102));
let x = 0x0,
    lastStep = 0x0,
    curStep = 0x0,
    countCard = !![];
var vimeoScript = document[_0x37f079(0x27b)](_0x37f079(0x1f1));
vimeoScript['src'] = _0x37f079(0x9f), vimeoScript[_0x37f079(0x9d)] = !![];
var youtubeScript = document[_0x37f079(0x27b)](_0x37f079(0x1f1));
youtubeScript[_0x37f079(0x12e)] = _0x37f079(0x253);
var currentScript = document['currentScript'];
currentScript['parentNode'][_0x37f079(0xed)](vimeoScript, currentScript), currentScript[_0x37f079(
    0x151)][_0x37f079(0xed)](youtubeScript, currentScript);

function pauseAllPlayers() {
    const _0x1ffea9 = _0x37f079,
        _0x5ed4bb = document['querySelectorAll']('[f-data-video=\x22wrapper\x22]');
    _0x5ed4bb['forEach'](_0x3d1e4b => {
        const _0x52dfca = _0x31ef;
        let _0x54dd24 = _0x3d1e4b[
            _0x52dfca(0x215)](_0x52dfca(0xb0));
        if (_0x54dd24) {
            if (_0x54dd24[_0x52dfca(0x113)] ===
                _0x52dfca(0x12d)) _0x54dd24[_0x52dfca(0x28c)]();
            else {
                if (_0x54dd24[_0x52dfca(0x113)] === 'IFRAME') {
                    const _0x35d354 = _0x54dd24[
                        'getAttribute'](_0x52dfca(0x12e));
                    if (_0x35d354) {
                        if (_0x35d354['includes'](
                                _0x52dfca(0x1ba))) _0x54dd24[_0x52dfca(0x17a)]['postMessage'](_0x52dfca(0x1bc),
                            '*');
                        else _0x35d354[_0x52dfca(0x176)](_0x52dfca(0xf6)) && _0x54dd24[_0x52dfca(0x17a)][
                            _0x52dfca(0xc4)
                        ](_0x52dfca(0xa7), '*');
                    }
                }
            }
        }
    }), $('[f-data-video=\x22play-icon\x22]')[_0x1ffea9(
        0x1d2)](), $(_0x1ffea9(0xe5))[_0x1ffea9(0x1d2)](), $(_0x1ffea9(0x27e))[_0x1ffea9(0x19c)](), $(
        '[f-data-video=\x22pause-button\x22]')[_0x1ffea9(0x19c)]();
}
const rangeSlider = new Event(_0x37f079(0x1b7), { 'bubbles': !![], 'cancelable': !![] });
let currentVideo = null;

function initializeVideoPlayer(_0x17a390) {
    const _0xfedd8 = _0x37f079,
        _0x12becc = _0x17a390['closest'](_0xfedd8(0xdc)),
        _0x2462f7 = _0x12becc['querySelector'](_0xfedd8(0xe9)),
        _0x6719c6 = _0x12becc['querySelector'](_0xfedd8(0xc7)),
        _0x3feb4d = _0x12becc[_0xfedd8(0x215)](_0xfedd8(0x1d0)),
        _0x35b57f = _0x12becc['getAttribute'](_0xfedd8(0x254)),
        _0x5739ae = _0x12becc[_0xfedd8(0x215)](_0xfedd8(0xe5)),
        _0x40391b = _0x12becc[_0xfedd8(0x215)](_0xfedd8(0x15e)),
        _0x211798 = _0x12becc[_0xfedd8(0x215)](_0xfedd8(0x239)),
        _0x3f03d5 = _0x12becc[_0xfedd8(0x215)](_0xfedd8(0x182)),
        _0x96e5d = _0x12becc[_0xfedd8(0x215)](_0xfedd8(0x248)),
        _0xa7e4db = _0x12becc['querySelector'](_0xfedd8(0x27e)),
        _0x977f1b = _0x12becc[_0xfedd8(0x215)](_0xfedd8(0x1e4)),
        _0x290b8a = _0x12becc[_0xfedd8(0x215)](_0xfedd8(0x8e)),
        _0xc3592f = _0x12becc[_0xfedd8(0x215)](_0xfedd8(0xbe)),
        _0x57f7b3 = _0x12becc[_0xfedd8(0x215)](_0xfedd8(0x198)),
        _0x415cb6 = _0x12becc[_0xfedd8(0x215)]('[f-data-video=\x22fullscreen\x22]'),
        _0x58d779 = _0x12becc['querySelector'](_0xfedd8(0xd2)),
        _0x13ab3d = _0x12becc[_0xfedd8(0x215)]('[f-data-video=\x22current-time\x22]'),
        _0x179d30 = _0x12becc[_0xfedd8(0x215)]('[f-data-video=\x22duration\x22]'),
        _0x16f926 = _0x12becc['querySelector']('[f-data-video=\x22volume-slider\x22]'),
        _0x35f239 = _0x12becc[_0xfedd8(0x215)](_0xfedd8(0x16d)),
        _0x4f4d6d = _0x12becc[_0xfedd8(0xad)](_0xfedd8(0x24d)),
        _0x13f957 = _0x12becc[_0xfedd8(0xad)]('[f-data-video-quality]'),
        _0x4b42dd = _0x12becc[_0xfedd8(0x215)](_0xfedd8(0xe3)),
        _0x3ae9e1 = _0x12becc[_0xfedd8(0x215)](_0xfedd8(0x103)),
        _0x2d1dca = _0x12becc[_0xfedd8(0x215)](_0xfedd8(0x12f)),
        _0x4ce9ad = _0x12becc[_0xfedd8(0x215)](_0xfedd8(0x117)),
        _0x8787e3 = _0x12becc[_0xfedd8(0x215)](_0xfedd8(0x1ce)),
        _0x37fd61 = _0x12becc['querySelector'](_0xfedd8(0x82)) ? _0x12becc[_0xfedd8(0x215)](
            '[f-data-poster-once]')['getAttribute'](_0xfedd8(0x273)) : ![],
        _0x364a91 = _0x12becc[_0xfedd8(0x215)](_0xfedd8(0x1a7)),
        _0x5e50db = _0x12becc[_0xfedd8(0xad)](_0xfedd8(0xb7)),
        _0xf89a11 = _0x12becc[_0xfedd8(0xad)](_0xfedd8(0x279));
    let _0x1c6e1d = 0x0,
        _0x3772c8 = 0x0;
    const _0x454cd3 = 0xa,
        _0x475e21 = 0xa;
    let _0x552776 = 0x0,
        _0x1afc72 = ![],
        _0x348a2a = ![],
        _0x4d448e = ![];
    const _0x5f5672 = _0x12becc[_0xfedd8(0x215)](_0xfedd8(0xe4)) ? Number(
        _0x12becc[_0xfedd8(0x215)](_0xfedd8(0xe4))[_0xfedd8(0x2a4)](_0xfedd8(0x1dd))) : '';

    function _0x33cffe(_0x2cb1f6) {
        const _0x29d2b1 = _0xfedd8,
            _0x3daaf5 = Math[_0x29d2b1(0x1c9)](_0x2cb1f6 / 0x3c)[_0x29d2b1(0x160)]()[_0x29d2b1(0x19a)](
                0x2, '0'),
            _0x19b240 = Math[_0x29d2b1(0x1c9)](_0x2cb1f6 % 0x3c)[_0x29d2b1(0x160)]()[_0x29d2b1(0x19a)](
                0x2, '0');
        return _0x3daaf5 + ':' + _0x19b240;
    }

    function _0x244055() {
        const _0x2fd4dd = _0xfedd8;
        _0x5739ae && (_0x5739ae[_0x2fd4dd(0x1d9)][_0x2fd4dd(0xb1)] = _0x2fd4dd(0x24f)), _0x977f1b && (
            _0x977f1b[_0x2fd4dd(0x1d9)]['display'] = _0x2fd4dd(0x24f)), _0xa7e4db && (_0xa7e4db[
            _0x2fd4dd(0x1d9)][_0x2fd4dd(0xb1)] = ''), _0x40391b && (_0x40391b[_0x2fd4dd(0x1d9)][
            _0x2fd4dd(0xb1)
        ] = ''), _0x96e5d && (_0x96e5d['style'][_0x2fd4dd(0xb1)] = _0x2fd4dd(0x24f)), _0x3feb4d && (
            _0x37fd61 === 'true' ? !_0x348a2a && (_0x3feb4d[_0x2fd4dd(0x1d9)][_0x2fd4dd(0xb1)] =
                _0x2fd4dd(0x24f), _0x348a2a = !![]) : _0x3feb4d[_0x2fd4dd(0x1d9)][_0x2fd4dd(0xb1)] =
            _0x2fd4dd(0x24f)), _0x5e50db[_0x2fd4dd(0x1f5)](_0x5b4f6e => {
            const _0x4537d1 = _0x2fd4dd;
            _0x5b4f6e['classList']['remove'](_0x4537d1(0x1d2)), _0x5b4f6e['classList'][_0x4537d1(
                0x195)](_0x4537d1(0x19c));
        }), _0xf89a11[_0x2fd4dd(0x1f5)](_0x1bfe27 => {
            const
                _0x3dca6a = _0x2fd4dd;
            _0x1bfe27[_0x3dca6a(0x297)][_0x3dca6a(0x195)](_0x3dca6a(0x1d2)), _0x1bfe27[_0x3dca6a(
                0x297)][_0x3dca6a(0x1b0)](_0x3dca6a(0x19c));
        });
    }

    function _0x564883() {
        const _0x1f85f6 = _0xfedd8;
        _0xa7e4db && (_0xa7e4db[_0x1f85f6(0x1d9)][_0x1f85f6(0xb1)] = _0x1f85f6(0x24f)), _0x40391b && (
                _0x40391b[_0x1f85f6(0x1d9)][_0x1f85f6(0xb1)] = _0x1f85f6(0x24f)), _0x58d779 && (_0x58d779[
                _0x1f85f6(0x1d9)][_0x1f85f6(0xb1)] = _0x1f85f6(0x24f)), _0x96e5d && (_0x96e5d[_0x1f85f6(
                0x1d9)][_0x1f85f6(0xb1)] = _0x1f85f6(0x24f)), _0x179d30 && (_0x179d30[_0x1f85f6(0x11f)] =
                _0x33cffe(_0x17a390['duration'])), _0x8787e3 && (_0x8787e3['style']['opacity'] = 0x0),
            _0x16f926 && (_0x3772c8 = _0x16f926 ? _0x16f926[_0x1f85f6(0xb5)] : 0x1, _0x17a390[_0x1f85f6(
                0x180)] = _0x16f926 ? _0x16f926[_0x1f85f6(0xb5)] : 0x1), _0x364a91 && (_0x364a91['style'][
                _0x1f85f6(0xb1)
            ] = 'none'), _0x5e50db[_0x1f85f6(0x1f5)](_0x5afd3e => {
                const _0x195e44 = _0x1f85f6;
                _0x5afd3e[_0x195e44(0x297)][_0x195e44(0x195)](_0x195e44(0x1d2)), _0x5afd3e[_0x195e44(
                    0x297)][_0x195e44(0x1b0)](_0x195e44(0x19c));
            }), _0xf89a11[_0x1f85f6(0x1f5)](
                _0x2f71b4 => {
                    const _0x574f0c = _0x1f85f6;
                    _0x2f71b4[_0x574f0c(0x297)][_0x574f0c(0x1b0)]('show'), _0x2f71b4['classList'][_0x574f0c(
                        0x195)](_0x574f0c(0x19c));
                }), _0x17a390[_0x1f85f6(0xd1)]('loadedmetadata',
                function() { _0x244055(); }), _0x17a390[_0x1f85f6(0xbf)] && _0x244055(), _0x17a390[_0x1f85f6(
                0x289)] && (_0x97088d(), _0x3772c8 = 0x1);
    }

    function _0x40aa4a() {
        pauseAllPlayers(), _0x17a390['play'](), currentVideo = _0x17a390,
            _0x244055();
    }

    function _0x439503() {
        const _0x52f008 = _0xfedd8;
        _0x17a390[_0x52f008(0x28c)](), currentVideo = _0x17a390, _0x5739ae && (_0x5739ae[_0x52f008(
                0x1d9)][_0x52f008(0xb1)] = ''), _0x977f1b && (_0x977f1b[_0x52f008(0x1d9)][_0x52f008(0xb1)] =
                ''), _0xa7e4db && (_0xa7e4db[_0x52f008(0x1d9)][_0x52f008(0xb1)] = _0x52f008(0x24f)),
            _0x40391b && (_0x40391b[_0x52f008(0x1d9)][_0x52f008(0xb1)] = _0x52f008(0x24f)), _0x3feb4d && (
                _0x37fd61 ? !_0x348a2a && (_0x3feb4d['style'][_0x52f008(0xb1)] = '') : _0x3feb4d[_0x52f008(
                    0x1d9)][_0x52f008(0xb1)] = ''), _0x5e50db[_0x52f008(0x1f5)](_0x205255 => {
                const
                    _0x4b23ed = _0x52f008;
                _0x205255[_0x4b23ed(0x297)][_0x4b23ed(0x195)](_0x4b23ed(0x1d2)), _0x205255[_0x4b23ed(
                    0x297)]['remove'](_0x4b23ed(0x19c));
            }), _0xf89a11[_0x52f008(0x1f5)](_0x3a69f6 => {
                const
                    _0x539a2f = _0x52f008;
                _0x3a69f6[_0x539a2f(0x297)][_0x539a2f(0x1b0)]('show'), _0x3a69f6[_0x539a2f(0x297)][
                    _0x539a2f(0x195)
                ]('hide');
            });
    }
    _0x17a390['addEventListener'](_0xfedd8(0x242), () => {
        const _0x55b644 =
            _0xfedd8;
        _0x364a91 && (_0x364a91[_0x55b644(0x1d9)]['display'] = '');
    }), _0x17a390[_0xfedd8(0xd1)](
        _0xfedd8(0x166), () => {
            const _0x2f3346 = _0xfedd8;
            _0x364a91 && (_0x364a91[_0x2f3346(0x1d9)][_0x2f3346(0xb1)] = 'none');
        });

    function _0xf6a6d() {
        const _0x3cbf6c = _0xfedd8;
        _0x17a390[_0x3cbf6c(0x1a8)] += _0x454cd3;
    }

    function _0x112c24() {
        const _0x151117 = _0xfedd8;
        _0x17a390[_0x151117(0x1a8)] -= _0x475e21;
    }

    function _0x78d2bf() {
        const _0x534d99 = _0xfedd8;
        if (!document[_0x534d99(0x2a0)]) {
            if (
                _0x17a390[_0x534d99(0xfe)]) _0x17a390[_0x534d99(0xfe)]();
            else {
                if (_0x17a390[_0x534d99(0xe0)]) _0x17a390['mozRequestFullScreen']();
                else _0x17a390[_0x534d99(0xca)] && _0x17a390[_0x534d99(0xca)]();
            }
        } else document[
            'exitFullscreen']();
    }

    function _0x3f356b() {
        const _0x296b63 = _0xfedd8;
        _0x17a390[_0x296b63(0x8c)] ? _0x40aa4a() : _0x439503();
    }

    function _0x49b000() { _0x17a390['currentTime'] = 0x0, _0x40aa4a(); }

    function _0xcb6ef3(_0x19ef7a) {
        const _0x12f736 = _0xfedd8;
        if (_0x17a390[_0x12f736(0x1d5)][
                'length'
            ] > 0x0) {
            const _0xc25388 = _0x19ef7a[_0x12f736(0xa9)]['buffered']['end'](_0x19ef7a[
                    _0x12f736(0xa9)]['buffered'][_0x12f736(0x280)] - 0x1),
                _0x53d0de = _0xc25388 / _0x17a390['duration'] * 0x64;
            _0x57f7b3 && (_0x57f7b3[_0x12f736(0x1d9)]['width'] = _0x53d0de + '%');
        }
    }

    function _0x4b2ea7(_0x57586b) {
        const _0x359f42 = _0xfedd8,
            _0x526550 = _0x57586b[_0x359f42(0x23f)] - _0xc3592f[_0x359f42(0x298)]()[_0x359f42(0x193)],
            _0x405921 = _0x526550 * _0x17a390['duration'] / _0xc3592f[_0x359f42(0xcf)];
        _0x17a390[_0x359f42(0x1a8)] = _0x405921, _0x1f9ad2();
    }
    if (_0xc3592f) {
        _0x1afc72 = ![];
        let
            _0x43cf4a = ![];
        const _0x2b16a0 = 0x32;

        function _0x24f843(_0x1a66e7, _0x4bbdcd) {
            !_0x43cf4a && (_0x1a66e7(), _0x43cf4a = !![],
                setTimeout(() => { _0x43cf4a = ![]; }, _0x4bbdcd));
        }

        function _0xf184f5(_0x3a6a87) {
            const _0x3ffc09 = _0xfedd8;
            _0x3a6a87['preventDefault'](), _0x1afc72 = !![];
            const _0x35fffd = _0xc65afb ? _0x3a6a87[
                _0x3ffc09(0x1dc)][0x0] : _0x3a6a87;
            _0x4b2ea7(_0x35fffd);
        }

        function _0x41bd86(_0x4cf79b) {
            const _0xc954fc = _0xfedd8;
            _0x4cf79b[_0xc954fc(0x144)]();
            if (_0x1afc72) {
                const _0x640397 = _0xc65afb ? _0x4cf79b[
                    _0xc954fc(0x1dc)][0x0] : _0x4cf79b;
                _0x4b2ea7(_0x640397);
            }
        }

        function _0x1aec10() { _0x1afc72 = ![]; }
        const _0xc65afb = _0xfedd8(0xc1) in document[
            'documentElement'];
        _0xc65afb ? (_0xc3592f['addEventListener']('touchstart', _0xf184f5), _0xc3592f[_0xfedd8(0xd1)](
            _0xfedd8(0xe2), _0x41bd86), _0xc3592f[_0xfedd8(0xd1)](_0xfedd8(0x1a6), _0x1aec10)) : (
            _0xc3592f[_0xfedd8(0xd1)]('mousedown', _0xf184f5), _0x12becc[_0xfedd8(0xd1)](_0xfedd8(
                0x251), _0x41bd86), _0x12becc['addEventListener'](_0xfedd8(0x12b), _0x1aec10));
    }

    function _0x1984e5(_0x2383bb) {
        const _0x1ff32f = _0xfedd8;
        _0x17a390[_0x1ff32f(0x184)] = _0x2383bb, _0x4ce9ad && (Number(_0x2383bb) === 0x1 ? _0x4ce9ad[
            _0x1ff32f(0x11f)] = _0x1ff32f(0x281) : _0x4ce9ad[_0x1ff32f(0x11f)] = _0x2383bb + 'x');
    }

    function _0x344825(_0x4d9420) {
        const _0x91141c = _0xfedd8;
        _0x552776 = _0x17a390[_0x91141c(0x1a8)];
        _0x2d1dca && (_0x2d1dca[_0x91141c(0x11f)] = _0x4d9420);
        var _0x48d1fb = _0x17a390[_0x91141c(
            0x215)]('source[f-data-video-src-quality=\x22' + _0x4d9420 + '\x22]');
        _0x17a390[_0x91141c(0x12e)] = _0x48d1fb[_0x91141c(0x12e)], _0x17a390[_0x91141c(0x165)](),
            _0x17a390[_0x91141c(0x1a8)] = _0x552776;
    }

    function _0x1f9ad2() {
        const _0x1a1d5c = _0xfedd8;
        _0x1c6e1d = _0x17a390['currentTime'] / _0x17a390[_0x1a1d5c(0x207)] * 0x64, _0x290b8a && (
            _0x290b8a['style']['width'] = _0x1c6e1d + '%'), _0x13ab3d && (_0x13ab3d[_0x1a1d5c(0x11f)] =
            _0x33cffe(_0x17a390['currentTime'])), _0x17a390[_0x1a1d5c(0x1a8)] >= _0x17a390[_0x1a1d5c(
            0x207)] && (_0x96e5d && (_0x96e5d['style']['display'] = ''), _0x439503());
    }
    _0x17a390[
        _0xfedd8(0xd1)](_0xfedd8(0x266), () => {
        const _0x5ce585 = _0xfedd8;
        _0x179d30 && (_0x179d30[_0x5ce585(0x11f)] = _0x33cffe(_0x17a390[_0x5ce585(0x207)]));
    });

    function _0x427062() {
        const _0x57fd22 = _0xfedd8;
        _0x16f926 && (_0x17a390['muted'] && (_0x17a390[_0x57fd22(0x289)] = ![]), _0x17a390['volume'] =
            _0x16f926[_0x57fd22(0xb5)]), _0xdb16ad();
    }

    function _0x97088d() {
        const _0x55966f = _0xfedd8;
        _0x16f926 && (_0x17a390[_0x55966f(0x180)] > 0x0 ? (_0x3772c8 = _0x17a390['volume'], _0x16f926[
            _0x55966f(0xb5)] = 0x0, _0x17a390['volume'] = 0x0, _0x35f239[_0x55966f(0x1d9)][
            _0x55966f(0x14a)
        ] = 0.5) : (_0x16f926['value'] = _0x3772c8, _0x17a390[_0x55966f(0x180)] = _0x3772c8,
            _0x35f239[_0x55966f(0x1d9)][_0x55966f(0x14a)] = 0x1, _0x17a390[_0x55966f(0x289)] && (
                _0x17a390[_0x55966f(0x289)] = ![])));
    }

    function _0xdb16ad() {
        const _0x3bf015 = _0xfedd8;
        _0x16f926 && (_0x16f926[_0x3bf015(0xb5)] = _0x17a390['volume'], _0x17a390['volume'] <= 0x0 ?
            _0x35f239[_0x3bf015(0x1d9)]['opacity'] = 0.5 : (_0x3772c8 = _0x17a390[_0x3bf015(0x180)],
                _0x35f239[_0x3bf015(0x1d9)][_0x3bf015(0x14a)] = 0x1));
    }

    function _0x5c829e(_0x2052fb) {
        const _0x224f9d = _0xfedd8;
        if (_0x35b57f) {
            const _0xc4335 =
                _0x2052fb[_0x224f9d(0x150)][_0x224f9d(0xd4)]();
            (_0xc4335 === '\x20' || _0xc4335 === _0x224f9d(0x14c) || _0xc4335 === _0x224f9d(0x256)) &&
            _0x2052fb[_0x224f9d(0x144)]();
            if (_0x17a390 === currentVideo) switch (_0xc4335) {
                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                    {
                        const _0x3702bb = parseInt(_0xc4335) * 0xa,
                            _0x31afc3 = _0x3702bb / 0x64 * _0x17a390[_0x224f9d(0x207)];
                        _0x17a390[_0x224f9d(0x1a8)] = _0x31afc3;
                        break;
                    }
                case '\x20':
                    _0x17a390[_0x224f9d(0x8c)] ? _0x40aa4a() : _0x439503();
                    break;
                case 'k':
                    _0x17a390['paused'] ? _0x40aa4a() : _0x439503();
                    break;
                case 'arrowleft':
                    _0x112c24();
                    break;
                case _0x224f9d(0x271):
                    _0xf6a6d();
                    break;
                case _0x224f9d(0x256):
                    _0x17a390[_0x224f9d(0x180)] !== 0x1 && (_0x17a390[_0x224f9d(0x180)] += 0.1,
                        _0xdb16ad());
                    break;
                case _0x224f9d(0x14c):
                    _0x17a390[_0x224f9d(0x180)] !== 0x0 && (_0x17a390['volume'] -= 0.1, _0xdb16ad());
                    break;
                case 'm':
                    _0x17a390['muted'] = !_0x17a390[_0x224f9d(0x289)];
                    break;
                case 'f':
                    _0x78d2bf();
                    break;
                case 'l':
                    _0x17a390[_0x224f9d(0x147)] = !_0x17a390[_0x224f9d(0x147)];
                    break;
            }
        }
    }

    function _0x596bd7(_0x49aa30) {
        const _0x3df8fd = _0xfedd8;
        if (_0x3ae9e1) {
            const _0x403201 =
                _0x49aa30[_0x3df8fd(0x23f)] - _0xc3592f[_0x3df8fd(0x298)]()[_0x3df8fd(0x193)],
                _0x5993c0 = _0x403201 * _0x17a390['duration'] / _0xc3592f[_0x3df8fd(0xcf)];
            _0x3ae9e1[_0x3df8fd(0x1a8)] = _0x5993c0;
            const _0xcf415e = _0xc3592f['offsetWidth'],
                _0x3efc35 = _0x5993c0 / _0x17a390[_0x3df8fd(0x207)] * _0xcf415e + _0x5f5672;
            _0x8787e3 && (_0x8787e3[_0x3df8fd(0x1d9)]['display'] = '', _0x8787e3[_0x3df8fd(0x1d9)][
                _0x3df8fd(0x193)
            ] = _0x3efc35 + 'px', _0x8787e3[_0x3df8fd(0x1d9)][_0x3df8fd(0x14a)] = 0x1);
        }
    }

    function _0x21b416() {
        const _0x5a2248 = _0xfedd8;
        _0x3ae9e1 && (_0x8787e3['style'][_0x5a2248(0xb1)] = 'none', _0x8787e3[_0x5a2248(0x1d9)][
            _0x5a2248(0x14a)
        ] = 0x0);
    }
    _0x2462f7 && _0x2462f7['addEventListener']('click', _0x3f356b), _0x5739ae &&
        _0x5739ae['addEventListener'](_0xfedd8(0x10e), _0x40aa4a), _0x40391b && _0x40391b[_0xfedd8(
            0xd1)](_0xfedd8(0x10e), _0x439503), _0x211798 && _0x211798[_0xfedd8(0xd1)](_0xfedd8(0x10e),
            _0xf6a6d), _0x3f03d5 && _0x3f03d5['addEventListener'](_0xfedd8(0x10e), _0x112c24), _0x96e5d &&
        _0x96e5d[_0xfedd8(0xd1)]('click', _0x49b000), _0x415cb6 && _0x415cb6[_0xfedd8(0xd1)](_0xfedd8(
            0x10e), _0x78d2bf), _0xc3592f && _0xc3592f[_0xfedd8(0xd1)](_0xfedd8(0x10e), _0x4b2ea7),
        _0x16f926 && (_0x16f926[_0xfedd8(0xd1)]('input', _0x427062), _0x16f926[_0xfedd8(0xd1)](_0xfedd8(
            0x10e), _0x427062), _0x16f926[_0xfedd8(0xd1)](_0xfedd8(0x234), _0x427062)), _0xc3592f &&
        _0xc3592f[_0xfedd8(0xd1)](_0xfedd8(0x251), _0x596bd7), _0xc3592f && _0xc3592f[_0xfedd8(0xd1)](
            'mouseout', _0x21b416), _0x35f239 && _0x35f239[_0xfedd8(0xd1)](_0xfedd8(0x10e), _0x97088d),
        _0x4f4d6d && _0x4f4d6d[_0xfedd8(0x1f5)](function(_0x8d68f0) {
            const _0x11f4dd = _0xfedd8;
            _0x8d68f0['addEventListener'](_0x11f4dd(0x10e), function() {
                const _0x2a6fb2 =
                    _0x11f4dd;
                var _0x30925e = this[_0x2a6fb2(0x2a4)](_0x2a6fb2(0x1f6));
                _0x1984e5(_0x30925e);
            });
        }), _0x13f957 && _0x13f957[_0xfedd8(0x1f5)](function(
            _0x566937) {
            const _0x4aab8a = _0xfedd8;
            _0x566937[_0x4aab8a(0xd1)](_0x4aab8a(0x10e), function() {
                const _0x528588 = _0x4aab8a;
                var
                    _0xae4bb1 = this[_0x528588(0x2a4)](_0x528588(0x290));
                _0x344825(_0xae4bb1);
            });
        }), _0x17a390 && _0x17a390[_0xfedd8(0xd1)](_0xfedd8(0xfa),
            _0x1f9ad2), _0x57f7b3 && _0x17a390[_0xfedd8(0xd1)]('progress', _0xcb6ef3), _0x564883(),
        _0x4b42dd && _0x344825(_0x4b42dd[_0xfedd8(0x2a4)](_0xfedd8(0x290))), document[
            'addEventListener'](_0xfedd8(0x20f), _0x5c829e);
}
const HTMLvideos = document[_0x37f079(0xad)](_0x37f079(0x134));
HTMLvideos[_0x37f079(0x1f5)](_0x66c80a => {
    const _0x329e4f = _0x37f079;
    _0x66c80a[_0x329e4f(0x16b)](_0x329e4f(0xdc)) && initializeVideoPlayer(_0x66c80a);
});
let youtubePlayer;

function initializeYoutubePlayer(_0x4fe93b) {
    const _0x2c4f27 = _0x37f079,
        _0x54b7c5 = _0x4fe93b[_0x2c4f27(0x16b)](_0x2c4f27(0xdc)),
        _0x8b5075 = _0x54b7c5[_0x2c4f27(0x2a4)](_0x2c4f27(0x254)),
        _0x4bbf4b = _0x54b7c5[_0x2c4f27(0x215)](_0x2c4f27(0xe9)),
        _0x1a28af = _0x54b7c5['querySelector'](_0x2c4f27(0xc7)),
        _0x4e1160 = _0x54b7c5['querySelector'](_0x2c4f27(0x1d0)),
        _0xf77061 = _0x54b7c5[_0x2c4f27(0x215)](_0x2c4f27(0xe5)),
        _0xf53fd3 = _0x54b7c5[_0x2c4f27(0x215)](_0x2c4f27(0x15e)),
        _0x2edcc3 = _0x54b7c5[_0x2c4f27(0x215)]('[f-data-video=\x22forward-button\x22]'),
        _0x3e6d09 = _0x54b7c5['querySelector'](_0x2c4f27(0x182)),
        _0x3d5944 = _0x54b7c5[_0x2c4f27(0x215)](_0x2c4f27(0x248)),
        _0xb96ae0 = _0x54b7c5['querySelector'](_0x2c4f27(0x27e)),
        _0x9163ae = _0x54b7c5[_0x2c4f27(0x215)](_0x2c4f27(0x1e4)),
        _0x18f008 = _0x54b7c5[_0x2c4f27(0x215)](_0x2c4f27(0x8e)),
        _0x1b2086 = _0x54b7c5[_0x2c4f27(0x215)](_0x2c4f27(0xbe)),
        _0x4fda21 = _0x54b7c5[_0x2c4f27(0x215)](_0x2c4f27(0x1e5)),
        _0x253758 = _0x54b7c5['querySelector'](_0x2c4f27(0xd2)),
        _0x24ba63 = _0x54b7c5['querySelector'](_0x2c4f27(0x1f3)),
        _0x157356 = _0x54b7c5[_0x2c4f27(0x215)](_0x2c4f27(0x19f)),
        _0x625987 = _0x54b7c5[_0x2c4f27(0x215)](_0x2c4f27(0xdd)),
        _0x2e434f = _0x54b7c5['querySelector'](_0x2c4f27(0x16d)),
        _0x1a374c = _0x54b7c5[_0x2c4f27(0xad)](_0x2c4f27(0x24d)),
        _0x4bc9bc = _0x54b7c5[_0x2c4f27(0xad)](_0x2c4f27(0x1d3)),
        _0x2c0d66 = _0x54b7c5[_0x2c4f27(0x215)](_0x2c4f27(0x12f)),
        _0x1d89d1 = _0x54b7c5['querySelector'](_0x2c4f27(0x117)),
        _0x3a619d = _0x54b7c5['querySelector'](_0x2c4f27(0x82)) ? _0x54b7c5['querySelector'](_0x2c4f27(
            0x82))[_0x2c4f27(0x2a4)](_0x2c4f27(0x273)) : ![],
        _0x290134 = _0x54b7c5[_0x2c4f27(0x215)](_0x2c4f27(0x1a7)),
        _0x120fd8 = _0x54b7c5[_0x2c4f27(0xad)]('[f-data-video=\x22show-pause\x22]'),
        _0x7110e8 = _0x54b7c5['querySelectorAll'](_0x2c4f27(0x279)),
        _0x56cac0 = _0x4fe93b[_0x2c4f27(0x2a4)](_0x2c4f27(0x204)),
        _0x3c93fb = _0x54b7c5[_0x2c4f27(0xcf)],
        _0x238807 = _0x54b7c5['offsetHeight'],
        _0x547e27 = _0x4fe93b[_0x2c4f27(0x2a4)]('f-data-video-controls') ? 0x0 : 0x1,
        _0x3cbae2 = 0x5,
        _0x18b2f4 = 0x5;
    let _0x267092 = 0x0,
        _0xbd994b = 0x0,
        _0x25c955 = ![],
        _0x540c3c = 0x0,
        _0x4316d5 = _0x2c4f27(0x162),
        _0x5eafb2 = 0x1,
        _0x5ce9d2 = 0x64,
        _0x5c137c = ![];
    const _0x2325fd = _0x54b7c5[_0x2c4f27(0x215)](_0x2c4f27(0xbd)) ? _0x54b7c5[
            'querySelector']('[f-data-video-muted]')[_0x2c4f27(0x2a4)]('f-data-video-muted') !==
        _0x2c4f27(0x1db) : ![],
        _0x4bba76 = _0x54b7c5[_0x2c4f27(0x215)](_0x2c4f27(0x100)) ? _0x54b7c5['querySelector'](
            _0x2c4f27(0x100))['getAttribute'](_0x2c4f27(0x139)) !== _0x2c4f27(0x1db) : ![],
        _0x47a94c = _0x54b7c5[_0x2c4f27(0x215)]('[f-data-video-autoplay]'),
        _0x408d36 = _0x47a94c ? _0x47a94c[_0x2c4f27(0x2a4)]('f-data-video-autoplay') !== _0x2c4f27(
            0x1db) : ![];
    console[_0x2c4f27(0x218)](_0x2325fd, _0x408d36);

    function _0x2f3065() {
        const _0xe3845b = _0x2c4f27,
            _0x33d507 = new YT[(_0xe3845b(0x228))](
                _0x4fe93b, {
                    'width': _0x3c93fb,
                    'height': _0x238807,
                    'videoId': _0x56cac0,
                    'playerVars': {
                        'autoplay': _0x408d36 ?
                            0x1 : 0x0,
                        'mute': _0x2325fd ? 0x1 : 0x0,
                        'loop': _0x4bba76 ? 0x1 : 0x0,
                        'controls': _0x547e27,
                        'disablekb': 0x1,
                        'playsinline': 0x1,
                        'cc_load_policy': 0x1,
                        'cc_lang_pref': 'auto',
                        'rel': 0x0,
                        'showinfo': 0x0,
                        'iv_load_policy': 0x3,
                        'modestbranding': 0x1,
                        'customControls':
                            !![],
                        'noCookie':
                            ![],
                        'enablejsapi': 0x1,
                        'widgetid': 0x1
                    },
                    'events': { 'onReady': _0x1d7273, 'onStateChange': _0x459779 }
                });
        return _0x33d507;
    }
    const
        _0xfe99d7 = _0x2f3065();

    function _0x35df42() {
        const _0x1da9b2 = _0x2c4f27;
        _0xb96ae0 && (_0xb96ae0[_0x1da9b2(0x1d9)][_0x1da9b2(0xb1)] = _0x1da9b2(0x24f)), _0xf53fd3 && (
                _0xf53fd3[_0x1da9b2(0x1d9)][_0x1da9b2(0xb1)] = _0x1da9b2(0x24f)), _0x253758 && (_0x253758[
                _0x1da9b2(0x1d9)][_0x1da9b2(0xb1)] = 'none'), _0x3d5944 && (_0x3d5944[_0x1da9b2(0x1d9)][
                _0x1da9b2(0xb1)
            ] = _0x1da9b2(0x24f)), _0x625987 && (_0xbd994b = _0x625987 ? _0x625987['value'] : 0x1,
                console[_0x1da9b2(0x218)](_0x625987 ? _0x625987['value'] * 0x64 : 0x64)), _0x4fb86c(0x1),
            _0x290134 && (_0x290134[_0x1da9b2(0x1d9)][_0x1da9b2(0xb1)] = _0x1da9b2(0x24f)), _0x120fd8[
                _0x1da9b2(0x1f5)](_0x4bf69e => {
                const _0x4c8608 = _0x1da9b2;
                _0x4bf69e[_0x4c8608(0x297)]['add']('show'), _0x4bf69e['classList']['remove'](_0x4c8608(
                    0x19c));
            }), _0x7110e8[_0x1da9b2(0x1f5)](_0x254244 => {
                const _0x387512 = _0x1da9b2;
                _0x254244[_0x387512(0x297)]['remove'](_0x387512(0x1d2)), _0x254244[_0x387512(0x297)][
                    _0x387512(0x195)
                ](_0x387512(0x19c));
            }), _0x2325fd && (_0x2e434f && (_0x2e434f[_0x1da9b2(0x1d9)][_0x1da9b2(
                0x14a)] = 0.5), _0x625987 && (_0x625987[_0x1da9b2(0xb5)] = 0x0), _0xbd994b = 0x1);
    }

    function _0x32ddda(_0x497123) {
        const _0xa81915 = _0x2c4f27,
            _0x3cfa6e = Math['floor'](_0x497123 / 0x3c)[_0xa81915(0x160)]()[_0xa81915(0x19a)](0x2, '0'),
            _0x3674d5 = Math[_0xa81915(0x1c9)](_0x497123 % 0x3c)[_0xa81915(0x160)]()[_0xa81915(0x19a)](
                0x2, '0');
        return _0x3cfa6e + ':' + _0x3674d5;
    }

    function _0x1d7273(_0x3e6ef9) { _0x35df42(), _0x5dc190(); }

    function _0x5dc190() {
        const _0x1d6c48 = _0x2c4f27;
        _0x540c3c = _0xfe99d7[_0x1d6c48(0xac)](), _0x157356 && (_0x157356[_0x1d6c48(0x11f)] = _0x32ddda(
            _0x540c3c));
    }

    function _0x59a231() {
        const _0xef57f9 = _0x2c4f27;
        _0xf77061 && (_0xf77061[_0xef57f9(0x1d9)][_0xef57f9(0xb1)] = _0xef57f9(0x24f)), _0x9163ae && (
                _0x9163ae['style']['display'] = _0xef57f9(0x24f)), _0xb96ae0 && (_0xb96ae0[_0xef57f9(0x1d9)]
                [_0xef57f9(0xb1)] = ''), _0x1a28af && (_0x1a28af[_0xef57f9(0x1d9)]['display'] = ''),
            _0xf53fd3 && (_0xf53fd3[_0xef57f9(0x1d9)][_0xef57f9(0xb1)] = ''), _0x3d5944 && (_0x3d5944[
                _0xef57f9(0x1d9)][_0xef57f9(0xb1)] = _0xef57f9(0x24f)), _0x4e1160 && (_0x3a619d ===
                _0xef57f9(0x238) ? !_0x5c137c && (_0x4e1160['style'][_0xef57f9(0xb1)] = _0xef57f9(0x24f),
                    _0x5c137c = !![]) : _0x4e1160[_0xef57f9(0x1d9)][_0xef57f9(0xb1)] = _0xef57f9(0x24f)),
            _0x120fd8[_0xef57f9(0x1f5)](_0x578598 => {
                const _0x4f4c50 = _0xef57f9;
                _0x578598[_0x4f4c50(0x297)]['remove'](_0x4f4c50(0x1d2)), _0x578598[_0x4f4c50(0x297)][
                    _0x4f4c50(0x195)
                ](_0x4f4c50(0x19c));
            }), _0x7110e8[_0xef57f9(0x1f5)](_0x4e88b0 => {
                const _0x4d2d12 =
                    _0xef57f9;
                _0x4e88b0['classList'][_0x4d2d12(0x195)](_0x4d2d12(0x1d2)), _0x4e88b0[_0x4d2d12(0x297)][
                    _0x4d2d12(0x1b0)
                ](_0x4d2d12(0x19c));
            });
    }

    function _0x39ccb8() {
        const _0x15c6a9 = _0x2c4f27;
        _0xf77061 && (_0xf77061[_0x15c6a9(0x1d9)]['display'] = ''), _0x9163ae && (_0x9163ae[_0x15c6a9(
                0x1d9)][_0x15c6a9(0xb1)] = ''), _0xb96ae0 && (_0xb96ae0[_0x15c6a9(0x1d9)]['display'] =
                _0x15c6a9(0x24f)), _0xf53fd3 && (_0xf53fd3[_0x15c6a9(0x1d9)]['display'] = 'none'),
            _0x4e1160 && (_0x3a619d ? !_0x5c137c && (_0x4e1160['style'][_0x15c6a9(0xb1)] = '') :
                _0x4e1160['style'][_0x15c6a9(0xb1)] = ''), _0x120fd8[_0x15c6a9(0x1f5)](_0x2c8f57 => {
                const
                    _0x5efeff = _0x15c6a9;
                _0x2c8f57['classList'][_0x5efeff(0x195)](_0x5efeff(0x1d2)), _0x2c8f57[_0x5efeff(0x297)][
                    _0x5efeff(0x1b0)
                ](_0x5efeff(0x19c));
            }), _0x7110e8['forEach'](_0x3ebc4d => {
                const _0x1969ba = _0x15c6a9;
                _0x3ebc4d[_0x1969ba(0x297)]['remove'](_0x1969ba(0x1d2)), _0x3ebc4d[_0x1969ba(0x297)][
                    _0x1969ba(0x195)
                ](_0x1969ba(0x19c));
            });
    }

    function _0x4498a9() {
        const _0x5ed4c4 = _0x2c4f27;
        pauseAllPlayers(), _0xfe99d7[_0x5ed4c4(0xdb)](), $(_0x5ed4c4(0x10a))['remove']();
    }

    function _0x9673c() {
        const _0x190f34 = _0x2c4f27;
        _0xfe99d7[_0x190f34(0x1f8)]();
    }

    function _0x45f050() {
        const _0x1fce99 = _0x2c4f27;
        _0xfe99d7[_0x1fce99(0x18b)](_0x267092 + _0x3cbae2, !![]);
    }

    function _0x1b3056() {
        const _0x5159bd = _0x2c4f27;
        _0xfe99d7[_0x5159bd(0x18b)](_0x267092 - _0x18b2f4, !![]);
    }

    function _0x6e10d9() {
        const _0x429a69 = _0x2c4f27;
        _0x267092 = _0xfe99d7[_0x429a69(0x86)]() + 0x1;
        _0x24ba63 && (_0x24ba63['textContent'] = _0x32ddda(_0x267092));
        _0x157356 && (_0x157356[_0x429a69(0x11f)] = _0x32ddda(_0x540c3c));
        const _0x49f193 = _0x267092 /
            _0x540c3c * 0x64;
        _0x18f008 && (_0x18f008[_0x429a69(0x1d9)][_0x429a69(0xa5)] = _0x49f193 + '%');
    }

    function _0x37cbad(_0x4b4f70) {
        const _0xdc74f2 = _0x2c4f27,
            _0x1c3fa0 = _0xfe99d7[_0xdc74f2(0x1b3)]();
        if (_0x1c3fa0 === YT[_0xdc74f2(0x1a4)][_0xdc74f2(
                0x16e)]) _0x9673c();
        else(_0x1c3fa0 === YT['PlayerState'][_0xdc74f2(0x20e)] || _0x1c3fa0 === YT[_0xdc74f2(0x1a4)][
            _0xdc74f2(0x9c)
        ]) && _0x4498a9();
    }

    function _0x476ee4() {
        const _0x4161ae = _0x2c4f27;
        _0x3d5944 && (_0x3d5944[_0x4161ae(0x1d9)]['display'] = ''), _0x1a28af && (_0x1a28af[_0x4161ae(
            0x1d9)][_0x4161ae(0xb1)] = _0x4161ae(0x24f)), _0x39ccb8(), _0x9673c();
    }

    function _0xecb162(_0x4e8211) {
        const _0x505937 = _0x2c4f27,
            _0x195eb3 = _0x1b2086[_0x505937(0xcf)],
            _0xffa33e = _0x4e8211[_0x505937(0x170)],
            _0x28909a = _0xffa33e / _0x195eb3 * 0x64,
            _0x5bafd6 = _0x28909a / 0x64 * _0x540c3c;
        _0xfe99d7['seekTo'](_0x5bafd6, !![]), _0x6e10d9();
    }
    if (_0x1b2086) {
        _0x25c955 = ![];
        let
            _0x23adee = ![];
        const _0x4d0acd = 0x32;

        function _0x365e02(_0xa8959, _0x1eba15) {
            !_0x23adee && (_0xa8959(), _0x23adee = !![],
                setTimeout(() => { _0x23adee = ![]; }, _0x1eba15));
        }

        function _0x16db77(_0x5cf1ca) {
            const _0x29dab4 = _0x2c4f27;
            _0x5cf1ca[_0x29dab4(0x144)](), _0x25c955 = !![];
            const _0xd49d8e = _0xf7d538 ? _0x5cf1ca[
                _0x29dab4(0x1dc)][0x0] : _0x5cf1ca;
            _0xecb162(_0xd49d8e);
        }

        function _0x1126e9(_0x205fe6) {
            const _0x4f706a = _0x2c4f27;
            _0x205fe6[_0x4f706a(0x144)](), _0x25c955 && _0x365e02(() => {
                const _0x5cdad9 = _0x4f706a,
                    _0x539fb7 = _0xf7d538 ? _0x205fe6[_0x5cdad9(0x1dc)][0x0] : _0x205fe6;
                _0xecb162(_0x539fb7);
            }, _0x4d0acd);
        }

        function _0x1b424e() { _0x25c955 = ![]; }
        const _0xf7d538 = _0x2c4f27(0xc1) in document[
            _0x2c4f27(0x159)];
        _0xf7d538 ? (_0x1b2086[_0x2c4f27(0xd1)]('touchstart', _0x16db77), _0x1b2086[_0x2c4f27(0xd1)](
            _0x2c4f27(0xe2), _0x1126e9), _0x1b2086[_0x2c4f27(0xd1)](_0x2c4f27(0x1a6), _0x1b424e)) : (
            _0x1b2086[_0x2c4f27(0xd1)](_0x2c4f27(0x1ad), _0x16db77), _0x1b2086[_0x2c4f27(0xd1)](
                _0x2c4f27(0x251), _0x1126e9), _0x1b2086[_0x2c4f27(0xd1)](_0x2c4f27(0x12b), _0x1b424e));
    }

    function _0x6c3719() {
        const _0x4d14c1 = _0x2c4f27;
        _0xfe99d7[_0x4d14c1(0x18b)](0x0, !![]), _0x4498a9();
    }

    function _0x20eb9b(_0x15dd03) {
        const _0x4157ad = _0x2c4f27;
        _0xfe99d7[_0x4157ad(0x199)](Number(_0x15dd03)), _0x1d89d1 && (Number(_0x15dd03) === 0x1 ?
            _0x1d89d1['textContent'] = 'Normal' : _0x1d89d1[_0x4157ad(0x11f)] = _0x15dd03 + 'x');
    }

    function _0x3efa8f(_0x5b285d) {
        const _0x52f03d = _0x2c4f27;
        _0x2c0d66 && (_0x2c0d66['textContent'] = _0x4316d5), alert(_0x52f03d(0x8a));
    }

    function _0x4fb86c(_0x21c078) {
        const _0x190f8c = _0x2c4f27;
        _0x2e434f && (_0x21c078 < 0.1 ? _0x2e434f[_0x190f8c(0x1d9)][_0x190f8c(0x14a)] = 0.5 : _0x2e434f[
            _0x190f8c(0x1d9)]['opacity'] = 0x1);
    }

    function _0x2392f8() {
        const _0x3056ae = _0x2c4f27;
        _0xfe99d7['setVolume'](_0x625987[_0x3056ae(0xb5)] * 0x64), _0x4fb86c(_0x625987['value']);
    }

    function _0x5bca95() {
        const _0x200b68 = _0x2c4f27;
        _0x5ce9d2 = _0xfe99d7[_0x200b68(0x1f0)](), _0x625987 && (_0x625987[_0x200b68(0xb5)] > 0x0 ? (
            _0xbd994b = _0x625987[_0x200b68(0xb5)], _0xfe99d7[_0x200b68(0x83)](0x0), _0x625987[
                _0x200b68(0xb5)] = 0x0, _0x2e434f[_0x200b68(0x1d9)][_0x200b68(0x14a)] = 0x1) : (
            _0xfe99d7[_0x200b68(0x83)](_0xbd994b * 0x64), _0x625987['value'] = _0xbd994b, _0x2e434f[
                'style'][_0x200b68(0x14a)] = 0x1, _0xfe99d7[_0x200b68(0x104)]()), _0x625987[_0x200b68(
            0x132)](rangeSlider));
    }

    function _0x35a723() {
        const _0x337f2b = _0x2c4f27;
        alert(_0x337f2b(0xb3));
    }

    function _0x30321c() {
        const _0x33072b = _0x2c4f27;
        alert(_0x33072b(0x1bf));
    }

    function _0x15fa53(_0x4e0aa9) {
        const _0x3d40a5 = _0x2c4f27;
        if (_0x8b5075) {
            const _0x3556af =
                _0x4e0aa9['key'],
                _0x5bebc5 = _0x625987[_0x3d40a5(0xb5)];
            (_0x3556af === '\x20' || _0x3556af === _0x3d40a5(0x299) || _0x3556af === 'ArrowUp') &&
            _0x4e0aa9[_0x3d40a5(0x144)]();
            if (_0xfe99d7 === currentVideo) switch (_0x3556af) {
                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                    const _0x3fac2c = parseInt(_0x3556af) * 0xa,
                        _0x4b7e73 = _0x3fac2c / 0x64 * _0x540c3c;
                    _0xfe99d7[_0x3d40a5(0x18b)](_0x4b7e73, !![]);
                    break;
                case '\x20':
                case 'k':
                    _0xfe99d7[_0x3d40a5(0x1b3)]() === YT[_0x3d40a5(0x1a4)][_0x3d40a5(0x20e)] ? _0x4498a9() :
                        _0x9673c();
                    break;
                case _0x3d40a5(0x163):
                    _0x1b3056();
                    break;
                case _0x3d40a5(0x92):
                    _0x45f050();
                    break;
                case _0x3d40a5(0x12a):
                    _0x625987 && (_0x625987[_0x3d40a5(0xb5)] = Number(_0x5bebc5) + 0.1, _0x2392f8());
                    break;
                case _0x3d40a5(0x299):
                    _0x625987 && (_0x625987[_0x3d40a5(0xb5)] = Number(_0x5bebc5) - 0.1, _0x2392f8());
                    break;
                case 'm':
                    _0x5bca95();
                    break;
                case 'f':
                    alert(_0x3d40a5(0xb3));
                    break;
                case 'l':
                    alert('Loop\x20mode\x20is\x20not\x20supported\x20for\x20YouTube\x20videos.');
                    break;
                default:
                    break;
            }
        }
    }
    _0x4bbf4b && _0x4bbf4b[_0x2c4f27(0xd1)](_0x2c4f27(0x10e), _0x37cbad);
    _0xf77061 && _0xf77061[_0x2c4f27(0xd1)](_0x2c4f27(0x10e), _0x4498a9);
    _0xf53fd3 && _0xf53fd3[_0x2c4f27(0xd1)]('click', _0x9673c);
    _0x2edcc3 && _0x2edcc3['addEventListener'](_0x2c4f27(0x10e), _0x45f050);
    _0x3e6d09 && _0x3e6d09['addEventListener'](_0x2c4f27(0x10e), _0x1b3056);
    _0x1b2086 && _0x1b2086[_0x2c4f27(0xd1)](_0x2c4f27(0x10e), _0xecb162);
    _0x625987 && (_0x625987[_0x2c4f27(0xd1)](_0x2c4f27(0x1b7), _0x2392f8), _0x625987[_0x2c4f27(0xd1)](
        'touchstart', _0x2392f8));
    _0x3d5944 && _0x3d5944[_0x2c4f27(0xd1)]('click', _0x6c3719);
    _0x2e434f && _0x2e434f['addEventListener'](_0x2c4f27(0x10e), _0x5bca95);
    _0x4fda21 && _0x4fda21[_0x2c4f27(0xd1)](_0x2c4f27(0x10e), _0x35a723);
    _0x1a374c && _0x1a374c[_0x2c4f27(0x1f5)](function(_0x359d8f) {
        const _0xff6250 = _0x2c4f27;
        _0x359d8f[_0xff6250(0xd1)](_0xff6250(0x10e), function() {
            const _0x3bb490 = _0xff6250;
            _0x5eafb2 = this['getAttribute'](_0x3bb490(0x1f6)), _0x20eb9b(_0x5eafb2);
        });
    });
    _0x4bc9bc && _0x4bc9bc[_0x2c4f27(0x1f5)](function(_0x5a2869) {
        _0x5a2869['addEventListener'](
            'click',
            function() {
                const _0x25a1a9 = _0x31ef;
                _0x4316d5 = this['getAttribute'](_0x25a1a9(0x290)), _0x3efa8f(_0x4316d5);
            });
    });
    document[_0x2c4f27(0xd1)]('keydown', _0x15fa53);

    function _0x459779(_0xdf0722) {
        const _0x155774 = _0x2c4f27;
        if (_0xdf0722[_0x155774(0x1b1)] ===
            YT[_0x155774(0x1a4)][_0x155774(0x16e)]) currentVideo && currentVideo !== _0xfe99d7 &&
            currentVideo['pauseVideo'](), currentVideo = _0xfe99d7, _0x59a231(), setInterval(_0x6e10d9,
                0x64), _0x290134 && (_0x290134['style'][_0x155774(0xb1)] = _0x155774(0x24f));
        else {
            if (_0xdf0722[_0x155774(0x1b1)] === YT[_0x155774(0x1a4)][_0x155774(0x20e)]) _0x39ccb8(),
                clearInterval(_0x6e10d9);
            else {
                if (_0xdf0722[_0x155774(0x1b1)] === YT['PlayerState'][_0x155774(0xd9)]) _0x476ee4(),
                    _0x9673c(), clearInterval(_0x6e10d9);
                else _0xdf0722[_0x155774(0x1b1)] === YT[_0x155774(0x1a4)][_0x155774(0x9b)] && (_0x290134 &&
                    (_0x290134[_0x155774(0x1d9)][_0x155774(0xb1)] = ''));
            }
        }
    }
    _0x35df42(), _0x2f3065();
}
const players = [],
    YTvideos = document[_0x37f079(0xad)](_0x37f079(0x29b));
window['onYouTubeIframeAPIReady'] = function() {
    YTvideos['forEach'](_0x41684f => {
        const
            _0x2e09be = initializeYoutubePlayer(_0x41684f);
        players['push'](_0x2e09be);
    });
};

function initializeVimeoPlayer(_0x4b9e7c) {
    const _0x147118 = _0x37f079,
        _0x1b4f6b = _0x4b9e7c['closest'](_0x147118(0xdc)),
        _0x4fa0ca = _0x1b4f6b[_0x147118(0x2a4)](_0x147118(0x254)),
        _0x51745f = _0x1b4f6b[_0x147118(0x215)](_0x147118(0x278)),
        _0x5a0f8d = _0x1b4f6b[_0x147118(0x215)](_0x147118(0xe9)),
        _0xd967a7 = _0x1b4f6b[_0x147118(0x215)](_0x147118(0xc7)),
        _0x462dd6 = _0x1b4f6b[_0x147118(0x215)](_0x147118(0x1d0)),
        _0xe382c9 = _0x1b4f6b[_0x147118(0x215)](_0x147118(0xe5)),
        _0x2febef = _0x1b4f6b['querySelector'](_0x147118(0x15e)),
        _0x12a31b = _0x1b4f6b['querySelector'](_0x147118(0x239)),
        _0x398060 = _0x1b4f6b[_0x147118(0x215)](_0x147118(0x182)),
        _0x1ce6f2 = _0x1b4f6b[_0x147118(0x215)]('[f-data-video=\x22replay-button\x22]'),
        _0x1b9510 = _0x1b4f6b['querySelector'](_0x147118(0x27e)),
        _0x92bda = _0x1b4f6b[_0x147118(0x215)]('[f-data-video=\x22play-icon\x22]'),
        _0x5b1056 = _0x1b4f6b['querySelector']('[f-data-video=\x22progress\x22]'),
        _0x26f825 = _0x1b4f6b[_0x147118(0x215)](_0x147118(0xbe)),
        _0x44943d = _0x1b4f6b['querySelector'](_0x147118(0x198)),
        _0x32e0c1 = _0x1b4f6b[_0x147118(0x215)](_0x147118(0x1e5)),
        _0x597f99 = _0x1b4f6b[_0x147118(0x215)](_0x147118(0xd2)),
        _0x30f55a = _0x1b4f6b[_0x147118(0x215)](_0x147118(0x1f3)),
        _0x17486f = _0x1b4f6b[_0x147118(0x215)](_0x147118(0x19f)),
        _0x8bb02f = _0x1b4f6b[_0x147118(0x215)](_0x147118(0xdd)),
        _0x563672 = _0x1b4f6b[_0x147118(0x215)](_0x147118(0x16d)),
        _0x1328fc = _0x1b4f6b[_0x147118(0xad)](_0x147118(0x9a)),
        _0x3d3d07 = _0x1b4f6b[_0x147118(0xad)](_0x147118(0x24d)),
        _0x3a93cd = _0x1b4f6b[_0x147118(0xad)](_0x147118(0x1d3)),
        _0xd1ec22 = _0x1b4f6b[_0x147118(0x215)]('[f-data-video=\x22quality-text\x22]'),
        _0x3d16c4 = _0x1b4f6b['querySelector']('[f-data-video=\x22speed-text\x22]'),
        _0x5d10b7 = _0x1b4f6b[_0x147118(0x215)](_0x147118(0xf9)),
        _0x56fa1f = _0x1b4f6b['querySelector'](_0x147118(0xae)),
        _0x1ea2a9 = _0x1b4f6b[_0x147118(0x215)]('[f-data-video=\x22caption-lang\x22]'),
        _0x367226 = _0x1b4f6b[_0x147118(0x215)]('[f-data-poster-once]') ? _0x1b4f6b[_0x147118(0x215)](
            _0x147118(0x82))['getAttribute'](_0x147118(0x273)) : ![],
        _0x233104 = _0x1b4f6b[_0x147118(0x215)](_0x147118(0x1a7)),
        _0x3b00d6 = _0x1b4f6b['querySelectorAll'](_0x147118(0xb7)),
        _0x451866 = _0x1b4f6b[_0x147118(0xad)]('[f-data-video=\x22show-play\x22]'),
        _0xe6aacf = _0x4b9e7c[_0x147118(0x2a4)]('f-data-video-id'),
        _0x1efb03 = _0x1b4f6b[_0x147118(0xcf)],
        _0x5266d2 = _0x1b4f6b['offsetHeight'],
        _0x589d55 = _0x1b4f6b[_0x147118(0x215)](_0x147118(0xbd)) ? _0x1b4f6b['querySelector'](_0x147118(
            0xbd))['getAttribute'](_0x147118(0x1ae)) !== 'false' : ![],
        _0x37dc0d = _0x1b4f6b[_0x147118(0x215)](_0x147118(0x100)) ? _0x1b4f6b['querySelector'](
            _0x147118(0x100))[_0x147118(0x2a4)]('f-data-video-loop') !== 'false' : ![],
        _0x3e29ef = _0x1b4f6b[_0x147118(0x215)](_0x147118(0x225)),
        _0x453e8f = _0x3e29ef ? _0x3e29ef[_0x147118(0x2a4)]('f-data-video-autoplay') !== _0x147118(
            0x1db) : ![],
        _0x40e1b0 = _0x1b4f6b[_0x147118(0x215)]('[f-data-video-autoplay-scroll]') ? _0x1b4f6b[_0x147118(
            0x215)](_0x147118(0x186))[_0x147118(0x2a4)](_0x147118(0x1a5)) !== 'false' : ![],
        _0xfe290e = _0x4b9e7c[_0x147118(0x2a4)](_0x147118(0x1a2)),
        _0x433a9d = 0x5,
        _0x2f1349 = 0x5;
    var _0x364ad9 = 0x0;
    let _0x35b12e = ![],
        _0x4d6755 = 0x1;
    var _0x5ac6aa = 0x0,
        _0x1eb9fd = 0x0,
        _0x1c8054 = _0x147118(0x162),
        _0x4eba83 = 0x1;
    let _0x334086 = 'en';
    var
        _0x4654b3 = {
            'id': _0xe6aacf,
            'width': _0x1efb03,
            'height': _0x5266d2,
            'controls': _0xfe290e,
            'texttrack': 'en',
            'muted': _0x589d55 ?
                0x1 : 0x0,
            'loop': _0x37dc0d ? 0x1 : 0x0,
            'autoplay': _0x453e8f ? 0x1 : 0x0,
            'autopause': 0x0
        };
    let _0x176110 = ![];
    var _0xf74c18 = new Vimeo[(_0x147118(0x228))](
        _0x4b9e7c, _0x4654b3);
    const _0x623e45 = {
            'root': null,
            'rootMargin': _0x147118(
                0x21d),
            'threshold': 0.5
        },
        _0x46b0f0 = new IntersectionObserver(_0x2bd252, _0x623e45);

    function _0x2bd252(_0xb22347) {
        const _0x179e32 = _0xb22347[0x0];
        _0x179e32['isIntersecting'] ? _0xfb1962() : _0x39aab6();
    }
    _0x40e1b0 && _0x46b0f0[_0x147118(
        0x246)](_0x4b9e7c);

    function _0x4dd8a4() {
        const _0x38d496 = _0x147118;
        _0xf74c18[_0x38d496(0x1bb)](), _0x3b00d6[_0x38d496(0x1f5)](_0x3f0ade => {
                const _0x4dfe48 =
                    _0x38d496;
                _0x3f0ade['classList'][_0x4dfe48(0x195)](_0x4dfe48(0x1d2)), _0x3f0ade['classList'][
                    'remove'
                ]('hide');
            }), _0x451866['forEach'](_0x108bba => {
                const _0x171b96 = _0x38d496;
                _0x108bba['classList'][_0x171b96(0x1b0)](_0x171b96(0x1d2)), _0x108bba['classList'][
                    _0x171b96(0x195)
                ](_0x171b96(0x19c));
            }), _0x1b9510 && (_0x1b9510[_0x38d496(0x1d9)]['display'] = 'none'),
            _0x2febef && (_0x2febef[_0x38d496(0x1d9)]['display'] = _0x38d496(0x24f)), _0x597f99 && (
                _0x597f99[_0x38d496(0x1d9)][_0x38d496(0xb1)] = _0x38d496(0x24f)), _0x1ce6f2 && (_0x1ce6f2[
                _0x38d496(0x1d9)][_0x38d496(0xb1)] = _0x38d496(0x24f)), _0xf74c18['volume'] = _0x8bb02f ?
            _0x8bb02f[_0x38d496(0xb5)] : 0x1, _0x4d6755 = _0x8bb02f ? _0x8bb02f[_0x38d496(0xb5)] : 0x1,
            _0xf74c18[_0x38d496(0xac)]()[_0x38d496(0x8d)](function(_0x3536b2) {
                const _0x1bace9 =
                    _0x38d496;
                _0x364ad9 = _0x44830f(_0x3536b2), _0x5ac6aa = _0x3536b2, _0x17486f && (_0x17486f[
                    _0x1bace9(0x11f)] = _0x364ad9);
            }), _0x453e8f && _0x22edd2(), _0x589d55 && _0x563672 &&
            _0x8bb02f && (_0x8bb02f['value'] = 0x0, _0x563672[_0x38d496(0x1d9)][_0x38d496(0x14a)] = 0.5,
                _0x8bb02f[_0x38d496(0xb5)] = 0x0, _0x4d6755 = 0x1), _0x233104 && (_0x233104[_0x38d496(
                0x1d9)][_0x38d496(0xb1)] = 'none'), _0x1328fc && _0xf74c18[_0x38d496(0x262)]()[_0x38d496(
                0x8d)](_0x4889e7 => {
                _0x1328fc['forEach'](_0x48b534 => {
                    const _0x5b83fd = _0x31ef;
                    _0x48b534[_0x5b83fd(0x11f)] = _0x4889e7;
                });
            }), _0x44943d && (_0x44943d[_0x38d496(0x1d9)]
                [_0x38d496(0xa5)] = '0%'), _0x5b1056 && (_0x44943d && (_0x44943d['style'][_0x38d496(0xa5)] =
                '0%')), _0x5d10b7 && (_0x5d10b7[_0x38d496(0x1d9)]['display'] = _0x38d496(
                0x24f));
    }
    _0xf74c18[_0x147118(0x127)]()['then'](function(_0xd9e661) {
        const _0x780abe =
            _0x147118;
        if (_0xd9e661[_0x780abe(0x280)] > 0x0) {
            var _0x2d0cbd = _0x1b4f6b[_0x780abe(
                    0x215)](_0x780abe(0x250)),
                _0x248645 = _0x1b4f6b[_0x780abe(0x215)](_0x780abe(0x149));
            _0xd9e661['forEach'](function(_0x21c271) {
                const _0x2e31c4 = _0x780abe;
                if (
                    _0x2d0cbd) {
                    var _0x368565 = _0x2d0cbd['cloneNode'](!![]);
                    _0x368565[_0x2e31c4(0x110)](_0x2e31c4(0x20a), _0x21c271[_0x2e31c4(0x244)]),
                        _0x368565[_0x2e31c4(0x11f)] = _0x21c271[_0x2e31c4(0xf4)], _0x248645[_0x2e31c4(
                            0x143)](_0x368565);
                    let _0x91d0c9 = _0x1b4f6b[_0x2e31c4(0xad)](_0x2e31c4(
                        0x250));
                    _0x91d0c9['forEach'](_0x2bc5e9 => {
                        const _0x508917 = _0x2e31c4;
                        _0x2bc5e9[_0x508917(0xd1)](_0x508917(0x10e), function() {
                            const _0x566380 =
                                _0x508917,
                                _0xb5a44d = this[_0x566380(0x2a4)](_0x566380(0x20a));
                            _0xb5a44d !== _0x566380(0x24f) ? (_0x334086 = _0xb5a44d,
                                _0x8d51b6()) : _0x44cd70();
                        });
                    });
                }
            });
        }
    });

    function _0x44cd70() {
        const _0x334134 = _0x147118;
        _0xf74c18[_0x334134(0x1bb)]()[_0x334134(0x8d)](function() {
            const _0x204eaf = _0x334134;
            _0x5d10b7 && (_0x5d10b7['style']['display'] = _0x204eaf(0x24f)), _0x56fa1f && (_0x56fa1f[
                _0x204eaf(0x1d9)]['display'] = ''), _0x1ea2a9['textContent'] = _0x204eaf(0x129);
        });
    }

    function _0x8d51b6() {
        const _0x389527 = _0x147118;
        _0xf74c18[_0x389527(0x14e)](_0x334086)[_0x389527(0x8d)](function(_0x487623) {
            const _0x4c1479 =
                _0x389527;
            _0x5d10b7 && (_0x5d10b7[_0x4c1479(0x1d9)][_0x4c1479(0xb1)] = ''), _0x56fa1f && (_0x56fa1f[
                    _0x4c1479(0x1d9)][_0x4c1479(0xb1)] = _0x4c1479(0x24f)), _0x1ea2a9[_0x4c1479(0x11f)] =
                _0x3f2f0a(_0x334086);
        });
    }

    function _0x3f2f0a(_0x1509b7) {
        const _0x354d5b = _0x147118;
        if (typeof _0x1509b7 !== _0x354d5b(
                0x168)) return _0x1509b7;
        return _0x1509b7['charAt'](0x0)['toUpperCase']() + _0x1509b7[
            _0x354d5b(0x140)](0x1);
    }

    function _0x44830f(_0x50f408) {
        const _0x22783d = _0x147118,
            _0xfa73b7 = Math['floor'](_0x50f408 / 0x3c)['toString']()[_0x22783d(0x19a)](0x2, '0'),
            _0x1b544d = Math[_0x22783d(0x1c9)](_0x50f408 % 0x3c)[_0x22783d(0x160)]()['padStart'](0x2,
                '0');
        return _0xfa73b7 + ':' + _0x1b544d;
    }

    function _0x22edd2() {
        const _0x38b2d3 = _0x147118;
        _0xe382c9 && (_0xe382c9['style'][_0x38b2d3(0xb1)] = _0x38b2d3(0x24f)), _0x92bda && (_0x92bda[
                _0x38b2d3(0x1d9)][_0x38b2d3(0xb1)] = _0x38b2d3(0x24f)), _0x1b9510 && (_0x1b9510[_0x38b2d3(
                0x1d9)][_0x38b2d3(0xb1)] = 'none', _0x1b9510[_0x38b2d3(0x1d9)][_0x38b2d3(0xb1)] = ''),
            _0x2febef && (_0x2febef['style'][_0x38b2d3(0xb1)] = _0x38b2d3(0x24f), _0x2febef['style'][
                _0x38b2d3(0xb1)
            ] = ''), _0x1ce6f2 && (_0x1ce6f2[_0x38b2d3(0x1d9)]['display'] = _0x38b2d3(0x24f)),
            _0x462dd6 && (_0x367226 === _0x38b2d3(0x238) ? !_0x176110 && (_0x462dd6['style'][_0x38b2d3(
                0xb1)] = _0x38b2d3(0x24f), _0x176110 = !![]) : _0x462dd6[_0x38b2d3(0x1d9)][_0x38b2d3(
                0xb1)] = _0x38b2d3(0x24f)), _0x3b00d6[_0x38b2d3(0x1f5)](_0x581931 => {
                const _0x18abf4 =
                    _0x38b2d3;
                _0x581931[_0x18abf4(0x297)][_0x18abf4(0x1b0)](_0x18abf4(0x1d2)), _0x581931[_0x18abf4(
                    0x297)]['add'](_0x18abf4(0x19c));
            }), _0x451866[_0x38b2d3(0x1f5)](_0x25a750 => {
                const
                    _0x5569e2 = _0x38b2d3;
                _0x25a750[_0x5569e2(0x297)][_0x5569e2(0x195)](_0x5569e2(0x1d2)), _0x25a750[_0x5569e2(
                    0x297)][_0x5569e2(0x1b0)](_0x5569e2(0x19c));
            });
    }

    function _0x27a853() {
        const _0x48fd2e = _0x147118;
        _0xe382c9 && (_0xe382c9[_0x48fd2e(0x1d9)][_0x48fd2e(0xb1)] = ''), _0x92bda && (_0x92bda[
            _0x48fd2e(0x1d9)][_0x48fd2e(0xb1)] = ''), _0x1b9510 && (_0x1b9510[_0x48fd2e(0x1d9)][
            _0x48fd2e(0xb1)
        ] = _0x48fd2e(0x24f)), _0x2febef && (_0x2febef[_0x48fd2e(0x1d9)][_0x48fd2e(0xb1)] = _0x48fd2e(
            0x24f)), _0x462dd6 && (_0x367226 ? !_0x176110 && (_0x462dd6[_0x48fd2e(0x1d9)][_0x48fd2e(
            0xb1)] = '') : _0x462dd6['style']['display'] = ''), _0x3b00d6[_0x48fd2e(0x1f5)](
            _0x27cd40 => {
                const _0x4d1aca = _0x48fd2e;
                _0x27cd40['classList'][_0x4d1aca(0x195)]('show'), _0x27cd40[_0x4d1aca(0x297)][_0x4d1aca(
                    0x1b0)](_0x4d1aca(0x19c));
            }), _0x451866[_0x48fd2e(0x1f5)](_0x43baff => {
            const
                _0x1466e3 = _0x48fd2e;
            _0x43baff[_0x1466e3(0x297)]['remove']('show'), _0x43baff[_0x1466e3(0x297)][_0x1466e3(
                0x195)](_0x1466e3(0x19c));
        });
    }

    function _0xfb1962() {
        const _0x44ad0a = _0x147118;
        pauseAllPlayers(), _0xf74c18[_0x44ad0a(0xfc)](), _0x22edd2(), currentVideo = _0xf74c18;
    }

    function _0x39aab6() {
        const _0x68a782 = _0x147118;
        _0xf74c18[_0x68a782(0x28c)](), _0x27a853();
    }

    function _0xd190ed() {
        const _0x10f03b = _0x147118;
        _0xf74c18['getPaused']()[_0x10f03b(0x8d)](_0x2069e8 => {
            _0x2069e8 ? _0xfb1962() :
                _0x39aab6();
        });
    }

    function _0x1c503a() {
        const _0x2eba7c = _0x147118;
        _0xf74c18[_0x2eba7c(0x86)]()[_0x2eba7c(0x8d)](_0x1932c3 => {
            const _0x4b8852 = _0x2eba7c;
            _0xf74c18[_0x4b8852(0x1c0)](_0x1932c3 + _0x433a9d);
        });
    }

    function _0x5b6c39() {
        const _0x2f4303 = _0x147118;
        _0xf74c18[_0x2f4303(0x86)]()['then'](_0x7c6893 => {
            _0xf74c18['setCurrentTime'](_0x7c6893 -
                _0x2f1349);
        });
    }

    function _0xc3004c(_0x12ecf5) {
        const _0x2a7372 = _0x147118;
        _0x30f55a && (_0x30f55a[_0x2a7372(0x11f)] = _0x44830f(_0x12ecf5[_0x2a7372(0x1da)] + 0x1)),
            _0x1eb9fd = _0x12ecf5[_0x2a7372(0x25f)] * 0x64 + '%', _0x5b1056 && (_0x5b1056[_0x2a7372(
                0x1d9)][_0x2a7372(0xa5)] = _0x1eb9fd);
    }

    function _0x5ca60f() {
        const _0x4cad6f = _0x147118;
        _0x27a853(), _0x1ce6f2[_0x4cad6f(0x1d9)][_0x4cad6f(0xb1)] = '';
    }

    function _0x4e8659(_0x13f607) {
        const _0x527d57 = _0x147118,
            _0x786f85 = _0x26f825[_0x527d57(0xcf)],
            _0x31cd31 = _0x13f607[_0x527d57(0x170)],
            _0x1bb55d = _0x31cd31 / _0x786f85 * 0x64;
        if (_0x1bb55d <= 0x64) {
            _0x5b1056['style'][
                _0x527d57(0xa5)
            ] = _0x1bb55d + '%';
            const _0x5394d8 = _0x1bb55d / 0x64 * _0x5ac6aa;
            _0xf74c18[_0x527d57(0x1c0)](_0x5394d8);
        }
    }
    _0xf74c18['on']('bufferstart', function() {
        const
            _0x5405cb = _0x147118;
        _0x233104 && (_0x233104['style']['display'] = ''), _0x5a0f8d && (_0x5a0f8d[_0x5405cb(0x1d9)]
            [_0x5405cb(0xb1)] = _0x5405cb(0x24f));
    }), _0xf74c18['on'](_0x147118(0xe1),
        function() {
            const _0x3c97b5 = _0x147118;
            _0x233104 && (_0x233104[_0x3c97b5(0x1d9)][_0x3c97b5(0xb1)] = _0x3c97b5(0x24f)), _0x5a0f8d &&
                (_0x5a0f8d[_0x3c97b5(0x1d9)][_0x3c97b5(0xb1)] = '');
        });
    if (_0x26f825) {
        function _0x15edce(_0x52b540) {
            const _0x3b6c3e = _0x147118;
            _0x52b540['preventDefault'](), _0x35b12e = !![];
            const _0x3e6342 = _0x2a7c4a ? _0x52b540[
                _0x3b6c3e(0x1dc)][0x0] : _0x52b540;
            _0x4e8659(_0x3e6342);
        }

        function _0x568a2(_0x440929) {
            const _0x2d36f2 = _0x147118;
            _0x440929[_0x2d36f2(0x144)]();
            if (_0x35b12e) {
                const _0x26cb73 = _0x2a7c4a ? _0x440929[
                    _0x2d36f2(0x1dc)][0x0] : _0x440929;
                _0x4e8659(_0x26cb73);
            }
        }
        _0xf74c18['on'](_0x147118(0x22b), function(_0x5f0f8b) {
            const
                _0x2b6a74 = _0x147118;
            if (_0x5ac6aa > 0x0) {
                const _0x3a7614 = _0x5f0f8b['seconds'] /
                    _0x5f0f8b[_0x2b6a74(0x207)] * 0x64;
                _0x44943d && (_0x44943d[_0x2b6a74(0x1d9)]['width'] = _0x3a7614 + '%');
            }
        });
        const
            _0x7eef56 = () => { _0x35b12e = ![]; },
            _0x2a7c4a = _0x147118(0xc1) in document[_0x147118(0x159)];
        _0x2a7c4a ? (_0x26f825[_0x147118(0xd1)](_0x147118(0x234), _0x15edce), _0x26f825[_0x147118(0xd1)]
            (_0x147118(0xe2), _0x568a2), _0x26f825[_0x147118(0xd1)](_0x147118(0x1a6), _0x7eef56)) : (
            _0x26f825['addEventListener'](_0x147118(0x1ad), _0x15edce), _0x1b4f6b[_0x147118(0xd1)](
                'mousemove', _0x568a2), _0x1b4f6b[_0x147118(0xd1)](_0x147118(0x12b), _0x7eef56));
    }

    function _0x46ab21() { _0xf74c18['setCurrentTime'](0x0), _0xfb1962(); }

    function _0x1909af(_0x5a56cc) {
        const _0x474198 = _0x147118;
        _0xf74c18[_0x474198(0x199)](_0x5a56cc), _0x3d16c4 && (Number(_0x5a56cc) === 0x1 ? _0x3d16c4[
            _0x474198(0x11f)] = _0x474198(0x281) : _0x3d16c4[_0x474198(0x11f)] = _0x5a56cc + 'x');
    }

    function _0x111189(_0x1f7958) {
        const _0x181a00 = _0x147118;
        _0xf74c18[_0x181a00(0x120)]()[_0x181a00(0x8d)](_0x3ca389 => {
            const _0xa30701 = _0x181a00,
                _0x404086 = _0x3ca389[_0xa30701(0x268)](_0x5359f6 => {
                    return _0x5359f6 ===
                        _0x1f7958;
                });
            _0xd1ec22 && (_0xd1ec22[_0xa30701(0x11f)] = _0x1c8054), _0x404086 ? _0xf74c18[
                'setQuality'](_0x1f7958)[_0xa30701(0x8d)](() => {}) : alert(
                'Changing\x20video\x20quality\x20is\x20not\x20enabled\x20for\x20this\x20video.');
        });
    }

    function _0x10e516() {
        const _0xa82b7e = _0x147118;
        _0x8bb02f && (_0xf74c18[_0xa82b7e(0x83)](_0x8bb02f[_0xa82b7e(0xb5)]), _0xf74c18[_0xa82b7e(
            0x1f0)]()[_0xa82b7e(0x8d)](_0x2c6d0d => {
            const _0x703eb9 = _0xa82b7e;
            _0x2c6d0d < 0.01 ? _0x563672[_0x703eb9(0x1d9)][_0x703eb9(0x14a)] = 0.5 : (_0x4d6755 =
                _0x2c6d0d, _0x563672[_0x703eb9(0x1d9)][_0x703eb9(0x14a)] = 0x1);
        }));
    }

    function _0x38e0e0() {
        const _0x39c855 = _0x147118;
        _0x8bb02f[_0x39c855(0xb5)] > 0x0 ? (_0x4d6755 = _0x8bb02f[_0x39c855(0xb5)], _0xf74c18[
            'setVolume'](0x0), _0x8bb02f[_0x39c855(0xb5)] = 0x0, _0x563672['style'][_0x39c855(
            0x14a)] = 0.5) : (_0xf74c18['setVolume'](_0x4d6755), _0x8bb02f[_0x39c855(0xb5)] = _0x4d6755,
            _0x563672['style']['opacity'] = 0x1);
    }

    function _0x53b4d5() {
        _0xf74c18['getFullscreen']()['then'](_0x38f349 => {
            const _0x3d9498 =
                _0x31ef;
            _0x38f349 ? _0xf74c18[_0x3d9498(0xbb)]() : _0xf74c18[_0x3d9498(0xfe)]();
        });
    }

    function _0xf615b7() {
        const _0x410074 = _0x147118;
        _0xf74c18[_0x410074(0x24e)]()['then'](_0x3cebae => { _0xf74c18['setLoop'](_0x3cebae); });
    }

    function _0xd65928(_0x3df0df) {
        const _0x38986c = _0x147118;
        if (_0x4fa0ca) {
            const _0x144c13 =
                _0x3df0df[_0x38986c(0x150)];
            (_0x144c13 === '\x20' || _0x144c13 === _0x38986c(0x299) || _0x144c13 === 'ArrowUp') &&
            _0x3df0df[_0x38986c(0x144)]();
            if (currentVideo === _0xf74c18) switch (_0x144c13) {
                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                    const _0x24139c = parseInt(_0x144c13) * 0xa,
                        _0x53d272 = _0x24139c / 0x64 * _0x5ac6aa;
                    _0xf74c18['setCurrentTime'](_0x53d272);
                    break;
                case '\x20':
                case 'k':
                    _0xf74c18[_0x38986c(0xbc)]()[_0x38986c(0x8d)](_0x2a8555 => {
                        _0x2a8555 ? _0xfb1962() :
                            _0x39aab6();
                    });
                    break;
                case _0x38986c(0x163):
                    _0x5b6c39();
                    break;
                case _0x38986c(0x92):
                    _0x1c503a();
                    break;
                case 'ArrowUp':
                    _0x8bb02f && (_0x8bb02f[_0x38986c(0xb5)] = Number(_0x8bb02f[_0x38986c(0xb5)]) + 0.1,
                        _0x10e516());
                    break;
                case _0x38986c(0x299):
                    _0x8bb02f && (_0x8bb02f[_0x38986c(0xb5)] = _0x8bb02f[_0x38986c(0xb5)] - 0.1,
                        _0x10e516());
                    break;
                case 'm':
                    _0x38e0e0();
                    break;
                case 'f':
                    _0x53b4d5();
                    break;
                case 'l':
                    _0xf615b7();
                    break;
                default:
                    break;
            }
        }
    }
    _0x5d10b7 && _0x5d10b7[_0x147118(0xd1)](_0x147118(0x10e), _0x44cd70),
        _0x56fa1f && _0x56fa1f['addEventListener'](_0x147118(0x10e), _0x8d51b6), _0x5a0f8d && _0x5a0f8d[
            'addEventListener'](_0x147118(0x10e), _0xd190ed), _0xe382c9 && _0xe382c9[_0x147118(0xd1)](
            'click', _0xfb1962), _0x2febef && _0x2febef['addEventListener'](_0x147118(0x10e), _0x39aab6),
        _0x12a31b && _0x12a31b[_0x147118(0xd1)](_0x147118(0x10e), _0x1c503a), _0x398060 && _0x398060[
            _0x147118(0xd1)](_0x147118(0x10e), _0x5b6c39), _0x26f825 && _0x26f825[_0x147118(0xd1)](
            _0x147118(0x10e), _0x4e8659), _0x8bb02f && (_0x8bb02f['addEventListener'](_0x147118(0x1b7),
            _0x10e516), _0x8bb02f[_0x147118(0xd1)](_0x147118(0x234), _0x10e516)), _0x1ce6f2 && _0x1ce6f2[
            'addEventListener']('click', _0x46ab21), _0x563672 && _0x563672[_0x147118(0xd1)](_0x147118(
            0x10e), _0x38e0e0), _0x32e0c1 && _0x32e0c1[_0x147118(0xd1)]('click', _0x53b4d5), _0x3d3d07 &&
        _0x3d3d07['forEach'](function(_0x3b0719) {
            const _0xd3dc85 = _0x147118;
            _0x3b0719[_0xd3dc85(0xd1)](_0xd3dc85(0x10e), function() {
                const _0x5558cd = _0xd3dc85;
                _0x4eba83 = this[_0x5558cd(0x2a4)](_0x5558cd(0x1f6)), _0x1909af(_0x4eba83);
            });
        }),
        _0x3a93cd && _0x3a93cd[_0x147118(0x1f5)](function(_0x1ae2c8) {
            const _0x56a579 = _0x147118;
            _0x1ae2c8[_0x56a579(0xd1)](_0x56a579(0x10e), function() {
                const _0x299897 = _0x56a579;
                _0x1c8054 = this['getAttribute'](_0x299897(0x290)), _0x111189(_0x1c8054);
            });
        }), document[
            'addEventListener'](_0x147118(0x20f), _0xd65928), _0xf74c18['on'](_0x147118(0xfa), _0xc3004c),
        _0xf74c18['on'](_0x147118(0x263), _0x5ca60f), _0xf74c18['on']('loaded', function() {
            const
                _0x2f758c = _0x147118,
                _0x12e1d8 = $(_0x2f758c(0x1a3))['find'](_0x2f758c(0x292));
            _0x51745f && _0x12e1d8[_0x2f758c(0x97)](_0x51745f[_0x2f758c(0x2a4)](_0x2f758c(0x226)));
        }),
        _0x4dd8a4();
}
const Vvideos = document[_0x37f079(0xad)](_0x37f079(0x1a3));
vimeoScript[_0x37f079(0x15c)] = function() {
    const _0x45b63a = _0x37f079;
    Vvideos[_0x45b63a(0x280)] > 0x0 && Vvideos[_0x45b63a(0x1f5)](
        _0x367970 => { initializeVimeoPlayer(_0x367970); });
};
let fill = ![],
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

function _0x3214() {
    const _0x2b6278 = ['[data-progressive-target]', '[data-clone-wrapper=\x22',
        'slow', '[f-data-video=\x22play-icon\x22]', '[f-data-video=\x22fullscreen\x22]',
        'https://x8ki-letl-twmt.n7.xano.io/api:EbCCRNhB/counter/2', 'ms-field', 'Total',
        '[data-form=\x22next-btn\x22][type=\x22submit\x22]',
        'https://x8ki-letl-twmt.n7.xano.io/api:EbCCRNhB/counter/1', 'redirect-delay', 'attr', 'css',
        'ctrlKey', 'data-radio-skip', 'getVolume', 'script', '[data-display=\x22',
        '[f-data-video=\x22current-time\x22]', '_blank', 'forEach', 'f-data-video-speed',
        'data-radio-delay', 'pauseVideo', 'Before\x20&lt;/body&gt;\x20tag',
        '[data-form=\x22step\x22]', 'multistep', 'skipTo', 'input-field', 'trigger', 'stringify',
        'select[name=\x22', '\x22]:checked', '0.4', 'Basic\x20(No\x20Formly\x20Logic)',
        'f-data-video-id', 'padding', '[data-quiz]', 'duration', '35%',
        '[data-form=\x22submit-btn\x22]:visible', 'f-data-video-caption', 'count-card',
        ':input[type=\x22password\x22][required]',
        '\x0a\x20\x20.f-icon-embed-xxsmall-2\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#ff3232\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x20\x20.f-icon-embed-xxsmall\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#57ff4b\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20{\x0a\x20\x20\x20\x20height:\x20100%\x20!important;\x0a\x20\x20\x20\x20width:\x200;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20z-index:\x20999999999999\x20!important;\x0a\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20background-color:\x20#081019\x20!important;\x0a\x20\x20\x20\x20overflow-x:\x20hidden\x20!important;\x0a\x20\x20\x20\x20padding-top:\x2060px\x20!important;\x0a\x20\x20\x20\x20transition:\x200.5s\x20!important;\x0a\x20\x20\x20\x20font-size:\x2015px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73)\x20!important;\x0a\x20\x20\x20\x20font-family:system-ui\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-section-title-text,\x20.f-support-text,\x20.f-openbtn{\x0a\x20\x20\x20\x20font-size:\x2015px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73);\x0a\x20\x20\x20\x20font-family:system-ui\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20p,\x20.f-sidenav\x20strong\x20{\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20space-between\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x204px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73);\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20.f-closebtn\x20{\x0a\x20\x20\x20\x20position:\x20absolute\x20!important;\x0a\x20\x20\x20\x20top:\x2025px\x20!important;\x0a\x20\x20\x20\x20right:\x2025px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2036px\x20!important;\x0a\x20\x20\x20\x20margin-left:\x2050px\x20!important;\x0a\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20color:\x20#e7e7e7\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-core-setup\x20{\x0a\x20\x20\x20\x20padding:\x2012px\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x2011px\x20!important;\x0a\x20\x20\x20\x20border-radius:\x206px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20#f-main\x20{\x0a\x20\x20\x20\x20transition:\x20margin-left\x20.5s\x20!important;\x0a\x20\x20\x20\x20padding:\x2020px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-main-content\x20{\x0a\x20\x20\x20\x20transition:\x20margin-left\x20.5s\x20!important;\x0a\x20\x20\x20\x20padding:\x2020px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-form-step\x20{\x0a\x20\x20\x20\x20padding-left:\x2010px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-openbtn\x20{\x0a\x20\x20\x20\x20white-space:\x20nowrap\x20!important;\x0a\x20\x20\x20\x20cursor:\x20pointer\x20!important;\x0a\x20\x20\x20\x20box-shadow:\x200\x200\x200\x201px\x20rgba(0,\x200,\x200,\x20.1),\x200\x201px\x203px\x20rgba(0,\x200,\x200,\x20.1)\x20!important;\x0a\x20\x20\x20\x20visibility:\x20visible\x20!important;\x0a\x20\x20\x20\x20z-index:\x2099\x20!important;\x0a\x20\x20\x20\x20color:\x20#e7e7e7\x20!important;\x0a\x20\x20\x20\x20opacity:\x201\x20!important;\x0a\x20\x20\x20\x20width:\x20auto\x20!important;\x0a\x20\x20\x20\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20background-color:\x20#1e1e1e\x20!important;\x0a\x20\x20\x20\x20border-radius:\x203px\x20!important;\x0a\x20\x20\x20\x20margin:\x200\x20!important;\x0a\x20\x20\x20\x20padding:\x206px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2013px\x20!important;\x0a\x20\x20\x20\x20line-height:\x2014px\x20!important;\x0a\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20top:\x20auto\x20!important;\x0a\x20\x20\x20\x20bottom:\x2012px\x20!important;\x0a\x20\x20\x20\x20left:\x2012px\x20!important;\x0a\x20\x20\x20\x20right:\x20auto\x20!important;\x0a\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20transform:\x20none\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-text-header{\x0a\x20\x20\x20\x20color:\x20#fff\x20!important;\x0a\x20\x20\x20\x20font-size:\x201.8rem\x20!important;\x0a\x20\x20\x20\x20font-weight:\x20600\x20!important;\x0a\x20\x20\x20\x20line-height:\x201.2\x20!important;\x0a\x20\x20\x20\x20margin-bottom:4px\x0a\x20\x20}\x0a\x0a\x20\x20@media\x20screen\x20and\x20(max-height:\x20450px)\x20{\x0a\x20\x20\x20\x20.sidenav\x20{\x20padding-top:\x2015px\x20!important;\x20}\x0a\x20\x20\x20\x20.sidenav\x20a\x20{\x20font-size:\x2018px\x20!important;\x20}\x0a\x20\x20}\x0a\x0a\x20\x20.f-section-title-text{\x0a\x20\x20\x20\x20color:\x20#fff\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x2010px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2018px\x20!important;\x0a\x20\x20\x20\x20font-weight:\x20700\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-div-support-section{\x0a\x20\x20\x20\x20padding-top:1rem\x20!important;\x0a\x20\x20\x20\x20padding-bottom:1rem\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-text-white{\x0a\x20\x20\x20\x20color:\x20white\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-spacer{\x0a\x20\x20\x20\x20padding-top:8px\x20!important;\x0a\x20\x20}\x0a',
        'PAUSED', 'keydown', 'field', '1241914rxDtuA', 'index', '[data-clone]', 'sfte',
        'querySelector', '.w-form-formradioinput',
        '<strong\x20class=\x22f-text-white\x22>Current\x20Step\x20Text\x20', 'log', 'inputName',
        'keyCode', ':input[type=\x22text\x22]', '[data-input-field]', '0px', 'head', 'logic-extra',
        'name', '1325790FBIDkv', 'test', '[data-form=\x22next-btn\x22]', 'type',
        '[f-data-video-autoplay]', 'class', 'split', 'Player', '<option>', 'block-domain', 'progress',
        'change', 'PATCH', ':first', '12px', 'each',
        '<strong\x20class=\x22f-text-white\x22>ReCAPTCHA\x20',
        '</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Formly\x20Script\x20Info</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>Script\x20URL:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>',
        'wait', 'touchstart', 'enter', 'href', 'radio-delay', 'true',
        '[f-data-video=\x22forward-button\x22]', 'Failed\x20to\x20get\x20counter\x20value', 'find',
        'input[name=\x22', 'new-tab', 'offset', 'pageX', 'filledInput', '[data-query-param]',
        'loadstart', '[data-select-multiple]', 'language', 'backTo', 'observe', 'input:checkbox',
        '[f-data-video=\x22replay-button\x22]', 'script[src=\x22', '[data-remove-upload]',
        '[data-form=\x22remove-clone\x22]', '[data-last-step]', '[f-data-video-speed]', 'getLoop',
        'none', '[f-data-video-caption]', 'mousemove', 'select-multiple',
        'https://www.youtube.com/player_api', 'f-data-video-shortcut', ':input', 'arrowup',
        '[type=\x22radio\x22]', '[data-add-new-input=\x22', '1535896CBhGHY',
        ':input[type=\x22number\x22][required]', 'focus', ':input[type=\x22url\x22][required]', 'div',
        'skip-to', 'percent', 'not', ':input[type=\x22text\x22][required]', 'getVideoTitle', 'ended',
        'parents', '[data-submit=\x22true\x22]', 'loadedmetadata', 'clone', 'some',
        ':input[type=\x22email\x22][required]', '[data-progressive-input]',
        '[data-form=\x22progress\x22]', '1FULvPH', '[data-go-to]',
        '[data-callback=\x22recaptcha\x22]', 'Please\x20wait...', 'data-skip-to', 'arrowright',
        'data-input-field', 'f-data-poster-once', '[data-display-input-wrapper=\x22', 'Webflow',
        '[data-radio-skip]', '<strong\x20class=\x22f-text-white\x22>Radio\x20Inputs\x20',
        '[f-data-video=\x22vimeo-player\x22]', '[f-data-video=\x22show-play\x22]', 'getElementById',
        'createElement', ':input[type=\x22tel\x22]', '[data-progressive-input]:not(:visible)',
        '[f-data-video=\x22pause-icon\x22]', '[data-conditional-result]', 'length', 'Normal',
        '[data-selected]:checked', 'add-new-input', 'input:radio[name=\x22',
        '[data-form=\x22multistep\x22]', 'redirect-form-hehexd', '[data-text=\x22error-message\x22]',
        '[data-form=\x22next-btn\x22][data-submit-show]', 'muted', '12JUDeHf', 'click-addclass',
        'pause', '[data-display-index=\x22', '374BhNdqz', '[data-selection]', 'f-data-video-quality',
        'phone-autoformat', 'iframe', 'cookie', 'custom-error-message', 'setItem',
        '<br>Data\x20Go\x20To\x20=\x20', 'classList', 'getBoundingClientRect', 'ArrowDown',
        '[data-form=\x22submit-btn\x22]', '[f-data-video=\x22youtube-element\x22]',
        '[data-custom-error-message]', 'parent', 'input[autofocus]', 'location', 'fullscreenElement',
        'edit-step', 'textarea[required]', 'phone-validation', 'getAttribute',
        '[data-progressive-target=\x22', '[f-data-poster-once]', 'setVolume', 'body',
        'textarea[name=\x22', 'getCurrentTime',
        '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Next\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button\x20',
        '[data-cms-select=text]', ':input[type=\x22checkbox\x22]:checked',
        'Changing\x20video\x20quality\x20is\x20not\x20supported\x20for\x20YouTube\x20videos.',
        '145245kwyJPT', 'paused', 'then', '[f-data-video=\x22progress\x22]', 'get',
        '[data-clickable-all]', '[data-form=\x22back-btn\x22]', 'ArrowRight',
        '[data-weighted-selection]', 'span', '</strong>', 'findIndex', 'addClass', 'startsWith',
        '\x22]\x20input', '[f-data-video=\x22title\x22]', 'BUFFERING', 'CUED', 'async', 'innerHTML',
        'https://player.vimeo.com/api/player.js', 'selected', ':input[type=\x22file\x22][required]',
        '[data-progressive-input=\x22', 'option[value=\x22', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        'width', '[data-answer]', '{\x22method\x22:\x22pause\x22}',
        '[data-form=\x22custom-progress-indicator\x22]', 'target', '[data-enter]',
        '[data-display-input]', 'getDuration', 'querySelectorAll',
        '[f-data-video=\x22caption-disabled\x22]', '\x22]\x20[data-clone-input=\x22',
        'video,\x20iframe', 'display', 'go-to',
        'Fullscreen\x20mode\x20is\x20not\x20supported\x20for\x20YouTube\x20videos.',
        '[data-text=\x22total-weight\x22]', 'value', '[data-add-new-input]',
        '[f-data-video=\x22show-pause\x22]', 'siblings', '[data-enter=\x22true\x22]', '7303419UTqgwh',
        'exitFullscreen', 'getPaused', '[f-data-video-muted]', '[f-data-video=\x22progress-bar\x22]',
        'autoplay', 'progressive-input-value', 'ontouchstart', 'card', 'removeItem', 'postMessage',
        '[data-cms-select=cms]', '[data-clone-input=\x22', '[f-data-video=\x22overlay\x22]',
        ':input[type=\x22checkbox\x22][required]:checked', 'redirect', 'webkitRequestFullscreen',
        '[data-radio-delay]', '[data-btn=\x22edit\x22]', '[data-selection=\x22', 'trim',
        'offsetWidth', '[data-form=\x22step\x22][data-card]', 'addEventListener',
        '[f-data-video=\x22minimize\x22]', '[data-input-field=\x22', 'toLowerCase',
        '[data-reset-delay]', 'novalidate', 'disabled', 'getElementsByTagName', 'ENDED', 'radio',
        'playVideo', '[f-data-video=\x22wrapper\x22]', '[f-data-video=\x22volume-slider\x22]',
        '\x22]\x20select', 'input[type=\x22checkbox\x22][name=\x22', 'mozRequestFullScreen',
        'bufferend', 'touchmove', '[f-data-quality=\x22default\x22]',
        '[f-data-video-preview-offset-left]', '[f-data-video=\x22play-button\x22]', 'min-character',
        'reset', 'text', '[f-data-video=\x22poster-button\x22]', '[data-text=\x22current-step\x22]',
        '</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Number\x20of\x20steps:\x20',
        '[data-add-new=\x22', 'insertBefore', 'scroll-top',
        '[data-form=\x22step\x22]:not([data-card=\x22true\x22])', '[data-count-card]',
        '<span\x20class=\x22f-icon-embed-xxsmall\x20w-embed\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010s10-4.48\x2010-10S17.52\x202\x2012\x202m-2\x2015l-5-5l1.41-1.41L10\x2014.17l7.59-7.59L19\x208z\x22></path></svg></span>',
        '[data-index=\x22', 'option[value=\x22$(this).val()\x22]', 'label',
        '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>3.\x20Next\x20Buttons:\x20data-form=back-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Next\x20button\x20present?\x20',
        'vimeo', '25992538JuFBQC', 'relationship-', '[f-data-video=\x22caption\x22]', 'timeupdate',
        '[data-text=\x22total-steps\x22]', 'play', 'parse', 'requestFullscreen', 'quiz',
        '[f-data-video-loop]', 'stopPropagation', '[data-weighted-selection-range]',
        '[f-data-video=\x22video-preview\x22]', 'unMute', 'search', 'last-step', '[data-clickable]',
        '[data-clone-wrapper]', 'input[type=\x22radio\x22]:checked', '.ytp-pause-overlay',
        'weighted-selection', '[data-answer=\x22', ':input[type=\x22password\x22]', 'click',
        '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Submit\x20button\x20attribute\x20IS\x20on\x20Form\x20Submit\x20Button\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        'setAttribute', 'textarea[required]:visible',
        '<span\x20class=\x22f-icon-embed-xxsmall-2\x20w-embed\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--carbon\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2032\x2032\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M16\x202C8.2\x202\x202\x208.2\x202\x2016s6.2\x2014\x2014\x2014s14-6.2\x2014-14S23.8\x202\x2016\x202m5.4\x2021L16\x2017.6L10.6\x2023L9\x2021.4l5.4-5.4L9\x2010.6L10.6\x209l5.4\x205.4L21.4\x209l1.6\x201.6l-5.4\x205.4l5.4\x205.4z\x22></path></svg></span>',
        'tagName', '\x22]\x20[data-input-field^=\x22', 'last', '[data-checkbox]',
        '[f-data-video=\x22speed-text\x22]', 'keypress', '64JmmcyR',
        ':input[type=\x22checkbox\x22][required]', ':input[type=\x27radio\x27]:checked',
        '[data-form=\x22progress-indicator\x22]', '[data-click-addclass]', 'AND', 'textContent',
        'getQualities', 'add-new-input-limit', 'input[type=\x22email\x22]:visible',
        '[data-radio-skip=\x22true\x22]', 'videsigns', 'searchParams', 'append', 'getTextTracks',
        '[data-form=\x22remove-input-clone\x22]', 'None', 'ArrowUp', 'mouseup', 'prop', 'VIDEO',
        'src', '[f-data-video=\x22quality-text\x22]', 'add-new-limit', 'input:radio[required]',
        'dispatchEvent', 'textarea', '[f-data-video=\x22video-element\x22]', 'w--redirected-checked',
        'ajax', 'step', '[data-redirect-delay]', 'f-data-video-loop', '[data-clone=\x22', 'destroy',
        '\x22]\x20textarea', '[data-form-ms=\x22submit-btn\x22]', 'weighted-selection-range',
        ':input[type=\x22time\x22][required]', 'slice', 'substring', 'input[type=\x22radio\x22]',
        'appendChild', 'preventDefault', 'removeClass', 'clickable', 'loop', 'select[required]',
        '[f-data-video=\x22caption-wrapper\x22]', 'opacity', 'current', 'arrowdown', '[data-skip-to]',
        'enableTextTrack', '\x22][value=\x22', 'key', 'parentNode', 'init', ':checked',
        ':input[type=\x22file\x22]', 'html,\x20body', '[data-clone-input]',
        '<strong\x20class=\x22f-text-white\x22>Total\x20Step\x20Text\x20',
        ':input[type=\x22date\x22]', 'documentElement', 'input[type=\x22checkbox\x22]:visible',
        '42kKWfbz', 'onload',
        '<strong\x20class=\x22f-text-white\x22>Custom\x20Progress\x20Indicators\x20',
        '[f-data-video=\x22pause-button\x22]', 'FAIL', 'toString', 'join', 'auto', 'ArrowLeft',
        '[data-answer][data-radio-skip]:visible', 'load', 'canplaythrough', 'FormlyLogic\x20enabled',
        'string', 'getMonth',
        '<strong\x20class=\x22f-text-white\x22>Press\x20\x22Enter\x22\x20To\x20Progress\x20',
        'closest', '[type=\x22submit\x22]', '[f-data-video=\x22volume-button\x22]', 'PLAYING',
        '.active-answer-card', 'offsetX', ':input[type=\x22date\x22][required]', '[data-show-if]',
        '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>4.\x20Back\x20Buttons:\x20data-form=next-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Back\x20button\x20present?\x20',
        ':focus', '[data-clone-input-wrapper=\x22', 'includes', 'clone-input', 'select',
        ':input[type=\x22checkbox\x22][required]:not(:checked)', 'contentWindow', '.w-form-done',
        '24430MGnQlw', 'formlyLastStepAnswer', '<strong\x20class=\x22f-text-white\x22>Checkboxes\x20',
        'radio-skip', 'volume', '\x22][data-progressive-input-value=\x22',
        '[f-data-video=\x22backward-button\x22]', 'readystatechange', 'playbackRate',
        '<strong\x20class=\x22f-text-white\x22>Intro\x20Cards\x20Or\x20Steps\x20Without\x20Inputs\x20',
        '[f-data-video-autoplay-scroll]', 'div.g-recaptcha', 'checkbox', '[data-display-input=\x22',
        'children', 'seekTo', 'every', '[data-display]', '\x22]:not([data-prefill=\x22false\x22])',
        ':input[type=\x22number\x22]', 'data-go-to', '[type=\x22checkbox\x22]', 'status', 'left',
        'formlyLastStep', 'add', 'progressive-input',
        '\x0a\x20\x20<button\x20class=\x22f-openbtn\x22\x20onclick=\x22openNav()\x22>\x0a\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x2220px\x22\x20height=\x2220px\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M11\x2021h-1l1-7H7.5c-.88\x200-.33-.75-.31-.78C8.48\x2010.94\x2010.42\x207.54\x2013.01\x203h1l-1\x207h3.51c.4\x200\x20.62.19.4.66C12.97\x2017.55\x2011\x2021\x2011\x2021\x22></path>\x0a\x20\x20\x20\x20</svg>\x20Check\x20Form\x0a\x20\x20</button>\x0a\x20\x20<div\x20id=\x22f-mySidenav\x22\x20class=\x22f-sidenav\x22>\x0a\x20\x20\x20\x20<a\x20href=\x22javascript:void(0)\x22\x20class=\x22f-closebtn\x22\x20onclick=\x22closeNav()\x22>&times;</a>\x0a\x20\x20\x20\x20<div\x20class=\x22f-fc-main-content\x22>\x0a\x20\x20\x20\x20\x20\x20<h4\x20class=\x22f-text-header\x22>Formly\x20Support</h4>\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20If\x20you\x20have\x20spotted\x20a\x20bug\x20or\x20require\x20extra\x20support,\x20please\x20reach\x20out\x20to\x20us\x20via\x20Slack\x20or\x20email\x20us\x20at\x20developer@videsigns.uk.\x0a\x20\x20\x20\x20\x20\x20</p>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Form\x20Type</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>',
        '[f-data-video=\x22loading\x22]', 'setPlaybackRate', 'padStart', 'val', 'hide', 'filter',
        'animate', '[f-data-video=\x22duration\x22]', 'conditional-result', 'push',
        'f-data-video-controls', '[f-data-video=\x22vimeo-element\x22]', 'PlayerState',
        'f-data-video-autoplay-scroll', 'touchend', '[f-data-video=\x22loader\x22]', 'currentTime',
        'form[data-form=\x22multistep\x22]\x20:input', '[data-range]:contains(',
        ':input[type=\x22email\x22]', 'active-answer-card', 'mousedown', 'f-data-video-muted',
        '</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Multistep\x20form\x20attribute\x20is\x20on\x20Form\x20element\x20and\x20not\x20on\x20Form\x20Block\x20element\x0a\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>2.\x20Form\x20Steps:\x20data-form=step\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        'remove', 'data', 'selection', 'getPlayerState', 'getItem', 'formly-support', 'submit-show',
        'input', 'formly', 'remove-upload', 'youtube', 'disableTextTrack',
        '{\x22event\x22:\x22command\x22,\x22func\x22:\x22pauseVideo\x22,\x22args\x22:\x22\x22}',
        'ajaxComplete', '12ImcXqE',
        'Loop\x20mode\x20is\x20not\x20supported\x20for\x20YouTube\x20videos.', 'setCurrentTime',
        'scroll-top-offset', 'file', 'data-name', 'fadeIn', 'answer', '.w-checkbox-input',
        'input[type=\x22submit\x22]',
        '\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a', 'floor',
        '[data-clone-input-wrapper]', ':input[type=\x22radio\x22]', ':input[required]',
        'data-show-if', '[f-data-video=\x22preview-wrapper\x22]', '[data-selection-weight]',
        '[f-data-video=\x22poster\x22]', ':input[type=\x22time\x22]', 'show',
        '[f-data-video-quality]', 'f-mySidenav', 'buffered', 'input[type=\x22radio\x22][name=\x22',
        ':input[type=\x22checkbox\x22]', '[data-radio-skip]:visible', 'style', 'seconds', 'false',
        'touches', 'f-data-video-preview-offset-left', 'url', '[data-btn=\x22reset\x22]',
        '\x22]\x20[data-clone=\x22'
    ];
    _0x3214 = function() { return _0x2b6278; };
    return _0x3214();
}
let steps = $(_0x37f079(0x1fa)),
    progressbarClone = $(_0x37f079(0x11c))[_0x37f079(0x267)](),
    progressbar, weightedSelection = $(_0x37f079(0x93))['data'](_0x37f079(0x10b)),
    weightedSelectionRange = $(_0x37f079(0x102))['data'](_0x37f079(0x13e)),
    selectMultiple = $(_0x37f079(0x243))[_0x37f079(0x1b1)](_0x37f079(0x252)),
    customError = $(_0x37f079(0x29c))[_0x37f079(0x1b1)](_0x37f079(0x294)),
    reinitIX = $('[data-reinit]')['data']('reinit'),
    memory = $('[data-memory]')[_0x37f079(0x1b1)]('memory'),
    quiz = $(_0x37f079(0x206))['data'](_0x37f079(0xff));
const urlFormly = new URL(window['location'][_0x37f079(0x236)]);
let _params = $(_0x37f079(0x241))['data']('query-param'),
    logicExtra = $(_0x37f079(0x285))[_0x37f079(0x1b1)](_0x37f079(0x21f)),
    oldSubmitText = $(_0x37f079(0x29a))['val'](),
    oldResetText = $(_0x37f079(0x1df))[_0x37f079(0xe8)](),
    formReset = $('[data-form=\x22multistep\x22]')[_0x37f079(0x1b1)](_0x37f079(0xe7)),
    resetDelay = $(_0x37f079(0xd5))[_0x37f079(0x1b1)]('reset-delay') ? $(_0x37f079(0xd5))[_0x37f079(
        0x1b1)]('reset-delay') : 0x7d0,
    redirectDelay = $(_0x37f079(0x138))[_0x37f079(0x1b1)](_0x37f079(0x1eb)) ? $(_0x37f079(0x138))[
        'data']('redirect-delay') : 0x7d0,
    phoneFormat = $(_0x37f079(0x285))[_0x37f079(0x1b1)](_0x37f079(0x2a3)),
    scrollToTop = $('[data-form=\x22multistep\x22]')[_0x37f079(0x1b1)](_0x37f079(0xee)),
    trackLastStep = $(_0x37f079(0x24c))[_0x37f079(0x1b1)](_0x37f079(0x106)),
    conditionalResult = $(_0x37f079(0x27f))[_0x37f079(0x1b1)](_0x37f079(0x1a0)) === _0x37f079(0x11e),
    scrollTopOffset = parseInt($('[data-form=\x22multistep\x22]')[_0x37f079(0x1b1)](_0x37f079(
        0x1c1)));
const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
savedFilledInput = JSON[_0x37f079(0xfd)](localStorage[_0x37f079(0x1b4)]('filledInput')),
    formlyLastStep = JSON[_0x37f079(0xfd)](localStorage[_0x37f079(0x1b4)](_0x37f079(0x194))),
    formlyLastStepAnswer = JSON['parse'](localStorage['getItem'](_0x37f079(0x17d)));
trackLastStep && (formlyLastStep > x && (x = formlyLastStep), formlyLastStepAnswer && (selections =
    formlyLastStepAnswer));
$(_0x37f079(0x213))['each'](function() {
    const _0x517b52 = _0x37f079;
    ogCloneArr[_0x517b52(0x1a1)]({
        'name': $(this)[_0x517b52(0x1b1)]('clone'),
        'element': $(this)[
            _0x517b52(0x267)](!![]),
        'display': $(_0x517b52(0x1f2) + $(this)['data'](_0x517b52(
            0x267)) + '\x22]')['eq'](0x0)[_0x517b52(0x267)](!![])
    });
});
$('div.g-recaptcha')[_0x37f079(0x280)] > 0x0 && (notRobot = ![]);

function recaptcha(_0x3b29b6) { notRobot = !![]; }
$('[data-count-card]')[_0x37f079(0x280)] > 0x0 &&
    (countCard = $(_0x37f079(0xf0))[_0x37f079(0x1b1)](_0x37f079(0x20b)));
$(_0x37f079(0x287))[_0x37f079(0x19c)](), $(progressbarClone)[_0x37f079(0x145)](_0x37f079(0x14b)), $(
        '[data-form=\x22progress\x22]')['children']()['remove'](), $(_0x37f079(0x29a))[_0x37f079(0x19c)]
    (), $('[data-form-ms=\x22submit-btn\x22]')[_0x37f079(0x19c)](), steps['each'](function() {
        const
            _0x5bcfca = _0x37f079;
        $(_0x5bcfca(0x26b))[_0x5bcfca(0x126)](progressbarClone['clone'](!![], !![]));
    }), $(_0x37f079(
        0x21c))[_0x37f079(0x19c)]();

function _0x31ef(_0x298bbb, _0x5202d3) {
    const _0x321495 = _0x3214();
    return _0x31ef = function(
        _0x31ef65, _0x2dab88) {
        _0x31ef65 = _0x31ef65 - 0x82;
        let _0x562ce2 = _0x321495[
            _0x31ef65];
        return _0x562ce2;
    }, _0x31ef(_0x298bbb, _0x5202d3);
}
countCard ? (curStep =
        curStep + 0x1, totalSteps = steps['length'], $(_0x37f079(0xfb))[_0x37f079(0xe8)](totalSteps)) :
    ($(steps[x])['data'](_0x37f079(0xc2)) ? curStep = curStep + 0x0 : curStep = curStep + 0x1,
        totalSteps = $(_0x37f079(0xef))['length'], $(_0x37f079(0xfb))['text'](totalSteps), $(_0x37f079(
            0xd0))[_0x37f079(0x230)](function() {
            const _0x2a1103 = _0x37f079;
            $($(_0x2a1103(0x11c))[$(this)['index']()])[_0x2a1103(0x19c)]();
        }));
progressbar = $(_0x37f079(0x26b))['children'](), $(_0x37f079(0x11c))['on'](_0x37f079(0x10e),
    clickableIndicator), $('[data-text=\x22current-step\x22]')[_0x37f079(0xe8)](curStep), steps[
    _0x37f079(0x19c)](), $('[data-success-card]')['hide'](), $(_0x37f079(0x1e9))[_0x37f079(0x230)](
    function() {
        const _0x1857c2 = _0x37f079;
        $(this)[_0x1857c2(0x1ec)]('type', 'button');
    });

function getParams() {
    const _0x34be52 = _0x37f079;
    urlFormly[_0x34be52(0x125)]['forEach'](function(_0x22b0d8, _0x16e69a) {
        const _0xad6fe8 =
            _0x34be52;
        searchQ[_0xad6fe8(0x1a1)]({ 'val': _0x22b0d8, 'key': _0x16e69a });
    });
}

function getSafe(_0x5a376a, _0x53aabc) {
    try { return _0x5a376a(); } catch (
        _0x3dec2d) { return _0x53aabc; }
}

function phoneAutoFormat(_0x352d5f) {
    var _0x5ecde0 = '';
    return function(_0x1be6f4) {
        const
            _0x2e91d3 = _0x31ef;
        var _0xabb259 = '',
            _0xca0c49 = _0x1be6f4['replace'](/\D/g, ''),
            _0x50aec9 = 0x0,
            _0x4fd0f6 = 0x0;
        while (_0x50aec9 < _0xca0c49[_0x2e91d3(0x280)] && _0x4fd0f6 < _0x352d5f[
                'length']) {
            _0x352d5f[_0x4fd0f6] === 'x' ? (_0xabb259 += _0xca0c49[_0x50aec9],
                _0x50aec9++) : _0xabb259 += _0x352d5f[_0x4fd0f6], _0x4fd0f6++;
        }
        if (_0x1be6f4[_0x2e91d3(
                0x280)] < _0x5ecde0[_0x2e91d3(0x280)]) {
            var _0x2f674c = _0x352d5f[_0x2e91d3(0x140)](
                _0x4fd0f6);
            _0xabb259 += _0x2f674c['replace'](/x/g, '');
        }
        return _0x5ecde0 = _0xabb259, _0xabb259;
    };
}

function validateURL(_0x23f413) {
    const _0x5b6722 = _0x37f079;
    return urlPattern[_0x5b6722(0x222)](
        _0x23f413) ? !![] : ![];
}
quiz && steps[_0x37f079(0x230)](function() {
    const _0x51fde0 =
        _0x37f079;
    $(this)['children']()[_0x51fde0(0x1ec)](_0x51fde0(0x1ef), !![]), $(this)[_0x51fde0(0x18a)]()[
        _0x51fde0(0x1ec)](_0x51fde0(0x1f7), 0xfa);
});

function disableBtn(_0x5e7a4b) {
    const _0x3056be = _0x37f079;
    fill = ![], !customError && ($('[data-form=\x22next-btn\x22]')[_0x3056be(0x1ed)]
        ({ 'opacity': '0.4', 'pointer-events': _0x3056be(0x24f) }), $(_0x3056be(0x223))[_0x3056be(0x97)]
        (_0x3056be(0xd7)), $('[data-form=\x22submit-btn\x22]')[_0x3056be(0x1ed)]
        ({ 'opacity': _0x3056be(0x202), 'pointer-events': _0x3056be(0x24f) }), $(_0x3056be(0x29a))[
            _0x3056be(0x97)]('disabled'), $(_0x3056be(0x13d))[_0x3056be(0x1ed)]({
            'opacity': _0x3056be(
                0x202),
            'pointer-events': _0x3056be(0x24f)
        }), $(_0x3056be(0x13d))[_0x3056be(0x97)](
            _0x3056be(0xd7)));
}

function enableBtn() {
    const _0x25dcd3 = _0x37f079;
    fill = !![], $('[data-form=\x22next-btn\x22]')[_0x25dcd3(0x1ed)]({
            'pointer-events': _0x25dcd3(
                0x162),
            'opacity': '1'
        }), $(_0x25dcd3(0x223))['removeClass']('disabled'), $(_0x25dcd3(
            0x29a))[_0x25dcd3(0x1ed)]({ 'pointer-events': _0x25dcd3(0x162), 'opacity': '1' }), $(
            _0x25dcd3(0x29a))['removeClass'](_0x25dcd3(0xd7)), $(_0x25dcd3(0x13d))[_0x25dcd3(0x1ed)]
        ({ 'pointer-events': _0x25dcd3(0x162), 'opacity': '1' }), $(_0x25dcd3(0x13d))['removeClass'](
            _0x25dcd3(0xd7));
}

function saveLastAnswer(_0x3e0706) {
    const _0x5d8e79 = _0x37f079;
    localStorage[_0x5d8e79(0xc3)](_0x5d8e79(0x17d)), localStorage[_0x5d8e79(0x295)](_0x5d8e79(0x17d),
        JSON[_0x5d8e79(0x1ff)](_0x3e0706));
}

function saveFilledInput() {
    const _0x23c8a6 = _0x37f079;
    $(_0x23c8a6(0x1a9))['not'](_0x23c8a6(0x16c))[_0x23c8a6(0x230)](function() {
        const _0x55a334 =
            _0x23c8a6;
        $(this)[_0x55a334(0x1ec)](_0x55a334(0x224)) === 'checkbox' || $(this)[_0x55a334(0x1ec)](
                'type') === _0x55a334(0xda) ? $(this)[_0x55a334(0x12c)]('checked') && (filledInput[
                _0x55a334(0x268)](_0x527e37 => _0x527e37[_0x55a334(0x219)] === $(this)['attr'](
                _0x55a334(0x220))) ? (filledInput = filledInput[_0x55a334(0x19d)](_0x143218 =>
                _0x143218[_0x55a334(0x219)] !== $(this)[_0x55a334(0x1ec)]('name')), $(this)[
                _0x55a334(0x19b)]() !== '' && filledInput[_0x55a334(0x1a1)]({
                'inputName': $(this)[
                    _0x55a334(0x1ec)](_0x55a334(0x220)),
                'value': $(this)['val']()
            })) : $(this)[
                _0x55a334(0x19b)]() !== '' && filledInput[_0x55a334(0x1a1)]({
                'inputName': $(this)[
                    _0x55a334(0x1ec)](_0x55a334(0x220)),
                'value': $(this)['val']()
            })) : filledInput[
                'some'](_0x1234ed => _0x1234ed['inputName'] === $(this)[_0x55a334(0x1ec)]('name')) ? (
                filledInput = filledInput[_0x55a334(0x19d)](_0x5323da => _0x5323da[_0x55a334(0x219)] !==
                    $(this)[_0x55a334(0x1ec)](_0x55a334(0x220))), $(this)[_0x55a334(0x19b)]() !== '' &&
                filledInput[_0x55a334(0x1a1)]({
                    'inputName': $(this)['attr'](_0x55a334(
                        0x220)),
                    'value': $(this)[_0x55a334(0x19b)]()
                })) : $(this)[_0x55a334(0x19b)]() !==
            '' && filledInput[_0x55a334(0x1a1)]({
                'inputName': $(this)[_0x55a334(0x1ec)](_0x55a334(
                    0x220)),
                'value': $(this)[_0x55a334(0x19b)]()
            });
    }), trackLastStep && (formlyLastStep >
        x ? lastStep = formlyLastStep : lastStep = x, localStorage[_0x23c8a6(0xc3)](_0x23c8a6(0x194)),
        localStorage[_0x23c8a6(0x295)]('formlyLastStep', lastStep)), localStorage[_0x23c8a6(0xc3)](
        _0x23c8a6(0x240)), localStorage['setItem']('filledInput', JSON[_0x23c8a6(0x1ff)](
        filledInput));
}

function scrollTop() {
    const _0x5764ae = _0x37f079;
    scrollToTop && $(_0x5764ae(0x155))[_0x5764ae(0x19e)]({
        'scrollTop': $(
            '[data-form=\x22multistep\x22]')[_0x5764ae(0x23e)]()['top'] - scrollTopOffset
    }, 0x3e8);
}

function updateStep() {
    const _0x445198 = _0x37f079;
    scrollTop(), skip = ![], $('[data-form=\x22custom-progress-indicator\x22]')[_0x445198(0x145)](
        _0x445198(0xd7));
    $('[data-clickable]')[_0x445198(0x1b1)](_0x445198(0x146)) && (steps['find'](_0x445198(0x1cc))[
        'each'](function() {
        const _0xb9cbac = _0x445198;
        $($(_0xb9cbac(0xa8))[$(this)[_0xb9cbac(0x264)]('[data-form=\x22step\x22]')[_0xb9cbac(
            0x212)]()]), $(this)[_0xb9cbac(0x19b)]() === '' && emptyInput++;
    }), emptyInput > 0x0 ? $(
        _0x445198(0x1c7))['addClass'](_0x445198(0xd7)) : $(_0x445198(0x1c7))[_0x445198(0x145)](
        'disabled'));
    $(_0x445198(0xa8))[_0x445198(0x145)](_0x445198(0x14b)), $(_0x445198(0xa8))[_0x445198(0x97)](
            _0x445198(0xd7)), $($(_0x445198(0xa8))[x])[_0x445198(0x97)](_0x445198(0x14b)), selection =
        selections[_0x445198(0x19d)](_0x4c6389 => _0x4c6389[_0x445198(0x137)] === x - 0x1), console[
            'log'](_0x445198(0x214), x);
    next && (x = getSafe(() => selection[0x0][_0x445198(0x1fc)]) ? parseInt(getSafe(() => selection[
        0x0][_0x445198(0x1fc)])) : x);
    $('[data-answer]')[_0x445198(0x19c)](), steps[_0x445198(0x19c)]();
    reinitIX === !![] && window[_0x445198(0x275)][_0x445198(0x13b)]();
    $(progressbar)[_0x445198(0x145)]('current');
    for (i = 0x0; i <= x; i++) {
        countCard ? $(
            progressbar[i])[_0x445198(0x97)]('current') : !$(steps[i])[_0x445198(0x1b1)](_0x445198(
            0xc2)) && $(progressbar[i])['addClass']('current');
    }
    reinitIX === !![] ? (window[
        'Webflow'] && window[_0x445198(0x275)]['require']('ix2')[_0x445198(0x152)](), document[
        'dispatchEvent'](new Event(_0x445198(0x183))), $(steps[x])[_0x445198(0x1d2)]()) : $(steps[
        x])[_0x445198(0x1c4)](_0x445198(0x1e3));
    $('.active-answer-card')['removeClass'](_0x445198(0x1ac));
    x === 0x0 && !$(steps[x])[_0x445198(0x1b1)](_0x445198(0xc2)) && ($(steps[x])[_0x445198(0x23b)](
        _0x445198(0xa6))[_0x445198(0x1d2)](), $(steps[x])['find']('[data-answer]')[_0x445198(0x97)](
        'active-answer-card'));
    selection[_0x445198(0x280)] > 0x0 ? ($(steps[x])['find'](_0x445198(0x10c) + selection[0x0][
        _0x445198(0xa0)
    ] + '\x22]')[_0x445198(0x1d2)](), $(steps[x])['find'](_0x445198(0x10c) + selection[0x0][
        _0x445198(0xa0)
    ] + '\x22]')[_0x445198(0x97)](_0x445198(0x1ac))) : ($(steps[x])['find'](_0x445198(0x10c) +
        answer + '\x22]')[_0x445198(0x1d2)](), $(steps[x])[_0x445198(0x23b)](_0x445198(0x10c) +
        answer + '\x22]')[_0x445198(0x97)](_0x445198(0x1ac)));
    if (x === 0x0) $(_0x445198(0x91))[
        _0x445198(0x19c)](), $(_0x445198(0x223))[_0x445198(0x1d2)](), $(_0x445198(0x29a))[_0x445198(
        0x19c)]();
    else {
        if (x === steps[_0x445198(0x280)] - 0x1 || $(steps[x])[_0x445198(0x23b)](
                '[data-form=\x22submit\x22]:visible')[_0x445198(0x280)] > 0x0) {
            $(_0x445198(0x223))[
                _0x445198(0x19c)]();
            if ($(steps[x])[_0x445198(0x23b)](
                    '[data-form=\x22next-btn\x22][data-submit-show]')[_0x445198(0x1b1)]('submit-show')) $(
                steps[x])[_0x445198(0x23b)](_0x445198(0x288))[_0x445198(0x1d2)]();
            else $('[data-form=\x22next-btn\x22]')[_0x445198(0x1b1)](_0x445198(0x1b6)) && $(_0x445198(
                0x223))[_0x445198(0x1d2)]();
            $(_0x445198(0x29a))['show'](), $('[data-form-ms=\x22submit-btn\x22]')[_0x445198(0x1d2)](), $(
                _0x445198(0x91))[_0x445198(0x1d2)]();
        } else $('[data-form=\x22next-btn\x22]')['show'](), $(
            _0x445198(0x91))['show'](), $(_0x445198(0x29a))[_0x445198(0x19c)](), $(_0x445198(0x13d))[
            'hide']();
    }
    $($(steps[x])['find'](_0x445198(0x29e))[0x0])['focus'](), $($(steps[x])[
        _0x445198(0x23b)]('textarea[autofocus]')[0x0])[_0x445198(0x25b)](), validation();
    for (idx =
        0x0; idx <= x; idx++) { $($(_0x445198(0xa8))[idx])[_0x445198(0x145)](_0x445198(0xd7)); }
}

function validateEmail(_0x4208d4, _0x395816, _0x1c2c73) {
    const _0x2af01b = _0x37f079;
    let
        _0x4559eb = _0x4208d4[_0x2af01b(0x176)]('@') ? _0x4208d4[_0x2af01b(0x227)]('@')[0x1]['split'](
            '.')[0x0] : [];
    dom = [];
    _0x395816 !== undefined && _0x395816[_0x2af01b(0x227)](',')[_0x2af01b(0x1f5)](function(
        _0x3b17b1) {
        const _0xf057ff = _0x2af01b;
        _0x3b17b1[_0xf057ff(0x176)](_0x4559eb) && dom['push'](_0x4559eb);
    });
    dom['length'] > 0x0 ? domainAllowed = ![] : domainAllowed = !![];
    var _0x2b43a9 =
        /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,20})?$/;
    !_0x2b43a9[_0x2af01b(0x222)](_0x4208d4) || !
        domainAllowed ? (emailFilled = ![], unfilledArr['push']({ 'input': _0x1c2c73 })) :
        emailFilled = !![];
}

function phoneValidation(_0x4789b8, _0x506f43, _0x5d4293) {
    if (phoneFormat) return _0x506f43 >=
        _0x5d4293 ? !![] : ![];
    else { if (_0x506f43 >= _0x5d4293) return !![]; }
}

function validation() {
    const _0x4fa7a8 = _0x37f079;
    $(steps[x])['data'](_0x4fa7a8(0xc2)) && enableBtn();
    unfilledArr = [], inputFilled = !![], radioFilled = !![], checkboxFilled = !![], numFilled = !![],
        fileFilled = !![], dateFilled = !![], timeFilled = !![], selectFilled = !![], textareaFilled = !
        ![], telFilled = !![], emailFilled = !![], passwordFilled = !![], emptyInput = 0x0,
        empReqInput = [], empReqDate = [], empReqTime = [], empReqSelect = [], empReqTel = [],
        empReqTextarea = [], empReqNum = [], empReqFile = [], empReqRadio = [], textareaLength = $(
            steps[x])[_0x4fa7a8(0x23b)](_0x4fa7a8(0x111))[_0x4fa7a8(0x280)], textInputLength = $(steps[
            x])['find']('input[type=\x22text\x22][required]:visible')[_0x4fa7a8(0x280)], selectInputLength =
        $(steps[x])[_0x4fa7a8(0x23b)]('select[required]:visible')['length'], emailInputLength = $(steps[
            x])[_0x4fa7a8(0x23b)](_0x4fa7a8(0x122))[_0x4fa7a8(0x280)], checkboxInputLength = $(steps[x])[
            _0x4fa7a8(0x23b)](_0x4fa7a8(0x15a))[_0x4fa7a8(0x280)];
    textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0 ? disableBtn() :
        enableBtn();
    checkCount = $(steps[x])['data']('checkbox') ? $(steps[x])['data'](_0x4fa7a8(0x188)) : $(steps[
        x])['find'](_0x4fa7a8(0x116))[_0x4fa7a8(0x280)] > 0x0 ? $(steps[x])[_0x4fa7a8(0x23b)](_0x4fa7a8(
        0x116))[_0x4fa7a8(0x1b1)](_0x4fa7a8(0x188)) : 0x0;
    if (!logicExtra) $(steps[x])['find'](
        ':input')['is'](_0x4fa7a8(0x191)) && (checkCount === '*' || checkCount > $(steps[x])[
            _0x4fa7a8(0x23b)](':input[type=\x22checkbox\x22]')['length'] ? $(steps[x])[_0x4fa7a8(0x23b)]
        (_0x4fa7a8(0x1d7))[_0x4fa7a8(0x230)](function() {
            const _0x3cb8cf = _0x4fa7a8;
            $(this)['is'](':checked') ? $(steps[x])[_0x3cb8cf(0x23b)](_0x3cb8cf(0x11a))[_0x3cb8cf(
                0x280)] < 0x1 && (checkboxFilled = !![], resetInputErrorMessage($(this)[_0x3cb8cf(
                0x1ec)](_0x3cb8cf(0x220)))) : (checkboxFilled = ![], unfilledArr[_0x3cb8cf(0x1a1)]
                ({ 'input': $(this)[_0x3cb8cf(0x1ec)](_0x3cb8cf(0x220)) }));
        }) : $(steps[x])[_0x4fa7a8(
            0x23b)](_0x4fa7a8(0x89))['length'] >= checkCount ? $(steps[x])[_0x4fa7a8(0x23b)](_0x4fa7a8(
            0x11a))[_0x4fa7a8(0x280)] > 0x0 ? $(steps[x])[_0x4fa7a8(0x23b)](_0x4fa7a8(0x11a))['each'](
            function() {
                const _0x2ac35f = _0x4fa7a8;
                checkboxFilled = ![];
                let _0x43ed52 = $(steps[x])[_0x2ac35f(0x23b)](_0x2ac35f(0x11a))[
                        _0x2ac35f(0x280)],
                    _0x4c2f06 = $(steps[x])[_0x2ac35f(0x23b)](_0x2ac35f(0xc8))['length'];
                _0x43ed52 - _0x4c2f06 === 0x0 ? (checkboxFilled = !![], resetInputErrorMessage($(steps[
                    x])['find'](':input[type=\x22checkbox\x22]')[_0x2ac35f(0x1ec)](_0x2ac35f(0x220)))) : (
                    checkboxFilled = ![], $(steps[x])[_0x2ac35f(0x23b)](_0x2ac35f(0x179))['each'](
                        function() {
                            const _0x40a5d4 = _0x2ac35f;
                            unfilledArr[_0x40a5d4(0x1a1)]({ 'input': $(this)[_0x40a5d4(0x1ec)]('name') });
                        })
                );
            }) : (checkboxFilled = !![], resetInputErrorMessage($(steps[x])[_0x4fa7a8(0x23b)](
            ':input[type=\x22checkbox\x22]')['attr'](_0x4fa7a8(0x220)))) : (checkboxFilled = ![], $(
            steps[x])[_0x4fa7a8(0x23b)](':input[type=\x22checkbox\x22][required]')[_0x4fa7a8(0x230)](
            function() {
                const _0x26bb26 = _0x4fa7a8;
                $(this)[_0x26bb26(0x260)](_0x26bb26(0x153)) && unfilledArr[_0x26bb26(0x1a1)]
                    ({ 'input': $(this)['attr']('name') });
            }), unfilledArr[_0x4fa7a8(0x1a1)]({
            'input': $(
                steps[x])[_0x4fa7a8(0x23b)](_0x4fa7a8(0x1d7))[_0x4fa7a8(0x1ec)](_0x4fa7a8(0x220))
        }))), $(
        steps[x])[_0x4fa7a8(0x23b)](_0x4fa7a8(0x131))[_0x4fa7a8(0x230)](function(_0x7507d2) {
        const
            _0x282e81 = _0x4fa7a8;
        var _0x319968 = $(this)[_0x282e81(0x1ec)](_0x282e81(0x220));
        $(_0x282e81(0x284) + _0x319968 + _0x282e81(0x201))[_0x282e81(0x280)] == 0x0 ? (!empReqRadio[
                _0x282e81(0x23b)](_0x1de498 => _0x1de498['input'] === _0x7507d2) && empReqRadio[
                _0x282e81(0x1a1)]({ 'input': _0x7507d2 }), unfilledArr[_0x282e81(0x1a1)]({
                'input': $(
                    this)['attr']('name')
            })) : empReqRadio = empReqRadio[_0x282e81(0x19d)](_0x472907 =>
                _0x472907['input'] !== _0x7507d2), empReqRadio['length'] === 0x0 ? radioFilled = !![] :
            radioFilled = ![];
    }), $(steps[x])[_0x4fa7a8(0x23b)](_0x4fa7a8(0x261))[_0x4fa7a8(0x230)](
        function(_0x23348c) {
            const _0x32c930 = _0x4fa7a8;
            let _0x226835 = $(this)[_0x32c930(0x19b)]
                ()['length'],
                _0x1ef3af = $(this)[_0x32c930(0x1b1)](_0x32c930(0xe6)) ? $(this)[_0x32c930(0x1b1)](
                    'min-character') : 0x0;
            $(this)['val']() !== '' && _0x226835 >= _0x1ef3af ? empReqInput = empReqInput[_0x32c930(
                    0x19d)](_0x374117 => _0x374117['input'] !== _0x23348c) : (!empReqInput[_0x32c930(0x23b)]
                    (_0x18fef9 => _0x18fef9[_0x32c930(0x1b7)] === _0x23348c) && empReqInput[_0x32c930(
                        0x1a1)]({ 'input': _0x23348c }), unfilledArr[_0x32c930(0x1a1)]({
                        'input': $(this)[
                            _0x32c930(0x1ec)](_0x32c930(0x220))
                    })), empReqInput['length'] === 0x0 ?
                inputFilled = !![] : inputFilled = ![];
        }), $(steps[x])[_0x4fa7a8(0x23b)](
        ':input[type=\x22password\x22][required]')[_0x4fa7a8(0x230)](function(_0x5afa52) {
        const
            _0x563ed9 = _0x4fa7a8;
        let _0x312e7d = $(this)[_0x563ed9(0x19b)]()[_0x563ed9(0x280)],
            _0xda1a6c = $(this)[_0x563ed9(0x1b1)](_0x563ed9(0xe6)) ? $(this)[_0x563ed9(0x1b1)](
                _0x563ed9(0xe6)) : 0x0;
        $(this)[_0x563ed9(0x19b)]() !== '' && _0x312e7d >= _0xda1a6c ? empReqPassword =
            empReqPassword[_0x563ed9(0x19d)](_0x31c585 => _0x31c585[_0x563ed9(0x1b7)] !== _0x5afa52) :
            (!empReqPassword['find'](_0x51d72c => _0x51d72c[_0x563ed9(0x1b7)] === _0x5afa52) &&
                empReqPassword[_0x563ed9(0x1a1)]({ 'input': _0x5afa52 }), unfilledArr['push']
                ({ 'input': $(this)[_0x563ed9(0x1ec)]('name') })), empReqPassword['length'] === 0x0 ?
            passwordFilled = !![] : passwordFilled = ![];
    }), $(steps[x])['find'](_0x4fa7a8(0x25c))[
        'each'](function(_0x392e5a) {
        const _0x250761 = _0x4fa7a8;
        let _0x3728f0 = $(this)[_0x250761(
                0x19b)]()[_0x250761(0x280)],
            _0x2dfee8 = $(this)['data']('min-character') ? $(this)[_0x250761(0x1b1)](_0x250761(
                0xe6)) : 0x0;
        $(this)[_0x250761(0x19b)]() !== '' && _0x3728f0 >= _0x2dfee8 ? empReqUrl = empReqUrl[
                'filter'](_0x202420 => _0x202420[_0x250761(0x1b7)] !== _0x392e5a) : (!empReqTime[
                    _0x250761(0x23b)](_0x8e0dc6 => _0x8e0dc6[_0x250761(0x1b7)] === _0x392e5a) &&
                empReqUrl[_0x250761(0x1a1)]({ 'input': _0x392e5a }), unfilledArr[_0x250761(0x1a1)]
                ({ 'input': $(this)[_0x250761(0x1ec)](_0x250761(0x220)) })), empReqUrl['length'] ===
            0x0 && validateURL($(this)[_0x250761(0x19b)]()) ? urlFilled = !![] : urlFilled = ![];
    }), $(
        steps[x])[_0x4fa7a8(0x23b)](_0x4fa7a8(0x13f))[_0x4fa7a8(0x230)](function(_0x45e1b0) {
        const
            _0x3bdb1c = _0x4fa7a8;
        let _0x3fce38 = $(this)[_0x3bdb1c(0x19b)]()[_0x3bdb1c(0x280)],
            _0x2170f4 = $(this)[_0x3bdb1c(0x1b1)]('min-character') ? $(this)['data'](_0x3bdb1c(
                0xe6)) : 0x0;
        $(this)[_0x3bdb1c(0x19b)]() !== '' && _0x3fce38 >= _0x2170f4 ? empReqTime = empReqTime[
                _0x3bdb1c(0x19d)](_0x11d445 => _0x11d445['input'] !== _0x45e1b0) : (!empReqTime[
                    _0x3bdb1c(0x23b)](_0x2ed524 => _0x2ed524[_0x3bdb1c(0x1b7)] === _0x45e1b0) &&
                empReqTime[_0x3bdb1c(0x1a1)]({ 'input': _0x45e1b0 }), unfilledArr['push']({
                    'input': $(
                        this)[_0x3bdb1c(0x1ec)]('name')
                })), empReqTime[_0x3bdb1c(0x280)] === 0x0 ?
            timeFilled = !![] : timeFilled = ![];
    }), $(steps[x])[_0x4fa7a8(0x23b)](_0x4fa7a8(0x171))[
        'each'](function(_0x2ed09b) {
        const _0x3383d7 = _0x4fa7a8;
        $(this)[_0x3383d7(0x19b)]() !== '' ? empReqDate = empReqDate[_0x3383d7(0x19d)](_0x349686 =>
                _0x349686[_0x3383d7(0x1b7)] !== _0x2ed09b) : (!empReqDate[_0x3383d7(0x23b)](_0x523ace =>
                    _0x523ace['input'] === _0x2ed09b) && empReqDate[_0x3383d7(0x1a1)]
                ({ 'input': _0x2ed09b }), unfilledArr[_0x3383d7(0x1a1)]({
                    'input': $(this)[_0x3383d7(
                        0x1ec)]('name')
                })), empReqDate[_0x3383d7(0x280)] === 0x0 ? dateFilled = !![] :
            dateFilled = ![];
    }), $(steps[x])[_0x4fa7a8(0x23b)](':input[type=\x22tel\x22][required]')[
        _0x4fa7a8(0x230)](function(_0x10f5e4) {
        const _0x3c53f0 = _0x4fa7a8;
        if ($(this)['val']() !==
            '') {
            let _0xb3d274 = $(this)[_0x3c53f0(0x19b)]()[_0x3c53f0(0x280)],
                _0x1fbe43 = $(this)[_0x3c53f0(0x1b1)](_0x3c53f0(0xe6)) ? $(this)['data'](_0x3c53f0(
                    0xe6)) : 0x0;
            if ($(this)[_0x3c53f0(0x1b1)](_0x3c53f0(0x291))) {
                var _0x40ee6c =
                    phoneAutoFormat($(this)['data'](_0x3c53f0(0x291)));
                $(this)[_0x3c53f0(0x19b)](_0x40ee6c($(this)[_0x3c53f0(0x19b)]()));
            }
            phoneValidation($(
                this)[_0x3c53f0(0x19b)](), _0xb3d274, _0x1fbe43) ? empReqTel = empReqTel[_0x3c53f0(
                0x19d)](_0x57ddb5 => _0x57ddb5[_0x3c53f0(0x1b7)] !== _0x10f5e4) : empReqTel[_0x3c53f0(
                0x1a1)]({ 'input': _0x10f5e4 });
        } else !empReqTel['find'](_0x151e0b => _0x151e0b[
                _0x3c53f0(0x1b7)] === _0x10f5e4) && empReqTel[_0x3c53f0(0x1a1)]({ 'input': _0x10f5e4 }),
            unfilledArr[_0x3c53f0(0x1a1)]({ 'input': $(this)['attr']('name') });
        empReqTel[_0x3c53f0(0x280)] === 0x0 ? telFilled = !![] : telFilled = ![];
    }), $(steps[x])[
        _0x4fa7a8(0x23b)](_0x4fa7a8(0xa1))[_0x4fa7a8(0x230)](function(_0x2ab515) {
        const _0x141154 =
            _0x4fa7a8;
        $(this)['val']() !== '' ? empReqFile = empReqFile[_0x141154(0x19d)](_0x551c92 => _0x551c92[
                _0x141154(0x1b7)] !== _0x2ab515) : (!empReqFile['find'](_0x4b0582 => _0x4b0582[
                    _0x141154(0x1b7)] === _0x2ab515) && empReqFile[_0x141154(0x1a1)]
                ({ 'input': _0x2ab515 }), unfilledArr[_0x141154(0x1a1)]({
                    'input': $(this)[_0x141154(
                        0x1ec)](_0x141154(0x220))
                })), empReqFile[_0x141154(0x280)] === 0x0 ? fileFilled = !
            ![] : fileFilled = ![];
    }), $(steps[x])[_0x4fa7a8(0x23b)](_0x4fa7a8(0x25a))[_0x4fa7a8(0x230)](
        function(_0x33137e) {
            const _0x344364 = _0x4fa7a8;
            let _0x12cf86 = $(this)[_0x344364(0x19b)]
                ()[_0x344364(0x280)],
                _0xaf759e = $(this)[_0x344364(0x1b1)](_0x344364(0xe6)) ? $(this)[_0x344364(0x1b1)](
                    _0x344364(0xe6)) : 0x0;
            $(this)['val']() !== '' && _0x12cf86 >= _0xaf759e ? empReqNum = empReqNum[_0x344364(0x19d)](
                    _0x2f7b79 => _0x2f7b79[_0x344364(0x1b7)] !== _0x33137e) : (!empReqNum[_0x344364(0x23b)](
                        _0x15166c => _0x15166c['input'] === _0x33137e) && empReqNum[_0x344364(0x1a1)]
                    ({ 'input': _0x33137e }), unfilledArr[_0x344364(0x1a1)]({
                        'input': $(this)[_0x344364(
                            0x1ec)]('name')
                    })), empReqNum[_0x344364(0x280)] === 0x0 ? numFilled = !![] :
                numFilled = ![];
        }), $(steps[x])[_0x4fa7a8(0x23b)]('select[required]')['each'](function(
        _0x44f484) {
        const _0x17a00b = _0x4fa7a8;
        let _0x2d5d1b = $(this)[_0x17a00b(0x19b)]();
        _0x2d5d1b === '' && (_0x2d5d1b = null), _0x2d5d1b != null ? empReqSelect = empReqSelect[
                _0x17a00b(0x19d)](_0x64dab => _0x64dab[_0x17a00b(0x1b7)] !== _0x44f484) : (!
                empReqSelect[_0x17a00b(0x23b)](_0x4c82a7 => _0x4c82a7[_0x17a00b(0x1b7)] ===
                    _0x44f484) && empReqSelect[_0x17a00b(0x1a1)]({ 'input': _0x44f484 }), unfilledArr[
                    _0x17a00b(0x1a1)]({ 'input': $(this)[_0x17a00b(0x1ec)](_0x17a00b(0x220)) })),
            empReqSelect[_0x17a00b(0x280)] === 0x0 ? selectFilled = !![] : selectFilled = ![];
    }), $(
        steps[x])[_0x4fa7a8(0x23b)](_0x4fa7a8(0x2a2))['each'](function(_0x5d4f15) {
        const _0x905d9c =
            _0x4fa7a8;
        let _0x46c644 = $(this)['val']()[_0x905d9c(0x280)],
            _0x1eb964 = $(this)[_0x905d9c(0x1b1)](_0x905d9c(0xe6)) ? $(this)[_0x905d9c(0x1b1)](
                'min-character') : 0x0;
        $(this)[_0x905d9c(0x19b)]() !== '' && _0x46c644 >= _0x1eb964 ? empReqTextarea =
            empReqTextarea['filter'](_0x41865b => _0x41865b[_0x905d9c(0x1b7)] !== _0x5d4f15) : (!
                empReqTextarea['find'](_0x3ae277 => _0x3ae277[_0x905d9c(0x1b7)] === _0x5d4f15) &&
                empReqTextarea[_0x905d9c(0x1a1)]({ 'input': _0x5d4f15 }), unfilledArr[_0x905d9c(0x1a1)]
                ({ 'input': $(this)[_0x905d9c(0x1ec)](_0x905d9c(0x220)) })), empReqTextarea[_0x905d9c(
                0x280)] === 0x0 ? textareaFilled = !![] : textareaFilled = ![];
    }), $(steps[x])[_0x4fa7a8(
        0x23b)](_0x4fa7a8(0x269))[_0x4fa7a8(0x230)](function() {
        const _0x4355e1 = _0x4fa7a8;
        $(this)['val']() !== '' ? validateEmail($(this)[_0x4355e1(0x19b)](), $(this)[_0x4355e1(
            0x1b1)](_0x4355e1(0x22a)), $(this)[_0x4355e1(0x1ec)](_0x4355e1(0x220))) : (
            emailFilled = ![], unfilledArr['push']({
                'input': $(this)[_0x4355e1(0x1ec)](_0x4355e1(
                    0x220))
            }));
    });
    else {
        if ($(steps[x])['data'](_0x4fa7a8(0xc2))) answer = $(steps[x])[_0x4fa7a8(0x23b)](_0x4fa7a8(
            0x26d))['data'](_0x4fa7a8(0xb2)), selections = selections[_0x4fa7a8(0x19d)](_0x5cb5c6 =>
            _0x5cb5c6[_0x4fa7a8(0x137)] !== x), selections['push']({ 'step': x, 'selected': answer });
        else $(steps[x])['find'](_0x4fa7a8(0x16f))['data'](_0x4fa7a8(0xc2)) && (answer = $(steps[x])[
                _0x4fa7a8(0x23b)](_0x4fa7a8(0x16f))['data'](_0x4fa7a8(0xb2)), selections = selections[
                _0x4fa7a8(0x19d)](_0x4d1d28 => _0x4d1d28['step'] !== x), selections[_0x4fa7a8(0x1a1)]
            ({ 'step': x, 'selected': answer }));
        $(steps[x])[_0x4fa7a8(0x23b)](_0x4fa7a8(0x16f))[_0x4fa7a8(0x23b)](_0x4fa7a8(0x255))['is'](
                _0x4fa7a8(0x191)) && (checkCount === '*' || checkCount > $(steps[x])[_0x4fa7a8(0x23b)](
                _0x4fa7a8(0x1d7))['length'] ? $(steps[x])[_0x4fa7a8(0x23b)](
                ':input[type=\x22checkbox\x22]')['each'](function() {
                const _0x38e5a0 = _0x4fa7a8;
                $(this)['is'](_0x38e5a0(0x153)) ? $(steps[x])[_0x38e5a0(0x23b)](':input[required]')[
                    'length'] < 0x1 && (skipTo = undefined, $(this)['parents'](_0x38e5a0(0x14d))[
                    _0x38e5a0(0x1b1)]('skip-to') && (skipTo = $(this)[_0x38e5a0(0x264)](_0x38e5a0(
                    0x14d))[_0x38e5a0(0x1b1)](_0x38e5a0(0x25e))), $(this)[_0x38e5a0(0x264)](_0x38e5a0(
                    0x26d))[_0x38e5a0(0x1ec)](_0x38e5a0(0x190)) && (answer = $(this)[_0x38e5a0(0x264)]
                    (_0x38e5a0(0x26d))[_0x38e5a0(0x1ec)](_0x38e5a0(0x190)), selections = selections[
                        'filter'](_0x4cc898 => _0x4cc898[_0x38e5a0(0x137)] !== x), selections[_0x38e5a0(
                        0x1a1)]({ 'step': x, 'selected': answer }), skipTo && (selections[_0x38e5a0(
                        0x1a1)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[
                        _0x38e5a0(0x96)](_0x3f5ba6 => _0x3f5ba6[_0x38e5a0(0x137)] === x), selections[
                        objIndex][_0x38e5a0(0x1fc)] = parseInt(skipTo) - 0x1, selections[objIndex][
                        _0x38e5a0(0x245)
                    ] = x)), checkboxFilled = !![], $(steps[x])[_0x38e5a0(0x23b)](_0x38e5a0(0xc8))[
                    _0x38e5a0(0x280)] >= $(steps[x])[_0x38e5a0(0x23b)](_0x38e5a0(0x11a))[_0x38e5a0(
                    0x280)] && resetInputErrorMessage($(steps[x])['find'](
                    ':input[type=\x22checkbox\x22]')[_0x38e5a0(0x1ec)](_0x38e5a0(0x220)))) : (
                    checkboxFilled = ![], unfilledArr[_0x38e5a0(0x1a1)]({
                        'input': $(this)[_0x38e5a0(
                            0x1ec)](_0x38e5a0(0x220))
                    }));
            }) : $(steps[x])[_0x4fa7a8(0x23b)](_0x4fa7a8(0x16f))[
                _0x4fa7a8(0x23b)](_0x4fa7a8(0x89))[_0x4fa7a8(0x280)] >= checkCount ? ($(steps[x])[
                _0x4fa7a8(0x23b)](_0x4fa7a8(0x16f))[_0x4fa7a8(0x23b)](_0x4fa7a8(0x1d7))[_0x4fa7a8(
                0x264)](_0x4fa7a8(0x26d))[_0x4fa7a8(0x1ec)](_0x4fa7a8(0x190)) && (skipTo = undefined, $(
                    steps[x])[_0x4fa7a8(0x23b)](_0x4fa7a8(0x16f))[_0x4fa7a8(0x23b)](
                    ':input[type=\x22checkbox\x22]')[_0x4fa7a8(0x264)](_0x4fa7a8(0x14d))[_0x4fa7a8(0x1ec)]
                (_0x4fa7a8(0x270)) && (skipTo = $(steps[x])[_0x4fa7a8(0x23b)](_0x4fa7a8(0x16f))[
                    _0x4fa7a8(0x23b)](_0x4fa7a8(0x89))[_0x4fa7a8(0x264)](_0x4fa7a8(0x14d))[_0x4fa7a8(
                    0x1ec)](_0x4fa7a8(0x270))), answer = $(steps[x])[_0x4fa7a8(0x23b)](
                    '.active-answer-card')[_0x4fa7a8(0x23b)](':input[type=\x22checkbox\x22]')[_0x4fa7a8(
                    0x264)](_0x4fa7a8(0x26d))[_0x4fa7a8(0x1ec)](_0x4fa7a8(0x190)), selections =
                selections[_0x4fa7a8(0x19d)](_0x4fc727 => _0x4fc727[_0x4fa7a8(0x137)] !== x),
                selections[_0x4fa7a8(0x1a1)]({ 'step': x, 'selected': answer }), skipTo && (selections =
                    selections[_0x4fa7a8(0x19d)](_0x17d17f => _0x17d17f[_0x4fa7a8(0x137)] !== skipTo -
                        0x2), selections['push']({ 'step': skipTo - 0x2, 'selected': answer }), objIndex =
                    selections['findIndex'](_0x3dcf77 => _0x3dcf77[_0x4fa7a8(0x137)] === x), selections[
                        objIndex][_0x4fa7a8(0x1fc)] = parseInt(skipTo) - 0x1, selections[objIndex][
                        _0x4fa7a8(0x245)
                    ] = x)), checkboxFilled = !![], $(steps[x])['find'](
                ':input[type=\x22checkbox\x22][required]:checked')[_0x4fa7a8(0x280)] >= $(steps[x])[
                _0x4fa7a8(0x23b)](_0x4fa7a8(0x11a))[_0x4fa7a8(0x280)] && resetInputErrorMessage($(steps[
                x])[_0x4fa7a8(0x23b)](':input[type=\x22checkbox\x22]')['attr'](_0x4fa7a8(0x220)))) : (
                checkboxFilled = ![], $(steps[x])['find'](_0x4fa7a8(0x11a))[_0x4fa7a8(0x230)](
                    function() {
                        const _0x8c3498 = _0x4fa7a8;
                        $(this)[_0x8c3498(0x260)](_0x8c3498(0x153)) && unfilledArr['push']({
                            'input': $(this)[
                                'attr'](_0x8c3498(0x220))
                        });
                    }))), $(steps[x])[_0x4fa7a8(0x23b)](_0x4fa7a8(0x16f))[
                'find'](_0x4fa7a8(0x131))[_0x4fa7a8(0x230)](function(_0xa50e4f) {
                const _0x113fab =
                    _0x4fa7a8;
                var _0x57b533 = $(this)[_0x113fab(0x1ec)](_0x113fab(0x220));
                $(_0x113fab(0x284) + _0x57b533 + _0x113fab(0x201))[_0x113fab(0x280)] == 0x0 ? (!
                    empReqRadio['find'](_0x3f7d2a => _0x3f7d2a[_0x113fab(0x1b7)] === _0xa50e4f) &&
                    empReqRadio[_0x113fab(0x1a1)]({ 'input': _0xa50e4f }), unfilledArr[_0x113fab(0x1a1)]
                    ({ 'input': $(this)[_0x113fab(0x1ec)]('name') })) : empReqRadio = empReqRadio[_0x113fab(
                    0x19d)](_0x880b52 => _0x880b52['input'] !== _0xa50e4f), empReqRadio[_0x113fab(
                    0x280)] === 0x0 ? radioFilled = !![] : radioFilled = ![];
            }), $(steps[x])[_0x4fa7a8(
                0x23b)]('.active-answer-card')[_0x4fa7a8(0x23b)](_0x4fa7a8(0x261))['each'](function(
                _0x19f9e5) {
                const _0x517440 = _0x4fa7a8;
                let _0x587098 = $(this)[_0x517440(0x19b)]()[
                        _0x517440(0x280)],
                    _0x141c77 = $(this)[_0x517440(0x1b1)](_0x517440(0xe6)) ? $(this)[_0x517440(0x1b1)](
                        _0x517440(0xe6)) : 0x0;
                $(this)[_0x517440(0x19b)]() !== '' && _0x587098 >= _0x141c77 ? empReqInput = empReqInput[
                    _0x517440(0x19d)](_0x43f090 => _0x43f090[_0x517440(0x1b7)] !== _0x19f9e5) : (!
                    empReqInput[_0x517440(0x23b)](_0x28dac1 => _0x28dac1['input'] === _0x19f9e5) &&
                    empReqInput[_0x517440(0x1a1)]({ 'input': _0x19f9e5 }), unfilledArr[_0x517440(0x1a1)]
                    ({ 'input': $(this)[_0x517440(0x1ec)](_0x517440(0x220)) })), empReqInput[_0x517440(
                    0x280)] === 0x0 ? inputFilled = !![] : inputFilled = ![];
            }), $(steps[x])['find'](
                _0x4fa7a8(0x16f))[_0x4fa7a8(0x23b)](_0x4fa7a8(0x21b))[_0x4fa7a8(0x230)](function(
                _0x4209bd) {
                const _0x3f1233 = _0x4fa7a8;
                skipTo = undefined, $(this)[_0x3f1233(0x264)](_0x3f1233(0x14d))['data']('skip-to') !==
                    '' && (skipTo = $(this)[_0x3f1233(0x264)](_0x3f1233(0x14d))['data'](_0x3f1233(0x25e))),
                    $(this)[_0x3f1233(0x264)]('[data-go-to]')[_0x3f1233(0x1ec)]('data-go-to') && (answer =
                        $(this)['parents']('[data-go-to]')[_0x3f1233(0x1ec)](_0x3f1233(0x190)), selections =
                        selections[_0x3f1233(0x19d)](_0x507511 => _0x507511[_0x3f1233(0x137)] !== x),
                        selections[_0x3f1233(0x1a1)]({ 'step': x, 'selected': answer }), skipTo && (
                            selections[_0x3f1233(0x1a1)]({ 'step': skipTo - 0x2, 'selected': answer }),
                            objIndex = selections[_0x3f1233(0x96)](_0x47d1b8 => _0x47d1b8[_0x3f1233(0x137)] ===
                                x), selections[objIndex][_0x3f1233(0x1fc)] = parseInt(skipTo) - 0x1, selections[
                                objIndex][_0x3f1233(0x245)] = x));
            }), $(steps[x])['find'](_0x4fa7a8(0x16f))[
                _0x4fa7a8(0x23b)](_0x4fa7a8(0x20c))[_0x4fa7a8(0x230)](function(_0x8dd6b) {
                const
                    _0x2bcff5 = _0x4fa7a8;
                let _0x572ed3 = $(this)[_0x2bcff5(0x19b)]()[_0x2bcff5(0x280)],
                    _0x1588d1 = $(this)[_0x2bcff5(0x1b1)]('min-character') ? $(this)[_0x2bcff5(0x1b1)](
                        'min-character') : 0x0;
                $(this)[_0x2bcff5(0x19b)]() !== '' && _0x572ed3 >= _0x1588d1 ? empReqPassword =
                    empReqPassword[_0x2bcff5(0x19d)](_0x202aae => _0x202aae[_0x2bcff5(0x1b7)] !==
                        _0x8dd6b) : (!empReqPassword[_0x2bcff5(0x23b)](_0x2f710e => _0x2f710e[_0x2bcff5(
                            0x1b7)] === _0x8dd6b) && empReqPassword[_0x2bcff5(0x1a1)]({ 'input': _0x8dd6b }),
                        unfilledArr[_0x2bcff5(0x1a1)]({ 'input': $(this)['attr'](_0x2bcff5(0x220)) })),
                    empReqPassword['length'] === 0x0 ? passwordFilled = !![] : passwordFilled = ![];
            }), $(
                steps[x])[_0x4fa7a8(0x23b)](_0x4fa7a8(0x16f))[_0x4fa7a8(0x23b)](_0x4fa7a8(0x10d))[_0x4fa7a8(
                0x230)](function(_0x12e395) {
                const _0x57cac5 = _0x4fa7a8;
                skipTo = undefined, $(this)['parents'](_0x57cac5(0x14d))['data'](_0x57cac5(0x25e)) !==
                    '' && (skipTo = $(this)[_0x57cac5(0x264)]('[data-skip-to]')[_0x57cac5(0x1b1)](_0x57cac5(
                        0x25e))), $(this)[_0x57cac5(0x264)](_0x57cac5(0x26d))['attr']('data-go-to') && (
                        answer = $(this)[_0x57cac5(0x264)](_0x57cac5(0x26d))['attr'](_0x57cac5(0x190)),
                        selections = selections[_0x57cac5(0x19d)](_0x1814c7 => _0x1814c7[_0x57cac5(0x137)] !==
                            x), selections[_0x57cac5(0x1a1)]({ 'step': x, 'selected': answer }), skipTo && (
                            selections[_0x57cac5(0x1a1)]({ 'step': skipTo - 0x2, 'selected': answer }),
                            objIndex = selections['findIndex'](_0x73683f => _0x73683f[_0x57cac5(0x137)] === x),
                            selections[objIndex][_0x57cac5(0x1fc)] = parseInt(skipTo) - 0x1, selections[
                                objIndex][_0x57cac5(0x245)] = x));
            }), $(steps[x])[_0x4fa7a8(0x23b)](_0x4fa7a8(
                0x16f))[_0x4fa7a8(0x23b)](_0x4fa7a8(0x25c))[_0x4fa7a8(0x230)](function(_0x346005) {
                const
                    _0x525a5c = _0x4fa7a8;
                let _0x47415 = $(this)[_0x525a5c(0x19b)]()[_0x525a5c(0x280)],
                    _0x22024a = $(this)[_0x525a5c(0x1b1)](_0x525a5c(0xe6)) ? $(this)['data'](_0x525a5c(
                        0xe6)) : 0x0;
                $(this)[_0x525a5c(0x19b)]() !== '' && _0x47415 >= _0x22024a ? empReqUrl = empReqUrl[
                        _0x525a5c(0x19d)](_0x39ead3 => _0x39ead3[_0x525a5c(0x1b7)] !== _0x346005) : (!
                        empReqUrl[_0x525a5c(0x23b)](_0x56c83b => _0x56c83b[_0x525a5c(0x1b7)] === _0x346005) &&
                        empReqUrl[_0x525a5c(0x1a1)]({ 'input': _0x346005 }), unfilledArr[_0x525a5c(0x1a1)]
                        ({ 'input': $(this)['attr'](_0x525a5c(0x220)) })), empReqUrl[_0x525a5c(0x280)] ===
                    0x0 && validateURL($(this)[_0x525a5c(0x19b)]()) ? urlFilled = !![] : urlFilled = ![];
            }),
            $(steps[x])['find'](_0x4fa7a8(0x16f))[_0x4fa7a8(0x23b)](':input[type=\x22url\x22]')['each'](
                function(_0x5836c2) {
                    const _0x5a457b = _0x4fa7a8;
                    skipTo = undefined, $(this)[_0x5a457b(0x264)](_0x5a457b(0x14d))[_0x5a457b(0x1b1)](
                        _0x5a457b(0x25e)) !== '' && (skipTo = $(this)['parents'](_0x5a457b(0x14d))[_0x5a457b(
                        0x1b1)](_0x5a457b(0x25e))), $(this)['parents'](_0x5a457b(0x26d))['attr'](_0x5a457b(
                        0x190)) && (answer = $(this)[_0x5a457b(0x264)](_0x5a457b(0x26d))[_0x5a457b(0x1ec)](
                            _0x5a457b(0x190)), selections = selections['filter'](_0x5c4f01 => _0x5c4f01[
                            _0x5a457b(0x137)] !== x), selections['push']({ 'step': x, 'selected': answer }),
                        skipTo && (selections[_0x5a457b(0x1a1)]({ 'step': skipTo - 0x2, 'selected': answer }),
                            objIndex = selections[_0x5a457b(0x96)](_0x5904f9 => _0x5904f9['step'] === x),
                            selections[objIndex][_0x5a457b(0x1fc)] = parseInt(skipTo) - 0x1, selections[
                                objIndex][_0x5a457b(0x245)] = x));
                }), $(steps[x])['find'](_0x4fa7a8(0x16f))[
                _0x4fa7a8(0x23b)](_0x4fa7a8(0x171))[_0x4fa7a8(0x230)](function(_0x5c10c5) {
                const
                    _0x3f6ce7 = _0x4fa7a8;
                $(this)[_0x3f6ce7(0x19b)]() !== '' ? empReqDate = empReqDate['filter'](_0xe3cb09 =>
                        _0xe3cb09[_0x3f6ce7(0x1b7)] !== _0x5c10c5) : (!empReqDate['find'](_0x4db1ab =>
                            _0x4db1ab['input'] === _0x5c10c5) && empReqDate[_0x3f6ce7(0x1a1)]
                        ({ 'input': _0x5c10c5 }), unfilledArr[_0x3f6ce7(0x1a1)]({
                            'input': $(this)[_0x3f6ce7(
                                0x1ec)](_0x3f6ce7(0x220))
                        })), empReqDate[_0x3f6ce7(0x280)] === 0x0 ? dateFilled = !
                    ![] : dateFilled = ![];
            }), $(steps[x])[_0x4fa7a8(0x23b)](_0x4fa7a8(0x16f))['find'](
                _0x4fa7a8(0x158))[_0x4fa7a8(0x230)](function(_0x11bfaa) {
                const _0xef02b4 = _0x4fa7a8;
                skipTo = undefined, $(this)['parents'](_0xef02b4(0x14d))[_0xef02b4(0x1b1)](_0xef02b4(
                    0x25e)) !== '' && (skipTo = $(this)[_0xef02b4(0x264)](_0xef02b4(0x14d))[_0xef02b4(
                    0x1b1)](_0xef02b4(0x25e))), $(this)['parents'](_0xef02b4(0x26d))[_0xef02b4(0x1ec)](
                    _0xef02b4(0x190)) && (answer = $(this)[_0xef02b4(0x264)](_0xef02b4(0x26d))[_0xef02b4(
                        0x1ec)](_0xef02b4(0x190)), selections = selections[_0xef02b4(0x19d)](_0x16bacf =>
                        _0x16bacf[_0xef02b4(0x137)] !== x), selections[_0xef02b4(0x1a1)]
                    ({ 'step': x, 'selected': answer }), skipTo && (selections[_0xef02b4(0x1a1)]
                        ({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0xef02b4(0x96)]
                        (_0x3711f9 => _0x3711f9[_0xef02b4(0x137)] === x), selections[objIndex][_0xef02b4(
                            0x1fc)] = parseInt(skipTo) - 0x1, selections[objIndex][_0xef02b4(0x245)] = x));
            }), $(
                steps[x])[_0x4fa7a8(0x23b)]('.active-answer-card')[_0x4fa7a8(0x23b)](
                ':input[type=\x22time\x22][required]')['each'](function(_0x4d0120) {
                const _0x9e8b54 =
                    _0x4fa7a8;
                $(this)[_0x9e8b54(0x19b)]() !== '' ? empReqTime = empReqTime['filter'](_0x4b6b70 =>
                        _0x4b6b70[_0x9e8b54(0x1b7)] !== _0x4d0120) : (!empReqTime[_0x9e8b54(0x23b)](
                        _0x40c13f => _0x40c13f[_0x9e8b54(0x1b7)] === _0x4d0120) && empReqTime[_0x9e8b54(
                        0x1a1)]({ 'input': _0x4d0120 }), unfilledArr[_0x9e8b54(0x1a1)]({
                        'input': $(this)[
                            _0x9e8b54(0x1ec)](_0x9e8b54(0x220))
                    })), empReqTime[_0x9e8b54(0x280)] === 0x0 ?
                    timeFilled = !![] : timeFilled = ![];
            }), $(steps[x])['find'](_0x4fa7a8(0x16f))[_0x4fa7a8(
                0x23b)](_0x4fa7a8(0x1d1))['each'](function(_0xcc4d5) {
                const _0x42199a = _0x4fa7a8;
                skipTo = undefined, $(this)[_0x42199a(0x264)](_0x42199a(0x14d))['data'](_0x42199a(
                    0x25e)) !== '' && (skipTo = $(this)[_0x42199a(0x264)](_0x42199a(0x14d))[_0x42199a(
                    0x1b1)](_0x42199a(0x25e))), $(this)[_0x42199a(0x264)](_0x42199a(0x26d))[_0x42199a(
                    0x1ec)](_0x42199a(0x190)) && (answer = $(this)['parents']('[data-go-to]')[_0x42199a(
                        0x1ec)](_0x42199a(0x190)), selections = selections[_0x42199a(0x19d)](_0x419b21 =>
                        _0x419b21[_0x42199a(0x137)] !== x), selections[_0x42199a(0x1a1)]
                    ({ 'step': x, 'selected': answer }), skipTo && (selections['push']({
                            'step': skipTo -
                                0x2,
                            'selected': answer
                        }), objIndex = selections[_0x42199a(0x96)](_0x2aa17b =>
                            _0x2aa17b[_0x42199a(0x137)] === x), selections[objIndex][_0x42199a(0x1fc)] =
                        parseInt(skipTo) - 0x1, selections[objIndex][_0x42199a(0x245)] = x));
            }), $(steps[x])[
                _0x4fa7a8(0x23b)](_0x4fa7a8(0x16f))[_0x4fa7a8(0x23b)](_0x4fa7a8(0x25a))[_0x4fa7a8(0x230)](
                function(_0x170fd8) {
                    const _0x588412 = _0x4fa7a8;
                    let _0x46bc62 = $(this)[_0x588412(
                            0x19b)]()['length'],
                        _0x232fa3 = $(this)[_0x588412(0x1b1)](_0x588412(0xe6)) ? $(this)[_0x588412(0x1b1)](
                            _0x588412(0xe6)) : 0x0;
                    $(this)[_0x588412(0x19b)]() !== '' && _0x46bc62 >= _0x232fa3 ? empReqNum = empReqNum[
                        _0x588412(0x19d)](_0x4c466f => _0x4c466f[_0x588412(0x1b7)] !== _0x170fd8) : (!
                        empReqNum[_0x588412(0x23b)](_0x1cdba2 => _0x1cdba2['input'] === _0x170fd8) &&
                        empReqNum[_0x588412(0x1a1)]({ 'input': _0x170fd8 }), unfilledArr[_0x588412(0x1a1)]
                        ({ 'input': $(this)[_0x588412(0x1ec)](_0x588412(0x220)) })), empReqNum[_0x588412(
                        0x280)] === 0x0 ? numFilled = !![] : numFilled = ![];
                }), $(steps[x])['find'](
                '.active-answer-card')[_0x4fa7a8(0x23b)](_0x4fa7a8(0x18f))[_0x4fa7a8(0x230)](function(
                _0x5d0a8a) {
                const _0x21d059 = _0x4fa7a8;
                skipTo = undefined, $(this)[_0x21d059(0x264)]('[data-skip-to]')['data'](_0x21d059(
                    0x25e)) !== '' && (skipTo = $(this)[_0x21d059(0x264)](_0x21d059(0x14d))['data'](
                    _0x21d059(0x25e))), $(this)['parents']('[data-go-to]')[_0x21d059(0x1ec)](_0x21d059(
                    0x190)) && (answer = $(this)[_0x21d059(0x264)](_0x21d059(0x26d))[_0x21d059(0x1ec)](
                        _0x21d059(0x190)), selections = selections[_0x21d059(0x19d)](_0x1c0791 => _0x1c0791[
                        _0x21d059(0x137)] !== x), selections['push']({ 'step': x, 'selected': answer }),
                    skipTo && (selections[_0x21d059(0x1a1)]({ 'step': skipTo - 0x2, 'selected': answer }),
                        objIndex = selections[_0x21d059(0x96)](_0x33272c => _0x33272c[_0x21d059(0x137)] ===
                            x), selections[objIndex]['skipTo'] = parseInt(skipTo) - 0x1, selections[objIndex][
                            _0x21d059(0x245)
                        ] = x));
            }), $(steps[x])[_0x4fa7a8(0x23b)](_0x4fa7a8(0x16f))[_0x4fa7a8(0x23b)](
                ':input[type=\x22tel\x22][required]')['each'](function(_0x414473) {
                const _0x5a9fd7 =
                    _0x4fa7a8;
                if ($(this)[_0x5a9fd7(0x19b)]() !== '') {
                    let _0x2ce0da = $(this)[_0x5a9fd7(
                            0x19b)]()['length'],
                        _0x56be5d = $(this)['data'](_0x5a9fd7(0xe6)) ? $(this)[_0x5a9fd7(0x1b1)](_0x5a9fd7(
                            0xe6)) : 0x0;
                    if ($(this)[_0x5a9fd7(0x1b1)]('phone-autoformat')) {
                        var _0x36d439 =
                            phoneAutoFormat($(this)['data'](_0x5a9fd7(0x291)));
                        $(this)['val'](_0x36d439($(this)[_0x5a9fd7(0x19b)]()));
                    }
                    phoneValidation($(this)[
                            _0x5a9fd7(0x19b)](), _0x2ce0da, _0x56be5d) ? empReqTel = empReqTel[_0x5a9fd7(0x19d)]
                        (_0x25fc3d => _0x25fc3d[_0x5a9fd7(0x1b7)] !== _0x414473) : empReqTel[_0x5a9fd7(0x1a1)]
                        ({ 'input': _0x414473 });
                } else !empReqTel[_0x5a9fd7(0x23b)](_0x2f057e => _0x2f057e[
                        _0x5a9fd7(0x1b7)] === _0x414473) && empReqTel[_0x5a9fd7(0x1a1)]
                    ({ 'input': _0x414473 }), unfilledArr[_0x5a9fd7(0x1a1)]({
                        'input': $(this)[_0x5a9fd7(
                            0x1ec)](_0x5a9fd7(0x220))
                    });
                empReqTel[_0x5a9fd7(0x280)] === 0x0 ? telFilled = !![] : telFilled = ![];
            }), $(steps[x])[
                _0x4fa7a8(0x23b)](_0x4fa7a8(0x16f))['find'](_0x4fa7a8(0x27c))[_0x4fa7a8(0x230)](function(
                _0x601cd5) {
                const _0x254b7b = _0x4fa7a8;
                skipTo = undefined, $(this)[_0x254b7b(0x264)](_0x254b7b(0x14d))['data'](_0x254b7b(
                    0x25e)) !== '' && (skipTo = $(this)[_0x254b7b(0x264)](_0x254b7b(0x14d))[_0x254b7b(
                    0x1b1)](_0x254b7b(0x25e))), $(this)[_0x254b7b(0x264)](_0x254b7b(0x26d))['attr'](
                    _0x254b7b(0x190)) && (answer = $(this)[_0x254b7b(0x264)](_0x254b7b(0x26d))[_0x254b7b(
                        0x1ec)](_0x254b7b(0x190)), selections = selections[_0x254b7b(0x19d)](_0x1e03c8 =>
                        _0x1e03c8[_0x254b7b(0x137)] !== x), selections[_0x254b7b(0x1a1)]
                    ({ 'step': x, 'selected': answer }), skipTo && (selections[_0x254b7b(0x1a1)]
                        ({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x254b7b(0x96)]
                        (_0x3fa8a4 => _0x3fa8a4[_0x254b7b(0x137)] === x), selections[objIndex]['skipTo'] =
                        parseInt(skipTo) - 0x1, selections[objIndex]['backTo'] = x));
            }), $(steps[x])[_0x4fa7a8(
                0x23b)](_0x4fa7a8(0x16f))[_0x4fa7a8(0x23b)](_0x4fa7a8(0xa1))['each'](function(
                _0x1aea25) {
                const _0x3419ba = _0x4fa7a8;
                $(this)[_0x3419ba(0x19b)]() !== '' ? empReqFile = empReqFile[_0x3419ba(0x19d)](
                        _0x52aa59 => _0x52aa59['input'] !== _0x1aea25) : (!empReqFile[_0x3419ba(0x23b)](
                        _0x34b866 => _0x34b866[_0x3419ba(0x1b7)] === _0x1aea25) && empReqFile[_0x3419ba(
                        0x1a1)]({ 'input': _0x1aea25 }), unfilledArr[_0x3419ba(0x1a1)]({
                        'input': $(this)[
                            'attr'](_0x3419ba(0x220))
                    })), empReqFile[_0x3419ba(0x280)] === 0x0 ? fileFilled = !
                    ![] : fileFilled = ![];
            }), $(steps[x])[_0x4fa7a8(0x23b)](_0x4fa7a8(0x16f))['find'](
                _0x4fa7a8(0x154))[_0x4fa7a8(0x230)](function(_0x390c78) {
                const _0x3e400b = _0x4fa7a8;
                skipTo = undefined, $(this)[_0x3e400b(0x264)]('[data-skip-to]')[_0x3e400b(0x1b1)](
                    'skip-to') !== '' && (skipTo = $(this)[_0x3e400b(0x264)](_0x3e400b(0x14d))[_0x3e400b(
                    0x1b1)](_0x3e400b(0x25e))), $(this)[_0x3e400b(0x264)](_0x3e400b(0x26d))['attr'](
                    _0x3e400b(0x190)) && (answer = $(this)['parents']('[data-go-to]')[_0x3e400b(0x1ec)](
                        _0x3e400b(0x190)), selections = selections[_0x3e400b(0x19d)](_0xbf0acf => _0xbf0acf[
                        _0x3e400b(0x137)] !== x), selections[_0x3e400b(0x1a1)]
                    ({ 'step': x, 'selected': answer }), skipTo && (selections[_0x3e400b(0x1a1)]
                        ({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections['findIndex'](
                            _0x2283d5 => _0x2283d5['step'] === x), selections[objIndex]['skipTo'] = parseInt(
                            skipTo) - 0x1, selections[objIndex]['backTo'] = x));
            }), $(steps[x])[_0x4fa7a8(0x23b)](
                '.active-answer-card')['find'](_0x4fa7a8(0x148))['each'](function(_0x2e0a7a) {
                const
                    _0x5403dd = _0x4fa7a8;
                $(this)[_0x5403dd(0x19b)]() !== null && $(this)[_0x5403dd(0x19b)]() !== '' ?
                    empReqSelect = empReqSelect[_0x5403dd(0x19d)](_0xa3d972 => _0xa3d972[_0x5403dd(
                        0x1b7)] !== _0x2e0a7a) : (!empReqSelect['find'](_0x42c41b => _0x42c41b[_0x5403dd(
                            0x1b7)] === _0x2e0a7a) && empReqSelect[_0x5403dd(0x1a1)]({ 'input': _0x2e0a7a }),
                        unfilledArr[_0x5403dd(0x1a1)]({
                            'input': $(this)[_0x5403dd(0x1ec)](_0x5403dd(
                                0x220))
                        })), empReqSelect[_0x5403dd(0x280)] === 0x0 ? selectFilled = !![] :
                    selectFilled = ![];
            }), $(steps[x])['find'](_0x4fa7a8(0x16f))[_0x4fa7a8(0x23b)](_0x4fa7a8(
                0x178))[_0x4fa7a8(0x230)](function(_0x139075) {
                const _0x35dde8 = _0x4fa7a8;
                skipTo = undefined, $(this)[_0x35dde8(0x264)](_0x35dde8(0x14d))[_0x35dde8(0x1b1)](
                    _0x35dde8(0x25e)) !== '' && (skipTo = $(this)[_0x35dde8(0x264)](_0x35dde8(0x14d))[
                    'data']('skip-to')), $(this)[_0x35dde8(0x264)](_0x35dde8(0x26d))[_0x35dde8(0x1ec)](
                    _0x35dde8(0x190)) && (answer = $(this)['parents'](_0x35dde8(0x26d))[_0x35dde8(0x1ec)](
                        _0x35dde8(0x190)), selections = selections[_0x35dde8(0x19d)](_0x2f7425 => _0x2f7425[
                        _0x35dde8(0x137)] !== x), selections[_0x35dde8(0x1a1)]
                    ({ 'step': x, 'selected': answer }), skipTo && (selections[_0x35dde8(0x1a1)]
                        ({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x35dde8(0x96)]
                        (_0x3379f4 => _0x3379f4[_0x35dde8(0x137)] === x), selections[objIndex][_0x35dde8(
                            0x1fc)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x35dde8(0x245)] = x));
            }), $(
                steps[x])[_0x4fa7a8(0x23b)](_0x4fa7a8(0x16f))['find']('textarea[required]')[_0x4fa7a8(
                0x230)](function(_0x13ddc7) {
                const _0x114cf1 = _0x4fa7a8;
                let _0x632a = $(this)[_0x114cf1(
                        0x19b)]()['length'],
                    _0x3b00ba = $(this)[_0x114cf1(0x1b1)](_0x114cf1(0xe6)) ? $(this)[_0x114cf1(0x1b1)](
                        _0x114cf1(0xe6)) : 0x0;
                $(this)[_0x114cf1(0x19b)]() !== '' && _0x632a >= _0x3b00ba ? empReqTextarea =
                    empReqTextarea[_0x114cf1(0x19d)](_0x2da51d => _0x2da51d[_0x114cf1(0x1b7)] !==
                        _0x13ddc7) : (!empReqTextarea[_0x114cf1(0x23b)](_0x2dbd91 => _0x2dbd91[_0x114cf1(
                            0x1b7)] === _0x13ddc7) && empReqTextarea['push']({ 'input': _0x13ddc7 }),
                        unfilledArr[_0x114cf1(0x1a1)]({
                            'input': $(this)[_0x114cf1(0x1ec)](_0x114cf1(
                                0x220))
                        })), empReqTextarea[_0x114cf1(0x280)] === 0x0 ? textareaFilled = !![] :
                    textareaFilled = ![];
            }), $(steps[x])[_0x4fa7a8(0x23b)](_0x4fa7a8(0x16f))[_0x4fa7a8(
                0x23b)](_0x4fa7a8(0x133))[_0x4fa7a8(0x230)](function(_0x878945) {
                const _0x39409b =
                    _0x4fa7a8;
                skipTo = undefined, $(this)['parents']('[data-skip-to]')['data'](_0x39409b(0x25e)) !==
                    '' && (skipTo = $(this)[_0x39409b(0x264)](_0x39409b(0x14d))['data']('skip-to')), $(
                        this)[_0x39409b(0x264)](_0x39409b(0x26d))[_0x39409b(0x1ec)](_0x39409b(0x190)) && (
                        answer = $(this)[_0x39409b(0x264)](_0x39409b(0x26d))[_0x39409b(0x1ec)](_0x39409b(
                            0x190)), selections = selections[_0x39409b(0x19d)](_0x120b36 => _0x120b36[_0x39409b(
                            0x137)] !== x), selections[_0x39409b(0x1a1)]({ 'step': x, 'selected': answer }),
                        skipTo && (selections[_0x39409b(0x1a1)]({ 'step': skipTo - 0x2, 'selected': answer }),
                            objIndex = selections[_0x39409b(0x96)](_0x51ef72 => _0x51ef72[_0x39409b(0x137)] ===
                                x), selections[objIndex][_0x39409b(0x1fc)] = parseInt(skipTo) - 0x1, selections[
                                objIndex]['backTo'] = x));
            }), $(steps[x])[_0x4fa7a8(0x23b)](_0x4fa7a8(0x16f))[
                _0x4fa7a8(0x23b)](':input[type=\x22email\x22][required]')[_0x4fa7a8(0x230)](function(
                _0x55f072) {
                const _0x127d4f = _0x4fa7a8;
                $(this)['val']() !== '' ? validateEmail($(this)['val'](), $(this)['data'](_0x127d4f(
                    0x22a)), $(this)['attr']('name')) : (emailFilled = ![], unfilledArr['push']
                    ({ 'input': $(this)[_0x127d4f(0x1ec)](_0x127d4f(0x220)) }));
            }), $(steps[x])['find'](
                _0x4fa7a8(0x16f))[_0x4fa7a8(0x23b)](_0x4fa7a8(0x1ab))[_0x4fa7a8(0x230)](function(
                _0x1fd3e4) {
                const _0x20aa05 = _0x4fa7a8;
                skipTo = undefined, $(this)[_0x20aa05(0x264)](_0x20aa05(0x14d))['data'](_0x20aa05(
                    0x25e)) !== '' && (skipTo = $(this)['parents'](_0x20aa05(0x14d))['data']('skip-to')), $(
                    this)['parents'](_0x20aa05(0x26d))['attr'](_0x20aa05(0x190)) && (answer = $(this)[
                        _0x20aa05(0x264)](_0x20aa05(0x26d))[_0x20aa05(0x1ec)](_0x20aa05(0x190)),
                    selections = selections[_0x20aa05(0x19d)](_0x24b48f => _0x24b48f[_0x20aa05(0x137)] !==
                        x), selections[_0x20aa05(0x1a1)]({ 'step': x, 'selected': answer }), skipTo && (
                        selections['push']({ 'step': skipTo - 0x2, 'selected': answer }), objIndex =
                        selections[_0x20aa05(0x96)](_0x245d65 => _0x245d65[_0x20aa05(0x137)] === x),
                        selections[objIndex][_0x20aa05(0x1fc)] = parseInt(skipTo) - 0x1, selections[
                            objIndex][_0x20aa05(0x245)] = x));
            });
    }
    $(steps[x])[_0x4fa7a8(0x23b)](_0x4fa7a8(
            0x1cb))['is'](_0x4fa7a8(0x153)) && (selArr = [], $(steps)['find'](_0x4fa7a8(0x282))['each'](
                function(_0x27a69f, _0x21f1d6) {
                    const _0x52a63f = _0x4fa7a8;
                    selArr['push']({ 'selected': $(this)[_0x52a63f(0x1b1)](_0x52a63f(0xa0)) });
                }),
            selString = [], selArr[_0x4fa7a8(0x1f5)](_0x34759c => selString[_0x4fa7a8(0x1a1)](_0x34759c[
                _0x4fa7a8(0xa0)])), $(steps[x])[_0x4fa7a8(0x23b)](_0x4fa7a8(0x16f))['find'](_0x4fa7a8(
                0x11b))[_0x4fa7a8(0x230)](function() {
                const _0x23b171 = _0x4fa7a8;
                skipTo = undefined;
                if ($(this)['parents'](_0x23b171(0x14d))[_0x23b171(0x1b1)](_0x23b171(
                        0x25e))) skipTo = $(this)[_0x23b171(0x264)](_0x23b171(0x14d))[_0x23b171(0x1b1)](
                    _0x23b171(0x25e));
                else $(this)['data']('skip-to') && (skipTo = $(this)[_0x23b171(0x1b1)](_0x23b171(0x25e)));
                selections = selections[_0x23b171(0x19d)](_0x3cdeaa => _0x3cdeaa[_0x23b171(0x137)] !==
                    x);
                if ($(this)[_0x23b171(0x1b1)](_0x23b171(0xb2))) answer = $(this)[_0x23b171(0x1ec)](
                        _0x23b171(0x190)), selections[_0x23b171(0x1a1)]({ 'step': x, 'selected': answer }),
                    skipTo && (selections[_0x23b171(0x1a1)]({ 'step': skipTo - 0x2, 'selected': answer }),
                        objIndex = selections['findIndex'](_0x412a89 => _0x412a89[_0x23b171(0x137)] === x),
                        selections[objIndex][_0x23b171(0x1fc)] = parseInt(skipTo) - 0x1, selections[objIndex][
                            _0x23b171(0x245)
                        ] = x);
                else $(this)['parents'](_0x23b171(0x26d))[_0x23b171(0x1b1)](_0x23b171(0xb2)) && (answer =
                    $(this)[_0x23b171(0x264)](_0x23b171(0x26d))[_0x23b171(0x1b1)]('go-to'), selections[
                        _0x23b171(0x1a1)]({ 'step': x, 'selected': answer }), skipTo && (selections[
                            _0x23b171(0x1a1)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex =
                        selections[_0x23b171(0x96)](_0x4dbabc => _0x4dbabc[_0x23b171(0x137)] === x),
                        selections[objIndex][_0x23b171(0x1fc)] = parseInt(skipTo) - 0x1, selections[
                            objIndex][_0x23b171(0x245)] = x));
            }), logicExtra ? ($(steps[x])['find'](_0x4fa7a8(
                    0x16f))['find']('[data-radio-skip]:visible')[_0x4fa7a8(0x1b1)](_0x4fa7a8(0x17f)) === !
                ![] || $(steps[x])[_0x4fa7a8(0x23b)](_0x4fa7a8(0x164))['data'](_0x4fa7a8(0x17f)) === !![]) &&
            (skip && selections[_0x4fa7a8(0x19d)](_0x193a7f => _0x193a7f[_0x4fa7a8(0x137)] === x)[
                _0x4fa7a8(0x280)] > 0x0 && (textareaLength === 0x0 && textInputLength === 0x0 &&
                emailInputLength === 0x0 && checkboxInputLength === 0x0 && setTimeout(function() {
                    next
                        = !![], nextStep(), selectionQuiz();
                }, $(steps[x])[_0x4fa7a8(0x23b)](_0x4fa7a8(
                    0xcb))[_0x4fa7a8(0x1b1)](_0x4fa7a8(0x237))))) : $(steps[x])['find'](_0x4fa7a8(0x1d8))[
                _0x4fa7a8(0x1b1)]('radio-skip') === !![] && (skip && (textareaLength === 0x0 &&
                textInputLength === 0x0 && emailInputLength === 0x0 && checkboxInputLength === 0x0 &&
                setTimeout(function() { next = !![], nextStep(), selectionQuiz(); }, $(steps[x])[
                    _0x4fa7a8(0x23b)](_0x4fa7a8(0xcb))[_0x4fa7a8(0x1b1)](_0x4fa7a8(0x237)))))), inputFilled &&
        fileFilled && numFilled && checkboxFilled && telFilled && radioFilled && emailFilled &&
        domainAllowed && selectFilled && textareaFilled && passwordFilled && urlFilled ? enableBtn() :
        disableBtn(), andLogic(), cloneRemove(), cloneRemoveInput();
}

function displayErrorMessage() {
    const _0x4e99d7 = _0x37f079;
    $(_0x4e99d7(0x287))[_0x4e99d7(0x19c)](), unfilledArr['length'] > 0x0 && unfilledArr[_0x4e99d7(
        0x1f5)](function(_0x17a152) {
        const _0x508220 = _0x4e99d7;
        $('input[name=\x22' + _0x17a152[_0x508220(0x1b7)] + '\x22]')[_0x508220(0xb8)](_0x508220(
            0x287))[_0x508220(0x1c4)](), $(_0x508220(0x23c) + _0x17a152['input'] + '\x22]')[
            'parents']()[_0x508220(0x18a)](_0x508220(0x287))[_0x508220(0x1c4)](), $(_0x508220(
            0x85) + _0x17a152[_0x508220(0x1b7)] + '\x22]')[_0x508220(0xb8)](_0x508220(0x287))[
            _0x508220(0x1c4)](), $(_0x508220(0x200) + _0x17a152[_0x508220(0x1b7)] + '\x22]')[
            _0x508220(0xb8)](_0x508220(0x287))[_0x508220(0x1c4)]();
    });
}

function resetInputErrorMessage(_0x26a2e9) {
    const _0x384366 = _0x37f079;
    $(_0x384366(0x23c) + _0x26a2e9 + '\x22]')[_0x384366(0xb8)](_0x384366(0x287))[_0x384366(0x19c)](),
        $(_0x384366(0x23c) + _0x26a2e9 + '\x22]')[_0x384366(0x264)]()['children'](
            '[data-text=\x22error-message\x22]')[_0x384366(0x19c)](), $(_0x384366(0x85) + _0x26a2e9 +
            '\x22]')[_0x384366(0xb8)](_0x384366(0x287))[_0x384366(0x19c)](), $('select[name=\x22' +
            _0x26a2e9 + '\x22]')[_0x384366(0xb8)](_0x384366(0x287))[_0x384366(0x19c)]();
}

function increaseCurstep() {
    const _0x4e193a = _0x37f079;
    countCard ? (curStep = curStep + 0x1, $(_0x4e193a(0xfb))['text'](steps['length'])) : $(steps[x])[
        _0x4e193a(0x1b1)](_0x4e193a(0xc2)) ? curStep = curStep + 0x0 : curStep = curStep + 0x1, $(
        _0x4e193a(0xea))[_0x4e193a(0xe8)](curStep);
}

function decreaseCurstep() {
    const _0x5be797 = _0x37f079;
    countCard ? (curStep = curStep - 0x1, $(_0x5be797(0xfb))[_0x5be797(0xe8)](steps[_0x5be797(
            0x280)])) : $(steps[x])[_0x5be797(0x1b1)](_0x5be797(0xc2)) ? curStep = curStep - 0x0 :
        curStep = curStep - 0x1, $(_0x5be797(0xea))[_0x5be797(0xe8)](curStep);
}
$(_0x37f079(0x29a))[
    'on']('click', function(_0xcebdd2) {
    const _0x579c83 = _0x37f079;
    $(this)['data'](_0x579c83(0xc9)) && (redirectTo = $(this)['data'](_0x579c83(0xc9))), !$(this)[
            _0x579c83(0x1b1)](_0x579c83(0x23d)) && (newTab = $(this)[_0x579c83(0x1b1)](_0x579c83(
            0x23d))), successCard = $(this)[_0x579c83(0x1b1)]('success'), _0xcebdd2['preventDefault']
        (), _0xcebdd2[_0x579c83(0x101)](), logicExtra && ($(this)['prop'](_0x579c83(0xd6), !![]), $(
            steps)[_0x579c83(0x23b)](_0x579c83(0x255))[_0x579c83(0x12c)]('required', ![])),
        localStorage['removeItem']('filledInput'), fill ? ($(this)[_0x579c83(0x1b1)](_0x579c83(
                0x233)) ? (console['log']($(this)['data'](_0x579c83(0x233))), $(this)[_0x579c83(0xe8)](
                $(this)[_0x579c83(0x1b1)](_0x579c83(0x233)))) : $(this)[_0x579c83(0x19b)](
                'Please\x20wait...')[_0x579c83(0xe8)](_0x579c83(0x26f)), $(_0x579c83(0x285))['submit']
            (), $(_0x579c83(0x187))['length'] > 0x0 && (grecaptcha['getResponse']()[_0x579c83(
                0x280)] === 0x0 && (form['find'](_0x579c83(0x29a))['text'](oldSubmitText), form[
                _0x579c83(0x23b)](_0x579c83(0x29a))[_0x579c83(0x19b)](oldSubmitText))), customError &&
            $(_0x579c83(0x287))[_0x579c83(0x19c)]()) : customError && displayErrorMessage();
});

function nextStep() {
    const _0x917873 = _0x37f079;
    customError ? ($('[data-text=\x22error-message\x22]')[_0x917873(0x19c)](), fill ? (x++,
        increaseCurstep(), progress = x, x <= steps[_0x917873(0x280)] - 0x1 && (updateStep(),
            memory && saveFilledInput())) : displayErrorMessage()) : (x++, increaseCurstep(), x >
        progress && (progress = x), x <= steps[_0x917873(0x280)] - 0x1 && (updateStep(), memory &&
            saveFilledInput())), andLogic();
}

function backStep() {
    const _0x368c40 = _0x37f079;
    customError && $(_0x368c40(0x287))[_0x368c40(0x19c)](), decreaseCurstep(), x > 0x0 && ($(
            progressbar[x])['removeClass'](_0x368c40(0x14b)), selections[_0x368c40(0x19d)](_0x5212ef =>
            _0x5212ef[_0x368c40(0x1fc)] === x)['length'] > 0x0 ? x = parseInt(getSafe(() => selections[
            _0x368c40(0x19d)](_0x339321 => _0x339321['skipTo'] === x)[0x0][_0x368c40(0x245)])) : x--,
        updateStep()), ($(steps[x])[_0x368c40(0x23b)]('[data-radio-skip]:visible')[_0x368c40(0x1b1)](
        'radio-skip') === !![] || $(steps[x])[_0x368c40(0x23b)](_0x368c40(0x16f))[_0x368c40(0x23b)](
        _0x368c40(0x1d8))['data'](_0x368c40(0x17f)) === !![] || $(steps[x])[_0x368c40(0x23b)](
        _0x368c40(0x164))[_0x368c40(0x1b1)](_0x368c40(0x17f)) === !![]) && (all_data = all_data[
        _0x368c40(0x19d)](_0x1e0b6d => _0x1e0b6d[_0x368c40(0x210)] !== $(steps[x])['find'](
        _0x368c40(0x109))['attr']('name')), $(_0x368c40(0xd3) + $(steps[x])[_0x368c40(0x23b)](
        _0x368c40(0x109))['attr'](_0x368c40(0x220)) + '\x22]')['hide'](), $(steps[x])[_0x368c40(
        0x23b)](_0x368c40(0x142))[_0x368c40(0x12c)]('checked', ![]), $(steps[x])[_0x368c40(0x23b)](
        _0x368c40(0x216))[_0x368c40(0x145)](_0x368c40(0x135)), validation());
}
weightedSelectionRange
    &&
    $('[data-selection]')[_0x37f079(0x230)](function() {
        const _0x1d413d = _0x37f079;
        $(this)['append'](
            '<div\x20data-range=\x22selection\x22\x20style=\x22display:none\x20!important\x22>' + $(
                this)[_0x1d413d(0x1b1)](_0x1d413d(0x1b2)) + '</div>');
    });

function selectionQuiz() {
    const _0x136fc0 = _0x37f079;
    if ($(this)[_0x136fc0(0x23b)](
            '[data-btn=\x22check\x22]')) {
        $(_0x136fc0(0x28f))['hide'](), $(_0x136fc0(0x1cf))[_0x136fc0(
            0x19c)]();
        if (weightedSelection) {
            selTotal = 0x0, selArr[_0x136fc0(0x1f5)](function(
                _0x4cc9f9) {
                const _0x340782 = _0x136fc0;
                selTotal = selTotal + _0x4cc9f9[_0x340782(0xa0)];
            }), $(_0x136fc0(0xb4))[_0x136fc0(0xe8)](
                selTotal);
            if ($(_0x136fc0(0xcd) + selTotal + '\x22]')[_0x136fc0(0x280)] > 0x0) $(_0x136fc0(
                0xcd) + selTotal + '\x22]')[_0x136fc0(0x1c4)]();
            else $(_0x136fc0(0x1aa) + selTotal + ')') ? $(_0x136fc0(0x1aa) + selTotal + ')')[_0x136fc0(
                0x29d)](_0x136fc0(0x28f))['eq'](0x0)[_0x136fc0(0x1d2)]() : $(
                '[data-selection=\x22other\x22]')['fadeIn']();
        } else {
            let _0x551989 = -0x1;
            $(_0x136fc0(0x28f))[_0x136fc0(0x230)](function(_0x4f10b8) {
                const _0x4f8ad0 = _0x136fc0;
                $($('[data-selection]')[_0x4f10b8])['data'](_0x4f8ad0(0x1b2))[_0x4f8ad0(0x176)](
                    selString[_0x4f8ad0(0x161)]()) && (_0x551989 = _0x4f10b8);
            }), _0x551989 > -0x1 ? $($(
                _0x136fc0(0x28f))[_0x551989])[_0x136fc0(0x1c4)]() : $('[data-selection=\x22other\x22]')[
                _0x136fc0(0x1c4)]();
        }
    }
}

function triggerInputAllData() {
    const _0x3c7b9f = _0x37f079;
    if (savedFilledInput && memory)
        savedFilledInput[_0x3c7b9f(0x1f5)](_0x18cc49 => {
            const _0x2b5059 = _0x3c7b9f;
            var _0x10a6cc =
                $(_0x2b5059(0x23c) + _0x18cc49[_0x2b5059(0x219)] + _0x2b5059(0x14f) + _0x18cc49[_0x2b5059(
                    0xb5)] + _0x2b5059(0x18e)),
                _0x42f568 = $(_0x2b5059(0x23c) + _0x18cc49[_0x2b5059(0x219)] + _0x2b5059(0x18e)),
                _0x49d9b9 = $(_0x2b5059(0x85) + _0x18cc49['inputName'] + _0x2b5059(0x18e)),
                _0x3e8773 = $(_0x2b5059(0xdf) + _0x18cc49[_0x2b5059(0x219)] + '\x22]'),
                _0xa59579 = $(_0x2b5059(0x1d6) + _0x18cc49[_0x2b5059(0x219)] + _0x2b5059(0x14f) +
                    _0x18cc49[_0x2b5059(0xb5)] + _0x2b5059(0x18e));
            if (_0x10a6cc[_0x2b5059(0x1ec)](
                    'type') !== _0x2b5059(0x1c2)) {
                if (_0x10a6cc[_0x2b5059(0x1ec)](_0x2b5059(0x224)) ===
                    'radio' && !_0x10a6cc[_0x2b5059(0x264)](_0x2b5059(0x276))[_0x2b5059(0x1b1)](_0x2b5059(
                        0x17f))) _0x10a6cc[_0x2b5059(0x10e)](), _0x10a6cc[_0x2b5059(0xb8)]('.w-radio-input')[
                    _0x2b5059(0x97)]('w--redirected-checked'), _0x10a6cc[_0x2b5059(0x1fe)](_0x2b5059(
                    0x1b7));
                else _0x18cc49[_0x2b5059(0xb5)] === 'on' ? (_0x42f568[_0x2b5059(0x10e)](), _0x42f568[
                    _0x2b5059(0xb8)](_0x2b5059(0x1c6))[_0x2b5059(0x97)](_0x2b5059(0x135)), _0x42f568[
                    _0x2b5059(0x1fe)](_0x2b5059(0x1b7))) : (_0x42f568[_0x2b5059(0x19b)](_0x18cc49[
                        _0x2b5059(0xb5)]), _0x49d9b9[_0x2b5059(0x19b)](_0x18cc49[_0x2b5059(0xb5)]), $(
                        'select:not([data-prefill=\x22false\x22])')[_0x2b5059(0x23b)]('option[value=\x22' +
                        _0x18cc49[_0x2b5059(0xb5)] + '\x22]')[_0x2b5059(0x12c)](_0x2b5059(0xa0), !![]),
                    _0x42f568[_0x2b5059(0x1fe)](_0x2b5059(0x1b7)), _0x42f568[_0x2b5059(0x1fe)]('change')
                );
                const _0xa7618d = _0xa59579[_0x2b5059(0x1b1)](_0x2b5059(0x28b)),
                    _0xf89d96 = _0x3e8773[_0x2b5059(0x1b1)](_0x2b5059(0x28b));
                _0xa59579[_0x2b5059(0x29d)]()['addClass'](_0xa7618d), _0x3e8773[_0x2b5059(0x29d)]()[
                    _0x2b5059(0x97)](_0xf89d96);
            }
        });
    else _params && (getParams(), searchQ['forEach'](_0x183996 => {
        const _0x153c91 = _0x3c7b9f;
        if (
            $('input[name=\x22' + _0x183996[_0x153c91(0x219)] + _0x153c91(0x14f) + _0x183996[
                _0x153c91(0xb5)] + '\x22]:not([data-prefill=\x22false\x22])')['attr'](_0x153c91(
                0x224)) !== _0x153c91(0x1c2)) {
            if ($('input[name=\x22' + _0x183996[_0x153c91(
                    0x150)] + '\x22][value=\x22' + _0x183996[_0x153c91(0x19b)] + _0x153c91(0x18e))[
                    _0x153c91(0x1ec)](_0x153c91(0x224)) === _0x153c91(0xda)) $(_0x153c91(0x23c) +
                _0x183996[_0x153c91(0x150)] + _0x153c91(0x14f) + _0x183996[_0x153c91(0x19b)] +
                '\x22]:not([data-prefill=\x22false\x22])')[_0x153c91(0x10e)](), $(_0x153c91(0x23c) +
                _0x183996['key'] + _0x153c91(0x14f) + _0x183996[_0x153c91(0x19b)] + _0x153c91(0x18e)
            )[_0x153c91(0xb8)]('.w-radio-input')[_0x153c91(0x97)](_0x153c91(0x135)), $(
                'input[name=\x22' + _0x183996[_0x153c91(0x150)] + '\x22][value=\x22' + _0x183996[
                    _0x153c91(0x19b)] + _0x153c91(0x18e))[_0x153c91(0x1fe)](_0x153c91(0x1b7));
            else _0x183996[_0x153c91(0x19b)] === 'on' ? ($(_0x153c91(0x23c) + _0x183996[_0x153c91(
                0x150)] + '\x22]:not([data-prefill=\x22false\x22])')[_0x153c91(0x10e)](), $(
                _0x153c91(0x23c) + _0x183996[_0x153c91(0x150)] + _0x153c91(0x18e))[_0x153c91(
                0xb8)](_0x153c91(0x1c6))[_0x153c91(0x97)](_0x153c91(0x135)), $('input[name=\x22' +
                _0x183996[_0x153c91(0x150)] + '\x22]')['trigger']('input')) : ($(_0x153c91(0x23c) +
                _0x183996[_0x153c91(0x150)] + _0x153c91(0x18e))[_0x153c91(0x19b)](_0x183996[
                'val']), $('textarea[name=\x22' + _0x183996['key'] + _0x153c91(0x18e))['val'](
                _0x183996['val']), $(_0x153c91(0x200) + _0x183996[_0x153c91(0x150)] + _0x153c91(
                0x18e))[_0x153c91(0x23b)](_0x153c91(0xa3) + _0x183996[_0x153c91(0x19b)] +
                '\x22]')[_0x153c91(0x12c)](_0x153c91(0xa0), !![]), $('input[name=\x22' + _0x183996[
                _0x153c91(0x150)] + _0x153c91(0x18e))['trigger'](_0x153c91(0x1b7)), $(_0x153c91(
                0x23c) + _0x183996[_0x153c91(0x150)] + _0x153c91(0x18e))['trigger'](_0x153c91(
                0x22c)));
        }
    }));
}
$('[data-form=\x22next-btn\x22]')['on'](_0x37f079(0x10e),
        function() { next = !![], nextStep(), selectionQuiz(); }), $('[data-form=\x22back-btn\x22]')['on'](
        'click',
        function() { next = ![], back = !![], backStep(); }), $(steps)['find'](_0x37f079(0x255))['not']
    (_0x37f079(0x257))['on'](_0x37f079(0x1b7), function(_0x14ed35) {
        validation(), andLogic(),
            addClickClass();
    }), $(steps)[_0x37f079(0x23b)]('input[type=\x22radio\x22]')['on'](_0x37f079(
        0x10e), function() { skip = !![], validation(), addClickClass(); });
$(_0x37f079(0x90))[_0x37f079(0x1b1)]('clickable-all') ? $(
    '[data-form=\x22custom-progress-indicator\x22]')[_0x37f079(0x145)](_0x37f079(0xd7)) : $(
    '[data-form=\x22custom-progress-indicator\x22]')[_0x37f079(0x97)](_0x37f079(0xd7));

function clickableIndicator() {
    const _0x3c4f25 = _0x37f079;
    $(_0x3c4f25(0x107))[_0x3c4f25(0x1b1)]('clickable') && ($(_0x3c4f25(0x11c))['removeClass'](
        'current'), $(_0x3c4f25(0x107))['data']('clickable-all') ? (x = $(this)[_0x3c4f25(0x212)](),
        updateStep()) : $(this)[_0x3c4f25(0x212)]() <= progress && (x = $(this)[_0x3c4f25(0x212)](),
        updateStep())), $(_0x3c4f25(0xea))[_0x3c4f25(0xe8)](x + 0x1);
}
$(
    '[data-form=\x22custom-progress-indicator\x22]')['on'](_0x37f079(0x10e), clickableIndicator);
$(_0x37f079(0x285))['data']('debug-mode') && ($(_0x37f079(0x26d))[_0x37f079(0x230)](
        function() {
            const _0x34e083 = _0x37f079;
            $(this)[_0x34e083(0x126)](_0x34e083(0x296), $(this)[_0x34e083(0x1b1)](_0x34e083(0xb2)));
        }),
    $(_0x37f079(0xa6))[_0x37f079(0x230)](function() {
        const _0x3f0015 = _0x37f079;
        $(this)[_0x3f0015(0x126)]('<br>Data\x20Answer\x20=\x20', $(this)['data'](_0x3f0015(
            0x1c5)));
    }));

function resetFormly() {
    const _0x31f1da = _0x37f079;
    $(_0x31f1da(0x285))['trigger']('reset'), $('[data-form=\x22multistep\x22]')[_0x31f1da(0x264)]()[
        _0x31f1da(0x23b)](_0x31f1da(0x17b))[_0x31f1da(0x19c)](), x = 0x0, updateStep(), $(_0x31f1da(
        0x285))[_0x31f1da(0x1d2)](), $(_0x31f1da(0x29a))[_0x31f1da(0xe8)](oldSubmitText), $(_0x31f1da(
        0x29a))[_0x31f1da(0x19b)](oldSubmitText), $(_0x31f1da(0xea))[_0x31f1da(0xe8)](0x1), $(
        _0x31f1da(0x285))[_0x31f1da(0x23b)](_0x31f1da(0x247))[_0x31f1da(0xb8)](_0x31f1da(0x1c6))[
        'removeClass'](_0x31f1da(0x135));
}
$(document)[_0x37f079(0x1bd)](function(_0x347d85,
        _0x4bd4a9, _0xf03df) {
        const _0x4ecc7f = _0x37f079;
        if (_0xf03df[_0x4ecc7f(0x1de)]['includes']
            ('https://webflow.com/api/v1/form/')) {
            const _0x17ef4b = _0x4bd4a9[_0x4ecc7f(0x192)] ===
                0xc8,
                _0x2182e3 = _0x4ecc7f(0x286);
            redirectTo && _0x17ef4b && (newTab ? window['open'](redirectTo, _0x4ecc7f(0x1f4)) :
                    setTimeout(() => {
                        const _0x149282 = _0x4ecc7f;
                        location[_0x149282(0x236)] = redirectTo;
                    }, redirectDelay)), _0x17ef4b &&
                successCard !== '' && $('[data-success-card=\x22' + successCard + '\x22]')[_0x4ecc7f(
                    0x1c4)](), _0x17ef4b && formReset && setTimeout(() => { resetFormly(); }, resetDelay), !
                _0x17ef4b && ($('[data-form=\x22submit-btn\x22]')[_0x4ecc7f(0x19b)](_0x4ecc7f(0x26f)), $(
                    '[data-form=\x22submit-btn\x22]')[_0x4ecc7f(0xe8)]('Please\x20wait...'));
        }
    }), $(
        _0x37f079(0xcc))['on']('click', function() {
        const _0x49ab2f = _0x37f079;
        var _0x28e4d0 = $(
            this)[_0x49ab2f(0x29d)]()[_0x49ab2f(0x23b)](_0x49ab2f(0x21c))['data']('input-field');
        setTimeout(function() { $('input[name=\x22' + _0x28e4d0 + '\x22]')['focus'](); }, 0x64),
            back = !![], x = $(this)[_0x49ab2f(0x1b1)](_0x49ab2f(0x2a1)) - 0x1, updateStep(),
            countCard ? (curStep = x + 0x1, $(_0x49ab2f(0xfb))['text'](steps[_0x49ab2f(0x280)])) : $(
                steps[x])[_0x49ab2f(0x1b1)]('card') ? curStep = x + 0x0 : curStep = x + 0x1, $(_0x49ab2f(
                0xea))[_0x49ab2f(0xe8)](curStep), back = ![];
    }), $(_0x37f079(0x1df))['on']('click',
        function() {
            const _0x3fcb64 = _0x37f079;
            $(_0x3fcb64(0x285))['trigger'](_0x3fcb64(0xe7));
            let _0x2be480 = $(this);
            $(this)[_0x3fcb64(0xe8)](_0x3fcb64(0x26f)), setTimeout(function() {
                const _0x19df97 =
                    _0x3fcb64;
                $(_0x2be480)[_0x19df97(0xe8)](oldResetText), $(_0x2be480)[_0x19df97(0x264)](
                    '.w-form-done')[_0x19df97(0x19c)](), x = 0x0, updateStep(), $(_0x19df97(0x285))[
                    _0x19df97(0x1d2)](), $(_0x19df97(0x29a))[_0x19df97(0xe8)](oldSubmitText), $(
                    _0x19df97(0x29a))[_0x19df97(0x19b)](oldSubmitText), $(_0x2be480)[_0x19df97(0x19b)](
                    oldSubmitText), $(_0x19df97(0xea))[_0x19df97(0xe8)](0x1), $(_0x19df97(0x285))[
                    'find'](_0x19df97(0x247))[_0x19df97(0xb8)](_0x19df97(0x1c6))['removeClass'](
                    _0x19df97(0x135));
            }, resetDelay);
        }), $('body')['on'](_0x37f079(0x118), function(
        _0x3ccb0d) {
        const _0x1e2cce = _0x37f079;
        if (_0x3ccb0d[_0x1e2cce(0x21a)] === 0xd) {
            _0x3ccb0d
                [_0x1e2cce(0x144)](), _0x3ccb0d[_0x1e2cce(0x101)]();
            if ($(steps[x])['find'](_0x1e2cce(
                    0x133))['is'](_0x1e2cce(0x174))) $(steps[x])[_0x1e2cce(0x23b)]('textarea:focus')[
                _0x1e2cce(0x19b)]($(steps[x])[_0x1e2cce(0x23b)]('textarea:focus')['val']() + '\x0a');
            else $(_0x1e2cce(0xaa))[_0x1e2cce(0x1b1)](_0x1e2cce(0x235)) && fill && (totalSteps >
                curStep && $(_0x1e2cce(0x223))[0x0][_0x1e2cce(0x10e)]());
        }
    }), $('body')[_0x37f079(0x20f)](
        function(_0x310cd7) {
            const _0x14fb4c = _0x37f079;
            (_0x310cd7['metaKey'] || _0x310cd7[_0x14fb4c(0x1ee)]) && _0x310cd7['keyCode'] == 0xd && (x >=
                steps[_0x14fb4c(0x280)] - 0x1 && fill ? $(steps[x])[_0x14fb4c(0x23b)](_0x14fb4c(0x209))[
                    _0x14fb4c(0x10e)]() : (_0x310cd7[_0x14fb4c(0x144)](), _0x310cd7[_0x14fb4c(0x101)]()));
        }),
    $(_0x37f079(0x285))[_0x37f079(0x23b)](_0x37f079(0x255))['on'](_0x37f079(0x22c),
        function() {
            const _0x21e71c = _0x37f079;
            all_data = all_data[_0x21e71c(0x19d)](_0x219211 => _0x219211[_0x21e71c(0x210)] !== $(this)[
                    _0x21e71c(0x1ec)](_0x21e71c(0x220))), $(this)[_0x21e71c(0x1ec)](_0x21e71c(0x224)) ===
                _0x21e71c(0x188) ? $(this)['is'](_0x21e71c(0x153)) ? all_data[_0x21e71c(0x1a1)]
                ({
                    'field': $(this)['attr'](_0x21e71c(0x220)),
                    'value': $(this)[_0x21e71c(0xb8)](_0x21e71c(
                        0x94))[_0x21e71c(0xe8)]()
                }) : $(_0x21e71c(0xd3) + $(this)['attr'](_0x21e71c(0x220)) +
                    '\x22]')['hide']() : (all_data['push']({
                        'field': $(this)[_0x21e71c(0x1ec)](_0x21e71c(
                            0x220)),
                        'value': $(this)[_0x21e71c(0x19b)]()
                    }), $(this)[_0x21e71c(0x19b)]() !==
                    '' && resetInputErrorMessage($(this)[_0x21e71c(0x1ec)](_0x21e71c(0x220)))), all_data[
                    _0x21e71c(0x1f5)](function(_0x536dd6) {
                    const _0x25f25f = _0x21e71c;
                    $(_0x25f25f(0xd3) + _0x536dd6[_0x25f25f(0x210)] + '\x22]')[_0x25f25f(0x1d2)](), $(
                        _0x25f25f(0xd3) + _0x536dd6['field'] + '\x22]')[_0x25f25f(0xe8)](_0x536dd6[
                        'value']);
                });
        }), $(_0x37f079(0x285))[_0x37f079(0x23b)](_0x37f079(0x133))['on'](_0x37f079(
        0x22c), function() {
        const _0x180d3a = _0x37f079;
        $(this)['val']() !== '' && resetInputErrorMessage($(this)[_0x180d3a(0x1ec)]('name')),
            all_data = all_data[_0x180d3a(0x19d)](_0x1ec821 => _0x1ec821[_0x180d3a(0x210)] !== $(this)[
                _0x180d3a(0x1ec)]('name')), all_data[_0x180d3a(0x1a1)]({
                'field': $(this)[_0x180d3a(
                    0x1ec)]('name'),
                'value': $(this)[_0x180d3a(0x19b)]()
            }), all_data[_0x180d3a(0x1f5)](
                function(_0x159ece) {
                    const _0x3c68e8 = _0x180d3a;
                    $(_0x3c68e8(0xd3) + _0x159ece[_0x3c68e8(0x210)] + '\x22]')['show'](), $(_0x3c68e8(
                        0xd3) + _0x159ece['field'] + '\x22]')[_0x3c68e8(0xe8)](_0x159ece[_0x3c68e8(0xb5)]);
                }
            );
    }), $(_0x37f079(0x285))['find']('select')['on']('change', function() {
        const _0x4dd7ed =
            _0x37f079;
        $(this)[_0x4dd7ed(0x19b)]() !== '' && resetInputErrorMessage($(this)[_0x4dd7ed(0x1ec)](
            _0x4dd7ed(0x220)));
        var _0x968753 = $(this)[_0x4dd7ed(0x1b1)](_0x4dd7ed(0x1e7));
        all_data = all_data['filter'](_0x28fb44 => _0x28fb44[_0x4dd7ed(0x210)] !== $(this)[_0x4dd7ed(
            0x1ec)](_0x4dd7ed(0x220))), all_data['push']({
            'field': $(this)['attr'](
                'name'),
            'value': _0x968753 ? $(this)[_0x4dd7ed(0x23b)](_0x4dd7ed(0xf3))['text']() : $(
                this)[_0x4dd7ed(0x19b)]()
        }), all_data['forEach'](function(_0x5b18ef) {
            const
                _0x1de97c = _0x4dd7ed;
            $(_0x1de97c(0xd3) + _0x5b18ef[_0x1de97c(0x210)] + '\x22]')[_0x1de97c(0x1d2)](), $(
                '[data-input-field=\x22' + _0x5b18ef['field'] + '\x22]')[_0x1de97c(0xe8)](_0x5b18ef[
                _0x1de97c(0xb5)]);
        });
    }), updateStep(), triggerInputAllData(), $(_0x37f079(0xc5))[
        _0x37f079(0x230)](function() {
        const _0xd3fa0f = _0x37f079,
            _0x5a3c4d = $(this)['find'](_0xd3fa0f(0x88)),
            _0x169b82 = [];
        _0x5a3c4d['each'](function() {
            const _0x4fd81a = _0xd3fa0f;
            _0x169b82[_0x4fd81a(0x1a1)]($(this)[_0x4fd81a(0xe8)]()[_0x4fd81a(0xce)]());
        });
        const
            _0x373bea = $(this)['siblings']('[data-cms-select=input]');
        $[_0xd3fa0f(0x230)](_0x169b82, function(_0x1b08c3, _0x1f5984) {
            const _0x224360 = _0xd3fa0f,
                _0x2ac834 = $(_0x224360(0x229))[_0x224360(0x19b)](_0x1f5984)[_0x224360(0xe8)](
                    _0x1f5984);
            _0x373bea[_0x224360(0x126)](_0x2ac834);
        });
    });

function cloneRemove() {
    const _0x350625 = _0x37f079;
    $(_0x350625(0x108))[_0x350625(0x230)](function() {
        const _0x2b8362 = _0x350625;
        $(this)[_0x2b8362(0x23b)]('[data-clone]')[_0x2b8362(0x280)] < 0x2 ? $(this)[_0x2b8362(
            0x23b)](_0x2b8362(0x24b))[_0x2b8362(0x19c)]() : $(this)[_0x2b8362(0x23b)](
            '[data-form=\x22remove-clone\x22]')[_0x2b8362(0x1d2)]();
    });
}

function cloneRemoveInput() {
    const _0x2592ec = _0x37f079;
    $(_0x2592ec(0x1ca))[_0x2592ec(0x230)](function() {
        const _0x22c1ee = _0x2592ec;
        console[_0x22c1ee(0x218)]($(this)[_0x22c1ee(0x23b)]('[data-clone-input]')[_0x22c1ee(
            0x280)]), $(this)[_0x22c1ee(0x23b)](_0x22c1ee(0x156))['length'] < 0x2 ? $(this)['find'](
            _0x22c1ee(0x128))[_0x22c1ee(0x19c)]() : $(this)[_0x22c1ee(0x23b)](_0x22c1ee(0x128))[
            _0x22c1ee(0x1d2)]();
    });
}
$(_0x37f079(0x24b))['on'](_0x37f079(0x10e), function() {
    const
        _0x3a433e = _0x37f079,
        _0x560437 = $(this)[_0x3a433e(0x264)](_0x3a433e(0x213))[_0x3a433e(0x280)] > 0x0 ? $(this)[
            _0x3a433e(0x264)](_0x3a433e(0x213))[_0x3a433e(0x212)]() : $(this)[_0x3a433e(0x264)](
            '[data-display]')[_0x3a433e(0x212)](),
        _0x1fa668 = $(this)[_0x3a433e(0x264)](_0x3a433e(0x213))[_0x3a433e(0x280)] > 0x0 ? $(this)[
            'parents'](_0x3a433e(0x213))[_0x3a433e(0x1b1)](_0x3a433e(0x267)) : $(this)[_0x3a433e(
            0x264)](_0x3a433e(0x18d))[_0x3a433e(0x1b1)](_0x3a433e(0xb1));
    $('[data-clone=\x22' + _0x1fa668 + '\x22]')['eq'](_0x560437)[_0x3a433e(0x1b0)](), $(_0x3a433e(
        0x1f2) + _0x1fa668 + '\x22]')['eq'](_0x560437)[_0x3a433e(0x1b0)](), cloneRemove();
    let
        _0x55fa44 = $(_0x3a433e(0xec) + _0x1fa668 + '\x22]')[_0x3a433e(0x1b1)](_0x3a433e(0x130)),
        _0x903c3b = $(_0x3a433e(0x13a) + _0x1fa668 + '\x22]')['length'];
    console[_0x3a433e(0x218)](_0x903c3b, _0x55fa44), _0x903c3b < _0x55fa44 && (console[_0x3a433e(
            0x218)]('show'), $('[data-add-new=\x22' + _0x1fa668 + '\x22]')[_0x3a433e(0x1d2)]()),
        validation();
}), $(_0x37f079(0x128))['on']('click', function() {
    const _0x4b6669 =
        _0x37f079;
    let _0x42c796 = $(this)[_0x4b6669(0xb8)]()[_0x4b6669(0x1ec)]('name'),
        _0x41e47a = $(this)['parents'](_0x4b6669(0x156))[_0x4b6669(0x1b1)](_0x4b6669(0x177));
    $(this)[_0x4b6669(0x29d)]('[data-clone-input]')[_0x4b6669(0x1b0)](), $(_0x4b6669(0xd3) +
        _0x42c796 + '\x22]')[_0x4b6669(0x29d)]('[data-display-input]')[_0x4b6669(0x1b0)]();
    let
        _0x3cf529 = $(_0x4b6669(0x258) + _0x41e47a + '\x22]')[_0x4b6669(0x1b1)](_0x4b6669(0x121)),
        _0x35588e = $(_0x4b6669(0xc6) + _0x41e47a + '\x22]')[_0x4b6669(0x280)];
    _0x35588e < _0x3cf529 && $(_0x4b6669(0x258) + _0x41e47a + '\x22]')[_0x4b6669(0x1d2)](),
        validation();
}), $('[data-add-new]')['on'](_0x37f079(0x10e), function() {
    const _0x50be99 =
        _0x37f079;
    let _0x40b869 = $(this)['data']('add-new'),
        _0x204b0b = $(this)[_0x50be99(0x1b1)]('add-new-limit');
    var _0xa1d73e = $(_0x50be99(0x13a) +
            _0x40b869 + '\x22]')['eq'](0x0)[_0x50be99(0x267)](!![]),
        _0x3b7fd5 = $('[data-display=\x22' + _0x40b869 + '\x22]')['eq'](0x0)['clone'](!![]);
    let
        _0x1dcd40 = '';
    $(this)[_0x50be99(0x23b)](_0x50be99(0x24b))[_0x50be99(0x1d2)](), cloneRemove(), _0xa1d73e[
            _0x50be99(0x23b)](_0x50be99(0x156))[_0x50be99(0x23b)](_0x50be99(0x1b7))[_0x50be99(0x19b)](
            ''), _0xa1d73e[_0x50be99(0x23b)]('[data-clone-input]')['find'](_0x50be99(0x178))[
            _0x50be99(0x19b)](''), _0xa1d73e['find']('[data-clone-input]')[_0x50be99(0x23b)](
            'textarea')[_0x50be99(0x19b)](''), _0xa1d73e[_0x50be99(0x23b)](_0x50be99(0x156))['not'](
            _0x50be99(0x22e))[_0x50be99(0x1b0)](), _0xa1d73e[_0x50be99(0x23b)]('[data-clone-input]')[
            _0x50be99(0x23b)]('[aria-label=\x22Remove\x20file\x22]')[_0x50be99(0x10e)](), _0x3b7fd5[
            _0x50be99(0x23b)](_0x50be99(0xab))[_0x50be99(0x260)](_0x50be99(0x22e))['remove'](),
        _0xa1d73e['find'](_0x50be99(0x1b7))[_0x50be99(0x230)](function() {
            const _0xb39ea =
                _0x50be99;
            if ($(this)[_0xb39ea(0x16b)](_0xb39ea(0x156))['length'] > 0x0) {
                let
                    _0x2cc782 = 0x0;
                const _0x60db32 = $(this)[_0xb39ea(0x16b)](_0xb39ea(0x156))[
                    _0xb39ea(0x1b1)](_0xb39ea(0x177));
                $(_0xb39ea(0xc6) + _0x60db32 + _0xb39ea(0x99))[_0xb39ea(0x230)](function() {
                    const
                        _0x3d4882 = _0xb39ea,
                        _0x2422ca = $(this)[_0x3d4882(0x1ec)](_0x3d4882(0x220));
                    if (_0x2422ca &&
                        _0x2422ca[_0x3d4882(0x98)]('relationship-')) {
                        const _0x5d10e = parseInt(
                            _0x2422ca[_0x3d4882(0x227)]('-')[0x1]);
                        !isNaN(_0x5d10e) && _0x5d10e >
                            _0x2cc782 && (_0x2cc782 = _0x5d10e);
                    }
                }), _0x2cc782++, _0x1dcd40 = this[
                    'name'] + '-' + _0x2cc782;
            } else _0x1dcd40 = this[_0xb39ea(0x220)] + '-' + (
                parseInt($('[data-clone=\x22' + _0x40b869 + '\x22]')['last']()[_0xb39ea(0x212)]()) +
                0x1);
            $(this)[_0xb39ea(0x19b)](''), $(this)[_0xb39ea(0x1ec)](_0xb39ea(0x220), _0x1dcd40), $(
                this)[_0xb39ea(0x1ec)](_0xb39ea(0x1c3), _0x1dcd40);
        }), _0xa1d73e[_0x50be99(0x23b)](
            _0x50be99(0x133))['each'](function() {
            const _0xb251fe = _0x50be99;
            if ($(this)[
                    _0xb251fe(0x16b)]('[data-clone-input]')[_0xb251fe(0x280)] > 0x0) {
                let _0x390848 =
                    0x0;
                const _0x531610 = $(this)[_0xb251fe(0x16b)](_0xb251fe(0x156))['data'](
                    'clone-input');
                $(_0xb251fe(0xc6) + _0x531610 + _0xb251fe(0x13c))[_0xb251fe(0x230)](
                        function() {
                            const _0x132acc = _0xb251fe,
                                _0x22117f = $(this)['attr'](_0x132acc(0x220));
                            if (_0x22117f && _0x22117f[
                                    _0x132acc(0x98)](_0x132acc(0xf8))) {
                                const _0x45d88a = parseInt(_0x22117f[
                                    _0x132acc(0x227)]('-')[0x1]);
                                !isNaN(_0x45d88a) && _0x45d88a > _0x390848 && (
                                    _0x390848 = _0x45d88a);
                            }
                        }), _0x390848++, _0x1dcd40 = this['name'] + '-' +
                    _0x390848;
            } else _0x1dcd40 = this[_0xb251fe(0x220)] + '-' + (parseInt($(
                    '[data-clone=\x22' + _0x40b869 + '\x22]')[_0xb251fe(0x115)]()[_0xb251fe(0x212)]
                ()) + 0x1);
            $(this)['val'](''), $(this)['attr'](_0xb251fe(0x220), _0x1dcd40), $(this)[_0xb251fe(
                0x1ec)](_0xb251fe(0x1c3), _0x1dcd40);
        }), _0xa1d73e[_0x50be99(0x23b)](_0x50be99(0x178))[
            _0x50be99(0x230)](function() {
            const _0x3afc2b = _0x50be99;
            if ($(this)[_0x3afc2b(0x16b)]
                ('[data-clone-input]')[_0x3afc2b(0x280)] > 0x0) {
                let _0x1d2bcd = 0x0;
                const
                    _0x3d2707 = $(this)['closest'](_0x3afc2b(0x156))[_0x3afc2b(0x1b1)]('clone-input');
                $(_0x3afc2b(0xc6) + _0x3d2707 + _0x3afc2b(0xde))[_0x3afc2b(0x230)](function() {
                    const
                        _0x515554 = _0x3afc2b,
                        _0x327faf = $(this)[_0x515554(0x1ec)]('name');
                    if (_0x327faf && _0x327faf[
                            _0x515554(0x98)](_0x515554(0xf8))) {
                        const _0x34d649 = parseInt(_0x327faf[
                            _0x515554(0x227)]('-')[0x1]);
                        !isNaN(_0x34d649) && _0x34d649 > _0x1d2bcd && (
                            _0x1d2bcd = _0x34d649);
                    }
                }), _0x1d2bcd++, _0x1dcd40 = this[_0x3afc2b(
                    0x220)] + '-' + _0x1d2bcd;
            } else _0x1dcd40 = this[_0x3afc2b(0x220)] + '-' + (
                parseInt($(_0x3afc2b(0x13a) + _0x40b869 + '\x22]')['last']()[_0x3afc2b(0x212)]()) +
                0x1);
            $(this)[_0x3afc2b(0x19b)](''), $(this)[_0x3afc2b(0x1ec)](_0x3afc2b(0x220), _0x1dcd40),
                $(this)[_0x3afc2b(0x1ec)](_0x3afc2b(0x1c3), _0x1dcd40);
        }), _0x3b7fd5[_0x50be99(0x23b)](
            _0x50be99(0x21c))['each'](function() {
            const _0x2cf505 = _0x50be99;
            if ($(this)[
                    _0x2cf505(0x1b1)](_0x2cf505(0x1fd))) {
                let _0x8a2b1f = 0x0;
                const _0x36fd40 = $(
                    this)[_0x2cf505(0x1b1)]('input-field')[_0x2cf505(0x227)]('-')[0x0];
                $(_0x2cf505(0x1f2) + _0x40b869 + _0x2cf505(0x114) + _0x36fd40 + '\x22]')['each'](
                        function() {
                            const _0x5c3f60 = _0x2cf505,
                                _0x257c20 = $(this)[_0x5c3f60(0x1ec)]('data-input-field'),
                                _0x5aab99 = parseInt(_0x257c20[_0x5c3f60(0x227)]('-')[0x1]);
                            !isNaN(
                                _0x5aab99) && _0x5aab99 > _0x8a2b1f && (_0x8a2b1f = _0x5aab99);
                        }),
                    _0x8a2b1f++;
                const _0x4e17c1 = _0x36fd40 + '-' + _0x8a2b1f;
                $(this)[_0x2cf505(0x1ec)](_0x2cf505(0x272), _0x4e17c1);
            }
        }), $(_0x50be99(0x1e2) +
            _0x40b869 + '\x22]')['append'](_0xa1d73e), $('[data-display-wrapper=\x22' + _0x40b869 +
            '\x22]')['append'](_0x3b7fd5), $(_0x50be99(0xf2) + _0x40b869 + '\x22]')['each'](
            function() {
                const _0x4dd42d = _0x50be99;
                $(this)['text']($(this)[_0x4dd42d(0x264)](_0x4dd42d(0x13a) + _0x40b869 + '\x22]')[
                    _0x4dd42d(0x212)]() + 0x1);
            }), $(_0x50be99(0x28d) + _0x40b869 + '\x22]')[_0x50be99(
            0x230)](function() {
            const _0x445f8e = _0x50be99;
            $(this)[_0x445f8e(0xe8)]($(this)[_0x445f8e(0x264)](_0x445f8e(0x1f2) + _0x40b869 +
                '\x22]')['index']() + 0x1);
        });
    let _0x5083b2 = $(_0x50be99(0x1e2) + _0x40b869 +
        _0x50be99(0x1e0) + _0x40b869 + '\x22]')[_0x50be99(0x280)];
    if (_0x5083b2 >= _0x204b0b) {
        $(
            this)[_0x50be99(0x19c)]();
        return;
    }
    $(this)['show'](), validation();
}), $(_0x37f079(
    0xb6))['on']('click', function() {
    const _0x426b82 = _0x37f079,
        _0xbf46c = $(this)[_0x426b82(0x264)](_0x426b82(0x213))['index']();
    let _0x1c913e = $(this)[
        _0x426b82(0x1b1)](_0x426b82(0x283));
    var _0x50d5e3 = $(_0x426b82(0xc6) + _0x1c913e +
            '\x22]')['eq'](0x0)[_0x426b82(0x267)](!![]),
        _0x519738 = $(_0x426b82(0x189) + _0x1c913e + '\x22]')['eq'](0x0)['clone'](!![]);
    let
        _0xa252e9 = $(this)[_0x426b82(0x1b1)](_0x426b82(0x121)),
        _0x13bfd4 = 0x0;
    $(_0x426b82(0xc6) + _0x1c913e + _0x426b82(0x99))[_0x426b82(0x230)](function() {
        const
            _0x182c1e = _0x426b82,
            _0x55e11a = $(this)[_0x182c1e(0x1ec)](_0x182c1e(0x220));
        if (_0x55e11a) {
            const
                _0x18626d = parseInt(_0x55e11a[_0x182c1e(0x227)]('-')[0x1]);
            !isNaN(_0x18626d) &&
                _0x18626d > _0x13bfd4 && (_0x13bfd4 = _0x18626d);
        }
    }), $('[data-clone-input=\x22' +
        _0x1c913e + _0x426b82(0xde))['each'](function() {
        const _0x4e7971 = _0x426b82,
            _0x3ba32d = $(this)[_0x4e7971(0x1ec)](_0x4e7971(0x220));
        if (_0x3ba32d) {
            const
                _0x1072d0 = parseInt(_0x3ba32d['split']('-')[0x1]);
            !isNaN(_0x1072d0) && _0x1072d0 >
                _0x13bfd4 && (_0x13bfd4 = _0x1072d0);
        }
    }), $(_0x426b82(0xc6) + _0x1c913e + _0x426b82(
        0x13c))[_0x426b82(0x230)](function() {
        const _0x43762a = _0x426b82,
            _0x54c946 = $(this)['attr'](_0x43762a(0x220));
        if (_0x54c946) {
            const _0x3f9cfa =
                parseInt(_0x54c946[_0x43762a(0x227)]('-')[0x1]);
            !isNaN(_0x3f9cfa) && _0x3f9cfa >
                _0x13bfd4 && (_0x13bfd4 = _0x3f9cfa);
        }
    }), _0x13bfd4++, _0x50d5e3[_0x426b82(0x23b)](
        _0x426b82(0x1b7))[_0x426b82(0x230)](function() {
        const _0x11752c = _0x426b82,
            _0x511d2b = $(this)[_0x11752c(0x1ec)](_0x11752c(0x220));
        let _0x1758e4 = _0x511d2b +
            '-' + _0x13bfd4;
        $(this)[_0x11752c(0x19b)](''), $(this)['attr'](_0x11752c(0x220), _0x1758e4), $(this)[
            'attr'](_0x11752c(0x1c3), _0x1758e4);
    }), _0x50d5e3['find']('select')[_0x426b82(0x230)](
        function() {
            const _0xd95e87 = _0x426b82,
                _0x27a8c6 = $(this)[_0xd95e87(0x1ec)](_0xd95e87(0x220));
            let _0x39f014 = _0x27a8c6 +
                '-' + _0x13bfd4;
            $(this)['val'](''), $(this)[_0xd95e87(0x1ec)]('name', _0x39f014), $(this)[_0xd95e87(
                0x1ec)](_0xd95e87(0x1c3), _0x39f014);
        }), _0x50d5e3[_0x426b82(0x23b)](_0x426b82(
        0x133))[_0x426b82(0x230)](function() {
        const _0x569ee2 = _0x426b82,
            _0x456d4d = $(this)[_0x569ee2(0x1ec)](_0x569ee2(0x220));
        let _0x3056b4 = _0x456d4d +
            '-' + _0x13bfd4;
        $(this)[_0x569ee2(0x19b)](''), $(this)[_0x569ee2(0x1ec)](_0x569ee2(0x220), _0x3056b4),
            $(this)['attr']('data-name', _0x3056b4);
    }), _0x519738['find'](_0x426b82(0x21c))[
        _0x426b82(0x230)](function() {
        const _0x4b4ffd = _0x426b82;
        $(this)[_0x4b4ffd(0x1ec)](_0x4b4ffd(0x272), _0x4b4ffd(0xf8) + _0x13bfd4);
    }), $(this)[
        _0x426b82(0xb8)](_0x426b82(0x175) + _0x1c913e + '\x22]')[_0x426b82(0x126)](_0x50d5e3), $(
        _0x426b82(0x18d))['eq'](_0xbf46c)['find'](_0x426b82(0x274) + _0x1c913e + '\x22]')[
        'append'](_0x519738), $('[data-input-index=\x22' + _0x1c913e + '\x22]')[_0x426b82(0x230)](
        function() {
            const _0x5785a3 = _0x426b82;
            $(this)[_0x5785a3(0xe8)]($(this)[_0x5785a3(0x264)](_0x5785a3(0xc6) + _0x1c913e +
                '\x22]')['index']() + 0x1);
        }), $('[data-display-input-index=\x22' + _0x1c913e +
        '\x22]')[_0x426b82(0x230)](function() {
        const _0x23db4f = _0x426b82;
        $(this)['text']($(this)[_0x23db4f(0x264)](_0x23db4f(0x189) + _0x1c913e + '\x22]')[
            _0x23db4f(0x212)]() + 0x1);
    });
    let _0x29f61a = $('[data-clone-input-wrapper=\x22' +
        _0x1c913e + _0x426b82(0xaf) + _0x1c913e + '\x22]')[_0x426b82(0x280)];
    if (_0x29f61a >=
        _0xa252e9) { $(this)[_0x426b82(0x19c)](); return; }
    $(this)[_0x426b82(0x1d2)](),
        cloneRemoveInput(), validation();
}), $(_0x37f079(0x24a))['on']('click', function() {
    const
        _0x2ba0c9 = _0x37f079,
        _0x11687c = $(this)[_0x2ba0c9(0x1b1)](_0x2ba0c9(0x1b9));
    $('input[name=\x22' + _0x11687c + '\x22]')[_0x2ba0c9(0x19b)](''), validation();
});

function andLogic() {
    const _0x4a2b95 = _0x37f079;
    conditionalResult && (steps['eq'](x)[_0x4a2b95(0x23b)](_0x4a2b95(0x172))[_0x4a2b95(0x19c)](),
        steps['eq'](x)[_0x4a2b95(0x23b)](_0x4a2b95(0x172))['each'](function() {
            const _0xe778d5 =
                _0x4a2b95;

            function _0x2e0c6a(_0x560c60) {
                const _0x48aecf = _0x31ef,
                    _0x304726 = _0x560c60[_0x48aecf(0x227)]('&'),
                    _0xd4f02 = [];
                return _0x304726['forEach'](_0x2133ce => {
                    const _0x29f8fc = _0x48aecf,
                        [_0x3530c2, _0x2bf7cf] = _0x2133ce[_0x29f8fc(0x227)]('=');
                    _0xd4f02['push']({ 'field': _0x3530c2, 'value': _0x2bf7cf });
                }), _0xd4f02;
            }
            const
                _0x1eabba = $(this)[_0xe778d5(0x1ec)](_0xe778d5(0x1cd)),
                _0x76b060 = _0x2e0c6a(_0x1eabba);

            function _0x28b0e8(_0x2bdedd, _0x3bddf7) {
                return _0x3bddf7['some']((_0x583b8a,
                    _0x4e752d) => {
                    const _0x439370 = _0x31ef;
                    if (_0x2bdedd[0x0] && _0x583b8a[
                            _0x439370(0x210)] === _0x2bdedd[0x0][_0x439370(0x210)]) return _0x2bdedd[
                        _0x439370(0x18c)]((_0x59231f, _0x1103e4) => _0x3bddf7[_0x4e752d +
                            _0x1103e4] && _0x3bddf7[_0x4e752d + _0x1103e4][_0x439370(0x210)] ===
                        _0x59231f[_0x439370(0x210)] && _0x3bddf7[_0x4e752d + _0x1103e4][_0x439370(
                            0xb5)] === _0x59231f[_0x439370(0xb5)]);
                    return ![];
                });
            }
            const _0x2a1a19 =
                _0x28b0e8(_0x76b060, all_data);
            _0x2a1a19 ? $(this)[_0xe778d5(0x1d2)]() : $(this)[_0xe778d5(0x19c)]();
        }));
}
$(_0x37f079(
    0x1e1))[_0x37f079(0x97)](_0x37f079(0x19c)), $(_0x37f079(0x26a))['on'](_0x37f079(0x1b7),
    function() {
        const _0x39e16b = _0x37f079,
            _0x10453a = $(this)[_0x39e16b(0x1b1)]('progressive-input'),
            _0x3f7366 = $(this)['val'](),
            _0x319c44 = $(_0x39e16b(0x2a5) + _0x10453a + '\x22]')[_0x39e16b(0x1b1)](_0x39e16b(
                0xc0));
        let _0x275ae6 = $(_0x39e16b(0x2a5) + _0x10453a + _0x39e16b(0x181) + _0x3f7366 +
                '\x22]'),
            _0x29a4e8 = $(_0x39e16b(0x2a5) + _0x10453a +
                '\x22][data-progressive-input-value=\x22*\x22]');
        $(_0x39e16b(0x2a5) + _0x10453a + '\x22]')['addClass']('hide'), $(_0x39e16b(0x2a5) +
            _0x10453a + '\x22]')['removeClass'](_0x39e16b(0x1d2));
        _0x3f7366 !== '' && (_0x319c44 === '*' && _0x3f7366 !== '' ? (_0x29a4e8[_0x39e16b(0x145)](
            _0x39e16b(0x19c)), _0x29a4e8[_0x39e16b(0x97)]('show')) : (_0x275ae6[_0x39e16b(0x145)](
            _0x39e16b(0x19c)), _0x275ae6[_0x39e16b(0x97)]('show')));

        function _0x4645a7(_0x57e82f) {
            const _0x319a0f = _0x39e16b;
            _0x57e82f && ($(_0x319a0f(0xa2) + _0x57e82f + '\x22]')['val']() !== '' && $(
                '[data-progressive-input=\x22' + _0x57e82f + '\x22]')['trigger'](_0x319a0f(0x1b7)));
        }
        let
            _0x5c0448 = $(_0x39e16b(0x2a5) + _0x10453a + '\x22]')['find']('[data-progressive-input]')[
                _0x39e16b(0x1b1)](_0x39e16b(0x196));
        _0x4645a7(_0x5c0448), $(_0x39e16b(0x27d))[_0x39e16b(0x230)](function() {
            const _0x1b2ebb =
                _0x39e16b,
                _0x37fee6 = $(this)[_0x1b2ebb(0x1b1)]('progressive-input');
            $('[data-progressive-target=\x22' + _0x37fee6 + '\x22]')[_0x1b2ebb(0x145)](_0x1b2ebb(
                0x1d2)), $(_0x1b2ebb(0x2a5) + _0x37fee6 + '\x22]')['addClass']('hide');
        });
    });

function addClickClass() {
    const _0x10b454 = _0x37f079,
        _0xd1b64c = $(this)[_0x10b454(0x1b1)](_0x10b454(0x28b)),
        _0x4241c0 = $(this)[_0x10b454(0x1ec)](_0x10b454(0x220));
    $(_0x10b454(0x23c) + _0x4241c0 + '\x22]')[_0x10b454(0x29d)]()[_0x10b454(0x145)](_0xd1b64c), $(
        this)['is'](':checked') && $(this)[_0x10b454(0x29d)]()[_0x10b454(0x97)](_0xd1b64c);
}
$(
    _0x37f079(0x11d))['on'](_0x37f079(0x22c), addClickClass);
const GET_COUNTER_URL = 'https://x8ki-letl-twmt.n7.xano.io/api:EbCCRNhB/counter/1',
    UPDATE_COUNTER_URL = _0x37f079(0x1ea),
    GET_LIVE_COUNTER_URL = _0x37f079(0x1e6),
    UPDATE_LIVE_COUNTER_URL = _0x37f079(0x1e6);

function getCounter() {
    const _0x167b5b = _0x37f079;
    $[_0x167b5b(0x8f)](GET_COUNTER_URL, function(_0x55eb95) {
        const _0x36d338 = _0x167b5b;
        if (
            _0x55eb95) {
            const _0x12547b = _0x55eb95[_0x36d338(0x1e8)];
            updateCounter(_0x12547b + 0x1);
        } else console['error'](_0x36d338(0x23a));
    });
}

function updateCounter(_0x3a4407) {
    const _0x50cf41 = _0x37f079;
    var _0x2a6e11 = new Date(),
        _0xf72f23 = _0x2a6e11[_0x50cf41(0x169)](),
        _0x584913 = btoa('counter'),
        _0x4b904f = btoa(_0xf72f23[_0x50cf41(0x160)]()),
        _0x311d67 = getCookie(_0x584913);
    if (!_0x311d67 || _0x311d67 !== _0x4b904f) $[_0x50cf41(0x136)]
        ({
            'url': UPDATE_COUNTER_URL,
            'type': _0x50cf41(
                0x22d),
            'contentType': 'application/json',
            'data': JSON[_0x50cf41(0x1ff)]
                ({ 'Total': _0x3a4407 }),
            'success': function(_0x45f448) {
                const _0x2e785b = _0x50cf41;
                document[_0x2e785b(0x293)] = _0x584913 + '=' + _0x4b904f;
            },
            'error': function(_0x3b4e2d,
                _0xff15ea, _0x1ea5ee) {}
        });
    else {}
}

function getCookie(_0x24441a) {
    const _0x1f71c3 = _0x37f079;
    var _0x2d217a = null;
    if (document[
            _0x1f71c3(0x293)] && document[_0x1f71c3(0x293)] !== '') {
        var _0x48eed4 = document['cookie'][
            _0x1f71c3(0x227)
        ](';');
        for (var _0xa4d043 = 0x0; _0xa4d043 < _0x48eed4[_0x1f71c3(0x280)]; _0xa4d043++) {
            var
                _0x48817f = _0x48eed4[_0xa4d043]['trim']();
            if (_0x48817f[_0x1f71c3(0x141)](0x0, _0x24441a[
                    _0x1f71c3(0x280)] + 0x1) === _0x24441a + '=') {
                _0x2d217a = decodeURIComponent(_0x48817f[
                    _0x1f71c3(0x141)](_0x24441a[_0x1f71c3(0x280)] +
                    0x1));
                break;
            }
        }
    }
    return _0x2d217a;
}
getCounter(), scrollTop(), cloneRemove(),
    cloneRemoveInput();
const formlyUrlParams = new URLSearchParams(window[_0x37f079(0x29f)][_0x37f079(0x105)]),
    formlySupportParam = formlyUrlParams[_0x37f079(0x8f)](_0x37f079(0x1b5)),
    showButton = formlySupportParam === 'true',
    passIcon = _0x37f079(0xf1),
    failIcon = _0x37f079(0x112);
let isScriptLoaded = !![],
    scriptLocation = 'head',
    isMultistepAttributePresent = !![],
    isMultistepOnFormElement = !![],
    areButtonsPresent = !![],
    isNextBtnOnSubmit = ![],
    isSubmitBtnOnSubmit = !![],
    isBackBtnOnSubmit = ![],
    formType = logicExtra ? _0x37f079(0x167) : _0x37f079(0x203),
    resultStatus = 'PASS',
    scriptSrcAdded = '';

function isElementPresent(_0x93a4c9, _0x45b162) {
    return document['querySelector']('[' + _0x45b162 +
        '=\x22' + _0x93a4c9 + '\x22]') !== null;
}
isMultistepAttributePresent = isElementPresent(
    _0x37f079(0x1fb), 'data-form');
const multistepForm = document[_0x37f079(0x215)]('form[data-form=\x22multistep\x22]'),
    formStepLength = multistepForm['querySelectorAll'](_0x37f079(0x1fa))[_0x37f079(0x280)];
isMultistepOnFormElement = multistepForm !== null;
const multistepContainer = document[_0x37f079(0x215)]('[data-form=\x22multistep\x22]'),
    nextBtnExist = multistepContainer[_0x37f079(0x215)](_0x37f079(0x223)),
    backBtnExist = multistepContainer[_0x37f079(0x215)](_0x37f079(0x91)),
    submitBtnExist = multistepContainer[_0x37f079(0x215)](_0x37f079(0x29a));
areButtonsPresent = nextBtnExist !== null && backBtnExist !== null && submitBtnExist !== null,
    isNextBtnOnSubmit = nextBtnExist && nextBtnExist[_0x37f079(0x113)][_0x37f079(0xd4)]() ===
    _0x37f079(0x1b7), isSubmitBtnOnSubmit = submitBtnExist && submitBtnExist['tagName'][_0x37f079(
        0xd4)]() === _0x37f079(0x1b7) && submitBtnExist[_0x37f079(0x224)][_0x37f079(0xd4)]() ===
    'submit', isBackBtnOnSubmit = backBtnExist && backBtnExist[_0x37f079(0x113)][_0x37f079(0xd4)]
    () === 'input';
const checkPowerup = _0x150937 => document[_0x37f079(0x215)](_0x150937) !== null,
    progressBarAttr = checkPowerup(_0x37f079(0x26b)),
    progressIndicatorAttr = checkPowerup('[data-form=\x22progress-indicator\x22]'),
    customProgressAttr = checkPowerup(_0x37f079(0x11c)),
    cardDivAttr = checkPowerup('[data-card=\x22true\x22]'),
    currentStepAttr = checkPowerup(_0x37f079(0xea)),
    totalStepAttr = checkPowerup('[data-text=\x22total-steps\x22]'),
    enterAttr = checkPowerup(_0x37f079(0xb9)),
    submitAttr = checkPowerup(_0x37f079(0x265)),
    radioSkipAttr = checkPowerup(_0x37f079(0x123)),
    customCheckboxAttr = checkPowerup('[data-checkbox]'),
    recapatchaAttr = checkPowerup(_0x37f079(0x26e));
(!isScriptLoaded || scriptLocation !== 'head' || !isMultistepAttributePresent || !
    isMultistepOnFormElement || !areButtonsPresent || isNextBtnOnSubmit || !isSubmitBtnOnSubmit ||
    isBackBtnOnSubmit) && (resultStatus = _0x37f079(0x15f));

function isScriptUrlMatch(_0x20844c, _0x1ab456) {
    const _0x2dd737 = _0x37f079;
    for (var _0x5c9690 =
            0x0; _0x5c9690 < _0x1ab456[_0x2dd737(0x280)]; _0x5c9690++) {
        if (_0x20844c[_0x2dd737(0x176)](
                _0x1ab456[_0x5c9690])) return !![];
    }
    return ![];
}
var keywordsToCheck = [_0x37f079(0x124), _0x37f079(0x1b8)],
    scripts = document[_0x37f079(0xd8)]('script'),
    matchedScripts = [];
for (var i = 0x0; i < scripts[_0x37f079(0x280)]; i++) {
    var scriptSrcs = scripts[i]['src'];
    isScriptUrlMatch(scriptSrcs, keywordsToCheck) && matchedScripts[_0x37f079(0x1a1)](scriptSrcs);
}
if (matchedScripts[_0x37f079(0x280)] > 0x0) {
    scriptSrcAdded = matchedScripts;
    const script =
        document[_0x37f079(0x215)](_0x37f079(0x249) + scriptSrcAdded + '\x22]');
    script && (scriptLocation = script[_0x37f079(0x151)][_0x37f079(0x113)] === 'BODY' ? _0x37f079(
        0x1f9) : 'Inside\x20<head>\x20tag');
} else scriptSrcAdded =
    'No\x20Formly\x20script\x20added\x20to\x20the\x20page!' + failIcon;
const newElement = document['createElement'](_0x37f079(0x25d)),
    newStyle = document[_0x37f079(0x27b)]('style');
newStyle[_0x37f079(0x9e)] = _0x37f079(0x20d), document[_0x37f079(0x21e)][_0x37f079(0x143)](
    newStyle);
showButton && document[_0x37f079(0x84)][_0x37f079(0x143)](newElement);
newElement[_0x37f079(0x9e)] = _0x37f079(0x197) + formType + _0x37f079(0x232) + scriptSrcAdded +
    '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>Script\x20Location:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>' +
    scriptLocation +
    '</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Attributes</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>1.\x20Form:\x20data-form=multistep\x20' +
    (isMultistepOnFormElement ? passIcon : failIcon) + _0x37f079(0x1af) + (formStepLength > 0x0 ?
        passIcon : failIcon) + _0x37f079(0xeb) + formStepLength + _0x37f079(0xf5) + (nextBtnExist ?
        passIcon : failIcon) + _0x37f079(0x87) + (isNextBtnOnSubmit ? failIcon : passIcon) + _0x37f079(
        0x173) + (backBtnExist ? passIcon : failIcon) +
    '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Back\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button' +
    (isBackBtnOnSubmit ? failIcon : passIcon) +
    '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>5.\x20Submit\x20Buttons:\x20data-form=next-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Submit\x20button\x20present?\x20' +
    (backBtnExist ? passIcon : failIcon) + _0x37f079(0x10f) + (isSubmitBtnOnSubmit ? passIcon :
        failIcon) +
    '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Powerups</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20' +
    (progressBarAttr && progressIndicatorAttr ?
        '<strong\x20class=\x22f-text-white\x22>Automatic\x20Progress\x20Indicators\x20' + passIcon +
        _0x37f079(0x95) : '') + _0x37f079(0xa4) + (customProgressAttr ? _0x37f079(0x15d) + passIcon +
        _0x37f079(0x95) : '') + _0x37f079(0xa4) + (cardDivAttr ? _0x37f079(0x185) + passIcon +
        '</strong>' : '') + _0x37f079(0xa4) + (currentStepAttr ? _0x37f079(0x217) + passIcon +
        _0x37f079(0x95) : '') + _0x37f079(0xa4) + (totalStepAttr ? _0x37f079(0x157) + passIcon +
        _0x37f079(0x95) : '') + _0x37f079(0xa4) + (enterAttr ? _0x37f079(0x16a) + passIcon + _0x37f079(
        0x95) : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + (submitAttr ?
        '<strong\x20class=\x22f-text-white\x22>Press\x20\x22⌘\x20+\x20Enter\x20\x22\x20To\x20Submit\x20' +
        passIcon + _0x37f079(0x95) : '') + _0x37f079(0xa4) + (radioSkipAttr ? _0x37f079(0x277) +
        passIcon + _0x37f079(0x95) : '') + _0x37f079(0xa4) + (customCheckboxAttr ? _0x37f079(0x17e) +
        passIcon + _0x37f079(0x95) : '') + _0x37f079(0xa4) + (recapatchaAttr ? _0x37f079(0x231) +
        passIcon + _0x37f079(0x95) : '') + _0x37f079(0x1c8);

function openNav() {
    const _0x121041 = _0x37f079;
    document[_0x121041(0x27a)]('f-mySidenav')['style'][_0x121041(0xa5)] = _0x121041(0x208), document[
        _0x121041(0x27a)](_0x121041(0x1d4))[_0x121041(0x1d9)][_0x121041(0x205)] = _0x121041(0x22f);
}

function closeNav() {
    const _0x2e9b0f = _0x37f079;
    document[_0x2e9b0f(0x27a)](_0x2e9b0f(0x1d4))['style']['width'] = '0', document['getElementById'](
        _0x2e9b0f(0x1d4))[_0x2e9b0f(0x1d9)][_0x2e9b0f(0x205)] = _0x2e9b0f(0x21d);
}