import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Header from './components/Header.js';
import SuffList from './components/SuffList.js';
import './App.css';
// import Login from './components/Login'
// import Footer from './components/Footer.js';
// import Popup from './components/Popup.js';
import ShowPopup from './components/ShowPopup.js';
import ComingSoon from './components/ComingSoon.js';

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
          <Route path='/comingsoon' element={<ComingSoon name='jaipur' />} />
          <Route path='/comingsoon' element={<ComingSoon name='Kolkata' myURL=''/>}/>
          <Route path='/comingsoon' element={<ComingSoon name='Goa' />} />
          
          <Route path='/comingsoon' element={<ComingSoon name ='Bhopal' />} />
          {/* <Route path='/comingsoon' element={<ComingSoon />} />
          <Route path='/comingsoon' element={<ComingSoon />} />
          <Route path='/comingsoon' element={<ComingSoon />} />

          
          <Route path='all' element={<SuffList name='' myURL=''/>}/>
          <Route path='all' element={<SuffList name='' myURL=''/>}/>
          <Route path='agra' element={<ComingSoon/>}/> */}
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
