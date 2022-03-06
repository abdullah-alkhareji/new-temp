import { HiMenu } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";

export const Nav = styled.nav`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  height: 80px;

  @media (min-width: 992px) {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 1rem;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: 40px;
`;

export const Title = styled.p`
  font-size: 1.5rem;
  text-transform: uppercase;
  margin-left: 1rem;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuIcon = styled(HiMenu)`
  font-size: 32px;

  @media (min-width: 768px) {
    display: none;
  }
`;
export const CloseIcon = styled(FaTimes)`
  font-size: 32px;
  position: absolute;
  top: 30px;
  right: 30px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Menu = styled.div`
  transform: translateX(200%);
  transition: all 300ms ease-in-out;
  background: #fff;
  z-index: 100;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 70%;
  right: 0;
  padding-top: 80px;

  &.open {
    transform: translateX(0);
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
