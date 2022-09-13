import styled from "styled-components";
import { Link } from "react-router-dom";
import { Field } from "formik";
import { device } from "../../assets/mediaQueries/device";
import { HiCheckCircle } from "react-icons/hi";
import { BiLock } from "react-icons/bi";

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
  font-size: 0.9rem;
`;

export const FormContainer = styled.div`
  background-color: white;
  padding: 1rem;
  width: 25rem;
  margin: 1rem;
  display: block;
  position: relative;
  @media ${device.tablet} {
    margin: auto;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 3rem;
    color: #ffa101;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffa101;
    border: none;
    padding: 0 2rem;
    border-radius: 10px;
    height: 2.8rem;
    color: white;
    width: 100%;
    cursor: pointer;
    margin-bottom: 2rem;
    margin-top: 2rem;

    &:hover {
      background-color: #cf8300;
    }
  }
`;

export const StyledField = styled(Field)`
  border: 2px solid #ffa101;
  padding: 0.8rem 0.5rem;
  width: 100%;
  margin-bottom: 0.5rem;
  border-radius: 10px;
`;

export const StyledLink = styled(Link)`
  color: grey;
  text-decoration: none;
  display: block;
  font-size: 1rem;
`;

export const ErrorMsg = styled.div`
  color: red;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;

export const LoadingContainer = styled.div`
  height: 2.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SuccessMsg = styled.div`
  color: grey;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const SuccessIcon = styled(HiCheckCircle)`
  font-size: 1.6rem;
  color: green;
`;

export const ResetPassword = styled.div`
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const LockIcon = styled(BiLock)`
  font-size: 1.5rem;
  color: #e1605e;
`;
