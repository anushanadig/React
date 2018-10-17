"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//counter app

var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter() {
    _classCallCheck(this, Counter);

    return _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).apply(this, arguments));
  }

  _createClass(Counter, [{
    key: "handleAddOne",
    value: function handleAddOne() {
      alert("+1");
    }
  }, {
    key: "handleMinusOne",
    value: function handleMinusOne() {
      alert("-1");
    }
  }, {
    key: "handleReset",
    value: function handleReset() {
      alert("reset");
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "count = "
        ),
        React.createElement(
          "button",
          { onClick: this.handleAddOne },
          "+1"
        ),
        React.createElement(
          "button",
          { onClick: this.handleMinusOne },
          "-1"
        ),
        React.createElement(
          "button",
          { onClick: this.handleReset },
          "reset"
        )
      );
    }
  }]);

  return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.getElementById("root"));
// let count = 0;
// const inc = () => {
//   count++;
//   renderCount();
// };

// const dec = () => {
//   --count;
//   renderCount();
// };

// const reset = () => {
//   count = 0;
//   renderCount();
// };

// const renderCount = () => {
//   const countElement = (
//     <div>
//       <h1>Count = {count}</h1>
//       <button onClick={inc}>+1</button>
//       <button onClick={dec}>1-</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );

//   ReactDOM.render(countElement, document.getElementById("root"));
// };

// renderCount();

// const user = {
//   name: "anusha",
//   //age : 22,
//   retAge: 67
// };

// function getUserName(name) {
//   if (name) {
//     return <p> {name}</p>;
//   }
// }
// const userElement = (
//   <div>
//     {getUserName(user.name)}
//     <p>{user.age ? user.age : 20}</p>
//     {user.retAge > 65 && <p>ret-age is {user.retAge}</p>}
//   </div>
// );

// const random = () => 3;
// const countElement = <p>{random()}</p>;
// ReactDOM.render(countElement, document.getElementById('root'));
