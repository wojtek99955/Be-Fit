import { Link } from "react-router-dom";
import styled from "styled-components";
import { SettingsIcon } from "../CardStyles";
import { Box } from "../CardStyles";
import { device } from "../../../assets/mediaQueries/device";

interface Loading {
  loading?: boolean;
}

export const Calories = styled.div<Loading>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;

  strong {
    font-size: 2.5rem;
  }
  span {
    color: #a29e9e;
  }
`;

export const StyledSettingsIcon = styled(SettingsIcon)`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  z-index: 3;
`;

export const StyledBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 13rem;
  @media ${device.tablet} {
    height: auto;
  }
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
  padding: 0.5rem;
  @media ${device.mobileM} {
    padding: 0.8rem;
  }

  @media ${device.mobileL} {
    padding: 1.5rem;
  }
  @media (min-width: 615px) {
    padding: 3.8rem;
  }

  @media ${device.laptop} {
    padding: 1rem;
  }
`;
