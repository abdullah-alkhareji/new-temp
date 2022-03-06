import React from "react";
import { NavLink } from "react-router-dom";
import { Container, NL, Wrapper } from "./Sidebar.styled";

const Sidebar = () => {
  return (
    <Container>
      <Wrapper>
        <NL>
          <NavLink to="/">Home</NavLink>
        </NL>
        <NL>
          <NavLink to="/example">Example</NavLink>
        </NL>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
