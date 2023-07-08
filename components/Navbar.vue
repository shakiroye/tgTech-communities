<script setup lang="ts">
const colorMode = useColorMode();
</script>
<template>
  <nav class="w-full z-50">
    <div class="flex justify-between items-center p-5 sm:px-10 md:px-20">
      <NuxtLink to="/" class="flex items-center gap-3">
        <i
          class="i-fluent-people-community-20-regular h-8 w-8 transition duration-500 ease-in-out text-primary-900"
        ></i>
        <h1 class="font-bold text-lg">Togo Tech Communities</h1>
      </NuxtLink>
      <div class="flex gap-3 cursor-pointer">
        <i
          class="i-heroicons-moon h-6 w-6 transition duration-500 ease-in-out"
          v-if="colorMode.preference === 'light'"
          @click="colorMode.preference = 'dark'"
        />
        <i
          class="i-heroicons-sun h-6 w-6 transition duration-500 ease-in-out"
          v-if="colorMode.preference === 'dark'"
          @click="colorMode.preference = 'light'"
        />
        <NuxtLink
          to="https://github.com/shakiroye/tgTech-communities"
          target="_blank"
        >
          <i class="i-bxl-github h-6 w-6 transition duration-500 ease-in-out" />
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>
