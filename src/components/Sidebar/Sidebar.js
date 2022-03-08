import React from "react";
import { NavLink } from "react-router-dom";
import { Container, NL, Wrapper } from "./Sidebar.styled";
import { FiCircle, FiHome } from "react-icons/fi";

const Sidebar = () => {
  return (
    <Container>
      <Wrapper>
        <NL>
          <NavLink to="/">
            <FiHome size={24} />
          </NavLink>
        </NL>
        <NL>
          <NavLink to="/example">
            <FiCircle size={24} />
          </NavLink>
        </NL>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
