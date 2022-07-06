import ReactDOM from "react-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  background-color: white;
  padding: 1rem;
  h1 {
    max-width: 20rem;
    text-align: center;
  }
  button {
    border: none;
    display: block;
    background-color: green;
    margin: auto;
    padding: 1rem 2rem;
    margin-top: 8rem;
    color: white;
    background-color: #ffa101;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Modal = () => {
  return ReactDOM.createPortal(
    <Container>
      <Wrapper>
        <h1>Add Additional Data To Your Account</h1>
        <StyledLink to="/my-body">
          <button>update</button>
        </StyledLink>
      </Wrapper>
    </Container>,
    document.getElementById("portal")!
  );
};

export default Modal;
