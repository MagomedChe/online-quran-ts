import * as React from "react";
import Switch from "@mui/material/Switch";

export default function ControlledSwitches() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Switch
      checked={checked}
      size={"medium"}
      onChange={handleChange}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
}
