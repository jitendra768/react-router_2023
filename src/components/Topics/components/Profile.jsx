import { useContext } from "react";
import userContext from "../Context/UserContext";

const Profile = () => {
  const {user}  = useContext(userContext);
  console.log("tesssss",user)

  if (!user) return <div>please login</div>;
  return <div>Welcome {user.userName}</div>;
};

export default Profile;
