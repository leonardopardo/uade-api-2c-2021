import * as yup from "yup"
import customMessages from "../../../../locale/es/customMessages"

export const ApplyVaccineSchema = yup.object().shape({
    place: yup
        .string()
        .required(),
    date: yup
        .string()
        .required(customMessages.age.required)
})