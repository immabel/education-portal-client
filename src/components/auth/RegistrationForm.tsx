import { Button, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { IRegistrationViewModel } from '../../models/userInterfaces';
import { axiosAuth } from '../../api/services'

export function RegistrationForm () {
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
        axiosAuth.register(userInfo)
        .then(response => {
            if (response.status === 200) {
                console.log("registered");
            } else {
                console.log("not registered");
            }
        })
        .catch(error => console.log(error));
    }

    const handlePasswordCheck = (password: string) => {

    }

    return (
        <Paper>
            <Typography variant="h3">
                Registration Page
            </Typography>
            <form>
                <TextField
                required
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                onChange={(e) => {
                    setUserInfo(currentLogin => ({
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
                    setPassword(e.target.value)
                  }}
                />
                <TextField
                required
                id="password"
                name="password"
                label="Password"
                variant="outlined"
                onChange={(e) => {
                    handlePasswordCheck(e.target.value)
                  }}
                />
                <Button variant="contained" color="secondary" onClick={handleRegistration}>Register</Button>
            </form>
        </Paper>
    );
}
