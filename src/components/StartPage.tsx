import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { device } from "../assets/mediaQueries/device";

const Main = styled.main`
  z-index: 50;
  position: relative;
  h1 {
    text-align: center;
    color: white;
    font-size: 2rem;
    @media ${device.tablet} {
      font-size: 2.5rem;
    }
  }
  button {
    background-color: #00c579;
    border: none;
    color: white;
    padding: 0.7rem 2rem;
    display: block;
    margin: auto;
    border-radius: 12px;
    font-size: 1.5rem;
    margin-top: 2.5rem;
    cursor: pointer;
    &:hover {
      background-color: #00a464;
    }
    @media ${device.tablet} {
      padding: 1rem 2.8rem;
    }
  }
`;

const StartPage = () => {
  let navigation = useNavigate();
  return (
    <Main>
      <h1>Stay in shape with us!</h1>
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
