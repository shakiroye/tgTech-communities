<script setup lang="ts">
import type { CommunityInterface } from "~/types";

defineProps({
  community: {
    type: Object as PropType<CommunityInterface>,
    required: true,
  },
});
</script>
<template>
  <div
    class="p-3 flex flex-col gap-3 rounded-lg border-2 transition duration-500 ease-in-out hover:-translate-y-1.5 hover:border-primary-500 dark:hover:border-primary-900 dark:border-gray-700"
  >
    <div class="flex justify-center mb-4" v-if="community.image">
      <img
        :src="`/${community.image}`"
        class="rounded-full w-20"
        :alt="community.name + ' logo'"
      />
    </div>
    <div class="flex justify-center mb-4" v-else>
      <img
        :src="`/images/placeholder.png`"
        class="rounded-full w-20"
        :alt="community.name + ' logo'"
      />
    </div>
    <h3 class="font-bold text-xl text-center">
      {{ community.name }}
    </h3>
    <p class="text-center text-sm grow">{{ community.description }}</p>
    <div class="flex flex-wrap gap-4 justify-center">
      <NuxtLink
        v-if="community.links.website"
        :to="community.links.website"
        target="_blank"
      >
        <i
          class="i-heroicons-globe-alt h-6 w-6 transition duration-100 ease-in-out hover:text-primary-700 dark:hover:border-primary-900"
        />
      </NuxtLink>
      <NuxtLink
        v-if="community.links.github"
        :to="community.links.github"
        target="_blank"
      >
        <i
          class="i-bxl-github h-6 w-6 transition duration-100 ease-in-out hover:text-primary-700"
        />
      </NuxtLink>
      <NuxtLink
        v-if="community.links.telegram"
        :to="community.links.telegram"
        target="_blank"
      >
        <i
          class="i-bxl-telegram h-6 w-6 transition duration-100 ease-in-out hover:text-primary-700"
        />
      </NuxtLink>
      <NuxtLink
        v-if="community.links.twitter"
        :to="community.links.twitter"
        target="_blank"
      >
        <i
          class="i-bxl-twitter h-6 w-6 transition duration-100 ease-in-out hover:text-primary-700"
        />
      </NuxtLink>
      <NuxtLink
        v-if="community.links.discord"
        :to="community.links.discord"
        target="_blank"
      >
        <i
          class="i-bxl-discord-alt h-6 w-6 transition duration-100 ease-in-out hover:text-primary-700"
        />
      </NuxtLink>
      <NuxtLink
        v-if="community.links.linkedin"
        :to="community.links.linkedin"
        target="_blank"
      >
        <i
          class="i-bxl-linkedin h-6 w-6 transition duration-100 ease-in-out hover:text-primary-700"
        />
      </NuxtLink>
      <NuxtLink
        v-if="community.links.facebook"
        :to="community.links.facebook"
        target="_blank"
      >
        <i
          class="i-bxl-facebook-circle h-6 w-6 transition duration-100 ease-in-out hover:text-primary-700"
        />
      </NuxtLink>
      <NuxtLink
        v-if="community.links.instagram"
        :to="community.links.instagram"
        target="_blank"
      >
        <i
          class="i-bxl-instagram h-6 w-6 transition duration-100 ease-in-out hover:text-primary-700"
        />
      </NuxtLink>
      <NuxtLink
        v-if="community.links.whatsapp"
        :to="community.links.whatsapp"
        target="_blank"
      >
        <i
          class="i-bxl-whatsapp h-6 w-6 transition duration-100 ease-in-out hover:text-primary-700"
        />
      </NuxtLink>
      <NuxtLink
        v-if="community.links.meetup"
        :to="community.links.meetup"
        target="_blank"
      >
        <i
          class="i-mdi-meetup h-6 w-6 transition duration-100 ease-in-out hover:text-primary-700"
        />
      </NuxtLink>
      <NuxtLink
        v-if="community.links.youtube"
        :to="community.links.youtube"
        target="_blank"
      >
        <i
          class="i-mdi-youtube h-6 w-6 transition duration-100 ease-in-out hover:text-primary-700"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
