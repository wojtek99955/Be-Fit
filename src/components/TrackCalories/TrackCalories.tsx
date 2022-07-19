import styled from "styled-components";

const img = require("../../assets/images/track-calories.jpg");

const Container = styled.section`
  padding: 1rem;
  width: calc(100vw - 14rem);
  background-color: #f5f2f6;
  height: calc(100vh - 3.5rem);
  position: relative;
  top: 3.5rem;
  overflow-y: scroll;
`;
const Header = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.3) url(${img});
  height: 20rem;
  background-position: bottom;
  background-size: cover;
  background-blend-mode: darken;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    color: white;
    font-size: 2.6rem;
    text-align: center;
    line-height: 3.2rem;
  }
`;

const TrackCalories = () => {
  return (
    <Container>
      <Header>
        <h2>
          Track your daily <br /> calorie intake
        </h2>
      </Header>
    </Container>
  );
};

export default TrackCalories;
