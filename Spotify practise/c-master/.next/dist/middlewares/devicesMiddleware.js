'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _ActionTypes = require('../constants/ActionTypes');

var _devicesActions = require('../actions/devicesActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SPOTIFY_API_BASE = 'https://api.spotify.com/v1';

exports.default = function (store) {
  return function (next) {
    return function (action) {
      var result = next(action);
      switch (action.type) {
        case _ActionTypes.FETCH_AVAILABLE_DEVICES:
          {
            (0, _isomorphicUnfetch2.default)(SPOTIFY_API_BASE + '/me/player/devices', {
              method: 'GET',
              headers: {
                Authorization: 'Bearer ' + store.getState().session.access_token
              }
            }).then(function (r) {
              return r.json();
            }).then(function (r) {
              if (r.error) {
                store.dispatch((0, _devicesActions.fetchAvailableDevicesError)(r.error));
              } else {
                store.dispatch((0, _devicesActions.fetchAvailableDevicesSuccess)(r.devices));
              }
            });
            break;
          }
        case _ActionTypes.TRANSFER_PLAYBACK_TO_DEVICE:
          {
            (0, _isomorphicUnfetch2.default)(SPOTIFY_API_BASE + '/me/player', {
              method: 'PUT',
              headers: {
                Authorization: 'Bearer ' + store.getState().session.access_token
              },
              body: (0, _stringify2.default)({
                device_ids: [action.deviceId]
              })
            }).then(function (r) {
              return r.json();
            }).then(function (r) {
              if (r.error) {
                store.dispatch((0, _devicesActions.transferPlaybackToDeviceError)(r.error));
              } else {
                store.dispatch((0, _devicesActions.transferPlaybackToDeviceSuccess)());
                store.dispatch((0, _devicesActions.fetchAvailableDevices)());
              }
            });
            break;
          }

        default:
          break;
      }

      return result;
    };
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pZGRsZXdhcmVzL2RldmljZXNNaWRkbGV3YXJlLmpzIl0sIm5hbWVzIjpbImZldGNoIiwiRkVUQ0hfQVZBSUxBQkxFX0RFVklDRVMiLCJUUkFOU0ZFUl9QTEFZQkFDS19UT19ERVZJQ0UiLCJmZXRjaEF2YWlsYWJsZURldmljZXMiLCJmZXRjaEF2YWlsYWJsZURldmljZXNTdWNjZXNzIiwiZmV0Y2hBdmFpbGFibGVEZXZpY2VzRXJyb3IiLCJ0cmFuc2ZlclBsYXliYWNrVG9EZXZpY2VTdWNjZXNzIiwidHJhbnNmZXJQbGF5YmFja1RvRGV2aWNlRXJyb3IiLCJTUE9USUZZX0FQSV9CQVNFIiwicmVzdWx0IiwibmV4dCIsImFjdGlvbiIsInR5cGUiLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInN0b3JlIiwiZ2V0U3RhdGUiLCJzZXNzaW9uIiwiYWNjZXNzX3Rva2VuIiwidGhlbiIsInIiLCJqc29uIiwiZXJyb3IiLCJkaXNwYXRjaCIsImRldmljZXMiLCJib2R5IiwiZGV2aWNlX2lkcyIsImRldmljZUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUVQLEFBQVMsQUFBeUIsQUFBbUM7O0FBQ3JFLEFBQ0UsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNLOzs7O0FBRVAsSUFBTSxtQkFBTixBQUF5QixBQUV6Qjs7a0JBQWUsaUJBQUE7U0FBUyxnQkFBQTtXQUFRLGtCQUFVLEFBQ3hDO1VBQU0sU0FBUyxLQUFmLEFBQWUsQUFBSyxBQUNwQjtjQUFRLE9BQVIsQUFBZSxBQUNiO0FBQUEsQUFBSyxBQUF5QjtBQUM1Qjs2Q0FBQSxBQUFTO3NCQUFzQyxBQUNyQyxBQUNSOzsyQ0FDMkIsTUFBQSxBQUFNLFdBQU4sQUFBaUIsUUFIOUMsQUFBK0MsQUFFcEMsQUFDMkM7QUFEM0MsQUFDUDtBQUgyQyxBQUM3QyxlQURGLEFBTUcsS0FBSyxhQUFBO3FCQUFLLEVBQUwsQUFBSyxBQUFFO0FBTmYsZUFBQSxBQU9HLEtBQUssYUFBSyxBQUNUO2tCQUFJLEVBQUosQUFBTSxPQUFPLEFBQ1g7c0JBQUEsQUFBTSxTQUFTLGdEQUEyQixFQUExQyxBQUFlLEFBQTZCLEFBQzdDO0FBRkQscUJBRU8sQUFDTDtzQkFBQSxBQUFNLFNBQVMsa0RBQTZCLEVBQTVDLEFBQWUsQUFBK0IsQUFDL0M7QUFDRjtBQWJILEFBY0E7QUFDRDtBQUNEO0FBQUEsQUFBSyxBQUE2QjtBQUNoQzs2Q0FBQSxBQUFTO3NCQUE4QixBQUM3QixBQUNSOzsyQ0FDMkIsTUFBQSxBQUFNLFdBQU4sQUFBaUIsUUFIUCxBQUU1QixBQUMyQyxBQUVwRDtBQUhTLEFBQ1A7OzRCQUdZLENBQUMsT0FOakIsQUFBdUMsQUFLL0IsQUFBZSxBQUNQLEFBQVE7QUFERCxBQUNuQixlQURJO0FBTCtCLEFBQ3JDLGVBREYsQUFTRyxLQUFLLGFBQUE7cUJBQUssRUFBTCxBQUFLLEFBQUU7QUFUZixlQUFBLEFBVUcsS0FBSyxhQUFLLEFBQ1Q7a0JBQUksRUFBSixBQUFNLE9BQU8sQUFDWDtzQkFBQSxBQUFNLFNBQVMsbURBQThCLEVBQTdDLEFBQWUsQUFBZ0MsQUFDaEQ7QUFGRCxxQkFFTyxBQUNMO3NCQUFBLEFBQU0sU0FBTixBQUFlLEFBQ2Y7c0JBQUEsQUFBTSxTQUFOLEFBQWUsQUFDaEI7QUFDRjtBQWpCSCxBQWtCQTtBQUNEO0FBRUQ7O0FBQ0U7QUF6Q0osQUE0Q0E7OzthQUFBLEFBQU8sQUFDUjtBQS9DdUI7QUFBVDtBQUFmIiwiZmlsZSI6ImRldmljZXNNaWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NaXRjaGVsbFMvTGlicmFyeS9Nb2JpbGUgRG9jdW1lbnRzL2NvbX5hcHBsZX5DbG91ZERvY3MvUk1JVC9TZW0yL0Nsb3VkIENvbXB1dGluZy9Bc3MyL1Nwb3RpZnkgcHJhY3Rpc2UvYy1tYXN0ZXIifQ==