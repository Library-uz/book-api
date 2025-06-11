<script setup>

</script>

<template>
    <div class="min-h-dvh grid place-content-center">
        <form class="flex flex-col max-w-100 w-full sm:min-w-100 gap-5 bg-my-gray p-10 rounded-2xl text-white">
            <h2 class="text-center text-2xl font-medium">Kirish</h2>
            <label class="flex flex-col">
                <span>Email</span>
                <input class="border px-2.5 py-2 rounded bg-white placeholder:text-my-gray hover:text-black" type="text" placeholder="Email..."/>
            </label>
            <label class="flex flex-col">
                <span>Parol</span>
                <input class="border px-2.5 py-2 rounded bg-white placeholder:text-my-gray hover:text-black" type="password" placeholder="Password..."/>
            </label>
            <button class=" lg:inline px-8 py-2 bg-my-gray rounded-lg hover:bg-white hover:text-my-blue-gray cursor-pointer transition-all">
                Kirish
            </button>
        </form>
    </div>
</template>

<style scoped>

</style>