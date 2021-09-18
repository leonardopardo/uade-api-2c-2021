import * as yup from "yup"
import customMessages from './../../../../locale/es/customMessages';

export const ConfirmPasswordSchema = yup.object().shape({
    password: yup
        .string()
        .min(4, customMessages.password.min)
        .max(10, customMessages.password.max)
        .required(customMessages.password.required),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], customMessages.password.oneOf)
})