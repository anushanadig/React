console.log("app.js is running");

//JSX- javascript XML - js syntax extension provided by react

const app = {
  title: "Indecision App",
  subtitle: "decide what to do",
  options: ["one", "two"]
};

const onFormSubmit = e => {
  e.preventDefault();
  let option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
  }
  renderElement();
};

const onDecide = () => {
  const index = Math.floor(Math.random() * app.options.length);
  alert(app.options[index]);
  renderElement();
};

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.subtitle}</p>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <div>option componentt here</div>;
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.optionsList.length}</p>
        {this.props.optionsList.map(opt => (
          <p>{opt}</p>
        ))}
        <Option />
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>what should i do?</button>
      </div>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return <div>add option component here</div>;
  }
}

class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision app";
    const subtitle = "confused?";
    const optionsList = ["one", "two"];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Options optionsList={optionsList} />
        <Action />
        <AddOption />
      </div>
    );
  }
}

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

let count = 0;
const renderElement = () => {
  const element = <IndecisionApp />;

  ReactDOM.render(element, document.getElementById("root"));
};

renderElement();
