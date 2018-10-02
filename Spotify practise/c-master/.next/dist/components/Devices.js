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

var _ButtonStyle = require('./ButtonStyle');

var _devicesActions = require('../actions/devicesActions');

var _reducers = require('../reducers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/MitchellS/Library/Mobile Documents/com~apple~CloudDocs/RMIT/Sem2/Cloud Computing/Ass2/Spotify practise/c-master/components/Devices.js';


var Devices = function (_React$PureComponent) {
  (0, _inherits3.default)(Devices, _React$PureComponent);

  function Devices() {
    (0, _classCallCheck3.default)(this, Devices);

    return (0, _possibleConstructorReturn3.default)(this, (Devices.__proto__ || (0, _getPrototypeOf2.default)(Devices)).apply(this, arguments));
  }

  (0, _createClass3.default)(Devices, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          devices = _props.devices,
          isFetching = _props.isFetching,
          fetchAvailableDevices = _props.fetchAvailableDevices,
          transferPlaybackToDevice = _props.transferPlaybackToDevice;

      return _react2.default.createElement('div', { style: { paddingBottom: '10px' }, className: 'jsx-' + _ButtonStyle.ButtonStyle.__scopedHash + ' jsx-' + _ButtonStyle.ButtonDarkStyle.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement('h2', {
        className: 'jsx-' + _ButtonStyle.ButtonStyle.__scopedHash + ' jsx-' + _ButtonStyle.ButtonDarkStyle.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'devices.title', __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      })), _react2.default.createElement(_style2.default, {
        styleId: _ButtonStyle.ButtonStyle.__scopedHash,
        css: _ButtonStyle.ButtonStyle.__scoped
      }), _react2.default.createElement(_style2.default, {
        styleId: _ButtonStyle.ButtonDarkStyle.__scopedHash,
        css: _ButtonStyle.ButtonDarkStyle.__scoped
      }), _react2.default.createElement('button', {
        disabled: isFetching,
        onClick: function onClick() {
          fetchAvailableDevices();
        },
        className: 'jsx-' + _ButtonStyle.ButtonStyle.__scopedHash + ' jsx-' + _ButtonStyle.ButtonDarkStyle.__scopedHash + ' ' + 'btn btn--dark',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'devices.fetch', __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      })), devices.length === 0 ? _react2.default.createElement('p', {
        className: 'jsx-' + _ButtonStyle.ButtonStyle.__scopedHash + ' jsx-' + _ButtonStyle.ButtonDarkStyle.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'devices.empty', __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      })) : _react2.default.createElement('table', {
        className: 'jsx-' + _ButtonStyle.ButtonStyle.__scopedHash + ' jsx-' + _ButtonStyle.ButtonDarkStyle.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement('tbody', {
        className: 'jsx-' + _ButtonStyle.ButtonStyle.__scopedHash + ' jsx-' + _ButtonStyle.ButtonDarkStyle.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, devices.map(function (device) {
        return _react2.default.createElement('tr', {
          className: 'jsx-' + _ButtonStyle.ButtonStyle.__scopedHash + ' jsx-' + _ButtonStyle.ButtonDarkStyle.__scopedHash,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        }, _react2.default.createElement('td', {
          className: 'jsx-' + _ButtonStyle.ButtonStyle.__scopedHash + ' jsx-' + _ButtonStyle.ButtonDarkStyle.__scopedHash,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        }, device.is_active ? _react2.default.createElement('strong', {
          className: 'jsx-' + _ButtonStyle.ButtonStyle.__scopedHash + ' jsx-' + _ButtonStyle.ButtonDarkStyle.__scopedHash,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        }, 'Active ->') : _react2.default.createElement('button', {
          onClick: function onClick() {
            transferPlaybackToDevice(device.id);
          },
          className: 'jsx-' + _ButtonStyle.ButtonStyle.__scopedHash + ' jsx-' + _ButtonStyle.ButtonDarkStyle.__scopedHash,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        }, _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'devices.transfer', __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }))), _react2.default.createElement('td', {
          className: 'jsx-' + _ButtonStyle.ButtonStyle.__scopedHash + ' jsx-' + _ButtonStyle.ButtonDarkStyle.__scopedHash,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          }
        }, device.name), _react2.default.createElement('td', {
          className: 'jsx-' + _ButtonStyle.ButtonStyle.__scopedHash + ' jsx-' + _ButtonStyle.ButtonDarkStyle.__scopedHash,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        }, device.type), _react2.default.createElement('td', {
          className: 'jsx-' + _ButtonStyle.ButtonStyle.__scopedHash + ' jsx-' + _ButtonStyle.ButtonDarkStyle.__scopedHash,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        }, device.volume));
      }))));
    }
  }]);

  return Devices;
}(_react2.default.PureComponent);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchAvailableDevices: function fetchAvailableDevices(index) {
      return dispatch((0, _devicesActions.fetchAvailableDevices)(index));
    },
    transferPlaybackToDevice: function transferPlaybackToDevice(deviceId) {
      return dispatch((0, _devicesActions.transferPlaybackToDevice)(deviceId));
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    isFetching: (0, _reducers.getIsFetchingDevices)(state),
    devices: (0, _reducers.getDevices)(state)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Devices);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRGV2aWNlcy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsImNvbm5lY3QiLCJGb3JtYXR0ZWRNZXNzYWdlIiwiQnV0dG9uU3R5bGUiLCJCdXR0b25EYXJrU3R5bGUiLCJmZXRjaEF2YWlsYWJsZURldmljZXMiLCJ0cmFuc2ZlclBsYXliYWNrVG9EZXZpY2UiLCJnZXRJc0ZldGNoaW5nRGV2aWNlcyIsImdldERldmljZXMiLCJEZXZpY2VzIiwicHJvcHMiLCJkZXZpY2VzIiwiaXNGZXRjaGluZyIsInBhZGRpbmdCb3R0b20iLCJsZW5ndGgiLCJtYXAiLCJkZXZpY2UiLCJpc19hY3RpdmUiLCJpZCIsIm5hbWUiLCJ0eXBlIiwidm9sdW1lIiwiUHVyZUNvbXBvbmVudCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiaW5kZXgiLCJkZXZpY2VJZCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFTOztBQUVULEFBQVMsQUFBYSxBQUF1Qjs7QUFDN0MsQUFBUyxBQUF1QixBQUFnQzs7QUFDaEUsQUFBUyxBQUE0QixBQUNyQyxBQUFTLEFBQWtCOzs7Ozs7O0lBQ3JCLEE7Ozs7Ozs7Ozs7OzZCQUNLO21CQUMwRSxLQUQxRSxBQUMrRTtVQUQvRSxBQUNDLGlCQURELEFBQ0M7VUFERCxBQUNVLG9CQURWLEFBQ1U7VUFEVixBQUNzQiwrQkFEdEIsQUFDc0I7VUFEdEIsQUFDNkMsa0NBRDdDLEFBQzZDLEFBQ3BEOzs2QkFDRSxjQUFBLFNBQUssT0FBTyxFQUFFLGVBQWQsQUFBWSxBQUFpQiw2R0FBN0I7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLGNBQUE7MkdBQUE7O29CQUFBO3NCQUFBLEFBQUk7QUFBSjtBQUFBLHlCQUFJLEFBQUMsNkNBQWlCLElBQWxCLEFBQXFCO29CQUFyQjtzQkFETixBQUNFLEFBQUk7QUFBQTs7MENBRE47c0NBQUE7QUFBQTs4Q0FBQTswQ0FBQSxBQVFFO0FBUkYsMEJBUUUsY0FBQTtrQkFBQSxBQUVZLEFBQ1Y7aUJBQVMsbUJBQU0sQUFDYjtBQUNEO0FBTEg7Z0lBQUEsQUFDWTs7b0JBRFo7c0JBQUEsQUFPRTtBQVBGO0FBRUUseUJBS0EsQUFBQyw2Q0FBaUIsSUFBbEIsQUFBcUI7b0JBQXJCO3NCQWZKLEFBUUUsQUFPRSxBQUVEO0FBRkM7bUJBRUQsQUFBUSxXQUFSLEFBQW1CLG9CQUNoQixjQUFBOzJHQUFBOztvQkFBQTtzQkFBQSxBQUFHO0FBQUg7QUFBQSxPQUFBLGtCQUFHLEFBQUMsNkNBQWlCLElBQWxCLEFBQXFCO29CQUFyQjtzQkFETixBQUNHLEFBQUc7QUFBQTs0QkFDSCxjQUFBOzJHQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7MkdBQUE7O29CQUFBO3NCQUFBLEFBQ0c7QUFESDtBQUFBLGlCQUNHLEFBQVEsSUFBSSxrQkFBQTsrQkFDWCxjQUFBOzZHQUFBOztzQkFBQTt3QkFBQSxBQUNFO0FBREY7QUFBQSxTQUFBLGtCQUNFLGNBQUE7NkdBQUE7O3NCQUFBO3dCQUFBLEFBQ0c7QUFESDtBQUFBLGtCQUNHLEFBQU8sNEJBQ0osY0FBQTs2R0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLFNBQUEsRUFESCxBQUNHLCtCQUNBLGNBQUE7bUJBQ1csbUJBQU0sQUFDYjtxQ0FBeUIsT0FBekIsQUFBZ0MsQUFDakM7QUFISDs2R0FBQTs7c0JBQUE7d0JBQUEsQUFLRTtBQUxGO0FBQ0UsU0FERixrQkFLRSxBQUFDLDZDQUFpQixJQUFsQixBQUFxQjtzQkFBckI7d0JBVFYsQUFDRSxBQUdNLEFBS0UsQUFHUjtBQUhROzhCQUdSLGNBQUE7NkdBQUE7O3NCQUFBO3dCQUFBLEFBQ0c7QUFESDtBQUFBLGtCQVpGLEFBWUUsQUFDVSxBQUVWLHVCQUFBLGNBQUE7NkdBQUE7O3NCQUFBO3dCQUFBLEFBQ0c7QUFESDtBQUFBLGtCQWZGLEFBZUUsQUFDVSxBQUVWLHVCQUFBLGNBQUE7NkdBQUE7O3NCQUFBO3dCQUFBLEFBQ0c7QUFESDtBQUFBLGtCQW5CUyxBQUNYLEFBa0JFLEFBQ1U7QUExQzFCLEFBQ0UsQUFtQk0sQUFDRSxBQUNHLEFBNEJkOzs7OztFQXJEbUIsZ0IsQUFBTTs7QUF3RDVCLElBQU0scUJBQXFCLFNBQXJCLEFBQXFCLDZCQUFBOzsyQkFDRixzQ0FBQTthQUFTLFNBQVMsMkNBQWxCLEFBQVMsQUFBUyxBQUFzQjtBQUR6QixBQUV0Qzs4QkFBMEIsNENBQUE7YUFBWSxTQUFTLDhDQUFyQixBQUFZLEFBQVMsQUFBeUI7QUFGL0MsQUFBYTtBQUFBLEFBQ3RDO0FBREY7O0FBS0EsSUFBTSxrQkFBa0IsU0FBbEIsQUFBa0IsdUJBQUE7O2dCQUNWLG9DQURvQixBQUNwQixBQUFxQixBQUNqQzthQUFTLDBCQUZhLEFBQVUsQUFFdkIsQUFBVztBQUZZLEFBQ2hDO0FBREYsQUFLQTs7a0JBQWUseUJBQUEsQUFBUSxpQkFBUixBQUF5QixvQkFBeEMsQUFBZSxBQUE2QyIsImZpbGUiOiJEZXZpY2VzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NaXRjaGVsbFMvTGlicmFyeS9Nb2JpbGUgRG9jdW1lbnRzL2NvbX5hcHBsZX5DbG91ZERvY3MvUk1JVC9TZW0yL0Nsb3VkIENvbXB1dGluZy9Bc3MyL1Nwb3RpZnkgcHJhY3Rpc2UvYy1tYXN0ZXIifQ==