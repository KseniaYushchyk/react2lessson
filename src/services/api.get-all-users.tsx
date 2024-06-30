import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-Type': 'application/json'
    }
});

const getAllUsers = async () => {

        const response = await axiosInstance.get('/users');
        return response.data;
}

const getCommentsOfUserById = async (id: number, limit: number) => {

        const response = await axiosInstance.get(`/posts/${id}/comments`);
        return response.data.slice(0, limit);

}

export { getAllUsers, getCommentsOfUserById };