import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { doc, setDoc } from "firebase/firestore";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  function handleLogin(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        setError(true);
      });
  }
  return (
    <div>
      <h2>SignUp</h2>
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
      <Link to="/signin"> Already have an account? Sign in!</Link>
    </div>
  );
};

export default SignUp;
