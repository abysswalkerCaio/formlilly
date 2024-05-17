<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - FormLilly`
      : "FormLilly";
  },
  meta: [
    {
      name: "description",
      content: "Efficient form builder with Nuxt 3 and Laravel 10, supported by robust authentication provided by Laravel Sanctum.",
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