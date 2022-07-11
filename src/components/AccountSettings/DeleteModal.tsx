import ReactDOM from "react-dom";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import { getAuth, reauthenticateWithCredential } from "firebase/auth";
import { EmailAuthProvider } from "firebase/auth";
import { AuthContext } from "../AuthContext";
import { useContext, useState } from "react";
import { deleteUser } from "firebase/auth";

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
    margin-top: 8rem;
    color: white;
    background-color: #ffa101;
    cursor: pointer;
    &:hover {
      background-color: #cf8300;
    }
  }
`;

const DeleteModal = () => {
  const auth = getAuth();
  const ctx = useContext(AuthContext);
  const [showDeleteBtn, setShowDeleteBtn] = useState(false);

  return ReactDOM.createPortal(
    <Container>
      <Wrapper>
        {!showDeleteBtn ? (
          <Formik
            initialValues={{ password: "" }}
            onSubmit={async (values) => {
              try {
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
              } catch {
                console.log("incorrect password");
              }
            }}
          >
            <Form>
              <Field
                type="password"
                name="password"
                id="password"
                placeholder="Your password"
              />
              <button type="submit">Confirm</button>
            </Form>
          </Formik>
        ) : (
          <>
            <button
              onClick={() => {
                deleteUser(ctx?.currentUser).then(() => console.log("delete"));
              }}
            >
              DELETE
            </button>
            <button>DISMISS</button>
          </>
        )}
        <h1>Type your username to delete account</h1>
      </Wrapper>
    </Container>,
    document.getElementById("deleteAccountModal")!
  );
};

export default DeleteModal;
