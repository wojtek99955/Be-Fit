import { Formik, Field, Form } from "formik";
import { useState } from "react";
import styled from "styled-components";
const img = require("../assets/images/food-img.jpg");

interface StylesProps {
  loading: boolean | null;
}
const Container = styled.div`
  padding: 1rem;
  width: calc(100vw - 14rem);
  height: calc(100vh - 3.5rem);
  position: relative;
  top: 3.5rem;
  overflow: scroll;
  h2 {
    margin: 3rem 0;
    text-align: center;
    font-size: 2rem;
  }
`;

const MainImg = styled.div`
  width: 100%;
  height: 16rem;
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
    cursor: pointer;
    &:hover {
      background-color: #cf8300;
    }
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Nutrients = styled.div`
  display: flex;
  max-width: 800px;
  justify-content: space-between;
`;

const Box = styled.div`
  background-color: #f3f4f6;
  border-radius: 12px;
  display: grid;
  grid-template-columns: 7rem 7rem;
  gap: 1rem;
  padding: 1rem;
  height: 15rem;

  div {
    text-align: center;
    color: white;
    border-radius: 8px;
    padding: 0.3rem 0;

    &:first-of-type {
      background-color: #6db26b;
    }
    &:nth-of-type(2) {
      background-color: #777777;
    }
    &:nth-of-type(3) {
      background-color: #ffa101;
    }
    &:nth-of-type(4) {
      background-color: #e1605e;
    }
    &:nth-of-type(5) {
      background-color: #31525b;
    }
    &:nth-of-type(6) {
      background-color: #4d904b;
    }
  }
  span {
    padding-top: 0.3rem;
    display: inline-block;
  }
`;

const StyledH2 = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: black;
  text-align: center;
`;

const FoodName = styled.div<StylesProps>`
  background-color: ${({ loading }) => (loading ? "#f3f4f6" : "white")};
  height: 3rem;
  margin: auto;
  width: 8rem;
  border-radius: 12px;
  margin-bottom: 5rem;
`;

const CaloriesCalculator = () => {
  const [query, setQuery] = useState<any>(null);
  const [loading, setLoading] = useState<null | boolean>(null);
  const [showBoxes, setShowBoxes] = useState(false);

  const capitalize = (s: string) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  return (
    <Container>
      <MainImg>
        <h1>Add your meal</h1>
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
                } catch {
                  console.log("error fetch");
                }
              }
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
      <FoodName loading={loading}>
        <StyledH2>{query ? capitalize(query?.name) : null}</StyledH2>
      </FoodName>

      {showBoxes ? (
        <Nutrients>
          <Box>
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
          </Box>
          <Box>
            {!loading ? (
              <>
                <div>Calories</div>
                <div>Weight</div>
                <div>Carbo</div>
                <div>Fat</div>
                <div>Fiber</div>
                <div>Protein</div>
              </>
            ) : null}
          </Box>
        </Nutrients>
      ) : null}
    </Container>
  );
};

export default CaloriesCalculator;
