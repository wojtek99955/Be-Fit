import { Title, Wrapper, BtnsContainer } from "../UpdateProfileModalStyle";

interface Props {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const UpdateGoal = ({ setPage, setShowModal }: Props) => {
  return (
    <Wrapper>
      <Title>Set your goal</Title>
      <BtnsContainer>
        <button
          onClick={() => {
            setPage(2);
          }}
        >
          Prev
        </button>
        <button
          onClick={() => {
            setShowModal(false);
          }}
        >
          Done
        </button>
      </BtnsContainer>
    </Wrapper>
  );
};

export default UpdateGoal;
