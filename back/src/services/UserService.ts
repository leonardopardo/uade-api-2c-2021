import * as bcrypt from 'bcryptjs';
import { UserModel, IUser } from './../models/User';

export class UserService {

    constructor() {
        // code here ...
    }

    async findByEmail(email: String){
        try {
            return await UserModel.findOne({"email": email});
        } catch(e) {
            throw new Error(e);
        }
    }

    /**
     * Alias del método findByEmail
     * @param username 
     * @returns 
     */
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
                firstname: user.firstName,
                lastname: user.lastName,
                email: user.username,
                password: bcrypt.hashSync(user.password, 8)
            })
            
            await newUser.save();
            
        } catch(e) {
            throw new Error(e)
        }
    }

    async update(user: IUser){
        try {
            
            const u = await this.findByEmail(user.username);
            u.firstname = user.firstName;
            u.lastname = user.lastName;
            u.identity = user.identity;
            u.age = user.age;
            u.email = user.username;

            await u.update();

        } catch(e) {
            throw new Error(e)
        }
    }

    async updatePassword(user: IUser){
        try {
            
            const u = await this.findByEmail(user.username);
            u.password = user.password;
            
            await u.update();

        } catch (e) {
            throw new Error(e)
        }
    }
}