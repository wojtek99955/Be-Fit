import styled from "styled-components";
import { SettingsIcon } from "../CardStyles";
import { Box } from "../CardStyles";
import { device } from "../../../assets/mediaQueries/device";

interface Loading {
  loading: boolean;
}

export const StyledSettingsIcon = styled(SettingsIcon)`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

export const Kcal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  strong {
    font-size: 2.5rem;
  }
  span {
    color: #a29e9e;
  }
`;

export const StyledBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20rem;
`;

export const Wrapper = styled.div<Loading>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  opacity: ${({ loading }) => (loading ? "0" : "1")};
  padding: 1.6rem;
  @media ${device.tablet} {
    padding: 4rem;
  }
  @media ${device.laptop} {
    padding: 1rem;
  }
`;
