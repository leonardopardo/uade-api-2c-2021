import { Schema, model, ObjectId } from 'mongoose'

const UserSchema = new Schema({
    firstname:{type: String, required: true},
    lastname:{type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    age: {type: Date, required: false},
    identity: {type: String, required: false},
    avatar: {type: String, required: false},
    restorePasswordToken: {type: String, required: false}
})

export interface IUser {
    id?: ObjectId,
    username: string,
    firstName?: string,
    lastName?: string,
    password?: string,
    age?: Date,
    identity?: string,
    avatar?: string,
    restorePasswordToken?: string
}

export const UserModel = model('User', UserSchema);