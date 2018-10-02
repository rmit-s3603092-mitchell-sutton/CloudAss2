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

var _searchActions = require('../actions/searchActions');

var _queueActions = require('../actions/queueActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/MitchellS/Library/Mobile Documents/com~apple~CloudDocs/RMIT/Sem2/Cloud Computing/Ass2/Spotify practise/c-master/components/AddToQueue.js';


var ResultsList = function (_Component) {
  (0, _inherits3.default)(ResultsList, _Component);

  function ResultsList() {
    (0, _classCallCheck3.default)(this, ResultsList);

    return (0, _possibleConstructorReturn3.default)(this, (ResultsList.__proto__ || (0, _getPrototypeOf2.default)(ResultsList)).apply(this, arguments));
  }

  (0, _createClass3.default)(ResultsList, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          results = _props.results,
          focus = _props.focus;

      return _react2.default.createElement('ul', {
        className: 'jsx-746905509' + ' ' + 'add-to-queue__search-results',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: '746905509',
        css: '.add-to-queue__search-results.jsx-746905509{border:1px solid #999;list-style:none;margin:0;padding:0;}.add-to-queue__search-results-item.jsx-746905509{padding:5px 0 5px 5px;}.add-to-queue__search-results-item--focused.jsx-746905509{background-color:#eee;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWRkVG9RdWV1ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZb0IsQUFHbUMsQUFNQSxBQUdBLHNCQVJOLEFBTWxCLEFBR0EsZ0JBUlcsU0FDQyxVQUNaIiwiZmlsZSI6ImNvbXBvbmVudHMvQWRkVG9RdWV1ZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWl0Y2hlbGxTL0xpYnJhcnkvTW9iaWxlIERvY3VtZW50cy9jb21+YXBwbGV+Q2xvdWREb2NzL1JNSVQvU2VtMi9DbG91ZCBDb21wdXRpbmcvQXNzMi9TcG90aWZ5IHByYWN0aXNlL2MtbWFzdGVyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBpbmplY3RJbnRsIH0gZnJvbSAncmVhY3QtaW50bCc7XG5cbmltcG9ydCB7IHNlYXJjaFRyYWNrcywgc2VhcmNoVHJhY2tzUmVzZXQgfSBmcm9tICcuLi9hY3Rpb25zL3NlYXJjaEFjdGlvbnMnO1xuaW1wb3J0IHsgcXVldWVUcmFjayB9IGZyb20gJy4uL2FjdGlvbnMvcXVldWVBY3Rpb25zJztcblxuY2xhc3MgUmVzdWx0c0xpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByZXN1bHRzLCBmb2N1cyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPHVsIGNsYXNzTmFtZT1cImFkZC10by1xdWV1ZV9fc2VhcmNoLXJlc3VsdHNcIj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5hZGQtdG8tcXVldWVfX3NlYXJjaC1yZXN1bHRzIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmFkZC10by1xdWV1ZV9fc2VhcmNoLXJlc3VsdHMtaXRlbSB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMCA1cHggNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYWRkLXRvLXF1ZXVlX19zZWFyY2gtcmVzdWx0cy1pdGVtLS1mb2N1c2VkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIHtyZXN1bHRzLm1hcCgociwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBpc0ZvY3VzZWQgPSBmb2N1cyA9PT0gaW5kZXg7XG4gICAgICAgICAgY29uc3QgY2xhc3NOYW1lID1cbiAgICAgICAgICAgICdhZGQtdG8tcXVldWVfX3NlYXJjaC1yZXN1bHRzLWl0ZW0nICsgKGlzRm9jdXNlZCA/ICcgYWRkLXRvLXF1ZXVlX19zZWFyY2gtcmVzdWx0cy1pdGVtLS1mb2N1c2VkJyA6ICcnKTtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpIGtleT17ci5pZH0gY2xhc3NOYW1lPXtjbGFzc05hbWV9IG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25TZWxlY3Qoci5pZCl9PlxuICAgICAgICAgICAgICB7ci5uYW1lfSAtIHtyLmFydGlzdHNbMF0ubmFtZX1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L3VsPlxuICAgICk7XG4gIH1cbn1cblxuY2xhc3MgQWRkVG9RdWV1ZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHRleHQ6IHRoaXMucHJvcHMudGV4dCB8fCAnJyxcbiAgICBmb2N1czogLTFcbiAgfTtcblxuICBoYW5kbGVDaGFuZ2UgPSBlID0+IHtcbiAgICBjb25zdCB0ZXh0ID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRleHQ6IHRleHQgfSk7XG4gICAgaWYgKHRleHQgIT09ICcnKSB7XG4gICAgICB0aGlzLnByb3BzLnNlYXJjaFRyYWNrcyh0ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzOiAtMSB9KTtcbiAgICAgIHRoaXMucHJvcHMuc2VhcmNoVHJhY2tzUmVzZXQoKTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlU2VsZWN0RWxlbWVudCA9IGlkID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdGV4dDogJycgfSk7XG4gICAgdGhpcy5wcm9wcy5xdWV1ZVRyYWNrKGlkKTtcbiAgICB0aGlzLnByb3BzLnNlYXJjaFRyYWNrc1Jlc2V0KCk7XG4gIH07XG5cbiAgaGFuZGxlQmx1ciA9IGUgPT4ge1xuICAgIC8vIHRvZG86IHRoaXMgaGFwcGVucyBiZWZvcmUgdGhlIGl0ZW0gZnJvbSB0aGUgbGlzdCBpcyBzZWxlY3RlZCwgaGlkaW5nIHRoZVxuICAgIC8vIGxpc3Qgb2YgcmVzdWx0cy4gV2UgbmVlZCB0byBkbyB0aGlzIGluIGEgZGlmZmVyZW50IHdheS5cbiAgICAvKiAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXM6IC0xIH0pO1xuICAgIHRoaXMucHJvcHMuc2VhcmNoVHJhY2tzUmVzZXQoKTsgKi9cbiAgfTtcblxuICBoYW5kbGVGb2N1cyA9IGUgPT4ge1xuICAgIGlmIChlLnRhcmdldC52YWx1ZSAhPT0gJycpIHtcbiAgICAgIHRoaXMucHJvcHMuc2VhcmNoVHJhY2tzKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlS2V5RG93biA9IGUgPT4ge1xuICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICBjYXNlIDM4OiAvLyB1cFxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXM6IHRoaXMuc3RhdGUuZm9jdXMgLSAxIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDA6IC8vIGRvd25cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzOiB0aGlzLnN0YXRlLmZvY3VzICsgMSB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDEzOiB7XG4gICAgICAgIGxldCBjb3JyZWN0ID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmZvY3VzICE9PSAtMSkge1xuICAgICAgICAgIHRoaXMucHJvcHMucXVldWVUcmFjayh0aGlzLnByb3BzLnNlYXJjaC5yZXN1bHRzW3RoaXMuc3RhdGUuZm9jdXNdLmlkKTtcbiAgICAgICAgICBjb3JyZWN0ID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCB0ZXh0ID0gZS50YXJnZXQudmFsdWUudHJpbSgpO1xuICAgICAgICAgIGlmICh0ZXh0Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5xdWV1ZVRyYWNrKHRleHQpO1xuICAgICAgICAgICAgY29ycmVjdCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjb3JyZWN0KSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRleHQ6ICcnIH0pO1xuICAgICAgICAgIHRoaXMucHJvcHMuc2VhcmNoVHJhY2tzUmVzZXQoKTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXM6IC0xIH0pO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgcGxhY2Vob2xkZXIgPSB0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7aWQ6ICdxdWV1ZS5hZGQnfSk7XG4gICAgY29uc3QgcmVzdWx0cyA9IHRoaXMucHJvcHMuc2VhcmNoLnJlc3VsdHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkLXRvLXF1ZXVlXCIgb25CbHVyPXt0aGlzLmhhbmRsZUJsdXJ9PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmFkZC10by1xdWV1ZV9faW5wdXQge1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9XCJhZGQtdG8tcXVldWVfX2lucHV0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudGV4dH1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgb25LZXlEb3duPXt0aGlzLmhhbmRsZUtleURvd259XG4gICAgICAgICAgb25Gb2N1cz17dGhpcy5oYW5kbGVGb2N1c31cbiAgICAgICAgLz5cbiAgICAgICAge3Jlc3VsdHMgJiYgPFJlc3VsdHNMaXN0IHJlc3VsdHM9e3Jlc3VsdHN9IG9uU2VsZWN0PXt0aGlzLmhhbmRsZVNlbGVjdEVsZW1lbnR9IGZvY3VzPXt0aGlzLnN0YXRlLmZvY3VzfSAvPn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgcXVldWVUcmFjazogdGV4dCA9PiBkaXNwYXRjaChxdWV1ZVRyYWNrKHRleHQpKSxcbiAgc2VhcmNoVHJhY2tzOiBxdWVyeSA9PiBkaXNwYXRjaChzZWFyY2hUcmFja3MocXVlcnkpKSxcbiAgc2VhcmNoVHJhY2tzUmVzZXQ6ICgpID0+IGRpc3BhdGNoKHNlYXJjaFRyYWNrc1Jlc2V0KCkpXG59KTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgc2VhcmNoOiBzdGF0ZS5zZWFyY2hcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShpbmplY3RJbnRsKEFkZFRvUXVldWUpKTtcbiJdfQ== */\n/*@ sourceURL=components/AddToQueue.js */'
      }), results.map(function (r, index) {
        var isFocused = focus === index;
        var className = 'add-to-queue__search-results-item' + (isFocused ? ' add-to-queue__search-results-item--focused' : '');
        return _react2.default.createElement('li', { key: r.id, onClick: function onClick() {
            return _this2.props.onSelect(r.id);
          }, className: 'jsx-746905509' + ' ' + (className || ''),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        }, r.name, ' - ', r.artists[0].name);
      }));
    }
  }]);

  return ResultsList;
}(_react.Component);

var AddToQueue = function (_Component2) {
  (0, _inherits3.default)(AddToQueue, _Component2);

  function AddToQueue() {
    var _ref;

    var _temp, _this3, _ret;

    (0, _classCallCheck3.default)(this, AddToQueue);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this3 = (0, _possibleConstructorReturn3.default)(this, (_ref = AddToQueue.__proto__ || (0, _getPrototypeOf2.default)(AddToQueue)).call.apply(_ref, [this].concat(args))), _this3), _this3.state = {
      text: _this3.props.text || '',
      focus: -1
    }, _this3.handleChange = function (e) {
      var text = e.target.value;
      _this3.setState({ text: text });
      if (text !== '') {
        _this3.props.searchTracks(text);
      } else {
        _this3.setState({ focus: -1 });
        _this3.props.searchTracksReset();
      }
    }, _this3.handleSelectElement = function (id) {
      _this3.setState({ text: '' });
      _this3.props.queueTrack(id);
      _this3.props.searchTracksReset();
    }, _this3.handleBlur = function (e) {
      // todo: this happens before the item from the list is selected, hiding the
      // list of results. We need to do this in a different way.
      /*    this.setState({ focus: -1 });
      this.props.searchTracksReset(); */
    }, _this3.handleFocus = function (e) {
      if (e.target.value !== '') {
        _this3.props.searchTracks(e.target.value);
      }
    }, _this3.handleKeyDown = function (e) {
      switch (e.keyCode) {
        case 38:
          // up
          _this3.setState({ focus: _this3.state.focus - 1 });
          break;
        case 40:
          // down
          _this3.setState({ focus: _this3.state.focus + 1 });
          break;
        case 13:
          {
            var correct = false;
            if (_this3.state.focus !== -1) {
              _this3.props.queueTrack(_this3.props.search.results[_this3.state.focus].id);
              correct = true;
            } else {
              var text = e.target.value.trim();
              if (text.length !== 0) {
                _this3.props.queueTrack(text);
                correct = true;
              }
            }
            if (correct) {
              _this3.setState({ text: '' });
              _this3.props.searchTracksReset();
              _this3.setState({ focus: -1 });
            }
            break;
          }
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this3, _ret);
  }

  (0, _createClass3.default)(AddToQueue, [{
    key: 'render',
    value: function render() {
      var placeholder = this.props.intl.formatMessage({ id: 'queue.add' });
      var results = this.props.search.results;
      return _react2.default.createElement('div', { onBlur: this.handleBlur, className: 'jsx-3496109256' + ' ' + 'add-to-queue',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: '3496109256',
        css: '.add-to-queue__input.jsx-3496109256{padding:5px;width:400px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWRkVG9RdWV1ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnSG9CLEFBR3lCLFlBQ0EsWUFDZCIsImZpbGUiOiJjb21wb25lbnRzL0FkZFRvUXVldWUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01pdGNoZWxsUy9MaWJyYXJ5L01vYmlsZSBEb2N1bWVudHMvY29tfmFwcGxlfkNsb3VkRG9jcy9STUlUL1NlbTIvQ2xvdWQgQ29tcHV0aW5nL0FzczIvU3BvdGlmeSBwcmFjdGlzZS9jLW1hc3RlciIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgaW5qZWN0SW50bCB9IGZyb20gJ3JlYWN0LWludGwnO1xuXG5pbXBvcnQgeyBzZWFyY2hUcmFja3MsIHNlYXJjaFRyYWNrc1Jlc2V0IH0gZnJvbSAnLi4vYWN0aW9ucy9zZWFyY2hBY3Rpb25zJztcbmltcG9ydCB7IHF1ZXVlVHJhY2sgfSBmcm9tICcuLi9hY3Rpb25zL3F1ZXVlQWN0aW9ucyc7XG5cbmNsYXNzIFJlc3VsdHNMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcmVzdWx0cywgZm9jdXMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJhZGQtdG8tcXVldWVfX3NlYXJjaC1yZXN1bHRzXCI+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuYWRkLXRvLXF1ZXVlX19zZWFyY2gtcmVzdWx0cyB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hZGQtdG8tcXVldWVfX3NlYXJjaC1yZXN1bHRzLWl0ZW0ge1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDAgNXB4IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmFkZC10by1xdWV1ZV9fc2VhcmNoLXJlc3VsdHMtaXRlbS0tZm9jdXNlZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICB7cmVzdWx0cy5tYXAoKHIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgaXNGb2N1c2VkID0gZm9jdXMgPT09IGluZGV4O1xuICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9XG4gICAgICAgICAgICAnYWRkLXRvLXF1ZXVlX19zZWFyY2gtcmVzdWx0cy1pdGVtJyArIChpc0ZvY3VzZWQgPyAnIGFkZC10by1xdWV1ZV9fc2VhcmNoLXJlc3VsdHMtaXRlbS0tZm9jdXNlZCcgOiAnJyk7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaSBrZXk9e3IuaWR9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9uU2VsZWN0KHIuaWQpfT5cbiAgICAgICAgICAgICAge3IubmFtZX0gLSB7ci5hcnRpc3RzWzBdLm5hbWV9XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC91bD5cbiAgICApO1xuICB9XG59XG5cbmNsYXNzIEFkZFRvUXVldWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICB0ZXh0OiB0aGlzLnByb3BzLnRleHQgfHwgJycsXG4gICAgZm9jdXM6IC0xXG4gIH07XG5cbiAgaGFuZGxlQ2hhbmdlID0gZSA9PiB7XG4gICAgY29uc3QgdGV4dCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyB0ZXh0OiB0ZXh0IH0pO1xuICAgIGlmICh0ZXh0ICE9PSAnJykge1xuICAgICAgdGhpcy5wcm9wcy5zZWFyY2hUcmFja3ModGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1czogLTEgfSk7XG4gICAgICB0aGlzLnByb3BzLnNlYXJjaFRyYWNrc1Jlc2V0KCk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZVNlbGVjdEVsZW1lbnQgPSBpZCA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRleHQ6ICcnIH0pO1xuICAgIHRoaXMucHJvcHMucXVldWVUcmFjayhpZCk7XG4gICAgdGhpcy5wcm9wcy5zZWFyY2hUcmFja3NSZXNldCgpO1xuICB9O1xuXG4gIGhhbmRsZUJsdXIgPSBlID0+IHtcbiAgICAvLyB0b2RvOiB0aGlzIGhhcHBlbnMgYmVmb3JlIHRoZSBpdGVtIGZyb20gdGhlIGxpc3QgaXMgc2VsZWN0ZWQsIGhpZGluZyB0aGVcbiAgICAvLyBsaXN0IG9mIHJlc3VsdHMuIFdlIG5lZWQgdG8gZG8gdGhpcyBpbiBhIGRpZmZlcmVudCB3YXkuXG4gICAgLyogICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzOiAtMSB9KTtcbiAgICB0aGlzLnByb3BzLnNlYXJjaFRyYWNrc1Jlc2V0KCk7ICovXG4gIH07XG5cbiAgaGFuZGxlRm9jdXMgPSBlID0+IHtcbiAgICBpZiAoZS50YXJnZXQudmFsdWUgIT09ICcnKSB7XG4gICAgICB0aGlzLnByb3BzLnNlYXJjaFRyYWNrcyhlLnRhcmdldC52YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZUtleURvd24gPSBlID0+IHtcbiAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgY2FzZSAzODogLy8gdXBcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzOiB0aGlzLnN0YXRlLmZvY3VzIC0gMSB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDQwOiAvLyBkb3duXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1czogdGhpcy5zdGF0ZS5mb2N1cyArIDEgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxMzoge1xuICAgICAgICBsZXQgY29ycmVjdCA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5mb2N1cyAhPT0gLTEpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLnF1ZXVlVHJhY2sodGhpcy5wcm9wcy5zZWFyY2gucmVzdWx0c1t0aGlzLnN0YXRlLmZvY3VzXS5pZCk7XG4gICAgICAgICAgY29ycmVjdCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgdGV4dCA9IGUudGFyZ2V0LnZhbHVlLnRyaW0oKTtcbiAgICAgICAgICBpZiAodGV4dC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMucXVldWVUcmFjayh0ZXh0KTtcbiAgICAgICAgICAgIGNvcnJlY3QgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY29ycmVjdCkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0ZXh0OiAnJyB9KTtcbiAgICAgICAgICB0aGlzLnByb3BzLnNlYXJjaFRyYWNrc1Jlc2V0KCk7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzOiAtMSB9KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gdGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2Uoe2lkOiAncXVldWUuYWRkJ30pO1xuICAgIGNvbnN0IHJlc3VsdHMgPSB0aGlzLnByb3BzLnNlYXJjaC5yZXN1bHRzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZC10by1xdWV1ZVwiIG9uQmx1cj17dGhpcy5oYW5kbGVCbHVyfT5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5hZGQtdG8tcXVldWVfX2lucHV0IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWRkLXRvLXF1ZXVlX19pbnB1dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnRleHR9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5oYW5kbGVLZXlEb3dufVxuICAgICAgICAgIG9uRm9jdXM9e3RoaXMuaGFuZGxlRm9jdXN9XG4gICAgICAgIC8+XG4gICAgICAgIHtyZXN1bHRzICYmIDxSZXN1bHRzTGlzdCByZXN1bHRzPXtyZXN1bHRzfSBvblNlbGVjdD17dGhpcy5oYW5kbGVTZWxlY3RFbGVtZW50fSBmb2N1cz17dGhpcy5zdGF0ZS5mb2N1c30gLz59XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIHF1ZXVlVHJhY2s6IHRleHQgPT4gZGlzcGF0Y2gocXVldWVUcmFjayh0ZXh0KSksXG4gIHNlYXJjaFRyYWNrczogcXVlcnkgPT4gZGlzcGF0Y2goc2VhcmNoVHJhY2tzKHF1ZXJ5KSksXG4gIHNlYXJjaFRyYWNrc1Jlc2V0OiAoKSA9PiBkaXNwYXRjaChzZWFyY2hUcmFja3NSZXNldCgpKVxufSk7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIHNlYXJjaDogc3RhdGUuc2VhcmNoXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoaW5qZWN0SW50bChBZGRUb1F1ZXVlKSk7XG4iXX0= */\n/*@ sourceURL=components/AddToQueue.js */'
      }), _react2.default.createElement('input', {
        placeholder: placeholder,
        value: this.state.text,
        onChange: this.handleChange,
        onKeyDown: this.handleKeyDown,
        onFocus: this.handleFocus,
        className: 'jsx-3496109256' + ' ' + 'add-to-queue__input',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }), results && _react2.default.createElement(ResultsList, { results: results, onSelect: this.handleSelectElement, focus: this.state.focus, __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }));
    }
  }]);

  return AddToQueue;
}(_react.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    queueTrack: function queueTrack(text) {
      return dispatch((0, _queueActions.queueTrack)(text));
    },
    searchTracks: function searchTracks(query) {
      return dispatch((0, _searchActions.searchTracks)(query));
    },
    searchTracksReset: function searchTracksReset() {
      return dispatch((0, _searchActions.searchTracksReset)());
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    search: state.search
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _reactIntl.injectIntl)(AddToQueue));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWRkVG9RdWV1ZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNvbm5lY3QiLCJpbmplY3RJbnRsIiwic2VhcmNoVHJhY2tzIiwic2VhcmNoVHJhY2tzUmVzZXQiLCJxdWV1ZVRyYWNrIiwiUmVzdWx0c0xpc3QiLCJwcm9wcyIsInJlc3VsdHMiLCJmb2N1cyIsIm1hcCIsInIiLCJpbmRleCIsImlzRm9jdXNlZCIsImNsYXNzTmFtZSIsImlkIiwib25TZWxlY3QiLCJuYW1lIiwiYXJ0aXN0cyIsIkFkZFRvUXVldWUiLCJzdGF0ZSIsInRleHQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRTdGF0ZSIsImhhbmRsZVNlbGVjdEVsZW1lbnQiLCJoYW5kbGVCbHVyIiwiaGFuZGxlRm9jdXMiLCJoYW5kbGVLZXlEb3duIiwia2V5Q29kZSIsImNvcnJlY3QiLCJzZWFyY2giLCJ0cmltIiwibGVuZ3RoIiwicGxhY2Vob2xkZXIiLCJpbnRsIiwiZm9ybWF0TWVzc2FnZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwicXVlcnkiLCJtYXBTdGF0ZVRvUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTOztBQUNULEFBQVM7O0FBRVQsQUFBUyxBQUFjLEFBQXlCOztBQUNoRCxBQUFTLEFBQWtCOzs7Ozs7O0lBRXJCLEE7Ozs7Ozs7Ozs7OzZCQUNLO21CQUFBOzttQkFDb0IsS0FEcEIsQUFDeUI7VUFEekIsQUFDQyxpQkFERCxBQUNDO1VBREQsQUFDVSxlQURWLEFBQ1UsQUFDakI7OzZCQUNFLGNBQUE7MkNBQUEsQUFBYzs7b0JBQWQ7c0JBQUE7QUFBQTtBQUFBLE9BQUE7aUJBQUE7YUFBQSxBQWVHO0FBZkgsa0JBZUcsQUFBUSxJQUFJLFVBQUEsQUFBQyxHQUFELEFBQUksT0FBVSxBQUN6QjtZQUFNLFlB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WCxBQUFnQixjQUFjLEVBQUMsSUFBbkQsQUFBb0IsQUFBOEIsQUFBSyxBQUN2RDtVQUFNLFVBQVUsS0FBQSxBQUFLLE1BQUwsQUFBVyxPQUEzQixBQUFrQyxBQUNsQzs2QkFDRSxjQUFBLFNBQThCLFFBQVEsS0FBdEMsQUFBMkMsZ0RBQTNDLEFBQWU7O29CQUFmO3NCQUFBO0FBQUE7T0FBQTtpQkFBQTthQUFBLEFBT0U7QUFQRjtxQkFPRSxBQUVlLEFBQ2I7ZUFBTyxLQUFBLEFBQUssTUFIZCxBQUdvQixBQUNsQjtrQkFBVSxLQUpaLEFBSWlCLEFBQ2Y7bUJBQVcsS0FMYixBQUtrQixBQUNoQjtpQkFBUyxLQU5YLEFBTWdCOzRDQU5oQixBQUNZOztvQkFEWjtzQkFQRixBQU9FLEFBUUM7QUFSRDtBQUVFLG1EQU1VLEFBQUMsZUFBWSxTQUFiLEFBQXNCLFNBQVMsVUFBVSxLQUF6QyxBQUE4QyxxQkFBcUIsT0FBTyxLQUFBLEFBQUssTUFBL0UsQUFBcUY7b0JBQXJGO3NCQWhCaEIsQUFDRSxBQWVjLEFBR2pCO0FBSGlCO09BQUE7Ozs7O0FBckZLLEE7O0FBMkZ6QixJQUFNLHFCQUFxQixTQUFyQixBQUFxQiw2QkFBQTs7Z0JBQ2IsMEJBQUE7YUFBUSxTQUFTLDhCQUFqQixBQUFRLEFBQVMsQUFBVztBQURGLEFBRXRDO2tCQUFjLDZCQUFBO2FBQVMsU0FBUyxpQ0FBbEIsQUFBUyxBQUFTLEFBQWE7QUFGUCxBQUd0Qzt1QkFBbUIsNkJBQUE7YUFBTSxTQUFOLEFBQU0sQUFBUztBQUhULEFBQWE7QUFBQSxBQUN0QztBQURGOztBQU1BLElBQU0sa0JBQWtCLFNBQWxCLEFBQWtCLHVCQUFBOztZQUNkLE1BRGMsQUFBVSxBQUNsQjtBQURrQixBQUNoQztBQURGLEFBSUE7O2tCQUFlLHlCQUFBLEFBQVEsaUJBQVIsQUFBeUIsb0JBQW9CLDJCQUE1RCxBQUFlLEFBQTZDLEFBQVciLCJmaWxlIjoiQWRkVG9RdWV1ZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWl0Y2hlbGxTL0xpYnJhcnkvTW9iaWxlIERvY3VtZW50cy9jb21+YXBwbGV+Q2xvdWREb2NzL1JNSVQvU2VtMi9DbG91ZCBDb21wdXRpbmcvQXNzMi9TcG90aWZ5IHByYWN0aXNlL2MtbWFzdGVyIn0=