import styled from "styled-components";
import img from "./assets/images/main.jpg";

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4) url(${img});
  background-blend-mode: darken;
  background-size: cover;
`;

const Main = styled.main`
  h1 {
    text-align: center;
    color: white;
  }
  button {
    background-color: #ffa101;
    border: none;
    color: white;
    padding: 1rem 2.3rem;
    display: block;
    margin: auto;
    font-size: 1.5rem;
    margin-top: 2.5rem;
    cursor: pointer;
  }
`;

const StartPage = () => {
  return (
    <Container>
      <Main>
        <h1>Track your calorie intake with us!</h1>
        <button>Sign In</button>
      </Main>
    </Container>
  );
};

export default StartPage;
