import {
  Container,
  HealthyStyleIconContainer,
  WorkOutIconContainer,
  InputContainer,
  LinkIcons,
  StyledLink,
  CalculatorIcon,
  GoalIcon,
  FoodCalories,
  WeightIcon,
  LinkContainer,
} from "./GreetingStyle";
import HealthyStyleIcon from "../../../assets/svg/HealthyStyleIcon";
import WorkOutIcon from "../../../assets/svg/WorkOutIcon";
import Search from "./Search/Search";

const Greeting = () => {
  return (
    <Container>
      <WorkOutIconContainer>
        <WorkOutIcon />
      </WorkOutIconContainer>
      <HealthyStyleIconContainer>
        <HealthyStyleIcon />
      </HealthyStyleIconContainer>
      <h1>Good To See You!</h1>
      <Search />
      <LinkIcons>
        <LinkContainer>
          <StyledLink to="/calculators">
            <CalculatorIcon />
          </StyledLink>
          Calculators
        </LinkContainer>
        <LinkContainer>
          <StyledLink to="/my-goal">
            <GoalIcon />
          </StyledLink>
          Your goal
        </LinkContainer>
        <LinkContainer>
          <StyledLink to="/calories-calculator">
            <FoodCalories />
          </StyledLink>
          Check calories
        </LinkContainer>
        <LinkContainer>
          <StyledLink to="/track-calories">
            <WeightIcon />
          </StyledLink>
          Track calories
        </LinkContainer>
      </LinkIcons>
    </Container>
  );
};

export default Greeting;
