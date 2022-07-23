import {
  Consumed,
  ConsumedCalories,
  Row,
  ConsumedNutrients,
} from "./TodayFoodStyle";

interface Props {
  consumed: any;
}

const ConsumedNutrientsData = ({ consumed }: Props) => {
  return (
    <Consumed>
      <ConsumedCalories>
        <span>{consumed?.kcal}</span>
        <div>Kcal:</div>
      </ConsumedCalories>
      <ConsumedNutrients>
        <Row>
          <div>
            Fat <span>{consumed?.fat}</span>
          </div>
          <div>
            Protein <span>{consumed?.protein}</span>
          </div>
        </Row>
        <Row>
          <div>
            Carbo <span>{consumed?.carbo}</span>
          </div>
          <div>
            Fiber <span>{consumed?.fiber}</span>
          </div>
        </Row>
      </ConsumedNutrients>
    </Consumed>
  );
};
export default ConsumedNutrientsData;
