'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIsFetchingDevices = exports.getDevices = exports.reducers = undefined;

var _redux = require('redux');

var _queueReducer = require('../reducers/queueReducer');

var _queueReducer2 = _interopRequireDefault(_queueReducer);

var _sessionReducer = require('../reducers/sessionReducer');

var _sessionReducer2 = _interopRequireDefault(_sessionReducer);

var _playbackReducer = require('../reducers/playbackReducer');

var _playbackReducer2 = _interopRequireDefault(_playbackReducer);

var _devicesReducer = require('../reducers/devicesReducer');

var fromDevices = _interopRequireWildcard(_devicesReducer);

var _usersReducer = require('../reducers/usersReducer');

var _usersReducer2 = _interopRequireDefault(_usersReducer);

var _searchReducer = require('../reducers/searchReducer');

var _searchReducer2 = _interopRequireDefault(_searchReducer);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = exports.reducers = function reducers() {
  return (0, _redux.combineReducers)({
    queue: _queueReducer2.default,
    playback: _playbackReducer2.default,
    session: _sessionReducer2.default,
    users: _usersReducer2.default,
    search: _searchReducer2.default,
    devices: fromDevices.default
  });
};

var getDevices = exports.getDevices = function getDevices(state) {
  return fromDevices.getDevices(state.devices);
};

var getIsFetchingDevices = exports.getIsFetchingDevices = function getIsFetchingDevices(state) {
  return fromDevices.getIsFetching(state.devices);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzL2luZGV4LmpzIl0sIm5hbWVzIjpbImNvbWJpbmVSZWR1Y2VycyIsInF1ZXVlUmVkdWNlciIsInNlc3Npb25SZWR1Y2VyIiwicGxheWJhY2tSZWR1Y2VyIiwiZGV2aWNlc1JlZHVjZXIiLCJmcm9tRGV2aWNlcyIsInVzZXJzUmVkdWNlciIsInNlYXJjaFJlZHVjZXIiLCJyZWR1Y2VycyIsInF1ZXVlIiwicGxheWJhY2siLCJzZXNzaW9uIiwidXNlcnMiLCJzZWFyY2giLCJkZXZpY2VzIiwiZ2V0RGV2aWNlcyIsInN0YXRlIiwiZ2V0SXNGZXRjaGluZ0RldmljZXMiLCJnZXRJc0ZldGNoaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsQUFBUzs7QUFFVCxBQUFPLEFBQWtCOzs7O0FBQ3pCLEFBQU8sQUFBb0I7Ozs7QUFDM0IsQUFBTyxBQUFxQjs7OztBQUM1QixBQUFPLEFBQWdCOztJQUF2QixBQUE0QixBQUFpQjs7QUFDN0MsQUFBTyxBQUFrQjs7OztBQUN6QixBQUFPLEFBQW1CLEFBRTFCOzs7Ozs7OztBQUFPLElBQU0sOEJBQVcsU0FBWCxBQUFXLFdBQUE7O0FBQ04sQUFDUCxBQUNQO0FBRmMsQUFFSixBQUNWO0FBSGMsQUFHTCxBQUNUO0FBSmMsQUFJUCxBQUNQO0FBTGMsQUFLTixBQUNSO0FBUG9CLEFBQ3RCLEFBQWdCLEFBTUw7QUFOSyxBQUNkLEdBREY7QUFESyxBQVVQOztBQUFPLElBQU0sa0NBQWEsU0FBYixBQUFhLGtCQUFBO1NBQVMsWUFBQSxBQUFZLFdBQVcsTUFBaEMsQUFBUyxBQUE2QjtBQUF6RCxBQUVQOztBQUFPLElBQU0sc0RBQXVCLFNBQXZCLEFBQXVCLDRCQUFBO1NBQVMsWUFBQSxBQUFZLGNBQWMsTUFBbkMsQUFBUyxBQUFnQztBQUF0RSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWl0Y2hlbGxTL0xpYnJhcnkvTW9iaWxlIERvY3VtZW50cy9jb21+YXBwbGV+Q2xvdWREb2NzL1JNSVQvU2VtMi9DbG91ZCBDb21wdXRpbmcvQXNzMi9TcG90aWZ5IHByYWN0aXNlL2MtbWFzdGVyIn0=