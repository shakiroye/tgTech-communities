<script setup lang="ts"></script>
<template>
  <nav class="w-full bg-white dark:bg-primary-900 flex justify-between">
    <NuxtLink to="/" class="flex items-center gap-3">
      <h1 class="font-bold text-xl">Togo Tech Communities</h1>
    </NuxtLink>
    <NuxtLink
      to="/dashboard"
      class="bg-primary-700 py-2 px-3 text-white rounded-xl"
    >
      Add a community
    </NuxtLink>
  </nav>
</template>
