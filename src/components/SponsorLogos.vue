<template>
  <div class="row my-5 sponsor">
    <div v-for="sponsor in sponsors" :key="sponsor.id" class="col">
      <img :src="sponsor.image" alt="sponsor" class="mb-4 sponsor-logo" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SponsorLogos.vue",
  data: () => ({
    sponsors: [
      {
        image: require(`@/assets/b2-157x66.png`),
      },
      {
        image: require(`@/assets/b3-157x66.png`),
      },
      {
        image: require(`@/assets/b2-157x66.png`),
      },
      {
        image: require(`@/assets/b3-157x66.png`),
      },
    ],
  }),
};
</script>

<style scoped>
.sponsor-logo {
  opacity: 0.5;
  cursor: pointer;
  transition: all 0.5s ease;
}
.sponsor-logo:hover {
  opacity: 0.9;
}
</style>
