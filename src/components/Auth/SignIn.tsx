import { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Formik, Form, ErrorMessage } from "formik";
import Loader from "../../assets/Loader";
import { FormContainer, Label, StyledField, StyledLink } from "./AuthStyle";
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
  return (
    <FormContainer>
      <h2>Sign In</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          setLoading(true);
          await signInWithEmailAndPassword(auth, values.email, values.password);
          setLoading(false);
          navigate("/home");
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
      <StyledLink to="/data"> Don't have an account? Sign up!</StyledLink>
      {loading && <Loader />}
    </FormContainer>
  );
};

export default SignIn;
