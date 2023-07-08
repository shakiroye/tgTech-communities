<script setup>
useHead({
  htmlAttrs: {
    lang: "en",
  },
  charset: "utf-8",
  title: "Togo Tech Communities",
  meta: [
    {
      name: "description",
      content: "Discover the Thriving Tech Communities shaping Togo's Future.",
    },
    {
      property: "og:image",
      content: "https://togo-tech-communities.netlify.app/social-card.png",
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:creator", content: "@shakiroye" },
  ],
  link: [
    {
      rel: "icon",
      type: "image/svg",
      href: "/community.svg",
    },
  ],
});
</script>
<template>
  <div>
    <Navbar />
    <NuxtPage />
  </div>
</template>
