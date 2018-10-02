'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactIntl = require('react-intl');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/MitchellS/Library/Mobile Documents/com~apple~CloudDocs/RMIT/Sem2/Cloud Computing/Ass2/Spotify practise/c-master/components/Users.js';

exports.default = function (_ref) {
  var items = _ref.items;

  return _react2.default.createElement('div', {
    className: 'jsx-1123997634',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement(_style2.default, {
    styleId: '1123997634',
    css: '.user-list.jsx-1123997634{list-style:none;margin:0;padding:0;}.user-list__item.jsx-1123997634{display:block;margin-bottom:0.5em;}.user-image.jsx-1123997634{border-radius:50%;}.user-name.jsx-1123997634{line-height:30px;}.media.jsx-1123997634,.media__bd.jsx-1123997634{overflow:hidden;_overflow:visible;zoom:1;}.media.jsx-1123997634 .media__img.jsx-1123997634{float:left;margin-right:10px;}.header-2.jsx-1123997634{color:#999;font-size:11px;text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVXNlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTWtCLEFBRzJCLEFBS0YsQUFJSSxBQUdELEFBSUQsQUFLTCxBQUlBLFdBSE8sQUFJSCxHQXBCSyxFQUxYLEFBZ0JTLENBSnBCLENBSEEsT0FSWSxDQXlCZSxHQUozQixLQWhCQSxBQVdTLENBZlQsTUFnQkEsVUFTQSIsImZpbGUiOiJjb21wb25lbnRzL1VzZXJzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NaXRjaGVsbFMvTGlicmFyeS9Nb2JpbGUgRG9jdW1lbnRzL2NvbX5hcHBsZX5DbG91ZERvY3MvUk1JVC9TZW0yL0Nsb3VkIENvbXB1dGluZy9Bc3MyL1Nwb3RpZnkgcHJhY3Rpc2UvYy1tYXN0ZXIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRm9ybWF0dGVkTWVzc2FnZSB9IGZyb20gJ3JlYWN0LWludGwnO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBpdGVtcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnVzZXItbGlzdCB7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgICAgICAudXNlci1saXN0X19pdGVtIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgICAgICAgfVxuICAgICAgICAudXNlci1pbWFnZSB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB9XG4gICAgICAgIC51c2VyLW5hbWUge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5tZWRpYSxcbiAgICAgICAgLm1lZGlhX19iZCB7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBfb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICAgICAgem9vbTogMTtcbiAgICAgICAgfVxuICAgICAgICAubWVkaWEgLm1lZGlhX19pbWcge1xuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuaGVhZGVyLTIge1xuICAgICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwiaGVhZGVyLTJcIj48Rm9ybWF0dGVkTWVzc2FnZSBpZD1cIm9ubGluZVwiIC8+PC9oMj5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJ1c2VyLWxpc3RcIj5cbiAgICAgICAge2l0ZW1zLm1hcCgoaSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCB1c2VyTmFtZSA9IGkuZGlzcGxheV9uYW1lIHx8IGkuaWQ7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJ1c2VyLWxpc3RfX2l0ZW0gbWVkaWFcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYV9faW1nXCI+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidXNlci1pbWFnZVwiXG4gICAgICAgICAgICAgICAgICBzcmM9eyhpLmltYWdlcyAmJiBpLmltYWdlcy5sZW5ndGggJiYgaS5pbWFnZXNbMF0udXJsKSB8fCAnL3N0YXRpYy91c2VyLWljb24ucG5nJ31cbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzBcIlxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzBcIlxuICAgICAgICAgICAgICAgICAgYWx0PXt1c2VyTmFtZX1cbiAgICAgICAgICAgICAgICAgIHRpdGxlPXt1c2VyTmFtZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLW5hbWUgbWVkaWFfX2JkXCI+XG4gICAgICAgICAgICAgICAge3VzZXJOYW1lfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L3VsPlxuICAgICAgPGRpdiBzdHlsZT17eyBjbGVhcjogJ2JvdGgnIH19IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl19 */\n/*@ sourceURL=components/Users.js */'
  }), _react2.default.createElement('h2', {
    className: 'jsx-1123997634' + ' ' + 'header-2',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'online', __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  })), _react2.default.createElement('ul', {
    className: 'jsx-1123997634' + ' ' + 'user-list',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, items.map(function (i, index) {
    var userName = i.display_name || i.id;
    return _react2.default.createElement('li', { key: index, className: 'jsx-1123997634' + ' ' + 'user-list__item media',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      }
    }, _react2.default.createElement('div', {
      className: 'jsx-1123997634' + ' ' + 'media__img',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      }
    }, _react2.default.createElement('img', {
      src: i.images && i.images.length && i.images[0].url || '/static/user-icon.png',
      width: '30',
      height: '30',
      alt: userName,
      title: userName,
      className: 'jsx-1123997634' + ' ' + 'user-image',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      }
    })), _react2.default.createElement('div', {
      className: 'jsx-1123997634' + ' ' + 'user-name media__bd',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      }
    }, userName));
  })), _react2.default.createElement('div', { style: { clear: 'both' }, className: 'jsx-1123997634',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVXNlcnMuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJGb3JtYXR0ZWRNZXNzYWdlIiwiaXRlbXMiLCJtYXAiLCJpIiwiaW5kZXgiLCJ1c2VyTmFtZSIsImRpc3BsYXlfbmFtZSIsImlkIiwiaW1hZ2VzIiwibGVuZ3RoIiwidXJsIiwiY2xlYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUyxBQUVUOzs7Ozs7a0JBQWUsZ0JBQWU7TUFBWixBQUFZLGFBQVosQUFBWSxBQUM1Qjs7eUJBQ0UsY0FBQTtlQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsR0FBQTthQUFBO1NBQUEsQUFpQ0U7QUFqQ0Ysc0JBaUNFLGNBQUE7d0NBQUEsQUFBYzs7Z0JBQWQ7a0JBQUEsQUFBeUI7QUFBekI7QUFBQSxxQkFBeUIsQUFBQyw2Q0FBaUIsSUFBbEIsQUFBcUI7Z0JBQXJCO2tCQWpDM0IsQUFpQ0UsQUFBeUIsQUFDekI7QUFEeUI7dUJBQ3pCLGNBQUE7d0NBQUEsQUFBYzs7Z0JBQWQ7a0JBQUEsQUFDRztBQURIO0FBQUEsV0FDRyxBQUFNLElBQUksVUFBQSxBQUFDLEdBQUQsQUFBSSxPQUFVLEFBQ3ZCO1FBQU0sV0FBVyxFQUFBLEFBQUUsZ0JBQWdCLEVBQW5DLEFBQXFDLEFBQ3JDOzJCQUNFLGNBQUEsUUFBSSxLQUFKLEFBQVMsMkNBQVQsQUFBMEI7O2tCQUExQjtvQkFBQSxBQUNFO0FBREY7S0FBQSxrQkFDRSxjQUFBOzBDQUFBLEFBQWU7O2tCQUFmO29CQUFBLEFBQ0U7QUFERjtBQUFBO1dBR1UsRUFBQSxBQUFFLFVBQVUsRUFBQSxBQUFFLE9BQWQsQUFBcUIsVUFBVSxFQUFBLEFBQUUsT0FBRixBQUFTLEdBQXpDLEFBQTRDLE9BRm5ELEFBRTJELEFBQ3pEO2FBSEYsQUFHUSxBQUNOO2NBSkYsQUFJUyxBQUNQO1dBTEYsQUFLTyxBQUNMO2FBTkYsQUFNUzswQ0FOVCxBQUNZOztrQkFEWjtvQkFGSixBQUNFLEFBQ0UsQUFTRjtBQVRFO0FBRUUseUJBT0osY0FBQTswQ0FBQSxBQUFlOztrQkFBZjtvQkFBQSxBQUNHO0FBREg7QUFBQSxPQVpKLEFBQ0UsQUFXRSxBQUtMO0FBdERMLEFBa0NFLEFBQ0csQUFxQkgsOENBQUssT0FBTyxFQUFFLE9BQWQsQUFBWSxBQUFTLHFCQUFyQjs7Z0JBQUE7a0JBekRKLEFBQ0UsQUF3REUsQUFHTDtBQUhLOztBQTFETiIsImZpbGUiOiJVc2Vycy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWl0Y2hlbGxTL0xpYnJhcnkvTW9iaWxlIERvY3VtZW50cy9jb21+YXBwbGV+Q2xvdWREb2NzL1JNSVQvU2VtMi9DbG91ZCBDb21wdXRpbmcvQXNzMi9TcG90aWZ5IHByYWN0aXNlL2MtbWFzdGVyIn0=