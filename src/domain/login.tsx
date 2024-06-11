import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Grid, TextField } from "@mui/material";
import axios from "axios";

const Login: React.FC<{}> = () => {
  // type AuthUser = {
  //   email: string;
  //   password: string;
  // };
  const navigate = useNavigate();
  const [email, setEmail] = useState<string >("");
  const [password, setPassword] = useState<string>("");
  // const [user, setuser] = useState<AuthUser>({} as AuthUser);
  // const [user, setuser] = useState<AuthUser | null>(null);
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log("event hass", e.target.value, e.target.name);
    setPassword(e.target.value);
  };

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e: any) => {
    console.log("eeeeeeee", typeof e);
    e.preventDefault();
    console.log("email, password", email, password);
    // interface resultTYPE {
    //   data: {
    //     token: string;
    //   };
    // }
    axios
      .post("https://reqres.in/api/login", { email, password })
      .then((res: { data: { token: string } }) => {
        console.log("result--->", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.token));
        navigate("/greeting");
      })
      .catch((err: any) => {
        console.log(err, typeof err);
      });
  };
  return (
    <Box
      height={200}
      width={200}
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: "2px solid grey" }}
    >
      <form>
        <Grid container spacing={2}>
          <Grid item>
            <TextField
              value={email}
              id="outlined-basic"
              label="username"
              variant="outlined"
              name="userName"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              value={password}
              id="outlined-basic"
              label="password"
              variant="outlined"
              name="password"
              type="password"
              onChange={handleChange}
            />
          </Grid>
          <Grid item>
            <Button
              type="submit"
              color="secondary"
              onClick={handleClick}
              variant="contained"
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};
export default Login;
