'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transferPlaybackToDeviceError = exports.transferPlaybackToDeviceSuccess = exports.transferPlaybackToDevice = exports.fetchAvailableDevicesError = exports.fetchAvailableDevicesSuccess = exports.fetchAvailableDevices = undefined;

var _ActionTypes = require('../constants/ActionTypes');

var types = _interopRequireWildcard(_ActionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var fetchAvailableDevices = exports.fetchAvailableDevices = function fetchAvailableDevices() {
  return {
    type: types.FETCH_AVAILABLE_DEVICES
  };
};
var fetchAvailableDevicesSuccess = exports.fetchAvailableDevicesSuccess = function fetchAvailableDevicesSuccess(list) {
  return {
    type: types.FETCH_AVAILABLE_DEVICES_SUCCESS,
    list: list
  };
};
var fetchAvailableDevicesError = exports.fetchAvailableDevicesError = function fetchAvailableDevicesError(error) {
  return {
    type: types.FETCH_AVAILABLE_DEVICES_ERROR,
    error: error
  };
};

var transferPlaybackToDevice = exports.transferPlaybackToDevice = function transferPlaybackToDevice(deviceId) {
  return {
    type: types.TRANSFER_PLAYBACK_TO_DEVICE,
    deviceId: deviceId
  };
};
var transferPlaybackToDeviceSuccess = exports.transferPlaybackToDeviceSuccess = function transferPlaybackToDeviceSuccess(list) {
  return {
    type: types.TRANSFER_PLAYBACK_TO_DEVICE_SUCCESS
  };
};
var transferPlaybackToDeviceError = exports.transferPlaybackToDeviceError = function transferPlaybackToDeviceError(list) {
  return {
    type: types.TRANSFER_PLAYBACK_TO_DEVICE_ERROR,
    error: error
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnMvZGV2aWNlc0FjdGlvbnMuanMiXSwibmFtZXMiOlsidHlwZXMiLCJmZXRjaEF2YWlsYWJsZURldmljZXMiLCJ0eXBlIiwiRkVUQ0hfQVZBSUxBQkxFX0RFVklDRVMiLCJmZXRjaEF2YWlsYWJsZURldmljZXNTdWNjZXNzIiwiRkVUQ0hfQVZBSUxBQkxFX0RFVklDRVNfU1VDQ0VTUyIsImxpc3QiLCJmZXRjaEF2YWlsYWJsZURldmljZXNFcnJvciIsIkZFVENIX0FWQUlMQUJMRV9ERVZJQ0VTX0VSUk9SIiwiZXJyb3IiLCJ0cmFuc2ZlclBsYXliYWNrVG9EZXZpY2UiLCJUUkFOU0ZFUl9QTEFZQkFDS19UT19ERVZJQ0UiLCJkZXZpY2VJZCIsInRyYW5zZmVyUGxheWJhY2tUb0RldmljZVN1Y2Nlc3MiLCJUUkFOU0ZFUl9QTEFZQkFDS19UT19ERVZJQ0VfU1VDQ0VTUyIsInRyYW5zZmVyUGxheWJhY2tUb0RldmljZUVycm9yIiwiVFJBTlNGRVJfUExBWUJBQ0tfVE9fREVWSUNFX0VSUk9SIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsQUFBTzs7SUFBUCxBQUFZLEFBQVcsQUFFdkI7Ozs7QUFBTyxJQUFNLHdEQUF3QixTQUF4QixBQUF3Qix3QkFBQTs7VUFDN0IsTUFENkIsQUFBTyxBQUM5QjtBQUQ4QixBQUMxQztBQURLLEFBR1A7QUFBTyxJQUFNLHNFQUErQixTQUEvQixBQUErQixtQ0FBQTs7VUFDcEMsTUFENkMsQUFDdkMsQUFDWjtVQUYwQyxBQUFTO0FBQUEsQUFDbkQ7QUFESyxBQUlQO0FBQU8sSUFBTSxrRUFBNkIsU0FBN0IsQUFBNkIsa0NBQUE7O1VBQ2xDLE1BRDRDLEFBQ3RDLEFBQ1o7V0FGd0MsQUFBVTtBQUFBLEFBQ2xEO0FBREssQUFLUDs7QUFBTyxJQUFNLDhEQUEyQixTQUEzQixBQUEyQixtQ0FBQTs7VUFDaEMsTUFENkMsQUFDdkMsQUFDWjtjQUZzQyxBQUFhO0FBQUEsQUFDbkQ7QUFESyxBQUlQO0FBQU8sSUFBTSw0RUFBa0MsU0FBbEMsQUFBa0Msc0NBQUE7O1VBQ3ZDLE1BRHVDLEFBQVMsQUFDMUM7QUFEMEMsQUFDdEQ7QUFESyxBQUdQO0FBQU8sSUFBTSx3RUFBZ0MsU0FBaEMsQUFBZ0Msb0NBQUE7O1VBQ3JDLE1BRDhDLEFBQ3hDLEFBQ1o7V0FGMkMsQUFBUztBQUFBLEFBQ3BEO0FBREsiLCJmaWxlIjoiZGV2aWNlc0FjdGlvbnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01pdGNoZWxsUy9MaWJyYXJ5L01vYmlsZSBEb2N1bWVudHMvY29tfmFwcGxlfkNsb3VkRG9jcy9STUlUL1NlbTIvQ2xvdWQgQ29tcHV0aW5nL0FzczIvU3BvdGlmeSBwcmFjdGlzZS9jLW1hc3RlciJ9