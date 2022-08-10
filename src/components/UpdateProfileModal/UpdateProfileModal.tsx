import { useState } from "react";
import ReactDOM from "react-dom";
import BmiSetUp from "./BmiSetUp";
import { Container, Wrapper } from "./UpdateProfileModalStyle";

const UpdateProfileModal = () => {
  const [page, setPage] = useState(0);

  return ReactDOM.createPortal(
    <Container>
      {page === 0 && (
        <Wrapper>
          <h1>Set up your profile</h1>
          <button
            onClick={() => {
              setPage(1);
            }}
          >
            start
          </button>
        </Wrapper>
      )}
      {page === 1 && <BmiSetUp />}
    </Container>,
    document.getElementById("portal")!
  );
};

export default UpdateProfileModal;
