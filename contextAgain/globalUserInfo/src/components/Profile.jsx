import React from "react";
import { useUser } from "../context/user";

function Profile() {
  const { userDetail, logoutUser } = useUser();

  const onLogOut = () => {
    logoutUser();
  };

  if (userDetail.name === "") {
    return <p>Welcome Guest</p>;
  } else {
    return (
      <div>
        <p>Hello {userDetail.name} hope you are doing well</p>
        <p>This is your email {userDetail.email}</p>
        <button onClick={onLogOut}>Logout User</button>
      </div>
    );
  }
}

export default Profile;
