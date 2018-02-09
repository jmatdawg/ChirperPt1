import React, { Component } from 'react';

class List extends Component {
    
    render() {
        return (
            this.props.list.map((chirp) => {
                return(
                
                   <div>
                        <h4>{chirp.chirp}</h4>
                        <p>{chirp.user}</p>
                    </div> 
                )
            })   
        )
    }
}

export default List;