import React, { useContext } from "react";
import userContext from "../context/UserContext";

function Profile() {
  const { data } = useContext(userContext);

  if (!data) return <p>Please return</p>;
  else return <div>
    <h1 className="text-gray-700 bg-teal-900 text-8xl">welcome {data.username}</h1>
  </div>;
}

export default Profile;
