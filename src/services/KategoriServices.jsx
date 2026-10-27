import axios from "axios";
import { data } from "react-router-dom";

const API_URL = 'http://103.253.212.215:3000/api/categories'

export const getAllCategories = ()=>{
    return axios.get(API_URL);
}


export const getCategoriesById = (id)=>{
    return axios.get(`${API_URL}/${id}`)
}

export const createCategories = (data)=>{
    return axios.post (API_URL, data)
}

export const updateCategories = (id)=>{
    return axios.put (`${API_URL}/${id}`)
}

export const deleteCategories = (id)=>{
    return axios.delete(`${API_URL}/${id}`)
}