'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchUsers = exports.updateUsers = undefined;

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _app = require('../config/app');

var _app2 = _interopRequireDefault(_app);

var _ActionTypes = require('../constants/ActionTypes');

var types = _interopRequireWildcard(_ActionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var updateUsers = exports.updateUsers = function updateUsers(users) {
  return { type: types.UPDATE_USERS, data: users };
};

var fetchUsers = exports.fetchUsers = function fetchUsers() {
  return function (dispatch) {
    return (0, _isomorphicUnfetch2.default)(_app2.default.HOST + '/api/users').then(function (res) {
      return res.json();
    }).then(function (res) {
      return dispatch(updateUsers(res));
    });
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnMvdXNlcnNBY3Rpb25zLmpzIl0sIm5hbWVzIjpbImZldGNoIiwiQ29uZmlnIiwidHlwZXMiLCJ1cGRhdGVVc2VycyIsInR5cGUiLCJVUERBVEVfVVNFUlMiLCJkYXRhIiwidXNlcnMiLCJmZXRjaFVzZXJzIiwiSE9TVCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBRVAsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87O0lBQVAsQUFBWSxBQUFXLEFBRXZCOzs7Ozs7QUFBTyxJQUFNLG9DQUFjLFNBQWQsQUFBYyxtQkFBQTtTQUFVLEVBQUUsTUFBTSxNQUFSLEFBQWMsY0FBYyxNQUF0QyxBQUFVLEFBQWtDO0FBQWhFLEFBRVA7O0FBQU8sSUFBTSxrQ0FBYSxTQUFiLEFBQWEsYUFBQTtTQUFNLG9CQUFBOzRDQUNyQixjQUFULEFBQWdCLHFCQUFoQixBQUFrQyxLQUFLLGVBQUE7YUFBTyxJQUFQLEFBQU8sQUFBSTtBQUFsRCxLQUFBLEVBQUEsQUFBMEQsS0FBSyxlQUFBO2FBQU8sU0FBUyxZQUFoQixBQUFPLEFBQVMsQUFBWTtBQUQ3RCxBQUM5QjtBQUR3QjtBQUFuQiIsImZpbGUiOiJ1c2Vyc0FjdGlvbnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01pdGNoZWxsUy9MaWJyYXJ5L01vYmlsZSBEb2N1bWVudHMvY29tfmFwcGxlfkNsb3VkRG9jcy9STUlUL1NlbTIvQ2xvdWQgQ29tcHV0aW5nL0FzczIvU3BvdGlmeSBwcmFjdGlzZS9jLW1hc3RlciJ9