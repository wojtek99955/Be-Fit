import {
  Container,
  StyledLink,
  HomeIcon,
  GoalIcon,
  CalculatorIcon,
  FoodCalories,
  StyledUserIcon,
} from "./SideBarStyle";

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
