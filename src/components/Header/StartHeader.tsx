import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../assets/mediaQueries/device";
const img = require("../../assets/images/logo.png");

export const Logo = styled.img`
  width: 5rem;
  margin-right: 2rem;
  cursor: pointer;
  @media ${device.tablet} {
    width: 7rem;
  }
`;

const Header = styled.header`
  position: fixed;
  width: 100%;
  height: 3.5rem;
  z-index: 20;
  padding: 1rem;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 1rem;
  }

  button {
    border: 2px solid #ffa101;
    height: 2.2rem;
    width: 5.5rem;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    @media ${device.tablet} {
      width: 6rem;
      height: 2.5rem;
    }

    &:first-of-type {
      border: 2px solid #ffa101;
      background: transparent;
    }
    &:nth-of-type(2) {
      background-color: #ffa101;
      &:hover {
        background-color: #cf8300;
        border-color: #cf8300;
      }
    }
  }
`;

const StartHeader = () => {
  let navigate = useNavigate();
  return (
    <Header>
      <Logo src={img} onClick={() => navigate("/")} />
      <nav>
        <button
          onClick={() => {
            navigate("/signin");
          }}
        >
          Sign in
        </button>
        <button
          onClick={() => {
            navigate("/signup");
          }}
        >
          Sign up
        </button>
      </nav>
    </Header>
  );
};

export default StartHeader;
