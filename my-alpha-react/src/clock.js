import React from "react";

// a class component - we create an instance of it in the root render as <Clock />
class Clock extends React.Component{

    // our class constructor calls the father class constructor (React.Component, from which our class inherits its props)
    //and set the date state (defined in the returned component) to a new Date object
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    // Lifecycle methods

    // runs after the component has been rendered
    componentDidMount(){
        this.timerId = setInterval(
            ()=> this.tick(),
            1000
        );
    }

    // runs before unmounting the component
    componentWillUnmount(){
        clearInterval(this.timerId);
    }

    // a regular class method, used in the componentDidMount  lifecycle method
    tick(){
        // the setState method makes the component re-render (in this case changing its displayed date)
        this.setState({
            date: new Date()
        });
    }

    render(){
        return(
            <div>
                <h1>Hello World!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default Clock;