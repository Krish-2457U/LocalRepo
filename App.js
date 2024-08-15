/* <div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 Tag</h2>
    </div>
</div> */

const parent = React.createElement("div",
    {id:parent}, 
    React.createElement("div",{id:"child"},
    React.createElement("h1", {}, "I'm h1 Tag"), 
    React.createElement("h2", {}, "I'm h2 tag")));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);