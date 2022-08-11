import { useState } from "react";
import ReactDOM from "react-dom";
import BmiSetUp from "./BmiSetUp/BmiSetUp";
import CalorieIntakeSetup from "./CalorieIntakeSetup/CalorieIntakeSetup";
import UpdateGoal from "./UpdateGoal/UpdateGoal";
import {
  Container,
  Wrapper,
  StartButton,
  IconContainer,
} from "./UpdateProfileModalStyle";
import SetAccountIcon from "../../assets/svg/SetAccountIcon";

const UpdateProfileModal = () => {
  const [page, setPage] = useState(0);

  return ReactDOM.createPortal(
    <Container>
      {page === 0 && (
        <Wrapper>
          <h1>Set up your profile</h1>
          <IconContainer>
            <SetAccountIcon />
          </IconContainer>
          <StartButton
            onClick={() => {
              setPage(1);
            }}
          >
            start
          </StartButton>
        </Wrapper>
      )}
      {page === 1 && <BmiSetUp setPage={setPage} />}
      {page === 2 && <CalorieIntakeSetup setPage={setPage} />}
      {page === 3 && <UpdateGoal />}
    </Container>,
    document.getElementById("portal")!
  );
};

export default UpdateProfileModal;
