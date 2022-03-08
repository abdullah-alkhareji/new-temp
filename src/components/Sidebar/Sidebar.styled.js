import styled from "styled-components";

export const Container = styled.div`
  /* height: 100%; */
  padding: 0;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  /* width: 60px; */
  background: #fff;
  /* height: 100%; */
  max-width: 100%;
  position: fixed;
  bottom: 0;
  height: max-content;
  border-radius: 1rem 1rem 0 0;
  display: flex;
  flex-direction: row;
  overflow: auto;
  box-shadow: 0 0 6px 0px rgba(0, 0, 0, 0.3);
`;

export const NL = styled.div`
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  padding: 1rem;
`;
