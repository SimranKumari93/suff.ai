import React from 'react'
import '../styles/WashInn.css'

function FabcoPre() {
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


export default FabcoPre