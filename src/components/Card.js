import React from 'react'
import { Link } from 'react-router-dom';

import '../styles/Header.css'
function Card( {name}) {
  return (
    <>
    <Link to={name} className='location-link'/>
    <div className='op'><div className='in'><span className='title'>{name}</span></div></div>
    </>
  )
}

export default Card
/**<img alt ="" src={require(`../images/${name}.png`)}></img> */