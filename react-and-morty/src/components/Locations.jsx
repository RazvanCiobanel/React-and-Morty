import React, { useState } from 'react'
import { useLocations } from '../api/useData'
import LocationCard from './LocationCard'

const Locations = () => {

    const locationsPages = [1, 2, 3, 4, 5, 6]
    const [APIPages, setAPIPages] = useState(1)
    const getLocations = useLocations(APIPages)

    return (
        <div className="container fluid"  >
            <div className="row justify-content-center align-items-center">
                {getLocations.results?.map(location =>
                    <div key={location.id} className="col-2">
                        <LocationCard
                            name={location.name}
                            type={location.type}
                            dimension={location.dimension}
                            residents={location.residents.length}
                        />
                    </div>
                )}
                <div className="container fluid">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12">
                            {locationsPages.map(page =>
                                <button
                                    onClick={() => setAPIPages(page)}
                                    className={page === APIPages ? "my-button active" : "my-button"}
                                    key={page}>{page}</button>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Locations
