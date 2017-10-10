'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _reactHelmet = require('react-helmet');

var _button = require('../comps/button.js');

var _nav = require('../comps/nav.js');

var _input = require('../comps/input.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/albingroen/Gymnasiearbete-17-18-REACTJS/pages/index.js?entry';


var Index = function (_React$Component) {
  (0, _inherits3.default)(Index, _React$Component);

  function Index() {
    (0, _classCallCheck3.default)(this, Index);

    return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).apply(this, arguments));
  }

  (0, _createClass3.default)(Index, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react2.default.createElement(_reactHelmet.Helmet, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, 'League of legends stats - Albin Groen & Albin Iivari')), _react2.default.createElement(_nav.Nav, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }), _react2.default.createElement('div', { className: 'header', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement('div', { className: 'headerContent', 'data-jsx': 1671173914,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement('h1', { className: 'title', 'data-jsx': 1671173914,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, 'Search for summoner'), _react2.default.createElement('p', { className: 'about-site', 'data-jsx': 1671173914,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, 'Enter a summoner name to recieve to most necessary information about the player.'), _react2.default.createElement(_input.Input, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: 1671173914,
        css: '*{padding:0;margin:0}body{background:white}.header{height:80vh;widht:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.headerContent{text-align:center;padding-left:30px;padding-right:30px}.title,.about-site{color:#222;font-family:\'Roboto\',sanss-serif;font-weight:400;font-size:40px;margin-bottom:20px}.about-site{font-family:\'Lato\',sanss-serif;font-weight:400;font-size:17px;width:400px;margin-bottom:70px;opacity:.5}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCK0IsQUFHdUIsQUFJTyxBQUdMLEFBUU0sQUFNUCxBQU9xQixVQTNCdkIsQ0FxQnlCLENBZHZCLEtBSGIsQ0FXb0IsQ0FkcEIsSUFPZSxRQW9CRyxLQVpHLFFBTUgsR0FPRCxRQVpqQixLQU1pQixFQVFmLFlBQW1CLENBUEEsa0JBUVIsQ0FQYixHQWhCcUIsT0F3QnJCLHNGQXZCeUIsbUdBRXpCIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbGJpbmdyb2VuL0d5bW5hc2llYXJiZXRlLTE3LTE4LVJFQUNUSlMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tICdyZWFjdC1oZWxtZXQnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi9jb21wcy9idXR0b24uanMnXG5pbXBvcnQgeyBOYXYgfSBmcm9tICcuLi9jb21wcy9uYXYuanMnXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJy4uL2NvbXBzL2lucHV0LmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlbG1ldD5cbiAgICAgICAgICA8dGl0bGU+TGVhZ3VlIG9mIGxlZ2VuZHMgc3RhdHMgLSBBbGJpbiBHcm9lbiAmIEFsYmluIElpdmFyaTwvdGl0bGU+XG4gICAgICAgIDwvSGVsbWV0PlxuICAgICAgICA8TmF2IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJDb250ZW50XCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5TZWFyY2ggZm9yIHN1bW1vbmVyPC9oMT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFib3V0LXNpdGVcIj5cbiAgICAgICAgICAgICAgRW50ZXIgYSBzdW1tb25lciBuYW1lIHRvIHJlY2lldmUgdG8gbW9zdCBuZWNlc3NhcnkgaW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgYWJvdXQgdGhlIHBsYXllci5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxJbnB1dCAvPlxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHZoO1xuICAgICAgICAgICAgd2lkaHQ6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgICAgfVxuICAgICAgICAgIC5oZWFkZXJDb250ZW50IHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50aXRsZSxcbiAgICAgICAgICAuYWJvdXQtc2l0ZSB7XG4gICAgICAgICAgICBjb2xvcjogIzIyMjtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fuc3Mtc2VyaWY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmFib3V0LXNpdGUge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fuc3Mtc2VyaWY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgd2lkdGg6IDQwMHB4ICAgICAgICAgICAgXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA3MHB4O1xuICAgICAgICAgICAgb3BhY2l0eTogLjU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgIGhlaWdodDogNTB2aDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyNTAsIDI1MCwgMjUwKTtcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigyMzQsIDIzNCwgMjM0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=pages/index.js?entry */'
      }))), _react2.default.createElement('div', { className: 'content', 'data-jsx': 364779009,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: 364779009,
        css: '.content[data-jsx="364779009"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;height:50vh;width:100%;background:rgb(250,250,250);border-top:1px solid rgb(234,234,234)}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdFc0IsQUFHNEIsMEVBQ1UsbUdBQ0osNkZBQ0oseURBQ0gsWUFDRCxXQUNtQiw0QkFDVSxzQ0FDMUMiLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FsYmluZ3JvZW4vR3ltbmFzaWVhcmJldGUtMTctMTgtUkVBQ1RKUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldCdcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2NvbXBzL2J1dHRvbi5qcydcbmltcG9ydCB7IE5hdiB9IGZyb20gJy4uL2NvbXBzL25hdi5qcydcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnLi4vY29tcHMvaW5wdXQuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVsbWV0PlxuICAgICAgICAgIDx0aXRsZT5MZWFndWUgb2YgbGVnZW5kcyBzdGF0cyAtIEFsYmluIEdyb2VuICYgQWxiaW4gSWl2YXJpPC90aXRsZT5cbiAgICAgICAgPC9IZWxtZXQ+XG4gICAgICAgIDxOYXYgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlckNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlNlYXJjaCBmb3Igc3VtbW9uZXI8L2gxPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWJvdXQtc2l0ZVwiPlxuICAgICAgICAgICAgICBFbnRlciBhIHN1bW1vbmVyIG5hbWUgdG8gcmVjaWV2ZSB0byBtb3N0IG5lY2Vzc2FyeSBpbmZvcm1hdGlvblxuICAgICAgICAgICAgICBhYm91dCB0aGUgcGxheWVyLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPElucHV0IC8+XG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICoge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICBoZWlnaHQ6IDgwdmg7XG4gICAgICAgICAgICB3aWRodDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgICB9XG4gICAgICAgICAgLmhlYWRlckNvbnRlbnQge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRpdGxlLFxuICAgICAgICAgIC5hYm91dC1zaXRlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMjIyO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zcy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYWJvdXQtc2l0ZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zcy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICB3aWR0aDogNDAwcHggICAgICAgICAgICBcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDcwcHg7XG4gICAgICAgICAgICBvcGFjaXR5OiAuNTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1MHZoO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDI1MCwgMjUwLCAyNTApO1xuICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDIzNCwgMjM0LCAyMzQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
      })));
    }
  }]);

  return Index;
}(_react2.default.Component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIkhlbG1ldCIsIkJ1dHRvbiIsIk5hdiIsIklucHV0IiwiSW5kZXgiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFTOztBQUNULEFBQVM7O0FBQ1QsQUFBUzs7Ozs7OztJQUVZLEE7Ozs7Ozs7Ozs7OzZCQUNWLEFBQ1A7NkJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FGSixBQUNFLEFBQ0UsQUFFRiwwRUFBQSxBQUFDOztvQkFBRDtzQkFKRixBQUlFLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWUsNkJBQWY7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLFFBQUksV0FBSixBQUFjLHFCQUFkOztvQkFBQTtzQkFBQTtBQUFBO1NBREYsQUFDRSxBQUNBLHdDQUFBLGNBQUEsT0FBRyxXQUFILEFBQWEsMEJBQWI7O29CQUFBO3NCQUFBO0FBQUE7U0FGRixBQUVFLEFBSUEscUdBQUEsQUFBQzs7b0JBQUQ7c0JBTkYsQUFNRTtBQUFBO0FBQUE7aUJBTkY7YUFOSixBQUtFLEFBQ0UsQUErQ0Y7QUEvQ0UsNEJBK0NGLGNBQUEsU0FBSyxXQUFMLEFBQWUsdUJBQWY7O29CQUFBO3NCQUFBO0FBQUE7O2lCQUFBO2FBdERKLEFBQ0UsQUFxREUsQUFnQkw7QUFoQks7Ozs7O0VBeEQyQixnQkFBTSxBOztrQkFBcEIsQSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWxiaW5ncm9lbi9HeW1uYXNpZWFyYmV0ZS0xNy0xOC1SRUFDVEpTIn0=