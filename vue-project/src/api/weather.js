import axios from './axiosConfig'

export const currentWeather = (params) => {
    return axios.get('/weather', { params })
}