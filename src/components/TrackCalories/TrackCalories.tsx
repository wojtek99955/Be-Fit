import { Formik, Form } from "formik";
import { useState, useEffect, useContext, useRef } from "react";
import {
  Container,
  Header,
  SearchFood,
  StyledField,
  FieldWrapper,
  AddFoodIcon,
  AddFoodIconContainer,
  CloseSearchContainer,
  CloseSearchIcon,
  FormContainer,
  FormWrapper,
  SearchItemContainer,
  SearchIcon,
} from "./TrackCaloriesStyle";
import SearchedItem from "./SearchedItem/SearchedItem";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { AuthContext } from "../AuthContext";
import { TodayFoodMemo } from "./TodayFood/TodayFood";
import { AnimatePresence } from "framer-motion";
import { darkModeContext } from "../../context/DarkModeContextProvider";

const TrackCalories = () => {
  const [query, setQuery] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [showBox, setShowBox] = useState(false);
  const [foodWeight, setFoodWeight] = useState<number>(100);
  const [todayFoods, setTodayFoods] = useState<any>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [error, setError] = useState(false);
  const ctx = useContext(AuthContext);
  const uid = ctx?.currentUser.uid;
  const inputRef = useRef<any>(null);

  async function getData() {
    const date = await new Date();
    const month = (await date.getMonth()) + 1;
    const day = await date.getDate();
    const year = await date.getFullYear();

    const foodRef = await collection(db, `users/${uid}/food`);
    const docsSnap = await getDocs(foodRef);
    const foodz: any = [];
    await docsSnap.forEach((doc) => {
      foodz.push(doc.data());
    });

    const filteredFoods = foodz.filter((item: any) => {
      return item.date === `${day}${month}${year}`;
    });
    setTodayFoods(filteredFoods);
  }

  useEffect(() => {
    getData();
  }, []);

  const handleToggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
  };
  console.log(inputRef);

  useEffect(() => {
    if (isSearchOpen) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);
  const darkModeCtx = useContext(darkModeContext);
  const darkMode = darkModeCtx?.darkMode;

  return (
    <Container>
      <Header>
        <h2>
          Track your daily <br /> calorie intake
        </h2>
      </Header>
      <SearchFood>
        {isSearchOpen ? (
          <CloseSearchContainer
            onClick={handleToggleSearch}
            whileHover={{ scale: 1.1, rotate: "180deg" }}
            transition={{ type: "spring", stiffness: 50 }}
          >
            <CloseSearchIcon />
          </CloseSearchContainer>
        ) : (
          <AddFoodIconContainer
            onClick={handleToggleSearch}
            whileHover={{ scale: 1.1, rotate: "180deg" }}
            transition={{ type: "spring", stiffness: 50 }}
          >
            <AddFoodIcon />
          </AddFoodIconContainer>
        )}
        <FormWrapper>
          <AnimatePresence>
            {isSearchOpen && (
              <FormContainer
                initial={{ y: 0, opacity: 0, scale: 0.5 }}
                animate={{ y: "10%", opacity: 1, scale: 1 }}
                exit={{ y: "-30%", opacity: 0, scale: 0.5 }}
              >
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
                        setError(false);
                      } catch {
                        console.log("error fetch");
                        setError(true);
                      }
                    }
                  }}
                >
                  <Form>
                    <FieldWrapper>
                      <StyledField
                        darkMode={darkMode!}
                        innerRef={inputRef}
                        name="query"
                        placeholder="search meal"
                      />
                      <button type="submit">
                        <SearchIcon darkMode={darkMode!} />
                      </button>
                    </FieldWrapper>
                  </Form>
                </Formik>
              </FormContainer>
            )}
          </AnimatePresence>
        </FormWrapper>
        <AnimatePresence>
          {showBox && isSearchOpen ? (
            <SearchItemContainer
              initial={{ y: 0, opacity: 0, scale: 0.5 }}
              animate={{ y: "10%", opacity: 1, scale: 1 }}
              exit={{ y: "-30%", opacity: 0, scale: 0.5 }}
            >
              <SearchedItem
                loading={loading}
                query={query}
                setFoodWeight={setFoodWeight}
                foodWeight={foodWeight}
                error={error}
              />
            </SearchItemContainer>
          ) : null}
        </AnimatePresence>
      </SearchFood>
      <TodayFoodMemo />
    </Container>
  );
};

export default TrackCalories;
