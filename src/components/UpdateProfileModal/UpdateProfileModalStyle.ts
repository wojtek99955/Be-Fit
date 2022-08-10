import styled from "styled-components";

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

export const Wrapper = styled.div`
  background-color: white;
  padding: 1rem;
  h1 {
    max-width: 20rem;
    text-align: center;
  }
  button {
    border: none;
    display: block;
    background-color: green;
    margin: auto;
    padding: 0.8rem 2rem;
    margin-top: 8rem;
    color: white;
    background-color: #ffa101;
    cursor: pointer;
    font-size: 1.2rem;
    &:hover {
      background-color: #cf8300;
    }
  }
`;
