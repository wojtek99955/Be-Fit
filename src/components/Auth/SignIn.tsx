import { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Formik, Form, ErrorMessage } from "formik";
import Loader from "../../assets/Loader";
import {
  FormContainer,
  Label,
  StyledField,
  StyledLink,
  ErrorMsg,
} from "./AuthStyle";
import ValidationError from "./ValidationError";
import * as yup from "yup";

const SignIn = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = yup.object().shape({
    email: yup.string().email("invalid email format").required("required"),
    password: yup.string().min(6, "minimum 6 characters").required("required"),
  });
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <FormContainer>
      <h2>Sign In</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          try {
            setLoading(true);
            await signInWithEmailAndPassword(
              auth,
              values.email,
              values.password
            );
            setLoading(false);
            navigate("/home");
          } catch {
            setError(true);
          }
        }}
      >
        <Form>
          <Label htmlFor="email">email</Label>
          <StyledField type="email" name="email" id="email" />
          <ErrorMessage name="email" component={ValidationError} />
          <Label htmlFor="password">password</Label>
          <StyledField type="password" name="password" id="password" />
          <ErrorMessage name="password" component={ValidationError} />

          <button type="submit">SignUp</button>
        </Form>
      </Formik>
      {error && <ErrorMsg>Invalid email or password</ErrorMsg>}
      <StyledLink to="/signup"> Don't have an account? Sign up!</StyledLink>
      {loading && !error && <Loader />}
    </FormContainer>
  );
};

export default SignIn;
