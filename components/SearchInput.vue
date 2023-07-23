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
    class="w-80"
  />
</template>

<style scoped></style>
