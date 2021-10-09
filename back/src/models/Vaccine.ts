import { Schema, model } from 'mongoose'

const VaccineSchema = new Schema({
    vaccine_id: {type: String, required: true},
    child_dni: {type: String, required: true},
    date: {type: Date, required: true},
    location: {type: String, required: true},
    name: {type: String, required: true},
    description: String,
    applied: {type: Boolean, required: true}
})

export const VaccineModel = model('Vaccine', VaccineSchema);