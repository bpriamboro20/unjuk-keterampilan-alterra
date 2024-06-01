<script setup>
import carousel from "@/components/carousel.vue";
import projectWebsite from "@/components/projectWebsite.vue";
import projectDekstop from "@/components/projectDekstop.vue";
import waves1 from "@/components/waves1.vue";
import waves2 from "@/components/waves2.vue";
</script>
<template>
  <div class="text-center bg-custom-color">
    <h3 class="text-white fw-bold py-4">My Projects</h3>
    <carousel />
  </div>
  <waves1 />
  <projectWebsite />

  <div class="">
    <waves2 />
    <projectDekstop />
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
