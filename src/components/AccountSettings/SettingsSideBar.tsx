import styled from "styled-components";
import { BiUserCircle } from "react-icons/bi";
import { BiLock } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const UserIcon = styled(BiUserCircle)`
  font-size: 1.3rem;
`;
const LockIcon = styled(BiLock)`
  font-size: 1.3rem;
`;
const EmailIcon = styled(HiOutlineMail)`
  font-size: 1.3rem;
`;

const StyledNavLink = styled(NavLink)`
  transition: background-color 300ms;
  &:hover {
    background-color: #f0f2f2;
  }
  &.active {
    background-color: #e4e7e8;
    font-weight: 600;
  }
  text-decoration: none;
  color: black;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 5px;
`;

const SettingsSideBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <StyledNavLink to="/settings/account">
            <UserIcon />
            Your account
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/settings/security">
            <LockIcon />
            Security
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/settings/email">
            <EmailIcon />
            Email <br /> preferences
          </StyledNavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SettingsSideBar;
