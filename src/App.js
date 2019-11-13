import React from 'react';
import './App.css';

class App extends Component {
  
  state = {
    artists: []
}

componentDidMount() {
  fetch("http://localhost:8080/artists")
  .then(res => res.json())
  .then((data) => {
    this.setState({contacts: data })
  })
  .catch(console.log)
}



  // const [artists, setInputValue] = React.useState("");


  // const [artistCard, setArtistCards] = React.useState([
  //   ""
  // ]);

  // function handleClick() {
  //   setArtistCards([artists, ...artistCard]);
    
  // }

  // const [fetchResponse, setFetchResponse] = React.useState({});


  // React.useEffect(() => {
  //   fetch("http://localhost:8080/artists")
  //     .then(res => res.json())
  //     .then(response => {
  //       console.log(response);
  //       setFetchResponse(response);
  //     });
  // }, []);

  return (
    <div className="App">
      <header className="header">
        <h1>Biscuit Time!</h1>
        <button className="artists-button" onClick={handleClick}>Artists</button>

      </header>
      <output>
        {fetchResponse.artist && fetchResponse.artist[0].name}
      </output>
      <div className="artist-cards">artist cards
        <div className="artist-card">artist card
          <h2 className="artist-name">artist name</h2>
          <img src="../public/logo"></img>
          <h3 className="record-label">record label</h3>
          <h3 className="hometown">hometown</h3>
        </div>
      </div>
    </div>
  );
}


export default App;
