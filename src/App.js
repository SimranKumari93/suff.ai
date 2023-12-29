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


const App = () => {
  return (
    <>
    <BrowserRouter>
   
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
          <Route path='Banglore/greenglen' element={<Greenglen name='Green Geln Layout' myURL='' />} />
          <Route path='Banglore/hosurroad' element={<Hosurroad name='Hosur Road HSR' myURL='' />} />
          <Route path='Banglore/hsr' element={<Hsr name='HSR'/>} myURL='' />
          <Route path='Banglore/kasavanhalli' element={<Kasavanhalli  />} />
          <Route path='Banglore/sarajpur' element={<Sarajpur name='Sarajpur Road' myURL=''  />} />
          {/***sub locations for figures */}
          {/**bellandur */}
          <Route path='Banglore/Bellandur/washinn' element={<WashInn/>}/>   
          <Route path='Banglore/Bellandur/washnwear' element={<WashnWear/>}/>  
          {/*bannerghatta*/} 
          <Route path='Banglore/Bannerghatta/washnwear' element={<WashnWear/>}/>  
          {/**kasavanhalli */} 
          <Route path='Banglore/Kasavanhalli/waytowash' element={<WayToWash/>}/>   
          <Route path='Banglore/Kasavanhalli/lewash' element={<LeWash/>}/>   
          {/*btm*/}
          <Route path='Banglore/btm/washndry' element={<WashnDry/>}/> {/**60 min wash n dry */}  
          <Route path='Banglore/btm/kingdrycleaner' element={<KingDry/>}/>   
          <Route path='Banglore/btm/fabricshower' element={<FabricShower/>}/>   
          <Route path='Banglore/btm/instalauren' element={<InstaLaunromat/>}/>   
          <Route path='Banglore/btm/laundrynest' element={<LaundryNest/>}/>   
          <Route path='Banglore/btm/laundrybasket' element={<LaundryBasket/>}/>   
          <Route path='Banglore/btm/flashwash' element={<FlashWash/>}/>   
          <Route path='Banglore/btm/laundryexpress' element={<LaundryEx/>}/>   
          <Route path='Banglore/btm/smslaundry' element={<SmsLaundry/>}/>   
          <Route path='Banglore/btm/sancys' element={<Sancys/>}/>   
          <Route path='Banglore/btm/washly' element={<WashlyLaundry/>}/>   
          {/**hsr */}
          <Route path='Banglore/HSR/fabcopremium' element={<FabcoPre/>}/>   
          <Route path='Banglore/HSR/starshine' element={<StarShine/>}/>   
          <Route path='Banglore/HSR/washhub' element={<Washhub/>}/>   
          <Route path='Banglore/HSR/vrdrycleaner' element={<VrDry/>}/>   
          <Route path='Banglore/HSR/mrdrycleaner' element={<MrClean/>}/>   
          <Route path='Banglore/HSR/smartdhobhi' element={<SmartDhobhi/>}/>   

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
