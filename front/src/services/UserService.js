import axios from 'axios'

class UserService {
    
    constructor(endpoint){
        this.endpoint = `${process.env.REACT_APP_SERVER_PATH}/users`
    }
    
    async findUser(){
        let config = {
            headers: {
                'x-access-token': localStorage.getItem('token'),
            }
          }
        
        const {data} = await axios.get(`${this.endpoint}/get_user`, config)
        
        const profile = data.data

        // Age may be null the first time a user logs in, so we handle it separately
        let birthdate = ''
        if (profile['age'] !== null){
            birthdate = profile['age'].split('T')[0]
        }

        return {
            firstName: profile['firstname'],
            lastName: profile['lastname'],
            fullName(uppercase) {
                return !uppercase 
                    ? `${this.firstName} ${this.lastName}`
                    : `${this.firstName.toUpperCase()} ${this.lastName.toUpperCase()}`
            },
            email() {
                return profile['email'].toLowerCase()
            },
            phone: profile['phone'],
            identity: profile['identity'],
            age: birthdate,  
            img: ''
        }
    }

    async updateUser(body){
        let config = {
            headers: {
                'x-access-token': localStorage.getItem('token'),
                //'Content-Type': 'multipart/form-data'
            }
          }

        let {data} = await axios.post(`${this.endpoint}/update-profile`, body, config)

        return data
    }

    async createUser(body){
        return await axios.post(`${this.endpoint}/create`, body)
    }

    async login(body){
        let { data } = await axios.post(`${this.endpoint}/login`, body)
        this.registerUser(data.token);
        return data
    }

    async logout(){
        localStorage.removeItem('token');
    }

    async registerUser(token){
        localStorage.setItem("token", token)
    }

    async restorePassword(data){
        return await axios.post(`${this.endpoint}/restore-password`, data)
    }

    async confirmPassword(data){
        return await axios.post(`${this.endpoint}/confirm-password`, data)
    }

    async changePassword(body){
        let config = {
            headers: {
                'x-access-token': localStorage.getItem('token'),
            }
          }

        const { data } = await axios.post(`${this.endpoint}/change-password`, body, config)

        return data
    }
}

export default new UserService();