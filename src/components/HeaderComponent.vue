<script setup>

</script>

<template>
    <header class="flex justify-between items-center bg-my-gray px-10 h-20 sticky top-0 text-white mb-5 shadow-md">
        <a href="#" class="text-3xl font-semibold">Lo<span class="text-my-blue-gray">go</span></a>
        <nav class="hidden lg:block">
            <ul class="flex gap-10">
                <li class="border-b-1 border-transparent cursor-pointer hover:border-white transition-all">Home</li>
                <li class="border-b-1 border-transparent cursor-pointer hover:border-white transition-all">Contact</li>
                <li class="border-b-1 border-transparent cursor-pointer hover:border-white transition-all">About</li>
                <li class="border-b-1 border-transparent cursor-pointer hover:border-white transition-all">Gallery</li>
                <li class="border-b-1 border-transparent cursor-pointer hover:border-white transition-all">Categories</li>
            </ul>
        </nav>

        <div>
            <button class="lg:hidden text-3xl hover:bg-white hover:text-my-gray p-2 rounded-lg transition-all cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"/>
                </svg>
            </button>
            <button class="hidden lg:inline px-8 py-2 bg-my-blue-gray rounded-lg hover:bg-white hover:text-my-blue-gray cursor-pointer transition-all mr-5">Sign Up</button>
            <button class="hidden lg:inline px-8 py-2 bg-my-blue-gray rounded-lg hover:bg-white hover:text-my-blue-gray cursor-pointer transition-all ">Sign In</button>
        </div>
    </header>
</template>

<style scoped>

</style>