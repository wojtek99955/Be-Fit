import { Formik, Field, Form } from "formik";
import { useState } from "react";
import styled from "styled-components";
const img = require("../assets/images/food-img.jpg");

const Container = styled.div`
  margin-top: 6rem;
  width: 100%;
  padding: 0 1rem;
`;

const MainImg = styled.div`
  width: 100%;
  height: 20rem;
  background: rgba(0, 0, 0, 0.3) url(${img});
  background-blend-mode: darken;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddMeal = () => {
  const [query, setQuery] = useState<any>(null);
  return (
    <Container>
      <MainImg>
        <Formik
          initialValues={{ query: "" }}
          onSubmit={async (values) => {
            try {
              setQuery(null);
              const res = await fetch(
                `https://api.edamam.com/api/food-database/v2/parser?app_id=fb99b9e2&app_key=%206c42b17c647c09805fc4c5365572b9d9&ingr=${values.query}`
              );
              const data = await res.json();
              await setQuery(data.hints[0].food.nutrients);
              await console.log(query);
              console.log(query);
            } catch {
              console.log("error fetch");
            }
            console.log(values.query);
          }}
        >
          <Form>
            <Field type="text" name="query" />
            <button type="submit">Search</button>
          </Form>
        </Formik>
      </MainImg>
      Add meal
      <h1>{query?.ENERC_KCAL}</h1>
    </Container>
  );
};

export default AddMeal;
