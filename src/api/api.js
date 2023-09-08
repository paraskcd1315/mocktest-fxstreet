import axios from "axios";

export const api = axios.create({
    baseURL: 'https://run.mocky.io/v3/',
    headers: {
        'Content-Type': 'application/json'
    }
})