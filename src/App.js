import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import SideBar from './Components/SideBar';
import Container from './Components/Container';
function App() {
  const [show, setShow] = useState(true)
  return (
    <div className="App">
      <div className='wrapper'>
      <React.Fragment>
         <SideBar   show={show} setShow={setShow}/>
      </React.Fragment>
      <React.Fragment>
         <Container  show={show} setShow={setShow}/>
      </React.Fragment>
      </div>
     
   
    </div>
  );
}

export default App;
