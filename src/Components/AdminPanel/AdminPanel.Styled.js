import styled from "styled-components";

export const Container = styled.div`
  height: 70vh;
  width: 100vw;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;

  button {
    background-color: red;
    color: white;
    width: 80px;
    height: 30px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    transition: 500ms ease;
    &:hover {
      scale: 1.1;
    }
  }

  input {
    width: 150px;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid black;
    color: black;
  }
`;

export const CreatePagesDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  height: 100%;
  border-right: 2px solid blue;
  gap: 10px;
`;

export const PagesArray = styled(CreatePagesDiv)`
  border: none;
  overflow: hidden;
  gap: 0;
`;

export const Inputs = styled.div`
  display: flex;
`;

export const ItemDIv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
