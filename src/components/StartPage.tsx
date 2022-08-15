import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const img = require("../assets/images/main.jpg");

const Main = styled.main`
  h1 {
    text-align: center;
    color: white;
    font-size: 2.5rem;
  }
  button {
    background-color: #ffa101;
    border: none;
    color: white;
    padding: 1rem 2.3rem;
    display: block;
    margin: auto;
    border-radius: 12px;
    font-size: 1.5rem;
    margin-top: 2.5rem;
    cursor: pointer;
    &:hover {
      background-color: #cf8300;
    }
  }
`;

const StartPage = () => {
  let navigation = useNavigate();
  return (
    <Main>
      <h1>Track your calorie intake with us!</h1>
      <button
        onClick={() => {
          navigation("signin");
        }}
      >
        Sign in
      </button>
    </Main>
  );
};

export default StartPage;
