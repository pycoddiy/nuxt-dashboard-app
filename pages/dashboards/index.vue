<template>
    <div>
        <h1>Dashboards</h1>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="d in dashboards" class="container bg-indigo-50 shadow-lg h-20 p-1">
                <NuxtLink :to="`/dashboards/${d.id}`">{{ d.title }}</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'footer-navbar'
    })

    const { data:dashboards } = await useFetch('https://fakestoreapi.com/products')
</script>

<style scoped>

</style>