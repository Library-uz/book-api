import {defineStore} from "pinia";
import {authorizedClient} from "@/api/axios.js";

export const useChangeUserPasswordStore = defineStore('changeUserPassword', () => {
    const change = async (url, data) => {
        try {
            return await authorizedClient.patch(`/users/update${url}`, data);
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    return {
        change,
    }
})