'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDevices = exports.getIsFetching = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _ActionTypes = require('../constants/ActionTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  isFetching: false,
  data: []
};

exports.default = function (state, action) {
  switch (action.type) {
    case _ActionTypes.FETCH_AVAILABLE_DEVICES:
      return (0, _extends3.default)({}, state, {
        isFetching: true
      });
    case _ActionTypes.FETCH_AVAILABLE_DEVICES_SUCCESS:
      return (0, _extends3.default)({}, state, {
        isFetching: false,
        data: action.list
      });
    case _ActionTypes.FETCH_AVAILABLE_DEVICES_ERROR:
      return initialState;
    default:
      return state ? state : initialState;
  }
};

var getIsFetching = exports.getIsFetching = function getIsFetching(state) {
  return state.isFetching;
};

var getDevices = exports.getDevices = function getDevices(state) {
  return state.data;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzL2RldmljZXNSZWR1Y2VyLmpzIl0sIm5hbWVzIjpbIkZFVENIX0FWQUlMQUJMRV9ERVZJQ0VTIiwiRkVUQ0hfQVZBSUxBQkxFX0RFVklDRVNfRVJST1IiLCJGRVRDSF9BVkFJTEFCTEVfREVWSUNFU19TVUNDRVNTIiwiaW5pdGlhbFN0YXRlIiwiaXNGZXRjaGluZyIsImRhdGEiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJsaXN0IiwiZ2V0SXNGZXRjaGluZyIsImdldERldmljZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsQUFDRSxBQUNBLEFBQ0EsQUFDSzs7OztBQUVQLElBQU07Y0FBZSxBQUNQLEFBQ1o7UUFGRixBQUFxQixBQUViLEFBR1I7QUFMcUIsQUFDbkI7O2tCQUlhLFVBQUEsQUFBQyxPQUFELEFBQVEsUUFBVyxBQUNoQztVQUFRLE9BQVIsQUFBZSxBQUNiO0FBQUEsQUFBSyxBQUNIO3dDQUFBLEFBQ0s7b0JBREwsQUFFYyxBQUVoQjtBQUZJO0FBRUosQUFBSyxBQUNIO3dDQUFBLEFBQ0s7b0JBREwsQUFFYyxBQUNaO2NBQU0sT0FIUixBQUdlLEFBRWpCO0FBSEk7QUFHSixBQUFLLEFBQ0g7YUFBQSxBQUFPLEFBQ1Q7QUFDRTthQUFPLFFBQUEsQUFBUSxRQWZuQixBQWVJLEFBQXVCLEFBRTVCOztBQWxCRCxBQW9CQTs7QUFBTyxJQUFNLHdDQUFnQixTQUFoQixBQUFnQixxQkFBUyxBQUNwQztTQUFPLE1BQVAsQUFBYSxBQUNkO0FBRk0sQUFJUDs7QUFBTyxJQUFNLGtDQUFhLFNBQWIsQUFBYSxrQkFBUyxBQUNqQztTQUFPLE1BQVAsQUFBYSxBQUNkO0FBRk0iLCJmaWxlIjoiZGV2aWNlc1JlZHVjZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01pdGNoZWxsUy9MaWJyYXJ5L01vYmlsZSBEb2N1bWVudHMvY29tfmFwcGxlfkNsb3VkRG9jcy9STUlUL1NlbTIvQ2xvdWQgQ29tcHV0aW5nL0FzczIvU3BvdGlmeSBwcmFjdGlzZS9jLW1hc3RlciJ9