import React from "react";
import { Button, Paper, Typography, Chip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Greeting from "./Greeting";
import ContainerStyle from "./containerStyle";
const Home: React.FC<{ title: string }> = ({ title }) => {
  const navigate = useNavigate();
  return (
    <Paper>
      <Typography variant="h1">{`hi, welcome to your home page ${title}`}</Typography>
      <Button
        variant="contained"
        onClick={() => {
          localStorage.removeItem("user");
          navigate("/login");
        }}
      >
        LogOut
      </Button>
      <ContainerStyle styles={{ display: "flex", background: "red" }} />
      <Greeting>
        <Chip label=" hiii I am from greeting component" />
      </Greeting>
    </Paper>
  );
};
export default Home;
