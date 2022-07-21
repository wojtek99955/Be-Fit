import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import { useState } from "react";
import { SearchIcon } from "../CaloriesCalculator/CaloriesCalculatorsStyle";

const img = require("../../assets/images/track-calories.jpg");

const Container = styled.section`
  padding: 1rem;
  width: calc(100vw - 14rem);
  background-color: white;
  height: calc(100vh - 3.5rem);
  position: relative;
  top: 3.5rem;
  overflow-y: scroll;
`;
const Header = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.3) url(${img});
  height: 20rem;
  background-position: bottom;
  background-size: cover;
  background-blend-mode: darken;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    color: white;
    font-size: 2.6rem;
    text-align: center;
    line-height: 3.2rem;
  }
`;

const SearchFood = styled.div`
  max-width: 800px;
  margin: auto;
`;
const StyledField = styled(Field)`
  border: none;
  border-bottom: 3px solid #ffa101;
  outline: none;
  font-size: 1.3rem;
  background-color: transparent;
  width: 100%;
`;

const FieldWrapper = styled.div`
  padding: 4rem 0;
  width: 20rem;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    display: inline;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    cursor: pointer;
  }
`;

interface SearchItemProps {
  loading: boolean;
}

const SearchedItem = styled.div`
  border-radius: 12px;
  background-color: #f3f4f6;
  padding: 1rem;
`;

const SearchItemWrapper = styled.div<SearchItemProps>`
  opacity: ${({ loading }) => (loading ? "0" : "1")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    text-transform: capitalize;
  }
`;

const Nutrients = styled.div`
  div {
    margin-bottom: 1rem;
  }
`;

const TrackCalories = () => {
  const [query, setQuery] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [showBox, setShowBox] = useState(false);
  const [foodWeight, setFoodWeight] = useState<number>(0);
  return (
    <Container>
      <Header>
        <h2>
          Track your daily <br /> calorie intake
        </h2>
      </Header>
      <SearchFood>
        <Formik
          initialValues={{ query: "" }}
          onSubmit={async (values) => {
            if (values.query !== "") {
              try {
                setLoading(true);
                setQuery(null);
                setShowBox(true);
                const res = await fetch(
                  `https://api.edamam.com/api/food-database/v2/parser?app_id=fb99b9e2&app_key=%206c42b17c647c09805fc4c5365572b9d9&ingr=${values.query}`
                );
                const data = await res.json();
                await setQuery({
                  details: data.hints[0].food.nutrients,
                  name: data.text,
                });
                console.log(query);
                setLoading(false);
              } catch {
                console.log("error fetch");
              }
            }
          }}
        >
          <Form>
            <FieldWrapper>
              <StyledField name="query" />
              <button type="submit">
                <SearchIcon />
              </button>
            </FieldWrapper>
          </Form>
        </Formik>
        <SearchedItem>
          {showBox ? (
            <SearchItemWrapper loading={loading}>
              <h2>{query?.name}</h2>
              <span>amount</span>
              <Nutrients>
                <div>fat</div>
                <div>carbo</div>
                <div>fiber</div>
                <div>protein</div>
              </Nutrients>
              <span>kcal</span>
            </SearchItemWrapper>
          ) : null}
        </SearchedItem>
      </SearchFood>
    </Container>
  );
};

export default TrackCalories;
