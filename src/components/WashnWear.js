import React from 'react'

function WashnWear() {
    const figures = [
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        // Add more image URLs as needed
      ];  
  return (
    <>
    <div className="grid-container">
      {figures.map((figure, index) => (
        <img key={index} src={figure} alt={`Figure ${index + 1}`} />
      ))}
    </div>

    </>
  )
}

export default WashnWear