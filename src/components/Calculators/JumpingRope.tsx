import styled from "styled-components";
import {
  Container,
  Wrapper,
  Text,
  FormWrapper,
  Result,
} from "./CalculatorsStyle";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { useState } from "react";

const JumpingRope = () => {
  const initialValues = {
    weight: "",
    level: "",
    duration: "",
  };

  const getResult = (weight: number, level: number, duration: number) => {
    return ((3.5 * level * weight) / 200) * duration;
  };
  const [result, setResult] = useState<null | number>(null);
  return (
    <Container>
      <Wrapper>
        <Text>
          <h2>Jumping rope</h2>
          <p>
            Skipping is a full body exercise that incorporates all the
            significant muscles of your body and can help you with overall
            weight loss as well as targeted muscle growth. From increasing core
            strength to leg strength, skipping targets the cellulite fat stored
            in these tough weight loss areas while keeping the heart rate up to
            add a cardiovascular exercise element.
          </p>
        </Text>

        <FormWrapper>
          <Formik
            initialValues={initialValues}
            onSubmit={(val) =>
              setResult(getResult(+val.weight, +val.level, +val.duration))
            }
          >
            <Form>
              <Field
                name="weight"
                type="number"
                id="weight"
                placeholder="weight"
              />
              <Field as="select" name="level">
                <option value="8.8"> less then 100 skips</option>
                <option value="11.8">100 - 120 skips</option>
                <option value="12.3">120-160 skips</option>
              </Field>
              <Field
                name="duration"
                type="number"
                id="duration"
                placeholder="duration"
              />
              <button type="submit">Calculate</button>
            </Form>
          </Formik>
          {result ? (
            <Result>
              <span>You'll burn</span>
              <span>
                <strong>{result.toFixed(1)}</strong>
                <span>calories</span>
              </span>
            </Result>
          ) : null}
        </FormWrapper>
      </Wrapper>
    </Container>
  );
};

export default JumpingRope;
