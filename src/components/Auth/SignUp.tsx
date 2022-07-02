import { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  Label,
  Container,
  FormContainer,
  StyledField,
  StyledLink,
} from "./AuthStyle";
import { Form, Formik, ErrorMessage } from "formik";
import ValidationError from "./ValidationError";
import * as yup from "yup";

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
  };
  const [success, setSuccess] = useState(false);

  return (
    <Container>
      <FormContainer>
        <h2>Sign Up</h2>
        <Formik
          initialValues={initialValues}
          onSubmit={async (values) => {
            await createUserWithEmailAndPassword(
              auth,
              values.email,
              values.password
            );

            setSuccess(true);
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
        {success ? (
          <StyledLink to="/signin">
            You've just registered! Click to log in
          </StyledLink>
        ) : (
          <StyledLink to="/signin">
            Already have an account? Sign in!
          </StyledLink>
        )}
      </FormContainer>
    </Container>
  );
};

export default SignUp;
