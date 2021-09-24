import { Schema, model } from 'mongoose'

const VaccineSchema = new Schema({
    id: {type: String, required: true},
    child_dni: {type: String, required: true},
    date: {type: Date, required: true},
    name: {type: Date, required: true},
    location: {type: Date, required: true},
    description: String
})

export const VaccineModel = model('Vaccine', VaccineSchema);