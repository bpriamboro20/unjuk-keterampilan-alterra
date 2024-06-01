<script setup>
import { ref } from "vue";

const copyright = ref("&copy; Bayu Aji Priamboro | 2024 ");
</script>

<template>
  <div class="container-wide bg-custom-color h-auto text-white fw-bold d-flex justify-content-center align-items-center p-3">
    <p class="mb-0" v-html="copyright"></p>
  </div>
</template>
