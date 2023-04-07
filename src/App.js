import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import SideBar from "./Components/SideBar";
import Container from "./Components/Container";
import Signin from "./Components/Signin/Signin";
import { Route,Router,Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';

// Create a QueryClient instance
const queryClient = new QueryClient();
function App() {
  const [show, setShow] = useState(false);
  return (
    <QueryClientProvider client={queryClient}>

    <div className="App">
      <div className="wrapper">
        
          <Routes>
            <Route
              path="/home"
              element={
                <>
                  <React.Fragment>
                    <SideBar show={show} setShow={setShow} />
                  </React.Fragment>
                  <React.Fragment>
                    <Container show={show} setShow={setShow} />
                  </React.Fragment>
                </>
              }
            />
               <Route  path="/"  element={<Signin/>}/>
          </Routes>
        
      </div>
    </div>
    </QueryClientProvider>
  );
}

export default App;
