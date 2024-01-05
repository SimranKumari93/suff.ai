import React from "react";
// import Countdown from "react-countdown";
// import comingsoon from '../../src/images/comingsoon.png'
import suffai2 from '../../src/images/suffai2.png'
import { useNavigate } from "react-router-dom";
import '../styles/ComingSoon.css';
// import { Link } from 'react-router-dom'

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
   <div className="launch" style={{ backgroundColor: '#fae8ea'}}>
      <center> <img src={suffai2} alt="" /><br/><br/>

    <h1 style={{color: 'rgb(51, 60, 119)'}}>Launching Soon!</h1> <br/>
                {/* <Countdown date={timeLeft} /> */}
      <h4 style={{color: 'rgb(51, 60, 119)'}}>
        We're working hard to launch our services in your city. <br/>
        
      </h4><br/>
      
      {/* <form>
        <input type="email" placeholder="Email Address" />
        <button  type="submit">Notify Me</button><br/><br/>  onClick={() => {navigate('/Header')}} */}
        <button style={{ backgroundColor: '#333c77', textDecorationColor: 'white'}} onClick={() => {navigate(-1)}}>Home</button>
      {/* </form> */}
      </center>
    </div>
  );
};

export default ComingSoon;