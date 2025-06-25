<script setup>
import FormButton from "@/components/UI/FormButton.vue";
import FormInput from "@/components/UI/FormInput.vue";
import {reactive} from "vue";
import {useGetCategoryStore} from "@/stores/category/getCategories.js";
import {useAddFileStore} from "@/stores/mediaObject/addFile.js";
import {useCreateBookStore} from "@/stores/book/createBook.js";
import {useI18n} from "vue-i18n";

const book = reactive({
    name: '',
    description: '',
    text: '',
    category: '',
    image: ''
})

const getCategoryStore = useGetCategoryStore();
const addFileStore = useAddFileStore();
const createBookStore = useCreateBookStore();

getCategoryStore.fetchAll();

const setFile = event => {
    book.image = event.target.files[0]
}

const addBook = async () => {
    const res = await addFileStore.addFile(book.image);
    await createBookStore.createBook({...book, image: res["@id"]});
    book.name = '';
    book.description = '';
    book.text = '';
    book.category = '';
    book.image = '';
    }

const { t } = useI18n();
</script>

<template>
    <div class=" inset-0 bg-black/30 grid place-content-center">
        <div class="p-10 rounded bg-white flex flex-col gap-5 sm:w-150">
            <h3 class="text-2xl font-bold">{{ t('addBook') }}</h3>

            <FormInput :label-name="t('bookName')" v-model="book.name" :placeholder="t('phBookName')"/>
            <FormInput :label-name="t('description')" v-model="book.description" :placeholder="t('phDescription')"/>

            <div class="flex flex-col sm:w-130">
                <span class="italic pb-0.5">{{ t('textBook') }}</span>
                <textarea class="border rounded h-30" v-model="book.text"></textarea>
            </div>

            <div class="flex flex-col sm:w-130">
                <span class="italic">{{ t('category') }}</span>
                <select class="border rounded py-2.5" v-model="book.category" >
                    <option value="" disabled selected>{{ t('select') }}</option>
                    <option v-for="category of getCategoryStore.get.all" :key="category.id" :value="category['@id']">{{ category.name }}</option>
                </select>
            </div>

            <FormInput @change="setFile" input-type="file" :label-name="t('bookImage')"/>


            <div class="flex gap-5 justify-end">
                <FormButton :isloading="createBookStore.isLoading" @click="addBook">{{ t('add') }}</FormButton>
            </div>
        </div>
    </div>
</template>