import { api } from "../../api/api";

export const fetchPosts = async () => {
    try {
        const response = await api.get('25c6bdb6-6377-41f9-907d-c6549ce9e4f7');
        return response.data;
    } catch(err) {
        console.error('DEBUG - ', err);
        return { error: true, msg: err.response.data };
    }
}