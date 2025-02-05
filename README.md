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

16. 