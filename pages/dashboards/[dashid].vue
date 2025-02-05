<template>
    <div>
        <h1>Dashboard {{ dashboard.title }}</h1>
        <p class="text-indigo-900">Price: ${{ dashboard.price }}</p>
        <p>{{ dashboard.description }}</p>
    </div>
</template>

<script setup>
    const { dashid } = useRoute().params;

    const uri = 'https://fakestoreapi.com/products/' + dashid;
    const { data: dashboard } = await useFetch(uri, { key: dashid });

    definePageMeta({
        layout: 'footer-navbar'
    })
</script>

<style scoped>

</style>