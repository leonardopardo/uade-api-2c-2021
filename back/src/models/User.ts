import { Schema, model, ObjectId } from 'mongoose'

const UserSchema = new Schema({
    firstname:{type: String, required: false},
    lastname:{type: String, required: false},
    email: {type: String, required: true},
    password: {type: String, required: true},
    age: {type: Date, required: false},
    identity: {type: String, required: false},
    phone: {type: String, required: false},
    avatar: {type: String, required: false},
    restorePasswordToken: {type: String, required: false}
})

export interface IUser {
    id?: ObjectId,
    username: string,
    firstname?: string,
    lastname?: string,
    password?: string,
    age?: Date,
    identity?: string,
    phone?: string
    avatar?: string,
    restorePasswordToken?: string
}

export const UserModel = model('User', UserSchema);