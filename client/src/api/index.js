import axios from 'axios'

const URL = 'http://localhost:5000'

export const fetchProjects = () => axios.get(`${URL}/projects`)
export const createProject = (payload) => axios.post(`${URL}/projects`, payload)