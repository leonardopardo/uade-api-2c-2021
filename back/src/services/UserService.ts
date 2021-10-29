import * as bcrypt from 'bcryptjs';
import { UserModel, IUser } from './../models/User';

export class UserService {

    async findByEmail(email: String){
        try {
            return await UserModel.findOne({"email": email});
        } catch(e) {
            throw new Error(e);
        }
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
                email: user.email,
                password: bcrypt.hashSync(user.password, 8)
            })
            
            await newUser.save();
            
        } catch(e) {
            throw new Error(e)
        }
    }

    async update(user: IUser){
        try {
            
            const u = await this.findByEmail(user.email);
            u.firstname = user.firstname;
            u.lastname = user.lastname;
            u.identity = user.identity;
            u.age = user.age;
            u.email = user.email;

            await u.update();

        } catch(e) {
            throw new Error(e)
        }
    }

    async updatePassword(user: IUser){
        try {
            
            const u = await this.findByEmail(user.email);
            u.password = user.password;
            
            await u.update();

        } catch (e) {
            throw new Error(e)
        }
    }
}