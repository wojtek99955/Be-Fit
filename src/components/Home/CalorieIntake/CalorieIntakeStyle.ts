import styled from "styled-components";
import { device } from "../../../assets/mediaQueries/device";

interface StyleProps {
  loading: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  strong {
    font-size: 1.5rem;
    color: black;
    @media ${device.tablet} {
      font-size: 2.5rem;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-size: 1rem;
  }
`;

export const Data = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #c7e1c7;
  border-radius: 50%;
  height: 7rem;
  width: 7rem;
  @media ${device.tablet} {
    width: 10rem;
    height: 10rem;
  }
  display: flex;
  align-items: center;

  div {
    font-size: 1rem;
    color: #a29e9e;
  }
`;

export const BoxWrapper = styled.div<StyleProps>`
  opacity: ${({ loading }) => (loading ? "0" : "1")};
`;
