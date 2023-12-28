import React from 'react'
import Cards from './Cards.js'
import '../styles/SuffList.css'
import { useNavigate } from "react-router-dom";

// import '../SuffList.css';
// import { Link } from 'react-router-dom';
// import Bannerghatta from './Bannerghatta.js';

const SuffList= () => {  //sufflist means locations of banglore 
  const navigate = useNavigate();
  const List1 =['BTM', 'Bannerghatta', 'Kasavanhalli', 'HSR']
  const List2 =['Sarjarpur Road', 'Bellandur', 'Hosur Road HSR', 'Green Geln Layout']
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
      {/* <div className="subSec">
      {List3.map((list, index) => (
        <Cards name= {list} key = {index}/>
      ))}
      </div> */}
    </div>
    <center><button  onClick={() => {navigate(-1)}}> Home</button></center>
   </div>
   {/* <Link to='/Bannerghatta' /> */}
    </>
  )
  }

export default SuffList

























// // SuffList.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// const SuffList = ({ suffs }) => {
//   return (
//     <div className="suff-list">
//       {suffs.map((suff) => (
//         <div key={suff.id} className="suff-card">
//           <img src={suff.image} alt={suff.name} />
//           <h2>{suff.name}</h2>
//           <p>{suff.cuisine}</p>
//           <Link to={`/suff/${suff.id}`}>View Details</Link>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SuffList;
