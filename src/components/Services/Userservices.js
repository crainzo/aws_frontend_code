import axios from 'axios'
import env from 'react-dotenv';
const baseURL = env.REACT_APP_BACKEND_URL;

const header = {
    "Content-Type" : 'application/json'
}

class Userservices {

    get_request(path){
        return axios.get(`${baseURL}${path}`,header)
    }

    post_request(path,body){
        return axios.get(`${baseURL}${path}`,body,header);
    }

    delete_request(path,data){
        return axios.delete(`${baseURL}${path}/${data}`,header);
    }

  
}

export default new Userservices;