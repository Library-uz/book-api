<script setup>

import {useGetCategoryStore} from "@/stores/category/getCategories.js";
import {useI18n} from "vue-i18n";
import {useRouter} from "vue-router";

const categoryStore = useGetCategoryStore();
const router = useRouter();
const {t} = useI18n();

const goToHome = () => {
    router.push('/');
}

categoryStore.fetchAll();
</script>

<template>
    <aside class="py-5 bg-my-gray  md:w-72 text-white flex-none h-fit md:sticky md:top-25">
        <div v-if="categoryStore.isLoading" class="py-2 px-5">Yuklanyapti...</div>
        <div v-else-if="!categoryStore.get.total" class="py-2 px-5">Ma'lumot topilmadi.</div>
        <div v-else>
            <button
                :class="{'text-teal-600': categoryStore.selectedCategory === null}"
                class="block w-full text-start py-2 px-5 cursor-pointer hover:bg-my-blue-gray-light hover:text-gray-800"
                @click="categoryStore.setCategory(null); goToHome()"
            >
                {{ t('allBooks') }}
            </button>
            <button
                :class="{'text-teal-600': categoryStore.selectedCategory === 0}"
                class="block w-full text-start py-2 px-5 cursor-pointer hover:bg-my-blue-gray-light hover:text-gray-800"
                @click="categoryStore.setCategory(0); goToHome()"
            >
                {{ t('favoriteBooks') }}
            </button>
            <button
                v-for="category of categoryStore.get.all"
                :key="category.id"
                :class="{'text-teal-600': categoryStore.selectedCategory === category.id}"
                class="block w-full text-start py-2 px-5 cursor-pointer hover:bg-my-blue-gray-light hover:text-gray-800"
                @click="categoryStore.setCategory(category.id); goToHome()"
            >
                {{ category.name }}
            </button>
        </div>
    </aside>
</template>
