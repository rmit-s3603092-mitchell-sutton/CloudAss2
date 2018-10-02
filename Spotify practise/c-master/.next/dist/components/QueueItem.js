'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/MitchellS/Library/Mobile Documents/com~apple~CloudDocs/RMIT/Sem2/Cloud Computing/Ass2/Spotify practise/c-master/components/QueueItem.js';

exports.default = function (_ref) {
  var index = _ref.index,
      item = _ref.item,
      session = _ref.session,
      onRemoveItem = _ref.onRemoveItem,
      onVoteUp = _ref.onVoteUp;

  var voteUp = item.voters && session.user && item.voters.filter(function (v) {
    return v.id === session.user.id;
  }).length === 0 ? _react2.default.createElement('button', { onClick: onVoteUp, __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, '\u25B2') : null;
  return _react2.default.createElement('tr', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('td', { style: { paddingRight: '10px' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('img', { src: item.track.album.images[2].url, width: '40', height: '40', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  })), _react2.default.createElement('td', { style: { paddingRight: '10px' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, index + 1), _react2.default.createElement('td', { style: { paddingRight: '10px' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, item.track.name), _react2.default.createElement('td', { style: { paddingRight: '10px' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, item.track.artists.map(function (a) {
    return a.name;
  }).join(', ')), _react2.default.createElement('td', { style: { paddingRight: '10px' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, item.user && (item.user.display_name || item.user.id)), _react2.default.createElement('td', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, item.user && session.user && item.user.id === session.user.id ? _react2.default.createElement('button', {
    onClick: function onClick() {
      onRemoveItem(item.id);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, 'X') : voteUp), _react2.default.createElement('td', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, item.voters && item.voters.length > 0 ? _react2.default.createElement('span', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, item.voters.length === 1 ? '1 vote' : item.voters.length + ' votes') : ''));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUXVldWVJdGVtLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiaW5kZXgiLCJpdGVtIiwic2Vzc2lvbiIsIm9uUmVtb3ZlSXRlbSIsIm9uVm90ZVVwIiwidm90ZVVwIiwidm90ZXJzIiwidXNlciIsImZpbHRlciIsInYiLCJpZCIsImxlbmd0aCIsInBhZGRpbmdSaWdodCIsInRyYWNrIiwiYWxidW0iLCJpbWFnZXMiLCJ1cmwiLCJuYW1lIiwiYXJ0aXN0cyIsIm1hcCIsImEiLCJqb2luIiwiZGlzcGxheV9uYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBRVA7Ozs7Ozs7O2tCQUFlLGdCQUFzRDtNQUFuRCxBQUFtRCxhQUFuRCxBQUFtRDtNQUE1QyxBQUE0QyxZQUE1QyxBQUE0QztNQUF0QyxBQUFzQyxlQUF0QyxBQUFzQztNQUE3QixBQUE2QixvQkFBN0IsQUFBNkI7TUFBZixBQUFlLGdCQUFmLEFBQWUsQUFDbkU7O01BQU0sY0FBUyxBQUFLLFVBQVUsUUFBZixBQUF1QixhQUFRLEFBQUssT0FBTCxBQUFZLE9BQU8sYUFBQTtXQUFLLEVBQUEsQUFBRSxPQUFPLFFBQUEsQUFBUSxLQUF0QixBQUEyQjtBQUE5QyxHQUFBLEVBQUEsQUFBa0QsV0FBakYsQUFBNEYsb0JBQ3ZHLGNBQUEsWUFBUSxTQUFSLEFBQWlCO2dCQUFqQjtrQkFBQTtBQUFBO0dBQUEsRUFEVyxBQUNYLFNBRFcsR0FBZixBQUVJLEFBQ0o7eUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxjQUFBLFFBQUksT0FBTyxFQUFFLGNBQWIsQUFBVyxBQUFnQjtnQkFBM0I7a0JBQUEsQUFDRTtBQURGOzRDQUNPLEtBQUssS0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFYLEFBQWlCLE9BQWpCLEFBQXdCLEdBQWxDLEFBQXFDLEtBQUssT0FBMUMsQUFBZ0QsTUFBSyxRQUFyRCxBQUE0RDtnQkFBNUQ7a0JBRkosQUFDRSxBQUNFLEFBRUY7QUFGRTt1QkFFRixjQUFBLFFBQUksT0FBTyxFQUFFLGNBQWIsQUFBVyxBQUFnQjtnQkFBM0I7a0JBQUEsQUFDRztBQURIO2FBSkYsQUFJRSxBQUNXLEFBRVgsb0JBQUEsY0FBQSxRQUFJLE9BQU8sRUFBRSxjQUFiLEFBQVcsQUFBZ0I7Z0JBQTNCO2tCQUFBLEFBQ0c7QUFESDtVQUNHLEFBQUssTUFSVixBQU9FLEFBQ2MsQUFFZCx1QkFBQSxjQUFBLFFBQUksT0FBTyxFQUFFLGNBQWIsQUFBVyxBQUFnQjtnQkFBM0I7a0JBQUEsQUFDRztBQURIO1VBQ0csQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixJQUFJLGFBQUE7V0FBSyxFQUFMLEFBQU87QUFBOUIsS0FBQSxBQUFvQyxLQVh6QyxBQVVFLEFBQ0csQUFBeUMsQUFFNUMsd0JBQUEsY0FBQSxRQUFJLE9BQU8sRUFBRSxjQUFiLEFBQVcsQUFBZ0I7Z0JBQTNCO2tCQUFBLEFBQ0c7QUFESDtVQUNHLEFBQUssU0FBUyxLQUFBLEFBQUssS0FBTCxBQUFVLGdCQUFnQixLQUFBLEFBQUssS0FkbEQsQUFhRSxBQUNHLEFBQWtELEFBRXJELHNCQUFBLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0c7QUFESDtBQUFBLFVBQ0csQUFBSyxRQUFRLFFBQWIsQUFBcUIsUUFBUSxLQUFBLEFBQUssS0FBTCxBQUFVLE9BQU8sUUFBQSxBQUFRLEtBQXRELEFBQTJELHFCQUN4RCxjQUFBO2FBQ1csbUJBQU0sQUFDYjttQkFBYSxLQUFiLEFBQWtCLEFBQ25CO0FBSEg7O2dCQUFBO2tCQUFBO0FBQUE7QUFDRSxHQURGLEVBREgsQUFDRyxPQWxCUixBQWdCRSxBQVNNLEFBRU4seUJBQUEsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRztBQURIO0FBQUEsVUFDRyxBQUFLLFVBQVUsS0FBQSxBQUFLLE9BQUwsQUFBWSxTQUEzQixBQUFvQyxvQkFDakMsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRztBQURIO0FBQUEsR0FBQSxPQUNHLEFBQUssT0FBTCxBQUFZLFdBQVosQUFBdUIsSUFBdkIsQUFBMkIsV0FBVyxLQUFBLEFBQUssT0FBTCxBQUFZLFNBRnhELEFBQ0csQUFDOEQsWUEvQnhFLEFBQ0UsQUEyQkUsQUFLTSxBQUlYO0FBekNEIiwiZmlsZSI6IlF1ZXVlSXRlbS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWl0Y2hlbGxTL0xpYnJhcnkvTW9iaWxlIERvY3VtZW50cy9jb21+YXBwbGV+Q2xvdWREb2NzL1JNSVQvU2VtMi9DbG91ZCBDb21wdXRpbmcvQXNzMi9TcG90aWZ5IHByYWN0aXNlL2MtbWFzdGVyIn0=