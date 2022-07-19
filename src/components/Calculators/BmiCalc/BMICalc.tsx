import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { ErrorMsg } from "../../Auth/AuthStyle";
import {
  Container,
  FormWrapper,
  Wrapper,
  Result,
  Text,
} from "../CalculatorsStyle";

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
  height: yup.number().min(100).required("required"),
  weight: yup.number().min(40).required("required"),
});

const BMICalc = () => {
  const [bmi, setBmi] = useState<any | object>(null);

  return (
    <Container>
      <Wrapper>
        <Text>
          <h2>BMI Calculator</h2>
          <p>
            Body mass index (BMI) is a value derived from the mass (weight) and
            height of a person. The BMI is defined as the body mass divided by
            the square of the body height, and is expressed in units of kg/m2,
            resulting from mass in kilograms and height in metres.
          </p>
        </Text>
        <FormWrapper>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values) => {
              setBmi(+values.weight / Math.pow(+values.height / 100, 2));
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
          {bmi ? (
            <Result>
              <span>Your BMI :</span> <strong>{bmi.toFixed(1)}</strong>
            </Result>
          ) : null}
        </FormWrapper>
      </Wrapper>
    </Container>
  );
};

export default BMICalc;
