<script setup lang="ts">
const search = ref("");
const emits = defineEmits(["search"]);

watch(search, (value) => {
  emits("search", value);
});
</script>

<template>
  <input
    type="search"
    name="search"
    id="search"
    v-model="search"
    placeholder="Search a community..."
    class="w-80 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-900 transition duration-500 ease-in-out"
  />
</template>
