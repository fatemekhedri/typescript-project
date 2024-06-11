import { TextField } from "@mui/material";
import React, { useState } from "react";
// type InputProps = {
//   value: string;
//   handleChange: () => void;
// };
const Input = () => {
  const [state, setState] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("log event hass-->", event);
    setState(event.target.value);
  };
  return <TextField variant="outlined" value={state} onChange={handleChange} />;
};
export default Input;
