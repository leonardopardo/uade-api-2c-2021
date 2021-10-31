import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
    firstname:{type: String, required: true},
    lastname:{type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
})

export interface IUser {
    firstName: String,
    lastName: String,
    username: String,
    password: String,
    age?: Date,
    identity?: String,
    avatar?: String
}

export const UserModel = model('User', UserSchema);