import { axiosProducts } from "./axiosInstance";

export const getAllProducts = async() => {
    let promesa = axiosProducts.get("/");
    let res = await promesa;
    return res.data
}


export const getProductById = async ( id ) => {
    let promesa = axiosProducts.get(`/${id}`)
    let res = await promesa
    return res.data
}