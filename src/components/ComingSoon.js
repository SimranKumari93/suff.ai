import React from "react";
// import Countdown from "react-countdown";
// import comingsoon from '../../src/images/comingsoon.png'
import suffai from '../../src/images/suffai.png'
import { useNavigate } from "react-router-dom";
import '../styles/ComingSoon.css'

const ComingSoon = () => {
  const navigate = useNavigate();
  // const [ canGoBack, setCanGoBack ] = useState(false);
  // const [timeLeft, setTimeLeft] = React.useState(new Date("2023-12-31T00:00:00"));
  // useEffect(() =>{
  //   setCanGoBack(navigate.canGoBack())
  // }, [navigate])
  // const handleClick = () => {
  //   // Use the navigate function to navigate to a different route
  //   navigate('/Header');
  // };
  return (
   <div className="launch">
      <center> <img src={suffai} alt="" />

    <h1 style={{color: 'rgb(51, 60, 119)'}}>Launching Soon!</h1> <br/>
                {/* <Countdown date={timeLeft} /> */}
      <h4 style={{color: 'rgb(51, 60, 119)'}}>
        We're working hard to launch our services in your city. <br/>
        Sign up for our email list to be the first to know when we're available!
      </h4><br/>
      
      {/* <form>
        <input type="email" placeholder="Email Address" />
        <button  type="submit">Notify Me</button><br/><br/> */}
        <button  onClick={() => {navigate('/Header')}}> Home</button>
      {/* </form> */}
      </center>
    </div>
  );
};

export default ComingSoon;