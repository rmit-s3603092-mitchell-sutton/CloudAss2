'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchPlayingContext = exports.fetchPlayingContextSuccess = exports.unmutePlayback = exports.mutePlayback = exports.playTrackSuccess = exports.playTrack = undefined;

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _app = require('../config/app');

var _app2 = _interopRequireDefault(_app);

var _ActionTypes = require('../constants/ActionTypes');

var types = _interopRequireWildcard(_ActionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// playback
var playTrack = exports.playTrack = function playTrack(track, user, position) {
  return {
    type: types.PLAY_TRACK,
    track: track,
    user: user,
    position: position
  };
};
var playTrackSuccess = exports.playTrackSuccess = function playTrackSuccess(track, user, position) {
  return {
    type: types.PLAY_TRACK_SUCCESS,
    track: track,
    user: user,
    position: position
  };
};

var mutePlayback = exports.mutePlayback = function mutePlayback() {
  return { type: types.MUTE_PLAYBACK };
};
var unmutePlayback = exports.unmutePlayback = function unmutePlayback() {
  return { type: types.UNMUTE_PLAYBACK };
};

var fetchPlayingContextSuccess = exports.fetchPlayingContextSuccess = function fetchPlayingContextSuccess(playingContext) {
  return {
    type: types.FETCH_PLAYING_CONTEXT_SUCCESS,
    playingContext: playingContext
  };
};

var fetchPlayingContext = exports.fetchPlayingContext = function fetchPlayingContext() {
  return function (dispatch) {
    return (0, _isomorphicUnfetch2.default)(_app2.default.HOST + '/api/now-playing').then(function (res) {
      return res.json();
    }).then(function (res) {
      return dispatch(fetchPlayingContextSuccess(res));
    });
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnMvcGxheWJhY2tBY3Rpb25zLmpzIl0sIm5hbWVzIjpbImZldGNoIiwiQ29uZmlnIiwidHlwZXMiLCJwbGF5VHJhY2siLCJ0cmFjayIsInVzZXIiLCJwb3NpdGlvbiIsInR5cGUiLCJQTEFZX1RSQUNLIiwicGxheVRyYWNrU3VjY2VzcyIsIlBMQVlfVFJBQ0tfU1VDQ0VTUyIsIm11dGVQbGF5YmFjayIsIk1VVEVfUExBWUJBQ0siLCJ1bm11dGVQbGF5YmFjayIsIlVOTVVURV9QTEFZQkFDSyIsImZldGNoUGxheWluZ0NvbnRleHRTdWNjZXNzIiwiRkVUQ0hfUExBWUlOR19DT05URVhUX1NVQ0NFU1MiLCJwbGF5aW5nQ29udGV4dCIsImZldGNoUGxheWluZ0NvbnRleHQiLCJIT1NUIiwidGhlbiIsInJlcyIsImpzb24iLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLEFBQU87Ozs7QUFFUCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7SUFBUCxBQUFZLEFBQVc7Ozs7OztBQUV2QixBQUNBO0FBQU8sSUFBTSxnQ0FBWSxTQUFaLEFBQVksVUFBQSxBQUFDLE9BQUQsQUFBUSxNQUFSLEFBQWMsVUFBZDs7VUFDakIsTUFENkMsQUFDdkMsQUFDWjtXQUZtRCxBQUduRDtVQUhtRCxBQUluRDtjQUp1QixBQUE0QjtBQUFBLEFBQ25EO0FBREssQUFNUDtBQUFPLElBQU0sOENBQW1CLFNBQW5CLEFBQW1CLGlCQUFBLEFBQUMsT0FBRCxBQUFRLE1BQVIsQUFBYyxVQUFkOztVQUN4QixNQURvRCxBQUM5QyxBQUNaO1dBRjBELEFBRzFEO1VBSDBELEFBSTFEO2NBSjhCLEFBQTRCO0FBQUEsQUFDMUQ7QUFESyxBQU9QOztBQUFPLElBQU0sc0NBQWUsU0FBZixBQUFlLGVBQUE7U0FBTyxFQUFFLE1BQU0sTUFBZixBQUFPLEFBQWM7QUFBMUMsQUFDUDtBQUFPLElBQU0sMENBQWlCLFNBQWpCLEFBQWlCLGlCQUFBO1NBQU8sRUFBRSxNQUFNLE1BQWYsQUFBTyxBQUFjO0FBQTVDLEFBRVA7O0FBQU8sSUFBTSxrRUFBNkIsU0FBN0IsQUFBNkIsMkNBQUE7O1VBQ2xDLE1BRHFELEFBQy9DLEFBQ1o7b0JBRndDLEFBQW1CO0FBQUEsQUFDM0Q7QUFESyxBQUtQOztBQUFPLElBQU0sb0RBQXNCLFNBQXRCLEFBQXNCLHNCQUFBO1NBQU0sb0JBQUE7NENBQzlCLGNBQVQsQUFBZ0IsMkJBQWhCLEFBQ0csS0FBSyxlQUFBO2FBQU8sSUFBUCxBQUFPLEFBQUk7QUFEbkIsS0FBQSxFQUFBLEFBRUcsS0FBSyxlQUFBO2FBQU8sU0FBUywyQkFBaEIsQUFBTyxBQUFTLEFBQTJCO0FBSFosQUFDdkM7QUFEaUM7QUFBNUIiLCJmaWxlIjoicGxheWJhY2tBY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NaXRjaGVsbFMvTGlicmFyeS9Nb2JpbGUgRG9jdW1lbnRzL2NvbX5hcHBsZX5DbG91ZERvY3MvUk1JVC9TZW0yL0Nsb3VkIENvbXB1dGluZy9Bc3MyL1Nwb3RpZnkgcHJhY3Rpc2UvYy1tYXN0ZXIifQ==