import ReactDOM from "react-dom";
import { Container, Wrapper, StyledLink } from "./UpdateProfileModal";

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
