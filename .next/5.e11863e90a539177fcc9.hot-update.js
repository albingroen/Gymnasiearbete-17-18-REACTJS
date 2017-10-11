webpackHotUpdate(5,{

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, __resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(21);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(22);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(420);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(15);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(421);

var _link2 = _interopRequireDefault(_link);

var _button = __webpack_require__(427);

var _nav = __webpack_require__(441);

var _input = __webpack_require__(442);

var _scrollHint = __webpack_require__(443);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/albingroen/Gymnasiearbete-17-18-REACTJS/pages/index.js?entry';


var Index = function (_React$Component) {
  (0, _inherits3.default)(Index, _React$Component);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call.apply(_ref, [this].concat(args))), _this), _this.state = { name: null // här är vad `this.state.name` är satt till i början
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Index, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (process.browser) {
        var name = window.prompt('Name?');
        this.setState({ name: name });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var name = this.state.name;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, 'name: ', name), _react2.default.createElement(_nav.Nav, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), _react2.default.createElement('div', { className: 'header', __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement('div', { className: 'headerContent', 'data-jsx': 4197641465,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement('h1', { className: 'title', 'data-jsx': 4197641465,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, 'Search for summoner'), _react2.default.createElement('p', { className: 'about-site', 'data-jsx': 4197641465,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, 'Enter a summoner name to recieve to most necessary information about the player.'), _react2.default.createElement(_input.Input, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }), _react2.default.createElement(_scrollHint.Scrollhint, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: 4197641465,
        css: '*{padding:0;margin:0}body{background:white}.header{height:80vh;widht:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.headerContent{text-align:center;padding-left:30px;padding-right:30px}.title,.about-site{color:#222;font-family:\'Roboto\',sanss-serif;font-weight:400;font-size:40px;margin-bottom:20px}.title{font-weight:300!important;-webkit-letter-spacing:.5px;-moz-letter-spacing:.5px;-ms-letter-spacing:.5px;letter-spacing:.5px}.about-site{font-family:\'Lato\',sanss-serif;font-weight:400;font-size:17px;width:400px;margin-bottom:70px;opacity:.5}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDK0IsQUFHdUIsQUFJTyxBQUdMLEFBUU0sQUFNUCxBQU9lLEFBSU0sVUEvQnZCLENBcUJ5QixDQWR2QixLQUhiLENBV29CLENBZHBCLElBT2UsR0FvQk8sS0FJSixLQWhCRyxRQU1ILEdBV0QsUUFoQmpCLEtBTWlCLEVBWWYsWUFBbUIsQ0FYQSxrQkFZUixDQVhiLEdBaEJxQixPQTRCckIsbUJBUkEsbUVBbkJ5QixtR0FFekIiLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FsYmluZ3JvZW4vR3ltbmFzaWVhcmJldGUtMTctMTgtUkVBQ1RKUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2NvbXBzL2J1dHRvbi5qcydcbmltcG9ydCB7IE5hdiB9IGZyb20gJy4uL2NvbXBzL25hdi5qcydcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnLi4vY29tcHMvaW5wdXQuanMnXG5pbXBvcnQgeyBTY3JvbGxoaW50IH0gZnJvbSAnLi4vY29tcHMvc2Nyb2xsSGludC5qcydcblxuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHsgbmFtZTogbnVsbCB9IC8vIGjDpHIgw6RyIHZhZCBgdGhpcy5zdGF0ZS5uYW1lYCDDpHIgc2F0dCB0aWxsIGkgYsO2cmphblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XG4gICAgICBjb25zdCBuYW1lID0gd2luZG93LnByb21wdCgnTmFtZT8nKVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IG5hbWUgfSlcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2Pm5hbWU6IHtuYW1lfTwvZGl2PlxuXG4gICAgICAgIDxOYXYgLz5cbiAgICAgICAgey8qIDxoMT57bmFtZX08L2gxPiAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlckNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlNlYXJjaCBmb3Igc3VtbW9uZXI8L2gxPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWJvdXQtc2l0ZVwiPlxuICAgICAgICAgICAgICBFbnRlciBhIHN1bW1vbmVyIG5hbWUgdG8gcmVjaWV2ZSB0byBtb3N0IG5lY2Vzc2FyeSBpbmZvcm1hdGlvblxuICAgICAgICAgICAgICBhYm91dCB0aGUgcGxheWVyLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPElucHV0IC8+XG4gICAgICAgICAgICA8U2Nyb2xsaGludCAvPlxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHZoO1xuICAgICAgICAgICAgd2lkaHQ6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgICAgfVxuICAgICAgICAgIC5oZWFkZXJDb250ZW50IHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50aXRsZSxcbiAgICAgICAgICAuYWJvdXQtc2l0ZSB7XG4gICAgICAgICAgICBjb2xvcjogIzIyMjtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fuc3Mtc2VyaWY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC41cHg7IFxuICAgICAgICAgIH1cbiAgICAgICAgICAuYWJvdXQtc2l0ZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zcy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICB3aWR0aDogNDAwcHggICAgICAgICAgICBcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDcwcHg7XG4gICAgICAgICAgICBvcGFjaXR5OiAuNTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1MHZoO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDI1MCwgMjUwLCAyNTApO1xuICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDIzNCwgMjM0LCAyMzQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcbiJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
      }))), _react2.default.createElement('div', { className: 'content', 'data-jsx': 364779009,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: 364779009,
        css: '.content[data-jsx="364779009"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;height:50vh;width:100%;background:rgb(250,250,250);border-top:1px solid rgb(234,234,234)}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZFc0IsQUFHNEIsMEVBQ1UsbUdBQ0osNkZBQ0oseURBQ0gsWUFDRCxXQUNtQiw0QkFDVSxzQ0FDMUMiLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FsYmluZ3JvZW4vR3ltbmFzaWVhcmJldGUtMTctMTgtUkVBQ1RKUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2NvbXBzL2J1dHRvbi5qcydcbmltcG9ydCB7IE5hdiB9IGZyb20gJy4uL2NvbXBzL25hdi5qcydcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnLi4vY29tcHMvaW5wdXQuanMnXG5pbXBvcnQgeyBTY3JvbGxoaW50IH0gZnJvbSAnLi4vY29tcHMvc2Nyb2xsSGludC5qcydcblxuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHsgbmFtZTogbnVsbCB9IC8vIGjDpHIgw6RyIHZhZCBgdGhpcy5zdGF0ZS5uYW1lYCDDpHIgc2F0dCB0aWxsIGkgYsO2cmphblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XG4gICAgICBjb25zdCBuYW1lID0gd2luZG93LnByb21wdCgnTmFtZT8nKVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IG5hbWUgfSlcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2Pm5hbWU6IHtuYW1lfTwvZGl2PlxuXG4gICAgICAgIDxOYXYgLz5cbiAgICAgICAgey8qIDxoMT57bmFtZX08L2gxPiAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlckNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlNlYXJjaCBmb3Igc3VtbW9uZXI8L2gxPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWJvdXQtc2l0ZVwiPlxuICAgICAgICAgICAgICBFbnRlciBhIHN1bW1vbmVyIG5hbWUgdG8gcmVjaWV2ZSB0byBtb3N0IG5lY2Vzc2FyeSBpbmZvcm1hdGlvblxuICAgICAgICAgICAgICBhYm91dCB0aGUgcGxheWVyLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPElucHV0IC8+XG4gICAgICAgICAgICA8U2Nyb2xsaGludCAvPlxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHZoO1xuICAgICAgICAgICAgd2lkaHQ6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgICAgfVxuICAgICAgICAgIC5oZWFkZXJDb250ZW50IHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50aXRsZSxcbiAgICAgICAgICAuYWJvdXQtc2l0ZSB7XG4gICAgICAgICAgICBjb2xvcjogIzIyMjtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fuc3Mtc2VyaWY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC41cHg7IFxuICAgICAgICAgIH1cbiAgICAgICAgICAuYWJvdXQtc2l0ZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zcy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICB3aWR0aDogNDAwcHggICAgICAgICAgICBcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDcwcHg7XG4gICAgICAgICAgICBvcGFjaXR5OiAuNTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1MHZoO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDI1MCwgMjUwLCAyNTApO1xuICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDIzNCwgMjM0LCAyMzQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcbiJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
      })));
    }
  }]);

  return Index;
}(_react2.default.Component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIkJ1dHRvbiIsIk5hdiIsIklucHV0IiwiU2Nyb2xsaGludCIsIkluZGV4Iiwic3RhdGUiLCJuYW1lIiwicHJvY2VzcyIsImJyb3dzZXIiLCJ3aW5kb3ciLCJwcm9tcHQiLCJzZXRTdGF0ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTOztBQUNULEFBQVM7O0FBQ1QsQUFBUzs7QUFDVCxBQUFTOzs7Ozs7O0lBRUgsQTs7Ozs7Ozs7Ozs7Ozs7ME0sQUFDSixVQUFVLE1BQUYsQUFBUSxLLEFBQVIsQUFBZTtBQUFmOzs7Ozt3Q0FDWSxBQUNsQjtVQUFJLFFBQUosQUFBWSxTQUFTLEFBQ25CO1lBQU0sT0FBTyxPQUFBLEFBQU8sT0FBcEIsQUFBYSxBQUFjLEFBQzNCO2FBQUEsQUFBSyxTQUFTLEVBQUUsTUFBaEIsQUFBYyxBQUFRLEFBQ3ZCO0FBQ0Y7Ozs7NkJBQ1E7VUFBQSxBQUNDLE9BQVMsS0FEVixBQUNlLE1BRGYsQUFDQyxBQUNSOzs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUFZLFVBRGQsQUFDRSxBQUVBLHVCQUFBLEFBQUM7O29CQUFEO3NCQUhGLEFBR0UsQUFFQTtBQUZBO0FBQUEsMEJBRUEsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZSw2QkFBZjs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsUUFBSSxXQUFKLEFBQWMscUJBQWQ7O29CQUFBO3NCQUFBO0FBQUE7U0FERixBQUNFLEFBQ0Esd0NBQUEsY0FBQSxPQUFHLFdBQUgsQUFBYSwwQkFBYjs7b0JBQUE7c0JBQUE7QUFBQTtTQUZGLEFBRUUsQUFJQSxxR0FBQSxBQUFDOztvQkFBRDtzQkFORixBQU1FLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLEFBQUM7O29CQUFEO3NCQVBGLEFBT0U7QUFBQTtBQUFBO2lCQVBGO2FBTkosQUFLRSxBQUNFLEFBb0RGO0FBcERFLDRCQW9ERixjQUFBLFNBQUssV0FBTCxBQUFlLHVCQUFmOztvQkFBQTtzQkFBQTtBQUFBOztpQkFBQTthQTNESixBQUNFLEFBMERFLEFBZ0JMO0FBaEJLOzs7OztFQXJFWSxnQkFBTSxBLEFBd0YxQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWxiaW5ncm9lbi9HeW1uYXNpZWFyYmV0ZS0xNy0xOC1SRUFDVEpTIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/albingroen/Gymnasiearbete-17-18-REACTJS/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/albingroen/Gymnasiearbete-17-18-REACTJS/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(167), "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5lMTE4NjNlOTBhNTM5MTc3ZmNjOS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/ZjliZDkwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi9jb21wcy9idXR0b24uanMnXG5pbXBvcnQgeyBOYXYgfSBmcm9tICcuLi9jb21wcy9uYXYuanMnXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJy4uL2NvbXBzL2lucHV0LmpzJ1xuaW1wb3J0IHsgU2Nyb2xsaGludCB9IGZyb20gJy4uL2NvbXBzL3Njcm9sbEhpbnQuanMnXG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7IG5hbWU6IG51bGwgfSAvLyBow6RyIMOkciB2YWQgYHRoaXMuc3RhdGUubmFtZWAgw6RyIHNhdHQgdGlsbCBpIGLDtnJqYW5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xuICAgICAgY29uc3QgbmFtZSA9IHdpbmRvdy5wcm9tcHQoJ05hbWU/JylcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBuYW1lOiBuYW1lIH0pXG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IHRoaXMuc3RhdGVcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdj5uYW1lOiB7bmFtZX08L2Rpdj5cblxuICAgICAgICA8TmF2IC8+XG4gICAgICAgIHsvKiA8aDE+e25hbWV9PC9oMT4gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJDb250ZW50XCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5TZWFyY2ggZm9yIHN1bW1vbmVyPC9oMT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFib3V0LXNpdGVcIj5cbiAgICAgICAgICAgICAgRW50ZXIgYSBzdW1tb25lciBuYW1lIHRvIHJlY2lldmUgdG8gbW9zdCBuZWNlc3NhcnkgaW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgYWJvdXQgdGhlIHBsYXllci5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxJbnB1dCAvPlxuICAgICAgICAgICAgPFNjcm9sbGhpbnQgLz5cbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgKiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgIGhlaWdodDogODB2aDtcbiAgICAgICAgICAgIHdpZGh0OiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAgIH1cbiAgICAgICAgICAuaGVhZGVyQ29udGVudCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGl0bGUsXG4gICAgICAgICAgLmFib3V0LXNpdGUge1xuICAgICAgICAgICAgY29sb3I6ICMyMjI7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnNzLXNlcmlmO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwIWltcG9ydGFudDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAuNXB4OyBcbiAgICAgICAgICB9XG4gICAgICAgICAgLmFib3V0LXNpdGUge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fuc3Mtc2VyaWY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgd2lkdGg6IDQwMHB4ICAgICAgICAgICAgXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA3MHB4O1xuICAgICAgICAgICAgb3BhY2l0eTogLjU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgIGhlaWdodDogNTB2aDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyNTAsIDI1MCwgMjUwKTtcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigyMzQsIDIzNCwgMjM0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTs7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFFQTtBQUZBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFJQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQVBBO0FBb0RBO0FBcERBOztBQW9EQTtBQUFBO0FBQUE7O0FBQUE7QUFnQkE7QUFoQkE7Ozs7O0FBckVBO0FBQ0E7QUF1RkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==