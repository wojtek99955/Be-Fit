import { Field } from "formik";
import styled from "styled-components";

interface StyleProps {
  save?: boolean;
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
  input {
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
export const ImageContainer = styled.div``;

export const Image = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: #ffa101;
`;
export const Button = styled.button<StyleProps>`
  padding: 0.5rem 0.7rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  background-color: ${({ save }) => (save ? "#ffa101" : "#F3F4F6")};
  color: ${({ save }) => (save ? "white" : "black")};
  cursor: pointer;
  height: 2.5rem;
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
export const EmailContainer = styled.div``;

export const Divider = styled.div`
  border-bottom: 1px solid #e1e4e7; ;
`;

export const StyledField = styled(Field)`
  width: 90%;
  font-size: 1rem;
  padding: 0.3rem;
  border: 1px solid #55595b;
  border-radius: 5px;
  height: 2.5rem;
  display: block;
  outline-color: #ffa101;
`;
