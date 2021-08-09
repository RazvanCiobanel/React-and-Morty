import React from 'react'
import Logo from './Logo.jpg'


const Home = ({ setDisplayCharacters, setDisplayLocations }) => {





    return (
        <div className="container">
            <img
                onMouseEnter={() => {
                    setDisplayCharacters(false);
                    setDisplayLocations(false)
                }}
                className="img" src={Logo} alt="" />
            <div >
                <p><cite>Rick and Morty</cite> is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime programming block, Adult Swim.<br></br>
                    The series follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures.</p>
                    <q>There's not just one thing I love about this show, everything that goes into the show, how the creators treat their fans, to the characters created, to the writing, everything what makes this what it is I love.</q>
                    By Abig Fan
            </div>
            <div className="buttons">
                <button
                    onClick={() => {
                        setDisplayCharacters(true);
                        setDisplayLocations(false)
                    }}
                    className="my-button">Characters</button>

                <button
                    onClick={() => {
                        setDisplayLocations(true);
                        setDisplayCharacters(false)
                    }}
                    className="my-button">Locations</button>

            </div>

        </div>
    )
}

export default Home
