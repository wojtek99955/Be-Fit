import styled from "styled-components";

interface LoadingProps {
  loading: boolean;
}

export const Consumed = styled.div<LoadingProps>`
  border-radius: 12px;
  border: ${({ loading }) =>
    loading ? "4px solid #f3f4f6" : "4px solid #019d51"};
  padding: 2rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15rem;
  background-color: ${({ loading }) => (loading ? " #f3f4f6" : "white")};
`;

export const ConsumedNutrients = styled.div<LoadingProps>`
  opacity: ${({ loading }) => (loading ? "0" : "1")};
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const ConsumedCalories = styled.div<LoadingProps>`
  opacity: ${({ loading }) => (loading ? "0" : "1")};
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

export const Wrapper = styled.div``;
