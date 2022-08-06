import styled from "styled-components";
import { SettingsIcon } from "../CardStyles";
import { Box } from "../CardStyles";

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

interface Loading {
  loading: boolean;
}
export const Wrapper = styled.div<Loading>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.5rem;
  opacity: ${({ loading }) => (loading ? "0" : "1")};
`;

export const StyledBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
