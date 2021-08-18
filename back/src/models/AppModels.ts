import { Schema, model } from 'mongoose'

// Schema definitions

const ParentSchema = new Schema({
    dni: {type: String, required: true},
    name: {type: String, required: true},
    surname: {type: String, required: true},
    email: {type: String, required: true},
    phone: String
});

const ChildSchema = new Schema({
    dni: {type: String, required: true},
    parent_dni: {type: String, required: true},
    name: {type: String, required: true},
    surname: {type: String, required: true},
    birthdate: {type: Date, required: true},
    allergies: String,
    diseases: String
});

const ControlSchema = new Schema({
    id: {type: String, required: true},
    child_dni: {type: String, required: true},
    date: {type: Date, required: true},
    weight: {type: Number, required: true},
    height: {type: Number, required: true},
    head_diam: Number,
    observations: String,
    meds: {
        med_name: String,
        dosage: Number,
        take_until: Date
    },
    studies: String,
    results: String
})

const VaccineSchema = new Schema({
    id: {type: String, required: true},
    child_dni: {type: String, required: true},
    date: {type: Date, required: true},
    name: {type: Date, required: true},
    location: {type: Date, required: true},
    description: String
})

// Model Definitions

export const ParentModel = model('Parent', ParentSchema);
export const ChildModel = model('Child', ChildSchema);
export const ControlModel = model('Control', ControlSchema);
export const VaccineModel = model('Vaccine', VaccineSchema);