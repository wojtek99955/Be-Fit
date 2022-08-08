import {
  Container,
  Wrapper,
  Text,
  FormWrapper,
  Result,
} from "./CalculatorsStyle";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { useState } from "react";
import * as yup from "yup";
import { ErrorMsg } from "../Auth/AuthStyle";

const RunningCalculator = () => {
  const initialValues = {
    weight: "",
    duration: "",
    level: "",
  };

  const validationSchema = yup.object().shape({
    weight: yup
      .number()
      .required("required")
      .min(30, "30 is a minimum value")
      .max(250, "250 is a maximum value"),
    duration: yup
      .number()
      .required("required")
      .min(1, "1 is a minimum value")
      .max(300, "300 is a maximum value"),
  });

  const getResult = (weight: number, level: number, duration: number) => {
    return ((3.5 * level * weight) / 200) * duration;
  };

  const [result, setResult] = useState<null | number>(null);
  return (
    <Container>
      <Wrapper>
        <Text>
          <h2>Running</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas illo
            assumenda eligendi architecto a aliquam molestias commodi quasi
            officia. Explicabo quidem porro cumque totam atque aliquam sunt odio
            quam dolorem, animi ab reprehenderit labore inventore accusantium
            similique nisi obcaecati perspiciatis consequuntur harum incidunt?
            Odit dignissimos ullam consequuntur velit exercitationem suscipit
            temporibus voluptates explicabo aperiam fuga! Dolor cum rerum vitae.
          </p>
        </Text>
        <FormWrapper>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
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
              <ErrorMessage name="weight" component={ErrorMsg} />
              <Field as="select" name="level">
                <option value="6"> slow jogging</option>
                <option value="8">jogging</option>
                <option value="10">9 km/h running</option>
                <option value="13.5">13 km/h running</option>
                <option value="16">16 km/h running</option>
              </Field>
              <Field
                name="duration"
                type="number"
                id="duration"
                placeholder="duration"
              />
              <ErrorMessage name="duration" component={ErrorMsg} />
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

export default RunningCalculator;
