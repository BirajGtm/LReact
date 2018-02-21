var GreeterMessage = React.createClass({
    render: function (){
        var name = this.props.name;
        var message = this.props.message;
        return(
            <div>
                <h1>Hello {name}!</h1>
                <p>{message}</p>
            </div>
        );
    }
});

var GreeterForm = React.createClass({
    onFormSubmit: function(e){
        e.preventDefault();

        var updates = {};
        var name = this.refs.name.value;
        var message = this.refs.message.value;

        if(name.length>0){
            this.refs.name.value = '';
            updates.name = name;

        }
        if(message.length>0){
            this.refs.message.value='';
            updates.message= message;
        }
        this.props.onNewName(updates);
    },

    render: function(){
        return(
            <form onSubmit={this.onFormSubmit}>
                <input placeholder="enter name" type="text" ref="name"/>
                <textarea placeholder="enter message" ref="message" id="" cols="20" rows="5"></textarea>
                <button>submit</button>
            </form>
        );
    }
});

var Greeter = React.createClass({

    getDefaultProps: function() {
        return{
            name: "React",
            message: "This is default message"
        };
    },

    getInitialState: function() {
        return {
            name: this.props.name,
            message: this.props.message
        };
    },

    handleNewName: function(updates){
        
        this.setState(updates);
    },

    render: function(){
        var name = this.state.name;
        var message = this.state.message;
        return(
            <div>

            <GreeterMessage name={name} message={message}/>
            <GreeterForm onNewName={this.handleNewName}/>
            
            </div>
        );
    }
});

var firstName = "Biraj";

ReactDOM.render(
    <Greeter name={firstName}/>,
    document.getElementById("app")
);