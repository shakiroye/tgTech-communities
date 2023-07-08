<template>
  <main>
    <div class="text-center">
      <h1 class="text-6xl font-extrabold mb-3">
        Togo Tech <br />
        Communities
      </h1>
      <p>Discover the Thriving Tech Communities shaping Togo's Future.</p>
      {{ communities }}
    </div>
  </main>
</template>

<script setup lang="ts">
import { useCommunities } from "@/composables/useCommunities";
const communities = useCommunities();
</script>

<style scoped></style>
