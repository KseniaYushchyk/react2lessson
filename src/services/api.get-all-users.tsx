import axios from "axios";
import {baseURL, urls} from "../constants/urls";
import {IUser} from "../models/IUser";

let axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
});

const userService =  {
    getAll: async ():Promise<IUser[]> => {
         let axiosResponse= await axiosInstance.get<IUser[]>(urls.usersUrls.all)
        return axiosResponse.data;
    }
}

export {userService, axiosInstance}
