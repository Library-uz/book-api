<script setup>
import FormInput from "@/components/UI/FormInput.vue";
import FormButton from "@/components/UI/FormButton.vue";
import {useAuthorizationStore} from "@/stores/user/authorization.js";
import {reactive} from "vue";
import {useRouter} from "vue-router";

const authStore = useAuthorizationStore();
const router = useRouter();

const userData = reactive({
    email: '',
    password: ''
})

const auth = async () => {
    await authStore.auth(userData);
    await router.push({ name: 'home' })
    location.reload();
}
</script>

<template>
    <div class="min-h-dvh grid place-content-center">
        <form @submit.prevent="auth" class="flex flex-col max-w-100 w-full sm:min-w-100 gap-5 bg-my-gray p-10 rounded-2xl text-white">
            <h2 class="text-center text-2xl font-medium">Kirish</h2>

            <FormInput v-model="userData.email" input-type="email" label-name="Email" placeholder="Email kiriting..." />
            <FormInput v-model="userData.password" input-type="password" label-name="Parol" placeholder="Parol kiriting..." />

            <FormButton :isloading="authStore.isLoading" :disabled="authStore.isLoading">Kirish</FormButton>
        </form>
    </div>
</template>
