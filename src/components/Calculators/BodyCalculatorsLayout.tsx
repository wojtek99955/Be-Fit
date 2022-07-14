import styled from "styled-components";
import { Outlet } from "react-router-dom";

const Container = styled.section`
  margin-top: 6rem;
`;
const BodyCalculatorsLayout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default BodyCalculatorsLayout;
