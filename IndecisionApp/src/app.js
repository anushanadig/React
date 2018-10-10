console.log("app.js is running");

//JSX- javascript XML - js syntax extension provided by react

const app = {
    title : "Indecision App",
    subtitle : "decide what to do",
    options : ["one", "two"]
}

const onFormSubmit = (e) => {
    e.preventDefault();
    let option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);
        option='';
    }
    renderElement();
}
const renderElement = ()=>{
    const element = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.options.length > 0 ? app.subtitle : "no options"}</p>
        <ol>
            <li>{app.options.forEach(opt=>console.log(opt))}</li>
            {app.options.forEach(opt=><li>opt</li>)}
         </ol>

         <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>submit</button>
         </form>

    </div>);

    ReactDOM.render(element, document.getElementById('root'));
    }

    renderElement();



