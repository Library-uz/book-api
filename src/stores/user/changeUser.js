import {defineStore} from "pinia";
import {authorizedClient} from "@/api/axios.js";
import {computed, ref} from "vue";

export const useChangeUserStore = defineStore('changeUser', () => {
    const isChanged = ref(false);

    const change = async (id, data) => {
        try {
            await authorizedClient.patch(`/users/update?id=${id}`, data);
            isChanged.value = true;
        } catch (err) {
            console.error(err);
            throw err;
        } finally {
            isChanged.value = false
        }
    }

    return {
        change,
        isChanged: computed(() => isChanged.value),
    }
})