import { Container, SearchInput } from "./GreetingStyle";
import HealthyStyleIcon from "../../../assets/svg/HealthyStyleIcon";
import styled from "styled-components";
import WorkOutIcon from "../../../assets/svg/WorkOutIcon";

const HealthyStyleIconContainer = styled.div`
  width: 10rem;
  position: absolute;
  left: 3rem;
`;

const WorkOutIconContainer = styled.div`
  width: 8rem;
  position: absolute;
  right: 3rem;
`;

const Greeting = () => {
  return (
    <Container>
      <WorkOutIconContainer>
        <WorkOutIcon />
      </WorkOutIconContainer>
      <HealthyStyleIconContainer>
        <HealthyStyleIcon />
      </HealthyStyleIconContainer>

      <h1 style={{ position: "relative", zIndex: "2" }}>Good To See You!</h1>
      <SearchInput placeholder="Search" />
    </Container>
  );
};

export default Greeting;
