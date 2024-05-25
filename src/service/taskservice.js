import axios from axios;

const API_URL = 'http://localhost:5173'; 

export const getTasks = async () => {
    return await axios.get(`${API_URL}/tasks`);
};

export const getTaskById = async (id) => {
    return await axios.get(`${API_URL}/tasks/${id}`);
};

export const createTask = async (task) => {
    return await axios.post(`${API_URL}/tasks`, task);
};

export const updateTask = async (id, task) => {
    return await axios.put(`${API_URL}/tasks/${id}`, task);
};

export const deleteTask = async (id) => {
    return await axios.delete(`${API_URL}/tasks/${id}`);
};
