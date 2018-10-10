"use strict";

var btnTxt = "hide";
var showText = "here are the details";

var onBtnClick = function onBtnClick() {
  btnTxt = btnTxt === "hide" ? "show" : "hide";
  render();
};

var render = function render() {
  var element = React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: onBtnClick },
      " ",
      btnTxt,
      " "
    ),
    React.createElement(
      "p",
      null,
      btnTxt === "hide" && showText
    ),
    React.createElement(
      "p",
      null,
      " hii "
    )
  );

  ReactDOM.render(element, document.getElementById("root"));
};

render();
