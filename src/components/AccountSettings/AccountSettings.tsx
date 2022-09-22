import { useEffect, useContext } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  height: auto;
  position: relative;
  top: 3.5rem;
`;

const AccountSettings = () => {
  const location = useLocation();
  let navigation = useNavigate();

  useEffect(() => {
    location.pathname === "/settings" && navigation("/settings/account");
  }, []);

  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default AccountSettings;
