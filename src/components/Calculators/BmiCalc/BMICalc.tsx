import styled from "styled-components";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { ErrorMsg } from "../../Auth/AuthStyle";
import {
  Container,
  StyledField,
  Wrapper,
  Result,
  Text,
  BmiForm,
} from "./BmiCalcStyle";

const initialValues = {
  gender: "",
  age: "",
  height: "",
  weight: "",
};

const validationSchema = yup.object().shape({
  age: yup.number().min(18).required("required"),
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
        <BmiForm>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values) => {
              setBmi(+values.weight / Math.pow(+values.height / 100, 2));
            }}
          >
            <Form>
              <StyledField as="select" name="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </StyledField>
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
        </BmiForm>
      </Wrapper>
      {bmi ? <Result>Your BMI : {bmi.toFixed(1)}</Result> : null}
    </Container>
  );
};

export default BMICalc;
