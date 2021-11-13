import axios from 'axios'

const UserService = {
    endpoint: `${process.env.REACT_APP_SERVER_PATH}/users`,    
    async findUser(){

    },
    async findAllUsers(){

    },
    async updateUser(){

    },
    async createUser(body){
        return await axios.post(`${this.endpoint}/create`, body)
    },
    async deleteUser(){

    },
    async login(body){
        let { data } = await axios.post(`${this.endpoint}/login`, body)
        this.registerUser(data.token);
        return data
    },
    async logout(){
        localStorage.removeItem('token');
    },
    async registerUser(token){
        localStorage.setItem("token", token)
    },
    async restorePassword(data){
        return await axios.post(`${this.endpoint}/restore-password`, data)
    },
    async confirmPassword(data){
        return await axios.post(`${this.endpoint}/confirm-password`, data)
    },  
    async changePassword(){

    },
}

export default UserService;