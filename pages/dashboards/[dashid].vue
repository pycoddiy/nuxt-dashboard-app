<template>
    <Head>
        <Title>Nuxt Dashboard App | {{ dashboard.title }}</Title>
        <Meta name="description" :content="dashboard.description" />
    </Head>
    <div>
        <DashboardDetails :dashboard="dashboard"/>
    </div>
</template>

<script setup>
    const { dashid } = useRoute().params;

    const uri = 'https://fakestoreapi.com/products/' + dashid;
    const { data: dashboard } = await useFetch(uri, { key: dashid });

    if (!dashboard.value) {
        throw createError({ statusCode: 404, statusMessage: 'Dashboard not found' });
    }

    definePageMeta({
        layout: 'footer-navbar'
    })
</script>

<style scoped>

</style>