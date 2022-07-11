import {
  Container,
  Button,
  Divider,
  StyledField,
} from "./AccountSettingsStyle";
import styled from "styled-components";
import { deleteUser } from "firebase/auth";
import { AuthContext } from "../AuthContext";
import { useContext, useState } from "react";
import { Formik, Form, Field } from "formik";
import { getAuth, reauthenticateWithCredential } from "firebase/auth";
import { auth } from "../../firebase";
import { EmailAuthProvider, updatePassword } from "firebase/auth";
import DeleteModal from "./DeleteModal";
import { ImCheckmark } from "react-icons/im";

const StyledButton = styled(Button)`
  background-color: #e1605e;
  color: white;
  margin: 1rem 0;
  width: 8rem;
  height: 3rem;
`;

const PasswordField = styled(StyledField)`
  width: auto;
`;

const Delete = styled.div``;
const Password = styled.div`
  input {
    font-size: 1rem;
    padding: 0.3rem;
    border: 1px solid #55595b;
    border-radius: 5px;
    height: 3rem;
    display: block;
    margin-bottom: 1rem;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  input {
    margin-bottom: 0;
  }
`;

const CorrectIcon = styled(ImCheckmark)`
  font-size: 1.5rem;
  color: green;
  margin-left: 1rem;
`;

const Security = () => {
  const ctx = useContext(AuthContext);
  const initialValues = {
    currentPassword: "",
  };
  const auth = getAuth();

  const [setPassword, setSetPassword] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  return (
    <Container>
      <h2>Account security</h2>
      <Password>
        <Formik
          initialValues={initialValues}
          onSubmit={async (values) => {
            try {
              let credential = EmailAuthProvider.credential(
                auth?.currentUser?.email!,
                values.currentPassword
              );
              await reauthenticateWithCredential(ctx?.currentUser, credential);
              console.log("dobre haslo");
              setSetPassword(true);
              console.log(values.currentPassword);
            } catch {
              console.log("zle haslo");
              console.log(values.currentPassword);
            }
          }}
        >
          <Form>
            <h3>Change your password</h3>
            <Row>
              <PasswordField
                type="password"
                placeholder="Current password"
                name="currentPassword"
                id="currentPassword"
              />
              {!setPassword ? <Button type="submit">Confirm</Button> : null}
              {setPassword ? <CorrectIcon /> : null}
            </Row>
          </Form>
        </Formik>
        {setPassword ? (
          <Formik
            initialValues={{ newPassword: "", confirmNewPassword: "" }}
            onSubmit={async (values) => {
              try {
                await updatePassword(ctx?.currentUser, values.newPassword);
                console.log("udana zmiana hasla");
              } catch {
                console.log("nieudana zmiana hasla");
              }
            }}
          >
            <Form>
              <Field
                type="password"
                placeholder="New password"
                name="newPassword"
                id="newPassword"
              />
              <Field
                type="password"
                placeholder="Confirm new password"
                name="confirmNewPassword"
                id="confirmNewPassword"
              />
              <Button type="submit">Change</Button>
            </Form>
          </Formik>
        ) : null}
        <Divider />
      </Password>
      <Delete>
        {openDeleteModal ? (
          <DeleteModal setOpenDeleteModal={setOpenDeleteModal} />
        ) : null}
        <h3>Delete your account</h3>
        <p>
          By deleting your account, you'll no longer be able to access any of
          your data or log in to BeFit.
        </p>
        <StyledButton
          onClick={() => {
            setOpenDeleteModal(true);
          }}
        >
          Delete
        </StyledButton>
        <Divider />
      </Delete>
    </Container>
  );
};

export default Security;
