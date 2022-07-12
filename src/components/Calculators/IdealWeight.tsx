import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import { useState } from "react";

export const Container = styled.section`
  padding-top: 8rem;
  width: 100%;
`;
export const Wrapper = styled.div`
  max-width: 350px;
  margin: auto;
  h2 {
    text-align: center;
    margin-bottom: 3rem;
  }
  button {
    display: block;
    margin: auto;
    padding: 0.7rem 2rem;
    font-size: 1rem;
    border: none;
    background-color: #ffa101;
    color: white;
    cursor: pointer;
    &:hover {
      background-color: #cf8300;
    }
  }
  input {
    width: 80%;
  }
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
        <h2>Ideal weight calculator</h2>
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
      </Wrapper>
      {weight ? (
        <Result>Your ideal weight: {weight.toFixed(1)} kg</Result>
      ) : null}
    </Container>
  );
};

export default IdealWeight;
