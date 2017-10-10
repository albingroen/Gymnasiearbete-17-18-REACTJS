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

var _card = require('../comps/card.js');

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
          lineNumber: 14
        }
      }, _react2.default.createElement(_reactHelmet.Helmet, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, 'League of legends stats - Albin Groen & Albin Iivari')), _react2.default.createElement(_nav.Nav, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }), _react2.default.createElement('div', { className: 'header', __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement('div', { className: 'headerContent', 'data-jsx': 2075239809,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement('h1', { className: 'title', 'data-jsx': 2075239809,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, 'Search for summoner'), _react2.default.createElement('p', { className: 'about-site', 'data-jsx': 2075239809,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, 'Enter a summoner name to recieve to most necessary information about the player.'), _react2.default.createElement(_input.Input, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: 2075239809,
        css: '*{padding:0;margin:0}body{background:#222}.header{height:600px;widht:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background-image:url(\'/static/Images/bg-new.png\');background-size:cover;background-position:center}.headerContent{text-align:center;padding-left:30px;padding-right:30px}.title,.about-site{color:white;font-family:\'Lato\',sanss-serif;font-weight:300;font-size:40px;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;margin-bottom:20px}.about-site{olor:white;font-family:\'Lato\',sanss-serif;font-weight:300;font-size:15px;width:400px;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;margin-bottom:70px;opacity:.4}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCK0IsQUFHdUIsQUFJTSxBQUdILEFBV0ssQUFNTixBQVFELFVBL0JGLENBZ0N1QixDQVJBLENBakJyQixHQUhiLEVBY29CLENBakJwQixLQU9lLFlBV00sTUFjSCxDQVJBLFlBTGxCLEdBY2lCLENBUkEsY0FVZixDQVRtQixXQVNBLGFBM0JBLHFFQW1CQSxXQVNBLFFBUnJCLEtBbkJ5QixNQTRCWixXQUNiLGtGQTVCb0Qsa0RBQzVCLHNCQUNLLDJCQUU3QiIsImZpbGUiOiJwYWdlcy9pbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWxiaW5ncm9lbi9HeW1uYXNpZWFyYmV0ZS0xNy0xOC1SRUFDVEpTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0J1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vY29tcHMvYnV0dG9uLmpzJ1xuaW1wb3J0IHsgTmF2IH0gZnJvbSAnLi4vY29tcHMvbmF2LmpzJ1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICcuLi9jb21wcy9pbnB1dC5qcydcbmltcG9ydCB7IENhcmQxIH0gZnJvbSAnLi4vY29tcHMvY2FyZC5qcydcbmltcG9ydCB7IENhcmQyIH0gZnJvbSAnLi4vY29tcHMvY2FyZC5qcydcbmltcG9ydCB7IENhcmQzIH0gZnJvbSAnLi4vY29tcHMvY2FyZC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWxtZXQ+XG4gICAgICAgICAgPHRpdGxlPkxlYWd1ZSBvZiBsZWdlbmRzIHN0YXRzIC0gQWxiaW4gR3JvZW4gJiBBbGJpbiBJaXZhcmk8L3RpdGxlPlxuICAgICAgICA8L0hlbG1ldD5cbiAgICAgICAgPE5hdiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyQ29udGVudFwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+U2VhcmNoIGZvciBzdW1tb25lcjwvaDE+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhYm91dC1zaXRlXCI+XG4gICAgICAgICAgICAgIEVudGVyIGEgc3VtbW9uZXIgbmFtZSB0byByZWNpZXZlIHRvIG1vc3QgbmVjZXNzYXJ5IGluZm9ybWF0aW9uXG4gICAgICAgICAgICAgIGFib3V0IHRoZSBwbGF5ZXIuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8SW5wdXQgLz5cbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgKiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyMjI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgaGVpZ2h0OiA2MDBweDtcbiAgICAgICAgICAgIHdpZGh0OiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9JbWFnZXMvYmctbmV3LnBuZycpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcblxuICAgICAgICAgIH1cbiAgICAgICAgICAuaGVhZGVyQ29udGVudCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGl0bGUsXG4gICAgICAgICAgLmFib3V0LXNpdGUge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fuc3Mtc2VyaWY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hYm91dC1zaXRlIHtcbiAgICAgICAgICAgIG9sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fuc3Mtc2VyaWY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgd2lkdGg6IDQwMHB4XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNzBweDtcbiAgICAgICAgICAgIG9wYWNpdHk6IC40O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgPENhcmQxIC8+XG4gICAgICAgICAgPENhcmQyIC8+XG4gICAgICAgICAgPENhcmQzIC8+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
      }))), _react2.default.createElement('div', { className: 'content', 'data-jsx': 1841640853,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement(_card.Card1, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }), _react2.default.createElement(_card.Card2, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }), _react2.default.createElement(_card.Card3, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: 1841640853,
        css: '.content[data-jsx="1841640853"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRFc0IsQUFHNEIsMEVBQ1UsbUdBQ0osNkZBQ0oseURBQ2pCIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbGJpbmdyb2VuL0d5bW5hc2llYXJiZXRlLTE3LTE4LVJFQUNUSlMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tICdyZWFjdC1oZWxtZXQnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi9jb21wcy9idXR0b24uanMnXG5pbXBvcnQgeyBOYXYgfSBmcm9tICcuLi9jb21wcy9uYXYuanMnXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJy4uL2NvbXBzL2lucHV0LmpzJ1xuaW1wb3J0IHsgQ2FyZDEgfSBmcm9tICcuLi9jb21wcy9jYXJkLmpzJ1xuaW1wb3J0IHsgQ2FyZDIgfSBmcm9tICcuLi9jb21wcy9jYXJkLmpzJ1xuaW1wb3J0IHsgQ2FyZDMgfSBmcm9tICcuLi9jb21wcy9jYXJkLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlbG1ldD5cbiAgICAgICAgICA8dGl0bGU+TGVhZ3VlIG9mIGxlZ2VuZHMgc3RhdHMgLSBBbGJpbiBHcm9lbiAmIEFsYmluIElpdmFyaTwvdGl0bGU+XG4gICAgICAgIDwvSGVsbWV0PlxuICAgICAgICA8TmF2IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJDb250ZW50XCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5TZWFyY2ggZm9yIHN1bW1vbmVyPC9oMT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFib3V0LXNpdGVcIj5cbiAgICAgICAgICAgICAgRW50ZXIgYSBzdW1tb25lciBuYW1lIHRvIHJlY2lldmUgdG8gbW9zdCBuZWNlc3NhcnkgaW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgYWJvdXQgdGhlIHBsYXllci5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxJbnB1dCAvPlxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzIyMjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICBoZWlnaHQ6IDYwMHB4O1xuICAgICAgICAgICAgd2lkaHQ6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL0ltYWdlcy9iZy1uZXcucG5nJyk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuXG4gICAgICAgICAgfVxuICAgICAgICAgIC5oZWFkZXJDb250ZW50IHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50aXRsZSxcbiAgICAgICAgICAuYWJvdXQtc2l0ZSB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zcy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmFib3V0LXNpdGUge1xuICAgICAgICAgICAgb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zcy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICB3aWR0aDogNDAwcHhcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA3MHB4O1xuICAgICAgICAgICAgb3BhY2l0eTogLjQ7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8Q2FyZDEgLz5cbiAgICAgICAgICA8Q2FyZDIgLz5cbiAgICAgICAgICA8Q2FyZDMgLz5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=pages/index.js?entry */'
      })));
    }
  }]);

  return Index;
}(_react2.default.Component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIkhlbG1ldCIsIkJ1dHRvbiIsIk5hdiIsIklucHV0IiwiQ2FyZDEiLCJDYXJkMiIsIkNhcmQzIiwiSW5kZXgiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFTOztBQUNULEFBQVM7O0FBQ1QsQUFBUzs7QUFDVCxBQUFTLEFBQ1QsQUFBUyxBQUNULEFBQVM7Ozs7Ozs7SUFFWSxBOzs7Ozs7Ozs7Ozs2QkFDVixBQUNQOzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBRkosQUFDRSxBQUNFLEFBRUYsMEVBQUEsQUFBQzs7b0JBQUQ7c0JBSkYsQUFJRSxBQUNBO0FBREE7QUFBQSwwQkFDQSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlLDZCQUFmOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxRQUFJLFdBQUosQUFBYyxxQkFBZDs7b0JBQUE7c0JBQUE7QUFBQTtTQURGLEFBQ0UsQUFDQSx3Q0FBQSxjQUFBLE9BQUcsV0FBSCxBQUFhLDBCQUFiOztvQkFBQTtzQkFBQTtBQUFBO1NBRkYsQUFFRSxBQUlBLHFHQUFBLEFBQUM7O29CQUFEO3NCQU5GLEFBTUU7QUFBQTtBQUFBO2lCQU5GO2FBTkosQUFLRSxBQUNFLEFBcURGO0FBckRFLDRCQXFERixjQUFBLFNBQUssV0FBTCxBQUFlLHVCQUFmOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQzs7b0JBQUQ7c0JBREYsQUFDRSxBQUNBO0FBREE7QUFBQSwwQkFDQSxBQUFDOztvQkFBRDtzQkFGRixBQUVFLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLEFBQUM7O29CQUFEO3NCQUhGLEFBR0U7QUFBQTtBQUFBO2lCQUhGO2FBNURKLEFBQ0UsQUEyREUsQUFlTDtBQWZLOzs7OztFQTlEMkIsZ0JBQU0sQTs7a0JBQXBCLEEiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FsYmluZ3JvZW4vR3ltbmFzaWVhcmJldGUtMTctMTgtUkVBQ1RKUyJ9