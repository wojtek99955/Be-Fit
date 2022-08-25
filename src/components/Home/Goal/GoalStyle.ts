import styled from "styled-components";
import { Box, SettingsIcon } from "../CardStyles";
import { device } from "../../../assets/mediaQueries/device";

interface WrapperProps {
  loading: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  padding: 0.3rem;
  @media ${device.tablet} {
    padding: 0.8rem;
  }
  border-radius: 12px;
  margin-top: 0.5rem;
  opacity: ${({ loading }) => (loading ? "0" : "1")};
  &:first-of-type {
    background-color: #faf2ef;
    p {
      background-color: #e1605e;
    }
  }
  &:nth-of-type(2) {
    background-color: #c7e1c7;
    p {
      background-color: #009d51;
    }
  }
  h2 {
    font-size: 0.9rem;
    @media ${device.tablet} {
      font-size: 1rem;
      margin-bottom: 0.5rem;
    }
    color: #a29e9e;
    margin-bottom: 0.3rem;
    font-weight: 600;
  }
  p {
    font-weight: 400;
    font-size: 1rem;
    @media ${device.tablet} {
      font-size: 1.2rem;
    }
    display: inline-block;
    color: white;
    padding: 0.3rem;
    border-radius: 12px;
  }
`;

export const StyledBox = styled(Box)`
  height: 13rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${device.tablet} {
    height: auto;
  }
`;
export const StyledSettingsIcon = styled(SettingsIcon)`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

export const BoxWrapper = styled.div<WrapperProps>`
  opacity: ${({ loading }) => (loading ? "0" : "1")};
`;
