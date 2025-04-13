import { Switch } from "antd";

import React from "react";
import { useTheme } from "../context";

function ToggleButton() {
  const [toggle, setToggle] = React.useState(false);

  const { changeTheme } = useTheme();

  const onChangeHandler = () => {
    const newMode = !toggle ? "dark" : "light";
       setToggle(!toggle);
       changeTheme(newMode)
  };
  return <Switch value="" checked={toggle} onChange={onChangeHandler} />;
}

export default ToggleButton;
