import { ControlModel, IControl } from "./../models/Control"

export class ControlService {

    constructor(){
        // Code
    }

    // TODO: Add offset and limit with pagination?
    async findAllFromParentAndChildDNI(dni: String, parent_dni: String){
        try {
            return await ControlModel.find({"child_dni": dni, "parent_dni": parent_dni})
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
                parent_dni: control.parent_dni,
                date: control.date,
                weight: control.weight,
                height: control.height,
                head_diam: control.head_diam,
                observations: control.observations,
                meds: {
                    med_name: control.meds.med_name,
                    dosage: control.meds.dosage,
                    take_until: control.meds.take_until
                },
                studies: control.studies,
                results: control.results
            })
            
            await newControl.save();
            
        } catch(e) {
            throw new Error(e)
        }
    }

    async deleteBasedOnDate(parent_dni: String, child_dni: String, date: Date){
        try {
            return await ControlModel.deleteOne({"parent_dni": parent_dni, "child_dni": child_dni, "date": date});
        } catch (e) {
            throw new Error (e);
        }
    }

    // Delete everything related to a child control, probably used on child deletion
    async deleteAllFromParentAndChildDNI(parent_dni: String, child_dni: String){
        try {
            return await ControlModel.deleteMany({"parent_dni": parent_dni, "child_dni": child_dni});
        } catch (e) {
            throw new Error (e);
        }
    }

}