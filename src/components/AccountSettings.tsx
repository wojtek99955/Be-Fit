import styled from "styled-components";

const Container = styled.section`
  margin-top: 6rem;
  width: 40rem;
  margin-left: 1rem;
  h2 {
    margin-bottom: 3rem;
  }
  h3 {
    margin: 1rem 0;
  }
`;
const ImageContainer = styled.div``;

const Image = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: #ffa101;
`;
const Button = styled.button``;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const NameContainer = styled.div``;
const EmailContainer = styled.div``;

const AccountSettings = () => {
  return (
    <Container>
      <h2>Yout account</h2>
      <ImageContainer>
        <Wrapper>
          <div>
            <Image />
            <h3>Upload your profile image</h3>
          </div>
          <Button>Upload image</Button>
        </Wrapper>
        <hr />
      </ImageContainer>
      <NameContainer>
        <h3>Name</h3>
        <Wrapper>
          <span>Name</span>
          <button>Edit</button>
        </Wrapper>
        <hr />
      </NameContainer>
      <EmailContainer>
        <h3>Email</h3>
        <Wrapper>
          <input type="text" />
          <button>Save</button>
        </Wrapper>
        <hr />
      </EmailContainer>
    </Container>
  );
};

export default AccountSettings;
