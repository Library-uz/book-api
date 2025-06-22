<script setup>

import {useAuthorizationStore} from "@/stores/user/authorization.js";
import {useRouter} from "vue-router";

const authorizationStore = useAuthorizationStore();
const router = useRouter();

const logout = () => {
    localStorage.removeItem('token');
    router.push({name: 'login'});
}

</script>

<template>
    <header class="flex justify-between items-center bg-my-gray px-10 z-10 h-20 sticky top-0 text-white mb-5 shadow-md">
        <a href="#" class="text-3xl font-semibold">Lo<span class="text-my-blue-gray">go</span></a>
        <nav class="hidden lg:block">
            <ul class="flex gap-10">
                <li class="border-b-1 border-transparent cursor-pointer hover:border-white transition-all">
                    <RouterLink to="/" active-class="text-teal-600">Home</RouterLink>
                </li>
                <li class="border-b-1 border-transparent cursor-pointer hover:border-white transition-all">Contact</li>
                <li class="border-b-1 border-transparent cursor-pointer hover:border-white transition-all">About</li>
                <li class="border-b-1 border-transparent cursor-pointer hover:border-white transition-all">Gallery</li>
                <li class="border-b-1 border-transparent cursor-pointer hover:border-white transition-all">
                    <RouterLink :to="{ name: 'categories' }" active-class="text-teal-600">Categories</RouterLink>
                </li>
            </ul>
        </nav>

        <div>
            <div v-if="!authorizationStore.isAuthorized">
                <button class="hidden lg:inline px-8 py-2 bg-my-blue-gray rounded-lg hover:bg-white hover:text-my-blue-gray cursor-pointer transition-all mr-5">Sign Up</button>
                <RouterLink active-class="bg-white text-my-blue-gray" :to="{name: 'login'}" class="w-full block  lg:inline px-8 py-2 bg-my-blue-gray rounded-lg hover:bg-white hover:text-my-blue-gray cursor-pointer transition-all ">
                    Sign In
                </RouterLink>
            </div>
            <div v-else>
                <button @click="logout" class="hidden lg:inline px-8 py-2 bg-my-blue-gray rounded-lg hover:bg-white hover:text-my-blue-gray cursor-pointer transition-all mr-5">Logout</button>
            </div>
        </div>
    </header>
</template>

<style scoped>

</style>