import React from 'react'
import Cards from './Cards.js'
import '../styles/SuffList.css'
import { useNavigate } from "react-router-dom";

// import { Link } from 'react-router-dom'

function Sarajpur() {
  const navigate = useNavigate();

        const List1 = ['WashInn', 'Fabrocare', 'Dr Fabric', 'Vijay Laundry']
        const List2 = ['BLUEWash', 'Clothcare', 'New Elite Laundry', 'le Wash']
         const List3 = ['Wash n Wear']
    return (
        <>
       <div className="wrap">
        <div className="Sec">
          <div className="Subsec">
          {List1.map((list, index) => (
            <Cards name= {list} key = {index}/>
          ))}
          </div>
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
  
export default Sarajpur