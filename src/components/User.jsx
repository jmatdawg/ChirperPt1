import React, { Component, Fragment } from 'react';

class User extends Component {
    
    render() {
        return (
           <Fragment>
               <img alt= "" src= "https://i1.wp.com/ayibamagazine.com/wp-content/uploads/2016/11/blackgirlmagicfeauture.jpg?w=622" className="rounded-circle avatar"/>
                <h2> I AM HER.</h2>
                <h4 className="d-inline"> @BlkGirlMagic </h4><img className= "check" src="https://cdn3.iconfinder.com/data/icons/buttons/512/Icon_13-512.png" alt=""/>
                <button className="pull-right">FOLLOW HER</button>
            </Fragment>
        )
    }
}

export default User;

