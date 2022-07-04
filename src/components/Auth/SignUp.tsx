import { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  Label,
  FormContainer,
  StyledField,
  StyledLink,
  ErrorMsg,
} from "./AuthStyle";
import { Form, Formik, ErrorMessage } from "formik";
import ValidationError from "./ValidationError";
import * as yup from "yup";
import Loader from "../../assets/Loader";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";

const SignUp = () => {
  const validationSchema = yup.object().shape({
    email: yup.string().email("invalid email format").required("required"),
    password: yup.string().min(6, "minimum 6 characters").required("required"),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password")], "password must match")
      .required("required"),
  });
  const initialValues = {
    email: "",
    password: "",
    passwordConfirmation: "",
  };
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <FormContainer>
      <h2>Sign Up</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, { resetForm }) => {
          try {
            setLoading(true);
            await createUserWithEmailAndPassword(
              auth,
              values.email,
              values.password
            );
            await addDoc(collection(db, "users"), {
              email: values.email,
              authProvider: "email",
            });
            resetForm();
            setSuccess(true);
            setLoading(false);
          } catch {
            setError(true);
          }
        }}
        validationSchema={validationSchema}
      >
        <Form>
          <Label htmlFor="email">Email</Label>
          <StyledField type="email" name="email" id="email" />
          <ErrorMessage name="email" component={ValidationError} />
          <Label htmlFor="password">Password</Label>
          <StyledField type="password" name="password" id="password" />
          <ErrorMessage name="password" component={ValidationError} />
          <Label htmlFor="passwordConfirmation">Confirm Password</Label>
          <StyledField
            type="password"
            name="passwordConfirmation"
            id="passwordConfirmation"
          />
          <ErrorMessage
            name="passwordConfirmation"
            component={ValidationError}
          />
          <button type="submit">Sign Up</button>
        </Form>
      </Formik>
      {error && <ErrorMsg>User with this email already exists</ErrorMsg>}
      {success ? (
        <StyledLink to="/signin">
          You've just registered! Click to log in
        </StyledLink>
      ) : (
        <StyledLink to="/signin">Already have an account? Sign in!</StyledLink>
      )}
      {loading && !error && <Loader />}
    </FormContainer>
  );
};

export default SignUp;
