import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { Formik, Form, Field } from "formik";
import {
  Label,
  Container,
  FormContainer,
  StyledField,
  StyledLink,
} from "./AuthStyle";

const SignUp = () => {
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  return (
    <Container>
      <FormContainer>
        <h2>Sign Up</h2>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            createUserWithEmailAndPassword(auth, values.email, values.password);
          }}
        >
          <Form>
            <Label htmlFor="email">Email</Label>
            <StyledField id="email" name="email" placeholder="email" />
            <Label htmlFor="email">Password</Label>
            <StyledField
              id="password"
              name="passsword"
              placeholder="password"
            />
            <Label htmlFor="confirmPassword"> Confirm Password</Label>
            <StyledField
              id="confirmPassword"
              name="confirmPasssword"
              placeholder="confirm password"
            />
            <button>Sign Up</button>
          </Form>
        </Formik>
        <StyledLink to="/signin"> Already have an account? Sign in!</StyledLink>
      </FormContainer>
    </Container>
  );
};

export default SignUp;
