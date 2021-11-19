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
}

export default new ControlService();