'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _ActionTypes = require('../constants/ActionTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  refresh_token: null, //'localStorage' in window && localStorage.getItem('refreshToken'),
  user: null
};

exports.default = function (state, action) {
  switch (action.type) {
    case _ActionTypes.LOAD:
      if (process.browser) {
        var refreshToken = localStorage.getItem('refreshToken');
        var accessToken = localStorage.getItem('accessToken');
        var expiresIn = localStorage.getItem('expiresIn');
        return (0, _assign2.default)({}, state, {
          access_token: accessToken,
          refresh_token: refreshToken,
          expires_in: expiresIn ? +expiresIn : null
        });
      } else {
        return state;
      }
    case _ActionTypes.UPDATE_TOKEN_SUCCESS:
      return (0, _assign2.default)({}, state, { access_token: action.access_token });
    case _ActionTypes.LOGIN_SUCCESS:
      if (action.refresh_token) {
        return (0, _assign2.default)({}, state, {
          refresh_token: action.refresh_token
        });
      }
      return state;
    case _ActionTypes.UPDATE_CURRENT_USER:
      return (0, _assign2.default)({}, state, { user: action.user });
    default:
      return state ? state : initialState;
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzL3Nlc3Npb25SZWR1Y2VyLmpzIl0sIm5hbWVzIjpbIkxPQUQiLCJMT0dJTl9TVUNDRVNTIiwiVVBEQVRFX1RPS0VOX1NVQ0NFU1MiLCJVUERBVEVfQ1VSUkVOVF9VU0VSIiwiaW5pdGlhbFN0YXRlIiwicmVmcmVzaF90b2tlbiIsInVzZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwcm9jZXNzIiwiYnJvd3NlciIsInJlZnJlc2hUb2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJhY2Nlc3NUb2tlbiIsImV4cGlyZXNJbiIsImFjY2Vzc190b2tlbiIsImV4cGlyZXNfaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFTLEFBQU0sQUFBZSxBQUFzQixBQUEyQjs7OztBQUUvRSxJQUFNO2lCQUFlLEFBQ0osTUFBTSxBQUNyQjtRQUZGLEFBQXFCLEFBRWIsQUFHUjtBQUxxQixBQUNuQjs7a0JBSWEsVUFBQSxBQUFDLE9BQUQsQUFBUSxRQUFXLEFBQ2hDO1VBQVEsT0FBUixBQUFlLEFBQ2I7QUFBQSxBQUFLLEFBQ0g7VUFBSSxRQUFKLEFBQVksU0FBUyxBQUNuQjtZQUFNLGVBQWUsYUFBQSxBQUFhLFFBQWxDLEFBQXFCLEFBQXFCLEFBQzFDO1lBQU0sY0FBYyxhQUFBLEFBQWEsUUFBakMsQUFBb0IsQUFBcUIsQUFDekM7WUFBTSxZQUFZLGFBQUEsQUFBYSxRQUEvQixBQUFrQixBQUFxQixBQUN2QztxQ0FBTyxBQUFjLElBQWQsQUFBa0I7d0JBQU8sQUFDaEIsQUFDZDt5QkFGOEIsQUFFZixBQUNmO3NCQUFZLFlBQVksQ0FBWixBQUFhLFlBSDNCLEFBQU8sQUFBeUIsQUFHTyxBQUV4QztBQUxpQyxBQUM5QixTQURLO0FBSlQsYUFTTyxBQUNMO2VBQUEsQUFBTyxBQUNSO0FBQ0g7QUFBQSxBQUFLLEFBQ0g7YUFBTyxzQkFBQSxBQUFjLElBQWQsQUFBa0IsT0FBTyxFQUFFLGNBQWMsT0FBaEQsQUFBTyxBQUF5QixBQUF1QixBQUN6RDtBQUFBLEFBQUssQUFDSDtVQUFJLE9BQUosQUFBVyxlQUFlLEFBQ3hCO3FDQUFPLEFBQWMsSUFBZCxBQUFrQjt5QkFDUixPQURqQixBQUFPLEFBQXlCLEFBQ1IsQUFFekI7QUFIaUMsQUFDOUIsU0FESztBQUlUO2FBQUEsQUFBTyxBQUNUO0FBQUEsQUFBSyxBQUNIO2FBQU8sc0JBQUEsQUFBYyxJQUFkLEFBQWtCLE9BQU8sRUFBRSxNQUFNLE9BQXhDLEFBQU8sQUFBeUIsQUFBZSxBQUNqRDtBQUNFO2FBQU8sUUFBQSxBQUFRLFFBMUJuQixBQTBCSSxBQUF1QixBQUU1Qjs7QUE3QkQiLCJmaWxlIjoic2Vzc2lvblJlZHVjZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01pdGNoZWxsUy9MaWJyYXJ5L01vYmlsZSBEb2N1bWVudHMvY29tfmFwcGxlfkNsb3VkRG9jcy9STUlUL1NlbTIvQ2xvdWQgQ29tcHV0aW5nL0FzczIvU3BvdGlmeSBwcmFjdGlzZS9jLW1hc3RlciJ9