import { Wrapper, Title } from "../UpdateProfileModalStyle";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { ErrorMsg } from "../../Auth/AuthStyle";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext";
import { FormContainer } from "../UpdateProfileModalStyle";
import { Button } from "./BmiSetUpStyles";

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

interface Props {
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const BmiSetUp = ({ setPage }: Props) => {
  const ctx = useContext(AuthContext);
  const uid = ctx?.currentUser.uid;
  return (
    <Wrapper>
      <Title>Set up your BMI</Title>
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
            setPage(2);
          }}
        >
          {({ dirty, isValid }) => (
            <Form>
              <label htmlFor="gender">Gender</label>
              <Field as="select" name="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Field>
              <label htmlFor="age">Age </label>
              <Field name="age" type="text" id="age" placeholder="age" />
              <ErrorMessage name="age" component={ErrorMsg} />
              <label htmlFor="height">Height (cm)</label>
              <Field
                name="height"
                type="height"
                id="height"
                placeholder="height"
              />
              <ErrorMessage name="height" component={ErrorMsg} />
              <label htmlFor="weight">Weight (kg)</label>
              <Field
                name="weight"
                type="weight"
                id="weight"
                placeholder="weight"
              />
              <ErrorMessage name="weight" component={ErrorMsg} />
              <Button type="submit" disabled={!(isValid && dirty)}>
                Next
              </Button>
            </Form>
          )}
        </Formik>
      </FormContainer>
    </Wrapper>
  );
};

export default BmiSetUp;
