import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  background-color: white;
  border-radius: 12px;
  width: 30rem;
  padding: 1rem;
  h1 {
    text-align: center;
  }
  button {
    border: none;
    display: block;
    background-color: green;
    padding: 0.8rem 2rem;
    color: white;
    background-color: #ffa101;
    cursor: pointer;
    border-radius: 12px;
    font-size: 1rem;
    &:hover {
      background-color: #cf8300;
    }
    &:disabled {
      background-color: #ffdda4;
      cursor: default;
    }
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

export const FormContainer = styled.div`
  max-width: 20rem;
  margin: auto;

  input {
    width: 100%;
    border: 2px solid #dfe2e7;
    outline: none;
    font-size: 1rem;
    display: block;
    height: 3rem;
    color: #55595b;
    padding-left: 0.5rem;
    margin: 1rem 0;
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
    font-size: 1rem;
    outline: none;
    color: #55595b;
    cursor: pointer;
    height: 3rem;
    font-weight: 600;
    border: 2px solid #dfe2e7;
    margin: 1rem 0;
    padding-left: 0.3rem;
  }
`;

export const BtnsContainer = styled.div`
  display: flex;
  margin-top: 3rem;
  justify-content: space-between;
  width: 100%;
`;

export const StartButton = styled.button`
  margin: auto;
  margin-top: 3rem;
`;

export const IconContainer = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 3rem;
`;
