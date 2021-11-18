import { ChildModel, IChild } from "./../models/Child";
import { VaccineService } from "./VaccineService";

export class ChildService {

    public vaccineService: VaccineService;
    
    constructor(){
        this.vaccineService = new VaccineService();
    }

    async findOneByDniAndParentId(dni: String, parent_id: String){
        try {
            return await ChildModel.findOne({"dni": dni, "parent_id": parent_id})
        } catch (e) {
            throw new Error(e)
        }
    }

    async findAllByParentId(id: String){
        try {
            return await ChildModel.find({"parent_id": id})
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
                parent_id: child.parent_id,
                firstname: child.firstname,
                lastname: child.lastname,
                birthdate: child.birthdate,
                bloodtype: child.bloodtype,
                allergies: child.allergies,
                diseases: child.diseases,
                extra_info: child.extra_info,
                avatar: child.avatar
            })
            
            await newChild.save();
            await this.vaccineService.createChildVaccineTracking(child.dni, child.parent_id);
            
        } catch(e) {
            throw new Error(e)
        }
    }

    async update(child: IChild){
        try {
            
            const c = await this.findOneByDniAndParentId(child.dni, child.parent_id);
            await c.updateOne(child);

        } catch(e) {
            throw new Error(e)
        }
    }

}