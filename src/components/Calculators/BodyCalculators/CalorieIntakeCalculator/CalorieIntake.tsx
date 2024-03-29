import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext, useState } from "react";
import * as yup from "yup";
import { ErrorMsg } from "../../../Auth/AuthStyle";
import {
  Container,
  Wrapper,
  InputContainer,
  OptionFieldName,
  Result,
  Text,
  FormWrapper,
  FormContainer,
} from "./CalorieIntakeCalculatorStyle";
import { AuthContext } from "../../../AuthContext";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../../../firebase";
import { darkModeContext } from "../../../../context/DarkModeContextProvider";

enum Activity {
  zero = "zero physical activity",
  sedentaryLifestyle = "sedentary lifestyle",
  rarely = "1/2 activities per week",
  moderateActivity = "3/4 activities per week",
  veryActive = "very active lifestyle",
  sport = "sport lifestyle",
}

const initialValues = {
  gender: "",
  weight: "",
  height: "",
  age: "",
  activityLevel: "",
  goal: "",
};

const validationSchema = yup.object().shape({
  gender: yup.string().oneOf(["male", "female"]).required("required"),
  age: yup
    .number()
    .typeError("only numbers")
    .positive("only positive numbers")
    .integer("only integer numbers")
    .required("required"),
  weight: yup
    .number()
    .typeError("only numbers")
    .integer("only integer numbers")
    .positive("only positive numbers")
    .required("required"),
  goal: yup
    .string()
    .oneOf(["maintain", "loose", "gain"], "pleace select your giak")
    .required("required"),
  height: yup
    .number()
    .typeError("only numbers")
    .integer("only integer numbers")
    .positive("only positive numbers")
    .required("required"),
  activityLevel: yup
    .string()
    .oneOf(
      [
        "zero physical activity",
        "sedentary lifestyle",
        "1/2 activities per week",
        "very active lifestyle",
        "sport lifestyle",
        "3/4 activities per week",
      ],
      "please select activity frequency"
    )
    .required("required"),
});

const CalorieIntake = () => {
  const ctx = useContext(AuthContext);
  const uid = ctx?.currentUser.uid;
  const [intake, setIntake] = useState<string | null>("");
  const [goal, setGoal] = useState("");

  function getIntake(values: any) {
    function getBMR() {
      if (values?.gender === "male") {
        return (
          10 * +values.weight + 6.15 * +values.height - 5 * +values.age + 5
        );
      } else {
        return (
          10 * +values.weight + 6.15 * +values.height - 5 * +values.age - 161
        );
      }
    }
    function getPAL() {
      switch (values.activityLevel) {
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
    function weightGoal() {
      switch (values.goal) {
        case "maintain":
          return 0;
        case "loose":
          return -400;
        case "gain":
          return 400;
      }
    }
    return (getBMR() * getPAL()! + weightGoal()!).toFixed(0);
  }

  const darkModeCtx = useContext(darkModeContext);
  const darkMode = darkModeCtx?.darkMode;

  return (
    <Container>
      <Wrapper>
        <Text darkMode={darkMode!}>
          <h2>Calorie intake calculator</h2>
          <p>
            This calculator will help you to calculate how much energy your body
            needs to maintain / gain / loose weight.
          </p>
          <p>
            As the recommended calorie intake guidelines suggest, the number of
            calories you need per day can vary based on various factors. Among
            them are:
          </p>
          <ul>
            <li>Gender</li>
            <li>Height</li>
            <li>Weight</li>
            <li>Age</li>
            <li>Activity level</li>
          </ul>
          <p>
            Additional factors that can affect how many calories your body uses
            for energy, thus also impacting how many you should consume, include
            your hormones,5 some medications (such as steroids and some diabetes
            medicines),6 and your overall health.
          </p>
        </Text>
        <FormWrapper>
          <FormContainer darkMode={darkMode!}>
            <p>
              This calculator will help you to calculate how much energy your
              body needs to maintain / gain / loose weight.
            </p>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={async (values) => {
                try {
                  const intake = await getIntake(values);
                  setIntake(intake);
                  setGoal(values.goal);
                  await setDoc(
                    doc(db, `users/${uid}/body-details`, "calorie-intake"),
                    {
                      calorieIntake: intake,
                    }
                  );
                } catch {
                  console.log("error");
                }
              }}
            >
              <Form>
                <InputContainer>
                  <OptionFieldName>Gender</OptionFieldName>
                  <Field as="select" name="gender">
                    <option value="-"></option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                  </Field>
                </InputContainer>
                <ErrorMessage name="gender" component={ErrorMsg} />
                <InputContainer>
                  <label htmlFor="age">Age</label>
                  <Field name="age" id="age" />
                </InputContainer>
                <ErrorMessage name="age" component={ErrorMsg} />

                <InputContainer>
                  <label htmlFor="weight">Weight</label>
                  <Field name="weight" id="weight" />
                </InputContainer>
                <ErrorMessage name="weight" component={ErrorMsg} />

                <InputContainer>
                  <label htmlFor="height">Height</label>
                  <Field name="height" id="height" />
                </InputContainer>
                <ErrorMessage name="height" component={ErrorMsg} />
                <InputContainer>
                  <OptionFieldName>Goal</OptionFieldName>
                  <Field as="select" name="goal">
                    <option value="-"></option>
                    <option value="maintain">maintain</option>
                    <option value="loose">loose</option>
                    <option value="gain">gain</option>
                  </Field>
                </InputContainer>
                <ErrorMessage name="goal" component={ErrorMsg} />
                <InputContainer>
                  <OptionFieldName>Activity</OptionFieldName>
                  <Field as="select" name="activityLevel">
                    <option value="-"></option>
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
                <ErrorMessage name="activityLevel" component={ErrorMsg} />
                <button type="submit">Get result</button>
              </Form>
            </Formik>
            {intake ? (
              <Result>
                <span>Calories to {goal} weight</span>
                <span>
                  <strong>{intake}</strong>
                  <span>kcal/day</span>
                </span>
              </Result>
            ) : null}
          </FormContainer>
        </FormWrapper>
      </Wrapper>
    </Container>
  );
};

export default CalorieIntake;
