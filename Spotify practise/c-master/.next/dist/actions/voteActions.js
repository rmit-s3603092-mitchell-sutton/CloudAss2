'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.voteUpSuccess = exports.voteUp = undefined;

var _ActionTypes = require('../constants/ActionTypes');

var types = _interopRequireWildcard(_ActionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var voteUp = exports.voteUp = function voteUp(id) {
  return {
    type: types.VOTE_UP,
    id: id
  };
};

var voteUpSuccess = exports.voteUpSuccess = function voteUpSuccess() {
  return {
    type: types.VOTE_UP_SUCCESS
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnMvdm90ZUFjdGlvbnMuanMiXSwibmFtZXMiOlsidHlwZXMiLCJ2b3RlVXAiLCJ0eXBlIiwiVk9URV9VUCIsImlkIiwidm90ZVVwU3VjY2VzcyIsIlZPVEVfVVBfU1VDQ0VTUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLEFBQU87O0lBQVAsQUFBWSxBQUFXLEFBRXZCOzs7O0FBQU8sSUFBTSwwQkFBUyxTQUFULEFBQVMsV0FBQTs7VUFDZCxNQURxQixBQUNmLEFBQ1o7UUFGb0IsQUFBTztBQUFBLEFBQzNCO0FBREssQUFLUDs7QUFBTyxJQUFNLHdDQUFnQixTQUFoQixBQUFnQixnQkFBQTs7VUFDckIsTUFEcUIsQUFBTyxBQUN0QjtBQURzQixBQUNsQztBQURLIiwiZmlsZSI6InZvdGVBY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NaXRjaGVsbFMvTGlicmFyeS9Nb2JpbGUgRG9jdW1lbnRzL2NvbX5hcHBsZX5DbG91ZERvY3MvUk1JVC9TZW0yL0Nsb3VkIENvbXB1dGluZy9Bc3MyL1Nwb3RpZnkgcHJhY3Rpc2UvYy1tYXN0ZXIifQ==