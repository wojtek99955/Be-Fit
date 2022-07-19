import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import { useState } from "react";
import { Container, Wrapper, Text } from "./CalculatorsStyle";

export const FormWrapper = styled.div`
  min-width: 25rem;
  margin: auto;
  padding: 1rem;
  background-color: #f3f4f6;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const StyledField = styled(Field)`
  margin: auto;
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem 0.2rem;
  border-left: none;
  border-right: none;
  border-top: none;
  outline: none;
  border-bottom: 2px solid #31525b;
`;

const Result = styled.div`
  text-align: center;
  margin-top: 2rem;
  font-size: 1.5rem;
`;

const initialValues = {
  gender: "",
  height: "",
};

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
            onSubmit={async (values) => {
              if (values.gender === "male") {
                setWeight((+values.height - 100) * 0.9);
              } else if (values.gender === "female") {
                setWeight((+values.height - 100) * 0.85);
              }
              console.log(values);
            }}
          >
            <Form>
              <Row>
                <Field as="select" name="gender">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Field>
              </Row>
              <StyledField
                name="height"
                type="height"
                id="height"
                placeholder="height"
              />
              <button type="submit">Save</button>
            </Form>
          </Formik>
        </FormWrapper>
        {weight ? (
          <Result>Your ideal weight: {weight.toFixed(1)} kg</Result>
        ) : null}
      </Wrapper>
    </Container>
  );
};

export default IdealWeight;
