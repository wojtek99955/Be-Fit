import styled from "styled-components";
import { Outlet } from "react-router-dom";

const Container = styled.section``;

const ActivityCalculatorsLayout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default ActivityCalculatorsLayout;
