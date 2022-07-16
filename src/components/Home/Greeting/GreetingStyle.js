import styled from "styled-components";

export const Container = styled.div`
  /* background-color: rgba(250, 230, 177, 1);
  background-image: linear-gradient(
    90deg,
    rgba(250, 230, 177, 1) 0%,
    rgba(255, 161, 1, 1) 50%,
    rgba(49, 82, 91, 0.84) 94%
  ); */
  background-color: #00d683;

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
    margin-bottom: 2rem;
    position: relative;
    z-index: 2;
  }
`;
export const SearchInput = styled.input`
  outline: none;
  border: none;
  padding: 0.2rem 0rem;
  display: block;
  height: 2.2rem;
  border-radius: 8px;
  width: 100%;
`;

export const HealthyStyleIconContainer = styled.div`
  width: 12rem;
  position: absolute;
  left: 3rem;
`;

export const WorkOutIconContainer = styled.div`
  width: 8rem;
  position: absolute;
  right: 3rem;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  background-color: white;
  width: clamp(15rem, 50%, 30rem);
`;
