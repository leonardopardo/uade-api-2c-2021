import { Schema, model } from 'mongoose'

const ChildSchema = new Schema({
    dni: {type: String, required: true},
    parent_id: {type: String, required: true},
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    birthdate: {type: Date, required: true},
    bloodtype: String,
    allergies: [{
            value: String,
            label: String
        }],
    diseases: [{
        value: String,
        label: String
    }],
    extra_info: String,
    avatar: String
});

export interface IChild {
    dni: String,
    parent_id: String,
    firstname: String,
    lastname: String,
    birthdate?: Date,
    bloodtype?: String
    allergies?: [{
        value: String,
        label: String
    }],
    diseases?: [{
        value: String,
        label: String
    }],
    extra_info?: String,
    avatar?: String
}

export const ChildModel = model('Child', ChildSchema);