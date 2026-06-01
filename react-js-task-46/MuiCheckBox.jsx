import React from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import { useState } from "react";
function MuiCheckBox() {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <FormControlLabel
      control={<Checkbox
                 checked={checked}
                    onChange={handleChange}
              />}
      label="Accept terms and conditions">
    </FormControlLabel>

  );
}
export default MuiCheckBox;
