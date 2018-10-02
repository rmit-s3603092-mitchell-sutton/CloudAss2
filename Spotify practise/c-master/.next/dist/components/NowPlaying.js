'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/MitchellS/Library/Mobile Documents/com~apple~CloudDocs/RMIT/Sem2/Cloud Computing/Ass2/Spotify practise/c-master/components/NowPlaying.js';


var NowPlaying = function (_React$PureComponent) {
  (0, _inherits3.default)(NowPlaying, _React$PureComponent);

  function NowPlaying() {
    (0, _classCallCheck3.default)(this, NowPlaying);

    var _this = (0, _possibleConstructorReturn3.default)(this, (NowPlaying.__proto__ || (0, _getPrototypeOf2.default)(NowPlaying)).call(this));

    _this.state = {
      start: Date.now(),
      currentPosition: 0
    };
    _this.timer = null;
    _this.tick = function () {
      _this.setState({
        currentPosition: Date.now() - _this.state.start + (_this.props.position || 0)
      });
    };
    return _this;
  }

  (0, _createClass3.default)(NowPlaying, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      if (this.props.position !== props.position || this.props.track !== props.track) {
        this.setState({
          start: Date.now(),
          currentPosition: 0
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.timer = setInterval(this.tick, 300);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.timer);
    }
  }, {
    key: 'render',
    value: function render() {
      var percentage = +(this.state.currentPosition * 100 / this.props.track.duration_ms).toFixed(2) + '%';
      var userName = this.props.user.display_name || this.props.user.id;
      return _react2.default.createElement('div', {
        className: 'jsx-3942739481' + ' ' + 'now-playing',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: '3942739481',
        css: '.now-playing.jsx-3942739481{background-color:#424d58;color:#fff;height:250px;position:relative;width:100%;}.now-playing__text.jsx-3942739481{padding:40px;}.now-playing__bd.jsx-3942739481{padding-left:30px;}.now-playing__track-name.jsx-3942739481{font-size:2em;padding-top:1.2em;}.now-playing__artist-name.jsx-3942739481{font-size:1.2em;padding-bottom:2em;padding-top:0.5em;}.now-playing__user.jsx-3942739481{padding-top:0.5em;}.now-playing__progress_bar.jsx-3942739481{bottom:0;background-color:#222;height:5px;position:absolute;width:100%;}.media.jsx-3942739481,.media__bd.jsx-3942739481{overflow:hidden;_overflow:visible;zoom:1;}.media.jsx-3942739481 .media__img.jsx-3942739481{float:left;margin-right:10px;}.user-image.jsx-3942739481{border-radius:50%;}.user-name.jsx-3942739481{line-height:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTm93UGxheWluZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ29CLEFBR3NDLEFBT1osQUFHSyxBQUdKLEFBSUUsQUFLRSxBQUdULEFBUU8sQUFLTCxBQUlPLEFBR0QsU0FuQkssRUFhSixFQS9CcEIsQ0FNb0IsRUFJQyxBQWdCRCxDQVlwQixDQW5DQSxBQVlBLEFBb0JBLE9BMUNhLElBdUNiLEVBYmEsQ0FaYixFQW9CUyxDQWhCVyxDQWpCTCxLQWtDZixDQVJvQixPQXpCQSxJQWlCcEIsT0FTYSxPQXpCQSxJQTBCYixPQXpCQSIsImZpbGUiOiJjb21wb25lbnRzL05vd1BsYXlpbmcuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01pdGNoZWxsUy9MaWJyYXJ5L01vYmlsZSBEb2N1bWVudHMvY29tfmFwcGxlfkNsb3VkRG9jcy9STUlUL1NlbTIvQ2xvdWQgQ29tcHV0aW5nL0FzczIvU3BvdGlmeSBwcmFjdGlzZS9jLW1hc3RlciIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIE5vd1BsYXlpbmcgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc3RhcnQ6IERhdGUubm93KCksXG4gICAgICBjdXJyZW50UG9zaXRpb246IDBcbiAgICB9O1xuICAgIHRoaXMudGltZXIgPSBudWxsO1xuICAgIHRoaXMudGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjdXJyZW50UG9zaXRpb246IERhdGUubm93KCkgLSB0aGlzLnN0YXRlLnN0YXJ0ICsgKHRoaXMucHJvcHMucG9zaXRpb24gfHwgMClcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykge1xuICAgIGlmICh0aGlzLnByb3BzLnBvc2l0aW9uICE9PSBwcm9wcy5wb3NpdGlvbiB8fCB0aGlzLnByb3BzLnRyYWNrICE9PSBwcm9wcy50cmFjaykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHN0YXJ0OiBEYXRlLm5vdygpLFxuICAgICAgICBjdXJyZW50UG9zaXRpb246IDBcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwodGhpcy50aWNrLCAzMDApO1xuICB9XG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSArKHRoaXMuc3RhdGUuY3VycmVudFBvc2l0aW9uICogMTAwIC8gdGhpcy5wcm9wcy50cmFjay5kdXJhdGlvbl9tcykudG9GaXhlZCgyKSArICclJztcbiAgICBjb25zdCB1c2VyTmFtZSA9IHRoaXMucHJvcHMudXNlci5kaXNwbGF5X25hbWUgfHwgdGhpcy5wcm9wcy51c2VyLmlkO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdy1wbGF5aW5nXCI+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAubm93LXBsYXlpbmcge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQyNGQ1ODtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubm93LXBsYXlpbmdfX3RleHQge1xuICAgICAgICAgICAgcGFkZGluZzogNDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5vdy1wbGF5aW5nX19iZCB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ub3ctcGxheWluZ19fdHJhY2stbmFtZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxLjJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5vdy1wbGF5aW5nX19hcnRpc3QtbmFtZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDJlbTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwLjVlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5vdy1wbGF5aW5nX191c2VyIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwLjVlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5vdy1wbGF5aW5nX19wcm9ncmVzc19iYXIge1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbiAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tZWRpYSxcbiAgICAgICAgICAubWVkaWFfX2JkIHtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBfb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICAgICAgICB6b29tOiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubWVkaWEgLm1lZGlhX19pbWcge1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC51c2VyLWltYWdlIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnVzZXItbmFtZSB7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub3ctcGxheWluZ19fdGV4dCBtZWRpYVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWFfX2ltZ1wiPlxuICAgICAgICAgICAgPGltZyBzcmM9e3RoaXMucHJvcHMudHJhY2suYWxidW0uaW1hZ2VzWzFdLnVybH0gd2lkdGg9XCIxNzBcIiBoZWlnaHQ9XCIxNzBcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm93LXBsYXlpbmdfX2JkIG1lZGlhX19iZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub3ctcGxheWluZ19fdHJhY2stbmFtZVwiPlxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50cmFjay5uYW1lfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdy1wbGF5aW5nX19hcnRpc3QtbmFtZVwiPlxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50cmFjay5hcnRpc3RzLm1hcChhID0+IGEubmFtZSkuam9pbignLCAnKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYV9faW1nXCI+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1c2VyLWltYWdlXCJcbiAgICAgICAgICAgICAgICBzcmM9e1xuICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMudXNlci5pbWFnZXMgJiYgdGhpcy5wcm9wcy51c2VyLmltYWdlcy5sZW5ndGggJiYgdGhpcy5wcm9wcy51c2VyLmltYWdlc1swXS51cmwpIHx8XG4gICAgICAgICAgICAgICAgICAgICcvc3RhdGljL3VzZXItaWNvbi5wbmcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzBcIlxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjMwXCJcbiAgICAgICAgICAgICAgICBhbHQ9e3VzZXJOYW1lfVxuICAgICAgICAgICAgICAgIHRpdGxlPXt1c2VyTmFtZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLW5hbWUgbWVkaWFfX2JkXCI+XG4gICAgICAgICAgICAgIHt1c2VyTmFtZX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub3ctcGxheWluZ19fcHJvZ3Jlc3NcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdy1wbGF5aW5nX19wcm9ncmVzc19iYXJcIiBzdHlsZT17eyB3aWR0aDogcGVyY2VudGFnZSB9fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTm93UGxheWluZztcbiJdfQ== */\n/*@ sourceURL=components/NowPlaying.js */'
      }), _react2.default.createElement('div', {
        className: 'jsx-3942739481' + ' ' + 'now-playing__text media',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-3942739481' + ' ' + 'media__img',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react2.default.createElement('img', { src: this.props.track.album.images[1].url, width: '170', height: '170', className: 'jsx-3942739481',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      })), _react2.default.createElement('div', {
        className: 'jsx-3942739481' + ' ' + 'now-playing__bd media__bd',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-3942739481' + ' ' + 'now-playing__track-name',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, this.props.track.name), _react2.default.createElement('div', {
        className: 'jsx-3942739481' + ' ' + 'now-playing__artist-name',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, this.props.track.artists.map(function (a) {
        return a.name;
      }).join(', ')), _react2.default.createElement('div', {
        className: 'jsx-3942739481' + ' ' + 'media__img',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, _react2.default.createElement('img', {
        src: this.props.user.images && this.props.user.images.length && this.props.user.images[0].url || '/static/user-icon.png',
        width: '30',
        height: '30',
        alt: userName,
        title: userName,
        className: 'jsx-3942739481' + ' ' + 'user-image',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      })), _react2.default.createElement('div', {
        className: 'jsx-3942739481' + ' ' + 'user-name media__bd',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, userName))), _react2.default.createElement('div', {
        className: 'jsx-3942739481' + ' ' + 'now-playing__progress',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, _react2.default.createElement('div', { style: { width: percentage }, className: 'jsx-3942739481' + ' ' + 'now-playing__progress_bar',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      })));
    }
  }]);

  return NowPlaying;
}(_react2.default.PureComponent);

exports.default = NowPlaying;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTm93UGxheWluZy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIk5vd1BsYXlpbmciLCJzdGF0ZSIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsImN1cnJlbnRQb3NpdGlvbiIsInRpbWVyIiwidGljayIsInNldFN0YXRlIiwicHJvcHMiLCJwb3NpdGlvbiIsInRyYWNrIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwicGVyY2VudGFnZSIsImR1cmF0aW9uX21zIiwidG9GaXhlZCIsInVzZXJOYW1lIiwidXNlciIsImRpc3BsYXlfbmFtZSIsImlkIiwiYWxidW0iLCJpbWFnZXMiLCJ1cmwiLCJuYW1lIiwiYXJ0aXN0cyIsIm1hcCIsImEiLCJqb2luIiwibGVuZ3RoIiwid2lkdGgiLCJQdXJlQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7Ozs7Ozs7SSxBQUVEO3NDQUNKOzt3QkFBYzt3Q0FBQTs7d0lBRVo7O1VBQUEsQUFBSzthQUNJLEtBREksQUFDSixBQUFLLEFBQ1o7dUJBRkYsQUFBYSxBQUVNLEFBRW5CO0FBSmEsQUFDWDtVQUdGLEFBQUssUUFBTCxBQUFhLEFBQ2I7VUFBQSxBQUFLLE9BQU8sWUFBTSxBQUNoQjtZQUFBLEFBQUs7eUJBQ2MsS0FBQSxBQUFLLFFBQVEsTUFBQSxBQUFLLE1BQWxCLEFBQXdCLFNBQVMsTUFBQSxBQUFLLE1BQUwsQUFBVyxZQUQvRCxBQUFjLEFBQ0ssQUFBd0QsQUFFNUU7QUFIZSxBQUNaO0FBVFEsQUFPWjtXQUtEOzs7Ozs4Q0FDeUIsQSxPQUFPLEFBQy9CO1VBQUksS0FBQSxBQUFLLE1BQUwsQUFBVyxhQUFhLE1BQXhCLEFBQThCLFlBQVksS0FBQSxBQUFLLE1BQUwsQUFBVyxVQUFVLE1BQW5FLEFBQXlFLE9BQU8sQUFDOUU7YUFBQSxBQUFLO2lCQUNJLEtBREssQUFDTCxBQUFLLEFBQ1o7MkJBRkYsQUFBYyxBQUVLLEFBRXBCO0FBSmUsQUFDWjtBQUlMOzs7O3dDQUNtQixBQUNsQjtXQUFBLEFBQUssUUFBUSxZQUFZLEtBQVosQUFBaUIsTUFBOUIsQUFBYSxBQUF1QixBQUNyQzs7OzsyQ0FDc0IsQUFDckI7b0JBQWMsS0FBZCxBQUFtQixBQUNwQjs7Ozs2QkFDUSxBQUNQO1VBQU0sYUFBYSxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQUwsQUFBVyxrQkFBWCxBQUE2QixNQUFNLEtBQUEsQUFBSyxNQUFMLEFBQVcsTUFBL0MsQUFBcUQsYUFBckQsQUFBa0UsUUFBbkUsQUFBQyxBQUEwRSxLQUE5RixBQUFtRyxBQUNuRztVQUFNLFdBQVcsS0FBQSxBQUFLLE1BQUwsQUFBVyxLQUFYLEFBQWdCLGdCQUFnQixLQUFBLEFBQUssTUFBTCxBQUFXLEtBQTVELEFBQWlFLEFBQ2pFOzZCQUNFLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUE7QUFBQTtBQUFBLE9BQUE7aUJBQUE7YUFBQSxBQW1ERTtBQW5ERiwwQkFtREUsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLGdEQUNPLEtBQUssS0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFYLEFBQWlCLE1BQWpCLEFBQXVCLE9BQXZCLEFBQThCLEdBQXhDLEFBQTJDLEtBQUssT0FBaEQsQUFBc0QsT0FBTSxRQUE1RCxBQUFtRSxrQkFBbkU7O29CQUFBO3NCQUZKLEFBQ0UsQUFDRSxBQUVGO0FBRkU7MkJBRUYsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0c7QUFESDtBQUFBLGNBQ0csQUFBSyxNQUFMLEFBQVcsTUFGaEIsQUFDRSxBQUNvQixBQUVwQix1QkFBQSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0c7QUFESDtBQUFBLGNBQ0csQUFBSyxNQUFMLEFBQVcsTUFBWCxBQUFpQixRQUFqQixBQUF5QixJQUFJLGFBQUE7ZUFBSyxFQUFMLEFBQU87QUFBcEMsU0FBQSxBQUEwQyxLQUwvQyxBQUlFLEFBQ0csQUFBK0MsQUFFbEQsd0JBQUEsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQTthQUlPLEtBQUEsQUFBSyxNQUFMLEFBQVcsS0FBWCxBQUFnQixVQUFVLEtBQUEsQUFBSyxNQUFMLEFBQVcsS0FBWCxBQUFnQixPQUExQyxBQUFpRCxVQUFVLEtBQUEsQUFBSyxNQUFMLEFBQVcsS0FBWCxBQUFnQixPQUFoQixBQUF1QixHQUFuRixBQUFzRixPQUgxRixBQUlNLEFBRUo7ZUFORixBQU1RLEFBQ047Z0JBUEYsQUFPUyxBQUNQO2FBUkYsQUFRTyxBQUNMO2VBVEYsQUFTUzs0Q0FUVCxBQUNZOztvQkFEWjtzQkFSSixBQU9FLEFBQ0UsQUFZRjtBQVpFO0FBRUUsMkJBVUosY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNHO0FBREg7QUFBQSxTQTNFTixBQW1ERSxBQUlFLEFBb0JFLEFBS0osNkJBQUEsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSxnREFDNkMsT0FBTyxFQUFFLE9BQXBELEFBQWtELEFBQVMsa0RBQTNELEFBQWU7O29CQUFmO3NCQWxGTixBQUNFLEFBZ0ZFLEFBQ0UsQUFJUDtBQUpPOzs7Ozs7RUFqSGUsZ0JBQU0sQSxBQXdIL0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiTm93UGxheWluZy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWl0Y2hlbGxTL0xpYnJhcnkvTW9iaWxlIERvY3VtZW50cy9jb21+YXBwbGV+Q2xvdWREb2NzL1JNSVQvU2VtMi9DbG91ZCBDb21wdXRpbmcvQXNzMi9TcG90aWZ5IHByYWN0aXNlL2MtbWFzdGVyIn0=