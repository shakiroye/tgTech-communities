<script setup lang="ts">
import { useCommunities } from "@/composables/useCommunities";
import type { CommunityInterface } from "~/types";
import SearchInput from "~/components/SearchInput.vue";

const communities = useCommunities();
const searchTerm = ref("");
const filteredCommunities: Ref<CommunityInterface[]> = ref([]);

const isSearchResultsEmpty = computed(
  () => filteredCommunities.value.length === 0 && searchTerm.value
);

onMounted(() => {
  filteredCommunities.value = communities.value;
});

const filterCommunities = (searchQuery: string) => {
  searchTerm.value = searchQuery;
  filteredCommunities.value = communities.value.filter((community) => {
    const communityName = community.name.toLowerCase();
    return communityName.includes(searchQuery.toLowerCase());
  });
};
</script>

<template>
  <main>
    <div class="text-center mb-5 flex flex-col items-center gap-5">
      <h1 class="text-3xl sm:text-5xl md:text-7xl font-extrabold">
        Togo Tech <br />
        Communities
      </h1>
      <p class="text-gray-500">
        Discover the Thriving Tech Communities shaping Togo's Future.
      </p>

      <SearchInput @search="filterCommunities" />
    </div>
    <div
      class="w-full z-50 rounded-lg px-3 py-10 grid grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 gap-4"
      v-if="!isSearchResultsEmpty"
    >
      <CommunityCard
        :community="community"
        v-for="(community, index) in filteredCommunities"
        :key="index"
      />
    </div>

    <div
      v-else
      class="flex items-center justify-center self-center my-14 mx-auto"
    >
      <p
        class="text-center text-xl sm:text-2xl md:tsext-3xl font-medium opacity-80"
      >
        Sorry, we did not find any results for " {{ searchTerm }} "
      </p>
    </div>

    <div
      class="fixed -z-50 left-0 bottom-0 w-full h-32 bg-gradient-to-r from-primary-400/20 to-cyan-400/20 blur-3xl"
    ></div>
    <div
      class="dark:fixed -z-50 left-0 bottom-0 w-full h-full bg-gradient-to-r from-primary-400/10 to-cyan-400/10 blur-sm"
    ></div>
  </main>
</template>
