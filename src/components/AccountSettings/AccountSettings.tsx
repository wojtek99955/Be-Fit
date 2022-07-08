import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../AuthContext";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import {
  Container,
  ImageContainer,
  Button,
  Wrapper,
  NameContainer,
  Divider,
  Image,
  EmailContainer,
} from "./AccountSettingsStyle";

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
