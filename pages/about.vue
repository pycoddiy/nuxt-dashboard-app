<template>
    <div>
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo maiores adipisci quis, dolor consequatur quae? Delectus asperiores, nobis molestias dolor iusto tenetur culpa illo exercitationem dolores blanditiis natus, fuga dicta?</p>
        <div>{{ data }}</div>
    </div>
</template>

<script setup>
    useHead({
        title: 'Nuxt Dashboar App | About'
    });

    const { data } = await useFetch('api/ninja?name=mario', {
        method: 'post',
        body: { age: 30 }
    });
</script>

<style scoped>

</style>