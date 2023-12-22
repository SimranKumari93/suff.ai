import React from 'react'
import Card from './Card.js';
import india from '../../src/images/india.png' 
import suffhomeb from '../../src/images/suffhomeb.png'
import { FaLinkedin, FaYoutube, FaInstagram, FaTwitter, FaFacebook  } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';
// import GridLayout from "react-grid-layout";


const Header = () => {
      const Location1 = ['Banglore', 'Delhi', 'Agra', 'Kolkata'];
      const Location2 = ['Kerala','Bhubaneshwar' , 'Chennai' , 'Goa'];
      const Location3 = ['Andhra Pradesh', 'Mumbai' , 'Jaipur' , 'Bhopal'];

  return (
    <>
    {/* <div className='head'><img src={suffaiimg} alt=""/> */}
    {/* <button >Login</button>
    <button>Sign Up</button> */}
    {/* </div> */}
   <img alt="" src={suffhomeb}></img>
    <center><h2 className='shops-1'>Our Trusted Service Provider <img alt="" src={india}></img> India </h2></center>
    <center><h4 className='shops-2'>From us and ours, to you and your clothes!<br/>
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
       </div>
     {/**footer section */}
     <footer>
        <div className='container'>
            <div className='footer-about'>       {/**1st column */}
            <h2><Link to="">SUFF.AI</Link></h2>
            <p>ABOUT SUFFAI</p>
            <ul>
            <li>Who We Are</li>
            <li>Work With Us</li>
            <li>Investor Relation</li>
            </ul>
                </div>
      {/**2nd column */} 
      <div className='footer-contact'>
        <p><b>Head Office</b></p>
        <p>1st Floor, Redsquare, PU3
          <p>Commercial Scheme no 54, </p> 
         <p> Opposite C21 Mall, Indore, MP- 452001</p>
         </p>
        <h3>Call Us</h3>
        <h3>+91 7022952746</h3>
        </div> 
      {/**3rd column */} 
      <div className='footer-details'>
      <p><b>Quick Links</b></p>
      <ul>
        <li>Contact  </li>
        <li>FAQs </li>
        <li>Locations  </li>
        <li>Privacy Policy</li>
        <li>Career</li>
      </ul>
      </div>
     {/**4th column */}
     <div className='footer-partner'>  
            <p><b>Subscribe Now</b></p>
            <form action="">
                <input type='email' required autoComplete='off' placeholder='Your-email'/><br/>
                <input type='submit' value="Subscribe"/>
            </form>
            <div className='footer-social'>
            <h3>Follow Us</h3> 
            <div className='social--icons'> </div>
            <div>
                <Link to="https://www.instagram.com/suff.ai/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="/>
                <FaInstagram className='icons'/>
                <Link to="https://www.instagram.com/suff.ai/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==" />
                <FaYoutube className='icons'/>
                <Link to="https://www.instagram.com/suff.ai/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==" />
                <FaLinkedin className='icons'/>
                <Link to="https://www.instagram.com/suff.ai/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==" />
                <FaTwitter className='icons'/>
                <Link to="https://www.instagram.com/suff.ai/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==" />
                <FaFacebook className='icons'/>
            </div>
                </div>
                </div>
     <div className='footer-bottom--section'>   {/**bottom section */}
        <div className='container-2'>    
          <center><p> @{new Date().getFullYear()} suff.ai. All Rights Reserved</p>
            <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
                </center>
            </div>
            </div> 
            </div>
    </footer>
    </div>
  
    </>
  )
  }

export default Header