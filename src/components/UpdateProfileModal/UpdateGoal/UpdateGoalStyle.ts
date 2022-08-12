import styled from "styled-components";

export const RangeInput = styled.div`
  width: 100%;
  position: relative;
  margin-top: 1rem;

  input {
    -webkit-appearance: none;
    width: 100%;
    height: 0.5rem;
    margin-bottom: 0;
    border-radius: 8px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
    padding-left: 0;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      height: 1.3rem;
      width: 1.3rem;
      border-radius: 50%;
      background-color: #ffa101;
    }
    &::-moz-range-thumb {
      width: 1.3rem;
      height: 1.3rem;
      background: #04aa6d;
      appearance: none;
      cursor: pointer;
    }
  }

  div {
    text-align: center;
    margin: 2rem 0;
    font-size: 1.3rem;
  }
`;
