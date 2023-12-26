import React from 'react'
import Cards from './Cards.js'
import '../styles/SuffList.css'

function Bellandur() {
    const List1 = ['WashInn', 'Wash n Wear', ]
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
export default Bellandur