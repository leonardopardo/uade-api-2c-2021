import { Schema, model } from 'mongoose'

const ParentSchema = new Schema({
    dni: {type: String, required: true},
    name: {type: String, required: true},
    surname: {type: String, required: true},
    email: {type: String, required: true},
    phone: String
});

export const ParentModel = model('Parent', ParentSchema);