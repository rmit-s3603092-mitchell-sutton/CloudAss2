'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCurrentUser = exports.updateTokenSuccess = exports.updateToken = exports.loginFailure = exports.loginSuccess = exports.login = exports.load = undefined;

var _ActionTypes = require('../constants/ActionTypes');

var types = _interopRequireWildcard(_ActionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var load = exports.load = function load() {
  return { type: types.LOAD };
};
var login = exports.login = function login() {
  return { type: types.LOGIN };
};
var loginSuccess = exports.loginSuccess = function loginSuccess() {
  return {
    type: types.LOGIN_SUCCESS
  };
};
var loginFailure = exports.loginFailure = function loginFailure(refresh_token) {
  return {
    type: types.LOGIN_FAILURE,
    refresh_token: refresh_token
  };
};
var updateToken = exports.updateToken = function updateToken(refreshToken) {
  return {
    type: types.UPDATE_TOKEN,
    refreshToken: refreshToken
  };
};
var updateTokenSuccess = exports.updateTokenSuccess = function updateTokenSuccess(access_token) {
  return {
    type: types.UPDATE_TOKEN_SUCCESS,
    access_token: access_token
  };
};
var updateCurrentUser = exports.updateCurrentUser = function updateCurrentUser(user) {
  return {
    type: types.UPDATE_CURRENT_USER,
    user: user
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnMvc2Vzc2lvbkFjdGlvbnMuanMiXSwibmFtZXMiOlsidHlwZXMiLCJsb2FkIiwidHlwZSIsIkxPQUQiLCJsb2dpbiIsIkxPR0lOIiwibG9naW5TdWNjZXNzIiwiTE9HSU5fU1VDQ0VTUyIsImxvZ2luRmFpbHVyZSIsIkxPR0lOX0ZBSUxVUkUiLCJyZWZyZXNoX3Rva2VuIiwidXBkYXRlVG9rZW4iLCJVUERBVEVfVE9LRU4iLCJyZWZyZXNoVG9rZW4iLCJ1cGRhdGVUb2tlblN1Y2Nlc3MiLCJVUERBVEVfVE9LRU5fU1VDQ0VTUyIsImFjY2Vzc190b2tlbiIsInVwZGF0ZUN1cnJlbnRVc2VyIiwiVVBEQVRFX0NVUlJFTlRfVVNFUiIsInVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxBQUFPOztJQUFQLEFBQVksQUFBVyxBQUV2Qjs7OztBQUFPLElBQU0sc0JBQU8sU0FBUCxBQUFPLE9BQUE7U0FBTyxFQUFFLE1BQU0sTUFBZixBQUFPLEFBQWM7QUFBbEMsQUFDUDtBQUFPLElBQU0sd0JBQVEsU0FBUixBQUFRLFFBQUE7U0FBTyxFQUFFLE1BQU0sTUFBZixBQUFPLEFBQWM7QUFBbkMsQUFDUDtBQUFPLElBQU0sc0NBQWUsU0FBZixBQUFlLGVBQUE7O1VBQ3BCLE1BRG9CLEFBQU8sQUFDckI7QUFEcUIsQUFDakM7QUFESyxBQUdQO0FBQU8sSUFBTSxzQ0FBZSxTQUFmLEFBQWUsNEJBQUE7O1VBQ3BCLE1BRHNDLEFBQ2hDLEFBQ1o7bUJBRjBCLEFBQWtCO0FBQUEsQUFDNUM7QUFESyxBQUlQO0FBQU8sSUFBTSxvQ0FBYyxTQUFkLEFBQWMsMEJBQUE7O1VBQ25CLE1BRG9DLEFBQzlCLEFBQ1o7a0JBRnlCLEFBQWlCO0FBQUEsQUFDMUM7QUFESyxBQUlQO0FBQU8sSUFBTSxrREFBcUIsU0FBckIsQUFBcUIsaUNBQUE7O1VBQzFCLE1BRDJDLEFBQ3JDLEFBQ1o7a0JBRmdDLEFBQWlCO0FBQUEsQUFDakQ7QUFESyxBQUlQO0FBQU8sSUFBTSxnREFBb0IsU0FBcEIsQUFBb0Isd0JBQUE7O1VBQ3pCLE1BRGtDLEFBQzVCLEFBQ1o7VUFGK0IsQUFBUztBQUFBLEFBQ3hDO0FBREsiLCJmaWxlIjoic2Vzc2lvbkFjdGlvbnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01pdGNoZWxsUy9MaWJyYXJ5L01vYmlsZSBEb2N1bWVudHMvY29tfmFwcGxlfkNsb3VkRG9jcy9STUlUL1NlbTIvQ2xvdWQgQ29tcHV0aW5nL0FzczIvU3BvdGlmeSBwcmFjdGlzZS9jLW1hc3RlciJ9