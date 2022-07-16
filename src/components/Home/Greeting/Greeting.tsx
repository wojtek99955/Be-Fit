import {
  Container,
  SearchInput,
  HealthyStyleIconContainer,
  WorkOutIconContainer,
} from "./GreetingStyle";
import HealthyStyleIcon from "../../../assets/svg/HealthyStyleIcon";
import WorkOutIcon from "../../../assets/svg/WorkOutIcon";

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
      <SearchInput placeholder="Search" />
    </Container>
  );
};

export default Greeting;
