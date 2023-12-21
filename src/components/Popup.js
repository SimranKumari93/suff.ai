import React, { useState } from 'react'
import ShowPopup from './ShowPopup';


function Popup() {
    const [ showPopup, setShowPopup ] = useState(false)

    const closePopup = () =>{
          setShowPopup(false);
    }
    
  return (
        < >
        <button className='popup-btn' onClick={() => setShowPopup(true)}>Open Offer</button>
        {showPopup && <ShowPopup closePopup={closePopup}/>}
        </>
  ) 
} 

export default Popup
