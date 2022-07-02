import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const HeaderContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 1.5rem;
  }
`;
const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  padding: 1rem 0;

  button {
    border: 2px solid #ffa101;
    padding: 0.6rem 1.6rem;
    border-radius: 5px;
    cursor: pointer;
    color: white;

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
const Logo = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
`;

const Header = () => {
  let navigate = useNavigate();
  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo
          onClick={() => {
            navigate("/");
          }}
        >
          BeFit
        </Logo>
        <nav>
          <button
            onClick={() => {
              navigate("/signin");
            }}
          >
            Sign In
          </button>
          <button
            onClick={() => {
              navigate("/signup");
            }}
          >
            Sign Up
          </button>
        </nav>
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
