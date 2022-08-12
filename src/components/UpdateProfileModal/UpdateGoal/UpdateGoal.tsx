import {
  Title,
  Wrapper,
  BtnsContainer,
  FormContainer,
} from "../UpdateProfileModalStyle";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext } from "react";
import * as yup from "yup";
import { ErrorMsg } from "../../Auth/AuthStyle";
import { AuthContext } from "../../AuthContext";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";
import { RangeInput } from "./UpdateGoalStyle";

interface Props {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialValues = {
  currentWeight: "",
  targetWeight: "",
  calorieDeficit: 0,
};

const validationSchema = yup.object().shape({
  currentWeight: yup
    .number()
    .min(40, "40 is a minimum value")
    .max(250, "250 is a maximum value")
    .required("required"),
  targetWeight: yup
    .number()
    .min(30, "30 is a minimum value")
    .max(100, "100 is a maximum value")
    .required("required"),
});

const UpdateGoal = ({ setPage, setShowModal }: Props) => {
  const ctx = useContext(AuthContext);
  const uid = ctx?.currentUser.uid;

  function getDays(currentWeight: number, goalWeight: number, deficit: number) {
    return ((currentWeight - goalWeight) * 7000) / deficit;
  }
  function weightToLoose(currentWeight: number, goalWeight: number) {
    return currentWeight - goalWeight;
  }
  return (
    <Wrapper>
      <Title>Set your goal</Title>
      <FormContainer>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            const days = await getDays(
              +values.currentWeight,
              +values.targetWeight,
              +values.calorieDeficit
            );
            const toLoose = await weightToLoose(
              +values.currentWeight,
              +values.targetWeight
            );

            await setDoc(doc(db, `users/${uid}/body-details`, "goals"), {
              currentWeight: values.currentWeight,
              goalWeight: values.targetWeight,
              toLoose: toLoose,
              days: days,
            });
            setShowModal(false);
          }}
        >
          {({ values, handleChange }) => (
            <Form>
              <label htmlFor="currentWeight">Current weight (kg)</label>
              <Field type="number" id="currentWeight" name="currentWeight" />
              <ErrorMessage name="currentWeight" component={ErrorMsg} />
              <label htmlFor="targetWeight">Target weight (kg)</label>
              <Field type="number" id="targetWeight" name="targetWeight" />
              <ErrorMessage name="targetWeight" component={ErrorMsg} />
              <RangeInput>
                <label>Daily calorie deficit</label>
                <div>{values.calorieDeficit} kcal</div>

                <Field
                  type="range"
                  min="0"
                  max="1000"
                  step="100"
                  name="calorieDeficit"
                  onChange={handleChange}
                />
              </RangeInput>
              <BtnsContainer>
                <button
                  onClick={() => {
                    setPage(2);
                  }}
                >
                  Prev
                </button>
                <button type="submit">Done</button>
              </BtnsContainer>
            </Form>
          )}
        </Formik>
      </FormContainer>
    </Wrapper>
  );
};

export default UpdateGoal;
