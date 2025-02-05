<template>
    <div>
        <DashboardDetails :dashboard="dashboard"/>
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