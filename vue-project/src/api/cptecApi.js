import axios from './axiosConfig'

export const getCityInfo = (params) => {
    return axios.get(`cidade/${params}`)
}

export const listAllCities = () => {
    return axios.get('cidade')
}

export const getWeatherForecast = (cityCode) => {
    return axios.get(`clima/previsao/${cityCode}`)
}