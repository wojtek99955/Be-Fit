import { useState } from "react";
import ReactDOM from "react-dom";
import BmiSetUp from "./BmiSetUp/BmiSetUp";
import CalorieIntakeSetup from "./CalorieIntakeSetup/CalorieIntakeSetup";
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
      {page === 1 && <BmiSetUp setPage={setPage} />}
      {page === 2 && <CalorieIntakeSetup setPage={setPage} />}
    </Container>,
    document.getElementById("portal")!
  );
};

export default UpdateProfileModal;
