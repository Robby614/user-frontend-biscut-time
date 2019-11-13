import React from 'react'

const Artists = ({ artists }) => {
    return(
        <div>
            <center><h1> Artists</h1></center>
            {artists.map((artist) => 
                <div className="artist-cards">artist cards
                    <div className="artist-card">artist card
                        <h2 className="artist-name">{artist.name}</h2>
                        <img src={artist.imageUrl} alt={artist.name}></img>
                        <h3 className="record-label">{artist.recordLabel}</h3>
                        <h3 className="hometown">{artist.homeTown}</h3>
                    </div>
                </div>
            )}
       </div>
    )}

  export default Artists