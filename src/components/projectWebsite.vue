<script setup>
import { useProjectsWebsiteStore } from "@/store/storeProjectsWebsite";

const { projects } = useProjectsWebsiteStore();
</script>

<template>
  <div class="pt-2 pb-5 px-2 px-md-5">
    <h3 class="text-custom-color py-2 fw-bold text-center">Project Website</h3>
    <h5 class="text-custom-color text-center">(The purpose of this project is for learning and skill development, not for commercial gain.)</h5>
    <div class="row justify-content-center pt-5 gap-5">
      <div class="col-12 col-md-5 col-lg-3 card rounded-3 shadow-sm" v-for="list in projects">
        <img :src="list.img" alt="kesalahan" />
        <div class="body-card py-2 px-4">
          <h5 class="title fw-bold text-custom-color fs-5">{{ list.title }}</h5>
          <div class="tech mb-2" v-html="list.tech"></div>
          <div class="decription-card">
            <p>{{ list.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.card img {
  height: 175px;
}

.card {
  cursor: pointer;
}

.row,
.col-3,
.card,
.body-card {
  padding: 0 !important;
  margin: 0 !important;
}
.body-card {
  padding-top: 0 !important;
  padding-right: 0 !important;
  padding-bottom: 0 !important;
  padding-left: 0 !important;
}
</style>
