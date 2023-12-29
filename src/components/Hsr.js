import React from 'react'
import Cards from './Cards.js'
import '../styles/SuffList.css'
import { useNavigate } from "react-router-dom";

function Hsr() {
  const navigate = useNavigate();

    const List3 = ['WashInn', 'Mr. Clean Dry Cleaners', 'Dorika Fabric Spa', 'Airstream Laundry',]
    const List2 = ['Fabco Premium Laundry', 'StarShine', 'Washhub', 'VR Dry Cleaner', 'Smart Dhobi']
   
    return (
    <>
   <div className="wrap">
    <div className="Sec">
      {/* <div className="Subsec">
      {List1.map((list, index) => (
        <Cards name= {list} key = {index}/>
      ))}
      </div> */}
      <div className="subSec">
      {List2.map((list, index) => (
        <Cards name= {list} key = {index}/>
      ))}
      </div>
      <div className="subSec">
      {List3.map((list, index) => (
        <Cards name= {list} key = {index}/>
      ))}
      </div>
    </div>
    <div>
        <center><button  onClick={() => {navigate('/Header')}}> Home</button>&nbsp;
        &nbsp;<button  onClick={() => {navigate(-1)}}>Back</button></center>
        </div>
   </div>
    </>
  )
  }

export default Hsr