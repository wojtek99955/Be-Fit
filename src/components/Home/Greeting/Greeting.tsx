import {
  Container,
  SearchInput,
  HealthyStyleIconContainer,
  WorkOutIconContainer,
  InputContainer,
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
    </Container>
  );
};

export default Greeting;
