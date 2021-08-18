import React, { useState } from 'react'

const CharacterCard = ({ name, photo, species, location, gender, status }) => {

  const [displayMoreData, setDisplayMoreData] = useState(false)

  return (

    <div 
    data-testid="card-click"
    onClick={() => setDisplayMoreData(true)}
      onMouseLeave={() => setDisplayMoreData(false)}
      className="card">
      <div className="card-body">
        <h6 className="card-title">{name}</h6>
        <img src={photo} alt="" className="img-fluid img-thumbnail" />
        <p>Species: {species}</p>
        
        {displayMoreData &&
          <div data-testid="displayMoreData">
            <p>Gender: {gender}</p>
            <p>Status: {status}</p>
            <p>Location: {location}</p>
          </div>}
      </div>
    </div>

  )
}

export default CharacterCard
