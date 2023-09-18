import axios from "axios";

export const axiosProducts = axios.create (
    {
        baseURL: 'http://localhost:5000/products'
    }
);