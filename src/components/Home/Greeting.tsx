import styled from "styled-components";

const Container = styled.div`
  background-color: rgba(250, 230, 177, 1);
  background-image: linear-gradient(
    90deg,
    rgba(250, 230, 177, 1) 0%,
    rgba(255, 161, 1, 1) 50%,
    rgba(49, 82, 91, 0.84) 94%
  );

  height: 15rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
`;

const Greeting = () => {
  return <Container>Good To See You!</Container>;
};

export default Greeting;
