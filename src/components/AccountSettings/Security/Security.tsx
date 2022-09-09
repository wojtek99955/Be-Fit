import { Container, Button } from "../AccountSettingsStyle";
import { AuthContext } from "../../AuthContext";
import { useContext, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { getAuth, reauthenticateWithCredential } from "firebase/auth";
import { EmailAuthProvider, updatePassword } from "firebase/auth";
import DeleteModal from "../DeleteModal/DeleteModal";
import Loader from "../../../assets/Loader";
import { ErrorMsg } from "../../Auth/AuthStyle";
import * as yup from "yup";
import {
  DeleteButton,
  PasswordField,
  Delete,
  Password,
  Row,
  CorrectIcon,
  LoaderContainer,
  StyledButton,
  Title,
  EditPasswordBtn,
} from "./SecurityStyle";
import { darkModeContext } from "../../../context/DarkModeContextProvider";

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
    if (isChanging === false) {
      setPasswordChanged(false);
      setPasswordSuccess(false);
    }
  };
  const darkModeCtx = useContext(darkModeContext);
  const darkMode = darkModeCtx?.darkMode;

  return (
    <Container darkMode={darkMode!}>
      <h2>Account security</h2>
      {setIsChanging ? (
        <Password>
          <Title>
            <h3>Change your password</h3>
            <EditPasswordBtn onClick={handleEditPassword}>Edit</EditPasswordBtn>
          </Title>
          <p>
            You have to confirm your current password to be able to set a new
            password.
          </p>
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
                  setError(false);
                  setSetPassword(true);
                  console.log(values.currentPassword);
                  setLoading(false);
                  setPasswordSuccess(true);
                } catch {
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
                    disabled={passwordSuccess}
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
                  setIsChanging(false);
                  setPasswordChanged(true);
                } catch {
                  console.log("error");
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
      <hr />
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
        <hr />
      </Delete>
    </Container>
  );
};

export default Security;
