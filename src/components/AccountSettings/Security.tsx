import { Container, Button, Divider } from "./AccountSettingsStyle";
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
      <p>
        By deleting your account, you'll no longer be able to access any of your
        data or log in to BeFit.
      </p>
      <StyledButton
        onClick={() => {
          deleteUser(ctx?.currentUser).then(() => console.log("delete"));
        }}
      >
        Delete
      </StyledButton>
      <Divider />
    </Container>
  );
};

export default Security;
