import axios from 'axios'

class VaccineService{
    constructor(endpoint){
        this.endpoint = `${process.env.REACT_APP_SERVER_PATH}/vaccines`
    }
    async getVaccines(child){
        let info = {}
        info['child'] = child

        let config = {
            headers: {
                'x-access-token': localStorage.getItem('token'),
            }
          }
        const {data} = await axios.post(`${this.endpoint}/get`, child, config)
        info['vaccines'] = data
        return info
    }
    async apply(body){
        let config = {
            headers: {
                'x-access-token': localStorage.getItem('token'),
            }
          }
        
        const {data} = await axios.post(`${this.endpoint}/apply`, body, config)
        return data
    }
}

export default new VaccineService();