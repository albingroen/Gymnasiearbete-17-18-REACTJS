"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Scrollhint = undefined;

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/albingroen/Gymnasiearbete-17-18-REACTJS/comps/scrollHint.js";
var Scrollhint = exports.Scrollhint = function (_React$Component) {
  (0, _inherits3.default)(Scrollhint, _React$Component);

  function Scrollhint() {
    (0, _classCallCheck3.default)(this, Scrollhint);

    return (0, _possibleConstructorReturn3.default)(this, (Scrollhint.__proto__ || (0, _getPrototypeOf2.default)(Scrollhint)).apply(this, arguments));
  }

  (0, _createClass3.default)(Scrollhint, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", { className: "mouse", "data-jsx": 665685043,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      }, _react2.default.createElement("div", { className: "scroll", "data-jsx": 665685043,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: 665685043,
        css: ".mouse{height:13px;width:10px;border:1px solid #444;padding-top:5px;padding-bottom:5px;background:none;border-radius:50px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:0 auto;margin-top:150px}.scroll{height:3px;border-radius:50px;border:1px solid #444;background:#444;-webkit-animation:scroll 1.5s ease infinite forwards;animation:scroll 1.5s ease infinite forwards}@-webkit-keyframes scroll{0%{margin-top:0px;opacity:1}100%{margin-top:10px;opacity:0}}@keyframes scroll{0%{margin-top:0px;opacity:1}100%{margin-top:10px;opacity:0}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL3Njcm9sbEhpbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTzJCLEFBR3lCLEFBYUQsQUFXVCxBQUdnQixXQWJDLENBYlIsR0F1QkMsQ0FJQSxPQTFCVSxFQXVCdEIsQ0FJQSxJQWRzQixlQVpOLE9BYUEsU0FaRyxPQWEwQixZQVo3QixnQkFDRyxtQkFDTixtREFZZix1QkFYeUIsbUdBQ1QsY0FDRyxpQkFDbkIiLCJmaWxlIjoiY29tcHMvc2Nyb2xsSGludC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWxiaW5ncm9lbi9HeW1uYXNpZWFyYmV0ZS0xNy0xOC1SRUFDVEpTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgY2xhc3MgU2Nyb2xsaGludCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3VzZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcm9sbFwiIC8+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgLm1vdXNlIHtcbiAgICAgICAgICAgIGhlaWdodDogMTNweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzQ0NDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2Nyb2xsIHtcbiAgICAgICAgICAgIGhlaWdodDogM3B4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM0NDQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNDQ0O1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBzY3JvbGwgMS41cyBlYXNlIGluZmluaXRlIGZvcndhcmRzO1xuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQGtleWZyYW1lcyBzY3JvbGwge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHhcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=comps/scrollHint.js */"
      }));
    }
  }]);

  return Scrollhint;
}(_react2.default.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL3Njcm9sbEhpbnQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJTY3JvbGxoaW50IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUVQOzs7Ozs7O0lBQUEsQUFBYSw4REFBYjtzQ0FBQTs7d0JBQUE7d0NBQUE7OzBJQUFBO0FBQUE7OztTQUFBOzZCQUNXLEFBQ1A7NkJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZSxxQkFBZjs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO09BQUEseUNBQ08sV0FBTCxBQUFlLHNCQUFmOztvQkFBQTtzQkFERixBQUNFO0FBQUE7O2lCQURGO2FBREYsQUFDRSxBQXNDSDtBQXRDRztBQUhOO0FBQUE7O1NBQUE7RUFBZ0MsZ0JBQWhDLEFBQXNDIiwiZmlsZSI6InNjcm9sbEhpbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FsYmluZ3JvZW4vR3ltbmFzaWVhcmJldGUtMTctMTgtUkVBQ1RKUyJ9