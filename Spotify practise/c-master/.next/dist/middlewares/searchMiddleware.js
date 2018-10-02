'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _ActionTypes = require('../constants/ActionTypes');

var _searchActions = require('../actions/searchActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SPOTIFY_API_BASE = 'https://api.spotify.com/v1';

var searchTracks = function searchTracks(query) {
  return function (dispatch, getState) {
    var shouldAddWildcard = false;
    if (query.length > 1) {
      var words = query.split(' ');
      var lastWord = words[words.length - 1];
      if (/^[a-z0-9\s]+$/i.test(lastWord) && query.lastIndexOf('*') !== query.length - 1) {
        shouldAddWildcard = true;
      }
    }

    var wildcardQuery = '' + query + (shouldAddWildcard ? '*' : ''); // Trick to improve search results

    return (0, _isomorphicUnfetch2.default)(SPOTIFY_API_BASE + '/search?q=' + encodeURIComponent(wildcardQuery) + '&type=track&limit=10', {
      headers: {
        Authorization: 'Bearer ' + getState().session.access_token
      }
    }).then(function (res) {
      return res.json();
    }).then(function (res) {
      dispatch((0, _searchActions.searchTracksSuccess)(query, res.tracks.items));
    });
  };
};

exports.default = function (store) {
  return function (next) {
    return function (action) {
      var result = next(action);
      switch (action.type) {
        case _ActionTypes.SEARCH_TRACKS:
          {
            return store.dispatch(searchTracks(action.query));
            break;
          }
        default:
          break;
      }
      return result;
    };
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pZGRsZXdhcmVzL3NlYXJjaE1pZGRsZXdhcmUuanMiXSwibmFtZXMiOlsiZmV0Y2giLCJTRUFSQ0hfVFJBQ0tTIiwic2VhcmNoVHJhY2tzU3VjY2VzcyIsIlNQT1RJRllfQVBJX0JBU0UiLCJzZWFyY2hUcmFja3MiLCJkaXNwYXRjaCIsImdldFN0YXRlIiwic2hvdWxkQWRkV2lsZGNhcmQiLCJxdWVyeSIsImxlbmd0aCIsIndvcmRzIiwic3BsaXQiLCJsYXN0V29yZCIsInRlc3QiLCJsYXN0SW5kZXhPZiIsIndpbGRjYXJkUXVlcnkiLCJlbmNvZGVVUklDb21wb25lbnQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInNlc3Npb24iLCJhY2Nlc3NfdG9rZW4iLCJ0aGVuIiwicmVzIiwianNvbiIsInRyYWNrcyIsIml0ZW1zIiwicmVzdWx0IiwibmV4dCIsImFjdGlvbiIsInR5cGUiLCJzdG9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTzs7OztBQUVQLEFBQVMsQUFBcUI7O0FBQzlCLEFBQVMsQUFBMkI7Ozs7QUFFcEMsSUFBTSxtQkFBTixBQUF5Qjs7QUFFekIsSUFBTSxlQUFlLFNBQWYsQUFBZSxvQkFBQTtTQUFTLFVBQUEsQUFBQyxVQUFELEFBQVcsVUFBYSxBQUNwRDtRQUFJLG9CQUFKLEFBQXdCLEFBQ3hCO1FBQUksTUFBQSxBQUFNLFNBQVYsQUFBbUIsR0FBRyxBQUNwQjtVQUFNLFFBQVEsTUFBQSxBQUFNLE1BQXBCLEFBQWMsQUFBWSxBQUMxQjtVQUFNLFdBQVcsTUFBTSxNQUFBLEFBQU0sU0FBN0IsQUFBaUIsQUFBcUIsQUFDdEM7VUFBSSxpQkFBQSxBQUFpQixLQUFqQixBQUFzQixhQUFhLE1BQUEsQUFBTSxZQUFOLEFBQWtCLFNBQVMsTUFBQSxBQUFNLFNBQXhFLEFBQWlGLEdBQUcsQUFDbEY7NEJBQUEsQUFBb0IsQUFDckI7QUFDRjtBQUVEOztRQUFNLHFCQUFBLEFBQW1CLFNBQVEsb0JBQUEsQUFBb0IsTUFWRCxBQVVwRCxBQUFNLEFBQXFELEtBQU0sQUFFakU7OzRDQUFPLEFBQVMsa0NBQTZCLG1CQUF0QyxBQUFzQyxBQUFtQjs7dUJBRTdDLFlBQVksV0FBQSxBQUFXLFFBRm5DLEFBQStGLEFBQzNGLEFBQ3VDO0FBRHZDLEFBQ1A7QUFGa0csQUFDcEcsS0FESyxFQUFBLEFBS0osS0FBSyxlQUFBO2FBQU8sSUFBUCxBQUFPLEFBQUk7QUFMWixPQUFBLEFBTUosS0FBSyxlQUFPLEFBQ1g7ZUFBUyx3Q0FBQSxBQUFvQixPQUFPLElBQUEsQUFBSSxPQUF4QyxBQUFTLEFBQXNDLEFBQ2hEO0FBUkgsQUFBTyxBQVNSO0FBckJvQjtBQUFyQixBQXVCQTs7a0JBQWUsaUJBQUE7U0FBUyxnQkFBQTtXQUFRLGtCQUFVLEFBQ3hDO1VBQU0sU0FBUyxLQUFmLEFBQWUsQUFBSyxBQUNwQjtjQUFRLE9BQVIsQUFBZSxBQUNiO0FBQUEsQUFBSyxBQUFlO0FBQ2xCO21CQUFPLE1BQUEsQUFBTSxTQUFTLGFBQWEsT0FBbkMsQUFBTyxBQUFlLEFBQW9CLEFBQzFDO0FBQ0Q7QUFDRDtBQUNFO0FBTkosQUFRQTs7YUFBQSxBQUFPLEFBQ1I7QUFYdUI7QUFBVDtBQUFmIiwiZmlsZSI6InNlYXJjaE1pZGRsZXdhcmUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01pdGNoZWxsUy9MaWJyYXJ5L01vYmlsZSBEb2N1bWVudHMvY29tfmFwcGxlfkNsb3VkRG9jcy9STUlUL1NlbTIvQ2xvdWQgQ29tcHV0aW5nL0FzczIvU3BvdGlmeSBwcmFjdGlzZS9jLW1hc3RlciJ9