"use strict";

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

var count = 0;
var renderElement = function renderElement() {
  var element = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      app.title
    ),
    React.createElement(
      "p",
      null,
      app.options.length > 0 ? app.subtitle : "no options"
    ),
    React.createElement(
      "ol",
      null,
      app.options.map(function (item) {
        return React.createElement(
          "li",
          { key: count++ },
          item,
          " "
        );
      })
    ),
    React.createElement(
      "button",
      { onClick: onDecide },
      "decide"
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "submit"
      )
    )
  );

  ReactDOM.render(element, document.getElementById("root"));
};

renderElement();
