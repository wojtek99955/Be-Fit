import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: auto;
  margin-top: 3rem;
  h2 {
    font-size: 2rem;
    text-align: center;
  }
`;
export const FoodItem = styled.div`
  box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.1), 0 2px 4px 0 rgba(0, 0, 0, 0),
    inset 0 0 0 1px rgba(255, 255, 255, 0.5);
  padding: 1.5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-around;
  align-items: center;
  border-radius: 12px;
  margin-bottom: 2rem;
  div {
    padding: 0.5rem;
    color: #555555;
  }
  span {
    color: black;
  }
  h3 {
    font-size: 1.6rem;
    text-transform: capitalize;
  }
`;

export const FoodsContainer = styled.div`
  margin-top: 2rem;
`;

export const Nutrients = styled.div`
  position: relative;
  span {
    position: absolute;
    right: 0;
  }
`;

export const Calories = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  strong {
    font-size: 1.2rem;
    color: black;
  }
`;

export const Amount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Name = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DailyNutrition = styled.div`
  padding-top: 2rem;
  display: flex;
  gap: 2rem;
`;

export const Consumed = styled.div`
  border-radius: 12px;
  border: 4px solid #019d51;
  width: 50%;
  padding: 2rem;
`;

export const ConsumedNutrients = styled.div`
  div {
    color: #555555;
  }
  span {
    color: black;
    font-size: 1.4rem;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  div {
    width: 7rem;
    display: flex;
    justify-content: space-between;

    align-items: center;

    span {
      right: 0;
    }
  }
`;

export const ConsumedCalories = styled.div`
  font-size: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  div {
    font-size: 1.2rem;
    color: #555555;
  }
`;
