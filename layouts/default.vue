<template>
    <div>
        <header class="m-4 shadow-lg bg-blue-50 rounded-lg">
            <nav class="container p-2 flex justify-between">
                <NuxtLink to="/"><img class="rounded-full w-10" src="assets/images/logo.png" alt="Dashboard logo"> </NuxtLink>
                <ul class="flex gap-4">
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/about">About</NuxtLink></li>
                <li><NuxtLink  to="/dashboards">Dashboards</NuxtLink></li>
            </ul>
        </nav>
        </header>
        <div class="m-4 shadow-lg bg-red-50 p-4 rounded-lg">
            <slot />
        </div>
    </div>
</template>

<style scoped>
    .router-link-exact-active {
        font-weight: bolder;
    }
</style>