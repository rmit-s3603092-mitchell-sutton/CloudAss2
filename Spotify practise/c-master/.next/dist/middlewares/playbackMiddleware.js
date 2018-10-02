'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _ActionTypes = require('../constants/ActionTypes');

var _playbackActions = require('../actions/playbackActions');

var _devicesActions = require('../actions/devicesActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SPOTIFY_API_BASE = 'https://api.spotify.com/v1';

exports.default = function (store) {
  return function (next) {
    return function (action) {
      var result = next(action);
      switch (action.type) {
        case _ActionTypes.PLAY_TRACK:
          {
            if (process.browser && !store.getState().playback.muted) {
              (0, _isomorphicUnfetch2.default)(SPOTIFY_API_BASE + '/me/player/play', {
                method: 'PUT',
                headers: {
                  Authorization: 'Bearer ' + store.getState().session.access_token
                },
                body: (0, _stringify2.default)({
                  uris: ['spotify:track:' + action.track.id]
                })
              }).then(function () {
                if (action.position) {
                  (0, _isomorphicUnfetch2.default)(SPOTIFY_API_BASE + '/me/player/seek?position_ms=' + action.position, {
                    method: 'PUT',
                    headers: {
                      Authorization: 'Bearer ' + store.getState().session.access_token
                    }
                  }).then(function () {
                    store.dispatch((0, _playbackActions.playTrackSuccess)(action.track, action.user, action.position));
                  });
                } else {
                  store.dispatch((0, _playbackActions.playTrackSuccess)(action.track, action.user));
                }
              });
            }
            break;
          }
        case _ActionTypes.UNMUTE_PLAYBACK:
          {
            var _store$getState$playb = store.getState().playback,
                track = _store$getState$playb.track,
                user = _store$getState$playb.user,
                position = _store$getState$playb.position,
                startTime = _store$getState$playb.startTime;

            var currentPosition = Date.now() - startTime + position;
            store.dispatch((0, _playbackActions.playTrack)(track, user, currentPosition));
            break;
          }
        default:
          break;
      }

      return result;
    };
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pZGRsZXdhcmVzL3BsYXliYWNrTWlkZGxld2FyZS5qcyJdLCJuYW1lcyI6WyJmZXRjaCIsIlBMQVlfVFJBQ0siLCJVTk1VVEVfUExBWUJBQ0siLCJwbGF5VHJhY2siLCJwbGF5VHJhY2tTdWNjZXNzIiwiZmV0Y2hBdmFpbGFibGVEZXZpY2VzRXJyb3IiLCJmZXRjaEF2YWlsYWJsZURldmljZXNTdWNjZXNzIiwiU1BPVElGWV9BUElfQkFTRSIsInJlc3VsdCIsIm5leHQiLCJhY3Rpb24iLCJ0eXBlIiwicHJvY2VzcyIsImJyb3dzZXIiLCJzdG9yZSIsImdldFN0YXRlIiwicGxheWJhY2siLCJtdXRlZCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwic2Vzc2lvbiIsImFjY2Vzc190b2tlbiIsImJvZHkiLCJ1cmlzIiwidHJhY2siLCJpZCIsInRoZW4iLCJwb3NpdGlvbiIsImRpc3BhdGNoIiwidXNlciIsInN0YXJ0VGltZSIsImN1cnJlbnRQb3NpdGlvbiIsIkRhdGUiLCJub3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBRVAsQUFBUyxBQUFZLEFBQXVCOztBQUM1QyxBQUFTLEFBQVcsQUFBd0I7O0FBQzVDLEFBQVMsQUFBNEIsQUFBb0M7Ozs7QUFFekUsSUFBTSxtQkFBTixBQUF5QixBQUV6Qjs7a0JBQWUsaUJBQUE7U0FBUyxnQkFBQTtXQUFRLGtCQUFVLEFBQ3hDO1VBQU0sU0FBUyxLQUFmLEFBQWUsQUFBSyxBQUNwQjtjQUFRLE9BQVIsQUFBZSxBQUNiO0FBQUEsQUFBSyxBQUFZO0FBQ2Y7Z0JBQUksUUFBQSxBQUFRLFdBQVcsQ0FBQyxNQUFBLEFBQU0sV0FBTixBQUFpQixTQUF6QyxBQUFrRCxPQUFPLEFBQ3ZEOytDQUFBLEFBQVM7d0JBQW1DLEFBQ2xDLEFBQ1I7OzZDQUMyQixNQUFBLEFBQU0sV0FBTixBQUFpQixRQUhGLEFBRWpDLEFBQzJDLEFBRXBEO0FBSFMsQUFDUDs7d0JBR00sb0JBQWtCLE9BQUEsQUFBTyxNQU5uQyxBQUE0QyxBQUtwQyxBQUFlLEFBQ2IsQUFBK0I7QUFEbEIsQUFDbkIsaUJBREk7QUFMb0MsQUFDMUMsaUJBREYsQUFRRyxLQUFLLFlBQU0sQUFDWjtvQkFBSSxPQUFKLEFBQVcsVUFBVSxBQUNuQjttREFBQSxBQUFTLG9EQUErQyxPQUF4RCxBQUErRDs0QkFBWSxBQUNqRSxBQUNSOztpREFDMkIsTUFBQSxBQUFNLFdBQU4sQUFBaUIsUUFIOUMsQUFBMkUsQUFFaEUsQUFDMkM7QUFEM0MsQUFDUDtBQUh1RSxBQUN6RSxxQkFERixBQUtHLEtBQUssWUFBTSxBQUNaOzBCQUFBLEFBQU0sU0FBUyx1Q0FBaUIsT0FBakIsQUFBd0IsT0FBTyxPQUEvQixBQUFzQyxNQUFNLE9BQTNELEFBQWUsQUFBbUQsQUFDbkU7QUFQRCxBQVFEO0FBVEQsdUJBU08sQUFDTDt3QkFBQSxBQUFNLFNBQVMsdUNBQWlCLE9BQWpCLEFBQXdCLE9BQU8sT0FBOUMsQUFBZSxBQUFzQyxBQUN0RDtBQUNGO0FBckJELEFBc0JEO0FBQ0Q7QUFDRDtBQUNEO0FBQUEsQUFBSyxBQUFpQjtBQUFBO3dDQUN5QixNQUFBLEFBQU0sV0FEL0IsQUFDMEM7Z0JBRDFDLEFBQ1osOEJBRFksQUFDWjtnQkFEWSxBQUNMLDZCQURLLEFBQ0w7Z0JBREssQUFDQyxpQ0FERCxBQUNDO2dCQURELEFBQ1csa0NBRFgsQUFDVyxBQUMvQjs7Z0JBQU0sa0JBQWtCLEtBQUEsQUFBSyxRQUFMLEFBQWEsWUFBckMsQUFBaUQsQUFDakQ7a0JBQUEsQUFBTSxTQUFTLGdDQUFBLEFBQVUsT0FBVixBQUFpQixNQUFoQyxBQUFlLEFBQXVCLEFBQ3RDO0FBQ0Q7QUFDRDtBQUNFO0FBbkNKLEFBc0NBOzs7YUFBQSxBQUFPLEFBQ1I7QUF6Q3VCO0FBQVQ7QUFBZiIsImZpbGUiOiJwbGF5YmFja01pZGRsZXdhcmUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01pdGNoZWxsUy9MaWJyYXJ5L01vYmlsZSBEb2N1bWVudHMvY29tfmFwcGxlfkNsb3VkRG9jcy9STUlUL1NlbTIvQ2xvdWQgQ29tcHV0aW5nL0FzczIvU3BvdGlmeSBwcmFjdGlzZS9jLW1hc3RlciJ9