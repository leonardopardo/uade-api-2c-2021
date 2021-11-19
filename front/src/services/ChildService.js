import axios from 'axios'

class ChildService {
    constructor(endpoint){
        this.endpoint = `${process.env.REACT_APP_SERVER_PATH}/childs`
    }

    async findChildren(){
        let config = {
            headers: {
                'x-access-token': localStorage.getItem('token'),
            }
          }
        
        let {data} = await axios.get(`${this.endpoint}/get_children`, config)
        let children_data = []
        data['data'].forEach((child)=>{

            let birthdate = child['birthdate'].split('T')[0]
            
            children_data.push({
                firstName: child['firstname'],
                lastName: child['lastname'],
                identity: child['dni'],
                age: birthdate,
                bloodType: child['bloodtype'],
                img: child['avatar'],
                fullName(){
                    return `${this.firstName} ${this.lastName}`.toUpperCase()
                },
                allergies: child['allergies'],
                diseases: child['diseases'],
                extra_info: child['extra_info'],
            })
        });
        return children_data
    }
    async addChildren(child){
        let config = {
            headers: {
                'x-access-token': localStorage.getItem('token'),
            }
          }
        let {data} = await axios.post(`${this.endpoint}/create`, child, config)
        return data
    }

    async updateChildren(body){
        let config = {
            headers: {
                'x-access-token': localStorage.getItem('token'),
            }
          }
        let {data} = await axios.post(`${this.endpoint}/update`, body, config)

        let childrens = await this.findChildren()
        let child = null
        childrens.forEach((entry) => {
            if(body['identity'] == entry['identity'])
                child = entry
        })
        
        return {child, data}
    }
}

export default new ChildService();