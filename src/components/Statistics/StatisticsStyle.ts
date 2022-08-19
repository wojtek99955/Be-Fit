import styled from "styled-components";
import { BiChevronDown } from "react-icons/bi";
import { BiChevronUp } from "react-icons/bi";

interface ActiveCharts {
  active: boolean;
}
interface Loading {
  loading: boolean;
}

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

export const Chart = styled.div<Loading>`
  width: 20rem;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f4f6;
  padding: 1rem;
  border-radius: 12px;
  opacity: ${({ loading }) => (loading ? "0" : "1")};
`;

export const Charts = styled.div`
  margin: 4rem auto;
  display: flex;
  justify-content: center;
  gap: 5rem;
`;

export const ChartsBtns = styled.div<ActiveCharts>`
  display: flex;
  gap: 1rem;
  padding: 1.5rem 0;

  button {
    border-radius: 8px;
    border: none;
    padding: 0.6rem 0.8rem;
    cursor: pointer;

    &:first-child {
      background-color: ${({ active }) => (active ? "#b2bcbc" : "#f0f2f2")};
    }
    &:nth-child(2) {
      background-color: ${({ active }) => (active ? "#f0f2f2" : "#b2bcbc")};
    }
  }
`;

export const DownIcon = styled(BiChevronDown)`
  font-size: 2rem;
  color: #ffa101;
`;

export const UpIcon = styled(BiChevronUp)`
  font-size: 2rem;
  color: #ffa101;
`;

export const DropdownContainer = styled.div`
  position: relative;
  max-width: 11rem;
  margin: auto;
`;
export const DropdownListContainer = styled.div`
  position: absolute;
  margin-top: 0.5rem;
  overflow-y: hidden;
  width: 100%;
  border: 1px solid #e1e4e7;
  background-color: white;
  border-radius: 12px;

  ul {
    list-style-type: none;
    height: 12rem;
    overflow-y: scroll;
    li {
      padding: 0.8rem 0.5rem;
      cursor: pointer;
      transition: background-color 300ms;
      &:hover {
        background-color: #f3f4f6;
      }
      &:active {
        background-color: #e4e7e8;
      }
    }
  }
`;
export const DropdownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;
