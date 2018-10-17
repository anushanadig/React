"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log("app.js is running");

//JSX- javascript XML - js syntax extension provided by react

var app = {
  title: "Indecision App",
  subtitle: "decide what to do",
  options: ["one", "two"]
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
  }
  renderElement();
};

var onDecide = function onDecide() {
  var index = Math.floor(Math.random() * app.options.length);
  alert(app.options[index]);
  renderElement();
};

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          this.props.title
        ),
        React.createElement(
          "p",
          null,
          this.props.subtitle
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Option = function (_React$Component2) {
  _inherits(Option, _React$Component2);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
  }

  _createClass(Option, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        "option componentt here"
      );
    }
  }]);

  return Option;
}(React.Component);

var Options = function (_React$Component3) {
  _inherits(Options, _React$Component3);

  function Options() {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
  }

  _createClass(Options, [{
    key: "handleRemoveAll",
    value: function handleRemoveAll() {
      console.log(this.props.optionsList);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          { onClick: this.handleRemoveAll.bind(this) },
          "remove all"
        ),
        React.createElement(
          "p",
          null,
          this.props.optionsList.length
        ),
        this.props.optionsList.map(function (opt) {
          return React.createElement(
            "p",
            { key: opt },
            opt
          );
        }),
        React.createElement(Option, null)
      );
    }
  }]);

  return Options;
}(React.Component);

var Action = function (_React$Component4) {
  _inherits(Action, _React$Component4);

  function Action() {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
  }

  _createClass(Action, [{
    key: "handlePick",
    value: function handlePick() {
      alert("hello");
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          { onClick: this.handlePick },
          "what should i do?"
        )
      );
    }
  }]);

  return Action;
}(React.Component);

var AddOption = function (_React$Component5) {
  _inherits(AddOption, _React$Component5);

  function AddOption() {
    _classCallCheck(this, AddOption);

    return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).apply(this, arguments));
  }

  _createClass(AddOption, [{
    key: "handleAddOption",
    value: function handleAddOption(e) {
      e.preventDefault();
      var option = e.target.elements.option.value;
      !!option && alert(option);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "form",
          { onSubmit: this.handleAddOption },
          React.createElement("input", { type: "text", name: "option" }),
          React.createElement(
            "button",
            null,
            "add option"
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

var IndecisionApp = function (_React$Component6) {
  _inherits(IndecisionApp, _React$Component6);

  function IndecisionApp() {
    _classCallCheck(this, IndecisionApp);

    return _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).apply(this, arguments));
  }

  _createClass(IndecisionApp, [{
    key: "render",
    value: function render() {
      var title = "Indecision app";
      var subtitle = "confused?";
      var optionsList = ["one", "two"];
      return React.createElement(
        "div",
        null,
        React.createElement(Header, { title: title, subtitle: subtitle }),
        React.createElement(Options, { optionsList: optionsList }),
        React.createElement(Action, null),
        React.createElement(AddOption, null)
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

// <div>
// <Header />

// <ol>
//   {app.options.map(item => (
//     <li key={count++}>{item} </li>
//   ))}
// </ol>

// <button onClick={onDecide}>decide</button>
// <form onSubmit={onFormSubmit}>
//   <input type="text" name="option" />
//   <button>submit</button>
// </form>
// </div>

var count = 0;
var renderElement = function renderElement() {
  var element = React.createElement(IndecisionApp, null);

  ReactDOM.render(element, document.getElementById("root"));
};

renderElement();
