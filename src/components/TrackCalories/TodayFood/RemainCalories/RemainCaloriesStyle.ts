import styled from "styled-components";

interface LoadingProps {
  loading: boolean;
}

export const Container = styled.div<LoadingProps>`
  border-radius: 12px;
  background-color: ${({ loading }) => (loading ? "#f3f4f6" : "white")};
  border: ${({ loading }) =>
    loading ? "4px solid #f3f4f6" : "4px solid #ffa101"};
`;
export const RemainedCalories = styled.div<LoadingProps>`
  opacity: ${({ loading }) => (loading ? "0" : "1")};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
  div {
    font-size: 2.5rem;
  }
  span {
    font-size: 1.4rem;
    color: #555555;
  }
`;
