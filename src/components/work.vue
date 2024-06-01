<script setup>
import { useWorkStore } from "@/store/storeWorkExperience";

const { works, imageUrl } = useWorkStore();
</script>

<template>
  <div class="image-work text-center py-3 animated fadeInDown">
    <img class="img-fluid" :src="imageUrl" alt="" />
  </div>
  <section class="bsb-timeline-1 py-5 py-xl-8">
    <div class="container animated fadeInUp">
      <div class="row justify-content-center">
        <div class="col-10 col-md-8 col-xl-6">
          <ul class="timeline" v-for="list in works">
            <li class="timeline-item pb-4">
              <div class="timeline-body">
                <div class="timeline-content">
                  <div class="card border-0">
                    <div class="card-body p-0">
                      <h5 class="card-subtitle text-custom-color mb-2">{{ list.year }}</h5>
                      <h2 class="card-title mb-2 fw-bold fs-4">{{ list.company }}</h2>
                      <p class="card-text m-0">{{ list.position }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.image-work img {
  width: 520px;
  height: 200px;
}

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

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-150px);
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

.fadeInDown {
  animation-name: fadeInDown;
}
</style>
