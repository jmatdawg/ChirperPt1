import React, { Component, Fragment } from 'react';

class Status extends Component {
    
    render() {
        // console.log(props);
        return (
            <Fragment>
                <input className = "form-control-lg w-75"
                    placeholder="What's Chirpin'?"
                    onChange = { (event) => {this.props.handleInput(event.target.value)}}
                    />
                <button 
                    onClick= {this.props.onAdd}
                    className="btn btn-warning">SUBMIT</button>
            </Fragment> 
        )
    }
}

export default Status;

