import {
  Container,
  SearchInput,
  HealthyStyleIconContainer,
  WorkOutIconContainer,
  InputContainer,
  LinkIcons,
  StyledLink,
  CalculatorIcon,
  GoalIcon,
  FoodCalories,
} from "./GreetingStyle";
import HealthyStyleIcon from "../../../assets/svg/HealthyStyleIcon";
import WorkOutIcon from "../../../assets/svg/WorkOutIcon";
import { SearchIcon } from "../../CaloriesCalculator/CaloriesCalculatorsStyle";

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
      <InputContainer>
        <SearchIcon />
        <SearchInput placeholder="Search" />
      </InputContainer>
      <LinkIcons>
        <StyledLink to="/calculators">
          <CalculatorIcon />
        </StyledLink>
        <StyledLink to="/your-goal">
          <GoalIcon />
        </StyledLink>
        <StyledLink to="check-calories">
          <FoodCalories />
        </StyledLink>
      </LinkIcons>
    </Container>
  );
};

export default Greeting;
