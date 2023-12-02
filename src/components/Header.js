import React from 'react'
import Card from './Card.js';
import suffaiimg from '../../src/images/suffaiimg.png'
import india from '../../src/images/india.png' 
import Background from '../../src/images/Background.png'
// import login from '../../src/images/login.png'
// import signup from '../../src/images/signup.png'

const Header = () => {
      const Location1 = ['Banglore', 'Delhi', 'Agra', 'Kolkata'];
      const Location2 = ['Banglore','Delhi' , 'Chennai' , 'Goa'];
      const Location3 = ['Banglore', 'Delhi' , 'Mumbai' , 'Bhopal'];
      // const Location4 = [ 'Goa', 'Bhopal', 'Delhi'];

  return (
    <>
    <div className='head'><img src={suffaiimg} alt=""/>
    {/* <img src={login} alt=""/>
    <img src={signup} alt=""/> */}
    </div>
   <img alt="" src={Background}></img>
    <center><h2 className='shops-1'>Our Trusted Service Provider <img alt="" src={india}></img> India </h2></center>
    <center><h4 className='shops-2'>Because your clothes deserve better.<br/>
    From us and ours, to you and your clothes!<br/>
    Batt(l)ing against the wind- the superwoman way.<br/>
    Which is why we wouldn't want you to waste yours on laundry either.<br/>
    Needless to say, we're huge fans of saving time and money as much as possible.<br/></h4></center>
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