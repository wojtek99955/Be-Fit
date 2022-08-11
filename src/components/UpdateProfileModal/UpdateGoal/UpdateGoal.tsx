import { Title, Wrapper, BtnsContainer } from "../UpdateProfileModalStyle";

interface Props {
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const UpdateGoal = ({ setPage }: Props) => {
  return (
    <Wrapper>
      <Title>Set your goal</Title>
      <BtnsContainer>
        <button>Prev</button>
        <button>Done</button>
      </BtnsContainer>
    </Wrapper>
  );
};

export default UpdateGoal;
