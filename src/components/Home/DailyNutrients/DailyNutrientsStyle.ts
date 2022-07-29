import styled from "styled-components";
import { SettingsIcon } from "../CardStyles";

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
  strong {
    font-size: 2.5rem;
  }
  span {
    color: #a29e9e;
  }
`;
export const Nutrients = styled.div`
  span {
    font-weight: 600;
    color: white;
  }
`;

interface Loading {
  loading: boolean;
}
export const Wrapper = styled.div<Loading>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  gap: 2.5rem;
  opacity: ${({ loading }) => (loading ? "0" : "1")};
`;

export const RowOne = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  div {
    display: flex;
    justify-content: space-between;
    width: 7rem;
    width: 50%;
    font-size: 0.9rem;
    padding: 0.7rem 0.5rem;
    border-radius: 8px;
    color: white;

    &:first-of-type {
      background-color: #e1605e;
    }
    &:nth-of-type(2) {
      background-color: #32525b;
    }
  }
`;

export const RowTwo = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  div {
    display: flex;
    justify-content: space-between;
    width: 7rem;
    width: 50%;
    font-size: 0.9rem;
    padding: 0.7rem 0.5rem;
    border-radius: 8px;
    color: white;

    &:first-of-type {
      background-color: #019d51;
    }

    &:nth-of-type(2) {
      background-color: #ffa101;
    }
  }
`;
