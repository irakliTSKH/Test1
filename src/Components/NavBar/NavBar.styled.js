import styled from "styled-components";

export const NavDiv = styled.div`
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: center;
  ul {
    display: flex;
    align-items: center;
    width: 100vw;

    a {
      color: white;
      text-decoration: none;
      margin-left: 30px;
      font-size: 20px;
    }
    a.active {
      background-color: red;
    }
  }
`;

export const AdminButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  width: 100px;
  height: 50px;
  color: white;
  background-color: red;
`;
