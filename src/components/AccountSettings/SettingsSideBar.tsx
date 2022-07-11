import { Container, StyledLink } from "../SideBar/SideBarStyle";
import SideBarUserData from "../SideBarUserData";
import styled from "styled-components";
import { BiUserCircle } from "react-icons/bi";
import { BiLock } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";

const UserIcon = styled(BiUserCircle)`
  font-size: 1.3rem;
`;
const LockIcon = styled(BiLock)`
  font-size: 1.3rem;
`;
const EmailIcon = styled(HiOutlineMail)`
  font-size: 1.3rem;
`;

const SettingsSideBar = () => {
  return (
    <Container>
      <SideBarUserData />
      <nav>
        <ul>
          <li>
            <StyledLink to="/settings/account">
              <UserIcon />
              Your account
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/settings/security">
              <LockIcon />
              Security
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/settings/email">
              <EmailIcon />
              Email preferences
            </StyledLink>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default SettingsSideBar;
