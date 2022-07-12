import {
  Container,
  Button,
  Divider,
  StyledField,
} from "./AccountSettingsStyle";
import styled from "styled-components";
import { AuthContext } from "../AuthContext";
import { useContext, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { getAuth, reauthenticateWithCredential } from "firebase/auth";
import { EmailAuthProvider, updatePassword } from "firebase/auth";
import DeleteModal from "./DeleteModal";
import { ImCheckmark } from "react-icons/im";
import Loader from "../../assets/Loader";
import { ErrorMsg } from "../Auth/AuthStyle";
import * as yup from "yup";

const DeleteButton = styled(Button)`
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
const LoaderContainer = styled.span``;

const StyledButton = styled(Button)`
  width: 8rem;
  height: 3rem;
  margin-left: 0;
  margin-bottom: 1rem;
`;

const validationCurrentPassword = yup.object().shape({
  currentPassword: yup
    .string()
    .min(6, "minimum 6 characters")
    .required("required"),
});

const validationNewPassword = yup.object().shape({
  newPassword: yup.string().min(6, "minimum 6 characters").required("required"),
  confirmNewPassword: yup
    .string()
    .oneOf([yup.ref("newPassword")], "password must match")
    .required("required"),
});

const Security = () => {
  const ctx = useContext(AuthContext);
  const initialValues = {
    currentPassword: "",
  };
  const auth = getAuth();

  const [setPassword, setSetPassword] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [passwordSuccess, setPasswordSuccess] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  const [passwordChanged, setPasswordChanged] = useState(false);

  const handleEditPassword = () => {
    setIsChanging((prev) => !prev);
  };
  return (
    <Container>
      <h2>Account security</h2>
      {setIsChanging ? (
        <Password>
          <h3>Change your password</h3>
          <Button onClick={handleEditPassword}>Edit</Button>
          {isChanging ? (
            <Formik
              initialValues={initialValues}
              validationSchema={validationCurrentPassword}
              onSubmit={async (values) => {
                try {
                  setLoading(true);
                  let credential = EmailAuthProvider.credential(
                    auth?.currentUser?.email!,
                    values.currentPassword
                  );
                  await reauthenticateWithCredential(
                    ctx?.currentUser,
                    credential
                  );
                  console.log("dobre haslo");
                  setError(false);
                  setSetPassword(true);
                  console.log(values.currentPassword);
                  setLoading(false);
                  setPasswordSuccess(true);
                } catch {
                  console.log("zle haslo");
                  setError(true);
                  setLoading(false);
                  setPasswordSuccess(false);
                }
              }}
            >
              <Form>
                <Row>
                  <PasswordField
                    type="password"
                    placeholder="Current password"
                    name="currentPassword"
                    id="currentPassword"
                  />
                  {!setPassword && !loading ? (
                    <Button type="submit">Confirm</Button>
                  ) : null}
                  {passwordSuccess ? <CorrectIcon /> : null}
                  {loading ? (
                    <LoaderContainer>
                      <Loader />
                    </LoaderContainer>
                  ) : null}
                </Row>
                <ErrorMessage component={ErrorMsg} name="currentPassword" />
                {error ? <ErrorMsg>Invalid password</ErrorMsg> : null}
              </Form>
            </Formik>
          ) : null}
          {setPassword && isChanging ? (
            <Formik
              initialValues={{ newPassword: "", confirmNewPassword: "" }}
              validationSchema={validationNewPassword}
              onSubmit={async (values) => {
                try {
                  await updatePassword(ctx?.currentUser, values.newPassword);
                  console.log("udana zmiana hasla");
                  setIsChanging(false);
                  setPasswordChanged(true);
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
                <ErrorMessage component={ErrorMsg} name="newPassword" />
                <Field
                  type="password"
                  placeholder="Confirm new password"
                  name="confirmNewPassword"
                  id="confirmNewPassword"
                />
                <ErrorMessage component={ErrorMsg} name="confirmNewPassword" />
                <StyledButton type="submit">Change</StyledButton>
              </Form>
            </Formik>
          ) : null}
        </Password>
      ) : null}
      {passwordChanged ? <h1>Password changed!</h1> : null}
      <Divider />
      <Delete>
        {openDeleteModal ? (
          <DeleteModal setOpenDeleteModal={setOpenDeleteModal} />
        ) : null}
        <h3>Delete your account</h3>
        <p>
          By deleting your account, you'll no longer be able to access any of
          your data or log in to BeFit.
        </p>
        <DeleteButton
          onClick={() => {
            setOpenDeleteModal(true);
          }}
        >
          Delete
        </DeleteButton>
        <Divider />
      </Delete>
    </Container>
  );
};

export default Security;
