<script setup lang="ts">
const colorMode = useColorMode();
</script>
<template>
  <nav class="w-full z-50">
    <div class="flex justify-between items-center p-5 sm:px-10 md:px-20">
      <NuxtLink to="/" class="flex items-center gap-3">
        <UIcon
          name="i-fluent-people-community-20-regular"
          class="h-8 w-8 transition duration-500 ease-in-out text-primary-900"
        />
        <h1 class="font-bold sm:text-lg">Togo Tech Communities</h1>
      </NuxtLink>
      <div class="flex items-center gap-3 cursor-pointer">
        <UIcon
          name="i-heroicons-moon"
          class="h-6 w-6 transition duration-500 ease-in-out"
          v-if="colorMode.preference === 'light'"
          @click="colorMode.preference = 'dark'"
        />
        <UIcon
          name="i-heroicons-sun"
          class="h-6 w-6 transition duration-500 ease-in-out"
          v-if="colorMode.preference === 'dark'"
          @click="colorMode.preference = 'light'"
        />
        <NuxtLink
          to="https://github.com/shakiroye/tgTech-communities"
          target="_blank"
          class="w-fit sm:bg-primary-700 sm:dark:bg-primary-900 sm:py-2 sm:px-5 sm:text-white rounded-lg text-lg flex items-center gap-2"
        >
          <UIcon name="i-bxl-github" class="h-6 w-6 transition duration-500 ease-in-out" />
          <small class="hidden sm:block text-md"> Add a community </small>
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>
