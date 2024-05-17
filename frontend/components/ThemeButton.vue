<template>
  <ClientOnly>
    <button
      class="hover:text-deep-blush-900 dark:hover:text-deep-blush-200 text-xl transition ease-in-out"
      @click="isDark = !isDark"
    >
      <font-awesome-icon :icon="isDark ? 'moon' : 'sun'" />
    </button>
  </ClientOnly>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});
</script>
