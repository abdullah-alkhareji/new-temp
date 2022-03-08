import styled from "styled-components";

export const Btn = styled.button`
  outline: none;
  border: none;
  background: #fff;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  padding: 0.5rem 1.5rem;
  border-radius: 2rem;
  color: #bbb;
  text-transform: uppercase;
  font-weight: bold;
  transition: all 0.15s ease-in-out;
  &:hover {
    background: #d1d1d1;
    color: #fff;
  }
`;

export const Input = styled.input`
  width: 100%;
  margin: 1rem 0 0;
  height: 40px;
  border-radius: 20px;
  outline: none;
  border: none;
  background: #f3f3f3;
  padding: 0 1rem;
`;
