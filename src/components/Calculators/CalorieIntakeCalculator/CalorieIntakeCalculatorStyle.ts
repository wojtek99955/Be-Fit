import styled from "styled-components";

export const Container = styled.section`
  margin: 0 1rem;
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
  display: flex;
  gap: 3rem;
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
    display: inline-block;
    margin-right: 0.5rem;
  }
`;

export const Text = styled.div`
  max-width: 25rem;
  h2 {
    margin-bottom: 2rem;
    font-size: 3rem;
    color: #555555;
  }
  p {
    color: #555555;
    line-height: 1.8rem;
    font-size: 1.1rem;
  }

  ul {
    margin-left: 2rem;
    li {
      font-size: 1.1rem;
      color: #555555;
      margin-bottom: 0.7rem;
    }
  }
`;
export const FormContainer = styled.div`
  width: 500px;
  padding: 2rem;
  background-color: #f3f4f6;
  border-radius: 12px;
`;

export const FormWrapper = styled.div`
  position: sticky;
  top: 0;
`;
