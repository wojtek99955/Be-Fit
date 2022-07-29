import { Formik, Form, ErrorMessage } from "formik";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { AuthContext } from "../AuthContext";
import { useContext } from "react";
import { Container, Wrapper, StyledField } from "./BodyMeasurementStyle";
import * as yup from "yup";
import { ErrorMsg } from "../Auth/AuthStyle";

const initialValues = {
  gender: "",
  age: "",
  height: "",
  weight: "",
};

const validationSchema = yup.object().shape({
  age: yup
    .number()
    .typeError("only numbers")
    .min(16, "16 is a minimum value")
    .max(100, "100 is a maximum value")
    .required("required"),
  height: yup
    .number()
    .typeError("only numbers")
    .min(140, "140 is a minimum value")
    .max(250, "250 is a maximum value")
    .required("required"),
  weight: yup
    .number()
    .typeError("only numbers")
    .min(40, "40 is a minimum value")
    .max(250, "250 is a maximum value")
    .required("required"),
});

const BodyMeasurements = () => {
  const ctx = useContext(AuthContext);
  const uid = ctx?.currentUser.uid;
  return (
    <Container>
      <Wrapper>
        <h2>My Body</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
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
            <StyledField name="age" type="text" id="age" placeholder="age" />
            <ErrorMessage name="age" component={ErrorMsg} />
            <StyledField
              name="height"
              type="height"
              id="height"
              placeholder="height"
            />
            <ErrorMessage name="height" component={ErrorMsg} />
            <StyledField
              name="weight"
              type="weight"
              id="weight"
              placeholder="weight"
            />
            <ErrorMessage name="weight" component={ErrorMsg} />
            <button type="submit">Save</button>
          </Form>
        </Formik>
      </Wrapper>
    </Container>
  );
};

export default BodyMeasurements;
