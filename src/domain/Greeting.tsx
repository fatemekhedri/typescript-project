import React from "react";
import { Typography } from "@mui/material";

interface GreetingProps {
  name?: string;
  children?: React.ReactNode | string;
}
const Greeting: React.FC<GreetingProps> = ({ name, children }) => {
  interface Flower {
    kind: "maryam" | "narges" | "rose";
    color: string;
    number: Number;
  }
  const maryamFLower: Flower = {
    kind: "maryam",
    color: "white",
    number: 20,
  };
  console.log(
    `alan oomadam interface ha ro namayesh b edam ${maryamFLower.kind}`
  );

  return (
    <Typography>
      {" "}
      <Typography variant="h2">chitoriii {name}</Typography>
      <Typography variant="h4">{children}</Typography>
    </Typography>
  );
};
export default Greeting;
