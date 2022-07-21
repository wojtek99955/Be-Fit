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
} from "./SearchedItemStyle";
import { Formik, Form, ErrorMessage } from "formik";
import { ErrorMsg } from "../../Auth/AuthStyle";
import * as yup from "yup";

interface Props {
  loading: boolean;
  query: any;
  setFoodWeight: React.Dispatch<React.SetStateAction<number>>;
  foodWeight: number;
}

const amountValidationSchema = yup.object().shape({
  amount: yup
    .number()
    .typeError("only numbers")
    .min(1, "1 gram is a minimum value")
    .max(2000, "2000 gram is a maximum value")
    .positive("only positive numbers"),
});

const SearchedItem = ({ loading, query, foodWeight, setFoodWeight }: Props) => {
  return (
    <SearchedItemContainer>
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
                {((query?.details.CHOCDF * foodWeight) / 100).toFixed(1)} g
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
                {((query?.details.PROCNT * foodWeight) / 100).toFixed(1)} g
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
    </SearchedItemContainer>
  );
};

export default SearchedItem;
