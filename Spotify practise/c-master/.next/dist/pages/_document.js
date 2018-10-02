'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _document = require('next/dist/server/document.js');

var _document2 = _interopRequireDefault(_document);

var _server = require('styled-jsx/server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/MitchellS/Library/Mobile Documents/com~apple~CloudDocs/RMIT/Sem2/Cloud Computing/Ass2/Spotify practise/c-master/pages/_document.js?entry';


// The document (which is SSR-only) needs to be customized to expose the locale
// data for the user's locale for React Intl to work in the browser.

var IntlDocument = function (_Document) {
  (0, _inherits3.default)(IntlDocument, _Document);

  function IntlDocument() {
    (0, _classCallCheck3.default)(this, IntlDocument);

    return (0, _possibleConstructorReturn3.default)(this, (IntlDocument.__proto__ || (0, _getPrototypeOf2.default)(IntlDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(IntlDocument, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('html', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, 'C - Collaborative listening on Spotify'), _react2.default.createElement('link', { rel: 'shortcut icon', href: '/static/c-icon-128.png', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width', __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), _react2.default.createElement('style', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, 'body { margin: 0 } /* custom! */')), _react2.default.createElement('body', { className: 'custom_class', __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, this.props.customValue, _react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), _react2.default.createElement('script', {
        dangerouslySetInnerHTML: {
          __html: this.props.localeDataScript
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), _react2.default.createElement('script', {
        dangerouslySetInnerHTML: {
          __html: "(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;e=o.createElement(i);r=o.getElementsByTagName(i)[0];e.src='//www.google-analytics.com/analytics.js';r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));ga('create','UA-39254352-1');ga('send','pageview');"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      })));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(context) {
        var props, _context$req, locale, localeDataScript, _context$renderPage, html, head, errorHtml, chunks, styles;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _get3.default)(IntlDocument.__proto__ || (0, _getPrototypeOf2.default)(IntlDocument), 'getInitialProps', this).call(this, context);

              case 2:
                props = _context.sent;
                _context$req = context.req, locale = _context$req.locale, localeDataScript = _context$req.localeDataScript;
                _context$renderPage = context.renderPage(), html = _context$renderPage.html, head = _context$renderPage.head, errorHtml = _context$renderPage.errorHtml, chunks = _context$renderPage.chunks;
                styles = (0, _server2.default)();
                return _context.abrupt('return', { html: html, head: head, errorHtml: errorHtml, chunks: chunks, styles: styles, locale: locale, localeDataScript: localeDataScript });

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return IntlDocument;
}(_document2.default);

exports.default = IntlDocument;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19kb2N1bWVudC5qcyJdLCJuYW1lcyI6WyJEb2N1bWVudCIsIkhlYWQiLCJNYWluIiwiTmV4dFNjcmlwdCIsImZsdXNoIiwiSW50bERvY3VtZW50IiwicHJvcHMiLCJjdXN0b21WYWx1ZSIsIl9faHRtbCIsImxvY2FsZURhdGFTY3JpcHQiLCJjb250ZXh0IiwicmVxIiwibG9jYWxlIiwicmVuZGVyUGFnZSIsImh0bWwiLCJoZWFkIiwiZXJyb3JIdG1sIiwiY2h1bmtzIiwic3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVksQUFBTSxBQUFNOzs7O0FBQy9CLEFBQU87Ozs7Ozs7OztBQUVQO0FBQ0E7O0lBQ3FCLEE7Ozs7Ozs7Ozs7OzZCQVNWLEFBQ1A7NkJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsbUZBQU0sS0FBTixBQUFVLGlCQUFnQixNQUExQixBQUErQjtvQkFBL0I7c0JBRkYsQUFFRSxBQUNBO0FBREE7a0RBQ00sTUFBTixBQUFXLFlBQVcsU0FBdEIsQUFBOEI7b0JBQTlCO3NCQUhGLEFBR0UsQUFDQTtBQURBOzBCQUNBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUxKLEFBQ0UsQUFJRSxBQUVGLHNEQUFBLGNBQUEsVUFBTSxXQUFOLEFBQWdCO29CQUFoQjtzQkFBQSxBQUNHO0FBREg7Y0FDRyxBQUFLLE1BRFIsQUFDYyxBQUNaLDZCQUFBLEFBQUM7O29CQUFEO3NCQUZGLEFBRUUsQUFDQTtBQURBO0FBQUE7O2tCQUdZLEtBQUEsQUFBSyxNQUZqQixBQUMyQixBQUNKO0FBREksQUFDdkI7O29CQUZKO3NCQUhGLEFBR0UsQUFLQTtBQUxBO0FBQ0UsMEJBSUYsQUFBQzs7b0JBQUQ7c0JBUkYsQUFRRSxBQUNBO0FBREE7QUFBQTs7a0JBQ0EsQUFDMkIsQUFFckI7QUFGcUIsQUFDdkI7O29CQUZKO3NCQWpCTixBQUNFLEFBT0UsQUFTRSxBQVNQO0FBVE87QUFDRTs7Ozs7MkcsQUEzQm1COzs7Ozs7OztxSixBQUNlOzttQkFBcEM7QTsrQkFDd0MsQSxRQUF0QyxBLEtBQU8sQSxzQixBQUFBLFFBQVEsQSxnQ0FBQSxBO3NDQUNtQixRLEFBQUEsQUFBUSxjLEFBQTFDLDJCLEFBQUEsTSxBQUFNLDJCLEFBQUEsTUFBTSxBLGdDLEFBQUEsVyxBQUFXLDZCLEFBQUEsQUFDekI7QSx5QixBQUFTO2lEQUNSLEVBQUUsTUFBRixNQUFRLE1BQVIsTUFBYyxXQUFkLFdBQXlCLFFBQXpCLFFBQWlDLFFBQWpDLFFBQXlDLFFBQXpDLFFBQWlELGtCLEFBQWpEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTitCLEE7O2tCQUFyQixBIiwiZmlsZSI6Il9kb2N1bWVudC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWl0Y2hlbGxTL0xpYnJhcnkvTW9iaWxlIERvY3VtZW50cy9jb21+YXBwbGV+Q2xvdWREb2NzL1JNSVQvU2VtMi9DbG91ZCBDb21wdXRpbmcvQXNzMi9TcG90aWZ5IHByYWN0aXNlL2MtbWFzdGVyIn0=