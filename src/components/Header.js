import React from 'react'
import Card from './Card.js';
import suffaiimg from '../../src/images/suffaiimg.png'

const Header = () => {
      const Location1 = ['Banglore', 'Delhi ', 'Agra' , 'Kolkata'];
      const Location2 = ['Banglore',' Delhi' , 'Agra ', 'Chennai '];
      const Location3 = ['Banglore', 'Delhi' , 'Agra' , 'Mumbai' ];
      const Location4 = ['Powai',' Goa', 'Bhopal', 'DelhiNCR '];

  return (
    <>
    <div className='head'><img src={suffaiimg} alt=""/></div>
    <div className='wrap'>
      <div className='Sec'>
       <div className='subSec'>
        {Location1.map( (suffai, index) => (
        <Card name={suffai} key = {index}/>
        ) )}
       </div>
       <div className='subSec'>
        {Location2.map( (suffai, index) => (
        <Card name={suffai} key = {index}/>
        ) )}
       </div>
       <div className='subSec'>
        {Location3.map( (suffai, index) => (
        <Card name={suffai} key = {index}/>
        ) )}
       </div>
       <div className='subSec'>
        {Location4.map( (suffai, index) => (
        <Card name={suffai} key = {index}/>
        ) )}
       </div>
      </div>
    </div>
    </>
  )
  }

export default Header