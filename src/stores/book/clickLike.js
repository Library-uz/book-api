import {defineStore} from "pinia";
import {authorizedClient} from "@/api/axios.js";

export const useClickLikeStore = defineStore('clickLike', () => {


    const fetchLike = async (data) => {
        try {
            return await authorizedClient.post('/likes/add', data);
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    return {
        fetchLike,
    }
})