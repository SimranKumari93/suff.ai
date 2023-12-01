import React from 'react'
import Card from './Card.js';
import suffaiimg from '../../src/images/suffaiimg.png'
import india from '../../src/images/india.png' 
import Background from '../../src/images/Background.png'

const Header = () => {
      const Location1 = ['Banglore', 'Delhi', 'Agra', 'Kolkata'];
      const Location2 = ['Banglore','Delhi' , 'Chennai' , 'Goa'];
      const Location3 = ['Banglore', 'Delhi' , 'Mumbai' , 'Bhopal'];
      // const Location4 = [ 'Goa', 'Bhopal', 'Delhi'];

  return (
    <>
    <div className='head'><img src={suffaiimg} alt=""/></div>
    <marquee><img alt="" src={Background}></img></marquee>
    <center><h2 className='shops'>Our Trusted Shops<img alt="" src={india}></img>India </h2></center>
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
       {/* <div className='subSec'>
        {Location4.map( (suffai, index) => (
        <Card name={suffai} key = {index}/>
        ) )}
       </div> */}
      </div>
    </div>
    </>
  )
  }

export default Header