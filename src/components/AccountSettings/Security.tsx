import { Container, Button } from "./AccountSettingsStyle";
import styled from "styled-components";
import { deleteUser } from "firebase/auth";
import { AuthContext } from "../AuthContext";
import { useContext } from "react";

const StyledButton = styled(Button)``;

const Security = () => {
  const ctx = useContext(AuthContext);
  return (
    <Container>
      <h3>Delete your account</h3>
      <StyledButton
        onClick={() => {
          deleteUser(ctx?.currentUser).then(() => console.log("delete"));
        }}
      >
        Delete
      </StyledButton>
    </Container>
  );
};

export default Security;
