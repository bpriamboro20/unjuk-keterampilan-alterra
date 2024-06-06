<script setup>
import { reactive } from "vue";
import image from "@/assets/image/projects/project.jpg";
import image1 from "@/assets/image/projects/project1.jpg";
import image2 from "@/assets/image/projects/project2.jpg";
import image4 from "@/assets/image/projects/project4.jpg";
const carouselHero = reactive([
  {
    url: image,
  },
  {
    url: image1,
  },
  {
    url: image2,
  },
  {
    url: image4,
  },
]);
</script>

<template>
  <div class="container-wide container-carousel w-90 mx-auto pb-3 fadeInUp animated">
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item" :class="{ active: index === 0 }" v-for="(list, index) in carouselHero">
          <img :src="list.url" class="d-block w-100 rounded-3" alt="..." />
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(150px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animated {
  animation-duration: 2s;
  animation-fill-mode: both;
}

.fadeInUp {
  animation-name: fadeInUp;
}

@media (max-width: 767px) {
  .container-carousel {
    width: 100%;
  }
  .container-carousel img {
    height: 40vh;
  }
}
</style>
