import styled from "styled-components";
import { Formik, Form, Field } from "formik";

const Container = styled.section`
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

const initialValues = {
  gender: "",
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
  sedentaryLifestyle = "sedentary lifestyle",
  littleActive = "little active lifestyle",
  moderateActivity = "moderate physical activity",
  veryActive = "very active lifestyle",
  sport = "sport lifestyle",
}

const SelectField = styled(Field)`
  width: 100%;
  margin-bottom: 1rem;
  height: 2.5rem;
`;

const CalorieIntake = () => {
  return (
    <Container>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
      >
        <Form>
          <Row>
            <InputContainer>
              <label htmlFor="gender">Gender</label>
              <SelectField as="select" name="gender">
                <option value="male">male</option>
                <option value="female">female</option>
              </SelectField>
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
          <SelectField as="select" name="activity">
            <option value={Activity.littleActive}>
              {Activity.littleActive}
            </option>
            <option value={Activity.sedentaryLifestyle}>
              {Activity.sedentaryLifestyle}
            </option>
            <option value={Activity.moderateActivity}>
              {Activity.moderateActivity}
            </option>
            <option value={Activity.veryActive}>{Activity.veryActive}</option>
            <option value={Activity.sport}>{Activity.sport}</option>
          </SelectField>
          <button type="submit">Get result</button>
        </Form>
      </Formik>
    </Container>
  );
};

export default CalorieIntake;
