import { Formik, Form, ErrorMessage } from "formik";
import { useState } from "react";
import * as yup from "yup";
import { SearchIcon } from "../CaloriesCalculator/CaloriesCalculatorsStyle";
import { ErrorMsg } from "../Auth/AuthStyle";
import {
  Container,
  Header,
  SearchFood,
  StyledField,
  FieldWrapper,
  SearchedItem,
  SearchItemWrapper,
  Nutrients,
  NutrientsWrapper,
  Amount,
  AmountField,
  AmountWrapper,
  Calories,
  FoodName,
} from "./TrackCaloriesStyle";

const amountValidationSchema = yup.object().shape({
  amount: yup
    .number()
    .typeError("only numbers")
    .min(1, "1 gram is a minimum value")
    .max(2000, "2000 gram is a maximum value")
    .positive("only positive numbers"),
});

const TrackCalories = () => {
  const [query, setQuery] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [showBox, setShowBox] = useState(false);
  const [foodWeight, setFoodWeight] = useState<number>(100);
  console.log(foodWeight);
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
              <StyledField name="query" placeholder="search meal" />
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
                  initialValues={{ amount: 100 }}
                  onSubmit={(val) => {
                    if (+val.amount > 2000 || +val.amount <= 0) {
                      setFoodWeight(0);
                    } else {
                      setFoodWeight(+val.amount);
                    }
                  }}
                  validationSchema={amountValidationSchema}
                >
                  {({ handleChange, submitForm }) => (
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
