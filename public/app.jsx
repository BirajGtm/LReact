var Greeter = React.createClass({
    render: function(){
        return(
            <div>
            <h1>HELLO REACt!</h1>
            <p>This is from the component</p>
            </div>
            <div>2nd div</div>
        );
    }
});

ReactDOM.render(
    <Greeter/>,
    document.getElementById("app")
);
