import styled from "styled-components";
import Measurement from "./Measurement";
import Greeting from "./Greeting";
import BMI from "./BMI";

const Container = styled.section`
  padding: 1rem;
  padding-top: 8rem;
  width: 100%;
  background-color: #f5f2f6;
`;

const Home = () => {
  return (
    <Container>
      <Greeting />
      <Measurement />
      <BMI />
    </Container>
  );
};

export default Home;
