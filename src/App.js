import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Navbar/Sidebar/Sidebar";
import Clients from "./pages/Clients/Clients";
import Home from "./pages/Home/Home";

const AppContainer = styled.div`
  height: 100vh;
`;

const Main = styled.div`
  height: 100%;
`;

const App = () => {
  return (
    <AppContainer>
      <Navbar />
      <Main className="container">
        <Main className="row">
          <div className="col-md-3 col-sm-12 bg-primary">
            <Sidebar />
          </div>
          <div className="col-md-9 col-sm-12 bg-dark">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/clients" element={<Clients />} />
            </Routes>
          </div>
        </Main>
      </Main>
    </AppContainer>
  );
};

export default App;
