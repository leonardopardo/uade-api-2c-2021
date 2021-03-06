import * as bcrypt from 'bcryptjs';
import { UserModel, IUser } from './../models/User';

export class UserService {

    constructor() {
        // code here ...
    }

    async findByEmail(email: String){
        try {
            
            const u = await UserModel.findOne({"email": email});
           
            if(u === null)
                return null;

            const user: IUser = {
                id: u._id,
                firstname: u.firstname,
                lastname: u.lastname,
                username: u.email,
                password: u.password,
                age: u.age,
                identity: u.identity,
                avatar: u.avatar,
                restorePasswordToken: u.restorePasswordToken
            }

            return user;

        } catch(e) {
            throw new Error(e);
        }
    }

    async findByIdentity(identity: String){
        try {
            
            const u = await UserModel.findOne({"identity": identity});
           
            if(u === null)
                return null;

            const user: IUser = {
                id: u._id,
                firstname: u.firstname,
                lastname: u.lastname,
                username: u.email,
                password: u.password,
                age: u.age,
                identity: u.identity,
                avatar: u.avatar,
                restorePasswordToken: u.restorePasswordToken
            }

            return user;

        } catch(e) {
            throw new Error(e);
        }
    }

    async findByUsername(username: String){
        return this.findByEmail(username)
    }

    async findById(id: Number){
        try {
            return await UserModel.findById(id);
        } catch (e) {
            throw new Error (e);
        }

    }

    async findAll(offset: Number, limit: Number){
        try {
            return await UserModel.find();
        } catch (e) {
            throw new Error (e);
        }
    }

    async create(user: IUser){
        try {

            const newUser = new UserModel({
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.username,
                password: await bcrypt.hashSync(user.password, 8),
                identity: user.identity,
                phone: user.phone,
                avatar: null,
                age: null
            })
            
            await newUser.save();
            
        } catch(e) {
            throw new Error(e)
        }
    }

    async update(user: IUser){
        try {
        
            const u = await UserModel.findOne({"email": user.username})

            // Todo esto se puede sacar por que usamos updateOne me parece
            u.firstname = user.firstname;
            u.lastname = user.lastname;
            u.identity = user.identity;
            u.age = user.age;
            u.email = user.username;
            u.avatar = user.avatar;
            u.restorePasswordToken = user.restorePasswordToken;

            await u.updateOne(user);

        } catch(e) {
            throw new Error(e)
        }
    }

    async updatePassword(user: IUser){
        try {
            
            const u = await UserModel.findOne({"email": user.username})
            u.password = user.password;

            await u.updateOne(user);

        } catch (e) {
            throw new Error(e)
        }
    }
}