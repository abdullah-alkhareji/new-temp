import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Example from "./pages/Example/Example";
import Home from "./pages/Home/Home";

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Main = styled.div`
  height: 100%;
`;

const Left = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
const Right = styled.div``;

const App = () => {
  return (
    <AppContainer>
      <Navbar />
      <Main className="container-fluid">
        <Main className="row">
          <Left className="col-md-2 col-sm-12 p-0">
            <Sidebar />
          </Left>
          <Right className="col-md-10 col-sm-12 p-0">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/example" element={<Example />} />
            </Routes>
          </Right>
        </Main>
      </Main>
    </AppContainer>
  );
};

export default App;
