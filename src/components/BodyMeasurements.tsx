import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import { setDoc, doc, query, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";

const Container = styled.section`
  padding-top: 8rem;
  width: 100%;
`;
const Wrapper = styled.div`
  max-width: 500px;
  margin: auto;
  h2 {
    text-align: center;
  }
`;

const initialValues = {
  gender: "",
  age: "",
  height: "",
  weight: "",
};

const BodyMeasurements = () => {
  const ctx = useContext(AuthContext);
  const uid = ctx?.currentUser.uid;
  return (
    <Container>
      <Wrapper>
        <h2>Your Body</h2>
        <Formik
          initialValues={initialValues}
          onSubmit={async (values) => {
            console.log(values);
          }}
        >
          <Form>
            <Field as="select" name="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Field>
            <label htmlFor="age">Age</label>
            <Field name="age" type="text" id="age" />
            <label htmlFor="height">Height</label>
            <Field name="height" type="height" id="height" />
            <label htmlFor="weight">Weight</label>
            <Field name="weight" type="weight" id="weight" />
            <button type="submit">Save</button>
          </Form>
        </Formik>
      </Wrapper>
    </Container>
  );
};

export default BodyMeasurements;
