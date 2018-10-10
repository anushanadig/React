let btnTxt = "hide";
let showText = "here are the details";

const onBtnClick = () => {
  btnTxt = btnTxt === "hide" ? "show" : "hide";
  render();
};

const render = () => {
  var element = (
    <div>
      <button onClick={onBtnClick}> {btnTxt} </button>
      <p>{btnTxt === "hide" && showText}</p>
      {<p> hii </p>}
    </div>
  );

  ReactDOM.render(element, document.getElementById("root"));
};

render();
