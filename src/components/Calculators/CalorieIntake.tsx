import styled from "styled-components";
import { Formik, Form, Field } from "formik";

const Container = styled.section``;

const initialValues = {
  gender: "",
  weight: "",
  height: "",
  age: "",
  activityLevel: "",
};

const CalorieIntake = () => {
  return (
    <Container>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
      >
        <Form>
          <label htmlFor="gender">Gender</label>
          <Field name="gender" placeholder="gender" id="gender" />
          <label htmlFor="age">Age</label>
          <Field name="age" placeholder="age" id="age" />
          <label htmlFor="weight">Weight</label>
          <Field name="weight" placeholder="weight" />
          <label htmlFor="height">Height</label>
          <Field name="height" id="height" />
          <button>Get result</button>
        </Form>
      </Formik>
    </Container>
  );
};

export default CalorieIntake;
