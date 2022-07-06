import styled from "styled-components";
import BMI from "./BMI";

const Container = styled.section`
  padding-top: 8rem;
`;

const Home = () => {
  return (
    <Container>
      <BMI />
    </Container>
  );
};

export default Home;
