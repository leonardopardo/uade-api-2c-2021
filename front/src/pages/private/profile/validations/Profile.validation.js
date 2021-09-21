import * as yup from "yup"
import customMessages from "../../../../locale/es/customMessages"

export const ProfileSchema = yup.object().shape({
    firstName: yup
        .string()
        .required(customMessages.firstName.required),
    lastName: yup
        .string()
        .required(customMessages.lastName.required),
    email: yup
        .string()
        .email()
        .required(customMessages.email.required),
    phone: yup
        .string()
        .required(customMessages.phone.required),
    identity: yup
        .string()
        .required(customMessages.identity.required),
    age: yup
        .string()
        .required(customMessages.age.required),
    password: yup
        .string(),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], customMessages.password.oneOf)
})