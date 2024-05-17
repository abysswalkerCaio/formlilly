<template>
  <button
    type="submit"
    class="shadow-md self-end dark:shadow-zinc-800 select-none bg-deep-blush-950 hover:bg-deep-blush-900 text-deep-blush-100 dark:bg-deep-blush-100 dark:hover:bg-deep-blush-200 dark:text-deep-blush-950 hover:-translate-y-1 transition ease-in-out duration-300 rounded p-4 w-full max-w-56 text-center font-semibold"
  >
    {{ content }}
  </button>
</template>

<script setup lang="ts">
type TProps = {
  content: string;
};

const props = defineProps<TProps>();
</script>
