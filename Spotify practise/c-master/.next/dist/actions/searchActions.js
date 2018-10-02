'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchTrackSuccess = exports.fetchTrack = exports.searchTracksReset = exports.searchTracksSuccess = exports.searchTracks = undefined;

var _ActionTypes = require('../constants/ActionTypes');

var types = _interopRequireWildcard(_ActionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var searchTracks = exports.searchTracks = function searchTracks(query) {
  return { type: types.SEARCH_TRACKS, query: query };
};
var searchTracksSuccess = exports.searchTracksSuccess = function searchTracksSuccess(query, results) {
  return {
    type: types.SEARCH_TRACKS_SUCCESS,
    query: query,
    results: results
  };
};
var searchTracksReset = exports.searchTracksReset = function searchTracksReset() {
  return { type: types.SEARCH_TRACKS_RESET };
};
var fetchTrack = exports.fetchTrack = function fetchTrack(id) {
  return { type: types.FETCH_TRACK, id: id };
};
var fetchTrackSuccess = exports.fetchTrackSuccess = function fetchTrackSuccess(id, track) {
  return {
    type: types.FETCH_TRACK_SUCCESS,
    id: id
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnMvc2VhcmNoQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJ0eXBlcyIsInNlYXJjaFRyYWNrcyIsInR5cGUiLCJTRUFSQ0hfVFJBQ0tTIiwicXVlcnkiLCJzZWFyY2hUcmFja3NTdWNjZXNzIiwicmVzdWx0cyIsIlNFQVJDSF9UUkFDS1NfU1VDQ0VTUyIsInNlYXJjaFRyYWNrc1Jlc2V0IiwiU0VBUkNIX1RSQUNLU19SRVNFVCIsImZldGNoVHJhY2siLCJGRVRDSF9UUkFDSyIsImlkIiwiZmV0Y2hUcmFja1N1Y2Nlc3MiLCJ0cmFjayIsIkZFVENIX1RSQUNLX1NVQ0NFU1MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxBQUFPOztJQUFQLEFBQVksQUFBVyxBQUV2Qjs7OztBQUFPLElBQU0sc0NBQWUsU0FBZixBQUFlLG9CQUFBO1NBQVUsRUFBRSxNQUFNLE1BQVIsQUFBYyxlQUFlLE9BQXZDLEFBQVU7QUFBL0IsQUFDUDtBQUFPLElBQU0sb0RBQXNCLFNBQXRCLEFBQXNCLG9CQUFBLEFBQUMsT0FBRCxBQUFRLFNBQVI7O1VBQzNCLE1BRGdELEFBQzFDLEFBQ1o7V0FGc0QsQUFHdEQ7YUFIaUMsQUFBcUI7QUFBQSxBQUN0RDtBQURLLEFBS1A7QUFBTyxJQUFNLGdEQUFvQixTQUFwQixBQUFvQixvQkFBQTtTQUFPLEVBQUUsTUFBTSxNQUFmLEFBQU8sQUFBYztBQUEvQyxBQUNQO0FBQU8sSUFBTSxrQ0FBYSxTQUFiLEFBQWEsZUFBQTtTQUFPLEVBQUUsTUFBTSxNQUFSLEFBQWMsYUFBYSxJQUFsQyxBQUFPO0FBQTFCLEFBQ1A7QUFBTyxJQUFNLGdEQUFvQixTQUFwQixBQUFvQixrQkFBQSxBQUFDLElBQUQsQUFBSyxPQUFMOztVQUN6QixNQUR5QyxBQUNuQyxBQUNaO1FBRitCLEFBQWdCO0FBQUEsQUFDL0M7QUFESyIsImZpbGUiOiJzZWFyY2hBY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NaXRjaGVsbFMvTGlicmFyeS9Nb2JpbGUgRG9jdW1lbnRzL2NvbX5hcHBsZX5DbG91ZERvY3MvUk1JVC9TZW0yL0Nsb3VkIENvbXB1dGluZy9Bc3MyL1Nwb3RpZnkgcHJhY3Rpc2UvYy1tYXN0ZXIifQ==