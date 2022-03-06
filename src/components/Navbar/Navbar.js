import React from "react";
import { Left, Logo, Right, Title, Wrapper } from "./Navbar.styled";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <div className="navbar navbar-expand-lg">
      <div className="container">
        <Wrapper>
          <Left>
            <Logo src={logo} />
            <Title>
              <b>Social</b>Firm
            </Title>
          </Left>
          <Right></Right>
        </Wrapper>
      </div>
    </div>
  );
};

export default Navbar;
