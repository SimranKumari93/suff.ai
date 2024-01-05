import React from 'react'
import { useNavigate } from 'react-router-dom'
function About() {
    const navigate = useNavigate();
  return (
    <div>
        <p> 
            Suff.ai is a unique service provider company that brings together customers
            and laundry service providers, offering a wide range of laundry solutions.
             Through this web app, users can easily find the right laundry expert and compare prices using the search and discovery features,
            all from the convenience of their mobile phones. At present, Suff.ai operates in Bangalore only,
               but there are plans to expand its services across India soon.
        </p>
        <div>
        <center><button  onClick={() => {navigate('/Header')}}> Home</button>&nbsp;
        &nbsp;<button  onClick={() => {navigate(-1)}}>Back</button></center>
        </div>
    </div>
  )
}

export default About