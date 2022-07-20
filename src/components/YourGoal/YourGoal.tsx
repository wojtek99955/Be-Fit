import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";
import { useState } from "react";
import * as yup from "yup";
import { ErrorMsg } from "../Auth/AuthStyle";

const Container = styled.section`
  margin-top: 6rem;
  width: calc(100vw - 14rem);
`;

const Row = styled.div`
  display: flex;
  gap: 2rem;
`;

const initialValues = {
  currentWeight: 0,
  goalWeight: 0,
  calorieDeficit: 0,
};

const StyledField = styled(Field)`
  width: 100%;
  display: block;
  font-size: 1.3rem;
  padding: 0.2rem;
`;

const FormContainer = styled.div`
  margin-top: 3rem;
  button {
    background-color: #ffa101;
    border: none;
    padding: 1rem 2.3rem;
    display: block;
    margin: 2rem auto;
    font-size: 1.5rem;
    color: white;
    cursor: pointer;
  }
`;

const RangeInput = styled.div`
  width: 100%;
  position: relative;

  input {
    -webkit-appearance: none;
    width: 100%;
    height: 1rem;
    border-radius: 5px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      height: 2rem;
      width: 2rem;
      border-radius: 50%;
      background-color: #ffa101;
    }
    &::-moz-range-thumb {
      width: 2rem;
      height: 2rem;
      background: #04aa6d;
      appearance: none;
      cursor: pointer;
    }
  }
`;

const RangeValue = styled.div`
  height: 3rem;
  margin: 3rem 0;
  display: flex;
  align-items: center;
  font-size: 2rem;
  justify-content: center;
`;

const Wrapper = styled.div`
  max-width: 600px;
  margin: auto;
`;

const Result = styled.div`
  padding-top: 2rem;
  h2 {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
  div {
    margin-bottom: 3rem;
  }
`;

const FieldContainer = styled.div``;

interface ResultType {
  days: number;
  toLoose: number;
}

const validationSchema = yup.object().shape({
  currentWeight: yup
    .number()
    .typeError("only number")
    .max(200, "weight less than 200 is valid")
    .required("required"),
  goalWeight: yup
    .number()
    .typeError("only number")
    .max(150, "weight less than 150 is valid")
    .required("required"),
});

const YourGoal = () => {
  const [result, setResult] = useState<null | ResultType>(null);

  function getDays(currentWeight: number, goalWeight: number, deficit: number) {
    return ((currentWeight - goalWeight) * 7000) / deficit;
  }
  function weightToLoose(currentWeight: number, goalWeight: number) {
    return currentWeight - goalWeight;
  }

  return (
    <Container>
      <Wrapper>
        <h1>Your goal </h1>
        <FormContainer>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values.calorieDeficit);
              const days = getDays(
                +values.currentWeight,
                +values.goalWeight,
                +values.calorieDeficit
              );
              const toLoose = weightToLoose(
                +values.currentWeight,
                +values.goalWeight
              );

              setResult({ days, toLoose });
            }}
          >
            {({ handleChange, values }) => (
              <Form>
                <Row>
                  <FieldContainer>
                    <StyledField
                      name="currentWeight"
                      placeholder="current weight"
                    />
                    <ErrorMessage name="currentWeight" component={ErrorMsg} />
                  </FieldContainer>
                  <FieldContainer>
                    <StyledField name="goalWeight" placeholder="goal weight" />
                    <ErrorMessage name="goalWeight" component={ErrorMsg} />
                  </FieldContainer>
                </Row>
                <RangeValue>{values.calorieDeficit} kcal</RangeValue>
                <RangeInput>
                  <Field
                    type="range"
                    min="0"
                    max="1000"
                    step="100"
                    name="calorieDeficit"
                    onChange={handleChange}
                  />
                </RangeInput>
                <button type="submit">Calculate</button>
              </Form>
            )}
          </Formik>
          <Result>
            <h2>You want to loose:</h2>
            <div>{result ? result.toLoose : 0} kg</div>
            <h2>You'll achevie your goal in:</h2>
            <div>{result ? result.days : 0} days</div>
            <div>{result?.days}</div>
          </Result>
        </FormContainer>
      </Wrapper>
    </Container>
  );
};

export default YourGoal;
