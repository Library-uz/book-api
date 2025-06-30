<script setup>
import FormInput from "@/components/UI/FormInput.vue";
import FormButton from "@/components/UI/FormButton.vue";
import {useCreateUserStore} from "@/stores/user/createUser.js";
import {reactive, ref} from "vue";
import {useRouter} from "vue-router";

const createUserStore = useCreateUserStore();
const router = useRouter();
const passwordConfirm = ref('')
const userData = reactive({
    username: '',
    password: '',
    email: '',
    age: '',
    phone: '',
    gender: ''
})

const create = async () => {
    if (passwordConfirm.value === '') {
        alert('Parolni takrorlang!');
    } else if (passwordConfirm.value !== userData.password) {
        alert('Parollar mos tushmadi!');
    } else {
        await createUserStore.create({...userData, age: parseInt(userData.age)});
        await router.push({name: 'login'});
    }
}
</script>

<template>
    <div class="min-h-dvh grid place-content-center">
        <form @submit.prevent="create" class="flex flex-col max-w-100 w-full sm:min-w-100 gap-5 bg-my-gray p-10 rounded-2xl text-white">
            <h2 class="text-center text-2xl font-medium">Registratsiya</h2>

            <FormInput v-model="userData.username" label-name="Username" placeholder="Foydalanuvchi nomini kiriting..." />
            <FormInput v-model="userData.email" input-type="email" label-name="Email" placeholder="Email kiriting..." />
            <FormInput v-model="userData.password" input-type="password" label-name="Parol" placeholder="Parol kiriting..." />
            <FormInput v-model="passwordConfirm" input-type="password" label-name="Parolni takrorlang" placeholder="Parol kiriting..." />
            <FormInput v-model="userData.age" label-name="Yosh" placeholder="Yoshni kiriting..." />
            <FormInput v-model="userData.phone" label-name="Telefon raqam" placeholder="Raqamingizni kiriting..." />
            <div class="flex justify-self-end-safe gap-5">
                <label for="male"><input v-model="userData.gender" type="radio" name="gender" value="man" id="male" class="mr-1" />Male</label>
                <label for="female"><input v-model="userData.gender" type="radio" name="gender" value="woman" id="female" class="mr-1" />Female</label>
            </div>

            <FormButton :is-loading="createUserStore.isLoading" :disabled="createUserStore.isLoading">Ro'yxatdan o'tish</FormButton>

        </form>
    </div>
</template>