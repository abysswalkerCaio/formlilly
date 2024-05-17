<template>
  <DefaultContainer>
    <div
      class="flex flex-col gap-8 p-8 sm:p-10 w-full max-w-[800px] h-fit rounded bg-zinc-200 dark:bg-zinc-900 shadow-md dark:shadow-zinc-800"
    >
      <span
        class="font-bold text-zinc-800 dark:text-zinc-200 text-sm sm:text-base md:text-lg"
        >Efficient and Dynamic</span
      >
      <HeadingsPrimaryHeader :content="'Simple, powerful.'" />
      <p
        class="text-zinc-800 dark:text-zinc-200 md:max-w-[400px] text-sm sm:text-base md:text-lg"
      >
        The simplest and most powerful form generation system on the market,
        combining ease of use with advanced features for maximum efficiency.
      </p>
      <div class="flex flex-col sm:flex-row gap-4">
        <DefaultLogInButton :content="'Log In'" :to="'/'" />
        <DefaultSignUpButton :content="'Sign Up'" :to="'/'" />
      </div>
    </div>
  </DefaultContainer>
</template>

<style scoped></style>
