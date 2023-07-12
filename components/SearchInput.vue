<script setup lang="ts">
const search = ref("");
const emits = defineEmits(['search'])

watch(search, (value, oldValue, onCleanup) => {

  if (value) {
    emits('search', value)
  }
})

</script>

<template>
  <input
      type="search"
      name="search"
      id="search"
      v-model="search"
      placeholder="Search..."
      class="w-80"
  />
</template>

<style scoped>

</style>