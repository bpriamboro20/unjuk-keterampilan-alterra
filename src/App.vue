<script setup>
import { RouterView } from "vue-router";

import "./assets/main.css";
import navbar from "./components/navbar.vue";

import footerBar from "./components/footer.vue";
</script>

<template>
  <navbar />
  <RouterView />
  <footerBar />
</template>
