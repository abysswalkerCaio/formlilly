<template>
  <footer
    class="flex flex-col gap-10 bg-zinc-200 dark:bg-zinc-950 text-deep-blush-950 dark:text-deep-blush-100 py-12 px-10 md:px-32"
  >
    <div
      class="flex flex-col-reverse md:flex-row md:justify-between gap-10 border-b border-b-zinc-500 pb-14"
    >
      <div class="flex flex-col">
        <HeadingsFifthHeader :content="'CAIO COSTA'" />
        <p
          class="md:max-w-[500px] text-sm sm:text-base text-zinc-800 dark:text-zinc-200"
        >
          I'm a frontend developer with experience in backend and databases, I
          integrate different layers of technology to create digital experiences
          that exceed expectations. Combining innovation and technical
          excellence, I bring every detail to life, from the interface to the
          inner workings.
        </p>
      </div>
      <div class="flex flex-col">
        <HeadingsFifthHeader :content="'SOCIAL'" />
        <div
          class="flex flex-wrap gap-5 text-2xl text-zinc-800 dark:text-zinc-200"
        >
          <li v-for="link in links" class="list-none">
            <a
              :href="link.to"
              target="_blank"
              class="hover:text-deep-blush-900 dark:hover:text-deep-blush-200 transition ease-out"
              ><font-awesome-icon :icon="link.icon"
            /></a>
          </li>
        </div>
      </div>
    </div>
    <div class="flex flex-col sm:flex-row justify-between items-center gap-5">
      <span class="text-center text-sm text-zinc-800 dark:text-zinc-200"
        >© Copyright 2024. Made by <b>Caio Costa</b></span
      >
      <ThemeButton />
    </div>
  </footer>
</template>

<script setup lang="ts">
import type { TProps } from "../types/social";

const props = defineProps<TProps>();
</script>
