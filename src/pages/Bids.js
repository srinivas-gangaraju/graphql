import React from 'react'
import { useBids } from '../hooks/useBids';

const Bids = () => {
    const {error, loading, data} = useBids();
    console.log({error, loading, data});
    
    if(loading) return <div>loading...</div>
    if(error) return <div>error ... something occured</div>
  return (
    <div>Bids</div>
  )
}

export default Bids