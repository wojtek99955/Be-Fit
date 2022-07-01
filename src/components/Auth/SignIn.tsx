import { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext, useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
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
  return (
    <Container>
      <FormContainer>
        <h2>Sign In</h2>
        <form onSubmit={handleLogin}>
          <Label htmlFor="email">email</Label>
          <StyledField
            type="email"
            name="email"
            id="email"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <Label htmlFor="password">password</Label>
          <StyledField
            type="password"
            name="password"
            id="password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
          <button type="submit">SignUp</button>
          {error && <span>Wrong email or password</span>}
        </form>
        <StyledLink to="/signup"> Don't have an account? Sign up!</StyledLink>
      </FormContainer>
    </Container>
  );
};

export default SignIn;
