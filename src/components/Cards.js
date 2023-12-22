import React from 'react'
import { Link } from 'react-router-dom';

 import '../styles/SuffList.css'
function Cards( {name}) {
  return (
    <>
    <Link to={name} className='location-link'>
    <div className='op'><div className='in'><span className='title'>{name}</span></div></div>
    
    </Link>
    </>
  )
}

export default Cards
/**<img alt ="" src={require(`../images/${name}.png`)}></img> */