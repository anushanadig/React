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
        option = '';
    }
    renderElement();
};
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
            React.createElement(
                "li",
                null,
                app.options.forEach(function (opt) {
                    return console.log(opt);
                })
            ),
            app.options.forEach(function (opt) {
                return React.createElement(
                    "li",
                    null,
                    "opt"
                );
            })
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

    ReactDOM.render(element, document.getElementById('root'));
};

renderElement();
