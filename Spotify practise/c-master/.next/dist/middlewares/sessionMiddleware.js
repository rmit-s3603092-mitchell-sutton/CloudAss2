'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _ActionTypes = require('../constants/ActionTypes');

var _sessionActions = require('../actions/sessionActions');

var _app = require('../config/app');

var Config = _interopRequireWildcard(_app);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SPOTIFY_API_BASE = 'https://api.spotify.com/v1';

var getCurrentUser = function getCurrentUser() {
  return function (dispatch, getState) {
    return (0, _isomorphicUnfetch2.default)(SPOTIFY_API_BASE + '/me', {
      headers: {
        Authorization: 'Bearer ' + getState().session.access_token
      }
    }).then(function (res) {
      return res.json();
    }).then(function (res) {
      dispatch((0, _sessionActions.updateCurrentUser)(res));
    });
  };
};

var updateToken = function updateToken() {
  return function (dispatch, getState) {
    return (0, _isomorphicUnfetch2.default)(Config.HOST + '/auth/token', {
      method: 'POST',
      body: (0, _stringify2.default)({
        refresh_token: getState().session.refresh_token
      }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(function (res) {
      return res.json();
    }).then(function (res) {
      console.log(res);
      dispatch((0, _sessionActions.updateTokenSuccess)(res.access_token));
    });
  };
};

// todo: set a timer, both client-side and server-side

exports.default = function (store) {
  return function (next) {
    return function (action) {
      var result = next(action);
      switch (action.type) {
        case _ActionTypes.LOAD:
          {
            var session = store.getState().session;
            var expiresIn = session.expires_in;
            var needsToUpdate = !expiresIn || expiresIn < Date.now() - 10 * 60 * 1000;
            if (needsToUpdate) {
              console.log('sessionMiddleware > needs to update access token');
              var refreshToken = session.refresh_token;
              if (refreshToken) {
                console.log('sessionMiddleware > using refresh token');
                store.dispatch(updateToken()).then(function () {
                  return store.dispatch(getCurrentUser());
                }).then(function () {
                  store.dispatch((0, _sessionActions.loginSuccess)());
                });
              }
            } else {
              console.log('sessionMiddleware > no need to update access token');
              store.dispatch(getCurrentUser()).then(function () {
                store.dispatch((0, _sessionActions.loginSuccess)());
              });
            }
            break;
          }
        case _ActionTypes.LOGIN:
          {
            var getLoginURL = function getLoginURL(scopes) {
              return Config.HOST + '/auth/login?scope=' + encodeURIComponent(scopes.join(' '));
            };

            var width = 450,
                height = 730,
                left = window.screen.width / 2 - width / 2,
                top = window.screen.height / 2 - height / 2;

            var messageFn = function messageFn(event) {
              try {
                var hash = JSON.parse(event.data);
                if (hash.type === 'access_token') {
                  window.removeEventListener('message', messageFn, false);
                  var accessToken = hash.access_token;
                  var _expiresIn = hash.expires_in;
                  if (accessToken === '') {
                    // todo: implement login error
                  } else {
                    var _refreshToken = hash.refresh_token;
                    localStorage.setItem('refreshToken', _refreshToken);
                    localStorage.setItem('accessToken', accessToken);
                    localStorage.setItem('expiresIn', Date.now() + _expiresIn * 1000);
                    store.dispatch((0, _sessionActions.updateTokenSuccess)(accessToken));
                    store.dispatch(getCurrentUser()).then(function () {
                      return store.dispatch((0, _sessionActions.loginSuccess)());
                    });
                  }
                }
              } catch (e) {
                // do nothing
                console.error(e);
              }
            };
            window.addEventListener('message', messageFn, false);

            var url = getLoginURL(['user-read-playback-state', 'user-modify-playback-state']);
            window.open(url, 'Spotify', 'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left);

            break;
          }
        default:
          break;
      }
      return result;
    };
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pZGRsZXdhcmVzL3Nlc3Npb25NaWRkbGV3YXJlLmpzIl0sIm5hbWVzIjpbImZldGNoIiwiTE9BRCIsIkxPR0lOIiwibG9naW5TdWNjZXNzIiwidXBkYXRlQ3VycmVudFVzZXIiLCJ1cGRhdGVUb2tlblN1Y2Nlc3MiLCJDb25maWciLCJTUE9USUZZX0FQSV9CQVNFIiwiZ2V0Q3VycmVudFVzZXIiLCJkaXNwYXRjaCIsImdldFN0YXRlIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJzZXNzaW9uIiwiYWNjZXNzX3Rva2VuIiwidGhlbiIsInJlcyIsImpzb24iLCJ1cGRhdGVUb2tlbiIsIkhPU1QiLCJtZXRob2QiLCJib2R5IiwicmVmcmVzaF90b2tlbiIsIkhlYWRlcnMiLCJjb25zb2xlIiwibG9nIiwicmVzdWx0IiwibmV4dCIsImFjdGlvbiIsInR5cGUiLCJzdG9yZSIsImV4cGlyZXNJbiIsImV4cGlyZXNfaW4iLCJuZWVkc1RvVXBkYXRlIiwiRGF0ZSIsIm5vdyIsInJlZnJlc2hUb2tlbiIsImdldExvZ2luVVJMIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2NvcGVzIiwiam9pbiIsIndpZHRoIiwiaGVpZ2h0IiwibGVmdCIsIndpbmRvdyIsInNjcmVlbiIsInRvcCIsIm1lc3NhZ2VGbiIsImhhc2giLCJKU09OIiwicGFyc2UiLCJldmVudCIsImRhdGEiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWNjZXNzVG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZSIsImVycm9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsInVybCIsIm9wZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBRVAsQUFBUyxBQUFNLEFBQWE7O0FBQzVCLEFBQVMsQUFBYyxBQUFtQixBQUEwQjs7QUFFcEUsQUFBTzs7SUFBUCxBQUFZLEFBQVk7Ozs7OztBQUV4QixJQUFNLG1CQUFOLEFBQXlCOztBQUV6QixJQUFNLGlCQUFpQixTQUFqQixBQUFpQixp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LEFBQ2pEO3NCQUFNLGNBQWMsS0FBcEIsQUFBeUIsQUFDekI7c0JBQU0sYUFBWSxLQUFsQixBQUF1QixBQUN2QjtzQkFBSSxnQkFBSixBQUFvQixJQUFJLEFBQ3RCO0FBQ0Q7QUFGRCx5QkFFTyxBQUNMO3dCQUFNLGdCQUFlLEtBQXJCLEFBQTBCLEFBQzFCO2lDQUFBLEFBQWEsUUFBYixBQUFxQixnQkFBckIsQUFBcUMsQUFDckM7aUNBQUEsQUFBYSxRQUFiLEFBQXFCLGVBQXJCLEFBQW9DLEFBQ3BDO2lDQUFBLEFBQWEsUUFBYixBQUFxQixhQUFhLEtBQUEsQUFBSyxRQUFRLGFBQS9DLEFBQTJELEFBQzNEOzBCQUFBLEFBQU0sU0FBUyx3Q0FBZixBQUFlLEFBQW1CLEFBQ2xDOzBCQUFBLEFBQU0sU0FBTixBQUFlLGtCQUFmLEFBQWlDLEtBQUssWUFBQTs2QkFBTSxNQUFBLEFBQU0sU0FBWixBQUFNLEFBQWU7QUFBM0QsQUFDRDtBQUNGO0FBQ0Y7QUFqQkQsZ0JBaUJFLE9BQUEsQUFBTyxHQUFHLEFBQ1Y7QUFDQTt3QkFBQSxBQUFRLE1BQVIsQUFBYyxBQUNmO0FBQ0Y7QUF0QkQsQUF1QkE7bUJBQUEsQUFBTyxpQkFBUCxBQUF3QixXQUF4QixBQUFtQyxXQUFuQyxBQUE4QyxBQUU5Qzs7Z0JBQU0sTUFBTSxZQUFZLENBQUEsQUFBQyw0QkFBekIsQUFBWSxBQUFZLEFBQTZCLEFBQ3JEO21CQUFBLEFBQU8sS0FBUCxBQUNFLEtBREYsQUFFRSxXQUNBLHdFQUFBLEFBQ0UsUUFERixBQUVFLGNBRkYsQUFHRSxTQUhGLEFBSUUsV0FKRixBQUtFLE1BTEYsQUFNRSxZQVRKLEFBVUksQUFHSjs7QUFDRDtBQUNEO0FBQ0U7QUEvRUosQUFpRkE7O2FBQUEsQUFBTyxBQUNSO0FBcEZ1QjtBQUFUO0FBQWYiLCJmaWxlIjoic2Vzc2lvbk1pZGRsZXdhcmUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01pdGNoZWxsUy9MaWJyYXJ5L01vYmlsZSBEb2N1bWVudHMvY29tfmFwcGxlfkNsb3VkRG9jcy9STUlUL1NlbTIvQ2xvdWQgQ29tcHV0aW5nL0FzczIvU3BvdGlmeSBwcmFjdGlzZS9jLW1hc3RlciJ9