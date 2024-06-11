import { Button } from "@mui/material";
import React from "react";
type propsProps = {
  children: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
const ButtonComponent = (props: propsProps) => {
  return (
    <Button variant="contained" onClick={(event) => props.handleClick(event)}>
      {props.children}
    </Button>
  );
};
export default ButtonComponent;
