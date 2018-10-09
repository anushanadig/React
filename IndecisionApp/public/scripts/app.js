"use strict";

console.log("app.js is running");

//JSX- javascript XML - js syntax extension provided by react

var element = React.createElement(
  "p",
  null,
  " hi Anusha "
);

ReactDOM.render(element, document.getElementById('root'));
