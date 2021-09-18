import * as yup from "yup"
import customMessages from './../../../../locale/es/customMessages';

export const RestorePasswordSchema = yup.object().shape({
    email: yup
        .string()
        .email(customMessages.email.email)
        .required(customMessages.email.required)
})