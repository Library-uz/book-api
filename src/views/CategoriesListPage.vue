<script setup>

import FormButton from "@/components/UI/FormButton.vue";
import PaginationComponent from "@/components/PaginationComponent.vue";
import ModalComponent from "@/components/ModalComponent.vue";
import { useGetCategoryStore } from "@/stores/category/getCategories";
import { useChangeCategoryStore } from "@/stores/category/changeCategory";
import { useDeleteCategoryStore } from "@/stores/category/deleteCategory";
import {useAddCategoryStore} from "@/stores/category/addCategory.js";
import {ref} from "vue";

const getCategoryStore = useGetCategoryStore();
const changeCategoryStore = useChangeCategoryStore();
const deleteCategoryStore = useDeleteCategoryStore();
const addCategoryStore = useAddCategoryStore();
const categoryText = ref('');
const isOpenForEdit = ref(false);
const isOpenForAdd = ref(false);
const currentId = ref(null);

getCategoryStore.fetchAll();

const openEditModal = id => {
    isOpenForEdit.value = true;
    currentId.value = id;
}

const editCategory = async () => {
    await changeCategoryStore.change(currentId.value, {name: categoryText.value});
    categoryText.value = '';
    currentId.value = null;
    isOpenForEdit.value = false;
    await getCategoryStore.fetchAll();
}

const deleteCategory = async id => {
    await deleteCategoryStore.deleteCategory(id);
    await getCategoryStore.fetchAll();
}

const addCategory = async () => {
    await addCategoryStore.add({name: categoryText.value});
    categoryText.value = '';
    isOpenForAdd.value = false;
    await getCategoryStore.fetchAll();
}
</script>

<template>
    <div class="grow mr-5">
        <div class="flex justify-between items-center mb-5">
            <h2 class="text-3xl mb-2 font-medium">Kitoblar</h2>
            <FormButton @click="isOpenForAdd = true">Qo'shish</FormButton>
        </div>

        <div class="border p-2 w-full mb-5">
            <table class="table-auto w-full">
                <thead class="bg-my-blue-gray">
                <tr>
                    <th class="text-left pl-5 py-2">Id</th>
                    <th class="text-left">Nomi</th>
                    <th class="text-right pr-5">Amallar</th>
                </tr>
                </thead>
                <tbody class="bg-my-beige">
                <tr v-for="category of getCategoryStore.get.all" :key="category.id" class="not-last:border-b">
                    <td class="text-left pl-5">{{ category.id }}</td>
                    <td class="text-left">{{ category.name }}</td>
                    <td class="text-right pr-5">
                        <button @click="openEditModal(category.id)" class="px-3 py-1 hover:op-70 transition-all bg-amber-500 text-white rounded-full my-2 mr-4 cursor-pointer">O'zgartirish</button>
                        <button @click="deleteCategory(category.id)" class="px-3 py-1 hover:op-70 transition-all bg-red-500 text-white rounded-full my-2 mr-4 cursor-pointer">O'chirish</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>

        <PaginationComponent />
        <ModalComponent
            @on-accept="editCategory"
            modal-title="Kategoriyani o'zgartirish"
            cancel-button-text="Bekor qilish"
            accept-button-text="O'zgartirish"
            v-model:is-open="isOpenForEdit"
            v-model="categoryText"
        />
        <ModalComponent
            @on-accept="addCategory"
            modal-title="Kategoriyani qo'shish"
            cancel-button-text="Bekor qilish"
            accept-button-text="Qo'shish"
            v-model:is-open="isOpenForAdd"
            v-model="categoryText"
        />
    </div>
</template>