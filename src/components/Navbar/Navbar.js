import React, { useState } from "react";
import {
  CloseIcon,
  Left,
  Logo,
  Menu,
  MenuIcon,
  Nav,
  Right,
  Title,
  Wrapper,
} from "./Navbar.styled";
import logo from "../../assets/images/logo.png";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Nav className="">
        <div className="container-fluid">
          <Wrapper>
            <Left>
              <Logo src={logo} />
              <Title>
                <b>App</b>Name
              </Title>
            </Left>
            <Right>
              <MenuIcon onClick={() => setIsOpen(true)} />
            </Right>
          </Wrapper>
        </div>
      </Nav>
      <Menu className={isOpen ? "open" : ""}>
        <CloseIcon onClick={() => setIsOpen(false)} />
        <Sidebar />
      </Menu>
    </>
  );
};

export default Navbar;
