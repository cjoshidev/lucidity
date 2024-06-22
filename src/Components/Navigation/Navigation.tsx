import { Switch } from "@mui/material";
import Logout from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";
import { UpdateUserType } from "../../Actions/actions";
import { useState } from "react";
import "./Navigation.style.css";

export default function Navigation() {
  const [checked, setChecked] = useState(true);
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    const userType = event.target.checked ? "user" : "admin";
    dispatch(UpdateUserType({ usertype: userType }));
  };

  return (
    <div className="naviationContainer">
      <label>Admin</label>
      <Switch checked={checked} onChange={handleChange} />
      <label>User</label>
      <Logout />
    </div>
  );
}
