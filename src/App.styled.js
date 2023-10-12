import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    90deg,
    rgba(36, 29, 156, 1) 0%,
    rgba(0, 182, 219, 1) 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Footer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  text-align: center;
  a {
    text-decoration: none;
    color: white;
  }
`;
