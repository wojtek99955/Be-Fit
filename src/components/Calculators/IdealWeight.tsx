import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Text,
  FormWrapper,
  Result,
} from "./CalculatorsStyle";
import * as yup from "yup";
import { ErrorMsg } from "../Auth/AuthStyle";

export const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const initialValues = {
  gender: "male",
  height: "",
};

const validationSchema = yup.object().shape({
  gender: yup.string().required("required"),
  height: yup
    .number()
    .positive("only positive numbers")
    .integer("only integer numbers")
    .required("required"),
});

const IdealWeight = () => {
  const [weight, setWeight] = useState<any | object>(null);
  return (
    <Container>
      <Wrapper>
        <Text>
          <h2>Ideal weight calculator</h2>
          <p>
            The Ideal Weight Calculator computes ideal body weight (IBW) ranges
            based on height, gender, and age. The idea of finding the IBW using
            a formula has been sought after by many experts for a long time.
          </p>
          <p>
            Most everyone has at some point tried to lose weight, or at least
            known somebody who has. This is largely due to the perception of an
            "ideal" body weight, which is often based on what we see promoted
            through various media such as social media, TV, movies, magazines,
            etc. Although ideal body weight (IBW) today is sometimes based on
            perceived visual appeal, IBW was actually introduced to estimate
            dosages for medical use, and the formulas that calculate it are not
            at all related to how a person looks at a given weight. It has since
            been determined that the metabolism of certain drugs is more based
            on IBW than it is total body weight. Today, IBW is also used widely
            throughout sports, since many sports classify people based on their
            body weight.
          </p>
        </Text>
        <FormWrapper>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              if (values.gender === "male") {
                setWeight((+values.height - 100) * 0.9);
              } else if (values.gender === "female") {
                setWeight((+values.height - 100) * 0.85);
              }
              console.log(values);
            }}
          >
            <Form>
              <Field as="select" name="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Field>
              <ErrorMessage name="gender" component={ErrorMsg} />
              <Field
                name="height"
                type="height"
                id="height"
                placeholder="height"
              />
              <ErrorMessage name="height" component={ErrorMsg} />
              <button type="submit">Save</button>
              {weight ? (
                <Result>
                  <span>Your ideal weight</span>
                  <span>
                    <strong>{weight.toFixed(1)}</strong>
                    <span>kg</span>
                  </span>
                </Result>
              ) : null}
            </Form>
          </Formik>
        </FormWrapper>
      </Wrapper>
    </Container>
  );
};

export default IdealWeight;
