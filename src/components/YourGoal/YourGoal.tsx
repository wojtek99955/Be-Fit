import { Formik, Form, Field } from "formik";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.section`
  margin-top: 6rem;
`;

const Row = styled.div`
  display: flex;
`;

const initialValues = {
  currentWeight: "",
  goalWeight: "",
  calorieDeficit: 100,
};

const StyledField = styled(Field)`
  width: 15rem;
  display: block;
  font-size: 1.3rem;
  padding: 0.2rem;
`;

const FormContainer = styled.div`
  margin-top: 3rem;
`;

const RangeInput = styled.div`
  width: 100%;
  margin-top: 2rem;

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
      width: 1rem;
      height: 1rem;
      background: #04aa6d;
      cursor: pointer;
    }
  }
`;

const YourGoal = () => {
  const [result, setResult] = useState<null | number>(null);

  function getDays(currentWeight: number, goalWeight: number, deficit: number) {
    return ((currentWeight - goalWeight) * 7000) / deficit;
  }

  return (
    <Container>
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

            setResult(days);
          }}
        >
          <Form>
            <Row>
              <StyledField name="currentWeight" placeholder="current weight" />
              <StyledField name="goalWeight" placeholder="goal weight" />
            </Row>
            <RangeInput>
              <Field
                type="range"
                min="100"
                max="1000"
                step="50"
                name="calorieDeficit"
              />
            </RangeInput>
            <button type="submit">Calculate</button>
          </Form>
        </Formik>
        <h2>result: {result}</h2>
      </FormContainer>
    </Container>
  );
};

export default YourGoal;
