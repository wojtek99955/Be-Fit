import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { darkModeContext } from "../../context/DarkModeContextProvider";
import { useContext } from "react";

interface DarkMode {
  darkMode: boolean;
}

const Container = styled.section<DarkMode>`
  width: 100%;
  height: calc(100vh - 3.5rem);
  position: relative;
  top: 3.5rem;
  overflow-y: scroll;
  background-color: ${({ theme, darkMode }) =>
    darkMode ? theme.darkMode.main : "white"};
`;

const Wrapper = styled.section`
  position: relative;
  z-index: 2;
`;

const CalculatorsLayout = () => {
  const darkModeCtx = useContext(darkModeContext);
  const darkMode = darkModeCtx?.darkMode;

  return (
    <>
      <Container darkMode={darkMode!}>
        <svg
          id="wave"
          viewBox="0 0 1440 430"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: "rotate(180deg)" }}
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stop-color="rgba(255, 161, 1, 1)" offset="0%"></stop>
              <stop stop-color="rgba(199, 225, 199, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#sw-gradient-0)"
            d="M0,258L60,222.2C120,186,240,115,360,107.5C480,100,600,158,720,207.8C840,258,960,301,1080,286.7C1200,272,1320,201,1440,193.5C1560,186,1680,244,1800,236.5C1920,229,2040,158,2160,136.2C2280,115,2400,143,2520,179.2C2640,215,2760,258,2880,250.8C3000,244,3120,186,3240,164.8C3360,143,3480,158,3600,186.3C3720,215,3840,258,3960,265.2C4080,272,4200,244,4320,193.5C4440,143,4560,72,4680,100.3C4800,129,4920,258,5040,286.7C5160,315,5280,244,5400,236.5C5520,229,5640,287,5760,258C5880,229,6000,115,6120,57.3C6240,0,6360,0,6480,0C6600,0,6720,0,6840,14.3C6960,29,7080,57,7200,78.8C7320,100,7440,115,7560,129C7680,143,7800,158,7920,157.7C8040,158,8160,143,8280,179.2C8400,215,8520,301,8580,344L8640,387L8640,430L8580,430C8520,430,8400,430,8280,430C8160,430,8040,430,7920,430C7800,430,7680,430,7560,430C7440,430,7320,430,7200,430C7080,430,6960,430,6840,430C6720,430,6600,430,6480,430C6360,430,6240,430,6120,430C6000,430,5880,430,5760,430C5640,430,5520,430,5400,430C5280,430,5160,430,5040,430C4920,430,4800,430,4680,430C4560,430,4440,430,4320,430C4200,430,4080,430,3960,430C3840,430,3720,430,3600,430C3480,430,3360,430,3240,430C3120,430,3000,430,2880,430C2760,430,2640,430,2520,430C2400,430,2280,430,2160,430C2040,430,1920,430,1800,430C1680,430,1560,430,1440,430C1320,430,1200,430,1080,430C960,430,840,430,720,430C600,430,480,430,360,430C240,430,120,430,60,430L0,430Z"
          ></path>
        </svg>

        <Wrapper>
          <Outlet />
        </Wrapper>
      </Container>
    </>
  );
};

export default CalculatorsLayout;
