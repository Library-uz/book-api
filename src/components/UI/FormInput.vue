<script setup>
defineProps({
    labelName: {
        type: String,
        required: true
    },
    inputType: {
        type: String,
        default: 'text'
    },
    placeholder: {
        type: String,
        default: 'Type here...'
    }
})

const model = defineModel();
</script>

<template>
    <label class="flex flex-col">
        <span class="italic">{{ labelName }}</span>
        <input
            class="border px-2.5 py-2 rounded bg-white placeholder:text-my-gray text-black"
            :type="inputType"
            :placeholder
            v-model="model"
        />
    </label>
</template>
