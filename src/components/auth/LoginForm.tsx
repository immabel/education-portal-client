import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { ILoginViewModel } from '../../models/userInterfaces';
import { axiosAuth } from '../../api/services';

export function LoginForm () {

    const paperStyle = {
        padding: 20,
        height: '40vh',
        width: 350,
        margin: "20px auto"
    }

    const [login, setLogin] = useState<ILoginViewModel>({
        email: "",
        password: ""
    });

    const handleLogin = () => {
        axiosAuth.login(login)
        .then(response => {
            if (response.status === 200) {
                console.log("logged in");
            } else {
                console.log("user not found");
            }
        })
        .catch(error => console.log(error));
    }

    return (
        <Paper style={paperStyle}>
            <Typography variant="h3">
                Log In Page
            </Typography>
            <Grid container direction="column" justifyContent="space-between">
                {/* <Grid direction="column">

                </Grid>
                <Grid direction="column">
                    
                </Grid>
                <Grid direction="column">
                    
                </Grid> */}
                <TextField
                required
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                onChange={(e) => {
                    setLogin(currentLogin => ({
                        ...currentLogin,
                        email: e.target.value
                    }))
                  }}
                />
                <TextField
                required
                id="password"
                name="password"
                label="Password"
                variant="outlined"
                onChange={(e) => {
                    setLogin(currentLogin => ({
                        ...currentLogin,
                        password: e.target.value
                    }))
                  }}
                />
                <Button variant="contained" color="secondary" onClick={handleLogin}>Log in</Button>
            </Grid>
        </Paper>
    );
}
