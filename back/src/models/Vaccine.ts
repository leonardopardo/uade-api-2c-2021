import { Schema, model } from 'mongoose'

const VaccineSchema = new Schema({
    vaccine_id: {type: Number, required: true},
    name: {type: String, required: true},
    description: String,
    dose: String
})

export interface IVaccine{
    vaccine_id: Number,
    name: String,
    description: String,
    dose: String
}

const VaccineApplicationSchema = new Schema({
    parent_dni: {type: String, required: true},
    child_dni: {type: String, required: true},
    vaccine_id: {type: Number, required: true},
    date: Date,
    location: String,
    applied: Boolean
})

export interface IVaccineApplication{
    parent_dni: String,
    child_dni: String,
    vaccine_id: Number,
    date: Date,
    location: String
}

export const VaccineApplicationModel = model('VaccineApplication', VaccineApplicationSchema);
export const VaccineModel = model('Vaccine', VaccineSchema);