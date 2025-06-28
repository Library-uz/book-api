<script setup>
import {reactive, ref} from "vue";
import FormInput from "@/components/UI/FormInput.vue";
import FormButton from "@/components/UI/FormButton.vue";
import PaginationComponent from "@/components/PaginationComponent.vue";
import {useGetUsersStore} from "@/stores/user/getUsers.js";
import {useI18n} from "vue-i18n";

const usersStore = useGetUsersStore();
usersStore.fetchUsers('?page=1');

const queryFilters = reactive({
    query: '?page=1',
    email: null,
    phone: null,
    before: null,
    after: null,
})

const search = () => {
    queryFilters.query = `?page=1`;

    if (queryFilters.email) {
        queryFilters.query += `&email=${queryFilters.email}`;
    }

    if (queryFilters.phone) {
        queryFilters.query += `&phone=${queryFilters.phone}`;
    }

    if (queryFilters.before) {
        queryFilters.query += `&createdAt[before]=${queryFilters.before}`;
    }

    if (queryFilters.after) {
        queryFilters.query += `&createdAt[after]=${queryFilters.after}`;
    }

    if (queryFilters.email || queryFilters.phone || queryFilters.before || queryFilters.after) {
        usersStore.fetchUsers(queryFilters.query);
        currentPage.value = 1;
    }
}

const clear = () => {
    queryFilters.email = null;
    queryFilters.phone = null;
    queryFilters.before = null;
    queryFilters.after = null;

    usersStore.fetchUsers('?page=1');
    currentPage.value = 1;
}

const currentPage = ref(1);

const changePage = (page) => {
    currentPage.value = page;
    usersStore.fetchUsers(queryFilters.query.replace(/page=\d+/, `page=${page}`));
}

const nextLastPage = (incrementOrDecrement) => {
    currentPage.value += incrementOrDecrement;
    if (!currentPage.value) {
        currentPage.value = 1;
    } else if(currentPage.value > usersStore.get.pageCount) {
        currentPage.value--;
    } else {
        usersStore.fetchUsers(queryFilters.query.replace(/page=\d+/, `page=${currentPage.value}`));

    }
}

const { t } = useI18n();
</script>

<template>
    <div class="container mx-auto flex flex-col bg-my-gray p-5">
        <form @submit.prevent="search" class="flex items-end gap-5 text-white">
            <FormInput v-model="queryFilters.email" :label-name="t('email')" :placeholder="t('phEmail')"/>
            <FormInput v-model="queryFilters.phone" :label-name="t('phone')" :placeholder="t('phPhone')"/>
            <FormInput v-model="queryFilters.before" :label-name="t('before')" input-type="date"/>
            <FormInput v-model="queryFilters.after" :label-name="t('after')" input-type="date"/>

            <FormButton class="ml-auto">Qidirish</FormButton>
            <FormButton @click="clear" class="bg-red-500">Tozalash</FormButton>
        </form>

        <div class="border p-2 w-full my-5">
            <table class="table-auto w-full">
                <thead class="bg-my-blue-gray">
                <tr>
                    <th class="text-left pl-5 py-2">#</th>
                    <th class="text-left">email</th>
                    <th class="text-left">yosh</th>
                    <th class="text-left">telefon</th>
                    <th class="text-left">jins</th>
                    <th class="text-right pr-5">registratsiya vaqti</th>
                </tr>
                </thead>
                <tbody class="bg-my-beige text-black">
                <tr
                    v-for="user of usersStore.get.all"
                    :key="user.id"
                    class="not-last:border-b"
                >
                    <td class="text-left pl-5 py-2">{{ user.id }}</td>
                    <td class="text-left">{{ user.email }}</td>
                    <td class="text-left">{{ user.age }}</td>
                    <td class="text-left">{{ user.phone }}</td>
                    <td class="text-left">{{ user.gender }}</td>
                    <td class="text-right pr-5">{{ new Intl.DateTimeFormat().format(new Date(user.createdAt)) }}</td>
                </tr>
                </tbody>
            </table>

        </div>

        <div class="flex items-center justify-between">
            <p class="text-white">Jami: {{ usersStore.get.totalItems}}</p>
            <PaginationComponent
                :pagination-count="usersStore.get.pageCount"
                @on-previous-and-next-page="nextLastPage"
                @onSetPage="changePage"
            />
        </div>
    </div>
</template>

<style scoped>

</style>