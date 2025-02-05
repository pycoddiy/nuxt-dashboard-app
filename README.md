# Create app placeholder

1. `npx nuxi@latest init nuxt-dashboard-app`
2. `cd nuxt-dashboard-app`
3. `code .`
4. In built-in termintal run development server `npm run dev`
5. Dekete `app,vue` and create the folder `pages` in the root folder. Add `index.vue` and `about.vue` files in this folder.
6. In the `index.vue` file type `vbase-3-setup` autocompletion (Requires Vue VSCode Snippets extension) to create the template for the page. Remove `lang="scss"` from styling. Add basic content to the page like header and a few lorem paragraphs,
7. Repeat the same for `about.vue`
8. Under `pages` create folder `dashboards` with `index.vue` therein. Add basic header and paragraphs.
   9; Create file `[dashid].vue` under `dashboards`, which will represent an individual dashboard. Create basic page with `vbase-3-setup`.
9. Add this script:

```js
const { dashid } = useRoute().params;
```

11. Add this to the template part:

```html
<template>
    <div>
        <h1>Dashboard {{ dashid }}</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis iusto vero rerum minus, nam at accusantium saepe. Consequuntur, tempora excepturi ipsum ipsa inventore autem quos error, minus aliquam nostrum odio.</p>
    </div>
</template>
```

12. Add navbar to `index.vue`:

```html
    <header>
        <nav>
            <ul>
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/about">About</NuxtLink></li>
                <li><NuxtLink  to="/dashboards">Dashboards</NuxtLink></li>
            </ul>
        </nav>
    </header>
```

13. Copy and paste the header tp all files. (Demonstration why people need layouts).

14. Create `layouts` folder in the root. Add `default.vue` in it. Copy and paste the content of the template section of `index.vue`. Replace the content under `<div>`  with `<slot />`. Remove headers from files.

15. Add this section to the layout:

```css
<style scoped>
    .router-link-exact-active {
        color: brown;
    }
</style>
```

15. Create another layout `footer-navbar` with navbar in the footer and add this to the `script` section:

```js
    definePageMeta({
        layout: 'footer-navbar'
    })
```

# Styling the appp with Tailwind
16. In the terminal install Tailwind `npm install --save-dev @nuxtjs/tailwindcss`. Run `npx tailwindcss init`. Add to `next.config.ts` the Tailwind module:

```ts
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss']
})
```

17. In the `default.vue` layout edit header and div sections by additng `class=""` in respective markup to style Home and About pages. Refer to [Tailwind Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet).

**NOTE:** If you ever run into `ERROR: System limit for number of file watchers reached in Nuxt`, increase the number of watchers using these commands

```bash
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

18. Create `assets/css` directory and add new file `tailwind.css`. Edit this file:

```css
@tailwind base;
@tailwind components; 
@tailwind utilities; 

@layer base {
    h1 {
        @apply font-bold;
    }
}
```

19. Add to `assets` the `images` directory and place `logo.png` file.

20. Edit `default.vue` and `footer-navbar.vue` layouts so that they look prettier, e.g. like this:

### Default.vue
```html
template>
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
```

### Footer-navbar.vue
```html
<template>
    <div class="m-4 shadow-lg bg-red-50 p-4 rounded-lg">
        <slot />
    </div>
    <footer class="m-4 shadow-lg bg-blue-50 rounded-lg">

        <nav class="container p-2 flex justify-between">
            <NuxtLink to="/"><img class="rounded-full w-10" src="assets/images/logo.png" alt="Dashboard logo"></NuxtLink>
            <ul class="flex gap-4">
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/about">About</NuxtLink></li>
                <li><NuxtLink  to="/dashboards">Dashboards</NuxtLink></li>
            </ul>
        </nav>
    </footer>
</template>

<style scoped>
    .router-link-exact-active {
        color: brown;
    }
</style>
```

