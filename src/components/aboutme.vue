<script setup>
import { useAboutStore } from "@/store/storeAbout";

const { imageUrl, about, socmed } = useAboutStore();
</script>

<template>
  <div class="container-wide py-2 py-md-3 px-1 px-md-5 mb-3">
    <h1 class="text-center text-custom-color fw-bold">About Me</h1>
    <div class="row align-items-center justify-content-center gap-5">
      <div class="col-md-12 col-lg-5 d-flex justify-content-center">
        <div class="img-hero pt-4 mb-lg-5">
          <img :src="imageUrl" alt="gambarWebsite" class="img-fluid" />
        </div>
      </div>
      <div class="col-md-12 col-lg-6">
        <div class="about fs-6 mb-3 mb-md-4 text-justify lh-lg">{{ about }}</div>
        <div class="socmed-icons d-flex justify-content-start">
          <div class="d-flex flex-wrap justify-content-start gap-2 gap-md-5">
            <div v-for="(item, index) in socmed" :key="index" class="icon-hover col-2 col-sm-2 col-md-1">
              <a :href="item.url" target="_blank" v-html="item.icon" class="d-block icon-size"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.icon-size {
  font-size: 3rem;
  width: 3rem;
  height: 3rem;
}

@media (max-width: 768px) {
  .icon-size {
    font-size: 2.5rem;
    width: 2.5rem;
    height: 2.5rem;
  }
}

@media (max-width: 576px) {
  .icon-size {
    font-size: 2rem;
    width: 2rem;
    height: 2rem;
  }
}
</style>
