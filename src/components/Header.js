import React from 'react'
import Card from './Card.js';
import india from '../../src/images/india.png' 
import suffhomeb from '../../src/images/suffhomeb.png'
import '../styles/Footer.css'
import { FaLinkedin, FaYoutube, FaInstagram, FaTwitter, FaFacebook  } from 'react-icons/fa'; 
//import { Link } from 'react-router-dom';



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
     <footer className="site-footer">
      <div className="footer-grid about-us">
        <h3>About Us</h3>
        <p>Some information about your company...</p>
      </div>
      <div className="footer-grid head-office">
        <h3>Head Office</h3>
        <p>123 Main Street, City, Country</p>
      </div>
      <div className="footer-grid career">
        <h3>Career</h3>
        <p>Join our team! View open positions...</p>
      </div>
      <div className="footer-grid social-media">
        <h3>Social Media</h3>
        <div>
                <a href="https://www.instagram.com/suff.ai/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer">
                <FaInstagram className='icons'/></a>
                <a href="https://www.instagram.com/suff.ai/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer">
                <FaYoutube className='icons'/></a>
                <a href="https://www.instagram.com/suff.ai/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer" >
                <FaLinkedin className='icons'/></a>
                <a href="https://www.instagram.com/suff.ai/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer">
                <FaTwitter className='icons'/></a>
                <a href="https://www.instagram.com/suff.ai/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer">
                <FaFacebook className='icons'/></a>
            </div>
      </div>
    </footer>
    </div>
  
    </>
  )
  }

export default Header