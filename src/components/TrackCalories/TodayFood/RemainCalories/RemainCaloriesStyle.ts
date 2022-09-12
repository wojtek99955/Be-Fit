import styled from "styled-components";

interface LoadingProps {
  loading: boolean;
  darkMode: boolean;
}

export const Container = styled.div<LoadingProps>`
  border-radius: 12px;
  display: flex;
  padding: 2;
  align-items: center;
  justify-content: center;
  height: 15rem;
  background-color: ${({ darkMode }) => (darkMode ? "#ffa101" : "white")};
  border: ${({ loading }) =>
    loading ? "4px solid #f3f4f6" : "4px solid #ffa101"};
`;
export const RemainedCalories = styled.div<LoadingProps>`
  opacity: ${({ loading }) => (loading ? "0" : "1")};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  div {
    font-size: 2.5rem;
    color: ${({ darkMode }) => (darkMode ? "white" : "black")};
  }
  span {
    font-size: 1.4rem;
    color: #555555;
  }
`;
