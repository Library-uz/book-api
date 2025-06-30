<script setup>
import FormInput from "@/components/UI/FormInput.vue";
import FormButton from "@/components/UI/FormButton.vue";
import {useChangeUserPasswordStore} from "@/stores/user/changeUserPassword.js";
import {reactive} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();
const userData = reactive({
    id: null,
    email: null,
    password: null
})
const changeUser = useChangeUserPasswordStore();

const changePassword = async () => {
    await changeUser.change('?email=' + userData.email, { password: userData.password });
    await router.push({name: 'login'});
}
</script>

<template>
    <div class="min-h-dvh grid place-content-center">
        <form @submit.prevent="changePassword" class="flex flex-col max-w-100 w-full sm:min-w-100 gap-5 bg-my-gray p-10 rounded-2xl text-white">
            <h2 class="text-center text-2xl font-medium">Parolni tiklash</h2>

            <FormInput v-model="userData.email" input-type="email" label-name="Email" placeholder="email kiriting..." />
            <FormInput v-model="userData.password" input-type="password" label-name="Yangi parol" placeholder="yangi parol kiriting..." />
            <FormButton>O'zgartirish</FormButton>
        </form>
    </div>
</template>

<style scoped>

</style>