//counter app

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }
  handleAddOne() {
    // WHY THIS DOEsN'T work????????
    // this.state.count++;
    // console.log(this.state.count++);
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }
  handleMinusOne() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      };
    });
  }
  handleReset() {
    this.setState(prevState => {
      return {
        count: 0
      };
    });
  }
  render() {
    return (
      <div>
        <h1>count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("root"));
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
