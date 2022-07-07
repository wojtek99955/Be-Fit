import { Formik, Form } from "formik";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { AuthContext } from "../AuthContext";
import { useContext } from "react";
import { Container, Wrapper, Row, StyledField } from "./BodyMeasurementStyle";

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
        <h2>My Body</h2>
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
