import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
const img = require("../../assets/images/food-img.jpg");

interface StylesProps {
  loading: boolean | null;
}
export const Container = styled.div`
  padding: 1rem;
  width: calc(100vw - 14rem);
  height: calc(100vh - 3.5rem);
  position: relative;
  top: 3.5rem;
  overflow: scroll;
  h2 {
    margin: 2rem 0;
    text-align: center;
    font-size: 2rem;
  }
`;

export const MainImg = styled.div`
  width: 100%;
  height: 16rem;
  background: rgba(0, 0, 0, 0.3) url(${img});
  background-blend-mode: darken;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: white;
    text-align: center;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  margin: auto;
  gap: 0.5rem;
  input {
    outline: none;
    border: none;
    padding: 0.2rem 0;
    width: 100%;
    height: 2.5rem;
    display: block;
    border-radius: 8px;
    width: 25rem;
  }
  button {
    background-color: #ffa101;
    border: none;
    border-radius: 8px;
    padding: 0 1rem;
    color: white;
    cursor: pointer;
    &:hover {
      background-color: #cf8300;
    }
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Nutrients = styled.div`
  display: flex;
  max-width: 800px;
  margin: auto;
  justify-content: space-between;
`;

export const BoxContainer = styled.div`
  background-color: #f3f4f6;
  border-radius: 12px;
  display: grid;
  grid-template-columns: 7rem 7rem;
  gap: 1rem;
  padding: 1rem;
  height: 15rem;

  div {
    text-align: center;
    color: white;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &:first-of-type {
      background-color: #6db26b;
    }
    &:nth-of-type(2) {
      background-color: #777777;
    }
    &:nth-of-type(3) {
      background-color: #ffa101;
    }
    &:nth-of-type(4) {
      background-color: #e1605e;
    }
    &:nth-of-type(5) {
      background-color: #31525b;
    }
    &:nth-of-type(6) {
      background-color: #4d904b;
    }
  }
  span {
    padding-top: 0.3rem;
    display: inline-block;
  }
`;

export const StyledH2 = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: black;
  text-align: center;
`;

export const FoodName = styled.div<StylesProps>`
  background-color: ${({ loading }) => (loading ? "#f3f4f6" : "white")};
  height: 3rem;
  margin: auto;
  width: 8rem;
  border-radius: 12px;
  margin-bottom: 3rem;
`;

export const BoxHeader = styled.div<StylesProps>`
  position: relative;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  height: 2rem;
  background-color: ${({ loading }) => (loading ? "#f3f4f6" : "white")};
  border-radius: 12px;

  h3 {
    color: #55595b;
    display: inline;
    font-size: 1.2rem;
    font-weight: 600;
  }
  input {
    width: 3.5rem;
    border: 2px solid #ffa101;
    display: inline-block;
    border-radius: 8px;
    font-size: 1.2rem;
    color: #55595b;
    font-weight: 600;
  }
  button {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto 0;
    display: inline-block;
    border: none;
    color: white;
    background-color: #ffa101;
    padding: 0.2rem 1rem;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    &:hover {
      background-color: #cf8300;
    }
  }
  span {
    font-size: 1.2rem;
    color: #55595b;
    font-weight: 600;
  }
`;

export const Box = styled.div``;

export const SearchIcon = styled(BiSearch)`
  font-size: 1.5rem;
  margin: 0 0.5rem;
  color: black;
`;

export const InputContainer = styled.div`
  display: flex;
  border-radius: 8px;
  background: white;
  align-items: center;
  label {
    display: block;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
