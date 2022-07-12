import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
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
