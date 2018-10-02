'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _reactRedux = require('react-redux');

var _reactIntl = require('react-intl');

var _sessionActions = require('../actions/sessionActions');

var _playbackActions = require('../actions/playbackActions');

var _ButtonStyle = require('./ButtonStyle');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/MitchellS/Library/Mobile Documents/com~apple~CloudDocs/RMIT/Sem2/Cloud Computing/Ass2/Spotify practise/c-master/components/Header.js';


var linkStyle = {
  lineHeight: '30px',
  marginRight: 15
};

var mainLinkStyle = {
  float: 'left',
  marginRight: '10px'
};

var headerStyle = {
  backgroundColor: '#e3ebf4',
  padding: '20px 40px'
};

var getNameFromUser = function getNameFromUser(user) {
  return user.display_name || user.id;
};

var Header = function Header(_ref) {
  var session = _ref.session,
      muted = _ref.muted,
      mutePlayback = _ref.mutePlayback,
      unmutePlayback = _ref.unmutePlayback,
      login = _ref.login;
  return _react2.default.createElement('div', { style: headerStyle, __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, _react2.default.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, _react2.default.createElement('a', { style: (0, _assign2.default)({}, linkStyle, mainLinkStyle), __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, _react2.default.createElement('img', { src: '/static/c-icon-128.png', height: '30', __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }))), _react2.default.createElement(_link2.default, { href: '/about', __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, _react2.default.createElement('a', { style: linkStyle, __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'about', __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }))), session.user ? _react2.default.createElement('div', {
    className: 'jsx-687546826' + ' ' + 'media user-header',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, _react2.default.createElement(_style2.default, {
    styleId: '687546826',
    css: '.user-header.jsx-687546826{float:right;width:150px;}.user-image.jsx-687546826{border-radius:50%;}.user-name.jsx-687546826{line-height:30px;}.media.jsx-687546826,.media__bd.jsx-687546826{overflow:hidden;_overflow:visible;zoom:1;}.media.jsx-687546826 .media__img.jsx-687546826{float:left;margin-right:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDc0IsQUFHMkIsQUFJTSxBQUdELEFBSUQsQUFLTCxXQUNPLENBaEJOLElBV00sQ0FKcEIsQ0FIQSxNQUhBLEtBZ0JBLEtBTFMsT0FDVCIsImZpbGUiOiJjb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWl0Y2hlbGxTL0xpYnJhcnkvTW9iaWxlIERvY3VtZW50cy9jb21+YXBwbGV+Q2xvdWREb2NzL1JNSVQvU2VtMi9DbG91ZCBDb21wdXRpbmcvQXNzMi9TcG90aWZ5IHByYWN0aXNlL2MtbWFzdGVyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBGb3JtYXR0ZWRNZXNzYWdlIH0gZnJvbSAncmVhY3QtaW50bCc7XG5pbXBvcnQgeyBsb2dpbiB9IGZyb20gJy4uL2FjdGlvbnMvc2Vzc2lvbkFjdGlvbnMnO1xuaW1wb3J0IHsgbXV0ZVBsYXliYWNrLCB1bm11dGVQbGF5YmFjayB9IGZyb20gJy4uL2FjdGlvbnMvcGxheWJhY2tBY3Rpb25zJztcbmltcG9ydCB7IEJ1dHRvblN0eWxlLCBCdXR0b25EYXJrU3R5bGUgfSBmcm9tICcuL0J1dHRvblN0eWxlJztcblxuY29uc3QgbGlua1N0eWxlID0ge1xuICBsaW5lSGVpZ2h0OiAnMzBweCcsXG4gIG1hcmdpblJpZ2h0OiAxNVxufTtcblxuY29uc3QgbWFpbkxpbmtTdHlsZSA9IHtcbiAgZmxvYXQ6ICdsZWZ0JyxcbiAgbWFyZ2luUmlnaHQ6ICcxMHB4J1xufTtcblxuY29uc3QgaGVhZGVyU3R5bGUgPSB7XG4gIGJhY2tncm91bmRDb2xvcjogJyNlM2ViZjQnLFxuICBwYWRkaW5nOiAnMjBweCA0MHB4J1xufTtcblxuY29uc3QgZ2V0TmFtZUZyb21Vc2VyID0gdXNlciA9PiB7XG4gIHJldHVybiB1c2VyLmRpc3BsYXlfbmFtZSB8fCB1c2VyLmlkO1xufTtcblxuY29uc3QgSGVhZGVyID0gKHsgc2Vzc2lvbiwgbXV0ZWQsIG11dGVQbGF5YmFjaywgdW5tdXRlUGxheWJhY2ssIGxvZ2luIH0pID0+IChcbiAgPGRpdiBzdHlsZT17aGVhZGVyU3R5bGV9PlxuICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICA8YSBzdHlsZT17T2JqZWN0LmFzc2lnbih7fSwgbGlua1N0eWxlLCBtYWluTGlua1N0eWxlKX0+XG4gICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9jLWljb24tMTI4LnBuZ1wiIGhlaWdodD1cIjMwXCIgLz5cbiAgICAgIDwvYT5cbiAgICA8L0xpbms+XG4gICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgPGEgc3R5bGU9e2xpbmtTdHlsZX0+PEZvcm1hdHRlZE1lc3NhZ2UgaWQ9XCJhYm91dFwiIC8+PC9hPlxuICAgIDwvTGluaz5cbiAgICB7c2Vzc2lvbi51c2VyXG4gICAgICA/IDxkaXYgY2xhc3NOYW1lPVwibWVkaWEgdXNlci1oZWFkZXJcIj5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAudXNlci1oZWFkZXIge1xuICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC51c2VyLWltYWdlIHtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnVzZXItbmFtZSB7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lZGlhLFxuICAgICAgICAgICAgLm1lZGlhX19iZCB7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgIF9vdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgICAgICAgICAgem9vbTogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZWRpYSAubWVkaWFfX2ltZyB7XG4gICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWFfX2ltZ1wiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1c2VyLWltYWdlXCJcbiAgICAgICAgICAgICAgc3JjPXtcbiAgICAgICAgICAgICAgICAoc2Vzc2lvbi51c2VyLmltYWdlcyAmJiBzZXNzaW9uLnVzZXIuaW1hZ2VzLmxlbmd0aCAmJiBzZXNzaW9uLnVzZXIuaW1hZ2VzWzBdLnVybCkgfHxcbiAgICAgICAgICAgICAgICAgICcvc3RhdGljL3VzZXItaWNvbi5wbmcnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgd2lkdGg9XCIzMFwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjMwXCJcbiAgICAgICAgICAgICAgYWx0PXtnZXROYW1lRnJvbVVzZXIoc2Vzc2lvbi51c2VyKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLW5hbWUgbWVkaWFfX2JkXCI+XG4gICAgICAgICAgICB7Z2V0TmFtZUZyb21Vc2VyKHNlc3Npb24udXNlcil9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgOiA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tLWRhcmtcIiBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JyB9fSBvbkNsaWNrPXtsb2dpbn0+XG4gICAgICAgICAgPHN0eWxlIGpzeD57QnV0dG9uU3R5bGV9PC9zdHlsZT5cbiAgICAgICAgICA8c3R5bGUganN4PntCdXR0b25EYXJrU3R5bGV9PC9zdHlsZT5cbiAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD1cImxvZ2luXCIgLz5cbiAgICAgICAgPC9idXR0b24+fVxuICAgIHtzZXNzaW9uLnVzZXJcbiAgICAgID8gPGRpdiBjbGFzc05hbWU9XCJwbGF5YmFjay1jb250cm9sXCI+XG4gICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtCdXR0b25TdHlsZX1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7QnV0dG9uRGFya1N0eWxlfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLnBsYXliYWNrLWNvbnRyb2wge1xuICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi0tZGFya1wiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIG11dGVkID8gdW5tdXRlUGxheWJhY2soKSA6IG11dGVQbGF5YmFjaygpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bXV0ZWQgPyAnVW5tdXRlJyA6ICdNdXRlJ31cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA6IG51bGx9XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgbG9naW46ICgpID0+IGRpc3BhdGNoKGxvZ2luKCkpLFxuICBtdXRlUGxheWJhY2s6ICgpID0+IGRpc3BhdGNoKG11dGVQbGF5YmFjaygpKSxcbiAgdW5tdXRlUGxheWJhY2s6ICgpID0+IGRpc3BhdGNoKHVubXV0ZVBsYXliYWNrKCkpXG59KTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgc2Vzc2lvbjogc3RhdGUuc2Vzc2lvbixcbiAgbXV0ZWQ6IHN0YXRlLnBsYXliYWNrLm11dGVkXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoSGVhZGVyKTtcbiJdfQ== */\n/*@ sourceURL=components/Header.js */'
  }), _react2.default.createElement('div', {
    className: 'jsx-687546826' + ' ' + 'media__img',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, _react2.default.createElement('img', {
    src: session.user.images && session.user.images.length && session.user.images[0].url || '/static/user-icon.png',
    width: '30',
    height: '30',
    alt: getNameFromUser(session.user),
    className: 'jsx-687546826' + ' ' + 'user-image',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  })), _react2.default.createElement('div', {
    className: 'jsx-687546826' + ' ' + 'user-name media__bd',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, getNameFromUser(session.user))) : _react2.default.createElement('button', { style: { float: 'right' }, onClick: login, className: 'jsx-' + _ButtonStyle.ButtonStyle.__scopedHash + ' jsx-' + _ButtonStyle.ButtonDarkStyle.__scopedHash + ' ' + 'btn btn--dark',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    }
  }, _react2.default.createElement(_style2.default, {
    styleId: _ButtonStyle.ButtonStyle.__scopedHash,
    css: _ButtonStyle.ButtonStyle.__scoped
  }), _react2.default.createElement(_style2.default, {
    styleId: _ButtonStyle.ButtonDarkStyle.__scopedHash,
    css: _ButtonStyle.ButtonDarkStyle.__scoped
  }), _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'login', __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    }
  })), session.user ? _react2.default.createElement('div', {
    className: 'jsx-1578298220 ' + ('jsx-' + _ButtonStyle.ButtonStyle.__scopedHash + ' jsx-' + _ButtonStyle.ButtonDarkStyle.__scopedHash) + ' ' + 'playback-control',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    }
  }, _react2.default.createElement(_style2.default, {
    styleId: _ButtonStyle.ButtonStyle.__scopedHash,
    css: _ButtonStyle.ButtonStyle.__scoped
  }), _react2.default.createElement(_style2.default, {
    styleId: _ButtonStyle.ButtonDarkStyle.__scopedHash,
    css: _ButtonStyle.ButtonDarkStyle.__scoped
  }), _react2.default.createElement(_style2.default, {
    styleId: '1578298220',
    css: '.playback-control.jsx-1578298220{float:right;width:200px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlGc0IsQUFHMkIsWUFDQSxZQUNkIiwiZmlsZSI6ImNvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NaXRjaGVsbFMvTGlicmFyeS9Nb2JpbGUgRG9jdW1lbnRzL2NvbX5hcHBsZX5DbG91ZERvY3MvUk1JVC9TZW0yL0Nsb3VkIENvbXB1dGluZy9Bc3MyL1Nwb3RpZnkgcHJhY3Rpc2UvYy1tYXN0ZXIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEZvcm1hdHRlZE1lc3NhZ2UgfSBmcm9tICdyZWFjdC1pbnRsJztcbmltcG9ydCB7IGxvZ2luIH0gZnJvbSAnLi4vYWN0aW9ucy9zZXNzaW9uQWN0aW9ucyc7XG5pbXBvcnQgeyBtdXRlUGxheWJhY2ssIHVubXV0ZVBsYXliYWNrIH0gZnJvbSAnLi4vYWN0aW9ucy9wbGF5YmFja0FjdGlvbnMnO1xuaW1wb3J0IHsgQnV0dG9uU3R5bGUsIEJ1dHRvbkRhcmtTdHlsZSB9IGZyb20gJy4vQnV0dG9uU3R5bGUnO1xuXG5jb25zdCBsaW5rU3R5bGUgPSB7XG4gIGxpbmVIZWlnaHQ6ICczMHB4JyxcbiAgbWFyZ2luUmlnaHQ6IDE1XG59O1xuXG5jb25zdCBtYWluTGlua1N0eWxlID0ge1xuICBmbG9hdDogJ2xlZnQnLFxuICBtYXJnaW5SaWdodDogJzEwcHgnXG59O1xuXG5jb25zdCBoZWFkZXJTdHlsZSA9IHtcbiAgYmFja2dyb3VuZENvbG9yOiAnI2UzZWJmNCcsXG4gIHBhZGRpbmc6ICcyMHB4IDQwcHgnXG59O1xuXG5jb25zdCBnZXROYW1lRnJvbVVzZXIgPSB1c2VyID0+IHtcbiAgcmV0dXJuIHVzZXIuZGlzcGxheV9uYW1lIHx8IHVzZXIuaWQ7XG59O1xuXG5jb25zdCBIZWFkZXIgPSAoeyBzZXNzaW9uLCBtdXRlZCwgbXV0ZVBsYXliYWNrLCB1bm11dGVQbGF5YmFjaywgbG9naW4gfSkgPT4gKFxuICA8ZGl2IHN0eWxlPXtoZWFkZXJTdHlsZX0+XG4gICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgIDxhIHN0eWxlPXtPYmplY3QuYXNzaWduKHt9LCBsaW5rU3R5bGUsIG1haW5MaW5rU3R5bGUpfT5cbiAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2MtaWNvbi0xMjgucG5nXCIgaGVpZ2h0PVwiMzBcIiAvPlxuICAgICAgPC9hPlxuICAgIDwvTGluaz5cbiAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICA8YSBzdHlsZT17bGlua1N0eWxlfT48Rm9ybWF0dGVkTWVzc2FnZSBpZD1cImFib3V0XCIgLz48L2E+XG4gICAgPC9MaW5rPlxuICAgIHtzZXNzaW9uLnVzZXJcbiAgICAgID8gPGRpdiBjbGFzc05hbWU9XCJtZWRpYSB1c2VyLWhlYWRlclwiPlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC51c2VyLWhlYWRlciB7XG4gICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnVzZXItaW1hZ2Uge1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudXNlci1uYW1lIHtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVkaWEsXG4gICAgICAgICAgICAubWVkaWFfX2JkIHtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgX292ZXJmbG93OiB2aXNpYmxlO1xuICAgICAgICAgICAgICB6b29tOiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lZGlhIC5tZWRpYV9faW1nIHtcbiAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYV9faW1nXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVzZXItaW1hZ2VcIlxuICAgICAgICAgICAgICBzcmM9e1xuICAgICAgICAgICAgICAgIChzZXNzaW9uLnVzZXIuaW1hZ2VzICYmIHNlc3Npb24udXNlci5pbWFnZXMubGVuZ3RoICYmIHNlc3Npb24udXNlci5pbWFnZXNbMF0udXJsKSB8fFxuICAgICAgICAgICAgICAgICAgJy9zdGF0aWMvdXNlci1pY29uLnBuZydcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB3aWR0aD1cIjMwXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMzBcIlxuICAgICAgICAgICAgICBhbHQ9e2dldE5hbWVGcm9tVXNlcihzZXNzaW9uLnVzZXIpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItbmFtZSBtZWRpYV9fYmRcIj5cbiAgICAgICAgICAgIHtnZXROYW1lRnJvbVVzZXIoc2Vzc2lvbi51c2VyKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA6IDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi0tZGFya1wiIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19IG9uQ2xpY2s9e2xvZ2lufT5cbiAgICAgICAgICA8c3R5bGUganN4PntCdXR0b25TdHlsZX08L3N0eWxlPlxuICAgICAgICAgIDxzdHlsZSBqc3g+e0J1dHRvbkRhcmtTdHlsZX08L3N0eWxlPlxuICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPVwibG9naW5cIiAvPlxuICAgICAgICA8L2J1dHRvbj59XG4gICAge3Nlc3Npb24udXNlclxuICAgICAgPyA8ZGl2IGNsYXNzTmFtZT1cInBsYXliYWNrLWNvbnRyb2xcIj5cbiAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge0J1dHRvblN0eWxlfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtCdXR0b25EYXJrU3R5bGV9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAucGxheWJhY2stY29udHJvbCB7XG4gICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLS1kYXJrXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgbXV0ZWQgPyB1bm11dGVQbGF5YmFjaygpIDogbXV0ZVBsYXliYWNrKCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHttdXRlZCA/ICdVbm11dGUnIDogJ011dGUnfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDogbnVsbH1cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICBsb2dpbjogKCkgPT4gZGlzcGF0Y2gobG9naW4oKSksXG4gIG11dGVQbGF5YmFjazogKCkgPT4gZGlzcGF0Y2gobXV0ZVBsYXliYWNrKCkpLFxuICB1bm11dGVQbGF5YmFjazogKCkgPT4gZGlzcGF0Y2godW5tdXRlUGxheWJhY2soKSlcbn0pO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBzZXNzaW9uOiBzdGF0ZS5zZXNzaW9uLFxuICBtdXRlZDogc3RhdGUucGxheWJhY2subXV0ZWRcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShIZWFkZXIpO1xuIl19 */\n/*@ sourceURL=components/Header.js */'
  }), _react2.default.createElement('button', {
    onClick: function onClick() {
      muted ? unmutePlayback() : mutePlayback();
    },
    className: 'jsx-1578298220 ' + ('jsx-' + _ButtonStyle.ButtonStyle.__scopedHash + ' jsx-' + _ButtonStyle.ButtonDarkStyle.__scopedHash) + ' ' + 'btn btn--dark',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    }
  }, muted ? 'Unmute' : 'Mute')) : null);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    login: function login() {
      return dispatch((0, _sessionActions.login)());
    },
    mutePlayback: function mutePlayback() {
      return dispatch((0, _playbackActions.mutePlayback)());
    },
    unmutePlayback: function unmutePlayback() {
      return dispatch((0, _playbackActions.unmutePlayback)());
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    session: state.session,
    muted: state.playback.muted
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Header);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJjb25uZWN0IiwiRm9ybWF0dGVkTWVzc2FnZSIsImxvZ2luIiwibXV0ZVBsYXliYWNrIiwidW5tdXRlUGxheWJhY2siLCJCdXR0b25TdHlsZSIsIkJ1dHRvbkRhcmtTdHlsZSIsImxpbmtTdHlsZSIsImxpbmVIZWlnaHQiLCJtYXJnaW5SaWdodCIsIm1haW5MaW5rU3R5bGUiLCJmbG9hdCIsImhlYWRlclN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsImdldE5hbWVGcm9tVXNlciIsInVzZXIiLCJkaXNwbGF5X25hbWUiLCJpZCIsIkhlYWRlciIsInNlc3Npb24iLCJtdXRlZCIsImltYWdlcyIsImxlbmd0aCIsInVybCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJwbGF5YmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBUzs7QUFDVCxBQUFTLEFBQWE7O0FBQ3RCLEFBQVMsQUFBYyxBQUFzQjs7QUFDN0MsQUFBUyxBQUFhLEFBQXVCOzs7Ozs7O0FBRTdDLElBQU07Y0FBWSxBQUNKLEFBQ1o7ZUFGRixBQUFrQixBQUVIO0FBRkcsQUFDaEI7O0FBSUYsSUFBTTtTQUFnQixBQUNiLEFBQ1A7ZUFGRixBQUFzQixBQUVQO0FBRk8sQUFDcEI7O0FBSUYsSUFBTTttQkFBYyxBQUNELEFBQ2pCO1dBRkYsQUFBb0IsQUFFVDtBQUZTLEFBQ2xCOztBQUlGLElBQU0sa0JBQWtCLFNBQWxCLEFBQWtCLHNCQUFRLEFBQzlCO1NBQU8sS0FBQSxBQUFLLGdCQUFnQixLQUE1QixBQUFpQyxBQUNsQztBQUZEOztBQUlBLElBQU0sU0FBUyxTQUFULEFBQVMsYUFBQTtNQUFBLEFBQUcsZUFBSCxBQUFHO01BQUgsQUFBWSxhQUFaLEFBQVk7TUFBWixBQUFtQixv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