import ReactDOM from "react-dom";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import { getAuth, reauthenticateWithCredential } from "firebase/auth";
import { EmailAuthProvider } from "firebase/auth";
import { AuthContext } from "../AuthContext";
import { useContext, useState } from "react";
import { deleteUser } from "firebase/auth";
import { StyledField, Button } from "./AccountSettingsStyle";
import { ErrorMsg } from "../Auth/AuthStyle";
import Loader from "../../assets/Loader";

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  h1 {
    max-width: 20rem;
    text-align: center;
  }
  button {
    border: none;
    display: block;
    background-color: green;
    margin: auto;
    padding: 1rem 2rem;
    margin-top: 5rem;
    color: white;
    background-color: #ffa101;
    cursor: pointer;
    &:hover {
      background-color: #cf8300;
    }
  }
`;

const PasswordField = styled(StyledField)`
  margin: auto;
  margin-top: 3rem;
`;

const DeleteBtns = styled.div`
  display: flex;
  gap: 1rem;

  button {
    &:first-child {
      border-radius: 5px;
      background-color: transparent;
      color: black;
      border: 2px solid #e1605e;
    }
  }
`;

const LoaderContainer = styled.span``;
const FieldContainer = styled.div`
  input {
    width: 100%;
    margin-bottom: 0.5rem;
  }
`;
interface Props {
  setOpenDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteModal = ({ setOpenDeleteModal }: Props) => {
  const auth = getAuth();
  const ctx = useContext(AuthContext);
  const [showDeleteBtn, setShowDeleteBtn] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  return ReactDOM.createPortal(
    <Container>
      <Wrapper>
        {!showDeleteBtn ? (
          <>
            <h1>Type your username to delete account</h1>
            <Formik
              initialValues={{ password: "" }}
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
                  {error ? <ErrorMsg>Incorrect password</ErrorMsg> : null}
                </FieldContainer>
                <Button type="submit">Confirm</Button>
              </Form>
            </Formik>
          </>
        ) : (
          <>
            <h1>Are you sure?</h1>
            <DeleteBtns>
              <button
                onClick={() => {
                  deleteUser(ctx?.currentUser).then(() =>
                    console.log("delete")
                  );
                }}
              >
                DELETE
              </button>
              <button
                onClick={() => {
                  setOpenDeleteModal(false);
                }}
              >
                DISMISS
              </button>
            </DeleteBtns>
          </>
        )}
      </Wrapper>
    </Container>,
    document.getElementById("deleteAccountModal")!
  );
};

export default DeleteModal;
