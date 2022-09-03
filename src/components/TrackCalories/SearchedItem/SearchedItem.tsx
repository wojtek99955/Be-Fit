import {
  SearchedItemContainer,
  SearchItemWrapper,
  FoodName,
  Amount,
  AmountWrapper,
  AmountField,
  Nutrients,
  NutrientsWrapper,
  Calories,
  NoFoodFound,
} from "./SearchedItemStyle";
import { Formik, Form, ErrorMessage } from "formik";
import { ErrorMsg } from "../../Auth/AuthStyle";
import * as yup from "yup";
import { useContext, useState, useEffect } from "react";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase";
import { AuthContext } from "../../AuthContext";
import { nanoid } from "nanoid";
import { AddButton } from "./SearchedItemStyle";
import { motion } from "framer-motion";

interface Props {
  loading: boolean;
  query: any;
  setFoodWeight: React.Dispatch<React.SetStateAction<number>>;
  foodWeight: number;
  error: boolean;
}

const amountValidationSchema = yup.object().shape({
  amount: yup
    .number()
    .typeError("only numbers")
    .min(1, "1 gram is a minimum value")
    .max(2000, "2000 gram is a maximum value")
    .positive("only positive numbers"),
});

const SearchedItem = ({
  loading,
  query,
  foodWeight,
  setFoodWeight,
  error,
}: Props) => {
  const [queryAmount, setQueryAmount] = useState<any>({});

  const ctx = useContext(AuthContext);
  const uid = ctx?.currentUser.uid;

  const addMeal = async (queryAmount: any) => {
    try {
      const date = await new Date();
      const month = (await date.getMonth()) + 1;
      const day = await date.getDate();
      const year = await date.getFullYear();
      const nanoId = nanoid();
      await setDoc(doc(db, `users/${uid}/food`, `${nanoId}`), {
        id: nanoId,
        name: queryAmount?.name,
        date: `${day}${month}${year}`,
        month: month,
        details: {
          fat: queryAmount?.details?.FAT,
          kcal: queryAmount?.details?.ENERC_KCAL,
          fiber: queryAmount?.details?.FIBTG,
          protein: queryAmount?.details?.PROCNT,
          carbo: queryAmount?.details?.CHOCDF,
          amount: foodWeight,
        },
        timestamp: serverTimestamp(),
      });
    } catch {
      console.log("error");
    }
  };

  useEffect(() => {
    setQueryAmount({
      name: query?.name,
      details: {
        CHOCDF: (query?.details?.CHOCDF * +foodWeight!) / 100,
        ENERC_KCAL: (query?.details?.ENERC_KCAL * foodWeight) / 100,
        FAT: (query?.details?.FAT * +foodWeight) / 100,
        FIBTG: (query?.details?.FIBTG * +foodWeight) / 100,
        PROCNT: (query?.details?.PROCNT * +foodWeight) / 100,
      },
    });
  }, [query?.name, query?.details, foodWeight]);
  const variants = {
    move: {
      rotate: [0, -30, 0],
      transition: { duration: 0.3 },
      y: 200,
      x: [0, 20, 0],
      opacity: 0,
      scale: [1, 1.1, 0.7],
    },
    stop: { y: [0, -10, 0], transition: { repeat: Infinity, repeatDelay: 3 } },
  };

  const [saveAnimation, setSaveAnimation] = useState(false);
  return (
    <>
      {!error ? (
        <SearchedItemContainer>
          <SearchItemWrapper loading={loading}>
            <FoodName>
              <h2>{query?.name}</h2>
            </FoodName>
            <Amount>
              <Formik
                validateOnMount
                initialValues={{ amount: 100 }}
                onSubmit={async (val) => {
                  setFoodWeight(val.amount);
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
                    <AddButton
                      type="submit"
                      variants={variants}
                      animate={saveAnimation ? "move" : "stop"}
                      onClick={() => {
                        addMeal(queryAmount);
                        setSaveAnimation(true);
                        setTimeout(() => {
                          setSaveAnimation(false);
                        }, 1000);
                      }}
                    >
                      Add Meal
                    </AddButton>
                  </Form>
                )}
              </Formik>
            </Amount>
            <Calories>
              kcal
              <strong>
                {((query?.details?.ENERC_KCAL * foodWeight) / 100).toFixed(1)}
              </strong>
            </Calories>
            <Nutrients>
              <NutrientsWrapper>
                <div>
                  fat
                  <span>
                    {((query?.details?.FAT * foodWeight) / 100).toFixed(1)} g
                  </span>
                </div>
                <div>
                  carbo
                  <span>
                    {((query?.details?.CHOCDF * foodWeight) / 100).toFixed(1)} g
                  </span>
                </div>
                <div>
                  fiber
                  <span>
                    {((query?.details?.FIBTG * foodWeight) / 100).toFixed(1)} g
                  </span>
                </div>
                <div>
                  protein
                  <span>
                    {((query?.details?.PROCNT * foodWeight) / 100).toFixed(1)} g
                  </span>
                </div>
              </NutrientsWrapper>
            </Nutrients>
          </SearchItemWrapper>
        </SearchedItemContainer>
      ) : (
        <NoFoodFound>No meals found</NoFoodFound>
      )}
    </>
  );
};

export default SearchedItem;
