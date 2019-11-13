import React, { Component } from 'react';
import './App.css';

import Artists from './components/artists'

class App extends Component{
  
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

render() {
  return (
    <Artists artists={this.state.artists}/>
  )
};
}





export default App;
