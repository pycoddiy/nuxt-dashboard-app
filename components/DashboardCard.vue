<template>
    <div class="card text-center">
        <img :src="dashboard.image" alt="Dashboard thumb" class="thumb">
        <p class="font-bold text-grey-500 m-4 truncate">{{ dashboard.title }}</p>
        <NuxtLink :to="`/dashboards/${dashboard.id}`">
            <p class="btn my-4">Dashboard Details</p>
        </NuxtLink>
    </div>
</template>

<script setup>
    const { dashboard } = defineProps(['dashboard'])
</script>

<style scoped>
    .thumb {
        max-height: 120px;
        max-width: 70%;
        margin: 0 auto;
    }
</style>