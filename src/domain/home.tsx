import React from "react";
import { Button, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
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
    </Paper>
  );
};
export default Home;
