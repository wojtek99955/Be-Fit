import styled from "styled-components";
import { SettingsIcon, Box } from "../CardStyles";

interface StyleProps {
  bmi: number;
  loading: boolean;
}
interface BmiProps {
  bmi: number;
}

export const Wrapper = styled.div<StyleProps>`
  border-width: 8px;
  border-style: solid;
  border-color: ${({ bmi }) => {
    if (bmi >= 25) {
      return "#E1605E";
    } else if (bmi >= 18.5) {
      return "#009D51";
    } else if (bmi < 18.5) {
      return "#E1605E";
    } else {
      return "transparent";
    }
  }};
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ loading }) => (!loading ? "1" : "0")};

  p {
    color: #bcbcbc;
    text-align: center;
    color: ${({ bmi }) => {
      if (bmi >= 30 || bmi <= 18.49) {
        return "white";
      }
    }};
  }
`;
export const Bmi = styled.strong`
  font-size: 2.5rem;
  display: block;
`;
export const Data = styled.div``;

export const StyledSettingsIcon = styled(SettingsIcon)<BmiProps>`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: ${({ bmi }) => {
    if (bmi >= 30 || bmi <= 18.49) {
      return "white";
    }
  }};
`;

export const StyledBox = styled(Box)<BmiProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: ${({ bmi }) => {
    if (bmi >= 30 || bmi <= 18.49) {
      return "rgb(225, 96, 94,0.6)";
    }
  }};
`;
export const LoaderContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
