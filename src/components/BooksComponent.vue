<script setup>
import PaginationComponent from "@/components/PaginationComponent.vue";
import {useGetBooksStore} from "@/stores/book/getBooks.js";
import {useRoute} from "vue-router";
import {watch} from "vue";
import {useI18n} from "vue-i18n";

const getBooksStore = useGetBooksStore();

getBooksStore.fetchAll();

const baseUrl = import.meta.env.VITE_API_URL;

const route = useRoute();

watch(
    () => route.params.id,
    (val) => {
        if (!val) {
            getBooksStore.fetchAll();
        } else {
            getBooksStore.fetchAll('/by-category?categoryId=' + val);
        }
    },
    { immediate: true }
)

const { t } = useI18n();
</script>

<template>
    <div class="bg-my-gray grow gap-5 p-5 grid grid-cols-12">
        <div v-for="book of getBooksStore.get.all" :key="book.id" class="bg-my-beige p-5 col-span-6 lg:col-span-4 xl:col-span-3">
            <div class="h-60 overflow-hidden mb-2">
                <img class="h-full w-full object-cover" :src="`${baseUrl}${book.image.contentUrl}`" alt="kitob rasmi">
            </div>
            <h4 class="text-lg font-semibold">{{ book.name }}</h4>
            <p class="text-sm text-black/70">{{ book.description }}</p>

            <button class="w-full text-white hover:bg-white hover:text-my-blue-gray transition-all cursor-pointer  rounded-lg text-clip bg-my-blue-gray mt-5">
                <RouterLink class="w-full block py-2" :to="{ name: 'book-info', params: { bookId: book.id } }">{{ t('read') }}</RouterLink>
            </button>
        </div>

        <PaginationComponent />

    </div>
</template>

<style scoped>

</style>