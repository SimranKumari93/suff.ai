import React from 'react'

function SuffList() {
  return (
    <div>SuffList</div>
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
