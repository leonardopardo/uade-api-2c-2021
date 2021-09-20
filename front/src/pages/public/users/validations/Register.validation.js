import * as yup from "yup"
import customMessages from './../../../../locale/es/customMessages';

export const RegisterSchema = yup.object().shape({
    firstName: yup
        .string()
        .required(customMessages.firstName.required),
    lastName: yup
        .string()
        .required(customMessages.lastName.required),
    username: yup
        .string()
        .email(customMessages.email.email)
        .required(customMessages.username.required),
    password: yup
        .string()
        .min(4, customMessages.password.min)
        .max(10, customMessages.password.max)
        .required(customMessages.password.required),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], customMessages.password.oneOf)
})