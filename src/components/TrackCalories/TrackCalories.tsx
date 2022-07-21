import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import * as yup from "yup";
import { SearchIcon } from "../CaloriesCalculator/CaloriesCalculatorsStyle";
import { ErrorMsg } from "../Auth/AuthStyle";

const img = require("../../assets/images/track-calories.jpg");

const Container = styled.section`
  padding: 1rem;
  width: calc(100vw - 14rem);
  background-color: white;
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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  justify-content: space-between;
  align-items: center;
  h2 {
    text-transform: capitalize;
  }
  span {
    color: black;
    font-size: 1.3rem;
    margin-left: 0.5rem;
  }
  strong {
    margin-left: 0.5rem;
    font-size: 1.5rem;
  }
`;

const Nutrients = styled.div`
  div {
    margin-bottom: 1rem;
    font-size: 1.1rem;
    color: #555555;
  }
`;

const NutrientsWrapper = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    position: relative;

    span {
      position: absolute;
      right: 0;
    }
  }
`;

const Amount = styled.div`
  display: flex;
  justify-content: center;
`;

const AmountWrapper = styled.div`
  display: flex;
  gap: 1rem;
  div {
    font-size: 1.1rem;
  }
`;

const Calories = styled.div`
  margin: auto;
`;

const AmountField = styled(Field)`
  display: block;
  width: 3rem;
  background-color: transparent;
  border: none;
  outline: none;
  border-bottom: 3px solid #ffa101;
  font-size: 1.1rem;
`;

const FoodName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const amountValidationSchema = yup.object().shape({
  amount: yup
    .number()
    .typeError("only numbers")
    .min(1, "1 gram is a minimum value")
    .max(2000, "2000 gram is a maximum value"),
});

const TrackCalories = () => {
  const [query, setQuery] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [showBox, setShowBox] = useState(false);
  const [foodWeight, setFoodWeight] = useState<number>(100);
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
        {showBox ? (
          <SearchedItem>
            <SearchItemWrapper loading={loading}>
              <FoodName>
                <h2>{query?.name}</h2>
              </FoodName>
              <Amount>
                <Formik
                  initialValues={{ amount: " 100" }}
                  onSubmit={(val) => {
                    if (+val.amount <= 2000) {
                      setFoodWeight(+val.amount);
                    } else {
                      setFoodWeight(0);
                    }
                  }}
                  validationSchema={amountValidationSchema}
                >
                  {({ handleChange, submitForm, validateField }) => (
                    <Form>
                      <AmountWrapper>
                        <div>amount</div>

                        <AmountField
                          name="amount"
                          type="number"
                          onChange={(e: React.FormEvent<HTMLInputElement>) => {
                            handleChange(e);
                            submitForm();
                          }}
                        />
                        <div>g</div>
                      </AmountWrapper>
                      <ErrorMessage name="amount" component={ErrorMsg} />
                    </Form>
                  )}
                </Formik>
              </Amount>
              <Nutrients>
                <NutrientsWrapper>
                  <div>
                    fat
                    <span>
                      {((query?.details.FAT * foodWeight) / 100).toFixed(1)} g
                    </span>
                  </div>
                  <div>
                    carbo
                    <span>
                      {((query?.details.CHOCDF * foodWeight) / 100).toFixed(1)}{" "}
                      g
                    </span>
                  </div>
                  <div>
                    fiber
                    <span>
                      {((query?.details.FIBTG * foodWeight) / 100).toFixed(1)} g
                    </span>
                  </div>
                  <div>
                    protein
                    <span>
                      {((query?.details.PROCNT * foodWeight) / 100).toFixed(1)}{" "}
                      g
                    </span>
                  </div>
                </NutrientsWrapper>
              </Nutrients>
              <Calories>
                kcal
                <strong>
                  {((query?.details.ENERC_KCAL * foodWeight) / 100).toFixed(1)}
                </strong>
              </Calories>
            </SearchItemWrapper>
          </SearchedItem>
        ) : null}
      </SearchFood>
    </Container>
  );
};

export default TrackCalories;
