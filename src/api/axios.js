import axios from "axios";

export const authorizedClient = axios.create({
    baseURL: "http://localhost:9999/api",
    headers: {
        "Content-Type": "application/ld+json",
        "Accept": "application/ld+json",
        "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
})
