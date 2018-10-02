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

var _reactRedux = require('react-redux');

var _reactIntl = require('react-intl');

var _QueueItem = require('./QueueItem');

var _QueueItem2 = _interopRequireDefault(_QueueItem);

var _queueActions = require('../actions/queueActions');

var _voteActions = require('../actions/voteActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/MitchellS/Library/Mobile Documents/com~apple~CloudDocs/RMIT/Sem2/Cloud Computing/Ass2/Spotify practise/c-master/components/Queue.js';


var Queue = function (_React$PureComponent) {
  (0, _inherits3.default)(Queue, _React$PureComponent);

  function Queue() {
    (0, _classCallCheck3.default)(this, Queue);

    return (0, _possibleConstructorReturn3.default)(this, (Queue.__proto__ || (0, _getPrototypeOf2.default)(Queue)).apply(this, arguments));
  }

  (0, _createClass3.default)(Queue, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          items = _props.items,
          session = _props.session;

      return _react2.default.createElement('div', { style: { paddingBottom: '10px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'queue.title', __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      })), items.length === 0 ? _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'queue.empty', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      })) : _react2.default.createElement('table', {
        className: 'jsx-1423284646' + ' ' + 'queue',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: '1423284646',
        css: '.queue.jsx-1423284646{max-width:550px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUXVldWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUIwQixBQUdtQyxnQkFDbEIiLCJmaWxlIjoiY29tcG9uZW50cy9RdWV1ZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWl0Y2hlbGxTL0xpYnJhcnkvTW9iaWxlIERvY3VtZW50cy9jb21+YXBwbGV+Q2xvdWREb2NzL1JNSVQvU2VtMi9DbG91ZCBDb21wdXRpbmcvQXNzMi9TcG90aWZ5IHByYWN0aXNlL2MtbWFzdGVyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBGb3JtYXR0ZWRNZXNzYWdlIH0gZnJvbSAncmVhY3QtaW50bCc7XG5cbmltcG9ydCBRdWV1ZUl0ZW0gZnJvbSAnLi9RdWV1ZUl0ZW0nO1xuaW1wb3J0IHsgcXVldWVSZW1vdmVUcmFjayB9IGZyb20gJy4uL2FjdGlvbnMvcXVldWVBY3Rpb25zJztcbmltcG9ydCB7IHZvdGVVcCB9IGZyb20gJy4uL2FjdGlvbnMvdm90ZUFjdGlvbnMnO1xuXG5jbGFzcyBRdWV1ZSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpdGVtcywgc2Vzc2lvbiB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiAnMTBweCcgfX0+XG4gICAgICAgIDxoMj48Rm9ybWF0dGVkTWVzc2FnZSBpZD1cInF1ZXVlLnRpdGxlXCIgLz48L2gyPlxuICAgICAgICB7aXRlbXMubGVuZ3RoID09PSAwXG4gICAgICAgICAgPyA8cD48Rm9ybWF0dGVkTWVzc2FnZSBpZD1cInF1ZXVlLmVtcHR5XCIgLz48L3A+XG4gICAgICAgICAgOiA8dGFibGUgY2xhc3NOYW1lPVwicXVldWVcIj5cbiAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5xdWV1ZSB7XG4gICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDU1MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAge2l0ZW1zLm1hcCgoaSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxRdWV1ZUl0ZW1cbiAgICAgICAgICAgICAgICAgICAgaXRlbT17aX1cbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbj17c2Vzc2lvbn1cbiAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICBvblZvdGVVcD17KCkgPT4gdGhpcy5wcm9wcy52b3RlVXAoaS5pZCl9XG4gICAgICAgICAgICAgICAgICAgIG9uUmVtb3ZlSXRlbT17KCkgPT4gdGhpcy5wcm9wcy5xdWV1ZVJlbW92ZVRyYWNrKGkuaWQpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+fVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICB2b3RlVXA6IGlkID0+IGRpc3BhdGNoKHZvdGVVcChpZCkpLFxuICBxdWV1ZVJlbW92ZVRyYWNrOiBpZCA9PiBkaXNwYXRjaChxdWV1ZVJlbW92ZVRyYWNrKGlkKSlcbn0pO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBxdWV1ZTogc3RhdGUucXVldWVcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShRdWV1ZSk7XG4iXX0= */\n/*@ sourceURL=components/Queue.js */'
      }), _react2.default.createElement('tbody', {
        className: 'jsx-1423284646',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, items.map(function (i, index) {
        return _react2.default.createElement(_QueueItem2.default, {
          item: i,
          session: session,
          index: index,
          key: index,
          onVoteUp: function onVoteUp() {
            return _this2.props.voteUp(i.id);
          },
          onRemoveItem: function onRemoveItem() {
            return _this2.props.queueRemoveTrack(i.id);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        });
      }))));
    }
  }]);

  return Queue;
}(_react2.default.PureComponent);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    voteUp: function voteUp(id) {
      return dispatch((0, _voteActions.voteUp)(id));
    },
    queueRemoveTrack: function queueRemoveTrack(id) {
      return dispatch((0, _queueActions.queueRemoveTrack)(id));
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    queue: state.queue
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Queue);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUXVldWUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJjb25uZWN0IiwiRm9ybWF0dGVkTWVzc2FnZSIsIlF1ZXVlSXRlbSIsInF1ZXVlUmVtb3ZlVHJhY2siLCJ2b3RlVXAiLCJRdWV1ZSIsInByb3BzIiwiaXRlbXMiLCJzZXNzaW9uIiwicGFkZGluZ0JvdHRvbSIsImxlbmd0aCIsIm1hcCIsImkiLCJpbmRleCIsImlkIiwiUHVyZUNvbXBvbmVudCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwibWFwU3RhdGVUb1Byb3BzIiwicXVldWUiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBUzs7QUFFVCxBQUFPLEFBQWU7Ozs7QUFDdEIsQUFBUyxBQUF3Qjs7QUFDakMsQUFBUyxBQUFjOzs7Ozs7O0lBRWpCLEE7Ozs7Ozs7Ozs7OzZCQUNLO21CQUFBOzttQkFDb0IsS0FEcEIsQUFDeUI7VUFEekIsQUFDQyxlQURELEFBQ0M7VUFERCxBQUNRLGlCQURSLEFBQ1EsQUFDZjs7NkJBQ0UsY0FBQSxTQUFLLE9BQU8sRUFBRSxlQUFkLEFBQVksQUFBaUI7b0JBQTdCO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQUk7QUFBSjtBQUFBLHlCQUFJLEFBQUMsNkNBQWlCLElBQWxCLEFBQXFCO29CQUFyQjtzQkFETixBQUNFLEFBQUksQUFDSDtBQURHO2lCQUNILEFBQU0sV0FBTixBQUFpQixvQkFDZCxjQUFBOztvQkFBQTtzQkFBQSxBQUFHO0FBQUg7QUFBQSxPQUFBLGtCQUFHLEFBQUMsNkNBQWlCLElBQWxCLEFBQXFCO29CQUFyQjtzQkFETixBQUNHLEFBQUc7QUFBQTs0QkFDSCxjQUFBOzRDQUFBLEFBQWlCOztvQkFBakI7c0JBQUE7QUFBQTtBQUFBLE9BQUE7aUJBQUE7YUFBQSxBQU1FO0FBTkYsMEJBTUUsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRztBQURIO0FBQUEsZUFDRyxBQUFNLElBQUksVUFBQSxBQUFDLEdBQUQsQUFBSSxPQUFKOytCQUNULEFBQUM7Z0JBQUQsQUFDUSxBQUNOO21CQUZGLEFBRVcsQUFDVDtpQkFIRixBQUdTLEFBQ1A7ZUFKRixBQUlPLEFBQ0w7b0JBQVUsb0JBQUE7bUJBQU0sT0FBQSxBQUFLLE1BQUwsQUFBVyxPQUFPLEVBQXhCLEFBQU0sQUFBb0I7QUFMdEMsQUFNRTt3QkFBYyx3QkFBQTttQkFBTSxPQUFBLEFBQUssTUFBTCxBQUFXLGlCQUFpQixFQUFsQyxBQUFNLEFBQThCO0FBTnBEOztzQkFBQTt3QkFEUyxBQUNUO0FBQUE7QUFDRSxTQURGO0FBYmQsQUFDRSxBQUlNLEFBTUUsQUFDRyxBQWNkOzs7OztFQTdCaUIsZ0JBQU0sQTs7QUFnQzFCLElBQU0scUJBQXFCLFNBQXJCLEFBQXFCLDZCQUFBOztZQUNqQixvQkFBQTthQUFNLFNBQVMseUJBQWYsQUFBTSxBQUFTLEFBQU87QUFEUSxBQUV0QztzQkFBa0IsOEJBQUE7YUFBTSxTQUFTLG9DQUFmLEFBQU0sQUFBUyxBQUFpQjtBQUZ6QixBQUFhO0FBQUEsQUFDdEM7QUFERjs7QUFLQSxJQUFNLGtCQUFrQixTQUFsQixBQUFrQix1QkFBQTs7V0FDZixNQURlLEFBQVUsQUFDbkI7QUFEbUIsQUFDaEM7QUFERixBQUlBOztrQkFBZSx5QkFBQSxBQUFRLGlCQUFSLEFBQXlCLG9CQUF4QyxBQUFlLEFBQTZDIiwiZmlsZSI6IlF1ZXVlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NaXRjaGVsbFMvTGlicmFyeS9Nb2JpbGUgRG9jdW1lbnRzL2NvbX5hcHBsZX5DbG91ZERvY3MvUk1JVC9TZW0yL0Nsb3VkIENvbXB1dGluZy9Bc3MyL1Nwb3RpZnkgcHJhY3Rpc2UvYy1tYXN0ZXIifQ==