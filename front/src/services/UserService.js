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
            fullName: `${profile['firstname']} ${profile['lastname']}`,
            email:profile['email'].toLowerCase(),
            phone: profile['phone'],
            identity: profile['identity'],
            age: birthdate,  
            img: profile['avatar']
        }
    }

    async updateUser(body){
        let config = {
            headers: {
                'x-access-token': localStorage.getItem('token'),
            }
          }

        let { data } = await axios.post(`${this.endpoint}/update-profile`, body, config)

        let user = await this.findUser()

        return { user, data }
    }

    async updateAvatar(body) {
        let config = {
            headers: {
                'x-access-token': localStorage.getItem('token'),
            }
          }

        let { data } = await axios.post(`${this.endpoint}/update-avatar`, body, config)

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

    async uploadImage(selectedFile, username){

        try{

            let body = new FormData()
            body.set('key', '9350b1ffb18c46f36b7ce04aa8930884')
            body.append('image', selectedFile)
    
            const request = { 
                method: 'post', 
                url: 'https://api.imgbb.com/1/upload', 
                data: body
            }
    
            const { data } = await axios(request)

            let x = {
                email: username,
                avatar: data.data.image.url
            }
            
            const res = await this.updateAvatar(x)

            let user = await this.findUser()

            return {
                user,
                res
            }

        }catch(err){
            return err.response.data.error
        }
    }

    isValid(){
        return localStorage.getItem('token') !== null;
    }
}

export default new UserService();