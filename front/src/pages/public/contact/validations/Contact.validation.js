import * as yup from "yup"
import customMessages from './../../../../locale/es/customMessages';

export const ContactSchema = yup.object().shape({
    name: yup
        .string()
        .required(customMessages.firstName.required),
    email: yup
        .string()
        .email(customMessages.email.email)
        .required(customMessages.email.required),
    message: yup
        .string()
        .min(5, customMessages.text.min)
        .max(191, customMessages.text.max)
        .required(customMessages.text.required)
})