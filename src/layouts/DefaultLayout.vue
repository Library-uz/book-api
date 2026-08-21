<script setup>

import HeaderComponent from "@/components/HeaderComponent.vue";
import CategoriesComponent from "@/components/CategoriesComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
</script>

<template>
    <section class="flex flex-col min-h-dvh">
        <HeaderComponent />

        <div class="flex-1 flex flex-col md:flex-row gap-5">
            <CategoriesComponent />

            <RouterView/>
        </div>

        <FooterComponent />
    </section>
</template>
