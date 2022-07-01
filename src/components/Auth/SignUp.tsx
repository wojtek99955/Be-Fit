import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import {
  Label,
  Container,
  FormContainer,
  StyledField,
  StyledLink,
} from "./AuthStyle";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      await e.preventDefault();
      await createUserWithEmailAndPassword(auth, email, password);
    } catch {
      setError(true);
    }
  };
  return (
    <Container>
      <FormContainer>
        <h2>Sign Up</h2>
        <form onSubmit={handleLogin}>
          <Label htmlFor="email">Email</Label>
          <StyledField
            id="email"
            name="email"
            placeholder="email"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
            }}
          />
          <Label htmlFor="password">Password</Label>
          <StyledField id="password" name="passsword" placeholder="password" />
          <Label htmlFor="confirmPassword"> Confirm Password</Label>
          <StyledField
            id="confirmPassword"
            name="confirmPasssword"
            placeholder="confirm password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit">Sign Up</button>
        </form>
        <StyledLink to="/signin"> Already have an account? Sign in!</StyledLink>
      </FormContainer>
    </Container>
  );
};

export default SignUp;
