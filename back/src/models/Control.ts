import { Schema, model } from 'mongoose'

const ControlSchema = new Schema({
    child_dni: {type: String, required: true},
    parent_dni: {type: String, required: true},
    date: {type: Date, required: true},
    weight: {type: Number, required: true},
    height: {type: Number, required: true},
    head_diam: {type: Number, required: true},
    observations: String,
    meds: {
        med_name: String,
        dosage: Number,
        take_until: Date
    },
    studies: String,
    results: String
})

export const ControlModel = model('Control', ControlSchema);
