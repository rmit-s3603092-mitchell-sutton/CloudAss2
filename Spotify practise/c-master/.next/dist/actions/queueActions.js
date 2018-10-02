'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchQueue = exports.queueRemoveTrack = exports.queueEnded = exports.updateQueue = exports.queueTrack = undefined;

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _app = require('../config/app');

var _app2 = _interopRequireDefault(_app);

var _ActionTypes = require('../constants/ActionTypes');

var types = _interopRequireWildcard(_ActionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var queueTrack = exports.queueTrack = function queueTrack(id) {
  return { type: types.QUEUE_TRACK, id: id };
};
var updateQueue = exports.updateQueue = function updateQueue(queue) {
  return { type: types.UPDATE_QUEUE, data: queue };
};
var queueEnded = exports.queueEnded = function queueEnded() {
  return { type: types.QUEUE_ENDED };
};
var queueRemoveTrack = exports.queueRemoveTrack = function queueRemoveTrack(id) {
  return {
    type: types.QUEUE_REMOVE_TRACK,
    id: id
  };
};

var fetchQueue = exports.fetchQueue = function fetchQueue() {
  return function (dispatch) {
    return (0, _isomorphicUnfetch2.default)(_app2.default.HOST + '/api/queue').then(function (res) {
      return res.json();
    }).then(function (res) {
      return dispatch(updateQueue(res));
    });
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnMvcXVldWVBY3Rpb25zLmpzIl0sIm5hbWVzIjpbImZldGNoIiwiQ29uZmlnIiwidHlwZXMiLCJxdWV1ZVRyYWNrIiwidHlwZSIsIlFVRVVFX1RSQUNLIiwiaWQiLCJ1cGRhdGVRdWV1ZSIsIlVQREFURV9RVUVVRSIsImRhdGEiLCJxdWV1ZSIsInF1ZXVlRW5kZWQiLCJRVUVVRV9FTkRFRCIsInF1ZXVlUmVtb3ZlVHJhY2siLCJRVUVVRV9SRU1PVkVfVFJBQ0siLCJmZXRjaFF1ZXVlIiwiSE9TVCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBRVAsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87O0lBQVAsQUFBWSxBQUFXLEFBRXZCOzs7Ozs7QUFBTyxJQUFNLGtDQUFhLFNBQWIsQUFBYSxlQUFBO1NBQU8sRUFBRSxNQUFNLE1BQVIsQUFBYyxhQUFhLElBQWxDLEFBQU87QUFBMUIsQUFDUDtBQUFPLElBQU0sb0NBQWMsU0FBZCxBQUFjLG1CQUFBO1NBQVUsRUFBRSxNQUFNLE1BQVIsQUFBYyxjQUFjLE1BQXRDLEFBQVUsQUFBa0M7QUFBaEUsQUFDUDtBQUFPLElBQU0sa0NBQWEsU0FBYixBQUFhLGFBQUE7U0FBTyxFQUFFLE1BQU0sTUFBZixBQUFPLEFBQWM7QUFBeEMsQUFDUDtBQUFPLElBQU0sOENBQW1CLFNBQW5CLEFBQW1CLHFCQUFBOztVQUN4QixNQUQrQixBQUN6QixBQUNaO1FBRjhCLEFBQU87QUFBQSxBQUNyQztBQURLLEFBS1A7O0FBQU8sSUFBTSxrQ0FBYSxTQUFiLEFBQWEsYUFBQTtTQUFNLG9CQUFBOzRDQUNyQixjQUFULEFBQWdCLHFCQUFoQixBQUFrQyxLQUFLLGVBQUE7YUFBTyxJQUFQLEFBQU8sQUFBSTtBQUFsRCxLQUFBLEVBQUEsQUFBMEQsS0FBSyxlQUFBO2FBQU8sU0FBUyxZQUFoQixBQUFPLEFBQVMsQUFBWTtBQUQ3RCxBQUM5QjtBQUR3QjtBQUFuQiIsImZpbGUiOiJxdWV1ZUFjdGlvbnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01pdGNoZWxsUy9MaWJyYXJ5L01vYmlsZSBEb2N1bWVudHMvY29tfmFwcGxlfkNsb3VkRG9jcy9STUlUL1NlbTIvQ2xvdWQgQ29tcHV0aW5nL0FzczIvU3BvdGlmeSBwcmFjdGlzZS9jLW1hc3RlciJ9