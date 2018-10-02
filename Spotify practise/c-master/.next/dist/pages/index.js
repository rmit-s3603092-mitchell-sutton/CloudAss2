'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _MyLayout = require('../components/MyLayout.js');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _store = require('../store/store');

var _queueActions = require('../actions/queueActions');

var _usersActions = require('../actions/usersActions');

var _playbackActions = require('../actions/playbackActions');

var _Users = require('../components/Users');

var _Users2 = _interopRequireDefault(_Users);

var _Queue = require('../components/Queue');

var _Queue2 = _interopRequireDefault(_Queue);

var _AddToQueue = require('../components/AddToQueue');

var _AddToQueue2 = _interopRequireDefault(_AddToQueue);

var _NowPlaying = require('../components/NowPlaying');

var _NowPlaying2 = _interopRequireDefault(_NowPlaying);

var _Devices = require('../components/Devices');

var _Devices2 = _interopRequireDefault(_Devices);

var _PageWithIntl = require('../components/PageWithIntl');

var _PageWithIntl2 = _interopRequireDefault(_PageWithIntl);

var _reactIntl = require('react-intl');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/MitchellS/Library/Mobile Documents/com~apple~CloudDocs/RMIT/Sem2/Cloud Computing/Ass2/Spotify practise/c-master/pages/index.js?entry';


var Main = function (_React$Component) {
  (0, _inherits3.default)(Main, _React$Component);

  function Main() {
    (0, _classCallCheck3.default)(this, Main);

    return (0, _possibleConstructorReturn3.default)(this, (Main.__proto__ || (0, _getPrototypeOf2.default)(Main)).apply(this, arguments));
  }

  (0, _createClass3.default)(Main, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_MyLayout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, this.props.playing.track ? _react2.default.createElement(_NowPlaying2.default, {
        track: this.props.playing.track,
        user: this.props.playing.user,
        position: this.props.playing.position,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }) : null, _react2.default.createElement('div', {
        className: 'jsx-3454113804' + ' ' + 'app',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: '3454113804',
        css: '.app.jsx-3454113804{margin:20px;padding:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9DYSxBQUc2QixZQUNDLGFBQ2YiLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL01pdGNoZWxsUy9MaWJyYXJ5L01vYmlsZSBEb2N1bWVudHMvY29tfmFwcGxlfkNsb3VkRG9jcy9STUlUL1NlbTIvQ2xvdWQgQ29tcHV0aW5nL0FzczIvU3BvdGlmeSBwcmFjdGlzZS9jLW1hc3RlciIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0LmpzJztcbmltcG9ydCB7IGluaXRTdG9yZSB9IGZyb20gJy4uL3N0b3JlL3N0b3JlJztcbmltcG9ydCB7IGZldGNoUXVldWUgfSBmcm9tICcuLi9hY3Rpb25zL3F1ZXVlQWN0aW9ucyc7XG5pbXBvcnQgeyBmZXRjaFVzZXJzIH0gZnJvbSAnLi4vYWN0aW9ucy91c2Vyc0FjdGlvbnMnO1xuaW1wb3J0IHsgZmV0Y2hQbGF5aW5nQ29udGV4dCB9IGZyb20gJy4uL2FjdGlvbnMvcGxheWJhY2tBY3Rpb25zJztcbmltcG9ydCBVc2VycyBmcm9tICcuLi9jb21wb25lbnRzL1VzZXJzJztcbmltcG9ydCBRdWV1ZSBmcm9tICcuLi9jb21wb25lbnRzL1F1ZXVlJztcbmltcG9ydCBBZGRUb1F1ZXVlIGZyb20gJy4uL2NvbXBvbmVudHMvQWRkVG9RdWV1ZSc7XG5pbXBvcnQgTm93UGxheWluZyBmcm9tICcuLi9jb21wb25lbnRzL05vd1BsYXlpbmcnO1xuaW1wb3J0IERldmljZXMgZnJvbSAnLi4vY29tcG9uZW50cy9EZXZpY2VzJztcbmltcG9ydCBQYWdlV2l0aEludGwgZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlV2l0aEludGwnO1xuaW1wb3J0IHsgRm9ybWF0dGVkTWVzc2FnZSB9IGZyb20gJ3JlYWN0LWludGwnO1xuXG5jbGFzcyBNYWluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyh7IHJlcSwgc3RvcmUsIGlzU2VydmVyIH0pIHtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgc3RvcmUuZGlzcGF0Y2goZmV0Y2hRdWV1ZSgpKSxcbiAgICAgIHN0b3JlLmRpc3BhdGNoKGZldGNoVXNlcnMoKSksXG4gICAgICBzdG9yZS5kaXNwYXRjaChmZXRjaFBsYXlpbmdDb250ZXh0KCkpXG4gICAgXSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICB7dGhpcy5wcm9wcy5wbGF5aW5nLnRyYWNrXG4gICAgICAgICAgPyA8Tm93UGxheWluZ1xuICAgICAgICAgICAgICB0cmFjaz17dGhpcy5wcm9wcy5wbGF5aW5nLnRyYWNrfVxuICAgICAgICAgICAgICB1c2VyPXt0aGlzLnByb3BzLnBsYXlpbmcudXNlcn1cbiAgICAgICAgICAgICAgcG9zaXRpb249e3RoaXMucHJvcHMucGxheWluZy5wb3NpdGlvbn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgOiBudWxsfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxuICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAuYXBwIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxvYXQ6ICdsZWZ0JyB9fT5cbiAgICAgICAgICAgIDxRdWV1ZSBpdGVtcz17dGhpcy5wcm9wcy5xdWV1ZX0gc2Vzc2lvbj17dGhpcy5wcm9wcy5zZXNzaW9ufSAvPlxuICAgICAgICAgICAge3RoaXMucHJvcHMuc2Vzc2lvbi51c2VyICE9PSBudWxsID8gPEFkZFRvUXVldWUgLz4gOiBudWxsfVxuICAgICAgICAgICAge3RoaXMucHJvcHMuc2Vzc2lvbi51c2VyICE9PSBudWxsID8gPERldmljZXMgLz4gOiBudWxsfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcsIHdpZHRoOiAnMTUwcHgnIH19PlxuICAgICAgICAgICAgPFVzZXJzIGl0ZW1zPXt0aGlzLnByb3BzLnVzZXJzfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgcGxheWluZzogc3RhdGUucGxheWJhY2ssXG4gIHF1ZXVlOiBzdGF0ZS5xdWV1ZSxcbiAgdXNlcnM6IHN0YXRlLnVzZXJzLFxuICBzZXNzaW9uOiBzdGF0ZS5zZXNzaW9uXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KGluaXRTdG9yZSwgbWFwU3RhdGVUb1Byb3BzLCBudWxsKShQYWdlV2l0aEludGwoTWFpbikpO1xuIl19 */\n/*@ sourceURL=pages/index.js?entry */'
      }), _react2.default.createElement('div', { style: { float: 'left' }, className: 'jsx-3454113804',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement(_Queue2.default, { items: this.props.queue, session: this.props.session, __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }), this.props.session.user !== null ? _react2.default.createElement(_AddToQueue2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }) : null, this.props.session.user !== null ? _react2.default.createElement(_Devices2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }) : null), _react2.default.createElement('div', { style: { float: 'right', width: '150px' }, className: 'jsx-3454113804',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(_Users2.default, { items: this.props.users, __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }))));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var req = _ref.req,
          store = _ref.store,
          isServer = _ref.isServer;

      return _promise2.default.all([store.dispatch((0, _queueActions.fetchQueue)()), store.dispatch((0, _usersActions.fetchUsers)()), store.dispatch((0, _playbackActions.fetchPlayingContext)())]);
    }
  }]);

  return Main;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    playing: state.playback,
    queue: state.queue,
    users: state.users,
    session: state.session
  };
};

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore, mapStateToProps, null)((0, _PageWithIntl2.default)(Main));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsIndpdGhSZWR1eCIsIkxheW91dCIsImluaXRTdG9yZSIsImZldGNoUXVldWUiLCJmZXRjaFVzZXJzIiwiZmV0Y2hQbGF5aW5nQ29udGV4dCIsIlVzZXJzIiwiUXVldWUiLCJBZGRUb1F1ZXVlIiwiTm93UGxheWluZyIsIkRldmljZXMiLCJQYWdlV2l0aEludGwiLCJGb3JtYXR0ZWRNZXNzYWdlIiwiTWFpbiIsInByb3BzIiwicGxheWluZyIsInRyYWNrIiwidXNlciIsInBvc2l0aW9uIiwiZmxvYXQiLCJxdWV1ZSIsInNlc3Npb24iLCJ3aWR0aCIsInVzZXJzIiwicmVxIiwic3RvcmUiLCJpc1NlcnZlciIsImFsbCIsImRpc3BhdGNoIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJwbGF5YmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQWlCOztBQUMxQixBQUFTLEFBQWtCOztBQUMzQixBQUFTLEFBQWtCOztBQUMzQixBQUFTLEFBQTJCOztBQUNwQyxBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFrQjs7OztBQUN6QixBQUFTOzs7Ozs7O0ksQUFFSDs7Ozs7Ozs7Ozs7NkJBUUssQUFDUDs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNHO0FBREg7QUFBQSxPQUFBLE9BQ0csQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQix3QkFDaEIsQUFBQztlQUNRLEtBQUEsQUFBSyxNQUFMLEFBQVcsUUFEcEIsQUFDNEIsQUFDMUI7Y0FBTSxLQUFBLEFBQUssTUFBTCxBQUFXLFFBRm5CLEFBRTJCLEFBQ3pCO2tCQUFVLEtBQUEsQUFBSyxNQUFMLEFBQVcsUUFIdkIsQUFHK0I7O29CQUgvQjtzQkFESCxBQUNHO0FBQUE7QUFDRSxPQURGLElBRk4sQUFPTSxBQUNKLHNCQUFBLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUE7QUFBQTtBQUFBO2lCQUFBO2FBQUEsQUFTRTtBQVRGLDBCQVNFLGNBQUEsU0FBSyxPQUFPLEVBQUUsT0FBZCxBQUFZLEFBQVMscUJBQXJCOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyxpQ0FBTSxPQUFPLEtBQUEsQUFBSyxNQUFuQixBQUF5QixPQUFPLFNBQVMsS0FBQSxBQUFLLE1BQTlDLEFBQW9EO29CQUFwRDtzQkFERixBQUNFLEFBQ0M7QUFERDtlQUNDLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsU0FBbkIsQUFBNEIsdUJBQU8sQUFBQzs7b0JBQUQ7c0JBQW5DLEFBQW1DO0FBQUE7QUFBQSxPQUFBLElBRnRDLEFBRXVELEFBQ3BELFdBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixTQUFuQixBQUE0Qix1QkFBTyxBQUFDOztvQkFBRDtzQkFBbkMsQUFBbUM7QUFBQTtBQUFBLE9BQUEsSUFaeEMsQUFTRSxBQUdvRCxBQUVwRCx1QkFBQSxjQUFBLFNBQUssT0FBTyxFQUFFLE9BQUYsQUFBUyxTQUFTLE9BQTlCLEFBQVksQUFBeUIsc0JBQXJDOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyxpQ0FBTSxPQUFPLEtBQUEsQUFBSyxNQUFuQixBQUF5QjtvQkFBekI7c0JBeEJSLEFBQ0UsQUFRRSxBQWNFLEFBQ0UsQUFLVDtBQUxTOzs7OzswQ0FoQ3VDO1VBQXhCLEFBQXdCLFdBQXhCLEFBQXdCO1VBQW5CLEFBQW1CLGFBQW5CLEFBQW1CO1VBQVosQUFBWSxnQkFBWixBQUFZLEFBQy9DOzthQUFPLGtCQUFBLEFBQVEsSUFBSSxDQUNqQixNQUFBLEFBQU0sU0FEVyxBQUNqQixBQUFlLGtDQUNmLE1BQUEsQUFBTSxTQUZXLEFBRWpCLEFBQWUsa0NBQ2YsTUFBQSxBQUFNLFNBSFIsQUFBTyxBQUFZLEFBR2pCLEFBQWUsQUFFbEI7Ozs7O0VBUGdCLGdCLEFBQU07O0FBeUN6QixJQUFNLGtCQUFrQixTQUFsQixBQUFrQix1QkFBQTs7YUFDYixNQUR1QixBQUNqQixBQUNmO1dBQU8sTUFGeUIsQUFFbkIsQUFDYjtXQUFPLE1BSHlCLEFBR25CLEFBQ2I7YUFBUyxNQUphLEFBQVUsQUFJakI7QUFKaUIsQUFDaEM7QUFERixBQU9BOztrQkFBZSxBQUFVLGtEQUFWLEFBQXFCLGlCQUFyQixBQUFzQyxNQUFNLDRCQUEzRCxBQUFlLEFBQTRDLEFBQWEiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL01pdGNoZWxsUy9MaWJyYXJ5L01vYmlsZSBEb2N1bWVudHMvY29tfmFwcGxlfkNsb3VkRG9jcy9STUlUL1NlbTIvQ2xvdWQgQ29tcHV0aW5nL0FzczIvU3BvdGlmeSBwcmFjdGlzZS9jLW1hc3RlciJ9