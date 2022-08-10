import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext, useState } from "react";
import * as yup from "yup";
import { ErrorMsg } from "../../Auth/AuthStyle";
import { AuthContext } from "../../AuthContext";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";
import { Title, Wrapper } from "../UpdateProfileModalStyle";
import { FormContainer, BtnsContainer } from "../UpdateProfileModalStyle";
import { Row, InputContainer, InputWrapper } from "./CalorieIntakeSetupStyle";

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

const CalorieIntakeSetup = () => {
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
  return (
    <Wrapper>
      <Title>Set up calorie intake</Title>
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
        <FormContainer>
          <Form>
            <Row>
              <InputContainer>
                <InputWrapper>
                  <div>Gender</div>
                  <Field as="select" name="gender">
                    <option value="-"></option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                  </Field>
                </InputWrapper>
                <ErrorMessage name="gender" component={ErrorMsg} />
              </InputContainer>
              <InputContainer>
                <InputWrapper>
                  <label htmlFor="age">Age</label>
                  <Field name="age" id="age" />
                </InputWrapper>
                <ErrorMessage name="age" component={ErrorMsg} />
              </InputContainer>
            </Row>
            <Row>
              <InputContainer>
                <InputWrapper>
                  <label htmlFor="weight">Weight</label>
                  <Field name="weight" id="weight" />
                </InputWrapper>
                <ErrorMessage name="weight" component={ErrorMsg} />
              </InputContainer>
              <InputContainer>
                <InputWrapper>
                  <label htmlFor="height">Height</label>
                  <Field name="height" id="height" />
                </InputWrapper>
                <ErrorMessage name="height" component={ErrorMsg} />
              </InputContainer>
            </Row>
            <div>Goal</div>
            <Field as="select" name="goal">
              <option value="-"></option>
              <option value="maintain">maintain</option>
              <option value="loose">loose</option>
              <option value="gain">gain</option>
            </Field>
            <ErrorMessage name="goal" component={ErrorMsg} />
            <div>Activity</div>
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
              <option value={Activity.veryActive}>{Activity.veryActive}</option>
              <option value={Activity.sport}>{Activity.sport}</option>
            </Field>
            <ErrorMessage name="activityLevel" component={ErrorMsg} />
            <BtnsContainer>
              <button>Prev</button>
              <button type="submit">Next</button>
            </BtnsContainer>
          </Form>
        </FormContainer>
      </Formik>
    </Wrapper>
  );
};

export default CalorieIntakeSetup;
