'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = undefined;

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

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/albingroen/Gymnasiearbete-17-18-REACTJS/comps/button.js';
var Button = exports.Button = function (_React$Component) {
  (0, _inherits3.default)(Button, _React$Component);

  function Button() {
    (0, _classCallCheck3.default)(this, Button);

    return (0, _possibleConstructorReturn3.default)(this, (Button.__proto__ || (0, _getPrototypeOf2.default)(Button)).apply(this, arguments));
  }

  (0, _createClass3.default)(Button, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        'data-jsx': 96643483,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }, _react2.default.createElement('button', { className: 'knapp', 'data-jsx': 96643483,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, 'Search'), _react2.default.createElement(_style2.default, {
        styleId: 96643483,
        css: 'button[data-jsx="96643483"]{background:#0069ff;border:none;color:white;font-family:\'Roboto\',sans-serif;padding:17.5px 115px 17.5px 115px;font-size:13px;font-weight:lighter;-webkit-letter-spacing:0.6px;-moz-letter-spacing:0.6px;-ms-letter-spacing:0.6px;letter-spacing:0.6px;cursor:pointer;-webkit-transition:0.1s ease-out 0s;transition:0.1s ease-out 0s;border-radius:3px;margin-top:40px;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;text-transform:uppercase}button[data-jsx="96643483"]:hover{background:#639fff;-webkit-transition:0.1s ease-out 0s;transition:0.1s ease-out 0s}button[data-jsx="96643483"]:focus{outline:none}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2J1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRb0IsQUFHZ0MsQUFnQkEsQUFJTixhQUNmLE1BcEJjLEFBZ0JnQixZQWZoQixZQUNxQixnQ0FDQyxRQWNwQywwQkFiaUIsZUFDSyxvQkFDQyxxR0FDTixlQUNhLGdFQUNWLGtCQUNGLGdCQUNHLDZGQUNNLHlCQUMzQiIsImZpbGUiOiJjb21wcy9idXR0b24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FsYmluZ3JvZW4vR3ltbmFzaWVhcmJldGUtMTctMTgtUkVBQ1RKUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJrbmFwcFwiPlNlYXJjaDwvYnV0dG9uPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDY5ZmY7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNy41cHggMTE1cHggMTcuNXB4IDExNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC42cHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjFzIGVhc2Utb3V0IDBzO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b246aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzYzOWZmZjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMXMgZWFzZS1vdXQgMHM7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJ1dHRvbjpmb2N1cyB7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=comps/button.js */'
      }));
    }
  }]);

  return Button;
}(_react2.default.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2J1dHRvbi5qcyJdLCJuYW1lcyI6WyJMaW5rIiwiUmVhY3QiLCJCdXR0b24iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUVQOzs7Ozs7O0lBQUEsQUFBYSxzREFBYjtrQ0FBQTs7b0JBQUE7d0NBQUE7O2tJQUFBO0FBQUE7OztTQUFBOzZCQUNXLEFBQ1A7NkJBQ0UsY0FBQTtvQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBLFlBQVEsV0FBUixBQUFrQixxQkFBbEI7O29CQUFBO3NCQUFBO0FBQUE7U0FERixBQUNFO2lCQURGO2FBREYsQUFDRSxBQTZCSDtBQTdCRztBQUhOO0FBQUE7O1NBQUE7RUFBNEIsZ0JBQTVCLEFBQWtDIiwiZmlsZSI6ImJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWxiaW5ncm9lbi9HeW1uYXNpZWFyYmV0ZS0xNy0xOC1SRUFDVEpTIn0=