import axios from "axios";


const API_URL = 'http://103.253.212.215:3000/api/movies'

export const getAllMovies = ()=>{
    return axios.get(API_URL);
}

export const  getMoviesById = (id)=>{
    return axios.get(`${API_URL}/${id}`)
}

export const createMovies = (data) =>{
    return axios.post(`${API_URL}`, data)
}

export const updateMovies = (id, data) =>{
    return axios.put(`${API_URL}/${id}`, data)
}

export const deleteMovies = (id) =>{
    return axios.delete(`${API_URL}/${id}`, )
}
