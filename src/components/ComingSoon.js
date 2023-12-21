import React, { useEffect, useState } from "react";
// import Countdown from "react-countdown";
// import comingsoon from '../../src/images/comingsoon.png'
import suffai from '../../src/images/suffai.png'
import { useNavigate } from "react-router-dom";

const ComingSoon = () => {
  const navigate = useNavigate();
  const [ canGoBack, setCanGoBack ] = useState(false);
  // const [timeLeft, setTimeLeft] = React.useState(new Date("2023-12-31T00:00:00"));
  useEffect(() =>{
    setCanGoBack(navigate.canGoBack())
  }, [navigate])
  const handleClick = () => {
    // Use the navigate function to navigate to a different route
    navigate('/Header');
  };
  return (
   <div className="launch">
      <center> <img src={suffai} alt="" />

    <h1>Launching Soon!</h1> 
                {/* <Countdown date={timeLeft} /> */}
      <p>
        We're working hard to launch our services in your city. Sign up for our email
        list to be the first to know when we're available!
      </p>
      
      <form>
        <input type="email" placeholder="Email Address" />
        <button type="submit">Notify Me</button><br/><br/>
        <button disabled={!canGoBack} onClick={() => navigate(-1)}>Back to Home</button>
      </form>
      </center>
    </div>
  );
};

export default ComingSoon;