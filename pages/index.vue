<template>
  <main>
    <div class="text-center mb-5">
      <h1 class="text-3xl sm:text-5xl md:text-7xl mb-3 font-extrabold">
        Togo Tech <br />
        Communities
      </h1>
      <p>Discover the Thriving Tech Communities shaping Togo's Future.</p>
    </div>

    <div
      class="w-full rounded-lg p-3 grid grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
    >
      <div
        class="p-3 rounded-lg bg-white border-2 transition duration-500 ease-in-out hover:border-primary-700"
        v-for="(community, index) in communities"
        :key="index"
      >
        <h3 class="font-bold text-xl mb-3">{{ community.name }}</h3>
        <div class="flex flex-wrap gap-4">
          <NuxtLink
            v-if="community.links.website"
            :to="community.links.website"
            target="_blank"
          >
            <i
              class="i-heroicons-globe-alt h-6 w-6 transition duration-500 ease-in-out hover:text-primary-700"
            ></i>
          </NuxtLink>
          <NuxtLink
            v-if="community.links.github"
            :to="community.links.github"
            target="_blank"
          >
            <i
              class="i-bxl-github h-6 w-6 transition duration-500 ease-in-out hover:text-primary-700"
            ></i>
          </NuxtLink>
          <NuxtLink
            v-if="community.links.telegram"
            :to="community.links.telegram"
            target="_blank"
          >
            <i
              class="i-bxl-telegram h-6 w-6 transition duration-500 ease-in-out hover:text-primary-700"
            ></i>
          </NuxtLink>
          <NuxtLink
            v-if="community.links.twitter"
            :to="community.links.twitter"
            target="_blank"
          >
            <i
              class="i-bxl-twitter h-6 w-6 transition duration-500 ease-in-out hover:text-primary-700"
            ></i>
          </NuxtLink>
          <NuxtLink
            v-if="community.links.discord"
            :to="community.links.discord"
            target="_blank"
          >
            <i
              class="i-bxl-discord-alt h-6 w-6 transition duration-500 ease-in-out hover:text-primary-700"
            ></i>
          </NuxtLink>
          <NuxtLink
            v-if="community.links.linkedin"
            :to="community.links.linkedin"
            target="_blank"
          >
            <i
              class="i-bxl-linkedin h-6 w-6 transition duration-500 ease-in-out hover:text-primary-700"
            ></i>
          </NuxtLink>
          <NuxtLink
            v-if="community.links.facebook"
            :to="community.links.facebook"
            target="_blank"
          >
            <i
              class="i-bxl-facebook-circle h-6 w-6 transition duration-500 ease-in-out hover:text-primary-700"
            ></i>
          </NuxtLink>
          <NuxtLink
            v-if="community.links.instagram"
            :to="community.links.instagram"
            target="_blank"
          >
            <i
              class="i-bxl-instagram h-6 w-6 transition duration-500 ease-in-out hover:text-primary-700"
            ></i>
          </NuxtLink>
          <NuxtLink
            v-if="community.links.whatsapp"
            :to="community.links.whatsapp"
            target="_blank"
          >
            <i
              class="i-bxl-whatsapp h-6 w-6 transition duration-500 ease-in-out hover:text-primary-700"
            ></i>
          </NuxtLink>
          <NuxtLink
            v-if="community.links.meetup"
            :to="community.links.meetup"
            target="_blank"
          >
            <i
              class="i-mdi-meetup h-6 w-6 transition duration-500 ease-in-out hover:text-primary-700"
            ></i>
          </NuxtLink>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useCommunities } from "@/composables/useCommunities";
const communities = useCommunities();
</script>

<style scoped></style>
