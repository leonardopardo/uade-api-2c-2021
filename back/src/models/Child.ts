import { Schema, model } from 'mongoose'

const ChildSchema = new Schema({
    dni: {type: String, required: true},
    parent_dni: {type: String, required: true},
    name: {type: String, required: true},
    surname: {type: String, required: true},
    birthdate: {type: Date, required: true},
    allergies: [String],
    diseases: [String]
});

export const ChildModel = model('Child', ChildSchema);