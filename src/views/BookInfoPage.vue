<script setup>
import {useGetBooksStore} from "@/stores/book/getBooks.js";
import {useRoute} from "vue-router";
import {useGetBookStore} from "@/stores/book/getBook.js";

const bookStore = useGetBookStore();
const route = useRoute();

console.log(route);

bookStore.fetchBook(route.params.bookId);
</script>

<template>
    <div class="bg-my-gray grow gap-5 p-5 text-white">
        <h1 class="text-4xl font-semibold mb-10">{{ bookStore.get.name }}</h1>
        <p>{{ bookStore.get.text }}</p>
    </div>
</template>

<style scoped>

</style>