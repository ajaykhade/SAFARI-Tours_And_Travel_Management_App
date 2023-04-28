import axios from "axios";


const URL = "http://localhost:9090/safari/user/";

class UserProfileService {

    getPersonalDetailsByUser = (userId) => {
        return axios.get(URL + 'get/' + userId);
    };

    editProfile = (profile, userId) => {
        return axios.put(URL + 'update/' + userId, profile);
    }

}

export default new UserProfileService();