<script setup lang="ts">
import type { CommunityInterface } from "~/types";

defineProps({
  community: {
    type: Object as PropType<CommunityInterface>,
    required: true,
  },
});

const socialIcons = {
  website: 'i-heroicons-globe-alt',
  github: 'i-bxl-github',
  telegram: 'i-bxl-telegram',
  twitter: 'i-simple-icons-x',
  discord: 'i-bxl-discord-alt',
  linkedin: 'i-bxl-linkedin',
  facebook: 'i-bxl-facebook-circle',
  instagram: 'i-bxl-instagram',
  whatsapp: 'i-bxl-whatsapp',
  meetup: 'i-mdi-meetup',
  youtube: 'i-mdi-youtube',
} as const;
</script>

<template>
  <div
    class="p-3 flex flex-col gap-3 rounded-lg border border-gray-300 dark:border-gray-600 transition duration-500 ease-in-out hover:-translate-y-1.5 hover:border-primary-500 dark:hover:border-primary-900"
  >
    <!-- Image -->
    <div class="flex justify-center mb-4">
      <img
        :src="community.image ? `/${community.image}` : '/images/placeholder.png'"
        class="rounded-full w-20"
        :alt="`${community.name} logo`"
      />
    </div>

    <!-- Name -->
    <h3 class="font-bold text-xl text-center">
      {{ community.name }}
    </h3>

    <!-- Description -->
    <p class="text-center text-sm grow">
      {{ community.description }}
    </p>

    <!-- Links -->
    <div class="flex flex-wrap gap-4 justify-center">
      <NuxtLink
        v-for="(url, platform) in community.links"
        :key="platform"
        v-show="url"
        :to="url"
        target="_blank"
        :aria-label="`Link to ${platform}`"
      >
        <UIcon
          :name="socialIcons[platform as keyof typeof socialIcons]"
          class="h-6 w-6 transition duration-500 ease-in-out hover:text-primary-700 dark:hover:text-primary-900"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>