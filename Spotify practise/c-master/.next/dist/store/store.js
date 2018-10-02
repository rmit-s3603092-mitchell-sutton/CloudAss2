'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = undefined;

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = require('../reducers');

var _sessionMiddleware = require('../middlewares/sessionMiddleware');

var _sessionMiddleware2 = _interopRequireDefault(_sessionMiddleware);

var _playbackMiddleware = require('../middlewares/playbackMiddleware');

var _playbackMiddleware2 = _interopRequireDefault(_playbackMiddleware);

var _devicesMiddleware = require('../middlewares/devicesMiddleware');

var _devicesMiddleware2 = _interopRequireDefault(_devicesMiddleware);

var _socketMiddleware = require('../middlewares/socketMiddleware');

var _socketMiddleware2 = _interopRequireDefault(_socketMiddleware);

var _loggerMiddleware = require('../middlewares/loggerMiddleware');

var _loggerMiddleware2 = _interopRequireDefault(_loggerMiddleware);

var _searchMiddleware = require('../middlewares/searchMiddleware');

var _searchMiddleware2 = _interopRequireDefault(_searchMiddleware);

var _sessionActions = require('../actions/sessionActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initStore = exports.initStore = function initStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var store = (0, _redux.createStore)((0, _reducers.reducers)(), initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default, _sessionMiddleware2.default, _socketMiddleware.socketMiddleware, _playbackMiddleware2.default, _devicesMiddleware2.default, _loggerMiddleware2.default, _searchMiddleware2.default));
  (0, _socketMiddleware2.default)(store);
  store.dispatch((0, _sessionActions.load)());
  return store;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlL3N0b3JlLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiY29tcG9zZSIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rIiwicmVkdWNlcnMiLCJzZXNzaW9uTWlkZGxld2FyZSIsInBsYXliYWNrTWlkZGxld2FyZSIsImRldmljZXNNaWRkbGV3YXJlIiwic29ja2V0TWlkZGxld2FyZSIsImxvZ2dlck1pZGRsZXdhcmUiLCJzb2NrZXRNaWRkbGV3YXJlRGVmYXVsdCIsInNlYXJjaE1pZGRsZXdhcmUiLCJsb2FkIiwiaW5pdFN0b3JlIiwiaW5pdGlhbFN0YXRlIiwic3RvcmUiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLEFBQVMsQUFBVCxBQUFzQixBQUF0QixBQUErQixBQUEvQjs7QUFDQSxBQUFPLEFBQVA7Ozs7QUFFQSxBQUFTLEFBQVQsQUFBeUIsQUFBekI7O0FBRUEsQUFBTyxBQUFQLEFBQThCLEFBQTlCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQStCLEFBQS9COzs7O0FBQ0EsQUFBTyxBQUFQLEFBQThCLEFBQTlCOzs7O0FBQ0EsQUFBUyxBQUFULEFBQWlDLEFBQWpDOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQTZCLEFBQTdCLEFBQ0EsQUFBTyxBQUFQLEFBQW9DLEFBQXBDOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQTZCLEFBQTdCOzs7O0FBRUEsQUFBUyxBQUFULEFBQXFCLEFBQXJCLEFBRUE7Ozs7QUFBTyxJQUFNLGdDQUFZLFNBQVosQUFBWSxZQUF1QjtNQUF0QixBQUFzQixtRkFBUCxBQUFPLEFBQzlDOztNQUFNLFFBQVEsd0JBQ1osQUFEWSwyQkFFWixBQUZZLGNBR1osQUFDRSxBQURGLEFBRUUsQUFGRixBQUdFLEFBSEYsQUFJRSxBQUpGLEFBS0UsQUFMRixBQU1FLEFBTkYsQUFPRSxBQVBGLEFBSFksQUFBZCxBQWFBO2tDQUF3QixBQUF4QixBQUNBO1FBQU0sQUFBTixTQUFlLEFBQWYsQUFDQTtTQUFPLEFBQVAsQUFDRDtBQWpCTSIsImZpbGUiOiJzdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWl0Y2hlbGxTL0xpYnJhcnkvTW9iaWxlIERvY3VtZW50cy9jb21+YXBwbGV+Q2xvdWREb2NzL1JNSVQvU2VtMi9DbG91ZCBDb21wdXRpbmcvQXNzMi9TcG90aWZ5IHByYWN0aXNlL2MtbWFzdGVyIn0=