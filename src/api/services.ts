import axios from "axios";
import { ILoginViewModel, IRegistrationViewModel } from "../models/userInterfaces";

const axiosInstance = axios.create({
    baseURL: 'https://localhost:44392/api'
});

const loginUrn = '/Auth/login';
const registerUrn = '/Auth/register';

export const axiosAuth = {
    login : (loginViewModel: ILoginViewModel) => {
        return axiosInstance.post(loginUrn, loginViewModel);
    },
    register : (registrationViewModel: IRegistrationViewModel) => {
        return axiosInstance.post(registerUrn, registrationViewModel);
    }
};