// App.js
import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Header from './components/Header.js';
import SuffList from './components/SuffList.js';
import './App.css';
import Login from './components/Login'
import Footer from './components/Footer.js';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<Header/>} />
         
          <Route path='all' element={<SuffList name='' myURL=''/>}/>
          <Route path='Banglore' element={<SuffList name='Banglore' myURL=''/>}/>
          <Route path='Delhi' element={<SuffList name='Delhi' myURL=''/>}/>
          <Route path='Agra' element={<SuffList name='Agra' myURL=''/>}/>
          <Route path='Kolkata' element={<SuffList name='Kolkata' myURL=''/>}/>
          <Route path='all' element={<SuffList name='' myURL=''/>}/>
          <Route path='all' element={<SuffList name='' myURL=''/>}/>
          <Route path='all' element={<SuffList name='' myURL=''/>}/>
         
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
