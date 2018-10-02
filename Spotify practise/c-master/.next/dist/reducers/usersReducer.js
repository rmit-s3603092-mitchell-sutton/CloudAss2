'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ActionTypes = require('../constants/ActionTypes');

var initialState = [{
  id: 'something',
  name: 'Adrian'
}, {
  id: 'something',
  name: 'Bea'
}, {
  id: 'something',
  name: 'Carlos'
}];

exports.default = function (state, action) {
  switch (action.type) {
    case _ActionTypes.UPDATE_USERS:
      return action.data;
    default:
      return state ? state : initialState;
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzL3VzZXJzUmVkdWNlci5qcyJdLCJuYW1lcyI6WyJVUERBVEVfVVNFUlMiLCJpbml0aWFsU3RhdGUiLCJpZCIsIm5hbWUiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFTLEFBQW9COztBQUU3QixJQUFNO01BQ0osQUFDTSxBQUNKO1FBSGlCLEFBQ25CLEFBRVE7QUFGUixBQUNFLENBRmlCO01BS25CLEFBQ00sQUFDSjtRQVBpQixBQUtuQixBQUVRO0FBRlIsQUFDRTtNQUdGLEFBQ00sQUFDSjtRQVhKLEFBQXFCLEFBU25CLEFBRVEsQUFJVjtBQU5FLEFBQ0U7O2tCQUtXLFVBQUEsQUFBQyxPQUFELEFBQVEsUUFBVyxBQUNoQztVQUFRLE9BQVIsQUFBZSxBQUNiO0FBQUEsQUFBSyxBQUNIO2FBQU8sT0FBUCxBQUFjLEFBQ2hCO0FBQ0U7YUFBTyxRQUFBLEFBQVEsUUFKbkIsQUFJSSxBQUF1QixBQUU1Qjs7QUFQRCIsImZpbGUiOiJ1c2Vyc1JlZHVjZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01pdGNoZWxsUy9MaWJyYXJ5L01vYmlsZSBEb2N1bWVudHMvY29tfmFwcGxlfkNsb3VkRG9jcy9STUlUL1NlbTIvQ2xvdWQgQ29tcHV0aW5nL0FzczIvU3BvdGlmeSBwcmFjdGlzZS9jLW1hc3RlciJ9