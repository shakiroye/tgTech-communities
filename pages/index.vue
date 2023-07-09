<script setup lang="ts">
import { useCommunities } from "@/composables/useCommunities";
const communities = useCommunities();
</script>

<template>
  <div>
    <main>
      <div class="text-center mb-5 flex flex-col items-center gap-5">
        <h1 class="text-3xl sm:text-5xl md:text-7xl font-extrabold">
          Togo Tech <br />
          Communities
        </h1>
        <p class="text-gray-500">
          Discover the Thriving Tech Communities shaping Togo's Future.
        </p>
        <NuxtLink
          to="https://github.com/shakiroye/tgTech-communities/blob/main/CONTRIBUTING.md"
          target="_blank"
          class="w-fit bg-primary-700 p-3 text-white rounded-full flex items-center gap-2"
        >
          <i
            class="i-bxl-github h-6 w-6 transition duration-500 ease-in-out"
          ></i>
          <small class="text-md"> Contribute to the project </small>
        </NuxtLink>
      </div>

      <div
        class="w-full z-50 rounded-lg p-3 grid grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
      >
        <div
          class="p-3 rounded-lg border-2 transition duration-500 ease-in-out hover:border-primary-500 dark:hover:border-primary-900 dark:border-gray-700"
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
                class="i-heroicons-globe-alt h-6 w-6 transition duration-100 ease-in-out hover:text-primary-700 dark:hover:border-primary-900"
              ></i>
            </NuxtLink>
            <NuxtLink
              v-if="community.links.github"
              :to="community.links.github"
              target="_blank"
            >
              <i
                class="i-bxl-github h-6 w-6 transition duration-100 ease-in-out hover:text-primary-700"
              ></i>
            </NuxtLink>
            <NuxtLink
              v-if="community.links.telegram"
              :to="community.links.telegram"
              target="_blank"
            >
              <i
                class="i-bxl-telegram h-6 w-6 transition duration-100 ease-in-out hover:text-primary-700"
              ></i>
            </NuxtLink>
            <NuxtLink
              v-if="community.links.twitter"
              :to="community.links.twitter"
              target="_blank"
            >
              <i
                class="i-bxl-twitter h-6 w-6 transition duration-100 ease-in-out hover:text-primary-700"
              ></i>
            </NuxtLink>
            <NuxtLink
              v-if="community.links.discord"
              :to="community.links.discord"
              target="_blank"
            >
              <i
                class="i-bxl-discord-alt h-6 w-6 transition duration-100 ease-in-out hover:text-primary-700"
              ></i>
            </NuxtLink>
            <NuxtLink
              v-if="community.links.linkedin"
              :to="community.links.linkedin"
              target="_blank"
            >
              <i
                class="i-bxl-linkedin h-6 w-6 transition duration-100 ease-in-out hover:text-primary-700"
              ></i>
            </NuxtLink>
            <NuxtLink
              v-if="community.links.facebook"
              :to="community.links.facebook"
              target="_blank"
            >
              <i
                class="i-bxl-facebook-circle h-6 w-6 transition duration-100 ease-in-out hover:text-primary-700"
              ></i>
            </NuxtLink>
            <NuxtLink
              v-if="community.links.instagram"
              :to="community.links.instagram"
              target="_blank"
            >
              <i
                class="i-bxl-instagram h-6 w-6 transition duration-100 ease-in-out hover:text-primary-700"
              ></i>
            </NuxtLink>
            <NuxtLink
              v-if="community.links.whatsapp"
              :to="community.links.whatsapp"
              target="_blank"
            >
              <i
                class="i-bxl-whatsapp h-6 w-6 transition duration-100 ease-in-out hover:text-primary-700"
              ></i>
            </NuxtLink>
            <NuxtLink
              v-if="community.links.meetup"
              :to="community.links.meetup"
              target="_blank"
            >
              <i
                class="i-mdi-meetup h-6 w-6 transition duration-100 ease-in-out hover:text-primary-700"
              ></i>
            </NuxtLink>
            <NuxtLink
              v-if="community.links.youtube"
              :to="community.links.youtube"
              target="_blank"
            >
              <i
                class="i-mdi-youtube h-6 w-6 transition duration-100 ease-in-out hover:text-primary-700"
              ></i>
            </NuxtLink>
          </div>
        </div>
      </div>

      <div
        class="fixed -z-50 right-16 -bottom-44 w-1/4 h-1/2 bg-gradient-to-r from-primary-400/20 to-cyan-400/20 blur-3xl rounded-full"
      ></div>
      <div
        class="dark:fixed -z-50 left-0 bottom-0 w-full h-full bg-gradient-to-r from-primary-400/10 to-cyan-400/10 blur-sm"
      ></div>
    </main>
  </div>
</template>
