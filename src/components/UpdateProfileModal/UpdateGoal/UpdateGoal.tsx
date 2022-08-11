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

const UpdateGoal = ({ setPage, setShowModal }: Props) => {
  return (
    <Wrapper>
      <Title>Set your goal</Title>
      <Formik
        initialValues={initialValues}
        onSubmit={(val) => console.log(val)}
      >
        <FormContainer>
          <label htmlFor="currentWeight">Current weight</label>
          <input type="number" id="currentWeight" name="currentWeight" />
          <label htmlFor="targetWeight">Target weight</label>
          <input type="number" id="targetWeight" name="targetWeight" />
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
        </FormContainer>
      </Formik>
    </Wrapper>
  );
};

export default UpdateGoal;
