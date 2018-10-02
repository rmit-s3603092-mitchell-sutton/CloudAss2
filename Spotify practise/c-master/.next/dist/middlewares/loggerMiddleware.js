"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (store) {
  return function (next) {
    return function (action) {
      var result = next(action);
      console.log(action);
    };
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pZGRsZXdhcmVzL2xvZ2dlck1pZGRsZXdhcmUuanMiXSwibmFtZXMiOlsicmVzdWx0IiwibmV4dCIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7OztrQkFBZSxpQkFBQTtTQUFTLGdCQUFBO1dBQVEsa0JBQVUsQUFDeEM7VUFBTSxTQUFTLEtBQUssQUFBTCxBQUFmLEFBQ0E7Y0FBUSxBQUFSLElBQVksQUFBWixBQUNEO0FBSHVCO0FBQVQ7QUFBZiIsImZpbGUiOiJsb2dnZXJNaWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NaXRjaGVsbFMvTGlicmFyeS9Nb2JpbGUgRG9jdW1lbnRzL2NvbX5hcHBsZX5DbG91ZERvY3MvUk1JVC9TZW0yL0Nsb3VkIENvbXB1dGluZy9Bc3MyL1Nwb3RpZnkgcHJhY3Rpc2UvYy1tYXN0ZXIifQ==