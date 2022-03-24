import axios from 'axios';
import join from 'url-join';

const isAbsoluteURLRegex = /^(?:\w+:)\/\//


axios.interceptors.request.use(async (config)=> {
    
    if (!isAbsoluteURLRegex.test(config.url)) {
        config.url = join(process.env.REACT_APP_API_URL, config.url);
    }
    config.timeout = 85000;
    return config;
  
});

export const httpClient = axios