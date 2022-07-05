import styled from "styled-components";

const Container = styled.aside`
  height: 100vh;
  width: 300px;
  border-right: 1px solid #e1e4e7;
  position: relative;
  z-index: 1;
  top: 5.2rem;
  height: calc(100vh - 5.2rem);
`;

const SideBar = () => {
  return <Container>SideBar</Container>;
};

export default SideBar;
