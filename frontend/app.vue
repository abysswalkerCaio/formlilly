<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - FormLilly` : "FormLilly";
  },
  meta: [
    {
      name: "description",
      content:
        "Efficient form builder with Nuxt 3 and Laravel 10, supported by robust authentication provided by Laravel Sanctum.",
    },
    {
      name: "keywords",
      content:
        "Form, Question, Answer, Fullstack Developer, Back-end, Front-end, Hard Skills, Soft Skills, HTML, CSS, JavaScript, TypeScript, Vue.js, Nuxt.js, PHP, Laravel, MySQL, Microsoft Windows, Linux",
    },
    {
      name: "autor",
      content: "Caio Costa",
    },
  ],
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
