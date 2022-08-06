import { useState, useEffect, useContext } from "react";
import {
  Consumed,
  ConsumedCalories,
  Row,
  ConsumedNutrients,
} from "./ConsumedNutrientsStyle";
import { setDoc, doc } from "firebase/firestore";
import { AuthContext } from "../../../AuthContext";
import { db } from "../../../../firebase";

interface Props {
  consumed: any;
  loading: boolean;
}

const ConsumedNutrientsData = ({ consumed, loading }: Props) => {
  const ctx = useContext(AuthContext);
  const uid = ctx?.currentUser.uid;
  const [consumedNutrients, setConsumedNutrients] = useState<any>();

  useEffect(() => {
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();

    const consumedCalories = consumed.reduce((acc: any, obj: any) => {
      return acc + obj.details.kcal;
    }, 0);
    const consumedFat = consumed.reduce((acc: any, obj: any) => {
      return acc + obj.details.fat;
    }, 0);
    const consumedFiber = consumed.reduce((acc: any, obj: any) => {
      return acc + obj.details.fiber;
    }, 0);
    const consumedProtein = consumed.reduce((acc: any, obj: any) => {
      return acc + obj.details.protein;
    }, 0);
    const consumedCarbo = consumed.reduce((acc: any, obj: any) => {
      return acc + obj.details.carbo;
    }, 0);
    setConsumedNutrients({
      kcal: consumedCalories.toFixed(1),
      fat: consumedFat.toFixed(1),
      fiber: consumedFiber.toFixed(1),
      protein: consumedProtein.toFixed(1),
      carbo: consumedCarbo.toFixed(1),
    });
    if (consumedNutrients) {
      setDoc(
        doc(db, `users/${uid}/consumedNutrients`, `${day}${month}${year}`),
        {
          kcal: consumedCalories.toFixed(0),
          fat: consumedFat.toFixed(1),
          fiber: consumedFiber.toFixed(1),
          protein: consumedProtein.toFixed(1),
          carbo: consumedCarbo.toFixed(1),
        }
      );
    }
  }, [consumed]);

  return (
    <Consumed loading={loading}>
      <ConsumedCalories loading={loading}>
        <span>{consumedNutrients?.kcal}</span>
        <div>Kcal:</div>
      </ConsumedCalories>
      <ConsumedNutrients loading={loading}>
        <Row>
          <div>
            Fat <span>{consumedNutrients?.fat} g </span>
          </div>
          <div>
            Protein <span>{consumedNutrients?.protein} g</span>
          </div>
        </Row>
        <Row>
          <div>
            Carbo <span>{consumedNutrients?.carbo} g</span>
          </div>
          <div>
            Fiber <span>{consumedNutrients?.fiber} g</span>
          </div>
        </Row>
      </ConsumedNutrients>
    </Consumed>
  );
};
export default ConsumedNutrientsData;
