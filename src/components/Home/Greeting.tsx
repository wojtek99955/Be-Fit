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
  flex-direction: column;
  font-size: 2.5rem;
  h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
`;
const SearchInput = styled.input`
  outline: none;
  border: none;
  padding: 0.2rem 0.5rem;
  width: clamp(15rem, 50%, 30rem);
  display: block;
  height: 2.2rem;
  border-radius: 8px;
`;

const Greeting = () => {
  return (
    <Container>
      <h1>Good To See You!</h1>
      <SearchInput placeholder="Search" />
    </Container>
  );
};

export default Greeting;
