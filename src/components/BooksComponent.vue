<script setup>
import PaginationComponent from "@/components/PaginationComponent.vue";
import {useGetBooksStore} from "@/stores/book/getBooks.js";
import {useRoute} from "vue-router";
import {onMounted, ref, watch} from "vue";
import {useI18n} from "vue-i18n";

const getBooksStore = useGetBooksStore();

const baseUrl = import.meta.env.VITE_API_URL;

const route = useRoute();
const currentPage = ref(1);
const query = ref('?page=1');

onMounted(() => {
    getBooksStore.fetchAll(query.value);
});

watch(
    () => route.params.id,
    (val) => {
        if (!val) {
            query.value = '?page=1';
            getBooksStore.fetchAll(query.value);
        } else if (Number(val) === 0) {
            query.value = '/by-like?page=1';
            getBooksStore.fetchAll(query.value);
        } else {
            query.value = '/by-category?page=1&categoryId=' + val;
            getBooksStore.fetchAll(query.value);
        }
    },
    {immediate: true}
);

const changePage = (page) => {
    currentPage.value = page;
    query.value = query.value.replace(/page=\d+/, `page=${page}`);
    getBooksStore.fetchAll(query.value);
}

const nextLastPage = (incrementOrDecrement) => {
    currentPage.value += incrementOrDecrement;
    if (!currentPage.value) {
        currentPage.value = 1;
    } else if (currentPage.value > getBooksStore.get.pageCount) {
        currentPage.value--;
    } else {
        getBooksStore.fetchAll(query.value.replace(/page=\d+/, `page=${currentPage.value}`));
    }
}

const {t} = useI18n();
</script>

<template>
    <div class="bg-my-gray grow gap-5 p-5 grid grid-cols-12 mb-2">
        <div v-for="book of getBooksStore.get.all" :key="book.id" class="bg-my-beige p-5 col-span-6 lg:col-span-4 xl:col-span-3">
            <div class="h-60 overflow-hidden mb-2">
                <img :src="`${baseUrl}${book.image.contentUrl}`" alt="kitob rasmi" class="h-full w-full object-cover">
            </div>
            <h4 class="text-lg font-semibold">{{ book.name }}</h4>
            <p class="text-sm text-black/70">{{ book.description }}</p>

            <div class="flex gap-3">
                <button class="w-full text-white hover:bg-white hover:text-my-blue-gray transition-all cursor-pointer  rounded-lg text-clip bg-my-blue-gray mt-5">
                    <RouterLink :to="{ name: 'book-info', params: { bookId: book.id } }" class="w-full block p-2">
                        {{ t('read') }}
                    </RouterLink>
                </button>
            </div>
        </div>
    </div>
    <PaginationComponent
        :pagination-count="getBooksStore.get.pageCount"
        class="col-span-6 lg:col-span-4 xl:col-span-3"
        @onSetPage="changePage"
        @on-previous-and-next-page="nextLastPage"
    />
</template>
