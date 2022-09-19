import styled from "styled-components";
import { ImSad } from "react-icons/im";

const Container = styled.section`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const SadIcon = styled(ImSad)`
  font-size: 3rem;
  color: #ffa101;
`;
const Wrapper = styled.div`
  max-width: 12rem;
  h2 {
    text-align: center;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const NoMatch = () => {
  return (
    <Container>
      <Wrapper>
        <h2>This address does not exists</h2>
        <SadIcon />
      </Wrapper>
    </Container>
  );
};

export default NoMatch;
