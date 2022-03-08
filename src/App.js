import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./components/Sidebar/Sidebar";
import Example from "./pages/Example/Example";
import Home from "./pages/Home/Home";

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  /* overflow: hidden; */
`;

const Container = styled.div`
  height: 100%;
  padding: 0;
`;

const Main = styled.div`
  /* padding-left: 70px; */
  height: 100%;
  padding: 1rem;
`;

const App = () => {
  return (
    <AppContainer>
      <Container className="container-fluid">
        <Sidebar />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/example" element={<Example />} />
          </Routes>
        </Main>
      </Container>
    </AppContainer>
  );
};

export default App;
