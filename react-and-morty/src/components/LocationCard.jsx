import React, { useState } from 'react'

const LocationCard = ({ name, type, dimension, residents }) => {

  const [displayMoreData, setDisplayMoreData] = useState(false)

  return (
    <div
      data-testid="card-click"
      onClick={() => setDisplayMoreData(true)}
      onMouseLeave={() => setDisplayMoreData(false)}
      className="card">
      <div className="card-body">
        <h6 className="card-title">{name}</h6>
        <p>Type: {type}</p>
        {displayMoreData &&
          <div data-testid="displayMoreData">
            <p>Dimension: {dimension}</p>
            <p>No. of residents: {residents}</p>
          </div>}
      </div>
    </div>
  )
}

export default LocationCard
