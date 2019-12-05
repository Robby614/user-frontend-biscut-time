import React, { Component } from 'react';
import './App.css';

import Artists from './components/artists'

class App extends Component{

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     showArtists: false,
  //   }
  //   this.renderArtists = this.renderArtists.bind(this)
  // }

  // renderArtists() {
  //   this.setState({
  //     showArtists:true,
  //   })
  // }

  render() {
  return (
    <div className="App">
      <header className="header">
        <h1>Biscuit Time!</h1>
      <button className="artists-button" onClick={this.renderArtists}>Artists</button>
        
     </header>
      <div>
        <Artists artists={this.state.artists}/>
      </div>

   </div>
  )}
  
  state = {
    artists: []
};

componentDidMount() {
  fetch("http://localhost:8080/api/artists")
  .then(res => res.json())
  .then((data) => {
    this.setState({ artists: data })
  })
  .catch(console.log)
};
}


// []

export default App;
