import * as yup from "yup"
import customMessages from './../../../../locale/es/customMessages';

export const LoginSchema = yup.object().shape({
    username: yup
        .string()
        .required(customMessages.username.required),
    password: yup
        .string()
        .min(4, customMessages.password.min)
        .max(10, customMessages.password.max)
        .required(customMessages.password.required)
})