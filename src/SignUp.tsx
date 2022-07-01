import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { Link } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { Formik, Form, Field } from "formik";

const SignUp = () => {
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  return (
    <div>
      <h2>SignUp</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          createUserWithEmailAndPassword(auth, values.email, values.password);
        }}
      >
        <Form>
          <label htmlFor="email">Email</label>
          <Field id="email" name="email" placeholder="email" />
          <label htmlFor="email">Email</label>
          <Field id="email" name="email" placeholder="email" />
          <button>Sign Up</button>
        </Form>
      </Formik>
      <Link to="/signin"> Already have an account? Sign in!</Link>
    </div>
  );
};

export default SignUp;
