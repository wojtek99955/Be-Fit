import { Formik, Form } from "formik";
import { useState } from "react";
import { SearchIcon } from "../CaloriesCalculator/CaloriesCalculatorsStyle";
import {
  Container,
  Header,
  SearchFood,
  StyledField,
  FieldWrapper,
} from "./TrackCaloriesStyle";
import SearchedItem from "./SearchedItem/SearchedItem";

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
          <>
            <SearchedItem
              loading={loading}
              query={query}
              setFoodWeight={setFoodWeight}
              foodWeight={foodWeight}
              setQuery={setQuery}
            />
          </>
        ) : null}
      </SearchFood>
    </Container>
  );
};

export default TrackCalories;
