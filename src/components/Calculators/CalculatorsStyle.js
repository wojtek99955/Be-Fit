import styled from "styled-components";

export const Container = styled.section`
  margin: 0 1rem;
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

  input {
    width: 100%;
    border: none;
    outline: none;
    font-size: 1.2rem;
    display: block;
    height: 3rem;
    color: #55595b;
    margin-top: 2px;
    font-weight: 600;
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      background-color: white;
    }
  }
  select {
    width: 100%;
    border: none;
    margin-left: auto;
    font-size: 1.2rem;
    outline: none;
    color: #55595b;
    cursor: pointer;
    height: 3rem;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 3rem;
  align-items: flex-start;

  button {
    display: block;
    margin: auto;
    padding: 0.7rem 2rem;
    font-size: 1rem;
    border: none;
    background-color: #ffa101;
    color: white;
    cursor: pointer;
    border-radius: 8px;
    margin-top: 1rem;
    &:hover {
      background-color: #cf8300;
    }
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
    line-height: 1.8rem;
    font-size: 1.1rem;
    color: #555555;
    margin-bottom: 2rem;
  }
`;

export const FormWrapper = styled.div`
  min-width: 25rem;
  padding: 1rem;
  background-color: #f3f4f6;
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
