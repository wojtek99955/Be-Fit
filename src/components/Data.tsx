import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const Data = () => {
  const ctx = useContext(AuthContext);
  const data = ctx?.currentUser;
  console.log(data);
  return (
    <div>
      <h1>Data</h1>
      <p>{data?.email}</p>
    </div>
  );
};

export default Data;
