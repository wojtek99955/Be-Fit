import styled from "styled-components";

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
    font-size: 1.3rem;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  div {
    width: 8rem;
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
