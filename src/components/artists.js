import React from 'react'

const Artists = ({ artists }) => {
    return(
        <div className='artist-cards'>
            
            {artists.map((artist) => 
                    <div className="artist-card">artist card
                        <h2 className="artist-name">{artist.name}</h2>
                        <img src={artist.imageUrl} alt={artist.name}></img>
                        <h3 className="record-label">{artist.recordLabel}</h3>
                        <h3 className="hometown">{artist.homeTown}</h3>
                    </div>
            
            )}
       </div>
    )}

  export default Artists