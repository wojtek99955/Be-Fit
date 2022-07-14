import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.section`
  width: calc(100vw - 14rem);
  height: calc(100vh - 3.5rem);
  position: relative;
  top: 3.5rem;
  overflow: scroll;
  display: flex;
  justify-content: center;
`;

const CalculatorsLayout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default CalculatorsLayout;
