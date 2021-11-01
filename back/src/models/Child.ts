import { Schema, model } from 'mongoose'

const ChildSchema = new Schema({
    dni: {type: String, required: true},
    parent_dni: {type: String, required: true},
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    birthdate: {type: Date, required: true},
    allergies: [String],
    diseases: [String]
});

export interface IChild {
    dni: String,
    parent_dni: String,
    firstname: String,
    lastname: String,
    birthdate?: Date,
    allergies?: [String],
    diseases?: [String]
}

export const ChildModel = model('Child', ChildSchema);