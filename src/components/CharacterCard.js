import React, { useState } from 'react';

const CharacterCard = (character) => {

    const [isClicked, setIsClicked] = useState(false);
    const { data } = character;

    const handleClick = () => {
        setIsClicked(true);
    }

    const handleClose = () => {
        setIsClicked(false);
    }

    return(
        <div>
            <h3>{data.name}</h3>
            <img src={data.image} alt='character img' />
            <button type='submit' onClick={handleClick}>See more</button>

            {isClicked === true ? 
            <>
                <h3>Species: {data.species}</h3>
                <h3>Type: {data.type}</h3>
                <h3>Status: {data.status}</h3>
                <h3>Gender: {data.gender}</h3>
                <button type='submit' onClick={handleClose}>Close</button>
            </> : <></>}
        </div>
    )
}

export default CharacterCard
