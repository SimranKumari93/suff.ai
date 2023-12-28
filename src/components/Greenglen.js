import React from 'react'
import Cards from './Cards.js'
import '../styles/SuffList.css'

function Greenglen() {
    const List1 = ['Royal KP Dry Clean', 'NJ Laundroma']
    return (
        <>
       <div className="wrap">
        <div className="Sec">
          <div className="Subsec">
          {List1.map((list, index) => (
            <Cards name= {list} key = {index}/>
          ))}
          </div>
          {/* <div className="subSec">
          {List2.map((list, index) => (
            <Cards name= {list} key = {index}/>
          ))}
          </div>
          <div className="subSec">
          {List3.map((list, index) => (
            <Cards name= {list} key = {index}/>
          ))}
          </div> */}
        </div>
       </div>
        </>
      )
      }
export default Greenglen