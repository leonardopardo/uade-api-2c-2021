import * as yup from "yup"
import customMessages from "../../../../locale/es/customMessages"

export const NewControlSchema = yup.object().shape({
    identity: yup
        .string(),
    date: yup
        .string()
        .required(customMessages.age.required),
    weight: yup
        .string()
        .required(customMessages.weight.required),
    height: yup
        .string()
        .required(customMessages.height.required),
    diameter: yup
        .string()
        .required(customMessages.diameter.required),
    observations: yup
        .string(),
    med_name: yup
        .string(),
    dosage: yup
        .string(),
    take_until: yup
        .string(),
    studies: yup
        .string(),
    results: yup
        .string()
})