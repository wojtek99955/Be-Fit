import { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext, useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import {
  Container,
  FormContainer,
  Label,
  StyledField,
  StyledLink,
} from "./AuthStyle";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigation = useNavigate();

  const ctx = useContext(AuthContext);
  const data = ctx?.currentUser;
  console.log(data + "cos");
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      await e.preventDefault();
      await signInWithEmailAndPassword(auth, email, password);
      navigation("/home");
    } catch {
      setError(true);
    }
  };

  const initialValues = {
    email: "",
    password: "",
  };
  let navigate = useNavigate();
  return (
    <Container>
      <FormContainer>
        <h2>Sign In</h2>
        <Formik
          initialValues={initialValues}
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
            <Field type="email" name="email" id="email" />
            <Label htmlFor="password">password</Label>
            <Field type="password" name="password" id="password" />
            <button type="submit">SignUp</button>
          </Form>
        </Formik>
        <StyledLink to="/signup"> Don't have an account? Sign up!</StyledLink>
      </FormContainer>
    </Container>
  );
};

export default SignIn;
