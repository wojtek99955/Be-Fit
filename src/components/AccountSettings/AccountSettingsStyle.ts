import { Field } from "formik";
import styled from "styled-components";
import { device } from "../../assets/mediaQueries/device";

interface StyleProps {
  save?: boolean;
  darkMode?: boolean;
}
interface ImageProps {
  url?: any;
  file?: string;
}

interface DarkMode {
  darkMode: boolean;
}

export const Container = styled.section<DarkMode>`
  margin-top: 2rem;
  width: 90%;
  @media ${device.tablet} {
    width: 40rem;
  }
  margin-left: 1rem;
  margin-right: 1rem;
  h2 {
    margin-bottom: 3rem;
    color: ${({ darkMode }) => (darkMode ? "white" : "black")};
  }
  h3 {
    margin: 1.3rem 0;
    color: ${({ darkMode }) => (darkMode ? "white" : "black")};
  }
  :not(first-of-type)input {
    width: 90%;
    font-size: 1rem;
    padding: 0.3rem;
    border: 1px solid #55595b;
    border-radius: 5px;
    height: 2.5rem;
    display: block;
  }
  p {
    color: ${({ darkMode }) => (darkMode ? "white" : "black")};
  }
  span {
    color: ${({ darkMode }) => (darkMode ? "white" : "black")};
  }
  hr {
    border: none;
    margin: 0;
    height: 1px;
    border-bottom: ${({ darkMode }) =>
      darkMode ? "1px solid hsla(0, 0%, 100%, 0.1)" : "1px solid #e1e4e7"};
  }
`;
export const ImageContainer = styled.div`
  position: relative;
`;

export const Image = styled.div<ImageProps>`
  width: 4rem;
  height: 4rem;
  @media ${device.tablet} {
    width: 6rem;
    height: 6rem;
  }
  border-radius: 50%;
  background-color: #ffa101;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2rem;
  position: relative;
  background-image: ${({ url }) => url && `url(${url})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const PreviewImage = styled.div<ImageProps>`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: #ffa101;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2rem;
  position: relative;
  background-image: ${({ file }) => file && `url(${file})`};
`;

export const Button = styled.button<StyleProps>`
  padding: 0 1rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  min-width: 5rem;
  transition: background-color 300ms;
  background-color: ${({ darkMode }) => (darkMode ? "#2C2D2E" : "#F3F4F6")};
  cursor: pointer;
  height: 2.8rem;
  margin-left: 1rem;
  color: ${({ darkMode }) => (darkMode ? "white" : "black")};
  &:hover {
    background-color: ${({ darkMode }) => (darkMode ? "#424243" : "#E4E7E9")};
  }
  &:active {
    background-color: ${({ darkMode }) => (darkMode ? "#4E5051" : "#DADDE1")};
  }
`;

export const SaveBtn = styled(Button)<StyleProps>`
  background-color: #ffa101;
  color: white;
  &:hover {
    background-color: #cf8300;
  }
  &:active {
    background-color: #a46700;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.3rem;
  align-items: center;
`;

export const NameContainer = styled.div``;
export const EmailContainer = styled.div`
  p {
    margin-bottom: 1rem;
  }
`;

export const StyledField = styled(Field)<DarkMode>`
  width: 90%;
  font-size: 1rem;
  padding: 0.3rem;
  border: ${({ darkMode }) =>
    darkMode
      ? "2px solid hsla(0,0%,100%,0.2)"
      : "2px solid rgba(43, 59, 74, 0.3)"};
  border-radius: 5px;
  height: 2.8rem;
  display: block;
  background-color: transparent;
  color: ${({ darkMode }) => (darkMode ? "white" : "black")};
  &:focus {
    border: 2px solid #ffa101;
    outline: none;
  }
  outline: none;
`;

export const FileInput = styled.div<DarkMode>`
  input {
    width: 0.1px;
    height: 0.1px;
    position: absolute;
  }
  label {
    border-radius: 5px;
    background-color: ${({ darkMode }) => (darkMode ? "#2C2D2E" : "#F3F4F6")};
    height: 2.8rem;
    padding: 0 1rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: ${({ darkMode }) => (darkMode ? "white" : "black")};
    &:hover {
      background-color: ${({ darkMode }) => (darkMode ? "#424243" : "#f2f3f5")};
    }
    &:active {
      background-color: ${({ darkMode }) => (darkMode ? "#4E5051" : "#bec3ce")};
    }
  }
`;

interface AvatarBtnProps {
  file: string;
}

export const AvatarBtn = styled(Button)<AvatarBtnProps>`
  background-color: #ffa101;
`;

export const LoaderContainer = styled.div`
  position: absolute;
  right: 0;
`;

export const ConfirmPassword = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

export const EmailInput = styled.div`
  display: flex;
`;
export const UploadAvatarText = styled.div`
  display: none;
  @media ${device.tablet} {
    display: block;
  }
`;

export const ChangeImgContainer = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 9rem;

  label {
    width: 100%;
  }
  button {
    width: 100%;
    margin: 0;
  }
  @media ${device.tablet} {
    flex-direction: row;
    width: 18rem;
  }
`;
