import { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext, useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import {
  Container,
  FormContainer,
  Label,
  StyledField,
  StyledLink,
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
  return (
    <Container>
      <FormContainer>
        <h2>Sign In</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            await signInWithEmailAndPassword(
              auth,
              values.email,
              values.password
            );
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
      </FormContainer>
    </Container>
  );
};

export default SignIn;
