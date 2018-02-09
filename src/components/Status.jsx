import React, { Component, Fragment } from 'react';

class Status extends Component {
    
    render() {
        // console.log(props);
        return (
            <Fragment>
                <input className = "form-control-lg center"
                    placeholder="What's Chirpin'?"
                    onChange = { (event) => {this.props.handleInput(event.target.value)}}
                    />
                <button onClick= {this.props.onAdd}>SUBMIT</button>
            </Fragment> 
        )
    }
}

export default Status;

