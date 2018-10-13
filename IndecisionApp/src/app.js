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

let count = 0;
const renderElement = () => {
  const element = (
    <div>
      <h1>{app.title}</h1>
      <p>{app.options.length > 0 ? app.subtitle : "no options"}</p>
      <ol>
        {app.options.map(item => (
          <li key={count++}>{item} </li>
        ))}
      </ol>

      <button onClick={onDecide}>decide</button>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>submit</button>
      </form>
    </div>
  );

  ReactDOM.render(element, document.getElementById("root"));
};

renderElement();
