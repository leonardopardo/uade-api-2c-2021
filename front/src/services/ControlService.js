import axios from 'axios'

class ControlService {
    constructor(endpoint){
        this.endpoint = `${process.env.REACT_APP_SERVER_PATH}/controls`
    }

    async create(body){
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

    // Same as get controls but more heavily parsed
    async getPercentiles(child){
        const body = {'identity': child['value']}
        
        let config = {
            headers: {
                'x-access-token': localStorage.getItem('token')
            }
          }

        let {data} = await axios.post(`${this.endpoint}/get_controls`, body, config)
        if (data['data'].length === 0)
          return {}
        
        let weight = []
        let height = []
        let diameter = []

        data['data'].forEach((control) => {
            weight.push(control['weight'])
            height.push(control['height'])
            diameter.push(control['head_diam'])
        })
        let percentiles = {
            'child': child,
            'weight': weight,
            'height': height,
            'diameter': diameter,
        }
        return percentiles
    }
}

export default new ControlService();