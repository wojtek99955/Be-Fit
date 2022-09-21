import ReactDOM from "react-dom";
import { Formik, Form, ErrorMessage } from "formik";
import { getAuth, reauthenticateWithCredential } from "firebase/auth";
import { EmailAuthProvider } from "firebase/auth";
import { AuthContext } from "../../AuthContext";
import { useContext, useState } from "react";
import { deleteUser } from "firebase/auth";
import { Button } from "../AccountSettingsStyle";
import { ErrorMsg } from "../../Auth/AuthStyle";
import Loader from "../../../assets/Loader";
import * as yup from "yup";
import {
  Container,
  Wrapper,
  PasswordField,
  DeleteBtns,
  LoaderContainer,
  FieldContainer,
  CloseIcon,
} from "./DeleteModalStyle";
import { darkModeContext } from "../../../context/DarkModeContextProvider";

interface Props {
  setOpenDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const validationSchema = yup.object().shape({
  password: yup.string().min(6, "minimum 6 characters").required("required"),
});

const DeleteModal = ({ setOpenDeleteModal }: Props) => {
  const auth = getAuth();
  const ctx = useContext(AuthContext);
  const [showDeleteBtn, setShowDeleteBtn] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCloseModal = () => {
    setOpenDeleteModal(false);
  };

  const darkModeCtx = useContext(darkModeContext);
  const darkMode = darkModeCtx?.darkMode;

  return ReactDOM.createPortal(
    <Container>
      <Wrapper darkMode={darkMode!}>
        <CloseIcon onClick={handleCloseModal} darkMode={darkMode!} />
        {!showDeleteBtn ? (
          <>
            <h1>Type your password to delete account</h1>
            <Formik
              initialValues={{ password: "" }}
              validationSchema={validationSchema}
              onSubmit={async (values) => {
                try {
                  setLoading(true);
                  let credential = EmailAuthProvider.credential(
                    auth?.currentUser?.email!,
                    values.password
                  );
                  await reauthenticateWithCredential(
                    ctx?.currentUser,
                    credential
                  );
                  console.log("correct password");
                  setShowDeleteBtn(true);
                  setLoading(false);
                } catch {
                  console.log("incorrect password");
                  setError(true);
                  setLoading(false);
                }
              }}
            >
              <Form>
                <FieldContainer>
                  <PasswordField
                    darkMode={darkMode!}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Your password"
                  />
                  {loading ? (
                    <LoaderContainer>
                      <Loader />
                    </LoaderContainer>
                  ) : null}
                  <ErrorMessage component={ErrorMsg} name="password" />
                  {error ? <ErrorMsg>Incorrect password</ErrorMsg> : null}
                </FieldContainer>
                <Button type="submit">Confirm</Button>
              </Form>
            </Formik>
          </>
        ) : (
          <>
            <h1>Are you sure?</h1>
            <DeleteBtns darkMode={darkMode!}>
              <button
                onClick={() => {
                  deleteUser(ctx?.currentUser).then(() =>
                    console.log("delete")
                  );
                }}
              >
                DELETE
              </button>
              <button onClick={handleCloseModal}>DISMISS</button>
            </DeleteBtns>
          </>
        )}
      </Wrapper>
    </Container>,
    document.getElementById("deleteAccountModal")!
  );
};

export default DeleteModal;
