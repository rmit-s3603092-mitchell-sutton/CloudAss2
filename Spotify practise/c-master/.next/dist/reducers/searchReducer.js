'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ActionTypes = require('../constants/ActionTypes');

var initialState = {};

exports.default = function (state, action) {
  switch (action.type) {
    case _ActionTypes.SEARCH_TRACKS:
      return { query: action.query };
    case _ActionTypes.SEARCH_TRACKS_SUCCESS:
      if (state.query === action.query) {
        return {
          query: action.query,
          results: action.results
        };
      } else {
        return state;
      }
    case _ActionTypes.SEARCH_TRACKS_RESET:
      return initialState;

    default:
      return state ? state : initialState;
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzL3NlYXJjaFJlZHVjZXIuanMiXSwibmFtZXMiOlsiU0VBUkNIX1RSQUNLUyIsIlNFQVJDSF9UUkFDS1NfU1VDQ0VTUyIsIlNFQVJDSF9UUkFDS1NfUkVTRVQiLCJpbml0aWFsU3RhdGUiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJxdWVyeSIsInJlc3VsdHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQVMsQUFBZSxBQUF1QixBQUEyQjs7QUFFMUUsSUFBTSxlQUFOLEFBQXFCLEFBRXJCOztrQkFBZSxVQUFBLEFBQUMsT0FBRCxBQUFRLFFBQVcsQUFDaEM7VUFBUSxPQUFSLEFBQWUsQUFDYjtBQUFBLEFBQUssQUFDSDthQUFPLEVBQUUsT0FBTyxPQUFoQixBQUFPLEFBQWdCLEFBQ3pCO0FBQUEsQUFBSyxBQUNIO1VBQUksTUFBQSxBQUFNLFVBQVUsT0FBcEIsQUFBMkIsT0FBTyxBQUNoQzs7aUJBQ1MsT0FERixBQUNTLEFBQ2Q7bUJBQVMsT0FGWCxBQUFPLEFBRVcsQUFFbkI7QUFKUSxBQUNMO0FBRkosYUFLTyxBQUNMO2VBQUEsQUFBTyxBQUNSO0FBQ0g7QUFBQSxBQUFLLEFBQ0g7YUFBQSxBQUFPLEFBRVQ7O0FBQ0U7YUFBTyxRQUFBLEFBQVEsUUFoQm5CLEFBZ0JJLEFBQXVCLEFBRTVCOztBQW5CRCIsImZpbGUiOiJzZWFyY2hSZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NaXRjaGVsbFMvTGlicmFyeS9Nb2JpbGUgRG9jdW1lbnRzL2NvbX5hcHBsZX5DbG91ZERvY3MvUk1JVC9TZW0yL0Nsb3VkIENvbXB1dGluZy9Bc3MyL1Nwb3RpZnkgcHJhY3Rpc2UvYy1tYXN0ZXIifQ==