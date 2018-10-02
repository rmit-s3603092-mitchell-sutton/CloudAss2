'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.socketMiddleware = socketMiddleware;

exports.default = function (store) {
  socket = _socket2.default.connect(_app2.default.HOST);

  socket.on('update queue', function (data) {
    store.dispatch((0, _queueActions.updateQueue)(data));
  });

  socket.on('queue ended', function () {
    store.dispatch((0, _queueActions.queueEnded)());
  });

  socket.on('update now playing', function (track, user, isPlaying) {
    // we should also set repeat to false!
    store.dispatch((0, _playbackActions.updateNowPlaying)(track, user, isPlaying));
  });

  socket.on('play track', function (track, user, position) {
    // we should also set repeat to false!
    store.dispatch((0, _playbackActions.playTrack)(track, user, position));
  });

  socket.on('update users', function (data) {
    store.dispatch((0, _usersActions.updateUsers)(data));
  });

  // todo: manage end song, end queue
};

var _ActionTypes = require('../constants/ActionTypes');

var _usersActions = require('../actions/usersActions');

var _queueActions = require('../actions/queueActions');

var _playbackActions = require('../actions/playbackActions');

var _app = require('../config/app');

var _app2 = _interopRequireDefault(_app);

var _socket = require('socket.io-client');

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var socket = null;

var getIdFromTrackString = function getIdFromTrackString() {
  var trackString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var matches = trackString.match(/^https:\/\/open\.spotify\.com\/track\/(.*)/);
  if (matches) {
    return matches[1];
  }

  matches = trackString.match(/^https:\/\/play\.spotify\.com\/track\/(.*)/);
  if (matches) {
    return matches[1];
  }

  matches = trackString.match(/^spotify:track:(.*)/);
  if (matches) {
    return matches[1];
  }

  return null;
};

function socketMiddleware(store) {
  return function (next) {
    return function (action) {
      var result = next(action);

      if (socket) {
        switch (action.type) {
          case _ActionTypes.QUEUE_TRACK:
            {
              var trackId = getIdFromTrackString(action.id);
              if (trackId === null) {
                trackId = action.id;
              }
              socket.emit('queue track', trackId);
              break;
            }
          case _ActionTypes.QUEUE_REMOVE_TRACK:
            {
              socket.emit('remove track', action.id);
              break;
            }
          case _ActionTypes.LOGIN_SUCCESS:
            var user = store.getState().session.user;
            socket.emit('user login', user);
            break;
          case _ActionTypes.VOTE_UP:
            socket.emit('vote up', action.id);
            break;
          default:
            break;
        }
      }

      return result;
    };
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pZGRsZXdhcmVzL3NvY2tldE1pZGRsZXdhcmUuanMiXSwibmFtZXMiOlsiVk9URV9VUCIsIkxPR0lOX1NVQ0NFU1MiLCJRVUVVRV9SRU1PVkVfVFJBQ0siLCJRVUVVRV9UUkFDSyIsInVwZGF0ZVVzZXJzIiwidXBkYXRlUXVldWUiLCJxdWV1ZUVuZGVkIiwidXBkYXRlTm93UGxheWluZyIsInBsYXlUcmFjayIsIkNvbmZpZyIsImlvIiwic29ja2V0IiwiZ2V0SWRGcm9tVHJhY2tTdHJpbmciLCJ0cmFja1N0cmluZyIsIm1hdGNoZXMiLCJtYXRjaCIsInNvY2tldE1pZGRsZXdhcmUiLCJzdG9yZSIsInJlc3VsdCIsIm5leHQiLCJhY3Rpb24iLCJ0eXBlIiwidHJhY2tJZCIsImlkIiwiZW1pdCIsInVzZXIiLCJnZXRTdGF0ZSIsInNlc3Npb24iLCJjb25uZWN0IiwiSE9TVCIsIm9uIiwiZGlzcGF0Y2giLCJkYXRhIiwidHJhY2siLCJpc1BsYXlpbmciLCJwb3NpdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUE2Qk8sQUFBUzs7a0JBaUNELFVBQUEsQUFBUyxPQUFPLEFBQzdCO1dBQVMsaUJBQUEsQUFBRyxRQUFRLGNBQXBCLEFBQVMsQUFBa0IsQUFFM0I7O1NBQUEsQUFBTyxHQUFQLEFBQVUsZ0JBQWdCLGdCQUFRLEFBQ2hDO1VBQUEsQUFBTSxTQUFTLCtCQUFmLEFBQWUsQUFBWSxBQUM1QjtBQUZELEFBSUE7O1NBQUEsQUFBTyxHQUFQLEFBQVUsZUFBZSxZQUFNLEFBQzdCO1VBQUEsQUFBTSxTQUFOLEFBQWUsQUFDaEI7QUFGRCxBQUlBOztTQUFBLEFBQU8sR0FBUCxBQUFVLHNCQUFzQixVQUFBLEFBQUMsT0FBRCxBQUFRLE1BQVIsQUFBYyxXQUFjLEFBQzFEO0FBQ0E7VUFBQSxBQUFNLFNBQVMsdUNBQUEsQUFBaUIsT0FBakIsQUFBd0IsTUFBdkMsQUFBZSxBQUE4QixBQUM5QztBQUhELEFBS0E7O1NBQUEsQUFBTyxHQUFQLEFBQVUsY0FBYyxVQUFBLEFBQUMsT0FBRCxBQUFRLE1BQVIsQUFBYyxVQUFhLEFBQ2pEO0FBQ0E7VUFBQSxBQUFNLFNBQVMsZ0NBQUEsQUFBVSxPQUFWLEFBQWlCLE1BQWhDLEFBQWUsQUFBdUIsQUFDdkM7QUFIRCxBQUtBOztTQUFBLEFBQU8sR0FBUCxBQUFVLGdCQUFnQixnQkFBUSxBQUNoQztVQUFBLEFBQU0sU0FBUywrQkFBZixBQUFlLEFBQVksQUFDNUI7QUFGRCxBQUlBOztBQUNEOzs7QUF4RkQsQUFBUyxBQUFTLEFBQWUsQUFBb0IsQUFBbUI7O0FBQ3hFLEFBQVMsQUFBbUI7O0FBQzVCLEFBQVMsQUFBYSxBQUFrQjs7QUFDeEMsQUFBUyxBQUFrQixBQUFpQjs7QUFDNUMsQUFBTyxBQUFZOzs7O0FBRW5CLEFBQU87Ozs7OztBQUVQLElBQUksU0FBSixBQUFhOztBQUViLElBQU0sdUJBQXVCLFNBQXZCLEFBQXVCLHVCQUFzQjtNQUFyQixBQUFxQixrRkFBUCxBQUFPLEFBQ2pEOztNQUFJLFVBQVUsWUFBQSxBQUFZLE1BQTFCLEFBQWMsQUFBa0IsQUFDaEM7TUFBQSxBQUFJLFNBQVMsQUFDWDtXQUFPLFFBQVAsQUFBTyxBQUFRLEFBQ2hCO0FBRUQ7O1lBQVUsWUFBQSxBQUFZLE1BQXRCLEFBQVUsQUFBa0IsQUFDNUI7TUFBQSxBQUFJLFNBQVMsQUFDWDtXQUFPLFFBQVAsQUFBTyxBQUFRLEFBQ2hCO0FBRUQ7O1lBQVUsWUFBQSxBQUFZLE1BQXRCLEFBQVUsQUFBa0IsQUFDNUI7TUFBQSxBQUFJLFNBQVMsQUFDWDtXQUFPLFFBQVAsQUFBTyxBQUFRLEFBQ2hCO0FBRUQ7O1NBQUEsQUFBTyxBQUNSO0FBakJELEFBbUJBOztBQUFPLDBCQUFBLEFBQTBCLE9BQU8sQUFDdEM7U0FBTyxnQkFBQTtXQUFRLGtCQUFVLEFBQ3ZCO1VBQU0sU0FBUyxLQUFmLEFBQWUsQUFBSyxBQUVwQjs7VUFBQSxBQUFJLFFBQVEsQUFDVjtnQkFBUSxPQUFSLEFBQWUsQUFDYjtBQUFBLEFBQUssQUFBYTtBQUNoQjtrQkFBSSxVQUFVLHFCQUFxQixPQUFuQyxBQUFjLEFBQTRCLEFBQzFDO2tCQUFJLFlBQUosQUFBZ0IsTUFBTSxBQUNwQjswQkFBVSxPQUFWLEFBQWlCLEFBQ2xCO0FBQ0Q7cUJBQUEsQUFBTyxLQUFQLEFBQVksZUFBWixBQUEyQixBQUMzQjtBQUNEO0FBQ0Q7QUFBQSxBQUFLLEFBQW9CO0FBQ3ZCO3FCQUFBLEFBQU8sS0FBUCxBQUFZLGdCQUFnQixPQUE1QixBQUFtQyxBQUNuQztBQUNEO0FBQ0Q7QUFBQSxBQUFLLEFBQ0g7Z0JBQU0sT0FBTyxNQUFBLEFBQU0sV0FBTixBQUFpQixRQUE5QixBQUFzQyxBQUN0QzttQkFBQSxBQUFPLEtBQVAsQUFBWSxjQUFaLEFBQTBCLEFBQzFCO0FBQ0Y7QUFBQSxBQUFLLEFBQ0g7bUJBQUEsQUFBTyxLQUFQLEFBQVksV0FBVyxPQUF2QixBQUE4QixBQUM5QjtBQUNGO0FBQ0U7QUFyQkosQUF1QkQ7O0FBRUQ7O2FBQUEsQUFBTyxBQUNSO0FBOUJNO0FBQVAsQUErQkQ7QUFDRCIsImZpbGUiOiJzb2NrZXRNaWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NaXRjaGVsbFMvTGlicmFyeS9Nb2JpbGUgRG9jdW1lbnRzL2NvbX5hcHBsZX5DbG91ZERvY3MvUk1JVC9TZW0yL0Nsb3VkIENvbXB1dGluZy9Bc3MyL1Nwb3RpZnkgcHJhY3Rpc2UvYy1tYXN0ZXIifQ==