import styled from "styled-components";

interface LoadingProps {
  loading: boolean;
}

interface DarkMode {
  darkMode: boolean;
}

interface ContainerProps {
  loading: boolean;
  darkMode: boolean;
}

export const Consumed = styled.div<ContainerProps>`
  border-radius: 12px;
  border: ${({ loading }) =>
    loading ? "4px solid #f3f4f6" : "4px solid #019d51"};
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15rem;
  background-color: ${({ darkMode }) => (darkMode ? "#019d51" : "white")};
`;

export const ConsumedNutrients = styled.div<ContainerProps>`
  opacity: ${({ loading }) => (loading ? "0" : "1")};
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    color: #555555;
  }
  span {
    font-size: 1.3rem;
    color: ${({ darkMode }) => (darkMode ? "white" : "black")};
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

export const ConsumedCalories = styled.div<ContainerProps>`
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
  span {
    color: ${({ darkMode }) => (darkMode ? "white" : "black")};
  }
`;

export const Wrapper = styled.div``;
