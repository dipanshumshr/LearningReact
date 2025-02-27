import React, { useContext } from "react";
import LoginContext from "../context/LoginContext";

function Profile() {
  const { data } = useContext(LoginContext);
  {
    if (data.username == null && data.password == null) {
      return (
        <div>
          <h1>Please Enter the creds</h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1> Welcome {data.username}</h1>
          <h2> This is {data.password}</h2>
        </div>
      );
    }
  }
}

export default Profile;
