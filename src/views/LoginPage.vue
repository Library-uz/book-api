<script setup>
import FormInput from "@/components/UI/FormInput.vue";
import FormButton from "@/components/UI/FormButton.vue";
import {reactive, ref} from "vue";
import axios from "axios";

const isloading = ref(false)

const userData = reactive({
    email: '',
    password: ''
})

const auth = async () => {
    isloading.value = true;

    try {
        const { data } = await axios.post('http://localhost:9999/api/users/auth', userData)

        localStorage.setItem('token', data.token)
    } catch (err) {
        console.log(err)
    } finally {
        isloading.value = false;
    }
}
</script>

<template>
    <div class="min-h-dvh grid place-content-center">
        <form @submit.prevent="auth" class="flex flex-col max-w-100 w-full sm:min-w-100 gap-5 bg-my-gray p-10 rounded-2xl text-white">
            <h2 class="text-center text-2xl font-medium">Kirish</h2>

            <pre>{{userData}}</pre>

            <FormInput v-model="userData.email" input-type="email" label-name="Email" placeholder="Email kiriting..." />
            <FormInput v-model="userData.password" input-type="password" label-name="Parol" placeholder="Parol kiriting..." />

            <FormButton :isloading :disabled="isloading">Kirish</FormButton>
        </form>
    </div>
</template>
