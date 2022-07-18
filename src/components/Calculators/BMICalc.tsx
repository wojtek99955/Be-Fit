import styled from "styled-components";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { ErrorMsg } from "../Auth/AuthStyle";

export const Container = styled.section`
  /* padding-top: 8rem; */
  width: 100%;
  padding: 0 1rem;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 3rem;
  h2 {
    margin-bottom: 2rem;
    font-size: 3rem;
    color: #555555;
  }
  button {
    display: block;
    margin: auto;
    padding: 0.7rem 2rem;
    font-size: 1rem;
    border: none;
    background-color: #ffa101;
    color: white;
    cursor: pointer;
    border-radius: 8px;
    margin-top: 1rem;
    &:hover {
      background-color: #cf8300;
    }
  }
  p {
    line-height: 1.8rem;
    font-size: 1.1rem;
    color: #555555;
  }
`;

export const StyledField = styled(Field)`
  margin: 2px auto;
  display: block;
  width: 100%;
  padding: 0.5rem 0.2rem;
  border: none;
  outline: none;
  font-size: 1.2rem;
  height: 3rem;
`;

const initialValues = {
  gender: "",
  age: "",
  height: "",
  weight: "",
};

const Result = styled.div`
  text-align: center;
  margin-top: 2rem;
  font-size: 1.5rem;
`;

const Text = styled.div``;
const BmiForm = styled.div`
  min-width: 25rem;
  background-color: #f3f4f6;
  padding: 2rem;
  border-radius: 12px;
`;

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
