import {defineStore} from "pinia";
import axios from "axios";
import {computed, onMounted, ref} from "vue";

export const useAuthorizationStore = defineStore('authorization', () => {
    const isLoading = ref(false);
    const isAuthorized = ref(false);

    const auth = async authData => {
        try {
            isLoading.value = true;
            const response = await axios.post('http://localhost:9999/api/users/auth', authData);
            isAuthorized.value = true;

            localStorage.setItem('token', response.data.token);
        }catch (err) {
            console.error(err);
            throw err;
        } finally {
            isLoading.value = false;
        }
    }

    onMounted(() => isAuthorized.value = !!localStorage.getItem('token'));

    return {
        auth,
        isLoading,
        isAuthorized: computed(() => isAuthorized.value),
    };
})