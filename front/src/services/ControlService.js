import axios from 'axios'

class ControlService {
    constructor(endpoint){
        this.endpoint = `${process.env.REACT_APP_SERVER_PATH}/controls`
    }

    async create(body){
        console.log(body)
        let config = {
            headers: {
                'x-access-token': localStorage.getItem('token')
            }
          }

        let {data} = await axios.post(`${this.endpoint}/create`, body, config)
        return data
    }
    async getControls(child){
        const body = {'identity': child['value']}
        let config = {
            headers: {
                'x-access-token': localStorage.getItem('token')
            }
          }

        let {data} = await axios.post(`${this.endpoint}/get_controls`, body, config)     
        
        let controls = []
        data['data'].forEach((control) => {
            let meds = null
            if (control['meds']){
                meds = {
                    med_name: control['meds']['med_name'],
                    dosage: control['meds']['dosage'],
                    take_until: control['meds']['take_until'].split('T')[0],
                }
            }
            controls.push({
                date: control['date'].split('T')[0],
                weight: control['weight'],
                height: control['height'],
                head_diam: control['head_diam'],
                observations: control['observations'],
                meds: meds,
                studies: control['studies'],
                results: control['results']
            })
        })
        return controls
    }
}

export default new ControlService();