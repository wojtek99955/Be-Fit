import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "./AuthContext";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

const Container = styled.section`
  margin-top: 6rem;
  width: 40rem;
  margin-left: 1rem;
  h2 {
    margin-bottom: 3rem;
  }
  h3 {
    margin: 1.3rem 0;
  }
  button {
    padding: 0.3rem 0.5rem;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
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
  margin-bottom: 1.3rem;
  align-items: center;
`;

const NameContainer = styled.div``;
const EmailContainer = styled.div`
  input {
    width: 100%;
  }
`;

const Divider = styled.div`
  border-bottom: 1px solid #e1e4e7; ;
`;

const AccountSettings = () => {
  const ctx = useContext(AuthContext);
  const uid = ctx?.currentUser.uid;
  const [data, setData] = useState<any>([]);
  const [editName, setEditName] = useState(false);

  useEffect(() => {
    async function getData() {
      const snap = await getDoc(doc(db, "users", `${uid}`));

      if (snap.exists()) {
        console.log(snap.data());
        setData(snap.data());
      } else {
        console.log("No such document");
      }
    }
    getData();
  }, [uid]);

  const handleEditName = () => {
    setEditName((prev) => !prev);
  };

  return (
    <Container>
      <h2>Yout account</h2>
      <ImageContainer>
        <Wrapper>
          <Image />
          <div>
            <h3>Upload your profile image</h3>
            <p>This helps your teammates recognise you </p>
          </div>
          <Button>Upload image</Button>
        </Wrapper>
        <Divider />
      </ImageContainer>
      <NameContainer>
        <h3>Name</h3>
        <Wrapper>
          {editName ? (
            <input type="text" value={data.name} />
          ) : (
            <span>{data.name}</span>
          )}
          <div>
            <button>Save</button>
            <button onClick={handleEditName}>Edit</button>
          </div>
        </Wrapper>
        <Divider />
      </NameContainer>
      <EmailContainer>
        <h3>Email</h3>
        <Wrapper>
          <input type="text" value={data.email} />
          <button>Cancel</button>
          <button>Save</button>
        </Wrapper>
        <Divider />
      </EmailContainer>
    </Container>
  );
};

export default AccountSettings;
