import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "./AuthContext";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

interface StyleProps {
  save?: boolean;
}

const Container = styled.section`
  margin-top: 6rem;
  width: 40rem;
  margin-left: 1rem;
  margin-right: 1rem;
  h2 {
    margin-bottom: 3rem;
  }
  h3 {
    margin: 1.3rem 0;
  }
  input {
    width: 90%;
    font-size: 1rem;
    padding: 0.3rem;
    border: 1px solid #55595b;
    border-radius: 5px;
    height: 2.5rem;
    display: block;
  }
`;
const ImageContainer = styled.div``;

const Image = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: #ffa101;
`;
const Button = styled.button<StyleProps>`
  padding: 0.5rem 0.7rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  background-color: ${({ save }) => (save ? "#ffa101" : "#F3F4F6")};
  color: ${({ save }) => (save ? "white" : "black")};
  cursor: pointer;
  height: 2.5rem;
  &:hover {
    background-color: ${({ save }) => (save ? "#cf8300" : "#dde0e5")};
  }
  &:active {
    background-color: ${({ save }) => (save ? "#a46700" : "#bec3ce")};
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.3rem;
  align-items: center;
`;

const NameContainer = styled.div``;
const EmailContainer = styled.div``;

const Divider = styled.div`
  border-bottom: 1px solid #e1e4e7; ;
`;

const AccountSettings = () => {
  const ctx = useContext(AuthContext);
  const uid = ctx?.currentUser.uid;
  const [data, setData] = useState<any>([]);
  const [editName, setEditName] = useState(false);
  const [editEmail, setEditEmail] = useState(false);

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
  const handleSaveName = () => {
    setEditName(false);
  };
  const handleEditEmail = () => {
    setEditEmail((prev) => !prev);
  };
  const handleSaveEmail = () => {
    setEditEmail(false);
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
            {editName ? (
              <Button onClick={handleSaveName} save>
                Save
              </Button>
            ) : null}
            {!editName ? <Button onClick={handleEditName}>Edit</Button> : null}
          </div>
        </Wrapper>
        <Divider />
      </NameContainer>
      <EmailContainer>
        <h3>Email</h3>
        <Wrapper>
          {editEmail ? (
            <input type="text" value={data.email} />
          ) : (
            <span>{data.email}</span>
          )}
          {editEmail ? (
            <Button onClick={handleSaveEmail} save>
              Save
            </Button>
          ) : null}
          {!editEmail ? <Button onClick={handleEditEmail}>Edit</Button> : null}
        </Wrapper>
        <Divider />
      </EmailContainer>
    </Container>
  );
};

export default AccountSettings;
