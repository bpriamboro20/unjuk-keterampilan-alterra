<script setup>
import { useServicesStore } from "@/store/storeServices";

const { service } = useServicesStore();
</script>

<template>
  <div class="container-wide px-1 px-md-5 py-md-4 py-3">
    <h1 class="text-center fw-bold mb-3 mb-md-5 text-custom-color">Services</h1>
    <div class="row justify-content-center">
      <div v-for="(item, index) in service" :key="index" class="col-12 col-md-6 col-lg-4 mb-4">
        <div class="card cursor-pointer bg-custom-color rounded-3 p-4 text-white shadow-sm">
          <div class="icon text-center pt-3 mb-3" v-html="item.icon"></div>
          <div class="iconname text-center mb-3 fs-4 fw-bold">{{ item.namaIcon }}</div>
          <div class="description fs-6">{{ item.descriptionIcon }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  flex-shrink: 0;
  transition: 0.5s ease-in-out;
}

.card:hover {
  transform: scale(1.1);
  transition: 0.5s ease-in-out;
}
</style>
