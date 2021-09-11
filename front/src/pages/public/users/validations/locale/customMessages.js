const customMessages = {
    username: {
        // eslint-disable-next-line
        required: 'El campo Usuario es requerido.'
    },
    password: {
        required: 'La Contraseña es requerida.',// eslint-disable-next-line
        min: "La Contraseña debe tener por lo menos ${min} caracteres.", // eslint-disable-next-line
        max: "La Contraseña no puede tener más de ${max} caracteres.",
        oneOf: 'Las Contraseñas deben ser Iguales.'
    },
    email: {
        required: 'El campo Email es requerido.',
        email: 'El campo debe ser un email válido'
    }
}

export default customMessages