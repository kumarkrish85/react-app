import React from 'react';
export class Clock extends React.Component {

    state = {
        now: new Date()
    };
    myVar;
    constructor() {
        super();
    }

    changetime() {
        
            this.myVar = setInterval(()=>this.setState({ now: new Date() }), 1000);

        
    }

    render() {
        return (
            <div>
                <p >{this.state.now.toLocaleTimeString()}</p>
                <input type="button" onClick={() => this.changetime()} value="Submit" />
            </div>);

    }

    componentDidMount() {
        // setInterval(this.changetime, 1000);
    }




}