<template>
    <div class="card">
        <div class="grid grid-cols-2 gap-10">
            <div class="p-10">
                <img :src="dashboard.image" alt="Dashboard image" class="mx-auto my-7">
            </div>
            <div class="p-7 ">
                <h2 class="text-4xl my-7">{{ dashboard.title }}</h2>
                <p class="text-xl my-7">Price: $ {{ dashboard.price }}</p>
                <h3 class="font-bold border-b-2 mb-4 pb-2">Dashboard Description</h3>
                <p class="mb-7">{{ dashboard.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    const { dashboard } = defineProps(['dashboard'])
</script>

<style scoped>
    img {
        max-width: 400px;
    }
</style>