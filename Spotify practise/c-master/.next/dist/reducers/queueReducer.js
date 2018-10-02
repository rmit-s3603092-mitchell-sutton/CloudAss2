'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ActionTypes = require('../constants/ActionTypes');

var initialState = [];

exports.default = function (state, action) {
  switch (action.type) {
    case _ActionTypes.UPDATE_QUEUE:
      return action.data;
    default:
      return state ? state : initialState;
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzL3F1ZXVlUmVkdWNlci5qcyJdLCJuYW1lcyI6WyJVUERBVEVfUVVFVUUiLCJpbml0aWFsU3RhdGUiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFTLEFBQVQsQUFBNkIsQUFBN0I7O0FBRUEsSUFBTSxlQUFlLEFBQXJCLEFBRUE7O2tCQUFlLFVBQUMsQUFBRCxPQUFRLEFBQVIsUUFBbUIsQUFDaEM7VUFBUSxPQUFPLEFBQWYsQUFDRTtBQUFLLEFBQUwsQUFDRTthQUFPLE9BQU8sQUFBZCxBQUNGO0FBQ0U7YUFBTyxRQUFRLEFBQVIsUUFBZ0IsQUFBdkIsQUFKSixBQU1EOztBQVBEIiwiZmlsZSI6InF1ZXVlUmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWl0Y2hlbGxTL0xpYnJhcnkvTW9iaWxlIERvY3VtZW50cy9jb21+YXBwbGV+Q2xvdWREb2NzL1JNSVQvU2VtMi9DbG91ZCBDb21wdXRpbmcvQXNzMi9TcG90aWZ5IHByYWN0aXNlL2MtbWFzdGVyIn0=