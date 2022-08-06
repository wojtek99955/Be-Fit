import styled from "styled-components";

export const Container = styled.section`
  padding: 1rem;
  width: 100%;
  height: calc(100vh - 3.5rem);
  background-color: white;
  position: relative;
  top: 3.5rem;
  overflow-y: scroll;

  h2 {
    font-size: 2rem;
    text-align: center;
  }
  button {
    border-radius: 8px;
    border: none;
    padding: 0.6rem 0.8rem;
    transition: background-color 300ms;
    cursor: pointer;
    background-color: #f0f2f2;

    &:hover {
      background-color: #e4e7e8;
    }
  }
`;

export const Header = styled.div`
  background-color: #00c579;
  height: 15rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 2.5rem;
  position: relative;
  h1 {
    font-size: 2.5rem;
    position: relative;
    z-index: 2;
  }
`;

export const FitnessStatsIconContainer = styled.div`
  width: 11rem;
  position: absolute;
  top: 20%;
  left: 10%;
`;

export const PieChartIconContainer = styled.div`
  width: 11rem;
  position: absolute;
  right: 10%;
  top: 18%;
`;

export const Chart = styled.div`
  width: 20rem;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f4f6;
  padding: 1rem;
  border-radius: 12px;
`;

export const Charts = styled.div`
  margin: 4rem auto;
  display: flex;
  justify-content: center;
  gap: 5rem;
`;

export const ChartsBtns = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1.5rem 0;
`;
