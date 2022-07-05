import styled from "styled-components";
import { UserIcon } from "./Header/HeaderStyle";
import { Link } from "react-router-dom";

const Container = styled.aside`
  height: 100vh;
  width: 250px;
  border-right: 1px solid #e1e4e7;
  position: relative;
  top: 5.2rem;
  height: calc(100vh - 5.2rem);
  padding: 0.8rem;
  ul {
    list-style-type: none;
  }
  li {
    padding: 0.8rem 0;
    cursor: pointer;
    &:hover {
      background-color: #e4e7e8;
    }
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 0.9rem;
  font-weight: 400;
`;

const SideBar = () => {
  return (
    <Container>
      <UserIcon>K</UserIcon>
      <nav>
        <ul>
          <li>
            <StyledLink to="/">Home page</StyledLink>
          </li>
          <li>
            <StyledLink to="/">Your goals</StyledLink>
          </li>
          <li>
            <StyledLink to="/">Calculators</StyledLink>
          </li>
          <li>
            <StyledLink to="/">Check calories</StyledLink>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default SideBar;
