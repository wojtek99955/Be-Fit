import styled from "styled-components";
import BMI from "./BMI";
import Greeting from "./Greeting";

const Container = styled.section`
  padding: 1rem;
  padding-top: 8rem;
  width: 100%;
`;

const Home = () => {
  return (
    <Container>
      <Greeting />
      <BMI />
    </Container>
  );
};

export default Home;
