import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

const img = require("../assets/images/logo.png");

const HeaderContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

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
    height: 2.5rem;
    width: 6rem;
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
const Logo = styled.img`
  cursor: pointer;
  width: 9rem;
`;

const UserIcon = styled(FaUserCircle)`
  font-size: 2rem;
  color: black;
  cursor: pointer;
`;

const SettingsIcon = styled(IoMdSettings)`
  font-size: 2rem;
  color: black;
  cursor: pointer;
`;

const Header = () => {
  let navigate = useNavigate();
  const ctx = useContext(AuthContext);
  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo src={img}></Logo>
        <nav>
          {ctx?.currentUser ? (
            <>
              <SettingsIcon />
              <UserIcon />
            </>
          ) : (
            <>
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
            </>
          )}
        </nav>
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
