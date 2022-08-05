import styled from "styled-components";

export const Container = styled.section`
  padding: 1rem;
  width: 100%;
  height: calc(100vh - 3.5rem);
  background-color: white;
  position: relative;
  top: 3.5rem;
  overflow-y: scroll;
`;

const Statistics = () => {
  return <Container>Statistics</Container>;
};

export default Statistics;
