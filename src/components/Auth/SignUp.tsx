import { useState, useContext } from "react";
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
import { addDoc, collection, setDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { AuthContext } from "../AuthContext";

const SignUp = () => {
  const ctx = useContext(AuthContext);
  const validationSchema = yup.object().shape({
    email: yup.string().email("invalid email format").required("required"),
    name: yup.string().min(3, "minimum 3 characters"),
    password: yup.string().min(6, "minimum 6 characters").required("required"),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password")], "password must match")
      .required("required"),
  });
  const initialValues = {
    name: "",
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
            const res = await createUserWithEmailAndPassword(
              auth,
              values.email,
              values.password
            );
            await setDoc(doc(db, "users", res.user.uid), {
              email: values.email,
              name: values.name,
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
          <Label htmlFor="name">Name</Label>
          <StyledField type="text" name="name" id="name" />
          <ErrorMessage name="name" component={ValidationError} />
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
