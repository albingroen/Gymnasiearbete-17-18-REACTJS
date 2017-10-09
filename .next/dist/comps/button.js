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
        'data-jsx': 358539723,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }, _react2.default.createElement(_link2.default, { href: '/about', __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, _react2.default.createElement('button', { className: 'knapp', 'data-jsx': 358539723,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, 'Search summoner')), _react2.default.createElement(_style2.default, {
        styleId: 358539723,
        css: 'button[data-jsx="358539723"]{background:LightSeaGreen;border:none;color:white;font-family:\'Roboto\',sans-serif;padding:15px 40px 15px 40px;font-size:17px;font-weight:lighter;-webkit-letter-spacing:0.6px;-moz-letter-spacing:0.6px;-ms-letter-spacing:0.6px;letter-spacing:0.6px;cursor:pointer;-webkit-transition:0.1s ease-out 0s;transition:0.1s ease-out 0s;border-radius:3px}button[data-jsx="358539723"]:hover{background:DarkCyan;-webkit-transition:0.1s ease-out 0s;transition:0.1s ease-out 0s}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2J1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVb0IsQUFHc0MsQUFhTCxvQkFDUSxLQWJoQixZQUNBLFlBQ3FCLGdDQUNMLEdBVzlCLHlCQVZpQixlQUNLLG9CQUNDLHFHQUNOLGVBQ2EsZ0VBQ1Ysa0JBQ3BCIiwiZmlsZSI6ImNvbXBzL2J1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWxiaW5ncm9lbi9HeW1uYXNpZWFyYmV0ZS0xNy0xOC1SRUFDVEpTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJrbmFwcFwiPlNlYXJjaCBzdW1tb25lcjwvYnV0dG9uPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogTGlnaHRTZWFHcmVlbjtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggNDBweCAxNXB4IDQwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjZweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMXMgZWFzZS1vdXQgMHM7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBEYXJrQ3lhbjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMXMgZWFzZS1vdXQgMHM7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=comps/button.js */'
      }));
    }
  }]);

  return Button;
}(_react2.default.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2J1dHRvbi5qcyJdLCJuYW1lcyI6WyJMaW5rIiwiUmVhY3QiLCJCdXR0b24iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUVQOzs7Ozs7O0lBQUEsQUFBYSxzREFBYjtrQ0FBQTs7b0JBQUE7d0NBQUE7O2tJQUFBO0FBQUE7OztTQUFBOzZCQUNXLEFBQ1A7NkJBQ0UsY0FBQTtvQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDLGdDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxZQUFRLFdBQVIsQUFBa0IscUJBQWxCOztvQkFBQTtzQkFBQTtBQUFBO1NBRkosQUFDRSxBQUNFO2lCQUZKO2FBREYsQUFDRSxBQXlCSDtBQXpCRztBQUhOO0FBQUE7O1NBQUE7RUFBNEIsZ0JBQTVCLEFBQWtDIiwiZmlsZSI6ImJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWxiaW5ncm9lbi9HeW1uYXNpZWFyYmV0ZS0xNy0xOC1SRUFDVEpTIn0=