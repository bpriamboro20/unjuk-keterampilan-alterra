<template>
  <div class="text-center mx-auto">
    <h3 class="pt-4 pb-1 text-custom-color fw-bold text-center">Resume</h3>
    <RouterLink to="/resume/education" class="text-decoration-none px-2 text-black" :class="{ 'active-link': route.path === '/resume/education' }">Education</RouterLink>
    |
    <RouterLink to="/resume/experience" class="text-decoration-none px-2" :class="{ 'active-link': route.path === '/resume/experience' }"> Work Experience</RouterLink>
  </div>
  <work />
</template>

<script setup>
import { RouterLink, useRoute } from "vue-router";
import work from "@/components/work.vue";
const route = useRoute();
</script>

<style scoped>
.active-link {
  font-weight: bold;
  color: white;
  background-color: #00e664;
  padding: 3px;
  border-radius: 5px;
}
</style>
