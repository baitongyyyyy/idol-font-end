import axios from 'axios';
import helper from './helper';

const getAPI = () => {
    const api = axios.create({
        // baseURL: process.env.REACT_APP_API_URL,
        baseURL: "https://idolpitchdev.ml",
        headers: {
            "Content-Type": "application/json"
        },
        timeout: 85000
    });

    let tokenAPI;
    const connectTokenAPI = (token) => {
        // console.log('conToken',token )
        tokenAPI = axios.create({
            // baseURL: process.env.REACT_APP_API_URL,
            baseURL: "https://idolpitchdev.ml",
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + token
            },
            timeout: 85000
        });
    }

    const login = async (params) => {
        return await api.post(`/auth/signin`, params);
    }

    const getIdols = async () => {
        // return await api.get(`/idols?product_code=ALL_PRODUCT`, {
        //     headers: {
        //         "Authorization": 'Bearer ' + token
        //     }
        // })
        return await tokenAPI.get(`/idols?product_code=ALL_PRODUCT`);
    }

    const getIdolInstagram = async (username) => {
        return await tokenAPI.get(`/ig/user/search?username=${username}`);
    }

    const getIgUser = async (id) => {
        return await tokenAPI.get(`/ig/user/${id}`);
    }

    const addIdolIg = async (params) => {
        return await tokenAPI.post(`/idols`, params)
    }

    const getSaleSteam = async () => {
        return await tokenAPI.get(`/users/salesteam`);
    }
    const addSale = async (id,params) => {
        return await tokenAPI.patch(`/idols/${id}/sales`,params);
    }
    return {
        connectTokenAPI,
        login,
        getIdols,
        getIdolInstagram,
        getIgUser,
        addIdolIg,
        getSaleSteam,
        addSale,
    }
}
export default {
    getAPI
}
