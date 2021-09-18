import * as yup from "yup"

export const ProfileSchema = yup.object().shape({
    firstName: yup
        .string()
        .required("El campo es requerido"),
    lastName: yup
        .string()
        .required("El campo es requerido"),
    email: yup
        .string()
        .email()
        .required(),
    password: yup
        .string()
        .min(4)
        .max(10)
        .required(),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null])
})