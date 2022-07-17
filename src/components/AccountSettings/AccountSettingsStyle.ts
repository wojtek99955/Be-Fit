import { Field } from "formik";
import styled from "styled-components";

interface StyleProps {
  save?: boolean;
}
interface ImageProps {
  url?: any;
  file?: string;
}

export const Container = styled.section`
  margin-top: 6rem;
  width: 40rem;
  margin-left: 1rem;
  margin-right: 1rem;
  h2 {
    margin-bottom: 3rem;
  }
  h3 {
    margin: 1.3rem 0;
  }
  :not(first-of-type)input {
    width: 90%;
    font-size: 1rem;
    padding: 0.3rem;
    border: 1px solid #55595b;
    border-radius: 5px;
    height: 2.5rem;
    display: block;
    outline-color: #ffa101;
  }
`;
export const ImageContainer = styled.div`
  position: relative;
`;

export const Image = styled.div<ImageProps>`
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

interface BtnProps {
  loading?: boolean;
}

export const Button = styled.button<StyleProps>`
  padding: 0 1rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  background-color: ${({ save }) => (save ? "#ffa101" : "#F3F4F6")};
  color: ${({ save }) => (save ? "white" : "black")};
  cursor: pointer;
  height: 3rem;
  margin-left: 1rem;
  &:hover {
    background-color: ${({ save }) => (save ? "#cf8300" : "#dde0e5")};
  }
  &:active {
    background-color: ${({ save }) => (save ? "#a46700" : "#bec3ce")};
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

export const Divider = styled.div`
  border-bottom: 1px solid #e1e4e7; ;
`;

export const StyledField = styled(Field)`
  width: 90%;
  font-size: 1rem;
  padding: 0.3rem;
  border: 1px solid #55595b;
  border-radius: 5px;
  height: 3rem;
  display: block;
  outline-color: #ffa101;
`;

export const FileInput = styled.div`
  input {
    width: 0.1px;
    height: 0.1px;
  }
  label {
    border-radius: 5px;
    padding: 0.5rem 0.7rem;
    background-color: #f3f4f6;
    height: 2.5rem;
    display: inline-block;
    cursor: pointer;
    &:hover {
      background-color: #dde0e5;
    }
    &:active {
      background-color: #bec3ce;
    }
  }
`;

interface AvatarBtnProps {
  file: string;
}

export const AvatarBtn = styled(Button)<AvatarBtnProps>`
  background-color: ffa101;
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
