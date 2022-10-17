import React from 'react'
import { useParams } from 'react-router'
import { useCharacter } from '../hooks/useCharacter'
import "./Character.css"

const Character = () => {
const {id} = useParams();
const {data, loading, error} = useCharacter(id);
console.log({error, loading, data});
if(error) return <div>error occured</div>
if(loading) return <div>loading...</div>
return (
    <div className='character'>
        <img src={data.character.image} width={750} height={750} alt="imr"/>
        <div className='character-content'>
            <h1>{data.character.name}</h1>
            <p>{data.character.gender}</p>
            <div className='character-episode'>
                {data.character.episode.map(episode=> {
                    return <div>
                        {episode.name} = <b>{episode.episode}</b>
                    </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default Character