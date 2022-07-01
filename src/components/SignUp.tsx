import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { Formik, Form, Field } from "formik";
import styled from "styled-components";

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
`;
const Container = styled.section`
  height: 100vh;
  background-color: #fff7e8;
`;
const FormContainer = styled.div`
  background-color: white;
  padding: 1rem;
  max-width: 450px;
  margin: auto;
  display: block;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  h2 {
    font-size: 2rem;
    margin-bottom: 3rem;
    color: #ffa101;
  }

  button {
    display: block;
    background-color: #ffa101;
    border: none;
    padding: 0.8rem 2rem;
    color: white;
    width: 100%;
    cursor: pointer;
    margin-bottom: 2rem;
  }
`;

const StyledField = styled(Field)`
  border: 2px solid #ffa101;
  padding: 0.8rem 0.5rem;
  width: 100%;
  margin-bottom: 1.2rem;
  border-radius: 10px;
`;

const StyledLink = styled(Link)`
  color: grey;
  text-decoration: none;
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
