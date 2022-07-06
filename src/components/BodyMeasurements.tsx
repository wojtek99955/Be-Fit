import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";

const Container = styled.section`
  padding-top: 8rem;
  width: 100%;
`;
const Wrapper = styled.div`
  max-width: 350px;
  margin: auto;
  h2 {
    text-align: center;
    margin-bottom: 3rem;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const StyledField = styled(Field)`
  margin: auto;
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem 0.2rem;
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
            await setDoc(doc(db, `users/${uid}/body-details`, "details"), {
              gender: values.gender,
              age: +values.age,
              height: +values.height,
              weight: +values.weight,
            });
          }}
        >
          <Form>
            <Row>
              <StyledField as="select" name="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </StyledField>
              <StyledField name="age" type="text" id="age" placeholder="age" />
            </Row>
            <StyledField
              name="height"
              type="height"
              id="height"
              placeholder="height"
            />
            <StyledField
              name="weight"
              type="weight"
              id="weight"
              placeholder="weight"
            />
            <button type="submit">Save</button>
          </Form>
        </Formik>
      </Wrapper>
    </Container>
  );
};

export default BodyMeasurements;
