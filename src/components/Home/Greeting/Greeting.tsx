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
  WeightIcon,
  LinkContainer,
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
        <LinkContainer>
          <StyledLink to="/calculators">
            <CalculatorIcon />
          </StyledLink>
        </LinkContainer>
        <LinkContainer>
          <StyledLink to="/your-goal">
            <GoalIcon />
          </StyledLink>
        </LinkContainer>
        <LinkContainer>
          <StyledLink to="check-calories">
            <FoodCalories />
          </StyledLink>
        </LinkContainer>
        <LinkContainer>
          <StyledLink to="track-calories">
            <WeightIcon />
          </StyledLink>
        </LinkContainer>
      </LinkIcons>
    </Container>
  );
};

export default Greeting;
