import { VaccineModel, IVaccine, VaccineApplicationModel, IVaccineApplication } from "./../models/Vaccine";

export class VaccineService {

    constructor(){
        //code here...
    }
    async getApplications(child_dni: String, parent_id: String){
        const applications = await VaccineApplicationModel.find({"child_dni": child_dni, "parent_id": parent_id})
        return applications
    }
    // This will create a sort of table for the child, which will track if the child has received
    // the doses or not, the date and the place of application
    async createChildVaccineTracking(child_dni: String, parent_id: String){
        const vaccines = await VaccineModel.find();
        vaccines.forEach((element) => {
            const newVaccineApplication = new VaccineApplicationModel({
                parent_id: parent_id,
                child_dni: child_dni,
                vaccine_id: element.vaccine_id,
                date: null,
                location: null,
                applied: false
            })
            newVaccineApplication.save();
        })
    }

    async applyVaccine(vaccineApplication: IVaccineApplication){
        try{
            const v = await VaccineApplicationModel.findOne({
                "parent_id": vaccineApplication.parent_id,
                "child_dni": vaccineApplication.child_dni,
                "vaccine_id": vaccineApplication.vaccine_id
            })
            if(v == null){
                throw new Error("There seems to be some inconsistencies in vaccine tracking")
            }
            await v.updateOne(vaccineApplication);
        }
        catch (e){
            throw new Error(e);
        }
    }

    // This takes the vaccine data structure and populates the database
    async initializeVaccineDB(){
        vaccine_data.forEach((element) => {
            const newVaccine: IVaccine = {
                vaccine_id: element.vaccine_id,
                name: element.name,
                description: element.description,
                dose: element.dose
            };
            this.create(newVaccine);
        })
    }

    // Vaccines are kind of hardcoded in our system, as the calendar should never be updated by users
    async create(vaccine: IVaccine){
        try{
            const vaccineExists = await this.findVaccineById(vaccine.vaccine_id)
            if(vaccineExists == null){
                const newVaccine = new VaccineModel({
                    vaccine_id: vaccine.vaccine_id,
                    name: vaccine.name,
                    description: vaccine.description,
                    dose: vaccine.dose,
                })
                await newVaccine.save();
            }
        }
        catch (e){
            console.log(e.message);
        }
    }

    async findVaccineById(id: Number){
        try {
            return await VaccineModel.findOne({"vaccine_id": id});
        } catch (e) {
            throw new Error (e);
        }
    }
}

// Pongo esto aca por que no me anduvo bien el import de json

const vaccine_data = [
    {
        "vaccine_id": 1,
        "dose": "Unica dosis",
        "name": "BCG", 
        "description": "La vacuna BCG se aplica para proteger de las formas graves de tuberculosis en los ni??os, por ejemplo: meningitis u osteomielitis."
    },
    {
        "vaccine_id": 2,
        "dose": "1?? Dosis",
        "name": "HEPATITIS B", 
        "description": "La vacuna previene la enfermedad de la hepatitis B y las graves consecuencias que esta enfermedad genera como el c??ncer de h??gado."
    },
    {
        "vaccine_id": 3,
        "dose": "1?? Dosis",
        "name": "PENTAVALENTE", 
        "description": "Protege contra Difteria, T??tanos, Tos convulsa, Haemophilus influenzae tipo b y Hepatitis B"
    },
    {
        "vaccine_id": 4,
        "dose": "1?? Dosis",
        "name": "ROTAVIRUS", 
        "description": "La vacuna protege contra la diarrea por rotavirus y sus complicaciones, previendo las formas graves de la enfermedad y sus complicaciones."
    },
    {
        "vaccine_id": 5,
        "dose": "1?? Dosis",
        "name": "SALK", 
        "description": "La poliomelitis no tiene tratamiento pero se puede prevenir a trav??s de la vacunaci??n. Existen vacunas seguras y eficaces contra la polio. Argentina ha avanzado en el reemplazo de la vacuna OPV o Sab??n bivalente por la vacuna IPV o Salk ya que es un paso necesario en el camino hacia la erradicaci??n de la polio."
    },
    {
        "vaccine_id": 6,
        "dose": "1?? Dosis",
        "name": "NEUMOCOCO CONJUGADA", 
        "description": "La vacuna protege de infecciones graves causadas por la bacteria neumococo (como neumon??a y meningitis) y de sus potenciales complicaciones."
    },
    {
        "vaccine_id": 7,
        "dose": "1?? Dosis",
        "name": "MENINGOCOCO", 
        "description": "La vacuna antimeningoc??cica conjugada tetravalente (ACYW) protege contra la enfermedad meningoc??cica invasiva y sus complicaciones. Las formas m??s frecuentes de presentaci??n de esta enfermedad: meningitis y sepsis (infecci??n generalizada)."
    },
    {
        "vaccine_id": 8,
        "dose": "2?? Dosis",
        "name": "PENTAVALENTE", 
        "description": "Protege contra Difteria, T??tanos, Tos convulsa, Haemophilus influenzae tipo b y Hepatitis B"
    },
    {
        "vaccine_id": 9,
        "dose": "2?? Dosis",
        "name": "ROTAVIRUS", 
        "description": "La vacuna protege contra la diarrea por rotavirus y sus complicaciones, previendo las formas graves de la enfermedad y sus complicaciones."
    },
    {
        "vaccine_id": 10,
        "dose": "2?? Dosis",
        "name": "SALK", 
        "description": "La poliomelitis no tiene tratamiento pero se puede prevenir a trav??s de la vacunaci??n. Existen vacunas seguras y eficaces contra la polio. Argentina ha avanzado en el reemplazo de la vacuna OPV o Sab??n bivalente por la vacuna IPV o Salk ya que es un paso necesario en el camino hacia la erradicaci??n de la polio."
    },
    {
        "vaccine_id": 11,
        "dose": "2?? Dosis",
        "name": "NEUMOCOCO CONJUGADA", 
        "description": "La vacuna protege de infecciones graves causadas por la bacteria neumococo (como neumon??a y meningitis) y de sus potenciales complicaciones."
    },
    {
        "vaccine_id": 12,
        "dose": "2?? Dosis",
        "name": "MENINGOCOCO", 
        "description": "La vacuna antimeningoc??cica conjugada tetravalente (ACYW) protege contra la enfermedad meningoc??cica invasiva y sus complicaciones. Las formas m??s frecuentes de presentaci??n de esta enfermedad: meningitis y sepsis (infecci??n generalizada)."
    },
    {
        "vaccine_id": 13,
        "dose": "3?? Dosis",
        "name": "PENTAVALENTE", 
        "description": "Protege contra Difteria, T??tanos, Tos convulsa, Haemophilus influenzae tipo b y Hepatitis B"
    },
    {
        "vaccine_id": 14,
        "dose": "3?? Dosis",
        "name": "SALK", 
        "description": "La poliomelitis no tiene tratamiento pero se puede prevenir a trav??s de la vacunaci??n. Existen vacunas seguras y eficaces contra la polio. Argentina ha avanzado en el reemplazo de la vacuna OPV o Sab??n bivalente por la vacuna IPV o Salk ya que es un paso necesario en el camino hacia la erradicaci??n de la polio."
    },
    {
        "vaccine_id": 15,
        "dose": "Dosis Anual",
        "name": "GRIPE", 
        "description": "La vacuna reduce las complicaciones, hospitalizaciones, muertes y secuelas ocasionadas por el virus influenza."
    },
    {
        "vaccine_id": 16,
        "dose": "Refuerzo",
        "name": "NEUMOCOCO CONJUGADA", 
        "description": "La vacuna protege de infecciones graves causadas por la bacteria neumococo (como neumon??a y meningitis) y de sus potenciales complicaciones."
    },
    {
        "vaccine_id": 17,
        "dose": "Dosis Anual",
        "name": "GRIPE", 
        "description": "La vacuna reduce las complicaciones, hospitalizaciones, muertes y secuelas ocasionadas por el virus influenza."
    },
    {
        "vaccine_id": 18,
        "dose": "1?? Dosis",
        "name": "TRIPLE VIRAL", 
        "description": "Protege contra el sarampion, rub??ola y paperas"
    },
    {
        "vaccine_id": 19,
        "dose": "Unica Dosis",
        "name": "HEPATITIS A", 
        "description": "La vacuna protege contra la enfermedad producida por el virus de la hepatitis A."
    },
    {
        "vaccine_id": 20,
        "dose": "Dosis Anual",
        "name": "GRIPE", 
        "description": "La vacuna reduce las complicaciones, hospitalizaciones, muertes y secuelas ocasionadas por el virus influenza."
    },
    {
        "vaccine_id": 21,
        "dose": "Refuerzo",
        "name": "MENINGOCOCO", 
        "description": "La vacuna antimeningoc??cica conjugada tetravalente (ACYW) protege contra la enfermedad meningoc??cica invasiva y sus complicaciones. Las formas m??s frecuentes de presentaci??n de esta enfermedad: meningitis y sepsis (infecci??n generalizada)."
    },
    {
        "vaccine_id": 22,
        "dose": "Unica Dosis",
        "name": "VARICELA", 
        "description": "Esta vacuna protege contra la varicela, especialmente sus formas graves de presentaci??n y sus complicaciones."
    },
    {
        "vaccine_id": 23,
        "dose": "Refuerzo",
        "name": "CU??DRUPLE O PENTAVALENTE", 
        "description": "Protege contra Difteria, T??tanos, Tos convulsa, Haemophilus influenzae tipo b y Hepatitis B"
    },
    {
        "vaccine_id": 24,
        "dose": "Dosis Anual",
        "name": "GRIPE", 
        "description": "La vacuna reduce las complicaciones, hospitalizaciones, muertes y secuelas ocasionadas por el virus influenza."
    },
    {
        "vaccine_id": 25,
        "dose": "Dosis Anual",
        "name": "GRIPE", 
        "description": "La vacuna reduce las complicaciones, hospitalizaciones, muertes y secuelas ocasionadas por el virus influenza."
    },
    {
        "vaccine_id": 26,
        "dose": "Refuerzo",
        "name": "SALK", 
        "description": "La poliomelitis no tiene tratamiento pero se puede prevenir a trav??s de la vacunaci??n. Existen vacunas seguras y eficaces contra la polio. Argentina ha avanzado en el reemplazo de la vacuna OPV o Sab??n bivalente por la vacuna IPV o Salk ya que es un paso necesario en el camino hacia la erradicaci??n de la polio."
    },
    {
        "vaccine_id": 27,
        "dose": "2?? Dosis",
        "name": "TRIPLE VIRAL", 
        "description": "Protege contra el sarampion, rub??ola y paperas"
    },
    {
        "vaccine_id": 28,
        "dose": "Refuerzo",
        "name": "TRIPLE BACTERIANA CELULAR", 
        "description": "La vacuna triple bacteriana celular protege contra la difteria, el t??tanos y la tos convulsa."
    },
    {
        "vaccine_id": 29,
        "dose": "Iniciar o Completar esquemas",
        "name": "HEPATITIS B", 
        "description": "La vacuna previene la enfermedad de la hepatitis B y las graves consecuencias que esta enfermedad genera como el c??ncer de h??gado."
    },
    {
        "vaccine_id": 30,
        "dose": "Refuerzo",
        "name": "MENINGOCOCO", 
        "description": "La vacuna antimeningoc??cica conjugada tetravalente (ACYW) protege contra la enfermedad meningoc??cica invasiva y sus complicaciones. Las formas m??s frecuentes de presentaci??n de esta enfermedad: meningitis y sepsis (infecci??n generalizada)."
    },
    {
        "vaccine_id": 31,
        "dose": "Iniciar o Completar esquemas",
        "name": "TRIPLE VIRAL", 
        "description": "Protege contra el sarampion, rub??ola y paperas"
    },
    {
        "vaccine_id": 32,
        "dose": "Refuerzo",
        "name": "TRIPLE BACTERIANA CELULAR", 
        "description": "La vacuna triple bacteriana celular protege contra la difteria, el t??tanos y la tos convulsa."
    },
    {
        "vaccine_id": 33,
        "dose": "Iniciar o Completar esquemas",
        "name": "HPV", 
        "description": "El objetivo de la vacunaci??n contra el VPH incluye disminuir la incidencia y mortalidad por c??ncer de cuello uterino y la carga de enfermedad asociada al VPH, sus complicaciones y mortalidad."
    }
]