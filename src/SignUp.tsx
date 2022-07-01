import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { Link } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { Formik, Form, Field } from "formik";
import styled from "styled-components";

const Label = styled.label`
  display: block;
`;
const Container = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FormContainer = styled.div`
  h2 {
    font-size: 2rem;
    margin-bottom: 3rem;
    color: #ffa101;
  }
`;

const StyledField = styled(Field)`
  border: 1px solid #ffa101;
`;

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
            <Label htmlFor="email"> Confirm Password</Label>
            <StyledField
              id="confirmPassword"
              name="confirmPasssword"
              placeholder="confirmPpassword"
            />
            <button>Sign Up</button>
          </Form>
        </Formik>
        <Link to="/signin"> Already have an account? Sign in!</Link>
      </FormContainer>
    </Container>
  );
};

export default SignUp;
