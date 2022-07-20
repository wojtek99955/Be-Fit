import { Formik, Form, Field } from "formik";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.section`
  margin-top: 6rem;
  width: calc(100vw - 14rem);
`;

const Row = styled.div`
  display: flex;
  gap: 2rem;
`;

const initialValues = {
  currentWeight: "",
  goalWeight: "",
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

const Result = styled.div``;

interface Result {
  days: number;
  toLoose: number;
}

const YourGoal = () => {
  const [result, setResult] = useState<null | Result>(null);

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
                  <StyledField
                    name="currentWeight"
                    placeholder="current weight"
                  />
                  <StyledField name="goalWeight" placeholder="goal weight" />
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
            <div>{result?.toLoose} kg</div>
            <h2>With given calorie deficite you'll achevie your goal in:</h2>
            <div>{result?.days} days</div>
          </Result>
        </FormContainer>
      </Wrapper>
    </Container>
  );
};

export default YourGoal;
