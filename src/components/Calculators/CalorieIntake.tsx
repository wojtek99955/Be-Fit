import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import { useState } from "react";

const Container = styled.section`
  width: 100%;
  label {
    display: block;
    font-size: 1.2rem;
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    color: #55595b;
    font-weight: 500;
  }
  button {
    display: block;
    border: none;
    background-color: #ffa101;
    color: white;
    padding: 0.8rem 0;
    cursor: pointer;
    border-radius: 8px;
    margin-top: 2rem;
    width: 100%;
    font-size: 1rem;
    &:hover {
      background-color: #cf8300;
    }
  }
  input {
    width: 3rem;
    border: none;
    outline: none;
    font-size: 1.2rem;
    display: block;
    height: 3rem;
    color: #55595b;
    font-weight: 600;
  }
`;

const Wrapper = styled.div`
  width: 500px;
  margin: auto;
  padding: 2rem;
  background-color: #f3f4f6;
  border-radius: 12px;
  p {
    margin-bottom: 1rem;
  }
`;

const initialValues = {
  gender: "male",
  weight: "",
  height: "",
  age: "",
  activityLevel: "",
};

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1px;
  background-color: white;
`;

const OptionFieldName = styled.div`
  font-size: 1.2rem;
  height: 3rem;
  display: flex;
  align-items: center;
  color: #55595b;
  padding: 1rem;
`;
const Result = styled.div`
  background-color: white;
  margin-top: 2rem;
  padding: 1rem;

  h3 {
    font-size: 1.2rem;
    font-weight: 400;
    color: #55595b;
  }
  span {
    font-size: 1.6rem;
    font-weight: 500;
  }
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
        <p>
          This calculator will help you to calculate how much energy your body
          needs to maintain / gain / loose weight.
        </p>
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
            <InputContainer>
              <OptionFieldName>Gender</OptionFieldName>
              <Field as="select" name="gender">
                <option value="male">male</option>
                <option value="female">female</option>
              </Field>
            </InputContainer>
            <InputContainer>
              <label htmlFor="age">Age</label>
              <Field name="age" id="age" />
            </InputContainer>

            <InputContainer>
              <label htmlFor="weight">Weight</label>
              <Field name="weight" id="weight" />
            </InputContainer>
            <InputContainer>
              <label htmlFor="height">Height</label>
              <Field name="height" id="height" />
            </InputContainer>
            <InputContainer>
              <OptionFieldName>Activity</OptionFieldName>
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
                <option value={Activity.veryActive}>
                  {Activity.veryActive}
                </option>
                <option value={Activity.sport}>{Activity.sport}</option>
              </Field>
            </InputContainer>
            <button type="submit">Get result</button>
          </Form>
        </Formik>

        {formValues ? (
          <Result>
            <h3>
              Intake <span>{(getBMR()! * getPAL()!).toFixed(0)} </span>kcal/day
            </h3>
          </Result>
        ) : null}
      </Wrapper>
    </Container>
  );
};

export default CalorieIntake;
