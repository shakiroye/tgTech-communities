<script setup lang="ts"></script>
<template>
  <nav class="w-full bg-white dark:bg-primary-900 flex justify-between">
    <NuxtLink to="/" class="flex items-center gap-3">
      <i
        class="i-fluent-people-community-20-regular h-8 w-8 transition duration-500 ease-in-out text-primary-700"
      ></i>
      <h1 class="font-bold text-xl text-primary-700">Togo Tech Communities</h1>
    </NuxtLink>
    <NuxtLink
      to="/dashboard"
      class="bg-primary-700 py-2 px-3 text-white rounded-lg flex items-center gap-2"
    >
      <i class="i-bxl-github h-6 w-6 transition duration-500 ease-in-out"></i>
      <small> Contribute to the project </small>
    </NuxtLink>
  </nav>
</template>
