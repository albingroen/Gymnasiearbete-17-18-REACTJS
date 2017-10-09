'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _button = require('../comps/button.js');

var _nav = require('../comps/nav.js');

var _input = require('../comps/input.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/albingroen/Gymnasiearbete-17-18-REACTJS/pages/index.js?entry';


var Index = function Index() {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_nav.Nav, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), _react2.default.createElement('div', { className: 'header', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement('div', { className: 'headerContent', 'data-jsx': 3711704728,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement('h1', { className: 'title', 'data-jsx': 3711704728,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, 'Search for summoner'), _react2.default.createElement('p', { className: 'about-site', 'data-jsx': 3711704728,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, 'Enter a summoner name to recieve to most necessary information about the player.'), _react2.default.createElement(_input.Input, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), _react2.default.createElement(_style2.default, {
    styleId: 3711704728,
    css: '*{padding:0;margin:0}.header{height:600px;widht:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background-image:url(\'/static/Images/bg-new.png\');background-size:cover;background-position:center}.headerContent{text-align:center}.title,.about-site{color:white;font-family:\'Lato\',sanss-serif;font-weight:300;font-size:40px;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;margin-bottom:20px}.about-site{olor:white;font-family:\'Lato\',sanss-serif;font-weight:300;font-size:15px;width:400px;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;margin-bottom:70px;opacity:.4}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCMkIsQUFHdUIsQUFJRyxBQVdLLEFBSU4sQUFRRCxVQTFCRixDQTJCdUIsQ0FSQSxDQWZyQixLQVdiLENBZEEsS0FJZSxrQkF1QkcsQ0FSQSxlQVNELENBUkEsY0FVZixDQVRtQixXQVNBLGFBekJBLHFFQWlCQSxXQVNBLFFBUnJCLEtBakJ5QixNQTBCWixXQUNiLGtGQTFCb0Qsa0RBQzVCLHNCQUNLLDJCQUU3QiIsImZpbGUiOiJwYWdlcy9pbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWxiaW5ncm9lbi9HeW1uYXNpZWFyYmV0ZS0xNy0xOC1SRUFDVEpTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vY29tcHMvYnV0dG9uLmpzJ1xuaW1wb3J0IHsgTmF2IH0gZnJvbSAnLi4vY29tcHMvbmF2LmpzJ1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICcuLi9jb21wcy9pbnB1dC5qcydcblxuY29uc3QgSW5kZXggPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPE5hdiAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlckNvbnRlbnRcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+U2VhcmNoIGZvciBzdW1tb25lcjwvaDE+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImFib3V0LXNpdGVcIj5cbiAgICAgICAgICBFbnRlciBhIHN1bW1vbmVyIG5hbWUgdG8gcmVjaWV2ZSB0byBtb3N0IG5lY2Vzc2FyeSBpbmZvcm1hdGlvbiBhYm91dFxuICAgICAgICAgIHRoZSBwbGF5ZXIuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPElucHV0IC8+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgKiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgIGhlaWdodDogNjAwcHg7XG4gICAgICAgICAgICB3aWRodDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvSW1hZ2VzL2JnLW5ldy5wbmcnKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5cbiAgICAgICAgICB9XG4gICAgICAgICAgLmhlYWRlckNvbnRlbnQge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGl0bGUsXG4gICAgICAgICAgLmFib3V0LXNpdGUge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fuc3Mtc2VyaWY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hYm91dC1zaXRlIHtcbiAgICAgICAgICAgIG9sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fuc3Mtc2VyaWY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgd2lkdGg6IDQwMHB4XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNzBweDtcbiAgICAgICAgICAgIG9wYWNpdHk6IC40O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuIl19 */\n/*@ sourceURL=pages/index.js?entry */'
  }))));
};

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIkJ1dHRvbiIsIk5hdiIsIklucHV0IiwiSW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBUzs7QUFDVCxBQUFTOzs7Ozs7O0FBRVQsSUFBTSxRQUFRLFNBQVIsQUFBUSxRQUFBO3lCQUNaLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsQUFBQzs7Z0JBQUQ7a0JBREYsQUFDRSxBQUNBO0FBREE7QUFBQSxzQkFDQSxjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlLDZCQUFmOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxRQUFJLFdBQUosQUFBYyxxQkFBZDs7Z0JBQUE7a0JBQUE7QUFBQTtLQURGLEFBQ0UsQUFDQSx3Q0FBQSxjQUFBLE9BQUcsV0FBSCxBQUFhLDBCQUFiOztnQkFBQTtrQkFBQTtBQUFBO0tBRkYsQUFFRSxBQUlBLHFHQUFBLEFBQUM7O2dCQUFEO2tCQU5GLEFBTUU7QUFBQTtBQUFBO2FBTkY7U0FKUSxBQUNaLEFBRUUsQUFDRTtBQUFBO0FBSk4sQUF1REE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FsYmluZ3JvZW4vR3ltbmFzaWVhcmJldGUtMTctMTgtUkVBQ1RKUyJ9