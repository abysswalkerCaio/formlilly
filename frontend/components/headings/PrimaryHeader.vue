<template>
  <h1 class="text-4xl sm:text-6xl md:text-7xl font-sans font-bold">
    {{ content }}
  </h1>
</template>

<script setup lang="ts">
type TProps = {
  content: string;
};

const props = defineProps<TProps>();
</script>
