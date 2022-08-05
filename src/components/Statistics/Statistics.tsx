import styled from "styled-components";
import FitnessStats from "../../assets/svg/FitnessStats";
import StatisticsPieChartIcon from "../../assets/svg/StatisticsPieChartIcon";

export const Container = styled.section`
  padding: 1rem;
  width: 100%;
  height: calc(100vh - 3.5rem);
  background-color: white;
  position: relative;
  top: 3.5rem;
  overflow-y: scroll;
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

const FitnessStatsIconContainer = styled.div`
  width: 11rem;
  position: absolute;
  top: 20%;
  left: 10%;
`;

const PieChartIconContainer = styled.div`
  width: 11rem;
  position: absolute;
  right: 10%;
  top: 18%;
`;

const Statistics = () => {
  return (
    <Container>
      <Header>
        <FitnessStatsIconContainer>
          <FitnessStats />
        </FitnessStatsIconContainer>
        <h1>Monthly statistics</h1>
        <PieChartIconContainer>
          <StatisticsPieChartIcon />
        </PieChartIconContainer>
      </Header>
    </Container>
  );
};

export default Statistics;
