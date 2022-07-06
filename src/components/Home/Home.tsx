import styled from "styled-components";
import Measurement from "./Measurement";
import Greeting from "./Greeting";
import BMI from "./BMI";
import Goal from "./Goal";

const Container = styled.section`
  padding: 1rem;
  padding-top: 8rem;
  width: 100%;
  background-color: #f5f2f6;
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
`;

const Home = () => {
  return (
    <Container>
      <Greeting />
      <GridContainer>
        <Measurement />
        <BMI />
        <Goal />
      </GridContainer>
    </Container>
  );
};

export default Home;
