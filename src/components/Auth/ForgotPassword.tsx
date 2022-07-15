import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { Formik, Form } from "formik";
import { useState } from "react";
import { FormContainer, StyledField } from "./AuthStyle";
import styled from "styled-components";
import { GoMailRead } from "react-icons/go";

const SuccessMessage = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    color: black;
    text-align: center;
  }
  p {
    max-width: 15rem;
    text-align: center;
    margin: auto;
    color: #55595b;
  }
`;

const MailIcon = styled(GoMailRead)`
  color: #ffa101;
  font-size: 4rem;
  background-color: #ffe9c5;
  padding: 0.8rem 0.6rem;
  box-sizing: content-box;
  border-radius: 12px;
  margin-bottom: 2rem;
`;

const ForgotPassword = () => {
  const auth = getAuth();
  const [success, setSuccess] = useState(false);

  return (
    <FormContainer>
      {!success ? (
        <>
          <h2>Forgot Password</h2>
          <Formik
            initialValues={{ email: "" }}
            onSubmit={async (values) => {
              try {
                await sendPasswordResetEmail(auth, values.email);
                console.log("success");
                setSuccess(true);
              } catch {
                console.log("error");
              }
            }}
          >
            <Form>
              <StyledField name="email" type="email" />
              <button type="submit">Send email</button>
            </Form>
          </Formik>
        </>
      ) : (
        <SuccessMessage>
          <MailIcon />
          <h2>Check your email</h2>
          <p>We have sent a password recover instruction in your email.</p>
        </SuccessMessage>
      )}
    </FormContainer>
  );
};

export default ForgotPassword;
