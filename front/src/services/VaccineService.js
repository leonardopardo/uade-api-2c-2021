import axios from 'axios'

class VaccineService{
    constructor(endpoint){
        this.endpoint = `${process.env.REACT_APP_SERVER_PATH}/vaccines`
    }
    async getVaccines(child){
        let data = {}
        data['child'] = child

        let config = {
            headers: {
                'x-access-token': localStorage.getItem('token'),
            }
          }
        const {res} = await axios.post(`${this.endpoint}/get`, child, config)
        console.log(res)

        return data
    }
    async apply(body){
        let config = {
            headers: {
                'x-access-token': localStorage.getItem('token'),
            }
          }
        
        const {data} = await axios.post(`${this.endpoint}/apply`, body, config)
        console.log(data)
        return data
    }
}

export default new VaccineService();