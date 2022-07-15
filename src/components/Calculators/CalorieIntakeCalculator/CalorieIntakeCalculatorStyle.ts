import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  label {
    display: block;
    font-size: 1.2rem;
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    color: #55595b;
    font-weight: 500;
  }
  button {
    display: block;
    border: none;
    background-color: #ffa101;
    color: white;
    padding: 0.8rem 0;
    cursor: pointer;
    border-radius: 8px;
    margin-top: 2rem;
    width: 100%;
    font-size: 1rem;
    &:hover {
      background-color: #cf8300;
    }
  }
  input {
    width: 3rem;
    border: none;
    outline: none;
    font-size: 1.2rem;
    display: block;
    height: 3rem;
    color: #55595b;
    font-weight: 600;
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      background-color: white;
    }
  }
  select {
    border: none;
    margin-left: auto;
    font-size: 1.2rem;
    outline: none;
    color: #55595b;
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  width: 500px;
  margin: auto;
  padding: 2rem;
  background-color: #f3f4f6;
  border-radius: 12px;
  p {
    margin-bottom: 1rem;
  }
`;

export const initialValues = {
  gender: "",
  weight: "",
  height: "",
  age: "",
  activityLevel: "",
  goal: "",
};

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1px;
  background-color: white;
  padding-right: 1rem;
`;

export const OptionFieldName = styled.div`
  font-size: 1.2rem;
  height: 3rem;
  display: flex;
  align-items: center;
  color: #55595b;
  padding: 1rem;
`;
export const Result = styled.div`
  background-color: white;
  margin-top: 2rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: 1rem;
    font-weight: 500;
    color: #55595b;
    font-weight: 400;
  }
  strong {
    font-size: 1.3rem;
    color: #55595b;
  }
`;