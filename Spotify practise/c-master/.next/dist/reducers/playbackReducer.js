'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _ActionTypes = require('../constants/ActionTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  muted: false
};

exports.default = function (state, action) {
  switch (action.type) {
    case _ActionTypes.FETCH_PLAYING_CONTEXT_SUCCESS:
      return (0, _extends3.default)({}, state, {
        track: action.playingContext.track,
        user: action.playingContext.user,
        position: 0
      });
    case _ActionTypes.PLAY_TRACK_SUCCESS:
      return (0, _extends3.default)({}, state, {
        track: action.track,
        user: action.user,
        position: action.position,
        startTime: new Date()
      });
    case _ActionTypes.QUEUE_ENDED:
      {
        return initialState;
      }
    case _ActionTypes.MUTE_PLAYBACK:
      return (0, _extends3.default)({}, state, { muted: true });
    case _ActionTypes.UNMUTE_PLAYBACK:
      return (0, _extends3.default)({}, state, { muted: false });
    default:
      return state ? state : initialState;
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzL3BsYXliYWNrUmVkdWNlci5qcyJdLCJuYW1lcyI6WyJGRVRDSF9QTEFZSU5HX0NPTlRFWFRfU1VDQ0VTUyIsIlBMQVlfVFJBQ0tfU1VDQ0VTUyIsIlFVRVVFX0VOREVEIiwiTVVURV9QTEFZQkFDSyIsIlVOTVVURV9QTEFZQkFDSyIsImluaXRpYWxTdGF0ZSIsIm11dGVkIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwidHJhY2siLCJwbGF5aW5nQ29udGV4dCIsInVzZXIiLCJwb3NpdGlvbiIsInN0YXJ0VGltZSIsIkRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUNFLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDSzs7OztBQUVQLElBQU07U0FBTixBQUFxQixBQUNaLEFBR1Q7QUFKcUIsQUFDbkI7O2tCQUdhLFVBQUEsQUFBQyxPQUFELEFBQVEsUUFBVyxBQUNoQztVQUFRLE9BQVIsQUFBZSxBQUNiO0FBQUEsQUFBSyxBQUNIO3dDQUFBLEFBQ0s7ZUFDSSxPQUFBLEFBQU8sZUFGaEIsQUFFK0IsQUFDN0I7Y0FBTSxPQUFBLEFBQU8sZUFIZixBQUc4QixBQUM1QjtrQkFKRixBQUlZLEFBRWQ7QUFKSTtBQUlKLEFBQUssQUFDSDt3Q0FBQSxBQUNLO2VBQ0ksT0FGVCxBQUVnQixBQUNkO2NBQU0sT0FIUixBQUdlLEFBQ2I7a0JBQVUsT0FKWixBQUltQixBQUNqQjttQkFBVyxJQUxiLEFBS2EsQUFBSSxBQUVuQjtBQUxJO0FBS0osQUFBSyxBQUFhO0FBQ2hCO2VBQUEsQUFBTyxBQUNSO0FBQ0Q7QUFBQSxBQUFLLEFBQ0g7d0NBQUEsQUFBWSxTQUFPLE9BQW5CLEFBQTBCLEFBQzVCO0FBQUEsQUFBSyxBQUNIO3dDQUFBLEFBQVksU0FBTyxPQUFuQixBQUEwQixBQUM1QjtBQUNFO2FBQU8sUUFBQSxBQUFRLFFBeEJuQixBQXdCSSxBQUF1QixBQUU1Qjs7QUEzQkQiLCJmaWxlIjoicGxheWJhY2tSZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NaXRjaGVsbFMvTGlicmFyeS9Nb2JpbGUgRG9jdW1lbnRzL2NvbX5hcHBsZX5DbG91ZERvY3MvUk1JVC9TZW0yL0Nsb3VkIENvbXB1dGluZy9Bc3MyL1Nwb3RpZnkgcHJhY3Rpc2UvYy1tYXN0ZXIifQ==