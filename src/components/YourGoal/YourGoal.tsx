import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState, useContext } from "react";
import * as yup from "yup";
import { ErrorMsg } from "../Auth/AuthStyle";
import { AuthContext } from "../AuthContext";
import { db } from "../../firebase";
import { setDoc, doc } from "firebase/firestore";
import {
  Container,
  Row,
  StyledField,
  FormContainer,
  RangeInput,
  RangeValue,
  Wrapper,
  Result,
  FieldContainer,
  StyledLabel,
  RangeTitle,
} from "./YourGoalStyle";

const initialValues = {
  currentWeight: 0,
  goalWeight: 0,
  calorieDeficit: 0,
};

interface ResultType {
  days: number;
  toLoose: number;
}

const validationSchema = yup.object().shape({
  currentWeight: yup
    .number()
    .typeError("only number")
    .min(45, "45 kg is a minimum weight")
    .max(200, "weight less than 200 is valid")
    .required("required"),
  goalWeight: yup
    .number()
    .typeError("only number")
    .min(45, "45 kg is a minimum weight")
    .max(150, "150 kg is a maximum weight")
    .required("required"),
});

const YourGoal = () => {
  const [result, setResult] = useState<null | ResultType>(null);
  const ctx = useContext(AuthContext);
  const uid = ctx?.currentUser.uid;

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
            onSubmit={async (values) => {
              const days = await getDays(
                +values.currentWeight,
                +values.goalWeight,
                +values.calorieDeficit
              );
              const toLoose = await weightToLoose(
                +values.currentWeight,
                +values.goalWeight
              );

              await setDoc(doc(db, `users/${uid}/body-details`, "goals"), {
                currentWeight: values.currentWeight,
                goal: toLoose,
                days: days,
              });

              setResult({ days, toLoose });
            }}
          >
            {({ handleChange, values }) => (
              <Form>
                <Row>
                  <FieldContainer>
                    <StyledLabel htmlFor="currentWeight">
                      Current weight
                    </StyledLabel>
                    <StyledField
                      name="currentWeight"
                      placeholder="current weight"
                    />
                    <ErrorMessage name="currentWeight" component={ErrorMsg} />
                  </FieldContainer>
                  <FieldContainer>
                    <StyledLabel htmlFor="goalWeight">Goal weight</StyledLabel>
                    <StyledField name="goalWeight" placeholder="goal weight" />
                    <ErrorMessage name="goalWeight" component={ErrorMsg} />
                  </FieldContainer>
                </Row>
                <RangeValue>{values.calorieDeficit} kcal</RangeValue>
                <RangeTitle>Calorie deficit</RangeTitle>
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
          </Result>
        </FormContainer>
      </Wrapper>
    </Container>
  );
};

export default YourGoal;
