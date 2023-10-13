import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${(props) =>
    props.mode
      ? "black"
      : "linear-gradient(90deg,rgba(36, 29, 156, 1) 0%,rgba(0, 182, 219, 1) 100%)"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  /* height: 50px; */
  text-align: center;
  a {
    text-decoration: none;
    color: white;
  }
`;

export const ModeDiv = styled.div`
  top: 0;
  margin: 10px;
  label {
    width: 70px;
    height: 30px;
    padding: 5px;
    position: relative;
    display: block;
    background: #ebebeb;
    border-radius: 20px;
    cursor: pointer;
  }
  label:after {
    content: "";
    width: 30px;
    height: 30px;
    position: absolute;
    background: linear-gradient(180deg, #ffcc89, #d8860b);
    border-radius: 50%;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  }
  input:checked + label {
    background: #242424;
  }
  input:checked + label:after {
    left: 40px;
    background: linear-gradient(180deg, #777, #3a3a3a);
  }
  label,
  label:after {
    transition: 0.3s;
  }

  input {
    visibility: hidden;
  }
`;
