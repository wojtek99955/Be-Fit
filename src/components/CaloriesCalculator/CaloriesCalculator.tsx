import { Formik, Field, Form } from "formik";
import { useState, useContext } from "react";
import {
  Container,
  MainImg,
  SearchBar,
  ContentWrapper,
  Nutrients,
  BoxContainer,
  BoxHeader,
  Box,
  StyledH2,
  FoodName,
  SearchIcon,
  InputContainer,
  NoMealsFound,
} from "./CaloriesCalculatorsStyle";
import { darkModeContext } from "../../context/DarkModeContextProvider";

const CaloriesCalculator = () => {
  const [query, setQuery] = useState<any>(null);
  const [loading, setLoading] = useState<null | boolean>(null);
  const [showBoxes, setShowBoxes] = useState(false);
  const [foodWeight, setFoodWeight] = useState<number>(0);
  const [error, setError] = useState(false);

  const capitalize = (s: string) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  const darkModeCtx = useContext(darkModeContext);
  const darkMode = darkModeCtx?.darkMode;

  return (
    <Container>
      <MainImg>
        <h1>Find your meal</h1>
        <ContentWrapper>
          <Formik
            initialValues={{ query: "" }}
            onSubmit={async (values) => {
              if (values.query !== "") {
                try {
                  setLoading(true);
                  setQuery(null);
                  setShowBoxes(true);
                  const res = await fetch(
                    `https://api.edamam.com/api/food-database/v2/parser?app_id=fb99b9e2&app_key=%206c42b17c647c09805fc4c5365572b9d9&ingr=${values.query}`
                  );
                  const data = await res.json();
                  await setQuery({
                    details: data.hints[0].food.nutrients,
                    name: data.text,
                  });
                  setLoading(false);
                  setError(false);
                } catch {
                  setError(true);
                  setLoading(false);
                  setShowBoxes(false);
                }
              }
            }}
          >
            <Form style={{ width: "100%" }}>
              <SearchBar>
                <InputContainer>
                  <label htmlFor="query">
                    <SearchIcon />
                  </label>
                  <Field type="text" name="query" id="query" />
                </InputContainer>
                <button type="submit">Search</button>
              </SearchBar>
            </Form>
          </Formik>
        </ContentWrapper>
      </MainImg>
      {!error ? (
        <FoodName loading={loading} darkMode={darkMode!}>
          <StyledH2 darkMode={darkMode!}>
            {query ? capitalize(query?.name) : null}
          </StyledH2>
        </FoodName>
      ) : (
        <NoMealsFound>No meals found</NoMealsFound>
      )}

      {showBoxes ? (
        <Nutrients
          initial={{ y: "-50%", opacity: 0, scale: 0.5 }}
          animate={{ y: "20%", opacity: 1, scale: 1 }}
        >
          <Box>
            <BoxHeader loading={loading} darkMode={darkMode!}>
              {!loading ? <h3>Nutrients in 100 g</h3> : null}
            </BoxHeader>
            <BoxContainer darkMode={darkMode!}>
              {!loading ? (
                <>
                  <div>
                    Calories <br />
                    <span>{query?.details.ENERC_KCAL}</span>
                  </div>
                  <div>
                    Weight <br />
                    <span>100 g</span>
                  </div>
                  <div>
                    Carbo <br /> <span>{query?.details.CHOCDF} g</span>
                  </div>
                  <div>
                    Fat <br />
                    <span>{query?.details.FAT} g</span>
                  </div>
                  <div>
                    Fiber <br />
                    <span>{query?.details.FIBTG} g</span>
                  </div>
                  <div>
                    Protein <br />
                    <span>{query?.details.PROCNT} g</span>
                  </div>
                </>
              ) : null}
            </BoxContainer>
          </Box>
          <Box>
            <BoxHeader loading={loading} darkMode={darkMode!}>
              {!loading ? (
                <>
                  <h3>In </h3>
                  &nbsp;
                  <Formik
                    initialValues={{ weight: "" }}
                    onSubmit={(values) => setFoodWeight(+values.weight)}
                  >
                    <Form>
                      <Field name="weight" type="text" />
                      &nbsp;
                      <span>g</span>
                      <button type="submit">Calc</button>
                    </Form>
                  </Formik>
                </>
              ) : null}
            </BoxHeader>
            <BoxContainer darkMode={darkMode!}>
              {!loading ? (
                <>
                  <div>
                    Calories <br />
                    <span>
                      {((query?.details.ENERC_KCAL * foodWeight) / 100).toFixed(
                        0
                      )}
                    </span>
                  </div>
                  <div>
                    Weight <br />
                    <span>{foodWeight}</span>
                  </div>
                  <div>
                    Carbo <br />
                    <span>
                      {((query?.details.CHOCDF * foodWeight) / 100).toFixed(2)}g
                    </span>
                  </div>
                  <div>
                    Fat <br />
                    <span>
                      {((query?.details.FAT * foodWeight) / 100).toFixed(2)}
                    </span>
                  </div>
                  <div>
                    Fiber <br />
                    <span>
                      {((query?.details.FIBTG * foodWeight) / 100).toFixed(2)}
                    </span>
                  </div>
                  <div>
                    Protein <br />
                    <span>
                      {((query?.details.PROCNT * foodWeight) / 100).toFixed(2)}
                    </span>
                  </div>
                </>
              ) : null}
            </BoxContainer>
          </Box>
        </Nutrients>
      ) : null}
    </Container>
  );
};

export default CaloriesCalculator;
