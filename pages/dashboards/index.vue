<template>
    <div>
        <h1>Dashboards</h1>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="d in dashboards">
                <DashboardCard :dashboard="d" />
            </div>
        </div>
    </div>
</template>

<script setup>
import DashboardCard from '~/components/DashboardCard.vue';

    definePageMeta({
        layout: 'footer-navbar'
    })

    const { data:dashboards } = await useFetch('https://fakestoreapi.com/products')
</script>

<style scoped>

</style>