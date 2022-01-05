import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { IRegistrationViewModel } from "../../models/userInterfaces";
import { axiosAuth } from "../../api/services";

export function RegistrationForm() {
  const [userInfo, setUserInfo] = useState<IRegistrationViewModel>({
    email: "",
    name: "",
    surname: "",
    password: "",
    phoneNumber: "",
    placeStudy: "",
    placeWork: "",
  });

  const [password, setPassword] = useState<string>();

  const handleRegistration = () => {
    axiosAuth
      .register(userInfo)
      .then((response) => {
        if (response.status === 200) {
          console.log("registered");
        } else {
          console.log("not registered");
        }
      })
      .catch((error) => console.log(error));
  };

  const handlePasswordCheck = (passwordCheck: string) => {
      if (password === passwordCheck){
          setUserInfo((currentInfo) => ({
              ...currentInfo,
              password: passwordCheck
          }))
      } else {
          console.log("wrong password");
      }
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Grid item>
        <Paper style={{ padding: "25px", marginBottom: "20px" }} elevation={6}>
          <Grid container direction="column" spacing={3}>
            <Grid item>
              <Typography variant="h3">Registration Page</Typography>
            </Grid>
            <Grid item>
              <TextField
                required
                label="Email"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setUserInfo((currentInfo) => ({
                    ...currentInfo,
                    email: e.target.value,
                  }));
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                required
                label="Name"
                variant="outlined"
                onChange={(e) => {
                  setUserInfo((currentInfo) => ({
                    ...currentInfo,
                    name: e.target.value,
                  }));
                }}
              />
              <TextField
                required
                label="Surname"
                variant="outlined"
                onChange={(e) => {
                  setUserInfo((currentInfo) => ({
                    ...currentInfo,
                    surname: e.target.value,
                  }));
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                required
                label="Phone number"
                variant="outlined"
                onChange={(e) => {
                  setUserInfo((currentInfo) => ({
                    ...currentInfo,
                    phoneNumber: e.target.value,
                  }));
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                required
                type="password"
                label="Password"
                variant="outlined"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <TextField
                required
                type="password"
                label="Password check"
                variant="outlined"
                onChange={(e) => {
                  handlePasswordCheck(e.target.value);
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                label="Place of study"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setUserInfo((currentInfo) => ({
                    ...currentInfo,
                    placeStudy: e.target.value,
                  }));
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                label="Place of work"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setUserInfo((currentInfo) => ({
                    ...currentInfo,
                    placeWork: e.target.value,
                  }));
                }}
              />
            </Grid>
            <Grid item justifyContent="center">
              <Button
                style={{ width: "50%" }}
                variant="contained"
                color="secondary"
                onClick={handleRegistration}
              >
                Register
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
