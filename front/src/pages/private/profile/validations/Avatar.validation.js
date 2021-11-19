import * as yup from "yup"

export const AvatarSchema = yup.object().shape({
    avatar: yup.string().required("El Avatar campo es requerido"),
})