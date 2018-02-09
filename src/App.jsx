import React, { Component, Fragment } from 'react';
import List from './components/List';
import Status from './components/Status';
import User from './components/User';
import '../src/App.css';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        chirps: [
          {
            user: '@BlkGirlMagic',
            chirp: 'I need a nap.'
          },
          {
            user: '@BlkGirlMagic',
            chirp: 'Please wake me up from my nap, so I can get ready for bed.'
          },
          {
            user: '@BlkGirlMagic',
            chirp: 'Ahhh time for bed!'
          },
        ]
      }
}

handleAddChirp = () => {
  this.setState({
    chirps: [...this.state.chirps, this.state.newChirp],
    newChirp: {}
  });
}

handleInputChange = (chirp) => {
  this.setState({
    newChirp: {
      chirp: chirp,
      user: '@BlkGirlMagic'
    }
  })
}

  render() {
      return (
        <div className="container .bg-light">
          <h1 className = "welcome">Welcome to Chirper!</h1>
          <img className = "cover w-100" src="https://behappy.me/melanin-stay-winning-check-373837/download"/>
          <div className=" user ">
            <User/>
          </div>
            <Status handleInput= { this.handleInputChange } onAdd= { this.handleAddChirp } />
            <List list= {this.state.chirps}  />
          
          
        </div>
            
         
    );
  }
}

export default App;

