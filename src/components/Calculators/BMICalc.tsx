import React from "react";
import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import { BsCalendar3 } from "react-icons/bs";
import { GiBodyHeight } from "react-icons/gi";
import { GiWeight } from "react-icons/gi";
import { GoSettings } from "react-icons/go";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { ErrorMsg } from "../Auth/AuthStyle";
import { ErrorMessage } from "formik";

export const Container = styled.section`
  /* padding-top: 8rem; */
  width: 100%;
`;
export const Wrapper = styled.div`
  max-width: 350px;
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

export const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
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
            <Row>
              <StyledField as="select" name="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </StyledField>
              <StyledField name="age" type="text" id="age" placeholder="age" />
              <ErrorMessage name="age" component={<ErrorMsg />} />
            </Row>
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
