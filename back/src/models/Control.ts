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

export interface IControl {
    child_dni: String,
    parent_dni: String,
    date: Date,
    weight: Number,
    height: Number,
    head_diam: Number,
    observations: String,
    meds: {
        med_name: String,
        dosage: Number,
        take_until: Date
    },
    studies: String,
    results: String
}

export const ControlModel = model('Control', ControlSchema);
