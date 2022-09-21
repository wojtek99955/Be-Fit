import styled from "styled-components";
import { ImCheckmark } from "react-icons/im";
import { Button, StyledField } from "../AccountSettingsStyle";

interface DarkMode {
  darkMode: boolean;
}

export const DeleteButton = styled(Button)`
  background-color: #e1605e;
  color: white;
  margin: 1rem 0;
  width: 8rem;
  height: 3rem;
  &:hover {
    background-color: #e88886;
  }
  &:active {
    background-color: #d83330;
  }
`;

export const PasswordField = styled(StyledField)<DarkMode>`
  width: auto;
  color: ${({ darkMode }) => (darkMode ? "white" : "black")};
`;

export const Delete = styled.div``;
export const Password = styled.div<DarkMode>`
  p {
    margin-bottom: 1rem;
  }
  input {
    font-size: 1rem;
    padding: 0.3rem;
    background-color: transparent;
    color: ${({ darkMode }) => (darkMode ? "white" : "black")};
    border-radius: 5px;
    height: 3rem;
    display: block;
    margin-bottom: 1rem;
    border: ${({ darkMode }) =>
      darkMode
        ? "2px solid hsla(0,0%,100%,0.2)"
        : "2px solid rgba(43, 59, 74, 0.3)"};

    &:focus {
      border: 2px solid #ffa101;
      outline: none;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  input {
    margin-bottom: 0;
  }
`;

export const CorrectIcon = styled(ImCheckmark)`
  font-size: 1.5rem;
  color: green;
  margin-left: 1rem;
`;
export const LoaderContainer = styled.span``;

export const StyledButton = styled(Button)`
  width: 8rem;
  height: 3rem;
  margin-left: 0;
  margin-bottom: 1rem;
  background-color: #ffa101;
  color: white;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
`;

export const EditPasswordBtn = styled.button<DarkMode>`
  padding: 0 1rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  background-color: ${({ darkMode }) => (darkMode ? "#2C2D2E" : "#F3F4F6")};
  cursor: pointer;
  height: 3rem;
  display: block;
  margin-left: 1rem;
  color: ${({ darkMode }) => (darkMode ? "white" : "black")};
  &:hover {
    background-color: ${({ darkMode }) => (darkMode ? "#424243" : "#f2f3f5")};
  }
  &:active {
    background-color: ${({ darkMode }) => (darkMode ? "#4E5051" : "#bec3ce")};
  }
`;
