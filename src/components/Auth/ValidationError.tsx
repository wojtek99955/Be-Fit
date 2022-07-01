import styled from "styled-components";

const Container = styled.div`
  color: red;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;

interface Props {
  children?: React.ReactNode;
}

const ValidationError = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default ValidationError;
