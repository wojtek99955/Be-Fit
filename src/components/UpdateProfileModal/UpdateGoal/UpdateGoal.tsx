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

interface Props {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialValues = {
  currentWeight: "",
  targetWeight: "",
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
  return (
    <Wrapper>
      <Title>Set your goal</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(val) => console.log(val)}
      >
        <FormContainer>
          <Form>
            <label htmlFor="currentWeight">Current weight</label>
            <Field type="number" id="currentWeight" name="currentWeight" />
            <ErrorMessage name="currentWeight" component={ErrorMsg} />
            <label htmlFor="targetWeight">Target weight</label>
            <Field type="number" id="targetWeight" name="targetWeight" />
            <ErrorMessage name="targetWeight" component={ErrorMsg} />
            <BtnsContainer>
              <button
                onClick={() => {
                  setPage(2);
                }}
              >
                Prev
              </button>
              <button
                onClick={() => {
                  setShowModal(false);
                }}
              >
                Done
              </button>
            </BtnsContainer>
          </Form>
        </FormContainer>
      </Formik>
    </Wrapper>
  );
};

export default UpdateGoal;
