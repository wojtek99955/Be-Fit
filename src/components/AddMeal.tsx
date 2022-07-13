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
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: white;
    text-align: center;
  }
`;

const SearchBar = styled.div`
  display: flex;
  margin: auto;
  gap: 0.5rem;
  input {
    outline: none;
    border: none;
    padding: 0.2rem 0.5rem;
    width: 100%;
    height: 2.5rem;
    display: block;
    border-radius: 8px;
    width: 25rem;
  }
  button {
    background-color: #ffa101;
    border: none;
    border-radius: 8px;
    padding: 0 1rem;
    color: white;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const AddMeal = () => {
  const [query, setQuery] = useState<any>(null);
  return (
    <Container>
      <MainImg>
        <h1>Add your meal</h1>
        <ContentWrapper>
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
              <SearchBar>
                <Field type="text" name="query" />
                <button type="submit">Search</button>
              </SearchBar>
            </Form>
          </Formik>
        </ContentWrapper>
      </MainImg>
      Add meal
      <h1>{query?.ENERC_KCAL}</h1>
    </Container>
  );
};

export default AddMeal;
