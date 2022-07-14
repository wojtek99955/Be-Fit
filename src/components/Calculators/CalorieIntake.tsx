import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import { useState } from "react";

const Container = styled.section`
  width: 100%;
  label {
    display: block;
    margin-bottom: 0.5rem;
  }
  button {
    display: block;
    border: none;
    background-color: green;
    color: white;
    padding: 0.8rem 1.8rem;
    cursor: pointer;
  }
  input {
    padding: 0.2rem;
    margin-bottom: 1.5rem;
    height: 2.5rem;
    width: 100%;
  }
`;

const Wrapper = styled.div`
  max-width: 600px;
  margin: auto;
`;

const initialValues = {
  gender: "male",
  weight: "",
  height: "",
  age: "",
  activityLevel: "",
};

const Row = styled.div`
  display: flex;
  gap: 1.5rem;
`;
const InputContainer = styled.div`
  width: 100%;
`;

enum Activity {
  zero = "zero physical activity",
  sedentaryLifestyle = "sedentary lifestyle",
  rarely = "1/2 activities per week",
  moderateActivity = "3/4 activities per week",
  veryActive = "very active lifestyle",
  sport = "sport lifestyle",
}

interface FormData {
  gender: string;
  height: number;
  age: number;
  activity: string;
  weight: number;
}

const CalorieIntake = () => {
  const [formValues, setFormValues] = useState<FormData | undefined>();
  function getBMR() {
    if (formValues?.gender === "male") {
      return (
        10 * formValues.weight +
        6.15 * formValues.height -
        5 * formValues.age +
        5
      );
    } else {
      return (
        10 * formValues!.weight +
        6.15 * formValues!.height -
        5 * formValues!.age -
        161
      );
    }
  }

  function getPAL() {
    switch (formValues?.activity) {
      case Activity.zero:
        return 1.2;
      case Activity.sedentaryLifestyle:
        return 1.4;
      case Activity.rarely:
        return 1.5;
      case Activity.moderateActivity:
        return 1.7;
      case Activity.veryActive:
        return 2;
      case Activity.sport:
        return 2.4;
    }
  }
  return (
    <Container>
      <Wrapper>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            setFormValues({
              age: +values.age,
              gender: values.gender,
              activity: values.activityLevel,
              weight: +values.weight,
              height: +values.height,
            });
          }}
        >
          <Form>
            <Row>
              <InputContainer>
                <label htmlFor="gender">Gender</label>
                <Field as="select" name="gender">
                  <option value="male">male</option>
                  <option value="female">female</option>
                </Field>
              </InputContainer>
              <InputContainer>
                <label htmlFor="age">Age</label>
                <Field name="age" placeholder="age" id="age" />
              </InputContainer>
            </Row>
            <Row>
              <InputContainer>
                <label htmlFor="weight">Weight</label>
                <Field name="weight" placeholder="weight" />
              </InputContainer>
              <InputContainer>
                <label htmlFor="height">Height</label>
                <Field name="height" id="height" placeholder="height" />
              </InputContainer>
            </Row>
            <Field as="select" name="activityLevel">
              <option value="-">-</option>
              <option value={Activity.zero}>{Activity.zero}</option>
              <option value={Activity.rarely}>{Activity.rarely}</option>
              <option value={Activity.sedentaryLifestyle}>
                {Activity.sedentaryLifestyle}
              </option>
              <option value={Activity.moderateActivity}>
                {Activity.moderateActivity}
              </option>
              <option value={Activity.veryActive}>{Activity.veryActive}</option>
              <option value={Activity.sport}>{Activity.sport}</option>
            </Field>
            <button type="submit">Get result</button>
          </Form>
        </Formik>
        {formValues ? (
          <h3>Intake {(getBMR()! * getPAL()!).toFixed(0)} calories</h3>
        ) : null}
      </Wrapper>
    </Container>
  );
};

export default CalorieIntake;
