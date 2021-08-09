import React, { useState } from 'react'
import { useCharacters } from "../api/useData";
import CharacterCard from './CharacterCard';

const Characters = () => {

  const charactersPages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34]
  const [APIPages, setAPIPages] = useState(1)
  const getCharacter = useCharacters(APIPages)

  return (
    <div className="container fluid"  >
      <div className="row justify-content-center align-items-center">
        {getCharacter.results?.map(character =>
          <div key={character.id} className="col-2">
            <CharacterCard
              name={character.name}
              photo={character.image}
              species={character.species}
              location={character.location.name}
              gender={character.gender}
              status={character.status} />
          </div>)}
      <div className="row justify-content-center align-items-center">
        <div className="col-12">
            {charactersPages.map(page =>
              <button
                onClick={() => setAPIPages(page)}
                className={page === APIPages ? "my-button active" : "my-button"}
                key={page}>{page}</button>)}
          </div>
        </div>
      </div>
    </div>

  )
}

export default Characters
