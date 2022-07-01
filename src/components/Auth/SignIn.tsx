import { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext, useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";

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
    <div>
      <div>
        <h2>Sign In</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">SignUp</button>
          {error && <span>Wrong email or password</span>}
        </form>
        <Link to="/signup"> Don't have an account? Sign up!</Link>
      </div>
    </div>
  );
};

export default SignIn;
