import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Header from './components/Header.js';
import SuffList from './components/SuffList.js';
import './App.css';
import ShowPopup from './components/ShowPopup.js';
import ComingSoon from './components/ComingSoon.js';
import Bellandur from './components/Bellandur.js';
import Bannerghatta from './components/Bannerghatta.js';
import Btm from './components/Btm.js';
import Greenglen from './components/Greenglen.js';
import Hosurroad from './components/Hosurroad.js';
import Kasavanhalli from './components/Kasavanhalli.js';
import Sarajpur from './components/Sarajpur.js';
import Hsr from './components/Hsr.js';
import WashInn from './components/WashInn.js';
import WashnWear from './components/WashnWear.js';
import WashnDry from './components/WashnDry.js';
import WayToWash from './components/WayToWash.js';
import LeWash from './components/LeWash.js';
import KingDry from './components/KingDry.js';
import FabricShower from './components/FabricShower.js';
import InstaLaunromat from './components/InstaLaunromat.js';
import LaundryNest from './components/LaundryNest.js';
import LaundryBasket from './components/LaundryBasket.js';
import FlashWash from './components/FlashWash.js';
import LaundryEx from './components/LaundryEx.js';
import SmsLaundry from './components/SmsLaundry.js';
import Sancys from './components/Sancys.js';
import WashlyLaundry from './components/WashlyLaundry.js';
import FabcoPre from './components/FabcoPre.js';
import StarShine from './components/StarShine.js';
import Washhub from './components/Washhub.js';
import VrDry from './components/VrDry.js';
import MrClean from './components/MrClean.js';
import SmartDhobhi from './components/SmartDhobhi.js';
import Dorica from './components/Dorica.js';
import AirStream from './components/AirStream.js';
import Head from './components/Head.js';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Head />
    {/* <ShowPopup /> */}
    <Routes>
       
          <Route path="/" element={<Header/>} />
          {/* <Route path='/popup'element={<Popup/>}/> */}
          <Route path='showpopup'element={<ShowPopup/>}/>
          <Route path='banglore' element={<SuffList name='Banglore' myURL=''/>}/>
          <Route path='/comingsoon' element={<SuffList name='Kerala' myURL=''/>}/>
          <Route path='/comingsoon' element={<ComingSoon name='Andhra Pradesh' />} /> 
          <Route path='/comingsoon' element={<ComingSoon name='Delhi' myURL=''/>}/>
          <Route path='/comingsoon' element={<ComingSoon  name='Bhubaneshwar'/>} />
          <Route path='/comingsoon' element={<ComingSoon name='Mumbai' />} />
          <Route path='/comingsoon' element={<ComingSoon name='Agra' />} />
          <Route path='/comingsoon' element={<ComingSoon name='Chennai' myURL=''/>}/>
          <Route path='/comingsoon' element={<ComingSoon name='Jaipur' />} />
          <Route path='/comingsoon' element={<ComingSoon name='Kolkata' myURL=''/>}/>
          <Route path='/comingsoon' element={<ComingSoon name='Goa' />} />
          <Route path='/comingsoon' element={<ComingSoon name ='Bhopal' />} />
          {/**sub locations  */}
          <Route path='Banglore/bannerghatta' element={<Bannerghatta name='Bannerghatta' myURL='' />}/>
          <Route path='Banglore/bellandur' element={<Bellandur name='Bellandur' myURL='' />}/>
          <Route path='Banglore/btm' element={<Btm name='BTM'/>} myURL='' />
          <Route path='Banglore/Green Geln Layout' element={<Greenglen  myURL='' />} />
          <Route path='Banglore/Hosur Road HSR' element={<Hosurroad name='Hosur Road HSR' myURL='' />} />
          <Route path='Banglore/hsr' element={<Hsr name='HSR'/>} myURL='' />
          <Route path='Banglore/kasavanhalli' element={<Kasavanhalli  />} />
          <Route path='Banglore/Sarjarpur Road' element={<Sarajpur name='Sarajpur Road' myURL=''  />} />
          {/***sub locations for figures */}
          {/**bellandur */}
          <Route path='Banglore/Bellandur/washinn' element={<WashInn/>}/>   
          <Route path='Banglore/Bellandur/Wash n Wear' element={<WashnWear/>}/>  
          {/*bannerghatta*/} 
          <Route path='Banglore/Bannerghatta/Wash n Wear' element={<WashnWear/>}/>  
          {/**kasavanhalli */} 
          <Route path='Banglore/Kasavanhalli/Way To Wash' element={<WayToWash/>}/>   
          <Route path='Banglore/Kasavanhalli/Le Wash' element={<LeWash/>}/>   
          {/*btm*/}
          <Route path='Banglore/btm/60 minutes Wash n Dry' element={<WashnDry/>}/> {/**60 min wash n dry */}  
          <Route path='Banglore/btm/King Dry Cleaners (mom & pop)' element={<KingDry/>}/>   
          <Route path='Banglore/btm/Fabric Shower' element={<FabricShower/>}/>   
          <Route path='Banglore/btm/Insta Launromat' element={<InstaLaunromat/>}/>   
          <Route path='Banglore/btm/Laundry Nest, Anugraha Layout' element={<LaundryNest/>}/>   
          <Route path='Banglore/btm/The Laundry Basket' element={<LaundryBasket/>}/>   
          <Route path='Banglore/btm/FlashWash Laundry' element={<FlashWash/>}/>   
          <Route path='Banglore/btm/Laundry Express' element={<LaundryEx/>}/>   
          <Route path='Banglore/btm/SMS Laundry and Dry Cleaners' element={<SmsLaundry/>}/>   
          <Route path="Banglore/btm/Sancy's Laundrette" element={<Sancys/>}/>   
          <Route path='Banglore/btm/Washly Laundry' element={<WashlyLaundry/>}/>   
          {/**hsr */}
          <Route path='Banglore/HSR/Fabco Premium Laundry' element={<FabcoPre/>}/>   
          <Route path='Banglore/HSR/StarShine' element={<StarShine/>}/>   
          <Route path='Banglore/HSR/Washhub' element={<Washhub/>}/>   
          <Route path='Banglore/HSR/VR Dry Cleaner' element={<VrDry/>}/>   
          <Route path='Banglore/HSR/Mr. Clean Dry Cleaners' element={<MrClean/>}/>   
          <Route path='Banglore/HSR/Smart Dhobi' element={<SmartDhobhi/>}/>   
          <Route path='Banglore/HSR/Dorika Fabric Spa' element={<Dorica/>}/>  {/**Dorika fabric spa */} 
          <Route path='Banglore/HSR/Airstream Laundry' element={<AirStream/>}/>  {/**Dorika fabric spa */} 
          <Route path='Banglore/HSR/WashInn' element={<WashInn/>}/>   {/**washinn II */}


         <Route path='/*' element={<ComingSoon />} /> 
    </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;






















// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
