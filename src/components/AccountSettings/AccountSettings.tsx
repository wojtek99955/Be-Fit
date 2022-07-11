import { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

const AccountSettings = () => {
  const location = useLocation();
  let navigation = useNavigate();

  console.log(location.pathname + "location");
  useEffect(() => {
    location.pathname === "/settings" && navigation("/settings/account");
  }, []);
  return (
    <>
      <Outlet />
    </>
  );
};

export default AccountSettings;
