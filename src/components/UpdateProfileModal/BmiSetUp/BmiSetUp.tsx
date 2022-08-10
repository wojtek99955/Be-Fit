import styled from "styled-components";
import { Wrapper } from "../UpdateProfileModalStyle";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { ErrorMsg } from "../../Auth/AuthStyle";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext";
import { FormContainer } from "./BmiSetUpStyles";

const initialValues = {
  gender: "",
  age: "",
  height: "",
  weight: "",
};

const validationSchema = yup.object().shape({
  age: yup
    .number()
    .typeError("you must specify a number")
    .min(18)
    .positive("only positive numbers")
    .integer("only integer numbers")
    .required("required"),
  height: yup
    .number()
    .typeError("you must specify a number")
    .min(100)
    .required("required"),
  weight: yup
    .number()
    .typeError("you must specify a number")
    .min(40)
    .required("required"),
});

const BmiSetUp = () => {
  const ctx = useContext(AuthContext);
  const uid = ctx?.currentUser.uid;
  return (
    <Wrapper>
      BmiSetUp
      <FormContainer>
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
            <Field as="select" name="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Field>
            <Field name="age" type="text" id="age" placeholder="age" />
            <ErrorMessage name="age" component={ErrorMsg} />
            <Field
              name="height"
              type="height"
              id="height"
              placeholder="height"
            />
            <ErrorMessage name="height" component={ErrorMsg} />
            <Field
              name="weight"
              type="weight"
              id="weight"
              placeholder="weight"
            />
            <ErrorMessage name="weight" component={ErrorMsg} />

            <button type="submit">Save</button>
          </Form>
        </Formik>
      </FormContainer>
    </Wrapper>
  );
};

export default BmiSetUp;
