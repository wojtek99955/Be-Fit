import { useState, useEffect } from "react";
import {
  Consumed,
  ConsumedCalories,
  Row,
  ConsumedNutrients,
} from "./ConsumedNutrientsStyle";

interface Props {
  consumed: any;
}

const ConsumedNutrientsData = ({ consumed }: Props) => {
  const [consumedNutrients, setConsumedNutrients] = useState<any>();

  useEffect(() => {
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
  }, [consumed]);

  return (
    <Consumed>
      <ConsumedCalories>
        <span>{consumedNutrients?.kcal}</span>
        <div>Kcal:</div>
      </ConsumedCalories>
      <ConsumedNutrients>
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
