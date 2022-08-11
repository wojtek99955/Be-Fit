import { Title, Wrapper } from "../UpdateProfileModalStyle";

interface Props {
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const UpdateGoal = ({ setPage }: Props) => {
  return (
    <Wrapper>
      <Title>Set your goal</Title>
    </Wrapper>
  );
};

export default UpdateGoal;
