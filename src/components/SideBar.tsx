import styled from "styled-components";
import { UserIcon } from "./Header/HeaderStyle";
import { Link } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";
import { RiMedalLine } from "react-icons/ri";
import { BiCalculator } from "react-icons/bi";
import { MdOutlineFastfood } from "react-icons/md";

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
    cursor: pointer;
    font-weight: 300;
    &:first-of-type {
      font-weight: 600;
    }
    &:hover {
      background-color: #e4e7e8;
    }
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 0.5rem;
`;
const HomeIcon = styled(BiHomeAlt)`
  font-size: 1.3rem;
`;
const GoalIcon = styled(RiMedalLine)`
  font-size: 1.3rem;
`;
const CalculatorIcon = styled(BiCalculator)`
  font-size: 1.3rem;
`;
const FoodCalories = styled(MdOutlineFastfood)`
  font-size: 1.3rem;
`;
const StyledUserIcon = styled(UserIcon)`
  margin-left: 0.5rem;
`;

const SideBar = () => {
  return (
    <Container>
      <StyledUserIcon>K</StyledUserIcon>
      <nav>
        <ul>
          <li>
            <StyledLink to="/home">
              <HomeIcon />
              Home page
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/">
              <GoalIcon />
              Your goals
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/calculators">
              <CalculatorIcon />
              Calculators
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/">
              <FoodCalories />
              Check calories
            </StyledLink>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default SideBar;
