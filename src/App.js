import React, { Component } from 'react';
import './App.css';

import Artists from './components/artists'

class App extends Component{

  render() {
    return (
      <Artists artists={this.state.artists}/>
    )
  };
  
  state = {
    artists: []
};

componentDidMount() {
  fetch("http://localhost:8080/artists")
  .then(res => res.json())
  .then((data) => {
    this.setState({artists: data })
  })
  .catch(console.log)
};


}





export default App;
