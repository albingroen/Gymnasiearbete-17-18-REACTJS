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

var _scrollHint = require('../comps/scrollHint.js');

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
          lineNumber: 12
        }
      }, _react2.default.createElement(_reactHelmet.Helmet, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, 'League of legends stats - Albin Groen & Albin Iivari')), _react2.default.createElement(_nav.Nav, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }), _react2.default.createElement('div', { className: 'header', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement('div', { className: 'headerContent', 'data-jsx': 1671173914,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement('h1', { className: 'title', 'data-jsx': 1671173914,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, 'Search for summoner'), _react2.default.createElement('p', { className: 'about-site', 'data-jsx': 1671173914,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, 'Enter a summoner name to recieve to most necessary information about the player.'), _react2.default.createElement(_input.Input, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }), _react2.default.createElement(_scrollHint.Scrollhint, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: 1671173914,
        css: '*{padding:0;margin:0}body{background:white}.header{height:80vh;widht:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.headerContent{text-align:center;padding-left:30px;padding-right:30px}.title,.about-site{color:#222;font-family:\'Roboto\',sanss-serif;font-weight:400;font-size:40px;margin-bottom:20px}.about-site{font-family:\'Lato\',sanss-serif;font-weight:400;font-size:17px;width:400px;margin-bottom:70px;opacity:.5}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCK0IsQUFHdUIsQUFJTyxBQUdMLEFBUU0sQUFNUCxBQU9xQixVQTNCdkIsQ0FxQnlCLENBZHZCLEtBSGIsQ0FXb0IsQ0FkcEIsSUFPZSxRQW9CRyxLQVpHLFFBTUgsR0FPRCxRQVpqQixLQU1pQixFQVFmLFlBQW1CLENBUEEsa0JBUVIsQ0FQYixHQWhCcUIsT0F3QnJCLHNGQXZCeUIsbUdBRXpCIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbGJpbmdyb2VuL0d5bW5hc2llYXJiZXRlLTE3LTE4LVJFQUNUSlMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tICdyZWFjdC1oZWxtZXQnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi9jb21wcy9idXR0b24uanMnXG5pbXBvcnQgeyBOYXYgfSBmcm9tICcuLi9jb21wcy9uYXYuanMnXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJy4uL2NvbXBzL2lucHV0LmpzJ1xuaW1wb3J0IHsgU2Nyb2xsaGludCB9IGZyb20gJy4uL2NvbXBzL3Njcm9sbEhpbnQuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVsbWV0PlxuICAgICAgICAgIDx0aXRsZT5MZWFndWUgb2YgbGVnZW5kcyBzdGF0cyAtIEFsYmluIEdyb2VuICYgQWxiaW4gSWl2YXJpPC90aXRsZT5cbiAgICAgICAgPC9IZWxtZXQ+XG4gICAgICAgIDxOYXYgLz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyQ29udGVudFwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+U2VhcmNoIGZvciBzdW1tb25lcjwvaDE+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhYm91dC1zaXRlXCI+XG4gICAgICAgICAgICAgIEVudGVyIGEgc3VtbW9uZXIgbmFtZSB0byByZWNpZXZlIHRvIG1vc3QgbmVjZXNzYXJ5IGluZm9ybWF0aW9uXG4gICAgICAgICAgICAgIGFib3V0IHRoZSBwbGF5ZXIuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8SW5wdXQgLz5cbiAgICAgICAgICAgIDxTY3JvbGxoaW50IC8+XG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICoge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICBoZWlnaHQ6IDgwdmg7XG4gICAgICAgICAgICB3aWRodDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgICB9XG4gICAgICAgICAgLmhlYWRlckNvbnRlbnQge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRpdGxlLFxuICAgICAgICAgIC5hYm91dC1zaXRlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMjIyO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zcy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYWJvdXQtc2l0ZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zcy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICB3aWR0aDogNDAwcHggICAgICAgICAgICBcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDcwcHg7XG4gICAgICAgICAgICBvcGFjaXR5OiAuNTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1MHZoO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDI1MCwgMjUwLCAyNTApO1xuICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDIzNCwgMjM0LCAyMzQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
      }))), _react2.default.createElement('div', { className: 'content', 'data-jsx': 364779009,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: 364779009,
        css: '.content[data-jsx="364779009"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;height:50vh;width:100%;background:rgb(250,250,250);border-top:1px solid rgb(234,234,234)}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Fc0IsQUFHNEIsMEVBQ1UsbUdBQ0osNkZBQ0oseURBQ0gsWUFDRCxXQUNtQiw0QkFDVSxzQ0FDMUMiLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FsYmluZ3JvZW4vR3ltbmFzaWVhcmJldGUtMTctMTgtUkVBQ1RKUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldCdcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2NvbXBzL2J1dHRvbi5qcydcbmltcG9ydCB7IE5hdiB9IGZyb20gJy4uL2NvbXBzL25hdi5qcydcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnLi4vY29tcHMvaW5wdXQuanMnXG5pbXBvcnQgeyBTY3JvbGxoaW50IH0gZnJvbSAnLi4vY29tcHMvc2Nyb2xsSGludC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWxtZXQ+XG4gICAgICAgICAgPHRpdGxlPkxlYWd1ZSBvZiBsZWdlbmRzIHN0YXRzIC0gQWxiaW4gR3JvZW4gJiBBbGJpbiBJaXZhcmk8L3RpdGxlPlxuICAgICAgICA8L0hlbG1ldD5cbiAgICAgICAgPE5hdiAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJDb250ZW50XCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5TZWFyY2ggZm9yIHN1bW1vbmVyPC9oMT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFib3V0LXNpdGVcIj5cbiAgICAgICAgICAgICAgRW50ZXIgYSBzdW1tb25lciBuYW1lIHRvIHJlY2lldmUgdG8gbW9zdCBuZWNlc3NhcnkgaW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgYWJvdXQgdGhlIHBsYXllci5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxJbnB1dCAvPlxuICAgICAgICAgICAgPFNjcm9sbGhpbnQgLz5cbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgKiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgIGhlaWdodDogODB2aDtcbiAgICAgICAgICAgIHdpZGh0OiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAgIH1cbiAgICAgICAgICAuaGVhZGVyQ29udGVudCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGl0bGUsXG4gICAgICAgICAgLmFib3V0LXNpdGUge1xuICAgICAgICAgICAgY29sb3I6ICMyMjI7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnNzLXNlcmlmO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hYm91dC1zaXRlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnNzLXNlcmlmO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgIHdpZHRoOiA0MDBweCAgICAgICAgICAgIFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNzBweDtcbiAgICAgICAgICAgIG9wYWNpdHk6IC41O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDUwdmg7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjUwLCAyNTAsIDI1MCk7XG4gICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMjM0LCAyMzQsIDIzNCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=pages/index.js?entry */'
      })));
    }
  }]);

  return Index;
}(_react2.default.Component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIkhlbG1ldCIsIkJ1dHRvbiIsIk5hdiIsIklucHV0IiwiU2Nyb2xsaGludCIsIkluZGV4IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBUzs7QUFDVCxBQUFTOztBQUNULEFBQVM7O0FBQ1QsQUFBUzs7Ozs7OztJQUVZLEE7Ozs7Ozs7Ozs7OzZCQUNWLEFBQ1A7NkJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FGSixBQUNFLEFBQ0UsQUFFRiwwRUFBQSxBQUFDOztvQkFBRDtzQkFKRixBQUlFLEFBRUE7QUFGQTtBQUFBLDBCQUVBLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWUsNkJBQWY7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLFFBQUksV0FBSixBQUFjLHFCQUFkOztvQkFBQTtzQkFBQTtBQUFBO1NBREYsQUFDRSxBQUNBLHdDQUFBLGNBQUEsT0FBRyxXQUFILEFBQWEsMEJBQWI7O29CQUFBO3NCQUFBO0FBQUE7U0FGRixBQUVFLEFBSUEscUdBQUEsQUFBQzs7b0JBQUQ7c0JBTkYsQUFNRSxBQUNBO0FBREE7QUFBQSwwQkFDQSxBQUFDOztvQkFBRDtzQkFQRixBQU9FO0FBQUE7QUFBQTtpQkFQRjthQVBKLEFBTUUsQUFDRSxBQWdERjtBQWhERSw0QkFnREYsY0FBQSxTQUFLLFdBQUwsQUFBZSx1QkFBZjs7b0JBQUE7c0JBQUE7QUFBQTs7aUJBQUE7YUF4REosQUFDRSxBQXVERSxBQWdCTDtBQWhCSzs7Ozs7RUExRDJCLGdCQUFNLEE7O2tCQUFwQixBIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbGJpbmdyb2VuL0d5bW5hc2llYXJiZXRlLTE3LTE4LVJFQUNUSlMifQ==