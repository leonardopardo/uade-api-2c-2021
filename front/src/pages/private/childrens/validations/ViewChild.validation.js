import * as yup from "yup"
import customMessages from "../../../../locale/es/customMessages"

export const ViewChildSchema = yup.object().shape({
    firstName: yup
        .string()
        .required(customMessages.firstName.required),
    lastName: yup
        .string()
        .required(customMessages.lastName.required),
    age: yup
        .string()
        .required(customMessages.age.required),
    blod: yup
        .string()
        .required(),
    allergi: yup
        .string(),
    chronic: yup
        .string(),
    information: yup
        .string(),
    identity: yup
        .string(),
})