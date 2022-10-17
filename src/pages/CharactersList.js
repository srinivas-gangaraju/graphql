import React from 'react'
import "./CharacterList.css"
import { useCharacters } from '../hooks/useCharacters';
import { Link } from "react-router-dom";
const CharactersList = () => {
    const {error, loading, data} = useCharacters();
    console.log({error, loading, data});
    
    if(loading) return <div>loading...</div>
    if(error) return <div>error ... something occured</div>
  
    return (
    <div className='characterList'>
        {data.characters.results.map(character => {
            return <Link to={`/${character.id}`}>
                <img src={character.image} alt="simsons"/>
                <h2>{character.name}</h2>
            </Link>
        })}
    </div>
  )
}

export default CharactersList