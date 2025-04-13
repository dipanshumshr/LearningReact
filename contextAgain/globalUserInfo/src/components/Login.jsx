import React, { useState } from "react";
import { useUser } from "../context/user";

function Login() {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
  });
  const [inputIsValid, setInputIsValid] = useState({
    name: false,
    email: false,
  });

  const { updateUser } = useUser();

  const handleNameInput = (e, value) => {
    setUserDetails((prev) => {
      return {
        ...prev,
        [value]: e.target.value,
      };
    });
  };

  const handleBlurValue = (value) => {
    const valueTrim = userDetails[value].trim();

    let isValid ;

    if (value === "name") {
      isValid = valueTrim.length !== 0;
    } else if (value === "email") {
      isValid = valueTrim.length !== 0 && valueTrim.includes("@");
    }

    setInputIsValid((prev) => {
      return {
        ...prev,
        [value]: isValid,
      };
    });
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    if (!userDetails.name) {
      return;
    }
    updateUser(userDetails.name, userDetails.email);

    setUserDetails({
      name: "",
      email: "",
    });
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={userDetails.name}
        onBlur={() => handleBlurValue("name")}
        onChange={(e) => handleNameInput(e, "name")}
      />

      {!inputIsValid.name ? <p>Name can't be Empty</p> : ""}
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={userDetails.email}
        onBlur={() => handleBlurValue("email")}
        onChange={(e) => handleNameInput(e, "email")}
      />
      {!inputIsValid.email ? <p>Invalid email, Please Try again</p> : ""}
      <button disabled = {!inputIsValid.email || !inputIsValid.name } onClick={handleSubmission}>Login</button>
    </div>
  );
}

export default Login;
