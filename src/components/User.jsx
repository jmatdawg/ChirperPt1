import React, { Component, Fragment } from 'react';

class User extends Component {
    
    render() {
        return (
           <Fragment>

                   <img alt= "" src= "https://i1.wp.com/ayibamagazine.com/wp-content/uploads/2016/11/blackgirlmagicfeauture.jpg?w=622" className="rounded-circle avatar"/>
               
                <div className="d-flex justify-content-between">
                     <h2> I AM HER.</h2>
                     <button className="btn btn-warning ">FOLLOW HER</button></div>
                   
                    <h4 className="d-inline"> @BlkGirlMagic </h4><img className= "check" src="https://cdn3.iconfinder.com/data/icons/buttons/512/Icon_13-512.png" alt=""/>
                    
                
                
            </Fragment>
        )
    }
}

export default User;

