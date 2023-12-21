import React, { useEffect } from 'react'

function ShowPopup( {closePopup }) {
  useEffect(() => {
  document.body.style.overflowY = "hidden"
    return() => {
      document.body.style.overflowY = "scroll";
    }
  }, [])
    // const [ showPopup, setShowPopup ] = useState(false)
  return (
    <>
    <div className="popup-wrapper" onClick={closePopup}></div>
    <div className='popup-container'>
    <p>Stay Tunned </p>
        <p> Flat 20% OFF on first order</p>
        {/* <button onClick={() => setShowPopup(false)}>Order Now </button>  */}
        <button className="popup-btn" onClick={closePopup}>Close</button>  
        </div>
    </>
  )
}

export default ShowPopup