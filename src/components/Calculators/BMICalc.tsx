import styled from "styled-components";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { ErrorMsg } from "../Auth/AuthStyle";

export const Container = styled.section`
  /* padding-top: 8rem; */
  width: 100%;
`;
export const Wrapper = styled.div`
  width: 25rem;
  margin: auto;
  h2 {
    text-align: center;
    margin-bottom: 3rem;
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
    &:hover {
      background-color: #cf8300;
    }
  }
`;

export const StyledField = styled(Field)`
  margin: auto;
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem 0.2rem;
  border-left: none;
  border-right: none;
  border-top: none;
  outline: none;
  border-bottom: 2px solid #31525b;
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
        <h2>BMI Calculator</h2>
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
      </Wrapper>
      {bmi ? <Result>Your BMI : {bmi.toFixed(1)}</Result> : null}
    </Container>
  );
};

export default BMICalc;
