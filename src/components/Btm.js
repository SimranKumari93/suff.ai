import React from 'react'
import Cards from './Cards.js'
import '../styles/SuffList.css'

function Btm() {
    const List1 = ['60 minutes Wash n Dry', 'King Dry Cleaners (mom & pop)','Fabric Shower','Fabric Shower']
    const List2 = ['Insta Launromat', 'Laundry Nest, Anugraha Layout', 'The Laundry Basket', 'Washly Laundry']
    const List3 = ['FlashWash Laundry', 'Laundry Express', 'SMS Laundry and Dry Cleaners', "Sancy's Laundrette"]
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
          <div className="subSec">
          {List3.map((list, index) => (
            <Cards name= {list} key = {index}/>
          ))}
          </div>
        </div>
       </div>
        </>
      )
      }
export default Btm