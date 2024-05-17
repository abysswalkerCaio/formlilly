<template>
  <div
    class="bg-zinc-100 text-deep-blush-950 dark:bg-zinc-900 dark:text-deep-blush-100 font-roboto h-screen grid grid-rows-[auto_auto] grid-cols-1"
  >
    <DefaultHeader />
    <slot />
    <Footer :links="links" />
  </div>
</template>

<script setup lang="ts">
const links = ref([
  {
    to: "https://www.linkedin.com/in/caio-costa-dev/",
    icon: "fa-brands fa-linkedin",
  },
  {
    to: "https://github.com/abysswalkerCaio",
    icon: "fa-brands fa-github",
  },
  {
    to: " https://www.youtube.com/@gaiuskuste",
    icon: "fa-brands fa-youtube",
  },
]);
</script>

<style>
html.light {
  ::selection {
    background: #f9d2d9;
  }
}

html.dark {
  ::selection {
    background: #450c21;
  }
}
</style>
