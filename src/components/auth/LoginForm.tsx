import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { ILoginViewModel } from "../../models/userInterfaces";
import { axiosAuth } from "../../api/services";

export function LoginForm() {
  const [login, setLogin] = useState<ILoginViewModel>({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    axiosAuth
      .login(login)
      .then((response) => {
        if (response.status === 200) {
          console.log("logged in");
        } else {
          console.log("user not found");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" height="100vh">
      <Grid item>
        <Paper style={{padding: "25px", marginBottom: "20px"}} elevation={6}>
          <Grid container direction="column"spacing={3}>
            <Grid item>
              <Typography variant="h3">Log In Page</Typography>
            </Grid>
            <Grid item>
              <TextField
                required
                label="Email"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setLogin((currentLogin) => ({
                    ...currentLogin,
                    email: e.target.value,
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
                fullWidth
                onChange={(e) => {
                  setLogin((currentLogin) => ({
                    ...currentLogin,
                    password: e.target.value,
                  }));
                }}
              />
            </Grid>
            <Grid item>
              <Button
              style={{width: "100%"}}
                variant="contained"
                color="secondary"
                onClick={handleLogin}
              >
                Log in
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
