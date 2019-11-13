import React, { Component } from 'react';
import './App.css';

import Artists from './components/artists'

class App extends Component{
  render() {
  return (
    <div className="App">
      <header className="header">
        <h1>Biscuit Time!</h1>
        <button className="artists-button" onClick={handleClick}>Artists</button>
     </header>
     <Artists artists={this.state.artists}/>

   </div>
  )}
 
  // render() {
  //   return (
  //     <Artists artists={this.state.artists}/>
  //   )
  // };
  
  state = {
    artists: []
};

componentDidMount() {
  fetch("http://localhost:8080/api/artists")
  .then(res => res.json())
  .then((data) => {
    this.setState({artists: data })
  })
  .catch(console.log)
};
}
function handleClick(){
  console.log('click')

}



export default App;
