import logo from './logo.svg';
import React from 'react';
import './App.css';
import SideBar from './Components/SideBar';
import Container from './Components/Container';
function App() {
  return (
    <div className="App">
      <div className='wrapper'>
      <React.Fragment>
         <SideBar/>
      </React.Fragment>
      <React.Fragment>
         {/* <SideBar/> */}
         <Container/>
      </React.Fragment>
      </div>
     
   
    </div>
  );
}

export default App;
