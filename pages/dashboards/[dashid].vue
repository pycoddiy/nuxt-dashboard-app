<template>
    <div>
        <h1>Dashboard {{ dashid }}</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis iusto vero rerum minus, nam at accusantium saepe. Consequuntur, tempora excepturi ipsum ipsa inventore autem quos error, minus aliquam nostrum odio.</p>
    </div>
</template>

<script setup>
    const { dashid } = useRoute().params;

    definePageMeta({
        layout: 'footer-navbar'
    })
</script>

<style scoped>

</style>