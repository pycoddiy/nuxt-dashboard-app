<template>
    <header>
        <nav>
            <ul>
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/about">About</NuxtLink></li>
                <li><NuxtLink  to="/dashboards">Dashboards</NuxtLink></li>
            </ul>
        </nav>
    </header>
    <div>
        <slot />
    </div>
</template>

<style scoped>
    .router-link-exact-active {
        color: brown;
    }
</style>