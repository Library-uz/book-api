import axios from "axios";

export const authorizedClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL + "/api",
    headers: {
        "Content-Type": "application/ld+json",
        "Accept": "application/ld+json",
        "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
})

authorizedClient.interceptors.request.use(config => {
    if (config.method === 'patch') {
        config.headers['Content-Type'] = 'application/merge-patch+json';
    }

    return config;
})
