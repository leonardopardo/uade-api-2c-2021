import { ControlModel, IControl } from "./../models/Control"

export class ControlService {

    constructor(){
        // Code
    }

    // TODO: Add offset and limit with pagination?
    async findAllFromParentIdAndChildDNI(dni: String, parent_id: String){
        try {
            return await ControlModel.find({"child_dni": dni, "parent_id": parent_id})
        } catch (e) {
            throw new Error(e)
        }
    }

    async findAll(offset: Number, limit: Number){
        try {
            return await ControlModel.find();
        } catch (e) {
            throw new Error (e);
        }
    }

    async create(control: IControl){
        try {

            const newControl = new ControlModel({
                child_dni: control.child_dni,
                parent_id: control.parent_id,
                date: control.date,
                weight: control.weight,
                height: control.height,
                head_diam: control.head_diam,
                observations: control.observations,
                meds: control.meds,
                studies: control.studies,
                results: control.results
            })
            
            await newControl.save();
            
        } catch(e) {
            throw new Error(e)
        }
    }

    async deleteBasedOnDate(parent_id: String, child_dni: String, date: Date){
        try {
            return await ControlModel.deleteOne({"parent_id": parent_id, "child_dni": child_dni, "date": date});
        } catch (e) {
            throw new Error (e);
        }
    }

    // Delete everything related to a child control, probably used on child deletion
    async deleteAllFromParentIdAndChildDNI(parent_id: String, child_dni: String){
        try {
            return await ControlModel.deleteMany({"parent_id": parent_id, "child_dni": child_dni});
        } catch (e) {
            throw new Error (e);
        }
    }

}