import { db } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { AuthContext } from "./AuthContext";
import { useContext, useState, useEffect } from "react";
import { UserData, User, StyledUserIcon } from "./SideBar/SideBarStyle";

const SideBarUserData = () => {
  const ctx = useContext(AuthContext);
  const uid = ctx?.currentUser.uid;
  const [data, setData] = useState<any>({});
  useEffect(() => {
    onSnapshot(doc(db, `users/${uid}`), (doc) => {
      setData(doc.data());
    });
  }, [uid]);

  return (
    <User>
      <StyledUserIcon url={data.avatarImg}>
        {data.avatarImg ? null : data?.name?.toUpperCase().slice(0, 1)}
      </StyledUserIcon>
      <UserData>
        <strong>{data.name}</strong>
        <span>{data.email}</span>
      </UserData>
    </User>
  );
};

export default SideBarUserData;
