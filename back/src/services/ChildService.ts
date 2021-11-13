import { ChildModel, IChild } from "./../models/Child";
import { VaccineService } from "./VaccineService";

export class ChildService {

    public vaccineService: VaccineService;
    
    constructor(){
        this.vaccineService = new VaccineService();
    }

    async findOneByDniAndParentDni(dni: String, parent_dni: String){
        try {
            return await ChildModel.findOne({"dni": dni, "parent_dni": parent_dni})
        } catch (e) {
            throw new Error(e)
        }
    }

    async findAllByParentDni(dni: String){
        try {
            return await ChildModel.find({"parent_dni": dni})
        } catch (e) {
            throw new Error(e)
        }
    }

    async findAll(offset: Number, limit: Number){
        try {
            return await ChildModel.find();
        } catch (e) {
            throw new Error (e);
        }
    }

    async create(child: IChild){
        try {

            const newChild = new ChildModel({
                dni: child.dni,
                parent_dni: child.parent_dni,
                firstname: child.firstname,
                lastname: child.lastname,
                birthdate: child.birthdate,
                allergies: child.allergies,
                diseases: child.diseases
            })
            
            await newChild.save();
            await this.vaccineService.createChildVaccineTracking(child.dni, child.parent_dni);
            
        } catch(e) {
            throw new Error(e)
        }
    }

    async update(child: IChild){
        try {
            
            const c = await this.findOneByDniAndParentDni(child.dni, child.parent_dni);
            c.firstname = child.firstname;
            c.lastname = child.lastname;
            c.birthdate = child.birthdate;
            c.allergies = child.allergies;
            c.diseases = child.diseases;

            await c.update();

        } catch(e) {
            throw new Error(e)
        }
    }

}