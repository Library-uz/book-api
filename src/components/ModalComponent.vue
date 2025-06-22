<script setup>
import FormInput from "@/components/UI/FormInput.vue";
import FormButton from "@/components/UI/FormButton.vue";

const isOpen = defineModel('isOpen');
const categoryText = defineModel();

defineProps({
    acceptButtonText: {
        type: String,
        required: true
    },
    cancelButtonText: {
        type: String,
        required: true
    },
    modalTitle: {
        type: String,
        required: true
    }
})

defineEmits(["on-accept"]);

</script>

<template>
    <div v-if="isOpen" @click.self="isOpen = false" class="fixed inset-0 z-50 bg-black/30 grid place-content-center">
        <div class="p-10 rounded bg-white flex flex-col gap-5 sm:w-150">
            <h3 class="text-2xl font-bold">{{ modalTitle }}</h3>

            <FormInput label-name="Kategoriya nomi" v-model="categoryText" placeholder="Kategoriya nomini kiriting..."/>

            <div class="flex gap-5 justify-end">
                <FormButton @click="$emit('on-accept')">{{ acceptButtonText }}</FormButton>
                <FormButton @click="isOpen = false">{{ cancelButtonText }}</FormButton>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>