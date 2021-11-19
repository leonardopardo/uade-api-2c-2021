import * as yup from "yup"

export const AvatarSchema = yup.object().shape({
    avatar: yup.mixed().required("El Avatar campo es requerido"),
})