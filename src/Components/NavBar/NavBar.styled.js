import styled from "styled-components";

export const NavDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  border-bottom: 2px solid white;

  ul {
    display: flex;
    align-items: center;
    width: 90vw;

    a {
      color: white;
      text-decoration: none;
      margin-left: 30px;
      font-size: 20px;
      padding: 5px;
    }

    a.active {
      background-color: red;
    }
  }
`;

export const AdminButton = styled.button`
  position: relative;
  right: 0;
  top: 0;
  width: 50px;
  height: 50px;
  color: white;
  background-color: red;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    scale: 1.1;
    background-color: white;
    color: red;
    transition: 1s ease;
  }
`;
