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
    padding: 0.8rem 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    &:hover {
      background-color: #e4e7e8;
    }
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 0.9rem;
  font-weight: 300;
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

const SideBar = () => {
  return (
    <Container>
      <UserIcon>K</UserIcon>
      <nav>
        <ul>
          <li>
            <HomeIcon /> <StyledLink to="/">Home page</StyledLink>
          </li>
          <li>
            <GoalIcon />
            <StyledLink to="/">Your goals</StyledLink>
          </li>
          <li>
            <CalculatorIcon /> <StyledLink to="/">Calculators</StyledLink>
          </li>
          <li>
            <FoodCalories /> <StyledLink to="/">Check calories</StyledLink>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default SideBar;
