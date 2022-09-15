import styled from "styled-components";
import { StyledField } from "../AccountSettingsStyle";
import { CgCloseO } from "react-icons/cg";

interface DarkMode {
  darkMode: boolean;
}

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div<DarkMode>`
  background-color: ${({ theme, darkMode }) =>
    darkMode ? theme.darkMode.light : "white"};
  padding: 1.5rem;
  border-radius: 8px;
  position: relative;
  h1 {
    max-width: 20rem;
    text-align: center;
    margin-top: 1rem;
    color: ${({ darkMode }) => (darkMode ? "white" : "black")};
  }
  button {
    border: none;
    display: block;
    background-color: green;
    margin: auto;
    padding: 1rem 2rem;
    margin-top: 5rem;
    color: white;
    background-color: #ffa101;
    cursor: pointer;
    &:hover {
      background-color: #cf8300;
    }
  }
`;

export const PasswordField = styled(StyledField)`
  margin: auto;
  margin-top: 3rem;
`;

export const DeleteBtns = styled.div<DarkMode>`
  display: flex;
  gap: 1rem;

  button {
    border-radius: 5px;

    &:first-child {
      background-color: transparent;
      color: ${({ darkMode }) => (darkMode ? "white" : "black")};
      border: 2px solid #e1605e;
      &:hover {
        background-color: #e1605e;
        color: white;
      }
    }
  }
`;

export const LoaderContainer = styled.span``;

export const FieldContainer = styled.div`
  input {
    width: 100%;
    margin-bottom: 0.5rem;
  }
`;

export const CloseIcon = styled(CgCloseO)<DarkMode>`
  font-size: 1.2rem;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  cursor: pointer;
  padding: 0.5rem;
  box-sizing: content-box;
  color: ${({ darkMode }) => (darkMode ? "white" : "#555555")};
`;
