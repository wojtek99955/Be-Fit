import styled from "styled-components";
import { Formik, Form, Field } from "formik";

const Container = styled.section`
  label {
    display: block;
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
`;
const InputContainer = styled.div``;

enum Activity {
  sedentaryLifestyle = "sedentary lifestyle",
  littleActive = "little active lifestyle",
  moderateActivity = "moderate physical activity",
  veryActive = "very active lifestyle",
  sport = "sport lifestyle",
}

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
              <Field name="gender" placeholder="gender" id="gender" />
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
          <Field as="select" name="activity">
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
          </Field>
          <button>Get result</button>
        </Form>
      </Formik>
    </Container>
  );
};

export default CalorieIntake;
